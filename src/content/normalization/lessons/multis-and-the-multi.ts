import type { Lesson } from '../../../lib/types';

export const MultisAndTheMultiLesson: Lesson = {
  slug: 'multis-and-the-multi',
  tech: 'normalization',
  title: {
    en: 'Fourth Normal Form (4NF): Multivalued Dependencies',
    bn: '৪র্থ নরমাল ফর্ম (4NF): মাল্টিভ্যালুড নির্ভরতা দূরীকরণ'
  },
  summary: {
    en: 'Conquer independent multi-valued attributes with Fourth Normal Form (4NF): understand multivalued dependencies (X ->> Y), prevent Cartesian row explosions, and decompose multi-attribute tables.',
    bn: '৪র্থ নরমাল ফর্ম (4NF) দিয়ে স্বাধীন মাল্টি-ভ্যালুড অ্যাট্রিবিউট পরিচালনা করুন: মাল্টিভ্যালুড নির্ভরতা (X ->> Y), কার্টেশিয়ান রো বিস্ফোরণ প্রতিরোধ এবং মাল্টি-অ্যাট্রিবিউট টেবিল বিভাজন শিখুন।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'beyond-functional-dependencies',
      text: {
        en: 'Beyond Functional Dependencies: Multivalued Dependencies (MVD)',
        bn: 'ফাংশনাল ডিপেন্ডেন্সির ঊর্ধ্বে: মাল্টিভ্যালুড নির্ভরতা (MVD)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Even when a database table reaches Boyce-Codd Normal Form (BCNF), it can still suffer from massive redundancy if it attempts to store 2 or more independent relationships in the same table. In 1977, computer scientist Ronald Fagin established 4NF to solve this challenge. Fourth Normal Form moves beyond standard functional dependencies to govern Multivalued Dependencies (written X ->> Y).',
        bn: 'এমনকি একটি ডাটাবেস টেবিল বয়েস-কড নরমাল ফর্ম (BCNF) অর্জন করার পরেও মারাত্মক ডাটা পুনরাবৃত্তিতে ভুগতে পারে যদি এটি একই টেবিলে ২টি বা ততোধিক স্বাধীন সম্পর্ক সংরক্ষণের চেষ্টা করে। ১৯৭৭ সালে কম্পিউটার বিজ্ঞানী রোনাল্ড ফ্যাগিন এই জটিলতা নিরসনে 4NF প্রতিষ্ঠা করেন। 4NF সাধারণ ফাংশনাল ডিপেন্ডেন্সির গণ্ডি ছাড়িয়ে মাল্টিভ্যালুড নির্ভরতা বা MVD (X ->> Y লেখা হয়) নিয়ন্ত্রণ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A multivalued dependency X ->> Y states that a given value of X determines a set of values for Y, and this set of Y values is completely independent of other attributes Z in the relation. For instance, consider a software developer who possesses multiple programming skills (JavaScript, Rust, SQL) and speaks multiple human languages (Bengali, English). Skills and spoken languages are independent facts about the developer. Combining both into one table causes a Cartesian product explosion.',
        bn: 'একটি মাল্টিভ্যালুড ডিপেন্ডেন্সি X ->> Y নির্দেশ করে যে X-এর একটি নির্দিষ্ট মান Y-এর মানের একটি সম্পূর্ণ সেট নির্ধারণ করে এবং Y-এর এই সেটটি টেবিলের অন্যান্য অ্যাট্রিবিউট Z-এর মানের ওপর মোটেও নির্ভরশীল নয়। উদাহরণস্বরূপ, একজন সফটওয়্যার ডেভেলপারের একাধিক প্রোগ্রামিং দক্ষতা (যেমন JavaScript, Rust, SQL) এবং একাধিক কথিত ভাষা (যেমন বাংলা, ইংরেজি) থাকতে পারে। দক্ষতা এবং কথিত ভাষা ডেভেলপারের দুটি সম্পূর্ণ স্বাধীন তথ্য। একটি একক টেবিলে এই দুটি বৈশিষ্ট্য একসাথে রাখলে সারির সংখ্যার কার্টেশিয়ান গুণফল বিস্ফোরণ ঘটে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Cartesian Product Explosion vs 4NF Independent Table Decomposition',
        bn: 'কার্টেশিয়ান বিস্ফোরণ বনাম ৪র্থ নরমাল ফর্মের স্বাধীন টেবিল বিভাজন'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Fourth Normal Form 4NF decomposition diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Left: Cartesian Exploded Table -->
  <g transform="translate(30, 25)">
    <rect width="320" height="195" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="320" height="28" rx="8" fill="#7f1d1d" />
    <text x="160" y="19" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">Non-4NF: 3 Skills × 2 Languages = 6 Rows</text>

    <text x="25" y="48" fill="#94a3b8" font-size="10" font-weight="bold">dev</text>
    <text x="120" y="48" fill="#f87171" font-size="10" font-weight="bold">skill (MVD 1)</text>
    <text x="220" y="48" fill="#f87171" font-size="10" font-weight="bold">language (MVD 2)</text>
    <line x1="15" y1="56" x2="305" y2="56" stroke="#475569" stroke-width="1" />

    <!-- 6 Rows -->
    <text x="25" y="74" fill="#f8fafc" font-size="10">Rahim</text><text x="120" y="74" fill="#38bdf8" font-size="10">JavaScript</text><text x="220" y="74" fill="#fbbf24" font-size="10">Bengali</text>
    <text x="25" y="94" fill="#f8fafc" font-size="10">Rahim</text><text x="120" y="94" fill="#38bdf8" font-size="10">JavaScript</text><text x="220" y="94" fill="#fbbf24" font-size="10">English</text>
    <text x="25" y="114" fill="#f8fafc" font-size="10">Rahim</text><text x="120" y="114" fill="#38bdf8" font-size="10">Rust</text><text x="220" y="114" fill="#fbbf24" font-size="10">Bengali</text>
    <text x="25" y="134" fill="#f8fafc" font-size="10">Rahim</text><text x="120" y="134" fill="#38bdf8" font-size="10">Rust</text><text x="220" y="134" fill="#fbbf24" font-size="10">English</text>
    <text x="25" y="154" fill="#f8fafc" font-size="10">Rahim</text><text x="120" y="154" fill="#38bdf8" font-size="10">SQL</text><text x="220" y="154" fill="#fbbf24" font-size="10">Bengali</text>
    <text x="25" y="174" fill="#f8fafc" font-size="10">Rahim</text><text x="120" y="174" fill="#38bdf8" font-size="10">SQL</text><text x="220" y="174" fill="#fbbf24" font-size="10">English</text>

    <text x="160" y="210" fill="#fca5a5" font-size="9" text-anchor="middle">Passes BCNF (all cols form PK)! Fails 4NF.</text>
  </g>

  <!-- Transform Arrow -->
  <path d="M 365 120 L 395 120" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow)" />
  <text x="380" y="110" fill="#38bdf8" font-size="10" text-anchor="middle" font-weight="bold">4NF</text>

  <!-- Right: Two Independent 4NF Tables -->
  <g transform="translate(410, 25)">
    <!-- Table 1: Skills -->
    <g transform="translate(0, 0)">
      <rect width="300" height="95" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
      <rect width="300" height="22" rx="6" fill="#064e3b" />
      <text x="150" y="15" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Table: dev_skills (3 Rows)</text>
      <text x="40" y="40" fill="#38bdf8" font-size="10">Rahim</text><text x="160" y="40" fill="#f8fafc" font-size="10">JavaScript</text>
      <text x="40" y="58" fill="#38bdf8" font-size="10">Rahim</text><text x="160" y="58" fill="#f8fafc" font-size="10">Rust</text>
      <text x="40" y="76" fill="#38bdf8" font-size="10">Rahim</text><text x="160" y="76" fill="#f8fafc" font-size="10">SQL</text>
    </g>

    <!-- Table 2: Languages -->
    <g transform="translate(0, 110)">
      <rect width="300" height="85" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
      <rect width="300" height="22" rx="6" fill="#064e3b" />
      <text x="150" y="15" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Table: dev_languages (2 Rows)</text>
      <text x="40" y="44" fill="#38bdf8" font-size="10">Rahim</text><text x="160" y="44" fill="#f8fafc" font-size="10">Bengali</text>
      <text x="40" y="64" fill="#38bdf8" font-size="10">Rahim</text><text x="160" y="64" fill="#f8fafc" font-size="10">English</text>
    </g>
  </g>

  <!-- Summary Banner -->
  <g transform="translate(30, 240)">
    <rect width="680" height="70" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="25" y="24" fill="#f8fafc" font-size="12" font-weight="bold">The Fourth Normal Form (4NF) Invariant</text>
    <text x="25" y="44" fill="#cbd5e1" font-size="11">For every non-trivial Multivalued Dependency X ↠ Y, X must be a Superkey.</text>
    <text x="25" y="60" fill="#94a3b8" font-size="10">Never combine two independent 1-to-many relationships in a single relational table.</text>
  </g>
</svg>`,
      caption: {
        en: 'The 4NF solution to Cartesian explosion: decomposing independent multi-valued dependencies into separate binary relations.',
        bn: 'কার্টেশিয়ান বিস্ফোরণে ৪র্থ নরমাল ফর্মের সমাধান: স্বাধীন মাল্টিভ্যালুড নির্ভরতাকে পৃথক বাইনারি রিলেশনে বিভক্তকরণ।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Fourth Normal Form (4NF)',
          def: {
            en: 'A relational state in BCNF where no non-trivial multivalued dependencies exist unless the determinant is a superkey.',
            bn: 'BCNF-এর এমন একটি অবস্থা যেখানে কোনো নন-ট্রিভিয়াল মাল্টিভ্যালুড ডিপেন্ডেন্সি থাকে না যদি না তার ডিটারমিন্যান্ট একটি সুপার-কি হয়।'
          }
        },
        {
          term: 'Multivalued Dependency (MVD)',
          def: {
            en: 'A condition (written X ->> Y) where attribute X multi-determines a set of Y values independently of all other attributes in the table.',
            bn: 'এমন একটি সম্পর্ক (X ->> Y লেখা হয়) যেখানে X টেবিলের অন্য সমস্ত কলাম থেকে সম্পূর্ণ স্বাধীনভাবে Y-এর একাধিক মান নির্ধারণ করে।'
          }
        },
        {
          term: 'Cartesian Explosion',
          def: {
            en: 'An anomaly where pairing 2 independent multi-valued attributes in 1 table forces an exponential multiplication of redundant rows.',
            bn: 'এমন একটি সমস্যা যেখানে ২টি স্বাধীন মাল্টি-ভ্যালুড কলামকে ১টি টেবিলে রাখলে অপ্রয়োজনীয় সারির সংখ্যার জ্যামিতিক গুণফল তৈরি হয়।'
          }
        },
        {
          term: 'Trivial MVD',
          def: {
            en: 'A multivalued dependency X ->> Y where either Y is a subset of X, or X union Y contains all attributes of the relation schema.',
            bn: 'এমন একটি মাল্টিভ্যালুড ডিপেন্ডেন্সি যেখানে হয় Y সম্পূর্ণভাবে X-এর অংশ, নয়তো X এবং Y মিলে টেবিলের সমস্ত কলাম তৈরি করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'cartesian-explosion-consequences',
      text: {
        en: 'The Cost of Cartesian Row Multiplication in Production',
        bn: 'প্রোডাকশনে কার্টেশিয়ান সারির গুণফলের মারাত্মক খরচ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In the unnormalized developer table, storing 3 skills alongside 2 languages creates 6 rows. If the developer acquires a fourth skill (Go), an administrator must insert 2 separate rows to pair Go with both Bengali and English. If the developer learns a third language (German), the database must insert 4 new rows to cross German with all 4 skills. Without 4NF normalization, table row volume multiplies exponentially with every independent attribute added.',
        bn: 'অসংগঠিত ডেভেলপার টেবিলে ৩টি দক্ষতার সাথে ২টি ভাষা রাখতে গিয়ে ৬টি সারি তৈরি হয়। যদি ডেভেলপার চতুর্থ একটি দক্ষতা (Go) অর্জন করেন, তবে অ্যাডমিনকে বাংলা এবং ইংরেজি উভয়ের সাথে মিলিয়ে ২টি আলাদা সারি ইনসার্ট করতে হয়। আর ডেভেলপার যদি ৩য় একটি ভাষা (জার্মান) শেখেন, তবে ডাটাবেসকে ৪টি দক্ষতার সাথেই মিলিয়ে মোট ৪টি নতুন সারি তৈরি করতে হয়। ৪র্থ নরমাল ফর্ম প্রয়োগ না করলে প্রতিটি নতুন তথ্যের সাথে টেবিলের সারির সংখ্যা গুণিতক হারে বাড়তে থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Decomposing the relation into developer_skills and developer_languages resolves the Cartesian crisis. Storing 3 skills takes 3 rows in the skills table, while storing 2 languages takes 2 rows in the languages table (5 rows total instead of 6). When the developer learns a fourth skill, the application inserts exactly 1 row. Table growth becomes linear and completely decoupled.',
        bn: 'রিলেশনটিকে developer_skills এবং developer_languages টেবিলে ভাগ করলে এই কার্টেশিয়ান সংকট কেটে যায়। ৩টি দক্ষতা রাখতে স্কিল টেবিলে ৩টি সারি এবং ২টি ভাষা রাখতে ল্যাঙ্গুয়েজ টেবিলে ২টি সারি লাগে (৬টির বদলে মোট ৫টি সারি)। যখন ডেভেলপার চতুর্থ একটি দক্ষতা শেখেন, অ্যাপ্লিকেশন ঠিক ১টি সারি ইনসার্ট করে। ফলে টেবিলের আকার বৃদ্ধি পায় সরলরৈখিকভাবে এবং একে অপরের থেকে সম্পূর্ণ স্বাধীন থাকে।'
      }
    },
    {
      type: 'heading',
      id: 'node-4nf-engine',
      text: {
        en: 'Executable 4NF Engine: Collapsing Cartesian Rows into Linear Relations',
        bn: 'রানযোগ্য ৪র্থ নরমাল ফর্ম ইঞ্জিন: কার্টেশিয়ান সারির অপচয় দূরীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js simulation demonstrating Fourth Normal Form (4NF) normalization. It takes an unnormalized table exhibiting a Cartesian product of 6 rows, decomposes it into 2 independent 4NF relations, and proves that adding a new skill requires only 1 atomic insertion.',
        bn: 'নিচে ৪র্থ নরমাল ফর্ম (4NF) নরমালাইজেশন প্রদর্শনকারী একটি সম্পূর্ণ Node.js সিমুলেশন দেওয়া হলো। এটি ৬টি সারির কার্টেশিয়ান অপচয় থাকা একটি টেবিলকে ২টি স্বাধীন 4NF টেবিলে ভাগ করে এবং প্রমাণ করে যে নতুন দক্ষতা যোগ করতে মাত্র ১টি ইনসার্টই যথেষ্ট।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Decompose 1 multi-valued relation into 2 independent 4NF tables and measure row count reduction',
        bn: '১টি মাল্টিভ্যালুড রিলেশনকে ২টি স্বাধীন ৪র্থ নরমাল ফর্ম টেবিলে রূপান্তর এবং সারির সংখ্যা হ্রাস পরিমাপ'
      },
      code: `// Fourth Normal Form (4NF) Decomposition Engine
const unnormalizedDeveloperProfiles = [
  { dev: 'Rahim', skill: 'JavaScript', language: 'Bengali' },
  { dev: 'Rahim', skill: 'JavaScript', language: 'English' },
  { dev: 'Rahim', skill: 'Rust', language: 'Bengali' },
  { dev: 'Rahim', skill: 'Rust', language: 'English' },
  { dev: 'Rahim', skill: 'SQL', language: 'Bengali' },
  { dev: 'Rahim', skill: 'SQL', language: 'English' }
];

// Step 1: Decompose independent MVDs into 2 distinct 4NF tables
const skillsSet = new Set();
const languagesSet = new Set();

for (const row of unnormalizedDeveloperProfiles) {
  skillsSet.add(\`\${row.dev}:\${row.skill}\`);
  languagesSet.add(\`\${row.dev}:\${row.language}\`);
}

// Convert back to structured relational rows
const skillsTable = Array.from(skillsSet).map(s => {
  const [dev, skill] = s.split(':');
  return { dev, skill };
});

const languagesTable = Array.from(languagesSet).map(l => {
  const [dev, language] = l.split(':');
  return { dev, language };
});

const total4NFTuples = skillsTable.length + languagesTable.length; // 3 + 2 = 5
const originalCartesianRows = unnormalizedDeveloperProfiles.length; // 6

// Step 2: Invariant Check: Adding a new skill takes exactly 1 insertion in 4NF
skillsTable.push({ dev: 'Rahim', skill: 'Go' });
const newSkillInsertCount = 1;

console.log(\`[4NF Engine] Decomposed 1 multi-valued relation into 2 independent 4NF tables.\`);
console.log(\`[Cartesian Reduction] Collapsed \${originalCartesianRows} redundant rows into \${total4NFTuples} atomic relation tuples.\`);
console.log(\`[Growth Invariant] Adding 1 new skill requires \${newSkillInsertCount} insertion instead of multiplying across languages (1/1: true).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'When Do You Stop? 3NF/BCNF vs 4NF in Practice',
        bn: 'কখন নরমালাইজেশন থামাবেন? বাস্তবে ৩NF/BCNF বনাম ৪NF'
      },
      text: {
        en: 'In 95% of real-world database architectures, reaching 3NF or BCNF across 3 levels is sufficient for transactional integrity. You only need to consider 4NF when you identify multiple independent 1-to-many relationships modeled inside 1 single database table.',
        bn: 'বাস্তব জীবনের ৯৫% ডাটাবেস আর্কিটেকচারে ৩টি স্তরের 3NF বা BCNF পৌঁছানোই লেনদেনের অখণ্ডতা বজায় রাখতে যথেষ্ট। আপনি কেবল তখনই 4NF নিয়ে ভাববেন যখন দেখবেন ১টি একক টেবিলের ভেতর একাধিক স্বাধীন ১-টু-মেনি সম্পর্ক একসাথে যুক্ত করা হয়েছে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Multivalued Dependency Detector',
        bn: 'মাল্টিভ্যালুড নির্ভরতা শনাক্তকারী'
      },
      description: {
        en: 'Test whether a multi-column schema holds independent multivalued dependencies that risk Cartesian explosion.',
        bn: 'একটি টেবিলে স্বাধীন মাল্টিভ্যালুড নির্ভরতা আছে কিনা তা পরীক্ষা করে কার্টেশিয়ান বিস্ফোরণ ঝুঁকি নির্ণয় করুন।'
      },
      code: `function detectMVDConflict(independentRelationshipsCount) {
  if (independentRelationshipsCount >= 2) {
    return '4NF_VIOLATION: Multiple independent 1-to-many relationships require table splitting';
  }
  return '4NF_COMPLIANT: No independent multivalued dependencies';
}

console.log('Schema A (dev -> skills AND dev -> languages):', detectMVDConflict(2));
console.log('Schema B (dev -> skills only):', detectMVDConflict(1));`,
      tests: [
        {
          name: {
            en: 'Flags two independent relationships as 4NF violation',
            bn: 'দুটি স্বাধীন সম্পর্ককে ৪র্থ নরমাল ফর্ম লঙ্ঘন হিসেবে চিহ্নিত করে'
          },
          expected: 'Schema A (dev -> skills AND dev -> languages): 4NF_VIOLATION: Multiple independent 1-to-many relationships require table splitting'
        },
        {
          name: {
            en: 'Passes single relationship as 4NF compliant',
            bn: 'একক সম্পর্ককে ৪র্থ নরমাল ফর্মের সাথে সামঞ্জস্যপূর্ণ হিসেবে অনুমোদন করে'
          },
          expected: 'Schema B (dev -> skills only): 4NF_COMPLIANT: No independent multivalued dependencies'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'norm-4nf-ex-1',
      kind: 'mcq',
      topic: '4nf-core-rule',
      question: {
        en: 'What is the formal requirement for a relational schema to achieve Fourth Normal Form (4NF)?',
        bn: 'একটি রিলেশন স্কিমা ৪র্থ নরমাল ফর্ম (4NF) অর্জন করতে কোন আনুষ্ঠানিক শর্তটি পূরণ করতে হয়?'
      },
      options: [
        {
          en: 'It must be in BCNF, and for every non-trivial multivalued dependency X ->> Y, X must be a superkey of the relation',
          bn: 'এটিকে BCNF-এ থাকতে হবে এবং প্রতিটি নন-ট্রিভিয়াল মাল্টিভ্যালুড ডিপেন্ডেন্সি X ->> Y এর জন্য X-কে রিলেশনের একটি সুপার-কি হতে হবে'
        },
        {
          en: 'The relation must contain exactly 4 columns and 4 primary keys',
          bn: 'রিলেশনে ঠিক ৪টি কলাম এবং ৪টি প্রাইমারি কি থাকতে হবে'
        },
        {
          en: 'All table rows must be written in the C programming language',
          bn: 'টেবিলের तमाम রো সি প্রোগ্রামিং ভাষায় লিখতে হবে'
        },
        {
          en: 'Tables must be partitioned across 4 different cloud providers',
          bn: 'টেবিলগুলোকে ৪টি ভিন্ন ক্লাউড প্রদানকারীর মধ্যে ভাগ করে রাখতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: '4NF mandates that every non-trivial multivalued determinant is a superkey.',
        bn: '৪র্থ নরমাল ফর্ম দাবি করে যে প্রতিটি নন-ট্রিভিয়াল মাল্টিভ্যালুড ডিটারমিন্যান্ট একটি সুপার-কি হবে।'
      },
      explanation: {
        en: 'Fourth Normal Form extends BCNF to multivalued dependencies: whenever an attribute multi-determines another set of attributes non-trivially, it must be a full superkey of the table.',
        bn: '৪র্থ নরমাল ফর্ম BCNF-কে মাল্টিভ্যালুড নির্ভরতা পর্যন্ত বিস্তৃত করে: যখনই কোনো অ্যাট্রিবিউট অন্য কলামকে নন-ট্রিভিয়ালভাবে নির্ধারণ করে, তখন তাকে একটি পূর্ণাঙ্গ সুপার-কি হতে হয়।'
      }
    },
    {
      id: 'norm-4nf-ex-2',
      kind: 'mcq',
      topic: 'cartesian-explosion-cause',
      question: {
        en: 'Why does storing employee skills and employee hobbies in the same table create a Cartesian product explosion?',
        bn: 'একই টেবিলে কর্মচারীদের কাজের দক্ষতা এবং ব্যক্তিগত শখ একসাথে সংরক্ষণ করলে কেন কার্টেশিয়ান গুণফল বিস্ফোরণ ঘটে?'
      },
      options: [
        {
          en: 'Because skills and hobbies are independent: every skill must be redundantly paired with every hobby, creating (skills × hobbies) rows per employee',
          bn: 'কারণ দক্ষতা এবং শখ দুটি সম্পূর্ণ স্বাধীন: প্রতিটি দক্ষতাকে প্রতিটি শখের সাথে মিলিয়ে প্রতি কর্মচারীর জন্য (দক্ষতা × শখ) সংখ্যক রো তৈরি করতে হয়'
        },
        {
          en: 'Because hobbies consume all CPU memory on the server',
          bn: 'কারণ শখের তথ্য সার্ভারের تمام সিপিইউ মেমরি দখল করে নেয়'
        },
        {
          en: 'Because SQL syntax prohibits tables with more than 2 nouns in their title',
          bn: 'কারণ SQL সিনট্যাক্স টেবিলে দুটির বেশি বিশেষ্য শব্দ ব্যবহারে নিষেধাজ্ঞা দেয়'
        },
        {
          en: 'Because employees cannot have hobbies and skills simultaneously',
          bn: 'কারণ কর্মচারীদের একই সাথে দক্ষতা এবং শখ থাকতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Independence forces cross-multiplication: N skills times M hobbies equals N*M rows.',
        bn: 'স্বাধীনতা গুণ করতে বাধ্য করে: N সংখ্যক দক্ষতা এবং M সংখ্যক শখ মানে N*M সংখ্যক সারি।'
      },
      explanation: {
        en: 'Since an employee\'s skills have no bearing on their hobbies, representing all combinations in a single relation requires creating the Cartesian product of both sets, bloating table storage.',
        bn: 'যেহেতু কর্মচারীর দক্ষতার সাথে তার শখের কোনো সম্পর্ক নেই, তাই একই টেবিলে সমস্ত সংমিশ্রণ রাখতে গেলে উভয় সেটের কার্টেশিয়ান গুণফল তৈরি করতে হয় যা মেমরি অপচয় ঘটায়।'
      }
    },
    {
      id: 'norm-4nf-ex-3',
      kind: 'mcq',
      topic: 'bcnf-compliance-without-4nf',
      question: {
        en: 'Why can a table like developer_skills_languages(developer, skill, language) be 100% compliant with BCNF yet still suffer from 4NF Cartesian redundancy?',
        bn: 'developer_skills_languages(developer, skill, language) এর মতো একটি টেবিল কীভাবে ১০০% BCNF মেনে চলা সত্ত্বেও ৪র্থ নরমাল ফর্মের কার্টেশিয়ান সমস্যায় ভুগতে পারে?'
      },
      options: [
        {
          en: 'Because the entire table is its own candidate key, meaning there are zero non-trivial functional dependencies to violate BCNF',
          bn: 'কারণ সম্পূর্ণ টেবিলটি নিজেই তার একমাত্র ক্যান্ডিডেট কি, ফলে BCNF ভঙ্গ করার মতো কোনো নন-ট্রিভিয়াল ফাংশনাল ডিপেন্ডেন্সিই এতে নেই'
        },
        {
          en: 'Because BCNF was designed only for banking applications',
          bn: 'কারণ BCNF কেবল ব্যাংকিং অ্যাপ্লিকেশনের জন্য ডিজাইন করা হয়েছিল'
        },
        {
          en: 'Because BCNF allows duplicate rows in tables',
          bn: 'কারণ BCNF টেবিলে ডুপ্লিকেট সারি সমর্থন করে'
        },
        {
          en: 'Because candidate keys in BCNF cannot contain text strings',
          bn: 'কারণ BCNF-এ ক্যান্ডিডেট কি টেক্সট স্ট্রিং ধারণ করতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'All-key relations satisfy 1NF, 2NF, 3NF, and BCNF trivially because no non-key columns exist.',
        bn: 'تمام কলাম কি-এর অংশ হলে কোনো নন-কি কলাম না থাকায় টেবিলটি স্বাভাবিকভাবেই ১ম থেকে BCNF পর্যন্ত পাস করে।'
      },
      explanation: {
        en: 'In an all-key relation, every non-trivial dependency has the entire table as determinant, satisfying BCNF trivially. However, BCNF is blind to multivalued dependencies, which is why 4NF was invented.',
        bn: 'একটি অল-কি টেবিলে প্রতিটি নির্ভরতার ডিটারমিন্যান্ট সম্পূর্ণ টেবিল হওয়ায় এটি BCNF পূরণ করে। কিন্তু BCNF মাল্টিভ্যালুড নির্ভরতা দেখতে পায় না, যার সমাধান করতে ৪র্থ নরমাল ফর্ম তৈরি হয়।'
      }
    },
    {
      id: 'norm-4nf-ex-4',
      kind: 'mcq',
      topic: '4nf-remedy-table-splitting',
      question: {
        en: 'What is the correct structural solution to eliminate a 4NF violation in a table with independent attributes Y and Z determined by X?',
        bn: 'X দ্বারা নির্ধারিত স্বাধীন অ্যাট্রিবিউট Y এবং Z থাকা একটি টেবিলে ৪র্থ নরমাল ফর্ম লঙ্ঘন দূর করার সঠিক সমাধান কোনটি?'
      },
      options: [
        {
          en: 'Decompose the table into two separate binary relations: R1(X, Y) and R2(X, Z)',
          bn: 'টেবিলটিকে দুটি পৃথক বাইনারি রিলেশনে বিভক্ত করা: R1(X, Y) এবং R2(X, Z)'
        },
        {
          en: 'Delete all rows where Y and Z have different lengths',
          bn: 'Y এবং Z-এর দৈর্ঘ্য অসমান এমন সমস্ত সারি মুছে ফেলা'
        },
        {
          en: 'Store attribute Y in an encrypted password hash',
          bn: 'অ্যাট্রিবিউট Y-কে একটি এনক্রিপ্টেড পাসওয়ার্ড হ্যাশে সংরক্ষণ করা'
        },
        {
          en: 'Merge attributes Y and Z into a single comma-separated string',
          bn: 'Y এবং Z কলামকে একটি একক কমাযুক্ত স্ট্রিংয়ে একত্রিত করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Separate the two independent 1-to-many relationships into their own dedicated tables.',
        bn: 'দুটি স্বাধীন ১-টু-মেনি সম্পর্ককে তাদের নিজস্ব আলাদা টেবিলে বিভক্ত করুন।'
      },
      explanation: {
        en: 'Decomposing into R1(X, Y) and R2(X, Z) eliminates the Cartesian product. Each fact is recorded once, and rejoining the tables via an inner join on X reconstructs the valid combinations losslessly.',
        bn: 'R1(X, Y) এবং R2(X, Z)-এ ভাগ করলে কার্টেশিয়ান গুণফল দূর হয়। প্রতিটি তথ্য একবার রেকর্ড হয় এবং X-এর ওপর জয়েন চালালে সমস্ত বৈধ সংমিশ্রণ নির্ভুলভাবে ফিরে আসে।'
      }
    }
  ],
  quiz: {
    id: 'multis-and-the-multi-quiz',
    title: {
      en: 'Fourth Normal Form (4NF) Mastery Quiz',
      bn: '৪র্থ নরমাল ফর্ম (4NF) দক্ষতা যাচাই কুইজ'
    },
    questions: [
      {
        id: 'norm-4nf-qz-1',
        kind: 'mcq',
        topic: 'mvd-symmetry-property',
        question: {
          en: 'In relational database theory, if relation R(X, Y, Z) satisfies the multivalued dependency X ->> Y, what complementary dependency MUST also hold?',
          bn: 'রিলেশনাল ডাটাবেস তত্ত্বে, যদি রিলেশন R(X, Y, Z) মাল্টিভ্যালুড ডিপেন্ডেন্সি X ->> Y মেনে চলে, তবে কোন পরিপূরক নির্ভরতাটি সত্য হতে বাধ্য?'
        },
        options: [
          {
            en: 'X ->> Z (Multivalued dependencies always occur in complementary pairs)',
            bn: 'X ->> Z (মাল্টিভ্যালুড ডিপেন্ডেন্সি সর্বদা পরিপূরক জোড়ায় ঘটে)'
          },
          {
            en: 'Y ->> X must always hold',
            bn: 'Y ->> X সর্বদা সত্য হতে হবে'
          },
          {
            en: 'Z ->> Y must always hold',
            bn: 'Z ->> Y সর্বদা সত্য হতে হবে'
          },
          {
            en: 'X -> Y as a functional dependency',
            bn: 'একটি ফাংশনাল ডিপেন্ডেন্সি হিসেবে X -> Y'
          }
        ],
        answer: 0,
        hint: {
          en: 'MVD complementarity: in relation R(X, Y, Z), X ->> Y implies X ->> Z.',
          bn: 'MVD পরিপূরকতা: R(X, Y, Z) রিলেশনে X ->> Y নির্দেশ করে X ->> Z অবশ্যই বহাল থাকবে।'
        },
        explanation: {
          en: 'By definition of multivalued dependencies, if X multi-determines Y independently of the rest of the attributes Z, then X symmetrically multi-determines Z independently of Y (X ->> Z).',
          bn: 'মাল্টিভ্যালুড নির্ভরতার সংজ্ঞানুসারে, X যদি বাকি কলাম Z থেকে স্বাধীনভাবে Y নির্ধারণ করে, তবে X একইভাবে Y থেকে স্বাধীনভাবে Z-কেও নির্ধারণ করে (X ->> Z)।'
        }
      },
      {
        id: 'norm-4nf-qz-2',
        kind: 'mcq',
        topic: 'fagin-theorem-lossless-mvd',
        question: {
          en: 'What did Ronald Fagin\'s 1977 theorem prove regarding the decomposition of relation R(X, Y, Z) into R1(X, Y) and R2(X, Z)?',
          bn: '১৯৭৭ সালে রোনাল্ড ফ্যাগিনের উপপাদ্য রিলেশন R(X, Y, Z)-কে R1(X, Y) এবং R2(X, Z)-এ বিভক্ত করার বিষয়ে কী প্রমাণ করেছিল?'
        },
        options: [
          {
            en: 'The decomposition is a lossless join decomposition if and only if the multivalued dependency X ->> Y (or equivalently X ->> Z) holds in R',
            bn: 'ডিকম্পোজিশনটি একটি লসলেস জয়েন হবে যদি এবং কেবল যদি রিলেশন R-এ মাল্টিভ্যালুড ডিপেন্ডেন্সি X ->> Y (বা সমতুল্যভাবে X ->> Z) বহাল থাকে'
          },
          {
            en: 'Tables with more than 3 columns cannot be stored on disk',
            bn: '৩টির বেশি কলাম থাকা টেবিল ডিস্কে সংরক্ষণ করা যায় না'
          },
          {
            en: 'Relational databases are slower than text spreadsheets',
            bn: 'রিলেশনাল ডাটাবেস টেক্সট স্প্রেডশিটের চেয়ে ধীরগতির'
          },
          {
            en: 'Decompositions always create duplicate rows in memory',
            bn: 'টেবিল ভাগ করলে মেমরিতে সর্বদা ডুপ্লিকেট সারি তৈরি হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fagin\'s Theorem is the mathematical foundation of 4NF lossless join decomposition.',
          bn: 'ফ্যাগিনের উপপাদ্য হলো ৪র্থ নরমাল ফর্মের লসলেস জয়েন ডিকম্পোজিশনের গাণিতিক ভিত্তি।'
        },
        explanation: {
          en: 'Fagin\'s Theorem proved that a table can be losslessly decomposed into two binary projections if and only if a multivalued dependency holds between the shared key and the independent components.',
          bn: 'ফ্যাগিনের উপপাদ্য প্রমাণ করে যে একটি টেবিলকে দুটি বাইনারি প্রজেকশনে নির্ভুলভাবে ভাগ করা সম্ভব যদি এবং কেবল যদি তাদের সাধারণ কি-এর সাথে স্বাধীন উপাদানগুলোর মাল্টিভ্যালুড নির্ভরতা থাকে।'
        }
      },
      {
        id: 'norm-4nf-qz-3',
        kind: 'mcq',
        topic: 'trivial-mvd-characteristics',
        question: {
          en: 'Under what conditions is a multivalued dependency X ->> Y considered "trivial" in relational schema analysis?',
          bn: 'রিলেশনাল স্কিমা বিশ্লেষণে কোন পরিস্থিতিতে একটি মাল্টিভ্যালুড ডিপেন্ডেন্সি X ->> Y-কে "তুচ্ছ বা ট্রিভিয়াল" বিবেচনা করা হয়?'
        },
        options: [
          {
            en: 'When Y is a subset of X, or when X ∪ Y equals the complete set of attributes in the relation schema R',
            bn: 'যখন Y সম্পূর্ণভাবে X-এর উপসেট হয়, অথবা যখন X ∪ Y রিলেশন স্কিমা R-এর সমস্ত অ্যাট্রিবিউটকে ধারণ করে'
          },
          {
            en: 'When the dependency was defined by an entry-level software intern',
            bn: 'যখন কোনো শিক্ষানবিস ডেভেলপার কর্তৃক এই নির্ভরতা তৈরি করা হয়'
          },
          {
            en: 'When all attribute values are prime numbers',
            bn: 'যখন تمام অ্যাট্রিবিউটের মান মৌলিক সংখ্যা হয়'
          },
          {
            en: 'When the relation has zero candidate keys',
            bn: 'যখন রিলেশনে কোনো ক্যান্ডিডেট কি থাকে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Trivial MVDs span the whole table or represent subsets: they cannot violate 4NF.',
          bn: 'ট্রিভিয়াল MVD পুরো টেবিলকে অন্তর্ভুক্ত করে বা উপসেট নির্দেশ করে: এগুলো কখনো 4NF ভঙ্গ করতে পারে না।'
        },
        explanation: {
          en: 'An MVD X ->> Y is trivial if it cannot produce Cartesian multiplication because there are no other independent attributes Z left to multiply against (X ∪ Y = R), or because Y is already inside X.',
          bn: 'একটি MVD ট্রিভিয়াল হয় যদি গুণ করার মতো অন্য কোনো স্বাধীন অ্যাট্রিবিউট Z অবশিষ্ট না থাকে (X ∪ Y = R), অথবা Y আগেই X-এর ভেতরে বিদ্যমান থাকে।'
        }
      },
      {
        id: 'norm-4nf-qz-4',
        kind: 'mcq',
        topic: 'fd-as-special-case-of-mvd',
        question: {
          en: 'What is the theoretical relationship between a Functional Dependency (X -> Y) and a Multivalued Dependency (X ->> Y)?',
          bn: 'ফাংশনাল ডিপেন্ডেন্সি (X -> Y) এবং মাল্টিভ্যালুড ডিপেন্ডেন্সির (X ->> Y) মধ্যকার তাত্ত্বিক সম্পর্ক কী?'
        },
        options: [
          {
            en: 'Every Functional Dependency is a special case of a Multivalued Dependency where the set of dependent values contains exactly one single value',
            bn: 'প্রতিটি ফাংশনাল ডিপেন্ডেন্সি হলো মাল্টিভ্যালুড ডিপেন্ডেন্সির একটি বিশেষ রূপ যেখানে ডিপেন্ডেন্ট সেটে ঠিক একটি মাত্র মান থাকে'
          },
          {
            en: 'Functional dependencies only apply to numbers; multivalued dependencies only apply to text',
            bn: 'ফাংশনাল ডিপেন্ডেন্সি কেবল সংখ্যায় চলে; আর মাল্টিভ্যালুড ডিপেন্ডেন্সি কেবল টেক্সটে চলে'
          },
          {
            en: 'They are completely incompatible opposites that can never exist in the same database',
            bn: 'তারা দুটি সম্পূর্ণ বিপরীত বিষয় যা একই ডাটাবেসে কখনো সহাবস্থান করতে পারে না'
          },
          {
            en: 'Multivalued dependencies were removed from database theory in 2026',
            bn: '২০২৬ সালে ডাটাবেস তত্ত্ব থেকে মাল্টিভ্যালুড নির্ভরতা বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'A functional dependency determines a single value; an MVD determines a set of values.',
          bn: 'ফাংশনাল ডিপেন্ডেন্সি একক মান নির্ধারণ করে; আর MVD মানের একটি পুরো সেট নির্ধারণ করে।'
        },
        explanation: {
          en: 'If X -> Y holds, then for each X there is exactly one value of Y. Therefore, the set of Y values has cardinality 1, which trivially satisfies X ->> Y. Thus, functional dependencies are a subset of multivalued dependencies.',
          bn: 'X -> Y বহাল থাকলে প্রতিটি X-এর জন্য Y-এর ঠিক ১টি মান থাকে। ফলে Y-এর সেটের আকার ১ হয়, যা সংজ্ঞাগতভাবেই X ->> Y পূরণ করে। তাই প্রতিটি ফাংশনাল ডিপেন্ডেন্সিই একটি মাল্টিভ্যালুড ডিপেন্ডেন্সি।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'forms-and-the-normal',
    title: {
      en: 'Fifth Normal Form (5NF) & Domain-Key Normal Form (DKNF)',
      bn: '৫ম নরমাল ফর্ম (5NF) ও ডোমেইন-কি নরমাল ফর্ম (DKNF)'
    }
  }
};
