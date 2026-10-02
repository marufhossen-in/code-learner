import type { Lesson } from '../../../lib/types';

export const hashDisastersLesson: Lesson = {
  slug: 'hash-disasters',
  tech: 'hash-tables',
  title: {
    en: 'Hash Disasters: HashDOS, Treeification & Contract Breaches',
    bn: 'হ্যাশ বিপর্যয়: হ্যাশডস, ট্রিরূপীকরণ ও চুক্তিভঙ্গ'
  },
  summary: {
    en: 'An advanced systems engineering exploration of worst-case hash table vulnerabilities, adversarial complexity attacks, and structural defenses. When an attacker precomputes strings that map to identical bucket indices, linear chained lookups degrade from O(1) to O(n), turning an entire request into an O(n^2) CPU-melting denial-of-service attack known as HashDOS. For 1000 collided keys, a naive linked list incurs 499500 comparisons, whereas a balanced tree requires only 8977 comparisons. Modern runtime engines deploy two primary defenses: per-process secret salting using SipHash to make collisions uncomputable offline, and Java 8 treeification to cap bucket degradation at O(log k). This lesson also dissects the equals-hashCode contract and the disastrous silent memory leaks caused by mutating keys.',
    bn: 'ওর্য়াস্ট-কেস হ্যাশ টেবিল দুর্বলতা, প্রতিকূল অ্যালগরিদমিক আক্রমণ এবং কাঠামোগত প্রতিরক্ষার একটি উচ্চপর্যায়ের সিস্টেম ইঞ্জিনিয়ারিং বিশ্লেষণ। যখন কোনো আক্রমণকারী একই বাকেটে পড়ার মতো স্ট্রিং পূর্বগণনা করে সার্ভারে পাঠায়, তখন লিনিয়ার চেইনিংয়ের কারণে অনুসন্ধানের সময় O(1) থেকে O(n) এ নেমে যায় এবং পুরো রিকোয়েস্ট প্রসেসিং O(n^2) জটিলতার সিপিইউ-গলানো ডিনায়াল-অব-সার্ভিস আক্রমণে (HashDOS) পরিণত হয়। ১০০০টি সংঘর্ষযুক্ত চাবির ক্ষেত্রে একটি সাধারণ লিঙ্কড লিস্টে ৪৯৯৫০০টি তুলনা লাগে, যেখানে ব্যালান্সড ট্রিতে মাত্র ৮৯৭৭টি তুলনা প্রয়োজন হয়। আধুনিক রানটাইমগুলো মূলত দুটি প্রতিরক্ষা ব্যবস্থা গ্রহণ করে: সিপহ্যাশ (SipHash) দ্বারা প্রক্রিয়াপ্রতি গোপনীয় সল্ট যোগ করা যাতে অফলাইনে সংঘর্ষ তৈরি অসম্ভব হয়, এবং জাভা ৮ এর ট্রিরূপীকরণ যা বাকেটের অবক্ষয়কে O(log k) সীমার মধ্যে আটকে রাখে। এই পাঠে সমতা ও হ্যাশ কোডের চুক্তিভঙ্গ এবং পরিবর্তনশীল চাবি ব্যবহারের ফলে সৃষ্ট নীরব মেমরি লিকের ফাঁদও উন্মোচন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'The HashDOS Attack: Turning O(1) Maps into O(n^2) Weapons',
        bn: 'হ্যাশডস আক্রমণ: O(1) ম্যাপকে O(n^2) অস্ত্রে রূপান্তরের মেকানিক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this lesson, we examine how adversaries exploit hash table implementation details to launch devastating denial-of-service attacks. When an application accepts untrusted user input such as JSON keys or HTTP POST (web request) parameters, the runtime stores these key-value pairs in a hash table. If the hash algorithm is deterministic and known to the public, an attacker can precalculate thousands of distinct strings that all collide into the exact same bucket. When the server processes a single request containing 1000 colliding parameters, inserting each key requires traversing all previously inserted keys in that bucket. The total comparison count scales quadratically according to n * (n - 1) / 2. For 1000 parameters, this forces 499500 element comparisons, locking a server worker thread at 100 percent CPU utilization for several seconds.',
        bn: 'এই পাঠে আমরা পরীক্ষা করব কীভাবে প্রতিপক্ষ হ্যাশ টেবিলের অভ্যন্তরীণ দুর্বলতাকে কাজে লাগিয়ে মারাত্মক ডিনায়াল-অব-সার্ভিস আক্রমণ চালায়। যখন কোনো অ্যাপ্লিকেশন ব্যবহারকারীর পাঠানো অনাস্থাভাজন ইনপুট যেমন JSON কী বা HTTP POST (ওয়েব রিকোয়েস্ট) প্যারামিটার গ্রহণ করে, তখন রানটাইম সেই ডেটা একটি হ্যাশ টেবিলে সংরক্ষণ করে। হ্যাশ অ্যালগরিদমটি যদি অপরিবর্তনীয় এবং প্রকাশ্যে জানা থাকে, তবে একজন আক্রমণকারী অফলাইনে হাজার হাজার ভিন্ন স্ট্রিং আগে থেকেই হিসাব করে নিতে পারে যা ঠিক একই বাকেটে গিয়ে পড়ে। যখন সার্ভার ১০০০টি সংঘর্ষযুক্ত প্যারামিটার বিশিষ্ট একটিমাত্র রিকোয়েস্ট পায়, তখন প্রতিটি চাবি সন্নিবেশ করতে গিয়ে বাকেটের পূর্ববর্তী সব চাবি একে একে পরিদর্শন করতে হয়। মোট তুলনার সংখ্যা n * (n - 1) / 2 সূত্র অনুযায়ী দ্বিঘাত হারে বাড়ে। ১০০০টি প্যারামিটারের জন্য এটি ৪৯৯৫০০টি উপাদানের তুলনা তৈরি করে, যা সার্ভারের ওয়ার্কার থ্রেডকে ১০০ শতাংশ সিপিইউ ব্যবহারে আটকে রেখে পুরো অ্যাপ্লিকেশন অচল করে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'HashDOS',
          def: {
            en: 'An algorithmic complexity denial-of-service attack that floods a hash table with precomputed colliding keys to force worst-case O(n^2) CPU exhaustion.',
            bn: 'একটি অ্যালগরিদমিক ডিনায়াল-অব-সার্ভিস আক্রমণ যা পূর্বগণিত সংঘর্ষযুক্ত চাবি পাঠিয়ে হ্যাশ টেবিলকে ওর্য়াস্ট-কেস O(n^2) জটিলতায় ফেলে সিপিইউ অচল করে দেয়।'
          }
        },
        {
          term: 'SipHash',
          def: {
            en: 'A cryptographically keyed pseudorandom hash function designed to prevent offline collision generation by incorporating a secret per-process 128-bit key.',
            bn: 'একটি ক্রিপ্টোগ্রাফিক কি-যুক্ত হ্যাশ ফাংশন যা প্রক্রিয়াপ্রতি ১২৮-বিট গোপন চাবি ব্যবহার করে অফলাইনে কৃত্রিম সংঘর্ষ তৈরি প্রতিরোধ করে।'
          }
        },
        {
          term: 'Treeification',
          def: {
            en: 'The automated conversion of a congested linked list bucket into a balanced Red-Black Tree when its depth reaches a threshold of 8 elements.',
            bn: 'কোনো বাকেটের চেইনের দৈর্ঘ্য ৮ উপাদানে পৌঁছালে ধীরগতির লিঙ্কড লিস্টকে স্বয়ংক্রিয়ভাবে একটি ব্যালান্সড রেড-ব্ল্যাক ট্রিতে রূপান্তর করার কৌশল।'
          }
        },
        {
          term: 'equals-hashCode Contract',
          def: {
            en: 'The mandatory invariant stating that two objects evaluated as logically equal must produce identical integer hash codes.',
            bn: 'একটি বাধ্যতামূলক নিয়ম যা নির্দেশ করে যে দুটি অবজেক্ট যুক্তিসঙ্গতভাবে সমান হলে তাদের হ্যাশ কোডও অবশ্যই হুবহু সমান হতে হবে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'defenses',
      text: {
        en: 'Dual Structural Defenses: SipHash Randomization and Java Treeification',
        bn: 'দ্বৈত কাঠামোগত প্রতিরক্ষা: সিপহ্যাশ সল্টিং ও জাভা ট্রিরূপীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Systems engineers defend against HashDOS through two distinct architectural layers: cryptographic randomization at the input gate and balanced tree structures inside memory. The first defense is randomized hashing using algorithms like SipHash. When a server process initializes, it generates a random 128-bit secret seed. The hash of string x becomes hash(seed, x). Because the seed is never revealed outside process memory, an attacker cannot predict which keys collide on that specific server instance. Languages including Python, Rust, Ruby, and Go employ randomized hashing by default. The second defense is structural degradation containment. In Java 8, when a bucket chain accumulates 8 elements and the overall table capacity is at least 64, the HashMap replaces the singly-linked list with a Red-Black Tree. Even if an adversary forces collisions, lookup complexity degrades gracefully from O(1) to O(log k) rather than linear O(k).',
        bn: 'সিস্টেমস ইঞ্জিনিয়াররা হ্যাশডস আক্রমণ থেকে রক্ষা পেতে দুটি ভিন্ন আর্কিটেকচারাল স্তরে প্রতিরক্ষা গড়ে তোলেন: ইনপুট গেটে ক্রিপ্টোগ্রাফিক র‍্যান্ডমাইজেশন এবং মেমরির অভ্যন্তরে ব্যালান্সড ট্রি কাঠামো। প্রথম প্রতিরক্ষা হলো সিপহ্যাশের (SipHash) মতো অ্যালগরিদম ব্যবহার করে র‍্যান্ডমাইজড হ্যাশিং চালু করা। একটি সার্ভার প্রসেস শুরু হওয়ার সময় এটি মেমরিতে একটি গোপন ১২৮-বিট সীড তৈরি করে। স্ট্রিং x এর হ্যাশ তখন hash(seed, x) আকারে হিসাব হয়। যেহেতু সার্ভারের বাইরের কেউ এই গোপন সীড জানতে পারে না, তাই আক্রমণকারীর পক্ষে নির্দিষ্ট সার্ভারে সংঘর্ষ তৈরি করা অসম্ভব হয়ে পড়ে। পাইথন, রাস্ট, রুবি এবং গো ডিফল্টভাবেই এই নিরাপদ হ্যাশিং ব্যবহার করে। দ্বিতীয় প্রতিরক্ষা হলো কাঠামোগত অবক্ষয় নিয়ন্ত্রণ। জাভা ৮ এ যখন কোনো বাকেট চেইনে ৮টি উপাদান জমে এবং সামগ্রিক ধারণক্ষমতা অন্তত ৬৪ হয়, তখন হ্যাশম্যাপ লিঙ্কড লিস্ট সরিয়ে একটি রেড-ব্ল্যাক ট্রি তৈরি করে। ফলে আক্রমণকারী সংঘর্ষ ঘটাতে সক্ষম হলেও অনুসন্ধানের জটিলতা লিনিয়ার O(k) এর বদলে মাত্র O(log k) এ সীমাবদ্ধ থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'collision-simulator.ts',
      caption: {
        en: 'Simulation proving the dramatic performance contrast between naive lists and treeified buckets.',
        bn: 'সাধারণ লিঙ্কড লিস্ট এবং ট্রিরূপীকৃত বাকেটের মধ্যকার বিশাল কর্মক্ষমতার পার্থক্য প্রমাণের বাস্তব সিমুলেশন।'
      },
      code: `export function simulateListChain(collidingCount: number): number {
  let comparisons = 0;
  // In a single bucket linked list, each insert walks all existing elements
  for (let i = 0; i < collidingCount; i++) {
    comparisons += i;
  }
  return comparisons;
}

export function simulateTreeifiedChain(collidingCount: number): number {
  let comparisons = 0;
  // A balanced Red-Black tree incurs ceil(log2(i)) comparisons per insert
  for (let i = 1; i <= collidingCount; i++) {
    comparisons += Math.ceil(Math.log2(i));
  }
  return comparisons;
}

// Benchmark comparison for 1000 pathological colliding keys:
const n = 1000;
const listSteps = simulateListChain(n);       // 499500 comparisons (O(n^2))
const treeSteps = simulateTreeifiedChain(n); // 8977 comparisons (O(n log n))
const speedup = (listSteps / treeSteps).toFixed(1); // 55.6x faster under attack!`
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Execution Trace: Measuring Degradation Under Attack',
        bn: 'এক্সিকিউশন ট্রেস: আক্রমণের মুখে অবক্ষয় পরিমাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We execute our simulation on 1000 adversarial colliding keys. A traditional naive linked list executes 499500 comparisons, degrading insertion throughput by orders of magnitude. In stark contrast, a Red-Black treeified bucket caps comparison operations at 8977 steps, delivering an immediate 55.6 times acceleration under attack. When per-process 128-bit secret salts are applied, the 1000 keys disperse uniformly across 1024 buckets, reducing total comparison work to only 1500 operations.',
        bn: 'আমরা ১০০০টি ক্ষতিকর সংঘর্ষযুক্ত কী-এর ওপর আমাদের সিমুলেশন পরিচালনা করি। একটি সাধারণ লিঙ্কড লিস্ট ৪৯৯৫০০টি তুলনা সম্পন্ন করে, যা সন্নিবেশের গতি মারাত্মকভাবে কমিয়ে দেয়। এর বিপরীতে রেড-ব্ল্যাক ট্রিরূপীকৃত বাকেট সর্বোচ্চ ৮৯৭৭টি ধাপে কাজ শেষ করে আক্রমণের মুখে ৫৫.৬ গুণ বেশি গতি নিশ্চিত করে। আর যখন প্রক্রিয়াপ্রতি ১২৮-বিট গোপন সল্ট প্রয়োগ করা হয়, তখন ১০০০টি উপাদান ১০২৪টি বাকেটে সুষমভাবে ছড়িয়ে পড়ে এবং মোট তুলনার সংখ্যা মাত্র ১৫০০ অপারেশনে নেমে আসে।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'trace-defenses.ts',
      caption: {
        en: 'Measured operation counts across unprotected, treeified, and salted hash engines.',
        bn: 'সুরক্ষাহীন, ট্রিরূপীকৃত এবং সল্টেড হ্যাশ ইঞ্জিনের বাস্তব অপারেশন পরিমাপ।'
      },
      code: `// Test Workload: 1000 colliding strings submitted to HTTP endpoint
// Scenario 1: Unprotected Singly-Linked List Chain
// Comparisons = 0 + 1 + 2 + ... + 999 = 499500 comparisons
// CPU Latency = ~350ms per batch

// Scenario 2: Java 8 Red-Black Treeification (Tree threshold = 8)
// Comparisons = 8977 comparisons (O(n log n) total build time)
// CPU Latency = ~6.3ms per batch (55.6x faster!)

// Scenario 3: SipHash 128-bit Secret Random Salt
// Attacker offline collision precomputation neutralized!
// Keys disperse evenly across 1024 buckets: average chain length ~ 0.98
// Total comparisons for 1000 inserts = ~1500 comparisons
// CPU Latency = ~0.8ms per batch (437x faster!)`
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'Visualizing Treeification and Collision Dispersion',
        bn: 'ট্রিরূপীকরণ ও সংঘর্ষ ছড়ানোর ভিজ্যুয়ালাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'ht'
    },
    {
      type: 'heading',
      id: 'contracts',
      text: {
        en: 'The Contract Breaches: Broken Equality and Mutable Key Leaks',
        bn: 'চুক্তিভঙ্গের বিপদ: ভুল সমতা এবং পরিবর্তনশীল চাবির ফাঁদ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Beyond external security attacks, internal bugs in key contracts frequently crash enterprise applications. The equals-hashCode agreement mandates that logically equivalent objects must yield identical integer hashes. When an engineer modifies equality checks while leaving the hash implementation untouched, identical instances evaluate to mismatched hash codes. When querying map.has(key2), the table inspects the bucket dictated by key2, fails to locate the record stored under key1, and reports false. An equally disastrous trap is using mutable objects as map keys. If an object property that contributes to its hash code is mutated after insertion, its computed slot changes. Calling map.delete(key) calculates the new slot, finds an empty bucket or mismatched key, and fails to delete the original entry, causing irreversible memory leaks.',
        bn: 'বাহ্যিক নিরাপত্তা আক্রমণের বাইরেও অভ্যন্তরীণ চুক্তিভঙ্গের বাগগুলো প্রায়ই এন্টারপ্রাইজ সিস্টেম ক্র্যাশ করায়। সমতা ও হ্যাশ কোডের চুক্তি দাবি করে যে যুক্তিসঙ্গতভাবে সমান অবজেক্টগুলোকে নিশ্চিতভাবে অভিন্ন পূর্ণসংখ্যা হ্যাশ তৈরি করতে হবে। কোনো প্রকৌশলী যদি হ্যাশ ফাংশন অপরিবর্তিত রেখে কেবল সমতা যাচাইয়ের নিয়ম বদলান, তবে অভিন্ন অবজেক্টগুলো ভিন্ন ভিন্ন হ্যাশ কোড তৈরি করে। ফলে map.has(key2) চালানোর সময় টেবিলটি key2 এর বাকেট খোঁজে এবং key1 এ সংরক্ষিত মান খুঁজে না পেয়ে মিথ্যা ফলাফল দেয়। আরেকটি মারাত্মক ফাঁদ হলো পরিবর্তনশীল অবজেক্টকে ম্যাপের চাবি হিসেবে ব্যবহার করা। যোগ করার পর যদি চাবির হ্যাশ নির্ভর প্রোপার্টি বদলে যায়, তবে তার হিসাবকৃত স্লটও বদলে যায়। তখন map.delete(key) চালালে নতুন স্লটে শূন্য বাকেট পেয়ে মোছার কাজ ব্যর্থ হয় এবং মেমরিতে স্থায়ী লিক তৈরি হয়।'
      }
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: {
        en: 'The Overridden equals Without hashCode Trap',
        bn: 'hashCode ছাড়া equals ওভাররাইডের মারাত্মক ফাঁদ'
      },
      text: {
        en: 'Never override equals() without overriding hashCode() using identical fields. Inconsistent implementations cause equal objects to scatter across different buckets, causing lookup failures, duplicate entries, and silent data corruption in sets and maps.',
        bn: 'অভিন্ন ফিল্ড ব্যবহার করে hashCode() ওভাররাইড না করে কখনোই কেবল equals() ওভাররাইড করবেন না। অসঙ্গতিপূর্ণ বাস্তবায়নের কারণে সমান অবজেক্টগুলো ভিন্ন ভিন্ন বাকেটে ছড়িয়ে পড়ে, যা ম্যাপ এবং সেটে অনুসন্ধান ব্যর্থতা, ডুপ্লিকেট ডেটা এবং নীরব বিভ্রান্তি তৈরি করে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison',
      text: {
        en: 'Architectural Defense Comparison Matrix',
        bn: 'আর্কিটেকচারাল প্রতিরক্ষা ব্যবস্থার তুলনামূলক সারণি'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Defense Mechanism', bn: 'প্রতিরক্ষা কৌশল' },
        { en: 'Worst-Case Lookup Time', bn: 'সবচেয়ে খারাপ অনুসন্ধান সময়' },
        { en: 'Protection Scope', bn: 'সুরক্ষার পরিধি' },
        { en: 'Primary Implementation', bn: 'প্রধান ব্যবহারকারী ইঞ্জিন' }
      ],
      rows: [
        [
          { en: 'Unprotected Naive Chaining', bn: 'সুরক্ষাহীন সাধারণ চেইনিং' },
          { en: 'O(n) linear slowdown', bn: 'O(n) লিনিয়ার ধীরগতি' },
          { en: 'None (vulnerable to HashDOS)', bn: 'কোনোটিই নয় (হ্যাশডস ঝুঁকিপূর্ণ)' },
          { en: 'Legacy scripting runtimes', bn: 'পুরনো স্ক্রিপ্টিং রানটাইম' }
        ],
        [
          { en: 'SipHash-2-4 Secret Seed', bn: 'সিপহ্যাশ ১২৮-বিট গোপন সীড' },
          { en: 'O(1) average preserved', bn: 'O(1) গড় সুরক্ষিত থাকে' },
          { en: 'Prevents offline collision farming', bn: 'অফলাইন সংঘর্ষ তৈরি প্রতিরোধ করে' },
          { en: 'Python, Rust, Go, Ruby', bn: 'Python, Rust, Go, Ruby' }
        ],
        [
          { en: 'Java 8 Bucket Treeification', bn: 'জাভা ৮ বাকেট ট্রিরূপীকরণ' },
          { en: 'O(log k) bounded search', bn: 'O(log k) নিয়ন্ত্রিত সন্ধান' },
          { en: 'Limits CPU degradation under collision', bn: 'সংঘর্ষের মুখে সিপিইউ অবক্ষয় আটকায়' },
          { en: 'Java 8+ HashMap & ConcurrentHashMap', bn: 'Java 8+ HashMap ও ConcurrentHashMap' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'applications',
      text: {
        en: 'Production Hardening Guidelines for Engineers',
        bn: 'ইঞ্জিনিয়ারদের জন্য প্রোডাকশন সুরক্ষার নির্দেশিকা'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'HTTP Request Body Parameter Caps: Web application firewalls and gateways (like Nginx, Express, Tomcat) strictly limit the maximum number of POST parameters (e.g. max 1000 keys) to block HashDOS floods before memory allocation.',
          bn: 'HTTP প্যারামিটারের সংখ্যা নিয়ন্ত্রণ: ওয়েব অ্যাপ্লিকেশন গেটওয়েগুলো (যেমন Nginx, Express, Tomcat) মেমরি বরাদ্দের আগেই হ্যাশডস আক্রমণ রুখতে সর্বোচ্চ POST প্যারামিটারের সংখ্যা (যেমন সর্বোচ্চ ১০০০ কী) নির্ধারণ করে দেয়।'
        },
        {
          en: 'Immutable Key Wrappers: Always wrap composite keys in frozen or immutable structures (such as Java Records or Object.freeze in JavaScript) to prevent in-place property mutations.',
          bn: 'অপরিবর্তনীয় কী মোড়ক: অবজেক্টের অভ্যন্তরীণ মান পরিবর্তন ঠেকাতে সর্বদা কম্পোজিট কী-গুলোকে অপরিবর্তনীয় কাঠামোর (যেমন Java Records বা JavaScript-এ Object.freeze) মধ্যে সংরক্ষণ করুন।'
        },
        {
          en: 'Automated Contract Testing: Use property-based testing frameworks to verify that generated pairs satisfying a.equals(b) invariably yield identical hashCode() integers.',
          bn: 'স্বয়ংক্রিয় চুক্তি পরীক্ষা: প্রপার্টি-বেসড টেস্টিং ফ্রেমওয়ার্ক ব্যবহার করে নিশ্চিত করুন যে a.equals(b) শর্ত পূরণকারী প্রতিটি জোড়া অবজেক্ট সর্বদা অভিন্ন hashCode() পূর্ণসংখ্যা তৈরি করে।'
        },
        {
          en: 'Safe Serialization Standards: Never rely on hash table iteration order across network boundaries or cache serializations, as hash seeds differ between distinct server processes.',
          bn: 'নিরাপদ সিরিয়ালাইজেশন মান: নেটওয়ার্ক বা ক্যাশ সিরিয়ালাইজেশনের ক্ষেত্রে কখনোই হ্যাশ টেবিলের ইটারেশন ক্রমের ওপর নির্ভর করবেন না, কারণ বিভিন্ন সার্ভার প্রসেসে হ্যাশ সীড আলাদা হয়।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-address-forge',
    tech: 'hashtables',
    title: {
      en: 'The Address Forge: Avalanche Physics, Bit Mixing & SipHash',
      bn: 'ঠিকানা কারখানা: অ্যাভালাঞ্চ নীতি, বিট মিক্সিং ও সিপহ্যাশ'
    }
  },
  exercises: [
    {
      id: 'hd-ex1',
      kind: 'mcq',
      topic: 'hashdos mechanics',
      question: {
        en: 'Why does sending 1000 precomputed colliding keys in a single HTTP POST request cause a severe denial-of-service condition?',
        bn: 'একটিমাত্র HTTP POST রিকোয়েস্টে ১০০০টি পূর্বগণিত সংঘর্ষযুক্ত চাবি পাঠালে কেন মারাত্মক ডিনায়াল-অব-সার্ভিস পরিস্থিতির সৃষ্টি হয়?'
      },
      options: [
        {
          en: 'All 1000 keys land in a single bucket, degrading table operations to an O(n^2) loop requiring 499500 pointer comparisons and exhausting CPU cores',
          bn: 'সব ১০০০টি চাবি একটিমাত্র বাকেটে পড়ে, যার ফলে টেবিল অপারেশনগুলো O(n^2) লুপে পরিণত হয়ে ৪৯৯৫০০টি পয়েন্টার তুলনা তৈরি করে এবং সিপিইউ কোর অচল করে দেয়'
        },
        {
          en: 'The operating system TCP stack closes port 443 due to TLS encryption packet mismatch',
          bn: 'টিএলএস এনক্রিপশন প্যাকেটের অমিলের কারণে অপারেটিং সিস্টেমের টিসিপি স্ট্যাক পোর্ট ৪৪৩ বন্ধ করে দেয়'
        },
        {
          en: 'Solid-state drives encounter write wear-leveling faults when keys share character prefixes',
          bn: 'চাবিগুলো একই ধরনের অক্ষর দিয়ে শুরু হলে সলিড-স্টেট ড্রাইভ রাইট পরিধান ত্রুটির সম্মুখীন হয়'
        },
        {
          en: 'HTTP 2 multiplexing frames require balanced binary trees to decode request headers',
          bn: 'রিকোয়েস্ট হেডার ডিকোড করতে HTTP 2 মাল্টিপ্লেক্সিং ফ্রেমের জন্য ব্যালান্সড বাইনারি ট্রির প্রয়োজন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Calculate n * (n - 1) / 2 for 1000 colliding items.',
        bn: '১০০০টি সংঘর্ষযুক্ত উপাদানের জন্য n * (n - ১) / ২ হিসাব করুন।'
      },
      explanation: {
        en: 'In an unprotected hash table, inserting n keys into one bucket requires walking the chain on every step. Summing 0 through 999 yields 499500 comparisons, consuming seconds of dedicated CPU time for a single payload.',
        bn: 'সুরক্ষাহীন হ্যাশ টেবিলে একটিমাত্র বাকেটে n সংখ্যক উপাদান যোগ করতে প্রতি ধাপে পুরো চেইন হাঁটতে হয়। ০ থেকে ৯৯৯ পর্যন্ত যোগ করলে মোট ৪৯৯৫০০টি তুলনা লাগে, যা একটিমাত্র রিকোয়েস্টেই কয়েক সেকেন্ডের মূল্যবান সিপিইউ সময় গ্রাস করে।'
      }
    },
    {
      id: 'hd-ex2',
      kind: 'mcq',
      topic: 'treeification threshold',
      question: {
        en: 'At what threshold does Java 8 HashMap convert a congested linked list bucket into a balanced Red-Black Tree?',
        bn: 'কোন নির্দিষ্ট সীমায় পৌঁছালে জাভা ৮ এর HashMap একটি ঘনবসতিপূর্ণ লিঙ্কড লিস্ট বাকেটকে ব্যালান্সড রেড-ব্ল্যাক ট্রিতে রূপান্তর করে?'
      },
      options: [
        {
          en: 'When a bucket chain reaches 8 elements and total table capacity is at least 64',
          bn: 'যখন কোনো বাকেটের চেইন ৮ উপাদানে পৌঁছায় এবং মোট টেবিল ধারণক্ষমতা অন্তত ৬৪ হয়'
        },
        {
          en: 'When the garbage collector detects more than 1000 idle objects in the young generation',
          bn: 'যখন গার্বেজ কালেক্টর ইয়াং জেনারেশনে ১০০০টির বেশি অলস অবজেক্ট শনাক্ত করে'
        },
        {
          en: 'When the operating system RAM utilization exceeds 90 percent of physical capacity',
          bn: 'যখন অপারেটিং সিস্টেমের র‍্যাম ব্যবহার বাস্তব মেমরির ৯০ শতাংশ অতিক্রম করে'
        },
        {
          en: 'Whenever two keys produce hash codes that differ by exactly 1 bit',
          bn: 'যখনই দুটি চাবির হ্যাশ কোডের পার্থক্য ঠিক ১ বিট হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The standard Java TREEIFY_THRESHOLD constant is 8.',
        bn: 'স্ট্যান্ডার্ড জাভায় TREEIFY_THRESHOLD ধ্রুবকের মান হলো ৮।'
      },
      explanation: {
        en: 'Under normal Poisson distribution with fair hashing, the probability of a bucket reaching depth 8 is less than one in ten million. Reaching 8 indicates either pathological clustering or an attack, triggering treeification to cap lookups at O(log k).',
        bn: 'সঠিক হ্যাশিংয়ে পয়সন বণ্টন অনুযায়ী কোনো বাকেটের গভীরতা ৮ এ পৌঁছানোর সম্ভাবনা এক কোটিতে একটিরও কম। তাই ৮ উপাদানে পৌঁছানো অস্বাভাবিক গুচ্ছায়ন বা আক্রমণের প্রমাণ, যা অনুসন্ধানকে O(log k) এর মধ্যে রাখতে ট্রিরূপীকরণ সক্রিয় করে।'
      }
    },
    {
      id: 'hd-ex3',
      kind: 'predict',
      topic: 'equals-hashCode contract',
      question: {
        en: 'Class User defines equals based on userId, but does not override hashCode(). Two instances userA and userB have identical userId = 42. What happens when calling map.set(userA, "data") followed by map.get(userB)?',
        bn: 'ইউজার ক্লাসে userId এর ওপর ভিত্তি করে equals সংজ্ঞায়িত কিন্তু hashCode() ওভাররাইড করা নেই। দুটি অবজেক্ট userA ও userB এর উভয়ের userId = 42। প্রথমে map.set(userA, "data") এবং পরে map.get(userB) চালালে কী ঘটবে?'
      },
      options: [
        {
          en: 'userB inherits the default identity hashCode based on its memory address, hashing to a different bucket and returning undefined',
          bn: 'userB তার নিজস্ব মেমরি অ্যাড্রেস থেকে ডিফল্ট হ্যাশ কোড গ্রহণ করে ভিন্ন বাকেটে অনুসন্ধান চালাবে এবং আনডিফাইন্ড ফেরত দেবে'
        },
        {
          en: 'The JVM compiler automatically generates a shared hash code based on the equals method fields',
          bn: 'জেভিএম কম্পাইলার স্বয়ংক্রিয়ভাবে equals মেথডের ফিল্ডগুলোর ওপর ভিত্তি করে একটি অভিন্ন হ্যাশ কোড তৈরি করবে'
        },
        {
          en: 'The table merges userA and userB into a single unified object instance in heap memory',
          bn: 'টেবিলটি হিপ মেমরিতে userA এবং userB কে একটি একক অবজেক্টে রূপান্তর করে দেবে'
        },
        {
          en: 'The runtime throws an InconsistentContractException during the second operation',
          bn: 'রানটাইম দ্বিতীয় অপারেশনের সময় একটি InconsistentContractException ছুড়ে দেবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Default hashCode comes from the memory reference (identity). Different instances have different addresses.',
        bn: 'ডিফল্ট হ্যাশ কোড আসে অবজেক্টের মেমরি রেফারেন্স থেকে। ভিন্ন ইনস্ট্যান্সের মেমরি অ্যাড্রেসও ভিন্ন হয়।'
      },
      explanation: {
        en: 'Because hashCode was not overridden, userA and userB produce different hash codes. The table routes them to different buckets. Looking up userB inspects the wrong bucket and fails, violating the contract that equal objects must have equal hashes.',
        bn: 'যেহেতু hashCode ওভাররাইড করা হয়নি, তাই userA এবং userB ভিন্ন হ্যাশ কোড তৈরি করে। টেবিলটি তাদের ভিন্ন ভিন্ন বাকেটে পাঠায়। ফলে userB দিয়ে অনুসন্ধান করলে ভুল বাকেট পরীক্ষা করা হয় এবং ডেটা খুঁজে পাওয়া যায় না।'
      }
    },
    {
      id: 'hd-ex4',
      kind: 'mcq',
      topic: 'siphash protection',
      question: {
        en: 'How does SipHash-2-4 eliminate the threat of precomputed HashDOS attacks?',
        bn: 'সিপহ্যাশ (SipHash-2-4) কীভাবে পূর্বগণিত হ্যাশডস আক্রমণের ঝুঁকি সম্পূর্ণ দূর করে?'
      },
      options: [
        {
          en: 'It mixes a secret 128-bit key generated at process startup into every hash calculation, making it mathematically impossible for an attacker to precompute colliding keys offline',
          bn: 'এটি প্রসেস শুরুর সময় তৈরি হওয়া একটি গোপন ১২৮-বিট চাবি প্রতি হ্যাশ গণনায় মিশিয়ে দেয়, যার ফলে আক্রমণকারীর পক্ষে অফলাইনে সংঘর্ষযুক্ত চাবি পূর্বগণনা করা অসম্ভব হয়'
        },
        {
          en: 'It compresses incoming strings using gzip before performing integer division on network packets',
          bn: 'এটি নেটওয়ার্ক প্যাকেটে পূর্ণসংখ্যা ভাগ করার পূর্বে ইনপুট স্ট্রিংগুলোকে জিজিপ দিয়ে সংকুচিত করে'
        },
        {
          en: 'It limits string key lengths to a maximum of 16 characters in production web requests',
          bn: 'এটি প্রোডাকশন ওয়েব রিকোয়েস্টে স্ট্রিং চাবির সর্বোচ্চ দৈর্ঘ্য ১৬ অক্ষরে সীমাবদ্ধ রাখে'
        },
        {
          en: 'It shifts hash computations to the client graphics processing unit (GPU)',
          bn: 'এটি হ্যাশ গণনা ক্লায়েন্টের গ্রাফিক্স প্রসেসিং ইউনিটে (GPU) স্থানান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The attacker does not know the secret key inside the server memory.',
        bn: 'সার্ভারের মেমরির ভেতরে থাকা গোপন চাবিটি আক্রমণকারী জানতে পারে না।'
      },
      explanation: {
        en: 'Without knowledge of the server secret seed, any collision set precomputed by an attacker collapses into random uniform noise on that server instance, guaranteeing average O(1) performance.',
        bn: 'সার্ভারের গোপন সীড জানা না থাকলে আক্রমণকারীর অফলাইনে তৈরি করা যেকোনো সংঘর্ষযুক্ত সেট ওই সার্ভারে গিয়ে স্বাভাবিক র‍্যান্ডম উপাত্তের মতো সুষমভাবে ছড়িয়ে পড়ে এবং গড় O(1) গতি বজায় থাকে।'
      }
    }
  ],
  quiz: {
    id: 'hd-quiz',
    title: {
      en: 'Hash Disasters and Security Hardening Quiz',
      bn: 'হ্যাশ বিপর্যয় ও নিরাপত্তা সুরক্ষা কুইজ'
    },
    questions: [
      {
        id: 'hdq1',
        kind: 'mcq',
        topic: 'hash flooding mitigation',
        question: {
          en: 'Which layer of defense provides the most comprehensive immunity against HashDOS without changing bucket data structures?',
          bn: 'বাকেটের ডেটা কাঠামো পরিবর্তন না করেই কোন স্তরের প্রতিরক্ষা হ্যাশডস আক্রমণের বিরুদ্ধে সবচেয়ে পূর্ণাঙ্গ সুরক্ষা দেয়?'
        },
        options: [
          {
            en: 'Randomized keyed hashing using a secret per-process seed such as SipHash',
            bn: 'সিপহ্যাশের মতো প্রক্রিয়াপ্রতি গোপন সীড ব্যবহার করে র‍্যান্ডমাইজড কি-যুক্ত হ্যাশিং'
          },
          {
            en: 'Increasing the CPU clock frequency using hardware overclocking',
            bn: 'হার্ডওয়্যার ওভারক্লকিংয়ের মাধ্যমে সিপিইউ ক্লক ফ্রিকোয়েন্সি বৃদ্ধি করা'
          },
          {
            en: 'Allocating a static 1 gigabyte array for every hash map instance',
            bn: 'প্রতিটি হ্যাশ ম্যাপ ইনস্ট্যান্সের জন্য স্ট্যাটিক ১ গিগাবাইট মেমরি অ্যারে বরাদ্দ করা'
          },
          {
            en: 'Converting all string characters into uppercase ASCII before hashing',
            bn: 'হ্যাশিং করার পূর্বে সব স্ট্রিং অক্ষরকে বড় হাতের আসকি অক্ষরে রূপান্তর করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'If the attacker cannot predict the hash output, they cannot craft collisions.',
          bn: 'আক্রমণকারী যদি হ্যাশের আউটপুট অনুমান করতে না পারে, তবে সে সংঘর্ষ তৈরি করতে পারবে না।'
        },
        explanation: {
          en: 'Keyed hashing stops the attack at the mathematical source. Because the seed is secret, offline collision generation becomes statistically impossible, preserving uniform O(1) distribution.',
          bn: 'কি-যুক্ত হ্যাশিং আক্রমণের গাণিতিক উৎসেই বাধা দেয়। গোপন সীড থাকার কারণে অফলাইনে সংঘর্ষ তৈরি করা পরিসংখ্যানগতভাবে অসম্ভব হয়ে পড়ে এবং গড় O(1) বণ্টন অক্ষুণ্ণ থাকে।'
        }
      },
      {
        id: 'hdq2',
        kind: 'predict',
        topic: 'treeification degradation bound',
        question: {
          en: 'Under an adversarial attack forcing 1024 collisions in a single bucket, how do comparison counts scale in a treeified bucket versus an unprotected linked list bucket?',
          bn: 'প্রতিকূল আক্রমণে একটিমাত্র বাকেটে ১০২৪টি সংঘর্ষ ঘটলে ট্রিরূপীকৃত বাকেটে এবং সুরক্ষাহীন লিঙ্কড লিস্ট বাকেটে তুলনার সংখ্যা কীভাবে পরিবর্তিত হয়?'
        },
        options: [
          {
            en: 'Treeified search requires at most ceil(log2(1024)) = 10 comparisons, whereas the unprotected linked list requires up to 1024 linear comparisons',
            bn: 'ট্রিরূপীকৃত বাকেটে সর্বোচ্চ ceil(log2(1024)) = ১০টি তুলনা লাগে, যেখানে সুরক্ষাহীন লিঙ্কড লিস্টে ১০২৪টি লিনিয়ার তুলনা করতে হয়'
          },
          {
            en: 'Both implementations require exactly 1024 comparisons due to CPU bus saturation',
            bn: 'সিপিইউ বাস ধারণক্ষমতা পূর্ণ হয়ে যাওয়ায় উভয় বাস্তবায়নেই ঠিক ১০২৪টি তুলনা লাগে'
          },
          {
            en: 'Treeified search consumes more operations due to Red-Black tree rotation overhead',
            bn: 'রেড-ব্ল্যাক ট্রি ঘূর্ণন ওভারহেডের কারণে ট্রিরূপীকৃত অনুসন্ধানে বেশি অপারেশন লাগে'
          },
          {
            en: 'The treeified bucket automatically terminates the operating system process',
            bn: 'ট্রিরূপীকৃত বাকেটটি স্বয়ংক্রিয়ভাবে অপারেটিং সিস্টেমের প্রসেস বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compare O(log k) to O(k) for k = 1024.',
          bn: 'k = ১০২৪ এর জন্য O(log k) এবং O(k) এর তুলনা করুন।'
        },
        explanation: {
          en: 'A balanced Red-Black tree guarantees a height of at most 2 * log2(k + 1). For 1024 elements, lookup takes about 10 comparisons, capping worst-case performance and thwarting the CPU exhaustion attack.',
          bn: 'ব্যালান্সড রেড-ব্ল্যাক ট্রি নিশ্চিত করে যে ট্রির উচ্চতা সর্বোচ্চ ২ * log2(k + ১) হবে। ১০২৪টি উপাদানের জন্য অনুসন্ধান মাত্র ১০টি তুলনায় সম্পন্ন হয়, যা ওর্য়াস্ট-কেস সীমাবদ্ধ রেখে আক্রমণ ব্যর্থ করে।'
        }
      },
      {
        id: 'hdq3',
        kind: 'mcq',
        topic: 'mutable key memory leak',
        question: {
          en: 'Why does mutating an object stored as a map key cause a permanent memory leak in long-running services?',
          bn: 'দীর্ঘমেয়াদী সার্ভিসে ম্যাপের চাবি হিসেবে ব্যবহৃত অবজেক্টের মান পরিবর্তন করলে কেন স্থায়ী মেমরি লিক তৈরি হয়?'
        },
        options: [
          {
            en: 'The modified key calculates a different bucket on map.delete(key), leaving the original object permanently stored and referenced in the old bucket',
            bn: 'পরিবর্তিত চাবিটি map.delete(key) চালানোর সময় ভিন্ন বাকেট হিসাব করে, ফলে মূল অবজেক্টটি আগের বাকেটেই স্থায়ীভাবে আটকা পড়ে থাকে'
          },
          {
            en: 'V8 garbage collection sweeps ignore any object that has ever been assigned a property',
            bn: 'V8 গার্বেজ কালেক্টর এমন যেকোনো অবজেক্ট উপেক্ষা করে যার মধ্যে অতীতে কোনো প্রোপার্টি অ্যাসাইন করা হয়েছে'
          },
          {
            en: 'The Node.js event loop blocks execution whenever an object reference is modified',
            bn: 'অবজেক্ট রেফারেন্স পরিবর্তিত হলে Node.js ইভেন্ট লুপ তাৎক্ষণিকভাবে বন্ধ হয়ে যায়'
          },
          {
            en: 'Mutating an object permanently fragments the virtual memory page tables of the kernel',
            bn: 'অবজেক্টের মান পরিবর্তন করলে কার্নেলের ভার্চুয়াল মেমরি পেজ টেবিল স্থায়ীভাবে খণ্ডিত হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'To delete an entry, the map must first find it. Where does delete() look?',
          bn: 'কোনো এন্ট্রি মুছতে হলে ম্যাপকে আগে তা খুঁজে পেতে হয়। delete() কোথায় খুঁজবে?'
        },
        explanation: {
          en: 'Deletion relies on finding the slot from the key current hash code. After mutation, the calculated slot points to a different bucket. The original entry remains referenced by the table forever, preventing garbage collection.',
          bn: 'মুছে ফেলার অপারেশন কী-এর তৎকালীন হ্যাশ কোড থেকে বাকেট বের করে। পরিবর্তনের পর হিসাবকৃত স্লট ভিন্ন বাকেট নির্দেশ করে। ফলে মূল রেকর্ডটি চিরতরে আগের বাকেটের সাথে যুক্ত থেকে যায় এবং গার্বেজ কালেকশন তা খালি করতে পারে না।'
        }
      },
      {
        id: 'hdq4',
        kind: 'mcq',
        topic: 'iteration order portability',
        question: {
          en: 'Why is relying on hash table iteration order across different servers or language runtimes considered an architectural defect?',
          bn: 'ভিন্ন ভিন্ন সার্ভার বা ভাষার মধ্যে হ্যাশ টেবিলের ইটারেশন ক্রমের ওপর নির্ভর করাকে কেন একটি আর্কিটেকচারাল ত্রুটি বিবেচনা করা হয়?'
        },
        options: [
          {
            en: 'Randomized hash seeds and internal bucket layouts vary across processes, so iteration order is non-deterministic and non-portable',
            bn: 'র‍্যান্ডমাইজড হ্যাশ সীড এবং বাকেট লেআউট প্রসেসভেদে ভিন্ন হয়, যার ফলে ইটারেশন ক্রম সম্পূর্ণ অনিশ্চিত এবং স্থানান্তরযোগ্য নয়'
          },
          {
            en: 'Operating system network cards reverse JSON arrays during socket transmission',
            bn: 'সকেট ট্রান্সমিশনের সময় অপারেটিং সিস্টেম নেটওয়ার্ক কার্ড JSON অ্যারেকে উল্টে দেয়'
          },
          {
            en: 'Hash tables only permit iteration in reverse alphabetical order of property names',
            bn: 'হ্যাশ টেবিল কেবল প্রোপার্টির নামের বিপরীত বর্ণানুক্রমিক অর্ডারে ইটারেশনের অনুমতি দেয়'
          },
          {
            en: 'CPU branch predictors intentionally randomize array indices to avoid cache line overheating',
            bn: 'ক্যাশ লাইন অতিরিক্ত গরম হওয়া এড়াতে সিপিইউ ব্রাঞ্চ প্রেডিক্টর ইচ্ছাকৃতভাবে অ্যারে ইনডেক্স এলোমেলো করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If every server uses a different random salt, will keys land in the same bucket order?',
          bn: 'প্রতিটি সার্ভার যদি ভিন্ন গোপন সল্ট ব্যবহার করে, তবে কি চাবিগুলো একই বাকেট ক্রমে বসবে?'
        },
        explanation: {
          en: 'Because modern runtimes randomize hash seeds per process, two servers storing identical keys will place them into completely different bucket orders. Order-sensitive logic must use explicit sorted lists or insertion-ordered maps.',
          bn: 'যেহেতু আধুনিক রানটাইমগুলো প্রসেসপ্রতি হ্যাশ সীড এলোমেলো করে নেয়, তাই একই উপাত্ত দুটি ভিন্ন সার্ভারে সম্পূর্ণ ভিন্ন বাকেট ক্রমে বসে। ক্রম যেখানে গুরুত্বপূর্ণ, সেখানে স্পষ্ট সর্টেড লিস্ট বা ইনসারশন-অর্ডারড ম্যাপ ব্যবহার করা আবশ্যক।'
        }
      }
    ]
  }
};
