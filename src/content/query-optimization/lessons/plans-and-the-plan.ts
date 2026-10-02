import type { Lesson } from '../../../lib/types';

export const PlansAndThePlanLesson: Lesson = {
  slug: 'plans-and-the-plan',
  tech: 'query-optimization',
  title: {
    en: 'Query Execution Plans Overview: The 4-Stage Query Lifecycle',
    bn: 'কোয়েরি এক্সিকিউশন প্ল্যান ওভারভিউ: ৪-ধাপের কোয়েরি জীবনচক্র'
  },
  summary: {
    en: 'An essential overview of database query internals: understand the four-stage query lifecycle (Parser, Rewriter, Optimizer, and Executor) and how database engines construct physical execution plan trees.',
    bn: 'ডাটাবেস কোয়েরি অভ্যন্তরীণ কৌশলের একটি অপরিহার্য ওভারভিউ: চার-ধাপের কোয়েরি জীবনচক্র (পার্সার, রিরাইটার, অপ্টিমাইজার এবং এক্সিকিউটর) এবং ডাটাবেস ইঞ্জিন কীভাবে এক্সিকিউশন প্ল্যান ট্রি তৈরি করে তা বুঝুন।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'how-databases-run-queries',
      text: {
        en: 'How Databases Run Queries: The 4-Stage Internal Pipeline',
        bn: 'ডাটাবেস কীভাবে কোয়েরি চালায়: ৪-ধাপের অভ্যন্তরীণ পাইপলাইন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you submit a SQL query to a database, the engine does not immediately read table pages from disk. SQL is a declarative programming language: you specify what data you want, not how to retrieve it physically. Transforming your declarative SQL statement into high-speed disk operations requires a sophisticated 4-stage internal pipeline.',
        bn: 'যখন আপনি ডাটাবেসে একটি SQL কোয়েরি পাঠান, ইঞ্জিনটি তাৎক্ষণিকভাবে ডিস্ক থেকে টেবিল পেজ পড়তে শুরু করে না। SQL হলো একটি ডিক্লারেটিভ ভাষা: আপনি কোন ডাটা চান তা বলে দেন, কিন্তু ডিস্ক থেকে শারীরিকভাবে তা কীভাবে সংগ্রহ করতে হবে তা বলেন না। আপনার ডিক্লারেটিভ SQL কোডকে দ্রুতগতির ডিস্ক অপারেশনে রূপান্তর করতে ডাটাবেস ৪-ধাপের একটি অত্যাধুনিক অভ্যন্তরীণ পাইপলাইন পরিচালনা করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This lifecycle comprises 4 sequential subsystems: Parser, Rewriter, Optimizer, and Executor. The Parser checks syntax, the Rewriter applies views, the Optimizer calculates numerical costs, and the Executor streams result tuples.',
        bn: 'এই জীবনচক্রটি ৪টি ধারাবাহিক সাবসিস্টেম নিয়ে গঠিত: পার্সার, রিরাইটার, অপ্টিমাইজার এবং এক্সিকিউটর। পার্সার সিনট্যাক্স যাচাই করে, রিরাইটার ভিউ প্রয়োগ করে, অপ্টিমাইজার গাণিতিক খরচ হিসাব করে এবং এক্সিকিউটর ফলাফল সরবরাহ করে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The 4-Stage Relational Query Processing Lifecycle',
        bn: 'রিলেশনাল কোয়েরি প্রসেসিংয়ের ৪-ধাপের জীবনচক্র'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Query Lifecycle Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Stage 1: Parser -->
  <g transform="translate(25, 30)">
    <rect width="150" height="260" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <rect width="150" height="32" rx="8" fill="#0284c7" />
    <text x="75" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. PARSER</text>
    <text x="15" y="55" fill="#38bdf8" font-size="10" font-weight="bold">Lexical &amp; Grammar:</text>
    <text x="15" y="75" fill="#cbd5e1" font-size="9">• Checks SQL syntax</text>
    <text x="15" y="93" fill="#cbd5e1" font-size="9">• Tokenizes keywords</text>
    <text x="15" y="111" fill="#cbd5e1" font-size="9">• Generates Parse AST</text>
    <rect x="12" y="145" width="126" height="70" rx="4" fill="#0f172a" stroke="#475569" />
    <text x="20" y="165" fill="#94a3b8" font-size="9">Input: Raw SQL string</text>
    <text x="20" y="185" fill="#facc15" font-size="9">Output: Abstract</text>
    <text x="20" y="200" fill="#facc15" font-size="9">Syntax Tree (AST)</text>
  </g>

  <!-- Arrow 1 to 2 -->
  <path d="M 180 160 L 195 160" stroke="#facc15" stroke-width="2" />

  <!-- Stage 2: Rewriter -->
  <g transform="translate(200, 30)">
    <rect width="150" height="260" rx="8" fill="#1e293b" stroke="#facc15" stroke-width="1.5" />
    <rect width="150" height="32" rx="8" fill="#ca8a04" />
    <text x="75" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. REWRITER</text>
    <text x="15" y="55" fill="#fde68a" font-size="10" font-weight="bold">Semantic Analysis:</text>
    <text x="15" y="75" fill="#cbd5e1" font-size="9">• Verifies tables &amp; cols</text>
    <text x="15" y="93" fill="#cbd5e1" font-size="9">• Expands SQL views</text>
    <text x="15" y="111" fill="#cbd5e1" font-size="9">• Applies RLS policies</text>
    <rect x="12" y="145" width="126" height="70" rx="4" fill="#0f172a" stroke="#475569" />
    <text x="20" y="165" fill="#94a3b8" font-size="9">Input: Parse Tree</text>
    <text x="20" y="185" fill="#facc15" font-size="9">Output: Validated</text>
    <text x="20" y="200" fill="#facc15" font-size="9">Query Tree</text>
  </g>

  <!-- Arrow 2 to 3 -->
  <path d="M 355 160 L 370 160" stroke="#a855f7" stroke-width="2" />

  <!-- Stage 3: Planner / Optimizer -->
  <g transform="translate(375, 30)">
    <rect width="165" height="260" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
    <rect width="165" height="32" rx="8" fill="#7e22ce" />
    <text x="82" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. OPTIMIZER (CBO)</text>
    <text x="15" y="55" fill="#c084fc" font-size="10" font-weight="bold">The Brain of RDBMS:</text>
    <text x="15" y="75" fill="#cbd5e1" font-size="9">• Evaluates access paths</text>
    <text x="15" y="93" fill="#cbd5e1" font-size="9">• Reads table statistics</text>
    <text x="15" y="111" fill="#cbd5e1" font-size="9">• Picks lowest I/O cost</text>
    <rect x="12" y="145" width="141" height="70" rx="4" fill="#0f172a" stroke="#475569" />
    <text x="20" y="165" fill="#94a3b8" font-size="9">Input: Query Tree</text>
    <text x="20" y="185" fill="#4ade80" font-size="9">Output: Physical</text>
    <text x="20" y="200" fill="#4ade80" font-size="9">Execution Plan</text>
  </g>

  <!-- Arrow 3 to 4 -->
  <path d="M 545 160 L 560 160" stroke="#10b981" stroke-width="2" />

  <!-- Stage 4: Executor -->
  <g transform="translate(565, 30)">
    <rect width="150" height="260" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="150" height="32" rx="8" fill="#059669" />
    <text x="75" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4. EXECUTOR</text>
    <text x="15" y="55" fill="#34d399" font-size="10" font-weight="bold">Volcano Iterator:</text>
    <text x="15" y="75" fill="#cbd5e1" font-size="9">• Traverses plan tree</text>
    <text x="15" y="93" fill="#cbd5e1" font-size="9">• Pulls disk pages</text>
    <text x="15" y="111" fill="#cbd5e1" font-size="9">• Streams result rows</text>
    <rect x="12" y="145" width="126" height="70" rx="4" fill="#0f172a" stroke="#475569" />
    <text x="20" y="165" fill="#94a3b8" font-size="9">Input: Plan Tree</text>
    <text x="20" y="185" fill="#38bdf8" font-size="9">Output: Client</text>
    <text x="20" y="200" fill="#38bdf8" font-size="9">Result Tuples</text>
  </g>
</svg>`,
      caption: {
        en: 'The 4-stage query engine pipeline: Parser converts SQL text into AST, Rewriter validates semantics, Optimizer calculates lowest-cost physical plan, and Executor streams tuples.',
        bn: '৪-ধাপের কোয়েরি ইঞ্জিন পাইপলাইন: পার্সার SQL টেক্সটকে AST-তে রূপান্তর করে, রিরাইটার বৈধতা পরীক্ষা করে, অপ্টিমাইজার সর্বনিম্ন খরচের প্ল্যান বেছে নেয় এবং এক্সিকিউটর ফলাফল সরবরাহ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Parse Tree (AST)',
          def: {
            en: 'The hierarchical syntactic representation of a SQL statement constructed by the parser after lexical validation.',
            bn: 'সিনট্যাক্স ও ব্যাকরণ পরীক্ষার পর পার্সার দ্বারা তৈরি SQL স্টেটমেন্টের একটি কাঠামোগত ট্রি রূপ।'
          }
        },
        {
          term: 'Query Rewriter',
          def: {
            en: 'The database subsystem that expands views, rewrites subqueries, and validates semantic permissions against system catalogs.',
            bn: 'ডাটাবেস সাবসিস্টেম যা ভিউ সম্প্রসারণ করে, সাব-কোয়েরি সহজ করে এবং সিস্টেম ক্যাটালগ দিয়ে অনুমতি ও কলামের নাম যাচাই করে।'
          }
        },
        {
          term: 'Cost-Based Optimizer (CBO)',
          def: {
            en: 'The query engine component that analyzes table statistics to generate and choose the lowest-cost physical execution plan.',
            bn: 'কোয়েরি ইঞ্জিনের মূল বুদ্ধিমত্তা অংশ যা স্ট্যাটিস্টিকস বিশ্লেষণ করে সবচেয়ে কম খরচের ফিজিক্যাল এক্সিকিউশন প্ল্যান নির্বাচন করে।'
          }
        },
        {
          term: 'Volcano Iterator Model',
          def: {
            en: 'A demand-driven execution architecture where operator nodes pull tuples from children on demand using open(), next(), and close() interfaces.',
            bn: 'একটি চাহিদানির্ভর এক্সিকিউশন মডেল যেখানে প্যারেন্ট নোড open(), next(), এবং close() ফাংশন দিয়ে চাইল্ড নোড থেকে এক এক করে রো টেনে নেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'execution-trees-and-operator-nodes',
      text: {
        en: 'The Volcano Model: Demand-Driven Tuple Streaming',
        bn: 'ভলকানো মডেল: চাহিদানির্ভর টাপল স্ট্রিমিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Relational database executors do not materialize entire intermediate tables in memory all at once. Instead, virtually all modern engines (including PostgreSQL, MySQL, and SQLite) implement the Volcano Iterator Model. Queries execute as a tree of operator nodes, where each node exposes a simple interface: open(), next(), and close().',
        bn: 'রিলেশনাল ডাটাবেস এক্সিকিউটররা মেমরির ভেতরে একবারে পুরো মধ্যবর্তী টেবিল জমা করে ফেলে না। এর বদলে PostgreSQL, MySQL এবং SQLite-এর মতো আধুনিক ইঞ্জিনগুলো ভলকানো ইটারেটর মডেল ব্যবহার করে। কোয়েরিগুলো বিভিন্ন অপারেটর নোডের একটি ট্রি হিসেবে চলে, যেখানে প্রতিটি নোড কেবল তিনটি সহজ ফাংশন প্রদান করে: open(), next(), এবং close()।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Execution is entirely demand-driven. The root node (for instance, a LIMIT 5 operator) calls next() on its child Sort node. The Sort node calls next() on an Index Scan node. When the root node accumulates its required 5 matching rows, it stops calling next() immediately. This streaming pipeline prevents allocating gigabytes of RAM for queries with small result limits.',
        bn: 'এই এক্সিকিউশন প্রক্রিয়াটি পুরোপুরি চাহিদানির্ভর। রুট নোড (যেমন LIMIT 5) তার চাইল্ড Sort নোডের next() কল করে। Sort নোড তার নিচের Index Scan নোডের next() কল করে। রুট নোড যখন তার প্রয়োজনীয় ৫টি ম্যাচিং রো পেয়ে যায়, তখন সে সাথে সাথেই next() কল করা বন্ধ করে দেয়। এই স্ট্রিমিং পাইপলাইনের কারণেই ছোট লিমিটের কোয়েরির জন্য মেমরিতে গিগাবাইট গিগাবাইট জায়গা নষ্ট হয় না।'
      }
    },
    {
      type: 'heading',
      id: 'node-query-lifecycle-engine',
      text: {
        en: 'Executable Query Processing Pipeline Simulator',
        bn: 'রানযোগ্য কোয়েরি প্রসেসিং পাইপলাইন সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine simulating the 4 internal stages of query processing on a users table. The Optimizer compares candidate costs, selecting an Index Seek (cost 15) over a full Seq Scan (cost 120). The Executor then runs a Volcano iterator pipeline, returning exactly 5 filtered tuples.',
        bn: 'নিচে একটি users টেবিলে কোয়েরি প্রসেসিংয়ের ৪টি অভ্যন্তরীণ ধাপ পরিচালনাকারী সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। অপ্টিমাইজার সম্ভাব্য খরচ তুলনা করে ফুল সিকোয়েনশিয়াল স্ক্যানের (১২০ খরচ) বদলে ইনডেক্স সিক (১৫ খরচ) বেছে নেয়। এরপর এক্সিকিউটর ভলকানো ইটারেটর চালিয়ে ঠিক ৫টি ফিল্টার্ড রেকর্ড ফেরত দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Query execution pipeline simulator demonstrating parsing, cost optimization, and Volcano iterator streaming',
        bn: 'পার্সিং, কস্ট অপ্টিমাইজেশন এবং ভলকানো ইটারেটর স্ট্রিমিং প্রদর্শনকারী কোয়েরি এক্সিকিউশন পাইপলাইন সিমুলেটর'
      },
      code: `// Relational Query Processing Engine Simulator
const rawQuery = 'SELECT name FROM users WHERE age > 25 ORDER BY id LIMIT 5;';

// Stage 1: Parser constructs AST
const syntaxTree = { type: 'SELECT', table: 'users', filterCol: 'age', minAge: 25, limit: 5 };

// Stage 2: Rewriter validates table metadata
const isMetadataValid = syntaxTree.table === 'users';

// Stage 3: Cost-Based Optimizer (CBO) evaluates candidate physical plans
const costSeqScan = 120; // Full table scan + memory quicksort
const costIndexSeek = 15; // B-Tree pre-sorted index traversal
const selectedPlan = costIndexSeek < costSeqScan ? 'Index Seek' : 'Seq Scan';

// Stage 4: Executor implements the Volcano Iterator Model
const databaseHeap = [];
for (let i = 1; i <= 1000; i++) {
  databaseHeap.push({ id: i, name: 'User ' + i, age: 20 + (i % 30) });
}

// Demand-driven iterator pipeline (pulled on demand)
const resultTuples = [];
for (const row of databaseHeap) {
  if (row.age > syntaxTree.minAge) {
    resultTuples.push(row);
    if (resultTuples.length === syntaxTree.limit) {
      break; // Volcano root halts execution immediately!
    }
  }
}

const isAccurate = isMetadataValid && selectedPlan === 'Index Seek' && resultTuples.length === 5;

console.log(\`[Query Lifecycle] Processed query through 4 engine stages (Parser, Rewriter, Optimizer, Executor).\`);
console.log(\`[Optimizer Decision] Compared candidate costs: chose \${selectedPlan} (cost \${costIndexSeek}) over Seq Scan (cost \${costSeqScan}).\`);
console.log(\`[Executor Output] Volcano iterator successfully emitted \${resultTuples.length} filtered tuples (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Why Prepared Statements Skip Stages 1 and 2',
        bn: 'প্রিপেয়ার্ড স্টেটমেন্ট কেন ধাপ ১ এবং ২ এড়িয়ে যায়'
      },
      text: {
        en: 'When applications execute PREPARE query_name AS SELECT ..., the database runs the Parser and Rewriter once and stores the compiled query tree in memory. Subsequent executions using EXECUTE query_name(param) skip parsing completely, reducing CPU overhead and providing absolute protection against SQL injection attacks.',
        bn: 'অ্যাপ্লিকেশন যখন PREPARE query_name AS SELECT ... চালায়, ডাটাবেস পার্সার এবং রিরাইটার ধাপগুলো একবার চালিয়ে মেমরিতে সংরক্ষিত রাখে। পরবর্তীতে যখন EXECUTE চালানো হয়, ডাটাবেস পার্সিং ধাপটি পুরোপুরি এড়িয়ে যায়, যা সিপিইউ খরচ বাঁচায় এবং SQL ইনজেকশনের বিরুদ্ধে শতভাগ সুরক্ষা প্রদান করে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Query Subsystem Identifier',
        bn: 'কোয়েরি সাবসিস্টেম সনাক্তকারী'
      },
      description: {
        en: 'Identify which database subsystem is responsible for handling a specific query compilation task.',
        bn: 'সুনির্দিষ্ট কোয়েরি প্রসেসিং কাজের জন্য ডাটাবেসের কোন সাবসিস্টেমটি দায়ী তা সনাক্ত করুন।'
      },
      code: `function identifySubsystem(taskDescription) {
  if (taskDescription === 'SYNTAX_GRAMMAR_CHECK') return 'STAGE_1_PARSER';
  if (taskDescription === 'RESOLVE_VIEW_RLS') return 'STAGE_2_REWRITER';
  if (taskDescription === 'CHOOSE_LOWEST_IO_COST') return 'STAGE_3_OPTIMIZER';
  return 'STAGE_4_EXECUTOR';
}

console.log('Grammar Check:', identifySubsystem('SYNTAX_GRAMMAR_CHECK'));
console.log('Pick Best Plan:', identifySubsystem('CHOOSE_LOWEST_IO_COST'));`,
      tests: [
        {
          name: {
            en: 'Identifies grammar check belonging to Parser',
            bn: 'ব্যাকরণ পরীক্ষাকে পার্সারের কাজ হিসেবে সনাক্ত করে'
          },
          expected: 'Grammar Check: STAGE_1_PARSER'
        },
        {
          name: {
            en: 'Identifies plan selection belonging to Optimizer',
            bn: 'প্ল্যান নির্বাচনকে অপ্টিমাইজারের কাজ হিসেবে সনাক্ত করে'
          },
          expected: 'Pick Best Plan: STAGE_3_OPTIMIZER'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'qo-pln-ex-1',
      kind: 'mcq',
      topic: 'four-stages-of-query-lifecycle',
      question: {
        en: 'In relational database theory, what are the four sequential stages of internal query processing from raw SQL text to result tuples?',
        bn: 'রিলেশনাল ডাটাবেস তত্ত্বে কাঁচা SQL টেক্সট থেকে চূড়ান্ত ফলাফল তৈরি পর্যন্ত অভ্যন্তরীণ কোয়েরি প্রসেসিংয়ের ৪টি ধারাবাহিক ধাপ কী কী?'
      },
      options: [
        {
          en: '1. Parser (syntax check), 2. Rewriter (semantic check & views), 3. Optimizer / Planner (cost calculation), 4. Executor (Volcano iterator execution)',
          bn: '১. পার্সার (সিনট্যাক্স পরীক্ষা), ২. রিরাইটার (ভিউ ও সেমান্টিক পরীক্ষা), ৩. অপ্টিমাইজার/প্ল্যানার (খরচ হিসাব), ৪. এক্সিকিউটর (ভলকানো ইটারেটর এক্সিকিউশন)'
        },
        {
          en: '1. Download, 2. Compress, 3. Encrypt, 4. Email to client',
          bn: '১. ডাউনলোড, ২. কমপ্রেস, ৩. এনক্রিপ্ট, ৪. ক্লায়েন্টকে ইমেইল পাঠানো'
        },
        {
          en: '1. Turn on monitor, 2. Type password, 3. Restart computer, 4. Close lid',
          bn: '১. মনিটর অন করা, ২. পাসওয়ার্ড টাইপ করা, ৩. কম্পিউটার রিস্টার্ট করা, ৪. ঢাকনা বন্ধ করা'
        },
        {
          en: '1. Audio recording, 2. Sound equalization, 3. Radio broadcast, 4. Deletion',
          bn: '১. অডিও রেকর্ডিং, ২. সাউন্ড ইকুয়ালাইজেশন, ৩. রেডিও সম্প্রচার, ৪. মুছে ফেলা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Parser checks syntax, Rewriter checks rules, Optimizer calculates cost, Executor runs the plan.',
        bn: 'পার্সার সিনট্যাক্স দেখে, রিরাইটার নিয়ম দেখে, অপ্টিমাইজার খরচ হিসাব করে, এক্সিকিউটর প্ল্যান চালায়।'
      },
      explanation: {
        en: 'Every relational engine processes SQL sequentially through Parser -> Rewriter -> Planner/Optimizer -> Executor.',
        bn: 'প্রতিটি রিলেশনাল ইঞ্জিন পর্যায়ক্রমে পার্সার -> রিরাইটার -> প্ল্যানার/অপ্টিমাইজার -> এক্সিকিউটরের মধ্য দিয়ে কোয়েরি পরিচালনা করে।'
      }
    },
    {
      id: 'qo-pln-ex-2',
      kind: 'mcq',
      topic: 'volcano-iterator-open-next-close',
      question: {
        en: 'How does the Volcano Iterator Model operate during query execution inside database storage engines?',
        bn: 'ডাটাবেস স্টোরেজ ইঞ্জিনের ভেতরে কোয়েরি এক্সিকিউশনের সময় ভলকানো ইটারেটর মডেল কীভাবে কাজ করে?'
      },
      options: [
        {
          en: 'Execution plan nodes are arranged as an operator tree where each node provides open(), next(), and close() interfaces, pulling tuples on demand up the pipeline',
          bn: 'প্ল্যানের নোডগুলো একটি ট্রির মতো সাজানো থাকে যেখানে প্রতিটি নোড open(), next(), এবং close() ফাংশনের মাধ্যমে চাহিদানির্ভর পদ্ধতিতে নিচ থেকে উপরে এক এক করে ডাটা টেনে নেয়'
        },
        {
          en: 'The database heats up the physical server processor until lava erupts',
          bn: 'লাভা উদগীরণ না হওয়া পর্যন্ত ডাটাবেস সার্ভারের প্রসেসর উত্তপ্ত হতে থাকে'
        },
        {
          en: 'It prints all table rows onto thermal paper rolls',
          bn: 'এটি কাগজের রোলের ওপর টেবিলের সমস্ত ডাটা প্রিন্ট করে ফেলে'
        },
        {
          en: 'It deletes all rows that do not match the database administrator\'s favorite number',
          bn: 'এটি অ্যাডমিনিস্ট্রেটরের পছন্দের সংখ্যার সাথে না মেলা সমস্ত রো মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Volcano model streams tuples one at a time on demand using next() calls.',
        bn: 'ভলকানো মডেল next() কলের মাধ্যমে একবারে একটি করে ডাটা স্ট্রিমিং পদ্ধতিতে সংগ্রহ করে।'
      },
      explanation: {
        en: 'The iterator model enables pipelined execution. Nodes stream tuples upward without needing to materialize full tables in memory, stopping immediately when limits are satisfied.',
        bn: 'ইটারেটর মডেল মেমরিতে পুরো টেবিল লোড না করেই স্ট্রিমিং পদ্ধতিতে কাজ চালায় এবং প্রয়োজনীয় লিমিট পূরণ হলে সাথে সাথে থেমে যায়।'
      }
    },
    {
      id: 'qo-pln-ex-3',
      kind: 'mcq',
      topic: 'prepared-statement-performance-mechanism',
      question: {
        en: 'Why do Prepared Statements execute measurably faster than repeated ad-hoc raw SQL queries in high-throughput database systems?',
        bn: 'উচ্চগতির ডাটাবেস সিস্টেমে প্রিপেয়ার্ড স্টেটমেন্ট কেন বারবার পাঠানো সাধারণ কাঁচা SQL কোয়েরির চেয়ে পরিমাপযোগ্যভাবে দ্রুত গতিতে সম্পন্ন হয়?'
      },
      options: [
        {
          en: 'The database parses and rewrites the SQL text once during PREPARE; subsequent executions bypass the Parser and Rewriter stages completely, executing the cached plan directly',
          bn: 'ডাটাবেস PREPARE-এর সময় একবারই SQL পার্স ও রিরাইট করে; ফলে পরবর্তী সমস্ত রিকোয়েস্টে পার্সার ও রিরাইটার ধাপ এড়িয়ে সরাসরি প্রস্তুতকৃত প্ল্যান কার্যকর হয়'
        },
        {
          en: 'Prepared statements disconnect the database from all security firewalls',
          bn: 'প্রিপেয়ার্ড স্টেটমেন্ট সমস্ত সিকিউরিটি ফায়ারওয়াল থেকে ডাটাবেস বিচ্ছিন্ন করে দেয়'
        },
        {
          en: 'Because prepared statements only work with single-digit numbers',
          bn: 'কারণ প্রিপেয়ার্ড স্টেটমেন্ট কেবল এক অঙ্কের সংখ্যা নিয়ে কাজ করে'
        },
        {
          en: 'Because prepared statements are executed directly inside satellite orbits',
          bn: 'কারণ প্রিপেয়ার্ড স্টেটমেন্ট সরাসরি মহাকাশের স্যাটেলাইটে চালিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Prepared statements save CPU cycles by reusing parsed query trees across executions.',
        bn: 'প্রিপেয়ার্ড স্টেটমেন্ট পার্স করা কুয়েরি ট্রি বারবার ব্যবহার করে সিপিইউ খরচ বাঁচায়।'
      },
      explanation: {
        en: 'Parsing complex SQL with joins and subqueries consumes CPU. Prepared statements perform syntax analysis once, allowing thousands of executions to jump straight to execution.',
        bn: 'জটিল SQL পার্স করতে প্রচুর সিপিইউ খরচ হয়। প্রিপেয়ার্ড স্টেটমেন্ট একবারই পার্স করে পরবর্তীতে সরাসরি এক্সিকিউশনে চলে যায়।'
      }
    },
    {
      id: 'qo-pln-ex-4',
      kind: 'mcq',
      topic: 'query-rewriter-role-views',
      question: {
        en: 'What primary architectural responsibility does the Query Rewriter perform when you query a SQL VIEW (e.g. SELECT * FROM active_customers;)?',
        bn: 'আপনি যখন কোনো SQL ভিউ কোয়েরি করেন (যেমন SELECT * FROM active_customers;), তখন কোয়েরি রিরাইটার মূলত কোন প্রযুক্তিগত দায়িত্বটি পালন করে?'
      },
      options: [
        {
          en: 'It expands the view definition by substituting the underlying base table queries and filters into the parse tree, creating a unified query tree for the optimizer',
          bn: 'এটি ভিউ-এর মূল ভিত্তি টেবিলের কোয়েরি এবং ফিল্টারগুলোকে পার্স ট্রিতে প্রতিস্থাপন করে অপ্টিমাইজারের জন্য একটি সমন্বিত কোয়েরি ট্রি প্রস্তুত করে'
        },
        {
          en: 'It deletes the underlying tables and replaces them with text files',
          bn: 'এটি মূল টেবিল মুছে ফেলে তার বদলে টেক্সট ফাইল বসিয়ে দেয়'
        },
        {
          en: 'It translates the SQL query into French poetry',
          bn: 'এটি SQL কোয়েরিকে ফরাসি কবিতায় রূপান্তর করে'
        },
        {
          en: 'It converts numbers into Roman numerals',
          bn: 'এটি সমস্ত সংখ্যাকে রোমান সংখ্যায় রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Rewriter expands views inline so the Optimizer can optimize the combined query.',
        bn: 'রিরাইটার ভিউ-এর কোড ইনলাইন সম্প্রসারণ করে যাতে অপ্টিমাইজার পুরো কোয়েরিটি একসাথে অপ্টিমাইজ করতে পারে।'
      },
      explanation: {
        en: 'Views are logical abstractions. The rewriter replaces the view reference with its underlying SQL definition, enabling the optimizer to push predicates down into base table scans.',
        bn: 'ভিউ হলো একটি ভার্চুয়াল ধারণা। রিরাইটার ভিউ-এর ভেতরের মূল SQL বসিয়ে দেয়, যাতে অপ্টিমাইজার শর্তগুলোকে মূল টেবিলের স্ক্যানে সরাসরি প্রয়োগ করতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'plans-and-the-plan-quiz',
    title: {
      en: 'Query Lifecycle & Execution Plans Assessment Quiz',
      bn: 'কোয়েরি জীবনচক্র ও এক্সিকিউশন প্ল্যান মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'qo-pln-qz-1',
        kind: 'mcq',
        topic: 'declarative-sql-vs-imperative-engine',
        question: {
          en: 'Why does a relational database require a Cost-Based Optimizer while imperative programming languages (like C or Go) do not?',
          bn: 'রিলেশনাল ডাটাবেসে কেন একটি কস্ট-বেসড অপ্টিমাইজার প্রয়োজন হয় অথচ সি বা গো-এর মতো নির্দেশনামূলক ভাষায় তা লাগে না?'
        },
        options: [
          {
            en: 'SQL is declarative (specifying WHAT data is needed, not HOW to retrieve it); the optimizer must determine the optimal physical access algorithms among dozens of mathematical combinations',
            bn: 'SQL হলো ডিক্লারেটিভ (কী ডাটা দরকার তা বলে, কীভাবে ডিস্ক থেকে তুলতে হবে তা নয়); তাই অপ্টিমাইজারকে সম্ভাব্য ডজনখানেক উপায়ের মধ্যে সেরা ফিজিক্যাল অ্যালগরিদম বেছে নিতে হয়'
          },
          {
            en: 'Because SQL database servers run on electricity while C programs run on steam power',
            bn: 'কারণ SQL সার্ভার বিদ্যুতে চলে আর সি প্রোগ্রাম বাষ্পীয় শক্তিতে চলে'
          },
          {
            en: 'Because C compilers are forbidden from using mathematics',
            bn: 'কারণ সি কম্পাইলারে গণিত ব্যবহার করা আইনত নিষিদ্ধ'
          },
          {
            en: 'Because databases cannot store text strings without an optimizer',
            bn: 'কারণ অপ্টিমাইজার ছাড়া ডাটাবেস টেক্সট স্ট্রিং সেভ করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Declarative queries leave execution strategies entirely to the database optimizer.',
          bn: 'ডিক্লারেটিভ কোয়েরিতে ডাটা সংগ্রহের পদ্ধতি নির্ধারণের ভার পুরোপুরি অপ্টিমাইজারের ওপর থাকে।'
        },
        explanation: {
          en: 'In imperative code, the programmer writes explicit loops and pointers. In SQL, the developer writes a declarative statement; the CBO evaluates indexes, join algorithms, and costs to build the physical loops.',
          bn: 'সাধারণ কোডে প্রোগ্রামার নিজ হাতে লুপ লেখেন। SQL-এ ডেভেলপার কেবল শর্ত দেন; অপ্টিমাইজার নিজে হিসাব করে সবচেয়ে দ্রুতগতির ফিজিক্যাল লুপ তৈরি করে নেয়।'
        }
      },
      {
        id: 'qo-pln-qz-2',
        kind: 'mcq',
        topic: 'optimizer-search-space-complexity',
        question: {
          en: 'When a SQL query contains a 12-table JOIN, why does the Cost-Based Optimizer switch to Genetic Query Optimization (GEQO) or heuristic search instead of exhaustive planning?',
          bn: 'একটি SQL কোয়েরিতে যখন ১২টি টেবিলের JOIN থাকে, তখন কস্ট-বেসড অপ্টিমাইজার সমস্ত সম্ভাব্য পথ পরীক্ষার বদলে কেন জেনেটিক কোয়েরি অপ্টিমাইজেশন (GEQO) বেছে নেয়?'
        },
        options: [
          {
            en: 'The combinatorial search space of join orderings grows factorially (N!), meaning an exhaustive search would take hours of CPU planning time for a single query',
            bn: 'টেবিল জয়েনের সম্ভাব্য ক্রমের সংখ্যা ফ্যাক্টোরিয়াল (N!) হারে বৃদ্ধি পায়, ফলে সমস্ত পথ পরীক্ষা করতে গেলে একটিমাত্র কোয়েরির প্ল্যান করতেই ঘণ্টার পর ঘণ্টা সিপিইউ সময় লেগে যাবে'
          },
          {
            en: 'Because 12 is an unlucky number in computer programming',
            bn: 'কারণ কম্পিউটার প্রোগ্রামিংয়ে ১২ সংখ্যাটিকে অপয়া ধরা হয়'
          },
          {
            en: 'Because tables with 12 joins automatically turn into video games',
            bn: 'কারণ ১২টি জয়েন থাকা টেবিল নিজে থেকেই ভিডিও গেমে পরিণত হয়'
          },
          {
            en: 'Because genetic algorithms make the computer speak out loud in Bengali',
            bn: 'কারণ জেনেটিক অ্যালগরিদম কম্পিউটারকে বাংলায় কথা বলায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'A join across 12 tables produces 479000000 candidate join trees; exhaustive search explodes.',
          bn: '১২টি টেবিলের জয়েনে ৪৭৯০০০০০০টি সম্ভাব্য পথ তৈরি হয়; সমস্ত পথ পরীক্ষা করা অসম্ভব।'
        },
        explanation: {
          en: 'Evaluating all join permutations for large queries is computationally prohibitive. Databases switch to genetic or heuristic algorithms (GEQO in Postgres) to find a near-optimal plan in milliseconds.',
          bn: 'বিশাল জয়েনের تمام পথ পরীক্ষা করা অসম্ভব। ডাটাবেস জেনেটিক বা হিউরিস্টিক অ্যালগরিদম ব্যবহার করে চোখের পলকে একটি চমৎকার প্ল্যান বের করে নেয়।'
        }
      },
      {
        id: 'qo-pln-qz-3',
        kind: 'mcq',
        topic: 'plan-cache-invalidation-triggers',
        question: {
          en: 'What database event causes an engine to invalidate cached query execution plans and re-plan from scratch?',
          bn: 'কোন ডাটাবেস ঘটনার কারণে ইঞ্জিন ক্যাশ করা এক্সিকিউশন প্ল্যান বাতিল করে একদম শুরু থেকে নতুন প্ল্যান তৈরি করতে বাধ্য হয়?'
        },
        options: [
          {
            en: 'DDL schema alterations (such as adding an index or dropping a column) or running ANALYZE to refresh catalog statistics',
            bn: 'DDL স্কিমা পরিবর্তন (যেমন নতুন ইনডেক্স যোগ করা বা কলাম মুছে ফেলা) অথবা ANALYZE চালিয়ে ক্যাটালগ স্ট্যাটিস্টিকস রিফ্রেশ করা'
          },
          {
            en: 'The user moving their computer mouse cursor across the screen',
            bn: 'ব্যবহারকারী তার কম্পিউটার মাউস স্ক্রিনের এক প্রান্ত থেকে অন্য প্রান্তে নাড়ালে'
          },
          {
            en: 'Whenever the database server fan changes speeds',
            bn: 'যখনই ডাটাবেস সার্ভার ফ্যানের গতিবেগ পরিবর্তিত হয়'
          },
          {
            en: 'Plans are never invalidated; once created they remain cached forever',
            bn: 'প্ল্যান কখনো বাতিল হয় না; একবার তৈরি হলে তা চিরকালের জন্য থেকে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Schema modifications and updated statistics invalidate cached plans.',
          bn: 'স্কিমা পরিবর্তন এবং নতুন স্ট্যাটিস্টিকস পুরানো প্ল্যানকে বাতিল করে দেয়।'
        },
        explanation: {
          en: 'If a new index is created or table stats change significantly, the cached plan may no longer be optimal. The engine invalidates cached plans so the CBO can pick the newly available faster paths.',
          bn: 'নতুন ইনডেক্স তৈরি হলে বা ডাটার পরিমাণ অনেক বদলে গেলে পুরানো প্ল্যান আর কার্যকর থাকে না। ইঞ্জিন সাথে সাথে পুরানো প্ল্যান বাতিল করে নতুন সেরা পথ খুঁজে নেয়।'
        }
      },
      {
        id: 'qo-pln-qz-4',
        kind: 'mcq',
        topic: 'execution-plan-tree-traversal-order',
        question: {
          en: 'When reading a visual execution plan tree (such as generated by EXPLAIN), in what order do database operator nodes physically execute?',
          bn: 'একটি এক্সিকিউশন প্ল্যান ট্রি পড়ার সময় (যেমন EXPLAIN দ্বারা তৈরি) ডাটাবেস অপারেটর নোডগুলো শারীরিকভাবে কোন ক্রমে কার্যকর হয়?'
        },
        options: [
          {
            en: 'From the bottom-most leaf nodes (the innermost table scans) upward to the root operator node (the outermost sort or limit)',
            bn: 'সবার নিচের লিফ নোডগুলো (ভেতরের টেবিল স্ক্যান) থেকে শুরু হয়ে পর্যায়ক্রমে উপরের রুট নোড (বাইরের সর্ট বা লিমিট) পর্যন্ত'
          },
          {
            en: 'From the top root node down to the bottom, deleting data along the way',
            bn: 'উপরের রুট নোড থেকে নিচের দিকে সমস্ত ডাটা মুছে ফেলতে ফেলতে'
          },
          {
            en: 'From left to right in pure alphabetical order',
            bn: 'বাম থেকে ডানে কেবল বর্ণানুক্রমিক ক্রমে'
          },
          {
            en: 'Nodes execute completely at random without any parent-child relationship',
            bn: 'কোনো নিয়ম ছাড়াই নোডগুলো সম্পূর্ণ এলোমেলোভাবে চালিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Leaves scan data first and feed tuples upward to joins and sorts.',
          bn: 'নিচের লিফ নোডগুলো প্রথমে ডাটা স্ক্যান করে উপরে জয়েন ও সর্টের দিকে পাঠায়।'
        },
        explanation: {
          en: 'Plan trees are read from inside-out and bottom-up. Leaf nodes (Seq Scan, Index Scan) access raw pages and push records up to joins, aggregates, and limits.',
          bn: 'এক্সিকিউশন ট্রি ভেতর থেকে বাইরে এবং নিচ থেকে উপরে পড়তে হয়। নিচের নোডগুলো পেজ পড়ে ডাটা উপরে পাঠায় এবং উপরের নোডগুলো ফিল্টার, জয়েন ও লিমিট সম্পন্ন করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'costs-and-the-cost',
    title: {
      en: 'Cost Models & Estimation: Startup Cost vs Total Cost',
      bn: 'কস্ট মডেল ও হিসাব: স্টার্টআপ কস্ট বনাম মোট কস্ট'
    }
  }
};
