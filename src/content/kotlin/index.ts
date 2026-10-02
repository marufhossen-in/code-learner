import type { Hub } from '../../lib/types';
import { NullsAndTheSafeLesson } from './lessons/nulls-and-the-safe';
import { ValsAndTheDataLesson } from './lessons/vals-and-the-data';
import { LambdasAndTheReceiverLesson } from './lessons/lambdas-and-the-receiver';
import { ClassesAndTheSealedLesson } from './lessons/classes-and-the-sealed';
import { CollectionsAndTheSequenceLesson } from './lessons/collections-and-the-sequence';
import { CoroutinesAndTheSuspendLesson } from './lessons/coroutines-and-the-suspend';
import { FlowsAndTheCollectLesson } from './lessons/flows-and-the-collect';
import { TheKotlinReleaseLesson } from './lessons/the-kotlin-release';

export const kotlinHub: Hub = {
  slug: 'kotlin',
  name: 'Kotlin',
  icon: '🅺',
  tagline: {
    en: 'Modern, concise, and multiplatform programming: Null safety, expressive data classes, coroutines, and reactive flows on JVM, Android, and Native.',
    bn: 'আধুনিক, সংক্ষিপ্ত এবং মাল্টিপ্ল্যাটফর্ম প্রোগ্রামিং: নাল সেফটি, ডেটা ক্লাস, কোরুটিন এবং JVM, অ্যান্ড্রয়েড ও নেটিভে রিঅ্যাক্টিভ ফ্লো।'
  },
  intro: {
    en: 'Master Kotlin from core language fundamentals to advanced reactive architectures. Kotlin eliminates entire classes of runtime errors through first-class null safety, concise immutable data classes, type-safe builders via lambdas with receiver, exhaustive pattern matching on sealed hierarchies, lazy sequence evaluation, lightweight cooperative coroutines, asynchronous streaming via StateFlow and SharedFlow, and modern production release builds targeting Android, JVM microservices, and Kotlin Multiplatform (KMP).',
    bn: 'কোর ভাষার ভিত্তি থেকে শুরু করে আধুনিক রিঅ্যাক্টিভ আর্কিটেকচার পর্যন্ত Kotlin আয়ত্ত করুন। Kotlin প্রথম শ্রেণির নাল সেফটি, সংক্ষিপ্ত ইমিউটেবল ডেটা ক্লাস, ল্যাম্বডা উইথ রিসিভার দিয়ে টাইপ-সেফ বিল্ডার, সিল্ড হায়ারার্কিতে পূর্ণাঙ্গ প্যাটার্ন ম্যাচিং, লেজি সিকোয়েন্স ক্যালকুলেশন, লাইটওয়েট কোরুটিন, StateFlow ও SharedFlow দিয়ে রিঅ্যাক্টিভ স্ট্রিমিং এবং অ্যান্ড্রয়েড, JVM সার্ভার ও Kotlin Multiplatform (KMP) লক্ষ্য করে প্রোডাকশন রিলিজের মাধ্যমে রানটাইম ত্রুটি চিরতরে দূর করে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Core Language Foundations & Expressive Idioms',
        bn: 'ধাপ ১ — ভাষার মৌলিক ভিত্তি এবং সাবলীল ইডিয়ম'
      },
      items: [
        {
          en: 'Null Safety & The Safe Call (?., ?:, !!): Smart casts and the elimination of NullPointerException (lesson 1)',
          bn: 'নাল সেফটি এবং সেফ কল (?., ?:, !!): স্মার্ট কাস্ট এবং NullPointerException নির্মূলকরণ (পাঠ ১)'
        },
        {
          en: 'Immutability & Data Classes: Val versus var, copy(), componentN(), and pattern destructuring (lesson 2)',
          bn: 'ইমিউটেবিলিটি এবং ডেটা ক্লাস: Val বনাম var, copy(), componentN() এবং প্যাটার্ন ডিস্ট্রাকচারিং (পাঠ ২)'
        },
        {
          en: 'High-Order Functions & Lambdas with Receiver: Inlining, crossinline, and type-safe builders / DSLs (lesson 3)',
          bn: 'হায়ার-অর্ডার ফাংশন এবং ল্যাম্বডা উইথ রিসিভার: ইনলাইনিং, ক্রসইনলাইন এবং টাইপ-সেফ বিল্ডার / DSL (পাঠ ৩)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Sealed Types, OOP Mastery & Lazy Collections',
        bn: 'ধাপ ২ — সিল্ড টাইপস, OOP দক্ষতা এবং লেজি কালেকশন'
      },
      items: [
        {
          en: 'Classes, Interfaces & Sealed Hierarchies: Algebraic data types, delegation by keyword, and exhaustive when (lesson 4)',
          bn: 'ক্লাস, ইন্টারফেস এবং সিল্ড হায়ারার্কি: অ্যালজেব্রাইক ডেটা টাইপ, বাই কি-ওয়ার্ড দিয়ে ডেলিগেশন এবং পূর্ণাঙ্গ when (পাঠ ৪)'
        },
        {
          en: 'Collections & Lazy Sequences: Eager lists versus lazy Sequence pipelines for high-throughput data (lesson 5)',
          bn: 'কালেকশন এবং লেজি সিকোয়েন্স: উচ্চ-ক্ষমতাসম্পন্ন ডেটার জন্য সরাসরি লিস্ট বনাম অলস Sequence পাইপলাইন (পাঠ ৫)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Asynchronous Mastery & Production Release',
        bn: 'ধাপ ৩ — অ্যাসিনক্রোনাস দক্ষতা এবং প্রোডাকশন রিলিজ'
      },
      items: [
        {
          en: 'Coroutines & Cooperative Suspension: Dispatchers (Default, IO, Main), scopes, and structured cancellation (lesson 6)',
          bn: 'কোরুটিন এবং কো-অপারেটিভ সাসপেনশন: ডিসপ্যাচার (Default, IO, Main), স্কোপ এবং স্ট্রাকচার্ড ক্যান্সেলেশন (পাঠ ৬)'
        },
        {
          en: 'Asynchronous Streams & Reactive Flows: Cold Flow builders, StateFlow state holders, and SharedFlow event bus (lesson 7)',
          bn: 'অ্যাসিনক্রোনাস স্ট্রিম এবং রিঅ্যাক্টিভ ফ্লো: কোল্ড Flow বিল্ডার, StateFlow স্টেট হোল্ডার এবং SharedFlow ইভেন্ট বাস (পাঠ ৭)'
        },
        {
          en: 'The Kotlin Release Pipeline: Kotlin 2.0 K2 compiler, ProGuard / R8 code shrinking, and Kotlin Multiplatform (lesson 8)',
          bn: 'Kotlin রিলিজ পাইপলাইন: Kotlin ২.০ K2 কম্পাইলার, ProGuard / R8 কোড শ্রিঙ্কিং এবং Kotlin Multiplatform (পাঠ ৮)'
        }
      ]
    }
  ],
  projects: [
    {
      title: {
        en: 'Safe Banking Transaction Ledger',
        bn: 'নিরাপদ ব্যাংকিং লেনদেন লেজার'
      },
      brief: {
        en: 'Production-ready financial state machine modeling account transactions with sealed classes, smart casts, and immutable audit logs.',
        bn: 'সিল্ড ক্লাস, স্মার্ট কাস্ট এবং অপরিবর্তনীয় অডিট লগ সহ অ্যাকাউন্ট লেনদেনের প্রোডাকশন-রেডি স্টেট মেশিন।'
      }
    },
    {
      title: {
        en: 'Asynchronous Network & Cache Pipeline',
        bn: 'অ্যাসিনক্রোনাস নেটওয়ার্ক ও ক্যাশ পাইপলাইন'
      },
      brief: {
        en: 'High-throughput offline-first data manager leveraging Kotlin Coroutines, Room database, and StateFlow for real-time UI synchronization.',
        bn: 'রিয়েল-টাইম ইউআই সিনক্রোনাইজেশনের জন্য Kotlin কোরুটিন, রুম ডাটাবেজ এবং StateFlow চালিত অফলাইন-ফার্স্ট ডেটা ম্যানেজার।'
      }
    },
    {
      title: {
        en: 'Declarative HTML / UI Type-Safe DSL',
        bn: 'ডিক্লেয়ারেটিভ HTML / UI টাইপ-সেফ DSL'
      },
      brief: {
        en: 'Custom domain-specific language engine built with lambdas with receiver to generate structured, strictly typed markup at compile time.',
        bn: 'কম্পাইল-টাইমে সুসংগঠিত টাইপড মার্কআপ তৈরির জন্য ল্যাম্বডা উইথ রিসিভার দিয়ে নির্মিত নিজস্ব ডোমেন-স্পেসিফিক ল্যাঙ্গুয়েজ।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Declare properties with val and non-nullable types by default; introduce var and nullable types (T?) only when mutable state is genuinely necessary.',
      bn: 'ডিফল্টভাবে প্রোপার্টিকে val এবং নন-নাল টাইপে ঘোষণা করুন; কেবল বাস্তব প্রয়োজনেই var এবং নালেবল টাইপ (T?) ব্যবহার করুন।'
    },
    {
      en: 'Replace fragile enum and boolean flags with sealed hierarchies, enabling the compiler to enforce exhaustive when branching across all screens.',
      bn: 'ভঙ্গুর এনাম বা বুলিয়ান ফ্ল্যাগের বদলে সিল্ড হায়ারার্কি ব্যবহার করুন, যাতে কম্পাইলার প্রতিটি ব্রাঞ্চিং নিখুঁতভাবে যাচাই করতে পারে।'
    },
    {
      en: 'Avoid allocating intermediate lists during chained map and filter operations by calling .asSequence() on collections with over 100 items.',
      bn: '১০০ টির বেশি উপাদানযুক্ত কালেকশনে ম্যাপ ও ফিল্টার চেইনে বাড়তি লিস্ট বরাদ্দ এড়াতে .asSequence() ব্যবহার করুন।'
    },
    {
      en: 'Never launch coroutines in GlobalScope. Bind coroutines to structured lifecycles and dispatch heavy disk/network operations strictly onto Dispatchers.IO.',
      bn: 'কখনোই GlobalScope-এ কোরুটিন চালাবেন না। নির্দিষ্ট জীবনচক্রের সাথে কোরুটিন বাঁধুন এবং ভারী আই/ও কাজগুলো Dispatchers.IO-তে চালান।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the precise architectural difference between "val" and "const val" in Kotlin?',
        bn: 'Kotlin-এ "val" এবং "const val"-এর মধ্যে সুনির্দিষ্ট স্থাপত্যিক পার্থক্য কী?'
      },
      a: {
        en: '"val" defines a runtime read-only reference that can be assigned dynamically (e.g. from a function call). "const val" is a compile-time constant evaluated during compilation, restricted to top-level or object declarations and primitive types or Strings.',
        bn: '"val" রানটাইমে কেবল পড়ার উপযোগী রেফারেন্স তৈরি করে যা ডায়নামিকভাবে নির্ধারিত হতে পারে। আর "const val" হলো কম্পাইল-টাইম ধ্রুবক যা কম্পাইলেশনের সময়ই নির্ধারিত হয় এবং কেবল প্রিমিটিভ বা স্ট্রিংয়ে সীমাবদ্ধ থাকে।'
      }
    },
    {
      q: {
        en: 'How do inline functions with "reified" type parameters overcome JVM Type Erasure?',
        bn: '"reified" টাইপ প্যারামিটারযুক্ত ইনলাইন ফাংশন কীভাবে JVM-এর টাইপ ইরেজার (Type Erasure) সীমাবদ্ধতা অতিক্রম করে?'
      },
      a: {
        en: 'The JVM erases generic type parameters at runtime. By inlining the bytecode directly at the call-site, the Kotlin compiler replaces the reified generic placeholder "T" with the actual concrete class bytecode (e.g. String.class), enabling runtime type checks like "if (item is T)".',
        bn: 'JVM রানটাইমে জেনেরিক টাইপ মুছে ফেলে। কল-সাইটে সরাসরি বাইটকোড ইনলাইন করে Kotlin কম্পাইলার reified প্লেসহোল্ডার T-কে আসল কংক্রিট ক্লাসের বাইটকোড দিয়ে প্রতিস্থাপন করে, ফলে রানটাইমেও "is T" যাচাই করা সম্ভব হয়।'
      }
    },
    {
      q: {
        en: 'What is the difference between cold Flow, StateFlow, and SharedFlow in Kotlin Coroutines?',
        bn: 'Kotlin কোরুটিনে কোল্ড Flow, StateFlow এবং SharedFlow-এর মধ্যে পার্থক্য কী?'
      },
      a: {
        en: 'A standard Flow is cold: code inside the builder executes only when collect() is invoked. StateFlow is a hot, state-holding observable stream that retains its latest value and replays it to new collectors. SharedFlow is a hot, event-emitting stream supporting configurable replay buffers for one-off broadcast events.',
        bn: 'সাধারণ Flow হলো কোল্ড: কেবল collect() ডাকলেই ভেতরের কোড চলে। StateFlow হলো একটি হট স্টেট-হোল্ডার স্ট্রিম যা সর্বদা সর্বশেষ মান ধরে রাখে এবং নতুন কালেক্টরদের তা পাঠায়। আর SharedFlow হলো একটি হট ইভেন্ট স্ট্রিম যা কনফিগারযোগ্য বাফারের মাধ্যমে ইভেন্ট ব্রডকাস্ট করে।'
      }
    },
    {
      q: {
        en: 'How does the Kotlin 2.0 K2 compiler improve build performance and frontend analysis?',
        bn: 'Kotlin ২.০ K2 কম্পাইলার কীভাবে বিল্ড গতি এবং ফ্রন্টএন্ড বিশ্লেষণ উন্নত করে?'
      },
      a: {
        en: 'The K2 compiler introduces a completely rewritten, unified frontend architecture that pipelines semantic analysis, accelerates compilation speeds by up to 2x, improves type inference precision, and unifies compiler plugins across JVM, JS, Native, and WebAssembly targets.',
        bn: 'K2 কম্পাইলার একটি সম্পূর্ণ নতুন একীভূত ফ্রন্টএন্ড নিয়ে এসেছে যা কম্পাইলেশনের গতি ২ গুণ পর্যন্ত বৃদ্ধি করে, টাইপ ইনফারেন্স উন্নত করে এবং JVM, JS, Native ও Wasm টার্গেটে কম্পাইলার প্লাগইনকে একীভূত করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Cash App (Block) Android & iOS architecture: migrated core financial calculation engines to Kotlin Multiplatform (KMP), sharing business logic safely.',
      bn: 'ক্যাশ অ্যাপ (ব্লক) অ্যান্ড্রয়েড ও iOS আর্কিটেকচার: মূল আর্থিক হিসেব ইঞ্জিন Kotlin Multiplatform (KMP)-এ স্থানান্তর করে নিরাপদে লজিক শেয়ার করেছে।'
    },
    {
      en: 'Netflix Android application: adopted Kotlin Coroutines and StateFlow streaming to handle real-time playback telemetry and offline video downloading.',
      bn: 'নেটফ্লিক্স অ্যান্ড্রয়েড অ্যাপ্লিকেশন: রিয়েল-টাইম প্লেব্যাক টেলিমেট্রি এবং অফলাইন ভিডিও ডাউনলোড পরিচালনায় Kotlin কোরুটিন ও StateFlow গ্রহণ করেছে।'
    },
    {
      en: 'Duolingo learning app rewrite: transitioned from legacy Java to 100 percent Kotlin, reducing codebase size by 30 percent with data classes.',
      bn: 'ডুওলিঙ্গো লার্নিং অ্যাপ পুনর্নির্মাণ: পুরোনো জাভা থেকে ১০০ শতাংশ Kotlin-এ রূপান্তর করে ডেটা ক্লাসের মাধ্যমে কোডের আকার ৩০ শতাংশ কমিয়েছে।'
    }
  ],
  lessons: [
    NullsAndTheSafeLesson,
    ValsAndTheDataLesson,
    LambdasAndTheReceiverLesson,
    ClassesAndTheSealedLesson,
    CollectionsAndTheSequenceLesson,
    CoroutinesAndTheSuspendLesson,
    FlowsAndTheCollectLesson,
    TheKotlinReleaseLesson
  ]
};
