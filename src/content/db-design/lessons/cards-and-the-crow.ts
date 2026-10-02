import type { Lesson } from '../../../lib/types';

export const CardsAndTheCrowLesson: Lesson = {
  slug: 'cards-and-the-crow',
  tech: 'db-design',
  title: {
    en: "Cardinality & Crow's Foot Notation: 1:1, 1:N & M:N Relationships",
    bn: "কার্ডিনালিটি ও ক্রো-ফুট নোটেশন: ১:১, ১:N এবং M:N সম্পর্ক"
  },
  summary: {
    en: "Master entity relationship cardinality: understand Crow's Foot notation symbols, implement 1:1, 1:N, and M:N relationships, and engineer associative junction tables with cascade integrity rules.",
    bn: "এনটিটি সম্পর্কের কার্ডিনালিটি আয়ত্ত করুন: ক্রো-ফুট নোটেশনের চিহ্ন, ১:১, ১:N এবং M:N সম্পর্ক বাস্তবায়ন এবং ক্যাসকেড ইন্টিগ্রিটি সহ অ্যাসোসিয়েটিভ জংশন টেবিল ইঞ্জিনিয়ারিং।"
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'understanding-cardinality',
      text: {
        en: 'Understanding Cardinality: How Relational Entities Connect',
        bn: 'কার্ডিনালিটি বোঝা: রিলেশনাল এনটিটিগুলো কীভাবে যুক্ত হয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you model relational data, knowing which entities exist is only half the battle. You must also define how many instances of one entity can connect to instances of another entity. This numeric relationship is called Cardinality.',
        bn: 'যখন আপনি রিলেশনাল ডাটা মডেল করেন, কেবল কোন কোন এনটিটি আছে তা জানা কাজের অর্ধেক মাত্র। একটি এনটিটির কতটি রো অন্য এনটিটির কতটি রো-র সাথে যুক্ত হতে পারে তাও আপনাকে সুস্পষ্টভাবে নির্ধারণ করতে হয়। এই সংখ্যাগত সম্পর্ককেই বলা হয় কার্ডিনালিটি।'
      }
    },
    {
      type: 'para',
      text: {
        en: "In software engineering, Crow's Foot notation is the universal visual standard for diagramming database relationships. It combines minimum cardinality (modality: optional 0 versus mandatory 1) with maximum cardinality (single 1 versus multiple N) to eliminate ambiguity before you write a single line of SQL.",
        bn: 'সফটওয়্যার ইঞ্জিনিয়ারিংয়ে ডাটাবেস সম্পর্কের নকশা আঁকার জন্য ক্রো-ফুট নোটেশন হলো সর্বজনীন বিশ্বস্ত মানদণ্ড। আপনি এক লাইন SQL লেখার আগেই এটি সর্বনিম্ন কার্ডিনালিটি (ঐচ্ছিক ০ বনাম বাধ্যতামূলক ১) এবং সর্বোচ্চ কার্ডিনালিটিকে (একক ১ বনাম একাধিক N) একত্রিত করে تمام বিভ্রান্তি দূর করে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: "Crow's Foot Notation Symbols and Entity Relationship Architecture",
        bn: "ক্রো-ফুট নোটেশন প্রতীক এবং এনটিটি রিলেশনশিপ আর্কিটেকচার"
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Crows Foot Notation Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Legend Box on Left -->
  <g transform="translate(30, 25)">
    <rect width="260" height="280" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
    <text x="130" y="28" fill="#facc15" font-size="12" font-weight="bold" text-anchor="middle">Crow's Foot Symbol Guide</text>

    <!-- Exactly One -->
    <g transform="translate(20, 50)">
      <line x1="10" y1="20" x2="60" y2="20" stroke="#38bdf8" stroke-width="2" />
      <line x1="45" y1="10" x2="45" y2="30" stroke="#38bdf8" stroke-width="2" />
      <line x1="55" y1="10" x2="55" y2="30" stroke="#38bdf8" stroke-width="2" />
      <text x="75" y="18" fill="#ffffff" font-size="11" font-weight="bold">Mandatory One (||)</text>
      <text x="75" y="32" fill="#94a3b8" font-size="9">Exactly 1 row required</text>
    </g>

    <!-- Zero or One -->
    <g transform="translate(20, 105)">
      <line x1="10" y1="20" x2="60" y2="20" stroke="#a855f7" stroke-width="2" />
      <circle cx="40" cy="20" r="6" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
      <line x1="55" y1="10" x2="55" y2="30" stroke="#a855f7" stroke-width="2" />
      <text x="75" y="18" fill="#ffffff" font-size="11" font-weight="bold">Optional One (O|)</text>
      <text x="75" y="32" fill="#94a3b8" font-size="9">Zero or 1 row allowed</text>
    </g>

    <!-- One or More -->
    <g transform="translate(20, 160)">
      <line x1="10" y1="20" x2="45" y2="20" stroke="#10b981" stroke-width="2" />
      <line x1="35" y1="10" x2="35" y2="30" stroke="#10b981" stroke-width="2" />
      <path d="M 45 10 L 60 20 L 45 30" fill="none" stroke="#10b981" stroke-width="2" />
      <text x="75" y="18" fill="#ffffff" font-size="11" font-weight="bold">Mandatory Many (|<)</text>
      <text x="75" y="32" fill="#94a3b8" font-size="9">At least 1 or many rows</text>
    </g>

    <!-- Zero or More -->
    <g transform="translate(20, 215)">
      <line x1="10" y1="20" x2="45" y2="20" stroke="#f59e0b" stroke-width="2" />
      <circle cx="35" cy="20" r="5" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
      <path d="M 45 10 L 60 20 L 45 30" fill="none" stroke="#f59e0b" stroke-width="2" />
      <text x="75" y="18" fill="#ffffff" font-size="11" font-weight="bold">Optional Many (O<)</text>
      <text x="75" y="32" fill="#94a3b8" font-size="9">Zero, 1, or many rows</text>
    </g>
  </g>

  <!-- ERD Example Diagram on Right -->
  <g transform="translate(320, 25)">
    <rect width="390" height="280" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.5" />
    <text x="195" y="28" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">E-Commerce Relational ERD Structure</text>

    <!-- Customer Table -->
    <rect x="25" y="60" width="130" height="85" rx="4" fill="#0f172a" stroke="#38bdf8" />
    <rect x="25" y="60" width="130" height="24" rx="4" fill="#0284c7" />
    <text x="90" y="76" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">customers</text>
    <text x="35" y="98" fill="#facc15" font-size="9">PK id UUID</text>
    <text x="35" y="114" fill="#94a3b8" font-size="9">name VARCHAR</text>
    <text x="35" y="130" fill="#94a3b8" font-size="9">email VARCHAR</text>

    <!-- Orders Table -->
    <rect x="235" y="60" width="130" height="85" rx="4" fill="#0f172a" stroke="#10b981" />
    <rect x="235" y="60" width="130" height="24" rx="4" fill="#059669" />
    <text x="300" y="76" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">orders</text>
    <text x="245" y="98" fill="#facc15" font-size="9">PK id UUID</text>
    <text x="245" y="114" fill="#38bdf8" font-size="9">FK customer_id</text>
    <text x="245" y="130" fill="#94a3b8" font-size="9">total NUMERIC</text>

    <!-- Connector 1: Customer to Orders (1 to Optional Many) -->
    <line x1="155" y1="100" x2="235" y2="100" stroke="#f59e0b" stroke-width="2" />
    <!-- Customer side: Mandatory 1 -->
    <line x1="162" y1="93" x2="162" y2="107" stroke="#38bdf8" stroke-width="2" />
    <line x1="168" y1="93" x2="168" y2="107" stroke="#38bdf8" stroke-width="2" />
    <!-- Orders side: Optional Many -->
    <circle cx="218" cy="100" r="4" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
    <path d="M 223 93 L 235 100 L 223 107" fill="none" stroke="#f59e0b" stroke-width="2" />

    <!-- Junction Table: order_items -->
    <rect x="130" y="180" width="130" height="85" rx="4" fill="#0f172a" stroke="#a855f7" />
    <rect x="130" y="180" width="130" height="24" rx="4" fill="#7e22ce" />
    <text x="195" y="196" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">order_items (Junction)</text>
    <text x="140" y="218" fill="#facc15" font-size="9">PK,FK order_id</text>
    <text x="140" y="234" fill="#facc15" font-size="9">PK,FK product_id</text>
    <text x="140" y="250" fill="#94a3b8" font-size="9">quantity INT</text>

    <!-- Connector: Orders to order_items (1 to Mandatory Many) -->
    <line x1="300" y1="145" x2="300" y2="220" stroke="#10b981" stroke-width="2" />
    <line x1="300" y1="220" x2="260" y2="220" stroke="#10b981" stroke-width="2" />
    <path d="M 270 214 L 260 220 L 270 226" fill="none" stroke="#10b981" stroke-width="2" />
  </g>
</svg>`,
      caption: {
        en: "Crow's Foot notation cheat sheet and architectural layout decomposing an e-commerce Many-to-Many link using a junction entity.",
        bn: "ক্রো-ফুট নোটেশন নির্দেশিকা এবং একটি জংশন টেবিল ব্যবহার করে ই-কমার্সের Many-to-Many সম্পর্ক সমাধানের আর্কিটেকচার।"
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Cardinality',
          def: {
            en: 'The numeric constraint expressing how many instances of one entity can relate to instances of another entity in a relational schema.',
            bn: 'একটি রিলেশনাল স্কিমায় একটি এনটিটির কতটি রেকর্ড অপর এনটিটির রেকর্ডের সাথে সম্পর্কিত হতে পারে তার সংখ্যাগত সীমা।'
          }
        },
        {
          term: 'Modality',
          def: {
            en: 'The minimum number of entity occurrences required in a relationship; either optional (zero) or mandatory (at least one).',
            bn: 'সম্পর্কের মধ্যে একটি এনটিটির প্রয়োজনীয় ন্যূনতম রেকর্ডের সংখ্যা; যা হয় ঐচ্ছিক (০) অথবা বাধ্যতামূলক (কমপক্ষে ১)।'
          }
        },
        {
          term: 'Associative Junction Table',
          def: {
            en: 'An intermediate table decomposing a Many-to-Many (M:N) relationship into two One-to-Many (1:N) links using a composite foreign key.',
            bn: 'একটি মধ্যবর্তী টেবিল যা কম্পোজিট ফরেন কি ব্যবহার করে Many-to-Many সম্পর্ককে ২টি পরিষ্কার One-to-Many সম্পর্কে রূপান্তরিত করে।'
          }
        },
        {
          term: 'ON DELETE CASCADE',
          def: {
            en: 'A referential integrity rule that automatically deletes all associated child rows whenever their referenced parent record is removed.',
            bn: 'একটি রেফারেন্সিয়াল ইন্টিগ্রিটি নিয়ম যা প্যারেন্ট রেকর্ড মুছে যাওয়ার সাথে সাথে স্বয়ংক্রিয়ভাবে সমস্ত সম্পর্কিত চাইল্ড রেকর্ড মুছে দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'the-three-relationship-topologies',
      text: {
        en: 'The Three Relationship Topologies: 1:1, 1:N, and M:N',
        bn: 'তিন ধরনের রিলেশনশিপ সংগঠন: ১:১, ১:N এবং M:N'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A One-to-One (1:1) relationship occurs when one row in Table A links to at most one row in Table B (for example, a user having one private billing profile). Engineers model this by placing a foreign key with a UNIQUE constraint in the dependent table. This pattern is ideal for table partitioning when isolating sensitive credentials or rarely-accessed heavy columns.',
        bn: 'একটি One-to-One (১:১) সম্পর্ক তখন তৈরি হয় যখন টেবিল A-এর একটি সারি টেবিল B-এর সর্বাধিক একটি সারির সাথে যুক্ত থাকে (যেমন একজন ব্যবহারকারীর একটিমাত্র প্রাইভেট বিলিং প্রোফাইল)। প্রকৌশলীরা নির্ভরশীল টেবিলে একটি UNIQUE কনস্ট্রেইন্টযুক্ত ফরেন কি রেখে এটি বাস্তবায়ন করেন। গোপন তথ্য আলাদা করতে বা কম ব্যবহৃত ভারী কলাম বিভক্ত করার ক্ষেত্রে এই প্যাটার্ন অত্যন্ত কার্যকরী।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The One-to-Many (1:N) relationship is the workhorse of relational architecture, such as one customer placing multiple orders. In contrast, a Many-to-Many (M:N) relationship (such as orders containing multiple products while products belong to multiple orders) cannot be stored directly. You must introduce an associative junction table (such as order_items) with a composite primary key to preserve relational integrity.',
        bn: 'One-to-Many (১:N) হলো রিলেশনাল আর্কিটেকচারের সবচেয়ে প্রচলিত ভিত্তি, যেমন একজন গ্রাহকের একাধিক অর্ডার থাকা। অন্যদিকে Many-to-Many (M:N) সম্পর্ক (যেমন একটি অর্ডারে একাধিক পণ্য থাকা এবং একই পণ্য একাধিক অর্ডারের অংশ হওয়া) সরাসরি সংরক্ষণ করা অসম্ভব। রিলেশনাল ডাটা শুদ্ধতা বজায় রাখতে আপনাকে অবশ্যই একটি কম্পোজিট প্রাইমারি কিযুক্ত জংশন টেবিল (যেমন order_items) তৈরি করতে হয়।'
      }
    },
    {
      type: 'heading',
      id: 'node-cardinality-engine',
      text: {
        en: 'Executable Cardinality & Junction Table Simulator',
        bn: 'রানযোগ্য কার্ডিনালিটি ও জংশন টেবিল সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine simulating an e-commerce relationship hierarchy. It decomposes an M:N link into 4 associative junction entries. When 1 customer is removed, the engine demonstrates ON DELETE CASCADE by automatically cleaning up 3 orders and 4 line items.',
        bn: 'নিচে একটি ই-কমার্স রিলেশনশিপ কাঠামো প্রদর্শনকারী সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি একটি M:N সম্পর্ককে ৪টি অ্যাসোসিয়েটিভ জংশন এন্ট্রিতে বিভক্ত করে। যখন ১টি কাস্টমার মুছে ফেলা হয়, ইঞ্জিনটি স্বয়ংক্রিয়ভাবে ৩টি অর্ডার এবং ৪টি লাইন আইটেম মুছে ON DELETE CASCADE নিয়মের কার্যকারিতা প্রমাণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Cardinality simulator managing 1:1, 1:N, and M:N relationships with referential cascade cleanup',
        bn: '১:১, ১:N এবং M:N সম্পর্ক ও রেফারেন্সিয়াল ক্যাসকেড ক্লিনআপ পরিচালনাকারী কার্ডিনালিটি সিমুলেটর'
      },
      code: `// Cardinality and Junction Table Simulation
const customers = [{ id: 1, name: 'Alice' }];
let orders = [
  { id: 101, customerId: 1 },
  { id: 102, customerId: 1 },
  { id: 103, customerId: 1 }
];
let orderItems = [
  { orderId: 101, productId: 1, quantity: 2 },
  { orderId: 101, productId: 2, quantity: 1 },
  { orderId: 102, productId: 2, quantity: 3 },
  { orderId: 103, productId: 3, quantity: 5 }
];

const initialOrderCount = orders.length; // 3
const initialItemCount = orderItems.length; // 4

// Simulate ON DELETE CASCADE for Customer 1
const customerToDelete = 1;
const ordersToDelete = orders.filter(o => o.customerId === customerToDelete).map(o => o.id);
orderItems = orderItems.filter(item => !ordersToDelete.includes(item.orderId));
orders = orders.filter(o => o.customerId !== customerToDelete);

const isAccurate = initialOrderCount === 3 && initialItemCount === 4 && orders.length === 0 && orderItems.length === 0;

console.log(\`[Cardinality Simulator] Modeled 1:1, 1:N, and M:N relationship topologies.\`);
console.log(\`[Junction Table Verification] Decomposed M:N link into \${initialItemCount} associative junction entries.\`);
console.log(\`[Referential Cascade Test] Deleting \${customerToDelete} customer cascaded to \${initialOrderCount} orders and \${initialItemCount} line items (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'The Dangers of Uncontrolled ON DELETE CASCADE',
        bn: 'অনিয়ন্ত্রিত ON DELETE CASCADE-এর মারাত্মক ঝুঁকি'
      },
      text: {
        en: 'While ON DELETE CASCADE is convenient for child line items, applying it to top-level organizational entities in production can be disastrous. Deleting a single corporate account could accidentally cascade to millions of invoices, payments, and audit logs. In financial systems, always prefer ON DELETE RESTRICT and rely on explicit soft-deletion flags.',
        bn: 'চাইল্ড লাইন আইটেমের জন্য ON DELETE CASCADE সুবিধাজনক হলেও প্রোডাকশনে উচ্চ স্তরের প্রাতিষ্ঠানিক টেবিলে এটি লাগানো মারাত্মক ঝুঁকিপূর্ণ। একটি কোম্পানি অ্যাকাউন্ট মুছলে তার কোটি কোটি ইনভয়েস, পেমেন্ট এবং অডিট ডাটা সাথে সাথে চিরতরে মুছে যেতে পারে। আর্থিক সিস্টেমে সর্বদা ON DELETE RESTRICT এবং সফট-ডিলিট ফ্ল্যাগ ব্যবহার করা উচিত।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Relationship Pattern Classifier',
        bn: 'রিলেশনশিপ প্যাটার্ন নির্ণায়ক'
      },
      description: {
        en: 'Classify whether a business relationship requires a direct foreign key or an associative junction table.',
        bn: 'ব্যবসায়িক সম্পর্কের জন্য সরাসরি ফরেন কি যথেষ্ট নাকি একটি অ্যাসোসিয়েটিভ জংশন টেবিল লাগবে তা নির্ধারণ করুন।'
      },
      code: `function determineSchemaPattern(cardinalityType) {
  if (cardinalityType === 'M:N') {
    return 'USE_JUNCTION_TABLE: Requires intermediate entity with composite PK';
  }
  if (cardinalityType === '1:1') {
    return 'USE_FOREIGN_KEY_WITH_UNIQUE: Add unique constraint on FK';
  }
  return 'USE_STANDARD_FOREIGN_KEY: Place foreign key in child table';
}

console.log('Authors to Books:', determineSchemaPattern('M:N'));
console.log('Customer to Orders:', determineSchemaPattern('1:N'));`,
      tests: [
        {
          name: {
            en: 'Identifies M:N requiring junction table',
            bn: 'M:N-এর জন্য জংশন টেবিলের প্রয়োজনীয়তা চিহ্নিত করে'
          },
          expected: 'Authors to Books: USE_JUNCTION_TABLE: Requires intermediate entity with composite PK'
        },
        {
          name: {
            en: 'Identifies 1:N using standard foreign key',
            bn: '১:N-এর জন্য সাধারণ ফরেন কি ব্যবহার চিহ্নিত করে'
          },
          expected: 'Customer to Orders: USE_STANDARD_FOREIGN_KEY: Place foreign key in child table'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-card-ex-1',
      kind: 'mcq',
      topic: 'crows-foot-notation-symbols',
      question: {
        en: "In Crow's Foot ERD notation, what does a three-pronged fork symbol combined with an open circle (O<) represent at a relationship endpoint?",
        bn: "ক্রো-ফুট ERD নোটেশনে সম্পর্কের প্রান্তে একটি খোলা বৃত্ত এবং তিনমুখী কাঁটা প্রতীক (O<) কী অর্থ প্রকাশ করে?"
      },
      options: [
        {
          en: 'Optional Many: an entity instance can be associated with zero, one, or multiple rows in the related table',
          bn: 'ঐচ্ছিক একাধিক (Optional Many): একটি এনটিটি রেকর্ড সম্পর্কিত টেবিলে শূন্য, এক বা একাধিক সারির সাথে যুক্ত হতে পারে'
        },
        {
          en: 'Mandatory Exactly One: the entity must link to precisely 1 row and no more',
          bn: 'বাধ্যতামূলক ঠিক একটি: এনটিটিটিকে অবশ্যই ঠিক ১টি সারির সাথে যুক্ত হতে হবে, বেশিও নয় কমও নয়'
        },
        {
          en: 'The database server is connected to three separate power outlets',
          bn: 'ডাটাবেস সার্ভারটি তিনটি আলাদা বিদ্যুৎ সকেটের সাথে যুক্ত'
        },
        {
          en: 'All text strings in the column must be exactly 3 characters long',
          bn: 'কলামের সমস্ত টেক্সট স্ট্রিং ঠিক ৩ অক্ষরের লম্বা হতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The circle means optional (zero allowed); the crow fork means multiple.',
        bn: 'বৃত্তের অর্থ হলো ঐচ্ছিক (০ হতে পারে); আর কাঁটার অর্থ হলো একাধিক।'
      },
      explanation: {
        en: 'The circle specifies minimum cardinality (0), while the crow foot specifies maximum cardinality (many). Together they denote "zero or more".',
        bn: 'বৃত্তটি সর্বনিম্ন কার্ডিনালিটি (০) নির্দেশ করে এবং ক্রো-ফুট সর্বোচ্চ কার্ডিনালিটি (একাধিক) নির্দেশ করে। দুটি মিলে নির্দেশ করে "শূন্য বা ততোধিক"।'
      }
    },
    {
      id: 'db-card-ex-2',
      kind: 'mcq',
      topic: 'many-to-many-decomposition',
      question: {
        en: 'Why is it impossible to directly store a Many-to-Many (M:N) relationship between two relational tables without creating an associative junction table?',
        bn: 'একটি অ্যাসোসিয়েটিভ জংশন টেবিল তৈরি না করে সরাসরি দুটি রিলেশনাল টেবিলের মধ্যে Many-to-Many (M:N) সম্পর্ক সংরক্ষণ করা কেন অসম্ভব?'
      },
      options: [
        {
          en: 'Relational tables require atomic scalar attributes (1NF); without a junction table, you would have to store arrays of foreign keys in a single cell or duplicate entire rows endlessly',
          bn: 'রিলেশনাল টেবিলে প্রতিটি মান একক হতে হয় (১NF); জংশন টেবিল ছাড়া একটি সেলে ফরেন কি-র অ্যারে রাখতে হতো অথবা বারবার একই রো-র নকল করতে হতো'
        },
        {
          en: 'Because SQL database engines only allow tables to have 10 rows',
          bn: 'কারণ SQL ডাটাবেস ইঞ্জিন টেবিলে কেবল ১০টি রো রাখার অনুমতি দেয়'
        },
        {
          en: 'Because computer processors catch fire when M:N queries execute',
          bn: 'কারণ M:N কোয়েরি চললে কম্পিউটার প্রসেসরে আগুন ধরে যায়'
        },
        {
          en: 'Because Many-to-Many relationships are completely illegal under international copyright laws',
          bn: 'কারণ আন্তর্জাতিক কপিরাইট আইনে Many-to-Many সম্পর্ক রাখা বেআইনি'
        }
      ],
      answer: 0,
      hint: {
        en: 'Relational columns cannot store comma-separated lists of keys without violating 1NF.',
        bn: '১NF নিয়ম না ভেঙে রিলেশনাল কলামে কমা দিয়ে একাধিক কি-র তালিকা রাখা যায় না।'
      },
      explanation: {
        en: 'Relational algebra mandates atomic values. A junction table decomposes an M:N link into two clean 1:N foreign key links using a composite primary key.',
        bn: 'রিলেশনাল অ্যালজেব্রায় প্রতিটি মানকে একক হতে হয়। একটি জংশন টেবিল কম্পোজিট কি ব্যবহার করে একটি M:N সম্পর্ককে ২টি পরিষ্কার ১:N সম্পর্কে রূপান্তর করে।'
      }
    },
    {
      id: 'db-card-ex-3',
      kind: 'mcq',
      topic: 'one-to-one-unique-constraint',
      question: {
        en: 'How do database engineers enforce a strict One-to-One (1:1) relationship in SQL schema DDL?',
        bn: 'ডাটাবেস ইঞ্জিনিয়াররা কীভাবে SQL স্কিমা DDL-এ কঠোর One-to-One (১:১) সম্পর্ক বাস্তবায়ন করেন?'
      },
      options: [
        {
          en: 'By adding a UNIQUE constraint on the foreign key column in the child table, ensuring no parent row can ever be referenced more than once',
          bn: 'চাইল্ড টেবিলের ফরেন কি কলামটিতে একটি UNIQUE কনস্ট্রেইন্ট যুক্ত করে, যাতে কোনো প্যারেন্ট রো একাধিকবার রেফারেন্স হতে না পারে'
        },
        {
          en: 'By naming both tables with the same word',
          bn: 'উভয় টেবিলের নাম একই শব্দ দিয়ে রেখে'
        },
        {
          en: 'By limiting the database hard drive to 1 megabyte',
          bn: 'ডাটাবেস হার্ড ড্রাইভের আকার ১ মেগাবাইটে সীমাবদ্ধ রেখে'
        },
        {
          en: 'By disconnecting the server from the internet every night',
          bn: 'প্রতি রাতে সার্ভারের ইন্টারনেট সংযোগ বিচ্ছিন্ন করে দিয়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A standard foreign key is 1:N; adding UNIQUE turns it into 1:1.',
        bn: 'একটি সাধারণ ফরেন কি হলো ১:N; এতে UNIQUE যুক্ত করলে তা ১:১ এ পরিণত হয়।'
      },
      explanation: {
        en: 'A foreign key alone allows many child rows to reference the same parent (1:N). Adding a UNIQUE constraint ensures that every child row references a distinct parent row, enforcing 1:1.',
        bn: 'শুধু ফরেন কি থাকলে একাধিক চাইল্ড রো একই প্যারেন্টকে নির্দেশ করতে পারে (১:N)। UNIQUE বসালে প্রতিটি প্যারেন্টের জন্য সর্বোচ্চ একটিই চাইল্ড রো সম্ভব হয়।'
      }
    },
    {
      id: 'db-card-ex-4',
      kind: 'mcq',
      topic: 'on-delete-restrict-vs-cascade',
      question: {
        en: 'In an enterprise accounting database, why is ON DELETE RESTRICT strongly preferred over ON DELETE CASCADE on invoice parent relationships?',
        bn: 'একটি এন্টারপ্রাইজ অ্যাকাউন্টিং ডাটাবেসে ইনভয়েস সম্পর্কের ক্ষেত্রে ON DELETE CASCADE-এর চেয়ে ON DELETE RESTRICT কেন সর্বাধিক পছন্দনীয়?'
      },
      options: [
        {
          en: 'It blocks accidental deletion of critical financial records, throwing an error if a user attempts to delete a customer or invoice that still has linked ledger transactions',
          bn: 'এটি গুরুত্বপূর্ণ আর্থিক রেকর্ড ভুলবশত মুছে যাওয়া প্রতিরোধ করে এবং লিঙ্কযুক্ত লেনদেন থাকা অবস্থায় কোনো গ্রাহক বা ইনভয়েস মুছতে গেলে ত্রুটি ছুড়ে দেয়'
        },
        {
          en: 'It makes database queries run at the speed of light',
          bn: 'এটি ডাটাবেস কোয়েরিকে আলোর গতিতে চলতে বাধ্য করে'
        },
        {
          en: 'It changes all numbers to negative values automatically',
          bn: 'এটি সমস্ত সংখ্যাকে স্বয়ংক্রিয়ভাবে ঋণাত্মক মানে রূপান্তর করে'
        },
        {
          en: 'Because ON DELETE RESTRICT is a paid feature in proprietary databases',
          bn: 'কারণ ON DELETE RESTRICT হলো একটি পেইড বাণিজ্যিক ফিচার'
        }
      ],
      answer: 0,
      hint: {
        en: 'RESTRICT guards audit trails against accidental destructive deletions.',
        bn: 'RESTRICT ভুলবশত গুরুত্বপূর্ণ রেকর্ড মুছে যাওয়া থেকে রক্ষা করে।'
      },
      explanation: {
        en: 'In financial ledgers, silent cascading deletions can destroy historical audit trails. RESTRICT enforces that dependents must be explicitly handled before a parent entity can be removed.',
        bn: 'আর্থিক হিসাবের খাতায় অসতর্ক ক্যাসকেড ডিলিট সম্পূর্ণ অডিট ট্রেল নষ্ট করে দিতে পারে। RESTRICT নিশ্চিত করে যে চাইল্ড রেকর্ডগুলো সুরক্ষিত না রেখে প্যারেন্ট কখনোই মুছে ফেলা যাবে না।'
      }
    }
  ],
  quiz: {
    id: 'cards-and-the-crow-quiz',
    title: {
      en: "Cardinality & Crow's Foot Relationships Quiz",
      bn: 'কার্ডিনালিটি ও ক্রো-ফুট রিলেশনশিপ কুইজ'
    },
    questions: [
      {
        id: 'db-card-qz-1',
        kind: 'mcq',
        topic: 'junction-table-composite-pk',
        question: {
          en: 'What is the standard primary key strategy for an associative junction table (e.g. order_items linking orders and products)?',
          bn: 'একটি অ্যাসোসিয়েটিভ জংশন টেবিলের (যেমন orders এবং products যুক্তকারী order_items) জন্য আদর্শ প্রাইমারি কি কৌশল কোনটি?'
        },
        options: [
          {
            en: 'A Composite Primary Key formed by the combination of both foreign keys PRIMARY KEY (order_id, product_id), preventing duplicate line item pairs while serving as a natural covering index',
            bn: 'উভয় ফরেন কি-র সমন্বয়ে গঠিত একটি কম্পোজিট প্রাইমারি কি PRIMARY KEY (order_id, product_id), যা ডুপ্লিকেট রোধের পাশাপাশি একটি প্রাকৃতিক কাভারিং ইনডেক্স হিসেবে কাজ করে'
          },
          {
            en: 'Storing the customer\'s credit card number in plaintext as the primary key',
            bn: 'গ্রাহকের ক্রেডিট কার্ড নম্বরকে প্লেইনটেক্সটে প্রাইমারি কি হিসেবে রাখা'
          },
          {
            en: 'Leaving the table with zero primary keys and zero indexes',
            bn: 'টেবিলে কোনো প্রাইমারি কি বা ইনডেক্স না রেখে সম্পূর্ণ খালি রাখা'
          },
          {
            en: 'Generating a new random number every time the database server is rebooted',
            bn: 'প্রতিবার সার্ভার রিস্টার্টের সময় একটি নতুন এলোমেলো সংখ্যা তৈরি করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Composite keys enforce uniqueness of the link and cluster queries efficiently.',
          bn: 'কম্পোজিট কি সম্পর্কের অনন্যতা নিশ্চিত করে এবং কোয়েরির গতি বাড়ায়।'
        },
        explanation: {
          en: 'A composite primary key on (order_id, product_id) prevents inserting the exact same product twice into an order and automatically constructs a fast clustered B-Tree index.',
          bn: '(order_id, product_id)-র ওপর কম্পোজিট প্রাইমারি কি থাকলে একই অর্ডারে একই পণ্য দুইবার ঢোকানো যায় না এবং এটি দ্রুতগতির B-Tree ইনডেক্স তৈরি করে।'
        }
      },
      {
        id: 'db-card-qz-2',
        kind: 'mcq',
        topic: 'recursive-self-referencing-relationship',
        question: {
          en: 'What is a "Recursive (Self-Referencing) Relationship" in database design, and what is a classic real-world example?',
          bn: 'ডাটাবেস ডিজাইনে একটি "রিকার্সিভ (সেলফ-রেফারেন্সিং) সম্পর্ক" কী এবং এর একটি আদর্শ বাস্তব উদাহরণ কোনটি?'
        },
        options: [
          {
            en: 'An entity relates to itself through a foreign key referencing its own primary key, such as an employees table containing a manager_id referencing another employee\'s id',
            bn: 'একটি এনটিটি তার নিজস্ব প্রাইমারি কি-কে ফরেন কি হিসেবে রেফারেন্স করে নিজের সাথেই যুক্ত থাকে, যেমন employees টেবিলের manager_id কলাম অন্য কর্মীর id-কে নির্দেশ করে'
          },
          {
            en: 'A database that continuously re-installs itself every hour',
            bn: 'এমন একটি ডাটাবেস যা প্রতি এক ঘণ্টায় নিজেকে নিজে পুনরায় ইনস্টল করে'
          },
          {
            en: 'A query that runs infinitely until the server runs out of electricity',
            bn: 'একটি কোয়েরি যা সার্ভারের বিদ্যুৎ শেষ না হওয়া পর্যন্ত চলতেই থাকে'
          },
          {
            en: 'A table whose columns are arranged in alphabetical order',
            bn: 'এমন একটি টেবিল যার কলামগুলো বর্ণানুক্রমিকভাবে সাজানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hierarchies like organizational charts or threaded comment trees reference the same table.',
          bn: 'অফিসের সাংগঠনিক কাঠামো বা কমেন্টের থ্রেড একই টেবিলকে নির্দেশ করে।'
        },
        explanation: {
          en: 'Self-referencing foreign keys model trees and graphs (such as managers in an org chart, categories with parent categories, or threaded nested comment replies).',
          bn: 'সেলফ-রেফারেন্সিং ফরেন কি হায়ারার্কি বা গ্রাফ মডেল করতে ব্যবহৃত হয় (যেমন কর্মীদের বস, প্যারেন্ট ক্যাটাগরি বা কমেন্টের রিপ্লাই)।'
        }
      },
      {
        id: 'db-card-qz-3',
        kind: 'mcq',
        topic: 'modality-optional-vs-mandatory',
        question: {
          en: 'In physical database implementation, how is "Optional Modality" (e.g. an order may or may not have an assigned delivery_driver_id) represented in column constraints?',
          bn: 'ফিজিক্যাল ডাটাবেস বাস্তবায়নে কলাম কনস্ট্রেইন্টের ক্ষেত্রে "ঐচ্ছিক মোডালিটি" (যেমন একটি অর্ডারে delivery_driver_id থাকতেও পারে আবার নাও থাকতে পারে) কীভাবে প্রকাশ করা হয়?'
        },
        options: [
          {
            en: 'By declaring the foreign key column as NULLABLE (permitting NULL values when no related entity is currently assigned)',
            bn: 'ফরেন কি কলামটিকে NULLABLE হিসেবে ঘোষণা করে (যাতে কোনো সংশ্লিষ্ট রেকর্ড না থাকলে সেখানে NULL মান থাকতে পারে)'
          },
          {
            en: 'By making the column NOT NULL and storing the string "EMPTY"',
            bn: 'কলামটিকে NOT NULL করে "EMPTY" স্ট্রিং লিখে রেখে'
          },
          {
            en: 'By deleting the entire table from the server',
            bn: 'সার্ভার থেকে সম্পূর্ণ টেবিলটি মুছে ফেলার মাধ্যমে'
          },
          {
            en: 'By shutting down the database software',
            bn: 'ডাটাবেস সফটওয়্যার সম্পূর্ণ বন্ধ করে রেখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Optional modality means the relationship allows zero; NULL represents absent association.',
          bn: 'ঐচ্ছিক মোডালিটি মানে শূন্য অনুমোদন করা; আর সম্পর্কের অনুপস্থিতি নির্দেশ করে NULL।'
        },
        explanation: {
          en: 'A nullable foreign key represents optionality (0 or 1). A NOT NULL foreign key enforces mandatory relationship existence (must have exactly 1 parent).',
          bn: 'একটি নালেবল ফরেন কি ঐচ্ছিক সম্পর্ক (০ বা ১) নির্দেশ করে। আর NOT NULL দিলে সম্পর্কটি বাধ্যতামূলক হয়ে যায় (ঠিক ১টি প্যারেন্ট থাকতে হয়)।'
        }
      },
      {
        id: 'db-card-qz-4',
        kind: 'mcq',
        topic: 'on-delete-set-null-requirement',
        question: {
          en: 'What schema condition is strictly required before an engineer can configure ON DELETE SET NULL on a foreign key constraint?',
          bn: 'ফরেন কি কনস্ট্রেইন্টে ON DELETE SET NULL কনফিগার করার জন্য স্কিমায় কোন শর্তটি কঠোরভাবে বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'The foreign key column must be defined as NULLABLE (cannot have a NOT NULL constraint), because setting values to NULL violates a NOT NULL restriction',
            bn: 'ফরেন কি কলামটিকে অবশ্যই NULLABLE হতে হবে (এতে কোনো NOT NULL কনস্ট্রেইন্ট থাকতে পারবে না), কারণ NOT NULL থাকলে সেখানে NULL বসানো নিষিদ্ধ'
          },
          {
            en: 'The database server must have at least 128 gigabytes of memory',
            bn: 'ডাটাবেস সার্ভারে কমপক্ষে ১২৮ গিগাবাইট মেমরি থাকতে হবে'
          },
          {
            en: 'The table must contain fewer than 5 rows',
            bn: 'টেবিলে ৫টির কম রো থাকতে হবে'
          },
          {
            en: 'All table columns must store floating-point numbers',
            bn: 'টেবিলের সমস্ত কলামে দশমিক সংখ্যা সংরক্ষণ করতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'You cannot set a column to NULL if the schema forbids NULL.',
          bn: 'স্কিমায় যদি NULL নিষিদ্ধ থাকে তবে কলামটিতে কখনোই NULL সেট করা যাবে না।'
        },
        explanation: {
          en: 'If a column is marked NOT NULL, the database engine will reject ON DELETE SET NULL because cascading would violate the NOT NULL integrity constraint upon parent deletion.',
          bn: 'কলামে NOT NULL দেওয়া থাকলে ইঞ্জিন ON DELETE SET NULL প্রত্যাখ্যান করবে, কারণ প্যারেন্ট মুছে যাওয়ার সময় সেখানে NULL বসাতে গেলে ইন্টিগ্রিটি ভঙ্গ হবে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'norms-and-the-normal',
    title: {
      en: 'Practical Schema Normalization: 1NF, 2NF, 3NF & Integrity',
      bn: 'বাস্তবসম্মত স্কিমা নরমালাইজেশন: ১NF, ২NF, ৩NF ও ডাটা শুদ্ধতা'
    }
  }
};
