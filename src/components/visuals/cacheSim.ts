// The cache law: one reference line, four machines, cap 3.
// lru refreshes on touch · fifo forgets the hit · lfu crowns frequency ·
// ttl checks the lease before trusting presence (undertaker sweeps graves
// first; when the vault is full and no graves exist, the living pay by LRU).
// Every consequence of policy is visible in the vault strip: position,
// arrival number, hit count, or deadline — one meta column per machine.

export type CacheScene = 'lru' | 'fifo' | 'lfu' | 'ttl';

export interface VaultCell {
  k: string;
  meta: string; // lfu: ×count · ttl: d<deadline> · fifo: a<arrival> · lru: ''
}

export interface CStep {
  i: number; // 1-based reference index
  key: string;
  outcome: 'hit' | 'insert' | 'evict' | 'reclaim' | 'phantom';
  victim?: string;
  vault: VaultCell[]; // MRU → LRU order (fifo: newest → oldest arrival)
  hits: number;
  misses: number;
  reclaims: number;
  evicts: number;
  phantoms: number;
  msg: { en: string; bn: string };
}

export const LINE = ['A', 'B', 'C', 'A', 'D', 'E', 'A', 'B', 'C', 'D', 'E'] as const;
export const CAP = 3;
export const LEASE: Record<string, number> = { A: 3, B: 3, C: 1, D: 2, E: 2 };

export const C_SCENES: Record<CacheScene, { title: { en: string; bn: string }; arc: { en: string; bn: string } }> = {
  lru: {
    title: { en: '🧊 LRU — recency is survival', bn: '🧊 LRU — সতেজতাই বেঁচে-থাকা' },
    arc: {
      en: 'Every touch renews the lease on life; the back of the queue is the graveyard gate.',
      bn: 'প্রতি স্পর্শ জীবন-লিজ নবায়ন করে; সারির পিছন প্রান্তই সমাধি-দুয়ার।',
    },
  },
  fifo: {
    title: { en: '🚪 FIFO — the hit buys nothing', bn: '🚪 FIFO — হিট কিছুই কেনে না' },
    arc: {
      en: 'Oldest arrival dies first; popularity is invisible to this machine — the ref-4 hit is executed at ref-5.',
      bn: 'প্রাগতম-আগমন আগে মরে; জনপ্রিয়তা এই যন্ত্রের কাছে অদৃশ্য — ৪নং-রেফের হিটের মৃত্যুদণ্ড ৫নং-রেফে।',
    },
  },
  lfu: {
    title: { en: '🔁 LFU — frequency is a crown', bn: '🔁 LFU — কম্পাঙ্কই মুকুট' },
    arc: {
      en: 'Counts accumulate; A’s second hit makes it immortal on this line. Ties fall to the oldest arrival.',
      bn: 'গণনা জমা হয়; এই লাইনে A-এর দ্বিতীয় হিট তাকে অমর করে। টাই ভাঙে প্রাগতম-আগমনে।',
    },
  },
  ttl: {
    title: { en: '⏳ TTL — presence ≠ freshness', bn: '⏳ TTL — উপস্থিতি ≠ সতেজতা' },
    arc: {
      en: 'Leases, not loyalty: the undertaker sweeps graves before any execution; the boundary second is alive (4 ≤ 4).',
      bn: 'লিজ, আনুগত্য নয়: কবরখেকো কারাবাসের আগে কবর ঝাড়ু দেয়; সীমানা-সেকেন্ড জীবিত (4 ≤ 4)।',
    },
  },
};

const vaultEntry = (k: string): VaultCell => ({ k, meta: '' });

export function cacheSteps(scene: CacheScene): CStep[] {
  let vault: VaultCell[] = [];
  const touched = new Map<string, number>(); // last touch (insert/hit) ref index
  const counts = new Map<string, number>(); // lfu counts
  const arrival = new Map<string, number>(); // fifo/lfu tiebreak: first-put order
  const deadline = new Map<string, number>(); // ttl
  let hits = 0, misses = 0, reclaims = 0, evicts = 0, phantoms = 0;
  let seq = 0;

  const meta = (c: VaultCell): VaultCell => {
    if (scene === 'lfu') return { ...c, meta: `×${counts.get(c.k) ?? 1}` };
    if (scene === 'ttl') return { ...c, meta: `d${deadline.get(c.k) ?? '—'}` };
    if (scene === 'fifo') return { ...c, meta: `a${arrival.get(c.k) ?? '—'}` };
    return c;
  };

  const steps: CStep[] = [];
  LINE.forEach((key, zi) => {
    const i = zi + 1;
    const present = vault.some((c) => c.k === key);

    if (scene === 'ttl') {
      // undertaker: sweep every expired resident before judging this reference
      const graves = vault.filter((c) => (deadline.get(c.k) ?? Infinity) < i).map((c) => c.k);
      if (graves.length) {
        vault = vault.filter((c) => !graves.includes(c.k));
        reclaims += graves.length;
      }
      const resident = vault.some((c) => c.k === key);
      if (resident) {
        hits += 1;
        deadline.set(key, i + LEASE[key]);
        vault = [meta({ k: key, meta: '' }), ...vault.filter((c) => c.k !== key)].map(meta);
        steps.push(stepRow(i, key, 'hit', vault, { en: `HIT at the boundary-check: ${key}’s lease is read and renewed (alive at the very deadline second is alive).`, bn: `সীমানা-যাচাইয়ে হিট: ${key}-এর লিজ পড়া হলো ও নবায়ন (হুবহু মেয়াদ-সেকেন্ডে জীবিত মানেই জীবিত)।` }, { hits, misses, reclaims, evicts, phantoms }));
        touched.set(key, i);
        return;
      }
      misses += 1;
      if (graves.length) {
        const requestedCorpse = graves.includes(key);
        if (requestedCorpse) phantoms += 1;
        deadline.set(key, i + LEASE[key]);
        seq += 1; arrival.set(key, seq); touched.set(key, i);
        vault = [vaultEntry(key), ...vault].map(meta);
        const roll = graves.join(', ');
        if (vault.length > CAP) {
          const living = vault.slice(1);
          const livingVictim = living[living.length - 1].k;
          vault = [vault[0], ...living.slice(0, living.length - 1)].map(meta);
          evicts += 1;
          steps.push(stepRow(i, key, 'evict', vault, { en: `undertaker’s shift: graves ${roll} cleared — and with no room left even then, the law executes the living ${livingVictim} to seat ${key} (refetched, lease d${i + LEASE[key]}).`, bn: `কবরখেকোর পালা: কবর ${roll} ঝাড়ু হলো — আর তাতেও জায়গা না-হলে বিধান জীবিত ${livingVictim}-কে মৃত্যুদণ্ড দিয়ে ${key}-কে (পুনঃআনা, লিজ d${i + LEASE[key]}) বসাল।` }, { hits, misses, reclaims, evicts, phantoms }, livingVictim));
          return;
        }
        steps.push(stepRow(i, key, requestedCorpse ? 'phantom' : 'reclaim', vault, { en: `undertaker’s shift: graves ${roll} swept first — ${key} is ${requestedCorpse ? 'refetched over its own corpse (phantom — present, yet legally absent)' : 'fetched into a cleared grave'}, lease d${i + LEASE[key]}.`, bn: `কবরখেকোর পালা: কবর ${roll} আগে ঝাড়ু হলো — ${key} ${requestedCorpse ? 'নিজের মৃতদেহের উপর পুনঃআনা হলো (ফ্যান্টম — উপস্থিত, তবু আইনত অনুপস্থিত)' : 'পরিষ্কার-করা কবরে বসানো হলো'}, লিজ d${i + LEASE[key]}।` }, { hits, misses, reclaims, evicts, phantoms }));
        return;
      }
      if (vault.length >= CAP) {
        const victim = vault[vault.length - 1].k; // LRU fallback: least-recently touched sits at the back
        vault = vault.slice(0, vault.length - 1);
        evicts += 1;
        deadline.set(key, i + LEASE[key]);
        seq += 1; arrival.set(key, seq); touched.set(key, i);
        vault = [vaultEntry(key), ...vault].map(meta);
        steps.push(stepRow(i, key, 'evict', vault, { en: `no graves, no room — the law evicts ${victim} (least-recently touched loses its seat) to seat ${key}, lease d${i + LEASE[key]}.`, bn: `কবর নেই, জায়গা নেই — বিধান বহিষ্কার করে ${victim}-কে (ন্যূনতম-স্পর্শিত আসন হারায়), ${key}-কে বসাতে, লিজ d${i + LEASE[key]}।` }, { hits, misses, reclaims, evicts, phantoms }, victim));
        return;
      }
      deadline.set(key, i + LEASE[key]);
      seq += 1; arrival.set(key, seq); touched.set(key, i);
      vault = [vaultEntry(key), ...vault].map(meta);
      steps.push(stepRow(i, key, 'insert', vault, { en: `miss — ${key} is fetched from the journal and sworn in with lease d${i + LEASE[key]}.`, bn: `মিস — ${key} জার্নাল থেকে এনে অভিষেক করা হলো, লিজসহ d${i + LEASE[key]}।` }, { hits, misses, reclaims, evicts, phantoms }));
      return;
    }

    if (present) {
      hits += 1;
      if (scene === 'lru') {
        touched.set(key, i);
        vault = [vaultEntry(key), ...vault.filter((c) => c.k !== key)];
        steps.push(stepRow(i, key, 'hit', vault, { en: `HIT: ${key} refreshes — moved to the head of the queue, lease on life renewed.`, bn: `হিট: ${key} সতেজ — সারির সামনে সরে এল, জীবন-লিজ নবায়িত।` }, { hits, misses, reclaims, evicts, phantoms }));
      } else if (scene === 'fifo') {
        steps.push(stepRow(i, key, 'hit', vault, { en: `HIT: ${key} is served — and the machine takes NO note. Arrival order rules; the grave stays scheduled.`, bn: `হিট: ${key} পরিবেশিত — আর যন্ত্র কোনো টোকা রাখে না। আগমন-ক্রমই শাসক; কবর পূর্ব-নির্ধারিত।` }, { hits, misses, reclaims, evicts, phantoms }));
      } else {
        counts.set(key, (counts.get(key) ?? 0) + 1);
        steps.push(stepRow(i, key, 'hit', vault.map(meta), { en: `HIT: ${key}’s count rises to ×${counts.get(key)} — frequency accumulates like armor.`, bn: `হিট: ${key}-এর গণনা বেড়ে ×${counts.get(key)} — কম্পাঙ্ক জমা হয় কবচের মতো।` }, { hits, misses, reclaims, evicts, phantoms }));
        touched.set(key, i);
      }
      return;
    }

    // miss path (lru / fifo / lfu)
    misses += 1;
    let victim: string | undefined;
    if (vault.length >= CAP) {
      if (scene === 'lru') {
        victim = vault[vault.length - 1].k;
        vault = vault.slice(0, vault.length - 1);
      } else if (scene === 'fifo') {
        victim = vault[vault.length - 1].k; // newest → oldest order: back is the oldest arrival
        vault = vault.slice(0, vault.length - 1);
      } else {
        const min = Math.min(...vault.map((c) => counts.get(c.k) ?? 0));
        const tied = vault.filter((c) => (counts.get(c.k) ?? 0) === min);
        victim = tied.reduce((a, b) => ((arrival.get(a.k) ?? 0) <= (arrival.get(b.k) ?? 0) ? a : b)).k;
        vault = vault.filter((c) => c.k !== victim);
      }
      evicts += 1;
    }
    seq += 1; arrival.set(key, seq); touched.set(key, i);
    counts.set(key, 1);
    vault = [vaultEntry(key), ...vault].map(meta);
    const why =
      scene === 'lru' ? `miss — ${key} fetched and sworn at the head; the queue moves over it and the back (${victim}) falls through the gate.` :
      scene === 'fifo' ? `miss — ${key} fetched; arrival ${victim} was oldest in line, popularity unread — the seat passes to ${key}.` :
      `miss — ${key} fetched at count ×1; the minimum-count seat (${victim}) pays, ties broken by arrival.`;
    const whyBn =
      scene === 'lru' ? `মিস — ${key} এনে মাথায় অভিষেক; সারি তার উপর দিয়ে সরে গেল আর পিছন (${victim}) দুয়ার দিয়ে পড়ে গেল।` :
      scene === 'fifo' ? `মিস — ${key} আনা হলো; ${victim} ছিল সারির প্রাগতম, জনপ্রিয়তা অপঠিত — আসন গেল ${key}-এর হাতে।` :
      `মিস — ${key} এনে গণনা ×1-এ; ন্যূনতম-গণনার আসন (${victim}) শোধ দিল, টাই ভাঙা হলো আগমনে।`;
    steps.push(stepRow(i, key, victim ? 'evict' : 'insert', vault, { en: why, bn: whyBn }, { hits, misses, reclaims, evicts, phantoms }, victim));
  });

  return steps;
}

function stepRow(
  i: number,
  key: string,
  outcome: CStep['outcome'],
  vault: VaultCell[],
  msg: { en: string; bn: string },
  c: { hits: number; misses: number; reclaims: number; evicts: number; phantoms: number },
  victim?: string,
): CStep {
  return { i, key, outcome, victim, vault: vault.map((c2) => ({ ...c2 })), ...c, msg };
}
