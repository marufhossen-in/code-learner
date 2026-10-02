import type { Hub } from '../../lib/types';
import { ModelsAndTheDiagramLesson } from './lessons/models-and-the-diagram';
import { CardsAndTheCrowLesson } from './lessons/cards-and-the-crow';
import { NormsAndTheNormalLesson } from './lessons/norms-and-the-normal';
import { DenormsAndTheStarLesson } from './lessons/denorms-and-the-star';
import { SecuresAndTheRoleLesson } from './lessons/secures-and-the-role';
import { MigratesAndTheVersionLesson } from './lessons/migrates-and-the-version';
import { SeedsAndTheFixtureLesson } from './lessons/seeds-and-the-fixture';
import { TheDesignReleaseLesson } from './lessons/the-design-release';

export const dbDesignHub: Hub = {
  slug: 'db-design',
  name: 'Database Design',
  icon: '📐',
  tagline: {
    en: 'Master relational schema architecture: entity-relationship modeling, cardinality rules, normalization, dimensional modeling, zero-downtime migrations, and enterprise database security.',
    bn: 'রিলেশনাল স্কিমা আর্কিটেকচার আয়ত্ত করুন: এনটিটি-রিলেশনশিপ মডেলিং, কার্ডিনালিটি নিয়ম, নরমালাইজেশন, ডাইমেনশনাল মডেলিং, ডাউনটাইমহীন মাইগ্রেশন এবং এন্টারপ্রাইজ ডাটাবেস সিকিউরিটি।'
  },
  intro: {
    en: 'A comprehensive, engineering-focused curriculum covering modern database schema design. Learn how to transform business requirements into conceptual, logical, and physical entity-relationship diagrams, how to model relationships with Crow\'s Foot notation, how to balance normalization with dimensional Star Schemas, how to enforce Row-Level Security, and how to execute zero-downtime schema migrations using the expand-and-contract pattern in production.',
    bn: 'আধুনিক ডাটাবেস স্কিমা ডিজাইনের ওপর একটি পূর্ণাঙ্গ ও বাস্তবমুখী গাইড। কীভাবে ব্যবসার প্রয়োজনীয়তা থেকে কনসেপচুয়াল, লজিক্যাল ও ফিজিক্যাল ইআর ডায়াগ্রাম তৈরি করতে হয়, ক্রো-ফুট নোটেশন দিয়ে সম্পর্ক মডেলিং, স্টার স্কিমার মাধ্যমে ডাইমেনশনাল মডেলিং, রো-লেভেল সিকিউরিটি প্রয়োগ এবং প্রোডাকশনে এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট প্যাটার্ন ব্যবহার করে ডাউনটাইম ছাড়া স্কিমা মাইগ্রেশন করার পূর্ণাঙ্গ কৌশল শিখুন।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Conceptual & Logical Modeling Foundations',
        bn: 'ধাপ ১ — কনসেপচুয়াল ও লজিক্যাল মডেলিংয়ের ভিত্তি'
      },
      items: [
        {
          en: 'Entity-Relationship Diagrams: translating real-world domain concepts into conceptual, logical, and physical relational schemas',
          bn: 'এনটিটি-রিলেশনশিপ ডায়াগ্রাম: বাস্তব জগতের ডোমেন কনসেপ্টকে কনসেপচুয়াল, লজিক্যাল ও ফিজিক্যাল রিলেশনাল স্কিমায় রূপান্তর'
        },
        {
          en: 'Cardinality & Crow\'s Foot Notation: modeling 1:1, 1:N, and M:N relationships with junction associative entities',
          bn: 'কার্ডিনালিটি ও ক্রো-ফুট নোটেশন: জংশন অ্যাসোসিয়েটিভ টেবিল ব্যবহার করে ১:১, ১:N এবং M:N রিলেশনশিপ মডেলিং'
        },
        {
          en: 'Practical Schema Normalization: applying 1NF, 2NF, and 3NF to eliminate anomalies while maintaining foreign key integrity',
          bn: 'বাস্তবসম্মত স্কিমা নরমালাইজেশন: ফরেন কি ইন্টিগ্রিটি বজায় রেখে ডাটা অসঙ্গতি দূর করতে ১NF, ২NF ও ৩NF প্রয়োগ'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Physical Optimization, Analytics & Database Security',
        bn: 'ধাপ ২ — ফিজিক্যাল অপ্টিমাইজেশন, অ্যানালিটিক্স ও ডাটাবেস সিকিউরিটি'
      },
      items: [
        {
          en: 'Denormalization & Dimensional Modeling: balancing OLTP transactional integrity against OLAP analytical Star Schemas',
          bn: 'ডি-নরমালাইজেশন ও ডাইমেনশনাল মডেলিং: OLTP ট্রানজ্যাকশন সুরক্ষার সাথে OLAP অ্যানালিটিক্যাল স্টার স্কিমার ভারসাম্য'
        },
        {
          en: 'Database Security & Access Control: implementing Role-Based Access Control (RBAC) and Row-Level Security (RLS) policies',
          bn: 'ডাটাবেস সিকিউরিটি ও অ্যাক্সেস কন্ট্রোল: রোল-বেসড অ্যাক্সেস কন্ট্রোল (RBAC) এবং রো-লেভেল সিকিউরিটি (RLS) পলিসি প্রয়োগ'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Schema Evolution, Testing & Production Deployment',
        bn: 'ধাপ ৩ — স্কিমা বিবর্তন, টেস্টিং ও প্রোডাকশন ডিপ্লয়মেন্ট'
      },
      items: [
        {
          en: 'Schema Migrations & Version Control: executing zero-downtime database updates with the Expand-and-Contract design pattern',
          bn: 'স্কিমা মাইগ্রেশন ও ভার্সন কন্ট্রোল: এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট প্যাটার্ন দিয়ে শূন্য ডাউনটাইমে ডাটাবেস আপডেট পরিচালনা'
        },
        {
          en: 'Database Seeding & Test Fixtures: engineering deterministic, referentially-ordered mock datasets for automated CI testing',
          bn: 'ডাটাবেস সিডিং ও টেস্ট ফিক্সচার: স্বয়ংক্রিয় সিআই টেস্টিংয়ের জন্য সুশৃঙ্খল ও রেফারেন্সিয়াল মক ডাটাবেস তৈরি'
        },
        {
          en: 'Production Capstone: designing an enterprise multi-tenant SaaS e-commerce architecture with complete tenancy isolation',
          bn: 'প্রোডাকশন ক্যাপস্টোন: সম্পূর্ণ টেন্যান্সি আইসোলেশনসহ এন্টারপ্রাইজ মাল্টি-টেন্যান্ট SaaS ই-কমার্স আর্কিটেকচার ডিজাইন'
        }
      ]
    }
  ],
  lessons: [
    ModelsAndTheDiagramLesson,
    CardsAndTheCrowLesson,
    NormsAndTheNormalLesson,
    DenormsAndTheStarLesson,
    SecuresAndTheRoleLesson,
    MigratesAndTheVersionLesson,
    SeedsAndTheFixtureLesson,
    TheDesignReleaseLesson
  ],
  projects: [
    {
      title: {
        en: 'Multi-Tenant SaaS E-Commerce Schema Architecture',
        bn: 'মাল্টি-টেন্যান্ট SaaS ই-কমার্স স্কিমা আর্কিটেকচার'
      },
      brief: {
        en: 'Design an enterprise-grade PostgreSQL schema supporting multiple tenant organizations with row-level security isolation, audit event logging, and idempotency keys.',
        bn: 'রো-লেভেল সিকিউরিটি আইসোলেশন, অডিট লগিং এবং আইডেমপোটেন্সি কি সমর্থনকারী একটি এন্টারপ্রাইজ গ্রেড PostgreSQL মাল্টি-টেন্যান্ট স্কিমা আর্কিটেকচার ডিজাইন করুন।'
      }
    },
    {
      title: {
        en: 'Analytics Data Warehouse Star Schema',
        bn: 'অ্যানালিটিক্স ডাটা ওয়্যারহাউস স্টার স্কিমা'
      },
      brief: {
        en: 'Construct a dimensional Star Schema with sales and inventory fact tables surrounded by customer, store, product, and time dimension hierarchies for sub-second analytical reporting.',
        bn: 'সাব-সেকেন্ড অ্যানালিটিক্যাল রিপোর্টিংয়ের জন্য কাস্টমার, স্টোর, প্রোডাক্ট ও টাইম ডাইমেনশন পরিবেষ্টিত সেলস ও ইনভেন্টরি ফ্যাক্ট টেবিলযুক্ত স্টার স্কিমা তৈরি করুন।'
      }
    },
    {
      title: {
        en: 'Zero-Downtime Database Migration Framework',
        bn: 'ডাউনটাইমহীন ডাটাবেস মাইগ্রেশন ফ্রেমওয়ার্ক'
      },
      brief: {
        en: 'Implement a zero-downtime database migration strategy to safely split, rename, and transition live high-traffic columns without interrupting user transactions.',
        bn: 'লাইভ ট্রাফিক ব্যাহত না করে নিরাপদে কলাম বিভাজন, নাম পরিবর্তন ও রূপান্তর করার জন্য একটি শূন্য ডাউনটাইম ডাটাবেস মাইগ্রেশন পাইপলাইন বাস্তবায়ন করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always enforce referential integrity using explicit FOREIGN KEY constraints with appropriate ON DELETE RESTRICT or CASCADE actions rather than relying solely on application validations.',
      bn: 'সম্পর্ক সুরক্ষায় কেবল অ্যাপ্লিকেশন স্তরের ওপর নির্ভর না করে সর্বদা স্পষ্ট FOREIGN KEY কনস্ট্রেইন্ট এবং উপযুক্ত ON DELETE অ্যাকশন নির্ধারণ করুন।'
    },
    {
      en: 'Standardize naming conventions across tables using lowercase plural forms (users, orders) and singular foreign key identifiers (user_id, organization_id).',
      bn: 'টেবিলের নামের জন্য ছোট হাতের বহুবচন (users, orders) এবং ফরেন কি-র জন্য একবচন রূপ (user_id, organization_id) ব্যবহারের নিয়ম মানসম্মত রাখুন।'
    },
    {
      en: 'Adopt the Expand-and-Contract design pattern for all production schema changes to eliminate database downtime during column renames or splits.',
      bn: 'কলামের নাম পরিবর্তন বা বিভাজনের সময় ডাটাবেস ডাউনটাইম এড়াতে সমস্ত প্রোডাকশন স্কিমা পরিবর্তনের ক্ষেত্রে এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট প্যাটার্ন অনুসরণ করুন।'
    },
    {
      en: 'Store all timestamps in UTC with timezone awareness (TIMESTAMPTZ) to guarantee consistency across distributed multi-region application deployments.',
      bn: 'ভৌগোলিক অঞ্চলে ছড়ানো অ্যাপ্লিকেশনে সময়ের অভিন্নতা বজায় রাখতে সর্বদা টাইমজোনযুক্ত UTC ফরম্যাটে (TIMESTAMPTZ) সমস্ত সময় সংরক্ষণ করুন।'
    },
    {
      en: 'Always index foreign key columns to eliminate table-level share locks during parent table record updates or deletions.',
      bn: 'প্যারেন্ট টেবিল আপডেট বা ডিলিটের সময় পুরো চাইল্ড টেবিলে লক আটকাতে সর্বদা ফরেন কি কলামগুলোতে ইনডেক্স তৈরি করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'When should a system architect choose a denormalized Star Schema over a 3NF normalized relational schema?',
        bn: 'কোন পরিস্থিতিতে একজন সিস্টেম আর্কিটেক্টের ৩NF নরমালাইজড স্কিমার পরিবর্তে ডি-নরমালাইজড স্টার স্কিমা বেছে নেওয়া উচিত?'
      },
      a: {
        en: 'Choose 3NF for OLTP transactional systems where frequent concurrent writes, updates, and record modifications require zero redundancy and total anomaly prevention. Choose a denormalized Star Schema for OLAP analytical data warehouses where read throughput, massive multi-table aggregations, and business intelligence reporting take priority over row-level update throughput.',
        bn: 'OLTP সিস্টেমের জন্য ৩NF বেছে নিন যেখানে ঘন ঘন ডাটা লেখা ও পরিবর্তনের সময় অসঙ্গতি দূর করা সবচেয়ে জরুরি। অন্যদিকে OLAP অ্যানালিটিক্যাল সিস্টেমের জন্য স্টার স্কিমা বেছে নিন যেখানে জটিল জয়েন এড়িয়ে দ্রুতগতির বিজনেস ইন্টেলিজেন্স ও এগ্রিগেশন কোয়েরির গতি নিশ্চিত করা সর্বাধিক অগ্রাধিকার পায়।'
      }
    },
    {
      q: {
        en: 'How does the Expand-and-Contract (Parallel Run) migration pattern achieve zero downtime during breaking schema changes?',
        bn: 'এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট মাইগ্রেশন প্যাটার্ন কীভাবে ঝুঁকিপূর্ণ স্কিমা পরিবর্তনের সময় শূন্য ডাউনটাইম নিশ্চিত করে?'
      },
      a: {
        en: 'Instead of destructively modifying a live column, the pattern operates in distinct phases: Expand (add new column alongside old column and configure app to dual-write), Backfill (copy historical rows to new column), Contract (switch reads to new column, cease writing to old column), and Drop (safely remove old column once all services are migrated).',
        bn: 'একবারে সরাসরি কলাম পরিবর্তন না করে এটি ধাপে ধাপে কাজ করে: এক্সপ্যান্ড (নতুন কলাম যুক্ত করে উভয় কলামে লেখা), ব্যাকফিল (পুরানো সমস্ত ডাটা কপি করা), কন্ট্রাক্ট (পড়ার কাজ নতুন কলামে স্থানান্তর) এবং ড্রপ (সমস্ত কোড আপডেটের পর পুরানো কলামটি নিরাপদে মুছে ফেলা)।'
      }
    },
    {
      q: {
        en: 'What are the architectural trade-offs between Multi-Tenant database designs: Shared Schema vs Database-Per-Tenant?',
        bn: 'মাল্টি-টেন্যান্ট ডাটাবেস ডিজাইনে শেয়ার্ড স্কিমা বনাম ডাটাবেস-পার-টেন্যান্টের মধ্যে আর্কিটেকচারাল সুবিধা ও অসুবিধাগুলো কী?'
      },
      a: {
        en: 'Shared Database and Shared Schema minimizes infrastructure cost and simplifies operational maintenance, but requires rigorous Row-Level Security (RLS) to prevent cross-tenant data leaks. Database-Per-Tenant provides complete physical data isolation and simplified compliance, but incurs substantially higher hosting expenses and complex schema migration orchestrations.',
        bn: 'শেয়ার্ড স্কিমা পদ্ধতিতে অবকাঠামো খরচ সবচেয়ে কম হয় এবং রক্ষণাবেক্ষণ সহজ, কিন্তু ডাটা ফাঁস রোধে অত্যন্ত কঠোর রো-লেভেল সিকিউরিটি (RLS) নিশ্চিত করতে হয়। অন্যদিকে ডাটাবেস-পার-টেন্যান্ট পদ্ধতিতে সর্বোচ্চ নিরাপত্তা ও শারীরিক আইসোলেশন মেলে, তবে সার্ভার খরচ ও মাইগ্রেশনের জটিলতা অনেক বেশি বেড়ে যায়।'
      }
    },
    {
      q: {
        en: 'Why is an associative junction table required to model a Many-to-Many (M:N) relationship in relational database theory?',
        bn: 'রিলেশনাল ডাটাবেস তত্ত্বে Many-to-Many (M:N) সম্পর্ক মডেল করার জন্য কেন একটি অ্যাসোসিয়েটিভ জংশন টেবিল আবশ্যক?'
      },
      a: {
        en: 'Relational databases store tabular relations where attributes must contain atomic scalar values (1NF). A direct M:N link cannot be represented with foreign keys inside the parent tables without repeating rows or storing non-atomic arrays. A junction table decomposes the M:N relationship into two clean One-to-Many (1:N) relationships using composite primary keys.',
        bn: 'রিলেশনাল ডাটাবেসে প্রতিটি মানকে একক হতে হয় (১NF)। প্যারেন্ট টেবিলে সরাসরি M:N ফরেন কি রাখা সম্ভব নয় কারণ এতে রো-র পুনরাবৃত্তি ঘটে বা অ্যারে রাখতে হয় যা প্রথম স্বাভাবিক রূপ ভাঙে। একটি জংশন টেবিল কম্পোজিট প্রাইমারি কি ব্যবহার করে সেই জটিল M:N সম্পর্ককে দুটি পরিষ্কার ১:N সম্পর্কে বিভক্ত করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Airbnb: Orchestrating zero-downtime relational schema migrations across multi-terabyte reservation and calendar databases using automated expand-and-contract deployment pipelines.',
      bn: 'এয়ারবিএনবি: স্বয়ংক্রিয় এক্সপ্যান্ড-অ্যান্ড-কন্ট্রাক্ট পাইপলাইন ব্যবহার করে টেরাবাইট স্কেলের রিজার্ভেশন ডাটাবেসে শূন্য ডাউনটাইমে স্কিমা মাইগ্রেশন পরিচালনা।'
    },
    {
      en: 'Slack: Enforcing multi-tenant workspace data boundaries across billions of team messages in MySQL using strictly partitioned tenant schemas and synthetic tenancy IDs.',
      bn: 'স্ল্যাক: কঠোরভাবে পার্টিশন করা টেন্যান্ট স্কিমা এবং সিন্থেটিক টেন্যান্সি আইডি ব্যবহার করে কোটি কোটি মেসেজে ওয়ার্কস্পেস ডাটার সীমানা রক্ষা।'
    },
    {
      en: 'Netflix: Transforming deeply normalized relational subscriber billing data into dimensional Star Schemas in Amazon Redshift for real-time churn analysis and financial forecasting.',
      bn: 'নেটফ্লিক্স: রিয়েল-টাইম চার্ন অ্যানালাইসিসের জন্য অত্যন্ত নরমালাইজড সাবস্ক্রিপশন ডাটাকে Amazon Redshift-এ ডাইমেনশনাল স্টার স্কিমায় রূপান্তর।'
    },
    {
      en: 'Shopify: Structuring e-commerce merchant catalogs, order items, and payment ledgers with associative junction tables and strict referential constraints to guarantee financial consistency.',
      bn: 'শপিফাই: আর্থিক সামঞ্জস্য নিশ্চিত করতে অ্যাসোসিয়েটিভ জংশন টেবিল এবং কঠোর রেফারেন্সিয়াল কনস্ট্রেইন্ট সহ মার্চেন্ট ক্যাটালগ ও অর্ডার লেজার সংগঠন।'
    }
  ]
};
