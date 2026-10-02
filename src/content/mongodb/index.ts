import type { Hub } from '../../lib/types';
import { DocsAndTheCollectLesson } from './lessons/docs-and-the-collect';
import { SchemasAndTheFieldLesson } from './lessons/schemas-and-the-field';
import { AggsAndThePipeLesson } from './lessons/aggs-and-the-pipe';
import { IndexesAndTheSearchLesson } from './lessons/indexes-and-the-search';
import { ReplicasAndTheSetLesson } from './lessons/replicas-and-the-set';
import { ShardsAndTheKeyLesson } from './lessons/shards-and-the-key';
import { TxnsAndTheSessionLesson } from './lessons/txns-and-the-session';
import { TheMongoReleaseLesson } from './lessons/the-mongo-release';

export const mongodbHub: Hub = {
  slug: 'mongodb',
  name: 'MongoDB',
  icon: '🍃',
  tagline: {
    en: 'Master NoSQL document databases: collections, BSON, indexing, aggregation pipelines, replica sets, and sharding.',
    bn: 'NoSQL ডকুমেন্ট ডাটাবেস আয়ত্ত করুন: কালেকশন, BSON, ইনডেক্সিং, অ্যাগ্রিগেশন পাইপলাইন, রেপ্লিকা সেট ও শার্ডিং।'
  },
  intro: {
    en: 'MongoDB is the world’s leading document-oriented NoSQL database. Rather than storing records in rigid rows and columns, MongoDB represents entities as rich, hierarchical BSON (Binary JSON) documents. This hub covers the complete engineering spectrum: core CRUD operations and query operators in Lesson 1; document modeling, embedding vs referencing, and $jsonSchema validation in Lesson 2; multi-stage aggregation pipelines ($match, $group, $unwind, $lookup) in Lesson 3; index architectures, compound keys, and explain execution stats in Lesson 4; replica sets and automatic failover in Lesson 5; horizontal scale-out with sharded clusters in Lesson 6; multi-document ACID transactions with sessions in Lesson 7; and production security, role-based access control, and backup automation in Lesson 8.',
    bn: 'MongoDB হলো বিশ্বের শীর্ষস্থানীয় ডকুমেন্ট-ভিত্তিক NoSQL ডাটাবেস। অনমনীয় সারি ও কলামের বদলে মঙ্গোডিবি প্রতিটি সত্তাকে সমৃদ্ধ ও হায়ারার্কিকাল BSON (বাইনারি JSON) ডকুমেন্টে সংরক্ষণ করে। এই ট্র্যাকে সম্পূর্ণ ইঞ্জিনিয়ারিং কভার করা হয়েছে: পাঠ ১-এ মৌলিক CRUD অপারেশন ও কুয়েরি অপারেটর; পাঠ ২-এ ডকুমেন্ট মডেলিং, এমবেডিং বনাম রেফারেন্সিং ও $jsonSchema ভ্যালিডেশন; পাঠ ৩-এ মাল্টি-স্টেজ অ্যাগ্রিগেশন পাইপলাইন ($match, $group, $unwind, $lookup); পাঠ ৪-এ ইনডেক্স আর্কিটেকচার, কম্পাউন্ড কি ও explain প্ল্যান; পাঠ ৫-এ রেপ্লিকা সেট ও স্বয়ংক্রিয় ফেইলওভার; পাঠ ৬-এ শার্ডেড ক্লাস্টারের সাহায্যে অনুভূমিক স্কেলিং; পাঠ ৭-এ সেশনসহ মাল্টি-ডকুমেন্ট ACID ট্রানজ্যাকশন; এবং পাঠ ৮-এ প্রোডাকশন সিকিউরিটি, রোল-ভিত্তিক অ্যাক্সেস ও ব্যাকআপ অটোমেশন।'
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Document Model, CRUD & Schema Design', bn: 'ধাপ ১ — ডকুমেন্ট মডেল, CRUD ও স্কিমা ডিজাইন' },
      items: [
        { en: 'BSON Document structure, ObjectIDs, and collections (Lesson 1)', bn: 'BSON ডকুমেন্ট কাঠামো, ObjectID ও কালেকশন (পাঠ ১)' },
        { en: 'CRUD operations: insertOne, find, updateOne, deleteMany, and query operators (Lesson 1)', bn: 'CRUD অপারেশন: insertOne, find, updateOne, deleteMany ও কুয়েরি অপারেটর (পাঠ ১)' },
        { en: 'Schema design: Embedding vs Referencing and 1:N / N:M patterns (Lesson 2)', bn: 'স্কিমা ডিজাইন: এমবেডিং বনাম রেফারেন্সিং এবং ১:N / N:M প্যাটার্ন (পাঠ ২)' },
        { en: '$jsonSchema validation rules and polymorphic document modeling (Lesson 2)', bn: '$jsonSchema ভ্যালিডেশন নিয়ম ও পলিমরফিক ডকুমেন্ট মডেলিং (পাঠ ২)' },
      ],
    },
    {
      title: { en: 'Stage 2 — Aggregation Pipelines, Indexing & Performance', bn: 'ধাপ ২ — অ্যাগ্রিগেশন পাইপলাইন, ইনডেক্সিং ও পারফরম্যান্স' },
      items: [
        { en: 'Multi-stage aggregation: $match, $group, $project, $unwind, and $lookup joins (Lesson 3)', bn: 'মাল্টি-স্টেজ অ্যাগ্রিগেশন: $match, $group, $project, $unwind ও $lookup জয়েন (পাঠ ৩)' },
        { en: 'Index architectures: single field, compound, unique, multikey, and TTL (Lesson 4)', bn: 'ইনডেক্স আর্কিটেকচার: সিঙ্গেল ফিল্ড, কম্পাউন্ড, ইউনিক, মাল্টিকি ও TTL ইনডেক্স (পাঠ ৪)' },
        { en: 'Query profiling with explain("executionStats") and index coverage (Lesson 4)', bn: 'explain("executionStats") ও ইনডেক্স কাভারেজ দিয়ে কুয়েরি অপটিমাইজেশন (পাঠ ৪)' },
        { en: 'Full-text search ($text) and geospatial indexing (2dsphere) (Lesson 4)', bn: 'ফুল-টেক্সট সার্চ ($text) ও জিওস্প্যাশিয়াল ইনডেক্সিং (2dsphere) (পাঠ ৪)' },
      ],
    },
    {
      title: { en: 'Stage 3 — High Availability, Scaling & ACID Transactions', bn: 'ধাপ ৩ — হাই অ্যাভেইলেবিলিটি, স্কেলিং ও ACID ট্রানজ্যাকশন' },
      items: [
        { en: 'Replica set architecture: Primary, Secondary, Arbiter, and Raft-style elections (Lesson 5)', bn: 'রেপ্লিকা সেট আর্কিটেকচার: প্রাইমারি, সেকেন্ডারি, আর্বিটার ও রাফ্ট নির্বাচন (পাঠ ৫)' },
        { en: 'Write Concern (w: "majority") and Read Concern / Read Preference strategies (Lesson 5)', bn: 'Write Concern (w: "majority") এবং Read Concern / Read Preference কৌশল (পাঠ ৫)' },
        { en: 'Sharded cluster architecture: mongos routers, config servers, and shard keys (Lesson 6)', bn: 'শার্ডেড ক্লাস্টার আর্কিটেকচার: mongos রাউটার, কনফিগ সার্ভার ও শার্ড কি (পাঠ ৬)' },
        { en: 'Multi-document ACID transactions with client sessions and rollback safety (Lesson 7)', bn: 'ক্লায়েন্ট সেশনসহ মাল্টি-ডকুমেন্ট ACID ট্রানজ্যাকশন ও রোলব্যাক সুরক্ষা (পাঠ ৭)' },
        { en: 'Production operations: RBAC security, mongodump backups, and oplog monitoring (Lesson 8)', bn: 'প্রোডাকশন অপারেশন: RBAC সিকিউরিটি, mongodump ব্যাকআপ ও oplog মনিটরিং (পাঠ ৮)' },
      ],
    },
  ],
  lessons: [
    DocsAndTheCollectLesson,
    SchemasAndTheFieldLesson,
    AggsAndThePipeLesson,
    IndexesAndTheSearchLesson,
    ReplicasAndTheSetLesson,
    ShardsAndTheKeyLesson,
    TxnsAndTheSessionLesson,
    TheMongoReleaseLesson,
  ],
  projects: [
    {
      title: { en: 'Enterprise E-Commerce Catalog & Order Processing Engine', bn: 'এন্টারপ্রাইজ ই-কমার্স ক্যাটালগ ও অর্ডার প্রসেসিং ইঞ্জিন' },
      brief: {
        en: 'Architect a high-performance e-commerce database system in MongoDB. Implement polymorphic product catalogs with flexible embedded attributes, customer profiles with referenced order histories, inventory reservation with multi-document ACID transactions, and aggregated sales analytics pipelines computing monthly revenue by product category.',
        bn: 'MongoDB-তে একটি উচ্চগতির ই-কমার্স ডাটাবেস সিস্টেম তৈরি করুন। নমনীয় এমবেডেড অ্যাট্রিবিউটসহ পলিমরফিক প্রোডাক্ট ক্যাটালগ, গ্রাহক প্রোফাইল ও অর্ডার হিস্ট্রি, মাল্টি-ডকুমেন্ট ACID ট্রানজ্যাকশন দিয়ে ইনভেন্টরি রিজার্ভেশন এবং ক্যাটাগরিভিত্তিক মাসিক আয়ের হিসাবের জন্য অ্যাগ্রিগেশন পাইপলাইন বাস্তবায়ন করুন।'
      },
    },
    {
      title: { en: 'High-Throughput Sharded Telemetry & Activity Logging Cluster', bn: 'হাই-থ্রুপুট শার্ডেড টেলিমেট্রি ও অ্যাক্টিভিটি লগিং ক্লাস্টার' },
      brief: {
        en: 'Design an industrial IoT telemetry logging platform capable of ingesting 100,000 events per second. Implement compound shard keys to prevent insertion hot-spotting, time-series collections with automatic TTL expiration, multi-node replica set failover drills, and mongodump snapshot backup automation.',
        bn: 'প্রতি সেকেন্ডে ১,০০,০০০ ইভেন্ট ধারণে সক্ষম একটি আইওটি টেলিমেট্রি লগিং প্ল্যাটফর্ম ডিজাইন করুন। হট-স্পটিং এড়াতে কম্পাউন্ড শার্ড কি, স্বয়ংক্রিয় TTL মেয়াদসহ টাইম-সিরিজ কালেকশন, মাল্টি-নোড রেপ্লিকা সেট ফেইলওভার মহড়া এবং mongodump স্ন্যাপশট ব্যাকআপ অটোমেশন তৈরি করুন।'
      },
    },
  ],
  bestPractices: [
    {
      en: 'Embed entities when data is bounded, queried together, and updated atomically (1:Few); use normalized references for unbounded one-to-many (1:Millions) relationships.',
      bn: 'ডেটার আকার সীমিত ও একসাথে ব্যবহারের প্রয়োজন হলে এমবেড (Embed) করুন (১:কয়েকটি); কিন্তু সীমাহীন সম্পর্কের ক্ষেত্রে রেফারেন্স (Reference) ব্যবহার করুন (১:লক্ষ লক্ষ)।'
    },
    {
      en: 'Always create compound indexes following the Equality, Sort, Range (ESR) rule to maximize query efficiency and prevent in-memory sorts.',
      bn: 'কুয়েরি দ্রুত করতে এবং মেমরি সর্ট এড়াতে সর্বদা Equality, Sort, Range (ESR) নিয়ম মেনে কম্পাউন্ড ইনডেক্স তৈরি করুন।'
    },
    {
      en: 'Enforce write concern w: "majority" on critical financial mutations to guarantee durability across replica set quorums before acknowledging success.',
      bn: 'আর্থিক লেনদেনের ক্ষেত্রে সর্বদা w: "majority" ব্যবহার করুন যাতে সংখ্যাগরিষ্ঠ রেপ্লিকা নোডে ডেটা লেখার পর কনফার্মেশন দেওয়া হয়।'
    },
    {
      en: 'Never run unbounded find() queries in production; always apply explicit projection, indexed sort orders, and defensive limit boundaries.',
      bn: 'প্রোডাকশনে কখনো আনবাউন্ডেড find() চালাবেন না; সর্বদা স্পষ্ট প্রজেকশন, ইনডেক্সযুক্ত সর্ট এবং সর্বোচ্চ লিমিট প্রয়োগ করুন।'
    },
    {
      en: 'Place $match and $project stages as early as possible in aggregation pipelines to minimize working document volumes for subsequent stages.',
      bn: 'অ্যাগ্রিগেশন পাইপলাইনে $match ও $project স্টেজগুলো একদম শুরুতে রাখুন যাতে পরবর্তী স্টেজগুলোতে কম ডেটা প্রসেস করতে হয়।'
    },
    {
      en: 'Choose shard keys with high cardinality, even write distribution, and query frequency to avoid unbalanced chunks and targeted router hot-spots.',
      bn: 'উচ্চ কার্ডিনালিটি ও সুষম ডিস্ট্রিবিউশনযুক্ত শার্ড কি নির্বাচন করুন যাতে একটি নির্দিষ্ট শার্ডে অতিরিক্ত চাপের হট-স্পট তৈরি না হয়।'
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the fundamental difference between Embedding and Referencing in MongoDB schema design, and how do you choose?',
        bn: 'MongoDB স্কিমা ডিজাইনে Embedding (এমবেডিং) এবং Referencing (রেফারেন্সিং)-এর মধ্যে মৌলিক পার্থক্য কী এবং কীভাবে সঠিকটি বেছে নেবেন?'
      },
      a: {
        en: 'Embedding stores child documents directly inside the parent document, enabling atomic reads and writes in a single disk seek. It is ideal for 1:Few relationships where child data is tightly coupled and document size stays well below the 16 MB BSON limit. Referencing stores ObjectIDs pointing to documents in another collection (like SQL foreign keys). It is mandatory for 1:Many unbounded relationships (e.g. users to activity logs) or Many-to-Many graphs to prevent document bloating and write amplification.',
        bn: 'এমবেডিং পদ্ধতিতে চাইল্ড ডেটাকে সরাসরি মূল ডকুমেন্টের ভেতরে রাখা হয়, ফলে একটিমাত্র রিড অপারেশনেই পুরো তথ্য পাওয়া যায়। এটি ১:কয়েকটি সম্পর্কের জন্য আদর্শ যেখানে ডেটা একসাথে লাগে এবং ডকুমেন্টের সাইজ ১৬ মেগাবাইটের কম থাকে। রেফারেন্সিং পদ্ধতিতে অন্য কালেকশনের ডকুমেন্টের ObjectID সংরক্ষণ করা হয় (এসকিউএল ফরেন কির মতো)। সীমাহীন এক-থেকে-বহু (১:লক্ষ লক্ষ) সম্পর্ক বা বহুর-সাথে-বহু সম্পর্কের ক্ষেত্রে ডকুমেন্ট ফাঁপা হওয়া রোধ করতে রেফারেন্সিং ব্যবহার বাধ্যতামূলক।'
      },
    },
    {
      q: {
        en: 'What is the Equality, Sort, Range (ESR) rule for compound index creation in MongoDB?',
        bn: 'MongoDB-তে কম্পাউন্ড ইনডেক্স তৈরির ক্ষেত্রে Equality, Sort, Range (ESR) নিয়মটি কী?'
      },
      a: {
        en: 'The ESR rule governs the optimal order of fields in a compound index: 1) Equality fields (exact matches like status: "active") must come first to narrow down the B-tree search range; 2) Sort fields (like created_at: -1) must come second so the database scans matching index keys in the exact desired sort order without executing expensive in-memory sorting; 3) Range fields (inequalities like age: { $gte: 21 }) must come last because range scans prevent subsequent index keys from being used for sorting.',
        bn: 'ESR নিয়মটি কম্পাউন্ড ইনডেক্সে ফিল্ডের সঠিক ক্রম নির্ধারণ করে: ১) Equality: যেসব ফিল্ডে হুবহু মিল খোঁজা হয় (যেমন status: "active") সেগুলো ইনডেক্সের শুরুতে রাখতে হয়; ২) Sort: সাজানোর ফিল্ডগুলো (যেমন created_at: -1) মাঝে রাখতে হয় যাতে ডাটাবেস কোনো মেমরি সর্ট ছাড়াই ক্রমানুসারে ডেটা পড়তে পারে; ৩) Range: ব্যবধানের ফিল্ডগুলো (যেমন age: { $gte: 21 }) সবার শেষে রাখতে হয়, কারণ রেঞ্জ স্ক্যানের পর আর কোনো ফিল্ড দিয়ে সর্ট করা যায় না।'
      },
    },
    {
      q: {
        en: 'How do MongoDB Replica Sets handle primary node failure and election, and what is an Arbiter?',
        bn: 'MongoDB রেপ্লিকা সেটে প্রাইমারি নোড ফেইল করলে কীভাবে নির্বাচন হয় এবং আর্বিটার (Arbiter)-এর কাজ কী?'
      },
      a: {
        en: 'Members of a replica set send heartbeats every 2 seconds. If the Primary fails to respond within 10 seconds, the eligible Secondary with the latest oplog entries initiates a Raft-based election. A node becomes Primary once it receives a strict majority vote (e.g. 2 out of 3, or 3 out of 5 nodes). An Arbiter is a lightweight member that holds no data and cannot become Primary; its sole purpose is to provide an additional vote to break ties in replica sets with an even number of data nodes at low infrastructure cost.',
        bn: 'রেপ্লিকা সেটের নোডগুলো প্রতি ২ সেকেন্ডে একে অপরকে হার্টবিট পাঠায়। প্রাইমারি নোড ১০ সেকেন্ডের বেশি সাড়া না দিলে সবচেয়ে আপডেট ডেটাসহ সেকেন্ডারি নোড রাফ্ট-ভিত্তিক নতুন নির্বাচনের ডাক দেয়। সংখ্যাগরিষ্ঠ ভোট (যেমন ৩টির মধ্যে ২টি) পেলেই সে নতুন প্রাইমারি হয়। আর্বিটার (Arbiter) হলো এমন একটি নোড যা কোনো ডেটা রাখে না এবং কখনো প্রাইমারি হতে পারে না; এর একমাত্র কাজ হলো জোড়সংখ্যক ডেটা নোড থাকলে টাই ভাঙতে একটি বাড়তি ভোট দেওয়া।'
      },
    },
    {
      q: {
        en: 'How do multi-document ACID transactions work in MongoDB, and what are their operational trade-offs?',
        bn: 'MongoDB-তে মাল্টি-ডকুমেন্ট ACID ট্রানজ্যাকশন কীভাবে কাজ করে এবং এর ব্যবহারিক সীমাবদ্ধতা কী?'
      },
      a: {
        en: 'Introduced in MongoDB 4.0 (replica sets) and 4.2 (sharded clusters), multi-document transactions run inside a client session (session.startTransaction()). Operations within the session exhibit full ACID guarantees: all changes commit atomically with Write Concern "majority" or abort on error, rolling back uncommitted changes. However, transactions acquire locks on modified documents, block concurrent writes, increase WiredTiger cache pressure, and are capped at a 60-second execution window. Standard MongoDB schema design should minimize transactions by leveraging single-document atomic updates.',
        bn: 'MongoDB ৪.০ ও ৪.২ সংস্করণে ক্লায়েন্ট সেশনের মাধ্যমে মাল্টি-ডকুমেন্ট ট্রানজ্যাকশন চালু হয় (session.startTransaction())। সেশনের ভেতরের সব কাজ পূর্ণ ACID নিশ্চয়তা মেনে চলে: সব কাজ একবারে সফল হয় অথবা কোনো এরর হলে আগের অবস্থায় রোলব্যাক হয়। তবে ট্রানজ্যাকশন ডকুমেন্টে লক ধরে রাখে, ক্যাশের ওপর চাপ বাড়ায় এবং এর সর্বোচ্চ সময়সীমা ৬০ সেকেন্ড। তাই আদর্শ নিয়মে ভালো স্কিমা ডিজাইনের মাধ্যমে সিঙ্গেল-ডকুমেন্ট অ্যাটমিক আপডেট ব্যবহার করাই শ্রেয়।'
      },
    },
  ],
  realWorld: [
    {
      en: 'E-commerce platforms like eBay utilize MongoDB for high-volume catalog search, leveraging polymorphic embedded attributes to accommodate millions of diverse vendor products under a unified query schema.',
      bn: 'ইবের মতো ই-কমার্স প্ল্যাটফর্মগুলো বিশাল ক্যাটালগ সার্চের জন্য মঙ্গোডিবি ব্যবহার করে, যেখানে নমনীয় পলিমরফিক অ্যাট্রিবিউট লাখ লাখ ভিন্ন পণ্যের তথ্য এক ছাদের নিচে পরিচালনা করে।'
    },
    {
      en: 'Financial institutions deploy multi-document ACID transactions with Write Concern w: "majority" to ensure zero data loss during ledger transfers across distributed replica sets.',
      bn: 'আর্থিক প্রতিষ্ঠানগুলো ডিস্ট্রিবিউটেড রেপ্লিকা সেটে লেনদেনের সময় কোনো ডেটা যেন না হারায় তা নিশ্চিত করতে Write Concern w: "majority" সহ মাল্টি-ডকুমেন্ট ট্রানজ্যাকশন চালায়।'
    },
    {
      en: 'IoT and logistics fleets leverage 2dsphere geospatial indexing and time-series collections to stream GPS coordinates and sensor metrics, aggregating vehicle telemetry in sub-second pipeline stages.',
      bn: 'আইওটি ও লজিস্টিক কোম্পানিগুলো গাড়ির অবস্থান ট্র্যাক করতে 2dsphere জিওস্প্যাশিয়াল ইনডেক্স ও টাইম-সিরিজ কালেকশন ব্যবহার করে ১ সেকেন্ডেরও কম সময়ে সেন্সর ডেটা বিশ্লেষণ করে।'
    },
    {
      en: 'High-traffic SaaS applications partition billions of user interaction logs across horizontal sharded clusters, using hashed shard keys to balance write throughput across multiple physical servers.',
      bn: 'জনপ্রিয় SaaS অ্যাপ্লিকেশনগুলো বিলিয়ন বিলিয়ন ইউজার অ্যাক্টিভিটি লগ শার্ডেড ক্লাস্টারে ছড়িয়ে দেয়, যেখানে হ্যাশড শার্ড কি বিভিন্ন ফিজিক্যাল সার্ভারের মধ্যে কাজের চাপ সুষম রাখে।'
    },
  ],
};
