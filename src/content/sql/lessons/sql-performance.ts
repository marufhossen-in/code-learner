import type { Lesson } from '../../../lib/types';

export const sqlPerformanceLesson: Lesson = {
  slug: 'sql-performance',
  tech: 'sql',
  title: {
    en: 'SQL Performance: Indexes, B-Trees, Execution Plans & Query Tuning',
    bn: 'এসকিউএল পারফরম্যান্স: ইনডেক্স, B-Tree, এক্সিকিউশন প্ল্যান ও কুয়েরি টিউনিং'
  },
  summary: {
    en: 'Master database performance engineering across 10 structured topics, from B-Tree indexes to EXPLAIN execution plans. Learn scan hierarchies, composite prefix rules, sargable query design, and join algorithms.',
    bn: 'B-Tree ইনডেক্স থেকে শুরু করে EXPLAIN এক্সিকিউশন প্ল্যান পর্যন্ত 10 টি সুসংগঠিত পয়েন্টে ডাটাবেস পারফরম্যান্স ইঞ্জিনিয়ারিং আয়ত্ত করুন। জানুন স্ক্যান হায়ারার্কি, কম্পোজিট প্রিফিক্স নিয়ম, সার্গেবল কুয়েরি ডিজাইন এবং জয়েন অ্যালগরিদম।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-migration-docket',
    title: { en: 'SQL Views, Subqueries, Migrations & Schema Evolution', bn: 'এসকিউএল ভিউ, সাব-কোয়ারি, মাইগ্রেশন ও স্কিমা বিবর্তন' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Cost of Sequential Scans vs B-Tree Indexes', bn: '১. সিকোয়েন্সিয়াল স্ক্যানের সীমাবদ্ধতা বনাম B-Tree ইনডেক্স' } },
    {
      type: 'para',
      text: {
        en: 'Without an index, finding a row forces the database engine to perform a Sequential Scan (Table Scan). The engine reads every physical disk page from beginning to end (O(N) time complexity). An index acts like an alphabetical book index, enabling targeted logarithmic lookup (O(log N)) in milliseconds.',
        bn: 'ইনডেক্স না থাকলে কোনো তথ্য খুঁজতে ডাটাবেসকে Sequential Scan (বা পুরো টেবিল স্ক্যান) করতে হয়। ইঞ্জিন ডিস্কের প্রথম পেজ থেকে শেষ পেজ পর্যন্ত প্রতিটি রেকর্ড পড়ে দেখে (O(N) সময় লাগে)। আর একটি ইনডেক্স বইয়ের পেছনের সূচিপত্রের মতো কাজ করে, যা চোখের পলকে লগারিদমিক গতিতে (O(log N)) সরাসরি কাঙ্ক্ষিত তথ্য খুঁজে আনে।'
      }
    },
    {
      type: 'visual',
      id: 'database'
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Unindexed search across 10,000,000 customer rows:
-- Forces reading all 10,000,000 rows from disk -> 4500ms latency!
-- SELECT * FROM customers WHERE email = 'target@domain.com';

-- Creating a B-Tree index speeds up search by 1000x:
CREATE INDEX idx_customers_email ON customers(email);

-- Same query now traverses B-Tree root -> branch -> leaf -> 3 page reads (2ms)!
SELECT customer_id, full_name, email 
FROM customers 
WHERE email = 'target@domain.com';

-- Output:
-- 8401 | Nadia Rahman | target@domain.com
-- Result: Latency plummeted from 4500ms (Seq Scan) to 2ms (Index Scan)`,
      caption: {
        en: 'B-Tree indexes reduce search complexity from O(N) linear scans to O(log N) tree descents.',
        bn: 'B-Tree ইনডেক্স অনুসন্ধানের জটিলতা লিনিয়ার স্ক্যান থেকে লগারিদমিক ট্রি ট্রাভার্সালে কমিয়ে আনে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. B-Tree Index Anatomy: Root, Branch, and Leaf Pointers', bn: '২. B-Tree ইনডেক্সের গঠন: রুট, ব্রাঞ্চ ও লিফ পয়েন্টার' } },
    {
      type: 'para',
      text: {
        en: 'A standard SQL index uses a Balanced Tree (B-Tree) structure. The Root page branches into intermediate Branch pages, which terminate at Leaf pages. Leaf pages contain sorted key values paired with physical Tuple Identifiers (TIDs / RowIDs) pointing to table heap storage.',
        bn: 'স্ট্যান্ডার্ড এসকিউএল ইনডেক্স একটি সুষম ট্রি (B-Tree) কাঠামো ব্যবহার করে। রুট (Root) পেজ থেকে তথ্য শাখা-প্রশাখা হয়ে ব্রাঞ্চ পেজে যায় এবং সবশেষে লিফ (Leaf) পেজে শেষ হয়। লিফ পেজগুলোতে ডেটার মানগুলো সুন্দরভাবে সাজানো থাকে এবং তাদের সাথে মূল টেবিলের ফিজিক্যাল মেমোরি পয়েন্টার (Tuple ID বা RowID) যুক্ত থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Visualizing B-Tree Depth 3 Search Traversal:
-- [Root Page: Key 100 - 500 - 1000]
--     |---> Branch Page (100 - 250)
--               |---> Leaf Page [210, 215, 220] -> Pointer to Heap Block 84, Offset 4

SELECT price FROM products WHERE price = 215;

-- Output:
-- 215.00
-- Result: Exact row located via exactly 3 block reads across a 10,000,000-row table`,
      caption: {
        en: 'A 3-level B-Tree indexes tens of millions of records with at most 3 to 4 I/O operations.',
        bn: 'একটি 3 স্তরের B-Tree মাত্র 3 থেকে 4 টি ডিস্ক রিডের মাধ্যমে কোটি কোটি তথ্য পরিচালনা করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Single-Column and UNIQUE Indexes', bn: '৩. একক কলাম ও UNIQUE ইনডেক্স তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'CREATE INDEX creates a secondary lookup index on specified columns. CREATE UNIQUE INDEX additionally enforces that no two rows share identical non-null keys. Unique indexes both guarantee data uniqueness and provide optimal single-row index scan paths.',
        bn: 'CREATE INDEX নির্দিষ্ট কলামে সেকেন্ডারি ইনডেক্স তৈরি করে দ্রুত ডেটা খুঁজতে সাহায্য করে। আর CREATE UNIQUE INDEX একই সাথে নিশ্চিত করে যে টেবিলে কোনো দুটি সারির মান যেন এক না হয়। এটি ডেটার অনন্যতা নিশ্চিত করার পাশাপাশি দ্রুততম সিঙ্গেল-রো ইনডেক্স স্ক্যান সুবিধা দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Standard performance index for filtering
CREATE INDEX idx_orders_status ON orders(order_status);

-- 2. Unique index enforcing business identifier integrity
CREATE UNIQUE INDEX uq_user_passport ON citizen_records(passport_number);

-- Output:
-- CREATE INDEX idx_orders_status completed.
-- CREATE UNIQUE INDEX uq_user_passport completed.
-- Result: Lookups optimized; duplicate passport registrations physically rejected`,
      caption: {
        en: 'Unique indexes double as data integrity constraints and lightning-fast search paths.',
        bn: 'ইউনিক ইনডেক্স একই সাথে তথ্যের নিরাপত্তা রক্ষা করে এবং দ্রুততম সার্চ নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Clustered vs Secondary (Non-Clustered) Indexes', bn: '৪. ক্লাস্টার্ড বনাম সেকেন্ডারি (নন-ক্লাস্টার্ড) ইনডেক্স' } },
    {
      type: 'para',
      text: {
        en: 'A table can have exactly ONE Clustered Index because it dictates the physical on-disk storage order of the actual table rows (in MySQL InnoDB, the Primary Key is always clustered). Secondary (Non-Clustered) Indexes store copies of the indexed columns along with pointers back to the clustered primary key.',
        bn: 'একটি টেবিলে ঠিক একটিমাত্র Clustered Index থাকতে পারে কারণ এটি ডিস্কে টেবিলের আসল ডেটা কীভাবে সাজানো থাকবে তা নির্ধারণ করে (MySQL InnoDB-তে প্রাইমারি কি-ই ক্লাস্টার্ড ইনডেক্স)। আর সেকেন্ডারি (নন-ক্লাস্টার্ড) ইনডেক্স মূল টেবিল থেকে আলাদা থাকে এবং তা প্রাইমারি কি-এর রেফারেন্স ধরে রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Clustered Table Structure (MySQL InnoDB):
-- Primary Key (id) -> Leaf pages ARE the actual table rows!
-- Secondary Index (email) -> Leaf pages contain (email, id)

-- Secondary search performs a "Double Lookup" (Bookmark Lookup):
-- 1. Scan idx_email to find matching 'id'
-- 2. Traverse Clustered Index using 'id' to fetch remaining non-indexed columns!`,
      caption: {
        en: 'Secondary index lookups traverse back to the clustered index to fetch non-indexed columns.',
        bn: 'সেকেন্ডারি ইনডেক্স বাকি কলামগুলো খুঁজে আনতে মূল ক্লাস্টার্ড ইনডেক্সে রি-লুকআপ চালায়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Composite Indexes and the Leftmost Prefix Rule', bn: '৫. কম্পোজিট ইনডেক্স ও লেফটমোস্ট প্রিফিক্স নিয়ম' } },
    {
      type: 'para',
      text: {
        en: 'A composite index spans multiple columns: CREATE INDEX idx_name ON tbl(colA, colB, colC). The structure is sorted hierarchically by colA first, then colB, and finally colC. Under the Leftmost Prefix Rule, the query engine leverages this lookup tree when predicates include (colA), (colA, colB), or the complete tuple. Filtering solely by colB bypasses the leading branch entirely and triggers a table scan.',
        bn: 'একটি কম্পোজিট ইনডেক্স একাধিক কলামজুড়ে তৈরি হয়: CREATE INDEX idx_name ON tbl(colA, colB, colC)। এর গঠনটি ক্রমানুসারে সাজানো থাকে—প্রথমে colA, তারপর colB এবং সবশেষে colC। Leftmost Prefix Rule অনুযায়ী কোয়ারি ইঞ্জিন কেবল তখনই দ্রুত পথ বেছে নিতে পারে যখন ফিল্টারে (colA), (colA, colB) অথবা সম্পূর্ণ তালিকাটি থাকে। কিন্তু শুধু colB দিয়ে খুঁজলে সামনের শাখা বাদ পড়ে যায় এবং পুরো টেবিল স্ক্যান ঘটে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Composite index on (tenant_id, department, status)
CREATE INDEX idx_tenant_dept_stat ON staff_directory(tenant_id, department, status);

-- ✅ USES INDEX: Leftmost prefix (tenant_id) present
SELECT * FROM staff_directory WHERE tenant_id = 12;

-- ✅ USES INDEX: Leading two columns (tenant_id, department) present
SELECT * FROM staff_directory WHERE tenant_id = 12 AND department = 'IT';

-- ❌ CANNOT USE INDEX: Missing leading tenant_id column! (Forces full table scan!)
SELECT * FROM staff_directory WHERE department = 'IT' AND status = 'active';

-- Output:
-- Index effectively leveraged for leftmost-matching prefixes`,
      caption: {
        en: 'The leftmost prefix rule governs composite index usability: leading columns must be queried.',
        bn: 'লেফটমোস্ট প্রিফিক্স নিয়ম অনুসারে ইনডেক্স সচল রাখতে শুরুর কলাম দিয়ে ফিল্টার করতে হয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Reading Execution Plans: EXPLAIN and EXPLAIN ANALYZE', bn: '৬. এক্সিকিউশন প্ল্যান বিশ্লেষণ: EXPLAIN ও EXPLAIN ANALYZE' } },
    {
      type: 'para',
      text: {
        en: 'Never guess why a query is slow; inspect the execution plan! EXPLAIN displays the query planner estimated cost and chosen access path without running the query. EXPLAIN ANALYZE actually executes the query, reporting both estimated metrics and exact actual execution times in milliseconds.',
        bn: 'কোয়ারি কেন ধীরগতির হচ্ছে তা অনুমানের ওপর না ছেড়ে এক্সিকিউশন প্ল্যান দেখুন! EXPLAIN কোয়ারি না চালিয়েই অপ্টিমাইজারের আনুমানিক খরচ ও প্ল্যান দেখায়। আর EXPLAIN ANALYZE সরাসরি কোয়ারিটি চালিয়ে আনুমানিক তথ্যের সাথে সাথে মিলি-সেকেন্ডে বাস্তব সময় ও মেমোরি খরচের নিখুঁত রিপোর্ট দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `EXPLAIN ANALYZE
SELECT order_id, total_amount
FROM orders
WHERE customer_id = 901;

-- Output:
-- Index Scan using idx_orders_customer on orders (cost=0.29..8.30 rows=5 width=16)
--   (actual time=0.042..0.048 rows=5 loops=1)
-- Planning Time: 0.082 ms
-- Execution Time: 0.065 ms
-- Result: Query verified using index scan in under 0.1 milliseconds`,
      caption: {
        en: 'EXPLAIN ANALYZE reveals actual runtime metrics, identifying bottlenecks with empirical precision.',
        bn: 'EXPLAIN ANALYZE কোয়ারির বাস্তব সময় প্রদর্শন করে পারফরম্যান্স বাধা দূর করতে সাহায্য করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Access Path Hierarchy: Index vs Index-Only vs Bitmap Scans', bn: '৭. স্ক্যান হায়ারার্কি: ইনডেক্স, ইনডেক্স-অনলি ও বিটম্যাপ স্ক্যান' } },
    {
      type: 'para',
      text: {
        en: 'Databases use specialized access paths: 1) Index Scan traverses the tree and visits table heap pages; 2) Index-Only Scan (Covering Index) retrieves ALL requested columns directly from the index leaf pages without touching the heap. 3) Bitmap Index Scan gathers matching page locations, sorting disk reads before reading tables.',
        bn: 'ডাটাবেস বিভিন্ন ধরনের স্ক্যান ব্যবহার করে: 1) Index Scan ইনডেক্স খুঁজে মূল টেবিল থেকে ডেটা আনে; 2) Index-Only Scan (Covering Index) মূল টেবিল স্পর্শ না করে সরাসরি ইনডেক্স পেজ থেকেই সব তথ্য দিয়ে দেয়। 3) Bitmap Index Scan ডিস্কের এলোমেলো রিড কমাতে পেজগুলোকে সিরিয়াল করে সাজিয়ে নিয়ে টেবিলে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Creating a Covering Index:
CREATE INDEX idx_user_cover ON users(email, first_name, last_name);

-- Index-Only Scan: All requested columns (email, first_name) live inside the index!
-- Heap table pages are never accessed! (Fastest possible relational query path!)
EXPLAIN ANALYZE
SELECT email, first_name FROM users WHERE email = 'nadia@corp.com';

-- Output:
-- Index Only Scan using idx_user_cover on users (cost=0.28..4.29 rows=1)
-- Heap Fetches: 0 (Zero table heap disk reads!)
-- Result: Pure index retrieval achieving maximum possible throughput`,
      caption: {
        en: 'Covering indexes satisfy queries entirely within leaf pages, bypassing table heap I/O.',
        bn: 'কাভারিং ইনডেক্স মূল টেবিল স্পর্শ না করেই সরাসরি ইনডেক্স থেকে শতভাগ ডেটা সরবরাহ করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Sargability: Writing Index-Friendly Query Predicates', bn: '৮. সার্গেবিলিটি (Sargability): ইনডেক্স-বান্ধব শর্ত লেখার নিয়ম' } },
    {
      type: 'para',
      text: {
        en: 'A query predicate is Sargable (Search Argument Able) when the database engine can directly exploit an index. Wrapping an indexed column inside a function (e.g. WHERE UPPER(name) = "ALICE" or WHERE YEAR(created_at) = 2026) invalidates the index, forcing a disastrous full table scan! Write predicates that leave the column bare.',
        bn: 'একটি শর্তকে তখন Sargable বলা হয় যখন ডাটাবেস সরাসরি তার ওপর ইনডেক্স চালাতে পারে। ইনডেক্স করা কলামকে কোনো ফাংশনের ভেতর মুড়ে ফেললে (যেমন WHERE YEAR(date) = 2026 বা WHERE UPPER(name) = "ALICE") ইনডেক্স অকেজো হয়ে যায় এবং পুরো টেবিল স্ক্যান হতে বাধ্য হয়! সর্বদা কলামটিকে মুক্ত রেখে শর্ত লিখুন।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- ❌ NON-SARGABLE ANTI-PATTERN: Function wraps indexed column (Index DISABLED!)
-- SELECT * FROM invoices WHERE YEAR(issued_date) = 2026;

-- ✅ SARGABLE REWRITE: Column is bare; range predicate exploits index fully!
SELECT invoice_id, amount
FROM invoices
WHERE issued_date >= '2026-01-01' AND issued_date < '2027-01-01';

-- ❌ NON-SARGABLE: Leading wildcard disables index
-- SELECT * FROM users WHERE username LIKE '%admin';

-- ✅ SARGABLE: Trailing wildcard utilizes B-Tree prefix matching
SELECT * FROM users WHERE username LIKE 'admin%';

-- Output:
-- Both rewritten queries utilize index range scans successfully`,
      caption: {
        en: 'Keep indexed columns bare in WHERE clauses to preserve index scan eligibility.',
        bn: 'ইনডেক্সের পূর্ণ সুবিধা পেতে WHERE ক্লজে কলামকে কোনো ফাংশন দিয়ে মোড়াবেন না।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Relational Join Algorithms: Nested Loop, Hash & Merge', bn: '৯. রিলেশনাল জয়েন অ্যালগরিদম: Nested Loop, Hash ও Merge Join' } },
    {
      type: 'para',
      text: {
        en: 'Query planners choose from three physical algorithms to join tables: 1) Nested Loop Join: Loops through outer rows, probing the inner table via index (optimal for small sets). 2) Hash Join: Builds an in-memory hash table on the smaller table, scanning the larger table (optimal for unsorted large sets). 3) Merge Join: Zips two pre-sorted relations simultaneously.',
        bn: 'ডাটাবেস টেবিল জোড়া লাগাতে 3 টি মূল অ্যালগরিদমের সাহায্য নেয়: 1) Nested Loop Join: প্রথম টেবিলের প্রতিটি সারির জন্য ইনডেক্স দিয়ে দ্বিতীয় টেবিল খোঁজে (ছোট ডেটার জন্য সেরা)। 2) Hash Join: ছোট টেবিল দিয়ে মেমোরিতে একটি হ্যাশ টেবিল বানিয়ে বড় টেবিলটি স্ক্যান করে। 3) Merge Join: দুটি পূর্ব-সাজানো (Sorted) টেবিলকে জিপারের মতো একসাথে মেলায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Small set with index: Optimizer chooses Nested Loop
-- Nested Loop (cost=0.57..18.40 rows=2)

-- 2. Massive multi-million row analytics query: Optimizer chooses Hash Join
-- Hash Join (cost=450.00..12500.00 rows=50000)
--   Hash Cond: (orders.customer_id = customers.id)
--   -> Seq Scan on orders
--   -> Hash
--        -> Seq Scan on customers

-- Output:
-- Planner dynamically switches join mechanics based on table statistics`,
      caption: {
        en: 'Query planners dynamically select join algorithms based on data volume and available indexes.',
        bn: 'কোয়ারি অপ্টিমাইজার ডেটার পরিমাণ ও ইনডেক্স দেখে স্বয়ংক্রিয়ভাবে সেরা জয়েন অ্যালগরিদম বাছে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Database Statistics and Maintenance: ANALYZE and VACUUM', bn: '১০. ডাটাবেস স্ট্যাটিসটিক্স ও রক্ষণাবেক্ষণ: ANALYZE ও VACUUM' } },
    {
      type: 'para',
      text: {
        en: 'The cost-based optimizer relies on data distribution statistics (histograms, distinct counts) to choose optimal plans. The ANALYZE command refreshes these distribution metrics. In MVCC databases like PostgreSQL, the VACUUM command reclaims space occupied by dead updated rows and prevents transaction ID wraparound.',
        bn: 'কস্ট-বেসড অপ্টিমাইজার সঠিক প্ল্যান তৈরি করতে টেবিল স্ট্যাটিসটিক্স (হিস্টোগ্রাম ও ইউনিক মানের হিসাব)-এর ওপর নির্ভর করে। ANALYZE কমান্ড এই পরিসংখ্যান আপডেট করে। আর PostgreSQL-এর মতো সিস্টেমে VACUUM কমান্ড আপডেট হওয়া মৃত ডেটা মুছে ডিস্কের জায়গা খালি করে এবং ডাটাবেস সুস্থ রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Update distribution statistics across the database
ANALYZE customer_transactions;

-- 2. Reclaim dead tuple pages and defragment indexes (PostgreSQL syntax)
VACUUM ANALYZE customer_transactions;

-- 3. Rebuild bloated indexes (PostgreSQL / MySQL)
REINDEX TABLE customer_transactions;

-- Output:
-- ANALYZE customer_transactions completed in 0.45s.
-- VACUUM reclaimed 120 dead tuple pages.
-- Result: Optimizer cost calculations restored to 100% precision`,
      caption: {
        en: 'Regular statistics updates prevent query planners from choosing outdated, suboptimal plans.',
        bn: 'নিয়মিত স্ট্যাটিসটিক্স আপডেট অপ্টিমাইজারকে ভুল সিদ্ধান্ত নেওয়া থেকে বিরত রাখে।'
      }
    }
  ],
  exercises: [
    {
      id: 'sql-perf-ex1',
      kind: 'predict',
      topic: 'sql: Leftmost prefix rule usability',
      question: {
        en: 'If a composite index is created on (country, city, zip), can a query filtering ONLY on WHERE city = "Dhaka" exploit this index directly?',
        bn: 'যদি (country, city, zip)-এর ওপর কম্পোজিট ইনডেক্স থাকে, তবে কেবল WHERE city = "Dhaka" দিয়ে ফিল্টার করলে কি এই ইনডেক্স সরাসরি কাজ করবে?'
      },
      code: `/* SQL composite index leftmost prefix test */
/* CREATE INDEX idx ON tbl(country, city, zip); SELECT * FROM tbl WHERE city = 'Dhaka' */`,
      answer: 'no',
      accept: ['no', 'false', 'No', 'cannot'],
      hint: {
        en: 'The leftmost leading column (country) is omitted.',
        bn: 'শুরুর প্রধান কলাম (country) বাদ পড়েছে।'
      },
      explanation: {
        en: 'Under the Leftmost Prefix Rule, a composite index can only be used if queries filter on the leading columns (e.g. country, or country + city). Filtering by city alone skips the root sorting order.',
        bn: 'লেফটমোস্ট প্রিফিক্স নিয়ম অনুসারে কম্পোজিট ইনডেক্স কাজ করতে হলে অবশ্যই প্রথম কলাম (country) থাকতে হয়। প্রথম কলাম ছাড়া সরাসরি দ্বিতীয় কলাম দিয়ে ফিল্টার করলে ইনডেক্স কাজ করে না।'
      }
    },
    {
      id: 'sql-perf-ex2',
      kind: 'mcq',
      topic: 'sql: Covering index definition',
      question: {
        en: 'What is an "Index-Only Scan" (Covering Index)?',
        bn: '"Index-Only Scan" বা কাভারিং ইনডেক্স বলতে কী বোঝায়?'
      },
      options: [
        { en: 'A query where all requested columns reside directly in the index leaf pages, avoiding any reads from the table heap', bn: 'এমন একটি কোয়ারি যেখানে চাওয়া সব কলাম সরাসরি ইনডেক্স লিফ পেজেই উপস্থিত থাকে, ফলে মূল টেবিলে কোনো রিড করার দরকারই হয় না' },
        { en: 'An index that covers only the primary key', bn: 'শুধু প্রাইমারি কি কাভার করা ইনডেক্স' },
        { en: 'An index that deletes duplicate rows', bn: 'ডুপ্লিকেট মোছা ইনডেক্স' },
        { en: 'An index with no disk storage', bn: 'ডিস্ক ছাড়া ইনডেক্স' }
      ],
      answer: 0,
      hint: {
        en: 'Zero table heap disk fetches needed.',
        bn: 'মূল টেবিল থেকে কোনো ডেটা আনার প্রয়োজন হয় না।'
      },
      explanation: {
        en: 'A covering index contains all columns requested by the SELECT, WHERE, and ORDER BY clauses, allowing the database to satisfy the query entirely from the index without touching table heap pages.',
        bn: 'কাভারিং ইনডেক্সে কুয়েরির প্রয়োজনীয় সব কলাম আগে থেকেই জমা থাকে, যার ফলে মূল টেবিল স্পর্শ না করেই সরাসরি ইনডেক্স থেকে শতভাগ দ্রুত গতিতে ফলাফল প্রদান করা যায়।'
      }
    },
    {
      id: 'sql-perf-ex3',
      kind: 'mcq',
      topic: 'sql: Sargable query definition',
      question: {
        en: 'Why is WHERE YEAR(created_at) = 2026 non-sargable compared to WHERE created_at >= "2026-01-01" AND created_at < "2027-01-01"?',
        bn: 'WHERE YEAR(created_at) = 2026 কেন WHERE created_at >= "2026-01-01" AND created_at < "2027-01-01" রেঞ্জ ফিল্টারের চেয়ে খারাপ ও নন-সার্গেবল?'
      },
      options: [
        { en: 'Wrapping the column in a function prevents the database from using the index, forcing a full table scan', bn: 'কলামটিকে ফাংশন দিয়ে মোড়ার কারণে ডাটাবেস ইনডেক্স ব্যবহার করতে পারে না এবং পুরো টেবিল স্ক্যান করতে বাধ্য হয়' },
        { en: 'YEAR() is an invalid SQL keyword', bn: 'YEAR() অবৈধ কিওয়ার্ড' },
        { en: 'Dates cannot be indexed', bn: 'তারিখ ইনডেক্স করা যায় না' },
        { en: 'Range queries are slower than functions', bn: 'রেঞ্জ কোয়ারি ফাংশনের চেয়ে ধীর' }
      ],
      answer: 0,
      hint: {
        en: 'Functions wrap columns and blind the B-Tree index.',
        bn: 'ফাংশন কলামের ইনডেক্স ব্যবহারের ক্ষমতা অন্ধ করে দেয়।'
      },
      explanation: {
        en: 'Applying functions to indexed columns forces the engine to evaluate the function for every single row in the table, completely blinding the B-Tree index.',
        bn: 'ইনডেক্স থাকা কলামের ওপর কোনো ফাংশন চালালে ডাটাবেস বাধ্য হয়ে প্রতি সারির জন্য ফাংশনটি হিসাব করে, ফলে B-Tree ইনডেক্স পুরোপুরি অকেজো হয়ে পড়ে।'
      }
    }
  ],
  quiz: {
    id: 'sql-performance-quiz',
    title: { en: 'SQL Indexing & Query Tuning Quiz', bn: 'এসকিউএল ইনডেক্সিং ও কুয়েরি টিউনিং কুইজ' },
    questions: [
      {
        id: 'pq1',
        kind: 'mcq',
        topic: 'sql: EXPLAIN vs EXPLAIN ANALYZE',
        question: {
          en: 'What is the crucial difference between EXPLAIN and EXPLAIN ANALYZE?',
          bn: 'EXPLAIN এবং EXPLAIN ANALYZE-এর মধ্যে প্রধান কার্যকর পার্থক্য কী?'
        },
        options: [
          { en: 'EXPLAIN provides planner estimates without executing; EXPLAIN ANALYZE executes the query to measure actual runtime and row counts', bn: 'EXPLAIN না চালিয়েই আনুমানিক হিসাব দেয়; আর EXPLAIN ANALYZE সরাসরি কোয়ারিটি চালিয়ে বাস্তব সময় ও সারির সংখ্যা পরিমাপ করে' },
          { en: 'EXPLAIN is only for MySQL; EXPLAIN ANALYZE is for SQLite', bn: 'EXPLAIN শুধু MySQL-এর জন্য' },
          { en: 'EXPLAIN deletes indexes', bn: 'EXPLAIN ইনডেক্স মুছে দেয়' },
          { en: 'There is no difference', bn: 'কোনো পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: 'One estimates; the other actually executes.',
          bn: 'একটি অনুমান করে; অন্যটি বাস্তবায়ন করে।'
        },
        explanation: {
          en: 'EXPLAIN produces the query plan with estimated costs. EXPLAIN ANALYZE actually executes the query to report empirical execution time in milliseconds.',
          bn: 'EXPLAIN কেবল আনুমানিক খরচের প্ল্যান দেখায়। আর EXPLAIN ANALYZE বাস্তবে কোয়ারিটি নির্বাহ করে মিলি-সেকেন্ডে নিখুঁত সময় রিপোর্ট করে।'
        }
      },
      {
        id: 'pq2',
        kind: 'mcq',
        topic: 'sql: Clustered index limit',
        question: {
          en: 'How many Clustered Indexes can a single relational database table possess?',
          bn: 'একটি রিলেশনাল ডাটাবেস টেবিলে সর্বোচ্চ কতটি Clustered Index থাকতে পারে?'
        },
        options: [
          { en: 'Exactly 1 (because physical table rows can only be ordered on disk in one sequence)', bn: 'ঠিক 1 টি (কারণ ডিস্কে মূল ডেটা কেবল একটিমাত্র ক্রমেই সাজিয়ে রাখা সম্ভব)' },
          { en: 'Up to 16', bn: 'সর্বোচ্চ 16 টি' },
          { en: 'Unlimited', bn: 'অসীম' },
          { en: 'One per column', bn: 'প্রতি কলামে একটি' }
        ],
        answer: 0,
        hint: {
          en: 'Data rows can only have one physical sorted sequence on disk.',
          bn: 'ডিস্কে ডেটা শুধু একটি নির্দিষ্ট ক্রমেই সাজানো থাকতে পারে।'
        },
        explanation: {
          en: 'Because a clustered index determines the physical storage layout of the table rows on disk, a table can only have one clustered index.',
          bn: 'যেহেতু ক্লাস্টার্ড ইনডেক্স ডিস্কে ডেটার আসল বিন্যাস ঠিক করে দেয়, তাই একটি টেবিলে কেবল একটিমাত্র ক্লাস্টার্ড ইনডেক্স থাকা সম্ভব।'
        }
      },
      {
        id: 'pq3',
        kind: 'mcq',
        topic: 'sql: Index-Only scan benefits',
        question: {
          en: 'What occurs during an "Index-Only Scan" (Covering Index)?',
          bn: '"Index-Only Scan" (কভারিং ইনডেক্স) চলাকালীন ঠিক কী ঘটে?'
        },
        options: [
          { en: 'The database fulfills the entire query directly from index leaf pages without accessing heap table storage', bn: 'ডাটাবেস মূল টেবিল স্টোরেজ স্পর্শ না করে সরাসরি ইনডেক্স পাতা থেকেই সম্পূর্ণ কোয়ারির ফলাফল দিয়ে দেয়' },
          { en: 'The query only reads the first column', bn: 'কোয়ারিটি কেবল প্রথম কলামটি পড়ে' },
          { en: 'The index is rebuilt during the scan', bn: 'স্ক্যানের সময় ইনডেক্স পুনর্নির্মাণ হয়' },
          { en: 'It triggers a full table locks', bn: 'এটি পুরো টেবিলে লক প্রয়োগ করে' }
        ],
        answer: 0,
        hint: {
          en: 'All requested columns exist within the index itself.',
          bn: 'অনুরোধ করা সকল কলাম ইনডেক্সের ভেতরেই উপস্থিত থাকে।'
        },
        explanation: {
          en: 'When all columns in SELECT and WHERE clauses are present in the index key and include lists, the engine never needs to visit table heap pages, resulting in maximal I/O efficiency.',
          bn: 'SELECT ও WHERE-এর সকল কলাম যখন ইনডেক্সের ভেতরেই থাকে, তখন ইঞ্জিনকে মূল টেবিলে যেতে হয় না, ফলে ডিস্ক রিড সর্বনিম্ন হয়।'
        }
      },
      {
        id: 'pq4',
        kind: 'mcq',
        topic: 'sql: Sargability and functions',
        question: {
          en: 'Why is wrapping an indexed column in a function (e.g. WHERE UPPER(name) = "ALICE") an anti-pattern?',
          bn: 'ইনডেক্স করা কলামকে কোনো ফাংশন দিয়ে মোড়ানো (যেমন WHERE UPPER(name) = "ALICE") কেন একটি ক্ষতিকর অ্যান্টি-প্যাটার্ন?'
        },
        options: [
          { en: 'It makes the predicate non-sargable, blinding the optimizer and forcing a full sequential scan across all rows', bn: 'এটি শর্তটিকে নন-সার্গেবল বানিয়ে অপ্টিমাইজারকে অকার্যকর করে দেয় এবং সব সারিতে ফুল স্ক্যান করতে বাধ্য করে' },
          { en: 'It causes database deadlock', bn: 'এটি ডাটাবেস ডেডলক ঘটায়' },
          { en: 'Upper case letters cannot be indexed', bn: 'বড় হাতের অক্ষর ইনডেক্স করা যায় না' },
          { en: 'It drops the index from disk', bn: 'এটি ডিস্ক থেকে ইনডেক্স মুছে ফেলে' }
        ],
        answer: 0,
        hint: {
          en: 'The B-Tree is sorted on the raw value, not the computed function.',
          bn: 'B-Tree মূল মানের ওপর সাজানো থাকে, হিসাব করা ফাংশনের ফলের ওপর নয়।'
        },
        explanation: {
          en: 'B-Trees store raw unmanipulated column values. Applying a function means the engine cannot use tree traversal without an expression index, forcing it to compute the function across every single row.',
          bn: 'B-Tree কলামের আদি মানের ওপর সাজানো থাকে। কোনো ফাংশন যুক্ত করলে এক্সপ্রেশন ইনডেক্স ছাড়া ইঞ্জিন গাছ বেয়ে খুঁজতে পারে না এবং প্রতি সারির ওপর ফাংশন চালাতে বাধ্য হয়।'
        }
      }
    ]
  }
};
