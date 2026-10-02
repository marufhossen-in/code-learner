import type { Hub } from '../../lib/types';
import { CppAndTheClassLesson } from './lessons/cpp-and-the-class';
import { RaiiAndTheGuardLesson } from './lessons/raii-and-the-guard';
import { TemplatesAndTheTypeLesson } from './lessons/templates-and-the-type';
import { StlAndTheVectorLesson } from './lessons/stl-and-the-vector';
import { MoveAndTheRvalueLesson } from './lessons/move-and-the-rvalue';
import { InheritanceAndTheVirtualLesson } from './lessons/inheritance-and-the-virtual';
import { LambdasAndTheCaptureLesson } from './lessons/lambdas-and-the-capture';
import { TheClassForgeLesson } from './lessons/the-class-forge';

export const cppHub: Hub = {
  slug: 'cpp',
  name: 'C++',
  icon: '➕',
  tagline: {
    en: 'High-performance systems programming with zero-cost abstractions, RAII memory management, and modern C++20/C++23 features.',
    bn: 'জিরো-কস্ট অ্যাবস্ট্রাকশন, RAII মেমোরি ম্যানেজমেন্ট এবং আধুনিক C++20/C++23 ফিচার সমৃদ্ধ উচ্চগতির সিস্টেম প্রোগ্রামিং।'
  },
  intro: {
    en: 'C++ is the cornerstone of high-performance computing, game engines, operating systems, and financial trading infrastructures. Blending low-level hardware control with zero-overhead abstractions, C++ allows developers to craft blazingly fast, deterministic software without garbage collection pauses. This track takes you from object-oriented encapsulation and RAII resource management to template metaprogramming, move semantics, standard containers, virtual dispatch, and modern modern functional lambdas.',
    bn: 'উচ্চগতির কম্পিউটিং, গেম ইঞ্জিন, অপারেটিং সিস্টেম এবং ট্রেডিং প্ল্যাটফর্মের প্রধান ভিত্তি হলো C++। মেমোরি ও হার্ডওয়্যারের ওপর সরাসরি নিয়ন্ত্রণ এবং শূন্য-ওভারহেডের অ্যাবস্ট্রাকশনের সমন্বয়ে এটি কোনো প্রকার গার্বেজ কালেকশন বিলম্ব ছাড়াই অবিশ্বাস্য গতিশীল সফটওয়্যার তৈরিতে সাহায্য করে। এই ট্র্যাকে অবজেক্ট ওরিয়েন্টেড ডিজাইন এবং RAII মেমোরি ম্যানেজমেন্ট থেকে শুরু করে টেমপ্লেট মেটা-প্রোগ্রামিং, মুভ সেমান্টিকস, স্ট্যান্ডার্ড কন্টেইনার, ভার্চুয়াল ডিসপ্যাচ এবং আধুনিক ল্যাম্বডা ফাংশনে পূর্ণাঙ্গ দক্ষতা অর্জন করা যায়।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Encapsulation, RAII & Generic Programming',
        bn: 'ধাপ ১ — এনক্যাপসুলেশন, RAII ও জেনেরিক প্রোগ্রামিং'
      },
      items: [
        {
          en: 'Classes, constructors, member initialization lists, and encapsulation access specifiers (public, private, protected)',
          bn: 'ক্লাস, কনস্ট্রাক্টর, মেম্বার ইনিশিয়ালাইজার লিস্ট এবং এনক্যাপসুলেশন অ্যাক্সেস স্পেসিফায়ার (public, private, protected)'
        },
        {
          en: 'Resource Acquisition Is Initialization (RAII), deterministic destruction, and smart pointer wrappers (std::unique_ptr, std::shared_ptr)',
          bn: 'রিসোর্স অ্যাকুইজিশন ইজ ইনিশিয়ালাইজেশন (RAII), স্বয়ংক্রিয় ডেস্ট্রাক্টর এবং স্মার্ট পয়েন্টার (std::unique_ptr, std::shared_ptr)'
        },
        {
          en: 'Template metaprogramming, function and class templates, type deduction, and C++20 concepts for compile-time constraints',
          bn: 'টেমপ্লেট মেটা-প্রোগ্রামিং, ফাংশন ও ক্লাস টেমপ্লেট, টাইপ ডিডাকশন এবং কম্পাইল-টাইম শর্তে C++20 কনসেপ্টস'
        },
        {
          en: 'Rule of Zero / Three / Five: mastering copy constructors, assignment operators, and destructor resource lifetimes',
          bn: 'রুল অব জিরো / থ্রি / ফাইভ: কপি কনস্ট্রাক্টর, অ্যাসাইনমেন্ট অপারেটর এবং ডেস্ট্রাক্টরের মাধ্যমে রিসোর্স নিয়ন্ত্রণ'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Move Semantics, Containers & Polymorphism',
        bn: 'ধাপ ২ — মুভ সেমান্টিকস, কন্টেইনার ও পলিমরফিজম'
      },
      items: [
        {
          en: 'Standard Template Library (STL): std::vector dynamic array mechanics, memory capacity doubling, and cache locality',
          bn: 'স্ট্যান্ডার্ড টেমপ্লেট লাইব্রেরি (STL): std::vector ডাইনামিক অ্যারে, ক্যাপাসিটি বৃদ্ধি এবং ক্যাশ লোকালিটি সুবিধা'
        },
        {
          en: 'Move semantics, rvalue references (T&&), std::move, and perfect forwarding (std::forward) eliminating deep memory copies',
          bn: 'মুভ সেমান্টিকস, rvalue রেফারেন্স (T&&), std::move এবং পারফেক্ট ফরওয়ার্ডিং (std::forward) দিয়ে ভারী মেমোরি কপি দূরীকরণ'
        },
        {
          en: 'Object-oriented inheritance, virtual member functions, virtual table (vtable) dispatch, and abstract base interfaces',
          bn: 'অবজেক্ট ওরিয়েন্টেড ইনহেরিটেন্স, ভার্চুয়াল ফাংশন, ভার্চুয়াল টেবিল (vtable) ডিসপ্যাচ এবং অ্যাবস্ট্রাক্ট বেস ইন্টারফেস'
        },
        {
          en: 'Associative and unordered containers: std::map (Red-Black tree) vs std::unordered_map (O(1) hash table bucket hashing)',
          bn: 'অ্যাসোসিয়েটিভ ও আনঅর্ডার্ড কন্টেইনার: std::map (রেড-ব্ল্যাক ট্রি) বনাম std::unordered_map (O(1) হ্যাশ টেবিল বাকেট)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Modern C++20/C++23 & Production Systems',
        bn: 'ধাপ ৩ — আধুনিক C++20/C++23 ও প্রোডাকশন সিস্টেম'
      },
      items: [
        {
          en: 'Modern functional programming: stateless and stateful lambda expressions, capture clauses ([&], [=]), and std::function',
          bn: 'আধুনিক ফাংশনাল প্রোগ্রামিং: স্টেটলেস ও স্টেটফুল ল্যাম্বডা এক্সপ্রেশন, ক্যাপচার ক্লজ ([&], [=]) এবং std::function'
        },
        {
          en: 'Compile-time evaluation: constexpr, consteval, and constinit executing logic during compilation with zero runtime footprint',
          bn: 'কম্পাইল-টাইম এক্সিকিউশন: constexpr, consteval ও constinit ব্যবহার করে রানটাইম খরচ ছাড়া কম্পাইলেশনের সময়ই হিসাব সম্পন্ন'
        },
        {
          en: 'Systems concurrency: std::jthread, std::atomic lock-free operations, memory ordering, and condition variables',
          bn: 'সিস্টেমস কনকারেন্সি: std::jthread, std::atomic লক-ফ্রি অপারেশন, মেমোরি অর্ডারিং এবং কন্ডিশন ভ্যারিয়েবল'
        },
        {
          en: 'Production toolchains, CMake build systems, compiler sanitizers (-fsanitize=address,undefined), and memory profiling',
          bn: 'প্রোডাকশন টুলচেন, CMake বিল্ড সিস্টেম, কম্পাইলার স্যানিটাইজার (-fsanitize=address,undefined) ও মেমোরি প্রোফাইলিং'
        }
      ]
    }
  ],
  lessons: [
    CppAndTheClassLesson,
    RaiiAndTheGuardLesson,
    TemplatesAndTheTypeLesson,
    StlAndTheVectorLesson,
    MoveAndTheRvalueLesson,
    InheritanceAndTheVirtualLesson,
    LambdasAndTheCaptureLesson,
    TheClassForgeLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Lock-Free Circular Ring Buffer (C++20 std::atomic)',
        bn: 'লক-ফ্রি সার্কুলার রিং বাফার (C++20 std::atomic)'
      },
      brief: {
        en: 'Design and implement a single-producer single-consumer (SPSC) lock-free ring buffer utilizing C++20 atomic operations and acquire-release memory order for ultra-low latency inter-thread communication.',
        bn: 'C++20 অ্যাটমিক অপারেশন এবং অ্যাকোয়ার-রিলিজ মেমোরি অর্ডার ব্যবহার করে একটি একক-উৎপাদক একক-ভোক্তা (SPSC) লক-ফ্রি রিং বাফার তৈরি করুন যা থ্রেডের মাঝে অতি দ্রুত ডেটা আদান-প্রদান নিশ্চিত করে।'
      }
    },
    {
      title: {
        en: 'Custom RAII Smart Pointer Suite (UniquePtr & SharedPtr)',
        bn: 'কাস্টম RAII স্মার্ট পয়েন্টার স্যুট (UniquePtr ও SharedPtr)'
      },
      brief: {
        en: 'Engineer a custom implementation of std::unique_ptr with custom deleters and std::shared_ptr with thread-safe atomic reference counting blocks, preventing all memory leaks and double-free hazards.',
        bn: 'কাস্টম ডিলিটারসহ std::unique_ptr এবং থ্রেড-নিরাপদ অ্যাটমিক রেফারেন্স কাউন্টিং কন্ট্রোল ব্লকসহ std::shared_ptr বাস্তবায়ন করুন, যা সমস্ত মেমোরি লিক ও ডাবল-ফ্রি সমস্যা দূর করে।'
      }
    },
    {
      title: {
        en: 'Multithreaded Task Scheduler & Worker Pool',
        bn: 'মাল্টিথ্রেডেড টাস্ক শিডিউলার ও ওয়ার্কার পুল'
      },
      brief: {
        en: 'Construct a scalable thread pool executing asynchronous tasks with std::future return types, condition variables, and graceful RAII shutdown mechanics.',
        bn: 'std::future রিটার্ন টাইপ, কন্ডিশন ভ্যারিয়েবল এবং নিরাপদ RAII শাটডাউন ব্যবস্থাপনা ব্যবহার করে একটি উচ্চ ক্ষমতাসম্পন্ন মাল্টিথ্রেডেড ওয়ার্কার পুল ও টাস্ক শিডিউলার তৈরি করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Embrace the Rule of Zero: design classes composed of standard RAII types (std::unique_ptr, std::string, std::vector) so the compiler synthesizes correct destructors and copy/move operations automatically.',
      bn: 'রুল অব জিরো মেনে চলুন: ক্লাস তৈরিতে স্ট্যান্ডার্ড RAII টাইপ (std::unique_ptr, std::string, std::vector) ব্যবহার করুন যাতে কম্পাইলার নিজে থেকেই নিখুঁত ডেস্ট্রাক্টর ও কপি/মুভ অপারেশন তৈরি করতে পারে।'
    },
    {
      en: 'Never use raw new and delete in application code; always allocate dynamically managed objects using std::make_unique or std::make_shared for exception safety and single-allocation efficiency.',
      bn: 'অ্যাপ্লিকেশন কোডে কখনোই ম্যানুয়াল new এবং delete ব্যবহার করবেন না; এক্সেপশন নিরাপত্তা ও মেমোরি সাশ্রয়ের জন্য সর্বদা std::make_unique বা std::make_shared ব্যবহার করুন।'
    },
    {
      en: 'Pass large non-primitive arguments by const reference (const T&) to prevent expensive deep copies, and pass primitive scalars (int, double, pointers) by value.',
      bn: 'ভারী নন-প্রিমিটিভ ডেটা অপ্রয়োজনীয় কপি এড়াতে কনস্ট রেফারেন্স (const T&) দিয়ে পাঠান এবং সাধারণ স্কেলার টাইপগুলোকে (int, double, pointer) মান বা ভ্যালু আকারে পাঠান।'
    },
    {
      en: 'Mark non-throwing move constructors and move assignment operators as noexcept to enable standard containers like std::vector to safely move elements during reallocation rather than copying.',
      bn: 'মুভ কনস্ট্রাক্টর ও মুভ অ্যাসাইনমেন্ট অপারেটরগুলোতে noexcept যুক্ত করুন যাতে std::vector রিলোকেশনের সময় কপি না করে দ্রুত মুভ অপারেশন চালাতে পারে।'
    },
    {
      en: 'Declare base class destructors as virtual whenever a class contains any virtual functions, preventing undefined behavior and partial object destruction during polymorphic deletion.',
      bn: 'কোনো ক্লাসে ভার্চুয়াল ফাংশন থাকলে তার বেস ক্লাস ডেস্ট্রাক্টরকে সর্বদা virtual ঘোষণা করুন, যা পলিমরফিক ডিলিশনের সময় অসম্পূর্ণ ধ্বংসজনিত মেমোরি বিপর্যয় রোধ করে।'
    },
    {
      en: 'Leverage constexpr and C++20 concepts to enforce compile-time invariants and type constraints, shifting runtime assertion failures into immediate compile-time errors.',
      bn: 'কম্পাইল-টাইম শর্ত ও টাইপ নিরাপত্তার জন্য constexpr এবং C++20 কনসেপ্টস ব্যবহার করুন, যা রানটাইম ব্যর্থতাকে কম্পাইলেশনের সময়ই তাৎক্ষণিক এরর হিসেবে চিহ্নিত করে।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is RAII (Resource Acquisition Is Initialization) in C++, and how does it prevent resource leaks in the presence of exceptions?',
        bn: 'C++ এ RAII (রিসোর্স অ্যাকুইজিশন ইজ ইনিশিয়ালাইজেশন) কী এবং এক্সেপশন বা ত্রুটি ঘটলেও এটি কীভাবে মেমোরি ও রিসোর্স লিক প্রতিরোধ করে?'
      },
      a: {
        en: 'RAII binds the lifecycle of a resource (heap memory, file handles, mutex locks) to the lifetime of a stack-allocated object. The resource is acquired in the constructor and guaranteed to be released in the destructor. When a function exits or an exception causes stack unwinding, destructors of all local stack objects are invoked deterministically by the runtime, ensuring resources are never leaked.',
        bn: 'RAII যেকোনো রিসোর্সের (হিপ মেমোরি, ফাইল হ্যান্ডেল, মিউটেক্স লক) স্থায়িত্বকে স্ট্যাক অবজেক্টের লাইফসাইকেলের সাথে আবদ্ধ করে। অবজেক্টের কনস্ট্রাক্টরে রিসোর্স বরাদ্দ হয় এবং ডেস্ট্রাক্টরে অবমুক্ত হয়। ফাংশন শেষ হলে বা এক্সেপশনের কারণে স্ট্যাক আনওয়াইন্ডিং ঘটলেও রানটাইম নিশ্চিতভাবে লোকাল অবজেক্টগুলোর ডেস্ট্রাক্টর চালায়, ফলে কোনো অবস্থাতেই রিসোর্স লিক হয় না।'
      }
    },
    {
      q: {
        en: 'What is the mechanical difference between std::unique_ptr and std::shared_ptr, and what is the overhead of each?',
        bn: 'std::unique_ptr এবং std::shared_ptr-এর মধ্যকার যান্ত্রিক পার্থক্য কী এবং প্রতিটিতে কী পরিমাণ মেমোরি ওভারহেড থাকে?'
      },
      a: {
        en: 'std::unique_ptr represents exclusive, single ownership with zero runtime overhead (it occupies the exact same 8 bytes as a raw pointer and requires no control block). std::shared_ptr provides shared ownership via reference counting, requiring a heap-allocated control block holding strong references, weak references, and deleters, introducing atomic increment/decrement overhead on copies and 16 bytes of pointer storage.',
        bn: 'std::unique_ptr হলো একক মালিকানাধীন স্মার্ট পয়েন্টার যাতে কোনো অতিরিক্ত ওভারহেড থাকে না (এটি সাধারণ র\' পয়েন্টারের মতো ঠিক ৮ বাইট জায়গা নেয় এবং কোনো কন্ট্রোল ব্লক লাগে না)। অন্যদিকে std::shared_ptr রেফারেন্স কাউন্টিংয়ের মাধ্যমে যৌথ মালিকানা দেয়, যার জন্য হিপে অতিরিক্ত কন্ট্রোল ব্লক ও অ্যাটমিক অপারেশনের ওভারহেড থাকে এবং এটি মেমোরিতে ১৬ বাইট জায়গা দখল করে।'
      }
    },
    {
      q: {
        en: 'How do move semantics and std::move eliminate unnecessary deep copies in modern C++?',
        bn: 'মুভ সেমান্টিকস এবং std::move আধুনিক C++ এ কীভাবে অপ্রয়োজনীয় ডিপ কপি দূর করে?'
      },
      a: {
        en: 'Prior to C++11, passing or returning temporary objects forced expensive deep copies of underlying heap buffers. Move semantics allows an object to "steal" raw internal pointers and resources from an expiring rvalue temporary without duplicating heap memory. std::move is an unconditional static_cast converting an lvalue into an rvalue reference (T&&), signaling to the compiler that the source object can be scavenged safely.',
        bn: 'C++11 এর পূর্বে সাময়িক অবজেক্ট পাস বা রিটার্ন করার সময় হিপ বাফারের সম্পূর্ণ মেমোরি নতুন করে কপি করতে হতো। মুভ সেমান্টিকস একটি অবজেক্টকে মেয়াদোত্তীর্ণ rvalue থেকে হিপের মূল পয়েন্টারগুলো সরাসরি "চুরি" বা স্থানান্তর করার সুযোগ দেয়। std::move হলো মূলত একটি static_cast যা lvalue-কে rvalue রেফারেন্সে (T&&) রূপান্তর করে কম্পাইলারকে জানায় যে উৎস অবজেক্টটির রিসোর্স নিরাপদে নিয়ে নেওয়া সম্ভব।'
      }
    },
    {
      q: {
        en: 'How does dynamic polymorphism work under the hood via the Virtual Method Table (vtable)?',
        bn: 'ভার্চুয়াল মেথড টেবিল (vtable)-এর মাধ্যমে নেপথ্যে ডাইনামিক পলিমরফিজম কীভাবে কাজ করে?'
      },
      a: {
        en: 'When a class declares a virtual function, the compiler inserts a hidden virtual pointer (vptr) into each object instance and constructs a static virtual method table (vtable) per class containing function pointers to the most-derived implementations. Calling a virtual method resolves through two memory indirections: dereferencing the object vptr to find the vtable, then jumping to the function pointer offset, enabling dynamic runtime dispatch with minimal CPU cycle overhead.',
        bn: 'কোনো ক্লাসে ভার্চুয়াল ফাংশন ঘোষণা করা হলে কম্পাইলার প্রতিটি অবজেক্টের ভেতর একটি গোপন ভার্চুয়াল পয়েন্টার (vptr) বসিয়ে দেয় এবং ক্লাস প্রতি একটি স্ট্যাটিক ভার্চুয়াল টেবিল (vtable) তৈরি করে যা সঠিক ফাংশন পয়েন্টার ধরে রাখে। রানটাইমে ভার্চুয়াল মেথড কল করলে অবজেক্টের vptr থেকে vtable খুঁজে নিয়ে নির্দিষ্ট অফসেটের ফাংশন পয়েন্টারে জাম্প করা হয়, যা সামান্যতম ইনডিরেকশনে নিখুঁত পলিমরফিজম নিশ্চিত করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Chromium & Google V8 Engine: C++ powers the high-speed JIT machine code compiler, JavaScript object model, and Garbage Collector runtime executing millions of lines of web code.',
      bn: 'ক্রোমিয়াম ও গুগল V8 ইঞ্জিন: উচ্চগতির JIT মেশিন কোড কম্পাইলার, জাভাস্ক্রিপ্ট অবজেক্ট মডেল এবং রিয়েল-টাইম গার্বেজ কালেক্টর পরিচালনা করতে C++ ব্যবহৃত হয়।'
    },
    {
      en: 'Unreal Engine 5: Nanite virtualized micro-polygon geometry and Lumen dynamic global illumination render photorealistic scenes at 60+ FPS via zero-overhead C++ architectures.',
      bn: 'আনরিয়েল ইঞ্জিন ৫: ন্যানাইট ভার্চুয়ালাইজড জিওমেট্রি এবং লুমেন ডাইনামিক লাইটিং সিস্টেম C++ এর জিরো-ওভারহেড আর্কিটেকচারের মাধ্যমে ৬০+ এফপিএসে বাস্তবসম্মত দৃশ্য ফুটিয়ে তোলে।'
    },
    {
      en: 'High-Frequency Trading (HFT): Proprietary trading firms utilize C++ template metaprogramming, cache-line aligned structs, and kernel-bypass networking to execute market orders in under 500 nanoseconds.',
      bn: 'হাই-ফ্রিকোয়েন্সি ট্রেডিং (HFT): শীর্ষস্থানীয় ট্রেডিং প্রতিষ্ঠানগুলো টেমপ্লেট মেটা-প্রোগ্রামিং ও ক্যাশ-অ্যালাইন্ড ডেটা ব্যবহার করে ৫০০ ন্যানোসেকেন্ডেরও কম সময়ে শেয়ার বাজারের অর্ডার কার্যকর করে।'
    },
    {
      en: 'PyTorch & TensorFlow Runtimes: Deep learning frameworks write their core tensor computing backends, CUDA GPU kernels, and distributed training graphs in highly optimized C++.',
      bn: 'পাইটর্চ ও টেনসরফ্লো ব্যাকএন্ড: ডিপ লার্নিং ফ্রেমওয়ার্কগুলোর মূল টেনসর গণনা, কুডা (CUDA) জিপিইউ কার্নেল এবং ডিস্ট্রিবিউটেড ট্রেনিং গ্রাফ অপ্টিমাইজড C++ এ তৈরি।'
    }
  ]
};
