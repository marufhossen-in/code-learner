import type { Lesson } from '../../../lib/types';

export const StatsAndTheStatisticLesson: Lesson = {
  slug: 'stats-and-the-statistic',
  tech: 'indexes',
  title: {
    en: 'Database Optimizer Statistics: ANALYZE & Histograms',
    bn: 'ডাটাবেস অপ্টিমাইজার স্ট্যাটিস্টিকস: ANALYZE ও হিস্টোগ্রাম'
  },
  summary: {
    en: 'Master how the Cost-Based Optimizer (CBO) decides query execution paths: table statistics, histograms, selectivity calculations, the index tipping point, and the SQL ANALYZE command.',
    bn: 'কস্ট-বেসড অপ্টিমাইজার (CBO) কীভাবে কোয়েরির পথ নির্ধারণ করে তা আয়ত্ত করুন: টেবিল স্ট্যাটিস্টিকস, হিস্টোগ্রাম, সিলেক্টিভিটি হিসাব, ইনডেক্স টিপিং পয়েন্ট এবং SQL ANALYZE কমান্ড।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'the-brain-of-the-database',
      text: {
        en: 'The Cost-Based Optimizer: How Databases Decide Access Paths',
        bn: 'কস্ট-বেসড অপ্টিমাইজার: ডাটাবেস কীভাবে এক্সিকিউশন পথ বেছে নেয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you submit a SQL query, the database engine does not blindly utilize whichever index happens to exist. Instead, the query passes through the Cost-Based Optimizer (CBO). The CBO generates candidate execution strategies (such as Sequential Scans, Index Seeks, and Bitmap Index Scans) and calculates an estimated numerical cost for each path.',
        bn: 'যখন আপনি কোনো SQL কোয়েরি চালান, ডাটাবেস ইঞ্জিন টেবিলে থাকা যেকোনো ইনডেক্স অন্ধভাবে ব্যবহার করে ফেলে না। এর বদলে কোয়েরিটি কস্ট-বেসড অপ্টিমাইজার (CBO)-এর কাছে যায়। CBO সম্ভাব্য বিভিন্ন এক্সিকিউশন পথ তৈরি করে (যেমন সিকোয়েনশিয়াল স্ক্যান, ইনডেক্স সিক বা বিটম্যাপ স্ক্যান) এবং প্রতিটি পথের জন্য আনুমানিক খরচ বা কস্ট হিসাব করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The engine selects whichever path produces the lowest calculated cost. To compute these costs without reading every physical row on disk, the optimizer relies on statistical metadata: stored summaries recording row counts, null fractions, distinct value cardinality, and distribution histograms.',
        bn: 'যে পথটির আনুমানিক খরচ সবচেয়ে কম হয়, ইঞ্জিন কেবল সেই পথটিই চূড়ান্তভাবে বেছে নেয়। ডিস্কের প্রতিটি সারি বাস্তবে না পড়েই এই খরচের হিসাব করতে অপ্টিমাইজার অভ্যন্তরীণ স্ট্যাটিস্টিকসের ওপর নির্ভর করে: এতে মোট সারির সংখ্যা, নাল অনুপাত, ভিন্ন ভিন্ন অনন্য মানের সংখ্যা এবং হিস্টোগ্রাম সংরক্ষিত থাকে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Index Tipping Point: Index Seek Cost vs Sequential Table Scan Cost',
        bn: 'ইনডেক্স টিপিং পয়েন্ট: ইনডেক্স সিক খরচ বনাম সিকোয়েনশিয়াল টেবিল স্ক্যান খরচ'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Optimizer Tipping Point Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Graph Axis Lines -->
  <line x1="80" y1="260" x2="680" y2="260" stroke="#475569" stroke-width="2" />
  <line x1="80" y1="260" x2="80" y2="40" stroke="#475569" stroke-width="2" />

  <!-- Axis Labels -->
  <text x="380" y="295" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">Selectivity: Percentage of Total Table Rows Retrieved (%)</text>
  <text x="30" y="150" fill="#94a3b8" font-size="11" font-weight="bold" transform="rotate(-90 30 150)" text-anchor="middle">Estimated I/O Cost</text>

  <!-- Percentage Ticks on X Axis -->
  <text x="80" y="278" fill="#64748b" font-size="10" text-anchor="middle">0%</text>
  <text x="180" y="278" fill="#facc15" font-size="10" font-weight="bold" text-anchor="middle">15%</text>
  <text x="380" y="278" fill="#64748b" font-size="10" text-anchor="middle">50%</text>
  <text x="680" y="278" fill="#64748b" font-size="10" text-anchor="middle">100%</text>

  <!-- Seq Scan Line (Flat Blue Line: Multi-block sequential I/O) -->
  <line x1="80" y1="180" x2="680" y2="180" stroke="#38bdf8" stroke-width="3" />
  <text x="620" y="170" fill="#38bdf8" font-size="11" font-weight="bold">Sequential Scan Cost (Flat)</text>

  <!-- Index Scan Line (Steep Red Line: Random page I/O per row) -->
  <line x1="80" y1="250" x2="650" y2="50" stroke="#f87171" stroke-width="3" />
  <text x="560" y="70" fill="#f87171" font-size="11" font-weight="bold">Index Seek + Heap Cost</text>

  <!-- The Tipping Point Circle -->
  <circle cx="180" cy="180" r="7" fill="#facc15" stroke="#ffffff" stroke-width="2" />
  <line x1="180" y1="180" x2="180" y2="260" stroke="#facc15" stroke-width="1.5" stroke-dasharray="4 3" />
  <text x="180" y="155" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">The Tipping Point (~15%)</text>

  <!-- Region Labels -->
  <rect x="90" y="200" width="80" height="40" rx="4" fill="#065f46" stroke="#10b981" />
  <text x="130" y="218" fill="#a7f3d0" font-size="9" font-weight="bold" text-anchor="middle">INDEX SEEK</text>
  <text x="130" y="232" fill="#ffffff" font-size="8" text-anchor="middle">Lowest Cost</text>

  <rect x="250" y="110" width="130" height="40" rx="4" fill="#1e293b" stroke="#38bdf8" />
  <text x="315" y="128" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">FULL TABLE SCAN</text>
  <text x="315" y="142" fill="#cbd5e1" font-size="8" text-anchor="middle">Beats Random Disk I/O</text>
</svg>`,
      caption: {
        en: 'The Index Tipping Point: once a query retrieves more than roughly 15% of table rows, sequential multi-block reads beat thousands of random index seeks.',
        bn: 'ইনডেক্স টিপিং পয়েন্ট: কোয়েরি যদি টেবিলের প্রায় ১৫%-এর বেশি ডাটা উদ্ধার করে, তবে হাজার হাজার র্যান্ডম সিকের চেয়ে সিকোয়েনশিয়াল স্ক্যান অনেক দ্রুত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Cost-Based Optimizer (CBO)',
          def: {
            en: 'The relational database engine subsystem that analyzes statistical metadata to choose the most efficient execution plan for a query.',
            bn: 'ডাটাবেস ইঞ্জিনের মূল অংশ যা স্ট্যাটিস্টিকস বিশ্লেষণ করে কোয়েরির জন্য সবচেয়ে দ্রুতগতির এক্সিকিউশন প্ল্যান নির্বাচন করে।'
          }
        },
        {
          term: 'Selectivity',
          def: {
            en: 'The estimated proportion of total table rows that satisfy a query filter; high selectivity matches few rows, while low selectivity matches many.',
            bn: 'কোয়েরির শর্ত পূরণকারী সারির আনুমানিক শতকরা হার; উচ্চ সিলেক্টিভিটিতে খুব কম সারি মেলে আর নিম্ন সিলেক্টিভিটিতে অনেক বেশি সারি মেলে।'
          }
        },
        {
          term: 'The Tipping Point',
          def: {
            en: 'The selectivity threshold (typically 10% to 20%) beyond which the optimizer abandons index seeks and chooses a full table scan instead.',
            bn: 'সিলেক্টিভিটির এমন একটি সীমা (সাধারণত ১০% থেকে ২০%) যার ওপরে গেলে অপ্টিমাইজার ইনডেক্স সিক বাদ দিয়ে ফুল টেবিল স্ক্যান বেছে নেয়।'
          }
        },
        {
          term: 'ANALYZE Statement',
          def: {
            en: 'A maintenance command that samples table rows to update row counts, null fractions, MCVs, and histograms stored in the database catalog.',
            bn: 'একটি রক্ষণাবেক্ষণ কমান্ড যা টেবিলের পেজ বিশ্লেষণ করে ডাটাবেস ক্যাটালগে থাকা সমস্ত স্ট্যাটিস্টিকস এবং হিস্টোগ্রাম হালনাগাদ করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'histograms-and-mcv',
      text: {
        en: 'Histograms, Most Common Values (MCV), and Plan Flips',
        bn: 'হিস্টোগ্রাম, মোস্ট কমন ভ্যালুজ (MCV) এবং প্ল্যান ফ্লিপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Database catalogs store column distributions using Most Common Values (MCV) lists and equi-depth histograms. For skewed columns (such as order status where 95% of rows are COMPLETED), the MCV list records that value along with its exact frequency. For uniformly distributed continuous columns, equi-depth histograms divide values into buckets containing equal numbers of rows.',
        bn: 'ডাটাবেস ক্যাটালগ কলামের মানের বিস্তার ধরে রাখতে মোস্ট কমন ভ্যালুজ (MCV) এবং হিস্টোগ্রাম ব্যবহার করে। যেসব কলামে ডাটার বিস্তার অসম (যেমন অর্ডারের ৯৫% স্ট্যাটাস COMPLETED), MCV তালিকা সেই মান এবং তার সঠিক অনুপাত লিখে রাখে। আর সাধারণ সংখ্যাভিত্তিক কলামের ক্ষেত্রে সমান সংখ্যক ডাটাযুক্ত কয়েকটি বাকেটে ভাগ করে হিস্টোগ্রাম তৈরি করা হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a database undergoes massive bulk insertions or deletions, its statistics become stale. If the optimizer believes a table contains 100 rows when it actually contains 10000000 rows, it may choose a disastrous Nested Loop Join instead of a Hash Join. Running the SQL command ANALYZE updates these statistics and prevents catastrophic execution plan flips.',
        bn: 'কোনো ডাটাবেসে যখন বিপুল পরিমাণ নতুন ডাটা যোগ করা হয় বা মুছে ফেলা হয়, তখন এর স্ট্যাটিস্টিকস পুরানো হয়ে যায়। অপ্টিমাইজার যদি টেবিলটিকে ১০০ সারির মনে করে অথচ সেখানে বাস্তবে ১০০০০০০০ সারি থাকে, তবে সে হ্যাশ জয়েনের বদলে মারাত্মক ধীরগতির নেস্টেড লুপ জয়েন বেছে নিতে পারে। SQL কমান্ড ANALYZE চালালে সমস্ত স্ট্যাটিস্টিকস নতুন করে হিসাব হয় এবং এই ভুল সিদ্ধান্ত প্রতিরোধ করা যায়।'
      }
    },
    {
      type: 'heading',
      id: 'node-cbo-engine',
      text: {
        en: 'Executable Cost-Based Optimizer Simulator',
        bn: 'রানযোগ্য কস্ট-বেসড অপ্টিমাইজার সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine simulating the Cost-Based Optimizer mathematical cost model on a table with 100000 rows across 1000 disk pages. When an inquiry matches only 10 rows at a cost of 43 units, the planner selects an INDEX SEEK. When retrieving 10000 rows at a cost of 40003 units, it abandons tree traversal in favor of a FULL TABLE SCAN with a cost of 2000 units.',
        bn: 'নিচে ১০০০টি ডিস্ক পেজে ছড়ানো ১০০০০০ সারির একটি টেবিলে কস্ট-বেসড অপ্টিমাইজারের গাণিতিক খরচ হিসাবের একটি সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। যখন একটি অনুসন্ধানে মাত্র ১০টি রো পাওয়া যায় ৪৩ ইউনিট খরচে, তখন অপ্টিমাইজার INDEX SEEK বেছে নেয়। কিন্তু ১০০০০টি রো উদ্ধারের সময় ৪০০০৩ ইউনিট খরচে, এটি ইনডেক্স ত্যাগ করে ২০০০ ইউনিট খরচের FULL TABLE SCAN নির্বাচন করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Cost-Based Optimizer simulator demonstrating cost evaluation and the sequential scan tipping point',
        bn: 'খরচ মূল্যায়ন এবং সিকোয়েনশিয়াল স্ক্যান টিপিং পয়েন্ট প্রদর্শনকারী কস্ট-বেসড অপ্টিমাইজার সিমুলেটর'
      },
      code: `// Cost-Based Optimizer (CBO) Math Simulator
const totalTablePages = 1000;
const totalTableRows = 100000;
const sequentialPageCost = 1.0;
const randomPageCost = 4.0;
const cpuRowEvaluationCost = 0.01;

// Sequential Scan Cost: Read all pages sequentially + inspect every row in CPU
const sequentialScanCost = totalTablePages * sequentialPageCost + totalTableRows * cpuRowEvaluationCost; // 2000

function evaluateIndexSeekCost(matchingRowCount) {
  const btreeTreeDepth = 3;
  // B-Tree navigation pages (3) + random heap page seeks per matching row (4.0 each)
  return btreeTreeDepth * sequentialPageCost + matchingRowCount * randomPageCost;
}

// Scenario 1: High Selectivity Query (only 10 rows match)
const costQueryA = evaluateIndexSeekCost(10); // 3 + 40 = 43
const decisionA = costQueryA < sequentialScanCost ? 'INDEX SEEK' : 'FULL TABLE SCAN';

// Scenario 2: Low Selectivity Query (10,000 rows match - 10% of table)
const costQueryB = evaluateIndexSeekCost(10000); // 3 + 40000 = 40003
const decisionB = costQueryB < sequentialScanCost ? 'INDEX SEEK' : 'FULL TABLE SCAN';

const isAccurate = decisionA === 'INDEX SEEK' && decisionB === 'FULL TABLE SCAN' && sequentialScanCost === 2000;

console.log(\`[CBO Simulation] Query A (10 rows): Index cost \${costQueryA} vs Seq Scan \${sequentialScanCost} -> Selected \${decisionA}.\`);
console.log(\`[CBO Simulation] Query B (10000 rows): Index cost \${costQueryB} vs Seq Scan \${sequentialScanCost} -> Selected \${decisionB}.\`);
console.log(\`[Optimizer Verdict] Proved CBO tipping point: CBO flips to Seq Scan when selectivity degrades past threshold (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'When to Run ANALYZE Manually in Production',
        bn: 'প্রোডাকশনে কখন ম্যানুয়ালি ANALYZE চালাতে হয়'
      },
      text: {
        en: 'While PostgreSQL and MySQL autovacuum daemons automatically trigger ANALYZE when row changes exceed 10% or 20%, you should always run ANALYZE manually immediately after large bulk data migrations or batch ETL jobs. Refreshing stats immediately ensures queries never run against stale catalog metadata.',
        bn: 'যদিও PostgreSQL এবং MySQL ব্যাকগ্রাউন্ডে স্বয়ংক্রিয়ভাবে ANALYZE চালায় যখন ১০% বা ২০% ডাটা পরিবর্তিত হয়, তবুও বড় ডাটা মাইগ্রেশন বা বাল্ক লোডের পর তাৎক্ষণিকভাবে ম্যানুয়ালি ANALYZE চালানো উচিত। স্ট্যাটিস্টিকস সাথে সাথে হালনাগাদ করলে কোয়েরিগুলো পুরানো তথ্যের কারণে পথভ্রষ্ট হয় না।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'CBO Access Path Decider',
        bn: 'CBO এক্সিকিউশন পথ নির্ধারক'
      },
      description: {
        en: 'Determine whether the Cost-Based Optimizer will choose an Index Seek or a Sequential Scan based on matching row counts.',
        bn: 'ম্যাচিং সারির সংখ্যার ওপর ভিত্তি করে কস্ট-বেসড অপ্টিমাইজার ইনডেক্স সিক বেছে নেবে নাকি সিকোয়েনশিয়াল স্ক্যান বেছে নেবে তা নির্ধারণ করুন।'
      },
      code: `function decideAccessPath(matchingRows, tableRows) {
  const seqCost = 1000 + tableRows * 0.01;
  const indexCost = 3 + matchingRows * 4.0;
  return indexCost < seqCost ? 'CHOSEN: INDEX_SEEK' : 'CHOSEN: FULL_TABLE_SCAN';
}

console.log('5 Rows:', decideAccessPath(5, 100000));
console.log('5,000 Rows:', decideAccessPath(5000, 100000));`,
      tests: [
        {
          name: {
            en: 'Chooses Index Seek for 5 rows',
            bn: '৫টি সারির জন্য ইনডেক্স সিক বেছে নেয়'
          },
          expected: '5 Rows: CHOSEN: INDEX_SEEK'
        },
        {
          name: {
            en: 'Chooses Full Table Scan for 5,000 rows',
            bn: '৫০০০ সারির জন্য ফুল টেবিল স্ক্যান বেছে নেয়'
          },
          expected: '5,000 Rows: CHOSEN: FULL_TABLE_SCAN'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'idx-stat-ex-1',
      kind: 'mcq',
      topic: 'cbo-tipping-point-concept',
      question: {
        en: 'In relational database theory, what is the "Index Tipping Point"?',
        bn: 'রিলেশনাল ডাটাবেস তত্ত্বে "ইনডেক্স টিপিং পয়েন্ট" (Index Tipping Point) বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'The selectivity threshold (typically 10% to 20% of rows) beyond which the optimizer abandons index seeks and chooses a sequential table scan because thousands of random disk page lookups become slower than sequential multi-block reads',
          bn: 'সিলেক্টিভিটির এমন একটি সীমা (সাধারণত ১০% থেকে ২০% সারি) যার ওপরে গেলে অপ্টিমাইজার ইনডেক্স সিক বাদ দিয়ে সিকোয়েনশিয়াল স্ক্যান বেছে নেয় কারণ হাজার হাজার র্যান্ডম ডিস্ক রিডের চেয়ে একাধারে সমস্ত পেজ পড়া অনেক দ্রুত হয়'
        },
        {
          en: 'The physical moment a database server computer tips over and falls off a desk',
          bn: 'ডাটাবেস সার্ভার কম্পিউটার ডেস্ক থেকে উল্টে নিচে পড়ে যাওয়ার শারীরিক মুহূর্ত'
        },
        {
          en: 'The date when a database license subscription expires',
          bn: 'যে তারিখে ডাটাবেসের লাইসেন্স মেয়াদের সমাপ্তি ঘটে'
        },
        {
          en: 'The maximum temperature the server processor reaches under heavy load',
          bn: 'অতিরিক্ত চাপে সার্ভার প্রসেসরের সর্বোচ্চ তাপমাত্রায় পৌঁছানো'
        }
      ],
      answer: 0,
      hint: {
        en: 'Random I/O per row exceeds sequential read costs once too many rows match.',
        bn: 'অতিরিক্ত সারি মিললে প্রতি সারির জন্য র্যান্ডম ডিস্ক রিডের খরচ সিকোয়েনশিয়াল পড়ার খরচকে ছাড়িয়ে যায়।'
      },
      explanation: {
        en: 'Reading an index requires single-page random I/O hops to the heap. For large result sets, sequential prefetching of contiguous table blocks is orders of magnitude faster.',
        bn: 'ইনডেক্স ব্যবহার করলে প্রতি রো-র জন্য ডিস্কে র্যান্ডম জাম্প করতে হয়। বড় ফলাফলের ক্ষেত্রে একাধারে পুরো টেবিল পড়ে ফেলা বহুগুণ দ্রুততর হয়।'
      }
    },
    {
      id: 'idx-stat-ex-2',
      kind: 'mcq',
      topic: 'analyze-statement-purpose',
      question: {
        en: 'What specific database action occurs when a developer executes the SQL ANALYZE statement on a table?',
        bn: 'কোনো ডেভেলপার যখন কোনো টেবিলে SQL ANALYZE স্টেটমেন্ট চালান, তখন ডাটাবেসে সুনির্দিষ্টভাবে কী ঘটে?'
      },
      options: [
        {
          en: 'The database engine samples rows across the table to calculate up-to-date row counts, null fractions, and distribution histograms in the system catalogs for the optimizer',
          bn: 'ডাটাবেস ইঞ্জিন টেবিল থেকে নমুনা সারি সংগ্রহ করে অপ্টিমাইজারের জন্য সিস্টেম ক্যাটালগে মোট রো সংখ্যা, নাল অনুপাত এবং হিস্টোগ্রাম তথ্য হালনাগাদ করে'
        },
        {
          en: 'All table rows are permanently deleted from the database',
          bn: 'ডাটাবেস থেকে تمام টেবিল সারি চিরতরে মুছে যায়'
        },
        {
          en: 'The database server downloads new operating system updates from the internet',
          bn: 'ডাটাবেস সার্ভার ইন্টারনেট থেকে অপারেটিং সিস্টেমের নতুন আপডেট ডাউনলোড করে'
        },
        {
          en: 'All user passwords are automatically decrypted and displayed in plaintext',
          bn: 'تمام ব্যবহারকারীর পাসওয়ার্ড ডিক্রিপ্ট হয়ে প্লেইনটেক্সটে দেখা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'ANALYZE samples table pages to update statistical metadata used by the CBO.',
        bn: 'ANALYZE টেবিল পেজ বিশ্লেষণ করে CBO-র ব্যবহৃত স্ট্যাটিস্টিকস হালনাগাদ করে।'
      },
      explanation: {
        en: 'ANALYZE does not read every single row; it takes a statistically sound random sample of pages, refreshing histogram bounds and cardinality estimates in pg_statistic.',
        bn: 'ANALYZE প্রতিটি রো পড়ে না; এটি নমুনা পেজ সংগ্রহ করে অত্যন্ত নির্ভুল হিস্টোগ্রাম ও ক্যাটালগ তথ্য প্রস্তুত করে।'
      }
    },
    {
      id: 'idx-stat-ex-3',
      kind: 'mcq',
      topic: 'stale-statistics-plan-flip',
      question: {
        en: 'What dangerous performance defect can occur if a database table\'s optimizer statistics become severely stale after a 10-million row bulk load?',
        bn: '১০ মিলিয়ন সারির বাল্ক লোডের পর ডাটাবেস টেবিলের স্ট্যাটিস্টিকস পুরানো ও অসত্য রয়ে গেলে কোন মারাত্মক পারফরম্যান্স সংকট দেখা দিতে পারে?'
      },
      options: [
        {
          en: 'Catastrophic Plan Flips: the optimizer mistakenly believes the table is tiny and chooses a slow Nested Loop join or full table scan, causing query execution times to explode from milliseconds to hours',
          bn: 'মারাত্মক প্ল্যান ফ্লিপ: অপ্টিমাইজার টেবিলটিকে ছোট মনে করে ভুলবশত ধীরগতির নেস্টেড লুপ জয়েন বেছে নেয়, যার ফলে কোয়েরির সময় মিলিসেকেন্ড থেকে কয়েক ঘণ্টায় পৌঁছে যায়'
        },
        {
          en: 'The database tables are converted into MP3 audio podcasts',
          bn: 'تمام ডাটাবেস টেবিল MP3 অডিও পডকাস্টে রূপান্তরিত হয়ে যায়'
        },
        {
          en: 'The server motherboard turns into solid ice',
          bn: 'সার্ভারের মাদারবোর্ড শক্ত বরফে পরিণত হয়'
        },
        {
          en: 'The database drops all primary keys without warning',
          bn: 'ডাটাবেস কোনো সতর্কবার্তা ছাড়াই تمام প্রাইমারি কি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Stale statistics deceive the CBO into selecting horrible join algorithms.',
        bn: 'পুরানো স্ট্যাটিস্টিকস অপ্টিমাইজারকে বিভ্রান্ত করে ভুল জয়েন অ্যালগরিদম বেছে নিতে বাধ্য করে।'
      },
      explanation: {
        en: 'The optimizer relies entirely on statistics to evaluate cost. If it believes a 10-million row table has only 50 rows, it will execute nested loops that take hours to finish.',
        bn: 'অপ্টিমাইজার পুরোপুরি স্ট্যাটিস্টিকসের তথ্যের ওপর নির্ভর করে। কোটি সারির টেবিলকে ৫০ সারির মনে করলে সে এমন অ্যালগরিদম চালাবে যা শেষ হতে ঘণ্টার পর ঘণ্টা লেগে যাবে।'
      }
    },
    {
      id: 'idx-stat-ex-4',
      kind: 'mcq',
      topic: 'most-common-values-mcv-function',
      question: {
        en: 'How does the Most Common Values (MCV) list in database statistics assist the optimizer with heavily skewed data columns?',
        bn: 'ডাটাবেস স্ট্যাটিস্টিকসের মোস্ট কমন ভ্যালুজ (MCV) তালিকা কীভাবে চরম অসম ডাটা কলামের ক্ষেত্রে অপ্টিমাইজারকে সহায়তা করে?'
      },
      options: [
        {
          en: 'It stores the exact values and frequencies of the most prominent items (e.g. 98% \'SUCCESS\'), allowing the optimizer to choose an index seek for rare values and a table scan for common values',
          bn: 'এটি সর্বাধিক প্রচলিত মান এবং তাদের সঠিক অনুপাত সংরক্ষণ করে (যেমন ৯৮% \'SUCCESS\'), ফলে অপ্টিমাইজার বিরল মানের ক্ষেত্রে ইনডেক্স সিক এবং সাধারণ মানের ক্ষেত্রে টেবিল স্ক্যান বেছে নিতে পারে'
        },
        {
          en: 'It deletes the most common values from the database to save space',
          bn: 'জায়গা বাঁচাতে এটি সবচেয়ে বেশি আসা মানগুলোকে ডাটাবেস থেকে মুছে দেয়'
        },
        {
          en: 'It prints the values onto a color poster in the office',
          bn: 'এটি মানগুলোকে অফিসের একটি রঙিন পোস্টারে প্রিন্ট করে রাখে'
        },
        {
          en: 'It changes the values to random numbers between 1 and 10',
          bn: 'এটি মানগুলোকে ১ থেকে ১০ এর মধ্যকার এলোমেলো সংখ্যায় রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'MCVs track frequent values so the optimizer differentiates rare keys from common keys.',
        bn: 'MCV ঘন ঘন আসা মানগুলোর হিসাব রাখে যাতে অপ্টিমাইজার বিরল মানের জন্য আলাদা কৌশল নিতে পারে।'
      },
      explanation: {
        en: 'Without MCV statistics, the planner assumes uniform distribution. MCVs inform the planner that 98% of rows are \'SUCCESS\', prompting it to skip the index for \'SUCCESS\' but use it for rare \'FAILED\' rows.',
        bn: 'MCV না থাকলে অপ্টিমাইজার সব মান সমান সংখ্যায় আছে ধরে নিত। MCV অপ্টিমাইজারকে জানিয়ে দেয় যে ৯৮% রো-তেই \'SUCCESS\' আছে, তাই সেটির জন্য ইনডেক্স বাদ দিয়ে বাকি বিরল মানের জন্য ইনডেক্স ব্যবহার করে।'
      }
    }
  ],
  quiz: {
    id: 'stats-and-the-statistic-quiz',
    title: {
      en: 'Database Optimizer Statistics & CBO Quiz',
      bn: 'ডাটাবেস অপ্টিমাইজার স্ট্যাটিস্টিকস ও CBO কুইজ'
    },
    questions: [
      {
        id: 'idx-stat-qz-1',
        kind: 'mcq',
        topic: 'cbo-cost-unit-meaning',
        question: {
          en: 'In PostgreSQL EXPLAIN output (e.g. cost=0.00..43.50), what does the arbitrary cost number physically represent?',
          bn: 'PostgreSQL-এর EXPLAIN ফলাফলে (যেমন cost=0.00..43.50) উল্লেখিত খরচ বা কস্ট সংখ্যাটি শারীরিকভাবে কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'An estimated measurement of execution work normalized in arbitrary disk page fetch units (where 1.0 equals a sequential disk page read)',
            bn: 'কাজের পরিমাণের একটি আনুমানিক হিসাব যা ডিস্ক পেজ রিড এককে রূপান্তরিত (যেখানে ১.০ মানে একটি সিকোয়েনশিয়াল ডিস্ক পেজ পড়া)'
          },
          {
            en: 'The dollar amount in US currency charged to the developer\'s credit card',
            bn: 'ডেভেলপারের ক্রেডিট কার্ড থেকে কেটে নেওয়া মার্কিন ডলারের পরিমাণ'
          },
          {
            en: 'The exact number of seconds the query took to execute on the CPU clock',
            bn: 'সিপিইউ ঘড়িতে কোয়েরিটি চলতে ঠিক কত সেকেন্ড সময় লেগেছিল তার সংখ্যা'
          },
          {
            en: 'The total number of computer monitors attached to the server',
            bn: 'সার্ভারের সাথে সংযুক্ত কম্পিউটার মনিটরের মোট সংখ্যা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Cost is dimensionless work, traditionally keyed to seq_page_cost = 1.0.',
          bn: 'কস্ট হলো কাজের একটি আপেক্ষিক পরিমাপ, যার ভিত্তি ধরা হয় seq_page_cost = ১.০।'
        },
        explanation: {
          en: 'Cost is an arbitrary unit where 1.0 represents seq_page_cost (one sequential disk read). Random reads typically default to 4.0 (random_page_cost), and CPU evaluations cost fractions of a unit.',
          bn: 'কস্ট হলো একটি আপেক্ষিক মান যেখানে ১.০ হলো একটি সিকোয়েনশিয়াল রিডের খরচ। র্যান্ডম রিডের খরচ ধরা হয় ৪.০ এবং সিপিইউ প্রসেসিংয়ের জন্য ভগ্নাংশ মান ধরা হয়।'
        }
      },
      {
        id: 'idx-stat-qz-2',
        kind: 'mcq',
        topic: 'autovacuum-auto-analyze-thresholds',
        question: {
          en: 'How does PostgreSQL automatically decide when to run ANALYZE in the background without developer intervention?',
          bn: 'ডেভেলপারের কোনো হস্তক্ষেপ ছাড়াই PostgreSQL ব্যাকগ্রাউন্ডে কখন ANALYZE চালাতে হবে তা কীভাবে স্বয়ংক্রিয়ভাবে নির্ধারণ করে?'
        },
        options: [
          {
            en: 'The autovacuum daemon tracks table modifications and triggers auto-ANALYZE whenever updated or inserted rows exceed a configured threshold (typically 50 rows + 10% of total table rows)',
            bn: 'autovacuum ডেমন পরিবর্তনের হিসাব রাখে এবং আপডেট বা ইনসার্ট হওয়া রো-র সংখ্যা নির্দিষ্ট সীমা অতিক্রম করলেই (সাধারণত ৫০ রো + মোট টেবিল সারির ১০%) স্বয়ংক্রিয়ভাবে ANALYZE চালায়'
          },
          {
            en: 'By flipping a coin once every hour inside the database computer',
            bn: 'ডাটাবেস কম্পিউটারের ভেতরে প্রতি এক ঘণ্টায় একবার মুদ্রা টস করার মাধ্যমে'
          },
          {
            en: 'By waiting until all developers go home for the weekend',
            bn: 'تمام ডেভেলপাররা সাপ্তাহিক ছুটিতে বাড়ি না যাওয়া পর্যন্ত অপেক্ষা করে'
          },
          {
            en: 'It never runs automatically; ANALYZE can only be triggered manually',
            bn: 'এটি কখনোই একা চলে না; ANALYZE কেবল ম্যানুয়ালি চালানো সম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Autovacuum monitors dead tuples and row modifications to fire auto-ANALYZE.',
          bn: 'Autovacuum রো পরিবর্তনের ওপর নজর রেখে স্বয়ংক্রিয়ভাবে ANALYZE পরিচালনা করে।'
        },
        explanation: {
          en: 'PostgreSQL configures autovacuum_analyze_threshold (50) and autovacuum_analyze_scale_factor (0.10). Once 10% of rows change plus 50 rows, auto-ANALYZE runs smoothly in the background.',
          bn: 'PostgreSQL-এ ৫০ রো এবং ১০% পরিবর্তনের সীমা থাকে। কোনো টেবিলে ১০% রো বদলে গেলেই ব্যাকগ্রাউন্ডে স্বয়ংক্রিয়ভাবে ANALYZE চালু হয়ে যায়।'
        }
      },
      {
        id: 'idx-stat-qz-3',
        kind: 'mcq',
        topic: 'equi-depth-histogram-property',
        question: {
          en: 'What defines an "Equi-Depth Histogram" in database optimizer statistics, and how does it differ from a standard equi-width histogram?',
          bn: 'ডাটাবেস অপ্টিমাইজার স্ট্যাটিস্টিকসে "ইকুই-ডেপথ হিস্টোগ্রাম" (Equi-Depth Histogram) কীভাবে সংজ্ঞায়িত এবং এটি সাধারণ হিস্টোগ্রাম থেকে কীভাবে আলাদা?'
        },
        options: [
          {
            en: 'Each histogram bucket contains an equal number of table rows, with bucket boundaries adjusting to match data density rather than dividing the value range into equal mathematical intervals',
            bn: 'প্রতিটি হিস্টোগ্রাম বাকেটে সমান সংখ্যক টেবিল সারি থাকে, এবং সমান ব্যবধানের বদলে ডাটার ঘনত্বের সাথে সমন্বয় করে বাকেটের সীমানা নির্ধারিত হয়'
          },
          {
            en: 'All buckets have identical numerical widths regardless of how many rows they contain',
            bn: 'ভিতরে কতগুলো রো আছে তা না দেখেই تمام বাকেটের সংখ্যাগত ব্যবধান সমান রাখা হয়'
          },
          {
            en: 'The histogram is drawn with blue colored ink on physical paper',
            bn: 'হিস্টোগ্রামটি কাগজের ওপর নীল রঙের কালি দিয়ে আঁকা হয়'
          },
          {
            en: 'Equi-depth histograms can only store negative numbers',
            bn: 'ইকুই-ডেপথ হিস্টোগ্রাম কেবল ঋণাত্মক সংখ্যা সংরক্ষণ করতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Equi-depth means equal row counts per bucket, adapting cleanly to data clustering.',
          bn: 'ইকুই-ডেপথ মানে প্রতিটি বাকেটে সমান সংখ্যক রো, যা ডাটার ঘনত্বের সাথে নিখুঁতভাবে মানিয়ে নেয়।'
        },
        explanation: {
          en: 'Equi-depth histograms ensure that dense regions of data receive many narrow buckets, giving the optimizer high precision where most queries fall, while sparse regions receive wide buckets.',
          bn: 'ইকুই-ডেপথ হিস্টোগ্রামে যেসব অঞ্চলে ডাটা বেশি থাকে সেখানে ছোট ছোট অনেকগুলো বাকেট তৈরি হয়, যা ঘন ঘন চলা কোয়েরিতে অপ্টিমাইজারকে সর্বোচ্চ নিখুঁত হিসাব দেয়।'
        }
      },
      {
        id: 'idx-stat-qz-4',
        kind: 'mcq',
        topic: 'optimizer-index-ignore-diagnostic',
        question: {
          en: 'When a developer is frustrated that PostgreSQL is "ignoring my index" on a WHERE status = \'ACTIVE\' query, what is almost always the technical reason revealed by EXPLAIN ANALYZE?',
          bn: 'WHERE status = \'ACTIVE\' কোয়েরিতে PostgreSQL "আমার ইনডেক্স ব্যবহার করছে না" দেখে ডেভেলপাররা যখন বিস্মিত হন, তখন EXPLAIN ANALYZE চালালে প্রায় সবসময় কোন কারিগরি কারণটি প্রকাশ পায়?'
        },
        options: [
          {
            en: 'The query returns a large percentage of table rows (e.g. 40% are ACTIVE); the optimizer correctly determined that a sequential scan is far faster than 400,000 random disk page heap lookups',
            bn: 'কোয়েরিটি টেবিলের একটি বিশাল অংশের রো ফেরত দেয় (যেমন ৪০% সারি ACTIVE); অপ্টিমাইজার নির্ভুলভাবে হিসেব করে দেখেছে যে ৪ লাখ র্যান্ডম ডিস্ক রিডের চেয়ে পুরো টেবিল স্ক্যান করা অনেক দ্রুত'
          },
          {
            en: 'The developer forgot to turn on their computer monitor',
            bn: 'ডেভেলপার তার কম্পিউটার মনিটর অন করতে ভুলে গেছেন'
          },
          {
            en: 'PostgreSQL has a secret dislike for the English word ACTIVE',
            bn: 'PostgreSQL গোপন কোনো কারণে ইংরেজি ACTIVE শব্দটি অপছন্দ করে'
          },
          {
            en: 'The index was deleted by an internet hacker from outer space',
            bn: 'মহাকাশ থেকে কোনো হ্যাকার এসে ইনডেক্সটি মুছে দিয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The optimizer is smart: sequential scans are faster than massive random heap hops.',
          bn: 'অপ্টিমাইজার অত্যন্ত বুদ্ধিমান: বিপুল সংখ্যক র্যান্ডম হিপ জাম্পের চেয়ে সিকোয়েনশিয়াল স্ক্যান অনেক দ্রুত।'
        },
        explanation: {
          en: 'New developers assume indexes are always faster. If 40% of rows match, an index forces hundreds of thousands of random I/O seeks. A multi-block sequential scan is dramatically faster.',
          bn: 'নতুন ডেভেলপাররা ভাবেন ইনডেক্স সবসময়ই দ্রুত। কিন্তু ৪০% ডাটা মিললে ইনডেক্স দিয়ে লক্ষ লক্ষ র্যান্ডম ডিস্ক রিড করতে হয়। এমন ক্ষেত্রে সিকোয়েনশিয়াল স্ক্যান বহুগুণ দ্রুততর।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-index-release',
    title: {
      en: 'Production Index Lifecycle: Bloat, Overhead & Concurrent Builds',
      bn: 'প্রোডাকশন ইনডেক্স জীবনচক্র: ব্লোট, অতিরিক্ত খরচ ও কনকারেন্ট বিল্ড'
    }
  }
};
