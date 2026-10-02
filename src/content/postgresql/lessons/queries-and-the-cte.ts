import type { Lesson } from '../../../lib/types';

export const QueriesAndTheCteLesson: Lesson = {
  slug: 'queries-and-the-cte',
  tech: 'postgresql',
  title: {
    en: 'PostgreSQL Advanced SQL: CTEs, Window Functions & Analytics',
    bn: 'PostgreSQL অ্যাডভান্সড এসকিউএল: CTE, উইন্ডো ফাংশন ও অ্যানালিটিক্স'
  },
  summary: {
    en: 'Master enterprise SQL analytics, recursive graph traversal, and window functions across 10 structured topics. Structure clean queries with Common Table Expressions (CTEs) and tune execution fences using AS MATERIALIZED. Traverse organizational hierarchy trees using WITH RECURSIVE and guard against infinite loops with CYCLE detection. Execute multi-table data mutations within atomic CTE blocks. Calculate running totals and moving averages with OVER, PARTITION BY, and framing clauses. Compare rows across time horizons using LEAD and LAG, and build analytical pipelines in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে এন্টারপ্রাইজ এসকিউএল অ্যানালিটিক্স, রিকার্সিভ গ্রাফ ট্রাভার্সাল এবং উইন্ডো ফাংশন আয়ত্ত করুন। কমন টেবিল এক্সপ্রেশন (CTE) দিয়ে পরিষ্কার কুয়েরি সাজান এবং AS MATERIALIZED দিয়ে প্ল্যানার নিয়ন্ত্রণ করুন। WITH RECURSIVE দিয়ে প্রতিষ্ঠানের হায়ারার্কি ট্রি অতিক্রম করুন এবং CYCLE ডিটেকশন দিয়ে লুপ আটকান। একক ট্রানজ্যাকশনে ডেটা স্থানান্তর করতে ডেটা-মডিফাইং CTE চালান। OVER ও PARTITION BY দিয়ে রানিং টোটাল ও মুভিং অ্যাভারেজ হিসাব করুন। LEAD ও LAG দিয়ে সময়ের ব্যবধানে প্রবৃদ্ধি তুলনা করুন এবং Node.js-এ অ্যানালিটিক্যাল পাইপলাইন বাস্তবায়ন করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'constraints-and-the-key',
    tech: 'postgresql',
    title: {
      en: 'PostgreSQL Data Integrity: Constraints, Keys & Checks',
      bn: 'PostgreSQL ডেটা ইন্টিগ্রিটি: কনস্ট্রেইন্ট, কি ও চেক'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Common Table Expressions (CTEs): The WITH Clause', bn: '১. কমন টেবিল এক্সপ্রেশন (CTE): WITH ক্লজ' } },
    {
      type: 'para',
      text: {
        en: 'When queries require multi-step aggregations, deeply nested subqueries become unreadable and hard to maintain. A Common Table Expression (CTE) defines a temporary named result set using the WITH clause. These modular expressions decompose monolithic SQL statements into linear, readable steps that can be referenced multiple times within the outer query.',
        bn: 'যখন কোনো কুয়েরিতে একাধিক ধাপে হিসাব করতে হয়, তখন সাবকুয়েরির ওপর সাবকুয়েরি লিখে কোডটি অত্যন্ত দুর্বোধ্য হয়ে পড়ে। একটি কমন টেবিল এক্সপ্রেশন (CTE) WITH ক্লজের মাধ্যমে একটি সাময়িক নামযুক্ত ফলাফল তৈরি করে। এটি জটিল এসকিউএল বিবৃতিকে ছোট ছোট ধারাবাহিক ধাপে ভাগ করে যা বাইরের মূল কুয়েরিতে একাধিকবার ব্যবহার করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Multi-step aggregation using clean readable CTEs:
WITH regional_sales AS (
  SELECT region, SUM(amount) AS total_revenue
  FROM orders
  GROUP BY region
),
top_regions AS (
  SELECT region, total_revenue
  FROM regional_sales
  WHERE total_revenue > 50000
)
SELECT region, total_revenue
FROM top_regions
ORDER BY total_revenue DESC;`,
      caption: {
        en: 'CTEs structure SQL queries linearly, replacing spaghetti subqueries with modular steps.',
        bn: 'CTE জটিল সাবকুয়েরি পরিহার করে এসকিউএল কোডকে মডুলার ও সহজে পাঠযোগ্য করে তোলে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Window Function Execution: Partitioning & Framing', bn: 'উইন্ডো ফাংশন এক্সিকিউশন: পার্টিশন ও ফ্রেমিং' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Window function partition and framing diagram">
<g transform="translate(20, 20)">
<rect x="0" y="10" width="310" height="130" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="155" y="32" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">PARTITION BY department_id = 10</text>
<rect x="15" y="48" width="280" height="25" rx="4" fill="#1e293b" stroke="#38bdf8"/>
<text x="155" y="65" font-size="9" fill="#e2e8f0" text-anchor="middle">Alice | $5000 | ROW_NUMBER() = 1</text>
<rect x="15" y="78" width="280" height="25" rx="4" fill="#1e293b" stroke="#38bdf8"/>
<text x="155" y="95" font-size="9" fill="#e2e8f0" text-anchor="middle">Bob   | $4200 | ROW_NUMBER() = 2</text>
<text x="155" y="125" font-size="9" fill="#4ade80" text-anchor="middle">Rows retain independent identity!</text>

<rect x="330" y="10" width="310" height="130" rx="8" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
<text x="485" y="32" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">PARTITION BY department_id = 20</text>
<rect x="345" y="48" width="280" height="25" rx="4" fill="#1e293b" stroke="#10b981"/>
<text x="485" y="65" font-size="9" fill="#e2e8f0" text-anchor="middle">Charlie | $6100 | ROW_NUMBER() = 1</text>
<rect x="345" y="78" width="280" height="25" rx="4" fill="#1e293b" stroke="#10b981"/>
<text x="485" y="95" font-size="9" fill="#e2e8f0" text-anchor="middle">David   | $5800 | ROW_NUMBER() = 2</text>
<text x="485" y="125" font-size="9" fill="#fbbf24" text-anchor="middle">Running totals calculate across frame</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. CTE Optimization Controls: MATERIALIZED vs NOT MATERIALIZED', bn: '২. CTE অপ্টিমাইজেশন: MATERIALIZED বনাম NOT MATERIALIZED' } },
    {
      type: 'para',
      text: {
        en: 'In PostgreSQL 11 and older, all CTEs acted as optimization fences: the engine calculated the CTE completely and wrote it into temporary memory, preventing query predicate pushdown. Starting in PostgreSQL 12, simple CTEs are inlined automatically. Developers can force caching with AS MATERIALIZED or force inlining with AS NOT MATERIALIZED.',
        bn: 'PostgreSQL ১১ পর্যন্ত সমস্ত CTE অপ্টিমাইজেশন ফেন্স হিসেবে কাজ করত: ইঞ্জিন সম্পূর্ণ CTE হিসাব করে মেমরিতে লিখে রাখত, যার ফলে বাইরের WHERE ফিল্টার ভেতরে ঢুকতে পারত না। PostgreSQL ১২ থেকে সাধারণ CTE নিজে থেকেই ইনলাইন হয়। তবে ডেভেলপাররা চাইলে AS MATERIALIZED দিয়ে সাময়িক মেমরিতে সেভ রাখতে পারেন বা AS NOT MATERIALIZED দিয়ে ইনলাইন জোরদার করতে পারেন।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Force PostgreSQL planner to cache expensive intermediate calculation:
WITH heavy_calculation AS MATERIALIZED (
  SELECT expensive_function(id) AS metric, user_id
  FROM large_events_table
  WHERE created_at > NOW() - INTERVAL '30 days'
)
SELECT u.name, h.metric
FROM users u
JOIN heavy_calculation h ON u.id = h.user_id;`,
      caption: {
        en: 'Explicit MATERIALIZED hints prevent re-evaluating expensive sub-expressions.',
        bn: 'MATERIALIZED নির্দেশ জটিল হিসাব বারবার চলা বন্ধ করে পারফরম্যান্স রক্ষা করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Hierarchical Graph Traversal: WITH RECURSIVE', bn: '৩. হায়ারার্কি ও গ্রাফ ট্রাভার্সাল: WITH RECURSIVE' } },
    {
      type: 'para',
      text: {
        en: 'Relational tables represent graphs and trees through self-referencing foreign keys (such as manager_id pointing to employee_id). Querying an arbitrary number of ancestor or descendant levels requires WITH RECURSIVE. A recursive CTE consists of two parts joined by UNION ALL: an initial Non-Recursive Anchor, and a Recursive Member that repeats until no new rows are produced.',
        bn: 'রিলেশনাল টেবিলে হায়ারার্কি বা ট্রি বোঝাতে নিজস্ব টেবিলেই ফরেন কি থাকে (যেমন manager_id নির্দেশ করে employee_id)। কোনো পদমর্যাদার যত গভীরে গিয়েই হোক সব কর্মী খুঁজে পেতে WITH RECURSIVE প্রয়োজন হয়। এটি দুটি অংশের সমন্বয়ে গঠিত: একটি নন-রিকার্সিভ অ্যাঙ্কর এবং একটি রিকার্সিভ অংশ যা UNION ALL দিয়ে যুক্ত হয়ে কাজ শেষ না হওয়া পর্যন্ত চলতে থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Finding entire organizational reporting tree starting from CEO (id = 1):
WITH RECURSIVE org_chart AS (
  -- 1. Anchor member: Start at top-level CEO
  SELECT id, name, manager_id, 1 AS depth
  FROM employees
  WHERE id = 1

  UNION ALL

  -- 2. Recursive member: Join prior results to fetch direct subordinates
  SELECT e.id, e.name, e.manager_id, o.depth + 1
  FROM employees e
  INNER JOIN org_chart o ON e.manager_id = o.id
)
SELECT id, name, depth FROM org_chart ORDER BY depth, id;`,
      caption: {
        en: 'WITH RECURSIVE traverses arbitrary tree depths without application-level looping.',
        bn: 'WITH RECURSIVE অ্যাপ্লিকেশনের কোনো লুপ ছাড়াই পুরো ট্রি কাঠামো খুঁজে বের করে আনে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Cycle Detection in Recursive CTEs: The CYCLE Clause', bn: '৪. রিকার্সিভ লুপ প্রতিরোধ: CYCLE ক্লজ' } },
    {
      type: 'para',
      text: {
        en: 'If data contains a circular reference (for instance, Employee A manages Employee B, who manages Employee A), a recursive CTE will enter an infinite loop, exhausting server RAM. PostgreSQL 14 introduced native cycle detection syntax using the CYCLE clause. It tracks visited primary keys and aborts recursion cleanly when a cycle is encountered.',
        bn: 'যদি ডেটাতে কোনো গোলকধাঁধা বা সার্কুলার রেফারেন্স থাকে (যেমন কর্মীর ম্যানেজার আবার তার অধীনস্থ কেউ), তবে রিকার্সিভ কুয়েরি অনন্ত লুপে পড়ে সার্ভার মেমরি শেষ করে ফেলতে পারে। PostgreSQL ১৪ ভার্সনে CYCLE ক্লজ যুক্ত হয়। এটি আগে ভ্রমণ করা আইডিগুলো ট্র্যাক করে এবং কোনো পুনরাবৃত্তি দেখামাত্র লুপ নিরাপদে বন্ধ করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Native cycle protection preventing infinite loops in graph edges:
WITH RECURSIVE network_paths AS (
  SELECT from_node, to_node, ARRAY[from_node] AS path_history
  FROM graph_edges
  WHERE from_node = 101

  UNION ALL

  SELECT g.from_node, g.to_node, path_history || g.from_node
  FROM graph_edges g
  JOIN network_paths p ON g.from_node = p.to_node
)
-- Native cycle guard in PostgreSQL 14+:
CYCLE to_node SET is_cycle USING path_visited
SELECT from_node, to_node, is_cycle FROM network_paths WHERE NOT is_cycle;`,
      caption: {
        en: 'The CYCLE clause detects circular graph loops, preventing server memory crashes.',
        bn: 'CYCLE ক্লজ সার্কুলার লুপ শনাক্ত করে সার্ভার মেমরি ক্র্যাশ হওয়া প্রতিরোধ করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Modifying Data with CTEs: Atomic Relational Pipelines', bn: '৫. ডেটা-মডিফাইং CTE: অবিভাজ্য রিলেশনাল পাইপলাইন' } },
    {
      type: 'para',
      text: {
        en: 'In PostgreSQL, CTEs are not restricted to SELECT queries: they can execute INSERT, UPDATE, or DELETE statements with RETURNING clauses. This allows developers to construct atomic data transfer pipelines—such as moving expired records into an archive table and logging the transaction count—within a single query statement.',
        bn: 'PostgreSQL-এ CTE শুধু SELECT কুয়েরিতেই সীমাবদ্ধ নয়: এতে RETURNING ক্লজসহ INSERT, UPDATE বা DELETE চালানো যায়। এর মাধ্যমে ডেভেলপাররা একটিমাত্র কুয়েরির ভেতরেই সম্পূর্ণ নিরাপদ ডেটা ট্রান্সফার পাইপলাইন তৈরি করতে পারেন—যেমন মেয়াদোত্তীর্ণ ডেটা মূল টেবিল থেকে মুছে সরাসরি আর্কাইভ টেবিলে জমা করা।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Move expired sessions into archive table and return total purged count:
WITH deleted_sessions AS (
  DELETE FROM active_sessions
  WHERE last_seen < NOW() - INTERVAL '7 days'
  RETURNING id, user_id, last_seen
),
archived_records AS (
  INSERT INTO session_archive (id, user_id, archived_at)
  SELECT id, user_id, NOW()
  FROM deleted_sessions
  RETURNING id
)
SELECT count(*) AS total_purged FROM archived_records;`,
      caption: {
        en: 'Data-modifying CTEs move records atomically between tables in a single command.',
        bn: 'ডেটা-মডিফাইং CTE এক কমান্ডেই এক টেবিল থেকে অন্য টেবিলে ডেটা নিরাপদে স্থানান্তর করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Window Functions: OVER and PARTITION BY', bn: '৬. উইন্ডো ফাংশন: OVER ও PARTITION BY' } },
    {
      type: 'para',
      text: {
        en: 'Unlike standard GROUP BY aggregation which collapses multiple rows into a single summary row, Window Functions perform calculations across sets of related rows while preserving each individual row’s identity. The OVER clause defines the target row window; adding PARTITION BY subdivides rows into logical partitions before calculations execute.',
        bn: 'সাধারণ GROUP BY যেখানে অনেকগুলো রো-কে একসাথে মিশিয়ে একটিমাত্র সামারি রো বানিয়ে ফেলে, সেখানে উইন্ডো ফাংশন প্রতিটি রো-এর নিজস্ব অস্তিত্ব বজায় রেখেই সংশ্লিষ্ট রোগুলোর ওপর গাণিতিক হিসাব সম্পন্ন করে। OVER ক্লজ উইন্ডোর পরিধি ঠিক করে এবং PARTITION BY হিসাবের আগে রোগুলোকে আলাদা লজিক্যাল গ্রুপে ভাগ করে নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Compare employee salary against department average without collapsing rows:
SELECT
  id, name, department_id, salary,
  -- Calculate average salary strictly within this department:
  AVG(salary) OVER(PARTITION BY department_id) AS dept_avg_salary,
  -- Difference between employee and department average:
  salary - AVG(salary) OVER(PARTITION BY department_id) AS salary_diff
FROM employees;`,
      caption: {
        en: 'Window functions preserve individual row granularity while computing group aggregations.',
        bn: 'উইন্ডো ফাংশন প্রতিটি রো ঠিক রেখেই গ্রুপের গাণিতিক গড় বা মোট মান হিসাব করে দেয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Ranking Functions: ROW_NUMBER, RANK & DENSE_RANK', bn: '৭. র‍্যাঙ্কিং ফাংশন: ROW_NUMBER, RANK ও DENSE_RANK' } },
    {
      type: 'para',
      text: {
        en: 'Ranking functions assign ordinal positions to rows based on ORDER BY criteria within a partition. ROW_NUMBER assigns unique sequential integers (1, 2, 3, 4) regardless of ties. RANK assigns identical positions to tied rows but skips subsequent numbers (1, 2, 2, 4). DENSE_RANK assigns identical positions without skipping (1, 2, 2, 3).',
        bn: 'র‍্যাঙ্কিং ফাংশনগুলো ORDER BY নিয়মে প্রতিটি রো-কে একটি নির্দিষ্ট অবস্থান দেয়। ROW_NUMBER কোনো টাই থাকলেও প্রতিটি রো-কে পর্যায়ক্রমিক ইউনিক সংখ্যা (১, ২, ৩, ৪) দেয়। RANK টাই থাকা রোগুলোকে একই র‍্যাঙ্ক দেয় কিন্তু পরের সংখ্যা বাদ দেয় (১, ২, ২, ৪)। আর DENSE_RANK কোনো সংখ্যা বাদ না দিয়েই টাই পরিচালনা করে (১, ২, ২, ৩)।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Find the top 2 highest-paid employees per department:
WITH ranked_staff AS (
  SELECT
    id, name, department_id, salary,
    DENSE_RANK() OVER(
      PARTITION BY department_id
      ORDER BY salary DESC
    ) AS salary_rank
  FROM employees
)
SELECT department_id, name, salary, salary_rank
FROM ranked_staff
WHERE salary_rank <= 2;`,
      caption: {
        en: 'DENSE_RANK combined with CTEs provides standard Top-N query patterns.',
        bn: 'CTE ও DENSE_RANK একসাথে ব্যবহার করে সহজে প্রতিটি ক্যাটাগরির শীর্ষ তালিকা বের করা যায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Positional Navigation: LEAD, LAG & Period Comparison', bn: '৮. তুলনামূলক নেভিগেশন: LEAD, LAG ও সময়ের পার্থক্য' } },
    {
      type: 'para',
      text: {
        en: 'Financial and telemetry analytics frequently compare a current row against previous or subsequent events. The LAG function retrieves a value from N rows prior without performing a self-join. Conversely, LEAD retrieves values from future rows. This simplifies computing day-over-day growth rates and transaction delays.',
        bn: 'আর্থিক বা সেন্সর অ্যানালিটিক্সে বর্তমান রো-এর মানকে আগের বা পরের রো-এর সাথে তুলনা করার প্রচুর প্রয়োজন হয়। LAG ফাংশন কোনো সেলফ-জয়েন ছাড়াই আগের রো থেকে ডেটা এনে দেয়। বিপরীতভাবে LEAD ফাংশন পরবর্তী রো থেকে ডেটা এনে দেয়। এর ফলে যেকোনো সময়ের প্রবৃদ্ধি বা লেনদেনের ব্যবধান নিমিষেই বের করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Calculate month-over-month revenue growth rate:
SELECT
  revenue_month,
  current_revenue,
  -- Retrieve previous month revenue:
  LAG(current_revenue, 1) OVER(ORDER BY revenue_month) AS prev_revenue,
  -- Calculate growth delta:
  current_revenue - LAG(current_revenue, 1) OVER(ORDER BY revenue_month) AS mom_growth
FROM monthly_financials;`,
      caption: {
        en: 'LAG eliminates self-joins when computing differential period-over-period metrics.',
        bn: 'LAG ফাংশন কোনো সেলফ-জয়েন ছাড়াই পূর্ববর্তী সময়ের সাথে বর্তমানের তুলনা করে দেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Window Framing: Cumulative Sums & Moving Averages', bn: '৯. উইন্ডো ফ্রেমিং: কিউমুলেটিভ যোগফল ও মুভিং অ্যাভারেজ' } },
    {
      type: 'para',
      text: {
        en: 'Specifying an ORDER BY inside an OVER clause creates a dynamic calculation frame spanning from the start of the partition up to the current row. Developers customize this boundary using the ROWS BETWEEN syntax. For example, specifying 2 PRECEDING AND CURRENT ROW computes rolling 3-day moving averages to smooth noisy daily metrics.',
        bn: 'OVER ক্লজের ভেতর ORDER BY দিলে শুরুর রো থেকে বর্তমান রো পর্যন্ত একটি গতিশীল ফ্রেম তৈরি হয় যা চলমান মোট যোগফল বের করে। ROWS BETWEEN বাক্যরীতি ব্যবহার করে এই সীমানা ইচ্ছামতো পরিবর্তন করা যায়। উদাহরণস্বরূপ, বর্তমান রো ও তার পূর্ববর্তী ২টি রো নিয়ে ৩ দিনের রোলিং গড় হিসাব করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'sql',
      code: `-- Compute 3-day moving average and cumulative running balance:
SELECT
  transaction_date, amount,
  -- Cumulative running balance:
  SUM(amount) OVER(
    ORDER BY transaction_date
    ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
  ) AS running_balance,
  -- 3-period rolling moving average:
  AVG(amount) OVER(
    ORDER BY transaction_date
    ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
  ) AS rolling_3day_avg
FROM daily_transactions;`,
      caption: {
        en: 'Framing specifications compute sliding statistical summaries directly in the database engine.',
        bn: 'ফ্রেমিং স্পেসিফিকেশন ডাটাবেস ইঞ্জিনের ভেতরেই চলমান গড় হিসাব সম্পন্ন করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Implementing Recursive CTE Queries in Node.js', bn: '১০. Node.js-এ রিকার্সিভ CTE কুয়েরি বাস্তবায়ন' } },
    {
      type: 'para',
      text: {
        en: 'Here is a production category breadcrumb resolver in Node.js utilizing node-postgres to traverse parent category trees recursively in a single query.',
        bn: 'নিচে node-postgres ব্যবহার করে কোনো পণ্যের সম্পূর্ণ প্যারেন্ট ক্যাটাগরি ব্রেডক্রাম্ব এক কুয়েরিতে বের করার একটি পূর্ণাঙ্গ প্রোডাকশন কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import pg from "pg";
const { Pool } = pg;
const pool = new Pool({ connectionString: "postgresql://postgres:secret@127.0.0.1:5432/postgres" });

async function getCategoryBreadcrumbs(leafCategoryId) {
  const client = await pool.connect();
  try {
    const query = \`
      WITH RECURSIVE category_path AS (
        -- Anchor: Target category
        SELECT id, name, parent_id, 1 AS level
        FROM categories
        WHERE id = $1

        UNION ALL

        -- Recursive step: Ascend parent references
        SELECT c.id, c.name, c.parent_id, cp.level + 1
        FROM categories c
        JOIN category_path cp ON c.id = cp.parent_id
      )
      SELECT id, name, level
      FROM category_path
      ORDER BY level DESC;
    \`;

    const res = await client.query(query, [leafCategoryId]);
    return res.rows.map(r => r.name).join(" > ");
  } finally {
    client.release();
  }
}

const breadcrumb = await getCategoryBreadcrumbs(42);
console.log("Resolved category breadcrumb hierarchy:", breadcrumb);
// Output: Resolved category breadcrumb hierarchy: Electronics > Audio > Headphones`,
      caption: {
        en: 'Recursive CTEs resolve nested hierarchies in a single round-trip database query.',
        bn: 'রিকার্সিভ CTE মাত্র একটি কুয়েরিতে সম্পূর্ণ নেস্টেড হায়ারার্কি বের করে আনে।'
      }
    }
  ],
  exercises: [
    {
      id: 'pg-cte-ex1',
      kind: 'predict',
      topic: 'postgresql: dense rank tie behavior',
      question: {
        en: 'If two employees tie for salary rank #2, what rank number does DENSE_RANK() assign to the subsequent employee (3 vs 4)?',
        bn: 'যদি দুজন কর্মী বেতনের ভিত্তিতে ২য় অবস্থানে যৌথভাবে টাই হন, তবে DENSE_RANK() পরবর্তী কর্মীকে কোন র‍্যাঙ্ক নম্বরটি প্রদান করবে (৩ নাকি ৪)?'
      },
      code: `/* DENSE_RANK sequence for tied rank #2: */
/* Ranks: 1, 2, 2, _ */`,
      answer: '3',
      accept: ['3', 'three', 'rank 3'],
      hint: {
        en: 'DENSE_RANK never skips numbers; it outputs 3.',
        bn: 'DENSE_RANK কোনো সংখ্যা বাদ দেয় না; এটি ৩ দেবে।'
      },
      explanation: {
        en: 'Unlike RANK() which skips to 4 after a double-2 tie, DENSE_RANK() does not leave gaps, assigning rank 3 next.',
        bn: 'RANK() যেখানে দুইবার ২-এর পর ৪ দিত, সেখানে DENSE_RANK() কোনো ফাঁক না রেখে পরবর্তী সংখ্যা ৩ প্রদান করে।'
      }
    },
    {
      id: 'pg-cte-ex2',
      kind: 'mcq',
      topic: 'postgresql: recursive cte keyword',
      question: {
        en: 'Which SQL keyword must follow WITH to enable recursive graph and hierarchy traversal in PostgreSQL?',
        bn: 'PostgreSQL-এ রিকার্সিভ গ্রাফ ও হায়ারার্কি কুয়েরি সক্ষম করতে WITH ক্লজের সাথে কোন কিওয়ার্ডটি যুক্ত করতে হয়?'
      },
      options: [
        { en: 'RECURSIVE', bn: 'RECURSIVE' },
        { en: 'LOOP', bn: 'LOOP' },
        { en: 'ITERATE', bn: 'ITERATE' },
        { en: 'TRAVERSE', bn: 'TRAVERSE' }
      ],
      answer: 0,
      hint: {
        en: 'WITH RECURSIVE.',
        bn: 'WITH RECURSIVE।'
      },
      explanation: {
        en: 'The WITH RECURSIVE modifier signals the planner to evaluate the CTE repeatedly until no new rows are produced.',
        bn: 'WITH RECURSIVE নির্দেশ দিলে প্ল্যানার নতুন কোনো রো তৈরি না হওয়া পর্যন্ত কুয়েরিটি পুনরাবৃত্তি করতে থাকে।'
      }
    },
    {
      id: 'pg-cte-ex3',
      kind: 'mcq',
      topic: 'postgresql: window function previous row offset',
      question: {
        en: 'Which window function retrieves a column value from the preceding row without performing an expensive self-join?',
        bn: 'কোন উইন্ডো ফাংশনটি কোনো জটিল সেলফ-জয়েন ছাড়াই পূর্ববর্তী রো থেকে একটি কলামের মান এনে দেয়?'
      },
      options: [
        { en: 'LAG()', bn: 'LAG()' },
        { en: 'LEAD()', bn: 'LEAD()' },
        { en: 'PRIOR()', bn: 'PRIOR()' },
        { en: 'BEFORE()', bn: 'BEFORE()' }
      ],
      answer: 0,
      hint: {
        en: 'The LAG() function.',
        bn: 'LAG() ফাংশন।'
      },
      explanation: {
        en: 'LAG(column, offset) looks backward in the ordered partition, fetching data from previous rows.',
        bn: 'LAG ফাংশন ক্রমানুসারে সাজানো টেবিল থেকে পূর্ববর্তী রোগুলোর মান তুলে আনে।'
      }
    }
  ],
  quiz: {
    id: 'pg-cte-quiz',
    title: { en: 'PostgreSQL CTEs & Window Functions Quiz', bn: 'PostgreSQL CTE ও উইন্ডো ফাংশন কুইজ' },
    questions: [
      {
        id: 'pcteq1',
        kind: 'mcq',
        topic: 'postgresql: window functions vs group by',
        question: {
          en: 'What fundamental behavioral difference separates Window Functions from traditional GROUP BY aggregations?',
          bn: 'উইন্ডো ফাংশন এবং সাধারণ GROUP BY অ্যাগ্রিগেশনের মধ্যে মৌলিক আচরণগত পার্থক্য কোনটি?'
        },
        options: [
          { en: 'Window functions perform group-level calculations while preserving each individual row identity, whereas GROUP BY collapses rows', bn: 'উইন্ডো ফাংশন প্রতিটি রো-এর নিজস্ব পরিচয় অক্ষত রেখেই গ্রুপের গাণিতিক হিসাব করে, কিন্তু GROUP BY রোগুলোকে একত্রিত করে ফেলে' },
          { en: 'Window functions can only run on Sundays', bn: 'উইন্ডো ফাংশন কেবল রবিবারে চলে' },
          { en: 'GROUP BY deletes table indexes', bn: 'GROUP BY ইনডেক্স মুছে দেয়' },
          { en: 'Window functions require Microsoft Windows OS', bn: 'উইন্ডো ফাংশনের জন্য উইন্ডোজ ওএস লাগে' }
        ],
        answer: 0,
        hint: {
          en: 'Preserves individual row identity.',
          bn: 'প্রতিটি রো-এর নিজস্ব অস্তিত্ব বজায় রাখে।'
        },
        explanation: {
          en: 'Window functions calculate aggregate metrics across partitions while keeping all individual rows visible in the final result.',
          bn: 'উইন্ডো ফাংশন প্রতিটি রো অক্ষত রেখে গ্রুপের গড় বা মোট মান হিসাব করে ফলাফল তৈরি করে।'
        }
      },
      {
        id: 'pcteq2',
        kind: 'mcq',
        topic: 'postgresql: infinite recursion protection clause',
        question: {
          en: 'Which clause introduced in PostgreSQL 14 provides native cycle detection to guard against infinite loops in recursive CTEs?',
          bn: 'PostgreSQL ১৪ ভার্সনে রিকার্সিভ CTE-তে অনন্ত লুপ ঠেকাতে কোন ক্লজটি যুক্ত হয়েছে?'
        },
        options: [
          { en: 'CYCLE', bn: 'CYCLE' },
          { en: 'TIMEOUT', bn: 'TIMEOUT' },
          { en: 'LIMIT_RECURSION', bn: 'LIMIT_RECURSION' },
          { en: 'STOP_LOOP', bn: 'STOP_LOOP' }
        ],
        answer: 0,
        hint: {
          en: 'The CYCLE clause.',
          bn: 'CYCLE ক্লজ।'
        },
        explanation: {
          en: 'The CYCLE clause tracks visited nodes and sets a boolean flag when circular paths are encountered, halting infinite loops.',
          bn: 'CYCLE ক্লজ পূর্ববর্তী নোডগুলো মনে রেখে সার্কুলার পথ চিহ্নিত করে এবং লুপ বন্ধ করে দেয়।'
        }
      },
      {
        id: 'pcteq3',
        kind: 'mcq',
        topic: 'postgresql: cte materialization hint',
        question: {
          en: 'How can developers instruct the PostgreSQL planner to cache an expensive CTE result set rather than inlining it?',
          bn: 'একটি ব্যয়বহুল CTE-এর ফলাফল ইনলাইন না করে মেমরিতে ক্যাশ করে রাখতে ডেভেলপাররা কীভাবে নির্দেশ দিতে পারেন?'
        },
        options: [
          { en: 'WITH cte AS MATERIALIZED (...)', bn: 'WITH cte AS MATERIALIZED (...)' },
          { en: 'CACHE WITH cte (...)', bn: 'CACHE WITH cte (...)' },
          { en: 'STORE IN RAM cte (...)', bn: 'STORE IN RAM cte (...)' },
          { en: 'PERSIST cte (...)', bn: 'PERSIST cte (...)' }
        ],
        answer: 0,
        hint: {
          en: 'WITH ... AS MATERIALIZED.',
          bn: 'WITH ... AS MATERIALIZED।'
        },
        explanation: {
          en: 'AS MATERIALIZED explicitly prevents the planner from inlining the subquery, caching the intermediate result in memory.',
          bn: 'AS MATERIALIZED দিলে কুয়েরি প্ল্যানার সাবকুয়েরি ইনলাইন না করে সাময়িক মেমরিতে সেভ করে রাখে।'
        }
      },
      {
        id: 'pcteq4',
        kind: 'mcq',
        topic: 'postgresql: data modifying cte capability',
        question: {
          en: 'What unique architectural capability do data-modifying CTEs (WITH + DELETE/INSERT/UPDATE) offer in PostgreSQL?',
          bn: 'PostgreSQL-এ ডেটা-মডিফাইং CTE (WITH + DELETE/INSERT/UPDATE) কোন অনন্য সুবিধা প্রদান করে?'
        },
        options: [
          { en: 'They allow moving or transforming records between multiple tables atomically within a single SQL statement using RETURNING', bn: 'RETURNING ক্লজ ব্যবহার করে একটিমাত্র এসকিউএল কমান্ডের ভেতর একাধিক টেবিলের মাঝে সম্পূর্ণ নিরাপদে ডেটা স্থানান্তর করতে দেয়' },
          { en: 'They convert SQL databases into MongoDB', bn: 'এসকিউএল ডাটাবেসকে মঙ্গোডিবির মতো বানায়' },
          { en: 'They bypass all database passwords', bn: 'পাসওয়ার্ড বাইপাস করে' },
          { en: 'They permanently turn off server logs', bn: 'সার্ভার লগ বন্ধ করে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Atomic record mutation across tables in a single statement.',
          bn: 'এক কমান্ডে একাধিক টেবিলে অবিভাজ্য ডেটা স্থানান্তর।'
        },
        explanation: {
          en: 'Data-modifying CTEs chain DML operations together atomically; rows returned from a DELETE can be piped into an INSERT.',
          bn: 'ডেটা-মডিফাইং CTE এক অপারেশনের ফলাফল অন্য অপারেশনে সরাসরি পাইপ করে এক কমান্ডেই ডেটা সরিয়ে দেয়।'
        }
      }
    ]
  }
};
