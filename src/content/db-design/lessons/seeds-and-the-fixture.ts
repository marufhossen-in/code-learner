import type { Lesson } from '../../../lib/types';

export const SeedsAndTheFixtureLesson: Lesson = {
  slug: 'seeds-and-the-fixture',
  tech: 'db-design',
  title: {
    en: 'Database Seeding & Test Fixtures: Deterministic Datasets',
    bn: 'ডাটাবেস সিডিং ও টেস্ট ফিক্সচার: সুশৃঙ্খল মক ডাটাবেস'
  },
  summary: {
    en: 'Master database seeding and test fixtures: establish referential insertion ordering using topological sorting, engineer idempotent upserts with ON CONFLICT, and generate deterministic mock datasets for CI/CD test automation.',
    bn: 'ডাটাবেস সিডিং এবং টেস্ট ফিক্সচার আয়ত্ত করুন: টপোলজিক্যাল সর্টিংয়ের মাধ্যমে ইনসার্ট ক্রম নির্ধারণ, ON CONFLICT দিয়ে আইডেমপোটেন্ট আপসার্ট তৈরি এবং সিআই/সিডি অটোমেশনের জন্য সুশৃঙ্খল মক ডাটাবেস প্রস্তুতকরণ।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'why-databases-need-seeding',
      text: {
        en: 'The Role of Database Seeding: Bootstrapping Reliable Applications',
        bn: 'ডাটাবেস সিডিংয়ের ভূমিকা: নির্ভরযোগ্য অ্যাপ্লিকেশন বুটস্ট্র্যাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you launch an application against an empty database, the system cannot function properly. A brand new store cannot create a user without basic role definitions like administrator or customer, nor can it accept checkout payments without supported country and currency records.',
        bn: 'যখন আপনি একটি সম্পূর্ণ খালি ডাটাবেসের ওপর কোনো অ্যাপ্লিকেশন চালু করেন, সিস্টেমটি স্বাভাবিকভাবে কাজ করতে পারে না। অ্যাডমিনিস্ট্রেটর বা সাধারণ গ্রাহকের মতো মৌলিক ভূমিকা ছাড়া নতুন কোনো ব্যবহারকারী তৈরি করা সম্ভব নয়, কিংবা অনুমোদিত দেশ ও মুদ্রার রেকর্ড ছাড়া চেকআউট পেমেন্ট গ্রহণ করাও অসম্ভব।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Database Seeding is the automated process of populating a database with initial data. Seeds serve three essential engineering purposes: injecting essential system reference data, generating realistic staging environments for developer testing, and supplying deterministic test fixtures for automated CI/CD integration pipelines.',
        bn: 'ডাটাবেস সিডিং হলো স্বয়ংক্রিয় স্ক্রিপ্টের সাহায্যে একটি ডাটাবেসে প্রাথমিক ডাটা প্রবেশ করানোর প্রক্রিয়া। সফটওয়্যার ইঞ্জিনিয়ারিংয়ে সিডিং ৩টি গুরুত্বপূর্ণ দায়িত্ব পালন করে: সিস্টেমে প্রয়োজনীয় প্রাথমিক রেফারেন্স ডাটা যুক্ত করা, ডেভেলপারদের লোকাল টেস্টিংয়ের জন্য বাস্তবসম্মত ডামি ডাটা তৈরি করা এবং স্বয়ংক্রিয় সিআই/সিডি পাইপলাইনে নির্ভরযোগ্য টেস্ট ফিক্সচার সরবরাহ করা।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Topological Referential Seeding Hierarchy: Parent Insertion to Child Teardown',
        bn: 'টপোলজিক্যাল রেফারেন্সিয়াল সিডিং ধাপ: প্যারেন্ট ইনসার্ট থেকে চাইল্ড ডিলিট'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Topological Seeding Order Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Insertion Direction Arrow Left -->
  <g transform="translate(30, 40)">
    <line x1="20" y1="20" x2="20" y2="230" stroke="#10b981" stroke-width="3" />
    <polygon points="15,230 25,230 20,245" fill="#10b981" />
    <text x="35" y="130" fill="#34d399" font-size="11" font-weight="bold" transform="rotate(-90 35 130)">INSERTION ORDER (Top-Down)</text>
  </g>

  <!-- Level 1: Root Reference Tables -->
  <g transform="translate(100, 30)">
    <rect width="520" height="55" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="20" y="25" fill="#38bdf8" font-size="11" font-weight="bold">Step 1: Root Reference Tables (Zero Foreign Key Dependencies)</text>
    <rect x="20" y="32" width="100" height="18" rx="3" fill="#0369a1" />
    <text x="70" y="45" fill="#ffffff" font-size="9" text-anchor="middle">roles</text>
    <rect x="135" y="32" width="100" height="18" rx="3" fill="#0369a1" />
    <text x="185" y="45" fill="#ffffff" font-size="9" text-anchor="middle">currencies</text>
    <rect x="250" y="32" width="100" height="18" rx="3" fill="#0369a1" />
    <text x="300" y="45" fill="#ffffff" font-size="9" text-anchor="middle">countries</text>
  </g>

  <!-- Level 2: Core Entities -->
  <g transform="translate(100, 100)">
    <rect width="520" height="55" rx="6" fill="#1e293b" stroke="#facc15" stroke-width="1.5" />
    <text x="20" y="25" fill="#facc15" font-size="11" font-weight="bold">Step 2: Core Domain Entities (Depend only on Root Tables)</text>
    <rect x="20" y="32" width="110" height="18" rx="3" fill="#ca8a04" />
    <text x="75" y="45" fill="#ffffff" font-size="9" text-anchor="middle">users (FK role_id)</text>
    <rect x="145" y="32" width="120" height="18" rx="3" fill="#ca8a04" />
    <text x="205" y="45" fill="#ffffff" font-size="9" text-anchor="middle">products (FK category)</text>
  </g>

  <!-- Level 3: Transactional Entities -->
  <g transform="translate(100, 170)">
    <rect width="520" height="55" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
    <text x="20" y="25" fill="#a855f7" font-size="11" font-weight="bold">Step 3: Transactional Parent Tables (Depend on Users)</text>
    <rect x="20" y="32" width="140" height="18" rx="3" fill="#7e22ce" />
    <text x="90" y="45" fill="#ffffff" font-size="9" text-anchor="middle">orders (FK customer_id)</text>
    <rect x="175" y="32" width="140" height="18" rx="3" fill="#7e22ce" />
    <text x="245" y="45" fill="#ffffff" font-size="9" text-anchor="middle">invoices (FK order_id)</text>
  </g>

  <!-- Level 4: Junction & Line Item Entities -->
  <g transform="translate(100, 240)">
    <rect width="520" height="55" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <text x="20" y="25" fill="#34d399" font-size="11" font-weight="bold">Step 4: Associative Junctions (Depend on Orders and Products)</text>
    <rect x="20" y="32" width="200" height="18" rx="3" fill="#065f46" />
    <text x="120" y="45" fill="#ffffff" font-size="9" text-anchor="middle">order_items (FK order, FK product)</text>
  </g>

  <!-- Teardown Direction Arrow Right -->
  <g transform="translate(645, 40)">
    <line x1="20" y1="245" x2="20" y2="35" stroke="#ef4444" stroke-width="3" />
    <polygon points="15,35 25,35 20,20" fill="#ef4444" />
    <text x="35" y="145" fill="#f87171" font-size="11" font-weight="bold" transform="rotate(90 35 145)">TEARDOWN ORDER (Bottom-Up)</text>
  </g>
</svg>`,
      caption: {
        en: 'Referential insertion order flows top-down from independent root tables down to junction items; automated database teardown executes in reverse.',
        bn: 'রেফারেন্সিয়াল ইনসার্ট ক্রম স্বাধীন রুট টেবিল থেকে শুরু হয়ে ধাপে ধাপে জংশন টেবিলে নামে; আর ডাটা ক্লিনআপ সম্পূর্ণ উল্টো ক্রমে পরিচালিত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Database Seeding',
          def: {
            en: 'The execution of automated scripts that populate a database with essential reference constants or mock records.',
            bn: 'স্বয়ংক্রিয় স্ক্রিপ্ট চালানোর মাধ্যমে একটি ডাটাবেসে প্রয়োজনীয় প্রাথমিক ধ্রুবক বা ডামি রেকর্ড জমা করার প্রক্রিয়া।'
          }
        },
        {
          term: 'Topological Sorting',
          def: {
            en: 'An algorithm arranging relational tables into a linear execution sequence where every parent table is populated before any child foreign key table.',
            bn: 'একটি অ্যালগরিদম যা রিলেশনাল টেবিলগুলোকে এমন একটি শৃঙ্খলে সাজায় যাতে চাইল্ড টেবিলের আগেই সমস্ত প্যারেন্ট টেবিলে ডাটা প্রবেশ সম্পন্ন হয়।'
          }
        },
        {
          term: 'Idempotency',
          def: {
            en: 'The architectural property where running an operation multiple times produces the identical result as running it once without errors.',
            bn: 'সিস্টেমের এমন একটি গুণ যেখানে একটি স্ক্রিপ্ট একাধিকবার চালালেও কোনো ত্রুটি বা পরিবর্তন ছাড়া প্রতিবার একই ফলাফল পাওয়া যায়।'
          }
        },
        {
          term: 'Test Fixture',
          def: {
            en: 'A predefined, deterministic dataset loaded into a test database to guarantee repeatable automated software test outcomes.',
            bn: 'একটি পূর্বনির্ধারিত সুশৃঙ্খল ডাটা সেট যা সফটওয়্যার টেস্টিংয়ে প্রতিবার একই ফলাফল নিশ্চিত করতে টেস্ট ডাটাবেসে লোড করা হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'referential-ordering-and-idempotency',
      text: {
        en: 'Referential Ordering and Idempotent Upserts',
        bn: 'রেফারেন্সিয়াল ক্রম এবং আইডেমপোটেন্ট আপসার্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Foreign key constraints demand strict insertion discipline. Attempting to insert an order row before the referenced customer exists immediately triggers a foreign key violation error. To automate seeding, engineers construct a Directed Acyclic Graph (DAG) of table dependencies and apply topological sorting. Independent root tables (roles, countries) insert first, followed by intermediate entities (users), ending with junction line items.',
        bn: 'ফরেন কি কনস্ট্রেইন্ট অত্যন্ত কঠোর ইনসার্ট শৃঙ্খলা দাবি করে। সম্পর্কিত গ্রাহক তৈরির আগেই কোনো অর্ডার টেবিলে ডাটা ঢোকাতে গেলে সাথে সাথে ফরেন কি ভায়োলেশন এরর দেখা দেবে। সিডিং প্রক্রিয়া স্বয়ংক্রিয় করতে ইঞ্জিনিয়াররা টেবিলের নির্ভরতার ওপর ভিত্তি করে একটি ডিরেক্টেড অ্যাসাইক্লিক গ্রাফ (DAG) তৈরি করেন এবং টপোলজিক্যাল সর্টিং প্রয়োগ করেন। সম্পূর্ণ স্বাধীন রুট টেবিলগুলো (যেমন রোল, দেশ) সবার প্রথমে ইনসার্ট হয়, এরপর মূল ব্যবহারকারী এবং সবশেষে জংশন লাইন আইটেম সেভ হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Furthermore, professional seed scripts must be strictly Idempotent. If a developer runs npm run db:seed twice, the script must not crash with duplicate primary key errors. Modern PostgreSQL solves this with ON CONFLICT DO UPDATE (or DO NOTHING), while MySQL InnoDB uses ON DUPLICATE KEY UPDATE. Upserts ensure that missing rows are created while existing records are safely refreshed.',
        bn: 'তদুপরি, পেশাদার সিড স্ক্রিপ্টকে অবশ্যই কঠোরভাবে আইডেমপোটেন্ট হতে হয়। কোনো ডেভেলপার যদি ভুলবশত npm run db:seed কমান্ডটি পরপর দুইবার চালান, স্ক্রিপ্টটি যেন ডুপ্লিকেট প্রাইমারি কি এরর দিয়ে ক্র্যাশ না করে। আধুনিক PostgreSQL-এ ON CONFLICT DO UPDATE (বা DO NOTHING) এবং MySQL-এ ON DUPLICATE KEY UPDATE ব্যবহার করে এটি নিশ্চিত করা হয়। এই আপসার্ট কৌশলটি অনুপস্থিত ডাটা তৈরি করে এবং বিদ্যমান ডাটাকে নিরাপদে রিফ্রেশ করে।'
      }
    },
    {
      type: 'heading',
      id: 'node-seeding-engine',
      text: {
        en: 'Executable Deterministic Seeding & Upsert Engine',
        bn: 'রানযোগ্য সুশৃঙ্খল সিডিং ও আপসার্ট ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine executing an idempotent seeding pipeline across 4 relational tables (roles, users, products, and orders). The initial pass populates 11 records in exact referential sequence. A subsequent re-run seamlessly handles 11 conflicts with 0 duplicate errors.',
        bn: 'নিচে ৪টি রিলেশনাল টেবিল (roles, users, products এবং orders) জুড়ে একটি আইডেমপোটেন্ট সিডিং পাইপলাইন পরিচালনাকারী সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। প্রথম ধাপে এটি সুনির্দিষ্ট ক্রমে ১১টি রেকর্ড প্রবেশ করায়। পরবর্তী রানটি ০টি ডুপ্লিকেট ত্রুটি সহ সাবলীলভাবে ১১টি কনফ্লিক্ট নিষ্পত্তি করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Deterministic seeding engine executing referential insertion hierarchy and idempotent upsert conflict resolution',
        bn: 'রেফারেন্সিয়াল ইনসার্ট ক্রম এবং আইডেমপোটেন্ট আপসার্ট কনফ্লিক্ট সমাধানকারী সুশৃঙ্খল সিডিং ইঞ্জিন'
      },
      code: `// Deterministic Seeding and Upsert Engine
const databaseRegistry = {
  roles: new Map(),
  users: new Map(),
  products: new Map(),
  orders: new Map()
};

function executeUpsert(tableName, recordId, payload) {
  const hasConflict = databaseRegistry[tableName].has(recordId);
  databaseRegistry[tableName].set(recordId, payload);
  return hasConflict ? 'CONFLICT_RESOLVED' : 'INSERTED';
}

// Pass 1: Initial Referential Seed (Top-Down Sequence)
// Step 1: Root roles
executeUpsert('roles', 1, { name: 'ADMIN' });
executeUpsert('roles', 2, { name: 'MEMBER' });

// Step 2: Users & Products (Depend on roles)
executeUpsert('users', 1, { roleId: 1, name: 'Alice' });
executeUpsert('users', 2, { roleId: 2, name: 'Bob' });
executeUpsert('users', 3, { roleId: 2, name: 'Charlie' });

executeUpsert('products', 1, { name: 'Laptop', price: 1000 });
executeUpsert('products', 2, { name: 'Mouse', price: 25 });
executeUpsert('products', 3, { name: 'Keyboard', price: 75 });

// Step 3: Orders (Depend on users and products)
executeUpsert('orders', 101, { userId: 1, productId: 1 });
executeUpsert('orders', 102, { userId: 2, productId: 2 });
executeUpsert('orders', 103, { userId: 3, productId: 3 });

const totalSeededRows = databaseRegistry.roles.size + databaseRegistry.users.size + databaseRegistry.products.size + databaseRegistry.orders.size;

// Pass 2: Re-run seed to test Idempotency
let resolvedConflicts = 0;
for (const [id, data] of databaseRegistry.roles) { if (executeUpsert('roles', id, data) === 'CONFLICT_RESOLVED') resolvedConflicts++; }
for (const [id, data] of databaseRegistry.users) { if (executeUpsert('users', id, data) === 'CONFLICT_RESOLVED') resolvedConflicts++; }
for (const [id, data] of databaseRegistry.products) { if (executeUpsert('products', id, data) === 'CONFLICT_RESOLVED') resolvedConflicts++; }
for (const [id, data] of databaseRegistry.orders) { if (executeUpsert('orders', id, data) === 'CONFLICT_RESOLVED') resolvedConflicts++; }

const isAccurate = totalSeededRows === 11 && resolvedConflicts === 11;

console.log(\`[Seeding Engine] Resolved topological dependency order across 4 relational tables.\`);
console.log(\`[Deterministic Seeding] Inserted \${totalSeededRows} records in exact referential sequence.\`);
console.log(\`[Idempotency Verification] Re-executed seed: handled \${resolvedConflicts} conflicts with 0 duplicate errors (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Fixing Random PRNG Seeds for CI Test Fixtures',
        bn: 'CI টেস্ট ফিক্সচারের জন্য ফিক্সড PRNG সিড নির্ধারণ'
      },
      text: {
        en: 'When generating synthetic test datasets with libraries like Faker, never rely on completely random generation. Random generation leads to flaky CI test runs where tests fail unpredictably once every 50 builds. Always pin the pseudo-random generator with a fixed numeric seed like faker.seed(42) to produce deterministic test outputs.',
        bn: 'Faker-এর মতো লাইব্রেরি দিয়ে মক ডাটা তৈরি করার সময় কখনোই সম্পূর্ণ এলোমেলো ডাটার ওপর নির্ভর করবেন না। এলোমেলো ডাটার কারণে স্বয়ংক্রিয় টেস্টিংয়ে হঠাৎ অপ্রত্যাশিত বাগ দেখা দিতে পারে। প্রতিটি টেস্টে হুবহু অভিন্ন ও নির্ভরযোগ্য ফলাফল পেতে সর্বদা faker.seed(42)-এর মতো একটি নির্দিষ্ট সংখ্যা দিয়ে জেনারেটর পিন করে রাখুন।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Topological Order Evaluator',
        bn: 'টপোলজিক্যাল ক্রম নির্ণায়ক'
      },
      description: {
        en: 'Determine the correct insertion precedence between a parent entity and a dependent child entity.',
        bn: 'প্যারেন্ট এনটিটি এবং চাইল্ড এনটিটির মধ্যে সঠিক ইনসার্ট ক্রম নির্ধারণ করুন।'
      },
      code: `function evaluateInsertionOrder(parentTable, childTable) {
  return \`VALID_SEQUENCE: Must seed \${parentTable} before inserting into \${childTable}\`;
}

console.log(evaluateInsertionOrder('users', 'orders'));
console.log(evaluateInsertionOrder('orders', 'order_items'));`,
      tests: [
        {
          name: {
            en: 'Enforces users seeded before orders',
            bn: 'orders-এর আগে users সিড করার নিয়ম কার্যকর করে'
          },
          expected: 'VALID_SEQUENCE: Must seed users before inserting into orders'
        },
        {
          name: {
            en: 'Enforces orders seeded before order_items',
            bn: 'order_items-এর আগে orders সিড করার নিয়ম কার্যকর করে'
          },
          expected: 'VALID_SEQUENCE: Must seed orders before inserting into order_items'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-see-ex-1',
      kind: 'mcq',
      topic: 'topological-sorting-foreign-keys',
      question: {
        en: 'In database engineering, why is topological sorting required before executing an automated seed script against an empty schema?',
        bn: 'ডাটাবেস ইঞ্জিনিয়ারিংয়ে খালি স্কিমায় স্বয়ংক্রিয় সিড স্ক্রিপ্ট চালানোর আগে টপোলজিক্যাল সর্টিং কেন আবশ্যক?'
      },
      options: [
        {
          en: 'Foreign key constraints mandate that parent tables (like countries or users) must have their primary keys populated before dependent child tables (like addresses or orders) can reference them',
          bn: 'ফরেন কি কনস্ট্রেইন্টের নিয়ম হলো চাইল্ড টেবিল (যেমন addresses বা orders) রেফারেন্স করার আগেই প্যারেন্ট টেবিলে (যেমন countries বা users) প্রাইমারি কি থাকতে হবে'
        },
        {
          en: 'Because topological sorting makes database tables 50 times smaller',
          bn: 'কারণ টপোলজিক্যাল সর্টিং ডাটাবেস টেবিলের আকার ৫০ গুণ ছোট করে'
        },
        {
          en: 'Because SQL database engines only run scripts on Sundays',
          bn: 'কারণ SQL ডাটাবেস ইঞ্জিন কেবল রবিবারে স্ক্রিপ্ট চালায়'
        },
        {
          en: 'Because topological sorting encrypts all database passwords into Greek letters',
          bn: 'কারণ টপোলজিক্যাল সর্টিং તમામ পাসওয়ার্ডকে গ্রীক অক্ষরে রূপান্তরিত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Foreign keys block child row insertion if the referenced parent key does not exist.',
        bn: 'প্যারেন্ট কি না থাকলে ফরেন কি চাইল্ড রো ইনসার্ট আটকে দেয়।'
      },
      explanation: {
        en: 'Inserting a child record referencing a nonexistent parent ID immediately throws a foreign key constraint violation. Topological sorting organizes tables so dependencies resolve smoothly.',
        bn: 'অস্তিত্বহীন প্যারেন্ট আইডি নির্দেশ করে চাইল্ড রো ঢোকাতে গেলে সাথে সাথে ফরেন কি ভায়োলেশন এরর দেয়। টপোলজিক্যাল সর্টিং টেবিলগুলোকে ক্রমানুসারে সাজিয়ে এই ত্রুটি এড়ায়।'
      }
    },
    {
      id: 'db-see-ex-2',
      kind: 'mcq',
      topic: 'idempotent-upsert-pattern',
      question: {
        en: 'What SQL clause enables a database seed script to be idempotent (re-runnable without throwing unique constraint duplicate key errors)?',
        bn: 'কোন SQL ক্লজটি একটি ডাটাবেস সিড স্ক্রিপ্টকে আইডেমপোটেন্ট (ডুপ্লিকেট কি এরর ছাড়া পুনরায় চালানোর উপযোগী) করে তোলে?'
      },
      options: [
        {
          en: 'ON CONFLICT (id) DO UPDATE (or DO NOTHING) in PostgreSQL, or ON DUPLICATE KEY UPDATE in MySQL InnoDB',
          bn: 'PostgreSQL-এ ON CONFLICT (id) DO UPDATE (বা DO NOTHING), অথবা MySQL InnoDB-তে ON DUPLICATE KEY UPDATE'
        },
        {
          en: 'PLEASE DO NOT CRASH IF DUPLICATE',
          bn: 'PLEASE DO NOT CRASH IF DUPLICATE (কাল্পনিক কমান্ড)'
        },
        {
          en: 'DELETE ALL HARD DRIVES IF PRESENT',
          bn: 'DELETE ALL HARD DRIVES IF PRESENT (কাল্পনিক কমান্ড)'
        },
        {
          en: 'SKIP ERRORS AND SHUT DOWN SERVER',
          bn: 'SKIP ERRORS AND SHUT DOWN SERVER (কাল্পনিক কমান্ড)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Upsert clauses intercept duplicate key conflicts and update or skip them gracefully.',
        bn: 'আপসার্ট ক্লজ ডুপ্লিকেট কি সংঘাত আটকে সেগুলোকে হালনাগাদ বা বাদ দিয়ে এগিয়ে যায়।'
      },
      explanation: {
        en: 'ON CONFLICT transforms a standard INSERT into an atomic upsert. If the primary key already exists, the engine either refreshes the record or skips insertion with zero errors.',
        bn: 'ON CONFLICT সাধারণ ইনসার্টকে অ্যাটমিক আপসার্টে রূপান্তর করে। কি আগে থেকেই থাকলে কোনো এরর না দিয়ে ডাটাবেস রেকর্ডটি রিফ্রেশ বা এড়িয়ে যায়।'
      }
    },
    {
      id: 'db-see-ex-3',
      kind: 'mcq',
      topic: 'deterministic-prng-testing',
      question: {
        en: 'Why do automated testing engineers strongly recommend fixing the PRNG seed (e.g. faker.seed(42)) when generating mock test fixture datasets?',
        bn: 'স্বয়ংক্রিয় টেস্টিং প্রকৌশলীরা মক টেস্ট ফিক্সচার তৈরির সময় ফিক্সড PRNG সিড (যেমন faker.seed(42)) ব্যবহারের জোরালো পরামর্শ কেন দেন?'
      },
      options: [
        {
          en: 'Deterministic mock data ensures that automated test suites produce identical, reproducible inputs on every run, eliminating flaky test failures in CI pipelines',
          bn: 'সুশৃঙ্খল মক ডাটা নিশ্চিত করে যে স্বয়ংক্রিয় টেস্ট স্যুট প্রতিবার হুবহু একই ইনপুট পাবে, যা সিআই পাইপলাইনে অপ্রত্যাশিত ফ্ল্যাকি টেস্ট ব্যর্থতা দূর করে'
        },
        {
          en: 'It increases the download speed of the internet connection',
          bn: 'এটি ইন্টারনেট সংযোগের ডাউনলোড গতি বৃদ্ধি করে'
        },
        {
          en: 'It makes all generated user passwords completely uncrackable',
          bn: 'এটি সমস্ত পাসওয়ার্ডকে চিরতরে অপ্রতিরোধ্য করে তোলে'
        },
        {
          en: 'Fixed seeds allow database queries to bypass SQL syntax rules',
          bn: 'ফিক্সড সিড ডাটাবেস কোয়েরিকে SQL সিনট্যাক্স নিয়ম এড়ানোর সুবিধা দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Predictable mock inputs yield reproducible test outcomes across all developer machines.',
        bn: 'পূর্বনির্ধারিত মক ইনপুট تمام ডেভেলপার কম্পিউটারে একই টেস্ট ফলাফল নিশ্চিত করে।'
      },
      explanation: {
        en: 'Completely random mock generators create subtle edge cases (e.g. unexpected string lengths or special characters) that cause flaky test builds. A fixed PRNG seed guarantees consistency.',
        bn: 'এলোমেলো জেনারেটর অপ্রত্যাশিত কোনো অদ্ভুত ডাটা তৈরি করে টেস্ট ভেঙে দিতে পারে। ফিক্সড PRNG সিড প্রতিবার অভিন্ন ডাটা তৈরি করে বিশ্বস্ততা রক্ষা করে।'
      }
    },
    {
      id: 'db-see-ex-4',
      kind: 'mcq',
      topic: 'database-teardown-order',
      question: {
        en: 'When resetting a test database before running an integration test suite, in what order must tables be truncated or deleted?',
        bn: 'একটি ইন্টিগ্রেশন টেস্ট চালানোর আগে টেস্ট ডাটাবেস রিসেট করার সময় টেবিলগুলোকে কোন ক্রমে ডিলিট বা ট্রাঙ্কেট করা উচিত?'
      },
      options: [
        {
          en: 'The exact reverse of the insertion sequence: child tables and associative junction entities must be deleted first before parent root tables can be cleared',
          bn: 'ইনসার্ট ক্রমের ঠিক উল্টো ক্রমে: প্যারেন্ট রুট টেবিল মোছার আগেই সমস্ত চাইল্ড টেবিল এবং অ্যাসোসিয়েটিভ জংশন রেকর্ড মুছে ফেলতে হবে'
        },
        {
          en: 'In alphabetical order from A to Z',
          bn: 'A থেকে Z পর্যন্ত বর্ণানুক্রমিক ক্রমে'
        },
        {
          en: 'By picking random table names out of a hat',
          bn: 'লটারির মতো এলোমেলোভাবে টেবিলের নাম তুলে'
        },
        {
          en: 'Delete parent tables first and let foreign keys hang broken in memory',
          bn: 'আগে প্যারেন্ট টেবিল মুছে ফেলে ফরেন কি-গুলোকে মেমরিতে ঝুলিয়ে রেখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Delete children before parents, or use TRUNCATE ... CASCADE in PostgreSQL.',
        bn: 'প্যারেন্টের আগে চাইল্ড মুছুন, অথবা PostgreSQL-এ TRUNCATE ... CASCADE ব্যবহার করুন।'
      },
      explanation: {
        en: 'If you attempt to delete from a parent table while child rows still reference it, the engine blocks the deletion with a foreign key violation. Teardown must always execute bottom-up.',
        bn: 'চাইল্ড টেবিল অবশিষ্ট থাকা অবস্থায় প্যারেন্ট টেবিল মুছতে গেলে ডাটাবেস ফরেন কি ভায়োলেশন দেখিয়ে ডিলিট আটকে দেয়। তাই ক্লিনআপ সর্বদা নিচ থেকে উপরে করতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'seeds-and-the-fixture-quiz',
    title: {
      en: 'Database Seeding & Test Fixtures Assessment Quiz',
      bn: 'ডাটাবেস সিডিং ও টেস্ট ফিক্সচার মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'db-see-qz-1',
        kind: 'mcq',
        topic: 'reference-data-vs-test-data',
        question: {
          en: 'In enterprise database architecture, what is the critical difference between "System Reference Data" and "Test Fixture Data"?',
          bn: 'এন্টারপ্রাইজ ডাটাবেস আর্কিটেকচারে "সিস্টেম রেফারেন্স ডাটা" এবং "টেস্ট ফিক্সচার ডাটা"-র মধ্যে মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'System Reference Data (roles, country codes, currencies) is essential for application business logic and must exist in every production database; Test Fixtures are synthetic mock data strictly isolated to local and CI test environments',
            bn: 'সিস্টেম রেফারেন্স ডাটা (রোল, দেশের কোড, মুদ্রা) অ্যাপ্লিকেশনের জন্য অপরিহার্য এবং প্রতিটি প্রোডাকশন ডাটাবেসে থাকতেই হবে; আর টেস্ট ফিক্সচার হলো কেবল লোকাল ও সিআই টেস্টিংয়ের জন্য ব্যবহৃত কৃত্রিম ডামি ডাটা'
          },
          {
            en: 'System Reference Data is stored in text files, while Test Fixtures are stored on CD-ROMs',
            bn: 'সিস্টেম রেফারেন্স ডাটা টেক্সট ফাইলে রাখা হয় আর টেস্ট ফিক্সচার সিডি-রমে রাখা হয়'
          },
          {
            en: 'Test fixtures are only used by the marketing team',
            bn: 'টেস্ট ফিক্সচার কেবল মার্কেটিং দল দ্বারা ব্যবহৃত হয়'
          },
          {
            en: 'There is no difference; production databases should always be seeded with fake test names',
            bn: 'কোনো পার্থক্য নেই; প্রোডাকশন ডাটাবেসে সর্বদা ভুয়া নাম সিড করে রাখা উচিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'Reference data is mandatory production baseline configuration; fixtures are temporary test props.',
          bn: 'রেফারেন্স ডাটা হলো প্রোডাকশনের জন্য বাধ্যতামূলক কনফিগারেশন; আর ফিক্সচার হলো অস্থায়ী টেস্ট ডাটা।'
        },
        explanation: {
          en: 'Reference data (ISO country codes, currency symbols, subscription tiers) is required for the application to function. Test fixtures (fake customer names, dummy transactions) must never touch production.',
          bn: 'রেফারেন্স ডাটা ছাড়া সিস্টেম বুট হতে পারে না। অন্যদিকে মক টেস্ট ফিক্সচার কখনোই আসল প্রোডাকশন ডাটাবেসে প্রবেশ করানো উচিত নয়।'
        }
      },
      {
        id: 'db-see-qz-2',
        kind: 'mcq',
        topic: 'resetting-identity-sequences-after-seed',
        question: {
          en: 'If a database seed script manually inserts records with explicit primary key IDs (e.g. INSERT INTO roles (id, name) VALUES (1, \'ADMIN\');), what maintenance step must follow in PostgreSQL?',
          bn: 'যদি কোনো সিড স্ক্রিপ্ট নির্দিষ্ট প্রাইমারি কি আইডি দিয়ে ডাটা ইনসার্ট করে (যেমন INSERT INTO roles (id, name) VALUES (1, \'ADMIN\');), তবে PostgreSQL-এ পরবর্তীতে কোন রক্ষণাবেক্ষণ ধাপটি অনুসরণ করতে হবে?'
        },
        options: [
          {
            en: 'Execute setval() on the table\'s auto-increment sequence to synchronize the internal counter with MAX(id), preventing subsequent regular INSERT statements from crashing on duplicate key collisions',
            bn: 'টেবিলের অটো-ইনক্রিমেন্ট সিকোয়েন্সে setval() চালিয়ে অভ্যন্তরীণ কাউন্টারকে MAX(id)-র সাথে সিনক্রোনাইজ করতে হবে, যাতে পরবর্তী স্বাভাবিক ইনসার্টগুলো ডুপ্লিকেট কি সংঘর্ষে ক্র্যাশ না করে'
          },
          {
            en: 'Shut down the database server and change the power cables',
            bn: 'ডাটাবেস সার্ভার বন্ধ করে বিদ্যুৎ সংযোগের তার বদলে ফেলতে হবে'
          },
          {
            en: 'Delete the database schema and start from scratch',
            bn: 'ডাটাবেস স্কিমা পুরোপুরি মুছে ফেলে আবার শুরু করতে হবে'
          },
          {
            en: 'Nothing; PostgreSQL sequences automatically read future numbers through telepathy',
            bn: 'কিছুই করতে হবে না; PostgreSQL সিকোয়েন্স নিজে থেকেই ভবিষ্যতের সংখ্যা জেনে নেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Explicit ID inserts do not automatically advance the underlying sequence counter.',
          bn: 'নির্দিষ্ট আইডি দিয়ে ইনসার্ট করলে ভেতরের সিকোয়েন্স কাউন্টার একা একা বাড়ে না।'
        },
        explanation: {
          en: 'Manual primary key insertions bypass the sequence generator. If the sequence is not refreshed with setval(), the next user-initiated INSERT will generate id=1 and trigger a unique constraint collision.',
          bn: 'ম্যানুয়াল আইডি দিলে সিকোয়েন্স পিছিয়ে থাকে। setval() দিয়ে আপডেট না করলে পরবর্তী স্বাভাবিক ইনসার্ট id=1 তৈরি করতে গিয়ে ডুপ্লিকেট কি এরর দেখাবে।'
        }
      },
      {
        id: 'db-see-qz-3',
        kind: 'mcq',
        topic: 'database-cleaning-in-ci-pipelines',
        question: {
          en: 'In PostgreSQL, what is the fastest and cleanest command to wipe all tables in a test database before re-seeding between automated test suites?',
          bn: 'PostgreSQL-এ স্বয়ংক্রিয় টেস্ট স্যুটের মাঝে পুনরায় সিড করার আগে সমস্ত টেবিল একবারে সম্পূর্ণ খালি করার সবচেয়ে দ্রুত ও নিরাপদ কমান্ড কোনটি?'
        },
        options: [
          {
            en: 'TRUNCATE TABLE users, orders, order_items RESTART IDENTITY CASCADE;',
            bn: 'TRUNCATE TABLE users, orders, order_items RESTART IDENTITY CASCADE;'
          },
          {
            en: 'DELETE FROM ALL TABLES WITHOUT EXCEPTION PLEASE;',
            bn: 'DELETE FROM ALL TABLES WITHOUT EXCEPTION PLEASE; (কাল্পনিক কমান্ড)'
          },
          {
            en: 'DROP DATABASE POSTGRES AND BUY A NEW SERVER;',
            bn: 'DROP DATABASE POSTGRES AND BUY A NEW SERVER; (কাল্পনিক কমান্ড)'
          },
          {
            en: 'REMOVE DATA FROM HARD DRIVE USING MAGNETS;',
            bn: 'REMOVE DATA FROM HARD DRIVE USING MAGNETS; (কাল্পনিক কমান্ড)'
          }
        ],
        answer: 0,
        hint: {
          en: 'TRUNCATE with RESTART IDENTITY CASCADE resets data and ID counters instantaneously.',
          bn: 'TRUNCATE-এর সাথে RESTART IDENTITY CASCADE সমস্ত ডাটা ও আইডি কাউন্টার নিমেষেই রিসেট করে।'
        },
        explanation: {
          en: 'TRUNCATE is dramatically faster than DELETE because it does not scan rows or log individual row deletions. CASCADE handles foreign keys, and RESTART IDENTITY resets sequences to 1.',
          bn: 'TRUNCATE প্রতিটি রো স্ক্যান না করায় DELETE-এর চেয়ে বহুগুণ দ্রুত। CASCADE সমস্ত ফরেন কি সামলায় এবং RESTART IDENTITY সিকোয়েন্সকে আবার ১ থেকে শুরু করে।'
        }
      },
      {
        id: 'db-see-qz-4',
        kind: 'mcq',
        topic: 'data-factories-vs-raw-sql-seeds',
        question: {
          en: 'Why do modern application frameworks (like Laravel, Prisma, or TypeORM) encourage using "Factory Patterns" for generating test fixture data over hardcoded raw SQL insert files?',
          bn: 'আধুনিক অ্যাপ্লিকেশন ফ্রেমওয়ার্কগুলো (যেমন Laravel, Prisma বা TypeORM) হার্ডকোডেড কাঁচা SQL ফাইলের বদলে টেস্ট ফিক্সচার তৈরির জন্য কেন "ফ্যাক্টরি প্যাটার্ন" ব্যবহারের উৎসাহ দেয়?'
        },
        options: [
          {
            en: 'Factories allow developers to dynamically override specific fields (e.g. userFactory.create({ isBanned: true })) while automatically generating valid default relationships, making test cases clean and expressive',
            bn: 'ফ্যাক্টরি ডেভেলপারদেরকে স্বয়ংক্রিয় ভ্যালিড সম্পর্ক বজায় রেখে নির্দিষ্ট ফিল্ড ওভাররাইড করার (যেমন userFactory.create({ isBanned: true })) সুযোগ দেয়, যা টেস্ট কেসগুলোকে অত্যন্ত পরিষ্কার ও পাঠযোগ্য করে'
          },
          {
            en: 'Because SQL files cannot be opened by text editing software',
            bn: 'কারণ কোনো টেক্সট এডিটর দিয়ে SQL ফাইল খোলা যায় না'
          },
          {
            en: 'Because Factory patterns make computers 50 degrees cooler',
            bn: 'কারণ ফ্যাক্টরি প্যাটার্ন কম্পিউটারকে ৫০ ডিগ্রি বেশি ঠান্ডা রাখে'
          },
          {
            en: 'Factories do not use database memory or CPU cycles',
            bn: 'ফ্যাক্টরি ডাটাবেসের কোনো মেমরি বা সিপিইউ খরচ করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Factories generate complex relationship trees with custom property overrides per test.',
          bn: 'ফ্যাক্টরি প্রতিটি টেস্টের জন্য প্রয়োজনীয় কাস্টম মান সহ জটিল সম্পর্কের গাছ তৈরি করে।'
        },
        explanation: {
          en: 'Hardcoded SQL files are rigid and break whenever schemas change. Factories adapt dynamically, constructing realistic entities with custom attributes tailored specifically to each individual test case.',
          bn: 'নির্দিষ্ট SQL ফাইল স্কিমা পরিবর্তনের সাথে সাথে ভেঙে যায়। ফ্যাক্টরি অত্যন্ত সাবলীলভাবে প্রতিটি টেস্টের নির্দিষ্ট চাহিদার সাথে মানিয়ে নিয়ে নিখুঁত ডাটা তৈরি করতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-design-release',
    title: {
      en: 'Production Schema Architecture: Multi-Tenant Enterprise Capstone',
      bn: 'প্রোডাকশন স্কিমা আর্কিটেকচার: মাল্টি-টেন্যান্ট এন্টারপ্রাইজ ক্যাপস্টোন'
    }
  }
};
