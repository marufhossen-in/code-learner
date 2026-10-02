import { describe, it, expect } from 'vitest';
import { graphSteps, type GraphKind, type GStep } from '../../components/visuals/graphSim';

const KINDS: GraphKind[] = ['bfs', 'dfs', 'cycle', 'topo'];
const idSet = (s: GStep) => new Set(s.nodes.map((n) => n.id));

describe.each(KINDS)('graph scene: %s', (kind) => {
  const steps = graphSteps(kind);

  it('is non-trivial and deterministic', () => {
    expect(steps.length).toBeGreaterThan(4);
    expect(JSON.stringify(graphSteps(kind))).toBe(JSON.stringify(steps));
  });

  it('references only citizens that exist, and never duplicates a discovery', () => {
    for (const s of steps) {
      const ids = idSet(s);
      expect(ids.size).toBe(s.nodes.length);
      for (const e of [...s.edges, ...s.treeEdges]) {
        expect(ids.has(e[0])).toBe(true);
        expect(ids.has(e[1])).toBe(true);
      }
      if (s.backEdge) {
        expect(ids.has(s.backEdge[0])).toBe(true);
        expect(ids.has(s.backEdge[1])).toBe(true);
      }
      expect(new Set(s.visited).size).toBe(s.visited.length); // discovered exactly once, ever
      expect(s.visited.every((v) => !s.frontier.includes(v))).toBe(true); // popped means off the frontier
    }
  });

  it('grows discovery monotonically (visited never shrinks, never rewinds)', () => {
    let prev = 0;
    for (const s of steps) {
      expect(s.visited.length).toBeGreaterThanOrEqual(prev);
      prev = s.visited.length;
    }
  });
});

describe('bfs scene', () => {
  const steps = graphSteps('bfs');
  const last = steps[steps.length - 1];

  it('discovers everyone in wave order A, B C, D E, F', () => {
    expect(last.visited).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);
  });

  it('marks each citizen with its true shortest hop-count from A', () => {
    const waveOf = new Map<string, number>();
    for (const s of steps) {
      for (const v of s.visited) if (s.hot === v && s.wave !== undefined) waveOf.set(v, s.wave);
    }
    expect(waveOf.get('A')).toBe(0);
    expect(waveOf.get('B')).toBe(1);
    expect(waveOf.get('C')).toBe(1);
    expect(waveOf.get('D')).toBe(2);
    expect(waveOf.get('E')).toBe(2);
    expect(waveOf.get('F')).toBe(3);
  });

  it('keeps the tree-parent law: every discovery edge jumps exactly one wave', () => {
    const wave: Record<string, number> = { A: 0, B: 1, C: 1, D: 2, E: 2, F: 3 };
    for (const [u, v] of last.treeEdges) {
      expect(wave[v]).toBe(wave[u] + 1);
    }
    // every non-source citizen got exactly one parent — the discovery set IS a tree
    expect(last.treeEdges.length).toBe(last.visited.length - 1);
  });
});

describe('dfs scene', () => {
  const steps = graphSteps('dfs');
  const last = steps[steps.length - 1];

  it('plunges in corridor order A, C, E, F, D, B (mark-on-push, stack-decided)', () => {
    expect(last.visited).toEqual(['A', 'C', 'E', 'F', 'D', 'B']);
  });

  it('keeps every discovery edge inside the world (tree ⊆ edges of the demo graph)', () => {
    const world = new Set(last.edges.flat());
    for (const [u, v] of last.treeEdges) {
      expect(world.has(u)).toBe(true);
      expect(world.has(v)).toBe(true);
    }
  });
});

describe('cycle scene', () => {
  const steps = graphSteps('cycle');

  it('finds exactly one back edge: E — B (gray, not the parent)', () => {
    const guns = steps.filter((s) => s.backEdge);
    expect(guns.length).toBeGreaterThanOrEqual(1);
    for (const g of guns) {
      expect(g.backEdge).toEqual(['E', 'B']);
      // both endpoints must be on the descent path when the gun fires
      expect(g.visited).toContain('E');
      expect(g.visited).toContain('B');
    }
  });

  it('rebuilds the ring constructively: B — D — F — E — B', () => {
    const final = steps[steps.length - 1];
    expect(final.msg).toContain('B — D — F — E — B');
    // constructive check: descent chain from E to B exists purely inside tree edges
    const parent: Record<string, string> = {};
    for (const [u, v] of final.treeEdges) parent[v] = u;
    let w = 'E';
    const walk: string[] = ['E'];
    while (w !== 'B') {
      w = parent[w];
      walk.unshift(w);
    }
    expect(walk).toEqual(['B', 'D', 'F', 'E']);
  });
});

describe('topo scene (Kahn on the curriculum DAG)', () => {
  const steps = graphSteps('topo');
  const last = steps[steps.length - 1];
  const order = last.visited;

  it('serves all six disciplines in the hand-derived order', () => {
    expect(order).toEqual(['arrays', 'pointers', 'lists', 'trees', 'heaps', 'graphs']);
  });

  it('keeps THE law: every edge points strictly forward in the output order', () => {
    const pos = new Map(order.map((id, i) => [id, i]));
    for (const [u, v] of last.edges) {
      expect(pos.get(u)!).toBeLessThan(pos.get(v)!);
    }
  });

  it('is directed (edges owe arrows to the renderer) and debt-accounted', () => {
    expect(steps.every((s) => s.directed)).toBe(true);
    // joins happen exactly when the final prerequisite serves: trees→heaps, heaps→graphs
    const joins = steps.filter((s) => s.msg.startsWith('＋'));
    expect(joins.map((s) => s.hot)).toEqual(['lists', 'trees', 'heaps', 'graphs']);
  });
});
