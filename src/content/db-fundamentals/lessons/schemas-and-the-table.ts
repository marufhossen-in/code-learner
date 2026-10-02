import type { Lesson } from '../../../lib/types';

export const SchemasAndTheTableLesson: Lesson = {
  slug: 'schemas-and-the-table',
  tech: 'db-fundamentals',
  title: {
    en: 'Schemas, Tables & DDL: Data Types & Column Constraints',
    bn: 'স্কিমা, টেবিল ও DDL: ডাটা টাইপ ও কলাম কনস্ট্রেইন্ট'
  },
  summary: {
    en: 'Design robust database tables with DDL: understand column data types (fixed-point NUMERIC vs FLOAT), constraints (NOT NULL, UNIQUE, CHECK, DEFAULT), and the critical difference between DROP and TRUNCATE.',
    bn: 'DDL দিয়ে শক্তিশালী ডাটাবেস টেবিল তৈরি করুন: কলামের ডাটা টাইপ (ফিক্সড-পয়েন্ট NUMERIC বনাম FLOAT), কনস্ট্রেইন্ট (NOT NULL, UNIQUE, CHECK, DEFAULT) এবং DROP ও TRUNCATE-এর পার্থক্য জানুন।'
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'ddl-and-schemas',
      text: {
        en: 'Data Definition Language (DDL) and Table Blueprints',
        bn: 'ডাটা ডেফিনিশন ল্যাঙ্গুয়েজ (DDL) ও টেবিলের ব্লুপ্রিন্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Relational database systems organize commands into distinct functional toolkits. While querying and editing rows relies on Data Manipulation Language (DML) commands such as SELECT and INSERT, designing the database structure requires Data Definition Language (DDL). Statements like CREATE, ALTER, DROP, and table-clearing TRUNCATE (which resets storage blocks) define the relational schema: the structural blueprint that governs tables, columns, constraints, and relationships.',
        bn: 'রিলেশনাল ডাটাবেস সিস্টেমে কমান্ডগুলোকে কয়েকটি সুনির্দিষ্ট ভাগে ভাগ করা হয়। কোয়েরি করা বা রো সম্পাদনার জন্য SELECT ও INSERT এর মতো ডাটা ম্যানিপুলেশন ল্যাঙ্গুয়েজ (DML) ব্যবহৃত হলেও ডাটাবেসের কাঠামো তৈরিতে ডাটা ডেফিনিশন ল্যাঙ্গুয়েজ (DDL) অপরিহার্য। CREATE, ALTER, DROP এবং স্টোরেজ ব্লক খালি করার TRUNCATE কমান্ডগুলো ডাটাবেস স্কিমা তৈরি ও নিয়ন্ত্রণ করে: যা টেবিল, কলাম, কনস্ট্রেইন্ট এবং সম্পর্কের মূল ভিত্তি।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A table schema acts as an unyielding contract. Application code written in JavaScript, Python, or Go can suffer from bugs, missing type guards, or corrupted variables. The database schema sits at the persistence boundary, enforcing strict type checks and structural rules before any byte touches physical storage.',
        bn: 'একটি টেবিল স্কিমা কঠোর চুক্তির মতো কাজ করে। জাভাস্ক্রিপ্ট, পাইথন বা গো ভাষায় লেখা অ্যাপ্লিকেশন কোডে অসাবধানতাবশত বাগ থাকতে পারে বা ভ্যারিয়েবল নষ্ট হতে পারে। কিন্তু ডাটাবেস স্কিমা একেবারে শেষ সীমানায় অবস্থান করে এবং কোনো বাইট হার্ডডিস্কে লেখার আগেই কঠোর ডাটা টাইপ ও কাঠামোগত নিয়ম যাচাই করে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Relational Table Schema: Column Types and Active Constraint Gatekeepers',
        bn: 'রিলেশনাল টেবিল স্কিমা: কলামের ধরন ও সক্রিয় কনস্ট্রেইন্ট প্রহরী'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Relational table columns and constraints diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Table Title -->
  <g transform="translate(40, 25)">
    <rect width="660" height="35" rx="6" fill="#0369a1" />
    <text x="330" y="23" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">CREATE TABLE products ( 5 Columns, 4 Enforced Constraints )</text>
  </g>

  <!-- 5 Columns Breakdown -->
  <g transform="translate(40, 75)">
    <!-- Col 1 -->
    <rect x="0" y="0" width="124" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="62" y="25" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">id</text>
    <rect x="10" y="38" width="104" height="22" rx="3" fill="#0284c7" />
    <text x="62" y="53" fill="#ffffff" font-size="10" text-anchor="middle">BIGINT</text>
    <text x="62" y="85" fill="#a78bfa" font-size="10" font-weight="bold" text-anchor="middle">PRIMARY KEY</text>
    <text x="62" y="105" fill="#94a3b8" font-size="9" text-anchor="middle">Auto-Increment</text>
    <text x="62" y="125" fill="#cbd5e1" font-size="9" text-anchor="middle">8 Bytes Storage</text>

    <!-- Col 2 -->
    <rect x="134" y="0" width="124" height="150" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <text x="196" y="25" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">sku</text>
    <rect x="144" y="38" width="104" height="22" rx="3" fill="#047857" />
    <text x="196" y="53" fill="#ffffff" font-size="10" text-anchor="middle">VARCHAR(32)</text>
    <text x="196" y="85" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">UNIQUE</text>
    <text x="196" y="105" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">NOT NULL</text>
    <text x="196" y="125" fill="#cbd5e1" font-size="9" text-anchor="middle">Unique Index</text>

    <!-- Col 3 -->
    <rect x="268" y="0" width="124" height="150" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
    <text x="330" y="25" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">price_cents</text>
    <rect x="278" y="38" width="104" height="22" rx="3" fill="#d97706" />
    <text x="330" y="53" fill="#ffffff" font-size="10" text-anchor="middle">INTEGER</text>
    <text x="330" y="85" fill="#ec4899" font-size="10" font-weight="bold" text-anchor="middle">CHECK</text>
    <text x="330" y="105" fill="#94a3b8" font-size="9" text-anchor="middle">(price &gt;= 0)</text>
    <text x="330" y="125" fill="#cbd5e1" font-size="9" text-anchor="middle">4 Bytes Storage</text>

    <!-- Col 4 -->
    <rect x="402" y="0" width="124" height="150" rx="6" fill="#1e293b" stroke="#ec4899" stroke-width="1.5" />
    <text x="464" y="25" fill="#f472b6" font-size="12" font-weight="bold" text-anchor="middle">status</text>
    <rect x="412" y="38" width="104" height="22" rx="3" fill="#be185d" />
    <text x="464" y="53" fill="#ffffff" font-size="10" text-anchor="middle">VARCHAR(16)</text>
    <text x="464" y="85" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">DEFAULT</text>
    <text x="464" y="105" fill="#94a3b8" font-size="9" text-anchor="middle">&apos;ACTIVE&apos;</text>
    <text x="464" y="125" fill="#cbd5e1" font-size="9" text-anchor="middle">String Literal</text>

    <!-- Col 5 -->
    <rect x="536" y="0" width="124" height="150" rx="6" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5" />
    <text x="598" y="25" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">created_at</text>
    <rect x="546" y="38" width="104" height="22" rx="3" fill="#7c3aed" />
    <text x="598" y="53" fill="#ffffff" font-size="10" text-anchor="middle">TIMESTAMPTZ</text>
    <text x="598" y="85" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">DEFAULT</text>
    <text x="598" y="105" fill="#94a3b8" font-size="9" text-anchor="middle">CURRENT_TIME</text>
    <text x="598" y="125" fill="#cbd5e1" font-size="9" text-anchor="middle">UTC Offset</text>
  </g>

  <!-- Bottom Comparison Banner -->
  <g transform="translate(40, 240)">
    <rect width="660" height="65" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="330" y="24" fill="#e2e8f0" font-size="12" font-weight="bold" text-anchor="middle">DROP TABLE vs TRUNCATE TABLE: Know the Difference</text>
    <text x="330" y="44" fill="#94a3b8" font-size="11" text-anchor="middle">DROP deletes the entire table structure and metadata from the catalog.</text>
    <text x="330" y="58" fill="#10b981" font-size="11" font-weight="600" text-anchor="middle">TRUNCATE empties all rows instantly by deallocating storage pages, keeping the empty schema ready for writes.</text>
  </g>
</svg>`,
      caption: {
        en: 'The blueprint of an RDBMS table: data types define memory footprints, while constraints guarantee domain validity.',
        bn: 'রিলেশনাল টেবিল ব্লুপ্রিন্ট: ডাটা টাইপ মেমরি আকার নির্ধারণ করে এবং কনস্ট্রেইন্ট ডোমেইন বৈধতা নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'DDL (Data Definition Language)',
          def: {
            en: 'The family of SQL statements (CREATE, ALTER, DROP, TRUNCATE) used to build and modify database schema structures.',
            bn: 'ডাটাবেসের স্কিমা কাঠামো তৈরি ও পরিবর্তন করার জন্য ব্যবহৃত SQL স্টেটমেন্টের পরিবার (CREATE, ALTER, DROP, TRUNCATE)।'
          }
        },
        {
          term: 'CHECK Constraint',
          def: {
            en: 'A schema rule that evaluates a boolean condition on new or modified rows, rejecting any write where the condition evaluates to false.',
            bn: 'একটি স্কিমা নিয়ম যা নতুন বা পরিবর্তিত সারির ওপর বুলিয়ান শর্ত যাচাই করে এবং শর্ত মিথ্যা হলে পরিবর্তন বাতিল করে।'
          }
        },
        {
          term: 'TRUNCATE TABLE',
          def: {
            en: 'A fast DDL command that clears all row data by deallocating disk pages without logging individual row deletions, preserving the table structure.',
            bn: 'একটি দ্রুতগতির DDL কমান্ড যা প্রতিটি সারির আলাদা লগ না রেখে সরাসরি ডিস্ক পেজ খালি করে সমস্ত ডাটা মুছে দেয়, কিন্তু টেবিল স্কিমা অক্ষত রাখে।'
          }
        },
        {
          term: 'Fixed-Point NUMERIC',
          def: {
            en: 'An exact decimal representation storing integers and fractional digits without IEEE 754 binary floating-point rounding errors.',
            bn: 'একটি নির্ভুল দশমিক সংখ্যা পদ্ধতি যা বাইনারি ফ্লোটিং-পয়েন্টের রাউন্ডিং ত্রুটি ছাড়া হুবহু সঠিক আর্থিক হিসাব সংরক্ষণ করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'data-types-deep-dive',
      text: {
        en: 'Choosing the Right Data Types: Avoid IEEE 754 Money Bugs',
        bn: 'সঠিক ডাটা টাইপ নির্বাচন: IEEE 754 আর্থিক ত্রুটি এড়িয়ে চলুন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Selecting the correct data type is critical for performance and correctness. In relational engines, integers come in three primary sizes: SMALLINT uses 2 bytes (up to 32767), INTEGER uses 4 bytes (up to 2.14 billion), and BIGINT uses 8 bytes (up to 9.22 quintillion). Using BIGINT for every column wastes cache space, while using INTEGER for high-volume invoice IDs risks integer overflow.',
        bn: 'সিস্টেমের গতি এবং নির্ভুলতার জন্য সঠিক ডাটা টাইপ বাছাই করা অত্যন্ত জরুরি। রিলেশনাল ইঞ্জিনে পূর্ণসংখ্যার ৩টি প্রধান আকার রয়েছে: SMALLINT ব্যবহার করে ২ বাইট (সর্বোচ্চ ৩২,৭৬৭ পর্যন্ত), INTEGER ব্যবহার করে ৪ বাইট (সর্বোচ্চ ২.১৪ বিলিয়ন পর্যন্ত), এবং BIGINT ব্যবহার করে ৮ বাইট। প্রতিটি কলামে অযথা BIGINT বসালে ক্যাশ মেমরি অপচয় হয়, আবার দ্রুত বর্ধনশীল ইনভয়েস আইডিতে ছোট INTEGER বসালে ওভারফ্লো হওয়ার ঝুঁকি থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The most dangerous rookie mistake in database design is storing money using REAL, FLOAT, or DOUBLE PRECISION. Binary floating-point types follow the IEEE 754 standard, which cannot precisely represent fractional base-10 values like 0.1 or 0.2. Over millions of transactions, fractional round-off errors accumulate into missing pennies. Always store currency using exact fixed-point NUMERIC(precision, scale) or as an integer of atomic units (such as price_cents).',
        bn: 'ডাটাবেস ডিজাইনে সবচেয়ে মারাত্মক ভুল হলো টাকা-পয়সার হিসাব রাখতে REAL, FLOAT বা DOUBLE PRECISION ব্যবহার করা। বাইনারি ফ্লোটিং-পয়েন্ট টাইপগুলো IEEE 754 স্ট্যান্ডার্ড মেনে চলে, যা ০.১ বা ০.২ এর মতো দশমিক সংখ্যা বাইনারিতে পুরোপুরি নির্ভুলভাবে রূপান্তর করতে পারে না। ফলে লক্ষ লক্ষ লেনদেনের পর ভগ্নাংশের হেরফের ঘটে টাকার গরমিল দেখা দেয়। সর্বদা ফিক্সড-পয়েন্ট NUMERIC(precision, scale) অথবা ক্ষুদ্রতম এককের পূর্ণসংখ্যা (যেমন price_cents) হিসেবে অর্থ সংরক্ষণ করুন।'
      }
    },
    {
      type: 'heading',
      id: 'node-ddl-engine',
      text: {
        en: 'Executable DDL Engine: Constraints, Table Lifecycle & TRUNCATE',
        bn: 'রানযোগ্য DDL ইঞ্জিন: কনস্ট্রেইন্ট, টেবিল লাইফসাইকেল ও TRUNCATE'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js simulation of a DDL engine. It constructs a products table schema with 5 columns and 4 constraint rules (Primary Key, NOT NULL, UNIQUE, and CHECK), inserts 3 valid rows, rejects 3 invalid transactions, and executes a TRUNCATE operation resetting the table.',
        bn: 'নিচে একটি DDL ইঞ্জিনের সম্পূর্ণ Node.js সিমুলেশন দেওয়া হলো। এটি ৫টি কলাম এবং ৪টি কনস্ট্রেইন্ট নিয়ম (প্রাইমারি কি, NOT NULL, UNIQUE এবং CHECK) সহ একটি products টেবিল তৈরি করে, ৩টি বৈধ রেকর্ড ইনসার্ট করে, ৩টি অবৈধ ডাটা বাতিল করে এবং একটি TRUNCATE কমান্ডের মাধ্যমে টেবিল রিসেট করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Define table with 5 columns, enforce 4 constraint rules, and demonstrate TRUNCATE reset',
        bn: '৫টি কলামের টেবিল তৈরি, ৪টি কনস্ট্রেইন্ট প্রয়োগ এবং TRUNCATE দিয়ে রিসেট প্রদর্শন'
      },
      code: `// Lightweight RDBMS Table implementation with strict constraint validation
class Table {
  constructor(name, columnDefinitions) {
    this.name = name;
    this.columns = columnDefinitions;
    this.rows = [];
    this.autoIncrementId = 1;
  }

  insert(record) {
    const newRow = {};
    for (const [colName, rules] of Object.entries(this.columns)) {
      let val = record[colName];

      // Handle DEFAULT value if omitted
      if (val === undefined && rules.default !== undefined) {
        val = typeof rules.default === 'function' ? rules.default() : rules.default;
      }

      // Handle auto-increment PRIMARY KEY
      if (rules.primaryKey && val === undefined) {
        val = this.autoIncrementId++;
      }

      // Rule 1: NOT NULL constraint check
      if (rules.notNull && (val === null || val === undefined)) {
        throw new Error(\`NOT NULL constraint violated on column: \${colName}\`);
      }

      // Rule 2: UNIQUE constraint check
      if (rules.unique && val !== null && val !== undefined) {
        const isDuplicate = this.rows.some(r => r[colName] === val);
        if (isDuplicate) {
          throw new Error(\`UNIQUE constraint violated on \${colName}: duplicate '\${val}'\`);
        }
      }

      // Rule 3: CHECK constraint expression
      if (rules.check && !rules.check(val)) {
        throw new Error(\`CHECK constraint violated on \${colName} for value: \${val}\`);
      }

      newRow[colName] = val;
    }

    this.rows.push(newRow);
    return newRow;
  }

  // TRUNCATE: Fast deallocation of row data while preserving schema contract
  truncate() {
    this.rows = [];
    this.autoIncrementId = 1;
  }
}

// Define products schema: 5 columns, 4 constraint rules
const products = new Table('products', {
  id: { primaryKey: true, notNull: true },
  sku: { notNull: true, unique: true },
  priceCents: { notNull: true, check: v => typeof v === 'number' && v >= 0 },
  stock: { notNull: true, check: v => typeof v === 'number' && v >= 0 },
  status: { default: 'ACTIVE', check: v => ['ACTIVE', 'DISCONTINUED'].includes(v) }
});

// Step 1: Insert 3 compliant product records
products.insert({ sku: 'LAPTOP-PRO-16', priceCents: 180000, stock: 25 });
products.insert({ sku: 'DESK-STAND-OAK', priceCents: 12000, stock: 40 });
products.insert({ sku: 'USB-HUB-7PORT', priceCents: 3500, stock: 80 });

// Step 2: Audit constraint enforcement on 3 illegal write attempts
let violationsCaught = 0;
// Test A: Duplicate SKU (violates UNIQUE)
try { products.insert({ sku: 'LAPTOP-PRO-16', priceCents: 9000, stock: 10 }); } catch (e) { violationsCaught++; }
// Test B: Negative price (violates CHECK)
try { products.insert({ sku: 'PHONE-CASE-CLR', priceCents: -500, stock: 10 }); } catch (e) { violationsCaught++; }
// Test C: NULL SKU (violates NOT NULL)
try { products.insert({ sku: null, priceCents: 2000, stock: 10 }); } catch (e) { violationsCaught++; }

// Step 3: Demonstrate TRUNCATE operation
const recordCountBefore = products.rows.length;
products.truncate();
const recordCountAfter = products.rows.length;

console.log(\`[DDL Engine] Table products defined with 5 columns and 4 constraint rules.\`);
console.log(\`[Data Insertion] Successfully inserted \${recordCountBefore} compliant product records.\`);
console.log(\`[Constraint Audit] Caught \${violationsCaught}/3 invalid writes: Duplicate SKU, Negative Price, and NULL constraint.\`);
console.log(\`[TRUNCATE Operation] Deallocated all \${recordCountBefore} records: row count reset to \${recordCountAfter}, schema preserved.\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Production Practice: Drop vs Truncate Safety Rules',
        bn: 'প্রোডাকশন সেরা অনুশীলন: DROP বনাম TRUNCATE নিরাপত্তা নিয়ম'
      },
      text: {
        en: 'Never use DROP TABLE in automated maintenance scripts. DROP TABLE deletes table structure, permissions, and foreign key references. TRUNCATE TABLE is the standard command for emptying staging or test tables because it clears disk blocks while preserving permissions and indexes.',
        bn: 'স্বয়ংক্রিয় রক্ষণাবেক্ষণ স্ক্রিপ্টে কখনোই DROP TABLE চালাবেন না। DROP TABLE টেবিলের কাঠামো, পারমিশন এবং ফরেন কি রেফারেন্স পর্যন্ত মুছে ফেলে। স্টেজিং বা টেস্ট টেবিল খালি করার জন্য TRUNCATE TABLE ব্যবহার করাই নিয়ম, কারণ এটি ডিস্ক পেজ খালি করলেও টেবিলের অনুমতি ও ইনডেক্স অক্ষত রাখে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Table Constraint Simulator',
        bn: 'টেবিল কনস্ট্রেইন্ট সিমুলেটর'
      },
      description: {
        en: 'Test table constraints: observe how CHECK rules protect column values from invalid data.',
        bn: 'টেবিল কনস্ট্রেইন্ট পরীক্ষা করুন: CHECK নিয়ম কীভাবে কলামে ভুল ডাটা প্রবেশ করতে বাধা দেয় তা দেখুন।'
      },
      code: `function validateUserRow(row) {
  // Check 1: age must be positive and at least 18
  if (typeof row.age !== 'number' || row.age < 18) {
    return 'CHECK_VIOLATION_UNDERAGE';
  }
  // Check 2: email must not be null
  if (!row.email || !row.email.includes('@')) {
    return 'NOT_NULL_OR_EMAIL_FORMAT_VIOLATION';
  }
  return 'ROW_VALID_INSERTED';
}

const validUser = { age: 24, email: 'user@example.com' };
console.log('Test 1 (Valid):', validateUserRow(validUser));

const underageUser = { age: 15, email: 'kid@example.com' };
console.log('Test 2 (Underage):', validateUserRow(underageUser));`,
      tests: [
        {
          name: {
            en: 'Accepts valid row passing all constraints',
            bn: 'সকল শর্ত পূরণকারী সঠিক সারি গ্রহণ করে'
          },
          expected: 'Test 1 (Valid): ROW_VALID_INSERTED'
        },
        {
          name: {
            en: 'Rejects invalid row failing check constraint',
            bn: 'শর্ত পূরণ না করা ত্রুটিপূর্ণ সারি প্রত্যাখ্যান করে'
          },
          expected: 'Test 2 (Underage): CHECK_VIOLATION_UNDERAGE'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-sch-ex-1',
      kind: 'mcq',
      topic: 'drop-vs-truncate-difference',
      question: {
        en: 'What is the critical structural difference between DROP TABLE and TRUNCATE TABLE in SQL?',
        bn: 'SQL-এ DROP TABLE এবং TRUNCATE TABLE-এর মধ্যে কাঠামোগত মূল পার্থক্য কী?'
      },
      options: [
        {
          en: 'DROP deletes the table schema, metadata, and data completely; TRUNCATE deletes all row data while preserving the table schema and indexes',
          bn: 'DROP টেবিলের স্কিমা, মেটাডাটা ও ডাটা সম্পূর্ণ মুছে ফেলে; আর TRUNCATE টেবিল স্কিমা ও ইনডেক্স অক্ষত রেখে সকল সারির ডাটা মুছে দেয়'
        },
        {
          en: 'DROP only works on numbers, while TRUNCATE only works on text',
          bn: 'DROP কেবল সংখ্যায় কাজ করে, আর TRUNCATE কেবল টেক্সটে কাজ করে'
        },
        {
          en: 'TRUNCATE creates a new database user account automatically',
          bn: 'TRUNCATE স্বয়ংক্রিয়ভাবে নতুন ডাটাবেস ইউজার অ্যাকাউন্ট তৈরি করে'
        },
        {
          en: 'There is zero difference; DROP and TRUNCATE are exact synonyms in SQL',
          bn: 'কোনো পার্থক্য নেই; SQL-এ DROP ও TRUNCATE হুবহু একই অর্থ বহন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'One destroys the entire house; the other empties all furniture from the rooms.',
        bn: 'একটি সম্পূর্ণ বাড়ি ধ্বংস করে; অন্যটি ঘরের সকল আসবাবপত্র খালি করে বাড়িটি রেখে দেয়।'
      },
      explanation: {
        en: 'DROP TABLE permanently removes table definition and metadata from the database catalog. TRUNCATE quickly deallocates data storage pages, leaving an empty table structure ready to accept new rows.',
        bn: 'DROP TABLE ডাটাবেস ক্যাটালগ থেকে টেবিল স্ট্রাকচার এবং সমস্ত মেটাডাটা মুছে ফেলে। আর TRUNCATE দ্রুতগতিতে ডাটার ডিস্ক পেজ খালি করে ফেলে, ফলে খালি টেবিলটিতে সাথে সাথে নতুন রো ইনসার্ট করা যায়।'
      }
    },
    {
      id: 'db-sch-ex-2',
      kind: 'mcq',
      topic: 'floating-point-currency-danger',
      question: {
        en: 'Why is it dangerous to store financial transactions using binary floating-point types (FLOAT, DOUBLE PRECISION)?',
        bn: 'আর্থিক লেনদেনের তথ্য বাইনারি ফ্লোটিং-পয়েন্ট টাইপে (FLOAT, DOUBLE PRECISION) সংরক্ষণ করা কেন বিপজ্জনক?'
      },
      options: [
        {
          en: 'IEEE 754 binary floating-point cannot accurately represent decimal fractions like 0.1, causing round-off errors to accumulate across transactions',
          bn: 'IEEE 754 বাইনারি ফ্লোটিং-পয়েন্ট ০.১ এর মতো দশমিক মান নির্ভুলভাবে রাখতে পারে না, ফলে লেনদেনের হিসাবে রাউন্ডিং ত্রুটি জমা হতে থাকে'
        },
        {
          en: 'FLOAT columns refuse to accept currency symbols like $ or €',
          bn: 'FLOAT কলামগুলো $ বা € এর মতো মুদ্রা প্রতীক গ্রহণ করতে অস্বীকার করে'
        },
        {
          en: 'Floating point numbers take 100 times more disk space than NUMERIC',
          bn: 'ফ্লোটিং পয়েন্ট সংখ্যা NUMERIC এর চেয়ে ১০০ গুণ বেশি ডিস্ক স্পেস দখল করে'
        },
        {
          en: 'FLOAT numbers are automatically deleted after 30 days',
          bn: 'FLOAT সংখ্যাগুলো ৩০ দিন পর পর স্বয়ংক্রিয়ভাবে মুছে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Binary computers cannot represent base-10 fractions (like 1/10) with infinite precision.',
        bn: 'বাইনারি কম্পিউটার দশমিক ভগ্নাংশ (যেমন ১/১০) সম্পূর্ণ নির্ভুলভাবে প্রকাশ করতে পারে না।'
      },
      explanation: {
        en: 'Floating point arithmetic suffers from rounding inaccuracies (0.1 + 0.2 = 0.30000000000000004). Financial applications must use fixed-point NUMERIC/DECIMAL or integer atomic units (cents) to maintain exact ledger balances.',
        bn: 'ফ্লোটিং পয়েন্ট গণিতে রাউন্ডিং ত্রুটি ঘটে (০.১ + ০.২ = ০.৩০০০০০০০০০০০০০০০৪)। আর্থিক সফটওয়্যারে সর্বদা ফিক্সড-পয়েন্ট NUMERIC/DECIMAL বা পয়সার পূর্ণসংখ্যা ব্যবহার করা বাধ্যতামূলক।'
      }
    },
    {
      id: 'db-sch-ex-3',
      kind: 'mcq',
      topic: 'check-constraint-role',
      question: {
        en: 'What is the primary role of a CHECK constraint in a relational database table definition?',
        bn: 'একটি রিলেশনাল টেবিল স্কিমায় CHECK কনস্ট্রেইন্টের প্রধান ভূমিকা কী?'
      },
      options: [
        {
          en: 'To enforce custom business logic rules at the storage engine level, rejecting writes that violate boolean conditions (e.g. price >= 0)',
          bn: 'স্টোরেজ স্তরে সুনির্দিষ্ট ব্যবসায়িক নিয়ম কার্যকর করা এবং বুলিয়ান শর্ত ভঙ্গকারী যেকোনো ডাটা রাইট বাতিল করা (যেমন price >= ০)'
        },
        {
          en: 'To check if the database server has an active internet connection',
          bn: 'ডাটাবেস সার্ভারে সক্রিয় ইন্টারনেট সংযোগ আছে কিনা তা পরীক্ষা করা'
        },
        {
          en: 'To send a confirmation SMS to users every time they insert a row',
          bn: 'প্রতিবার সারি যুক্ত করার সময় ব্যবহারকারীদের একটি নিশ্চিতকরণ এসএমএস পাঠানো'
        },
        {
          en: 'To convert all uppercase letters into lowercase letters automatically',
          bn: 'সকল বড় হাতের অক্ষরকে স্বয়ংক্রিয়ভাবে ছোট হাতের অক্ষরে রূপান্তর করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'It acts as an automated validation guard before rows are persisted to disk.',
        bn: 'হার্ডডিস্কে রো লেখার পূর্বে এটি একটি স্বয়ংক্রিয় যাচাইকারী প্রহরী হিসেবে কাজ করে।'
      },
      explanation: {
        en: 'CHECK constraints validate incoming column data against user-defined boolean expressions. If an INSERT or UPDATE violates the CHECK condition, the RDBMS engine aborts the statement immediately.',
        bn: 'CHECK কনস্ট্রেইন্ট ব্যবহারকারী-নির্ধারিত বুলিয়ান শর্ত দিয়ে আগত ডাটা যাচাই করে। কোনো ইনসার্ট বা আপডেট এই শর্ত ভঙ্গ করলে ডাটাবেস ইঞ্জিন সাথে সাথে সেই স্টেটমেন্ট বাতিল করে দেয়।'
      }
    },
    {
      id: 'db-sch-ex-4',
      kind: 'mcq',
      topic: 'unique-vs-primary-key',
      question: {
        en: 'How does a UNIQUE constraint differ from a PRIMARY KEY constraint in SQL?',
        bn: 'SQL-এ একটি UNIQUE কনস্ট্রেইন্ট কীভাবে PRIMARY KEY কনস্ট্রেইন্ট থেকে ভিন্ন?'
      },
      options: [
        {
          en: 'A table can have only one PRIMARY KEY which strictly forbids NULL values; a table can have multiple UNIQUE constraints and in standard SQL UNIQUE allows NULLs',
          bn: 'একটি টেবিলে কেবল একটিই PRIMARY KEY থাকতে পারে যা NULL সম্পূর্ণ নিষিদ্ধ করে; কিন্তু একটি টেবিলে একাধিক UNIQUE কনস্ট্রেইন্ট থাকতে পারে এবং স্ট্যান্ডার্ড SQL-এ UNIQUE কলামে NULL বসানো যায়'
        },
        {
          en: 'PRIMARY KEY only works on text, while UNIQUE only works on numbers',
          bn: 'PRIMARY KEY কেবল টেক্সটে কাজ করে, আর UNIQUE কেবল সংখ্যায় কাজ করে'
        },
        {
          en: 'UNIQUE constraints can only be applied to temporary tables',
          bn: 'UNIQUE কনস্ট্রেইন্ট শুধুমাত্র অস্থায়ী টেবিলে প্রয়োগ করা যায়'
        },
        {
          en: 'PRIMARY KEY constraints expire after 1 year',
          bn: 'PRIMARY KEY কনস্ট্রেইন্টের মেয়াদ ১ বছর পর শেষ হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Tables can have only 1 primary key, but many unique attributes (like email, phone, SSN).',
        bn: 'একটি টেবিলে কেবল ১টি প্রাইমারি কি থাকে, কিন্তু একাধিক ইউনিক কলাম থাকতে পারে (যেমন ইমেইল, ফোন)।'
      },
      explanation: {
        en: 'Each table can have at most one PRIMARY KEY, which uniquely identifies each row and never permits NULL. In contrast, multiple UNIQUE constraints can coexist on a table to enforce uniqueness on secondary business keys (such as email or passport numbers).',
        bn: 'প্রতিটি টেবিলে সর্বোচ্চ একটিই PRIMARY KEY থাকতে পারে যা প্রতিটি সারিকে অনন্যভাবে শনাক্ত করে এবং যাতে কখনোই NULL হতে পারে না। অন্যদিকে ইমেইল বা পাসপোর্টের মতো সেকেন্ডারি বিজনেস কি-তে স্বাতন্ত্র্য নিশ্চিত করতে টেবিলে একাধিক UNIQUE কনস্ট্রেইন্ট থাকতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'schemas-and-the-table-quiz',
    title: {
      en: 'Schemas, Tables & DDL Quiz',
      bn: 'স্কিমা, টেবিল ও DDL কুইজ'
    },
    questions: [
      {
        id: 'db-sch-qz-1',
        kind: 'mcq',
        topic: 'ddl-vs-dml-classification',
        question: {
          en: 'Which of the following SQL commands is classified as Data Definition Language (DDL)?',
          bn: 'নিচের কোন SQL কমান্ডটি ডাটা ডেফিনিশন ল্যাঙ্গুয়েজ (DDL) হিসেবে গণ্য হয়?'
        },
        options: [
          {
            en: 'ALTER TABLE',
            bn: 'ALTER TABLE'
          },
          {
            en: 'SELECT',
            bn: 'SELECT'
          },
          {
            en: 'INSERT',
            bn: 'INSERT'
          },
          {
            en: 'UPDATE',
            bn: 'UPDATE'
          }
        ],
        answer: 0,
        hint: {
          en: 'DDL modifies structural schema blueprints; DML modifies the data records within them.',
          bn: 'DDL কাঠামোগত স্কিমা ব্লুপ্রিন্ট পরিবর্তন করে; আর DML ভেতরের ডাটা রেকর্ড পরিবর্তন করে।'
        },
        explanation: {
          en: 'ALTER TABLE is a DDL command because it modifies the structure, columns, and constraints of a table schema. SELECT, INSERT, and UPDATE are DML commands that manipulate rows within the schema.',
          bn: 'ALTER TABLE একটি DDL কমান্ড কারণ এটি টেবিল স্কিমার গঠন, কলাম ও কনস্ট্রেইন্ট পরিবর্তন করে। অন্যদিকে SELECT, INSERT এবং UPDATE হলো DML কমান্ড যা স্কিমার ভেতরের ডাটা নিয়ে কাজ করে।'
        }
      },
      {
        id: 'db-sch-qz-2',
        kind: 'mcq',
        topic: 'integer-storage-sizes',
        question: {
          en: 'How many bytes of disk storage does a standard 4-byte SQL INTEGER column consume per row?',
          bn: 'একটি সাধারণ ৪-বাইট SQL INTEGER কলাম ডিস্কে প্রতি সারির জন্য কত বাইট স্টোরেজ ব্যবহার করে?'
        },
        options: [
          {
            en: '4 bytes (supporting values from -2.14 billion to +2.14 billion)',
            bn: '৪ বাইট (যা -২.১৪ বিলিয়ন থেকে +২.১৪ বিলিয়ন পর্যন্ত সংখ্যা ধারণ করতে পারে)'
          },
          {
            en: '64 bytes',
            bn: '৬৪ বাইট'
          },
          {
            en: '1 kilobyte',
            bn: '১ কিলোবাইট'
          },
          {
            en: '100 bytes',
            bn: '১০০ বাইট'
          }
        ],
        answer: 0,
        hint: {
          en: 'Standard INTEGER uses 32 bits, which is exactly 4 bytes.',
          bn: 'সাধারণ INTEGER ৩২ বিট ব্যবহার করে, যা ঠিক ৪ বাইটের সমান।'
        },
        explanation: {
          en: 'In SQL engines like PostgreSQL and MySQL, INTEGER is a 32-bit signed binary integer requiring 4 bytes of storage per row, covering values from -2147483648 to +2147483647.',
          bn: 'PostgreSQL এবং MySQL এর মতো সিস্টেমে INTEGER হলো ৩২-বিট সাইনড পূর্ণসংখ্যা যা রো প্রতি ৪ বাইট জায়গা নেয় এবং -২১৪৭৪৮৩৬৪৮ থেকে +২১৪৭৪৮৩৬৪৭ পর্যন্ত মান ধরে রাখতে পারে।'
        }
      },
      {
        id: 'db-sch-qz-3',
        kind: 'mcq',
        topic: 'timestamptz-vs-timestamp',
        question: {
          en: 'Why is TIMESTAMPTZ (timestamp with time zone) strongly recommended over plain TIMESTAMP for global enterprise systems?',
          bn: 'গ্লোবাল এন্টারপ্রাইজ সিস্টেমে সাধারণ TIMESTAMP এর বদলে TIMESTAMPTZ ব্যবহার করা কেন বিশেষভাবে বাঞ্ছনীয়?'
        },
        options: [
          {
            en: 'TIMESTAMPTZ converts timestamps to UTC internally on storage, preventing timezone ambiguity across globally distributed servers and users',
            bn: 'TIMESTAMPTZ স্টোরেজে সময়কে স্বয়ংক্রিয়ভাবে UTC-তে রূপান্তর করে সংরক্ষণ করে, ফলে বিশ্বজুড়ে ভিন্ন ভিন্ন টাইমজোনের সার্ভার ও ব্যবহারকারীদের মধ্যে সময়ের বিভ্রান্তি ঘটে না'
          },
          {
            en: 'Plain TIMESTAMP cannot record hours or minutes',
            bn: 'সাধারণ TIMESTAMP ঘণ্টা বা মিনিট সংরক্ষণ করতে পারে না'
          },
          {
            en: 'TIMESTAMPTZ makes website pages load in half the time',
            bn: 'TIMESTAMPTZ ওয়েবসাইটের পেজ লোড হওয়ার সময় অর্ধেক করে দেয়'
          },
          {
            en: 'Plain TIMESTAMP can only be used on computers running Windows',
            bn: 'সাধারণ TIMESTAMP শুধুমাত্র উইন্ডোজ অপারেটিং সিস্টেমে ব্যবহার করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Always normalize timestamps to UTC at the database layer.',
          bn: 'ডাটাবেস স্তরে সর্বদা টাইমস্ট্যাম্পকে UTC-তে সমন্বয় করে রাখুন।'
        },
        explanation: {
          en: 'Plain TIMESTAMP records local wall-clock time without timezone offsets. If an order is placed in Tokyo and stored as 14:00, a New York client cannot tell what real moment it represents. TIMESTAMPTZ normalizes everything to UTC.',
          bn: 'সাধারণ TIMESTAMP টাইমজোনের হিসাব ছাড়াই স্থানীয় ঘড়ির সময় সংরক্ষণ করে। টোকিও থেকে ১৪:০০ টায় কোনো অর্ডার করা হলে নিউ ইয়র্কের গ্রাহক বুঝতে পারে না এটি কোন মুহূর্তের ছিল। TIMESTAMPTZ সবকিছুকে UTC-তে একীভূত করে সমাধান দেয়।'
        }
      },
      {
        id: 'db-sch-qz-4',
        kind: 'mcq',
        topic: 'default-constraint-action',
        question: {
          en: 'What happens when an INSERT query omits a column that has a DEFAULT constraint configured on the table?',
          bn: 'টেবিলে DEFAULT কনস্ট্রেইন্ট থাকা কোনো কলামকে বাদ দিয়ে INSERT কোয়েরি চালালে কী ঘটে?'
        },
        options: [
          {
            en: 'The database automatically inserts the specified default value without throwing an error',
            bn: 'ডাটাবেস কোনো ত্রুটি না দিয়ে স্বয়ংক্রিয়ভাবে নির্ধারিত ডিফল্ট মানটি ইনসার্ট করে দেয়'
          },
          {
            en: 'The database crashes and restarts the server immediately',
            bn: 'ডাটাবেস ক্র্যাশ করে এবং সাথে সাথে সার্ভার রিস্টার্ট হয়ে যায়'
          },
          {
            en: 'The entire database is rolled back to yesterday state',
            bn: 'সম্পূর্ণ ডাটাবেস গতকালের অবস্থায় রোলব্যাক হয়ে যায়'
          },
          {
            en: 'The query fails with a syntax error',
            bn: 'কোয়েরিটি সিনট্যাক্স এরর দিয়ে ব্যর্থ হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'DEFAULT provides a fallback value when none is explicitly supplied.',
          bn: 'কোনো মান সরাসরি উল্লেখ না থাকলে DEFAULT বিকল্প মানটি সরবরাহ করে।'
        },
        explanation: {
          en: 'When an INSERT statement does not provide a value for a column with a DEFAULT clause, the database engine automatically evaluates and assigns the default value (such as CURRENT_TIMESTAMP or a string literal).',
          bn: 'INSERT স্টেটমেন্টে কোনো কলামের মান বাদ পড়লে যদি তাতে DEFAULT ক্লজ থাকে, তবে ডাটাবেস ইঞ্জিন স্বয়ংক্রিয়ভাবে নির্ধারিত ডিফল্ট মানটি (যেমন CURRENT_TIMESTAMP বা কোনো ডিফল্ট টেক্সট) বসিয়ে দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'keys-and-the-key',
    title: {
      en: 'Primary, Composite & Foreign Keys: Referential Integrity',
      bn: 'প্রাইমারি, কম্পোজিট ও ফরেন কি: রেফারেন্সিয়াল ইন্টিগ্রিটি'
    }
  }
};
