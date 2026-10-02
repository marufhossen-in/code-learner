import type { Hub } from '../../lib/types';
import { SharpAndTheStringLesson } from './lessons/sharp-and-the-string';
import { RecordsAndTheInitLesson } from './lessons/records-and-the-init';
import { NullablesAndTheNothingLesson } from './lessons/nullables-and-the-nothing';
import { DelegatesAndTheEventLesson } from './lessons/delegates-and-the-event';
import { IteratorsAndTheYieldLesson } from './lessons/iterators-and-the-yield';
import { SpansAndTheSliceLesson } from './lessons/spans-and-the-slice';
import { SourcegenAndTheAttributeLesson } from './lessons/sourcegen-and-the-attribute';
import { TheSharpReleaseLesson } from './lessons/the-sharp-release';

export const langCsharpHub: Hub = {
  slug: 'lang-csharp',
  name: 'C# Language',
  icon: '🎵',
  tagline: {
    en: 'Master modern C# from foundational syntax and record immutability to zero-allocation Span memory slicing and compile-time Roslyn source generation.',
    bn: 'মৌলিক সিনট্যাক্স ও রেকর্ড ইমিউটেবিলিটি থেকে শুরু করে শূন্য-অ্যালোকেশনের Span মেমোরি স্লাইসিং এবং কম্পাইল-টাইম Roslyn সোর্স জেনারেশন সহ আধুনিক C# আয়ত্ত করুন।'
  },
  intro: {
    en: 'C# has evolved into a premier multi-paradigm language combining enterprise safety with high-performance systems programming. In modern versions (C# 10, 11, 12, and 13) running on .NET 8, the language introduces revolutionary language primitives: positional records with nondestructive mutation ("with"), first-class Nullable Reference Types (NRT), high-efficiency Span<T> and Memory<T> memory views, lazy state-machine streaming via "yield return", and compile-time metaprogramming using Roslyn Source Generators. This track guides you through the inner mechanics of modern C#, equipping you to write clean, concurrent, and allocation-free code.',
    bn: 'C# এন্টারপ্রাইজ নিরাপত্তা এবং উচ্চগতির সিস্টেম প্রোগ্রামিংয়ের সমন্বয়ে গঠিত একটি শীর্ষস্থানীয় মাল্টি-প্যারাডাইম ভাষায় রূপান্তরিত হয়েছে। আধুনিক সংস্করণগুলোতে (C# ১০, ১১, ১২ এবং ১৩) যা .NET ৮-এ চলে, ভাষাটিতে বৈপ্লবিক সব ফিচার যুক্ত হয়েছে: "with" এক্সপ্রেশন সহ পজিশনাল রেকর্ড, টাইপ-নিরাপদ Nullable Reference Types (NRT), অতি-দক্ষ Span<T> ও Memory<T> মেমোরি ভিউ, "yield return" দিয়ে লেজি স্টেট-মেশিন স্ট্রিমিং এবং Roslyn সোর্স জেনারেটর দিয়ে কম্পাইল-টাইম মেটাপ্রোগ্রামিং। এই ট্র্যাকটি আধুনিক C#-এর অভ্যন্তরীণ মেকানিজম নিখুঁতভাবে শিখিয়ে আপনাকে পরিচ্ছন্ন, কনকারেন্ট ও মেমোরি-দক্ষ কোড লিখতে পারদর্শী করে তুলবে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Modern Type System & Immutability',
        bn: 'ধাপ ১ — আধুনিক টাইপ সিস্টেম এবং ইমিউটেবিলিটি'
      },
      items: [
        {
          en: 'String interpolation mechanics, raw string literals, and UTF-8 string literals (u8)',
          bn: 'স্ট্রিং ইন্টারপোলেশন মেকানিজম, র স্ট্রিং লিটারেল এবং ইউটিএফ-৮ স্ট্রিং লিটারেল (u8)'
        },
        {
          en: 'Positional records, init-only properties, and non-destructive mutation using "with" expressions',
          bn: 'পজিশনাল রেকর্ড, init-অনলি প্রপার্টি এবং "with" এক্সপ্রেশন দিয়ে নন-ডেস্ট্রাক্টিভ মিউটেশন'
        },
        {
          en: 'Nullable reference types, static nullability flow analysis, and the null-forgiving operator (!)',
          bn: 'নালেবল রেফারেন্স টাইপস, স্ট্যাটিক নাল ফ্লো বিশ্লেষণ এবং নাল-ফরগিভিং অপারেটর (!)'
        },
        {
          en: 'Eliminating NullReferenceException crashes through compile-time type safety guarantees',
          bn: 'কম্পাইল-টাইম টাইপ নিরাপত্তার মাধ্যমে NullReferenceException ক্র্যাশ প্রতিরোধ'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Functional Delegates & Zero-Allocation Memory',
        bn: 'ধাপ ২ — ফাংশনাল ডেলিগেট এবং শূন্য-অ্যালোকেশন মেমোরি'
      },
      items: [
        {
          en: 'Delegates, Func, Action, event subscription patterns, and avoiding memory leaks from dangling handlers',
          bn: 'ডেলিগেটস, Func, Action, ইভেন্ট সাবস্ক্রিপশন প্যাটার্ন এবং মেমোরি লিক প্রতিরোধ'
        },
        {
          en: 'Iterators, lazy evaluation, and Roslyn compiler state-machine generation using "yield return"',
          bn: 'ইটারেটর, লেজি মূল্যায়ন এবং "yield return" দিয়ে Roslyn কম্পাইলারের স্টেট-মেশিন জেনারেশন'
        },
        {
          en: 'Span<T>, ReadOnlySpan<T>, stackalloc, and zero-allocation contiguous memory slicing',
          bn: 'Span<T>, ReadOnlySpan<T>, stackalloc এবং শূন্য-অ্যালোকেশনের মেমোরি স্লাইসিং'
        },
        {
          en: 'Replacing expensive string substring allocations with zero-copy ReadOnlySpan<char> parsing',
          bn: 'ব্যয়বহুল সাবস্ট্রিং অ্যালটমেন্ট পরিহার করে জিরো-কপি ReadOnlySpan<char> পার্সিং'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Metaprogramming & High-Performance Publishing',
        bn: 'ধাপ ৩ — মেটাপ্রোগ্রামিং এবং হাই-পারফরম্যান্স পাবলিশিং'
      },
      items: [
        {
          en: 'Roslyn Source Generators, IIncrementalGenerator, and compile-time code synthesis',
          bn: 'Roslyn সোর্স জেনারেটর, IIncrementalGenerator এবং কম্পাইল-টাইম কোড সিন্থেসিস'
        },
        {
          en: 'Custom attributes, compile-time metadata, and replacing slow reflection with code generation',
          bn: 'কাস্টম অ্যাট্রিবিউট, মেটাডেটা এবং ধীরগতির রিফ্লেকশনের বদলে কোড জেনারেশন'
        },
        {
          en: 'Trimming annotations, ILLink compatibility, and warning-free binary size reduction',
          bn: 'ট্রিমিং অ্যানোটেশন, ILLink সামঞ্জস্যতা এবং কোনো ওয়ার্নিং ছাড়া বাইনারি সাইজ হ্রাস'
        },
        {
          en: 'Native AOT publishing, Tiered compilation, and zero-latency deployment artifacts',
          bn: 'Native AOT পাবলিশিং, টিয়ার্ড কম্পাইলেশন এবং শূন্য-ল্যাটেন্সির ডেপ্লয়মেন্ট'
        }
      ]
    }
  ],
  lessons: [
    SharpAndTheStringLesson,
    RecordsAndTheInitLesson,
    NullablesAndTheNothingLesson,
    DelegatesAndTheEventLesson,
    IteratorsAndTheYieldLesson,
    SpansAndTheSliceLesson,
    SourcegenAndTheAttributeLesson,
    TheSharpReleaseLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Zero-Allocation HTTP Protocol Parser with Span<T> & UTF-8 Literals',
        bn: 'Span<T> এবং ইউটিএফ-৮ লিটারেল দিয়ে শূন্য-অ্যালোকেশনের এইচটিটিপি পার্সার'
      },
      brief: {
        en: 'Build a blazing-fast low-level HTTP/1.1 wire protocol parser in C#. Use ReadOnlySpan<byte> and UTF-8 string literals (u8) to tokenize request lines, parse headers, and extract query parameters directly from network socket buffers with zero heap allocations.',
        bn: 'C# দিয়ে একটি অতি দ্রুতগতির লো-লেভেল HTTP/1.1 ওয়্যার প্রোটোকল পার্সার তৈরি করুন। নেটওয়ার্ক সকেট বাফার থেকে কোনো হিপ মেমোরি খরচ না করে রিকোয়েস্ট লাইন টোকেনাইজ করতে, হেডার পড়তে এবং কোয়েরি প্যারামিটার বের করতে ReadOnlySpan<byte> ও ইউটিএফ-৮ লিটারেল (u8) ব্যবহার করুন।'
      }
    },
    {
      title: {
        en: 'Compile-Time Type-Safe JSON Serializer with Roslyn Source Generators',
        bn: 'Roslyn সোর্স জেনারেটর দিয়ে কম্পাইল-টাইম টাইপ-সেফ জেসন সিরিয়ালাইজার'
      },
      brief: {
        en: 'Author an incremental Roslyn Source Generator that inspects C# classes marked with [GenerateSerializer]. Generate dedicated compile-time serialization C# code to bypass runtime reflection entirely, achieving sub-microsecond serialization speed and full Native AOT readiness.',
        bn: 'একটি ইনক্রিমেন্টাল Roslyn সোর্স জেনারেটর তৈরি করুন যা [GenerateSerializer] চিহ্নিত C# ক্লাসগুলো বিশ্লেষণ করে। কোনো রানটাইম রিফ্লেকশন ছাড়াই সরাসরি কম্পাইল-টাইমে সিরিয়ালাইজেশন C# কোড তৈরি করুন, যা সাব-মাইক্রোসেকেন্ড গতি এবং সম্পূর্ণ Native AOT সামঞ্জস্যতা নিশ্চিত করবে।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Favor immutable records with init-only properties for data transfer objects to guarantee thread safety and eliminate race conditions.',
      bn: 'ডেটা ট্রান্সফার অবজেক্টের জন্য init-অনলি প্রপার্টি যুক্ত ইমিউটেবল রেকর্ড ব্যবহার করুন, যা থ্রেড নিরাপত্তা নিশ্চিত করে এবং রেস কন্ডিশন দূর করে।'
    },
    {
      en: 'Treat Nullable Reference Type warnings as build errors to eliminate NullReferenceException bugs before code ships to production.',
      bn: 'প্রোডাকশনে যাওয়ার আগেই NullReferenceException এরর দূর করতে নালেবল রেফারেন্স টাইপের সমস্ত সতর্কতা বিল্ড এরর হিসেবে গণ্য করুন।'
    },
    {
      en: 'Always unsubscribe event handlers or use WeakReference patterns to avoid memory leaks caused by lingering event publisher references.',
      bn: 'ইভেন্ট পাবলিশারের রেফারেন্সে মেমোরি লিক ঠেকাতে সর্বদা ইভেন্ট হ্যান্ডলার আনসাবস্ক্রাইব করুন অথবা WeakReference প্যাটার্ন প্রয়োগ করুন।'
    },
    {
      en: 'Stream large sequences using "yield return" instead of pre-allocating full List collections to keep memory usage at a constant O(1).',
      bn: 'স্মৃতিতে বিশাল List বানিয়ে মেমোরি নষ্ট না করে "yield return" দিয়ে সিকোয়েন্স স্ট্রিম করুন, যা মেমোরি খরচ ধ্রুবক O(1)-এ রাখে।'
    },
    {
      en: 'Use ReadOnlySpan<char> and MemoryExtensions for string parsing and slicing to eliminate temporary string allocations on the managed heap.',
      bn: 'স্ট্রিং পার্সিং এবং স্লাইসিংয়ের সময় হিপে অস্থায়ী অবজেক্ট তৈরি এড়াতে ReadOnlySpan<char> এবং MemoryExtensions ব্যবহার করুন।'
    },
    {
      en: 'Replace runtime reflection with Roslyn compile-time source generators to achieve instant application boot times and full Native AOT compatibility.',
      bn: 'রানটাইমে রিফ্লেকশনের বদলে Roslyn কম্পাইল-টাইম সোর্স জেনারেটর ব্যবহার করুন, যা তাত্ক্ষণিক অ্যাপ স্টার্টআপ এবং পূর্ণ Native AOT নিশ্চিত করে।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the difference between a class and a record in C#, and how does the compiler implement value equality for records?',
        bn: 'C#-এ class এবং record-এর মধ্যে পার্থক্য কী, এবং রেকর্ডগুলোর জন্য কম্পাইলার কীভাবে ভ্যালু সমতা (value equality) বাস্তবায়ন করে?'
      },
      a: {
        en: 'Classes have reference equality by default (two instances are equal only if they point to the exact same memory address on the heap). Records, whether defined as reference types (record class) or value types (record struct), provide synthesized value-based equality. The Roslyn compiler automatically generates Equals, GetHashCode, and equality operators (== and !=) that compare each individual property value. Furthermore, records synthesize copy constructors that enable non-destructive mutation via the "with" expression.',
        bn: 'ডিফল্টভাবে ক্লাসে রেফারেন্স সমতা থাকে (হিপ মেমোরিতে দুটি ভেরিয়েবল ঠিক একই ঠিকানায় নির্দেশ করলেই কেবল তারা সমান হয়)। কিন্তু রেকর্ড (record class বা record struct) স্বয়ংক্রিয়ভাবে মান-ভিত্তিক সমতা (value equality) প্রদান করে। Roslyn কম্পাইলার নিজে থেকেই Equals, GetHashCode এবং সমতা অপারেটর (== ও !=) তৈরি করে যা প্রতিটি প্রপার্টির মান তুলনা করে। তাছাড়া রেকর্ড একটি সংশ্লেষিত কপি কনস্ট্রাক্টর দেয় যা "with" এক্সপ্রেশনের মাধ্যমে মূল অবজেক্ট অবিকৃত রেখে নতুন অবজেক্ট তৈরির সুবিধা দেয়।'
      }
    },
    {
      q: {
        en: 'How does Span<T> enable zero-allocation memory slicing, and why is Span<T> declared as a "ref struct"?',
        bn: 'Span<T> কীভাবে কোনো মেমোরি খরচ ছাড়া মেমোরি স্লাইসিং সম্পন্ন করে, এবং কেন Span<T>-কে একটি "ref struct" হিসেবে ঘোষণা করা হয়?'
      },
      a: {
        en: 'Span<T> represents a contiguous region of arbitrary memory (managed heap arrays, stack-allocated buffers, or native unmanaged pointers). Internally, it holds only a managed interior reference (ref T) and a 32-bit integer length. Slicing a span merely adjusts the pointer and length without allocating a new object. To guarantee type and memory safety, Span<T> is defined as a "ref struct", meaning it can only ever live on the execution stack. The compiler strictly forbids boxing a Span, storing it as a field inside normal heap classes, or capturing it across asynchronous await boundaries.',
        bn: 'Span<T> মেমোরির যেকোনো অবিচ্ছিন্ন অংশকে (হিপ অ্যারে, স্ট্যাক বাফার বা নেটিভ আনম্যানেজড পয়েন্টার) একটি একক কাঠামোর আওতায় আনে। অভ্যন্তরীণভাবে এটি কেবল একটি রেফারেন্স (ref T) এবং একটি ৩২-বিট দৈর্ঘ্য ধারণ করে। একটি স্প্যান স্লাইস করলে কেবল পয়েন্টার ও দৈর্ঘ্য পরিবর্তিত হয়, কোনো নতুন অবজেক্ট তৈরি হয় না। মেমোরি নিরাপত্তা অক্ষুণ্ণ রাখতে Span<T>-কে একটি "ref struct" বানানো হয়েছে, যার অর্থ এটি কেবলমাত্র স্ট্যাক মেমোরিতেই অবস্থান করতে পারে। কম্পাইলার কঠোরভাবে স্প্যানকে হিপ ক্লাসের ভেতর ফিল্ড হিসেবে রাখা, বক্সিং করা বা async-await-এর সীমানা পার হতে বাধা দেয়।'
      }
    },
    {
      q: {
        en: 'How does the C# compiler transform methods containing "yield return" under the hood?',
        bn: 'C# কম্পাইলার পর্দার আড়ালে "yield return" থাকা মেথডগুলোকে কীভাবে রূপান্তর করে?'
      },
      a: {
        en: 'When a method uses "yield return", the Roslyn compiler synthesizes a private state-machine class implementing IEnumerable<T>, IEnumerator<T>, and IDisposable. The original method body is transformed into a state machine driven by a "MoveNext()" method containing a switch on the current integer state. Each "yield return" stores the current value, updates the state integer, and pauses execution returning true. Execution resumes at the exact line on the next MoveNext() call, enabling lazy on-demand streaming with minimal memory overhead.',
        bn: 'যখন কোনো মেথড "yield return" ব্যবহার করে, তখন Roslyn কম্পাইলার পর্দার আড়ালে একটি স্টেট-মেশিন ক্লাস তৈরি করে যা IEnumerable<T>, IEnumerator<T> এবং IDisposable বাস্তবায়ন করে। মূল কোডটি "MoveNext()" মেথডের ভেতর একটি switch স্টেটমেন্টে রূপান্তরিত হয়। প্রতিটি "yield return" বর্তমান মানটি কারেন্টে রেখে স্টেট সংখ্যা আপডেট করে এবং সাময়িকভাবে থমকে গিয়ে true ফেরত দেয়। পরবর্তী MoveNext() কলের সাথে সাথে এক্সিকিউশন ঠিক আগের স্থান থেকে চালু হয়, ফলে মেমোরি নষ্ট না করে লেজি স্ট্রিমিং সম্ভব হয়।'
      }
    },
    {
      q: {
        en: 'What are Roslyn Source Generators, and what advantages do they provide over traditional runtime System.Reflection?',
        bn: 'Roslyn সোর্স জেনারেটর কী এবং ঐতিহ্যবাহী রানটাইম System.Reflection-এর তুলনায় এটি কী কী সুবিধা প্রদান করে?'
      },
      a: {
        en: 'Roslyn Source Generators run during the compilation phase, inspecting user syntax trees and program semantic models to emit additional C# source code that compiles seamlessly into the final binary. Unlike runtime System.Reflection, which inspects types dynamically at runtime using slow metadata lookups and caches, Source Generators execute at compile time. This completely eliminates startup reflection latency, removes runtime allocations, provides full compile-time IDE diagnostic warnings, and enables 100% compatibility with Native AOT publishing.',
        bn: 'Roslyn সোর্স জেনারেটর কোড কম্পাইল করার সময় প্রোগ্রামারের সিনট্যাক্স ট্রি ও শব্দার্থিক মডেল বিশ্লেষণ করে অতিরিক্ত C# সোর্স কোড তৈরি করে, যা মূল প্রোগ্রামের সাথেই একসাথে কম্পাইল হয়ে যায়। রানটাইম রিফ্লেকশনের ধীরগতির মেটাডেটা স্ক্যানিংয়ের বিপরীতে সোর্স জেনারেটর কম্পাইল-টাইমে সম্পন্ন হয়। এটি অ্যাপ্লিকেশনের বুট টাইম দ্রুত করে, হিপ মেমোরি খরচ শূন্যে নামিয়ে আনে, আইডিইতে সরাসরি টাইপ-চেকিং দেয় এবং Native AOT-এর সাথে শতভাগ সামঞ্জস্যতা নিশ্চিত করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'High-frequency financial trading systems parsing microsecond FIX protocol messages using stackalloc and ReadOnlySpan<byte> without triggering garbage collection pauses.',
      bn: 'উচ্চগতির ফিনান্সিয়াল ট্রেডিং সিস্টেম যা কোনো গার্বেজ কালেকশন পজ ছাড়া stackalloc এবং ReadOnlySpan<byte> দিয়ে মাইক্রোসেকেন্ডে FIX মেসেজ পার্স করে।'
    },
    {
      en: 'Enterprise microservices utilizing C# records and init-only properties to build bulletproof CQRS commands and events that cannot be mutated across concurrent threads.',
      bn: 'এন্টারপ্রাইজ মাইক্রোসার্ভিস যা C# রেকর্ড এবং init-অনলি প্রপার্টি দিয়ে দুর্ভেদ্য CQRS কমান্ড তৈরি করে যা কনকারেন্ট থ্রেডে দুর্ঘটনাবশত পরিবর্তিত হতে পারে না।'
    },
    {
      en: 'Cloud telemetry pipelines utilizing "yield return" iterator pipelines to stream and filter gigabytes of audit logs chunk-by-chunk with constant O(1) memory consumption.',
      bn: 'ক্লাউড টেলিমেট্রি পাইপলাইন যা "yield return" ইটারেটর ব্যবহার করে ধ্রুবক O(1) মেমোরিতে গিগাবাইট আকারের অডিট লগ চাংক-বাই-চাংক স্ট্রিম ও ফিল্টার করে।'
    },
    {
      en: 'Modern Web APIs adopting Roslyn Source Generated System.Text.Json serializers to achieve instant cold starts in AWS Lambda and Azure Container Apps with Native AOT.',
      bn: 'আধুনিক ওয়েব এপিআই যা Roslyn সোর্স জেনারেটেড System.Text.Json সিরিয়ালাইজার ব্যবহার করে AWS Lambda ও Azure Container Apps-এ Native AOT সহ চোখের পলকে চালু হয়।'
    }
  ]
};
