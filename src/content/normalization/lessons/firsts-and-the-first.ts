import type { Lesson } from '../../../lib/types';

export const FirstsAndTheFirstLesson: Lesson = {
  slug: 'firsts-and-the-first',
  tech: 'normalization',
  title: {
    en: 'First Normal Form (1NF): Atomicity & Repeating Groups',
    bn: '১ম নরমাল ফর্ম (1NF): অবিভাজ্যতা ও পুনরাবৃত্তি দূরীকরণ'
  },
  summary: {
    en: 'Eliminate multi-valued anomalies with First Normal Form (1NF): master atomic attribute values, eradicate comma-delimited strings and repeating column groups, and enforce primary key uniqueness.',
    bn: '১ম নরমাল ফর্ম (1NF) দিয়ে মাল্টি-ভ্যালুড ত্রুটি দূর করুন: অ্যাটমিক কলাম মান নিশ্চিতকরণ, কমাযুক্ত স্ট্রিং ও পুনরাবৃত্তিমূলক কলাম গ্রুপ উচ্ছেদ এবং প্রাইমারি কি-এর অনন্যতা রক্ষা।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'what-is-1nf',
      text: {
        en: 'The Atomicity Rule: Each Cell Holds Exactly One Value',
        bn: 'অবিভাজ্যতার নিয়ম: প্রতিটি সেলে কেবল একটিই মান থাকবে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In 1970, computer scientist Edgar F. Codd published the relational model, establishing First Normal Form (1NF) as the baseline foundation for database integrity. A relational table satisfies 1NF if and only if every attribute domain contains exclusively atomic (indivisible) scalar values. Under 1NF, a database cell cannot store multi-valued arrays, comma-delimited strings, or nested objects.',
        bn: '১৯৭০ সালে কম্পিউটার বিজ্ঞানী এডগার এফ কড রিলেশনাল মডেল প্রকাশ করেন, যেখানে ডাটাবেসের অখণ্ডতা রক্ষার মূল ভিত্তি হিসেবে ১ম নরমাল ফর্ম (1NF) প্রতিষ্ঠা করা হয়। একটি রিলেশনাল টেবিল ১ম নরমাল ফর্ম বা 1NF শর্ত পূরণ করে যদি এবং কেবল যদি প্রতিটি কলামের মান পুরোপুরি অ্যাটমিক বা অবিভাজ্য একক স্কেলার মান ধারণ করে। ১ম নরমাল ফর্মের অধীনে কোনো ডাটাবেস সেলে মাল্টি-ভ্যালুড অ্যারে, কমাযুক্ত স্ট্রিং বা নেস্টেড অবজেক্ট সংরক্ষণ করা যায় না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Additionally, 1NF mandates that each row must be uniquely identifiable by a designated primary key, and column domains must be homogenous. Storing multiple phone numbers or course codes inside a single text cell violates atomicity. When values are grouped together inside strings, the database query planner cannot index individual values, execute relational joins, or enforce foreign key integrity.',
        bn: 'এছাড়াও 1NF নির্দেশ করে যে প্রতিটি সারিকে একটি নির্দিষ্ট প্রাইমারি কি দ্বারা এককভাবে চিহ্নিত করা আবশ্যক এবং প্রতিটি কলামের ডাটা টাইপ অভিন্ন হতে হবে। একটিমাত্র টেক্সট সেলে একাধিক ফোন নম্বর বা কোর্সের কোড রাখা অবিভাজ্যতার নিয়ম ভঙ্গ করে। যখন স্ট্রিংয়ের ভেতরে একাধিক মান একসাথে আটকে থাকে, তখন ডাটাবেস কোয়েরি প্ল্যানার একক মানের ওপর ইনডেক্স তৈরি করতে পারে না, রিলেশনাল জয়েন চালাতে পারে না এবং ফরেন কি অখণ্ডতাও রক্ষা করতে পারে না।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Decomposing Non-Atomic Cells into 1NF Relational Tuples',
        bn: 'নন-অ্যাটমিক সেলকে ১ম নরমাল ফর্মের রিলেশনাল সারিতে রূপান্তর'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="First Normal Form 1NF table transformation diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Left Side: Unnormalized Table (0NF) -->
  <g transform="translate(30, 30)">
    <rect width="320" height="180" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="320" height="32" rx="8" fill="#7f1d1d" />
    <text x="160" y="21" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">Unnormalized: Comma-Separated Values</text>
    
    <!-- Table Headers -->
    <text x="30" y="52" fill="#94a3b8" font-size="11" font-weight="bold">student_id</text>
    <text x="110" y="52" fill="#94a3b8" font-size="11" font-weight="bold">name</text>
    <text x="210" y="52" fill="#ef4444" font-size="11" font-weight="bold">courses [VIOLATION]</text>
    <line x1="10" y1="62" x2="310" y2="62" stroke="#475569" stroke-width="1" />

    <!-- Row 1 -->
    <text x="35" y="90" fill="#f8fafc" font-size="11">101</text>
    <text x="110" y="90" fill="#f8fafc" font-size="11">Rahim</text>
    <rect x="180" y="74" width="130" height="24" rx="4" fill="#991b1b" />
    <text x="245" y="90" fill="#fecaca" font-size="10" text-anchor="middle">CS101, MATH201, PHY101</text>

    <!-- Row 2 -->
    <text x="35" y="130" fill="#f8fafc" font-size="11">102</text>
    <text x="110" y="130" fill="#f8fafc" font-size="11">Karim</text>
    <rect x="180" y="114" width="130" height="24" rx="4" fill="#991b1b" />
    <text x="245" y="130" fill="#fecaca" font-size="10" text-anchor="middle">ENG101, CS101</text>

    <text x="160" y="168" fill="#f87171" font-size="10" text-anchor="middle">Cannot index, foreign-key, or aggregate courses</text>
  </g>

  <!-- Transform Arrow -->
  <path d="M 365 120 L 395 120" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow)" />
  <text x="380" y="110" fill="#38bdf8" font-size="10" text-anchor="middle" font-weight="bold">1NF</text>

  <!-- Right Side: 1NF Atomic Table -->
  <g transform="translate(410, 30)">
    <rect width="300" height="180" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="300" height="32" rx="8" fill="#064e3b" />
    <text x="150" y="21" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">1NF Compliant: Atomic Course Rows</text>
    
    <!-- Table Headers -->
    <text x="25" y="52" fill="#94a3b8" font-size="11" font-weight="bold">enrollment_id</text>
    <text x="125" y="52" fill="#94a3b8" font-size="11" font-weight="bold">student_id</text>
    <text x="220" y="52" fill="#34d399" font-size="11" font-weight="bold">course_code</text>
    <line x1="10" y1="62" x2="290" y2="62" stroke="#475569" stroke-width="1" />

    <!-- Rows -->
    <text x="50" y="82" fill="#f8fafc" font-size="10">1</text>
    <text x="145" y="82" fill="#f8fafc" font-size="10">101</text>
    <text x="235" y="82" fill="#34d399" font-size="10">CS101</text>

    <text x="50" y="104" fill="#f8fafc" font-size="10">2</text>
    <text x="145" y="104" fill="#f8fafc" font-size="10">101</text>
    <text x="235" y="104" fill="#34d399" font-size="10">MATH201</text>

    <text x="50" y="126" fill="#f8fafc" font-size="10">3</text>
    <text x="145" y="126" fill="#f8fafc" font-size="10">101</text>
    <text x="235" y="126" fill="#34d399" font-size="10">PHY101</text>

    <text x="150" y="168" fill="#34d399" font-size="10" text-anchor="middle">Every cell atomic, fully indexable &amp; joinable</text>
  </g>

  <!-- Summary Banner -->
  <g transform="translate(30, 230)">
    <rect width="680" height="75" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="25" y="24" fill="#f8fafc" font-size="12" font-weight="bold">The 3 Golden Invariants of First Normal Form (1NF)</text>
    <text x="25" y="44" fill="#cbd5e1" font-size="11">1. Atomicity: Each column contains indivisible, single scalar values (no comma lists or nested structures).</text>
    <text x="25" y="62" fill="#cbd5e1" font-size="11">2. No Repeating Groups: Rather than columns phone_1, phone_2, store phones across distinct rows in a child table.</text>
  </g>
</svg>`,
      caption: {
        en: 'Transforming unnormalized comma-separated lists into atomic, first normal form (1NF) relational rows.',
        bn: 'অসংগঠিত কমাযুক্ত তালিকাকে ১ম নরমাল ফর্মের (1NF) অবিভাজ্য রিলেশনাল সারিতে রূপান্তরের প্রক্রিয়া।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'First Normal Form (1NF)',
          def: {
            en: 'A relational state where every attribute cell holds exactly one atomic value, rows are unique, and repeating column groups are eradicated.',
            bn: 'রিলেশনাল টেবিলের এমন একটি অবস্থা যেখানে প্রতিটি সেলে কেবল একটি অবিভাজ্য মান থাকে, সারিগুলো অনন্য হয় এবং পুনরাবৃত্তিমূলক কলাম বাদ দেওয়া হয়।'
          }
        },
        {
          term: 'Atomic Value',
          def: {
            en: 'An indivisible, primitive scalar data item (such as an integer, date, or simple string) that cannot be broken down further by the relational engine.',
            bn: 'একটি অবিভাজ্য আদিম স্কেলার ডাটা মান (যেমন পূর্ণসংখ্যা, তারিখ বা সাধারণ টেক্সট) যা ডাটাবেস ইঞ্জিন দ্বারা আর ছোট অংশে ভাগ করা যায় না।'
          }
        },
        {
          term: 'Repeating Group',
          def: {
            en: 'An anti-pattern where multiple instances of the same logical data are stored as arrays in a single cell or across sequential columns (phone_1, phone_2).',
            bn: 'একটি ক্ষতিকর নকশা যেখানে একই ধরনের ডাটা একটি সেলে অ্যারে আকারে অথবা পাশাপাশি একাধিক কলামে (phone_1, phone_2) রাখা হয়।'
          }
        },
        {
          term: 'Tuple Unpacking',
          def: {
            en: 'The architectural process of normalizing comma-delimited or array attributes into separate, foreign-key-linked relational rows.',
            bn: 'কমাযুক্ত স্ট্রিং বা অ্যারে মানগুলোকে পৃথক ফরেন কি যুক্ত রিলেশনাল সারিতে বিভক্ত করার প্রক্রিয়া।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'comma-anti-pattern-hazards',
      text: {
        en: 'The Computational Cost of Comma-Delimited Columns',
        bn: 'কমাযুক্ত কলামের মারাত্মক পারফরম্যান্স ক্ষতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When developers store comma-separated strings like product_ids = \'101, 102, 105\' in a table cell, relational database capabilities collapse. To find orders containing product 102, the query must execute a wildcard text match like WHERE product_ids LIKE \'%102%\'. This string scan bypasses all B-Tree indexes, forcing the database engine to inspect every disk page via a slow sequential scan.',
        bn: 'যখন কোনো ডেভেলপার একটি টেবিল সেলে product_ids = \'101, 102, 105\' এর মতো কমাযুক্ত স্ট্রিং জমা রাখেন, তখন রিলেশনাল ডাটাবেসের সমস্ত ক্ষমতা ভেঙে পড়ে। ১০২ নম্বর পণ্যটি কোন কোন অর্ডারে আছে তা খুঁজতে কোয়েরিকে WHERE product_ids LIKE \'%102%\' এর মতো টেক্সট ম্যাচ চালাতে হয়। এই টেক্সট স্ক্যান সমস্ত বি-ট্রি ইনডেক্সকে অকার্যকর করে দেয় এবং ডিস্কের প্রতিটি পেজ স্ক্যান করতে বাধ্য করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Wildcard string searches also produce dangerous false positives: searching for product ID 10 matches 101, 102, and 105. Furthermore, foreign key constraints cannot validate individual numbers locked inside a text string. If an admin deletes product 102 from the products catalog, the database cannot prevent orphaned references inside text strings. Decomposing repeating lists into 1NF atomic rows unlocks indexed B-Tree seeks and enforces cascade rules.',
        bn: 'ওয়াইল্ডকার্ড টেক্সট সার্চ ভয়াবহ ভুল ফলাফল তৈরি করে: যেমন ১০ নম্বর আইডি খুঁজতে গেলে তা ১০১, ১০২ এবং ১০৫-এর সাথেও মিলে যায়। অধিকন্তু, একটি টেক্সট স্ট্রিংয়ের ভেতরে বন্দি থাকা পৃথক সংখ্যার ওপর ফরেন কি কনস্ট্রেইন্ট প্রয়োগ করা অসম্ভব। যদি কোনো অ্যাডমিন পণ্য তালিকা থেকে ১০২ মুছে ফেলেন, তবে ডাটাবেস সেই টেক্সট স্ট্রিংয়ের রেফারেন্স রক্ষা করতে পারে না। পুনরাবৃত্তিমূলক তালিকাকে ১ম নরমাল ফর্মের অ্যাটমিক সারিতে ভাগ করলে বি-ট্রি ইনডেক্স সক্রিয় হয় এবং ক্যাসকেড নিয়ম রক্ষা পায়।'
      }
    },
    {
      type: 'heading',
      id: 'node-1nf-engine',
      text: {
        en: 'Executable 1NF Engine: Decomposing Comma Lists into Atomic Tuples',
        bn: 'রানযোগ্য ১ম নরমাল ফর্ম ইঞ্জিন: কমাযুক্ত তালিকাকে অ্যাটমিক সারিতে রূপান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js normalization script demonstrating the transformation from unnormalized non-atomic rows into First Normal Form (1NF). It unpacks 1 unnormalized student record into 3 atomic relational tuples, enforces single scalar values, and validates foreign key linkages.',
        bn: 'নিচে অসংগঠিত নন-অ্যাটমিক সারি থেকে ১ম নরমাল ফর্মে (1NF) রূপান্তর প্রদর্শনকারী একটি সম্পূর্ণ Node.js স্ক্রিপ্ট দেওয়া হলো। এটি ১টি অসংগঠিত শিক্ষার্থীর রেকর্ডকে ৩টি অ্যাটমিক রিলেশনাল সারিতে রূপান্তর করে, প্রতিটি সেলে একক মান নিশ্চিত করে এবং ফরেন কি সম্পর্ক রক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Unpack unnormalized multi-valued student enrollments into 3 atomic 1NF relational tuples',
        bn: 'অসংগঠিত মাল্টি-ভ্যালুড শিক্ষার্থীর রেকর্ডকে ৩টি অবিভাজ্য ১ম নরমাল ফর্মের সারিতে রূপান্তর'
      },
      code: `// First Normal Form (1NF) Normalization Engine
const unnormalizedStudent = {
  student_id: 101,
  name: 'Rahim',
  enrolled_courses: 'CS101, MATH201, PHY101' // Multi-valued violation of 1NF
};

// Step 1: Parse multi-valued string into discrete atomic course elements
const rawCourseCodes = unnormalizedStudent.enrolled_courses
  .split(',')
  .map(code => code.trim());

// Step 2: Generate atomic 1NF compliant tuples with surrogate primary keys
const normalizedTuples = rawCourseCodes.map((course_code, index) => ({
  enrollment_id: index + 1,
  student_id: unnormalizedStudent.student_id,
  course_code: course_code
}));

// Invariant: Verify every cell contains a discrete scalar (zero commas)
const hasNoCommaResiduals = normalizedTuples.every(
  t => typeof t.course_code === 'string' && !t.course_code.includes(',')
);

// Verify foreign key integrity linkage
const isForeignKeyLinked = normalizedTuples.every(
  t => t.student_id === unnormalizedStudent.student_id
);

console.log(\`[1NF Normalizer] Unpacked 1 unnormalized student record into \${normalizedTuples.length} atomic relational tuples.\`);
console.log(\`[Atomicity Invariant] All column values are discrete single scalars; zero comma lists remaining (\${hasNoCommaResiduals}).\`);
console.log(\`[Relational Integrity] Foreign key linkage preserved across all \${normalizedTuples.length} normalized course enrollments (\${isForeignKeyLinked}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Beware the Numbered Column Anti-Pattern (contact_1, contact_2)',
        bn: 'নম্বরযুক্ত কলাম নকশা এড়িয়ে চলুন (contact_1, contact_2)'
      },
      text: {
        en: 'Designing columns like contact_1, contact_2, and contact_3 to avoid comma lists is another common 1NF violation. When an account acquires 4 phone numbers, engineers must alter table schemas to support extra slots. For records with only 1 entry, unused columns waste storage as empty NULLs. Always extract repeated attributes into a dedicated child table.',
        bn: 'কমাযুক্ত স্ট্রিং এড়াতে contact_1, contact_2 এবং contact_3 এর মতো পাশাপাশি কলাম তৈরি করাও ১ম নরমাল ফর্ম লঙ্ঘনের একটি সাধারণ রূপ। কোনো ব্যবহারকারীর ৪টি ফোন নম্বর থাকলে নতুন স্লট যোগ করতে স্কিমা পরিবর্তন করতে হয়। আর ১টি মান থাকা রেকর্ডের ক্ষেত্রে খালি কলামগুলো NULL দিয়ে জায়গা নষ্ট করে। তাই পুনরাবৃত্তিমূলক তথ্যকে সর্বদা একটি পৃথক চাইল্ড টেবিলে রাখুন।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: '1NF Atomicity Validator',
        bn: '১ম নরমাল ফর্ম অবিভাজ্যতা যাচাইকারী'
      },
      description: {
        en: 'Detect 1NF violations by testing whether record columns contain commas, JSON arrays, or multi-valued lists.',
        bn: 'কলামে কমা, JSON অ্যারে বা মাল্টি-ভ্যালুড তালিকা আছে কিনা তা পরীক্ষা করে ১ম নরমাল ফর্ম লঙ্ঘন শনাক্ত করুন।'
      },
      code: `function validate1NF(record) {
  for (const [key, value] of Object.entries(record)) {
    if (typeof value === 'string' && value.includes(',')) {
      return \`VIOLATION_1NF: Column \${key} contains non-atomic comma list\`;
    }
    if (Array.isArray(value)) {
      return \`VIOLATION_1NF: Column \${key} contains non-atomic array\`;
    }
  }
  return 'COMPLIANT_1NF';
}

console.log('Record A:', validate1NF({ id: 1, tags: 'news,tech,sports' }));
console.log('Record B:', validate1NF({ id: 1, tag: 'news' }));`,
      tests: [
        {
          name: {
            en: 'Flags comma-separated list as 1NF violation',
            bn: 'কমাযুক্ত তালিকাকে ১ম নরমাল ফর্ম লঙ্ঘন হিসেবে চিহ্নিত করে'
          },
          expected: 'Record A: VIOLATION_1NF: Column tags contains non-atomic comma list'
        },
        {
          name: {
            en: 'Passes atomic single-value record as 1NF compliant',
            bn: 'অবিভাজ্য একক মানের রেকর্ডকে ১ম নরমাল ফর্মের সাথে সামঞ্জস্যপূর্ণ হিসেবে অনুমোদন করে'
          },
          expected: 'Record B: COMPLIANT_1NF'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'norm-1nf-ex-1',
      kind: 'mcq',
      topic: '1nf-core-requirements',
      question: {
        en: 'Which of the following conditions is strictly required for a table to achieve First Normal Form (1NF)?',
        bn: 'একটি টেবিল ১ম নরমাল ফর্ম (1NF) অর্জন করতে নিচের কোন শর্তটি পূরণ করা কঠোরভাবে বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'Every attribute column must hold only indivisible, atomic values, with no repeating groups or multi-valued lists, and each row identified by a primary key',
          bn: 'প্রতিটি কলামে অবশ্যই একক অবিভাজ্য মান থাকতে হবে, কোনো পুনরাবৃত্তিমূলক গ্রুপ বা তালিকা থাকা যাবে না এবং প্রতিটি রো প্রাইমারি কি দিয়ে চিহ্নিত হতে হবে'
        },
        {
          en: 'The table must contain at least 1 million records before normalization begins',
          bn: 'নরমালাইজেশন শুরুর আগে টেবিলে কমপক্ষে ১০ লক্ষ রেকর্ড থাকতে হবে'
        },
        {
          en: 'All column names must be written exclusively in uppercase letters',
          bn: 'সকল কলামের নাম শুধুমাত্র বড় হাতের অক্ষরে লিখতে হবে'
        },
        {
          en: 'The table must be stored in a cloud data center located in Europe',
          bn: 'টেবিলটি ইউরোপে অবস্থিত কোনো ক্লাউড ডাটা সেন্টারে সংরক্ষণ করতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Atomicity and primary keys are the 2 non-negotiable pillars of 1NF.',
        bn: 'অবিভাজ্যতা এবং প্রাইমারি কি হলো 1NF (১ম নরমাল ফর্ম)-এর ২টি অলঙ্ঘনীয় স্তম্ভ।'
      },
      explanation: {
        en: 'First Normal Form mandates that all attribute values are atomic (no arrays, sets, or comma strings) and that a primary key uniquely identifies every tuple in the relation.',
        bn: '১ম নরমাল ফর্ম দাবি করে যে প্রতিটি মানকে অবশ্যই অবিভাজ্য হতে হবে (কোনো অ্যারে বা কমাযুক্ত স্ট্রিং চলবে না) এবং একটি প্রাইমারি কি দ্বারা প্রতিটি সারি চিহ্নিত হতে হবে।'
      }
    },
    {
      id: 'norm-1nf-ex-2',
      kind: 'mcq',
      topic: 'comma-list-indexing-penalty',
      question: {
        en: 'Why does storing a comma-separated list of IDs like "10, 12, 18" in a single column cripple query performance?',
        bn: 'একটি একক কলামে "১০, ১২, ১৮" এর মতো কমাযুক্ত আইডির তালিকা জমা রাখলে কেন কোয়েরির পারফরম্যান্স মারাত্মকভাবে ক্ষতিগ্রস্ত হয়?'
      },
      options: [
        {
          en: 'The database engine cannot use B-Tree indexes for direct lookups, forcing an O(N) full table scan with wildcard string matching for every query',
          bn: 'ডাটাবেস ইঞ্জিন সরাসরি অনুসন্ধানের জন্য বি-ট্রি ইনডেক্স ব্যবহার করতে পারে না, ফলে প্রতিটি কোয়েরিতে ওয়াইল্ডকার্ড ম্যাচিং সহ ফুল টেবিল স্ক্যান চালাতে হয়'
        },
        {
          en: 'Comma characters cause database hard drives to overheat physically',
          bn: 'কমা অক্ষরগুলো ডাটাবেসের হার্ডডিস্কে সরাসরি অতিরিক্ত তাপ সৃষ্টি করে'
        },
        {
          en: 'SQL cannot display comma characters on computer monitors',
          bn: 'কম্পিউটার মনিটরে SQL কমা অক্ষর প্রদর্শন করতে পারে না'
        },
        {
          en: 'The operating system deletes the database file whenever a comma is encountered',
          bn: 'কমা পেলেই অপারেটিং সিস্টেম সম্পূর্ণ ডাটাবেস ফাইলটি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Wildcard LIKE scans (%id%) prevent the query optimizer from leveraging B-Tree index trees.',
        bn: 'ওয়াইল্ডকার্ড LIKE স্ক্যান (%id%) কোয়েরি অপ্টিমাইজারকে বি-ট্রি ইনডেক্স ব্যবহারে বাধা দেয়।'
      },
      explanation: {
        en: 'To search within a comma-delimited string, the database must execute WHERE col LIKE \'%12%\'. Because the search target does not start with a constant prefix, index seeks are impossible, forcing a slow sequential scan across all rows.',
        bn: 'কমাযুক্ত স্ট্রিংয়ে খুঁজতে ডাটাবেসকে WHERE col LIKE \'%12%\' চালাতে হয়। শুরুতে নির্দিষ্ট কোনো প্রেফিক্স না থাকায় ইনডেক্স সিক চালানো অসম্ভব হয়ে পড়ে এবং পুরো টেবিল স্ক্যান করতে হয়।'
      }
    },
    {
      id: 'norm-1nf-ex-3',
      kind: 'mcq',
      topic: 'numbered-column-anti-pattern',
      question: {
        en: 'What major architectural problem occurs when an engineer uses numbered columns like phone_1, phone_2, phone_3 instead of a separate table?',
        bn: 'একটি পৃথক টেবিল ব্যবহার না করে phone_1, phone_2, phone_3 এর মতো নম্বরযুক্ত কলাম তৈরি করলে কোন প্রধান স্থাপত্য সমস্যাটি দেখা দেয়?'
      },
      options: [
        {
          en: 'It wastes disk space with NULL values for single-phone users, caps the maximum phones at 3, and requires slow ALTER TABLE schema modifications to expand',
          bn: 'এটি একটি ফোন থাকা ব্যবহারকারীদের জন্য NULL মান দিয়ে জায়গা নষ্ট করে, সর্বোচ্চ ৩টি ফোনে সীমাবদ্ধ করে এবং বাড়ানোর জন্য ধীরগতির ALTER TABLE চালাতে বাধ্য করে'
        },
        {
          en: 'Numbered columns cannot store integers',
          bn: 'নম্বরযুক্ত কলামে পূর্ণসংখ্যা সংরক্ষণ করা যায় না'
        },
        {
          en: 'Numbered columns crash web browsers when rendering tables',
          bn: 'নম্বরযুক্ত কলাম টেবিল রেন্ডার করার সময় ওয়েব ব্রাউজার ক্র্যাশ করায়'
        },
        {
          en: 'Numbered columns automatically encrypt all data permanently',
          bn: 'নম্বরযুক্ত কলাম স্বয়ংক্রিয়ভাবে تمام ডাটা স্থায়ীভাবে এনক্রিপ্ট করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Adding more items requires schema DDL alterations and wastes space for sparse users.',
        bn: 'নতুন আইটেম যোগ করতে স্কিমা পরিবর্তন করতে হয় এবং কম আইটেম থাকা ব্যবহারকারীদের জন্য জায়গা নষ্ট হয়।'
      },
      explanation: {
        en: 'Numbered columns impose an arbitrary ceiling (only 3 phones), force awkward queries (WHERE phone_1 = ? OR phone_2 = ? OR phone_3 = ?), and leave empty NULL columns for the vast majority of records.',
        bn: 'নম্বরযুক্ত কলাম একটি কৃত্রিম সীমা তৈরি করে (সর্বোচ্চ ৩টি ফোন), জটিল কোয়েরি করতে বাধ্য করে এবং অধিকাংশ রেকর্ডের জন্য অপ্রয়োজনীয় NULL কলাম জমিয়ে রাখে।'
      }
    },
    {
      id: 'norm-1nf-ex-4',
      kind: 'mcq',
      topic: 'child-table-extraction-remedy',
      question: {
        en: 'What is the correct relational engineering technique to bring a table with repeating attributes into clean First Normal Form (1NF)?',
        bn: 'পুনরাবৃত্তিমূলক অ্যাট্রিবিউট থাকা একটি টেবিলকে ১ম নরমাল ফর্মে (1NF) রূপান্তরের সঠিক রিলেশনাল ইঞ্জিনিয়ারিং কৌশল কোনটি?'
      },
      options: [
        {
          en: 'Extract the repeating attribute into a separate child table, linking each child row back to the parent table via a Foreign Key',
          bn: 'পুনরাবৃত্তিমূলক অ্যাট্রিবিউটটিকে একটি পৃথক চাইল্ড টেবিলে নিয়ে যান এবং প্রতিটি চাইল্ড রো-কে ফরেন কি-এর মাধ্যমে প্যারেন্ট টেবিলের সাথে সংযুক্ত করুন'
        },
        {
          en: 'Delete all records from the database table completely',
          bn: 'ডাটাবেস টেবিল থেকে تمام রেকর্ড সম্পূর্ণ মুছে ফেলুন'
        },
        {
          en: 'Merge all database tables into a single giant text document',
          bn: 'সমস্ত ডাটাবেস টেবিলকে একটি বিশালাকার টেক্সট ডকুমেন্টে রূপান্তর করুন'
        },
        {
          en: 'Store data in cookie headers inside HTTP requests',
          bn: 'HTTP রিকোয়েস্টের ভেতরের কুকি হেডারে ডাটা সংরক্ষণ করুন'
        }
      ],
      answer: 0,
      hint: {
        en: 'A 1-to-many relationship should always be modeled with a child table and foreign key.',
        bn: 'একটি ১-টু-মেনি সম্পর্ক সর্বদা একটি চাইল্ড টেবিল এবং ফরেন কি দিয়ে মডেল করা উচিত।'
      },
      explanation: {
        en: 'The correct relational design separates repeating groups into a dedicated child relation. Each child row holds one atomic value alongside a foreign key referencing the parent entity\'s primary key.',
        bn: 'সঠিক রিলেশনাল ডিজাইন পুনরাবৃত্তিমূলক গ্রুপকে একটি নিবেদিত চাইল্ড টেবিলে আলাদা করে। প্রতিটি চাইল্ড রো একটি অবিভাজ্য মানের সাথে প্যারেন্ট টেবিলের প্রাইমারি কি নির্দেশক ফরেন কি ধারণ করে।'
      }
    }
  ],
  quiz: {
    id: 'firsts-and-the-first-quiz',
    title: {
      en: 'First Normal Form (1NF) Mastery Quiz',
      bn: '১ম নরমাল ফর্ম (1NF) দক্ষতা যাচাই কুইজ'
    },
    questions: [
      {
        id: 'norm-1nf-qz-1',
        kind: 'mcq',
        topic: 'json-columns-1nf-debate',
        question: {
          en: 'In modern relational databases like PostgreSQL, when does storing a JSON array in a column violate the spirit of First Normal Form (1NF)?',
          bn: 'PostgreSQL-এর মতো আধুনিক ডাটাবেসে একটি কলামে JSON অ্যারে জমা রাখা কখন ১ম নরমাল ফর্মের (1NF) মূল নীতি লঙ্ঘন করে?'
        },
        options: [
          {
            en: 'When individual elements within the JSON array require relational joins, foreign key enforcement, or independent transactional mutations',
            bn: 'যখন JSON অ্যারের ভেতরের পৃথক উপাদানগুলোর সাথে রিলেশনাল জয়েন, ফরেন কি প্রয়োগ বা স্বাধীন ট্রানজ্যাকশন পরিবর্তনের প্রয়োজন হয়'
          },
          {
            en: 'Whenever the JSON document contains more than 10 bytes of text',
            bn: 'যখনই JSON ডকুমেন্টে ১০ বাইটের বেশি টেক্সট থাকে'
          },
          {
            en: 'JSON is strictly forbidden in all relational databases by international law',
            bn: 'আন্তর্জাতিক আইন অনুযায়ী تمام রিলেশনাল ডাটাবেসে JSON ব্যবহার সম্পূর্ণ নিষিদ্ধ'
          },
          {
            en: 'Only when the database server is running on Windows operating systems',
            bn: 'কেবল তখনই যখন ডাটাবেস সার্ভার উইন্ডোজ অপারেটিং সিস্টেমে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If you need to query, join, or constrain internal elements, it belongs in a relational child table.',
          bn: 'যদি ভেতরের উপাদান নিয়ে কোয়েরি, জয়েন বা কনস্ট্রেইন্ট করতে হয়, তবে তা চাইল্ড টেবিলে রাখা উচিত।'
        },
        explanation: {
          en: 'Storing unstructured JSON payloads is acceptable for opaque documents, but using JSON to store entities that participate in foreign keys or relational joins breaks relational integrity and violates 1NF principles.',
          bn: 'অপরিবর্তনশীল ডকুমেন্টের জন্য JSON ব্যবহার উপযোগী হলেও যেসব এন্টিটিতে ফরেন কি বা রিলেশনাল জয়েন প্রয়োজন সেগুলোকে JSON-এ রাখা রিলেশনাল অখণ্ডতা নষ্ট করে এবং 1NF নীতি ভঙ্গ করে।'
        }
      },
      {
        id: 'norm-1nf-qz-2',
        kind: 'mcq',
        topic: 'homogenous-domain-rule',
        question: {
          en: 'What does the 1NF requirement of "homogenous column domains" mean for a relational column?',
          bn: '১ম নরমাল ফর্মের "অভিন্ন কলাম ডোমেইন (homogenous column domains)" শর্তটির অর্থ কী?'
        },
        options: [
          {
            en: 'Every entry in a given column must share the same data type and semantic meaning across all rows',
            bn: 'একটি নির্দিষ্ট কলামের প্রতিটি এন্ট্রির ডাটা টাইপ এবং অর্থ সমস্ত সারিতে হুবহু একই হতে হবে'
          },
          {
            en: 'All columns in the table must share the exact same column name',
            bn: 'টেবিলের সমস্ত কলামের নাম হুবহু এক হতে হবে'
          },
          {
            en: 'All table rows must have been created on the same day of the week',
            bn: 'টেবিলের تمام সারি সপ্তাহের একই দিনে তৈরি হতে হবে'
          },
          {
            en: 'The database administrator must own every computer connected to the network',
            bn: 'নেটওয়ার্কে যুক্ত সমস্ত কম্পিউটারের মালিক ডাটাবেস অ্যাডমিনকে হতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Type consistency: a column cannot hold an integer in row 1 and a PDF binary in row 2.',
          bn: 'টাইপ সামঞ্জস্য: একটি কলাম ১ম সারিতে পূর্ণসংখ্যা এবং ২য় সারিতে পিডিএফ রাখতে পারে না।'
        },
        explanation: {
          en: 'Homogeneity ensures strict typing. A column designated as an integer cannot hold text descriptions in some rows and dates in others. Every cell in the column conforms to the same predefined data domain.',
          bn: 'হোমোজিনিটি কঠোর ডাটা টাইপ নিশ্চিত করে। পূর্ণসংখ্যার কলামে কোনো সারিতে টেক্সট বা অন্য সারিতে তারিখ রাখা যাবে না। কলামের প্রতিটি সেলকে একই ডোমেইন মেনে চলতে হবে।'
        }
      },
      {
        id: 'norm-1nf-qz-3',
        kind: 'mcq',
        topic: 'primary-key-uniqueness-mandate',
        question: {
          en: 'Can a relational table without a Primary Key (or candidate key) be considered to be in First Normal Form (1NF)?',
          bn: 'একটি প্রাইমারি কি (বা ক্যান্ডিডেট কি) ছাড়া কোনো রিলেশনাল টেবিল কি ১ম নরমাল ফর্মে (1NF) উন্নীত হতে পারে?'
        },
        options: [
          {
            en: 'No, because 1NF formally requires every row in a relation to be uniquely identifiable, which requires at least one primary or candidate key',
            bn: 'না, কারণ ১ম নরমাল ফর্ম আনুষ্ঠানিকভাবে প্রতিটি সারিকে এককভাবে চিহ্নিত করার দাবি করে, যার জন্য অন্তত একটি প্রাইমারি বা ক্যান্ডিডেট কি আবশ্যক'
          },
          {
            en: 'Yes, primary keys are entirely optional in database normalization theory',
            bn: 'হ্যাঁ, ডাটাবেস নরমালাইজেশন তত্ত্বে প্রাইমারি কি সম্পূর্ণ ঐচ্ছিক'
          },
          {
            en: 'Yes, but only if the table has fewer than 10 rows',
            bn: 'হ্যাঁ, তবে কেবল তখনই যদি টেবিলে ১০টির কম রো থাকে'
          },
          {
            en: 'Yes, if the table is saved with a .csv file extension',
            bn: 'হ্যাঁ, যদি টেবিলটি .csv ফাইল ফরম্যাটে সংরক্ষণ করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'A mathematical relation is a set of unique tuples; duplicate rows are forbidden.',
          bn: 'একটি গাণিতিক রিলেশন হলো অনন্য সারির একটি সেট; ডুপ্লিকেট সারি থাকা সম্পূর্ণ নিষিদ্ধ।'
        },
        explanation: {
          en: 'By definition, a relation in relational algebra is a mathematical set of unique tuples. Without a primary key to guarantee uniqueness, duplicate rows can exist, violating the foundational rules of 1NF.',
          bn: 'সংজ্ঞা অনুসারে, রিলেশনাল অ্যালজেব্রায় একটি রিলেশন হলো অনন্য সারির গাণিতিক সেট। প্রাইমারি কি না থাকলে ডুপ্লিকেট সারি তৈরি হতে পারে, যা ১ম নরমাল ফর্মের মূল ভিত্তি ভঙ্গ করে।'
        }
      },
      {
        id: 'norm-1nf-qz-4',
        kind: 'mcq',
        topic: 'composite-surrogate-1nf-choice',
        question: {
          en: 'When decomposing a repeating group into a child table (such as student course enrollments), what primary key structure is typically used?',
          bn: 'পুনরাবৃত্তিমূলক গ্রুপকে চাইল্ড টেবিলে ভাগ করার সময় (যেমন শিক্ষার্থীদের কোর্স তালিকা) সাধারণত কোন প্রাইমারি কি কাঠামো ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'Either an auto-incrementing surrogate primary key (enrollment_id) or a composite primary key on (student_id, course_code)',
            bn: 'হয় একটি অটো-ইনক্রিমেন্টিং সারোগেট প্রাইমারি কি (enrollment_id) অথবা (student_id, course_code) এর সমন্বয়ে গঠিত কম্পোজিট প্রাইমারি কি'
          },
          {
            en: 'A randomly generated password that changes every 10 seconds',
            bn: 'একটি এলোমেলো পাসওয়ার্ড যা প্রতি ১০ সেকেন্ডে পরিবর্তিত হয়'
          },
          {
            en: 'The student\'s home street address in plain text',
            bn: 'শিক্ষার্থীর বাড়ির রাস্তার পুরো ঠিকানা'
          },
          {
            en: 'No primary key is ever placed on child tables',
            bn: 'চাইল্ড টেবিলে কখনো কোনো প্রাইমারি কি রাখা হয় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Uniqueness can be enforced by a composite key (student + course) or a dedicated surrogate ID.',
          bn: 'অনন্যতা একটি কম্পোজিট কি (শিক্ষার্থী + কোর্স) অথবা একটি ডেডিকেটেড সারোগেট আইডি দিয়ে নিশ্চিত করা যায়।'
        },
        explanation: {
          en: 'Both approaches are standard: a composite primary key (student_id, course_code) guarantees a student cannot enroll twice in the same course, while a surrogate key (enrollment_id) simplifies foreign key references.',
          bn: 'উভয় পদ্ধতিই স্ট্যান্ডার্ড: কম্পোজিট কি (student_id, course_code) নিশ্চিত করে একজন শিক্ষার্থী একই কোর্সে দুইবার ভর্তি হতে পারবে না, আর সারোগেট কি অন্য টেবিলের সাথে রেফারেন্স সহজ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'seconds-and-the-second',
    title: {
      en: 'Second Normal Form (2NF): Partial Dependencies',
      bn: '২য় নরমাল ফর্ম (2NF): আংশিক নির্ভরতা দূরীকরণ'
    }
  }
};
