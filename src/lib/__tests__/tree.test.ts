import { describe, it, expect } from 'vitest';
import { treeSteps, type TreeKind, type TStep } from '../../components/visuals/treeSim';

const KINDS: TreeKind[] = ['build', 'search', 'traverse', 'rotate'];
const SEED = [8, 3, 10, 1, 6, 14, 4, 7, 13];
const SORTED = [...SEED].sort((a, b) => a - b);

function nodeOf(s: TStep, id: number) {
  const n = s.nodes.find((n) => n.id === id);
  if (!n) throw new Error(`node ${id} missing`);
  return n;
}

describe.each(KINDS)('tree scene: %s', (kind) => {
  const steps = treeSteps(kind);

  it('is non-trivial and deterministic', () => {
    expect(steps.length).toBeGreaterThan(4);
    expect(JSON.stringify(treeSteps(kind))).toBe(JSON.stringify(steps));
  });

  it('every step is a well-formed tree (edges wired, ids/x unique, ≤2 children)', () => {
    for (const s of steps) {
      const ids = s.nodes.map((n) => n.id);
      expect(new Set(ids).size).toBe(ids.length);
      expect(new Set(s.nodes.map((n) => n.x)).size).toBe(s.nodes.length);
      const childOf = new Map<number, number[]>(); // parent -> children
      const seenAsChild = new Map<number, number>(); // child -> times claimed
      for (const e of s.edges) {
        nodeOf(s, e.a);
        nodeOf(s, e.b);
        childOf.set(e.a, [...(childOf.get(e.a) ?? []), e.b]);
        seenAsChild.set(e.b, (seenAsChild.get(e.b) ?? 0) + 1);
      }
      for (const [, kids] of childOf) expect(kids.length).toBeLessThanOrEqual(2);
      for (const [, times] of seenAsChild) expect(times).toBe(1);
      // a step that claims a hit/hot must actually contain the node it points at
      if (s.hit !== undefined) nodeOf(s, s.hit);
      if (s.hot !== undefined) nodeOf(s, s.hot);
    }
  });

  it('respects the BST search vow in every occupied step (v smaller ⇔ left via inorder x)', () => {
    for (const s of steps) {
      for (const e of s.edges) {
        const p = nodeOf(s, e.a);
        const c = nodeOf(s, e.b);
        expect(c.v < p.v).toBe(c.x < p.x);
      }
    }
  });
});

describe('build scene', () => {
  const steps = treeSteps('build');
  const last = steps[steps.length - 1];

  it('lands all nine inserts exactly once (hit ledger)', () => {
    const hits = steps.filter((s) => s.hit !== undefined);
    expect(hits.length).toBe(SEED.length);
    expect(new Set(hits.map((s) => nodeOf(s, s.hit!).v))).toEqual(new Set(SEED));
  });

  it('finished tree holds exactly the seed set, root 8, height 3 (log₂-ish, not a staircase)', () => {
    expect(new Set(last.nodes.map((n) => n.v))).toEqual(new Set(SEED));
    expect(nodeOf(last, last.nodes.find((n) => n.y === 0)!.id).v).toBe(8);
    expect(Math.max(...last.nodes.map((n) => n.y))).toBe(3);
    expect(SORTED).toEqual([...last.nodes].sort((a, b) => a.x - b.x).map((n) => n.v));
  });
});

describe('search scene', () => {
  const steps = treeSteps('search');

  it('finds 7 via the path 8 → 3 → 6 → (hit)', () => {
    const win = steps.find((s) => s.msg.startsWith('✓ 7'));
    expect(win).toBeDefined();
    expect(nodeOf(win!, win!.hit!).v).toBe(7);
    const before = steps.slice(0, steps.indexOf(win!));
    const path = before.filter((s) => s.hot !== undefined).map((s) => nodeOf(s, s.hot!).v);
    expect(path).toEqual([8, 3, 6]);
  });

  it('misses 5 with an honest ∅ receipt at the right-of-4, and never claims a hit', () => {
    const miss = steps.find((s) => s.msg.includes('∅'));
    expect(miss).toBeDefined();
    expect(nodeOf(miss!, miss!.hot!).v).toBe(4);
    const onlyHit = steps.filter((s) => s.hit !== undefined);
    expect(onlyHit.length).toBe(1);
    expect(nodeOf(onlyHit[0], onlyHit[0].hit!).v).toBe(7);
  });
});

describe('traverse scene', () => {
  const steps = treeSteps('traverse');
  const finals = (ord: 'in' | 'pre' | 'post') => {
    const seq = steps.filter((s) => s.order === ord && s.out !== undefined && s.out.length > 0);
    return seq[seq.length - 1].out!;
  };

  it('visits every node exactly once per order (27 visits + 3 headers)', () => {
    const visits = steps.filter((s) => s.out !== undefined && s.out.length > 0);
    expect(visits.length).toBe(27);
    for (const ord of ['in', 'pre', 'post'] as const) {
      expect(new Set(finals(ord)).size).toBe(SEED.length);
    }
  });

  it('inorder IS the sorted array wearing a tree costume', () => {
    expect(finals('in')).toEqual(SORTED);
  });

  it('preorder and postorder match the hand-derived canons', () => {
    expect(finals('pre')).toEqual([8, 3, 1, 6, 4, 7, 10, 14, 13]);
    expect(finals('post')).toEqual([1, 4, 7, 6, 3, 13, 14, 10, 8]);
  });
});

describe('rotate scene', () => {
  const steps = treeSteps('rotate');

  it('performs exactly three spins: one L (RR fix), then L+R (the LR double)', () => {
    const spins = steps.filter((s) => s.rotated);
    expect(spins.map((s) => s.rotated)).toEqual(['L', 'L', 'R']);
  });

  it('RR case ends with 2 crowning a balanced trio', () => {
    const rr = steps.find((s) => s.rotated === 'L')!;
    expect(rr.nodes.length).toBe(3);
    expect(Math.max(...rr.nodes.map((n) => n.y))).toBe(1);
    expect(nodeOf(rr, rr.nodes.find((n) => n.y === 0)!.id).v).toBe(2);
  });

  it('LR case ends with 8 crowning 5 and 10 — the search vow intact through both spins', () => {
    const last = steps[steps.length - 1];
    expect(last.rotated).toBe('R');
    expect(new Set(last.nodes.map((n) => n.v))).toEqual(new Set([10, 5, 8]));
    const root = nodeOf(last, last.nodes.find((n) => n.y === 0)!.id);
    expect(root.v).toBe(8);
    expect(last.nodes.every((n) => n.y <= 1)).toBe(true);
  });

  it('keeps every spin lawful: no step in the scene ever breaks the BST vow', () => {
    for (const s of steps) {
      for (const e of s.edges) {
        const p = nodeOf(s, e.a);
        const c = nodeOf(s, e.b);
        expect(c.v < p.v).toBe(c.x < p.x);
      }
    }
  });
});
