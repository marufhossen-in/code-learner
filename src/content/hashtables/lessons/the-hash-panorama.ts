import type { Lesson } from '../../../lib/types';

export const theHashPanoramaLesson: Lesson = {
  slug: 'the-hash-panorama',
  tech: 'hash-tables',
  title: {
    en: 'The Hash Panorama: Swiss Tables, Robin Hood Hashing, and Architecture Selection',
    bn: 'হ্যাশ প্যানোরামা: সুইস টেবিল, রবিন হুড হ্যাশিং এবং আর্কিটেকচার নির্বাচন'
  },
  summary: {
    en: 'A definitive capstone analysis of modern hash table engineering and runtime architectures. We examine how hardware memory walls shifted hash table design from pointer-based separate chaining to cache-line-aware open addressing. We dissect Google Swiss Tables (Abseil flat_hash_map and Rust hashbrown), featuring 1-byte control metadata and 16-element SIMD vector probing that filters 99 percent of non-matching slots in a single CPU cycle. We analyze Robin Hood Hashing and its variance-equalizing Distance from Ideal Bucket (DIB) swap rule, enabling deterministic early-exit searches. Finally, we establish the grand architectural selection matrix comparing Java 8 HashMap, Python 3.6 compact dict, Go runtime map, Swiss Table, and Redis dict.c.',
    bn: 'আধুনিক হ্যাশ টেবিল ইঞ্জিনিয়ারিং এবং বিভিন্ন প্রোগ্রামিং ভাষার রানটাইম বাস্তবায়নের একটি পূর্ণাঙ্গ সমাপনী বিশ্লেষণ। মেমরি ওয়ালের মতো হার্ডওয়্যার সীমাবদ্ধতা কীভাবে হ্যাশ টেবিলের নকশাকে পয়েন্টার-ভিত্তিক চেইনিং থেকে ক্যাশ-লাইন-বান্ধব ওপেন অ্যাড্রেসিংয়ে বদলে দিয়েছে তা আমরা পরীক্ষা করেছি। গুগলের সুইস টেবিল (Abseil flat_hash_map এবং রাস্টের hashbrown) ব্যবচ্ছেদ করে দেখানো হয়েছে কীভাবে ১-বাইটের কন্ট্রোল মেটাডেটা এবং ১৬-উপাদানের SIMD ভেক্টর প্রোবিং মাত্র ১ টি সিপিইউ চক্রে ৯৯ শতাংশ অমিল স্লট বাদ দিতে পারে। এরপর রবিন হুড হ্যাশিং এবং এর বৈচিত্র্য-সমতাকরণ DIB অদলবদল নীতি বিশ্লেষণ করা হয়েছে, যা দ্রুত অনুসন্ধান সমাপ্তি নিশ্চিত করে। সবশেষে জাভা ৮ হ্যাশম্যাপ, পাইথন ৩.৬ কমপ্যাক্ট ডিকশনারি, গো রানটাইম ম্যাপ, সুইস টেবিল এবং রেডিসের তুলনামূলক আর্কিটেকচারাল সিলেকশন ম্যাট্রিক্স তৈরি করা হয়েছে।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'The Memory Wall and the Hardware-First Revolution',
        bn: 'মেমরি ওয়াল এবং হার্ডওয়্যার-কেন্দ্রিক বিপ্লব'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this capstone lesson, we survey the state of the art in modern hash table design. For decades, computer science curricula taught separate chaining as the default standard. However, modern CPU architectures transformed the performance landscape. While CPU register arithmetic executes in a fraction of a nanosecond, fetching a disconnected pointer from main RAM requires 50 to 200 clock cycles. This growing disparity is known as the Memory Wall. Modern systems achieve breakthrough throughput by packing metadata contiguously and utilizing SIMD (Single Instruction, Multiple Data) vector instructions to inspect multiple slots simultaneously.',
        bn: 'এই সমাপনী পাঠে আমরা আধুনিক হ্যাশ টেবিল নকশার অত্যাধুনিক কৌশলগুলো পর্যালোচনা করব। কয়েক দশক ধরে অ্যাকাডেমিক পাঠ্যসূচিতে সেপারেট চেইনিংকে আদর্শ মান হিসেবে শেখানো হতো। কিন্তু আধুনিক সিপিইউ আর্কিটেকচার পারফরম্যান্সের হিসাব সম্পূর্ণ বদলে দিয়েছে। সিপিইউ রেজিস্টারের গাণিতিক কাজ এক ন্যানোসেকেন্ডেরও কম সময়ে শেষ হলেও মূল র‍্যাম থেকে একটি বিচ্ছিন্ন পয়েন্টার আনতে ৫০ থেকে ২০০ ক্লক সাইকেল লেগে যায়। গতির এই বিশাল পার্থক্যকে মেমরি ওয়াল বলা হয়। আধুনিক সিস্টেমগুলো মেটাডেটাকে সংলগ্নভাবে সাজিয়ে এবং SIMD (সিঙ্গেল ইনস্ট্রাকশন, মাল্টিপল ডেটা) ভেক্টর নির্দেশনার মাধ্যমে একসাথে একাধিক স্লট পরীক্ষা করে যুগান্তকারী গতি অর্জন করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Swiss Table',
          def: {
            en: 'Google high-performance hash table architecture (used in Abseil and Rust hashbrown) utilizing an array of 1-byte control bytes and 16-element SIMD vector instructions to probe 16 slots concurrently in 1 cycle.',
            bn: 'গুগলের উচ্চ ক্ষমতাসম্পন্ন হ্যাশ টেবিল নকশা (যা Abseil এবং রাস্টের hashbrown-এ ব্যবহৃত) যা ১-বাইটের কন্ট্রোল মেটাডেটা এবং ১৬-উপাদানের SIMD ভেক্টর নির্দেশনা দিয়ে মাত্র ১ চক্রে একসাথে ১৬টি স্লট পরীক্ষা করে।'
          }
        },
        {
          term: 'control byte',
          def: {
            en: 'A 1-byte metadata tag per slot storing either a special state (EMPTY = 0x80, DELETED = 0xFE) or the upper 7 bits of the key hash (H2), enabling rapid vector matching without touching payload memory.',
            bn: 'প্রতি স্লটে থাকা ১-বাইটের মেটাডেটা যা বিশেষ অবস্থা (EMPTY = 0x80, DELETED = 0xFE) অথবা চাবির হ্যাশের উপরের ৭ বিট (H2) সংরক্ষণ করে, যার ফলে মূল মেমরি স্পর্শ না করেই দ্রুত ভেক্টর অনুসন্ধান সম্ভব হয়।'
          }
        },
        {
          term: 'Robin Hood Hashing',
          def: {
            en: 'An open addressing technique that steals slots from rich entries (small distance from ideal bucket) to give to poor entries (large distance), minimizing variance and capping maximum probe length.',
            bn: 'একটি ওপেন অ্যাড্রেসিং কৌশল যা ধনী উপাদান (আদর্শ বাকেটের কাছাকাছি থাকা) থেকে স্লট কেড়ে নিয়ে দরিদ্র উপাদানকে (অনেক দূরে চলে যাওয়া) প্রদান করে, ফলে দূরত্বের বৈষম্য কমে এবং সর্বোচ্চ প্রোব সংখ্যা সীমিত থাকে।'
          }
        },
        {
          term: 'DIB (Distance from Ideal Bucket)',
          def: {
            en: 'The number of probe steps an entry currently sits away from its initial hashed slot index, serving as the currency of displacement in Robin Hood hashing.',
            bn: 'একটি উপাদান তার মূল হ্যাশ ইনডেক্স থেকে বর্তমানে কত ধাপ দূরে বসে আছে তার পরিমাপ, যা রবিন হুড হ্যাশিংয়ে অদলবদলের মাপকাঠি হিসেবে ব্যবহৃত হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'swisstable',
      text: {
        en: 'Google Swiss Table: 1-Byte Metadata and 16-Way SIMD Probing',
        bn: 'গুগল সুইস টেবিল: ১-বাইট মেটাডেটা এবং ১৬-মুখী SIMD প্রোবিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Google Swiss Table architecture decouples slot metadata from payload data. Instead of storing large key-value objects in a single contiguous array, it maintains two parallel arrays: a lightweight ctrl byte array and a slots payload array. Each control byte is exactly 8 bits (1 byte). If a slot is empty, its byte is set to 0x80. If deleted, it is 0xFE. When occupied, it stores the top 7 bits of the key 64-bit hash code, called the H2 fingerprint (ranging from 0 to 127).',
        bn: 'গুগলের সুইস টেবিল আর্কিটেকচার স্লটের মেটাডেটাকে মূল ডেটা থেকে আলাদা রাখে। একটিমাত্র বিশাল অ্যারেতে চাবি ও মান রাখার বদলে এটি সমান্তরাল দুটি অ্যারে বজায় রাখে: একটি হালকা ctrl বাইট অ্যারে এবং অন্যটি slots পেলোড অ্যারে। প্রতিটি কন্ট্রোল বাইটের আকার ঠিক ৮ বিট (১ বাইট)। স্লট খালি থাকলে এতে 0x80 থাকে, ডিলিট হলে 0xFE থাকে। আর উপাদান থাকলে চাবির ৬৪-বিট হ্যাশের ওপরের ৭ বিট এতে সংরক্ষণ করা হয়, যাকে H2 ফিঙ্গারপ্রিন্ট বলা হয় (যার মান ০ থেকে ১২৭ এর মধ্যে থাকে)।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'During a lookup, the CPU executes an SSE2 or AVX2 SIMD instruction (such as _mm_cmpeq_epi8) that loads 16 control bytes into a 128-bit vector register simultaneously. It broadcasts the target key 7-bit H2 tag across all 16 lanes and performs a 16-way parallel equality comparison in a single clock cycle. This produces a 16-bit bitmask. If a bit is set, the CPU checks the corresponding key in the payload array. Because a 7-bit tag provides a 1 in 128 chance of false positive, over 99 percent of non-matching slots are discarded instantly without ever dereferencing payload memory!',
        bn: 'অনুসন্ধানের সময় সিপিইউ একটি SSE2 বা AVX2 ভেক্টর নির্দেশনা (_mm_cmpeq_epi8) চালায় যা একসাথে ১৬টি কন্ট্রোল বাইটকে ১২৮-বিট ভেক্টর রেজিস্টারে লোড করে। এটি কাঙ্ক্ষিত চাবির ৭-বিট H2 ট্যাগকে ১৬টি লেনে একযোগে তুলনা করে মাত্র ১টি ক্লক সাইকেলে ফলাফল দেয়। এটি ১৬-বিটের একটি বিটমাস্ক তৈরি করে। কোনো বিট মিলে গেলে কেবল তখনই সিপিইউ পেলোড অ্যারেতে গিয়ে মূল চাবি পরীক্ষা করে। যেহেতু ৭-বিট ট্যাগে কাকতালীয় মিলের সম্ভাবনা মাত্র ১২৮ ভাগে ১ ভাগ, তাই ৯৯ শতাংশেরও বেশি অমিল স্লট মূল মেমরি স্পর্শ না করেই তাৎক্ষণিকভাবে বাদ পড়ে যায়!'
      }
    },
    {
      type: 'heading',
      id: 'robinhood',
      text: {
        en: 'Robin Hood Hashing: Equalizing Variance and Early-Exit Lookups',
        bn: 'রবিন হুড হ্যাশিং: বৈচিত্র্য সমতাকরণ এবং দ্রুত অনুসন্ধান সমাপ্তি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Robin Hood hashing addresses the severe tail latency problem in standard linear probing. In linear probing, an unlucky key inserted late might suffer a probe length of 25 steps while lucky keys enjoy 1 step. Robin Hood hashing enforces fairness through the DIB rule: Distance from Ideal Bucket. Each element tracks how far it has probed from its natural hash slot.',
        bn: 'রবিন হুড হ্যাশিং লিনিয়ার প্রোবিংয়ের চরম টেইল লেটেন্সি সমস্যার সমাধান করে। সাধারণ লিনিয়ার প্রোবিংয়ে পরে আসা কোনো দুর্ভাগ্যবান চাবিকে ২৫ ধাপ পর্যন্ত হাঁটতে হতে পারে, যেখানে ভাগ্যবান চাবি মাত্র ১ ধাপে জায়গা পায়। রবিন হুড হ্যাশিং DIB (আদর্শ বাকেট থেকে দূরত্ব) নীতির মাধ্যমে সমতা প্রতিষ্ঠা করে। প্রতিটি উপাদান তার মূল হ্যাশ স্লট থেকে কত ধাপ দূরে বসেছে তা মনে রাখে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When inserting a key, if the incoming element has a larger DIB than the element currently occupying the slot (meaning incoming is poorer), the incoming element steals the slot! The existing occupant is evicted and continues probing forward with an incremented DIB. This mechanism equalizes probe lengths across all keys, dramatically shrinking the standard deviation. Furthermore, it introduces an early-exit search invariant. If a search probe counter exceeds the DIB stored in the slot, the key cannot exist in the table, terminating the lookup immediately.',
        bn: 'নতুন কোনো চাবি ঢোকানোর সময় যদি দেখা যায় তার DIB বর্তমান দখলদারের চেয়ে বেশি (অর্থাৎ নতুন চাবিটি বেশি পথ হেঁটে এসেছে), তবে নতুন চাবিটি সেই স্লট দখল করে নেয়! পুরানো দখলদারকে সেখান থেকে তাড়িয়ে দেওয়া হয় এবং সে তার DIB এক বাড়িয়ে সামনের স্লটগুলোর দিকে যাত্রা করে। এই প্রক্রিয়া সব চাবির মধ্যে দূরত্বের পার্থক্য কমিয়ে আনে। এর পাশাপাশি এটি অনুসন্ধানে একটি চমৎকার নিয়ম যোগ করে। অনুসন্ধানের ধাপ সংখ্যা যদি পরিদর্শিত স্লটের DIB কে ছাড়িয়ে যায়, তবে নিশ্চিত হওয়া যায় চাবিটি টেবিলে নেই, ফলে অনুসন্ধান তৎক্ষণাৎ শেষ করা যায়।'
      }
    },
    {
      type: 'heading',
      id: 'code',
      text: {
        en: 'Empirical Verification: Swiss Table Control Byte Vector Filter Simulation',
        bn: 'বাস্তব যাচাই: সুইস টেবিল কন্ট্রোল বাইট ভেক্টর ফিল্টার সিমুলেশন'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      code: `// Simulation of Google Swiss Table 1-byte control metadata and 16-slot SIMD filtering
const EMPTY = 0x80; // 1000 0000 binary
const DELETED = 0xFE;

class SwissTableSim<K, V> {
  ctrl: Uint8Array;
  slots: ({ key: K; val: V } | null)[];
  capacity: number;

  constructor(groupCount = 2) {
    this.capacity = groupCount * 16;
    this.ctrl = new Uint8Array(this.capacity).fill(EMPTY);
    this.slots = new Array(this.capacity).fill(null);
  }

  h1(hash: number): number { return hash % this.capacity; }
  h2(hash: number): number { return (hash >>> 25) & 0x7F; } // 7-bit fingerprint (0..127)

  hashKey(key: string): number {
    let h = 0;
    for (let i = 0; i < key.length; i++) {
      h = (h * 31 + key.charCodeAt(i)) >>> 0;
    }
    return h;
  }

  insert(key: string, val: V): number {
    const h = this.hashKey(key);
    const tag = this.h2(h);
    const startGroup = Math.floor(this.h1(h) / 16);

    for (let g = 0; g < this.capacity / 16; g++) {
      const base = ((startGroup + g) % (this.capacity / 16)) * 16;

      for (let i = 0; i < 16; i++) {
        const slot = base + i;
        if (this.ctrl[slot] === EMPTY || this.ctrl[slot] === DELETED) {
          this.ctrl[slot] = tag;
          this.slots[slot] = { key: key as unknown as K, val };
          return slot;
        }
      }
    }
    throw new Error('Table full');
  }

  search(key: string): { found: boolean; payloadFetches: number; slot?: number } {
    const h = this.hashKey(key);
    const targetTag = this.h2(h);
    const startGroup = Math.floor(this.h1(h) / 16);
    let payloadFetches = 0;

    for (let g = 0; g < this.capacity / 16; g++) {
      const base = ((startGroup + g) % (this.capacity / 16)) * 16;

      // Emulate 16-way SIMD equality check: _mm_cmpeq_epi8
      const matches: number[] = [];
      for (let i = 0; i < 16; i++) {
        if (this.ctrl[base + i] === targetTag) matches.push(base + i);
      }

      // Dereference payload ONLY for candidate matches
      for (const candidate of matches) {
        payloadFetches++;
        if (this.slots[candidate]?.key === (key as unknown as K)) {
          return { found: true, payloadFetches, slot: candidate };
        }
      }

      // If group has EMPTY slot, probe chain terminates
      for (let i = 0; i < 16; i++) {
        if (this.ctrl[base + i] === EMPTY) {
          return { found: false, payloadFetches };
        }
      }
    }
    return { found: false, payloadFetches };
  }
}

// Verification trace
const table = new SwissTableSim<string, number>(2); // 32 slots (2 groups of 16)
table.insert('alpha', 10);
table.insert('beta', 20);
table.insert('gamma', 30);
table.insert('delta', 40);

const searchDelta = table.search('delta');
console.log('Search existing delta:', searchDelta);
// Search existing delta: { found: true, payloadFetches: 2, slot: 18 }

const searchMissing = table.search('omega');
console.log('Search missing omega:', searchMissing);
// Search missing omega: { found: false, payloadFetches: 0 }
// SIMD 16-way filter rejected all slots without dereferencing payload memory even once!`,
      caption: {
        en: 'Swiss Table SIMD control byte filter execution trace: verifying zero payload memory fetches on non-matching searches in a 32-slot table.',
        bn: 'সুইস টেবিল SIMD কন্ট্রোল বাইট ভেক্টর ফিল্টারের বাস্তব প্রমাণ: ৩২ স্লটের টেবিলে অমিল অনুসন্ধানের সময় পেলোড মেমরি স্পর্শ না করেই শূন্য খরচে অনুসন্ধান সমাপ্তি।'
      }
    },
    {
      type: 'heading',
      id: 'matrix',
    },
    {
      type: 'visual',
      id: 'ht'
    },
    {
      type: 'heading',
      id: 'matrix-table',
      text: {
        en: 'The Grand Architectural Selection Matrix',
        bn: 'প্রধান আর্কিটেকচারাল সিলেকশন ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Runtime Engine', bn: 'রানটাইম ইঞ্জিন' },
        { en: 'Primary Technique', bn: 'মূল প্রযুক্তি' },
        { en: 'Max Load Factor', bn: 'সর্বোচ্চ লোড ফ্যাক্টর' },
        { en: 'Cache Locality', bn: 'ক্যাশ লোকালিটি' },
        { en: 'Key Defense / Specialty', bn: 'প্রধান প্রতিরক্ষা / বৈশিষ্ট্য' }
      ],
      rows: [
        [
          { en: 'Java 8 HashMap', bn: 'জাভা ৮ হ্যাশম্যাপ' },
          { en: 'Separate Chaining with Treeification', bn: 'সেপারেট চেইনিং ও ট্রিরূপীকরণ' },
          { en: '0.75 (doubles at threshold)', bn: '০.৭৫ (সীমা স্পর্শে দ্বিগুণ)' },
          { en: 'Poor (heap pointer chasing stalls)', bn: 'দুর্বল (হিপ মেমরিতে পয়েন্টার চেজিং)' },
          { en: 'Converts lists to Red-Black trees at depth 8 against HashDOS', bn: 'হ্যাশডস ঠেকাতে ৮ গভীরতায় রেড-ব্ল্যাক ট্রিতে রূপান্তর' }
        ],
        [
          { en: 'Python 3.6+ dict', bn: 'পাইথন ৩.৬+ ডিকশনারি' },
          { en: 'Compact Array + Sparse Indices', bn: 'কমপ্যাক্ট অ্যারে ও স্পার্স ইনডেক্স' },
          { en: '0.66 (resizes at 2/3 full)', bn: '০.৬৬ (দুই-তৃতীয়াংশ পূর্ণে রিসাইজ)' },
          { en: 'High (dense key-value array)', bn: 'উচ্চ (ঘন সন্নিবেশিত চাবি-মান অ্যারে)' },
          { en: 'Guarantees deterministic insertion order with 30% less RAM', bn: '৩০% কম মেমরিতে সন্নিবেশের ক্রম বজায় রাখা নিশ্চিত করে' }
        ],
        [
          { en: 'Go runtime map', bn: 'গো রানটাইম ম্যাপ' },
          { en: '8-Slot Buckets with tophash Filtering', bn: '৮-স্লটের বাকেট ও টপহ্যাশ ফিল্টারিং' },
          { en: '6.5 elements per bucket (~0.81)', bn: 'প্রতি বাকেটে ৬.৫ উপাদান (~০.৮১)' },
          { en: 'Good (8 entries fit in cache line)', bn: 'ভালো (৮টি উপাদান একটি ক্যাশ লাইনে ধরে)' },
          { en: '1-byte tophash SIMD-like filter and incremental evacuation', bn: '১-বাইটের টপহ্যাশ ফিল্টার এবং ক্রমান্বয়ে স্থানান্তর' }
        ],
        [
          { en: 'Google Swiss Table / Rust', bn: 'গুগল সুইস টেবিল / রাস্ট' },
          { en: 'Flat Open Addressing + 16-way SIMD', bn: 'ফ্ল্যাট ওপেন অ্যাড্রেসিং ও ১৬-মুখী SIMD' },
          { en: '0.875 (87.5% capacity)', bn: '০.৮৭৫ (৮৭.৫% ধারণক্ষমতা)' },
          { en: 'Optimal (1-byte metadata in L1)', bn: 'সেরা (১-বাইটের মেটাডেটা L1 ক্যাশে)' },
          { en: 'SSE2 vector filtering rejects 99% of mismatches in 1 cycle', bn: 'SSE2 ভেক্টর ফিল্টারিং ১ চক্রে ৯৯% অমিল বাদ দেয়' }
        ],
        [
          { en: 'Redis dict.c', bn: 'রেডিস dict.c' },
          { en: 'Dual-Table Incremental Rehashing', bn: 'ডুয়াল-টেবিল ইনক্রিমেন্টাল রিহ্যাশিং' },
          { en: '1.0 (resizes at 100% occupancy)', bn: '১.০ (১০০% দখলে রিসাইজ)' },
          { en: 'Poor (heap node allocation)', bn: 'দুর্বল (হিপ নোড বরাদ্দ)' },
          { en: 'Zero stop-the-world pauses: per-query bucket migration', bn: 'জিরো স্টপ-দ্য-ওয়ার্ল্ড বিরতি: প্রতি কুয়েরিতে বাকেট স্থানান্তর' }
        ]
      ]
    }
  ],
  exercises: [
    {
      id: 'hp-ex1',
      kind: 'mcq',
      topic: 'extracting 7-bit H2 fingerprints',
      question: {
        en: 'In Google Swiss Tables, how is the 7-bit H2 fingerprint tag extracted from a 32-bit hash code?',
        bn: 'গুগল সুইস টেবিলে একটি ৩২-বিট হ্যাশ কোড থেকে কীভাবে ৭-বিট H2 ফিঙ্গারপ্রিন্ট ট্যাগ নিষ্কাশন করা হয়?'
      },
      options: [
        {
          en: 'By right-shifting the hash code by 25 bits and masking with 0x7F: (hash >>> 25) & 0x7F',
          bn: 'হ্যাশ কোডকে ২৫ বিট ডানে সরিয়ে 0x7F দিয়ে মাস্ক করে: (hash >>> ২৫) & 0x7F'
        },
        {
          en: 'By multiplying the hash code by 31 and taking modulo 128',
          bn: 'হ্যাশ কোডকে ৩১ দিয়ে গুণ করে ১২৮ দিয়ে মডিউলো করে'
        },
        {
          en: 'By converting the string to base64 and taking the first byte',
          bn: 'স্ট্রিংকে বেস৬৪ এ রূপান্তর করে প্রথম বাইট নিয়ে'
        },
        {
          en: 'By running AES-128 encryption on the key pointer',
          bn: 'কী পয়েন্টারের ওপর এইএস-১২৮ এনক্রিপশন চালিয়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A 32-bit integer shifted right by 25 leaves the top 7 bits in positions 0 through 6.',
        bn: 'একটি ৩২-বিট পূর্ণসংখ্যাকে ২৫ বিট ডানে সরালে ওপরের ৭টি বিট ০ থেকে ৬ অবস্থানে চলে আসে।'
      },
      explanation: {
        en: 'Right-shifting 32 bits by 25 isolates the 7 most significant bits. Masking with 127 in decimal ensures the result fits into a 7-bit fingerprint, stored in the 1-byte control tag.',
        bn: '৩২ বিটকে ২৫ বিট ডানে সরালে সবচেয়ে গুরুত্বপূর্ণ ৭টি বিট আলাদা হয়। দশমিক ১২৭ মান দিয়ে মাস্ক করলে ফলাফলটি ৭-বিট ফিঙ্গারপ্রিন্টে পরিণত হয়, যা ১-বাইটের কন্ট্রোল ট্যাগে সংরক্ষিত থাকে।'
      }
    },
    {
      id: 'hp-ex2',
      kind: 'mcq',
      topic: 'SIMD 16-way vector comparison',
      question: {
        en: 'What is the false positive probability when testing a key against a single 7-bit H2 control tag in a Swiss Table?',
        bn: 'সুইস টেবিলে একটি একক ৭-বিট H2 কন্ট্রোল ট্যাগের বিরুদ্ধে চাবি পরীক্ষার সময় ফলস পজিটিভ কাকতালীয় মিলের সম্ভাবনা কত?'
      },
      options: [
        {
          en: '1 in 128 (less than 1 percent), ensuring over 99 percent of non-matching slots are discarded without dereferencing payload memory',
          bn: '১২৮ ভাগে ১ ভাগ (১ শতাংশেরও কম), যা নিশ্চিত করে ৯৯ শতাংশের বেশি অমিল স্লট পেলোড মেমরি স্পর্শ না করেই বাদ পড়ে যায়'
        },
        {
          en: '50 percent, requiring payload checks on half of all slots',
          bn: '৫০ শতাংশ, যার ফলে অর্ধেক স্লটেই মেমরি পরীক্ষা করতে হয়'
        },
        {
          en: 'Exactly 0 percent because hash collisions are mathematically impossible',
          bn: 'ঠিক ০ শতাংশ কারণ হ্যাশ সংঘর্ষ গাণিতিকভাবে অসম্ভব'
        },
        {
          en: '100 percent because control bytes do not store key characters',
          bn: '১০০ শতাংশ কারণ কন্ট্রোল বাইট কোনো অক্ষরের ডেটা রাখে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'A 7-bit integer can represent 2^7 = 128 distinct values.',
        bn: 'একটি ৭-বিট পূর্ণসংখ্যা ২^৭ = ১২৮ টি ভিন্ন মান প্রকাশ করতে পারে।'
      },
      explanation: {
        en: 'With 128 possible values (2^7), the probability of a random hash collision on the 7-bit tag is 1/128 (~0.78%). This allows SIMD vector filtering to eliminate 99.2% of candidate slots before touching main memory.',
        bn: '১২৮ টি সম্ভাব্য মানের (২^৭) কারণে ৭-বিট ট্যাগে কাকতালীয় সংঘর্ষের সম্ভাবনা মাত্র ১/১২৮ (~০.৭৮%)। এটি মূল মেমরি না ছুঁয়েই ৯৯.২% স্লটকে তাৎক্ষণিকভাবে বাদ দিতে সাহায্য করে।'
      }
    },
    {
      id: 'hp-ex3',
      kind: 'mcq',
      topic: 'Robin Hood early exit invariant',
      question: {
        en: 'In Robin Hood hashing, what invariant allows an unsuccessful search to terminate early without inspecting empty slots?',
        bn: 'রবিন হুড হ্যাশিংয়ে কোন নিয়মের কারণে ব্যর্থ অনুসন্ধান খালি স্লট না পেয়েও আগেই শেষ হতে পারে?'
      },
      options: [
        {
          en: 'When the current search probe distance strictly exceeds the DIB stored in the inspected slot (probe > slot.DIB), the key cannot exist further down the table',
          bn: 'বর্তমান অনুসন্ধানের দূরত্ব পরিদর্শিত স্লটের DIB এর চেয়ে বেশি হলে (probe > slot.DIB), চাবিটি টেবিলের আর সামনে থাকা অসম্ভব'
        },
        {
          en: 'When the hash function produces a negative value',
          bn: 'যখন হ্যাশ ফাংশন একটি ঋণাত্মক মান প্রদান করে'
        },
        {
          en: 'When the table load factor drops below 0.25',
          bn: 'যখন টেবিল লোড ফ্যাক্টর ০.২৫ এর নিচে নেমে যায়'
        },
        {
          en: 'When the operating system sends a SIGTERM interrupt',
          bn: 'যখন অপারেটিং সিস্টেম একটি সিগটার্ম ইন্টারাপ্ট পাঠায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Recall that Robin Hood sorts elements by non-decreasing DIB along collision probe sequences.',
        bn: 'মনে রাখবেন রবিন হুড সংঘর্ষের পথে উপাদানগুলোকে DIB এর ঊর্ধ্বক্রমে সাজিয়ে রাখে।'
      },
      explanation: {
        en: 'Because elements are ordered by probe distance along probe chains, if our search has traveled farther than the element currently sitting in the slot, our key would have stolen this slot upon insertion. Its absence here proves it is not in the table.',
        bn: 'যেহেতু উপাদানগুলো দূরত্বের ক্রমানুসারে সাজানো থাকে, তাই আমাদের অনুসন্ধান যদি স্লটের উপাদানের চেয়ে বেশি দূর হেঁটে এসে থাকে, তবে সন্নিবেশের সময় আমাদের চাবিটিই এই স্লট দখল করত। এখানে না পাওয়ার অর্থ এটি টেবিলে কখনোই ঢোকানো হয়নি।'
      }
    },
    {
      id: 'hp-ex4',
      kind: 'mcq',
      topic: 'Python compact dict memory layout',
      question: {
        en: 'How does Python 3.6+ compact dict architecture achieve a 30 percent memory reduction compared to legacy hash tables?',
        bn: 'পাইথন ৩.৬+ কমপ্যাক্ট ডিকশনারি আর্কিটেকচার আগের হ্যাশ টেবিলের তুলনায় কীভাবে ৩০ শতাংশ মেমরি সাশ্রয় করে?'
      },
      options: [
        {
          en: 'By using a sparse array of small 1-byte or 2-byte integer indices that point into a dense, sequentially packed array of (hash, key, value) entries',
          bn: 'ছোট ১ বা ২ বাইটের ইনডেক্স বিশিষ্ট একটি হালকা স্পার্স অ্যারে ব্যবহার করে যা ধারাবাহিকভাবে সাজানো ঘন (hash, key, value) পেলোড অ্যারের দিকে নির্দেশ করে'
        },
        {
          en: 'By discarding values and retaining only keys in memory',
          bn: 'মান সংরক্ষণ বাদ দিয়ে কেবল চাবিগুলো মেমরিতে রেখে'
        },
        {
          en: 'By compressing strings using zlib before every dictionary lookup',
          bn: 'প্রতিটি লুকআপের আগে জিলিব দিয়ে স্ট্রিং সংকুচিত করে'
        },
        {
          en: 'By limiting dictionary capacity to at most 64 keys',
          bn: 'ডিকশনারির সর্বোচ্চ ধারণক্ষমতা ৬৪ টি চাবিতে সীমাবদ্ধ রেখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sparse empty slots only hold 1-byte integers instead of 24-byte full entry structs.',
        bn: 'স্পার্স টেবিলের খালি স্লটগুলোতে ২৪-বাইটের বড় কাঠামোর বদলে মাত্র ১-বাইটের ছোট সংখ্যা থাকে।'
      },
      explanation: {
        en: 'Legacy tables stored 24-byte entry structs directly inside the sparse table, wasting 24 bytes per empty slot. The compact design keeps entries in a dense array (saving 30% RAM and preserving insertion order) while the sparse collision table uses tiny 1-byte or 2-byte indices.',
        bn: 'আগের টেবিলে সরাসরি স্পার্স অ্যারেতে ২৪-বাইটের এন্ট্রি রাখা হতো, ফলে প্রতি খালি স্লটে ২৪ বাইট নষ্ট হতো। কমপ্যাক্ট ডিজাইনে ঘন অ্যারেতে ডেটা রাখা হয় (৩০% মেমরি বাঁচে এবং ক্রম ঠিক থাকে) এবং স্পার্স টেবিলে কেবল ১ বা ২ বাইটের ছোট ইনডেক্স ব্যবহার করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'hash-panorama-quiz',
    title: {
      en: 'Modern Hash Architecture and Systems Mastery Quiz',
      bn: 'আধুনিক হ্যাশ আর্কিটেকচার এবং সিস্টেম দক্ষতা কুইজ'
    },
    questions: [
      {
        id: 'hp-q1',
        kind: 'mcq',
        topic: 'hardware',
        question: {
          en: 'Why did high-performance runtimes migrate away from separate chaining toward flat open addressing designs like Swiss Tables?',
          bn: 'উচ্চ ক্ষমতাসম্পন্ন সিস্টেমগুলো সেপারেট চেইনিং ছেড়ে কেন সুইস টেবিলের মতো ফ্ল্যাট ওপেন অ্যাড্রেসিংয়ে চলে এসেছে?'
        },
        options: [
          {
            en: 'The Memory Wall: CPU cache line fetches take ~1-4 cycles, while dereferencing linked heap pointers stalls execution for 50 to 200 cycles',
            bn: 'মেমরি ওয়াল: সিপিইউ ক্যাশ লাইন থেকে ডেটা পড়তে ১-৪ সাইকেল লাগে, যেখানে হিপ মেমরির পয়েন্টার খুঁজতে ৫০ থেকে ২০০ ক্লক সাইকেল অপচয় হয়'
          },
          {
            en: 'Modern operating systems completely banned the use of linked lists in user space',
            bn: 'আধুনিক অপারেটিং সিস্টেম ইউজার স্পেসে লিঙ্কড লিস্টের ব্যবহার সম্পূর্ণ নিষিদ্ধ করেছে'
          },
          {
            en: '64-bit processors cannot calculate modulo operations for linked lists',
            bn: '৬৪-বিট প্রসেসর লিঙ্কড লিস্টের জন্য মডিউলো অপারেশন সম্পন্ন করতে পারে না'
          },
          {
            en: 'Separate chaining requires twice as many GPU cores to execute',
            bn: 'সেপারেট চেইনিং চালাতে জিপিইউ কোরের সংখ্যা দ্বিগুণ লাগে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about the difference in latency between L1/L2 cache hits and main RAM memory fetches.',
          bn: 'L1/L2 ক্যাশ হিট এবং মূল র‍্যাম থেকে ডেটা আনার সময়ের পার্থক্যের কথা ভাবুন।'
        },
        explanation: {
          en: 'Pointer chasing across heap memory causes CPU pipeline stalls of 50-200 cycles per node. Flat table layouts pack data into contiguous memory, maximizing 64-byte CPU cache line prefetching and enabling SIMD parallelism.',
          bn: 'হিপ মেমরিতে পয়েন্টার তাড়া করতে গিয়ে প্রতি নোডে সিপিইউ পাইপলাইনে ৫০-২০০ সাইকেল অলস সময় নষ্ট হয়। ফ্ল্যাট টেবিল ডেটাকে সংলগ্ন মেমরিতে রাখে, যা ৬৪-বাইটের ক্যাশ লাইন এবং SIMD ভেক্টরের পূর্ণ সুবিধা দেয়।'
        }
      },
      {
        id: 'hp-q2',
        kind: 'mcq',
        topic: 'swisstable',
        question: {
          en: 'How does Google Swiss Table utilize 1-byte control metadata to accelerate search?',
          bn: 'গুগল সুইস টেবিল কীভাবে ১-বাইটের কন্ট্রোল মেটাডেটা ব্যবহার করে অনুসন্ধানের গতি বাড়ায়?'
        },
        options: [
          {
            en: 'It stores a 7-bit H2 fingerprint per slot, allowing 16-way SIMD instructions to filter out over 99 percent of non-matching slots in 1 CPU cycle without touching payload memory',
            bn: 'এটি প্রতি স্লটে ৭-বাইটের বদলে ৭-বিট H2 ফিঙ্গারপ্রিন্ট রাখে, যার ফলে ১৬-মুখী SIMD নির্দেশনা মূল মেমরি না ছুঁয়েই মাত্র ১ সাইকেলে ৯৯ শতাংশ অমিল স্লট বাদ দিতে পারে'
          },
          {
            en: 'It compresses entire strings into a single byte using LZW compression',
            bn: 'এটি এলজেডব্লিউ কম্প্রেশন দিয়ে সম্পূর্ণ স্ট্রিংকে এক বাইটে সংকুচিত করে ফেলে'
          },
          {
            en: 'It replaces the hash table with a distributed blockchain ledger',
            bn: 'এটি হ্যাশ টেবিলের জায়গায় একটি ডিস্ট্রিবিউটেড ব্লকচেইন লেজার বসিয়ে দেয়'
          },
          {
            en: 'It encrypts the slots to prevent operating system access',
            bn: 'অপারেটিং সিস্টেম যাতে দেখতে না পারে সেজন্য এটি স্লটগুলোকে এনক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider the SSE2 instruction _mm_cmpeq_epi8 operating across a 128-bit vector register.',
          bn: '১২৮-বিট ভেক্টর রেজিস্টারে SSE2 নির্দেশনা _mm_cmpeq_epi8 কীভাবে কাজ করে তা বিবেচনা করুন।'
        },
        explanation: {
          en: 'By packing sixteen 1-byte tags into a 128-bit SIMD register, a single vector equality instruction tests 16 slots concurrently. Because false positive probability is only 1/128, payload memory is almost never touched for absent keys.',
          bn: '১৬টি ১-বাইটের ট্যাগকে একটি ১২৮-বিট ভেক্টর রেজিস্টারে ভরে একটিমাত্র নির্দেশনায় ১৬টি স্লট একসাথে পরীক্ষা করা যায়। কাকতালীয় মিলের সম্ভাবনা মাত্র ১২৮ ভাগে ১ ভাগ হওয়ায় অমিল চাবির জন্য পেলোড মেমরি স্পর্শই করতে হয় না।'
        }
      },
      {
        id: 'hp-q3',
        kind: 'mcq',
        topic: 'robinhood',
        question: {
          en: 'What is the Robin Hood swap rule during table insertion?',
          bn: 'টেবিলে ডেটা সন্নিবেশের সময় রবিন হুড সোয়াপ বা অদলবদল নিয়মটি কী?'
        },
        options: [
          {
            en: 'If the incoming key has traveled farther from its ideal bucket than the slot occupant (DIB_incoming > DIB_occupant), the incoming key steals the slot and the occupant is evicted',
            bn: 'নতুন চাবিটি যদি বর্তমান দখলদারের চেয়ে তার আদর্শ বাকেট থেকে বেশি পথ হেঁটে আসে (DIB_incoming > DIB_occupant), তবে নতুন চাবিটি স্লট দখল করে এবং দখলদারকে তাড়িয়ে দেওয়া হয়'
          },
          {
            en: 'Keys with odd hash codes are deleted to make room for even keys',
            bn: 'বিজোড় হ্যাশ কোডের চাবিগুলো মুছে ফেলে জোড় চাবিগুলোর জন্য জায়গা করা হয়'
          },
          {
            en: 'The table capacity is cut in half whenever a collision occurs',
            bn: 'সংঘর্ষ দেখা দিলেই টেবিলের ধারণক্ষমতা সাথে সাথে অর্ধেকে নামিয়ে আনা হয়'
          },
          {
            en: 'All keys are encrypted with SHA-256 before being swapped',
            bn: 'অদলবদল করার আগে সমস্ত চাবিকে এসএইচএ-২৫৬ দিয়ে এনক্রিপ্ট করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of "stealing from the rich" (low DIB) and "giving to the poor" (high DIB).',
          bn: 'ধনী (কম DIB) থেকে কেড়ে নিয়ে দরিদ্রকে (বেশি DIB) দেওয়ার ধারণার কথা ভাবুন।'
        },
        explanation: {
          en: 'By displacing occupants with smaller DIB values, Robin Hood hashing ensures no single element suffers an excessively long probe run. This drastically reduces probe length variance and bounds worst-case lookups.',
          bn: 'কম DIB এর উপাদানকে সরিয়ে দেওয়ার মাধ্যমে রবিন হুড হ্যাশিং নিশ্চিত করে যে কোনো একটিমাত্র চাবি অতিরিক্ত দীর্ঘ পথে আটকা না পড়ে। এটি দূরত্বের বৈষম্য কমিয়ে সবচেয়ে খারাপ অনুসন্ধানের সময়কেও সীমিত রাখে।'
        }
      },
      {
        id: 'hp-q4',
        kind: 'mcq',
        topic: 'robinhood',
        question: {
          en: 'How does Robin Hood hashing enable early-exit termination on unsuccessful searches?',
          bn: 'রবিন হুড হ্যাশিং কীভাবে ব্যর্থ অনুসন্ধানে খালি স্লট পাওয়ার আগেই দ্রুত সমাপ্তি নিশ্চিত করে?'
        },
        options: [
          {
            en: 'If the search probe count exceeds the DIB stored in the inspected slot, the key cannot be further down the table and search stops immediately',
            bn: 'অনুসন্ধানের বর্তমান ধাপ সংখ্যা যদি পরিদর্শিত স্লটের DIB এর চেয়ে বেশি হয়, তবে চাবিটি এর পরে থাকা অসম্ভব এবং অনুসন্ধান তৎক্ষণাৎ থেমে যায়'
          },
          {
            en: 'By guessing the key value using machine learning neural weights',
            bn: 'মেশিন লার্নিং নিউরাল ওয়েট ব্যবহার করে চাবির মান অনুমান করার মাধ্যমে'
          },
          {
            en: 'By restarting the search from the last slot in the array',
            bn: 'অ্যারের শেষ স্লট থেকে অনুসন্ধান পুনরায় শুরু করার মাধ্যমে'
          },
          {
            en: 'By raising an unhandled kernel exception to kill the thread',
            bn: 'থ্রেড বন্ধ করতে একটি হ্যান্ডেল না করা কার্নেল এক্সেপশন তৈরি করার মাধ্যমে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If the target key were present beyond this slot, could its DIB have been smaller than the occupant you just inspected?',
          bn: 'কাঙ্ক্ষিত চাবিটি যদি সত্যিই পরে থাকত, তবে তার DIB কি আপনার দেখা দখলদারের চেয়ে ছোট হতে পারত?'
        },
        explanation: {
          en: 'Because elements are ordered by non-decreasing DIB along collision sequences, encountering a slot whose DIB is strictly less than our current probe distance proves our key was never inserted past this position.',
          bn: 'যেহেতু উপাদানগুলো DIB এর ঊর্ধ্বক্রমে সাজানো থাকে, তাই স্লটের DIB যদি আমাদের বর্তমান ধাপের চেয়ে কম হয়, তবে প্রমাণিত হয় যে আমাদের চাবিটি টেবিলে কখনোই ঢোকানো হয়নি। ফলে তৎক্ষণাৎ অনুসন্ধান থামানো যায়।'
        }
      },
      {
        id: 'hp-q5',
        kind: 'mcq',
        topic: 'python-dict',
        question: {
          en: 'What architectural innovation in Python 3.6+ compact dict reduced memory usage by 30 percent while preserving insertion order?',
          bn: 'পাইথন ৩.৬+ কমপ্যাক্ট ডিকশনারির কোন উদ্ভাবন মেমরির ব্যবহার ৩০ শতাংশ কমিয়ে সন্নিবেশের ক্রম বজায় রাখা নিশ্চিত করেছে?'
        },
        options: [
          {
            en: 'Splitting storage into a sparse integer index array pointing into a dense, sequentially appended array of (hash, key, value) entries',
            bn: 'মেমরিকে দুটি ভাগে ভাগ করা: একটি হালকা পূর্ণসংখ্যার স্পার্স ইনডেক্স অ্যারে যা ধারাবাহিকভাবে সাজানো ঘন (hash, key, value) অ্যারের দিকে নির্দেশ করে'
          },
          {
            en: 'Using gzip compression on all dictionary keys in memory',
            bn: 'মেমরির সমস্ত ডিকশনারি চাবিকে জিজিপ দিয়ে সংকুচিত করা'
          },
          {
            en: 'Removing value storage completely and storing only keys',
            bn: 'মান সংরক্ষণ সম্পূর্ণ বাদ দিয়ে কেবল চাবি সংরক্ষণ করা'
          },
          {
            en: 'Enforcing that all keys must be integers between 0 and 255',
            bn: 'সমস্ত চাবিকে ০ থেকে ২৫৫ এর মধ্যকার পূর্ণসংখ্যা হওয়া বাধ্যতামূলক করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about separating the sparse collision table (small integers) from the dense payload storage.',
          bn: 'হালকা ইনডেক্স টেবিলকে মূল ভারী পেলোড মেমরি থেকে আলাদা করার কথা ভাবুন।'
        },
        explanation: {
          en: 'Traditional dicts kept 24-byte entries directly in the sparse hash table, wasting massive RAM on empty slots. In modern versions, key-value pairs are appended contiguously inside a dense array, while a separate lightweight index vector tracks collision offsets with 1-byte or 2-byte integers.',
          bn: 'আগের ডিকশনারিগুলো সরাসরি স্পার্স টেবিলে ২৪-বাইটের বড় নোড রাখত, ফলে খালি স্লটগুলোতে প্রচুর মেমরি নষ্ট হতো। আধুনিক সংস্করণে মূল উপাত্তগুলো ধারাবাহিকভাবে একটি ঘন অ্যারেতে জমা হয়, আর হালকা স্পার্স ভেক্টর ১ বা ২ বাইটের ইনডেক্স ব্যবহার করে সংঘর্ষ পরিচালনা করে।'
        }
      },
      {
        id: 'hp-q6',
        kind: 'mcq',
        topic: 'selection',
        question: {
          en: 'Under which workload requirement is Java 8 HashMap treeification superior to flat Swiss Tables?',
          bn: 'কোন ধরনের কাজের চাহিদায় জাভা ৮ হ্যাশম্যাপের ট্রিরূপীকরণ ফ্ল্যাট সুইস টেবিলের চেয়ে বেশি সুবিধাজনক?'
        },
        options: [
          {
            en: 'Adversarial denial-of-service attack environments with malicious colliding keys that implement Comparable, guaranteeing O(log N) worst-case search',
            bn: 'হ্যাশডস আক্রমণপ্রবণ পরিবেশ যেখানে ক্ষতিকর সংঘর্ষ তৈরি করা চাবিগুলো Comparable ইন্টারফেস সমর্থন করে, যা ওর্য়াস্ট-কেসেও O(log N) অনুসন্ধান নিশ্চিত করে'
          },
          {
            en: 'Single-threaded batch loops processing millions of 64-bit integers',
            bn: 'একক থ্রেডে লক্ষ লক্ষ ৬৪-বিট পূর্ণসংখ্যা প্রক্রিয়াকরণ'
          },
          {
            en: 'Embedded microcontrollers with only 64 kilobytes of RAM',
            bn: 'মাত্র ৬৪ কিলোবাইট র‍্যাম বিশিষ্ট এমবেডেড মাইক্রোকন্ট্রোলার'
          },
          {
            en: 'Graphics shaders running on parallel GPU cores',
            bn: 'সমান্তরাল জিপিইউ কোরে চলা গ্রাফিক্স শেডার'
          }
        ],
        answer: 0,
        hint: {
          en: 'Recall how open addressing degrades when all keys map to the exact same bucket vs how Red-Black trees handle it.',
          bn: 'সব চাবি একই বাকেটে পড়লে ওপেন অ্যাড্রেসিং কীভাবে ভেঙে পড়ে বনাম রেড-ব্ল্যাক ট্রি কীভাবে তা সামলায় তা স্মরণ করুন।'
        },
        explanation: {
          en: 'In open addressing (including Swiss Tables), an adversarial collision attack targeting a single bucket forces O(N) linear probing across the entire table. Java 8 converts the bucket into a Red-Black tree at depth 8, bounding search time strictly to O(log N) if keys are comparable.',
          bn: 'সুইস টেবিল সহ যেকোনো ওপেন অ্যাড্রেসিংয়ে ইচ্ছাকৃত সংঘর্ষ হামলায় পুরো টেবিল জুড়ে O(N) লিনিয়ার অনুসন্ধান হতে বাধ্য হয়। কিন্তু জাভা ৮ বাকেটের গভীরতা ৮ এ পৌঁছালে তাকে রেড-ব্ল্যাক ট্রিতে রূপান্তর করে, যা ওর্য়াস্ট-কেসেও গতিকে কঠোরভাবে O(log N) এ বেঁধে রাখে।'
        }
      }
    ]
  }
};
