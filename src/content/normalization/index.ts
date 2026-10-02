import type { Hub } from '../../lib/types';
import { DepsAndTheDependencyLesson } from './lessons/deps-and-the-dependency';
import { FirstsAndTheFirstLesson } from './lessons/firsts-and-the-first';
import { SecondsAndTheSecondLesson } from './lessons/seconds-and-the-second';
import { ThirdsAndTheThirdLesson } from './lessons/thirds-and-the-third';
import { BcnfsAndTheBcnfLesson } from './lessons/bcnfs-and-the-bcnf';
import { MultisAndTheMultiLesson } from './lessons/multis-and-the-multi';
import { FormsAndTheNormalLesson } from './lessons/forms-and-the-normal';
import { TheNormalReleaseLesson } from './lessons/the-normal-release';

export const normalizationHub: Hub = {
  slug: 'normalization',
  name: 'Database Normalization',
  icon: '🏺',
  tagline: {
    en: 'Master database normalization theory: functional dependencies, 1NF through 5NF, BCNF, anomaly elimination, and strategic denormalization.',
    bn: 'ডাটাবেস নরমালাইজেশন তত্ত্ব আয়ত্ত করুন: ফাংশনাল ডিপেন্ডেন্সি, ১ম থেকে ৫ম নরমাল ফর্ম, BCNF, অ্যানোমালি দূরীকরণ এবং স্ট্র্যাটেজিক ডিনরমালাইজেশন।'
  },
  intro: {
    en: 'A comprehensive, mathematically rigorous guide to relational database normalization. Learn how functional dependencies govern table design, systematically eliminate insertion, update, and deletion anomalies through 1NF, 2NF, 3NF, and BCNF decompositions, explore advanced 4NF multivalued dependencies and 5NF join dependencies, and master production denormalization trade-offs for high-throughput OLTP and OLAP architectures.',
    bn: 'রিলেশনাল ডাটাবেস নরমালাইজেশনের ওপর একটি পূর্ণাঙ্গ ও গাণিতিকভাবে সুনির্দিষ্ট গাইড। ফাংশনাল ডিপেন্ডেন্সি কীভাবে টেবিল ডিজাইন নিয়ন্ত্রণ করে তা জানুন, ১ম, ২য়, ৩য় এবং BCNF নরমাল ফর্মের মাধ্যমে ইনসার্ট, আপডেট ও ডিলিট অ্যানোমালি দূর করুন, ৪র্থ ও ৫ম নরমাল ফর্মের জটিল নির্ভরতা বিশ্লেষণ করুন এবং উচ্চ ক্ষমতার OLTP ও OLAP আর্কিটেকচারের জন্য প্রোডাকশন ডিনরমালাইজেশন কৌশল আয়ত্ত করুন।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1: Functional Dependencies & Foundational Normal Forms (1NF & 2NF)',
        bn: 'ধাপ ১: ফাংশনাল ডিপেন্ডেন্সি ও প্রাথমিক নরমাল ফর্ম (১ম ও ২য়)'
      },
      items: [
        {
          en: 'Functional dependencies: determinant attributes, Armstrong axioms, and minimal covers',
          bn: 'ফাংশনাল ডিপেন্ডেন্সি: ডিটারমিন্যান্ট অ্যাট্রিবিউট, আর্মস্ট্রং অ্যাক্সিওম এবং মিনিমাল কভার'
        },
        {
          en: 'First Normal Form (1NF): column atomicity, repeating group elimination, and key uniqueness',
          bn: '১ম নরমাল ফর্ম (1NF): কলামের অবিভাজ্যতা, পুনরাবৃত্তিমূলক গ্রুপ দূরীকরণ এবং কি-এর অনন্যতা'
        },
        {
          en: 'Second Normal Form (2NF): composite candidate keys and partial dependency decomposition',
          bn: '২য় নরমাল ফর্ম (2NF): কম্পোজিট ক্যান্ডিডেট কি এবং আংশিক নির্ভরতা দূরীকরণ'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2: Transitive Dependencies & Advanced Forms (3NF, BCNF & 4NF)',
        bn: 'ধাপ ২: ট্রানজিটিভ নির্ভরতা ও উন্নত নরমাল ফর্ম (৩য়, BCNF ও ৪র্থ)'
      },
      items: [
        {
          en: 'Third Normal Form (3NF): non-key transitive dependencies and lossless join decompositions',
          bn: '৩য় নরমাল ফর্ম (3NF): নন-কি ট্রানজিটিভ নির্ভরতা এবং লসলেস জয়েন ডিকম্পোজিশন'
        },
        {
          en: 'Boyce-Codd Normal Form (BCNF): strict superkey determinants and overlapping candidate keys',
          bn: 'বয়েস-কড নরমাল ফর্ম (BCNF): কঠোর সুপার-কি ডিটারমিন্যান্ট এবং ওভারল্যাপিং ক্যান্ডিডেট কি'
        },
        {
          en: 'Fourth Normal Form (4NF): multivalued dependencies (MVD) and Cartesian explosion elimination',
          bn: '৪র্থ নরমাল ফর্ম (4NF): মাল্টিভ্যালুড ডিপেন্ডেন্সি (MVD) এবং কার্টেশিয়ান বিস্ফোরণ রোধ'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3: Higher Normal Forms (5NF/DKNF) & Strategic Denormalization',
        bn: 'ধাপ ৩: উচ্চতর নরমাল ফর্ম (৫ম/DKNF) ও স্ট্র্যাটেজিক ডিনরমালাইজেশন'
      },
      items: [
        {
          en: 'Fifth Normal Form (5NF) and Domain-Key Normal Form (DKNF): join dependencies and cyclic constraints',
          bn: '৫ম নরমাল ফর্ম (5NF) ও ডোমেইন-কি নরমাল ফর্ম (DKNF): জয়েন নির্ভরতা ও সাইক্লিক কনস্ট্রেইন্ট'
        },
        {
          en: 'Production denormalization: OLTP vs OLAP trade-offs, materialized views, and caching patterns',
          bn: 'প্রোডাকশন ডিনরমালাইজেশন: OLTP বনাম OLAP আপস, মেটেরিয়ালাইজড ভিউ এবং ক্যাশিং প্যাটার্ন'
        }
      ]
    }
  ],
  lessons: [
    DepsAndTheDependencyLesson,
    FirstsAndTheFirstLesson,
    SecondsAndTheSecondLesson,
    ThirdsAndTheThirdLesson,
    BcnfsAndTheBcnfLesson,
    MultisAndTheMultiLesson,
    FormsAndTheNormalLesson,
    TheNormalReleaseLesson
  ],
  projects: [
    {
      title: {
        en: 'Healthcare Patient Management Schema Normalizer',
        bn: 'স্বাস্থ্যসেবা রোগী ব্যবস্থাপনা স্কিমা নরমালাইজার'
      },
      brief: {
        en: 'Design and normalize a complex hospital database managing patients, physician appointments, clinical diagnoses, and pharmacy prescriptions. Transform an unnormalized legacy spreadsheet into strict 3NF and BCNF tables, eliminating partial dependencies on multi-column doctor-room bookings and proving lossless join reconstruction.',
        bn: 'রোগী, ডাক্তারদের অ্যাপয়েন্টমেন্ট, ক্লিনিক্যাল ডায়াগনসিস এবং প্রেসক্রিপশন পরিচালনার জন্য একটি জটিল হাসপাতালের ডাটাবেস ডিজাইন ও নরমালাইজ করুন। একটি অসংগঠিত স্প্রেডশিটকে ৩য় এবং BCNF নরমাল ফর্মে রূপান্তর করে আংশিক নির্ভরতা দূর করুন এবং লসলেস জয়েন প্রমাণ করুন।'
      }
    },
    {
      title: {
        en: 'E-Commerce Global Logistics & Warehouse Engine',
        bn: 'ই-কমার্স গ্লোবাল লজিস্টিকস ও ওয়্যারহাউস ইঞ্জিন'
      },
      brief: {
        en: 'Architect an enterprise inventory logistics schema tracking multi-tenant suppliers, warehouse bins, international freight manifests, and shipping rates. Resolve 4NF multivalued dependencies between carrier certifications and warehouse geographic regions, then implement targeted OLAP denormalization with materialized views.',
        bn: 'মাল্টি-টেন্যান্ট সরবরাহকারী, গুদাম, আন্তর্জাতিক ফ্রেইট এবং শিপিং রেট ট্র্যাক করতে একটি এন্টারপ্রাইজ লজিস্টিকস স্কিমা তৈরি করুন। ক্যারিয়ার সার্টিফিকেশন এবং ভৌগোলিক অঞ্চলের মধ্যকার ৪র্থ নরমাল ফর্মের জটিল নির্ভরতা দূর করুন এবং মেটেরিয়ালাইজড ভিউ সহ OLAP ডিনরমালাইজেশন বাস্তবায়ন করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always compute the minimal cover of functional dependencies before decomposing schemas to guarantee dependency preservation and lossless joins.',
      bn: 'স্কিমা বিভক্ত করার আগে সর্বদা ফাংশনাল ডিপেন্ডেন্সির মিনিমাল কভার গণনা করুন যাতে নির্ভরতা সংরক্ষণ এবং লসলেস জয়েন নিশ্চিত হয়।'
    },
    {
      en: 'Enforce column atomicity at the schema layer using first normal form (1NF); never store JSON arrays or comma-delimited strings in columns that require indexing or foreign key constraints.',
      bn: '১ম নরমাল ফর্ম (1NF) ব্যবহার করে স্কিমা স্তরে কলামের অবিভাজ্যতা নিশ্চিত করুন; ইনডেক্সিং বা ফরেন কি প্রয়োজন এমন কলামে কখনও JSON অ্যারে বা কমাযুক্ত স্ট্রিং রাখবেন না।'
    },
    {
      en: 'Standardize on Third Normal Form (3NF) or BCNF for transactional OLTP systems to eliminate insertion, update, and deletion anomalies completely.',
      bn: 'ইনসার্ট, আপডেট এবং ডিলিট অ্যানোমালি সম্পূর্ণ দূর করতে ট্রানজ্যাকশনাল OLTP সিস্টেমের জন্য ৩য় নরমাল ফর্ম (3NF) বা BCNF মানদণ্ড ব্যবহার করুন।'
    },
    {
      en: 'Identify composite primary keys early to detect and decompose partial functional dependencies into clean Second Normal Form (2NF) relations.',
      bn: 'কম্পোজিট প্রাইমারি কি আগে থেকেই চিহ্নিত করুন যাতে আংশিক নির্ভরতা শনাক্ত করে টেবিলগুলোকে পরিষ্কার ২য় নরমাল ফর্মে বিভক্ত করা যায়।'
    },
    {
      en: 'Apply Fourth Normal Form (4NF) when a single entity maintains two independent one-to-many relationships, preventing Cartesian coordinate explosions.',
      bn: 'যখন একটি এন্টিটির সাথে দুটি সম্পূর্ণ স্বাধীন ১-টু-মেনি সম্পর্ক থাকে তখন ৪র্থ নরমাল ফর্ম (4NF) প্রয়োগ করে কার্টেশিয়ান বিস্ফোরণ রোধ করুন।'
    },
    {
      en: 'Only denormalize data deliberately for read-heavy reporting or analytics (OLAP), using automated triggers, database views, or CDC pipelines to guarantee consistency.',
      bn: 'কেবলমাত্র রিড-হেভি রিপোর্টিং বা অ্যানালিটিক্সের (OLAP) জন্য সুনির্দিষ্ট পরিকল্পনা করে ডিনরমালাইজ করুন এবং কনসিস্টেন্সি রক্ষা করতে ট্রিগার বা ভিউ ব্যবহার করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What are the three database anomalies (Insertion, Update, Deletion) that normalization is designed to prevent?',
        bn: 'ডাটাবেসের ৩টি অ্যানোমালি (ইনসার্ট, আপডেট, ডিলিট) কী যা দূর করার জন্য নরমালাইজেশন ব্যবহার করা হয়?'
      },
      a: {
        en: 'An Insertion Anomaly occurs when new data cannot be recorded without artificially manufacturing unrelated data (e.g. unable to add a course without enrolling a student). An Update Anomaly occurs when redundant data is modified in one row but not others, causing data inconsistency. A Deletion Anomaly occurs when deleting one piece of information unintentionally wipes out unrelated historical facts (e.g. deleting the last student cancels the entire department record).',
        bn: 'ইনসার্ট অ্যানোমালি ঘটে যখন অপ্রাসঙ্গিক কোনো তথ্য তৈরি না করে নতুন তথ্য সংরক্ষণ করা যায় না (যেমন শিক্ষার্থী ভর্তি না করিয়ে নতুন কোর্সের নাম যোগ করতে না পারা)। আপডেট অ্যানোমালি ঘটে যখন পুনরাবৃত্তিমূলক তথ্যের এক জায়গায় পরিবর্তন হলেও অন্য জায়গায় পুরনো মান থেকে যায়। আর ডিলিট অ্যানোমালি ঘটে যখন একটি অপ্রয়োজনীয় তথ্য মুছতে গিয়ে তার সাথে সম্পর্কহীন গুরুত্বপূর্ণ মূল তথ্যও হারিয়ে যায় (যেমন শেষ শিক্ষার্থীকে ডিলিট করলে পুরো ডিপার্টমেন্টের অস্তিত্ব মুছে যাওয়া)।'
      }
    },
    {
      q: {
        en: 'What is the subtle mathematical difference between Third Normal Form (3NF) and Boyce-Codd Normal Form (BCNF)?',
        bn: '৩য় নরমাল ফর্ম (3NF) এবং বয়েস-কড নরমাল ফর্ম (BCNF) এর মধ্যকার সূক্ষ্ম গাণিতিক পার্থক্য কী?'
      },
      a: {
        en: 'For every non-trivial functional dependency X -> Y, 3NF permits Y to be a prime attribute (part of any candidate key) even if X is not a superkey. BCNF strictly eliminates this exception: X MUST be a superkey for every non-trivial dependency without exception. BCNF thereby eliminates all redundancy from overlapping candidate keys, though it may occasionally sacrifice functional dependency preservation during decomposition.',
        bn: 'প্রতিটি নন-ট্রিভিয়াল ফাংশনাল ডিপেন্ডেন্সি X -> Y এর জন্য, 3NF অনুমোদন করে যে X যদি সুপার-কি নাও হয়, তবুও Y যদি কোনো ক্যান্ডিডেট কি-এর অংশ (prime attribute) হয় তবে তা বৈধ। কিন্তু BCNF এই ছাড় বাতিল করে দেয়: প্রতিটি ডিপেন্ডেন্সির ক্ষেত্রে X-কে অবশ্যই একটি সুপার-কি হতেই হবে। ফলে BCNF একাধিক ওভারল্যাপিং ক্যান্ডিডেট কি-এর জটিলতা দূর করে, যদিও কখনো কখনো সব ডিপেন্ডেন্সি সংরক্ষণ করা সম্ভব হয় না।'
      }
    },
    {
      q: {
        en: 'What is a Multivalued Dependency (MVD) and which normal form resolves it?',
        bn: 'মাল্টিভ্যালুড ডিপেন্ডেন্সি (MVD) কী এবং কোন নরমাল ফর্ম এটি সমাধান করে?'
      },
      a: {
        en: 'A Multivalued Dependency (written X ->> Y) occurs when the presence of attribute Y depends only on attribute X, but is completely independent of another multi-valued attribute Z in the same relation. Storing both Y and Z in one table produces a Cartesian product of redundant rows. Fourth Normal Form (4NF) resolves this by decomposing the table into two independent binary relations (X, Y) and (X, Z).',
        bn: 'মাল্টিভ্যালুড ডিপেন্ডেন্সি (X ->> Y) তখন ঘটে যখন Y এর মানগুলো শুধুমাত্র X এর ওপর নির্ভর করে, কিন্তু টেবিলের অন্য একটি মাল্টি-ভ্যালুড অ্যাট্রিবিউট Z এর সাথে সম্পূর্ণ স্বাধীন থাকে। একটি টেবিলে Y এবং Z উভয়কে রাখলে সারির সংখ্যার অপ্রয়োজনীয় কার্টেশিয়ান গুণফল তৈরি হয়। ৪র্থ নরমাল ফর্ম (4NF) টেবিলটিকে দুটি স্বাধীন বাইনারি রিলেশন (X, Y) এবং (X, Z) এ ভাগ করে এটি সমাধান করে।'
      }
    },
    {
      q: {
        en: 'When is deliberate denormalization justified in production software architecture?',
        bn: 'প্রোডাকশন সফটওয়্যার আর্কিটেকচারে কোন পরিস্থিতিতে সুপরিকল্পিত ডিনরমালাইজেশন যুক্তিযুক্ত?'
      },
      a: {
        en: 'Denormalization is justified in read-heavy applications (such as high-traffic e-commerce storefronts or analytical data warehouses) where executing 6-way joins across normalized tables introduces unacceptable query latency. By pre-aggregating summary counts or replicating customer names into order tables, systems trade disk space and write complexity for sub-millisecond read responses.',
        bn: 'রিড-হেভি অ্যাপ্লিকেশনে (যেমন উচ্চ ট্রাফিকের ই-কমার্স স্টোর বা ডেটা ওয়্যারহাউস) ডিনরমালাইজেশন যুক্তিযুক্ত, যেখানে নরমালাইজড টেবিলগুলোতে ৬টি জয়েন চালাতে গেলে কোয়েরির গতি মারাত্মক কমে যায়। অর্ডার টেবিলে গ্রাহকের নাম সরাসরি রেখে দিয়ে বা হিসাব আগে থেকেই সংরক্ষণ করে সিস্টেমগুলো সামান্য বাড়তি ডিস্ক স্পেসের বিনিময়ে মিলিসেকেন্ডের নিচে বিদ্যুৎগতির রিড নিশ্চিত করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Amazon maintains normalized 3NF schemas for order processing to ensure transactions and inventory allocations remain strictly atomic and anomaly-free during million-order Prime Day peaks.',
      bn: 'আমাজন (Amazon) প্রাইম ডে-এর মতো ব্যস্ত সময়ে লক্ষ লক্ষ অর্ডারের ইনভেন্টরি বরাদ্দ যেন কোনো অ্যানোমালি ছাড়াই নিখুঁত থাকে তা নিশ্চিত করতে ৩য় নরমাল ফর্মের স্কিমা ব্যবহার করে।'
    },
    {
      en: 'Netflix separates transactional user profiles (stored in BCNF relational databases) from their recommendation analytics engines, which rely on denormalized wide-column data stores for fast vector lookups.',
      bn: 'নেটফ্লিক্স (Netflix) তাদের ব্যবহারকারী প্রোফাইল BCNF রিলেশনাল ডাটাবেসে রাখে এবং ভিডিও সুপারিশ ইঞ্জিনগুলোতে দ্রুত অনুসন্ধানের জন্য ডিনরমালাইজড ওয়াইড-কলাম ডাটা স্টোর ব্যবহার করে।'
    },
    {
      en: 'Snowflake and Databricks optimize analytical queries by decomposing complex business domains into star and snowflake schemas, utilizing deliberate dimensional denormalization to accelerate BI reporting.',
      bn: 'স্নোফ্লেক (Snowflake) এবং ডাটাগ্রিকস জটিল ব্যবসায়িক তথ্যকে স্টার এবং স্নোফ্লেক স্কিমায় সাজিয়ে সুপরিকল্পিত ডিনরমালাইজেশনের মাধ্যমে ব্যবসায়িক রিপোর্টিংয়ের গতি শতগুণ বাড়িয়ে দেয়।'
    },
    {
      en: 'Salesforce manages millions of enterprise tenant schemas by isolating custom fields into 1NF metadata dictionaries, dynamically mapping dynamic customer attributes without schema locking.',
      bn: 'সেলসফোর্স (Salesforce) লক্ষ লক্ষ প্রতিষ্ঠানের কাস্টম ফিল্ড ১NF মেটাডাটা ডিকশনারিতে পৃথক রেখে স্কিমা লক ছাড়াই ডায়নামিক কাস্টমার অ্যাট্রিবিউট পরিচালনা করে।'
    }
  ]
};
