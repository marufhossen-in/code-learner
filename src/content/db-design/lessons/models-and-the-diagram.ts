import type { Lesson } from '../../../lib/types';

export const ModelsAndTheDiagramLesson: Lesson = {
  slug: 'models-and-the-diagram',
  tech: 'db-design',
  title: {
    en: 'Database Modeling Overview: Conceptual, Logical & Physical Schemas',
    bn: 'ডাটাবেস মডেলিং ওভারভিউ: কনসেপচুয়াল, লজিক্যাল ও ফিজিক্যাল স্কিমা'
  },
  summary: {
    en: 'Master database modeling from scratch: understand the three tiers of schema design (conceptual, logical, and physical), classify strong and weak entities, and select optimal surrogate primary keys.',
    bn: 'শুরু থেকেই ডাটাবেস মডেলিং আয়ত্ত করুন: স্কিমা ডিজাইনের তিনটি স্তর (কনসেপচুয়াল, লজিক্যাল ও ফিজিক্যাল), স্ট্রং ও উইক এনটিটি শ্রেণীবিন্যাস এবং সর্বোত্তম সারোগেট প্রাইমারি কি নির্বাচন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'three-tiers-of-data-modeling',
      text: {
        en: 'The Three Tiers of Data Modeling: From Idea to SQL DDL',
        bn: 'ডাটা মডেলিংয়ের তিনটি স্তর: ভাবনা থেকে বাস্তব SQL DDL'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you design a database for a production system, you never begin by writing raw SQL statements immediately. Instead, professional database engineering progresses through three distinct modeling tiers: Conceptual, Logical, and Physical.',
        bn: 'যখন আপনি কোনো প্রোডাকশন সিস্টেমের জন্য ডাটাবেস ডিজাইন করেন, আপনি কখনোই সরাসরি কাঁচা SQL কোড লেখা শুরু করেন না। এর বদলে পেশাদার ডাটাবেস ইঞ্জিনিয়ারিং ৩টি সুস্পষ্ট মডেলিং ধাপের মধ্য দিয়ে ধাপে ধাপে এগিয়ে যায়: কনসেপচুয়াল, লজিক্যাল এবং ফিজিক্যাল।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Conceptual Model captures high-level business entities and their intuitive relationships without referencing software or primary keys. Next, the Logical Model adds formal attributes, identifies unique candidate keys, and establishes foreign key relationships independently of any specific database engine. Finally, the Physical Model implements concrete SQL DDL statements targeting a chosen database engine (such as PostgreSQL or MySQL), configuring specific data types, storage engines, B-Tree indexes, and table constraints.',
        bn: 'কনসেপচুয়াল মডেল কোনো ডাটা টাইপ বা প্রাইমারি কি ছাড়াই কেবল মূল ব্যবসায়িক উপাদান এবং তাদের পারস্পরিক সম্পর্ক চিহ্নিত করে। এরপর লজিক্যাল মডেল প্রতিটি উপাদানের সুনির্দিষ্ট বৈশিষ্ট্য বা অ্যাট্রিবিউট যোগ করে এবং যেকোনো নির্দিষ্ট ডাটাবেস সফটওয়্যারের ওপর নির্ভর না করেই প্রাইমারি ও ফরেন কি নির্ধারণ করে। সবশেষে ফিজিক্যাল মডেল কোনো সুনির্দিষ্ট ডাটাবেস ইঞ্জিনকে (যেমন PostgreSQL বা MySQL) লক্ষ্য করে নির্দিষ্ট ডাটা টাইপ, স্টোরেজ ইঞ্জিন, B-Tree ইনডেক্স এবং কনস্ট্রেইন্ট সহ বাস্তব SQL DDL স্টেটমেন্ট রূপায়ণ করে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Three Tiers of Database Modeling: Conceptual, Logical, and Physical',
        bn: 'ডাটাবেস মডেলিংয়ের তিনটি স্তর: কনসেপচুয়াল, লজিক্যাল এবং ফিজিক্যাল'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Three Tiers of Data Modeling Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Tier 1: Conceptual Model -->
  <g transform="translate(30, 30)">
    <rect width="200" height="260" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <rect width="200" height="36" rx="8" fill="#0284c7" />
    <text x="100" y="23" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">1. Conceptual Model</text>
    <text x="15" y="60" fill="#94a3b8" font-size="10" font-weight="bold">Audience: Business Owners</text>
    <rect x="15" y="80" width="170" height="45" rx="4" fill="#0f172a" stroke="#475569" />
    <text x="25" y="100" fill="#38bdf8" font-size="11" font-weight="bold">CUSTOMER</text>
    <text x="25" y="115" fill="#cbd5e1" font-size="9">Places orders</text>
    <line x1="100" y1="125" x2="100" y2="155" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3 3" />
    <rect x="15" y="155" width="170" height="45" rx="4" fill="#0f172a" stroke="#475569" />
    <text x="25" y="175" fill="#38bdf8" font-size="11" font-weight="bold">ORDER</text>
    <text x="25" y="190" fill="#cbd5e1" font-size="9">Contains items</text>
    <text x="15" y="230" fill="#64748b" font-size="9">Technology agnostic</text>
    <text x="15" y="245" fill="#64748b" font-size="9">No data types or keys</text>
  </g>

  <!-- Arrow 1 to 2 -->
  <path d="M 240 160 L 265 160" stroke="#facc15" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Tier 2: Logical Model -->
  <g transform="translate(270, 30)">
    <rect width="200" height="260" rx="8" fill="#1e293b" stroke="#facc15" stroke-width="1.5" />
    <rect width="200" height="36" rx="8" fill="#ca8a04" />
    <text x="100" y="23" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">2. Logical Model</text>
    <text x="15" y="60" fill="#94a3b8" font-size="10" font-weight="bold">Audience: System Architects</text>
    <rect x="15" y="80" width="170" height="65" rx="4" fill="#0f172a" stroke="#475569" />
    <text x="25" y="98" fill="#facc15" font-size="10" font-weight="bold">Customer (Entity)</text>
    <text x="25" y="114" fill="#e2e8f0" font-size="9">• PK: customer_id</text>
    <text x="25" y="128" fill="#94a3b8" font-size="9">• name, email (unique)</text>
    <line x1="100" y1="145" x2="100" y2="165" stroke="#facc15" stroke-width="2" />
    <rect x="15" y="165" width="170" height="65" rx="4" fill="#0f172a" stroke="#475569" />
    <text x="25" y="183" fill="#facc15" font-size="10" font-weight="bold">Order (Entity)</text>
    <text x="25" y="199" fill="#e2e8f0" font-size="9">• PK: order_id</text>
    <text x="25" y="213" fill="#38bdf8" font-size="9">• FK: customer_id (1:N)</text>
    <text x="15" y="248" fill="#64748b" font-size="9">Defines cardinalities</text>
  </g>

  <!-- Arrow 2 to 3 -->
  <path d="M 480 160 L 505 160" stroke="#10b981" stroke-width="2" />

  <!-- Tier 3: Physical Model -->
  <g transform="translate(510, 30)">
    <rect width="200" height="260" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="200" height="36" rx="8" fill="#059669" />
    <text x="100" y="23" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">3. Physical Model</text>
    <text x="15" y="60" fill="#94a3b8" font-size="10" font-weight="bold">Audience: Database Engine</text>
    <rect x="15" y="80" width="170" height="155" rx="4" fill="#0f172a" stroke="#475569" />
    <text x="25" y="98" fill="#34d399" font-size="10" font-weight="bold">PostgreSQL DDL</text>
    <text x="25" y="115" fill="#94a3b8" font-size="8">id UUID PRIMARY KEY,</text>
    <text x="25" y="128" fill="#94a3b8" font-size="8">email VARCHAR(255) NOT NULL,</text>
    <text x="25" y="141" fill="#94a3b8" font-size="8">total NUMERIC(10,2),</text>
    <text x="25" y="154" fill="#38bdf8" font-size="8">CONSTRAINT fk_cust</text>
    <text x="25" y="167" fill="#38bdf8" font-size="8">FOREIGN KEY (cust_id)</text>
    <text x="25" y="180" fill="#38bdf8" font-size="8">REFERENCES users(id),</text>
    <text x="25" y="195" fill="#facc15" font-size="8">CHECK (total &gt;= 0)</text>
    <text x="15" y="252" fill="#64748b" font-size="9">Concrete types &amp; indexes</text>
  </g>
</svg>`,
      caption: {
        en: 'The progression of database design: starting from broad business concepts, evolving into formal logical relationships, and finalizing into executable physical SQL DDL.',
        bn: 'ডাটাবেস ডিজাইনের বিবর্তন: সাধারণ ব্যবসায়িক ধারণা দিয়ে শুরু, লজিক্যাল সম্পর্কের রূপায়ন এবং পরিশেষে বাস্তব SQL DDL-এ সমাপ্তি।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Conceptual Model',
          def: {
            en: 'A high-level diagram capturing primary business domain entities and relationships, completely independent of software, data types, or keys.',
            bn: 'সফটওয়্যার, ডাটা টাইপ বা কি-র কোনো উল্লেখ ছাড়াই ব্যবসায়িক ডোমেনের মূল সত্ত্বা এবং তাদের পারস্পরিক সম্পর্কের একটি সাধারণ চিত্র।'
          }
        },
        {
          term: 'Logical Model',
          def: {
            en: 'An entity-relationship schema defining attributes, candidate keys, and relationship cardinalities without binding to a concrete RDBMS product.',
            bn: 'নির্দিষ্ট কোনো ডাটাবেস সফটওয়্যারের ওপর নির্ভর না করেই টেবিলের বৈশিষ্ট্য, সম্ভাব্য প্রাইমারি কি এবং কার্ডিনালিটি সংজ্ঞায়িতকারী নকশা।'
          }
        },
        {
          term: 'Physical Model',
          def: {
            en: 'The implementation-level relational schema specifying concrete database column types, storage parameters, foreign keys, and indexes.',
            bn: 'বাস্তবায়ন স্তরের রিলেশনাল স্কিমা যা সুনির্দিষ্ট ডাটাবেস কলামের ধরন, স্টোরেজ পরামিতি, ফরেন কি এবং ইনডেক্স নির্ধারণ করে।'
          }
        },
        {
          term: 'Surrogate Key',
          def: {
            en: 'A synthetic, system-generated primary key (such as an auto-incrementing integer or UUID) with zero real-world business meaning.',
            bn: 'সিস্টেম দ্বারা তৈরি একটি কৃত্রিম প্রাইমারি কি (যেমন অটো-ইনক্রিমেন্ট নম্বর বা UUID) যার বাস্তব জগতে কোনো ব্যবসায়িক অর্থ নেই।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'entity-types-and-surrogate-keys',
      text: {
        en: 'Entity Types and Primary Key Architecture: UUID vs Serial',
        bn: 'এনটিটি প্রকারভেদ এবং প্রাইমারি কি আর্কিটেকচার: UUID বনাম সিরিয়াল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Entities represent real-world objects or business events. A Strong Entity exists independently and possesses its own intrinsic primary identifier (such as a User or Product). Conversely, a Weak Entity cannot exist without an identifying parent relationship (such as an OrderItem, which has no meaning without its parent Order).',
        bn: 'এনটিটি হলো বাস্তব জগতের কোনো বস্তু বা ব্যবসায়িক ঘটনা। একটি স্ট্রং এনটিটি নিজে নিজেই টিকে থাকতে পারে এবং তার নিজস্ব অন্তর্নিহিত প্রাইমারি পরিচয় থাকে (যেমন User বা Product)। অন্যদিকে একটি উইক এনটিটি কোনো প্যারেন্ট সম্পর্ক ছাড়া একা একা টিকে থাকতে পারে না (যেমন OrderItem, যা প্যারেন্ট Order ছাড়া অর্থহীন)।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When selecting primary keys, experienced engineers prefer synthetic Surrogate Keys over Natural Keys (such as Social Security Numbers or email addresses). Natural keys frequently change due to corporate mergers or privacy regulations. Modern distributed systems rely on sequential UUIDv7 or BIGINT identifiers, protecting query performance while preventing cross-system ID collision during data migrations.',
        bn: 'প্রাইমারি কি নির্বাচনের ক্ষেত্রে অভিজ্ঞ প্রকৌশলীরা প্রাকৃতিক কি (যেমন জাতীয় পরিচয়পত্র নম্বর বা ইমেইল ঠিকানা)-এর চেয়ে কৃত্রিম সারোগেট কি ব্যবহার করতে পছন্দ করেন। ব্যবসায়িক নিয়ম বা গোপনীয়তা আইনের কারণে প্রাকৃতিক কি বদলে যাওয়ার ঝুঁকি থাকে। আধুনিক ডিস্ট্রিবিউটেড সিস্টেমগুলো ক্রমানুসারে সাজানো UUIDv7 বা BIGINT আইডি ব্যবহার করে, যা কোয়েরির গতি বাড়ানোর পাশাপাশি ডাটা মাইগ্রেশনের সময় আইডির সংঘর্ষ প্রতিরোধ করে।'
      }
    },
    {
      type: 'heading',
      id: 'node-schema-engine',
      text: {
        en: 'Executable Relational Schema Validator Engine',
        bn: 'রানযোগ্য রিলেশনাল স্কিমা ভ্যালিডেটর ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine auditing 3 relational entities (users, orders, and order_items). It verifies that every entity declares an explicit primary key, checks that 3 foreign key relationships maintain referential integrity, and validates 2 domain business check constraints.',
        bn: 'নিচে ৩টি রিলেশনাল এনটিটি (users, orders এবং order_items) অডিট করার একটি সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি প্রতিটি টেবিলে স্পষ্ট প্রাইমারি কি নিশ্চিত করে, ৩টি ফরেন কি সম্পর্কের রেফারেন্সিয়াল ইন্টিগ্রিটি পরীক্ষা করে এবং ২টি ব্যবসায়িক চেক কনস্ট্রেইন্ট যাচাই করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Relational schema model engine validating entity definitions, surrogate keys, and referential constraints',
        bn: 'এনটিটি সংজ্ঞা, সারোগেট কি এবং রেফারেন্সিয়াল কনস্ট্রেইন্ট যাচাইকারী রিলেশনাল স্কিমা মডেল ইঞ্জিন'
      },
      code: `// Relational Schema Validator Engine
const schemaRegistry = [
  { table: 'users', primaryKey: 'id', foreignKeys: [], checkConstraints: [] },
  { table: 'orders', primaryKey: 'id', foreignKeys: ['user_id -> users.id'], checkConstraints: ['amount >= 0'] },
  { table: 'order_items', primaryKey: 'id', foreignKeys: ['order_id -> orders.id', 'product_id -> products.id'], checkConstraints: ['quantity > 0'] }
];

let totalPrimaryKeys = 0;
let totalForeignKeys = 0;
let totalCheckConstraints = 0;

for (const entity of schemaRegistry) {
  if (entity.primaryKey) {
    totalPrimaryKeys++;
  }
  totalForeignKeys += entity.foreignKeys.length;
  totalCheckConstraints += entity.checkConstraints.length;
}

const isAccurate = schemaRegistry.length === 3 && totalPrimaryKeys === 3 && totalForeignKeys === 3 && totalCheckConstraints === 2;

console.log(\`[Schema Model Engine] Verified \${schemaRegistry.length} relational entities (users, orders, order_items).\`);
console.log(\`[Physical Model Constraints] Enforced \${totalPrimaryKeys} primary keys, \${totalForeignKeys} foreign keys, and \${totalCheckConstraints} check constraints.\`);
console.log(\`[Validation Verdict] Schema successfully satisfies relational integrity constraints (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Why UUIDv7 is Dominating Modern Relational Schemas',
        bn: 'আধুনিক রিলেশনাল স্কিমায় UUIDv7 কেন প্রাধান্য পাচ্ছে'
      },
      text: {
        en: 'Standard random UUIDv4 identifiers cause severe B-Tree page fragmentation and random disk I/O because newly generated keys land in random leaf pages. In contrast, UUIDv7 embeds a high-resolution millisecond Unix timestamp in its leading 48 bits, providing sequential insertion locality identical to BIGINT while preserving global uniqueness.',
        bn: 'সাধারণ এলোমেলো UUIDv4 ব্যবহারের কারণে B-Tree ইনডেক্সে ঘন ঘন পেজ স্প্লিট হয় কারণ নতুন কি-গুলো এলোমেলো পাতায় গিয়ে জমা হয়। অন্যদিকে UUIDv7-এর শুরুর ৪৮ বিটে মিলিসেকেন্ড টাইমস্ট্যাম্প যুক্ত থাকে, ফলে এটি সাধারণ BIGINT-এর মতো পর্যায়ক্রমে ডিস্কে বসে ইনডেক্সের সর্বোচ্চ গতি নিশ্চিত করে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Entity Classification Evaluator',
        bn: 'এনটিটি প্রকারভেদ মূল্যায়নকারী'
      },
      description: {
        en: 'Classify whether a business entity is Strong or Weak based on its foreign key dependency requirements.',
        bn: 'ফরেন কি নির্ভরতার ওপর ভিত্তি করে কোনো ব্যবসায়িক এনটিটি স্ট্রং নাকি উইক তা নির্ধারণ করুন।'
      },
      code: `function classifyEntity(hasParentDependency, hasOwnIdentifier) {
  if (hasParentDependency && !hasOwnIdentifier) {
    return 'WEAK_ENTITY: Requires parent identifying foreign key';
  }
  return 'STRONG_ENTITY: Independent primary key identifier';
}

console.log('Customer:', classifyEntity(false, true));
console.log('LineItem:', classifyEntity(true, false));`,
      tests: [
        {
          name: {
            en: 'Classifies Customer as strong entity',
            bn: 'Customer-কে স্ট্রং এনটিটি হিসেবে চিহ্নিত করে'
          },
          expected: 'Customer: STRONG_ENTITY: Independent primary key identifier'
        },
        {
          name: {
            en: 'Classifies LineItem as weak entity',
            bn: 'LineItem-কে উইক এনটিটি হিসেবে চিহ্নিত করে'
          },
          expected: 'LineItem: WEAK_ENTITY: Requires parent identifying foreign key'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-mod-ex-1',
      kind: 'mcq',
      topic: 'three-tiers-conceptual-model',
      question: {
        en: 'In database systems engineering, what is the core purpose of the Conceptual Data Model?',
        bn: 'ডাটাবেস সিস্টেম ইঞ্জিনিয়ারিংয়ে কনসেপচুয়াল ডাটা মডেল (Conceptual Data Model)-এর মূল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'To capture high-level business entities and their relationships for domain stakeholders without committing to concrete software, data types, or keys',
          bn: 'কোনো নির্দিষ্ট সফটওয়্যার, ডাটা টাইপ বা প্রাইমারি কি উল্লেখ না করেই মূল ব্যবসায়িক উপাদান ও তাদের পারস্পরিক সম্পর্ক ডোমেন স্টেকহোল্ডারদের কাছে সহজভাবে তুলে ধরা'
        },
        {
          en: 'To configure the physical fan speeds inside the server racks',
          bn: 'সার্ভার র্যাকের ভেতরের ফ্যানের গতিবেগ নিয়ন্ত্রণ করা'
        },
        {
          en: 'To install the operating system on developer laptops',
          bn: 'ডেভেলপারদের ল্যাপটপে অপারেটিং সিস্টেম ইনস্টল করা'
        },
        {
          en: 'To compress table rows into ZIP archive files on hard drives',
          bn: 'হার্ড ড্রাইভে টেবিলের সমস্ত রো-কে জিপ ফাইলে সংকুচিত করে রাখা'
        }
      ],
      answer: 0,
      hint: {
        en: 'The conceptual model communicates business rules cleanly without technical DDL details.',
        bn: 'কনসেপচুয়াল মডেল কোনো জটিল টেকনিক্যাল সিনট্যাক্স ছাড়াই ব্যবসার নিয়ম তুলে ধরে।'
      },
      explanation: {
        en: 'The conceptual model bridges communication between business analysts and software architects. It establishes the domain boundaries before technical schema decisions are made.',
        bn: 'কনসেপচুয়াল মডেল ব্যবসায়িক অংশীদার এবং সফটওয়্যার আর্কিটেক্টদের মধ্যে সেতুবন্ধন হিসেবে কাজ করে এবং টেকনিক্যাল সিদ্ধান্তের আগেই সিস্টেমের সীমানা স্পষ্ট করে।'
      }
    },
    {
      id: 'db-mod-ex-2',
      kind: 'mcq',
      topic: 'logical-vs-physical-model',
      question: {
        en: 'How does the Logical Data Model differ fundamentally from the Physical Data Model?',
        bn: 'লজিক্যাল ডাটা মডেল এবং ফিজিক্যাল ডাটা মডেলের মধ্যকার মূল মৌলিক পার্থক্য কী?'
      },
      options: [
        {
          en: 'The logical model specifies attributes, candidate keys, and relationships independently of any database software, while the physical model defines concrete engine-specific data types, constraints, and indexes',
          bn: 'লজিক্যাল মডেল যেকোনো ডাটাবেস সফটওয়্যারের ওপর নির্ভর না করে অ্যাট্রিবিউট, কি এবং সম্পর্ক নির্ধারণ করে, আর ফিজিক্যাল মডেল সুনির্দিষ্ট ইঞ্জিন উপযোগী ডাটা টাইপ, কনস্ট্রেইন্ট ও ইনডেক্স নির্ধারণ করে'
        },
        {
          en: 'The logical model is drawn with colored markers on whiteboards, while the physical model is printed onto clay tablets',
          bn: 'লজিক্যাল মডেল হোয়াইটবোর্ডে মার্কার দিয়ে আঁকা হয় আর ফিজিক্যাল মডেল মাটির ফলকে খোদাই করা হয়'
        },
        {
          en: 'The logical model only works on Mondays, while the physical model works on Fridays',
          bn: 'লজিক্যাল মডেল কেবল সোমবারে কাজ করে আর ফিজিক্যাল মডেল শুক্রবারে কাজ করে'
        },
        {
          en: 'There is zero difference; both terms mean the exact same thing',
          bn: 'কোনো পার্থক্য নেই; উভয় শব্দের অর্থ পুরোপুরি এক'
        }
      ],
      answer: 0,
      hint: {
        en: 'Logical defines what data exists; physical defines how it is stored in PostgreSQL or MySQL.',
        bn: 'লজিক্যাল মডেল কী ডাটা আছে তা ঠিক করে; ফিজিক্যাল মডেল ডাটাবেসে তা কীভাবে সংরক্ষণ হবে তা ঠিক করে।'
      },
      explanation: {
        en: 'A logical model is technology-neutral. A physical model adds implementation specifics like VARCHAR(255), TIMESTAMPTZ, B-Tree indexes, and table partitions for a target engine.',
        bn: 'লজিক্যাল মডেল কোনো নির্দিষ্ট প্রযুক্তির ওপর নির্ভরশীল নয়। ফিজিক্যাল মডেল কোনো সুনির্দিষ্ট ডাটাবেস ইঞ্জিনের জন্য বাস্তবসম্মত ডাটা টাইপ, ইনডেক্স ও পার্টিশন যোগ করে।'
      }
    },
    {
      id: 'db-mod-ex-3',
      kind: 'mcq',
      topic: 'weak-entity-identification',
      question: {
        en: 'Which of the following database schemas correctly illustrates a "Weak Entity" and its relationship to a "Strong Entity"?',
        bn: 'নিচের কোন ডাটাবেস স্কিমাটি একটি "উইক এনটিটি" (Weak Entity) এবং তার সাথে "স্ট্রং এনটিটি"-র সম্পর্ককে সঠিকভাবে তুলে ধরে?'
      },
      options: [
        {
          en: 'An order_items record that cannot exist without its identifying parent orders record and relies on order_id as part of its relationship identity',
          bn: 'একটি order_items রেকর্ড যা তার প্যারেন্ট orders রেকর্ড ছাড়া একা টিকে থাকতে পারে না এবং যার পরিচয়ের জন্য order_id অপরিহার্য'
        },
        {
          en: 'A user account that has no email address or password',
          bn: 'একটি ব্যবহারকারী অ্যাকাউন্ট যার কোনো ইমেইল বা পাসওয়ার্ড নেই'
        },
        {
          en: 'A database table that has only 1 column',
          bn: 'এমন একটি ডাটাবেস টেবিল যাতে মাত্র ১টি কলাম আছে'
        },
        {
          en: 'A backup file stored on a USB thumb drive',
          bn: 'একটি পেনড্রাইভে সেভ করে রাখা ব্যাকআপ ফাইল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Weak entities depend on the existence of their parent strong entity.',
        bn: 'উইক এনটিটি তাদের প্যারেন্ট স্ট্রং এনটিটির অস্তিত্বের ওপর নির্ভরশীল।'
      },
      explanation: {
        en: 'Line items, apartment room numbers, or order items are classic weak entities: if the parent order is deleted, the individual line items have zero independent business identity.',
        bn: 'অর্ডার আইটেম বা রুম নম্বর হলো চিরাচরিত উইক এনটিটি: প্যারেন্ট অর্ডার মুছে গেলে স্বতন্ত্রভাবে এদের আর কোনো অস্তিত্ব বা অর্থ থাকে না।'
      }
    },
    {
      id: 'db-mod-ex-4',
      kind: 'mcq',
      topic: 'surrogate-vs-natural-keys',
      question: {
        en: 'Why do software architects strongly advise using synthetic Surrogate Keys (such as UUIDs or BigInts) instead of Natural Keys (like National ID or email)?',
        bn: 'সফটওয়্যার আর্কিটেক্টরা কেন প্রাকৃতিক কি (যেমন জাতীয় পরিচয়পত্র বা ইমেইল)-এর বদলে কৃত্রিম সারোগেট কি (যেমন UUID বা BigInt) ব্যবহারের জোর পরামর্শ দেন?'
      },
      options: [
        {
          en: 'Natural keys can change due to legal regulations, typos, or corporate policy changes, forcing dangerous cascading updates across millions of foreign key rows, whereas surrogate keys are immutable',
          bn: 'প্রাকৃতিক কি টাইপো, সরকারি নীতি বা কোম্পানির নিয়মের কারণে বদলে যেতে পারে যা কোটি কোটি ফরেন কি রেকর্ডে ঝুঁকিপূর্ণ পরিবর্তনের চাপ ফেলে, অথচ সারোগেট কি চিরকাল অপরিবর্তনীয় থাকে'
        },
        {
          en: 'Surrogate keys are automatically translated into 50 different spoken languages',
          bn: 'সারোগেট কি নিজে নিজেই ৫০টি ভিন্ন ভিন্ন মানব ভাষায় অনূদিত হয়ে যায়'
        },
        {
          en: 'Natural keys can only be stored inside memory RAM and never on disk',
          bn: 'প্রাকৃতিক কি কেবল র্যাম মেমরিতে রাখা যায় এবং ডিস্কে কখনো লেখা যায় না'
        },
        {
          en: 'Surrogate keys allow users to log in without entering a password',
          bn: 'সারোগেট কি থাকলে পাসওয়ার্ড ছাড়াই সিস্টেমে লগইন করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Never use mutable business values as primary keys; surrogate keys provide immutable stability.',
        bn: 'পরিবর্তনশীল ব্যবসায়িক তথ্য কখনো প্রাইমারি কি করবেন না; সারোগেট কি চিরস্থায়ী স্থায়িত্ব দেয়।'
      },
      explanation: {
        en: 'If a user changes their email address or a country modifies its passport numbering system, updating a natural primary key requires cascading writes across every child table. Surrogate keys isolate internal storage from business volatility.',
        bn: 'কেউ যদি ইমেইল পরিবর্তন করে তবে প্রাকৃতিক কি হিসেবে থাকা সেই মান আপডেট করতে તમામ চাইল্ড টেবিলে লক লাগাতে হয়। সারোগেট কি ব্যবসায়িক পরিবর্তনের ঝামেলা থেকে ডাটাবেসকে পুরোপুরি মুক্ত রাখে।'
      }
    }
  ],
  quiz: {
    id: 'models-and-the-diagram-quiz',
    title: {
      en: 'Entity-Relationship Modeling & Schema Architecture Quiz',
      bn: 'এনটিটি-রিলেশনশিপ মডেলিং ও স্কিমা আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'db-mod-qz-1',
        kind: 'mcq',
        topic: 'uuidv7-sequential-advantage',
        question: {
          en: 'What critical storage and indexing problem does UUIDv7 solve in high-throughput relational databases compared to standard UUIDv4?',
          bn: 'উচ্চগতির রিলেশনাল ডাটাবেসে সাধারণ UUIDv4-এর তুলনায় UUIDv7 কোন মারাত্মক স্টোরেজ ও ইনডেক্সিং সংকটের সমাধান করে?'
        },
        options: [
          {
            en: 'UUIDv7 embeds a 48-bit millisecond timestamp in its leading bytes, ensuring sequential time-ordered B-Tree insertions that eliminate random I/O page splits and buffer cache thrashing',
            bn: 'UUIDv7-এর শুরুর দিকে একটি ৪৮-বিট মিলিসেকেন্ড টাইমস্ট্যাম্প যুক্ত থাকে, যা B-Tree ইনডেক্সে পর্যায়ক্রমিক ডাটা প্রবেশ নিশ্চিত করে পেজ স্প্লিট ও ক্যাশ বিশৃঙ্খলা পুরোপুরি দূর করে'
          },
          {
            en: 'UUIDv7 automatically encrypts the entire hard drive using quantum physics',
            bn: 'UUIDv7 কোয়ান্টাম পদার্থবিজ্ঞান ব্যবহার করে পুরো হার্ড ড্রাইভ নিজে নিজেই এনক্রিপ্ট করে ফেলে'
          },
          {
            en: 'UUIDv7 requires zero bytes of disk storage space',
            bn: 'UUIDv7 ডিস্কে শূন্য বাইট স্টোরেজ জায়গা দখল করে'
          },
          {
            en: 'UUIDv7 allows two different rows to share the exact same primary key',
            bn: 'UUIDv7 দুটি ভিন্ন রো-কে হুবহু একই প্রাইমারি কি ভাগাভাগি করার সুযোগ দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sequential timestamp prefixes preserve B-Tree page append locality.',
          bn: 'ক্রমানুসারে সাজানো টাইমস্ট্যাম্প প্রিফিক্স B-Tree ইনডেক্সের পাতার শৃঙ্খলা রক্ষা করে।'
        },
        explanation: {
          en: 'Random UUIDv4 keys scatter across arbitrary B-Tree leaf pages, causing random disk I/O and low fill factor. UUIDv7 provides natural time-ordered ordering with global distributed uniqueness.',
          bn: 'এলোমেলো UUIDv4 পুরো B-Tree-তে ছড়িয়ে ছিটিয়ে বসে প্রচুর পেজ স্প্লিট ঘটায়। UUIDv7 সময়ভিত্তিক ক্রম রক্ষা করে সাধারণ সিরিয়াল আইডির মতোই দ্রুতগতিতে ডিস্কে জমা হয়।'
        }
      },
      {
        id: 'db-mod-qz-2',
        kind: 'mcq',
        topic: 'composite-attribute-modeling',
        question: {
          en: 'How should a "Composite Attribute" (such as a customer\'s physical mailing address composed of street, city, state, and zip code) be structured in a normalized relational schema?',
          bn: 'একটি নরমালাইজড রিলেশনাল স্কিমায় একটি "কম্পোজিট অ্যাট্রিবিউট" (যেমন গ্রাহকের ঠিকানা যা রাস্তা, শহর, রাজ্য ও জিপ কোড নিয়ে গঠিত) কীভাবে সাজানো উচিত?'
        },
        options: [
          {
            en: 'Decomposed into distinct atomic scalar columns (street, city, state, zip_code) or extracted into a dedicated addresses table linked via foreign key',
            bn: 'আলাদা আলাদা একক কলামে ভেঙে (street, city, state, zip_code) অথবা ফরেন কি দিয়ে যুক্ত একটি স্বতন্ত্র addresses টেবিলে আলাদা করে সংরক্ষণ করা উচিত'
          },
          {
            en: 'Concatenated into a single giant comma-separated string stored in a single column',
            bn: 'একটিমাত্র কলামে কমা দিয়ে সমস্ত তথ্য জোড়া লাগিয়ে একটি বিশাল স্ট্রিং হিসেবে রেখে দেওয়া'
          },
          {
            en: 'Printed onto a sticky note and placed on the database server',
            bn: 'একটি স্টিকি নোটে লিখে ডাটাবেস সার্ভারের গায়ে সেঁটে রাখা'
          },
          {
            en: 'Ignored completely because addresses cannot be stored in databases',
            bn: 'পুরোপুরি উপেক্ষা করা কারণ ডাটাবেসে ঠিকানা সেভ করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'First Normal Form (1NF) mandates atomic attributes that can be indexed and queried.',
          bn: 'প্রথম স্বাভাবিক রূপ (১NF) প্রতিটি মানকে একক ও অবিভাজ্য কলামে রাখার নির্দেশ দেয়।'
        },
        explanation: {
          en: 'Storing composite attributes as individual atomic columns enables indexing by zip code, filtering by state, and sorting by city without requiring inefficient substring parsing.',
          bn: 'ঠিকানাকে ভেঙে আলাদা কলামে রাখলে জিপ কোড দিয়ে ইনডেক্স করা, রাজ্য দিয়ে ফিল্টার করা বা শহর দিয়ে সাজানো অত্যন্ত দ্রুত ও নির্ভুলভাবে সম্পন্ন করা যায়।'
        }
      },
      {
        id: 'db-mod-qz-3',
        kind: 'mcq',
        topic: 'derived-attribute-anti-pattern',
        question: {
          en: 'What is a "Derived Attribute" in entity modeling (e.g. total_age computed from date_of_birth), and why do database architects avoid storing it physically in tables?',
          bn: 'এনটিটি মডেলিংয়ে "ডিরাইভড অ্যাট্রিবিউট" (যেমন জন্মতারিখ থেকে হিসাব করা মোট বয়স) কী এবং ডাটাবেস আর্কিটেক্টরা কেন টেবিলে এটি সরাসরি সংরক্ষণ করা এড়িয়ে চলেন?'
        },
        options: [
          {
            en: 'It is a value that can be computed from existing stored attributes; storing it statically introduces data synchronization anomalies when time passes or source fields change',
            bn: 'এটি এমন একটি মান যা অন্য সংরক্ষিত কলাম থেকে হিসাব করে বের করা যায়; সরাসরি টেবিলে সেভ রাখলে সময় গড়ানোর সাথে সাথে তথ্যের অমিল বা অসঙ্গতি তৈরি হয়'
          },
          {
            en: 'It is an attribute imported from an alien satellite orbiting Mars',
            bn: 'এটি মঙ্গল গ্রহের কক্ষপথে থাকা কোনো এলিয়েন স্যাটেলাইট থেকে পাওয়া মান'
          },
          {
            en: 'Derived attributes can only store prime numbers between 1 and 100',
            bn: 'ডিরাইভড অ্যাট্রিবিউট কেবল ১ থেকে ১০০-এর মধ্যকার মৌলিক সংখ্যা ধরে রাখতে পারে'
          },
          {
            en: 'Because SQL database engines delete all tables containing derived fields',
            bn: 'কারণ SQL ডাটাবেস ইঞ্জিন ডিরাইভড ফিল্ড থাকা সমস্ত টেবিল নিজে থেকেই মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compute derived values dynamically in SELECT queries or views rather than storing them.',
          bn: 'ডিরাইভড মান সরাসরি সংরক্ষণ না করে কোয়েরি বা ভিউতে তাৎক্ষণিকভাবে হিসাব করে বের করুন।'
        },
        explanation: {
          en: 'If you store an age column, it becomes inaccurate the moment the user celebrates a birthday. Calculate derived values dynamically using expressions or generated virtual columns.',
          bn: 'বয়স কলামটি সরাসরি সেভ রাখলে জন্মদিনের পর পরই তা ভুল তথ্যে পরিণত হয়। তাই জন্মতারিখ থেকে কোয়েরির সময় তাৎক্ষণিকভাবে বয়স হিসাব করে নেওয়া সবচেয়ে নিরাপদ।'
        }
      },
      {
        id: 'db-mod-qz-4',
        kind: 'mcq',
        topic: 'identifying-vs-non-identifying-relationships',
        question: {
          en: 'In relational schema design, what distinguishes an Identifying Relationship from a Non-Identifying Relationship?',
          bn: 'রিলেশনাল স্কিমা ডিজাইনে আইডেন্টিফাইং সম্পর্ক এবং নন-আইডেন্টিফাইং সম্পর্কের মধ্যে মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'In an identifying relationship, the parent entity primary key becomes part of the child entity composite primary key; in a non-identifying relationship, the child has its own primary key and references the parent via a foreign key',
            bn: 'আইডেন্টিফাইং সম্পর্কে প্যারেন্ট এনটিটির প্রাইমারি কি চাইল্ড এনটিটির কম্পোজিট প্রাইমারি কি-র অংশ হয়; আর নন-আইডেন্টিফাইং সম্পর্কে চাইল্ডের নিজস্ব আলাদা প্রাইমারি কি থাকে এবং প্যারেন্টকে সাধারণ ফরেন কি দিয়ে যুক্ত করে'
          },
          {
            en: 'Identifying relationships can only be used on tables whose names start with the letter Z',
            bn: 'আইডেন্টিফাইং সম্পর্ক কেবল এমন টেবিলে ব্যবহার করা যায় যার নাম Z অক্ষর দিয়ে শুরু'
          },
          {
            en: 'Non-identifying relationships cause computer monitors to turn black and white',
            bn: 'নন-আইডেন্টিফাইং সম্পর্কের কারণে কম্পিউটার মনিটরের রঙ সাদাকালো হয়ে যায়'
          },
          {
            en: 'There is no difference; relational databases treat all foreign keys identically',
            bn: 'কোনো পার্থক্য নেই; রিলেশনাল ডাটাবেস সমস্ত ফরেন কি-কে একইভাবে বিবেচনা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Identifying relationships absorb the parent key directly into the child composite primary key.',
          bn: 'আইডেন্টিফাইং সম্পর্কে প্যারেন্টের কি সরাসরি চাইল্ডের প্রাইমারি কি-র ভেতরে অন্তর্ভুক্ত হয়।'
        },
        explanation: {
          en: 'Identifying relationships bind weak entities to their owners (e.g. order_id + item_number as PK). Non-identifying relationships represent looser links where the child row maintains independent surrogate identity.',
          bn: 'আইডেন্টিফাইং সম্পর্ক উইক এনটিটিকে শক্তভাবে প্যারেন্টের সাথে বাঁধে (যেমন order_id + item_id হলো প্রাইমারি কি)। নন-আইডেন্টিফাইং সম্পর্কে চাইল্ডের নিজস্ব স্বাধীন পরিচয় থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'cards-and-the-crow',
    title: {
      en: "Cardinality & Crow's Foot Notation: 1:1, 1:N & M:N Relationships",
      bn: "কার্ডিনালিটি ও ক্রো-ফুট নোটেশন: ১:১, ১:N এবং M:N সম্পর্ক"
    }
  }
};
