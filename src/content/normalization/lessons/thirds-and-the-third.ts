import type { Lesson } from '../../../lib/types';

export const ThirdsAndTheThirdLesson: Lesson = {
  slug: 'thirds-and-the-third',
  tech: 'normalization',
  title: {
    en: 'Third Normal Form (3NF): Transitive Dependencies',
    bn: '৩য় নরমাল ফর্ম (3NF): ট্রানজিটিভ নির্ভরতা দূরীকরণ'
  },
  summary: {
    en: 'Eliminate non-key transitive dependencies with Third Normal Form (3NF): master superkey determinants, prime attribute rules, update anomaly eradication, and lossless relational decomposition.',
    bn: '৩য় নরমাল ফর্ম (3NF) দিয়ে নন-কি ট্রানজিটিভ নির্ভরতা দূর করুন: সুপার-কি ডিটারমিন্যান্ট, প্রাইম অ্যাট্রিবিউট নিয়ম, আপডেট সমস্যা প্রতিরোধ এবং লসলেস রিলেশনাল ডিকম্পোজিশন শিখুন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what-is-3nf',
      text: {
        en: 'The Transitive Dependency Trap: Non-Keys Determining Non-Keys',
        bn: 'ট্রানজিটিভ নির্ভরতার ফাঁদ: নন-কি দ্বারা অন্য নন-কি নির্ধারণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a database table reaches Second Normal Form (2NF), all partial dependencies on composite keys are removed. However, data duplication can still occur through transitive dependencies among non-key columns. In 1971, Edgar F. Codd introduced Third Normal Form (3NF) to eliminate this hazard. Formally, a relation R is in 3NF if and only if it is in 2NF and for every non-trivial functional dependency X -> Y, either X is a superkey or Y is a prime attribute.',
        bn: 'একটি ডাটাবেস টেবিল যখন ২য় নরমাল ফর্ম (2NF) অর্জন করে, তখন কম্পোজিট কি-এর সমস্ত আংশিক নির্ভরতা দূর হয়ে যায়। তা সত্ত্বেও নন-কি কলামগুলোর মধ্যে পরোক্ষ বা ট্রানজিটিভ নির্ভরতার কারণে মারাত্মক ডাটা পুনরাবৃত্তি ঘটতে পারে। ১৯৭১ সালে এডগার এফ কড এই সমস্যা দূর করতে ৩য় নরমাল ফর্ম (3NF) প্রস্তাব করেন। আনুষ্ঠানিকভাবে, একটি রিলেশন R ৩য় নরমাল ফর্মে থাকবে যদি এবং কেবল যদি এটি ২য় নরমাল ফর্মে থাকে এবং প্রতিটি নন-ট্রিভিয়াল ফাংশনাল ডিপেন্ডেন্সি X -> Y এর জন্য হয় X একটি সুপার-কি হয়, নয়তো Y একটি প্রাইম অ্যাট্রিবিউট হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A transitive dependency occurs when an indirect functional relationship exists: the primary key determines attribute A, and attribute A determines non-key attribute B (written PK -> A -> B). In an unnormalized orders table with schema (order_id, buyer_id, full_name, shipping_city), order_id determines buyer_id, while buyer_id determines shipping_city. Storing personal address details in every purchase record violates 3NF because buyer_id is not a superkey of the sales table.',
        bn: 'ট্রানজিটিভ বা পরোক্ষ নির্ভরতা ঘটে যখন একটি অপ্রত্যক্ষ সম্পর্ক তৈরি হয়: প্রাইমারি কি অ্যাট্রিবিউট A নির্ধারণ করে এবং অ্যাট্রিবিউট A অন্য একটি নন-কি অ্যাট্রিবিউট B নির্ধারণ করে (PK -> A -> B লেখা হয়)। (order_id, buyer_id, full_name, shipping_city) স্কিমার একটি সাধারণ অর্ডার টেবিলে order_id buyer_id নির্ধারণ করে, আবার buyer_id shipping_city নির্ধারণ করে। প্রতিটি অর্ডারের সারিতে ব্যক্তির বিস্তারিত ঠিকানা সংরক্ষণ করা ৩য় নরমাল ফর্ম লঙ্ঘন করে, কারণ buyer_id বিক্রয় টেবিলের কোনো সুপার-কি নয়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Decomposing Transitive Chains into 2 Independent 3NF Relations',
        bn: 'ট্রানজিটিভ চেইনকে ২টি স্বাধীন ৩য় নরমাল ফর্ম টেবিলে রূপান্তর'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Third Normal Form 3NF transitive dependency decomposition diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Violating 2NF Table -->
  <g transform="translate(30, 25)">
    <rect width="680" height="75" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="680" height="26" rx="8" fill="#7f1d1d" />
    <text x="340" y="18" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">Table: orders (Violates 3NF: Transitive Non-Key Dependency)</text>
    
    <text x="50" y="52" fill="#38bdf8" font-size="10" font-weight="bold">[PK] order_id</text>
    <text x="210" y="52" fill="#38bdf8" font-size="10" font-weight="bold">customer_id</text>
    <text x="370" y="52" fill="#f87171" font-size="10">customer_name</text>
    <text x="540" y="52" fill="#f87171" font-size="10">customer_city</text>

    <!-- Transitive Arc -->
    <path d="M 100 58 C 100 74, 250 74, 250 58" stroke="#38bdf8" stroke-width="1.5" fill="none" />
    <text x="175" y="72" fill="#38bdf8" font-size="9" text-anchor="middle">Direct: order_id → customer_id</text>

    <path d="M 260 58 C 260 74, 580 74, 580 58" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,3" fill="none" />
    <text x="420" y="78" fill="#fca5a5" font-size="9" text-anchor="middle">Transitive Violation: customer_id → customer_city</text>
  </g>

  <!-- Splitting Arrows -->
  <path d="M 220 105 L 170 145" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />
  <path d="M 520 105 L 550 145" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Clean 3NF Tables -->
  <!-- Table 1: orders -->
  <g transform="translate(30, 150)">
    <rect width="320" height="85" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="320" height="24" rx="6" fill="#064e3b" />
    <text x="160" y="16" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Table: orders [3NF Compliant]</text>
    <text x="25" y="46" fill="#38bdf8" font-size="10" font-weight="bold">[PK] order_id</text>
    <text x="175" y="46" fill="#38bdf8" font-size="10" font-weight="bold">[FK] customer_id</text>
    <text x="25" y="70" fill="#f8fafc" font-size="10">order_date, order_total</text>
  </g>

  <!-- Table 2: customers -->
  <g transform="translate(380, 150)">
    <rect width="330" height="85" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="330" height="24" rx="6" fill="#064e3b" />
    <text x="165" y="16" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Table: customers [3NF Compliant]</text>
    <text x="25" y="46" fill="#38bdf8" font-size="10" font-weight="bold">[PK] customer_id</text>
    <text x="180" y="46" fill="#f8fafc" font-size="10">customer_name</text>
    <text x="25" y="70" fill="#f8fafc" font-size="10">customer_city, customer_zipcode</text>
  </g>

  <!-- Summary Banner -->
  <g transform="translate(30, 250)">
    <rect width="680" height="60" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="25" y="24" fill="#f8fafc" font-size="12" font-weight="bold">The Golden Creed of 3NF</text>
    <text x="25" y="45" fill="#94a3b8" font-size="11">"Every non-key attribute must depend on the key, the whole key (2NF), and nothing but the key (3NF)."</text>
  </g>
</svg>`,
      caption: {
        en: 'Decomposing 1 transitive relation into 2 clean 3NF tables: customer details live exclusively in the customers relation.',
        bn: '১টি ট্রানজিটিভ রিলেশনকে ২টি পরিষ্কার ৩য় নরমাল ফর্মের টেবিলে রূপান্তরের চিত্র: গ্রাহকের তথ্য কেবল কাস্টমার্স টেবিলে সংরক্ষিত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Third Normal Form (3NF)',
          def: {
            en: 'A relational state in 2NF where no non-prime attribute transitively depends on any candidate key of the table.',
            bn: '২য় নরমাল ফর্মের এমন একটি অবস্থা যেখানে কোনো নন-প্রাইম কলাম টেবিলের কোনো ক্যান্ডিডেট কি-এর ওপর পরোক্ষভাবে নির্ভর করে না।'
          }
        },
        {
          term: 'Transitive Dependency',
          def: {
            en: 'A chain of functional dependencies X -> Y and Y -> Z where non-key attribute Z depends on candidate key X through intermediate non-key attribute Y.',
            bn: 'X -> Y এবং Y -> Z ধরনের ফাংশনাল ডিপেন্ডেন্সির শিকল যেখানে নন-কি কলাম Z মধ্যবর্তী নন-কি Y-এর মাধ্যমে মূল কি X-এর ওপর নির্ভর করে।'
          }
        },
        {
          term: 'Superkey Determinant',
          def: {
            en: 'The 3NF requirement that the left-hand side of every non-trivial functional dependency must be a superkey of the relation.',
            bn: '৩য় নরমাল ফর্মের প্রধান শর্ত যা দাবি করে প্রতিটি নন-ট্রিভিয়াল ফাংশনাল ডিপেন্ডেন্সির বাম পাশকে অবশ্যই একটি সুপার-কি হতে হবে।'
          }
        },
        {
          term: 'Update Consistency',
          def: {
            en: 'The architectural guarantee that modifying an entity attribute (such as a customer address) requires updating exactly one row in one table.',
            bn: 'একটি স্থাপত্যগত নিশ্চয়তা যা নিশ্চিত করে যে কোনো তথ্যের পরিবর্তনে কেবল ১টি টেবিলের ঠিক ১টি সারিতেই আপডেট করতে হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'anomalies-and-remedy',
      text: {
        en: 'Eliminating the 3 Update and Storage Hazards',
        bn: 'আপডেট ও স্টোরেজের ৩টি মারাত্মক সমস্যা দূরীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Transitive dependencies create 3 destructive database anomalies. First, Massive Storage Redundancy: if customer Rahim places 50 orders, his name, city, and postal code are duplicated 50 times across the orders table. Second, the Update Anomaly: if Rahim relocates to another city, an application must update all 50 order rows. If a network interruption occurs halfway through the update, the database displays contradictory cities for the exact same customer.',
        bn: 'ট্রানজিটিভ নির্ভরতা ৩টি মারাত্মক ডাটাবেস অ্যানোমালি তৈরি করে। প্রথমত, বিশাল মেমরি অপচয়: যদি রহিম নামক গ্রাহক ৫০টি অর্ডার করেন, তবে তার নাম, শহর ও পোস্ট কোড অর্ডার টেবিলে ৫০ বার পুনরাবৃত্তি হয়। দ্বিতীয়ত, আপডেট অ্যানোমালি: রহিম অন্য শহরে চলে গেলে অ্যাপ্লিকেশনকে ৫০টি অর্ডার সারিই আপডেট করতে হয়। মাঝপথে নেটওয়ার্ক বিঘ্নিত হলে একই গ্রাহকের জন্য ডাটাবেসে পরস্পরবিরোধী শহর প্রদর্শিত হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Third, the Insertion and Deletion Anomalies: a system cannot record a newly registered customer until they complete an order, because order_id cannot be NULL. Conversely, archiving old orders unintentionally deletes the customer account entirely. Decomposing the relation into 2 separate 3NF tables (orders and customers) guarantees that customer profile data is updated in exactly 1 place with instant consistency.',
        bn: 'তৃতীয়ত, ইনসার্ট এবং ডিলিট অ্যানোমালি: কোনো নতুন গ্রাহক নিবন্ধন করলেও প্রথম অর্ডার না করা পর্যন্ত তাকে সেভ করা যায় না, কারণ order_id কলামে NULL মান বসানো নিষিদ্ধ। বিপরীতভাবে, পুরনো অর্ডারগুলো মুছে ফেললে গ্রাহকের পুরো অ্যাকাউন্টও চিরতরে মুছে যায়। রিলেশনটিকে ২টি আলাদা ৩য় নরমাল ফর্ম টেবিলে (orders এবং customers) ভাগ করলে গ্রাহকের প্রোফাইল ঠিক ১টি স্থানে সংরক্ষিত থাকে এবং তাত্ক্ষণিক ধারাবাহিকতা নিশ্চিত হয়।'
      }
    },
    {
      type: 'heading',
      id: 'node-3nf-engine',
      text: {
        en: 'Executable 3NF Engine: Normalization and Instant Consistency',
        bn: 'রানযোগ্য ৩য় নরমাল ফর্ম ইঞ্জিন: নরমালাইজেশন ও তাত্ক্ষণিক কনসিস্টেন্সি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js simulation demonstrating 3NF decomposition. It splits an unnormalized orders dataset with transitive customer dependencies into 2 independent tables, updates a customer city in 1 single row, and proves that all 3 orders reflect the new address instantly via relational joins.',
        bn: 'নিচে ৩য় নরমাল ফর্ম ডিকম্পোজিশন প্রদর্শনকারী একটি সম্পূর্ণ Node.js সিমুলেশন দেওয়া হলো। এটি ট্রানজিটিভ নির্ভরতা থাকা একটি অর্ডার ডাটাবেসকে ২টি স্বাধীন টেবিলে ভাগ করে, ঠিক ১টি সারিতে গ্রাহকের শহর পরিবর্তন করে এবং প্রমাণ করে যে জয়েনের মাধ্যমে ৩টি অর্ডারেই নতুন ঠিকানা তাৎক্ষণিকভাবে দৃশ্যমান হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Decompose 1 transitive relation into 2 normalized 3NF tables and demonstrate single-row update consistency',
        bn: '১টি ট্রানজিটিভ রিলেশনকে ২টি ৩য় নরমাল ফর্ম টেবিলে রূপান্তর এবং একক সারি আপডেট কনসিস্টেন্সি পরীক্ষা'
      },
      code: `// Third Normal Form (3NF) Decomposition Engine
const unnormalizedOrders = [
  { order_id: 501, customer_id: 10, customer_name: 'Rahim', city: 'Dhaka', total: 1200 },
  { order_id: 502, customer_id: 10, customer_name: 'Rahim', city: 'Dhaka', total: 3400 },
  { order_id: 503, customer_id: 10, customer_name: 'Rahim', city: 'Dhaka', total: 850 }
];

// Step 1: Decompose into 2 independent 3NF relations
const customersTable = new Map();
const ordersTable = [];

for (const order of unnormalizedOrders) {
  // Table 1: customers (Primary Key: customer_id)
  if (!customersTable.has(order.customer_id)) {
    customersTable.set(order.customer_id, {
      customer_id: order.customer_id,
      name: order.customer_name,
      city: order.city
    });
  }

  // Table 2: orders (Primary Key: order_id, Foreign Key: customer_id)
  ordersTable.push({
    order_id: order.order_id,
    customer_id: order.customer_id,
    total: order.total
  });
}

// Step 2: Test Update Anomaly Invariant: Update city in exactly 1 customer row
customersTable.get(10).city = 'Chittagong';

// Step 3: Perform relational join to verify instant consistency across all orders
const joinedOrders = ordersTable.map(o => ({
  order_id: o.order_id,
  customer_id: o.customer_id,
  customer_name: customersTable.get(o.customer_id).name,
  city: customersTable.get(o.customer_id).city,
  total: o.total
}));

const isAllOrdersUpdated = joinedOrders.every(o => o.city === 'Chittagong');
const isLossless = joinedOrders.length === unnormalizedOrders.length;

console.log(\`[3NF Engine] Decomposed 1 transitive order relation into 2 normalized 3NF tables.\`);
console.log(\`[Update Invariant] Customer city updated in 1 single row; all 3 orders reflect change instantly (1/1: \${isAllOrdersUpdated}).\`);
console.log(\`[Lossless Join] Reconstructed \${joinedOrders.length} original order tuples with zero spurious records (1/1: \${isLossless}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'The "Prime Attribute" Exception in 3NF',
        bn: '৩য় নরমাল ফর্মে "প্রাইম অ্যাট্রিবিউট" ব্যতিক্রম'
      },
      text: {
        en: 'The formal definition of 3NF allows a dependency X -> Y if Y is a prime attribute (part of any candidate key), even if X is not a superkey. This historical exception was preserved so 3NF decomposition could always guarantee functional dependency preservation. However, this loophole allows subtle redundancy when multiple candidate keys overlap, which Boyce-Codd Normal Form (BCNF) strictly resolves.',
        bn: '৩য় নরমাল ফর্মের আনুষ্ঠানিক সংজ্ঞায় একটি ছাড় রয়েছে: X -> Y ডিপেন্ডেন্সিতে X যদি সুপার-কি নাও হয়, কিন্তু Y যদি কোনো ক্যান্ডিডেট কি-এর অংশ (prime attribute) হয়, তবে তা অনুমোদন পায়। ডিপেন্ডেন্সি সংরক্ষণ নিশ্চিত করতেই এই ছাড় রাখা হয়েছিল। তবে একাধিক ক্যান্ডিডেট কি ওভারল্যাপ করলে এই নিয়মের ফাঁক দিয়ে সূক্ষ্ম ডাটা পুনরাবৃত্তি ঢুকতে পারে, যা বয়েস-কড নরমাল ফর্ম (BCNF) কঠোরভাবে সমাধান করে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Transitive Dependency Identifier',
        bn: 'ট্রানজিটিভ নির্ভরতা শনাক্তকারী'
      },
      description: {
        en: 'Test functional dependencies: verify if a dependency links non-key columns together, violating 3NF.',
        bn: 'ফাংশনাল ডিপেন্ডেন্সি পরীক্ষা করুন: কোনো নির্ভরতা নন-কি কলামকে সংযুক্ত করে ৩য় নরমাল ফর্ম লঙ্ঘন করে কিনা তা দেখুন।'
      },
      code: `const primaryKey = 'emp_id';
const candidateKeys = ['emp_id', 'ssn'];

function test3NF(lhs, rhs) {
  const isSuperkey = candidateKeys.includes(lhs);
  const isPrime = candidateKeys.includes(rhs);

  if (isSuperkey || isPrime) {
    return '3NF_COMPLIANT';
  }
  return \`3NF_VIOLATION: Transitive dependency (\${lhs} -> \${rhs})\`;
}

console.log('Dep 1 (emp_id -> dept_id):', test3NF('emp_id', 'dept_id'));
console.log('Dep 2 (dept_id -> dept_name):', test3NF('dept_id', 'dept_name'));`,
      tests: [
        {
          name: {
            en: 'Passes primary key determinant as 3NF compliant',
            bn: 'প্রাইমারি কি ডিটারমিন্যান্টকে ৩য় নরমাল ফর্মের সাথে সামঞ্জস্যপূর্ণ হিসেবে অনুমোদন করে'
          },
          expected: 'Dep 1 (emp_id -> dept_id): 3NF_COMPLIANT'
        },
        {
          name: {
            en: 'Flags non-key determinant as 3NF transitive violation',
            bn: 'নন-কি ডিটারমিন্যান্টকে ৩য় নরমাল ফর্মের ট্রানজিটিভ লঙ্ঘন হিসেবে চিহ্নিত করে'
          },
          expected: 'Dep 2 (dept_id -> dept_name): 3NF_VIOLATION: Transitive dependency (dept_id -> dept_name)'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'norm-3nf-ex-1',
      kind: 'mcq',
      topic: '3nf-formal-condition',
      question: {
        en: 'What is the formal mathematical condition required for every non-trivial functional dependency X -> Y in Third Normal Form (3NF)?',
        bn: '৩য় নরমাল ফর্মে (3NF) প্রতিটি নন-ট্রিভিয়াল ফাংশনাল ডিপেন্ডেন্সি X -> Y এর জন্য প্রয়োজনীয় গাণিতিক শর্ত কোনটি?'
      },
      options: [
        {
          en: 'Either X is a superkey of the relation, OR Y is a prime attribute (part of a candidate key)',
          bn: 'হয় X রিলেশনের একটি সুপার-কি হবে, নয়তো Y একটি প্রাইম অ্যাট্রিবিউট (কোনো ক্যান্ডিডেট কি-এর অংশ) হবে'
        },
        {
          en: 'X and Y must be numbers between 1 and 100',
          bn: 'X এবং Y-কে ১ থেকে ১০০ এর মধ্যকার সংখ্যা হতে হবে'
        },
        {
          en: 'Y must always contain twice as many characters as X',
          bn: 'Y-তে সর্বদা X-এর চেয়ে দ্বিগুণ সংখ্যক অক্ষর থাকতে হবে'
        },
        {
          en: 'Dependencies can only be defined by system root administrators',
          bn: 'ডিপেন্ডেন্সি শুধুমাত্র সিস্টেম রুট অ্যাডমিনরাই সংজ্ঞায়িত করতে পারেন'
        }
      ],
      answer: 0,
      hint: {
        en: 'The condition: X is a superkey OR Y is prime.',
        bn: 'শর্তটি হলো: X একটি সুপার-কি অথবা Y একটি প্রাইম অ্যাট্রিবিউট।'
      },
      explanation: {
        en: 'Under 3NF, for every non-trivial dependency X -> Y, either the determinant X must uniquely identify tuples (superkey), or the dependent Y must be a component of a candidate key.',
        bn: '৩য় নরমাল ফর্ম অনুসারে, প্রতিটি নন-ট্রিভিয়াল ডিপেন্ডেন্সি X -> Y এর জন্য ডিটারমিন্যান্ট X-কে অবশ্যই সুপার-কি হতে হবে, অথবা ডিপেন্ডেন্ট Y-কে কোনো ক্যান্ডিডেট কি-এর অংশ হতে হবে।'
      }
    },
    {
      id: 'norm-3nf-ex-2',
      kind: 'mcq',
      topic: 'transitive-update-anomaly-risk',
      question: {
        en: 'In an unnormalized orders table containing (order_id, customer_id, customer_city), what occurs if a customer changes their city?',
        bn: '(order_id, customer_id, customer_city) কলাম যুক্ত একটি অসংগঠিত অর্ডার টেবিলে গ্রাহক তার শহর পরিবর্তন করলে কী ঘটে?'
      },
      options: [
        {
          en: 'An Update Anomaly occurs: every single past order row for that customer must be updated, risking inconsistent data if any row is missed',
          bn: 'আপডেট অ্যানোমালি ঘটে: সেই গ্রাহকের সমস্ত অতীত অর্ডার সারি আপডেট করতে হয়, কোনো সারি বাদ পড়লে পরস্পরবিরোধী ডাটা তৈরি হয়'
        },
        {
          en: 'The database server immediately restarts and reboots the operating system',
          bn: 'ডাটাবেস সার্ভার সাথে সাথে বন্ধ হয়ে অপারেটিং সিস্টেম রিবুট করে'
        },
        {
          en: 'All orders are automatically converted into cash refunds',
          bn: 'সমস্ত অর্ডার স্বয়ংক্রিয়ভাবে নগদ অর্থ ফেরতে রূপান্তরিত হয়ে যায়'
        },
        {
          en: 'The customer\'s name is permanently erased from memory',
          bn: 'গ্রাহকের নাম মেমরি থেকে চিরতরে মুছে ফেলা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Updating an entity in multiple records creates inconsistency risks.',
        bn: 'একাধিক রেকর্ডে একটি তথ্য পরিবর্তন করতে গেলে অসঙ্গতি তৈরির মারাত্মক ঝুঁকি থাকে।'
      },
      explanation: {
        en: 'Because customer_city is duplicated across every order placed by that user, changing their address requires modifying dozens of historical rows. If a query fails halfway through, the database holds conflicting addresses.',
        bn: 'যেহেতু গ্রাহকের শহর প্রতিটি অর্ডারে পুনরাবৃত্তি হয়, তাই ঠিকানা পরিবর্তন করতে গিয়ে ডজন ডজন পুরনো সারি আপডেট করতে হয়। কোনো আপডেট ব্যর্থ হলে ডাটাবেসে ভুল ঠিকানা থেকে যায়।'
      }
    },
    {
      id: 'norm-3nf-ex-3',
      kind: 'mcq',
      topic: 'insertion-anomaly-in-3nf',
      question: {
        en: 'Why does an unnormalized orders schema containing customer address attributes prevent registering new prospective customers?',
        bn: 'গ্রাহকের ঠিকানার তথ্য সহ একটি অসংগঠিত অর্ডার স্কিমা কেন নতুন সম্ভাব্য গ্রাহকদের নিবন্ধন করতে বাধা দেয়?'
      },
      options: [
        {
          en: 'Because order_id is the Primary Key and cannot be NULL, meaning a customer profile cannot be saved until they place an order (Insertion Anomaly)',
          bn: 'কারণ order_id হলো প্রাইমারি কি যা NULL হতে পারে না, ফলে কোনো গ্রাহক প্রথম অর্ডার না করা পর্যন্ত তার প্রোফাইল সেভ করা যায় না (ইনসার্ট অ্যানোমালি)'
        },
        {
          en: 'Because prospective customers are not allowed to use SQL',
          bn: 'কারণ সম্ভাব্য গ্রাহকদের SQL ব্যবহার করার অনুমতি দেওয়া হয় না'
        },
        {
          en: 'Because customer names must be approved by the United Nations',
          bn: 'কারণ গ্রাহকের নাম জাতিসংঘ কর্তৃক অনুমোদিত হতে হয়'
        },
        {
          en: 'Because the database table deletes users every 24 hours',
          bn: 'কারণ ডাটাবেস টেবিল প্রতি ২৪ ঘণ্টা পর পর ব্যবহারকারী মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Primary key integrity requires non-NULL keys: no order ID means no insert.',
        bn: 'প্রাইমারি কি-তে NULL রাখা যায় না: অর্ডার আইডি না থাকলে রো যোগ করা অসম্ভব।'
      },
      explanation: {
        en: 'If customer profiles are stored exclusively inside orders records, you cannot store a customer who has not purchased anything without inserting a NULL order_id, which relational primary keys forbid.',
        bn: 'গ্রাহকের প্রোফাইল যদি কেবল অর্ডার সারির ভেতরেই থাকে, তবে কিছু না কেনা নতুন গ্রাহককে সেভ করতে গেলে order_id-কে NULL করতে হতো, যা প্রাইমারি কি-এর নিয়ম লঙ্ঘন করে।'
      }
    },
    {
      id: 'norm-3nf-ex-4',
      kind: 'mcq',
      topic: 'lossless-decomposition-to-3nf',
      question: {
        en: 'How does an engineer cleanly decompose the relation orders(order_id, customer_id, customer_city, total) into 3NF?',
        bn: 'একজন প্রকৌশলী কীভাবে orders(order_id, customer_id, customer_city, total) রিলেশনটিকে পরিষ্কার ৩য় নরমাল ফর্মে (3NF) রূপান্তর করবেন?'
      },
      options: [
        {
          en: 'Split into orders(order_id, customer_id, total) and customers(customer_id, customer_city)',
          bn: 'orders(order_id, customer_id, total) এবং customers(customer_id, customer_city) এ দুটি টেবিলে ভাগ করবেন'
        },
        {
          en: 'Delete customer_city permanently from the database application',
          bn: 'ডাটাবেস অ্যাপ্লিকেশন থেকে customer_city কলামটি চিরতরে মুছে ফেলবেন'
        },
        {
          en: 'Store both orders and customers in a browser local storage array',
          bn: 'অর্ডার এবং কাস্টমার উভয়কেই ব্রাউজার লোকাল স্টোরেজ অ্যারেতে জমা রাখবেন'
        },
        {
          en: 'Convert the table into an unformatted CSV spreadsheet',
          bn: 'টেবিলটিকে একটি অসংগঠিত CSV স্প্রেডশিটে রূপান্তর করবেন'
        }
      ],
      answer: 0,
      hint: {
        en: 'Decompose so each non-key column depends solely on its own table\'s primary key.',
        bn: 'এমনভাবে ভাগ করুন যাতে প্রতিটি নন-কি কলাম কেবল তার নিজস্ব টেবিলের প্রাইমারি কি-এর ওপর নির্ভর করে।'
      },
      explanation: {
        en: 'Separating the schema into orders (keyed on order_id) and customers (keyed on customer_id) eliminates the transitive dependency while preserving all information through the customer_id foreign key.',
        bn: 'স্কিমাটিকে orders (order_id কি) এবং customers (customer_id কি) এ দুটি ভাগে ভাগ করলে ট্রানজিটিভ নির্ভরতা দূর হয় এবং customer_id ফরেন কি-এর মাধ্যমে تمام তথ্য অক্ষত থাকে।'
      }
    }
  ],
  quiz: {
    id: 'thirds-and-the-third-quiz',
    title: {
      en: 'Third Normal Form (3NF) Mastery Quiz',
      bn: '৩য় নরমাল ফর্ম (3NF) দক্ষতা যাচাই কুইজ'
    },
    questions: [
      {
        id: 'norm-3nf-qz-1',
        kind: 'mcq',
        topic: 'codd-creed-meaning',
        question: {
          en: 'What does the famous adage "Every non-key attribute must depend on the key, the whole key, and nothing but the key" summarize?',
          bn: '"প্রতিটি নন-কি কলামকে অবশ্যই কি, সম্পূর্ণ কি এবং কি ছাড়া অন্য কিছুর ওপর নির্ভর করা চলবে না" — এই বিখ্যাত উক্তিটি কীসের সারসংক্ষেপ?'
        },
        options: [
          {
            en: '1NF requires the key; 2NF requires the whole key (no partial dependencies); 3NF requires nothing but the key (no transitive dependencies)',
            bn: '১ম নরমাল ফর্ম কি দাবি করে; ২য় নরমাল ফর্ম সম্পূর্ণ কি দাবি করে (আংশিক নির্ভরতা নয়); ৩য় নরমাল ফর্ম কি ছাড়া অন্য কিছু নয় দাবি করে (ট্রানজিটিভ নির্ভরতা নয়)'
          },
          {
            en: 'It means passwords must be 32 characters long',
            bn: 'এর অর্থ হলো পাসওয়ার্ড অবশ্যই ৩২ অক্ষরের হতে হবে'
          },
          {
            en: 'It refers to physical cryptographic USB security keys',
            bn: 'এটি ফিজিক্যাল ক্রিপ্টোগ্রাফিক ইউএসবি সিকিউরিটি কি নির্দেশ করে'
          },
          {
            en: 'It summarizes the hardware installation manual for IBM mainframes',
            bn: 'এটি আইবিএম মেইনফ্রেমের হার্ডওয়্যার ইনস্টলেশন ম্যানুয়ালের সারসংক্ষেপ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Key = 1NF/PK, Whole key = 2NF, Nothing but the key = 3NF.',
          bn: 'কি = ১ম নরমাল ফর্ম, সম্পূর্ণ কি = ২য় নরমাল ফর্ম, কি ছাড়া আর কিছু নয় = ৩য় নরমাল ফর্ম।'
        },
        explanation: {
          en: 'Coined by Bill Kent in 1983, this mnemonic summarizes the progression: "the key" enforces 1NF uniqueness, "the whole key" bans 2NF partial dependencies, and "nothing but the key" bans 3NF transitive dependencies.',
          bn: '১৯৮৩ সালে বিল কেন্টের তৈরি এই প্রবাদটি নরমালাইজেশনের ক্রম মনে করিয়ে দেয়: "কি" ১ম নরমাল ফর্মের স্বাতন্ত্র্য আনে, "সম্পূর্ণ কি" ২য় নরমাল ফর্মের আংশিক নির্ভরতা দূর করে এবং "কি ছাড়া কিছু নয়" ৩য় নরমাল ফর্মের পরোক্ষ নির্ভরতা রোধ করে।'
        }
      },
      {
        id: 'norm-3nf-qz-2',
        kind: 'mcq',
        topic: 'dependency-preservation-tradeoff',
        question: {
          en: 'Why is Third Normal Form (3NF) often preferred in enterprise production architectures over Boyce-Codd Normal Form (BCNF)?',
          bn: 'এন্টারপ্রাইজ প্রোডাকশন আর্কিটেকচারে বয়েস-কড নরমাল ফর্মের (BCNF) চেয়ে প্রায়ই ৩য় নরমাল ফর্মকে (3NF) কেন প্রাধান্য দেওয়া হয়?'
        },
        options: [
          {
            en: '3NF decompositions are always guaranteed to be dependency-preserving, whereas BCNF decompositions may lose certain functional dependencies',
            bn: '৩য় নরমাল ফর্মের ডিকম্পোজিশন সর্বদা ফাংশনাল ডিপেন্ডেন্সি সংরক্ষণের নিশ্চয়তা দেয়, যেখানে BCNF-এ কিছু ডিপেন্ডেন্সি হারিয়ে যেতে পারে'
          },
          {
            en: '3NF tables require zero disk space on cloud servers',
            bn: '৩য় নরমাল ফর্মের টেবিলে ক্লাউড সার্ভারে কোনো ডিস্ক স্পেস লাগে না'
          },
          {
            en: 'BCNF was declared obsolete by Oracle in 1995',
            bn: '১৯৯৫ সালে ওরাকল BCNF-কে বাতিল ঘোষণা করেছিল'
          },
          {
            en: '3NF code runs on smartphones while BCNF requires a supercomputer',
            bn: '৩য় নরমাল ফর্ম স্মার্টফোনে চলে কিন্তু BCNF-এর জন্য সুপার কম্পিউটার লাগে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Dependency preservation allows verifying all business rules without multi-table cross joins.',
          bn: 'ডিপেন্ডেন্সি সংরক্ষণ একাধিক টেবিলের জটিল ক্রস জয়েন ছাড়াই تمام ব্যবসায়িক নিয়ম যাচাই করার সুযোগ দেয়।'
        },
        explanation: {
          en: 'A 3NF decomposition guarantees both a lossless join and dependency preservation. In rare cases where candidate keys overlap, reaching strict BCNF requires sacrificing dependency preservation, making 3NF the enterprise standard.',
          bn: 'একটি ৩য় নরমাল ফর্ম রূপান্তর একই সাথে লসলেস জয়েন এবং ডিপেন্ডেন্সি সংরক্ষণের পূর্ণ নিশ্চয়তা দেয়। ক্যান্ডিডেট কি ওভারল্যাপ করলে BCNF অর্জন করতে গিয়ে ডিপেন্ডেন্সি হারাতে হতে পারে, তাই এন্টারপ্রাইজে 3NF-কে আদর্শ মানা হয়।'
        }
      },
      {
        id: 'norm-3nf-qz-3',
        kind: 'mcq',
        topic: 'transitive-zipcode-classic-trap',
        question: {
          en: 'In an address schema with (street, city, state, zipcode), where zipcode -> (city, state), why is storing (city, state) in every user address a 3NF violation?',
          bn: '(street, city, state, zipcode) স্কিমায় যেখানে zipcode -> (city, state) নির্ধারণ করে, সেখানে প্রতিটি ব্যবহারকারীর ঠিকানায় (city, state) রাখা কেন ৩য় নরমাল ফর্ম লঙ্ঘন?'
        },
        options: [
          {
            en: 'Because zipcode determines city and state, but zipcode is not a superkey of the user table, creating a transitive dependency that duplicates city names millions of times',
            bn: 'কারণ zipcode শহর ও রাজ্য নির্ধারণ করে, কিন্তু zipcode ব্যবহারকারী টেবিলের কোনো সুপার-কি নয়; ফলে পরোক্ষ নির্ভরতার কারণে শহরের নাম লক্ষ লক্ষ বার পুনরাবৃত্তি হয়'
          },
          {
            en: 'Because zipcodes can only contain letters of the alphabet',
            bn: 'কারণ জিপ কোডে কেবল বর্ণমালার অক্ষর থাকতে পারে'
          },
          {
            en: 'Because relational databases cannot calculate mathematical distances',
            bn: 'কারণ রিলেশনাল ডাটাবেস গাণিতিক দূরত্ব হিসাব করতে পারে না'
          },
          {
            en: 'Because state abbreviations are secret government codes',
            bn: 'কারণ রাজ্যের সংক্ষিপ্ত রূপগুলো সরকারি গোপন কোড'
          }
        ],
        answer: 0,
        hint: {
          en: 'zipcode -> city is a non-key dependency: non-key determines non-key.',
          bn: 'zipcode -> city হলো একটি নন-কি নির্ভরতা: যেখানে নন-কি অন্য নন-কি নির্ধারণ করে।'
        },
        explanation: {
          en: 'In normalization theory, postal codes functionally determine cities. Storing city names alongside zipcodes violates 3NF because zipcode is a non-key determinant. Pure 3NF extracts a dedicated zipcodes(zipcode, city, state) lookup table.',
          bn: 'নরমালাইজেশন তত্ত্বে পোস্ট কোড শহর নির্ধারণ করে। জিপ কোডের সাথে শহরের নাম রাখা ৩য় নরমাল ফর্ম ভঙ্গ করে কারণ জিপ কোড কোনো সুপার-কি নয়। নিখুঁত ৩NF এর জন্য একটি পৃথক zipcodes(zipcode, city, state) টেবিল রাখা উচিত।'
        }
      },
      {
        id: 'norm-3nf-qz-4',
        kind: 'mcq',
        topic: 'minimal-superkey-3nf-test',
        question: {
          en: 'If a table relation R(A, B, C) has candidate key {A}, and functional dependencies A -> B and B -> C, how should it be decomposed to achieve 3NF?',
          bn: 'যদি একটি রিলেশন R(A, B, C)-এর ক্যান্ডিডেট কি {A} হয় এবং ফাংশনাল ডিপেন্ডেন্সি A -> B ও B -> C থাকে, তবে ৩য় নরমাল ফর্ম (3NF) অর্জনে কীভাবে এটিকে বিভক্ত করা উচিত?'
        },
        options: [
          {
            en: 'Decompose into R1(A, B) with candidate key {A}, and R2(B, C) with candidate key {B}',
            bn: 'R1(A, B) যার ক্যান্ডিডেট কি {A}, এবং R2(B, C) যার ক্যান্ডিডেট কি {B} — এ দুটি টেবিলে বিভক্ত করা'
          },
          {
            en: 'Merge all columns into a single string column named ABC',
            bn: 'تمام কলামকে ABC নামের একটি একক স্ট্রিং কলামে একত্রিত করা'
          },
          {
            en: 'Delete column C from relation R entirely',
            bn: 'রিলেশন R থেকে কলাম C সম্পূর্ণ মুছে ফেলা'
          },
          {
            en: 'Keep relation R unchanged and disable table constraints',
            bn: 'রিলেশন R অপরিবর্তিত রাখা এবং টেবিল কনস্ট্রেইন্ট নিষ্ক্রিয় করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'The transitive step B -> C forms its own relation where B becomes the superkey.',
          bn: 'ট্রানজিটিভ ধাপ B -> C নিজস্ব রিলেশন তৈরি করে যেখানে B সুপার-কি হিসেবে কাজ করে।'
        },
        explanation: {
          en: 'In R1(A, B), A is a superkey (3NF satisfied). In R2(B, C), B is a superkey (3NF satisfied). The join on common attribute B is lossless and preserves both functional dependencies.',
          bn: 'R1(A, B)-এ A একটি সুপার-কি (3NF পূরণ)। R2(B, C)-এ B একটি সুপার-কি (3NF পূরণ)। সাধারণ অ্যাট্রিবিউট B-এর ওপর জয়েনটি লসলেস এবং উভয় ফাংশনাল ডিপেন্ডেন্সি অক্ষত রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'bcnfs-and-the-bcnf',
    title: {
      en: 'Boyce-Codd Normal Form (BCNF): Strict Superkey Determinants',
      bn: 'বয়েস-কড নরমাল ফর্ম (BCNF): কঠোর সুপার-কি ডিটারমিন্যান্ট'
    }
  }
};
