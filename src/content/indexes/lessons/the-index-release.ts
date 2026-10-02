import type { Lesson } from '../../../lib/types';

export const TheIndexReleaseLesson: Lesson = {
  slug: 'the-index-release',
  tech: 'indexes',
  title: {
    en: 'Production Index Lifecycle: Bloat, Overhead & Concurrent Builds',
    bn: 'প্রোডাকশন ইনডেক্স জীবনচক্র: ব্লোট, অতিরিক্ত খরচ ও কনকারেন্ট বিল্ড'
  },
  summary: {
    en: 'Master production database index engineering: managing write amplification, detecting index bloat and dead weight, executing zero-downtime concurrent index builds, and running REINDEX CONCURRENTLY.',
    bn: 'প্রোডাকশন ডাটাবেস ইনডেক্স ইঞ্জিনিয়ারিং আয়ত্ত করুন: রাইট অ্যাম্প্লিফিকেশন নিয়ন্ত্রণ, ইনডেক্স ব্লোট ও অব্যবহৃত ইনডেক্স শনাক্তকরণ, ডাউনটাইম ছাড়া কনকারেন্ট ইনডেক্স তৈরি এবং REINDEX CONCURRENTLY পরিচালনা।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'the-production-reality',
      text: {
        en: 'The Index Lifecycle: Production Maintenance and Write Amplification',
        bn: 'ইনডেক্স জীবনচক্র: প্রোডাকশন রক্ষণাবেক্ষণ এবং রাইট অ্যাম্প্লিফিকেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In development environments, creating an index feels instantaneous and harmless. However, in high-throughput 24/7 production systems, indexes introduce severe operational hazards if left unmonitored. Every secondary index accelerates read queries, but adds write amplification overhead on every INSERT, UPDATE, and DELETE statement.',
        bn: 'ডেভেলপমেন্টের সময় একটি ইনডেক্স তৈরি করাকে অত্যন্ত সহজ ও নির্দোষ মনে হয়। কিন্তু সার্বক্ষণিক সচল উচ্চ ট্রাফিকের প্রোডাকশন সিস্টেমে নজর না রাখলে ইনডেক্স মারাত্মক প্রযুক্তিগত বিপর্যয় ডেকে আনতে পারে। প্রতিটি সেকেন্ডারি ইনডেক্স ডাটা পড়ার গতি বাড়ালেও প্রতিটি নতুন রো যোগ, পরিবর্তন বা মুছে ফেলার সময় রাইট অ্যাম্প্লিফিকেশনের অতিরিক্ত খরচ চাপিয়ে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Over time, random record deletions and frequent B-Tree node splits leave fragmented, half-empty pages on disk. This phenomenon, known as Index Bloat, consumes gigabytes of wasted storage and evicts hot data from memory caches. Maintaining database health requires auditing index usage, dropping dead weight, and compacting pages without taking exclusive table locks.',
        bn: 'সময়ের সাথে সাথে এলোমেলো ডাটা ডিলিট এবং ঘন ঘন B-Tree নোড স্প্লিটের কারণে ডিস্কে অসংখ্য অর্ধেক খালি পেজ জমে যায়। ইনডেক্স ব্লোট নামে পরিচিত এই সমস্যা গিগাবাইট গিগাবাইট ডিস্ক অপচয় করে এবং মেমরি ক্যাশ থেকে প্রয়োজনীয় ডাটা বের করে দেয়। ডাটাবেসের স্বাস্থ্য ভালো রাখতে নিয়মিত ইনডেক্স অডিট করা, অপ্রয়োজনীয় ইনডেক্স মুছে ফেলা এবং টেবিল লক না করে পেজগুলো কম্প্যাক্ট করা আবশ্যক।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Standard CREATE INDEX Table Lockout vs Zero-Downtime Concurrent Builds',
        bn: 'সাধারণ CREATE INDEX টেবিল লকআউট বনাম ডাউনটাইমহীন কনকারেন্ট বিল্ড'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Concurrent Index Build Architecture Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Left: Standard CREATE INDEX (Dangerous in Production) -->
  <g transform="translate(30, 25)">
    <rect width="320" height="280" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
    <text x="160" y="30" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">Standard CREATE INDEX (Downtime!)</text>

    <!-- Table Share Lock Box -->
    <rect x="25" y="55" width="270" height="48" rx="4" fill="#7f1d1d" stroke="#ef4444" stroke-width="1.5" />
    <text x="35" y="76" fill="#ffffff" font-size="11" font-weight="bold">Acquires Exclusive SHARE Lock</text>
    <text x="35" y="94" fill="#fecaca" font-size="9">Completely freezes all user INSERT / UPDATE writes!</text>

    <!-- Blocked Queues -->
    <rect x="25" y="115" width="270" height="55" rx="4" fill="#0f172a" stroke="#ef4444" />
    <text x="35" y="136" fill="#fca5a5" font-size="10" font-weight="bold">Live Web Requests Frozen:</text>
    <text x="35" y="156" fill="#94a3b8" font-size="9">Connection pool exhausts; API timeouts spike (504)!</text>

    <text x="25" y="210" fill="#f87171" font-size="10" font-weight="bold">Production Hazard:</text>
    <text x="25" y="230" fill="#cbd5e1" font-size="9">Building an index on 50M rows locks table for 20 minutes,</text>
    <text x="25" y="248" fill="#cbd5e1" font-size="9">triggering site outages and customer cart drops.</text>
  </g>

  <!-- Right: CREATE INDEX CONCURRENTLY (Zero Downtime) -->
  <g transform="translate(390, 25)">
    <rect width="320" height="280" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <text x="160" y="30" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">CREATE INDEX CONCURRENTLY (Safe!)</text>

    <!-- Non-blocking Lock Box -->
    <rect x="20" y="55" width="280" height="48" rx="4" fill="#065f46" stroke="#10b981" stroke-width="1.5" />
    <text x="30" y="76" fill="#ffffff" font-size="11" font-weight="bold">Acquires Non-Blocking SHARE UPDATE</text>
    <text x="30" y="94" fill="#a7f3d0" font-size="9">Zero user writes blocked; live traffic flows non-stop!</text>

    <!-- Multi-pass Scan Box -->
    <rect x="20" y="115" width="280" height="55" rx="4" fill="#0f172a" stroke="#10b981" />
    <text x="30" y="136" fill="#34d399" font-size="10" font-weight="bold">2-Pass Build Architecture:</text>
    <text x="30" y="156" fill="#94a3b8" font-size="9">Pass 1: Scan table heap; Pass 2: Catch in-flight writes.</text>

    <text x="20" y="210" fill="#34d399" font-size="10" font-weight="bold">The Production Standard:</text>
    <text x="20" y="230" fill="#cbd5e1" font-size="9">Takes roughly 2x longer to finish, but keeps 100% of web</text>
    <text x="20" y="248" fill="#cbd5e1" font-size="9">checkout and payment APIs online without disruption.</text>
  </g>
</svg>`,
      caption: {
        en: 'Comparison of blocking standard CREATE INDEX causing web outages versus zero-downtime CREATE INDEX CONCURRENTLY.',
        bn: 'ওয়েব বিভ্রাট সৃষ্টিকারী সাধারণ CREATE INDEX এবং শূন্য ডাউনটাইমের CREATE INDEX CONCURRENTLY-এর তুলনা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'CREATE INDEX CONCURRENTLY',
          def: {
            en: 'A PostgreSQL statement constructing an index using multi-pass table scans without acquiring exclusive write locks, preventing production downtime.',
            bn: 'PostgreSQL-এর একটি স্টেটমেন্ট যা এক্সক্লুসিভ টেবিল লক না নিয়েই ব্যাকগ্রাউন্ডে ইনডেক্স তৈরি করে এবং সাইট সচল রাখে।'
          }
        },
        {
          term: 'Index Bloat',
          def: {
            en: 'The accumulation of dead, fragmented, or sparsely-filled B-Tree pages on disk resulting from random deletes, updates, and page splits.',
            bn: 'ঘন ঘন ডাটা ডিলিট বা আপডেটের কারণে ইনডেক্স পেজে তৈরি হওয়া অপচয় বা ফাঁকা জায়গা যা অতিরিক্ত মেমরি দখল করে রাখে।'
          }
        },
        {
          term: 'REINDEX CONCURRENTLY',
          def: {
            en: 'A zero-downtime maintenance command that rebuilds fragmented B-Tree pages back to optimal fill factors without blocking live user transactions.',
            bn: 'ডাউনটাইম ছাড়া একটি রক্ষণাবেক্ষণ কমান্ড যা ব্যবহারকারীদের না থামিয়েই ইনডেক্সের সমস্ত ব্লোট দূর করে পেজ পুনর্নির্মাণ করে।'
          }
        },
        {
          term: 'Dead Weight Index',
          def: {
            en: 'An unused secondary index that consumes storage and incurs write amplification on every transaction without ever being read by any query.',
            bn: 'এমন একটি অব্যবহৃত ইনডেক্স যা কোনো কোয়েরি কাজে লাগায় না অথচ প্রতিটি আপডেটে ডাটা লেখার গতি নষ্ট করে স্টোরেজ অপচয় করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'auditing-unused-and-duplicate-indexes',
      text: {
        en: 'Hunting Dead Weight: Auditing pg_stat_user_indexes',
        bn: 'অপ্রয়োজনীয় ইনডেক্স শনাক্তকরণ: pg_stat_user_indexes অডিট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Database administrators must routinely inspect system catalog usage metrics to detect dormant indexes. In PostgreSQL, querying pg_stat_user_indexes reveals how many times each index was used (idx_scan) and how many tuples were fetched (idx_tup_read). If a 50GB index on a massive billing table has an idx_scan count of 0 after 30 days of production traffic, it is pure dead weight.',
        bn: 'ডাটাবেস অ্যাডমিনিস্ট্রেটরদের নিয়মিত সিস্টেম ক্যাটালগ পরীক্ষা করে অব্যবহৃত ইনডেক্সগুলো খুঁজে বের করা উচিত। PostgreSQL-এ pg_stat_user_indexes কোয়েরি করলে দেখা যায় প্রতিটি ইনডেক্স কতবার ব্যবহৃত হয়েছে (idx_scan) এবং কতটি সারি পড়া হয়েছে (idx_tup_read)। ৩০ দিনের প্রোডাকশন ট্রাফিকের পরও যদি ৫০GB আকারের কোনো ইনডেক্সের ব্যবহারের সংখ্যা ০ থাকে, তবে সেটি নিশ্চিত অপচয় যা কেবল লেখার গতি কমায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Another common waste is redundant duplicate indexes. If you maintain both an index on (tenant_id) and a composite index on (tenant_id, created_at), the single-column index is completely redundant under the Leftmost Prefix Rule. Dropping the single-column index reclaims disk storage immediately and cuts table write latency in half.',
        bn: 'আরেকটি সাধারণ অপচয় হলো অপ্রয়োজনীয় ডুপ্লিকেট ইনডেক্স। আপনার যদি (tenant_id) এবং (tenant_id, created_at) উভয়ের ওপরই ইনডেক্স থাকে, তবে লেফটমোস্ট প্রিফিক্স নিয়ম অনুসারে একক কলামের ইনডেক্সটি পুরোপুরি অর্থহীন। এই অতিরিক্ত ইনডেক্সটি মুছে দিলে ডিস্কের জায়গা খালি হয় এবং ডাটা লেখার গতি দ্বিগুণ বেড়ে যায়।'
      }
    },
    {
      type: 'heading',
      id: 'node-lifecycle-engine',
      text: {
        en: 'Executable Production Index Health Auditor',
        bn: 'রানযোগ্য প্রোডাকশন ইনডেক্স হেলথ অডিটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine auditing 4 production indexes on an orders table. It identifies 1 unused index (idx_orders_legacy), 1 duplicate prefix index (idx_orders_dup), and 1 bloated customer index requiring compaction, generating an actionable zero-downtime maintenance plan.',
        bn: 'নিচে একটি orders টেবিলের ৪টি প্রোডাকশন ইনডেক্স অডিটকারী সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি ১টি অব্যবহৃত ইনডেক্স (idx_orders_legacy), ১টি ডুপ্লিকেট প্রিফিক্স ইনডেক্স (idx_orders_dup) এবং ১টি ব্লোটেড কাস্টমার ইনডেক্স শনাক্ত করে শূন্য-ডাউনটাইমের একটি পরিষ্কার রক্ষণাবেক্ষণ পরিকল্পনা তৈরি করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Production index auditor detecting dead weight, duplicate prefixes, and bloat needing REINDEX CONCURRENTLY',
        bn: 'অব্যবহৃত ইনডেক্স, ডুপ্লিকেট প্রিফিক্স এবং REINDEX CONCURRENTLY প্রয়োজন এমন ব্লোট শনাক্তকারী প্রোডাকশন অডিটর'
      },
      code: `// Production Index Lifecycle & Health Auditor
const productionIndexes = [
  { name: 'idx_orders_id', scans: 50000, bloatPercent: 5, isDuplicatePrefix: false },
  { name: 'idx_orders_legacy', scans: 0, bloatPercent: 80, isDuplicatePrefix: false },
  { name: 'idx_orders_customer', scans: 500, bloatPercent: 65, isDuplicatePrefix: false },
  { name: 'idx_orders_dup', scans: 12, bloatPercent: 10, isDuplicatePrefix: true }
];

let unusedIndexCount = 0;
let duplicateIndexCount = 0;
let bloatedIndexCount = 0;

for (const indexRecord of productionIndexes) {
  if (indexRecord.scans === 0) {
    unusedIndexCount++; // Zero scans over 30 days: Dead weight!
  }
  if (indexRecord.isDuplicatePrefix) {
    duplicateIndexCount++; // Covered by composite prefix: Drop!
  }
  if (indexRecord.bloatPercent > 50 && indexRecord.scans > 0) {
    bloatedIndexCount++; // High fragmentation: Run REINDEX CONCURRENTLY
  }
}

const totalRedundant = unusedIndexCount + duplicateIndexCount;
const isAccurate = unusedIndexCount === 1 && duplicateIndexCount === 1 && bloatedIndexCount === 1;

console.log(\`[Index Health Auditor] Audited \${productionIndexes.length} production indexes on table "orders".\`);
console.log(\`[Dead Weight Detection] Found \${unusedIndexCount} unused index (idx_orders_legacy) and \${duplicateIndexCount} duplicate index (idx_orders_dup).\`);
console.log(\`[Maintenance Plan] Recommended dropping \${totalRedundant} redundant indexes and running REINDEX CONCURRENTLY on bloated customer index (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'The Golden Rule of Production Index Deployment',
        bn: 'প্রোডাকশনে ইনডেক্স ডিপ্লয়মেন্টের সোনালী নিয়ম'
      },
      text: {
        en: 'Never run plain CREATE INDEX in a migration script on a live production table with millions of rows. Standard CREATE INDEX acquires a SHARE lock that halts all incoming user writes, bringing web checkouts and API services to an immediate standstill. Always enforce CREATE INDEX CONCURRENTLY in your CI/CD pipelines.',
        bn: 'কোটি কোটি সারির প্রোডাকশন টেবিলে মাইগ্রেশন স্ক্রিপ্টে কখনো সাধারণ CREATE INDEX চালাবেন না। সাধারণ CREATE INDEX টেবিলে ভারী শেয়ার লক লাগিয়ে ব্যবহারকারীদের تمام ডাটা লেখা আটকে দেয় এবং পুরো ওয়েবসাইট স্থবির করে ফেলে। আপনার অটোমেটেড পাইপলাইনে সর্বদা CREATE INDEX CONCURRENTLY ব্যবহার নিশ্চিত করুন।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Index Health Triage Analyzer',
        bn: 'ইনডেক্স স্বাস্থ্য মূল্যায়নকারী'
      },
      description: {
        en: 'Audit an index: recommend whether to keep, reindex, or drop based on usage scans and bloat percentage.',
        bn: 'ইনডেক্স অডিট করুন: ব্যবহারের সংখ্যা এবং ব্লোটের ওপর ভিত্তি করে ইনডেক্সটি রাখা, রি-ইনডেক্স বা মুছে ফেলা উচিত কিনা তা নির্ধারণ করুন।'
      },
      code: `function auditIndexHealth(scanCount, bloatPct, isDup) {
  if (isDup) return 'DROP_DUPLICATE_PREFIX';
  if (scanCount === 0) return 'DROP_UNUSED_DEAD_WEIGHT';
  if (bloatPct > 50) return 'RUN_REINDEX_CONCURRENTLY';
  return 'STATUS_HEALTHY';
}

console.log('Legacy Index:', auditIndexHealth(0, 80, false));
console.log('Bloated Index:', auditIndexHealth(500, 65, false));`,
      tests: [
        {
          name: {
            en: 'Recommends dropping unused index with zero scans',
            bn: 'শূন্য ব্যবহারের অব্যবহৃত ইনডেক্স মুছে ফেলার পরামর্শ দেয়'
          },
          expected: 'Legacy Index: DROP_UNUSED_DEAD_WEIGHT'
        },
        {
          name: {
            en: 'Recommends concurrent reindex for heavily bloated index',
            bn: 'অতিরিক্ত ব্লোটের ইনডেক্সে কনকারেন্ট রি-ইনডেক্সের পরামর্শ দেয়'
          },
          expected: 'Bloated Index: RUN_REINDEX_CONCURRENTLY'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'idx-rel-ex-1',
      kind: 'mcq',
      topic: 'create-index-concurrently-benefit',
      question: {
        en: 'Why is CREATE INDEX CONCURRENTLY the mandatory industry standard for adding indexes to live production tables in PostgreSQL?',
        bn: 'PostgreSQL-এ লাইভ প্রোডাকশন টেবিলে নতুন ইনডেক্স যুক্ত করার ক্ষেত্রে CREATE INDEX CONCURRENTLY কেন শিল্পের বাধ্যতামূলক মানদণ্ড?'
      },
      options: [
        {
          en: 'It constructs the index using a two-pass table scan without acquiring an exclusive table lock, allowing live user writes (INSERT, UPDATE, DELETE) to continue without downtime',
          bn: 'এটি কোনো এক্সক্লুসিভ টেবিল লক না নিয়েই টু-পাস স্ক্যানে ইনডেক্স তৈরি করে, ফলে ব্যবহারকারীদের تمام কাজ (INSERT, UPDATE, DELETE) কোনো ডাউনটাইম ছাড়াই স্বাভাবিকভাবে চলতে পারে'
        },
        {
          en: 'It makes the index 100 times smaller on physical disk',
          bn: 'এটি ফিজিক্যাল ডিস্কে ইনডেক্সের আকার ১০০ গুণ ছোট করে দেয়'
        },
        {
          en: 'It converts the SQL code into pure Python scripts',
          bn: 'এটি সমস্ত SQL কোডকে পাইথন স্ক্রিপ্টে রূপান্তর করে'
        },
        {
          en: 'It reboots the server computer after every 5 minutes',
          bn: 'এটি প্রতি ৫ মিনিট পর পর সার্ভার কম্পিউটার রিস্টার্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Concurrent index builds avoid exclusive SHARE locks that freeze production writes.',
        bn: 'কনকারেন্ট ইনডেক্স ভারী শেয়ার লক এড়িয়ে চলে যা প্রোডাকশনে ডাটা লেখা বন্ধ করে দিত।'
      },
      explanation: {
        en: 'Standard CREATE INDEX acquires a SHARE lock that queues behind existing writes and blocks all subsequent writes. Concurrent builds avoid this lock completely.',
        bn: 'সাধারণ CREATE INDEX একটি ভারী শেয়ার লক নেয় যা অন্য تمام ব্যবহারকারীর লেখার কাজ আটকে দেয়। কনকারেন্ট ইনডেক্স কোনো লক না নিয়েই নীরবে কাজ সম্পন্ন করে।'
      }
    },
    {
      id: 'idx-rel-ex-2',
      kind: 'mcq',
      topic: 'index-bloat-root-cause',
      question: {
        en: 'What primary physical database storage phenomenon causes B-Tree Index Bloat over months of continuous production traffic?',
        bn: 'মাসের পর মাস প্রোডাকশন ট্রাফিকের পর কোন ভৌত কারণটি B-Tree ইনডেক্স ব্লোট (Index Bloat) তৈরি করে?'
      },
      options: [
        {
          en: 'Random record deletions, row updates, and B-Tree node splits leave fragmented, half-empty pages on disk that do not automatically shrink or compact on their own',
          bn: 'এলোমেলো ডাটা ডিলিট, আপডেট এবং B-Tree নোড স্প্লিটের কারণে ডিস্কে অসংখ্য অর্ধেক খালি পেজ জমে যায় যা একা একা কখনো সংকুচিত হতে পারে না'
        },
        {
          en: 'The database server cooling fans blowing dust onto the motherboards',
          bn: 'ডাটাবেস সার্ভারের ফ্যান দ্বারা মাদারবোর্ডের ওপর ধুলাবালি জমা করা'
        },
        {
          en: 'The operating system changing file names to ancient hieroglyphics',
          bn: 'অপারেটিং সিস্টেম কর্তৃক সমস্ত ফাইলের নাম হায়ারোগ্লিফিক্সে রূপান্তর'
        },
        {
          en: 'Users typing search queries using capital letters',
          bn: 'ব্যবহারকারীরা বড় হাতের অক্ষরে সার্চ কোয়েরি টাইপ করার কারণে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Node splits and deletions leave sparse pages that waste RAM and disk space.',
        bn: 'স্প্লিট এবং ডিলিটের ফলে পেজগুলো আংশিক খালি থেকে যায় যা মেমরি অপচয় করে।'
      },
      explanation: {
        en: 'B-Tree pages split when full, but rarely merge when keys are deleted. Over time, average page density drops, wasting gigabytes of disk and buffer pool cache.',
        bn: 'পেজ পূর্ণ হলে বিভক্ত হয়, কিন্তু ডাটা ডিলিট হলে সহজে জোড়া লাগে না। সময়ের সাথে সাথে পেজের ঘনত্ব কমে গিয়ে গিগাবাইট গিগাবাইট জায়গা অপচয় হয়।'
      }
    },
    {
      id: 'idx-rel-ex-3',
      kind: 'mcq',
      topic: 'reindex-concurrently-maintenance',
      question: {
        en: 'How does REINDEX CONCURRENTLY resolve index bloat without interrupting live production web application traffic?',
        bn: 'লাইভ প্রোডাকশন ট্রাফিককে কোনো বাধা না দিয়েই REINDEX CONCURRENTLY কীভাবে ইনডেক্স ব্লোটের সমাধান করে?'
      },
      options: [
        {
          en: 'It builds a fresh, compact index in the background, swaps the new index into the catalog once caught up, and safely drops the bloated old index with zero write locks',
          bn: 'এটি ব্যাকগ্রাউন্ডে একটি নতুন ও সংকুচিত ইনডেক্স তৈরি করে, সব কাজ শেষ হলে ক্যাটালগে নতুনটি প্রতিস্থাপন করে এবং কোনো টেবিল লক না নিয়েই পুরানো ব্লোটেড ইনডেক্সটি মুছে দেয়'
        },
        {
          en: 'It deletes all user accounts created before the year 2020',
          bn: 'এটি ২০২০ সালের আগে তৈরি সমস্ত ব্যবহারকারী অ্যাকাউন্ট মুছে ফেলে'
        },
        {
          en: 'It downloads an MP3 audio file of relaxing music for developers',
          bn: 'এটি ডেভেলপারদের জন্য একটি রিল্যাক্সিং MP3 মিউজিক ডাউনলোড করে'
        },
        {
          en: 'It shuts down the internet connection across the datacenter',
          bn: 'এটি পুরো ডাটা সেন্টারের ইন্টারনেট সংযোগ বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'It builds a fresh compacted replacement in the background and swaps it in seamlessly.',
        bn: 'এটি ব্যাকগ্রাউন্ডে নতুন ইনডেক্স তৈরি করে অত্যন্ত সাবলীলভাবে পুরানোটির জায়গায় বসিয়ে দেয়।'
      },
      explanation: {
        en: 'Traditional REINDEX locks the table against writes. REINDEX CONCURRENTLY builds a replacement in parallel and swaps it atomically, reclaiming wasted storage with zero downtime.',
        bn: 'সাধারণ REINDEX পুরো টেবিলে লক লাগিয়ে দেয়। কিন্তু REINDEX CONCURRENTLY সমান্তরালে নতুন ইনডেক্স বানিয়ে শূন্য ডাউনটাইমে ব্লোট মুক্ত করে।'
      }
    },
    {
      id: 'idx-rel-ex-4',
      kind: 'mcq',
      topic: 'dead-weight-unused-indexes',
      question: {
        en: 'Why is retaining unused secondary indexes (idx_scan = 0 in pg_stat_user_indexes) dangerous for production database performance?',
        bn: 'প্রোডাকশনে অব্যবহৃত সেকেন্ডারি ইনডেক্স (pg_stat_user_indexes-এ idx_scan = ০) রেখে দেওয়া কেন ডাটাবেসের জন্য বিপজ্জনক?'
      },
      options: [
        {
          en: 'Every INSERT, UPDATE, and DELETE must still synchronously update the unused index tree, causing pure write amplification overhead and wasting disk and RAM cache without providing any query benefit',
          bn: 'প্রতিটি INSERT, UPDATE এবং DELETE-এ সেই অপ্রয়োজনীয় ইনডেক্স ট্রি আপডেট করতে হয়, যা কোনো সুবিধা না দিয়েই কেবল ডাটা লেখার গতি কমায় এবং স্টোরেজ অপচয় করে'
        },
        {
          en: 'Unused indexes emit high-pitched sound frequencies from the server speakers',
          bn: 'অব্যবহৃত ইনডেক্স সার্ভারের স্পিকার থেকে তীব্র শব্দ তৈরি করে'
        },
        {
          en: 'They cause the database software license to increase in price by 1000%',
          bn: 'তারা ডাটাবেস সফটওয়্যার লাইসেন্সের খরচ ১০০০% বাড়িয়ে দেয়'
        },
        {
          en: 'They force all database columns to be written in backward reverse order',
          bn: 'তারা সমস্ত কলামের ডাটাকে উল্টো ক্রমে লিখতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Unused indexes incur pure write amplification tax with zero read benefits.',
        bn: 'অব্যবহৃত ইনডেক্স পড়ার কোনো সুবিধা না দিয়েই কেবল লেখার গতি নষ্ট করে।'
      },
      explanation: {
        en: 'There is no such thing as a free index. Every modification to the table must be recorded in every index. Dropping unused indexes immediately accelerates write throughput across the system.',
        bn: 'ইনডেক্স বিনামূল্যে পাওয়া যায় না। টেবিলে কোনো পরিবর্তন হলে সমস্ত ইনডেক্সে তা লিখতে হয়। অপ্রয়োজনীয় ইনডেক্স মুছে দিলে ডাটা লেখার গতি তৎক্ষণাৎ বহুগুণ বেড়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-index-release-quiz',
    title: {
      en: 'Production Index Lifecycle Assessment Quiz',
      bn: 'প্রোডাকশন ইনডেক্স জীবনচক্র মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'idx-rel-qz-1',
        kind: 'mcq',
        topic: 'concurrent-index-invalid-state',
        question: {
          en: 'In PostgreSQL, what should an engineer do if a CREATE INDEX CONCURRENTLY command fails midway due to a unique constraint violation or cancelled transaction, leaving the index marked as INVALID?',
          bn: 'PostgreSQL-এ ইউনিক শর্ত ভঙ্গ বা লেনদেন বাতিলের কারণে CREATE INDEX CONCURRENTLY মাঝপথে ব্যর্থ হয়ে ইনডেক্সটি INVALID হিসেবে চিহ্নিত থাকলে ইঞ্জিনিয়ারের কী করা উচিত?'
        },
        options: [
          {
            en: 'Execute DROP INDEX CONCURRENTLY on the invalid index, resolve the underlying constraint or transaction conflict, and re-run CREATE INDEX CONCURRENTLY',
            bn: 'ইনভ্যালিড ইনডেক্সের ওপর DROP INDEX CONCURRENTLY চালিয়ে সেটি মুছে ফেলতে হবে, মূল সংঘাত দূর করতে হবে এবং পুনরায় CREATE INDEX CONCURRENTLY চালাতে হবে'
          },
          {
            en: 'Throw away the database server and buy a new computer',
            bn: 'ডাটাবেস সার্ভার ফেলে দিয়ে নতুন কম্পিউটার কিনতে হবে'
          },
          {
            en: 'Ignore the invalid index forever because it fixes itself automatically',
            bn: 'ইনভ্যালিড ইনডেক্সকে চিরতরে উপেক্ষা করতে হবে কারণ এটি নিজে নিজেই ঠিক হয়ে যায়'
          },
          {
            en: 'Change the database administrator password to 123456',
            bn: 'ডাটাবেস অ্যাডমিনিস্ট্রেটরের পাসওয়ার্ড পরিবর্তন করে ১২৩৪৫৬ দিতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Failed concurrent indexes stay behind in an INVALID state; drop them and retry.',
          bn: 'ব্যর্থ কনকারেন্ট ইনডেক্স INVALID অবস্থায় থেকে যায়; সেগুলোকে ড্রপ করে পুনরায় চেষ্টা করতে হয়।'
        },
        explanation: {
          en: 'A failed concurrent build leaves an INVALID index entry that consumes disk and slows writes without being usable for queries. Drop it with DROP INDEX CONCURRENTLY and retry.',
          bn: 'ব্যর্থ হওয়া কনকারেন্ট ইনডেক্স কোয়েরিতে কাজে লাগে না অথচ লেখার সময় মেমরি নষ্ট করে। তাই DROP INDEX CONCURRENTLY চালিয়ে সেটি মুছে পুনরায় তৈরি করা উচিত।'
        }
      },
      {
        id: 'idx-rel-qz-2',
        kind: 'mcq',
        topic: 'write-amplification-calculation',
        question: {
          en: 'If a table possesses 8 secondary B-Tree indexes, how many index page write operations are roughly required for a single new row INSERT?',
          bn: 'একটি টেবিলে যদি ৮টি সেকেন্ডারি B-Tree ইনডেক্স থাকে, তবে একটিমাত্র নতুন সারি INSERT করার জন্য আনুমানিকভাবে কতটি ইনডেক্স পেজ রাইট অপারেশন প্রয়োজন হয়?'
        },
        options: [
          {
            en: 'At least 8 separate index page modifications (one for each secondary index tree) in addition to writing the base table heap block',
            bn: 'মূল টেবিলের হিপ ব্লক লেখার পাশাপাশি কমপক্ষে ৮টি আলাদা ইনডেক্স পেজ পরিবর্তন (প্রতিটি সেকেন্ডারি ইনডেক্স ট্রির জন্য একটি করে)'
          },
          {
            en: 'Zero, because secondary indexes update themselves wirelessly',
            bn: 'শূন্য, কারণ সেকেন্ডারি ইনডেক্স নিজে নিজেই তারহীনভাবে আপডেট হয়'
          },
          {
            en: 'Exactly 1 single bit across the entire server motherboard',
            bn: 'পুরো সার্ভার মাদারবোর্ডে ঠিক ১টি মাত্র বিট পরিবর্তন'
          },
          {
            en: '100,000,000 operations for every character typed',
            bn: 'প্রতিটি টাইপ করা অক্ষরের জন্য ১০ কোটি অপারেশন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each secondary index adds at least one leaf page write on insert.',
          bn: 'প্রতিটি সেকেন্ডারি ইনডেক্স নতুন ডাটা ঢোকানোর সময় অন্তত একটি পেজ রাইট দাবি করে।'
        },
        explanation: {
          en: 'Secondary indexes multiply write work. Inserting one row requires updating the heap plus traversing and inserting a leaf entry into all 8 index trees, demonstrating write amplification.',
          bn: 'সেকেন্ডারি ইনডেক্স ডাটা লেখার চাপ বহুগুণ বাড়িয়ে দেয়। ১টি রো লেখার জন্য হিপের সাথে تمام ৮টি ইনডেক্স পেজেই নতুন এন্ট্রি ঢোকাতে হয়।'
        }
      },
      {
        id: 'idx-rel-qz-3',
        kind: 'mcq',
        topic: 'duplicate-index-detection-rule',
        question: {
          en: 'Why is maintaining both an index on (org_id) and an index on (org_id, user_id, created_at) on the same table an architectural mistake?',
          bn: 'একই টেবিলে (org_id) এবং (org_id, user_id, created_at) উভয়ের ওপর ইনডেক্স রাখা কেন একটি প্রযুক্তিগত ভুল?'
        },
        options: [
          {
            en: 'The multi-column composite index already serves queries filtering by org_id alone via the Leftmost Prefix Rule, making the single-column index redundant dead weight',
            bn: 'লেফটমোস্ট প্রিফিক্স নিয়ম অনুসারে মাল্টি-কলাম ইনডেক্সটি নিজেই org_id-র কোয়েরির সমাধান দেয়, ফলে একক কলামের ইনডেক্সটি পুরোপুরি অর্থহীন অপচয়'
          },
          {
            en: 'Because SQL standards make it illegal to use the word org_id twice',
            bn: 'কারণ SQL মানদণ্ডে org_id শব্দটি দুইবার ব্যবহার করা বেআইনি'
          },
          {
            en: 'Because the database will randomly invert user ages',
            bn: 'কারণ ডাটাবেস এলোমেলোভাবে ব্যবহারকারীদের বয়স উল্টে দেবে'
          },
          {
            en: 'Because duplicate indexes cause physical power cuts in data centers',
            bn: 'কারণ ডুপ্লিকেট ইনডেক্স ডাটা সেন্টারের বিদ্যুৎ সংযোগ বিচ্ছিন্ন করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The composite index already satisfies queries on the leftmost leading column.',
          bn: 'কম্পোজিট ইনডেক্স সবার বামের কলামের কোয়েরিগুলো নিজে থেকেই সম্পন্ন করতে পারে।'
        },
        explanation: {
          en: 'The composite index acts as an index on (org_id). Keeping the redundant single-column index burns disk space and slows writes for zero extra query utility.',
          bn: 'কম্পোজিট ইনডেক্সটি স্বাভাবিকভাবেই org_id-র ইনডেক্স হিসেবে কাজ করে। আলাদা একক ইনডেক্সটি কোনো সুবিধা না দিয়েই কেবল ডিস্ক ও গতি নষ্ট করে।'
        }
      },
      {
        id: 'idx-rel-qz-4',
        kind: 'mcq',
        topic: 'hot-updates-in-postgres',
        question: {
          en: 'What is Heap-Only Tuples (HOT) optimization in PostgreSQL, and how does it prevent index write amplification during UPDATE statements?',
          bn: 'PostgreSQL-এ Heap-Only Tuples (HOT) অপ্টিমাইজেশন কী এবং এটি UPDATE স্টেটমেন্টের সময় কীভাবে ইনডেক্স রাইট অ্যাম্প্লিফিকেশন রোধ করে?'
        },
        options: [
          {
            en: 'If an UPDATE modifies columns that are NOT part of any index and the new row fits inside the same table page, PostgreSQL chains the new row directly in the heap and completely avoids updating any secondary indexes',
            bn: 'যদি কোনো UPDATE এমন কলাম পরিবর্তন করে যা কোনো ইনডেক্সের অংশ নয় এবং নতুন রো একই পেজে এঁটে যায়, তবে PostgreSQL হিপের ভেতরেই ডাটা চেইন করে এবং تمام সেকেন্ডারি ইনডেক্স আপডেট করা পুরোপুরি এড়িয়ে যায়'
          },
          {
            en: 'It heats up the physical server processor to 100 degrees Celsius',
            bn: 'এটি ফিজিক্যাল সার্ভার প্রসেসরকে ১০০ ডিগ্রি সেলসিয়াসে উত্তপ্ত করে'
          },
          {
            en: 'It sends text messages to all users with hot breaking news',
            bn: 'এটি সমস্ত ব্যবহারকারীকে ব্রেকিং নিউজের মেসেজ পাঠায়'
          },
          {
            en: 'It deletes all cold archived data from the previous decade',
            bn: 'এটি বিগত দশকের সমস্ত পুরানো কোল্ড ডাটা মুছে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'HOT updates avoid touching indexes when updated columns are unindexed.',
          bn: 'HOT আপডেট ইনডেক্স বহির্ভূত কলামের আপডেটের সময় ইনডেক্স পরিবর্তনের খরচ বাঁচায়।'
        },
        explanation: {
          en: 'HOT (Heap-Only Tuples) is a cornerstone PostgreSQL feature. If unindexed attributes change, the engine links the new version on the same heap page, generating zero index churn.',
          bn: 'HOT হলো PostgreSQL-এর একটি বৈপ্লবিক প্রযুক্তি। ইনডেক্সহীন কলাম আপডেট হলে ইঞ্জিন একই হিপ পেজে নতুন ভার্সন লিংক করে দেয়, ফলে কোনো ইনডেক্সেই হাত দিতে হয় না।'
        }
      }
    ]
  }
};
