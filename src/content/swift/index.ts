import type { Hub } from '../../lib/types';
import { OptionalsAndTheGuardLesson } from './lessons/optionals-and-the-guard';
import { StructsAndTheClassLesson } from './lessons/structs-and-the-class';
import { ClosuresAndTheCaptureLesson } from './lessons/closures-and-the-capture';
import { ProtocolsAndTheExtensionLesson } from './lessons/protocols-and-the-extension';
import { EnumsAndTheSwitchLesson } from './lessons/enums-and-the-switch';
import { AsyncsAndTheActorLesson } from './lessons/asyncs-and-the-actor';
import { GenericsAndTheWrapperLesson } from './lessons/generics-and-the-wrapper';
import { TheSwiftReleaseLesson } from './lessons/the-swift-release';

export const swiftHub: Hub = {
  slug: 'swift',
  name: 'Swift',
  icon: '🕊️',
  tagline: {
    en: 'Master modern Swift for iOS, macOS, and server-side engineering with value semantics, protocol-oriented architecture, and actor concurrency.',
    bn: 'ভ্যালু সেমান্টিকস, প্রটোকল-ওরিয়েন্টেড আর্কিটেকচার এবং অ্যাক্টর কনকারেন্সি সহ iOS, macOS ও সার্ভার-সাইড ইঞ্জিনিয়ারিংয়ের জন্য আধুনিক Swift আয়ত্ত করুন।'
  },
  intro: {
    en: 'Swift combines the high performance and low-level control of compiled C-family languages with the expressive elegance of modern scripting syntaxes. Engineered from the ground up for safety, Swift eliminates entire classes of runtime defects through strong static typing, native nil-safety optionals, and compile-time data race elimination. From value types with copy-on-write memory efficiency through protocol extensions, powerful algebraic enums, and structured async/await concurrency with actor isolation, this comprehensive syllabus prepares engineers to architect resilient, scalable Apple platform and server-side applications.',
    bn: 'কম্পাইল্ড সি-পরিবারের ভাষার উচ্চ কার্যক্ষমতা ও গভীর নিয়ন্ত্রণের সাথে আধুনিক স্ক্রিপ্টিং ভাষার চমৎকার প্রকাশভঙ্গির মেলবন্ধন ঘটায় Swift। নিরাপত্তার কথা মাথায় রেখে তৈরি Swift কঠোর স্ট্যাটিক টাইপিং, নেটিভ নিল-সেফটি অপশনাল এবং কম্পাইল-টাইম ডেটা রেস মুক্ত করে রানটাইম ক্র্যাশ সম্পূর্ণ বন্ধ করে। কপি-অন-রাইট মেমোরি দক্ষতাসম্পন্ন ভ্যালু টাইপ থেকে শুরু করে প্রটোকল এক্সটেনশন, অ্যালজেব্রাইক এনাম এবং অ্যাক্টর আইসোলেশন সহ স্ট্রাকচার্ড অ্যাসিঙ্ক/অ্যাওয়েট কনকারেন্সির এই পূর্ণাঙ্গ সিলেবাস ইঞ্জিনিয়ারদের অ্যাপল প্ল্যাটফর্ম ও সার্ভার-সাইডে শক্তিশালী অ্যাপ্লিকেশন তৈরিতে দক্ষ করে তুলবে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1: Swift Foundations & Memory Architecture',
        bn: 'ধাপ ১: Swift-এর মূল ভিত্তি এবং মেমোরি আর্কিটেকচার'
      },
      items: [
        {
          en: 'Eliminate null pointer exceptions using Optionals, nil coalescing (??), and guard let early-return guard clauses.',
          bn: 'অপশনাল, নিল কোয়ালেসিং (??) এবং guard let আর্লি-রিটার্ন গার্ড ক্লজ ব্যবহার করে নাল পয়েন্টার এক্সেপশন দূর করা।'
        },
        {
          en: 'Contrast stack-allocated value types (structs, copy-on-write) against heap-allocated reference types (classes, ARC reference counting).',
          bn: 'স্ট্যাকের ভ্যালু টাইপ (স্ট্রাক্ট, কপি-অন-রাইট) বনাম হিপের রেফারেন্স টাইপের (ক্লাস, ARC রেফারেন্স কাউন্টিং) তুলনা।'
        },
        {
          en: 'Master closure capture semantics, escape lifetimes (@escaping), and eliminate memory retain cycles using [weak self].',
          bn: 'ক্লোজার ক্যাপচার সেমান্টিকস, এস্কেপিং লাইফটাইম (@escaping) এবং [weak self] দিয়ে মেমোরি রিটেইন সাইকেল প্রতিরোধ।'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2: Abstraction, Pattern Matching & Concurrency',
        bn: 'ধাপ ২: বিমূর্ততা, প্যাটার্ন ম্যাচিং এবং কনকারেন্সি'
      },
      items: [
        {
          en: 'Implement Protocol-Oriented Programming with default implementations, opaque return types (some), and existential containers (any).',
          bn: 'ডিফল্ট ইমপ্লিমেন্টেশন, ওপেক রিটার্ন টাইপ (some) এবং এক্সিসটেনশিয়াল কনটেইনার (any) সহ প্রটোকল-ভিত্তিক প্রোগ্রামিং।'
        },
        {
          en: 'Design payload-bearing algebraic enums with associated values, exhaustive switch pattern matching, and Result types.',
          bn: 'অ্যাসোসিয়েটেড ভ্যালু সহ অ্যালজেব্রাইক এনাম, পূর্ণাঙ্গ সুইচ প্যাটার্ন ম্যাচিং এবং Result টাইপ তৈরি।'
        },
        {
          en: 'Build data-race safe concurrent workflows using async/await, TaskGroups, and actor isolation with @MainActor UI synchronization.',
          bn: 'async/await, TaskGroups এবং @MainActor ইউআই সিঙ্ক সহ অ্যাক্টর আইসোলেশন দিয়ে ডেটা-রেস নিরাপদ কনকারেন্সি তৈরি।'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3: Generics, Architecture & Enterprise Delivery',
        bn: 'ধাপ ৩: জেনেরিকস, আর্কিটেকচার এবং এন্টারপ্রাইজ ডেলিভারি'
      },
      items: [
        {
          en: 'Build flexible, reusable abstractions using Generics, Associated Types in protocols, and reactive Property Wrappers.',
          bn: 'জেনেরিকস, প্রটোকলের অ্যাসোসিয়েটেড টাইপস এবং রিঅ্যাক্টিভ প্রোপার্টি র‍্যাপার দিয়ে নমনীয় বিমূর্ততা তৈরি।'
        },
        {
          en: 'Structure modular applications with Swift Package Manager (SPM), configure release optimizations (-O, WMO), and execute XCTest suites.',
          bn: 'Swift Package Manager (SPM) দিয়ে মডুলার অ্যাপ গঠন, -O ও WMO রিলিজ অপটিমাইজেশন এবং XCTest চালানো।'
        }
      ]
    }
  ],
  lessons: [
    OptionalsAndTheGuardLesson,
    StructsAndTheClassLesson,
    ClosuresAndTheCaptureLesson,
    ProtocolsAndTheExtensionLesson,
    EnumsAndTheSwitchLesson,
    AsyncsAndTheActorLesson,
    GenericsAndTheWrapperLesson,
    TheSwiftReleaseLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Real-Time Stock Portfolio Tracker (iOS & macOS)',
        bn: 'রিয়েল-টাইম স্টক পোর্টফোলিও ট্র্যাকার (iOS ও macOS)'
      },
      brief: {
        en: 'Construct an offline-first financial dashboard utilizing Swift structured concurrency, actor-isolated web socket streaming, and swift-collections.',
        bn: 'Swift স্ট্রাকচার্ড কনকারেন্সি, অ্যাক্টর-আইসোলেটেড ওয়েব সকেট স্ট্রিমিং এবং swift-collections ব্যবহার করে একটি অফলাইন-ফার্স্ট ফিন্যান্সিয়াল ড্যাশবোর্ড তৈরি করুন।'
      }
    },
    {
      title: {
        en: 'Server-Side Microservice with Vapor & Async/Await',
        bn: 'Vapor এবং Async/Await দিয়ে সার্ভার-সাইড মাইক্রোসার্ভিস'
      },
      brief: {
        en: 'Architect a resilient REST microservice in Swift using Vapor, Fluent ORM connection pooling, and JWT authentication middleware.',
        bn: 'Vapor, Fluent ORM কানেকশন পুলিং এবং JWT অথেনটিকেশন মিডলওয়্যার ব্যবহার করে Swift-এ একটি টেকসই REST মাইক্রোসার্ভিস তৈরি করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Default to structs (value types) for data models and domain entities to prevent unintended shared state mutations.',
      bn: 'ডেটা মডেল এবং এন্টিটির জন্য ডিফল্টভাবে স্ট্রাক্ট (ভ্যালু টাইপ) ব্যবহার করুন যাতে অনিচ্ছাকৃত শেয়ার্ড মিউটেশন এড়ানো যায়।'
    },
    {
      en: 'Use guard let early exits to validate optional bindings and function preconditions, eliminating deeply nested pyramid-of-doom conditionals.',
      bn: 'ফাংশনের শর্ত এবং অপশনাল যাচাই করতে guard let আর্লি এক্সিট ব্যবহার করুন, যা গভীর নেস্টেড পিরামিড এড়িয়ে কোড পরিষ্কার রাখে।'
    },
    {
      en: 'Always specify [weak self] or [unowned self] in asynchronous closures that reference self to prevent memory leaks and ARC retain cycles.',
      bn: 'মেমোরি লিক এবং ARC রিটেইন সাইকেল প্রতিরোধ করতে self নির্দেশকারী অ্যাসিঙ্ক্রোনাস ক্লোজারে সর্বদা [weak self] বা [unowned self] ব্যবহার করুন।'
    },
    {
      en: 'Isolate shared mutable state inside an actor to guarantee compile-time data race protection across concurrent tasks.',
      bn: 'কনকারেন্ট কাজের মাঝে কম্পাইল-টাইম ডেটা রেস নিরাপত্তা নিশ্চিত করতে শেয়ার্ড মিউটেবল স্টেটকে একটি অ্যাক্টরের ভেতরে আইসোলেট করুন।'
    },
    {
      en: 'Prefer Protocol-Oriented Programming (POP) and composition with protocol extensions over rigid class inheritance hierarchies.',
      bn: 'অনমনীয় ক্লাস ইনহেরিটেন্সের বদলে প্রটোকল এক্সটেনশন এবং প্রটোকল-ওরিয়েন্টেড প্রোগ্রামিং (POP) কম্পোজিশনকে অগ্রাধিকার দিন।'
    },
    {
      en: 'Favor opaque return types (some Protocol) over existential containers (any Protocol) to enable static compiler dispatch and avoid boxing overhead.',
      bn: 'বক্সিং ওভারহেড এড়াতে এবং কম্পাইলারের স্ট্যাটিক ডিসপ্যাচ সুবিধা পেতে existential কন্টেইনারের (any) বদলে ওপেক রিটার্ন টাইপ (some) ব্যবহার করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the fundamental difference between Value Types (structs) and Reference Types (classes) in Swift memory allocation?',
        bn: 'Swift মেমোরি বরাদ্দে ভ্যালু টাইপ (স্ট্রাক্ট) এবং রেফারেন্স টাইপের (ক্লাস) মধ্যে মৌলিক পার্থক্য কী?'
      },
      a: {
        en: 'Value types (structs, enums, tuples) are stored directly on the stack and copied bitwise on assignment, ensuring each instance owns independent memory. Reference types (classes, actors) allocate storage on the heap and pass pointers on assignment, sharing mutable state across callers managed by ARC.',
        bn: 'ভ্যালু টাইপ (স্ট্রাক্ট, এনাম) সরাসরি স্ট্যাকের ওপর সংরক্ষিত হয় এবং অ্যাসাইনমেন্টের সময় নতুন কপি তৈরি হয়, ফলে প্রতিটি অবজেক্ট স্বাধীন থাকে। রেফারেন্স টাইপ (ক্লাস) হিপ মেমোরিতে জায়গা বরাদ্দ করে এবং অ্যাসাইনমেন্টের সময় পয়েন্টার পাস করে, যার ফলে একাধিক জায়গা থেকে একই মিউটেবল ডেটা শেয়ার হয়।'
      }
    },
    {
      q: {
        en: 'What is Copy-on-Write (COW) in Swift standard collections, and how does it balance performance with value semantics?',
        bn: 'Swift স্ট্যান্ডার্ড কালেকশনে কপি-অন-রাইট (COW) কী, এবং কীভাবে এটি পারফরম্যান্স ও ভ্যালু সেমান্টিকসের ভারসাম্য বজায় রাখে?'
      },
      a: {
        en: 'Copy-on-Write optimizes collections like Array and Dictionary. When assigned or passed, the underlying buffer pointer is shared without duplicating memory. A physical deep copy is delayed until one instance actually mutates the collection, providing value safety without premature heap allocation cost.',
        bn: 'কপি-অন-রাইট Array এবং Dictionary কালেকশনগুলোকে অপটিমাইজ করে। অ্যাসাইন করার সময় মেমোরি কপি না করে অভ্যন্তরীণ বাফার শেয়ার করা হয়। যতক্ষণ না কোনো একটি অবজেক্ট ডেটা পরিবর্তন (mutate) করতে যায়, ততক্ষণ আসল কপি তৈরি স্থগিত থাকে, যা মেমোরি বাঁচিয়ে শতভাগ ভ্যালু সেমান্টিকস দেয়।'
      }
    },
    {
      q: {
        en: 'How does Automatic Reference Counting (ARC) differ from a Tracing Garbage Collector, and how do weak references prevent retain cycles?',
        bn: 'অটোমেটিক রেফারেন্স কাউন্টিং (ARC) কীভাবে ট্রেসিং গার্বেজ কালেক্টর থেকে আলাদা, এবং কীভাবে weak রেফারেন্স রিটেইন সাইকেল রোধ করে?'
      },
      a: {
        en: 'ARC increments retain counts on assignment and decrements on scope exit deterministically at compile time, executing deinit immediately when references hit zero with 0 stop-the-world pauses. A weak reference does not increment retain count and automatically zeros to nil when the referenced instance is freed, breaking cyclical memory leaks.',
        bn: 'ARC কম্পাইল-টাইমেই অ্যাসাইনমেন্টে রেফারেন্স সংখ্যা বাড়ায় এবং স্কোপ শেষে কমায়; রেফারেন্স শূন্য হওয়া মাত্র কোনো রানটাইম পজ ছাড়াই সঙ্গে সঙ্গে deinit চালায়। আর weak রেফারেন্স কোনো রেফারেন্স কাউন্ট বাড়ায় না এবং অবজেক্ট মুছে গেলে নিজে থেকেই nil হয়ে যায়, যা চক্রাকার মেমোরি লিক চিরতরে ভেঙে দেয়।'
      }
    },
    {
      q: {
        en: 'Contrast "some Protocol" (opaque return types) with "any Protocol" (existentials) regarding memory layout and compiler dispatch.',
        bn: 'মেমোরি লেআউট এবং কম্পাইলার ডিসপ্যাচের দিক থেকে "some Protocol" (ওপেক টাইপ) বনাম "any Protocol" (এক্সিসটেনশিয়াল)-এর পার্থক্য কী?'
      },
      a: {
        en: '"some Protocol" fixes 1 underlying concrete type at compile-time while hiding it from the caller, enabling direct static dispatch and inlining with zero box overhead. "any Protocol" creates a dynamic existential box containing a 3-word value buffer and dynamic method witness table, which incurs runtime heap allocation and indirect pointer dispatch.',
        bn: '"some Protocol" কম্পাইল-টাইমে ঠিক ১ টি সুনির্দিষ্ট কংক্রিট টাইপ স্থির রাখে কিন্তু কলারের কাছে নাম গোপন করে, ফলে শূন্য মেমোরি খরচে সরাসরি স্ট্যাটিক ডিসপ্যাচ পাওয়া যায়। অপরদিকে "any Protocol" একটি ডায়নামিক ৩-শব্দের বাফার ও মেথড টেবিল বক্স তৈরি করে, যা হিপ মেমোরি খরচ এবং ধীরগতির ইনডাইরেক্ট ডিসপ্যাচ তৈরি করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Airbnb iOS app architecture: reduced app launch times by 40 percent through modular Swift Package Manager compilation and struct-based state.',
      bn: 'এয়ারবিএনবি iOS অ্যাপ আর্কিটেকচার: মডুলার Swift Package Manager কম্পাইলেশন এবং স্ট্রাক্ট-ভিত্তিক স্টেটের মাধ্যমে অ্যাপ শুরুর সময় ৪০ শতাংশ কমিয়েছে।'
    },
    {
      en: 'Uber Rider app rewrite: adopted protocol-oriented architecture and reactive Swift patterns to support 100 or more concurrent engineering teams.',
      bn: 'উবার রাইডার অ্যাপ পুনর্নির্মাণ: ১০০ বা তার বেশি সমান্তরাল ইঞ্জিনিয়ারিং টিমকে সহায়তা করতে প্রটোকল-ওরিয়েন্টেড আর্কিটেকচার এবং রিঅ্যাক্টিভ Swift প্যাটার্ন গ্রহণ করেছে।'
    },
    {
      en: 'Apple Maps vector rendering engine: optimized memory footprint using copy-on-write value semantics and thread-safe actor pipelines.',
      bn: 'অ্যাপল ম্যাপস ভেক্টর রেন্ডারিং ইঞ্জিন: কপি-অন-রাইট ভ্যালু সেমান্টিকস এবং থ্রেড-সেফ অ্যাক্টর পাইপলাইন ব্যবহার করে মেমোরি ব্যবহার অপটিমাইজ করেছে।'
    },
    {
      en: 'IBM server-side Swift adoption: achieved 200000 requests per second with sub-5 millisecond response times on cloud container instances.',
      bn: 'আইবিএম সার্ভার-সাইড Swift গ্রহণ: ক্লাউড কন্টেইনারে ৫ মিলিসেকেন্ডের কম রেসপন্স টাইম সহ প্রতি সেকেন্ডে 200000 রিকোয়েস্ট পরিচালনা করেছে।'
    }
  ]
};
