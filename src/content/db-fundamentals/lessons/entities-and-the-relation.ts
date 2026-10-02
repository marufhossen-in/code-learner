import type { Lesson } from '../../../lib/types';

export const EntitiesAndTheRelationLesson: Lesson = {
  slug: 'entities-and-the-relation',
  tech: 'db-fundamentals',
  title: {
    en: 'Entities, Relations & The Relational Model: Edgar Codd Foundation',
    bn: 'এন্টিটি, রিলেশন ও রিলেশনাল মডেল: এডগার কডের ভিত্তি'
  },
  summary: {
    en: 'A beginner introduction to relational databases: understand how real-world entities map to mathematical relations, tuples, attributes, domains, and the revolution of physical data independence.',
    bn: 'রিলেশনাল ডাটাবেসের একটি প্রাথমিক পাঠ: বাস্তব জীবনের এন্টিটি কীভাবে গাণিতিক রিলেশন, টিউপল, অ্যাট্রিবিউট ও ডোমেইনে রূপান্তরিত হয় এবং ফিজিক্যাল ডাটা ইন্ডিপেন্ডেন্সের গুরুত্ব জানুন।'
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'pre-relational-nightmare',
      text: {
        en: 'The Pre-Relational World: Why Pointer-Based Databases Broke',
        bn: 'রিলেশনাল-পূর্ব যুগ: পয়েন্টার-ভিত্তিক ডাটাবেস কেন অকেজো হয়ে পড়েছিল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Before relational databases emerged, enterprise systems relied on hierarchical and network database architectures. In these legacy systems, data records were wired together using raw physical disk addresses and hardware pointers. To find orders for customer 42, software had to navigate a labyrinth of memory pointers. Programmers had to seek the customer block, traverse its first child pointer, and walk the linked chain of order records.',
        bn: 'রিলেশনাল ডাটাবেস উদ্ভাবনের পূর্বে কর্পোরেট সিস্টেমগুলো হায়ারার্কিক্যাল ও নেটওয়ার্ক ডাটাবেস কাঠামোর ওপর নির্ভরশীল ছিল। এই পুরোনো সিস্টেমগুলোতে বিভিন্ন ডাটা রেকর্ড সরাসরি হার্ডডিস্কের মেমরি অ্যাড্রেস এবং পয়েন্টার দিয়ে জোড়াতালি দেওয়া থাকত। ৪২ নম্বর গ্রাহকের অর্ডার খুঁজতে প্রোগ্রামকে জটিল ডিস্ক পয়েন্টার ধরে এগোতে হতো। ডেভেলপারদের প্রথমে গ্রাহকের ব্লক খোঁজা, তার চাইল্ড পয়েন্টার ধরে চলা এবং অর্ডারের লিংকড চেইন ধরে রেকর্ড পড়তে হতো।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This pointer-based architecture suffered from a fatal engineering defect: zero data independence. Whenever a system administrator reorganized disk sectors, partitioned storage volumes, or added an index, physical disk addresses changed. Consequently, every application query broke and required code rewrites. Enterprises spent over 50 percent of software budgets merely updating pointer offsets to match changing hard drives.',
        bn: 'এই পয়েন্টার-ভিত্তিক আর্কিটেকচারে একটি মারাত্মক দুর্বলতা ছিল: ডাটা ইন্ডিপেন্ডেন্স বা ডাটার স্বাধীনতার সম্পূর্ণ অনুপস্থিতি। সিস্টেম অ্যাডমিনিস্ট্রেটর যখনই ডিস্ক সেক্টর পুনর্গঠন করতেন, নতুন স্টোরেজ ভলিউম যুক্ত করতেন বা ইনডেক্স বদলাতেন, তখনই ডিস্কের মেমরি অ্যাড্রেস বদলে যেত। ফলে পুরনো অ্যাপ্লিকেশন কোড কাজ করা বন্ধ করে দিত এবং প্রোগ্রামারদের নতুন করে কোড লিখতে হতো। প্রতিষ্ঠানগুলো তাদের সফটওয়্যার বাজেটের ৫০ শতাংশেরও বেশি খরচ করত শুধু হার্ডডিস্ক পরিবর্তনের সাথে পয়েন্টার অফসেট মেলাতে।'
      }
    },
    {
      type: 'heading',
      id: 'codd-revolution',
      text: {
        en: 'The 1970 Revolution: Dr. Edgar Codd Relational Model',
        bn: '১৯৭০ সালের বিপ্লব: ড. এডগার কডের রিলেশনাল মডেল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In 1970, an IBM computer scientist named Dr. Edgar F. Codd published a landmark paper titled "A Relational Model of Data for Large Shared Data Banks". Codd proposed abolishing physical pointers completely. Instead of wiring data to disk hardware, data should be modeled using first-order predicate logic and mathematical relations (tables). In Codd model, queries express WHAT data is desired through declarative logic, while the database engine autonomously determines HOW to retrieve it from disk.',
        bn: '১৯৭০ সালে আইবিএমের কম্পিউটার বিজ্ঞানী ড. এডগার এফ কড "A Relational Model of Data for Large Shared Data Banks" শীর্ষক একটি যুগান্তকারী গবেষণা প্রকাশ করেন। কড ডিস্ক পয়েন্টার পুরোপুরি বাতিল করার প্রস্তাব দেন। ডাটাকে হার্ডওয়্যারের সাথে বেঁধে রাখার বদলে তিনি প্রথম-ক্রমের প্রেডিকেট লজিক এবং গাণিতিক রিলেশনের (টেবিলের) সাহায্যে সাজানোর তত্ত্ব দেন। কডের মডেলে ব্যবহারকারী ডিক্লারেটিভ লজিকের মাধ্যমে জানায় কী ডাটা প্রয়োজন, আর ডাটাবেস ইঞ্জিন স্বয়ংক্রিয়ভাবে ঠিক করে ডিস্ক থেকে কীভাবে তা আনতে হবে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Relational Model Anatomy: Relations, Tuples, Attributes & Domains',
        bn: 'রিলেশনাল মডেলের গঠন: রিলেশন, টিউপল, অ্যাট্রিবিউট ও ডোমেইন'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Relational database terminology and structure">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Relation Container -->
  <g transform="translate(40, 30)">
    <rect width="660" height="230" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <text x="330" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Relation (Table): "Customers" [Degree = 4 Attributes, Cardinality = 3 Tuples]</text>

    <!-- Table Header (Attributes / Columns) -->
    <g transform="translate(20, 45)">
      <rect x="0" y="0" width="100" height="34" fill="#0284c7" stroke="#0f172a" />
      <text x="50" y="22" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">id (PK)</text>

      <rect x="100" y="0" width="160" height="34" fill="#0284c7" stroke="#0f172a" />
      <text x="180" y="22" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">name (Text)</text>

      <rect x="260" y="0" width="220" height="34" fill="#0284c7" stroke="#0f172a" />
      <text x="370" y="22" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">email (Text Domain)</text>

      <rect x="480" y="0" width="140" height="34" fill="#0284c7" stroke="#0f172a" />
      <text x="550" y="22" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">country (Char-2)</text>
    </g>

    <!-- Row 1 (Tuple) -->
    <g transform="translate(20, 81)">
      <rect x="0" y="0" width="100" height="32" fill="#0f172a" stroke="#334155" />
      <text x="50" y="21" fill="#f8fafc" font-size="11" text-anchor="middle">1</text>

      <rect x="100" y="0" width="160" height="32" fill="#0f172a" stroke="#334155" />
      <text x="180" y="21" fill="#cbd5e1" font-size="11" text-anchor="middle">Alice Vance</text>

      <rect x="260" y="0" width="220" height="32" fill="#0f172a" stroke="#334155" />
      <text x="370" y="21" fill="#cbd5e1" font-size="11" text-anchor="middle">alice@example.com</text>

      <rect x="480" y="0" width="140" height="32" fill="#0f172a" stroke="#334155" />
      <text x="550" y="21" fill="#cbd5e1" font-size="11" text-anchor="middle">BD</text>
    </g>

    <!-- Row 2 (Tuple) -->
    <g transform="translate(20, 115)">
      <rect x="0" y="0" width="100" height="32" fill="#1e293b" stroke="#334155" />
      <text x="50" y="21" fill="#f8fafc" font-size="11" text-anchor="middle">2</text>

      <rect x="100" y="0" width="160" height="32" fill="#1e293b" stroke="#334155" />
      <text x="180" y="21" fill="#cbd5e1" font-size="11" text-anchor="middle">Bob Smith</text>

      <rect x="260" y="0" width="220" height="32" fill="#1e293b" stroke="#334155" />
      <text x="370" y="21" fill="#cbd5e1" font-size="11" text-anchor="middle">bob@example.com</text>

      <rect x="480" y="0" width="140" height="32" fill="#1e293b" stroke="#334155" />
      <text x="550" y="21" fill="#cbd5e1" font-size="11" text-anchor="middle">US</text>
    </g>

    <!-- Row 3 (Tuple) -->
    <g transform="translate(20, 149)">
      <rect x="0" y="0" width="100" height="32" fill="#0f172a" stroke="#334155" />
      <text x="50" y="21" fill="#f8fafc" font-size="11" text-anchor="middle">3</text>

      <rect x="100" y="0" width="160" height="32" fill="#0f172a" stroke="#334155" />
      <text x="180" y="21" fill="#cbd5e1" font-size="11" text-anchor="middle">Charlie Cole</text>

      <rect x="260" y="0" width="220" height="32" fill="#0f172a" stroke="#334155" />
      <text x="370" y="21" fill="#cbd5e1" font-size="11" text-anchor="middle">charlie@example.com</text>

      <rect x="480" y="0" width="140" height="32" fill="#0f172a" stroke="#334155" />
      <text x="550" y="21" fill="#cbd5e1" font-size="11" text-anchor="middle">UK</text>
    </g>

    <!-- Labels -->
    <text x="330" y="212" fill="#94a3b8" font-size="11" text-anchor="middle">Degree (Columns): 4  |  Cardinality (Rows): 3  |  Domain: Valid Atomic Values</text>
  </g>

  <!-- Physical Data Independence Callout -->
  <g transform="translate(40, 275)">
    <rect width="660" height="35" rx="4" fill="#020617" stroke="#334155" stroke-width="1" />
    <text x="330" y="22" fill="#a78bfa" font-size="11" font-weight="bold" text-anchor="middle">Core Rule: Physical Data Independence decouples logical relations from hardware disk layout.</text>
  </g>
</svg>`,
      caption: {
        en: 'The anatomy of a relational database table: attributes define column domains, while tuples represent individual row records.',
        bn: 'রিলেশনাল ডাটাবেস টেবিলের গঠন: অ্যাট্রিবিউট কলামের ডোমেইন নির্ধারণ করে এবং টিউপল প্রতিটি সারির রেকর্ড উপস্থাপন করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Entity',
          def: {
            en: 'An identifiable real-world object or distinct business concept (such as a User, Order, or Product) stored in a database.',
            bn: 'বাস্তব জীবনের কোনো শনাক্তযোগ্য বস্তু বা ব্যবসায়িক ধারণা (যেমন ইউজার, অর্ডার বা প্রোডাক্ট) যা ডাটাবেসে সংরক্ষিত হয়।'
          }
        },
        {
          term: 'Relation',
          def: {
            en: 'A mathematical two-dimensional table consisting of a set of named attribute columns and an unordered set of tuple rows.',
            bn: 'নির্দিষ্ট নামের কলাম ও সারির সমন্বয়ে গঠিত একটি গাণিতিক দ্বিমাত্রিক টেবিল যাতে ডাটা সুবিন্যস্ত থাকে।'
          }
        },
        {
          term: 'Tuple',
          def: {
            en: 'A single horizontal record or row in a relation containing one specific value for each attribute.',
            bn: 'একটি রিলেশনের একক অনুভূমিক রেকর্ড বা সারি যাতে প্রতিটি অ্যাট্রিবিউটের জন্য একটি নির্দিষ্ট মান থাকে।'
          }
        },
        {
          term: 'Domain',
          def: {
            en: 'The set of valid, atomic scalar values permitted for a specific attribute column (such as positive integers or date timestamps).',
            bn: 'কোনো নির্দিষ্ট কলামের জন্য অনুমোদিত বৈধ ও অবিভাজ্য মানের সেট (যেমন ধনাত্মক সংখ্যা বা তারিখের মান)।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'entity-relationship-modeling',
      text: {
        en: 'Entity-Relationship (ER) Modeling and Cardinality',
        bn: 'এন্টিটি-রিলেশনশিপ (ER) মডেলিং ও কার্ডিনালিটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Before writing SQL queries, software architects translate business domains into Entity-Relationship models. Entities represent real-world nouns, attributes represent descriptive properties, and relationships describe how entities interact. Cardinality defines the numerical bounds of these connections.',
        bn: 'SQL কোয়েরি লেখার পূর্বে সফটওয়্যার আর্কিটেক্টরা ব্যবসায়িক সমস্যাগুলোকে এন্টিটি-রিলেশনশিপ (ER) মডেলে রূপান্তর করেন। এন্টিটি বাস্তব জীবনের বিশেষ্য বা উপাদান, অ্যাট্রিবিউট তাদের বর্ণনামূলক বৈশিষ্ট্য এবং রিলেশনশিপ তাদের মধ্যকার সংযোগ নির্দেশ করে। কার্ডিনালিটি এই সংযোগগুলোর সংখ্যাগত পরিধি নির্ধারণ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'There are three fundamental cardinality patterns in relational systems. In a 1-to-1 relationship, each user has exactly 1 profile row. In a 1-to-Many relationship, 1 customer places multiple purchase orders, but each order belongs to only 1 customer. In a Many-to-Many relationship, multiple students enroll in multiple university courses; this pattern cannot be modeled in a single table and requires an associative junction relation (such as Enrollments) linking student IDs to course IDs.',
        bn: 'রিলেশনাল সিস্টেমে ৩টি মৌলিক কার্ডিনালিটি প্যাটার্ন দেখা যায়। ১-টু-১ (1:1) সম্পর্কে প্রতি ইউজারের কেবল ১টি প্রোফাইল থাকে। ১-টু-মেনি (1:N) সম্পর্কে ১ জন গ্রাহক একাধিক অর্ডার করতে পারেন, কিন্তু প্রতিটি অর্ডার কেবল ১ জন গ্রাহকেরই হয়। আর মেনি-টু-মেনি (M:N) সম্পর্কে একাধিক শিক্ষার্থী একাধিক কোর্সে ভর্তি হতে পারে; এই সম্পর্কটি একটি টেবিলে সংরক্ষণ করা যায় না বিধায় শিক্ষার্থী ও কোর্স আইডি যুক্ত করতে একটি জাংশন টেবিল (যেমন Enrollments) ব্যবহার করতে হয়।'
      }
    },
    {
      type: 'heading',
      id: 'node-relational-engine',
      text: {
        en: 'Executable Relational Engine: In-Memory Relations, Degree & Cardinality',
        bn: 'রানযোগ্য রিলেশনাল ইঞ্জিন: মেমোরিতে রিলেশন, ডিগ্রি ও কার্ডিনালিটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js simulation of a relational database engine. It implements mathematical relations, validates column domain constraints on insertion, computes degree and cardinality, and executes relational selection and projection operations.',
        bn: 'নিচে একটি রিলেশনাল ডাটাবেস ইঞ্জিনের সম্পূর্ণ Node.js সিমুলেশন দেওয়া হলো। এটি গাণিতিক রিলেশন বাস্তবায়ন করে, ইনসার্টের সময় কলামের ডোমেইন কনস্ট্রেইন্ট যাচাই করে, ডিগ্রি ও কার্ডিনালিটি হিসাব করে এবং রিলেশনাল সিলেকশন ও প্রজেকশন পরিচালনা করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Simulate 2 relational tables, compute degree and cardinality, and enforce referential checks',
        bn: '২টি রিলেশনাল টেবিল সিমুলেট, ডিগ্রি ও কার্ডিনালিটি গণনা এবং রেফারেন্সিয়াল অখণ্ডতা নিশ্চিতকরণ'
      },
      code: `// Pure in-memory relational engine demonstrating Codd relational principles
class Relation {
  constructor(name, schema) {
    this.name = name;
    this.schema = schema; // Attribute names and domain validation rules
    this.tuples = [];
  }

  insert(tuple) {
    // Validate domain constraints for every attribute
    for (const [attribute, validator] of Object.entries(this.schema)) {
      if (!validator(tuple[attribute])) {
        throw new Error(\`Domain constraint violation on \${attribute}: \${tuple[attribute]}\`);
      }
    }
    this.tuples.push(tuple);
  }

  // Degree (Arity): Count of attribute columns
  degree() {
    return Object.keys(this.schema).length;
  }

  // Cardinality: Count of tuple rows
  cardinality() {
    return this.tuples.length;
  }
}

// Define Relation 1: Customers (Degree = 4 attributes)
const Customers = new Relation('Customers', {
  id: val => typeof val === 'number' && val > 0,
  name: val => typeof val === 'string' && val.length >= 2,
  email: val => typeof val === 'string' && val.includes('@'),
  country: val => typeof val === 'string' && val.length === 2
});

// Define Relation 2: Orders (Degree = 5 attributes)
const Orders = new Relation('Orders', {
  id: val => typeof val === 'number' && val > 0,
  customerId: val => typeof val === 'number',
  itemCount: val => typeof val === 'number' && val > 0,
  totalCents: val => typeof val === 'number' && val >= 0,
  status: val => ['PENDING', 'PAID', 'SHIPPED'].includes(val)
});

// Insert 3 tuples into Customers (Cardinality = 3)
Customers.insert({ id: 1, name: 'Alice', email: 'alice@example.com', country: 'BD' });
Customers.insert({ id: 2, name: 'Bob', email: 'bob@example.com', country: 'US' });
Customers.insert({ id: 3, name: 'Charlie', email: 'charlie@example.com', country: 'UK' });

// Insert 4 tuples into Orders (Cardinality = 4)
Orders.insert({ id: 101, customerId: 1, itemCount: 2, totalCents: 6500, status: 'PAID' });
Orders.insert({ id: 102, customerId: 1, itemCount: 1, totalCents: 2400, status: 'SHIPPED' });
Orders.insert({ id: 103, customerId: 2, itemCount: 5, totalCents: 12000, status: 'PAID' });
Orders.insert({ id: 104, customerId: 3, itemCount: 1, totalCents: 1500, status: 'PENDING' });

// Relational Selection: Filter orders with totalCents > 5000 (2 orders)
const highValueOrders = Orders.tuples.filter(order => order.totalCents > 5000);

// Referential Integrity Check: Block inserting an order with non-existent customer 99
let orphanBlocked = false;
try {
  const customerExists = Customers.tuples.some(c => c.id === 99);
  if (!customerExists) {
    throw new Error('Foreign key violation: Customer 99 does not exist');
  }
  Orders.insert({ id: 105, customerId: 99, itemCount: 1, totalCents: 1000, status: 'PENDING' });
} catch (err) {
  orphanBlocked = true;
}

console.log(\`[Relational Engine] Created relation Customers: degree \${Customers.degree()}, cardinality \${Customers.cardinality()}.\`);
console.log(\`[Relational Engine] Created relation Orders: degree \${Orders.degree()}, cardinality \${Orders.cardinality()}.\`);
console.log(\`[Relational Selection] \${highValueOrders.length} orders matched predicate (total > $50.00).\`);
console.log(\`[Referential Check] Blocked orphaned order for unknown customer_id 99 (1/1 caught: \${orphanBlocked}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Vocabulary Note: SQL Table vs Mathematical Relation',
        bn: 'শব্দকোষ নোট: SQL টেবিল বনাম গাণিতিক রিলেশন'
      },
      text: {
        en: 'In pure relational mathematics, a relation is a set of tuples, meaning duplicate rows are strictly impossible and rows have no inherent order. In practical SQL implementations, tables are multisets (bags): duplicate rows can exist unless blocked by a PRIMARY KEY or UNIQUE constraint, and row order is undefined unless specified with ORDER BY.',
        bn: 'বিশুদ্ধ রিলেশনাল গণিতে একটি রিলেশন হলো টিউপলের একটি সেট, যার অর্থ এতে কোনো ডুপ্লিকেট সারি থাকা সম্ভব নয় এবং সারির কোনো নির্দিষ্ট ক্রম থাকে না। কিন্তু বাস্তব SQL ডাটাবেসে টেবিলগুলো মূলত মাল্টিসেট (ব্যাগ): PRIMARY KEY বা UNIQUE কনস্ট্রেইন্ট না থাকলে ডুপ্লিকেট রো থাকতে পারে এবং ORDER BY উল্লেখ না করলে সারির ক্রম অনির্ধারিত থাকে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Relational Degree and Cardinality Calculator',
        bn: 'রিলেশনাল ডিগ্রি ও কার্ডিনালিটি ক্যালকুলেটর'
      },
      description: {
        en: 'Inspect relation metrics: verify that adding attributes increments degree and adding records increments cardinality.',
        bn: 'রিলেশন মেট্রিক্স পরীক্ষা করুন: কলাম যোগ করলে কীভাবে ডিগ্রি বাড়ে এবং রেকর্ড যোগ করলে কীভাবে কার্ডিনালিটি বাড়ে তা দেখুন।'
      },
      code: `const schemaColumns = ['user_id', 'username', 'email_address', 'signup_date', 'account_status'];
const initialRows = [
  { user_id: 1, username: 'sami', email_address: 'sami@example.com', signup_date: '2026-01-10', account_status: 'ACTIVE' },
  { user_id: 2, username: 'tariq', email_address: 'tariq@example.com', signup_date: '2026-02-14', account_status: 'ACTIVE' }
];

console.log('Relation Name: Users');
console.log('Degree (Number of Columns):', schemaColumns.length);
console.log('Cardinality (Number of Rows):', initialRows.length);

// Add a 3rd row to test cardinality increase
initialRows.push({
  user_id: 3,
  username: 'nadia',
  email_address: 'nadia@example.com',
  signup_date: '2026-03-01',
  account_status: 'PENDING'
});

console.log('Updated Cardinality:', initialRows.length);`,
      tests: [
        {
          name: {
            en: 'Calculates initial degree of 5 columns',
            bn: '৫টি কলামের প্রাথমিক ডিগ্রি হিসাব করে'
          },
          expected: 'Degree (Number of Columns): 5'
        },
        {
          name: {
            en: 'Updates cardinality to 3 after row insertion',
            bn: 'সারি যুক্ত করার পর কার্ডিনালিটি ৩ এ উন্নীত করে'
          },
          expected: 'Updated Cardinality: 3'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-ent-ex-1',
      kind: 'mcq',
      topic: 'physical-data-independence',
      question: {
        en: 'What fundamental breakthrough did Dr. Edgar Codd relational model introduce to replace older pointer-based databases?',
        bn: 'পুরোনো পয়েন্টার-ভিত্তিক ডাটাবেস প্রতিস্থাপন করতে ড. এডগার কডের রিলেশনাল মডেল কোন মৌলিক উদ্ভাবন নিয়ে এসেছিল?'
      },
      options: [
        {
          en: 'Physical Data Independence: decoupling declarative logical data queries from the physical layout of disk hardware pointers',
          bn: 'ফিজিক্যাল ডাটা ইন্ডিপেন্ডেন্স: হার্ডডিস্কের ভৌত মেমরি পয়েন্টার থেকে ডিক্লারেটিভ লজিক্যাল ডাটা কোয়েরিকে সম্পূর্ণ পৃথক করা'
        },
        {
          en: 'Storing all database tables directly inside the computer monitor display',
          bn: 'ডাটাবেসের সকল টেবিল সরাসরি কম্পিউটার মনিটরের ডিসপ্লেতে সংরক্ষণ করা'
        },
        {
          en: 'Requiring developers to memorize the exact hard drive sector numbers of their files',
          bn: 'ফাইলের সুনির্দিষ্ট হার্ডড্রাইভ সেক্টর নম্বর মুখস্থ রাখা ডেভেলপারদের জন্য বাধ্যতামূলক করা'
        },
        {
          en: 'Banning the use of numbers and arithmetic inside SQL statements',
          bn: 'SQL স্টেটমেন্টের ভেতর সংখ্যা এবং পাটিগণিতের ব্যবহার সম্পূর্ণ নিষিদ্ধ করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Logical queries ask WHAT data is needed, without knowing HOW disks store bytes.',
        bn: 'লজিক্যাল কোয়েরি জানতে চায় কী ডাটা প্রয়োজন, ডিস্কে কীভাবে তা সংরক্ষিত আছে তা না জেনেও।'
      },
      explanation: {
        en: 'In pre-relational systems, changing hard drives broke application code because queries used raw disk pointers. The relational model separates logical schema from physical storage, allowing database engines to optimize storage without breaking queries.',
        bn: 'রিলেশনাল-পূর্ব যুগে হার্ডড্রাইভ পুনর্গঠন করলে কোয়েরি ভেঙে যেত কারণ কোড ডিস্ক পয়েন্টার নির্ভর ছিল। রিলেশনাল মডেল লজিক্যাল স্কিমাকে ফিজিক্যাল স্টোরেজ থেকে আলাদা করে, ফলে কোয়েরি পরিবর্তন না করেই ডাটাবেস ইঞ্জিন ডিস্কের ব্যবহার অপ্টিমাইজ করতে পারে।'
      }
    },
    {
      id: 'db-ent-ex-2',
      kind: 'mcq',
      topic: 'degree-vs-cardinality',
      question: {
        en: 'In relational database terminology, what is the exact difference between the degree and the cardinality of a relation?',
        bn: 'রিলেশনাল ডাটাবেস পরিভাষায় একটি রিলেশনের ডিগ্রি এবং কার্ডিনালিটির মধ্যে সুনির্দিষ্ট পার্থক্য কী?'
      },
      options: [
        {
          en: 'Degree is the number of attribute columns; Cardinality is the number of tuple rows',
          bn: 'ডিগ্রি হলো অ্যাট্রিবিউট বা কলামের সংখ্যা; আর কার্ডিনালিটি হলো টিউপল বা সারির সংখ্যা'
        },
        {
          en: 'Degree is the temperature of the server CPU; Cardinality is the internet bandwidth',
          bn: 'ডিগ্রি হলো সার্ভার সিপিইউর তাপমাত্রা; আর কার্ডিনালিটি হলো ইন্টারনেট ব্যান্ডউইথ'
        },
        {
          en: 'Degree is the file size in megabytes; Cardinality is the database name length',
          bn: 'ডিগ্রি হলো মেগাবাইটে ফাইলের আকার; আর কার্ডিনালিটি হলো ডাটাবেসের নামের দৈর্ঘ্য'
        },
        {
          en: 'Degree is the number of database users; Cardinality is the port number',
          bn: 'ডিগ্রি হলো ডাটাবেস ব্যবহারকারীর সংখ্যা; আর কার্ডিনালিটি হলো পোর্ট নম্বর'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think vertical vs horizontal: degree counts columns, cardinality counts rows.',
        bn: 'উল্লম্ব বনাম অনুভূমিক চিন্তা করুন: ডিগ্রি কলাম গোনে, আর কার্ডিনালিটি সারি গোনে।'
      },
      explanation: {
        en: 'The degree (or arity) of a relation represents the number of attributes (columns) in its schema. The cardinality represents the total count of tuples (rows) currently stored in the relation.',
        bn: 'একটি রিলেশনের ডিগ্রি (বা অ্যারাইটি) তার স্কিমার মোট অ্যাট্রিবিউট বা কলাম সংখ্যা নির্দেশ করে। আর কার্ডিনালিটি নির্দেশ করে সেই টেবিলে বর্তমানে সংরক্ষিত মোট টিউপল বা সারির সংখ্যা।'
      }
    },
    {
      id: 'db-ent-ex-3',
      kind: 'mcq',
      topic: 'many-to-many-junction-table',
      question: {
        en: 'How must a Many-to-Many (M:N) relationship (such as Students and Courses) be modeled in a relational database?',
        bn: 'একটি রিলেশনাল ডাটাবেসে কীভাবে মেনি-টু-মেনি (M:N) সম্পর্ক (যেমন শিক্ষার্থী ও কোর্স) মডেল করতে হয়?'
      },
      options: [
        {
          en: 'By creating an associative junction table (e.g. Enrollments) containing foreign keys referencing both primary tables',
          bn: 'একটি সহযোগী জাংশন টেবিল (যেমন Enrollments) তৈরি করে যা উভয় মূল টেবিলের ফরেন কি ধারণ করে'
        },
        {
          en: 'By storing all course names as a comma-separated string inside a single text column',
          bn: 'একটিমাত্র টেক্সট কলামের ভেতর কমা দিয়ে দিয়ে সকল কোর্সের নাম লিখে রেখে'
        },
        {
          en: 'By merging Students and Courses into a single giant table with 500 duplicate columns',
          bn: 'শিক্ষার্থী ও কোর্সকে ৫০০টি ডুপ্লিকেট কলাম বিশিষ্ট একটি বিশাল টেবিলে একীভূত করে'
        },
        {
          en: 'Many-to-Many relationships are completely banned in relational databases',
          bn: 'রিলেশনাল ডাটাবেসে মেনি-টু-মেনি সম্পর্ক তৈরি করা সম্পূর্ণ নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'A junction table breaks 1 Many-to-Many relationship into 2 One-to-Many relationships.',
        bn: 'একটি জাংশন টেবিল ১টি মেনি-টু-মেনি সম্পর্ককে ২টি ওয়ান-টু-মেনি সম্পর্কে রূপান্তর করে।'
      },
      explanation: {
        en: 'Direct Many-to-Many tables violate relational normalization rules. Relational databases resolve M:N relationships by introducing an intermediate junction table with composite keys, linking one-to-many from each parent table.',
        bn: 'সরাসরি মেনি-টু-মেনি টেবিল রিলেশনাল নরমালাইজেশনের নিয়ম লঙ্ঘন করে। রিলেশনাল ডাটাবেস একটি মধ্যবর্তী জাংশন টেবিল যুক্ত করে প্রতিটি মূল টেবিলের সাথে ওয়ান-টু-মেনি সংযোগের মাধ্যমে এই সমস্যার সমাধান করে।'
      }
    },
    {
      id: 'db-ent-ex-4',
      kind: 'mcq',
      topic: 'domain-constraints-validation',
      question: {
        en: 'What is an attribute domain in relational database theory?',
        bn: 'রিলেশনাল ডাটাবেস তত্ত্বে একটি অ্যাট্রিবিউট ডোমেইন কী?'
      },
      options: [
        {
          en: 'The permitted universe of valid, atomic scalar values that a specific column is allowed to hold',
          bn: 'অনুমোদিত বৈধ ও অবিভাজ্য মানের সেট যা কোনো নির্দিষ্ট কলামে সংরক্ষণ করার অনুমতি থাকে'
        },
        {
          en: 'The web domain name URL where the database server is hosted',
          bn: 'ওয়েব ডোমেইন ইউআরএল যেখানে ডাটাবেস সার্ভারটি হোস্ট করা হয়েছে'
        },
        {
          en: 'The operating system folder where SQL scripts are saved',
          bn: 'অপারেটিং সিস্টেমের যে ফোল্ডারে এসকিউএল স্ক্রিপ্ট সংরক্ষণ করা হয়'
        },
        {
          en: 'The total amount of electrical power consumed by database storage disks',
          bn: 'ডাটাবেস স্টোরেজ ডিস্ক দ্বারা ব্যবহৃত মোট বৈদ্যুতিক শক্তির পরিমাণ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Domains define data types and validity rules (e.g. positive integers or formatted emails).',
        bn: 'ডোমেইন ডাটা টাইপ ও তার বৈধতার নিয়ম নির্ধারণ করে (যেমন ধনাত্মক সংখ্যা বা সঠিক ইমেইল)।'
      },
      explanation: {
        en: 'In relational theory, every attribute has a domain defining its data type, permitted length, and integrity constraints. Inserting a value outside the domain causes a constraint violation.',
        bn: 'রিলেশনাল তত্ত্বে প্রতিটি কলামের একটি ডোমেইন থাকে যা তার ডাটা টাইপ, অনুমোদিত আকার ও বৈধতার নিয়ম নির্ধারণ করে। ডোমেইনের বাইরের কোনো মান যুক্ত করতে গেলে কনস্ট্রেইন্ট ভায়োলেশন ঘটে।'
      }
    }
  ],
  quiz: {
    id: 'entities-and-the-relation-quiz',
    title: {
      en: 'Entities & The Relational Model Quiz',
      bn: 'এন্টিটি ও রিলেশনাল মডেল কুইজ'
    },
    questions: [
      {
        id: 'db-ent-qz-1',
        kind: 'mcq',
        topic: 'dr-edgar-codd-paper',
        question: {
          en: 'In which year did Dr. Edgar F. Codd publish the foundational paper that introduced the relational database model?',
          bn: 'ড. এডগার এফ কড কোন সালে তার ঐতিহাসিক গবেষণাপত্র প্রকাশ করে রিলেশনাল ডাটাবেস মডেলের ভিত্তি স্থাপন করেছিলেন?'
        },
        options: [
          {
            en: '1970',
            bn: '১৯৭০'
          },
          {
            en: '1995',
            bn: '১৯৯৫'
          },
          {
            en: '2010',
            bn: '২০১০'
          },
          {
            en: '1950',
            bn: '১৯৫০'
          }
        ],
        answer: 0,
        hint: {
          en: 'It was published at the start of the 1970s decade at IBM Research.',
          bn: 'আইবিএম রিসার্চে এটি ১৯৭০ দশকের শুরুতে প্রকাশিত হয়েছিল।'
        },
        explanation: {
          en: 'Dr. Edgar F. Codd published "A Relational Model of Data for Large Shared Data Banks" in 1970, launching the modern relational database industry and replacing pointer-based networks.',
          bn: 'ড. এডগার এফ কড ১৯৭০ সালে "A Relational Model of Data for Large Shared Data Banks" প্রকাশ করেন, যা আধুনিক রিলেশনাল ডাটাবেস শিল্পের জন্ম দেয় এবং পয়েন্টার-ভিত্তিক সিস্টেমের অবসান ঘটায়।'
        }
      },
      {
        id: 'db-ent-qz-2',
        kind: 'mcq',
        topic: 'mathematical-relation-vs-table',
        question: {
          en: 'What is the primary difference between a theoretical mathematical relation and a practical SQL table?',
          bn: 'তাত্ত্বিক গাণিতিক রিলেশন এবং বাস্তব জীবনের SQL টেবিলের মধ্যে প্রধান পার্থক্য কী?'
        },
        options: [
          {
            en: 'A mathematical relation is a set with strictly zero duplicate tuples and no ordering; a SQL table is a multiset allowing duplicate rows unless prevented by constraints',
            bn: 'গাণিতিক রিলেশন হলো ডুপ্লিকেটহীন ও ক্রমহীন টিউপলের একটি সেট; আর SQL টেবিল হলো একটি মাল্টিসেট যাতে কনস্ট্রেইন্ট না থাকলে ডুপ্লিকেট সারি থাকতে পারে'
          },
          {
            en: 'SQL tables can only hold numbers, while mathematical relations can only hold text',
            bn: 'SQL টেবিল কেবল সংখ্যা রাখতে পারে, আর গাণিতিক রিলেশন কেবল টেক্সট রাখতে পারে'
          },
          {
            en: 'Mathematical relations require graphics cards, while SQL tables run on hard drives',
            bn: 'গাণিতিক রিলেশনের জন্য গ্রাফিক্স কার্ড লাগে, আর SQL টেবিল হার্ডড্রাইভে চলে'
          },
          {
            en: 'SQL tables automatically delete themselves after 24 hours',
            bn: 'SQL টেবিল প্রতি ২৪ ঘণ্টা পর পর স্বয়ংক্রিয়ভাবে মুছে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pure sets have no duplicates; SQL multisets allow duplicate rows without unique keys.',
          bn: 'বিশুদ্ধ সেটে কোনো ডুপ্লিকেট থাকে না; কিন্তু ইউনিক কি না থাকলে SQL টেবিলে একই রো একাধিকবার থাকতে পারে।'
        },
        explanation: {
          en: 'In set theory, duplicates cannot exist. In SQL, tables are multisets (bags): identical rows can be inserted unless a PRIMARY KEY or UNIQUE constraint is explicitly defined on the table schema.',
          bn: 'সেট তত্ত্বে ডুপ্লিকেটের কোনো অস্তিত্ব নেই। কিন্তু SQL-এ টেবিলগুলো মাল্টিসেট হিসেবে কাজ করে: টেবিলে স্পষ্ট PRIMARY KEY বা UNIQUE কনস্ট্রেইন্ট না থাকলে হুবহু একই রো একাধিকবার যুক্ত হতে পারে।'
        }
      },
      {
        id: 'db-ent-qz-3',
        kind: 'mcq',
        topic: 'declarative-vs-imperative-queries',
        question: {
          en: 'Why is SQL described as a declarative programming language rather than an imperative language?',
          bn: 'SQL-কে কেন ইম্পারেটিভ ভাষার বদলে একটি ডিক্লারেটিভ প্রোগ্রামিং ভাষা হিসেবে গণ্য করা হয়?'
        },
        options: [
          {
            en: 'Because developers declare WHAT data they want, and the database query optimizer plans HOW to retrieve it efficiently',
            bn: 'কারণ ডেভেলপাররা জানায় তারা কী ডাটা পেতে চায়, আর ডাটাবেস কোয়েরি অপ্টিমাইজার পরিকল্পনা করে কীভাবে তা সবচেয়ে দ্রুত উদ্ধার করা যায়'
          },
          {
            en: 'Because SQL commands must be declared in government tax documents',
            bn: 'কারণ সরকারি ট্যাক্স নথিতে সকল SQL কমান্ড ঘোষণা করা বাধ্যতামূলক'
          },
          {
            en: 'Because SQL cannot execute loops, variables, or functions',
            bn: 'কারণ SQL কোনো লুপ, ভ্যারিয়েবল বা ফাংশন চালাতে পারে না'
          },
          {
            en: 'Because SQL files must have the file extension .declare',
            bn: 'কারণ SQL ফাইলের এক্সটেনশন অবশ্যই .declare হতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Declarative specifies the desired outcome; imperative specifies algorithmic step-by-step instructions.',
          bn: 'ডিক্লারেটিভ পদ্ধতি কাঙ্ক্ষিত ফলাফল প্রকাশ করে; আর ইম্পারেটিভ পদ্ধতি ধাপে ধাপে অ্যালগরিদম নির্ধারণ করে।'
        },
        explanation: {
          en: 'Declarative queries state the desired result set using mathematical conditions (WHERE, JOIN). The database query planner evaluates indexes, statistics, and join algorithms to determine the optimal execution plan.',
          bn: 'ডিক্লারেটিভ কোয়েরিতে গাণিতিক শর্তের (WHERE, JOIN) মাধ্যমে কী ফলাফল চাই তা উল্লেখ করা হয়। ডাটাবেসের কোয়েরি প্ল্যানার ইনডেক্স ও পরিসংখ্যান দেখে সবচেয়ে কার্যকর উপায়ে ডাটা খুঁজে বের করে।'
        }
      },
      {
        id: 'db-ent-qz-4',
        kind: 'mcq',
        topic: 'cardinality-calculation',
        question: {
          en: 'If a database table named Products has 8 attribute columns and currently stores 500 product rows, what are its degree and cardinality?',
          bn: 'যদি Products নামের একটি ডাটাবেস টেবিলে ৮টি কলাম থাকে এবং বর্তমানে ৫০০টি পণ্য সংরক্ষিত থাকে, তবে তার ডিগ্রি এবং কার্ডিনালিটি কত?'
        },
        options: [
          {
            en: 'Degree = 8, Cardinality = 500',
            bn: 'ডিগ্রি = ৮, কার্ডিনালিটি = ৫০০'
          },
          {
            en: 'Degree = 500, Cardinality = 8',
            bn: 'ডিগ্রি = ৫০০, কার্ডিনালিটি = ৮'
          },
          {
            en: 'Degree = 4000, Cardinality = 0',
            bn: 'ডিগ্রি = ৪০০০, কার্ডিনালিটি = ০'
          },
          {
            en: 'Degree = 1, Cardinality = 1',
            bn: 'ডিগ্রি = ১, কার্ডিনালিটি = ১'
          }
        ],
        answer: 0,
        hint: {
          en: 'Degree counts columns (8); cardinality counts rows (500).',
          bn: 'ডিগ্রি কলাম সংখ্যা গোনে (৮); কার্ডিনালিটি সারি সংখ্যা গোনে (৫০০)।'
        },
        explanation: {
          en: 'Degree is the number of attribute columns in the schema (8 columns). Cardinality is the total number of tuple rows currently residing in the table (500 rows).',
          bn: 'ডিগ্রি হলো স্কিমার মোট কলাম সংখ্যা (৮টি কলাম)। আর কার্ডিনালিটি হলো টেবিলে সংরক্ষিত মোট সারির সংখ্যা (৫০০টি রো)।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'schemas-and-the-table',
    title: {
      en: 'Schemas, Tables & DDL: Data Types & Column Constraints',
      bn: 'স্কিমা, টেবিল ও DDL: ডাটা টাইপ ও কলাম কনস্ট্রেইন্ট'
    }
  }
};
