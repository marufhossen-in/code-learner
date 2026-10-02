import type { Lesson } from '../../../lib/types';

export const grandWarehouseLesson: Lesson = {
  slug: 'the-grand-warehouse',
  tech: 'sql',
  title: {
    en: 'SQL DDL: Database Creation, Tables, Constraints & Normalization',
    bn: 'এসকিউএল DDL: ডাটাবেস তৈরি, টেবিল, কনস্ট্রেইন্ট ও নরমালাইজেশন'
  },
  summary: {
    en: 'Master database schema design and DDL across 10 structured topics, from table creation to constraints and normalization. Learn primary and foreign keys, ALTER migrations, TRUNCATE vs DROP, and 1NF through 3NF principles.',
    bn: 'টেবিল তৈরি থেকে শুরু করে কনস্ট্রেইন্ট ও নরমালাইজেশন পর্যন্ত 10 টি সুসংগঠিত বিষয়ে স্কিমা ডিজাইন ও DDL আয়ত্ত করুন। জানুন প্রাইমারি ও ফরেন কি, ALTER মাইগ্রেশন, TRUNCATE বনাম DROP এবং 1NF থেকে 3NF এর মূলনীতি।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-window-gallery',
    title: { en: 'SQL Window Functions, Analytical Ranking & Running Totals', bn: 'এসকিউএল উইন্ডো ফাংশন, অ্যানালিটিক্যাল র‍্যাংকিং ও রানিং টোটাল' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Schema Lifecycle: Creating, Dropping, and Backing Up Catalogs', bn: '১. স্কিমা লাইফসাইকেল: ক্যাটালগ তৈরি, মোছা ও ব্যাকআপ (CREATE, DROP, BACKUP)' } },
    {
      type: 'para',
      text: {
        en: 'Data Definition Language (DDL) commands manage the structural containers of relational engines. The CREATE command initializes a new storage catalog, while DROP removes an entire schema and its associated tables. In enterprise environments, database backups produce snapshot copies for disaster recovery.',
        bn: 'ডাটা ডেফিনিশন ল্যাঙ্গুয়েজ (DDL) রিলেশনাল ইঞ্জিনের মূল কাঠামো নিয়ন্ত্রণ করে। CREATE কমান্ড নতুন স্টোরেজ ক্যাটালগ তৈরি করে, আর DROP কমান্ড পুরো স্কিমা ও টেবিল চিরতরে সরিয়ে দেয়। করপোরেট পরিবেশে ডেটা সুরক্ষিত রাখতে ব্যাকআপ ফাইল তৈরি করে রাখা হয়।'
      }
    },
    {
      type: 'visual',
      id: 'database'
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Initialize a production database catalog
CREATE DATABASE corporate_erp;

-- 2. Create a full disaster recovery snapshot
BACKUP DATABASE corporate_erp 
TO DISK = '/var/backups/corporate_erp_full.bak';

-- 3. Permanently remove a development sandbox database
-- DROP DATABASE obsolete_dev_db;

-- Output:
-- CREATE DATABASE completed successfully.
-- BACKUP DATABASE processed 480 pages in 0.124 seconds.
-- Result: Database catalog created and backup snapshot generated`,
      caption: {
        en: 'DDL commands manage storage containers and disaster-recovery backup archives.',
        bn: 'DDL কমান্ড ডাটাবেসের স্টোরেজ ও ব্যাকআপ ফাইল নিয়ন্ত্রণ করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Table Anatomy: Data Types (Integers, Decimals, Varchar, Dates)', bn: '২. টেবিল গঠন: ডেটা টাইপ (Integer, Decimal, Varchar, Date)' } },
    {
      type: 'para',
      text: {
        en: 'CREATE TABLE defines a new relational structure with explicit column names and data types. Choosing appropriate data types is vital: INT or BIGINT for counters; NUMERIC or DECIMAL(12,2) for exact monetary currency (never FLOAT!); VARCHAR(n) for variable text; and TIMESTAMP for temporal records.',
        bn: 'CREATE TABLE কলামের নাম ও নির্দিষ্ট ডেটা টাইপ দিয়ে নতুন টেবিল তৈরি করে। সঠিক ডেটা টাইপ নির্বাচন করা অত্যন্ত জরুরি: সংখ্যার জন্য INT বা BIGINT; নির্ভুল টাকার হিসাবের জন্য NUMERIC বা DECIMAL(12,2) (কখনোই FLOAT নয়!); পরিবর্তনশীল টেক্সটের জন্য VARCHAR(n); আর সময়ের জন্য TIMESTAMP।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `CREATE TABLE product_catalog (
    sku_id INT,
    product_name VARCHAR(120),
    unit_price DECIMAL(10, 2), -- 10 total digits, 2 decimal places (exact money)
    is_discontinued BOOLEAN,
    created_at TIMESTAMP
);

-- Output:
-- Table product_catalog created successfully.
-- Result: Clean typed relational structure ready for transactions`,
      caption: {
        en: 'DECIMAL prevents floating-point rounding errors in financial balance sheets.',
        bn: 'DECIMAL ফ্লোটিং-পয়েন্ট রাউন্ডিং এরর ঠেকিয়ে আর্থিক হিসাব সম্পূর্ণ নির্ভুল রাখে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Primary Keys & Identity: AUTO_INCREMENT and SERIAL', bn: '৩. প্রাইমারি কি ও স্বয়ংক্রিয় বৃদ্ধি: AUTO_INCREMENT ও SERIAL' } },
    {
      type: 'para',
      text: {
        en: 'A Primary Key uniquely identifies every row in a table. It strictly enforces NOT NULL and UNIQUE constraints simultaneously. Databases provide auto-incrementing identity engines: AUTO_INCREMENT in MySQL, SERIAL in PostgreSQL, and IDENTITY(1,1) in SQL Server to generate monotonic primary keys automatically.',
        bn: 'Primary Key টেবিলের প্রতিটি সারিকে অনন্যভাবে শনাক্ত করে। এটি একই সাথে NOT NULL এবং UNIQUE উভয় শর্ত কঠোরভাবে বজায় রাখে। ডাটাবেস স্বয়ংক্রিয় সংখ্যা তৈরির জন্য নিজস্ব ইঞ্জিন দেয়: MySQL-এ AUTO_INCREMENT, PostgreSQL-এ SERIAL, এবং SQL Server-এ IDENTITY(1,1)।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `CREATE TABLE users (
    -- Auto-incrementing primary key constraint
    user_id INT AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    PRIMARY KEY (user_id)
);

-- Inserting records without specifying user_id:
INSERT INTO users (username, email) VALUES ('tarek', 'tarek@email.com');
INSERT INTO users (username, email) VALUES ('nila', 'nila@email.com');

-- Output:
-- 1 | tarek | tarek@email.com
-- 2 | nila  | nila@email.com
-- Result: user_id automatically incremented from 1 to 2`,
      caption: {
        en: 'Primary keys enforce row uniqueness while auto-increment guarantees sequential numbering.',
        bn: 'প্রাইমারি কি অনন্যতা রক্ষা করে এবং অটো-ইনক্রিমেন্ট ক্রমান্বয়ে সংখ্যা তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Foreign Keys and Referential Integrity: ON DELETE Policies', bn: '৪. ফরেন কি ও রেফারেন্সিয়াল ইন্টিগ্রিটি: ON DELETE নীতি' } },
    {
      type: 'para',
      text: {
        en: 'A Foreign Key points to a Primary Key in another table, enforcing referential integrity. The ON DELETE clause specifies what happens when a parent row is deleted: CASCADE automatically deletes child rows; RESTRICT (or NO ACTION) blocks deletion if child records exist; and SET NULL resets foreign key columns to NULL.',
        bn: 'Foreign Key অন্য টেবিলের Primary Key-কে রেফার করে ডেটার পারস্পরিক সম্পর্ক রক্ষা করে। প্যারেন্ট টেবিলের সারি মুছে দিলে কী ঘটবে তা ON DELETE ঠিক করে: CASCADE দিলে সংশ্লিষ্ট চাইল্ড সারিগুলো নিজে থেকেই মুছে যায়; RESTRICT দিলে চাইল্ড ডেটা থাকা অবস্থায় প্যারেন্ট মুছতে বাধা দেয়। আর SET NULL চাইল্ড কলামের মান NULL করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `CREATE TABLE customer_orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_total DECIMAL(10, 2) NOT NULL,
    
    -- Enforce referential integrity with cascading cleanup
    CONSTRAINT fk_orders_user
        FOREIGN KEY (user_id) 
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

-- Output:
-- Table customer_orders created with Foreign Key fk_orders_user.
-- Result: Deleting a user automatically purges their child order records`,
      caption: {
        en: 'ON DELETE CASCADE prevents orphaned child records when parent entities are removed.',
        bn: 'ON DELETE CASCADE প্যারেন্ট ডেটা মুছে গেলে চাইল্ড ডেটার এতিম হয়ে পড়ে থাকা রোধ করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Column Constraints: NOT NULL and UNIQUE', bn: '৫. কলামের শর্ত: NOT NULL ও UNIQUE কনস্ট্রেইন্ট' } },
    {
      type: 'para',
      text: {
        en: 'Constraints protect database integrity at the storage layer. A NOT NULL constraint guarantees a column cannot hold missing or unknown values. A UNIQUE constraint ensures all non-null values in a column or combination of columns are distinct, automatically building an underlying unique B-Tree index.',
        bn: 'কনস্ট্রেইন্ট ডেটাবেসের তথ্য সুরক্ষিত রাখে। NOT NULL শর্ত নিশ্চিত করে যে কলামটি কখনোই খালি বা অজানা রাখা যাবে না। আর UNIQUE শর্ত নিশ্চিত করে যে সেই কলামের প্রতিটি মান সম্পূর্ণ আলাদা হবে, যা ডাটাবেসে ভেতরে ভেতরে একটি ইউনিক B-Tree ইনডেক্স তৈরি করে দ্রুত অনুসন্ধান চালায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `CREATE TABLE user_accounts (
    account_id INT PRIMARY KEY,
    phone_number VARCHAR(15) NOT NULL,
    government_nid VARCHAR(20) NOT NULL,
    
    -- Guarantee that no two users register with the same National ID
    CONSTRAINT uq_user_nid UNIQUE (government_nid)
);

-- Output:
-- Table user_accounts created.
-- Result: Attempts to insert duplicate government_nid will trigger violation error`,
      caption: {
        en: 'UNIQUE constraints guard against duplicate registrations at the database engine level.',
        bn: 'UNIQUE কনস্ট্রেইন্ট ডাটাবেস লেভেলে ডুপ্লিকেট রেজিস্ট্রেশন স্থায়ীভাবে বন্ধ করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Domain Validation: CHECK Constraints', bn: '৬. শর্ত সাপেক্ষে ডেটা যাচাই: CHECK কনস্ট্রেইন্ট' } },
    {
      type: 'para',
      text: {
        en: 'A CHECK constraint enforces custom business domain rules directly inside the table schema. Rows can only be inserted or updated if the specified boolean expression evaluates to TRUE or UNKNOWN. Violating a CHECK constraint aborts the transaction immediately.',
        bn: 'CHECK কনস্ট্রেইন্ট টেবিলের ভেতরে সরাসরি ব্যবসায়িক নিয়ম কার্যকর করে। কেবল তখনই কোনো নতুন সারি যোগ বা আপডেট করা যায় যখন নির্ধারিত শর্তটি সত্য প্রমাণিত হয়। শর্ত ভঙ্গ করলে ডাটাবেস সাথে সাথে কাজ বন্ধ করে এরর মেসেজ দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `CREATE TABLE employee_contracts (
    contract_id INT PRIMARY KEY,
    employee_name VARCHAR(80) NOT NULL,
    hourly_rate DECIMAL(6, 2) NOT NULL,
    age INT NOT NULL,
    
    -- Enforce legal working age and positive compensation
    CONSTRAINT chk_minimum_wage CHECK (hourly_rate >= 15.00),
    CONSTRAINT chk_legal_age CHECK (age >= 18 AND age <= 70)
);

-- Output:
-- Table employee_contracts created.
-- Result: Rejects insertions where age < 18 or hourly_rate < 15.00`,
      caption: {
        en: 'CHECK constraints reject illegal business data before it reaches persistent storage.',
        bn: 'CHECK কনস্ট্রেইন্ট অবৈধ ডেটা সেভ হওয়ার আগেই ডাটাবেস থেকে ফিরিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Automatic Column Fallbacks: The DEFAULT Constraint', bn: '৭. ডিফল্ট মান নির্ধারণ: DEFAULT কনস্ট্রেইন্ট' } },
    {
      type: 'para',
      text: {
        en: 'The DEFAULT constraint automatically injects a predefined static literal or dynamic function value when an INSERT statement omits that specific column. Common uses include setting account status to "pending", initializing zero counters, or stamping CURRENT_TIMESTAMP.',
        bn: 'DEFAULT কনস্ট্রেইন্ট নতুন সারি যোগ করার সময় কোনো কলামের মান না দেওয়া হলে স্বয়ংক্রিয়ভাবে একটি পূর্বনির্ধারিত মান বসিয়ে দেয়। যেমন অ্যাকাউন্টের স্ট্যাটাস "pending" রাখা, কাউন্টার 0 দিয়ে শুরু করা কিংবা বর্তমান সময় (CURRENT_TIMESTAMP) নথিভুক্ত করা।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `CREATE TABLE subscriptions (
    sub_id INT PRIMARY KEY,
    user_id INT NOT NULL,
    plan_tier VARCHAR(20) DEFAULT 'free',
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert providing only mandatory foreign key:
INSERT INTO subscriptions (sub_id, user_id) VALUES (101, 55);

-- Output:
-- 101 | 55 | free | true | 2026-09-26 12:00:00
-- Result: DEFAULT values populated automatically without explicit insertion`,
      caption: {
        en: 'DEFAULT constraints populate columns automatically when omitted during insert.',
        bn: 'DEFAULT কনস্ট্রেইন্ট কলাম ফাঁকা থাকলে স্বয়ংক্রিয়ভাবে পূর্বনির্ধারিত মান বসায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Schema Evolution: The ALTER TABLE Statement', bn: '৮. স্কিমার পরিবর্তন: ALTER TABLE স্টেটমেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'Production schemas constantly evolve. The ALTER TABLE statement modifies existing tables without destroying existing data. You can ADD COLUMN, DROP COLUMN, RENAME COLUMN, or ALTER COLUMN data types to accommodate new application features.',
        bn: 'প্রোডাকশনের ডাটাবেস সময়ের সাথে সাথে পরিবর্তন করতে হয়। ALTER TABLE স্টেটমেন্ট বিদ্যমান কোনো ডেটা না হারিয়েই টেবিলের গঠন পরিবর্তন করার সুবিধা দেয়। নতুন ফিচারের জন্য এতে ADD COLUMN (নতুন কলাম যোগ), DROP COLUMN (কলাম মুছে ফেলা), RENAME COLUMN (কলামের নাম পরিবর্তন) করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Add a new column to store two-factor authentication flag
ALTER TABLE users ADD COLUMN is_mfa_enabled BOOLEAN DEFAULT FALSE;

-- 2. Modify an existing column to support longer text
ALTER TABLE users MODIFY COLUMN email VARCHAR(150) NOT NULL;

-- 3. Drop a deprecated column
ALTER TABLE users DROP COLUMN legacy_fax_number;

-- Output:
-- ALTER TABLE users executed successfully.
-- Result: Table schema evolved live while preserving all existing user rows`,
      caption: {
        en: 'ALTER TABLE evolves table columns while preserving existing relational records.',
        bn: 'ALTER TABLE বিদ্যমান ডেটা অক্ষুণ্ণ রেখেই টেবিলের কাঠামো উন্নত করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Table Removal Operations: DELETE FROM, TRUNCATE, and DROP TABLE', bn: '৯. ডেটা ও টেবিল মোছা: DELETE FROM, TRUNCATE এবং DROP TABLE' } },
    {
      type: 'para',
      text: {
        en: 'SQL provides three distinct ways to remove data: 1) DELETE FROM removes rows matching a WHERE filter while logging row deletions individually; 2) TRUNCATE TABLE empties all rows and resets identity counters while keeping schema structure. 3) DROP TABLE permanently deletes table structure, columns, and data completely.',
        bn: 'এসকিউএলে ডেটা মোছার তিনটি ভিন্ন স্তর রয়েছে: ১) DELETE FROM নির্দিষ্ট শর্ত মেনে চলা সারিগুলো মুছে দেয় (remove rows); ২) TRUNCATE TABLE স্কিমা অক্ষত রেখে চোখের পলকে সব ডেটা খালি করে কাউন্টার রিসেট করে। ৩) DROP TABLE টেবিলের গঠন, কলাম ও ডেটা সহ সবকিছু চিরতরে মুছে ফেলে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. DELETE FROM: Logged row-by-row deletion targeting specific conditions
DELETE FROM user_logs WHERE created_at < '2025-01-01'; -- remove rows older than 1 year

-- 2. TRUNCATE TABLE: Rapidly deallocates all pages while keeping schema intact
TRUNCATE TABLE session_cache;
-- Structure remains! Can immediately INSERT new sessions starting from ID 1.

-- 3. DROP TABLE: Completely destroys data and schema metadata
DROP TABLE obsolete_logs;
-- Structure gone! Querying obsolete_logs now throws "Table does not exist" error.

-- Output:
-- DELETE 450 (450 rows removed).
-- TRUNCATE TABLE session_cache succeeded (0 rows remaining).
-- DROP TABLE obsolete_logs succeeded (table removed from metadata catalog).
-- Result: Targeted row deletion, fast page deallocation, and complete eradication demonstrated`,
      caption: {
        en: 'TRUNCATE empties rows and keeps the schema; DROP eradicates both data and schema.',
        bn: 'TRUNCATE ডেটা খালি করে স্কিমা ঠিক রাখে; DROP ডেটা ও স্কিমা দুটোই মুছে ফেলে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Relational Normalization: 1NF, 2NF, 3NF & Denormalization', bn: '১০. রিলেশনাল নরমালাইজেশন: 1NF, 2NF, 3NF ও ডিনরমালাইজেশন' } },
    {
      type: 'para',
      text: {
        en: 'Database Normalization eliminates redundancy and update anomalies: First Normal Form (1NF) requires atomic (indivisible) column values and unique rows; Second Normal Form (2NF) eliminates partial dependency on composite keys. Third Normal Form (3NF) eliminates transitive dependency (non-key columns depending on other non-key columns). High-throughput read systems deliberately Denormalize with cached aggregates to boost read speed.',
        bn: 'ডাটাবেস নরমালাইজেশন তথ্যের অনর্থক পুনরাবৃত্তি ও অসঙ্গতি দূর করে: 1NF কলামে অবিভাজ্য একক মান ও স্বতন্ত্র সারি দাবি করে; 2NF কম্পোজিট কি-এর আংশিক নির্ভরতা দূর করে। 3NF ট্রানজিটিভ ডিপেনডেন্সি (নন-কি কলাম অন্য নন-কি কলামের ওপর নির্ভর করা) দূর করে। তবে দ্রুত রিড অপারেশনের জন্য মাঝে মাঝে সচেতনভাবে ডিনরমালাইজ করে ক্যাশ রাখা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- ❌ Unnormalized: Repeating comma-separated values violates 1NF!
-- 101 | 'Dhaka,Chittagong' | 'Rahim'

-- ✅ 3NF Clean Design: Normalized into atomic relations with Foreign Keys
CREATE TABLE cities (
    city_id INT PRIMARY KEY,
    city_name VARCHAR(50) NOT NULL
);

CREATE TABLE user_locations (
    user_id INT,
    city_id INT,
    PRIMARY KEY (user_id, city_id),
    FOREIGN KEY (city_id) REFERENCES cities(city_id)
);

-- Output:
-- Normalized relational schema established.
-- Result: Clean 3NF architecture eliminating data anomalies`,
      caption: {
        en: 'Normalizing tables to 3NF guarantees data integrity and prevents update anomalies.',
        bn: 'টেবিল ৩NF-এ নরমালাইজ করলে ডেটা অসঙ্গতি রোধ হয় এবং তথ্য অটুট থাকে।'
      }
    }
  ],
  exercises: [
    {
      id: 'sql-ddl-ex1',
      kind: 'predict',
      topic: 'sql: TRUNCATE vs DROP table structure',
      question: {
        en: 'Does TRUNCATE TABLE retain the table structure and its columns for future inserts?',
        bn: 'TRUNCATE TABLE কি ভবিষ্যতের ব্যবহারের জন্য টেবিলের গঠন ও কলামগুলো অক্ষুণ্ণ রাখে?'
      },
      code: `/* SQL table deletion mechanics */
/* TRUNCATE TABLE my_table */`,
      answer: 'yes',
      accept: ['yes', 'true', 'Yes', 'retains structure'],
      hint: {
        en: 'TRUNCATE deletes the rows, but preserves the schema.',
        bn: 'TRUNCATE শুধু ডেটা মোছে, কিন্তু স্কিমা ঠিক রাখে।'
      },
      explanation: {
        en: 'TRUNCATE TABLE removes all rows from a table and resets auto-increment counters, but the table schema definition remains intact in the catalog.',
        bn: 'TRUNCATE TABLE টেবিলের সব সারি মুছে অটো-ইনক্রিমেন্ট রিসেট করে দেয়, তবে টেবিলের গঠন বা স্কিমা ডাটাবেসে সম্পূর্ণ অক্ষত থাকে।'
      }
    },
    {
      id: 'sql-ddl-ex2',
      kind: 'mcq',
      topic: 'sql: Primary key constraint rules',
      question: {
        en: 'Which two fundamental constraints are automatically enforced simultaneously on a PRIMARY KEY column?',
        bn: 'PRIMARY KEY কলামে স্বয়ংক্রিয়ভাবে কোন দুটি মৌলিক কনস্ট্রেইন্ট কার্যকর হয়?'
      },
      options: [
        { en: 'NOT NULL and UNIQUE', bn: 'NOT NULL এবং UNIQUE' },
        { en: 'CHECK and DEFAULT', bn: 'CHECK এবং DEFAULT' },
        { en: 'FOREIGN KEY and CASCADE', bn: 'FOREIGN KEY এবং CASCADE' },
        { en: 'INDEX and AUTO_INCREMENT', bn: 'INDEX এবং AUTO_INCREMENT' }
      ],
      answer: 0,
      hint: {
        en: 'It cannot be null, and it must be distinct.',
        bn: 'এটি নাল হতে পারে না, এবং এটি ইউনিক হতে হবে।'
      },
      explanation: {
        en: 'A Primary Key uniquely identifies rows, requiring that every row possesses a distinct, non-NULL identifier (NOT NULL + UNIQUE).',
        bn: 'প্রাইমারি কি প্রতিটি সারিকে আলাদাভাবে চিহ্নিত করতে বাধ্য করে, তাই এটি একই সাথে NOT NULL এবং UNIQUE উভয় নিয়ম কার্যকর করে।'
      }
    },
    {
      id: 'sql-ddl-ex3',
      kind: 'mcq',
      topic: 'sql: ON DELETE CASCADE purpose',
      question: {
        en: 'What happens when a parent row is deleted if its child table defines FOREIGN KEY ... ON DELETE CASCADE?',
        bn: 'চাইল্ড টেবিলে FOREIGN KEY ... ON DELETE CASCADE দেওয়া থাকলে প্যারেন্ট সারি মুছে ফেললে কী ঘটবে?'
      },
      options: [
        { en: 'All corresponding child rows referencing that parent are automatically deleted', bn: 'সেই প্যারেন্টকে রেফার করা সমস্ত সংশ্লিষ্ট চাইল্ড সারি স্বয়ংক্রিয়ভাবে মুছে যাবে' },
        { en: 'An error is raised and the delete is blocked', bn: 'এরর আসবে এবং ডিলিট আটকে যাবে' },
        { en: 'Child rows are converted into a new table', bn: 'চাইল্ড সারি নতুন টেবিলে চলে যাবে' },
        { en: 'The database shuts down', bn: 'ডাটাবেস বন্ধ হয়ে যাবে' }
      ],
      answer: 0,
      hint: {
        en: 'Cascade flows the deletion down to dependent records.',
        bn: 'ক্যাসকেড মুছে ফেলার কাজটিকে অধীনস্থ রেকর্ডেও প্রবাহিত করে।'
      },
      explanation: {
        en: 'ON DELETE CASCADE instructs the database engine to automatically delete all dependent child rows whenever the referenced parent row is deleted.',
        bn: 'ON DELETE CASCADE ডাটাবেসকে নির্দেশ দেয় প্যারেন্ট সারি মুছে ফেলার সাথে সাথে সংশ্লিষ্ট সব চাইল্ড সারিকেও যেন স্বয়ংক্রিয়ভাবে মুছে ফেলা হয়।'
      }
    }
  ],
  quiz: {
    id: 'sql-ddl-quiz',
    title: { en: 'SQL Schema & DDL Quiz', bn: 'এসকিউএল স্কিমা ও DDL কুইজ' },
    questions: [
      {
        id: 'dq1',
        kind: 'mcq',
        topic: 'sql: ALTER TABLE capability',
        question: {
          en: 'Which DDL command modifies an existing table schema by adding or removing columns without deleting stored data?',
          bn: 'ভেতরের সংরক্ষিত তথ্য না মুছেই কোনো টেবিলের কলাম যোগ বা বাদ দেওয়ার জন্য কোন DDL কমান্ডটি ব্যবহৃত হয়?'
        },
        options: [
          { en: 'ALTER TABLE', bn: 'ALTER TABLE' },
          { en: 'UPDATE TABLE', bn: 'UPDATE TABLE' },
          { en: 'MODIFY SCHEMA', bn: 'MODIFY SCHEMA' },
          { en: 'REBUILD TABLE', bn: 'REBUILD TABLE' }
        ],
        answer: 0,
        hint: {
          en: 'It alters the table structure.',
          bn: 'এটি টেবিলের গঠন অল্টার করে।'
        },
        explanation: {
          en: 'ALTER TABLE modifies the schema definition of an existing table (e.g. ADD COLUMN, DROP COLUMN) while preserving all persistent rows.',
          bn: 'ALTER TABLE টেবিলের বিদ্যমান ডেটা অক্ষুণ্ণ রেখেই তার কলাম যোগ, বাদ বা পরিবর্তন করার কাজ সম্পন্ন করে।'
        }
      },
      {
        id: 'dq2',
        kind: 'mcq',
        topic: 'sql: Check constraint purpose',
        question: {
          en: 'What is the primary role of a CHECK constraint in a table definition?',
          bn: 'একটি টেবিল সংজ্ঞায় CHECK কনস্ট্রেইন্টের মূল ভূমিকা কী?'
        },
        options: [
          { en: 'To enforce custom business logic expressions (e.g. price > 0) on inserted and updated data', bn: 'নতুন ইনসার্ট বা আপডেট হওয়া ডেটার ওপর কাস্টম ব্যবসায়িক শর্ত (যেমন price > 0) প্রয়োগ করা' },
          { en: 'To speed up query performance like an index', bn: 'ইনডেক্সের মতো কোয়ারির গতি বাড়ানো' },
          { en: 'To encrypt sensitive columns', bn: 'কলাম এনক্রিপ্ট করা' },
          { en: 'To backup the database', bn: 'ডাটাবেস ব্যাকআপ নেওয়া' }
        ],
        answer: 0,
        hint: {
          en: 'It checks whether values satisfy a boolean predicate.',
          bn: 'এটি মানগুলো বুলিয়ান শর্ত পূরণ করছে কি না তা যাচাই করে।'
        },
        explanation: {
          en: 'CHECK constraints ensure that values in a column satisfy a boolean condition (such as salary >= 0) before being committed to disk.',
          bn: 'CHECK কনস্ট্রেইন্ট নিশ্চিত করে যে কোনো ডেটা ডিস্কে সেভ হওয়ার আগে তা যেন অবশ্যই নির্ধারিত বুলিয়ান শর্ত পূরণ করে।'
        }
      },
      {
        id: 'dq3',
        kind: 'mcq',
        topic: 'sql: DROP vs TRUNCATE differences',
        question: {
          en: 'What is the operational difference between TRUNCATE TABLE and DROP TABLE?',
          bn: 'TRUNCATE TABLE এবং DROP TABLE-এর মধ্যে কার্যকরী পার্থক্য কী?'
        },
        options: [
          { en: 'TRUNCATE deletes all rows while preserving table structure; DROP removes both rows and the table schema definition permanently', bn: 'TRUNCATE টেবিল কাঠামো বজায় রেখে কেবল সব সারি মুছে দেয়; আর DROP টেবিলের ডেটা ও স্কিমা উভয়কেই চিরতরে মুছে ফেলে' },
          { en: 'TRUNCATE takes a WHERE clause while DROP does not', bn: 'TRUNCATE-এ WHERE ক্লজ চলে কিন্তু DROP-এ চলে না' },
          { en: 'TRUNCATE works only on virtual views', bn: 'TRUNCATE কেবল ভার্চুয়াল ভিউতে কাজ করে' },
          { en: 'DROP can be rolled back in all storage engines', bn: 'সব ইঞ্জিনেই DROP রোলব্যাক করা যায়' }
        ],
        answer: 0,
        hint: {
          en: 'One empties the container; the other throws the container away.',
          bn: 'একটি পাত্র খালি করে; অন্যটি পাত্রটিকেই ধ্বংস করে।'
        },
        explanation: {
          en: 'TRUNCATE deallocates data pages rapidly while keeping the metadata, column definitions, and constraints ready for new inserts. DROP removes the table metadata entirely from the database dictionary.',
          bn: 'TRUNCATE টেবিলের গঠন ও মেটাডেটা অক্ষুণ্ণ রেখে অত্যন্ত দ্রুত সব ডেটা পৃষ্ঠা খালি করে দেয়। অন্যদিকে DROP কমান্ড ডাটাবেস ক্যাটালগ থেকেই টেবিলটির সম্পূর্ণ অস্তিত্ব বিলুপ্ত করে।'
        }
      },
      {
        id: 'dq4',
        kind: 'mcq',
        topic: 'sql: Normalization requirements for 3NF',
        question: {
          en: 'What does Third Normal Form (3NF) strictly require in relational schema design?',
          bn: 'রিলেশনাল স্কিমা ডিজাইনে থার্ড নরমাল ফর্ম (3NF) এর কঠোর প্রয়োজনীয়তা কী?'
        },
        options: [
          { en: 'The table must be in 2NF, and every non-key column must depend directly on the primary key, eliminating transitive dependencies', bn: 'টেবিলটিকে অবশ্যই 2NF এ থাকতে হবে এবং প্রতিটি নন-কি কলাম সরাসরি প্রাইমারি কি এর ওপর নির্ভরশীল হতে হবে, কোনো ট্রানজিটিভ নির্ভরতা থাকা চলবে না' },
          { en: 'Every table must declare exactly 3 foreign keys', bn: 'প্রতিটি টেবিলে ঠিক 3 টি ফরেন কি থাকতে হবে' },
          { en: 'Tables cannot contain string or text data types', bn: 'টেবিলে কোনো স্ট্রিং বা টেক্সট টাইপ থাকা চলবে না' },
          { en: 'All numeric columns must be partitioned across 3 disks', bn: 'সকল সংখ্যার কলাম 3 টি ডিস্কে ভাগ করে রাখতে হবে' }
        ],
        answer: 0,
        hint: {
          en: 'Non-key columns must not depend on other non-key columns.',
          bn: 'নন-কি কলাম অন্য কোনো নন-কি কলামের ওপর নির্ভর করতে পারবে না।'
        },
        explanation: {
          en: '3NF prevents transitive dependency: every non-prime attribute must depend solely on the candidate key ("the key, the whole key, and nothing but the key").',
          bn: '3NF ট্রানজিটিভ নির্ভরতা দূর করে: প্রতিটি নন-কি কলামকে সম্পূর্ণভাবে কেবল প্রাইমারি কি-এর ওপরই নির্ভরশীল হতে হয়।'
        }
      }
    ]
  }
};
