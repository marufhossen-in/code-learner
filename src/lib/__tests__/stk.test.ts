import { describe, it, expect } from 'vitest';
import { stackSteps, type StkKind, type StkStep } from '../../components/visuals/stkSim';

const KINDS: StkKind[] = ['plates', 'brackets-ok', 'brackets-bad', 'rpn', 'callstack', 'overflow'];

describe.each(KINDS)('stack scene: %s', (kind) => {
  const steps = stackSteps(kind);

  it('is non-trivial and deterministic', () => {
    expect(steps.length).toBeGreaterThan(3);
    expect(JSON.stringify(stackSteps(kind))).toBe(JSON.stringify(steps));
  });

  it('LIFO holds globally: every pop serves the most recent un-popped push', () => {
    const sim: string[] = [];
    for (const s of steps.slice(1)) {
      if (s.error) continue;
      if (s.pushed !== undefined) sim.push(s.pushed);
      for (const p of s.popped ?? []) {
        expect(sim.length).toBeGreaterThan(0);
        expect(sim.pop()).toBe(p); // each pop must take the CURRENT top
      }
      expect(sim).toEqual(s.stack);
    }
  });

  it('stack height never diverges from the push/pop ledger', () => {
    let h = 0;
    for (const s of steps) {
      if (!s.error) {
        h += (s.pushed !== undefined ? 1 : 0) - (s.popped?.length ?? 0);
        expect(h).toBeGreaterThanOrEqual(0);
      }
      expect(s.stack.length).toBe(h);
    }
  });

  it('an error, if any, appears EXACTLY once — on the final step', () => {
    const errs = steps.filter((s) => s.error);
    const isErrorScene = kind === 'plates' || kind === 'brackets-bad' || kind === 'overflow';
    if (isErrorScene) {
      expect(errs).toHaveLength(1);
      expect(steps[steps.length - 1].error).toBeDefined();
    } else {
      expect(errs).toHaveLength(0);
    }
  });

  it('tokens, when present, are identical on every step and never mutated', () => {
    const withTokens = steps.filter((s) => s.tokens);
    if (!withTokens.length) return;
    const canon = JSON.stringify(withTokens[0].tokens);
    for (const s of withTokens) expect(JSON.stringify(s.tokens)).toBe(canon);
  });
});

describe('plates scene specifics', () => {
  const steps = stackSteps('plates');
  it('pops come back in exact mirror order of pushes', () => {
    const pushes = steps.filter((s) => s.pushed && !s.error).map((s) => s.pushed!);
    const pops = steps.flatMap((s) => (s.error ? [] : s.popped ?? []));
    expect(pops).toEqual([...pushes].reverse());
  });
  it('ends with the classic underflow', () => {
    expect(steps[steps.length - 1].error).toBe('underflow');
    expect(steps[steps.length - 1].stack).toHaveLength(0);
  });
});

describe('brackets scenes specifics', () => {
  it('ok scene: ends empty-handed and error-free', () => {
    const steps = stackSteps('brackets-ok');
    const last: StkStep = steps[steps.length - 1];
    expect(last.error).toBeUndefined();
    expect(last.stack).toHaveLength(0);
    expect(last.cursor).toBe(6);
  });
  it('bad scene: mismatch fires on the } (cursor 3), top was [', () => {
    const steps = stackSteps('brackets-bad');
    const last = steps[steps.length - 1];
    expect(last.error).toBe('mismatch');
    expect(last.cursor).toBe(3);
    // at the failure, the stack still holds the two honoured IOUs: ( and {
    expect(last.stack).toEqual(['(', '{', '['].slice(0, 3));
  });
  it('stacks only ever hold openers', () => {
    for (const s of stackSteps('brackets-ok').concat(stackSteps('brackets-bad'))) {
      for (const v of s.stack) expect(['(', '[', '{']).toContain(v);
    }
  });
});

describe('rpn scene specifics', () => {
  const steps = stackSteps('rpn');
  it('settles to exactly one plate carrying the final value', () => {
    const last = steps[steps.length - 1];
    expect(last.error).toBeUndefined();
    expect(last.stack).toHaveLength(1);
    expect(last.stack[0]).toBe('14');
  });
  it('every operator step pops exactly two and pushes exactly one verdict', () => {
    const eatSteps = steps.filter((s) => (s.popped?.length ?? 0) === 2);
    expect(eatSteps).toHaveLength(2);
    // each eat step is followed immediately by a plain-number verdict push
    for (const e of eatSteps) {
      const verdict = steps[steps.indexOf(e) + 1];
      expect(verdict.pushed).toMatch(/^\d+$/);
      expect(verdict.popped ?? []).toHaveLength(0);
    }
    // every plate is always a plain number — the stack holds no syntax
    for (const s of steps) for (const v of s.stack) expect(v).toMatch(/^\d+$/);
  });
});

describe('callstack scene specifics', () => {
  const steps = stackSteps('callstack');
  it('frames push newest-on-top and retire in strict reverse', () => {
    const pushes = steps.filter((s) => s.pushed && !s.error).map((s) => s.pushed!);
    const pops = steps.flatMap((s) => (s.error ? [] : s.popped ?? []));
    expect(pops).toEqual([...pushes].reverse());
  });
  it('returns carry the factorial values 1, 2, 6 in ascending computation order', () => {
    const rets = steps.filter((s) => s.ret).map((s) => s.ret);
    expect(rets).toEqual(['1', '2', '6']);
  });
  it('books balance: total pushes equal total pops', () => {
    const p = steps.filter((s) => s.pushed && !s.error).length;
    const q = steps.reduce((a, s) => a + (s.error ? 0 : s.popped?.length ?? 0), 0);
    expect(p).toBe(q);
  });
});

describe('overflow scene specifics', () => {
  const steps = stackSteps('overflow');
  it('pushes monotonically to the cap, then overflows once', () => {
    const pushes = steps.filter((s) => s.pushed && !s.error);
    expect(pushes.length).toBe(12);
    const labels = pushes.map((s) => s.pushed!);
    labels.forEach((l, i) => expect(l).toContain(`depth ${i + 1}`));
    expect(steps[steps.length - 1].error).toBe('overflow');
  });
  it('never pops — that is precisely the disease', () => {
    for (const s of steps) expect(s.popped ?? []).toHaveLength(0);
  });
});
