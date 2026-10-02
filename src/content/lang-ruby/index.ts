import type { Hub } from '../../lib/types';
import { YieldsAndTheBlockLesson } from './lessons/yields-and-the-block';
import { ObjectsAndTheClassLesson } from './lessons/objects-and-the-class';
import { EnumsAndTheMapLesson } from './lessons/enums-and-the-map';
import { SymbolsAndTheStringLesson } from './lessons/symbols-and-the-string';
import { MixinsAndTheModuleLesson } from './lessons/mixins-and-the-module';
import { BundlesAndTheGemLesson } from './lessons/bundles-and-the-gem';
import { MetasAndTheDefineLesson } from './lessons/metas-and-the-define';
import { TheRubyReleaseLesson } from './lessons/the-ruby-release';

export const langRubyHub: Hub = {
  slug: 'lang-ruby',
  name: 'Ruby Language Track',
  icon: '💎',
  tagline: {
    en: 'Master the Ruby language core: from blocks, yield, and dynamic metaprogramming to Enumerable pipelines, mixins, Ractors, and high-performance YJIT execution.',
    bn: 'Ruby ল্যাঙ্গুয়েজ কোর সম্পূর্ণ আয়ত্ত করুন: ব্লক, yield এবং ডাইনামিক মেটাপ্রোগ্রামিং থেকে Enumerable পাইপলাইন, মিক্সইন, Ractor এবং উচ্চগতির YJIT এক্সিকিউশন পর্যন্ত।'
  },
  intro: {
    en: 'Ruby is an extraordinarily expressive, purely object-oriented dynamic language prized for developer happiness and clean syntactic abstraction. This comprehensive language track walks you through 8 progressive lessons: block closures and execution yields, object and class construction, Enumerable algorithms and lazy pipelines, strings versus immutable interned symbols, modular mixins and ancestor dispatch, gem package dependency graphs, runtime metaprogramming with define_method and method_missing, and Ruby 3 concurrency with Fibers, Ractors, and YJIT.',
    bn: 'Ruby হলো একটি অসাধারণ মার্জিত, সম্পূর্ণ অবজেক্ট-ওরিয়েন্টেড ডাইনামিক ভাষা যা প্রোগ্রামারের আনন্দ ও পরিচ্ছন্ন সিনট্যাকটিক অ্যাবস্ট্রাকশনের জন্য বিশ্বব্যাপী সমাদৃত। এই ল্যাঙ্গুয়েজ ট্র্যাকটি আপনাকে ৮ টি ধারাবাহিক পাঠে দক্ষ করে তুলবে: ব্লক ক্লোজার ও yield এক্সিকিউশন, অবজেক্ট ও ক্লাস কাঠামো, Enumerable অ্যালগরিদম ও লেজি পাইপলাইন, স্ট্রিং বনাম ইমিউটেবল ইন্টার্নড সিম্বল, মডুলার মিক্সইন ও অ্যানসেস্টর ডিসপ্যাচ, জেম প্যাকেজ ডিপেন্ডেন্সি গ্রাফ, define_method ও method_missing দিয়ে রানটাইম মেটাপ্রোগ্রামিং এবং Fiber, Ractor ও YJIT সহযোগে Ruby ৩ কনকারেন্সি।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Blocks, Objects & Enumerable',
        bn: 'ধাপ ১ — ব্লক, অবজেক্ট এবং Enumerable'
      },
      items: [
        {
          en: 'Lesson 1: Blocks, closures, the yield keyword, and block_given? execution guards',
          bn: 'পাঠ ১: ব্লক, ক্লোজার, yield কি-ওয়ার্ড এবং block_given? এক্সিকিউশন গার্ড'
        },
        {
          en: 'Lesson 2: Objects and classes: instance variables, initialize constructor, and attr_accessor macros',
          bn: 'পাঠ ২: অবজেক্ট এবং ক্লাস: ইনস্ট্যান্স ভ্যারিয়েবল, initialize কনস্ট্রাক্টর এবং attr_accessor ম্যাক্রো'
        },
        {
          en: 'Lesson 3: Enumerable module, functional collection pipelines, and lazy streaming iterators',
          bn: 'পাঠ ৩: Enumerable মডিউল, ফাংশনাল কালেকশন পাইপলাইন এবং লেজি স্ট্রিমিং ইটারেটর'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Types, Mixins & Ecosystem Tooling',
        bn: 'ধাপ ২ — টাইপ, মিক্সইন এবং ইকোসিস্টেম টুলিং'
      },
      items: [
        {
          en: 'Lesson 4: Symbols vs Strings: memory interning, object identity, and frozen string literal optimization',
          bn: 'পাঠ ৪: সিম্বল বনাম স্ট্রিং: মেমোরি ইন্টার্নিং, অবজেক্ট আইডেন্টিটি এবং ফ্রোজেন স্ট্রিং অপটিমাইজেশন'
        },
        {
          en: 'Lesson 5: Modules and mixins: include, prepend, extend, and linear method ancestor chains',
          bn: 'পাঠ ৫: মডিউল ও মিক্সইন: include, prepend, extend এবং রৈখিক মেথড অ্যানসেস্টর চেইন'
        },
        {
          en: 'Lesson 6: Gems and Bundler: Gemfile declarative manifests, Gemfile.lock, and pessimistic version operators',
          bn: 'পাঠ ৬: জেমস এবং Bundler: Gemfile ডিক্লেয়ারেটিভ ম্যানিফেস্ট, Gemfile.lock এবং পেসিমিস্টিক ভার্সন অপারেটর'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Metaprogramming & Runtime Architecture',
        bn: 'ধাপ ৩ — মেটাপ্রোগ্রামিং এবং রানটাইম আর্কিটেকচার'
      },
      items: [
        {
          en: 'Lesson 7: Dynamic metaprogramming: define_method, method_missing, instance_eval, and ghost methods',
          bn: 'পাঠ ৭: ডাইনামিক মেটাপ্রোগ্রামিং: define_method, method_missing, instance_eval এবং ঘোস্ট মেথড'
        },
        {
          en: 'Lesson 8: The Ruby 3 release pipeline: Fibers, Ractors for true parallel execution, and YJIT JIT performance',
          bn: 'পাঠ ৮: Ruby ৩ রিলিজ পাইপলাইন: Fiber, সমান্তরাল কাজের জন্য Ractor এবং YJIT কম্পাইলার পারফরম্যান্স'
        }
      ]
    }
  ],
  lessons: [
    YieldsAndTheBlockLesson,
    ObjectsAndTheClassLesson,
    EnumsAndTheMapLesson,
    SymbolsAndTheStringLesson,
    MixinsAndTheModuleLesson,
    BundlesAndTheGemLesson,
    MetasAndTheDefineLesson,
    TheRubyReleaseLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Dynamic DSL Query Builder with Metaprogramming',
        bn: 'মেটাপ্রোগ্রামিং সহ ডাইনামিক DSL কুয়েরি বিল্ডার'
      },
      brief: {
        en: 'Construct a fluent domain-specific query builder using Ruby metaprogramming. Implement method_missing to handle dynamic attribute filters (e.g. where_status_and_role), define_method to dynamically synthesize schema validators, and instance_eval to process clean declarative configuration blocks.',
        bn: 'Ruby মেটাপ্রোগ্রামিং ব্যবহার করে একটি সাবলীল ডোমেন-স্পেসিফিক কুয়েরি বিল্ডার তৈরি করুন। method_missing দিয়ে ডাইনামিক ফিল্টার (যেমন where_status_and_role), define_method দিয়ে স্কিমা ভ্যালিডেটর এবং instance_eval দিয়ে পরিষ্কার কনফিগারেশন ব্লক প্রসেস করার কাঠামো গড়ে তুলুন।'
      }
    },
    {
      title: {
        en: 'Concurrent Work Pipeline with Ruby 3 Ractors',
        bn: 'Ruby ৩ Ractor সহ কনকারেন্ট ওয়ার্ক পাইপলাইন'
      },
      brief: {
        en: 'Build a multi-core parallel data crunching pipeline using Ruby 3 Ractors. Pass immutable message envelopes across isolated Ractor threads to bypass CRuby\'s Global VM Lock (GVL), performing distributed cryptographic hashing on large datasets with zero race conditions.',
        bn: 'Ruby ৩ Ractor ব্যবহার করে মাল্টি-কোর প্যারালাল ডেটা প্রসেসিং পাইপলাইন তৈরি করুন। CRuby-র গ্লোবাল ভার্চুয়াল মেশিন লক (GVL) এড়িয়ে বিচ্ছিন্ন Ractor থ্রেডের মাঝে ইমিউটেবল মেসেজ আদান-প্রদান করে কোনো ডেটা রেস ছাড়াই বড় ডেটাসেটের ক্রিপ্টোগ্রাফিক হ্যাশ গণনা করুন।'
      }
    },
    {
      title: {
        en: 'Streaming Analytics Engine with Lazy Enumerators',
        bn: 'লেজি এনিউমারেটর সহ স্ট্রিমিং অ্যানালিটিক্স ইঞ্জিন'
      },
      brief: {
        en: 'Develop a memory-efficient log streaming analyzer. Utilize Enumerator::Lazy and custom Enumerable mixins to read multi-gigabyte server access streams, filtering 500 error spikes and aggregating percentile metrics without exceeding 50 megabytes of heap memory.',
        bn: 'মেমোরি-সাশ্রয়ী একটি লগ স্ট্রিমিং অ্যানালাইজার তৈরি করুন। Enumerator::Lazy এবং কাস্টম Enumerable মিক্সইন ব্যবহার করে মাল্টি-গিগাবাইট অ্যাক্সেস লগ থেকে ৫০০ এরর শনাক্ত করুন এবং ৫০ মেগাবাইট মেমোরির মধ্যে সমস্ত পারসেন্টাইল মেট্রিক্স হিসাব করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always guard manual block yields with "block_given?" to avoid raising unexpected LocalJumpError exceptions for callers.',
      bn: 'কলার যেন অপ্রত্যাশিত LocalJumpError এররে না পড়ে, সেজন্য ম্যানুয়াল yield করার পূর্বে সর্বদা "block_given?" দিয়ে পরীক্ষা করুন।'
    },
    {
      en: 'Prefer define_method over method_missing whenever possible; define_method creates genuine method table entries with predictable dispatch speed.',
      bn: 'সম্ভব হলে method_missing-এর বদলে define_method ব্যবহার করুন; এটি মেথড টেবিলে স্থায়ী এন্ট্রি তৈরি করে দ্রুত পারফরম্যান্স নিশ্চিত করে।'
    },
    {
      en: 'Enable "# frozen_string_literal: true" in every Ruby file to deduplicate string allocations and minimize garbage collector churn.',
      bn: 'মেমরিতে স্ট্রিং ডুপ্লিকেশন রোধ করতে এবং গার্বেজ কালেক্টরের চাপ কমাতে প্রতিটি ফাইলে "# frozen_string_literal: true" ব্যবহার করুন।'
    },
    {
      en: 'Use Lambdas when strict argument counts and isolated local returns are required; reserve Procs for lightweight procedural code blocks.',
      bn: 'কঠোর আর্গুমেন্ট যাচাই এবং লোকাল রিটার্ন নিশ্চিত করতে Lambda ব্যবহার করুন; আর সাধারণ কোড ব্লকের জন্য Proc রাখুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'How does Ruby\'s "define_method" compare to "method_missing" in terms of performance and introspection?',
        bn: 'পারফরম্যান্স এবং ইন্ট্রোস্পেকশনের দিক থেকে Ruby-র "define_method" এবং "method_missing"-এর মধ্যে কী পার্থক্য রয়েছে?'
      },
      a: {
        en: 'define_method synthesizes genuine methods directly in the class method table, allowing them to be discovered via "respond_to?" and executed via normal fast O(1) VM dispatch. In contrast, method_missing is a fallback mechanism invoked only after walking the entire Class.ancestors chain fails; it requires manually overriding "respond_to_missing?" for introspection and has significantly higher invocation latency.',
        bn: 'define_method সরাসরি ক্লাসের মেথড টেবিলে বাস্তব মেথড তৈরি করে, ফলে "respond_to?" দিয়ে তা শনাক্ত করা যায় এবং দ্রুত O(1) গতিতে চলে। অন্যদিকে method_missing হলো একটি ব্যাকআপ হুক যা ক্লাসের পুরো অ্যানসেস্টর চেইন খুঁজে ব্যর্থ হওয়ার পরেই কেবল চালিত হয়; এটি ইন্ট্রোস্পেকশনের জন্য "respond_to_missing?" ওভাররাইড দাবি করে এবং এর পারফরম্যান্স বিলম্ব তুলনামূলক বেশি।'
      }
    },
    {
      q: {
        en: 'How do Ruby 3 Ractors achieve true multi-threaded parallelism on multi-core CPUs despite the presence of the Global VM Lock (GVL)?',
        bn: 'গ্লোবাল ভার্চুয়াল মেশিন লক (GVL) থাকা সত্ত্বেও Ruby ৩ Ractor কীভাবে মাল্টি-কোর প্রসেসরে সত্যিকারের প্যারালালিজম নিশ্চিত করে?'
      },
      a: {
        en: 'Each Ractor possesses its own independent GVL and execution context. To prevent race conditions, mutable objects cannot be shared directly between Ractors. Data can only be passed by transferring ownership (moving) or by sending deeply frozen, immutable objects via message passing channels (Ractor.send and Ractor.receive). This design eliminates memory corruption while enabling true CPU-parallel execution.',
        bn: 'প্রতিটি Ractor-এর নিজস্ব স্বতন্ত্র GVL এবং এক্সিকিউশন কনটেক্সট থাকে। রেস কন্ডিশন এড়াতে Ractor-গুলোর মাঝে মিউটেবল অবজেক্ট শেয়ার করা নিষিদ্ধ। ডেটা আদান-প্রদান করতে হয় মালিকানা স্থানান্তরের মাধ্যমে অথবা ডিপ-ফ্রোজেন ইমিউটেবল অবজেক্ট মেসেজ চ্যানেলে পাঠিয়ে (Ractor.send ও Ractor.receive)। ফলে মেমোরি ডেটা রেস ছাড়াই প্রসেসরের সব কোরে সত্যিকারের প্যারালাল কাজ চলে।'
      }
    },
    {
      q: {
        en: 'What is the precise operational difference between "instance_eval" and "class_eval" (or "module_eval") in Ruby?',
        bn: 'Ruby-তে "instance_eval" এবং "class_eval" (বা "module_eval")-এর মাঝে সুনির্দিষ্ট ব্যবহারিক পার্থক্য কী?'
      },
      a: {
        en: '"instance_eval" evaluates a block in the context of a specific instance object, setting self to that instance and opening its singleton class (defining singleton/class methods). In contrast, "class_eval" evaluates a block in the context of a Class or Module, allowing developers to dynamically define standard instance methods that are shared across all instances of that class.',
        bn: '"instance_eval" নির্দিষ্ট একটি অবজেক্টের কনটেক্সটে ব্লক চালায়, self-কে ওই অবজেক্টে সেট করে এবং তার সিঙ্গেলটন ক্লাস ওপেন করে (সিঙ্গেলটন বা ক্লাস মেথড বানাতে ব্যবহৃত হয়)। অন্যদিকে "class_eval" একটি Class বা Module-এর কনটেক্সটে ব্লক চালায়, যার ফলে ডেভেলপাররা সাধারণ ইনস্ট্যান্স মেথড ডাইনামিকভাবে তৈরি করতে পারেন যা ক্লাসের সমস্ত অবজেক্ট শেয়ার করে।'
      }
    },
    {
      q: {
        en: 'Why does Ruby 3+ YJIT use Basic Block Versioning (BBV) instead of traditional tracing or method-based JIT compilation?',
        bn: 'ঐতিহ্যবাহী ট্রেসিং বা মেথড-ভিত্তিক JIT-এর বদলে Ruby ৩+ YJIT কেন বেসিক ব্লক ভার্সনিং (BBV) ব্যবহার করে?'
      },
      a: {
        en: 'Tracing and method-based JITs suffer from long warmup periods and struggle with dynamic Ruby idioms where types change unpredictably. Basic Block Versioning compiles code one linear basic block at a time, generating specialized machine code versions based on the exact types observed entering that block. This delivers near-zero warmup latency and consistent 15% to 30%+ speedups on complex web frameworks like Rails.',
        bn: 'ট্রেসিং এবং মেথড JIT-এর দীর্ঘ ওয়ার্মআপ সময়ের প্রয়োজন হয় এবং Ruby-র মতো ডাইনামিক ভাষায় তারা খাপ খাওয়াতে পারে না। বেসিক ব্লক ভার্সনিং কোডের প্রতিটি ব্লককে ধাপে ধাপে কম্পাইল করে এবং ব্লকে প্রবেশকারী সুনির্দিষ্ট টাইপের ওপর ভিত্তি করে দ্রুত মেশিন কোড তৈরি করে। এর ফলে কোনো ওয়ার্মআপ বিলম্ব ছাড়াই Rails-এর মতো জটিল সিস্টেমে তাৎক্ষণিক ১৫% থেকে ৩০%+ গতি বৃদ্ধি পায়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Shopify runs one of the world\'s largest Ruby clusters, sponsoring core YJIT development to save millions in cloud server infrastructure costs.',
      bn: 'Shopify বিশ্বের বৃহত্তম Ruby ক্লাস্টারগুলোর একটি পরিচালনা করে এবং সার্ভার অবকাঠামো খরচ বাঁচাতে তারা সরাসরি YJIT কম্পাইলারের উন্নয়নে নেতৃত্ব দিচ্ছে।'
    },
    {
      en: 'Stripe\'s Sorbet type checker leverages Ruby metaprogramming AST hooks to bring static gradual typing to millions of lines of production code.',
      bn: 'Stripe-এর Sorbet টাইপ চেকার Ruby মেটাপ্রোগ্রামিং AST হুক ব্যবহার করে তাদের কোটি লাইনের প্রোডাকশন কোডে স্ট্যাটিক টাইপ সেফটি নিশ্চিত করেছে।'
    },
    {
      en: 'GitLab powers global enterprise DevOps platforms using scalable Ruby pipelines, heavily utilizing Enumerable lazy streaming for repository diffs.',
      bn: 'GitLab বিশ্বব্যাপী এন্টারপ্রাইজ ডেভঅপস প্ল্যাটফর্ম পরিচালনা করে স্কেলেবল Ruby পাইপলাইনের মাধ্যমে, যেখানে রিপোজিটরি ডিফের জন্য Enumerable লেজি স্ট্রিমিং ব্যবহৃত হয়।'
    },
    {
      en: 'Fastlane automates iOS and Android mobile app deployment using expressive Ruby DSL commands executed by developers worldwide.',
      bn: 'Fastlane বিশ্বব্যাপী মোবাইল ডেভেলপারদের জন্য iOS এবং অ্যান্ড্রয়েড অ্যাপ ডিপ্লয়মেন্ট স্বয়ংক্রিয় করে তাদের নিজস্ব Ruby DSL কমান্ডের মাধ্যমে।'
    }
  ]
};
