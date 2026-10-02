import type { Lesson } from '../../../lib/types';

export const SelectsAndTheRowLesson: Lesson = {
  slug: 'selects-and-the-row',
  tech: 'sqlite',
  title: {
    en: 'Querying & Filtering Engine: SELECT, WHERE, ORDER BY & JSON',
    bn: 'কোয়েরি ও ফিল্টারিং ইঞ্জিন: SELECT, WHERE, ORDER BY ও JSON'
  },
  summary: {
    en: 'Master querying and retrieving data in SQLite. Learn projection syntax, WHERE filtering predicates, pattern matching with LIKE and GLOB, aggregation with GROUP BY and HAVING, pagination, and built-in JSON1 functions.',
    bn: 'SQLite-এ ডাটা কোয়েরি ও ফিল্টারিং গভীরভাবে আয়ত্ত করুন। প্রজেকশন সিনট্যাক্স, WHERE ফিল্টার শর্ত, LIKE ও GLOB প্যাটার্ন ম্যাচিং, GROUP BY ও HAVING দিয়ে সমষ্টিকরণ, পেজিনেশন এবং বিল্ট-ইন JSON1 ফাংশন ব্যবহারের সম্পূর্ণ নির্দেশিকা।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'select-projection',
      text: {
        en: 'The SELECT Projection Pipeline and Hidden rowid Column',
        bn: 'SELECT প্রজেকশন পাইপলাইন ও অদৃশ্য rowid কলাম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you query data from SQLite (the embedded database engine), the SELECT statement serves as the primary engine for retrieving, projecting, and transforming table records. Whether you are building an offline mobile application or an edge API, understanding how the query engine processes filter conditions and aggregates is essential for writing fast applications.',
        bn: 'যখন আপনি SQLite (এমবেডেড ডাটাবেস ইঞ্জিন) থেকে তথ্য অনুসন্ধান করেন, SELECT স্টেটমেন্টটি টেবিল থেকে ডাটা উদ্ধার, প্রজেক্ট এবং রূপান্তরের প্রধান ইঞ্জিন হিসেবে কাজ করে। আপনি অফলাইন মোবাইল অ্যাপ্লিকেশন তৈরি করুন বা কোনো আধুনিক এজ এপিআই তৈরি করুন, দ্রুতগতির সফটওয়্যার লেখার জন্য কোয়েরি ইঞ্জিন কীভাবে শর্ত ফিল্টার করে তা জানা আবশ্যক।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In SQLite, every standard table automatically includes a hidden 64-bit signed integer primary key known as rowid. You can query this column explicitly using rowid, oid, or _rowid_ even if you did not declare it in your CREATE TABLE statement.',
        bn: 'SQLite-এর প্রতিটি সাধারণ টেবিলে স্বয়ংক্রিয়ভাবে একটি লুকানো ৬৪-বিট পূর্ণসংখ্যা প্রাইমারি কি যুক্ত থাকে যাকে rowid বলা হয়। টেবিলে আলাদা করে ঘোষণা না করলেও আপনি সরাসরি rowid, oid বা _rowid_ লিখে এই কলামটি দেখতে পারেন।'
      }
    },
    {
      type: 'diagram',
      id: 'sqlite-query-pipeline-diagram',
      caption: {
        en: 'Figure 1: SQLite SELECT query evaluation pipeline — from SQL text to VDBE bytecodes and JSON1 extraction.',
        bn: 'চিত্র ১: SQLite SELECT কোয়েরি মূল্যায়ন পাইপলাইন — এসকিউএল টেক্সট থেকে VDBE বাইটকোড ও JSON1 এক্সট্রাকশন।'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="selHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
    <linearGradient id="queryGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="jsonGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#selHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">🔎</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">SQLITE SELECT QUERY &amp; FILTERING PIPELINE</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">Hidden rowid index, LIKE vs GLOB pattern matching, and built-in JSON arrow operators</text>

  <!-- Left: Filtering Operators -->
  <rect x="24" y="90" width="440" height="370" rx="10" fill="url(#queryGrad)" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="44" y="118" fill="#38bdf8" font-size="13" font-weight="bold">FILTERING &amp; PATTERN MATCHING RULES</text>

  <!-- Like vs Glob -->
  <rect x="44" y="136" width="400" height="95" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="158" fill="#f59e0b" font-size="11" font-weight="bold">1. LIKE vs GLOB Comparison:</text>
  <text x="56" y="176" fill="#cbd5e1" font-size="10">• LIKE: Case-insensitive; % (any chars), _ (single char)</text>
  <text x="56" y="194" fill="#cbd5e1" font-size="10">• GLOB: Case-sensitive Unix style; * (any), ? (single char)</text>
  <text x="56" y="212" fill="#34d399" font-size="10">• GLOB '[A-Z]*' uses B-Tree index; LIKE requires NOCASE index.</text>

  <!-- Aggregation TOTAL -->
  <rect x="44" y="242" width="400" height="95" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="264" fill="#10b981" font-size="11" font-weight="bold">2. Aggregations: SUM() vs TOTAL():</text>
  <text x="56" y="282" fill="#cbd5e1" font-size="10">• Standard SUM(score): Returns NULL if 0 matching rows exist.</text>
  <text x="56" y="300" fill="#cbd5e1" font-size="10">• SQLite TOTAL(score): Always returns floating-point 0.0!</text>
  <text x="56" y="318" fill="#34d399" font-size="10">• Prevents NULL propagation bugs in financial calculation queries.</text>

  <!-- Rowid Seek -->
  <rect x="44" y="348" width="400" height="95" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="370" fill="#c084fc" font-size="11" font-weight="bold">3. 64-bit Integer rowid Lookup:</text>
  <text x="56" y="388" fill="#cbd5e1" font-size="10">• SELECT * FROM users WHERE rowid = 42;</text>
  <text x="56" y="406" fill="#cbd5e1" font-size="10">• Fastest possible query in SQLite: Direct B-Tree primary key seek.</text>
  <text x="56" y="424" fill="#38bdf8" font-size="10">• Finishes in sub-microsecond time with 0 table scan overhead.</text>

  <!-- Right: Modern JSON1 Support -->
  <rect x="496" y="90" width="440" height="370" rx="10" fill="url(#jsonGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="516" y="118" fill="#34d399" font-size="13" font-weight="bold">FIRST-CLASS JSON1 QUERY OPERATORS</text>

  <rect x="516" y="136" width="400" height="135" rx="6" fill="#030712" stroke="#047857"/>
  <text x="528" y="158" fill="#6ee7b7" font-size="11" font-weight="bold">Arrow Extraction Operators (-&gt; and -&gt;&gt;):</text>
  <text x="528" y="180" fill="#a78bfa" font-size="11">SELECT</text>
  <text x="548" y="198" fill="#cbd5e1" font-size="10">payload-&gt;'user' AS json_subtree,   -- returns JSON string</text>
  <text x="548" y="216" fill="#34d399" font-size="10">payload-&gt;'user'-&gt;&gt;'email' AS email -- returns unquoted TEXT</text>
  <text x="528" y="236" fill="#a78bfa" font-size="11">FROM events;</text>
  <text x="528" y="254" fill="#94a3b8" font-size="10">• Built directly into core SQLite engine without extra plugins.</text>

  <rect x="516" y="285" width="400" height="155" rx="6" fill="#030712" stroke="#10b981"/>
  <text x="528" y="310" fill="#38bdf8" font-size="12" font-weight="bold">Indexing JSON Properties with Generated Columns:</text>
  <text x="528" y="332" fill="#e2e8f0" font-size="10">ALTER TABLE events ADD COLUMN user_id INT</text>
  <text x="528" y="350" fill="#f59e0b" font-size="10">GENERATED ALWAYS AS (payload-&gt;&gt;'user_id');</text>
  <text x="528" y="374" fill="#e2e8f0" font-size="10">CREATE INDEX idx_events_user ON events (user_id);</text>
  <text x="528" y="400" fill="#34d399" font-size="10">• Turns flexible JSON queries into ultra-fast B-Tree seeks!</text>
  <text x="528" y="418" fill="#94a3b8" font-size="10">• Zero manual syncing needed: Generated column updates automatically.</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'like-vs-glob',
      text: {
        en: 'Pattern Matching: LIKE versus GLOB',
        bn: 'প্যাটার্ন ম্যাচিং: LIKE বনাম GLOB'
      }
    },
    {
      type: 'para',
      text: {
        en: 'SQLite provides two distinct pattern matching operators with contrasting behavior and performance characteristics.',
        bn: 'SQLite দুটি ভিন্ন প্যাটার্ন ম্যাচিং অপারেটর সরবরাহ করে যাদের আচরণ এবং গতি সম্পূর্ণ আলাদা।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'LIKE Operator: Case-insensitive by default for ASCII characters. Uses the percent sign for zero or more characters and underscore for a single character.',
          bn: 'LIKE অপারেটর: ASCII অক্ষরের জন্য এটি ডিফল্টভাবে কেস-ইনসেনসিটিভ। যেকোনো সংখ্যক অক্ষরের জন্য শতকরা চিহ্ন এবং একক অক্ষরের জন্য আন্ডারস্কোর ব্যবহার করে।'
        },
        {
          en: 'GLOB Operator: Case-sensitive using Unix file-globbing syntax. Uses asterisk for zero or more characters, question mark for single characters, and square brackets for character classes.',
          bn: 'GLOB অপারেটর: ইউনিক্স স্টাইলে এটি কেস-সেনসিটিভ। যেকোনো সংখ্যক অক্ষরের জন্য অ্যাস্টেরিস্ক, একক অক্ষরের জন্য প্রশ্নবোধক চিহ্ন এবং ব্র্যাকেট ক্লাস ব্যবহার করে।'
        },
        {
          en: 'Index Usability: A GLOB query like WHERE name GLOB apple* can directly utilize a standard B-Tree index without requiring special collation indexes.',
          bn: 'ইনডেক্স ব্যবহারের সুবিধা: WHERE name GLOB apple* কোয়েরি কোনো বিশেষ ইনডেক্স ছাড়াই সরাসরি সাধারণ B-Tree ইনডেক্স ব্যবহার করতে পারে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'json1-functions',
      text: {
        en: 'Modern SQLite JSON Functions and Generated Columns',
        bn: 'আধুনিক SQLite JSON ফাংশন ও জেনারেটেড কলাম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern SQLite includes native JSON support in the core runtime. Using arrow operators, developers can query semi-structured data directly inside SQL statements.',
        bn: 'আধুনিক SQLite-এর মূল ইঞ্জিনে নেটিভ JSON সমর্থন যুক্ত রয়েছে। অ্যারো অপারেটর ব্যবহার করে ডেভেলপাররা এসকিউএল কোডের ভেতরেই সেমি-স্ট্রাকচার্ড ডাটা কোয়েরি করতে পারেন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The single arrow operator returns a valid JSON string, while the double arrow operator extracts the target field as unquoted text. By combining double arrow extraction with generated columns, SQLite can index individual JSON fields in B-Trees for sub-millisecond retrieval.',
        bn: 'একটিমাত্র অ্যারো অপারেটর একটি বৈধ JSON স্ট্রিং ফেরত দেয়, আর ডাবল অ্যারো অপারেটর মানটিকে সাধারণ টেক্সট হিসেবে বের করে আনে। জেনারেটেড কলামের সাথে এই এক্সট্রাকশন মিলিয়ে SQLite সরাসরি JSON প্রোপার্টির ওপর B-Tree ইনডেক্স তৈরি করতে পারে।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-query-sim',
      text: {
        en: 'Interactive Benchmark: Simulating SQLite Queries, Aggregation & JSON',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: SQLite কোয়েরি, সমষ্টিকরণ ও JSON সিমুলেশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'sqlite-query-engine-sim.ts',
      code: `// SQLite Query Engine & JSON1 Simulator
// 4 sample rows evaluated -> returns 4
// LIKE '%.com' matches 2 rows -> returns 2
// TOTAL(points) gives 760.0 floating sum
function simulateSqliteQueryEngine() {
  console.log("=== SQLITE QUERY & FILTERING ENGINE SIMULATOR ===");

  const sampleRows = [
    { rowid: 1, name: "Alice", email: "alice@example.com", role: "admin", points: 150, meta: { plan: "pro", active: true } },
    { rowid: 2, name: "Bob", email: "bob@test.org", role: "user", points: 80, meta: { plan: "free", active: true } },
    { rowid: 3, name: "Charlie", email: "charlie@domain.com", role: "user", points: 220, meta: { plan: "pro", active: false } },
    { rowid: 4, name: "Diana", email: "diana@sample.io", role: "manager", points: 310, meta: { plan: "enterprise", active: true } }
  ];

  // 1. Projection with rowid
  console.log("\\n1. Projection with Hidden rowid (4 total rows):");
  sampleRows.forEach(r => {
    console.log(\`   rowid: \${r.rowid} | name: \${r.name} | points: \${r.points}\`);
  });

  // 2. Pattern Matching: LIKE vs GLOB
  console.log("\\n2. Pattern Matching (LIKE vs GLOB):");
  const likeMatches = sampleRows.filter(r => r.email.toLowerCase().endsWith(".com"));
  console.log(\`   LIKE '%.com' (Case-insensitive) -> \${likeMatches.length} matching rows\`);

  const globMatches = sampleRows.filter(r => r.name.startsWith("A") || r.name.startsWith("B"));
  console.log(\`   GLOB '[AB]*' (Case-sensitive Unix glob) -> \${globMatches.length} matching rows\`);

  // 3. JSON Extraction Simulation
  console.log("\\n3. Modern SQLite JSON Operators (data->>'plan'):");
  sampleRows.forEach(r => {
    console.log(\`   User: \${r.name} -> Plan: \${r.meta.plan} (active: \${r.meta.active})\`);
  });

  // 4. Aggregations (COUNT and TOTAL)
  const totalPoints = sampleRows.reduce((acc, r) => acc + r.points, 0);
  const avgPoints = (totalPoints / sampleRows.length).toFixed(1);
  console.log("\\n4. Aggregations:");
  console.log(\`   COUNT(*): \${sampleRows.length} | TOTAL(points): \${totalPoints}.0 | AVG(points): \${avgPoints}\`);
}

simulateSqliteQueryEngine();`
    },
    {
      type: 'terminal',
      id: 'query-output',
      cmd: 'npx tsx sqlite-query-engine-sim.ts',
      output: `=== SQLITE QUERY & FILTERING ENGINE SIMULATOR ===

1. Projection with Hidden rowid (4 total rows):
   rowid: 1 | name: Alice | points: 150
   rowid: 2 | name: Bob | points: 80
   rowid: 3 | name: Charlie | points: 220
   rowid: 4 | name: Diana | points: 310

2. Pattern Matching (LIKE vs GLOB):
   LIKE '%.com' (Case-insensitive) -> 2 matching rows
   GLOB '[AB]*' (Case-sensitive Unix glob) -> 2 matching rows

3. Modern SQLite JSON Operators (data->>'plan'):
   User: Alice -> Plan: pro (active: true)
   User: Bob -> Plan: free (active: true)
   User: Charlie -> Plan: pro (active: false)
   User: Diana -> Plan: enterprise (active: true)

4. Aggregations:
   COUNT(*): 4 | TOTAL(points): 760.0 | AVG(points): 190.0`
    }
  ],
  exercises: [
    {
      id: 'sql-sel-ex-1',
      kind: 'mcq',
      topic: 'like-vs-glob-behavioral-differences',
      question: {
        en: 'What is the critical behavioral difference between LIKE and GLOB pattern matching operators in SQLite?',
        bn: 'SQLite-এ LIKE এবং GLOB প্যাটার্ন ম্যাচিং অপারেটরদ্বয়ের মধ্যে মূল আচরণগত পার্থক্য কী?'
      },
      options: [
        {
          en: 'LIKE is case-insensitive and uses % and _, while GLOB is case-sensitive and uses Unix wildcards * and ?',
          bn: 'LIKE কেস-ইনসেনসিটিভ এবং % ও _ ব্যবহার করে, আর GLOB কেস-সেনসিটিভ এবং ইউনিক্স ওয়াইল্ডকার্ড * ও ? ব্যবহার করে'
        },
        {
          en: 'LIKE only works on numbers, while GLOB only works on emojis',
          bn: 'LIKE কেবল সংখ্যায় চলে আর GLOB কেবল ইমোজিতে চলে'
        },
        {
          en: 'GLOB deletes matching rows permanently from the table',
          bn: 'GLOB ম্যাচ করা রো টেবিল থেকে চিরতরে মুছে ফেলে'
        },
        {
          en: 'Both operators are completely identical in every way',
          bn: 'উভয় অপারেটর সব দিক থেকেই হুবহু অভিন্ন'
        }
      ],
      answer: 0,
      hint: {
        en: 'LIKE ignores letter casing by default; GLOB is case-sensitive using Unix wildcard characters.',
        bn: 'LIKE ছোট-বড় অক্ষরের পার্থক্য দেখে না; GLOB কেস-সেনসিটিভ এবং ইউনিক্স ফাইল সিনট্যাক্স ব্যবহার করে।'
      },
      explanation: {
        en: 'LIKE matches case-insensitively with % and _. GLOB matches case-sensitively with * and ?, matching Unix file path patterns.',
        bn: 'LIKE ছোট-বড় অক্ষর না মেনে % ও _ দিয়ে খোঁজে। GLOB ইউনিক্স ফাইলের মতো কেস-সেনসিটিভভাবে * ও ? দিয়ে ম্যাচ করে।'
      }
    },
    {
      id: 'sql-sel-ex-2',
      kind: 'mcq',
      topic: 'sqlite-sum-vs-total-aggregate',
      question: {
        en: 'In SQLite, how does the aggregate function TOTAL(col) differ from the standard SQL SUM(col) function when zero matching rows are found?',
        bn: 'কোনো ম্যাচিং রো না থাকলে SQLite-এ অ্যাগ্রিগেট ফাংশন TOTAL(col) কীভাবে সাধারণ SUM(col) ফাংশন থেকে আলাদা আচরণ করে?'
      },
      options: [
        {
          en: 'TOTAL(col) always returns floating-point 0.0, whereas SUM(col) returns NULL',
          bn: 'TOTAL(col) সর্বদা দশমিক 0.0 প্রদান করে, যেখানে SUM(col) মান না পেলে NULL প্রদান করে'
        },
        {
          en: 'TOTAL(col) terminates the database connection immediately',
          bn: 'TOTAL(col) সাথে সাথে ডাটাবেস সংযোগ বন্ধ করে দেয়'
        },
        {
          en: 'TOTAL(col) multiplies all values together instead of adding',
          bn: 'TOTAL(col) যোগ করার বদলে সমস্ত সংখ্যাকে একসাথে গুণ করে'
        },
        {
          en: 'SUM(col) is not supported in SQLite',
          bn: 'SQLite-এ SUM(col) সমর্থিত নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'TOTAL never returns NULL; it returns 0.0 on an empty set.',
        bn: 'TOTAL কখনো NULL ফেরত দেয় না; খালি সেটে এটি 0.0 দেয়।'
      },
      explanation: {
        en: 'TOTAL is an SQLite-specific aggregate designed to prevent NULL propagation in mathematical formulas by guaranteeing a 0.0 return value.',
        bn: 'গাণিতিক হিসেবে NULL-এর ঝামেলা এড়াতে SQLite-এ TOTAL ফাংশনটি শূন্য রো থাকলে 0.0 রিটার্ন করে।'
      }
    },
    {
      id: 'sql-sel-ex-3',
      kind: 'mcq',
      topic: 'sqlite-json-arrow-extraction',
      question: {
        en: 'In modern SQLite, which operator extracts a nested JSON property as unquoted plain TEXT rather than a quoted JSON string?',
        bn: 'আধুনিক SQLite-এ কোন অপারেটরটি কোটেড JSON স্ট্রিংয়ের বদলে সাধারণ আনকোটেড TEXT হিসেবে মান উদ্ধার করে?'
      },
      options: [
        {
          en: 'The double arrow operator (->>)',
          bn: 'ডাবল অ্যারো অপারেটর (->>)'
        },
        {
          en: 'The single arrow operator (->)',
          bn: 'একক অ্যারো অপারেটর (->)'
        },
        {
          en: 'The double slash operator (//)',
          bn: 'ডাবল স্ল্যাশ অপারেটর (//)'
        },
        {
          en: 'The exclamation mark operator (!)',
          bn: 'বিস্ময়বোধক চিহ্ন অপারেটর (!)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Single arrow returns JSON representation; double arrow returns unquoted text.',
        bn: 'একক অ্যারো JSON দেয়; ডাবল অ্যারো আনকোটেড টেক্সট দেয়।'
      },
      explanation: {
        en: 'data->\'key\' returns a JSON string (with quotes). data->>\'key\' extracts the bare text value without surrounding JSON quotes.',
        bn: 'data->\'key\' কোটেশনসহ JSON স্ট্রিং দেয়। আর data->>\'key\' কোটেশন ছাড়া মূল টেক্সট মানটি বের করে আনে।'
      }
    },
    {
      id: 'sql-sel-ex-4',
      kind: 'mcq',
      topic: 'hidden-rowid-primary-key',
      question: {
        en: 'Why is querying a table using WHERE rowid = 42 the fastest possible query execution path in SQLite?',
        bn: 'WHERE rowid = 42 দিয়ে কোয়েরি করা কেন SQLite-এ সবচেয়ে দ্রুতগতির সম্ভাব্য কোয়েরি পাথ?'
      },
      options: [
        {
          en: 'The rowid serves as the underlying 64-bit integer B-Tree primary key, enabling an immediate direct point seek without secondary index traversal',
          bn: 'rowid হলো মূল ৬৪-বিট পূর্ণসংখ্যার B-Tree প্রাইমারি কি, যা দ্বিতীয় কোনো ইনডেক্স না ঘুরেই সরাসরি ডাটাতে পৌঁছায়'
        },
        {
          en: 'Because rowid stores data in the computer graphics card',
          bn: 'কারণ rowid কম্পিউটারের গ্রাফিক্স কার্ডে ডাটা জমা রাখে'
        },
        {
          en: 'Because rowid automatically deletes all other rows in the table',
          bn: 'কারণ rowid টেবিলের বাকি সব রো মুছে ফেলে'
        },
        {
          en: 'Because rowid requires no CPU cycles to compute',
          bn: 'কারণ rowid চালাতে কোনো সিপিইউ পাওয়ার লাগে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Table B-Trees in SQLite are keyed directly on the 64-bit rowid.',
        bn: 'SQLite-এ টেবিল B-Tree সরাসরি ৬৪-বিট rowid দ্বারা সাজানো থাকে।'
      },
      explanation: {
        en: 'Every regular SQLite table is organized as a B-Tree indexed by rowid. A query filtering on rowid jumps directly to the leaf page in microseconds.',
        bn: 'SQLite টেবিল মূলত rowid ভিত্তিক B-Tree হিসেবে গঠিত। ফলে rowid দিয়ে খুঁজলে সরাসরি মাইক্রোসেকেন্ডে সঠিক লিফ পেজে পৌঁছানো যায়।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'SQLite Querying, Filtering & JSON Engine Quiz',
      bn: 'SQLite কোয়েরি, ফিল্টারিং ও JSON ইঞ্জিন কুইজ'
    },
    questions: [
      {
        id: 'sql-sel-qz-1',
        kind: 'mcq',
        topic: 'select-without-from-dual',
        question: {
          en: 'Unlike Oracle or some older relational database engines, how does SQLite handle constant expression evaluation such as evaluating 2 + 2?',
          bn: 'ওরাকল বা পুরোনো কিছু ডাটাবেসের তুলনায় SQLite কীভাবে 2 + 2 এর মতো ধ্রুবক এক্সপ্রেশন মূল্যায়ন করে?'
        },
        options: [
          {
            en: 'SQLite evaluates SELECT 2 + 2; directly without requiring a dummy FROM dual table',
            bn: 'SQLite কোনো ডামি FROM dual টেবিল ছাড়াই সরাসরি SELECT 2 + 2; মূল্যায়ন করতে পারে'
          },
          {
            en: 'SQLite requires creating a physical table named dual on disk first',
            bn: 'SQLite-এ আগে ডিস্কে dual নামের একটি টেবিল তৈরি করে নিতে হয়'
          },
          {
            en: 'Constant calculations are forbidden in SQLite',
            bn: 'SQLite-এ ধ্রুবক গণনা করা সম্পূর্ণ বেআইনি'
          },
          {
            en: 'It must be sent to an external math server via HTTP',
            bn: 'এইচটিটিপির মাধ্যমে বাইরের কোনো গণিত সার্ভারে এটি পাঠাতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'In SQLite, the FROM clause is optional in SELECT statements.',
          bn: 'SQLite-এ SELECT স্টেটমেন্টে FROM ক্লজ দেওয়া ঐচ্ছিক।'
        },
        explanation: {
          en: 'SQLite permits SELECT expressions without any FROM clause, executing math, date functions, and string operations instantly.',
          bn: 'SQLite-এ কোনো টেবিল ছাড়াই সরাসরি SELECT লিখে গণিত, সময় ও টেক্সটের অপারেশন চালানো যায়।'
        }
      },
      {
        id: 'sql-sel-qz-2',
        kind: 'mcq',
        topic: 'glob-btree-index-optimization',
        question: {
          en: 'Under what specific condition can a query using GLOB leverage a standard B-Tree index for an index range seek?',
          bn: 'কোন নির্দিষ্ট শর্তে GLOB ব্যবহারকারী একটি কোয়েরি B-Tree ইনডেক্স রেঞ্জ সিক চালাতে পারে?'
        },
        options: [
          {
            en: 'When the search pattern begins with literal characters rather than a wildcard (for example, GLOB apple*)',
            bn: 'যখন সার্চ প্যাটার্ন কোনো ওয়াইল্ডকার্ড দিয়ে শুরু না হয়ে নির্দিষ্ট অক্ষর দিয়ে শুরু হয় (যেমন GLOB apple*)'
          },
          {
            en: 'Only when the pattern starts with a question mark',
            bn: 'কেবলমাত্র যখন প্যাটার্নটি প্রশ্নবোধক চিহ্ন দিয়ে শুরু হয়'
          },
          {
            en: 'GLOB can never use B-Tree indexes under any circumstances',
            bn: 'GLOB কখনোই কোনো অবস্থাতেই B-Tree ইনডেক্স ব্যবহার করতে পারে না'
          },
          {
            en: 'Only when the database runs on a Linux server',
            bn: 'কেবলমাত্র যখন ডাটাবেসটি কোনো লিনাক্স সার্ভারে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Prefix searches allow B-Tree boundary navigation.',
          bn: 'শুরুর অক্ষর জানা থাকলে B-Tree ইনডেক্স সিক করা সম্ভব হয়।'
        },
        explanation: {
          en: 'Because GLOB is case-sensitive, a prefix pattern like apple* establishes a clear lower and upper bound in the B-Tree leaf pages.',
          bn: 'যেহেতু GLOB কেস-সেনসিটিভ, তাই apple* এর মতো প্রিফিক্স B-Tree ইনডেক্সে স্পষ্ট সীমানা তৈরি করে সরাসরি সিক চালাতে পারে।'
        }
      },
      {
        id: 'sql-sel-qz-3',
        kind: 'mcq',
        topic: 'json-generated-column-indexing',
        question: {
          en: 'How can an application achieve sub-millisecond query performance on a nested JSON attribute stored inside an SQLite TEXT column?',
          bn: 'SQLite TEXT কলামে থাকা কোনো নেস্টেড JSON প্রোপার্টির ওপর একটি অ্যাপ্লিকেশন কীভাবে সাব-মিলিসেকেন্ড গতি অর্জন করতে পারে?'
        },
        options: [
          {
            en: 'Create a generated column extracting the JSON property (col AS (data->>prop)) and build a B-Tree index on that generated column',
            bn: 'JSON প্রোপার্টি বের করার জন্য একটি জেনারেটেড কলাম (col AS (data->>prop)) তৈরি করে তার ওপর B-Tree ইনডেক্স বসানো'
          },
          {
            en: 'Convert the entire database into a CSV file',
            bn: 'পুরো ডাটাবেসকে সিএসভি ফাইলে রূপান্তর করা'
          },
          {
            en: 'Increase system RAM to 512GB',
            bn: 'সিস্টেম র‍্যাম ৫১২GB-এ বৃদ্ধি করা'
          },
          {
            en: 'Disable all SQL indexes across the table',
            bn: 'টেবিলের সমস্ত ইনডেক্স বন্ধ করে দেওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'Generated columns in SQLite can be indexed just like normal table columns.',
          bn: 'SQLite-এ জেনারেটেড কলামের ওপর সাধারণ কলামের মতোই ইনডেক্স তৈরি করা যায়।'
        },
        explanation: {
          en: 'Generated columns extract values on write or query. Indexing a generated column stores the extracted values in a B-Tree for instant lookup.',
          bn: 'জেনারেটেড কলাম থেকে মান বের করে ইনডেক্স করা হলে সেই মানগুলো B-Tree তে সাজানো থাকে, ফলে মুহূর্তেই খোঁজা যায়।'
        }
      },
      {
        id: 'sql-sel-qz-4',
        kind: 'mcq',
        topic: 'nulls-ordering-in-order-by',
        question: {
          en: 'In SQLite ORDER BY sorting, where are NULL values placed by default when sorting columns in ASC (ascending) order?',
          bn: 'SQLite ORDER BY সর্টিংয়ে কোনো কলামকে ASC (ঊর্ধ্বমুখী) ক্রমে সাজালে NULL মানগুলো ডিফল্টভাবে কোথায় বসে?'
        },
        options: [
          {
            en: 'At the very beginning (NULLS FIRST), because SQLite considers NULL the lowest possible value',
            bn: 'সবার শুরুতে (NULLS FIRST), কারণ SQLite-এর নিয়মে NULL হলো সর্বনিম্ন সম্ভাব্য মান'
          },
          {
            en: 'At the very end (NULLS LAST)',
            bn: 'সবার শেষে (NULLS LAST)'
          },
          {
            en: 'NULL values are deleted during sorting',
            bn: 'সর্ট করার সময় NULL মানগুলো মুছে যায়'
          },
          {
            en: 'Randomly scattered throughout the result set',
            bn: 'ফলাফলের ভেতরে এলোমেলোভাবে ছড়িয়ে থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Remember the comparison rule: NULL is smaller than any number or string.',
          bn: 'তুলনার নিয়মটি মনে রাখুন: NULL যেকোনো সংখ্যা বা স্ট্রিংয়ের চেয়ে ছোট।'
        },
        explanation: {
          en: 'SQLite ranks NULL as the smallest storage class. Under ASC order, NULL values appear first unless NULLS LAST is explicitly specified.',
          bn: 'SQLite-এ NULL হলো সবচেয়ে ছোট স্টোরেজ ক্লাস। তাই ASC ক্রমে সাজালে স্পষ্ট করে NULLS LAST না বলা পর্যন্ত তা সবার আগে প্রদর্শিত হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'writes-and-the-change',
    title: {
      en: 'Atomic Writes & Upsert Mutations: INSERT, UPDATE, DELETE & RETURNING',
      bn: 'অ্যাটমিক রাইট ও আপসার্ট মিউটেশন: INSERT, UPDATE, DELETE ও RETURNING'
    }
  }
};
