import { describe, it, expect } from 'vitest';
import { heapSteps, type HeapKind, type HStep } from '../../components/visuals/heapSim';

const KINDS: HeapKind[] = ['build', 'serve', 'heapify', 'topk'];

/** The vow over the live heap region arr[0..n−1], honoring the step's mode. */
function vowHolds(s: HStep): boolean {
  for (let i = 0; i < s.n; i++) {
    for (const c of [2 * i + 1, 2 * i + 2]) {
      if (c < s.n) {
        const ok = s.mode === 'max' ? s.arr[i] >= s.arr[c] : s.arr[i] <= s.arr[c];
        if (!ok) return false;
      }
    }
  }
  return true;
}

describe.each(KINDS)('heap scene: %s', (kind) => {
  const steps = heapSteps(kind);

  it('is non-trivial and deterministic', () => {
    expect(steps.length).toBeGreaterThan(4);
    expect(JSON.stringify(heapSteps(kind))).toBe(JSON.stringify(steps));
  });

  it('keeps every index reference inside its own frame', () => {
    for (const s of steps) {
      expect(s.n).toBeLessThanOrEqual(s.arr.length);
      const check = (idx?: number) => {
        if (idx !== undefined) {
          expect(idx).toBeGreaterThanOrEqual(0);
          expect(idx).toBeLessThan(s.arr.length);
        }
      };
      check(s.hot);
      check(s.hot2);
      if (s.swapped) s.swapped.forEach((i) => expect(i).toBeLessThan(s.arr.length));
    }
  });

  it('every settled step PROVABLY satisfies the vow over its live region', () => {
    const settled = steps.filter((s) => s.settled);
    expect(settled.length).toBeGreaterThan(0);
    settled.forEach((s) => expect(vowHolds(s)).toBe(true));
  });

  it('never announces a swap that breaks index kinship (parent < child always)', () => {
    for (const s of steps) {
      if (s.swapped && s.swapped[0] !== s.swapped[1]) {
        const [a, b] = s.swapped;
        const [lo, hi] = a < b ? [a, b] : [b, a];
        const kids = [2 * lo + 1, 2 * lo + 2];
        expect(kids).toContain(hi);
      }
    }
  });
});

describe('build scene (sift-up)', () => {
  const steps = heapSteps('build');
  const last = steps[steps.length - 1];

  it('performs the five inserts of the queues-hub values', () => {
    const lands = steps.filter((s) => s.msg.startsWith('⤵'));
    expect(lands.length).toBe(5);
  });

  it('ends as the max-heap [9,8,2,1,5]: sirens climb, citizens stand down', () => {
    expect(last.arr).toEqual([9, 8, 2, 1, 5]);
    expect(last.settled).toBe(true);
  });

  it('sifts only along the parent chain', () => {
    for (const s of steps) {
      if (s.swapped && s.sift === 'up') {
        const [a, b] = s.swapped;
        const [lo, hi] = a < b ? [a, b] : [b, a];
        expect(lo).toBe((hi - 1) >> 1);
      }
    }
  });
});

describe('serve scene (pop & sift-down)', () => {
  const steps = heapSteps('serve');
  const finalOut = steps[steps.length - 1].out!;

  it('serves in EXACTLY the queues-hub priority order [9,8,5,2,1] — the debt is paid', () => {
    expect(finalOut).toEqual([9, 8, 5, 2, 1]);
  });

  it('vow is re-settled after every single eviction before the next serve', () => {
    // between any two out-growths at least one settled step must exist
    let lastGrowth = -1;
    for (let i = 0; i < steps.length; i++) {
      const len = steps[i].out?.length ?? 0;
      if (len > (lastGrowth < 0 ? 0 : steps[lastGrowth].out!.length)) {
        if (lastGrowth >= 0 && i - lastGrowth > 1) {
          // repair window: must contain a settled step
          const window = steps.slice(lastGrowth + 1, i + 1);
          expect(window.some((s) => s.settled)).toBe(true);
        }
        lastGrowth = i;
      }
    }
    expect(lastGrowth).toBeGreaterThan(0);
  });

  it('sifts strictly downward (parent index strictly smaller than child index)', () => {
    for (const s of steps) {
      if (s.swapped && s.sift === 'down') {
        const [a, b] = s.swapped;
        expect(Math.min(a, b)).toBe((Math.max(a, b) - 1) >> 1);
      }
    }
  });
});

describe('heapify scene (bottom-up)', () => {
  const steps = heapSteps('heapify');
  const last = steps[steps.length - 1];

  it('ends heap-honest on the raw scattered array', () => {
    expect(last.settled).toBe(true);
    expect(vowHolds(last)).toBe(true);
    expect(last.arr).toEqual([9, 4, 8, 1, 3, 5, 2]);
  });

  it('keeps total swaps under the O(n) umbrella (≤ n for 7 nodes)', () => {
    const swaps = steps.filter((s) => s.swapped).length;
    expect(swaps).toBeLessThanOrEqual(7);
  });

  it('skips the leaves with an explicit free-pass step', () => {
    expect(steps.some((s) => s.msg.includes('FREE'))).toBe(true);
  });
});

describe('topk scene (size-3 min-heap gatekeeper)', () => {
  const steps = heapSteps('topk');
  const last = steps[steps.length - 1];

  it('seals exactly the top-3 {7,8,9} of the nine-deep stream', () => {
    expect(new Set(last.arr.slice(0, last.n))).toEqual(new Set([7, 8, 9]));
    expect(last.n).toBe(3);
    expect(last.mode).toBe('min');
    expect(vowHolds(last)).toBe(true);
  });

  it('gives O(1) door verdicts to the three small fry (3, 5, 6)', () => {
    const drown = steps.filter((s) => s.msg.includes('drowned at the door'));
    expect(drown.map((s) => Number(s.msg.split(' ')[0])).sort((a, b) => a - b)).toEqual([3, 5, 6]);
    drown.forEach((s) => expect(s.swapped).toBeUndefined());
  });

  it('never lets the gatekeeper exceed k chairs', () => {
    for (const s of steps) expect(s.n).toBeLessThanOrEqual(3);
  });
});
