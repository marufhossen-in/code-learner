import type { Hub } from '../../lib/types';
import { RubyAndTheObjectLesson } from './lessons/ruby-and-the-object';
import { BlocksAndTheYieldLesson } from './lessons/blocks-and-the-yield';
import { ModulesAndTheMixinLesson } from './lessons/modules-and-the-mixin';
import { StringsAndTheSymbolLesson } from './lessons/strings-and-the-symbol';
import { ArraysAndTheHashLesson } from './lessons/arrays-and-the-hash';
import { GemsAndTheBundleLesson } from './lessons/gems-and-the-bundle';
import { RailsAndTheRouteLesson } from './lessons/rails-and-the-route';
import { TheGemServeLesson } from './lessons/the-gem-serve';

export const rubyHub: Hub = {
  slug: 'ruby',
  name: 'Ruby',
  icon: '💎',
  tagline: {
    en: 'Master modern Ruby: from object-oriented pure messaging and block closures to metaprogramming, Rails MVC, YJIT performance, and zero-downtime deployment.',
    bn: 'আধুনিক Ruby আয়ত্ত করুন: পিওর অবজেক্ট মেসেজিং এবং ব্লক ক্লোজার থেকে মেটাপ্রোগ্রামিং, Rails MVC, YJIT পারফরম্যান্স এবং জিরো-ডাউনটাইম ডিপ্লয়মেন্ট পর্যন্ত।'
  },
  intro: {
    en: 'Ruby is an elegant, dynamic, purely object-oriented language designed for developer happiness and productive web applications. In Ruby, every value—from integers and booleans to classes themselves—is an object communicating through message passing. This hub guides you through 8 comprehensive lessons: pure object foundations, block closures and Enumerable pipelines, module composition and mixin hierarchies, strings versus immutable symbols, advanced array and hash data structures, Bundler dependency management, Ruby on Rails web architecture, and production deployment with Puma, YJIT, RSpec, and Kamal.',
    bn: 'Ruby হলো একটি মার্জিত, ডাইনামিক এবং সম্পূর্ণ অবজেক্ট-ওরিয়েন্টেড ভাষা যা প্রোগ্রামারের আনন্দ ও দ্রুত ওয়েব সিস্টেম তৈরির জন্য ডিজাইন করা হয়েছে। Ruby-তে পূর্ণসংখ্যা এবং বুলিয়ান থেকে শুরু করে ক্লাস পর্যন্ত প্রতিটি মানই একটি অবজেক্ট, যা মেসেজ প্রেরণের মাধ্যমে কাজ করে। এই হাবটি আপনাকে ৮ টি ধারাবাহিক পাঠে দক্ষ করে তুলবে: পিওর অবজেক্টের ভিত্তি, ব্লক ক্লোজার এবং Enumerable পাইপলাইন, মডিউল কম্পোজিশন ও মিক্সইন হায়ারার্কি, স্ট্রিং বনাম ইমিউটেবল সিম্বল, উন্নত অ্যারে ও হ্যাশ ডেটা স্ট্রাকচার, Bundler ডিপেন্ডেন্সি ম্যানেজমেন্ট, Ruby on Rails ওয়েব আর্কিটেকচার এবং Puma, YJIT, RSpec ও Kamal সহযোগে প্রোডাকশন ইঞ্জিনিয়ারিং।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Core Object Model & Closures',
        bn: 'ধাপ ১ — অবজেক্ট মডেল এবং ক্লোজার'
      },
      items: [
        {
          en: 'Lesson 1: Pure object model, dynamic message passing, class definitions, instance state, and method dispatch',
          bn: 'পাঠ ১: পিওর অবজেক্ট মডেল, ডাইনামিক মেসেজ পাসিং, ক্লাস ডিফিনিশন, ইনস্ট্যান্স স্টেট এবং মেথড ডিসপ্যাচ'
        },
        {
          en: 'Lesson 2: Blocks, the yield keyword, Proc vs Lambda semantics, and functional Enumerable pipelines',
          bn: 'পাঠ ২: ব্লক, yield কি-ওয়ার্ড, Proc বনাম Lambda পার্থক্য এবং ফাংশনাল Enumerable পাইপলাইন'
        },
        {
          en: 'Lesson 3: Modules and mixins: include, prepend, extend, namespacing, and method lookup ancestor chains',
          bn: 'পাঠ ৩: মডিউল ও মিক্সইন: include, prepend, extend, নেমস্পেসিং এবং অ্যানসেস্টর মেথড লুকআপ চেইন'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Data Structures & Ecosystem Tooling',
        bn: 'ধাপ ২ — ডেটা স্ট্রাকচার এবং ইকোসিস্টেম টুলিং'
      },
      items: [
        {
          en: 'Lesson 4: Strings vs Symbols: object identity, memory interning, freeze optimizations, and UTF-8 encoding',
          bn: 'পাঠ ৪: স্ট্রিং বনাম সিম্বল: অবজেক্ট আইডেন্টিটি, মেমোরি ইন্টার্নিং, ফ্রিজ অপটিমাইজেশন এবং UTF-8 এনকোডিং'
        },
        {
          en: 'Lesson 5: Arrays and Hashes: transformations, destructuring, Ruby 3 pattern matching, and default procs',
          bn: 'পাঠ ৫: অ্যারে ও হ্যাশ: রূপান্তর, ডিস্ট্রাকচারিং, Ruby ৩ প্যাটার্ন ম্যাচিং এবং ডিফল্ট প্রোকস'
        },
        {
          en: 'Lesson 6: Gems and Bundler: Gemfile declarative manifests, Gemfile.lock pinning, and isolated bundle exec environments',
          bn: 'পাঠ ৬: জেমস এবং Bundler: Gemfile ডিক্লেয়ারেটিভ ম্যানিফেস্ট, Gemfile.lock পিনিং এবং আইসোলেটেড bundle exec পরিবেশ'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Web Architecture & Production Engineering',
        bn: 'ধাপ ৩ — ওয়েব আর্কিটেকচার এবং প্রোডাকশন ইঞ্জিনিয়ারিং'
      },
      items: [
        {
          en: 'Lesson 7: Ruby on Rails: convention over configuration, RESTful routing, MVC pattern, and Active Record migrations',
          bn: 'পাঠ ৭: Ruby on Rails: কনভেনশন ওভার কনফিগারেশন, RESTful রাউটিং, MVC প্যাটার্ন এবং অ্যাক্টিভ রেকর্ড মাইগ্রেশন'
        },
        {
          en: 'Lesson 8: Production runtime: multi-threaded Puma, YJIT compiler optimization, RSpec test automation, and Kamal containerization',
          bn: 'পাঠ ৮: প্রোডাকশন রানটাইম: মাল্টি-থ্রেডেড Puma, YJIT কম্পাইলার অপটিমাইজেশন, RSpec টেস্ট অটোমেশন এবং Kamal কন্টেইনারাইজেশন'
        }
      ]
    }
  ],
  lessons: [
    RubyAndTheObjectLesson,
    BlocksAndTheYieldLesson,
    ModulesAndTheMixinLesson,
    StringsAndTheSymbolLesson,
    ArraysAndTheHashLesson,
    GemsAndTheBundleLesson,
    RailsAndTheRouteLesson,
    TheGemServeLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'High-Throughput Log Analytics Engine with Enumerable Streams',
        bn: 'Enumerable স্ট্রিম সহ হাই-থ্রুপুট লগ অ্যানালিটিক্স ইঞ্জিন'
      },
      brief: {
        en: 'Build a streaming CLI tool in Ruby that processes gigabyte-scale server access logs without memory exhaustion. Utilize File.open with blocks, lazy enumerators (Enumerator::Lazy), custom Enumerable modules, and regular expression pattern matching to extract HTTP status codes, aggregate error percentiles, and output JSON summaries.',
        bn: 'Ruby দিয়ে মেমোরি সংকট ছাড়াই গিগাবাইট আকারের সার্ভার অ্যাক্সেস লগ প্রসেস করার একটি স্ট্রিমিং CLI টুল তৈরি করুন। File.open ব্লক, লেজি এনিউমারেটর (Enumerator::Lazy), কাস্টম Enumerable মডিউল এবং রেগুলার এক্সপ্রেশন প্যাটার্ন ম্যাচিং ব্যবহার করে HTTP স্ট্যাটাস কোড বিশ্লেষণ, এরর পারসেন্টাইল গণনা এবং JSON রিপোর্ট প্রস্তুত করুন।'
      }
    },
    {
      title: {
        en: 'Modular Domain Engine with ActiveModel & Dynamic Mixins',
        bn: 'ActiveModel এবং ডাইনামিক মিক্সইন সহ মডুলার ডোমেন ইঞ্জিন'
      },
      brief: {
        en: 'Design an e-commerce billing domain library. Implement composition via custom modules prepended and included across order entities. Integrate ActiveModel::Validations, custom validator classes, lifecycle callbacks, and immutable money value objects to calculate taxes and discounts with zero external framework dependencies.',
        bn: 'একটি ই-কমার্স বিলিং ডোমেন লাইব্রেরি তৈরি করুন। অর্ডার এনটিটিতে কাস্টম মডিউল prepend এবং include করে কম্পোজিশন কাঠামো গড়ে তুলুন। বাহ্যিক ফ্রেমওয়ার্ক ছাড়াই ActiveModel::Validations, কাস্টম ভ্যালিডেটর ক্লাস, লাইফসাইকেল কলব্যাক এবং ইমিউটেবল মান অবজেক্ট ব্যবহার করে ট্যাক্স ও ডিসকাউন্ট নির্ভুলভাবে হিসাব করুন।'
      }
    },
    {
      title: {
        en: 'Full-Stack Rails 7+ REST API with Puma, RSpec & Kamal Deployments',
        bn: 'Puma, RSpec এবং Kamal ডিপ্লয়মেন্ট সহ ফুল-স্ট্যাক Rails ৭+ REST API'
      },
      brief: {
        en: 'Develop an enterprise RESTful API using Ruby on Rails 7. Scaffold database migrations with Active Record indexes, enforce JSON schema serializers, write exhaustive unit and request specs in RSpec, tune Puma concurrency worker threads, and deploy to bare-metal servers using Kamal container orchestration.',
        bn: 'Ruby on Rails ৭ ব্যবহার করে একটি এন্টারপ্রাইজ RESTful API তৈরি করুন। Active Record ইনডেক্স সহ ডেটাবেস মাইগ্রেশন লিখুন, JSON সিরিয়ালাইজার যোগ করুন, RSpec-এ ইউনিট ও রিকোয়েস্ট টেস্ট লিখুন, Puma মাল্টি-থ্রেডিং কনকারেন্সি টিউন করুন এবং Kamal কন্টেইনার অর্কেস্ট্রেশন দিয়ে ক্লাউড বা বেয়ার-মেটাল সার্ভারে স্বয়ংক্রিয়ভাবে ডিপ্লয় করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Prefer composition with modules and mixins over deep inheritance trees to keep method resolution paths shallow and maintainable.',
      bn: 'মেথড লুকআপ চেইন ছোট এবং পরিষ্কার রাখতে গভীর ইনহেরিট্যান্সের বদলে মডিউল ও মিক্সইন কম্পোজিশনকে অগ্রাধিকার দিন।'
    },
    {
      en: 'Use immutable Symbols (:user_id) for hash keys and message identifiers, reserving mutable Strings for arbitrary human-readable text.',
      bn: 'হ্যাশ কি এবং মেসেজ শনাক্তকারী হিসেবে ইমিউটেবল সিম্বল (:user_id) ব্যবহার করুন, আর সাধারণ টেক্সটের জন্য মিউটেবল স্ট্রিং রাখুন।'
    },
    {
      en: 'Leverage Enumerable pipelines and block yields rather than manual while/for loops to eliminate index-off-by-one errors and enable lazy evaluation.',
      bn: 'ইনডেক্সিং এরর এড়াতে এবং লেজি ক্যালকুলেশন নিশ্চিত করতে ম্যানুয়াল while/for লুপের বদলে Enumerable পাইপলাইন এবং ব্লক ইল্ড ব্যবহার করুন।'
    },
    {
      en: 'Lock every production gem version with Gemfile.lock and execute application scripts strictly under "bundle exec" to guarantee reproducible environments.',
      bn: 'Gemfile.lock দিয়ে প্রতিটি প্রোডাকশন রত্নের সঠিক সংস্করণ লক করুন এবং একরূপ পরিবেশ নিশ্চিত করতে সর্বদা "bundle exec" দিয়ে স্ক্রিপ্ট চালান।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the precise behavioral difference between a Proc and a Lambda in Ruby regarding argument count and the "return" statement?',
        bn: 'আর্গুমেন্ট সংখ্যা এবং "return" স্টেটমেন্টের ক্ষেত্রে Ruby-তে Proc এবং Lambda-র মধ্যে সুনির্দিষ্ট আচরণগত পার্থক্য কী?'
      },
      a: {
        en: 'First, argument arity: Lambdas enforce strict arity (raising an ArgumentError if wrong number of arguments are passed), whereas Procs have lenient arity (ignoring extra arguments and setting missing ones to nil). Second, return semantics: a "return" inside a Lambda exits only the lambda itself returning execution to the enclosing method; a "return" inside a Proc attempts to return immediately from the enclosing lexical scope (method), raising a LocalJumpError if the scope has already exited.',
        bn: 'প্রথমত, আর্গুমেন্ট গ্রহণ: Lambda কঠোর নিয়ম মেনে চলে (ভুল সংখ্যক আর্গুমেন্ট দিলে ArgumentError দেয়), কিন্তু Proc শিথিল নিয়ম মানে (বাড়তি আর্গুমেন্ট অগ্রাহ্য করে এবং কম থাকলে nil ধরে নেয়)। দ্বিতীয়ত, রিটার্ন আচরণ: Lambda-র ভেতরে "return" দিলে কেবল ল্যাম্বডাটি সমাপ্ত হয়ে মূল মেথডের পরবর্তী লাইন চলে; কিন্তু Proc-এর ভেতরে "return" দিলে তা মূল মেথড থেকেই সরাসরি বের হয়ে যায়, এবং মেথড আগেই শেষ হয়ে থাকলে LocalJumpError ঘটায়।'
      }
    },
    {
      q: {
        en: 'How does Ruby\'s method lookup algorithm resolve collisions when a class uses both "include" and "prepend" on modules?',
        bn: 'যখন একটি ক্লাস একই সাথে মডিউলে "include" এবং "prepend" ব্যবহার করে, তখন মেথড সংঘর্ষের ক্ষেত্রে Ruby-র মেথড লুকআপ অ্যালগরিদম কীভাবে কাজ করে?'
      },
      a: {
        en: 'Ruby searches ancestors in a linear chain (Class.ancestors). "include ModuleA" inserts ModuleA immediately after the host class in the lookup chain (HostClass -> ModuleA -> Superclass). Conversely, "prepend ModuleB" inserts ModuleB immediately before the host class (ModuleB -> HostClass -> ModuleA -> Superclass). Thus, prepended modules can intercept and override methods, optionally delegating down to the class using "super".',
        bn: 'Ruby একটি রৈখিক অ্যানসেস্টর চেইনের (Class.ancestors) মাধ্যমে মেথড খুঁজে বের করে। "include ModuleA" মডিউলটিকে মূল ক্লাসের ঠিক পরে বসায় (HostClass -> ModuleA -> Superclass)। অন্যদিকে "prepend ModuleB" মডিউলটিকে মূল ক্লাসের ঠিক আগে স্থান দেয় (ModuleB -> HostClass -> ModuleA -> Superclass)। এর ফলে prepended মডিউলগুলো মূল ক্লাসের মেথডকে ওভাররাইড করতে পারে এবং "super" ব্যবহার করে প্রয়োজনমতো মূল ক্লাসে নিয়ন্ত্রণ পাঠাতে পারে।'
      }
    },
    {
      q: {
        en: 'Why does using Symbols as dynamic hash keys for unvalidated user input create a critical memory vulnerability in older Ruby runtimes, and how did modern Ruby address this?',
        bn: 'অযাচাইকৃত ইউজার ইনপুট থেকে ডাইনামিক হ্যাশ কি হিসেবে Symbol তৈরি করা কেন পুরনো Ruby রানটাইমে মেমোরি সংকট সৃষ্টি করত, এবং আধুনিক Ruby কীভাবে এর সমাধান করেছে?'
      },
      a: {
        en: 'Historically (prior to Ruby 2.2), symbols were permanently interned into a global symbol table and were never garbage collected. An attacker sending arbitrary JSON keys could exhaust server RAM, triggering a Denial of Service (DoS) crash. Modern Ruby (2.2+) introduced Symbol Garbage Collection (mortal symbols created dynamically from strings are collected when unreferenced), but best practice still dictates using String keys or parameterized parameter filters for external user payloads.',
        bn: 'ঐতিহাসিকভাবে (Ruby ২.২ সংস্করণের পূর্বে), সিম্বলগুলো গ্লোবাল সিম্বল টেবিলে স্থায়ীভাবে যুক্ত হতো এবং কখনোই গার্বেজ কালেক্টেড হতো না। আক্রমণকারী এলোমেলো JSON কি পাঠিয়ে সার্ভারের সমস্ত র্যাম শেষ করে ডিনায়াল অফ সার্ভিস (DoS) ঘটাতে পারত। আধুনিক Ruby (২.২+) সংস্করণে সিম্বল গার্বেজ কালেকশন যুক্ত হওয়ায় অপ্রয়োজনীয় ডাইনামিক সিম্বল মুছে যায়, তবে বাইরের ইউজার ডেটার ক্ষেত্রে এখনও স্ট্রিং কি অথবা অনুমতিপ্রাপ্ত প্যারামিটার ফিল্টার ব্যবহার করাই সেরা নিয়ম।'
      }
    },
    {
      q: {
        en: 'How does Ruby 3+ YJIT (Yet Another Ruby JIT) improve CPU performance in web applications like Shopify and GitHub compared to the standard CRuby VM (YARV)?',
        bn: 'স্ট্যান্ডার্ড CRuby VM (YARV)-এর তুলনায় Ruby ৩+ YJIT (Yet Another Ruby JIT) কীভাবে Shopify এবং GitHub-এর মতো ওয়েব অ্যাপ্লিকেশনে CPU কার্যক্ষমতা বৃদ্ধি করে?'
      },
      a: {
        en: 'YJIT utilizes Basic Block Versioning (BBV) to dynamically compile hot bytecode into native x86-64 and ARM64 machine code at runtime. By specializing basic blocks based on observed runtime types, YJIT eliminates dynamic method dispatch overhead and bytecode interpretation latency, achieving 15% to 30%+ higher request throughput on production Rails workloads with minimal warmup time.',
        bn: 'YJIT মূলত বেসিক ব্লক ভার্সনিং (BBV) কৌশল ব্যবহার করে রানটাইমে বারবার চলা বাইটকোডকে সরাসরি নেটিভ x86-64 এবং ARM64 মেশিন কোডে রূপান্তর করে। রানটাইম টাইপ পর্যবেক্ষণের মাধ্যমে বিশেষায়িত কোড তৈরির ফলে এটি ডাইনামিক মেথড ডিসপ্যাচ ও ইন্টারপ্রেটেশন বিলম্ব দূর করে, যা প্রোডাকশন Rails অ্যাপ্লিকেশনে ১৫% থেকে ৩০%+ পর্যন্ত বেশি রিকোয়েস্ট হ্যান্ডলিং সক্ষমতা নিশ্চিত করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Shopify processes hundreds of thousands of e-commerce checkout transactions per second globally, leveraging custom Ruby YJIT compiler optimizations and modular Rails engines.',
      bn: 'Shopify বিশ্বব্যাপী প্রতি সেকেন্ডে শত সহস্র ই-কমার্স চেকআউট পরিচালনা করে, যেখানে কাস্টম Ruby YJIT কম্পাইলার অপটিমাইজেশন এবং মডুলার Rails ইঞ্জিন ব্যবহৃত হয়।'
    },
    {
      en: 'GitHub coordinates millions of git pushes, code reviews, and developer workflows on a mission-critical multi-threaded Ruby on Rails monolith deployed globally.',
      bn: 'GitHub বিশ্বব্যাপী কোটি কোটি গিট পুশ, কোড রিভিউ এবং ডেভেলপার ওয়ার্কফ্লো নিয়ন্ত্রণ করে তাদের নিজস্ব উচ্চগতির মাল্টি-থ্রেডেড Ruby on Rails মনোলিথের মাধ্যমে।'
    },
    {
      en: 'Basecamp and HEY power real-time collaborative email and project management using Rails 7 Hotwire (Turbo & Stimulus), drastically minimizing front-end JavaScript complexity.',
      bn: 'Basecamp এবং HEY আধুনিক Rails ৭ Hotwire (Turbo ও Stimulus) ব্যবহার করে রিয়েল-টাইম ইমেইল এবং প্রজেক্ট ম্যানেজমেন্ট পরিচালনা করে ব্রাউজার জাভাস্ক্রিপ্টের জটিলতা কমিয়ে এনেছে।'
    },
    {
      en: 'Homebrew, the universal package manager for macOS and Linux, defines formula dependencies and build scripts completely in expressive, declarative Ruby domain-specific languages (DSLs).',
      bn: 'Homebrew, যা ম্যাক ও লিনাক্সের সর্বজনীন প্যাকেজ ম্যানেজার, এর সমস্ত প্যাকেজ ডিপেন্ডেন্সি এবং বিল্ড স্ক্রিপ্ট Ruby-র ডিক্লেয়ারেটিভ ডোমেন-স্পেসিফিক ল্যাঙ্গুয়েজ (DSL) দিয়ে পরিচালনা করে।'
    }
  ]
};
