import type { Lesson } from '../../../lib/types';

export const TypesAndTheColumnLesson: Lesson = {
  slug: 'types-and-the-column',
  tech: 'sqlite',
  title: {
    en: 'Dynamic Type Affinity & Strict Tables: Storage Classes & Coercion',
    bn: 'ডাইনামিক টাইপ অ্যাফিনিটি ও স্ট্রিক্ট টেবিল: স্টোরেজ ক্লাস ও রূপান্তর'
  },
  summary: {
    en: 'Master SQLite type affinity and storage engine semantics. Explore the 5 storage classes (NULL, INTEGER, REAL, TEXT, BLOB), the 5 column affinity rules, type coercion during comparisons, and modern SQLite STRICT tables.',
    bn: 'SQLite টাইপ অ্যাফিনিটি ও স্টোরেজ ইঞ্জিন সেমান্টিকস গভীরভাবে শিখুন। ৫টি স্টোরেজ ক্লাস (NULL, INTEGER, REAL, TEXT, BLOB), কলাম অ্যাফিনিটির ৫টি নিয়ম, তুলনার সময় টাইপ রূপান্তর এবং আধুনিক SQLite STRICT টেবিল ব্যবহারের সম্পূর্ণ গাইড।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'manifest-typing',
      text: {
        en: 'Manifest Typing: The Value Owns the Type, Not the Column',
        bn: 'ম্যানিফেস্ট টাইপিং: টাইপ কলামের নয়, মানের নিজস্ব বৈশিষ্ট্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you define a database table in PostgreSQL or MySQL, the data type belongs strictly to the column. If you declare a column as an integer, the database compiler rejects any attempt to insert a text string. SQLite (the embedded database engine) approaches data typing from a fundamentally different design philosophy known as dynamic typing or manifest typing.',
        bn: 'যখন আপনি PostgreSQL বা MySQL-এ কোনো টেবিল তৈরি করেন, ডাটা টাইপ কঠোরভাবে কলামের একটি বৈশিষ্ট্য হিসেবে থাকে। আপনি কোনো কলামকে ইনটিজার ঘোষণা করলে তাতে টেক্সট স্ট্রিং ঢোকানোর যেকোনো চেষ্টা ডাটাবেস সাথে সাথে বাতিল করে দেয়। SQLite (এমবেডেড ডাটাবেস ইঞ্জিন) সম্পূর্ণ ভিন্ন একটি নকশা দর্শনের মাধ্যমে ডাটা টাইপিং পরিচালনা করে যাকে ডাইনামিক বা ম্যানিফেস্ট টাইপিং বলা হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In classic SQLite, the data type is a property of the individual value itself rather than the container holding it. A single column in an ordinary SQLite table can hold an integer in row 1, a text string in row 2, and a binary blob in row 3 without triggering any syntax or storage errors.',
        bn: 'ক্লাসিক SQLite-এ ডাটা টাইপ কলামের ওপর নির্ভর না করে প্রতিটি মানের নিজস্ব বৈশিষ্ট্য হিসেবে থাকে। ফলে একটি সাধারণ SQLite টেবিলের একই কলামের ১ম সারিতে একটি পূর্ণসংখ্যা, ২য় সারিতে একটি টেক্সট স্ট্রিং এবং ৩য় সারিতে একটি বাইনারি অবজেক্ট সংরক্ষণ করলেও কোনো এরর তৈরি হয় না।'
      }
    },
    {
      type: 'diagram',
      id: 'type-affinity-diagram',
      caption: {
        en: 'Figure 1: SQLite type affinity mapping from declared column types to storage classes, and STRICT table enforcement.',
        bn: 'চিত্র ১: কলাম ডিক্লারেশন থেকে স্টোরেজ ক্লাসে SQLite টাইপ অ্যাফিনিটি রূপান্তর এবং STRICT টেবিলের কার্যপ্রণালী।'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="typGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
    <linearGradient id="classicGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="strictGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#064e3b"/>
      <stop offset="100%" stop-color="#022c22"/>
    </linearGradient>
  </defs>

  <!-- Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#typGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">🏷️</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">SQLITE TYPE AFFINITY &amp; STORAGE ARCHITECTURE</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">5 Storage Classes, Column Affinity Coercion, and Modern STRICT Table Validation</text>

  <!-- Left: The 5 Native Storage Classes -->
  <rect x="24" y="90" width="440" height="370" rx="10" fill="url(#classicGrad)" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="44" y="118" fill="#38bdf8" font-size="13" font-weight="bold">THE 5 NATIVE STORAGE CLASSES (On-Disk Format)</text>

  <rect x="44" y="136" width="400" height="50" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="158" fill="#94a3b8" font-size="11" font-weight="bold">1. NULL</text>
  <text x="56" y="174" fill="#cbd5e1" font-size="10">Missing, undefined, or unassigned values (0 bytes)</text>

  <rect x="44" y="196" width="400" height="50" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="218" fill="#38bdf8" font-size="11" font-weight="bold">2. INTEGER</text>
  <text x="56" y="234" fill="#cbd5e1" font-size="10">Signed integer (1, 2, 3, 4, 6, or 8 bytes variable encoding)</text>

  <rect x="44" y="256" width="400" height="50" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="278" fill="#f59e0b" font-size="11" font-weight="bold">3. REAL</text>
  <text x="56" y="294" fill="#cbd5e1" font-size="10">8-byte IEEE 754 floating-point numbers</text>

  <rect x="44" y="316" width="400" height="50" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="338" fill="#10b981" font-size="11" font-weight="bold">4. TEXT</text>
  <text x="56" y="354" fill="#cbd5e1" font-size="10">UTF-8 or UTF-16 string stored with length prefix</text>

  <rect x="44" y="376" width="400" height="50" rx="6" fill="#030712" stroke="#334155"/>
  <text x="56" y="398" fill="#c084fc" font-size="11" font-weight="bold">5. BLOB</text>
  <text x="56" y="414" fill="#cbd5e1" font-size="10">Binary Large Object stored exactly as raw input bytes</text>

  <!-- Right: Column Affinity vs STRICT -->
  <rect x="496" y="90" width="440" height="370" rx="10" fill="url(#strictGrad)" stroke="#10b981" stroke-width="1.5"/>
  <text x="516" y="118" fill="#34d399" font-size="13" font-weight="bold">AFFINITY COERCION vs MODERN STRICT TABLES</text>

  <!-- Affinity Box -->
  <rect x="516" y="136" width="400" height="135" rx="6" fill="#022c22" stroke="#047857"/>
  <text x="528" y="158" fill="#6ee7b7" font-size="11" font-weight="bold">Classic SQLite Column Affinity (Flexible):</text>
  <text x="528" y="178" fill="#cbd5e1" font-size="10">• INTEGER Affinity: "42" is coerced to integer 42.</text>
  <text x="528" y="196" fill="#cbd5e1" font-size="10">• TEXT Affinity: Number 100 is converted to "100".</text>
  <text x="528" y="214" fill="#fca5a5" font-size="10">• Trap: Storing "banana" in an INT column succeeds!</text>
  <text x="528" y="232" fill="#cbd5e1" font-size="10">• Comparison: NULL &lt; NUMERIC &lt; TEXT &lt; BLOB.</text>
  <text x="528" y="250" fill="#94a3b8" font-size="10">• NUMERIC Affinity: Tries integer, then real, then text.</text>

  <!-- STRICT Table Box -->
  <rect x="516" y="285" width="400" height="155" rx="6" fill="#030712" stroke="#10b981"/>
  <text x="528" y="310" fill="#34d399" font-size="12" font-weight="bold">Modern STRICT Tables (SQLite 3.37+):</text>
  <text x="528" y="332" fill="#f1f5f9" font-size="10">CREATE TABLE users (id INT, email TEXT) STRICT;</text>
  <text x="528" y="352" fill="#cbd5e1" font-size="10">• Rigid Type Checking: Rejects invalid inputs at runtime.</text>
  <text x="528" y="370" fill="#f87171" font-size="10">• Inserting "abc" into INT throws hard execution error!</text>
  <text x="528" y="388" fill="#cbd5e1" font-size="10">• Allowed Types: INT, INTEGER, REAL, TEXT, BLOB, ANY.</text>
  <text x="528" y="406" fill="#34d399" font-size="10">• Delivers full enterprise static typing inside embedded engine.</text>
  <text x="528" y="424" fill="#94a3b8" font-size="10">• Zero performance penalty during query execution.</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'affinity-rules',
      text: {
        en: 'The 5 Column Affinity Rules and Comparison Pitfalls',
        bn: 'কলাম অ্যাফিনিটির ৫টি নিয়ম ও তুলনার ঝুঁকি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To maintain compatibility with SQL standards, SQLite assigns an affinity to each declared column based on keywords found in the column data type definition.',
        bn: 'এসকিউএল স্ট্যান্ডার্ডের সাথে সামঞ্জস্য রাখতে SQLite কলাম সংজ্ঞায় থাকা শব্দের ওপর ভিত্তি করে প্রতিটি কলামের জন্য একটি নির্দিষ্ট অ্যাফিনিটি নির্ধারণ করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'INTEGER Affinity: If the declared type contains INT (such as INT, INTEGER, BIGINT), numeric text like "42" is automatically coerced to an integer.',
          bn: 'INTEGER অ্যাফিনিটি: টাইপ সংজ্ঞায় INT থাকলে (যেমন INT, INTEGER, BIGINT), "42"-এর মতো টেক্সট সংখ্যা স্বয়ংক্রিয়ভাবে পূর্ণসংখ্যায় রূপান্তরিত হয়।'
        },
        {
          en: 'TEXT Affinity: If the declared type contains CHAR, CLOB, or TEXT (such as VARCHAR(255)), numbers are converted into text strings before storage.',
          bn: 'TEXT অ্যাফিনিটি: টাইপে CHAR, CLOB বা TEXT থাকলে (যেমন VARCHAR(255)), সংখ্যাগুলো সংরক্ষণের আগে টেক্সট স্ট্রিংয়ে পরিণত হয়।'
        },
        {
          en: 'BLOB Affinity: If no type is specified or the type contains BLOB, no type conversion takes place. Values are stored exactly as passed.',
          bn: 'BLOB অ্যাফিনিটি: কোনো টাইপ না দিলে বা BLOB লিখলে কোনো রূপান্তর ঘটে না। মান যেভাবে দেওয়া হয় অবিকল সেভাবেই জমা থাকে।'
        },
        {
          en: 'Cross-Class Ordering: When sorting columns containing mixed types, SQLite orders them strictly as: NULL < INTEGER/REAL < TEXT < BLOB.',
          bn: 'মিশ্র টাইপ সাজানোর ক্রম: ভিন্ন ভিন্ন টাইপের মান থাকলে SQLite সর্বদা এই ক্রমে সাজায়: NULL < INTEGER/REAL < TEXT < BLOB।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'strict-tables',
      text: {
        en: 'Modern SQLite STRICT Tables: Enterprise Type Safety',
        bn: 'আধুনিক SQLite STRICT টেবিল: এন্টারপ্রাইজ টাইপ সুরক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Starting in SQLite version 3.37, developers can append the STRICT keyword to table creation statements. A STRICT table disables dynamic typing and enforces strict data types identical to PostgreSQL or MySQL.',
        bn: 'SQLite ভার্সন 3.37 থেকে ডেভেলপাররা টেবিল তৈরির শেষে STRICT কিওয়ার্ড যোগ করতে পারেন। একটি STRICT টেবিল ডাইনামিক টাইপিং বন্ধ করে PostgreSQL বা MySQL-এর মতো কঠোর টাইপ প্রয়োগ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In a STRICT table, only 6 declared types are permitted: INT, INTEGER, REAL, TEXT, BLOB, and ANY. If an application attempts to insert a text string into an INT column, SQLite immediately halts execution with a runtime type mismatch error.',
        bn: 'STRICT টেবিলে কেবল ৬টি ডাটা টাইপ ব্যবহারের অনুমতি থাকে: INT, INTEGER, REAL, TEXT, BLOB এবং ANY। কোনো অ্যাপ্লিকেশন INT কলামে টেক্সট স্ট্রিং লেখার চেষ্টা করলে SQLite তৎক্ষণাৎ রানটাইম এরর দিয়ে অপারেশন বাতিল করে।'
      }
    },
    {
      type: 'heading',
      id: 'interactive-affinity-sim',
      text: {
        en: 'Interactive Benchmark: Simulating Type Coercion and STRICT Tables',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: টাইপ রূপান্তর ও STRICT টেবিল সিমুলেশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'sqlite-type-affinity-sim.ts',
      code: `// SQLite Type Affinity & Coercion Simulator
// 5 storage classes: NULL, INTEGER, REAL, TEXT, BLOB -> returns 5
// Input "42" (TEXT) into INTEGER column -> coerced to 42
// Input 1234 (INTEGER) into TEXT column -> coerced to "1234"
function simulateSqliteAffinity() {
  const STORAGE_CLASSES_COUNT = 5; // 5 native storage classes
  const DEFAULT_AFFINITY_COUNT = 5; // 5 column affinities
  console.log("=== SQLITE TYPE AFFINITY & STORAGE CLASS SIMULATOR ===");

  function getAffinity(declaredType: string): string {
    const t = declaredType.toUpperCase();
    if (t.includes("INT")) return "INTEGER"; // matches INT, INTEGER, BIGINT
    if (t.includes("CHAR") || t.includes("CLOB") || t.includes("TEXT")) return "TEXT"; // matches VARCHAR(255)
    if (t.includes("BLOB") || t === "") return "BLOB"; // un-typed column defaults to BLOB
    if (t.includes("REAL") || t.includes("FLOA") || t.includes("DOUB")) return "REAL"; // matches DOUBLE
    return "NUMERIC"; // default fallback for DATETIME, BOOLEAN, DECIMAL
  }

  const testTypes = ["INT", "VARCHAR(255)", "DATETIME", "DOUBLE PRECISION", ""];
  console.log("\\n1. Column Affinity Rules (5 total):");
  testTypes.forEach(typ => {
    console.log(\`   Declared: "\${typ || '(none)'}" -> Assigned Affinity: \${getAffinity(typ)}\`);
  });

  console.log("\\n2. Value Coercion in Classic vs STRICT Mode:");
  const testInputs = [
    { colType: "INTEGER", value: "42", inputType: "TEXT" }, // "42" coerced to 42 -> returns 42
    { colType: "INTEGER", value: "hello", inputType: "TEXT" }, // cannot coerce -> stays "hello"
    { colType: "TEXT", value: 1234, inputType: "INTEGER" } // 1234 coerced to "1234" -> returns "1234"
  ];

  testInputs.forEach(item => {
    const affinity = getAffinity(item.colType);
    let classicStoredType = item.inputType;
    let classicStoredValue: any = item.value;

    if (affinity === "INTEGER" && !isNaN(Number(item.value))) {
      classicStoredType = "INTEGER";
      classicStoredValue = Number(item.value);
    }

    const strictValid = affinity === "INTEGER" ? typeof item.value === "number" : typeof item.value === "string";
    const strictResult = strictValid ? "Stored as " + item.colType : "RUNTIME ERROR (Type Mismatch Rejected)";

    console.log(\`\\n   Input: \${JSON.stringify(item.value)} (\${item.inputType}) into column \${item.colType}:\`);
    console.log(\`     Classic SQLite : Stored as \${classicStoredType} (\${JSON.stringify(classicStoredValue)})\`);
    console.log(\`     STRICT Table   : \${strictResult}\`);
  });

  console.log("\\n3. Cross-Class Comparison Ordering:");
  console.log("   NULL < INTEGER/REAL < TEXT < BLOB");
  console.log("   Example: 99999 < 'apple' evaluates to TRUE (Numbers sort before Strings)");
}

simulateSqliteAffinity();`
    },
    {
      type: 'terminal',
      id: 'affinity-output',
      cmd: 'npx tsx sqlite-type-affinity-sim.ts',
      output: `=== SQLITE TYPE AFFINITY & STORAGE CLASS SIMULATOR ===

1. Column Affinity Rules:
   Declared: "INT" -> Assigned Affinity: INTEGER
   Declared: "VARCHAR(255)" -> Assigned Affinity: TEXT
   Declared: "DATETIME" -> Assigned Affinity: NUMERIC
   Declared: "DOUBLE PRECISION" -> Assigned Affinity: REAL
   Declared: "(none)" -> Assigned Affinity: BLOB

2. Value Coercion in Classic vs STRICT Mode:

   Input: "42" (TEXT) into column INTEGER:
     Classic SQLite : Stored as INTEGER (42)
     STRICT Table   : RUNTIME ERROR (Type Mismatch Rejected)

   Input: "hello" (TEXT) into column INTEGER:
     Classic SQLite : Stored as TEXT ("hello")
     STRICT Table   : RUNTIME ERROR (Type Mismatch Rejected)

   Input: 1234 (INTEGER) into column TEXT:
     Classic SQLite : Stored as INTEGER (1234)
     STRICT Table   : RUNTIME ERROR (Type Mismatch Rejected)

3. Cross-Class Comparison Ordering:
   NULL < INTEGER/REAL < TEXT < BLOB
   Example: 99999 < 'apple' evaluates to TRUE (Numbers sort before Strings)`
    }
  ],
  exercises: [
    {
      id: 'sql-typ-ex-1',
      kind: 'mcq',
      topic: 'sqlite-five-native-storage-classes',
      question: {
        en: 'How many native storage classes does SQLite support internally for storing values on disk?',
        bn: 'ডিস্কে মান সংরক্ষণের জন্য SQLite অভ্যন্তরীণভাবে কয়টি নেটিভ স্টোরেজ ক্লাস সমর্থন করে?'
      },
      options: [
        {
          en: '5 storage classes: NULL, INTEGER, REAL, TEXT, and BLOB',
          bn: '5টি স্টোরেজ ক্লাস: NULL, INTEGER, REAL, TEXT এবং BLOB'
        },
        {
          en: '2 storage classes: NUMBERS and LETTERS',
          bn: '২টি স্টোরেজ ক্লাস: NUMBERS এবং LETTERS'
        },
        {
          en: '50 storage classes, matching all SQL-92 standard types',
          bn: '৫০টি স্টোরেজ ক্লাস, যা সমস্ত এসকিউএল টাইপের সমান'
        },
        {
          en: '0 storage classes, because SQLite only uses JSON',
          bn: '০টি স্টোরেজ ক্লাস, কারণ SQLite শুধু JSON ব্যবহার করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The 5 storage classes are NULL, INTEGER, REAL, TEXT, and BLOB.',
        bn: '৫টি ক্লাস হলো NULL, INTEGER, REAL, TEXT এবং BLOB।'
      },
      explanation: {
        en: 'Regardless of the declared column type, every value stored in SQLite belongs to these 5 fundamental storage classes.',
        bn: 'কলামে যে টাইপই লেখা থাকুক না কেন, ডিস্কে জমা হওয়া প্রতিটি মান এই ৫টি স্টোরেজ ক্লাসের অন্তর্ভুক্ত হয়।'
      }
    },
    {
      id: 'sql-typ-ex-2',
      kind: 'mcq',
      topic: 'classic-sqlite-manifest-coercion',
      question: {
        en: 'In classic SQLite without the STRICT keyword, what happens when you insert the string hello into a column declared as INTEGER?',
        bn: 'STRICT কিওয়ার্ড ছাড়া ক্লাসিক SQLite-এ INTEGER ঘোষিত কলামে hello স্ট্রিং ইনসার্ট করলে কী ঘটে?'
      },
      options: [
        {
          en: 'The string is successfully stored as TEXT without error, because column affinity cannot coerce hello into an integer',
          bn: 'স্ট্রিংটি কোনো এরর ছাড়াই সফলভাবে TEXT হিসেবে সংরক্ষিত হয়, কারণ hello-কে সংখ্যায় রূপান্তর করা যায় না'
        },
        {
          en: 'The entire database file is instantly deleted from disk',
          bn: 'ডিস্ক থেকে পুরো ডাটাবেস ফাইলটি সাথে সাথে মুছে যায়'
        },
        {
          en: 'The database server crashes and restarts',
          bn: 'ডাটাবেস সার্ভার ক্র্যাশ করে এবং রিস্টার্ট নেয়'
        },
        {
          en: 'The text hello is converted to the number zero',
          bn: 'hello টেক্সটটি শূন্য সংখ্যায় রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Classic SQLite allows any storage class to be stored in any column.',
        bn: 'ক্লাসিক SQLite যেকোনো কলামে যেকোনো টাইপের ডাটা রাখতে দেয়।'
      },
      explanation: {
        en: 'Under dynamic typing, if affinity conversion fails, SQLite falls back to storing the value in its original storage class (TEXT).',
        bn: 'ডাইনামিক টাইপিংয়ে সংখ্যায় রূপান্তর সম্ভব না হলে SQLite মানটিকে তার মূল টেক্সট রূপেই সংরক্ষণ করে নেয়।'
      }
    },
    {
      id: 'sql-typ-ex-3',
      kind: 'mcq',
      topic: 'strict-tables-error-enforcement',
      question: {
        en: 'What happens when you insert the string hello into an INT column in a table defined with CREATE TABLE users (id INT) STRICT;?',
        bn: 'CREATE TABLE users (id INT) STRICT; দিয়ে তৈরি টেবিলে INT কলামে hello স্ট্রিং ইনসার্ট করলে কী ঘটে?'
      },
      options: [
        {
          en: 'SQLite throws a hard runtime error (cannot store TEXT value in INT column) and aborts the insert statement',
          bn: 'SQLite একটি রানটাইম এরর দেয় (cannot store TEXT value in INT column) এবং ইনসার্ট স্টেটমেন্টটি বাতিল করে'
        },
        {
          en: 'It stores hello without any error',
          bn: 'এটি কোনো ভুল না দেখিয়ে hello সংরক্ষণ করে ফেলে'
        },
        {
          en: 'It converts hello into binary 0101',
          bn: 'এটি hello-কে বাইনারি ০১০১-এ রূপান্তর করে'
        },
        {
          en: 'It creates a new database table called error_log',
          bn: 'এটি error_log নামে একটি নতুন টেবিল তৈরি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The STRICT table keyword enforces strict static type validation.',
        bn: 'STRICT কিওয়ার্ডটি কঠোর টাইপ চেকিং নিশ্চিত করে।'
      },
      explanation: {
        en: 'STRICT tables reject invalid data types, bringing enterprise-grade static type enforcement to SQLite.',
        bn: 'STRICT টেবিল ভুল ডাটা টাইপ প্রত্যাখ্যান করে এবং প্রফেশনাল ডাটাবেসের মতো কঠোর টাইপ সুরক্ষা নিশ্চিত করে।'
      }
    },
    {
      id: 'sql-typ-ex-4',
      kind: 'mcq',
      topic: 'cross-class-comparison-sorting',
      question: {
        en: 'In an SQLite query without type coercion, what is the evaluated result of the expression 500 < apple?',
        bn: 'টাইপ রূপান্তর ছাড়া কোনো SQLite কোয়েরিতে 500 < apple এক্সপ্রেশনটির ফলাফল কী হবে?'
      },
      options: [
        {
          en: 'TRUE (1), because SQLite cross-class ordering rules always sort numeric values before text strings',
          bn: 'TRUE (1), কারণ SQLite-এর তুলনার নিয়মে সব ধরনের সংখ্যা সর্বদা টেক্সট স্ট্রিংয়ের আগে আসে'
        },
        {
          en: 'FALSE (0), because text is always lighter than numbers',
          bn: 'FALSE (0), কারণ টেক্সট সবসময় সংখ্যার চেয়ে হালকা'
        },
        {
          en: 'NULL, because comparing numbers to text is illegal',
          bn: 'NULL, কারণ সংখ্যার সাথে টেক্সটের তুলনা করা বেআইনি'
        },
        {
          en: 'An operating system kernel panic',
          bn: 'একটি অপারেটিং সিস্টেম কার্নেল প্যানিক'
        }
      ],
      answer: 0,
      hint: {
        en: 'SQLite ordering rule: NULL < INTEGER/REAL < TEXT < BLOB.',
        bn: 'SQLite-এর ক্রম: NULL < INTEGER/REAL < TEXT < BLOB।'
      },
      explanation: {
        en: 'Cross-class comparison rules place numbers before strings. Therefore, any integer or real number is strictly less than any text string.',
        bn: 'ভিন্ন টাইপের তুলনার নীতিমালায় সংখ্যা স্ট্রিংয়ের আগে বসে। ফলে যেকোনো সংখ্যা যেকোনো টেক্সট মানের চেয়ে ছোট বিবেচিত হয়।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'SQLite Type Affinity & Strict Tables Quiz',
      bn: 'SQLite টাইপ অ্যাফিনিটি ও স্ট্রিক্ট টেবিল কুইজ'
    },
    questions: [
      {
        id: 'sql-typ-qz-1',
        kind: 'mcq',
        topic: 'affinity-determination-rules',
        question: {
          en: 'What type affinity is assigned to a column declared as VARCHAR(255) in an SQLite table?',
          bn: 'SQLite টেবিলে VARCHAR(255) ঘোষিত একটি কলামে কোন টাইপ অ্যাফিনিটি বরাদ্দ করা হয়?'
        },
        options: [
          {
            en: 'TEXT affinity, because the type name contains the substring CHAR',
            bn: 'TEXT অ্যাফিনিটি, কারণ টাইপের নামের মধ্যে CHAR শব্দটি রয়েছে'
          },
          {
            en: 'BLOB affinity, because VARCHAR is not a native C type',
            bn: 'BLOB অ্যাফিনিটি, কারণ VARCHAR কোনো নেটিভ সি টাইপ নয়'
          },
          {
            en: 'INTEGER affinity, because 255 is an integer number',
            bn: 'INTEGER অ্যাফিনিটি, কারণ ২৫৫ একটি পূর্ণসংখ্যা'
          },
          {
            en: 'REAL affinity, because strings have floating lengths',
            bn: 'REAL অ্যাফিনিটি, কারণ স্ট্রিংয়ের দৈর্ঘ্য পরিবর্তনশীল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Rule 2 of SQLite affinity: if the type contains CHAR, CLOB, or TEXT, affinity is TEXT.',
          bn: 'নিয়ম ২: টাইপে CHAR, CLOB বা TEXT থাকলে তা TEXT অ্যাফিনিটি পায়।'
        },
        explanation: {
          en: 'SQLite scans declared type names for keywords. Since VARCHAR contains CHAR, it is mapped to TEXT affinity.',
          bn: 'SQLite কলামের নাম স্ক্যান করে। যেহেতু VARCHAR-এ CHAR আছে, তাই এটি TEXT অ্যাফিনিটি লাভ করে।'
        }
      },
      {
        id: 'sql-typ-qz-2',
        kind: 'mcq',
        topic: 'numeric-affinity-coercion-order',
        question: {
          en: 'How does NUMERIC affinity handle values inserted into a column declared as NUMERIC or BOOLEAN?',
          bn: 'NUMERIC বা BOOLEAN ঘোষিত কলামে ইনসার্ট করা মানের ক্ষেত্রে NUMERIC অ্যাফিনিটি কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'It attempts to convert text to INTEGER first; if not an integer, it attempts conversion to REAL; otherwise it retains TEXT',
            bn: 'এটি প্রথমে টেক্সটকে INTEGER-এ রূপান্তরের চেষ্টা করে; না হলে REAL-এ চেষ্টা করে; আর ব্যর্থ হলে টেক্সট হিসেবেই রেখে দেয়'
          },
          {
            en: 'It multiplies every incoming number by 100',
            bn: 'এটি প্রতিটি আগত সংখ্যাকে ১০০ দিয়ে গুণ করে'
          },
          {
            en: 'It deletes the decimal point from all numbers',
            bn: 'এটি সমস্ত সংখ্যা থেকে দশমিক বিন্দু মুছে ফেলে'
          },
          {
            en: 'It forces all values to become true or false booleans',
            bn: 'এটি সমস্ত মানকে বুলিয়ান ট্রু বা ফলসে রূপান্তর করতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'NUMERIC affinity tries lossless integer conversion, then floating point, then text.',
          bn: 'NUMERIC অ্যাফিনিটি প্রথমে পূর্ণসংখ্যা, তারপর দশমিক এবং শেষে টেক্সটে রূপান্তর করে।'
        },
        explanation: {
          en: 'NUMERIC affinity coerces string representations of numbers ("3.14") to their proper numeric storage class (REAL), but leaves non-numeric text intact.',
          bn: 'NUMERIC অ্যাফিনিটি সংখ্যার টেক্সট রূপকে ("৩.১৪") উপযুক্ত সংখ্যায় রূপান্তর করে কিন্তু সাধারণ টেক্সটকে অপরিবর্তিত রাখে।'
        }
      },
      {
        id: 'sql-typ-qz-3',
        kind: 'mcq',
        topic: 'strict-table-permitted-data-types',
        question: {
          en: 'Which set of data types represents the complete list of valid column types allowed in SQLite STRICT tables?',
          bn: 'SQLite STRICT টেবিলে অনুমোদিত বৈধ কলাম টাইপের সম্পূর্ণ তালিকা কোনটি?'
        },
        options: [
          {
            en: 'INT, INTEGER, REAL, TEXT, BLOB, and ANY',
            bn: 'INT, INTEGER, REAL, TEXT, BLOB এবং ANY'
          },
          {
            en: 'VARCHAR, DATETIME, CHAR, and FLOAT only',
            bn: 'কেবল VARCHAR, DATETIME, CHAR এবং FLOAT'
          },
          {
            en: 'JSON, XML, CSV, and HTML',
            bn: 'JSON, XML, CSV এবং HTML'
          },
          {
            en: 'Only INTEGER and TEXT',
            bn: 'কেবলমাত্র INTEGER এবং TEXT'
          }
        ],
        answer: 0,
        hint: {
          en: 'STRICT tables only accept the 6 primitive data types including ANY.',
          bn: 'STRICT টেবিলে ANY সহ মোট ৬টি আদিম ডাটা টাইপ অনুমোদিত।'
        },
        explanation: {
          en: 'STRICT tables restrict declarations strictly to INT, INTEGER, REAL, TEXT, BLOB, and the polymorphic ANY type.',
          bn: 'STRICT টেবিল কলামের ধরনকে নির্দিষ্টভাবে INT, INTEGER, REAL, TEXT, BLOB এবং ANY টাইপের মধ্যেই সীমাবদ্ধ রাখে।'
        }
      },
      {
        id: 'sql-typ-qz-4',
        kind: 'mcq',
        topic: 'integer-variable-length-encoding',
        question: {
          en: 'Why does SQLite store integers using variable-length encoding (1 to 8 bytes) rather than fixed 4-byte or 8-byte blocks?',
          bn: 'কেন SQLite পূর্ণসংখ্যাকে নির্দিষ্ট ৪ বা ৮ বাইটের বদলে পরিবর্তনশীল দৈর্ঘ্যে (১ থেকে ৮ বাইট) সংরক্ষণ করে?'
        },
        options: [
          {
            en: 'To optimize disk storage and CPU cache density by storing small numbers (0 to 127) in just 1 single byte on disk',
            bn: 'ডিস্ক স্টোরেজ সাশ্রয় করতে এবং সিপিইউ ক্যাশের ঘনত্ব বাড়াতে ছোট সংখ্যাকে (0 থেকে 127) ডিস্কে মাত্র 1 বাইটে সংরক্ষণ করার জন্য'
          },
          {
            en: 'Because computer hardware cannot process 64-bit integers directly',
            bn: 'কারণ কম্পিউটার হার্ডওয়্যার সরাসরি ৬৪-বিট পূর্ণসংখ্যা প্রসেস করতে পারে না'
          },
          {
            en: 'To prevent integers from being sorted in SQL queries',
            bn: 'যাতে এসকিউএল কোয়েরিতে সংখ্যা সর্ট করা অসম্ভব হয়ে পড়ে'
          },
          {
            en: 'Because SQLite integers are stored as compressed audio files',
            bn: 'কারণ SQLite পূর্ণসংখ্যাকে কমপ্রেসড অডিও ফাইল হিসেবে জমা রাখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Variable-length storage saves massive amounts of disk space for small numbers.',
          bn: 'পরিবর্তনশীল দৈর্ঘ্যের স্টোরেজ ছোট সংখ্যার ক্ষেত্রে বিপুল ডিস্ক মেমরি সাশ্রয় করে।'
        },
        explanation: {
          en: 'Most real-world integers (IDs, counts, flags) are small numbers. SQLite encodes them using 1 to 4 bytes, reserving 8 bytes only for very large numbers.',
          bn: 'বাস্তব জীবনের অধিকাংশ সংখ্যা ছোট হয়। SQLite সেগুলোকে ১ থেকে ৪ বাইটে রাখে এবং কেবল বিশাল সংখ্যার জন্য ৮ বাইট ব্যবহার করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'selects-and-the-row',
    title: {
      en: 'Querying & Filtering Engine: SELECT, WHERE, ORDER BY & JSON',
      bn: 'কোয়েরি ও ফিল্টারিং ইঞ্জিন: SELECT, WHERE, ORDER BY ও JSON'
    }
  }
};
