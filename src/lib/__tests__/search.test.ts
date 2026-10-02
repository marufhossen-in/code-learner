import { describe, it, expect } from 'vitest';
import { searchSteps, type SearchKind, type SStep } from '../../components/visuals/searchSim';

const KINDS: SearchKind[] = ['linear', 'binary', 'boundary', 'interp'];
const windowSize = (s: SStep) => Math.max(0, s.hi - s.lo + 1);
const probes = (steps: SStep[]) => steps.filter((s) => s.mid !== undefined);

describe.each(KINDS)('search scene: %s', (kind) => {
  const steps = searchSteps(kind);

  it('is non-trivial, deterministic, and answers correctly', () => {
    expect(steps.length).toBeGreaterThan(2);
    expect(JSON.stringify(searchSteps(kind))).toBe(JSON.stringify(steps));
    const last = steps[steps.length - 1];
    expect(last.found).toBeDefined();
    expect(last.arr[last.found!]).toBe(last.found === 7 && kind === 'boundary' ? 31 : last.target);
  });

  it('keeps every probe inside the live window', () => {
    for (const s of probes(steps)) {
      expect(s.mid!).toBeGreaterThanOrEqual(0);
      expect(s.mid!).toBeLessThanOrEqual(s.arr.length - 1);
      expect(s.mid!).toBeLessThanOrEqual(s.hi);
    }
  });

  it('shrinks the live window with every probe — the loop-death guarantee', () => {
    if (kind === 'linear') return; // linear’s window is the whole row by vow
    for (let i = 1; i < steps.length; i++) {
      expect(windowSize(steps[i])).toBeLessThanOrEqual(windowSize(steps[i - 1]));
    }
    const sizes = probes(steps).map(windowSize);
    for (let i = 1; i < sizes.length; i++) expect(sizes[i]).toBeLessThan(sizes[i - 1]);
  });

  it('counts comparisons exactly as probed', () => {
    for (const s of probes(steps)) {
      expect(s.comparisons).toBeGreaterThan(0);
    }
    expect(probes(steps).at(-1)!.comparisons).toBe(probes(steps).length);
  });
});

describe('linear: the door-to-door scan', () => {
  const steps = searchSteps('linear');

  it('walks seats in strict marching order 0,1,2… and exits the moment it is answered', () => {
    expect(probes(steps).map((s) => s.mid)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(steps.at(-1)!.found).toBe(9);
    expect(steps.at(-1)!.comparisons).toBe(10); // early exit: 6 seats never questioned
    expect(steps.at(-1)!.msg).toContain('EARLY EXIT');
  });
});

describe('binary: the halving machine', () => {
  const steps = searchSteps('binary');
  const last = steps[steps.length - 1];

  it('retires at least half per probe: window sizes 16, 16, 8, 3, 1 — mid dies with its half', () => {
    expect(steps.map(windowSize)).toEqual([16, 16, 8, 3, 1]);
  });

  it('keeps the suspect-in-window invariant on every step of the walk', () => {
    for (const s of steps.slice(0, -1)) {
      expect(s.lo).toBeLessThanOrEqual(last.found!);
      expect(s.hi).toBeGreaterThanOrEqual(last.found!);
    }
  });

  it('pays log₂16 = 4 comparisons and lands seat 10 for the vow', () => {
    expect(last.found).toBe(10);
    expect(last.arr[10]).toBe(43);
    expect(last.comparisons).toBe(4);
  });
});

describe('boundary: lower_bound discipline', () => {
  const steps = searchSteps('boundary');
  const last = steps[steps.length - 1];

  it('collapses the window onto the FIRST seat whose value ≥ 30', () => {
    expect(last.found).toBe(7);
    expect(last.arr[7]).toBe(31);
  });

  it('holds the warrant law: every seat left of the answer < x, every seat from it ≥ x', () => {
    for (let j = 0; j < last.arr.length; j++) {
      if (j < last.found!) expect(last.arr[j]).toBeLessThan(30);
      else expect(last.arr[j]).toBeGreaterThanOrEqual(30);
    }
  });

  it('judges every probe by the two-case law: v<x kills the left, v≥x keeps mid as candidate', () => {
    for (const s of probes(steps)) {
      const v = s.arr[s.mid!];
      if (s.out === 'low') expect(v).toBeLessThan(30);
      else if (s.out === 'boundary') expect(v).toBeGreaterThanOrEqual(30);
    }
  });
});

describe('interp: the proportion compass', () => {
  const steps = searchSteps('interp');

  it('falls in three guesses on the squares strip: 4, 5, 6', () => {
    expect(probes(steps).map((s) => s.mid)).toEqual([4, 5, 6]);
    expect(steps.at(-1)!.found).toBe(6);
    expect(steps.at(-1)!.arr[6]).toBe(49);
    expect(steps.at(-1)!.comparisons).toBe(3);
  });

  it('never guesses outside the live window — the proportion stays inside', () => {
    for (const s of probes(steps)) {
      expect(s.mid!).toBeGreaterThanOrEqual(s.lo);
      expect(s.mid!).toBeLessThanOrEqual(s.hi);
    }
  });
});
