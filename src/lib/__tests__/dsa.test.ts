import { describe, expect, it } from 'vitest';
import {
  binaryProbes,
  bubbleOps,
  growthRow,
  growthTable,
  GROWTH_FAMILIES,
  linearProbes,
  mergeRun,
  mergeUpperBound,
  mulberry32,
} from '../../components/visuals/dsaSim';

describe('dsa sim — search probes', () => {
  it('linear search worst case costs exactly n probes', () => {
    for (const n of [1, 2, 8, 64, 512]) {
      expect(linearProbes(n, n - 1).probes.length).toBe(n);
    }
  });

  it('binary search worst case never exceeds ⌈log2(n+1)⌉ probes', () => {
    const bound = (n: number) => Math.ceil(Math.log2(n + 1));
    for (const n of [2, 8, 64, 512]) {
      for (let t = 0; t < n; t++) {
        expect(binaryProbes(n, t).probes.length).toBeLessThanOrEqual(bound(n));
      }
    }
    expect(binaryProbes(8, 7).probes.length).toBe(4); // worst is real: 3,5,6,7
    expect(binaryProbes(1, 0).probes.length).toBe(1);
  });

  it('binary probes stay in range and land on the target', () => {
    for (const n of [2, 3, 7, 16, 64]) {
      for (let t = 0; t < n; t++) {
        const pr = binaryProbes(n, t).probes;
        expect(pr[pr.length - 1]).toBe(t);
        pr.forEach((p) => {
          expect(p).toBeGreaterThanOrEqual(0);
          expect(p).toBeLessThan(n);
          expect(Number.isInteger(p)).toBe(true);
        });
      }
    }
  });

  it('binary beats linear by a mile once n is past a dozen', () => {
    for (const n of [16, 64, 512]) {
      expect(binaryProbes(n, n - 1).probes.length).toBeLessThanOrEqual(linearProbes(n, n - 1).probes.length / 2);
    }
  });
});

describe('dsa sim — sort operation counts', () => {
  it('bubble on reversed input does exactly n(n-1)/2 of each', () => {
    for (const n of [2, 8, 33]) {
      const { comparisons, swaps } = bubbleOps(n);
      expect(comparisons).toBe((n * (n - 1)) / 2);
      expect(swaps).toBe((n * (n - 1)) / 2);
    }
  });

  it('merge run actually sorts and stays under the textbook bound', () => {
    for (const n of [2, 3, 5, 8, 16, 64]) {
      const run = mergeRun(n);
      const expectSorted = Array.from(run.sorted).sort((a, b) => a - b);
      expect(run.sorted).toEqual(expectSorted);
      expect(run.comparisons).toBeLessThanOrEqual(mergeUpperBound(n));
    }
  });

  it('merge crushes bubble in comparisons once n ≥ 8', () => {
    for (const n of [8, 16, 32, 64]) {
      expect(mergeRun(n).comparisons).toBeLessThan(bubbleOps(n).comparisons);
    }
  });

  it('merge comparisons are monotone non-decreasing in n', () => {
    let prev = 0;
    for (let n = 2; n <= 64; n *= 2) {
      const c = mergeRun(n).comparisons;
      expect(c).toBeGreaterThanOrEqual(prev);
      prev = c;
    }
  });

  it('mulberry32 is reproducible (deterministic shuffle)', () => {
    const a = mulberry32(7);
    const b = mulberry32(7);
    expect([a(), a(), a()]).toEqual([b(), b(), b()]);
    expect(mergeRun(24).comparisons).toBe(mergeRun(24).comparisons);
  });
});

describe('dsa sim — growth table', () => {
  it('growth rows encode the families exactly', () => {
    const r = growthRow(64);
    expect(r.constant).toBe(1);
    expect(r.log).toBe(6);
    expect(r.linear).toBe(64);
    expect(r.nlogn).toBe(64 * 6);
    expect(r.quadratic).toBe(64 * 64);
  });

  it('families never reorder themselves upward', () => {
    const table = growthTable([8, 64, 512, 4096]);
    for (const r of table) {
      expect(r.constant).toBeLessThanOrEqual(r.log);
      expect(r.log).toBeLessThanOrEqual(r.linear);
      expect(r.linear).toBeLessThanOrEqual(r.nlogn);
      expect(r.nlogn).toBeLessThan(r.quadratic);
    }
  });

  it('quadratic outruns linear by the multiplier itself', () => {
    const a = growthRow(512);
    const b = growthRow(1024);
    expect(b.quadratic / a.quadratic).toBe(4); // n doubles → work ×4
    expect(b.linear / a.linear).toBe(2);
  });

  it('families list is bilingual and complete', () => {
    expect(GROWTH_FAMILIES.map((f) => f.id)).toEqual(['constant', 'log', 'linear', 'nlogn', 'quadratic']);
    GROWTH_FAMILIES.forEach((f) => {
      expect(f.bn.length).toBeGreaterThan(0);
      expect(f.en).not.toBe(f.bn);
    });
  });
});
