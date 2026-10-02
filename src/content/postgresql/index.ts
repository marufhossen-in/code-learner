import type { Hub } from '../../lib/types';
import { ClustersAndTheHerdLesson } from './lessons/clusters-and-the-herd';
import { JsonsAndTheArrayLesson } from './lessons/jsons-and-the-array';
import { QueriesAndTheCteLesson } from './lessons/queries-and-the-cte';
import { ConstraintsAndTheKeyLesson } from './lessons/constraints-and-the-key';
import { FuncsAndTheProcedureLesson } from './lessons/funcs-and-the-procedure';
import { ReplicasAndTheWalLesson } from './lessons/replicas-and-the-wal';
import { RolesAndTheGrantLesson } from './lessons/roles-and-the-grant';
import { ThePostgresReleaseLesson } from './lessons/the-postgres-release';

export const postgresqlHub: Hub = {
  slug: 'postgresql',
  name: 'PostgreSQL',
  icon: '🐘',
  tagline: {
    en: 'Master enterprise relational data modeling, JSONB indexing, recursive CTEs, PL/pgSQL triggers, WAL replication, and query execution planning with PostgreSQL.',
    bn: 'PostgreSQL দিয়ে এন্টারপ্রাইজ রিলেশনাল ডেটা মডেলিং, JSONB ইনডেক্সিং, রিকার্সিভ CTE, PL/pgSQL ট্রিগার, WAL রেপ্লিকেশন এবং কুয়েরি প্ল্যানিং আয়ত্ত করুন।'
  },
  intro: {
    en: 'PostgreSQL is an advanced, open-source object-relational database system renowned for reliability, feature robustness, and extensible data indexing. Built around multi-version concurrency control (MVCC) and write-ahead logging (WAL), PostgreSQL delivers strict ACID guarantees, rich semi-structured JSONB capabilities, and declarative Row-Level Security. This curriculum takes you from server process architecture and complex analytical window queries to high-availability streaming replication, GIN/GiST indexing, and production database vacuum tuning.',
    bn: 'PostgreSQL হলো একটি অত্যন্ত শক্তিশালী, ওপেন-সোর্স অবজেক্ট-রিলেশনাল ডাটাবেস সিস্টেম যা নির্ভরযোগ্যতা ও ফিচার সমৃদ্ধির জন্য বিশ্বজুড়ে সুপরিচিত। মাল্টি-ভার্সন কনকারেন্সি কন্ট্রোল (MVCC) এবং রাইট-অ্যাহেড লগিংয়ের (WAL) ওপর ভিত্তি করে তৈরি PostgreSQL শতভাগ ACID নিশ্চয়তা, শক্তিশালী JSONB ফিচার এবং রো-লেভেল সিকিউরিটি প্রদান করে। এই কারিকুলামটি আপনাকে সার্ভার প্রসেস আর্কিটেকচার থেকে শুরু করে জটিল অ্যানালিটিক্যাল কুয়েরি, হাই-অ্যাভেইলেবিলিটি স্ট্রিমিং রেপ্লিকেশন, GIN/GiST ইনডেক্সিং এবং ভ্যাকুয়াম টিউনিং পর্যন্ত দক্ষ করে তুলবে।'
  },
  roadmap: [
    {
      title: { en: 'Stage 1: Architecture, Storage & Semi-Structured Data', bn: 'ধাপ ১: আর্কিটেকচার, স্টোরেজ ও সেমি-স্ট্রাকচার্ড ডেটা' },
      items: [
        { en: 'Server processes, shared buffers, schemas, and PgBouncer connection pooling.', bn: 'সার্ভার প্রসেস, শেয়ার্ড বাফার, স্কিমা এবং PgBouncer কানেকশন পুলিং।' },
        { en: 'Native Arrays, JSON vs JSONB, containment operators (@>), and GIN indexing.', bn: 'নেটিভ অ্যারে, JSON বনাম JSONB, কনটেইনমেন্ট অপারেটর (@>) এবং GIN ইনডেক্সিং।' },
        { en: 'Common Table Expressions (CTEs), Recursive CTEs, and analytical Window Functions.', bn: 'কমন টেবিল এক্সপ্রেশন (CTE), রিকার্সিভ CTE এবং অ্যানালিটিক্যাল উইন্ডো ফাংশন।' }
      ]
    },
    {
      title: { en: 'Stage 2: Integrity, Programmability & High Availability', bn: 'ধাপ ২: ডেটা ইন্টিগ্রিটি, প্রোগ্রামিং ও হাই অ্যাভেইলেবিলিটি' },
      items: [
        { en: 'Constraints, foreign keys with ON DELETE CASCADE, CHECK rules, and Exclusion constraints.', bn: 'কনস্ট্রেইন্ট, ক্যাসকেড সহ ফরেন কি, চেক রুল এবং এক্সক্লুশন কনস্ট্রেইন্ট।' },
        { en: 'PL/pgSQL functions, Stored Procedures with transactions, and Trigger pipelines.', bn: 'PL/pgSQL ফাংশন, ট্রানজ্যাকশন সমৃদ্ধ স্টোর্ড প্রসিডিউর এবং ট্রিগার।' },
        { en: 'Write-Ahead Logging (WAL), physical streaming replication, and Point-In-Time Recovery.', bn: 'রাইট-অ্যাহেড লগিং (WAL), ফিজিক্যাল স্ট্রিমিং রেপ্লিকেশন এবং পয়েন্ট-ইন-টাইম রিকভারি।' }
      ]
    },
    {
      title: { en: 'Stage 3: Security, Optimization & Production Operations', bn: 'ধাপ ৩: নিরাপত্তা, অপ্টিমাইজেশন ও প্রোডাকশন পরিচালনা' },
      items: [
        { en: 'Role-Based Access Control (RBAC), multi-tenancy, and Row-Level Security (RLS) policies.', bn: 'রোল-বেসড এক্সেস কন্ট্রোল (RBAC), মাল্টি-টেন্যান্সি এবং রো-লেভেল সিকিউরিটি (RLS)।' },
        { en: 'EXPLAIN ANALYZE execution planning, B-Tree vs BRIN vs GiST indexes, and Autovacuum tuning.', bn: 'EXPLAIN ANALYZE কুয়েরি প্ল্যানিং, বি-ট্রি বনাম ব্রিন বনাম গিস্ট ইনডেক্স এবং অটোভ্যাকুয়াম টিউনিং।' }
      ]
    }
  ],
  lessons: [
    ClustersAndTheHerdLesson,
    JsonsAndTheArrayLesson,
    QueriesAndTheCteLesson,
    ConstraintsAndTheKeyLesson,
    FuncsAndTheProcedureLesson,
    ReplicasAndTheWalLesson,
    RolesAndTheGrantLesson,
    ThePostgresReleaseLesson
  ],
  projects: [
    {
      title: { en: 'Multi-Tenant SaaS Analytics Engine with Row-Level Security', bn: 'রো-লেভেল সিকিউরিটি সমৃদ্ধ মাল্টি-টেন্যান্ট SaaS অ্যানালিটিক্স ইঞ্জিন' },
      brief: {
        en: 'Architect a multi-tenant platform using PostgreSQL Row-Level Security (RLS) policies to isolate corporate tenant records automatically within a single unified database. Utilize JSONB event payloads indexed with GIN to power flexible client auditing dashboards.',
        bn: 'PostgreSQL রো-লেভেল সিকিউরিটি (RLS) পলিসি ব্যবহার করে একটি একক ডাটাবেসে বিভিন্ন কোম্পানির ডেটা স্বয়ংক্রিয়ভাবে আলাদা রাখার ব্যবস্থা করুন। নমনীয় অডিট ড্যাশবোর্ডের জন্য GIN ইনডেক্সযুক্ত JSONB ইভেন্ট পে-লোড ব্যবহার করুন।'
      }
    },
    {
      title: { en: 'High-Throughput Financial Ledger with Recursive CTEs & Auditing Triggers', bn: 'রিকার্সিভ CTE ও অডিট ট্রিগার সমৃদ্ধ ফিনান্সিয়াল লেজার প্ল্যাটফর্ম' },
      brief: {
        en: 'Construct an immutable financial double-entry accounting ledger using CHECK constraints, PL/pgSQL transaction procedures, and AFTER INSERT auditing triggers. Implement recursive CTEs to traverse complex organizational hierarchy chains instantaneously.',
        bn: 'চেক কনস্ট্রেইন্ট, PL/pgSQL ট্রানজ্যাকশন প্রসিডিউর এবং অডিট ট্রিগার ব্যবহার করে একটি অপরিবর্তনীয় ব্যাংকিং লেজার তৈরি করুন। প্রতিষ্ঠানের জটিল হায়ারার্কি তাৎক্ষণিকভাবে বের করতে রিকার্সিভ CTE বাস্তবায়ন করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always prefer JSONB over plain JSON for document storage to gain binary pre-parsing, duplicate key elimination, and GIN containment index acceleration.',
      bn: 'ডকুমেন্ট সংরক্ষণে সাধারণ JSON-এর বদলে সর্বদা JSONB বেছে নিন যা বাইনারি পার্সিং, ডুপ্লিকেট কি দূরীকরণ এবং GIN ইনডেক্স সুবিধা দেয়।'
    },
    {
      en: 'Deploy PgBouncer or an external connection pooler in transaction pooling mode to protect PostgreSQL process-per-connection RAM limits under high concurrency.',
      bn: 'উচ্চ ট্রাফিকে মেমরি অপচয় রোধ করতে PostgreSQL সার্ভারের সামনে ট্রানজ্যাকশন মোডে PgBouncer কানেকশন পুলার স্থাপন করুন।'
    },
    {
      en: 'Run EXPLAIN (ANALYZE, BUFFERS) before optimizing slow queries to inspect actual disk block reads and detect catastrophic Sequential Scans.',
      bn: 'ধীরগতির কুয়েরি অপ্টিমাইজ করার আগে ডিস্ক রিড ও ক্ষতিকর সিকোয়েনশিয়াল স্ক্যান শনাক্ত করতে EXPLAIN (ANALYZE, BUFFERS) ব্যবহার করুন।'
    },
    {
      en: 'Never disable Autovacuum in production; tune autovacuum_vacuum_scale_factor and autovacuum_vacuum_cost_limit to eliminate table bloat proactively.',
      bn: 'প্রোডাকশনে কখনো অটোভ্যাকুয়াম বন্ধ করবেন না; টেবিল ব্লোট প্রতিরোধ করতে স্কেল ফ্যাক্টর ও কস্ট লিমিট সঠিকভাবে টিউন করুন।'
    },
    {
      en: 'Enforce explicit foreign key constraints with indexed referencing columns to prevent deadlocks and full table scans during cascade deletions.',
      bn: 'ক্যাসকেড ডিলিটের সময় ডেডলক ও টেবিল স্ক্যান এড়াতে ফরেন কি কলামগুলোর ওপর সর্বদা স্পষ্ট ইনডেক্স তৈরি করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the architectural difference between JSON and JSONB data types in PostgreSQL?',
        bn: 'PostgreSQL-এ JSON এবং JSONB ডেটা টাইপের মধ্যে স্থাপত্যগত পার্থক্য কী?'
      },
      a: {
        en: 'The JSON type stores exact textual representations, preserving whitespace and key order but requiring re-parsing on every query execution. In contrast, JSONB parses text into a decompressed binary format upon insertion, stripping whitespace and deduplicating keys. JSONB supports high-speed indexing via GIN indexes and rapid JSON path queries using containment operators (@>).',
        bn: 'JSON টাইপ হুবহু টেক্সট ফরম্যাটে ডেটা রাখে যা হোয়াইটস্পেস ও কি-র ক্রম বজায় রাখে তবে প্রতিবার কুয়েরি করার সময় পুনরায় পার্স করতে হয়। অন্যদিকে JSONB লেখার সময় ডেটাকে বাইনারিতে রূপান্তর করে হোয়াইটস্পেস মুছে দেয় এবং ডুপ্লিকেট কি দূর করে। JSONB-তে GIN ইনডেক্স তৈরি করা যায় এবং কনটেইনমেন্ট অপারেটর (@>) দিয়ে বিদ্যুৎগতিতে কুয়েরি চালানো যায়।'
      }
    },
    {
      q: {
        en: 'How does Multi-Version Concurrency Control (MVCC) operate in PostgreSQL, and why is VACUUM necessary?',
        bn: 'PostgreSQL-এ মাল্টি-ভার্সন কনকারেন্সি কন্ট্রোল (MVCC) কীভাবে কাজ করে এবং VACUUM কেন অপরিহার্য?'
      },
      a: {
        en: 'MVCC allows readers and writers to operate concurrently without locking one another: UPDATE statements do not overwrite existing rows in place; instead, they mark the old row as dead (setting xmax) and insert a new version of the row. VACUUM scans table pages to reclaim space occupied by dead row versions, updates transaction visibility maps, and prevents 32-bit transaction ID wraparound catastrophe.',
        bn: 'MVCC রিডার ও রাইটারদের একে অপরকে লক না করেই কাজ করতে দেয়: কোনো রো UPDATE করলে আগের ডেটা মুছে ফেলা হয় না, বরং আগেরটিকে ডেড রো (xmax সেট করে) চিহ্নিত করে নতুন রো তৈরি করা হয়। VACUUM মেমরি পেজগুলো স্ক্যান করে ডেড রোগুলোর জায়গা খালি করে এবং ৩২-বিট ট্রানজ্যাকশন আইডি মোড়কীকরণ বিপর্যয় রোধ করে।'
      }
    },
    {
      q: {
        en: 'What is the difference between a Common Table Expression (CTE) and a temporary table in PostgreSQL?',
        bn: 'PostgreSQL-এ কমন টেবিল এক্সপ্রেশন (CTE) এবং টেম্পোরারি টেবিলের মধ্যে পার্থক্য কী?'
      },
      a: {
        en: 'A CTE (defined via the WITH clause) exists only for the duration of a single query statement and is optimized by the planner, serving as a readable alternative to deeply nested subqueries. A temporary table is a physical disk-backed table scoped to the entire database session that requires catalog overhead, generates statistics, and persists across multiple distinct query transactions until the session disconnects.',
        bn: 'একটি CTE (WITH ক্লজ দিয়ে তৈরি) শুধুমাত্র একটিমাত্র কুয়েরি চলাকালীন টিকে থাকে এবং কুয়েরি প্ল্যানার দ্বারা সরাসরি অপ্টিমাইজ হয়। অন্যদিকে টেম্পোরারি টেবিল সম্পূর্ণ ডাটাবেস সেশনজুড়ে ডিস্কে সংরক্ষিত একটি টেবিল যা ক্যাটালগে জায়গা নেয় এবং সেশন ডিসকানেক্ট না হওয়া পর্যন্ত একাধিক ট্রানজ্যাকশনে বিদ্যমান থাকে।'
      }
    },
    {
      q: {
        en: 'How does Write-Ahead Logging (WAL) guarantee durability, and how does it power streaming replication?',
        bn: 'রাইট-অ্যাহেড লগিং (WAL) কীভাবে ডেটার স্থায়িত্ব নিশ্চিত করে এবং স্ট্রিমিং রেপ্লিকেশন পরিচালনা করে?'
      },
      a: {
        en: 'PostgreSQL mandates that any data modification must be flushed to the sequential Write-Ahead Log on disk before the corresponding in-memory shared buffer data pages can be written to disk. During crash recovery, PostgreSQL replays WAL records to restore database consistency. For streaming replication, the primary server streams these WAL byte sequences over TCP sockets to standby replica servers, which continuously replay them to remain synchronized.',
        bn: 'PostgreSQL নিয়ম অনুযায়ী মূল ডেটা পেজ ডিস্কে লেখার আগেই সেই পরিবর্তনের তথ্য ধারাবাহিকভাবে ডিস্কের WAL ফাইলে সেভ হতে হয়। সার্ভার ক্র্যাশ করলে WAL রেকর্ড পুনরায় চালিয়ে ডাটাবেস উদ্ধার করা হয়। স্ট্রিমিং রেপ্লিকেশনের সময় প্রাইমারি সার্ভার এই WAL বাইটগুলো নেটওয়ার্কের মাধ্যমে স্ট্যান্ডবাই সার্ভারে পাঠায়, যা স্ট্যান্ডবাই সার্ভার পুনরায় প্লে করে সবসময় আপ-টু-ডেট থাকে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Apple and Instagram deploy tens of thousands of PostgreSQL shards to manage user media metadata, combining JSONB document indexing with high-concurrency connection pooling.',
      bn: 'অ্যাপল ও ইনস্টাগ্রাম কোটি কোটি ব্যবহারকারীর মিডিয়া মেটাডেটা পরিচালনায় হাজার হাজার PostgreSQL শার্ড ব্যবহার করে, যেখানে JSONB ইনডেক্সিং ও কানেকশন পুলিং প্রধান ভূমিকা পালন করে।'
    },
    {
      en: 'Fintech platforms like Revolut and Stripe leverage PostgreSQL strict ACID serializable transaction isolations and Row-Level Security policies to secure multi-currency ledgers against financial fraud.',
      bn: 'রেভল্যুট ও স্ট্রাইপের মতো শীর্ষ ফিনটেক প্ল্যাটফর্মগুলো বহু-মুদ্রা লেজারের শতভাগ আর্থিক সুরক্ষা নিশ্চিত করতে PostgreSQL-এর কঠোর সিরিয়ালাইজেবল আইসোলেশন ও রো-লেভেল সিকিউরিটি ব্যবহার করে।'
    },
    {
      en: 'Cloud delivery networks like Cloudflare utilize PostgreSQL alongside the pgvector and PostGIS extensions to query high-dimensional machine learning embeddings and geospatial traffic routing models.',
      bn: 'ক্লাউডফ্লেয়ারের মতো গ্লোবাল নেটওয়ার্কগুলো মেশিন লার্নিং ভেক্টর এবং ভৌগোলিক ট্রাফিক রাউটিং পরিচালনায় pgvector ও PostGIS এক্সটেনশন সমৃদ্ধ PostgreSQL ব্যবহার করে।'
    }
  ]
};
