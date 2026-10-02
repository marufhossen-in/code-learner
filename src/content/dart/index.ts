import type { Hub } from '../../lib/types';
import { DartsAndTheFlightLesson } from './lessons/darts-and-the-flight';
import { TypesAndTheVarLesson } from './lessons/types-and-the-var';
import { FuncsAndTheFutureLesson } from './lessons/funcs-and-the-future';
import { WidgetsAndTheBuildLesson } from './lessons/widgets-and-the-build';
import { StatesAndTheStreamLesson } from './lessons/states-and-the-stream';
import { NullsAndTheSafetyLesson } from './lessons/nulls-and-the-safety';
import { PacksAndThePubLesson } from './lessons/packs-and-the-pub';
import { TheDartReleaseLesson } from './lessons/the-dart-release';

export const dartHub: Hub = {
  slug: 'dart',
  name: 'Dart',
  icon: '🎯',
  tagline: {
    en: 'Client-optimized language for fast apps on any platform: Sound null safety, asynchronous event loops, reactive streams, and ahead-of-time native compilation.',
    bn: 'যেকোনো প্ল্যাটফর্মে দ্রুতগতির অ্যাপের জন্য ক্লায়েন্ট-অপটিমাইজড ভাষা: সাউন্ড নাল সেফটি, অ্যাসিনক্রোনাস ইভেন্ট লুপ, রিঅ্যাক্টিভ স্ট্রিম এবং নেটিভ AOT কম্পাইলেশন।'
  },
  intro: {
    en: 'Master Dart from core syntax to production reactive architectures powering Flutter and high-performance cross-platform applications. Explore sound null safety, strong static type inference, asynchronous concurrency via single-threaded event loops, Isolates with message passing, reactive Stream controllers, declarative widget composition foundations, package dependency management via Pub, and modern Dart 3 pattern matching and records.',
    bn: 'Flutter এবং ক্রস-প্ল্যাটফর্ম অ্যাপের ইঞ্জিন Dart-এর মৌলিক ভিত্তি থেকে শুরু করে আধুনিক রিঅ্যাক্টিভ আর্কিটেকচার পর্যন্ত সম্পূর্ণ আয়ত্ত করুন। সাউন্ড নাল সেফটি, স্ট্রং স্ট্যাটিক টাইপ ইনফারেন্স, সিঙ্গেল-থ্রেডেড ইভেন্ট লুপ, মেসেজ পাসিং সহ Isolate, রিঅ্যাক্টিভ Stream কন্ট্রোলার, ডিক্লেয়ারেটিভ উইজেট কম্পোজিশন, Pub দিয়ে প্যাকেজ ম্যানেজমেন্ট এবং Dart ৩-এর প্যাটার্ন ম্যাচিং ও রেকর্ডস আয়ত্ত করুন।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Foundations, Type System & Asynchronous Core',
        bn: 'ধাপ ১ — ভাষার ভিত্তি, টাইপ সিস্টেম এবং অ্যাসিনক্রোনাস কোর'
      },
      items: [
        {
          en: 'Dart Fundamentals & Architecture: JIT development with hot reload versus AOT production compilation (lesson 1)',
          bn: 'Dart মৌলিক ভিত্তি ও আর্কিটেকচার: হট রিলোড সহ JIT ডেভেলপমেন্ট বনাম AOT প্রোডাকশন কম্পাইলেশন (পাঠ ১)'
        },
        {
          en: 'Static Types, Final vs Const & Records: Compile-time immutability, type inference, and Dart 3 records (lesson 2)',
          bn: 'স্ট্যাটিক টাইপস, Final বনাম Const এবং রেকর্ডস: কম্পাইল-টাইম ইমিউটেবিলিটি, টাইপ ইনফারেন্স এবং Dart ৩ রেকর্ডস (পাঠ ২)'
        },
        {
          en: 'Functions, Futures & Event Loops: Microtask queues, event queues, and async/await cooperative suspension (lesson 3)',
          bn: 'ফাংশন, ফিউচার এবং ইভেন্ট লুপ: মাইক্রোটাস্ক কিউ, ইভেন্ট কিউ এবং async/await কো-অপারেটিভ সাসপেনশন (পাঠ ৩)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Reactive Streams, UI Architecture & Sound Null Safety',
        bn: 'ধাপ ২ — রিঅ্যাক্টিভ স্ট্রিম, ইউআই আর্কিটেকচার এবং সাউন্ড নাল সেফটি'
      },
      items: [
        {
          en: 'Declarative Composition & Build Context: Immutable widget tree foundations and reconciliation (lesson 4)',
          bn: 'ডিক্লেয়ারেটিভ কম্পোজিশন এবং বিল্ড কনটেক্সট: অপরিবর্তনীয় উইজেট ট্রি ভিত্তি এবং রিকনসিলিয়েশন (পাঠ ৪)'
        },
        {
          en: 'Reactive Streams & StreamControllers: Single-subscription vs broadcast streams and backpressure (lesson 5)',
          bn: 'রিঅ্যাক্টিভ স্ট্রিম এবং StreamControllers: সিঙ্গেল বনাম ব্রডকাস্ট স্ট্রিম এবং ব্যাকপ্রেশার নিয়ন্ত্রণ (পাঠ ৫)'
        },
        {
          en: 'Sound Null Safety & Flow Analysis: Type promotion, late initialization, and elimination of null pointer bugs (lesson 6)',
          bn: 'সাউন্ড নাল সেফটি এবং ফ্লো অ্যানালিসিস: টাইপ প্রমোশন, লেট ইনিশিয়ালাইজেশন এবং নাল পয়েন্টার নির্মূলকরণ (পাঠ ৬)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Ecosystem, Packages & Production Release',
        bn: 'ধাপ ৩ — ইকোসিস্টেম, প্যাকেজ এবং প্রোডাকশন রিলিজ'
      },
      items: [
        {
          en: 'Package Management via Pub: Pubspec dependencies, semantic versioning, and build runner code generation (lesson 7)',
          bn: 'Pub দিয়ে প্যাকেজ ম্যানেজমেন্ট: Pubspec ডিপেন্ডেন্সি, সিম্যান্টিক ভার্সনিং এবং বিল্ড রানার কোড জেনারেশন (পাঠ ৭)'
        },
        {
          en: 'The Dart 3 Production Pipeline: Ahead-of-Time compilation, Isolates multithreading, and WebAssembly output (lesson 8)',
          bn: 'Dart ৩ প্রোডাকশন পাইপলাইন: Ahead-of-Time কম্পাইলেশন, Isolate মাল্টিথ্রেডিং এবং WebAssembly আউটপুট (পাঠ ৮)'
        }
      ]
    }
  ],
  projects: [
    {
      title: {
        en: 'Financial State Machine with Records & Pattern Matching',
        bn: 'রেকর্ডস এবং প্যাটার্ন ম্যাচিং সহ আর্থিক স্টেট মেশিন'
      },
      brief: {
        en: 'Production ledger engine leveraging Dart 3 records, exhaustive switch statements, and sound null safety to audit transactions.',
        bn: 'Dart ৩ রেকর্ডস, পূর্ণাঙ্গ সুইচ স্টেটমেন্ট এবং সাউন্ড নাল সেফটি দিয়ে লেনদেন অডিটের প্রোডাকশন লেজার ইঞ্জিন।'
      }
    },
    {
      title: {
        en: 'Event-Driven Broadcast Stream Bus',
        bn: 'ইভেন্ট-ড্রিভেন ব্রডকাস্ট স্ট্রিম বাস'
      },
      brief: {
        en: 'High-throughput publish-subscribe reactive event bus built with broadcast StreamControllers, transforming streams with debounce and map.',
        bn: 'ব্রডকাস্ট StreamController দিয়ে নির্মিত উচ্চ-গতির রিঅ্যাক্টিভ ইভেন্ট বাস যা স্ট্রিমকে ডিবউন্স ও ম্যাপ দিয়ে ফিল্টার করে।'
      }
    },
    {
      title: {
        en: 'Declarative Config Builder with Const Constructors',
        bn: 'কনস্ট কনস্ট্রাক্টর সহ ডিক্লেয়ারেটিভ কনফিগ বিল্ডার'
      },
      brief: {
        en: 'Type-safe configuration engine utilizing compile-time const constructors and immutable records for zero-allocation performance.',
        bn: 'শূন্য-বরাদ্দ পারফরম্যান্সের জন্য কম্পাইল-টাইম const কনস্ট্রাক্টর এবং ইমিউটেবল রেকর্ডস চালিত টাইপ-সেফ কনফিগারেশন ইঞ্জিন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Default to const constructors for widgets and configuration models to allow the compiler to canonicalize instances in memory.',
      bn: 'উইজেট এবং কনফিগারের জন্য ডিফল্টভাবে const কনস্ট্রাক্টর ব্যবহার করুন যাতে কম্পাইলার মেমোরিতে একই অবজেক্ট বারবার তৈরি না করে।'
    },
    {
      en: 'Leverage Dart 3 Records and Pattern Matching for multiple return values instead of declaring bloated data holder classes.',
      bn: 'একাধিক মান ফেরত দিতে ভারী ক্লাস ঘোষণার বদলে আধুনিক Dart ৩ রেকর্ডস এবং প্যাটার্ন ম্যাচিং ব্যবহার করুন।'
    },
    {
      en: 'Never execute heavy CPU-bound computations on the main event loop; dispatch intensive tasks onto background Isolates.',
      bn: 'মেইন ইভেন্ট লুপে কখনোই ভারী সিপিইউ গণনা চালাবেন না; দীর্ঘ কাজগুলো ব্যাকগ্রাউন্ড Isolate-এ পাঠান।'
    },
    {
      en: 'Always close StreamControllers and cancel StreamSubscriptions in lifecycle teardown methods to prevent memory leaks.',
      bn: 'মেমোরি লিক রোধ করতে লাইফসাইকেলের সমাপ্তি মেথডে অবশ্যই StreamController বন্ধ করুন এবং সাবস্ক্রিপশন বাতিল করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the architectural distinction between JIT (Just-In-Time) and AOT (Ahead-Of-Time) compilation in Dart?',
        bn: 'Dart-এ JIT (জাস্ট-ইন-টাইম) এবং AOT (অ্যাহেড-অফ-টাইম) কম্পাইলেশনের মধ্যে স্থাপত্যিক পার্থক্য কী?'
      },
      a: {
        en: 'JIT compilation compiles code during development inside the Dart VM, powering sub-second Hot Reload by injecting modified code into running memory. AOT compilation compiles source code directly into native ARM or x64 machine code ahead of time, optimizing production release binaries for instant startup and peak frame-rate execution without VM overhead.',
        bn: 'JIT কম্পাইলেশন ডেভেলপমেন্টের সময় Dart VM-এর ভেতর কোড চালায় এবং মেমোরিতে সরাসরি কোড ঢুকিয়ে সেকেন্ডের ভগ্নাংশে হট রিলোড সুবিধা দেয়। আর AOT কম্পাইলেশন রিলিজের আগে সোর্স কোডকে সরাসরি নেটিভ ARM বা x64 মেশিন কোডে রূপান্তর করে, ফলে কোনো VM ওভারহেড ছাড়াই অ্যাপ অবিলম্বে চালু হয় এবং মসৃণ ৬০/১২০ ফ্রেমরেট দেয়।'
      }
    },
    {
      q: {
        en: 'How does Dart\'s single-threaded event loop coordinate the Microtask Queue and the Event Queue?',
        bn: 'Dart-এর সিঙ্গেল-থ্রেডেড ইভেন্ট লুপ কীভাবে মাইক্রোটাস্ক কিউ এবং ইভেন্ট কিউ সমন্বয় করে?'
      },
      a: {
        en: 'Dart executes code on a single thread driven by an event loop with 2 distinct queues. The Microtask Queue holds internal high-priority tasks (e.g. scheduleMicrotask). The Event Queue handles external events (I/O, timer ticks, user taps). The event loop strictly prioritizes the Microtask Queue: it empties all microtasks before picking the next event from the Event Queue.',
        bn: 'Dart একটি সিঙ্গেল থ্রেডে ২ টি কিউ বিশিষ্ট ইভেন্ট লুপ দিয়ে চলে। মাইক্রোটাস্ক কিউতে অভ্যন্তরীণ জরুরি কাজ থাকে (যেমন scheduleMicrotask)। আর ইভেন্ট কিউতে বাইরের ইভেন্ট থাকে (আই/ও, টাইমার, ব্যবহারকারীর স্পর্শ)। ইভেন্ট লুপ সর্বদা মাইক্রোটাস্ক কিউকে সর্বোচ্চ অগ্রাধিকার দেয়: মাইক্রোটাস্ক কিউ সম্পূর্ণ খালি না হওয়া পর্যন্ত এটি ইভেন্ট কিউ থেকে কোনো কাজ নেয় না।'
      }
    },
    {
      q: {
        en: 'What does "Sound Null Safety" guarantee in Dart compared to languages with unsound null checking?',
        bn: 'অনিরাপদ নাল চেকিংযুক্ত ভাষার তুলনায় Dart-এর "সাউন্ড নাল সেফটি" কোন নিশ্চয়তা প্রদান করে?'
      },
      a: {
        en: 'Sound null safety guarantees that if an expression has a non-nullable type (e.g. int), it can never evaluate to null under any circumstances at runtime. The compiler verifies this contract mathematically, enabling ahead-of-time optimizations that strip redundant defensive null checks from native machine instructions.',
        bn: 'সাউন্ড নাল সেফটি নিশ্চয়তা দেয় যে কোনো এক্সপ্রেশন যদি নন-নালেবল টাইপ (যেমন int) হয়, তবে রানটাইমে কোনো অবস্থাতেই তা নাল হতে পারবে না। কম্পাইলার গাণিতিকভাবে এটি প্রমাণ করে, যা রানটাইম থেকে সমস্ত অপ্রয়োজনীয় নাল পরীক্ষা মুছে ফেলে নেটিভ মেশিন কোডের আকার ছোট ও দ্রুতগতির করে।'
      }
    },
    {
      q: {
        en: 'How do Dart Isolates differ fundamentally from traditional OS threads in Java or C++?',
        bn: 'Java বা C++-এর প্রচলিত ওএস থ্রেডের তুলনায় Dart Isolate কীভাবে মৌলিকভাবে আলাদা?'
      },
      a: {
        en: 'Unlike OS threads that share mutable memory and require mutex locks, each Dart Isolate possesses its own completely isolated memory heap and dedicated event loop. Isolates share zero state; they communicate strictly by passing immutable messages over two-way Ports, mathematically eradicating race conditions and deadlocks.',
        bn: 'শেয়ার্ড মেমোরি ও মিউটেক্স লকযুক্ত ওএস থ্রেডের মতো না হয়ে প্রতিটি Dart Isolate নিজস্ব সম্পূর্ণ স্বাধীন মেমোরি হিপ এবং পৃথক ইভেন্ট লুপ নিয়ে চলে। Isolate কোনো স্টেট শেয়ার করে না; তারা কেবল পোর্টের মাধ্যমে অপরিবর্তনীয় বার্তা আদান-প্রদান করে, যা ডেটা রেস এবং ডেডলকের ঝুঁকি সম্পূর্ণ নির্মূল করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Google Pay mobile rewrite: migrated across 3 global regions to a unified Dart and Flutter codebase, reducing engineering overhead by 50 percent.',
      bn: 'গুগল পে মোবাইল পুনর্নির্মাণ: ৩ টি বৈশ্বিক অঞ্চলে একক Dart ও Flutter কোডবেসে স্থানান্তরিত হয়ে ইঞ্জিনিয়ারিং খরচ ৫০ শতাংশ কমিয়েছে।'
    },
    {
      en: 'BMW My BMW application: unified connected-car telemetry, digital key management, and UI across iOS and Android with a 100 percent Dart architecture.',
      bn: 'বিএমডাব্লিউ My BMW অ্যাপ্লিকেশন: ১০০ শতাংশ Dart আর্কিটেকচার দিয়ে iOS এবং অ্যান্ড্রয়েডে গাড়ির টেলিমেট্রি ও ডিজিটাল কি ব্যবস্থাপনা একীভূত করেছে।'
    },
    {
      en: 'Alibaba Xianyu platform: scaled to over 50 million active users using custom Dart AOT rendering pipelines and isolate-based image decoders.',
      bn: 'আলিবাবা শিয়ানইউ প্ল্যাটফর্ম: কাস্টম Dart AOT রেন্ডারিং এবং আইসোলেট ডিকোডার দিয়ে ৫ কোটিরও বেশি সক্রিয় ব্যবহারকারীর জন্য স্কেল করেছে।'
    }
  ],
  lessons: [
    DartsAndTheFlightLesson,
    TypesAndTheVarLesson,
    FuncsAndTheFutureLesson,
    WidgetsAndTheBuildLesson,
    StatesAndTheStreamLesson,
    NullsAndTheSafetyLesson,
    PacksAndThePubLesson,
    TheDartReleaseLesson
  ]
};
