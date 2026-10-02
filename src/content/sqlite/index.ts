import type { Hub } from '../../lib/types';
import { FilesAndTheTableLesson } from './lessons/files-and-the-table';
import { TypesAndTheColumnLesson } from './lessons/types-and-the-column';
import { SelectsAndTheRowLesson } from './lessons/selects-and-the-row';
import { WritesAndTheChangeLesson } from './lessons/writes-and-the-change';
import { JoinsAndTheViewLesson } from './lessons/joins-and-the-view';
import { IndexesAndTheQueryLesson } from './lessons/indexes-and-the-query';
import { TxnsAndTheJournalLesson } from './lessons/txns-and-the-journal';
import { TheSqliteReleaseLesson } from './lessons/the-sqlite-release';

export const sqliteHub: Hub = {
  slug: 'sqlite',
  name: 'SQLite',
  icon: '🪶',
  tagline: {
    en: 'Master embedded database engineering: explore single-file architecture, B-Tree storage pages, dynamic type affinity, WAL concurrency mode, and edge deployments.',
    bn: 'এমবেডেড ডাটাবেস ইঞ্জিনিয়ারিং আয়ত্ত করুন: সিঙ্গেল-ফাইল আর্কিটেকচার, B-Tree স্টোরেজ পেজ, ডাইনামিক টাইপ অ্যাফিনিটি, WAL কনকারেন্সি মোড এবং এজ ডেপ্লয়মেন্ট।'
  },
  intro: {
    en: 'A comprehensive, production-oriented curriculum covering SQLite architecture and performance. Learn how SQLite embeds an ACID-compliant relational engine directly into host processes, how B-Tree leaf pages structure tables and indexes, how dynamic type affinity and STRICT tables govern columns, how Write-Ahead Logging (WAL) enables concurrent readers and writers, and how to scale SQLite in modern edge computing platforms.',
    bn: 'SQLite আর্কিটেকচার ও পারফরম্যান্সের ওপর একটি পূর্ণাঙ্গ প্রফেশনাল গাইড। হোস্ট প্রসেসের ভেতরে সরাসরি একটি ACID-কমপ্লায়েন্ট রিলেশনাল ইঞ্জিন কীভাবে কাজ করে, B-Tree লিফ পেজ কীভাবে টেবিল ও ইনডেক্স গঠন করে, ডাইনামিক টাইপ অ্যাফিনিটি ও STRICT টেবিল কীভাবে কলাম নিয়ন্ত্রণ করে, রাইট-অ্যাহেড লগিং (WAL) কীভাবে সমান্তরাল রিড ও রাইট সক্ষম করে এবং আধুনিক এজ কম্পিউটিংয়ে SQLite কীভাবে স্কেল করতে হয় তা গভীরভাবে শিখুন।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Embedded Architecture, Single-File Storage & Dynamic Types',
        bn: 'ধাপ ১ — এমবেডেড আর্কিটেকচার, সিঙ্গেল-ফাইল স্টোরেজ ও ডাইনামিক টাইপ'
      },
      items: [
        {
          en: 'Single-File Architecture & Storage Engine: B-Tree pages, database file format, in-memory databases, and CLI operations',
          bn: 'সিঙ্গেল-ফাইল আর্কিটেকচার ও স্টোরেজ ইঞ্জিন: B-Tree পেজ, ডাটাবেস ফাইল ফরম্যাট, ইন-মেমরি ডাটাবেস এবং সিএলআই কমান্ড'
        },
        {
          en: 'Dynamic Type Affinity & Strict Tables: storage classes, type coercion rules, and modern STRICT table declarations',
          bn: 'ডাইনামিক টাইপ অ্যাফিনিটি ও স্ট্রিক্ট টেবিল: স্টোরেজ ক্লাস, টাইপ রূপান্তর নীতি এবং আধুনিক STRICT টেবিল ডিক্লারেশন'
        },
        {
          en: 'Querying & Filtering Engine: SELECT projection, WHERE filters, ORDER BY sorting, pagination, and JSON functions',
          bn: 'কোয়েরি ও ফিল্টারিং ইঞ্জিন: SELECT প্রজেকশন, WHERE ফিল্টার, ORDER BY সর্টিং, পেজিনেশন এবং বিল্ট-ইন JSON ফাংশন'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Mutations, Relational Joins & Index Optimization',
        bn: 'ধাপ ২ — মিউটেশন, রিলেশনাল জয়েন ও ইনডেক্স অপ্টিমাইজেশন'
      },
      items: [
        {
          en: 'Atomic Writes & Upsert Mutations: INSERT, UPDATE, DELETE, RETURNING clauses, and ON CONFLICT DO UPDATE upserts',
          bn: 'অ্যাটমিক রাইট ও আপসার্ট মিউটেশন: INSERT, UPDATE, DELETE, RETURNING ক্লজ এবং ON CONFLICT DO UPDATE আপসার্ট'
        },
        {
          en: 'Relational Joins & Subqueries: INNER, LEFT, CROSS joins, Common Table Expressions, and database views',
          bn: 'রিলেশনাল জয়েন ও সাবকোয়েরি: INNER, LEFT, CROSS জয়েন, কমন টেবিল এক্সপ্রেশন (CTE) এবং ডাটাবেস ভিউ'
        },
        {
          en: 'Query Planning & Index Optimization: B-Tree indexes, covering indexes, partial indexes, and EXPLAIN QUERY PLAN',
          bn: 'কোয়েরি প্ল্যানিং ও ইনডেক্স অপ্টিমাইজেশন: B-Tree ইনডেক্স, কভারিং ইনডেক্স, পার্শিয়াল ইনডেক্স এবং EXPLAIN QUERY PLAN'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Concurrency, WAL Mode & Production Deployment',
        bn: 'ধাপ ৩ — কনকারেন্সি, WAL মোড ও প্রোডাকশন ডেপ্লয়মেন্ট'
      },
      items: [
        {
          en: 'Transactions, Locks & WAL Mode: Rollback Journal vs Write-Ahead Logging, concurrent access, and busy timeouts',
          bn: 'ট্রানজ্যাকশন, লক ও WAL মোড: রোলব্যাক জার্নাল বনাম রাইট-অ্যাহেড লগিং, সমান্তরাল এক্সেস এবং বিজি টাইমআউট'
        },
        {
          en: 'Production Capstone: Embedded SQLite at Scale: Full-Text Search (FTS5), vacuuming, backup API, and edge deployment',
          bn: 'প্রোডাকশন ক্যাপস্টোন: এমবেডেড SQLite স্কেলিং: ফুল-টেক্সট সার্চ (FTS5), ভ্যাকুয়ামিং, ব্যাকআপ এপিআই এবং এজ ডেপ্লয়মেন্ট'
        }
      ]
    }
  ],
  lessons: [
    FilesAndTheTableLesson,
    TypesAndTheColumnLesson,
    SelectsAndTheRowLesson,
    WritesAndTheChangeLesson,
    JoinsAndTheViewLesson,
    IndexesAndTheQueryLesson,
    TxnsAndTheJournalLesson,
    TheSqliteReleaseLesson
  ],
  projects: [
    {
      title: {
        en: 'Embedded High-Performance SQLite KV Store',
        bn: 'এমবেডেড হাই-পারফরম্যান্স SQLite KV স্টোর'
      },
      brief: {
        en: 'Construct a lightweight embedded key-value and metadata store in Node.js or C, utilizing STRICT tables, generated columns, and JSON1 extensions.',
        bn: 'STRICT টেবিল, জেনারেটেড কলাম এবং JSON1 এক্সটেনশন ব্যবহার করে Node.js বা C-তে একটি হালকা এমবেডেড কি-ভ্যালু ও মেটাডাটা স্টোর তৈরি করুন।'
      }
    },
    {
      title: {
        en: 'High-Concurrency WAL-Mode Feed Service',
        bn: 'হাই-কনকারেন্সি WAL-মোড ফিড সার্ভিস'
      },
      brief: {
        en: 'Architect a concurrent local feed engine running PRAGMA journal_mode = WAL and PRAGMA synchronous = NORMAL, supporting hundreds of concurrent readers without blocking writes.',
        bn: 'PRAGMA journal_mode = WAL এবং PRAGMA synchronous = NORMAL ব্যবহার করে একটি কনকারেন্ট লোকাল ফিড ইঞ্জিন তৈরি করুন যা রাইট ব্লক না করেই শত শত সমান্তরাল রিডার সমর্থন করে।'
      }
    },
    {
      title: {
        en: 'Full-Text Search Engine with SQLite FTS5',
        bn: 'SQLite FTS5 দিয়ে ফুল-টেক্সট সার্চ ইঞ্জিন'
      },
      brief: {
        en: 'Build an ultra-fast document search application querying millions of records with SQLite FTS5 virtual tables, BM25 relevance ranking, and prefix tokenizers.',
        bn: 'SQLite FTS5 ভার্চুয়াল টেবিল, BM25 প্রাসঙ্গিকতা র‍্যাঙ্কিং এবং প্রিফিক্স টোকেনাইজার ব্যবহার করে লাখ লাখ ডকুমেন্টে একটি দ্রুতগতির সার্চ অ্যাপ্লিকেশন তৈরি করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always enable Write-Ahead Logging using PRAGMA journal_mode = WAL; to allow concurrent readers to read without blocking writers.',
      bn: 'সর্বদা PRAGMA journal_mode = WAL; ব্যবহার করে রাইট-অ্যাহেড লগিং সক্রিয় করুন যাতে রাইটার ব্লক না করেই সমান্তরাল রিডাররা ডাটা পড়তে পারে।'
    },
    {
      en: 'Set a busy timeout using PRAGMA busy_timeout = 5000; so concurrent write attempts wait for locks to clear rather than failing immediately with SQLITE_BUSY.',
      bn: 'PRAGMA busy_timeout = 5000; দিয়ে বিজি টাইমআউট নির্ধারণ করুন যাতে কনকারেন্ট রাইট তাৎক্ষণিকভাবে SQLITE_BUSY দিয়ে ব্যর্থ না হয়ে লক খালি হওয়ার জন্য অপেক্ষা করে।'
    },
    {
      en: 'Wrap multiple batch write operations inside an explicit BEGIN TRANSACTION ... COMMIT block to avoid committing after every single row.',
      bn: 'প্রতিটি রো-র জন্য আলাদা কমিট পরিহার করতে একাধিক ব্যাচ রাইট অপারেশনকে একটি স্পষ্ট BEGIN TRANSACTION ... COMMIT ব্লকের ভেতরে পরিচালনা করুন।'
    },
    {
      en: 'Adopt modern SQLite STRICT tables to enforce true static data type checking and prevent unexpected string coercion bugs.',
      bn: 'কঠোর ডাটা টাইপ নিশ্চিত করতে এবং অপ্রত্যাশিত স্ট্রিং রূপান্তর বাগ প্রতিরোধ করতে আধুনিক SQLite STRICT টেবিল ব্যবহার করুন।'
    },
    {
      en: 'Inspect query execution paths using EXPLAIN QUERY PLAN to verify that queries utilize B-Tree indexes instead of scanning full tables.',
      bn: 'কোয়েরি পুরো টেবিল স্ক্যান না করে B-Tree ইনডেক্স ব্যবহার করছে কিনা তা নিশ্চিত করতে নিয়মিত EXPLAIN QUERY PLAN কমান্ড চালান।'
    }
  ],
  interview: [
    {
      q: {
        en: 'How does SQLite differ fundamentally from client-server relational databases like PostgreSQL or MySQL?',
        bn: 'PostgreSQL বা MySQL-এর মতো ক্লায়েন্ট-সার্ভার ডাটাবেসের তুলনায় SQLite কীভাবে মৌলিকভাবে আলাদা?'
      },
      a: {
        en: 'SQLite is a serverless, embedded database engine that runs in-process inside the host application. Instead of communicating across network sockets, the application makes direct C library function calls to read and write a single cross-platform disk file. There are no daemons, background services, or network configuration required.',
        bn: 'SQLite হলো একটি সার্ভারলেস এমবেডেড ডাটাবেস ইঞ্জিন যা সরাসরি হোস্ট অ্যাপ্লিকেশনের প্রসেসের ভেতরে চলে। নেটওয়ার্ক সকেটের বদলে অ্যাপ্লিকেশন সরাসরি C লাইব্রেরি ফাংশন কলের মাধ্যমে একটি সাধারণ ডিস্ক ফাইল থেকে ডাটা পড়ে ও লেখে। এর জন্য কোনো ব্যাকগ্রাউন্ড সার্ভার, ডিমন বা নেটওয়ার্ক কনফিগারেশনের প্রয়োজন হয় না।'
      }
    },
    {
      q: {
        en: 'What is SQLite Dynamic Type Affinity, and how do modern STRICT tables improve data integrity?',
        bn: 'SQLite-এর ডাইনামিক টাইপ অ্যাফিনিটি কী এবং আধুনিক STRICT টেবিল কীভাবে তথ্যের বিশুদ্ধতা উন্নত করে?'
      },
      a: {
        en: 'In classic SQLite, data types are associated with values rather than columns. A column declared as INTEGER can still store text strings or floating-point numbers based on type affinity coercion. In modern SQLite (version 3.37+), creating a STRICT table enforces rigid static typing, throwing a hard error if an inserted value does not match the column declared data type.',
        bn: 'ক্লাসিক SQLite-এ ডাটা টাইপ কলামের বদলে ভ্যালুর ওপর নির্ভর করে। একটি INTEGER কলামেও টাইপ অ্যাফিনিটির কারণে টেক্সট বা দশমিক সংখ্যা সংরক্ষণ করা যায়। তবে আধুনিক SQLite (ভার্সন ৩.৩৭+) এ STRICT টেবিল ব্যবহার করলে কঠোর টাইপ চেকিং কার্যকর হয় এবং ভুল ডাটা টাইপ দিলে সাথে সাথে এরর প্রদর্শন করে।'
      }
    },
    {
      q: {
        en: 'Why is PRAGMA journal_mode = WAL recommended for high-performance production applications?',
        bn: 'উচ্চগতির প্রোডাকশন অ্যাপ্লিকেশনে কেন PRAGMA journal_mode = WAL ব্যবহারের সুপারিশ করা হয়?'
      },
      a: {
        en: 'Traditional rollback journals lock the entire database file during writes, preventing all readers from reading. In Write-Ahead Log (WAL) mode, writes are appended to a separate -wal file, allowing concurrent readers to read from the main database file simultaneously without blocking or waiting for writers to finish.',
        bn: 'সনাতন রোলব্যাক জার্নাল লেখার সময় পুরো ডাটাবেস ফাইল লক করে ফেলে, ফলে কোনো রিডার ডাটা পড়তে পারে না। পক্ষান্তরে WAL মোডে পরিবর্তনগুলো আলাদা -wal ফাইলে অ্যাপেন্ড হয়, ফলে রাইটার লিখতে থাকলেও রিডাররা কোনো বাধা ছাড়াই সমান্তরালভাবে মূল ডাটাবেস থেকে ডাটা পড়তে পারে।'
      }
    },
    {
      q: {
        en: 'What is the root cause of the SQLITE_BUSY error, and how should production applications handle it?',
        bn: 'SQLITE_BUSY ত্রুটির মূল কারণ কী এবং প্রোডাকশন অ্যাপ্লিকেশনে কীভাবে এটি সামলানো উচিত?'
      },
      a: {
        en: 'SQLITE_BUSY occurs when a database connection attempts to acquire a write lock while another transaction is currently writing to the database file. Production applications should handle this by configuring a busy timeout (PRAGMA busy_timeout = 5000;) to automatically sleep and retry before failing, or by using a single writer thread connection pool.',
        bn: 'SQLITE_BUSY তখন ঘটে যখন একটি কানেকশন রাইট লক নেওয়ার চেষ্টা করে অথচ অন্য একটি ট্রানজ্যাকশন ইতিমধ্যে ডাটাবেসে লিখছে। প্রোডাকশনে এটি সমাধানের জন্য PRAGMA busy_timeout = 5000; দিয়ে বিজি টাইমআউট সেট করতে হয় যাতে ব্যর্থ না হয়ে পুনরায় চেষ্টা করা হয়, অথবা একটি সিঙ্গেল-রাইটার কানেকশন পুল ব্যবহার করতে হয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Apple iOS & macOS: Over one billion iPhones and Macs use SQLite as the primary persistent backing engine for Core Data, Apple Notes, Messages, and Photos.',
      bn: 'অ্যাপল iOS ও macOS: এক কোটিরও বেশি আইফোন ও ম্যাকে Core Data, নোটস, মেসেজ এবং ফটোজ অ্যাপ্লিকেশনের মূল স্টোরেজ হিসেবে SQLite ব্যবহৃত হয়।'
    },
    {
      en: 'Android Operating System: Google Android stores SMS messages, call logs, contacts, and application settings directly in embedded SQLite databases via Room persistence library.',
      bn: 'অ্যান্ড্রয়েড অপারেটিং সিস্টেম: গুগল অ্যান্ড্রয়েড তার এসএমএস, কল লগ, কন্টাক্ট এবং অ্যাপ সেটিংস Room লাইব্রেরির মাধ্যমে সরাসরি SQLite ডাটাবেসে সংরক্ষণ করে।'
    },
    {
      en: 'Airbus & Aviation Avionics: Commercial flight management computers deploy SQLite in cockpit avionics because of its zero-allocation memory reliability and extreme test coverage.',
      bn: 'এয়ারবাস ও এভিয়েশন এভিওনিক্স: বাণিজ্যিক বিমানের ফ্লাইট ম্যানেজমেন্ট কম্পিউটারগুলোতে চরম নির্ভরযোগ্যতা ও মেমরি সুরক্ষার কারণে ককপিটের যন্ত্রপাতিতে SQLite ব্যবহৃত হয়।'
    },
    {
      en: 'Edge Cloud Platforms (Cloudflare D1 & Turso): Modern serverless edge runtimes distribute read-replicas of SQLite worldwide, achieving sub-10ms query latencies at global scale.',
      bn: 'এজ ক্লাউড প্ল্যাটফর্ম (Cloudflare D1 ও Turso): আধুনিক সার্ভারলেস এজ রানটাইমগুলো বিশ্বজুড়ে SQLite-এর রিড-রেপ্লিকা ছড়িয়ে দিয়ে ১০ মিলিসেকেন্ডেরও কম সময়ে গ্লোবাল কুয়েরি রেসপন্স নিশ্চিত করে।'
    }
  ]
};
