import type { Lesson } from '../../../lib/types';

export const IdxsAndTheIndexLesson: Lesson = {
  slug: 'idxs-and-the-index',
  tech: 'indexes',
  title: {
    en: 'Database Indexes & Table Scans: Sequential Scans vs Index Seeks',
    bn: 'ডাটাবেস ইনডেক্স ও টেবিল স্ক্যান: সিকোয়েনশিয়াল স্ক্যান বনাম ইনডেক্স সিক'
  },
  summary: {
    en: 'A beginner\'s overview of database indexing: sequential table scans vs index seeks, O(N) heap sweeps vs O(log N) tree navigation, and the SQL CREATE INDEX statement.',
    bn: 'ডাটাবেস ইনডেক্সিংয়ের একটি মৌলিক পরিচিতি: সিকোয়েনশিয়াল টেবিল স্ক্যান বনাম ইনডেক্স সিক, O(N) হিপ স্ক্যান বনাম O(log N) ট্রি নেভিগেশন এবং SQL CREATE INDEX স্টেটমেন্ট।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'the-need-for-indexing',
      text: {
        en: 'The Library Without an Index: The O(N) Table Scan Nightmare',
        bn: 'ইনডেক্সহীন লাইব্রেরির সংকট: O(N) টেবিল স্ক্যানের ভয়াবহতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When your database table holds only a few hundred rows, querying data is practically instant. The engine can easily scan every row without noticeable delay. However, as tables expand to millions of records, searching through every single row brings the entire system to a crawl. Database indexes solve this bottleneck by providing structured search paths directly to target records.',
        bn: 'যখন আপনার ডাটাবেস টেবিলে মাত্র কয়েকশ সারি থাকে, তখন কোয়েরির ফলাফল প্রায় সাথে সাথেই পাওয়া যায়। কোনো লক্ষণীয় বিলম্ব ছাড়াই ইঞ্জিন সহজেই সমস্ত সারি স্ক্যান করে ফেলতে পারে। কিন্তু টেবিলের আকার যখন লক্ষ লক্ষ রেকর্ডে পৌঁছায়, তখন প্রতিটি সারি পরীক্ষা করতে গেলে পুরো সিস্টেম ধীরগতির হয়ে পড়ে। ডাটাবেস ইনডেক্স সরাসরি নির্দিষ্ট রেকর্ডে পৌঁছানোর সুশৃঙ্খল পথ তৈরি করে এই সমস্যার সমাধান করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Imagine reading an encyclopedia of 1000 pages where topics are scattered in completely random order. Without an alphabetical index at the back of the book, finding the entry for "Ada Lovelace" requires reading through every single page from 1 to 1000. In database storage engines, this exhaustive, brute-force search is called a Full Table Scan (or Sequential Scan).',
        bn: 'কল্পনা করুন ১০০০ পৃষ্ঠার একটি বিশ্বকোষ যেখানে تمام তথ্য এলোমেলোভাবে ছড়ানো আছে। বইয়ের পেছনে কোনো বর্ণানুক্রমিক ইনডেক্স না থাকলে "অ্যাডা লাভলেস" সম্পর্কিত লেখাটি খুঁজতে আপনাকে ১ নম্বর থেকে ১০০০ নম্বর পৃষ্ঠা পর্যন্ত প্রতিটি পৃষ্ঠা পড়তে হবে। ডাটাবেস স্টোরেজ ইঞ্জিনে এই ধরনের ক্লান্তিকর অনুসন্ধানকে ফুল টেবিল স্ক্যান (বা সিকোয়েনশিয়াল স্ক্যান) বলা হয়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Full Table Scan vs B-Tree Index Seek Architecture',
        bn: 'ফুল টেবিল স্ক্যান বনাম B-Tree ইনডেক্স সিক আর্কিটেকচার'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Sequential Scan vs Index Seek">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Left: Full Table Scan O(N) -->
  <g transform="translate(30, 25)">
    <rect width="320" height="280" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
    <text x="160" y="30" fill="#f87171" font-size="14" font-weight="bold" text-anchor="middle">Full Table Scan (Seq Scan)</text>
    <text x="160" y="48" fill="#94a3b8" font-size="10" text-anchor="middle">Time Complexity: O(N) Heap Read</text>

    <!-- Table Blocks (Sequential Sweep) -->
    <rect x="25" y="65" width="270" height="34" rx="4" fill="#7f1d1d" stroke="#ef4444" />
    <text x="35" y="86" fill="#fecaca" font-size="10">Page 1: Rows 1 - 250 (Not found)</text>

    <rect x="25" y="105" width="270" height="34" rx="4" fill="#7f1d1d" stroke="#ef4444" />
    <text x="35" y="126" fill="#fecaca" font-size="10">Page 2: Rows 251 - 500 (Not found)</text>

    <rect x="25" y="145" width="270" height="34" rx="4" fill="#7f1d1d" stroke="#ef4444" />
    <text x="35" y="166" fill="#fecaca" font-size="10">Page 3: Rows 501 - 750 (Not found)</text>

    <rect x="25" y="185" width="270" height="34" rx="4" fill="#065f46" stroke="#10b981" />
    <text x="35" y="206" fill="#a7f3d0" font-size="10">Page 1,000: Target Match Found!</text>

    <text x="25" y="245" fill="#fca5a5" font-size="10" font-weight="bold">Disadvantage:</text>
    <text x="25" y="262" fill="#cbd5e1" font-size="9">Exhausts disk I/O bandwidth; reads entire table.</text>
  </g>

  <!-- Right: B-Tree Index Seek O(log N) -->
  <g transform="translate(380, 25)">
    <rect width="330" height="280" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <text x="165" y="30" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">Index Seek (B-Tree)</text>
    <text x="165" y="48" fill="#94a3b8" font-size="10" text-anchor="middle">Time Complexity: O(log N) Tree Path</text>

    <!-- Root Node -->
    <rect x="110" y="65" width="110" height="32" rx="4" fill="#0284c7" stroke="#38bdf8" />
    <text x="165" y="85" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Root: [50k | 100k]</text>

    <!-- Downward Arrow -->
    <path d="M 165 97 L 165 115" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

    <!-- Branch Node -->
    <rect x="100" y="117" width="130" height="32" rx="4" fill="#0369a1" stroke="#38bdf8" />
    <text x="165" y="137" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Branch: [70k | 80k]</text>

    <!-- Downward Arrow -->
    <path d="M 165 149 L 165 167" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

    <!-- Leaf Node -->
    <rect x="75" y="169" width="180" height="32" rx="4" fill="#065f46" stroke="#10b981" />
    <text x="165" y="189" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">Leaf: Key 75432 -&gt; Pointer</text>

    <!-- Pointer to Heap -->
    <path d="M 165 201 L 165 220" stroke="#10b981" stroke-width="2" stroke-dasharray="3 2" />
    <rect x="65" y="222" width="200" height="28" rx="4" fill="#0f172a" stroke="#10b981" />
    <text x="165" y="240" fill="#34d399" font-size="9" text-anchor="middle">Table Heap: Block 412, Slot 19</text>

    <text x="25" y="272" fill="#34d399" font-size="9" font-weight="bold">Advantage: Only 3 page reads out of 100,000!</text>
  </g>
</svg>`,
      caption: {
        en: 'Comparison of O(N) sequential table scan reading every disk block versus O(log N) index seek navigating directly to target records.',
        bn: 'প্রতিটি ডিস্ক ব্লক পড়া O(N) সিকোয়েনশিয়াল স্ক্যান এবং সরাসরি লক্ষ্য রেকর্ডে পৌঁছানো O(log N) ইনডেক্স সিকের তুলনা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Full Table Scan (Sequential Scan)',
          def: {
            en: 'A database query execution method that sequentially reads every single page and row in a table to evaluate filter predicates.',
            bn: 'একটি কোয়েরি এক্সিকিউশন পদ্ধতি যা টেবিলের প্রতিটি পেজ এবং সারি ধারাবাহিকভাবে পড়ে নির্দিষ্ট শর্ত মেলায়।'
          }
        },
        {
          term: 'Index Seek',
          def: {
            en: 'A targeted retrieval method that traverses a balanced B-Tree index from root to leaf to locate specific rows in O(log N) time.',
            bn: 'একটি অত্যন্ত দ্রুত অনুসন্ধান পদ্ধতি যা B-Tree ইনডেক্স বেয়ে সরাসরি নির্দিষ্ট সারির অবস্থান খুঁজে বের করে।'
          }
        },
        {
          term: 'Table Heap',
          def: {
            en: 'The unordered collection of physical database storage blocks where actual table row records are stored.',
            bn: 'ডাটাবেস স্টোরেজের অগোছালো ডাটা ব্লক যেখানে মূল টেবিলের সারিগুলো শারীরিকভাবে সংরক্ষিত থাকে।'
          }
        },
        {
          term: 'Row Pointer (TID / RID)',
          def: {
            en: 'A physical identifier (such as Block Number and Offset Slot) stored in index leaf pages pointing to the exact byte location of a row in the heap.',
            bn: 'ইনডেক্স পাতায় থাকা একটি নির্দেশক যা মূল হিপে সারির সঠিক ব্লক এবং অফসেট অবস্থানকে চিহ্নিত করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'index-scan-vs-index-seek',
      text: {
        en: 'Index Seek vs Index Scan: Understanding the Query Plan',
        bn: 'ইনডেক্স সিক বনাম ইনডেক্স স্ক্যান: কোয়েরি প্ল্যান বোঝা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Database query execution plans distinguish between an Index Seek and an Index Scan. In an Index Seek, the query engine evaluates an equality predicate (such as WHERE user_id = 42) and navigates down the tree branches to pinpoint the exact leaf page. The engine reads only 3 or 4 pages total, delivering responses in under 1 millisecond.',
        bn: 'ডাটাবেস কোয়েরি এক্সিকিউশন প্ল্যানে ইনডেক্স সিক এবং ইনডেক্স স্ক্যানের মধ্যে পরিষ্কার পার্থক্য করা হয়। ইনডেক্স সিকে কোয়েরি ইঞ্জিন একটি সমতা শর্ত (যেমন WHERE user_id = 42) যাচাই করে গাছের ডালপালা বেয়ে নিখুঁতভাবে লক্ষ্য পাতার ওপর গিয়ে নামে। এতে মাত্র ৩ বা ৪টি পেজ পড়ার প্রয়োজন হয় এবং ১ মিলিসেকেন্ডের কম সময়ে উত্তর পাওয়া যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In an Index Scan, the engine scans a broader range of index leaf entries (such as WHERE created_at >= \'2026-01-01\'). B+Tree leaf pages are organized as a doubly-linked list. Once the engine locates the starting leaf via a seek, it traverses horizontally through neighboring leaves to collect matching row pointers.',
        bn: 'ইনডেক্স স্ক্যানে ইঞ্জিন একটি বিস্তৃত রেঞ্জের ইনডেক্স পাতা স্ক্যান করে (যেমন WHERE created_at >= \'2026-01-01\')। B+Tree-এর লিফ পেজগুলো ডাবলি-লিংকড লিস্ট হিসেবে সাজানো থাকে। একবার প্রাথমিক পাতায় পৌঁছানোর পর ইঞ্জিন বারবার রুটে না গিয়ে পাশাপাশি পাতাগুলো দিয়ে দ্রুত ডাটা সংগ্রহ করে।'
      }
    },
    {
      type: 'heading',
      id: 'node-index-engine',
      text: {
        en: 'Executable Table Scan vs Index Seek Benchmarking Engine',
        bn: 'রানযোগ্য টেবিল স্ক্যান বনাম ইনডেক্স সিক বেঞ্চমার্কিং ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine benchmarking an unindexed sequential table scan against a balanced index seek across 100000 rows. The test locates user ID 75432: while the brute-force sweep inspects 75432 rows in sequence, the index seek reaches the target in only 14 logarithmic comparisons.',
        bn: 'নিচে ১০০০০০ সারির ওপর ইনডেক্সহীন সিকোয়েনশিয়াল স্ক্যান এবং সুষম ইনডেক্স সিকের গতি তুলনা করার একটি সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এই পরীক্ষায় ৭৫৪৩২ নম্বর ব্যবহারকারীকে খোঁজা হয়েছে: যেখানে ব্রুট-ফোর্স পদ্ধতিতে ক্রমানুসারে ৭৫৪৩২টি সারি পরীক্ষা করতে হয়, সেখানে ইনডেক্স সিক মাত্র ১৪টি তুলনার মাধ্যমেই লক্ষ্যে পৌঁছে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Benchmark O(N) sequential table scan against O(log N) index seek across 100000 records',
        bn: '১০০০০০ রেকর্ডের ওপর O(N) সিকোয়েনশিয়াল টেবিল স্ক্যান এবং O(log N) ইনডেক্স সিকের কার্যকারিতা মূল্যায়ন'
      },
      code: `// Table Scan vs Index Seek Benchmark Simulator
const TABLE_SIZE = 100000;
const targetUserId = 75432;

// 1. Unindexed Sequential Table Scan Simulation
let seqComparisons = 0;
for (let id = 1; id <= TABLE_SIZE; id++) {
  seqComparisons++;
  if (id === targetUserId) {
    break; // Target row located after inspecting 75,432 rows
  }
}

// 2. Balanced Index Seek Simulation (Binary Tree Navigation)
let lowBoundary = 1;
let highBoundary = TABLE_SIZE;
let idxComparisons = 0;

while (lowBoundary <= highBoundary) {
  idxComparisons++;
  const midpoint = Math.floor((lowBoundary + highBoundary) / 2);
  if (midpoint === targetUserId) {
    break; // Found in leaf node in only 14 comparisons
  } else if (midpoint < targetUserId) {
    lowBoundary = midpoint + 1;
  } else {
    highBoundary = midpoint - 1;
  }
}

const speedupMultiplier = Math.floor(seqComparisons / idxComparisons);
const isAccurate = seqComparisons === 75432 && idxComparisons === 14;

console.log(\`[Heap Table Scan] Searched \${TABLE_SIZE} rows; required \${seqComparisons} comparisons to find user ID \${targetUserId}.\`);
console.log(\`[B-Tree Index Seek] Navigated index; required only \${idxComparisons} comparisons to find user ID \${targetUserId}.\`);
console.log(\`[Performance Verdict] Index Seek was over \${speedupMultiplier} times faster than full table scan (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'The SQL CREATE INDEX Command',
        bn: 'SQL CREATE INDEX কমান্ড'
      },
      text: {
        en: 'To create an index on a table column in PostgreSQL or MySQL, use the standard DDL command: CREATE INDEX idx_users_email ON users(email);. To verify that your query utilizes the index rather than falling back to a sequential table scan, prepend EXPLAIN ANALYZE to your query.',
        bn: 'PostgreSQL বা MySQL-এ কোনো কলামের ওপর ইনডেক্স তৈরি করতে সাধারণ DDL কমান্ড ব্যবহার করুন: CREATE INDEX idx_users_email ON users(email);। কোয়েরিটি টেবিল স্ক্যান বাদ দিয়ে ইনডেক্স ব্যবহার করছে কিনা তা নিশ্চিত হতে কোয়েরির শুরুতে EXPLAIN ANALYZE লিখে পরীক্ষা করুন।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Index Lookup Efficiency Calculator',
        bn: 'ইনডেক্স অনুসন্ধান দক্ষতা গণনাকারী'
      },
      description: {
        en: 'Calculate worst-case comparisons for a sequential table scan versus a balanced tree index seek.',
        bn: 'সিকোয়েনশিয়াল টেবিল স্ক্যান বনাম সুষম ট্রি ইনডেক্স সিকের জন্য সর্বোচ্চ তুলনার সংখ্যা গণনা করুন।'
      },
      code: `function calculateLookupCosts(rowCount) {
  const seqWorstCase = rowCount;
  const indexWorstCase = Math.ceil(Math.log2(rowCount));
  return { seqWorstCase, indexWorstCase };
}

console.log('1,000 Rows:', calculateLookupCosts(1000));
console.log('1,000,000 Rows:', calculateLookupCosts(1000000));`,
      tests: [
        {
          name: {
            en: 'Calculates logarithmic cost for one million rows',
            bn: 'দশ লাখ সারির জন্য লগারিদমিক খরচ হিসাব করে'
          },
          expected: '1,000,000 Rows: { seqWorstCase: 1000000, indexWorstCase: 20 }'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'idx-basics-ex-1',
      kind: 'mcq',
      topic: 'table-scan-time-complexity',
      question: {
        en: 'What is the algorithmic time complexity of searching for a specific record in an unindexed database table containing N rows?',
        bn: 'N সংখ্যক সারি বিশিষ্ট কোনো ইনডেক্সহীন ডাটাবেস টেবিলে একটি নির্দিষ্ট রেকর্ড অনুসন্ধানের অ্যালগরিদমিক টাইম কমপ্লেক্সিটি কত?'
      },
      options: [
        {
          en: 'O(N), because the engine must perform a sequential full table scan, evaluating every single row in physical storage blocks until it finds a match',
          bn: 'O(N), কারণ ইঞ্জিনকে একটি ধারাবাহিক ফুল টেবিল স্ক্যান চালাতে হয় এবং লক্ষ্য রেকর্ড না পাওয়া পর্যন্ত ডিস্কের প্রতিটি সারি পরীক্ষা করতে হয়'
        },
        {
          en: 'O(1), because computer microprocessors can read an entire database in zero seconds',
          bn: 'O(1), কারণ কম্পিউটার প্রসেসর শূন্য সেকেন্ডের মধ্যেই পুরো ডাটাবেস পড়ে ফেলতে পারে'
        },
        {
          en: 'O(N!), because queries must factorial-multiply every column',
          bn: 'O(N!), কারণ কোয়েরিকে প্রতিটি কলাম ফ্যাক্টোরিয়াল গুণ করতে হয়'
        },
        {
          en: 'O(0), because databases never need to inspect disk drives',
          bn: 'O(0), কারণ ডাটাবেসকে কখনো হার্ডডিস্ক পরীক্ষা করতে হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Unindexed tables require checking rows one by one from start to finish: linear O(N) complexity.',
        bn: 'ইনডেক্সহীন টেবিলে শুরু থেকে শেষ পর্যন্ত একে একে প্রতিটি রো দেখতে হয়: লিনিয়ার O(N)।'
      },
      explanation: {
        en: 'Without an auxiliary sorted data structure, a database has no way of predicting which physical block contains the row. In the worst or average case, it must scan every row: O(N).',
        bn: 'কোনো সহায়ক ইনডেক্স না থাকলে ডাটাবেসের জানার কোনো উপায় থাকে না ডাটাটি কোন ব্লকে আছে। তাই তাকে বাধ্য হয়ে تمام সারি স্ক্যান করতে হয়, যার জটিলতা O(N)।'
      }
    },
    {
      id: 'idx-basics-ex-2',
      kind: 'mcq',
      topic: 'index-seek-definition',
      question: {
        en: 'In database query execution engines, what is an Index Seek?',
        bn: 'ডাটাবেস কোয়েরি এক্সিকিউশন ইঞ্জিনে ইনডেক্স সিক (Index Seek) বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'Navigating directly from the root of a balanced index tree down to the specific leaf node holding the requested search key, achieving O(log N) lookup speed',
          bn: 'সুষম ইনডেক্স গাছের রুট থেকে সরাসরি নির্দিষ্ট লিফ নোডে পৌঁছানো যেখানে কাঙ্ক্ষিত কি সংরক্ষিত থাকে, যা O(log N) গতি নিশ্চিত করে'
        },
        {
          en: 'Deleting the index from memory and writing code in Python',
          bn: 'মেমরি থেকে ইনডেক্স মুছে ফেলা এবং পাইথনে কোড লেখা'
        },
        {
          en: 'Restarting the database server every time a user logs in',
          bn: 'প্রতিবার ব্যবহারকারী লগইন করার সময় ডাটাবেস সার্ভার রিস্টার্ট করা'
        },
        {
          en: 'Copying all table records to an external USB flash drive',
          bn: 'تمام টেবিল রেকর্ড একটি এক্সটার্নাল ইউএসবি ড্রাইভে কপি করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'An index seek traverses the B-Tree directly to the target leaf in logarithmic time.',
        bn: 'ইনডেক্স সিক লগারিদমিক সময়ে B-Tree বেয়ে সরাসরি লক্ষ্য পাতায় পৌঁছায়।'
      },
      explanation: {
        en: 'An Index Seek uses tree structure to eliminate vast swathes of the search space at each branch level, jumping directly to target records in milliseconds.',
        bn: 'ইনডেক্স সিক প্রতিটি ধাপে অপ্রয়োজনীয় ডাটা বাদ দিয়ে সরাসরি লক্ষ্য রেকর্ডে নেমে আসে, ফলে মিলিসেকেন্ডেই উত্তর মেলে।'
      }
    },
    {
      id: 'idx-basics-ex-3',
      kind: 'mcq',
      topic: 'sql-create-index-syntax',
      question: {
        en: 'What is the standard SQL statement to construct a secondary index named idx_customers_phone on the phone column of a customers table?',
        bn: 'customers টেবিলের phone কলামের ওপর idx_customers_phone নামের একটি সেকেন্ডারি ইনডেক্স তৈরির আদর্শ SQL স্টেটমেন্ট কোনটি?'
      },
      options: [
        {
          en: 'CREATE INDEX idx_customers_phone ON customers(phone);',
          bn: 'CREATE INDEX idx_customers_phone ON customers(phone);'
        },
        {
          en: 'MAKE FAST customers WHERE phone = 1;',
          bn: 'MAKE FAST customers WHERE phone = 1;'
        },
        {
          en: 'SEARCH customers FOR phone IN RAM;',
          bn: 'SEARCH customers FOR phone IN RAM;'
        },
        {
          en: 'SELECT * FROM customers INDEX BY phone;',
          bn: 'SELECT * FROM customers INDEX BY phone;'
        }
      ],
      answer: 0,
      hint: {
        en: 'Standard DDL uses CREATE INDEX <index_name> ON <table_name>(<column>);',
        bn: 'আদর্শ DDL হলো CREATE INDEX <index_name> ON <table_name>(<column>);'
      },
      explanation: {
        en: 'CREATE INDEX creates an auxiliary balanced tree structure on the specified column, dramatically accelerating WHERE, JOIN, and ORDER BY queries referencing that column.',
        bn: 'CREATE INDEX নির্দিষ্ট কলামের ওপর একটি পৃথক ব্যালেন্সড ট্রি তৈরি করে যা WHERE, JOIN এবং ORDER BY কোয়েরির গতি বহুগুণ বাড়িয়ে দেয়।'
      }
    },
    {
      id: 'idx-basics-ex-4',
      kind: 'mcq',
      topic: 'row-pointers-leaf-pages',
      question: {
        en: 'What crucial information is stored inside the leaf pages of a secondary non-clustered index alongside the indexed column value?',
        bn: 'নন-ক্লাস্টার্ড সেকেন্ডারি ইনডেক্সের লিফ পেজে ইনডেক্সকৃত কলামের মানের পাশাপাশি কোন গুরুত্বপূর্ণ তথ্য সংরক্ষিত থাকে?'
      },
      options: [
        {
          en: 'A physical row pointer (Tuple ID / RID or clustered primary key) indicating the exact storage location of the row in the table heap',
          bn: 'একটি ফিজিক্যাল রো পয়েন্টার (Tuple ID / RID বা ক্লাস্টার্ড প্রাইমারি কি) যা টেবিল হিপে মূল সারির সঠিক অবস্থান নির্দেশ করে'
        },
        {
          en: 'The home address and phone number of the database administrator',
          bn: 'ডাটাবেস অ্যাডমিনিস্ট্রেটরের বাড়ির ঠিকানা এবং ফোন নম্বর'
        },
        {
          en: 'A full audio recording of the query being typed into the computer',
          bn: 'কম্পিউটারে কোয়েরি টাইপ করার পূর্ণাঙ্গ একটি অডিও রেকর্ডিং'
        },
        {
          en: 'An animated GIF image of a spinning database logo',
          bn: 'ঘূর্ণায়মান ডাটাবেস লোগোর একটি অ্যানিমেটেড GIF ছবি'
        }
      ],
      answer: 0,
      hint: {
        en: 'The index leaf stores the key and a pointer back to the actual table row.',
        bn: 'ইনডেক্সের পাতায় কি এবং মূল ডাটা সারির একটি পয়েন্টার থাকে।'
      },
      explanation: {
        en: 'Secondary index leaf nodes contain the indexed search key paired with a pointer to the physical heap page (or primary key) so the engine can retrieve the full row attributes.',
        bn: 'সেকেন্ডারি ইনডেক্সের লিফ নোডে সার্চ কি-এর সাথে মূল ডাটার হিপ পয়েন্টার থাকে, যার সাহায্যে ইঞ্জিন পুরো সারির সমস্ত কলাম উদ্ধার করতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'idxs-and-the-index-quiz',
    title: {
      en: 'Database Indexing Foundations Quiz',
      bn: 'ডাটাবেস ইনডেক্সিং মূল ভিত্তি কুইজ'
    },
    questions: [
      {
        id: 'idx-basics-qz-1',
        kind: 'mcq',
        topic: 'explain-analyze-plan-inspection',
        question: {
          en: 'Which SQL command prefix instructs PostgreSQL and MySQL to execute a query and output the real execution plan, including whether an Index Seek or Seq Scan was used?',
          bn: 'কোন SQL কমান্ড প্রিফিক্স PostgreSQL এবং MySQL-কে কোয়েরিটি বাস্তবে চালিয়ে ইনডেক্স সিক নাকি সিকোয়েনশিয়াল স্ক্যান হয়েছে তার বিস্তারিত এক্সিকিউশন প্ল্যান দেখাতে নির্দেশ দেয়?'
        },
        options: [
          {
            en: 'EXPLAIN ANALYZE',
            bn: 'EXPLAIN ANALYZE'
          },
          {
            en: 'SHOW ME THE SPEED',
            bn: 'SHOW ME THE SPEED (কাল্পনিক কমান্ড)'
          },
          {
            en: 'CALCULATE VELOCITY',
            bn: 'CALCULATE VELOCITY (কাল্পনিক কমান্ড)'
          },
          {
            en: 'PRINT MEMORY USAGE',
            bn: 'PRINT MEMORY USAGE (কাল্পনিক কমান্ড)'
          }
        ],
        answer: 0,
        hint: {
          en: 'EXPLAIN ANALYZE runs the query and displays the execution plan with timings.',
          bn: 'EXPLAIN ANALYZE কোয়েরিটি চালিয়ে সময়ের হিসাব সহ এক্সিকিউশন প্ল্যান দেখায়।'
        },
        explanation: {
          en: 'EXPLAIN ANALYZE actually executes the query, recording real execution times, memory usage, row estimates versus actual rows, and specific access paths (Index Scan vs Seq Scan).',
          bn: 'EXPLAIN ANALYZE বাস্তবে কোয়েরিটি চালিয়ে কতটা সময় লেগেছে এবং ইঞ্জিন ইনডেক্স ব্যবহার করেছে নাকি ফুল টেবিল স্ক্যান করেছে তা স্পষ্টভাবে তুলে ধরে।'
        }
      },
      {
        id: 'idx-basics-qz-2',
        kind: 'mcq',
        topic: 'index-seek-vs-index-scan-difference',
        question: {
          en: 'How does an Index Seek fundamentally differ from an Index Scan in database query performance?',
          bn: 'ডাটাবেস কোয়েরি পারফরম্যান্সে ইনডেক্স সিক কীভাবে ইনডেক্স স্ক্যান থেকে মৌলিকভাবে আলাদা?'
        },
        options: [
          {
            en: 'An Index Seek navigates tree branches directly to pinpoint exact target rows in O(log N) time, while an Index Scan traverses along linked leaf pages to retrieve ranges of rows',
            bn: 'ইনডেক্স সিক গাছের ডালপালা বেয়ে সরাসরি নির্দিষ্ট সারিতে O(log N) সময়ে পৌঁছায়, আর ইনডেক্স স্ক্যান পাশাপাশি থাকা লিফ পেজ ধরে নির্দিষ্ট রেঞ্জের ডাটা সংগ্রহ করে'
          },
          {
            en: 'An Index Seek deletes data while an Index Scan inserts new data',
            bn: 'ইনডেক্স সিক ডাটা মুছে ফেলে আর ইনডেক্স স্ক্যান নতুন ডাটা যোগ করে'
          },
          {
            en: 'An Index Seek requires 100 gigabytes of internet bandwidth',
            bn: 'ইনডেক্স সিকের জন্য ১০০ গিগাবাইট ইন্টারনেট ব্যান্ডউইথ দরকার হয়'
          },
          {
            en: 'There is zero difference between the two terms in database internals',
            bn: 'ডাটাবেস সিস্টেমে এই দুটি শব্দের মধ্যে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Seek dives down the tree; scan walks across leaf pages.',
          bn: 'সিক গাছ বেয়ে নিচে নামে; স্ক্যান পাতার ওপর দিয়ে পাশাপাশি হেঁটে যায়।'
        },
        explanation: {
          en: 'An Index Seek utilizes tree branch pointers to land on a specific row. An Index Scan scans horizontally across contiguous leaf nodes, useful for range filters and ORDER BY queries.',
          bn: 'ইনডেক্স সিক সরাসরি নির্দিষ্ট রো-তে নেমে আসে। অন্যদিকে ইনডেক্স স্ক্যান পাশাপাশি যুক্ত পাতাগুলো স্ক্যান করে, যা রেঞ্জ ফিল্টারের জন্য ব্যবহৃত হয়।'
        }
      },
      {
        id: 'idx-basics-qz-3',
        kind: 'mcq',
        topic: 'index-impact-on-write-performance',
        question: {
          en: 'Why is adding 50 indexes to a single database table considered a catastrophic design anti-pattern?',
          bn: 'একটি একক ডাটাবেস টেবিলে ৫০টি ইনডেক্স তৈরি করাকে কেন অত্যন্ত মারাত্মক ডিজাইন ত্রুটি হিসেবে গণ্য করা হয়?'
        },
        options: [
          {
            en: 'Because every INSERT, UPDATE, and DELETE statement must synchronously update all 50 index trees on disk, causing extreme write amplification and collapsing write throughput',
            bn: 'কারণ প্রতিটি INSERT, UPDATE এবং DELETE স্টেটমেন্টকে ডিস্কে থাকা تمام ৫০টি ইনডেক্স ট্রি আপডেট করতে হয়, যা মারাত্মক রাইট অ্যাম্প্লিফিকেশন সৃষ্টি করে লেখার গতি ধ্বংস করে'
          },
          {
            en: 'Because SQL syntax prohibits tables from having more than 3 letters in their name',
            bn: 'কারণ SQL সিনট্যাক্সে ৩ অক্ষরের বেশি নামের টেবিল তৈরি করা নিষিদ্ধ'
          },
          {
            en: 'Because indexes make computer screens change color to bright pink',
            bn: 'কারণ ইনডেক্স কম্পিউটার স্ক্রিনের রং গোলাপি বানিয়ে দেয়'
          },
          {
            en: 'Because the operating system will delete the database after 24 hours',
            bn: 'কারণ অপারেটিং সিস্টেম ২৪ ঘণ্টা পর পুরো ডাটাবেস মুছে ফেলবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Indexes speed up reads, but slow down writes via write amplification.',
          bn: 'ইনডেক্স পড়ার গতি বাড়ালেও প্রতিটি লেখার সময় অতিরিক্ত আপডেট দাবি করে লেখার গতি কমিয়ে দেয়।'
        },
        explanation: {
          en: 'Indexes are not free. Every row inserted or updated requires updating the base table plus all secondary index trees. Excessive indexes severely penalize write-heavy workloads.',
          bn: 'ইনডেক্স বিনামূল্যে পাওয়া যায় না। কোনো নতুন রো যোগ করলে মূল টেবিলের পাশাপাশি সমস্ত ইনডেক্সও আপডেট করতে হয়। অতিরিক্ত ইনডেক্স ডাটা লেখার গতি মারাত্মক কমিয়ে দেয়।'
        }
      },
      {
        id: 'idx-basics-qz-4',
        kind: 'mcq',
        topic: 'clustered-vs-secondary-index-storage',
        question: {
          en: 'In MySQL InnoDB, how are table rows physically organized on storage media in relation to the Primary Key?',
          bn: 'MySQL InnoDB-তে প্রাইমারি কি-এর সাপেক্ষে স্টোরেজ মিডিয়ায় টেবিলের সারিগুলো শারীরিকভাবে কীভাবে সজ্জিত থাকে?'
        },
        options: [
          {
            en: 'The table is physically structured as a Clustered B+Tree Index ordered by the Primary Key; the leaf pages of this tree ARE the actual data rows of the table',
            bn: 'টেবিলটি শারীরিকভাবে প্রাইমারি কি অনুসারে সাজানো একটি ক্লাস্টার্ড B+Tree ইনডেক্স; এই গাছের লিফ পেজগুলোই হলো টেবিলের আসল ডাটা সারি'
          },
          {
            en: 'Rows are floating randomly in the cloud without any physical files',
            bn: 'সারিগুলো কোনো ফাইল ছাড়াই ইন্টারনেটে এলোমেলোভাবে ভাসতে থাকে'
          },
          {
            en: 'Rows are stored alphabetically by user passwords in plain text',
            bn: 'সারিগুলো ব্যবহারকারীর পাসওয়ার্ডের বর্ণানুক্রমিক অর্ডারে সেভ থাকে'
          },
          {
            en: 'Rows are compressed into an unreadable MP3 audio file',
            bn: 'সারিগুলো একটি অপাঠ্য MP3 অডিও ফাইলে কম্প্রেস হয়ে থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'In InnoDB, the clustered index IS the table data itself.',
          bn: 'InnoDB-তে ক্লাস্টার্ড ইনডেক্স নিজেই মূল টেবিল ডাটা।'
        },
        explanation: {
          en: 'In MySQL InnoDB, the primary key dictates the clustered index layout. Rows are stored in the leaf pages of the primary key B+Tree. Lookups by primary key require zero secondary pointer jumps.',
          bn: 'InnoDB-তে প্রাইমারি কি টেবিলের ভৌত বিন্যাস নির্ধারণ করে। প্রাইমারি কি B+Tree-এর পাতার মধ্যেই সমস্ত কলামের মূল ডাটা সংরক্ষিত থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'btrees-and-the-btree',
    title: {
      en: 'B-Tree & B+Tree Internals: High Fan-Out Storage Engines',
      bn: 'B-Tree ও B+Tree অভ্যন্তরীণ কৌশল: হাই ফ্যান-আউট স্টোরেজ ইঞ্জিন'
    }
  }
};
