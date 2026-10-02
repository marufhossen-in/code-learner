import type { Hub } from '../../lib/types';
import { ScalasAndTheScaleLesson } from './lessons/scalas-and-the-scale';
import { ValsAndTheTypeLesson } from './lessons/vals-and-the-type';
import { FuncsAndTheLambdaLesson } from './lessons/funcs-and-the-lambda';
import { CasesAndTheClassLesson } from './lessons/cases-and-the-class';
import { ListsAndTheMapLesson } from './lessons/lists-and-the-map';
import { TraitsAndTheMixinLesson } from './lessons/traits-and-the-mixin';
import { BuildsAndTheSbtLesson } from './lessons/builds-and-the-sbt';
import { TheScalaReleaseLesson } from './lessons/the-scala-release';

export const scalaHub: Hub = {
  slug: 'scala',
  name: 'Scala',
  icon: '🆂',
  tagline: {
    en: 'Type-safe functional and object-oriented programming on the JVM: immutability, pattern matching, higher-order functions, traits, sbt, and Scala 3.',
    bn: 'জেভিএম (JVM) এর ওপর টাইপ-নিরাপদ ফাংশনাল ও অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং: ইমিউটেবিলিটি, প্যাটার্ন ম্যাচিং, হায়ার-অর্ডার ফাংশন, ট্রেইট, sbt এবং স্কালা ৩।'
  },
  intro: {
    en: 'Master Scala from first principles to enterprise production: immutable vals vs mutable vars, expression-oriented syntax, case classes and algebraic data types, collections and for-comprehensions, traits and mixin composition, sbt build definitions, and zero-defect deployment with Scala 3.',
    bn: 'স্কালা প্রোগ্রামিংয়ের মূল ভিত্তি থেকে এন্টারপ্রাইজ প্রোডাকশন: ইমিউটেবল val বনাম মিউটেবল var, এক্সপ্রেশন-ভিত্তিক সিনট্যাক্স, কেস ক্লাস ও অ্যালজেব্রাইক ডাটা টাইপ, কালেকশন ও for-কমপ্রিহেনশন, ট্রেইট ও মিক্সিন কম্পোজিশন, sbt বিল্ড এবং স্কালা ৩ দিয়ে নির্ভরযোগ্য সফটওয়্যার ডেপ্লয়মেন্ট।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Language Foundations, Types & First-Class Functions',
        bn: 'ধাপ ১ — ভাষার মূল ভিত্তি, টাইপ সিস্টেম এবং ফার্স্ট-ক্লাস ফাংশন'
      },
      items: [
        {
          en: 'Scala architecture & ecosystem: JVM bytecode execution, expression orientation, and the Scala 3 compiler (lesson 1)',
          bn: 'স্কালা আর্কিটেকচার ও ইকোসিস্টেম: JVM বাইটকোড এক্সিকিউশন, এক্সপ্রেশন ওরিয়েন্টেশন এবং স্কালা ৩ কম্পাইলার (পাঠ ১)'
        },
        {
          en: 'Values, variables & types: immutable val vs mutable var, type inference, lazy evaluation, and Option vs null (lesson 2)',
          bn: 'মান, ভেরিয়েবল ও টাইপ: ইমিউটেবল val বনাম মিউটেবল var, টাইপ ইনফারেন্স, লেজি ইভ্যালুয়েশন এবং Option বনাম null (পাঠ ২)'
        },
        {
          en: 'Functional programming & lambdas: higher-order functions, currying, partially applied functions, and closures (lesson 3)',
          bn: 'ফাংশনাল প্রোগ্রামিং ও ল্যাম্বডা: হায়ার-অর্ডার ফাংশন, কারিং, আংশিক প্রয়োগকৃত ফাংশন এবং ক্লোজার্স (পাঠ ৩)'
        },
        {
          en: 'Core principle: immutability by default, pure functions without side effects, and compile-time type safety',
          bn: 'মূলনীতি: ডিফল্টভাবে ইমিউটেবিলিটি, পার্শ্বপ্রতিক্রিয়াহীন বিশুদ্ধ ফাংশন এবং কম্পাইল-টাইম টাইপ নিরাপত্তা'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — OOP & FP Synthesis: Modeling, Collections & Traits',
        bn: 'ধাপ ২ — অবজেক্ট-ওরিয়েন্টেড ও ফাংশনাল সমন্বয়: মডেলিং, কালেকশন ও ট্রেইট'
      },
      items: [
        {
          en: 'Case classes & pattern matching: algebraic data types (ADTs), extractor objects, destructuring, and sealed hierarchies (lesson 4)',
          bn: 'কেস ক্লাস ও প্যাটার্ন ম্যাচিং: অ্যালজেব্রাইক ডাটা টাইপ (ADTs), এক্সট্রাক্টর অবজেক্ট, ডিস্ট্রাকচারিং এবং সিলড হায়ারার্কি (পাঠ ৪)'
        },
        {
          en: 'Collections & for-comprehensions: immutable List, Vector, Map, Set, monadic chaining (flatMap/filter), and lazy Views (lesson 5)',
          bn: 'কালেকশন ও for-কমপ্রিহেনশন: ইমিউটেবল List, Vector, Map, Set, মোনাডিক চেইনিং (flatMap/filter) এবং লেজি ভিউ (পাঠ ৫)'
        },
        {
          en: 'Traits & mixin composition: multiple inheritance linearization, abstract members, self types, and Scala 3 given/using (lesson 6)',
          bn: 'ট্রেইট ও মিক্সিন কম্পোজিশন: মাল্টিপল ইনহেরিটেন্স লিনিয়ারাইজেশন, অ্যাবস্ট্রাক্ট মেম্বার, সেলফ টাইপ এবং স্কালা ৩ given/using (পাঠ ৬)'
        },
        {
          en: 'Architectural rule: express domain logic with immutable case classes and compose capabilities via traits',
          bn: 'আর্কিটেকচারাল নিয়ম: ইমিউটেবল কেস ক্লাস দিয়ে ডোমেন মডেল সাজানো এবং ট্রেইট দিয়ে সক্ষমতা যুক্ত করা'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Build Tooling, Packaging & Production Release',
        bn: 'ধাপ ৩ — বিল্ড টুলিং, প্যাকেজিং এবং প্রোডাকশন রিলিজ'
      },
      items: [
        {
          en: 'Build definition with sbt: project configuration, multi-module builds, dependency management, and automated testing (lesson 7)',
          bn: 'sbt দিয়ে বিল্ড ডেফিনিশন: প্রজেক্ট কনফিগারেশন, মাল্টি-মডিউল বিল্ড, ডিপেন্ডেন্সি ম্যানেজমেন্ট এবং স্বয়ংক্রিয় টেস্টিং (পাঠ ৭)'
        },
        {
          en: 'Production deployment: fat JAR packaging with sbt-assembly, GraalVM native images, Docker containers, and CI/CD pipelines (lesson 8)',
          bn: 'প্রোডাকশন ডেপ্লয়মেন্ট: sbt-assembly দিয়ে ফ্যাট জার (fat JAR) প্যাকেজিং, GraalVM নেটিভ ইমেজ, ডকার কনটেইনার এবং CI/CD পাইপলাইন (পাঠ ৮)'
        },
        {
          en: 'Production standard: zero unhandled exceptions, deterministic builds, and sub-second container startup',
          bn: 'প্রোডাকশন স্ট্যান্ডার্ড: হ্যান্ডেল না করা এক্সেপশন শূন্যে নামানো, ডিটারমিনিস্টিক বিল্ড এবং দ্রুত কনটেইনার স্টার্টআপ'
        }
      ]
    }
  ],
  lessons: [
    ScalasAndTheScaleLesson,
    ValsAndTheTypeLesson,
    FuncsAndTheLambdaLesson,
    CasesAndTheClassLesson,
    ListsAndTheMapLesson,
    TraitsAndTheMixinLesson,
    BuildsAndTheSbtLesson,
    TheScalaReleaseLesson
  ],
  projects: [
    {
      title: {
        en: 'High-Throughput E-Commerce Order Processing Engine',
        bn: 'উচ্চগতির ই-কমার্স অর্ডার প্রসেসিং ইঞ্জিন'
      },
      brief: {
        en: 'Build an immutable, concurrent order execution pipeline in Scala 3 using case classes, sealed algebraic data types for payment states, pattern matching for fraud detection, and for-comprehensions to compose validated customer checkouts.',
        bn: 'স্কালা ৩ ব্যবহার করে একটি ইমিউটেবল ও কনকারেন্ট অর্ডার প্রসেসিং পাইপলাইন তৈরি করুন; যেখানে পেমেন্ট স্ট্যাটাসের জন্য সিলড অ্যালজেব্রাইক ডাটা টাইপ, জালিয়াতি শনাক্তে প্যাটার্ন ম্যাচিং এবং চেকআউট নিশ্চিত করতে for-কমপ্রিহেনশন ব্যবহৃত হবে।'
      }
    },
    {
      title: {
        en: 'Distributed Stream Analytics Microservice with sbt & Akka/Pekko',
        bn: 'sbt এবং Akka/Pekko দিয়ে ডিস্ট্রিবিউটেড স্ট্রিম অ্যানালিটিক্স মাইক্রোসার্ভিস'
      },
      brief: {
        en: 'Architect an end-to-end multi-module sbt application that ingests real-time financial market ticks, aggregates volume metrics using immutable collections, applies trait-based metrics logging, and packages into a production Docker image.',
        bn: 'একটি পূর্ণাঙ্গ মাল্টি-মডিউল sbt অ্যাপ্লিকেশন তৈরি করুন যা রিয়েল-টাইম ফিনান্সিয়াল মার্কেট ডাটা গ্রহণ করে, ইমিউটেবল কালেকশন দিয়ে ভলিউম মেট্রিক্স তৈরি করে, ট্রেইট-ভিত্তিক লগিং চালায় এবং ডকার ইমেজে প্যাকেজ করে।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Prefer immutable val over mutable var everywhere: eliminate hidden state mutation to ensure thread-safe concurrency.',
      bn: 'সর্বদা মিউটেবল var এর চেয়ে ইমিউটেবল val ব্যবহার করুন: থ্রেড-নিরাপদ কনকারেন্সি নিশ্চিত করতে গোপন স্টেট মিউটেশন দূর করুন।'
    },
    {
      en: 'Ban null references completely: wrap optional values in Option (Some/None) and error conditions in Either or Try.',
      bn: 'null এর ব্যবহার পুরোপুরি নিষিদ্ধ করুন: সম্ভাব্য মানকে Option (Some/None) এবং এরর হ্যান্ডলিংকে Either বা Try দিয়ে মুড়ে রাখুন।'
    },
    {
      en: 'Model business domains using sealed traits and case classes: allow the Scala compiler to exhaustively verify all pattern matching branches.',
      bn: 'সিলড ট্রেইট এবং কেস ক্লাস দিয়ে বিজনেস ডোমেন মডেল করুন: কম্পাইলারকে تمام প্যাটার্ন ম্যাচিং ব্রাঞ্চ পুঙ্খানুপুঙ্খভাবে যাচাই করতে দিন।'
    },
    {
      en: 'Leverage expression-oriented syntax: write if/else, match, and try/catch as value-yielding expressions rather than imperative side-effecting statements.',
      bn: 'এক্সপ্রেশন-ভিত্তিক সিনট্যাক্স কাজে লাগান: if/else, match এবং try/catch কে স্টেটমেন্ট না লিখে মান প্রদানকারী এক্সপ্রেশন হিসেবে লিখুন।'
    },
    {
      en: 'Favor trait composition over rigid class inheritance: use mixins and self-types to cleanly decouple behaviors.',
      bn: 'অনমনীয় ক্লাস ইনহেরিটেন্সের বদলে ট্রেইট কম্পোজিশন বেছে নিন: মিক্সিন এবং সেলফ-টাইপ ব্যবহার করে সক্ষমতাগুলোকে আলাদা রাখুন।'
    },
    {
      en: 'Maintain deterministic sbt build scripts: lock compiler plugins, library dependencies, and JVM target versions in build.sbt.',
      bn: 'ডিটারমিনিস্টিক sbt বিল্ড স্ক্রিপ্ট বজায় রাখুন: build.sbt ফাইলে কম্পাইলার প্লাগইন, লাইব্রেরি ডিপেন্ডেন্সি ও জেভিএম টার্গেট লক করে রাখুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What are the core differences between val, var, lazy val, and def in Scala?',
        bn: 'স্কালাতে val, var, lazy val এবং def এর মধ্যে প্রধান পার্থক্যগুলো কী কী?'
      },
      a: {
        en: 'val is evaluated once at definition time and creates an immutable reference. var creates a mutable reference that can be reassigned. lazy val is evaluated once on first access and cached (memoized) for subsequent calls. def defines a method that is evaluated anew every time it is called.',
        bn: 'val সংজ্ঞায়িত করার সময় একবার মূল্যায়িত হয় এবং এটি অপরিবর্তনশীল (ইমিউটেবল)। var একটি পরিবর্তনশীল রেফারেন্স তৈরি করে যার মান পুনরায় বরাদ্দ করা যায়। lazy val প্রথমবার ব্যবহারের সময় একবার মূল্যায়িত হয়ে মেমোইজড থাকে। def এমন একটি মেথড যা প্রতিবার ডাকার সময় নতুন করে রান হয়।'
      }
    },
    {
      q: {
        en: 'Why are case classes fundamental to functional domain modeling in Scala?',
        bn: 'স্কালাতে ফাংশনাল ডোমেন মডেলিংয়ের জন্য কেস ক্লাস (case class) কেন মৌলিক?'
      },
      a: {
        en: 'Case classes automatically generate immutable fields, structural equals and hashCode, a readable toString, copy() methods for non-destructive updates, companion objects with apply/unapply for constructor elimination and pattern matching destructuring, and serializability.',
        bn: 'কেস ক্লাস স্বয়ংক্রিয়ভাবে ইমিউটেবল ফিল্ড, কাঠামোগত equals ও hashCode, পরিষ্কার toString, কপি মেথড copy(), এবং কনস্ট্রাক্টর ছাড়া অবজেক্ট তৈরি ও প্যাটার্ন ম্যাচিংয়ের জন্য apply/unapply সমৃদ্ধ কম্প্যানিয়ন অবজেক্ট সরবরাহ করে।'
      }
    },
    {
      q: {
        en: 'How does trait linearization resolve the Diamond Problem in Scala multiple inheritance?',
        bn: 'স্কালা মাল্টিপল ইনহেরিটেন্সে ট্রেইট লিনিয়ারাইজেশন কীভাবে ডায়মন্ড প্রবলেম সমাধান করে?'
      },
      a: {
        en: 'Scala applies a deterministic algorithm called linearization to establish a single, unambiguous inheritance chain from right to left. Calls to super are dynamically bound according to this linearized order rather than pointing directly to the syntactic parent class.',
        bn: 'স্কালা "লিনিয়ারাইজেশন" নামক একটি সুনির্দিষ্ট অ্যালগরিদম প্রয়োগ করে ডান থেকে বাম দিকে একটি একক ও স্পষ্ট ইনহেরিটেন্স চেইন তৈরি করে। super কলগুলো সরাসরি সিনট্যাক্টিক প্যারেন্টে না গিয়ে এই লিনিয়ারাইজড ক্রম অনুসারে ডায়নামিকালি বাইন্ড হয়।'
      }
    },
    {
      q: {
        en: 'What is the purpose of the sealed keyword on traits and classes in Scala?',
        bn: 'স্কালাতে ট্রেইট এবং ক্লাসে sealed কীওয়ার্ড ব্যবহারের উদ্দেশ্য কী?'
      },
      a: {
        en: 'The sealed keyword restricts all direct subtypes to be defined in the very same source file. This enables the Scala compiler to perform exhaustive pattern matching analysis at compile time, warning developers if any case branch is omitted.',
        bn: 'sealed কীওয়ার্ড সমস্ত প্রত্যক্ষ সাবটাইপকে একই সোর্স ফাইলে সংজ্ঞায়িত হতে বাধ্য করে। এর ফলে স্কালা কম্পাইলার কম্পাইল-টাইমে পূর্ণাঙ্গ প্যাটার্ন ম্যাচিং পরীক্ষা করতে পারে এবং কোনো কেস ব্রাঞ্চ বাদ পড়লে ডেভেলপারকে সতর্কবার্তা দেয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Apache Spark executes petabyte-scale distributed data transformations across thousands of cluster nodes powered by Scala\'s functional collection APIs.',
      bn: 'অ্যাপাচি স্পার্ক (Apache Spark) স্কেলার ফাংশনাল কালেকশন এপিআই ব্যবহার করে হাজার হাজার ক্লাস্টার নোডে পেটাবাইট স্কেলের ডিস্ট্রিবিউটেড ডাটা প্রসেসিং চালায়।'
    },
    {
      en: 'Akka and Apache Pekko leverage Scala actor systems and typed message protocols to power ultra-low-latency financial trading exchanges.',
      bn: 'Akka এবং Apache Pekko স্কেলার অ্যাক্টর সিস্টেম এবং টাইপযুক্ত মেসেজ প্রোটোকল ব্যবহার করে অত্যন্ত দ্রুতগতির ফিনান্সিয়াল ট্রেডিং এক্সচেঞ্জ পরিচালনা করে।'
    },
    {
      en: 'Twitter / X built its distributed RPC microservices layer on Finagle, relying on Scala\'s asynchronous Futures and composable services.',
      bn: 'টুইটার / X তাদের ডিস্ট্রিবিউটেড RPC মাইক্রোসার্ভিস লেয়ার ফিনাগলের (Finagle) ওপর তৈরি করেছিল, যা স্কেলার অ্যাসিনক্রোনাস ফিউচার ও কম্পোজেবল সার্ভিসের ওপর নির্ভরশীল।'
    },
    {
      en: 'Kafka stream processors and enterprise data engineering backends utilize Scala for type-safe event parsing and deterministic distributed pipelines.',
      bn: 'কাফকা (Kafka) স্ট্রিম প্রসেসর এবং এন্টারপ্রাইজ ডাটা ইঞ্জিনিয়ারিং ব্যাকএন্ড টাইপ-নিরাপদ ইভেন্ট পার্সিং এবং নির্ভরযোগ্য ডিস্ট্রিবিউটেড পাইপলাইনের জন্য স্কালা ব্যবহার করে।'
    }
  ]
};
