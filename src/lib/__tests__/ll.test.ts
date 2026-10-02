import { describe, it, expect } from 'vitest';
import { llSteps, collect, chainValues, LL_BASE, type LlStep, type LlOp } from '../../components/visuals/llSim';

const OPS: { name: string; op: LlOp; expect: string[] }[] = [
  { name: 'traverse(mid)', op: { kind: 'traverse', target: 2 }, expect: LL_BASE },
  { name: 'traverse(last)', op: { kind: 'traverse', target: LL_BASE.length - 1 }, expect: LL_BASE },
  { name: 'traverse(past-end)', op: { kind: 'traverse', target: LL_BASE.length }, expect: LL_BASE },
  { name: 'insertAt(0)', op: { kind: 'insertAt', index: 0, value: 'pineapple' }, expect: ['pineapple', ...LL_BASE] },
  { name: 'insertAt(2)', op: { kind: 'insertAt', index: 2, value: 'pineapple' }, expect: ['mango', 'guava', 'pineapple', 'lychee', 'papaya', 'jackfruit'] },
  { name: 'insertAt(end)', op: { kind: 'insertAt', index: LL_BASE.length, value: 'pineapple' }, expect: [...LL_BASE, 'pineapple'] },
  { name: 'deleteAt(0)', op: { kind: 'deleteAt', index: 0 }, expect: LL_BASE.slice(1) },
  { name: 'deleteAt(2)', op: { kind: 'deleteAt', index: 2 }, expect: ['mango', 'guava', 'papaya', 'jackfruit'] },
  { name: 'deleteAt(last)', op: { kind: 'deleteAt', index: LL_BASE.length - 1 }, expect: LL_BASE.slice(0, -1) },
  { name: 'deleteAt(oob)', op: { kind: 'deleteAt', index: LL_BASE.length + 3 }, expect: LL_BASE },
  { name: 'reverse', op: { kind: 'reverse' }, expect: [...LL_BASE].reverse() },
];

function idsOf(step: LlStep): Set<number> {
  return new Set(step.nodes.map((n) => n.id));
}

function nextIdsInPool(step: LlStep): Set<number> {
  const s = new Set<number>();
  for (const n of step.nodes) if (n.next !== null) s.add(n.next);
  if (step.head !== null) s.add(step.head);
  return s;
}

describe.each(OPS)('linked-list op: $name', ({ op, expect: expectArr }) => {
  const steps = llSteps(LL_BASE, op);

  it('final chain spells the expected order', () => {
    const last = steps[steps.length - 1];
    expect(chainValues(last)).toEqual(expectArr);
  });

  it('every step chain is acyclic and null-terminated', () => {
    for (const s of steps) {
      // collect() throws on cycle / dangling id
      expect(() => collect(s.head, s.nodes)).not.toThrow();
      const reached = collect(s.head, s.nodes);
      expect(new Set(reached).size).toBe(reached.length); // no repeats ⇒ acyclic
    }
  });

  it('every next-pointer references an existing node or null', () => {
    for (const s of steps) {
      const ids = idsOf(s);
      for (const n of s.nodes) {
        if (n.next !== null) expect(ids.has(n.next)).toBe(true);
      }
      if (s.head !== null) expect(ids.has(s.head)).toBe(true);
    }
  });

  it('labeled pointers always point into the pool or null', () => {
    for (const s of steps) {
      const ids = idsOf(s);
      for (const p of s.ptrs) {
        if (p.at !== null) expect(ids.has(p.at)).toBe(true);
      }
      if (s.focus !== null) expect(ids.has(s.focus)).toBe(true);
    }
  });

  it('gc: a removed id never stays reachable and is referenced by nobody afterward', () => {
    for (const s of steps) {
      if (!s.freedRemoved) continue;
      const next = nextIdsInPool(s);
      // during the gc frame the ghost may still exist in the pool (for display),
      // but nothing alive may point AT it
      for (const id of s.freedRemoved) {
        expect(next.has(id)).toBe(false);
      }
      // and subsequent steps must not contain it at all
      const idx = steps.indexOf(s);
      for (const later of steps.slice(idx + 1)) {
        expect(idsOf(later).has(s.freedRemoved[0])).toBe(false);
        for (const n of later.nodes) expect(n.next === null || !s.freedRemoved.includes(n.next)).toBe(true);
      }
    }
  });

  it('every node value is preserved through the operation (no silent edits)', () => {
    const before = new Map(llSteps(LL_BASE, op)[0].nodes.map((n) => [n.id, n.value]));
    const last = steps[steps.length - 1];
    for (const n of last.nodes) {
      if (before.has(n.id)) expect(n.value).toBe(before.get(n.id));
    }
  });

  it('is deterministic across runs', () => {
    expect(JSON.stringify(llSteps(LL_BASE, op))).toBe(JSON.stringify(steps));
  });
});

describe('reverse specifics', () => {
  const steps = llSteps(LL_BASE, { kind: 'reverse' });
  const last = steps[steps.length - 1];

  it('reuses exactly the same node ids — no copies', () => {
    const first = steps[0];
    expect(new Set(last.nodes.map((n) => n.id))).toEqual(new Set(first.nodes.map((n) => n.id)));
  });

  it('spells the array reversed', () => {
    expect(chainValues(last)).toEqual([...LL_BASE].reverse());
  });

  it('step count is linear: 2 + 3n frames (intro, dance pose, 3 per node, finale)', () => {
    expect(steps.length).toBe(2 + 3 * LL_BASE.length + 1);
  });
});

describe('collect()', () => {
  it('throws on a hand-made cycle (guard utility works)', () => {
    const cyc = [
      { id: 1, value: 'a', next: 2 },
      { id: 2, value: 'b', next: 1 },
    ];
    expect(() => collect(1, cyc)).toThrow(/cycle/);
  });

  it('empty chain yields empty order', () => {
    expect(chainValues({ nodes: [], head: null, ptrs: [], focus: null, note: { en: '', bn: '' } })).toEqual([]);
  });
});
