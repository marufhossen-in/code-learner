import type { Hub } from '../../lib/types';
import { TheRuntimeAndTheAssemblyLesson } from './lessons/the-runtime-and-the-assembly';
import { TypesAndTheClassLesson } from './lessons/types-and-the-class';
import { LinqAndTheQueryLesson } from './lessons/linq-and-the-query';
import { AsyncAndTheAwaitLesson } from './lessons/async-and-the-await';
import { GenericsAndTheCollectionLesson } from './lessons/generics-and-the-collection';
import { PatternsAndTheMatchLesson } from './lessons/patterns-and-the-match';
import { FilesAndTheStreamLesson } from './lessons/files-and-the-stream';
import { TheNugetServeLesson } from './lessons/the-nuget-serve';

export const csharpHub: Hub = {
  slug: 'csharp',
  name: 'C#',
  icon: '🎵',
  tagline: {
    en: 'Modern, type-safe, high-performance object and functional programming on the cross-platform .NET runtime.',
    bn: 'ক্রস-প্ল্যাটফর্ম .NET রানটাইমে আধুনিক, টাইপ-নিরাপদ এবং উচ্চ-পারফরম্যান্স অবজেক্ট ও ফাংশনাল প্রোগ্রামিং।'
  },
  intro: {
    en: 'C# is a modern, statically-typed, component-oriented language powering cross-platform microservices, cloud applications, game development, and distributed enterprise systems. Powered by the Common Language Runtime (CLR) and the Roslyn compiler, C# seamlessly bridges high-level developer ergonomics—such as LINQ, pattern matching, records, and async/await—with low-level hardware performance optimizations including value types, ref structs, Span<T>, and Native AOT compilation. This curriculum journeys through 8 structured steps from runtime mechanics and memory architectures to high-throughput data processing and production deployment.',
    bn: 'C# হলো একটি আধুনিক, স্ট্যাটিকালি-টাইপড এবং কম্পোনেন্ট-ভিত্তিক প্রোগ্রামিং ভাষা যা ক্রস-প্ল্যাটফর্ম মাইক্রোসার্ভিস, ক্লাউড অ্যাপ্লিকেশন, গেম ডেভেলপমেন্ট এবং ডিস্ট্রিবিউটেড এন্টারপ্রাইজ সিস্টেমে ব্যাপকভাবে ব্যবহৃত হয়। Common Language Runtime (CLR) এবং Roslyn কম্পাইলারের শক্তিতে পরিচালিত C# উচ্চস্তরের ডেভেলপার সুবিধা (যেমন LINQ, প্যাটার্ন ম্যাচিং, রেকর্ড এবং async/await) এর সাথে হার্ডওয়্যার-ঘনিষ্ঠ পারফরম্যান্স অপটিমাইজেশন (যেমন ভ্যালু টাইপ, ref struct, Span<T> এবং Native AOT) এর নিখুঁত সমন্বয় ঘটায়। এই পাঠ্যক্রমটি রানটাইম মেকানিক্স ও মেমোরি আর্কিটেকচার থেকে শুরু করে উচ্চগতির ডেটা প্রসেসিং এবং প্রোডাকশন ডিপ্লয়মেন্ট পর্যন্ত ৮ টি ধাপে বিস্তারিত শেখায়।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Runtime Architecture, Type Systems & LINQ',
        bn: 'ধাপ ১ — রানটাইম আর্কিটেকচার, টাইপ সিস্টেম এবং LINQ'
      },
      items: [
        {
          en: 'The CLR runtime, assemblies, Intermediate Language (IL), and JIT compilation (lesson 1)',
          bn: 'CLR রানটাইম, অ্যাসেম্বলি, ইন্টারমিডিয়েট ল্যাঙ্গুয়েজ (IL) এবং JIT কম্পাইলেশন (পাঠ ১)'
        },
        {
          en: 'Value types versus reference types, structs, records, and nullable reference types (lesson 2)',
          bn: 'ভ্যালু টাইপ বনাম রেফারেন্স টাইপ, স্ট্রাক্ট, রেকর্ড এবং নালেবল রেফারেন্স টাইপ (পাঠ ২)'
        },
        {
          en: 'Declarative data pipelines with LINQ, deferred execution, and projections (lesson 3)',
          bn: 'LINQ দিয়ে ডিক্ল্যারেটিভ ডেটা পাইপলাইন, ডিফার্ড এক্সিকিউশন এবং প্রজেকশন (পাঠ ৩)'
        },
        {
          en: 'Master memory allocation trade-offs across stack and garbage-collected heap memory',
          bn: 'স্ট্যাক এবং গারবেজ-কালেক্টেড হিপ মেমোরির মধ্যে মেমোরি বরাদ্দের ভারসাম্য আয়ত্ত করুন'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Concurrency, Modern Collections & Pattern Matching',
        bn: 'ধাপ ২ — কনকারেন্সি, আধুনিক কালেকশন এবং প্যাটার্ন ম্যাচিং'
      },
      items: [
        {
          en: 'Asynchronous workflows with Task, async/await state machines, and cancellation tokens (lesson 4)',
          bn: 'Task, async/await স্টেট মেশিন এবং ক্যান্সেলেশন টোকেন দিয়ে অ্যাসিনক্রোনাস ওয়ার্কফ্লো (পাঠ ৪)'
        },
        {
          en: 'High-performance collections, generics, and zero-allocation memory with Span<T> (lesson 5)',
          bn: 'উচ্চ-পারফরম্যান্স কালেকশন, জেনেরিক্স এবং Span<T> দিয়ে শূন্য-অ্যালোকেশন মেমোরি (পাঠ ৫)'
        },
        {
          en: 'Expressive switch expressions, relational patterns, and positional deconstruction (lesson 6)',
          bn: 'আধুনিক সুইচ এক্সপ্রেশন, রিলেশনাল প্যাটার্ন এবং পজিশনাল ডিকনস্ট্রাকশন (পাঠ ৬)'
        },
        {
          en: 'Safeguard async pipelines against thread starvation and deadlocks with ConfigureAwait',
          bn: 'ConfigureAwait দিয়ে অ্যাসিনক্রোনাস পাইপলাইনে থ্রেড স্টারভেশন ও ডেডলক প্রতিরোধ করুন'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — High-Throughput Streams, Packaging & Native AOT',
        bn: 'ধাপ ৩ — হাই-থ্রুপুট স্ট্রিম, প্যাকেজিং এবং নেটিভ AOT'
      },
      items: [
        {
          en: 'Asynchronous streaming, FileStream buffering, and high-speed System.Text.Json (lesson 7)',
          bn: 'অ্যাসিনক্রোনাস স্ট্রিমিং, FileStream বাফারিং এবং দ্রুতগতির System.Text.Json (পাঠ ৭)'
        },
        {
          en: 'NuGet package distribution, automated xUnit testing, and Native AOT binaries (lesson 8)',
          bn: 'NuGet প্যাকেজ বিতরণ, স্বয়ংক্রিয় xUnit টেস্টিং এবং নেটিভ AOT বাইনারি (পাঠ ৮)'
        },
        {
          en: 'Deliver self-contained cross-platform Linux and Windows cloud executables',
          bn: 'লিনাক্স এবং উইন্ডোজ ক্লাউডের জন্য স্বয়ংসম্পূর্ণ একক এক্সিকিউটেবল প্রস্তুত করুন'
        },
        {
          en: 'Profile hot memory paths to eliminate heap allocations in mission-critical services',
          bn: 'মিশন-ক্রিটিক্যাল সার্ভিসে হিপ অ্যালোকেশন নির্মূল করতে মেমোরি পাথ প্রোফাইল করুন'
        }
      ]
    }
  ],
  lessons: [
    TheRuntimeAndTheAssemblyLesson,
    TypesAndTheClassLesson,
    LinqAndTheQueryLesson,
    AsyncAndTheAwaitLesson,
    GenericsAndTheCollectionLesson,
    PatternsAndTheMatchLesson,
    FilesAndTheStreamLesson,
    TheNugetServeLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'High-Throughput Financial Order Ledger Engine',
        bn: 'উচ্চ-গতির আর্থিক লেনদেন অর্ডার লেজার ইঞ্জিন'
      },
      brief: {
        en: 'Architect an ultra-fast trading order matching engine in C# combining immutable record types, pattern matching switch expressions, zero-allocation Span<T> byte parsing, and asynchronous queue processing with CancellationToken support.',
        bn: 'C# এ একটি অত্যন্ত দ্রুতগতির ট্রেডিং অর্ডার ম্যাচিং ইঞ্জিন তৈরি করুন যেখানে ইমিউটেবল রেকর্ড টাইপ, প্যাটার্ন ম্যাচিং সুইচ এক্সপ্রেশন, শূন্য-অ্যালোকেশন Span<T> বাইট পার্সিং এবং CancellationToken সহ অ্যাসিনক্রোনাস কিউ প্রসেসিং সমন্বিত থাকবে।'
      }
    },
    {
      title: {
        en: 'Cloud Telemetry Aggregator with Native AOT Compilation',
        bn: 'নেটিভ AOT কম্পাইলেশন সহ ক্লাউড টেলিমেট্রি অ্যাগ্রিগেটর'
      },
      brief: {
        en: 'Build a production-ready telemetry ingestion microservice utilizing async FileStream pipelines, high-throughput System.Text.Json streaming, comprehensive xUnit test suites, and publish as a self-contained Native AOT container binary with instant sub-millisecond cold boot.',
        bn: 'অ্যাসিনক্রোনাস FileStream পাইপলাইন, উচ্চগতির System.Text.Json স্ট্রিমিং এবং xUnit টেস্ট সুট ব্যবহার করে একটি প্রোডাকশন টেলিমেট্রি মাইক্রোসার্ভিস তৈরি করুন এবং তাৎক্ষণিক সাব-মিলিসেকেন্ড বুট সক্ষম একটি স্বয়ংসম্পূর্ণ নেটিভ AOT কনটেইনার বাইনারি হিসেবে প্রকাশ করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Prefer readonly record structs for small, immutable data transfer objects to guarantee stack allocation and avoid GC heap pressure.',
      bn: 'ছোট ও অপরিবর্তনীয় ডেটা অবজেক্টের জন্য readonly record struct ব্যবহার করুন যাতে স্ট্যাক মেমোরি ব্যবহার হয় এবং গারবেজ কালেক্টরের ওপর চাপ কমে।'
    },
    {
      en: 'Always pass a CancellationToken to all asynchronous I/O methods to gracefully terminate hanging network operations.',
      bn: 'স্থগিত নেটওয়ার্ক অপারেশনগুলো নিরাপদভাবে বাতিল করতে সর্বদা সমস্ত অ্যাসিনক্রোনাস I/O মেথডে CancellationToken পাস করুন।'
    },
    {
      en: 'Use Span<T> and ReadOnlySpan<T> for high-frequency string splitting and buffer parsing to achieve zero heap allocations.',
      bn: 'উচ্চ-ফ্রিকোয়েন্সি স্ট্রিং স্লাইসিং ও বাফার পার্সিংয়ে শূন্য হিপ অ্যালোকেশন অর্জনের জন্য Span<T> এবং ReadOnlySpan<T> ব্যবহার করুন।'
    },
    {
      en: 'Beware of multiple enumeration traps with IEnumerable; materialize deferred LINQ pipelines with ToList() when iterating more than once.',
      bn: 'IEnumerable-এর একাধিকবার পুনরাবৃত্তি ঘটার ফাঁদ সম্পর্কে সতর্ক থাকুন; একাধিকবার লুপ চালানোর প্রয়োজন হলে ToList() দিয়ে ফলাফল মেমোরিতে সংরক্ষণ করুন।'
    },
    {
      en: 'Never block on asynchronous tasks using .Result or .Wait(); always use await to prevent thread pool starvation and synchronization deadlocks.',
      bn: '.Result বা .Wait() দিয়ে অ্যাসিনক্রোনাস টাস্ককে কখনো ব্লক করবেন না; থ্রেড পুল সংকট ও ডেডলক এড়াতে সর্বদা await ব্যবহার করুন।'
    },
    {
      en: 'Employ using declarations (using var resource = ...) for IDisposable and IAsyncDisposable instances to ensure deterministic cleanup.',
      bn: 'IDisposable এবং IAsyncDisposable অবজেক্টের জন্য using ডিক্লারেশন ব্যবহার করুন যাতে কাজ শেষে সাথে সাথে মেমোরি ও হ্যান্ডেল মুক্ত হয়।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the fundamental architectural difference between value types and reference types in C# memory management?',
        bn: 'C# মেমোরি ম্যানেজমেন্টে ভ্যালু টাইপ এবং রেফারেন্স টাইপের মধ্যে মৌলিক আর্কিটেকচারাল পার্থক্য কী?'
      },
      a: {
        en: 'Value types (structs, primitives, enums) directly hold their data and are typically allocated on the execution stack or inline within enclosing types, requiring zero garbage collection overhead. Reference types (classes, records, strings, delegates) store a pointer on the stack pointing to memory dynamically allocated on the managed heap, which is monitored and collected by the CLR Garbage Collector.',
        bn: 'ভ্যালু টাইপ (struct, আদিম ডেটা টাইপ, enum) সরাসরি নিজস্ব ডেটা সংরক্ষণ করে এবং সাধারণত এক্সিকিউশন স্ট্যাকে বা প্যারেন্ট টাইপের ভেতরে ইনলাইনভাবে বরাদ্দ থাকে, ফলে গারবেজ কালেকশনের কোনো প্রয়োজন হয় না। অন্যদিকে রেফারেন্স টাইপ (class, record, string) স্ট্যাকে একটি মেমোরি পয়েন্টার রাখে যা ম্যানেজড হিপ মেমোরির ঠিকানাকে নির্দেশ করে, এবং এই হিপ মেমোরি CLR গারবেজ কালেক্টর দ্বারা নিরীক্ষণ ও পরিষ্কার করা হয়।'
      }
    },
    {
      q: {
        en: 'How does the C# compiler implement async and await under the hood, and what happens to the executing thread during an await?',
        bn: 'C# কম্পাইলার পর্দার আড়ালে কীভাবে async এবং await বাস্তবায়ন করে, এবং await চলার সময় এক্সিকিউটিং থ্রেডের কী ঘটে?'
      },
      a: {
        en: 'The C# Roslyn compiler transforms methods marked with async into a generated state machine struct implementing IAsyncStateMachine. When execution hits an uncompleted await expression, the state machine registers a completion callback on the awaited Task, captures execution context, and releases the executing thread back to the ThreadPool. When the asynchronous operation finishes, the thread pool assigns an available worker thread to resume execution from the recorded state machine milestone.',
        bn: 'C# Roslyn কম্পাইলার async মেথডগুলোকে IAsyncStateMachine ইন্টারফেসযুক্ত একটি স্টেট মেশিন স্ট্রাকচারে রূপান্তরিত করে। যখন এক্সিকিউশন কোনো অসমাপ্ত await এক্সপ্রেশনে পৌঁছায়, তখন স্টেট মেশিনটি Task-এ একটি কলব্যাক রেজিস্টার করে বর্তমান এক্সিকিউটিং থ্রেডটিকে থ্রেড পুলে ফেরত পাঠায়। পরবর্তীতে অ্যাসিনক্রোনাস অপারেশনটি শেষ হলে থ্রেড পুল যেকোনো ফাঁকা থ্রেড দিয়ে স্টেট মেশিনের সংরক্ষিত অবস্থা থেকে পুনরায় কোড চালু করে।'
      }
    },
    {
      q: {
        en: 'What is deferred execution in LINQ, and how does IEnumerable differ from IQueryable?',
        bn: 'LINQ-এ ডিফার্ড এক্সিকিউশন কী, এবং IEnumerable ও IQueryable এর মধ্যকার পার্থক্য কী?'
      },
      a: {
        en: 'Deferred execution means LINQ query expressions are not evaluated when defined; evaluation occurs only when the sequence is actively enumerated (e.g. via foreach, ToList(), or Count()). IEnumerable executes in-process memory using compiled C# delegates on in-memory objects. IQueryable represents an Expression Tree translated by LINQ providers (such as Entity Framework Core) into native remote queries like SQL before executing on the database engine.',
        bn: 'ডিফার্ড এক্সিকিউশন মানে হলো LINQ কুয়েরি তৈরি করার সাথে সাথে তা রান হয় না; বরং যখন ডেটার ওপর লুপ চালানো হয় (যেমন foreach, ToList() বা Count()), তখনই কেবল কুয়েরি কার্যকর হয়। IEnumerable মেমোরিতে থাকা অবজেক্টের ওপর C# ডেলিগেট ব্যবহার করে ফিল্টারিং চালায়। অন্যদিকে IQueryable একটি এক্সপ্রেশন ট্রি ধারণ করে যা Entity Framework Core এর মতো প্রোভাইডারের মাধ্যমে রিমোট ডেটাবেসের জন্য আসল এসকিউএল কুয়েরিতে রূপান্তরিত হয়ে তবেই ডেটাবেসে চলে।'
      }
    },
    {
      q: {
        en: 'What performance advantages does Span<T> introduce in modern C#, and why is it restricted to stack allocation as a ref struct?',
        bn: 'আধুনিক C#-এ Span<T> কোন পারফরম্যান্স সুবিধা প্রদান করে, এবং একটি ref struct হিসেবে এটি কেন কেবল স্ট্যাক মেমোরিতে সীমাবদ্ধ?'
      },
      a: {
        en: 'Span<T> provides a type-safe, memory-safe representation of a contiguous region of arbitrary memory (array, native heap, or stack-allocated memory) without copying data or allocating heap objects. It is declared as a ref struct to ensure its internal managed pointer never escapes to the managed heap, avoiding complex GC tracking and guaranteeing zero-allocation slicing performance.',
        bn: 'Span<T> কোনো নতুন ডেটা কপি না করে বা হিপ মেমোরি খরচ না করে যেকোনো মেমোরি ব্লকের (অ্যারে, নেটিভ হিপ বা স্ট্যাক মেমোরি) একটি নিরাপদ ভিউ প্রদান করে। এটিকে ref struct হিসেবে তৈরি করা হয়েছে যাতে এর ভেতরের মেমোরি পয়েন্টার কখনো হিপ মেমোরিতে যেতে না পারে, ফলে গারবেজ কালেক্টরের কোনো ট্র্যাক রাখার দরকার হয় না এবং শূন্য-অ্যালোকেশনে দ্রুতগতির মেমোরি স্লাইসিং সম্ভব হয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'High-throughput microservices running on ASP.NET Core process millions of HTTP requests per second using Kestrel, Span<T> zero-copy pipelines, and async/await non-blocking thread scheduling.',
      bn: 'ASP.NET Core চালিত মাইক্রোসার্ভিসগুলো Kestrel ওয়েব সার্ভার, Span<T> জিরো-কপি পাইপলাইন এবং async/await নন-ব্লকিং থ্রেড শিডিউলিং ব্যবহার করে প্রতি সেকেন্ডে লক্ষ লক্ষ এইচটিটিপি রিকোয়েস্ট অত্যন্ত দক্ষতার সাথে পরিচালনা করে।'
    },
    {
      en: 'Enterprise cloud architectures deploy Native AOT C# binaries to Kubernetes pods, cutting container startup times from seconds to single-digit milliseconds with minimal RAM footprints.',
      bn: 'এন্টারপ্রাইজ ক্লাউড সিস্টেমে কুবারনেটিস পডে নেটিভ AOT C# বাইনারি ডিপ্লয় করা হয়, যা কনটেইনার স্টার্টআপ সময়কে কয়েক সেকেন্ড থেকে মাত্র কয়েক মিলি-সেকেন্ডে নামিয়ে আনে এবং মেমোরি খরচ সর্বনিম্ন রাখে।'
    },
    {
      en: 'Mission-critical distributed pipelines process real-time financial events using immutable record types, pattern matching switch dispatchers, and resilient retry policies with Polly.',
      bn: 'আর্থিক লেনদেনের গুরুত্বপূর্ণ বিতরণকৃত পাইপলাইনগুলো ইমিউটেবল রেকর্ড টাইপ, প্যাটার্ন ম্যাচিং সুইচ ডিসপ্যাচার এবং পলির (Polly) স্থিতিস্থাপক রিট্রাই পলিসি ব্যবহার করে রিয়েল-টাইম ইভেন্ট প্রসেস করে।'
    },
    {
      en: 'Desktop and game engines like Unity utilize C# to combine intuitive high-level object-oriented logic with high-performance native memory manipulation.',
      bn: 'ইউনিটির (Unity) মতো আধুনিক গেম ইঞ্জিন এবং ডেস্কটপ সফটওয়্যারগুলো C# ব্যবহার করে উচ্চস্তরের অবজেক্ট-ওরিয়েন্টেড কোডের সাথে উচ্চগতির নেটিভ মেমোরি ব্যবস্থাপনার নিখুঁত সমন্বয় ঘটায়।'
    }
  ]
};
