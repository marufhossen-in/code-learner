import type { Lesson } from '../../../lib/types';

export const censusLedgerLesson: Lesson = {
  slug: 'the-census-ledger',
  tech: 'sql',
  title: {
    en: 'SQL Aggregation: COUNT, SUM, AVG, GROUP BY, HAVING & CASE Expressions',
    bn: 'এসকিউএল এগ্রিগেশন: COUNT, SUM, AVG, GROUP BY, HAVING ও CASE এক্সপ্রেশন'
  },
  summary: {
    en: 'Master summary analytics and grouping across 10 structured topics, including scalar aggregation, GROUP BY, and HAVING filters. Learn COUNT variations, conditional branching with CASE WHEN, and pivot reporting.',
    bn: 'স্কেলার এগ্রিগেশন, GROUP BY এবং HAVING ফিল্টারিং সহ 10 টি সুসংগঠিত পয়েন্টে ডেটা বিশ্লেষণ আয়ত্ত করুন। জানুন COUNT এর বিভিন্ন রূপ, CASE WHEN দিয়ে শর্তযুক্ত লজিক এবং পিভট রিপোর্টিং কৌশল।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-join-hall',
    title: { en: 'SQL Relational Joins: INNER, LEFT, RIGHT, FULL & UNION Sets', bn: 'এসকিউএল রিলেশনাল জয়েন: INNER, LEFT, RIGHT, FULL ও UNION সেট' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Essence of Aggregation: Many Rows into One Value', bn: '১. এগ্রিগেশনের মূল কথা: বহু সারি থেকে একটি সারাংশ মান' } },
    {
      type: 'para',
      text: {
        en: 'Aggregate functions process a set of rows and compute a single summary value. Without a GROUP BY clause, an aggregate function collapses the entire table into a single output row. Crucially, SQL aggregate functions (except COUNT(*)) automatically ignore NULL values during calculation.',
        bn: 'এগ্রিগেট ফাংশন একাধিক সারির ওপর কাজ করে একটিমাত্র সারসংক্ষেপ ফলাফল তৈরি করে। GROUP BY ছাড়া এগ্রিগেট ফাংশন চালালে পুরো টেবিলের সব সারি মিলে একটিমাত্র ফলাফল পাওয়া যায়। বিশেষভাবে মনে রাখবেন, COUNT(*) ছাড়া বাকি সব এগ্রিগেট ফাংশন হিসাব করার সময় স্বয়ংক্রিয়ভাবে NULL মানগুলোকে বাদ দিয়ে দেয়।'
      }
    },
    {
      type: 'visual',
      id: 'database'
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Computing global metrics across the entire sales ledger
SELECT 
    COUNT(*) AS total_orders,
    SUM(order_total) AS total_revenue,
    AVG(order_total) AS average_ticket_size
FROM orders;

-- Output:
-- 150 | 450000.00 | 3000.00
-- Result: Entire orders table collapsed into 1 scalar summary row`,
      caption: {
        en: 'Global aggregates summarize the entire relation into a single scalar row.',
        bn: 'গ্লোবাল এগ্রিগেট পুরো রিলেশনকে একটিমাত্র সারসংক্ষেপ সারিতে রূপান্তর করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Entity Counting: COUNT(*), COUNT(col), and COUNT(DISTINCT)', bn: '২. উপাদান গণনা: COUNT(*), COUNT(col) ও COUNT(DISTINCT)' } },
    {
      type: 'para',
      text: {
        en: 'COUNT(*) counts every row in the result set regardless of NULLs. In contrast, COUNT(column_name) tallies only rows where that target field contains a valid value. Adding the DISTINCT keyword filters out repeated entries before tallying.',
        bn: 'COUNT(*) কোনো কলামের মান NULL আছে কি না তা না দেখে মোট সারির সংখ্যা গুনে ফেলে। অন্যদিকে COUNT(column_name) কেবল সেই সারিগুলো গুনে যেগুলোতে নির্দিষ্ট কলামে বৈধ মান রয়েছে। আর DISTINCT যুক্ত করলে গণনার আগেই পুনরাবৃত্তিগুলো বাদ পড়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Comparing counting behaviors across 100 customer records:
SELECT 
    COUNT(*) AS total_customer_rows,             -- Counts all rows (e.g. 100)
    COUNT(referral_code) AS customers_referred,  -- Ignores NULLs (e.g. 40)
    COUNT(DISTINCT country) AS unique_countries  -- Counts unique countries (e.g. 8)
FROM customers;

-- Output:
-- 100 | 40 | 8
-- Result: NULLs excluded in column count; duplicates purged in DISTINCT count`,
      caption: {
        en: 'COUNT(*) counts rows; COUNT(col) ignores nulls; COUNT(DISTINCT col) counts unique values.',
        bn: 'COUNT(*) সারি গুনে; COUNT(col) নাল বাদ দেয়; COUNT(DISTINCT col) ইউনিক মান গুনে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Numerical Summaries: SUM() and AVG() Mechanics', bn: '৩. গাণিতিক হিসাব: SUM() ও AVG() ব্যবহারের নিয়ম' } },
    {
      type: 'para',
      text: {
        en: 'SUM() adds all non-NULL numerical values in a column. AVG() computes the arithmetic mean by dividing the sum by the count of non-NULL rows. If every row in a group contains NULL, both SUM and AVG evaluate to NULL, never zero.',
        bn: 'SUM() কোনো কলামের সকল নন-নাল সংখ্যামানের যোগফল বের করে। AVG() যোগফলকে মোট নন-নাল সারির সংখ্যা দিয়ে ভাগ করে গড় নির্ণয় করে। যদি কোনো গ্রুপের সব সারির মানই NULL হয়, তবে SUM এবং AVG উভয়ের ফলাফলই শূন্য না হয়ে NULL হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Calculating payroll expenses and average engineer compensation
SELECT 
    SUM(salary_usd) AS total_payroll_expense,
    ROUND(AVG(salary_usd), 2) AS average_salary
FROM employees
WHERE department = 'Engineering';

-- Output:
-- 360000.00 | 72000.00
-- Result: Total wage expense and average computed across 5 engineering staff`,
      caption: {
        en: 'SUM and AVG skip NULL rows automatically, computing true statistical averages.',
        bn: 'SUM ও AVG স্বয়ংক্রিয়ভাবে নাল সারি বাদ দিয়ে প্রকৃত গড় নির্ণয় করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Boundary Detection: MIN() and MAX() Across Data Types', bn: '৪. প্রান্তিক মান নির্ণয়: সংখ্যা, তারিখ ও টেক্সটে MIN() এবং MAX()' } },
    {
      type: 'para',
      text: {
        en: 'MIN() and MAX() find the lowest and highest values in a column. They work seamlessly across all standard SQL data types: on numbers they return numeric extremes; on timestamps they yield the earliest and latest dates; on text strings they return the first and last alphabetical entries.',
        bn: 'MIN() এবং MAX() কোনো কলামের সর্বনিম্ন ও সর্বোচ্চ মান খুঁজে বের করে। এগুলো সব ডেটা টাইপেই নিখুঁতভাবে কাজ করে: সংখ্যার ক্ষেত্রে ক্ষুদ্রতম ও বৃহত্তম মান; তারিখের ক্ষেত্রে প্রাচীনতম ও সাম্প্রতিকতম সময়; আর টেক্সট স্ট্রিংয়ের ক্ষেত্রে বর্ণমালার প্রথম ও শেষ শব্দ প্রদান করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Discovering temporal and price boundaries
SELECT 
    MIN(unit_price) AS cheapest_item,
    MAX(unit_price) AS most_expensive_item,
    MIN(created_at) AS first_order_date,
    MAX(created_at) AS most_recent_order_date
FROM store_orders;

-- Output:
-- 15.00 | 1299.99 | 2026-01-01 08:30:00 | 2026-09-26 14:15:00
-- Result: Extremes identified across numeric currency and timestamp domains`,
      caption: {
        en: 'MIN and MAX operate symmetrically across numbers, timestamps, and lexical strings.',
        bn: 'MIN ও MAX সংখ্যা, টাইমস্ট্যাম্প ও টেক্সট স্ট্রিং সব ক্ষেত্রেই স্বাভাবিকভাবে কাজ করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Partitioning Dimensions: The GROUP BY Clause', bn: '৫. ক্যাটাগরি বিভাজন: GROUP BY ক্লজের ব্যবহার' } },
    {
      type: 'para',
      text: {
        en: 'The GROUP BY clause separates rows into distinct sub-buckets based on identical values in one or more grouping columns. Aggregate functions are then computed independently for each individual bucket, returning one summary row per group.',
        bn: 'GROUP BY ক্লজ এক বা একাধিক কলামের অভিন্ন মানের ওপর ভিত্তি করে পুরো টেবিলকে আলাদা আলাদা সাব-গ্রুপ বা ক্যাটাগরিতে ভাগ করে ফেলে। এরপর প্রতিটি গ্রুপের জন্য আলাদাভাবে এগ্রিগেট ফাংশন চালিত হয় এবং প্রতি গ্রুপের বিপরীতে একটি করে সামারি সারি পাওয়া যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Grouping transactions by region and payment channel
SELECT 
    region,
    payment_method,
    COUNT(*) AS total_transactions,
    SUM(amount_bdt) AS gross_volume
FROM payment_logs
GROUP BY region, payment_method;

-- Output:
-- Dhaka      | bKash | 1200 | 6000000.00
-- Dhaka      | Card  | 450  | 4500000.00
-- Chittagong | bKash | 680  | 3400000.00
-- Result: Multi-column aggregation grouped across region and payment method`,
      caption: {
        en: 'GROUP BY aggregates data along multiple categorical dimensions simultaneously.',
        bn: 'GROUP BY একসাথে একাধিক ক্যাটাগরি অনুযায়ী ডেটা সুন্দরভাবে গ্রুপ করে ফেলে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The Golden Rule of Grouping: Non-Aggregated Columns', bn: '৬. গ্রুপিংয়ের সুবর্ণ নিয়ম: নন-এগ্রিগেটেড কলাম সংক্রান্ত বাধ্যবাধকতা' } },
    {
      type: 'para',
      text: {
        en: 'Standard SQL enforces a strict syntactic rule: Every column in the SELECT list that is NOT inside an aggregate function MUST be included in the GROUP BY clause. Attempting to select a bare column that has multiple possible rows within a group is mathematically ambiguous and raises a SQL syntax error in compliant databases.',
        bn: 'স্ট্যান্ডার্ড এসকিউএলে একটি কঠোর নিয়ম রয়েছে: SELECT তালিকায় থাকা যে কলামটি কোনো এগ্রিগেট ফাংশনের ভেতরে নেই, সেটিকে বাধ্যতামূলকভাবে GROUP BY ক্লজে উল্লেখ করতে হবে। একটি গ্রুপের ভেতরে একাধিক ভিন্ন মান থাকতে পারে এমন কোনো কলামকে বাইরে খোলা রাখলে ডাটাবেসে সিনট্যাক্স এরর তৈরি হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- ❌ ILLEGAL IN STANDARD SQL: customer_name is ambiguous inside department group!
-- SELECT department, customer_name, COUNT(*) FROM orders GROUP BY department;

-- ✅ VALID: All non-aggregate columns appear explicitly in GROUP BY
SELECT 
    department, 
    job_level,
    AVG(base_salary) AS avg_level_salary
FROM employees
GROUP BY department, job_level;

-- Output:
-- Engineering | Senior | 120000.00
-- Engineering | Junior | 65000.00
-- Result: Fully deterministic grouping complying with ANSI SQL standards`,
      caption: {
        en: 'Non-aggregated projection columns must be listed in GROUP BY to ensure deterministic results.',
        bn: 'সুনির্দিষ্ট ফলাফল নিশ্চিত করতে নন-এগ্রিগেটেড কলামগুলো অবশ্যই GROUP BY-তে থাকতে হবে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Group-Level Filtering: HAVING vs Pre-Group WHERE', bn: '৭. গ্রুপ ফিল্টারিং: HAVING বনাম প্রি-গ্রুপ WHERE' } },
    {
      type: 'para',
      text: {
        en: 'WHERE filters individual base rows BEFORE grouping occurs; it CANNOT reference aggregate functions like SUM(sales) because groups do not exist yet in the logical pipeline. The HAVING clause executes AFTER grouping and evaluates conditions directly against aggregated summary metrics.',
        bn: 'WHERE ক্লজ গ্রুপিং করার আগেই মূল টেবিলের সারি ফিল্টার করে; এটি কখনোই SUM(sales)-এর মতো এগ্রিগেট ফাংশন পরীক্ষা করতে পারে না কারণ লজিক্যাল পাইপলাইনে তখনো গ্রুপ তৈরিই হয়নি। আর HAVING ক্লজ গ্রুপ তৈরি হওয়ার পর চলে এবং এটি সরাসরি এগ্রিগেট ফলের ওপর শর্ত প্রয়োগ করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Find departments having more than 5 members with average salary exceeding $80,000
SELECT 
    dept_name,
    COUNT(*) AS member_count,
    ROUND(AVG(salary), 2) AS avg_sal
FROM staff
WHERE is_active = 1              -- Stage 2: Pre-filter active individual rows
GROUP BY dept_name               -- Stage 3: Bucket into departments
HAVING COUNT(*) > 5              -- Stage 4: Post-filter buckets by size
   AND AVG(salary) > 80000.00;

-- Output:
-- Cloud Infrastructure | 8 | 94500.00
-- Security Operations  | 6 | 88200.00
-- Result: 2 departments qualifying under both group-level metric thresholds`,
      caption: {
        en: 'WHERE filters rows before aggregation; HAVING filters groups after aggregation.',
        bn: 'WHERE এগ্রিগেশনের আগে সারি ফিল্টার করে; HAVING এগ্রিগেশনের পরে গ্রুপ ফিল্টার করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Conditional Expressions: The SQL CASE WHEN Statement', bn: '৮. শর্তযুক্ত এক্সপ্রেশন: এসকিউএল CASE WHEN স্টেটমেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'The CASE expression provides inline if-then-else logic within SQL queries. It evaluates boolean conditions sequentially and returns the corresponding value for the first TRUE branch. If no branch matches, the optional ELSE value is returned; if ELSE is omitted and no branch matches, it evaluates to NULL.',
        bn: 'CASE এক্সপ্রেশন এসকিউএল কোয়ারির ভেতরে সরাসরি if-then-else লজিক প্রয়োগের সুযোগ দেয়। এটি ধারাবাহিকভাবে শর্তগুলো যাচাই করে এবং প্রথম সত্য শর্তটির মান রিটার্ন করে। কোনো শর্তই সত্য না হলে ঐচ্ছিক ELSE মান ফেরত দেয়; আর ELSE না দিলে ফলাফল স্বয়ংক্রিয়ভাবে NULL হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Categorizing order values dynamically into tiers
SELECT 
    order_id,
    order_amount,
    CASE 
        WHEN order_amount >= 10000 THEN 'VIP Tier'
        WHEN order_amount >= 3000  THEN 'Standard Tier'
        ELSE 'Micro Tier'
    END AS customer_segment
FROM sales_records;

-- Output:
-- 101 | 14500.00 | VIP Tier
-- 102 | 4200.00  | Standard Tier
-- 103 | 850.00   | Micro Tier
-- Result: Discrete customer tiers categorized via inline CASE expressions`,
      caption: {
        en: 'CASE WHEN provides robust conditional branching for data transformation.',
        bn: 'CASE WHEN ডেটা রূপান্তরের জন্য শক্তিশালী শর্তযুক্ত ব্রাঞ্চিং সুবিধা দেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Pivot Reporting: Conditional Aggregation via SUM(CASE)', bn: '৯. পিভট রিপোর্টিং: SUM(CASE) দিয়ে কন্ডিশনাল এগ্রিগেশন' } },
    {
      type: 'para',
      text: {
        en: 'Combining aggregate functions with CASE expressions unlocks Conditional Aggregation. This technique pivots vertical category rows into horizontal summary columns in a single table pass, commonly used for financial reconciliations and executive dashboard metrics.',
        bn: 'এগ্রিগেট ফাংশনের সাথে CASE এক্সপ্রেশন মিলিয়ে কন্ডিশনাল এগ্রিগেশন তৈরি করা হয়। এই চমৎকার কৌশলের মাধ্যমে উলম্ব সারির ডেটাকে এক ক্লিকেই অনুভূমিক সামারি কলামে রূপান্তর (পিভট) করা যায়, যা আর্থিক হিসাব ও ড্যাশবোর্ড তৈরির জন্য অত্যন্ত জনপ্রিয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Pivoting order counts and revenues by status into column headers
SELECT 
    branch_id,
    COUNT(*) AS total_orders,
    SUM(CASE WHEN order_status = 'completed' THEN amount ELSE 0 END) AS completed_rev,
    SUM(CASE WHEN order_status = 'refunded'  THEN amount ELSE 0 END) AS refunded_rev,
    COUNT(CASE WHEN order_status = 'refunded' THEN 1 END) AS refund_count
FROM branch_sales
GROUP BY branch_id;

-- Output:
-- 1 | 85 | 320000.00 | 15000.00 | 3
-- 2 | 60 | 210000.00 | 5000.00  | 1
-- Result: Financial dashboard generated in a single high-efficiency aggregation pass`,
      caption: {
        en: 'Conditional aggregation pivots relational status values into horizontal metrics.',
        bn: 'কন্ডিশনাল এগ্রিগেশন স্ট্যাটাস ভ্যালুগুলোকে অনুভূমিক মেট্রিক্সে পিভট করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Null Sanitization: COALESCE() and NULLIF()', bn: '১০. নাল সুরক্ষা: COALESCE() এবং NULLIF() ফাংশন' } },
    {
      type: 'para',
      text: {
        en: 'COALESCE(val1, val2, ... valN) inspects an arbitrary list of arguments and returns the FIRST non-NULL value, providing safe fallback values for missing records. The companion function NULLIF(expr1, expr2) returns NULL if both arguments are equal; wrapping division denominators in NULLIF(denominator, 0) prevents fatal division-by-zero database crashes.',
        bn: 'COALESCE() একাধিক আর্গুমেন্টের তালিকা থেকে সর্বপ্রথম যেটিতে নন-নাল মান পায় সেটি ফেরত দেয়, যা অনুপস্থিত তথ্যে ডিফল্ট মান বসাতে ব্যবহৃত হয়। আর NULLIF(expr1, expr2) উভয় আর্গুমেন্ট সমান হলে ফলাফল NULL বানিয়ে দেয়; ভাগের হরে NULLIF(denominator, 0) বসালে শূন্য দিয়ে ভাগের কারণে ডাটাবেস ক্র্যাশ হওয়া স্থায়ীভাবে বন্ধ হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 1. Fallback replacement with COALESCE:
SELECT 
    customer_id,
    COALESCE(phone_number, mobile_number, 'NO_PHONE') AS contact_phone
FROM customer_profiles;

-- 2. Division-by-zero defense using NULLIF:
SELECT 
    campaign_id,
    clicks,
    impressions,
    -- If impressions = 0, NULLIF returns NULL, preventing division by zero!
    ROUND(clicks * 100.0 / NULLIF(impressions, 0), 2) AS click_through_rate
FROM ad_campaigns;

-- Output:
-- 101 | 01711000000
-- 102 | NO_PHONE
-- CampA | 250 | 10000 | 2.50
-- CampB | 0   | 0     | NULL
-- Result: Protected against division crashes; missing contact details populated`,
      caption: {
        en: 'NULLIF prevents division-by-zero crashes; COALESCE provides deterministic fallbacks.',
        bn: 'NULLIF শূন্য দিয়ে ভাগের ক্র্যাশ ঠেকায়; COALESCE নিশ্চিত ডিফল্ট মান দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'sql-cen-ex1',
      kind: 'predict',
      topic: 'sql: WHERE vs HAVING for aggregates',
      question: {
        en: 'Can an aggregate function like SUM(amount) be used directly inside a WHERE clause in standard SQL?',
        bn: 'স্ট্যান্ডার্ড এসকিউএলে SUM(amount)-এর মতো এগ্রিগেট ফাংশন কি সরাসরি WHERE ক্লজের ভেতর ব্যবহার করা যায়?'
      },
      code: `/* SQL aggregate in WHERE clause check */
/* SELECT dept FROM emp WHERE SUM(salary) > 50000 */`,
      answer: 'no',
      accept: ['no', 'false', 'No', 'cannot'],
      hint: {
        en: 'WHERE filters before grouping; HAVING filters after grouping.',
        bn: 'WHERE গ্রুপিংয়ের আগে ফিল্টার করে; HAVING গ্রুপিংয়ের পরে ফিল্টার করে।'
      },
      explanation: {
        en: 'WHERE clauses execute before groups are formed, so aggregate functions are illegal in WHERE. Use the HAVING clause to filter on aggregated results.',
        bn: 'গ্রুপ তৈরি হওয়ার আগেই WHERE ক্লজ চলে, তাই WHERE-এ এগ্রিগেট ফাংশন নিষিদ্ধ। এগ্রিগেট ফলাফলে ফিল্টার করার জন্য HAVING ক্লজ ব্যবহার করতে হয়।'
      }
    },
    {
      id: 'sql-cen-ex2',
      kind: 'mcq',
      topic: 'sql: COALESCE behavior',
      question: {
        en: 'What does COALESCE(NULL, NULL, "Fallback", "Secondary") evaluate to?',
        bn: 'COALESCE(NULL, NULL, "Fallback", "Secondary") এক্সপ্রেশনের ফলাফল কী হবে?'
      },
      options: [
        { en: '"Fallback" (the first non-NULL argument in the list)', bn: '"Fallback" (তালিকায় থাকা সর্বপ্রথম নন-নাল আর্গুমেন্ট)' },
        { en: 'NULL', bn: 'NULL' },
        { en: '"Secondary"', bn: '"Secondary"' },
        { en: 'An error is thrown', bn: 'একটি এরর ঘটবে' }
      ],
      answer: 0,
      hint: {
        en: 'COALESCE scans left-to-right and returns the first non-NULL value.',
        bn: 'COALESCE বাম থেকে ডানে দেখে প্রথম নন-নাল মানটি ফেরত দেয়।'
      },
      explanation: {
        en: 'COALESCE returns the very first non-NULL expression from its argument list, resolving to "Fallback".',
        bn: 'COALESCE তার আর্গুমেন্ট তালিকা থেকে সর্বপ্রথম যেটিতে নন-নাল মান পায় সেটিই ফেরত দেয়, তাই এখানে "Fallback" হবে।'
      }
    },
    {
      id: 'sql-cen-ex3',
      kind: 'mcq',
      topic: 'sql: COUNT(*) vs COUNT(col)',
      question: {
        en: 'If a table has 10 rows and column discount has 3 NULL entries, what does COUNT(discount) return?',
        bn: 'একটি টেবিলে ১০টি সারি আছে এবং discount কলামে ৩টি NULL মান আছে; তবে COUNT(discount) কী রিটার্ন করবে?'
      },
      options: [
        { en: '7 (only non-NULL values are counted)', bn: '7 (কেবল নন-নাল মানগুলো গণনা করা হয়)' },
        { en: '10', bn: '10' },
        { en: '3', bn: '3' },
        { en: '0', bn: '0' }
      ],
      answer: 0,
      hint: {
        en: 'COUNT(column) excludes NULL rows from its tally.',
        bn: 'COUNT(কলাম) গণনা থেকে নাল সারিগুলো বাদ দেয়।'
      },
      explanation: {
        en: 'COUNT(column) explicitly ignores NULL rows. 10 total rows minus 3 NULL rows equals 7 counted values.',
        bn: 'COUNT(কলাম) নাল মান বাদ দেয়। মোট ১০টি সারি থেকে ৩টি নাল বাদ দিলে বাকি ৭টি মান গণনা হয়।'
      }
    }
  ],
  quiz: {
    id: 'sql-aggregation-quiz',
    title: { en: 'SQL Aggregates & Grouping Quiz', bn: 'এসকিউএল এগ্রিগেটস ও গ্রুপিং কুইজ' },
    questions: [
      {
        id: 'csq1',
        kind: 'mcq',
        topic: 'sql: Division by zero prevention',
        question: {
          en: 'How does NULLIF(divisor, 0) prevent division-by-zero crashes in queries?',
          bn: 'NULLIF(divisor, 0) কীভাবে কোয়ারিতে শূন্য দিয়ে ভাগের ক্র্যাশ প্রতিরোধ করে?'
        },
        options: [
          { en: 'If divisor is 0, NULLIF returns NULL; dividing by NULL yields NULL safely instead of an error', bn: 'যদি ভাজক 0 হয় তবে NULLIF সেটিকে NULL বানিয়ে দেয়; আর NULL দিয়ে ভাগ করলে ক্র্যাশ না করে নিরাপদে NULL ফেরত আসে' },
          { en: 'It converts 0 to 1', bn: 'এটি 0 কে 1 বানায়' },
          { en: 'It aborts the query immediately', bn: 'এটি কোয়ারি বন্ধ করে দেয়' },
          { en: 'It raises an automatic rollback', bn: 'এটি রোলব্যাক ঘটায়' }
        ],
        answer: 0,
        hint: {
          en: 'In SQL arithmetic, anything divided by NULL evaluates to NULL.',
          bn: 'এসকিউএলে যেকোনো সংখ্যাকে NULL দিয়ে ভাগ করলে ফলাফল নিরাপদভাবে NULL হয়।'
        },
        explanation: {
          en: 'When the divisor equals 0, NULLIF turns it into NULL. Any number divided by NULL safely evaluates to NULL, preventing fatal database arithmetic exceptions.',
          bn: 'ভাজক 0 হলে NULLIF সেটিকে NULL করে দেয়। এসকিউএলে যেকোনো সংখ্যাকে NULL দিয়ে ভাগ করলে ডাটাবেস ক্র্যাশ না করে ফলাফল স্বাভাবিকভাবে NULL হয়।'
        }
      },
      {
        id: 'csq2',
        kind: 'mcq',
        topic: 'sql: Group by column constraint',
        question: {
          en: 'What occurs if you SELECT a bare column that is neither in an aggregate function nor in the GROUP BY clause?',
          bn: 'SELECT তালিকায় এমন কোনো কলাম রাখলে যা এগ্রিগেট ফাংশনেও নেই এবং GROUP BY-তেও নেই, তখন কী ঘটে?'
        },
        options: [
          { en: 'Standard SQL raises a syntax error because the unaggregated column is non-deterministic', bn: 'স্ট্যান্ডার্ড এসকিউএল সিনট্যাক্স এরর দেয় কারণ নন-এগ্রিগেটেড কলামটি দ্ব্যর্থহীন থাকে না' },
          { en: 'The database automatically deletes the column', bn: 'ডাটাবেস কলাম মুছে ফেলে' },
          { en: 'It defaults to the first alphabetical row', bn: 'বর্ণমালার প্রথম সারি নেয়' },
          { en: 'It always returns zero', bn: 'সবসময় শূন্য ফেরত দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'ANSI SQL demands deterministic grouping.',
          bn: 'ANSI এসকিউএল সুনির্দিষ্ট গ্রুপিং দাবি করে।'
        },
        explanation: {
          en: 'In ANSI SQL, every non-aggregated column in the SELECT projection list must appear in the GROUP BY clause to avoid non-deterministic result sets.',
          bn: 'ANSI এসকিউএল অনুসারে প্রজেকশনের প্রতিটি নন-এগ্রিগেটেড কলামকে অবশ্যই GROUP BY-তে থাকতে হয় যাতে কোনো বিভ্রান্তিকর অস্পষ্ট ফলাফল তৈরি না হয়।'
        }
      },
      {
        id: 'csq3',
        kind: 'mcq',
        topic: 'sql: WHERE vs HAVING',
        question: {
          en: 'What is the fundamental difference between the WHERE clause and the HAVING clause?',
          bn: 'WHERE ক্লজ এবং HAVING ক্লজের মধ্যে মৌলিক পার্থক্য কী?'
        },
        options: [
          { en: 'WHERE filters individual candidate rows before grouping; HAVING filters aggregated bucket rows after grouping', bn: 'WHERE গ্রুপিংয়ের আগে একক সারি ফিল্টার করে; আর HAVING গ্রুপিংয়ের পরে সমষ্টিগত ফলাফল ফিল্টার করে' },
          { en: 'WHERE is only used for text strings while HAVING is for numbers', bn: 'WHERE কেবল টেক্সটের জন্য আর HAVING কেবল সংখ্যার জন্য' },
          { en: 'HAVING runs before FROM, while WHERE runs after SELECT', bn: 'HAVING ক্লজ FROM-এর আগে চলে আর WHERE চলে SELECT-এর পরে' },
          { en: 'There is no operational difference between the two', bn: 'উভয়ের মাঝে কোনো কার্যকরী পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: 'Think about query execution pipeline stages.',
          bn: 'কোয়ারি এক্সিকিউশন পাইপলাইনের ধাপগুলোর কথা ভাবুন।'
        },
        explanation: {
          en: 'WHERE filters input rows at Stage 2 before GROUP BY occurs. HAVING evaluates aggregated properties (like COUNT or SUM) at Stage 4 after groupings have been formed.',
          bn: 'WHERE ক্লজ ধাপ 2 এ গ্রুপিংয়ের আগেই ইনপুট সারি ছাঁটাই করে ফেলে। অন্যদিকে HAVING ক্লজ ধাপ 4 এ দল গঠনের পর এগ্রিগেট ফলাফলের ওপর শর্ত আরোপ করে।'
        }
      },
      {
        id: 'csq4',
        kind: 'mcq',
        topic: 'sql: Aggregate functions and NULL values',
        question: {
          en: 'How do standard aggregate functions such as AVG() handle NULL values in a column?',
          bn: 'AVG()-এর মতো সাধারণ এগ্রিগেট ফাংশনগুলো কোনো কলামের NULL মান কীভাবে পরিচালনা করে?'
        },
        options: [
          { en: 'They completely ignore NULL rows in both numerator sum and denominator count', bn: 'তারা লবের যোগফল এবং হরের মোট সংখ্যা উভয় থেকেই NULL মানগুলো সম্পূর্ণ বাদ দেয়' },
          { en: 'They treat NULL values as 0 and include them in the count', bn: 'তারা NULL কে 0 ধরে মোট সংখ্যায় অন্তর্ভুক্ত করে' },
          { en: 'They throw a runtime arithmetic exception', bn: 'তারা একটি রানটাইম এরর তৈরি করে' },
          { en: 'The entire aggregate expression immediately evaluates to NULL', bn: 'সম্পূর্ণ এগ্রিগেট এক্সপ্রেশনটি সাথে সাথে NULL হয়ে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Only COUNT(*) counts rows regardless of nullability.',
          bn: 'কেবল COUNT(*) নাল বিবেচনা না করে সকল সারি গুনে থাকে।'
        },
        explanation: {
          en: 'Statistical aggregates (AVG, SUM, MIN, MAX) automatically ignore NULL rows. If 4 rows contain values 10, 20, NULL, and 30, AVG() returns 20 (60 divided by 3, not 4).',
          bn: 'পরিসংখ্যানভিত্তিক এগ্রিগেট ফাংশনগুলো স্বয়ংক্রিয়ভাবে NULL মান বাদ দেয়। যদি 4 টি সারির মান 10, 20, NULL এবং 30 হয়, তবে AVG() ফলাফল দেবে 20 (60 কে 3 দিয়ে ভাগ, 4 দিয়ে নয়)।'
        }
      }
    ]
  }
};
