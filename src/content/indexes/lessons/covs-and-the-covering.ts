import type { Lesson } from '../../../lib/types';

export const CovsAndTheCoveringLesson: Lesson = {
  slug: 'covs-and-the-covering',
  tech: 'indexes',
  title: {
    en: 'Covering Indexes & Index-Only Scans: The INCLUDE Clause',
    bn: 'কাভারিং ইনডেক্স ও ইনডেক্স-অনলি স্ক্যান: INCLUDE ক্লজ'
  },
  summary: {
    en: 'Discover how to eliminate expensive database heap page lookups using Covering Indexes, Index-Only Scans, and the SQL INCLUDE clause for non-key payload columns.',
    bn: 'কাভারিং ইনডেক্স, ইনডেক্স-অনলি স্ক্যান এবং নন-কি কলামের জন্য SQL INCLUDE ক্লজ ব্যবহার করে টেবিল হিপ পেজ রিডের অতিরিক্ত খরচ পুরোপুরি দূর করার কৌশল জানুন।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'the-heap-lookup-penalty',
      text: {
        en: 'The Hidden Tax of Secondary Indexes: Random Heap Page I/O',
        bn: 'সেকেন্ডারি ইনডেক্সের গোপন খরচ: র্যান্ডম হিপ পেজ I/O'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you create a standard secondary index on an email column, the index stores only two things: the email string and a physical row pointer pointing to a table storage block. If your query asks for additional columns, the engine must leave the index and fetch the base table heap page from disk.',
        bn: 'যখন আপনি ইমেইল কলামের ওপর একটি সাধারণ সেকেন্ডারি ইনডেক্স তৈরি করেন, তখন ইনডেক্সে কেবল ২টি জিনিস থাকে: ইমেইল টেক্সট এবং টেবিল ব্লকের দিকে নির্দেশকারী একটি রো পয়েন্টার। আপনার কোয়েরি যদি অন্য কোনো অতিরিক্ত কলাম দাবি করে, তবে ইঞ্জিনকে ইনডেক্স ছেড়ে ডিস্কে গিয়ে মূল টেবিলের হিপ পেজটি পড়তে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'If a query matches 100 rows scattered across different physical pages, the database engine must execute 100 separate random I/O disk seeks just to retrieve those extra columns. This random disk reading often consumes 90% of overall query latency. Covering indexes solve this bottleneck by storing every requested column directly inside the index.',
        bn: 'কোনো কোয়েরির ফলাফলে যদি বিভিন্ন পেজে ছড়ানো ১০০টি রো পাওয়া যায়, তবে সেই অতিরিক্ত কলামগুলো সংগ্রহ করতে ডাটাবেসকে ১০০ বার আলাদা র্যান্ডম ডিস্ক রিড চালাতে হয়। এই এলোমেলো ডিস্ক রিডই কোয়েরির মোট সময়ের প্রায় ৯০% অপচয় করে। কাভারিং ইনডেক্স تمام প্রয়োজনীয় কলাম সরাসরি ইনডেক্সের ভেতর রেখেই এই সমস্যার স্থায়ী সমাধান দেয়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Secondary Index with Heap Lookups vs Covering Index with INCLUDE',
        bn: 'হিপ লুকআপযুক্ত সেকেন্ডারি ইনডেক্স বনাম INCLUDE যুক্ত কাভারিং ইনডেক্স'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Covering Index and Index-Only Scan Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Left: Standard Secondary Index (Requires Heap Fetch) -->
  <g transform="translate(30, 25)">
    <rect width="320" height="280" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
    <text x="160" y="30" fill="#f87171" font-size="13" font-weight="bold" text-anchor="middle">Standard Index Scan (2-Hop I/O)</text>

    <!-- Index Leaf -->
    <rect x="25" y="55" width="270" height="42" rx="4" fill="#0f172a" stroke="#334155" />
    <text x="35" y="80" fill="#38bdf8" font-size="10">Leaf: Key 'alice@example' -&gt; TID</text>

    <!-- Downward Dotted Arrow -->
    <path d="M 160 97 L 160 145" stroke="#f87171" stroke-width="2" stroke-dasharray="3 2" marker-end="url(#arrow)" />
    <text x="175" y="125" fill="#fca5a5" font-size="9">Random Heap Hop</text>

    <!-- Table Heap Block -->
    <rect x="25" y="147" width="270" height="55" rx="4" fill="#7f1d1d" stroke="#ef4444" />
    <text x="35" y="168" fill="#ffffff" font-size="10" font-weight="bold">Table Heap Block (Disk Read)</text>
    <text x="35" y="188" fill="#fecaca" font-size="9">Fetches full_name, created_at</text>

    <text x="25" y="240" fill="#f87171" font-size="10" font-weight="bold">Disadvantage: Heavy Random I/O</text>
    <text x="25" y="258" fill="#94a3b8" font-size="9">Reading 100 rows requires 100 heap lookups!</text>
  </g>

  <!-- Right: Covering Index with INCLUDE (Index-Only Scan) -->
  <g transform="translate(390, 25)">
    <rect width="320" height="280" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <text x="160" y="30" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">Covering Index-Only Scan (Zero Heap!)</text>

    <!-- Index Leaf with Payload -->
    <rect x="20" y="55" width="280" height="75" rx="4" fill="#065f46" stroke="#10b981" stroke-width="2" />
    <text x="30" y="76" fill="#ffffff" font-size="10" font-weight="bold">Leaf Page (Stores Key + Payload):</text>
    <text x="30" y="96" fill="#a7f3d0" font-size="10">Key: 'alice@example.com'</text>
    <text x="30" y="114" fill="#facc15" font-size="9">Payload: ['Alice Smith', '2026-01-01']</text>

    <!-- Direct to Client Arrow -->
    <path d="M 160 130 L 160 175" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow)" />
    <text x="175" y="155" fill="#34d399" font-size="9" font-weight="bold">Zero Heap Reads!</text>

    <!-- Query Response Box -->
    <rect x="20" y="177" width="280" height="42" rx="4" fill="#0f172a" stroke="#10b981" />
    <text x="30" y="202" fill="#38bdf8" font-size="10">Returned directly to client from memory/index</text>

    <text x="20" y="245" fill="#34d399" font-size="10" font-weight="bold">Advantage: 100% Index-Only Scan</text>
    <text x="20" y="262" fill="#cbd5e1" font-size="9">Eliminates all random heap page I/O visits!</text>
  </g>
</svg>`,
      caption: {
        en: 'Comparison of a standard index scan requiring random heap fetches versus a covering index serving data directly via an Index-Only Scan.',
        bn: 'র্যান্ডম হিপ রিড দাবি করা সাধারণ ইনডেক্স স্ক্যান এবং সরাসরি ডাটা সরবরাহকারী কাভারিং ইনডেক্স-অনলি স্ক্যানের তুলনা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Covering Index',
          def: {
            en: 'An index that contains every column required by a query (in SELECT, WHERE, ORDER BY, and JOIN), eliminating table heap lookups.',
            bn: 'এমন একটি ইনডেক্স যা কোনো কোয়েরির تمام প্রয়োজনীয় কলাম ধারণ করে এবং টেবিল হিপ পড়ার প্রয়োজনীয়তা দূর করে।'
          }
        },
        {
          term: 'Index-Only Scan',
          def: {
            en: 'A high-performance query execution path where the engine retrieves all requested columns strictly from index leaf pages without visiting base table heap pages.',
            bn: 'একটি দ্রুততম কোয়েরি এক্সিকিউশন পথ যেখানে ইঞ্জিন মূল টেবিলে না গিয়ে কেবল ইনডেক্সের পাতা থেকেই تمام তথ্য সংগ্রহ করে।'
          }
        },
        {
          term: 'INCLUDE Clause',
          def: {
            en: 'An SQL DDL extension specifying non-key payload columns stored strictly in index leaf pages without affecting B-Tree sorting or fan-out.',
            bn: 'একটি SQL ক্লজ যার মাধ্যমে কিছু অতিরিক্ত কলাম কেবল ইনডেক্স পাতায় সংরক্ষিত থাকে কিন্তু ট্রির উচ্চতা বা সাজানোর ওপর কোনো প্রভাব ফেলে না।'
          }
        },
        {
          term: 'Visibility Map',
          def: {
            en: 'A PostgreSQL bitmap tracking table pages where all tuples are confirmed committed, allowing Index-Only Scans to skip checking MVCC transaction visibility.',
            bn: 'PostgreSQL-এর একটি বিটম্যাপ যা নিশ্চিত করে যে পেজের تمام ডাটা সবার জন্য দৃশ্যমান, ফলে ইনডেক্স-অনলি স্ক্যান হিপ চেক না করেই চলতে পারে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'the-include-clause-mechanics',
      text: {
        en: 'The INCLUDE Clause: Non-Key Payload Columns Explained',
        bn: 'INCLUDE ক্লজ: নন-কি পেলোড কলামের কার্যপদ্ধতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A common developer mistake is adding extra columns to the main index key list: CREATE INDEX idx_users ON users(email, full_name, created_at). While this covers the query, all three columns become B-Tree search keys. This bloats root and branch pages, drastically shrinks fan-out, and forces the tree to grow taller while adding sorting overhead.',
        bn: 'ডেভেলপাররা প্রায়ই একটি ভুল করেন: তারা সমস্ত অতিরিক্ত কলাম মূল ইনডেক্স কি-এর তালিকায় ঢুকিয়ে দেন, যেমন CREATE INDEX idx_users ON users(email, full_name, created_at)। এতে কোয়েরি কাভার হলেও ৩টি কলামই B-Tree সার্চ কি-তে পরিণত হয়। ফলে রুট ও শাখা পেজগুলো ভারী হয়ে যায়, ফ্যান-আউট কমে যায় এবং গাছটি অপ্রয়োজনীয়ভাবে লম্বা হয়ে পড়ে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The standard SQL solution is the INCLUDE clause: CREATE INDEX idx_users_email_cov ON users(email) INCLUDE (full_name, created_at);. In this architecture, email remains the solitary search key driving B-Tree navigation. The included columns (full_name and created_at) are stored as non-key payload data strictly in the leaf pages, preserving maximum tree fan-out while powering 100% Index-Only Scans.',
        bn: 'এর আদর্শ সমাধান হলো INCLUDE ক্লজ: CREATE INDEX idx_users_email_cov ON users(email) INCLUDE (full_name, created_at);। এই আর্কিটেকচারে ইমেইল থাকে একমাত্র সার্চ কি যা B-Tree-র দিক নিয়ন্ত্রণ করে। আর ইনক্লুডেড কলামগুলো কেবল লিফ পেজে ডাটা হিসেবে জমা থাকে; ফলে গাছের ফ্যান-আউট সর্বোচ্চ থাকে এবং শতভাগ ইনডেক্স-অনলি স্ক্যানের সুবিধা পাওয়া যায়।'
      }
    },
    {
      type: 'heading',
      id: 'node-covering-engine',
      text: {
        en: 'Executable Covering Index & Heap Bypass Simulator',
        bn: 'রানযোগ্য কাভারিং ইনডেক্স ও হিপ বাইপাস সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine benchmarking a standard B-Tree lookup against a covering structure with INCLUDE payload across 100 matching rows. While the traditional approach requires 100 leaf reads plus 100 random heap reads for a total of 200 I/O operations, the covering design delivers all records in 100 operations with 0 heap lookups.',
        bn: 'নিচে ১০০টি রেকর্ড উদ্ধারের ক্ষেত্রে সাধারণ B-Tree লুকআপ বনাম INCLUDE যুক্ত কাভারিং কাঠামোর গতি তুলনা করার একটি সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি দেখায় যে প্রচলিত পদ্ধতিতে ১০০টি লিফ রিডের সাথে ১০০টি র্যান্ডম হিপ রিড মিলিয়ে মোট ২০০টি অপারেশন লাগে, আর কাভারিং ডিজাইন ০টি হিপ রিডেই মাত্র ১০০টি অপারেশনে تمام ডাটা পরিবেশন করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Benchmarking standard Index Scan (200 I/O) against covering Index-Only Scan (100 I/O) with zero heap fetches',
        bn: 'সাধারণ ইনডেক্স স্ক্যান (২০০ I/O) বনাম হিপ রিডহীন কাভারিং ইনডেক্স-অনলি স্ক্যানের (১০০ I/O) কার্যকারিতা মূল্যায়ন'
      },
      code: `// Covering Index & Heap Bypass Simulator
const MATCHING_RECORDS = 100;

// Strategy 1: Standard Secondary Index Scan (Requires Table Heap Hop)
const secondaryIndexReads = MATCHING_RECORDS; // Read 100 index leaf slots
const randomHeapLookups = MATCHING_RECORDS;  // Follow 100 pointers to disk heap pages
const totalSecondaryIO = secondaryIndexReads + randomHeapLookups; // 200 I/O ops

// Strategy 2: Covering Index with INCLUDE Clause (Index-Only Scan)
const coveringIndexReads = MATCHING_RECORDS; // Read 100 index leaf slots
const coveringHeapLookups = 0;              // 0 heap reads! All columns exist in leaf
const totalCoveringIO = coveringIndexReads + coveringHeapLookups; // 100 I/O ops

const isAccurate = totalSecondaryIO === 200 && totalCoveringIO === 100 && coveringHeapLookups === 0;

console.log(\`[Secondary Index Plan] Retrieved \${MATCHING_RECORDS} records via Index Scan + \${randomHeapLookups} random heap fetches (total I/O: \${totalSecondaryIO}).\`);
console.log(\`[Covering Index Plan] Executed Index-Only Scan via INCLUDE payload; eliminated \${randomHeapLookups} heap lookups (total I/O: \${totalCoveringIO}).\`);
console.log(\`[Performance Verdict] Covering index cut disk I/O in half and bypassed table heap fetches entirely (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'PostgreSQL Visibility Maps and VACUUM',
        bn: 'PostgreSQL ভিজিবিলিটি ম্যাপ এবং VACUUM'
      },
      text: {
        en: 'In PostgreSQL, an Index-Only Scan still checks the table visibility map to ensure rows are not uncommitted under MVCC snapshot rules. If an autovacuum process has not yet frozen clean pages, Postgres temporarily visits the heap to verify tuple visibility. Keep autovacuum tuned to maintain 100% heap-free index scans.',
        bn: 'PostgreSQL-এ ইনডেক্স-অনলি স্ক্যান চলার সময়ও ইঞ্জিন নিশ্চিত হতে ভিজিবিলিটি ম্যাপ পরীক্ষা করে দেখে যে ডাটাটি অন্য কোনো লেনদেনে পরিবর্তিত হচ্ছে কিনা। পেজটি ফ্রোজেন না থাকলে ইঞ্জিন সাময়িক হিপ পরীক্ষা করতে পারে। তাই সর্বদা autovacuum সচল রাখা উচিত যাতে শতভাগ হিপ-মুক্ত ইনডেক্স স্ক্যান পাওয়া যায়।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Covering Index Plan Evaluator',
        bn: 'কাভারিং ইনডেক্স প্ল্যান মূল্যায়নকারী'
      },
      description: {
        en: 'Determine whether a query executes as an Index-Only Scan or requires table heap lookups.',
        bn: 'কোনো কোয়েরি ইনডেক্স-অনলি স্ক্যানে চলবে নাকি টেবিল হিপ পড়ার প্রয়োজন হবে তা নির্ধারণ করুন।'
      },
      code: `function evaluateQueryPlan(indexedKeys, includedPayload, selectCols) {
  const allAvailable = new Set([...indexedKeys, ...includedPayload]);
  const isCovered = selectCols.every(col => allAvailable.has(col));
  return isCovered ? 'INDEX_ONLY_SCAN' : 'INDEX_SCAN_WITH_HEAP_FETCH';
}

console.log('Query 1:', evaluateQueryPlan(['email'], ['full_name'], ['email', 'full_name']));
console.log('Query 2:', evaluateQueryPlan(['email'], ['full_name'], ['email', 'age']));`,
      tests: [
        {
          name: {
            en: 'Chooses Index-Only Scan when all columns are covered',
            bn: 'সমস্ত কলাম কাভার করা থাকলে ইনডেক্স-অনলি স্ক্যান বেছে নেয়'
          },
          expected: 'Query 1: INDEX_ONLY_SCAN'
        },
        {
          name: {
            en: 'Falls back to heap fetch when column is missing',
            bn: 'কোনো কলাম বাদ পড়লে হিপ ফেচে ফিরে যায়'
          },
          expected: 'Query 2: INDEX_SCAN_WITH_HEAP_FETCH'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'idx-cov-ex-1',
      kind: 'mcq',
      topic: 'index-only-scan-definition',
      question: {
        en: 'What specific database operational condition qualifies a query execution as an Index-Only Scan?',
        bn: 'কোন নির্দিষ্ট ডাটাবেস শর্ত পূরণ হলে একটি কোয়েরি এক্সিকিউশনকে ইনডেক্স-অনলি স্ক্যান হিসেবে গণ্য করা হয়?'
      },
      options: [
        {
          en: 'Every single column requested by the SELECT, WHERE, and ORDER BY clauses is stored directly in the index leaf pages, allowing the engine to satisfy the query with zero table heap reads',
          bn: 'SELECT, WHERE এবং ORDER BY ক্লজের تمام প্রয়োজনীয় কলাম সরাসরি ইনডেক্সের লিফ পেজে বিদ্যমান থাকে, ফলে ইঞ্জিন মূল টেবিল না পড়েই কোয়েরি সম্পন্ন করতে পারে'
        },
        {
          en: 'The query is written in HTML instead of SQL',
          bn: 'কোয়েরিটি SQL-এর বদলে HTML-এ লেখা হয়'
        },
        {
          en: 'The query takes more than 1 hour to complete',
          bn: 'কোয়েরিটি শেষ হতে ১ ঘণ্টার বেশি সময় লাগে'
        },
        {
          en: 'The database server is running on a battery with zero electricity',
          bn: 'ডাটাবেস সার্ভার কোনো বিদ্যুৎ সংযোগ ছাড়া ব্যাটারিতে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Index-Only Scan means all needed columns are in the index leaves; no heap visit needed.',
        bn: 'ইনডেক্স-অনলি স্ক্যানে تمام কলাম ইনডেক্সেই থাকে; হিপ পেজ পড়ার প্রয়োজন পড়ে না।'
      },
      explanation: {
        en: 'When all requested attributes reside inside the index, the storage engine completely bypasses the base table blocks, eliminating random disk I/O.',
        bn: 'تمام কলাম ইনডেক্সের মধ্যে থাকায় ইঞ্জিন মূল টেবিলের ব্লকগুলোতে না গিয়ে ডিস্কের অতিরিক্ত খরচ সম্পূর্ণ বাঁচিয়ে দেয়।'
      }
    },
    {
      id: 'idx-cov-ex-2',
      kind: 'mcq',
      topic: 'include-clause-structural-role',
      question: {
        en: 'How does the SQL INCLUDE clause differ from simply appending extra columns to the main index key list?',
        bn: 'SQL INCLUDE ক্লজ কীভাবে মূল ইনডেক্স কি-এর তালিকায় সাধারণ কলাম যুক্ত করার চেয়ে কাঠামোগতভাবে আলাদা?'
      },
      options: [
        {
          en: 'Included columns are stored strictly in leaf pages as non-key payload and are not used for B-Tree sorting or branch routing, preserving high fan-out and shallow tree height',
          bn: 'ইনক্লুডেড কলামগুলো কেবল লিফ পেজে নন-কি পেলোড হিসেবে থাকে এবং সাজানো বা ডালপালার রাউটিংয়ে অংশ নেয় না, ফলে গাছের ফ্যান-আউট বেশি ও উচ্চতা কম থাকে'
        },
        {
          en: 'Included columns are deleted from the database table permanently',
          bn: 'ইনক্লুডেড কলামগুলো ডাটাবেস টেবিল থেকে চিরতরে মুছে যায়'
        },
        {
          en: 'Included columns can only hold audio recordings of songs',
          bn: 'ইনক্লুডেড কলামে কেবল গানের অডিও রেকর্ডিং জমা রাখা যায়'
        },
        {
          en: 'There is zero difference between key columns and included columns in SQL',
          bn: 'SQL-এ কি কলাম এবং ইনক্লুডেড কলামের মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Included columns live in leaf pages only; they do not bloat branch nodes.',
        bn: 'ইনক্লুডেড কলাম কেবল লিফ পেজে থাকে; এরা শাখা নোডগুলোকে ভারী করে না।'
      },
      explanation: {
        en: 'The INCLUDE clause stores payload data only at the leaf level. It avoids widening internal B-Tree branch keys, maintaining maximum fan-out and compact tree structures.',
        bn: 'INCLUDE ক্লজ কেবল পাতার স্তরে ডাটা রাখে। এটি B-Tree শাখার আকার ভারী হতে দেয় না, ফলে ফ্যান-আউট সর্বোচ্চ থাকে।'
      }
    },
    {
      id: 'idx-cov-ex-3',
      kind: 'mcq',
      topic: 'covering-index-ddl-syntax',
      question: {
        en: 'Which SQL statement correctly constructs a covering index on customer_id that includes total_amount and order_status as non-key payload attributes?',
        bn: 'customer_id-র ওপর কাভারিং ইনডেক্স তৈরি করতে এবং total_amount ও order_status-কে নন-কি পেলোড হিসেবে রাখতে কোন SQL স্টেটমেন্টটি সঠিক?'
      },
      options: [
        {
          en: 'CREATE INDEX idx_cust_orders_cov ON orders(customer_id) INCLUDE (total_amount, order_status);',
          bn: 'CREATE INDEX idx_cust_orders_cov ON orders(customer_id) INCLUDE (total_amount, order_status);'
        },
        {
          en: 'MAKE COVER ON orders(customer_id) WITH ALL COLUMNS;',
          bn: 'MAKE COVER ON orders(customer_id) WITH ALL COLUMNS;'
        },
        {
          en: 'ADD TO LEAF orders(customer_id) PAYLOAD (total_amount);',
          bn: 'ADD TO LEAF orders(customer_id) PAYLOAD (total_amount);'
        },
        {
          en: 'SELECT * FROM orders COVERING customer_id;',
          bn: 'SELECT * FROM orders COVERING customer_id;'
        }
      ],
      answer: 0,
      hint: {
        en: 'The standard SQL syntax is CREATE INDEX ... (<key_cols>) INCLUDE (<payload_cols>);',
        bn: 'আদর্শ SQL সিনট্যাক্স হলো CREATE INDEX ... (<key_cols>) INCLUDE (<payload_cols>);'
      },
      explanation: {
        en: 'The INCLUDE keyword separates search keys (used for ordering) from payload data (used to satisfy SELECT projections), delivering clean Index-Only Scans.',
        bn: 'INCLUDE কিওয়ার্ডটি সার্চ কি থেকে পেলোড কলামগুলোকে আলাদা করে, যা অত্যন্ত দ্রুত ইনডেক্স-অনলি স্ক্যান উপহার দেয়।'
      }
    },
    {
      id: 'idx-cov-ex-4',
      kind: 'mcq',
      topic: 'visibility-map-role-postgres',
      question: {
        en: 'In PostgreSQL, why must an Index-Only Scan consult the table Visibility Map before returning a tuple from an index leaf page?',
        bn: 'PostgreSQL-এ ইনডেক্স-অনলি স্ক্যান চালানোর সময় কোনো রো রিটার্ন করার আগে ইঞ্জিনকে কেন টেবিল ভিজিবিলিটি ম্যাপ পরীক্ষা করতে হয়?'
      },
      options: [
        {
          en: 'Because PostgreSQL indexes do not store MVCC transaction visibility headers; the visibility map proves whether all rows on that page are committed and visible to all transactions',
          bn: 'কারণ PostgreSQL ইনডেক্সে MVCC লেনদেনের দৃশ্যমানতার হেডার থাকে না; ভিজিবিলিটি ম্যাপ নিশ্চিত করে যে পেজের تمام রো কমিট হয়েছে এবং সবার জন্য দৃশ্যমান'
        },
        {
          en: 'To check if the database user has paid their monthly subscription fee',
          bn: 'ব্যবহারকারী তার মাসিক বিল পরিশোধ করেছেন কিনা তা পরীক্ষা করার জন্য'
        },
        {
          en: 'To adjust the desktop monitor resolution to 4K',
          bn: 'ডেস্কটপ মনিটরের রেজোলিউশন 4K-তে সমন্বয় করার জন্য'
        },
        {
          en: 'Because SQL commands must be translated into French before execution',
          bn: 'কারণ কোয়েরি চালানোর আগে SQL কমান্ড ফরাসি ভাষায় অনুবাদ করতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Postgres indexes lack MVCC transaction IDs; the visibility map guarantees tuple visibility.',
        bn: 'Postgres ইনডেক্সে ট্রানজ্যাকশন আইডি থাকে না; ভিজিবিলিটি ম্যাপ ডাটার দৃশ্যমানতা নিশ্চিত করে।'
      },
      explanation: {
        en: 'Postgres stores MVCC xmin/xmax transaction visibility in the table heap, not in the index. The visibility map flags pages where all rows are globally visible, allowing the heap lookup to be safely bypassed.',
        bn: 'Postgres হিপ পেজে ট্রানজ্যাকশন দৃশ্যমানতা সংরক্ষণ করে। ভিজিবিলিটি ম্যাপ পেজটিকে শতভাগ দৃশ্যমান হিসেবে চিহ্নিত করলে ইঞ্জিন হিপে না গিয়েই দ্রুত ডাটা দিতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'covs-and-the-covering-quiz',
    title: {
      en: 'Covering Indexes & Index-Only Scans Quiz',
      bn: 'কাভারিং ইনডেক্স ও ইনডেক্স-অনলি স্ক্যান কুইজ'
    },
    questions: [
      {
        id: 'idx-cov-qz-1',
        kind: 'mcq',
        topic: 'index-only-scan-performance-gain',
        question: {
          en: 'What is the primary performance benefit of transforming an Index Scan with heap fetches into an Index-Only Scan using a covering index?',
          bn: 'একটি সাধারণ ইনডেক্স স্ক্যানকে কাভারিং ইনডেক্স দিয়ে ইনডেক্স-অনলি স্ক্যানে রূপান্তর করার প্রধান পারফরম্যান্স সুবিধা কী?'
        },
        options: [
          {
            en: 'It completely eliminates random disk I/O heap page lookups, cutting query latency by 50% to 90% when retrieving multiple rows',
            bn: 'এটি র্যান্ডম ডিস্ক I/O হিপ লুকআপ সম্পূর্ণ দূর করে এবং একাধিক রো অনুসন্ধানের ক্ষেত্রে কোয়েরির সময় ৫০% থেকে ৯০% কমিয়ে দেয়'
          },
          {
            en: 'It doubles the physical storage space of hard drives for free',
            bn: 'এটি বিনামূল্যে হার্ডডিস্কের মেমরি দ্বিগুণ করে দেয়'
          },
          {
            en: 'It allows database servers to operate with zero memory (RAM)',
            bn: 'এটি কোনো মেমরি (র‍্যাম) ছাড়াই ডাটাবেস চলার সুযোগ দেয়'
          },
          {
            en: 'It encrypts all queries with military-grade passwords automatically',
            bn: 'এটি تمام কোয়েরিকে স্বয়ংক্রিয়ভাবে পাসওয়ার্ড দিয়ে এনক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Bypassing heap blocks eliminates the most expensive part of query execution: random I/O.',
          bn: 'হিপ পেজ এড়িয়ে যাওয়া কোয়েরি এক্সিকিউশনের সবচেয়ে ব্যয়বহুল অংশ র্যান্ডম I/O দূর করে।'
        },
        explanation: {
          en: 'Heap fetches require jumping randomly across disk blocks. Serving queries purely from contiguous index leaf pages eliminates random head movement and cache misses.',
          bn: 'হিপ রিডের জন্য ডিস্কের এলোমেলো ব্লকে লাফাতে হয়। ইনডেক্স পাতা থেকে সরাসরি ডাটা দিলে র্যান্ডম জাম্প বন্ধ হয় এবং কোয়েরির গতি বহুগুণ বৃদ্ধি পায়।'
        }
      },
      {
        id: 'idx-cov-qz-2',
        kind: 'mcq',
        topic: 'include-columns-uniqueness-constraint',
        question: {
          en: 'In PostgreSQL and SQL Server, how does a UNIQUE index behave when defined with an INCLUDE clause, such as CREATE UNIQUE INDEX idx ON users(email) INCLUDE (full_name);?',
          bn: 'PostgreSQL এবং SQL Server-এ CREATE UNIQUE INDEX idx ON users(email) INCLUDE (full_name); স্টেটমেন্টের ক্ষেত্রে ইউনিক শর্তটি কীভাবে কার্যকর হয়?'
        },
        options: [
          {
            en: 'Uniqueness is enforced strictly on the key column (email) alone; duplicate emails are rejected regardless of what full_name contains',
            bn: 'ইউনিক শর্তটি শুধুমাত্র কি কলাম (email)-এর ওপর বলবৎ থাকে; full_name-এ যা-ই থাকুক না কেন ডুপ্লিকেট ইমেইল সরাসরি বাতিল হয়ে যাবে'
          },
          {
            en: 'Uniqueness is enforced on the combination of (email, full_name)',
            bn: 'ইউনিক শর্তটি (email, full_name)-এর যৌথ মানের ওপর কার্যকর হয়'
          },
          {
            en: 'The uniqueness constraint is ignored and disabled completely',
            bn: 'ইউনিক কনস্ট্রেইন্ট পুরোপুরি নিষ্ক্রিয় হয়ে যায়'
          },
          {
            en: 'The database rejects the index definition with a syntax crash',
            bn: 'ডাটাবেস সিনট্যাক্স এরর দিয়ে ইনডেক্স তৈরি প্রত্যাখ্যান করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Uniqueness applies strictly to key columns, never to included payload columns.',
          bn: 'ইউনিকনেস কেবল কি কলামের ওপর প্রযোজ্য, ইনক্লুডেড পেলোড কলামের ওপর নয়।'
        },
        explanation: {
          en: 'The unique constraint applies strictly to the indexed key columns. The included columns are purely piggybacked payload data along for the ride in leaf pages.',
          bn: 'ইউনিক নিয়ম কেবল মূল কি-র ওপরই থাকে। ইনক্লুডেড কলামগুলো কেবল লিফ পেজে সহায়ক ডাটা হিসেবে অবস্থান করে।'
        }
      },
      {
        id: 'idx-cov-qz-3',
        kind: 'mcq',
        topic: 'covering-index-storage-tradeoff',
        question: {
          en: 'What architectural tradeoff must engineers consider before adding many large columns to the INCLUDE clause of a covering index?',
          bn: 'কাভারিং ইনডেক্সের INCLUDE ক্লজে অনেকগুলো বড় বড় কলাম যোগ করার আগে ইঞ্জিনিয়ারদের কোন প্রযুক্তিগত আপস বিবেচনা করতে হয়?'
        },
        options: [
          {
            en: 'Leaf page bloat and increased write amplification: each inserted or updated row requires writing larger leaf blocks, consuming more disk storage and memory buffer pool cache',
            bn: 'লিফ পেজের আকার বৃদ্ধি এবং রাইট অ্যাম্প্লিফিকেশন: প্রতি আপডেটে বড় আকারের ব্লক ডিস্কে লিখতে হয়, যা বেশি স্টোরেজ এবং ক্যাশ মেমরি খরচ করে'
          },
          {
            en: 'The database server computer will stop accepting network traffic',
            bn: 'ডাটাবেস সার্ভার কম্পিউটার নেটওয়ার্ক ট্রাফিক গ্রহণ করা বন্ধ করে দেবে'
          },
          {
            en: 'All table rows are converted into hexadecimal numbers',
            bn: 'تمام টেবিল সারি হেক্সাডেসিমাল সংখ্যায় রূপান্তরিত হবে'
          },
          {
            en: 'The database will automatically delete the primary key column',
            bn: 'ডাটাবেস স্বয়ংক্রিয়ভাবে প্রাইমারি কি কলামটি মুছে ফেলবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Wider leaf pages mean larger index file size on disk and greater write costs.',
          bn: 'লিফ পেজ মোটা হলে ডিস্কে ইনডেক্সের আকার বাড়ে এবং লেখার খরচ বৃদ্ধি পায়।'
        },
        explanation: {
          en: 'Storing payload data widens leaf records, increasing index size and RAM buffer consumption. Only include columns that are frequently requested by high-throughput critical queries.',
          bn: 'পেলোড ডাটা লিফ পেজকে মোটা করে তোলে যা স্টোরেজ ও র‍্যাম বেশি দখল করে। তাই কেবল অতি গুরুত্বপূর্ণ ও ঘন ঘন চলা কোয়েরির কলামগুলোই ইনক্লুড করা উচিত।'
        }
      },
      {
        id: 'idx-cov-qz-4',
        kind: 'mcq',
        topic: 'covering-index-in-mysql-innodb',
        question: {
          en: 'In MySQL InnoDB, how do secondary indexes naturally act as covering indexes for queries that select the Primary Key?',
          bn: 'MySQL InnoDB-তে কোনো কোয়েরি যখন প্রাইমারি কি সিলেক্ট করে, তখন সেকেন্ডারি ইনডেক্স কীভাবে স্বাভাবিকভাবেই কাভারিং ইনডেক্স হিসেবে কাজ করে?'
        },
        options: [
          {
            en: 'Because InnoDB secondary index leaf pages automatically append the table clustered Primary Key as their row pointer, any query selecting the indexed column and the Primary Key is naturally covered',
            bn: 'যেহেতু InnoDB সেকেন্ডারি ইনডেক্সের লিফ পেজে রো পয়েন্টার হিসেবে টেবিলের ক্লাস্টার্ড প্রাইমারি কি স্বয়ংক্রিয়ভাবে যুক্ত থাকে, তাই ইনডেক্স কলাম ও প্রাইমারি কি সিলেক্ট করা কোয়েরি স্বাভাবিকভাবেই কাভার্ড হয়ে যায়'
          },
          {
            en: 'Because MySQL converts all secondary indexes into text files',
            bn: 'কারণ MySQL તમામ সেকেন্ডারি ইনডেক্সকে টেক্সট ফাইলে রূপান্তর করে ফেলে'
          },
          {
            en: 'Because InnoDB deletes secondary indexes every 10 minutes',
            bn: 'কারণ InnoDB প্রতি ১০ মিনিট পর পর সেকেন্ডারি ইনডেক্স মুছে দেয়'
          },
          {
            en: 'Because primary keys are forbidden from using B-Trees in MySQL',
            bn: 'কারণ MySQL-এ প্রাইমারি কি-তে B-Tree ব্যবহার করা নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'InnoDB secondary leaf pages implicitly contain the primary key.',
          bn: 'InnoDB-র সেকেন্ডারি পাতার ভেতরে স্বাভাবিকভাবেই প্রাইমারি কি সংরক্ষিত থাকে।'
        },
        explanation: {
          en: 'In InnoDB, secondary leaf nodes point to data rows using the Primary Key. Therefore, SELECT id, email FROM users WHERE email = ? is naturally an Index-Only Scan without needing an INCLUDE clause.',
          bn: 'InnoDB-তে সেকেন্ডারি লিফ পেজের পয়েন্টারই হলো প্রাইমারি কি। তাই id ও email সিলেক্ট করলে কোনো হিপ জাম্প ছাড়াই ইনডেক্স থেকেই ফলাফল চলে আসে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'parts-and-the-partial',
    title: {
      en: 'Partial & Filtered Indexes: Targeted Indexing with WHERE',
      bn: 'আংশিক ও ফিল্টার্ড ইনডেক্স: WHERE ক্লজ দিয়ে নির্দিষ্ট ইনডেক্সিং'
    }
  }
};
