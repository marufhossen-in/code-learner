import type { Lesson } from '../../../lib/types';

export const CompsAndTheCompositeLesson: Lesson = {
  slug: 'comps-and-the-composite',
  tech: 'indexes',
  title: {
    en: 'Composite Multi-Column Indexes: The Leftmost Prefix Rule',
    bn: 'কম্পোজিট মাল্টি-কলাম ইনডেক্স: লেফটমোস্ট প্রিফিক্স রুল'
  },
  summary: {
    en: 'Master multi-column database indexing: the Leftmost Prefix Rule, column selectivity ordering, composite B-Tree traversal, and index skip scan mechanics.',
    bn: 'মাল্টি-কলাম ডাটাবেস ইনডেক্সিং আয়ত্ত করুন: লেফটমোস্ট প্রিফিক্স রুল, কলামের সিলেক্টিভিটি অর্ডার, কম্পোজিট B-Tree নেভিগেশন এবং ইনডেক্স স্কিপ স্ক্যান কৌশল।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'the-composite-challenge',
      text: {
        en: 'Multi-Column Filtering and the Phonebook Principle',
        bn: 'মাল্টি-কলাম ফিল্টারিং এবং টেলিফোন ডিরেক্টরি নীতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you design real-world software, your queries rarely filter by a single column. Consider an e-commerce platform filtering products by company ID, active status, and order date simultaneously. Creating three separate single-column indexes forces the database engine to pick only one index or merge bitmaps at high CPU cost.',
        bn: 'বাস্তব জীবনের সফটওয়্যার তৈরির সময় কোয়েরিগুলো খুব কমই মাত্র একটি কলাম দিয়ে ফিল্টার করা হয়। একটি ই-কমার্স প্ল্যাটফর্ম সাধারণত কোম্পানির আইডি, সক্রিয় স্ট্যাটাস এবং অর্ডারের তারিখ একসাথে মিলিয়ে ফিল্টার করে। ৩টি আলাদা কলামে ৩টি একক ইনডেক্স বানালে ডাটাবেস ইঞ্জিন কেবল ১টি ইনডেক্স বেছে নিতে বাধ্য হয় বা অতিরিক্ত প্রসেসর খরচ করে ফলাফল মেলায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Relational databases solve this with Composite Indexes: single B-Tree indexes spanning multiple columns. However, composite indexes strictly follow the Leftmost Prefix Rule. To understand this rule, consider a physical telephone directory sorted first by Last Name, then by First Name.',
        bn: 'রিলেশনাল ডাটাবেসগুলো এই সমস্যার সমাধান করে কম্পোজিট ইনডেক্সের মাধ্যমে: এটি একটি একক B-Tree যা একাধিক কলামকে একসাথে ধারণ করে। কিন্তু কম্পোজিট ইনডেক্স কঠোরভাবে লেফটমোস্ট প্রিফিক্স নিয়ম মেনে চলে। এই নিয়মটি সহজে বুঝতে একটি ছাপানো টেলিফোন ডিরেক্টরির কথা ভাবুন, যা প্রথমে পদবি (Last Name) এবং পরে প্রথম নাম (First Name) অনুসারে সাজানো থাকে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Leftmost Prefix Rule: Lexicographical Ordering on (A, B, C)',
        bn: 'লেফটমোস্ট প্রিফিক্স রুল: (A, B, C) কলামের ওপর বর্ণানুক্রমিক বিন্যাস'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Composite Index Leftmost Prefix Rule Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Left: Composite B-Tree Key Structure -->
  <g transform="translate(30, 25)">
    <rect width="330" height="280" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="165" y="30" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Composite Index: (tenant, status, year)</text>

    <!-- Sorted Order Blocks -->
    <rect x="25" y="60" width="280" height="42" rx="4" fill="#0f172a" stroke="#334155" />
    <text x="35" y="85" fill="#facc15" font-size="11" font-weight="bold">[101 | ACTIVE  | 2025]</text>
    <text x="210" y="85" fill="#34d399" font-size="10">Row #1</text>

    <rect x="25" y="112" width="280" height="42" rx="4" fill="#0f172a" stroke="#334155" />
    <text x="35" y="137" fill="#facc15" font-size="11" font-weight="bold">[101 | ACTIVE  | 2026]</text>
    <text x="210" y="137" fill="#34d399" font-size="10">Row #2</text>

    <rect x="25" y="164" width="280" height="42" rx="4" fill="#0f172a" stroke="#334155" />
    <text x="35" y="189" fill="#facc15" font-size="11" font-weight="bold">[101 | PENDING | 2026]</text>
    <text x="210" y="189" fill="#34d399" font-size="10">Row #3</text>

    <rect x="25" y="216" width="280" height="42" rx="4" fill="#0f172a" stroke="#334155" />
    <text x="35" y="241" fill="#facc15" font-size="11" font-weight="bold">[202 | ACTIVE  | 2026]</text>
    <text x="210" y="241" fill="#34d399" font-size="10">Row #4</text>
  </g>

  <!-- Right: Query Usability Matrix -->
  <g transform="translate(390, 25)">
    <rect width="320" height="280" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
    <text x="160" y="30" fill="#f8fafc" font-size="14" font-weight="bold" text-anchor="middle">Prefix Usability Evaluation</text>

    <!-- Query 1: WHERE tenant = 101 -->
    <rect x="20" y="55" width="280" height="38" rx="4" fill="#065f46" stroke="#10b981" />
    <text x="30" y="78" fill="#a7f3d0" font-size="10" font-weight="bold">WHERE tenant = 101</text>
    <text x="220" y="78" fill="#34d399" font-size="10" font-weight="bold">INDEX SEEK</text>

    <!-- Query 2: WHERE tenant = 101 AND status = 'ACTIVE' -->
    <rect x="20" y="103" width="280" height="38" rx="4" fill="#065f46" stroke="#10b981" />
    <text x="30" y="126" fill="#a7f3d0" font-size="10" font-weight="bold">WHERE tenant AND status</text>
    <text x="220" y="126" fill="#34d399" font-size="10" font-weight="bold">INDEX SEEK</text>

    <!-- Query 3: WHERE status = 'ACTIVE' (Missing leftmost tenant!) -->
    <rect x="20" y="151" width="280" height="38" rx="4" fill="#7f1d1d" stroke="#ef4444" />
    <text x="30" y="174" fill="#fecaca" font-size="10" font-weight="bold">WHERE status (No tenant)</text>
    <text x="220" y="174" fill="#fca5a5" font-size="10" font-weight="bold">SEQ SCAN!</text>

    <!-- Query 4: WHERE year = 2026 -->
    <rect x="20" y="199" width="280" height="38" rx="4" fill="#7f1d1d" stroke="#ef4444" />
    <text x="30" y="222" fill="#fecaca" font-size="10" font-weight="bold">WHERE year (No tenant)</text>
    <text x="220" y="222" fill="#fca5a5" font-size="10" font-weight="bold">SEQ SCAN!</text>

    <text x="20" y="265" fill="#facc15" font-size="9" font-weight="bold">Rule: Queries MUST include the leftmost column!</text>
  </g>
</svg>`,
      caption: {
        en: 'The Leftmost Prefix Rule: queries specifying the leftmost column (A) trigger fast Index Seeks, while queries omitting (A) fall back to Full Table Scans.',
        bn: 'লেফটমোস্ট প্রিফিক্স রুল: বামদিকের কলাম (A) উল্লেখ করা কোয়েরি দ্রুত ইনডেক্স সিক চালায়, আর (A) ছাড়া কোয়েরি ফুল টেবিল স্ক্যানে ফিরে যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Composite Index',
          def: {
            en: 'A single database index constructed across two or more table columns, ordered lexicographically from left to right.',
            bn: 'দুই বা ততোধিক কলামের সমন্বয়ে গঠিত একটি একক ডাটাবেস ইনডেক্স যা বাম থেকে ডানে বর্ণানুক্রমিকভাবে ডাটা সাজায়।'
          }
        },
        {
          term: 'Leftmost Prefix Rule',
          def: {
            en: 'The database constraint requiring a query to supply the leading leftmost index columns for the engine to execute an efficient B-Tree seek.',
            bn: 'ডাটাবেসের এমন একটি বাধ্যবাধকতা যাতে ইনডেক্স ব্যবহারের জন্য কোয়েরিতে অবশ্যই ইনডেক্সের একদম বামদিকের কলাম থাকতে হয়।'
          }
        },
        {
          term: 'Column Cardinality',
          def: {
            en: 'The uniqueness or count of distinct values in a table column; higher cardinality columns yield superior index selectivity.',
            bn: 'টেবিলের কোনো কলামে থাকা ভিন্ন ভিন্ন অনন্য মানের সংখ্যা; উচ্চ কার্ডিনালিটির কলাম দ্রুত ফিল্টারিংয়ে বেশি কার্যকর হয়।'
          }
        },
        {
          term: 'Index Skip Scan',
          def: {
            en: 'An optimization where the engine skips through distinct values of a low-cardinality leading column to utilize the index for subsequent columns.',
            bn: 'একটি বিশেষ অপ্টিমাইজেশন কৌশল যার মাধ্যমে ইঞ্জিন প্রথম কলামের কয়েকটি ভিন্ন মান লাফিয়ে পরের কলামের ইনডেক্স ব্যবহার করতে পারে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'column-ordering-heuristics',
      text: {
        en: 'Strategic Column Ordering: Equality First, Ranges Last',
        bn: 'কলাম সাজানোর কৌশলগত নীতি: সমতা প্রথমে, রেঞ্জ শেষে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When constructing a composite index on multiple columns, column order dictates performance. As a rule, place high-cardinality equality columns on the far left. Once an inequality or range comparison (such as greater than, less than, or BETWEEN) appears on a column, subsequent columns in the composite index cannot be used for B-Tree seeks.',
        bn: 'একাধিক কলামে কম্পোজিট ইনডেক্স তৈরির সময় কলামের ক্রমই আসল পারফরম্যান্স নির্ধারণ করে। একটি সোনালী নিয়ম হলো উচ্চ কার্ডিনালিটি বিশিষ্ট সমতা কলামগুলোকে সর্বদা সবার বামে রাখা। কারণ কোনো একটি কলামে একবার রেঞ্জ শর্ত (যেমন >, < বা BETWEEN) চলে আসলে তার পরের কলামগুলো আর ইনডেক্স সিকের জন্য ব্যবহার করা যায় না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For example, with an index on (company_id, created_at, status), a query with WHERE company_id = 101 AND created_at >= \'2026-01-01\' AND status = \'ACTIVE\' uses company_id and created_at to seek the tree. However, because created_at is evaluated as a range, the status column cannot be sought directly; the engine must filter status in memory across the matching date range.',
        bn: 'উদাহরণস্বরূপ, (company_id, created_at, status)-এর ওপর ইনডেক্স থাকলে WHERE company_id = 101 AND created_at >= \'2026-01-01\' AND status = \'ACTIVE\' কোয়েরিতে কোম্পানি ও তারিখ দিয়ে ট্রি সিক করা যাবে। কিন্তু তারিখ যেহেতু একটি রেঞ্জ, তাই স্ট্যাটাস কলামটি ইনডেক্স সিকের সুযোগ পাবে না; ইঞ্জিনকে তারিখের ভেতরের تمام ডাটা এনে মেমরিতে স্ট্যাটাস মেলাতে হবে।'
      }
    },
    {
      type: 'heading',
      id: 'node-composite-engine',
      text: {
        en: 'Executable Composite Index & Prefix Rule Simulator',
        bn: 'রানযোগ্য কম্পোজিট ইনডেক্স ও প্রিফিক্স রুল সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine simulating a three column composite index on (tenant_id, status, created_year). A query filtering on tenant_id = 101 and status = ACTIVE retrieves 2 matching records via an index seek. In contrast, omitting the leftmost tenant_id column violates the rule, forcing a full table scan.',
        bn: 'নিচে (tenant_id, status, created_year) কলামের ওপর ৩টি কলামযুক্ত কম্পোজিট ইনডেক্স সিমুলেশনকারী একটি সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। tenant_id = 101 এবং status = ACTIVE দিয়ে ফিল্টার করা কোয়েরিটি ইনডেক্স সিকের মাধ্যমে ২টি রেকর্ড উদ্ধার করে। অন্যদিকে বামদিকের tenant_id বাদ দেওয়া কোয়েরিটি নিয়ম ভঙ্গ করে ফুল টেবিল স্ক্যানে ফিরে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Composite index evaluator testing Leftmost Prefix Rule compliance and sequential fallback detection',
        bn: 'লেফটমোস্ট প্রিফিক্স নিয়ম মান্যতা এবং সিকোয়েনশিয়াল স্ক্যান শনাক্তকারী কম্পোজিট ইনডেক্স মূল্যায়নকারী'
      },
      code: `// Composite Index & Leftmost Prefix Simulator
const compositeIndexStorage = [
  { tenant_id: 101, status: 'ACTIVE', created_year: 2025, rowPointer: 'blk_1_slot_1' },
  { tenant_id: 101, status: 'ACTIVE', created_year: 2026, rowPointer: 'blk_1_slot_2' },
  { tenant_id: 101, status: 'PENDING', created_year: 2026, rowPointer: 'blk_2_slot_1' },
  { tenant_id: 202, status: 'ACTIVE', created_year: 2026, rowPointer: 'blk_3_slot_5' }
];

// Query 1: Supplies leftmost prefix (tenant_id, status)
function executePrefixQuery(targetTenant, targetStatus) {
  // Can perform an efficient B-Tree Index Seek
  return compositeIndexStorage.filter(
    item => item.tenant_id === targetTenant && item.status === targetStatus
  );
}

// Query 2: Omits leftmost column (only supplies status)
function executeNonPrefixQuery(targetStatus) {
  // Violates Leftmost Prefix Rule!
  // B-Tree keys are sorted by tenant first, so status values are scattered.
  return {
    fallbackToSeqScan: true,
    results: compositeIndexStorage.filter(item => item.status === targetStatus)
  };
}

const prefixMatches = executePrefixQuery(101, 'ACTIVE');
const nonPrefixResult = executeNonPrefixQuery('ACTIVE');
const isAccurate = prefixMatches.length === 2 && nonPrefixResult.fallbackToSeqScan;

console.log(\`[Composite Index Engine] Indexed 4 records on (tenant_id, status, created_year).\`);
console.log(\`[Leftmost Match] Query on (tenant_id = 101, status = ACTIVE) executed via composite Index Seek; retrieved \${prefixMatches.length} matches.\`);
console.log(\`[Prefix Breach Warning] Query on (status = ACTIVE) violates Leftmost Prefix Rule; fell back to full table scan (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Index Skip Scan in Modern PostgreSQL and MySQL',
        bn: 'আধুনিক PostgreSQL ও MySQL-এ ইনডেক্স স্কিপ স্ক্যান'
      },
      text: {
        en: 'Suppose a leading column has very low cardinality (such as a gender column with only \'M\' and \'F\'). Modern optimizers can execute an Index Skip Scan: seeking (M, status = ACTIVE) and then skipping directly to seek (F, status = ACTIVE). This optimization avoids a full table scan.',
        bn: 'ধরুন প্রথম কলামটির কার্ডিনালিটি খুব কম (যেমন জেন্ডার কলামে কেবল M এবং F)। আধুনিক অপ্টিমাইজার নিজে থেকেই ইনডেক্স স্কিপ স্ক্যান চালাতে পারে। এটি (M, status = ACTIVE) এবং পরে (F, status = ACTIVE) আলাদাভাবে খুঁজে ফুল টেবিল স্ক্যান এড়িয়ে যায়।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Prefix Usability Inspector',
        bn: 'প্রিফিক্স উপযোগিতা পরীক্ষক'
      },
      description: {
        en: 'Check if a specific WHERE clause can utilize a composite index on columns (A, B, C).',
        bn: '(A, B, C) কলামের কম্পোজিট ইনডেক্স কোনো নির্দিষ্ট WHERE শর্তে ব্যবহারযোগ্য কিনা তা যাচাই করুন।'
      },
      code: `function canUseCompositeIndex(suppliedColumns) {
  // Leftmost column 'A' must be present
  if (!suppliedColumns.includes('A')) return 'FULL_TABLE_SCAN';
  if (suppliedColumns.includes('B') && suppliedColumns.includes('C')) return 'FULL_INDEX_SEEK_ABC';
  if (suppliedColumns.includes('B')) return 'PARTIAL_INDEX_SEEK_AB';
  return 'PARTIAL_INDEX_SEEK_A';
}

console.log('Query with A and B:', canUseCompositeIndex(['A', 'B']));
console.log('Query with B and C:', canUseCompositeIndex(['B', 'C']));`,
      tests: [
        {
          name: {
            en: 'Allows seek when leftmost column A is present',
            bn: 'বামদিকের কলাম A উপস্থিত থাকলে সিক অনুমোদন করে'
          },
          expected: 'Query with A and B: PARTIAL_INDEX_SEEK_AB'
        },
        {
          name: {
            en: 'Falls back to table scan when leftmost column A is missing',
            bn: 'বামদিকের কলাম A অনুপস্থিত থাকলে টেবিল স্ক্যানে ফিরে যায়'
          },
          expected: 'Query with B and C: FULL_TABLE_SCAN'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'idx-comp-ex-1',
      kind: 'mcq',
      topic: 'leftmost-prefix-rule-definition',
      question: {
        en: 'Given a composite index on (department_id, employee_role, hire_date), which of the following WHERE queries CANNOT utilize the index for a B-Tree seek?',
        bn: '(department_id, employee_role, hire_date) কলামের কম্পোজিট ইনডেক্সে নিচের কোন WHERE কোয়েরিটি B-Tree সিকের জন্য ইনডেক্সটি ব্যবহার করতে পারবে না?'
      },
      options: [
        {
          en: 'WHERE employee_role = \'ENGINEER\' AND hire_date >= \'2025-01-01\' (omits the leftmost column department_id)',
          bn: 'WHERE employee_role = \'ENGINEER\' AND hire_date >= \'2025-01-01\' (সবার বামের department_id কলাম অনুপস্থিত)'
        },
        {
          en: 'WHERE department_id = 10 AND employee_role = \'MANAGER\'',
          bn: 'WHERE department_id = 10 AND employee_role = \'MANAGER\''
        },
        {
          en: 'WHERE department_id = 10',
          bn: 'WHERE department_id = 10'
        },
        {
          en: 'WHERE department_id = 10 AND employee_role = \'LEAD\' AND hire_date = \'2026-01-01\'',
          bn: 'WHERE department_id = 10 AND employee_role = \'LEAD\' AND hire_date = \'2026-01-01\''
        }
      ],
      answer: 0,
      hint: {
        en: 'The Leftmost Prefix Rule requires the leading column (department_id) to be in the query.',
        bn: 'লেফটমোস্ট প্রিফিক্স নিয়ম অনুসারে কোয়েরিতে সবার প্রথম কলাম (department_id) থাকা বাধ্যতামূলক।'
      },
      explanation: {
        en: 'Because keys are sorted first by department_id, roles are scattered across the tree. Without specifying department_id, the database cannot perform a tree seek and must scan the table.',
        bn: 'যেহেতু ডাটা প্রথমে department_id অনুসারে সাজানো থাকে, তাই এটি উল্লেখ না করলে গাছের ডাটা এলোমেলো মনে হয় এবং ইঞ্জিন ইনডেক্স সিক চালাতে পারে না।'
      }
    },
    {
      id: 'idx-comp-ex-2',
      kind: 'mcq',
      topic: 'equality-first-range-last-rule',
      question: {
        en: 'When designing a composite index to optimize WHERE city = \'Dhaka\' AND age > 25, how should the columns be ordered in the CREATE INDEX statement?',
        bn: 'WHERE city = \'Dhaka\' AND age > 25 কোয়েরির জন্য কম্পোজিট ইনডেক্স তৈরির সময় CREATE INDEX স্টেটমেন্টে কলামগুলোর ক্রম কেমন হওয়া উচিত?'
      },
      options: [
        {
          en: 'CREATE INDEX idx_city_age ON users(city, age); (equality column city first, range column age last)',
          bn: 'CREATE INDEX idx_city_age ON users(city, age); (সমতা কলাম city সবার আগে, রেঞ্জ কলাম age সবার শেষে)'
        },
        {
          en: 'CREATE INDEX idx_age_city ON users(age, city); (range column first)',
          bn: 'CREATE INDEX idx_age_city ON users(age, city); (রেঞ্জ কলাম সবার আগে)'
        },
        {
          en: 'The order makes zero mathematical difference in B-Tree traversals',
          bn: 'B-Tree নেভিগেশনে কলামের ক্রম কোনো প্রভাব ফেলে না'
        },
        {
          en: 'Both columns must be converted into text uppercase strings first',
          bn: 'উভয় কলামকে প্রথমে বড় হাতের টেক্সট স্ট্রিংয়ে রূপান্তর করতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Equality columns must always precede inequality/range columns in composite indexes.',
        bn: 'কম্পোজিট ইনডেক্সে সমতা কলাম সর্বদা রেঞ্জ কলামের আগে বসাতে হয়।'
      },
      explanation: {
        en: 'Placing city first allows the engine to seek directly to all rows for Dhaka, then perform a clean range scan on age. Placing age first would require scanning every age > 25 and checking city row by row.',
        bn: 'city আগে রাখলে ইঞ্জিন সরাসরি ঢাকার تمام সারিতে গিয়ে বয়সের ওপর রেঞ্জ স্ক্যান চালাতে পারে। কিন্তু age আগে রাখলে ২৫-এর বেশি تمام বয়সী মানুষের মাঝে শহর খুঁজতে হতো।'
      }
    },
    {
      id: 'idx-comp-ex-3',
      kind: 'mcq',
      topic: 'order-by-composite-index-acceleration',
      question: {
        en: 'Can a composite index on (customer_id, order_date DESC) satisfy both the WHERE filter and the sorting clause in SELECT * FROM orders WHERE customer_id = 50 ORDER BY order_date DESC?',
        bn: '(customer_id, order_date DESC) কলামের কম্পোজিট ইনডেক্স কি SELECT * FROM orders WHERE customer_id = 50 ORDER BY order_date DESC কোয়েরির ফিল্টারিং এবং সর্টিং উভয়ই একসাথে সম্পন্ন করতে পারে?'
      },
      options: [
        {
          en: 'Yes: the engine seeks customer_id = 50 and reads rows in pre-sorted order directly from the index leaves, completely eliminating an explicit in-memory Sort operation',
          bn: 'হ্যাঁ: ইঞ্জিন customer_id = 50-এ সিক করে পাতা থেকে সরাসরি সাজানো ক্রমেই ডাটা পড়ে নেয়, ফলে মেমরিতে আলাদা সর্ট করার কোনো প্রয়োজন হয় না'
        },
        {
          en: 'No: relational databases are strictly forbidden from sorting with indexes',
          bn: 'না: রিলেশনাল ডাটাবেসে ইনডেক্স দিয়ে ডাটা সাজানো সম্পূর্ণ নিষিদ্ধ'
        },
        {
          en: 'No: the query will fail with a fatal syntax exception',
          bn: 'না: কোয়েরিটি সিনট্যাক্স এরর দিয়ে ব্যর্থ হবে'
        },
        {
          en: 'Yes: but only if customer_id is a negative number',
          bn: 'হ্যাঁ: তবে কেবল যদি customer_id কোনো ঋণাত্মক সংখ্যা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Composite indexes store keys in sorted order, eliminating expensive sort operations.',
        bn: 'কম্পোজিট ইনডেক্সে কি-গুলো সাজানো থাকে, যা সর্টিংয়ের ভারী খরচ বাঁচায়।'
      },
      explanation: {
        en: 'Because B-Tree entries for a given customer_id are physically stored in order_date DESC sequence, the query planner retrieves them pre-sorted, avoiding costly temporary sort buffers.',
        bn: 'যেহেতু একটি নির্দিষ্ট গ্রাহকের تمام অর্ডার ইতোমধ্যে তারিখ অনুসারে সাজানো থাকে, তাই ইঞ্জিন কোনো মেমরি সর্ট ছাড়াই সরাসরি সঠিক ক্রমে ফলাফল পরিবেশন করে।'
      }
    },
    {
      id: 'idx-comp-ex-4',
      kind: 'mcq',
      topic: 'index-skip-scan-condition',
      question: {
        en: 'Under what specific condition can a database optimizer perform an Index Skip Scan when a query omits the leading column of a composite index?',
        bn: 'কোন নির্দিষ্ট পরিস্থিতিতে একটি ডাটাবেস অপ্টিমাইজার ইনডেক্স স্কিপ স্ক্যান চালাতে পারে যখন কোনো কোয়েরি কম্পোজিট ইনডেক্সের প্রথম কলামটি বাদ দেয়?'
      },
      options: [
        {
          en: 'When the leading leftmost column has very low cardinality (very few distinct values, like gender or status), allowing the engine to iterate over those few values and execute seeks on the subsequent columns',
          bn: 'যখন সবার বামের প্রথম কলামটির কার্ডিনালিটি খুব কম থাকে (খুব কম সংখ্যক ভিন্ন মান, যেমন জেন্ডার বা স্ট্যাটাস), তখন ইঞ্জিন সেই কয়েকটি মানের ওপর লাফিয়ে পরের কলামগুলোতে সিক চালাতে পারে'
        },
        {
          en: 'When the database computer has at least 500 gigabytes of RAM',
          bn: 'যখন ডাটাবেস কম্পিউটারে অন্তত ৫০০ গিগাবাইট র‍্যাম থাকে'
        },
        {
          en: 'When the table contains zero primary keys',
          bn: 'যখন টেবিলে কোনো প্রাইমারি কি থাকে না'
        },
        {
          en: 'When the query is executed between 1:00 AM and 2:00 AM',
          bn: 'যখন কোয়েরিটি রাত ১:০০ টা থেকে ২:০০ টার মধ্যে চালানো হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Low cardinality on the leading column enables skipping between prefix values.',
        bn: 'প্রথম কলামে কম সংখ্যক ভিন্ন মান থাকলে স্কিপ স্ক্যান চালানো সম্ভব হয়।'
      },
      explanation: {
        en: 'If a leading column has only 2 distinct values, the engine performs 2 targeted index sub-seeks rather than an exhaustive full table scan, saving massive I/O overhead.',
        bn: 'প্রথম কলামে মাত্র ২টি ভিন্ন মান থাকলে পুরো টেবিল স্ক্যান না করে ইঞ্জিন মাত্র ২টি সাব-সিক চালিয়ে অত্যন্ত দ্রুত সঠিক ডাটা সংগ্রহ করে ফেলে।'
      }
    }
  ],
  quiz: {
    id: 'comps-and-the-composite-quiz',
    title: {
      en: 'Composite Indexing & Prefix Architecture Quiz',
      bn: 'কম্পোজিট ইনডেক্স ও প্রিফিক্স আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'idx-comp-qz-1',
        kind: 'mcq',
        topic: 'composite-index-limitations-rule',
        question: {
          en: 'If you have an index on (A, B, C), which combination of filter predicates can fully leverage all 3 indexed columns for an index seek?',
          bn: '(A, B, C) কলামে একটি ইনডেক্স থাকলে নিচের কোন শর্তের সমন্বয়টি تمام ৩টি কলামকে ইনডেক্স সিকের জন্য পুরোপুরি ব্যবহার করতে পারবে?'
        },
        options: [
          {
            en: 'WHERE A = 10 AND B = \'X\' AND C = 500 (all three are equality predicates in exact leftmost sequence)',
            bn: 'WHERE A = 10 AND B = \'X\' AND C = 500 (تمام ৩টি কলাম নিখুঁত বামদিকের ক্রমানুসারে সমতা শর্তে যুক্ত)'
          },
          {
            en: 'WHERE B = \'X\' AND C = 500 (omits A)',
            bn: 'WHERE B = \'X\' AND C = 500 (A কলাম অনুপস্থিত)'
          },
          {
            en: 'WHERE C = 500 (omits A and B)',
            bn: 'WHERE C = 500 (A এবং B উভয়ই অনুপস্থিত)'
          },
          {
            en: 'WHERE A > 10 AND B = \'X\' AND C = 500 (A is a range, disabling B and C seek)',
            bn: 'WHERE A > 10 AND B = \'X\' AND C = 500 (A একটি রেঞ্জ হওয়ায় B এবং C-এর সিক বন্ধ হয়ে যায়)'
          }
        ],
        answer: 0,
        hint: {
          en: 'All equality predicates matching the leftmost order leverage the full index depth.',
          bn: 'লেফটমোস্ট ক্রম অনুসারে تمام সমতা শর্ত থাকলে ইনডেক্সের পূর্ণ গভীরতা ব্যবহার করা যায়।'
        },
        explanation: {
          en: 'When all columns are queried using equality operators in prefix order, the B-Tree seek navigates directly down to the precise leaf record without any intermediate range expansion.',
          bn: 'যখন تمام কলাম সমতা শর্তে বাম থেকে ডানে থাকে, তখন B-Tree কোনো দ্বিধা ছাড়াই সরাসরি নিখুঁত লিফ রেকর্ডে নেমে আসে।'
        }
      },
      {
        id: 'idx-comp-qz-2',
        kind: 'mcq',
        topic: 'index-column-redundancy-rule',
        question: {
          en: 'If an application already possesses a composite index on (tenant_id, user_id), does it also need a separate single-column index on (tenant_id)?',
          bn: 'কোনো অ্যাপ্লিকেশনে যদি পূর্বে থেকেই (tenant_id, user_id)-এর ওপর একটি কম্পোজিট ইনডেক্স থাকে, তবে কি (tenant_id)-র ওপর আলাদা আরেকটি একক ইনডেক্স তৈরি করা প্রয়োজন?'
        },
        options: [
          {
            en: 'No: the composite index already serves queries filtering by tenant_id alone because tenant_id is the leftmost leading column, making the single-column index redundant',
            bn: 'না: কম্পোজিট ইনডেক্সটি নিজেই tenant_id-র কোয়েরির উত্তর দিতে পারে কারণ tenant_id সবার বামের কলাম, তাই আলাদা একক ইনডেক্সটি অপ্রয়োজনীয় ও অপচয়'
          },
          {
            en: 'Yes: every single column must have its own separate index file on disk',
            bn: 'হ্যাঁ: ডিস্কে প্রতিটি কলামের নিজস্ব আলাদা ইনডেক্স ফাইল থাকা বাধ্যতামূলক'
          },
          {
            en: 'Yes: otherwise the database will reject user passwords',
            bn: 'হ্যাঁ: নয়তো ডাটাবেস ব্যবহারকারীর পাসওয়ার্ড প্রত্যাখ্যান করবে'
          },
          {
            en: 'No: but only if tenant_id is stored in Greek characters',
            bn: 'না: তবে কেবল যদি tenant_id গ্রিক অক্ষরে লেখা থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A composite index on (A, B) naturally covers queries on (A) alone.',
          bn: '(A, B)-এর ওপর ইনডেক্স থাকলে তা স্বাভাবিকভাবেই শুধু (A)-এর কোয়েরি সম্পন্ন করতে পারে।'
        },
        explanation: {
          en: 'A composite index on (A, B) doubles as an index on (A). Creating a separate index on (A) wastes disk space and adds redundant write amplification without any query benefit.',
          bn: '(A, B)-এর ইনডেক্সটি (A)-এর জন্যও নিখুঁতভাবে কাজ করে। (A)-এর ওপর আলাদা ইনডেক্স বানালে ডিস্কের অপচয় হয় এবং ডাটা লেখার গতি কমে যায়।'
        }
      },
      {
        id: 'idx-comp-qz-3',
        kind: 'mcq',
        topic: 'cardinality-impact-on-index-layout',
        question: {
          en: 'What is Column Selectivity, and why should higher selectivity columns generally be placed first in composite indexes?',
          bn: 'কলাম সিলেক্টিভিটি (Column Selectivity) কী এবং কম্পোজিট ইনডেক্সে কেন সাধারণত উচ্চ সিলেক্টিভিটির কলামগুলো আগে রাখা উচিত?'
        },
        options: [
          {
            en: 'Selectivity measures the fraction of rows filtered out; high-selectivity columns eliminate the vast majority of non-matching records in the very first tree level',
            bn: 'সিলেক্টিভিটি নির্দেশ করে কোনো কলাম কত দ্রুত অপ্রয়োজনীয় রো বাদ দিতে পারে; উচ্চ সিলেক্টিভিটির কলাম প্রথম ধাপেই অধিকাংশ অপ্রয়োজনীয় ডাটা ফিল্টার করে ফেলে'
          },
          {
            en: 'Selectivity is the color brightness of the database monitor',
            bn: 'সিলেক্টিভিটি হলো ডাটাবেস মনিটরের রঙের উজ্জ্বলতা'
          },
          {
            en: 'Selectivity is the number of sound files attached to the database',
            bn: 'সিলেক্টিভিটি হলো ডাটাবেসের সাথে যুক্ত থাকা অডিও ফাইলের সংখ্যা'
          },
          {
            en: 'Selectivity indicates whether a column is written in HTML',
            bn: 'সিলেক্টিভিটি নির্দেশ করে কলামটি HTML-এ লেখা হয়েছে কিনা'
          }
        ],
        answer: 0,
        hint: {
          en: 'High selectivity weeds out unwanted rows fastest, minimizing subsequent branch evaluations.',
          bn: 'উচ্চ সিলেক্টিভিটি শুরুতেই অপ্রয়োজনীয় ডাটা ছেঁটে ফেলে, ফলে পরের ধাপের কাজ সহজ হয়।'
        },
        explanation: {
          en: 'A high-selectivity column (like account_id) narrows millions of rows down to dozens instantly, making subsequent branch and leaf traversals extremely fast.',
          bn: 'উচ্চ সিলেক্টিভিটির কলাম (যেমন account_id) কোটি কোটি ডাটাকে মুহূর্তেই কয়েকটিতে নামিয়ে আনে, যা অনুসন্ধানকে অত্যন্ত দ্রুতগতির করে তোলে।'
        }
      },
      {
        id: 'idx-comp-qz-4',
        kind: 'mcq',
        topic: 'order-by-directional-mismatch',
        question: {
          en: 'If an index is created as (category_id ASC, price ASC), can it satisfy a query ordering by ORDER BY category_id ASC, price DESC without sorting?',
          bn: '(category_id ASC, price ASC) কলামে ইনডেক্স তৈরি করা থাকলে তা কি ORDER BY category_id ASC, price DESC কোয়েরির সর্টিং মেমরি সর্ট ছাড়া সম্পন্ন করতে পারবে?',
        },
        options: [
          {
            en: 'No: because the sorting directions are mismatched (ASC vs DESC), the engine cannot traverse the leaves sequentially and must perform an explicit Sort step',
            bn: 'না: কারণ সাজানোর দিক বিপরীতমুখী (একটি ASC এবং অন্যটি DESC), ফলে ইঞ্জিন পাতাগুলো ধারাবাহিকভাবে পড়তে পারে না এবং আলাদা সর্ট করতে বাধ্য হয়'
          },
          {
            en: 'Yes: B-Trees can flip sort directions in zero microseconds',
            bn: 'হ্যাঁ: B-Tree শূন্য মাইক্রোসেকেন্ডেই সাজানোর দিক উল্টে দিতে পারে'
          },
          {
            en: 'Yes: but only if the price is paid in foreign currency',
            bn: 'হ্যাঁ: তবে কেবল যদি মূল্য বৈদেশিক মুদ্রায় পরিশোধ করা হয়'
          },
          {
            en: 'No: the query will permanently shut down the database engine',
            bn: 'না: কোয়েরিটি ডাটাবেস ইঞ্জিনকে চিরতরে বন্ধ করে দেবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Mixed directions (ASC and DESC) require an index defined with matching directions.',
          bn: 'বিপরীতমুখী সর্টিংয়ের (ASC ও DESC) জন্য ইনডেক্সেও হুবহু একই দিক উল্লেখ থাকতে হয়।'
        },
        explanation: {
          en: 'An index can read forwards (ASC, ASC) or backwards (DESC, DESC). Mixed ordering (ASC, DESC) requires defining the index explicitly with CREATE INDEX ... (category_id ASC, price DESC).',
          bn: 'ইনডেক্স সোজা (ASC, ASC) বা পুরোপুরি উল্টো (DESC, DESC) পড়তে পারে। কিন্তু মিশ্র অর্ডারের (ASC, DESC) জন্য ইনডেক্স তৈরির সময়ই সেই দিক উল্লেখ করে দিতে হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'covs-and-the-covering',
    title: {
      en: 'Covering Indexes & Index-Only Scans: The INCLUDE Clause',
      bn: 'কাভারিং ইনডেক্স ও ইনডেক্স-অনলি স্ক্যান: INCLUDE ক্লজ'
    }
  }
};
