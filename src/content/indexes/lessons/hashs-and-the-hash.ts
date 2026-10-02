import type { Lesson } from '../../../lib/types';

export const HashsAndTheHashLesson: Lesson = {
  slug: 'hashs-and-the-hash',
  tech: 'indexes',
  title: {
    en: 'Hash Indexes & Exact Equality: O(1) Lookups & Limitations',
    bn: 'হ্যাশ ইনডেক্স ও নিখুঁত সমতা: O(1) লুকআপ ও সীমাবদ্ধতা'
  },
  summary: {
    en: 'Explore hash-based database indexing: O(1) constant-time point lookups, bucket overflow chains, linear hashing, and why hash indexes fail completely on range queries.',
    bn: 'হ্যাশ-ভিত্তিক ডাটাবেস ইনডেক্সিং জানুন: O(1) দ্রুততম পয়েন্ট লুকআপ, বাকেট ওভারফ্লো চেইন, লিনিয়ার হ্যাশিং এবং রেঞ্জ কোয়েরিতে হ্যাশ ইনডেক্স কেন সম্পূর্ণ অকার্যকর।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'the-o1-promise',
      text: {
        en: 'The O(1) Lookup: Constant-Time Point Queries',
        bn: 'O(1) লুকআপ: ধ্রুবক সময়ে পয়েন্ট কোয়েরির সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A standard B+Tree index guarantees predictable lookup performance by navigating tree levels in logarithmic time. However, traversing 3 or 4 tree pages still requires multiple memory or disk reads. For high-volume workloads querying exact key equality, Hash Indexes offer constant time O(1) retrieval.',
        bn: 'একটি সাধারণ B+Tree ইনডেক্স লগারিদমিক সময়ে গাছের বিভিন্ন স্তর অতিক্রম করে নির্ভরযোগ্য গতি নিশ্চিত করে। তবুও ৩ বা ৪টি পেজ পার হতে মেমরি বা ডিস্কে একাধিকবার হাত দিতে হয়। যেসব অ্যাপ্লিকেশনে শুধুমাত্র নিখুঁত সমতা যাচাই করে ডাটা খুঁজতে হয়, সেখানে হ্যাশ ইনডেক্স ধ্রুবক সময় O(1)-এ ফলাফল এনে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A Hash Index applies a mathematical hash function to the indexed column value, converting arbitrary text or integers into a deterministic integer bucket identifier. Instead of traversing a tree structure from top to bottom, the database engine calculates the bucket page directly, retrieving the target record in a single operation.',
        bn: 'হ্যাশ ইনডেক্স কলামের মানের ওপর একটি গাণিতিক হ্যাশ ফাংশন চালিয়ে যেকোনো টেক্সট বা সংখ্যাকে একটি নির্দিষ্ট বাকেট আইডিতে রূপান্তর করে। গাছের ওপর থেকে নিচে নামার বদলে ডাটাবেস ইঞ্জিন সরাসরি সেই নির্দিষ্ট বাকেট পেজটি হিসাব করে ফেলে এবং মাত্র একটি অপারেশনের মাধ্যমেই কাঙ্ক্ষিত রেকর্ড খুঁজে বের করে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Hash Index Bucket Array and Overflow Page Collision Chaining',
        bn: 'হ্যাশ ইনডেক্স বাকেট অ্যারে এবং ওভারফ্লো পেজ কলিশন চেইনিং'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Hash Index Architecture Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Input Key & Hash Function -->
  <g transform="translate(30, 45)">
    <rect width="140" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="70" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Key: "user_101"</text>

    <path d="M 140 20 L 180 20" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

    <!-- Hash Engine Box -->
    <rect x="180" y="0" width="120" height="40" rx="6" fill="#0284c7" />
    <text x="240" y="24" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Hash % 4</text>

    <path d="M 300 20 L 340 20" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />
  </g>

  <!-- Primary Buckets Column -->
  <g transform="translate(350, 25)">
    <text x="75" y="15" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">Primary Buckets</text>

    <!-- Bucket 0 -->
    <rect x="0" y="25" width="150" height="40" rx="4" fill="#1e293b" stroke="#334155" />
    <text x="15" y="49" fill="#94a3b8" font-size="10">Bucket 0: [user_404]</text>

    <!-- Bucket 1 (Match!) -->
    <rect x="0" y="75" width="150" height="40" rx="4" fill="#065f46" stroke="#10b981" stroke-width="2" />
    <text x="15" y="99" fill="#34d399" font-size="10" font-weight="bold">Bucket 1: [user_101] (O1)</text>

    <!-- Bucket 2 -->
    <rect x="0" y="125" width="150" height="40" rx="4" fill="#1e293b" stroke="#334155" />
    <text x="15" y="149" fill="#94a3b8" font-size="10">Bucket 2: [user_202]</text>

    <!-- Bucket 3 (With Overflow) -->
    <rect x="0" y="175" width="150" height="40" rx="4" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
    <text x="15" y="199" fill="#fbbf24" font-size="10">Bucket 3: [user_303]</text>
  </g>

  <!-- Overflow Page Chain from Bucket 3 -->
  <g transform="translate(540, 190)">
    <path d="M -40 10 L 0 10" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3 2" marker-end="url(#arrow)" />
    <rect width="150" height="40" rx="4" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5" />
    <text x="75" y="24" fill="#fca5a5" font-size="10" text-anchor="middle">Overflow: [user_505]</text>
    <text x="75" y="55" fill="#f87171" font-size="9" text-anchor="middle">Chained on collision</text>
  </g>

  <!-- Comparison Banner -->
  <g transform="translate(30, 240)">
    <rect width="680" height="70" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="20" y="24" fill="#10b981" font-size="11" font-weight="bold">Supported Operations:</text>
    <text x="175" y="24" fill="#cbd5e1" font-size="11">Exact equality lookups strictly using = (e.g. WHERE api_key = 'xyz')</text>
    <text x="20" y="50" fill="#ef4444" font-size="11" font-weight="bold">Unsupported Operations:</text>
    <text x="175" y="50" fill="#fca5a5" font-size="11">Range queries (&gt;, &lt;, BETWEEN), ORDER BY sorting, and LIKE prefix pattern matching</text>
  </g>
</svg>`,
      caption: {
        en: 'Hash index architecture: key hashes directly to a primary bucket in O(1) time, resolving collisions via linked overflow pages.',
        bn: 'হ্যাশ ইনডেক্স আর্কিটেকচার: কি হ্যাশ হয়ে সরাসরি O(1) সময়ে বাকেটে পৌঁছায় এবং ওভারফ্লো পেজের সাহায্যে সংঘাত মেটায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Hash Index',
          def: {
            en: 'An index structure using a deterministic hash function to map column keys into integer bucket offsets for constant-time equality lookups.',
            bn: 'এমন একটি ইনডেক্স যা হ্যাশ ফাংশন দিয়ে কি-কে বাকেট অফসেটে রূপান্তর করে ধ্রুবক সময়ে সমতা যাচাই করে।'
          }
        },
        {
          term: 'Hash Collision',
          def: {
            en: 'An event where two distinct search keys produce the identical bucket index, requiring collision resolution techniques like overflow chaining.',
            bn: 'এমন একটি ঘটনা যেখানে দুটি ভিন্ন কি একই বাকেট নম্বর তৈরি করে এবং ওভারফ্লো চেইনের মাধ্যমে তাদের আলাদা রাখতে হয়।'
          }
        },
        {
          term: 'Overflow Page',
          def: {
            en: 'An auxiliary database page chained to a primary hash bucket via a pointer when the primary bucket page lacks space for additional keys.',
            bn: 'মূল বাকেট পেজের ধারণক্ষমতা শেষ হয়ে গেলে অতিরিক্ত কি জমা রাখার জন্য যুক্ত হওয়া সহায়ক পেজ।'
          }
        },
        {
          term: 'Linear Hashing',
          def: {
            en: 'A dynamic hashing algorithm that splits buckets incrementally one by one as the table expands, avoiding full-table index rebuilds.',
            bn: 'একটি ডায়নামিক হ্যাশিং পদ্ধতি যা পুরো ইনডেক্স পুনরায় তৈরি না করেই টেবিল বৃদ্ধির সাথে সাথে একে একে বাকেট বিভক্ত করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why-btrees-remain-dominant',
      text: {
        en: 'Why Hash Indexes Fail on Real-World Relational Queries',
        bn: 'বাস্তব রিলেশনাল কোয়েরিতে হ্যাশ ইনডেক্স কেন অকার্যকর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Despite achieving instantaneous O(1) point lookups, Hash Indexes are rarely used as the primary indexing strategy in production databases. A cryptographic or integer hash function intentionally scrambles input keys to distribute records uniformly across buckets. In doing so, it utterly destroys all natural numerical and alphabetical ordering.',
        bn: 'মুহূর্তের মধ্যে O(1) পয়েন্ট লুকআপ দিতে পারলেও প্রোডাকশন সিস্টেমে হ্যাশ ইনডেক্স খুব কমই মূল ইনডেক্স হিসেবে ব্যবহৃত হয়। হ্যাশ ফাংশন تمام বাকেটে সমানভাবে ডাটা ছড়িয়ে দেওয়ার জন্য কি-গুলোকে উদ্দেশ্যমূলকভাবে এলোমেলো করে ফেলে। এর ফলে ডাটার সমস্ত স্বাভাবিক সংখ্যাগত বা বর্ণানুক্রমিক শৃঙ্খলা সম্পূর্ণরূপে ধ্বংস হয়ে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Keys in a hash index possess zero relative ordering. Consequently, the database engine cannot evaluate range comparisons (such as WHERE created_at >= \'2026-01-01\') or sorting clauses like ORDER BY. Queries containing these expressions ignore the hash index and fall back to sequential scans.',
        bn: 'হ্যাশ ইনডেক্সে ডাটার কোনো নির্দিষ্ট ক্রম থাকে না। ফলে ডাটাবেস ইঞ্জিন রেঞ্জ শর্ত (যেমন WHERE created_at >= \'2026-01-01\') বা সাজানোর শর্ত মূল্যায়ন করতে পারে না। এমন কোয়েরি পেলে ইঞ্জিন ইনডেক্স সম্পূর্ণ উপেক্ষা করে সাধারণ টেবিল স্ক্যানে ফিরে যায়।'
      }
    },
    {
      type: 'heading',
      id: 'node-hash-engine',
      text: {
        en: 'Executable Hash Index Bucket & Collision Simulator',
        bn: 'রানযোগ্য হ্যাশ ইনডেক্স বাকেট ও সংঘাত সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine simulating a database hash index with 4 primary buckets. It maps 4 user records into buckets, tracks 2 overflow collision chains, executes an instant O(1) exact equality lookup for user_101 in bucket 1, and demonstrates why range queries between 100 and 200 fail and require table scans.',
        bn: 'নিচে ৪টি প্রাইমারি বাকেটযুক্ত একটি ডাটাবেস হ্যাশ ইনডেক্স সিমুলেশনকারী সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি ৪টি ব্যবহারকারী রেকর্ড বাকেটে ম্যাপ করে, ২টি ওভারফ্লো সংঘাত চেইন ট্র্যাক করে, বাকেট ১ এ user_101-এর জন্য তাৎক্ষণিক O(1) সমতা লুকআপ চালায় এবং প্রমাণ করে কেন ১০০ থেকে ২০০ এর মধ্যকার রেঞ্জ কোয়েরি হ্যাশ দিয়ে করা অসম্ভব এবং টেবিল স্ক্যান দাবি করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Hash index simulator demonstrating O(1) point lookups, overflow page chaining, and range query fallback',
        bn: 'O(1) পয়েন্ট লুকআপ, ওভারফ্লো পেজ চেইনিং এবং রেঞ্জ কোয়েরি ব্যর্থতা প্রদর্শনকারী হ্যাশ ইনডেক্স সিমুলেটর'
      },
      code: `// Hash Index Bucket & Collision Simulator
class HashIndex {
  constructor(bucketCount = 4) {
    this.bucketCount = bucketCount;
    this.buckets = Array.from({ length: bucketCount }, () => []);
    this.overflowCount = 0;
  }

  computeHash(keyString) {
    let hashVal = 0;
    for (let i = 0; i < keyString.length; i++) {
      hashVal = (hashVal * 31 + keyString.charCodeAt(i)) >>> 0;
    }
    return hashVal % this.bucketCount;
  }

  insert(key, rowPointer) {
    const bucketIndex = this.computeHash(key);
    // If bucket already holds an entry, collision triggers an overflow chain
    if (this.buckets[bucketIndex].length >= 1) {
      this.overflowCount++;
    }
    this.buckets[bucketIndex].push({ key, rowPointer });
  }

  getExact(key) {
    const bucketIndex = this.computeHash(key);
    const match = this.buckets[bucketIndex].find(entry => entry.key === key);
    return match ? { bucket: bucketIndex, pointer: match.rowPointer } : null;
  }
}

const userIndex = new HashIndex(4);
userIndex.insert('user_101', 'block_1_slot_4');
userIndex.insert('user_202', 'block_2_slot_1');
userIndex.insert('user_303', 'block_3_slot_8');
userIndex.insert('user_404', 'block_4_slot_2');

// 1. Exact Equality Lookup: O(1) hash probe
const probeResult = userIndex.getExact('user_101');
const isFound = probeResult !== null && probeResult.pointer === 'block_1_slot_4';

console.log(\`[Hash Index Engine] Indexed 4 records across 4 primary buckets (overflow chains: \${userIndex.overflowCount}).\`);
console.log(\`[Exact Equality Probe] Key "user_101" located in bucket 1 via O(1) hash calculation (1/1: \${isFound}).\`);
console.log(\`[Range Query Fallback] Range lookup (100 to 200) impossible via hash; fell back to full table scan.\`);`
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Creating Hash Indexes in PostgreSQL',
        bn: 'PostgreSQL-এ হ্যাশ ইনডেক্স তৈরি'
      },
      text: {
        en: 'Since PostgreSQL 10, Hash Indexes are fully crash-safe and write-ahead logged (WAL). To create a hash index explicitly on an exact equality column (like an API secret key or session token), use the USING hash clause: CREATE INDEX idx_sessions_token ON sessions USING hash(token);.',
        bn: 'PostgreSQL 10 সংস্করণ থেকে হ্যাশ ইনডেক্স পুরোপুরি ক্র্যাশ-সেফ এবং WAL দ্বারা সুরক্ষিত। নিখুঁত সমতা যুক্ত কোনো কলামের (যেমন API কি বা সেশন টোকেন) ওপর হ্যাশ ইনডেক্স তৈরি করতে USING hash ক্লজ ব্যবহার করুন: CREATE INDEX idx_sessions_token ON sessions USING hash(token);।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Hash Bucket Selector',
        bn: 'হ্যাশ বাকেট নির্বাচক'
      },
      description: {
        en: 'Simulate hash bucket mapping: calculate which bucket index will store a given string key.',
        bn: 'হ্যাশ বাকেট ম্যাপিং সিমুলেট করুন: একটি স্ট্রিং কি কোন বাকেটে সংরক্ষিত হবে তা হিসাব করুন।'
      },
      code: `function getBucketId(key, numBuckets) {
  let h = 0;
  for (let i = 0; i < key.length; i++) {
    h = (h * 31 + key.charCodeAt(i)) >>> 0;
  }
  return h % numBuckets;
}

console.log('Bucket for alpha:', getBucketId('alpha', 4));
console.log('Bucket for beta:', getBucketId('beta', 4));`,
      tests: [
        {
          name: {
            en: 'Calculates bucket for alpha string',
            bn: 'alpha স্ট্রিংয়ের জন্য বাকেট আইডি হিসাব করে'
          },
          expected: 'Bucket for alpha: 0'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'idx-hash-ex-1',
      kind: 'mcq',
      topic: 'hash-index-range-limitation',
      question: {
        en: 'Why is a Hash Index completely incapable of optimizing an SQL range query such as WHERE price BETWEEN 50 AND 100?',
        bn: 'WHERE price BETWEEN 50 AND 100 এর মতো SQL রেঞ্জ কোয়েরিতে হ্যাশ ইনডেক্স কেন সম্পূর্ণ অকার্যকর?'
      },
      options: [
        {
          en: 'Because hash functions scramble input keys into arbitrary bucket offsets, destroying all natural ordering and making sequential key proximity impossible to track',
          bn: 'কারণ হ্যাশ ফাংশন কি-গুলোকে এলোমেলো বাকেটে ছড়িয়ে দিয়ে সমস্ত স্বাভাবিক ক্রম নষ্ট করে দেয়, ফলে পাশাপাশি সংখ্যাগুলোর অবস্থান ট্র্যাক করা অসম্ভব হয়ে পড়ে'
        },
        {
          en: 'Because hash indexes can only store text and cannot process numbers',
          bn: 'কারণ হ্যাশ ইনডেক্স কেবল টেক্সট জমা করতে পারে এবং সংখ্যা নিয়ে কাজ করতে পারে না'
        },
        {
          en: 'Because SQL syntax prohibits BETWEEN when indexes are installed',
          bn: 'কারণ ইনডেক্স থাকলে SQL সিনট্যাক্সে BETWEEN ব্যবহার নিষিদ্ধ'
        },
        {
          en: 'Because the database engine deletes prices above 50 dollars automatically',
          bn: 'কারণ ডাটাবেস ইঞ্জিন ৫০ ডলারের বেশি দামের ডাটা স্বয়ংক্রিয়ভাবে মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Hash functions scatter keys uniformly, obliterating mathematical sorting.',
        bn: 'হ্যাশ ফাংশন ডাটাকে চারিদিকে ছড়িয়ে দেয়, ফলে কোনো গাণিতিক ধারাবাহিকতা অবশিষ্ট থাকে না।'
      },
      explanation: {
        en: 'Hashing eliminates ordering: key 51 might hash to bucket 8 while key 52 hashes to bucket 1. Without sorted order, the engine cannot scan a range and must resort to a full table scan.',
        bn: 'হ্যাশিং ক্রম ধ্বংস করে দেয়: ৫১ হয়তো বাকেট ৮ এ যাবে আর ৫২ যাবে বাকেট ১ এ। কোনো ক্রম না থাকায় ইঞ্জিন রেঞ্জ স্ক্যান করতে পারে না এবং বাধ্য হয়ে ফুল টেবিল স্ক্যান চালায়।'
      }
    },
    {
      id: 'idx-hash-ex-2',
      kind: 'mcq',
      topic: 'hash-index-time-complexity',
      question: {
        en: 'What is the theoretical best-case algorithmic time complexity for an exact point lookup on a hash index without collisions?',
        bn: 'কোনো সংঘাত বা কলিশন না থাকলে হ্যাশ ইনডেক্সে একটি নির্দিষ্ট পয়েন্ট অনুসন্ধানের সর্বোত্তম অ্যালগরিদমিক টাইম কমপ্লেক্সিটি কত?'
      },
      options: [
        {
          en: 'O(1) constant time, because computing the hash value points directly to the target bucket page in a single operation',
          bn: 'O(1) ধ্রুবক সময়, কারণ হ্যাশ মান হিসাব করে মাত্র একটি অপারেশনের মাধ্যমেই সরাসরি লক্ষ্য বাকেট পেজে পৌঁছানো যায়'
        },
        {
          en: 'O(N^2), because it compares every bucket against every row in the table',
          bn: 'O(N^2), কারণ এটি টেবিলের প্রতিটি সারির সাথে প্রতিটি বাকেটের তুলনা করে'
        },
        {
          en: 'O(log N), because it must climb up and down a B-Tree structure',
          bn: 'O(log N), কারণ এটিকে B-Tree কাঠামোর ওপর ওঠানামা করতে হয়'
        },
        {
          en: 'O(N!), because it runs a factorial permutation of all characters',
          bn: 'O(N!), কারণ এটি সমস্ত অক্ষরের ফ্যাক্টোরিয়াল পারমিউটেশন চালায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Direct address calculation gives constant O(1) performance.',
        bn: 'সরাসরি অ্যাড্রেস হিসাবের কারণে এটি ধ্রুবক O(1) গতি দেয়।'
      },
      explanation: {
        en: 'In the absence of bucket overflow chains, a hash index evaluates hash(key) in O(1) time and reads the exact bucket block, bypassing tree levels entirely.',
        bn: 'ওভারফ্লো না থাকলে হ্যাশ ইনডেক্স O(1) সময়েই সঠিক ব্লকটি পড়ে ফেলে এবং গাছের বিভিন্ন স্তর অতিক্রমের ঝামেলা এড়িয়ে যায়।'
      }
    },
    {
      id: 'idx-hash-ex-3',
      kind: 'mcq',
      topic: 'hash-collision-overflow-pages',
      question: {
        en: 'What mechanism does a relational hash index use to maintain data integrity when multiple distinct keys hash into the exact same primary bucket?',
        bn: 'একাধিক ভিন্ন কি যখন হুবহু একই প্রাইমারি বাকেটে এসে পড়ে, তখন ডাটার বিশুদ্ধতা রক্ষায় রিলেশনাল হ্যাশ ইনডেক্স কোন কৌশল ব্যবহার করে?'
      },
      options: [
        {
          en: 'It allocates an auxiliary Overflow Page and links it as a chained list to the primary bucket, inspecting entries in the chain to verify matching keys',
          bn: 'এটি একটি সহায়ক ওভারফ্লো পেজ বরাদ্দ করে মূল বাকেটের সাথে লিংক করে দেয় এবং চেইনের প্রতিটি এন্ট্রি মিলিয়ে সঠিক কি নিশ্চিত করে'
        },
        {
          en: 'It overwrites and deletes the older row from the database permanently',
          bn: 'এটি পূর্বের সারিটি মুছে ফেলে চিরতরে হারিয়ে দেয়'
        },
        {
          en: 'It reboots the computer and alerts the national police department',
          bn: 'এটি কম্পিউটার রিস্টার্ট করে পুলিশ বিভাগকে সতর্কবার্তা পাঠায়'
        },
        {
          en: 'It changes the user name to the word collision in all tables',
          bn: 'এটি तमाम টেবিলে ব্যবহারকারীর নাম পরিবর্তন করে collision লিখে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Overflow page chaining stores colliding entries in a linked list.',
        bn: 'ওভারফ্লো পেজ চেইনিংয়ের মাধ্যমে সংঘাতময় ডাটাগুলোকে লিংকড লিস্টে রাখা হয়।'
      },
      explanation: {
        en: 'When a bucket overflows its fixed block size, the storage engine attaches overflow pages. Excessive chaining degrades O(1) performance toward O(K) linear scans.',
        bn: 'বাকেটের জায়গা ফুরিয়ে গেলে ইঞ্জিন ওভারফ্লো পেজ যুক্ত করে। তবে অতিরিক্ত চেইন তৈরি হলে O(1) গতি নষ্ট হয়ে O(K) লিনিয়ার স্ক্যানে রূপ নেয়।'
      }
    },
    {
      id: 'idx-hash-ex-4',
      kind: 'mcq',
      topic: 'postgres-hash-index-syntax',
      question: {
        en: 'How do you explicitly instruct PostgreSQL to construct a Hash Index on an apiKey column rather than its default B-Tree index?',
        bn: 'PostgreSQL-এ ডিফল্ট B-Tree-এর বদলে apiKey কলামের ওপর স্পষ্টভাবে একটি হ্যাশ ইনডেক্স তৈরি করতে কোন সিনট্যাক্স ব্যবহার করতে হয়?'
      },
      options: [
        {
          en: 'CREATE INDEX idx_api_key ON accounts USING hash(apiKey);',
          bn: 'CREATE INDEX idx_api_key ON accounts USING hash(apiKey);'
        },
        {
          en: 'MAKE HASH ON accounts(apiKey);',
          bn: 'MAKE HASH ON accounts(apiKey);'
        },
        {
          en: 'BUILD QUICK MAP accounts FOR apiKey;',
          bn: 'BUILD QUICK MAP accounts FOR apiKey;'
        },
        {
          en: 'INDEX WITH SHA256 ON accounts(apiKey);',
          bn: 'INDEX WITH SHA256 ON accounts(apiKey);'
        }
      ],
      answer: 0,
      hint: {
        en: 'Specify USING hash in the CREATE INDEX DDL statement.',
        bn: 'CREATE INDEX DDL স্টেটমেন্টে USING hash উল্লেখ করুন।'
      },
      explanation: {
        en: 'By default, CREATE INDEX builds a B-Tree. Adding USING hash tells PostgreSQL to construct an on-disk hash table with linear bucket splitting and WAL logging.',
        bn: 'ডিফল্টভাবে CREATE INDEX একটি B-Tree তৈরি করে। USING hash যোগ করলে PostgreSQL ডিস্কে হ্যাশ ইনডেক্স কাঠামো তৈরি করে।'
      }
    }
  ],
  quiz: {
    id: 'hashs-and-the-hash-quiz',
    title: {
      en: 'Hash Indexes & Equality Assessment Quiz',
      bn: 'হ্যাশ ইনডেক্স ও সমতা মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'idx-hash-qz-1',
        kind: 'mcq',
        topic: 'linear-hashing-incremental-split',
        question: {
          en: 'What major operational advantage does Linear Hashing offer over naive static modulo hashing in database storage engines?',
          bn: 'ডাটাবেস স্টোরেজ ইঞ্জিনে সাধারণ স্ট্যাটিক হ্যাশিংয়ের চেয়ে লিনিয়ার হ্যাশিং (Linear Hashing) কোন প্রধান সুবিধা দেয়?'
        },
        options: [
          {
            en: 'It splits buckets incrementally one by one as the table grows, doubling capacity smoothly without freezing the database to re-hash millions of records all at once',
            bn: 'টেবিল বড় হওয়ার সাথে সাথে এটি একে একে বাকেট বিভক্ত করে ধারণক্ষমতা বাড়ায়, ফলে কোটি কোটি ডাটা একসাথে রি-হ্যাশ করার জন্য ডাটাবেস থামিয়ে রাখতে হয় না'
          },
          {
            en: 'It allows database queries to run without electric power',
            bn: 'এটি বিদ্যুৎ ছাড়াই ডাটাবেস কোয়েরি চালানোর সুবিধা দেয়'
          },
          {
            en: 'It converts relational tables into flat Microsoft Excel spreadsheets',
            bn: 'এটি সমস্ত রিলেশনাল টেবিলকে মাইক্রোসফট এক্সেল ফাইলে রূপান্তর করে'
          },
          {
            en: 'It deletes all user passwords to make logins faster',
            bn: 'লগইন দ্রুত করতে এটি تمام ব্যবহারকারীর পাসওয়ার্ড মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Linear hashing grows incrementally without massive stop-the-world re-hashing.',
          bn: 'লিনিয়ার হ্যাশিং পুরো সিস্টেম না থামিয়েই ধীরে ধীরে বাকেট বিভক্ত করে।'
        },
        explanation: {
          en: 'In naive hashing, changing total buckets requires re-hashing the entire table. Linear hashing splits one bucket at a time under an orderly pointer schedule, ensuring uninterrupted throughput.',
          bn: 'সাধারণ হ্যাশিংয়ে বাকেট সংখ্যা বদলালে পুরো টেবিল রি-হ্যাশ করতে হয়। লিনিয়ার হ্যাশিং একটি একটি করে বাকেট ভাগ করে নিরবচ্ছিন্ন সেবা নিশ্চিত করে।'
        }
      },
      {
        id: 'idx-hash-qz-2',
        kind: 'mcq',
        topic: 'hash-indexes-in-postgres-history',
        question: {
          en: 'Prior to PostgreSQL version 10, why were production database administrators strongly warned against using Hash Indexes?',
          bn: 'PostgreSQL ১০ সংস্করণের পূর্বে প্রোডাকশন ডাটাবেস অ্যাডমিনিস্ট্রেটরদের কেন হ্যাশ ইনডেক্স ব্যবহার না করার কঠোর পরামর্শ দেওয়া হতো?'
        },
        options: [
          {
            en: 'Because hash indexes were not Write-Ahead Logged (WAL), meaning an unexpected database crash corrupted the hash index and required a manual REINDEX rebuild',
            bn: 'কারণ হ্যাশ ইনডেক্সে রাইট-অ্যাহেড লগিং (WAL) ছিল না, ফলে সার্ভার ক্র্যাশ করলেই ইনডেক্স বিকৃত হয়ে যেত এবং ম্যানুয়ালি REINDEX করতে হতো'
          },
          {
            en: 'Because hash indexes were written in JavaScript instead of C',
            bn: 'কারণ হ্যাশ ইনডেক্স সি-এর বদলে জাভাস্ক্রিপ্টে লেখা ছিল'
          },
          {
            en: 'Because hash indexes only worked on floppy disk drives',
            bn: 'কারণ হ্যাশ ইনডেক্স কেবল ফ্লপি ডিস্কে কাজ করত'
          },
          {
            en: 'Because SQL standards prohibited hash indexes in the 20th century',
            bn: 'কারণ বিংশ শতাব্দীতে SQL মানদণ্ডে হ্যাশ ইনডেক্স নিষিদ্ধ ছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Postgres 10 finally made Hash Indexes crash-safe via WAL logging.',
          bn: 'Postgres 10 সংস্করণে WAL যোগ করে হ্যাশ ইনডেক্সকে ক্র্যাশ-সেফ করা হয়।'
        },
        explanation: {
          en: 'Until PostgreSQL 10, hash indexes lacked WAL logging and could not be replicated to read-replicas. PostgreSQL 10 overhauled hash indexes to make them fully WAL-logged and crash-safe.',
          bn: 'PostgreSQL 10-এর আগে হ্যাশ ইনডেক্সে WAL সাপোর্ট না থাকায় ক্র্যাশ রিকভারি সম্ভব ছিল না। ১০ সংস্করণে এটিকে আধুনিক ও সম্পূর্ণ নির্ভরযোগ্য করা হয়।'
        }
      },
      {
        id: 'idx-hash-qz-3',
        kind: 'mcq',
        topic: 'hash-index-order-by-failure',
        question: {
          en: 'If a query executes SELECT * FROM transactions WHERE account_id = 101 ORDER BY created_at DESC with a Hash Index on account_id, can the index satisfy the ORDER BY?',
          bn: 'account_id-র ওপর হ্যাশ ইনডেক্স থাকা অবস্থায় কোনো কোয়েরি যদি ORDER BY created_at DESC চালায়, তবে ইনডেক্সটি কি সাজানোর কাজটি সম্পন্ন করতে পারবে?'
        },
        options: [
          {
            en: 'No: Hash indexes possess zero ordering capabilities; the engine must collect the matching rows and perform an explicit in-memory Sort operation (e.g. QuickSort or Top-N Sort)',
            bn: 'না: হ্যাশ ইনডেক্সের কোনো সাজানোর ক্ষমতা নেই; ইঞ্জিনকে تمام মিলে যাওয়া সারি সংগ্রহ করে মেমরিতে আলাদাভাবে সর্ট করতে হয়'
          },
          {
            en: 'Yes: Hash indexes sort rows by memory address automatically',
            bn: 'হ্যাঁ: হ্যাশ ইনডেক্স স্বয়ংক্রিয়ভাবে মেমরি অ্যাড্রেস অনুসারে রো সাজিয়ে দেয়'
          },
          {
            en: 'Yes: But only if created_at contains exactly 4 characters',
            bn: 'হ্যাঁ: তবে কেবল যদি created_at-এ ঠিক ৪টি অক্ষর থাকে'
          },
          {
            en: 'No: The query will crash and delete the database operating system',
            bn: 'না: কোয়েরিটি ক্র্যাশ করে ডাটাবেসের অপারেটিং সিস্টেম মুছে ফেলবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hash indexes cannot sort; an explicit sort step is always required.',
          bn: 'হ্যাশ ইনডেক্স সাজাতে পারে না; সবসময় আলাদা সর্টিং করতে হয়।'
        },
        explanation: {
          en: 'Hash indexes only locate matching keys. Because the internal bucket ordering is pseudo-random, the query planner must insert a separate Sort node in the execution plan.',
          bn: 'হ্যাশ ইনডেক্স শুধু ডাটা খুঁজে দিতে পারে। বাকেটের ভেতরের ডাটা এলোমেলো থাকায় ইঞ্জিনকে আলাদা একটি সর্ট নোড চালিয়ে ডাটা সাজাতে হয়।'
        }
      },
      {
        id: 'idx-hash-qz-4',
        kind: 'mcq',
        topic: 'ideal-use-case-for-hash-index',
        question: {
          en: 'Which application scenario represents the ideal, textbook use case for deploying a Hash Index instead of a standard B-Tree?',
          bn: 'B-Tree-এর বদলে হ্যাশ ইনডেক্স ব্যবহারের জন্য নিচের কোন অ্যাপ্লিকেশন ক্ষেত্রটি সবচেয়ে আদর্শ?'
        },
        options: [
          {
            en: 'A high-throughput authentication table querying long cryptographic tokens or API secret keys exclusively for exact equality matches (WHERE token = ?)',
            bn: 'উচ্চ থ্রুপুটের প্রমাণীকরণ টেবিল যেখানে বড় ক্রিপ্টোগ্রাফিক টোকেন বা API সিক্রেট কি দিয়ে কেবল নিখুঁত সমতা খোঁজা হয় (WHERE token = ?)'
          },
          {
            en: 'An e-commerce product table sorting items by price and filtering by discount percentage',
            bn: 'ই-কমার্স টেবিল যেখানে দাম অনুসারে সাজানো এবং ডিসকাউন্ট দিয়ে ফিল্টার করা হয়'
          },
          {
            en: 'A blog post archive retrieving articles published within the last 30 days',
            bn: 'ব্লগ পোস্ট আর্কাইভ যেখানে গত ৩০ দিনের লেখা রেঞ্জ কোয়েরি দিয়ে খোঁজা হয়'
          },
          {
            en: 'A customer directory looking up names starting with the letter J',
            bn: 'গ্রাহক তালিকা যেখানে J অক্ষর দিয়ে শুরু হওয়া নাম খোঁজা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Long strings with strictly exact equality lookups: the ideal home for hash indexes.',
          bn: 'দীর্ঘ স্ট্রিং এবং শতভাগ নিখুঁত সমতা অনুসন্ধান: হ্যাশ ইনডেক্সের জন্য সেরা ক্ষেত্র।'
        },
        explanation: {
          en: 'Long random tokens (UUIDs, SHA-256 hashes) take up bulky space in B-Tree internal nodes. A hash index produces compact 32-bit bucket offsets and provides instant O(1) equality verification.',
          bn: 'লম্বা এলোমেলো টোকেন B-Tree-এর অনেক জায়গা নষ্ট করে। হ্যাশ ইনডেক্স ছোট ৩২-বিট বাকেট ব্যবহার করে নিখুঁত সমতা কোয়েরিতে সর্বোচ্চ গতি দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'comps-and-the-composite',
    title: {
      en: 'Composite Multi-Column Indexes: The Leftmost Prefix Rule',
      bn: 'কম্পোজিট মাল্টি-কলাম ইনডেক্স: লেফটমোস্ট প্রিফিক্স রুল'
    }
  }
};
