import type { Lesson } from '../../../lib/types';

export const hashThinkingLesson: Lesson = {
  slug: 'hash-thinking',
  tech: 'hash-tables',
  title: {
    en: 'Hash Table Thinking: Beginner Foundations, Content Addressing & Collisions',
    bn: 'হ্যাশ টেবিল থিংকিং: প্রাথমিক ভিত্তি, কনটেন্ট অ্যাড্রেসিং ও সংঘর্ষ'
  },
  summary: {
    en: 'A comprehensive engineering guide to hash table architectures and content-addressed storage. Traditional arrays address memory strictly by contiguous index offset in O(1) time, while binary trees navigate by relative comparison order in O(log n) time. Hash tables introduce content addressing: an arbitrary key is deterministically mapped to an integer bucket index in average O(1) time. Because the space of potential keys far exceeds available memory slots, collisions are mathematically inevitable by the pigeonhole principle. This lesson examines deterministic hashing, bitwise modulo masking via capacity minus 1, load factor thresholds, dynamic doubling for amortized constant time, and the immutable key contract.',
    bn: 'হ্যাশ টেবিল আর্কিটেকচার এবং বিষয়বস্তু-ভিত্তিক মেমরি ঠিকানার একটি পূর্ণাঙ্গ প্রকৌশল গাইড। প্রচলিত অ্যারে সংলগ্ন ইনডেক্স অফসেটের মাধ্যমে O(1) সময়ে মেমরিতে প্রবেশ করে, যেখানে বাইনারি ট্রি তুলনামূলক ক্রম অনুসারে O(log n) সময়ে মান খুঁজে নেয়। হ্যাশ টেবিল কনটেন্ট অ্যাড্রেসিং পদ্ধতি চালু করে: যেকোনো চাবি বা কী-কে একটি সুনির্দিষ্ট পূর্ণসংখ্যা বাকেট ইনডেক্সে রূপান্তরিত করে গড়ে O(1) সময়ে উপাত্ত সংরক্ষণ করা হয়। যেহেতু সম্ভাব্য কী-এর সংখ্যা মেমরির মোট স্লটের চেয়ে অনেক বেশি, তাই কবুতর-খাঁচা বা পিজনহোল নীতি অনুযায়ী সংঘর্ষ ঘটা গাণিতিকভাবে নিশ্চিত। এই পাঠে ডিটারমিনিস্টিক হ্যাশিং, ধারণক্ষমতা বিয়োগ ১ দ্বারা বিটওয়াইজ মাস্কিং, লোড ফ্যাক্টরের পরিমাপ, অ্যামর্টাইজড সময়ের জন্য দ্বিগুণ প্রসারণ এবং অপরিবর্তনীয় কী-এর চুক্তি বিশদভাবে ব্যাখ্যা করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'The Three Addressing Paradigms: Position, Order, and Content',
        bn: 'ঠিকানা নির্ধারণের তিন ধারা: অবস্থান, ক্রম এবং বিষয়বস্তু'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this lesson, we examine how computer systems locate records across different data structures. Arrays achieve constant O(1) random access because records are placed sequentially; knowing the target index immediately yields the physical byte address. However, if records must be searched by an arbitrary string key such as an email address, arrays require an O(n) sequential scan. Sorted arrays and balanced search trees address records by relative ordering, allowing binary navigation in O(log n) comparisons. Hash tables establish the third addressing paradigm: content addressing. Instead of inspecting positions or sorting keys, a mathematical hash function converts the content of the key into an integer array index, accessing arbitrary keys in average O(1) time.',
        bn: 'এই পাঠে আমরা পরীক্ষা করব কীভাবে কম্পিউটার সিস্টেম বিভিন্ন ডেটা কাঠামো জুড়ে তথ্য বা রেকর্ড খুঁজে বের করে। উপাদানগুলো মেমরিতে পরপর সাজানো থাকায় অ্যারে সরাসরি ইনডেক্স ব্যবহার করে ধ্রুব O(1) সময়ে র‍্যান্ডম অ্যাক্সেস নিশ্চিত করতে পারে। কিন্তু যদি ইমেইলের মতো কোনো স্ট্রিং দিয়ে রেকর্ড খুঁজতে হয়, তবে অ্যারেতে পুরো ডেটা O(n) সময়ে একে একে স্ক্যান করতে হয়। সাজানো অ্যারে এবং ব্যালান্সড সার্চ ট্রি উপাদানগুলোর পারস্পরিক ক্রমের ওপর ভিত্তি করে O(log n) তুলনায় অনুসন্ধান চালায়। হ্যাশ টেবিল তৃতীয় আরেকটি পদ্ধতির সূচনা করে: কনটেন্ট অ্যাড্রেসিং বা বিষয়বস্তু-ভিত্তিক ঠিকানা। উপাদানগুলোর অবস্থান খোঁজা বা ক্রম সাজানোর বদলে একটি গাণিতিক হ্যাশ ফাংশন সরাসরি কী-এর ভেতরের উপাত্তকে একটি পূর্ণসংখ্যা অ্যারে ইনডেক্সে রূপান্তরিত করে, যা গড়ে O(1) সময়ে যেকোনো রেকর্ড উদ্ধারের সুযোগ দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Content Addressing',
          def: {
            en: 'Locating records by computing an internal memory offset directly from the key content rather than scanning indices or comparing sorted order.',
            bn: 'ইনডেক্স স্ক্যান করা বা ক্রম তুলনা করার বদলে সরাসরি কী-এর মান থেকে মেমরি অফসেট হিসাব করে রেকর্ড খুঁজে বের করার কৌশল।'
          }
        },
        {
          term: 'Hash Collision',
          def: {
            en: 'An event where two distinct keys evaluate to the exact same bucket index under a given hash function and table capacity.',
            bn: 'একটি পরিস্থিতি যেখানে দুটি ভিন্ন কী কোনো নির্দিষ্ট হ্যাশ ফাংশন এবং ধারণক্ষমতার অধীনে হুবহু একই বাকেট ইনডেক্স তৈরি করে।'
          }
        },
        {
          term: 'Load Factor (α)',
          def: {
            en: 'The ratio of stored key-value entries n to the total bucket capacity m, governing when dynamic tables must trigger resizing.',
            bn: 'টেবিলে সংরক্ষিত মোট উপাদানের সংখ্যা n এবং মোট বাকেট সংখ্যা m এর অনুপাত (n / m), যা টেবিল কখন বড় করতে হবে তা নির্ধারণ করে।'
          }
        },
        {
          term: 'Bitwise Modulo Masking',
          def: {
            en: 'A fast bitwise AND operation (hash & (capacity - 1)) replacing costly integer division when table capacity is a power of 2.',
            bn: 'একটি দ্রুতগতির বিটওয়াইজ AND অপারেশন (hash & (capacity - 1)) যা ধারণক্ষমতা ২ এর ঘাত হলে ধীরগতির ভাগ প্রক্রিয়াকে প্রতিস্থাপন করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'mechanics',
      text: {
        en: 'The Hash Pipeline: Determinism, Pigeonhole Physics, and Buckets',
        bn: 'হ্যাশ কার্যপদ্ধতি: নিশ্চায়ক নীতি, কবুতর-খাঁচা গণিত ও বাকেট বিন্যাস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A hash table operates through a deterministic multi-stage pipeline. In stage one, a hash function transforms an arbitrary input byte sequence into a fixed-width 32-bit unsigned integer. This computation must be strictly deterministic: identical keys must produce identical hash codes across all executions. In stage two, the large integer is reduced to fit within the table capacity m using a modulo operation or bitwise mask. In stage three, the record is placed into the corresponding bucket. Because the universe of possible string keys is effectively infinite while array capacity is finite, the pigeonhole principle proves that collisions are mathematically unavoidable. Professional systems never attempt to eliminate collisions entirely; rather, they implement robust collision resolution strategies such as separate chaining or open addressing.',
        bn: 'একটি হ্যাশ টেবিল সুনির্দিষ্ট ধারাবাহিক প্রক্রিয়ার মাধ্যমে কাজ পরিচালনা করে। প্রথম ধাপে একটি হ্যাশ ফাংশন যেকোনো ইনপুট বাইট সিকোয়েন্সকে একটি নির্দিষ্ট ৩২-বিট আনসাইন্ড পূর্ণসংখ্যায় রূপান্তরিত করে। এই গণনাটি নিশ্চিতভাবে ডিটারমিনিস্টিক হতে হবে: একই চাবি প্রতিবার চালালে সর্বদা অভিন্ন হ্যাশ কোড তৈরি হতে হবে। দ্বিতীয় ধাপে মডুলো অপারেশন বা বিটওয়াইজ মাস্ক ব্যবহার করে সেই বড় পূর্ণসংখ্যাকে টেবিলের ধারণক্ষমতা m এর পরিসীমায় নামিয়ে আনা হয়। তৃতীয় ধাপে রেকর্ডটিকে সংশ্লিষ্ট বাকেটে সংরক্ষণ করা হয়। যেহেতু সম্ভাব্য সব স্ট্রিং কী-এর জগৎ প্রায় অসীম কিন্তু মেমরির বাকেট সংখ্যা সীমিত, তাই কবুতর-খাঁচা বা পিজনহোল নীতি অনুযায়ী সংঘর্ষ ঘটা অবশ্যম্ভাবী। পেশাদার ইঞ্জিনিয়ারিংয়ে সংঘর্ষ সম্পূর্ণ দূর করার চেষ্টা করা হয় না; বরং সেপারেট চেইনিং বা ওপেন অ্যাড্রেসিংয়ের মতো নির্ভরযোগ্য সমাধানের মাধ্যমে সংঘর্ষ সুশৃঙ্খলভাবে সামলানো হয়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'simple-hash-map.ts',
      caption: {
        en: 'Complete TypeScript hash map with FNV-1a hashing, bitwise masking, and dynamic resizing.',
        bn: 'FNV-1a হ্যাশিং, বিটওয়াইজ মাস্কিং এবং ডাইনামিক রিসাইজ সহ সম্পূর্ণ টাইপস্ক্রিপ্ট হ্যাশ ম্যাপ।'
      },
      code: `function fnv1a(str: string): number {
  let hash = 2166136261; // 32-bit FNV offset basis
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 16777619); // FNV 32-bit prime
  }
  return hash >>> 0; // Ensure unsigned 32-bit integer
}

interface Entry<V> {
  key: string;
  value: V;
}

export class SimpleHashMap<V> {
  private buckets: Entry<V>[][];
  public capacity: number;
  public size: number = 0;

  constructor(initialCapacity: number = 4) {
    this.capacity = initialCapacity;
    this.buckets = Array.from({ length: this.capacity }, () => []);
  }

  private getSlot(key: string): number {
    // Power-of-two bitwise mask replaces expensive modulo division
    return fnv1a(key) & (this.capacity - 1);
  }

  public set(key: string, value: V): void {
    // Check load factor before insertion: resize if (size + 1) / capacity > 0.75
    if ((this.size + 1) / this.capacity > 0.75) {
      this.resize(this.capacity * 2);
    }

    const slot = this.getSlot(key);
    const bucket = this.buckets[slot];

    for (const entry of bucket) {
      if (entry.key === key) {
        entry.value = value; // Key already exists: update value in place
        return;
      }
    }

    bucket.push({ key, value }); // Insert new entry into bucket chain
    this.size++;
  }

  public get(key: string): V | undefined {
    const slot = this.getSlot(key);
    const bucket = this.buckets[slot];

    for (const entry of bucket) {
      if (entry.key === key) {
        return entry.value; // Found matching key
      }
    }
    return undefined; // Key not present in bucket
  }

  private resize(newCapacity: number): void {
    const oldBuckets = this.buckets;
    this.capacity = newCapacity;
    this.buckets = Array.from({ length: this.capacity }, () => []);
    this.size = 0;

    // Rehash every existing key into the newly expanded bucket array
    for (const bucket of oldBuckets) {
      for (const entry of bucket) {
        this.set(entry.key, entry.value);
      }
    }
  }
}`
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Execution Trace: Load Factor Monitoring and Table Doubling',
        bn: 'এক্সিকিউশন ট্রেস: লোড ফ্যাক্টর পর্যবেক্ষণ ও দ্বিগুণ বিস্তার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We trace our hash map implementation initialized with 4 slots. We insert alpha (lands at slot 3, load factor 0.25), beta (lands at slot 3, load factor 0.50), and gamma (lands at slot 2, load factor 0.75). When inserting delta, candidate load factor 1.0 exceeds threshold 0.75, triggering an immediate doubling to 8 slots. During rehashing, existing entries redistribute across 8 buckets: alpha stays at slot 3, beta relocates to slot 7, gamma stays at slot 2, delta lands at slot 1, and epsilon lands at slot 5. Subsequent lookups for alpha and beta succeed in 1 comparison, while searching for missing key omega inspects slot 0 and returns undefined.',
        bn: 'আমরা ৪টি স্লট দিয়ে শুরু হওয়া হ্যাশ ম্যাপের বাস্তব এক্সিকিউশন ট্রেস পর্যবেক্ষণ করি। আমরা alpha সন্নিবেশ করি (স্লট ৩ এ যায়, লোড ফ্যাক্টর ০.২৫), এরপর beta (স্লট ৩ এ যায়, লোড ফ্যাক্টর ০.৫০), এবং gamma (স্লট ২ এ যায়, লোড ফ্যাক্টর ০.৭৫)। যখন delta যোগ করা হয়, তখন সম্ভাব্য লোড ফ্যাক্টর ১.০ পূর্বনির্ধারিত সীমা ০.৭৫ অতিক্রম করে, যা তাৎক্ষণিকভাবে বাকেটের সংখ্যা দ্বিগুণ করে ৮ এ উন্নীত করে। পুনঃহ্যাশিংয়ের সময় উপাদানগুলো ৮টি বাকেটে পুনর্বন্টিত হয়: alpha থাকে স্লট ৩ এ, beta স্থানান্তরিত হয়ে যায় স্লট ৭ এ, gamma থাকে স্লট ২ এ, delta যায় স্লট ১ এ, এবং epsilon যায় স্লট ৫ এ। পরবর্তীতে alpha এবং beta এর অনুসন্ধান মাত্র ১টি তুলনায় সম্পন্ন হয়, যেখানে অনুপস্থিত কী omega স্লট ০ পরীক্ষা করে নিশ্চিতভাবে আনডিফাইন্ড ফেরত দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'trace-execution.ts',
      caption: {
        en: 'Measured bucket distribution, resize trigger, and lookup comparison counts.',
        bn: 'বাকেট বণ্টন, রিসাইজ সক্রিয়করণ এবং অনুসন্ধানের তুলনার বাস্তব পরিমাপ।'
      },
      code: `// Initial table configuration: capacity = 4, threshold = 0.75
// Insert alpha   -> hash: 1569418667 & 3 = slot 3 (size=1, cap=4, load=0.25)
// Insert beta    -> hash: 2944525511 & 3 = slot 3 (size=2, cap=4, load=0.50) [collision chain!]
// Insert gamma   -> hash: 3492353034 & 3 = slot 2 (size=3, cap=4, load=0.75)

// Insert delta   -> (size + 1)/cap = 4/4 = 1.0 > 0.75 -> RESIZE TRIGGERED!
// Table capacity doubled from 4 to 8. All existing keys rehashed with mask 7:
// alpha   -> hash & 7 = slot 3 (unchanged)
// beta    -> hash & 7 = slot 7 (relocated: 3 + 4 = 7!)
// gamma   -> hash & 7 = slot 2 (unchanged)
// delta   -> hash & 7 = slot 1 (size=4, cap=8, load=0.50)
// Insert epsilon -> hash: 4272119581 & 7 = slot 5 (size=5, cap=8, load=0.625)

// Operational verification:
// get("alpha") -> inspects slot 3 -> 1 comparison -> 'First' (Found!)
// get("beta")  -> inspects slot 7 -> 1 comparison -> 'Second' (Found!)
// get("omega") -> inspects slot 0 -> 0 entries    -> undefined (Absent!)`
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'Visualizing Buckets, Chains, and Resizing Rescue',
        bn: 'বাকেট, চেইনিং ও রিসাইজ উদ্ধারের ভিজ্যুয়ালাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'ht'
    },
    {
      type: 'heading',
      id: 'amortization',
      text: {
        en: 'Amortized Cost Analysis and the Immutable Key Contract',
        bn: 'অ্যামর্টাইজড ব্যয় বিশ্লেষণ এবং অপরিবর্তনীয় কী-এর চুক্তি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Resizing an entire hash table requires allocating a new bucket array and rehashing all n entries, consuming O(n) computational time. Despite this occasional expensive operation, hash table insertions maintain an amortized constant time of O(1). Under the accounting method, each routine insertion pays 3 cost credits. Credit 1 covers the immediate bucket write. Credit 2 prepays copying this element during the next doubling. Credit 3 prepays copying an older element whose initial credit was exhausted. Because capacity doubles exponentially across 4, 8, 16, 32, 64 slots, resizes occur with decreasing frequency. However, this entire O(1) mathematical guarantee depends on one inviolable rule: the immutable key contract. If a program mutates an object property after inserting it as a key, its hash code changes. Future lookups evaluate the new hash and inspect the wrong bucket, rendering the stored record permanently lost.',
        bn: 'একটি সম্পূর্ণ হ্যাশ টেবিল রিসাইজ করতে নতুন বাকেট অ্যারে তৈরি এবং সব n উপাদানকে পুনরায় হ্যাশ করতে হয়, যা O(n) কম্পিউটেশনাল সময় ব্যয় করে। মাঝে মাঝে এই ব্যয়বহুল অপারেশন ঘটা সত্ত্বেও হ্যাশ টেবিলে উপাদান সন্নিবেশের অ্যামর্টাইজড জটিলতা সর্বদা ধ্রুব O(1) থাকে। অ্যাকাউন্টিং পদ্ধতির অধীনে প্রতিটি সাধারণ সন্নিবেশ ৩টি কস্ট ক্রেডিট প্রদান করে। ক্রেডিট ১ তাৎক্ষণিক লেখার খরচ মেটায়। ক্রেডিট ২ পরবর্তী দ্বিগুণ করার সময় এই উপাদানটির কপি খরচ মেটায়। ক্রেডিট ৩ পূর্বে থাকা একটি উপাদানের কপি খরচ মেটায় যার ক্রেডিট ফুরিয়ে গেছে। যেহেতু ধারণক্ষমতা সূচকীয় হারে ৪, ৮, ১৬, ৩২, ৬৪ স্লট আকারে দ্বিগুণ হয়, তাই রিসাইজ ঘটার ব্যবধানও ক্রমশ দীর্ঘ হয়। তবে এই সম্পূর্ণ O(1) গাণিতিক নিশ্চয়তা একটি অপরিবর্তনীয় নিয়মের ওপর প্রতিষ্ঠিত: ইমিউটেবল কী চুক্তি। কোনো অবজেক্টকে কী হিসেবে ব্যবহারের পর যদি তার অভ্যন্তরীণ প্রোপার্টি পরিবর্তন করা হয়, তবে তার হ্যাশ কোড বদলে যায়। ফলে পরবর্তী অনুসন্ধানে নতুন হ্যাশ হিসাব করে ভুল বাকেট খোঁজা হয় এবং সংরক্ষিত রেকর্ডটি মেমরিতে চিরতরে হারিয়ে যায়।'
      }
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: {
        en: 'The Mutable Key Memory Leak Trap',
        bn: 'পরিবর্তনশীল কী দ্বারা মেমরি হারানোর ফাঁদ'
      },
      text: {
        en: 'Never use mutable objects as hash table keys. If an object property that contributes to its hash code is modified after insertion, map.has() and map.get() will inspect a different bucket and report false, creating un-deletable ghost records and silent memory leaks.',
        bn: 'কখনোই পরিবর্তনশীল অবজেক্টকে হ্যাশ টেবিলের কী হিসেবে ব্যবহার করবেন না। যে প্রোপার্টির ওপর হ্যাশ কোড নির্ভর করে তা যদি যোগ করার পর পরিবর্তিত হয়, তবে map.has() বা map.get() ভিন্ন বাকেট পরীক্ষা করে মিথ্যা ফলাফল দেবে, যার ফলে টেবিল থেকে উপাদান আর কখনো মোছা যাবে না এবং নীরব মেমরি লিক তৈরি হবে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison',
      text: {
        en: 'Architectural Trade-Off Matrix: Array vs Tree vs Hash Table',
        bn: 'আর্কিটেকচারাল ট্রেড-অফ ম্যাট্রিক্স: অ্যারে বনাম ট্রি বনাম হ্যাশ টেবিল'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Data Structure', bn: 'ডেটা কাঠামো' },
        { en: 'Access by Key (Average)', bn: 'কী দ্বারা সন্ধান (গড়)' },
        { en: 'Access by Key (Worst)', bn: 'কী দ্বারা সন্ধান (ওর্য়াস্ট)' },
        { en: 'Ordered Range Queries', bn: 'ক্রমানুসারে রেঞ্জ কোয়েরি' },
        { en: 'Memory Overhead', bn: 'মেমরি ওভারহেড' }
      ],
      rows: [
        [
          { en: 'Unordered Array', bn: 'অগোছালো অ্যারে' },
          { en: 'O(n) linear scan', bn: 'O(n) লিনিয়ার স্ক্যান' },
          { en: 'O(n)', bn: 'O(n)' },
          { en: 'Requires O(n log n) sort', bn: 'O(n log n) সর্ট প্রয়োজন' },
          { en: 'Zero overhead (pure contiguous)', bn: 'শূন্য ওভারহেড (সম্পূর্ণ সংলগ্ন)' }
        ],
        [
          { en: 'Balanced Search Tree', bn: 'ব্যালান্সড সার্চ ট্রি' },
          { en: 'O(log n) tree traversal', bn: 'O(log n) ট্রি ট্রাভার্সাল' },
          { en: 'O(log n) guaranteed', bn: 'O(log n) নিশ্চিত' },
          { en: 'O(log n + k) optimal in-order', bn: 'O(log n + k) সর্বোত্তম ইন-অর্ডার' },
          { en: 'High (2 child pointers per node)', bn: 'উচ্চ (নোডপ্রতি ২টি চাইল্ড পয়েন্টার)' }
        ],
        [
          { en: 'Hash Table (Chaining)', bn: 'হ্যাশ টেবিল (চেইনিং)' },
          { en: 'O(1) constant time', bn: 'O(1) ধ্রুব সময়' },
          { en: 'O(n) if all keys collide', bn: 'O(n) সব কী সংঘর্ষে জড়ালে' },
          { en: 'Unsupported (O(n log n) re-sort)', bn: 'অসমর্থিত (O(n log n) সর্ট লাগে)' },
          { en: 'Moderate (bucket array + chain nodes)', bn: 'মাঝারি (বাকেট অ্যারে + চেইন নোড)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'applications',
      text: {
        en: 'Industrial System Applications of Content Addressing',
        bn: 'কনটেন্ট অ্যাড্রেসিংয়ের শিল্পপর্যায়ের সিস্টেম প্রয়োগ'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'In-Memory Cache Stores: Systems like Redis and Memcached use hash tables as their primary storage engine to deliver sub-millisecond key-value lookups.',
          bn: 'ইন-মেমরি ক্যাশ স্টোর: Redis এবং Memcached এর মতো সিস্টেমগুলো সাব-মিলিসেকেন্ডে কী-ভ্যালু কোয়েরি সম্পন্ন করতে তাদের প্রধান স্টোরেজ ইঞ্জিন হিসেবে হ্যাশ টেবিল ব্যবহার করে।'
        },
        {
          en: 'Database Query Hash Joins: Relational databases build an in-memory hash table on the smaller table to join millions of relational rows in a single linear pass.',
          bn: 'ডেটাবেস কোয়েরি হ্যাশ জয়েন: রিলেশনাল ডেটাবেস ইঞ্জিনগুলো ছোট টেবিলটির ওপর একটি ইন-মেমরি হ্যাশ টেবিল তৈরি করে একক লিনিয়ার পাসে লক্ষ লক্ষ সারি জয়েন করে।'
        },
        {
          en: 'Compiler and Interpreter Symbol Tables: Compilers maintain scope symbol tables mapping variable names to memory addresses and type signatures in constant time.',
          bn: 'কম্পাইলার ও ইন্টারপ্রেটার সিম্বল টেবিল: কম্পাইলার ভেরিয়েবলের নামকে মেমরি অ্যাড্রেস এবং টাইপ সিগনেচারের সাথে সংযুক্ত রাখতে ধ্রুব সময়ে সিম্বল টেবিল পরিচালনা করে।'
        },
        {
          en: 'Distributed Hash Tables (DHTs): Peer-to-peer networks and distributed object stores use consistent hashing to partition file shards across dynamic server clusters.',
          bn: 'ডিস্ট্রিবিউটেড হ্যাশ টেবিল (DHT): পিয়ার-টু-পিয়ার নেটওয়ার্ক এবং ক্লাউড অবজেক্ট স্টোরগুলো পরিবর্তনশীল সার্ভার ক্লাস্টারে ফাইল শেয়ার করতে কনসিস্টেন্ট হ্যাশিং ব্যবহার করে।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'hash-disasters',
    tech: 'hashtables',
    title: {
      en: 'Hash Disasters: HashDOS, Mutable Keys & Adversarial Meltdowns',
      bn: 'হ্যাশ বিপর্যয়: হ্যাশডস, পরিবর্তনশীল কী ও প্রতিকূল আক্রমণের ঝুঁকি'
    }
  },
  exercises: [
    {
      id: 'ht-ex1',
      kind: 'mcq',
      topic: 'hash table addressing',
      question: {
        en: 'How does a hash table achieve average O(1) retrieval speed for arbitrary string keys?',
        bn: 'যেকোনো স্ট্রিং কী-এর ক্ষেত্রে একটি হ্যাশ টেবিল কীভাবে গড়ে O(1) গতিতে ডেটা পুনরুদ্ধার নিশ্চিত করে?'
      },
      options: [
        {
          en: 'A mathematical hash function deterministically computes an integer bucket index from the key, avoiding sequential scans or comparisons',
          bn: 'একটি গাণিতিক হ্যাশ ফাংশন কী থেকে সরাসরি একটি পূর্ণসংখ্যা বাকেট ইনডেক্স হিসাব করে, যা যেকোনো ধারাবাহিক স্ক্যান বা তুলনা পরিহার করে'
        },
        {
          en: 'The operating system kernel sorts the array in the background using idle CPU threads',
          bn: 'অপারেটিং সিস্টেম কার্নেল ব্যাকগ্রাউন্ডে অলস সিপিইউ থ্রেড ব্যবহার করে অ্যারেকে সাজিয়ে রাখে'
        },
        {
          en: 'The CPU branch predictor caches every possible string combination in L1 instruction memory',
          bn: 'সিপিইউ ব্রাঞ্চ প্রেডিক্টর L1 ইনস্ট্রাকশন মেমরিতে সম্ভাব্য প্রতিটি স্ট্রিংয়ের সমন্বয় ক্যাশ করে রাখে'
        },
        {
          en: 'Keys are converted into floating-point numbers and searched using binary interpolation',
          bn: 'কী-গুলোকে ফ্লোটিং-পয়েন্ট সংখ্যায় রূপান্তর করে বাইনারি ইন্টারপোলেশনের সাহায্যে সন্ধান করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about content addressing: the data itself computes its own destination.',
        bn: 'কনটেন্ট অ্যাড্রেসিংয়ের কথা ভাবুন: উপাত্ত নিজেই তার গন্তব্য বাকেট হিসাব করে নেয়।'
      },
      explanation: {
        en: 'Hash tables eliminate search loops by computing the memory slot directly from the key bytes in O(k) time where k is key length, achieving O(1) with respect to collection size n.',
        bn: 'হ্যাশ টেবিল সরাসরি কী-এর বাইট থেকে মেমরি স্লট হিসাব করে অনুসন্ধান লুপ সম্পূর্ণ পরিহার করে, যার ফলে সংগ্রহে থাকা উপাদানের সংখ্যা n এর সাপেক্ষে এর সময় ধ্রুব O(1) থাকে।'
      }
    },
    {
      id: 'ht-ex2',
      kind: 'mcq',
      topic: 'collision necessity',
      question: {
        en: 'Why is it mathematically impossible to design a general hash function that prevents all collisions?',
        bn: 'যেকোনো সাধারণ হ্যাশ ফাংশনের ক্ষেত্রে সব ধরনের সংঘর্ষ প্রতিরোধ করা কেন গাণিতিকভাবে অসম্ভব?'
      },
      options: [
        {
          en: 'The pigeonhole principle dictates that mapping an unbounded domain of keys into a finite range of table buckets guarantees collisions',
          bn: 'কবুতর-খাঁচা বা পিজনহোল নীতি নির্দেশ করে যে অসীম সংখ্যক সম্ভাব্য কী-কে সীমিত বাকেটে রূপান্তর করলে সংঘর্ষ অনিবার্য'
        },
        {
          en: 'Computer memory chips lack hardware support for 64-bit integer division operations',
          bn: 'কম্পিউটার মেমরি চিপে ৬৪-বিট পূর্ণসংখ্যা ভাগ অপারেশনের কোনো হার্ডওয়্যার সমর্থন নেই'
        },
        {
          en: 'Unicode string encoders introduce random bit errors during string hashing routines',
          bn: 'ইউনিকোড স্ট্রিং এনকোডার স্ট্রিং হ্যাশিংয়ের সময় অপ্রত্যাশিত বিট ত্রুটি তৈরি করে'
        },
        {
          en: 'The V8 JavaScript engine caps hash table capacities at 1024 total elements',
          bn: 'V8 জাভাস্ক্রিপ্ট ইঞ্জিন হ্যাশ টেবিলের সর্বোচ্চ ধারণক্ষমতা ১০২৪ উপাদানে সীমাবদ্ধ রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If you have more pigeons than pigeonholes, at least one hole must hold multiple birds.',
        bn: 'খাঁচার চেয়ে কবুতরের সংখ্যা বেশি হলে অন্তত একটি খাঁচায় একাধিক কবুতর বসতে বাধ্য।'
      },
      explanation: {
        en: 'Because the set of possible keys is infinitely larger than any finite table capacity m, multiple distinct keys must evaluate to the same bucket index. Robust systems handle collisions by design.',
        bn: 'যেহেতু সম্ভাব্য চাবির সংখ্যা যেকোনো সীমিত ধারণক্ষমতা m এর চেয়ে অনেক বেশি, তাই একাধিক ভিন্ন চাবি একই ইনডেক্সে পড়তে বাধ্য। নির্ভরযোগ্য সিস্টেমগুলো তাই সংঘর্ষ সুশৃঙ্খলভাবে সামলানোর নকশা নিয়েই তৈরি হয়।'
      }
    },
    {
      id: 'ht-ex3',
      kind: 'predict',
      topic: 'load factor threshold',
      question: {
        en: 'A hash table with capacity 8 currently holds 6 elements. If the load factor resize threshold is 0.75, what happens when a 7th element is inserted?',
        bn: 'মোট ৮ ধারণক্ষমতার একটি হ্যাশ টেবিলে বর্তমানে ৬টি উপাদান রয়েছে। যদি লোড ফ্যাক্টর রিসাইজ সীমা ০.৭৫ হয়, তবে ৭ম উপাদানটি যোগ করার সময় কী ঘটবে?'
      },
      options: [
        {
          en: 'Candidate load factor (6 + 1) / 8 = 0.875 exceeds 0.75, triggering capacity doubling from 8 to 16 buckets and rehashing existing entries',
          bn: 'সম্ভাব্য লোড ফ্যাক্টর (৬ + ১) / ৮ = ০.৮৭৫ সীমা ০.৭৫ অতিক্রম করে, ফলে ধারণক্ষমতা ৮ থেকে দ্বিগুণ হয়ে ১৬ হয় এবং বিদ্যমান উপাদানগুলো পুনঃহ্যাশ হয়'
        },
        {
          en: 'The table throws an out-of-memory exception and rejects the 7th element',
          bn: 'টেবিলটি একটি আউট-অব-মেমরি এক্সেপশন ছুড়ে দেয় এবং ৭ম উপাদানটি প্রত্যাখ্যান করে'
        },
        {
          en: 'The table switches permanently to an AVL binary search tree without changing size',
          bn: 'টেবিলটি আকার পরিবর্তন না করেই স্থায়ীভাবে একটি AVL বাইনারি সার্চ ট্রিতে রূপান্তরিত হয়'
        },
        {
          en: 'The 7th element is silently discarded to preserve O(1) performance bounds',
          bn: 'O(1) কার্যক্ষমতা বজায় রাখতে ৭ম উপাদানটিকে নীরবে বাদ দেওয়া হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Calculate the load factor after adding the new element: 7 divided by 8.',
        bn: 'নতুন উপাদানটি যোগ করার পর লোড ফ্যাক্টর হিসাব করুন: ৭ কে ৮ দিয়ে ভাগ করুন।'
      },
      explanation: {
        en: 'When the load factor exceeds threshold 0.75, the table doubles its capacity to 16 slots and rehashes all elements. This keeps bucket chains short, preserving O(1) average lookup time.',
        bn: 'লোড ফ্যাক্টর ০.৭৫ সীমা অতিক্রম করলে টেবিলটি তার ধারণক্ষমতা দ্বিগুণ করে ১৬ স্লটে উন্নীত করে এবং সব উপাদানকে পুনরায় হ্যাশ করে। এটি চেইনের দৈর্ঘ্য ছোট রেখে গড় O(1) সময় বজায় রাখে।'
      }
    },
    {
      id: 'ht-ex4',
      kind: 'mcq',
      topic: 'immutable key contract',
      question: {
        en: 'Why is modifying an object key after storing it in a hash table considered a critical bug?',
        bn: 'হ্যাশ টেবিলে সংরক্ষণের পর কোনো অবজেক্ট কী-এর মান পরিবর্তন করাকে কেন একটি মারাত্মক বাগ হিসেবে বিবেচনা করা হয়?'
      },
      options: [
        {
          en: 'The mutated object yields a different hash code, causing future get() operations to look in the wrong bucket and fail to find the stored entry',
          bn: 'পরিবর্তিত অবজেক্টটি ভিন্ন হ্যাশ কোড তৈরি করে, যার ফলে পরবর্তী get() অপারেশন ভুল বাকেটে অনুসন্ধান চালায় এবং সংরক্ষিত ডেটা খুঁজে পেতে ব্যর্থ হয়'
        },
        {
          en: 'The garbage collector immediately frees the memory of any mutated object in the heap',
          bn: 'হিপে কোনো অবজেক্ট পরিবর্তিত হওয়া মাত্রই গার্বেজ কালেক্টর তাৎক্ষণিকভাবে তার মেমরি খালি করে দেয়'
        },
        {
          en: 'JavaScript engines trigger an immediate fatal process abort when object properties change inside a map',
          bn: 'ম্যাপের ভেতরে থাকা অবজেক্ট প্রোপার্টি পরিবর্তিত হলে জাভাস্ক্রিপ্ট ইঞ্জিন সাথে সাথে ফ্যাটাল প্রসেস স্থগিত করে'
        },
        {
          en: 'The table reverses its bitwise mask to prevent hardware bus cache lines from overflowing',
          bn: 'হার্ডওয়্যার বাস ক্যাশ লাইন ওভারফ্লো হওয়া রোধ করতে টেবিলটি তার বিটওয়াইজ মাস্ক উল্টে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The slot is calculated from the hash. If the hash changes, where will the lookup look?',
        bn: 'স্লটটি হ্যাশ কোড থেকে হিসাব করা হয়। হ্যাশ পরিবর্তিত হলে অনুসন্ধানটি কোথায় খুঁজবে?'
      },
      explanation: {
        en: 'Hash tables locate entries using the key hash at lookup time. If the key has mutated, the newly computed bucket differs from the original bucket where the entry was stored, creating an unreachable ghost record.',
        bn: 'হ্যাশ টেবিল অনুসন্ধানের সময় কী-এর তৎকালীন হ্যাশ ব্যবহার করে বাকেট নির্ধারণ করে। কী পরিবর্তিত হলে নতুন হিসাবকৃত বাকেট আগের সংরক্ষণকৃত বাকেটের সাথে মেলে না, ফলে রেকর্ডটি মেমরিতে অপাঠ্য ভূতের মতো আটকা পড়ে থাকে।'
      }
    }
  ],
  quiz: {
    id: 'ht-quiz',
    title: {
      en: 'Hash Table Foundations Quiz',
      bn: 'হ্যাশ টেবিলের ভিত্তি কুইজ'
    },
    questions: [
      {
        id: 'htq1',
        kind: 'mcq',
        topic: 'bitwise modulo mask',
        question: {
          en: 'Why do high-performance hash tables restrict capacity m to a power of 2?',
          bn: 'উচ্চক্ষমতাসম্পন্ন হ্যাশ টেবিলগুলো কেন ধারণক্ষমতা m কে সর্বদা ২ এর ঘাত হিসেবে সীমাবদ্ধ রাখে?'
        },
        options: [
          {
            en: 'It enables single-cycle bitwise masking (hash & (m - 1)) to replace multi-cycle integer division instructions',
            bn: 'এটি ধীরগতির বহু-চক্রের পূর্ণসংখ্যা ভাগ নির্দেশের বদলে একক-চক্রের দ্রুতগতির বিটওয়াইজ মাস্কিং (hash & (m - 1)) ব্যবহারের সুযোগ দেয়'
          },
          {
            en: 'Power-of-two capacities prevent the operating system kernel from allocating virtual memory pages',
            bn: '২ এর ঘাত বিশিষ্ট ধারণক্ষমতা অপারেটিং সিস্টেম কার্নেলকে ভার্চুয়াল মেমরি পেজ বরাদ্দে বাধা দেয়'
          },
          {
            en: 'Non-power-of-two capacities crash CPU instruction decoders on 64-bit architectures',
            bn: '২ এর ঘাত ছাড়া অন্য কোনো আকার ৬৪-বিট আর্কিটেকচারে সিপিইউ ইনস্ট্রাকশন ডিকোডার ক্র্যাশ করায়'
          },
          {
            en: 'It prevents hash collisions from occurring on string keys longer than 8 bytes',
            bn: 'এটি ৮ বাইটের চেয়ে দীর্ঘ স্ট্রিং কী-এর ক্ষেত্রে যেকোনো হ্যাশ সংঘর্ষ ঘটা প্রতিরোধ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Integer division (idiv) takes 15 to 40 CPU cycles. Bitwise AND takes 1 cycle.',
          bn: 'পূর্ণসংখ্যা ভাগ (idiv) করতে ১৫ থেকে ৪০ সিপিইউ চক্র লাগে, যেখানে বিটওয়াইজ AND অপারেশনে মাত্র ১ চক্র লাগে।'
        },
        explanation: {
          en: 'When capacity m is a power of 2, m - 1 is a binary mask of all 1s. Performing hash & (m - 1) retains the lowest bits in a single CPU cycle, completely avoiding expensive integer division.',
          bn: 'ধারণক্ষমতা m যখন ২ এর ঘাত হয়, তখন m - ১ হলো সম্পূর্ণ ১ দিয়ে গঠিত একটি বাইনারি মাস্ক। hash & (m - ১) পরিচালনা করলে মাত্র ১ সিপিইউ চক্রে নিচের বিটগুলো সংরক্ষিত হয় এবং ধীরগতির ভাগ প্রক্রিয়া এড়ানো যায়।'
        }
      },
      {
        id: 'htq2',
        kind: 'mcq',
        topic: 'amortized resize complexity',
        question: {
          en: 'Why is the insertion complexity of a dynamic hash table characterized as amortized O(1) despite O(n) table doubling?',
          bn: 'টেবিল দ্বিগুণ করতে O(n) সময় লাগা সত্ত্বেও কেন ডাইনামিক হ্যাশ টেবিলে উপাদান যোগ করার সময়কে অ্যামর্টাইজড O(1) বলা হয়?'
        },
        options: [
          {
            en: 'The expensive O(n) doubling occurs exponentially infrequently, so the total work over n inserts remains bounded by 3 * n operations',
            bn: 'ব্যয়বহুল O(n) দ্বিগুণ প্রক্রিয়া সূচকীয়ভাবে দীর্ঘ বিরতিতে ঘটে, ফলে n সংখ্যক ইনসার্টের মোট কাজ সর্বদা ৩ * n অপারেশনের মধ্যে সীমাবদ্ধ থাকে'
          },
          {
            en: 'Modern solid-state drives duplicate array buckets in zero CPU clock cycles',
            bn: 'আধুনিক সলিড-স্টেট ড্রাইভ কোনো সিপিইউ ক্লক চক্র ব্যয় না করেই তাৎক্ষণিক বাকেট দ্বিগুণ করতে পারে'
          },
          {
            en: 'The compiler moves the table resize logic to the client browser thread pool',
            bn: 'কম্পাইলার টেবিল রিসাইজের লজিকটিকে ক্লায়েন্ট ব্রাউজারের থ্রেড পুলে স্থানান্তর করে'
          },
          {
            en: 'Only the first element ever triggers a table resize in production runtimes',
            bn: 'প্রোডাকশন রানটাইমে কেবল প্রথম উপাদানটিই জীবনে একবার টেবিল রিসাইজ সক্রিয় করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider the accounting credit method: each cheap insert prepays future copying work.',
          bn: 'অ্যাকাউন্টিং ক্রেডিট পদ্ধতির কথা ভাবুন: প্রতিটি সস্তা ইনসার্ট ভবিষ্যতের কপি কাজের খরচ অগ্রিম পরিশোধ করে।'
        },
        explanation: {
          en: 'By doubling capacity, a table that grows from n to 2n elements performs n cheap O(1) writes before the next resize. Spreading the O(n) relocation cost across these n operations yields an average of 3 operations per insert, which is O(1).',
          bn: 'ধারণক্ষমতা দ্বিগুণ করার মাধ্যমে n থেকে ২n উপাদানে পৌঁছাতে টেবিলটি পরবর্তী রিসাইজের আগে n সংখ্যক সস্তা O(1) অপারেশন সম্পন্ন করে। n সংখ্যক অপারেশনের মধ্যে O(n) কপি খরচ ভাগ করে দিলে ইনসার্টপ্রতি গড়ে মাত্র ৩টি অপারেশন লাগে, যা ধ্রুব O(1)।'
        }
      },
      {
        id: 'htq3',
        kind: 'predict',
        topic: 'deterministic hashing contract',
        question: {
          en: 'If a custom hashCode() implementation returns Math.random() for each call, what happens during map.get(key)?',
          bn: 'যদি কোনো কাস্টম hashCode() বাস্তবায়ন প্রতি কলেই Math.random() ফেরত দেয়, তবে map.get(key) চালানোর সময় কী ঘটবে?'
        },
        options: [
          {
            en: 'The lookup evaluates a completely different bucket index than the one used during set(), failing to find the existing key and returning undefined',
            bn: 'অনুসন্ধানটি set() এর সময় ব্যবহৃত বাকেটের চেয়ে সম্পূর্ণ ভিন্ন একটি বাকেট ইনডেক্স তৈরি করবে, ফলে বিদ্যমান কী খুঁজে না পেয়ে আনডিফাইন্ড ফেরত দেবে'
          },
          {
            en: 'The JavaScript runtime automatically caches the first random integer in the global execution context',
            bn: 'জাভাস্ক্রিপ্ট রানটাইম স্বয়ংক্রিয়ভাবে প্রথম র‍্যান্ডম সংখ্যাটি গ্লোবাল এক্সেকিউশন কনটেক্সটে ক্যাশ করে রাখবে'
          },
          {
            en: 'The hash map automatically falls back to binary search across all buckets',
            bn: 'হ্যাশ ম্যাপটি স্বয়ংক্রিয়ভাবে সব বাকেট জুড়ে বাইনারি সার্চে রূপ নেবে'
          },
          {
            en: 'The table rejects the random number and generates a sequential integer counter instead',
            bn: 'টেবিলটি র‍্যান্ডম সংখ্যা প্রত্যাখ্যান করে তার বদলে একটি ক্রমিক সংখ্যা কাউন্টার তৈরি করবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A hash function must be deterministic: identical input must produce identical output.',
          bn: 'হ্যাশ ফাংশনকে অবশ্যই ডিটারমিনিস্টিক হতে হবে: একই ইনপুট থেকে প্রতিবার একই আউটপুট আসতে হবে।'
        },
        explanation: {
          en: 'Determinism is the foundational invariant of hash tables. If hashing produces non-deterministic values, the slot computed at retrieval time will not match the slot where the record was stored.',
          bn: 'ডিটারমিনিজম হলো হ্যাশ টেবিলের সবচেয়ে মৌলিক শর্ত। হ্যাশিং যদি অনিয়মিত মান তৈরি করে, তবে অনুসন্ধানের সময় হিসাবকৃত স্লটের সাথে সংরক্ষিত স্লটের কোনো মিল থাকবে না।'
        }
      },
      {
        id: 'htq4',
        kind: 'mcq',
        topic: 'worst case degradation',
        question: {
          en: 'Under what conditions does a separate chaining hash table degrade from average O(1) to worst-case O(n) performance?',
          bn: 'কোন পরিস্থিতিতে একটি সেপারেট চেইনিং হ্যাশ টেবিল গড় O(1) থেকে নেমে সবচেয়ে খারাপ O(n) কর্মক্ষমতায় অবনমিত হয়?'
        },
        options: [
          {
            en: 'When a pathological or adversarial hash collision causes all n inserted keys to hash to the exact same bucket, degenerating into a single linked list',
            bn: 'যখন কোনো ত্রুটিপূর্ণ বা পরিকল্পিত আক্রমণের কারণে সব n সংখ্যক কী হুবহু একই বাকেটে গিয়ে পড়ে এবং একটি একক লিঙ্কড লিস্টে রূপ নেয়'
          },
          {
            en: 'When the operating system runs out of swap space during garbage collection cycles',
            bn: 'যখন গার্বেজ কালেকশন চক্রের সময় অপারেটিং সিস্টেমের সোয়াপ স্পেস শেষ হয়ে যায়'
          },
          {
            en: 'When the load factor drops below 0.10 in a read-heavy microservice environment',
            bn: 'যখন রিড-প্রধান মাইক্রোসার্ভিস পরিবেশে লোড ফ্যাক্টর ০.১০ এর নিচে নেমে যায়'
          },
          {
            en: 'When string keys contain Unicode emojis that exceed 16 bits in length',
            bn: 'যখন স্ট্রিং কী-তে এমন ইউনিকোড ইমোজি থাকে যার দৈর্ঘ্য ১৬ বিটের বেশি'
          }
        ],
        answer: 0,
        hint: {
          en: 'What happens if all keys land in bucket 0?',
          bn: 'যদি সব কী বাকেট ০ তে গিয়ে পড়ে তবে কী ঘটবে?'
        },
        explanation: {
          en: 'If every key maps to the same bucket, the table collapses into a linear linked list. Every get() and set() must traverse all n entries, degrading constant-time lookups into an O(n) linear scan.',
          bn: 'যদি প্রতিটি কী একই বাকেটে পড়ে, তবে টেবিলটি কার্যত একটি সাধারণ লিঙ্কড লিস্টে পরিণত হয়। ফলে প্রতিটি get() বা set() অপারেশনকে সব n উপাদান স্ক্যান করতে হয়, যা ধ্রুব সময়কে O(n) লিনিয়ার স্ক্যানে নামিয়ে দেয়।'
        }
      }
    ]
  }
};
