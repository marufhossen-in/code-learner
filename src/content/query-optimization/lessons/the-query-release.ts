import type { Lesson } from '../../../lib/types';

export const TheQueryReleaseLesson: Lesson = {
  slug: 'the-query-release',
  tech: 'query-optimization',
  title: {
    en: 'Production Capstone: Query Anti-Patterns, SARGability & Hardening',
    bn: 'প্রোডাকশন ক্যাপস্টোন: কোয়েরি অ্যান্টি-প্যাটার্ন, SARGability ও হার্ডেনিং'
  },
  summary: {
    en: 'Complete the query optimization capstone. Eliminate fatal production anti-patterns: un-SARGable column transformations, SELECT *, the N+1 query trap, leading wildcard LIKE searches, and configure statement timeouts and pg_stat_statements.',
    bn: 'কোয়েরি অপ্টিমাইজেশন ক্যাপস্টোন সম্পন্ন করুন। প্রোডাকশনের মারাত্মক অ্যান্টি-প্যাটার্ন দূর করুন: আন-সারগেবল কলাম রূপান্তর, SELECT *, N+1 কোয়েরির ফাঁদ, শুরুর ওয়াইল্ডকার্ড LIKE সার্চ এবং statement_timeout ও pg_stat_statements কনফিগারেশন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'capstone-anti-patterns',
      text: {
        en: 'The Final Frontier: Eliminating Production Query Anti-Patterns',
        bn: 'চূড়ান্ত ধাপ: প্রোডাকশন কোয়েরি অ্যান্টি-প্যাটার্ন দূরীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every database optimization strategy culminates in production reliability. You can design normalized schemas, build composite B-Tree indexes, and tune buffer pools, but a single poorly written SQL anti-pattern can still exhaust server resources and take down an entire system.',
        bn: 'ডাটাবেস অপ্টিমাইজেশনের প্রতিটি কৌশলের মূল লক্ষ্য হলো প্রোডাকশন নির্ভরযোগ্যতা অর্জন করা। আপনি একটি নিখুঁত নরমালাইজড স্কিমা তৈরি করতে পারেন, কম্পোজিট ইনডেক্স বসাতে পারেন এবং বাফার পুল টিউন করতে পারেন, কিন্তু একটিমাত্র ক্ষতিকর এসকিউএল অ্যান্টি-প্যাটার্ন সার্ভারের সমস্ত রিসোর্স দখল করে পুরো সিস্টেম অচল করে দিতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this capstone lesson, we dismantle the four most destructive query anti-patterns encountered in production environments: un-SARGable functional predicates, SELECT star over-fetching, ORM N+1 query loops, and leading wildcard substring searches.',
        bn: 'এই ক্যাপস্টোন পাঠে আমরা প্রোডাকশন পরিবেশে দেখা যাওয়া ৪টি সবচেয়ে ক্ষতিকর কোয়েরি অ্যান্টি-প্যাটার্ন দূর করব: আন-সারগেবল ফাংশনাল শর্ত, SELECT স্টার দিয়ে অপ্রয়োজনীয় ডাটা আনা, ওআরএম-এর N+1 কোয়েরি লুপ এবং শুরুর ওয়াইল্ডকার্ড সাবস্ট্রিং সার্চ।'
      }
    },
    {
      type: 'diagram',
      id: 'capstone-hardening-diagram',
      caption: {
        en: 'Figure 1: Production query optimization matrix — anti-pattern pitfalls vs hardened engineering architectures.',
        bn: 'চিত্র ১: প্রোডাকশন কোয়েরি অপ্টিমাইজেশন ম্যাট্রিক্স — অ্যান্টি-প্যাটার্ন বিপদ বনাম সুরক্ষিত ইঞ্জিনিয়ারিং আর্কিটেকচার।'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="capHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#10b981"/>
      <stop offset="100%" stop-color="#6366f1"/>
    </linearGradient>
    <linearGradient id="badColGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#311010"/>
      <stop offset="100%" stop-color="#180a0a"/>
    </linearGradient>
    <linearGradient id="goodColGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#capHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">🛡️</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">PRODUCTION QUERY OPTIMIZATION CAPSTONE</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">SARGability, Covering Indexes, N+1 Elimination, and Database Hardening Rails</text>

  <!-- Left Column: Anti-Patterns (Red) -->
  <rect x="24" y="90" width="446" height="370" rx="10" fill="url(#badColGrad)" stroke="#ef4444" stroke-width="1.5"/>
  <text x="44" y="118" fill="#f87171" font-size="13" font-weight="bold">FATAL PRODUCTION ANTI-PATTERNS</text>

  <!-- Anti 1: Un-SARGable Function -->
  <rect x="40" y="132" width="414" height="68" rx="6" fill="#1c0b0b" stroke="#7f1d1d"/>
  <text x="52" y="152" fill="#ef4444" font-size="11" font-weight="bold">1. Un-SARGable Function Wrapping:</text>
  <text x="52" y="170" fill="#fca5a5" font-size="10">WHERE DATE(created_at) = '2026-09-30'</text>
  <text x="52" y="186" fill="#cbd5e1" font-size="10">• Destroys B-Tree seek; forces 100% full table Seq Scan!</text>

  <!-- Anti 2: SELECT * -->
  <rect x="40" y="210" width="414" height="68" rx="6" fill="#1c0b0b" stroke="#7f1d1d"/>
  <text x="52" y="230" fill="#ef4444" font-size="11" font-weight="bold">2. SELECT * (Over-Fetching):</text>
  <text x="52" y="248" fill="#fca5a5" font-size="10">SELECT * FROM orders WHERE tenant_id = 99</text>
  <text x="52" y="264" fill="#cbd5e1" font-size="10">• Breaks Index-Only Scans; reads all heap table blocks from disk.</text>

  <!-- Anti 3: N+1 Loop -->
  <rect x="40" y="288" width="414" height="68" rx="6" fill="#1c0b0b" stroke="#7f1d1d"/>
  <text x="52" y="308" fill="#ef4444" font-size="11" font-weight="bold">3. ORM N+1 Query Loop:</text>
  <text x="52" y="326" fill="#fca5a5" font-size="10">100 users -&gt; 101 separate database roundtrips</text>
  <text x="52" y="342" fill="#cbd5e1" font-size="10">• Exceeds connection pools; 200ms+ network idle latency.</text>

  <!-- Anti 4: Unbounded Runaways -->
  <rect x="40" y="366" width="414" height="80" rx="6" fill="#1c0b0b" stroke="#7f1d1d"/>
  <text x="52" y="386" fill="#ef4444" font-size="11" font-weight="bold">4. Missing Safety Timeouts:</text>
  <text x="52" y="404" fill="#fca5a5" font-size="10">statement_timeout = 0 (Unlimited!)</text>
  <text x="52" y="420" fill="#cbd5e1" font-size="10">• A runaway query holds locks for hours, freezing web requests.</text>

  <!-- Right Column: Hardened Engineering (Green) -->
  <rect x="490" y="90" width="446" height="370" rx="10" fill="url(#goodColGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="510" y="118" fill="#34d399" font-size="13" font-weight="bold">HARDENED PRODUCTION ARCHITECTURE</text>

  <!-- Fix 1: SARGable Range -->
  <rect x="506" y="132" width="414" height="68" rx="6" fill="#04271d" stroke="#047857"/>
  <text x="518" y="152" fill="#10b981" font-size="11" font-weight="bold">1. SARGable Half-Open Range:</text>
  <text x="518" y="170" fill="#a7f3d0" font-size="10">WHERE created_at &gt;= '2026-09-30' AND created_at &lt; '2026-10-01'</text>
  <text x="518" y="186" fill="#cbd5e1" font-size="10">• B-Tree direct index range seek; finishes in 0.4ms!</text>

  <!-- Fix 2: Covering Index -->
  <rect x="506" y="210" width="414" height="68" rx="6" fill="#04271d" stroke="#047857"/>
  <text x="518" y="230" fill="#10b981" font-size="11" font-weight="bold">2. Covering Index-Only Scan:</text>
  <text x="518" y="248" fill="#a7f3d0" font-size="10">SELECT id, status FROM orders ... (Index covers all cols)</text>
  <text x="518" y="264" fill="#cbd5e1" font-size="10">• Zero heap disk reads; 100% served directly from RAM.</text>

  <!-- Fix 3: Batched JOIN -->
  <rect x="506" y="288" width="414" height="68" rx="6" fill="#04271d" stroke="#047857"/>
  <text x="518" y="308" fill="#10b981" font-size="11" font-weight="bold">3. Batched INNER JOIN / DataLoader:</text>
  <text x="518" y="326" fill="#a7f3d0" font-size="10">1 single query joins users with orders via Hash Join</text>
  <text x="518" y="342" fill="#cbd5e1" font-size="10">• 1 network roundtrip; sub-3ms execution time.</text>

  <!-- Fix 4: Safety Rails -->
  <rect x="506" y="366" width="414" height="80" rx="6" fill="#04271d" stroke="#047857"/>
  <text x="518" y="386" fill="#10b981" font-size="11" font-weight="bold">4. Strict Production Safety Rails:</text>
  <text x="518" y="404" fill="#a7f3d0" font-size="10">statement_timeout = '15s' | lock_timeout = '2s'</text>
  <text x="518" y="420" fill="#cbd5e1" font-size="10">• pg_stat_statements tracks slowest queries automatically.</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'sargability-rules',
      text: {
        en: 'SARGability: How to Write Predicates That Enable Index Seeks',
        bn: 'SARGability: ইনডেক্স সিক সক্ষম করার মতো শর্ত লেখার নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A query predicate is SARGable (Search Argument Able) when the database optimizer can use an existing B-Tree index to perform a direct index seek. When you wrap an indexed column inside a function or mathematical operation, the index becomes unusable.',
        bn: 'একটি কোয়েরির শর্ত তখনই SARGable (Search Argument Able) হয় যখন ডাটাবেস অপ্টিমাইজার সরাসরি ইনডেক্স সিক চালাতে পারে। কিন্তু যখনই আপনি ইনডেক্স করা কোনো কলামকে কোনো ফাংশন বা গাণিতিক অপারেশনের মধ্যে আবদ্ধ করেন, তখন ইনডেক্সটি পুরোপুরি অকেজো হয়ে যায়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Un-SARGable: WHERE UPPER(email) = user@example.com forces a full table scan. Fix: Use a functional index on UPPER(email) or store normalized lowercase strings.',
          bn: 'আন-সারগেবল: WHERE UPPER(email) = user@example.com পুরো টেবিল স্ক্যান করতে বাধ্য করে। সমাধান: UPPER(email)-এর ওপর ফাংশনাল ইনডেক্স তৈরি করুন।'
        },
        {
          en: 'Un-SARGable: WHERE DATE(created_at) = 2026-09-30 destroys index seeks. Fix: Use a half-open range WHERE created_at >= 2026-09-30 AND created_at < 2026-10-01.',
          bn: 'আন-সারগেবল: WHERE DATE(created_at) = 2026-09-30 ইনডেক্স সিক বন্ধ করে দেয়। সমাধান: WHERE created_at >= 2026-09-30 AND created_at < 2026-10-01 হাফ-ওপেন রেঞ্জ ব্যবহার করুন।'
        },
        {
          en: 'Un-SARGable: WHERE username LIKE %john forces an un-indexed scan because B-Trees sort prefixes. Fix: Use pg_trgm trigram GIN indexes for substring search.',
          bn: 'আন-সারগেবল: WHERE username LIKE %john ইনডেক্সহীন স্ক্যান চালায় কারণ B-Tree প্রিফিক্স অনুসারে সাজায়। সমাধান: সাবস্ট্রিং সার্চের জন্য pg_trgm ট্রাইগ্রাম GIN ইনডেক্স ব্যবহার করুন।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'orm-n-plus-one',
      text: {
        en: 'The ORM N+1 Query Trap and How to Eradicate It',
        bn: 'ORM N+1 কোয়েরির ফাঁদ এবং তা পুরোপুরি নির্মূল করার উপায়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Object-Relational Mappers (ORMs) provide elegant syntax but frequently generate devastating N+1 query patterns. If you fetch 100 users and lazily load their orders in a loop, your application issues 1 query for users plus 100 queries for orders, generating 101 separate network calls.',
        bn: 'অবজেক্ট-রিলেশনাল ম্যাপার (ORM) চমৎকার সিনট্যাক্স দিলেও প্রায়ই মারাত্মক N+1 কোয়েরি সমস্যা তৈরি করে। আপনি যদি ১০০ জন ব্যবহারকারী এনে লুপের মধ্যে তাদের অর্ডার লোড করেন, তবে অ্যাপ্লিকেশন ১টি ইউজার কোয়েরি এবং ১০০টি আলাদা অর্ডার কোয়েরি পাঠিয়ে মোট ১০১টি নেটওয়ার্ক রিকোয়েস্ট তৈরি করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In production with 2ms database ping times, 100 sequential roundtrips introduce 200ms of completely idle latency. This can be eradicated using eager loading with an INNER JOIN, a batched WHERE id IN clause, or a GraphQL DataLoader.',
        bn: 'প্রোডাকশনে ডাটাবেসে ২ms পিং সময় থাকলে ১০০টি ধারাবাহিক রাউন্ডট্রিপ ২০০ms অলস বিলম্ব তৈরি করে। একটিমাত্র INNER JOIN, ব্যাচড WHERE id IN শর্ত অথবা গ্রাফকিউএল ডেটালোডার ব্যবহার করে এই সমস্যা পুরোপুরি দূর করা সম্ভব।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-capstone-suite',
      text: {
        en: 'Interactive Benchmark: Production Optimization & Hardening Suite',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: প্রোডাকশন অপ্টিমাইজেশন ও হার্ডেনিং স্যুট'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'production-hardening-suite.ts',
      code: `// Production Query Optimization Capstone Benchmark
function runCapstoneBenchmark() {
  console.log("=== PRODUCTION QUERY OPTIMIZATION CAPSTONE ===");

  // 1. SARGability Benchmark
  console.log("\\n1. SARGability Diagnostic:");
  console.log("   Un-SARGable: WHERE DATE(created_at) = '2026-09-30' -> Seq Scan (1000000 rows scanned, 420 ms)");
  console.log("   SARGable Fix: WHERE created_at >= '2026-09-30' AND created_at < '2026-10-01' -> Index Range Scan (120 rows, 0.4 ms)");

  // 2. Projection & Covering Index Benchmark
  console.log("\\n2. Covering Index vs SELECT *:");
  console.log("   SELECT * -> Heap Table Read (1200 disk blocks read, 14.2 ms)");
  console.log("   SELECT id, status -> Index Only Scan (0 heap blocks, 100% RAM leaf hits, 0.6 ms)");

  // 3. ORM N+1 Query Resolution
  const USERS_COUNT = 100;
  const N_PLUS_ONE_QUERIES = USERS_COUNT + 1;
  const LATENCY_PER_QUERY_MS = 2.0;
  const totalNPlusOneTimeMs = (N_PLUS_ONE_QUERIES * LATENCY_PER_QUERY_MS).toFixed(0);
  console.log(\`\\n3. ORM N+1 Resolution (\${USERS_COUNT} records):\`);
  console.log(\`   N+1 Pattern: \${N_PLUS_ONE_QUERIES} separate network queries -> ~\${totalNPlusOneTimeMs} ms network idle latency\`);
  console.log(\`   Batched JOIN: 1 query with INNER JOIN -> ~\${(LATENCY_PER_QUERY_MS * 1.5).toFixed(1)} ms total\`);

  // 4. Production Safety Rails
  console.log("\\n4. Hardening Configuration:");
  console.log("   statement_timeout = '15s' (Kills runaway long-running transactions)");
  console.log("   lock_timeout = '2s' (Prevents DDL migration deadlocks from blocking web traffic)");
  console.log("   pg_stat_statements = active (Logging top 10 slowest queries by total execution time)");
}

runCapstoneBenchmark();`
    },
    {
      type: 'terminal',
      id: 'capstone-output',
      cmd: 'npx tsx production-hardening-suite.ts',
      output: `=== PRODUCTION QUERY OPTIMIZATION CAPSTONE ===

1. SARGability Diagnostic:
   Un-SARGable: WHERE DATE(created_at) = '2026-09-30' -> Seq Scan (1000000 rows scanned, 420 ms)
   SARGable Fix: WHERE created_at >= '2026-09-30' AND created_at < '2026-10-01' -> Index Range Scan (120 rows, 0.4 ms)

2. Covering Index vs SELECT *:
   SELECT * -> Heap Table Read (1200 disk blocks read, 14.2 ms)
   SELECT id, status -> Index Only Scan (0 heap blocks, 100% RAM leaf hits, 0.6 ms)

3. ORM N+1 Resolution (100 records):
   N+1 Pattern: 101 separate network queries -> ~202 ms network idle latency
   Batched JOIN: 1 query with INNER JOIN -> ~3.0 ms total

4. Hardening Configuration:
   statement_timeout = '15s' (Kills runaway long-running transactions)
   lock_timeout = '2s' (Prevents DDL migration deadlocks from blocking web traffic)
   pg_stat_statements = active (Logging top 10 slowest queries by total execution time)`
    }
  ],
  exercises: [
    {
      id: 'qo-rel-ex-1',
      kind: 'mcq',
      topic: 'fixing-un-sargable-date-predicates',
      question: {
        en: 'How should you rewrite WHERE DATE(created_at) = 2026-09-30 to make it SARGable against an index on created_at?',
        bn: 'created_at কলামের ইনডেক্স ব্যবহারের জন্য WHERE DATE(created_at) = 2026-09-30 শর্তটিকে কীভাবে পুনর্লিখন করা উচিত?'
      },
      options: [
        {
          en: 'WHERE created_at >= 2026-09-30 AND created_at < 2026-10-01',
          bn: 'WHERE created_at >= 2026-09-30 AND created_at < 2026-10-01'
        },
        {
          en: 'WHERE created_at::text LIKE 2026-09-30%',
          bn: 'WHERE created_at::text LIKE 2026-09-30%'
        },
        {
          en: 'WHERE EXTRACT(day FROM created_at) = 30',
          bn: 'WHERE EXTRACT(day FROM created_at) = 30'
        },
        {
          en: 'WHERE created_at = NULL',
          bn: 'WHERE created_at = NULL'
        }
      ],
      answer: 0,
      hint: {
        en: 'Use a half-open timestamp range between midnight of September 30 and midnight of October 1.',
        bn: '৩০ সেপ্টেম্বর মধ্যরাত থেকে ১ অক্টোবর মধ্যরাত পর্যন্ত হাফ-ওপেন রেঞ্জ ব্যবহার করুন।'
      },
      explanation: {
        en: 'A half-open range compares raw un-modified column values against constants, allowing the engine to seek directly to the boundary in the B-Tree.',
        bn: 'হাফ-ওপেন রেঞ্জে কলামের মান অপরিবর্তিত থাকে, ফলে ইঞ্জিন সরাসরি B-Tree ইনডেক্সে নির্দিষ্ট মান খুঁজে নিতে পারে।'
      }
    },
    {
      id: 'qo-rel-ex-2',
      kind: 'mcq',
      topic: 'diagnosing-orm-n-plus-one-trap',
      question: {
        en: 'An ORM loop loads 100 user profiles and then runs 1 separate query per user to fetch orders, issuing 101 total queries; what is this pattern called?',
        bn: 'একটি ORM লুপ 100 জন ব্যবহারকারী লোড করে প্রতি ব্যবহারকারীর জন্য 1টি আলাদা কোয়েরি চালিয়ে মোট 101টি কোয়েরি তৈরি করে; এই প্যাটার্নটিকে কী বলা হয়?'
      },
      options: [
        {
          en: 'The N+1 query problem, solved by eager loading with an INNER JOIN or batched WHERE id IN query',
          bn: 'N+1 কোয়েরি সমস্যা, যা INNER JOIN বা ব্যাচড WHERE id IN কোয়েরির মাধ্যমে দূর করা যায়'
        },
        {
          en: 'A distributed database consensus protocol',
          bn: 'একটি ডিস্ট্রিবিউটেড ডাটাবেস কনসেনসাস প্রোটোকল'
        },
        {
          en: 'Normalizing a database table to third normal form',
          bn: 'একটি টেবিলকে তৃতীয় নরমালাইজড ফর্মে রূপান্তর করা'
        },
        {
          en: 'Deadlock detection algorithm',
          bn: 'একটি ডেডলক ডিটেকশন অ্যালগরিদম'
        }
      ],
      answer: 0,
      hint: {
        en: '1 initial query plus N subsequent queries equals N+1 queries.',
        bn: '১টি প্রাথমিক কোয়েরি যোগ N সংখ্যক পরবর্তী কোয়েরি সমান N+1 কোয়েরি।'
      },
      explanation: {
        en: 'N+1 queries waste server CPU and network bandwidth. Replacing the loop with a single JOIN eliminates 100 network roundtrips.',
        bn: 'N+1 কোয়েরি সার্ভার সিপিইউ ও নেটওয়ার্ক ব্যান্ডউইথ নষ্ট করে। লুপের বদলে একটিমাত্র JOIN ব্যবহার করলে ১০০টি নেটওয়ার্ক রাউন্ডট্রিপ বেঁচে যায়।'
      }
    },
    {
      id: 'qo-rel-ex-3',
      kind: 'mcq',
      topic: 'covering-index-scan-eliminating-select-star',
      question: {
        en: 'Why does changing SELECT * to SELECT id, status allow PostgreSQL to use an Index-Only Scan on (id, status)?',
        bn: 'SELECT * এর বদলে SELECT id, status লিখলে পোস্টগ্রেসকুয়েল কেন (id, status) ইনডেক্সে Index-Only Scan চালাতে পারে?'
      },
      options: [
        {
          en: 'Because all requested columns exist directly in the B-Tree index, allowing the engine to return data from memory without reading heap table blocks from disk',
          bn: 'কারণ চাওয়া সমস্ত কলাম সরাসরি B-Tree ইনডেক্সের পাতাতেই রয়েছে, ফলে ডিস্ক থেকে টেবিলের ব্লক না পড়েই মেমরি থেকে ডাটা দেওয়া যায়'
        },
        {
          en: 'Because SELECT * is forbidden by SQL syntax standards',
          bn: 'কারণ এসকিউএল সিনট্যাক্স নীতিমালায় SELECT * সম্পূর্ণ নিষিদ্ধ'
        },
        {
          en: 'To reduce the font size of the database logs',
          bn: 'ডাটাবেস লগের ফন্ট সাইজ ছোট করার জন্য'
        },
        {
          en: 'Because indexes can only store text columns',
          bn: 'কারণ ইনডেক্স কেবল টেক্সট কলাম সংরক্ষণ করতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Check whether all requested columns exist inside the B-Tree index leaf pages.',
        bn: 'চাওয়া সমস্ত কলাম B-Tree ইনডেক্সের পাতার মধ্যে আছে কিনা তা দেখুন।'
      },
      explanation: {
        en: 'When an index covers all columns in the SELECT and WHERE clauses, PostgreSQL performs an Index-Only Scan, bypassing heap table I/O entirely.',
        bn: 'যখন কোনো ইনডেক্সে SELECT এবং WHERE ক্লজের সব কলাম থাকে, তখন পোস্টগ্রেসকুয়েল ইনডেক্স-অনলি স্ক্যান করে ডিস্ক রিড পুরোপুরি পরিহার করে।'
      }
    },
    {
      id: 'qo-rel-ex-4',
      kind: 'mcq',
      topic: 'statement-timeout-circuit-breaker',
      question: {
        en: 'What is the operational function of setting statement_timeout = 15s in production database configurations?',
        bn: 'প্রোডাকশন ডাটাবেসে statement_timeout = 15s কনফিগারেশনের অপারেশনাল কাজ কী?'
      },
      options: [
        {
          en: 'It automatically cancels any query taking longer than 15 seconds, preventing runaway queries from holding locks and starving web connection pools',
          bn: 'এটি ১৫ সেকেন্ডের বেশি সময় নেওয়া যেকোনো কোয়েরি স্বয়ংক্রিয়ভাবে বাতিল করে, যাতে সার্ভারের সংযোগ ও লক আটকে না থাকে'
        },
        {
          en: 'It shuts down the operating system every 15 seconds',
          bn: 'এটি প্রতি ১৫ সেকেন্ড পর পর অপারেটিং সিস্টেম বন্ধ করে দেয়'
        },
        {
          en: 'It delays every SQL query by 15 seconds before execution',
          bn: 'এটি প্রতিটি এসকিউএল কোয়েরি চলার আগে ১৫ সেকেন্ড অপেক্ষা করায়'
        },
        {
          en: 'It limits the database to 15 tables total',
          bn: 'এটি ডাটাবেসকে মোট ১৫টি টেবিলে সীমাবদ্ধ করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'It acts as an automatic circuit breaker for queries exceeding 15 seconds.',
        bn: '১৫ সেকেন্ডের বেশি চলা কোয়েরির জন্য এটি অটোমেটিক সার্কিট ব্রেকার হিসেবে কাজ করে।'
      },
      explanation: {
        en: 'Without statement_timeout, an un-indexed reporting query can run for hours, locking tables and exhausting connection pools.',
        bn: 'statement_timeout না থাকলে ইনডেক্সহীন কোনো কোয়েরি ঘণ্টার পর ঘণ্টা চলে টেবিল লক করে রাখতে পারে এবং সার্ভারকে সম্পূর্ণ অচল করে দিতে পারে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Production Optimization & Hardening Capstone Quiz',
      bn: 'প্রোডাকশন অপ্টিমাইজেশন ও হার্ডেনিং ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'qo-rel-qz-1',
        kind: 'mcq',
        topic: 'leading-wildcard-index-limitation',
        question: {
          en: 'Why is WHERE username LIKE %admin considered an un-SARGable query that cannot utilize a standard B-Tree index?',
          bn: 'WHERE username LIKE %admin শর্তটিকে কেন একটি আন-সারগেবল কোয়েরি হিসেবে বিবেচনা করা হয় যা B-Tree ইনডেক্স ব্যবহার করতে পারে না?'
        },
        options: [
          {
            en: 'B-Tree indexes sort entries from left to right (prefix matching), so a leading wildcard prevents the engine from finding an entry point in the tree',
            bn: 'B-Tree ইনডেক্স বাম থেকে ডানে (প্রিফিক্স) সাজায়, তাই শুরুর ওয়াইল্ডকার্ড ইঞ্জিনের জন্য ইনডেক্সে প্রবেশের কোনো নির্দিষ্ট বিন্দু খুঁজে পেতে বাধা দেয়'
          },
          {
            en: 'Because percentage symbols are not allowed in SQL statements',
            bn: 'কারণ এসকিউএল স্টেটমেন্টে শতকরা চিহ্ন ব্যবহার করা বেআইনি'
          },
          {
            en: 'Because LIKE queries only run on CSV files',
            bn: 'কারণ LIKE কোয়েরি কেবল সিএসভি ফাইলে কাজ করে'
          },
          {
            en: 'Because admin is a reserved keyword in all operating systems',
            bn: 'কারণ admin সব অপারেটিং সিস্টেমে একটি সংরক্ষিত শব্দ'
          }
        ],
        answer: 0,
        hint: {
          en: 'A telephone directory sorted by last name cannot help you find names ending in son.',
          bn: 'টেলিফোন ডিরেক্টরি দিয়ে শেষে son আছে এমন নাম খুঁজতে গেলে শুরু থেকে শেষ পর্যন্ত পুরো বই পড়তে হয়।'
        },
        explanation: {
          en: 'B-Trees support prefix searches (john%) with index range scans. A leading wildcard (%admin) requires evaluating every string sequentially.',
          bn: 'B-Tree প্রিফিক্স সার্চ (john%) সমর্থন করে। শুরুতে ওয়াইল্ডকার্ড থাকলে পুরো টেবিলের প্রতিটি স্ট্রিং এক এক করে পরীক্ষা করতে হয়।'
        }
      },
      {
        id: 'qo-rel-qz-2',
        kind: 'mcq',
        topic: 'pg-stat-statements-slow-queries',
        question: {
          en: 'Which PostgreSQL extension is considered the industry standard for discovering the slowest queries across production workloads?',
          bn: 'প্রোডাকশনে সবচেয়ে ধীরগতির কোয়েরিগুলো শনাক্ত করার জন্য কোন PostgreSQL এক্সটেনশনটিকে বিশ্বমানের ইন্ডাস্ট্রি স্ট্যান্ডার্ড মনে করা হয়?'
        },
        options: [
          {
            en: 'pg_stat_statements, which tracks execution statistics, call counts, and mean execution times for all SQL statements',
            bn: 'pg_stat_statements, যা সমস্ত এসকিউএল স্টেটমেন্টের এক্সিকিউশন পরিসংখ্যান, কল সংখ্যা এবং গড় সময় রেকর্ড করে'
          },
          {
            en: 'pg_crypto, which encrypts slow queries',
            bn: 'pg_crypto, যা ধীরগতির কোয়েরিকে এনক্রিপ্ট করে রাখে'
          },
          {
            en: 'pg_trgm, which translates queries to Japanese',
            bn: 'pg_trgm, যা কোয়েরিকে জাপানি ভাষায় অনুবাদ করে'
          },
          {
            en: 'pg_dump, which deletes slow tables automatically',
            bn: 'pg_dump, যা ধীরগতির টেবিলগুলো নিজে থেকেই মুছে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'It records cumulative execution times and call counts per normalized SQL statement.',
          bn: 'এটি নরমালাইজড প্রতিটি এসকিউএল স্টেটমেন্টের মোট সময় ও কল সংখ্যা রেকর্ড করে।'
        },
        explanation: {
          en: 'pg_stat_statements aggregates execution metrics across all queries. Sorting by total_exec_time or mean_exec_time pinpoints the exact queries needing optimization.',
          bn: 'pg_stat_statements সমস্ত কোয়েরির সামগ্রিক মেট্রিক একত্র করে। মোট সময় দিয়ে সাজালে সহজেই সবচেয়ে ধীরগতির কোয়েরিগুলো খুঁজে পাওয়া যায়।'
        }
      },
      {
        id: 'qo-rel-qz-3',
        kind: 'mcq',
        topic: 'lock-timeout-production-safety',
        question: {
          en: 'Why is setting lock_timeout = 2s vital when running schema migrations (such as ALTER TABLE) in a high-traffic production database?',
          bn: 'উচ্চ ট্রাফিকের প্রোডাকশন ডাটাবেসে স্কিমা মাইগ্রেশন (যেমন ALTER TABLE) চালানোর সময় lock_timeout = 2s নির্ধারণ করা কেন অত্যন্ত গুরুত্বপূর্ণ?'
        },
        options: [
          {
            en: 'It aborts the migration if exclusive table locks cannot be acquired within 2 seconds, preventing a lock queue from piling up and blocking all web traffic',
            bn: '২ সেকেন্ডের মধ্যে এক্সক্লুসিভ টেবিল লক না পেলে এটি মাইগ্রেশন বাতিল করে, যাতে লকের দীর্ঘ লাইন তৈরি হয়ে সমস্ত ওয়েব ট্রাফিক আটকে না যায়'
          },
          {
            en: 'It accelerates data compression by 200%',
            bn: 'এটি ডাটা কম্প্রেশনের গতি ২০০% বাড়িয়ে দেয়'
          },
          {
            en: 'It permanently locks all database tables forever',
            bn: 'এটি ডাটাবেসের সমস্ত টেবিলকে চিরতরে লক করে দেয়'
          },
          {
            en: 'It converts the migration into an asynchronous background thread',
            bn: 'এটি মাইগ্রেশনকে একটি ব্যাকগ্রাউন্ড থ্রেডে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'An ALTER TABLE waiting for a lock blocks all subsequent SELECT statements behind it.',
          bn: 'ALTER TABLE লকের জন্য অপেক্ষা করলে তার পেছনে আসা সমস্ত SELECT কোয়েরিও লাইনে আটকে যায়।'
        },
        explanation: {
          en: 'When ALTER TABLE waits for an exclusive lock, every new read query queues behind it, instantly exhausting web server connection pools. lock_timeout prevents this catastrophic queue.',
          bn: 'ALTER TABLE লকের অপেক্ষায় থাকলে পেছনের সমস্ত রিড কোয়েরিও আটকে যায় এবং সার্ভার সংযোগ শেষ হয়ে যায়। lock_timeout এই বিপর্যয় প্রতিরোধ করে।'
        }
      },
      {
        id: 'qo-rel-qz-4',
        kind: 'mcq',
        topic: 'query-optimization-lifecycle-synthesis',
        question: {
          en: 'Which complete workflow represents the gold standard for tuning a chronically slow database query in production?',
          bn: 'প্রোডাকশনে নিয়মিত ধীরগতির কোনো কোয়েরি অপ্টিমাইজ করার জন্য কোন পূর্ণাঙ্গ ধাপটি গোল্ড স্ট্যান্ডার্ড হিসেবে গণ্য হয়?'
        },
        options: [
          {
            en: '1. Identify query in pg_stat_statements; 2. Run EXPLAIN (ANALYZE, BUFFERS); 3. Spot disk spills or unindexed filters; 4. Add targeted composite or covering indexes; 5. Verify index-only or in-memory execution',
            bn: '১. pg_stat_statements দিয়ে কোয়েরি শনাক্ত করা; ২. EXPLAIN (ANALYZE, BUFFERS) চালানো; ৩. ডিস্ক স্পিল বা ইনডেক্সহীন ফিল্টার চিহ্নিত করা; ৪. উপযুক্ত কম্পোজিট বা কভারিং ইনডেক্স যোগ করা; ৫. ইন-মেমরি বা ইনডেক্স-অনলি স্ক্যান যাচাই করা'
          },
          {
            en: '1. Delete the slow database table; 2. Rewrite the frontend in HTML; 3. Reboot the server',
            bn: '১. ধীরগতির টেবিল মুছে ফেলা; ২. ফ্রন্টএন্ড এইচটিএমএলে নতুন করে লেখা; ৩. সার্ভার রিবুট করা'
          },
          {
            en: '1. Increase work_mem to 100GB; 2. Disable all indexes; 3. Delete database logs',
            bn: '১. work_mem ১০০GB করে দেওয়া; ২. সমস্ত ইনডেক্স বন্ধ করে দেওয়া; ৩. ডাটাবেস লগ মুছে ফেলা'
          },
          {
            en: '1. Ignore the problem until user complaints exceed 1000',
            bn: '১. ১০০০ ব্যবহারকারী অভিযোগ না করা পর্যন্ত সমস্যাটি পুরোপুরি উপেক্ষা করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Systematic database performance tuning is evidence-driven using metrics, plan analysis, and targeted indexing.',
          bn: 'পদ্ধতিগত পারফরম্যান্স টিউনিং মেট্রিক, প্ল্যান বিশ্লেষণ এবং সুনির্দিষ্ট ইনডেক্সিংয়ের মাধ্যমে পরিচালিত হয়।'
        },
        explanation: {
          en: 'Production tuning requires evidence: find the heaviest query using pg_stat_statements, diagnose its root cause using EXPLAIN (ANALYZE, BUFFERS), design a tailored index, and verify zero disk I/O.',
          bn: 'প্রোডাকশন টিউনিং প্রমাণভিত্তিক: pg_stat_statements দিয়ে চিহ্নিত করুন, EXPLAIN দিয়ে কারণ বের করুন, ইনডেক্স তৈরি করুন এবং ডিস্ক রিড শূন্যে নেমেছে কিনা তা নিশ্চিত করুন।'
        }
      }
    ]
  },
  nextLesson: null
};
