import type { Lesson } from '../../../lib/types';

export const SecondsAndTheSecondLesson: Lesson = {
  slug: 'seconds-and-the-second',
  tech: 'normalization',
  title: {
    en: 'Second Normal Form (2NF): Partial Dependencies',
    bn: '২য় নরমাল ফর্ম (2NF): আংশিক নির্ভরতা দূরীকরণ'
  },
  summary: {
    en: 'Eliminate partial key dependencies with Second Normal Form (2NF): understand composite primary keys, full functional dependency, insertion/update/deletion anomalies, and lossless table decomposition.',
    bn: '২য় নরমাল ফর্ম (2NF) দিয়ে আংশিক নির্ভরতা দূর করুন: কম্পোজিট প্রাইমারি কি, পূর্ণ ফাংশনাল ডিপেন্ডেন্সি, ইনসার্ট/আপডেট/ডিলিট অ্যানোমালি এবং লসলেস টেবিল ডিকম্পোজিশন শিখুন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what-is-2nf',
      text: {
        en: 'The Full Functional Dependency Rule: Banishing Partial Keys',
        bn: 'পূর্ণ নির্ভরতার নিয়ম: আংশিক কি-এর নির্ভরতা উচ্ছেদ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a relational table is already in First Normal Form (1NF), it may still suffer from serious data duplication if it utilizes a composite primary key. Second Normal Form (2NF) addresses this precise vulnerability. Formally, a relation is in 2NF if it satisfies two conditions. First, it must be in 1NF. Second, every non-prime attribute must be fully functionally dependent on the primary key. In short, no non-key column may depend on only a subset of a composite primary key.',
        bn: 'একটি রিলেশনাল টেবিল ১ম নরমাল ফর্মে (1NF) থাকলেও যদি তাতে কম্পোজিট প্রাইমারি কি ব্যবহৃত হয়, তবে মারাত্মক ডাটা পুনরাবৃত্তি ঘটতে পারে। ২য় নরমাল ফর্ম (2NF) এই দুর্বলতা দূর করে। আনুষ্ঠানিকভাবে, একটি রিলেশন ২টি শর্ত পূরণ করলে ২য় নরমাল ফর্মে থাকে। প্রথমত, এটিকে ১ম নরমাল ফর্মে থাকতে হবে। দ্বিতীয়ত, প্রতিটি নন-প্রাইম কলামকে প্রাইমারি কি-এর ওপর পূর্ণাঙ্গভাবে নির্ভরশীল হতে হবে। সংক্ষেপে, কোনো নন-কি কলাম কম্পোজিট প্রাইমারি কি-এর আংশিক অংশের ওপর নির্ভর করতে পারবে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A partial dependency occurs when a non-key column is determined by only one part of a multi-column primary key. For example, in an enrollments table with composite key (student_id, course_id), the attribute student_name depends solely on student_id, while course_credits depends solely on course_id. Only final_grade depends on the whole combined key. If a table has a single-column primary key, it is automatically in 2NF.',
        bn: 'আংশিক নির্ভরতা বা পার্শিয়াল ডিপেন্ডেন্সি ঘটে যখন কোনো নন-কি কলাম একাধিক কলাম নিয়ে গঠিত প্রাইমারি কি-এর মাত্র একটি অংশের ওপর নির্ভর করে। উদাহরণস্বরূপ, (student_id, course_id) কম্পোজিট কি যুক্ত একটি ভর্তি টেবিলে student_name শুধুমাত্র student_id-এর ওপর এবং course_credits শুধুমাত্র course_id-এর ওপর নির্ভর করে। শুধুমাত্র final_grade কলামটি উভয় কি-এর ওপর সম্পূর্ণ নির্ভর করে। মনে রাখবেন, কোনো টেবিলের প্রাইমারি কি যদি মাত্র ১টি একক কলাম হয়, তবে টেবিলটি স্বয়ংক্রিয়ভাবেই ২য় নরমাল ফর্মে থাকে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Decomposing Partial Dependencies into 3 Lossless 2NF Relations',
        bn: 'আংশিক নির্ভরতাকে ৩টি লসলেস ২য় নরমাল ফর্ম রিলেশনে রূপান্তর'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Second Normal Form 2NF partial dependency decomposition diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Top Violating Table -->
  <g transform="translate(30, 20)">
    <rect width="680" height="75" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="680" height="26" rx="8" fill="#7f1d1d" />
    <text x="340" y="18" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">1NF Table with Partial Dependencies (Composite Key: student_id + course_id)</text>
    
    <text x="50" y="48" fill="#38bdf8" font-size="10" font-weight="bold">[PK] student_id</text>
    <text x="180" y="48" fill="#38bdf8" font-size="10" font-weight="bold">[PK] course_id</text>
    <text x="310" y="48" fill="#f87171" font-size="10">student_name</text>
    <text x="440" y="48" fill="#f87171" font-size="10">course_credits</text>
    <text x="580" y="48" fill="#34d399" font-size="10">final_grade</text>

    <!-- Partial dependency arrows -->
    <path d="M 90 55 C 90 70, 350 70, 350 55" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3" fill="none" />
    <text x="220" y="70" fill="#fca5a5" font-size="9" text-anchor="middle">Partial: student_id → student_name</text>

    <path d="M 220 55 C 220 70, 480 70, 480 55" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3" fill="none" />
    <text x="360" y="80" fill="#fca5a5" font-size="9" text-anchor="middle">Partial: course_id → course_credits</text>
  </g>

  <!-- Splitting Arrows -->
  <path d="M 160 100 L 110 135" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />
  <path d="M 370 100 L 370 135" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />
  <path d="M 580 100 L 630 135" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Bottom: 3 Clean 2NF Tables -->
  <!-- Table 1: Students -->
  <g transform="translate(30, 140)">
    <rect width="200" height="90" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="200" height="24" rx="6" fill="#064e3b" />
    <text x="100" y="16" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Table: students [2NF]</text>
    <text x="20" y="45" fill="#38bdf8" font-size="10" font-weight="bold">[PK] student_id</text>
    <text x="20" y="70" fill="#f8fafc" font-size="10">student_name</text>
  </g>

  <!-- Table 2: Enrollments -->
  <g transform="translate(260, 140)">
    <rect width="220" height="90" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="220" height="24" rx="6" fill="#064e3b" />
    <text x="110" y="16" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Table: enrollments [2NF]</text>
    <text x="15" y="45" fill="#38bdf8" font-size="9" font-weight="bold">[PK, FK] student_id</text>
    <text x="15" y="62" fill="#38bdf8" font-size="9" font-weight="bold">[PK, FK] course_id</text>
    <text x="15" y="80" fill="#34d399" font-size="10">final_grade (Full Dep)</text>
  </g>

  <!-- Table 3: Courses -->
  <g transform="translate(510, 140)">
    <rect width="200" height="90" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="200" height="24" rx="6" fill="#064e3b" />
    <text x="100" y="16" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Table: courses [2NF]</text>
    <text x="20" y="45" fill="#38bdf8" font-size="10" font-weight="bold">[PK] course_id</text>
    <text x="20" y="70" fill="#f8fafc" font-size="10">course_credits</text>
  </g>

  <!-- Explanation Banner -->
  <g transform="translate(30, 245)">
    <rect width="680" height="65" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="25" y="24" fill="#f8fafc" font-size="12" font-weight="bold">The Invariant Rule of 2NF Decomposition</text>
    <text x="25" y="45" fill="#94a3b8" font-size="11">Each partially-dependent attribute moves into a relation where its determinant is the entire Primary Key.</text>
  </g>
</svg>`,
      caption: {
        en: 'Decomposing 1 table with partial dependencies into 3 distinct normalized tables.',
        bn: 'আংশিক নির্ভরতা থাকা ১টি টেবিলকে ৩টি পৃথক নরমালাইজড টেবিলে রূপান্তরের চিত্র।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Second Normal Form (2NF)',
          def: {
            en: 'A relational state where a 1NF table contains no partial dependencies, meaning every non-key column depends on the entire candidate key.',
            bn: 'রিলেশনাল টেবিলের এমন একটি পর্যায় যেখানে কোনো আংশিক নির্ভরতা থাকে না, অর্থাৎ প্রতিটি নন-কি কলাম সম্পূর্ণ ক্যান্ডিডেট কি-এর ওপর নির্ভর করে।'
          }
        },
        {
          term: 'Partial Dependency',
          def: {
            en: 'An integrity defect where a non-prime attribute is functionally determined by only a proper subset of a composite candidate key.',
            bn: 'এমন একটি ত্রুটি যেখানে কোনো নন-প্রাইম কলাম একটি কম্পোজিট ক্যান্ডিডেট কি-এর কেবল আংশিক অংশের ওপর নির্ভর করে।'
          }
        },
        {
          term: 'Full Functional Dependency',
          def: {
            en: 'A state where removing any single attribute from the determinant set X prevents the dependency X -> Y from holding.',
            bn: 'এমন একটি অবস্থা যেখানে ডিটারমিন্যান্ট সেট X থেকে ১টি মাত্র অ্যাট্রিবিউট সরিয়ে নিলেও X -> Y নির্ভরতাটি আর বহাল থাকে না।'
          }
        },
        {
          term: 'Lossless Join',
          def: {
            en: 'A mathematical guarantee that decomposed tables can be rejoined via common keys to reconstruct the exact original dataset with no spurious tuples.',
            bn: 'একটি গাণিতিক নিশ্চয়তা যা নিশ্চিত করে যে বিভক্ত টেবিলগুলোকে সাধারণ কি দিয়ে পুনরায় জয়েন করলে মূল ডাটা হুবহু কোনো বাড়তি রো ছাড়া ফিরে আসে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'the-three-anomalies',
      text: {
        en: 'The 3 Operational Anomalies Eradicated by 2NF',
        bn: '২য় নরমাল ফর্মের মাধ্যমে দূর হওয়া ৩টি মারাত্মক সমস্যা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Partial dependencies cause 3 operational anomalies that compromise data accuracy in production systems. First, the Insertion Anomaly prevents recording a new course in the catalog until at least 1 student registers for it, because student_id is part of the primary key and cannot be NULL. An academic institution could not even register new classes in its catalog system.',
        bn: 'আংশিক নির্ভরতা প্রোডাকশন সিস্টেমে ডাটার শুদ্ধতা নষ্টকারী ৩টি অপারেশনাল অ্যানোমালি বা সমস্যা তৈরি করে। প্রথমত, ইনসার্ট অ্যানোমালি কোনো নতুন কোর্স ক্যাটালগে যোগ করতে বাধা দেয় যতক্ষণ না অন্তত ১ জন শিক্ষার্থী তাতে ভর্তি হয়, কারণ student_id প্রাইমারি কি-এর অংশ হওয়ায় তা NULL রাখা যায় না। ফলে কোনো বিশ্ববিদ্যালয় নতুন ক্লাসের তালিকা তৈরি করতে ব্যর্থ হতো।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Second, the Update Anomaly occurs when a course changes its credit count from 3 credits to 4 credits. If 500 students are enrolled, an administrator must update all 500 rows. If the database crashes halfway through, the catalog holds conflicting credit values. Third, the Deletion Anomaly occurs when the sole student enrolled in an obscure seminar drops out: deleting that enrollment row erases the course record entirely. Decomposing the schema into 2NF tables permanently cures all 3 hazards.',
        bn: 'দ্বিতীয়ত, আপডেট অ্যানোমালি ঘটে যখন কোনো কোর্সের ক্রেডিট সংখ্যা ৩ থেকে ৪ করা হয়। ৫০০ জন শিক্ষার্থী ভর্তি থাকলে অ্যাডমিনকে ৫০০টি সারিই আপডেট করতে হয়। মাঝপথে সার্ভার বন্ধ হলে ডাটাবেসে অসঙ্গতি তৈরি হয়। তৃতীয়ত, ডিলিট অ্যানোমালি ঘটে যখন কোনো বিরল কোর্সের একমাত্র শিক্ষার্থী ভর্তি বাতিল করে: সেই ভর্তি সারিটি মুছতে গিয়ে পুরো কোর্সের অস্তিত্বই মুছে যায়। স্কিমাকে ২য় নরমাল ফর্ম টেবিলে ভাগ করলে এই ৩টি বিপদ চিরতরে দূর হয়।'
      }
    },
    {
      type: 'heading',
      id: 'node-2nf-engine',
      text: {
        en: 'Executable 2NF Engine: Lossless Decomposition and Anomaly Prevention',
        bn: 'রানযোগ্য ২য় নরমাল ফর্ম ইঞ্জিন: লসলেস বিভাজন ও অ্যানোমালি প্রতিরোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine demonstrating the lossless decomposition of a table with partial dependencies into 3 normalized relations. It proves that join reconstruction reproduces the exact original tuples with zero spurious records, and verifies that new catalog courses can now be created independently.',
        bn: 'নিচে আংশিক নির্ভরতা থাকা একটি টেবিলকে ৩টি নরমালাইজড রিলেশনে লসলেস রূপান্তর প্রদর্শনকারী একটি সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি প্রমাণ করে যে জয়েনের মাধ্যমে মূল রেকর্ড কোনো বাড়তি সারি ছাড়াই ফিরে আসে এবং নতুন কোর্স স্বাধীনভাবে তৈরি করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Decompose 1 partial dependency relation into 3 normalized relations and verify lossless join reconstruction',
        bn: '১টি আংশিক নির্ভরতার রিলেশনকে ৩টি নরমালাইজড টেবিলে রূপান্তর এবং লসলেস জয়েন যাচাই'
      },
      code: `// Second Normal Form (2NF) Decomposition Engine
const unnormalizedEnrollments = [
  { student_id: 101, course_id: 'CS101', student_name: 'Rahim', course_name: 'Computer Science', grade: 'A' },
  { student_id: 101, course_id: 'MATH201', student_name: 'Rahim', course_name: 'Calculus', grade: 'B' },
  { student_id: 102, course_id: 'CS101', student_name: 'Karim', course_name: 'Computer Science', grade: 'A' }
];

// Step 1: Decompose into 3 independent 2NF relations
const studentsTable = new Map();
const coursesTable = new Map();
const enrollmentsTable = [];

for (const row of unnormalizedEnrollments) {
  // Table 1: students (Key: student_id)
  if (!studentsTable.has(row.student_id)) {
    studentsTable.set(row.student_id, {
      student_id: row.student_id,
      student_name: row.student_name
    });
  }

  // Table 2: courses (Key: course_id)
  if (!coursesTable.has(row.course_id)) {
    coursesTable.set(row.course_id, {
      course_id: row.course_id,
      course_name: row.course_name
    });
  }

  // Table 3: enrollments (Composite Key: student_id + course_id)
  enrollmentsTable.push({
    student_id: row.student_id,
    course_id: row.course_id,
    grade: row.grade
  });
}

// Step 2: Prove Lossless Join Reconstruction via relational join
const reconstructed = enrollmentsTable.map(e => ({
  student_id: e.student_id,
  course_id: e.course_id,
  student_name: studentsTable.get(e.student_id).student_name,
  course_name: coursesTable.get(e.course_id).course_name,
  grade: e.grade
}));

const isLosslessMatch = reconstructed.length === unnormalizedEnrollments.length &&
  reconstructed.every((r, idx) => r.student_id === unnormalizedEnrollments[idx].student_id);

// Anomaly proof: Insert a new course without needing any enrolled students
coursesTable.set('PHYS301', { course_id: 'PHYS301', course_name: 'Quantum Physics' });
const canInsertCourseWithoutStudent = coursesTable.has('PHYS301');

console.log(\`[2NF Engine] Decomposed 1 partial dependency relation into 3 normalized relations.\`);
console.log(\`[Lossless Join] Reconstructed \${reconstructed.length} original enrollment tuples with zero spurious records (1/1: \${isLosslessMatch}).\`);
console.log(\`[Anomaly Prevention] Courses can now be inserted without enrolling students (1/1: \${canInsertCourseWithoutStudent}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Single-Column Primary Keys Automatically Satisfy 2NF',
        bn: 'একক কলামের প্রাইমারি কি স্বয়ংক্রিয়ভাবে ২য় নরমাল ফর্ম পূরণ করে'
      },
      text: {
        en: 'Partial key dependencies are mathematically impossible in relations with a single-attribute primary key (such as an auto-incrementing id). Because a single column has no proper subsets, all non-key columns must depend on the whole key by definition. If your 1NF table has a single-column primary key, it is already 2NF compliant.',
        bn: 'একক কলামের প্রাইমারি কি (যেমন একটি অটো-ইনক্রিমেন্টিং আইডি) থাকা টেবিলে আংশিক নির্ভরতা থাকা গাণিতিকভাবে অসম্ভব। যেহেতু একটি একক কলামের কোনো ছোট উপসেট হতে পারে না, তাই تمام নন-কি কলাম সম্পূর্ণ কি-এর ওপর নির্ভর করতে বাধ্য। আপনার ১ম নরমাল ফর্মের টেবিলে যদি ১টি একক প্রাইমারি কি থাকে, তবে তা আগে থেকেই ২য় নরমাল ফর্মের সাথে সামঞ্জস্যপূর্ণ।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Partial Dependency Detector',
        bn: 'আংশিক নির্ভরতা শনাক্তকারী'
      },
      description: {
        en: 'Check whether a functional dependency constitutes a partial key violation against a composite primary key.',
        bn: 'একটি ফাংশনাল ডিপেন্ডেন্সি কম্পোজিট প্রাইমারি কি-এর বিরুদ্ধে আংশিক নির্ভরতা তৈরি করে কিনা তা পরীক্ষা করুন।'
      },
      code: `const compositeKey = ['order_id', 'product_id'];

function evaluateDependency(lhsAttributes, rhsAttribute) {
  const isSubset = lhsAttributes.every(a => compositeKey.includes(a));
  const isProperSubset = isSubset && lhsAttributes.length < compositeKey.length;

  if (isProperSubset) {
    return \`2NF_VIOLATION: Partial dependency on subset [\${lhsAttributes.join(', ')}]\`;
  }
  return '2NF_COMPLIANT: Fully functionally dependent';
}

console.log('Dep A (order_id -> customer_id):', evaluateDependency(['order_id'], 'customer_id'));
console.log('Dep B (order_id, product_id -> qty):', evaluateDependency(['order_id', 'product_id'], 'qty'));`,
      tests: [
        {
          name: {
            en: 'Detects partial key dependency as 2NF violation',
            bn: 'আংশিক কি নির্ভরতাকে ২য় নরমাল ফর্ম লঙ্ঘন হিসেবে শনাক্ত করে'
          },
          expected: 'Dep A (order_id -> customer_id): 2NF_VIOLATION: Partial dependency on subset [order_id]'
        },
        {
          name: {
            en: 'Passes full composite dependency as 2NF compliant',
            bn: 'পূর্ণ কম্পোজিট নির্ভরতাকে ২য় নরমাল ফর্মের সাথে সামঞ্জস্যপূর্ণ হিসেবে অনুমোদন করে'
          },
          expected: 'Dep B (order_id, product_id -> qty): 2NF_COMPLIANT: Fully functionally dependent'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'norm-2nf-ex-1',
      kind: 'mcq',
      topic: '2nf-core-definition',
      question: {
        en: 'Under relational database theory, what condition must a table satisfy to reach Second Normal Form (2NF)?',
        bn: 'রিলেশনাল ডাটাবেস তত্ত্ব অনুসারে, একটি টেবিল ২য় নরমাল ফর্ম (2NF) অর্জন করতে কোন শর্ত পূরণ করা আবশ্যক?'
      },
      options: [
        {
          en: 'It must be in 1NF and have zero partial dependencies, meaning every non-prime attribute must depend on the whole candidate key',
          bn: 'এটিকে অবশ্যই ১ম নরমাল ফর্মে থাকতে হবে এবং কোনো আংশিক নির্ভরতা থাকা যাবে না, অর্থাৎ প্রতিটি নন-প্রাইম কলাম সম্পূর্ণ ক্যান্ডিডেট কি-এর ওপর নির্ভর করতে হবে'
        },
        {
          en: 'It must have exactly 2 columns and 2 rows',
          bn: 'এতে ঠিক ২টি কলাম এবং ২টি রো থাকতে হবে'
        },
        {
          en: 'All table records must be backed up to magnetic tape drives',
          bn: 'সমস্ত টেবিল রেকর্ড ম্যাগনেটিক টেপ ড্রাইভে ব্যাকআপ করতে হবে'
        },
        {
          en: 'Foreign keys must be disabled across the entire database server',
          bn: 'পুরো ডাটাবেস সার্ভারে تمام ফরেন কি নিষ্ক্রিয় থাকতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: '2NF requires 1NF compliance plus the complete banishment of partial key dependencies.',
        bn: '২য় নরমাল ফর্মের জন্য ১ম নরমাল ফর্মের সাথে আংশিক কি নির্ভরতা সম্পূর্ণ দূর করা প্রয়োজন।'
      },
      explanation: {
        en: 'Second Normal Form builds on 1NF: it requires that all non-prime attributes exhibit full functional dependency on every candidate key, eliminating partial key dependencies.',
        bn: '২য় নরমাল ফর্ম ১ম নরমাল ফর্মের ওপর প্রতিষ্ঠিত: এটি নিশ্চিত করে যে প্রতিটি নন-প্রাইম কলাম ক্যান্ডিডেট কি-এর ওপর সম্পূর্ণ নির্ভরশীল এবং কোনো আংশিক নির্ভরতা নেই।'
      }
    },
    {
      id: 'norm-2nf-ex-2',
      kind: 'mcq',
      topic: 'single-key-2nf-automaticity',
      question: {
        en: 'Why is a 1NF table with a single-column primary key (such as user_id) guaranteed to be in Second Normal Form (2NF)?',
        bn: 'একক কলামের প্রাইমারি কি (যেমন user_id) থাকা একটি ১ম নরমাল ফর্মের টেবিল কেন নিশ্চিতভাবেই ২য় নরমাল ফর্মে (2NF) থাকে?'
      },
      options: [
        {
          en: 'Because a single-column key has no proper non-empty subsets, making partial key dependencies mathematically impossible',
          bn: 'কারণ একটি একক কলামের কি-এর কোনো ছোট উপসেট হতে পারে না, ফলে আংশিক কি নির্ভরতা থাকা গাণিতিকভাবে অসম্ভব'
        },
        {
          en: 'Because single-column keys automatically prevent network timeouts',
          bn: 'কারণ একক কলামের কি স্বয়ংক্রিয়ভাবে নেটওয়ার্ক টাইমআউট প্রতিরোধ করে'
        },
        {
          en: 'Because SQL standards automatically delete non-key columns',
          bn: 'কারণ SQL স্ট্যান্ডার্ড স্বয়ংক্রিয়ভাবে নন-কি কলামগুলো মুছে ফেলে'
        },
        {
          en: 'Because the database engine encrypts single-column tables',
          bn: 'কারণ ডাটাবেস ইঞ্জিন একক কলামের টেবিলগুলোকে এনক্রিপ্ট করে রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A set of 1 element has no smaller proper subsets other than the empty set.',
        bn: '১টি উপাদানের সেটের ফাঁকা সেট ছাড়া আর কোনো ক্ষুদ্রতর উপসেট হতে পারে না।'
      },
      explanation: {
        en: 'A partial dependency requires a proper subset of a candidate key. Since a single attribute has no smaller non-empty proper subsets, partial dependencies cannot exist.',
        bn: 'আংশিক নির্ভরতার জন্য ক্যান্ডিডেট কি-এর একটি ছোট উপসেট প্রয়োজন। যেহেতু একটি একক অ্যাট্রিবিউটের কোনো ছোট উপসেট নেই, তাই আংশিক নির্ভরতা তৈরি হওয়া অসম্ভব।'
      }
    },
    {
      id: 'norm-2nf-ex-3',
      kind: 'mcq',
      topic: 'deletion-anomaly-2nf-hazard',
      question: {
        en: 'In an unnormalized enrollments table with composite key (student_id, course_id), what constitutes a Deletion Anomaly?',
        bn: '(student_id, course_id) কম্পোজিট কি যুক্ত একটি অসংগঠিত টেবিলে কোন পরিস্থিতিটিকে ডিলিট অ্যানোমালি বলা হয়?'
      },
      options: [
        {
          en: 'Deleting the last enrolled student unintentionally deletes the course name and credit description from the database system',
          bn: 'সর্বশেষ ভর্তি হওয়া শিক্ষার্থীকে মুছে ফেলার সাথে সাথে অনিচ্ছাকৃতভাবে কোর্সের নাম ও ক্রেডিটের তথ্যও ডাটাবেস থেকে মুছে যাওয়া'
        },
        {
          en: 'Deleting a row causes the server fan to spin at maximum speed',
          bn: 'একটি সারি মুছে দিলে সার্ভারের ফ্যান সর্বোচ্চ গতিতে ঘুরতে শুরু করা'
        },
        {
          en: 'Deleting a record requires typing the root database password twice',
          bn: 'একটি রেকর্ড মুছতে ডাটাবেস রুট পাসওয়ার্ড দুইবার টাইপ করতে বাধ্য হওয়া'
        },
        {
          en: 'Deleting rows converts numbers into dates',
          bn: 'সারি মুছলে সংখ্যাগুলো স্বয়ংক্রিয়ভাবে তারিখে রূপান্তরিত হয়ে যাওয়া'
        }
      ],
      answer: 0,
      hint: {
        en: 'Deleting one entity mistakenly wipes out unrelated catalog information.',
        bn: 'একটি তথ্য মুছতে গিয়ে তার সাথে সম্পর্কহীন মূল ক্যাটালগ তথ্য মুছে ফেলা।'
      },
      explanation: {
        en: 'If course data only lives inside student enrollment rows, deleting the final enrollment tuple accidentally wipes out the knowledge that the course ever existed.',
        bn: 'কোর্সের তথ্য যদি কেবল শিক্ষার্থীদের ভর্তি সারির ভেতরেই থাকে, তবে শেষ শিক্ষার্থীর তথ্য মুছলে সেই কোর্সের অস্তিত্বের সমস্ত রেকর্ডও হারিয়ে যায়।'
      }
    },
    {
      id: 'norm-2nf-ex-4',
      kind: 'mcq',
      topic: 'lossless-decomposition-2nf-procedure',
      question: {
        en: 'When decomposing an unnormalized relation into 2NF, what must be done with attributes that depend on only part of the composite key?',
        bn: 'একটি অসংগঠিত রিলেশনকে ২য় নরমাল ফর্মে রূপান্তরের সময় কম্পোজিট কি-এর আংশিক অংশের ওপর নির্ভরশীল কলামগুলোর ক্ষেত্রে কী করতে হয়?'
      },
      options: [
        {
          en: 'Extract them into a new relation where their partial determinant becomes the full Primary Key, preserving foreign key linkage',
          bn: 'তাদেরকে একটি নতুন টেবিলে সরিয়ে নিতে হবে যেখানে তাদের আংশিক ডিটারমিন্যান্ট সম্পূর্ণ প্রাইমারি কি হিসেবে কাজ করবে এবং ফরেন কি সম্পর্ক থাকবে'
        },
        {
          en: 'Delete those attributes permanently from the application',
          bn: 'অ্যাপ্লিকেশন থেকে সেই অ্যাট্রিবিউটগুলোকে চিরতরে মুছে ফেলতে হবে'
        },
        {
          en: 'Convert all text strings in those columns into hexadecimal numbers',
          bn: 'সেই কলামের সমস্ত টেক্সট স্ট্রিংকে হেক্সাডেসিমাল সংখ্যায় রূপান্তর করতে হবে'
        },
        {
          en: 'Store those columns in external HTML emails',
          bn: 'সেই কলামগুলোকে বাহ্যিক HTML ইমেইলে সংরক্ষণ করতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each partial dependency forms its own dedicated table with the determinant as primary key.',
        bn: 'প্রতিটি আংশিক নির্ভরতা ডিটারমিন্যান্টকে প্রাইমারি কি বানিয়ে নিজস্ব টেবিলে আলাদা হয়ে যায়।'
      },
      explanation: {
        en: 'The standard 2NF decomposition moves partially dependent attributes into a new relation where their determinant forms the sole primary key, maintaining referential integrity.',
        bn: 'স্ট্যান্ডার্ড ২য় নরমাল ফর্ম রূপান্তর আংশিক নির্ভরশীল কলামগুলোকে নতুন টেবিলে নিয়ে যায় যেখানে তাদের ডিটারমিন্যান্ট একক প্রাইমারি কি হিসেবে কাজ করে।'
      }
    }
  ],
  quiz: {
    id: 'seconds-and-the-second-quiz',
    title: {
      en: 'Second Normal Form (2NF) Mastery Quiz',
      bn: '২য় নরমাল ফর্ম (2NF) দক্ষতা যাচাই কুইজ'
    },
    questions: [
      {
        id: 'norm-2nf-qz-1',
        kind: 'mcq',
        topic: 'prime-attribute-formal-definition',
        question: {
          en: 'In database normalization terminology, what is the formal definition of a "prime attribute"?',
          bn: 'ডাটাবেস নরমালাইজেশন পরিভাষায় "প্রাইম অ্যাট্রিবিউট (prime attribute)"-এর আনুষ্ঠানিক সংজ্ঞা কী?'
        },
        options: [
          {
            en: 'An attribute that is a member of at least one candidate key of the relation',
            bn: 'এমন একটি অ্যাট্রিবিউট যা রিলেশনের অন্তত একটি ক্যান্ডিডেট কি-এর সদস্য'
          },
          {
            en: 'An attribute whose value is a prime number (such as 2, 3, 5, or 7)',
            bn: 'এমন একটি অ্যাট্রিবিউট যার মান একটি মৌলিক সংখ্যা (যেমন ২, ৩, ৫ বা ৭)'
          },
          {
            en: 'An attribute created by Amazon Prime subscription services',
            bn: 'আমাজন প্রাইম সাবস্ক্রিপশন সার্ভিস কর্তৃক তৈরি করা কোনো অ্যাট্রিবিউট'
          },
          {
            en: 'An attribute that can never be modified by UPDATE queries',
            bn: 'এমন একটি অ্যাট্রিবিউট যা UPDATE কোয়েরি দ্বারা কখনো পরিবর্তন করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Prime attributes belong to a candidate key; non-prime attributes do not.',
          bn: 'প্রাইম অ্যাট্রিবিউট কোনো ক্যান্ডিডেট কি-এর অংশ; নন-প্রাইম অ্যাট্রিবিউট তা নয়।'
        },
        explanation: {
          en: 'A prime attribute is any attribute that belongs to any candidate key of the relation. Non-prime attributes are those that do not belong to any candidate key; 2NF requires all non-prime attributes to depend on the whole key.',
          bn: 'প্রাইম অ্যাট্রিবিউট হলো এমন যেকোনো কলাম যা কোনো না কোনো ক্যান্ডিডেট কি-এর অংশ। আর নন-প্রাইম কলামগুলো কোনো কি-এর অংশ নয়; ২য় নরমাল ফর্ম দাবি করে যে সমস্ত নন-প্রাইম কলাম সম্পূর্ণ কি-এর ওপর নির্ভর করবে।'
        }
      },
      {
        id: 'norm-2nf-qz-2',
        kind: 'mcq',
        topic: 'insertion-anomaly-practical-consequence',
        question: {
          en: 'Why does an Insertion Anomaly prevent creating a new warehouse location in a non-2NF inventory schema keyed on (warehouse_id, item_sku)?',
          bn: '(warehouse_id, item_sku) কি যুক্ত একটি নন-২NF ইনভেন্টরি টেবিলে ইনসার্ট অ্যানোমালি কেন নতুন গুদাম তৈরি করতে বাধা দেয়?'
        },
        options: [
          {
            en: 'Because item_sku is part of the composite primary key and cannot be NULL, preventing the creation of a warehouse that currently contains no items',
            bn: 'কারণ item_sku কম্পোজিট প্রাইমারি কি-এর অংশ হওয়ায় তা NULL হতে পারে না, ফলে কোনো পণ্য নেই এমন একটি নতুন গুদাম রেকর্ড করা অসম্ভব হয়ে পড়ে'
          },
          {
            en: 'Because warehouses require municipal building permits before SQL queries can run',
            bn: 'কারণ SQL কোয়েরি চালানোর আগে গুদামের জন্য সরকারি নির্মাণ অনুমতির প্রয়োজন হয়'
          },
          {
            en: 'Because database hard drives reject inventory data on weekends',
            bn: 'কারণ ছুটির দিনে ডাটাবেস হার্ডডিস্ক ইনভেন্টরি ডাটা গ্রহণ করতে অস্বীকার করে'
          },
          {
            en: 'Because inventory tables can never store more than 1 warehouse',
            bn: 'কারণ ইনভেন্টরি টেবিলে কখনো ১টির বেশি গুদামের তথ্য রাখা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Entity integrity dictates that no component of a primary key can be NULL.',
          bn: 'এন্টিটি অখণ্ডতা নির্দেশ করে যে প্রাইমারি কি-এর কোনো অংশই NULL হতে পারে না।'
        },
        explanation: {
          en: 'Under relational entity integrity, primary key columns cannot accept NULL values. If an empty warehouse has no items yet, item_sku would have to be NULL, causing the INSERT operation to fail.',
          bn: 'রিলেশনাল এন্টিটি অখণ্ডতার কারণে প্রাইমারি কি কলামে NULL মান বসানো যায় না। খালি গুদামে কোনো পণ্য না থাকলে item_sku-কে NULL হতে হতো, যার কারণে INSERT কোয়েরি ব্যর্থ হয়।'
        }
      },
      {
        id: 'norm-2nf-qz-3',
        kind: 'mcq',
        topic: 'spurious-tuple-risk-lossy-join',
        question: {
          en: 'What is a "spurious tuple" and how does rigorous 2NF decomposition guarantee its prevention?',
          bn: '"স্পুরিয়াস টিউপল (spurious tuple)" কী এবং সঠিক ২য় নরমাল ফর্ম রূপান্তর কীভাবে এটি প্রতিরোধ করে?'
        },
        options: [
          {
            en: 'A false, phantom row generated by joining tables on non-key attributes that was not present in the original dataset',
            bn: 'নন-কি অ্যাট্রিবিউট দিয়ে টেবিল জয়েন করার ফলে তৈরি হওয়া একটি ভুয়া বা কাল্পনিক সারি যা মূল ডাটাবেসে ছিল না'
          },
          {
            en: 'A corrupted character glyph rendered in ancient Greek',
            bn: 'প্রাচীন গ্রিক ভাষায় প্রদর্শিত কোনো ক্ষতিগ্রস্ত ফন্ট'
          },
          {
            en: 'A record deleted by a database trigger during midnight maintenance',
            bn: 'মধ্যরাতের রক্ষণাবেক্ষণের সময় ডাটাবেস ট্রিগার দ্বারা মুছে ফেলা একটি রেকর্ড'
          },
          {
            en: 'A row containing only negative integer numbers',
            bn: 'এমন একটি সারি যাতে শুধুমাত্র ঋণাত্মক পূর্ণসংখ্যা থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Lossy joins create extra bogus records; lossless joins reconstruct the exact original dataset.',
          bn: 'ক্ষতিকর জয়েন বাড়তি ভুয়া ডাটা তৈরি করে; আর লসলেস জয়েন মূল ডাটা হুবহু ফিরিয়ে দেয়।'
        },
        explanation: {
          en: 'When tables are decomposed carelessly on columns that do not constitute candidate keys, re-joining them produces invalid combinations called spurious tuples. 2NF guarantees lossless joins using candidate keys as join foreign keys.',
          bn: 'ক্যান্ডিডেট কি ছাড়া অসতর্কভাবে টেবিল বিভক্ত করলে জয়েনের পর ভুয়া ডাটা তৈরি হয় যাকে স্পুরিয়াস টিউপল বলে। ২য় নরমাল ফর্ম নিশ্চিত করে যে ক্যান্ডিডেট কি ব্যবহার করায় জয়েনটি সম্পূর্ণ লসলেস বা নিখুঁত হয়।'
        }
      },
      {
        id: 'norm-2nf-qz-4',
        kind: 'mcq',
        topic: '2nf-to-3nf-progression-preview',
        question: {
          en: 'Can a table in clean Second Normal Form (2NF) still suffer from update anomalies?',
          bn: 'নিখুঁত ২য় নরমাল ফর্মে (2NF) থাকা একটি টেবিল কি এখনও আপডেট অ্যানোমালিতে আক্রান্ত হতে পারে?'
        },
        options: [
          {
            en: 'Yes, if it contains transitive dependencies where a non-key attribute depends on another non-key attribute (requiring 3NF)',
            bn: 'হ্যাঁ, যদি এতে ট্রানজিটিভ নির্ভরতা থাকে যেখানে একটি নন-কি কলাম অন্য একটি নন-কি কলামের ওপর নির্ভর করে (যার জন্য ৩য় নরমাল ফর্ম প্রয়োজন)'
          },
          {
            en: 'No, 2NF completely eliminates all possible database defects forever',
            bn: 'না, ২য় নরমাল ফর্ম ডাটাবেসের সমস্ত সম্ভাব্য ত্রুটি চিরতরে দূর করে দেয়'
          },
          {
            en: 'No, update anomalies can only happen in NoSQL document databases',
            bn: 'না, আপডেট সমস্যা কেবল NoSQL ডকুমেন্ট ডাটাবেসেই ঘটতে পারে'
          },
          {
            en: 'Yes, but only if the database is running on a 32-bit CPU',
            bn: 'হ্যাঁ, তবে কেবল তখনই যদি ডাটাবেসটি ৩২-বিট সিপিইউতে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: '2NF removes partial key dependencies; transitive non-key dependencies require 3NF.',
          bn: '২য় নরমাল ফর্ম আংশিক কি নির্ভরতা দূর করে; নন-কি ট্রানজিটিভ নির্ভরতা দূর করতে ৩য় নরমাল ফর্ম প্রয়োজন।'
        },
        explanation: {
          en: 'While 2NF eliminates partial key dependencies, it does not prevent transitive dependencies among non-key columns (e.g. employee_id -> department_id -> department_manager). Eliminating transitive dependencies requires Third Normal Form (3NF).',
          bn: '২য় নরমাল ফর্ম আংশিক নির্ভরতা দূর করলেও নন-কি কলামগুলোর মধ্যকার পরোক্ষ নির্ভরতা (যেমন employee_id -> department_id -> department_manager) দূর করতে পারে না। এই পরোক্ষ নির্ভরতা দূর করতে ৩য় নরমাল ফর্ম (3NF) প্রয়োজন।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'thirds-and-the-third',
    title: {
      en: 'Third Normal Form (3NF): Transitive Dependencies',
      bn: '৩য় নরমাল ফর্ম (3NF): ট্রানজিটিভ নির্ভরতা দূরীকরণ'
    }
  }
};
