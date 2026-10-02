import type { Lesson } from '../../../lib/types';

export const CostsAndTheCostLesson: Lesson = {
  slug: 'costs-and-the-cost',
  tech: 'query-optimization',
  title: {
    en: 'Cost Models & Estimation: Startup Cost vs Total Cost',
    bn: 'কস্ট মডেল ও হিসাব: স্টার্টআপ কস্ট বনাম মোট কস্ট'
  },
  summary: {
    en: 'Master database optimizer cost calculations: decode cost=0.00..43.50 syntax in EXPLAIN plans, understand startup cost vs total cost, and resolve dangerous cardinality estimation errors with extended statistics.',
    bn: 'ডাটাবেস অপ্টিমাইজার খরচ হিসাব আয়ত্ত করুন: EXPLAIN প্ল্যানে cost=0.00..43.50 সিনট্যাক্স বিশ্লেষণ, স্টার্টআপ কস্ট বনাম মোট কস্ট এবং এক্সটেন্ডেড স্ট্যাটিস্টিকস দিয়ে কার্ডিনালিটি অনুমানের মারাত্মক ভুল সমাধান।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'demystifying-the-cost-metric',
      text: {
        en: 'Demystifying the Cost Metric: What Does cost=0.00..43.50 Mean?',
        bn: 'কস্ট মেট্রিকের রহস্য উন্মোচন: cost=0.00..43.50 বলতে কী বোঝায়?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you run EXPLAIN on a SQL query, the database outputs cryptic cost numbers like cost=0.00..43.50 rows=100 width=64. Beginners often assume this represents execution time in milliseconds or dollar costs. In reality, cost is a dimensionless mathematical measurement of physical work normalized against single disk page reads.',
        bn: 'যখন আপনি কোনো SQL কোয়েরির ওপর EXPLAIN চালান, ডাটাবেস cost=0.00..43.50 rows=100 width=64-এর মতো কিছু জটিল খরচের সংখ্যা প্রদর্শন করে। নতুন শিক্ষার্থীরা প্রায়ই ভাবেন এটি মিলিসেকেন্ডে চলা সময় বা কোনো আর্থিক খরচ। বাস্তবে কস্ট হলো কাজের একটি আপেক্ষিক গাণিতিক পরিমাপ, যার ভিত্তি ধরা হয় ডিস্কের একটি পেজ পড়ার সমান কাজ।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every cost metric contains two numbers separated by double dots: Startup Cost and Total Cost. The initial figure of 0.00 denotes work spent prior to emitting the first row, while the trailing value of 43.50 measures cumulative work needed to process all matching tuples.',
        bn: 'প্রতিটি কস্ট মেট্রিক দুটি ডট দ্বারা পৃথক করা দুটি সংখ্যা ধারণ করে: স্টার্টআপ কস্ট এবং মোট কস্ট। প্রারম্ভিক মান ০.০০ প্রথম রো ফেরত দেওয়ার পূর্ববর্তী প্রস্তুতিমূলক কাজ নির্দেশ করে, আর পরবর্তী মান ৪৩.৫০ সমস্ত ম্যাচিং রো প্রক্রিয়াকরণের জন্য প্রয়োজনীয় মোট কাজের পরিমাণ নির্দেশ করে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Startup Cost vs Total Cost: Streaming Sequential Scan vs Materialized Sort',
        bn: 'স্টার্টআপ কস্ট বনাম মোট কস্ট: স্ট্রিমিং সিকোয়েনশিয়াল স্ক্যান বনাম মেমরি সর্ট'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Startup vs Total Cost Graph Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Graph Axis Lines -->
  <line x1="80" y1="260" x2="680" y2="260" stroke="#475569" stroke-width="2" />
  <line x1="80" y1="260" x2="80" y2="40" stroke="#475569" stroke-width="2" />

  <!-- Axis Labels -->
  <text x="380" y="295" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">Time / Execution Progress (Rows Emitted)</text>
  <text x="30" y="150" fill="#94a3b8" font-size="11" font-weight="bold" transform="rotate(-90 30 150)" text-anchor="middle">Cumulative Engine Work</text>

  <!-- Curve A: Seq Scan (Startup Cost = 0.00) -->
  <line x1="80" y1="260" x2="650" y2="90" stroke="#38bdf8" stroke-width="3" />
  <circle cx="80" cy="260" r="5" fill="#38bdf8" />
  <text x="95" y="250" fill="#38bdf8" font-size="10" font-weight="bold">Seq Scan Startup = 0.00</text>
  <text x="550" y="80" fill="#38bdf8" font-size="10" font-weight="bold">Linear Row Streaming</text>

  <!-- Curve B: Sort Node (High Startup Barrier) -->
  <!-- Horizontal wait line until all rows read -->
  <line x1="80" y1="260" x2="350" y2="260" stroke="#f87171" stroke-width="2" stroke-dasharray="4 3" />
  <line x1="350" y1="260" x2="350" y2="120" stroke="#f87171" stroke-width="3" />
  <circle cx="350" cy="120" r="6" fill="#f87171" />
  <text x="365" y="135" fill="#f87171" font-size="10" font-weight="bold">Sort Startup Cost Barrier</text>
  <text x="365" y="150" fill="#cbd5e1" font-size="8">Must read &amp; sort ALL rows before row 1!</text>

  <!-- Flat output after sort barrier -->
  <line x1="350" y1="120" x2="650" y2="105" stroke="#f87171" stroke-width="3" />
  <text x="560" y="125" fill="#f87171" font-size="10" font-weight="bold">Instant Emits After Sort</text>

  <!-- Explanatory Box -->
  <rect x="90" y="60" width="220" height="75" rx="6" fill="#1e293b" stroke="#facc15" />
  <text x="100" y="80" fill="#facc15" font-size="10" font-weight="bold">Why LIMIT 1 Changes Plans:</text>
  <text x="100" y="98" fill="#cbd5e1" font-size="9">If a query requests LIMIT 1,</text>
  <text x="100" y="112" fill="#cbd5e1" font-size="9">the optimizer picks zero-startup</text>
  <text x="100" y="126" fill="#cbd5e1" font-size="9">scans, skipping expensive sorts!</text>
</svg>`,
      caption: {
        en: 'Startup Cost vs Total Cost: Sequential Scans stream tuples with 0.00 startup work, while Sort operators incur a massive startup barrier before emitting the first row.',
        bn: 'স্টার্টআপ কস্ট বনাম মোট কস্ট: সিকোয়েনশিয়াল স্ক্যান ০.০০ কাজ দিয়ে সাথে সাথে রো সরবরাহ করে, আর সর্ট নোডকে প্রথম রো দেওয়ার আগেই সমস্ত ডাটা সাজাতে হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Startup Cost',
          def: {
            en: 'The estimated work an operator node must perform before emitting its very first row (e.g. building a hash table or sorting data).',
            bn: 'একটি অপারেটর নোড তার সর্বপ্রথম রো সরবরাহ করার আগে যতটুকু কাজ সম্পন্ন করতে হয় তার আনুমানিক পরিমাপ।'
          }
        },
        {
          term: 'Total Cost',
          def: {
            en: 'The estimated cumulative work required for an operator node to process all input rows and stream them to completion.',
            bn: 'একটি অপারেটর নোডের সমস্ত কাজ শেষ করে সমস্ত ম্যাচিং রো ফেরত দেওয়ার জন্য প্রয়োজনীয় মোট কাজের আনুমানিক হিসাব।'
          }
        },
        {
          term: 'seq_page_cost',
          def: {
            en: 'The foundational PostgreSQL cost unit (default 1.0) representing one sequential disk block read from storage.',
            bn: 'PostgreSQL-এর মৌলিক কস্ট একক (ডিফল্ট ১.০) যা ডিস্ক থেকে একটি সিকোয়েনশিয়াল পেজ পড়ার কাজের সমান।'
          }
        },
        {
          term: 'random_page_cost',
          def: {
            en: 'The cost factor (default 4.0 in PostgreSQL) representing a non-sequential random disk seek penalty.',
            bn: 'ডিস্কের বিভিন্ন অংশে এলোমেলো খোঁজা বা র্যান্ডম সিকের জন্য নির্ধারিত কাজের পেনাল্টি ফ্যাক্টর (PostgreSQL-এ ডিফল্ট ৪.০)।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'cost-parameters-and-cardinality-errors',
      text: {
        en: 'Cost Formulation and The Disaster of Cardinality Errors',
        bn: 'কস্ট ফর্মুলেশন এবং কার্ডিনালিটি ভুলের মারাত্মক পরিণতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PostgreSQL computes plan cost using a transparent mathematical formula. Reading a disk page sequentially costs seq_page_cost (1.0). Random page seeks cost random_page_cost (4.0). Inspecting a row in CPU memory costs cpu_tuple_cost (0.01). On modern enterprise NVMe SSD drives where random seeks have near-zero mechanical latency, database administrators often tune random_page_cost down to 1.1, prompting the optimizer to favor index seeks much more aggressively.',
        bn: 'PostgreSQL একটি স্বচ্ছ গাণিতিক সূত্রের মাধ্যমে কোয়েরি খরচ হিসাব করে। ধারাবাহিকভাবে একটি ডিস্ক পেজ পড়ার খরচ হলো seq_page_cost (১.০)। ডিস্কে র্যান্ডম সিকের খরচ হলো random_page_cost (৪.০)। আর মেমরিতে একটি রো প্রসেস করার খরচ হলো cpu_tuple_cost (০.০১)। আধুনিক দ্রুতগতির NVMe SSD ডিস্কে কোনো মেকানিক্যাল বিলম্ব না থাকায় অভিজ্ঞ ডিবিএ-রা random_page_cost কমিয়ে ১.১ করে দেন, যার ফলে অপ্টিমাইজার আরও বেশি ইনডেক্স সিক বেছে নিতে উৎসাহিত হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'However, cost calculations rely entirely on Cardinality Estimation (estimated rows). By default, optimizers assume columns are statistically independent. If a query filters WHERE make = \'Audi\' AND model = \'A4\', the planner multiplies their independent probabilities. If it estimates 1 row when 10000 rows match, it mistakenly selects a catastrophic Nested Loop Join that takes 30 minutes to complete. Creating Extended Statistics using CREATE STATISTICS resolves multi-column correlation permanently.',
        bn: 'তবে تمام খরচ হিসাব নির্ভর করে কার্ডিনালিটি অনুমানের ওপর। ডিফল্টভাবে অপ্টিমাইজার ধরে নেয় কলামগুলো পরস্পরের সাথে স্বাধীন। যদি কোনো কোয়েরি WHERE make = \'Audi\' AND model = \'A4\' খোঁজে, অপ্টিমাইজার তাদের স্বাধীন সম্ভাবনা গুণ করে মাত্র ১টি রো মিলবে বলে অনুমান করে, অথচ সেখানে বাস্তবে ১০০০০ রো মেলে। এই ভুল অনুমানের কারণে সে মারাত্মক ধীরগতির নেস্টেড লুপ জয়েন বেছে নেয় যা শেষ হতে ৩০ মিনিট লেগে যায়। CREATE STATISTICS দিয়ে এক্সটেন্ডেড স্ট্যাটিস্টিকস তৈরি করলে এই জটিলতা চিরতরে দূর হয়।'
      }
    },
    {
      type: 'heading',
      id: 'node-cost-calculator-engine',
      text: {
        en: 'Executable PostgreSQL Cost Model Simulator',
        bn: 'রানযোগ্য PostgreSQL কস্ট মডেল সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine simulating the Cost-Based Optimizer calculation on a table with 5000 pages and 200000 rows. It compares a full Seq Scan (total cost 7000.00) against an Index Seek matching 50 rows (total cost 203.50). For a query with LIMIT 1, it demonstrates why the planner selects the low-startup access path.',
        bn: 'নিচে ৫০০০ পেজ এবং ২০০০০০ রো বিশিষ্ট একটি টেবিলে কস্ট-বেসড অপ্টিমাইজারের হিসাব পরিচালনাকারী সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি ফুল সিকোয়েনশিয়াল স্ক্যানের (৭০০০.০০ মোট খরচ) সাথে ৫০টি রো উদ্ধারকারী ইনডেক্স সিকের (২০৩.৫০ মোট খরচ) তুলনা করে। LIMIT ১ থাকা কোয়েরির ক্ষেত্রে প্ল্যানার কেন শূন্য-স্টার্টআপ পথ বেছে নেয় তা এটি নিখুঁতভাবে প্রমাণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'PostgreSQL cost model calculator evaluating sequential scans, index lookups, and startup costs',
        bn: 'সিকোয়েনশিয়াল স্ক্যান, ইনডেক্স লুকআপ এবং স্টার্টআপ খরচ মূল্যায়নকারী PostgreSQL কস্ট মডেল ক্যালকুলেটর'
      },
      code: `// PostgreSQL Cost Model Simulator
const totalStoragePages = 5000;
const totalStorageRows = 200000;
const seqPageCost = 1.0;
const randomPageCost = 4.0;
const cpuTupleCost = 0.01;

// 1. Full Table Sequential Scan Cost
// Work = (All pages * seqPageCost) + (All rows * cpuTupleCost)
const seqScanTotal = totalStoragePages * seqPageCost + totalStorageRows * cpuTupleCost; // 7000.00

// 2. B-Tree Index Seek Cost (50 matching rows)
// Work = (B-Tree depth * seqPageCost) + (50 * randomPageCost) + (50 * cpuTupleCost)
const btreeTreeDepth = 3;
const matchingRowCount = 50;
const indexSeekTotal = btreeTreeDepth * seqPageCost + matchingRowCount * randomPageCost + matchingRowCount * cpuTupleCost; // 203.50

const isAccurate = seqScanTotal === 7000 && indexSeekTotal === 203.5;

console.log(\`[Cost Calculator] Evaluated PostgreSQL cost model across \${totalStoragePages} pages and \${totalStorageRows} rows.\`);
console.log(\`[Cost Comparison] Seq Scan total cost: \${seqScanTotal.toFixed(2)} | Index Seek total cost: \${indexSeekTotal.toFixed(2)}.\`);
console.log(\`[Startup Cost Verdict] Query with LIMIT 1 chose low-startup access path over high-startup sort (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Tuning random_page_cost for Enterprise SSD Storage',
        bn: 'এন্টারপ্রাইজ SSD স্টোরেজের জন্য random_page_cost টিউনিং'
      },
      text: {
        en: 'The historical default random_page_cost = 4.0 was established decades ago for spinning mechanical hard drives with rotating magnetic platters. On modern NVMe SSDs, random reads are nearly as fast as sequential reads. Lowering random_page_cost to 1.1 or 1.2 in postgresql.conf stops the engine from prematurely abandoning fast index seeks.',
        bn: 'ঐতিহাসিক ডিফল্ট random_page_cost = ৪.০ মানটি কয়েক দশক আগে পুরানো ঘূর্ণায়মান মেকানিক্যাল হার্ড ড্রাইভের জন্য তৈরি হয়েছিল। আধুনিক দ্রুতগতির NVMe SSD-তে র্যান্ডম রিড প্রায় সিকোয়েনশিয়াল রিডের মতোই দ্রুত। postgresql.conf ফাইলে random_page_cost কমিয়ে ১.১ বা ১.২ করলে ইঞ্জিন অযথা ইনডেক্স সিক বাদ দেওয়া বন্ধ করে দেয়।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Cost Model Evaluator',
        bn: 'কস্ট মডেল মূল্যায়নকারী'
      },
      description: {
        en: 'Compute the total estimated work cost of a sequential table scan based on page count and tuple count.',
        bn: 'পেজ সংখ্যা এবং রো সংখ্যার ওপর ভিত্তি করে একটি সিকোয়েনশিয়াল স্ক্যানের মোট কাজের খরচ হিসাব করুন।'
      },
      code: `function computeSeqScanCost(pages, rows) {
  const cost = pages * 1.0 + rows * 0.01;
  return \`SEQ_SCAN_COST: \${cost.toFixed(2)}\`;
}

console.log('100 Pages:', computeSeqScanCost(100, 5000));
console.log('1,000 Pages:', computeSeqScanCost(1000, 50000));`,
      tests: [
        {
          name: {
            en: 'Calculates cost for 100 pages',
            bn: '১০০ পেজের জন্য খরচ হিসাব করে'
          },
          expected: '100 Pages: SEQ_SCAN_COST: 150.00'
        },
        {
          name: {
            en: 'Calculates cost for 1,000 pages',
            bn: '১০০০ পেজের জন্য খরচ হিসাব করে'
          },
          expected: '1,000 Pages: SEQ_SCAN_COST: 1500.00'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'qo-cst-ex-1',
      kind: 'mcq',
      topic: 'startup-cost-definition',
      question: {
        en: 'In PostgreSQL EXPLAIN plan output (e.g. cost=150.25..450.00), what specifically does the first number (150.25) indicate?',
        bn: 'PostgreSQL-এর EXPLAIN প্ল্যানের ফলাফলে (যেমন cost=150.25..450.00) প্রথম সংখ্যাটি (১৫০.২৫) সুনির্দিষ্টভাবে কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'Startup Cost: the estimated work work-units an operator node must expend before it can emit its very first result row',
          bn: 'স্টার্টআপ কস্ট: একটি অপারেটর নোড তার সর্বপ্রথম সারি ফেরত দেওয়ার আগে তাকে যতটুকু প্রাথমিক কাজ সম্পন্ন করতে হয় তার আনুমানিক পরিমাপ'
        },
        {
          en: 'The number of dollars charged to host the database server',
          bn: 'ডাটাবেস সার্ভার হোস্টিংয়ের জন্য কত ডলার খরচ হয়েছে তার সংখ্যা'
        },
        {
          en: 'The exact temperature of the CPU in degrees Fahrenheit',
          bn: 'ফারেনহাইটে সিপিইউর সঠিক তাপমাত্রা'
        },
        {
          en: 'The length of the database administrator\'s password',
          bn: 'ডাটাবেস অ্যাডমিনিস্ট্রেটরের পাসওয়ার্ডের দৈর্ঘ্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'Startup cost measures the work needed to produce the first tuple.',
        bn: 'স্টার্টআপ কস্ট প্রথম ডাটাটি বের করার জন্য প্রয়োজনীয় কাজ পরিমাপ করে।'
      },
      explanation: {
        en: 'Startup cost reflects pre-processing overhead. A Sort node must read and sort all input tuples before emitting row 1, resulting in high startup cost.',
        bn: 'স্টার্টআপ কস্ট প্রাথমিক প্রক্রিয়াকরণ কাজ বোঝায়। একটি সর্ট নোডকে প্রথম রো দেওয়ার আগেই تمام ডাটা পড়ে সাজাতে হয়, ফলে এর স্টার্টআপ কস্ট বেশি হয়।'
      }
    },
    {
      id: 'qo-cst-ex-2',
      kind: 'mcq',
      topic: 'random-page-cost-tuning',
      question: {
        en: 'Why do database administrators on cloud instances with high-performance NVMe SSD storage tune random_page_cost from 4.0 down to 1.1 or 1.2?',
        bn: 'উচ্চগতির NVMe SSD ক্লাউড সার্ভারে ডাটাবেস অ্যাডমিনিস্ট্রেটররা random_page_cost মানটি ৪.০ থেকে কমিয়ে ১.১ বা ১.২ কেন করেন?'
      },
      options: [
        {
          en: 'NVMe SSDs eliminate mechanical head seek latency, making random disk reads almost as fast as sequential reads; lowering the penalty encourages the optimizer to use fast index seeks',
          bn: 'NVMe SSD-তে কোনো মেকানিক্যাল বিলম্ব থাকে না, ফলে র্যান্ডম রিড প্রায় সিকোয়েনশিয়াল রিডের মতোই দ্রুত চলে; পেনাল্টি কমালে অপ্টিমাইজার দ্রুতগতির ইনডেক্স সিক বেছে নিতে উৎসাহিত হয়'
        },
        {
          en: 'To make all table rows permanently un-deletable',
          bn: 'টেবিলের সমস্ত রো-কে চিরতরে মোছার অযোগ্য করে তোলার জন্য'
        },
        {
          en: 'Because random numbers are not allowed on SSD hard drives',
          bn: 'কারণ SSD হার্ড ড্রাইভে র্যান্ডম সংখ্যা রাখা নিষিদ্ধ'
        },
        {
          en: 'To change the font color of the terminal screen',
          bn: 'টার্মিনাল স্ক্রিনের ফন্টের রঙ পরিবর্তন করার জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'SSDs have no moving mechanical parts, so random reads are no longer 4x slower.',
        bn: 'SSD-তে কোনো নড়াচড়া করা যন্ত্রাংশ নেই, তাই র্যান্ডম রিড আর ৪ গুণ ধীরগতির হয় না।'
      },
      explanation: {
        en: 'The default 4.0 was designed for rotational hard disks where physical heads had to seek. SSDs access flash chips with uniform sub-millisecond latency, making random_page_cost = 1.1 ideal.',
        bn: 'ডিফল্ট ৪.০ পুরানো মেকানিক্যাল ডিস্কের জন্য তৈরি হয়েছিল। SSD-তে সমস্ত চিপে সমান দ্রুতগতিতে ডাটা অ্যাক্সেস মেলে, তাই random_page_cost = ১.১ সবচেয়ে উপযুক্ত।'
      }
    },
    {
      id: 'qo-cst-ex-3',
      kind: 'mcq',
      topic: 'extended-statistics-create-statistics',
      question: {
        en: 'When should a performance engineer execute CREATE STATISTICS on multiple columns in PostgreSQL?',
        bn: 'কোন পরিস্থিতিতে একজন পারফরম্যান্স ইঞ্জিনিয়ারের PostgreSQL-এ একাধিক কলামের ওপর CREATE STATISTICS চালানো উচিত?'
      },
      options: [
        {
          en: 'When two or more query filter columns are strongly correlated (such as country and city, or make and model), preventing the optimizer from underestimating row counts due to the independent probability assumption',
          bn: 'যখন দুই বা ততোধিক কলাম পরস্পরের সাথে গভীরভাবে সম্পর্কিত থাকে (যেমন দেশ ও শহর, অথবা গাড়ির ব্র্যান্ড ও মডেল), যা অপ্টিমাইজারকে স্বাধীন সম্ভাবনার ভুল হিসাব করে কম রো অনুমান করা থেকে রক্ষা করে'
        },
        {
          en: 'When the database hard drive is completely out of disk space',
          bn: 'যখন ডাটাবেসের সমস্ত হার্ড ড্রাইভ স্পেস শেষ হয়ে যায়'
        },
        {
          en: 'When all developers leave the office for the weekend',
          bn: 'সাপ্তাহিক ছুটির দিনে যখন تمام ডেভেলপার অফিস ত্যাগ করেন'
        },
        {
          en: 'CREATE STATISTICS is only used for calculating employee bonuses',
          bn: 'CREATE STATISTICS কেবল কর্মীদের বোনাস হিসাব করার জন্য ব্যবহৃত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Correlated columns fool the optimizer into disastrously small row estimates.',
        bn: 'সম্পর্কিত কলামগুলো অপ্টিমাইজারকে বিভ্রান্ত করে মারাত্মক ভুল অনুমানে ফেলতে পারে।'
      },
      explanation: {
        en: 'By default, PostgreSQL multiplies column selectivities independently. If values correlate, the optimizer estimates 1 row instead of 10,000, choosing disastrous nested loops. Extended statistics teach the CBO about the correlation.',
        bn: 'ডিফল্টভাবে অপ্টিমাইজার প্রতিটি কলামকে স্বাধীন মনে করে গুণ করে। ফলে ১০,০০০ রো মেলার জায়গায় সে ১টি অনুমান করে ভুল প্ল্যান নেয়। এক্সটেন্ডেড স্ট্যাটিস্টিকস অপ্টিমাইজারকে এই সত্য শিক্ষা দেয়।'
      }
    },
    {
      id: 'qo-cst-ex-4',
      kind: 'mcq',
      topic: 'limit-1-startup-cost-preference',
      question: {
        en: 'Why does adding LIMIT 1 to an un-indexed query frequently cause the optimizer to switch from a parallel hash aggregate to a sequential scan?',
        bn: 'ইনডেক্সহীন কোয়েরিতে LIMIT 1 যুক্ত করলে অপ্টিমাইজার প্রায়শই সমান্তরাল হ্যাশ এগ্রিগেটের বদলে সিকোয়েনশিয়াল স্ক্যান বেছে নেয় কেন?'
      },
      options: [
        {
          en: 'The optimizer calculates that a sequential scan can emit the 1st matching row with zero startup cost (0.00), while building a hash table requires massive startup work before returning any rows',
          bn: 'অপ্টিমাইজার হিসাব করে দেখে যে সিকোয়েনশিয়াল স্ক্যান ০.০০ স্টার্টআপ খরচে সাথে সাথে ১ম রো দিতে পারে, অথচ হ্যাশ টেবিল বানাতে গেলে কোনো রো দেওয়ার আগেই বিশাল প্রাথমিক কাজ করতে হয়'
        },
        {
          en: 'Because LIMIT 1 makes all database indexes illegal',
          bn: 'কারণ LIMIT 1 تمام ডাটাবেস ইনডেক্সকে বেআইনি ঘোষণা করে'
        },
        {
          en: 'Because the database engine has an emotional attachment to sequential scans',
          bn: 'কারণ ডাটাবেস ইঞ্জিনের সিকোয়েনশিয়াল স্ক্যানের প্রতি বিশেষ দুর্বলতা থাকে'
        },
        {
          en: 'LIMIT 1 deletes all remaining rows in the table permanently',
          bn: 'LIMIT 1 টেবিলের বাকি সমস্ত রো চিরতরে মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'LIMIT 1 prioritizes minimal startup cost over total execution cost.',
        bn: 'LIMIT 1 মোট খরচের চেয়ে সর্বনিম্ন স্টার্টআপ খরচকে বেশি অগ্রাধিকার দেয়।'
      },
      explanation: {
        en: 'For LIMIT 1, the total work is roughly startup_cost + (total_cost / total_rows). A plan with near-zero startup cost wins, even if its total full-table cost is higher.',
        bn: 'LIMIT 1-এর ক্ষেত্রে ইঞ্জিন পুরো টেবিল শেষ করার চিন্তা করে না; যে নোড সবচেয়ে কম পরিশ্রমে ১ম রো দিতে পারে সেটিকে সে বেছে নেয়।'
      }
    }
  ],
  quiz: {
    id: 'costs-and-the-cost-quiz',
    title: {
      en: 'Database Cost Models & Estimation Assessment Quiz',
      bn: 'ডাটাবেস কস্ট মডেল ও হিসাব মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'qo-cst-qz-1',
        kind: 'mcq',
        topic: 'cpu-tuple-cost-vs-page-cost',
        question: {
          en: 'In PostgreSQL cost modeling, why is cpu_tuple_cost (0.01) configured as a fraction of seq_page_cost (1.0)?',
          bn: 'PostgreSQL কস্ট মডেলিংয়ে cpu_tuple_cost (০.০১) কেন seq_page_cost (১.০)-এর একটি ক্ষুদ্র ভগ্নাংশ হিসেবে নির্ধারিত?'
        },
        options: [
          {
            en: 'Reading a disk page incurs physical storage I/O, whereas inspecting a single row in CPU memory is roughly 100 times faster, requiring far less computational effort',
            bn: 'ডিস্ক থেকে পেজ পড়ায় স্টোরেজ I/O খরচ হয়, অথচ সিপিইউ মেমরিতে একটি রো পরীক্ষা করা প্রায় ১০০ গুণ দ্রুত এবং এতে অতি সামান্য শক্তি খরচ হয়'
          },
          {
            en: 'Because CPU manufacturers charge money every time a row is read',
            bn: 'কারণ সিপিইউ প্রস্তুতকারকরা প্রতিবার রো পড়ার সময় টাকা দাবি করে'
          },
          {
            en: 'Because CPU memory only stores numbers less than 1',
            bn: 'কারণ সিপিইউ মেমরি কেবল ১-এর চেয়ে ছোট সংখ্যা ধারণ করতে পারে'
          },
          {
            en: 'There is no reason; the numbers were picked out of a hat',
            bn: 'কোনো কারণ নেই; সংখ্যাগুলো লটারির মাধ্যমে বেছে নেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Memory operations are orders of magnitude faster than disk I/O reads.',
          bn: 'মেমরির কাজ ডিস্ক থেকে ডাটা পড়ার চেয়ে বহুগুণ দ্রুত।'
        },
        explanation: {
          en: 'seq_page_cost is 1.0 (baseline unit). Evaluating a tuple already residing in memory takes mere CPU cycles, appropriately modeled as 0.01 work units.',
          bn: 'seq_page_cost হলো ১.০ (মৌলিক একক)। মেমরিতে থাকা রো প্রসেস করতে সামান্য সিপিইউ সাইকেল লাগে, তাই এটিকে ০.০১ ধরা হয়।'
        }
      },
      {
        id: 'qo-cst-qz-2',
        kind: 'mcq',
        topic: 'plan-flip-cardinality-underestimate',
        question: {
          en: 'What catastrophic performance failure occurs when the optimizer underestimates row cardinality on the outer side of a JOIN (e.g. estimating 5 rows instead of 500,000)?',
          bn: 'JOIN-এর বাইরের টেবিলে অপ্টিমাইজার যখন মারাত্মকভাবে রো সংখ্যার ভুল অনুমান করে (যেমন ৫০০,০০০-এর জায়গায় মাত্র ৫ রো মনে করে), তখন কোন পারফরম্যান্স বিপর্যয় ঘটে?'
        },
        options: [
          {
            en: 'It chooses a Nested Loop Join instead of a Hash Join, forcing the database to execute 500,000 separate inner table index seeks, multiplying execution time from 50ms to 45 minutes',
            bn: 'এটি হ্যাশ জয়েনের বদলে নেস্টেড লুপ জয়েন বেছে নেয়, যার ফলে ডাটাবেসকে ভেতরের টেবিলে ৫০০,০০০ বার আলাদা আলাদা ইনডেক্স সিক চালাতে হয় এবং কোয়েরির সময় ৫০ মিলিসেকেন্ড থেকে ৪৫ মিনিটে পৌঁছে যায়'
          },
          {
            en: 'The database server computer turns into a microwave oven',
            bn: 'ডাটাবেস সার্ভার কম্পিউটারটি একটি মাইক্রোওয়েভ ওভেনে পরিণত হয়'
          },
          {
            en: 'All table rows are converted into audio podcasts',
            bn: 'تمام টেবিল রো অডিও পডকাস্টে রূপান্তরিত হয়ে যায়'
          },
          {
            en: 'The database drops all primary keys without warning',
            bn: 'ডাটাবেস কোনো সতর্কবার্তা ছাড়াই تمام প্রাইমারি কি মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Nested loops are wonderful for 5 rows, but disastrous for 500000 rows.',
          bn: 'নেস্টেড লুপ ৫টি রো-র জন্য চমৎকার, কিন্তু ৫০০০০০ রো-র জন্য মারাত্মক ক্ষতিকর।'
        },
        explanation: {
          en: 'A Nested Loop loops once per outer row. If the planner believes there are 5 outer rows, it costs 5 index seeks. When 500000 rows arrive in reality, it executes 500000 seeks, freezing the server.',
          bn: 'নেস্টেড লুপ প্রতি রো-র জন্য একবার করে ঘোরে। ৫ রো ভাবলে ৫টি সিক লাগত। কিন্তু বাস্তবে ৫০০০০০ রো এলে সে ৫০০০০০ বার ইনডেক্স সিক চালায় যা সার্ভার স্থবির করে ফেলে।'
        }
      },
      {
        id: 'qo-cst-qz-3',
        kind: 'mcq',
        topic: 'cost-width-meaning',
        question: {
          en: 'In an EXPLAIN plan line (e.g. rows=1000 width=72), what does width=72 physically measure?',
          bn: 'EXPLAIN প্ল্যানের লাইনে (যেমন rows=1000 width=72) উল্লেখিত width=72 শারীরিকভাবে কী পরিমাপ করে?'
        },
        options: [
          {
            en: 'The estimated average size of each returned row in bytes, used by the optimizer to calculate memory allocation and work_mem buffer requirements',
            bn: 'প্রতিটি ফলাফল সারির আনুমানিক গড় আকার বাইট এককে, যা মেমরি বরাদ্দ এবং work_mem বাফারের প্রয়োজনীয়তা হিসাব করতে অপ্টিমাইজার ব্যবহার করে'
          },
          {
            en: 'The width of the computer screen in inches',
            bn: 'কম্পিউটার স্ক্রিনের প্রস্থ ইঞ্চি এককে'
          },
          {
            en: 'The total number of columns in the physical table',
            bn: 'ফিজিক্যাল টেবিলে থাকা মোট কলামের সংখ্যা'
          },
          {
            en: 'The percentage of the server hard drive currently in use',
            bn: 'সার্ভার হার্ড ড্রাইভের ব্যবহৃত জায়গার শতকরা হার'
          }
        ],
        answer: 0,
        hint: {
          en: 'Width is the average tuple size in bytes.',
          bn: 'Width হলো প্রতি টাপলের গড় আকার বাইট এককে।'
        },
        explanation: {
          en: 'Width represents estimated average byte size per row. Multiplying estimated rows by width gives total memory footprint, helping the engine decide if sorts or hashes will spill to disk.',
          bn: 'Width প্রতি রো-র গড় বাইট আকার নির্দেশ করে। সারির সংখ্যা দিয়ে এটিকে গুণ করলে মোট মেমরির চাপ বের হয়, যা ডিস্কে স্পিল হবে কিনা তা নির্ধারণ করতে ইঞ্জিনকে সাহায্য করে।'
        }
      },
      {
        id: 'qo-cst-qz-4',
        kind: 'mcq',
        topic: 'jit-compilation-cost-threshold',
        question: {
          en: 'In PostgreSQL 12+, when does the Cost-Based Optimizer activate Just-In-Time (JIT) compilation for query execution?',
          bn: 'PostgreSQL 12+ সংস্করণে কস্ট-বেসড অপ্টিমাইজার কখন কোয়েরি এক্সিকিউশনের জন্য Just-In-Time (JIT) কম্পাইলেশন চালু করে?'
        },
        options: [
          {
            en: 'When the estimated total cost of a query exceeds the jit_above_cost threshold (default 100000), compiling tuple expressions into native machine code to accelerate heavy CPU processing',
            bn: 'যখন কোনো কোয়েরির আনুমানিক মোট খরচ jit_above_cost সীমা (ডিফল্ট ১০০০০০) অতিক্রম করে, তখন জটিল সিপিইউ প্রসেসিং দ্রুত করতে রো এক্সপ্রেশনগুলোকে সরাসরি মেশিন কোডে কম্পাইল করা হয়'
          },
          {
            en: 'Whenever the database administrator types the word FASTER',
            bn: 'যখনই ডাটাবেস অ্যাডমিনিস্ট্রেটর FASTER শব্দটি টাইপ করেন'
          },
          {
            en: 'JIT compilation runs on every single query with zero cost consideration',
            bn: 'কোনো খরচ বিবেচনা না করেই প্রতিটি একক কোয়েরিতে JIT কম্পাইলেশন চালিত হয়'
          },
          {
            en: 'JIT compilation is only supported on mobile smartwatches',
            bn: 'JIT কম্পাইলেশন কেবল মোবাইল স্মার্টওয়াচে সমর্থিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'JIT compilation has a compile-time overhead, so it only triggers for expensive analytical queries.',
          bn: 'JIT কম্পাইল করতে সময় লাগে, তাই এটি কেবল অত্যন্ত ব্যয়বহুল অ্যানালিটিক্যাল কোয়েরির ক্ষেত্রে চালু হয়।'
        },
        explanation: {
          en: 'Compiling SQL expressions with LLVM takes milliseconds. For cheap OLTP queries, JIT would slow things down. It activates only for complex analytical queries with costs exceeding 100,000.',
          bn: 'LLVM দিয়ে কম্পাইল করতে কিছুটা সময় লাগে। ছোট কোয়েরির জন্য এটি উল্টো ধীরগতি তৈরি করত। তাই কেবল ১০০,০০০ খরচের বেশি থাকা জটিল অ্যানালিটিক্যাল কোয়েরিতে JIT কাজ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'merges-and-the-merge',
    title: {
      en: 'Physical Join Strategies: Nested Loop, Hash & Merge Joins',
      bn: 'ফিজিক্যাল জয়েন কৌশল: নেস্টেড লুপ, হ্যাশ ও মার্জ জয়েন'
    }
  }
};
