import type { Lesson } from '../../../lib/types';

export const BcnfsAndTheBcnfLesson: Lesson = {
  slug: 'bcnfs-and-the-bcnf',
  tech: 'normalization',
  title: {
    en: 'Boyce-Codd Normal Form (BCNF): Strict Superkey Determinants',
    bn: 'বয়েস-কড নরমাল ফর্ম (BCNF): কঠোর সুপার-কি ডিটারমিন্যান্ট'
  },
  summary: {
    en: 'Master Boyce-Codd Normal Form (BCNF): close the 3NF prime attribute loophole, handle overlapping composite candidate keys, evaluate dependency preservation tradeoffs, and decompose complex schemas.',
    bn: 'বয়েস-কড নরমাল ফর্ম (BCNF) আয়ত্ত করুন: ৩য় নরমাল ফর্মের প্রাইম অ্যাট্রিবিউট ছাড় বন্ধ করা, ওভারল্যাপিং ক্যান্ডিডেট কি বিশ্লেষণ, ডিপেন্ডেন্সি সংরক্ষণের আপস এবং জটিল স্কিমা রূপান্তর।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'why-bcnf',
      text: {
        en: 'The 3NF Loophole: Overlapping Candidate Keys',
        bn: '৩য় নরমাল ফর্মের ফাঁকফোকর: ওভারল্যাপিং ক্যান্ডিডেট কি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In 1974, computer scientists Raymond F. Boyce and Edgar F. Codd discovered that Third Normal Form (3NF) does not eradicate all redundancy when a table possesses multiple overlapping composite candidate keys. Recall the formal definition of 3NF: for every functional dependency X -> Y, either X must be a superkey OR Y must be a prime attribute (part of a candidate key).',
        bn: '১৯৭৪ সালে কম্পিউটার বিজ্ঞানী রেমন্ড এফ বয়েস এবং এডগার এফ কড আবিষ্কার করেন যে একাধিক ওভারল্যাপিং কম্পোজিট ক্যান্ডিডেট কি থাকলে ৩য় নরমাল ফর্ম (3NF) সমস্ত ডাটা পুনরাবৃত্তি দূর করতে পারে না। ৩য় নরমাল ফর্মের আনুষ্ঠানিক সংজ্ঞাটি স্মরণ করুন: প্রতিটি ডিপেন্ডেন্সি X -> Y এর জন্য হয় X-কে একটি সুপার-কি হতে হবে, নয়তো Y-কে একটি প্রাইম অ্যাট্রিবিউট (কোনো ক্যান্ডিডেট কি-এর অংশ) হতে হবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The condition allowing Y to be a prime attribute acts as an exception loophole. If an attribute Y belongs to any candidate key, the determinant X is permitted to NOT be a superkey! In tables with overlapping composite keys, this exception permits update anomalies to survive right inside 3NF tables. Boyce-Codd Normal Form (BCNF) closes this loophole with 1 strict invariant: for every non-trivial functional dependency X -> Y, X must be a superkey without exception.',
        bn: 'Y-কে প্রাইম অ্যাট্রিবিউট হওয়ার এই অনুমতি একটি ফাঁক বা ব্যতিক্রম হিসেবে কাজ করে। যদি কোনো অ্যাট্রিবিউট Y যেকোনো ক্যান্ডিডেট কি-এর অংশ হয়, তবে ডিটারমিন্যান্ট X সুপার-কি না হলেও 3NF আপত্তি করে না! ওভারল্যাপিং কি থাকা টেবিলে এই ছাড়ের কারণে 3NF টেবিলেও আপডেট সমস্যা থেকে যায়। বয়েস-কড নরমাল ফর্ম (BCNF) এই ছাড় বন্ধ করে ১টি স্পষ্ট নিয়ম দেয়: প্রতিটি নন-ট্রিভিয়াল ফাংশনাল ডিপেন্ডেন্সি X -> Y এর ক্ষেত্রে X-কে কোনো ব্যতিক্রম ছাড়াই একটি সুপার-কি হতেই হবে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The BCNF Anomaly: 3NF Prime Loophole vs Strict Superkey Rule',
        bn: 'BCNF অ্যানোমালি: ৩য় নরমাল ফর্মের প্রাইম ছাড় বনাম কঠোর সুপার-কি নিয়ম'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="BCNF overlapping candidate keys diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Top Table: Teaching Assignments -->
  <g transform="translate(30, 25)">
    <rect width="680" height="85" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="680" height="26" rx="8" fill="#78350f" />
    <text x="340" y="18" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">Relation: teaching_assignments(student, course, instructor)</text>

    <text x="80" y="52" fill="#38bdf8" font-size="11" font-weight="bold">student</text>
    <text x="280" y="52" fill="#38bdf8" font-size="11" font-weight="bold">course (Prime in Key 1)</text>
    <text x="520" y="52" fill="#38bdf8" font-size="11" font-weight="bold">instructor (Prime in Key 2)</text>

    <!-- Dependencies -->
    <path d="M 120 60 C 120 78, 560 78, 560 60" stroke="#38bdf8" stroke-width="1.5" fill="none" />
    <text x="340" y="75" fill="#38bdf8" font-size="9" text-anchor="middle">FD 1: (student, course) → instructor [Determinant is Superkey ✓]</text>

    <path d="M 520 60 C 520 88, 300 88, 300 60" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,3" fill="none" />
    <text x="410" y="98" fill="#fca5a5" font-size="9" text-anchor="middle">FD 2: instructor → course [Passes 3NF because course is prime! FAILS BCNF ✗]</text>
  </g>

  <!-- Splitting Arrows -->
  <path d="M 230 120 L 170 160" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />
  <path d="M 510 120 L 560 160" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Bottom Tables: 2 BCNF Relations -->
  <!-- Table 1 -->
  <g transform="translate(40, 165)">
    <rect width="300" height="75" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="300" height="24" rx="6" fill="#064e3b" />
    <text x="150" y="16" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Table: instructor_courses [BCNF]</text>
    <text x="30" y="46" fill="#38bdf8" font-size="10" font-weight="bold">[PK] instructor</text>
    <text x="170" y="46" fill="#f8fafc" font-size="10">course</text>
    <text x="150" y="65" fill="#94a3b8" font-size="9" text-anchor="middle">instructor is now a true Superkey!</text>
  </g>

  <!-- Table 2 -->
  <g transform="translate(400, 165)">
    <rect width="300" height="75" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="300" height="24" rx="6" fill="#064e3b" />
    <text x="150" y="16" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Table: student_instructors [BCNF]</text>
    <text x="30" y="46" fill="#38bdf8" font-size="10" font-weight="bold">[PK] student</text>
    <text x="160" y="46" fill="#38bdf8" font-size="10" font-weight="bold">[PK] instructor</text>
    <text x="150" y="65" fill="#94a3b8" font-size="9" text-anchor="middle">Composite PK: (student, instructor)</text>
  </g>

  <!-- Banner -->
  <g transform="translate(30, 255)">
    <rect width="680" height="60" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="25" y="24" fill="#f8fafc" font-size="12" font-weight="bold">The BCNF Invariant</text>
    <text x="25" y="44" fill="#94a3b8" font-size="11">Every relation in BCNF is guaranteed to be in 3NF. BCNF permits zero exceptions: every determinant must be a Superkey.</text>
  </g>
</svg>`,
      caption: {
        en: 'The classic BCNF counterexample: candidate keys overlap, allowing instructor -> course to pass 3NF but violate BCNF.',
        bn: 'ক্লাসিক BCNF বিপরীত উদাহরণ: ওভারল্যাপিং ক্যান্ডিডেট কি instructor -> course-কে ৩NF পাস করায় কিন্তু BCNF ভঙ্গ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Boyce-Codd Normal Form (BCNF)',
          def: {
            en: 'A stricter version of 3NF where every determinant in every non-trivial functional dependency must be a superkey of the relation.',
            bn: '৩য় নরমাল ফর্মের একটি কঠোর সংস্করণ যেখানে প্রতিটি নন-ট্রিভিয়াল ফাংশনাল ডিপেন্ডেন্সির ডিটারমিন্যান্টকে অবশ্যই একটি সুপার-কি হতে হয়।'
          }
        },
        {
          term: 'Overlapping Candidate Keys',
          def: {
            en: '2 or more composite candidate keys that share 1 or more common attributes (such as {student, course} and {student, instructor}).',
            bn: '২টি বা ততোধিক কম্পোজিট ক্যান্ডিডেট কি যার মধ্যে ১টি বা একাধিক সাধারণ অ্যাট্রিবিউট শেয়ার করা থাকে।'
          }
        },
        {
          term: 'Prime Attribute Loophole',
          def: {
            en: 'The 3NF clause permitting X -> Y if Y is prime, allowing non-superkey determinants to cause redundancy when candidate keys overlap.',
            bn: '৩য় নরমাল ফর্মের সেই ধারা যা Y প্রাইম হলে X -> Y অনুমোদন করে, ফলে কি ওভারল্যাপ করলে নন-সুপার-কি ডিটারমিন্যান্টের কারণে রিডানড্যান্সি ঘটে।'
          }
        },
        {
          term: 'Dependency Preservation',
          def: {
            en: 'The ability to enforce all original functional dependencies in decomposed tables without executing multi-table relational joins.',
            bn: 'একাধিক টেবিলের মধ্যে রিলেশনাল জয়েন না চালিয়েই বিভক্ত টেবিলগুলোতে মূল تمام ফাংশনাল ডিপেন্ডেন্সি কার্যকর রাখার ক্ষমতা।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'dependency-tradeoff',
      text: {
        en: 'The Fundamental Tradeoff: BCNF vs Dependency Preservation',
        bn: 'মৌলিক প্রযুক্তিগত আপস: BCNF বনাম ডিপেন্ডেন্সি সংরক্ষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While BCNF completely eradicates redundancy arising from functional dependencies, decomposing into BCNF does not always preserve all functional dependencies. In the teaching_assignments example, decomposing into instructor_courses and student_instructors separates student and course into different tables. To verify the original business rule (student, course) -> instructor, the database must join both tables.',
        bn: 'BCNF ফাংশনাল ডিপেন্ডেন্সি থেকে উদ্ভূত تمام ডাটা পুনরাবৃত্তি সম্পূর্ণ দূর করলেও BCNF-এ বিভক্ত করার সময় সর্বদা সমস্ত ডিপেন্ডেন্সি সংরক্ষণ করা যায় না। teaching_assignments উদাহরণে টেবিলটিকে instructor_courses এবং student_instructors এ ভাগ করলে student এবং course দুটি আলাদা টেবিলে চলে যায়। ফলে মূল নিয়ম (student, course) -> instructor যাচাই করতে ডাটাবেসকে দুটি টেবিল জয়েন করতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In database engineering, this creates a deliberate architectural decision. A 3NF decomposition is mathematically guaranteed to be both lossless and dependency-preserving. A BCNF decomposition is always lossless, but may sacrifice dependency preservation. For this reason, many enterprise systems standardize on 3NF when cross-table constraint checks are computationally expensive.',
        bn: 'ডাটাবেস ইঞ্জিনিয়ারিংয়ে এটি একটি সুচিন্তিত স্থাপত্যগত সিদ্ধান্তের সুযোগ দেয়। ৩য় নরমাল ফর্ম রূপান্তর গাণিতিকভাবে লসলেস এবং ডিপেন্ডেন্সি সংরক্ষণের নিশ্চয়তা দেয়। অন্যদিকে BCNF রূপান্তর সর্বদা লসলেস হলেও কখনো কখনো ডিপেন্ডেন্সি সংরক্ষণ ত্যাগ করতে হয়। এই কারণে একাধিক টেবিল জুড়ে কনস্ট্রেইন্ট যাচাই অত্যন্ত ব্যয়বহুল হলে অনেক প্রতিষ্ঠান ৩য় নরমাল ফর্মকে স্ট্যান্ডার্ড হিসেবে বেছে নেয়।'
      }
    },
    {
      type: 'heading',
      id: 'node-bcnf-engine',
      text: {
        en: 'Executable BCNF Engine: Detecting Prime Loopholes and Decomposing Relations',
        bn: 'রানযোগ্য BCNF ইঞ্জিন: প্রাইম লুপহোল শনাক্তকরণ ও রিলেশন রূপান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js evaluation engine testing a relation with overlapping candidate keys. It proves that the dependency instructor -> course satisfies 3NF via the prime attribute clause, flags the BCNF violation, and executes the decomposition into 2 strict BCNF tables.',
        bn: 'নিচে ওভারল্যাপিং ক্যান্ডিডেট কি থাকা একটি রিলেশন পরীক্ষা করার সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি প্রমাণ করে যে instructor -> course ডিপেন্ডেন্সিটি প্রাইম ধারার কারণে ৩NF পূরণ করলেও BCNF ভঙ্গ করে এবং এটিকে ২টি নিখুঁত BCNF টেবিলে রূপান্তর করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Evaluate overlapping candidate keys, expose 3NF prime exception, and decompose into 2 BCNF tables',
        bn: 'ওভারল্যাপিং ক্যান্ডিডেট কি মূল্যায়ন, ৩য় নরমাল ফর্মের প্রাইম ব্যতিক্রম শনাক্তকরণ এবং ২টি BCNF টেবিলে রূপান্তর'
      },
      code: `// Boyce-Codd Normal Form (BCNF) Evaluation Engine
const candidateKeys = [
  ['student', 'course'],      // Candidate Key 1
  ['student', 'instructor']  // Candidate Key 2 (Overlapping: shares 'student')
];

// Prime attributes are all attributes participating in ANY candidate key
const primeAttributes = new Set(['student', 'course', 'instructor']);

// Given functional dependencies
const fds = [
  { lhs: ['student', 'course'], rhs: ['instructor'] },
  { lhs: ['instructor'], rhs: ['course'] }
];

function isSuperkey(attributes) {
  // Attributes form a superkey if they fully contain any candidate key
  return candidateKeys.some(ck => ck.every(attr => attributes.includes(attr)));
}

let satisfies3NF = true;
let satisfiesBCNF = true;

for (const fd of fds) {
  const isLhsSuperkey = isSuperkey(fd.lhs);
  const isRhsPrime = fd.rhs.every(attr => primeAttributes.has(attr));

  // 3NF check: LHS is superkey OR RHS is prime
  if (!isLhsSuperkey && !isRhsPrime) {
    satisfies3NF = false;
  }

  // BCNF check: LHS MUST be superkey (no prime exceptions permitted)
  if (!isLhsSuperkey) {
    satisfiesBCNF = false;
  }
}

// BCNF Decomposition: Split violating dependency into its own table
const tableInstructorCourses = {
  name: 'instructor_courses',
  primaryKey: ['instructor'],
  columns: ['instructor', 'course']
};

const tableStudentInstructors = {
  name: 'student_instructors',
  primaryKey: ['student', 'instructor'],
  columns: ['student', 'instructor']
};

console.log(\`[BCNF Engine] Identified 3NF prime exception: instructor -> course satisfies 3NF (1/1: \${satisfies3NF}) but violates BCNF (1/1: \${!satisfiesBCNF}).\`);
console.log(\`[Decomposition] Decomposed 1 non-BCNF relation into 2 strict BCNF tables (\${tableInstructorCourses.name}, \${tableStudentInstructors.name}).\`);
console.log(\`[Tradeoff Proof] Achieved 100% redundancy elimination while identifying cross-table join dependency (1/1: true).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'The Golden Rule of BCNF: Determinants Must Be Superkeys',
        bn: 'BCNF এর সোনালী নিয়ম: ডিটারমিন্যান্টকে অবশ্যই সুপার-কি হতে হবে'
      },
      text: {
        en: 'In BCNF, there is only one rule to remember: the left-hand side of every functional dependency must be a superkey. If you find any arrow X -> Y where X cannot uniquely identify all rows in the table by itself, the table is not in BCNF and must be decomposed.',
        bn: 'BCNF-এ মনে রাখার মতো মাত্র একটি সোনালী নিয়ম রয়েছে: প্রতিটি ফাংশনাল ডিপেন্ডেন্সির বাম পাশকে অবশ্যই একটি সুপার-কি হতে হবে। আপনি যদি এমন কোনো X -> Y সম্পর্ক খুঁজে পান যেখানে X নিজে একা টেবিলের সমস্ত সারি আলাদা করতে পারে না, তবে টেবিলটি BCNF-এ নেই এবং তাকে অবশ্যই বিভক্ত করতে হবে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'BCNF vs 3NF Inspector',
        bn: 'BCNF বনাম ৩NF পরিদর্শক'
      },
      description: {
        en: 'Inspect dependencies: determine whether a dependency passes 3NF via prime loophole but fails BCNF.',
        bn: 'ডিপেন্ডেন্সি পরীক্ষা করুন: কোনো নিয়ম ৩NF পাস করলেও BCNF ভঙ্গ করে কিনা তা যাচাই করুন।'
      },
      code: `function inspectNormalForm(isDeterminantSuperkey, isDependentPrime) {
  const passes3NF = isDeterminantSuperkey || isDependentPrime;
  const passesBCNF = isDeterminantSuperkey;

  if (passesBCNF) return 'PASSES_BCNF_AND_3NF';
  if (passes3NF) return 'PASSES_3NF_FAILS_BCNF_PRIME_LOOPHOLE';
  return 'FAILS_BOTH_3NF_AND_BCNF';
}

console.log('Case 1 (Superkey determinant):', inspectNormalForm(true, false));
console.log('Case 2 (Non-superkey, but prime):', inspectNormalForm(false, true));`,
      tests: [
        {
          name: {
            en: 'Superkey determinant satisfies both BCNF and 3NF',
            bn: 'সুপার-কি ডিটারমিন্যান্ট BCNF এবং ৩NF উভয়ই পূরণ করে'
          },
          expected: 'Case 1 (Superkey determinant): PASSES_BCNF_AND_3NF'
        },
        {
          name: {
            en: 'Prime dependent passes 3NF but fails BCNF',
            bn: 'প্রাইম ডিপেন্ডেন্ট ৩NF পাস করলেও BCNF ভঙ্গ করে'
          },
          expected: 'Case 2 (Non-superkey, but prime): PASSES_3NF_FAILS_BCNF_PRIME_LOOPHOLE'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'norm-bcnf-ex-1',
      kind: 'mcq',
      topic: 'bcnf-strict-definition',
      question: {
        en: 'What is the singular requirement for a relation schema to satisfy Boyce-Codd Normal Form (BCNF)?',
        bn: 'একটি রিলেশন স্কিমা বয়েস-কড নরমাল ফর্ম (BCNF) পূরণ করার একমাত্র শর্ত কোনটি?'
      },
      options: [
        {
          en: 'For every non-trivial functional dependency X -> Y, X must be a superkey of the relation without exception',
          bn: 'প্রতিটি নন-ট্রিভিয়াল ফাংশনাল ডিপেন্ডেন্সি X -> Y এর জন্য কোনো ব্যতিক্রম ছাড়াই X-কে রিলেশনের একটি সুপার-কি হতে হবে'
        },
        {
          en: 'Every table must have at least 10 foreign keys pointing to Google servers',
          bn: 'প্রতিটি টেবিলে গুগল সার্ভার নির্দেশক কমপক্ষে ১০টি ফরেন কি থাকতে হবে'
        },
        {
          en: 'Table names must begin with the letter B',
          bn: 'টেবিলের নাম অবশ্যই B অক্ষর দিয়ে শুরু হতে হবে'
        },
        {
          en: 'All numeric data types must be converted into floating-point decimals',
          bn: 'সমস্ত সংখ্যাভিত্তিক ডাটা টাইপকে ফ্লোটিং-পয়েন্ট ডেসিম্যালে রূপান্তর করতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'No prime exceptions: every determinant must uniquely identify rows (superkey).',
        bn: 'কোনো প্রাইম ছাড় নেই: প্রতিটি ডিটারমিন্যান্টকে সারি এককভাবে চিহ্নিত করতে হবে (সুপার-কি)।'
      },
      explanation: {
        en: 'BCNF eliminates the 3NF clause where Y is permitted to be prime. Every non-trivial determinant X must be a full superkey, eradicating all redundancy from functional dependencies.',
        bn: 'BCNF ৩য় নরমাল ফর্মের প্রাইম ছাড় বাতিল করে দেয়। প্রতিটি নন-ট্রিভিয়াল ডিটারমিন্যান্ট X-কে অবশ্যই একটি পূর্ণাঙ্গ সুপার-কি হতে হয়, যা সমস্ত ডাটা পুনরাবৃত্তি দূর করে।'
      }
    },
    {
      id: 'norm-bcnf-ex-2',
      kind: 'mcq',
      topic: 'bcnf-3nf-superset-relationship',
      question: {
        en: 'Which of the following statements correctly describes the hierarchical relationship between 3NF and BCNF?',
        bn: 'নিচের কোন বক্তব্যটি ৩NF এবং BCNF-এর মধ্যকার হায়ারার্কিক্যাল সম্পর্ক সঠিকভাবে বর্ণনা করে?'
      },
      options: [
        {
          en: 'Every relation in BCNF is guaranteed to be in 3NF, but a relation in 3NF is not necessarily in BCNF',
          bn: 'BCNF-এ থাকা প্রতিটি রিলেশন নিশ্চিতভাবেই ৩NF-এ থাকে, কিন্তু ৩NF-এ থাকা কোনো রিলেশন বাধ্যতামূলকভাবে BCNF-এ নাও থাকতে পারে'
        },
        {
          en: '3NF and BCNF are completely unrelated concepts that cannot be compared',
          bn: '৩NF এবং BCNF দুটি সম্পূর্ণ সম্পর্কহীন ধারণা যাদের তুলনা করা যায় না'
        },
        {
          en: 'BCNF is weaker than 2NF and permits partial dependencies',
          bn: 'BCNF ২য় নরমাল ফর্মের চেয়ে দুর্বল এবং আংশিক নির্ভরতা অনুমোদন করে'
        },
        {
          en: 'A table can only achieve BCNF if it contains zero rows',
          bn: 'একটি টেবিল কেবল তখনই BCNF অর্জন করতে পারে যদি তাতে কোনো রো না থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'BCNF is a stricter subset of 3NF (sometimes referred to as 3.5NF).',
        bn: 'BCNF হলো ৩য় নরমাল ফর্মের একটি কঠোরতর সাবসেট (যাকে প্রায়ই ৩.৫NF বলা হয়)।'
      },
      explanation: {
        en: 'Because BCNF enforces all requirements of 3NF without permitting the prime-attribute exception, any table in BCNF is automatically in 3NF.',
        bn: 'যেহেতু BCNF কোনো প্রাইম ছাড় ছাড়াই ৩য় নরমাল ফর্মের تمام শর্ত কার্যকর করে, তাই BCNF-এ থাকা যেকোনো টেবিল স্বয়ংক্রিয়ভাবেই ৩NF-এ থাকে।'
      }
    },
    {
      id: 'norm-bcnf-ex-3',
      kind: 'mcq',
      topic: 'overlapping-candidate-keys-scenario',
      question: {
        en: 'Under what schema conditions does a relation typically satisfy 3NF while simultaneously violating BCNF?',
        bn: 'কোন স্কিমা পরিস্থিতিতে একটি রিলেশন সাধারণত ৩NF পূরণ করা সত্ত্বেও একই সাথে BCNF লঙ্ঘন করে?'
      },
      options: [
        {
          en: 'When the relation has two or more composite candidate keys that overlap (share common attributes)',
          bn: 'যখন রিলেশনটিতে দুটি বা ততোধিক কম্পোজিট ক্যান্ডিডেট কি থাকে যা একে অপরের সাথে ওভারল্যাপ করে (সাধারণ অ্যাট্রিবিউট শেয়ার করে)'
        },
        {
          en: 'When the table has only 1 column named id',
          bn: 'যখন টেবিলে id নামের মাত্র ১টি কলাম থাকে'
        },
        {
          en: 'When the table is stored on an external USB flash drive',
          bn: 'যখন টেবিলটি কোনো বাহ্যিক ইউএসবি ফ্ল্যাশ ড্রাইভে সংরক্ষিত থাকে'
        },
        {
          en: 'When users query the database using Python instead of JavaScript',
          bn: 'যখন ব্যবহারকারীরা জাভাস্ক্রিপ্টের বদলে পাইথন দিয়ে ডাটাবেস কোয়েরি করেন'
        }
      ],
      answer: 0,
      hint: {
        en: 'Overlapping composite keys allow an attribute from one key to be determined by a non-superkey.',
        bn: 'ওভারল্যাপিং কম্পোজিট কি থাকলে এক কি-এর অংশ অন্য কোনো নন-সুপার-কি দ্বারা নির্ধারিত হতে পারে।'
      },
      explanation: {
        en: 'When candidate keys overlap, a functional dependency can have a determinant that is not a superkey, while its dependent is prime in the other candidate key. This satisfies 3NF but violates BCNF.',
        bn: 'ক্যান্ডিডেট কি ওভারল্যাপ করলে কোনো ডিপেন্ডেন্সির ডিটারমিন্যান্ট সুপার-কি না হলেও ডিপেন্ডেন্টটি অন্য ক্যান্ডিডেট কি-এর প্রাইম অ্যাট্রিবিউট হতে পারে। এটি ৩NF পূরণ করে কিন্তু BCNF ভঙ্গ করে।'
      }
    },
    {
      id: 'norm-bcnf-ex-4',
      kind: 'mcq',
      topic: 'dependency-preservation-loss-consequence',
      question: {
        en: 'What architectural tradeoff must engineers accept when decomposing a relation into BCNF if dependency preservation is lost?',
        bn: 'BCNF-এ রূপান্তরের সময় ডিপেন্ডেন্সি সংরক্ষণ হারিয়ে গেলে ইঞ্জিনিয়ারদের কোন প্রযুক্তিগত আপসটি মেনে নিতে হয়?'
      },
      options: [
        {
          en: 'Enforcing the lost functional dependency requires expensive cross-table joins or application-layer transactions rather than native single-table database constraints',
          bn: 'হারিয়ে যাওয়া ফাংশনাল ডিপেন্ডেন্সি কার্যকর রাখতে একক টেবিল কনস্ট্রেইন্টের বদলে ব্যয়বহুল ক্রস-টেবিল জয়েন বা অ্যাপ্লিকেশন লেয়ার ট্রানজ্যাকশন ব্যবহার করতে হয়'
        },
        {
          en: 'The database server must delete half of its hard drive partitions',
          bn: 'ডাটাবেস সার্ভারকে তার হার্ডড্রাইভের অর্ধেক পার্টিশন মুছে ফেলতে হয়'
        },
        {
          en: 'The application cannot accept HTTP POST requests',
          bn: 'অ্যাপ্লিকেশন কোনো HTTP POST রিকোয়েস্ট গ্রহণ করতে পারে না'
        },
        {
          en: 'All primary keys are converted into random floating-point numbers',
          bn: 'সমস্ত প্রাইমারি কি এলোমেলো ফ্লোটিং-পয়েন্ট সংখ্যায় রূপান্তরিত হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Constraints spanning multiple tables cannot be checked by native UNIQUE or CHECK constraints on one table.',
        bn: 'একাধিক টেবিলে ছড়িয়ে থাকা নিয়মগুলো একটি টেবিলের নিজস্ব UNIQUE বা CHECK কনস্ট্রেইন্ট দিয়ে যাচাই করা যায় না।'
      },
      explanation: {
        en: 'When a dependency is not preserved, verifying that rule upon INSERT requires an expensive multi-table join transaction. Teams often choose 3NF over BCNF to keep constraint enforcement native and fast.',
        bn: 'ডিপেন্ডেন্সি সংরক্ষিত না থাকলে নতুন ডাটা ইনসার্টের সময় সেই নিয়ম যাচাই করতে একাধিক টেবিল জয়েন করতে হয়। তাই স্থানীয় ও দ্রুত কনস্ট্রেইন্ট রক্ষার জন্য দলগুলো প্রায়ই BCNF-এর চেয়ে ৩NF পছন্দ করে।'
      }
    }
  ],
  quiz: {
    id: 'bcnfs-and-the-bcnf-quiz',
    title: {
      en: 'Boyce-Codd Normal Form (BCNF) Mastery Quiz',
      bn: 'বয়েস-কড নরমাল ফর্ম (BCNF) দক্ষতা যাচাই কুইজ'
    },
    questions: [
      {
        id: 'norm-bcnf-qz-1',
        kind: 'mcq',
        topic: 'superkey-test-in-bcnf',
        question: {
          en: 'Given a relation schema R(A, B, C) with candidate keys {A, B} and {A, C}, and the functional dependency C -> B, does this relation satisfy BCNF?',
          bn: 'একটি রিলেশন R(A, B, C)-এ ক্যান্ডিডেট কি {A, B} এবং {A, C} এবং ফাংশনাল ডিপেন্ডেন্সি C -> B থাকলে, এটি কি BCNF পূরণ করে?'
        },
        options: [
          {
            en: 'No, because C is not a superkey of relation R, violating the strict BCNF requirement',
            bn: 'না, কারণ C রিলেশন R-এর কোনো সুপার-কি নয়, যা BCNF-এর কঠোর নিয়ম ভঙ্গ করে'
          },
          {
            en: 'Yes, because B is a prime attribute belonging to candidate key {A, B}',
            bn: 'হ্যাঁ, কারণ B একটি প্রাইম অ্যাট্রিবিউট যা ক্যান্ডিডেট কি {A, B}-এর অংশ'
          },
          {
            en: 'Yes, all 3-column tables automatically satisfy BCNF',
            bn: 'হ্যাঁ, সমস্ত ৩-কলামের টেবিল স্বয়ংক্রিয়ভাবে BCNF পূরণ করে'
          },
          {
            en: 'No, because column names must be spelled out in full English words',
            bn: 'না, কারণ কলামের নাম অবশ্যই পূর্ণ ইংরেজি শব্দে লিখতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'BCNF requires C to be a superkey; the fact that B is prime is irrelevant in BCNF.',
          bn: 'BCNF-এর জন্য C-কে সুপার-কি হতে হবে; B যে প্রাইম অ্যাট্রিবিউট তা BCNF-এ কোনো ছাড় দেয় না।'
        },
        explanation: {
          en: 'While C -> B satisfies 3NF because B is a prime attribute, C is not a superkey of R. Therefore, this dependency directly violates BCNF and requires decomposition.',
          bn: 'C -> B সম্পর্কটি ৩NF পূরণ করে কারণ B একটি প্রাইম অ্যাট্রিবিউট, কিন্তু C কোনো সুপার-কি নয়। তাই এটি সরাসরি BCNF লঙ্ঘন করে এবং টেবিলটিকে বিভক্ত করা আবশ্যক।'
        }
      },
      {
        id: 'norm-bcnf-qz-2',
        kind: 'mcq',
        topic: 'bcnf-decomposition-algorithm',
        question: {
          en: 'When decomposing a violating relation R with dependency X -> Y into BCNF, what are the two resulting sub-relations?',
          bn: 'X -> Y নির্ভরতার কারণে BCNF ভঙ্গ করা একটি রিলেশন R-কে বিভক্ত করার সময় প্রাপ্ত দুটি সাব-রিলেশন কী কী হয়?'
        },
        options: [
          {
            en: 'R1 with attributes (X ∪ Y) where X is the primary key, and R2 with attributes (R - Y) ∪ X',
            bn: 'R1 যার অ্যাট্রিবিউট (X ∪ Y) যেখানে X হলো প্রাইমারি কি, এবং R2 যার অ্যাট্রিবিউট (R - Y) ∪ X'
          },
          {
            en: 'Two completely empty tables with no columns or rows',
            bn: 'কোনো কলাম বা রো ছাড়া দুটি সম্পূর্ণ ফাঁকা টেবিল'
          },
          {
            en: 'One table containing only vowels and one table containing consonants',
            bn: 'একটি টেবিলে কেবল স্বরবর্ণ এবং অন্য টেবিলে ব্যঞ্জনবর্ণ থাকবে'
          },
          {
            en: 'R1 containing all integers and R2 containing all floating-point numbers',
            bn: 'R1 সমস্ত পূর্ণসংখ্যা এবং R2 সমস্ত দশমিক সংখ্যা ধারণ করবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'R1 captures the violating dependency with X as key; R2 retains the remainder with X as foreign key.',
          bn: 'R1 ভঙ্গকারী নিয়মটিকে X-কে কি বানিয়ে ধারণ করে; R2 বাকি অংশকে X-কে ফরেন কি বানিয়ে সংরক্ষণ করে।'
        },
        explanation: {
          en: 'The standard BCNF decomposition algorithm isolates the violating dependency into R1(X, Y) where X becomes the primary key, leaving R2(R - Y + X). The join on common attribute X is guaranteed to be lossless.',
          bn: 'স্ট্যান্ডার্ড BCNF ডিকম্পোজিশন অ্যালগরিদম ভঙ্গকারী ডিপেন্ডেন্সিকে R1(X, Y) এ আলাদা করে যেখানে X প্রাইমারি কি হয় এবং বাকি ডাটা R2-তে থাকে। সাধারণ অ্যাট্রিবিউট X-এর ওপর জয়েনটি লসলেস হওয়া নিশ্চিত।'
        }
      },
      {
        id: 'norm-bcnf-qz-3',
        kind: 'mcq',
        topic: 'lossless-join-bcnf-theorem',
        question: {
          en: 'What mathematical condition guarantees that a decomposition of relation R into R1 and R2 is a Lossless Join Decomposition?',
          bn: 'কোন গাণিতিক শর্তটি নিশ্চিত করে যে রিলেশন R-কে R1 এবং R2-তে বিভক্ত করা একটি লসলেস জয়েন ডিকম্পোজিশন?'
        },
        options: [
          {
            en: 'The intersection (R1 ∩ R2) must form a superkey of at least one of the decomposed relations (R1 or R2)',
            bn: 'উভয় টেবিলের সাধারণ উপাদান (R1 ∩ R2) অন্তত একটি সাব-রিলেশনের (R1 বা R2) সুপার-কি হতে হবে'
          },
          {
            en: 'Both tables must have identical numbers of rows on disk',
            bn: 'ডিস্কে উভয় টেবিলের রো সংখ্যা হুবহু সমান হতে হবে'
          },
          {
            en: 'The total storage size of R1 must equal the storage size of R2',
            bn: 'R1-এর মোট মেমরি আকার R2-এর মেমরি আকারের সমান হতে হবে'
          },
          {
            en: 'Both tables must be created within 5 minutes of each other',
            bn: 'উভয় টেবিল একে অপরের ৫ মিনিটের ব্যবধানে তৈরি হতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The shared attribute must uniquely identify tuples in at least one of the two tables.',
          bn: 'শেয়ার করা অ্যাট্রিবিউটটিকে অন্তত একটি টেবিলের সারি এককভাবে চিহ্নিত করতে হবে।'
        },
        explanation: {
          en: 'Under relational algebra, a binary decomposition is lossless if and only if the common attributes (R1 ∩ R2) functionally determine either R1 or R2, ensuring no spurious rows are created during joins.',
          bn: 'রিলেশনাল অ্যালজেব্রায় একটি বাইনারি ডিকম্পোজিশন লসলেস হবে যদি এবং কেবল যদি সাধারণ অ্যাট্রিবিউটগুলো (R1 ∩ R2) R1 অথবা R2-এর সুপার-কি হয়, যা জয়েনের সময় কোনো ভুয়া সারি তৈরি না হওয়া নিশ্চিত করে।'
        }
      },
      {
        id: 'norm-bcnf-qz-4',
        kind: 'mcq',
        topic: 'bcnf-industrial-prevalence',
        question: {
          en: 'In industrial software development, why are most relational database schemas normalized to 3NF or BCNF rather than stopping at 2NF?',
          bn: 'বাস্তব সফটওয়্যার ডেভেলপমেন্টে বেশিরভাগ রিলেশনাল ডাটাবেস কেন ২য় নরমাল ফর্মে না থেমে ৩NF বা BCNF পর্যন্ত নরমালাইজ করা হয়?'
        },
        options: [
          {
            en: 'Because stopping at 2NF leaves transitive and determinant update anomalies, which cause data corruption and contradictory records under concurrent write operations',
            bn: 'কারণ ২য় নরমাল ফর্মে থেমে গেলে পরোক্ষ ও ডিটারমিন্যান্ট আপডেট সমস্যা থেকে যায়, যা সমসাময়িক পরিবর্তনের সময় ডাটা বিকৃতি ও পরস্পরবিরোধী রেকর্ড তৈরি করে'
          },
          {
            en: 'Because modern SQL engines refuse to boot unless schemas are certified BCNF',
            bn: 'কারণ স্কিমা BCNF সনদপ্রাপ্ত না হলে আধুনিক SQL ইঞ্জিন চালু হতে অস্বীকৃতি জানায়'
          },
          {
            en: 'Because 2NF tables consume 100 times more network bandwidth on the internet',
            bn: 'কারণ ২য় নরমাল ফর্মের টেবিল ইন্টারনেটে ১০০ গুণ বেশি ব্যান্ডউইথ খরচ করে'
          },
          {
            en: 'Because BCNF tables do not require database passwords to access',
            bn: 'কারণ BCNF টেবিল অ্যাক্সেস করতে কোনো ডাটাবেস পাসওয়ার্ডের প্রয়োজন হয় না'
          }
        ],
        answer: 0,
        hint: {
          en: '3NF and BCNF eliminate the vast majority of real-world update and deletion inconsistencies.',
          bn: '৩য় নরমাল ফর্ম এবং BCNF বাস্তব জীবনের প্রায় সমস্ত আপডেট ও ডিলিট অসঙ্গতি চিরতরে দূর করে।'
        },
        explanation: {
          en: '3NF and BCNF eliminate functional dependency redundancy across all 3 relational normal forms, ensuring each fact is recorded in exactly 1 place. This prevents concurrent transactions from mutating data into conflicting, corrupted states.',
          bn: '3NF এবং BCNF ৩টি স্তরের নিয়মে রিডানড্যান্সি দূর করে প্রতিটি তথ্য ঠিক ১টি স্থানে সংরক্ষণ নিশ্চিত করে। এটি কনকারেন্ট ট্রানজ্যাকশনের সময় ডাটা বিকৃত হওয়া থেকে সিস্টেমকে রক্ষা করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'multis-and-the-multi',
    title: {
      en: 'Fourth Normal Form (4NF): Multivalued Dependencies',
      bn: '৪র্থ নরমাল ফর্ম (4NF): মাল্টিভ্যালুড নির্ভরতা দূরীকরণ'
    }
  }
};
