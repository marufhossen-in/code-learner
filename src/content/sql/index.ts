import type { Hub } from '../../lib/types';
import { sqlPerformanceLesson } from './lessons/sql-performance';
import { sqlThinkingLesson } from './lessons/sql-thinking';
import { joinHallLesson } from './lessons/the-join-hall';
import { censusLedgerLesson } from './lessons/the-census-ledger';
import { windowGalleryLesson } from './lessons/the-window-gallery';
import { transactionVaultLesson } from './lessons/the-transaction-vault';
import { migrationDocketLesson } from './lessons/the-migration-docket';
import { ormShadowLesson } from './lessons/the-orm-shadow';
import { grandWarehouseLesson } from './lessons/the-grand-warehouse';

export const sqlHub: Hub = {
  slug: 'sql',
  name: 'SQL',
  icon: '🧾',
  tagline: {
    en: 'The declarative contract with your data: say WHAT, let the engine invent HOW.',
    bn: 'আপনার ডেটার সাথে ডিক্লারেটিভ চুক্তি: কী বলুন, কীভাবে হবে উদ্ভাবন করুক ইঞ্জিন।',
  },
  about: {
    en: 'SQL is forty years old and still runs the world because it made one bet: describe the answer, never the algorithm. This hub teaches that bet from the inside. Lesson one installs set-thinking — the logical pipeline FROM→WHERE→GROUP BY→HAVING→SELECT→ORDER BY, three-valued NULL logic, and why procedural rewrites betray the optimizer. Lesson two turns to economics: B-Tree indexes, selectivity, EXPLAIN as a pricing report, composite index prefix rules, covering indexes, and the N+1 pattern that quietly bankrupts production apps. Both lessons run inside the Database Lab — a miniature honest engine that parses your SQL, announces its plan, and counts every row it examines.',
    bn: 'SQL চল্লিশ বছরের পুরনো, তবু এখনো বিশ্ব চালায় — এক বাজির কারণে: উত্তর বর্ণনা করুন, অ্যালগরিদম কখনো নয়। এই হাব সেই বাজি শেখায় ভেতর থেকে। প্রথম লেসনে সেট-চিন্তা — FROM→WHERE→GROUP BY→HAVING→SELECT→ORDER BY পাইপলাইন, NULL-এর তিন-মূল্যমান যুক্তি, আর কেন প্রোসিডিউরাল পুনর্লিখন অপ্টিমাইজারের সাথে বিশ্বাসঘাতকতা। দ্বিতীয় লেসনে অর্থনীতি: B-Tree ইনডেক্স, নির্বাচন-মাত্রা, মূল্য-রিপোর্ট হিসেবে EXPLAIN, কম্পোজিট ইনডেক্সের প্রিফিক্স নিয়ম, কভারিং ইনডেক্স, আর প্রোডাকশন অ্যাপ চুপিচুপি দেউলিয়া করে দেওয়া N+1 প্যাটার্ন। দুই লেসনই চলে Database Lab-এর ভেতর — একটি ক্ষুদ্র সৎ ইঞ্জিন যা আপনার SQL পার্স করে, প্ল্যান ঘোষণা করে, আর পরীক্ষিত প্রতিটি সারি গুনে দেখায়।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Set thinking', bn: 'ধাপ ১ — সেট চিন্তা' },
      items: [
        { en: 'Tables are unordered sets of rows (lesson 1)', bn: 'টেবিল হলো সারির অনিয়মিত সেট (লেসন ১)' },
        { en: 'The logical pipeline: FROM→WHERE→GROUP→HAVING→SELECT→ORDER', bn: 'লজিক্যাল পাইপলাইন: FROM→WHERE→GROUP→HAVING→SELECT→ORDER' },
        { en: 'Three-valued logic: NULL poisons every comparison', bn: 'তিন-মূল্যমান যুক্তি: NULL প্রতি তুলনায় বিষ' },
      ],
    },
    {
      title: { en: 'Stage 2 — Query economics', bn: 'ধাপ ২ — কোয়েরি অর্থনীতি' },
      items: [
        { en: 'B-Tree indexes: sorted copies with pointers (lesson 2)', bn: 'B-Tree ইনডেক্স: পয়েন্টারযুক্ত সাজানো কপি (লেসন ২)' },
        { en: 'Seq Scan vs Index Scan: selectivity decides', bn: 'Seq Scan বনাম Index Scan: সিদ্ধান্ত নেয় নির্বাচন-মাত্রা' },
        { en: 'EXPLAIN as a cost report, not a verdict', bn: 'রায় নয়, খরচ-রিপোর্ট হিসেবে EXPLAIN' },
      ],
    },
    {
      title: { en: 'Stage 3 — Index craftsmanship', bn: 'ধাপ ৩ — ইনডেক্স কারিগরি' },
      items: [
        { en: 'Composite indexes and the leftmost prefix rule', bn: 'কম্পোজিট ইনডেক্স ও বামতম প্রিফিক্স নিয়ম' },
        { en: 'Covering indexes → Index Only Scan', bn: 'কভারিং ইনডেক্স → Index Only Scan' },
        { en: 'Write tax: indexes make INSERT/UPDATE pay', bn: 'লেখার কর: ইনডেক্স INSERT/UPDATE-এ বিল ধরায়' },
      ],
    },
    {
      title: { en: 'Stage 4 — Application wiring', bn: 'ধাপ ৪ — অ্যাপ্লিকেশন তারবাঁধা' },
      items: [
        { en: 'N+1 detection and JOIN/IN cures', bn: 'N+1 শনাক্তকরণ ও JOIN/IN প্রতিষেধক' },
        { en: 'pg_stat_statements: index reality, not guesses', bn: 'pg_stat_statements: অনুমান নয়, বাস্তবতায় ইনডেক্স' },
        { en: 'GENERATED columns and functional indexes', bn: 'GENERATED কলাম ও ফাংশনাল ইনডেক্স' },
      ],
    },
  ],
  lessons: [
    sqlThinkingLesson,
    censusLedgerLesson,
    joinHallLesson,
    grandWarehouseLesson,
    windowGalleryLesson,
    transactionVaultLesson,
    sqlPerformanceLesson,
    migrationDocketLesson,
    ormShadowLesson
  ],
  reference: [
    {
      group: 'Querying',
      methods: [
        {
          name: 'SELECT … WHERE',
          signature: 'SELECT columns FROM table WHERE predicate',
          params: { en: 'columns — projection list; predicate — per-row boolean test.', bn: 'columns — প্রজেকশন তালিকা; predicate — সারিপ্রতি বুলিয়ান পরীক্ষা।' },
          returns: { en: 'Rows where the predicate is TRUE (UNKNOWN and FALSE both rejected).', bn: 'যে সারিতে predicate TRUE (UNKNOWN ও FALSE দুটোই বাতিল)।' },
          example: "SELECT name, age FROM users WHERE city = 'Khulna' AND age >= 18;",
        },
        {
          name: 'ORDER BY … LIMIT',
          signature: 'ORDER BY col [ASC|DESC] LIMIT n',
          params: { en: 'col — sort key; n — maximum rows kept.', bn: 'col — সাজানোর চাবি; n — সর্বোচ্চ রাখা সারি।' },
          returns: { en: 'The top n rows in the key’s order. Without ORDER BY, LIMIT order is undefined.', bn: 'চাবির ক্রমে শীর্ষ n সারি। ORDER BY ছাড়া LIMIT-এর ক্রম অনির্দিষ্ট।' },
          example: 'SELECT * FROM users ORDER BY age DESC LIMIT 10; -- সবচেয়ে বড় ১০ জন',
        },
        {
          name: 'JOIN',
          signature: 'FROM a JOIN b ON a.key = b.fkey',
          params: { en: 'JOIN/INNER (matches only) vs LEFT JOIN (keep all a, NULL-fill b).', bn: 'JOIN/INNER (শুধু মিল) বনাম LEFT JOIN (a সব, b-তে NULL)।' },
          returns: { en: 'The candidate row universe combining two tables on the predicate.', bn: 'শর্তে দুই টেবিল মিলিয়ে প্রার্থী-সারির বিশ্ব।' },
          example: 'SELECT u.name, COUNT(p.id) FROM users u LEFT JOIN posts p ON p.user_id = u.id GROUP BY u.name;',
        },
        {
          name: 'DISTINCT',
          signature: 'SELECT DISTINCT col',
          params: { en: 'Removes duplicates AFTER projection (runs late in the pipeline).', bn: 'প্রজেকশনের পরে পুনরাবৃত্তি বাদ দেয় (পাইপলাইনে দেরিতে চলে)।' },
          returns: { en: 'Unique combinations of the projected columns.', bn: 'প্রজেক্ট করা কলামের অনন্য সমাহার।' },
          example: 'SELECT DISTINCT city FROM users;',
        },
      ],
    },
    {
      group: 'Aggregation',
      methods: [
        {
          name: 'GROUP BY',
          signature: 'GROUP BY col',
          params: { en: 'col — bucket key; every non-aggregated SELECT column must appear here.', bn: 'col — বাক্সের চাবি; প্রতি অ-অ্যাগ্রিগেট SELECT কলাম এখানে দিতেই হবে।' },
          returns: { en: 'One row per bucket; aggregates (COUNT/SUM/AVG) computed per bucket.', bn: 'বাক্সপ্রতি একটি সারি; অ্যাগ্রিগেট (COUNT/SUM/AVG) বাক্সপ্রতি হিসাব।' },
          example: 'SELECT city, COUNT(*) AS users FROM users GROUP BY city;',
        },
        {
          name: 'HAVING',
          signature: 'HAVING aggregate_predicate',
          params: { en: 'A WHERE for GROUPS — runs after GROUP BY, sees aggregates.', bn: 'গ্রুপের জন্য WHERE — GROUP BY-এর পরে চলে, অ্যাগ্রিগেট দেখে।' },
          returns: { en: 'Buckets passing the aggregate test. WHERE ≈ rows; HAVING ≈ buckets.', bn: 'অ্যাগ্রিগেট পরীক্ষায় উত্তীর্ণ বাক্স। WHERE ≈ সারি; HAVING ≈ বাক্স।' },
          example: 'HAVING COUNT(*) >= 50  -- যে শহরে অন্তত ৫০ ব্যবহারকারী',
        },
        {
          name: 'COUNT / SUM / AVG / MAX',
          signature: 'COUNT(*) | COUNT(col) | AVG(numeric)',
          params: { en: 'COUNT(*) counts rows; COUNT(col) skips NULLs; AVG ignores NULLs (division silently changes!).', bn: 'COUNT(*) সারি গোনে; COUNT(col) NULL বাদ; AVG NULL উপেক্ষা করে (ভাগফল চুপি চুপি বদলায়!)।' },
          returns: { en: 'One scalar per bucket (or per table without GROUP BY).', bn: 'বাক্সপ্রতি (GROUP BY ছাড়া টেবিলপ্রতি) একটি স্কেলার।' },
          example: 'SELECT AVG(age) FROM users WHERE city IS NOT NULL;',
        },
      ],
    },
    {
      group: 'Schema & performance',
      methods: [
        {
          name: 'CREATE TABLE',
          signature: 'CREATE TABLE t (col TYPE constraints, …)',
          params: { en: 'PRIMARY KEY, NOT NULL, UNIQUE, REFERENCES — constraints are the schema’s immune system.', bn: 'PRIMARY KEY, NOT NULL, UNIQUE, REFERENCES — কনস্ট্রেইন্ট হলো স্কিমার রোগপ্রতিরোধ ব্যবস্থা।' },
          returns: { en: 'An empty relation whose contract the engine now enforces on every write.', bn: 'খালি রিলেশন — প্রতি লেখায় এ চুক্তি এখন ইঞ্জিন বলবৎ করে।' },
          example: 'CREATE TABLE users (id INT PRIMARY KEY, name TEXT NOT NULL, city TEXT, age INT CHECK (age >= 0));',
        },
        {
          name: 'CREATE INDEX',
          signature: 'CREATE INDEX name ON table (col1, col2)',
          params: { en: 'Column order defines the leftmost prefix; composite indexes answer prefixes only.', bn: 'কলামের ক্রমই বামতম প্রিফিক্স; কম্পোজিট ইনডেক্স শুধু প্রিফিক্সে উত্তর দেয়।' },
          returns: { en: 'A maintained sorted structure making lookups O(log n) — paid on every write.', bn: 'রক্ষিত সাজানো কাঠামো: খোঁজ O(log n) — মূল্য পরিশোধ প্রতি লেখায়।' },
          example: 'CREATE INDEX idx_users_city_age ON users (city, age);',
        },
        {
          name: 'EXPLAIN (ANALYZE)',
          signature: 'EXPLAIN [ANALYZE] query',
          params: { en: 'ANALYZE actually RUNS the query and prints estimated vs actual row counts.', bn: 'ANALYZE কোয়েরি সত্যি চালিয়ে অনুমানিত বনাম প্রকৃত সারি-সংখ্যা ছাপে।' },
          returns: { en: 'The chosen plan tree with costs — the optimizer’s shopping receipt.', bn: 'খরচসহ বাছাই করা প্ল্যান-বৃক্ষ — অপ্টিমাইজারের কেনার রশিদ।' },
          example: 'EXPLAIN ANALYZE SELECT * FROM users WHERE city = \'Sylhet\';',
        },
        {
          name: 'IS NULL / IS NOT NULL',
          signature: 'WHERE col IS NULL',
          params: { en: 'The ONLY honest NULL test. = NULL is a silent zero-row machine.', bn: 'একমাত্র সৎ NULL পরীক্ষা। = NULL হলো নীরব শূন্য-সারি যন্ত্র।' },
          returns: { en: 'TRUE for rows where the column has NO value.', bn: 'কলামে মান নেই এমন সারির জন্য TRUE।' },
          example: 'SELECT * FROM users WHERE city IS NULL;',
        },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'Dhaka Library Catalog', bn: 'ঢাকা লাইব্রেরি ক্যাটালগ' },
      diff: 'beginner',
      desc: {
        en: 'Design three tables (books, members, loans) with honest constraints, seed 50 rows of mixed data (deliberately sprinkle NULLs), then answer 12 natural questions with pure SELECT/GROUP BY/HAVING. Deliverable: the queries AND the reasoning for each clause’s pipeline position.',
        bn: 'তিন টেবিল ডিজাইন করুন (books, members, loans) সৎ কনস্ট্রেইন্টসহ, ৫০ সারি মিশ্র ডেটা বুনুন (ইচ্ছাকৃত NULL ছড়িয়ে), তারপর ১২টি স্বাভাবিক প্রশ্নের উত্তর দিন খাঁটি SELECT/GROUP BY/HAVING-এ। ডেলিভারেবল: কোয়েরিগুলো, সাথে প্রতিটি ক্লজের পাইপলাইন-অবস্থানের যুক্তি।',
      },
    },
    {
      title: { en: 'The N+1 Hunt', bn: 'N+1 শিকার' },
      diff: 'intermediate',
      desc: {
        en: 'Take a small app (or pseudocode) that lists users and their post counts via an ORM loop. Log every query, count the round-trips, refactor to a single JOIN+GROUP BY, and photograph the before/after log as your evidence.',
        bn: 'একটি ছোট অ্যাপ (বা সিউডোকোড) নিন যা ORM লুপে ব্যবহারকারী ও তাদের পোস্ট-সংখ্যা দেখায়। প্রতি কোয়েরি লগ করুন, রাউন্ড-ট্রিপ গুনুন, একটি JOIN+GROUP BY-তে রূপ দিন, আগে/পরের লগের স্ক্রিনশট প্রমাণ হিসেবে রাখুন।',
      },
    },
    {
      title: { en: 'Index Tuner Challenge', bn: 'ইনডেক্স টিউনার চ্যালেঞ্জ' },
      diff: 'advanced',
      desc: {
        en: 'Inside the Database Lab (or a local Postgres), take five workload queries — equality, range, sort, composite, and a NULL-heavy predicate — and craft an index set (at most three indexes) making every plan index-driven. Justify each choice with the examined-rows counter.',
        bn: 'ডেটাবেস ল্যাবে (বা লোকাল Postgres-এ) পাঁচটি ওয়ার্কলোড কোয়েরি নিন — সমতা, রেঞ্জ, সাজান, কম্পোজিট আর NULL-ভারী শর্ত — আর সর্বোচ্চ তিনটি ইনডেক্সের সেট গড়ুন যাতে প্রতিটি প্ল্যান ইনডেক্সচালিত হয়। প্রতি পছন্দ ন্যায্য করুন পরীক্ষিত-সারি কাউন্টার দিয়ে।',
      },
    },
  ],
  bestPractices: [
    { en: 'Write the pipeline in comments on big queries: -- FROM (gather) → WHERE (shrink) → …', bn: 'বড় কোয়েরিতে কমেন্টে পাইপলাইন লিখুন: -- FROM (সংগ্রহ) → WHERE (সংকোচন) → …' },
    { en: 'Every predicate learns one habit: IS NULL for nulls, never = NULL.', bn: 'প্রতি predicate-এর এক অভ্যাস: NULL-এর জন্য IS NULL, কখনো = NULL নয়।' },
    { en: 'Index for actual workloads (pg_stat_statements), not for anxiety. Each index costs every write.', bn: 'প্রকৃত ওয়ার্কলোডের জন্য ইনডেক্স (pg_stat_statements), দুশ্চিন্তার জন্য নয়। প্রতি ইনডেক্স প্রতি লেখায় খরচ।' },
    { en: 'Never SELECT * in application code: name the columns — schema changes should fail loudly, not silently.', bn: 'অ্যাপ কোডে কখনো SELECT * নয়: কলামের নাম লিখুন — স্কিমা বদলালে জোরে ভাঙুক, চুপি চুপি নয়।' },
    { en: 'Test queries against production-shaped volumes; 40 ms on 100 rows is innocent, not evidence.', bn: 'প্রোডাকশন-আকৃতির ভলিউমে কোয়েরি পরখ করুন; ১০০ সারিতে ৪০ ms নির্দোষতা, প্রমাণ নয়।' },
    { en: 'EXPLAIN ANALYZE first, index second, rewrite last. Reading the receipt beats guessing.', bn: 'প্রথমে EXPLAIN ANALYZE, তারপর ইনডেক্স, শেষে পুনর্লিখন। রশিদ পড়া অনুমানকে হারায়।' },
  ],
  interview: [
    {
      q: { en: 'Why can’t WHERE use column aliases, but ORDER BY can?', bn: 'WHERE কলাম অ্যালিয়াস ব্যবহার করতে পারে না কেন, তবে ORDER BY পারে?' },
      a: {
        en: 'The logical pipeline: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. Aliases are BORN in SELECT — the fifth station. WHERE runs second and cannot see the future; ORDER BY runs sixth, after aliases exist. Every SQL scoping rule is this pipeline in a trench coat.',
        bn: 'লজিক্যাল পাইপলাইন: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY। অ্যালিয়াসের জন্ম SELECT-এ — পঞ্চম স্টেশনে। WHERE চলে দ্বিতীয়ত, ভবিষ্যৎ দেখতে পায় না; ORDER BY চলে ষষ্ঠ, অ্যালিয়াস ততক্ষণে আছে। SQL-এর প্রতি স্কোপিং নিয়ম ট্রেঞ্চকোট পরা এই পাইপলাইনই।',
      },
    },
    {
      q: { en: 'Sequential scan is not always bad. When does the planner CORRECTLY prefer it?', bn: 'Sequential scan সবসময় খারাপ নয়। প্ল্যানার কখন যথাযথভাবেই তা বেছে নেয়?' },
      a: {
        en: 'When selectivity is low — the predicate keeps a big fraction of the table (say 30-40%). Index scans pay random-page costs per row; past a threshold, reading the heap sequentially is strictly cheaper. Also for tiny tables: fitting in a few pages, the whole table is already in memory.',
        bn: 'নির্বাচন-মাত্রা নিচু হলে — শর্ত টেবিলের বড় অংশ রেখে দেয় (ধরুন ৩০-৪০%)। ইনডেক্স স্ক্যানে সারিপ্রতি র‍্যান্ডম-পেইজ খরচ; থ্রেশহোল্ড পার হলে হিপ একটানা পড়াই নিঃসন্দেহে সস্তা। ছোট টেবিলেও: কয়েক পেইজে ধরলে পুরো টেবিল তো মেমরিতেই।',
      },
    },
    {
      q: { en: 'Explain the N+1 problem and its cure in one paragraph.', bn: 'N+1 সমস্যা ও প্রতিষেধক এক অনুচ্ছেদে ব্যাখ্যা করুন।' },
      a: {
        en: 'An ORM loop that runs one query for the list and one query PER ITEM (1 + N round-trips) — invisible in dev, a latency avalanche in production. Cure: make the database do the combining — a JOIN, an IN list, or ORM eager loading (include/select_related) — so N+1 round-trips collapse into one or two.',
        bn: 'ORM লুপ যেখানে তালিকার এক কোয়েরি, সাথে আইটেম-প্রতি আরো একটি (1 + N রাউন্ড-ট্রিপ) — ডেভেলপমেন্টে অদৃশ্য, প্রোডাকশনে ল্যাটেন্সি তুষারধ্বস। প্রতিষেধক: মেলানোর কাজ ডেটাবেসকেই দিন — JOIN, IN তালিকা, বা ORM ইগার লোডিং (include/select_related) — N+1 রাউন্ড-ট্রিপ সঙ্কুচিত হবে এক-দুইটিতে।',
      },
    },
    {
      q: { en: 'EXPLAIN shows “rows=10” but ANALYZE shows actual 3,000,000. What is broken and what do you do?', bn: 'EXPLAIN বলে “rows=10”, ANALYZE বলে প্রকৃত ৩,০০০,০০০। কী ভাঙা, কী করবেন?' },
      a: {
        en: 'Stale statistics. The optimizer cannot see data; it prices plans from stored histograms, and its 10-row assumption picked a nested-loop/index plan that collapses at 3M rows. Run ANALYZE on the table; if drift recurs, raise statistics targets for skewed columns. Fresh statistics first, new indexes second, rewrites last.',
        bn: 'বাসি পরিসংখ্যান। অপ্টিমাইজার ডেটা দেখতে পায় না; সংরক্ষিত হিস্টোগ্রামে দাম মেটে, আর তার ১০-সারি অনুমান বেছে নিয়েছে এমন প্ল্যান যা ৩০ লাখ সারিতে ভেঙে পড়ে। টেবিলে ANALYZE চালান; পুনরাবৃত্ত হলে হেলানো কলামের statistics target বাড়ান। আগে তাজা পরিসংখ্যান, তারপর নতুন ইনডেক্স, শেষে পুনর্লিখন।',
      },
    },
  ],
  realWorld: [
    {
      en: 'Every ORM-generated query is still SQL. Reading the generated statements (logging, EXPLAIN) is how seniors audit what the abstraction actually filed on their behalf.',
      bn: 'ORM-উৎপন্ন প্রতি কোয়েরি তো SQL-ই। জেনারেটেড স্টেটমেন্ট পড়া (লগিং, EXPLAIN) — সিনিয়ররা এভাবেই নিরীক্ষণ করে অ্যাবস্ট্রাকশন তাদের হয়ে আসলে কী দাখিল করেছে।',
    },
    {
      en: 'Analytics warehouses (BigQuery, Snowflake) are the SAME declarative contract at petabyte scale — distribution changes the planner’s prices, not your SQL’s meaning.',
      bn: 'অ্যানালিটিক্স ওয়্যারহাউস (BigQuery, Snowflake) পেটাবাইট-মাপে সেই একই ডিক্লারেটিভ চুক্তি — বণ্টন বদলায় প্ল্যানারের দাম, আপনার SQL-এর অর্থ নয়।',
    },
    {
      en: 'Spikes that look like “the app is slow” are usually three queries: one N+1, one missing index, one stale statistic — and EXPLAIN names all three.',
      bn: '"অ্যাপ ধীর" দেখতে এমন স্পাইক সাধারণত তিনটি কোয়েরি: একটি N+1, একটি হারানো ইনডেক্স, একটি বাসি পরিসংখ্যান — আর EXPLAIN তিনজনের নামই ধরে।',
    },
    {
      en: 'Interviews love this hub’s drill: hand-waving about “indexes make it fast” fails; speaking selectivity, prefix rules and plan-reading passes.',
      bn: 'ইন্টারভিউতে এই হাবের অনুশীলনই প্রিয়: “ইনডেক্স দ্রুত করে” ধাঁচের হাত-নাড়া ফেল করে; নির্বাচন-মাত্রা, প্রিফিক্স নিয়ম আর প্ল্যান-পঠন বলা পাস করে।',
    },
  ],
};
