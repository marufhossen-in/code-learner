import type { Lesson } from '../../../lib/types';

export const windowGalleryLesson: Lesson = {
  slug: 'the-window-gallery',
  tech: 'sql',
  title: {
    en: 'SQL Window Functions: OVER, PARTITION BY, Ranking, Offsets & CTEs',
    bn: 'এসকিউএল উইন্ডো ফাংশন: OVER, PARTITION BY, র‍্যাংকিং, অফসেট ও CTE'
  },
  summary: {
    en: 'Master analytical SQL across 10 structured topics, from OVER partitions to ranking and offsets. Learn ROW_NUMBER, RANK, DENSE_RANK, moving averages, and CTE modularization with WITH.',
    bn: 'OVER পার্টিশন থেকে শুরু করে র‍্যাংকিং ও অফসেট পর্যন্ত 10 টি সুসংগঠিত পয়েন্টে অ্যানালিটিক্যাল এসকিউএল আয়ত্ত করুন। জানুন ROW_NUMBER, RANK, DENSE_RANK, মুভিং গড় এবং WITH ক্লজ দিয়ে CTE মডিউলারাইজেশন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-transaction-vault',
    title: { en: 'SQL Transactions: ACID Properties, Isolation Levels & Locking', bn: 'এসকিউএল ট্রানজ্যাকশন: ACID বৈশিষ্ট্য, আইসোলেশন লেভেল ও লকিং' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Window Functions vs GROUP BY: Aggregation Without Row Collapse', bn: '১. উইন্ডো ফাংশন বনাম GROUP BY: সারি না ভেঙে এগ্রিগেশন' } },
    {
      type: 'para',
      text: {
        en: 'A standard GROUP BY collapses rows, returning only one summary row per category. Window Functions perform calculations across related sets of rows, but importantly retain every individual row in the output! This enables calculating percentages of totals, running balances, and rankings alongside row-level details.',
        bn: 'সাধারণ GROUP BY টেবিলের অনেকগুলো সারিকে ভেঙে প্রতি গ্রুপের জন্য মাত্র একটি সামারি সারি ফেরত দেয়। আর Window Function সম্পর্কিত সারির সেটের ওপর হিসাব ঠিকই করে, কিন্তু প্রতিটি স্বতন্ত্র সারিকে তার আগের মতোই বহাল রাখে! এর ফলে প্রতিটি সারির পাশে মোট হিসাবের শতকরা হার বা চলমান ব্যালেন্স খুব সহজে দেখানো যায়।'
      }
    },
    {
      type: 'visual',
      id: 'database'
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Retaining every employee while computing their department average alongside
SELECT 
    employee_id,
    first_name,
    department,
    salary,
    -- Window function: computes department average without collapsing rows!
    ROUND(AVG(salary) OVER(PARTITION BY department), 2) AS dept_avg_salary
FROM employees;

-- Output:
-- 101 | Tanvir | Engineering | 80000.00 | 75000.00
-- 102 | Nadia  | Engineering | 70000.00 | 75000.00
-- 103 | Shila  | Marketing   | 60000.00 | 60000.00
-- Result: Every individual row preserved alongside aggregated departmental context`,
      caption: {
        en: 'Window functions preserve individual row granularity while computing group-level metrics.',
        bn: 'উইন্ডো ফাংশন প্রতিটি সারির নিজস্ব সত্ত্বা ধরে রেখেই গ্রুপের মেট্রিক্স হিসাব করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Anatomy of the OVER Clause: PARTITION BY', bn: '২. OVER ক্লজের গঠন: PARTITION BY দিয়ে উইন্ডো নির্ধারণ' } },
    {
      type: 'para',
      text: {
        en: 'The OVER clause instructs the database that a function is operating as a window function. The PARTITION BY sub-clause divides the result set into distinct partitions. Calculations reset automatically at the boundary of each partition, operating independently per category.',
        bn: 'OVER ক্লজটি ডাটাবেসকে নির্দেশ দেয় যে সংশ্লিষ্ট ফাংশনটি একটি উইন্ডো ফাংশন হিসেবে কাজ করছে। আর PARTITION BY সাব-ক্লজ পুরো ফলাফলকে আলাদা আলাদা পার্টিশনে ভাগ করে ফেলে। প্রতিটি নতুন পার্টিশনে পৌঁছানোর সাথে সাথে হিসাব স্বয়ংক্রিয়ভাবে পুনরায় শূন্য থেকে শুরু হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Computing each branch total sales volume alongside each transaction
SELECT 
    transaction_id,
    branch_name,
    amount_bdt,
    SUM(amount_bdt) OVER(PARTITION BY branch_name) AS branch_total_volume
FROM store_sales;

-- Output:
-- 501 | Dhanmondi | 1500.00 | 6500.00
-- 502 | Dhanmondi | 5000.00 | 6500.00
-- 503 | Gulshan   | 9000.00 | 9000.00
-- Result: Partition boundary resets calculations cleanly when branch changes`,
      caption: {
        en: 'PARTITION BY isolates calculation boundaries per category without discarding individual events.',
        bn: 'PARTITION BY প্রতিটি ক্যাটাগরির হিসাব আলাদা রাখে কিন্তু কোনো সারি বাদ দেয় না।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. In-Window Sorting: The ORDER BY Sub-Clause', bn: '৩. উইন্ডোর ভেতরে সাজানো: ORDER BY সাব-ক্লজের ব্যবহার' } },
    {
      type: 'para',
      text: {
        en: 'Adding an ORDER BY clause INSIDE the OVER() parentheses determines the physical sequence in which rows within each partition are evaluated. This internal ordering is essential for sequential calculations like rankings, running totals, and time-series moving averages.',
        bn: 'OVER() ব্র্যাকেটের ভেতরে ORDER BY ক্লজ ব্যবহার করলে প্রতিটি পার্টিশনের ভেতরের সারিগুলো কোন ক্রমে মূল্যায়িত হবে তা সুনির্দিষ্টভাবে নির্ধারিত হয়। র‍্যাংকিং, রানিং টোটাল এবং সময়ক্রমের মুভিং অ্যাভারেজ হিসাব করার জন্য এই ইন-উইন্ডো সর্টিং আবশ্যক।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Internal ordering within department partitions:
SELECT 
    employee_id,
    department,
    salary,
    -- Ranks employees within their specific department from highest to lowest
    ROW_NUMBER() OVER(PARTITION BY department ORDER BY salary DESC) AS dept_rank
FROM employees;

-- Output:
-- 101 | Engineering | 80000.00 | 1
-- 102 | Engineering | 70000.00 | 2
-- Result: Ranks evaluated sequentially according to the in-window ORDER BY clause`,
      caption: {
        en: 'In-window ORDER BY defines the chronological or ordinal axis for window operations.',
        bn: 'ইন-উইন্ডো ORDER BY হিসাব পরিচালনার জন্য সারির ক্রমিক বিন্যাস ঠিক করে দেয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Sequential Row Numbering: ROW_NUMBER()', bn: '৪. অনন্য ক্রমিক সংখ্যা প্রদান: ROW_NUMBER() ফাংশন' } },
    {
      type: 'para',
      text: {
        en: 'The ROW_NUMBER() function assigns an unbroken, sequential integer starting at 1 to every row within each partition according to the specified order. Crucially, ROW_NUMBER() always assigns distinct numbers, even if two rows share identical values (ties are broken arbitrarily).',
        bn: 'ROW_NUMBER() ফাংশন প্রতিটি পার্টিশনের ভেতরে নির্ধারিত ক্রম অনুসারে ১ থেকে শুরু করে অবিচ্ছিন্ন ক্রমিক সংখ্যা বরাদ্দ করে। গুরুত্বপূর্ণ বিষয় হলো: দুটি সারির মান হুবহু এক হলেও ROW_NUMBER() তাদের কখনো একই সংখ্যা দেয় না, বরং বাধ্যতামূলকভাবে ভিন্ন ভিন্ন সংখ্যা (যেমন ১, ২, ৩) প্রদান করে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Top-1 customer order per customer account:
SELECT 
    order_id,
    customer_id,
    order_amount,
    ROW_NUMBER() OVER(PARTITION BY customer_id ORDER BY order_amount DESC) AS spend_rank
FROM customer_orders;

-- Output:
-- 901 | CustA | 4500.00 | 1
-- 902 | CustA | 1200.00 | 2
-- 903 | CustB | 9800.00 | 1
-- Result: spend_rank = 1 isolates the highest expenditure order per customer`,
      caption: {
        en: 'ROW_NUMBER produces unique sequential numbers, ideal for deduplication and Top-N queries.',
        bn: 'ROW_NUMBER অনন্য ক্রমিক সংখ্যা তৈরি করে যা ডুপ্লিকেট দূর করতে ও সেরা রেকর্ড বের করতে সেরা।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Tie-Breaking Strategies: RANK() vs DENSE_RANK()', bn: '৫. টাই মোকাবিলার কৌশল: RANK() বনাম DENSE_RANK()' } },
    {
      type: 'para',
      text: {
        en: 'When rows share identical ordering values: RANK() assigns the same rank to ties but leaves gaps in subsequent rankings (1, 2, 2, 4). In comparison, DENSE_RANK() gives tied rows the same position while keeping the numbering sequence continuous without gaps (1, 2, 2, 3). Choosing between them depends on whether ranking gaps are mathematically permissible.',
        bn: 'যখন একাধিক সারির মান সমান হয়: RANK() সমান সারিতে একই র‍্যাংক দেয় কিন্তু পরের সংখ্যায় গ্যাপ তৈরি করে (1, 2, 2, 4)। অন্যদিকে DENSE_RANK() একই অবস্থানে থাকা সারিতে একই মান দিলেও পরবর্তী সংখ্যাগুলোতে কোনো ফাঁকা রাখে না (1, 2, 2, 3)। ব্যবসায়িক নিয়মে র‍্যাংকিংয়ের গ্যাপ প্রযোজ্য কি না তার ওপর নির্ভর করে এদের বাছা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Student scores: Two students tied at 95 marks!
SELECT 
    student_name,
    exam_score,
    ROW_NUMBER() OVER(ORDER BY exam_score DESC) AS row_num,
    RANK()       OVER(ORDER BY exam_score DESC) AS rnk_gap,
    DENSE_RANK() OVER(ORDER BY exam_score DESC) AS dense_rnk
FROM exam_results;

-- Output:
-- Alice   | 95 | 1 | 1 | 1
-- Bob     | 95 | 2 | 1 | 1  (Tied at score 95!)
-- Charlie | 88 | 3 | 3 | 2  (RANK skipped to 3; DENSE_RANK advanced to 2!)
-- Result: Clear behavioral divergence between gapped and continuous ranking`,
      caption: {
        en: 'RANK leaves numerical gaps after ties; DENSE_RANK guarantees continuous progression.',
        bn: 'RANK টাই হলে মাঝে ফাঁক রেখে সংখ্যা বাড়ায়; DENSE_RANK কোনো ফাঁক না রেখে এগিয়ে যায়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Time-Series Offsets: The LAG() Function', bn: '৬. পূর্ববর্তী মানের সাথে তুলনা: LAG() ফাংশন' } },
    {
      type: 'para',
      text: {
        en: 'LAG(column, offset, default) peeks backward into previous rows within the partition without requiring a self-join. It is heavily utilized in financial and time-series reporting to calculate period-over-period differences, such as month-over-month revenue growth.',
        bn: 'LAG(column, offset, default) কোনো সেলফ-জয়েন ছাড়াই বর্তমান সারির আগের সারির ডেটা সরাসরি দেখার সুযোগ দেয়। আর্থিক ও সময়ক্রমের বিশ্লেষণে এটি ব্যাপকভাবে ব্যবহৃত হয়, যেমন গত মাসের আয়ের সাথে চলতি মাসের আয়ের পার্থক্য কিংবা প্রবৃদ্ধি হিসাব করা।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Calculating Month-over-Month (MoM) revenue changes
SELECT 
    sales_month,
    monthly_revenue,
    -- Retrieve previous month's revenue (defaulting to 0 for initial month)
    LAG(monthly_revenue, 1, 0.00) OVER(ORDER BY sales_month) AS prev_month_rev,
    monthly_revenue - LAG(monthly_revenue, 1, 0.00) OVER(ORDER BY sales_month) AS mom_growth
FROM monthly_sales;

-- Output:
-- 2026-01 | 10000.00 | 0.00     | 10000.00
-- 2026-02 | 14000.00 | 10000.00 | 4000.00
-- 2026-03 | 12500.00 | 14000.00 | -1500.00
-- Result: MoM growth computed cleanly without complex multi-table join gymnastics`,
      caption: {
        en: 'LAG provides instant access to historical values for period-over-period variance analysis.',
        bn: 'LAG কোনো জটিল জয়েন ছাড়াই পূর্বের ডেটা তুলে এনে প্রবৃদ্ধি বিশ্লেষণের পথ খুলে দেয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Forward Offsets: The LEAD() Function', bn: '৭. পরবর্তী ইভেন্টের সন্ধান: LEAD() ফাংশন' } },
    {
      type: 'para',
      text: {
        en: 'LEAD(column, offset, default) peeks forward into upcoming rows within the partition. In event tracking and security telemetry, LEAD calculates session duration by comparing the timestamp of the current user action with the timestamp of their next recorded action.',
        bn: 'LEAD(column, offset, default) বর্তমান সারির পরের বা ভবিষ্যৎ সারির ডেটা তুলে আনে। ব্যবহারকারীর সেশন বা সিকিউরিটি অডিটে বর্তমান ক্লিকের সময় ও পরবর্তী ক্লিকের সময়ের ব্যবধান মেপে কোনো ব্যবহারকারী একটি পেজে কতক্ষণ অবস্থান করেছিলেন তা বের করতে LEAD অপরিহার্য।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Calculating duration spent on each web page
SELECT 
    user_id,
    page_name,
    visited_at,
    LEAD(visited_at) OVER(PARTITION BY user_id ORDER BY visited_at) AS next_page_at
FROM page_views;

-- Output:
-- 801 | /home      | 2026-09-26 10:00:00 | 2026-09-26 10:02:30
-- 801 | /checkout  | 2026-09-26 10:02:30 | 2026-09-26 10:05:00
-- 801 | /thank-you | 2026-09-26 10:05:00 | NULL (Final page of session!)
-- Result: Step-by-step navigation timeline constructed with future-peeking LEAD`,
      caption: {
        en: 'LEAD projects subsequent timestamps onto current records to calculate activity durations.',
        bn: 'LEAD পরবর্তী সময়ের রেকর্ড সামনে এনে কাজের স্থায়িত্ব বা ডিউরেশন হিসাব করতে সাহায্য করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Cumulative Running Totals: SUM() OVER (ORDER BY)', bn: '৮. চলমান মোট হিসাব: রানিং টোটাল (Running Total)' } },
    {
      type: 'para',
      text: {
        en: 'Combining an aggregate function like SUM() with an in-window ORDER BY clause automatically converts it into a Running Cumulative Total. By default, the database computes the sum from the first row of the partition up to the current row, calculating bank account balances chronologically.',
        bn: 'SUM() ফাংশনের সাথে ইন-উইন্ডো ORDER BY ক্লজ জুড়ে দিলে তা সরাসরি চলমান মোট (Running Cumulative Total)-এ রূপ নেয়। ডাটাবেস ডিফল্টভাবে পার্টিশনের প্রথম সারি থেকে শুরু করে বর্তমান সারি পর্যন্ত সবগুলোর যোগফল বের করে, যা ব্যাংক অ্যাকাউন্টের চলতি ব্যালেন্স হিসাবের জন্য আদর্শ।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Generating a running bank account ledger balance
SELECT 
    tx_id,
    tx_date,
    deposit_amount,
    -- Cumulative sum of deposits over time
    SUM(deposit_amount) OVER(ORDER BY tx_date ASC) AS running_balance
FROM bank_deposits;

-- Output:
-- TX-1 | 2026-09-01 | 5000.00  | 5000.00
-- TX-2 | 2026-09-05 | 2500.00  | 7500.00
-- TX-3 | 2026-09-10 | 10000.00 | 17500.00
-- Result: Chronological running balance accumulating continuously across rows`,
      caption: {
        en: 'SUM() OVER (ORDER BY ...) defaults to accumulating from partition start through current row.',
        bn: 'SUM() OVER (ORDER BY ...) পার্টিশনের শুরু থেকে বর্তমান সারি পর্যন্ত যোগফল জমায়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Moving Windows: The Window Frame Clause', bn: '৯. মুভিং উইন্ডো: ফ্রেম স্পেসিফিকেশন (ROWS BETWEEN)' } },
    {
      type: 'para',
      text: {
        en: 'The Window Frame sub-clause defines the exact physical range of rows evaluated for the current row. Using ROWS BETWEEN n PRECEDING AND CURRENT ROW constructs Moving Averages (e.g. 7-day rolling stock price averages) that smooth out day-to-day volatility in analytical datasets.',
        bn: 'উইন্ডো ফ্রেম সাব-ক্লজ নির্ধারণ করে যে বর্তমান সারির জন্য ঠিক কতগুলো পূর্ববর্তী বা পরবর্তী সারি হিসাবে আসবে। ROWS BETWEEN n PRECEDING AND CURRENT ROW ব্যবহার করে মুভিং অ্যাভারেজ (যেমন বিগত ৭ দিনের গড় দাম) তৈরি করা যায়, যা ডেটার অস্থিরতা কমিয়ে মসৃণ ট্রেন্ড দেখায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- 3-day moving average of daily sales
SELECT 
    record_date,
    daily_sales,
    ROUND(AVG(daily_sales) OVER(
        ORDER BY record_date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ), 2) AS three_day_moving_avg
FROM daily_metrics;

-- Output:
-- Day 1 | 300.00 | 300.00  (Window size: 1)
-- Day 2 | 400.00 | 350.00  (Window size: 2: (300+400)/2)
-- Day 3 | 500.00 | 400.00  (Window size: 3: (300+400+500)/3)
-- Day 4 | 600.00 | 500.00  (Window size: 3: (400+500+600)/3)
-- Result: Moving average dynamically sliding across a 3-row bounding box`,
      caption: {
        en: 'Window frame specifications calculate precise rolling metrics over designated row intervals.',
        bn: 'উইন্ডো ফ্রেম সুনির্দিষ্ট সীমার মধ্যে চলমান রোলিং মেট্রিক্স নিখুঁতভাবে তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Common Table Expressions (CTEs): The WITH Clause', bn: '১০. কমন টেবিল এক্সপ্রেশন (CTE): WITH ক্লজের ব্যবহার' } },
    {
      type: 'para',
      text: {
        en: 'Because window functions cannot be filtered directly in WHERE clauses (since window functions evaluate at Stage 5 of query processing), developers wrap queries in Common Table Expressions (CTEs) using the WITH clause. CTEs name temporary result sets, enabling clean Top-N filtering and modular recursive queries.',
        bn: 'যেহেতু উইন্ডো ফাংশন লজিক্যাল প্রসেসিংয়ের ৫ নম্বর ধাপে চলে, তাই এদের ফলাফলকে সরাসরি WHERE ক্লজে ফিল্টার করা যায় না। এজন্য কুয়েরিকে Common Table Expression (CTE) বা WITH ক্লজে মুড়ে রাখা হয়। CTE একটি অস্থায়ী টেবিল তৈরি করে যার ওপর পরে সাধারণ WHERE ক্লজ দিয়ে সহজে Top-N ফিল্টারিং চালানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Top-1 highest paid employee per department using CTE
WITH RankedEmployees AS (
    SELECT 
        employee_id,
        first_name,
        department,
        salary,
        DENSE_RANK() OVER(PARTITION BY department ORDER BY salary DESC) AS sal_rank
    FROM employees
)
SELECT employee_id, first_name, department, salary
FROM RankedEmployees
WHERE sal_rank = 1;

-- Output:
-- 101 | Tanvir | Engineering | 80000.00
-- 105 | Shila  | Marketing   | 65000.00
-- Result: Clean, readable Top-N selection without nested subquery chaos`,
      caption: {
        en: 'CTEs enable clean post-filtering of window functions and structure complex analytical workflows.',
        bn: 'CTE উইন্ডো ফাংশনের ফলাফলকে সহজে ফিল্টার করার সুযোগ দেয় এবং জটিল কোড পরিষ্কার রাখে।'
      }
    }
  ],
  exercises: [
    {
      id: 'sql-win-ex1',
      kind: 'predict',
      topic: 'sql: Window function vs GROUP BY row preservation',
      question: {
        en: 'Does using a window function like AVG(salary) OVER(PARTITION BY dept) collapse rows into a single summary row per department?',
        bn: 'AVG(salary) OVER(PARTITION BY dept) ব্যবহার করলে কি সারিগুলো ভেঙে প্রতিটি বিভাগের জন্য একটিমাত্র সারিতে সংকুচিত হয়ে যায়?'
      },
      code: `/* SQL window functions row preservation check */
/* SELECT id, AVG(sal) OVER(PARTITION BY dept) FROM emp */`,
      answer: 'no',
      accept: ['no', 'false', 'No', 'does not collapse'],
      hint: {
        en: 'Window functions preserve all individual rows.',
        bn: 'উইন্ডো ফাংশন প্রতিটি সারিকে অক্ষুণ্ণ রাখে।'
      },
      explanation: {
        en: 'Unlike GROUP BY, window functions perform calculations across partitions while retaining the original cardinality and row-level details of every input row.',
        bn: 'GROUP BY-এর মতো উইন্ডো ফাংশন সারি ধ্বংস করে না; এটি প্রতি গ্রুপের জন্য হিসাব করার সময় প্রতিটি মূল সারিকে অপরিবর্তিত রেখে প্রদর্শন করে।'
      }
    },
    {
      id: 'sql-win-ex2',
      kind: 'mcq',
      topic: 'sql: RANK vs DENSE_RANK ties',
      question: {
        en: 'If 2 rows tie for 1st place in a score ranking, what rank does DENSE_RANK assign to the 3rd row?',
        bn: 'স্কোর র‍্যাংকিংয়ে 2 টি সারি যদি যৌথভাবে 1st স্থান লাভ করে, তবে DENSE_RANK পরবর্তী 3rd সারিতে কোন র‍্যাংক দেবে?'
      },
      options: [
        { en: '2 (DENSE_RANK produces continuous ranks without gaps)', bn: '2 (DENSE_RANK কোনো ফাঁকা না রেখে ধারাবাহিক র‍্যাংক তৈরি করে)' },
        { en: '3 (it skips to 3)', bn: '3 (এটি লাফিয়ে 3 এ যায়)' },
        { en: '1 (it ties everyone)', bn: '1 (সবাইকে টাই বানায়)' },
        { en: 'NULL', bn: 'NULL' }
      ],
      answer: 0,
      hint: {
        en: 'DENSE_RANK is dense; it does not skip numbers.',
        bn: 'DENSE_RANK কোনো সংখ্যা বাদ দেয় না।'
      },
      explanation: {
        en: 'DENSE_RANK produces a dense ranking sequence (1, 1, 2). Regular RANK would have produced (1, 1, 3) with a gap.',
        bn: 'DENSE_RANK কোনো ফাঁকা তৈরি না করে 1, 1, 2 ক্রম প্রদান করে। সাধারণ RANK হলে 1, 1, 3 হতো।'
      }
    },
    {
      id: 'sql-win-ex3',
      kind: 'mcq',
      topic: 'sql: Time series prior row access',
      question: {
        en: 'Which window function accesses data from a previous row within the partition without writing a self-join?',
        bn: 'কোন উইন্ডো ফাংশনটি কোনো সেলফ-জয়েন ছাড়াই পার্টিশনের পূর্ববর্তী সারির ডেটা সরাসরি অ্যাক্সেস করতে দেয়?'
      },
      options: [
        { en: 'LAG()', bn: 'LAG()' },
        { en: 'LEAD()', bn: 'LEAD()' },
        { en: 'FIRST_VALUE()', bn: 'FIRST_VALUE()' },
        { en: 'LAST_VALUE()', bn: 'LAST_VALUE()' }
      ],
      answer: 0,
      hint: {
        en: 'It lags behind the current row.',
        bn: 'এটি বর্তমান সারির পেছনে থাকে।'
      },
      explanation: {
        en: 'LAG() peeks backward into preceding rows, allowing easy computation of previous values and growth rates.',
        bn: 'LAG() পূর্ববর্তী সারির মান তুলে আনে, যার ফলে প্রবৃদ্ধি বা পূর্বের সাথে তুলনা অত্যন্ত সহজে করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'sql-window-quiz',
    title: { en: 'SQL Window Functions Quiz', bn: 'এসকিউএল উইন্ডো ফাংশন কুইজ' },
    questions: [
      {
        id: 'wq1',
        kind: 'mcq',
        topic: 'sql: Filtering window functions with CTE',
        question: {
          en: 'Why can you NOT filter a window function result directly inside a WHERE clause (e.g. WHERE ROW_NUMBER() = 1)?',
          bn: 'কেন একটি উইন্ডো ফাংশনকে সরাসরি WHERE ক্লজের ভেতরে ফিল্টার করা যায় না (যেমন WHERE ROW_NUMBER() = 1)?'
        },
        options: [
          { en: 'Because in the logical evaluation pipeline, WHERE executes before SELECT evaluates window functions', bn: 'কারণ লজিক্যাল এক্সিকিউশন ক্রমে SELECT-এ উইন্ডো ফাংশন চলার আগেই WHERE নির্বাহিত হয়ে যায়' },
          { en: 'Because SQL syntax prohibits uppercase functions', bn: 'বড় হাতের ফাংশন নিষেধ বলে' },
          { en: 'Because window functions delete database tables', bn: 'উইন্ডো ফাংশন টেবিল মুছে ফেলে বলে' },
          { en: 'Because WHERE only accepts primary keys', bn: 'WHERE শুধু প্রাইমারি কি গ্রহণ করে বলে' }
        ],
        answer: 0,
        hint: {
          en: 'Think about query pipeline evaluation order: WHERE is Stage 2, window functions run in Stage 5.',
          bn: 'পাইপলাইনের ক্রম ভাবুন: WHERE চলে ২য় ধাপে, উইন্ডো ফাংশন চলে ৫ম ধাপে।'
        },
        explanation: {
          en: 'The WHERE clause executes at Stage 2 of the logical query pipeline, long before window functions evaluate in Stage 5. A CTE or subquery must be used to filter window metrics.',
          bn: 'WHERE ক্লজ লজিক্যাল পাইপলাইনের ২য় ধাপে চলে, যেখানে উইন্ডো ফাংশন চলে ৫ম ধাপে। তাই উইন্ডো ফাংশনে ফিল্টার করতে CTE বা সাব-কোয়ারির সাহায্য নিতে হয়।'
        }
      },
      {
        id: 'wq2',
        kind: 'mcq',
        topic: 'sql: Cumulative sum default frame',
        question: {
          en: 'What calculation does SUM(val) OVER(ORDER BY date) perform by default?',
          bn: 'ডিফল্টভাবে SUM(val) OVER(ORDER BY date) কোন হিসাবটি সম্পন্ন করে?'
        },
        options: [
          { en: 'A running cumulative sum from the first row of the partition up to the current row', bn: 'পার্টিশনের প্রথম সারি থেকে শুরু করে বর্তমান সারি পর্যন্ত চলমান মোট যোগফল (রানিং টোটাল)' },
          { en: 'A simple total of all rows combined', bn: 'সব সারির সাধারণ মোট যোগফল' },
          { en: 'The average of current and next row', bn: 'বর্তমান ও পরের সারির গড়' },
          { en: 'An exponential moving power', bn: 'এক্সপোনেনশিয়াল মুভিং পাওয়ার' }
        ],
        answer: 0,
        hint: {
          en: 'It accumulates chronologically row-by-row.',
          bn: 'এটি সারি ধরে ক্রমান্বয়ে জমা হয়।'
        },
        explanation: {
          en: 'When an ORDER BY is included in OVER without an explicit frame, SQL defaults to RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW, computing a running cumulative sum.',
          bn: 'OVER-এ ORDER BY থাকলে এসকিউএল ডিফল্টভাবে শুরুর সারি থেকে বর্তমান সারি পর্যন্ত যোগ করে একটি সুন্দর রানিং টোটাল তৈরি করে।'
        }
      },
      {
        id: 'wq3',
        kind: 'mcq',
        topic: 'sql: Retrieving prior period metrics with LAG',
        question: {
          en: 'What calculation does the LAG() window function facilitate without self-joins?',
          bn: 'কোনো সেলফ-জয়েন ছাড়াই LAG() উইন্ডো ফাংশন কোন গণনাটি সহজ করে দেয়?'
        },
        options: [
          { en: 'Accessing values from an earlier preceding row at a specified offset', bn: 'নির্দিষ্ট ব্যবধানে পূর্ববর্তী সারির মান সরাসরি অ্যাক্সেস করা' },
          { en: 'Accessing future subsequent values only', bn: 'কেবল ভবিষ্যৎ পরবর্তী মান অ্যাক্সেস করা' },
          { en: 'Calculating disk page lag in milliseconds', bn: 'মিলিসেকেন্ডে ডিস্ক পেজের ল্যাগ হিসাব করা' },
          { en: 'Reversing table row ordering', bn: 'টেবিলের সারির ক্রম উল্টে দেওয়া' }
        ],
        answer: 0,
        hint: {
          en: 'It looks backward into history.',
          bn: 'এটি পেছনের রেকর্ডের দিকে তাকায়।'
        },
        explanation: {
          en: 'LAG(col, offset) looks backward within the current partition by the specified offset number of rows, enabling trivial period-over-period growth comparisons.',
          bn: 'LAG(col, offset) বর্তমান পার্টিশনের ভেতরে পেছনের সারির দিকে তাকায়, যার ফলে আগের মাস বা বছরের সাথে প্রবৃদ্ধির তুলনা খুব সহজ হয়।'
        }
      },
      {
        id: 'wq4',
        kind: 'mcq',
        topic: 'sql: Common Table Expressions (WITH clause)',
        question: {
          en: 'What is the primary advantage of Common Table Expressions (CTEs) declared using WITH?',
          bn: 'WITH ক্লজ দিয়ে তৈরি Common Table Expressions (CTE)-এর প্রধান সুবিধা কী?'
        },
        options: [
          { en: 'They modularize complex multi-step logic into clean, readable named temporary result sets', bn: 'জটিল বহুধাপীয় লজিককে পরিচ্ছন্ন ও পাঠযোগ্য সাময়িক ফলাফল সেটে বিভক্ত করে' },
          { en: 'They bypass table permission security checks', bn: 'তারা টেবিল পারমিশন সিকিউরিটি এড়িয়ে যায়' },
          { en: 'They create permanent clustered tables on physical storage', bn: 'তারা হার্ডডিস্কে স্থায়ী ক্লাস্টার্ড টেবিল বানায়' },
          { en: 'They replace primary key constraints entirely', bn: 'তারা প্রাইমারি কি শর্তের বিকল্প হিসেবে কাজ করে' }
        ],
        answer: 0,
        hint: {
          en: 'CTEs function as named temporary result blocks.',
          bn: 'CTE নামযুক্ত সাময়িক ফলাফল ব্লক হিসেবে কাজ করে।'
        },
        explanation: {
          en: 'CTEs break down nested subqueries into readable top-down pipeline steps, making complex analytical queries maintainable and debuggable.',
          bn: 'CTE নেস্টেড সাবকোয়ারিকে পাঠযোগ্য ধাপে ধাপে ভাগ করে, যার ফলে জটিল অ্যানালিটিক্যাল কোয়ারি সহজে বোঝা এবং ডিবাগ করা যায়।'
        }
      }
    ]
  }
};
