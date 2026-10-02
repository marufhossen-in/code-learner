import type { Lesson } from '../../../lib/types';

export const SortsAndTheSortLesson: Lesson = {
  slug: 'sorts-and-the-sort',
  tech: 'query-optimization',
  title: {
    en: 'Sorting Mechanics & Memory Tuning: work_mem, Heapsort & Disk Spills',
    bn: 'সর্টিং মেকানিজম ও মেমরি টিউনিং: work_mem, হিপসর্ট ও ডিস্ক স্পিল'
  },
  summary: {
    en: 'Master how relational databases execute ORDER BY queries. Explore in-memory quicksort, top-N heapsort, multi-pass external merge disk spills, work_mem sizing per node, and index-backed zero-cost sorting.',
    bn: 'রিলেশনাল ডাটাবেস কীভাবে ORDER BY কোয়েরি সম্পাদন করে তা গভীরভাবে শিখুন। ইন-মেমরি কুইকসর্ট, টপ-N হিপসর্ট, মাল্টি-পাস এক্সটার্নাল মার্জ ডিস্ক স্পিল, নোড প্রতি work_mem সাইজিং এবং ইনডেক্স-ভিত্তিক জিরো-কস্ট সর্টিং আয়ত্ত করুন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'sort-bottleneck',
      text: {
        en: 'The Cost of Sorting: Why ORDER BY Causes Latency Spikes',
        bn: 'সর্টিংয়ের আসল খরচ: কেন ORDER BY লেটেন্সি বাড়ায়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you run a database query with ORDER BY, you force the database engine to perform one of its most resource-intensive tasks. Unlike filter or projection nodes that stream rows as they arrive, a Sort node creates a blocking pipeline barrier. The execution engine must consume and materialize every matching tuple before emitting the very first row.',
        bn: 'যখন আপনি ORDER BY দিয়ে কোনো ডাটাবেস কোয়েরি চালান, আপনি ডাটাবেস ইঞ্জিনকে তার অন্যতম কঠিন কাজটি করতে বাধ্য করেন। ফিল্টার বা প্রজেকশন নোডের মতো এটি ডাটা আসার সাথে সাথে পাঠাতে পারে না, বরং সর্ট নোড একটি পাইপলাইন বাধার সৃষ্টি করে। প্রথম সারিটি আউটপুটে পাঠানোর আগেই ইঞ্জিনকে প্রতিটি ম্যাচিং রো মেমরিতে নিয়ে আসতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Sorting is not only triggered by an explicit ORDER BY clause. Operations such as SELECT DISTINCT, UNION without ALL, window functions with PARTITION BY, and physical Merge Joins also force the database engine to sort row sets.',
        bn: 'সর্টিং শুধুমাত্র সরাসরি ORDER BY ক্লজ দিয়েই শুরু হয় না। SELECT DISTINCT, ALL ছাড়া UNION, PARTITION BY সহ উইন্ডো ফাংশন এবং ফিজিক্যাল মার্জ জয়েনও ডাটাবেস ইঞ্জিনকে রো সর্ট করতে বাধ্য করে।'
      }
    },
    {
      type: 'diagram',
      id: 'sort-architecture-diagram',
      caption: {
        en: 'Figure 1: Database sort path selection — in-memory quicksort, bounded top-N heapsort, external merge disk spill, and index scan elimination.',
        bn: 'চিত্র ১: ডাটাবেস সর্ট পাথ নির্বাচন — ইন-মেমরি কুইকসর্ট, বাউন্ডেড টপ-N হিপসর্ট, এক্সটার্নাল মার্জ ডিস্ক স্পিল এবং ইনডেক্স স্ক্যানের মাধ্যমে সর্ট পরিহার।'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="hdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#3b82f6"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
    <linearGradient id="memGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="spillGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#311010"/>
      <stop offset="100%" stop-color="#1a0808"/>
    </linearGradient>
    <linearGradient id="idxGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#64748b"/>
    </marker>
    <marker id="arrowGrn" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#10b981"/>
    </marker>
    <marker id="arrowRed" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#ef4444"/>
    </marker>
  </defs>

  <!-- Title Banner -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#hdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">🗂️</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">DATABASE SORTING EXECUTION PATHWAYS</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">work_mem memory limits, heapsort bounds, temporary disk spills, and index bypass</text>

  <!-- Input SQL Query -->
  <rect x="24" y="90" width="220" height="150" rx="8" fill="#111827" stroke="#334155" stroke-width="1.5"/>
  <text x="40" y="115" fill="#38bdf8" font-size="12" font-weight="bold">INCOMING SQL</text>
  <rect x="36" y="128" width="196" height="96" rx="6" fill="#030712" stroke="#1e293b"/>
  <text x="46" y="148" fill="#a78bfa" font-size="11">SELECT * FROM orders</text>
  <text x="46" y="166" fill="#f1f5f9" font-size="11">WHERE tenant_id = 99</text>
  <text x="46" y="184" fill="#f59e0b" font-size="11">ORDER BY created_at</text>
  <text x="46" y="202" fill="#10b981" font-size="11">LIMIT 10;</text>

  <!-- Decision Junction -->
  <path d="M 244 165 L 290 165" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <!-- Decision Box 1: Index Available? -->
  <rect x="290" y="115" width="180" height="100" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="380" y="142" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">Index on Sort Key?</text>
  <text x="380" y="165" fill="#cbd5e1" font-size="11" text-anchor="middle">(tenant_id, created_at)</text>
  <text x="380" y="195" fill="#94a3b8" font-size="10" text-anchor="middle">Check B-Tree leaves</text>

  <!-- Bypass Lane: Index Scan -->
  <path d="M 380 115 L 380 40 L 520 40" stroke="#10b981" stroke-width="2" stroke-dasharray="4,4" fill="none" marker-end="url(#arrowGrn)"/>
  <rect x="520" y="20" width="416" height="42" rx="6" fill="url(#idxGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="535" y="44" fill="#34d399" font-size="12" font-weight="bold">B-TREE INDEX SCAN: 0 SORT OVERHEAD (Instant $O(1)$ stream)</text>

  <!-- No Index Path -->
  <path d="M 470 165 L 520 165" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="495" y="155" fill="#f87171" font-size="10" font-weight="bold" text-anchor="middle">NO</text>

  <!-- Decision Box 2: Memory & Limits -->
  <rect x="520" y="80" width="416" height="380" rx="10" fill="#0b1120" stroke="#1e293b" stroke-width="1.5"/>
  <text x="540" y="105" fill="#94a3b8" font-size="12" font-weight="bold">PHYSICAL SORT OPERATORS IN ENGINE</text>

  <!-- Pathway 1: Top-N Heapsort -->
  <rect x="540" y="120" width="376" height="95" rx="8" fill="url(#memGrad)" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="555" y="142" fill="#38bdf8" font-size="13" font-weight="bold">1. Top-N Heapsort (Bounded In-Memory)</text>
  <text x="555" y="162" fill="#e2e8f0" font-size="11">• Trigger: ORDER BY with small LIMIT (e.g. LIMIT 10)</text>
  <text x="555" y="180" fill="#94a3b8" font-size="10">• Memory: Exactly K elements kept in binary heap</text>
  <text x="555" y="198" fill="#34d399" font-size="10">• Efficiency: O(N log K) time, avoids sorting 99.9% of rows</text>

  <!-- Pathway 2: Quicksort In-Memory -->
  <rect x="540" y="228" width="376" height="95" rx="8" fill="url(#memGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="555" y="250" fill="#10b981" font-size="13" font-weight="bold">2. In-Memory Quicksort</text>
  <text x="555" y="270" fill="#e2e8f0" font-size="11">• Trigger: Full result set size &lt;= work_mem (e.g. 4MB)</text>
  <text x="555" y="288" fill="#94a3b8" font-size="10">• Memory: Tuples stored in contiguous RAM buffer</text>
  <text x="555" y="306" fill="#34d399" font-size="10">• Efficiency: Pure CPU operations, zero disk I/O latency</text>

  <!-- Pathway 3: External Merge Spill -->
  <rect x="540" y="336" width="376" height="110" rx="8" fill="url(#spillGrad)" stroke="#ef4444" stroke-width="1.5"/>
  <text x="555" y="358" fill="#f87171" font-size="13" font-weight="bold">3. External Merge Sort (Disk Spill Hazard)</text>
  <text x="555" y="378" fill="#fca5a5" font-size="11">• Trigger: Dataset volume exceeds work_mem threshold</text>
  <text x="555" y="396" fill="#e2e8f0" font-size="10">• Action: Sorts memory chunks, flushes temporary runs to disk</text>
  <text x="555" y="414" fill="#94a3b8" font-size="10">• Merging: Multi-pass merge reads runs back from storage</text>
  <text x="555" y="432" fill="#ef4444" font-size="10" font-weight="bold">• Danger: Severe disk write/read amplification (10x-100x latency)</text>

  <!-- Bottom Legend -->
  <rect x="24" y="260" width="220" height="200" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <text x="40" y="285" fill="#f8fafc" font-size="12" font-weight="bold">KEY RULES &amp; LIMITS</text>
  <text x="40" y="310" fill="#38bdf8" font-size="11">work_mem Default:</text>
  <text x="40" y="328" fill="#e2e8f0" font-size="10">PostgreSQL = 4MB</text>
  <text x="40" y="354" fill="#f59e0b" font-size="11">Allocation Scope:</text>
  <text x="40" y="372" fill="#e2e8f0" font-size="10">Per operator node, not</text>
  <text x="40" y="388" fill="#e2e8f0" font-size="10">per connection or query!</text>
  <text x="40" y="416" fill="#10b981" font-size="11">Golden Rule:</text>
  <text x="40" y="434" fill="#34d399" font-size="10">B-Tree index eliminates</text>
  <text x="40" y="450" fill="#34d399" font-size="10">sort node completely.</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'sort-strategies',
      text: {
        en: 'The Three Execution Strategies: Quicksort, Heapsort & External Merge',
        bn: 'তিনটি সর্ট এক্সিকিউশন কৌশল: কুইকসর্ট, হিপসর্ট ও এক্সটার্নাল মার্জ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When the query planner decides that a physical sort is mandatory, the executor selects one of 3 distinct algorithms based on result volume and memory parameters.',
        bn: 'যখন কোয়েরি প্ল্যানার সিদ্ধান্ত নেয় যে ফিজিক্যাল সর্ট অপরিহার্য, তখন এক্সিকিউটর ডাটার পরিমাণ ও মেমরির ওপর ভিত্তি করে ৩টি আলাদা অ্যালগরিদমের মধ্য থেকে ১টি বেছে নেয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'In-Memory Quicksort: Used when all sorting data fits comfortably inside work_mem. Tuples are organized in memory arrays and sorted rapidly using CPU caches.',
          bn: 'ইন-মেমরি কুইকসর্ট: যখন পুরো সর্টিং ডাটা work_mem সীমার মধ্যে ধরে যায় তখন এটি ব্যবহৃত হয়। রো-গুলো মেমরি অ্যারেতে সাজিয়ে দ্রুত সিপিইউ ক্যাশ ব্যবহার করে সর্ট করা হয়।'
        },
        {
          en: 'Top-N Heapsort: Selected when an ORDER BY is bounded by a small LIMIT clause. The engine maintains a priority queue of size N in RAM, evaluating rows on the fly without holding the entire table.',
          bn: 'টপ-N হিপসর্ট: যখন ORDER BY-এর সাথে একটি ছোট LIMIT ক্লজ থাকে তখন এটি ব্যবহৃত হয়। ইঞ্জিন মেমরিতে N আকারের একটি প্রায়োরিটি কিউ ধরে রাখে, পুরো টেবিল লোড না করেই রো মূল্যায়ন করে।'
        },
        {
          en: 'External Merge Sort: Triggered when data exceeds work_mem. The engine fills memory, sorts chunks, writes temporary files to disk, and merges them across multiple I/O passes.',
          bn: 'এক্সটার্নাল মার্জ সর্ট: ডাটা যখন work_mem সীমা অতিক্রম করে তখন এটি ঘটে। ইঞ্জিন মেমরি ভর্তি করে খণ্ড খণ্ড অংশ সর্ট করে ডিস্কে টেম্পোরারি ফাইল হিসেবে লেখে এবং পরে মাল্টি-পাস I/O-এর মাধ্যমে মিলিয়ে নেয়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'work-mem-danger',
      text: {
        en: 'The work_mem Multiplier Trap: Why Massive Settings Cause OOM Crashes',
        bn: 'work_mem গুণিতকের ফাঁদ: কেন অতিরিক্ত মেমরি দিলে OOM ক্র্যাশ ঘটে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A common junior engineer mistake is setting work_mem to 1GB to prevent external merge disk spills. However, work_mem is not allocated once per database or once per client connection. It is allocated per sort and hash operator node inside every query execution plan.',
        bn: 'নতুন ইঞ্জিনিয়ারদের একটি সাধারণ ভুল হলো ডিস্ক স্পিল ঠেকাতে work_mem সরাসরি ১GB করে দেওয়া। অথচ work_mem পুরো ডাটাবেসে বা প্রতি কানেকশনে একবার বরাদ্দ হয় না। এটি কোয়েরি প্ল্যানের প্রতিটি সর্ট ও হ্যাশ অপারেটর নোডের জন্য আলাদাভাবে বরাদ্দ হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'If a single query features 2 sort nodes and 1 hash join, that individual query can consume 3 times work_mem. If that query runs across 100 concurrent connections, memory usage multiplies rapidly and risks triggering the Linux Out-Of-Memory killer.',
        bn: 'একটি কোয়েরিতে যদি ২টি সর্ট নোড এবং ১টি হ্যাশ জয়েন থাকে, তবে সেই একক কোয়েরিটি work_mem এর ৩ গুণ মেমরি ব্যবহার করতে পারে। আর সেই কোয়েরি ১০০টি কনকারেন্ট কানেকশনে চললে মেমরির ব্যবহার বহুগুণ বেড়ে যায় এবং সার্ভার ক্র্যাশ করার ঝুঁকি তৈরি হয়।'
      }
    },
    {
      type: 'heading',
      id: 'eliminate-sorts',
      text: {
        en: 'Eliminating Sorts with B-Tree Indexes',
        bn: 'B-Tree ইনডেক্স ব্যবহারের মাধ্যমে সর্টিং সম্পূর্ণ পরিহার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The fastest sort is the sort that never happens. B-Tree index leaf pages are physically maintained in pre-sorted key order. When an ORDER BY matches the index column ordering, the database engine simply traverses index leaf pages with an Index Scan.',
        bn: 'সবচেয়ে দ্রুতগতির সর্ট হলো সেই সর্ট যা কখনোই চালাতে হয় না। B-Tree ইনডেক্সের লিফ পেজগুলো আগে থেকেই ক্রমানুসারে সাজানো থাকে। যখন কোনো ORDER BY ইনডেক্স কলামের ক্রমের সাথে মিলে যায়, তখন ডাটাবেস ইঞ্জিন সরাসরি ইনডেক্স স্ক্যানের মাধ্যমে ডাটা পড়ে ফেলে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For example, with an index on created_at, a query requesting the newest 10 records returns immediately. The startup cost drops to zero, work_mem consumption is zero, and zero temporary disk files are created.',
        bn: 'উদাহরণস্বরূপ, created_at কলামে ইনডেক্স থাকলে সর্বশেষ ১০টি রেকর্ড চাওয়ার সাথে সাথে কোয়েরি সম্পন্ন হয়। এতে স্টার্টআপ খরচ শূন্যে নেমে আসে, কোনো মেমরি অপচয় হয় না এবং ডিস্কে কোনো ফাইল তৈরি হয় না।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-simulator',
      text: {
        en: 'Interactive Benchmark: Simulating Sort Allocations and Disk Spills',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: সর্ট মেমরি বরাদ্দ ও ডিস্ক স্পিল সিমুলেশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'sort-engine-simulator.ts',
      code: `// Database Sorting Strategy & Memory Engine Simulation
function runSortSimulation() {
  const TOTAL_ROWS = 100000;
  const WORK_MEM_BYTES = 4 * 1024 * 1024; // 4MB default
  const BYTES_PER_ROW = 128; // 128 bytes per row tuple
  const MAX_ROWS_IN_MEM = Math.floor(WORK_MEM_BYTES / BYTES_PER_ROW); // 32768 rows

  console.log("=== DATABASE SORT STRATEGY SIMULATION ===");
  console.log(\`Total Rows: \${TOTAL_ROWS} | Row Size: \${BYTES_PER_ROW} B | work_mem: 4MB (\${MAX_ROWS_IN_MEM} rows max)\`);

  // 1. Small Batch fitting inside work_mem (quicksort)
  const smallBatchSize = 10000;
  const smallBatchBytes = smallBatchSize * BYTES_PER_ROW;
  const smallBatchFits = smallBatchBytes <= WORK_MEM_BYTES;
  console.log(\`\\n1. Small Batch (\${smallBatchSize} rows): \${smallBatchBytes / 1024} KB\`);
  console.log(\`   Strategy: \${smallBatchFits ? 'quicksort (in-memory)' : 'external merge'}\`);
  console.log(\`   Disk Spill: \${smallBatchFits ? '0 KB (Memory only)' : 'Disk Temp Files'}\`);

  // 2. Large Batch exceeding work_mem (external merge sort)
  const largeBatchBytes = TOTAL_ROWS * BYTES_PER_ROW;
  const runsCount = Math.ceil(largeBatchBytes / WORK_MEM_BYTES);
  const diskSpillBytes = largeBatchBytes;
  console.log(\`\\n2. Large Batch (\${TOTAL_ROWS} rows): \${(largeBatchBytes / (1024 * 1024)).toFixed(2)} MB\`);
  console.log(\`   Strategy: external merge (disk spill)\`);
  console.log(\`   Memory Buffer: 4MB | Runs Written to Disk: \${runsCount}\`);
  console.log(\`   Disk Spill Volume: \${(diskSpillBytes / 1024).toFixed(0)} KB\`);

  // 3. Top-N Heapsort Optimization with LIMIT 5
  const topK = 5;
  const heapMemoryBytes = topK * BYTES_PER_ROW;
  console.log(\`\\n3. Top-N Heapsort with LIMIT \${topK}:\`);
  console.log(\`   Total Scanned: \${TOTAL_ROWS} rows\`);
  console.log(\`   Heap Storage: \${heapMemoryBytes} B (Maintains bounded priority queue of \${topK} items)\`);
  console.log(\`   Disk Spill: 0 KB | Strategy: top-N heapsort (in-memory)\`);

  // 4. B-Tree Index Elimination
  console.log(\`\\n4. B-Tree Index Scan (Pre-Sorted):\`);
  console.log(\`   Sort Node: NONE (Eliminated)\`);
  console.log(\`   Memory Used: 0 B | Disk Spill: 0 B\`);
  console.log(\`   Execution: Index Scan directly yields requested rows in sorted order\`);

  return { smallBatchFits, runsCount, topK, diskSpillKB: Math.round(diskSpillBytes / 1024) };
}

runSortSimulation();`
    },
    {
      type: 'terminal',
      id: 'sort-output',
      cmd: 'npx tsx sort-engine-simulator.ts',
      output: `=== DATABASE SORT STRATEGY SIMULATION ===
Total Rows: 100000 | Row Size: 128 B | work_mem: 4MB (32768 rows max)

1. Small Batch (10000 rows): 1250 KB
   Strategy: quicksort (in-memory)
   Disk Spill: 0 KB (Memory only)

2. Large Batch (100000 rows): 12.21 MB
   Strategy: external merge (disk spill)
   Memory Buffer: 4MB | Runs Written to Disk: 4
   Disk Spill Volume: 12500 KB

3. Top-N Heapsort with LIMIT 5:
   Total Scanned: 100000 rows
   Heap Storage: 640 B (Maintains bounded priority queue of 5 items)
   Disk Spill: 0 KB | Strategy: top-N heapsort (in-memory)

4. B-Tree Index Scan (Pre-Sorted):
   Sort Node: NONE (Eliminated)
   Memory Used: 0 B | Disk Spill: 0 B
   Execution: Index Scan directly yields requested rows in sorted order`
    }
  ],
  exercises: [
    {
      id: 'qo-srt-ex-1',
      kind: 'mcq',
      topic: 'top-n-heapsort-limits',
      question: {
        en: 'Which sorting algorithm does PostgreSQL select when a query has ORDER BY created_at DESC LIMIT 5 on an un-indexed table, and why?',
        bn: 'একটি ইনডেক্সবিহীন টেবিলে ORDER BY created_at DESC LIMIT 5 কোয়েরি চালালে PostgreSQL কোন সর্টিং অ্যালগরিদম বেছে নেয় এবং কেন?'
      },
      options: [
        {
          en: 'top-N heapsort: maintains a bounded priority queue of only 5 items in memory, requiring minimal RAM compared to full quicksort',
          bn: 'টপ-N হিপসর্ট: মেমরিতে মাত্র ৫টি আইটেমের বাউন্ডেড প্রায়োরিটি কিউ ধরে রাখে, যা কুইকসর্টের তুলনায় নামমাত্র মেমরি ব্যবহার করে'
        },
        {
          en: 'external merge: spills the entire table to disk files immediately',
          bn: 'এক্সটার্নাল মার্জ: তাৎক্ষণিকভাবে পুরো টেবিল ডিস্ক ফাইলে পাঠিয়ে দেয়'
        },
        {
          en: 'bubble sort: compares every adjacent pair on SSD storage',
          bn: 'বাবল সর্ট: এসএসডি স্টোরেজে প্রতিটি পাশাপাশি মান তুলনা করে'
        },
        {
          en: 'hash join: creates a hash table for sorting',
          bn: 'হ্যাশ জয়েন: সর্টিংয়ের জন্য একটি হ্যাশ টেবিল তৈরি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The query only asks for 5 tuples, so holding all 100000 rows in memory is unnecessary.',
        bn: 'কোয়েরিতে কেবল ৫টি রো চাওয়া হয়েছে, তাই মেমরিতে ১০০০০০ সারি রাখার কোনো প্রয়োজন নেই।'
      },
      explanation: {
        en: 'When a query includes LIMIT K with an ORDER BY, top-N heapsort keeps only K rows in memory. Each incoming row is checked against the heap root in O(log K) time.',
        bn: 'যখন কোনো কোয়েরিতে ORDER BY-এর সাথে LIMIT K থাকে, তখন টপ-N হিপসর্ট মেমরিতে মাত্র K সংখ্যক রো রাখে। প্রতিটি আগত সারি O(log K) সময়ে যাচাই করা হয়।'
      }
    },
    {
      id: 'qo-srt-ex-2',
      kind: 'mcq',
      topic: 'external-merge-disk-spill',
      question: {
        en: 'In EXPLAIN ANALYZE, you observe: Sort Method: external merge Disk: 12500kB. Why did the engine choose external merge instead of quicksort?',
        bn: 'EXPLAIN ANALYZE-এ দেখা যাচ্ছে: Sort Method: external merge Disk: 12500kB। ইঞ্জিন মেমরিতে quicksort না চালিয়ে কেন external merge বেছে নিয়েছে?'
      },
      options: [
        {
          en: 'The sorted dataset size (12500kB) exceeded the configured work_mem threshold, forcing the engine to flush sorted batches to temporary disk files',
          bn: 'সর্ট করা ডাটার আকার (12500kB) নির্ধারিত work_mem সীমা ছাড়িয়ে গেছে, ফলে ইঞ্জিন ডিস্কে টেম্পোরারি ফাইলে ডাটা পাঠাতে বাধ্য হয়েছে'
        },
        {
          en: 'The database server ran out of hard disk storage',
          bn: 'ডাটাবেস সার্ভারে হার্ডডিস্ক স্টোরেজ পুরোপুরি শেষ হয়ে গিয়েছিল'
        },
        {
          en: 'The SQL query had a syntax error in the ORDER BY clause',
          bn: 'এসকিউএল কোয়েরির ORDER BY ক্লজে একটি সিনট্যাক্স ভুল ছিল'
        },
        {
          en: 'PostgreSQL does not support in-memory sorting',
          bn: 'পোস্টগ্রেসকুয়েল মেমরিতে সর্টিং সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Compare the dataset size (12500kB) against the default work_mem threshold (4MB).',
        bn: 'ডাটার সাইজ (12500kB) এর সাথে ডিফল্ট work_mem সীমা (4MB) তুলনা করুন।'
      },
      explanation: {
        en: 'When the volume of data being sorted exceeds work_mem (12.5MB vs 4MB), PostgreSQL flushes sorted batches to temporary disk files and merges them.',
        bn: 'সর্ট করার ডাটার পরিমাণ যখন work_mem সীমা ছাড়িয়ে যায় (১২.৫MB বনাম ৪MB), তখন পোস্টগ্রেসকুয়েল ডিস্কে অস্থায়ী ফাইল লিখে তা পরবর্তীতে একত্রিত করে।'
      }
    },
    {
      id: 'qo-srt-ex-3',
      kind: 'mcq',
      topic: 'work-mem-concurrency-math',
      question: {
        en: 'A database server has max_connections = 100. A query plan features 2 sort nodes and 1 hash join. If work_mem is set to 32MB, what is the maximum theoretical RAM that could be allocated across 100 concurrent executions of this query?',
        bn: 'একটি ডাটাবেস সার্ভারে max_connections = 100। একটি কোয়েরি প্ল্যানে 2টি সর্ট নোড এবং 1টি হ্যাশ জয়েন রয়েছে। যদি work_mem 32MB নির্ধারণ করা হয়, তবে এই কোয়েরিটির 100টি যুগপৎ এক্সিকিউশনে সর্বোচ্চ তাত্ত্বিক কত মেমরি বরাদ্দ হতে পারে?'
      },
      options: [
        {
          en: '9600MB (9.6GB), because each of the 100 queries can allocate work_mem for each of its 3 nodes (100 * 3 * 32MB)',
          bn: '9600MB (9.6GB), কারণ 100টি কোয়েরির প্রতিটি তার 3টি নোডের প্রতিটির জন্য work_mem বরাদ্দ করতে পারে (100 * 3 * 32MB)'
        },
        {
          en: '32MB, because work_mem is shared globally across the entire database server',
          bn: '32MB, কারণ work_mem পুরো ডাটাবেস সার্ভারে গ্লোবালি শেয়ার করা থাকে'
        },
        {
          en: '3200MB, because work_mem is allocated once per connection',
          bn: '3200MB, কারণ work_mem প্রতি কানেকশনে কেবল একবারই বরাদ্দ হয়'
        },
        {
          en: '0MB, because sorts only run on hard disk drives',
          bn: '0MB, কারণ সর্টিং কেবল হার্ডডিস্ক ড্রাইভেই সম্পাদিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each query has 3 nodes (2 sorts + 1 hash join), and each node can allocate work_mem.',
        bn: 'প্রতিটি কোয়েরিতে ৩টি নোড রয়েছে (২টি সর্ট + ১টি হ্যাশ জয়েন), এবং প্রতিটি নোড work_mem বরাদ্দ করতে পারে।'
      },
      explanation: {
        en: 'work_mem is allocated per operation node. 100 queries times 3 nodes times 32MB equals 9600MB of potential memory demand.',
        bn: 'work_mem প্রতিটি অপারেশন নোডের জন্য বরাদ্দ হয়। ১০০টি কোয়েরি গুণ ৩টি নোড গুণ ৩২MB সমান মোট ৯৬০০MB সম্ভাব্য মেমরির চাহিদা তৈরি করে।'
      }
    },
    {
      id: 'qo-srt-ex-4',
      kind: 'mcq',
      topic: 'eliminate-sort-nodes-btree',
      question: {
        en: 'How does adding a B-Tree index on (tenant_id, created_at DESC) optimize SELECT * FROM events WHERE tenant_id = 42 ORDER BY created_at DESC LIMIT 10?',
        bn: '(tenant_id, created_at DESC) এর ওপর B-Tree ইনডেক্স যোগ করলে SELECT * FROM events WHERE tenant_id = 42 ORDER BY created_at DESC LIMIT 10 কোয়েরিটি কীভাবে অপ্টিমাইজ হয়?'
      },
      options: [
        {
          en: 'It eliminates the Sort node entirely by streaming the first 10 rows in index order with 0 memory allocation',
          bn: 'এটি ইনডেক্স থেকে সরাসরি ক্রমানুসারে প্রথম ১০টি রো পাঠিয়ে সর্ট নোডটি সম্পূর্ণ দূর করে এবং কোনো মেমরি অপচয় করে না'
        },
        {
          en: 'It compresses the database table using GZIP compression',
          bn: 'এটি GZIP কম্প্রেশন ব্যবহার করে ডাটাবেস টেবিল সংকুচিত করে'
        },
        {
          en: 'It forces the planner to use external merge sort on disk',
          bn: 'এটি প্ল্যানারকে ডিস্কে এক্সটার্নাল মার্জ সর্ট ব্যবহার করতে বাধ্য করে'
        },
        {
          en: 'It converts the SQL query into an un-ordered sequential scan',
          bn: 'এটি এসকিউএল কোয়েরিকে একটি এলোমেলো সিকোয়েনশিয়াল স্ক্যানে রূপান্তরিত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Check whether the index leaf pages already match the WHERE and ORDER BY ordering.',
        bn: 'ইনডেক্সের লিফ পেজগুলো WHERE এবং ORDER BY-এর ক্রমের সাথে মিলে যায় কিনা তা দেখুন।'
      },
      explanation: {
        en: 'Because the index maintains entries ordered by created_at DESC for tenant_id 42, the engine reads the top 10 index leaves directly with zero sorting.',
        bn: 'যেহেতু ইনডেক্সটি tenant_id ৪২ এর জন্য created_at DESC অনুসারে সাজানো থাকে, তাই ইঞ্জিন কোনো সর্ট ছাড়াই সরাসরি শীর্ষ ১০টি ইনডেক্স লিফ পড়ে ফেলে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Database Sorting & Memory Architecture Quiz',
      bn: 'ডাটাবেস সর্টিং ও মেমরি আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'qo-srt-qz-1',
        kind: 'mcq',
        topic: 'work-mem-global-oom-risk',
        question: {
          en: 'What is the primary operational danger of increasing PostgreSQL work_mem from 4MB to 512MB globally in postgresql.conf?',
          bn: 'postgresql.conf ফাইলে work_mem মান 4MB থেকে বিশ্বব্যাপী 512MB-এ বাড়িয়ে দিলে প্রধান অপারেশনাল ঝুঁকি কী হতে পারে?'
        },
        options: [
          {
            en: 'Under high concurrent query load, multi-node plans can exhaust physical server RAM, triggering the Linux OOM killer to terminate the database process',
            bn: 'উচ্চ কনকারেন্ট লোডের সময় মাল্টি-নোড প্ল্যান সার্ভারের সমস্ত র‍্যাম শেষ করে ফেলতে পারে, যা লিনাক্স OOM কিলার সক্রিয় করে ডাটাবেস বন্ধ করে দেয়'
          },
          {
            en: 'The database will reject all SELECT statements',
            bn: 'ডাটাবেস সমস্ত SELECT স্টেটমেন্ট প্রত্যাখ্যান করা শুরু করবে'
          },
          {
            en: 'All B-Tree indexes will be automatically deleted from disk',
            bn: 'ডিস্ক থেকে সমস্ত B-Tree ইনডেক্স স্বয়ংক্রিয়ভাবে মুছে যাবে'
          },
          {
            en: 'It permanently limits each query to a single row output',
            bn: 'এটি প্রতিটি কোয়েরিকে স্থায়ীভাবে মাত্র একটি সারিতে সীমাবদ্ধ করে ফেলবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Remember that work_mem is multiplied across operators and concurrent client connections.',
          bn: 'মনে রাখবেন work_mem প্রতিটি অপারেটর এবং সমান্তরাল ক্লায়েন্ট কানেকশন জুড়ে গুণিতক হারে বৃদ্ধি পায়।'
        },
        explanation: {
          en: 'If 100 queries each execute 4 sort/hash nodes with 512MB work_mem, maximum possible memory usage reaches 200GB, exhausting physical RAM and crashing the server.',
          bn: 'যদি ১০০টি কোয়েরি প্রতিটি ৫১২MB work_mem সহ ৪টি করে সর্ট/হ্যাশ নোড চালায়, তবে সম্ভাব্য মেমরি চাহিদা ২০০GB ছাড়িয়ে সার্ভার ক্র্যাশ ঘটাতে পারে।'
        }
      },
      {
        id: 'qo-srt-qz-2',
        kind: 'mcq',
        topic: 'explain-sort-method-in-memory',
        question: {
          en: 'In PostgreSQL EXPLAIN ANALYZE, you observe: Sort Method: quicksort Memory: 840kB. What does this metric confirm about execution?',
          bn: 'PostgreSQL EXPLAIN ANALYZE-এ আপনি লক্ষ্য করলেন: Sort Method: quicksort Memory: 840kB। এই মেট্রিকটি এক্সিকিউশন সম্পর্কে কী নিশ্চিত করে?'
        },
        options: [
          {
            en: 'The complete sort operation was performed entirely in RAM without any disk I/O, utilizing 840kB of work_mem',
            bn: 'সম্পূর্ণ সর্টিং প্রক্রিয়াটি কোনো ডিস্ক I/O ছাড়াই পুরোপুরি র‍্যামে সম্পন্ন হয়েছে, যাতে 840kB মেমরি ব্যবহৃত হয়েছে'
          },
          {
            en: 'The query failed and spilled 840kB of temporary files to SSD',
            bn: 'কোয়েরিটি ব্যর্থ হয়েছে এবং এসএসডিতে 840kB টেম্পোরারি ফাইল স্পিল করেছে'
          },
          {
            en: 'The database was forced to execute a slow external merge sort',
            bn: 'ডাটাবেস একটি ধীরগতির এক্সটার্নাল মার্জ সর্ট চালাতে বাধ্য হয়েছিল'
          },
          {
            en: 'The query used 840 parallel CPU worker threads',
            bn: 'কোয়েরিটি 840টি প্যারালাল সিপিইউ ওয়ার্কার থ্রেড ব্যবহার করেছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'quicksort indicates an in-memory execution strategy that fit within work_mem.',
          bn: 'quicksort নির্দেশ করে যে সর্টিং প্রক্রিয়াটি মেমরির ভেতরেই সম্পন্ন হয়েছে এবং তা work_mem সীমার মধ্যে ছিল।'
        },
        explanation: {
          en: 'quicksort confirms that the tuples fit within work_mem. The entire sort was resolved in RAM in 840kB with zero temporary disk files.',
          bn: 'quicksort নিশ্চিত করে যে ডাটা work_mem সীমার মধ্যে ধরেছিল। সম্পূর্ণ সর্ট কোনো ডিস্ক ফাইল ছাড়াই র‍্যামে ৮৪০kB মেমরির মধ্যে সম্পন্ন হয়েছে।'
        }
      },
      {
        id: 'qo-srt-qz-3',
        kind: 'mcq',
        topic: 'implicit-sort-operations',
        question: {
          en: 'Which SQL operation can introduce a Sort node in an execution plan even if the query does NOT contain an explicit ORDER BY clause?',
          bn: 'কোন SQL অপারেশনটির কারণে কোয়েরিতে স্পষ্ট ORDER BY ক্লজ না থাকা সত্ত্বেও এক্সিকিউশন প্ল্যানে একটি Sort নোড যুক্ত হতে পারে?'
        },
        options: [
          {
            en: 'SELECT DISTINCT, UNION (without ALL), or Merge Join operations that require deduplication or pre-sorted input streams',
            bn: 'SELECT DISTINCT, ALL ছাড়া UNION, অথবা মার্জ জয়েন অপারেশন যার জন্য ডুপ্লিকেট দূরীকরণ বা পূর্ব-সাজানো ডাটা প্রবাহ প্রয়োজন'
          },
          {
            en: 'SELECT * FROM table without WHERE clause',
            bn: 'WHERE ক্লজ ছাড়া SELECT * FROM টেবিল কোয়েরি'
          },
          {
            en: 'INSERT INTO statements inserting a single row',
            bn: 'একক সারি ইনসার্ট করার INSERT INTO স্টেটমেন্ট'
          },
          {
            en: 'DROP TABLE statements',
            bn: 'DROP TABLE স্টেটমেন্ট'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about operations that must find duplicates or require sorted inputs to align streams.',
          bn: 'এমন অপারেশনের কথা ভাবুন যা ডুপ্লিকেট দূর করতে হয় অথবা ডাটা প্রবাহ মেলাতে ক্রমানুসারে ইনপুট চায়।'
        },
        explanation: {
          en: 'SELECT DISTINCT and UNION without ALL must identify and remove duplicate rows. Sorting the rows brings duplicates together for simple deduplication.',
          bn: 'SELECT DISTINCT এবং ALL বিহীন UNION-কে ডুপ্লিকেট রো বাদ দিতে হয়। সারিগুলোকে সর্ট করলে ডুপ্লিকেট ডাটা পাশাপাশি চলে আসে, ফলে সহজে ডুপ্লিকেট মুছে ফেলা যায়।'
        }
      },
      {
        id: 'qo-srt-qz-4',
        kind: 'mcq',
        topic: 'per-session-work-mem-tuning',
        question: {
          en: 'Instead of increasing work_mem globally for all 200 web connections, what is the best practice for running an occasional heavy reporting query that sorts 500000 rows?',
          bn: 'সমস্ত 200টি ওয়েব সংযোগের জন্য বিশ্বব্যাপী work_mem না বাড়িয়ে, 500000 সারি সাজানোর প্রয়োজন এমন ভারী রিপোর্টিং কোয়েরি চালানোর সেরা পদ্ধতি কোনটি?'
        },
        options: [
          {
            en: 'Set work_mem locally within the reporting session or transaction using SET LOCAL work_mem = 64MB;, leaving global connections safe',
            bn: 'SET LOCAL work_mem = 64MB; ব্যবহার করে শুধুমাত্র রিপোর্টিং সেশন বা ট্রানজ্যাকশনে স্থানীয়ভাবে মান বাড়ানো, যাতে গ্লোবাল সংযোগ সুরক্ষিত থাকে'
          },
          {
            en: 'Restart the entire database server before and after running the report',
            bn: 'রিপোর্ট চালানোর আগে ও পরে পুরো ডাটাবেস সার্ভার রিস্টার্ট করা'
          },
          {
            en: 'Delete all foreign keys in the database',
            bn: 'ডাটাবেসের সমস্ত ফরেন কি মুছে ফেলা'
          },
          {
            en: 'Convert all tables to unlogged temporary tables',
            bn: 'সমস্ত টেবিলকে আনলগড টেম্পোরারি টেবিলে রূপান্তর করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'PostgreSQL allows overriding session-level and transaction-level parameters with SET LOCAL.',
          bn: 'PostgreSQL সেশন এবং ট্রানজ্যাকশন লেভেলে SET LOCAL কমান্ডের মাধ্যমে প্যারামিটার পরিবর্তনের সুযোগ দেয়।'
        },
        explanation: {
          en: 'Using SET LOCAL work_mem = 64MB grants extra memory exclusively to the heavy reporting transaction while keeping standard web connections at a safe 4MB.',
          bn: 'SET LOCAL work_mem = 64MB ব্যবহার করলে কেবল নির্দিষ্ট রিপোর্টিং ট্রানজ্যাকশনে মেমরি বাড়ে এবং সাধারণ ওয়েব সংযোগগুলো নিরাপদ ৪MB সীমায় থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'caches-and-the-cache',
    title: {
      en: 'Buffer Pool & Cache Mechanics: Shared Buffers & Hit Ratios',
      bn: 'বাফার পুল ও ক্যাশ মেকানিজম: শেয়ার্ড বাফার ও হিট রেশিও'
    }
  }
};
