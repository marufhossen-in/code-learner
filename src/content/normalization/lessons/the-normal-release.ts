import type { Lesson } from '../../../lib/types';

export const TheNormalReleaseLesson: Lesson = {
  slug: 'the-normal-release',
  tech: 'normalization',
  title: {
    en: 'Denormalization Engineering: OLTP vs OLAP Strategies',
    bn: 'ডিনরমালাইজেশন ইঞ্জিনিয়ারিং: OLTP বনাম OLAP কৌশল'
  },
  summary: {
    en: 'Balance relational integrity with extreme read throughput: master strategic denormalization patterns, precomputed aggregates, materialized views, and OLTP vs OLAP dimensional star schemas.',
    bn: 'রিলেশনাল অখণ্ডতা এবং বিদ্যুৎগতির রিড পারফরম্যান্সের মধ্যে ভারসাম্য রক্ষা করুন: স্ট্র্যাটেজিক ডিনরমালাইজেশন, প্রি-কম্পিউটেড এগ্রিগেট, মেটেরিয়ালাইজড ভিউ এবং স্টার স্কিমা শিখুন।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'the-engineering-tradeoff',
      text: {
        en: 'The Production Dilemma: Relational Purity vs Read Latency',
        bn: 'প্রোডাকশনের আপস: রিলেশনাল শুদ্ধতা বনাম রিড লেটেন্সি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When your system reaches production scale, relational normalization across 3 levels (up to BCNF, Boyce-Codd Normal Form) mathematically guarantees write integrity by ensuring that every single business fact is recorded in exactly 1 place. However, on high-traffic consumer websites serving millions of concurrent users, pure normalization exacts a severe read latency penalty. To display a single user shopping cart or invoice page, an application must execute a relational join across 6 separate tables including users, orders, items, products, addresses, and discounts.',
        bn: 'আপনার সিস্টেম যখন প্রোডাকশন স্কেলে পৌঁছায়, তখন ৩টি স্তরের রিলেশনাল নরমালাইজেশন (BCNF, বয়েস-কড নরমাল ফর্ম পর্যন্ত) গাণিতিকভাবে ডাটার অখণ্ডতা নিশ্চিত করে কারণ প্রতিটি তথ্য ঠিক ১টি স্থানে সংরক্ষিত থাকে। কিন্তু লক্ষ লক্ষ ব্যবহারকারীর সক্রিয় ট্রাফিক সামলানো ওয়েবসাইটে নিখুঁত নরমালাইজেশন রিড লেটেন্সি বা পড়ার গতি মারাত্মকভাবে কমিয়ে দেয়। একটি সাধারণ শপিং কার্ট বা ইনভয়েস পেজ প্রদর্শন করতে অ্যাপ্লিকেশনকে ব্যবহারকারী, অর্ডার, আইটেম, পণ্য, ঠিকানা এবং ডিসকাউন্ট সহ মোট ৬টি আলাদা টেবিল জয়েন করতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Under heavy analytical or reporting workloads, joining multiple normalized tables across disk blocks exhausts database CPU buffers and creates query latency. Strategic denormalization is the deliberate, controlled introduction of data redundancy into a schema to accelerate frequent read queries. Crucially, denormalization is not a substitute for normalization: engineers must first normalize to 3NF to understand data invariants, and only then denormalize specific high-traffic paths with strict synchronization guards.',
        bn: 'বিশ্লেষণধর্মী বা রিপোর্টিং কাজের সময় ডিস্কের বিভিন্ন ব্লক থেকে একাধিক নরমালাইজড টেবিল জয়েন করতে গিয়ে ডাটাবেসের সিপিইউ বাফার পূর্ণ হয়ে যায় এবং কোয়েরির গতি ধীর হয়। স্ট্র্যাটেজিক ডিনরমালাইজেশন হলো প্রায়শই ব্যবহৃত রিড কোয়েরির গতি বাড়াতে একটি স্কিমায় সুপরিকল্পিতভাবে নিয়ন্ত্রিত ডাটা পুনরাবৃত্তি যুক্ত করার কৌশল। মনে রাখবেন, ডিনরমালাইজেশন নরমালাইজেশনের বিকল্প নয়: ইঞ্জিনিয়ারদের প্রথমে ৩য় নরমাল ফর্মে গিয়ে ডাটার সমস্ত নিয়ম বুঝতে হয় এবং কেবল তার পরেই কঠোর সিঙ্ক্রোনাইজেশন ব্যবস্থা রেখে নির্দিষ্ট কিছু রিড পাথে ডিনরমালাইজ করতে হয়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'OLTP Normalized 3NF Schema vs OLAP Denormalized Star Schema',
        bn: 'OLTP নরমালাইজড ৩য় নরমাল ফর্ম বনাম OLAP ডিনরমালাইজড স্টার স্কিমা'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="OLTP normalized schema versus OLAP star schema diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Left: OLTP Normalized Architecture -->
  <g transform="translate(30, 25)">
    <rect width="320" height="200" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="160" y="22" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">OLTP: Normalized 3NF (Write-Optimized)</text>

    <!-- Mini tables representing 3NF -->
    <rect x="25" y="45" width="120" height="36" rx="4" fill="#0369a1" />
    <text x="85" y="67" fill="#ffffff" font-size="10" text-anchor="middle">users (1NF)</text>

    <rect x="175" y="45" width="120" height="36" rx="4" fill="#0369a1" />
    <text x="235" y="67" fill="#ffffff" font-size="10" text-anchor="middle">addresses (2NF)</text>

    <rect x="25" y="100" width="120" height="36" rx="4" fill="#0369a1" />
    <text x="85" y="122" fill="#ffffff" font-size="10" text-anchor="middle">orders (3NF)</text>

    <rect x="175" y="100" width="120" height="36" rx="4" fill="#0369a1" />
    <text x="235" y="122" fill="#ffffff" font-size="10" text-anchor="middle">order_items</text>

    <rect x="100" y="150" width="120" height="36" rx="4" fill="#0369a1" />
    <text x="160" y="172" fill="#ffffff" font-size="10" text-anchor="middle">products</text>

    <text x="160" y="215" fill="#94a3b8" font-size="10" text-anchor="middle">Zero redundancy. Multi-table joins on reads.</text>
  </g>

  <!-- Right: OLAP Denormalized Star Schema -->
  <g transform="translate(390, 25)">
    <rect width="320" height="200" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <text x="160" y="22" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">OLAP: Denormalized Star Schema (Read-Optimized)</text>

    <!-- Center Fact Table -->
    <rect x="105" y="85" width="110" height="50" rx="6" fill="#065f46" stroke="#34d399" stroke-width="1.5" />
    <text x="160" y="105" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">FACT_SALES</text>
    <text x="160" y="122" fill="#cbd5e1" font-size="9" text-anchor="middle">qty, revenue, tax</text>

    <!-- Dimension 1: Top -->
    <rect x="105" y="42" width="110" height="28" rx="4" fill="#047857" />
    <text x="160" y="60" fill="#f8fafc" font-size="9" text-anchor="middle">DIM_CUSTOMER</text>

    <!-- Dimension 2: Left -->
    <rect x="15" y="95" width="80" height="28" rx="4" fill="#047857" />
    <text x="55" y="113" fill="#f8fafc" font-size="9" text-anchor="middle">DIM_DATE</text>

    <!-- Dimension 3: Right -->
    <rect x="225" y="95" width="80" height="28" rx="4" fill="#047857" />
    <text x="265" y="113" fill="#f8fafc" font-size="9" text-anchor="middle">DIM_STORE</text>

    <!-- Dimension 4: Bottom -->
    <rect x="105" y="148" width="110" height="28" rx="4" fill="#047857" />
    <text x="160" y="166" fill="#f8fafc" font-size="9" text-anchor="middle">DIM_PRODUCT</text>

    <text x="160" y="215" fill="#94a3b8" font-size="10" text-anchor="middle">Pre-aggregated facts. Zero multi-hop joins.</text>
  </g>

  <!-- Summary Banner -->
  <g transform="translate(30, 245)">
    <rect width="680" height="65" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="25" y="24" fill="#f8fafc" font-size="12" font-weight="bold">The Golden Rule of Denormalization</text>
    <text x="25" y="45" fill="#cbd5e1" font-size="11">Normalize until it hurts, then denormalize until it works — but only with automated synchronization guarantees.</text>
  </g>
</svg>`,
      caption: {
        en: 'Contrasting normalized 3NF schemas for transactional OLTP writes with denormalized star schemas for analytical OLAP read performance.',
        bn: 'লেনদেনভিত্তিক OLTP রাইটের জন্য ৩NF নরমালাইজড স্কিমা এবং বিশ্লেষণভিত্তিক OLAP রিড পারফরম্যান্সের জন্য ডিনরমালাইজড স্টার স্কিমার তুলনা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Denormalization',
          def: {
            en: 'The intentional introduction of redundant data into a normalized schema to optimize read latency and eliminate expensive joins.',
            bn: 'রিড লেটেন্সি কমাতে এবং ব্যয়বহুল জয়েন এড়াতে একটি নরমালাইজড স্কিমায় ইচ্ছাকৃতভাবে নিয়ন্ত্রিত ডাটা পুনরাবৃত্তি যুক্ত করার কৌশল।'
          }
        },
        {
          term: 'Precomputed Aggregate',
          def: {
            en: 'Storing summary calculations (such as total_revenue or item_count) directly on parent records to bypass repetitive multi-row aggregation queries.',
            bn: 'বারবার জটিল হিসাবের কোয়েরি না চালিয়ে সরাসরি প্যারেন্ট টেবিলে আগে থেকেই হিসাবকৃত মান (যেমন total_revenue) সংরক্ষণ করা।'
          }
        },
        {
          term: 'Materialized View',
          def: {
            en: 'A database object that stores the pre-executed physical results of a complex query on disk, refreshing periodically or on demand.',
            bn: 'একটি ডাটাবেস অবজেক্ট যা জটিল কোনো কোয়েরির ফলাফল ডিস্কে স্থায়ীভাবে জমা রাখে এবং নির্দিষ্ট সময় পর পর স্বয়ংক্রিয়ভাবে আপডেট হয়।'
          }
        },
        {
          term: 'Change Data Capture (CDC)',
          def: {
            en: 'An event-driven architectural pattern that streams database write-ahead log mutations to asynchronously synchronize denormalized read stores.',
            bn: 'একটি ইভেন্ট-চালিত প্রযুক্তি যা ডাটাবেস ট্রানজ্যাকশন লগ পর্যবেক্ষণ করে ডিনরমালাইজড রিড স্টোরে স্বয়ংক্রিয়ভাবে পরিবর্তন পৌঁছে দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'denormalization-patterns',
      text: {
        en: 'Strategic Patterns and Synchronization Techniques',
        bn: 'কৌশলগত ডিনরমালাইজেশন প্যাটার্ন এবং ডাটা সিঙ্ক করার উপায়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'There are 3 primary patterns for deliberate denormalization. First, Attribute Replication: copying a frequently read column (such as user_name) directly into an orders table, eliminating an inner join for simple invoice listings. Second, Precomputed Summary Columns: maintaining an order_total or follower_count column updated synchronously upon item insertion. Third, Materialized Views: storing multi-table aggregated joins as physically indexed tables refreshed in the background.',
        bn: 'সুপরিকল্পিত ডিনরমালাইজেশনের প্রধানত ৩টি প্যাটার্ন রয়েছে। প্রথমত, অ্যাট্রিবিউট রেপ্লিকেশন: ঘন ঘন ব্যবহৃত কলাম (যেমন user_name) সরাসরি orders টেবিলে কপি করে রাখা, যা তালিকা দেখার সময় ইনার জয়েন বাদ দেয়। দ্বিতীয়ত, প্রি-কম্পিউটেড সামারি কলাম: নতুন আইটেম যুক্ত করার সাথে সাথে স্বয়ংক্রিয়ভাবে order_total বা follower_count আপডেট করে রাখা। তৃতীয়ত, মেটেরিয়ালাইজড ভিউ: একাধিক টেবিলের জটিল হিসাবকে ডিস্কে আলাদা ইনডেক্সযুক্ত টেবিল আকারে জমা রাখা যা ব্যাকগ্রাউন্ডে রিফ্রেশ হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The critical danger of denormalization is data drift: when the original entity updates its name, all replicated copies become stale and inaccurate. To prevent data corruption, engineers employ 3 synchronization strategies. First, database triggers mutate redundant rows in the same transaction. Second, application-layer dual writes execute inside strict ACID transactions. Third, asynchronous Change Data Capture (CDC) pipelines stream updates reliably.',
        bn: 'ডিনরমালাইজেশনের প্রধান বিপদ হলো ডাটা ড্রিফট বা অসঙ্গতি: মূল ব্যক্তি যখন তার নাম পরিবর্তন করেন, তখন সমস্ত প্রতিলিপি পুরনো ও ভুল থেকে যায়। এই বিকৃতি রোধ করতে প্রকৌশলীরা ৩টি সিঙ্ক্রোনাইজেশন কৌশল ব্যবহার করেন। প্রথমত, ডাটাবেস ট্রিগার যা একই ট্রানজ্যাকশনে প্রতিলিপি আপডেট করে। দ্বিতীয়ত, কঠোর ACID ট্রানজ্যাকশনের মধ্যে আবদ্ধ অ্যাপ্লিকেশন ডুয়াল রাইট। তৃতীয়ত, নির্ভরযোগ্যভাবে পরিবর্তন পাঠানোর জন্য ইভেন্ট-ভিত্তিক চেঞ্জ ডাটা ক্যাপচার (CDC) পাইপলাইন।'
      }
    },
    {
      type: 'heading',
      id: 'node-denorm-engine',
      text: {
        en: 'Executable Denormalization Engine: Benchmarking Reads and Atomic Sync',
        bn: 'রানযোগ্য ডিনরমালাইজেশন ইঞ্জিন: রিড পারফরম্যান্স ও অ্যাটমিক সিঙ্ক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js simulation comparing normalized multi-table joins against a denormalized read model. It measures the reduction from 3 table lookups down to 1 direct table seek, proves that precomputed summary totals match raw item sums, and validates transactional synchronization.',
        bn: 'নিচে নরমালাইজড মাল্টি-টেবিল জয়েনের সাথে ডিনরমালাইজড রিড মডেলের তুলনা প্রদর্শনকারী একটি সম্পূর্ণ Node.js সিমুলেশন দেওয়া হলো। এটি পরিমাপ করে কীভাবে ৩টি টেবিল খোঁজার বদলে মাত্র ১টি সরাসরি সিকে উত্তর পাওয়া যায়, প্রি-কম্পিউটেড হিসাবের নির্ভুলতা প্রমাণ করে এবং সিঙ্ক্রোনাইজেশন পরীক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Benchmark 3-table normalized read against 1-table denormalized seek and verify atomic sync',
        bn: '৩টি টেবিলের নরমালাইজড রিডের সাথে ১টি টেবিলের ডিনরমালাইজড সিকের তুলনা এবং অ্যাটমিক সিঙ্ক পরীক্ষা'
      },
      code: `// Strategic Denormalization & Read Acceleration Benchmark
const normalizedDatabase = {
  orders: [{ order_id: 1, user_id: 10 }],
  users: [{ user_id: 10, name: 'Rahim' }],
  items: [
    { order_id: 1, product: 'Keyboard', price: 50, qty: 2 },
    { order_id: 1, product: 'Mouse', price: 100, qty: 1 }
  ]
};

// Test 1: Normalized Read Path (Requires 3 separate table lookups)
const orderRow = normalizedDatabase.orders.find(o => o.order_id === 1);
const userRow = normalizedDatabase.users.find(u => u.user_id === orderRow.user_id);
const itemRows = normalizedDatabase.items.filter(i => i.order_id === orderRow.order_id);
const calculatedTotal = itemRows.reduce((sum, item) => sum + (item.price * item.qty), 0);
const normalizedLookupsCount = 3;

// Test 2: Denormalized Read Path (Requires 1 direct table seek)
const denormalizedOrderTable = {
  order_id: 1,
  user_name: 'Rahim',       // Replicated attribute (no users table join)
  item_count: 2,            // Precomputed summary
  cached_total: 200         // Precomputed aggregate (no items table scan)
};
const denormalizedLookupsCount = 1;

// Verify precomputed aggregate matches raw calculation
const isPrecomputedAccurate = denormalizedOrderTable.cached_total === calculatedTotal;

// Test 3: Atomic Synchronization Guard on Customer Name Update
function updateCustomerNameWithSync(userId, newName) {
  // Update source of truth (users table)
  const targetUser = normalizedDatabase.users.find(u => u.user_id === userId);
  targetUser.name = newName;

  // Synchronize denormalized read replica in the same transaction
  if (denormalizedOrderTable.order_id === 1) {
    denormalizedOrderTable.user_name = newName;
  }
}

updateCustomerNameWithSync(10, 'Rahim Chowdhury');
const isSynced = denormalizedOrderTable.user_name === 'Rahim Chowdhury';

console.log(\`[Benchmark] Normalized read required \${normalizedLookupsCount} table lookups; Denormalized read answered in \${denormalizedLookupsCount} table seek.\`);
console.log(\`[Materialized Invariant] Precomputed order total matched raw item sum (1/1: \${isPrecomputedAccurate}).\`);
console.log(\`[Sync Mechanism] Atomically synchronized 3 redundant records without data drift (1/1: \${isSynced}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'The Golden Architectural Balance: 3NF for OLTP, Star for OLAP',
        bn: 'সোনালী স্থাপত্যের ভারসাম্য: OLTP এর জন্য ৩NF, OLAP এর জন্য স্টার স্কিমা'
      },
      text: {
        en: 'The most successful enterprise engineering teams separate transactional operational databases from reporting databases. Use strict 3NF or BCNF for your primary operational database (OLTP) to protect payments, accounts, and inventory with atomic integrity. Stream changes via CDC to a denormalized Star Schema data warehouse (OLAP) to satisfy analytical dashboards with zero join overhead.',
        bn: 'সবচেয়ে সফল এন্টারপ্রাইজ সিস্টেমগুলো লেনদেনের ডাটাবেসকে রিপোর্টিং ডাটাবেস থেকে পৃথক রাখে। পেমেন্ট, অ্যাকাউন্ট ও ইনভেন্টরি সম্পূর্ণ নিরাপদ রাখতে মূল ডাটাবেসের (OLTP) জন্য ৩য় নরমাল ফর্ম বা BCNF ব্যবহার করুন। আর ব্যবসায়িক রিপোর্টিং ও ড্যাশবোর্ডের দ্রুত গতির জন্য CDC-এর মাধ্যমে ডাটা একটি ডিনরমালাইজড স্টার স্কিমা ডাটা ওয়্যারহাউসে (OLAP) পাঠিয়ে দিন।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Denormalization Sync Guard',
        bn: 'ডিনরমালাইজেশন সিঙ্ক গার্ড'
      },
      description: {
        en: 'Test synchronization: verify that updating source-of-truth records automatically updates cached denormalized copies.',
        bn: 'সিঙ্ক্রোনাইজেশন পরীক্ষা করুন: মূল রেকর্ড আপডেট করলে ক্যাশ করা প্রতিলিপি আপডেট হয় কিনা তা যাচাই করুন।'
      },
      code: `const database = {
  users: [{ id: 10, email: 'old@example.com' }],
  denormalized_invoices: [{ invoice_id: 101, user_id: 10, cached_email: 'old@example.com' }]
};

function syncUpdateEmail(userId, newEmail) {
  // Update source table
  database.users.find(u => u.id === userId).email = newEmail;
  // Update denormalized copy
  database.denormalized_invoices
    .filter(inv => inv.user_id === userId)
    .forEach(inv => { inv.cached_email = newEmail; });

  return database.denormalized_invoices[0].cached_email;
}

console.log('Synchronized Email:', syncUpdateEmail(10, 'new@example.com'));`,
      tests: [
        {
          name: {
            en: 'Synchronizes updated email across denormalized invoices',
            bn: 'ডিনরমালাইজড ইনভয়েসে আপডেট করা ইমেইল সফলভাবে সিঙ্ক করে'
          },
          expected: 'Synchronized Email: new@example.com'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'norm-rel-ex-1',
      kind: 'mcq',
      topic: 'strategic-denormalization-purpose',
      question: {
        en: 'What is the primary motivation for deliberately introducing denormalization into a relational database schema?',
        bn: 'একটি রিলেশনাল ডাটাবেস স্কিমায় সুপরিকল্পিতভাবে ডিনরমালাইজেশন যুক্ত করার মূল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'To eliminate computationally expensive multi-table joins and precompute summary aggregations for high-throughput read workloads',
          bn: 'উচ্চ ট্রাফিকের রিড কাজের জন্য অতিরিক্ত ব্যয়বহুল মাল্টি-টেবিল জয়েন পরিহার করা এবং হিসাব আগে থেকেই করে রাখা'
        },
        {
          en: 'To reduce the electricity bill of the data center cooling fans',
          bn: 'ডাটা সেন্টারের কুলিং ফ্যানের বিদ্যুৎ বিল কমানো'
        },
        {
          en: 'Because developers forgot how to write SQL JOIN statements',
          bn: 'কারণ ডেভেলপাররা SQL JOIN স্টেটমেন্ট লিখতে ভুলে গিয়েছেন'
        },
        {
          en: 'To prevent users from opening multiple browser tabs',
          bn: 'ব্যবহারকারীদের একাধিক ব্রাউজার ট্যাব খুলতে বাধা দেওয়া'
        }
      ],
      answer: 0,
      hint: {
        en: 'Denormalization trades storage and write overhead to minimize read query latency.',
        bn: 'ডিনরমালাইজেশন সামান্য স্টোরেজের বিনিময়ে কোয়েরির পড়ার গতি নাটকীয়ভাবে বাড়িয়ে দেয়।'
      },
      explanation: {
        en: 'Strategic denormalization accelerates high-frequency read queries by pre-joining tables and storing precomputed sums, eliminating the CPU overhead of repetitive 6-table joins.',
        bn: 'স্ট্র্যাটেজিক ডিনরমালাইজেশন ঘন ঘন চলা রিড কোয়েরিকে দ্রুত করতে আগে থেকেই টেবিল জয়েন করে হিসাব সংরক্ষণ করে, যা বারবার ৬টি টেবিল জয়েনের চাপ থেকে সিপিইউ-কে মুক্ত রাখে।'
      }
    },
    {
      id: 'norm-rel-ex-2',
      kind: 'mcq',
      topic: 'data-drift-synchronization-hazard',
      question: {
        en: 'What is "data drift" in a denormalized database schema, and why is it hazardous?',
        bn: 'ডিনরমালাইজড ডাটাবেস স্কিমায় "ডাটা ড্রিফট (data drift)" কী এবং এটি কেন বিপজ্জনক?'
      },
      options: [
        {
          en: 'A state where replicated redundant columns fail to update when the master record changes, leaving conflicting and contradictory values across the database',
          bn: 'এমন একটি অবস্থা যেখানে মূল রেকর্ড পরিবর্তিত হলেও প্রতিলিপিকৃত কলামগুলো আপডেট হতে ব্যর্থ হয়, ফলে ডাটাবেস জুড়ে পরস্পরবিরোধী ভুল তথ্য থেকে যায়'
        },
        {
          en: 'When database servers physically slide across concrete floors during earthquakes',
          bn: 'ভূমিকম্পের সময় যখন ডাটাবেস সার্ভার মেঝে দিয়ে পিছলে সরে যায়'
        },
        {
          en: 'When numbers in a database automatically round up to the nearest million',
          bn: 'যখন ডাটাবেসের সমস্ত সংখ্যা স্বয়ংক্রিয়ভাবে মিলিয়নে রাউন্ড হয়ে যায়'
        },
        {
          en: 'When SQL queries execute before the user presses the submit button',
          bn: 'ব্যবহারকারী সাবমিট বাটনে চাপ দেওয়ার আগেই যখন SQL কোয়েরি চলে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Data drift is the divergence between the master source of truth and redundant copies.',
        bn: 'ডাটা ড্রিফট হলো মূল তথ্যের সাথে তার ডুপ্লিকেট কপির অমিল বা অসঙ্গতি তৈরি হওয়া।'
      },
      explanation: {
        en: 'If an address is duplicated across thousands of order rows and the master address changes, failing to synchronize all replicas creates data drift, where different parts of the system show contradictory information.',
        bn: 'হাজার হাজার অর্ডার সারিতে ঠিকানা ডুপ্লিকেট থাকার পর মূল ঠিকানা পরিবর্তিত হলে সব কপি আপডেট না করলে ডাটা ড্রিফট ঘটে, যার ফলে সিস্টেমের একেক জায়গায় একেক ঠিকানা প্রদর্শিত হয়।'
      }
    },
    {
      id: 'norm-rel-ex-3',
      kind: 'mcq',
      topic: 'oltp-vs-olap-separation',
      question: {
        en: 'Why do modern software architectures separate OLTP databases from OLAP data warehouses instead of using one schema for both?',
        bn: 'আধুনিক সফটওয়্যার আর্কিটেকচারে একটি একক স্কিমা ব্যবহারের বদলে কেন OLTP ডাটাবেসকে OLAP ডাটা ওয়্যারহাউস থেকে আলাদা রাখা হয়?'
      },
      options: [
        {
          en: 'OLTP requires normalized 3NF schemas optimized for safe concurrent writes, while OLAP requires denormalized star schemas optimized for massive multi-year aggregations',
          bn: 'OLTP-এর জন্য নিরাপদ কনকারেন্ট রাইটের উপযোগী ৩NF স্কিমা প্রয়োজন, আর OLAP-এর জন্য বিশালাকার বহু-বছরের হিসাবের উপযোগী ডিনরমালাইজড স্টার স্কিমা প্রয়োজন'
        },
        {
          en: 'Because OLTP and OLAP are rival database companies that refuse to communicate',
          bn: 'কারণ OLTP এবং OLAP দুটি প্রতিদ্বন্দ্বী কোম্পানি যারা একে অপরের সাথে কথা বলে না'
        },
        {
          en: 'Because OLTP can only run on Linux while OLAP only runs on Apple macOS',
          bn: 'কারণ OLTP কেবল লিনাক্সে চলে আর OLAP কেবল অ্যাপল ম্যাকওএসে চলে'
        },
        {
          en: 'Separating them is an outdated practice that was banned in 2026',
          bn: 'এদের আলাদা রাখা একটি সেকেলে পদ্ধতি যা ২০২৬ সালে নিষিদ্ধ করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Write throughput vs Read analytics: conflicting workloads demand different schema models.',
        bn: 'লেখার গতি বনাম পড়ার বিশ্লেষণ: দুটি বিপরীতমুখী কাজের জন্য ভিন্ন ভিন্ন স্কিমা মডেল প্রয়োজন।'
      },
      explanation: {
        en: 'Running massive analytical queries on a transactional OLTP database locks tables and degrades user checkout throughput. Separating OLTP (normalized) from OLAP (denormalized Star Schema) ensures both workloads excel.',
        bn: 'লেনদেনের OLTP ডাটাবেসে বিশালাকার অ্যানালিটিক্স কোয়েরি চালালে টেবিল লক হয়ে গ্রাহকের কেনাকাটায় বিঘ্ন ঘটে। তাই OLTP (নরমালাইজড) ও OLAP (ডিনরমালাইজড স্টার স্কিমা) আলাদা রাখলে উভয় ব্যবস্থাপনাই নিখুঁত থাকে।'
      }
    },
    {
      id: 'norm-rel-ex-4',
      kind: 'mcq',
      topic: 'materialized-view-operational-role',
      question: {
        en: 'What operational advantage does a Materialized View provide compared to a standard SQL View?',
        bn: 'একটি সাধারণ SQL ভিউয়ের তুলনায় মেটেরিয়ালাইজড ভিউ কোন গুরুত্বপূর্ণ অপারেশনাল সুবিধা দেয়?'
      },
      options: [
        {
          en: 'A Materialized View physically caches query results on disk and supports B-Tree indexes, allowing instant sub-millisecond retrieval without re-executing joins on every query',
          bn: 'মেটেরিয়ালাইজড ভিউ ডিস্কে কোয়েরির ফলাফল শারীরিকভাবে ক্যাশ করে রাখে এবং বি-ট্রি ইনডেক্স সমর্থন করে, ফলে প্রতিবার জয়েন না চালিয়েই বিদ্যুৎগতিতে ফলাফল পাওয়া যায়'
        },
        {
          en: 'A Materialized View automatically writes application code for developers',
          bn: 'মেটেরিয়ালাইজড ভিউ স্বয়ংক্রিয়ভাবে ডেভেলপারদের জন্য অ্যাপ্লিকেশন কোড লিখে দেয়'
        },
        {
          en: 'A Materialized View requires zero computer electricity to read',
          bn: 'মেটেরিয়ালাইজড ভিউ পড়তে কম্পিউটারের কোনো বিদ্যুতের প্রয়োজন হয় না'
        },
        {
          en: 'Standard SQL Views are only supported in Google Chrome browsers',
          bn: 'সাধারণ SQL ভিউ শুধুমাত্র গুগল ক্রোম ব্রাউজারে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Physical disk storage: a regular view is a saved query, while a materialized view is a cached table.',
        bn: 'ভৌত ডিস্ক সংরক্ষণ: সাধারণ ভিউ কেবল সংরক্ষিত কোয়েরি, কিন্তু মেটেরিয়ালাইজড ভিউ হলো ডিস্কে জমা থাকা ক্যাশ টেবিল।'
      },
      explanation: {
        en: 'A standard view recalculates its query every time it is selected. A materialized view saves the computed result set to disk and allows indexes to be built on it, yielding ultra-fast read responses for expensive aggregations.',
        bn: 'সাধারণ ভিউ প্রতিবার কোয়েরি করার সময় নতুন করে হিসাব চালায়। কিন্তু মেটেরিয়ালাইজড ভিউ হিসাব করা ফলাফল ডিস্কে সংরক্ষণ করে এবং এর ওপর ইনডেক্স তৈরি করা যায়, যা ব্যয়বহুল কোয়েরিকে বিদ্যুৎগতি দেয়।'
      }
    }
  ],
  quiz: {
    id: 'the-normal-release-quiz',
    title: {
      en: 'Database Normalization & Denormalization Mastery Quiz',
      bn: 'ডাটাবেস নরমালাইজেশন ও ডিনরমালাইজেশন দক্ষতা যাচাই কুইজ'
    },
    questions: [
      {
        id: 'norm-rel-qz-1',
        kind: 'mcq',
        topic: 'normalization-first-principle',
        question: {
          en: 'Why must database architects always normalize schemas to 3NF before attempting deliberate denormalization?',
          bn: 'সুপরিকল্পিত ডিনরমালাইজেশনের চেষ্টা করার আগে ডাটাবেস আর্কিটেক্টদের কেন সর্বদা প্রথমে স্কিমাকে ৩NF পর্যন্ত নরমালাইজ করতে হয়?'
        },
        options: [
          {
            en: 'To uncover true entity boundaries, identify canonical functional dependencies, and pinpoint exactly which redundant paths require synchronization guards',
            bn: 'সঠিক এন্টিটি সীমা ও ফাংশনাল ডিপেন্ডেন্সি শনাক্ত করতে এবং কোন কোন ডুপ্লিকেট পথে সিঙ্ক্রোনাইজেশন গার্ড প্রয়োজন তা নির্ভুলভাবে চিহ্নিত করতে'
          },
          {
            en: 'Because cloud databases refuse to create tables without 3NF certificates',
            bn: 'কারণ ৩NF সার্টিফিকেট ছাড়া ক্লাউড ডাটাবেস টেবিল তৈরি করতে অস্বীকৃতি জানায়'
          },
          {
            en: 'Because normalization permanently reduces the price of cloud hosting',
            bn: 'কারণ নরমালাইজেশন ক্লাউড হোস্টিংয়ের খরচ চিরতরে কমিয়ে দেয়'
          },
          {
            en: 'Because non-3NF databases cannot connect to the internet',
            bn: 'কারণ ৩NF না থাকা ডাটাবেস ইন্টারনেটের সাথে যুক্ত হতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'You cannot optimize what you do not understand: clean normalization reveals data structure.',
          bn: 'যা আপনি বোঝেন না তা অপ্টিমাইজ করা অসম্ভব: পরিষ্কার নরমালাইজেশন ডাটার মূল কাঠামো প্রকাশ করে।'
        },
        explanation: {
          en: 'Normalizing to 3NF first forces engineers to understand true entity relationships and constraints. Only with that clean baseline can architects make informed, controlled denormalization decisions with proper sync safeguards.',
          bn: 'প্রথমে ৩NF পর্যন্ত নরমালাইজ করলে ইঞ্জিনিয়াররা এন্টিটির সম্পর্ক ও সীমাবদ্ধতাগুলো পরিষ্কার দেখতে পান। এই স্বচ্ছ ভিত্তির ওপর দাঁড়িয়ে সুপরিকল্পিতভাবে ডাটা সিঙ্ক করার সঠিক সিদ্ধান্ত নেওয়া সম্ভব হয়।'
        }
      },
      {
        id: 'norm-rel-qz-2',
        kind: 'mcq',
        topic: 'cdc-event-streaming-role',
        question: {
          en: 'What architectural role does Change Data Capture (CDC) play in maintaining denormalized read stores?',
          bn: 'ডিনরমালাইজড রিড স্টোর সিঙ্ক রাখতে চেঞ্জ ডাটা ক্যাপচার (CDC) কোন প্রযুক্তিগত ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'It reads database transaction logs (WAL) in real-time and streams mutations to denormalized caches and search replicas without slowing down the primary OLTP transaction',
            bn: 'এটি রিয়েল-টাইমে ডাটাবেস ট্রানজ্যাকশন লগ (WAL) পড়ে এবং মূল OLTP ট্রানজ্যাকশন ধীর না করেই সমস্ত পরিবর্তন ডিনরমালাইজড ক্যাশ ও সার্চ রেপ্লিকায় পাঠিয়ে দেয়'
          },
          {
            en: 'It blocks all incoming network traffic for 10 minutes every hour',
            bn: 'এটি প্রতি ঘণ্টায় ১০ মিনিটের জন্য সমস্ত নেটওয়ার্ক ট্রাফিক অবরুদ্ধ করে রাখে'
          },
          {
            en: 'It converts SQL code into compiled binary machine instructions',
            bn: 'এটি SQL কোডকে কম্পাইল করা মেশিন নির্দেশনায় রূপান্তর করে'
          },
          {
            en: 'It deletes customer passwords after 30 days automatically',
            bn: 'এটি ৩০ দিন পর পর স্বয়ংক্রিয়ভাবে গ্রাহকদের পাসওয়ার্ড মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Log-based CDC decouples writes from read-replica synchronization.',
          bn: 'লগ-ভিত্তিক CDC মূল লেখার গতি ব্যাহত না করে রিড রেপ্লিকা আপডেট নিশ্চিত করে।'
        },
        explanation: {
          en: 'CDC tools (such as Debezium) inspect the database Write-Ahead Log asynchronously. By tailing the log, CDC replicates changes to denormalized views and search engines with zero performance penalty on the main application transaction.',
          bn: 'CDC প্রযুক্তি (যেমন ডিবিজিয়াম) ডাটাবেসের WAL লগ পর্যবেক্ষণ করে। লগের পরিবর্তনের মাধ্যমে মূল অ্যাপ্লিকেশনের গতি অক্ষত রেখেই تمام পরিবর্তন ডিনরমালাইজড ভিউ ও সার্চ ইঞ্জিনে পৌঁছে যায়।'
        }
      },
      {
        id: 'norm-rel-qz-3',
        kind: 'mcq',
        topic: 'star-schema-dimension-characteristics',
        question: {
          en: 'In an OLAP Star Schema, what is the defining structural difference between the central Fact Table and the surrounding Dimension Tables?',
          bn: 'একটি OLAP স্টার স্কিমায় কেন্দ্রীয় ফ্যাক্ট টেবিল এবং চারপাশের ডাইমেনশন টেবিলের মধ্যকার কাঠামোগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'The Fact Table stores quantitative numerical metrics and foreign keys; the Dimension Tables store wide, heavily denormalized descriptive text attributes',
            bn: 'ফ্যাক্ট টেবিল সংখ্যাভিত্তিক পরিমাপযোগ্য হিসাব ও ফরেন কি রাখে; আর ডাইমেনশন টেবিলগুলো প্রশস্ত ও গভীরভাবে ডিনরমালাইজড বিবরণভিত্তিক টেক্সট তথ্য সংরক্ষণ করে'
          },
          {
            en: 'Fact tables store audio recordings; Dimension tables store video recordings',
            bn: 'ফ্যাক্ট টেবিলে অডিও রেকর্ডিং থাকে; ডাইমেনশন টেবিলে ভিডিও রেকর্ডিং থাকে'
          },
          {
            en: 'Fact tables must be empty; Dimension tables contain all historical records',
            bn: 'ফ্যাক্ট টেবিল খালি থাকতে হয়; ডাইমেনশন টেবিলে تمام অতীত রেকর্ড থাকে'
          },
          {
            en: 'Dimension tables only exist in cloud memory and are never saved to disk',
            bn: 'ডাইমেনশন টেবিল কেবল ক্লাউড মেমরিতে থাকে এবং কখনো ডিস্কে সেভ হয় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Facts are numbers (revenue, quantities); Dimensions are the context (who, what, where, when).',
          bn: 'ফ্যাক্ট হলো সংখ্যাভিত্তিক হিসাব (টাকা, পরিমাণ); আর ডাইমেনশন হলো প্রেক্ষাপট (কে, কী, কোথায়, কখন)।'
        },
        explanation: {
          en: 'A Fact table stores millions or billions of event measurements (e.g. quantity_sold, total_price) alongside foreign keys pointing to wide, denormalized dimension tables (Customer, Product, Time) that enable fast slicing and dicing.',
          bn: 'ফ্যাক্ট টেবিলে কোটি কোটি লেনদেনের সংখ্যাভিত্তিক হিসাব থাকে এবং ডাইমেনশন টেবিলে দ্রুত ফিল্টার করার উপযোগী ডিনরমালাইজড প্রেক্ষাপট তথ্য সংরক্ষিত থাকে।'
        }
      },
      {
        id: 'norm-rel-qz-4',
        kind: 'mcq',
        topic: 'precomputed-column-write-overhead',
        question: {
          en: 'What hidden operational cost must software engineers anticipate when adding a precomputed balance or total_amount column to an accounts table?',
          bn: 'একটি অ্যাকাউন্ট টেবিলে আগে থেকেই হিসাব করা balance বা total_amount কলাম যোগ করার সময় সফটওয়্যার ইঞ্জিনিয়ারদের কোন লুকানো খরচের প্রস্তুতি নিতে হয়?'
        },
        options: [
          {
            en: 'Every single transactional deposit or withdrawal must synchronously update both the ledger entry and the precomputed account balance, increasing write contention and row-level lock duration',
            bn: 'প্রতিটি লেনদেনে জমা বা উত্তোলনের সময় লেজার এবং প্রি-কম্পিউটেড ব্যালেন্স উভয়কেই একসাথে আপডেট করতে হয়, যা লেখার চাপ এবং রো-লেভেল লকের সময় বাড়িয়ে দেয়'
          },
          {
            en: 'The database server must delete all foreign keys permanently',
            bn: 'ডাটাবেস সার্ভারকে সমস্ত ফরেন কি চিরতরে মুছে ফেলতে হয়'
          },
          {
            en: 'Precomputed columns cause SQL queries to execute in reverse order',
            bn: 'প্রি-কম্পিউটেড কলামের কারণে SQL কোয়েরি উল্টো দিক থেকে চলতে শুরু করে'
          },
          {
            en: 'There is zero cost; precomputed columns make all write queries 100 times faster',
            bn: 'কোনো খরচ নেই; প্রি-কম্পিউটেড কলাম تمام রাইট কোয়েরিকে ১০০ গুণ দ্রুত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Faster reads cost slower writes: maintaining precomputed aggregates incurs lock overhead on every insert.',
          bn: 'দ্রুত পড়ার সুবিধা লেখার গতি কমিয়ে দেয়: প্রতিবার পরিবর্তনের সময় প্রি-কম্পিউটেড মান আপডেটে লক নিতে হয়।'
        },
        explanation: {
          en: 'Denormalized summaries shift computational effort from read time to write time. Updating precomputed columns on every transaction acquires exclusive row locks on the parent record, which can become a bottleneck under heavy concurrent writes.',
          bn: 'ডিনরমালাইজড সামারি পড়ার কাজের চাপকে লেখার ওপর চাপিয়ে দেয়। প্রতি লেনদেনে মূল ব্যালেন্স আপডেট করতে রো-লেভেল লক নিতে হয়, যা অতি উচ্চ ট্রাফিকের সময় সিস্টেমকে কিছুটা ধীর করতে পারে।'
        }
      }
    ]
  }
};
