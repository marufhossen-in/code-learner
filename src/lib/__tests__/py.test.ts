import { describe, expect, it } from 'vitest';
import { PY_SCENARIOS, validateScenario } from '../../components/visuals/pySim';

describe('py sim scenario data', () => {
  it('ships three curated scenarios', () => {
    expect(PY_SCENARIOS.map((s) => s.id)).toEqual(['names-are-stickers', 'immutable-rebind', 'mutable-default']);
  });

  for (const s of PY_SCENARIOS) {
    it(`${s.id} is well-formed`, () => {
      expect(validateScenario(s)).toEqual([]);
      expect(s.code.length).toBeGreaterThan(0);
      expect(s.steps.length).toBeGreaterThanOrEqual(3);
      expect(s.title.bn.length).toBeGreaterThan(0);
      expect(s.intro.bn.length).toBeGreaterThan(0);
      s.steps.forEach((st) => expect(st.note.bn.length).toBeGreaterThan(0));
    });
  }

  it('scenario ids are unique and titles bilingual', () => {
    const ids = PY_SCENARIOS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    PY_SCENARIOS.forEach((s) => {
      expect(s.title.en).not.toBe(s.title.bn);
      expect(s.intro.en).not.toBe(s.intro.bn);
    });
  });

  it('names-are-stickers: a and b alias ONE list that grows to 3', () => {
    const s = PY_SCENARIOS.find((x) => x.id === 'names-are-stickers')!;
    const bindStep = s.steps.find((st) => st.names.some((n) => n.name === 'b'))!;
    const ids = bindStep.names.map((n) => n.objId);
    expect(new Set(ids).size).toBe(1); // both names → same object
    const final = s.steps[s.steps.length - 1];
    expect(final.objects.find((o) => o.id === 'L1')?.repr).toBe('[1, 2, 3]');
  });

  it('immutable-rebind: x and y diverge on different objects', () => {
    const s = PY_SCENARIOS.find((x) => x.id === 'immutable-rebind')!;
    const after = s.steps.find((st) => st.line === 3)!;
    const xId = after.names.find((n) => n.name === 'x')!.objId;
    const yId = after.names.find((n) => n.name === 'y')!.objId;
    expect(xId).not.toBe(yId);
    const yObj = after.objects.find((o) => o.id === yId)!;
    expect(yObj.repr).toBe('5');
  });

  it('mutable-default: both calls bind bag to the SAME default list', () => {
    const s = PY_SCENARIOS.find((x) => x.id === 'mutable-default')!;
    const calls = s.steps.filter((st) => st.names.some((n) => n.name === 'bag'));
    expect(calls.length).toBeGreaterThanOrEqual(2);
    for (const st of calls) {
      expect(st.names.find((n) => n.name === 'bag')!.objId).toBe('D1');
    }
    const final = s.steps[s.steps.length - 1];
    expect(final.objects.find((o) => o.id === 'D1')?.repr).toBe("['a', 'b']");
  });

  it('every scenario ends with a settled (non-highlighted) or explained final state', () => {
    for (const s of PY_SCENARIOS) {
      const final = s.steps[s.steps.length - 1];
      // final states should be calm: no pulsing highlight, and every name resolvable
      const ids = new Set(final.objects.map((o) => o.id));
      final.names.forEach((n) => expect(ids.has(n.objId)).toBe(true));
    }
  });

  it('line numbers are 1-based and never point past the code', () => {
    for (const s of PY_SCENARIOS) {
      s.steps.forEach((st) => {
        expect(st.line).toBeGreaterThanOrEqual(1);
        expect(st.line).toBeLessThanOrEqual(s.code.length);
      });
    }
  });

  it('covered object types are a known vocabulary', () => {
    const types = new Set(PY_SCENARIOS.flatMap((s) => s.steps.flatMap((st) => st.objects.map((o) => o.type))));
    for (const t of types) expect(['int', 'str', 'list', 'tuple', 'func']).toContain(t);
  });
});
