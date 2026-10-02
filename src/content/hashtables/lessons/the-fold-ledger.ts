import type { Lesson } from '../../../lib/types';

export const theFoldLedgerLesson: Lesson = {
  slug: 'the-fold-ledger',
  tech: 'hash-tables',
  title: {
    en: 'The Fold Ledger: Modulo, Bitwise Masking & Capacity Laws',
    bn: 'ফোল্ড লেজার: মডুলো, বিটওয়াইজ মাস্কিং ও ধারণক্ষমতার নীতি'
  },
  summary: {
    en: 'An architectural breakdown of hash reduction techniques and capacity sizing laws. A 32-bit hash output spans over 4 billion values, which must be folded into a table of capacity m. Power-of-two bitwise masking executes in a single CPU cycle. However, it completely ignores upper bits, causing catastrophic clustering when keys share numerical strides: 16 keys with a stride of 8 occupy only 2 out of 16 slots under naive masking. In contrast, prime modulo reduction (hash % 17) uses division arithmetic to disperse the same keys across 16 out of 17 slots. Finally, Fibonacci multiplicative hashing uses golden ratio constant 2654435769 to scatter the stride across 15 out of 16 slots while retaining single-cycle bitwise speed.',
    bn: 'হ্যাশ সংকোচন কৌশল এবং টেবিলের ধারণক্ষমতা নির্ধারণ নীতির একটি বিশদ আর্কিটেকচারাল বিশ্লেষণ। একটি ৩২-বিট হ্যাশ ফাংশন ৪ বিলিয়নেরও বেশি মান তৈরি করে, যাকে অবশ্যই m আকারের সীমিত টেবিলে সংকুচিত করতে হয়। ২ এর ঘাত বিশিষ্ট বিটওয়াইজ মাস্কিং মাত্র ১টি সিপিইউ চক্রে সম্পন্ন হয়। তবে এটি ইনপুটের উপরের বিটগুলো সম্পূর্ণ উপেক্ষা করে, যার ফলে নির্দিষ্ট ব্যবধানযুক্ত উপাত্তে মারাত্মক গুচ্ছায়ন ঘটে: ৮ এর ব্যবধানে ১৬টি চাবি সাধারণ মাস্কিংয়ের অধীনে ১৬টির মধ্যে মাত্র ২টি স্লট দখল করে। এর বিপরীতে প্রাইম মডুলো সংকোচন (hash % ১৭) পাটিগণিত ভাগের সাহায্যে একই চাবিগুলোকে ১৭টির মধ্যে ১৬টি স্লটে ছড়িয়ে দেয়। পরিশেষে, ফিবোনাচ্চি মাল্টিপ্লিকেটিভ হ্যাশিং সোনালী অনুপাত ধ্রুবক ২৬৫৪৪৩৫৭৬৯ ব্যবহার করে ১-চক্রের দ্রুতগতি বজায় রেখেই ১৬টির মধ্যে ১৫টি স্লটে সুষম বণ্টন নিশ্চিত করে।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'The Index Reduction Problem: Folding 32 Bits into m Slots',
        bn: 'ইনডেক্স সংকোচনের চ্যালেঞ্জ: ৩২ বিটকে m স্লটে রূপান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this lesson, we examine the final mathematical step of hash table routing: index reduction. A high-quality hash function produces a 32-bit unsigned integer between 0 and 4294967295. However, physical memory constraints dictate that table capacity m is typically modest, ranging from 16 slots in small caches to millions in database indexes. Folding is the operation that projects this vast 32-bit numerical space into the valid index range [0, m - 1]. Software architects generally choose between three reduction disciplines: power-of-two bitwise masking, prime modulo division, and Fibonacci multiplicative hashing. Each discipline introduces distinct trade-offs between hardware execution speed and pattern vulnerability.',
        bn: 'এই পাঠে আমরা হ্যাশ টেবিল রাউটিংয়ের চূড়ান্ত গাণিতিক ধাপটি পরীক্ষা করব: ইনডেক্স সংকোচন বা ফোল্ডিং। একটি ভালো মানের হ্যাশ ফাংশন ০ থেকে ৪২৯৪৯৬৭২৯৫ এর মধ্যে একটি ৩২-বিট আনসাইন্ড পূর্ণসংখ্যা তৈরি করে। কিন্তু বাস্তব মেমরির সীমাবদ্ধতার কারণে টেবিলের আকার m সাধারণত সীমিত থাকে, যা ছোট ক্যাশে ১৬টি স্লট থেকে শুরু করে ডেটাবেস ইনডেক্সে লক্ষাধিক হতে পারে। ফোল্ডিং হলো সেই প্রক্রিয়া যা এই বিশাল ৩২-বিট সংখ্যাকে টেবিলের বৈধ ইনডেক্স রেঞ্জ [০, m - ১] এর মধ্যে নামিয়ে আনে। সফটওয়্যার আর্কিটেক্টরা সাধারণত তিনটি সংকোচন পদ্ধতির মধ্য থেকে বেছে নেন: ২ এর ঘাত বিশিষ্ট বিটওয়াইজ মাস্কিং, প্রাইম মডুলো ভাগ এবং ফিবোনাচ্চি মাল্টিপ্লিকেটিভ হ্যাশিং। প্রতিটি পদ্ধতি হার্ডওয়্যার প্রসেসিং গতি এবং প্যাটার্ন প্রতিরোধের মধ্যে নিজস্ব ট্রেড-অফ তৈরি করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Index Reduction',
          def: {
            en: 'The mathematical projection mapping an unbounded 32-bit or 64-bit integer hash code into the valid bucket range [0, m - 1].',
            bn: 'একটি গাণিতিক ম্যাপিং যা ৩২-বিট বা ৬৪-বিট পূর্ণসংখ্যা হ্যাশ কোডকে বৈধ বাকেট পরিসীমা [০, m - ১] এ সংকুচিত করে।'
          }
        },
        {
          term: 'Power-of-Two Masking',
          def: {
            en: 'Extracting the lowest k bits of a hash using hash & (m - 1), where table capacity m = 2^k, executing in a single CPU clock cycle.',
            bn: 'hash & (m - ১) অপারেশনের সাহায্যে হ্যাশের সর্বনিম্ন k বিট সংগ্রহ করার দ্রুততম পদ্ধতি, যেখানে ধারণক্ষমতা m = ২^k।'
          }
        },
        {
          term: 'Prime Modulo Reduction',
          def: {
            en: 'Dividing the hash code by a prime integer capacity p, using modular arithmetic to break periodic strides in input data.',
            bn: 'হ্যাশ কোডকে একটি মৌলিক সংখ্যা p দিয়ে ভাগ করে ইনপুট উপাত্তের পুনরাবৃত্তিমূলক স্ট্রাইড ভেঙে ফেলার কৌশল।'
          }
        },
        {
          term: 'Fibonacci Hashing',
          def: {
            en: 'Multiplication by the golden ratio constant 2654435769 followed by a right shift, achieving prime-like dispersion at bitwise speed.',
            bn: 'সোনালী অনুপাত ধ্রুবক ২৬৫৪৪৩৫৭৬৯ দিয়ে গুণ করে ডান শিফট করার কৌশল, যা বিটওয়াইজ গতিতেই মৌলিক সংখ্যার মতো সুষম প্রসারণ দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'mechanics',
      text: {
        en: 'The Stride Hazard: Why Bitwise Masking Fails on Non-Random Data',
        bn: 'স্ট্রাইড ঝুঁকি: অ-এলোমেলো উপাত্তে বিটওয়াইজ মাস্কিং কেন ব্যর্থ হয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While power-of-two bitwise masking executes in 1 clock cycle, it introduces an extreme vulnerability known as low-bit blindness. When capacity m equals 16 (2^4), the bitwise mask m - 1 is binary 00001111 (integer 15). Performing hash & 15 strictly inspects the 4 lowest bits, while discarding the upper 28 bits entirely. If keys have a numerical stride, such as byte-aligned memory pointers or sequential IDs multiplied by 8 (8, 16, 24, 32...), the 3 lowest bits are always zero. Consequently, every key maps strictly to slots where the lowest 3 bits are 000. In a table of 16 buckets, all keys crowd into slot 0 and slot 8. The remaining 14 buckets remain completely empty, collapsing performance into an O(n) scan. To repair this, systems must either divide by a prime or apply Fibonacci multiplicative mixing.',
        bn: 'যদিও ২ এর ঘাত বিশিষ্ট বিটওয়াইজ মাস্কিং মাত্র ১টি ক্লক চক্রে সম্পন্ন হয়, এটি লো-বিট ব্লাইন্ডনেস নামক একটি মারাত্মক দুর্বলতা তৈরি করে। যখন ধারণক্ষমতা m হয় ১৬ (২^৪), তখন বিটওয়াইজ মাস্ক m - ১ হলো বাইনারি ০০০০১১১১ (পূর্ণসংখ্যা ১৫)। hash & ১৫ পরিচালনা করলে এটি কেবল সর্বনিম্ন ৪টি বিট পরীক্ষা করে এবং উপরের ২৮টি বিট সম্পূর্ণ ফেলে দেয়। যদি কী-গুলোর মধ্যে কোনো নির্দিষ্ট ব্যবধান থাকে, যেমন ৮ দ্বারা বিভাজ্য মেমরি পয়েন্টার বা আইডি (৮, ১৬, ২৪, ৩২...), তবে তাদের সর্বনিম্ন ৩টি বিট সর্বদা শূন্য হয়। ফলস্বরূপ, প্রতিটি কী কেবল সেই স্লটগুলোতে গিয়ে পড়ে যেগুলোর শেষ ৩ বিট ০০০। ফলে ১৬টি বাকেটের টেবিলে সব চাবি কেবল স্লট ০ এবং স্লট ৮ এ ভিড় করে। অবশিষ্ট ১৪টি বাকেট সম্পূর্ণ খালি পড়ে থাকে এবং কার্যক্ষমতা O(n) লিনিয়ার স্ক্যানে নেমে যায়। এই সমস্যা সমাধানের জন্য সিস্টেমে হয় প্রাইম দিয়ে ভাগ করতে হয় অথবা ফিবোনাচ্চি মাল্টিপ্লিকেটিভ মিক্সিং প্রয়োগ করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'reduction-comparison.ts',
      caption: {
        en: 'Comparative benchmark of power-of-two mask, prime modulo, and Fibonacci hashing.',
        bn: 'পাওয়ার-অব-টু মাস্ক, প্রাইম মডুলো এবং ফিবোনাচ্চি হ্যাশিংয়ের তুলনামূলক বেঞ্চমার্ক।'
      },
      code: `// Generate 16 keys with a stride of 8: [8, 16, 24, 32, ..., 128]
const keys: number[] = Array.from({ length: 16 }, (_, i) => (i + 1) * 8);

// 1. Naive Power-of-Two Bitwise Mask (Capacity = 16, Mask = 15)
export function foldBitwiseMask(keys: number[], capacity: number = 16): number[] {
  const buckets = Array(capacity).fill(0);
  const mask = capacity - 1;
  for (const k of keys) {
    buckets[k & mask]++;
  }
  return buckets; // Occupies only 2 out of 16 slots!
}

// 2. Prime Modulo Reduction (Capacity = 17, prime p = 17)
export function foldPrimeModulo(keys: number[], prime: number = 17): number[] {
  const buckets = Array(prime).fill(0);
  for (const k of keys) {
    buckets[k % prime]++;
  }
  return buckets; // Occupies 16 out of 17 slots!
}

// 3. Fibonacci Multiplicative Hashing (Capacity = 16, k = 4 bits)
export function foldFibonacci(keys: number[], capacity: number = 16): number[] {
  const buckets = Array(capacity).fill(0);
  // Golden ratio constant: floor(2^32 * (sqrt(5) - 1) / 2) = 2654435769
  const GOLDEN_RATIO_32 = 2654435769;
  const shift = 32 - 4; // Shift down to extract highest 4 mixed bits
  for (const k of keys) {
    const slot = (Math.imul(k, GOLDEN_RATIO_32) >>> shift) & (capacity - 1);
    buckets[slot]++;
  }
  return buckets; // Occupies 15 out of 16 slots!
}`
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Execution Trace: Measuring Bucket Occupancy Across 16 Keys',
        bn: 'এক্সিকিউশন ট্রেস: ১৬টি চাবিতে বাকেট দখলের বাস্তব পরিমাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We run our three reduction strategies on 16 keys spaced by a stride of 8. Under raw bitwise masking with capacity 16, keys collapse into only 2 occupied slots: slot 0 receives 8 keys and slot 8 receives 8 keys, leaving 14 slots empty. Under prime modulo with capacity 17, division residue disperses keys across 16 out of 17 slots. Under Fibonacci multiplicative hashing with capacity 16, multiplying by 2654435769 distributes the stride across 15 out of 16 slots, achieving high dispersion at single-cycle bitwise speed.',
        bn: 'আমরা ৮ এর ব্যবধানে থাকা ১৬টি চাবির ওপর আমাদের তিনটি কৌশল পরিচালনা করি। ১৬ ধারণক্ষমতার সাধারণ বিটওয়াইজ মাস্কিংয়ে সব চাবি মাত্র ২টি স্লটে গিয়ে পড়ে: স্লট ০ তে ৮টি চাবি এবং স্লট ৮ এ ৮টি চাবি জমা হয়, যার ফলে ১৪টি স্লট খালি থাকে। ১৭ ধারণক্ষমতার প্রাইম মডুলোতে ভাগের মাধ্যমে চাবিগুলো ১৭টির মধ্যে ১৬টি স্লটে সুষমভাবে ছড়িয়ে পড়ে। আর ১৬ ধারণক্ষমতার ফিবোনাচ্চি মাল্টিপ্লিকেটিভ হ্যাশিংয়ে ২৬৫৪৪৩৫৭৬৯ দ্বারা গুণনের ফলে চাবিগুলো ১৬টির মধ্যে ১৫টি স্লটে বিস্তৃত হয়, যা ১-চক্রের বিটওয়াইজ গতিতেই চমৎকার প্রসারণ নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'trace-reduction.ts',
      caption: {
        en: 'Measured bucket distribution across masking, prime modulo, and Fibonacci reduction.',
        bn: 'মাস্কিং, প্রাইম মডুলো এবং ফিবোনাচ্চি পদ্ধতিতে বাকেট বণ্টনের বাস্তব ফলাফল।'
      },
      code: `// Test input: [8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128]

// Result 1: Power-of-Two Mask (m = 16, mask = 15)
// Slot 0: 8 items (16, 32, 48, 64, 80, 96, 112, 128)
// Slot 8: 8 items (8, 24, 40, 56, 72, 88, 104, 120)
// Slots 1..7 and 9..15: 0 items (14 slots empty!) -> 2/16 occupied

// Result 2: Prime Modulo (m = 17)
// Items distribute evenly across 16 different buckets -> 16/17 occupied!

// Result 3: Fibonacci Multiplicative Hashing (m = 16)
// Golden ratio constant 2654435769 rotates lattice points
// Items distribute across 15 different buckets -> 15/16 occupied!`
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'Visualizing Bucket Dispersion Across Reduction Techniques',
        bn: 'সংকোচন পদ্ধতিতে বাকেট বণ্টনের ভিজ্যুয়ালাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'ht'
    },
    {
      type: 'heading',
      id: 'comparison',
      text: {
        en: 'Architectural Comparison: Reduction Method Trade-Offs',
        bn: 'আর্কিটেকচারাল তুলনা: ইনডেক্স সংকোচন পদ্ধতির ট্রেড-অফ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Reduction Method', bn: 'সংকোচন পদ্ধতি' },
        { en: 'Hardware Cost', bn: 'হার্ডওয়্যার খরচ' },
        { en: 'Dispersion Quality', bn: 'প্রসারণ গুণমান' },
        { en: 'Primary Vulnerability', bn: 'প্রধান দুর্বলতা' },
        { en: 'Used By', bn: 'ব্যবহারকারী সিস্টেম' }
      ],
      rows: [
        [
          { en: 'Bitwise Mask (&)', bn: 'বিটওয়াইজ মাস্ক (&)' },
          { en: '1 CPU cycle (AND)', bn: '১ সিপিইউ চক্র (AND)' },
          { en: 'Poor on structured strides', bn: 'নির্দিষ্ট ব্যবধানে দুর্বল' },
          { en: 'Low-bit blindness', bn: 'লো-বিট অন্ধত্ব' },
          { en: 'Java HashMap, Python dict', bn: 'Java HashMap, Python dict' }
        ],
        [
          { en: 'Prime Modulo (%)', bn: 'প্রাইম মডুলো (%)' },
          { en: '15-40 cycles (IDIV)', bn: '১৫-৪০ চক্র (IDIV)' },
          { en: 'Excellent on strides', bn: 'স্ট্রাইডে চমৎকার' },
          { en: 'Division CPU latency', bn: 'ভাগের ধীরগতি' },
          { en: 'C++ std::unordered_map', bn: 'C++ std::unordered_map' }
        ],
        [
          { en: 'Fibonacci Multiplicative', bn: 'ফিবোনাচ্চি গুণন' },
          { en: '2-3 cycles (IMUL + SHR)', bn: '২-৩ চক্র (IMUL + SHR)' },
          { en: 'Excellent dispersion', bn: 'চমৎকার প্রসারণ' },
          { en: 'Requires 64-bit integer type', bn: '৬৪-বিট ইন্টিজার টাইপ লাগে' },
          { en: 'High-performance flat maps', bn: 'উচ্চগতির ফ্ল্যাট ম্যাপ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'applications',
      text: {
        en: 'Production Systems Applying Capacity and Reduction Laws',
        bn: 'ধারণক্ষমতা ও সংকোচন নীতির বাস্তব সিস্টেম প্রয়োগ'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'C++ Standard Template Library: std::unordered_map maintains an internal list of prime numbers (such as 53, 97, 193, 389) to prevent stride clustering without requiring an external bit finalizer.',
          bn: 'সি++ স্ট্যান্ডার্ড লাইব্রেরি: std::unordered_map কোনো অতিরিক্ত ফাইনালইজার ছাড়াই স্ট্রাইড ক্লাস্টারিং প্রতিরোধ করতে মৌলিক সংখ্যার একটি তালিকা (যেমন ৫৩, ৯৭, ১৯৩, ৩৮৯) বজায় রাখে।'
        },
        {
          en: 'Linux Kernel dcache and inode Tables: The Linux virtual filesystem folds inode numbers and directory entries using golden ratio multiplicative hashing to achieve uniform distribution in single CPU cycles.',
          bn: 'লিনাক্স কার্নেল ডিস্যাশ ও ইনোড টেবিল: লিনাক্স ফাইলসিস্টেম একক সিপিইউ চক্রে সুষম বণ্টন পেতে সোনালী অনুপাত মাল্টিপ্লিকেটিভ হ্যাশিং দিয়ে ইনোড নম্বর ও ডিরেক্টরি এন্ট্রি সংকুচিত করে।'
        },
        {
          en: 'Go Runtime Map Buckets: Go maps use power-of-two bitwise masking for slot lookup, while storing the upper 8 bits (top hash / tophash) in a separate byte array to avoid walking bucket memory on misses.',
          bn: 'গো রানটাইম ম্যাপ বাকেট: Go ম্যাপ স্লট খুঁজতে ২ এর ঘাত বিটওয়াইজ মাস্ক ব্যবহার করে, এবং মিসের সময় মেমরি পরিদর্শন এড়াতে উপরের ৮টি বিট (tophash) একটি পৃথক বাইট অ্যারেতে সংরক্ষণ করে।'
        },
        {
          en: 'Database Buffer Pool Page Routing: Storage engines hash 64-bit disk block identifiers to buffer pool frames using Fibonacci reduction to minimize mutex contention across concurrent worker threads.',
          bn: 'ডেটাবেস বাফার পুল পেজ রাউটিং: স্টোরেজ ইঞ্জিনগুলো মাল্টিপল থ্রেডের মধ্যে লক দ্বন্দ্ব কমাতে ফিবোনাচ্চি সংকোচন ব্যবহার করে ৬৪-বিট ডিস্ক ব্লক নম্বরকে মেমরি বাফারে ম্যাপ করে।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-collided-city',
    tech: 'hashtables',
    title: {
      en: 'The Collided City: Separate Chaining & Bucket Physics',
      bn: 'সংঘর্ষিত নগর: সেপারেট চেইনিং ও বাকেট মেকানিক্স'
    }
  },
  exercises: [
    {
      id: 'fl-ex1',
      kind: 'mcq',
      topic: 'bitwise masking vulnerability',
      question: {
        en: 'Why does power-of-two bitwise masking (hash & (m - 1)) fail catastrophically when keys are memory pointers aligned to 8-byte boundaries?',
        bn: 'চাবিগুলো যখন ৮-বাইটে সারিবদ্ধ মেমরি পয়েন্টার হয়, তখন ২ এর ঘাত বিশিষ্ট বিটওয়াইজ মাস্কিং (hash & (m - ১)) কেন মারাত্মকভাবে ব্যর্থ হয়?'
      },
      options: [
        {
          en: '8-byte aligned addresses always end in binary 000, causing keys to crowd into only one eighth of all available table buckets',
          bn: '৮-বাইটে সারিবদ্ধ ঠিকানার শেষ ৩টি বিট সর্বদা ০০০ হয়, যার ফলে চাবিগুলো টেবিলের মোট বাকেটের মাত্র এক-অষ্টমাংশে ভিড় জমায়'
        },
        {
          en: 'Bitwise AND operations cause memory segmentation faults on Intel processors',
          bn: 'ইন্টেল প্রসেসরে বিটওয়াইজ AND অপারেশন মেমরি সেগমেন্টেশন ত্রুটি তৈরি করে'
        },
        {
          en: 'Memory pointers exceed 32 bits and cannot be stored in JavaScript variables',
          bn: 'মেমরি পয়েন্টারের আকার ৩২ বিটের বেশি হওয়ায় তা জাভাস্ক্রিপ্ট ভেরিয়েবলে রাখা যায় না'
        },
        {
          en: 'Power-of-two masking automatically resets the operating system TLB cache',
          bn: '২ এর ঘাত মাস্কিং স্বয়ংক্রিয়ভাবে অপারেটিং সিস্টেমের TLB ক্যাশ মুছে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Any number divisible by 8 has its lowest 3 bits set to zero (2^3 = 8).',
        bn: '৮ দ্বারা বিভাজ্য যেকোনো সংখ্যার শেষ ৩টি বিট সর্বদা শূন্য হয় (২^৩ = ৮)।'
      },
      explanation: {
        en: 'Because bitwise masking only checks the lowest bits, discarding the upper bits, keys with common divisors like 8 leave the lower bits unvarying, causing 87.5 percent of table buckets to sit completely empty.',
        bn: 'যেহেতু বিটওয়াইজ মাস্কিং কেবল নিচের বিটগুলো দেখে এবং উপরের বিটগুলো ফেলে দেয়, তাই ৮ এর মতো সাধারণ গুণনীয়ক থাকা উপাত্তের নিচের বিটে কোনো পরিবর্তন থাকে না এবং ৮৭.৫ শতাংশ বাকেট খালি পড়ে থাকে।'
      }
    },
    {
      id: 'fl-ex2',
      kind: 'predict',
      topic: 'prime modulo dispersion',
      question: {
        en: 'In an experiment with 16 keys that are multiples of 8, how many slots are occupied under naive bitwise masking (capacity 16) versus prime modulo (capacity 17)?',
        bn: '৮ এর গুণিতক বিশিষ্ট ১৬টি চাবি নিয়ে পরীক্ষায় সাধারণ বিটওয়াইজ মাস্কিংয়ে (ধারণক্ষমতা ১৬) এবং প্রাইম মডুলোতে (ধারণক্ষমতা ১৭) যথাক্রমে কতটি স্লট পূর্ণ হয়?'
      },
      options: [
        {
          en: 'Naive bitwise masking occupies only 2 out of 16 slots, whereas prime modulo disperses keys across 16 out of 17 slots',
          bn: 'সাধারণ বিটওয়াইজ মাস্কিংয়ে ১৬টির মধ্যে মাত্র ২টি স্লট পূর্ণ হয়, যেখানে প্রাইম মডুলোতে ১৭টির মধ্যে ১৬টি স্লটে চাবি ছড়িয়ে পড়ে'
        },
        {
          en: 'Both methods occupy exactly 8 slots due to the pigeonhole principle',
          bn: 'পিজনহোল নীতির কারণে উভয় পদ্ধতিতেই ঠিক ৮টি স্লট পূর্ণ হয়'
        },
        {
          en: 'Prime modulo occupies fewer slots because 17 is an odd prime number',
          bn: '১৭ একটি বিজোড় মৌলিক সংখ্যা হওয়ায় প্রাইম মডুলোতে কম স্লট পূর্ণ হয়'
        },
        {
          en: 'Bitwise masking occupies all 16 slots while prime modulo triggers a divide-by-zero exception',
          bn: 'বিটওয়াইজ মাস্কিংয়ে পুরো ১৬টি স্লট ভরে যায় আর প্রাইম মডুলোতে শূন্য দিয়ে ভাগের ত্রুটি ঘটে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Review the execution trace: 2 slots versus 16 slots.',
        bn: 'এক্সিকিউশন ট্রেসের ফলাফল দেখুন: ২টি স্লট বনাম ১৬টি স্লট।'
      },
      explanation: {
        en: 'Bitwise masking directs multiple keys strictly to slots 0 and 8. In contrast, prime 17 shares no common factors with 8, distributing the keys across 16 slots.',
        bn: 'বিটওয়াইজ মাস্কিং একাধিক চাবিকে কেবল স্লট ০ এবং ৮ এ পাঠায়। এর বিপরীতে মৌলিক সংখ্যা ১৭ এর সাথে ৮ এর কোনো সাধারণ গুণনীয়ক না থাকায় চাবিগুলো ১৬টি স্লটে ছড়িয়ে পড়ে।'
      }
    },
    {
      id: 'fl-ex3',
      kind: 'mcq',
      topic: 'fibonacci hashing mechanics',
      question: {
        en: 'How does Fibonacci multiplicative hashing achieve prime-like key dispersion while retaining single-cycle bitwise speed?',
        bn: 'ফিবোনাচ্চি মাল্টিপ্লিকেটিভ হ্যাশিং কীভাবে ১-চক্রের বিটওয়াইজ গতি ধরে রেখেই মৌলিক সংখ্যার মতো চমৎকার প্রসারণ নিশ্চিত করে?'
      },
      options: [
        {
          en: 'It multiplies by the golden ratio constant 2654435769 to scatter patterns into higher bits, then extracts the highest k bits using a fast bitwise shift',
          bn: 'এটি সোনালী অনুপাত ধ্রুবক ২৬৫৪৪৩৫৭৬৯ দিয়ে গুণ করে প্যাটার্নগুলোকে উপরের বিটে ছড়িয়ে দেয়, এবং তারপর দ্রুত শিফটের সাহায্যে সর্বোচ্চ k বিট গ্রহণ করে'
        },
        {
          en: 'It executes integer division on the graphics processing unit using WebGL shaders',
          bn: 'এটি ওয়েবজিএল শেডার ব্যবহার করে গ্রাফিক্স প্রসেসিং ইউনিটে পূর্ণসংখ্যা ভাগ সম্পন্ন করে'
        },
        {
          en: 'It dynamically allocates a prime-sized table whenever an even integer key is detected',
          bn: 'যেকোনো জোড় সংখ্যার চাবি শনাক্ত হলে এটি স্বয়ংক্রিয়ভাবে প্রাইম আকারের টেবিল বরাদ্দ করে'
        },
        {
          en: 'It converts hash keys into Fibonacci sequence numbers using recursive function calls',
          bn: 'এটি রিকার্সিভ ফাংশন কলের মাধ্যমে হ্যাশ চাবিকে ফিবোনাচ্চি সংখ্যার ধারায় রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Multiply by the golden ratio constant, then shift right.',
        bn: 'সোনালী অনুপাত ধ্রুবক দিয়ে গুণ করুন, তারপর ডানে শিফট করুন।'
      },
      explanation: {
        en: 'Multiplication by the golden ratio constant maps keys evenly around the circle modulo 2^32. Shifting right discards unmixed lower bits and retains the highest bits where entropy is maximum, running in 2 to 3 CPU cycles.',
        bn: 'সোনালী অনুপাত ধ্রুবক দিয়ে গুণ করলে চাবিগুলো ৩২-বিট বৃত্তে সুষমভাবে ছড়িয়ে পড়ে। এরপর ডানে শিফট করলে অমিলিত নিচের বিটগুলো বাদ পড়ে এবং সর্বোচ্চ এন্ট্রপিসম্পন্ন উপরের বিটগুলো সংরক্ষিত হয়, যা মাত্র ২ থেকে ৩ সিপিইউ চক্রে কাজ সম্পন্ন করে।'
      }
    },
    {
      id: 'fl-ex4',
      kind: 'mcq',
      topic: 'reduction trade-offs',
      question: {
        en: 'Why does C++ std::unordered_map use prime modulo reduction instead of power-of-two bitwise masking?',
        bn: 'সি++ এর std::unordered_map কেন ২ এর ঘাত বিটওয়াইজ মাস্কিংয়ের পরিবর্তে প্রাইম মডুলো সংকোচন ব্যবহার করে?'
      },
      options: [
        {
          en: 'To protect against pathological stride clustering even when user-provided hash functions have poor bit mixing or low-bit bias',
          bn: 'ব্যবহারকারীর লেখা হ্যাশ ফাংশনে দুর্বল বিট মিক্সিং থাকলেও যেন নির্দিষ্ট স্ট্রাইড গুচ্ছায়ন থেকে সুরক্ষা পাওয়া যায়'
        },
        {
          en: 'Because C++ compilers do not support bitwise AND operations on 64-bit types',
          bn: 'কারণ সি++ কম্পাইলার ৬৪-বিট ডেটা টাইপে বিটওয়াইজ AND অপারেশন সমর্থন করে না'
        },
        {
          en: 'Prime modulo allows tables to resize without allocating new heap memory buffers',
          bn: 'প্রাইম মডুলো নতুন হিপ মেমরি বরাদ্দ ছাড়াই টেবিল রিসাইজ করার সুযোগ দেয়'
        },
        {
          en: 'Operating system page allocators exclusively allocate memory in prime-sized byte blocks',
          bn: 'অপারেটিং সিস্টেম পেজ অ্যালোকেটর মেমরি কেবল প্রাইম আকারের বাইট ব্লকে বরাদ্দ করতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Prime modulo acts as a safety net against poorly written hash functions.',
        bn: 'প্রাইম মডুলো বাজেভাবে লেখা হ্যাশ ফাংশনের বিরুদ্ধে একটি নিরাপত্তা জাল হিসেবে কাজ করে।'
      },
      explanation: {
        en: 'The C++ standard committee prioritized robustness over pure speed. Prime modulo reduction forgives poorly written hash functions that leave patterns in low bits, preventing catastrophic clustering in generic library containers.',
        bn: 'সি++ স্ট্যান্ডার্ড কমিটি খাঁটি গতির চেয়ে নির্ভরযোগ্যতাকে অগ্রাধিকার দিয়েছে। প্রাইম মডুলো দুর্বল হ্যাশ ফাংশনের লো-বিট পক্ষপাত দূর করে দেয়, যা জেনেরিক লাইব্রেরিতে মারাত্মক ক্লাস্টারিং রোধ করে।'
      }
    }
  ],
  quiz: {
    id: 'fl-quiz',
    title: {
      en: 'Hash Reduction and Capacity Architecture Quiz',
      bn: 'হ্যাশ সংকোচন ও ধারণক্ষমতা আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'flq1',
        kind: 'mcq',
        topic: 'hardware latency of idiv',
        question: {
          en: 'What is the primary latency drawback of using prime modulo reduction (hash % p) on modern CPUs?',
          bn: 'আধুনিক সিপিইউতে প্রাইম মডুলো সংকোচনের (hash % p) প্রধান ল্যাটেন্সি জনিত সীমাবদ্ধতা কী?'
        },
        options: [
          {
            en: 'Integer division (IDIV instruction) takes 15 to 40 CPU clock cycles, compared to 1 cycle for bitwise AND masking',
            bn: 'পূর্ণসংখ্যা ভাগ নির্দেশ (IDIV) ১৫ থেকে ৪০ সিপিইউ ক্লক চক্র সময় নেয়, যেখানে বিটওয়াইজ AND মাস্কিংয়ে মাত্র ১ চক্র লাগে'
          },
          {
            en: 'Prime modulo operations crash the CPU floating point register file',
            bn: 'প্রাইম মডুলো অপারেশন সিপিইউর ফ্লোটিং পয়েন্ট রেজিস্টার ক্র্যাশ করায়'
          },
          {
            en: 'Modulo division requires writing temporary results to non-volatile disk storage',
            bn: 'মডুলো ভাগের জন্য অস্থায়ী ফলাফল নন-ভোলাটাইল ডিস্ক স্টোরেজে রাইট করতে হয়'
          },
          {
            en: 'The operating system scheduler blocks threads executing modulo operations',
            bn: 'মডুলো অপারেশন পরিচালনাকারী থ্রেডগুলোকে অপারেটিং সিস্টেম শিডিউলার স্থগিত করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Division is the slowest basic arithmetic instruction on silicon.',
          bn: 'সিলিকন চিপে ভাগ হলো সবচেয়ে ধীরগতির মৌলিক পাটিগণিত নির্দেশ।'
        },
        explanation: {
          en: 'Division circuitry is iterative and cannot be fully pipelined, taking 15 to 40 cycles. Bitwise AND is a single-cycle combinational gate, making power-of-two masking over 15 times faster in tight loops.',
          bn: 'ভাগ করার সার্কিট পুনরাবৃত্তিমূলক এবং পাইপলাইন করা কঠিন, যার ফলে ১৫ থেকে ৪০ চক্র লাগে। বিটওয়াইজ AND হলো একক চক্রের লজিক গেট, যা টাইট লুপে ১৫ গুণেরও বেশি দ্রুত কাজ করে।'
        }
      },
      {
        id: 'flq2',
        kind: 'predict',
        topic: 'bitmask capacity relationship',
        question: {
          en: 'If a hash table has a capacity of 1024 slots, what is the exact bitwise mask required to reduce hashes?',
          bn: 'একটি হ্যাশ টেবিলের ধারণক্ষমতা যদি ১০২৪টি স্লট হয়, তবে হ্যাশ সংকুচিত করতে ঠিক কোন বিটওয়াইজ মাস্ক প্রয়োজন?'
        },
        options: [
          {
            en: '1023 (hexadecimal 0x3FF, which is binary 0000001111111111)',
            bn: '১০২৩ (হেক্সাডেসিমেল 0x3FF, যা বাইনারিতে ০০০০০০১১১১১১১১১১)'
          },
          {
            en: '1024 (hexadecimal 0x400)',
            bn: '১০২৪ (হেক্সাডেসিমেল 0x400)'
          },
          {
            en: '512 (hexadecimal 0x200)',
            bn: '৫১২ (হেক্সাডেসিমেল 0x200)'
          },
          {
            en: '2048 (hexadecimal 0x800)',
            bn: '২০৪৮ (হেক্সাডেসিমেল 0x800)'
          }
        ],
        answer: 0,
        hint: {
          en: 'The mask is always capacity minus 1.',
          bn: 'মাস্ক সর্বদা ধারণক্ষমতা বিয়োগ ১ হয় (m - ১)।'
        },
        explanation: {
          en: 'For capacity 1024 (2^10), m - 1 equals 1023. Performing hash & 1023 extracts the lowest 10 bits, restricting the resulting index strictly to range [0, 1023].',
          bn: '১০২৪ (২^১০) ধারণক্ষমতার জন্য m - ১ হলো ১০২৩। hash & ১০২৩ পরিচালনা করলে সর্বনিম্ন ১০টি বিট আলাদা হয়, যা চূড়ান্ত ইনডেক্সকে ঠিক [০, ১০২৩] পরিসীমার মধ্যে সীমাবদ্ধ রাখে।'
        }
      },
      {
        id: 'flq3',
        kind: 'mcq',
        topic: 'fibonacci constant derivation',
        question: {
          en: 'Where does the Fibonacci constant 2654435769 originate in computer science mathematics?',
          bn: 'কম্পিউটার বিজ্ঞানের গণিতে ফিবোনাচ্চি ধ্রুবক ২৬৫৪৪৩৫৭৬৯ এর উৎপত্তি কোথা থেকে?'
        },
        options: [
          {
            en: 'It is the integer approximation of 2^32 multiplied by the golden ratio reciprocal (sqrt(5) - 1) / 2',
            bn: 'এটি হলো ২^৩২ এর সাথে সোনালী অনুপাতের বিপরীতক (sqrt(৫) - ১) / ২ গুণ করে প্রাপ্ত পূর্ণসংখ্যা মান'
          },
          {
            en: 'It is the largest prime number discoverable in an 8-bit memory register',
            bn: 'এটি একটি ৮-বিট মেমরি রেজিস্ট্রারে খুঁজে পাওয়া বৃহত্তম মৌলিক সংখ্যা'
          },
          {
            en: 'It represents the total number of physical transistors inside an Intel Pentium CPU',
            bn: 'এটি একটি ইন্টেল পেন্টিয়াম সিপিইউর মোট ফিজিক্যাল ট্রানজিস্টরের সংখ্যা'
          },
          {
            en: 'It is the default process identification number of the Linux kernel init process',
            bn: 'এটি লিনাক্স কার্নেল ইনিট প্রসেসের ডিফল্ট প্রসেস আইডেন্টিফিকেশন নম্বর'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of the golden ratio phi = 0.6180339887...',
          bn: 'সোনালী অনুপাত ফাই = ০.৬১৮০৩৩৯৮৮৭... এর কথা মনে করুন।'
        },
        explanation: {
          en: 'Donald Knuth demonstrated that multiplying by the fractional part of the golden ratio produces the most uniform distribution across a one-dimensional interval. In 32-bit arithmetic, floor(2^32 * 0.6180339887) = 2654435769.',
          bn: 'ডোনাল্ড কানুথ প্রমাণ করেছেন যে সোনালী অনুপাতের ভগ্নাংশ দিয়ে গুণ করলে এক-মাত্রিক ব্যবধানে সবচেয়ে সুষম প্রসারণ পাওয়া যায়। ৩২-বিট পাটিগণিতে floor(২^৩২ * ০.৬১৮০৩৩৯৮৮৭) = ২৬৫৪৪৩৫৭৬৯।'
        }
      },
      {
        id: 'flq4',
        kind: 'mcq',
        topic: 'gohash tophash optimization',
        question: {
          en: 'How does Go language avoid expensive bucket key comparisons on hash lookup misses?',
          bn: 'হ্যাশ অনুসন্ধানে মিস হওয়ার ক্ষেত্রে গো (Go) ল্যাঙ্গুয়েজ কীভাবে বাকেটের ব্যয়বহুল কী তুলনা পরিহার করে?'
        },
        options: [
          {
            en: 'It stores the top 8 bits of the hash in a fast contiguous tophash byte array, rejecting non-matching keys with a single byte comparison before reading the full key',
            bn: 'এটি হ্যাশের সর্বোচ্চ ৮টি বিট একটি সংলগ্ন tophash বাইট অ্যারেতে রাখে, এবং পুরো কী পড়ার আগেই একটিমাত্র বাইট তুলনায় অমিল শনাক্ত করে বাতিল করে'
          },
          {
            en: 'It restarts the entire operating system thread pool whenever a key miss occurs',
            bn: 'যেকোনো কী মিস হওয়া মাত্রই এটি অপারেটিং সিস্টেমের পুরো থ্রেড পুল রিস্টার্ট করে'
          },
          {
            en: 'It executes an asynchronous HTTP request to fetch keys from remote server memory',
            bn: 'এটি রিমোট সার্ভার মেমরি থেকে কী আনতে অ্যাসিনক্রোনাস HTTP রিকোয়েস্ট পাঠায়'
          },
          {
            en: 'It locks all available CPU cores using kernel-level spinlocks until keys are found',
            bn: 'কী খুঁজে না পাওয়া পর্যন্ত এটি কার্নেল স্পিনলক দিয়ে সব সিপিইউ কোর লক করে রাখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compare 1 byte of hash before comparing an entire string.',
          bn: 'পুরো স্ট্রিং তুলনা করার আগে হ্যাশের মাত্র ১টি বাইট তুলনা করে নিশ্চিত হন।'
        },
        explanation: {
          en: 'Go stores the highest 8 bits of each hash in an array of bytes at the start of each bucket. The engine compares these 1-byte tophash values first, avoiding expensive string equality checks on 99.6 percent of non-matching entries.',
          bn: 'Go প্রতিটি বাকেটের শুরুতে একটি পৃথক অ্যারেতে প্রতিটি হ্যাশের সর্বোচ্চ ৮টি বিট সংরক্ষণ করে। ইঞ্জিনটি প্রথমে এই ১-বাইটের tophash তুলনা করে, যা ৯৯.৬ শতাংশ ক্ষেত্রে পূর্ণ স্ট্রিং তুলনা করার আগেই মিস শনাক্ত করে ফেলে।'
        }
      }
    ]
  }
};
