import { describe, it, expect } from 'vitest';
import { galgSteps, type GAKind, type GAStep } from '../../components/visuals/galgSim';

const KINDS: GAKind[] = ['kruskal', 'prim', 'bellman', 'floyd'];
const idsOf = (s: GAStep) => new Set(s.nodes.map((n) => n.id));
const edgeKey = (a: string, b: string) => [a, b].sort().join('|');
const weightOf = (s: GAStep, a: string, b: string) =>
  s.edges.find((e) => (e.u === a && e.v === b) || (e.u === b && e.v === a))?.w;

describe.each(KINDS)('galg scene: %s', (kind) => {
  const steps = galgSteps(kind);

  it('is non-trivial and deterministic', () => {
    expect(steps.length).toBeGreaterThan(4);
    expect(JSON.stringify(galgSteps(kind))).toBe(JSON.stringify(steps));
  });

  it('references only citizens that exist, and welds only real corridors', () => {
    for (const s of steps) {
      const ids = idsOf(s);
      const edges = new Set(s.edges.map((e) => edgeKey(e.u, e.v)));
      for (const [u, v] of s.chosen) {
        expect(ids.has(u)).toBe(true);
        expect(ids.has(v)).toBe(true);
        expect(edges.has(edgeKey(u, v))).toBe(true);
      }
      if (s.rejected) expect(edges.has(edgeKey(s.rejected[0], s.rejected[1]))).toBe(true);
      if (s.dist) for (const k of Object.keys(s.dist)) expect(ids.has(k)).toBe(true);
    }
  });
});

describe('kruskal: sort-and-weld', () => {
  const steps = galgSteps('kruskal');
  const last = steps[steps.length - 1];

  it('welds exactly |V|−1 edges into one family at total 14', () => {
    expect(last.chosen.length).toBe(6);
    expect(last.comps).toBe(1);
    const total = last.chosen.reduce((a, [u, v]) => a + (weightOf(last, u, v) ?? 0), 0);
    expect(total).toBe(14);
  });

  it('considers corridors in non-decreasing toll order', () => {
    const seen = steps
      .filter((s) => s.hotEdge)
      .map((s) => weightOf(s, s.hotEdge![0], s.hotEdge![1])!);
    for (let i = 1; i < seen.length; i++) expect(seen[i]).toBeGreaterThanOrEqual(seen[i - 1]);
  });

  it('refuses exactly one corridor — A|C — for closing a ring', () => {
    const refusals = steps.filter((s) => s.rejected);
    expect(refusals.length).toBe(1);
    expect(edgeKey(refusals[0].rejected![0], refusals[0].rejected![1])).toBe(edgeKey('A', 'C'));
  });

  it('shrinks families monotonically 7 → 1', () => {
    const comps = steps.map((s) => s.comps!);
    expect(comps[0]).toBe(7);
    for (let i = 1; i < comps.length; i++) expect(comps[i]).toBeLessThanOrEqual(comps[i - 1]);
  });

  it('keeps the weld canon: no accepted edge ever repeats', () => {
    const keys = new Set<string>();
    for (const s of steps) for (const [u, v] of s.chosen) keys.add(edgeKey(u, v));
    expect(keys.size).toBe(6);
  });
});

describe('prim: the growing wall', () => {
  const steps = galgSteps('prim');
  const last = steps[steps.length - 1];

  it('crosses citizens in wall order B, C, F, D, G, E from seed A', () => {
    const joined = steps.filter((s) => s.newest).map((s) => s.hot!);
    expect(joined).toEqual(['B', 'C', 'F', 'D', 'G', 'E']);
  });

  it('lands the SAME six welds as kruskal — the world’s unique MST admits no twin', () => {
    const kruskalSet = new Set(galgSteps('kruskal').at(-1)!.chosen.map(([a, b]) => edgeKey(a, b)));
    const primSet = new Set(last.chosen.map(([a, b]) => edgeKey(a, b)));
    expect(primSet).toEqual(kruskalSet);
  });

  it('bins at least one stale candidate once both endpoints crossed', () => {
    const stale = steps.filter((s) => s.rejected);
    expect(stale.length).toBeGreaterThanOrEqual(1);
    expect(stale.some((s) => edgeKey(s.rejected![0], s.rejected![1]) === edgeKey('A', 'C'))).toBe(true);
  });
});

describe('bellman: the honest ledger', () => {
  const steps = galgSteps('bellman');
  const last = steps[steps.length - 1];

  it('seals prices S→A 4, B 1, C 5, T 7 — the negative toll DID undercut S→B honestly', () => {
    expect(last.dist).toEqual({ S: 0, A: 4, B: 1, C: 5, T: 7 });
  });

  it('keeps the fixpoint law: no edge still relaxes (no negative cycle on this world)', () => {
    for (const e of last.edges) {
      expect(last.dist![e.v]).toBeLessThanOrEqual(last.dist![e.u] + e.w);
    }
  });

  it('grows a real path-tree: following parents from T reaches S through priced hops', () => {
    const seen = new Set<string>();
    let cur = 'T';
    while (cur !== 'S') {
      expect(seen.has(cur)).toBe(false);
      seen.add(cur);
      const p = last.parentOf![cur];
      expect(p).toBeDefined();
      const w = last.edges.find((e) => e.u === p && e.v === cur)!.w;
      expect(last.dist![p] + w).toBe(last.dist![cur]); // parent link is a tight edge
      cur = p;
    }
  });

  it('exits early: an audit round certifies the V-th round would improve nothing', () => {
    const finalMsg = last.msg;
    expect(finalMsg).toContain('audit clean');
    expect(finalMsg).toContain('S→T 7');
  });
});

describe('floyd: every pair priced', () => {
  const steps = galgSteps('floyd');
  const last = steps[steps.length - 1];
  const M = last.matrix!;
  const idx = new Map(M.ids.map((id, i) => [id, i] as [string, number]));
  const at = (a: string, b: string) => M.d[idx.get(a)!][idx.get(b)!];

  it('reads the one-source truth in row S: [0, 4, 1, 5, 7]', () => {
    expect(M.d[idx.get('S')!]).toEqual([0, 4, 1, 5, 7]);
  });

  it('keeps the democratic law: no mediator still undercuts (triangle fixpoint)', () => {
    for (const i of M.ids) for (const j of M.ids) for (const k of M.ids) {
      const ij = at(i, j); const ik = at(i, k); const kj = at(k, j);
      if (ij === null || ik === null || kj === null) continue;
      expect(ij).toBeLessThanOrEqual(ik + kj);
    }
  });

  it('prices mediated pairs it priced stepwise — A→T 3, B→T 6 — and leaves unreachable pairs null', () => {
    expect(at('A', 'T')).toBe(3);
    expect(at('B', 'T')).toBe(6);
    expect(at('T', 'S')).toBeNull();   // T is a sink on this directed world
    expect(M.ids.every((_id, i) => M.d[i][i] === 0)).toBe(true);
  });

  it('records exactly the improvements it claims: one hi-celled step per renegotiation', () => {
    const improvements = steps.filter((s) => s.matrix?.hi);
    expect(improvements.length).toBe(9);
    for (const s of improvements) {
      const [i, j] = s.matrix!.hi!;
      expect(s.matrix!.k).toBeDefined();
      expect(s.matrix!.d[i][j]).not.toBeNull();
    }
  });
});
