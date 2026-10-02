import { describe, expect, it } from 'vitest';
import { chainSteps, findable, fnv1a, HT_KEYS, probeSteps, slotOf } from '../../components/visuals/htSim';

describe('ht sim — hashing', () => {
  it('fnv1a is deterministic and 32-bit', () => {
    expect(fnv1a('apple')).toBe(fnv1a('apple'));
    for (const k of HT_KEYS) {
      expect(fnv1a(k)).toBeGreaterThanOrEqual(0);
      expect(fnv1a(k)).toBeLessThan(2 ** 32);
    }
  });

  it('avalanche: nearby keys land far apart', () => {
    const a = fnv1a('apple');
    const b = fnv1a('apples');
    expect(a).not.toBe(b);
  });

  it('slotOf stays inside the table', () => {
    for (const m of [8, 16, 32]) {
      for (const k of HT_KEYS) {
        const { slot } = slotOf(k, m);
        expect(slot).toBeGreaterThanOrEqual(0);
        expect(slot).toBeLessThan(m);
      }
    }
  });
});

describe('ht sim — chaining with resize', () => {
  const steps = chainSteps(HT_KEYS);

  it('every insert is recorded and every key remains findable', () => {
    expect(steps.length).toBe(HT_KEYS.length);
    expect(findable(steps, 'chain')).toBe(true);
  });

  it('resize doubles capacity exactly and rehashes everyone', () => {
    const resizeSteps = steps.filter((s) => s.resized);
    expect(resizeSteps.length).toBeGreaterThan(0);
    for (const r of resizeSteps) {
      expect(r.capacity).toBe((r.resizedFrom ?? 0) * 2);
      // all previously inserted keys survive in the doubled table
      expect(findable(steps.slice(0, steps.indexOf(r) + 1), 'chain')).toBe(true);
    }
  });

  it('load factor never exceeds the threshold after any step', () => {
    for (const s of steps) {
      expect(s.loadFactor).toBeLessThanOrEqual(0.75);
    }
  });

  it('slot indexes in every snapshot table are complete 0..m-1', () => {
    for (const s of steps) {
      expect(s.table.length).toBe(s.capacity);
      s.table.forEach((slot, i) => expect(slot.index).toBe(i));
    }
  });

  it('collisions append to the same chain instead of overwriting', () => {
    const collisionSteps = steps.filter((s) => s.collision);
    for (const c of collisionSteps) {
      const slot = c.table[c.slot];
      expect(slot.chain.length).toBeGreaterThanOrEqual(2);
      expect(slot.chain[slot.chain.length - 1]).toBe(c.key);
    }
  });
});

describe('ht sim — linear probing', () => {
  const steps = probeSteps(HT_KEYS.slice(0, 10));

  it('every key lands in the table and remains findable', () => {
    expect(findable(steps, 'probe')).toBe(true);
  });

  it('probe paths never revisit a door and stay in range', () => {
    for (const s of steps) {
      const path = s.probePath ?? [];
      expect(new Set(path).size).toBe(path.length);
      path.forEach((p) => {
        expect(p).toBeGreaterThanOrEqual(0);
        expect(p).toBeLessThan(16);
      });
    }
  });

  it('a collision at door d walks forward from exactly d', () => {
    for (const s of steps.filter((x) => x.collision)) {
      const wanted = fnv1a(s.key) % 16;
      expect(s.probePath?.[0]).toBe(wanted);
    }
  });

  it('final placement is one seat past the probe walk', () => {
    for (const s of steps) {
      const path = s.probePath ?? [];
      if (path.length > 0) {
        expect(s.slot).toBe((path[path.length - 1] + 1) % 16);
      }
    }
  });
});

describe('ht sim — universal invariants', () => {
  it('duplicate-free key set keeps every chain entry unique', () => {
    for (const s of chainSteps(HT_KEYS)) {
      for (const slot of s.table) {
        expect(new Set(slot.chain).size).toBe(slot.chain.length);
      }
    }
  });

  it('capacity is always a power of two and monotone', () => {
    const steps = chainSteps(HT_KEYS);
    let prev = 0;
    for (const s of steps) {
      expect(Math.log2(s.capacity) % 1).toBe(0);
      expect(s.capacity).toBeGreaterThanOrEqual(prev);
      prev = s.capacity;
    }
  });
});
