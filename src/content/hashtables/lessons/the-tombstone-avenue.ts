import type { Lesson } from '../../../lib/types';

export const theTombstoneAvenueLesson: Lesson = {
  slug: 'the-tombstone-avenue',
  tech: 'hash-tables',
  title: {
    en: 'Open Addressing and Linear Probing: Cluster Physics and Tombstone Lifecycles',
    bn: 'ওপেন অ্যাড্রেসিং ও লিনিয়ার প্রোবিং: ক্লাস্টার পদার্থবিজ্ঞান ও সমাধিস্তম্ভের জীবনচক্র'
  },
  summary: {
    en: 'A comprehensive systems engineering analysis of open addressing and linear probing collision resolution. Unlike separate chaining, open addressing keeps all key-value entries directly inside a contiguous array, maximizing L1 CPU cache locality. When collisions occur, linear probing inspects sequential slots using the step function (h(k) + i) mod M. We explore primary clustering mechanics, where contiguous occupied runs attract new keys and cause probe lengths to degrade quadratically with load factor. We examine deletion invariants: clearing a slot to EMPTY breaks search continuity, creating false negatives for downstream colliding keys. To solve this, deletions place a TOMBSTONE marker that allows lookups to continue while permitting new insertions to reclaim the dead slot. Finally, we analyze tombstone accumulation, effective load factor monitoring, and table compaction.',
    bn: 'ওপেন অ্যাড্রেসিং এবং লিনিয়ার প্রোবিং সংঘর্ষ সমাধানের একটি পূর্ণাঙ্গ সিস্টেম ইঞ্জিনিয়ারিং বিশ্লেষণ। সেপারেট চেইনিংয়ের মতো বাইরে নোড ঝোলানোর বদলে ওপেন অ্যাড্রেসিং সব উপাদান সরাসরি একটি সংলগ্ন মেমরি অ্যারেতে সংরক্ষণ করে, যা সিপিইউ L1 ক্যাশের কার্যকারিতা বহুগুণ বাড়ায়। সংঘর্ষ দেখা দিলে লিনিয়ার প্রোবিং (h(k) + i) mod M সূত্রের মাধ্যমে পরবর্তী স্লটগুলো ক্রমানুসারে পরীক্ষা করে। আমরা প্রাইমারি ক্লাস্টারিংয়ের কারণ ব্যাখ্যা করেছি, যেখানে সংলগ্ন পূর্ণ স্লটগুলো নতুন চাবিগুলোকে চুম্বকের মতো টানে এবং লোড ফ্যাক্টর বাড়ার সাথে সাথে প্রোব সংখ্যা দ্রুত বৃদ্ধি পায়। এরপর ডিলিশন ইনভেরিয়েন্ট বিশ্লেষণ করা হয়েছে: সরাসরি কোনো স্লট ফাঁকা (EMPTY) করে দিলে পরবর্তী উপাদানগুলোর অনুসন্ধান পথ বিচ্ছিন্ন হয়ে ফলস নেগেটিভ তৈরি হয়। এর সমাধানে সমাধিস্মারক বা টুম্বস্টোন (TOMBSTONE) ব্যবহার করা হয়, যা খোঁজার সময় পথ সচল রাখে কিন্তু নতুন ডেটা ঢোকানোর সময় পুনর্ব্যবহার করা যায়। সবশেষে সমাধিস্মারক বৃদ্ধি, কার্যকর লোড ফ্যাক্টর পর্যবেক্ষণ এবং টেবিল কম্প্যাকশন কৌশল বিস্তারিত তুলে ধরা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'Closed Addressing vs Open Addressing: Flat Arrays and Cache Locality',
        bn: 'ক্লোজড অ্যাড্রেসিং বনাম ওপেন অ্যাড্রেসিং: ফ্ল্যাট অ্যারে এবং ক্যাশ লোকালিটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this lesson, we examine open addressing, an alternative collision resolution paradigm where every key-value pair lives directly inside the primary table array. In separate chaining (closed addressing), collisions spawn external linked lists scattered across heap memory. In open addressing, no heap allocations occur during insertion. All entries are packed into contiguous memory slots, taking direct advantage of hardware prefetchers and CPU cache line physics. Because the array has a fixed capacity M, the total number of stored elements N can never exceed M. The load factor alpha = N / M possesses a hard theoretical ceiling of 1.0, though performance degrades sharply once alpha exceeds 0.70.',
        bn: 'এই পাঠে আমরা ওপেন অ্যাড্রেসিং পরীক্ষা করব, যা একটি বিকল্প সংঘর্ষ সমাধান কৌশল যেখানে প্রতিটি চাবি ও মান সরাসরি মূল টেবিল অ্যারেতে সংরক্ষিত থাকে। সেপারেট চেইনিং পদ্ধতিতে সংঘর্ষ ঘটলে হিপ মেমরিতে ছড়ানো বাহ্যিক লিঙ্কড লিস্ট তৈরি হয়। কিন্তু ওপেন অ্যাড্রেসিংয়ে সন্নিবেশের সময় কোনো অতিরিক্ত হিপ বরাদ্দ লাগে না। সমস্ত ডেটা মেমরির একটি সংলগ্ন সমান্তরাল ব্লকে জমা হয়, যা হার্ডওয়্যার প্রিফেচার এবং সিপিইউ ক্যাশ লাইনের সর্বোচ্চ সুবিধা দেয়। যেহেতু অ্যারের একটি নির্দিষ্ট ধারণক্ষমতা M থাকে, তাই মোট উপাদানের সংখ্যা N কখনোই M এর চেয়ে বেশি হতে পারে না। ফলে লোড ফ্যাক্টর alpha = N / M এর সর্বোচ্চ তাত্ত্বিক সীমা ১.০ হলেও বাস্তবে ০.৭০ ছাড়ালে পারফরম্যান্স দ্রুত কমতে থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'open addressing',
          def: {
            en: 'A hash table design where all key-value entries reside directly inside the table array itself, resolving collisions through systematic probing of subsequent slots rather than external linked nodes.',
            bn: 'হ্যাশ টেবিলের একটি নকশা যেখানে সমস্ত চাবি ও মানের জোড়া সরাসরি টেবিল অ্যারের ভেতরেই থাকে এবং সংঘর্ষ দেখা দিলে কোনো বাহ্যিক নোড না বানিয়ে পরবর্তী স্লটগুলো নিয়মতান্ত্রিকভাবে পরীক্ষা করে সমাধান করা হয়।'
          }
        },
        {
          term: 'linear probing',
          def: {
            en: 'The simplest open addressing probe sequence, inspecting slots sequentially using the recurrence index = (hash(key) + i) mod M for probe step i = 0, 1, 2, ...',
            bn: 'সবচেয়ে সরল ওপেন অ্যাড্রেসিং প্রোবিং ক্রম, যা index = (hash(key) + i) mod M সূত্রের মাধ্যমে ধাপ i = ০, ১, ২, ... অনুযায়ী ধারাবাহিকভাবে স্লট পরীক্ষা করে।'
          }
        },
        {
          term: 'primary clustering',
          def: {
            en: 'The tendency of linear probing to create long contiguous blocks of occupied slots, where any key hashing into any slot of the cluster inevitably extends it, degrading performance.',
            bn: 'লিনিয়ার প্রোবিংয়ে সংলগ্ন পূর্ণ স্লটগুলোর একটি দীর্ঘ গুচ্ছ তৈরি হওয়ার প্রবণতা, যেখানে নতুন কোনো চাবি সেই গুচ্ছের যেকোনো অংশে পড়লেই গুচ্ছটি আরো এক ধাপ বড় হয়ে যায় এবং অনুসন্ধানের গতি কমায়।'
          }
        },
        {
          term: 'tombstone',
          def: {
            en: 'A sentinel marker placed in a deleted slot that signals search traversals to keep probing past it while permitting new insertions to overwrite and reclaim the space.',
            bn: 'মুছে ফেলা স্লটে বসানো একটি বিশেষ প্রতীক যা অনুসন্ধানকে থামতে না দিয়ে সামনে এগিয়ে যেতে বলে, কিন্তু নতুন ডেটা সন্নিবেশের সময় সেই স্থানটি পুনরায় ব্যবহারের অনুমতি দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'clustering',
      text: {
        en: 'Linear Probing Mechanics and the Primary Clustering Phenomenon',
        bn: 'লিনিয়ার প্রোবিংয়ের কার্যপ্রণালী এবং প্রাইমারি ক্লাস্টারিংয়ের প্রভাব'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Linear probing evaluates the simplest possible probe sequence: if slot h(k) is occupied, inspect slot h(k) + 1, then h(k) + 2, wrapping around to slot 0 when reaching the end of the array. The advantage is extraordinary CPU cache friendliness: reading contiguous slots exploits modern 64-byte cache lines. On a 64-bit machine storing 8-byte references, fetching a single cache line pulls 8 contiguous table slots simultaneously into L1 cache. Probing nearby slots requires zero main memory round-trips.',
        bn: 'লিনিয়ার প্রোবিং সবচেয়ে সরল প্রোব ক্রম ব্যবহার করে: যদি h(k) স্লটটি পূর্ণ থাকে, তবে h(k) + ১ স্লটটি পরীক্ষা করা হয়, এরপর h(k) + ২ এবং অ্যারের শেষ প্রান্তে পৌঁছালে ০ নম্বর স্লটে ফিরে আসে। এর মূল সুবিধা হলো দুর্দান্ত সিপিইউ ক্যাশ ফ্রেন্ডলিনেস: সংলগ্ন স্লট পড়লে আধুনিক ৬৪-বাইট ক্যাশ লাইনের পূর্ণ ব্যবহার হয়। ৬৪-বিট মেশিনে যেখানে রেফারেন্সের আকার ৮ বাইট, সেখানে একটিমাত্র ক্যাশ লাইন ফেচ একবারে সংলগ্ন ৮ টি স্লট L1 ক্যাশে নিয়ে আসে। ফলে পাশের স্লটগুলোতে অনুসন্ধান করতে কোনো অতিরিক্ত মেমরি ট্রিপ লাগে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'However, linear probing suffers from primary clustering. When multiple items collide, they form a solid contiguous run of occupied slots. Any subsequent key whose hash lands anywhere within this run must probe all the way to the end, inevitably expanding the run by 1 slot. A cluster of length L has an effective target area of (L + 1) / M. Therefore, larger clusters attract new keys at a rate proportional to their length, growing exponentially faster than isolated single entries. As Donald Knuth demonstrated, the expected number of probes for an unsuccessful search scales quadratically with load factor: E(probes) = 0.5 * (1 + 1 / (1 - alpha)^2). At alpha = 0.50, an unsuccessful search needs 2.5 probes. At alpha = 0.80, it requires 13.0 probes. At alpha = 0.90, it surges to 50.5 probes.',
        bn: 'তবে লিনিয়ার প্রোবিংয়ে প্রাইমারি ক্লাস্টারিং নামের একটি গুরুতর সমস্যা দেখা দেয়। যখন একাধিক চাবির সংঘর্ষ ঘটে, তখন তারা পাশাপাশি বসে পূর্ণ স্লটের একটি দীর্ঘ গুচ্ছ তৈরি করে। এরপর নতুন কোনো চাবির হ্যাশ যদি সেই গুচ্ছের যেকোনো স্লটে পড়ে, তবে তাকে বাধ্য হয়ে গুচ্ছের শেষ প্রান্ত পর্যন্ত এগিয়ে যেতে হয় এবং গুচ্ছটি আরও ১ স্লট বড় হয়। L দৈর্ঘ্যের একটি ক্লাস্টারের নতুন চাবি টানার সম্ভাবনা হলো (L + ১) / M। ফলে বড় ক্লাস্টারগুলো ছোট ক্লাস্টারের চেয়ে দ্রুত বাড়ে এবং চারপাশের খালি স্লট গ্রাস করে। ডোনাল্ড নুথের প্রমাণ অনুসারে, ব্যর্থ অনুসন্ধানে গড় প্রোব সংখ্যা লোড ফ্যাক্টরের সাথে দ্বিঘাত হারে বৃদ্ধি পায়: E(probes) = ০.৫ * (১ + ১ / (১ - alpha)^২)। যখন alpha = ০.৫০, তখন ব্যর্থ অনুসন্ধানে ২.৫ টি প্রোব লাগে। কিন্তু alpha = ০.৮০ হলে ১৩.০ টি এবং alpha = ০.৯০ হলে তা বেড়ে ৫০.৫ টি প্রোবে দাঁড়ায়।'
      }
    },
    {
      type: 'heading',
      id: 'code',
      text: {
        en: 'Empirical Verification: Linear Probing and Naive Deletion Breakage',
        bn: 'বাস্তব যাচাই: লিনিয়ার প্রোবিং এবং অপরিকল্পিত মোছনের বিপর্যয়'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      code: `// Linear Probing Table demonstrating Tombstone invariants
const M = 16;
const EMPTY = null;
const TOMBSTONE = Symbol('TOMBSTONE');

type Slot<K, V> = { key: K; val: V } | null | typeof TOMBSTONE;

class LinearProbeTable<K, V> {
  slots: Slot<K, V>[] = new Array(M).fill(EMPTY);
  size = 0;

  hash(key: string): number {
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      h = (h * 31 + key.charCodeAt(i)) >>> 0;
    }
    return h % M;
  }

  insert(key: string, val: V): { slot: number; probes: number } {
    const start = this.hash(key);
    let firstTombstone = -1;
    let probes = 0;

    for (let i = 0; i < M; i++) {
      const idx = (start + i) % M;
      probes++;
      const slot = this.slots[idx];

      if (slot === EMPTY) {
        const dest = firstTombstone !== -1 ? firstTombstone : idx;
        this.slots[dest] = { key: key as unknown as K, val };
        this.size++;
        return { slot: dest, probes };
      }
      if (slot === TOMBSTONE) {
        if (firstTombstone === -1) firstTombstone = idx;
      } else if (slot.key === key) {
        slot.val = val;
        return { slot: idx, probes };
      }
    }
    throw new Error('Hash table overflow');
  }

  search(key: string): { found: boolean; slot?: number; probes: number } {
    const start = this.hash(key);
    let probes = 0;

    for (let i = 0; i < M; i++) {
      const idx = (start + i) % M;
      probes++;
      const slot = this.slots[idx];

      if (slot === EMPTY) return { found: false, probes };
      if (slot !== TOMBSTONE && slot.key === key) {
        return { found: true, slot: idx, probes };
      }
    }
    return { found: false, probes };
  }

  deleteTombstone(key: string): boolean {
    const start = this.hash(key);
    for (let i = 0; i < M; i++) {
      const idx = (start + i) % M;
      const slot = this.slots[idx];
      if (slot === EMPTY) return false;
      if (slot !== TOMBSTONE && slot.key === key) {
        this.slots[idx] = TOMBSTONE;
        this.size--;
        return true;
      }
    }
    return false;
  }
}

// Concrete execution trace
const table = new LinearProbeTable<string, number>();
const c = table.insert('carol', 100); // hash = 1 -> slot 1 (probes: 1)
const f = table.insert('frank', 200); // hash = 2 -> slot 2 (probes: 1)
const h = table.insert('heidi', 300); // hash = 1 -> collision at 1, 2 -> slot 3 (probes: 3)

console.log(\`carol: slot=\${c.slot}, probes=\${c.probes}\`);
// carol: slot=1, probes=1
console.log(\`frank: slot=\${f.slot}, probes=\${f.probes}\`);
// frank: slot=2, probes=1
console.log(\`heidi: slot=\${h.slot}, probes=\${h.probes}\`);
// heidi: slot=3, probes=3

console.log('Search heidi before delete:', table.search('heidi'));
// Search heidi before delete: { found: true, slot: 3, probes: 3 }

table.deleteTombstone('frank');
console.log('Search heidi after tombstone delete:', table.search('heidi'));
// Search heidi after tombstone delete: { found: true, slot: 3, probes: 3 }`,
      caption: {
        en: 'Linear probing insertion, collision resolution, and search continuity preserved through tombstone deletion in a 16-slot table.',
        bn: '১৬ স্লটের টেবিলে লিনিয়ার প্রোবিং সন্নিবেশ, সংঘর্ষ সমাধান এবং সমাধিস্মারক দ্বারা অনুসন্ধান ধারাবাহিকতা রক্ষার প্রমাণ।'
      }
    },
    {
      type: 'heading',
      id: 'tombstones',
    },
    {
      type: 'visual',
      id: 'ht'
    },
    {
      type: 'heading',
      id: 'tombstones-guide',
      text: {
        en: 'The Deletion Dilemma: Why Naive Clearing Creates False Negatives',
        bn: 'মুছনের সংকট: কেন অপরিকল্পিতভাবে খালি করলে ফলস নেগেটিভ ঘটে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In open addressing, deleting an entry by simply setting its slot to EMPTY breaks the fundamental invariant of linear search. Consider the trace above where carol hashes to 1, frank hashes to 2, and heidi hashes to 1. Because slot 1 is occupied by carol and slot 2 by frank, heidi probes forward and settles in slot 3. Now, if frank is deleted by resetting slot 2 to EMPTY, what happens when we search for heidi? The search hashes heidi to slot 1, inspects carol, moves to slot 2, encounters EMPTY, and immediately stops, concluding that heidi does not exist! Setting the slot to EMPTY breaks the continuous chain of probe steps.',
        bn: 'ওপেন অ্যাড্রেসিংয়ে কোনো উপাদান ডিলিট করার সময় স্লটটিকে সরাসরি ফাঁকা (EMPTY) করে দিলে লিনিয়ার অনুসন্ধানের মৌলিক নিয়ম ভেঙে যায়। উপরের উদাহরণটি লক্ষ্য করুন: প্রথম চাবি (carol) এর হ্যাশ ১, দ্বিতীয় চাবি (frank) এর হ্যাশ ২ এবং তৃতীয় উপাদান (heidi) এর হ্যাশ ১। প্রথম দুটি চাবি স্লট ১ ও ২ দখল করে রাখায় heidi বাধ্য হয়ে স্লট ৩ এ বসে। এখন যদি দ্বিতীয় স্লটটি সাধারণ ফাঁকা (EMPTY) করে দেওয়া হয়, তবে পরবর্তীতে heidi খুঁজতে গেলে কী ঘটবে? অনুসন্ধান শুরুতে হ্যাশ ১ এ যাবে, এরপর স্লট ২ এ গিয়ে ফাঁকা পাবে এবং ভাববে টেবিলে তৃতীয় উপাদানটি নেই! স্লটটিকে ফাঁকা করে দিলে অনুসন্ধানের পথ বিচ্ছিন্ন হয়ে যায় এবং নিশ্চিত ফলস নেগেটিভ তৈরি হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To solve this problem without moving other elements, systems introduce the TOMBSTONE marker (or DELETED sentinel). A tombstone alters the probe state machine: for searches, a tombstone is treated as occupied, instructing the search loop to keep probing downstream. For insertions, a tombstone is treated as available space, allowing the new element to reclaim the abandoned slot. This preserves search correctness while maintaining space efficiency.',
        bn: 'অন্যান্য উপাদানগুলোকে না সরিয়ে এই সমস্যা সমাধানের জন্য সিস্টেমে টুম্বস্টোন (TOMBSTONE) বা ডিলিটেড মার্কার ব্যবহার করা হয়। টুম্বস্টোন প্রোব স্টেট মেশিনকে পরিবর্তন করে: অনুসন্ধানের সময় টুম্বস্টোনকে পূর্ণ বলে গণ্য করা হয়, যাতে অনুসন্ধানকারী থেমে না গিয়ে সামনে এগোতে পারে। কিন্তু নতুন ডেটা ঢোকানোর সময় টুম্বস্টোনকে ফাঁকা জায়গা ধরা হয়, যার ফলে পরিত্যক্ত স্লটটি নতুন উপাদানের জন্য পুনর্ব্যবহার করা যায়। এটি অনুসন্ধানের সঠিকতা বজায় রেখে মেমরির অপচয় রোধ করে।'
      }
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: 'Step 1: Inspect Slot State',
            bn: 'ধাপ ১: স্লটের অবস্থা পরীক্ষা'
          },
          text: {
            en: 'During lookup, inspect slot (h(k) + i) mod M. If EMPTY, key does not exist. If OCCUPIED with matching key, return success.',
            bn: 'অনুসন্ধানের সময় (h(k) + i) mod M স্লটটি পরীক্ষা করুন। যদি EMPTY হয় তবে চাবিটি টেবিলে নেই। আর যদি কাঙ্ক্ষিত চাবিসহ OCCUPIED পাওয়া যায় তবে সফল হন।'
          }
        },
        {
          title: {
            en: 'Step 2: Traverse Past Tombstones',
            bn: 'ধাপ ২: টুম্বস্টোন অতিক্রম করে এগিয়ে চলা'
          },
          text: {
            en: 'If slot is TOMBSTONE, do not abort search. Increment step i and continue probing until EMPTY or key is found.',
            bn: 'স্লটে TOMBSTONE পেলে অনুসন্ধান থামাবেন না। ধাপ i বৃদ্ধি করে পরবর্তী স্লট পরীক্ষা চালিয়ে যান যতক্ষণ না EMPTY অথবা কাঙ্ক্ষিত চাবি পাওয়া যায়।'
          }
        },
        {
          title: {
            en: 'Step 3: Reclaim on Insertion',
            bn: 'ধাপ ৩: সন্নিবেশের সময় স্লট পুনরুদ্ধার'
          },
          text: {
            en: 'During insert, remember the first TOMBSTONE encountered. If search terminates at EMPTY without finding key, write new entry into that tombstone slot.',
            bn: 'সন্নিবেশের সময় পথে পাওয়া প্রথম TOMBSTONE স্লটের ইনডেক্স মনে রাখুন। পুরো অনুসন্ধান শেষে চাবিটি কোথাও না পেলে সেই টুম্বস্টোন স্লটে নতুন ডেটা লিখে জায়গা পুনরুদ্ধার করুন।'
          }
        },
        {
          title: {
            en: 'Step 4: Compaction Threshold Trigger',
            bn: 'ধাপ ৪: কম্প্যাকশন সীমা নির্ধারণ'
          },
          text: {
            en: 'Monitor effective load factor (live + tombstones) / M. When tombstones inflate probe length beyond 0.70, trigger table compaction.',
            bn: 'কার্যকর লোড ফ্যাক্টর (জীবিত উপাদান + টুম্বস্টোন) / M নিয়মিত পর্যবেক্ষণ করুন। টুম্বস্টোনের কারণে গড় প্রোব দৈর্ঘ্য ০.৭০ ছাড়ালে টেবিল কম্প্যাকশন চালু করুন।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'compaction',
      text: {
        en: 'The Tombstone Accumulation Dilemma and Table Compaction',
        bn: 'সমাধিস্মারক বৃদ্ধির সংকট এবং টেবিল কম্প্যাকশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While tombstones preserve search correctness, they introduce a secondary performance trap known as tombstone pollution. Over time, high insertion and deletion churn converts large portions of the table into tombstones. Even if the number of live keys is small, the effective load factor alpha_effective = (N_live + N_tombstone) / M approaches 1.0. Lookups for missing keys must probe through dozens of tombstones before encountering an EMPTY slot, degrading search latency from O(1) to O(M).',
        bn: 'যদিও টুম্বস্টোন অনুসন্ধানের সঠিকতা বজায় রাখে, সময়ের সাথে সাথে এটি একটি নতুন পারফরম্যান্স জটিলতা তৈরি করে যাকে টুম্বস্টোন পলিউশন বলা হয়। ঘন ঘন ডেটা সন্নিবেশ এবং মোছনের ফলে টেবিলের বহু স্লট টুম্বস্টোনে পরিণত হয়। টেবিলে সক্রিয় উপাদানের সংখ্যা কম থাকলেও কার্যকর লোড ফ্যাক্টর alpha_effective = (N_live + N_tombstone) / M দ্রুত ১.০ এর কাছাকাছি পৌঁছে যায়। ফলে টেবিলে নেই এমন কোনো চাবি খুঁজতে গেলে একটি EMPTY স্লট পাওয়ার আগে десятки টুম্বস্টোন পার হতে হয়, যা অনুসন্ধানের গতি O(1) থেকে নামিয়ে O(M) এ ফেলে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Production implementations mitigate tombstone accumulation through two primary techniques. The first is Table Compaction (or Rehash): when N_tombstone exceeds a threshold (such as 30 percent of M), the table is rehashed into a freshly allocated array of the same size, purging all tombstones. The second approach is Backward-Shift Deletion (Knuth Algorithm 6.4R). When an entry at slot i is deleted, downstream items in the cluster are shifted backward if their original hash allows it, eliminating tombstones entirely.',
        bn: 'প্রোডাকশন সিস্টেমে এই সংকট দূর করতে প্রধানত দুটি পদ্ধতি ব্যবহার করা হয়। প্রথমটি হলো টেবিল কম্প্যাকশন বা রিহ্যাশিং: যখন টুম্বস্টোনের সংখ্যা নির্দিষ্ট সীমা (যেমন মোট M এর ৩০ শতাংশ) অতিক্রম করে, তখন একই আকারের একটি নতুন অ্যারে বরাদ্দ করে জীবিত উপাদানগুলোকে পুনরায় হ্যাশ করা হয় এবং সব টুম্বস্টোন মুছে ফেলা হয়। দ্বিতীয় পদ্ধতিটি হলো ব্যাকওয়ার্ড-শিফট ডিলিশন (ডোনাল্ড নুথ অ্যালগরিদম ৬.৪R)। কোনো স্লট ডিলিট করার পর ক্লাস্টারের পেছনের উপাদানগুলোকে সামনে টেনে আনা হয় যদি তাদের মূল হ্যাশ তা অনুমোদন করে, যার ফলে কোনো টুম্বস্টোন রাখার প্রয়োজন হয় না।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architecture Metric', bn: 'আর্কিটেকচার মেট্রিক' },
        { en: 'Separate Chaining', bn: 'সেপারেট চেইনিং' },
        { en: 'Linear Probing', bn: 'লিনিয়ার প্রোবিং' },
        { en: 'Backward-Shift Probing', bn: 'ব্যাকওয়ার্ড-শিফট প্রোবিং' }
      ],
      rows: [
        [
          { en: 'Memory Locality', bn: 'মেমরি লোকালিটি' },
          { en: 'Poor (pointer chasing across heap)', bn: 'খারাপ (হিপ মেমরিতে পয়েন্টার চেজিং)' },
          { en: 'Optimal (contiguous 64-byte cache lines)', bn: 'সেরা (সংলগ্ন ৬৪-বাইট ক্যাশ লাইন)' },
          { en: 'Optimal (contiguous 64-byte cache lines)', bn: 'সেরা (সংলগ্ন ৬৪-বাইট ক্যাশ লাইন)' }
        ],
        [
          { en: 'Per-Entry Overhead', bn: 'প্রতি উপাদানে ওভারহেড' },
          { en: 'High (24-32 bytes allocator metadata)', bn: 'বেশি (২৪-৩২ বাইট মেটাডেটা)' },
          { en: 'Zero (flat array slot storage)', bn: 'শূন্য (সরাসরি ফ্ল্যাট অ্যারে স্লট)' },
          { en: 'Zero (flat array slot storage)', bn: 'শূন্য (সরাসরি ফ্ল্যাট অ্যারে স্লট)' }
        ],
        [
          { en: 'Load Factor Ceiling', bn: 'সর্বোচ্চ লোড ফ্যাক্টর' },
          { en: 'Unbounded (alpha can exceed 1.0)', bn: 'সীমাহীন (alpha ১.০ ছাড়াতে পারে)' },
          { en: 'Hard ceiling alpha < 1.0 (resizes at 0.70)', bn: 'কঠোর সীমা alpha < ১.০ (০.৭০ এ রিসাইজ)' },
          { en: 'Hard ceiling alpha < 1.0 (resizes at 0.70)', bn: 'কঠোর সীমা alpha < ১.০ (০.৭০ এ রিসাইজ)' }
        ],
        [
          { en: 'Clustering Behavior', bn: 'ক্লাস্টারিং আচরণ' },
          { en: 'None (independent bucket lists)', bn: 'নেই (স্বাধীন বাকেট তালিকা)' },
          { en: 'Severe Primary Clustering', bn: 'মারাত্মক প্রাইমারি ক্লাস্টারিং' },
          { en: 'Severe Primary Clustering', bn: 'মারাত্মক প্রাইমারি ক্লাস্টারিং' }
        ],
        [
          { en: 'Deletion Complexity', bn: 'ডিলিশন জটিলতা' },
          { en: 'Simple O(1) pointer unlinking', bn: 'সহজ O(1) পয়েন্টার সংযোগ বিচ্ছিন্নকরণ' },
          { en: 'Tombstone markers (requires compaction)', bn: 'টুম্বস্টোন মার্কার (কম্প্যাকশন আবশ্যক)' },
          { en: 'Cluster backward shift (zero tombstones)', bn: 'ক্লাস্টার পেছনের দিকে শিফট (টুম্বস্টোন মুক্ত)' }
        ]
      ]
    }
  ],
  exercises: [
    {
      id: 'ta-ex1',
      kind: 'mcq',
      topic: 'probe index calculation',
      question: {
        en: 'In a 16-slot table using linear probing with recurrence (hash + i) mod 16, what are the first 4 indices inspected if the initial hash value is 14?',
        bn: '১৬ স্লটের টেবিলে লিনিয়ার প্রোবিং (hash + i) mod ১৬ ব্যবহার করলে প্রারম্ভিক হ্যাশ মান ১৪ হলে প্রথম ৪ টি পরিদর্শিত ইনডেক্স কোনগুলো হবে?'
      },
      options: [
        {
          en: '[14, 15, 0, 1] due to circular wrap-around at the end of the array',
          bn: '[১৪, ১৫, ০, ১] কারণ অ্যারের শেষে বৃত্তাকার পুনরাবৃত্তি ঘটে'
        },
        {
          en: '[14, 15, 16, 17]',
          bn: '[১৪, ১৫, ১৬, ১৭]'
        },
        {
          en: '[0, 1, 2, 3]',
          bn: '[০, ১, ২, ৩]'
        },
        {
          en: '[14, 13, 12, 11]',
          bn: '[১৪, ১৩, ১২, ১১]'
        }
      ],
      answer: 0,
      hint: {
        en: 'Remember that modulo 16 arithmetic wraps indices back to 0 once reaching capacity.',
        bn: 'মনে রাখবেন মডিউলো ১৬ গাণিতিক নিয়মে ধারণক্ষমতা অতিক্রম করলে ইনডেক্স ০ তে ফিরে আসে।'
      },
      explanation: {
        en: 'Probing starts at i = 0 yielding (14 + 0) % 16 = 14, then i = 1 yielding 15, i = 2 yielding (16 % 16) = 0, and i = 3 yielding 1. The wrap-around creates the sequence 14, 15, 0, 1.',
        bn: 'প্রোবিং i = ০ থেকে শুরু হয়ে (১৪ + ০) % ১৬ = ১৪, এরপর i = ১ এ ১৫, i = ২ এ (১৬ % ১৬) = ০ এবং i = ৩ এ ১ দেয়। বৃত্তাকার পরিবর্তনের কারণে ১৪, ১৫, ০, ১ অনুক্রমটি তৈরি হয়।'
      }
    },
    {
      id: 'ta-ex2',
      kind: 'mcq',
      topic: 'effective load factor',
      question: {
        en: 'A hash table with capacity 16 contains 5 live keys and 3 tombstones. What is its effective load factor governing search probe distances?',
        bn: '১৬ ধারণক্ষমতার একটি হ্যাশ টেবিলে ৫ টি সক্রিয় চাবি এবং ৩ টি টুম্বস্টোন রয়েছে। অনুসন্ধানের দূরত্ব নিয়ন্ত্রণকারী কার্যকর লোড ফ্যাক্টর কত?'
      },
      options: [
        {
          en: '0.50 because effective load factor equals (5 live + 3 tombstones) / 16 = 8 / 16',
          bn: '০.৫০ কারণ কার্যকর লোড ফ্যাক্টর হলো (৫ সক্রিয় + ৩ টুম্বস্টোন) / ১৬ = ৮ / ১৬'
        },
        {
          en: '0.31 because only live keys count toward load factor',
          bn: '০.৩১ কারণ কেবল সক্রিয় চাবি লোড ফ্যাক্টরে ভূমিকা রাখে'
        },
        {
          en: '1.0 because tombstones double table density',
          bn: '১.০ কারণ টুম্বস্টোন টেবিলের ঘনত্ব দ্বিগুণ করে'
        },
        {
          en: '0.18 because tombstones subtract from capacity',
          bn: '০.১৮ কারণ টুম্বস্টোন ধারণক্ষমতা থেকে বাদ যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Unsuccessful searches must traverse both live keys and tombstones before hitting empty space.',
        bn: 'ব্যর্থ অনুসন্ধানে ফাঁকা জায়গা পাওয়ার আগে সক্রিয় চাবি এবং টুম্বস্টোন উভয়ই পার হতে হয়।'
      },
      explanation: {
        en: 'Search probe lengths depend on all non-empty slots. The effective load factor is (5 + 3) / 16 = 8 / 16 = 0.50, meaning search performance degrades as if the table were half full.',
        bn: 'অনুসন্ধানের দৈর্ঘ্য সমস্ত অপূর্ণ স্লটের ওপর নির্ভর করে। কার্যকর লোড ফ্যাক্টর হলো (৫ + ৩) / ১৬ = ৮ / ১৬ = ০.৫০, অর্থাৎ অনুসন্ধানের গতি টেবিল অর্ধেক পূর্ণ থাকার মতো হ্রাস পায়।'
      }
    },
    {
      id: 'ta-ex3',
      kind: 'mcq',
      topic: 'tombstone search invariant',
      question: {
        en: 'During a linear probing lookup for a target key, what action must the search loop take when encountering a TOMBSTONE marker?',
        bn: 'লিনিয়ার প্রোবিংয়ে কাঙ্ক্ষিত চাবি অনুসন্ধানের সময় একটি TOMBSTONE মার্কারের মুখোমুখি হলে সার্চ লুপের কী করা উচিত?'
      },
      options: [
        {
          en: 'Continue probing downstream to the next slot without terminating the search',
          bn: 'অনুসন্ধান মাঝপথে না থামিয়ে সামনের পরবর্তী স্লটগুলোর দিকে অনুসন্ধান চালিয়ে যাওয়া'
        },
        {
          en: 'Terminate the search immediately and report that the key does not exist',
          bn: 'তাৎক্ষণিকভাবে অনুসন্ধান থামিয়ে দেওয়া এবং চাবিটি নেই বলে জানানো'
        },
        {
          en: 'Delete all remaining keys in the table',
          bn: 'টেবিলের বাকি সমস্ত চাবি মুছে ফেলা'
        },
        {
          en: 'Reset the table capacity to zero',
          bn: 'টেবিলের ধারণক্ষমতা শূন্যে নামিয়ে আনা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Tombstones preserve search continuity for items that collided past this slot.',
        bn: 'টুম্বস্টোন এই স্লটের পরে সংঘর্ষিত উপাদানগুলোর অনুসন্ধানের ধারাবাহিকতা সচল রাখে।'
      },
      explanation: {
        en: 'If search aborted upon encountering a tombstone, any element inserted downstream after a collision at this slot would become unreachable. Probing must continue until matching key or EMPTY is found.',
        bn: 'টুম্বস্টোন দেখে অনুসন্ধান থেমে গেলে এই স্লটের পরে সংঘর্ষ হয়ে বসা উপাদানগুলো খুঁজে পাওয়া অসম্ভব হতো। তাই মিল পাওয়া বা EMPTY স্লট না পাওয়া পর্যন্ত প্রোবিং চালিয়ে যেতে হয়।'
      }
    },
    {
      id: 'ta-ex4',
      kind: 'mcq',
      topic: 'table compaction',
      question: {
        en: 'How does table compaction restore optimal O(1) search performance in a hash table burdened by tombstone pollution?',
        bn: 'টুম্বস্টোন দ্বারা দূষিত হ্যাশ টেবিলে টেবিল কম্প্যাকশন কীভাবে পুনরায় সর্বোত্তম O(1) অনুসন্ধানের গতি ফিরিয়ে আনে?'
      },
      options: [
        {
          en: 'It rehashes only surviving live keys into a clean array, purging all tombstones and restoring probe chains',
          bn: 'এটি কেবল বেঁচে থাকা সক্রিয় চাবিগুলোকে একটি নতুন অ্যারেতে স্থানান্তর করে, সমস্ত টুম্বস্টোন মুছে ফেলে এবং অনুসন্ধান পথ পুনর্গঠন করে'
        },
        {
          en: 'It converts tombstones into negative integers',
          bn: 'এটি টুম্বস্টোনগুলোকে ঋণাত্মক পূর্ণসংখ্যায় রূপান্তর করে'
        },
        {
          en: 'It disables the hash function and switches to binary search',
          bn: 'এটি হ্যাশ ফাংশন বন্ধ করে বাইনারি সার্চ চালু করে'
        },
        {
          en: 'It replaces the array with an external disk file',
          bn: 'এটি অ্যারের বদলে একটি বাহ্যিক ডিস্ক ফাইল বসিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about allocating a fresh table of the same size and copying only active elements.',
        bn: 'একই আকারের একটি নতুন টেবিল বরাদ্দ করে কেবল সক্রিয় উপাদানগুলো কপি করার কথা ভাবুন।'
      },
      explanation: {
        en: 'Compaction iterates through the table and re-inserts only the live keys into a fresh array, leaving behind all tombstones. This drops effective load factor back to live load factor, restoring single-probe lookups.',
        bn: 'কম্প্যাকশন পুরো টেবিল ঘুরে কেবল সক্রিয় চাবিগুলোকে নতুন অ্যারেতে পুনরায় সন্নিবেশ করে এবং সব টুম্বস্টোন ফেলে দেয়। এর ফলে কার্যকর লোড ফ্যাক্টর কমে গিয়ে পুনরায় দ্রুত অনুসন্ধান ফিরে আসে।'
      }
    }
  ],
  quiz: {
    id: 'tombstone-avenue-quiz',
    title: {
      en: 'Open Addressing and Tombstone Mastery Quiz',
      bn: 'ওপেন অ্যাড্রেসিং এবং সমাধিস্মারক আয়ত্তকরণ কুইজ'
    },
    questions: [
      {
        id: 'ta-q1',
        kind: 'mcq',
        topic: 'architecture',
        question: {
          en: 'What is the primary hardware advantage of linear probing over separate chaining?',
          bn: 'সেপারেট চেইনিংয়ের তুলনায় লিনিয়ার প্রোবিংয়ের প্রধান হার্ডওয়্যার সুবিধা কোনটি?'
        },
        options: [
          {
            en: 'Linear probing can hold more keys than slots without resizing',
            bn: 'লিনিয়ার প্রোবিংয়ে টেবিল রিসাইজ না করেই স্লটের চেয়ে বেশি চাবি রাখা যায়'
          },
          {
            en: 'Contiguous array access matches 64-byte CPU cache lines, loading multiple adjacent slots in a single memory fetch',
            bn: 'সংলগ্ন অ্যারে মেমরি অ্যাক্সেস ৬৪-বাইট সিপিইউ ক্যাশ লাইনের সাথে খাপ খায়, ফলে একবারে একাধিক স্লট ক্যাশে চলে আসে'
          },
          {
            en: 'Linear probing completely eliminates hash collisions through mathematical induction',
            bn: 'গাণিতিক আরোহ বিধির মাধ্যমে লিনিয়ার প্রোবিং সব ধরনের সংঘর্ষ পুরোপুরি দূর করে'
          },
          {
            en: 'It allows keys to have negative hash values',
            bn: 'এটি চাবিগুলোকে ঋণাত্মক হ্যাশ মান ব্যবহারের অনুমতি দেয়'
          }
        ],
        answer: 1,
        hint: {
          en: 'Consider spatial locality and how modern CPU memory controllers load 64-byte blocks into L1 cache.',
          bn: 'মেমরির স্থানিক নৈকট্য (স্পেশাল লোকালিটি) এবং সিপিইউ কীভাবে ৬৪-বাইটের ক্যাশ লাইন লোড করে তা চিন্তা করুন।'
        },
        explanation: {
          en: 'Because all entries are stored in a contiguous array, fetching a slot loads adjacent slots into the 64-byte CPU cache line simultaneously. Probing nearby slots incurs zero extra main memory fetches, unlike linked lists which chase pointers across arbitrary heap addresses.',
          bn: 'সব উপাদান একটি সংলগ্ন মেমরি অ্যারেতে থাকায় একটি স্লট রিড করার সময় সংলগ্ন স্লটগুলো স্বয়ংক্রিয়ভাবে ৬৪-বাইটের ক্যাশ লাইনে চলে আসে। ফলে পার্শ্ববর্তী স্লটগুলো পরীক্ষা করতে মূল র\u09cdযামে অতিরিক্ত ট্রিপ লাগে না, যা লিঙ্কড লিস্টের বিচ্ছিন্ন পয়েন্টার চেজিংয়ের তুলনায় বহু গুণ দ্রুত।'
        }
      },
      {
        id: 'ta-q2',
        kind: 'mcq',
        topic: 'clustering',
        question: {
          en: 'Why does primary clustering in linear probing cause probe lengths to degrade exponentially faster for large clusters?',
          bn: 'লিনিয়ার প্রোবিংয়ে প্রাইমারি ক্লাস্টারিংয়ের কারণে বড় ক্লাস্টারগুলোতে প্রোব দৈর্ঘ্য দ্রুতগতিতে কেন বাড়ে?'
        },
        options: [
          {
            en: 'A contiguous cluster of length L absorbs any key hashing to any of its L slots plus the boundary, giving it an arrival probability of (L + 1) / M',
            bn: 'L দৈর্ঘ্যের একটি সংলগ্ন ক্লাস্টার তার ভেতরের যেকোনো স্লট অথবা সীমানায় পড়া যেকোনো চাবি গ্রাস করে, ফলে এর চাবি টানার সম্ভাবনা হয় (L + ১) / M'
          },
          {
            en: 'The CPU execution pipeline stalls because integer modulo is completely disabled in hardware',
            bn: 'হার্ডওয়্যারে পূর্ণসংখ্যার মডিউলো সম্পূর্ণ অকার্যকর হয়ে যাওয়ার কারণে সিপিইউ পাইপলাইন থমকে যায়'
          },
          {
            en: 'Open addressing tables enforce strict alphanumeric sorting during linear probing',
            bn: 'ওপেন অ্যাড্রেসিং টেবিল লিনিয়ার প্রোবিংয়ের সময় কঠোর বর্ণানুক্রমিক সাজানো বাধ্যতামূলক করে'
          },
          {
            en: 'The compiler forces garbage collection on every single probe increment',
            bn: 'প্রতিটি প্রোব বৃদ্ধির সময় কম্পাইলার জোরপূর্বক মেমরি আবর্জনা পরিষ্কার করতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compare the landing target area of a single isolated slot versus a run of contiguous filled slots.',
          bn: 'একটি বিচ্ছিন্ন একক স্লটের ক্ষেত্রফলের সাথে পাশাপাশি লেগে থাকা একাধিক স্লটের ক্ষেত্রফল তুলনা করুন।'
        },
        explanation: {
          en: 'An isolated empty slot has probability 1 / M of being hit. A cluster of length L absorbs any key that hashes into any of its L slots or the next slot, giving it probability (L + 1) / M. Larger clusters act as wider targets, causing them to absorb more collisions and merge with adjacent clusters.',
          bn: 'একটি সাধারণ ফাঁকা স্লটে আঘাত হানার সম্ভাবনা মাত্র ১ / M। কিন্তু L দৈর্ঘ্যের একটি ক্লাস্টারের যেকোনো স্লট বা ঠিক পরের স্লটে পড়লেই ক্লাস্টারটি চাবিটি গ্রাস করে, যার সম্ভাবনা (L + ১) / M। ফলে বড় ক্লাস্টারগুলো চওড়া ফাঁদের মতো কাজ করে বেশি সংখ্যক উপাদান টেনে নেয় এবং দ্রুত বাড়ে।'
        }
      },
      {
        id: 'ta-q3',
        kind: 'mcq',
        topic: 'tombstones',
        question: {
          en: 'What catastrophic bug occurs if a deleted element in open addressing is naively replaced with EMPTY (null)?',
          bn: 'ওপেন অ্যাড্রেসিংয়ে ডিলিট করা উপাদানকে অপরিকল্পিতভাবে EMPTY (বা null) করে দিলে কোন মারাত্মক ত্রুটি ঘটে?'
        },
        options: [
          {
            en: 'Subsequent lookups for elements that collided past that slot terminate early, producing false negatives',
            bn: 'ঐ স্লটের পরে সংঘর্ষ হয়ে বসা উপাদানগুলোর পরবর্তী অনুসন্ধান মাঝপথে থেমে গিয়ে ফলস নেগেটিভ তৈরি করে'
          },
          {
            en: 'The entire array is automatically truncated to zero elements by the operating system',
            bn: 'অপারেটিং সিস্টেম স্বয়ংক্রিয়ভাবে সম্পূর্ণ অ্যারের আকার কমিয়ে শূন্য উপাদানে নামিয়ে আনে'
          },
          {
            en: 'The hash function generates inverted bitwise masks on all subsequent operations',
            bn: 'পরবর্তী সমস্ত অপারেশনে হ্যাশ ফাংশনটি উল্টো বিটওয়াইজ মাস্ক তৈরি করতে শুরু করে'
          },
          {
            en: 'All surviving keys are duplicated in memory across every thread',
            bn: 'বেঁচে থাকা সমস্ত চাবি প্রতিটি থ্রেডে একাধিকবার নকল হয়ে মেমরি ভরিয়ে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Recall how search decides that a key does not exist when walking down the probe path.',
          bn: 'অনুসন্ধানের সময় টেবিলে কোনো চাবি নেই তা নিশ্চিত করতে সার্চ লুপ কী দেখে থামে তা স্মরণ করুন।'
        },
        explanation: {
          en: 'Search stops upon encountering an EMPTY slot. If an intermediate slot in a collision chain is set to EMPTY, any element that originally collided past that slot becomes unreachable, causing valid keys to report false negatives.',
          bn: 'লিনিয়ার সার্চে কোনো স্লট EMPTY পেলে ধরে নেওয়া হয় চাবিটি টেবিলে নেই। সংঘর্ষের পথে থাকা কোনো স্লটকে সরাসরি EMPTY বানালে তার পেছনে থাকা বৈধ উপাদানগুলোতে পৌঁছানো অসম্ভব হয়ে পড়ে এবং ফলস নেগেটিভ ঘটে।'
        }
      },
      {
        id: 'ta-q4',
        kind: 'mcq',
        topic: 'tombstones',
        question: {
          en: 'How does an insertion operation handle a TOMBSTONE slot during probing?',
          bn: 'প্রোবিংয়ের সময় সন্নিবেশ অপারেশন কীভাবে একটি TOMBSTONE স্লটকে ব্যবহার করে?'
        },
        options: [
          {
            en: 'It immediately throws an unrecoverable segmentation fault',
            bn: 'এটি সাথে সাথে একটি মারাত্মক সেগমেন্টেশন ফল্ট তৈরি করে'
          },
          {
            en: 'It records the tombstone slot as a reusable candidate, verifies the key is not already in the table, and inserts into that tombstone slot',
            bn: 'এটি টুম্বস্টোন স্লটটিকে সম্ভাব্য স্থান হিসেবে মনে রাখে, পুরো টেবিলে চাবিটি আগে থেকেই নেই তা নিশ্চিত করে এবং সেই টুম্বস্টোন স্লটে নতুন ডেটা বসায়'
          },
          {
            en: 'It ignores the tombstone and permanently reduces table capacity by 1',
            bn: 'এটি টুম্বস্টোনকে এড়িয়ে যায় এবং টেবিলের মোট ধারণক্ষমতা স্থায়ীভাবে ১ কমিয়ে দেয়'
          },
          {
            en: 'It converts the entire table into a balanced binary search tree',
            bn: 'এটি সম্পূর্ণ টেবিলটিকে একটি ভারসাম্যপূর্ণ বাইনারি সার্চ ট্রিতে রূপান্তর করে'
          }
        ],
        answer: 1,
        hint: {
          en: 'Insertion wants to reuse empty space while ensuring duplicate keys are updated rather than re-inserted.',
          bn: 'সন্নিবেশের লক্ষ্য হলো খালি জায়গা পুনর্ব্যবহার করা, তবে চাবিটি আগে থেকেই টেবিলে আছে কিনা তাও যাচাই করা।'
        },
        explanation: {
          en: 'To prevent duplicate keys, the insert probe must continue checking until it finds an existing match or an EMPTY slot. If the key is not already present, it writes into the first encountered TOMBSTONE, successfully recycling the dead slot.',
          bn: 'চাবির পুনরাবৃত্তি ঠেকাতে ইনসার্ট অপারেশন নিশ্চিত করে চাবিটি অন্য কোথাও আছে কিনা। চাবিটি টেবিলে না থাকলে পথে দেখা প্রথম TOMBSTONE স্লটে ডেটা সংরক্ষণ করে পরিত্যক্ত স্থানটি পুনরায় সফলভাবে ব্যবহার করে।'
        }
      },
      {
        id: 'ta-q5',
        kind: 'mcq',
        topic: 'compaction',
        question: {
          en: 'What metric triggers table compaction in open addressing even when the number of live keys remains low?',
          bn: 'সক্রিয় চাবির সংখ্যা কম থাকা সত্ত্বেও ওপেন অ্যাড্রেসিংয়ে কোন মেট্রিকের কারণে টেবিল কম্প্যাকশন চালু করতে হয়?'
        },
        options: [
          {
            en: 'Effective load factor (live + tombstones) / M exceeding the critical performance threshold',
            bn: 'কার্যকর লোড ফ্যাক্টর (জীবিত চাবি + টুম্বস্টোন) / M সংকটজনক পারফরম্যান্স সীমা অতিক্রম করা'
          },
          {
            en: 'The system clock reaching midnight in the local server timezone',
            bn: 'স্থানীয় সার্ভারের সময় অঞ্চলে ঘড়ির কাঁটা ঠিক রাত বারোটা স্পর্শ করা'
          },
          {
            en: 'The hash seed changing from a positive integer to a floating-point number',
            bn: 'হ্যাশ সিডটি একটি ধনাত্মক পূর্ণসংখ্যা থেকে ফ্লোটিং-পয়েন্ট সংখ্যায় পরিবর্তিত হওয়া'
          },
          {
            en: 'The compiler optimizing away the main lookup switch statement',
            bn: 'কম্পাইলার অপ্টিমাইজেশন দ্বারা মূল লুকআপ স্টেটমেন্ট মুছে ফেলা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Tombstones are not free: searches must walk past them, inflating probe distances toward O(M).',
          bn: 'টুম্বস্টোন সম্পূর্ণ বিনামূল্যে আসে না: এদের পাশ কাটিয়ে হাঁটতে হয়, যা প্রোবের দূরত্ব O(M) পর্যন্ত বাড়ায়।'
        },
        explanation: {
          en: 'Even if only a few live keys remain, a high count of tombstones forces searches to walk through dozens of dead slots before finding EMPTY. When the effective load factor exceeds threshold (typically 0.70), compaction must purge tombstones to restore O(1) lookups.',
          bn: 'টেবিলে খুব অল্প সংখ্যক সক্রিয় চাবি থাকলেও অতিরিক্ত টুম্বস্টোন থাকলে একটি EMPTY স্লট পাওয়ার আগে বহু মৃত স্লট পার হতে হয়। কার্যকর লোড ফ্যাক্টর যখন নির্দিষ্ট সীমা (সাধারণত ০.৭০) অতিক্রম করে, তখন O(1) গতি ফিরে পেতে কম্প্যাকশন চালানো বাধ্যতামূলক।'
        }
      },
      {
        id: 'ta-q6',
        kind: 'mcq',
        topic: 'compaction',
        question: {
          en: 'How does backward-shift deletion (Knuth Algorithm 6.4R) eliminate the need for tombstones entirely?',
          bn: 'ব্যাকওয়ার্ড-শিফট ডিলিশন (ডোনাল্ড নুথ অ্যালগরিদম ৬.৪R) কীভাবে টুম্বস্টোনের প্রয়োজনীয়তা পুরোপুরি দূর করে?'
        },
        options: [
          {
            en: 'It encrypts the deleted keys with AES-256 so lookups skip them in hardware',
            bn: 'এটি মুছে ফেলা চাবিগুলোকে এইএস-২৫৬ দিয়ে এনক্রিপ্ট করে যাতে হার্ডওয়্যারে তাদের এড়ানো যায়'
          },
          {
            en: 'When a slot is deleted, subsequent elements in the cluster are inspected and shifted backward if their natural hash permits, closing the gap seamlessly',
            bn: 'কোনো স্লটের মান মুছে ফেলার পর ক্লাস্টারের পেছনের উপাদানগুলোকে সামনে খালি জায়গায় টেনে এনে ফাঁক পূরণ করা হয় যদি তাদের মূল হ্যাশ তা অনুমোদন করে'
          },
          {
            en: 'It doubles the table capacity immediately on every single deletion call',
            bn: 'প্রতিটি ডিলিশন কলের সাথে সাথে এটি টেবিলের ধারণক্ষমতা দ্বিগুণ করে দেয়'
          },
          {
            en: 'It replaces the array with an external binary search tree for all deleted keys',
            bn: 'মুছে ফেলা সমস্ত চাবির জন্য এটি অ্যারের বদলে একটি বাহ্যিক বাইনারি সার্চ ট্রি বসিয়ে দেয়'
          }
        ],
        answer: 1,
        hint: {
          en: 'Think of physically sliding items backward into the newly opened hole while respecting their original hash positions.',
          bn: 'নতুন তৈরি হওয়া ফাঁকা গর্তটিতে পেছনের উপাদানগুলোকে তাদের মূল হ্যাশ অবস্থানের শর্ত মেনে সামনে টেনে আনার কথা ভাবুন।'
        },
        explanation: {
          en: 'Backward-shift deletion scans downstream keys in the contiguous cluster. If an item can legally occupy the vacant slot (its ideal hash is at or before the empty slot), it is shifted backward into the gap. This leaves the cluster contiguous and terminates at EMPTY, eliminating tombstones entirely.',
          bn: 'ব্যাকওয়ার্ড-শিফট ডিলিশন ক্লাস্টারের সামনের দিকে নজর দেয়। পেছনের কোনো উপাদান যদি তার মূল হ্যাশের নিয়মানুসারে খালি স্থানটিতে বসতে পারে, তবে তাকে সামনে টেনে আনা হয়। এর ফলে কোনো টুম্বস্টোন ছাড়াই ক্লাস্টার সংলগ্ন থাকে এবং ফাঁকটি শেষে EMPTY দিয়ে পূর্ণ হয়।'
        }
      }
    ]
  },
  next: {
    slug: 'the-collision-engineering',
    title: {
      en: 'Collision Engineering: Quadratic Probing and Double Hashing Mechanics',
      bn: 'সংঘর্ষ প্রকৌশল: কোয়াড্রেটিক প্রোবিং এবং ডাবল হ্যাশিং কৌশল'
    }
  }
};
