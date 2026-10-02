import type { Lesson } from '../../../lib/types';

export const joinHallLesson: Lesson = {
  slug: 'the-join-hall',
  tech: 'sql',
  title: {
    en: 'SQL Relational Joins: INNER, LEFT, RIGHT, FULL, Self Joins & UNION Sets',
    bn: 'এসকিউএল রিলেশনাল জয়েন: INNER, LEFT, RIGHT, FULL, সেলফ জয়েন ও UNION সেট'
  },
  summary: {
    en: 'Master multi-table relational data composition across 10 structured topics, from primary keys to Cartesian cross operations. Learn INNER, OUTER, and Self connections alongside ANTI-JOIN patterns and UNION set algebra.',
    bn: 'প্রাইমারি কি থেকে শুরু করে কার্তেসীয় গুণজ পর্যন্ত 10 টি সুসংগঠিত বিষয়ে রিলেশনাল ডেটা সংযোগ আয়ত্ত করুন। জানুন INNER, OUTER ও সেলফ সংযোগের পাশাপাশি অ্যান্টি-জয়েন কৌশল এবং UNION সেট বীজগণিত।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-grand-warehouse',
    title: { en: 'SQL DDL: CREATE, ALTER, DROP, TRUNCATE & Schema Constraints', bn: 'এসকিউএল DDL: CREATE, ALTER, DROP, TRUNCATE ও স্কিমা কনস্ট্রেইন্ট' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Relational Keys: Linking Data and the Cartesian Product', bn: '১. রিলেশনাল কি: ডেটা সংযোগ ও কার্তেসীয় গুণজ (CROSS JOIN)' } },
    {
      type: 'para',
      text: {
        en: 'Relational databases normalize information across multiple tables to avoid data redundancy. Tables are linked using Primary Keys (unique entity identifiers) and Foreign Keys (references pointing back to primary keys in parent tables). Joining two tables without an ON condition produces a CROSS JOIN (Cartesian product), pairing every row of table A with every row of table B (M × N rows).',
        bn: 'রিলেশনাল ডাটাবেসে তথ্যের অনর্থক পুনরাবৃত্তি রোধ করতে ডেটাকে একাধিক টেবিলে ভাগ করে রাখা হয়। টেবিলগুলোকে যুক্ত করা হয় Primary Key (অনন্য আইডেন্টিফায়ার) এবং Foreign Key (যা প্যারেন্ট টেবিলের প্রাইমারি কি-কে রেফার করে)-এর মাধ্যমে। কোনো ON শর্ত ছাড়া দুটি টেবিল জোড়া লাগালে একটি CROSS JOIN (কার্তেসীয় গুণজ) তৈরি হয়, যেখানে টেবিল A-এর প্রতিটি সারি টেবিল B-এর প্রতিটি সারির সাথে যুক্ত হয়ে মোট M × N সংখ্যক সারি তৈরি করে।'
      }
    },
    {
      type: 'visual',
      id: 'database'
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Cartesian Product: 3 sizes * 4 colors = 12 total matrix combinations
SELECT s.size_name, c.color_name
FROM shirt_sizes AS s
CROSS JOIN shirt_colors AS c;

-- Output:
-- Small  | Red
-- Small  | Blue
-- Medium | Red
-- Result: 12 total permutations generated via Cartesian CROSS JOIN`,
      caption: {
        en: 'CROSS JOIN generates every possible combination between two relations.',
        bn: 'CROSS JOIN দুটি টেবিলের সকল উপাদানের সম্ভাব্য সব ধরনের জোড়া তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Table and Column Aliases: Resolving Namespace Ambiguity', bn: '২. টেবিল ও কলাম অ্যালিয়াস: নামের বিভ্রান্তি দূরীকরণ (AS)' } },
    {
      type: 'para',
      text: {
        en: 'When joining multiple tables that share identical column names (such as id, created_at, or status), unqualified references cause ambiguous column name errors. Table Aliases (FROM users AS u) assign short namespace handles, allowing unambiguous qualified column references (u.id vs o.id).',
        bn: 'একাধিক টেবিলে যখন একই নামের কলাম (যেমন id, created_at) থাকে, তখন সরাসরি কলামের নাম লিখলে ডাটাবেসে ambiguous column এরর তৈরি হয়। টেবিল অ্যালিয়াস (যেমন FROM users AS u) টেবিলকে একটি সংক্ষিপ্ত নাম দেয়, যার ফলে u.id নাকি o.id তা সুস্পষ্টভাবে নির্দেশ করা সম্ভব হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Clean table aliasing clarifies ownership across related relations
SELECT 
    u.id AS user_identifier,
    u.email AS user_email,
    o.id AS order_identifier,
    o.total_amount
FROM users AS u
JOIN orders AS o ON u.id = o.user_id;

-- Output:
-- 101 | sakib@domain.com | 9001 | 450.00
-- 102 | nadia@domain.com | 9002 | 1200.00
-- Result: 2 disambiguated relational records returned`,
      caption: {
        en: 'Aliases clarify column provenance across tables that share identical attribute names.',
        bn: 'একই নামের কলাম থাকা টেবিলগুলোর মধ্যে মালিকানা স্পষ্ট করতে অ্যালিয়াস ব্যবহার করা হয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The INNER JOIN: Strictly Matching Intersection Rows', bn: '৩. INNER JOIN: উভয় টেবিলের অভিন্ন ইন্টারসেকশন সারি' } },
    {
      type: 'para',
      text: {
        en: 'An INNER JOIN (the default JOIN) returns only rows where the join predicate in the ON clause evaluates to TRUE in BOTH participating tables. If a customer has no orders, they are excluded; if an order has no customer, it is excluded. It represents the strict mathematical intersection (A ∩ B).',
        bn: 'INNER JOIN (যা শুধু JOIN লিখলেও বোঝায়) কেবল সেই সারিগুলোকে ফেরত দেয় যেগুলোর জন্য ON ক্লজের শর্তটি উভয় টেবিলেই সত্য প্রমাণিত হয়। কোনো গ্রাহক যদি কোনো অর্ডার না করে থাকেন তবে তিনি বাদ পড়বেন; আবার গ্রাহকবিহীন কোনো অর্ডার থাকলে সেটিও বাদ পড়বে। এটি মূলত দুটি সেটের অভিন্ন ছেদবিন্দু (A ∩ B) নির্দেশ করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Retrieve customers who have placed at least one verified order
SELECT 
    c.customer_name,
    o.order_id,
    o.order_date
FROM customers AS c
INNER JOIN orders AS o ON c.customer_id = o.customer_id;

-- Output:
-- Farhan Ahmed | 501 | 2026-09-20
-- Tasnim Noor  | 502 | 2026-09-22
-- Result: Strictly matching pairs where customer_id exists in both relations`,
      caption: {
        en: 'INNER JOIN filters out any row from either table that lacks a corresponding partner.',
        bn: 'INNER JOIN উভয় টেবিলের সেইসব সারি বাদ দিয়ে দেয় যাদের অপর টেবিলে কোনো মিল নেই।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The LEFT JOIN (LEFT OUTER JOIN): Preserving Parent Records', bn: '৪. LEFT JOIN: বাম টেবিলের সমস্ত মূল রেকর্ড সংরক্ষণ' } },
    {
      type: 'para',
      text: {
        en: 'A LEFT JOIN returns ALL rows from the left table, plus matched rows from the right table. If a left row has no matching partner in the right table, all columns from the right table evaluate to NULL. This is essential for reporting on entities that may not yet have associated activity (e.g. customers with 0 orders).',
        bn: 'LEFT JOIN বাম টেবিলের প্রতিটি সারি নিশ্চিতভাবে ফেরত দেয়, এবং ডান টেবিল থেকে শুধু মিল থাকা ডেটাগুলো সাথে যুক্ত করে। বাম টেবিলের কোনো সারির যদি ডান টেবিলে কোনো মিল না থাকে, তবে ডান টেবিলের সব কলামে NULL বসে যায়। কোনো কার্যক্রম এখনও শুরু করেনি এমন ডেটা দেখতে (যেমন 0 টি অর্ডার করা গ্রাহক) এটি অপরিহার্য।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- List ALL registered customers, including those with zero orders
SELECT 
    c.customer_id,
    c.customer_name,
    o.order_id,
    o.total_amount
FROM customers AS c
LEFT JOIN orders AS o ON c.customer_id = o.customer_id;

-- Output:
-- 101 | Sakib Hasan   | 8801 | 5000.00
-- 102 | Fahim Muntasir| NULL | NULL
-- Result: Unmatched left customer 102 retained with NULL right attributes`,
      caption: {
        en: 'LEFT JOIN guarantees no records from the left relation are discarded.',
        bn: 'LEFT JOIN নিশ্চিত করে যে বাম টেবিলের কোনো তথ্যই বাদ পড়বে না।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The RIGHT JOIN (RIGHT OUTER JOIN): Preserving Right Records', bn: '৫. RIGHT JOIN: ডান টেবিলের সমস্ত রেকর্ড সংরক্ষণ' } },
    {
      type: 'para',
      text: {
        en: 'A RIGHT JOIN operates as the exact inverse of a LEFT JOIN: it returns ALL rows from the right table, filling with NULLs where no matching left row exists. In professional SQL engineering, developers almost always rewrite RIGHT JOINs as LEFT JOINs by swapping table positions, keeping query reading direction consistent from left to right.',
        bn: 'RIGHT JOIN হলো LEFT JOIN-এর ঠিক উল্টো রূপ: এটি ডান টেবিলের সকল সারিকে সংরক্ষণ করে এবং বাম টেবিলে কোনো মিল না থাকলে সেখানে NULL বসিয়ে দেয়। বাস্তব সফটওয়্যার ডেভেলপমেন্টে কোড পড়া সহজ রাখতে টেবিলের অবস্থান অদলবদল করে RIGHT JOIN-কে প্রায় সব সময় LEFT JOIN হিসেবেই লেখা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Preserving all order records even if customer foreign key was orphaned
SELECT 
    c.customer_name,
    o.order_id,
    o.total_amount
FROM customers AS c
RIGHT JOIN orders AS o ON c.customer_id = o.customer_id;

-- Output:
-- Sakib Hasan | 8801 | 5000.00
-- NULL        | 8899 | 120.00
-- Result: Orphaned order 8899 preserved with NULL customer details`,
      caption: {
        en: 'RIGHT JOIN preserves every row from the right table, pairing unmatched left fields with NULL.',
        bn: 'RIGHT JOIN ডান টেবিলের সব ডেটা রাখে এবং অমিল বাম কলামে NULL বসায়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The FULL OUTER JOIN: Retaining Both Sides', bn: '৬. FULL OUTER JOIN: উভয় পাশের অমিল ডেটা সংরক্ষণ' } },
    {
      type: 'para',
      text: {
        en: 'A FULL OUTER JOIN combines the results of both LEFT JOIN and RIGHT JOIN. It returns all matched rows, plus all unmatched rows from the left table (with NULLs on the right) and all unmatched rows from the right table (with NULLs on the left). It represents the complete mathematical union with alignment (A ∪ B).',
        bn: 'FULL OUTER JOIN মূলত LEFT JOIN এবং RIGHT JOIN উভয়ের ফলাফলকে একসাথে জুড়ে দেয়। এটি উভয় টেবিলের মিল থাকা সারিগুলো দেখায়, পাশাপাশি বাম টেবিলের অমিল ডেটা (ডানে NULL সহ) এবং ডান টেবিলের অমিল ডেটাও (বামে NULL সহ) এক সাথে প্রদর্শন করে। এটি পূর্ণ রিলেশনাল সমন্বয় (A ∪ B) তৈরি করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Full reconciliation between bank transaction feed and ledger records
SELECT 
    b.bank_trans_id,
    b.amount AS bank_amount,
    l.ledger_id,
    l.amount AS ledger_amount
FROM bank_feed AS b
FULL OUTER JOIN ledger_entries AS l ON b.reference_num = l.reference_num;

-- Output:
-- TX-101 | 500.00 | LED-901 | 500.00
-- TX-102 | 300.00 | NULL    | NULL
-- NULL   | NULL   | LED-905 | 750.00
-- Result: 3 reconciled audit rows exposing both missing bank and ledger entries`,
      caption: {
        en: 'FULL OUTER JOIN uncovers data discrepancies between two decoupled systems.',
        bn: 'FULL OUTER JOIN দুটি আলাদা সিস্টেমের মাঝে অমিল থাকা ডেটা অডিট করতে ব্যবহৃত হয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. The Self Join: Hierarchies and Organisational Trees', bn: '৭. সেলফ জয়েন (Self Join): একই টেবিলের ভেতরে হায়ারার্কি' } },
    {
      type: 'para',
      text: {
        en: 'A Self Join joins a table to itself using distinct aliases for each instance. This is the foundational relational pattern for modeling recursive hierarchies, such as employee-manager relationships where the manager_id column in the employee table references employee_id in the exact same table.',
        bn: 'সেলফ জয়েন হলো ভিন্ন ভিন্ন অ্যালিয়াস ব্যবহার করে একটি টেবিলকে নিজের সাথেই জোড়া লাগানো। এটি প্রতিষ্ঠানের হায়ারার্কি বা ট্রি স্ট্রাকচার তৈরি করতে ব্যবহৃত হয়, যেমন কর্মচারী-ম্যানেজার সম্পর্ক যেখানে একই টেবিলের manager_id কলামটি সেই টেবিলেরই employee_id-কে নির্দেশ করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Pair every employee with their direct reporting manager
SELECT 
    emp.full_name AS employee_name,
    COALESCE(mgr.full_name, 'TOP EXECUTIVE (NO MANAGER)') AS reports_to
FROM staff AS emp
LEFT JOIN staff AS mgr ON emp.manager_id = mgr.employee_id;

-- Output:
-- Arifur Rahman | Nadia Sultana
-- Nadia Sultana | TOP EXECUTIVE (NO MANAGER)
-- Result: Hierarchical tree flattened into parent-child reporting rows`,
      caption: {
        en: 'Self joins traverse recursive parent-child pointers stored within a single table.',
        bn: 'সেলফ জয়েন একই টেবিলের ভেতরে প্যারেন্ট-চাইল্ড পয়েন্টার খুঁজে হায়ারার্কি তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Anti-Joins: Finding Missing Records with IS NULL', bn: '৮. অ্যান্টি-জয়েন: IS NULL দিয়ে অনুপস্থিত রেকর্ড শনাক্তকরণ' } },
    {
      type: 'para',
      text: {
        en: 'An Anti-Join finds records in table A that have ZERO matching records in table B. It is constructed using a LEFT JOIN coupled with a WHERE right_table.primary_key IS NULL filter. Query planners optimize anti-joins with efficient hash anti-join algorithms, outperforming NOT IN subqueries when NULLs exist.',
        bn: 'অ্যান্টি-জয়েন টেবিল A-এর এমন সব রেকর্ড খুঁজে বের করে যাদের টেবিল B-তে কোনো অস্তিত্ব নেই। এটি তৈরি করা হয় একটি LEFT JOIN দিয়ে এবং সাথে WHERE right_table.id IS NULL ফিল্টার বসিয়ে। অপ্টিমাইজাররা এটিকে অত্যন্ত দ্রুতগতির হ্যাশ অ্যান্টি-জয়েনে রূপান্তর করে, যা সাধারণ NOT IN সাব-কোয়ারির চেয়ে অনেক বেশি নিরাপদ ও দ্রুত।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Find customers who have NEVER placed any order (churn risk / unprimed accounts)
SELECT 
    c.customer_id,
    c.customer_name,
    c.email
FROM customers AS c
LEFT JOIN orders AS o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL; -- Anti-join predicate!

-- Output:
-- 305 | Masud Rana | masud@domain.com
-- 308 | Shila Akter| shila@domain.com
-- Result: 2 customers identified with zero historical order engagement`,
      caption: {
        en: 'The LEFT JOIN + WHERE ... IS NULL pattern efficiently retrieves non-existent relationships.',
        bn: 'LEFT JOIN + WHERE ... IS NULL প্যাটার্ন অনুপস্থিত সম্পর্কগুলো নির্ভুলভাবে খুঁজে বের করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Multi-Table Join Topologies', bn: '৯. বহু-টেবিল জয়েন টপোলজি: তিন বা ততোধিক টেবিল সংযোগ' } },
    {
      type: 'para',
      text: {
        en: 'Real-world business queries link three, four, or more tables together across relational pathways. For example, joining users to orders, then orders to order_items, and order_items to products. Query optimizers automatically reorder inner joins to minimize intermediate row volume, but left joins must be chained carefully.',
        bn: 'বাস্তব সফটওয়্যারে তিন বা ততোধিক টেবিল চেইনের মতো যুক্ত থাকে। যেমন গ্রাহক থেকে অর্ডার, অর্ডার থেকে অর্ডার আইটেম, এবং সেখান থেকে প্রডাক্ট টেবিল। কোয়ারি অপ্টিমাইজার ইন্টারমিডিয়েট সারির সংখ্যা কমাতে ইনার জয়েনের ক্রম নিজে নিজে ঠিক করে নেয়, তবে লেফট জয়েন ব্যবহারের সময় ক্রমের দিকে সতর্ক নজর দিতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 3-table join pipeline linking customers to their purchased product names
SELECT 
    c.customer_name,
    o.order_id,
    p.product_name,
    oi.quantity
FROM customers AS c
INNER JOIN orders AS o ON c.customer_id = o.customer_id
INNER JOIN order_items AS oi ON o.order_id = oi.order_id
INNER JOIN products AS p ON oi.product_id = p.product_id;

-- Output:
-- Tanvir Hossain | 7001 | Mechanical Keyboard | 1
-- Tanvir Hossain | 7001 | USB-C Hub           | 2
-- Result: 2 normalized product purchase rows joined across 4 relational hops`,
      caption: {
        en: 'Relational paths chain foreign keys across multiple intermediate junction tables.',
        bn: 'রিলেশনাল পাথগুলো ফরেন কি-এর মাধ্যমে একাধিক মধ্যবর্তী জংশন টেবিল পার হয়ে ডেটা আনে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Set Operations: UNION vs UNION ALL', bn: '১০. সেট অপারেশন: UNION বনাম UNION ALL' } },
    {
      type: 'para',
      text: {
        en: 'While JOINs combine tables horizontally by adding columns, Set Operations combine queries vertically by stacking rows. UNION combines results from two queries and performs an expensive deduplication sort to purge duplicate rows. UNION ALL stacks rows directly without checking for duplicates, executing significantly faster.',
        bn: 'জয়েন যেখানে নতুন নতুন কলাম যোগ করে পাশাপাশি অনুভূমিকভাবে টেবিল জোড়া লাগায়, সেখানে সেট অপারেশন সারিগুলোকে একের নিচে আরেকটিকে উলম্বভাবে সাজায়। UNION দুটি কোয়ারির ফলাফল মিলিয়ে ব্যয়বহুল সর্টিং চালিয়ে ডুপ্লিকেট সারি মুছে দেয়। আর UNION ALL কোনো ডুপ্লিকেট যাচাই না করে সরাসরি ডেটা জোড়া লাগায়, ফলে এটি বহুগুণ দ্রুত চলে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. UNION: Purges duplicate entries across archive and live ledgers
SELECT customer_id, email FROM live_customers
UNION
SELECT customer_id, email FROM archived_customers;

-- 2. UNION ALL: Maximum performance when sets are known to be disjoint
SELECT transaction_id, amount, 'ONLINE' AS channel FROM online_sales
UNION ALL
SELECT transaction_id, amount, 'POS' AS channel FROM store_sales;

-- Output:
-- 101 | online@store.com
-- 102 | retail@store.com
-- TX-1 | 500.00 | ONLINE
-- TX-2 | 250.00 | POS
-- Result: Fast vertical union concatenation preserving channel provenance`,
      caption: {
        en: 'Prefer UNION ALL for raw performance unless deduplication is an explicit requirement.',
        bn: 'ডুপ্লিকেট ছাঁটাই একান্ত প্রয়োজন না হলে সর্বোচ্চ গতির জন্য সর্বদা UNION ALL ব্যবহার করুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'sql-join-ex1',
      kind: 'predict',
      topic: 'sql: UNION ALL vs UNION duplicate removal',
      question: {
        en: 'Between UNION and UNION ALL, which operator executes faster because it skips the duplicate elimination sort pass?',
        bn: 'UNION এবং UNION ALL-এর মধ্যে কোনটি ডুপ্লিকেট বাদ দেওয়ার সর্টিং এড়িয়ে যায় বলে দ্রুত নির্বাহিত হয়?'
      },
      code: `/* SQL set operations performance comparison */
/* query1 UNION ALL query2 vs query1 UNION query2 */`,
      answer: 'UNION ALL',
      accept: ['UNION ALL', 'union all', 'unionall'],
      hint: {
        en: 'It includes ALL rows without sorting.',
        bn: 'এটি কোনো সর্টিং ছাড়াই সব সারি অন্তর্ভুক্ত করে।'
      },
      explanation: {
        en: 'UNION ALL directly concatenates the result streams without performing an expensive sort to detect duplicates, making it substantially faster than UNION.',
        bn: 'UNION ALL কোনো ব্যয়বহুল সর্ট ছাড়াই সরাসরি ফলাফলগুলোকে একের নিচে আরেকটিকে বসিয়ে দেয়, ফলে এটি UNION-এর চেয়ে অনেক বেশি দ্রুত কাজ করে।'
      }
    },
    {
      id: 'sql-join-ex2',
      kind: 'mcq',
      topic: 'sql: Left join unmatched right columns',
      question: {
        en: 'In a LEFT JOIN, what value appears in the right table columns for rows that have no match in the right table?',
        bn: 'LEFT JOIN-এ যেসব সারির ডান টেবিলে কোনো মিল নেই, তাদের ডান টেবিলের কলামগুলোতে কী মান বসে?'
      },
      options: [
        { en: 'NULL', bn: 'NULL' },
        { en: '0 (zero)', bn: '0 (শূন্য)' },
        { en: 'An empty string ""', bn: 'খালি স্ট্রিং ""' },
        { en: 'An exception is raised', bn: 'এক্সেপশন ঘটে' }
      ],
      answer: 0,
      hint: {
        en: 'Missing relational references are represented by NULL.',
        bn: 'অনুপস্থিত রিলেশনাল তথ্যে NULL বসে।'
      },
      explanation: {
        en: 'When a left record finds no corresponding partner in the right table, all attributes projected from the right table evaluate to NULL.',
        bn: 'বাম টেবিলের রেকর্ডের বিপরীতে ডান টেবিলে কোনো মিল না থাকলে ডান টেবিল থেকে আসা সকল কলামের মান স্বয়ংক্রিয়ভাবে NULL হয়।'
      }
    },
    {
      id: 'sql-join-ex3',
      kind: 'mcq',
      topic: 'sql: Anti-join construction',
      question: {
        en: 'What combination of clauses produces an Anti-Join to find rows in table A that do not exist in table B?',
        bn: 'টেবিল A-এর যেসব তথ্য টেবিল B-তে নেই তা বের করতে (Anti-Join) কোন ক্লজ দুটির সমন্বয় করতে হয়?'
      },
      options: [
        { en: 'LEFT JOIN table_b ON a.id = b.a_id WHERE b.id IS NULL', bn: 'LEFT JOIN table_b ON a.id = b.a_id WHERE b.id IS NULL' },
        { en: 'INNER JOIN table_b ON a.id = b.a_id', bn: 'INNER JOIN table_b ON a.id = b.a_id' },
        { en: 'CROSS JOIN table_b', bn: 'CROSS JOIN table_b' },
        { en: 'RIGHT JOIN table_b WHERE a.id = 1', bn: 'RIGHT JOIN table_b WHERE a.id = 1' }
      ],
      answer: 0,
      hint: {
        en: 'Preserve with LEFT JOIN, then filter where the foreign match IS NULL.',
        bn: 'LEFT JOIN দিয়ে রেখে দিন, তারপর যেখানে ডান পাশ IS NULL তা ফিল্টার করুন।'
      },
      explanation: {
        en: 'An anti-join uses a LEFT JOIN to keep all records from table A, and then filters with WHERE b.id IS NULL to retain only rows with zero matches in table B.',
        bn: 'অ্যান্টি-জয়েনে LEFT JOIN দিয়ে বাম টেবিলের সব তথ্য আনা হয়, এবং WHERE b.id IS NULL দিয়ে শুধু অমিল থাকা সারিগুলোকে আলাদা করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'sql-joins-quiz',
    title: { en: 'SQL Joins & Sets Quiz', bn: 'এসকিউএল জয়েন ও সেট কুইজ' },
    questions: [
      {
        id: 'jq1',
        kind: 'mcq',
        topic: 'sql: Self join application',
        question: {
          en: 'Which organizational schema structure is typically queried using a Self Join?',
          bn: 'কোন ধরনের সাংগঠনিক ডেটা স্ট্রাকচার কুয়েরি করার জন্য সাধারণত সেলফ জয়েন (Self Join) ব্যবহৃত হয়?'
        },
        options: [
          { en: 'Employee and manager hierarchies stored within the same staff table', bn: 'একই স্টাফ টেবিলে সংরক্ষিত কর্মচারী ও তাদের পরিচালকদের (ম্যানেজার) হায়ারার্কি' },
          { en: 'Two separate tables in different databases', bn: 'ভিন্ন দুটি ডাটাবেসের দুটি আলাদা টেবিল' },
          { en: 'JSON document arrays', bn: 'JSON ডকুমেন্ট অ্যারে' },
          { en: 'Redis cache keys', bn: 'রেডিস ক্যাশ কি' }
        ],
        answer: 0,
        hint: {
          en: 'A table joined to itself via parent pointers.',
          bn: 'প্যারেন্ট পয়েন্টার দিয়ে একই টেবিলকে নিজের সাথে জোড়া লাগানো।'
        },
        explanation: {
          en: 'A Self Join connects a table to itself using two distinct aliases, allowing hierarchical relationships (such as employee.manager_id referencing employee.id) to be resolved.',
          bn: 'সেলফ জয়েন দুটি আলাদা অ্যালিয়াস দিয়ে একই টেবিলকে নিজের সাথে যুক্ত করে, যার মাধ্যমে কর্মচারী ও ম্যানেজারের মতো হায়ারার্কিকাল সম্পর্ক সহজে প্রকাশ করা যায়।'
        }
      },
      {
        id: 'jq2',
        kind: 'mcq',
        topic: 'sql: Full outer join result',
        question: {
          en: 'What rows does a FULL OUTER JOIN return?',
          bn: 'FULL OUTER JOIN কোন কোন সারি ফেরত দেয়?'
        },
        options: [
          { en: 'All matched rows, plus all unmatched rows from both left and right tables (filled with NULLs where missing)', bn: 'উভয় টেবিলের মিল থাকা সকল সারি, এবং উভয় পাশের অমিল থাকা সারিগুলোও (যেখানে মান নেই সেখানে NULL সহ)' },
          { en: 'Only rows that match in both tables', bn: 'কেবল উভয় টেবিলে মিল থাকা সারি' },
          { en: 'Only rows that have no matches anywhere', bn: 'যেগুলোর কোথাও কোনো মিল নেই শুধু সেগুলো' },
          { en: 'The Cartesian product of both tables', bn: 'উভয় টেবিলের কার্তেসীয় গুণজ' }
        ],
        answer: 0,
        hint: {
          en: 'It represents the complete union of both tables with alignment.',
          bn: 'এটি উভয় টেবিলের মিল ও অমিল সব ডেটাকে একত্র করে।'
        },
        explanation: {
          en: 'A FULL OUTER JOIN retains all matching rows and preserves non-matching rows from both sides, replacing missing partner values with NULL.',
          bn: 'FULL OUTER JOIN মিল থাকা সারিগুলোর পাশাপাশি দুই পাশের অমিল সারিগুলোকেও ধরে রাখে এবং অপর পাশের খালি কলামে NULL বসায়।'
        }
      },
      {
        id: 'jq3',
        kind: 'mcq',
        topic: 'sql: UNION vs UNION ALL performance',
        question: {
          en: 'Why is UNION ALL significantly faster than bare UNION when combining result sets?',
          bn: 'ফলাফল সেট সংযুক্ত করার সময় সাধারণ UNION-এর চেয়ে UNION ALL কেন উল্লেখযোগ্যভাবে দ্রুত কাজ করে?'
        },
        options: [
          { en: 'UNION ALL appends sets directly, whereas UNION executes an expensive sort or hash to eliminate duplicates', bn: 'UNION ALL সরাসরি ডেটা যুক্ত করে, যেখানে UNION ডুপ্লিকেট দূর করতে ব্যয়বহুল সর্ট বা হ্যাশিং চালায়' },
          { en: 'UNION ALL compresses strings', bn: 'UNION ALL স্ট্রিং কম্প্রেস করে' },
          { en: 'UNION ALL only works on numbers', bn: 'UNION ALL কেবল সংখ্যার ক্ষেত্রে প্রযোজ্য' },
          { en: 'UNION requires secondary indexes on all columns', bn: 'UNION-এর জন্য সব কলামে সেকেন্ডারি ইনডেক্স আবশ্যক' }
        ],
        answer: 0,
        hint: {
          en: 'Deduplication requires checking every row against every other row.',
          bn: 'ডুপ্লিকেট দূর করতে প্রতিটি সারিকে অন্য সারির সাথে তুলনা করতে হয়।'
        },
        explanation: {
          en: 'UNION performs implicit deduplication, which forces the database engine to sort or build a hash table over the combined result set. UNION ALL simply streams and concatenates rows without deduplication overhead.',
          bn: 'UNION স্বয়ংক্রিয়ভাবে ডুপ্লিকেট ছাঁটাই করে, যার ফলে ডাটাবেসকে পুরো ফলাফলের ওপর সর্টিং বা হ্যাশিং চালাতে হয়। আর UNION ALL কোনো বাড়তি যাচাই ছাড়াই সারিগুলো একত্র করে দ্রুত আউটপুট দেয়।'
        }
      },
      {
        id: 'jq4',
        kind: 'mcq',
        topic: 'sql: Preserving parent records with LEFT JOIN',
        question: {
          en: 'Which join type ensures that every parent entity remains in the result even if it has no associated child rows?',
          bn: 'কোন ধরনের জয়েন নিশ্চিত করে যে কোনো সম্পর্কিত চাইল্ড সারি না থাকলেও প্রতিটি প্যারেন্ট তথ্য ফলাফলে অক্ষুণ্ণ থাকবে?'
        },
        options: [
          { en: 'LEFT JOIN (LEFT OUTER JOIN)', bn: 'LEFT JOIN (LEFT OUTER JOIN)' },
          { en: 'INNER JOIN', bn: 'INNER JOIN' },
          { en: 'CROSS JOIN', bn: 'CROSS JOIN' },
          { en: 'NATURAL JOIN', bn: 'NATURAL JOIN' }
        ],
        answer: 0,
        hint: {
          en: 'Left-side records are preserved.',
          bn: 'বাম পাশের রেকর্ডগুলো সংরক্ষিত থাকে।'
        },
        explanation: {
          en: 'LEFT JOIN preserves every record from the left table regardless of matches in the right table, populating right-table fields with NULL when relations are absent.',
          bn: 'LEFT JOIN ডান টেবিলে কোনো মিল না থাকলেও বাম টেবিলের প্রতিটি রেকর্ড নিশ্চিতভাবে ফলাফলে রাখে এবং অমিল থাকা ডান টেবিলের কলামগুলোতে NULL বসিয়ে দেয়।'
        }
      }
    ]
  }
};
