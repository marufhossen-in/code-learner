import type { Lesson } from '../../../lib/types';

export const storageLedgerLesson: Lesson = {
  slug: 'the-storage-ledger',
  tech: 'system-design',
  title: {
    en: 'Storage Systems & Database Engines — SQL vs NoSQL, B-Trees, and LSM-Trees',
    bn: 'স্টোরেজ সিস্টেমস ও ডেটাবেস ইঞ্জিন: এসকিউএল বনাম নোএসকিউএল, B-Trees ও LSM-Trees'
  },
  summary: {
    en: 'Choosing the right database architecture is one of the most consequential decisions in system design. In this lesson, you will master the access-pattern-first methodology to select between Relational SQL, Key-Value, Document, Columnar, and Time-Series stores. Dissect the physical tradeoffs of core storage engines: B-Trees (optimized for fast reads and in-place updates) versus Log-Structured Merge-Trees (optimized for high-throughput append-only writes). Understand secondary indexing write amplification, the composite index left-prefix rule, cursor-based pagination versus offset scanning, and leader-follower replication lag. Implement an executable B-Tree vs LSM-Tree write cost simulator in TypeScript.',
    bn: 'সঠিক ডেটাবেস নির্বাচন সিস্টেম ডিজাইনের সবচেয়ে সুদূরপ্রসারী স্থাপত্যিক সিদ্ধান্তের একটি। এই পাঠে আপনি ডেটার কাজের ধরন ও কোয়েরি প্যাটার্ন বিশ্লেষণ করে রিলেশনাল SQL, কি-ভ্যালু, ডকুমেন্ট, কলামার এবং টাইম-সিরিজ ডেটাবেস নির্বাচনের কৌশল শিখবেন। প্রধান দুটি ডেটাবেস স্টোরেজ ইঞ্জিনের ভৌত পার্থক্য ব্যবচ্ছেদ করবেন: B-Trees (দ্রুত রিড ও ইন-প্লেস আপডেটের উপযোগী) বনাম LSM-Trees (উচ্চগতির অ্যাপেন্ড-অনলি রাইটের উপযোগী)। সেকেন্ডারি ইনডেক্স রাইট অ্যামপ্লিফিকেশন, কম্পোজিট ইনডেক্সের লেফট-প্রিফিক্স নিয়ম, অফসেটের বদলে কার্সর-ভিত্তিক পেজিনেশন এবং রেপ্লিকেশন ল্যাগ বিস্তারিতভাবে বিশ্লেষণ করা হয়েছে। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর B-Tree বনাম LSM-Tree সিমুলেশন বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'storage-taxonomy-access-patterns',
      text: {
        en: 'The Storage Taxonomy: Choosing by Query Pattern, Not Hype',
        bn: 'স্টোরেজের শ্রেণীবিন্যাস: প্রচারের মোহে নয়, কাজের ধরন দেখে নির্বাচন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you design data storage for a scalable platform, you must categorize your read and write patterns before selecting a database engine.',
        bn: 'একটি বড় প্ল্যাটফর্মের জন্য ডেটা স্টোরেজ নকশা করার সময় কোনো ডেটাবেস নির্বাচনের আগেই ডেটা পড়ার ও লেখার ধরন সুনির্দিষ্টভাবে চিহ্নিত করতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'No single database engine excels at all workloads. Relational SQL engines (such as PostgreSQL and MySQL) provide strict ACID transactions, complex relational JOIN operations, and normalized integrity. Key-Value stores (such as Redis) provide sub-millisecond in-memory lookups for transient sessions and hot caches. Document databases (such as MongoDB) store polymorphic JSON payloads accessed by primary identifier. Columnar databases (such as ClickHouse and Snowflake) compress petabytes of structured records by column to execute analytical aggregate queries thousands of times faster than row-oriented engines. Architectural excellence begins by defining the 3 primary questions your database will be asked before choosing software.',
        bn: 'কোনো একক ডেটাবেস সব ধরনের কাজের জন্য সেরা হতে পারে না। রিলেশনাল SQL ডেটাবেস (যেমন PostgreSQL ও MySQL) কঠোর ACID লেনদেন, জটিল টেবিল JOIN এবং সুশৃঙ্খল রিলেশনশিপ বজায় রাখতে অতুলনীয়। কি-ভ্যালু স্টোর (যেমন Redis) সেশন ডেটা ও হট ক্যাশের জন্য সাব-মিলিসেকেন্ড গতি দেয়। ডকুমেন্ট ডেটাবেস (যেমন MongoDB) পরিবর্তনশীল JSON ডেটা আইডি দিয়ে দ্রুত ফেরত আনার কাজে সেরা। আর কলামার ডেটাবেস (যেমন ClickHouse ও Snowflake) কলামভিত্তিক ডেটা সংকুচিত করে বিশাল অ্যানালিটিক্যাল হিসাব প্রথাগত রো-ভিত্তিক ইঞ্জিনের চেয়ে হাজার গুণ দ্রুত করতে পারে। যেকোনো ডেটাবেস সফটওয়্যার নির্বাচনের আগে সিস্টেমের প্রধান ৩টি মূল প্রশ্নের উত্তর নির্ধারণ করাই আর্কিটেকচারের প্রথম শর্ত।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'acid-transactions',
          def: {
            en: 'Atomicity, Consistency, Isolation, Durability — the 4 foundational properties guaranteeing reliable database transactions even amid hardware crashes.',
            bn: 'অ্যাটোমিসিটি, কনসিস্টেন্সি, আইসোলেশন, ডিউরেবিলিটি — ৪টি মূল নীতি যা হার্ডওয়্যার ক্র্যাশের মুখেও ডেটাবেসের লেনদেনের নির্ভুলতা রক্ষা করে।'
          }
        },
        {
          term: 'b-tree-storage-engine',
          def: {
            en: 'A read-optimized, self-balancing tree index structure that updates 4KB to 8KB memory pages in-place on persistent disk storage.',
            bn: 'একটি ব্যালান্সড ট্রি ইনডেক্স যা দ্রুত রিডের জন্য ডিস্কের ৪KB থেকে ৮KB পেজে সরাসরি তথ্য হালনাগাদ (in-place update) করে।'
          }
        },
        {
          term: 'lsm-tree-storage-engine',
          def: {
            en: 'Log-Structured Merge-Tree: a write-optimized architecture appending writes sequentially to an in-memory Memtable and WAL, compacting SSTables later.',
            bn: 'একটি দ্রুত লেখার উপযোগী স্টোরেজ ইঞ্জিন যা মেমরি ও লগ ফাইলে ক্রমানুসারে ডেটা লিখে পরবর্তীতে ব্যাকগ্রাউন্ডে কম্প্যাকশন সম্পন্ন করে।'
          }
        },
        {
          term: 'cursor-based-pagination',
          def: {
            en: 'Paginating large datasets using indexed keyset pointers (WHERE id > last_seen LIMIT 20) instead of scanning and discarding skipped rows via OFFSET.',
            bn: 'OFFSET দিয়ে অপ্রয়োজনীয় রো স্ক্যান না করে ইনডেক্স করা পয়েন্টার (WHERE id > last_seen) দিয়ে অতি দ্রুত ডেটার পরবর্তী পেজে যাওয়ার কৌশল।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'btree-vs-lsmtree-comparison',
      text: {
        en: 'The Storage Engine Battle: B-Trees vs LSM-Trees',
        bn: 'স্টোরেজ ইঞ্জিনের তুলনা: B-Trees বনাম LSM-Trees'
      }
    },
    {
      type: 'para',
      text: {
        en: 'At the physical storage tier, database performance is determined by whether the engine optimizes for in-place random page updates (B-Tree) or append-only sequential writes (LSM-Tree).',
        bn: 'ভৌত স্টোরেজ স্তরে ডেটাবেসের গতি নির্ভর করে ইঞ্জিনটি ডিস্কে সরাসরি পেজ আপডেট (B-Tree) করে নাকি ক্রমানুসারে কেবল নতুন ডেটা যোগ (LSM-Tree) করে চলে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Storage Engine Type', bn: 'স্টোরেজ ইঞ্জিন' },
        { en: 'Write Architecture & Disk I/O', bn: 'রাইট পদ্ধতি ও ডিস্ক I/O' },
        { en: 'Read Architecture & Lookup Cost', bn: 'রিড পদ্ধতি ও অনুসন্ধান গতি' },
        { en: 'Primary Database Workload', bn: 'আদর্শ কাজের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'B-Tree Engine', bn: 'B-Tree ইঞ্জিন' },
          { en: 'In-place page updates; random disk writes; Write-Ahead Log (WAL)', bn: 'ইন-প্লেস পেজ আপডেট; র‍্যান্ডম ডিস্ক রাইট; WAL লগ' },
          { en: 'Fast, predictable O(log N) page reads from balanced tree', bn: 'খুব দ্রুত ও নির্দিষ্ট O(log N) ট্রি রিড গতি' },
          { en: 'Read-heavy transactional systems (PostgreSQL, MySQL InnoDB)', bn: 'রিড-প্রধান লেনদেনমূলক সিস্টেম (PostgreSQL, MySQL)' }
        ],
        [
          { en: 'LSM-Tree Engine', bn: 'LSM-Tree ইঞ্জিন' },
          { en: 'Sequential append to in-memory Memtable and WAL; zero random writes', bn: 'মেমরি ও লগে ক্রমানুসারে অ্যাপেন্ড; কোনো র‍্যান্ডম রাইট নেই' },
          { en: 'Slower: must search Memtable, Bloom filters, and SSTables', bn: 'তুলনামূলক ধীর: ব্লুম ফিল্টার ও একাধিক স্তর দেখতে হয়' },
          { en: 'Write-heavy streaming, logs, metrics (Cassandra, RocksDB)', bn: 'রাইট-প্রধান ইভেন্ট স্ট্রিম ও লগ (Cassandra, RocksDB)' }
        ],
        [
          { en: 'In-Memory Key-Value', bn: 'ইন-মেমরি কি-ভ্যালু' },
          { en: 'Updates in-memory hash tables; periodic async RDB/AOF snapshots', bn: 'র‍্যামের হ্যাশ টেবিলে সরাসরি পরিবর্তন; ব্যাকগ্রাউন্ডে ডিস্ক স্ন্যাপশট' },
          { en: 'Ultra-fast O(1) memory lookup (~100 nanoseconds latency)', bn: 'অবিশ্বাস্য দ্রুত O(1) গতি (প্রায় ১০০ ন্যানোসেকেন্ড)' },
          { en: 'Hot caches, user sessions, transient rate limiters (Redis)', bn: 'হট ক্যাশ, সেশন স্টোরেজ ও রেট লিমিটিং (Redis)' }
        ],
        [
          { en: 'Columnar Store', bn: 'কলামার স্টোরেজ' },
          { en: 'Appends data grouped by column; heavy disk block compression', bn: 'কলাম অনুসারে গ্রুপ করে অ্যাপেন্ড; উচ্চ কম্প্রেশন' },
          { en: 'Fast column scans; avoids loading unnecessary row attributes', bn: 'সুনির্দিষ্ট কলাম স্ক্যান; অপ্রয়োজনীয় ডেটা লোড হয় না' },
          { en: 'Analytical aggregations across billions of rows (ClickHouse)', bn: 'কোটি কোটি সারির অ্যানালিটিক্যাল হিসাব (ClickHouse)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-storage-cost-code',
      text: {
        en: 'Executable B-Tree vs LSM-Tree Write Cost Simulation',
        bn: 'B-Tree বনাম LSM-Tree এর বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates the physical disk operation overhead of writing 10000 records across a B-Tree engine maintaining 3 secondary indexes versus an append-only LSM-Tree engine.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৩টি সেকেন্ডারি ইনডেক্সযুক্ত একটি B-Tree ডেটাবেসে ১০০০০ রেকর্ড লেখার ডিস্ক খরচ এবং একটি LSM-Tree অ্যাপেন্ড ইঞ্জিনের ডিস্ক খরচের তুলনা হিসাব করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Database Engine Write Amplification Cost

interface WriteBenchmark {
  recordsWritten: number;
  secondaryIndexCount: number;
  btreeTotalDiskOperations: number;
  lsmTotalDiskOperations: number;
  writeReductionPercentage: string;
}

function evaluateStorageEngineCost(
  records: number,
  indexCount: number
): WriteBenchmark {
  // B-Tree Cost: Each write requires updating the Write-Ahead Log (WAL),
  // dirtying the main data table page (random I/O), plus updating every secondary index page.
  const btreeOpsPerRecord = 1 + 1 + indexCount;
  const btreeTotalDiskOperations = records * btreeOpsPerRecord;

  // LSM-Tree Cost: Writes are appended sequentially to the in-memory Memtable
  // and flushed to sequential disk logs without random page updates.
  const lsmOpsPerRecord = 1;
  const lsmTotalDiskOperations = records * lsmOpsPerRecord;

  const reduction = Math.round(
    ((btreeTotalDiskOperations - lsmTotalDiskOperations) /
      btreeTotalDiskOperations) *
      100
  );

  return {
    recordsWritten: records,
    secondaryIndexCount: indexCount,
    btreeTotalDiskOperations,
    lsmTotalDiskOperations,
    writeReductionPercentage: reduction + '%'
  };
}

const benchmark = evaluateStorageEngineCost(10000, 3);

console.log('Records written:', benchmark.recordsWritten);
console.log('Secondary indexes maintained:', benchmark.secondaryIndexCount);
console.log('B-Tree random disk operations:', benchmark.btreeTotalDiskOperations);
console.log('LSM-Tree sequential disk operations:', benchmark.lsmTotalDiskOperations);
console.log('Write overhead reduction:', benchmark.writeReductionPercentage);

// prints: Records written: 10000
// prints: Secondary indexes maintained: 3
// prints: B-Tree random disk operations: 50000
// prints: LSM-Tree sequential disk operations: 10000
// prints: Write overhead reduction: 80%`
    },
    {
      type: 'heading',
      id: 'offset-pagination-trap-and-cursors',
      text: {
        en: 'The Offset Pagination Trap and Keyset Cursors',
        bn: 'অফসেট পেজিনেশনের ফাঁদ এবং কার্সর সিঙ্কিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A classic performance blunder in backend engineering is using offset-based pagination (e.g. SELECT * FROM transactions ORDER BY id LIMIT 20 OFFSET 100000). The database engine must scan and sort all 100020 rows in memory before discarding the first 100000 rows to deliver the requested 20 records. As users paginate deeper, query latency skyrockets exponentially. In contrast, Keyset (Cursor-based) pagination uses index seeks: SELECT * FROM transactions WHERE id > :last_seen_id ORDER BY id LIMIT 20. The B-Tree index jumps directly to the cursor key in O(log N) time, evaluating exactly 20 rows regardless of whether you are viewing page 1 or page 50000.',
        bn: 'ব্যাকএন্ড ইঞ্জিনিয়ারিংয়ের একটি ক্লাসিক ভুল হলো অফসেট-ভিত্তিক পেজিনেশন ব্যবহার করা (যেমন SELECT * FROM transactions ORDER BY id LIMIT 20 OFFSET 100000)। ডেটাবেস ইঞ্জিনকে মেমরিতে ১০০০২০টি রো স্ক্যান ও সাজিয়ে প্রথম ১০০০০০টি রো ফেলে দিতে হয় মাত্র ২০টি রেকর্ড দেখানোর জন্য। ব্যবহারকারী যত গভীর পেজে যান, কোয়েরির সময় তত মারাত্মকভাবে বাড়তে থাকে। এর বিপরীতে কার্সর-ভিত্তিক পেজিনেশন ইনডেক্স ব্যবহার করে: SELECT * FROM transactions WHERE id > :last_seen_id ORDER BY id LIMIT 20। B-Tree ইনডেক্স সরাসরি নির্দিষ্ট কী-তে লাফ দিয়ে ঠিক ২০টি রেকর্ড পড়ে, আপনি ১ নম্বর পেজে থাকুন বা ৫০০০০ নম্বর পেজেই থাকুন না কেন।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Match storage to queries: Use SQL for ACID relational transactions, NoSQL for high-write partitions, and columnar for analytics.',
          bn: 'কাজের সাথে স্টোরেজ মেলান: লেনদেনের জন্য SQL, উচ্চগতির রাইটের জন্য NoSQL এবং অ্যানালিটিক্সের জন্য কলামার ডেটাবেস ব্যবহার করুন।'
        },
        {
          en: 'B-Trees for fast reads, LSM-Trees for fast writes: Choose in-place pages for OLTP reads and append-only trees for high-volume ingestion.',
          bn: 'পড়ার জন্য B-Tree, লেখার জন্য LSM-Tree: দ্রুত রিডের জন্য B-Tree এবং বিশাল রাইটের জন্য LSM-Tree ইঞ্জিন নির্বাচন করুন।'
        },
        {
          en: 'Indexes are write taxes: Every added secondary index requires updating another B-Tree on disk for every INSERT and UPDATE.',
          bn: 'ইনডেক্স লেখার গতি কমায়: প্রতি নতুন সেকেন্ডারি ইনডেক্স প্রতিটি ডেটা লেখার সময় ডিস্কে অতিরিক্ত লেখার চাপ তৈরি করে।'
        },
        {
          en: 'Replace offsets with cursor pagination: Avoid scanning millions of dead rows by filtering queries with indexed cursor IDs.',
          bn: 'অফসেটের বদলে কার্সর ব্যবহার করুন: লাখ লাখ রো অকারণে স্ক্যান করা এড়াতে ইনডেক্স করা কার্সর আইডি দিয়ে পেজিনেশন করুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-cache-sabbath',
    tech: 'system-design',
    title: {
      en: 'Caching Strategies & Memory Hierarchy — Cache-Aside, Eviction, and Stampedes',
      bn: 'ক্যাশিং স্ট্র্যাটেজি ও মেমরি হায়ারার্কি: ক্যাশ-অ্যাসাইড ও ইভিকশন'
    }
  },
  exercises: [
    {
      id: 'stor-ex1',
      kind: 'mcq',
      topic: 'b-tree-vs-lsm-write-tradeoff',
      question: {
        en: 'Why do Log-Structured Merge-Tree (LSM-Tree) storage engines achieve significantly higher write throughput than traditional B-Tree engines?',
        bn: 'লগ-স্ট্রাকচার্ড মার্জ-ট্রি (LSM-Tree) স্টোরেজ ইঞ্জিন কেন ঐতিহ্যবাহী B-Tree ইঞ্জিনের চেয়ে বহুগুণ বেশি রাইট থ্রুপুট দিতে পারে?'
      },
      options: [
        {
          en: 'LSM-Trees append all writes sequentially to an in-memory Memtable and disk log, avoiding expensive in-place random disk page overwrites',
          bn: 'LSM-Tree সমস্ত ডেটা মেমরি ও লগে ক্রমানুসারে অ্যাপেন্ড করে, যার ফলে ডিস্কে বারবার বিভিন্ন স্থানে র‍্যান্ডম পেজ ওভাররাইট করার ধীরগতির ঝামেলা থাকে না'
        },
        {
          en: 'LSM-Trees compress all database text into single-letter acronyms',
          bn: 'LSM-Tree ডেটাবেসের সমস্ত লেখাকে এক অক্ষরের শব্দে রূপান্তর করে'
        },
        {
          en: 'Because LSM-Tree engines format server hard drives every morning',
          bn: 'কারণ LSM-Tree ইঞ্জিন প্রতিদিন সকালে হার্ড ড্রাইভ ফরম্যাট করে'
        },
        {
          en: 'B-Trees were outlawed by international database conventions in 2020',
          bn: 'কারণ ২০২০ সালে আন্তর্জাতিক ডেটাবেস সম্মেলনে B-Tree নিষিদ্ধ করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sequential disk writes are orders of magnitude faster than random disk head seeks.',
        bn: 'ডিস্কে ক্রমানুসারে লেখা ডিস্কের বিভিন্ন স্থানে খোঁজার চেয়ে বহুগুণ বেশি দ্রুত।'
      },
      explanation: {
        en: 'LSM-Trees convert random writes into sequential disk appends, deferring sorting to background asynchronous compaction passes.',
        bn: 'LSM-Tree র‍্যান্ডম রাইটকে দ্রুতগতির সিকোয়েনশিয়াল রাইটে বদলে দিয়ে সাজানোর কাজ পরে ব্যাকগ্রাউন্ডে সম্পন্ন করে।'
      }
    },
    {
      id: 'stor-ex2',
      kind: 'mcq',
      topic: 'composite-index-left-prefix-rule',
      question: {
        en: 'If a database table has a composite index on columns (tenant_id, created_at), which of the following queries can effectively utilize this index?',
        bn: 'যদি একটি ডেটাবেস টেবিলে (tenant_id, created_at) কলামের ওপর একটি যৌথ ইনডেক্স থাকে, তবে কোন কোয়েরিটি এই ইনডেক্স ব্যবহার করতে পারবে?'
      },
      options: [
        {
          en: 'A query filtering by WHERE tenant_id = 5, because the B-Tree is sorted starting with the leftmost column of the composite index',
          bn: 'WHERE tenant_id = 5 দিয়ে ফিল্টার করা কোয়েরি, কারণ B-Tree ইনডেক্সটি সবার বামের কলাম দিয়ে সাজানো শুরু হয় (লেফট-প্রিফিক্স নিয়ম)'
        },
        {
          en: 'A query filtering only by WHERE created_at > 2026 without specifying tenant_id',
          bn: 'tenant_id উল্লেখ না করে কেবল WHERE created_at > 2026 দিয়ে ফিল্টার করা কোয়েরি'
        },
        {
          en: 'Only queries written in the C++ programming language',
          bn: 'কেবলমাত্র সি++ ভাষায় লেখা কোয়েরি'
        },
        {
          en: 'Composite indexes can never be used by SQL database engines',
          bn: 'যৌথ ইনডেক্স কখনোই কোনো এসকিউএল ডেটাবেস ব্যবহার করতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Like a phonebook sorted by (Last Name, First Name): you can search by Last Name alone, but not by First Name alone.',
        bn: 'যেমন টেলিফোন ডিরেক্টরি (বংশনাম, নাম) দিয়ে সাজানো থাকলে কেবল বংশনাম দিয়ে খোঁজা যায়, নাম দিয়ে নয়।'
      },
      explanation: {
        en: 'The Left-Prefix Rule mandates that composite index lookups must include leading columns to navigate the sorted B-Tree structure.',
        bn: 'লেফট-প্রিফিক্স নিয়ম অনুযায়ী যৌথ ইনডেক্স ব্যবহার করতে হলে অবশ্যই শুরুর কলামটি কোয়েরির শর্তে থাকতে হয়।'
      }
    },
    {
      id: 'stor-ex3',
      kind: 'mcq',
      topic: 'offset-pagination-performance-penalty',
      question: {
        en: 'What causes query execution time to degrade dramatically when using deep offset pagination (e.g. LIMIT 20 OFFSET 100000)?',
        bn: 'গভীর অফসেট পেজিনেশন (যেমন LIMIT 20 OFFSET 100000) ব্যবহার করলে কেন কোয়েরি চালানোর সময় মারাত্মকভাবে বেড়ে যায়?'
      },
      options: [
        {
          en: 'The database engine must read, parse, and sort all 100020 rows from disk/memory before discarding the first 100000 rows to return only 20',
          bn: 'ডেটাবেস ইঞ্জিনকে ডিস্ক ও মেমরি থেকে পুরো ১০০০২০টি রো পড়ে সাজাতে হয়, তারপর মাত্র ২০টি রো দেখানোর জন্য প্রথম ১০০০০০টি রো ফেলে দিতে হয়'
        },
        {
          en: 'Offset pagination increases server electricity consumption by 500 percent',
          bn: 'অফসেট পেজিনেশনে সার্ভারের বিদ্যুৎ খরচ ৫০০ শতাংশ বেড়ে যায়'
        },
        {
          en: 'Because database hard drives disconnect whenever offset exceeds 10',
          bn: 'কারণ অফসেট ১০ এর বেশি হলে হার্ড ড্রাইভ সংযোগ বিচ্ছিন্ন হয়ে যায়'
        },
        {
          en: 'Offset queries format all database tables automatically',
          bn: 'অফসেট কোয়েরি সব টেবিল নিজে থেকেই ফরম্যাট করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The database must count through every skipped row. Skipping 100000 rows takes real disk and CPU work.',
        bn: 'বাদ দেওয়া প্রতিটা রো ডেটাবেসকে গুনে গুনে পার হতে হয়; ১০০০০০টি রো বাদ দেওয়া ডেটাবেসের প্রচুর প্রসেসর ও মেমরি খরচ করে।'
      },
      explanation: {
        en: 'Offset scans waste significant I/O processing unreturned rows; Keyset (cursor) pagination eliminates wasted scanning by seeking directly via index.',
        bn: 'অফসেট অপ্রয়োজনীয় ডেটা পড়ে সময় নষ্ট করে; কার্সর পদ্ধতি সরাসরি ইনডেক্স ব্যবহার করে সঠিক স্থানে চলে যায়।'
      }
    },
    {
      id: 'stor-ex4',
      kind: 'mcq',
      topic: 'columnar-database-aggregation-advantage',
      question: {
        en: 'Why are Columnar databases (such as ClickHouse or Snowflake) orders of magnitude faster than row-oriented databases for analytical aggregation queries (e.g. SUM or AVERAGE across 100 million rows)?',
        bn: '১০০ মিলিয়ন সারির যোগফল বা গড়ের মতো অ্যানালিটিক্যাল কোয়েরিতে কলামার ডেটাবেস কেন রো-ভিত্তিক ডেটাবেসের চেয়ে হাজার গুণ দ্রুত কাজ করে?'
      },
      options: [
        {
          en: 'Columnar engines read only the specific columns requested by the query from disk, avoiding reading gigabytes of irrelevant column data from other attributes',
          bn: 'কলামার ইঞ্জিন কেবল কোয়েরিতে চাওয়া নির্দিষ্ট কলামের ডেটা ডিস্ক থেকে পড়ে, ফলে অন্যান্য অপ্রয়োজনীয় কলামের গিগাবাইট ডেটা লোড করার দরকার হয় না'
        },
        {
          en: 'Columnar databases run only on supercomputers in space',
          bn: 'কলামার ডেটাবেস কেবল মহাকাশের সুপারকম্পিউটারে চলে'
        },
        {
          en: 'Because row-oriented databases can only store numbers between 1 and 100',
          bn: 'কারণ রো-ভিত্তিক ডেটাবেসে কেবল ১ থেকে ১০০ পর্যন্ত সংখ্যা রাখা যায়'
        },
        {
          en: 'Columnar storage was invented by international copyright organizations',
          bn: 'কারণ আন্তর্জাতিক কপিরাইট সংস্থা কলামার ডেটাবেস তৈরি করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'If a table has 50 columns and you only want to SUM one column, reading all 50 columns wastes 98% of your disk bandwidth.',
        bn: '৫০টি কলামের টেবিলে ১টি কলামের যোগফল চাইলে পুরো ৫০টি কলামের ডেটা লোড করা ডিস্কের ৯৮% ব্যান্ডউইথ নষ্ট করে।'
      },
      explanation: {
        en: 'Columnar layouts achieve high compression and eliminate I/O overhead by fetching strictly the columns required for the calculation.',
        bn: 'কলামার ডিজাইন অপ্রয়োজনীয় কলামের ডেটা পুরোপুরি বাদ দিয়ে কেবল দরকারি কলামটি দ্রুত পড়ে অ্যানালিটিক্স সম্পন্ন করে।'
      }
    }
  ],
  quiz: {
    id: 'storage-ledger-quiz',
    title: {
      en: 'Database Engines, Storage Architecture, and Indexing Quiz',
      bn: 'ডেটাবেস ইঞ্জিন, স্টোরেজ স্থাপত্য ও ইনডেক্সিং কুইজ'
    },
    questions: [
      {
        id: 'slq-q1',
        kind: 'mcq',
        topic: 'secondary-index-write-cost',
        question: {
          en: 'Why do database administrators caution against adding unnecessary secondary indexes to high-volume write tables?',
          bn: 'উচ্চগতির রাইট টেবিলে কেন অপ্রয়োজনীয় সেকেন্ডারি ইনডেক্স যোগ করতে ডেটাবেস অ্যাডমিনিস্ট্রেটররা সতর্ক করেন?'
        },
        options: [
          {
            en: 'Every secondary index introduces write amplification; every INSERT, UPDATE, or DELETE must synchronously modify the table data page plus every separate B-Tree index on disk',
            bn: 'প্রতিটি সেকেন্ডারি ইনডেক্স রাইট অ্যামপ্লিফিকেশন ঘটায়; প্রতিবার নতুন ডেটা লেখার সময় মূল টেবিলের পাশাপাশি প্রতিটি আলাদা B-Tree ইনডেক্সও ডিস্কে আপডেট করতে হয়'
          },
          {
            en: 'Adding more than 2 indexes permanently erases user passwords',
            bn: '২টির বেশি ইনডেক্স যোগ করলে ব্যবহারকারীর পাসওয়ার্ড মুছে যায়'
          },
          {
            en: 'Secondary indexes force all database servers to run on battery power',
            bn: 'সেকেন্ডারি ইনডেক্স সব সার্ভারকে ব্যাটারিতে চলতে বাধ্য করে'
          },
          {
            en: 'Because indexes were declared illegal under international software law in 2024',
            bn: 'কারণ ২০২৪ সালে আন্তর্জাতিক সফটওয়্যার আইনে ইনডেক্স নিষিদ্ধ করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'An index is a copy of data sorted in a different way. Every write must update every copy.',
          bn: 'ইনডেক্স হলো ভিন্নভাবে সাজানো ডেটার অনুলিপি; মূল ডেটা বদলালে প্রতিটি অনুলিপিও আপডেট করতে হয়।'
        },
        explanation: {
          en: 'Secondary indexes accelerate read queries at the direct expense of write latency and storage capacity.',
          bn: 'সেকেন্ডারি ইনডেক্স পড়ার গতি বাড়ালেও লেখার গতি উল্লেখযোগ্যভাবে কমিয়ে দেয়।'
        }
      },
      {
        id: 'slq-q2',
        kind: 'mcq',
        topic: 'replication-lag-read-your-writes',
        question: {
          en: 'In an asynchronous Leader-Follower database architecture, what failure mode can occur when a user creates a new record and immediately refreshes the page?',
          bn: 'অ্যাসিঙ্ক্রোনাস লিডার-ফলোয়ার ডেটাবেসে কোনো ব্যবহারকারী একটি নতুন তথ্য তৈরি করার সাথে সাথেই পেজ রিলোড দিলে কোন সমস্যাটি দেখা দিতে পারে?'
        },
        options: [
          {
            en: 'Replication Lag: The write landed on the Leader, but the subsequent read query routed to a Follower replica that has not yet processed the replication stream, making the new record appear missing',
            bn: 'রেপ্লিকেশন ল্যাগ (Replication Lag): ডেটাটি লিডারে লেখা হলেও পরবর্তী রিড কোয়েরি এমন এক ফলোয়ারে যায় যা এখনো আপডেট পায়নি, ফলে ব্যবহারকারী দেখতে পান তার লেখা তথ্য গায়েব হয়ে গেছে'
          },
          {
            en: 'The database server operating system restarts immediately',
            bn: 'সার্ভারের অপারেটিং সিস্টেম সাথে সাথে রিস্টার্ট নেয়'
          },
          {
            en: 'Because refreshing a web page formats the client hard drive',
            bn: 'কারণ পেজ রিলোড দিলে ক্লায়েন্টের হার্ড ড্রাইভ ফরম্যাট হয়ে যায়'
          },
          {
            en: 'Replication lag causes all network routers to stop working',
            bn: 'রেপ্লিকেশন ল্যাগ সব নেটওয়ার্ক রাউটার বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Leader accepts write. Follower receives update 50 milliseconds later. If you read from Follower in 10ms, you see old data.',
          bn: 'লিডার সাথে সাথে ডেটা পায়, কিন্তু ফলোয়ার পেতে ৫০ মিলিসেকেন্ড দেরি হয়; মাঝের সময়ে ফলোয়ার থেকে পড়লে পুরনো তথ্য দেখা যায়।'
        },
        explanation: {
          en: 'Asynchronous replication introduces eventual consistency delays; solving "read-your-own-writes" requires routing immediate user reads to the Leader.',
          bn: 'অ্যাসিঙ্ক্রোনাস রেপ্লিকেশনে সামান্য বিলম্ব থাকে; ব্যবহারকারীকে নিজের সদ্য লেখা ডেটা দেখাতে সাময়িকভাবে লিডার থেকে পড়তে হয়।'
        }
      },
      {
        id: 'slq-q3',
        kind: 'mcq',
        topic: 'write-ahead-log-crash-recovery',
        question: {
          en: 'What is the primary role of the Write-Ahead Log (WAL) in transactional relational databases like PostgreSQL?',
          bn: 'PostgreSQL-এর মতো লেনদেনমূলক ডেটাবেসে রাইট-অ্যাহেড লগ (WAL)-এর প্রধান ভূমিকা কী?'
        },
        options: [
          {
            en: 'It appends transaction changes sequentially to an append-only disk log BEFORE modifying in-memory data pages, guaranteeing crash durability and atomicity if power fails',
            bn: 'মেমরির ডেটা পেজ বদলানোর আগেই এটি পরিবর্তনের বিবরণ একটি অপরিবর্তনীয় লগ ফাইলে ক্রমানুসারে লিখে রাখে, যাতে বিদ্যুৎ চলে গেলেও সব তথ্য অক্ষত থাকে'
          },
          {
            en: 'WAL translates SQL queries into classical Greek literature',
            bn: 'WAL সমস্ত এসকিউএল কোয়েরিকে গ্রিক সাহিত্যে রূপান্তর করে'
          },
          {
            en: 'It reduces internet connection bandwidth costs to zero dollars',
            bn: 'এটি ইন্টারনেট ব্যান্ডউইথ খরচ শূন্য ডলারে নামিয়ে আনে'
          },
          {
            en: 'The WAL sends an SMS message to users on every database query',
            bn: 'এটি প্রতিটি কোয়েরিতে ব্যবহারকারীর ফোনে এসএমএস পাঠায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Write to the append-only log first for speed and crash recovery, then update memory pages later.',
          bn: 'আগে লগে লিখে নিরাপত্তা নিশ্চিত করা হয়, পরে ধীরেসুস্থে মেমরি ও ডেটা ফাইলে পেজ আপডেট হয়।'
        },
        explanation: {
          en: 'WAL ensures Durability in ACID: upon recovery from a crash, the database replays log entries to restore in-flight committed transactions.',
          bn: 'WAL ক্র্যাশের পর সিস্টেম পুনরুদ্ধারের সময় লগের লেখা পুনরায় চালিয়ে ডেটাবেসের অখণ্ডতা ফিরিয়ে আনে।'
        }
      },
      {
        id: 'slq-q4',
        kind: 'mcq',
        topic: 'covering-index-efficiency',
        question: {
          en: 'In database optimization, what makes a "Covering Index" exceptionally efficient for query performance?',
          bn: 'ডেটাবেস অপ্টিমাইজেশনে একটি "কাভারিং ইনডেক্স" (Covering Index) কেন কোয়েরির গতি নাটকীয়ভাবে বৃদ্ধি করে?'
        },
        options: [
          {
            en: 'The index contains all columns requested by the SELECT and WHERE clauses, allowing the database to return results directly from the index tree without fetching the actual table heap page',
            bn: 'কোয়েরিতে চাওয়া সমস্ত কলাম ইনডেক্সের ভেতরেই উপস্থিত থাকে, যার ফলে ডেটাবেসকে মূল টেবিলের ডিস্ক পেজে হাত না দিয়ে সরাসরি ইনডেক্স থেকেই উত্তর দিয়ে দিতে পারে'
          },
          {
            en: 'Covering indexes eliminate the need for server electricity',
            bn: 'কাভারিং ইনডেক্স ব্যবহারের ফলে সার্ভারে কোনো বিদ্যুৎ খরচ হয় না'
          },
          {
            en: 'Because covering indexes format hard drives to run 10 times faster',
            bn: 'কারণ এটি হার্ড ড্রাইভ ফরম্যাট করে ১০ গুণ গতি দেয়'
          },
          {
            en: 'A covering index compresses all text into zero bytes of binary data',
            bn: 'কাভারিং ইনডেক্স সব টেক্সটকে শূন্য বাইটে সংকুচিত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If the index has the answer, you never need to visit the main table on disk.',
          bn: 'ইনডেক্সের ভেতরেই যদি সব তথ্য থাকে, তবে ডিস্কে মূল টেবিলে আর খোঁজার প্রয়োজন পড়ে না।'
        },
        explanation: {
          en: 'Index-Only Scans avoid costly table heap lookups by satisfying the entire query directly from the B-Tree index pages.',
          bn: 'ইনডেক্স-অনলি স্ক্যান মূল টেবিলের ডিস্ক I/O পুরোপুরি পরিহার করে সরাসরি মেমরি-ইনডেক্স থেকে দ্রুত ফলাফল দেয়।'
        }
      }
    ]
  }
};
