import type { Lesson } from '../../../lib/types';

export const theAddressForgeLesson: Lesson = {
  slug: 'the-address-forge',
  tech: 'hash-tables',
  title: {
    en: 'The Address Forge: Avalanche Physics, Bit Mixing & Hash Functions',
    bn: 'ঠিকানা কারখানা: অ্যাভালাঞ্চ নীতি, বিট মিক্সিং ও হ্যাশ ফাংশন'
  },
  summary: {
    en: 'A deep architectural investigation into hash function design, bit mixing mathematics, and the strict avalanche criterion. A hash function must transform arbitrary byte sequences into uniformly distributed 32-bit integers. Primitive hashing routines like additive character summing fail catastrophically: anagrams like abc and cba both produce sum 294, causing 100 percent collisions. Under the strict avalanche criterion, changing a single input bit must cause approximately half (50 percent) of all output bits to flip. Non-linear operations like XOR-shifts and prime multiplications yield near-ideal bit diffusion. In modern algorithms like MurmurHash3, flipping 1 bit in record_100 versus record_101 produces 15 differing bits out of 32 (46.9 percent Hamming distance).',
    bn: 'হ্যাশ ফাংশন ডিজাইন, বিট মিক্সিং গণিত এবং কঠোর অ্যাভালাঞ্চ ক্রাইটেরিয়নের একটি গভীর আর্কিটেকচারাল বিশ্লেষণ। একটি হ্যাশ ফাংশনকে অবশ্যই যেকোনো দৈর্ঘ্যের ইনপুট বাইটকে সুষমভাবে বণ্টিত ৩২-বিট পূর্ণসংখ্যায় রূপান্তরিত করতে হয়। আদিম হ্যাশিং পদ্ধতি যেমন সাধারণ অক্ষর যোগ মারাত্মকভাবে ব্যর্থ হয়: anagram শব্দ abc এবং cba উভয়ই যোগফল ২৯৪ তৈরি করে, যা ১০০ শতাংশ সংঘর্ষ ঘটায়। কঠোর অ্যাভালাঞ্চ নীতি অনুযায়ী ইনপুটের একটিমাত্র বিট পরিবর্তন করলে আউটপুটের প্রায় অর্ধেক (৫০ শতাংশ) বিট উল্টে যেতে হবে। নন-লিনিয়ার অপারেশন যেমন XOR-শিফট এবং মৌলিক ধ্রুবক দিয়ে গুণনের সমন্বয় প্রায় নিখুঁত প্রসারণ দেয়। MurmurHash3 এর মতো অ্যালগরিদমে record_100 বনাম record_101 এর মধ্যে ১টি বিট উল্টালে ৩২টির মধ্যে ১৫টি বিট বদলে যায় (৪৬.৯ শতাংশ হ্যামিং দূরত্ব)।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'The Purpose of the Hash Forge: Uniform Bit Diffusion',
        bn: 'হ্যাশ কারখানার উদ্দেশ্য: সুষম বিট প্রসারণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this lesson, we examine the mathematical mechanics behind hash function construction. Uniform key dispersion is the prerequisite for constant O(1) performance. When an algorithm inadvertently clusters keys with shared prefixes into adjacent memory slots, retrieval degrades toward linear time. To prevent clustering, a hash function acts as an address forge: it takes an arbitrary input sequence and thoroughly diffuses every input bit across the entire 32-bit integer space. An ideal hash function behaves like a pseudorandom oracle: even the smallest alteration in the input produces an output that appears completely unrelated to the original value.',
        bn: 'এই পাঠে আমরা হ্যাশ ফাংশন নির্মাণের পেছনের গাণিতিক মেকানিক্স পরীক্ষা করব। ধ্রুব O(1) কর্মক্ষমতা নিশ্চিত করার প্রধান পূর্বশর্ত হলো কী-গুলোর সুষম বণ্টন। কোনো অ্যালগরিদম যদি অভিন্ন প্রিফিক্সযুক্ত চাবিগুলোকে অসাবধানতাবশত পাশাপাশি মেমরি স্লটে জমা করে, তবে অনুসন্ধানের গতি লিনিয়ার সময়ের দিকে অবনমিত হয়। এই গুচ্ছায়ন রোধ করতে একটি হ্যাশ ফাংশন ঠিকানা তৈরির কারখানার মতো কাজ করে: এটি যেকোনো ইনপুট গ্রহণ করে তার প্রতিটি বিটের প্রভাবকে পুরো ৩২-বিট পূর্ণসংখ্যা পরিসীমা জুড়ে ছড়িয়ে দেয়। একটি আদর্শ হ্যাশ ফাংশন সিউডোর‍্যান্ডম ওরাকলের মতো আচরণ করে: ইনপুটের ক্ষুদ্রতম পরিবর্তনও এমন আউটপুট তৈরি করে যার সাথে মূল মানের কোনো দৃশ্যমান সম্পর্ক থাকে না।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Strict Avalanche Criterion',
          def: {
            en: 'A mathematical property of cryptographic and hash functions where complementing any single input bit flips each output bit with a probability of 50 percent.',
            bn: 'হ্যাশ ফাংশনের একটি গাণিতিক ধর্ম যেখানে ইনপুটের যেকোনো একটি বিট পরিবর্তন করলে আউটপুটের প্রতিটি বিট ৫০ শতাংশ সম্ভাবনায় পরিবর্তিত হয়।'
          }
        },
        {
          term: 'Bitwise Mixing',
          def: {
            en: 'The alternating application of non-linear operations (multiplication, circular rotations, and XOR-shifts) ensuring all input bits influence all output bits.',
            bn: 'নন-লিনিয়ার অপারেশনগুলোর (গুণন, রোটেশন ও XOR-শিফট) পর্যায়ক্রমিক প্রয়োগ যা নিশ্চিত করে যেন প্রতিটি ইনপুট বিট প্রতিটি আউটপুট বিটকে প্রভাবিত করে।'
          }
        },
        {
          term: 'Hamming Distance',
          def: {
            en: 'The count of bit positions at which two corresponding binary numbers differ from each other.',
            bn: 'দুটি বাইনারি সংখ্যার মধ্যকার এমন বিট অবস্থানের মোট সংখ্যা যেখানে তারা পরস্পরের চেয়ে আলাদা।'
          }
        },
        {
          term: 'FNV-1a Algorithm',
          def: {
            en: 'A fast non-cryptographic hash function that iterates through byte sequences using prime multiplication and XOR folding.',
            bn: 'একটি দ্রুতগতির নন-ক্রিপ্টোগ্রাফিক হ্যাশ ফাংশন যা প্রাইম গুণন এবং XOR ভাঁজের মাধ্যমে বাইট সিকোয়েন্সে হ্যাশ তৈরি করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'mechanics',
      text: {
        en: 'Mixing Mechanics: Multiplication, Rotation, and Finalizers',
        bn: 'মিক্সিং মেকানিক্স: গুণন, রোটেশন ও ফাইনালাইজার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The failure of naive hash functions illustrates why bit mixing is mandatory. Consider an additive hash that sums character codes. Because addition is commutative (x + y = y + x), words like abc and cba both produce sum 294. Permutations of letters collide completely, collapsing bucket distribution. To achieve true dispersion, algorithms combine three operations. First, multiplication by a large prime constant (such as FNV prime 16777619) spreads lower-order bits across higher-order positions. Second, bitwise shifts move higher-order bits back into lower positions. Third, a finalizer avalanche mixer (such as MurmurHash3 finalizer) applies alternating XOR-shifts and 32-bit integer multiplications. This ensures that even if low bits of the input are nearly identical, the final output exhibits complete bit independence.',
        bn: 'আদিম হ্যাশ ফাংশনগুলোর ব্যর্থতা প্রমাণ করে কেন বিট মিক্সিং অপরিহার্য। ক্যারেক্টার কোডের যোগফল হিসাব করা একটি সহজ হ্যাশের কথা বিবেচনা করা যাক। যেহেতু যোগ প্রক্রিয়া স্থানবিনিময়যোগ্য (x + y = y + x), তাই abc এবং cba উভয় শব্দের যোগফল ঠিক ২৯৪ হয়। অক্ষরের যেকোনো পুনর্বিন্যাস ১০০ শতাংশ সংঘর্ষ তৈরি করে বাকেট বণ্টন ধ্বংস করে দেয়। সত্যিকারের বিট প্রসারণ অর্জন করতে অ্যালগরিদমগুলো তিনটি কৌশলের সমন্বয় ঘটায়। প্রথমত, একটি বড় মৌলিক সংখ্যা (যেমন FNV প্রাইম ১৬৭৭৭৬১৯) দিয়ে গুণ করলে নিচের দিকের বিটগুলো উপরের বিটগুলোতে ছড়িয়ে পড়ে। দ্বিতীয়ত, বিটওয়াইজ শিফট উপরের বিটগুলোকে আবার নিচের অবস্থানে টেনে আনে। তৃতীয়ত, একটি ফাইনালাইজার অ্যাভালাঞ্চ মিক্সার (যেমন MurmurHash3 ফাইনালাইজার) পর্যায়ক্রমে XOR-শিফট এবং গুণন পরিচালনা করে। এর ফলে ইনপুটের শেষ বিটগুলো প্রায় অভিন্ন হলেও চূড়ান্ত আউটপুট সম্পূর্ণ নিরপেক্ষ বিট প্যাটার্ন প্রদর্শন করে।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'hash-forge.ts',
      caption: {
        en: 'Implementation of naive additive hash, FNV-1a, and MurmurHash3 bit mixing finalizer.',
        bn: 'সাধারণ যোগ হ্যাশ, FNV-1a এবং MurmurHash3 বিট মিক্সিং ফাইনালাইজারের বাস্তবায়ন।'
      },
      code: `export function naiveSumHash(str: string): number {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  return sum; // Catastrophic collision: "abc" and "cba" both return 294!
}

export function fnv1a(str: string): number {
  let hash = 2166136261; // 32-bit FNV offset basis
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 16777619); // 32-bit FNV prime
  }
  return hash >>> 0;
}

export function murmurFinalizer(h: number): number {
  // Cascading XOR-shifts and multiplications ensure strict avalanche diffusion
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;
  return h >>> 0;
}

export function computeHammingDistance(a: number, b: number): number {
  let xor = (a ^ b) >>> 0;
  let count = 0;
  while (xor > 0) {
    count += xor & 1;
    xor >>>= 1;
  }
  return count;
}`
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Execution Trace: Measuring Hamming Distance Across 1-Bit Flips',
        bn: 'এক্সিকিউশন ট্রেস: ১-বিট পরিবর্তনে হ্যামিং দূরত্ব পরিমাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We execute our bit forge on two adjacent strings: record_100 and record_101. These two keys differ by exactly 1 bit in their final ASCII character (ASCII 0 is 00110000 and ASCII 1 is 00110001). Under raw FNV-1a, record_100 hashes to 3731554632 and record_101 hashes to 3748332251, differing by only 7 bits out of 32 (21.9 percent). When we apply the Murmur3 mixing finalizer, the hashes transform into 464744749 and 4292526862. The resulting Hamming distance jumps to 15 bits out of 32 (46.9 percent), closely aligning with the theoretical ideal of 16 bits (50 percent).',
        bn: 'আমরা দুটি সংলগ্ন স্ট্রিংয়ের ওপর আমাদের বিট কারখানার কার্যকারিতা পরীক্ষা করি: record_100 এবং record_101। এই দুটি চাবির শেষ আসকি অক্ষরে ঠিক ১টি বিটের পার্থক্য রয়েছে (ASCII 0 হলো 00110000 এবং ASCII 1 হলো 00110001)। সাধারণ FNV-1a এর অধীনে record_100 এর হ্যাশ হয় ৩৭৩১৫৫৪৬৩২ এবং record_101 এর হ্যাশ হয় ৩৭৪৮৩৩২২৫১, যার ফলে ৩২টির মধ্যে মাত্র ৭টি বিট আলাদা হয় (২১.৯ শতাংশ)। কিন্তু যখন আমরা Murmur3 মিক্সিং ফাইনালাইজার প্রয়োগ করি, তখন হ্যাশ দুটি যথাক্রমে ৪৬৪৭৪৪৭৪৯ এবং ৪২৯২৫২৬৮৬২ এ রূপান্তরিত হয়। এর ফলে হ্যামিং দূরত্ব একলাফে ৩২টির মধ্যে ১৫টি বিটে পৌঁছে যায় (৪৬.৯ শতাংশ), যা তাত্ত্বিক আদর্শ ১৬ বিটের (৫০ শতাংশ) অত্যন্ত কাছাকাছি।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'trace-avalanche.ts',
      caption: {
        en: 'Trace showing Hamming bit distance before and after bit mixing finalization.',
        bn: 'বিট মিক্সিং ফাইনালাইজেশনের আগে ও পরে হ্যামিং বিট দূরত্বের বাস্তব ট্রেস।'
      },
      code: `// Key 1: "record_100" (last byte: 0x30 = 00110000)
// Key 2: "record_101" (last byte: 0x31 = 00110001) -> exactly 1 bit flip!

// 1. Raw FNV-1a:
// hash1 = 3731554632 (hex: 0xde6b0148)
// hash2 = 3748332251 (hex: 0xdf6b02db)
// Differing bits = 7 out of 32 (21.9% bit flip)

// 2. Murmur3 Finalizer Applied:
// final1 = murmurFinalizer(3731554632) = 464744749  (hex: 0x1bb3712d)
// final2 = murmurFinalizer(3748332251) = 4292526862 (hex: 0xffdac30e)
// Differing bits = 15 out of 32 (46.9% bit flip -> near ideal 50%!)

// 3. Naive Sum Hash Failure:
// naiveSumHash("abc") = 294
// naiveSumHash("cba") = 294 -> 100% collision rate on anagrams!`
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'Visualizing Avalanche Bit Propagation',
        bn: 'অ্যাভালাঞ্চ বিট বিস্তারের ভিজ্যুয়ালাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'ht'
    },
    {
      type: 'heading',
      id: 'architecture',
      text: {
        en: 'Hash Function Landscape: Non-Cryptographic vs Keyed Salts',
        bn: 'হ্যাশ ফাংশন পরিমণ্ডল: নন-ক্রিপ্টোগ্রাফিক বনাম কি-যুক্ত সল্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Production architectures deploy different hash functions depending on throughput, security, and workload constraints. Non-cryptographic algorithms like MurmurHash3 and XXHash process data in 4-byte or 8-byte blocks using SIMD vector instructions, achieving throughput exceeding 10 gigabytes per second. These algorithms are ideal for internal database indexing, in-memory caches, and distributed log routers like Apache Kafka. However, because they lack cryptographic keys, they are vulnerable to precomputed collision attacks. When accepting external user input from network APIs, engines must deploy keyed pseudorandom functions like SipHash-2-4. SipHash trades approximately 2 to 3 times lower throughput to provide provable immunity against offline collision precomputation.',
        bn: 'উৎপাদনমুখী আর্কিটেকচারে গতি, নিরাপত্তা এবং সিস্টেমের সীমাবদ্ধতার ওপর ভিত্তি করে ভিন্ন ভিন্ন হ্যাশ ফাংশন নিযুক্ত করা হয়। MurmurHash3 এবং XXHash এর মতো নন-ক্রিপ্টোগ্রাফিক অ্যালগরিদমগুলো SIMD ভেক্টর নির্দেশের সাহায্যে ৪-বাইট বা ৮-বাইট ব্লকে ডেটা প্রসেস করে প্রতি সেকেন্ডে ১০ গিগাবাইটেরও বেশি থ্রুপুট দেয়। এই অ্যালগরিদমগুলো অভ্যন্তরীণ ডেটাবেস ইনডেক্সিং, ইন-মেমরি ক্যাশ এবং অ্যাপাচি কাফকার মতো বিতরণকৃত লগ রাউটারে ব্যবহারের জন্য আদর্শ। তবে ক্রিপ্টোগ্রাফিক চাবি না থাকায় এগুলো পূর্বগণিত সংঘর্ষ আক্রমণের মুখে ঝুঁকিপূর্ণ। নেটওয়ার্ক এপিআই থেকে বহিরাগত ব্যবহারকারীর ইনপুট গ্রহণের সময় ইঞ্জিনগুলোকে অবশ্যই SipHash-2-4 এর মতো কি-যুক্ত সিউডোর‍্যান্ডম ফাংশন ব্যবহার করতে হয়। সিপহ্যাশ প্রায় ২ থেকে ৩ গুণ কম গতি দিলেও অফলাইনে সংঘর্ষ তৈরির বিরুদ্ধে নিশ্চিত সুরক্ষা প্রদান করে।'
      }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Selecting the Right Hash Function',
        bn: 'সঠিক হ্যাশ ফাংশন নির্বাচনের নিয়ম'
      },
      text: {
        en: 'Use MurmurHash3 or XXHash for internal high-throughput data processing where input is trusted. Use SipHash for untrusted public endpoints, web frameworks, and programming language default map implementations to neutralize HashDOS.',
        bn: 'অভ্যন্তরীণ উচ্চগতির ডেটা প্রসেসিংয়ে যেখানে ইনপুট বিশ্বস্ত, সেখানে MurmurHash3 বা XXHash ব্যবহার করুন। কিন্তু যেখানে বহিরাগত ব্যবহারকারীর অনাস্থাভাজন ইনপুট আসে (যেমন ওয়েব ফ্রেমওয়ার্ক ও ম্যাপ ডিফল্ট), সেখানে হ্যাশডস রুখতে অবশ্যই SipHash ব্যবহার করুন।'
      }
    },
    {
      type: 'heading',
      id: 'comparison',
      text: {
        en: 'Comparative Evaluation of Industry Hash Algorithms',
        bn: 'শিল্পপর্যায়ের হ্যাশ অ্যালগরিদমের তুলনামূলক মূল্যায়ন'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Algorithm', bn: 'অ্যালগরিদম' },
        { en: 'Output Width', bn: 'আউটপুট আকার' },
        { en: 'Throughput Speed', bn: 'থ্রুপুট গতি' },
        { en: 'Adversarial Security', bn: 'প্রতিকূল আক্রমণ প্রতিরোধ' },
        { en: 'Primary Industry Domain', bn: 'প্রধান ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'Additive Sum', bn: 'সাধারণ যোগ' },
          { en: '32-bit integer', bn: '৩২-বিট পূর্ণসংখ্যা' },
          { en: 'Very Fast', bn: 'অত্যন্ত দ্রুত' },
          { en: 'Zero (Anagrams collide 100%)', bn: 'শূন্য (অ্যানাগ্রামে ১০০% সংঘর্ষ)' },
          { en: 'Never in production', bn: 'প্রোডাকশনে সম্পূর্ণ নিষিদ্ধ' }
        ],
        [
          { en: 'FNV-1a', bn: 'FNV-1a' },
          { en: '32/64-bit', bn: '৩২/৬৪-বিট' },
          { en: 'Fast (~1 GB/s)', bn: 'দ্রুত (~১ জিবি/সে.)' },
          { en: 'Unsafe for untrusted input', bn: 'অনাস্থাভাজন ইনপুটে অনিরাপদ' },
          { en: 'Embedded systems, teaching', bn: 'এমবেডেড সিস্টেম, শিক্ষা' }
        ],
        [
          { en: 'XXHash / Murmur3', bn: 'XXHash / Murmur3' },
          { en: '32/64/128-bit', bn: '৩২/৬৪/১২৮-বিট' },
          { en: 'Ultra-fast (>10 GB/s)', bn: 'অতি-উচ্চগতি (>১০ জিবি/সে.)' },
          { en: 'Vulnerable to precomputation', bn: 'পূর্বগণনা আক্রমণের ঝুঁকিপূর্ণ' },
          { en: 'Kafka, Cassandra, RocksDB', bn: 'Kafka, Cassandra, RocksDB' }
        ],
        [
          { en: 'SipHash-2-4', bn: 'SipHash-2-4' },
          { en: '64-bit', bn: '৬৪-বিট' },
          { en: 'Moderate (~3 GB/s)', bn: 'মাঝারি (~৩ জিবি/সে.)' },
          { en: 'Immune (128-bit secret key)', bn: 'নিরাপদ (১২৮-বিট গোপন চাবি)' },
          { en: 'Python dict, Rust HashMap, Go', bn: 'Python dict, Rust HashMap, Go' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'applications',
      text: {
        en: 'System Engineering Patterns for Hash Integrity',
        bn: 'হ্যাশ সততার সিস্টেম ইঞ্জিনিয়ারিং কৌশল'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Distributed Database Partitioning: Cassandra and DynamoDB use MurmurHash3 to uniformly partition billion-record tables across distributed ring clusters.',
          bn: 'ডিস্ট্রিবিউটেড ডেটাবেস পার্টিশনিং: Cassandra এবং DynamoDB শত কোটি রেকর্ডের টেবিলকে ডিস্ট্রিবিউটেড ক্লাস্টারের রিংয়ে সুষমভাবে বণ্টন করতে MurmurHash3 ব্যবহার করে।'
        },
        {
          en: 'Streaming Checksums and Deduplication: Object stores and backup systems use 64-bit XXHash to verify block integrity and detect duplicate payloads in microsecond time.',
          bn: 'স্ট্রিমিং চেকসাম ও ডেটা ডিডুপ্লিকেশন: ক্লাউড অবজেক্ট স্টোরগুলো মাইক্রোসেকেন্ড সময়ে ব্লকের অখণ্ডতা যাচাই করতে এবং ডুপ্লিকেট ডেটা শনাক্ত করতে ৬৪-বিট XXHash ব্যবহার করে।'
        },
        {
          en: 'Compiler Token Hashing: Modern compiler lexers hash keywords and variable identifiers using FNV-1a to accelerate symbol lookup during abstract syntax tree construction.',
          bn: 'কম্পাইলার টোকেন হ্যাশিং: আধুনিক কম্পাইলার লেক্সার সিনট্যাক্স ট্রি তৈরির সময় দ্রুতগতির সিম্বল সন্ধানের জন্য FNV-1a দিয়ে কিওয়ার্ড ও ভেরিয়েবলের নাম হ্যাশ করে।'
        },
        {
          en: 'Cache Key Composite Serialization: Web caching layers concatenate tenant identifiers, user roles, and query parameters, applying bit finalizers to avoid multi-tenant key collisions.',
          bn: 'ক্যাশ কি কম্পোজিট সিরিয়ালাইজেশন: ওয়েব ক্যাশিং লেয়ারে বিভিন্ন ইউজারের ডেটা আলাদা রাখতে একাধিক প্যারামিটার একত্রিত করে বিট ফাইনালাইজার দিয়ে নিরাপদ ক্যাশ কি তৈরি করা হয়।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-fold-ledger',
    tech: 'hashtables',
    title: {
      en: 'The Fold Ledger: Modulo, Bitwise Masking & Capacity Laws',
      bn: 'ফোল্ড লেজার: মডুলো, বিটওয়াইজ মাস্কিং ও ধারণক্ষমতার নীতি'
    }
  },
  exercises: [
    {
      id: 'af-ex1',
      kind: 'mcq',
      topic: 'strict avalanche criterion',
      question: {
        en: 'What does the Strict Avalanche Criterion (SAC) mandate for an optimal hash function?',
        bn: 'একটি সর্বোত্তম হ্যাশ ফাংশনের ক্ষেত্রে কঠোর অ্যাভালাঞ্চ ক্রাইটেরিয়ন (SAC) কী শর্ত আরোপ করে?'
      },
      options: [
        {
          en: 'Flipping any single input bit must cause each output bit to flip with an independent probability of 50 percent',
          bn: 'ইনপুটের যেকোনো একটিমাত্র বিট পরিবর্তন করলে আউটপুটের প্রতিটি বিট স্বাধীনভাবে ৫০ শতাংশ সম্ভাবনায় উল্টে যেতে হবে'
        },
        {
          en: 'All output bits must remain identical whenever two keys share the same character prefix',
          bn: 'দুটি চাবিতে একই অক্ষর প্রিফিক্স থাকলে আউটপুটের সব বিটকে হুবহু অপরিবর্তিত থাকতে হবে'
        },
        {
          en: 'The output integer must always evaluate to an odd prime number greater than 16777619',
          bn: 'আউটপুট পূর্ণসংখ্যাটিকে সর্বদা ১৬৭৭৭৬১৯ এর চেয়ে বড় একটি বিজোড় মৌলিক সংখ্যা হতে হবে'
        },
        {
          en: 'The hash algorithm must execute in zero CPU clock cycles inside L1 cache registers',
          bn: 'হ্যাশ অ্যালগরিদমটিকে L1 ক্যাশ রেজিস্ট্রারে শূন্য ক্লক চক্রে কাজ সম্পন্ন করতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Half of the output bits should change on average when 1 input bit changes.',
        bn: '১টি ইনপুট বিট পরিবর্তিত হলে গড়ে আউটপুটের অর্ধেক বিট বদলে যাওয়া উচিত।'
      },
      explanation: {
        en: 'The strict avalanche criterion guarantees that small localized variations in input keys (such as sequential IDs) produce radically different, uncorrelated hashes, preventing clustering in hash tables.',
        bn: 'কঠোর অ্যাভালাঞ্চ নীতি নিশ্চিত করে যে ইনপুট কী-এর ক্ষুদ্রতম পরিবর্তনও সম্পূর্ণ স্বাধীন ও সম্পর্কহীন হ্যাশ তৈরি করবে, যা হ্যাশ টেবিলে গুচ্ছায়ন প্রতিরোধ করে।'
      }
    },
    {
      id: 'af-ex2',
      kind: 'predict',
      topic: 'naive additive hash failure',
      question: {
        en: 'Why does an additive character sum hash function produce a 100 percent collision between keys "abc" and "cba"?',
        bn: 'একটি সাধারণ অক্ষর যোগ হ্যাশ ফাংশন কেন "abc" এবং "cba" চাবির মধ্যে ১০০ শতাংশ নিশ্চিত সংঘর্ষ তৈরি করে?'
      },
      options: [
        {
          en: 'Integer addition is commutative (97 + 98 + 99 = 99 + 98 + 97 = 294), making sum-based hashing completely blind to character order',
          bn: 'পূর্ণসংখ্যার যোগ প্রক্রিয়া স্থানবিনিময়যোগ্য (৯৭ + ৯৮ + ৯৯ = ৯৯ + ৯৮ + ৯৭ = ২৯৪), যার ফলে যোগফল-ভিত্তিক হ্যাশিং অক্ষরের অবস্থানগত পার্থক্য ধরতে পারে না'
        },
        {
          en: 'The JavaScript runtime treats strings shorter than 4 characters as identical memory references',
          bn: 'জাভাস্ক্রিপ্ট রানটাইম ৪ অক্ষরের চেয়ে ছোট স্ট্রিংগুলোকে অভিন্ন মেমরি রেফারেন্স হিসেবে বিবেচনা করে'
        },
        {
          en: 'Unicode ASCII standard encodes all permutations with identical 32-bit binary representations',
          bn: 'ইউনিকোড আসকি স্ট্যান্ডার্ড প্রতিটি পুনর্বিন্যাসকে অভিন্ন ৩২-বিট বাইনারি সংখ্যায় এনকোড করে'
        },
        {
          en: 'The CPU branch predictor forces an early return on strings containing consecutive alphabetical letters',
          bn: 'পরপর বর্ণমালার অক্ষর থাকা স্ট্রিং পেলে সিপিইউ ব্রাঞ্চ প্রেডিক্টর দ্রুত রিটার্ন সম্পন্ন করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'In basic math, Does order matter in addition? 1 + 2 equals 2 + 1.',
        bn: 'যোগ করার সময় কি ক্রমের কোনো প্রভাব থাকে? ১ + ২ এবং ২ + ১ উভয়ের ফলাফল ৩।'
      },
      explanation: {
        en: 'Because addition ignores position, any anagram of a string yields the exact same numerical sum (294). Quality hash functions use multiplication and bit shifts to ensure position matters.',
        bn: 'যেহেতু যোগফল অক্ষরের অবস্থান বিচার করে না, তাই যেকোনো শব্দের অ্যানাগ্রাম হুবহু একই যোগফল (২৯৪) তৈরি করে। ভালো মানের হ্যাশ ফাংশন তাই অবস্থান বিবেচনায় রাখতে গুণন ও বিট শিফটের আশ্রয় নেয়।'
      }
    },
    {
      id: 'af-ex3',
      kind: 'mcq',
      topic: 'murmur finalizer mixing',
      question: {
        en: 'What is the primary architectural purpose of a hash finalizer (such as the Murmur3 finalizer)?',
        bn: 'একটি হ্যাশ ফাইনালাইজারের (যেমন Murmur3 ফাইনালাইজার) প্রধান আর্কিটেকচারাল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'To cascade higher-order and lower-order bits into each other via alternating XOR-shifts and prime multiplications, achieving full avalanche diffusion',
          bn: 'পর্যায়ক্রমিক XOR-শিফট এবং প্রাইম গুণনের মাধ্যমে উপরের ও নিচের বিটগুলোকে একে অপরের সাথে মিশিয়ে পূর্ণ অ্যাভালাঞ্চ প্রসারণ অর্জন করা'
        },
        {
          en: 'To compress 64-bit integer values into 8-bit characters for network transmission',
          bn: 'নেটওয়ার্কে পাঠানোর সুবিধার্থে ৬৪-বিট পূর্ণসংখ্যাকে ৮-বিট অক্ষরে সংকুচিত করা'
        },
        {
          en: 'To write the hash value directly to physical NVMe storage registers',
          bn: 'হ্যাশ মানটিকে সরাসরি বাস্তব NVMe স্টোরেজ রেজিস্ট্রারে রাইট করা'
        },
        {
          en: 'To verify whether the operating system kernel supports multi-threaded memory allocation',
          bn: 'অপারেটিং সিস্টেম কার্নেল মাল্টি-থ্রেডেড মেমরি বরাদ্দ সমর্থন করে কি না তা যাচাই করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'A finalizer mixes the remaining unmixed bits at the end of hashing.',
        bn: 'একটি ফাইনালাইজার হ্যাশিংয়ের শেষে অবশিষ্ট অমিলিত বিটগুলোকে পরস্পরের সাথে মিশিয়ে দেয়।'
      },
      explanation: {
        en: 'Without a finalizer, the highest bits of an input may not thoroughly influence the lowest bits. Finalizers ensure that every output bit is a non-linear combination of all input bits.',
        bn: 'ফাইনালাইজার না থাকলে ইনপুটের সর্বোচ্চ বিটগুলো সর্বনিম্ন বিটগুলোকে সঠিকভাবে প্রভাবিত করতে পারে না। ফাইনালাইজার নিশ্চিত করে যেন আউটপুটের প্রতিটি বিট সব ইনপুট বিটের একটি জটিল নন-লিনিয়ার সমন্বয় হয়।'
      }
    },
    {
      id: 'af-ex4',
      kind: 'mcq',
      topic: 'siphash vs xxhash trade-off',
      question: {
        en: 'Why do web runtimes like Python and Rust use SipHash instead of the much faster XXHash for their default map implementations?',
        bn: 'পাইথন এবং রাস্টের মতো আধুনিক রানটাইমগুলো কেন তাদের ডিফল্ট ম্যাপে অতি দ্রুতগতির XXHash এর বদলে SipHash ব্যবহার করে?'
      },
      options: [
        {
          en: 'XXHash is an unkeyed hash vulnerable to precalculated HashDOS attacks, while SipHash uses a per-process 128-bit secret key to make collisions uncomputable',
          bn: 'XXHash হলো একটি কি-হীন হ্যাশ যা পূর্বগণিত হ্যাশডস আক্রমণের ঝুঁকিপূর্ণ, অন্যদিকে SipHash প্রক্রিয়াপ্রতি ১২৮-বিট গোপন চাবি ব্যবহার করে সংঘর্ষের পূর্বগণনা অসম্ভব করে তোলে'
        },
        {
          en: 'XXHash does not run on Intel 64-bit microprocessors',
          bn: 'XXHash ইন্টেল ৬৪-বিট মাইক্রোপ্রসেসরে কাজ করতে পারে না'
        },
        {
          en: 'SipHash automatically balances Red-Black trees in kernel space',
          bn: 'SipHash কার্নেল স্পেসে স্বয়ংক্রিয়ভাবে রেড-ব্ল্যাক ট্রির ভারসাম্য রক্ষা করে'
        },
        {
          en: 'Python and Rust syntax parsers do not support 32-bit integer arithmetic',
          bn: 'পাইথন এবং রাস্ট সিনট্যাক্স পার্সার ৩২-বিট পূর্ণসংখ্যা পাটিগণিত সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Security vs raw speed: an adversary can exploit predictable hashes.',
        bn: 'নিরাপত্তা বনাম গতি: আক্রমণকারী অনুমানযোগ্য হ্যাশকে নিজের স্বার্থে ব্যবহার করতে পারে।'
      },
      explanation: {
        en: 'Even though XXHash exceeds 10 GB/s, its predictability allows attackers to craft colliding payloads offline. Web servers prioritize HashDOS immunity over raw hashing speed.',
        bn: 'যদিও XXHash প্রতি সেকেন্ডে ১০ গিগাবাইটের বেশি গতি দিতে পারে, কিন্তু এর ফলাফল অনুমানযোগ্য হওয়ায় আক্রমণকারী অফলাইনে কৃত্রিম সংঘর্ষ তৈরি করতে পারে। ওয়েব সার্ভারগুলো তাই গতির চেয়ে নিরাপত্তাকে অগ্রাধিকার দেয়।'
      }
    }
  ],
  quiz: {
    id: 'af-quiz',
    title: {
      en: 'Hash Function Architecture Quiz',
      bn: 'হ্যাশ ফাংশন আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'afq1',
        kind: 'mcq',
        topic: 'hamming distance measurement',
        question: {
          en: 'In a 32-bit hash function satisfying the strict avalanche criterion, what is the expected Hamming distance between the hashes of two keys that differ by a single bit?',
          bn: 'কঠোর অ্যাভালাঞ্চ শর্ত পূরণকারী একটি ৩২-বিট হ্যাশ ফাংশনে ১-বিট পার্থক্যযুক্ত দুটি চাবির হ্যাশের মধ্যে প্রত্যাশিত হ্যামিং দূরত্ব কত?'
        },
        options: [
          {
            en: 'Approximately 16 bits (50 percent of the 32 output bits)',
            bn: 'প্রায় ১৬ বিট (৩২টি আউটপুট বিটের ৫০ শতাংশ)'
          },
          {
            en: 'Exactly 1 bit (preserving input proximity)',
            bn: 'ঠিক ১ বিট (ইনপুটের নৈকট্য বজায় রেখে)'
          },
          {
            en: '0 bits (both keys must map to the same bucket)',
            bn: '০ বিট (উভয় চাবিকে একই বাকেটে পড়তে হবে)'
          },
          {
            en: 'Exactly 32 bits (every bit must invert deterministically)',
            bn: 'ঠিক ৩২টি বিট (প্রতিটি বিট নিশ্চিতভাবে উল্টে যেতে হবে)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Half of 32 bits is 16.',
          bn: '৩২ বিটের অর্ধেক হলো ১৬।'
        },
        explanation: {
          en: 'Under perfect bit diffusion, each of the 32 output bits has a 50 percent chance of inverting. The expected number of differing bits is 32 * 0.5 = 16 bits.',
          bn: 'নিখুঁত বিট প্রসারণের অধীনে প্রতিটি আউটপুট বিটের পরিবর্তনের সম্ভাবনা ৫০ শতাংশ। ফলে প্রত্যাশিত ভিন্ন বিটের সংখ্যা ৩২ * ০.৫ = ১৬ বিট।'
        }
      },
      {
        id: 'afq2',
        kind: 'mcq',
        topic: 'prime multiplication in hashing',
        question: {
          en: 'Why do non-cryptographic hash functions like FNV-1a multiply the accumulator by large prime numbers?',
          bn: 'FNV-1a এর মতো নন-ক্রিপ্টোগ্রাফিক হ্যাশ ফাংশনগুলোতে একিউমুলেটরকে কেন বড় মৌলিক সংখ্যা দিয়ে গুণ করা হয়?'
        },
        options: [
          {
            en: 'Multiplication causes input bits to propagate non-linearly across higher bit positions without introducing common divisors',
            bn: 'গুণনের ফলে ইনপুট বিটগুলো কোনো সাধারণ গুণনীয়কের প্রভাব ছাড়াই উচ্চতর বিট অবস্থানে নন-লিনিয়ারভাবে ছড়িয়ে পড়ে'
          },
          {
            en: 'Prime numbers trigger hardware floating-point acceleration on modern CPUs',
            bn: 'মৌলিক সংখ্যা আধুনিক সিপিইউতে হার্ডওয়্যার ফ্লোটিং-পয়েন্ট গতি বৃদ্ধি সক্রিয় করে'
          },
          {
            en: 'Multiplying by primes prevents the JavaScript runtime from allocating heap garbage',
            bn: 'প্রাইম দিয়ে গুণ করলে জাভাস্ক্রিপ্ট রানটাইমে হিপ মেমরির অপ্রয়োজনীয় আবর্জনা তৈরি বন্ধ হয়'
          },
          {
            en: 'It reduces the memory size of string keys stored in L2 cache lines',
            bn: 'এটি L2 ক্যাশ লাইনে সংরক্ষিত স্ট্রিং চাবিগুলোর মেমরি আকার কমিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Prime numbers lack factors that could cause periodicity or patterns in modular arithmetic.',
          bn: 'মৌলিক সংখ্যার এমন কোনো গুণনীয়ক নেই যা মডুলার পাটিগণিতে পুনরাবৃত্তিমূলক প্যাটার্ন তৈরি করতে পারে।'
        },
        explanation: {
          en: 'Multiplying by a prime integer guarantees that every bit of the input key interacts mathematically with all positions, preventing periodic cancellation and clumping in modular arithmetic.',
          bn: 'মৌলিক সংখ্যা দিয়ে গুণ করলে ইনপুট চাবির প্রতিটি বিট সব অবস্থানের সাথে গাণিতিকভাবে ক্রিয়া করে, যা মডুলার পাটিগণিতে চক্রাকার বাতিলকরণ ও গুচ্ছায়ন রোধ করে।'
        }
      },
      {
        id: 'afq3',
        kind: 'predict',
        topic: 'anagram collision vulnerability',
        question: {
          en: 'If a database index uses an additive character sum hash function, what happens when inserting 1000 anagrammatic variations of a word (e.g. "listen", "silent")?',
          bn: 'যদি কোনো ডেটাবেস ইনডেক্স সাধারণ অক্ষর যোগ হ্যাশ ফাংশন ব্যবহার করে, তবে একটি শব্দের ১০০০টি অ্যানাগ্রাম ভ্যারিয়েশন (যেমন "listen", "silent") সন্নিবেশ করলে কী ঘটবে?'
        },
        options: [
          {
            en: 'All 1000 words produce identical sum values and crowd into the same bucket, creating severe primary collisions and O(n) degradation',
            bn: 'সব ১০০০টি শব্দ হুবহু একই যোগফল তৈরি করে একই বাকেটে ভিড় জমাবে, যার ফলে মারাত্মক সংঘর্ষ এবং O(n) ধীরগতির সৃষ্টি হবে'
          },
          {
            en: 'The database engine automatically sorts the strings alphabetically in L1 instruction cache',
            bn: 'ডেটাবেস ইঞ্জিন স্বয়ংক্রিয়ভাবে L1 ইনস্ট্রাকশন ক্যাশে স্ট্রিংগুলোকে বর্ণানুক্রমে সাজিয়ে নেবে'
          },
          {
            en: 'Each anagram is assigned a sequential bucket number based on its string creation timestamp',
            bn: 'প্রতিটি অ্যানাগ্রাম তৈরির টাইমস্ট্যাম্পের ওপর ভিত্তি করে একটি ধারাবাহিক বাকেট নম্বর পাবে'
          },
          {
            en: 'The operating system file system rejects the write operation due to duplicate inode allocations',
            bn: 'ডুপ্লিকেট ইনোড বরাদ্দের কারণে অপারেটিং সিস্টেম ফাইল সিস্টেম রাইট অপারেশন প্রত্যাখ্যান করবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The letters in "listen" and "silent" are identical; only their order differs.',
          bn: '"listen" এবং "silent" শব্দ দুটিতে একই অক্ষর রয়েছে; কেবল তাদের অবস্থান আলাদা।'
        },
        explanation: {
          en: 'Because addition is commutative, the order of characters is completely ignored. All permutations evaluate to the exact same hash, degrading lookups to a linear scan.',
          bn: 'যেহেতু যোগ প্রক্রিয়ায় অক্ষরের অবস্থান বা ক্রমের কোনো প্রভাব থাকে না, তাই যেকোনো পুনর্বিন্যাসের হ্যাশ হুবহু একই হয় এবং লুকআপ গতি লিনিয়ার স্ক্যানে নেমে যায়।'
        }
      },
      {
        id: 'afq4',
        kind: 'mcq',
        topic: 'cryptographic vs non-cryptographic hashes',
        question: {
          en: 'Why are cryptographic hashes like SHA-256 rarely used as internal hash table functions for in-memory collections?',
          bn: 'SHA-256 এর মতো ক্রিপ্টোগ্রাফিক হ্যাশ ফাংশনগুলো কেন ইন-মেমরি হ্যাশ টেবিলের অভ্যন্তরীণ ফাংশন হিসেবে খুব কম ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'SHA-256 requires extensive computational rounds, making it 10 to 50 times slower than non-cryptographic hashes like XXHash or SipHash',
            bn: 'SHA-256 এর জন্য বহুসংখ্যক কম্পিউটেশনাল রাউন্ডের প্রয়োজন হয়, যা এটিকে XXHash বা SipHash এর চেয়ে ১০ থেকে ৫০ গুণ ধীরগতির করে তোলে'
          },
          {
            en: 'Cryptographic hashes produce 256-bit outputs that cannot be stored in modern 64-bit computer memory',
            bn: 'ক্রিপ্টোগ্রাফিক হ্যাশ ২৫৬-বিট আউটপুট তৈরি করে যা আধুনিক ৬৪-বিট কম্পিউটার মেমরিতে সংরক্ষণ করা যায় না'
          },
          {
            en: 'SHA-256 algorithm suffers from high collision rates on string keys shorter than 32 characters',
            bn: '৩২ অক্ষরের চেয়ে ছোট স্ট্রিং কী-এর ক্ষেত্রে SHA-256 অ্যালগরিদম মারাত্মক সংঘর্ষের ঝুঁকিতে পড়ে'
          },
          {
            en: 'Web browsers block cryptographic hash calculations in asynchronous event handlers',
            bn: 'ওয়েব ব্রাউজার অ্যাসিনক্রোনাস ইভেন্ট হ্যান্ডলারে ক্রিপ্টোগ্রাফিক হ্যাশ গণনা বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Cryptographic security requires heavy rounds of bit diffusion that incur significant CPU latency.',
          bn: 'ক্রিপ্টোগ্রাফিক সুরক্ষার জন্য অনেকগুলো জটিল রাউন্ডের প্রয়োজন হয় যা প্রচুর সিপিইউ সময় ব্যয় করে।'
        },
        explanation: {
          en: 'Cryptographic hashes are engineered to resist preimage and collision attacks by adversaries with supercomputers, requiring dozens of heavy rounds. In-memory hash tables only require uniform dispersion and speed, making lightweight hashes optimal.',
          bn: 'ক্রিপ্টোগ্রাফিক হ্যাশ এমনভাবে তৈরি যেন সুপারকম্পিউটার দিয়েও মূল ডেটা বের করা না যায়, যার জন্য প্রচুর সময় লাগে। ইন-মেমরি হ্যাশ টেবিলের জন্য কেবল দ্রুতগতি ও সুষম বণ্টন প্রয়োজন, তাই হালকা অ্যালগরিদমই সর্বোত্তম।'
        }
      }
    ]
  }
};
