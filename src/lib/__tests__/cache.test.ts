import { describe, it, expect } from 'vitest';
import { cacheSteps, C_SCENES, LINE, CAP, LEASE } from '../../components/visuals/cacheSim';
import type { CacheScene } from '../../components/visuals/cacheSim';

const KEYS: CacheScene[] = ['lru', 'fifo', 'lfu', 'ttl'];

describe('the cache law engine', () => {
  it('exposes four scenes with bilingual titles and arcs', () => {
    expect(Object.keys(C_SCENES).sort()).toEqual([...KEYS].sort());
    for (const k of KEYS) {
      expect(C_SCENES[k].title.en.length).toBeGreaterThan(6);
      expect(C_SCENES[k].title.bn.length).toBeGreaterThan(6);
      expect(C_SCENES[k].arc.en.length).toBeGreaterThan(20);
      expect(C_SCENES[k].arc.bn.length).toBeGreaterThan(20);
    }
  });

  it('every scene walks the same 11-reference line at cap 3', () => {
    expect(LINE).toEqual(['A', 'B', 'C', 'A', 'D', 'E', 'A', 'B', 'C', 'D', 'E']);
    expect(CAP).toBe(3);
    for (const k of KEYS) expect(cacheSteps(k)).toHaveLength(11);
  });

  it('the vault never exceeds capacity, and indices stay 1-based', () => {
    for (const k of KEYS) {
      for (const s of cacheSteps(k)) {
        expect(s.vault.length).toBeLessThanOrEqual(CAP);
        expect(s.i).toBeGreaterThanOrEqual(1);
        expect(s.i).toBeLessThanOrEqual(11);
      }
      cacheSteps(k).forEach((s, idx) => expect(s.i).toBe(idx + 1));
    }
  });

  it('counters never decrease and hits + misses always equal references seen', () => {
    for (const k of KEYS) {
      const steps = cacheSteps(k);
      let h = -1, m = -1, r = -1, e = -1;
      for (const s of steps) {
        expect(s.hits).toBeGreaterThanOrEqual(h);
        expect(s.misses).toBeGreaterThanOrEqual(m);
        expect(s.reclaims).toBeGreaterThanOrEqual(r);
        expect(s.evicts).toBeGreaterThanOrEqual(e);
        h = s.hits; m = s.misses; r = s.reclaims; e = s.evicts;
        expect(s.hits + s.misses).toBe(s.i);
      }
    }
  });

  it('LRU trace: two hits, six executions, recency victims in order', () => {
    const steps = cacheSteps('lru');
    expect(steps[3].outcome).toBe('hit');
    expect(steps[6].outcome).toBe('hit');
    const evictRefs = steps.filter((s) => s.outcome === 'evict');
    expect(evictRefs.map((s) => s.i + '>' + s.victim)).toEqual(['5>B', '6>C', '8>D', '9>E', '10>A', '11>B']);
    const last = steps[10];
    expect(last.hits).toBe(2);
    expect(last.misses).toBe(9);
    expect(last.vault.map((c) => c.k)).toEqual(['E', 'D', 'C']);
  });

  it('LRU hit refreshes position: after ref 4, A sits at the head', () => {
    const steps = cacheSteps('lru');
    expect(steps[3].vault[0].k).toBe('A');
    expect(steps[3].hits).toBe(1);
  });

  it('FIFO: the ref-4 hit is executed at ref-5 — the machine takes no note', () => {
    const steps = cacheSteps('fifo');
    expect(steps[3].outcome).toBe('hit'); // A served
    const v5 = steps[4];
    expect(v5.outcome).toBe('evict');
    expect(v5.victim).toBe('A'); // the very key just hit
    const last = steps[10];
    expect(last.hits).toBe(1); // one hit fewer than LRU on the same line
    expect(last.misses).toBe(10);
    expect(last.evicts).toBe(7);
  });

  it('FIFO and LRU end on the same vault but FIFO paid one extra funeral', () => {
    const lru = cacheSteps('lru')[10];
    const fifo = cacheSteps('fifo')[10];
    expect(lru.vault.map((c) => c.k)).toEqual(fifo.vault.map((c) => c.k));
    expect(lru.hits - fifo.hits).toBe(1);
    expect(fifo.vault.map((c) => c.meta)).toEqual(['a10', 'a9', 'a8']);
  });

  it('LFU trace: A’s second hit makes it immortal on this line', () => {
    const steps = cacheSteps('lfu');
    expect(steps[6].msg.en).toMatch(/×3/);
    const last = steps[10];
    expect(last.hits).toBe(2);
    expect(last.misses).toBe(9);
    expect(last.vault.map((c) => c.k)).toEqual(['E', 'D', 'A']);
    expect(last.vault.find((c) => c.k === 'A')!.meta).toBe('×3');
  });

  it('LFU tie-break: ref 5 evicts B (oldest arrival), not C', () => {
    const v5 = cacheSteps('lfu')[4];
    expect(v5.outcome).toBe('evict');
    expect(v5.victim).toBe('B');
    // ref 10 similarly evicts B over C — arrival order, re-sworn each insert
    expect(cacheSteps('lfu')[9].victim).toBe('B');
    expect(cacheSteps('lfu')[10].victim).toBe('C');
  });

  it('TTL trace: two boundary hits, five reclaims, one eviction', () => {
    const steps = cacheSteps('ttl');
    expect(steps[3].outcome).toBe('hit'); // 4 ≤ d4: the boundary second is alive
    expect(steps[6].outcome).toBe('hit'); // 7 ≤ d7: A renewed at ref 4 survives
    const last = steps[10];
    expect(last.hits).toBe(2);
    expect(last.misses).toBe(9);
    expect(last.reclaims).toBe(5);
    expect(last.evicts).toBe(1);
    expect(last.phantoms).toBe(0);
  });

  it('TTL undertaker: graves cleared in order C@5 B@6 D@8 E@9 C@11', () => {
    // reclaims are visible indirectly: each insert-after-sweep beat must match
    const steps = cacheSteps('ttl');
    // after ref 5 the vault must read [D, A, B] with C gone
    expect(steps[4].vault.map((c) => c.k)).toEqual(['D', 'A', 'B']);
    // after ref 6, B is gone: [E, A, D]
    expect(steps[5].vault.map((c) => c.k)).toEqual(['E', 'D', 'A']);
    // after ref 9, E went to the graveyard: [C, A, B]
    expect(steps[8].vault.map((c) => c.k)).toEqual(['C', 'B', 'A']);
    expect(steps[8].reclaims).toBe(4);
  });

  it('TTL fallback eviction: at ref 10 the living pay — A dies by LRU', () => {
    const v10 = cacheSteps('ttl')[9];
    expect(v10.outcome).toBe('evict');
    expect(v10.victim).toBe('A');
    expect(v10.msg.en).toMatch(/no graves, no room/);
  });

  it('TTL hit renews the lease: A’s deadline climbs 4 → 7 → 10 across the walk', () => {
    const steps = cacheSteps('ttl');
    const dAt = (idx: number) => steps[idx].vault.find((c) => c.k === 'A')?.meta;
    expect(dAt(3)).toBe('d7');  // renewed by the ref-4 hit
    expect(dAt(6)).toBe('d10'); // renewed again by the ref-7 hit
    expect(dAt(8)).toBe('d10'); // still d10 after ref 9 inserted C
  });

  it('leases match the locked table and meta annotations exist', () => {
    expect(LEASE).toEqual({ A: 3, B: 3, C: 1, D: 2, E: 2 });
    for (const c of cacheSteps('ttl')[10].vault) expect(c.meta).toMatch(/^d\d+$/);
    for (const c of cacheSteps('lfu')[10].vault) expect(c.meta).toMatch(/^×\d+$/);
    for (const c of cacheSteps('fifo')[10].vault) expect(c.meta).toMatch(/^a\d+$/);
    for (const c of cacheSteps('lru')[10].vault) expect(c.meta).toBe('');
  });

  it('every step message is bilingual and mentions the move', () => {
    for (const k of KEYS) {
      for (const s of cacheSteps(k)) {
        expect(s.msg.en.length).toBeGreaterThan(20);
        expect(s.msg.bn.length).toBeGreaterThan(20);
        expect(s.msg.en).toContain(s.key);
        expect(s.msg.bn).toContain(s.key);
      }
    }
  });

  it('outcome vocabulary is the sealed five', () => {
    const ok = new Set(['hit', 'insert', 'evict', 'reclaim', 'phantom']);
    for (const k of KEYS) for (const s of cacheSteps(k)) expect(ok.has(s.outcome)).toBe(true);
  });

  it('reclaim bookkeeping: only TTL ever reclaims in this canon', () => {
    expect(cacheSteps('lru')[10].reclaims).toBe(0);
    expect(cacheSteps('fifo')[10].reclaims).toBe(0);
    expect(cacheSteps('lfu')[10].reclaims).toBe(0);
    expect(cacheSteps('ttl')[10].reclaims).toBe(5);
  });

  it('the fatal contrast pinned forever: same line, four hit totals', () => {
    const total = (k: CacheScene) => cacheSteps(k)[10].hits;
    expect(total('lru')).toBe(2);
    expect(total('fifo')).toBe(1);
    expect(total('lfu')).toBe(2);
    expect(total('ttl')).toBe(2);
  });
});
