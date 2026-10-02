import type { Hub } from '../../lib/types';
import { EntitiesAndTheRelationLesson } from './lessons/entities-and-the-relation';
import { SchemasAndTheTableLesson } from './lessons/schemas-and-the-table';
import { KeysAndTheKeyLesson } from './lessons/keys-and-the-key';
import { JoinsAndTheJoinLesson } from './lessons/joins-and-the-join';
import { NormsAndTheFormLesson } from './lessons/norms-and-the-form';
import { TxnsAndTheAcidLesson } from './lessons/txns-and-the-acid';
import { IndexesAndTheIndexLesson } from './lessons/indexes-and-the-index';
import { TheDbReleaseLesson } from './lessons/the-db-release';

export const dbFundamentalsHub: Hub = {
  slug: 'db-fundamentals',
  name: 'Database Fundamentals',
  icon: '🗄️',
  tagline: {
    en: 'Master relational database engineering: entity modeling, schemas, keys, relational joins, normalization, ACID transactions, and B-Tree indexes.',
    bn: 'রিলেশনাল ডাটাবেস ইঞ্জিনিয়ারিং আয়ত্ত করুন: এন্টিটি মডেলিং, স্কিমা, কি, রিলেশনাল জয়েন, নরমালাইজেশন, ACID ট্রানজ্যাকশন এবং বি-ট্রি ইনডেক্স।'
  },
  intro: {
    en: 'A comprehensive, beginner-to-expert guide to relational database systems (RDBMS). Learn how real-world entities map to mathematical relations, enforce referential integrity with primary and foreign keys, combine records with inner and outer joins, eliminate update anomalies through 3NF normalization, guarantee consistency with ACID transactions, and accelerate queries using B-Tree indexes.',
    bn: 'রিলেশনাল ডাটাবেস সিস্টেমের (RDBMS) ওপর একটি পূর্ণাঙ্গ প্রাথমিক থেকে বিশেষজ্ঞ গাইড। বাস্তব জীবনের এন্টিটি থেকে গাণিতিক রিলেশন তৈরি, প্রাইমারি ও ফরেন কি দিয়ে রেফারেন্সিয়াল ইন্টিগ্রিটি রক্ষা, ইনার ও আউটার জয়েনের মাধ্যমে রেকর্ড একত্রীকরণ, ৩য় নরমাল ফর্মের মাধ্যমে ডাটা পুনরাবৃত্তি দূরীকরণ, ACID ট্রানজ্যাকশন দিয়ে নির্ভরযোগ্যতা এবং বি-ট্রি ইনডেক্স দিয়ে দ্রুত কোয়েরি করার কৌশল শিখুন।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1: Entity Modeling & Relational Schema Design',
        bn: 'ধাপ ১: এন্টিটি মডেলিং ও রিলেশনাল স্কিমা ডিজাইন'
      },
      items: [
        {
          en: 'Entities and mathematical relations: tuples, attributes, cardinality, and domains',
          bn: 'এন্টিটি ও গাণিতিক রিলেশন: টিউপল, অ্যাট্রিবিউট, কার্ডিনালিটি এবং ডোমেইন'
        },
        {
          en: 'DDL schema definition: primitive data types, nullability, and column constraints',
          bn: 'DDL স্কিমা তৈরি: প্রিমিটিভ ডাটা টাইপ, নাল-যোগ্যতা এবং কলাম কনস্ট্রেইন্ট'
        },
        {
          en: 'Keys & referential integrity: primary keys, composite keys, foreign keys, and cascade actions',
          bn: 'কি ও রেফারেন্সিয়াল ইন্টিগ্রিটি: প্রাইমারি কি, কম্পোজিট কি, ফরেন কি এবং ক্যাসকেড অ্যাকশন'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2: Relational Queries, Normalization & ACID Transactions',
        bn: 'ধাপ ২: রিলেশনাল কোয়েরি, নরমালাইজেশন ও ACID ট্রানজ্যাকশন'
      },
      items: [
        {
          en: 'Multi-table queries: Inner, Left, Right, Full Outer, and Cross Joins with Venn logic',
          bn: 'মাল্টি-টেবিল কোয়েরি: ভেন ডায়াগ্রাম লজিক সহ ইনার, লেফট, রাইট, ফুল আউটার এবং ক্রস জয়েন'
        },
        {
          en: 'Normalization forms: 1NF atomicity, 2NF partial dependencies, and 3NF transitive dependencies',
          bn: 'নরমালাইজেশন নিয়ম: ১ম নরমাল ফর্ম, ২য় নরমাল ফর্ম এবং ৩য় নরমাল ফর্ম'
        },
        {
          en: 'ACID transaction guarantees: Atomicity, Consistency, Isolation levels, and WAL durability',
          bn: 'ACID ট্রানজ্যাকশন নিশ্চয়তা: অ্যাটোমিসিটি, কনসিস্টেন্সি, আইসোলেশন লেভেল এবং WAL স্থায়িত্ব'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3: B-Tree Indexing & Safe Production Migrations',
        bn: 'ধাপ ৩: বি-ট্রি ইনডেক্সিং ও নিরাপদ প্রোডাকশন মাইগ্রেশন'
      },
      items: [
        {
          en: 'B-Tree indexing internals: clustered indexes, secondary lookups, and composite selectivity',
          bn: 'বি-ট্রি ইনডেক্স ইন্টারনালস: ক্লাস্টার্ড ইনডেক্স, সেকেন্ডারি লুকআপ এবং কম্পোজিট সিলেক্টিভিটি'
        },
        {
          en: 'Production deployment: zero-downtime schema migrations, lock modes, and rollback strategies',
          bn: 'প্রোডাকশন ডেপ্লয়মেন্ট: জিরো-ডাউনটাইম স্কিমা মাইগ্রেশন, টেবিল লক মোড এবং রোলব্যাক কৌশল'
        }
      ]
    }
  ],
  lessons: [
    EntitiesAndTheRelationLesson,
    SchemasAndTheTableLesson,
    KeysAndTheKeyLesson,
    JoinsAndTheJoinLesson,
    NormsAndTheFormLesson,
    TxnsAndTheAcidLesson,
    IndexesAndTheIndexLesson,
    TheDbReleaseLesson
  ],
  projects: [
    {
      title: {
        en: 'High-Concurrency E-Commerce Relational Engine',
        bn: 'হাই-কনকারেন্সি ই-কমার্স রিলেশনাল ইঞ্জিন'
      },
      brief: {
        en: 'Architect a complete multi-table transactional relational schema managing users, product catalogs, customer shopping carts, and financial checkouts. Implement strict foreign keys with cascading rules, composite primary keys on line items, and transactional inventory reservations under Read Committed isolation.',
        bn: 'ব্যবহারকারী, পণ্য ক্যাটালগ, শপিং কার্ট এবং পেমেন্ট চেকআউট পরিচালনার জন্য একটি পূর্ণাঙ্গ মাল্টি-টেবিল রিলেশনাল স্কিমা তৈরি করুন। এতে ক্যাসকেডিং নিয়ম সহ কঠোর ফরেন কি, লাইন আইটেমে কম্পোজিট প্রাইমারি কি এবং রিড কমিটেড আইসোলেশনে স্টক রিজার্ভেশন ট্রানজ্যাকশন বাস্তবায়ন করুন।'
      }
    },
    {
      title: {
        en: 'Banking Ledger & Tamper-Resistant Audit Log',
        bn: 'ব্যাংকিং লেজার ও টেম্পার-রেজিস্ট্যান্ট অডিট লগ'
      },
      brief: {
        en: 'Build a double-entry financial ledger database enforcing immutable accounting invariants. Implement strict debit/credit balance checks, zero-balance assertion triggers, repeatable read transaction isolation to eliminate race conditions, and composite B-Tree indexes for sub-millisecond statement generation.',
        bn: 'অপরিবর্তনীয় অ্যাকাউন্টিং নিয়ম কার্যকর করতে একটি ডাবল-এন্ট্রি ফাইন্যান্সিয়াল লেজার ডাটাবেস তৈরি করুন। ডেবিট ও ক্রেডিটের ভারসাম্য যাচাই, জিরো-ব্যালেন্স অ্যাসার্শন, রেস কন্ডিশন এড়াতে রিপিটেবল রিড ট্রানজ্যাকশন আইসোলেশন এবং মিলিসেকেন্ডের নিচে স্টেটমেন্ট তৈরির জন্য কম্পোজিট বি-ট্রি ইনডেক্স বাস্তবায়ন করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Enforce structural data integrity at the database schema layer using NOT NULL, CHECK, UNIQUE, and FOREIGN KEY constraints rather than relying purely on client application logic.',
      bn: 'কেবল অ্যাপ্লিকেশন কোডের ওপর নির্ভর না করে ডাটাবেস স্কিমা স্তরেই NOT NULL, CHECK, UNIQUE এবং FOREIGN KEY কনস্ট্রেইন্ট ব্যবহার করে কাঠামোগত অখণ্ডতা নিশ্চিত করুন।'
    },
    {
      en: 'Always select specific, explicit column names in production SQL queries; avoid SELECT * to prevent unnecessary network payload bloat and unlock covering index optimizations.',
      bn: 'প্রোডাকশন কোয়েরিতে সর্বদা সুনির্দিষ্ট কলামের নাম উল্লেখ করুন; নেটওয়ার্ক পে-লোড কমাতে এবং কাভারিং ইনডেক্সের সর্বোচ্চ সুবিধা পেতে SELECT * ব্যবহার পরিহার করুন।'
    },
    {
      en: 'Store currency values using fixed-point NUMERIC or DECIMAL types rather than floating-point (FLOAT or DOUBLE) to eliminate round-off calculation errors in financial transactions.',
      bn: 'আর্থিক হিসাব-নিকাশে দশমিকের গোলযোগ ও রাউন্ডিং ত্রুটি এড়াতে ফ্লোটিং পয়েন্টের (FLOAT বা DOUBLE) বদলে সর্বদা ফিক্সড-পয়েন্ট NUMERIC বা DECIMAL টাইপ ব্যবহার করুন।'
    },
    {
      en: 'Explicitly configure foreign key cascade behaviors (such as ON DELETE RESTRICT or ON DELETE CASCADE) to guarantee that child records never become orphaned upon parent row deletion.',
      bn: 'প্যারেন্ট রো মুছে ফেলার পর চাইল্ড রেকর্ড যেন এতিম না হয়ে পড়ে তা নিশ্চিত করতে সর্বদা স্পষ্ট ফরেন কি ক্যাসকেড আচরণ (যেমন ON DELETE RESTRICT বা ON DELETE CASCADE) নির্ধারণ করুন।'
    },
    {
      en: 'Wrap all multi-statement data modifications inside explicit transactions (BEGIN ... COMMIT) with appropriate isolation levels to prevent dirty reads and partial failure states.',
      bn: 'ডার্টি রিড এবং আংশিক ব্যর্থতা রোধ করতে একাধিক স্টেটমেন্টের সকল ডাটা পরিবর্তনকে যথাযথ আইসোলেশন লেভেল সহ স্পষ্ট ট্রানজ্যাকশনের (BEGIN ... COMMIT) মধ্যে আবদ্ধ করুন।'
    },
    {
      en: 'Order composite index columns from highest equality selectivity to range filters (the Equality-Range rule) to allow database query optimizers to prune search trees efficiently.',
      bn: 'ডাটাবেস কোয়েরি অপ্টিমাইজারকে কার্যকরভাবে সার্চ ট্রি প্রুন করতে সাহায্য করার জন্য কম্পোজিট ইনডেক্স কলামগুলো সর্বোচ্চ সমতা সিলেക്টিভিটি থেকে রেঞ্জ ফিল্টার অনুসারে (Equality-Range নিয়ম) সাজান।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the fundamental difference between a Clustered Index and a Non-Clustered (Secondary) Index in an RDBMS?',
        bn: 'রিলেশনাল ডাটাবেসে ক্লাস্টার্ড ইনডেক্স এবং নন-ক্লাস্টার্ড (সেকেন্ডারি) ইনডেক্সের মধ্যে মৌলিক পার্থক্য কী?'
      },
      a: {
        en: 'A clustered index determines the physical storage order of table rows on disk; because data can only be stored in one physical sequence, a table can possess only one clustered index (typically the primary key). Leaf nodes of a clustered index contain the actual row data. In contrast, a non-clustered index creates a separate B-Tree whose leaf nodes contain index keys and row pointers (such as the clustered primary key or physical RID) pointing to the original table records. A table can maintain dozens of secondary indexes.',
        bn: 'ক্লাস্টার্ড ইনডেক্স ডিস্কে টেবিল সারির ভৌত সঞ্চয়স্থান ক্রম (physical storage order) নির্ধারণ করে; যেহেতু ডাটা কেবল একটি ভৌত ক্রমে সাজানো সম্ভব, তাই একটি টেবিলে কেবল একটিই ক্লাস্টার্ড ইনডেক্স থাকতে পারে (সাধারণত প্রাইমারি কি)। ক্লাস্টার্ড ইনডেক্সের লিফ নোডে সরাসরি সম্পূর্ণ সারির ডাটা সংরক্ষিত থাকে। অন্যদিকে, নন-ক্লাস্টার্ড বা সেকেন্ডারি ইনডেক্স একটি পৃথক বি-ট্রি তৈরি করে যার লিফ নোডে ইনডেক্স কি এবং মূল সারির নির্দেশক পয়েন্টার (যেমন ক্লাস্টার্ড প্রাইমারি কি) থাকে। একটি টেবিলে একাধিক সেকেন্ডারি ইনডেক্স তৈরি করা যায়।'
      }
    },
    {
      q: {
        en: 'What are the four ACID transaction properties and how does a relational database enforce them?',
        bn: 'ACID ট্রানজ্যাকশনের চারটি প্রধান বৈশিষ্ট্য কী এবং একটি রিলেশনাল ডাটাবেস কীভাবে এগুলো কার্যকর করে?'
      },
      a: {
        en: 'ACID represents Atomicity (all-or-nothing execution), Consistency (state transitions respect all schema constraints and foreign keys), Isolation (concurrent transactions execute without corrupting each other), and Durability (committed changes persist permanently even after hardware crashes). Relational databases enforce Atomicity and Durability using Write-Ahead Logging (WAL) and undo/redo logs, while Isolation is achieved through multi-version concurrency control (MVCC) and row-level locks.',
        bn: 'ACID নির্দেশ করে অ্যাটোমিসিটি (সবটুকু সম্পন্ন হবে নয়তো কিছুই নয়), কনসিস্টেন্সি (প্রতিটি পরিবর্তন সকল স্কিমা কনস্ট্রেইন্ট মেনে চলে), আইসোলেশন (একসাথে চলা ট্রানজ্যাকশনগুলো একে অপরকে প্রভাবিত করে না), এবং স্থায়িত্ব বা ডিউরেবিলিটি (সার্ভার ক্র্যাশ করলেও সফল কমিট হওয়া ডাটা অক্ষত থাকে)। ডাটাবেস রাইট-অ্যাহেড লগিং (WAL) ও আনডু/রিডু লগের মাধ্যমে অ্যাটোমিসিটি ও স্থায়িত্ব দেয় এবং মাল্টি-ভার্সন কনকারেন্সি কন্ট্রোল (MVCC) ও রো-লেভেল লকের মাধ্যমে আইসোলেশন বজায় রাখে।'
      }
    },
    {
      q: {
        en: 'What are 1NF, 2NF, and 3NF, and what specific anomalies does normalization eliminate?',
        bn: '১ম, ২য় এবং ৩য় নরমাল ফর্ম (1NF, 2NF, 3NF) কী এবং নরমালাইজেশন কোন নির্দিষ্ট ত্রুটিগুলো দূর করে?'
      },
      a: {
        en: 'First Normal Form (1NF) requires all column values to be atomic (no arrays or comma-delimited lists) with unique rows identified by a primary key. Second Normal Form (2NF) enforces 1NF and removes partial functional dependencies, requiring all non-key columns to depend on the whole primary key. Third Normal Form (3NF) enforces 2NF and removes transitive dependencies, ensuring non-key columns depend only on the primary key and not on other non-key columns. Normalization eliminates insertion, update, and deletion anomalies, preventing data drift.',
        bn: '১ম নরমাল ফর্ম (1NF) নিশ্চিত করে প্রতিটি কলামের মান অ্যাটমিক বা অবিভাজ্য হবে (কোনো অ্যারে বা কমাযুক্ত তালিকা থাকবে না) এবং প্রতিটি রো প্রাইমারি কি দিয়ে চিহ্নিত হবে। ২য় নরমাল ফর্ম (2NF) আংশিক নির্ভরতা (partial dependency) দূর করে নিশ্চিত করে যে প্রতিটি নন-কি কলাম সম্পূর্ণ প্রাইমারি কি-এর ওপর নির্ভরশীল। ৩য় নরমাল ফর্ম (3NF) ট্রানজিটিভ নির্ভরতা দূর করে নিশ্চিত করে যে নন-কি কলামগুলো কেবল প্রাইমারি কি-এর ওপর নির্ভর করবে, অন্য কোনো নন-কি কলামের ওপর নয়। নরমালাইজেশন ইনসার্ট, আপডেট ও ডিলিট অ্যানোমালি দূর করে ডাটার অসঙ্গতি রোধ করে।'
      }
    },
    {
      q: {
        en: 'How do an INNER JOIN, LEFT OUTER JOIN, and FULL OUTER JOIN differ in their handling of non-matching records?',
        bn: 'অমিল থাকা রেকর্ডের ক্ষেত্রে INNER JOIN, LEFT OUTER JOIN এবং FULL OUTER JOIN এর মধ্যে পার্থক্য কী?'
      },
      a: {
        en: 'An INNER JOIN discards non-matching rows from both tables, returning only records where the join predicate evaluates to true on both sides. A LEFT OUTER JOIN returns every row from the left table; if a corresponding record does not exist in the right table, right-table columns are populated with NULL. A FULL OUTER JOIN preserves all rows from both tables, returning matched pairs where available and filling missing values from either side with NULL.',
        bn: 'INNER JOIN উভয় টেবিল থেকে অমিল থাকা রেকর্ডগুলো বাদ দেয় এবং কেবল সেই রেকর্ডগুলো রিটার্ন করে যেখানে জয়েন শর্ত উভয় পাশেই সত্য হয়। LEFT OUTER JOIN বাম টেবিলের প্রতিটি রেকর্ড নিশ্চিতভাবে রিটার্ন করে; ডান টেবিলে সংশ্লিষ্ট রেকর্ড না থাকলে ডান পাশের কলামগুলোতে NULL বসিয়ে দেয়। আর FULL OUTER JOIN উভয় টেবিলের সকল রেকর্ড সংরক্ষণ করে, মিল থাকা রেকর্ডগুলো একত্রে দেখায় এবং যেকোনো পাশের অনুপস্থিত মানের জন্য NULL বসায়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Stripe utilizes strict ACID transactions and relational foreign keys across globally distributed databases to guarantee payment idempotency, preventing customers from ever being double-charged during network timeouts.',
      bn: 'স্ট্রাইপ (Stripe) নেটওয়ার্ক টাইমআউটের সময় গ্রাহকদের যেন দ্বিগুণ চার্জ না করা হয় তা নিশ্চিত করতে এবং পেমেন্ট আইডেমপোটেন্সি বজায় রাখতে কঠোর ACID ট্রানজ্যাকশন ও রিলেশনাল ফরেন কি ব্যবহার করে।'
    },
    {
      en: 'Shopify organizes hundreds of millions of product catalogs and merchant storefront inventories using 3NF relational schemas, leveraging B-Tree composite indexes to sustain over 1 million queries per second during flash sales.',
      bn: 'শপিফাই (Shopify) ফ্ল্যাশ সেলের সময় প্রতি সেকেন্ডে ১০ লক্ষাধিক কোয়েরি সামলাতে ৩য় নরমাল ফর্মের রিলেশনাল স্কিমা এবং বি-ট্রি কম্পোজিট ইনডেক্স ব্যবহার করে কোটি কোটি পণ্যের ক্যাটালগ সুবিন্যস্ত রাখে।'
    },
    {
      en: 'Uber coordinates real-time driver dispatch, rider matching, and route tracking by pairing partitioned relational schemas with spatial geospatial indexes and transaction savepoints.',
      bn: 'উবার (Uber) রিয়েল-টাইম ড্রাইভার বণ্টন, রাইডার ম্যাচিং ও ট্রিপ ট্র্যাকিং নির্ভুল রাখতে পার্টিশনযুক্ত রিলেশনাল স্কিমা, জিওস্প্যাশিয়াল ইনডেক্স এবং ট্রানজ্যাকশন সেভপয়েন্ট সমন্বয় করে পরিচালনা করে।'
    },
    {
      en: 'GitHub stores repository metadata, pull requests, issue threads, and commit authorship trees inside highly normalized MySQL clusters backed by read replicas and zero-downtime schema migrations.',
      bn: 'গিটহাব (GitHub) তাদের সকল রিপোজিটরি মেটাডাটা, পুল রিকোয়েস্ট ও ইস্যু ট্র্যাকিং পরিচালনা করতে হাইলি-নরমালাইজড মাইএসকিউএল ক্লাস্টার, রিড রেপ্লিকা এবং জিরো-ডাউনটাইম স্কিমা মাইগ্রেশন ব্যবহার করে।'
    }
  ]
};
