import type { Lesson } from '../../../lib/types';

export const ormShadowLesson: Lesson = {
  slug: 'the-orm-shadow',
  tech: 'sql',
  title: {
    en: 'SQL Security: Injection Defense, Prepared Statements & ORM Boundaries',
    bn: 'এসকিউএল সিকিউরিটি: ইনজেকশন প্রতিরোধ, প্রিপেয়ার্ড স্টেটমেন্ট ও ORM সীমা'
  },
  summary: {
    en: 'Master database security and ORM architecture across 10 structured topics, from SQL injection defense to connection pooling. Learn prepared statements, N+1 query elimination, and least-privilege security policies.',
    bn: 'এসকিউএল ইনজেকশন প্রতিরোধ থেকে শুরু করে কানেকশন পুলিং পর্যন্ত 10 টি সুসংগঠিত বিষয়ে ডাটাবেস সিকিউরিটি ও ORM আর্কিটেকচার আয়ত্ত করুন। জানুন প্রিপেয়ার্ড স্টেটমেন্ট, N+1 কোয়ারি সমস্যার সমাধান এবং নূন্যতম প্রিভিলেজ নীতি।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Threat: SQL Injection via String Concatenation', bn: '১. হুমকি: স্ট্রিং কনক্যাটেনেশনের মাধ্যমে এসকিউএল ইনজেকশন' } },
    {
      type: 'para',
      text: {
        en: 'SQL Injection occurs when untrusted user input is directly concatenated into a dynamic SQL string. Attackers inject payload fragments (such as " OR "1"="1) that alter the logical structure of the query parser. This allows unauthorized data exfiltration, authentication bypass, or destructive table dropping.',
        bn: 'এসকিউএল ইনজেকশন ঘটে যখন কোনো ব্যবহারকারীর অনিরাপদ ইনপুট সরাসরি এসকিউএল স্ট্রিংয়ের সাথে জুড়ে দেওয়া হয়। আক্রমণকারীরা এমন পে-লোড (যেমন " OR "1"="1) প্রবেশ করায় যা কুয়েরির আসল লজিকটি বদলে ফেলে। এর ফলে পাসওয়ার্ড ছাড়া লগইন করা, গোপন তথ্য চুরি কিংবা পুরো ডাটাবেস মুছে ফেলার মতো বিপর্যয় ঘটতে পারে।'
      }
    },
    {
      type: 'visual',
      id: 'database'
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- ❌ THE VULNERABLE CODE (String Concatenation Anti-Pattern):
-- query = "SELECT * FROM users WHERE user = '" + input_user + "' AND pass = '" + input_pass + "';"

-- Attacker enters username: admin' --
-- Resulting parsed SQL executed by engine:
SELECT * FROM users WHERE user = 'admin' --' AND pass = 'secret';

-- The double hyphen (--) comments out the password verification entirely!
-- Attacker logs in instantly as 'admin' without knowing the password!

-- Output:
-- 1 | admin | admin@corp.net | SUPERUSER_PRIVILEGES
-- Result: Catastrophic authentication bypass via SQL injection`,
      caption: {
        en: 'String concatenation treats input as executable code, creating critical injection vulnerabilities.',
        bn: 'স্ট্রিং কনক্যাটেনেশন ব্যবহারকারীর ইনপুটকে কোড হিসেবে চালিয়ে ভয়াবহ নিরাপত্তা ঝুঁকি তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Definitive Defense: Parameterized Queries', bn: '২. নিশ্চিত সুরক্ষা: প্যারামিটারাইজড কুয়েরি ও বাইন্ড প্যারামিটার' } },
    {
      type: 'para',
      text: {
        en: 'The definitive defense against SQL injection is Parameterized Queries using bind placeholders (? or $1). User inputs are sent separately through binary protocols rather than merged into the SQL text. The database engine treats parameters strictly as data values, rendering code injection syntactically impossible.',
        bn: 'এসকিউএল ইনজেকশন প্রতিরোধের একমাত্র শতভাগ কার্যকর উপায় হলো প্লেসহোল্ডার (? বা $1) সহ Parameterized Query ব্যবহার করা। ব্যবহারকারীর ইনপুটকে সরাসরি কুয়েরিতে না বসিয়ে আলাদা প্রোটোকলে ডাটাবেসে পাঠানো হয়। ডাটাবেস ইঞ্জিন ইনপুটটিকে কেবলই সাধারণ ডেটা হিসেবে দেখে, ফলে কোনো ক্ষতিকর কোড এক্সিকিউট হওয়া অসম্ভব হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- ✅ SECURE: Query text contains bind placeholder ($1)
-- Parameter is transmitted out-of-band as pure data!

-- Node.js / PostgreSQL Parameterized Pattern:
-- db.query('SELECT * FROM users WHERE email = $1', [user_supplied_email]);

-- Even if user enters: admin' OR '1'='1
-- Engine looks for a literal user with that exact bizarre email string!
-- Result: 0 matches found; zero security risk.

SELECT user_id, email, is_active
FROM users
WHERE email = 'nadia@corp.com'; -- Bound cleanly as scalar string literal

-- Output:
-- 102 | nadia@corp.com | 1
-- Result: Query executed safely with complete injection immunity`,
      caption: {
        en: 'Parameterized queries separate code structure from data literals across all drivers.',
        bn: 'প্যারামিটারাইজড কুয়েরি কোডের কাঠামোর সাথে ডেটাকে সম্পূর্ণ আলাদা রেখে নিরাপত্তা নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Prepared Statements: Separate Compilation and Execution', bn: '৩. প্রিপেয়ার্ড স্টেটমেন্ট: কম্পাইলেশন ও এক্সিকিউশনের পৃথকীকরণ' } },
    {
      type: 'para',
      text: {
        en: 'A Prepared Statement splits query execution into two phases: PREPARE parses, optimizes, and compiles the query execution plan once; EXECUTE runs the precompiled plan repeatedly with varying parameters. This provides both injection immunity and reduced query planning CPU overhead.',
        bn: 'Prepared Statement কুয়েরি চালানোকে দুটি ধাপে ভাগ করে: PREPARE ধাপে কুয়েরি পার্স ও কম্পাইল হয়ে মেমোরিতে প্রস্তুত থাকে; আর EXECUTE ধাপে সেই প্রস্তুত প্ল্যানে বিভিন্ন প্যারামিটার বসিয়ে দ্রুত চালানো হয়। এটি একই সাথে ইনজেকশন থেকে সুরক্ষা দেয় এবং প্রতিবার কুয়েরি কম্পাইল করার সিপিইউ খরচ বাঁচায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Prepare and compile query execution plan once:
PREPARE fetch_user_balance (INT) AS
SELECT account_id, owner_name, balance_usd
FROM bank_accounts
WHERE account_id = $1;

-- 2. Execute plan multiple times with high throughput:
EXECUTE fetch_user_balance(101);
EXECUTE fetch_user_balance(202);

-- Output:
-- 101 | Sakib Hasan   | 4500.00
-- 202 | Nadia Sultana | 9200.00
-- Result: Sub-millisecond execution bypassing query parser and optimizer passes`,
      caption: {
        en: 'Prepared statements cache execution plans, boosting performance for high-frequency queries.',
        bn: 'প্রিপেয়ার্ড স্টেটমেন্ট এক্সিকিউশন প্ল্যান ক্যাশ করে ঘন ঘন চলা কুয়েরির গতি বহুগুণ বাড়ায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Server-Side Logic: Stored Procedures (CREATE PROCEDURE)', bn: '৪. সার্ভার সাইড লজিক: স্টোর্ড প্রসিডিউর (CREATE PROCEDURE)' } },
    {
      type: 'para',
      text: {
        en: 'A Stored Procedure bundles multi-step procedural logic, conditional branches, and transactions directly inside the database engine. Clients invoke procedures with CALL or EXEC, eliminating round-trip network network latency for multi-statement workflows.',
        bn: 'Stored Procedure একাধিক কাজের ধাপ, শর্ত ও ট্রানজ্যাকশনকে সরাসরি ডাটাবেসের ভেতরেই একটি ফাংশন হিসেবে সংরক্ষণ করে রাখে। ক্লায়েন্ট অ্যাপ্লিকেশন CALL বা EXEC দিয়ে এটি চালায়, যার ফলে বারবার নেটওয়ার্কে তথ্য আদান-প্রদান না করেই ডাটাবেসের ভেতরেই সম্পূর্ণ কাজটি অত্যন্ত দ্রুত গতিতে সম্পন্ন হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Defining a stored procedure to transfer money atomically
CREATE PROCEDURE transfer_funds(
    IN sender_id INT,
    IN receiver_id INT,
    IN transfer_amount DECIMAL(10, 2)
)
BEGIN
    START TRANSACTION;
    UPDATE bank_accounts SET balance = balance - transfer_amount WHERE account_id = sender_id;
    UPDATE bank_accounts SET balance = balance + transfer_amount WHERE account_id = receiver_id;
    COMMIT;
END;

-- Invoking procedure from application:
CALL transfer_funds(101, 202, 500.00);

-- Output:
-- Procedure transfer_funds executed in 0.008s.
-- Result: Atomic multi-step transaction executed inside engine in a single network round-trip`,
      caption: {
        en: 'Stored procedures execute multi-statement business transactions within the database server.',
        bn: 'স্টোর্ড প্রসিডিউর নেটওয়ার্ক লেটেন্সি কমিয়ে সরাসরি সার্ভারেই জটিল কাজ শেষ করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Object-Relational Mappers: Active Record vs Data Mapper', bn: '৫. অবজেক্ট-রিলেশনাল ম্যাপার (ORM): অ্যাক্টিভ রেকর্ড বনাম ডেটা ম্যাপার' } },
    {
      type: 'para',
      text: {
        en: 'An Object-Relational Mapper (ORM) translates relational table rows into object-oriented classes. In Active Record (Django ORM, Prisma, Rails), models wrap rows with persistence methods (user.save()). In Data Mapper (Hibernate, SQLAlchemy, TypeORM), domain objects remain decoupled from database persistence layers.',
        bn: 'Object-Relational Mapper (ORM) ডাটাবেসের টেবিলগুলোকে প্রোগ্রামিং ভাষার ক্লাসে রূপান্তর করে। Active Record প্যাটার্নে (যেমন Django ORM, Prisma) প্রতিটি মডেল নিজেই ডাটাবেসের রো এবং তাতে save() মেথড থাকে। আর Data Mapper প্যাটার্নে (যেমন SQLAlchemy, Hibernate) ডোমেন অবজেক্টগুলো ডাটাবেস লজিক থেকে সম্পূর্ণ মুক্ত থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Active Record Style: Model knows how to save itself
// const user = await User.findById(101);
// user.balance += 500;
// await user.save();

// Data Mapper Style: Repository coordinates persistence
// const user = await userRepository.findOne({ where: { id: 101 } });
// user.balance += 500;
// await userRepository.save(user);

// Output:
// SELECT * FROM users WHERE id = 101 LIMIT 1;
// UPDATE users SET balance = 5500 WHERE id = 101;
// Result: Typed domain abstractions translated automatically into underlying SQL statements`,
      caption: {
        en: 'ORMs map database tables to object classes, abstracting SQL syntax across languages.',
        bn: 'ORM ডাটাবেস টেবিলকে অবজেক্ট ক্লাসে রূপান্তর করে কোড লেখাকে অনেক সহজ করে দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The Impedance Mismatch: Object Graphs vs Relational Tuples', bn: '৬. অবজেক্ট-রিলেশনাল মিসম্যাচ: গ্রাফ বনাম রিলেশনাল টাপল' } },
    {
      type: 'para',
      text: {
        en: 'The Object-Relational Impedance Mismatch refers to fundamental conceptual friction between object paradigms (encapsulation, polymorphous inheritance, bidirectional graph pointers) and relational paradigms (normalized tables, foreign keys, declarative set operations). Misunderstanding this boundary leads to severe architectural debt.',
        bn: 'অবজেক্ট-রিলেশনাল মিসম্যাচ বলতে অবজেক্ট ওরিয়েন্টেড জগৎ (ইনহেরিট্যান্স, পলিমরফিজম, পয়েন্টার গ্রাফ) এবং রিলেশনাল জগতের (নরমালাইজড টেবিল, ফরেন কি, ডিক্লারেটিভ সেট) মধ্যকার ধারণাগত পার্থক্যকে বোঝায়। এই সীমানা ঠিকমতো না বুঝলে অ্যাপ্লিকেশন অত্যন্ত ধীরগতির হয়ে পড়ে এবং মেমোরির অপচয় ঘটে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- The Relational Truth: Fast Set Operations (O(1) bulk aggregation)
-- Relational engine sums 1,000,000 orders in 12ms:
SELECT SUM(total_amount) FROM orders WHERE customer_id = 101;

-- ❌ The Naive ORM Mistake: Loading 1,000,000 OOP Objects into RAM!
-- customer.orders.forEach(o => total += o.amount);
-- Allocates 500 MB of heap memory, triggering Garbage Collection freezes!

-- Output:
-- Database engine is a set calculator; do not load raw rows to compute math in application RAM!`,
      caption: {
        en: 'Delegate aggregation to relational set math rather than instantiating memory-heavy OOP objects.',
        bn: 'মেমোরিতে লাখ লাখ অবজেক্ট না এনে ডাটাবেসের শক্তিশালী এগ্রিগেশন দিয়ে হিসাব করুন।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. The Infamous N+1 Query Problem: Lazy Loading Traps', bn: '৭. কুখ্যাত N+1 কোয়ারি সমস্যা: লেজি লোডিং ফাঁদ ও সমাধান' } },
    {
      type: 'para',
      text: {
        en: 'The N+1 Query Problem occurs when an ORM issues 1 query to fetch a parent list of N items, and then fires N separate individual queries to retrieve child associations inside a loop. This degrades database throughput by saturating connection pools. The cure is Eager Loading using JOINs or batching.',
        bn: 'N+1 কোয়ারি সমস্যা ঘটে যখন ORM মূল প্যারেন্ট টেবিল আনতে ১টি কুয়েরি চালায়, এবং লুপের ভেতর প্রতিটি চাইল্ডের তথ্য আনতে আলাদা আলাদা N সংখ্যক কুয়েরি ছুড়তে থাকে (মোট N+1 কুয়েরি)। এর ফলে ডাটাবেসে কুয়েরির বন্যা বয়ে যায়। এর সমাধান হলো Eager Loading ব্যবহার করে এক কুয়েরিতেই জয়েন দিয়ে সব ডেটা আনা।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- ❌ THE DISASTROUS N+1 QUERIES:
-- 1 Query to fetch 100 users:
SELECT * FROM users LIMIT 100;

-- PLUS 100 separate queries fired inside the application for-loop:
-- SELECT * FROM profile WHERE user_id = 1;
-- SELECT * FROM profile WHERE user_id = 2;
-- ... [Fires 100 times!] Total: 101 queries! Latency: 2500ms!

-- ✅ THE EAGER LOADING CURE (1 Single Query with JOIN):
SELECT 
    u.id, u.email, p.avatar_url, p.bio
FROM users AS u
LEFT JOIN profiles AS p ON u.id = p.user_id
LIMIT 100;
-- Total: 1 query! Latency: 4ms!

-- Output:
-- 100 rows returned in 1 network round-trip`,
      caption: {
        en: 'Eager loading condenses N+1 round trips into a single relational JOIN query.',
        bn: 'Eager Loading N+1 কুয়েরির ঝামেলা দূর করে একটিমাত্র রিলেশনাল জয়েন দিয়ে সব ডেটা আনে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Connection Pooling: Sockets and Thread Starvation', bn: '৮. কানেকশন পুলিং: সকেট পুনর্ব্যবহার ও সংযোগ রক্ষা' } },
    {
      type: 'para',
      text: {
        en: 'Establishing a new TCP and TLS handshake with authentication for every web request crushes database CPU. A Connection Pool (e.g. PgBouncer, HikariCP) maintains a warm pool of persistent connections. Web worker threads borrow an active connection, execute queries, and return it instantly to the pool.',
        bn: 'প্রতিটি নতুন ওয়েব রিকোয়েস্টের জন্য ডাটাবেসের সাথে নতুন TCP হ্যান্ডশেক ও লগইন করা সার্ভারের ওপর চরম চাপ ফেলে। একটি Connection Pool (যেমন PgBouncer বা HikariCP) আগে থেকেই কিছু কানেকশন রেডি করে রাখে। কোনো রিকোয়েস্ট এলে সেই তৈরি কানেকশন দিয়ে কাজ সেরে সাথে সাথে পুলে ফেরত দেওয়া হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Connection Lifecycle without Pooling:
-- HTTP Request -> TCP SYN -> TLS Handshake -> Auth -> Run SQL -> Close Socket (Slow: 80ms)

-- Connection Lifecycle with Connection Pool:
-- HTTP Request -> Borrow warm connection from pool -> Run SQL -> Return connection (Fast: 2ms)

-- Ideal Pool Sizing Formula (PostgreSQL rule of thumb):
-- max_connections = ((2 * cpu_core_count) + effective_spindle_count)
-- On an 8-core server: (2 * 8) + 1 = ~17 connections!
-- Massive connection counts (e.g. 5000) cause memory thrashing and CPU thread starvation!`,
      caption: {
        en: 'Connection pools reuse persistent sockets, keeping thread contention low under load.',
        bn: 'কানেকশন পুল সকেট বারবার ব্যবহার করে উচ্চ ট্রাফিকেও ডাটাবেসকে স্বাচ্ছন্দ্যে রাখে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. When to Bypass the ORM: Raw SQL and Analytical Limits', bn: '৯. কখন ORM বাদ দেবেন: জটিল অ্যানালিটিক্স ও র এসকিউএল সীমা' } },
    {
      type: 'para',
      text: {
        en: 'ORMs excel at simple transactional CRUD operations (Create, Read, Update, Delete). However, complex multi-table window functions, recursive CTEs, bulk inserts, and analytical pivot reports are painfully convoluted in ORM DSLs. Professional engineers write handwritten Raw SQL for performance-critical analytical paths.',
        bn: 'ORM সাধারণ CRUD কাজের জন্য চমৎকার। কিন্তু জটিল অ্যানালিটিক্স, উইন্ডো ফাংশন, রিকার্সিভ CTE, বাল্ক ইনসার্ট বা পিভট রিপোর্টের ক্ষেত্রে ORM-এর কোড অত্যন্ত জটিল ও ধীরগতির হয়ে পড়ে। তাই দক্ষ ডেভেলপাররা এসব ক্ষেত্রে সরাসরি নিখুঁত Raw SQL লিখে সর্বোচ্চ পারফরম্যান্স নিশ্চিত করেন।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Complex Analytical Window Pipeline: Painful in ORMs, elegant in Raw SQL
SELECT 
    department,
    employee_id,
    salary,
    ROUND(AVG(salary) OVER(PARTITION BY department), 2) AS dept_average,
    RANK() OVER(PARTITION BY department ORDER BY salary DESC) AS rank_in_dept
FROM employees
WHERE is_active = TRUE;

-- Output:
-- Engineering | 101 | 95000.00 | 75000.00 | 1
-- Engineering | 102 | 80000.00 | 75000.00 | 2
-- Result: Native SQL engine executes in 0.004s; clean and maintainable`,
      caption: {
        en: 'Use raw SQL when query complexity surpasses clean ORM object mapping abstractions.',
        bn: 'জটিল অ্যানালিটিক্সে ORM-এর জটিলতা এড়িয়ে সরাসরি র এসকিউএল ব্যবহার করাই বুদ্ধিমানের কাজ।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Security Hygiene: Least Privilege and Read Replicas', bn: '১০. নিরাপত্তা অনুশাসন: সর্বনিম্ন অধিকার (Least Privilege) নীতি' } },
    {
      type: 'para',
      text: {
        en: 'Defense-in-depth requires enforcing the Principle of Least Privilege at the database account layer. Web applications should connect using accounts restricted strictly to SELECT, INSERT, UPDATE, and DELETE. Administrative operations (DROP, ALTER, CREATE) should be forbidden, and analytical queries routed to Read-Only Replicas.',
        bn: 'সর্বোচ্চ নিরাপত্তার জন্য ডাটাবেসে Least Privilege নীতি প্রয়োগ করা উচিত। ওয়েব অ্যাপ্লিকেশনকে এমন ইউজার অ্যাকাউন্ট দিয়ে কানেক্ট করা উচিত যার কেবল SELECT, INSERT, UPDATE ও DELETE করার অধিকার আছে। DROP বা ALTER-এর মতো ধ্বংসাত্মক ক্ষমতা সাধারণ অ্যাপকে দেওয়া নিষিদ্ধ, আর ভারী রিপোর্টিং রিড-অনলি রেপলিকায় চালানো উচিত।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Create a restricted application user (PostgreSQL syntax)
CREATE USER web_application_svc WITH PASSWORD 'SecureAppPass123';

-- 2. Grant only operational DML permissions (NO DDL like DROP TABLE!)
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO web_application_svc;

-- 3. Create a read-only role for business intelligence and reporting
CREATE USER bi_analyst_ro WITH PASSWORD 'ReportingPass456';
GRANT SELECT ON ALL TABLES IN SCHEMA public TO bi_analyst_ro;

-- Output:
-- Role web_application_svc created with constrained DML privileges.
-- Result: Even in worst-case SQL injection, attackers cannot DROP tables or alter schemas`,
      caption: {
        en: 'Constraining application accounts prevents catastrophic data eradication during attacks.',
        bn: 'অ্যাপের পারমিশন সীমিত রাখলে মারাত্মক আক্রমণের মুখেও টেবিল মুছে ফেলা অসম্ভব থাকে।'
      }
    }
  ],
  exercises: [
    {
      id: 'sql-orm-ex1',
      kind: 'predict',
      topic: 'sql: SQL injection prevention',
      question: {
        en: 'What mechanism prevents SQL injection by sending user input out-of-band as literal data rather than dynamic executable code?',
        bn: 'কোন কৌশলটি ব্যবহারকারীর ইনপুটকে এক্সিকিউটেবল কোডের বদলে সরাসরি ডেটা প্লেসহোল্ডার হিসেবে পাঠিয়ে এসকিউএল ইনজেকশন প্রতিরোধ করে?'
      },
      code: `/* SQL injection defense mechanism */
/* SELECT * FROM users WHERE email = ? */`,
      answer: 'parameterized queries',
      accept: ['parameterized queries', 'parameterized query', 'prepared statements', 'bind parameters'],
      hint: {
        en: 'Queries using bind parameters or placeholders.',
        bn: 'প্লেসহোল্ডার বা বাইন্ড প্যারামিটার ব্যবহার করা কুয়েরি।'
      },
      explanation: {
        en: 'Parameterized queries (and prepared statements) isolate user input into distinct data parameters, guaranteeing that strings are never parsed as executable SQL commands.',
        bn: 'প্যারামিটারাইজড কুয়েরি ব্যবহারকারীর ডেটাকে কোড থেকে আলাদা রাখে, যার ফলে কোনো স্ট্রিং কখনোই এক্সিকিউটেবল কোড হিসেবে চলার সুযোগ পায় না।'
      }
    },
    {
      id: 'sql-orm-ex2',
      kind: 'mcq',
      topic: 'sql: The N+1 query problem cure',
      question: {
        en: 'How do software developers solve the N+1 query problem caused by naive ORM lazy loading?',
        bn: 'সাধারণ ORM-এর লেজি লোডিংয়ের কারণে সৃষ্ট N+1 কোয়ারি সমস্যা ডেভেলপাররা কীভাবে সমাধান করেন?'
      },
      options: [
        { en: 'By using Eager Loading to fetch related parent and child entities in a single JOIN query', bn: 'Eager Loading ব্যবহার করে একটিমাত্র JOIN কুয়েরির মাধ্যমে প্যারেন্ট ও চাইল্ড ডেটা একসাথে এনে' },
        { en: 'By increasing connection pool timeout', bn: 'কানেকশন পুলের সময় বাড়িয়ে' },
        { en: 'By disabling indexes on foreign keys', bn: 'ফরেন কি-র ইনডেক্স বন্ধ করে' },
        { en: 'By deleting all child records', bn: 'চাইল্ড রেকর্ড মুছে ফেলে' }
      ],
      answer: 0,
      hint: {
        en: 'Fetch eagerly rather than lazily in a loop.',
        bn: 'লুপে বারবার না এনে একসাথে Eagerly লোড করুন।'
      },
      explanation: {
        en: 'Eager Loading instructs the ORM to issue a single JOIN query (or a batch WHERE id IN query), retrieving all parent and associated child records in one round-trip.',
        bn: 'Eager Loading একটিমাত্র JOIN কুয়েরি দিয়ে প্যারেন্ট ও সংশ্লিষ্ট সকল চাইল্ড রেকর্ড একবারে তুলে আনে, যা N+1 রাউন্ড-ট্রিপের অবসান ঘটায়।'
      }
    },
    {
      id: 'sql-orm-ex3',
      kind: 'mcq',
      topic: 'sql: Prepared statements advantage',
      question: {
        en: 'What is a major performance benefit of using Prepared Statements in high-throughput database systems?',
        bn: 'উচ্চ ট্রাফিকের ডাটাবেস সিস্টেমে প্রিপেয়ার্ড স্টেটমেন্ট ব্যবহারের প্রধান পারফরম্যান্স সুবিধা কী?'
      },
      options: [
        { en: 'The database parses, compiles, and optimizes the execution plan once, reusing the compiled plan across subsequent calls', bn: 'ডাটাবেস একবারই কুয়েরি প্ল্যান কম্পাইল ও অপ্টিমাইজ করে রাখে, এবং পরবর্তী কলগুলোতে সেই তৈরি প্ল্যান পুনরায় ব্যবহার করে' },
        { en: 'It bypasses the need for storage', bn: 'স্টোরেজের দরকার হয় না' },
        { en: 'It makes all queries synchronous', bn: 'সব কুয়েরি সিঙ্ক্রোনাস করে' },
        { en: 'It eliminates foreign keys', bn: 'ফরেন কি বাতিল করে' }
      ],
      answer: 0,
      hint: {
        en: 'Plan parsing and optimization happens only once.',
        bn: 'প্ল্যান তৈরি ও অপ্টিমাইজেশন মাত্র একবারই ঘটে।'
      },
      explanation: {
        en: 'Prepared statements eliminate query parsing and planning overhead for subsequent invocations, providing significant CPU savings under high concurrency.',
        bn: 'প্রিপেয়ার্ড স্টেটমেন্ট প্রতিবার কুয়েরি কম্পাইল ও প্ল্যান করার বাড়তি সিপিইউ খরচ বাঁচিয়ে উচ্চ ট্রাফিকেও চমৎকার গতি নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'sql-orm-quiz',
    title: { en: 'SQL Security & ORM Architecture Quiz', bn: 'এসকিউএল সিকিউরিটি ও ORM আর্কিটেকচার কুইজ' },
    questions: [
      {
        id: 'oq1',
        kind: 'mcq',
        topic: 'sql: Least privilege principle',
        question: {
          en: 'Under the Principle of Least Privilege, what permissions should an application web-service database account have?',
          bn: 'Least Privilege নীতি অনুসারে একটি ওয়েব অ্যাপ্লিকেশনের ডাটাবেস অ্যাকাউন্টে কোন কোন পারমিশন থাকা উচিত?'
        },
        options: [
          { en: 'Strictly operational DML permissions (SELECT, INSERT, UPDATE, DELETE) without administrative DDL rights (DROP, ALTER)', bn: 'শুধুমাত্র প্রয়োজনীয় DML অধিকার (SELECT, INSERT, UPDATE, DELETE), কোনো ধ্বংসাত্মক DDL অধিকার (DROP, ALTER) ছাড়া' },
          { en: 'Full SUPERUSER root permissions', bn: 'সম্পূর্ণ সুপারইউজার রুট পারমিশন' },
          { en: 'Only DROP TABLE permissions', bn: 'শুধু DROP TABLE পারমিশন' },
          { en: 'Read-only access to disk partitions', bn: 'ডিস্ক পারমিশন' }
        ],
        answer: 0,
        hint: {
          en: 'Allow only the operational queries necessary for day-to-day app usage.',
          bn: 'দৈনন্দিন কাজের জন্য যতটুকু দরকার কেবল ততটুকুই অনুমতি দিন।'
        },
        explanation: {
          en: 'Restricting application credentials to DML operations prevents malicious or accidental schema drops (DROP TABLE) even if a vulnerability occurs.',
          bn: 'অ্যাপের অধিকার কেবল DML অপারেশনে সীমাবদ্ধ রাখলে কোনো ত্রুটি হলেও আক্রমণকারীরা টেবিল মুছে ফেলা বা স্কিমা নষ্ট করার সুযোগ পায় না।'
        }
      },
      {
        id: 'oq2',
        kind: 'mcq',
        topic: 'sql: Connection pool sizing',
        question: {
          en: 'Why is setting an excessively huge connection pool size (e.g. 5,000 connections) counter-productive for database throughput?',
          bn: 'ডাটাবেসে অস্বাভাবিক বিশাল কানেকশন পুল (যেমন 5,000 কানেকশন) দিলে তা উপকারের বদলে উল্টো ক্ষতিকর কেন হয়?'
        },
        options: [
          { en: 'It causes CPU thread starvation, context-switching thrashing, and memory exhaustion in the database server', bn: 'এটি ডাটাবেস সার্ভারে সিপিইউ থ্রেড স্টারভেশন, অতিরিক্ত কনটেক্সট সুইচিং এবং মেমোরি সংকট তৈরি করে' },
          { en: 'Databases only allow 1 connection', bn: 'ডাটাবেস শুধু 1 টি কানেকশন নেয়' },
          { en: 'TCP cannot support multiple connections', bn: 'TCP সাপোর্ট করে না' },
          { en: 'It deletes indexes', bn: 'এটি ইনডেক্স মুছে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Hardware CPU cores are finite; too many concurrent threads cause thrashing.',
          bn: 'সিপিইউ কোর সীমিত; অতিরিক্ত থ্রেড একে অপরের সাথে ধাক্কাধাক্কি শুরু করে।'
        },
        explanation: {
          en: 'Databases are constrained by CPU cores and I/O spindles. Thousands of concurrent connections spend more CPU time swapping context than executing actual SQL, causing thread starvation.',
          bn: 'ডাটাবেসের সিপিইউ কোর সীমিত। হাজার হাজার কানেকশন দিলে প্রসেসর কুয়েরি চালানোর চেয়ে পরস্পরের মাঝে সুইচ করতেই বেশি সময় নষ্ট করে ক্র্যাশ করে।'
        }
      },
      {
        id: 'oq3',
        kind: 'mcq',
        topic: 'sql: Prepared statements vs injection',
        question: {
          en: 'How do parameterized prepared statements definitively prevent SQL injection vulnerabilities?',
          bn: 'প্যারামিটারাইজড প্রিপেয়ার্ড স্টেটমেন্ট কীভাবে এসকিউএল ইনজেকশন পুরোপুরি দূর করে?'
        },
        options: [
          { en: 'They transmit query syntax and user parameters over separate protocol channels, ensuring parameters are treated purely as data literals rather than executable commands', bn: 'তারা কোয়ারির সিনট্যাক্স এবং ইনপুট ডেটাকে আলাদা প্রোটোকল চ্যানেলে পাঠায়, ফলে ইনপুট কোনোভাবেই কমান্ড হিসেবে মূল্যায়িত হয় না' },
          { en: 'They automatically convert SQL to MongoDB queries', bn: 'তারা এসকিউএলকে মঙ্গোডিবি কোয়ারিতে রূপান্তর করে' },
          { en: 'They delete quotation marks before inserting', bn: 'তারা ইনসার্টের আগে কোটেশন মার্ক মুছে ফেলে' },
          { en: 'They bypass the database parser entirely', bn: 'তারা ডাটাবেস পার্সারকে এড়িয়ে চলে' }
        ],
        answer: 0,
        hint: {
          en: 'Code and data are separated at the protocol level.',
          bn: 'প্রোটোকল স্তরে কোড এবং ডেটা আলাদা থাকে।'
        },
        explanation: {
          en: 'Because the database parses and compiles the query execution plan before binding parameters, user input can never alter query syntax or logic, regardless of its contents.',
          bn: 'ডাটাবেস আগে কোয়ারির প্ল্যান তৈরি ও কম্পাইল করে নেয় এবং পরে ইনপুট যুক্ত করে। তাই ব্যবহারকারী যা কিছুই টাইপ করুক না কেন, কোয়ারির ব্যাকরণ বা লজিক পরিবর্তন করা অসম্ভব।'
        }
      },
      {
        id: 'oq4',
        kind: 'mcq',
        topic: 'sql: N+1 query problem',
        question: {
          en: 'What is the root cause of the "N+1 query problem" commonly observed in ORM applications?',
          bn: 'ORM অ্যাপ্লিকেশনে প্রায়শই দেখা দেওয়া "N+1 কোয়ারি সমস্যা" এর মূল কারণ কী?'
        },
        options: [
          { en: 'Executing 1 initial query to fetch N parent rows, followed by N separate roundtrip queries inside a loop to retrieve each child relation instead of a single JOIN', bn: 'N সংখ্যক প্যারেন্ট ডেটার জন্য 1 টি প্রাথমিক কোয়ারি এবং পরবর্তীতে প্রতি চাইল্ডের জন্য লুপের ভেতর আলাদা N টি কোয়ারি চালানো (একক JOIN-এর পরিবর্তে)' },
          { en: 'Querying tables that have more than N primary keys', bn: 'N-এর বেশি প্রাইমারি কি থাকা টেবিলে কোয়ারি করা' },
          { en: 'Running a query that takes N+1 seconds to finish', bn: 'কোয়ারি শেষ হতে N+1 সেকেন্ড সময় লাগা' },
          { en: 'Creating N+1 indexes on a single table', bn: 'একটি টেবিলে N+1 সংখ্যক ইনডেক্স তৈরি করা' }
        ],
        answer: 0,
        hint: {
          en: 'One query for parents, plus N individual queries for their children.',
          bn: 'প্যারেন্টের জন্য একটি, আর সন্তানদের জন্য লুপে আলাদা N টি কোয়ারি।'
        },
        explanation: {
          en: 'The N+1 problem floods the database with roundtrip network latency. Instead of fetching related child rows in a single JOIN or IN query, the application fires one query per parent record.',
          bn: 'N+1 সমস্যা ডাটাবেসকে অতিরিক্ত নেটওয়ার্ক রিকোয়েস্টে ভাসিয়ে দেয়। একটিমাত্র JOIN দিয়ে সব চাইল্ড রো না এনে প্রতি প্যারেন্টের জন্য আলাদা কুয়েরি পাঠিয়ে সার্ভার ধীর করে ফেলা হয়।'
        }
      }
    ]
  }
};
