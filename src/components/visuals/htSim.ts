/** Hash Lab engine: FNV-1a hashing, chaining with resize, and linear probing. */

export interface HtSlot {
  index: number;
  chain: string[];
}

export interface HtStep {
  key: string;
  hash: number;
  slot: number;
  collision: boolean;
  resized: boolean;
  resizedFrom?: number;
  table: HtSlot[];
  inserts: number;
  capacity: number;
  loadFactor: number;
  note: { en: string; bn: string };
  probePath?: number[];
}

/** FNV-1a 32-bit: the classic avalanche starter — each byte mixes, then spreads. */
export function fnv1a(key: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < key.length; i++) {
    h ^= key.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

export function slotOf(key: string, m: number): { hash: number; slot: number } {
  const hash = fnv1a(key);
  return { hash, slot: hash % m };
}

function snapshot(table: HtSlot[]): HtSlot[] {
  return table.map((s) => ({ index: s.index, chain: [...s.chain] }));
}

/** Chaining inserts with automatic resize when load factor would exceed threshold. */
export function chainSteps(keys: string[], m0 = 8, threshold = 0.75): HtStep[] {
  let m = m0;
  let table: HtSlot[] = Array.from({ length: m }, (_, i) => ({ index: i, chain: [] }));
  let n = 0;
  const steps: HtStep[] = [];

  for (const key of keys) {
    // grow first if the NEXT insert would push α past the threshold
    let resized = false;
    let from = m;
    if ((n + 1) / m > threshold) {
      from = m;
      m *= 2;
      const fresh: HtSlot[] = Array.from({ length: m }, (_, i) => ({ index: i, chain: [] }));
      for (const s of table) for (const k of s.chain) fresh[fnv1a(k) % m].chain.push(k);
      table = fresh;
      resized = true;
    }
    const { hash, slot } = slotOf(key, m);
    const collision = table[slot].chain.length > 0;
    table[slot].chain.push(key);
    n++;
    steps.push({
      key,
      hash,
      slot,
      collision,
      resized,
      resizedFrom: resized ? from : undefined,
      table: snapshot(table),
      inserts: n,
      capacity: m,
      loadFactor: n / m,
      note: resized
        ? {
            en: `α would pass ${threshold} — table doubles ${from}→${m} and EVERY key is rehashed to a new door before «${key}» inserts. Amortized rescue, live.`,
            bn: `α ${threshold} ছাড়িয়ে যেত — টেবিল দ্বিগুণ ${from}→${m} আর প্রতিটি চাবি নতুন দরজায় পুনঃহ্যাশ হলো, তারপর «${key}» বসল। সরাসরি অ্যামর্টাইজড উদ্ধার।`,
          }
        : collision
          ? {
              en: `«${key}» hashes to ${slot} — occupied! It chains onto the existing list at that door. Lookup will ask EACH key here equality-questions.`,
              bn: `«${key}» হ্যাসে গেল ${slot} — অধিষ্ঠিত! সেই দরজার তালিকায় চেইন হয়ে জুড়ল। লুকআপ এখানে প্রতিটি চাবিকে সমতা-প্রশ্ন করবে।`,
            }
          : {
              en: `«${key}» → hash ${hash.toLocaleString()} → slot ${slot}, empty door. Direct address by content: O(1).`,
              bn: `«${key}» → হ্যাশ ${hash.toLocaleString()} → স্লট ${slot}, খালি দরজা। বিষয়বস্তু-ঠিকানায় সরাসরি: O(1)।`,
            },
    });
  }
  return steps;
}

/** Linear probing: same door computation, but collisions walk forward for an open seat. */
export function probeSteps(keys: string[], m = 16): HtStep[] {
  const table: HtSlot[] = Array.from({ length: m }, (_, i) => ({ index: i, chain: [] }));
  const steps: HtStep[] = [];

  keys.forEach((key) => {
    const { hash, slot } = slotOf(key, m);
    const path: number[] = [];
    let p = slot;
    while (table[p].chain.length > 0) {
      path.push(p);
      p = (p + 1) % m;
      if (path.length > m) break; // table full — guard
    }
    const collision = path.length > 0;
    table[p].chain.push(key);
    steps.push({
      key,
      hash,
      slot: p,
      collision,
      resized: false,
      table: snapshot(table),
      inserts: steps.length + 1,
      capacity: m,
      loadFactor: (steps.length + 1) / m,
      probePath: path,
      note: collision
        ? {
            en: `«${key}» wants ${slot% m} — taken. It walks ${path.length} door(s) forward and camps at ${p}. Clusters are forming; future keys walk longer.`,
            bn: `«${key}» চায় ${slot % m} — নেওয়া। ${path.length}টি দরজা এগিয়ে বসল ${p}-এ। গুচ্ছ গড়ছে; ভবিষ্যৎ চাবি হাঁটবে আরও বেশি।`,
          }
        : {
            en: `«${key}» lands at its own door ${p} — no walk needed.`,
            bn: `«${key}» নিজের দরজা ${p}-তেই বসল — হাঁটা লাগল না।`,
          },
    });
  });
  return steps;
}

/** Every key inserted must be findable: walk its chain or probe walk. */
export function findable(steps: HtStep[], _mode: 'chain' | 'probe'): boolean {
  if (steps.length === 0) return true;
  const last = steps[steps.length - 1];
  const keys = steps.map((s) => s.key);
  return keys.every((k) => last.table.some((s) => s.chain.includes(k)));
}

/** Demo key set with a few deliberate collisions at m = 8. */
export const HT_KEYS: string[] = [
  'apple', 'banana', 'grape', 'kiwi', 'mango', 'pear', 'plum', 'fig',
  'date', 'melon', 'cherry', 'lemon', 'apricot', 'peach', 'guava', 'raisin',
];
