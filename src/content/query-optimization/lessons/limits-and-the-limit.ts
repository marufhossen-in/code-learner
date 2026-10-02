import type { Lesson } from '../../../lib/types';

export const LimitsAndTheLimitLesson: Lesson = {
  slug: 'limits-and-the-limit',
  tech: 'query-optimization',
  title: {
    en: 'Pagination at Scale: Why OFFSET Destroys Performance and How Keyset Cursors Fix It',
    bn: 'স্কেলড পেজিনেশন: OFFSET কেন কর্মক্ষমতা ধ্বংস করে এবং কীভাবে কি-সেট কার্সার তা সমাধান করে'
  },
  summary: {
    en: 'Master high-performance database pagination. Discover why OFFSET N LIMIT K requires scanning and discarding N rows in O(N) time, the data drift bug with concurrent inserts, and how to implement O(1) keyset (seek/cursor) pagination with composite indexes.',
    bn: 'উচ্চগতির ডাটাবেস পেজিনেশন আয়ত্ত করুন। জানুন কেন OFFSET N LIMIT K তে O(N) সময়ে N সংখ্যক সারি স্ক্যান ও বাতিল করতে হয়, কনকারেন্ট ইনসার্টে ডাটা ড্রিফটের সমস্যা এবং কীভাবে কম্পোজিট ইনডেক্স ব্যবহার করে O(1) কি-সেট (সিক/কার্সার) পেজিনেশন তৈরি করতে হয়।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'offset-trap',
      text: {
        en: 'The OFFSET Performance Trap: Why Latency Grows Linearly O(N)',
        bn: 'OFFSET এর ফাঁদ: কেন কোয়েরি লেটেন্সি সরলরেখায় বৃদ্ধি পায়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every web application eventually needs pagination to display feeds, product listings, or transaction histories. In beginner SQL courses, developers learn to write LIMIT 20 OFFSET 40 to fetch page 3 of results. While this syntax works well for small prototype datasets, it becomes a severe performance bottleneck when tables grow to millions of rows.',
        bn: 'প্রতিটি ওয়েব অ্যাপ্লিকেশনেই ব্যবহারকারীর ফিড, পণ্যের তালিকা বা লেনদেনের ইতিহাস দেখানোর জন্য পেজিনেশন প্রয়োজন হয়। শিক্ষানবিস এসকিউএল কোর্সে ডেভেলপাররা ৩ নম্বর পেজের ডাটা আনতে LIMIT 20 OFFSET 40 লেখা শেখেন। ছোট প্রোটোটাইপ অ্যাপ্লিকেশনে এটি কাজ করলেও ডাটাবেসের টেবিল যখন লাখ লাখ সারিতে পৌঁছে যায়, তখন এটি মারাত্মক পারফরম্যান্স বিপর্যয় ডেকে আনে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The performance problem arises because relational databases do not store rows at fixed numeric offsets like memory arrays. To execute an offset query, the engine must scan, sort, and materialize all previous rows before throwing them away. An offset of 100000 rows forces the database to read 100020 rows from disk or cache just to deliver the final 20 rows.',
        bn: 'পারফরম্যান্স সমস্যাটি তৈরি হয় কারণ রিলেশনাল ডাটাবেস মেমরি অ্যারের মতো নির্দিষ্ট অফসেট ইনডেক্সে রো সংরক্ষণ করে না। অফসেট কোয়েরি চালাতে গিয়ে ইঞ্জিনকে আগের সমস্ত রো পড়ে ও সাজিয়ে মেমরিতে এনে তারপর ফেলে দিতে হয়। 100000 অফসেটের একটি কোয়েরি মাত্র শেষ 20টি সারি দেখানোর জন্য ডাটাবেসকে 100020টি রো ডিস্ক বা ক্যাশ থেকে পড়তে বাধ্য করে।'
      }
    },
    {
      type: 'diagram',
      id: 'pagination-comparison-diagram',
      caption: {
        en: 'Figure 1: Traditional OFFSET pagination vs Keyset Cursor navigation — linear O(N) waste vs constant O(1) B-Tree seek.',
        bn: 'চিত্র ১: সনাতন OFFSET পেজিনেশন বনাম কি-সেট কার্সার নেভিগেশন — O(N) অপচয় বনাম ধ্রুবক O(1) B-Tree সিক।'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="lmtHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#ef4444"/>
    </linearGradient>
    <linearGradient id="badPathGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#311010"/>
      <stop offset="100%" stop-color="#1c1917"/>
    </linearGradient>
    <linearGradient id="goodPathGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
    <marker id="badArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#ef4444"/>
    </marker>
    <marker id="goodArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#10b981"/>
    </marker>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#lmtHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">⚡</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">PAGINATION ARCHITECTURE COMPARISON</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">Traditional OFFSET N LIMIT K (O(N) Discard) vs Keyset Cursor (O(1) B-Tree Seek)</text>

  <!-- Lane 1: OFFSET Degradation (Top) -->
  <rect x="24" y="90" width="912" height="165" rx="10" fill="url(#badPathGrad)" stroke="#ef4444" stroke-width="1.5"/>
  <text x="44" y="118" fill="#ef4444" font-size="13" font-weight="bold">1. TRADITIONAL OFFSET / LIMIT: SELECT * FROM posts ORDER BY id LIMIT 20 OFFSET 100000;</text>

  <!-- The Discarded Stream -->
  <rect x="44" y="135" width="580" height="42" rx="6" fill="#450a0a" stroke="#7f1d1d"/>
  <text x="54" y="161" fill="#fca5a5" font-size="11">SCANNED &amp; DISCARDED IN MEMORY: 100,000 Rows (CPU &amp; Buffer Pool Waste)</text>

  <!-- The Kept Stream -->
  <rect x="635" y="135" width="120" height="42" rx="6" fill="#065f46" stroke="#059669"/>
  <text x="645" y="161" fill="#6ee7b7" font-size="11" font-weight="bold">RETURN: 20 Rows</text>

  <!-- Latency Box -->
  <rect x="765" y="135" width="155" height="42" rx="6" fill="#030712" stroke="#ef4444"/>
  <text x="775" y="161" fill="#f87171" font-size="11" font-weight="bold">Latency: ~8,500 ms</text>

  <text x="44" y="202" fill="#cbd5e1" font-size="10">• Algorithmic Complexity: O(N) — Every deeper page requires reading and sorting more disk blocks.</text>
  <text x="44" y="220" fill="#cbd5e1" font-size="10">• Data Drift Bug: Concurrent INSERTs push rows across offsets, causing DUPLICATE or SKIPPED items.</text>
  <text x="44" y="238" fill="#fca5a5" font-size="10">• Buffer Pool Pollution: Deep pagination evicts hot pages from shared_buffers, hurting all queries.</text>

  <!-- Lane 2: Keyset Cursor (Bottom) -->
  <rect x="24" y="275" width="912" height="185" rx="10" fill="url(#goodPathGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="44" y="303" fill="#34d399" font-size="13" font-weight="bold">2. KEYSET / SEEK CURSOR: SELECT * FROM posts WHERE id &gt; 100000 ORDER BY id LIMIT 20;</text>

  <!-- B-Tree Direct Seek -->
  <rect x="44" y="320" width="280" height="42" rx="6" fill="#064e3b" stroke="#047857"/>
  <text x="54" y="346" fill="#a7f3d0" font-size="11">B-Tree Seek: Jump to id &gt; 100000 in O(log N)</text>

  <!-- Instant Read -->
  <rect x="335" y="320" width="420" height="42" rx="6" fill="#022c22" stroke="#10b981"/>
  <text x="345" y="346" fill="#34d399" font-size="11" font-weight="bold">READ EXACTLY 20 LEAF NODES (0 Rows Discarded!)</text>

  <!-- Keyset Latency Box -->
  <rect x="765" y="320" width="155" height="42" rx="6" fill="#030712" stroke="#10b981"/>
  <text x="775" y="346" fill="#34d399" font-size="11" font-weight="bold">Latency: ~1.5 ms</text>

  <text x="44" y="388" fill="#cbd5e1" font-size="10">• Algorithmic Complexity: O(1) — Page 1, Page 500, and Page 10,000 all take the exact same 1.5ms.</text>
  <text x="44" y="406" fill="#cbd5e1" font-size="10">• Immunity to Drift: New rows inserted at the top do not shift the cursor boundary.</text>
  <text x="44" y="424" fill="#cbd5e1" font-size="10">• Composite Tie-Breaker: (created_at, id) ensures deterministic pagination across identical timestamps.</text>
  <text x="44" y="442" fill="#34d399" font-size="10">• Zero Cache Waste: Only requested 20 rows are touched in RAM.</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'data-drift',
      text: {
        en: 'The Data Drift Concurrency Bug: Duplicate and Missing Rows',
        bn: 'ডাটা ড্রিফট কনকারেন্সি বাগ: ডুপ্লিকেট ও মিসিং রো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In high-throughput applications, OFFSET pagination introduces subtle data integrity bugs that corrupt user experience. Imagine a user viewing Page 1 of recent activity. While reading, another user creates 3 new posts at the top of the feed.',
        bn: 'উচ্চ লোডের অ্যাপ্লিকেশনে OFFSET পেজিনেশন সূক্ষ্ম ডাটা ইন্টিগ্রিটি বাগ তৈরি করে ব্যবহারকারীর অভিজ্ঞতা নষ্ট করে। ধরা যাক একজন ব্যবহারকারী সাম্প্রতিক কার্যতালিকার ১ নম্বর পেজ দেখছেন। ঠিক সেই সময় অন্য একজন ব্যবহারকারী ফিডের শীর্ষে ৩টি নতুন পোস্ট যোগ করলেন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When the user navigates to Page 2 with an offset of 20, the 3 newly inserted posts push the bottom records of Page 1 into Page 2. The user sees duplicate rows that they already read. Conversely, if rows are deleted, items are silently skipped entirely.',
        bn: 'ব্যবহারকারী যখন ২০ অফসেট দিয়ে ২ নম্বর পেজে যান, তখন নতুন ৩টি পোস্ট ১ নম্বর পেজের শেষ ৩টি রো-কে ২ নম্বর পেজে ঠেলে দেয়। ফলে ব্যবহারকারী একই তথ্য আবার ডুপ্লিকেট হিসেবে দেখতে পান। একইভাবে ডাটা মুছে ফেলা হলে কিছু রো ব্যবহারকারীর চোখ এড়িয়ে পুরোপুরি বাদ পড়ে যায়।'
      }
    },
    {
      type: 'heading',
      id: 'keyset-pagination',
      text: {
        en: 'Keyset Pagination: The O(1) B-Tree Seek Solution',
        bn: 'কি-সেট পেজিনেশন: O(1) B-Tree সিকের স্থায়ী সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Keyset pagination, also known as Seek or Cursor pagination, eliminates both linear degradation and data drift. Instead of providing a numeric offset, the client remembers the last evaluated values of the sort key.',
        bn: 'কি-সেট পেজিনেশন, যা সিক বা কার্সার পেজিনেশন নামেও পরিচিত, লাইনার ধীরগতি এবং ডাটা ড্রিফট উভয় সমস্যার স্থায়ী সমাধান করে। কোনো গাণিতিক অফসেট দেওয়ার বদলে ক্লায়েন্ট আগের পেজের সর্বশেষ সর্ট কি মনে রাখে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To handle duplicate timestamps deterministically, a composite keyset pairing timestamp with a unique primary key is required. With an index on (created_at DESC, id DESC), the database seeks directly to the composite boundary without discarding a single row.',
        bn: 'একই টাইমে একাধিক ডাটা আসার সমস্যা এড়াতে টাইমেস্ট্যাম্পের সাথে ইউনিক প্রাইমারি কি মিলিয়ে একটি কম্পোজিট কি-সেট ব্যবহার করা হয়। (created_at DESC, id DESC) এর ওপর ইনডেক্স থাকলে ডাটাবেস সরাসরি নির্দিষ্ট কি-তে জাম্প করে এবং একটি রো-ও অপচয় করে না।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-pagination-sim',
      text: {
        en: 'Interactive Benchmark: OFFSET vs Keyset Scaling Simulator',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: OFFSET বনাম কি-সেট স্কেলিং সিমুলেশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'pagination-benchmark.ts',
      code: `// Pagination Benchmark: Linear OFFSET vs Constant Keyset Cursor
function simulatePagination() {
  const TOTAL_ROWS = 500000;
  const PAGE_SIZE = 20;

  console.log("=== PAGINATION SCALING ENGINE SIMULATION ===");
  console.log(\`Total Dataset: \${TOTAL_ROWS} records | Page Size: \${PAGE_SIZE} rows/page\`);

  const pagesToTest = [1, 100, 1000, 10000];

  console.log("\\n--- TRADITIONAL OFFSET / LIMIT (O(N) Degradation) ---");
  pagesToTest.forEach(page => {
    const offset = (page - 1) * PAGE_SIZE;
    const rowsRead = offset + PAGE_SIZE;
    const rowsDiscarded = offset;
    const estTimeMs = (0.05 + offset * 0.0004).toFixed(2);
    console.log(\`Page \${page} (OFFSET \${offset}): Read \${rowsRead} rows | Discarded \${rowsDiscarded} rows | Latency: ~\${estTimeMs} ms\`);
  });

  console.log("\\n--- KEYSET / CURSOR PAGINATION (O(1) B-Tree Seek) ---");
  pagesToTest.forEach(page => {
    const rowsRead = PAGE_SIZE;
    const rowsDiscarded = 0;
    const estTimeMs = (0.08).toFixed(2);
    console.log(\`Page \${page} (Cursor Seek): Read \${rowsRead} rows | Discarded \${rowsDiscarded} rows | Latency: ~\${estTimeMs} ms\`);
  });
}

simulatePagination();`
    },
    {
      type: 'terminal',
      id: 'pagination-output',
      cmd: 'npx tsx pagination-benchmark.ts',
      output: `=== PAGINATION SCALING ENGINE SIMULATION ===
Total Dataset: 500000 records | Page Size: 20 rows/page

--- TRADITIONAL OFFSET / LIMIT (O(N) Degradation) ---
Page 1 (OFFSET 0): Read 20 rows | Discarded 0 rows | Latency: ~0.05 ms
Page 100 (OFFSET 1980): Read 2000 rows | Discarded 1980 rows | Latency: ~0.84 ms
Page 1000 (OFFSET 19980): Read 20000 rows | Discarded 19980 rows | Latency: ~8.04 ms
Page 10000 (OFFSET 199980): Read 200000 rows | Discarded 199980 rows | Latency: ~80.04 ms

--- KEYSET / CURSOR PAGINATION (O(1) B-Tree Seek) ---
Page 1 (Cursor Seek): Read 20 rows | Discarded 0 rows | Latency: ~0.08 ms
Page 100 (Cursor Seek): Read 20 rows | Discarded 0 rows | Latency: ~0.08 ms
Page 1000 (Cursor Seek): Read 20 rows | Discarded 0 rows | Latency: ~0.08 ms
Page 10000 (Cursor Seek): Read 20 rows | Discarded 0 rows | Latency: ~0.08 ms`
    }
  ],
  exercises: [
    {
      id: 'qo-lmt-ex-1',
      kind: 'mcq',
      topic: 'deep-offset-row-overhead',
      question: {
        en: 'When executing OFFSET 100000 LIMIT 20 on an un-indexed table, how many total rows must the database engine read and process from storage?',
        bn: 'একটি ইনডেক্সবিহীন টেবিলে OFFSET 100000 LIMIT 20 কোয়েরি চালালে ডাটাবেস ইঞ্জিনকে স্টোরেজ থেকে মোট কতটি সারি পড়তে এবং প্রক্রিয়া করতে হয়?'
      },
      options: [
        {
          en: '100020 rows, because the engine must read and sort all 100000 offset rows before discarding them and returning the final 20 rows',
          bn: '100020 সারি, কারণ ইঞ্জিনকে প্রথম 100000 রো পড়ে ও সাজিয়ে বাতিল করতে হয় এবং এরপর শেষ 20 সারি পাঠাতে হয়'
        },
        {
          en: '20 rows, because relational databases jump directly to offset positions',
          bn: '২০টি সারি, কারণ ডাটাবেস সরাসরি অফসেট স্থানে চলে যায়'
        },
        {
          en: '100000 rows, because the LIMIT clause is executed separately on disk',
          bn: '১০০০০০ সারি, কারণ LIMIT ক্লজ আলাদাভাবে ডিস্কে চলে'
        },
        {
          en: '0 rows, because offset queries only read RAM memory',
          bn: '০টি সারি, কারণ অফসেট কেবল র‍্যামের ডাটা পড়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The database must read all 100000 offset rows before it can deliver the 20 requested rows.',
        bn: 'ডাটাবেসকে ২০টি রো ডেলিভারি দেওয়ার আগে আগের ১০০০০০ রো পড়তে হয়।'
      },
      explanation: {
        en: 'Relational tables do not have physical array offsets. The database reads 100000 rows, discards them in memory, and returns rows 100001 through 100020.',
        bn: 'ডাটাবেস টেবিলে কোনো নির্দিষ্ট অফসেট থাকে না। ইঞ্জিন ১০০০০০ রো পড়ে মেমরিতে তা বাতিল করে এবং ১০০০০১ থেকে ১০০০২০ পর্যন্ত রো আউটপুটে দেয়।'
      }
    },
    {
      id: 'qo-lmt-ex-2',
      kind: 'mcq',
      topic: 'data-drift-concurrency-bug',
      question: {
        en: 'A user views page 1 with 20 items. 3 new rows are inserted at the top. The user requests page 2 with OFFSET 20; what anomaly occurs?',
        bn: 'একজন ব্যবহারকারী 20টি আইটেমের পেজ 1 দেখছেন। শীর্ষে 3টি নতুন সারি ইনসার্ট হলো। এরপর ব্যবহারকারী OFFSET 20 দিয়ে পেজ 2 চাইলেন; কী ত্রুটি ঘটবে?'
      },
      options: [
        {
          en: 'The user sees the last 3 items from page 1 repeated on page 2 because the new rows shifted them across the offset boundary',
          bn: 'ব্যবহারকারী পেজ ১-এর শেষ ৩টি আইটেম পেজ ২-এ পুনরায় ডুপ্লিকেট হিসেবে দেখতে পান কারণ নতুন রো-গুলো ডাটাকে নিচে ঠেলে দিয়েছে'
        },
        {
          en: 'The database server crashes immediately',
          bn: 'ডাটাবেস সার্ভার সাথে সাথে বন্ধ হয়ে যায়'
        },
        {
          en: 'All 20 items on page 2 are replaced with null values',
          bn: 'পেজ ২-এর সমস্ত ২০টি আইটেম নাল মান দিয়ে পূর্ণ হয়'
        },
        {
          en: 'Nothing changes and the user receives perfectly isolated data',
          bn: 'কিছুই পরিবর্তন হয় না এবং ব্যবহারকারী অবিকল ডাটা পান'
        }
      ],
      answer: 0,
      hint: {
        en: 'The 3 new rows shift existing rows down by 3 positions.',
        bn: '৩টি নতুন রো আগের রো-গুলোকে ৩ ধাপ নিচে ঠেলে দেয়।'
      },
      explanation: {
        en: 'When 3 rows are inserted, old rows 18, 19, and 20 become rows 21, 22, and 23. Requesting OFFSET 20 returns rows 21-40, duplicating rows 18-20.',
        bn: '৩টি নতুন রো এলে পুরোনো ১৮, ১৯ ও ২০ নম্বর রো ২১, ২২ ও ২৩ নম্বরে চলে যায়। ফলে OFFSET ২০ এর পর সেগুলো আবার দেখা যায়।'
      }
    },
    {
      id: 'qo-lmt-ex-3',
      kind: 'mcq',
      topic: 'composite-keyset-tie-breaker',
      question: {
        en: 'When paginating by created_at DESC where multiple rows can have identical timestamps, why is a composite cursor (created_at, id) mandatory?',
        bn: 'created_at DESC দিয়ে পেজিনেশন করার সময় একাধিক রো-তে একই সময় থাকতে পারলে কেন একটি কম্পোজিট কার্সার (created_at, id) বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'The unique primary key id acts as a deterministic tie-breaker, guaranteeing no rows sharing the exact same timestamp are skipped or duplicated',
          bn: 'ইউনিক প্রাইমারি কি id টাই-ব্রেকার হিসেবে কাজ করে, যা নিশ্চিত করে যে একই সময়ের কোনো রো বাদ পড়বে না বা ডুপ্লিকেট হবে না'
        },
        {
          en: 'Because PostgreSQL does not allow single-column indexes on timestamps',
          bn: 'কারণ পোস্টগ্রেসকুয়েল টাইমেস্ট্যাম্পে একক কলাম ইনডেক্স করতে দেয় না'
        },
        {
          en: 'To make the database execute an external merge sort on disk',
          bn: 'ডাটাবেসকে ডিস্কে এক্সটার্নাল মার্জ সর্ট চালাতে বাধ্য করতে'
        },
        {
          en: 'Because primary keys cannot be used in WHERE clauses',
          bn: 'কারণ প্রাইমারি কি কখনো WHERE ক্লজে ব্যবহার করা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'If you only filter by created_at < last_timestamp, all rows sharing that timestamp are skipped.',
        bn: 'যদি কেবল created_at < last_timestamp দেওয়া হয়, তবে সেই টাইমের বাকি রো-গুলো বাদ পড়ে যাবে।'
      },
      explanation: {
        en: 'Pairing (created_at, id) produces a strictly unique ordering. The engine seeks directly to the exact tuple boundary without ambiguity.',
        bn: '(created_at, id) ব্যবহার করলে একটি ইউনিক ক্রম তৈরি হয়। ইঞ্জিন কোনো বিভ্রান্তি ছাড়াই নির্দিষ্ট রো-তে সিক করতে পারে।'
      }
    },
    {
      id: 'qo-lmt-ex-4',
      kind: 'mcq',
      topic: 'composite-index-keyset-cursor',
      question: {
        en: 'Which index definition provides optimal support for: WHERE tenant_id = 5 AND created_at < cursor ORDER BY created_at DESC LIMIT 20?',
        bn: 'WHERE tenant_id = 5 AND created_at < cursor ORDER BY created_at DESC LIMIT 20 কোয়েরির জন্য কোন ইনডেক্সটি সর্বোত্তম পারফরম্যান্স দেবে?'
      },
      options: [
        {
          en: 'CREATE INDEX idx_tenant_created ON table (tenant_id, created_at DESC)',
          bn: 'CREATE INDEX idx_tenant_created ON table (tenant_id, created_at DESC)'
        },
        {
          en: 'CREATE INDEX idx_only_id ON table (id)',
          bn: 'CREATE INDEX idx_only_id ON table (id)'
        },
        {
          en: 'CREATE INDEX idx_reverse ON table (created_at ASC)',
          bn: 'CREATE INDEX idx_reverse ON table (created_at ASC)'
        },
        {
          en: 'No index is required because OFFSET is faster than indexes',
          bn: 'কোনো ইনডেক্সের দরকার নেই কারণ অফসেট ইনডেক্সের চেয়ে দ্রুত'
        }
      ],
      answer: 0,
      hint: {
        en: 'The equality filter on tenant_id should come first, followed by the sorting/range column created_at DESC.',
        bn: 'সমান চিহ্নের tenant_id আগে আসবে এবং এরপর সর্ট কলাম created_at DESC বসবে।'
      },
      explanation: {
        en: 'A composite index on (tenant_id, created_at DESC) allows the engine to jump directly to tenant 5 and immediately stream rows backward in O(1) time.',
        bn: '(tenant_id, created_at DESC) এর ওপর কম্পোজিট ইনডেক্স থাকলে ইঞ্জিন সরাসরি tenant ৫-এ গিয়ে সাথে সাথে O(1) সময়ে রো ফেরত দেয়।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'High-Performance Pagination & Keyset Cursors Quiz',
      bn: 'হাই-পারফরম্যান্স পেজিনেশন ও কি-সেট কার্সার কুইজ'
    },
    questions: [
      {
        id: 'qo-lmt-qz-1',
        kind: 'mcq',
        topic: 'offset-complexity-nature',
        question: {
          en: 'What is the algorithmic time complexity of executing an offset query with OFFSET N LIMIT K?',
          bn: 'OFFSET N LIMIT K কোয়েরি সম্পাদনের অ্যালগরিদমিক সময় জটিলতা (time complexity) কত?'
        },
        options: [
          {
            en: 'O(N), because the database engine must inspect and discard all N previous rows before returning the K rows',
            bn: 'O(N), কারণ K সংখ্যক রো ফেরত দেওয়ার আগে ডাটাবেস ইঞ্জিনকে পূর্ববর্তী N সংখ্যক রো স্ক্যান ও বাতিল করতে হয়'
          },
          {
            en: 'O(1), because the database jumps directly to row N in constant time',
            bn: 'O(1), কারণ ডাটাবেস ধ্রুবক সময়ে সরাসরি N নম্বর রো-তে চলে যায়'
          },
          {
            en: 'O(log N), because all database tables are stored as binary search trees',
            bn: 'O(log N), কারণ সমস্ত টেবিল বাইনারি সার্চ ট্রি হিসেবে থাকে'
          },
          {
            en: 'O(N squared), because offset queries always run quadratic nested loops',
            bn: 'O(N squared), কারণ অফসেট কোয়েরি সবসময় চতুর্ঘাতীয় লুপ চালায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The engine must traverse every preceding tuple before reaching the offset boundary.',
          bn: 'অফসেট সীমায় পৌঁছানোর আগে ইঞ্জিনকে পূর্বের প্রতিটি রো অতিক্রম করতে হয়।'
        },
        explanation: {
          en: 'Because rows have variable byte lengths and are distributed across 8KB pages, the engine must iterate through all N rows to locate the starting tuple.',
          bn: 'রো-গুলোর দৈর্ঘ্য আলাদা এবং ৮KB পেজে ছড়িয়ে থাকায় শুরু বিন্দু খুঁজে পেতে ইঞ্জিনকে পুরো N সংখ্যক রো ঘুরে আসতে হয়।'
        }
      },
      {
        id: 'qo-lmt-qz-2',
        kind: 'mcq',
        topic: 'cursor-constant-speed',
        question: {
          en: 'Why does keyset cursor pagination maintain near-constant O(1) response times regardless of whether the user is on page 1 or page 10000?',
          bn: 'কি-সেট কার্সার পেজিনেশন ব্যবহার করলে ব্যবহারকারী পেজ 1 বা পেজ 10000 যেখানেই থাকুক না কেন কেন প্রায় ধ্রুবক O(1) সময় বজায় থাকে?'
        },
        options: [
          {
            en: 'The B-Tree index performs a direct O(log N) seek directly to the cursor key and immediately reads only the next 20 leaf entries',
            bn: 'B-Tree ইনডেক্স সরাসরি O(log N) সময়ে কার্সার কিতে সিক করে এবং সাথে সাথে কেবল পরবর্তী ২০টি লিফ এন্ট্রি পড়ে নেয়'
          },
          {
            en: 'Because keyset pagination deletes all previous pages from disk',
            bn: 'কারণ কি-সেট পেজিনেশন আগের সমস্ত পেজ ডিস্ক থেকে মুছে ফেলে'
          },
          {
            en: 'Because keyset pagination loads the entire table into browser memory',
            bn: 'কারণ কি-সেট পেজিনেশন পুরো টেবিল ব্রাউজারের মেমরিতে লোড করে'
          },
          {
            en: 'Because the database bypasses SQL parsing for cursor queries',
            bn: 'কারণ ডাটাবেস কার্সার কোয়েরির জন্য এসকিউএল পার্সিং বাদ দিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'B-Tree indexes allow instant point lookups on range boundaries.',
          bn: 'B-Tree ইনডেক্স রেঞ্জ সীমানায় তাৎক্ষণিক পয়েন্ট লুকআপ করতে পারে।'
        },
        explanation: {
          en: 'B-Tree depth is typically 3-4 levels. The engine navigates to the cursor key in microseconds and reads only the requested LIMIT tuples.',
          bn: 'B-Tree এর গভীরতা সাধারণত ৩-৪ লেভেল হয়। ইঞ্জিন মাইক্রোসেকেন্ডে কার্সার কি খুঁজে নিয়ে ঠিক প্রয়োজনীয় রো-গুলো পড়ে ফেলে।'
        }
      },
      {
        id: 'qo-lmt-qz-3',
        kind: 'mcq',
        topic: 'keyset-tradeoff-jumping',
        question: {
          en: 'What is the primary architectural trade-off when adopting keyset cursor pagination over OFFSET pagination?',
          bn: 'OFFSET পেজিনেশনের বদলে কি-সেট কার্সার পেজিনেশন গ্রহণের প্রধান স্থাপত্যগত অসুবিধা বা সীমাবদ্ধতা কী?'
        },
        options: [
          {
            en: 'Users cannot directly jump to arbitrary page numbers (e.g. Jump directly to Page 45) without evaluating intermediate cursors',
            bn: 'মাঝের কার্সার না দেখে ব্যবহারকারী সরাসরি যেকোনো পেজ নম্বরে (যেমন সরাসরি ৪৫ নম্বর পেজে) লাফ দিতে পারেন না'
          },
          {
            en: 'It makes database backups impossible to create',
            bn: 'এতে ডাটাবেস ব্যাকআপ তৈরি করা অসম্ভব হয়ে পড়ে'
          },
          {
            en: 'It requires converting the entire database to NoSQL',
            bn: 'এতে পুরো ডাটাবেস নো-এসকিউএলে রূপান্তর করতে হয়'
          },
          {
            en: 'It disables all WHERE clauses across the entire table',
            bn: 'এটি পুরো টেবিলের সমস্ত WHERE শর্ত অকেজো করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Keyset navigation relies on knowing the last seen item from the previous page.',
          bn: 'কি-সেট নেভিগেশন আগের পেজের সর্বশেষ আইটেমের মানের ওপর নির্ভরশীল।'
        },
        explanation: {
          en: 'Because keyset pagination requires the boundary key of the prior page, it is ideal for infinite scroll and Next/Prev feeds, but cannot jump to page 80 directly.',
          bn: 'যেহেতু কি-সেট আগের পেজের শেষ কি চায়, তাই এটি ইনফিনিট স্ক্রল এবং Next/Prev ফিডের জন্য আদর্শ, কিন্তু সরাসরি ৮০ নম্বর পেজে লাফ দেওয়া যায় না।'
        }
      },
      {
        id: 'qo-lmt-qz-4',
        kind: 'mcq',
        topic: 'base64-api-token-encoding',
        question: {
          en: 'Why do modern production REST and GraphQL APIs encode keyset cursor values into opaque Base64 strings in API responses?',
          bn: 'আধুনিক প্রোডাকশন REST এবং GraphQL API-গুলো কেন প্রতিক্রিয়ায় কি-সেট কার্সারের মানগুলোকে অস্বচ্ছ Base64 স্ট্রিংয়ে এনকোড করে পাঠায়?'
        },
        options: [
          {
            en: 'To hide internal database schema details and prevent client applications from tampering with sort keys and boundary conditions',
            bn: 'অভ্যন্তরীণ ডাটাবেস স্কিমার বিশদ গোপন রাখতে এবং ক্লায়েন্ট যেন সর্ট কি ও সীমানা পরিবর্তন করতে না পারে তা নিশ্চিত করতে'
          },
          {
            en: 'Because HTTP headers only support 7-bit binary Morse code',
            bn: 'কারণ এইচটিটিপি হেডার কেবল ৭-বিট বাইনারি মোর্স কোড সমর্থন করে'
          },
          {
            en: 'To automatically translate database column names into Spanish',
            bn: 'ডাটাবেস কলামের নাম স্বয়ংক্রিয়ভাবে স্প্যানিশ ভাষায় অনুবাদ করার জন্য'
          },
          {
            en: 'Because JSON cannot serialize numeric integer IDs',
            bn: 'কারণ জেএসন পূর্ণসংখ্যা আইডি সিরিয়ালাইজ করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Opaque cursors abstract away implementation details from public API consumers.',
          bn: 'অস্বচ্ছ কার্সার বাইরের ক্লায়েন্টের কাছ থেকে ডাটাবেসের অভ্যন্তরীণ রূপ লুকিয়ে রাখে।'
        },
        explanation: {
          en: 'An opaque Base64 token encapsulates fields like timestamp and ID. It prevents clients from depending on internal columns and allows backend index adjustments without breaking clients.',
          bn: 'Base64 টোকেন টাইম এবং আইডিকে এনক্যাপসুলেট করে। এটি ক্লায়েন্টকে ভেতরের কলামের ওপর নির্ভরশীল হতে দেয় না, ফলে ব্যাকএন্ড পরিবর্তন করা সহজ হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-query-release',
    title: {
      en: 'Production Capstone: Query Anti-Patterns & Hardening',
      bn: 'প্রোডাকশন ক্যাপস্টোন: কোয়েরি অ্যান্টি-প্যাটার্ন ও হার্ডেনিং'
    }
  }
};
