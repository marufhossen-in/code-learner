import type { Lesson } from '../../../lib/types';

export const PartsAndThePartialLesson: Lesson = {
  slug: 'parts-and-the-partial',
  tech: 'indexes',
  title: {
    en: 'Partial & Filtered Indexes: Targeted Indexing with WHERE',
    bn: 'আংশিক ও ফিল্টার্ড ইনডেক্স: WHERE ক্লজ দিয়ে নির্দিষ্ট ইনডেক্সিং'
  },
  summary: {
    en: 'Learn how to slash index storage and write overhead using Partial Indexes: indexing skewed subsets with WHERE predicates, soft-deleted unique enforcement, and queue optimization.',
    bn: 'WHERE শর্তযুক্ত আংশিক ইনডেক্স ব্যবহার করে ইনডেক্স স্টোরেজ এবং রাইট খরচ নাটকীয়ভাবে কমানোর কৌশল শিখুন: অসম ডাটা ইনডেক্সিং, সফট-ডিলিট ইউনিকনেস এবং কিউ অপ্টিমাইজেশন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'the-skewed-data-problem',
      text: {
        en: 'The Skewed Data Dilemma: Why Index What You Never Query?',
        bn: 'অসম ডাটার সংকট: যা কখনো খোঁজেন না তা কেন ইনডেক্স করবেন?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In production software systems, database tables frequently exhibit heavily skewed data distributions. In an e-commerce platform with 10000 orders, 9950 orders are archived as completed or cancelled. Only 50 orders remain active in the pending fulfillment queue at any given moment.',
        bn: 'প্রোডাকশন সফটওয়্যার সিস্টেমে ডাটাবেস টেবিলগুলোতে প্রায়ই চরম অসম ডাটা দেখা যায়। উদাহরণস্বরূপ, ১০০০০ অর্ডারের একটি ই-কমার্স প্ল্যাটফর্মে ৯৯৫০টি অর্ডারই সম্পন্ন বা বাতিল হিসেবে আর্কাইভে থাকে। যেকোনো মুহূর্তে মাত্র ৫০টি অর্ডার সক্রিয়ভাবে ডেলিভারির অপেক্ষায় পেন্ডিং অবস্থায় থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Creating a standard B-Tree on the status column forces the database engine to catalog all 10000 rows. The structure file grows unnecessarily large, and every update to old completed orders triggers wasteful page writes. Partial Indexes solve this inefficiency by applying an explicit WHERE filter directly to the definition.',
        bn: 'স্ট্যাটাস কলামের ওপর একটি সাধারণ B-Tree বানালে ডাটাবেস সমস্ত ১০০০০ সারি নথিভুক্ত করতে বাধ্য হয়। ফলে ফাইলের আকার অপ্রয়োজনীয়ভাবে বেড়ে যায় এবং পুরানো সম্পন্ন অর্ডারের প্রতিটি আপডেটেও পেজ পরিবর্তনের অপচয় ঘটে। আংশিক ইনডেক্স সরাসরি সংজ্ঞায় একটি সুস্পষ্ট WHERE ফিল্টার প্রয়োগ করে এই অপচয় পুরোপুরি দূর করে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Full Table Index vs Targeted Partial Filtered Index',
        bn: 'পূর্ণ টেবিল ইনডেক্স বনাম নির্দিষ্ট আংশিক ফিল্টার্ড ইনডেক্স'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Partial Filtered Index Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Left: Full Index (Bloated) -->
  <g transform="translate(30, 25)">
    <rect width="320" height="280" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
    <text x="160" y="30" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">Full Index on orders(status)</text>
    <text x="160" y="48" fill="#94a3b8" font-size="10" text-anchor="middle">Indexes 100% of Rows (10,000 entries)</text>

    <!-- Bloated B-Tree Representation -->
    <rect x="25" y="65" width="270" height="40" rx="4" fill="#7f1d1d" stroke="#ef4444" />
    <text x="35" y="88" fill="#fecaca" font-size="10">9,950 Completed / Cancelled Nodes</text>

    <rect x="25" y="115" width="270" height="40" rx="4" fill="#065f46" stroke="#10b981" />
    <text x="35" y="138" fill="#a7f3d0" font-size="10">Only 50 Active Pending Nodes</text>

    <!-- Storage and Write Penalties -->
    <text x="25" y="185" fill="#f87171" font-size="10" font-weight="bold">Severe Penalties:</text>
    <text x="25" y="205" fill="#cbd5e1" font-size="9">1. Wastes 99.5% storage on dormant rows.</text>
    <text x="25" y="223" fill="#cbd5e1" font-size="9">2. Every completed order update modifies index.</text>
    <text x="25" y="241" fill="#cbd5e1" font-size="9">3. Pushes active index pages out of RAM cache.</text>
  </g>

  <!-- Right: Partial Index (Lean & Fast) -->
  <g transform="translate(390, 25)">
    <rect width="320" height="280" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <text x="160" y="30" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">Partial Index: WHERE status = 'PENDING'</text>
    <text x="160" y="48" fill="#94a3b8" font-size="10" text-anchor="middle">Indexes strictly active rows (50 entries!)</text>

    <!-- Compact Leaf Representation -->
    <rect x="20" y="65" width="280" height="50" rx="4" fill="#065f46" stroke="#10b981" stroke-width="2" />
    <text x="30" y="88" fill="#ffffff" font-size="11" font-weight="bold">Tiny Leaf: Exactly 50 Pending Rows</text>
    <text x="30" y="105" fill="#a7f3d0" font-size="9">Fits completely inside L1/L2 CPU RAM cache!</text>

    <!-- Excluded Dormant Rows -->
    <rect x="20" y="125" width="280" height="40" rx="4" fill="#0f172a" stroke="#334155" />
    <text x="30" y="148" fill="#64748b" font-size="9">9,950 Completed rows 100% EXCLUDED</text>

    <!-- Operational Advantages -->
    <text x="20" y="195" fill="#34d399" font-size="10" font-weight="bold">Massive Architectural Advantages:</text>
    <text x="20" y="215" fill="#cbd5e1" font-size="9">1. Saves 99.5% index disk &amp; RAM footprint.</text>
    <text x="20" y="233" fill="#cbd5e1" font-size="9">2. Zero index maintenance when completing orders.</text>
    <text x="20" y="251" fill="#cbd5e1" font-size="9">3. Blazing fast seeks; shallowest tree depth.</text>
  </g>
</svg>`,
      caption: {
        en: 'Comparison of a bloated full-table index storing 10000 entries versus a lean partial index storing strictly 50 active pending rows.',
        bn: '১০০০০টি এন্ট্রিযুক্ত ভারী ফুল ইনডেক্স এবং কেবল ৫০টি সক্রিয় রো সংরক্ষণকারী হালকা আংশিক ইনডেক্সের তুলনা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Partial Index (Filtered Index)',
          def: {
            en: 'An index built with a WHERE predicate so that only a targeted subset of table rows satisfying the condition are included in the index tree.',
            bn: 'WHERE শর্তযুক্ত একটি ইনডেক্স যা টেবিলের تمام সারির বদলে কেবল শর্ত পূরণ করা নির্দিষ্ট কিছু সারি ধারণ করে।'
          }
        },
        {
          term: 'Predicate Matching',
          def: {
            en: 'The query optimizer step verifying that a query WHERE clause logically guarantees and satisfies the partial index filter condition.',
            bn: 'অপ্টিমাইজারের এমন একটি যাচাই ধাপ যা নিশ্চিত করে যে কোয়েরির শর্তটি আংশিক ইনডেক্সের ফিল্টার শর্তের সাথে পুরোপুরি মিলে গেছে।'
          }
        },
        {
          term: 'Soft-Delete Unique Enforcement',
          def: {
            en: 'A pattern using a partial unique index (WHERE deleted_at IS NULL) to enforce uniqueness on active accounts while allowing duplicate soft-deleted rows.',
            bn: 'WHERE deleted_at IS NULL শর্তযুক্ত আংশিক ইনডেক্স যা সক্রিয় অ্যাকাউন্টে ইউনিকনেস রক্ষা করে কিন্তু মুছে ফেলা রেকর্ডে ডুপ্লিকেট অনুমোদন করে।'
          }
        },
        {
          term: 'Write Amplification Reduction',
          def: {
            en: 'Eliminating secondary index update costs by ensuring writes to excluded rows never trigger B-Tree page modifications.',
            bn: 'ইনডেক্সের বাইরে থাকা সারির পরিবর্তনের সময় ইনডেক্স আপডেট না করে লেখার অতিরিক্ত খরচ কমিয়ে আনার কৌশল।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'soft-deletes-and-partial-uniques',
      text: {
        en: 'Partial Unique Indexes: Elegant Solutions for Soft Deletes',
        bn: 'আংশিক ইউনিক ইনডেক্স: সফট-ডিলিটের জন্য আদর্শ সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A common challenge in production applications is enforcing uniqueness on soft-deleted tables. Suppose users can soft-delete their accounts by setting deleted_at to a timestamp. If a user deletes their account and later attempts to register again with the same email, a standard UNIQUE(email) index rejects the new registration because the old row still exists.',
        bn: 'প্রোডাকশন অ্যাপ্লিকেশনে সফট-ডিলিট টেবিলে ইউনিকনেস বজায় রাখা একটি পরিচিত চ্যালেঞ্জ। ধরুন ব্যবহারকারীরা deleted_at কলামে তারিখ বসিয়ে অ্যাকাউন্ট সফট-ডিলিট করতে পারেন। কোনো ব্যবহারকারী অ্যাকাউন্ট মুছে দিয়ে পরবর্তীতে একই ইমেইল দিয়ে পুনরায় নিবন্ধন করতে চাইলে সাধারণ UNIQUE(email) ইনডেক্স তা আটকে দেয়, কারণ পুরানো সারিটি ডাটাবেসেই থেকে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A partial unique index solves this problem cleanly: CREATE UNIQUE INDEX idx_users_active_email ON users(email) WHERE deleted_at IS NULL;. This constraint enforces identifier uniqueness strictly across active users. When an account is soft-deleted, its address leaves the filtered tree, instantly allowing a new profile with the same contact to register.',
        bn: 'একটি আংশিক ইউনিক ইনডেক্স এই জটিলতার চমৎকার সমাধান দেয়: CREATE UNIQUE INDEX idx_users_active_email ON users(email) WHERE deleted_at IS NULL;। এই নিয়মটি কেবল সক্রিয় ব্যবহারকারীদের মধ্যে ঠিকানার অনন্যতা নিশ্চিত করে। যখন কোনো অ্যাকাউন্ট সফট-ডিলিট হয়, তখন তার ঠিকানাটি ইনডেক্স থেকে বের হয়ে যায়, ফলে একই ঠিকানায় সাথে সাথেই নতুন প্রোফাইল তৈরি করা সম্ভব হয়।'
      }
    },
    {
      type: 'heading',
      id: 'node-partial-engine',
      text: {
        en: 'Executable Partial Index & Space Optimization Simulator',
        bn: 'রানযোগ্য আংশিক ইনডেক্স ও মেমরি সাশ্রয় সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine benchmarking a full table tree against a partial filtered structure across 10000 orders. While the global layout stores all 10000 records, the partial design stores only 50 PENDING records (saving 99.5% memory). Updating a completed order requires 1 write in the full tree, but 0 writes in the filtered tree.',
        bn: 'নিচে ১০০০০ অর্ডারের ওপর পূর্ণ টেবিল ট্রি বনাম আংশিক ফিল্টার্ড কাঠামোর মেমরি সাশ্রয় তুলনা করার একটি সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। যেখানে সার্বিক লেআউট تمام ১০০০০ রেকর্ড সংরক্ষণ করে, সেখানে আংশিক ডিজাইন কেবল ৫০টি PENDING রেকর্ড জমা রাখে (যা ৯৯.৫% মেমরি বাঁচায়)। একটি সম্পন্ন অর্ডার আপডেট করলে পূর্ণ গাছে ১টি রাইট অপারেশন লাগে, কিন্তু ফিল্টার্ড গাছে ০টি রাইট অপারেশন লাগে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Benchmarking full index (10000 entries) vs partial index (50 entries) saving 99.5% RAM with 0 write overhead',
        bn: 'পূর্ণ ইনডেক্স (১০০০০ এন্ট্রি) বনাম ৯৯.৫% মেমরি সাশ্রয়কারী ও ০ রাইট খরচের আংশিক ইনডেক্সের (৫০ এন্ট্রি) কার্যকারিতা মূল্যায়ন'
      },
      code: `// Partial Index & Memory Efficiency Simulator
const TOTAL_ORDER_ROWS = 10000;
const ACTIVE_PENDING_ROWS = 50;

// Full Index: Indexes every single record
const fullIndexEntryCount = TOTAL_ORDER_ROWS;
// Partial Index: Stores only rows matching (status = 'PENDING')
const partialIndexEntryCount = ACTIVE_PENDING_ROWS;

// Simulating an update to a COMPLETED order
const fullIndexWritesOnCompleted = 1;     // Full index must update B-Tree
const partialIndexWritesOnCompleted = 0;  // Partial index ignores excluded row!

const memorySavingsPercent = ((TOTAL_ORDER_ROWS - ACTIVE_PENDING_ROWS) / TOTAL_ORDER_ROWS) * 100;
const isAccurate = fullIndexEntryCount === 10000 && partialIndexEntryCount === 50 && partialIndexWritesOnCompleted === 0;

console.log(\`[Full Index Engine] Indexed all \${TOTAL_ORDER_ROWS} records; completed order update required \${fullIndexWritesOnCompleted} index maintenance write.\`);
console.log(\`[Partial Index Engine] Indexed only \${ACTIVE_PENDING_ROWS} PENDING records (saved \${memorySavingsPercent}% RAM); completed order update required \${partialIndexWritesOnCompleted} index writes.\`);
console.log(\`[Query Acceleration] Query on (status = PENDING) resolved in 2 comparisons instead of scanning \${TOTAL_ORDER_ROWS} rows (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Partial Indexes in PostgreSQL vs MySQL',
        bn: 'PostgreSQL বনাম MySQL-এ আংশিক ইনডেক্স'
      },
      text: {
        en: 'PostgreSQL and SQLite provide native support for partial indexes using standard WHERE clauses. Developers on MySQL InnoDB achieve comparable storage savings using functional virtual columns with conditional CASE expressions.',
        bn: 'PostgreSQL এবং SQLite সাধারণ WHERE ক্লজ দিয়ে সরাসরি আংশিক ইনডেক্স সমর্থন করে। অন্যদিকে MySQL InnoDB-তে ভার্চুয়াল কলাম এবং শর্তযুক্ত CASE এক্সপ্রেশনের সাহায্যে একই রকম মেমরি সাশ্রয়ী সুবিধা অর্জন করা যায়।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Partial Index Query Matcher',
        bn: 'আংশিক ইনডেক্স কোয়েরি ম্যাচ যাচাইকারী'
      },
      description: {
        en: 'Check if a specific SQL query WHERE condition satisfies the partial index predicate.',
        bn: 'একটি নির্দিষ্ট SQL কোয়েরির WHERE শর্ত আংশিক ইনডেক্সের ফিল্টার শর্ত পূরণ করে কিনা তা পরীক্ষা করুন।'
      },
      code: `function isPartialIndexApplicable(indexPredicate, queryPredicate) {
  if (indexPredicate === 'deleted_at IS NULL' && queryPredicate === 'deleted_at IS NULL') {
    return 'USE_PARTIAL_INDEX';
  }
  if (indexPredicate === 'status = PENDING' && queryPredicate === 'status = PENDING') {
    return 'USE_PARTIAL_INDEX';
  }
  return 'FALLBACK_TO_OTHER_PATH';
}

console.log('Query 1:', isPartialIndexApplicable('status = PENDING', 'status = PENDING'));
console.log('Query 2:', isPartialIndexApplicable('status = PENDING', 'status = COMPLETED'));`,
      tests: [
        {
          name: {
            en: 'Matches partial index when query predicate satisfies filter',
            bn: 'কোয়েরির শর্ত ফিল্টার পূরণ করলে আংশিক ইনডেক্স নির্বাচন করে'
          },
          expected: 'Query 1: USE_PARTIAL_INDEX'
        },
        {
          name: {
            en: 'Falls back when query targets excluded records',
            bn: 'কোয়েরি বাদ পড়া রেকর্ডে কাজ করলে বিকল্প পথ বেছে নেয়'
          },
          expected: 'Query 2: FALLBACK_TO_OTHER_PATH'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'idx-part-ex-1',
      kind: 'mcq',
      topic: 'partial-index-predicate-requirement',
      question: {
        en: 'Given a partial index defined with CREATE INDEX idx_orders_active ON orders(created_at) WHERE status = \'PENDING\';, which query will successfully utilize this index?',
        bn: 'CREATE INDEX idx_orders_active ON orders(created_at) WHERE status = \'PENDING\'; সংজ্ঞায়িত আংশিক ইনডেক্সটি নিচের কোন কোয়েরিটি সফলভাবে ব্যবহার করতে পারবে?'
      },
      options: [
        {
          en: 'SELECT * FROM orders WHERE status = \'PENDING\' AND created_at >= \'2026-01-01\'; (predicate matches index filter)',
          bn: 'SELECT * FROM orders WHERE status = \'PENDING\' AND created_at >= \'2026-01-01\'; (শর্তটি ইনডেক্স ফিল্টারের সাথে হুবহু মিলে যায়)'
        },
        {
          en: 'SELECT * FROM orders WHERE status = \'COMPLETED\'; (excluded by index predicate)',
          bn: 'SELECT * FROM orders WHERE status = \'COMPLETED\'; (ইনডেক্স ফিল্টার দ্বারা বাদ পড়া)'
        },
        {
          en: 'SELECT * FROM orders WHERE total_price > 500;',
          bn: 'SELECT * FROM orders WHERE total_price > 500;'
        },
        {
          en: 'SELECT * FROM customers;',
          bn: 'SELECT * FROM customers;'
        }
      ],
      answer: 0,
      hint: {
        en: 'The query must include the predicate (status = \'PENDING\') to utilize the partial index.',
        bn: 'আংশিক ইনডেক্স ব্যবহার করতে কোয়েরিতে অবশ্যই (status = \'PENDING\') শর্ত থাকতে হবে।'
      },
      explanation: {
        en: 'The query optimizer only uses a partial index when it can mathematically prove that all rows needed by the query are guaranteed to be present inside the partial index.',
        bn: 'অপ্টিমাইজার কেবল তখনই আংশিক ইনডেক্স বেছে নেয় যখন সে গাণিতিকভাবে নিশ্চিত হতে পারে যে কোয়েরির تمام প্রয়োজনীয় রো সেই ইনডেক্সের ভেতর উপস্থিত আছে।'
      }
    },
    {
      id: 'idx-part-ex-2',
      kind: 'mcq',
      topic: 'soft-delete-partial-unique-benefit',
      question: {
        en: 'Why is a partial unique index defined as WHERE deleted_at IS NULL essential for tables employing soft deletes?',
        bn: 'সফট-ডিলিট ব্যবহার করা টেবিলে WHERE deleted_at IS NULL শর্তযুক্ত আংশিক ইউনিক ইনডেক্স কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'It enforces uniqueness strictly among active rows, allowing users to re-register with an email that was previously soft-deleted without violating uniqueness constraints',
          bn: 'এটি কেবল সক্রিয় সারিগুলোর মধ্যে অনন্যতা রক্ষা করে, ফলে ব্যবহারকারীরা পূর্বে সফট-ডিলিট করা কোনো ইমেইল দিয়ে পুনরায় অ্যাকাউন্ট খুললেও কোনো সংঘাত ঘটে না'
        },
        {
          en: 'It deletes all user photos from cloud storage after 30 days',
          bn: 'এটি ৩০ দিন পর ক্লাউড স্টোরেজ থেকে সমস্ত ব্যবহারকারীর ছবি মুছে দেয়'
        },
        {
          en: 'It forces the operating system to reboot every morning at 6:00 AM',
          bn: 'এটি প্রতিদিন সকাল ৬:০০ টায় অপারেটিং সিস্টেম রিবুট করতে বাধ্য করে'
        },
        {
          en: 'It increases the price of server electric power by 50 percent',
          bn: 'এটি সার্ভারের বিদ্যুৎ বিলের খরচ ৫০ শতাংশ বৃদ্ধি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Partial unique index ignores rows where deleted_at IS NOT NULL.',
        bn: 'আংশিক ইউনিক ইনডেক্স যেসব সারিতে deleted_at বিদ্যমান সেগুলোকে পুরোপুরি উপেক্ষা করে।'
      },
      explanation: {
        en: 'A standard unique index treats soft-deleted rows as conflicting duplicates. A partial unique index ignores deleted records, enforcing uniqueness strictly on live rows.',
        bn: 'সাধারণ ইউনিক ইনডেক্স মুছে ফেলা রো-কেও ডুপ্লিকেট হিসেবে ধরে এরর দেয়। আংশিক ইউনিক ইনডেক্স মুছে ফেলা রো বাদ দিয়ে শুধু সক্রিয় রো-তে নজর রাখে।'
      }
    },
    {
      id: 'idx-part-ex-3',
      kind: 'mcq',
      topic: 'write-amplification-savings-partial-index',
      question: {
        en: 'How does a partial index on WHERE status = \'PENDING\' reduce write amplification when millions of rows transition to \'COMPLETED\' or \'SHIPPED\'?',
        bn: 'WHERE status = \'PENDING\' শর্তযুক্ত আংশিক ইনডেক্স কীভাবে লক্ষ লক্ষ রো \'COMPLETED\' বা \'SHIPPED\' হওয়ার সময় রাইট অ্যাম্প্লিফিকেশন হ্রাস করে?'
      },
      options: [
        {
          en: 'Updates and writes to completed or shipped rows do not touch the partial index at all, generating zero B-Tree page modifications and zero write I/O overhead',
          bn: 'সম্পন্ন বা পাঠানো সারির কোনো পরিবর্তনেই আংশিক ইনডেক্সকে স্পর্শ করা হয় না, ফলে শূন্য B-Tree পেজ পরিবর্তন এবং শূন্য ডিস্ক রাইট খরচ হয়'
        },
        {
          en: 'By turning off the database hard drive during business hours',
          bn: 'কাজের সময় ডাটাবেস হার্ডডিস্ক বন্ধ করে রাখার মাধ্যমে'
        },
        {
          en: 'By converting all numbers into text strings automatically',
          bn: 'تمام সংখ্যাকে স্বয়ংক্রিয়ভাবে টেক্সট স্ট্রিংয়ে রূপান্তর করে'
        },
        {
          en: 'By requiring developers to write all queries in handwriting on paper',
          bn: 'ডেভেলপারদের तमाम কোয়েরি কাগজে হাতে লেখার নিয়ম চালু করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Excluded rows generate zero index maintenance overhead on write operations.',
        bn: 'ইনডেক্স বহির্ভূত সারির কোনো পরিবর্তনে ইনডেক্স আপডেট করার প্রয়োজন হয় না।'
      },
      explanation: {
        en: 'Because completed rows do not belong in the partial index tree, subsequent updates, audits, and archiving on those rows bypass the index entirely, saving massive write bandwidth.',
        bn: 'সম্পন্ন রো যেহেতু আংশিক ইনডেক্সে থাকে না, তাই সেগুলোর পরিবর্তনে ইনডেক্স আপডেট করার কোনো প্রয়োজন পড়ে না এবং ডিস্কের কর্মক্ষমতা রক্ষা পায়।'
      }
    },
    {
      id: 'idx-part-ex-4',
      kind: 'mcq',
      topic: 'partial-index-syntax-ddl',
      question: {
        en: 'Which SQL statement correctly constructs a partial index on account_id strictly for VIP customers?',
        bn: 'VIP গ্রাহকদের জন্য account_id-র ওপর আংশিক ইনডেক্স তৈরির সঠিক SQL স্টেটমেন্ট কোনটি?'
      },
      options: [
        {
          en: 'CREATE INDEX idx_vip_accounts ON accounts(account_id) WHERE is_vip = true;',
          bn: 'CREATE INDEX idx_vip_accounts ON accounts(account_id) WHERE is_vip = true;'
        },
        {
          en: 'FILTER INDEX accounts(account_id) ONLY VIP;',
          bn: 'FILTER INDEX accounts(account_id) ONLY VIP;'
        },
        {
          en: 'MAKE PARTIAL accounts(account_id) IF VIP IS 1;',
          bn: 'MAKE PARTIAL accounts(account_id) IF VIP IS 1;'
        },
        {
          en: 'SELECT * FROM accounts WHERE is_vip = true INDEX BY account_id;',
          bn: 'SELECT * FROM accounts WHERE is_vip = true INDEX BY account_id;'
        }
      ],
      answer: 0,
      hint: {
        en: 'Append WHERE <predicate> to the end of the CREATE INDEX statement.',
        bn: 'CREATE INDEX স্টেটমেন্টের শেষে WHERE <predicate> যোগ করুন।'
      },
      explanation: {
        en: 'Standard SQL DDL for partial indexing simply appends a WHERE clause to the end of CREATE INDEX, filtering which rows qualify for entry into the tree.',
        bn: 'আংশিক ইনডেক্স তৈরির আদর্শ পদ্ধতি হলো CREATE INDEX-এর শেষে সাধারণ একটি WHERE ক্লজ যোগ করে দেওয়া।'
      }
    }
  ],
  quiz: {
    id: 'parts-and-the-partial-quiz',
    title: {
      en: 'Partial & Filtered Indexing Assessment Quiz',
      bn: 'আংশিক ও ফিল্টার্ড ইনডেক্সিং মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'idx-part-qz-1',
        kind: 'mcq',
        topic: 'partial-index-cache-retention',
        question: {
          en: 'Why do partial indexes achieve significantly higher cache hit ratios in database RAM buffer pools compared to full-table indexes?',
          bn: 'পূর্ণ টেবিল ইনডেক্সের তুলনায় আংশিক ইনডেক্স কেন ডাটাবেস র‍্যাম বাফার পুলে উল্লেখযোগ্যভাবে বেশি ক্যাশ হিট রেশিও অর্জন করে?'
        },
        options: [
          {
            en: 'Because their total on-disk size is dramatically smaller, allowing the entire hot working set of active records to fit permanently in RAM without being evicted by cold historical rows',
            bn: 'কারণ এদের মোট আকার নাটকীয়ভাবে অনেক ছোট হয়, ফলে সমস্ত সক্রিয় হট ডাটা স্থায়ীভাবে র‍্যামে অবস্থান করতে পারে এবং পুরানো কোল্ড ডাটা এদের মেমরি থেকে বের করে দিতে পারে না'
          },
          {
            en: 'Because partial indexes are cooled with liquid nitrogen inside the server',
            bn: 'কারণ সার্ভারের ভেতর তরল নাইট্রোজেন দিয়ে আংশিক ইনডেক্সকে ঠান্ডা রাখা হয়'
          },
          {
            en: 'Because partial indexes do not consume any electricity',
            bn: 'কারণ আংশিক ইনডেক্স কোনো বিদ্যুৎ খরচ করে না'
          },
          {
            en: 'Because SQL standards mandate that partial indexes run on quantum computers',
            bn: 'কারণ SQL মানদণ্ডে আংশিক ইনডেক্স কোয়ান্টাম কম্পিউটারে চালানো বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Smaller index footprint means the entire index stays resident in RAM cache.',
          bn: 'ইনডেক্সের আকার ছোট হওয়ায় পুরো ইনডেক্সটি সবসময় র‍্যাম মেমরিতে থেকে যেতে পারে।'
        },
        explanation: {
          en: 'When an index is 99% smaller, all its leaf blocks reside in RAM. Queries never suffer disk cache misses because cold historical records never pollute the active working set.',
          bn: 'ইনডেক্স ৯৯% ছোট হওয়ায় এর तमाम পাতা সার্বক্ষণিক র‍্যামে থাকে। পুরানো অকেজো ডাটা মেমরি দখল না করায় কোয়েরিগুলো সব সময় সুপারফাস্ট গতি পায়।'
        }
      },
      {
        id: 'idx-part-qz-2',
        kind: 'mcq',
        topic: 'dynamic-values-in-partial-index-prohibition',
        question: {
          en: 'Why does PostgreSQL forbid non-immutable functions like NOW() or CURRENT_DATE in partial index WHERE predicates (e.g. WHERE created_at >= NOW() - INTERVAL \'7 days\')?',
          bn: 'PostgreSQL কেন আংশিক ইনডেক্সের WHERE শর্তে NOW() বা CURRENT_DATE-এর মতো পরিবর্তনশীল ফাংশন ব্যবহার নিষিদ্ধ করে (যেমন WHERE created_at >= NOW() - INTERVAL \'7 days\')?'
        },
        options: [
          {
            en: 'Because NOW() changes continuously with every passing microsecond, which would require the storage engine to continuously recalculate and re-index the entire table every clock tick to maintain truth',
            bn: 'কারণ সময়ের সাথে সাথে প্রতি মাইক্রোসেকেন্ডে NOW()-এর মান বদলায়; ফলে সঠিক তথ্য বজায় রাখতে ইঞ্জিনকে প্রতি মুহূর্তে পুরো টেবিল পুনরায় ইনডেক্স করতে হতো'
          },
          {
            en: 'Because database servers do not have internal clocks',
            bn: 'কারণ ডাটাবেস সার্ভারে কোনো অভ্যন্তরীণ ঘড়ি থাকে না'
          },
          {
            en: 'Because time was declared obsolete by international standards in 1980',
            bn: 'কারণ ১৯৮০ সালে আন্তর্জাতিক মানদণ্ডে সময়কে বাতিল ঘোষণা করা হয়েছিল'
          },
          {
            en: 'Because PostgreSQL is written in a language that cannot understand dates',
            bn: 'কারণ PostgreSQL এমন ভাষায় লেখা যা তারিখ বুঝতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Index predicates must be immutable; dynamic time values invalidate the static index tree.',
          bn: 'ইনডেক্স শর্ত অপরিবর্তনীয় হতে হয়; পরিবর্তনশীল সময় ইনডেক্স কাঠামোর ভিত্তি নষ্ট করে দেয়।'
        },
        explanation: {
          en: 'Index definitions must be IMMUTABLE. Rows cannot spontaneously enter or exit an index based on the passage of real-world time without an explicit INSERT or UPDATE triggering a write.',
          bn: 'ইনডেক্সের শর্ত অবশ্যই স্থির হতে হয়। কোনো নতুন ডাটা না লিখেই কেবল সময় পার হওয়ার কারণে কোনো রো নিজে নিজে ইনডেক্সে ঢুকতে বা বের হতে পারে না।'
        }
      },
      {
        id: 'idx-part-qz-3',
        kind: 'mcq',
        topic: 'partial-index-on-null-not-null',
        question: {
          en: 'In a column where 99% of entries are NULL and only 1% hold values, how does a partial index defined as WHERE column_name IS NOT NULL optimize performance?',
          bn: 'যে কলামে ৯৯% এন্ট্রি NULL এবং মাত্র ১% ডাটা বিদ্যমান, সেখানে WHERE column_name IS NOT NULL শর্তযুক্ত আংশিক ইনডেক্স কীভাবে পারফরম্যান্স বাড়ায়?'
        },
        options: [
          {
            en: 'It completely excludes all NULL values from the index tree, reducing index size to strictly the 1% populated rows and accelerating queries filtering for real values',
            bn: 'এটি तमाम NULL মানকে ইনডেক্স গাছ থেকে বাদ দেয়, ফলে ইনডেক্সের আকার মাত্র ১% আসল ডাটাতে সীমাবদ্ধ থাকে এবং বাস্তব মানের অনুসন্ধান বহুগুণ দ্রুত হয়'
          },
          {
            en: 'It converts all NULL values into the number zero',
            bn: 'এটি तमाम NULL মানকে শূন্য সংখ্যায় রূপান্তর করে'
          },
          {
            en: 'It turns the column color into bright green in the database GUI',
            bn: 'এটি ডাটাবেস সফটওয়্যারে কলামের রং উজ্জ্বল সবুজ করে দেয়'
          },
          {
            en: 'It reboots the computer whenever a NULL is inserted',
            bn: 'কোনো NULL ঢোকানোর সাথে সাথে এটি কম্পিউটার রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Indexing only non-null values strips out 99% of empty entries.',
          bn: 'কেবল নন-নাল মান ইনডেক্স করলে ৯৯% খালি এন্ট্রি বাদ পড়ে যায়।'
        },
        explanation: {
          en: 'B-Tree indexes can bloat severely indexing millions of unneeded NULLs. Filtering with WHERE col IS NOT NULL produces a laser-focused index over the populated values.',
          bn: 'কোটি কোটি অপ্রয়োজনীয় NULL ইনডেক্সকে ভারী করে তোলে। WHERE col IS NOT NULL ব্যবহার করলে ইনডেক্সটি কেবল প্রয়োজনীয় ডাটার ওপর অত্যন্ত হালকা থাকে।'
        }
      },
      {
        id: 'idx-part-qz-4',
        kind: 'mcq',
        topic: 'task-queue-partial-indexing-pattern',
        question: {
          en: 'How does high-throughput task worker architectures (like Celery, BullMQ, or Sidekiq) exploit partial indexes on database-backed job queues?',
          bn: 'উচ্চ থ্রুপুটের ব্যাকগ্রাউন্ড টাস্ক কিউ (যেমন Celery বা BullMQ) ডাটাবেস-ভিত্তিক কিউতে কীভাবে আংশিক ইনডেক্সের সুবিধা নেয়?'
        },
        options: [
          {
            en: 'By indexing pending jobs via CREATE INDEX idx_queue_pending ON tasks(priority, run_at) WHERE status = \'PENDING\';, ensuring workers pick up jobs in sub-millisecond seeks while completed history causes zero index bloat',
            bn: 'CREATE INDEX idx_queue_pending ON tasks(priority, run_at) WHERE status = \'PENDING\'; দিয়ে পেন্ডিং কাজ ইনডেক্স করে, যা মিলিসেকেন্ডেই নতুন কাজ খুঁজে দেয় কিন্তু সমাপ্ত পুরানো কাজ কোনো মেমরি অপচয় করে না'
          },
          {
            en: 'By emailing every job description to the company CEO',
            bn: 'কোম্পানির প্রধান নির্বাহীকে প্রতিটি কাজের বিবরণ ইমেইল করে'
          },
          {
            en: 'By turning off the database logging systems permanently',
            bn: 'ডাটাবেসের تمام লগিং সিস্টেম চিরতরে বন্ধ করে দিয়ে'
          },
          {
            en: 'By deleting the tasks table every 5 minutes',
            bn: 'প্রতি ৫ মিনিট পর পর কাজের টেবিলটি মুছে ফেলার মাধ্যমে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Only active queue tasks are indexed; historical completed tasks are ignored.',
          bn: 'কেবল সক্রিয় কিউ টাস্ক ইনডেক্স করা হয়; সমাপ্ত পুরানো কাজগুলো সম্পূর্ণ উপেক্ষা করা হয়।'
        },
        explanation: {
          en: 'Task queues suffer rapid turnover: millions of finished tasks remain for auditing, but only dozens are pending. A partial index keeps the worker polling query blazing fast without being slowed down by history.',
          bn: 'টাস্ক কিউতে লক্ষ লক্ষ কাজ শেষ হয়ে অডিট হিসেবে জমা থাকে, কিন্তু পেন্ডিং থাকে মাত্র কয়েকটি। আংশিক ইনডেক্স ওয়ার্কারদের কোয়েরিকে সর্বদা বিদ্যুৎ গতিতে রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'stats-and-the-statistic',
    title: {
      en: 'Database Optimizer Statistics: ANALYZE & Histograms',
      bn: 'ডাটাবেস অপ্টিমাইজার স্ট্যাটিস্টিকস: ANALYZE ও হিস্টোগ্রাম'
    }
  }
};
