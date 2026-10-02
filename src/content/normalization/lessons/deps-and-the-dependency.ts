import type { Lesson } from '../../../lib/types';

export const DepsAndTheDependencyLesson: Lesson = {
  slug: 'deps-and-the-dependency',
  tech: 'normalization',
  title: {
    en: 'Functional Dependencies & Armstrong\'s Axioms',
    bn: 'ফাংশনাল ডিপেন্ডেন্সি ও আর্মস্ট্রংয়ের স্বতঃসিদ্ধ'
  },
  summary: {
    en: 'Master the mathematical foundation of relational normalization: functional dependencies (X -> Y), determinant attributes, Armstrong\'s axioms, attribute closure algorithms, and candidate key derivations.',
    bn: 'রিলেশনাল নরমালাইজেশনের গাণিতিক ভিত্তি আয়ত্ত করুন: ফাংশনাল ডিপেন্ডেন্সি (X -> Y), ডিটারমিন্যান্ট অ্যাট্রিবিউট, আর্মস্ট্রংয়ের স্বতঃসিদ্ধ, অ্যাট্রিবিউট ক্লোজার অ্যালগরিদম এবং ক্যান্ডিডেট কি নির্ধারণ।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'functional-dependencies-definition',
      text: {
        en: 'The Grammar of Data Invariants: Functional Dependencies',
        bn: 'ডাটা নিয়মের ব্যাকরণ: ফাংশনাল ডিপেন্ডেন্সি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When designing relational database tables, you must define mathematical constraints that prevent conflicting values from coexisting. A functional dependency is a formal constraint between two sets of attributes in a relation. Given a relation schema R, an attribute set Y is functionally dependent on attribute set X (written X -> Y). This holds if whenever 2 rows have identical values for X, they must also share 1 identical set of values for Y.',
        bn: 'রিলেশনাল ডাটাবেস টেবিল ডিজাইন করার সময় আপনাকে এমন গাণিতিক নিয়ম সংজ্ঞায়িত করতে হয় যা পরস্পরবিরোধী ডাটার সহাবস্থান রোধ করে। একটি ফাংশনাল ডিপেন্ডেন্সি হলো একটি রিলেশনের দুটি অ্যাট্রিবিউট সেটের মধ্যকার আনুষ্ঠানিক সম্পর্ক। একটি রিলেশন R-এ অ্যাট্রিবিউট সেট Y অ্যাট্রিবিউট সেট X-এর ওপর ফাংশনালি নির্ভরশীল (X -> Y লেখা হয়)। এটি তখনই ঘটে যখন যেকোনো ২টি সারিতে X-এর মান অভিন্ন হলে তাদের Y-এর মানও অবশ্যই ১টি নির্দিষ্ট মান ধারণ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In the expression X -> Y, the left-hand attribute set X is called the determinant, while the right-hand set Y is called the dependent. For example, in an employee table, the dependency national_id -> (full_name, birth_date) holds because a single national identification number uniquely fixes a person\'s full name and date of birth. Two citizens with the same ID number cannot possess two different names.',
        bn: 'X -> Y সম্পর্কে বাম পাশের X অ্যাট্রিবিউট সেটকে ডিটারমিন্যান্ট (determinant) এবং ডান পাশের Y সেটকে ডিপেন্ডেন্ট (dependent) বলা হয়। উদাহরণস্বরূপ, একটি কর্মচারী টেবিলে national_id -> (full_name, birth_date) সম্পর্কটি বহাল থাকে কারণ একটি নির্দিষ্ট জাতীয় পরিচয়পত্র নম্বর কোনো ব্যক্তির পুরো নাম এবং জন্ম তারিখকে এককভাবে নির্ধারণ করে। একই আইডি নম্বরধারী ২ জন নাগরিকের দুটি ভিন্ন নাম থাকতে পারে না।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Armstrong\'s Axioms and Transitive Dependency Flow',
        bn: 'আর্মস্ট্রংয়ের স্বতঃসিদ্ধ ও ট্রানজিটিভ নির্ভরতার প্রবাহ'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Functional dependency and Armstrong axioms diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Determinant A -->
  <g transform="translate(40, 50)">
    <rect width="130" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <text x="65" y="32" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Attribute A</text>
    <text x="65" y="52" fill="#94a3b8" font-size="10" text-anchor="middle">Primary Key [ID]</text>
  </g>

  <!-- Arrow A -> B -->
  <path d="M 170 85 L 230 85" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow)" />
  <text x="200" y="75" fill="#facc15" font-size="10" text-anchor="middle" font-weight="bold">A → B</text>

  <!-- Determinant B -->
  <g transform="translate(230, 50)">
    <rect width="130" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <text x="65" y="32" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Attribute B</text>
    <text x="65" y="52" fill="#94a3b8" font-size="10" text-anchor="middle">Department ID</text>
  </g>

  <!-- Arrow B -> C -->
  <path d="M 360 85 L 420 85" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arrow)" />
  <text x="390" y="75" fill="#facc15" font-size="10" text-anchor="middle" font-weight="bold">B → C</text>

  <!-- Dependent C -->
  <g transform="translate(420, 50)">
    <rect width="130" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <text x="65" y="32" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Attribute C</text>
    <text x="65" y="52" fill="#94a3b8" font-size="10" text-anchor="middle">Dept Budget</text>
  </g>

  <!-- Arrow C -> D -->
  <path d="M 550 85 L 600 85" stroke="#38bdf8" stroke-width="2.5" />
  <text x="575" y="75" fill="#facc15" font-size="10" text-anchor="middle" font-weight="bold">C → D</text>

  <!-- Dependent D -->
  <g transform="translate(600, 50)">
    <rect width="105" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <text x="52" y="32" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Attr D</text>
    <text x="52" y="52" fill="#94a3b8" font-size="10" text-anchor="middle">Tax Code</text>
  </g>

  <!-- Transitive Closure Arc A -> D -->
  <path d="M 105 120 C 105 180, 650 180, 650 120" stroke="#f43f5e" stroke-width="2" stroke-dasharray="6,4" fill="none" />
  <text x="375" y="195" fill="#f43f5e" font-size="11" font-weight="bold" text-anchor="middle">Transitivity: A → B and B → C and C → D implies A → D</text>

  <!-- 3 Primary Armstrong Axioms Summary Box -->
  <g transform="translate(40, 215)">
    <rect width="665" height="90" rx="8" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="25" y="25" fill="#f8fafc" font-size="12" font-weight="bold">Armstrong's Axioms (1974): Sound and Complete Deduction Rules</text>
    <text x="25" y="47" fill="#cbd5e1" font-size="11">1. Reflexivity: If Y is a subset of X, then X → Y (Trivial dependency).</text>
    <text x="25" y="65" fill="#cbd5e1" font-size="11">2. Augmentation: If X → Y, then XZ → YZ for any arbitrary attribute set Z.</text>
    <text x="25" y="83" fill="#cbd5e1" font-size="11">3. Transitivity: If X → Y and Y → Z, then X → Z holds without exception.</text>
  </g>
</svg>`,
      caption: {
        en: 'Visualizing functional dependencies: direct determinants link attributes, while Armstrong\'s transitivity axiom proves indirect dependencies.',
        bn: 'ফাংশনাল ডিপেন্ডেন্সির চিত্ররূপ: প্রত্যক্ষ ডিটারমিন্যান্টগুলো অ্যাট্রিবিউট সংযুক্ত করে এবং আর্মস্ট্রংয়ের ট্রানজিটিভিটি স্বতঃসিদ্ধ পরোক্ষ নির্ভরতা প্রমাণ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Functional Dependency',
          def: {
            en: 'A mathematical constraint between two sets of attributes stating that the values of set X uniquely determine the values of set Y (written X -> Y).',
            bn: 'দুটি অ্যাট্রিবিউট সেটের মধ্যকার এমন একটি গাণিতিক সম্পর্ক যা নির্দেশ করে X সেটের মানগুলো Y সেটের মানকে একক ও সুনির্দিষ্টভাবে নির্ধারণ করে।'
          }
        },
        {
          term: 'Determinant',
          def: {
            en: 'The attribute or set of attributes residing on the left-hand side of a functional dependency (X in X -> Y) that determines other values.',
            bn: 'একটি ফাংশনাল ডিপেন্ডেন্সির বাম পাশের অ্যাট্রিবিউট বা অ্যাট্রিবিউট সেট (X -> Y এর X) যা অন্য মানগুলোকে সুনির্দিষ্ট করে।'
          }
        },
        {
          term: 'Attribute Closure',
          def: {
            en: 'The complete set of all attributes that can be functionally derived from a starting attribute set X using a known set of functional dependencies.',
            bn: 'প্রদত্ত ফাংশনাল ডিপেন্ডেন্সিগুলো ব্যবহার করে কোনো নির্দিষ্ট অ্যাট্রিবিউট সেট X থেকে প্রাপ্ত সকল অ্যাট্রিবিউটের পূর্ণাঙ্গ সেট।'
          }
        },
        {
          term: 'Minimal Cover',
          def: {
            en: 'A simplified, non-redundant canonical set of functional dependencies that has the exact same deductive power as the original dependency set.',
            bn: 'ফাংশনাল ডিপেন্ডেন্সির এমন একটি সংক্ষিপ্ত ও দ্বিরুক্তিমুক্ত রূপ যার যৌক্তিক সিদ্ধান্ত গ্রহণের ক্ষমতা মূল ডিপেন্ডেন্সি সেটের সমান।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'armstrong-axioms-rules',
      text: {
        en: 'Armstrong\'s Axioms and the Attribute Closure Algorithm',
        bn: 'আর্মস্ট্রংয়ের স্বতঃসিদ্ধ ও অ্যাট্রিবিউট ক্লোজার অ্যালগরিদম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In 1974, computer scientist William W. Armstrong formulated 3 fundamental inference rules known as Armstrong\'s Axioms. These axioms are sound (they never derive false dependencies) and complete (they can derive every valid dependency in the schema). From these 3 primary axioms, database theorists derive secondary convenience rules. These include Union (if X -> Y and X -> Z, then X -> YZ), Decomposition, and Pseudotransitivity.',
        bn: '১৯৭৪ সালে কম্পিউটার বিজ্ঞানী উইলিয়াম ডব্লিউ আর্মস্ট্রং ৩টি মৌলিক অনুমান নিয়ম প্রণয়ন করেন যা আর্মস্ট্রংয়ের স্বতঃসিদ্ধ নামে পরিচিত। এই স্বতঃসিদ্ধগুলো নির্ভুল (কখনো ভুল নির্ভরতা তৈরি করে না) এবং পূর্ণাঙ্গ (স্কিমার প্রতিটি বৈধ নির্ভরতা প্রমাণ করতে সক্ষম)। এই ৩টি মূল স্বতঃসিদ্ধ থেকে সহায়ক নিয়মগুলো তৈরি হয়েছে। এর মধ্যে রয়েছে ইউনিয়ন নিয়ম (যদি X -> Y এবং X -> Z হয়, তবে X -> YZ), ডিকম্পোজিশন নিয়ম এবং সিউডোট্রানজিটিভিটি।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Attribute Closure algorithm calculates the complete closure of an attribute set X (written X+). Starting with X+ = X, the algorithm repeatedly scans all functional dependencies. If any dependency has its left-hand side fully contained in X+, its right-hand attributes are unioned into X+. When X+ covers all attributes of a relation, X is proven to be a Superkey. If no subset of X is a superkey, X is officially a Candidate Key.',
        bn: 'অ্যাট্রিবিউট ক্লোজার অ্যালগরিদম একটি অ্যাট্রিবিউট সেট X-এর পূর্ণাঙ্গ প্রভাব বা ক্লোজার (X+ লেখা হয়) গণনা করে। শুরুতে X+ = X ধরে নিয়ে অ্যালগরিদমটি বারবার সকল ফাংশনাল ডিপেন্ডেন্সি স্ক্যান করে। যদি কোনো নির্ভরতার বাম পাশ সম্পূর্ণভাবে X+-এ বিদ্যমান থাকে, তবে তার ডান পাশের অ্যাট্রিবিউটগুলো X+-এ যুক্ত করা হয়। যখন X+ রিলেশনের সমস্ত অ্যাট্রিবিউটকে অন্তর্ভুক্ত করে, তখন প্রমাণিত হয় যে X একটি সুপার-কি। আর X-এর কোনো ক্ষুদ্রতর সাবসেট যদি সুপার-কি না হয়, তবে X আনুষ্ঠানিকভাবে একটি ক্যান্ডিডেট কি হিসেবে গণ্য হয়।'
      }
    },
    {
      type: 'heading',
      id: 'node-closure-engine',
      text: {
        en: 'Executable Closure Engine: Computing X+ and Candidate Keys',
        bn: 'রানযোগ্য ক্লোজার ইঞ্জিন: X+ এবং ক্যান্ডিডেট কি গণনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js implementation of the Attribute Closure algorithm. It tests a 5-attribute relation R(A, B, C, D, E) against 4 functional dependencies, calculates the attribute closure of {A}, proves that {A} is a candidate key, and validates transitive dependency derivation.',
        bn: 'নিচে অ্যাট্রিবিউট ক্লোজার অ্যালগরিদমের একটি সম্পূর্ণ Node.js বাস্তবায়ন দেওয়া হলো। এটি ৫টি অ্যাট্রিবিউটের রিলেশন R(A, B, C, D, E) এবং ৪টি ফাংশনাল ডিপেন্ডেন্সি পরীক্ষা করে {A}-এর ক্লোজার হিসাব করে, {A} যে একটি ক্যান্ডিডেট কি তা প্রমাণ করে এবং ট্রানজিটিভ নির্ভরতার সত্যতা নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Compute attribute closure X+ and prove candidate key invariants across 5 relational attributes',
        bn: '৫টি রিলেশনাল অ্যাট্রিবিউটের মধ্যে অ্যাট্রিবিউট ক্লোজার X+ গণনা এবং ক্যান্ডিডেট কি নিয়ম প্রমাণ'
      },
      code: `// Attribute Closure Algorithm and Candidate Key Verification
const relationAttributes = ['A', 'B', 'C', 'D', 'E'];

// Set of given functional dependencies: A -> B, B -> C, C -> D, D -> E
const functionalDependencies = [
  { determinant: ['A'], dependent: ['B'] },
  { determinant: ['B'], dependent: ['C'] },
  { determinant: ['C'], dependent: ['D'] },
  { determinant: ['D'], dependent: ['E'] }
];

function computeAttributeClosure(startingAttributes, fds) {
  const closure = new Set(startingAttributes);
  let hasGrown = true;

  while (hasGrown) {
    hasGrown = false;
    for (const fd of fds) {
      // Check if all determinant attributes currently reside in closure
      const isLhsSatisfied = fd.determinant.every(attr => closure.has(attr));
      if (isLhsSatisfied) {
        for (const targetAttr of fd.dependent) {
          if (!closure.has(targetAttr)) {
            closure.add(targetAttr);
            hasGrown = true; // Added new attribute, repeat loop
          }
        }
      }
    }
  }

  return Array.from(closure).sort();
}

// Compute closure for attribute {A}
const aClosure = computeAttributeClosure(['A'], functionalDependencies);

// Invariant: If closure contains all attributes in R, {A} is a Superkey
const isSuperkey = relationAttributes.every(attr => aClosure.includes(attr));
const isTransitiveHold = aClosure.includes('D');

console.log(\`[FD Engine] Attribute closure for {A}: [\${aClosure.join(', ')}] (all \${aClosure.length} attributes resolved).\`);
console.log(\`[Candidate Key Invariant] {A} uniquely determines all attributes in relation R (1/1: \${isSuperkey}).\`);
console.log(\`[Transitivity Proof] Transitive path A -> B -> C -> D holds true (1/1: \${isTransitiveHold}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Trivial Dependencies Require No Storage Constraints',
        bn: 'ট্রিভিয়াল ডিপেন্ডেন্সির জন্য কোনো স্টোরেজ কনস্ট্রেইন্টের প্রয়োজন নেই'
      },
      text: {
        en: 'A dependency X -> Y is trivial if Y is a subset of X (for example, {user_id, email} -> email). Trivial dependencies are mathematically guaranteed by definition and cannot be violated in any valid relational table. In database normalization, engineers focus exclusively on non-trivial dependencies because only non-trivial rules enforce real business invariants.',
        bn: 'একটি ডিপেন্ডেন্সি X -> Y ট্রিভিয়াল বা তুচ্ছ হবে যদি Y সম্পূর্ণভাবে X-এর উপসেট হয় (যেমন {user_id, email} -> email)। ট্রিভিয়াল ডিপেন্ডেন্সি সংজ্ঞাগতভাবেই নিশ্চিত থাকে এবং কোনো রিলেশনাল টেবিলে তা ভঙ্গ করা সম্ভব নয়। ডাটাবেস নরমালাইজেশনে প্রকৌশলীরা কেবল নন-ট্রিভিয়াল নির্ভরতার ওপর মনোযোগ দেন কারণ এগুলোই বাস্তব ব্যবসায়িক নিয়ম কার্যকর করে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Interactive Attribute Closure Evaluator',
        bn: 'ইন্টারঅ্যাক্টিভ অ্যাট্রিবিউট ক্লোজার মূল্যায়ন'
      },
      description: {
        en: 'Evaluate attribute closures under functional dependencies: determine whether a candidate attribute set derives the entire relation.',
        bn: 'ফাংশনাল ডিপেন্ডেন্সির অধীনে অ্যাট্রিবিউট ক্লোজার মূল্যায়ন করুন: একটি অ্যাট্রিবিউট সেট পুরো রিলেশন তৈরি করতে পারে কিনা তা নির্ধারণ করুন।'
      },
      code: `const fds = [
  { lhs: ['student_id'], rhs: ['advisor_id'] },
  { lhs: ['advisor_id'], rhs: ['office_room'] }
];

function deriveClosure(initialAttrs) {
  const closure = new Set(initialAttrs);
  let changed = true;
  while (changed) {
    changed = false;
    for (const fd of fds) {
      if (fd.lhs.every(a => closure.has(a))) {
        for (const r of fd.rhs) {
          if (!closure.has(r)) {
            closure.add(r);
            changed = true;
          }
        }
      }
    }
  }
  return [...closure].sort();
}

console.log('Closure of [student_id]:', deriveClosure(['student_id']));
console.log('Closure of [advisor_id]:', deriveClosure(['advisor_id']));`,
      tests: [
        {
          name: {
            en: 'student_id closure resolves student, advisor, and office room transitively',
            bn: 'student_id ক্লোজার ট্রানজিটিভভাবে শিক্ষার্থী, উপদেষ্টা এবং অফিস রুম সমাধান করে'
          },
          expected: 'Closure of [student_id]: [ "advisor_id", "office_room", "student_id" ]'
        },
        {
          name: {
            en: 'advisor_id closure resolves only advisor and office room',
            bn: 'advisor_id ক্লোজার শুধুমাত্র উপদেষ্টা এবং অফিস রুম সমাধান করে'
          },
          expected: 'Closure of [advisor_id]: [ "advisor_id", "office_room" ]'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'norm-dep-ex-1',
      kind: 'mcq',
      topic: 'functional-dependency-definition',
      question: {
        en: 'Given a relation R(A, B, C), what does the functional dependency A -> B formally require of any two tuples t1 and t2?',
        bn: 'একটি রিলেশন R(A, B, C)-এর ক্ষেত্রে ফাংশনাল ডিপেন্ডেন্সি A -> B যেকোনো দুটি সারি t1 এবং t2-এর জন্য আনুষ্ঠানিকভাবে কী দাবি করে?'
      },
      options: [
        {
          en: 'If t1[A] = t2[A], then t1[B] must equal t2[B]',
          bn: 'যদি t1[A] = t2[A] হয়, তবে অবশ্যই t1[B] = t2[B] হতে হবে'
        },
        {
          en: 'Column A must contain twice as many characters as Column B',
          bn: 'কলাম A-তে কলাম B-এর দ্বিগুণ সংখ্যক অক্ষর থাকতে হবে'
        },
        {
          en: 'Column B must always be smaller than Column A mathematically',
          bn: 'গাণিতিকভাবে কলাম B সর্বদা কলাম A-এর চেয়ে ছোট হতে হবে'
        },
        {
          en: 'Column A and Column B cannot be queried in the same SELECT statement',
          bn: 'একই SELECT স্টেটমেন্টে কলাম A এবং কলাম B কোয়েরি করা যাবে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Identical determinant values dictate identical dependent values.',
        bn: 'ডিটারমিন্যান্টের মান এক হলে ডিপেন্ডেন্টের মানও এক হতে বাধ্য।'
      },
      explanation: {
        en: 'By definition, a functional dependency A -> B guarantees that whenever 2 tuples agree on 1 attribute A, they must unconditionally agree on 1 attribute B.',
        bn: 'সংজ্ঞা অনুসারে, ফাংশনাল ডিপেন্ডেন্সি A -> B নিশ্চিত করে যে যখনই ২টি সারিতে ১টি অ্যাট্রিবিউট A-এর মান একই হবে, তখন ১টি অ্যাট্রিবিউট B-এর মানও কোনো শর্ত ছাড়াই হুবহু ১টি মান নির্দেশ করবে।'
      }
    },
    {
      id: 'norm-dep-ex-2',
      kind: 'mcq',
      topic: 'armstrong-transitivity-axiom',
      question: {
        en: 'According to Armstrong\'s Transitivity Axiom, if dependencies X -> Y and Y -> Z both hold in a schema, what third dependency must also hold?',
        bn: 'আর্মস্ট্রংয়ের ট্রানজিটিভিটি স্বতঃসিদ্ধ অনুসারে, যদি একটি স্কিমায় X -> Y এবং Y -> Z উভয়ই বিদ্যমান থাকে, তবে কোন তৃতীয় নির্ভরতাটি সত্য হতে বাধ্য?'
      },
      options: [
        {
          en: 'X -> Z',
          bn: 'X -> Z'
        },
        {
          en: 'Z -> X',
          bn: 'Z -> X'
        },
        {
          en: 'Y -> X',
          bn: 'Y -> X'
        },
        {
          en: 'XZ -> Y',
          bn: 'XZ -> Y'
        }
      ],
      answer: 0,
      hint: {
        en: 'Transitivity creates a direct bridge between the first determinant and the final dependent.',
        bn: 'ট্রানজিটিভিটি প্রথম ডিটারমিন্যান্ট এবং চূড়ান্ত ডিপেন্ডেন্টের মধ্যে একটি সরাসরি সেতু তৈরি করে।'
      },
      explanation: {
        en: 'Transitivity states that if X determines Y, and Y determines Z, then X transitively determines Z (X -> Z). This rule is the foundational cause of 3NF transitive update anomalies.',
        bn: 'ট্রানজিটিভিটি অনুসারে X যদি Y নির্ধারণ করে এবং Y যদি Z নির্ধারণ করে, তবে X পরোক্ষভাবে Z-কেও নির্ধারণ করে (X -> Z)। ৩য় নরমাল ফর্মের আপডেট সমস্যার মূল কারণ এই নিয়মটি।'
      }
    },
    {
      id: 'norm-dep-ex-3',
      kind: 'mcq',
      topic: 'attribute-closure-candidate-key-role',
      question: {
        en: 'How does computing the attribute closure X+ allow database architects to verify whether attribute set X is a Candidate Key?',
        bn: 'অ্যাট্রিবিউট ক্লোজার X+ গণনা করে ডাটাবেস আর্কিটেক্টরা কীভাবে যাচাই করেন যে একটি অ্যাট্রিবিউট সেট X একটি ক্যান্ডিডেট কি কিনা?'
      },
      options: [
        {
          en: 'If X+ contains all attributes of relation R, X is a superkey; if no proper subset of X also spans R, X is a minimal candidate key',
          bn: 'যদি X+ রিলেশন R-এর সমস্ত অ্যাট্রিবিউট ধারণ করে তবে X একটি সুপার-কি; আর X-এর কোনো ক্ষুদ্রতর সাবসেট যদি R নির্ধারণ করতে না পারে তবে X একটি ন্যূনতম ক্যান্ডিডেট কি'
        },
        {
          en: 'If X+ contains zero attributes, X is automatically named candidate key',
          bn: 'যদি X+ কোনো অ্যাট্রিবিউট ধারণ না করে তবে X-কে স্বয়ংক্রিয়ভাবে ক্যান্ডিডেট কি বলা হয়'
        },
        {
          en: 'Candidate keys are assigned randomly by the operating system compiler',
          bn: 'ক্যান্ডিডেট কি অপারেটিং সিস্টেম কম্পাইলার দ্বারা এলোমেলোভাবে নির্ধারিত হয়'
        },
        {
          en: 'Attribute closure only measures the physical megabytes of RAM consumed on disk',
          bn: 'অ্যাট্রিবিউট ক্লোজার কেবল ডিস্কে ব্যবহৃত মেগাবাইট মেমরির পরিমাণ পরিমাপ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A candidate key is a minimal superkey capable of deriving all attributes in the table.',
        bn: 'ক্যান্ডিডেট কি হলো একটি ন্যূনতম সুপার-কি যা টেবিলের সমস্ত অ্যাট্রিবিউট বের করতে সক্ষম।'
      },
      explanation: {
        en: 'When X+ encompasses every attribute in the relation schema, X uniquely identifies all rows (superkey). If no smaller subset of X can do so, X is mathematically minimal, satisfying the exact definition of a Candidate Key.',
        bn: 'যখন X+ রিলেশনের প্রতিটি অ্যাট্রিবিউটকে অন্তর্ভুক্ত করে, তখন X সব সারির স্বাতন্ত্র্য নিশ্চিত করে (সুপার-কি)। আর X-এর কোনো ছোট অংশ যদি তা করতে না পারে, তবে এটি ন্যূনতম ক্যান্ডিডেট কি-এর শর্ত পূরণ করে।'
      }
    },
    {
      id: 'norm-dep-ex-4',
      kind: 'mcq',
      topic: 'trivial-dependency-classification',
      question: {
        en: 'Which of the following functional dependencies is classified as a "trivial dependency"?',
        bn: 'নিচের কোন ফাংশনাল ডিপেন্ডেন্সিটিকে "ট্রিভিয়াল বা তুচ্ছ ডিপেন্ডেন্সি" হিসেবে শ্রেণীবদ্ধ করা হয়?'
      },
      options: [
        {
          en: '{employee_id, email} -> email',
          bn: '{employee_id, email} -> email'
        },
        {
          en: 'employee_id -> salary',
          bn: 'employee_id -> salary'
        },
        {
          en: 'email -> phone_number',
          bn: 'email -> phone_number'
        },
        {
          en: 'department_id -> building_name',
          bn: 'department_id -> building_name'
        }
      ],
      answer: 0,
      hint: {
        en: 'In a trivial dependency, the right-hand attribute is already part of the left-hand set.',
        bn: 'ট্রিভিয়াল নির্ভরতায় ডান পাশের অ্যাট্রিবিউটটি আগে থেকেই বাম পাশের সেটে উপস্থিত থাকে।'
      },
      explanation: {
        en: 'A dependency X -> Y is trivial if Y is a subset of X. Since email is already included in {employee_id, email}, knowing both values trivially supplies the email value with zero new constraints.',
        bn: 'একটি ডিপেন্ডেন্সি X -> Y ট্রিভিয়াল হয় যদি Y সেটের উপাদান X সেটের মধ্যে অন্তর্ভুক্ত থাকে। যেহেতু {employee_id, email} সেটে email আগেই আছে, তাই এটি কোনো নতুন শর্ত যোগ করে না।'
      }
    }
  ],
  quiz: {
    id: 'deps-and-the-dependency-quiz',
    title: {
      en: 'Functional Dependencies & Axioms Assessment',
      bn: 'ফাংশনাল ডিপেন্ডেন্সি ও স্বতঃসিদ্ধ মূল্যায়ন'
    },
    questions: [
      {
        id: 'norm-dep-qz-1',
        kind: 'mcq',
        topic: 'armstrong-sound-complete-significance',
        question: {
          en: 'In database theory, what does it mean to state that Armstrong\'s Axioms are "sound and complete"?',
          bn: 'ডাটাবেস তত্ত্বে আর্মস্ট্রংয়ের স্বতঃসিদ্ধগুলোকে "নিখুঁত ও পূর্ণাঙ্গ (sound and complete)" বলার অর্থ কী?'
        },
        options: [
          {
            en: 'Sound means every derived dependency is mathematically true; Complete means every true dependency can be derived using the axioms',
            bn: 'নিখুঁত বা Sound মানে হলো অনুমানকৃত প্রতিটি নির্ভরতা গাণিতিকভাবে সত্য; আর পূর্ণাঙ্গ বা Complete মানে হলো প্রতিটি সত্য নির্ভরতা এই স্বতঃসিদ্ধ দিয়ে প্রমাণ করা সম্ভব'
          },
          {
            en: 'Sound means the database plays audio beeps; Complete means the server never crashes',
            bn: 'Sound মানে ডাটাবেস অডিও শব্দ করে; Complete মানে সার্ভার কখনও ক্র্যাশ করে না'
          },
          {
            en: 'Sound means tables have primary keys; Complete means tables have foreign keys',
            bn: 'Sound মানে টেবিলে প্রাইমারি কি আছে; Complete মানে টেবিলে ফরেন কি আছে'
          },
          {
            en: 'It means the database was developed in the year 2026',
            bn: 'এর অর্থ হলো ডাটাবেসটি ২০২৬ সালে তৈরি করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Soundness guarantees truth; completeness guarantees no valid dependency is missed.',
          bn: 'সাউন্ডনেস সত্যতার নিশ্চয়তা দেয়; কমপ্লিটনেস কোনো বৈধ নিয়ম বাদ না পড়ার নিশ্চয়তা দেয়।'
        },
        explanation: {
          en: 'Armstrong\'s Axioms are sound because they never generate a false functional dependency from a valid set. They are complete because applying them iteratively generates the full closure (F+) of all possible valid dependencies.',
          bn: 'আর্মস্ট্রংয়ের স্বতঃসিদ্ধগুলো সাউন্ড কারণ এগুলো বৈধ সেট থেকে কখনো কোনো ভুল নির্ভরতা তৈরি করে না। আর এগুলো কমপ্লিট কারণ এগুলো বারবার প্রয়োগ করে সমস্ত সম্ভাব্য বৈধ নির্ভরতার পূর্ণাঙ্গ ক্লোজার তৈরি করা যায়।'
        }
      },
      {
        id: 'norm-dep-qz-2',
        kind: 'mcq',
        topic: 'extraneous-attribute-elimination',
        question: {
          en: 'When computing a Minimal Cover (Canonical Cover) for a set of functional dependencies, what is an "extraneous attribute"?',
          bn: 'ফাংশনাল ডিপেন্ডেন্সির মিনিমাল কভার (ক্যানোনিকাল কভার) গণনা করার সময় "অপ্রয়োজনীয় বা এক্সট্রেনিয়াস অ্যাট্রিবিউট" বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'An attribute within an FD that can be safely removed from the left-hand or right-hand side without changing the overall closure of the dependency set',
            bn: 'একটি এফডি-র ভেতরের এমন একটি অ্যাট্রিবিউট যা ডিপেন্ডেন্সি সেটের সামগ্রিক ক্লোজার পরিবর্তন না করেই বাম বা ডান পাশ থেকে নিরাপদে মুছে ফেলা যায়'
          },
          {
            en: 'An attribute that contains spelling mistakes in its English name',
            bn: 'এমন একটি অ্যাট্রিবিউট যার ইংরেজি নামের বানানে ভুল আছে'
          },
          {
            en: 'A column that stores numerical currency rather than text strings',
            bn: 'এমন একটি কলাম যা টেক্সটের বদলে সংখ্যাভিত্তিক মুদ্রা সংরক্ষণ করে'
          },
          {
            en: 'An attribute added by an unauthorized hacker',
            bn: 'অননুমোদিত হ্যাকার কর্তৃক যুক্ত করা কোনো অবৈধ অ্যাট্রিবিউট'
          }
        ],
        answer: 0,
        hint: {
          en: 'Redundancy removal: if removing an attribute doesn\'t reduce deductive power, it is extraneous.',
          bn: 'দ্বিরুক্তি পরিহার: কোনো অ্যাট্রিবিউট সরালে যদি ক্ষমতা না কমে, তবে তা অপ্রয়োজনীয়।'
        },
        explanation: {
          en: 'An attribute is extraneous if its removal does not alter the functional dependency closure. For example, if AB -> C holds, but A -> C is already true by itself, attribute B is extraneous on the left-hand side and must be discarded.',
          bn: 'একটি অ্যাট্রিবিউট এক্সট্রেনিয়াস হয় যদি তা সরিয়ে নিলেও সামগ্রিক ক্লোজার একই থাকে। উদাহরণস্বরূপ, যদি AB -> C থাকে কিন্তু A -> C আগেই সত্য হয়, তবে বাম পাশের B একটি অপ্রয়োজনীয় অ্যাট্রিবিউট যা ফেলে দিতে হয়।'
        }
      },
      {
        id: 'norm-dep-qz-3',
        kind: 'mcq',
        topic: 'decomposition-rule-application',
        question: {
          en: 'Under Armstrong\'s derived Decomposition Rule, if the dependency X -> YZ holds in a table, which statement is guaranteed to be true?',
          bn: 'আর্মস্ট্রংয়ের ডিকম্পোজিশন নিয়ম অনুসারে, যদি একটি টেবিলে X -> YZ বহাল থাকে, তবে নিচের কোন বক্তব্যটি নিশ্চিতভাবে সত্য?'
        },
        options: [
          {
            en: 'Both X -> Y and X -> Z must individually hold',
            bn: 'X -> Y এবং X -> Z উভয় নির্ভরতাই আলাদাভাবে সত্য হতে হবে'
          },
          {
            en: 'Y -> X must hold',
            bn: 'Y -> X অবশ্যই সত্য হতে হবে'
          },
          {
            en: 'YZ -> X must hold',
            bn: 'YZ -> X অবশ্যই সত্য হতে হবে'
          },
          {
            en: 'Z -> Y must hold',
            bn: 'Z -> Y অবশ্যই সত্য হতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Projectivity splits composite right-hand sides into individual single-attribute dependencies.',
          bn: 'প্রজেক্টিভিটি নিয়ম ডান পাশের সম্মিলিত অ্যাট্রিবিউটগুলোকে আলাদা আলাদা নির্ভরতায় বিভক্ত করে।'
        },
        explanation: {
          en: 'The Decomposition Rule (Projectivity) proves that if X determines a set of attributes YZ, then X determines Y individually and X determines Z individually.',
          bn: 'ডিকম্পোজিশন নিয়ম প্রমাণ করে যে X যদি একসাথে YZ সেট নির্ধারণ করে, তবে X আলাদাভাবে Y-কে এবং আলাদাভাবে Z-কেও নির্ধারণ করে।'
        }
      },
      {
        id: 'norm-dep-qz-4',
        kind: 'mcq',
        topic: 'candidate-key-vs-superkey',
        question: {
          en: 'What is the exact distinction between a Superkey and a Candidate Key in relational database theory?',
          bn: 'রিলেশনাল ডাটাবেস তত্ত্বে সুপার-কি এবং ক্যান্ডিডেট কি-এর মধ্যকার সুনির্দিষ্ট পার্থক্য কী?'
        },
        options: [
          {
            en: 'A Superkey uniquely identifies every row; a Candidate Key is a minimal Superkey with no unnecessary extraneous attributes',
            bn: 'সুপার-কি প্রতিটি সারিকে এককভাবে চিহ্নিত করে; আর ক্যান্ডিডেট কি হলো এমন একটি ন্যূনতম সুপার-কি যাতে কোনো অপ্রয়োজনীয় বাড়তি অ্যাট্রিবিউট থাকে না'
          },
          {
            en: 'Superkeys are stored in RAM; Candidate keys are stored in cloud storage',
            bn: 'সুপার-কি মেমরিতে জমা থাকে; আর ক্যান্ডিডেট কি ক্লাউডে জমা থাকে'
          },
          {
            en: 'Superkeys can only contain numbers; Candidate keys can only contain strings',
            bn: 'সুপার-কি কেবল সংখ্যা ধরে রাখে; আর ক্যান্ডিডেট কি কেবল স্ট্রিং ধরে রাখে'
          },
          {
            en: 'Candidate keys are temporary and expire after 30 days',
            bn: 'ক্যান্ডিডেট কি সাময়িক এবং ৩০ দিন পর মেয়াদ শেষ হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Minimality: every candidate key is a superkey, but not every superkey is minimal.',
          bn: 'মিনিমালিটি: প্রতিটি ক্যান্ডিডেট কি-ই সুপার-কি, কিন্তু প্রতিটি সুপার-কি ন্যূনতম নয়।'
        },
        explanation: {
          en: 'Every candidate key is a superkey because its attribute closure covers the entire relation. However, a candidate key is irreducible: removing even a single attribute causes it to lose its uniqueness guarantee.',
          bn: 'প্রতিটি ক্যান্ডিডেট কি একটি সুপার-কি কারণ এর ক্লোজার সম্পূর্ণ রিলেশনকে কভার করে। কিন্তু ক্যান্ডিডেট কি হলো ন্যূনতম বা অপরিবর্তনীয়: এর থেকে ১টি মাত্র অ্যাট্রিবিউট সরিয়ে নিলেও এটি আর অনন্যতা ধরে রাখতে পারে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'firsts-and-the-first',
    title: {
      en: 'First Normal Form (1NF): Atomicity & Repeating Groups',
      bn: '১ম নরমাল ফর্ম (1NF): অবিভাজ্যতা ও পুনরাবৃত্তি দূরীকরণ'
    }
  }
};
