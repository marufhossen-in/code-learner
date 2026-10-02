import type { Lesson } from '../../../lib/types';

export const IndexesAndTheQueryLesson: Lesson = {
  slug: 'indexes-and-the-query',
  tech: 'sqlite',
  title: {
    en: 'Query Planning & Index Optimization: B-Trees & EXPLAIN QUERY PLAN',
    bn: 'কোয়েরি প্ল্যানিং ও ইনডেক্স অপ্টিমাইজেশন: B-Tree ও EXPLAIN QUERY PLAN'
  },
  summary: {
    en: 'Master query planning and index architecture in SQLite. Learn how B-Tree indexes work, interpret EXPLAIN QUERY PLAN output, utilize composite and covering indexes, apply partial indexes, and eliminate full table scans.',
    bn: 'SQLite-এ কোয়েরি প্ল্যানিং ও ইনডেক্স আর্কিটেকচার গভীরভাবে আয়ত্ত করুন। B-Tree ইনডেক্স কীভাবে কাজ করে, EXPLAIN QUERY PLAN বিশ্লেষণ, কম্পোজিট ও কভারিং ইনডেক্স, পারশিয়াল ইনডেক্স এবং ফুল টেবিল স্ক্যান দূরীকরণের সম্পূর্ণ নির্দেশিকা।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'query-planner-btree-index',
      text: {
        en: 'How the SQLite Query Planner and B-Tree Indexes Work',
        bn: 'SQLite কোয়েরি প্ল্যানার এবং B-Tree ইনডেক্স কীভাবে কাজ করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When querying SQLite (the embedded database engine), performance depends on whether the query planner uses a B-Tree index or scans every row. Learning to analyze query plans and design composite indexes transforms slow applications into microsecond systems.',
        bn: 'SQLite (এমবেডেড ডাটাবেস ইঞ্জিন) এ কোয়েরি চালালে পারফরম্যান্স নির্ভর করে কোয়েরি প্ল্যানার B-Tree ইনডেক্স ব্যবহার করছে নাকি প্রতিটি রো স্ক্যান করছে। কোয়েরি প্ল্যান বিশ্লেষণ ও কম্পোজিট ইনডেক্স ডিজাইন শেখার মাধ্যমে ধীরগতির সিস্টেমকে দ্রুতগতির মাইক্রোসেকেন্ড সিস্টেমে রূপান্তর করা যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'An SQLite index is a separate B-Tree on disk containing the indexed column keys sorted along with the corresponding 64-bit rowid. Instead of scanning 100000 rows in linear time, an index lookup traverses root to leaf in 17 comparisons.',
        bn: 'একটি SQLite ইনডেক্স হলো ডিস্কে সংরক্ষিত আলাদা B-Tree যা ক্রমানুসারে সাজানো কলামের মান এবং তার সংশ্লিষ্ট ৬৪-বিট rowid ধারণ করে। ১০০০০০ রো রৈখিকভাবে স্ক্যান করার বদলে ইনডেক্স লুকআপ মাত্র ১৭টি তুলনার মাধ্যমে রুট থেকে লিফ পেজে ডাটা খুঁজে বের করে।'
      }
    },
    {
      type: 'diagram',
      id: 'sqlite-indexes-diagram',
      caption: {
        en: 'Figure 1: Full table scan vs B-Tree index lookup, covering index optimization, and EXPLAIN QUERY PLAN flow.',
        bn: 'চিত্র ১: ফুল টেবিল স্ক্যান বনাম B-Tree ইনডেক্স লুকআপ, কভারিং ইনডেক্স অপ্টিমাইজেশন এবং EXPLAIN QUERY PLAN প্রবাহ।'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="idxHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
    <linearGradient id="scanGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#2d1515"/>
      <stop offset="100%" stop-color="#180a0a"/>
    </linearGradient>
    <linearGradient id="searchGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#idxHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">⚡</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">SQLITE B-TREE INDEXING &amp; QUERY PLANNER ARCHITECTURE</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">EXPLAIN QUERY PLAN, covering indexes, partial indexes, and composite prefix rules</text>

  <!-- Left: Full Scan vs B-Tree Search -->
  <rect x="24" y="90" width="440" height="370" rx="10" fill="#111827" stroke="#334155" stroke-width="1.5"/>
  <text x="44" y="118" fill="#fbbf24" font-size="13" font-weight="bold">SEARCH PATHS: SCAN VS INDEX LOOKUP</text>

  <rect x="44" y="136" width="400" height="145" rx="8" fill="url(#scanGrad)" stroke="#ef4444" stroke-width="1.5"/>
  <text x="56" y="160" fill="#f87171" font-size="12" font-weight="bold">1. SCAN TABLE users (Unindexed O(N))</text>
  <text x="56" y="180" fill="#cbd5e1" font-size="10">• Scans every single disk page sequentially from start to end.</text>
  <text x="56" y="198" fill="#ef4444" font-size="10">• 100,000 rows = 100,000 row inspections + massive disk I/O.</text>
  <text x="56" y="216" fill="#fca5a5" font-size="10">• EQP Flag: "-- SCAN TABLE users"</text>
  <text x="56" y="234" fill="#94a3b8" font-size="10">• Incurred when no index exists or prefix rule is violated.</text>
  <text x="56" y="254" fill="#ef4444" font-size="10" font-weight="bold">• Latency: High (Milliseconds to Seconds on large tables)</text>

  <rect x="44" y="295" width="400" height="150" rx="8" fill="url(#searchGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="56" y="318" fill="#34d399" font-size="12" font-weight="bold">2. SEARCH TABLE USING INDEX (B-Tree O(log N))</text>
  <text x="56" y="338" fill="#cbd5e1" font-size="10">• Binary tree traversal through 2-4 index depth levels.</text>
  <text x="56" y="356" fill="#10b981" font-size="10">• 100,000 rows = ~17 page comparisons to find target rowid.</text>
  <text x="56" y="374" fill="#a7f3d0" font-size="10">• EQP Flag: "-- SEARCH TABLE users USING INDEX idx_email"</text>
  <text x="56" y="392" fill="#38bdf8" font-size="10">• Follows rowid pointer to fetch table data (table lookup).</text>
  <text x="56" y="414" fill="#34d399" font-size="10" font-weight="bold">• Latency: Ultra-low (&lt; 0.1 milliseconds)</text>

  <!-- Right: Covering Index & Partial Index -->
  <rect x="496" y="90" width="440" height="370" rx="10" fill="#111827" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="516" y="118" fill="#38bdf8" font-size="13" font-weight="bold">ADVANCED INDEX OPTIMIZATIONS</text>

  <rect x="516" y="136" width="400" height="145" rx="6" fill="#030712" stroke="#0284c7"/>
  <text x="528" y="160" fill="#38bdf8" font-size="12" font-weight="bold">Covering Index (Zero Table Lookups):</text>
  <text x="528" y="180" fill="#cbd5e1" font-size="10">CREATE INDEX idx_user_summary ON users (dept, id, name);</text>
  <text x="528" y="200" fill="#a78bfa" font-size="10">SELECT id, name FROM users WHERE dept = 'Sales';</text>
  <text x="528" y="222" fill="#34d399" font-size="10">• All requested columns reside directly inside the index leaf!</text>
  <text x="528" y="240" fill="#cbd5e1" font-size="10">• EQP: "-- SEARCH TABLE users USING COVERING INDEX"</text>
  <text x="528" y="258" fill="#60a5fa" font-size="10">• The base table data pages are NEVER touched at all!</text>

  <rect x="516" y="295" width="400" height="150" rx="6" fill="#030712" stroke="#10b981"/>
  <text x="528" y="318" fill="#34d399" font-size="12" font-weight="bold">Partial Indexes (Save 95% Space):</text>
  <text x="528" y="338" fill="#cbd5e1" font-size="10">CREATE INDEX idx_pending ON orders (date)</text>
  <text x="528" y="356" fill="#cbd5e1" font-size="10">WHERE status = 'pending';</text>
  <text x="528" y="378" fill="#94a3b8" font-size="10">• Out of 100,000 orders, only 5,000 are pending.</text>
  <text x="528" y="396" fill="#34d399" font-size="10">• Index occupies 95% less disk space than indexing all orders.</text>
  <text x="528" y="414" fill="#a7f3d0" font-size="10">• Zero index maintenance penalty when updating completed orders.</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'eqp-reading-rules',
      text: {
        en: 'Reading EXPLAIN QUERY PLAN Output',
        bn: 'EXPLAIN QUERY PLAN আউটপুট বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Prefixing any query with EXPLAIN QUERY PLAN reveals the exact strategy chosen by the SQLite cost-based optimizer without executing the query itself.',
        bn: 'যেকোনো কোয়েরির শুরুতে EXPLAIN QUERY PLAN যোগ করলে SQLite অপ্টিমাইজার কোয়েরিটি না চালিয়েই কীভাবে ডাটা খুঁজবে তার সঠিক কৌশল প্রকাশ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When the output displays SCAN TABLE, SQLite could not utilize an index and must inspect every row. In contrast, SEARCH TABLE indicates index-driven logarithmic lookup. If you see USE TEMP B-TREE FOR ORDER BY, creating an index covering the sort columns can eliminate costly in-memory temporary sorting.',
        bn: 'আউটপুটে SCAN TABLE দেখালে বোঝা যায় SQLite ইনডেক্স ব্যবহার করতে পারেনি এবং প্রতিটি রো চেক করতে বাধ্য হচ্ছে। অন্যদিকে SEARCH TABLE নির্দেশ করে সূচক ব্যবহার করে দ্রুত অনুসন্ধান। যদি USE TEMP B-TREE FOR ORDER BY দেখতে পান, তবে সর্ট কলামের ওপর ইনডেক্স বসালে মেমরিতে বাড়তি সর্টিংয়ের ঝামেলা দূর হয়।'
      }
    },
    {
      type: 'heading',
      id: 'composite-and-partial-indexes',
      text: {
        en: 'Composite Left-Prefix Rules and Partial Indexes',
        bn: 'কম্পোজিট লেফট-প্রিফিক্স নিয়ম ও পারশিয়াল ইনডেক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Composite indexes span multiple columns, such as (department, salary). SQLite evaluates composite indexes strictly from left to right. A query filtering by department can utilize this index, but a query filtering only by salary without mentioning department must perform a full table scan.',
        bn: 'কম্পোজিট ইনডেক্স একাধিক কলাম নিয়ে গঠিত হয়, যেমন (department, salary)। SQLite কঠোরভাবে বাম থেকে ডানে কম্পোজিট ইনডেক্স মূল্যায়ন করে। department দিয়ে ফিল্টার করলে ইনডেক্স কাজ করবে, কিন্তু department উল্লেখ না করে কেবল salary দিয়ে ফিল্টার করলে ফুল টেবিল স্ক্যান ঘটবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Partial indexes use a WHERE clause in their definition. For example, indexing only pending orders in an e-commerce database with 100000 total rows cuts index memory by 95% while speeding up order fulfillment queries.',
        bn: 'পারশিয়াল ইনডেক্স তৈরিতে WHERE ক্লজ ব্যবহার করা হয়। উদাহরণস্বরূপ, মোট ১০০০০০ অর্ডারের মধ্যে কেবল পেন্ডিং অর্ডারগুলোর ওপর ইনডেক্স তৈরি করলে ইনডেক্সের সাইজ ৯৫% পর্যন্ত কমে যায় এবং কোয়েরিও দ্রুত চলে।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-indexing-sim',
      text: {
        en: 'Interactive Benchmark: Simulating Full Scan vs B-Tree Lookups',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: ফুল স্ক্যান বনাম B-Tree লুকআপ সিমুলেশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'sqlite-index-benchmark-sim.ts',
      code: `// SQLite B-Tree Query Planner & Index Simulator
// SCAN TABLE 100000 rows takes 100000 comparisons -> gives 100000
// SEARCH TABLE USING INDEX takes 17 comparisons -> returns 17
// Partial index cuts disk overhead by 95% -> gives 95
function simulateSqliteIndexing() {
  console.log("=== SQLITE B-TREE QUERY PLANNER & INDEX SIMULATOR ===");

  const TOTAL_ROWS = 100000;
  console.log(\`\\n1. Search Complexity Benchmark (\${TOTAL_ROWS} records):\`);
  console.log(\`   SCAN TABLE (Full linear scan): \${TOTAL_ROWS} comparisons required (O(N))\`);

  const btreeSteps = Math.ceil(Math.log2(TOTAL_ROWS));
  console.log(\`   SEARCH TABLE USING INDEX (B-Tree): \${btreeSteps} comparisons required (O(log N))\`);
  console.log(\`   -> Speedup Factor: \${(TOTAL_ROWS / btreeSteps).toFixed(0)}x fewer page reads\`);

  const totalOrders = 100000;
  const pendingOrders = 5000;
  const savingsPct = Math.round((1 - (pendingOrders / totalOrders)) * 100);
  console.log("\\n2. Partial Index (WHERE status = 'pending'):");
  console.log(\`   Standard Index: Indexes all \${totalOrders} rows\`);
  console.log(\`   Partial Index: Indexes only \${pendingOrders} pending rows\`);
  console.log(\`   -> Storage & Write Overhead Reduction: \${savingsPct}% disk savings\`);

  console.log("\\n3. Composite Index Left-Prefix Matching on (department, salary):");
  console.log("   Query A: WHERE department = 'Engineering' AND salary > 80000 -> USES INDEX (Optimal)");
  console.log("   Query B: WHERE department = 'Engineering'                   -> USES INDEX (Left-prefix match)");
  console.log("   Query C: WHERE salary > 80000                             -> SCAN TABLE (Prefix skipped!)");
}

simulateSqliteIndexing();`
    },
    {
      type: 'terminal',
      id: 'index-sim-output',
      cmd: 'npx tsx sqlite-index-benchmark-sim.ts',
      output: `=== SQLITE B-TREE QUERY PLANNER & INDEX SIMULATOR ===

1. Search Complexity Benchmark (100000 records):
   SCAN TABLE (Full linear scan): 100000 comparisons required (O(N))
   SEARCH TABLE USING INDEX (B-Tree): 17 comparisons required (O(log N))
   -> Speedup Factor: 5882x fewer page reads

2. Partial Index (WHERE status = 'pending'):
   Standard Index: Indexes all 100000 rows
   Partial Index: Indexes only 5000 pending rows
   -> Storage & Write Overhead Reduction: 95% disk savings

3. Composite Index Left-Prefix Matching on (department, salary):
   Query A: WHERE department = 'Engineering' AND salary > 80000 -> USES INDEX (Optimal)
   Query B: WHERE department = 'Engineering'                   -> USES INDEX (Left-prefix match)
   Query C: WHERE salary > 80000                             -> SCAN TABLE (Prefix skipped!)`
    }
  ],
  exercises: [
    {
      id: 'sql-idx-ex-1',
      kind: 'mcq',
      topic: 'explain-query-plan-scan-flag',
      question: {
        en: 'What does SCAN TABLE in the output of EXPLAIN QUERY PLAN indicate in SQLite?',
        bn: 'SQLite-এ EXPLAIN QUERY PLAN এর আউটপুটে SCAN TABLE কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'The query engine performed an unindexed full table scan, examining every single row in the table from start to finish',
          bn: 'কোয়েরি ইঞ্জিন কোনো ইনডেক্স ব্যবহার না করে সম্পূর্ণ টেবিল স্ক্যান করেছে এবং শুরু থেকে শেষ পর্যন্ত প্রতিটি রো পরীক্ষা করেছে'
        },
        {
          en: 'The database was physically scanned with a barcode reader',
          bn: 'ডাটাবেসটি বারকোড রিডার দিয়ে শারীরিকভাবে স্ক্যান করা হয়েছে'
        },
        {
          en: 'The query used an ultra-fast B-Tree index lookup',
          bn: 'কোয়েরিটি অত্যন্ত দ্রুতগতির B-Tree ইনডেক্স ব্যবহার করেছে'
        },
        {
          en: 'The query was aborted due to syntax errors',
          bn: 'সিনট্যাক্স ভুলের কারণে কোয়েরিটি বাতিল করা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'SCAN TABLE means every row is checked sequentially.',
        bn: 'SCAN TABLE মানে প্রতিটি রো ক্রমানুসারে পরীক্ষা করা হয়েছে।'
      },
      explanation: {
        en: 'SCAN TABLE indicates that SQLite could not use an index, requiring a linear O(N) scan through all data pages.',
        bn: 'SCAN TABLE দেখালে বোঝা যায় কোনো ইনডেক্স কার্যকর হয়নি এবং O(N) ক্রমে সমস্ত ডাটা স্ক্যান করতে হয়েছে।'
      }
    },
    {
      id: 'sql-idx-ex-2',
      kind: 'mcq',
      topic: 'composite-index-leftmost-prefix-rule',
      question: {
        en: 'Given a composite index on (department, salary), why will a query with WHERE salary > 50000 trigger a SCAN TABLE?',
        bn: '(department, salary) এর ওপর কম্পোজিট ইনডেক্স থাকা সত্ত্বেও WHERE salary > 50000 কোয়েরিটি কেন SCAN TABLE চালাবে?'
      },
      options: [
        {
          en: 'Because composite indexes strictly require the leftmost prefix column (department) to be present in the query filter',
          bn: 'কারণ কম্পোজিট ইনডেক্স কার্যকর হতে কোয়েরি ফিল্টারে অবশ্যই সর্ববামের কলামটি (department) উপস্থিত থাকতে হয়'
        },
        {
          en: 'Because salaries cannot be indexed in relational databases',
          bn: 'কারণ রিলেশনাল ডাটাবেসে বেতনের ওপর ইনডেক্স বসানো যায় না'
        },
        {
          en: 'Because SQLite only supports single-column indexes',
          bn: 'কারণ SQLite কেবল এক কলামের ইনডেক্স সমর্থন করে'
        },
        {
          en: 'Because numbers greater than 50000 require manual approval',
          bn: 'কারণ ৫০০০০ এর বড় সংখ্যার জন্য ম্যানুয়াল অনুমোদনের প্রয়োজন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Composite B-Trees are sorted by the first column first.',
        bn: 'কম্পোজিট B-Tree প্রথমে প্রথম কলামের ভিত্তিতে সাজানো থাকে।'
      },
      explanation: {
        en: 'A composite index is ordered by column 1, then column 2. Filtering without the leading column prevents binary tree searching.',
        bn: 'কম্পোজিট ইনডেক্স প্রথমে ১ম কলাম, তারপর ২য় কলাম দিয়ে সাজানো থাকে। প্রথম কলাম না দিলে ট্রি সার্চ কার্যকর হয় না।'
      }
    },
    {
      id: 'sql-idx-ex-3',
      kind: 'mcq',
      topic: 'covering-index-performance-gain',
      question: {
        en: 'What makes a covering index substantially faster than a regular secondary index during query execution?',
        bn: 'কোয়েরি এক্সিকিউশনের সময় একটি কভারিং ইনডেক্স কেন সাধারণ সেকেন্ডারি ইনডেক্সের চেয়ে উল্লেখযোগ্যভাবে দ্রুততর হয়?'
      },
      options: [
        {
          en: 'All requested columns exist within the index leaf itself, eliminating the need to visit the main table data pages via rowid lookups',
          bn: 'কোয়েরিতে চাওয়া সমস্ত কলাম সরাসরি ইনডেক্স পাতার ভেতরেই থাকে, ফলে rowid দিয়ে মূল টেবিলের পেজে পুনরায় যাওয়ার দরকার হয় না'
        },
        {
          en: 'It stores the entire database in CPU L1 hardware cache',
          bn: 'এটি সম্পূর্ণ ডাটাবেসকে সিপিইউর L1 হার্ডওয়্যার ক্যাশে জমা রাখে'
        },
        {
          en: 'It skips SQL syntax validation entirely',
          bn: 'এটি এসকিউএল সিনট্যাক্স যাচাই পুরোপুরি বাদ দিয়ে চলে'
        },
        {
          en: 'It deletes unselected columns from disk to save time',
          bn: 'এটি সময় বাঁচাতে বাকি কলামগুলো ডিস্ক থেকে মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A covering index satisfies the entire query without table lookups.',
        bn: 'কভারিং ইনডেক্স মূল টেবিলে না গিয়েই সম্পূর্ণ কোয়েরির উত্তর দিয়ে দেয়।'
      },
      explanation: {
        en: 'Covering indexes avoid the table lookup step. SQLite fulfills the entire query directly from index leaf pages.',
        bn: 'কভারিং ইনডেক্স মূল টেবিল লুকআপ এড়িয়ে চলে। সরাসরি ইনডেক্স পেজ থেকেই SQLite সমস্ত ফলাফল তৈরি করে নেয়।'
      }
    },
    {
      id: 'sql-idx-ex-4',
      kind: 'mcq',
      topic: 'partial-index-storage-efficiency',
      question: {
        en: 'When should an engineer create a partial index with CREATE INDEX ... WHERE condition instead of a full index?',
        bn: 'কখন একজন ইঞ্জিনিয়ারের সাধারণ পূর্ণাঙ্গ ইনডেক্সের বদলে CREATE INDEX ... WHERE শর্তযুক্ত পারশিয়াল ইনডেক্স তৈরি করা উচিত?'
      },
      options: [
        {
          en: 'When queries frequently filter on a small subset of rows (such as pending status), saving disk space and write overhead',
          bn: 'যখন কোয়েরিগুলো প্রায়শই অল্প কিছু নির্দিষ্ট সারির ওপর চলে (যেমন পেন্ডিং স্ট্যাটাস), ফলে ডিস্কের জায়গা ও লেখার চাপ অনেক কমে যায়'
        },
        {
          en: 'Only when the database contains fewer than 10 total records',
          bn: 'কেবল যখন ডাটাবেসে মোট ১০টির কম রেকর্ড থাকে'
        },
        {
          en: 'When running SQLite on a mobile phone without internet access',
          bn: 'ইন্টারনেট সংযোগ ছাড়া মোবাইল ফোনে SQLite চালানোর সময়'
        },
        {
          en: 'To prevent users from logging in on weekends',
          bn: 'সপ্তাহের ছুটির দিনে ব্যবহারকারীদের লগইন আটকাতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Partial indexes only index rows matching the predicate.',
        bn: 'পারশিয়াল ইনডেক্স কেবল শর্ত পূরণ করা সারির ইনডেক্স তৈরি করে।'
      },
      explanation: {
        en: 'Partial indexes store index entries only for rows satisfying the WHERE predicate, drastically reducing index size and write latency.',
        bn: 'পারশিয়াল ইনডেক্স কেবল নির্দিষ্ট শর্তের সারির ডাটা ইনডেক্স করে, ফলে ইনডেক্সের আকার ছোট হয় ও লেখার গতি বাড়ে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'SQLite B-Tree Indexing & Query Optimization Quiz',
      bn: 'SQLite B-Tree ইনডেক্সিং ও কোয়েরি অপ্টিমাইজেশন কুইজ'
    },
    questions: [
      {
        id: 'sql-idx-qz-1',
        kind: 'mcq',
        topic: 'use-temp-btree-for-order-by',
        question: {
          en: 'What does the message USE TEMP B-TREE FOR ORDER BY in EXPLAIN QUERY PLAN signify?',
          bn: 'EXPLAIN QUERY PLAN-এ USE TEMP B-TREE FOR ORDER BY মেসেজটি কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'SQLite could not use an index to satisfy the requested sort order, so it must allocate an in-memory temporary B-Tree to sort rows',
            bn: 'SQLite কাঙ্ক্ষিত সর্ট অর্ডারে কোনো ইনডেক্স পায়নি, তাই মেমরিতে অস্থায়ী B-Tree বানিয়ে রোগুলো সর্ট করতে বাধ্য হচ্ছে'
          },
          {
            en: 'The database is undergoing scheduled server maintenance',
            bn: 'ডাটাবেসটি নির্ধারিত সার্ভার মেইনটেন্যান্সে রয়েছে'
          },
          {
            en: 'The computer does not have enough storage space to display text',
            bn: 'কম্পিউটারে টেক্সট দেখানোর মতো পর্যাপ্ত স্টোরেজ নেই'
          },
          {
            en: 'The query executed at the speed of light',
            bn: 'কোয়েরিটি আলোর গতিতে সম্পন্ন হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sorting without an index forces an expensive temporary sort tree.',
          bn: 'ইনডেক্স ছাড়া সর্ট করতে গেলে বাড়তি মেমরি ট্রি লাগে।'
        },
        explanation: {
          en: 'An index on the ORDER BY column provides rows pre-sorted. Without it, SQLite creates a temporary B-Tree to perform an explicit sort.',
          bn: 'ORDER BY কলামে ইনডেক্স থাকলে ডাটা আগে থেকেই সাজানো থাকে। তা না থাকলে SQLite অস্থায়ী ট্রি বানিয়ে ম্যানুয়ালি সর্ট করে।'
        }
      },
      {
        id: 'sql-idx-qz-2',
        kind: 'mcq',
        topic: 'sqlite-stat4-analyze-command',
        question: {
          en: 'What is the operational effect of running the SQL command ANALYZE; in an SQLite database?',
          bn: 'একটি SQLite ডাটাবেসে ANALYZE; এসকিউএল কমান্ডটি চালানোর ব্যবহারিক ফলাফল কী?'
        },
        options: [
          {
            en: 'It scans indexes to generate distribution statistics in sqlite_stat1, helping the query planner make smarter index selection choices',
            bn: 'এটি ইনডেক্সগুলো স্ক্যান করে sqlite_stat1-এ পরিসংখ্যান তৈরি করে, যা কোয়েরি প্ল্যানারকে সেরা ইনডেক্স বেছে নিতে সাহায্য করে'
          },
          {
            en: 'It prints all passwords in plain text',
            bn: 'এটি সব পাসওয়ার্ড প্লেইন টেক্সটে প্রিন্ট করে'
          },
          {
            en: 'It formats the hard drive partition',
            bn: 'এটি হার্ডড্রাইভের পার্টিশন ফরম্যাট করে ফেলে'
          },
          {
            en: 'It rolls back all commits made in the last 24 hours',
            bn: 'এটি গত ২৪ ঘণ্টার সমস্ত কমিট বাতিল করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'ANALYZE gathers statistical histogram data for the optimizer.',
          bn: 'ANALYZE অপ্টিমাইজারের জন্য ডাটার বিন্যাস ও পরিসংখ্যান সংগ্রহ করে।'
        },
        explanation: {
          en: 'The ANALYZE command populates sqlite_stat1 with index distribution statistics, allowing the cost-based optimizer to pick optimal plans.',
          bn: 'ANALYZE কমান্ড sqlite_stat1 টেবিলে পরিসংখ্যান জমা করে, যার ফলে কস্ট-বেসড অপ্টিমাইজার নির্ভুলভাবে সঠিক প্ল্যান পছন্দ করে।'
        }
      },
      {
        id: 'sql-idx-qz-3',
        kind: 'mcq',
        topic: 'index-overhead-on-writes',
        question: {
          en: 'Why should database architects avoid creating unnecessary indexes on frequently updated tables in SQLite?',
          bn: 'SQLite-এ ঘন ঘন আপডেট হওয়া টেবিলে ডাটাবেস আর্কিটেক্টদের কেন অপ্রয়োজনীয় ইনডেক্স তৈরি করা এড়িয়ে চলা উচিত?'
        },
        options: [
          {
            en: 'Every INSERT, UPDATE, and DELETE must update each corresponding index B-Tree on disk, increasing write latency and page splits',
            bn: 'প্রতিটি INSERT, UPDATE ও DELETE অপারেশনের সময় সংশ্লিষ্ট সব ইনডেক্স B-Tree ডিস্কে আপডেট করতে হয়, যা লেখার সময় বাড়ায়'
          },
          {
            en: 'Indexes delete existing table rows automatically after 7 days',
            bn: 'ইনডেক্সগুলো ৭ দিন পর মূল টেবিলের রোগুলো স্বয়ংক্রিয়ভাবে মুছে দেয়'
          },
          {
            en: 'Because SQLite crashes if a table has more than 2 indexes',
            bn: 'কারণ টেবিলে ২টির বেশি ইনডেক্স থাকলে SQLite ক্র্যাশ করে'
          },
          {
            en: 'To make the source code easier to read',
            bn: 'সোর্স কোড পড়া সহজ করার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Indexes speed up reads but add a penalty to write mutations.',
          bn: 'ইনডেক্স পড়ার গতি বাড়ায় কিন্তু লেখার সময় বাড়তি চাপ ফেলে।'
        },
        explanation: {
          en: 'Index maintenance is not free. Every row modification requires writing to both the table B-Tree and all attached index B-Trees.',
          bn: 'ইনডেক্স আপডেট করতে সময় লাগে। প্রতিটি রো পরিবর্তনের সাথে সাথে টেবিল ও সব ইনডেক্স ট্রিতে আলাদাভাবে লিখতে হয়।'
        }
      },
      {
        id: 'sql-idx-qz-4',
        kind: 'mcq',
        topic: 'sqlite-automatic-indexes',
        question: {
          en: 'What is an automatic index (indicated by USE TEMP B-TREE FOR INDEX) in SQLite and why should it be eliminated?',
          bn: 'SQLite-এ অটোমেটিক ইনডেক্স (USE TEMP B-TREE FOR INDEX) কী এবং কেন এটি দূর করা উচিত?'
        },
        options: [
          {
            en: 'It is a temporary in-memory index built on the fly for an unindexed join query; creating a permanent index prevents this costly runtime rebuild',
            bn: 'এটি একটি সাময়িক ইনডেক্স যা ইনডেক্সহীন জয়েন কোয়েরির জন্য তাৎক্ষণিক তৈরি হয়; স্থায়ী ইনডেক্স বসালে প্রতিবার এই বাড়তি সময় নষ্ট হয় না'
          },
          {
            en: 'It is a virus that infects SQL statements',
            bn: 'এটি একটি ভাইরাস যা এসকিউএল কোডকে আক্রমণ করে'
          },
          {
            en: 'It is an operating system process that cannot be stopped',
            bn: 'এটি এমন একটি সিস্টেম প্রসেস যা কখনোই বন্ধ করা যায় না'
          },
          {
            en: 'It is a feature that only works on Apple hardware',
            bn: 'এটি এমন একটি সুবিধা যা কেবল অ্যাপল ডিভাইসে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Automatic indexes are transient workarounds created during query execution.',
          bn: 'অটোমেটিক ইনডেক্স হলো কোয়েরি চলার সময় তাৎক্ষণিক তৈরি হওয়া সাময়িক ব্যবস্থা।'
        },
        explanation: {
          en: 'If a join query lacks an index on the joined column, SQLite builds a temporary index on the fly. Adding a persistent index eliminates this overhead.',
          bn: 'জয়েন কলামে ইনডেক্স না থাকলে SQLite সাথে সাথে সাময়িক ইনডেক্স বানিয়ে নেয়। স্থায়ী ইনডেক্স দিলে প্রতিবারের এই বাড়তি অপচয় বন্ধ হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'txns-and-the-journal',
    title: {
      en: 'Transactions & Crash Durability: Rollback Journals vs WAL Mode',
      bn: 'ট্রানজ্যাকশন ও ক্র্যাশ স্থায়িত্ব: রোলব্যাক জার্নাল বনাম WAL মোড'
    }
  }
};
