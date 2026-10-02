import type { Lesson } from '../../../lib/types';

export const IndexesAndTheIndexLesson: Lesson = {
  slug: 'indexes-and-the-index',
  tech: 'db-fundamentals',
  title: {
    en: 'B-Tree Indexes: Clustered, Secondary & Composite Lookups',
    bn: 'বি-ট্রি ইনডেক্স: ক্লাস্টার্ড, সেকেন্ডারি ও কম্পোজিট লুকআপ'
  },
  summary: {
    en: 'Accelerate relational database queries with B-Tree indexes: understand full table scans vs index seeks, clustered vs secondary indexes, composite index leftmost prefix rules, covering indexes, and write penalties.',
    bn: 'বি-ট্রি ইনডেক্স দিয়ে ডাটাবেস কোয়েরির গতি বাড়ান: ফুল টেবিল স্ক্যান বনাম ইনডেক্স সিক, ক্লাস্টার্ড বনাম সেকেন্ডারি ইনডেক্স, কম্পোজিট ইনডেক্স লেফটমোস্ট প্রেফিক্স নিয়ম, কাভারিং ইনডেক্স ও রাইট পেনাল্টি জানুন।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'full-scans-vs-indexes',
      text: {
        en: 'The Cost of Sequential Scans vs Logarithmic Index Seeks',
        bn: 'সিকোয়েনশিয়াল স্ক্যানের খরচ বনাম লগারিদমিক ইনডেক্স সিক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a database table has no indexes on a queried column, the engine must execute a sequential scan (also called a full table scan). To find a single customer by email in a table of 10 million rows, the storage engine must load every disk page into memory and inspect all 10 million records one by one. On spinning disks or SSDs, scanning gigabytes of data consumes seconds of CPU and saturates memory bandwidth.',
        bn: 'যখন কোনো কোয়েরিকৃত কলামে ইনডেক্স থাকে না, তখন ডাটাবেস ইঞ্জিনকে সিকোয়েনশিয়াল স্ক্যান (বা ফুল টেবিল স্ক্যান) চালাতে হয়। ১০ মিলিয়ন সারির একটি টেবিলে ইমেইল দিয়ে ১ জন নির্দিষ্ট গ্রাহককে খুঁজতে ইঞ্জিনকে ডিস্কের প্রতিটি পেজ মেমরিতে লোড করে একে একে ১০ মিলিয়ন রেকর্ডই পরীক্ষা করতে হয়। হার্ডডিস্ক বা এসএসডিতে গিগাবাইট ডাটা এভাবে স্ক্যান করতে প্রচুর সিপিইউ সময় নষ্ট হয় এবং মেমরি ব্যান্ডউইথ শেষ হয়ে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A database index is an auxiliary data structure that maps search keys directly to storage locations. Instead of linear scanning in O(N) time, an index enables logarithmic lookups in O(log N) time. For a table of 10 million records, a balanced tree index pinpoints any record in only 3 or 4 page reads, reducing disk I/O by thousands of times.',
        bn: 'ডাটাবেস ইনডেক্স হলো একটি সহায়ক ডাটা স্ট্রাকচার যা সার্চ কি-কে সরাসরি স্টোরেজ লোকেশনের সাথে সংযুক্ত করে। লিনিয়ার O(N) স্ক্যানের বদলে একটি ইনডেক্স লগারিদমিক O(log N) সময়ে কোয়েরি সম্পন্ন করে। ১০ মিলিয়ন রেকর্ডের একটি বিশাল টেবিলে একটি ব্যালেন্সড ট্রি ইনডেক্স মাত্র ৩ বা ৪টি ডিস্ক পেজ রিড করে কাঙ্ক্ষিত রেকর্ড খুঁজে বের করে, যা ডিস্কের ব্যবহার হাজার গুণ কমিয়ে দেয়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'B-Tree Anatomy: Root, Branch Pages, and Doubly-Linked Leaves',
        bn: 'বি-ট্রি গঠন: রুট, ব্রাঞ্চ পেজ এবং ডাবল-লিংকড লিফ নোড'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="B-Tree index architecture diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Level 1: Root Node -->
  <g transform="translate(270, 25)">
    <rect width="200" height="42" rx="6" fill="#0369a1" stroke="#38bdf8" stroke-width="2" />
    <text x="100" y="18" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Root Page [Level 1]</text>
    <text x="100" y="34" fill="#bae6fd" font-size="10" text-anchor="middle">Keys: [ 20 | 50 | 80 ]</text>
  </g>

  <!-- Pointers Root to Internal -->
  <path d="M 320 67 L 180 100" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow)" />
  <path d="M 370 67 L 370 100" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow)" />
  <path d="M 420 67 L 560 100" stroke="#94a3b8" stroke-width="1.5" marker-end="url(#arrow)" />

  <!-- Level 2: Internal Branch Pages -->
  <g transform="translate(80, 100)">
    <rect width="200" height="42" rx="6" fill="#1e293b" stroke="#0284c7" stroke-width="1.5" />
    <text x="100" y="18" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Branch Page (Keys &lt; 20)</text>
    <text x="100" y="34" fill="#cbd5e1" font-size="10" text-anchor="middle">Keys: [ 5 | 10 | 15 ]</text>
  </g>

  <g transform="translate(290, 100)">
    <rect width="160" height="42" rx="6" fill="#1e293b" stroke="#0284c7" stroke-width="1.5" />
    <text x="80" y="18" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Branch Page (20 - 50)</text>
    <text x="80" y="34" fill="#cbd5e1" font-size="10" text-anchor="middle">Keys: [ 30 | 40 ]</text>
  </g>

  <g transform="translate(470, 100)">
    <rect width="190" height="42" rx="6" fill="#1e293b" stroke="#0284c7" stroke-width="1.5" />
    <text x="95" y="18" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Branch Page (&gt; 50)</text>
    <text x="95" y="34" fill="#cbd5e1" font-size="10" text-anchor="middle">Keys: [ 60 | 70 | 90 ]</text>
  </g>

  <!-- Pointers Internal to Leaves -->
  <path d="M 180 142 L 110 180" stroke="#94a3b8" stroke-width="1.5" />
  <path d="M 370 142 L 370 180" stroke="#94a3b8" stroke-width="1.5" />
  <path d="M 565 142 L 630 180" stroke="#94a3b8" stroke-width="1.5" />

  <!-- Level 3: Leaf Nodes (Doubly Linked) -->
  <g transform="translate(30, 180)">
    <!-- Leaf 1 -->
    <rect x="0" y="0" width="160" height="48" rx="4" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
    <text x="80" y="18" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Leaf Page 1</text>
    <text x="80" y="34" fill="#ffffff" font-size="9" text-anchor="middle">RowPtrs: [1, 2, 3, 4]</text>

    <!-- Leaf 2 -->
    <rect x="180" y="0" width="160" height="48" rx="4" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
    <text x="260" y="18" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Leaf Page 2</text>
    <text x="260" y="34" fill="#ffffff" font-size="9" text-anchor="middle">RowPtrs: [5, 6, 7, 8]</text>

    <!-- Leaf 3 -->
    <rect x="360" y="0" width="160" height="48" rx="4" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
    <text x="440" y="18" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Leaf Page 3</text>
    <text x="440" y="34" fill="#ffffff" font-size="9" text-anchor="middle">RowPtrs: [9, 10, 11]</text>

    <!-- Leaf 4 -->
    <rect x="540" y="0" width="140" height="48" rx="4" fill="#064e3b" stroke="#10b981" stroke-width="1.5" />
    <text x="610" y="18" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Leaf Page 4</text>
    <text x="610" y="34" fill="#ffffff" font-size="9" text-anchor="middle">RowPtrs: [12, 13, 14]</text>

    <!-- Doubly Linked Arrows -->
    <path d="M 160 24 L 180 24" stroke="#fbbf24" stroke-width="2" />
    <path d="M 340 24 L 360 24" stroke="#fbbf24" stroke-width="2" />
    <path d="M 520 24 L 540 24" stroke="#fbbf24" stroke-width="2" />
  </g>

  <!-- Summary Banner -->
  <g transform="translate(30, 245)">
    <rect width="680" height="60" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="340" y="24" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">Why B+Trees Dominate Databases</text>
    <text x="340" y="44" fill="#94a3b8" font-size="11" text-anchor="middle">High fan-out (100+ keys per 8 KB page) keeps tree height at 3-4 levels for 10M rows. Doubly linked leaves make range scans O(1) sequential walks.</text>
  </g>
</svg>`,
      caption: {
        en: 'The B-Tree index architecture: root and branch pages guide search direction, while doubly-linked leaf pages enable fast sequential range scans.',
        bn: 'বি-ট্রি ইনডেক্স আর্কিটেকচার: রুট ও ব্রাঞ্চ পেজ অনুসন্ধানের দিক নির্দেশ করে এবং ডাবল-লিংকড লিফ পেজ দ্রুত অনুক্রমিক রেঞ্জ স্ক্যান সম্পন্ন করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Clustered Index',
          def: {
            en: 'An index that determines the physical storage order of rows on disk; a table can have only one clustered index whose leaves store the actual row data.',
            bn: 'এমন একটি ইনডেক্স যা ডিস্কে সারির ভৌত সঞ্চয়স্থান ক্রম নির্ধারণ করে; একটি টেবিলে কেবল একটিই ক্লাস্টার্ড ইনডেক্স থাকে যার পাতায় সম্পূর্ণ রো ডাটা সংরক্ষিত থাকে।'
          }
        },
        {
          term: 'Secondary Index',
          def: {
            en: 'An auxiliary B-Tree index where leaf nodes store the indexed key and a pointer (such as the primary key) to locate the main table row.',
            bn: 'একটি পৃথক বি-ট্রি ইনডেক্স যার লিফ নোডে ইনডেক্স কি এবং মূল টেবিল সারি খুঁজে বের করার নির্দেশক পয়েন্টার (যেমন প্রাইমারি কি) থাকে।'
          }
        },
        {
          term: 'Covering Index',
          def: {
            en: 'An index containing all columns requested by a query, allowing the database to satisfy the query directly from index leaves with zero table lookups.',
            bn: 'এমন একটি ইনডেক্স যাতে কোয়েরির প্রয়োজনীয় সকল কলাম অন্তর্ভুক্ত থাকে, ফলে মূল টেবিলে হাত না দিয়েই সরাসরি ইনডেক্স থেকে ফলাফল প্রদান করা যায়।'
          }
        },
        {
          term: 'Write Penalty',
          def: {
            en: 'The write performance slowdown incurred during INSERT, UPDATE, and DELETE operations because every secondary index must be synchronously updated.',
            bn: 'ইনসার্ট, আপডেট ও ডিলিটের সময় লেখার গতি হ্রাস পাওয়া, কারণ প্রতিটি সেকেন্ডারি ইনডেক্সকে সাথে সাথে সিঙ্ক্রোনাসভাবে আপডেট করতে হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'composite-indexes-rules',
      text: {
        en: 'Composite Indexes and the Leftmost Prefix Rule',
        bn: 'কম্পোজিট ইনডেক্স ও লেফটমোস্ট প্রেফিক্স নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A composite index is an index constructed over multiple columns, such as CREATE INDEX idx_users_country_city ON users(country, city). B-Trees sort keys lexicographically: first by country, and then by city within that country. Because of this sorting order, a composite index can only accelerate queries that filter by the leftmost prefix columns.',
        bn: 'একটি কম্পোজিট ইনডেক্স একাধিক কলামের ওপর তৈরি করা হয়, যেমন CREATE INDEX idx_users_country_city ON users(country, city)। বি-ট্রি ডাটাকে বর্ণানুক্রমিক বা লেক্সিকোগ্রাফিক ক্রমে সাজায়: প্রথমে country অনুসারে এবং একই দেশের ভেতর city অনুসারে। এই সাজানোর পদ্ধতির কারণে কম্পোজিট ইনডেক্স কেবল তখনই কাজ করে যখন কোয়েরিটি সবচেয়ে বামের প্রেফিক্স কলাম দিয়ে ফিল্টার করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Queries matching both country and city navigate the composite index with optimal efficiency. Supplying just the leading country filter also jumps into the tree effectively. However, querying solely by city cannot leverage the index and triggers a full table scan, because cities are scattered throughout the index grouped under their respective countries. The golden rule for composite indexes is the Equality-Range rule: put exact equality filter columns first, and range filter columns last.',
        bn: 'যে কোয়েরিতে WHERE country = \'BD\' AND city = \'Dhaka\' থাকে তা অত্যন্ত দক্ষতার সাথে ইনডেক্স ব্যবহার করে। একইভাবে কেবল WHERE country = \'BD\' শর্ত দিলেও এটি শুরুর প্রেফিক্স ব্যবহার করে দ্রুত চলে। কিন্তু কোয়েরিতে যদি শুধু WHERE city = \'Dhaka\' থাকে, তবে ইনডেক্স কাজ করে না এবং ফুল টেবিল স্ক্যান ঘটে, কারণ প্রতিটি শহরের নাম ভিন্ন ভিন্ন দেশের নিচে ছড়িয়ে থাকে। কম্পোজিট ইনডেক্সের সোনালী নিয়ম হলো Equality-Range নিয়ম: সর্বদা সুনির্দিষ্ট সমতার কলামগুলো আগে রাখুন এবং রেঞ্জ ফিল্টারের কলামগুলো শেষে রাখুন।'
      }
    },
    {
      type: 'heading',
      id: 'node-index-engine',
      text: {
        en: 'Executable Index Engine: Sequential vs B-Tree Seek & Leftmost Rule',
        bn: 'রানযোগ্য ইনডেক্স ইঞ্জিন: সিকোয়েনশিয়াল বনাম বি-ট্রি সিক ও লেফটমোস্ট নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js simulation comparing sequential scans with B-Tree logarithmic seeks. It demonstrates a search on 10,000 records, proves the leftmost prefix matching rule on composite keys, and illustrates how covering indexes bypass table page reads completely.',
        bn: 'নিচে সিকোয়েনশিয়াল স্ক্যান এবং বি-ট্রি লগারিদমিক সিকের তুলনা প্রদর্শনকারী একটি সম্পূর্ণ Node.js সিমুলেশন দেওয়া হলো। এটি ১০,০০০ রেকর্ডের ওপর অনুসন্ধান চালায়, কম্পোজিট কি-এর লেফটমোস্ট প্রেফিক্স নিয়ম প্রমাণ করে এবং দেখায় কীভাবে কাভারিং ইনডেক্স মূল টেবিল পেজ রিড বাদ দিয়ে সরাসরি উত্তর দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Benchmark 10,000 row table scan against B-Tree index seek and test composite prefix rules',
        bn: '১০,০০০ সারির টেবিল স্ক্যানের সাথে বি-ট্রি ইনডেক্স সিকের তুলনা এবং কম্পোজিট প্রেফিক্স নিয়ম পরীক্ষা'
      },
      code: `// Benchmarking Sequential Scan vs B-Tree Index Lookups
const totalRows = 10000;
const targetId = 8421;

// Test 1: Sequential Full Table Scan (Unindexed Column)
let rowsScanned = 0;
for (let i = 1; i <= totalRows; i++) {
  rowsScanned++;
  if (i === targetId) {
    break; // Found row
  }
}

// Test 2: B-Tree Index Seek (Logarithmic depth with fanout = 100)
// Tree height = ceil(log10(10000)) / log10(100) -> 2 levels + leaf = 3 to 4 page reads
const btreePagesRead = Math.ceil(Math.log10(totalRows)) || 4;

// Test 3: Composite Index (country, city) Leftmost Prefix Rule
const compositeIndex = {
  'BD:Dhaka': { id: 101, country: 'BD', city: 'Dhaka', age: 28 },
  'BD:Chittagong': { id: 102, country: 'BD', city: 'Chittagong', age: 34 },
  'US:NewYork': { id: 201, country: 'US', city: 'NewYork', age: 41 }
};

// Query A: Supplies leading prefix (country = 'BD', city = 'Dhaka') -> Index Seek!
const prefixKey = 'BD:Dhaka';
const isPrefixMatched = compositeIndex[prefixKey] !== undefined;

// Query B: Omits leading prefix (queries only city = 'Dhaka') -> Index Miss (Full Scan)!
const rawKeys = Object.keys(compositeIndex);
const isNakedCityUsableViaIndex = rawKeys.some(k => k.startsWith('Dhaka:'));

// Test 4: Covering Index Optimization
// Query requests only (country, city): All columns reside in the index leaves!
const requestedCols = ['country', 'city'];
const indexCols = ['country', 'city'];
const isCoveringIndex = requestedCols.every(c => indexCols.includes(c));

console.log(\`[Index Benchmark] Sequential scan inspected \${rowsScanned} rows; B-Tree index seek required only \${btreePagesRead} page reads.\`);
console.log(\`[Composite Index] Prefix (country, city) query matched via index (1/1: \${isPrefixMatched}); naked city query triggered full scan (1/1: \${!isNakedCityUsableViaIndex}).\`);
console.log(\`[Covering Index] Answered query purely from index leaves: zero table fetches required (\${isCoveringIndex}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'The Write Penalty: Do Not Over-Index Your Database',
        bn: 'রাইট পেনাল্টি: ডাটাবেসে অতিরিক্ত ইনডেক্স তৈরি করবেন না'
      },
      text: {
        en: 'Every additional index improves specific SELECT queries, but exacts a heavy write penalty on INSERT, UPDATE, and DELETE operations. When a new row is inserted into a table with 6 indexes, the database engine must execute 7 separate disk writes (1 to the table and 6 to the B-Trees). Keep indexes minimal and focused on high-traffic filter columns.',
        bn: 'প্রতিটি নতুন ইনডেক্স নির্দিষ্ট কিছু SELECT কোয়েরির গতি বাড়ালেও INSERT, UPDATE এবং DELETE অপারেশনের ক্ষেত্রে ভারী রাইট পেনাল্টি সৃষ্টি করে। ৬টি ইনডেক্স থাকা কোনো টেবিলে নতুন ১টি রো ইনসার্ট করতে গেলে ডাটাবেসকে মোট ৭টি আলাদা ডিস্ক রাইট চালাতে হয় (১টি টেবিলের জন্য এবং ৬টি বি-ট্রির জন্য)। তাই ইনডেক্সের সংখ্যা সীমিত রাখুন এবং কেবল ঘন ঘন ব্যবহৃত কলামেই ইনডেক্স দিন।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Composite Index Prefix Tester',
        bn: 'কম্পোজিট ইনডেক্স প্রেফিক্স টেস্টার'
      },
      description: {
        en: 'Test composite index queries: see which WHERE filters leverage the index and which trigger full table scans.',
        bn: 'কম্পোজিট ইনডেক্স কোয়েরি পরীক্ষা করুন: কোন WHERE শর্ত ইনডেক্স ব্যবহার করতে পারে এবং কোনটি ফুল স্ক্যান করে তা দেখুন।'
      },
      code: `const indexColumns = ['status', 'created_at', 'user_id'];

function canUseIndex(queryFilterColumns) {
  // Check if query supplies the leftmost prefix (indexColumns[0])
  if (!queryFilterColumns.includes(indexColumns[0])) {
    return 'INDEX_MISS_FULL_TABLE_SCAN';
  }
  return 'INDEX_HIT_FAST_SEEK';
}

console.log('Query 1 (status + created_at):', canUseIndex(['status', 'created_at']));
console.log('Query 2 (only created_at):   ', canUseIndex(['created_at']));`,
      tests: [
        {
          name: {
            en: 'Uses index when leftmost prefix column is supplied',
            bn: 'সবচেয়ে বামের প্রেফিক্স কলাম সরবরাহ করা হলে ইনডেক্স ব্যবহার করে'
          },
          expected: 'Query 1 (status + created_at): INDEX_HIT_FAST_SEEK'
        },
        {
          name: {
            en: 'Triggers full scan when leftmost prefix is missing',
            bn: 'বামের প্রেফিক্স অনুপস্থিত থাকলে ফুল টেবিল স্ক্যান ট্রিগার করে'
          },
          expected: 'Query 2 (only created_at):    INDEX_MISS_FULL_TABLE_SCAN'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-idx-ex-1',
      kind: 'mcq',
      topic: 'clustered-vs-secondary-difference',
      question: {
        en: 'Why can a relational database table have only one clustered index, while it can have dozens of secondary indexes?',
        bn: 'একটি রিলেশনাল টেবিলে কেন কেবল একটিই ক্লাস্টার্ড ইনডেক্স থাকতে পারে, যেখানে ডজন ডজন সেকেন্ডারি ইনডেক্স থাকা সম্ভব?'
      },
      options: [
        {
          en: 'Because a clustered index determines the physical storage order of rows on disk, and table rows can only be physically stored in one order',
          bn: 'কারণ ক্লাস্টার্ড ইনডেক্স ডিস্কে সারির ভৌত সঞ্চয়স্থান ক্রম নির্ধারণ করে, আর টেবিল সারিগুলোকে ভৌতভাবে কেবল একটি ক্রমেই সাজানো সম্ভব'
        },
        {
          en: 'Because SQL syntax limits tables to 1 word per column name',
          bn: 'কারণ SQL সিনট্যাক্স কলামের নামে মাত্র ১টি শব্দ ব্যবহারের সীমাবদ্ধতা দেয়'
        },
        {
          en: 'Because secondary indexes are automatically deleted every 24 hours',
          bn: 'কারণ সেকেন্ডারি ইনডেক্স প্রতি ২৪ ঘণ্টা পর পর স্বয়ংক্রিয়ভাবে মুছে যায়'
        },
        {
          en: 'Because clustered indexes can only be created by cloud hosting providers',
          bn: 'কারণ ক্লাস্টার্ড ইনডেক্স কেবল ক্লাউড হোস্টিং প্রদানকারীরাই তৈরি করতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Data rows on disk can only occupy one physical sequence.',
        bn: 'ডিস্কে ডাটার সারিগুলো কেবল একটিমাত্র ভৌত ক্রমেই বিন্যস্ত থাকতে পারে।'
      },
      explanation: {
        en: 'The clustered index IS the table. Leaf pages store the actual table rows in sorted physical order. Since data cannot be stored in two physical orders simultaneously, only one clustered index can exist. Secondary indexes point to this clustered table.',
        bn: 'ক্লাস্টার্ড ইনডেক্সই হলো মূল টেবিল। এর লিফ পেজগুলোতে সম্পূর্ণ রো ডাটা ভৌতভাবে সাজানো থাকে। যেহেতু একসাথে দুটি ভৌত ক্রমে ডাটা রাখা সম্ভব নয়, তাই ক্লাস্টার্ড ইনডেক্স কেবল একটিই হতে পারে। সেকেন্ডারি ইনডেক্সগুলো এই টেবিলের দিকে নির্দেশ করে।'
      }
    },
    {
      id: 'db-idx-ex-2',
      kind: 'mcq',
      topic: 'leftmost-prefix-rule-rule',
      question: {
        en: 'Given a composite index created on (department_id, hire_date), which of the following queries CANNOT efficiently use the index?',
        bn: '(department_id, hire_date) এর ওপর তৈরি একটি কম্পোজিট ইনডেক্সের ক্ষেত্রে নিচের কোন কোয়েরিটি ইনডেক্স ব্যবহার করতে পারবে না?'
      },
      options: [
        {
          en: 'SELECT * FROM employees WHERE hire_date = \'2026-01-15\'',
          bn: 'SELECT * FROM employees WHERE hire_date = \'2026-01-15\''
        },
        {
          en: 'SELECT * FROM employees WHERE department_id = 5 AND hire_date = \'2026-01-15\'',
          bn: 'SELECT * FROM employees WHERE department_id = 5 AND hire_date = \'2026-01-15\''
        },
        {
          en: 'SELECT * FROM employees WHERE department_id = 5',
          bn: 'SELECT * FROM employees WHERE department_id = 5'
        },
        {
          en: 'SELECT * FROM employees WHERE department_id = 5 ORDER BY hire_date',
          bn: 'SELECT * FROM employees WHERE department_id = 5 ORDER BY hire_date'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Leftmost Prefix Rule requires filtering on the leading column (department_id) first.',
        bn: 'লেফটমোস্ট প্রেফিক্স নিয়ম অনুযায়ী অবশ্যই শুরুর কলাম (department_id) দিয়ে আগে ফিল্টার করতে হবে।'
      },
      explanation: {
        en: 'Because the B-Tree is sorted first by department_id, queries that omit department_id cannot jump into the tree. Searching solely by hire_date forces a full sequential scan because hire dates are scattered across all departments.',
        bn: 'বি-ট্রি প্রথমে department_id অনুসারে সাজানো থাকে, তাই department_id বাদ দিলে ইনডেক্স সরাসরি অনুসন্ধান করতে পারে না। শুধু hire_date দিয়ে কোয়েরি করলে ফুল স্ক্যান ঘটে কারণ তারিখগুলো প্রতিটি ডিপার্টমেন্টের নিচে ছড়িয়ে থাকে।'
      }
    },
    {
      id: 'db-idx-ex-3',
      kind: 'mcq',
      topic: 'covering-index-performance-benefit',
      question: {
        en: 'What unique performance advantage does a Covering Index provide over a standard secondary index seek?',
        bn: 'একটি সাধারণ সেকেন্ডারি ইনডেক্স সিকের তুলনায় কাভারিং ইনডেক্স কোন অনন্য পারফরম্যান্স সুবিধা দেয়?'
      },
      options: [
        {
          en: 'It satisfies the entire query directly from index leaf pages, eliminating the need to perform secondary table row lookups on disk (Index-Only Scan)',
          bn: 'এটি সরাসরি ইনডেক্স লিফ পেজ থেকেই পুরো কোয়েরির উত্তর দিয়ে দেয়, ফলে ডিস্ক থেকে মূল টেবিল রো খোঁজার কোনো প্রয়োজন হয় না (Index-Only Scan)'
        },
        {
          en: 'It allows SQL queries to run without a CPU processor',
          bn: 'এটি সিপিইউ প্রসেসর ছাড়াই SQL কোয়েরি চালানোর সুবিধা দেয়'
        },
        {
          en: 'It doubles the storage space of the computer monitor',
          bn: 'এটি কম্পিউটার মনিটরের ধারণক্ষমতা দ্বিগুণ করে দেয়'
        },
        {
          en: 'It converts relational databases into NoSQL document stores',
          bn: 'এটি রিলেশনাল ডাটাবেসকে NoSQL ডকুমেন্ট স্টোরে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Index-Only Scan: all requested columns are already stored right inside the index leaves.',
        bn: 'Index-Only Scan: কোয়েরির কাঙ্ক্ষিত সকল কলাম আগে থেকেই ইনডেক্সের পাতায় উপস্থিত থাকে।'
      },
      explanation: {
        en: 'Normally, a secondary index lookup retrieves a primary key, requiring a second trip to the clustered table to read missing columns. A covering index contains all requested columns, executing as a high-speed Index-Only Scan.',
        bn: 'সাধারণত সেকেন্ডারি ইনডেক্স প্রাইমারি কি বের করে মূল টেবিল থেকে বাকি কলামগুলো পড়ে আনে। কিন্তু কাভারিং ইনডেক্সে প্রয়োজনীয় সব কলাম থাকায় মূল টেবিলে আর যেতে হয় না, যা সর্বোচ্চ গতি নিশ্চিত করে।'
      }
    },
    {
      id: 'db-idx-ex-4',
      kind: 'mcq',
      topic: 'write-penalty-index-cost',
      question: {
        en: 'What architectural tradeoff must engineers consider before adding 10 secondary indexes to a single database table?',
        bn: 'একটি ডাটাবেস টেবিলে ১০টি সেকেন্ডারি ইনডেক্স যোগ করার আগে ইঞ্জিনিয়ারদের কোন প্রযুক্তিগত আপসটি বিবেচনা করতে হয়?'
      },
      options: [
        {
          en: 'The Write Penalty: every single INSERT, UPDATE, and DELETE must synchronously update all 10 B-Tree indexes, dramatically slowing down write throughput',
          bn: 'রাইট পেনাল্টি: প্রতিটি INSERT, UPDATE এবং DELETE অপারেশনে ১০টি বি-ট্রি ইনডেক্সকেই সিঙ্ক্রোনাসভাবে আপডেট করতে হয়, যা লেখার গতি নাটকীয়ভাবে কমিয়ে দেয়'
        },
        {
          en: 'Indexes prevent users from logging in on mobile devices',
          bn: 'ইনডেক্স ব্যবহারকারীদের মোবাইল ফোন থেকে লগইন করতে বাধা দেয়'
        },
        {
          en: 'Indexes cause the database server to lose internet connection',
          bn: 'ইনডেক্স ডাটাবেস সার্ভারের ইন্টারনেট সংযোগ বিচ্ছিন্ন করে দেয়'
        },
        {
          en: 'There is zero tradeoff; adding 50 indexes always makes all database operations faster',
          bn: 'কোনো ক্ষতি নেই; ৫০টি ইনডেক্স বসালে ডাটাবেসের সমস্ত অপারেশন সর্বদা দ্রুত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Faster reads cost slower writes: each new index requires disk writes on every mutation.',
        bn: 'দ্রুত পড়ার সুবিধা লেখার গতি কমিয়ে দেয়: প্রতিবার ডাটা পরিবর্তনের সময় প্রতিটি ইনডেক্স আপডেট করতে হয়।'
      },
      explanation: {
        en: 'Indexes are not free. While they accelerate SELECT queries, they penalize write performance because the database engine must execute a B-Tree page split and disk write for every index on every row modification.',
        bn: 'ইনডেক্স বিনামূল্যে পাওয়া যায় না। এগুলো SELECT কোয়েরি দ্রুত করলেও প্রতিবার রো ইনসার্ট বা আপডেটের সময় প্রতিটি বি-ট্রিতে আলাদা ডিস্ক রাইট করতে হয়, যা লেখার পারফরম্যান্সে প্রচণ্ড চাপ সৃষ্টি করে।'
      }
    }
  ],
  quiz: {
    id: 'indexes-and-the-index-quiz',
    title: {
      en: 'B-Tree Indexes & Query Acceleration Quiz',
      bn: 'বি-ট্রি ইনডেক্স ও কোয়েরি গতিবর্ধন কুইজ'
    },
    questions: [
      {
        id: 'db-idx-qz-1',
        kind: 'mcq',
        topic: 'bplus-tree-range-advantage',
        question: {
          en: 'Why do relational databases utilize B+Tree indexes rather than simple Hash Indexes for general-purpose storage?',
          bn: 'সাধারণ ডাটাবেস সংরক্ষণে রিলেশনাল ডাটাবেসগুলো কেন সাধারণ হ্যাশ ইনডেক্সের বদলে বি+ট্রি (B+Tree) ইনডেক্স বেছে নেয়?'
        },
        options: [
          {
            en: 'B+Trees maintain sorted order and doubly-linked leaf nodes, supporting range queries (> < BETWEEN), ordering (ORDER BY), and prefix searches that Hash Indexes cannot perform',
            bn: 'বি+ট্রি ডাটাকে সাজিয়ে রাখে এবং ডাবল-লিংকড লিফ নোড ব্যবহার করে, যা রেঞ্জ কোয়েরি (> < BETWEEN), সাজানো (ORDER BY) এবং প্রেফিক্স সার্চ সমর্থন করে যা হ্যাশ ইনডেক্স পারে না'
          },
          {
            en: 'Hash indexes can only run on quantum supercomputers',
            bn: 'হ্যাশ ইনডেক্স শুধুমাত্র কোয়ান্টাম সুপার কম্পিউটারে চলে'
          },
          {
            en: 'B+Trees delete table records when memory becomes full',
            bn: 'মেমরি পূর্ণ হলে বি+ট্রি টেবিল রেকর্ড মুছে ফেলে'
          },
          {
            en: 'Hash indexes require monthly licensing fees paid to IBM',
            bn: 'হ্যাশ ইনডেক্স ব্যবহারের জন্য আইবিএমকে প্রতি মাসে লাইসেন্স ফি দিতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hash indexes only support exact equality (=); B+Trees support ranges, sorting, and prefixes.',
          bn: 'হ্যাশ ইনডেক্স কেবল হুবহু সমতা (=) সমর্থন করে; আর বি+ট্রি রেঞ্জ, সর্টিং এবং প্রেফিক্স সমর্থন করে।'
        },
        explanation: {
          en: 'Hash indexes only support direct point lookups (WHERE id = 5). B+Trees sort keys and chain leaf pages together, allowing fast range filtering (WHERE age BETWEEN 20 AND 30) and index-ordered sorting.',
          bn: 'হ্যাশ ইনডেক্স কেবল সরাসরি একক মান খুঁজতে পারে (WHERE id = ৫)। বি+ট্রি কি-গুলোকে ক্রমানুসারে সাজায় এবং লিফ নোডগুলোকে লিংকড করে রাখে, ফলে রেঞ্জ ফিল্টারিং এবং সর্টিং চোখের পলকে সম্পন্ন হয়।'
        }
      },
      {
        id: 'db-idx-qz-2',
        kind: 'mcq',
        topic: 'btree-fanout-tree-height',
        question: {
          en: 'What is "fan-out" in a B-Tree index, and why does high fan-out keep tree depth low for millions of rows?',
          bn: 'একটি বি-ট্রি ইনডেক্সে "ফ্যান-আউট" (Fan-out) কী এবং উচ্চ ফ্যান-আউট কীভাবে কোটি কোটি সারির জন্য ট্রির গভীরতা কম রাখে?'
        },
        options: [
          {
            en: 'Fan-out is the number of child pointers per page (often 100 to 500); high fan-out allows a 3-level tree to index millions of records in only 3 page reads',
            bn: 'ফ্যান-আউট হলো প্রতি পেজে চাইল্ড পয়েন্টারের সংখ্যা (সাধারণত ১০০ থেকে ৫০০); উচ্চ ফ্যান-আউটের কারণে মাত্র ৩ স্তরের ট্রিতে কোটি কোটি রেকর্ড ৩টি পেজ রিডেই খুঁজে পাওয়া যায়'
          },
          {
            en: 'Fan-out is the physical cooling fan inside the server power supply',
            bn: 'ফ্যান-আউট হলো সার্ভার পাওয়ার সাপ্লাইয়ের ভেতরের কুলিং ফ্যান'
          },
          {
            en: 'Fan-out is the number of developers querying the database concurrently',
            bn: 'ফ্যান-আউট হলো একসাথে ডাটাবেস ব্যবহারকারী মোট ডেভেলপারের সংখ্যা'
          },
          {
            en: 'Fan-out is the rate at which rows are deleted from disk',
            bn: 'ফ্যান-আউট হলো যে হারে ডিস্ক থেকে রো মুছে ফেলা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Broad branch nodes mean fewer vertical tree levels are required to reach leaves.',
          bn: 'শাখা নোডে যত বেশি পয়েন্টার থাকে, পাতায় পৌঁছাতে তত কম উল্লম্ব ধাপের প্রয়োজন হয়।'
        },
        explanation: {
          en: 'In a B-Tree, each 8 KB page can store hundreds of keys and pointers. With a fanout of 100, level 1 holds 100 pointers, level 2 holds 10,000, and level 3 points to 1,000,000 leaf rows in only 3 I/O hops.',
          bn: 'বি-ট্রিতে প্রতিটি ৮ কেবি পেজ শত শত কি ও পয়েন্টার ধরে রাখতে পারে। ১০০ ফ্যান-আউট থাকলে ১ম লেভেলে ১০০, ২য় লেভেলে ১০,০০০ এবং ৩য় লেভেলে ১০,০০,০০০ রো ধারণ করা যায় মাত্র ৩টি I/O ধাপে।'
        }
      },
      {
        id: 'db-idx-qz-3',
        kind: 'mcq',
        topic: 'equality-range-composite-rule',
        question: {
          en: 'When creating a composite index for a query like WHERE status = \'PAID\' AND created_at > \'2026-01-01\', which column order is correct?',
          bn: 'WHERE status = \'PAID\' AND created_at > \'2026-01-01\' এর মতো কোয়েরির জন্য কম্পোজিট ইনডেক্স তৈরির সঠিক কলাম ক্রম কোনটি?'
        },
        options: [
          {
            en: 'CREATE INDEX idx ON orders(status, created_at) [Equality first, Range second]',
            bn: 'CREATE INDEX idx ON orders(status, created_at) [আগে সমতা, পরে রেঞ্জ]'
          },
          {
            en: 'CREATE INDEX idx ON orders(created_at, status) [Range first, Equality second]',
            bn: 'CREATE INDEX idx ON orders(created_at, status) [আগে রেঞ্জ, পরে সমতা]'
          },
          {
            en: 'Column order does not matter in composite indexes',
            bn: 'কম্পোজিট ইনডেক্সে কলামের ক্রম কোনো প্রভাব ফেলে না'
          },
          {
            en: 'Composite indexes cannot combine text and date columns',
            bn: 'কম্পোজিট ইনডেক্সে টেক্সট এবং তারিখের কলাম একসাথে রাখা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'The Equality-Range Rule: once a range filter is encountered, subsequent columns cannot be indexed.',
          bn: 'ইকুয়ালিটি-রেঞ্জ নিয়ম: একবার রেঞ্জ ফিল্টার চলে আসলে তার পরের কলামগুলো আর ইনডেক্স হতে পারে না।'
        },
        explanation: {
          en: 'Always place exact equality columns first. Putting created_at first means the B-Tree scans a range of dates, but cannot narrow down by status within that range, causing redundant page reads.',
          bn: 'সর্বদা সুনির্দিষ্ট সমতার কলামগুলো আগে রাখুন। created_at আগে রাখলে বি-ট্রি তারিখের বিশাল রেঞ্জ স্ক্যান করবে কিন্তু তার ভেতরের status ফিল্টার করতে পারবে না, ফলে প্রচুর অপ্রয়োজনীয় পেজ রিড হবে।'
        }
      },
      {
        id: 'db-idx-qz-4',
        kind: 'mcq',
        topic: 'explain-analyze-role',
        question: {
          en: 'What terminal command do database engineers use to inspect whether a query actually uses an index or executes a full table scan?',
          bn: 'একটি কোয়েরি কি আসলেই ইনডেক্স ব্যবহার করছে নাকি ফুল টেবিল স্ক্যান চালাচ্ছে তা দেখতে ডাটাবেস ইঞ্জিনিয়াররা কোন কমান্ড ব্যবহার করেন?'
        },
        options: [
          {
            en: 'EXPLAIN ANALYZE <query>',
            bn: 'EXPLAIN ANALYZE <query>'
          },
          {
            en: 'CHECK INDEX SPEED <query>',
            bn: 'CHECK INDEX SPEED <query>'
          },
          {
            en: 'RUN BENCHMARK NOW <query>',
            bn: 'RUN BENCHMARK NOW <query>'
          },
          {
            en: 'VALIDATE DISK ACCESS <query>',
            bn: 'VALIDATE DISK ACCESS <query>'
          }
        ],
        answer: 0,
        hint: {
          en: 'EXPLAIN prints the execution plan chosen by the database query optimizer.',
          bn: 'EXPLAIN কমান্ডটি কোয়েরি অপ্টিমাইজারের নির্বাচিত এক্সিকিউশন প্ল্যান প্রদর্শন করে।'
        },
        explanation: {
          en: 'EXPLAIN ANALYZE executes the SQL query and displays the actual execution plan, showing whether the engine used an Index Scan, Index-Only Scan, Bitmap Scan, or Sequential Scan, along with exact millisecond timings.',
          bn: 'EXPLAIN ANALYZE কোয়েরিটি সরাসরি চালিয়ে প্রকৃত এক্সিকিউশন প্ল্যান দেখায়, যাতে বোঝা যায় ইঞ্জিন ইনডেক্স স্ক্যান, বিটম্যাপ স্ক্যান নাকি ফুল সিকোয়েনশিয়াল স্ক্যান চালিয়েছে এবং প্রতিটি ধাপে কত মিলিসেকেন্ড সময় লেগেছে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-db-release',
    title: {
      en: 'Database Releases: Migrations, Zero-Downtime & Rollbacks',
      bn: 'ডাটাবেস রিলিজ: মাইগ্রেশন, জিরো-ডাউনটাইম ও রোলব্যাক'
    }
  }
};
