import type { Hub } from '../../lib/types';
import { PlansAndThePlanLesson } from './lessons/plans-and-the-plan';
import { CostsAndTheCostLesson } from './lessons/costs-and-the-cost';
import { MergesAndTheMergeLesson } from './lessons/merges-and-the-merge';
import { SortsAndTheSortLesson } from './lessons/sorts-and-the-sort';
import { CachesAndTheCacheLesson } from './lessons/caches-and-the-cache';
import { ExplsAndTheExplainLesson } from './lessons/expls-and-the-explain';
import { LimitsAndTheLimitLesson } from './lessons/limits-and-the-limit';
import { TheQueryReleaseLesson } from './lessons/the-query-release';

export const queryOptimizationHub: Hub = {
  slug: 'query-optimization',
  name: 'Query Optimization',
  icon: '⚡',
  tagline: {
    en: 'Master relational database performance engineering: decode EXPLAIN ANALYZE execution plans, join algorithms, buffer pool caching, keyset pagination, and query tuning.',
    bn: 'রিলেশনাল ডাটাবেস পারফরম্যান্স ইঞ্জিনিয়ারিং আয়ত্ত করুন: EXPLAIN ANALYZE এক্সিকিউশন প্ল্যান, জয়েন অ্যালগরিদম, বাফার পুল ক্যাশিং, কি-সেট পেজিনেশন এবং কোয়েরি টিউনিং।'
  },
  intro: {
    en: 'A comprehensive, engineering-focused curriculum covering modern database query optimization. Learn how database engines transform SQL text into physical execution trees, how Cost-Based Optimizers select between Nested Loops, Hash Joins, and Merge Joins, how to eliminate disk spills with memory tuning, how to interpret EXPLAIN ANALYZE buffers, and how to scale pagination with keyset cursors in high-throughput production systems.',
    bn: 'আধুনিক ডাটাবেস কোয়েরি অপ্টিমাইজেশনের ওপর একটি পূর্ণাঙ্গ প্রফেশনাল গাইড। ডাটাবেস ইঞ্জিন কীভাবে SQL কোডকে ফিজিক্যাল এক্সিকিউশন ট্রিতে রূপান্তরিত করে, কস্ট-বেসড অপ্টিমাইজার কীভাবে নেস্টেড লুপ, হ্যাশ জয়েন এবং মার্জ জয়েন বেছে নেয়, মেমরি টিউনিংয়ের মাধ্যমে ডিস্ক স্পিল দূর করার কৌশল, EXPLAIN ANALYZE বাফার পাঠ এবং কি-সেট কার্সার দিয়ে কোটি কোটি ডাটার পেজিনেশন স্কেল করার সম্পূর্ণ বাস্তব কৌশল শিখুন।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — The Query Lifecycle & Execution Plan Foundations',
        bn: 'ধাপ ১ — কোয়েরি জীবনচক্র ও এক্সিকিউশন প্ল্যানের ভিত্তি'
      },
      items: [
        {
          en: 'The Query Lifecycle: parser syntax trees, rewriters, cost-based optimizer planners, and engine executors',
          bn: 'কোয়েরি জীবনচক্র: পার্সার সিনট্যাক্স ট্রি, রিরাইটার, কস্ট-বেসড অপ্টিমাইজার প্ল্যানার এবং ইঞ্জিন এক্সিকিউটর'
        },
        {
          en: 'Cost Models & Estimation: startup cost vs total cost, page I/O units, and cardinality estimation errors',
          bn: 'কস্ট মডেল ও হিসাব: স্টার্টআপ কস্ট বনাম মোট কস্ট, পেজ I/O একক এবং কার্ডিনালিটি অনুমানের ভুল'
        },
        {
          en: 'Physical Join Strategies: Nested Loop Joins, Hash Joins, and Merge Joins compared across memory and scale',
          bn: 'ফিজিক্যাল জয়েন কৌশল: মেমরি ও স্কেলের ভিত্তিতে নেস্টেড লুপ, হ্যাশ জয়েন এবং মার্জ জয়েনের তুলনা'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Memory Architecture, Caching & Plan Diagnostics',
        bn: 'ধাপ ২ — মেমরি আর্কিটেকচার, ক্যাশিং ও প্ল্যান নির্ণয়'
      },
      items: [
        {
          en: 'Sorting & Memory Tuning: work_mem thresholds, quicksort vs external merge sort, and disk spill elimination',
          bn: 'সর্টিং ও মেমরি টিউনিং: work_mem সীমা, কুইকসর্ট বনাম এক্সটার্নাল মার্জ সর্ট এবং ডিস্ক স্পিল দূরীকরণ'
        },
        {
          en: 'Buffer Pool & Cache Mechanics: shared buffers, cache hit ratios, dirty page flushing, and checkpoint tuning',
          bn: 'বাফার পুল ও ক্যাশ অভ্যন্তরীণ কৌশল: শেয়ার্ড বাফার, ক্যাশ হিট রেশিও, ডার্টি পেজ ফ্লাশিং এবং চেকপয়েন্ট টিউনিং'
        },
        {
          en: 'Mastering EXPLAIN & EXPLAIN ANALYZE: actual vs estimated rows, buffer read hits, and execution tree node timing',
          bn: 'EXPLAIN ও EXPLAIN ANALYZE আয়ত্তকরণ: বাস্তব বনাম আনুমানিক রো, বাফার রিড হিট এবং নোড টাইমিং বিশ্লেষণ'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Pagination at Scale, Anti-Patterns & Production Tuning',
        bn: 'ধাপ ৩ — স্কেলড পেজিনেশন, অ্যান্টি-প্যাটার্ন ও প্রোডাকশন টিউনিং'
      },
      items: [
        {
          en: 'Pagination at Scale: why OFFSET causes O(N) performance degradation and how Keyset Cursor pagination achieves O(1) speed',
          bn: 'স্কেলড পেজিনেশন: OFFSET কেন O(N) ধীরগতি ঘটায় এবং কি-সেট কার্সার পেজিনেশন কীভাবে O(1) গতি নিশ্চিত করে'
        },
        {
          en: 'Production Capstone: hunting slow queries, fixing un-sargable predicates, resolving N+1 queries, and database hardening',
          bn: 'প্রোডাকশন ক্যাপস্টোন: ধীরগতির কোয়েরি শনাক্তকরণ, আন-সারগেবল শর্ত সমাধান, N+1 কোয়েরি ফিক্স এবং ডাটাবেস টিউনিং'
        }
      ]
    }
  ],
  lessons: [
    PlansAndThePlanLesson,
    CostsAndTheCostLesson,
    MergesAndTheMergeLesson,
    SortsAndTheSortLesson,
    CachesAndTheCacheLesson,
    ExplsAndTheExplainLesson,
    LimitsAndTheLimitLesson,
    TheQueryReleaseLesson
  ],
  projects: [
    {
      title: {
        en: 'Slow Query Log Analyzer & Optimizer Engine',
        bn: 'স্লো কোয়েরি লগ অ্যানালাইজার ও অপ্টিমাইজার ইঞ্জিন'
      },
      brief: {
        en: 'Build an automated pipeline that parses PostgreSQL pg_stat_statements or MySQL slow query logs, identifies un-indexed sequential scans and expensive nested loops, and suggests exact index fixes.',
        bn: 'একটি স্বয়ংক্রিয় পাইপলাইন তৈরি করুন যা pg_stat_statements বা MySQL স্লো কোয়েরি লগ পার্স করে ইনডেক্সহীন সিকোয়েনশিয়াল স্ক্যান ও ধীরগতির নেস্টেড লুপ শনাক্ত করে উপযুক্ত ইনডেক্স পরামর্শ প্রদান করে।'
      }
    },
    {
      title: {
        en: 'Sub-Millisecond Keyset Pagination API',
        bn: 'সাব-মিলিসেকেন্ড কি-সেট পেজিনেশন API'
      },
      brief: {
        en: 'Construct a high-throughput feed API querying a 10-million row table, replacing degrading OFFSET/LIMIT pagination with deterministic composite keyset cursor navigation.',
        bn: 'কোটি সারির টেবিলে একটি উচ্চগতির ফিড API তৈরি করুন যা ধীরগতির OFFSET/LIMIT পেজিনেশন বাদ দিয়ে কম্পোজিট কি-সেট কার্সারের সাহায্যে সাব-মিলিসেকেন্ড গতি নিশ্চিত করে।'
      }
    },
    {
      title: {
        en: 'Database Buffer Cache & Memory Benchmark Suite',
        bn: 'ডাটাবেস বাফার ক্যাশ ও মেমরি বেঞ্চমার্ক স্যুট'
      },
      brief: {
        en: 'Design a benchmark harness that measures query execution time across cold vs warm buffer caches, calculates cache hit ratios, and tunes work_mem to eliminate external disk spills.',
        bn: 'কোল্ড বনাম ওয়ার্ম বাফার ক্যাশের কোয়েরি গতি পরিমাপ, ক্যাশ হিট রেশিও গণনা এবং ডিস্ক স্পিল দূর করতে work_mem টিউন করার জন্য একটি স্বয়ংক্রিয় বেঞ্চমার্ক স্যুট তৈরি করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always inspect EXPLAIN (ANALYZE, BUFFERS) rather than relying solely on wall-clock execution times to understand physical disk and buffer cache work.',
      bn: 'ফিজিক্যাল ডিস্ক এবং বাফার ক্যাশের কাজের গভীরতা বুঝতে কেবল ঘড়ির সময়ের ওপর নির্ভর না করে সর্বদা EXPLAIN (ANALYZE, BUFFERS) ফলাফল পরীক্ষা করুন।'
    },
    {
      en: 'Maintain Sargability in WHERE clauses by avoiding wrapping indexed columns in functions (such as LOWER(email) or DATE(created_at)) which disables B-Tree index seeks.',
      bn: 'ইনডেক্স করা কলামকে কোনো ফাংশনের ভেতর না ঢুকিয়ে (যেমন LOWER(email) বা DATE(created_at)) শর্তের সারগেবিলিটি বজায় রাখুন যাতে B-Tree ইনডেক্স ব্যবহার ব্যাহত না হয়।'
    },
    {
      en: 'Replace deep OFFSET pagination with Keyset (Cursor) pagination to prevent the database from reading and discarding millions of unused rows on disk.',
      bn: 'গভীর পেজের ক্ষেত্রে OFFSET পেজিনেশন পরিহার করে কি-সেট (কার্সার) পেজিনেশন ব্যবহার করুন যাতে ডাটাবেসকে ডিস্ক থেকে লাখ লাখ অপ্রয়োজনীয় রো স্ক্যান করে ফেলে দিতে না হয়।'
    },
    {
      en: 'Tune work_mem appropriately for complex analytical sorting queries to ensure sorts finish in fast RAM rather than spilling to temporary disk files.',
      bn: 'জটিল সর্টিং কোয়েরির ক্ষেত্রে work_mem সঠিকভাবে বাড়ান যাতে সর্টিং কাজ ডিস্ক ফাইলে না ছড়িয়ে দ্রুতগতির র্যাম মেমরির ভেতরেই সম্পন্ন হয়।'
    },
    {
      en: 'Monitor the pg_stat_statements extension in PostgreSQL to identify queries with the highest cumulative execution time and buffer read overhead across production.',
      bn: 'প্রোডাকশনে সর্বোচ্চ সময় ও বাফার অপচয়কারী ক্ষতিকর কোয়েরিগুলো চিহ্নিত করতে PostgreSQL-এর pg_stat_statements এক্সটেনশন নিয়মিত পর্যবেক্ষণ করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'How does the Cost-Based Optimizer (CBO) choose between a Nested Loop Join, a Hash Join, and a Merge Join?',
        bn: 'কস্ট-বেসড অপ্টিমাইজার (CBO) কীভাবে নেস্টেড লুপ জয়েন, হ্যাশ জয়েন এবং মার্জ জয়েনের মধ্যে একটিকে নির্বাচন করে?'
      },
      a: {
        en: 'Nested Loop Joins are chosen when one dataset is tiny (or highly selective) and probes a large table via an index seek. Hash Joins are chosen for large unsorted datasets with equality conditions, where the engine builds an in-memory hash table from the smaller relation. Merge Joins are chosen when both datasets are already sorted on the join key (such as through a B-Tree index) or when sorting both sets is cheaper than building a hash table.',
        bn: 'নেস্টেড লুপ জয়েন তখন বেছে নেওয়া হয় যখন একটি টেবিল খুব ছোট থাকে এবং ইনডেক্স সিক দিয়ে অপর বড় টেবিলে খোঁজা যায়। হ্যাশ জয়েন বেছে নেওয়া হয় যখন বড় অসংগঠিত টেবিলে সমতা শর্ত থাকে এবং মেমরিতে একটি হ্যাশ টেবিল তৈরি করা যায়। আর মার্জ জয়েন তখন নির্বাচিত হয় যখন উভয় টেবিল ইতিমধ্যে জয়েন কি দ্বারা সাজানো থাকে (যেমন B-Tree ইনডেক্স দিয়ে) বা মেমরির সীমাবদ্ধতা থাকে।'
      }
    },
    {
      q: {
        en: 'Why does OFFSET 1000000 LIMIT 20 cause catastrophic database performance degradation, and how does Keyset pagination solve it?',
        bn: 'OFFSET 1000000 LIMIT 20 কেন ডাটাবেসে ভয়াবহ পারফরম্যান্স ধস নামায় এবং কি-সেট পেজিনেশন কীভাবে এর সমাধান করে?'
      },
      a: {
        en: 'With OFFSET 1,000,000, the database engine must sequentially read and traverse 1,000,020 physical rows, sort them in memory, and discard the first 1,000,000 rows just to return 20, resulting in O(N) complexity. Keyset pagination solves this in O(1) time using an indexed condition (WHERE id > last_seen_id ORDER BY id ASC LIMIT 20), allowing an immediate B-Tree index seek directly to the 20 target rows.',
        bn: 'OFFSET ১০০০০০০ দিলে ডাটাবেসকে ডিস্ক থেকে ১০০০০২০টি রো পড়তে হয়, মেমরিতে সাজাতে হয় এবং প্রথম ১০০০০০০টি রো ফেলে দিয়ে মাত্র ২০টি ফেরত দিতে হয়, যার জটিলতা O(N)। কি-সেট পেজিনেশন ইনডেক্স শর্ত ব্যবহার করে (WHERE id > last_seen_id ORDER BY id ASC LIMIT 20) সরাসরি B-Tree ইনডেক্স সিকের মাধ্যমে O(1) সময়ে তাৎক্ষণিকভাবে ২০টি রো উদ্ধার করে।'
      }
    },
    {
      q: {
        en: 'What is "Sargability" in SQL query optimization, and what happens when a query filter is un-sargable?',
        bn: 'SQL কোয়েরি অপ্টিমাইজেশনে "সারগেবিলিটি" (Sargability) কী এবং কোয়েরি শর্ত আন-সারগেবল হলে কী ঘটে?'
      },
      a: {
        en: 'Sargable (Search Argument Able) refers to a predicate that allows the database engine to utilize an index seek. When a query is un-sargable (such as WHERE YEAR(created_at) = 2026 or WHERE phone LIKE \'%555\'), the engine must execute the function on every row in the table, preventing B-Tree tree traversal and forcing a slow O(N) full table scan.',
        bn: 'সারগেবল বলতে এমন শর্তকে বোঝায় যা ডাটাবেসকে ইনডেক্স সিক চালানোর সুযোগ দেয়। কোয়েরি যখন আন-সারগেবল হয় (যেমন WHERE YEAR(created_at) = ২০২৬ বা WHERE phone LIKE \'%৫৫৫\'), তখন ইঞ্জিন ইনডেক্স ব্যবহার করতে পারে না এবং প্রতিটি রো-তে ফাংশন চালাতে বাধ্য হয়ে সম্পূর্ণ ধীরগতির O(N) ফুল টেবিল স্ক্যান চালায়।'
      }
    },
    {
      q: {
        en: 'What does "Sort Method: external merge Disk" indicate in an EXPLAIN ANALYZE plan, and how do you resolve it?',
        bn: 'EXPLAIN ANALYZE প্ল্যানে "Sort Method: external merge Disk" কী নির্দেশ করে এবং কীভাবে এটি সমাধান করবেন?'
      },
      a: {
        en: 'It indicates that the memory required to sort the result set exceeded the configured work_mem threshold, forcing the engine to spill temporary sort batches to disk storage. Disk I/O is thousands of times slower than RAM. You resolve this by either creating an index matching the ORDER BY clause (eliminating the sort entirely) or increasing work_mem for that query session.',
        bn: 'এটি নির্দেশ করে যে সর্ট করার ডাটার আকার work_mem সীমার চেয়ে বেশি ছিল, যার ফলে ইঞ্জিন মেমরি ছেড়ে ধীরগতির হার্ড ড্রাইভে অস্থায়ী ফাইল লিখে সর্ট করেছে। ORDER BY কলামের ওপর একটি B-Tree ইনডেক্স তৈরি করে সর্টিং পুরোপুরি বাদ দেওয়া যায় অথবা সেশনে work_mem বাড়িয়ে মেমরির ভেতরেই দ্রুত সর্ট সম্পন্ন করা যায়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'GitHub: Optimizing repository pull request feed queries by transitioning from traditional OFFSET pagination to keyset cursor pagination across millions of commits.',
      bn: 'গিটহাব: কোটি কোটি কমিট ডাটার ক্ষেত্রে চিরাচরিত OFFSET পেজিনেশন বাদ দিয়ে কি-সেট কার্সার পেজিনেশনে রূপান্তরের মাধ্যমে পুল রিকোয়েস্ট ফিডের গতি অপ্টিমাইজেশন।'
    },
    {
      en: 'Slack: Eliminating production database CPU spikes across millions of daily messages by replacing un-sargable string prefix searches with specialized GIN trigram indexes.',
      bn: 'স্ল্যাক: আন-সারগেবল টেক্সট সার্চের বদলে বিশেষায়িত GIN ট্রাইগ্রাম ইনডেক্স ব্যবহার করে কোটি কোটি মেসেজে ডাটাবেস সিপিইউ চাপ নির্মূল।'
    },
    {
      en: 'Shopify: Accelerating Black Friday flash-sale checkout queries by analyzing pg_stat_statements to identify and eliminate expensive nested loop joins on un-indexed foreign keys.',
      bn: 'শপিফাই: ব্ল্যাক ফ্রাইডে বিক্রয়ের সময় pg_stat_statements বিশ্লেষণ করে ইনডেক্সহীন ফরেন কি-র ধীরগতির নেস্টেড লুপ জয়েন চিহ্নিত ও দূরীকরণ।'
    },
    {
      en: 'Uber: Mitigating external disk spills on heavy driver geospatial dispatch queries by tuning PostgreSQL work_mem and shared_buffers memory allocations.',
      bn: 'উবার: জটিল ড্রাইভার লোকেশন কোয়েরিতে ডিস্ক স্পিল প্রতিরোধ করতে PostgreSQL-এর work_mem এবং shared_buffers মেমরি টিউনিং।'
    }
  ]
};
