import type { Lesson } from '../../../lib/types';

export const ThePostgresReleaseLesson: Lesson = {
  slug: 'the-postgres-release',
  tech: 'postgresql',
  title: {
    en: 'PostgreSQL in Production: Tuning, Indexing & EXPLAIN',
    bn: 'প্রোডাকশনে PostgreSQL: টিউনিং, ইনডেক্সিং ও EXPLAIN'
  },
  summary: {
    en: 'Master PostgreSQL enterprise performance optimization, execution planning, and storage engine tuning across 10 structured topics. Dissect query execution trees using EXPLAIN (ANALYZE, BUFFERS). Select optimal index architectures comparing B-Tree, BRIN, GIN, and GiST. Trace Multi-Version Concurrency Control (MVCC) dead tuples and table bloat. Tune Autovacuum thresholds to prevent 32-bit transaction ID wraparound disasters. Size core memory parameters including shared_buffers, work_mem, and connection pools. Build automated slow-query diagnostics in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে PostgreSQL এন্টারপ্রাইজ পারফরম্যান্স অপ্টিমাইজেশন, কুয়েরি এক্সিকিউশন প্ল্যানিং এবং স্টোরেজ ইঞ্জিন টিউনিং আয়ত্ত করুন। EXPLAIN (ANALYZE, BUFFERS) দিয়ে কুয়েরি বিশ্লেষণ করুন। বি-ট্রি, ব্রিন, GIN এবং GiST ইনডেক্সের মধ্যে সঠিক ইনডেক্স বেছে নিন। MVCC ডেড টাপল ও টেবিল ব্লোটের প্রভাব ট্র্যাক করুন। ৩২-বিট ট্রানজ্যাকশন আইডি মোড়কীকরণ বিপর্যয় এড়াতে অটোভ্যাকুয়াম টিউন করুন। shared_buffers, work_mem এবং কানেকশন পুল মেমরি সঠিকভাবে নির্ধারণ করুন। Node.js-এ স্বয়ংক্রিয় ধীরগতির কুয়েরি ডায়াগনস্টিক সার্ভিস তৈরি করুন।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Cost-Based Optimizer (CBO): How PostgreSQL Plans', bn: '১. কস্ট-বেসড অপ্টিমাইজার (CBO): PostgreSQL কীভাবে প্ল্যান করে' } },
    {
      type: 'para',
      text: {
        en: 'When a client submits an SQL query, PostgreSQL does not execute it blindly. The Cost-Based Optimizer evaluates multiple alternative execution paths (Index Scans, Sequential Scans, Hash Joins) and assigns an estimated computational cost to each path. It leverages table data statistics collected automatically by the ANALYZE daemon inside internal catalog tables to select the cheapest plan.',
        bn: 'যখন কোনো ক্লায়েন্ট এসকিউএল কুয়েরি পাঠায়, তখন PostgreSQL তা সরাসরি চালায় না। এর কস্ট-বেসড অপ্টিমাইজার বিভিন্ন সম্ভাব্য এক্সিকিউশন পথ (ইনডেক্স স্ক্যান, টেবিল স্ক্যান, হ্যাশ জয়েন) মূল্যায়ন করে এবং প্রতিটি পথের আনুমানিক খরচ নির্ধারণ করে। এটি অভ্যন্তরীণ ক্যাটালগে থাকা ডেটার পরিসংখ্যানের ওপর ভিত্তি করে সবচেয়ে দ্রুততম পথটি নির্বাচন করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Force PostgreSQL to refresh table statistics manually:
ANALYZE VERBOSE orders;

-- Inspect column distribution statistics used by planner:
SELECT tablename, attname, null_frac, n_distinct, most_common_vals
FROM pg_stats
WHERE tablename = 'orders' AND attname = 'customer_id';`,
      caption: {
        en: 'Accurate statistics in pg_stats ensure the optimizer chooses index scans over table scans.',
        bn: 'pg_stats টেবিলের সঠিক পরিসংখ্যান অপ্টিমাইজারকে দ্রুততম ইনডেক্স নির্বাচন করতে সাহায্য করে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Query Plan Nodes & Buffer Cache Flow (EXPLAIN ANALYZE)', bn: 'কুয়েরি প্ল্যান নোড ও বাফার ক্যাশ প্রবাহ (EXPLAIN ANALYZE)' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="PostgreSQL EXPLAIN ANALYZE Execution Pipeline">
<g transform="translate(20, 20)">
<rect x="0" y="20" width="160" height="90" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="80" y="45" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">EXPLAIN (BUFFERS)</text>
<text x="80" y="70" font-size="9" fill="#cbd5e1" text-anchor="middle">Index Cond: id = 1042</text>
<text x="80" y="90" font-size="9" fill="#4ade80" text-anchor="middle">Shared Hit: 3 blocks</text>

<path d="M165,65 L225,65" stroke="#38bdf8" stroke-width="2"/>

<rect x="230" y="10" width="220" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="340" y="35" font-size="10" font-weight="700" fill="#4ade80" text-anchor="middle">Bitmap Index Scan</text>
<text x="340" y="58" font-size="9" fill="#cbd5e1" text-anchor="middle">Scans B-Tree Index in RAM</text>
<rect x="245" y="72" width="190" height="30" rx="4" fill="#0f172a" stroke="#10b981"/>
<text x="340" y="92" font-size="8" fill="#fbbf24" text-anchor="middle">Creates In-Memory Page Bitmap</text>

<path d="M455,65 L515,65" stroke="#10b981" stroke-width="2"/>

<rect x="520" y="20" width="140" height="90" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
<text x="590" y="45" font-size="10" font-weight="700" fill="#4ade80" text-anchor="middle">Bitmap Heap Scan</text>
<text x="590" y="70" font-size="8" fill="#cbd5e1" text-anchor="middle">Reads Target 8 KB Pages</text>
<text x="590" y="90" font-size="8" fill="#38bdf8" text-anchor="middle">Time: 0.12 ms</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Deciphering Query Plans: EXPLAIN (ANALYZE, BUFFERS)', bn: '২. কুয়েরি প্ল্যান বোঝা: EXPLAIN (ANALYZE, BUFFERS)' } },
    {
      type: 'para',
      text: {
        en: 'Standard EXPLAIN shows only theoretical estimates. Running EXPLAIN (ANALYZE, BUFFERS) actually executes the query, outputting real execution times and physical I/O metrics. It reveals shared hit (pages found in RAM), shared read (pages read from physical disk), and highlights whether the query executed an efficient Index Scan or a catastrophic Sequential Scan across millions of rows.',
        bn: 'সাধারণ EXPLAIN শুধুমাত্র তাত্ত্বিক অনুমান প্রদর্শন করে। কিন্তু EXPLAIN (ANALYZE, BUFFERS) কুয়েরিটি সরাসরি চালিয়ে প্রকৃত সময় এবং ডিস্ক ইনপুট/আউটপুটের তথ্য দেখায়। এটি shared hit (মেমরিতে পাওয়া পেজ) এবং shared read (ডিস্ক থেকে পড়া পেজ) আলাদা করে দেখায়, যা কুয়েরিতে দক্ষ ইনডেক্স স্ক্যান হয়েছে নাকি মারাত্মক ধীরগতির ফুল টেবিল স্ক্যান হয়েছে তা তাৎক্ষণিকভাবে প্রকাশ করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- The gold standard performance diagnostic query:
EXPLAIN (ANALYZE, BUFFERS, TIMING, FORMAT TEXT)
SELECT * FROM orders WHERE customer_id = 1042 AND total_amount > 500.00;

-- Sample Output:
-- Bitmap Heap Scan on orders (cost=4.32..15.65 rows=3 width=48) (actual time=0.045..0.052 rows=2 loops=1)
--   Buffers: shared hit=4 read=0
--   ->  Bitmap Index Scan on idx_orders_customer_id (cost=0.00..4.32 rows=8 width=0) (actual time=0.021..0.021 rows=2 loops=1)
--         Index Cond: (customer_id = 1042)
-- Planning Time: 0.142 ms
-- Execution Time: 0.088 ms`,
      caption: {
        en: 'Buffers: shared hit=4 read=0 confirms that data blocks were fetched entirely from RAM.',
        bn: 'shared hit=4 read=0 প্রমাণ করে সম্পূর্ণ ডেটা সরাসরি মেমরি থেকে পড়া হয়েছে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Index Architectures: B-Tree, BRIN, GIN & GiST', bn: '৩. ইনডেক্স আর্কিটেকচার: বি-ট্রি, ব্রিন, GIN ও GiST' } },
    {
      type: 'para',
      text: {
        en: 'Selecting the correct index structure prevents database disk bloat. Standard B-Tree indexes handle exact equality and sorted range queries. Block Range Indexes (BRIN) summarize ranges across contiguous 8 KB blocks: on millions of append-only time-series rows, a BRIN index consumes 100 times less disk space than a B-Tree while providing identical search speed.',
        bn: 'সঠিক ইনডেক্স নির্বাচন ডিস্কের মেমরি অপচয় রোধ করে। সাধারণ বি-ট্রি ইনডেক্স সাধারণ সমতা এবং সর্টিং রেঞ্জের জন্য সেরা। ব্লক রেঞ্জ ইনডেক্স (BRIN) ধারাবাহিক ৮ কিলোবাইট ব্লকের সারসংক্ষেপ সংরক্ষণ করে: লাখ লাখ টাইম-সিরিজ ডেটায় একটি BRIN ইনডেক্স সাধারণ বি-ট্রির চেয়ে ১০০ গুণ কম জায়গা নেয় এবং সমান গতি প্রদান করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Standard B-Tree for unique lookups:
CREATE INDEX idx_users_email ON users (email);

-- 2. Massive time-series table using ultra-compact BRIN index:
CREATE TABLE sensor_telemetry (
  recorded_at TIMESTAMPTZ NOT NULL,
  sensor_id INT NOT NULL,
  temperature NUMERIC(5, 2) NOT NULL
);

-- BRIN index is 100x smaller because data is naturally sorted on disk by time!
CREATE INDEX idx_telemetry_time ON sensor_telemetry USING BRIN (recorded_at);`,
      caption: {
        en: 'BRIN indexes provide massive disk savings for naturally sorted append-only data.',
        bn: 'BRIN ইনডেক্স সময়ানুসারে সাজানো ডেটার জন্য বিশাল ডিস্ক স্পেস সাশ্রয় করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. MVCC Mechanics: Dead Tuples and Table Bloat', bn: '৪. MVCC মেকানিজম: ডেড টাপল ও টেবিল ব্লোট' } },
    {
      type: 'para',
      text: {
        en: 'To allow readers to query tables without locking writers, PostgreSQL uses Multi-Version Concurrency Control (MVCC). When an UPDATE occurs, PostgreSQL does not modify the row in-place; it marks the old row as dead by setting its xmax transaction ID, and appends an entirely new row version into the page. If dead rows are not purged, tables suffer massive bloat, slowing all queries.',
        bn: 'রিডারদের কোনো লক না করেই কাজ করতে দিতে PostgreSQL মাল্টি-ভার্সন কনকারেন্সি কন্ট্রোল (MVCC) ব্যবহার করে। কোনো রো UPDATE করলে আগের রো-টি সাথে সাথে মোছা হয় না; বরং xmax সেট করে সেটিকে ডেড রো চিহ্নিত করা হয় এবং নতুন রো যোগ করা হয়। এই ডেড রোগুলো নিয়মিত পরিষ্কার না করলে টেবিল ফুলেফেঁপে ওঠে এবং কুয়েরি মারাত্মক ধীরগতির হয়ে পড়ে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Inspect table bloat and dead row counts:
SELECT
  relname AS table_name,
  n_live_tup AS active_rows,
  n_dead_tup AS dead_rows,
  ROUND((n_dead_tup::numeric / NULLIF(n_live_tup + n_dead_tup, 0)) * 100, 2) AS dead_percentage,
  last_autovacuum
FROM pg_stat_user_tables
ORDER BY n_dead_tup DESC;`,
      caption: {
        en: 'Monitoring n_dead_tup reveals whether autovacuum is keeping pace with table updates.',
        bn: 'n_dead_tup দেখে বোঝা যায় অটোভ্যাকুয়াম সময়মতো ডেড রো পরিষ্কার করতে পারছে কিনা।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Vacuuming Strategies: VACUUM vs VACUUM FULL vs pg_repack', bn: '৫. ভ্যাকুয়াম কৌশল: VACUUM বনাম VACUUM FULL বনাম pg_repack' } },
    {
      type: 'para',
      text: {
        en: 'Standard VACUUM scans table pages, marks dead tuple space as reusable for future INSERTs, and updates visibility maps without locking the table. VACUUM FULL physically rewrites the entire table into a new file on disk, returning unused space to the operating system, but acquires an exclusive ACCESS EXCLUSIVE lock that freezes production. Tools like pg_repack rebuild bloated tables online without locking.',
        bn: 'সাধারণ VACUUM টেবিল লক না করেই ডেড রোগুলো খালি করে পরবর্তী ব্যবহারের উপযোগী করে তোলে। অন্যদিকে VACUUM FULL সম্পূর্ণ টেবিল নতুন ফাইলে পুনরায় লিখে ডিস্ক খালি করে, তবে এটি পুরো টেবিলে এক্সক্লুসিভ লক বসিয়ে প্রোডাকশন সাময়িক ফ্রিজ করে দেয়। pg_repack-এর মতো টুল কোনো লক ছাড়াই ব্যাকগ্রাউন্ডে অনলাইন পদ্ধতিতে টেবিল ব্লোট ঠিক করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Standard non-blocking routine vacuum (Safe for production):
VACUUM (ANALYZE) orders;

-- 2. Danger: VACUUM FULL acquires exclusive table lock!
-- VACUUM FULL orders; (NEVER run in high-traffic production!)

-- 3. Industry best practice: Online zero-downtime compaction via CLI:
-- pg_repack -d postgres -t orders --no-kill-backend`,
      caption: {
        en: 'Standard VACUUM is safe online, whereas VACUUM FULL locks tables completely.',
        bn: 'সাধারণ VACUUM নিরাপদে চলে, কিন্তু VACUUM FULL পুরো টেবিল সাময়িক লক করে দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Tuning Autovacuum to Prevent Transaction ID Wraparound', bn: '৬. অটোভ্যাকুয়াম টিউনিং ও ট্রানজ্যাকশন আইডি মোড়কীকরণ' } },
    {
      type: 'para',
      text: {
        en: 'PostgreSQL transaction IDs (XIDs) are 32-bit integers, capping at billions of transactions. If autovacuum fails to advance the freeze horizon before safe transaction limits elapse, PostgreSQL enters safe read-only mode to prevent data corruption. Administrators tune autovacuum_vacuum_scale_factor and autovacuum_vacuum_cost_limit so cleanup workers run aggressively and continuously.',
        bn: 'PostgreSQL-এ ট্রানজ্যাকশন আইডি (XID) হলো ৩২-বিট সংখ্যা, যার সর্বোচ্চ সীমা শত কোটি লেনদেন। নিরাপদ সীমা পার হওয়ার আগে অটোভ্যাকুয়াম যদি পুরনো আইডি ফ্রিজ করতে না পারে, তবে ডেটা সুরক্ষা নিশ্চিত করতে সার্ভার সম্পূর্ণ রিড-অনলি মোডে চলে যায়। স্কেল ফ্যাক্টর ও কস্ট লিমিট সঠিকভাবে টিউন করলে অটোভ্যাকুয়াম সার্বক্ষণিক সচল থেকে এই বিপর্যয় রোধ করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `# Aggressive autovacuum tuning inside postgresql.conf:
# Vacuum runs when 5% of rows change (default is 20%):
autovacuum_vacuum_scale_factor = 0.05
autovacuum_analyze_scale_factor = 0.02

# Give autovacuum workers more I/O bandwidth:
autovacuum_vacuum_cost_limit = 2000
autovacuum_max_workers = 5`,
      caption: {
        en: 'Aggressive autovacuum parameters prevent catastrophic database shutdown locks.',
        bn: 'অটোভ্যাকুয়াম সঠিকভাবে কনফিগার করলে ট্রানজ্যাকশন আইডি মোড়কীকরণ বিপর্যয় এড়ানো যায়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Memory Sizing: shared_buffers vs work_mem', bn: '৭. মেমরি নির্ধারণ: shared_buffers বনাম work_mem' } },
    {
      type: 'para',
      text: {
        en: 'Allocating PostgreSQL memory requires understanding process scopes. The shared_buffers parameter (typically 25 percent of RAM) is allocated once and shared globally across all processes. In contrast, work_mem (e.g. 64 MB) is allocated per sorting and hashing operation. A single complex query with 4 sort nodes opened by 100 concurrent clients can consume 25 gigabytes of RAM, risking out-of-memory kernel termination.',
        bn: 'PostgreSQL মেমরি ব্যবস্থাপনায় প্রসেসের পরিধি বোঝা অত্যন্ত জরুরি। shared_buffers (মোট র‍্যামের ২৫ শতাংশ) একবার বরাদ্দ হয়ে সমস্ত প্রসেস শেয়ার করে। অন্যদিকে work_mem (যেমন ৬৪ মেগাবাইট) প্রতিটি সর্টিং ও হ্যাশ অপারেশনের জন্য আলাদাভাবে খরচ হয়। ১০০টি সমান্তরাল কুয়েরির প্রতিটিতে ৪টি সর্ট থাকলে নিমিষেই ২৫ গিগাবাইট র‍্যাম খরচ হয়ে সার্ভার ক্র্যাশ করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Inspect global vs per-query memory parameters:
SHOW shared_buffers;      -- e.g. 4GB (Global buffer cache)
SHOW work_mem;            -- e.g. 16MB (Allocated per query sort node!)
SHOW maintenance_work_mem;-- e.g. 1GB (Used by CREATE INDEX and VACUUM)

-- Temporarily increase work_mem for a single massive analytical session:
SET work_mem = '256MB';
SELECT * FROM large_table ORDER BY unindexed_column;
RESET work_mem;`,
      caption: {
        en: 'work_mem multiplies per active sort node; keep global values conservative.',
        bn: 'work_mem প্রতিটি সর্টের জন্য আলাদা গুণিতক হারে বাড়ে, তাই বিশ্বজনীন মান সতর্কতার সাথে রাখা উচিত।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Connection Pool Sizing Formula', bn: '৮. কানেকশন পুল সাইজিং সূত্র' } },
    {
      type: 'para',
      text: {
        en: 'Increasing database connection limits does not increase database throughput; beyond a threshold, adding connections leads to massive context switching and CPU cache invalidations. The PostgreSQL engineering team established the golden sizing formula: connections = (core_count * 2) + effective_spindle_count. A 16-core database server with fast NVMe storage performs optimal throughput with 34 active connections.',
        bn: 'কানেকশন লিমিট বাড়ালেই ডাটাবেসের স্পিড বাড়ে না; বরং মাত্রাতিরিক্ত সংযোগ প্রসেসরের কনটেক্সট সুইচের চাপ বাড়িয়ে দেয়। PostgreSQL বিশেষজ্ঞদের প্রস্তাবিত সুবর্ণ সূত্র হলো: connections = (core_count * 2) + effective_spindle_count। ১৬ কোরের দ্রুতগতির একটি সার্ভারে মাত্র ৩৪টি সক্রিয় সংযোগেই সর্বোচ্চ থ্রুপুট পাওয়া সম্ভব।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `CONNECTION SIZING GOLDEN RULE:
Total Connections = (CPU Cores * 2) + Disk Count

Example Production Machine:
- 16 CPU Cores
- 2 NVMe SSD Spindles
- Optimal Database Pool Size = (16 * 2) + 2 = 34 Connections!
Use PgBouncer in front to absorb 5,000 client web sockets effortlessly!`,
      caption: {
        en: 'Limiting active backend connections maximizes CPU cache hits and overall throughput.',
        bn: 'সক্রিয় সংযোগের সংখ্যা নিয়ন্ত্রণে রাখলে প্রসেসরের কার্যক্ষমতা সর্বোচ্চ হয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Index Decision Playbook: Choosing the Right Tree', bn: '৯. ইনডেক্স নির্বাচন গাইড: উপযুক্ত ইনডেক্স পদ্ধতি' } },
    {
      type: 'para',
      text: {
        en: 'Applying the proper index type guarantees sub-millisecond lookups across massive datasets: Use B-Trees for unique IDs, primary keys, and sorting. Use BRIN for naturally sorted time-series logs and immutable telemetry. Use GIN for JSONB documents and array containment. Use GiST for geometric shapes, geospatial PostGIS points, and range overlap exclusion constraints.',
        bn: 'উপযুক্ত ইনডেক্স পদ্ধতি নির্বাচন করলে কোটি কোটি তথ্যের মাঝেও কয়েক মিলিসেকেন্ডে ডেটা খুঁজে পাওয়া যায়: সাধারণ ইউনিক আইডি ও সর্টিংয়ের জন্য বি-ট্রি ব্যবহার করুন। সময়ানুসারে সাজানো টাইম-সিরিজ তথ্যের জন্য ব্রিন (BRIN) বেছে নিন। JSONB ডকুমেন্ট ও অ্যারের জন্য GIN ব্যবহার করুন। আর ভৌগোলিক মানচিত্র ও সময়ের রেঞ্জ ওভারল্যাপের জন্য GiST ইনডেক্স ব্যবহার করুন।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `INDEX TYPE SELECTION SPECTRUM:
+-------------------+--------------------+--------------------+--------------------+
| Index Type        | Storage Size       | Best Operator Match| Primary Production Use|
+-------------------+--------------------+--------------------+--------------------+
| B-Tree            | Large              | =, <, >, <=, >=, ORDER BY| Primary Keys / Foreign Keys|
| BRIN              | Tiny (1% of B-Tree)| Ranges on Sorted Data| Created_at Log Tables|
| GIN               | Moderate           | @>, ?, &&          | JSONB and Arrays   |
| GiST              | Moderate           | &&, <->, @>        | PostGIS Geospatial |
+-------------------+--------------------+--------------------+--------------------+`,
      caption: {
        en: 'Choosing the right index architecture balances disk storage against query speed.',
        bn: 'সঠিক ইনডেক্স নির্বাচন ডিস্কের আকার ও অনুসন্ধানের গতির নিখুঁত ভারসাম্য নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing an Automated Slow Query Logger in Node.js', bn: '১০. Node.js-এ স্বয়ংক্রিয় ধীরগতির কুয়েরি লগার' } },
    {
      type: 'para',
      text: {
        en: 'Here is an enterprise database telemetry wrapper in Node.js utilizing node-postgres that monitors query execution durations and automatically triggers EXPLAIN ANALYZE on queries exceeding performance thresholds.',
        bn: 'নিচে node-postgres ব্যবহার করে কুয়েরির সময় পর্যবেক্ষণ করা এবং কোনো কুয়েরি নির্দিষ্ট সীমা অতিক্রম করলেই স্বয়ংক্রিয়ভাবে EXPLAIN ANALYZE চালানোর একটি প্রোডাকশন কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import pg from "pg";
const { Pool } = pg;
const pool = new Pool({ connectionString: "postgresql://postgres:secret@127.0.0.1:5432/postgres", max: 20 });

const SLOW_QUERY_THRESHOLD_MS = 100;

async function monitoredQuery(sql, params = []) {
  const start = performance.now();
  const client = await pool.connect();
  try {
    const res = await client.query(sql, params);
    const duration = performance.now() - start;

    if (duration > SLOW_QUERY_THRESHOLD_MS) {
      console.warn(\`SLOW QUERY ALERT (\${duration.toFixed(2)}ms): \${sql}\`);
      // Trigger automated plan capture:
      const planRes = await client.query(\`EXPLAIN (BUFFERS) \${sql}\`, params);
      console.warn("Automated Plan Diagnostics:", planRes.rows.map(r => r["QUERY PLAN"]).join("\\n"));
    }

    return res.rows;
  } finally {
    client.release();
  }
}

console.log("PostgreSQL slow query monitoring engine initialized successfully");
// Output: PostgreSQL slow query monitoring engine initialized successfully`,
      caption: {
        en: 'Proactive slow query interceptors capture execution plans before production bottlenecks escalate.',
        bn: 'স্বয়ংক্রিয় ধীরগতির কুয়েরি লগার সমস্যা জটিল হওয়ার আগেই কুয়েরি প্ল্যান তুলে আনে।'
      }
    }
  ],
  exercises: [
    {
      id: 'pg-rel-ex1',
      kind: 'predict',
      topic: 'postgresql: explain analyze buffer hit metric',
      question: {
        en: 'When reading query plan output from EXPLAIN (ANALYZE, BUFFERS), which counter represents 8 KB data pages retrieved directly from RAM without disk I/O?',
        bn: 'EXPLAIN (ANALYZE, BUFFERS) কুয়েরি প্ল্যানে কোন কাউন্টারটি ডিস্ক থেকে নয়, সরাসরি মেমরি (RAM) থেকে পড়া ৮ কিলোবাইট পেজের সংখ্যা নির্দেশ করে?'
      },
      code: `/* Buffers read from RAM buffer cache: */
/* Buffers: shared ________=4 read=0 */`,
      answer: 'hit',
      accept: ['hit', 'shared hit'],
      hint: {
        en: 'shared hit.',
        bn: 'shared hit।'
      },
      explanation: {
        en: 'shared hit indicates the number of 8 KB blocks found cached directly in shared_buffers in memory.',
        bn: 'shared hit মেমরিতে সরাসরি পাওয়া ৮ কিলোবাইট ব্লকের সংখ্যা প্রকাশ করে।'
      }
    },
    {
      id: 'pg-rel-ex2',
      kind: 'mcq',
      topic: 'postgresql: brin index primary advantage',
      question: {
        en: 'What is the primary architectural advantage of a Block Range Index (BRIN) over a traditional B-Tree on naturally sorted time-series tables?',
        bn: 'সময়ানুসারে সাজানো টাইম-সিরিজ টেবিলে সাধারণ বি-ট্রির তুলনায় ব্লক রেঞ্জ ইনডেক্স (BRIN) ব্যবহারের প্রধান সুবিধা কী?'
      },
      options: [
        { en: 'It consumes dramatically less disk space (often 100x smaller) by indexing summary ranges across blocks rather than every row', bn: 'প্রতিটি রো আলাদাভাবে ইনডেক্স না করে ব্লকের সারসংক্ষেপ রাখায় এটি নাটকীয়ভাবে কম ডিস্ক জায়গা নেয় (প্রায় ১০০ গুণ ছোট)' },
        { en: 'It turns off SQL validation completely', bn: 'এসকিউএল ভ্যালিডেশন বন্ধ করে দেয়' },
        { en: 'It deletes data after 7 days automatically', bn: '৭ দিন পর ডেটা মুছে দেয়' },
        { en: 'It converts numbers into Roman numerals', bn: 'রোমান সংখ্যায় রূপ দেয়' }
      ],
      answer: 0,
      hint: {
        en: 'Dramatically smaller disk footprint.',
        bn: 'নাটকীয়ভাবে কম ডিস্ক মেমরি প্রয়োজন।'
      },
      explanation: {
        en: 'BRIN stores minimum and maximum values for physical block ranges, creating microscopic index footprints on sorted data.',
        bn: 'BRIN প্রতিটি ব্লকের সর্বনিম্ন ও সর্বোচ্চ মান মনে রাখে, ফলে ইনডেক্স সাইজ অত্যন্ত ছোট হয়।'
      }
    },
    {
      id: 'pg-rel-ex3',
      kind: 'mcq',
      topic: 'postgresql: vacuum full locking danger',
      question: {
        en: 'Why is running VACUUM FULL strongly discouraged on high-concurrency production PostgreSQL databases?',
        bn: 'উচ্চ ট্রাফিকের প্রোডাকশন পরিবেশে VACUUM FULL চালানোকে কেন কঠোরভাবে নিরুৎসাহিত করা হয়?'
      },
      options: [
        { en: 'It acquires an ACCESS EXCLUSIVE lock on the entire table, blocking all incoming reads and writes until completion', bn: 'এটি পুরো টেবিলে ACCESS EXCLUSIVE লক প্রয়োগ করে কাজ শেষ না হওয়া পর্যন্ত সমস্ত রিড ও রাইট রিকোয়েস্ট থামিয়ে দেয়' },
        { en: 'It crashes the server motherboard', bn: 'সার্ভার হার্ডওয়্যার নষ্ট করে দেয়' },
        { en: 'It deletes all table rows permanently', bn: 'সব ডেটা মুছে ফেলে' },
        { en: 'It is written in Python instead of C', bn: 'সি এর বদলে পাইথনে লেখা' }
      ],
      answer: 0,
      hint: {
        en: 'Acquires exclusive lock, freezing table traffic.',
        bn: 'এক্সক্লুসিভ লক বসিয়ে পুরো ট্রাফিক ফ্রিজ করে দেয়।'
      },
      explanation: {
        en: 'VACUUM FULL rewrites the table into a new file, holding an exclusive table lock that completely blocks application queries.',
        bn: 'VACUUM FULL সম্পূর্ণ নতুন ফাইল বানাতে গিয়ে টেবিল লক করে দেয়, ফলে অ্যাপ্লিকেশন অচল হয়ে পড়ে।'
      }
    }
  ],
  quiz: {
    id: 'pg-rel-quiz',
    title: { en: 'PostgreSQL Performance & Production Tuning Quiz', bn: 'PostgreSQL পারফরম্যান্স ও প্রোডাকশন টিউনিং কুইজ' },
    questions: [
      {
        id: 'pprq1',
        kind: 'mcq',
        topic: 'postgresql: transaction id wraparound danger',
        question: {
          en: 'What catastrophic operational event occurs if PostgreSQL fails to advance the autovacuum freeze horizon before transaction wraparound limits elapse?',
          bn: 'নিরাপদ লেনদেন সীমা পার হওয়ার আগে অটোভ্যাকুয়াম পুরনো ট্রানজ্যাকশন আইডি ফ্রিজ করতে না পারলে কোন চরম বিপর্যয় ঘটে?'
        },
        options: [
          { en: 'The database shuts down into emergency read-only mode to prevent transaction ID wraparound and silent data corruption', bn: 'ট্রানজ্যাকশন আইডি মোড়কীকরণ ও ডেটা নষ্ট হওয়া রোধ করতে ডাটাবেস সম্পূর্ণ ইমার্জেন্সি রিড-অনলি মোডে চলে যায়' },
          { en: 'All data is uploaded to GitHub automatically', bn: 'সব ডেটা গিটহাবে আপলোড হয়ে যায়' },
          { en: 'The server increases memory to infinite gigabytes', bn: 'মেমরি অসীম হয়ে যায়' },
          { en: 'The database converts all passwords into plain text', bn: 'পাসওয়ার্ড উন্মুক্ত হয়ে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Emergency read-only shutdown to prevent wraparound.',
          bn: 'বিপর্যয় রোধে ইমার্জেন্সি রিড-অনলি মোডে চলে যায়।'
        },
        explanation: {
          en: 'When the 32-bit transaction counter approaches wraparound, PostgreSQL halts all write transactions until aggressive freeze vacuums complete.',
          bn: '৩২-বিট আইডি ঘুরে আবার শুরু হওয়া ঠেকাতে সার্ভার সব রাইট বন্ধ করে শুধু পড়ার অনুমতি দেয়।'
        }
      },
      {
        id: 'pprq2',
        kind: 'mcq',
        topic: 'postgresql: work_mem multiplication hazard',
        question: {
          en: 'Why must administrators exercise caution before setting large global work_mem values (such as 512 MB)?',
          bn: 'অ্যাডমিনদের কেন বিশ্বজনীন work_mem এর মান খুব বেশি বড় (যেমন ৫১২ মেগাবাইট) রাখার ক্ষেত্রে সতর্ক হওয়া উচিত?'
        },
        options: [
          { en: 'Because work_mem is allocated per sorting and hashing node per query, causing memory consumption to multiply rapidly under high concurrency', bn: 'কারণ work_mem প্রতিটি কুয়েরির প্রতি সর্টিং ও হ্যাশ নোডের জন্য আলাদা খরচ হয়, ফলে উচ্চ ট্রাফিকে মেমরি বহুগুণ বেড়ে ক্র্যাশ হতে পারে' },
          { en: 'Because work_mem can only be set to prime numbers', bn: 'কারণ এটি কেবল মৌলিক সংখ্যা হতে পারে' },
          { en: 'Because it disables all table primary keys', bn: 'প্রাইমারি কি বন্ধ করে দেয়' },
          { en: 'Because it limits database queries to 10 per day', bn: 'দিনে মাত্র ১০টি কুয়েরি চালাতে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Allocated per sort node across all concurrent queries.',
          bn: 'প্রতিটি সর্ট নোডের জন্য আলাদাভাবে বরাদ্দ হয়।'
        },
        explanation: {
          en: 'work_mem is not a per-connection ceiling: a single complex query with 4 sorts uses 4x work_mem, easily causing out-of-memory crashes.',
          bn: 'work_mem কানেকশনের সীমা নয়; এক কুয়েরিতে ৪টি সর্ট থাকলে এটি ৪ গুণ খরচ হয়, যা মেমরি সংকট তৈরি করতে পারে।'
        }
      },
      {
        id: 'pprq3',
        kind: 'mcq',
        topic: 'postgresql: connection pool sizing formula',
        question: {
          en: 'According to PostgreSQL engineering guidelines, what is the optimal formula for sizing active database connection pools?',
          bn: 'PostgreSQL বিশেষজ্ঞদের প্রস্তাবিত সুবর্ণ সূত্র অনুযায়ী সক্রিয় কানেকশন পুলের সঠিক মাপ কোনটি?'
        },
        options: [
          { en: 'connections = (CPU Cores * 2) + effective_spindle_count', bn: 'connections = (CPU Cores * 2) + effective_spindle_count' },
          { en: 'connections = total_registered_users * 10', bn: 'connections = total_registered_users * 10' },
          { en: 'connections = total_gigabytes_of_ram', bn: 'connections = total_gigabytes_of_ram' },
          { en: 'connections = 10000 always', bn: 'connections = সর্বদা ১০০০০' }
        ],
        answer: 0,
        hint: {
          en: 'Connections = (CPU Cores * 2) + Disk Spindles.',
          bn: 'Connections = (CPU Cores * 2) + Disk Spindles।'
        },
        explanation: {
          en: 'Limiting active backends to roughly double the core count maximizes CPU cache locality and minimizes context-switching thrashing.',
          bn: 'কোরের দ্বিগুণের কাছাকাছি সংযোগ রাখলে প্রসেসর অতিরিক্ত ট্রাফিক সামলাতে গিয়ে সময় নষ্ট করে না।'
        }
      },
      {
        id: 'pprq4',
        kind: 'mcq',
        topic: 'postgresql: online table repack tool',
        question: {
          en: 'Which popular open-source utility reorganizes bloated tables online without holding exclusive locks, replacing dangerous VACUUM FULL commands?',
          bn: 'বিপজ্জনক VACUUM FULL-এর বিকল্প হিসেবে কোনো এক্সক্লুসিভ লক না বসিয়ে অনলাইনে টেবিল ব্লোট মুক্ত করতে কোন জনপ্রিয় ওপেন-সোর্স ইউটিলিটি ব্যবহৃত হয়?'
        },
        options: [
          { en: 'pg_repack', bn: 'pg_repack' },
          { en: 'pg_dump', bn: 'pg_dump' },
          { en: 'pg_upgrade', bn: 'pg_upgrade' },
          { en: 'pg_config', bn: 'pg_config' }
        ],
        answer: 0,
        hint: {
          en: 'pg_repack utility.',
          bn: 'pg_repack ইউটিলিটি।'
        },
        explanation: {
          en: 'pg_repack builds a new copy of the table using triggers to catch concurrent mutations, swapping it in place with minimal lock time.',
          bn: 'pg_repack কোনো দীর্ঘ লক ছাড়াই ব্যাকগ্রাউন্ডে নতুন টেবিল তৈরি করে ব্লোট দূর করে দেয়।'
        }
      }
    ]
  }
};
