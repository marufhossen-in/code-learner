import type { Lesson } from '../../../lib/types';

export const NormsAndTheNormalLesson: Lesson = {
  slug: 'norms-and-the-normal',
  tech: 'db-design',
  title: {
    en: 'Practical Schema Normalization: 1NF, 2NF, 3NF & Integrity',
    bn: 'বাস্তবসম্মত স্কিমা নরমালাইজেশন: ১NF, ২NF, ৩NF ও ডাটা শুদ্ধতা'
  },
  summary: {
    en: 'Master relational schema normalization: eliminate insertion, update, and deletion anomalies, decompose non-atomic columns in 1NF, remove partial dependencies in 2NF, and resolve transitive dependencies in 3NF.',
    bn: 'রিলেশনাল স্কিমা নরমালাইজেশন আয়ত্ত করুন: ইনসার্ট, আপডেট ও ডিলিট অসঙ্গতি দূরীকরণ, ১NF-এ নন-অ্যাটমিক কলাম পৃথকীকরণ, ২NF-এ আংশিক নির্ভরতা পরিহার এবং ৩NF-এ ট্রানজিটিভ নির্ভরতার সমাধান।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'why-normalize-databases',
      text: {
        en: 'Why Normalization Matters: Eradicating Database Anomalies',
        bn: 'নরমালাইজেশন কেন জরুরি: ডাটাবেস অসঙ্গতি দূরীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you first design a database, packing everything into a single flat table is tempting. However, flat tables quickly cause painful data anomalies. Updating an address across multiple records leads to inconsistencies, while deleting an order can accidentally erase customer details.',
        bn: 'যখন আপনি প্রথম ডাটাবেস ডিজাইন করেন, সমস্ত তথ্য একটিমাত্র ফ্ল্যাট টেবিলে রাখা সহজ মনে হতে পারে। কিন্তু ফ্ল্যাট টেবিল খুব দ্রুত মারাত্মক ডাটা অসঙ্গতি তৈরি করে। একাধিক রেকর্ডে ঠিকানা পরিবর্তন করতে গেলে তথ্যের অমিল দেখা দেয়, আবার একটি অর্ডার ডিলিট করলে গ্রাহকের মূল তথ্যও হারিয়ে যেতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Database Normalization is the formal mathematical process of decomposing tables into smaller, well-structured relations. By enforcing three successive Normal Forms (1NF, 2NF, and 3NF), you ensure that every piece of data is stored in exactly 1 place, eliminating redundant bloat and guaranteeing referential integrity.',
        bn: 'ডাটাবেস নরমালাইজেশন হলো টেবিলগুলোকে ছোট ও সুশৃঙ্খল রিলেশনে ভাগ করার একটি বিধিবদ্ধ গাণিতিক প্রক্রিয়া। ক্রমান্বয়ে ৩টি স্বাভাবিক রূপ (১NF, ২NF এবং ৩NF) প্রয়োগ করে আপনি নিশ্চিত করেন যে প্রতিটি তথ্য ডাটাবেসের ঠিক ১টি জায়গায় সংরক্ষিত থাকবে, যা অতিরিক্ত অপচয় দূর করে এবং রেফারেন্সিয়াল শুদ্ধতা নিশ্চিত করে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Three Stages of Normalization: 1NF Atomicity, 2NF Full Dependency, 3NF Non-Transitive',
        bn: 'নরমালাইজেশনের তিনটি ধাপ: ১NF অ্যাটমিসিটি, ২NF পূর্ণ নির্ভরতা, ৩NF ট্রানজিটিভ দূরীকরণ'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Database Normalization Progression Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Stage 1: 1NF -->
  <g transform="translate(30, 30)">
    <rect width="200" height="260" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
    <rect width="200" height="36" rx="8" fill="#991b1b" />
    <text x="100" y="23" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">1NF: Atomic Values</text>
    <text x="15" y="60" fill="#fca5a5" font-size="10" font-weight="bold">Rules Enforced:</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="9">• Every cell has 1 scalar value</text>
    <text x="15" y="98" fill="#cbd5e1" font-size="9">• No CSV strings / JSON arrays</text>
    <text x="15" y="116" fill="#cbd5e1" font-size="9">• Primary key identifies each row</text>
    <rect x="15" y="140" width="170" height="75" rx="4" fill="#0f172a" stroke="#ef4444" />
    <text x="25" y="160" fill="#f87171" font-size="9" font-weight="bold">Violation Fixed:</text>
    <text x="25" y="178" fill="#94a3b8" font-size="8">Before: tags = "sql, db, code"</text>
    <text x="25" y="196" fill="#34d399" font-size="8">After: Split to individual rows</text>
  </g>

  <!-- Arrow 1 to 2 -->
  <path d="M 240 160 L 265 160" stroke="#f59e0b" stroke-width="2" />

  <!-- Stage 2: 2NF -->
  <g transform="translate(270, 30)">
    <rect width="200" height="260" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
    <rect width="200" height="36" rx="8" fill="#b45309" />
    <text x="100" y="23" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">2NF: Full Dependency</text>
    <text x="15" y="60" fill="#fde68a" font-size="10" font-weight="bold">Rules Enforced:</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="9">• Must already satisfy 1NF</text>
    <text x="15" y="98" fill="#cbd5e1" font-size="9">• No partial key dependencies</text>
    <text x="15" y="116" fill="#cbd5e1" font-size="9">• Attributes depend on whole PK</text>
    <rect x="15" y="140" width="170" height="75" rx="4" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="160" fill="#facc15" font-size="9" font-weight="bold">Violation Fixed:</text>
    <text x="25" y="178" fill="#94a3b8" font-size="8">Composite PK: (order, item)</text>
    <text x="25" y="196" fill="#34d399" font-size="8">Move item_name to items table</text>
  </g>

  <!-- Arrow 2 to 3 -->
  <path d="M 480 160 L 505 160" stroke="#10b981" stroke-width="2" />

  <!-- Stage 3: 3NF -->
  <g transform="translate(510, 30)">
    <rect width="200" height="260" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="200" height="36" rx="8" fill="#047857" />
    <text x="100" y="23" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">3NF: No Transitive</text>
    <text x="15" y="60" fill="#a7f3d0" font-size="10" font-weight="bold">Rules Enforced:</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="9">• Must already satisfy 2NF</text>
    <text x="15" y="98" fill="#cbd5e1" font-size="9">• No transitive dependencies</text>
    <text x="15" y="116" fill="#cbd5e1" font-size="9">• Non-key depends only on key</text>
    <rect x="15" y="140" width="170" height="75" rx="4" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="160" fill="#34d399" font-size="9" font-weight="bold">Violation Fixed:</text>
    <text x="25" y="178" fill="#94a3b8" font-size="8">emp -&gt; dept_id -&gt; dept_name</text>
    <text x="25" y="196" fill="#34d399" font-size="8">Move dept_name to departments</text>
  </g>
</svg>`,
      caption: {
        en: 'The 3-stage normalization ladder: 1NF eliminates non-atomic lists, 2NF removes partial key dependencies, and 3NF banishes transitive dependencies.',
        bn: '৩-ধাপের নরমালাইজেশন সিঁড়ি: ১NF নন-অ্যাটমিক তালিকা দূর করে, ২NF আংশিক কি নির্ভরতা সরায় এবং ৩NF ট্রানজিটিভ নির্ভরতা নির্মূল করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'First Normal Form (1NF)',
          def: {
            en: 'A table condition where every attribute holds only atomic, indivisible scalar values, with a primary key identifying each unique row.',
            bn: 'টেবিলের এমন একটি রূপ যেখানে প্রতিটি কলাম কেবল অবিভাজ্য একক মান ধরে রাখে এবং প্রাইমারি কি প্রতিটি সারিকে আলাদাভাবে শনাক্ত করে।'
          }
        },
        {
          term: 'Second Normal Form (2NF)',
          def: {
            en: 'A 1NF relation where every non-key column is fully functionally dependent on the complete candidate primary key, eliminating partial dependencies.',
            bn: 'একটি ১NF টেবিল যেখানে সমস্ত সাধারণ কলাম কম্পোজিট প্রাইমারি কি-র সম্পূর্ণ অংশের ওপর নির্ভরশীল থাকে, কোনো আংশিক অংশের ওপর নয়।'
          }
        },
        {
          term: 'Third Normal Form (3NF)',
          def: {
            en: 'A 2NF relation containing zero transitive dependencies, ensuring non-key attributes depend solely on candidate primary keys.',
            bn: 'একটি ২NF টেবিল যেখানে কোনো ট্রানজিটিভ নির্ভরতা থাকে না, অর্থাৎ সাধারণ কলামগুলো সরাসরি প্রাইমারি কি ছাড়া অন্য কোনো সাধারণ কলামের ওপর নির্ভর করে না।'
          }
        },
        {
          term: 'Transitive Dependency',
          def: {
            en: 'An indirect functional dependency where attribute A determines attribute B, and attribute B determines attribute C (A -> B -> C).',
            bn: 'একটি পরোক্ষ নির্ভরতা যেখানে সাধারণ কলাম A কলাম B-কে নির্ধারণ করে এবং কলাম B কলাম C-কে নির্ধারণ করে (A -> B -> C)।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'the-three-normal-forms-in-practice',
      text: {
        en: 'The Normal Forms in Practice: 1NF, 2NF, and 3NF Rules',
        bn: 'বাস্তবে স্বাভাবিক রূপগুলো: ১NF, ২NF এবং ৩NF নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'First Normal Form (1NF) demands atomicity. If a row stores multiple phone numbers like "555-0100, 555-0199", you cannot index or query individual phones cleanly. The fix decomposes them into separate child rows in a customer_phones table.',
        bn: 'প্রথম স্বাভাবিক রূপ (১NF) প্রতিটি মানের এককতা দাবি করে। কোনো সারিতে যদি "৫৫৫-০১০০, ৫৫৫-০১৯৯"-এর মতো একাধিক ফোন নম্বর সেভ থাকে, তবে আলাদাভাবে কোনো ফোন নম্বর ইনডেক্স বা ফিল্টার করা অসম্ভব। এর সমাধান হলো সেগুলোকে ভেঙে customer_phones টেবিলে আলাদা সারিতে রূপান্তর করা।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Second Normal Form (2NF) addresses composite primary keys. If your primary key is (order_id, product_id) and you store product_name in that table, product_name depends solely on product_id. Third Normal Form (3NF) tackles transitive links: in an employee table, department_name depends on department_id, which depends on employee_id. The celebrated rule summarizes: "Every non-key attribute must provide a fact about the key, the whole key, and nothing but the key."',
        bn: 'দ্বিতীয় স্বাভাবিক রূপ (২NF) কম্পোজিট প্রাইমারি কি-র আংশিক নির্ভরতা সমাধান করে। আপনার প্রাইমারি কি যদি (order_id, product_id) হয় এবং সেখানে product_name রাখা থাকে, তবে পণ্যটির নাম কেবল product_id-র ওপর নির্ভর করে। আর তৃতীয় স্বাভাবিক রূপ (৩NF) ট্রানজিটিভ সম্পর্ক নির্মূল করে: কর্মী টেবিলে ডিপার্টমেন্টের নাম নির্ভর করে department_id-র ওপর, যা কর্মী id-র ওপর নির্ভরশীল। বিখ্যাত নিয়মটি বলে: "প্রতিটি সাধারণ কলামকে কেবল প্রাইমারি কি, সম্পূর্ণ প্রাইমারি কি এবং প্রাইমারি কি ছাড়া অন্য কিছুর ওপর নির্ভর করা চলবে না।"'
      }
    },
    {
      type: 'heading',
      id: 'node-norm-engine',
      text: {
        en: 'Executable Schema Normalization Engine',
        bn: 'রানযোগ্য স্কিমা নরমালাইজেশন ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine decomposing a flat transaction dataset into 3 normalized relations (customers, products, and order_items). By decomposing the flat table, customer records drop from 5 redundant copies to 2 unique entities. When Alice changes her city, the database executes exactly 1 row write instead of 3 redundant updates.',
        bn: 'নিচে একটি ফ্ল্যাট লেনদেন ডাটাকে ৩টি নরমালাইজড টেবিলে (customers, products এবং order_items) রূপান্তরকারী সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। টেবিল বিভাজনের মাধ্যমে গ্রাহকের ডাটা ৫টি অপচয়কারী কপি থেকে কমে মাত্র ২টি অনন্য রেকর্ডে নেমে আসে। এলিস যখন তার শহর পরিবর্তন করে, তখন ৩টি অপ্রয়োজনীয় আপডেটের বদলে ডাটাবেস ঠিক ১টি রো রাইট সম্পন্ন করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Schema normalization engine demonstrating 3NF decomposition and elimination of update anomalies',
        bn: '৩NF বিভাজন এবং আপডেট অসঙ্গতি দূরীকরণ প্রদর্শনকারী স্কিমা নরমালাইজেশন ইঞ্জিন'
      },
      code: `// Normalization Pipeline Simulator
const flatData = [
  { orderId: 101, customer: 'Alice', city: 'Dhaka', product: 'Laptop', price: 1000, qty: 1 },
  { orderId: 101, customer: 'Alice', city: 'Dhaka', product: 'Mouse', price: 20, qty: 2 },
  { orderId: 102, customer: 'Alice', city: 'Dhaka', product: 'Keyboard', price: 50, qty: 1 },
  { orderId: 103, customer: 'Bob', city: 'Chittagong', product: 'Laptop', price: 1000, qty: 1 },
  { orderId: 104, customer: 'Bob', city: 'Chittagong', product: 'Mouse', price: 20, qty: 1 }
];

// 3NF Decomposition
const customers = new Map();
const products = new Map();
const orderItems = [];

let customerSequence = 1;
let productSequence = 1;

for (const record of flatData) {
  if (!customers.has(record.customer)) {
    customers.set(record.customer, { id: customerSequence++, name: record.customer, city: record.city });
  }
  if (!products.has(record.product)) {
    products.set(record.product, { id: productSequence++, name: record.product, price: record.price });
  }
  orderItems.push({
    orderId: record.orderId,
    customerId: customers.get(record.customer).id,
    productId: products.get(record.product).id,
    quantity: record.qty
  });
}

const unnormalizedUpdates = flatData.filter(row => row.customer === 'Alice').length; // 3 updates in flat table!
const normalizedUpdates = 1; // Exactly 1 update in customers table!

const isAccurate = customers.size === 2 && products.size === 3 && orderItems.length === 5 && normalizedUpdates === 1;

console.log(\`[Normalization Engine] Decomposed flat table into 3 normalized relations (customers, products, order_items).\`);
console.log(\`[Storage & Redundancy] Reduced customer duplicates from 5 to \${customers.size} unique records.\`);
console.log(\`[Anomaly Prevention] Updating customer city requires \${normalizedUpdates} row write instead of \${unnormalizedUpdates} redundant updates (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'The Golden Industry Standard: Stop at 3NF',
        bn: 'শিল্পের বিশ্বস্ত সোনালী মানদণ্ড: ৩NF-এই থামুন'
      },
      text: {
        en: 'While computer science textbooks define higher normal forms (BCNF, 4NF, 5NF), virtually all enterprise engineering organizations standardize on Third Normal Form (3NF). 3NF eliminates 99% of real-world update and deletion anomalies without causing excessive query join complexity.',
        bn: 'কম্পিউটার বিজ্ঞানের পাঠ্যবইয়ে আরও উচ্চতর রূপ (BCNF, ৪NF, ৫NF) থাকলেও বাস্তব বিশ্বের প্রায় সমস্ত এন্টারপ্রাইজ কোম্পানি ৩য় স্বাভাবিক রূপ (৩NF)-কে তাদের আদর্শ হিসেবে গ্রহণ করে। ৩NF কোয়েরির অতিরিক্ত জটিলতা তৈরি না করেই বাস্তব জীবনের ৯৯% অসঙ্গতি পুরোপুরি দূর করে দেয়।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Functional Dependency Analyzer',
        bn: 'ফাংশনাল ডিপেন্ডেন্সি অ্যানালাইজার'
      },
      description: {
        en: 'Determine which normal form violation occurs based on candidate key dependencies.',
        bn: 'প্রাইমারি কি নির্ভরতার ওপর ভিত্তি করে কোন স্বাভাবিক রূপটি লঙ্ঘিত হয়েছে তা চিহ্নিত করুন।'
      },
      code: `function diagnoseViolation(isAtomic, dependsOnPartialPK, dependsOnNonKey) {
  if (!isAtomic) return 'VIOLATES_1NF: Non-atomic multi-valued attribute';
  if (dependsOnPartialPK) return 'VIOLATES_2NF: Partial key dependency';
  if (dependsOnNonKey) return 'VIOLATES_3NF: Transitive dependency';
  return 'COMPLIANT_3NF: Fully normalized relational structure';
}

console.log('Comma Phone List:', diagnoseViolation(false, false, false));
console.log('Dept in Employee:', diagnoseViolation(true, false, true));`,
      tests: [
        {
          name: {
            en: 'Identifies 1NF atomicity violation',
            bn: '১NF অ্যাটমিসিটি লঙ্ঘন চিহ্নিত করে'
          },
          expected: 'Comma Phone List: VIOLATES_1NF: Non-atomic multi-valued attribute'
        },
        {
          name: {
            en: 'Identifies 3NF transitive dependency violation',
            bn: '৩NF ট্রানজিটিভ নির্ভরতা লঙ্ঘন চিহ্নিত করে'
          },
          expected: 'Dept in Employee: VIOLATES_3NF: Transitive dependency'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-nrm-ex-1',
      kind: 'mcq',
      topic: '1nf-atomicity-rule',
      question: {
        en: 'Which database column structure constitutes an explicit violation of First Normal Form (1NF)?',
        bn: 'নিচের কোন ডাটাবেস কলাম কাঠামোটি সুস্পষ্টভাবে প্রথম স্বাভাবিক রূপ (১NF) লঙ্ঘন করে?'
      },
      options: [
        {
          en: 'A user_interests column storing comma-separated values like "coding, hiking, music" inside a single text cell',
          bn: 'একটি user_interests কলাম যেখানে একটিমাত্র সেলে কমা দিয়ে "coding, hiking, music"-এর মতো একাধিক মান রাখা হয়েছে'
        },
        {
          en: 'An id column declared as BIGINT PRIMARY KEY',
          bn: 'একটি id কলাম যা BIGINT PRIMARY KEY হিসেবে ঘোষিত'
        },
        {
          en: 'A created_at column storing UTC timestamps',
          bn: 'একটি created_at কলাম যা UTC টাইমস্ট্যাম্প সংরক্ষণ করে'
        },
        {
          en: 'A price column storing decimal currency values',
          bn: 'একটি price কলাম যা দশমিক মুদ্রা মান সংরক্ষণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: '1NF demands atomic, indivisible values in every cell.',
        bn: '১NF প্রতিটি সেলে অবিভাজ্য একক মান থাকার শর্ত দেয়।'
      },
      explanation: {
        en: 'Storing multiple values in a single cell violates 1NF atomicity. To query or index individual interests, the attributes must be decomposed into a separate user_interests child table.',
        bn: 'একটি সেলে একাধিক মান রাখা ১NF অ্যাটমিসিটি ভাঙে। আলাদাভাবে কোনো শখ খুঁজতে হলে সেগুলোকে একটি পৃথক user_interests টেবিলে প্রতিটি সারিতে একটি করে রাখতে হয়।'
      }
    },
    {
      id: 'db-nrm-ex-2',
      kind: 'mcq',
      topic: '2nf-partial-dependency',
      question: {
        en: 'In a table with composite primary key (student_id, course_id), which attribute represents a Second Normal Form (2NF) partial key dependency violation?',
        bn: 'কম্পোজিট প্রাইমারি কি (student_id, course_id) বিশিষ্ট একটি টেবিলে কোন অ্যাট্রিবিউটটি দ্বিতীয় স্বাভাবিক রূপের (২NF) আংশিক কি নির্ভরতা লঙ্ঘন করে?'
      },
      options: [
        {
          en: 'course_title, because the course title depends exclusively on course_id and has zero functional dependency on student_id',
          bn: 'course_title, কারণ কোর্সের শিরোনামটি কেবল course_id-র ওপর নির্ভর করে এবং student_id-র সাথে এর কোনো সম্পর্ক নেই'
        },
        {
          en: 'final_grade, because the grade depends on both the student and the specific course taken',
          bn: 'final_grade, কারণ গ্রেডটি ছাত্র এবং নির্দিষ্ট কোর্স উভয়ের ওপর নির্ভর করে'
        },
        {
          en: 'enrollment_date, recording the exact day the student enrolled in the course',
          bn: 'enrollment_date, যা ছাত্রটি কবে কোর্সে ভর্তি হয়েছিল তা লিখে রাখে'
        },
        {
          en: 'attendance_count, tracking how many lectures the student attended in the course',
          bn: 'attendance_count, যা ছাত্রটি ক্লাসে কতদিন উপস্থিত ছিল তা হিসাব রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: '2NF requires attributes to depend on the whole composite key, not just part of it.',
        bn: '২NF-এর শর্ত হলো সমস্ত তথ্যকে পুরো কম্পোজিট কি-র ওপর নির্ভর করতে হবে, আংশিক কি-র ওপর নয়।'
      },
      explanation: {
        en: 'course_title depends solely on course_id. Duplicating course titles for every student who enrolls introduces update anomalies. It must reside in a separate courses table.',
        bn: 'course_title কেবল course_id-র ওপর নির্ভর করে। প্রতিটি ছাত্রের রো-তে কোর্সের নাম বারবার লিখলে অপচয় হয়। এটি একটি আলাদা courses টেবিলে থাকা উচিত।'
      }
    },
    {
      id: 'db-nrm-ex-3',
      kind: 'mcq',
      topic: '3nf-transitive-dependency',
      question: {
        en: 'In an employees table with primary key id, the table contains department_id and department_budget. Why does this violate Third Normal Form (3NF)?',
        bn: 'id প্রাইমারি কি বিশিষ্ট একটি employees টেবিলে department_id এবং department_budget রয়েছে। এটি কেন তৃতীয় স্বাভাবিক রূপ (৩NF) লঙ্ঘন করে?'
      },
      options: [
        {
          en: 'department_budget is transitively dependent on id through department_id (id -> department_id -> department_budget); non-key columns cannot depend on other non-key columns',
          bn: 'department_budget পরোক্ষভাবে department_id-র মাধ্যমে id-র ওপর নির্ভর করে (id -> department_id -> department_budget); সাধারণ কলাম অন্য সাধারণ কলামের ওপর নির্ভর করতে পারে না'
        },
        {
          en: 'Because employees are legally forbidden from knowing department budgets',
          bn: 'কারণ কর্মীদের জন্য ডিপার্টমেন্টের বাজেট জানা আইনত নিষিদ্ধ'
        },
        {
          en: 'Because budgets can only be stored in Microsoft Excel spreadsheets',
          bn: 'কারণ বাজেট কেবল মাইক্রোসফট এক্সেল ফাইলে রাখা যায়'
        },
        {
          en: 'Because the word budget contains six letters',
          bn: 'কারণ budget শব্দটিতে ৬টি অক্ষর আছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Transitive dependencies occur when non-key fields determine other non-key fields.',
        bn: 'ট্রানজিটিভ নির্ভরতা ঘটে যখন একটি সাধারণ কলাম অপর একটি সাধারণ কলামকে নির্ধারণ করে।'
      },
      explanation: {
        en: 'If the budget changes, every employee in that department must have their row updated, creating update anomalies. In 3NF, department_budget moves to a departments table.',
        bn: 'বাজেট বদলালে ওই বিভাগের সমস্ত কর্মীর রো আপডেট করতে হয় যা মারাত্মক অসঙ্গতি তৈরি করে। ৩NF মেনে বাজেট তথ্যটি departments টেবিলে সরিয়ে নিতে হয়।'
      }
    },
    {
      id: 'db-nrm-ex-4',
      kind: 'mcq',
      topic: 'deletion-anomaly-concept',
      question: {
        en: 'What is a "Deletion Anomaly" in an un-normalized relational database schema?',
        bn: 'একটি আন-নরমালাইজড রিলেশনাল ডাটাবেস স্কিমায় "ডিলিট অসঙ্গতি" (Deletion Anomaly) বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'Deleting a record unintentionally destroys critical unrelated business information because both concepts were stored in the same un-normalized table',
          bn: 'একটি রেকর্ড মুছতে গিয়ে অনিচ্ছাকৃতভাবে অন্য একটি গুরুত্বপূর্ণ তথ্যের একমাত্র রেকর্ডটিও মুছে যাওয়া কারণ উভয় তথ্য একই টেবিলে জড়ো করা ছিল'
        },
        {
          en: 'The delete key on the computer keyboard stops working physically',
          bn: 'কম্পিউটার কীবোর্ডের ডিলিট বাটন শারীরিকভাবে কাজ করা বন্ধ করে দেওয়া'
        },
        {
          en: 'A database query that takes exactly 10 minutes to finish',
          bn: 'একটি ডাটাবেস কোয়েরি যা শেষ হতে ঠিক ১০ মিনিট সময় নেয়'
        },
        {
          en: 'When a database table runs out of row numbers',
          bn: 'যখন কোনো ডাটাবেস টেবিলে রো নাম্বারের সংখ্যা ফুরিয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Un-normalized tables couple unrelated entities, causing accidental data loss on delete.',
        bn: 'আন-নরমালাইজড টেবিল ভিন্ন ডোমেনকে একসাথে বাঁধে, ফলে ডিলিটের সময় ডাটা হারানোর ঝুঁকি তৈরি হয়।'
      },
      explanation: {
        en: 'If customer details only exist on an orders record, deleting a cancelled order accidentally erases the customer entirely. Normalization isolates customers into their own table.',
        bn: 'গ্রাহকের তথ্য যদি কেবল অর্ডার রেকর্ডের ভেতর থাকে, তবে বাতিল হওয়া অর্ডারটি মুছলে সাথে সাথে সেই গ্রাহকের অস্তিত্বও মুছে যায়। নরমালাইজেশন গ্রাহককে নিজস্ব টেবিলে আলাদা করে এটি ঠেকায়।'
      }
    }
  ],
  quiz: {
    id: 'norms-and-the-normal-quiz',
    title: {
      en: 'Database Schema Normalization Assessment Quiz',
      bn: 'ডাটাবেস স্কিমা নরমালাইজেশন মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'db-nrm-qz-1',
        kind: 'mcq',
        topic: 'codd-normalization-mantra',
        question: {
          en: 'In relational database theory, what famous principle summarizes Third Normal Form (3NF)?',
          bn: 'রিলেশনাল ডাটাবেস তত্ত্বে তৃতীয় স্বাভাবিক রূপকে (৩NF) সংক্ষেপে কোন বিখ্যাত নীতি দিয়ে প্রকাশ করা হয়?'
        },
        options: [
          {
            en: 'Every non-key attribute must provide a fact about the key, the whole key, and nothing but the key',
            bn: 'প্রতিটি সাধারণ কলামকে অবশ্যই প্রাইমারি কি, সম্পূর্ণ প্রাইমারি কি এবং প্রাইমারি কি ছাড়া অন্য কিছুর ওপর নির্ভর করা চলবে না'
          },
          {
            en: 'Every table must have at least 100 columns',
            bn: 'প্রতিটি টেবিলে কমপক্ষে ১০০টি কলাম থাকতে হবে'
          },
          {
            en: 'All primary keys must be written in capital letters',
            bn: 'تمام প্রাইমারি কি বড় হাতের অক্ষরে লিখতে হবে'
          },
          {
            en: 'Never use SQL JOIN statements in any query',
            bn: 'কোনো কোয়েরিতে কখনোই SQL JOIN স্টেটমেন্ট ব্যবহার করা যাবে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Key, whole key, nothing but the key encapsulates 1NF, 2NF, and 3NF.',
          bn: 'কি, সম্পূর্ণ কি এবং কেবল কি — এই বাক্যটি ১NF, ২NF এবং ৩NF-কে সংক্ষেপে ধারণ করে।'
        },
        explanation: {
          en: '"The key" represents 1NF. "The whole key" represents 2NF (no partial dependencies). "Nothing but the key" represents 3NF (no transitive dependencies).',
          bn: '"কি" হলো ১NF। "সম্পূর্ণ কি" হলো ২NF (আংশিক নির্ভরতা নেই)। আর "কেবল কি" হলো ৩NF (ট্রানজিটিভ নির্ভরতা নেই)।'
        }
      },
      {
        id: 'db-nrm-qz-2',
        kind: 'mcq',
        topic: 'bcnf-vs-3nf-distinction',
        question: {
          en: 'What subtle condition differentiates Boyce-Codd Normal Form (BCNF) from standard Third Normal Form (3NF)?',
          bn: 'কোন সূক্ষ্ম শর্তটি বয়েস-কড নরমাল ফর্মকে (BCNF) সাধারণ তৃতীয় স্বাভাবিক রূপ (৩NF) থেকে আলাদা করে?'
        },
        options: [
          {
            en: 'In BCNF, in every non-trivial functional dependency X -> Y, the determinant X must strictly be a superkey, whereas 3NF permits Y to be a prime attribute part of a candidate key',
            bn: 'BCNF-এ প্রতিটি ফাংশনাল ডিপেন্ডেন্সি X -> Y-এর ক্ষেত্রে নির্ধারক X-কে অবশ্যই সুপারকি হতে হয়, যেখানে ৩NF-এ Y একটি প্রাইম কি-র অংশ হলেও অনুমোদন পায়'
          },
          {
            en: 'BCNF only works on databases running on Apple Mac computers',
            bn: 'BCNF কেবল অ্যাপল ম্যাক কম্পিউটারে চলা ডাটাবেসে কাজ করে'
          },
          {
            en: 'BCNF was created in the year 2025 by artificial intelligence',
            bn: 'BCNF ২০২৫ সালে কৃত্রিম বুদ্ধিমত্তা দ্বারা আবিষ্কৃত হয়'
          },
          {
            en: '3NF requires tables to be stored in backward reverse order',
            bn: '৩NF-এ সমস্ত টেবিলকে উল্টো ক্রমে সংরক্ষণ করতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'BCNF is a stricter version of 3NF where every determinant must be a candidate superkey.',
          bn: 'BCNF হলো ৩NF-এর একটি কঠোর রূপ যেখানে প্রতিটি নির্ধারককে অবশ্যই সুপারকি হতে হয়।'
        },
        explanation: {
          en: 'BCNF eliminates anomalies where candidate keys overlap. In practice, 3NF and BCNF are identical for tables with a single primary key.',
          bn: 'BCNF একাধিক ওভারল্যাপিং কি-র ক্ষেত্রে অসঙ্গতি দূর করে। একটিমাত্র প্রাইমারি কি থাকা টেবিলের ক্ষেত্রে ৩NF এবং BCNF মূলত একই।'
        }
      },
      {
        id: 'db-nrm-qz-3',
        kind: 'mcq',
        topic: 'normalization-read-overhead',
        question: {
          en: 'What is the primary operational trade-off of normalizing a database schema up to Third Normal Form (3NF)?',
          bn: 'ডাটাবেস স্কিমাকে তৃতীয় স্বাভাবিক রূপ (৩NF) পর্যন্ত নরমালাইজ করার প্রধান প্রযুক্তিগত সীমাবদ্ধতা কোনটি?'
        },
        options: [
          {
            en: 'Read queries frequently require multi-table JOIN operations to reassemble data, which can increase CPU and I/O costs compared to querying a flat denormalized table',
            bn: 'ডাটা একত্রিত করার জন্য রিড কোয়েরিতে ঘন ঘন একাধিক টেবিলের JOIN অপারেশনের প্রয়োজন হয়, যা ফ্ল্যাট টেবিলের তুলনায় সিপিইউ ও ডিস্ক রিডের খরচ বাড়িয়ে দিতে পারে'
          },
          {
            en: 'Normalized tables cannot store numbers greater than 100',
            bn: 'নরমালাইজড টেবিলে ১০০-র চেয়ে বড় কোনো সংখ্যা সেভ করা যায় না'
          },
          {
            en: 'Normalizing tables causes data centers to run out of physical space',
            bn: 'টেবিল নরমালাইজ করলে ডাটা সেন্টারের সমস্ত শারীরিক জায়গা ফুরিয়ে যায়'
          },
          {
            en: 'The database engine deletes all passwords upon normalization',
            bn: 'নরমালাইজেশনের সাথে সাথে ডাটাবেস ইঞ্জিন সমস্ত পাসওয়ার্ড মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Normalization accelerates writes and prevents anomalies, but reads require JOINs.',
          bn: 'নরমালাইজেশন ডাটা লেখার গতি বাড়ায় ও অসঙ্গতি দূর করে, তবে ডাটা পড়ার সময় JOIN করতে হয়।'
        },
        explanation: {
          en: 'Normalization prioritizes write integrity. Because related data is distributed across separate tables, analytical queries must perform joins, which is why data warehouses denormalize for read speed.',
          bn: 'নরমালাইজেশন ডাটা লেখার বিশুদ্ধতাকে প্রাধান্য দেয়। তথ্য বিভিন্ন টেবিলে ছড়ানো থাকায় পড়ার সময় জয়েন করতে হয়, যার কারণে অ্যানালিটিক্যাল সিস্টেমে ইচ্ছাকৃতভাবে ডি-নরমালাইজ করা হয়।'
        }
      },
      {
        id: 'db-nrm-qz-4',
        kind: 'mcq',
        topic: 'insertion-anomaly-prevention',
        question: {
          en: 'How does normalizing a courses and professors flat table into separate courses and professors tables eliminate an "Insertion Anomaly"?',
          bn: 'কোর্স এবং অধ্যাপকদের একটি ফ্ল্যাট টেবিলকে আলাদা courses এবং professors টেবিলে নরমালাইজ করলে কীভাবে "ইনসার্ট অসঙ্গতি" পুরোপুরি দূর হয়?'
        },
        options: [
          {
            en: 'You can hire and record a new professor in the professors table immediately, even if they have not yet been assigned to teach any course',
            bn: 'কোনো নতুন অধ্যাপক নিয়োগ পেলে তাকে সাথে সাথে professors টেবিলে যোগ করা যায়, এমনকি তিনি যদি এখনও কোনো কোর্স নাও পড়ান'
          },
          {
            en: 'It increases the professor\'s salary automatically by 50%',
            bn: 'এটি অধ্যাপকের বেতন স্বয়ংক্রিয়ভাবে ৫০% বাড়িয়ে দেয়'
          },
          {
            en: 'It allows students to grade their professors anonymously',
            bn: 'এটি ছাত্রদেরকে তাদের শিক্ষকদের বেনামে গ্রেড দেওয়ার সুবিধা দেয়'
          },
          {
            en: 'It converts the course textbook into an animated movie',
            bn: 'এটি পাঠ্যবইকে একটি অ্যানিমেটেড মুভিতে রূপান্তর করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Separating entities allows recording either one independently without fake placeholder rows.',
          bn: 'এনটিটি আলাদা করলে কোনো ভুয়া রেকর্ড ছাড়াই স্বাধীনভাবে যেকোনো নতুন ডাটা প্রবেশ করানো যায়।'
        },
        explanation: {
          en: 'In an un-normalized schema where courses and professors share a table, you cannot insert a professor without inventing a fake course. Normalization enables independent entity lifecycle management.',
          bn: 'একসাথে রাখা টেবিলে কোনো কোর্স ছাড়া নতুন শিক্ষক যোগ করা যেত না। নরমালাইজেশন শিক্ষক ও কোর্স উভয়কেই স্বাধীনভাবে পরিচালনা করার স্বাধীনতা দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'denorms-and-the-star',
    title: {
      en: 'Denormalization & Dimensional Modeling: Star & Snowflake Schemas',
      bn: 'ডি-নরমালাইজেশন ও ডাইমেনশনাল মডেলিং: স্টার ও স্নোফ্লেক স্কিমা'
    }
  }
};
