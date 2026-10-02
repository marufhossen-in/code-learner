import type { Hub } from '../../lib/types';
import { IdxsAndTheIndexLesson } from './lessons/idxs-and-the-index';
import { BtreesAndTheBtreeLesson } from './lessons/btrees-and-the-btree';
import { HashsAndTheHashLesson } from './lessons/hashs-and-the-hash';
import { CompsAndTheCompositeLesson } from './lessons/comps-and-the-composite';
import { CovsAndTheCoveringLesson } from './lessons/covs-and-the-covering';
import { PartsAndThePartialLesson } from './lessons/parts-and-the-partial';
import { StatsAndTheStatisticLesson } from './lessons/stats-and-the-statistic';
import { TheIndexReleaseLesson } from './lessons/the-index-release';

export const indexesHub: Hub = {
  slug: 'indexes',
  name: 'Indexes',
  icon: '⚡',
  tagline: {
    en: 'Master database indexing internals: B+Tree fan-out, Hash indexes, composite ordering, covering index-only scans, and production query acceleration.',
    bn: 'ডাটাবেস ইনডেক্সিং অভ্যন্তরীণ কৌশল আয়ত্ত করুন: B+Tree ফ্যান-আউট, হ্যাশ ইনডেক্স, কম্পোজিট অর্ডারিং, কাভারিং ইনডেক্স-অনলি স্ক্যান এবং প্রোডাকশন কোয়েরি অপ্টিমাইজেশন।'
  },
  intro: {
    en: 'A comprehensive, engineering-focused curriculum covering relational database indexes. Learn how storage engines bypass O(N) sequential table scans with O(log N) B-Tree lookups, how to craft composite indexes honoring the Leftmost Prefix Rule, how to design covering indexes with INCLUDE columns, how to exploit partial filtered indexes, and how to maintain database optimizer statistics for peak query performance.',
    bn: 'রিলেশনাল ডাটাবেস ইনডেক্সের ওপর একটি পূর্ণাঙ্গ প্রফেশনাল গাইড। ডাটাবেস স্টোরেজ ইঞ্জিন কীভাবে O(N) সিকোয়েনশিয়াল টেবিল স্ক্যান এড়িয়ে O(log N) B-Tree লুকআপ চালায়, লেফটমোস্ট প্রিফিক্স নিয়ম মেনে কীভাবে কম্পোজিট ইনডেক্স সাজাতে হয়, INCLUDE ক্লজ দিয়ে কাভারিং ইনডেক্স ডিজাইন, আংশিক ফিল্টার্ড ইনডেক্স এবং অপ্টিমাইজার স্ট্যাটিস্টিকস ব্যবহার করে কোয়েরির গতি বহুগুণ বাড়ানোর কৌশল শিখুন।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Index Foundations & Core Data Structures',
        bn: 'ধাপ ১ — ইনডেক্সের মূল ভিত্তি ও ডাটা স্ট্রাকচার'
      },
      items: [
        {
          en: 'Sequential Table Scans vs Index Seeks: understanding O(N) heap page sweeps vs O(log N) tree navigation',
          bn: 'সিকোয়েনশিয়াল টেবিল স্ক্যান বনাম ইনডেক্স সিক: O(N) হিপ পেজ স্ক্যান বনাম O(log N) ট্রি নেভিগেশন বোঝা'
        },
        {
          en: 'B-Tree & B+Tree Architecture: root pages, internal branch nodes, leaf linked lists, and high fan-out storage',
          bn: 'B-Tree এবং B+Tree আর্কিটেকচার: রুট পেজ, ইন্টারনাল ব্রাঞ্চ নোড, লিফ লিংকড লিস্ট এবং উচ্চ ফ্যান-আউট স্টোরেজ'
        },
        {
          en: 'Hash Indexes & Exact Equality: O(1) point lookups, hash bucket overflow chains, and range query limitations',
          bn: 'হ্যাশ ইনডেক্স ও নিখুঁত সমতা: O(1) পয়েন্ট লুকআপ, হ্যাশ বাকেট ওভারফ্লো চেইন এবং রেঞ্জ কোয়েরির সীমাবদ্ধতা'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Multi-Column & Specialized Index Architectures',
        bn: 'ধাপ ২ — মাল্টি-কলাম ও বিশেষায়িত ইনডেক্স আর্কিটেকচার'
      },
      items: [
        {
          en: 'Composite Multi-Column Indexes: the Leftmost Prefix Rule, column selectivity ordering, and index skip scans',
          bn: 'কম্পোজিট মাল্টি-কলাম ইনডেক্স: লেফটমোস্ট প্রিফিক্স রুল, কলামের সিলেক্টিভিটি অর্ডার এবং ইনডেক্স স্কিপ স্ক্যান'
        },
        {
          en: 'Covering Indexes & Index-Only Scans: utilizing the INCLUDE clause to eliminate table heap page lookups',
          bn: 'কাভারিং ইনডেক্স ও ইনডেক্স-অনলি স্ক্যান: টেবিল হিপ পেজ রিড সম্পূর্ণ বাদ দিতে INCLUDE ক্লজের ব্যবহার'
        },
        {
          en: 'Partial & Filtered Indexes: indexing targeted subsets with WHERE clauses to slash storage and maintenance costs',
          bn: 'আংশিক ও ফিল্টার্ড ইনডেক্স: স্টোরেজ খরচ কমাতে WHERE ক্লজ দিয়ে নির্দিষ্ট ডাটার ওপর ইনডেক্স তৈরি'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Optimizer Statistics & Production Engineering',
        bn: 'ধাপ ৩ — অপ্টিমাইজার স্ট্যাটিস্টিকস ও প্রোডাকশন ইঞ্জিনিয়ারিং'
      },
      items: [
        {
          en: 'Cost-Based Optimizer (CBO) & Statistics: ANALYZE, histograms, selectivity estimation, and plan flips',
          bn: 'কস্ট-বেসড অপ্টিমাইজার (CBO) ও স্ট্যাটিস্টিকস: ANALYZE, হিস্টোগ্রাম, সিলেক্টিভিটি অনুমান এবং প্ল্যান ফ্লিপ'
        },
        {
          en: 'Production Index Lifecycle: write amplification overhead, index bloat, and zero-downtime concurrent builds',
          bn: 'প্রোডাকশন ইনডেক্স জীবনচক্র: রাইট অ্যাম্প্লিফিকেশন খরচ, ইনডেক্স ব্লোট এবং ডাউনটাইম ছাড়া কনকারেন্ট ইনডেক্স তৈরি'
        }
      ]
    }
  ],
  lessons: [
    IdxsAndTheIndexLesson,
    BtreesAndTheBtreeLesson,
    HashsAndTheHashLesson,
    CompsAndTheCompositeLesson,
    CovsAndTheCoveringLesson,
    PartsAndThePartialLesson,
    StatsAndTheStatisticLesson,
    TheIndexReleaseLesson
  ],
  projects: [
    {
      title: {
        en: 'E-Commerce Catalog Multi-Faceted Search Optimizer',
        bn: 'ই-কমার্স ক্যাটালগ মাল্টি-ফ্যাসেটেড সার্চ অপ্টিমাইজার'
      },
      brief: {
        en: 'Design high-performance composite and partial indexes for a 10-million SKU retail catalog, reducing product filter latency from 1,200ms full table scans down to 1.5ms index seeks while respecting leftmost prefix rules.',
        bn: '১০ মিলিয়ন পণ্যের রিটেল ক্যাটালগের জন্য কম্পোজিট ও আংশিক ইনডেক্স ডিজাইন করুন, যা লেফটমোস্ট প্রিফিক্স নিয়ম মেনে সার্চ ফিল্টারের সময় ১২০০ মিলিসেকেন্ড থেকে ১.৫ মিলিসেকেন্ডে নামিয়ে আনে।'
      }
    },
    {
      title: {
        en: 'High-Throughput Task Queue with Partial Covering Indexes',
        bn: 'পার্শিয়াল কাভারিং ইনডেক্স সহ হাই-থ্রুপুট টাস্ক কিউ'
      },
      brief: {
        en: 'Build an ultra-fast asynchronous task queue using partial filtered indexes (WHERE status = \'PENDING\') combined with INCLUDE clauses, achieving zero heap lookups and eliminating lock contention under 50,000 tasks/second.',
        bn: 'WHERE status = \'PENDING\' শর্তযুক্ত পার্শিয়াল ফিল্টার্ড ইনডেক্স এবং INCLUDE ক্লজ ব্যবহার করে একটি উচ্চগতির টাস্ক কিউ তৈরি করুন যা প্রতি সেকেন্ডে ৫০,০০০ টাস্কে কোনো টেবিল লক ছাড়াই কাজ করে।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always order composite index columns by equality predicates first, then inequality/range predicates, strictly obeying the Leftmost Prefix Rule.',
      bn: 'কম্পোজিট ইনডেক্সে সর্বদা ইকুয়ালিটি শর্তের কলামগুলো প্রথমে এবং রেঞ্জ শর্তের কলামগুলো পরে সাজান, যা লেফটমোস্ট প্রিফিক্স নিয়ম নিখুঁতভাবে রক্ষা করে।'
    },
    {
      en: 'Use Covering Indexes with the INCLUDE clause to serve queries entirely from the index leaf pages, eliminating expensive random I/O heap page lookups.',
      bn: 'কোয়েরির সমস্ত প্রয়োজনীয় কলাম ইনডেক্সের লিফ পেজ থেকেই সরবরাহ করতে INCLUDE ক্লজ সহ কাভারিং ইনডেক্স ব্যবহার করুন, যা টেবিল হিপ রিডের খরচ বাঁচায়।'
    },
    {
      en: 'Deploy Partial Indexes with WHERE clauses for skewed boolean flags (such as unread notifications or soft-deleted records) to save 90% of index storage.',
      bn: 'অসম ডাটা বা সফট-ডিলিট রেকর্ডের ক্ষেত্রে WHERE ক্লজ দিয়ে আংশিক ইনডেক্স তৈরি করুন, যা ৯০% ইনডেক্স স্টোরেজ এবং রাইট খরচ বাঁচিয়ে দেয়।'
    },
    {
      en: 'Always index Foreign Key columns to prevent full table share-locks during parent table updates and cascaded record deletions.',
      bn: 'প্যারেন্ট টেবিল আপডেট বা ডিলিট করার সময় পুরো চাইল্ড টেবিলে লক ঠেকাতে সর্বদা ফরেন কি কলামগুলোতে ইনডেক্স তৈরি করুন।'
    },
    {
      en: 'Beware of Write Amplification: each additional index degrades INSERT, UPDATE, and DELETE throughput because the database must update every secondary index page.',
      bn: 'রাইট অ্যাম্প্লিফিকেশনের ব্যাপারে সতর্ক থাকুন: প্রতিটি অতিরিক্ত ইনডেক্স ডাটা লেখার গতি কমিয়ে দেয়, কারণ ডাটাবেসকে প্রতিটি সেকেন্ডারি ইনডেক্স পেজও আপডেট করতে হয়।'
    },
    {
      en: 'In 24/7 production environments, always build indexes using CREATE INDEX CONCURRENTLY to avoid exclusive table locks that block live user traffic.',
      bn: 'সার্বক্ষণিক সচল প্রোডাকশন সিস্টেমে টেবিল লক এড়িয়ে ব্যবহারকারীদের ট্রাফিক চালু রাখতে সর্বদা CREATE INDEX CONCURRENTLY দিয়ে ইনডেক্স তৈরি করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the architectural difference between a Clustered Index and a Non-Clustered (Secondary) Index?',
        bn: 'ক্লাস্টার্ড ইনডেক্স এবং নন-ক্লাস্টার্ড (সেকেন্ডারি) ইনডেক্সের মধ্যে মূল আর্কিটেকচারাল পার্থক্য কী?'
      },
      a: {
        en: 'A Clustered Index dictates the physical ordering of actual table data rows on disk storage; its leaf pages ARE the data pages, so a table can have only one clustered index. A Non-Clustered Index is a separate secondary B+Tree data structure whose leaf pages store indexed keys along with pointers (heap row IDs in PostgreSQL or clustered primary keys in MySQL InnoDB) back to the base table rows.',
        bn: 'ক্লাস্টার্ড ইনডেক্স ডিস্কে মূল টেবিলের ডাটার বাস্তবিক অবস্থান নির্ধারণ করে; এর লিফ পেজগুলোই হলো মূল ডাটা পেজ, তাই একটি টেবিলে একটির বেশি ক্লাস্টার্ড ইনডেক্স থাকতে পারে না। অন্যদিকে নন-ক্লাস্টার্ড ইনডেক্স হলো একটি পৃথক B+Tree কাঠামো যার লিফ পেজে মূল ডাটার পয়েন্টার সংরক্ষিত থাকে।'
      }
    },
    {
      q: {
        en: 'Why do relational database engines use B+Trees instead of Binary Search Trees (BST) or Red-Black Trees for on-disk indexes?',
        bn: 'রিলেশনাল ডাটাবেস ইঞ্জিন ডিস্ক ইনডেক্সের জন্য বাইনারি সার্চ ট্রি বা রেড-ব্ল্যাক ট্রির বদলে কেন B+Tree ব্যবহার করে?'
      },
      a: {
        en: 'Binary trees have a fan-out of only 2, resulting in deep trees that require many random disk I/O seek operations per search. B+Trees feature massive fan-out (hundreds or thousands of keys per 8KB/16KB page), keeping tree height shallow (typically 3 to 4 levels for billions of rows). Furthermore, B+Trees store all data in doubly-linked leaf pages, allowing blazing-fast sequential range scans.',
        bn: 'বাইনারি ট্রির ফ্যান-আউট মাত্র ২ হওয়ায় গাছটি খুব লম্বা হয় এবং ডিস্ক থেকে ডাটা খুঁজতে অনেক বেশি র্যান্ডম I/O লাগে। B+Tree-এর প্রতিটি ৮KB বা ১৬KB পেজে শত শত কি ধরে রাখা যায়, ফলে কোটি কোটি ডাটার ক্ষেত্রেও গাছের উচ্চতা মাত্র ৩ বা ৪ স্তরের হয় এবং এর লিফ নোডগুলো পরস্পরের সাথে যুক্ত থাকায় রেঞ্জ কোয়েরি অত্যন্ত দ্রুত চলে।'
      }
    },
    {
      q: {
        en: 'When and why will the database Cost-Based Optimizer (CBO) choose a Full Table Scan even if an index is present on the query filter column?',
        bn: 'ফিল্টার কলামে ইনডেক্স থাকা সত্ত্বেও ডাটাবেসের কস্ট-বেসড অপ্টিমাইজার (CBO) কখন এবং কেন ফুল টেবিল স্ক্যান বেছে নেয়?'
      },
      a: {
        en: 'The optimizer calculates cost based on estimated disk block accesses. If a query has low selectivity (retrieving more than roughly 10% to 20% of total table rows), using an index requires reading thousands of index pages plus thousands of random I/O heap page lookups. A sequential full table scan using multi-block reads is orders of magnitude faster than random single-page lookups for large result sets.',
        bn: 'অপ্টিমাইজার ডিস্ক পেজ পড়ার খরচের ওপর ভিত্তি করে সিদ্ধান্ত নেয়। কোয়েরির ফলাফল যদি মোট টেবিলের ১০% থেকে ২০%-এর বেশি হয়, তবে ইনডেক্স দিয়ে হাজার হাজার র্যান্ডম জাম্প করার চেয়ে মাল্টি-ব্লক রিড দিয়ে পুরো টেবিল ধারাবাহিকভাবে পড়লে সময় অনেক কম লাগে।'
      }
    },
    {
      q: {
        en: 'What is an Index-Only Scan and how does a Covering Index achieve it?',
        bn: 'ইনডেক্স-অনলি স্ক্যান কী এবং একটি কাভারিং ইনডেক্স কীভাবে এটি সম্ভব করে?'
      },
      a: {
        en: 'An Index-Only Scan occurs when every column requested by a SELECT query (in SELECT, WHERE, ORDER BY, and JOIN clauses) is stored directly within the index B+Tree leaf pages. Because all required data resides in the index, the storage engine completely skips reading the base table heap pages, eliminating random disk I/O and maximizing query throughput.',
        bn: 'ইনডেক্স-অনলি স্ক্যান ঘটে যখন কোনো SELECT কোয়েরির تمام প্রয়োজনীয় কলাম সরাসরি ইনডেক্স B+Tree-এর লিফ পেজেই বিদ্যমান থাকে। সমস্ত তথ্য ইনডেক্সে থাকায় ইঞ্জিনকে মূল টেবিলের হিপ পেজ পড়তে হয় না, যা র্যান্ডম ডিস্ক I/O দূর করে সর্বোচ্চ গতি নিশ্চিত করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Shopify: Optimizing 500 million product catalog search queries on MySQL InnoDB clusters using composite B+Tree indexes crafted around category, vendor, and price.',
      bn: 'শপিফাই: ক্যাটাগরি, বিক্রেতা এবং মূল্যের ওপর কম্পোজিট B+Tree ইনডেক্স তৈরি করে ৫০ কোটি পণ্যের ক্যাটালগ সার্চ অপ্টিমাইজেশন।'
    },
    {
      en: 'Stripe: Accelerating financial transaction lookups across petabytes of payment records in PostgreSQL using covering indexes with INCLUDE clauses to eliminate table heap reads.',
      bn: 'স্ট্রাইপ: টেবিল হিপ রিড বাদ দিয়ে পেমেন্ট রেকর্ডের গতি বাড়াতে PostgreSQL-এ INCLUDE ক্লজ সহ কাভারিং ইনডেক্সের প্রয়োগ।'
    },
    {
      en: 'GitHub: Powering high-throughput background webhook delivery pipelines by utilizing partial filtered indexes (WHERE status = \'PENDING\') to avoid table lock contention.',
      bn: 'গিটহাব: টেবিল লক এড়িয়ে ব্যাকগ্রাউন্ড ওয়েবহুক কিউ পরিচালনা করতে WHERE status = \'PENDING\' শর্তযুক্ত পার্শিয়াল ইনডেক্সের ব্যবহার।'
    },
    {
      en: 'Uber: Mitigating write amplification and index page bloat across millions of active trip dispatch rows by tuning B+Tree fill factors and running concurrent re-indexing jobs.',
      bn: 'উবার: কোটি কোটি ট্রিপ ডাটার ক্ষেত্রে ইনডেক্স পেজ ব্লোট এবং রাইট অ্যাম্প্লিফিকেশন কমাতে B+Tree ফিল ফ্যাক্টর টিউনিং এবং কনকারেন্ট রি-ইনডেক্সিং।'
    }
  ]
};
