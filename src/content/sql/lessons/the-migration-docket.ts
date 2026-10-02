import type { Lesson } from '../../../lib/types';

export const migrationDocketLesson: Lesson = {
  slug: 'the-migration-docket',
  tech: 'sql',
  title: {
    en: 'SQL Views, Subqueries, EXISTS, Bulk ETL & Schema Migrations',
    bn: 'এসকিউএল ভিউ, সাব-কোয়ারি, EXISTS, বাল্ক ETL ও স্কিমা মাইগ্রেশন'
  },
  summary: {
    en: 'Master database modularization and schema evolution across 10 structured topics, from virtual views to subquery classifications. Learn correlated subqueries, EXISTS tests, bulk ETL pipelines, and production migration workflows.',
    bn: 'ভার্চুয়াল ভিউ থেকে শুরু করে সাবকোয়ারির শ্রেণীবিন্যাস পর্যন্ত 10 টি সুসংগঠিত বিষয়ে ডাটাবেস মডিউলারাইজেশন আয়ত্ত করুন। জানুন কোরিলেটেড সাবকোয়ারি, EXISTS যাচাইকরণ, বাল্ক ETL পাইপলাইন এবং প্রোডাকশন মাইগ্রেশন পদ্ধতি।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-orm-shadow',
    title: { en: 'SQL Security: Injection Defense, Prepared Statements & ORM Boundaries', bn: 'এসকিউএল সিকিউরিটি: ইনজেকশন প্রতিরোধ, প্রিপেয়ার্ড স্টেটমেন্ট ও ORM সীমা' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Virtual Tables: Creating Views (CREATE VIEW)', bn: '১. ভার্চুয়াল টেবিল: ভিউ তৈরি (CREATE VIEW)' } },
    {
      type: 'para',
      text: {
        en: 'A View is a virtual table defined by a stored SELECT query. A view stores NO data of its own on disk; instead, the database executes the underlying query dynamically whenever the view is referenced. Views simplify complex join logic, standardize business reporting, and provide security by restricting sensitive column visibility.',
        bn: 'ভিউ হলো একটি ভার্চুয়াল টেবিল যা একটি সংরক্ষিত SELECT কুয়েরির ওপর ভিত্তি করে কাজ করে। ভিউ নিজে ডিস্কে কোনো ডেটা জমিয়ে রাখে না; বরং প্রতিবার যখনই ভিউটি কুয়েরি করা হয়, ডাটাবেস তখন তার ভেতরের আসল কুয়েরিটি চালায়। ভিউ জটিল জয়েন সহজ করে এবং সংবেদনশীল কলাম গোপন রেখে চমৎকার নিরাপত্তা দেয়।'
      }
    },
    {
      type: 'visual',
      id: 'database'
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Creating a secure view that hides employee salary data from general staff
CREATE VIEW public_staff_directory AS
SELECT 
    employee_id,
    first_name,
    last_name,
    department,
    work_email
FROM employees
WHERE is_active = 1;

-- Querying the virtual view just like a real table:
SELECT first_name, department FROM public_staff_directory WHERE department = 'Engineering';

-- Output:
-- VIEW public_staff_directory created.
-- Tanvir | Engineering
-- Nadia  | Engineering
-- Result: Virtual table queried cleanly while sensitive salary records remain hidden`,
      caption: {
        en: 'Views encapsulate complex joins and column access policies behind clean virtual relations.',
        bn: 'ভিউ জটিল জয়েন ও গোপনীয়তার নিয়মগুলোকে সাধারণ ভার্চুয়াল টেবিলের ভেতরে লুকিয়ে রাখে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. View Updates and Deletion: DROP VIEW', bn: '২. ভিউ আপডেট ও ডিলিট: DROP VIEW' } },
    {
      type: 'para',
      text: {
        en: 'Simple single-table views without aggregates or distinct modifiers are Updatable: issuing an UPDATE against the view modifies the underlying physical table directly. Views containing joins, GROUP BY, or window functions are strictly read-only. DROP VIEW removes the virtual definition without affecting underlying table data.',
        bn: 'কোনো এগ্রিগেট বা ডিস্টিংকট ছাড়া তৈরি সাধারণ সিঙ্গেল-টেবিল ভিউগুলো Updatable হয়: ভিউতে কোনো UPDATE চালালে তা সরাসরি মূল ফিজিক্যাল টেবিল পরিবর্তন করে। তবে জয়েন বা GROUP BY যুক্ত জটিল ভিউগুলো শুধুই রিড-অনলি থাকে। আর DROP VIEW ভিউয়ের সংজ্ঞাটি মুছে ফেলে কিন্তু মূল টেবিলের কোনো ক্ষতি করে না।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Updating a row through an updatable view
UPDATE public_staff_directory
SET work_email = 'tanvir.eng@corp.com'
WHERE employee_id = 101;
-- Modifies row in underlying 'employees' table!

-- 2. Removing an obsolete view definition
DROP VIEW public_staff_directory;
-- The underlying 'employees' table and all its data remain completely intact!

-- Output:
-- UPDATE 1 (row updated in base table)
-- DROP VIEW succeeded.
-- Result: Underlying table unaffected by virtual view deletion`,
      caption: {
        en: 'Dropping a view removes its catalog definition while preserving physical table data.',
        bn: 'ভিউ মুছে ফেললে কেবল তার রূপরেখা মোছে কিন্তু মূল টেবিলের আসল ডেটা অক্ষত থাকে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Performance Caching: Materialized Views', bn: '৩. পারফরম্যান্স ক্যাশিং: মেটেরিয়ালাইজড ভিউ ও রিফ্রেশ' } },
    {
      type: 'para',
      text: {
        en: 'Unlike regular views, a Materialized View physically saves the query results onto disk. When queried, it reads precomputed data instantly without recalculating expensive multi-table joins. Running REFRESH MATERIALIZED VIEW updates the physical snapshot periodically or during nightly batch runs.',
        bn: 'সাধারণ ভিউয়ের মতো না হয়ে Materialized View কুয়েরির ফলাফলকে সরাসরি ডিস্কে সংরক্ষণ করে রাখে। ফলে কুয়েরি করার সময় এটি কোটি কোটি ডেটার জয়েন বারবার না চালিয়ে ডিস্ক থেকে মুহূর্তের মধ্যে প্রাক-গণনাকৃত ক্যাশ ডেটা ফেরত দেয়। REFRESH MATERIALIZED VIEW কমান্ডের মাধ্যমে এই ডেটাকে নিয়মিত আপডেট করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Creating a physically persisted materialized analytical snapshot (PostgreSQL syntax)
CREATE MATERIALIZED VIEW mv_daily_sales_summary AS
SELECT 
    store_id,
    DATE(sale_time) AS sale_date,
    COUNT(*) AS total_sales_count,
    SUM(total_amount) AS total_revenue
FROM orders
GROUP BY store_id, DATE(sale_time);

-- Periodic batch refresh to sync with newly committed orders:
REFRESH MATERIALIZED VIEW mv_daily_sales_summary;

-- Output:
-- MATERIALIZED VIEW created.
-- REFRESH MATERIALIZED VIEW completed in 0.082s.
-- Result: Expensive multi-million row aggregation cached for instant sub-millisecond retrieval`,
      caption: {
        en: 'Materialized views trade real-time freshness for sub-millisecond query response times.',
        bn: 'মেটেরিয়ালাইজড ভিউ প্রাক-গণনাকৃত ফলাফল ডিস্কে রেখে তাৎক্ষণিক রেসপন্স টাইম নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Subquery Taxonomy: Scalar, Column, and Table Subqueries', bn: '৪. সাব-কোয়ারির ধরণ: স্কেলার, কলাম ও টেবিল সাব-কোয়ারি' } },
    {
      type: 'para',
      text: {
        en: 'A subquery is a nested statement enclosed in parentheses inside another command. Subqueries fall into 3 distinct categories. First, Scalar Subqueries return a single value of 1 row and 1 column. Second, Column Subqueries return a single column containing multiple rows, typically filtered with IN. Third, Table Subqueries produce full relations for use in FROM clauses.',
        bn: 'সাবকোয়ারি হলো কোনো মূল স্টেটমেন্টের ভেতরে ব্র্যাকেটে থাকা আরেকটি নেস্টেড কোয়ারি। সাবকোয়ারি প্রধানত 3 শ্রেণীতে বিভক্ত। প্রথমত, Scalar Subquery ঠিক 1 টি মান (1 টি সারি ও 1 টি কলাম) ফেরত দেয়। দ্বিতীয়ত, Column Subquery একটি একক কলামে একাধিক সারি ফেরত দেয়, যা সাধারণত IN ক্লজে ব্যবহৃত হয়। তৃতীয়ত, Table Subquery একটি পূর্ণাঙ্গ রিলেশন তৈরি করে যা FROM ক্লজে ব্যবহৃত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Scalar Subquery in SELECT: Returns single metric
SELECT 
    product_name,
    unit_price,
    (SELECT ROUND(AVG(unit_price), 2) FROM products) AS global_avg_price
FROM products
WHERE unit_price > (SELECT AVG(unit_price) FROM products);

-- 2. Column Subquery in WHERE: Multi-row single column with IN
SELECT customer_name 
FROM customers 
WHERE customer_id IN (SELECT customer_id FROM vip_loyalty_members);

-- Output:
-- Gaming Laptop | 1200.00 | 450.00
-- Arifur Rahman
-- Result: Modular subquery expressions evaluated cleanly within parent contexts`,
      caption: {
        en: 'Scalar subqueries yield single values; column subqueries supply membership sets.',
        bn: 'স্কেলার সাব-কোয়ারি একক মান দেয়; কলাম সাব-কোয়ারি সেটের সদস্যপদ সরবরাহ করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Correlated Subqueries: Row-by-Row Outer References', bn: '৫. কোরিলেটেড সাব-কোয়ারি: মূল কোয়ারির ওপর নির্ভরশীলতা' } },
    {
      type: 'para',
      text: {
        en: 'An independent subquery evaluates once for the entire query. A Correlated Subquery references columns from the outer query, forcing the engine to re-evaluate the inner subquery for every candidate outer row. While powerful, correlated subqueries can trigger performance slowdowns without appropriate indexes.',
        bn: 'একটি স্বাধীন সাব-কোয়ারি পুরো কুয়েরির জন্য মাত্র একবার চলে। কিন্তু Correlated Subquery বাইরের মূল কোয়ারির কলামের ওপর নির্ভর করে, যার ফলে বাইরের প্রতি সারির জন্য ভেতরের কুয়েরিটি বারবার নতুন করে চালাতে হয়। এটি অত্যন্ত শক্তিশালী হলেও সঠিক ইনডেক্স না থাকলে পারফরম্যান্স ধীর করে ফেলতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Find employees earning more than the average salary OF THEIR OWN department
SELECT 
    e.employee_id,
    e.first_name,
    e.department,
    e.salary
FROM employees AS e
WHERE e.salary > (
    -- Inner correlated subquery references outer table alias 'e'!
    SELECT AVG(inner_emp.salary)
    FROM employees AS inner_emp
    WHERE inner_emp.department = e.department
);

-- Output:
-- 101 | Tanvir | Engineering | 95000.00  (Dept avg: 75000.00)
-- 104 | Sumon  | Marketing   | 72000.00  (Dept avg: 58000.00)
-- Result: Correlated subquery calculated contextual thresholds per department`,
      caption: {
        en: 'Correlated subqueries access outer row attributes to compute dynamic contextual thresholds.',
        bn: 'কোরিলেটেড সাব-কোয়ারি বাইরের সারির ডেটা ব্যবহার করে গতিশীল শর্ত হিসাব করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Existence Testing: The EXISTS and NOT EXISTS Operators', bn: '৬. উপস্থিতি যাচাই: EXISTS ও NOT EXISTS অপারেটর' } },
    {
      type: 'para',
      text: {
        en: 'The EXISTS operator tests whether a subquery returns ANY rows, evaluating to TRUE as soon as the first match is located (short-circuit execution). Unlike IN (which evaluates the entire list and mishandles NULLs), EXISTS is safe with NULLs and optimized by database query engines.',
        bn: 'EXISTS অপারেটর যাচাই করে যে একটি সাব-কোয়ারি কোনো সারি ফেরত দেয় কি না। প্রথম একটি সারি মেলার সাথে সাথেই এটি থামিয়ে দিয়ে TRUE ফেরত দেয় (শর্ট-সার্কিট)। IN অপারেটর যেখানে পুরো তালিকাটি মেমোরিতে লোড করে এবং নাল থাকলে ভুল ফলাফল দেয়, সেখানে EXISTS নালের ক্ষেত্রে সম্পূর্ণ নিরাপদ ও দ্রুত।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Find customers who placed orders within the last 30 days
SELECT c.customer_id, c.customer_name
FROM customers AS c
WHERE EXISTS (
    SELECT 1 
    FROM orders AS o
    WHERE o.customer_id = c.customer_id
      AND o.order_date >= '2026-08-26'
);

-- Output:
-- 101 | Farhan Chowdhury
-- 105 | Nadia Sultana
-- Result: EXISTS short-circuits upon first match without scanning full table histories`,
      caption: {
        en: 'EXISTS short-circuits immediately upon discovering the first matching row.',
        bn: 'EXISTS প্রথম মিলটি খুঁজে পাওয়ার সাথে সাথেই সফল সমাপ্তি ঘোষণা করে সময় বাঁচায়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Quantified Comparisons: The ANY and ALL Operators', bn: '৭. পরিমাণগত তুলনা: ANY এবং ALL অপারেটর' } },
    {
      type: 'para',
      text: {
        en: 'The ANY and ALL operators compare a scalar value against a subquery result set: col > ANY (subquery) evaluates to TRUE if the value exceeds AT LEAST ONE value in the set. Col > ALL (subquery) requires the value to exceed EVERY value in the set.',
        bn: 'ANY এবং ALL অপারেটর একটি একক মানকে সাব-কোয়ারির তালিকার সাথে তুলনা করে: col > ANY দিলে মানটি তালিকার যেকোনো একটি মানের চেয়ে বড় হলেই সত্য হয়; আর col > ALL দিলে মানটিকে তালিকার প্রত্যেকটি মানের চেয়ে বড় হতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. ANY: Products priced higher than ANY item in the 'Accessories' category:
SELECT product_name, unit_price
FROM products
WHERE unit_price > ANY (
    SELECT unit_price FROM products WHERE category = 'Accessories'
);

-- 2. ALL: Products priced higher than ALL items in 'Accessories':
SELECT product_name, unit_price
FROM products
WHERE unit_price > ALL (
    SELECT unit_price FROM products WHERE category = 'Accessories'
);

-- Output:
-- Mechanical Keyboard | 85.00  (Matches > ANY since lowest accessory is 10.00)
-- 4K Ultra Monitor    | 450.00 (Matches > ALL since highest accessory is 120.00)
-- Result: Quantified relational comparisons executed across multi-row sets`,
      caption: {
        en: 'ANY checks for at least one satisfaction; ALL requires unanimous satisfaction.',
        bn: 'ANY অন্তত একটি শর্ত মিললে সত্য হয়; ALL সব শর্ত মিললে তবেই সত্য হয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Table Duplication: The SELECT INTO Statement', bn: '৮. টেবিল ক্লোনিং ও ব্যাকআপ: SELECT INTO স্টেটমেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'The SELECT INTO statement creates a brand-new physical table on the fly and populates it with the results of a query in a single atomic step. It is the premier operational tool for creating instant backup snapshots before executing risky batch updates.',
        bn: 'SELECT INTO স্টেটমেন্ট এক নিমিষে একটি নতুন ফিজিক্যাল টেবিল তৈরি করে এবং তাতে কুয়েরির সব ডেটা কপি করে ঢুকিয়ে দেয়। ঝুঁকিপূর্ণ কোনো আপডেট বা ডিলিট কাজ চালানোর আগে টেবিলের তাৎক্ষণিক ব্যাকআপ কপি তৈরি করার জন্য এটি সবচেয়ে জনপ্রিয় উপায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Create an instant snapshot table of all VIP accounts before rate adjustments
SELECT 
    user_id,
    account_tier,
    balance_usd
INTO vip_backup_snapshot_20260926 -- Creates new table automatically!
FROM customer_accounts
WHERE account_tier = 'VIP';

-- Output:
-- 245 rows affected.
-- Table vip_backup_snapshot_20260926 created with 245 records.
-- Result: Point-in-time table clone established for disaster recovery`,
      caption: {
        en: 'SELECT INTO creates and populates a new physical table in a single atomic command.',
        bn: 'SELECT INTO একটিমাত্র কমান্ডেই নতুন টেবিল তৈরি করে সব ডেটা কপি করে দেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Bulk ETL Pipelines: The INSERT INTO ... SELECT Statement', bn: '৯. বাল্ক ETL পাইপলাইন: INSERT INTO ... SELECT স্টেটমেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'While SELECT INTO creates a new table, INSERT INTO ... SELECT copies rows from a query into an EXISTING destination table. This forms the backbone of Data Warehousing and ETL pipelines, transferring staging data into historical audit archives without procedural code.',
        bn: 'SELECT INTO যেখানে নতুন টেবিল বানায়, সেখানে INSERT INTO ... SELECT আগে থেকেই বিদ্যমান কোনো টেবিলে কোয়ারির ডেটা কপি করে নিয়ে যায়। এটি ডেটা ওয়্যারহাউস ও ETL পাইপলাইনের মূল ভিত্তি, যার মাধ্যমে কোনো বাড়তি প্রোগ্রামিং কোড ছাড়াই লক্ষ লক্ষ রেকর্ড আর্কাইভ টেবিলে স্থানান্তর করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Archive closed orders older than 1 year into long-term cold storage table
INSERT INTO historical_orders_archive (order_id, customer_id, final_amount, archived_at)
SELECT 
    order_id,
    customer_id,
    total_amount,
    CURRENT_TIMESTAMP
FROM active_orders
WHERE status = 'completed'
  AND order_date < '2025-09-26';

-- Output:
-- INSERT 1420 (1420 rows inserted into historical_orders_archive)
-- Result: High-performance set-based data migration executed in 0.14 seconds`,
      caption: {
        en: 'INSERT INTO SELECT enables massive set-based data transfers between relations.',
        bn: 'INSERT INTO SELECT এক টেবিল থেকে অন্য টেবিলে বিশাল ডেটা দ্রুত স্থানান্তরের সুযোগ দেয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Schema Migrations: Version-Controlled Up/Down Evolution', bn: '১০. স্কিমা মাইগ্রেশন: ভার্সন নিয়ন্ত্রিত Up ও Down বিবর্তন' } },
    {
      type: 'para',
      text: {
        en: 'Production schemas are managed via Schema Migrations: timestamped, version-controlled scripts tracked in Git. Each migration defines an UP script (applying schema additions) and a DOWN script (reverting them cleanly), enabling deterministic automated continuous deployment across development, staging, and production clusters.',
        bn: 'বাস্তব সফটওয়্যারে ডাটাবেসের কাঠামো পরিবর্তন করা হয় Schema Migration-এর মাধ্যমে। প্রতিটি মাইগ্রেশনে একটি UP স্ক্রিপ্ট (যা নতুন টেবিল বা কলাম যোগ করে) এবং একটি DOWN স্ক্রিপ্ট (যা আগের অবস্থায় ফিরিয়ে নেয়) থাকে। এটি গিট (Git) রিপোজিটরিতে ট্র্যাক করা হয় এবং সফটওয়্যার ডিপ্লয়মেন্টের সময় টিমমেটদের সবার ডাটাবেসকে একই অবস্থায় রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Migration File: 20260926_add_mfa_token_to_users.sql

-- UP MIGRATION (Applied during software deployment):
ALTER TABLE users ADD COLUMN mfa_secret_token VARCHAR(64) DEFAULT NULL;
CREATE INDEX idx_users_mfa ON users(mfa_secret_token);

-- DOWN MIGRATION (Applied if software deployment is rolled back):
-- DROP INDEX idx_users_mfa;
-- ALTER TABLE users DROP COLUMN mfa_secret_token;

-- Output:
-- Migration 20260926_add_mfa_token_to_users applied successfully in 0.012s.
-- Result: Zero-downtime schema evolution tracked in schema_migrations version ledger`,
      caption: {
        en: 'Schema migrations provide deterministic, reversible database changes synchronized with Git.',
        bn: 'স্কিমা মাইগ্রেশন গিটের সাথে তাল মিলিয়ে ডাটাবেসের পরিবর্তনকে সুশৃঙ্খল ও প্রত্যাবর্তনযোগ্য রাখে।'
      }
    }
  ],
  exercises: [
    {
      id: 'sql-mig-ex1',
      kind: 'predict',
      topic: 'sql: Materialized view disk storage',
      question: {
        en: 'Does a Materialized View physically store precomputed query results on disk (unlike a standard virtual view)?',
        bn: 'সাধারণ ভার্চুয়াল ভিউয়ের মতো না হয়ে Materialized View কি ডিস্কে প্রাক-গণনাকৃত ডেটা সংরক্ষণ করে?'
      },
      code: `/* SQL materialized view disk persistence check */
/* CREATE MATERIALIZED VIEW mv_summary AS SELECT ... */`,
      answer: 'yes',
      accept: ['yes', 'true', 'Yes', 'stores on disk'],
      hint: {
        en: 'Materialized views persist results physically.',
        bn: 'মেটেরিয়ালাইজড ভিউ ফলাফল ডিস্কে জমা রাখে।'
      },
      explanation: {
        en: 'A standard view is merely a stored query that runs dynamically. A Materialized View physically caches precomputed query results on disk for rapid access.',
        bn: 'সাধারণ ভিউ কেবল সংরক্ষিত কুয়েরি চালায়। কিন্তু Materialized View দ্রুত গতিতে ডেটা সরবরাহের জন্য কুয়েরির ফলাফল ডিস্কে সেভ করে রাখে।'
      }
    },
    {
      id: 'sql-mig-ex2',
      kind: 'mcq',
      topic: 'sql: EXISTS short-circuit mechanism',
      question: {
        en: 'Why is EXISTS (subquery) often faster than IN (subquery)?',
        bn: 'কেন IN (subquery)-এর চেয়ে EXISTS (subquery) প্রায়শই দ্রুত কাজ করে?'
      },
      options: [
        { en: 'EXISTS short-circuits and stops scanning as soon as the very first matching row is found', bn: 'প্রথম একটি মিল খুঁজে পাওয়ার সাথে সাথেই EXISTS পুরো স্ক্যান বন্ধ করে দ্রুত সিদ্ধান্ত নেয় (শর্ট-সার্কিট)' },
        { en: 'EXISTS automatically creates an index', bn: 'EXISTS নিজে থেকে ইনডেক্স তৈরি করে' },
        { en: 'EXISTS deletes tables', bn: 'EXISTS টেবিল মুছে ফেলে' },
        { en: 'There is no speed difference', bn: 'কোনো গতির পার্থক্য নেই' }
      ],
      answer: 0,
      hint: {
        en: 'It stops on the first match.',
        bn: 'প্রথম ম্যাচেই এটি থেমে যায়।'
      },
      explanation: {
        en: 'The EXISTS operator short-circuits upon discovering the first matching record in the inner subquery, whereas IN typically evaluates the full set.',
        bn: 'EXISTS প্রথম মিলটি পাওয়ার সাথে সাথেই কাজ শেষ করে, যেখানে IN পুরো সেটটি মেমোরিতে তৈরি করে সময় নষ্ট করে।'
      }
    },
    {
      id: 'sql-mig-ex3',
      kind: 'mcq',
      topic: 'sql: SELECT INTO vs INSERT INTO SELECT',
      question: {
        en: 'What is the primary difference between SELECT INTO and INSERT INTO ... SELECT?',
        bn: 'SELECT INTO এবং INSERT INTO ... SELECT-এর মধ্যে মূল পার্থক্য কী?'
      },
      options: [
        { en: 'SELECT INTO creates a brand-new table automatically; INSERT INTO ... SELECT copies rows into an already existing destination table', bn: 'SELECT INTO নিজে থেকেই সম্পূর্ণ নতুন টেবিল তৈরি করে; আর INSERT INTO ... SELECT আগে থেকেই থাকা টেবিলে তথ্য কপি করে' },
        { en: 'SELECT INTO only works with strings', bn: 'SELECT INTO শুধু টেক্সটে কাজ করে' },
        { en: 'INSERT INTO SELECT deletes the original table', bn: 'INSERT INTO SELECT আসল টেবিল মুছে দেয়' },
        { en: 'They are identical synonyms', bn: 'উভয়ই সম্পূর্ণ এক' }
      ],
      answer: 0,
      hint: {
        en: 'One creates a new table; the other inserts into an existing table.',
        bn: 'একটি নতুন টেবিল বানায়; অন্যটি থাকা টেবিলে ঢোকায়।'
      },
      explanation: {
        en: 'SELECT INTO automatically defines and creates a new table structure based on the query projection. INSERT INTO SELECT requires the destination table to exist beforehand.',
        bn: 'SELECT INTO নিজে নিজেই নতুন টেবিল তৈরি করে ডেটা কপি করে। আর INSERT INTO ... SELECT ব্যবহার করতে হলে গন্তব্য টেবিলটি আগে থেকেই উপস্থিত থাকতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'sql-views-quiz',
    title: { en: 'SQL Views, Subqueries & Migrations Quiz', bn: 'এসকিউএল ভিউ, সাব-কোয়ারি ও মাইগ্রেশন কুইজ' },
    questions: [
      {
        id: 'mq1',
        kind: 'mcq',
        topic: 'sql: Updatable view constraint',
        question: {
          en: 'Which characteristic makes a SQL view strictly READ-ONLY (non-updatable)?',
          bn: 'ভিউতে নিচের কোনটির উপস্থিতি থাকলে সেটিকে আপডেট করা যায় না (রিড-অনলি হয়ে যায়)?'
        },
        options: [
          { en: 'The view definition contains aggregate functions (SUM, AVG) or GROUP BY clauses', bn: 'ভিউ সংজ্ঞায় এগ্রিগেট ফাংশন (SUM, AVG) অথবা GROUP BY ক্লজ থাকলে' },
          { en: 'The view contains a WHERE clause', bn: 'WHERE ক্লজ থাকলে' },
          { en: 'The view has column aliases', bn: 'কলাম অ্যালিয়াস থাকলে' },
          { en: 'The view is queried more than once', bn: 'একাধিকবার কুয়েরি করলে' }
        ],
        answer: 0,
        hint: {
          en: 'Aggregated groups cannot be mapped back unambiguously to individual source rows.',
          bn: 'এগ্রিগেট গ্রুপকে পেছনের কোনো একক মূল সারির সাথে সরাসরি মেলানো যায় না।'
        },
        explanation: {
          en: 'A view containing aggregations (SUM, COUNT), GROUP BY, or UNION cannot determine which underlying individual row to update, rendering it strictly read-only.',
          bn: 'এগ্রিগেট ফাংশন বা GROUP BY থাকলে ডাটাবেস বুঝতে পারে না মূল কোন নির্দিষ্ট সারিটি আপডেট করতে হবে, ফলে ভিউটি পুরোপুরি রিড-অনলি হয়ে যায়।'
        }
      },
      {
        id: 'mq2',
        kind: 'mcq',
        topic: 'sql: Schema migration purpose',
        question: {
          en: 'Why are database schema migrations tracked in Git alongside application source code?',
          bn: 'অ্যাপ্লিকেশনের সোর্স কোডের সাথে ডাটাবেসের স্কিমা মাইগ্রেশন ফাইল কেন গিটে (Git) সংরক্ষণ করা হয়?'
        },
        options: [
          { en: 'To ensure deterministic, version-controlled database schema changes synchronized across all developer machines and production environments', bn: 'সকল ডেভেলপার ও প্রোডাকশন সার্ভারে ডাটাবেসের সুনির্দিষ্ট ও ভার্সন-নিয়ন্ত্রিত পরিবর্তন নিশ্চিত করতে' },
          { en: 'To compress database backups', bn: 'ডাটাবেস ব্যাকআপ ছোট করতে' },
          { en: 'To replace SQL with Python', bn: 'এসকিউএল বাতিল করতে' },
          { en: 'To encrypt table rows', bn: 'টেবিল এনক্রিপ্ট করতে' }
        ],
        answer: 0,
        hint: {
          en: 'Version control brings code and schema changes into alignment.',
          bn: 'ভার্সন কন্ট্রোল কোড এবং ডাটাবেস পরিবর্তনকে একসাথে রাখে।'
        },
        explanation: {
          en: 'Migrations provide a version-controlled, reproducible history of schema transformations, ensuring development, testing, and production databases remain in sync.',
          bn: 'মাইগ্রেশন ডাটাবেস পরিবর্তনের একটি নির্ভরযোগ্য ইতিহাস রাখে, যার ফলে দলের সকল ডেভেলপারের কম্পিউটার ও লাইভ সার্ভারে ডাটাবেসের গঠন সর্বদা সমান থাকে।'
        }
      },
      {
        id: 'mq3',
        kind: 'mcq',
        topic: 'sql: EXISTS short-circuit optimization',
        question: {
          en: 'Why is the EXISTS operator generally more efficient than IN when evaluating subqueries against large datasets?',
          bn: 'বিশাল ডেটাসেটে সাবকোয়ারি মূল্যায়নের সময় IN-এর চেয়ে EXISTS অপারেটর সাধারণত কেন বেশি দক্ষ?'
        },
        options: [
          { en: 'EXISTS short-circuits and terminates subquery evaluation as soon as the first matching row is discovered', bn: 'EXISTS প্রথম মিল পাওয়া মাত্রই সাবকোয়ারি মূল্যায়ন বন্ধ করে তাৎক্ষণিক সত্য প্রদান করে' },
          { en: 'EXISTS automatically creates clustered indexes', bn: 'EXISTS স্বয়ংক্রিয়ভাবে ক্লাস্টার্ড ইনডেক্স তৈরি করে' },
          { en: 'IN cannot handle integer numbers', bn: 'IN পূর্ণসংখ্যা হ্যান্ডেল করতে পারে না' },
          { en: 'EXISTS stores rows in memory cache', bn: 'EXISTS মেমোরি ক্যাশে সারি জমা রাখে' }
        ],
        answer: 0,
        hint: {
          en: 'Finding one match is enough to prove existence.',
          bn: 'অস্তিত্ব প্রমাণের জন্য কেবল একটি মিল খুঁজে পাওয়াই যথেষ্ট।'
        },
        explanation: {
          en: 'The database engine evaluates EXISTS using a semi-join or short-circuit plan: as soon as 1 row matches, evaluation stops immediately without accumulating further results.',
          bn: 'ডাটাবেস ইঞ্জিন শর্ট-সার্কিট পদ্ধতিতে EXISTS মূল্যায়ন করে: যখনই 1 টি সারির মিল পাওয়া যায়, তখনই অনুসন্ধান থেমে যায় এবং বাকি সারি স্ক্যান করার প্রয়োজন হয় না।'
        }
      },
      {
        id: 'mq4',
        kind: 'mcq',
        topic: 'sql: Materialized views',
        question: {
          en: 'What distinguishes a Materialized View from a standard Virtual View?',
          bn: 'একটি সাধারণ ভার্চুয়াল ভিউ থেকে মেটেরিয়ালাইজড ভিউ (Materialized View)-এর মূল পার্থক্য কী?'
        },
        options: [
          { en: 'A materialized view writes its query output physically to disk, requiring manual or scheduled refreshes', bn: 'মেটেরিয়ালাইজড ভিউ তার কোয়ারির ফলাফল বাস্তবে ডিস্কে সেভ করে রাখে এবং সময়মতো রিফ্রেশ করতে হয়' },
          { en: 'A materialized view can never be queried', bn: 'মেটেরিয়ালাইজড ভিউ কখনো কোয়ারি করা যায় না' },
          { en: 'Virtual views only run on Friday', bn: 'ভার্চুয়াল ভিউ শুধু নির্দিষ্ট দিনে চলে' },
          { en: 'A materialized view drops the underlying tables', bn: 'মেটেরিয়ালাইজড ভিউ পেছনের টেবিল মুছে ফেলে' }
        ],
        answer: 0,
        hint: {
          en: 'Physical persistence versus live on-the-fly execution.',
          bn: 'বাস্তবে ডিস্কে সংরক্ষণ বনাম চলমান অবস্থায় চালানো।'
        },
        explanation: {
          en: 'Virtual views execute their query every time they are queried. Materialized views persist the calculated results to disk for lightning-fast reads, trading real-time recency for speed.',
          bn: 'ভার্চুয়াল ভিউ প্রতিবার ডায়নামিকভাবে চলে। অন্যদিকে মেটেরিয়ালাইজড ভিউ ফলাফল ডিস্কে লিখে রাখে, যার ফলে ভারী অ্যানালিটিক্যাল কোয়ারি অত্যন্ত দ্রুত লোড হয়।'
        }
      }
    ]
  }
};
