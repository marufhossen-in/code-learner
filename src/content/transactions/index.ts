import type { Hub } from '../../lib/types';
import { TxnsAndTheCommitLesson } from './lessons/txns-and-the-commit';
import { AcidsAndTheAcidLesson } from './lessons/acids-and-the-acid';
import { LocksAndTheLockLesson } from './lessons/locks-and-the-lock';
import { IsolsAndTheIsolationLesson } from './lessons/isols-and-the-isolation';
import { SavesAndTheSavepointLesson } from './lessons/saves-and-the-savepoint';
import { RecoversAndTheRecoveryLesson } from './lessons/recovers-and-the-recovery';
import { ConcussAndTheConcurrencyLesson } from './lessons/concuss-and-the-concurrency';
import { TheTxnReleaseLesson } from './lessons/the-txn-release';

export const transactionsHub: Hub = {
  slug: 'transactions',
  name: 'Database Transactions & Concurrency',
  icon: '🔁',
  tagline: {
    en: 'Master database transactions: ACID guarantees, lock modes, ANSI isolation levels, crash recovery (WAL/ARIES), and concurrency control.',
    bn: 'ডাটাবেস ট্রানজ্যাকশন আয়ত্ত করুন: ACID নিশ্চয়তা, লক মোড, ANSI আইসোলেশন লেভেল, ক্র্যাশ রিকভারি (WAL/ARIES) এবং কনকারেন্সি কন্ট্রোল।'
  },
  intro: {
    en: 'A comprehensive, engineering-focused guide to database transactions, concurrency control, and crash recovery. Learn how relational database engines enforce all-or-nothing execution, eliminate race conditions through Two-Phase Locking (2PL) and Multi-Version Concurrency Control (MVCC), prevent the four ANSI concurrency anomalies, execute partial rollbacks via savepoints, recover from sudden hardware crashes using Write-Ahead Logging (WAL), and scale high-throughput applications with optimistic concurrency.',
    bn: 'ডাটাবেস ট্রানজ্যাকশন, কনকারেন্সি কন্ট্রোল এবং ক্র্যাশ রিকভারির ওপর একটি পূর্ণাঙ্গ প্রফেশনাল গাইড। রিলেশনাল ডাটাবেস ইঞ্জিন কীভাবে অল-অর-নাথিং এক্সিকিউশন নিশ্চিত করে, ২-ফেজ লকিং (2PL) এবং মাল্টি-ভার্সন কনকারেন্সি কন্ট্রোল (MVCC)-এর মাধ্যমে রেস কন্ডিশন দূর করে, ৪টি ANSI কনকারেন্সি অ্যানোমালি প্রতিরোধ করে, সেভপয়েন্ট দিয়ে আংশিক রোলব্যাক করে, রাইট-অ্যাহেড লগিং (WAL) দিয়ে হার্ডওয়্যার ক্র্যাশ থেকে রিকভার করে এবং অপটিমিস্টিক কনকারেন্সি দিয়ে স্কেল করে তা শিখুন।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1: Transaction Basics, ACID Pillars & Locking Mechanics',
        bn: 'ধাপ ১: ট্রানজ্যাকশন ভিত্তি, ACID স্তম্ভ ও লকিং মেকানিজম'
      },
      items: [
        {
          en: 'Units of work: BEGIN, COMMIT, ROLLBACK, and double-entry ledger invariants',
          bn: 'কাজের মৌলিক একক: BEGIN, COMMIT, ROLLBACK এবং ডাবল-এন্ট্রি লেজার নিয়ম'
        },
        {
          en: 'The 4 ACID pillars: Atomicity, Consistency, Isolation, and Durability guarantees',
          bn: '৪টি ACID স্তম্ভ: অ্যাটোমিসিটি, কনসিস্টেন্সি, আইসোলেশন এবং ডিউরেবিলিটি নিশ্চয়তা'
        },
        {
          en: 'Locking mechanisms: Shared vs Exclusive locks, Two-Phase Locking (2PL), and deadlocks',
          bn: 'লকিং কৌশল: শেয়ার্ড বনাম এক্সক্লুসিভ লক, ২-ফেজ লকিং (2PL) এবং ডেডলক প্রতিরোধ'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2: Isolation Levels, Savepoints & Crash Recovery',
        bn: 'ধাপ ২: আইসোলেশন লেভেল, সেভপয়েন্ট ও ক্র্যাশ রিকভারি'
      },
      items: [
        {
          en: 'The 4 ANSI isolation levels: Dirty Read, Non-Repeatable Read, Phantom Read, and MVCC',
          bn: '৪টি ANSI আইসোলেশন লেভেল: ডার্টি রিড, নন-রিপিটেবল রিড, ফ্যান্টম রিড এবং MVCC'
        },
        {
          en: 'Savepoints: nested workflows, partial rollback boundaries, and exception handling',
          bn: 'সেভপয়েন্ট: নেস্টেড ওয়ার্কফ্লো, আংশিক রোলব্যাক সীমা এবং এক্সেপশন হ্যান্ডলিং'
        },
        {
          en: 'Crash recovery: Write-Ahead Logging (WAL), ARIES algorithm, and fuzzy checkpoints',
          bn: 'ক্র্যাশ রিকভারি: রাইট-অ্যাহেড লগিং (WAL), ARIES অ্যালগরিদম এবং ফাজি চেকপয়েন্ট'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3: Concurrency Architectures & Production Engineering',
        bn: 'ধাপ ৩: কনকারেন্সি আর্কিটেকচার ও প্রোডাকশন ইঞ্জিনিয়ারিং'
      },
      items: [
        {
          en: 'Concurrency control: Optimistic Concurrency Control (OCC) vs Pessimistic Locking (SELECT FOR UPDATE)',
          bn: 'কনকারেন্সি কন্ট্রোল: অপটিমিস্টিক কনকারেন্সি (OCC) বনাম পেসিমিস্টিক লকিং (SELECT FOR UPDATE)'
        },
        {
          en: 'Production deployment: connection pool timeouts, distributed sagas, and 2PC anti-patterns',
          bn: 'প্রোডাকশন কৌশল: কানেকশন পুল টাইমআউট, ডিস্ট্রিবিউটেড সাগা এবং ২PC সমস্যা'
        }
      ]
    }
  ],
  lessons: [
    TxnsAndTheCommitLesson,
    AcidsAndTheAcidLesson,
    LocksAndTheLockLesson,
    IsolsAndTheIsolationLesson,
    SavesAndTheSavepointLesson,
    RecoversAndTheRecoveryLesson,
    ConcussAndTheConcurrencyLesson,
    TheTxnReleaseLesson
  ],
  projects: [
    {
      title: {
        en: 'High-Concurrency Banking Ledger with Strict 2PL',
        bn: 'কঠোর ২PL সহ হাই-কনকারেন্সি ব্যাংকিং লেজার'
      },
      brief: {
        en: 'Architect an enterprise financial accounting engine processing thousands of concurrent fund transfers. Implement strict Two-Phase Locking (2PL), automatic deadlock detection graphs, debit/credit invariant assertion triggers, and repeatable read transaction isolation to eliminate lost updates.',
        bn: 'হাজার হাজার সমসাময়িক লেনদেন সম্পন্ন করতে একটি আর্থিক অ্যাকাউন্টিং ইঞ্জিন তৈরি করুন। এতে কঠোর ২-ফেজ লকিং (2PL), স্বয়ংক্রিয় ডেডলক শনাক্তকরণ গ্রাফ, ডেবিট/ক্রেডিট ভারসাম্য নিয়ম এবং রিপিটেবল রিড আইসোলেশন বাস্তবায়ন করুন।'
      }
    },
    {
      title: {
        en: 'Distributed Travel Booking Saga with Compensating Transactions',
        bn: 'কম্পেনসেটিং ট্রানজ্যাকশন সহ ডিস্ট্রিবিউটেড ট্রাভেল বুকিং সাগা'
      },
      brief: {
        en: 'Build a multi-service travel checkout engine coordinating flight reservations, hotel bookings, and payment capture. Implement savepoint partial rollbacks for transient hotel failures, and orchestrate an asynchronous Saga workflow with compensating rollback actions to guarantee eventual consistency across microservices.',
        bn: 'ফ্লাইট টিকিট, হোটেল বুকিং এবং পেমেন্ট সম্পন্ন করতে একটি বহুমুখী ট্রাভেল চেকআউট ইঞ্জিন তৈরি করুন। হোটেল ব্যর্থতার জন্য সেভপয়েন্ট আংশিক রোলব্যাক এবং মাইক্রোসার্ভিস জুড়ে চূড়ান্ত সামঞ্জস্য রক্ষার জন্য কম্পেনসেটিং অ্যাকশন সহ সাগা প্যাটার্ন বাস্তবায়ন করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Keep database transactions as short as possible; never execute external HTTP requests, disk file writes, or email dispatches inside an open transaction.',
      bn: 'ডাটাবেস ট্রানজ্যাকশন সর্বদা যত দ্রুত সম্ভব শেষ করুন; ওপেন ট্রানজ্যাকশনের ভেতর কখনো বাহ্যিক HTTP রিকোয়েস্ট, ফাইল রাইট বা ইমেইল পাঠানোর কাজ করবেন না।'
    },
    {
      en: 'Configure strict statement and lock timeouts (such as SET lock_timeout = \'2s\') to prevent blocked transactions from exhausting database connection pools.',
      bn: 'আটকে থাকা ট্রানজ্যাকশন যেন تمام কানেকশন দখল করে সার্ভার ক্র্যাশ না করে সেজন্য সর্বদা লক টাইমআউট (যেমন SET lock_timeout = \'2s\') সেট করুন।'
    },
    {
      en: 'Acquire locks on resources in a consistent, globally deterministic order across all application services to mathematically eliminate circular deadlocks.',
      bn: 'অ্যাপ্লিকেশনের সমস্ত সার্ভিস জুড়ে সর্বদা সুনির্দিষ্ট ও অপরিবর্তনীয় ক্রমে রিসোর্স লক করুন, যাতে চক্রাকার ডেডলক গাণিতিকভাবে অসম্ভব হয়ে পড়ে।'
    },
    {
      en: 'Use Optimistic Concurrency Control (OCC) with row version numbers for read-heavy web applications to eliminate lock contention on shared database records.',
      bn: 'রিড-হেভি ওয়েব অ্যাপ্লিকেশনে শেয়ার্ড রেকর্ডের ওপর লকিং চাপ কমাতে রো ভার্সন নম্বর সহ অপটিমিস্টিক কনকারেন্সি কন্ট্রোল (OCC) ব্যবহার করুন।'
    },
    {
      en: 'Leverage database savepoints to implement partial error recovery for multi-step workflows without discarding previously validated transactional operations.',
      bn: 'জটিল বহু-ধাপের কাজে ইতিপূর্বে সম্পন্ন হওয়া সফল অপারেশন বাতিল না করে কেবল ত্রুটিপূর্ণ অংশ সংশোধনের জন্য সেভপয়েন্ট ব্যবহার করুন।'
    },
    {
      en: 'Rely on Write-Ahead Logging (WAL) and synchronous disk flushes (fsync) to guarantee that committed transactions persist permanently across sudden power failures.',
      bn: 'হঠাৎ বিদ্যুৎ বিচ্ছিন্ন হলেও সফল কমিট হওয়া ডাটা যেন অক্ষত থাকে তা নিশ্চিত করতে রাইট-অ্যাহেড লগিং (WAL) এবং সিঙ্ক্রোনাস ডিস্ক ফ্লাশের ওপর নির্ভর করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the fundamental difference between Pessimistic Locking and Optimistic Concurrency Control (OCC)?',
        bn: 'পেসিমিস্টিক লকিং এবং অপটিমিস্টিক কনকারেন্সি কন্ট্রোল (OCC)-এর মধ্যকার মৌলিক পার্থক্য কী?'
      },
      a: {
        en: 'Pessimistic Locking assumes conflicts are frequent and prevents them by acquiring exclusive locks (e.g. SELECT FOR UPDATE) at read time, blocking other transactions until commit. Optimistic Concurrency Control (OCC) assumes conflicts are rare: it allows transactions to read without locks, records a version timestamp, and checks upon commit whether another transaction updated the version. If a conflict occurred, OCC aborts and retries.',
        bn: 'পেসিমিস্টিক লকিং ধরে নেয় যে সংঘাত ঘন ঘন ঘটবে, তাই এটি ডাটা পড়ার সময়ই এক্সক্লুসিভ লক (যেমন SELECT FOR UPDATE) নিয়ে অন্য تمام ট্রানজ্যাকশনকে আটকে রাখে। অন্যদিকে অপটিমিস্টিক কনকারেন্সি কন্ট্রোল (OCC) ধরে নেয় সংঘাত বিরল: এটি কোনো লক ছাড়াই ডাটা পড়ে, একটি ভার্সন নম্বর রেকর্ড করে এবং কমিট করার সময় যাচাই করে অন্য কেউ ভার্সন পরিবর্তন করেছে কিনা। সংঘাত ঘটলে OCC ট্রানজ্যাকশন বাতিল করে পুনরায় চেষ্টা করে।'
      }
    },
    {
      q: {
        en: 'What are the four ANSI SQL transaction isolation levels and what concurrency anomalies does each prevent?',
        bn: 'চারটি ANSI SQL আইসোলেশন লেভেল কী কী এবং প্রতিটি কোন কোন কনকারেন্সি সমস্যা প্রতিরোধ করে?'
      },
      a: {
        en: 'Read Uncommitted permits dirty reads. Read Committed prevents Dirty Reads by ensuring queries only see committed data. Repeatable Read prevents Dirty Reads and Non-Repeatable Reads, guaranteeing that re-reading a row returns identical values throughout the transaction. Serializable prevents all anomalies, including Phantom Reads and Write Skew, by guaranteeing execution equivalent to a strictly sequential schedule.',
        bn: 'Read Uncommitted ডার্টি রিড অনুমোদন করে। Read Committed কেবল কমিট হওয়া ডাটা দেখিয়ে ডার্টি রিড প্রতিরোধ করে। Repeatable Read ডার্টি রিড এবং নন-রিপিটেবল রিড উভয়ই প্রতিরোধ করে, ফলে ট্রানজ্যাকশন চলাকালীন একই রো বারবার পড়লে হুবহু একই মান পাওয়া যায়। আর Serializable تمام অ্যানোমালি (ফ্যান্টম রিড ও রাইট স্কিউ সহ) প্রতিরোধ করে লেনদেনগুলোকে এমনভাবে চালায় যেন সেগুলো একে একে ধারাবাহিকভাবে চলছে।'
      }
    },
    {
      q: {
        en: 'How does Write-Ahead Logging (WAL) guarantee both Atomicity and Durability during a sudden server crash?',
        bn: 'Write-Ahead Logging (WAL) কীভাবে হঠাৎ সার্ভার ক্র্যাশের সময় অ্যাটোমিসিটি এবং ডিউরেবিলিটি উভয়ই রক্ষা করে?'
      },
      a: {
        en: 'Under WAL, a database engine must synchronously flush changes to an append-only log on disk before modifying dirty pages in memory. If the server crashes, the recovery algorithm (such as ARIES) scans the WAL: it replays all logged changes to restore committed transactions (Durability / REDO), and executes undo logs to roll back any transactions that were active without committing (Atomicity / UNDO).',
        bn: 'WAL নিয়মের অধীনে ডাটাবেস মেমরিতে পরিবর্তন আনার আগেই ডিস্কে একটি অ্যাপেন্ড-অনলি লগ ফাইলে সিঙ্ক্রোনাসভাবে পরিবর্তনটি লিখে ফেলে। সার্ভার হঠাৎ বন্ধ হয়ে গেলে রিকভারি অ্যালগরিদম (যেমন ARIES) লগ ফাইলটি পড়ে: এটি সফল কমিট হওয়া تمام লেনদেন ডিস্কে পুনরায় লিখে নিশ্চিত করে (Durability / REDO), এবং কমিট না হওয়া অসমাপ্ত লেনদেনগুলোকে পূর্বাবস্থায় ফিরিয়ে নেয় (Atomicity / UNDO)।'
      }
    },
    {
      q: {
        en: 'What is a Deadlock in database transactions, and how does the engine resolve it?',
        bn: 'ডাটাবেস ট্রানজ্যাকশনে ডেডলক (Deadlock) কী এবং ইঞ্জিন কীভাবে এটি সমাধান করে?'
      },
      a: {
        en: 'A Deadlock is a circular wait condition where Transaction A holds Lock 1 and waits for Lock 2, while Transaction B holds Lock 2 and waits for Lock 1. Neither transaction can proceed. Modern database engines maintain a Wait-For Graph (WFG) and run background detection threads to detect cycles. Upon finding a cycle, the engine selects a victim transaction, aborts it with an error code, and rolls it back, allowing the other transaction to finish.',
        bn: 'ডেডলক হলো একটি চক্রাকার অচলাবস্থা যেখানে ট্রানজ্যাকশন A ১ম রিসোর্স লক করে ২য় রিসোর্সের জন্য অপেক্ষা করে, আবার ট্রানজ্যাকশন B ২য় রিসোর্স লক করে ১ম রিসোর্সের জন্য অপেক্ষা করে। ফলে কেউই এগোতে পারে না। ডাটাবেস ইঞ্জিন ব্যাকগ্রাউন্ডে একটি ওয়েট-ফর গ্রাফ (Wait-For Graph) চালিয়ে এই চক্র শনাক্ত করে। চক্র ধরা পড়লে ইঞ্জিন ১টি ট্রানজ্যাকশনকে বাতিল ও রোলব্যাক করে দেয়, যাতে অপর ট্রানজ্যাকশনটি সফলভাবে শেষ হতে পারে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Visa and Mastercard coordinate millions of global payment transactions per second using distributed consensus and strict atomicity to guarantee that customer balances are never debited without crediting merchant accounts.',
      bn: 'ভিসা (Visa) এবং মাস্টারকার্ড প্রতি সেকেন্ডে লক্ষ লক্ষ আন্তর্জাতিক পেমেন্ট সম্পন্ন করতে ডিস্ট্রিবিউটেড কনসেনসাস ও কঠোর অ্যাটোমিসিটি ব্যবহার করে, যাতে গ্রাহকের টাকা কেটে নিলেও মার্চেন্ট তা না পাওয়ার মতো কোনো ভুল না ঘটে।'
    },
    {
      en: 'Amazon manages inventory flash sales by applying optimistic concurrency control with row version checks, allowing thousands of shoppers to purchase products simultaneously without database lock bottlenecks.',
      bn: 'আমাজন (Amazon) ফ্ল্যাশ সেলের সময় রো ভার্সন চেক সহ অপটিমিস্টিক কনকারেন্সি কন্ট্রোল ব্যবহার করে, ফলে ডাটাবেস লক না করেই একসাথে হাজার হাজার ক্রেতা কেনাকাটা করতে পারেন।'
    },
    {
      en: 'Uber coordinates real-time trip fare calculations and driver dispatching by combining database savepoints with transaction rollbacks, allowing partial adjustments during route diversions without aborting trip sessions.',
      bn: 'উবার (Uber) রিয়েল-টাইম ভাড়া হিসাব ও ড্রাইভার বরাদ্দের কাজে সেভপয়েন্ট এবং ট্রানজ্যাকশন রোলব্যাকের সমন্বয় করে, যা পুরো ট্রিপ বাতিল না করেই যাত্রাপথের আংশিক পরিবর্তন সামলাতে পারে।'
    },
    {
      en: 'CockroachDB and Google Spanner utilize distributed Two-Phase Locking and TrueTime atomic clocks to provide external serializability across data centers on multiple continents without data drift.',
      bn: 'ককরোচডিবি (CockroachDB) এবং গুগল স্প্যানার একাধিক মহাদেশের ডাটা সেন্টারের মধ্যে কোনো ডাটা ড্রিফট ছাড়াই পারফেক্ট সিরিয়ালাইজেশন দিতে ডিস্ট্রিবিউটেড ২-ফেজ লকিং ও ট্রুটাইম অ্যাটমিক ঘড়ি ব্যবহার করে।'
    }
  ]
};
