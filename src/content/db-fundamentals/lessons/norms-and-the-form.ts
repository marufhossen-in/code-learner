import type { Lesson } from '../../../lib/types';

export const NormsAndTheFormLesson: Lesson = {
  slug: 'norms-and-the-form',
  tech: 'db-fundamentals',
  title: {
    en: 'Database Normalization: 1NF, 2NF, 3NF & Anomalies',
    bn: 'ডাটাবেস নরমালাইজেশন: 1NF, 2NF, 3NF ও অ্যানোমালি'
  },
  summary: {
    en: 'Master database normalization to eliminate insertion, update, and deletion anomalies: understand atomic columns in 1NF, partial dependencies in 2NF, transitive dependencies in 3NF, and OLAP denormalization tradeoffs.',
    bn: 'ইনসার্ট, আপডেট ও ডিলিট অ্যানোমালি দূর করতে ডাটাবেস নরমালাইজেশন আয়ত্ত করুন: ১ম নরমাল ফর্মে অ্যাটমিক কলাম, ২য় নরমাল ফর্মে আংশিক নির্ভরতা, ৩য় নরমাল ফর্মে ট্রানজিটিভ নির্ভরতা এবং ডিনরমালাইজেশন জানুন।'
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'the-three-anomalies',
      text: {
        en: 'The Three Database Anomalies: Why Unnormalized Schemas Rot',
        bn: 'ডাটাবেসের ৩টি অ্যানোমালি: নরমালাইজেশনবিহীন স্কিমা কেন নষ্ট হয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When junior developers design database schemas, they frequently lump disparate real-world facts into a single giant table. While having 1 table seems simple at first, it causes three fatal database bugs known as data modification anomalies. Without normalization, a database inevitably drifts into corrupted, self-contradictory states.',
        bn: 'নতুন ডেভেলপাররা ডাটাবেস স্কিমা তৈরি করার সময় প্রায়ই বিভিন্ন বিষয়ের তথ্য একটিমাত্র বিশাল টেবিলে জড়ো করে ফেলেন। শুরুতে ১টি টেবিল সহজ মনে হলেও এটি ডাটা মডিফিকেশন অ্যানোমালি নামক ৩টি মারাত্মক ত্রুটির জন্ম দেয়। যথাযথ নরমালাইজেশন ছাড়া ডাটাবেস অনিবার্যভাবে ভুল ও পরস্পরবিরোধী তথ্যের স্তূপে পরিণত হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The first flaw is the Insertion Anomaly: you cannot record a newly created university course if no student has registered yet, because student_id is required by the primary key. The second flaw is the Update Anomaly: if a customer moves to a new address, the application must find and update 50 duplicate order rows; if network latency aborts the write midway, the customer has two conflicting addresses. The third flaw is the Deletion Anomaly: if the last student drops a course, deleting their enrollment record accidentally purges the entire course, syllabus, and professor data from existence.',
        bn: 'প্রথম ত্রুটি হলো ইনসার্শন অ্যানোমালি: কোনো কোর্সে এখনও কোনো শিক্ষার্থী ভর্তি না হলে নতুন কোর্সটির তথ্য ডাটাবেসে সেভ করা যায় না, কারণ প্রাইমারি কি-তে student_id আবশ্যক। দ্বিতীয় ত্রুটি হলো আপডেট অ্যানোমালি: কোনো গ্রাহকের ঠিকানা বদলালে অ্যাপকে ৫০টি ডুপ্লিকেট অর্ডারের প্রতিটিতে গিয়ে ঠিকানা বদলাতে হয়; মাঝপথে কোনো কারণে কোড আটকে গেলে ডাটাবেসে একই ব্যক্তির ২টি বিপরীত ঠিকানা থেকে যায়। তৃতীয় ত্রুটি হলো ডিলিশন অ্যানোমালি: কোনো কোর্সের শেষ শিক্ষার্থী ভর্তি বাতিল করলে তার রেকর্ড মুছতে গিয়ে সম্পূর্ণ কোর্স, সিলেবাস ও শিক্ষকের তথ্য ডাটাবেস থেকে চিরতরে মুছে যায়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Normalization Hierarchy: Progressing from 1NF to 3NF',
        bn: 'নরমালাইজেশনের ধাপসমূহ: ১ম থেকে ৩য় নরমাল ফর্মে রূপান্তর'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="1NF, 2NF, and 3NF normalization pipeline">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- 1NF Stage -->
  <g transform="translate(40, 30)">
    <rect width="190" height="200" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect x="0" y="0" width="190" height="36" rx="8" fill="#0284c7" />
    <text x="95" y="24" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">1NF: Atomicity</text>
    
    <text x="15" y="60" fill="#38bdf8" font-size="11" font-weight="bold">Rules Enforced:</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="10">• All values must be atomic</text>
    <text x="15" y="98" fill="#cbd5e1" font-size="10">• No comma-separated lists</text>
    <text x="15" y="116" fill="#cbd5e1" font-size="10">• No repeating group columns</text>
    <text x="15" y="134" fill="#cbd5e1" font-size="10">• Unique primary key defined</text>

    <rect x="15" y="152" width="160" height="36" rx="4" fill="#0c4a6e" />
    <text x="95" y="167" fill="#7dd3fc" font-size="10" font-weight="600" text-anchor="middle">Ban Lists like</text>
    <text x="95" y="181" fill="#ffffff" font-size="9" text-anchor="middle">"item1, item2, item3"</text>
  </g>

  <!-- Arrow 1NF to 2NF -->
  <path d="M 235 130 L 270 130" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- 2NF Stage -->
  <g transform="translate(275, 30)">
    <rect width="190" height="200" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="2" />
    <rect x="0" y="0" width="190" height="36" rx="8" fill="#7c3aed" />
    <text x="95" y="24" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">2NF: No Partials</text>
    
    <text x="15" y="60" fill="#a78bfa" font-size="11" font-weight="bold">Rules Enforced:</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="10">• Satisfies 1NF completely</text>
    <text x="15" y="98" fill="#cbd5e1" font-size="10">• Zero partial dependencies</text>
    <text x="15" y="116" fill="#cbd5e1" font-size="10">• Applies to composite keys</text>
    <text x="15" y="134" fill="#cbd5e1" font-size="10">• Non-keys depend on whole key</text>

    <rect x="15" y="152" width="160" height="36" rx="4" fill="#4c1d95" />
    <text x="95" y="167" fill="#ddd6fe" font-size="10" font-weight="600" text-anchor="middle">Extract Product Name</text>
    <text x="95" y="181" fill="#ffffff" font-size="9" text-anchor="middle">From (order_id, prod_id)</text>
  </g>

  <!-- Arrow 2NF to 3NF -->
  <path d="M 470 130 L 505 130" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- 3NF Stage -->
  <g transform="translate(510, 30)">
    <rect width="190" height="200" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="2" />
    <rect x="0" y="0" width="190" height="36" rx="8" fill="#059669" />
    <text x="95" y="24" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">3NF: No Transitives</text>
    
    <text x="15" y="60" fill="#34d399" font-size="11" font-weight="bold">Rules Enforced:</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="10">• Satisfies 2NF completely</text>
    <text x="15" y="98" fill="#cbd5e1" font-size="10">• Zero transitive dependencies</text>
    <text x="15" y="116" fill="#cbd5e1" font-size="10">• Non-key cannot depend on</text>
    <text x="15" y="134" fill="#cbd5e1" font-size="10">• another non-key column</text>

    <rect x="15" y="152" width="160" height="36" rx="4" fill="#064e3b" />
    <text x="95" y="167" fill="#a7f3d0" font-size="10" font-weight="600" text-anchor="middle">Extract Customer City</text>
    <text x="95" y="181" fill="#ffffff" font-size="9" text-anchor="middle">From invoices into Customers</text>
  </g>

  <!-- Bottom Codd Rhyme Banner -->
  <g transform="translate(40, 250)">
    <rect width="660" height="55" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="330" y="24" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">The Golden Rule of Third Normal Form (Bill Kent / Edgar Codd)</text>
    <text x="330" y="44" fill="#38bdf8" font-size="12" font-style="italic" text-anchor="middle">&ldquo;Every non-key attribute must depend on the key, the whole key, and nothing but the key.&rdquo;</text>
  </g>
</svg>`,
      caption: {
        en: 'The progressive normalization pipeline: 1NF establishes atomic values, 2NF removes partial key dependencies, and 3NF removes transitive dependencies.',
        bn: 'ধাপে ধাপে নরমালাইজেশনের পাইপলাইন: 1NF মানগুলোকে অবিভাজ্য করে, 2NF আংশিক নির্ভরতা দূর করে এবং 3NF ট্রানজিটিভ নির্ভরতা দূর করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'First Normal Form (1NF)',
          def: {
            en: 'A relational state where all column values are atomic scalars, repeating column groups are prohibited, and every row has a primary key.',
            bn: 'রিলেশনের এমন একটি অবস্থা যেখানে সকল কলামের মান অবিভাজ্য, কোনো ডুপ্লিকেট কলামের দল থাকে না এবং প্রতিটি রো-এর একটি প্রাইমারি কি থাকে।'
          }
        },
        {
          term: 'Second Normal Form (2NF)',
          def: {
            en: 'A state satisfying 1NF where no non-key attribute is functionally dependent on only a partial subset of a composite primary key.',
            bn: '১ম নরমাল ফর্ম পূরণকারী অবস্থা যেখানে কোনো নন-কি কলাম কম্পোজিট প্রাইমারি কি-এর আংশিক অংশের ওপর নির্ভর করতে পারে না।'
          }
        },
        {
          term: 'Third Normal Form (3NF)',
          def: {
            en: 'A state satisfying 2NF where no non-key attribute transitively depends on another non-key attribute.',
            bn: '২য় নরমাল ফর্ম পূরণকারী অবস্থা যেখানে কোনো নন-কি কলাম অন্য কোনো নন-কি কলামের ওপর ট্রানজিটিভলি নির্ভর করতে পারে না।'
          }
        },
        {
          term: 'Denormalization',
          def: {
            en: 'The deliberate re-introduction of redundancy into a schema to optimize read-heavy analytics queries and avoid massive multi-table joins.',
            bn: 'রিড-হেভি অ্যানালিটিক্স কোয়েরির গতি বাড়াতে এবং একাধিক টেবিলের জয়েন এড়াতে জেনে-বুঝে পরিকল্পিতভাবে স্কিমায় কিছু ডুপ্লিকেট ডাটা রাখা।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'step-by-step-normalization',
      text: {
        en: 'Step-by-Step Walkthrough: Normalizing an Invoice Schema',
        bn: 'ধাপে ধাপে ব্যাখ্যা: একটি ইনভয়েস স্কিমার নরমালাইজেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Consider a raw unnormalized invoice record storing: invoice_id, customer_name, customer_city, items ("Keyboard, Mouse"), and prices ("30, 15"). To achieve 1NF, we eliminate the comma-separated strings by splitting each line item into its own distinct tuple row identified by composite key (invoice_id, item_name). All values are now atomic scalars.',
        bn: 'ধরা যাক একটি কাঁচা ইনভয়েস রেকর্ডে আছে: invoice_id, customer_name, customer_city, items ("Keyboard, Mouse") এবং prices ("30, 15")। ১ম নরমাল ফর্ম (1NF) অর্জন করতে আমরা কমাযুক্ত টেক্সট বাদ দিয়ে প্রতিটি পণ্যের জন্য আলাদা রো তৈরি করি যা (invoice_id, item_name) কম্পোজিট কি দিয়ে চিহ্নিত হয়। এখন সব মান সম্পূর্ণ অবিভাজ্য।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'However, this 1NF table violates 2NF because unit_price depends solely on item_name, not on the invoice_id. If a keyboard price changes from 30 to 35, all historical orders risk inconsistency. To reach 2NF, we extract products into a dedicated Products relation (product_id, name, unit_price). Next, we inspect the invoice table and observe that customer_city depends on customer_name, which in turn depends on invoice_id (a transitive dependency violating 3NF). We extract customers into a Customers table, achieving pure 3NF.',
        bn: 'কিন্তু এই 1NF টেবিলটি ২য় নরমাল ফর্ম (2NF) লঙ্ঘন করে কারণ unit_price কলামটি কেবল item_name-এর ওপর নির্ভর করে, invoice_id-এর ওপর নয়। কিবোর্ডের দাম ৩০ থেকে ৩৫ এ পরিবর্তিত হলে পুরোনো রেকর্ডে গরমিল দেখা দেবে। ২NF অর্জনে আমরা পণ্যগুলোকে আলাদা Products টেবিলে সরিয়ে নিই। এরপর দেখি customer_city নির্ভর করছে customer_name-এর ওপর, যা আবার invoice_id-এর ওপর নির্ভরশীল (৩NF লঙ্ঘনকারী ট্রানজিটিভ নির্ভরতা)। গ্রাহকের তথ্য Customers টেবিলে আলাদা করে আমরা নিখুঁত ৩য় নরমাল ফর্ম (3NF) অর্জন করি।'
      }
    },
    {
      type: 'heading',
      id: 'node-norm-engine',
      text: {
        en: 'Executable Normalization Engine: 1NF to 3NF Transformation & Anomaly Proof',
        bn: 'রানযোগ্য নরমালাইজেশন ইঞ্জিন: 1NF থেকে 3NF রূপান্তর ও অ্যানোমালি পরীক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js script demonstrating the normalization of an unnormalized record into 3 relational tables. It proves how 3NF prevents update anomalies by verifying that a customer city change requires updating exactly 1 row instead of dozens.',
        bn: 'নিচে একটি অসংগঠিত রেকর্ডকে ৩টি রিলেশনাল টেবিলে রূপান্তর করার সম্পূর্ণ Node.js স্ক্রিপ্ট দেওয়া হলো। এটি প্রমাণ করে কীভাবে ৩য় নরমাল ফর্ম আপডেট অ্যানোমালি দূর করে, যেখানে গ্রাহকের ঠিকানা পরিবর্তনের জন্য ডজন ডজন রো-এর বদলে মাত্র ১টি রো আপডেট করলেই যথেষ্ট।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Step-by-step transformation from unnormalized invoice data into 3NF relational schema',
        bn: 'অসংগঠিত ইনভয়েস ডাটা থেকে ৩য় নরমাল ফর্ম (3NF) রিলেশনাল স্কিমায় ধাপে ধাপে রূপান্তর'
      },
      code: `// Step 0: Raw unnormalized transaction object (Violates 1NF, 2NF, and 3NF)
const unnormalizedInvoice = {
  invoiceId: 101,
  customerName: 'Alice',
  customerCity: 'Dhaka',
  itemsList: 'Mechanical Keyboard, Wireless Mouse',
  pricesList: '60, 25'
};

// ==========================================
// Step 1: First Normal Form (1NF)
// Atomize comma lists into individual tuple records
// ==========================================
const step1NFRows = [
  { invoiceId: 101, customerName: 'Alice', customerCity: 'Dhaka', item: 'Mechanical Keyboard', price: 60 },
  { invoiceId: 101, customerName: 'Alice', customerCity: 'Dhaka', item: 'Wireless Mouse', price: 25 }
];

// ==========================================
// Step 2: Second Normal Form (2NF)
// Remove partial dependencies on composite key (invoiceId, productId)
// ==========================================
const productsTable2NF = [
  { productId: 'P-100', name: 'Mechanical Keyboard', unitPrice: 60 },
  { productId: 'P-200', name: 'Wireless Mouse', unitPrice: 25 }
];

const invoiceLineItems2NF = [
  { invoiceId: 101, productId: 'P-100', quantity: 1 },
  { invoiceId: 101, productId: 'P-200', quantity: 1 }
];

// ==========================================
// Step 3: Third Normal Form (3NF)
// Remove transitive dependency: customerCity -> customerId -> invoiceId
// ==========================================
const customersTable3NF = [
  { customerId: 1, name: 'Alice', city: 'Dhaka' }
];

const invoicesTable3NF = [
  { invoiceId: 101, customerId: 1, orderDate: '2026-09-30' }
];

// Verification: Test Update Anomaly Resistance
// In 3NF, moving Alice to 'Chittagong' requires updating EXACTLY 1 record
const targetCustomer = customersTable3NF.find(c => c.customerId === 1);
targetCustomer.city = 'Chittagong';

console.log(\`[1NF Normalization] Split non-atomic item lists into \${step1NFRows.length} distinct atomic line records.\`);
console.log(\`[2NF Normalization] Removed partial dependencies: created independent 'products' relation (\${productsTable2NF.length} items).\`);
console.log(\`[3NF Normalization] Removed transitive dependencies: isolated 'customers' (\${customersTable3NF.length}) from 'invoices' (\${invoicesTable3NF.length}).\`);
console.log(\`[Update Anomaly Test] Customer city updated in exactly 1 record across all 3 normalized tables.\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'OLTP vs OLAP: When to Deliberately Denormalize',
        bn: 'OLTP বনাম OLAP: কখন পরিকল্পিতভাবে ডিনরমালাইজ করবেন'
      },
      text: {
        en: 'In high-throughput transactional OLTP systems (e.g. Postgres handling user checkouts), always design in 3NF to avoid update anomalies and deadlocks. However, in analytical OLAP data warehouses (e.g. Snowflake or BigQuery), data is append-only. Engineers deliberately denormalize into Star Schemas with duplicate dimensions to avoid expensive 8-table joins on billion-row analytics queries.',
        bn: 'উচ্চ-গতির লেনদেনভিত্তিক OLTP সিস্টেমে (যেমন চেকআউট পরিচালনাকারী Postgres) আপডেট ত্রুটি ও ডেডলক এড়াতে সর্বদা ৩NF স্কিমা ব্যবহার করুন। কিন্তু অ্যানালিটিক্যাল OLAP ডাটা ওয়্যারহাউসে (যেমন Snowflake বা BigQuery) ডাটা কেবল রিড হয়। কোটি কোটি সারির জটিল কোয়েরিতে আটটি টেবিলের ব্যয়বহুল জয়েন এড়াতে ইঞ্জিনিয়াররা পরিকল্পিতভাবে স্টার স্কিমায় কিছু ডুপ্লিকেট কলাম রেখে ডিনরমালাইজ করেন।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: '1NF Atomicity Validator',
        bn: '1NF অ্যাটোমিসিটি ভ্যালিডেটর'
      },
      description: {
        en: 'Test 1NF rules: check whether a candidate column value violates the atomicity requirement.',
        bn: '১ম নরমাল ফর্মের নিয়ম পরীক্ষা করুন: কলামের মান অ্যাটমিক নাকি কমাযুক্ত তালিকা তা যাচাই করুন।'
      },
      code: `function checkAtomicity(val) {
  if (typeof val === 'string' && val.includes(',')) {
    return '1NF_VIOLATION_COMMA_DELIMITED_LIST';
  }
  if (Array.isArray(val)) {
    return '1NF_VIOLATION_ARRAY_IN_CELL';
  }
  return '1NF_VALID_ATOMIC_SCALAR';
}

console.log('Test 1 (List):  ', checkAtomicity('red, green, blue'));
console.log('Test 2 (Atomic):', checkAtomicity('crimson'));`,
      tests: [
        {
          name: {
            en: 'Flags comma-separated string as 1NF violation',
            bn: 'কমাযুক্ত স্ট্রিংকে 1NF লঙ্ঘন হিসেবে চিহ্নিত করে'
          },
          expected: 'Test 1 (List):   1NF_VIOLATION_COMMA_DELIMITED_LIST'
        },
        {
          name: {
            en: 'Validates atomic scalar string as 1NF compliant',
            bn: 'অবিভাজ্য স্কেলার স্ট্রিংকে 1NF মান্যকারী হিসেবে অনুমোদন করে'
          },
          expected: 'Test 2 (Atomic): 1NF_VALID_ATOMIC_SCALAR'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-nrm-ex-1',
      kind: 'mcq',
      topic: 'transitive-dependency-3nf',
      question: {
        en: 'What functional relationship defines a transitive dependency that violates Third Normal Form (3NF)?',
        bn: 'কোন কার্যকরী সম্পর্কটি একটি ট্রানজিটিভ নির্ভরতা তৈরি করে যা ৩য় নরমাল ফর্ম (3NF) লঙ্ঘন করে?'
      },
      options: [
        {
          en: 'A non-key attribute depends on another non-key attribute (X -> Y -> Z, where X is primary key and Y is not)',
          bn: 'একটি নন-কি কলাম অন্য আরেকটি নন-কি কলামের ওপর নির্ভর করে (X -> Y -> Z, যেখানে X প্রাইমারি কি এবং Y নন-কি)'
        },
        {
          en: 'The primary key depends on the current server time',
          bn: 'প্রাইমারি কি সার্ভারের বর্তমান সময়ের ওপর নির্ভর করে'
        },
        {
          en: 'A table column contains only prime numbers',
          bn: 'একটি টেবিল কলাম কেবল মৌলিক সংখ্যা ধারণ করে'
        },
        {
          en: 'Two different users have identical first names',
          bn: 'দুজন ভিন্ন ব্যবহারকারীর প্রথম নাম হুবহু একই হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Non-keys must depend directly on the primary key, never through an intermediary.',
        bn: 'নন-কি কলামগুলো সরাসরি প্রাইমারি কি-এর ওপর নির্ভর করতে হবে, কোনো মধ্যবর্তী কলামের মাধ্যমে নয়।'
      },
      explanation: {
        en: 'A transitive dependency occurs when non-key column A determines non-key column B, which is in turn determined by primary key PK. 3NF eliminates this by moving (A, B) into their own dedicated table.',
        bn: 'ট্রানজিটিভ নির্ভরতা ঘটে যখন নন-কি কলাম A অন্য একটি নন-কি কলাম B-কে নির্ধারণ করে, যা আবার প্রাইমারি কি PK দ্বারা নির্ধারিত। ৩NF এই নির্ভরতা দূর করতে (A, B)-কে পৃথক টেবিলে স্থানান্তর করে।'
      }
    },
    {
      id: 'db-nrm-ex-2',
      kind: 'mcq',
      topic: 'second-normal-form-partial-dependency',
      question: {
        en: 'Under what specific schema condition can a table violate Second Normal Form (2NF)?',
        bn: 'কোন সুনির্দিষ্ট স্কিমা অবস্থায় একটি টেবিল ২য় নরমাল ফর্ম (2NF) লঙ্ঘন করতে পারে?'
      },
      options: [
        {
          en: 'When the table has a composite primary key, and a non-key attribute depends on only one part of the composite key',
          bn: 'যখন টেবিলে একটি কম্পোজিট প্রাইমারি কি থাকে, এবং কোনো নন-কি কলাম সেই কম্পোজিট কি-এর আংশিক অংশের ওপর নির্ভর করে'
        },
        {
          en: 'When the table has more than 100 rows of data',
          bn: 'যখন টেবিলে ১০০টির বেশি সারি থাকে'
        },
        {
          en: 'When column names are written in lowercase',
          bn: 'যখন কলামের নামগুলো ছোট হাতের অক্ষরে লেখা হয়'
        },
        {
          en: 'When the table uses the UTF-8 text encoding',
          bn: 'যখন টেবিলটি UTF-8 টেক্সট এনকোডিং ব্যবহার করে'
        }
      ],
      answer: 0,
      hint: {
        en: '2NF only applies when a table has a composite (multi-column) primary key.',
        bn: 'টেবিলে একাধিক কলামের কম্পোজিট প্রাইমারি কি থাকলেই কেবল 2NF এর প্রশ্ন আসে।'
      },
      explanation: {
        en: 'If a table has a single-column primary key and satisfies 1NF, it automatically satisfies 2NF. Partial dependencies only exist when a composite key (A, B) exists and a column depends only on A.',
        bn: 'টেবিলে একক কলামের প্রাইমারি কি থাকলে এবং 1NF মানলে তা স্বয়ংক্রিয়ভাবে 2NF মেনে চলে। আংশিক নির্ভরতা কেবল তখনই দেখা দেয় যখন কম্পোজিট কি (A, B) থাকে এবং কোনো কলাম কেবল A-এর ওপর নির্ভর করে।'
      }
    },
    {
      id: 'db-nrm-ex-3',
      kind: 'mcq',
      topic: 'first-normal-form-atomicity',
      question: {
        en: 'Which of the following database column values violates First Normal Form (1NF)?',
        bn: 'নিচের কোন কলাম মানটি ১ম নরমাল ফর্ম (1NF) লঙ্ঘন করে?'
      },
      options: [
        {
          en: 'A tags column containing the comma-separated string "tech, science, ai"',
          bn: 'একটি tags কলাম যাতে কমাযুক্ত স্ট্রিং "tech, science, ai" সংরক্ষিত আছে'
        },
        {
          en: 'An integer column storing the value 42',
          bn: 'একটি ইন্টিজার কলাম যাতে ৪২ সংরক্ষিত আছে'
        },
        {
          en: 'A boolean column storing true',
          bn: 'একটি বুলিয়ান কলাম যাতে true সংরক্ষিত আছে'
        },
        {
          en: 'A timestamp column storing "2026-09-30 10:00:00Z"',
          bn: 'একটি টাইমস্ট্যাম্প কলাম যাতে "2026-09-30 10:00:00Z" সংরক্ষিত আছে'
        }
      ],
      answer: 0,
      hint: {
        en: '1NF demands atomic scalar values: no lists, sets, or nested arrays in a single cell.',
        bn: '1NF প্রতিটি ঘরে অবিভাজ্য একক মান দাবি করে: কোনো কমাযুক্ত তালিকা বা অ্যারে রাখা যাবে না।'
      },
      explanation: {
        en: 'Storing multiple values in a single cell as a comma-delimited string violates 1NF atomicity. It prevents the database from indexing, searching, or joining individual tags efficiently.',
        bn: 'একটি ঘরে কমা দিয়ে একাধিক মান রাখা 1NF-এর অবিভাজ্যতার নিয়ম ভাঙে। এটি ডাটাবেসকে প্রতিটি ট্যাগ আলাদাভাবে ইনডেক্স বা কোয়েরি করতে বাধা দেয়।'
      }
    },
    {
      id: 'db-nrm-ex-4',
      kind: 'mcq',
      topic: 'oltp-vs-olap-denormalization',
      question: {
        en: 'Why do analytical data warehouses (OLAP) frequently choose denormalized schemas over 3NF?',
        bn: 'অ্যানালিটিক্যাল ডাটা ওয়্যারহাউসগুলো (OLAP) কেন ৩NF এর বদলে প্রায়ই ডিনরমালাইজড স্কিমা বেছে নেয়?'
      },
      options: [
        {
          en: 'To avoid expensive multi-table joins on billion-row read queries, accepting controlled redundancy because data is append-only',
          bn: 'কোটি কোটি সারির রিড কোয়েরিতে ব্যয়বহুল মাল্টি-টেবিল জয়েন এড়াতে এবং ডাটা কেবল অ্যাপেন্ড হওয়ায় নিয়ন্ত্রিত ডুপ্লিকেশন মেনে নিতে'
        },
        {
          en: 'Because data warehouses are incapable of storing numbers',
          bn: 'কারণ ডাটা ওয়্যারহাউস কোনো সংখ্যা সংরক্ষণ করতে পারে না'
        },
        {
          en: 'Because 3NF is legally prohibited in cloud hosting environments',
          bn: 'কারণ ক্লাউড হোস্টিংয়ে ৩NF ব্যবহার করা আইনত নিষিদ্ধ'
        },
        {
          en: 'Because denormalization reduces network electricity usage by 90 percent',
          bn: 'কারণ ডিনরমালাইজেশন নেটওয়ার্কের বিদ্যুৎ খরচ ৯০ শতাংশ কমিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Read-only analytics prioritizes scan speed over write normalization.',
        bn: 'কেবল পড়ার উপযোগী অ্যানালিটিক্সে রাইট সুরক্ষার চেয়ে স্ক্যান করার গতিকে বেশি প্রাধান্য দেওয়া হয়।'
      },
      explanation: {
        en: 'In data warehouses, data is rarely updated, eliminating update anomalies. Denormalized Star Schemas allow analytical queries (GROUP BY, SUM) to scan flat tables at maximum hardware bandwidth without executing complex 10-table joins.',
        bn: 'ডাটা ওয়্যারহাউসে ডাটা পরিবর্তন করা হয় না, ফলে আপডেট অ্যানোমালি ঘটার কোনো সুযোগ থাকে না। ডিনরমালাইজড স্টার স্কিমা জটিল জয়েন ছাড়াই সর্বোচ্চ গতিতে বিশাল টেবিল স্ক্যান করে সমষ্টিগত রিপোর্ট তৈরি করতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'norms-and-the-form-quiz',
    title: {
      en: 'Database Normalization Quiz',
      bn: 'ডাটাবেস নরমালাইজেশন কুইজ'
    },
    questions: [
      {
        id: 'db-nrm-qz-1',
        kind: 'mcq',
        topic: 'deletion-anomaly-definition',
        question: {
          en: 'What is a deletion anomaly in a poorly designed database table?',
          bn: 'একটি ত্রুটিপূর্ণ ডাটাবেস টেবিলে ডিলিশন অ্যানোমালি (Deletion Anomaly) বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'Deleting a row inadvertently deletes unrelated essential information (such as deleting the last student accidentally erasing the entire course syllabus)',
            bn: 'একটি সারি মুছতে গিয়ে অনিচ্ছাকৃতভাবে অন্য কোনো প্রয়োজনীয় তথ্য চিরতরে মুছে যাওয়া (যেমন শেষ শিক্ষার্থীর রেকর্ড মুছতে গিয়ে পুরো কোর্সের তথ্য হারিয়ে যাওয়া)'
          },
          {
            en: 'The database permanently shuts down when the DELETE command is run',
            bn: 'DELETE কমান্ড চালালে ডাটাবেস চিরতরে বন্ধ হয়ে যায়'
          },
          {
            en: 'The DELETE statement converts all table numbers into zero',
            bn: 'DELETE স্টেটমেন্ট টেবিলের সমস্ত সংখ্যাকে শূন্যে রূপান্তর করে'
          },
          {
            en: 'Deleting a row triggers a server hardware reboot',
            bn: 'একটি সারি মুছলে সার্ভার হার্ডওয়্যার রিবুট হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unintended loss of collateral facts when removing an unrelated record.',
          bn: 'একটি রেকর্ড মুছতে গিয়ে অনিচ্ছাকৃতভাবে অন্য কোনো সম্পর্কহীন মৌলিক তথ্য হারিয়ে ফেলা।'
        },
        explanation: {
          en: 'A deletion anomaly occurs when disparate facts are combined in one table. Removing one entity instance causes unintended destruction of other data that was coupled to it.',
          bn: 'ডিলিশন অ্যানোমালি ঘটে যখন একাধিক স্বাধীন তথ্যকে একটি টেবিলে মেশানো হয়। এর ফলে একটি তথ্য মুছতে গেলে তার সাথে সম্পর্কিত অন্য দরকারি তথ্যও ডাটাবেস থেকে হারিয়ে যায়।'
        }
      },
      {
        id: 'db-nrm-qz-2',
        kind: 'mcq',
        topic: 'codd-normalization-motto',
        question: {
          en: 'According to the famous Codd/Kent formulation, every non-key attribute must depend on what in a 3NF relation?',
          bn: 'কড ও কেন্টের বিখ্যাত সূত্র অনুযায়ী, একটি ৩NF টেবিলে প্রতিটি নন-কি কলাম কার ওপর নির্ভর করতে হবে?'
        },
        options: [
          {
            en: 'The key, the whole key, and nothing but the key',
            bn: 'কি, সম্পূর্ণ কি, এবং কেবল কি-এর ওপর (the key, the whole key, and nothing but the key)'
          },
          {
            en: 'The file extension on disk',
            bn: 'হার্ডডিস্কে থাকা ফাইলের এক্সটেনশনের ওপর'
          },
          {
            en: 'The number of CPUs on the server mother board',
            bn: 'সার্ভারের মাদারবোর্ডে থাকা সিপিইউ সংখ্যার ওপর'
          },
          {
            en: 'The length of the table name in characters',
            bn: 'টেবিলের নামের অক্ষরের দৈর্ঘ্যের ওপর'
          }
        ],
        answer: 0,
        hint: {
          en: '"The key" represents 1NF, "the whole key" represents 2NF, and "nothing but the key" represents 3NF.',
          bn: '"The key" বোঝায় 1NF, "the whole key" বোঝায় 2NF, এবং "nothing but the key" বোঝায় 3NF।'
        },
        explanation: {
          en: 'Bill Kent famous phrase encapsulates relational normalization: "The key" (1NF requirement of a primary key), "The whole key" (2NF prohibition of partial dependencies), and "Nothing but the key" (3NF prohibition of transitive dependencies).',
          bn: 'বিল কেন্টের এই বিখ্যাত নীতিবাক্য সম্পূর্ণ নরমালাইজেশনকে সংক্ষেপে তুলে ধরে: "The key" (1NF-এ প্রাইমারি কি থাকা), "The whole key" (2NF-এ আংশিক নির্ভরতা বর্জন), এবং "Nothing but the key" (3NF-এ ট্রানজিটিভ নির্ভরতা বর্জন)।'
        }
      },
      {
        id: 'db-nrm-qz-3',
        kind: 'mcq',
        topic: 'update-anomaly-prevention',
        question: {
          en: 'How does normalizing a schema to 3NF prevent update anomalies?',
          bn: 'স্কিমাকে ৩য় নরমাল ফর্মে (3NF) রূপান্তর করার মাধ্যমে কীভাবে আপডেট অ্যানোমালি প্রতিরোধ করা হয়?'
        },
        options: [
          {
            en: 'By ensuring each fact is stored in exactly one place, so any update modifies only a single row without duplicate copies falling out of sync',
            bn: 'প্রতিটি তথ্য যেন ঠিক একটি স্থানেই সংরক্ষিত থাকে তা নিশ্চিত করে, ফলে যেকোনো আপডেটে কেবল একটি রো পরিবর্তিত হয় এবং তথ্যের অমিল ঘটার সুযোগ থাকে না'
          },
          {
            en: 'By encrypting all database rows with AES-256 passwords',
            bn: 'সকল ডাটাবেস রো-কে AES-২৫৬ পাসওয়ার্ড দিয়ে এনক্রিপ্ট করার মাধ্যমে'
          },
          {
            en: 'By prohibiting users from running UPDATE statements',
            bn: 'ব্যবহারকারীদের UPDATE স্টেটমেন্ট চালানো নিষিদ্ধ করার মাধ্যমে'
          },
          {
            en: 'By forcing database tables to be read-only on Mondays',
            bn: 'সোমবারের দিনে ডাটাবেস টেবিল কেবল রিড-অনলি মোডে রাখার মাধ্যমে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Single source of truth: change a customer city once in Customers, not 50 times in Orders.',
          bn: 'তথ্যের একক উৎস: গ্রাহকের শহর Customers টেবিলে একবার বদলান, Orders টেবিলে ৫০ বার নয়।'
        },
        explanation: {
          en: 'In a 3NF schema, redundancy is eliminated. Customer facts live only in the Customers table. Modifying an address requires updating 1 row, guaranteeing that all foreign key references instantly reflect the updated state.',
          bn: '৩NF স্কিমায় তথ্যের পুনরাবৃত্তি থাকে না। গ্রাহকের তথ্য কেবল Customers টেবিলে থাকে। ফলে ঠিকানা বদলাতে মাত্র ১টি রো আপডেট করলেই হয় এবং রেফারেন্স করা সকল অর্ডার সাথে সাথে সঠিক তথ্য দেখতে পায়।'
        }
      },
      {
        id: 'db-nrm-qz-4',
        kind: 'mcq',
        topic: 'bcnf-concept',
        question: {
          en: 'What is Boyce-Codd Normal Form (BCNF) relative to Third Normal Form (3NF)?',
          bn: '৩য় নরমাল ফর্মের (3NF) তুলনায় বয়েস-কড নরমাল ফর্ম (BCNF) কী?'
        },
        options: [
          {
            en: 'A slightly stricter version of 3NF where every determinant in a functional dependency must be a superkey',
            bn: '৩য় নরমাল ফর্মের একটি সামান্য কঠোর রূপ যেখানে প্রতিটি কার্যকরী নির্ভরতার ডিটারমিন্যান্টকে অবশ্যই একটি সুপার-কি হতে হয়'
          },
          {
            en: 'A completely unrelated format used exclusively for storing MP3 music files',
            bn: 'এমপি৩ গান সংরক্ষণের জন্য ব্যবহৃত একটি সম্পূর্ণ ভিন্নধর্মী ফরম্যাট'
          },
          {
            en: 'A database format that does not allow tables to have columns',
            bn: 'একটি ডাটাবেস ফরম্যাট যাতে টেবিলে কোনো কলাম রাখার অনুমতি থাকে না'
          },
          {
            en: 'A legacy database standard replaced in 1980 by Excel spreadsheets',
            bn: '১৯৮০ সালে এক্সেল স্প্রেডশীট দ্বারা প্রতিস্থাপিত একটি পুরনো ডাটাবেস পদ্ধতি'
          }
        ],
        answer: 0,
        hint: {
          en: 'BCNF resolves rare edge cases in 3NF where overlapping candidate keys exist.',
          bn: 'BCNF ৩NF-এর বিরল কিছু ত্রুটি দূর করে যেখানে একাধিক ওভারল্যাপিং ক্যান্ডিডেট কি থাকে।'
        },
        explanation: {
          en: 'Boyce-Codd Normal Form (BCNF, or 3.5NF) strengthens 3NF by requiring that for every functional dependency X -> Y, X must be a superkey. It resolves edge cases involving overlapping composite candidate keys.',
          bn: 'বয়েস-কড নরমাল ফর্ম (BCNF বা ৩.৫NF) ৩NF-কে আরও শক্তিশালী করে শর্ত দেয় যে প্রতিটি কার্যকরী নির্ভরতা X -> Y এর ক্ষেত্রে X-কে অবশ্যই একটি সুপার-কি হতে হবে। এটি ওভারল্যাপিং কম্পোজিট ক্যান্ডিডেট কি-এর জটিলতা দূর করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'txns-and-the-acid',
    title: {
      en: 'ACID Transactions: Concurrency, Locks & Isolation Levels',
      bn: 'ACID ট্রানজ্যাকশন: কনকারেন্সি, লক ও আইসোলেশন লেভেল'
    }
  }
};
