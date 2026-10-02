import type { Lesson } from '../../../lib/types';

export const sqlThinkingLesson: Lesson = {
  slug: 'sql-thinking',
  tech: 'sql',
  title: {
    en: 'SQL Fundamentals: Declarative Thinking, Filtering, NULLs & Execution Order',
    bn: 'এসকিউএল ফান্ডামেন্টালস: ডিক্লারেটিভ চিন্তা, ফিল্টারিং, NULL ও এক্সিকিউশন ক্রম'
  },
  summary: {
    en: 'Master foundational SQL across 10 structured topics, from declarative relational set theory to WHERE filtering and NULL handling. Learn the 6-stage logical query evaluation pipeline, deduplication with DISTINCT, and deterministic pagination.',
    bn: 'ডিক্লারেটিভ রিলেশনাল সেট থিওরি থেকে শুরু করে WHERE ফিল্টারিং ও NULL হ্যান্ডলিং পর্যন্ত 10 টি মূল বিষয়ে এসকিউএল ভিত্তি আয়ত্ত করুন। জানুন 6 ধাপের লজিক্যাল এক্সিকিউশন পাইপলাইন, DISTINCT দিয়ে ডুপ্লিকেট দূরীকরণ এবং সুনির্দিষ্ট পেজিনেশন কৌশল।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-census-ledger',
    title: { en: 'SQL Aggregation, GROUP BY, HAVING & Conditional Expressions', bn: 'এসকিউএল এগ্রিগেশন, GROUP BY, HAVING ও শর্তযুক্ত এক্সপ্রেশন' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Declarative Paradigm: Describing What vs How', bn: '১. ডিক্লারেটিভ চিন্তাধারা: কী চাই বনাম কীভাবে করব' } },
    {
      type: 'para',
      text: {
        en: 'SQL is fundamentally a declarative language based on relational set theory. Unlike procedural languages where you write explicit loops to step through records, SQL queries declare what data is needed (the desired result), while the database engine determines how to fetch it via index scans or table scans.',
        bn: 'এসকিউএল মূলত রিলেশনাল সেট থিওরির ওপর প্রতিষ্ঠিত একটি ডিক্লারেটিভ ভাষা। প্রসিডিউরাল ভাষার মতো এখানে ডেটা খোঁজার জন্য কোনো লুপ লিখতে হয় না; বরং কোয়ারিতে কেবল বলে দেওয়া হয় কী ফলাফল প্রয়োজন (আকাঙ্ক্ষিত ফল), আর ডাটাবেসের কোয়ারি অপ্টিমাইজার নিজে থেকেই টেবিল স্ক্যান বা ইনডেক্স স্ক্যান ব্যবহার করে ডেটা তুলে আনে।'
      }
    },
    {
      type: 'visual',
      id: 'database'
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Procedural mindset: Iterate array, check balance, accumulate matches
-- Declarative SQL: Declare the predicate directly on the relation

SELECT account_id, owner_name, balance_usd
FROM accounts
WHERE balance_usd >= 10000;

-- Output:
-- 101 | Alice Walker   | 15400.00
-- 104 | David Chen     | 22850.50
-- Result: 2 matching rows returned from accounts relation`,
      caption: {
        en: 'The RDBMS engine determines optimal access paths without requiring manual iteration.',
        bn: 'ম্যানুয়াল লুপ ছাড়াই RDBMS ইঞ্জিন নিজস্ব অপ্টিমাইজার দিয়ে সেরা পথে ডেটা উদ্ধার করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Query Anatomy: SELECT Projection and the FROM Clause', bn: '২. কোয়ারির মূল গঠন: SELECT প্রজেকশন ও FROM ক্লজ' } },
    {
      type: 'para',
      text: {
        en: 'Every basic query begins with SELECT followed by the column list, and FROM indicating the source table. Selecting explicit columns (SELECT id, name) is far superior to SELECT * in production: it minimizes network I/O, leverages covering indexes, and protects applications from breaking when new table columns are added.',
        bn: 'প্রতিটি সাধারণ কোয়ারি শুরু হয় SELECT ও প্রয়োজনীয় কলামের তালিকা দিয়ে, এবং FROM ক্লজ নির্দেশ করে উৎস টেবিলটি। প্রোডাকশনে SELECT * লেখার চেয়ে নির্দিষ্ট কলামের নাম (SELECT id, name) উল্লেখ করা বহুগুণ উত্তম: এটি অপ্রয়োজনীয় ব্যান্ডউইথ বাঁচায়, কাভারিং ইনডেক্সের পূর্ণ সুবিধা দেয় এবং টেবিলে নতুন কলাম যোগ হলেও অ্যাপ্লিকেশনকে সুরক্ষিত রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- ❌ Production Anti-Pattern: Retrieves unused byte-heavy blob columns
-- SELECT * FROM employees;

-- ✅ Best Practice: Project explicit attributes with aliases
SELECT 
    employee_id,
    first_name AS given_name,
    salary_usd * 12 AS annual_gross_pay
FROM employees;

-- Output:
-- 1 | Rahat | 72000
-- 2 | Sumon | 84000
-- Result: 2 rows projected with calculated annual gross pay`,
      caption: {
        en: 'Explicit column projection prevents I/O bottlenecks and enables database index-only scans.',
        bn: 'সুনির্দিষ্ট কলাম প্রজেকশন ডেটাবেসের I/O জ্যাম কমায় এবং দ্রুত ইনডেক্স-অনলি স্ক্যান নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Row Filtering with WHERE: Comparison Operators', bn: '৩. সারি ফিল্টারিং: WHERE ক্লজ ও তুলনা অপারেটর' } },
    {
      type: 'para',
      text: {
        en: 'The WHERE clause evaluates a boolean predicate for each candidate row, retaining only rows where the expression evaluates to TRUE. Standard comparison operators include = (equality), != or <> (inequality), < (less than), <= (less than or equal), > (greater than), and >= (greater than or equal).',
        bn: 'WHERE ক্লজ প্রতিটি সারির জন্য একটি বুলিয়ান শর্ত যাচাই করে এবং কেবল যেগুলোর ফলাফল TRUE হয় সেগুলোকে ফলাফলে অন্তর্ভুক্ত করে। সাধারণ তুলনা অপারেটরগুলোর মধ্যে রয়েছে = (সমান), != বা <> (অসমান), < (ছোট), <= (ছোট বা সমান), > (বড়), এবং >= (বড় বা সমান)।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Filtering active warehouse products with stock under reorder threshold
SELECT product_id, product_name, stock_qty
FROM inventory
WHERE stock_qty <= 15;

-- Output:
-- 302 | USB-C Fast Charger | 8
-- 415 | Wireless Mouse     | 12
-- Result: 2 inventory records require immediate replenishment`,
      caption: {
        en: 'WHERE filters individual records before any grouping or final projection occurs.',
        bn: 'WHERE ক্লজ যেকোনো গ্রুপিং বা চূড়ান্ত প্রজেকশনের আগেই রেকর্ডগুলোকে ফিল্টার করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Compound Logic: AND, OR, NOT and Operator Precedence', bn: '৪. যৌগিক যুক্তি: AND, OR, NOT ও অপারেটর অগ্রাধিকার' } },
    {
      type: 'para',
      text: {
        en: 'Multiple predicates can be combined using boolean operators: the AND operator requires both conditions to hold; the OR operator requires at least one condition to hold; and the NOT operator inverts the boolean truth value. In SQL operator precedence, AND binds tighter than OR. Always wrap OR expressions in parentheses to avoid logic bugs.',
        bn: 'একাধিক শর্তকে বুলিয়ান অপারেটর দিয়ে যুক্ত করা যায়: AND অপারেটর উভয় শর্ত সত্য হওয়া দাবি করে; OR অপারেটর যেকোনো একটি শর্ত সত্য হলেই কাজ করে; আর NOT অপারেটর সত্যকে উল্টে দেয়। এসকিউএল নিয়মে AND-এর অগ্রাধিকার OR-এর চেয়ে বেশি। তাই লজিক্যাল ত্রুটি এড়াতে OR শর্তগুলোকে ব্র্যাকেটের ভেতরে রাখা আবশ্যক।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Enforcing strict parentheses precedence
SELECT user_id, email, country, is_verified
FROM users
WHERE (country = 'BD' OR country = 'SG')
  AND is_verified = 1
  AND NOT status = 'banned';

-- Output:
-- 501 | tanvir@domain.com | BD | 1
-- 509 | meilin@domain.com | SG | 1
-- Result: 2 verified, non-banned regional users matched`,
      caption: {
        en: 'Explicit parentheses prevent operator precedence confusion between AND and OR.',
        bn: 'স্পষ্ট ব্র্যাকেট ব্যবহার AND ও OR-এর মধ্যে অগ্রাধিকার সংক্রান্ত ভুল রোধ করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Set Membership and Continuous Ranges: IN and BETWEEN', bn: '৫. সেটের সদস্যপদ ও পরিসীমা: IN ও BETWEEN অপারেটর' } },
    {
      type: 'para',
      text: {
        en: 'The IN operator tests whether a value exists within an explicit set of literals or subquery results, replacing long chains of OR conditions. The BETWEEN ... AND operator checks whether a value falls within an inclusive numerical, date, or text boundary (low_val <= x <= high_val).',
        bn: 'IN অপারেটর কোনো মান একটি নির্দিষ্ট তালিকার ভেতর আছে কি না তা যাচাই করে, যা অনেকগুলো দীর্ঘ OR স্টেটমেন্ট লেখার ঝামেলা দূর করে। আর BETWEEN ... AND অপারেটর কোনো মান নির্দিষ্ট সংখ্যামান, তারিখ বা সীমার ভেতরে (উভয় প্রান্তীয় মান সহ) অবস্থিত কি না তা সহজে পরীক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. IN operator: Replaces repeated OR clauses
SELECT order_id, status, total_amount
FROM orders
WHERE status IN ('processing', 'shipped', 'delivered');

-- 2. BETWEEN operator: Inclusive range test
SELECT invoice_id, issued_date, amount_bdt
FROM invoices
WHERE amount_bdt BETWEEN 5000 AND 25000;

-- Output:
-- 101 | shipped    | 7500.00
-- 103 | processing | 18200.00
-- Result: 2 invoices matching the bounded budget range`,
      caption: {
        en: 'BETWEEN is inclusive on both boundaries; IN is syntactic sugar for a disjunction set.',
        bn: 'BETWEEN উভয় প্রান্তীয় মানকে অন্তর্ভুক্ত করে; IN একাধিক OR শর্তকে সংক্ষিপ্ত করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Pattern Matching: The LIKE Operator and Wildcards (% and _)', bn: '৬. প্যাটার্ন ম্যাচিং: LIKE অপারেটর ও ওয়াইল্ডকার্ড (% এবং _)' } },
    {
      type: 'para',
      text: {
        en: 'The LIKE operator performs fuzzy pattern matching on text strings using two special wildcards: the percent sign (%) matches zero or more characters of arbitrary length; the underscore sign (_) matches exactly one single character.',
        bn: 'LIKE অপারেটর টেক্সট স্ট্রিংয়ে প্যাটার্ন বা মিল খোঁজার কাজ করে। এর জন্য দুটি বিশেষ ওয়াইল্ডকার্ড রয়েছে: পার্সেন্ট চিহ্ন (%) শূন্য বা ততোধিক যেকোনো দৈর্ঘ্যের অক্ষর বোঝায়; আর আন্ডারস্কোর চিহ্ন (_) হুবহু একটিমাত্র একক অক্ষর নির্দেশ করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Starts with 'dev_' and has arbitrary suffix (%):
SELECT username, email FROM staff WHERE email LIKE 'dev_%';

-- 2. Matches exactly 4-character codes ending in '01' (_):
SELECT item_code, description FROM catalog WHERE item_code LIKE '__01';

-- Output:
-- dev_arif | dev_arif@org.net
-- dev_sara | dev_sara@org.net
-- AB01     | Standard Sensor
-- Result: 3 matched records based on wildcard predicates`,
      caption: {
        en: 'Percent (%) matches any sequence length; underscore (_) matches exactly one character.',
        bn: 'পার্সেন্ট (%) যেকোনো দৈর্ঘ্যের টেক্সট মেলায়; আন্ডারস্কোর (_) ঠিক একটি অক্ষর মেলায়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Three-Valued Logic and NULLs: IS NULL vs IS NOT NULL', bn: '৭. তিন-মূল্যমান যুক্তি ও NULL: IS NULL বনাম IS NOT NULL' } },
    {
      type: 'para',
      text: {
        en: 'NULL represents missing or unknown information, not zero or an empty string. Standard equality checks against NULL (= NULL or != NULL) evaluate to UNKNOWN, which WHERE clauses treat as FALSE! To verify missing values, you MUST use the specialized operators IS NULL or IS NOT NULL.',
        bn: 'NULL কোনো শূন্য বা খালি স্ট্রিং নয়, এটি অনুপস্থিত বা অজানা তথ্য নির্দেশ করে। সাধারণ সমান চিহ্ন দিয়ে NULL পরীক্ষা করলে (= NULL বা != NULL) তার ফলাফল সত্য বা মিথ্যা না হয়ে UNKNOWN হয়, যা WHERE ক্লজ বাতিল করে দেয়! তাই অনুপস্থিত মান পরীক্ষার জন্য বাধ্যতামূলকভাবে IS NULL বা IS NOT NULL ব্যবহার করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- ❌ BUG: Evaluates to UNKNOWN, returning 0 rows!
-- SELECT * FROM customers WHERE phone_number = NULL;

-- ✅ CORRECT: Uses explicit nullity predicate
SELECT customer_id, customer_name, phone_number
FROM customers
WHERE phone_number IS NULL;

-- Querying rows with known values:
SELECT customer_id, customer_name
FROM customers
WHERE phone_number IS NOT NULL;

-- Output:
-- 204 | Rafiqul Islam | NULL
-- Result: 1 customer found missing mandatory telephone contact`,
      caption: {
        en: '= NULL is never True in SQL three-valued logic; always check with IS NULL.',
        bn: 'এসকিউএলের তিন-মূল্যমান যুক্তিতে = NULL কখনোই True হয় না; সর্বদা IS NULL ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Duplicate Elimination: The SELECT DISTINCT Modifier', bn: '৮. ডুপ্লিকেট দূরীকরণ: SELECT DISTINCT ক্লজ' } },
    {
      type: 'para',
      text: {
        en: 'Relational tables often contain duplicate values across non-key columns. Adding DISTINCT directly after SELECT removes identical result rows from the output set. When specifying multiple columns, DISTINCT applies to the entire tuple combination, eliminating rows only when all projected columns match.',
        bn: 'রিলেশনাল টেবিলে প্রাইমারি কি ছাড়া অন্যান্য কলামে ডুপ্লিকেট মান থাকতে পারে। SELECT-এর ঠিক পরেই DISTINCT লিখে দিলে আউটপুট থেকে হুবহু একই রকম সারিগুলো মুছে ফেলে কেবল ইউনিক সারিগুলো রাখা হয়। একাধিক কলাম দিলে সবগুলো কলামের মিলিত মানের ওপর ভিত্তি করে ডুপ্লিকেট বাদ দেওয়া হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Extract unique departments and cities currently employing active staff
SELECT DISTINCT department, work_location
FROM company_directory;

-- Output:
-- Engineering | Dhaka
-- Engineering | Singapore
-- Marketing   | Dhaka
-- Result: 3 distinct department-location combinations discovered`,
      caption: {
        en: 'DISTINCT evaluates equality across the full tuple of all projected columns.',
        bn: 'DISTINCT প্রজেক্ট করা সকল কলামের সম্পূর্ণ সেটের ওপর ভিত্তি করে ডুপ্লিকেট ছাঁটাই করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Ordering and Pagination: ORDER BY and LIMIT / OFFSET', bn: '৯. ক্রমবিন্যাস ও পেজিনেশন: ORDER BY এবং LIMIT / OFFSET' } },
    {
      type: 'para',
      text: {
        en: 'Relational tables are unordered bags of rows; without an explicit ORDER BY clause, row sequence is mathematically nondeterministic. ORDER BY sorts output by one or more columns in ASC (ascending, default) or DESC (descending) order. LIMIT caps total returned rows, while OFFSET skips initial rows for user-interface pagination.',
        bn: 'রিলেশনাল ডাটাবেসের টেবিল কোনো নির্দিষ্ট ক্রমে থাকে না; ORDER BY ক্লজ না দিলে কোন সারি আগে আসবে তার কোনো গ্যারান্টি নেই। ORDER BY দিয়ে এক বা একাধিক কলামের ওপর ASC (ছোট থেকে বড়) বা DESC (বড় থেকে ছোট) ক্রমে ডেটা সাজানো হয়। LIMIT সর্বোচ্চ সারির সংখ্যা নির্দিষ্ট করে, আর OFFSET পেজিনেশনের জন্য শুরুর কিছু সারি বাদ দিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Top-5 highest earning employees (Page 1)
SELECT employee_id, full_name, monthly_salary
FROM payroll
ORDER BY monthly_salary DESC, full_name ASC
LIMIT 5 OFFSET 0;

-- Output:
-- 12 | Shafiul Alam | 125000.00
-- 44 | Nusrat Jahan | 118000.00
-- 07 | Kabir Ahmed  | 98000.00
-- Result: Top records sorted deterministically with secondary tie-breaker`,
      caption: {
        en: 'Without ORDER BY, relational row order is undefined; secondary sort columns break ties.',
        bn: 'ORDER BY ছাড়া সারির ক্রম অনিশ্চিত; টাই ভাঙতে দ্বিতীয় আরেকটি কলামে সাজানো হয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. The 6-Stage Logical Query Execution Pipeline', bn: '১০. লজিক্যাল কুয়েরি এক্সিকিউশন পাইপলাইন: ৬টি মূল ধাপ' } },
    {
      type: 'para',
      text: {
        en: 'The greatest point of confusion for beginners is that SQL queries are not executed in written order. The engine processes a query through 6 strict logical stages. First, FROM determines candidate rows. Second, WHERE filters rows. Third, GROUP BY clusters records, followed by HAVING filtering groups. Fifth, SELECT projects and computes columns. Finally, ORDER BY sorts the output. This explains why column aliases defined in SELECT cannot be used in WHERE.',
        bn: 'নতুনদের জন্য সবচেয়ে বিভ্রান্তিকর বিষয় হলো এসকিউএল লেখার ক্রমে চলে না। ডাটাবেস ইঞ্জিন মোট 6 টি নির্দিষ্ট ধাপে কোয়ারি প্রসেস করে। প্রথমে FROM টেবিল লোড করে। এরপর WHERE অপ্রয়োজনীয় সারি বাদ দেয়। তৃতীয় ধাপে GROUP BY দল গঠন করে এবং HAVING দল ছাঁটাই করে। পঞ্চম ধাপে SELECT কলাম প্রজেক্ট করে। সবশেষে ORDER BY ফলাফল সাজায়। এজন্যই SELECT-এ সংজ্ঞায়িত কোনো নাম WHERE ক্লজে ব্যবহার করা যায় না।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Execution order: FROM (1) -> WHERE (2) -> SELECT (3) -> ORDER BY (4)

SELECT 
    product_id,
    unit_price * quantity_sold AS total_revenue -- Evaluated at Stage 5
FROM order_items                                 -- Stage 1: Load relation
WHERE is_refunded = 0                           -- Stage 2: Filter raw rows
ORDER BY total_revenue DESC                     -- Stage 6: Sorts final projection!
LIMIT 10;

-- Output:
-- 88 | 49000.00
-- 92 | 34500.00
-- Result: Top 2 non-refunded revenue items sorted cleanly`,
      caption: {
        en: 'Understanding logical pipeline order explains why SELECT aliases are invisible in WHERE clauses.',
        bn: 'লজিক্যাল পাইপলাইন ক্রম বুঝলে স্পষ্ট হয় কেন SELECT-এর অ্যালিয়াস WHERE ক্লজে কাজ করে না।'
      }
    }
  ],
  exercises: [
    {
      id: 'sql-think-ex1',
      kind: 'predict',
      topic: 'sql: Evaluation of = NULL',
      question: {
        en: 'What boolean truth value does the SQL expression (status = NULL) evaluate to in three-valued logic?',
        bn: 'এসকিউএলের তিন-মূল্যমান যুক্তিতে (status = NULL) এক্সপ্রেশনটি কোন সত্য মান প্রদান করে?'
      },
      code: `/* SQL three-valued logic null comparison */
/* SELECT * FROM tbl WHERE status = NULL */`,
      answer: 'UNKNOWN',
      accept: ['UNKNOWN', 'unknown', 'False', 'false'],
      hint: {
        en: 'SQL logic has three values: TRUE, FALSE, and UNKNOWN.',
        bn: 'এসকিউএলে তিনটি মান থাকে: TRUE, FALSE এবং UNKNOWN।'
      },
      explanation: {
        en: 'In SQL three-valued logic, any direct equality comparison with NULL yields UNKNOWN. Since WHERE requires TRUE to pass, no rows are ever returned. Use IS NULL instead.',
        bn: 'এসকিউএলের তিন-মূল্যমান যুক্তিতে NULL-এর সাথে যেকোনো তুলনা UNKNOWN মান দেয়। WHERE ক্লজে TRUE হতে হয় বলে কোনো সারি আসে না। এর বদলে IS NULL ব্যবহার করতে হয়।'
      }
    },
    {
      id: 'sql-think-ex2',
      kind: 'mcq',
      topic: 'sql: Logical evaluation order',
      question: {
        en: 'Which clause is executed FIRST by the SQL query engine during logical evaluation?',
        bn: 'লজিক্যাল এক্সিকিউশনের সময় এসকিউএল ইঞ্জিন সর্বপ্রথম কোন ক্লজটি চালায়?'
      },
      options: [
        { en: 'FROM (identifying source tables and joining relations)', bn: 'FROM (উৎস টেবিল শনাক্তকরণ ও রিলেশন লোড করা)' },
        { en: 'SELECT (projecting columns)', bn: 'SELECT (কলাম নির্ধারণ করা)' },
        { en: 'WHERE (filtering rows)', bn: 'WHERE (সারি ফিল্টার করা)' },
        { en: 'ORDER BY (sorting output)', bn: 'ORDER BY (আউটপুট সাজানো)' }
      ],
      answer: 0,
      hint: {
        en: 'The engine must know where data originates before it can filter or select.',
        bn: 'ফিল্টার বা সিলেক্ট করার আগে ইঞ্জিনকে উৎস টেবিল খুঁজে নিতে হয়।'
      },
      explanation: {
        en: 'Logical query processing starts with FROM, determining the input table relation, followed by WHERE, GROUP BY, HAVING, SELECT, and finally ORDER BY.',
        bn: 'লজিক্যাল কোয়ারি প্রসেসিং সবার আগে FROM দিয়ে শুরু হয়, এরপর ধারাবাহিকভাবে WHERE, GROUP BY, HAVING, SELECT এবং সবশেষে ORDER BY চলে।'
      }
    },
    {
      id: 'sql-think-ex3',
      kind: 'mcq',
      topic: 'sql: Wildcard symbols in LIKE',
      question: {
        en: 'In SQL LIKE pattern matching, what wildcard character matches exactly one single character?',
        bn: 'এসকিউএল LIKE প্যাটার্ন ম্যাচিংয়ে কোন ওয়াইল্ডকার্ডটি ঠিক একটি একক অক্ষর মেলায়?'
      },
      options: [
        { en: 'Underscore (_)', bn: 'আন্ডারস্কোর (_)' },
        { en: 'Percent sign (%)', bn: 'পার্সেন্ট চিহ্ন (%)' },
        { en: 'Asterisk (*)', bn: 'অ্যাস্টারিস্ক (*)' },
        { en: 'Question mark (?)', bn: 'প্রশ্নবোধক চিহ্ন (?)' }
      ],
      answer: 0,
      hint: {
        en: '% matches any length; _ matches exactly one.',
        bn: '% যেকোনো দৈর্ঘ্যের জন্য; _ ঠিক একটির জন্য।'
      },
      explanation: {
        en: 'In standard SQL, the underscore (_) wildcard matches exactly one character, while percent (%) matches zero or more characters.',
        bn: 'স্ট্যান্ডার্ড এসকিউএলে আন্ডারস্কোর (_) ঠিক একটি অক্ষর মেলায়, আর পার্সেন্ট (%) শূন্য বা ততোধিক যেকোনো দৈর্ঘ্যের অক্ষর মেলায়।'
      }
    }
  ],
  quiz: {
    id: 'sql-fundamentals-quiz',
    title: { en: 'SQL Fundamentals Quiz', bn: 'এসকিউএল ফান্ডামেন্টালস কুইজ' },
    questions: [
      {
        id: 'sfq1',
        kind: 'mcq',
        topic: 'sql: Operator precedence',
        question: {
          en: 'Between AND and OR in SQL boolean expressions, which operator has higher precedence?',
          bn: 'এসকিউএল বুলিয়ান এক্সপ্রেশনে AND ও OR-এর মধ্যে কোনটির অগ্রাধিকার বেশি?'
        },
        options: [
          { en: 'AND binds tighter and evaluates before OR', bn: 'AND-এর অগ্রাধিকার বেশি এবং এটি OR-এর আগেই মূল্যায়িত হয়' },
          { en: 'OR has higher precedence', bn: 'OR-এর অগ্রাধিকার বেশি' },
          { en: 'Both have equal precedence left-to-right', bn: 'উভয়ের অগ্রাধিকার সমান' },
          { en: 'Precedence depends on table indexes', bn: 'ইনডেক্সের ওপর নির্ভর করে' }
        ],
        answer: 0,
        hint: {
          en: 'AND behaves like multiplication; OR behaves like addition.',
          bn: 'AND গুণের মতো কাজ করে; OR যোগের মতো কাজ করে।'
        },
        explanation: {
          en: 'SQL evaluates AND before OR unless parentheses are used. Explicit grouping with parentheses is recommended to avoid subtle logic bugs.',
          bn: 'ব্র্যাকেট না থাকলে এসকিউএল সর্বদা OR-এর আগে AND চালায়। তাই যৌক্তিক ত্রুটি এড়াতে স্পষ্ট ব্র্যাকেট ব্যবহার করাই শ্রেয়।'
        }
      },
      {
        id: 'sfq2',
        kind: 'mcq',
        topic: 'sql: SELECT DISTINCT behavior',
        question: {
          en: 'When writing SELECT DISTINCT col1, col2 FROM tbl, when are two rows considered duplicates?',
          bn: 'SELECT DISTINCT col1, col2 FROM tbl লিখলে দুটি সারি কখন ডুপ্লিকেট হিসেবে গণ্য হয়?'
        },
        options: [
          { en: 'Only when both col1 AND col2 values match identically between rows', bn: 'কেবল তখনই যখন উভয় সারিতে col1 এবং col2 উভয়ের মানই হুবহু মিলে যায়' },
          { en: 'If either col1 matches', bn: 'যদি শুধু col1 মেলে' },
          { en: 'If primary keys match', bn: 'যদি প্রাইমারি কি মেলে' },
          { en: 'Only if col2 is unique', bn: 'শুধু col2 ইউনিক হলে' }
        ],
        answer: 0,
        hint: {
          en: 'DISTINCT evaluates the full tuple combination.',
          bn: 'DISTINCT সম্পূর্ণ টাপলের মিলিত মান যাচাই করে।'
        },
        explanation: {
          en: 'DISTINCT considers the entire projected tuple; rows are removed only when all selected columns match another row simultaneously.',
          bn: 'DISTINCT নির্বাচিত সকল কলামের সম্পূর্ণ সেট বিবেচনা করে; সবগুলো কলামের মান অন্য সারির সাথে হুবহু মিললেই কেবল তা ডুপ্লিকেট হিসেবে বাদ পড়ে।'
        }
      },
      {
        id: 'sfq3',
        kind: 'mcq',
        topic: 'sql: Logical execution order',
        question: {
          en: 'Which clause is evaluated first during the logical execution of a SQL query?',
          bn: 'এসকিউএল কোয়ারির লজিক্যাল এক্সিকিউশনে কোন ক্লজটি সবার আগে মূল্যায়িত হয়?'
        },
        options: [
          { en: 'FROM (identifying candidate relations)', bn: 'FROM (উৎস টেবিল বা রিলেশন শনাক্তকরণ)' },
          { en: 'SELECT (computing projected columns)', bn: 'SELECT (প্রজেকশন কলাম তৈরি)' },
          { en: 'WHERE (row filtering)', bn: 'WHERE (সারি ফিল্টারিং)' },
          { en: 'ORDER BY (sorting output)', bn: 'ORDER BY (ফলাফল সাজানো)' }
        ],
        answer: 0,
        hint: {
          en: 'The engine must know where data originates before it can filter or transform it.',
          bn: 'ফিল্টার বা সাজানোর আগে ডাটা কোথা থেকে আসছে তা জানা প্রয়োজন।'
        },
        explanation: {
          en: 'Logical evaluation begins with FROM (and JOINs) to assemble the row universe, followed by WHERE, GROUP BY, HAVING, SELECT, and finally ORDER BY.',
          bn: 'লজিক্যাল মূল্যায়ন শুরু হয় FROM এবং JOIN দিয়ে সারির সম্পূর্ণ ক্ষেত্র প্রস্তুত করার মাধ্যমে, যার পর ধারাবাহিকভাবে WHERE, GROUP BY, HAVING, SELECT এবং ORDER BY কার্যকর হয়।'
        }
      },
      {
        id: 'sfq4',
        kind: 'mcq',
        topic: 'sql: Three-valued logic and NULL',
        question: {
          en: 'In SQL three-valued logic, what does the expression NULL = NULL evaluate to?',
          bn: 'এসকিউএলের তিন-মূল্যমান যুক্তিতে NULL = NULL এক্সপ্রেশনের ফলাফল কী?'
        },
        options: [
          { en: 'UNKNOWN (which is treated as false in WHERE filters)', bn: 'UNKNOWN (যা WHERE ফিল্টারে মিথ্যা বা বাদ হিসেবে গণ্য হয়)' },
          { en: 'TRUE', bn: 'TRUE' },
          { en: 'FALSE', bn: 'FALSE' },
          { en: 'Syntax Error', bn: 'সিনট্যাক্স এরর' }
        ],
        answer: 0,
        hint: {
          en: 'NULL represents an unknown state, not a concrete comparable value.',
          bn: 'NULL কোনো নিশ্চিত মান নয় বরং অজানা অবস্থা নির্দেশ করে।'
        },
        explanation: {
          en: 'Because NULL represents missing or unknown data, comparing it with equality yields UNKNOWN. Only IS NULL or IS NOT NULL can test for nullness safely.',
          bn: 'NULL কোনো সুনির্দিষ্ট মান নয় বরং অজানা তথ্য নির্দেশ করে, তাই সমান চিহ্নে এর তুলনা UNKNOWN ফলাফল দেয়। এর উপস্থিতি যাচাইয়ে কেবল IS NULL বা IS NOT NULL ব্যবহার করতে হয়।'
        }
      }
    ]
  }
};
