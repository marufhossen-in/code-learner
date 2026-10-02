import type { Lesson } from '../../../lib/types';

export const ExplsAndTheExplainLesson: Lesson = {
  slug: 'expls-and-the-explain',
  tech: 'query-optimization',
  title: {
    en: 'Mastering EXPLAIN & EXPLAIN ANALYZE: Nodes, Buffers & Timing',
    bn: 'EXPLAIN ও EXPLAIN ANALYZE আয়ত্তকরণ: নোডস, বাফার ও টাইমিং'
  },
  summary: {
    en: 'Master reading and diagnosing PostgreSQL and relational execution plans. Learn the critical difference between EXPLAIN and EXPLAIN ANALYZE, interpreting plan node trees from bottom-up, tracking estimated vs actual rows, and analyzing BUFFERS metrics.',
    bn: 'PostgreSQL এবং রিলেশনাল এক্সিকিউশন প্ল্যান পড়া ও সমস্যা নির্ণয় আয়ত্ত করুন। EXPLAIN ও EXPLAIN ANALYZE এর মধ্যে পার্থক্য, নিচ থেকে ওপরে নোড ট্রি পড়া, আনুমানিক বনাম বাস্তব রো তুলনা এবং BUFFERS মেট্রিক বিশ্লেষণ গভীরভাবে শিখুন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'explain-vs-analyze',
      text: {
        en: 'The Vital Distinction: EXPLAIN versus EXPLAIN ANALYZE',
        bn: 'মৌলিক পার্থক্য: EXPLAIN বনাম EXPLAIN ANALYZE'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To optimize a slow database query, you must look directly inside the engine to see how it plans and executes your SQL statement. The primary diagnostic tools for this purpose are EXPLAIN and EXPLAIN ANALYZE, which reveal the optimizer cost estimates, physical scan operators, join algorithms, and execution timings.',
        bn: 'একটি ধীরগতির ডাটাবেস কোয়েরি অপ্টিমাইজ করতে হলে আপনাকে সরাসরি ইঞ্জিনের ভেতরে দেখতে হবে সে কীভাবে আপনার এসকিউএল স্টেটমেন্ট পরিকল্পনা ও সম্পাদন করে। এই কাজের প্রধান রোগনির্ণয়কারী টুল হলো EXPLAIN এবং EXPLAIN ANALYZE, যা অপ্টিমাইজারের খরচের অনুমান, ফিজিক্যাল স্ক্যান অপারেটর, জয়েন অ্যালগরিদম এবং সময় প্রকাশ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'There is a critical operational boundary between the two commands. Standard EXPLAIN only asks the query planner to calculate hypothetical costs without executing the SQL. In sharp contrast, EXPLAIN ANALYZE actually runs the query against real database storage and measures physical millisecond timing.',
        bn: 'এই দুটি কমান্ডের মধ্যে একটি অত্যন্ত গুরুত্বপূর্ণ অপারেশনাল সীমারেখা রয়েছে। সাধারণ EXPLAIN এসকিউএল কোয়েরি না চালিয়েই শুধুমাত্র প্ল্যানারের তাত্ত্বিক খরচ হিসাব করে দেখায়। অন্যদিকে, EXPLAIN ANALYZE সরাসরি ডাটাবেসে কোয়েরিটি সম্পাদন করে এবং বাস্তব সময় পরিমাপ করে।'
      }
    },
    {
      type: 'diagram',
      id: 'explain-tree-diagram',
      caption: {
        en: 'Figure 1: Anatomy of an execution plan tree — bottom-up data flow, cost estimates, actual timings, and buffer pool metrics.',
        bn: 'চিত্র ১: একটি এক্সিকিউশন প্ল্যান ট্রির অভ্যন্তরীণ গঠন — নিচ থেকে ওপরের ডাটা প্রবাহ, আনুমানিক খরচ, বাস্তব সময় এবং বাফার মেট্রিক।'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="expHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
    <linearGradient id="nodeGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="leafGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
    <marker id="treeArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#a78bfa"/>
    </marker>
  </defs>

  <!-- Title Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#expHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">🔍</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">ANATOMY OF A POSTGRESQL EXECUTION PLAN TREE</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">Bottom-up execution order, estimated vs actual rows, loops multiplier, and buffer caching</text>

  <!-- Root Node (Top) -->
  <rect x="240" y="90" width="480" height="90" rx="8" fill="url(#nodeGrad)" stroke="#a78bfa" stroke-width="2"/>
  <text x="260" y="115" fill="#c084fc" font-size="13" font-weight="bold">ROOT NODE: Hash Join  (cost=12.50..845.20 rows=500 width=64)</text>
  <text x="260" y="135" fill="#38bdf8" font-size="11">actual time=0.450..4.820 rows=500 loops=1</text>
  <text x="260" y="153" fill="#cbd5e1" font-size="10">Hash Cond: (orders.customer_id = customers.id)</text>
  <text x="260" y="169" fill="#10b981" font-size="10">Buffers: shared hit=420 read=12</text>

  <!-- Tree Branches (Upward Flow) -->
  <path d="M 220 230 L 340 180" stroke="#a78bfa" stroke-width="2" marker-end="url(#treeArrow)"/>
  <path d="M 740 230 L 620 180" stroke="#a78bfa" stroke-width="2" marker-end="url(#treeArrow)"/>

  <!-- Left Branch: Outer Table (Seq Scan) -->
  <rect x="40" y="230" width="380" height="110" rx="8" fill="url(#nodeGrad)" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="55" y="255" fill="#fbbf24" font-size="12" font-weight="bold">->  Seq Scan on orders  (cost=0.00..520.00 rows=500)</text>
  <text x="55" y="275" fill="#38bdf8" font-size="11">actual time=0.015..2.100 rows=500 loops=1</text>
  <text x="55" y="293" fill="#ef4444" font-size="10">Filter: (order_date >= '2026-01-01')</text>
  <text x="55" y="309" fill="#fca5a5" font-size="10">Rows Removed by Filter: 9500 [Filter Warning!]</text>
  <text x="55" y="325" fill="#94a3b8" font-size="10">Buffers: shared hit=380 read=12</text>

  <!-- Right Branch: Hash Node -->
  <rect x="540" y="230" width="380" height="80" rx="8" fill="url(#nodeGrad)" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="555" y="255" fill="#38bdf8" font-size="12" font-weight="bold">->  Hash  (cost=8.40..8.40 rows=100 width=32)</text>
  <text x="555" y="275" fill="#e2e8f0" font-size="11">actual time=0.080..0.080 rows=100 loops=1</text>
  <text x="555" y="295" fill="#34d399" font-size="10">Buckets: 1024  Batches: 1  Memory Usage: 12kB</text>

  <!-- Hash Child: Index Scan -->
  <path d="M 730 355 L 730 310" stroke="#a78bfa" stroke-width="2" marker-end="url(#treeArrow)"/>
  <rect x="540" y="355" width="380" height="100" rx="8" fill="url(#leafGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="555" y="380" fill="#34d399" font-size="12" font-weight="bold">->  Index Scan on customers  (cost=0.28..8.40)</text>
  <text x="555" y="400" fill="#38bdf8" font-size="11">actual time=0.010..0.055 rows=100 loops=1</text>
  <text x="555" y="418" fill="#cbd5e1" font-size="10">Index Cond: (active = true)</text>
  <text x="555" y="436" fill="#10b981" font-size="10">Buffers: shared hit=40 read=0 (100% in RAM)</text>

  <!-- Bottom Execution Note Left -->
  <rect x="40" y="360" width="380" height="95" rx="8" fill="#111827" stroke="#334155" stroke-width="1.5"/>
  <text x="55" y="385" fill="#f8fafc" font-size="12" font-weight="bold">EXECUTION ORDER: BOTTOM-UP</text>
  <text x="55" y="405" fill="#cbd5e1" font-size="10">1. Customers Index Scan runs, streams rows to Hash.</text>
  <text x="55" y="421" fill="#cbd5e1" font-size="10">2. Hash builds 12kB in-memory hash table.</text>
  <text x="55" y="437" fill="#cbd5e1" font-size="10">3. Orders Seq Scan streams rows to probe Hash Join.</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'reading-plan-nodes',
      text: {
        en: 'How to Read a Plan Node: Costs, Actual Rows, and Loops',
        bn: 'প্ল্যান নোড পড়ার নিয়ম: খরচ, বাস্তব রো এবং লুপের হিসাব'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every plan line contains two parentheses blocks. The first block represents the cost-based optimizer estimates before running the query. The second block contains the actual measured execution results.',
        bn: 'প্রতিটি প্ল্যান লাইনে দুটি বন্ধনী ব্লক থাকে। প্রথম ব্লকটি কোয়েরি চালানোর আগে কস্ট-বেসড অপ্টিমাইজারের আনুমানিক হিসাব দেখায়। দ্বিতীয় ব্লকটিতে কোয়েরি চলার পর পরিমাপ করা বাস্তব ফলাফল থাকে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Cost estimate: cost=0.42..8.44 means startup cost is 0.42 arbitrary page I/O units, and total cost is 8.44 units.',
          bn: 'কস্ট হিসাব: cost=0.42..8.44 মানে স্টার্টআপ খরচ ০.৪২ পেজ I/O একক এবং মোট খরচ ৮.৪৪ একক।'
        },
        {
          en: 'Estimated rows: rows=1 indicates the planner expects the node to emit 1 row per execution loop.',
          bn: 'আনুমানিক রো: rows=1 নির্দেশ করে যে প্ল্যানার প্রতি লুপে ১টি করে সারি আউটপুটে আসার আশা করছে।'
        },
        {
          en: 'Actual timing: actual time=0.035..0.038 means 0.035 milliseconds elapsed before emitting the first row, and 0.038 milliseconds total per loop.',
          bn: 'বাস্তব সময়: actual time=0.035..0.038 মানে প্রথম সারি পেতে ০.০৩৫ মিলিসেকেন্ড এবং প্রতি লুপে মোট ০.০৩৮ মিলিসেকেন্ড লেগেছে।'
        },
        {
          en: 'The loops multiplier: If loops=20, all actual numbers (actual rows and actual time) must be multiplied by 20 to determine the true aggregate work.',
          bn: 'লুপ গুণিতক: যদি loops=20 হয়, তবে মোট কাজের প্রকৃত হিসাব পেতে সমস্ত বাস্তব সংখ্যাকে ২০ দিয়ে গুণ করতে হবে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'red-flags',
      text: {
        en: 'Diagnostic Red Flags: Cardinality Mismatch, Filter Discard & Disk Spills',
        bn: 'সমস্যা নির্ণয়ের লাল পতাকা: কার্ডিনালিটি অমিল, ফিল্টার অপচয় ও ডিস্ক স্পিল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When diagnosing a production performance issue, look for 3 critical red flags in the execution plan tree.',
        bn: 'প্রোডাকশনের সমস্যা সমাধানের সময় এক্সিকিউশন প্ল্যানে ৩টি প্রধান সতর্কবার্তা বা লাল পতাকার দিকে নজর দিতে হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Cardinality Underestimation: When estimated rows is 1 but actual rows is 10000, the planner made join choices based on stale statistics. Solution: run ANALYZE.',
          bn: 'কার্ডিনালিটি অনুমানের ভুল: যখন আনুমানিক রো ১ অথচ বাস্তব রো ১০০০০, তখন প্ল্যানার পুরোনো তথ্যের ওপর ভিত্তি করে ভুল সিদ্ধান্ত নেয়। সমাধান: ANALYZE চালান।'
        },
        {
          en: 'Rows Removed by Filter: If a sequential scan reads 100000 rows and removes 99000 by filter, 99% of scanned disk blocks are wasted CPU work. Solution: create an index.',
          bn: 'ফিল্টারে রো অপচয়: যদি সিকোয়েনশিয়াল স্ক্যান ১০০০০০ রো পড়ে ৯৯০০০ রো বাতিল করে, তবে ৯৯% ডিস্ক রিডই অপচয়। সমাধান: ইনডেক্স তৈরি করুন।'
        },
        {
          en: 'Sort and Hash Disk Spills: Lines showing Sort Method: external merge Disk or HashBatch with Disk activity reveal that work_mem was exceeded.',
          bn: 'সর্ট ও হ্যাশ ডিস্ক স্পিল: Sort Method: external merge Disk বা HashBatch-এ ডিস্ক ব্যবহারের বার্তা থাকলে বোঝা যায় work_mem সীমা শেষ হয়ে গেছে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'interactive-plan-analyzer',
      text: {
        en: 'Interactive Benchmark: Automated Execution Plan Diagnostic Engine',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: স্বয়ংক্রিয় এক্সিকিউশন প্ল্যান রোগনির্ণয় ইঞ্জিন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'plan-diagnostic-engine.ts',
      code: `// Execution Plan Diagnostic & Anomaly Engine
interface PlanNode {
  operation: string;
  relation: string;
  estimatedRows: number;
  estimatedCost: string;
  actualRows: number;
  loops: number;
  actualTimeMs: number;
  filterRemoved?: number;
  buffers?: { hit: number; read: number };
}

function analyzePlanNode(node: PlanNode) {
  const totalActualRows = node.actualRows * node.loops;
  const totalActualTimeMs = (node.actualTimeMs * node.loops).toFixed(3);
  const estimationRatio = (totalActualRows / Math.max(1, node.estimatedRows)).toFixed(1);

  console.log(\`Node: \${node.operation} on \${node.relation}\`);
  console.log(\`  Estimated: \${node.estimatedRows} rows | Cost: \${node.estimatedCost}\`);
  console.log(\`  Actual: \${node.actualRows} rows/loop * \${node.loops} loops = \${totalActualRows} total rows\`);
  console.log(\`  Timing: \${node.actualTimeMs} ms/loop * \${node.loops} loops = \${totalActualTimeMs} ms total\`);

  const alerts: string[] = [];
  if (parseFloat(estimationRatio) >= 10 || parseFloat(estimationRatio) <= 0.1) {
    alerts.push(\`CARDINALITY MISMATCH: Actual rows are \${estimationRatio}x estimated! Plan choice may be severely compromised.\`);
  }
  if (node.filterRemoved && node.filterRemoved > 1000) {
    alerts.push(\`UNINDEXED FILTER: \${node.filterRemoved} rows removed by filter! Missing index on predicate column.\`);
  }
  if (node.buffers) {
    const totalBlks = node.buffers.hit + node.buffers.read;
    const hitPct = ((node.buffers.hit / totalBlks) * 100).toFixed(1);
    console.log(\`  Buffers: shared hit=\${node.buffers.hit} read=\${node.buffers.read} (\${hitPct}% in RAM)\`);
  }

  alerts.forEach(a => console.log(\`  [ALERT] \${a}\`));
  return { totalActualRows, totalActualTimeMs, estimationRatio, alerts };
}

console.log("=== EXPLAIN PLAN DIAGNOSTIC ENGINE ===");
analyzePlanNode({
  operation: "Seq Scan",
  relation: "orders",
  estimatedRows: 1,
  estimatedCost: "0.00..4520.00",
  actualRows: 10000,
  loops: 1,
  actualTimeMs: 18.45,
  filterRemoved: 90000,
  buffers: { hit: 4900, read: 100 }
});`
    },
    {
      type: 'terminal',
      id: 'diagnostic-output',
      cmd: 'npx tsx plan-diagnostic-engine.ts',
      output: `=== EXPLAIN PLAN DIAGNOSTIC ENGINE ===
Node: Seq Scan on orders
  Estimated: 1 rows | Cost: 0.00..4520.00
  Actual: 10000 rows/loop * 1 loops = 10000 total rows
  Timing: 18.45 ms/loop * 1 loops = 18.450 ms total
  Buffers: shared hit=4900 read=100 (98.0% in RAM)
  [ALERT] CARDINALITY MISMATCH: Actual rows are 10000.0x estimated! Plan choice may be severely compromised.
  [ALERT] UNINDEXED FILTER: 90000 rows removed by filter! Missing index on predicate column.`
    }
  ],
  exercises: [
    {
      id: 'qo-exp-ex-1',
      kind: 'mcq',
      topic: 'safety-boundary-explain-analyze',
      question: {
        en: 'What is the critical operational difference between running EXPLAIN versus EXPLAIN ANALYZE on a DELETE or UPDATE query?',
        bn: 'DELETE বা UPDATE কোয়েরিতে EXPLAIN এবং EXPLAIN ANALYZE চালানোর মধ্যে সবচেয়ে গুরুত্বপূর্ণ অপারেশনাল পার্থক্য কী?'
      },
      options: [
        {
          en: 'EXPLAIN only generates cost estimates without running the query, whereas EXPLAIN ANALYZE actually executes the modification in the database',
          bn: 'EXPLAIN কোয়েরি না চালিয়ে কেবল আনুমানিক খরচ দেখায়, অথচ EXPLAIN ANALYZE সরাসরি ডাটাবেসে পরিবর্তনটি সম্পাদন করে ফেলে'
        },
        {
          en: 'EXPLAIN is only available on weekends, while EXPLAIN ANALYZE runs on weekdays',
          bn: 'EXPLAIN কেবল ছুটির দিনে চলে আর EXPLAIN ANALYZE কর্মদিবসে চলে'
        },
        {
          en: 'EXPLAIN encrypts the database, while EXPLAIN ANALYZE decrypts it',
          bn: 'EXPLAIN ডাটাবেস এনক্রিপ্ট করে আর EXPLAIN ANALYZE তা ডিক্রিপ্ট করে'
        },
        {
          en: 'Both commands do the exact same thing without any difference',
          bn: 'উভয় কমান্ডের মধ্যে কোনো পার্থক্য নেই এবং একই কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'ANALYZE actually runs the query against the database storage engine.',
        bn: 'ANALYZE সরাসরি ডাটাবেস স্টোরেজ ইঞ্জিনে কোয়েরিটি সম্পাদন করে।'
      },
      explanation: {
        en: 'Running EXPLAIN ANALYZE DELETE FROM table executes the deletion. Always test write statements inside a transaction block with ROLLBACK.',
        bn: 'EXPLAIN ANALYZE DELETE চালালে রো সত্যিই মুছে যায়। তাই সবসময় ROLLBACK সহ ট্রানজ্যাকশন ব্লকের মধ্যে এটি পরীক্ষা করা উচিত।'
      }
    },
    {
      id: 'qo-exp-ex-2',
      kind: 'mcq',
      topic: 'loops-multiplier-total-rows',
      question: {
        en: 'In a nested loop join, an inner index scan reports actual rows = 5 and loops = 20; what is the total number of rows returned?',
        bn: 'একটি নেস্টেড লুপ জয়েনে ভেতরের ইনডেক্স স্ক্যানে actual rows = 5 এবং loops = 20 রয়েছে; মোট কতটি রো পাওয়া গেছে?'
      },
      options: [
        {
          en: '100 rows, because actual rows in EXPLAIN ANALYZE represents the average per loop, so total equals 5 * 20',
          bn: '100 সারি, কারণ EXPLAIN ANALYZE-এ actual rows প্রতি লুপের গড় মান প্রকাশ করে, তাই মোট হলো 5 * 20'
        },
        {
          en: '5 rows, because loops count is ignored by PostgreSQL',
          bn: '৫টি রো, কারণ পোস্টগ্রেসকুয়েল লুপের সংখ্যা উপেক্ষা করে'
        },
        {
          en: '20 rows, because loops determines the row count',
          bn: '২০টি রো, কারণ লুপের সংখ্যাই রো সংখ্যা নির্ধারণ করে'
        },
        {
          en: '25 rows, because actual rows and loops are added together',
          bn: '২৫টি রো, কারণ রো এবং লুপের সংখ্যা যোগ করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'In EXPLAIN ANALYZE, actual rows represents the average count per single loop execution.',
        bn: 'EXPLAIN ANALYZE-এ actual rows প্রতি একক লুপের গড় সংখ্যা প্রকাশ করে।'
      },
      explanation: {
        en: 'actual rows is an average per loop. 5 rows multiplied by 20 loops yields exactly 100 rows total.',
        bn: 'actual rows হলো প্রতি লুপের গড়। ৫টি রো গুণ ২০টি লুপ সমান মোট ১০০টি রো হয়।'
      }
    },
    {
      id: 'qo-exp-ex-3',
      kind: 'mcq',
      topic: 'detect-cardinality-mismatch',
      question: {
        en: 'In an execution plan, you observe estimated rows = 1 but actual rows = 10000; why did the optimizer make a poor plan choice?',
        bn: 'একটি এক্সিকিউশন প্ল্যানে আনুমানিক rows = 1 কিন্তু বাস্তব rows = 10000 দেখা গেল; অপ্টিমাইজার কেন ভুল প্ল্যান বেছে নিয়েছিল?'
      },
      options: [
        {
          en: 'Severe cardinality underestimation: the planner expected 1 row but received 10000 rows, causing it to incorrectly select a Nested Loop instead of a Hash Join',
          bn: 'চরম কার্ডিনালিটি মিসম্যাচ: প্ল্যানার মাত্র 1টি রো আশা করেছিল কিন্তু বাস্তবে 10000 সারি এসেছে, যার ফলে হ্যাশ জয়েনের বদলে নেস্টেড লুপ বেছে নেওয়া হয়েছে'
        },
        {
          en: 'The query planner had insufficient hard disk space',
          bn: 'কোয়েরি প্ল্যানারের হার্ডডিস্কে পর্যাপ্ত মেমরি ছিল না'
        },
        {
          en: 'The orders table was corrupted by an operating system virus',
          bn: 'অপারেটিং সিস্টেমের ভাইরাসের কারণে ডাটাবেস টেবিল নষ্ট হয়ে গিয়েছিল'
        },
        {
          en: 'The database CPU was turned off during query planning',
          bn: 'কোয়েরি প্ল্যানিংয়ের সময় ডাটাবেস সিপিইউ বন্ধ ছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'A 10000x difference indicates that table statistics are severely outdated.',
        bn: '১০০০০ গুণ অমিল নির্দেশ করে যে টেবিলের পরিসংখ্যান চরমভাবে পুরোনো হয়ে গেছে।'
      },
      explanation: {
        en: 'When row estimates diverge by orders of magnitude, the Cost-Based Optimizer makes flawed algorithmic choices, such as using Nested Loop Joins for massive datasets.',
        bn: 'রো অনুমানে ব্যাপক তারতম্য থাকলে কস্ট-বেসড অপ্টিমাইজার বিশাল ডাটার ক্ষেত্রে ভুল করে নেস্টেড লুপ জয়েনের মতো অ্যালগরিদম বেছে নেয়।'
      }
    },
    {
      id: 'qo-exp-ex-4',
      kind: 'mcq',
      topic: 'explain-buffers-diagnostic-power',
      question: {
        en: 'Why should you always include the BUFFERS parameter when running EXPLAIN (ANALYZE, BUFFERS) during query performance tuning?',
        bn: 'কোয়েরি পারফরম্যান্স টিউনিংয়ের সময় EXPLAIN (ANALYZE, BUFFERS) চালানোর ক্ষেত্রে সবসময় কেন BUFFERS প্যারামিটারটি অন্তর্ভুক্ত করা উচিত?'
      },
      options: [
        {
          en: 'It reveals exact block counts served from shared RAM buffers versus blocks read from storage, exposing whether latency is caused by disk I/O',
          bn: 'এটি মেমরি বাফার থেকে আসা ব্লক এবং স্টোরেজ থেকে পড়া ব্লকের সঠিক সংখ্যা দেখায়, যা লেটেন্সির আসল কারণ শনাক্ত করতে সাহায্য করে'
        },
        {
          en: 'It changes the query font color to blue',
          bn: 'এটি কোয়েরির ফন্টের রঙ নীল করে ফেলে'
        },
        {
          en: 'It forces the operating system to clear RAM before execution',
          bn: 'কোয়েরি চলার আগে এটি অপারেটিং সিস্টেমের র‍্যাম খালি করে দেয়'
        },
        {
          en: 'It doubles the execution speed of the query automatically',
          bn: 'এটি কোয়েরির গতি স্বয়ংক্রিয়ভাবে দ্বিগুণ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Execution time alone does not tell you whether latency came from CPU work or disk I/O.',
        bn: 'শুধু সময় দেখে বোঝা যায় না বিলম্বটি সিপিইউর কারণে নাকি ডিস্ক I/O-এর কারণে হয়েছে।'
      },
      explanation: {
        en: 'BUFFERS exposes shared hit, read, and dirtied block counts, pinpointing whether an operation was fast due to warm cache or slowed down by physical disk reads.',
        bn: 'BUFFERS মেমরির হিট, রিড ও ডার্টি ব্লকের তথ্য দেয়, যার ফলে সহজে বোঝা যায় গতি ক্যাশের কারণে দ্রুত নাকি ডিস্ক রিডের কারণে মন্থর হয়েছে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'EXPLAIN & Execution Plan Diagnostics Quiz',
      bn: 'EXPLAIN ও এক্সিকিউশন প্ল্যান ডায়াগনস্টিকস কুইজ'
    },
    questions: [
      {
        id: 'qo-exp-qz-1',
        kind: 'mcq',
        topic: 'plan-tree-traversal-order',
        question: {
          en: 'How should you read the hierarchical tree of nodes in a multi-level PostgreSQL execution plan?',
          bn: 'একটি বহুধাপ বিশিষ্ট PostgreSQL এক্সিকিউশন প্ল্যানে নোডগুলোর অনুক্রমিক ট্রি কীভাবে পড়তে হয়?'
        },
        options: [
          {
            en: 'Bottom-up and inside-out: the innermost and deepest indented child nodes execute first and stream their output tuples upward to their parent nodes',
            bn: 'নিচ থেকে ওপরে এবং ভেতর থেকে বাইরে: সবচেয়ে গভীরে থাকা চাইল্ড নোডগুলো আগে চলে এবং ফলাফল ওপরের প্যারেন্ট নোডে পাঠায়'
          },
          {
            en: 'From top to bottom, reading the root node first and completely ignoring child nodes',
            bn: 'ওপর থেকে নিচে, রুট নোডটি আগে পড়ে চাইল্ড নোডগুলোকে পুরোপুরি বাদ দিয়ে'
          },
          {
            en: 'From right to left alphabetically by table name',
            bn: 'টেবিলের নামের বর্ণানুক্রমিক ক্রমে ডান থেকে বামে'
          },
          {
            en: 'Randomly based on line length',
            bn: 'লাইনের দৈর্ঘ্যের ওপর ভিত্তি করে এলোমেলোভাবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Parent nodes cannot produce results until their input child nodes have begun feeding them tuples.',
          bn: 'চাইল্ড নোড ডাটা না পাঠানো পর্যন্ত প্যারেন্ট নোড কোনো ফলাফল তৈরি করতে পারে না।'
        },
        explanation: {
          en: 'In execution plans, leaves (innermost indented lines) are evaluated first. Their tuples flow upwards into parent joins, aggregations, and final projections.',
          bn: 'প্ল্যানের সবচেয়ে ভেতরের ইন্ডেন্টেড নোডগুলো আগে কার্যকর হয়। এরপর তাদের ডাটা ওপরের জয়েন ও অ্যাগ্রিগেশন নোডে প্রবাহিত হয়।'
        }
      },
      {
        id: 'qo-exp-qz-2',
        kind: 'mcq',
        topic: 'rows-removed-by-filter-analysis',
        question: {
          en: 'An execution plan shows Filter: (status = cancelled) and Rows Removed by Filter: 990000; what does this indicate?',
          bn: 'একটি এক্সিকিউশন প্ল্যানে দেখা গেল Filter: (status = cancelled) এবং Rows Removed by Filter: 990000; এটি কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'A missing index on the status column forced the engine to sequentially read 990000 non-matching rows and discard them in CPU memory',
            bn: 'status কলামে ইনডেক্স না থাকায় ইঞ্জিন 990000 অমিল রো পড়তে এবং সিপিইউ মেমরিতে তা বাতিল করতে বাধ্য হয়েছে'
          },
          {
            en: 'The query successfully used a B-Tree index to skip non-matching rows',
            bn: 'কোয়েরিটি সফলভাবে B-Tree ইনডেক্স ব্যবহার করে অপ্রয়োজনীয় রো এড়িয়ে গেছে'
          },
          {
            en: 'The status column contains corrupted encrypted data',
            bn: 'status কলামে নষ্ট এনক্রিপ্ট করা ডাটা রয়েছে'
          },
          {
            en: 'PostgreSQL deleted 990000 rows permanently from the database',
            bn: 'পোস্টগ্রেসকুয়েল স্থায়ীভাবে ডাটাবেস থেকে ৯৯০০০০ রো মুছে ফেলেছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Rows Removed by Filter measures how many tuples were scanned from disk only to fail the WHERE condition.',
          bn: 'Rows Removed by Filter হিসাব করে কতটি রো ডিস্ক থেকে পড়ে WHERE শর্ত পূরণ না করায় ফেলে দেওয়া হয়েছে।'
        },
        explanation: {
          en: 'Scanning 990000 rows to discard them is pure waste. An index on status allows the engine to seek directly to matching rows without scanning non-matching tuples.',
          bn: '৯৯০০০০ রো পড়ে ফেলে দেওয়া চরম অপচয়। status কলামে ইনডেক্স থাকলে ইঞ্জিন সরাসরি সঠিক রো-তে চলে যেতে পারত।'
        }
      },
      {
        id: 'qo-exp-qz-3',
        kind: 'mcq',
        topic: 'actual-timing-range-notation',
        question: {
          en: 'In EXPLAIN ANALYZE, what does the actual time=0.035..0.038 notation represent?',
          bn: 'EXPLAIN ANALYZE-এ actual time=0.035..0.038 নোটেশনটি কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'Startup time: 0.035 milliseconds elapsed before emitting the first row; total time: 0.038 milliseconds elapsed to return all rows for that loop',
            bn: 'স্টার্টআপ সময়: প্রথম রো বের হতে ০.০৩৫ মিলিসেকেন্ড এবং ঐ লুপের সমস্ত রো শেষ করতে মোট ০.০৩৮ মিলিসেকেন্ড লেগেছে'
          },
          {
            en: 'The query ran between 3:50 AM and 3:80 AM',
            bn: 'কোয়েরিটি ভোর ৩টা ৫০ থেকে ৩টা ৮০ মিনিটের মধ্যে চলেছে'
          },
          {
            en: 'The CPU temperature was 35 degrees to 38 degrees Celsius',
            bn: 'সিপিইউর তাপমাত্রা ৩৫ থেকে ৩৮ ডিগ্রি সেলসিয়াস ছিল'
          },
          {
            en: 'The query cost was $0.035 to $0.038 dollars',
            bn: 'কোয়েরিটির খরচ ছিল ০.০৩৫ থেকে ০.০৩৮ ডলার'
          }
        ],
        answer: 0,
        hint: {
          en: 'The first number is startup time, and the second number is total completion time for that node.',
          bn: 'প্রথম সংখ্যাটি স্টার্টআপ সময় এবং দ্বিতীয় সংখ্যাটি সেই নোড সম্পন্ন হওয়ার মোট সময়।'
        },
        explanation: {
          en: 'In actual time=A..B, A is the time in milliseconds until the node emits its first tuple, and B is the time until the node finishes returning all tuples for that loop.',
          bn: 'actual time=A..B-তে A হলো প্রথম রো পাওয়া পর্যন্ত সময় এবং B হলো সেই নোডের সমস্ত রো ফেরত দেওয়ার মোট সময়।'
        }
      },
      {
        id: 'qo-exp-qz-4',
        kind: 'mcq',
        topic: 'safe-analyze-on-write-statements',
        question: {
          en: 'If you must run EXPLAIN ANALYZE on a dangerous production DELETE statement to measure its execution time safely, what command sequence should you use?',
          bn: 'প্রোডাকশনে কোনো ঝুঁকিপূর্ণ DELETE স্টেটমেন্টে সময় মাপার জন্য নিরাপদে EXPLAIN ANALYZE চালাতে চাইলে কোন কমান্ড ক্রমটি ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: 'BEGIN; EXPLAIN ANALYZE DELETE FROM table WHERE ...; ROLLBACK; to test execution within an isolated transaction and discard all modifications',
            bn: 'BEGIN; EXPLAIN ANALYZE DELETE FROM table WHERE ...; ROLLBACK; ব্যবহার করে ট্রানজ্যাকশনের মধ্যে পরীক্ষা চালানো এবং পরিবর্তন বাতিল করা'
          },
          {
            en: 'DROP TABLE table; EXPLAIN ANALYZE;',
            bn: 'DROP TABLE table; EXPLAIN ANALYZE; কমান্ড চালানো'
          },
          {
            en: 'Run the DELETE directly on production without backup',
            bn: 'কোনো ব্যাকআপ ছাড়াই সরাসরি প্রোডাকশনে DELETE চালানো'
          },
          {
            en: 'Restart the server while running EXPLAIN ANALYZE',
            bn: 'EXPLAIN ANALYZE চলার সময় সার্ভার রিস্টার্ট করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Wrapping the operation in a transaction that ends with ROLLBACK prevents any physical data loss.',
          bn: 'ROLLBACK দিয়ে শেষ হওয়া ট্রানজ্যাকশনে আবদ্ধ করলে কোনো বাস্তব তথ্য নষ্ট হয় না।'
        },
        explanation: {
          en: 'Wrapping EXPLAIN ANALYZE in BEGIN and ROLLBACK executes the statement, measures true runtime and buffer metrics, and discards all deletions safely.',
          bn: 'BEGIN এবং ROLLBACK এর মধ্যে রাখলে কোয়েরিটি চলে এবং সময় মাপা হয়, কিন্তু ট্রানজ্যাকশন বাতিল হওয়ায় কোনো ডাটা মুছে যায় না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'limits-and-the-limit',
    title: {
      en: 'Pagination at Scale: OFFSET vs Keyset Cursor Navigation',
      bn: 'স্কেলড পেজিনেশন: OFFSET বনাম কি-সেট কার্সার নেভিগেশন'
    }
  }
};
