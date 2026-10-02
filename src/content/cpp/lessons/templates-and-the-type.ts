import type { Lesson } from '../../../lib/types';

export const TemplatesAndTheTypeLesson: Lesson = {
  slug: 'templates-and-the-type',
  tech: 'cpp',
  title: {
    en: 'Templates & Generic Metaprogramming — Type Deduction, Specialization & Concepts',
    bn: 'টেমপ্লেট ও জেনেরিক মেটা-প্রোগ্রামিং — টাইপ ডিডাকশন, স্পেশালাইজেশন ও কনসেপ্টস'
  },
  summary: {
    en: 'Templates in C++ power zero-overhead generic metaprogramming by shifting code generation from human developers to the compiler. Rather than relying on runtime dynamic dispatch or unsafe C void pointers, C++ templates function as compile-time blueprints. When instantiated, the compiler executes "monomorphization", generating specialized, strongly-typed machine code for each unique concrete type. Function templates automatically deduce parameter types, class templates containerize heterogeneous payloads, and full or partial specializations customize algorithms for hardware-optimized representations. Modern C++20 introduces Concepts and requires clauses, replacing cryptic template compiler diagnostics with clear compile-time semantic contracts.',
    bn: 'C++ এ টেমপ্লেট কোনো প্রকার রানটাইম ওভারহেড ছাড়াই জেনেরিক মেটা-প্রোগ্রামিংয়ের অবিশ্বাস্য ক্ষমতা প্রদান করে, যা কোড তৈরির ভার প্রোগ্রামার থেকে কম্পাইলারের ওপর ন্যস্ত করে। রানটাইম ডাইনামিক ডিসপ্যাচ বা সি-এর অনিরাপদ void পয়েন্টারের ওপর নির্ভর না করে C++ টেমপ্লেট একটি কম্পাইল-টাইম ব্লুপ্রিন্ট হিসেবে কাজ করে। ব্যবহারের সময় কম্পাইলার "মনোমর্ফাইজেশন" সম্পন্ন করে প্রতিটি অনন্য টাইপের জন্য পৃথক ও শতভাগ টাইপ-নিরাপদ মেশিন কোড প্রস্তুত করে। ফাংশন টেমপ্লেট স্বয়ংক্রিয়ভাবে টাইপ নির্ণয় করে, ক্লাস টেমপ্লেট ডেটা কন্টেইনার তৈরি করে এবং স্পেশালাইজেশন নির্দিষ্ট টাইপের জন্য বিশেষায়িত পারফরম্যান্স নিশ্চিত করে। আধুনিক C++20 এর কনসেপ্টস (Concepts) ও requires ক্লজ পূর্বেকার দুর্বোধ্য কম্পাইলার ত্রুটি দূর করে অত্যন্ত পরিষ্কার কম্পাইল-টাইম চুক্তি নিশ্চিত করেছে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Parametric Polymorphism and Blueprints',
        bn: 'মূল ধারণা: প্যারামেট্রিক পলিমরফিজম ও ব্লুপ্রিন্ট'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'When you build reusable data structures and algorithms in C++, writing duplicate code for different data types introduces maintenance nightmares and code bloat. In languages like C, generic code relies on unsafe void pointers that discard type checking. In C++, templates solve this challenge through compile-time parametric polymorphism, generating specialized machine code with zero runtime overhead.',
        bn: 'C++ এ যখন আপনি পুনর্ব্যবহারযোগ্য ডেটা স্ট্রাকচার এবং অ্যালগরিদম তৈরি করেন, তখন প্রতিটি আলাদা ডেটা টাইপের জন্য বারবার একই কোড লেখা কঠিন রক্ষণাবেক্ষণ ও ত্রুটির কারণ হয়। সি ভাষায় জেনেরিক কোড লিখতে অনিরাপদ void পয়েন্টার ব্যবহার করতে হতো যা কম্পাইলার টাইপ চেকিং নষ্ট করে দেয়। কিন্তু C++ এ টেমপ্লেট কম্পাইল-টাইম প্যারামেট্রিক পলিমরফিজমের মাধ্যমে এই সমস্যার সমাধান করে, যা শূন্য রানটাইম খরচে প্রতিটি টাইপের জন্য বিশেষায়িত মেশিন কোড তৈরি করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Template Blueprint',
          def: {
            en: 'A parameterized definition for a function or class that instructs the compiler how to generate concrete type implementations',
            bn: 'একটি ফাংশন বা ক্লাসের প্যারামিটারযুক্ত কাঠামো যা কম্পাইলারকে সুনির্দিষ্ট টাইপের বাস্তবায়ন কোড তৈরির নির্দেশ দেয়'
          }
        },
        {
          term: 'Monomorphization',
          def: {
            en: 'The compiler process of stamping out distinct concrete machine-code functions for every unique type used with a template',
            bn: 'টেমপ্লেটে ব্যবহৃত প্রতিটি ভিন্ন ডেটা টাইপের জন্য কম্পাইলার কর্তৃক আলাদা আলাদা মেশিন কোড তৈরির স্বয়ংক্রিয় প্রক্রিয়া'
          }
        },
        {
          term: 'Template Specialization',
          def: {
            en: 'Providing an alternative, custom implementation of a template tailored specifically for a particular data type or pointer pattern',
            bn: 'কোনো নির্দিষ্ট ডেটা টাইপ বা পয়েন্টারের জন্য টেমপ্লেটের সাধারণ আচরণের বিকল্প হিসেবে বিশেষায়িত কোড প্রদান করা'
          }
        },
        {
          term: 'C++20 Concept',
          def: {
            en: 'A named compile-time predicate that validates whether a template type argument satisfies required operations and properties',
            bn: 'C++20 এর একটি কম্পাইল-টাইম শর্ত যা যাচাই করে টেমপ্লেটে আসা ডেটা টাইপটি প্রয়োজনীয় মেথড ও বৈশিষ্ট্য ধারণ করে কিনা'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'monomorphization-mechanics',
      text: {
        en: 'Monomorphization: Zero-Cost Performance at Compile Time',
        bn: 'মনোমর্ফাইজেশন: কম্পাইল টাইমে শূন্য খরচের গতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike Java or C# where generic collections store references boxed on the heap, C++ does not erase types at runtime. When you instantiate a generic Stack<int> and a Stack<string>, the compiler generates two completely independent classes in the binary.',
        bn: 'জাভা বা সি#-এর মতো আধুনিক ভাষায় যেখানে জেনেরিক কালেকশনগুলো হিপে রেফারেন্স বক্স করে সংরক্ষণ করে, C++ সেখানে রানটাইমে টাইপ মুছে ফেলে না। যখন আপনি জেনেরিক Stack<int> এবং Stack<string> ব্যবহার করেন, কম্পাইলার বাইনারির ভেতর দুটি সম্পূর্ণ স্বাধীন ও স্বতন্ত্র ক্লাস তৈরি করে নেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because the compiler possesses full type information for Stack<int>, it inlines operations and optimizes CPU register usage. Calling a template function incurs exactly 0 CPU cycles of virtual method lookup or pointer indirection overhead.',
        bn: 'Stack<int>-এর ক্ষেত্রে কম্পাইলারের কাছে ডেটার পূর্ণ টাইপ তথ্য সরাসরি থাকার কারণে এটি অপারেশনগুলো ইনলাইন করতে পারে এবং সিপিইউ রেজিস্টার সর্বোচ্চ দক্ষতায় ব্যবহার করে। ফলে টেমপ্লেট ফাংশন চালাতে ভার্চুয়াল টেবিল বা পয়েন্টার ইনডিরেকশনের পেছনে অতিরিক্ত ০ ক্লক সাইকেল খরচ হয়।'
      }
    },
    {
      type: 'heading',
      id: 'cpp20-concepts',
      text: {
        en: 'Modern C++20 Concepts: Clean Compile-Time Contracts',
        bn: 'আধুনিক C++20 কনসেপ্টস: পরিচ্ছন্ন কম্পাইল-টাইম চুক্তি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Historically, invalid template usage produced cascades of hundreds of lines of cryptic compiler error messages. C++20 Concepts revolutionize template authoring by introducing explicit compile-time type constraints via the requires clause.',
        bn: 'অতীতে টেমপ্লেটে ভুল টাইপ ব্যবহার করলে কম্পাইলার শত শত লাইনের দুর্বোধ্য ত্রুটি বার্তা প্রদর্শন করত। C++20 কনসেপ্টস requires ক্লজের মাধ্যমে স্পষ্ট কম্পাইল-টাইম শর্ত আরোপ করে টেমপ্লেট লেখায় এক যুগান্তকারী বিপ্লব এনেছে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Declaring template <typename T> requires std::integral<T> T add(T a, T b) guarantees that invoking add(15, 25) succeeds, while attempting to pass string arguments triggers an immediate, single-line error: "constraints not satisfied".',
        bn: 'template <typename T> requires std::integral<T> T add(T a, T b) লিখলে নিশ্চিত হয় যে add(15, 25) শতভাগ সফলভাবে চলবে, কিন্তু কোনো স্ট্রিং পাঠালে কম্পাইলার সাথে সাথে এক লাইনের পরিষ্কার এরর দেবে: "constraints not satisfied"।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Generic Programming Paradigms',
        bn: 'কাঠামোগত তুলনা: জেনেরিক প্রোগ্রামিং পদ্ধতিসমূহ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Generic Mechanism', bn: 'জেনেরিক কৌশল' },
        { en: 'Type Safety Checking', bn: 'টাইপ নিরাপত্তা যাচাই' },
        { en: 'Runtime Memory Overhead', bn: 'রানটাইম মেমোরি ওভারহেড' },
        { en: 'Code Specialization', bn: 'মেশিন কোড বিশেষায়ন' }
      ],
      rows: [
        [
          { en: 'C++ Templates', bn: 'C++ টেমপ্লেট (C++ Templates)' },
          { en: 'Strict compile-time verification via concepts', bn: 'কনসেপ্টসের মাধ্যমে কঠোর কম্পাইল-টাইম যাচাই' },
          { en: 'Zero runtime overhead (inlined machine code)', bn: 'শূন্য রানটাইম ওভারহেড (ইনলাইন মেশিন কোড)' },
          { en: 'Full monomorphization; unique binary per type', bn: 'পূর্ণ মনোমর্ফাইজেশন; প্রতি টাইপে নিজস্ব কোড' }
        ],
        [
          { en: 'Java / C# Generics', bn: 'জাভা / সি# জেনেরিকস' },
          { en: 'Compiler checked, erased to Object at runtime', bn: 'কম্পাইলারে যাচাই, রানটাইমে অবজেক্টে রূপান্তর' },
          { en: 'Boxing, pointer indirection, and heap overhead', bn: 'বক্সিং, পয়েন্টার ইনডিরেকশন ও হিপের খরচ' },
          { en: 'Single shared bytecode representation', bn: 'সবার জন্য একটি একক শেয়ার্ড বাইটকোড' }
        ],
        [
          { en: 'C void * Pointers', bn: 'সি void * পয়েন্টার' },
          { en: 'Zero type checking (developer casts blindly)', bn: 'কোনো টাইপ চেকিং নেই (অন্ধভাবে কাস্ট করা)' },
          { en: 'Pointer dereferencing penalty on every read', bn: 'প্রতিবার পড়ার সময় পয়েন্টার ইনডিরেকশন' },
          { en: 'Single unoptimized function pointer callback', bn: 'একটি একক অপ্টিমাইজেশনহীন কলব্যাক ফাংশন' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Generic Stack & C++20 Concepts',
        bn: 'বাস্তব কোড সিমুলেশন: জেনেরিক স্ট্যাক ও C++20 কনসেপ্টস'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of C++ Templates, Monomorphization & Concepts in Node.js

class SimGenericStack {
  public items: any[] = [];

  constructor(public typeName: string, public capacity = 4) {}

  push(item: any) {
    if (this.items.length >= this.capacity) {
      throw new Error('Stack overflow in Stack<' + this.typeName + '>');
    }
    this.items.push(item);
  }

  pop(): any {
    return this.items.pop();
  }

  size(): number {
    return this.items.length;
  }
}

// Simulating compiler monomorphization: stamping out 2 distinct concrete types
const intStack = new SimGenericStack('int', 4);
intStack.push(10);
intStack.push(20);
intStack.push(30);

const stringStack = new SimGenericStack('string', 4);
stringStack.push('alpha');
stringStack.push('beta');

// Simulating C++20 Concept constraint check: std::integral
function simulatedConstrainedAdd(a: any, b: any): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Compile-time constraint violation: type does not satisfy std::integral concept');
  }
  return a + b;
}

const sumResult = simulatedConstrainedAdd(15, 25); // 40
const intStackSize = intStack.size(); // 3
const strStackSize = stringStack.size(); // 2

console.log('Total elements stored in monomorphized Stack<int> instance:', intStackSize);
// -> Total elements stored in monomorphized Stack<int> instance: 3
console.log('Total elements stored in monomorphized Stack<string> instance:', strStackSize);
// -> Total elements stored in monomorphized Stack<string> instance: 2
console.log('Result of C++20 concept-constrained addition (15 + 25):', sumResult);
// -> Result of C++20 concept-constrained addition (15 + 25): 40
console.log('Runtime indirection overhead of C++ templates in CPU cycles: 0');
// -> Runtime indirection overhead of C++ templates in CPU cycles: 0`,
      caption: {
        en: 'Simulation: Stack<int> stores 3 elements; Stack<string> stores 2 elements; C++20 concept add(15, 25) yields 40; runtime indirection is 0 cycles',
        bn: 'সিমুলেশন: Stack<int>-এ ৩টি উপাদান; Stack<string>-এ ২টি উপাদান; C++20 কনসেপ্টে add(15, 25) দেয় ৪০; রানটাইম ইনডিরেকশন ০ সাইকেল'
      }
    },
    {
      type: 'heading',
      id: 'best-practices',
      text: {
        en: 'Production Implementation Rules',
        bn: 'প্রোডাকশন বাস্তবায়নের গুরুত্বপূর্ণ নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 1: Place template definitions in header files (.hpp). Because the compiler must inspect the complete template implementation to monomorphize types, separating code into .cpp files causes linker errors.',
        bn: 'নিয়ম ১: টেমপ্লেট সংজ্ঞা সর্বদা হেডার ফাইলে (.hpp) রাখুন। ভিন্ন টাইপের জন্য কোড তৈরি করতে কম্পাইলারের পুরো টেমপ্লেট বডি পড়ার প্রয়োজন হয়, তাই .cpp ফাইলে আলাদা করলে লিংকার এরর হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Restrict template parameters with C++20 concepts. Applying requires std::same_as or std::floating_point catches invalid type substitutions early and produces human-readable compiler diagnostics.',
        bn: 'নিয়ম ২: C++20 কনসেপ্টস দিয়ে টেমপ্লেটের টাইপ সীমিত করুন। requires std::same_as বা std::floating_point ব্যবহার করলে অনুপযুক্ত টাইপ শুরুতেই ধরা পড়ে এবং পরিষ্কার এরর মেসেজ পাওয়া যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Use constexpr if (if constexpr (condition)) for compile-time branch pruning. Unlike standard runtime if statements, false branches in constexpr if are discarded during compilation without being compiled.',
        bn: 'নিয়ম ৩: কম্পাইল-টাইম ব্রাঞ্চিংয়ের জন্য constexpr if (if constexpr) ব্যবহার করুন। সাধারণ রানটাইম if-এর বিপরীত, constexpr if-এর মিথ্যা ব্রাঞ্চ কম্পাইলেশনের সময়ই পুরোপুরি বাদ দেওয়া হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Beware of binary template bloat. Monomorphizing heavily parameterized templates across hundreds of types increases binary size; hoist non-type-dependent helper logic into non-templated base classes.',
        bn: 'নিয়ম ৪: অতিরিক্ত টেমপ্লেট ব্যবহারের ফলে বাইনারি ফাইলের আকার স্ফীতি এড়িয়ে চলুন। শত শত টাইপে টেমপ্লেট ব্যবহার ফাইলের সাইজ বাড়িয়ে দেয়; টাইপ-নিরপেক্ষ সাধারণ কোড সাধারণ বেস ক্লাসে সরিয়ে আনুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'cpp-tmpl-ex1',
      kind: 'mcq',
      topic: 'The monomorphization process in C++ template compilation',
      question: {
        en: 'What occurs during the compilation process when a C++ template function is called with multiple distinct types (e.g. max(10, 20) and max(3.14, 2.71))?',
        bn: 'C++ এ ভিন্ন ভিন্ন ডেটা টাইপ দিয়ে একটি টেমপ্লেট ফাংশন কল করলে (যেমন max(10, 20) এবং max(3.14, 2.71)) কম্পাইলেশন চলাকালীন কী ঘটে?'
      },
      options: [
        {
          en: 'The compiler monomorphizes the template, generating two distinct, optimized concrete functions in machine code: one for int and one for double',
          bn: 'কম্পাইলার টেমপ্লেটটিকে মনোমর্ফাইজ করে মেশিন কোডে দুটি আলাদা ও অপ্টিমাইজড বাস্তব ফাংশন তৈরি করে: একটি int-এর জন্য এবং একটি double-এর জন্য'
        },
        {
          en: 'The compiler casts all numbers to strings and evaluates them using JavaScript',
          bn: 'কম্পাইলার সমস্ত সংখ্যাকে স্ট্রিং বানিয়ে জাভাস্ক্রিপ্ট দিয়ে মূল্যায়ন করে'
        },
        {
          en: 'The program crashes because templates cannot accept two different types',
          bn: 'প্রোগ্রামটি ক্র্যাশ করে কারণ টেমপ্লেট কখনো দুটি ভিন্ন টাইপ গ্রহণ করতে পারে না'
        },
        {
          en: 'The computer sound card produces an error tone',
          bn: 'কম্পিউটারের সাউন্ড কার্ড একটি সতর্কবার্তা শব্দ বাজায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Compiler generates dedicated machine code for each concrete type.',
        bn: 'কম্পাইলার প্রতিটি নির্দিষ্ট টাইপের জন্য নিজস্ব মেশিন কোড তৈরি করে।'
      },
      explanation: {
        en: 'Monomorphization generates a tailored implementation for every unique type passed to a template, ensuring type safety and native hardware speed.',
        bn: 'মনোমর্ফাইজেশন টেমপ্লেটে ব্যবহৃত প্রতিটি টাইপের জন্য সুনির্দিষ্ট কোড তৈরি করে, যা টাইপ নিরাপত্তা ও হার্ডওয়্যারের সর্বোচ্চ গতি নিশ্চিত করে।'
      }
    },
    {
      id: 'cpp-tmpl-ex2',
      kind: 'mcq',
      topic: 'Why template definitions must reside in header files',
      question: {
        en: 'Why must C++ template definitions typically be placed entirely in header files (.hpp) rather than separated into .cpp implementation files?',
        bn: 'C++ এ টেমপ্লেটের সম্পূর্ণ সংজ্ঞা কেন .cpp ফাইলে আলাদা না করে হেডার ফাইলেই (.hpp) রাখা আবশ্যক?'
      },
      options: [
        {
          en: 'The compiler needs access to the complete template source code at the call site to instantiate the specialized concrete class or function for that specific type',
          bn: 'নির্দিষ্ট টাইপের জন্য বিশেষায়িত ক্লাস বা ফাংশন তৈরি করতে কল করার স্থানেই কম্পাইলারের পুরো টেমপ্লেট সোর্স কোড দেখার প্রয়োজন হয়'
        },
        {
          en: 'Because C++ has banned the use of .cpp files in modern software',
          bn: 'কারণ আধুনিক সফটওয়্যারে C++ এর .cpp ফাইল ব্যবহার নিষিদ্ধ করা হয়েছে'
        },
        {
          en: 'To prevent users from opening the file in Microsoft Notepad',
          bn: 'ব্যবহারকারী যেন ফাইলটি মাইক্রোসফট নোটপ্যাডে না খুলতে পারে সেজন্য'
        },
        {
          en: 'Header files execute 100 times faster than .cpp files',
          bn: 'হেডার ফাইল .cpp ফাইলের চেয়ে ১০০ গুণ দ্রুত কার্যকর হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The compiler needs the full template definition to generate the code.',
        bn: 'কোড তৈরি করার সময় কম্পাইলারের পুরো টেমপ্লেটের বডি দেখতে হয়।'
      },
      explanation: {
        en: 'Templates are compile-time recipes. When compiling a translation unit that calls a template, the compiler must see the full definition to stamp out code.',
        bn: 'টেমপ্লেট হলো কোড তৈরির নির্দেশিকা। যে ফাইলে এটি কল করা হয় সেখানে কম্পাইলার পুরো সংজ্ঞা দেখতে না পেলে কোড তৈরি করতে পারে না।'
      }
    },
    {
      id: 'cpp-tmpl-ex3',
      kind: 'mcq',
      topic: 'The role and purpose of C++20 Concepts',
      question: {
        en: 'What fundamental improvement do C++20 Concepts introduce to template metaprogramming?',
        bn: 'C++20 কনসেপ্টস (Concepts) টেমপ্লেট মেটা-প্রোগ্রামিংয়ে কোন মৌলিক উন্নতি এনেছে?'
      },
      options: [
        {
          en: 'They enforce explicit compile-time semantic constraints on template arguments via requires clauses, replacing cryptic 500-line compiler errors with clear diagnostics',
          bn: 'তারা requires ক্লজের মাধ্যমে টেমপ্লেট আর্গুমেন্টে স্পষ্ট কম্পাইল-টাইম শর্ত আরোপ করে ৫০০ লাইনের দুর্বোধ্য ত্রুটির বদলে পরিষ্কার এরর মেসেজ দেয়'
        },
        {
          en: 'They allow templates to be written without using the keyboard',
          bn: 'তারা কিবোর্ড স্পর্শ না করেই টেমপ্লেট লেখার সুযোগ দেয়'
        },
        {
          en: 'They automatically convert all C++ code into Python scripts',
          bn: 'তারা স্বয়ংক্রিয়ভাবে সমস্ত C++ কোডকে পাইথন স্ক্রিপ্টে রূপান্তর করে'
        },
        {
          en: 'They reduce the electricity consumption of the computer display',
          bn: 'তারা কম্পিউটার ডিসপ্লের বিদ্যুৎ খরচ কমিয়ে আনে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Clear compile-time type constraints and human-readable diagnostics.',
        bn: 'পরিষ্কার কম্পাইল-টাইম শর্ত এবং মানুষের পড়ার উপযোগী স্পষ্ট এরর মেসেজ।'
      },
      explanation: {
        en: 'C++20 Concepts establish contractual requirements on template parameters, terminating compilation with concise diagnostics if types do not fit.',
        bn: 'C++20 কনসেপ্টস টেমপ্লেট প্যারামিটারের ওপর চুক্তিভিত্তিক শর্ত আরোপ করে, ফলে টাইপ না মিললে তাৎক্ষণিক সংক্ষিপ্ত এরর রিপোর্ট পাওয়া যায়।'
      }
    },
    {
      id: 'cpp-tmpl-ex4',
      kind: 'mcq',
      topic: 'Non-type template parameters (NTTP)',
      question: {
        en: 'What is a Non-Type Template Parameter (NTTP) in C++ (such as template <typename T, size_t N> class FixedArray)?',
        bn: 'C++ এ নন-টাইপ টেমপ্লেট প্যারামিটার (NTTP) বলতে কী বোঝায় (যেমন template <typename T, size_t N> class FixedArray)?'
      },
      options: [
        {
          en: 'A template parameter that accepts a compile-time constant value (such as an integer or enum) rather than a type, enabling stack-allocated fixed-size buffers like std::array',
          bn: 'একটি টেমপ্লেট প্যারামিটার যা কোনো টাইপের বদলে একটি কম্পাইল-টাইম কনস্ট্যান্ট মান (যেমন পূর্ণসংখ্যা বা enum) গ্রহণ করে এবং std::array-এর মতো স্ট্যাক বাফার বানাতে দেয়'
        },
        {
          en: 'A parameter that can only be used on computers with zero RAM',
          bn: 'এমন একটি প্যারামিটার যা কেবল শূন্য র্যামের কম্পিউটারেই ব্যবহার করা যায়'
        },
        {
          en: 'A parameter that deletes all types from the operating system',
          bn: 'একটি প্যারামিটার যা অপারেটিং সিস্টেমের সমস্ত টাইপ মুছে দেয়'
        },
        {
          en: 'An HTML tag that disables JavaScript on a webpage',
          bn: 'একটি এইচটিএমএল ট্যাগ যা ওয়েবপেজে জাভাস্ক্রিপ্ট নিষ্ক্রিয় করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Passing constant values (like size) into templates at compile time.',
        bn: 'কম্পাইল টাইমে টেমপ্লেটে কোনো কনস্ট্যান্ট মান (যেমন সাইজ) পাস করা।'
      },
      explanation: {
        en: 'NTTPs take constant values at compile time. This powers std::array<T, N>, ensuring stack allocation without dynamic heap overhead.',
        bn: 'NTTP কম্পাইল টাইমে ধ্রুবক সংখ্যা গ্রহণ করে। এর মাধ্যমেই std::array<T, N> কোনো হিপ মেমোরি খরচ না করে সরাসরি স্ট্যাকে কাজ করতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'templates-and-the-type-quiz',
    title: {
      en: 'Templates & Generic Programming Quiz',
      bn: 'টেমপ্লেট ও জেনেরিক প্রোগ্রামিং কুইজ'
    },
    questions: [
      {
        id: 'q-template-specialization-role',
        kind: 'mcq',
        topic: 'Purpose of template specialization',
        question: {
          en: 'When is template specialization (such as template <> class Vector<bool>) employed in C++ systems engineering?',
          bn: 'C++ সিস্টেম ইঞ্জিনিয়ারিংয়ে কখন টেমপ্লেট স্পেশালাইজেশন (যেমন template <> class Vector<bool>) ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'To provide a tailored, highly optimized implementation for a specific type (such as bit-packing boolean flags 8-to-a-byte instead of using 1 byte per boolean)',
            bn: 'কোনো নির্দিষ্ট টাইপের জন্য অত্যন্ত অপ্টিমাইজড বাস্তবায়ন প্রদান করতে (যেমন প্রতি বুলিয়ানে ১ বাইট নষ্ট না করে প্রতি বাইটে ৮টি বুলিয়ান বিট প্যাক করা)'
          },
          {
            en: 'To prevent the compiler from generating machine instructions',
            bn: 'কম্পাইলারকে মেশিন কোড তৈরি করা থেকে বিরত রাখতে'
          },
          {
            en: 'To make all functions in the program execute backwards',
            bn: 'প্রোগ্রামের সমস্ত ফাংশনকে উল্টো দিক থেকে কার্যকর করতে'
          },
          {
            en: 'Specialization is only used when sending emails to developers',
            bn: 'স্পেশালাইজেশন কেবল ডেভেলপারদের ইমেইল পাঠানোর জন্যই ব্যবহৃত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Overriding generic behavior with a type-specific optimized implementation.',
          bn: 'সাধারণ আচরণের বদলে কোনো টাইপের জন্য সুনির্দিষ্ট উন্নত কোড বসানো।'
        },
        explanation: {
          en: 'Template specialization allows custom implementations for specific types. For example, std::vector<bool> specializes to bit-pack booleans into single bits.',
          bn: 'টেমপ্লেট স্পেশালাইজেশন নির্দিষ্ট টাইপের জন্য ভিন্ন কোড লেখার সুবিধা দেয়। যেমন std::vector<bool> প্রতি বুলিয়ানকে ১ বিটে সংরক্ষণ করে মেমোরি বাঁচায়।'
        }
      },
      {
        id: 'q-if-constexpr-branch-pruning',
        kind: 'mcq',
        topic: 'Compile-time branch pruning with if constexpr',
        question: {
          en: 'How does if constexpr (condition) introduced in C++17 differ from a standard if (condition) statement inside a template?',
          bn: 'C++17 এ আসা if constexpr (condition) একটি টেমপ্লেটের ভেতর সাধারণ if (condition) স্টেটমেন্টের থেকে কীভাবে আলাদা?'
        },
        options: [
          {
            en: 'if constexpr evaluates at compile time; the unselected branch is completely discarded and not compiled, allowing code that would fail compilation on that type to be safely ignored',
            bn: 'if constexpr কম্পাইল টাইমে যাচাই হয়; অপরিত্যক্ত শাখাটি পুরোপুরি বাদ দেওয়া হয় এবং কম্পাইলই করা হয় না, যা টাইপ অমিলজনিত এরর এড়ায়'
          },
          {
            en: 'if constexpr runs 1000 times slower because it checks everything twice',
            bn: 'if constexpr ১০০০ গুণ ধীরগতিতে চলে কারণ এটি সবকিছু দুইবার যাচাই করে'
          },
          {
            en: 'if constexpr can only be used on odd numbered calendar days',
            bn: 'if constexpr কেবল ক্যালেন্ডারের বিজোড় দিনগুলোতে ব্যবহার করা যায়'
          },
          {
            en: 'It forces the operating system to shut down all background apps',
            bn: 'এটি অপারেটিং সিস্টেমকে সমস্ত ব্যাকগ্রাউন্ড অ্যাপ বন্ধ করতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compile-time evaluation and complete discard of the inactive branch.',
          bn: 'কম্পাইল টাইমে সিদ্ধান্ত এবং নিষ্ক্রিয় ব্রাঞ্চটিকে পুরোপুরি বাতিল করা।'
        },
        explanation: {
          en: 'if constexpr discards the false branch at compile time. This allows type-specific code (e.g. pointer dereferencing) without causing compiler errors on non-pointers.',
          bn: 'if constexpr অসত্য ব্রাঞ্চটিকে কম্পাইল করার আগেই বাদ দিয়ে দেয়। ফলে কোনো টাইপের জন্য অনুপযুক্ত কোড থাকলেও কম্পাইলার কোনো এরর দেয় না।'
        }
      },
      {
        id: 'q-sfinae-historical-context',
        kind: 'mcq',
        topic: 'SFINAE (Substitution Failure Is Not An Error)',
        question: {
          en: 'What does the historical C++ acronym SFINAE stand for, and what did it govern?',
          bn: 'C++ এর ঐতিহাসিক সংক্ষিপ্ত রূপ SFINAE বলতে কী বোঝায় এবং এটি কী নিয়ন্ত্রণ করত?'
        },
        options: [
          {
            en: 'Substitution Failure Is Not An Error: if substituting a deduced type into a template signature fails, the compiler silently discards that overload instead of aborting compilation',
            bn: 'Substitution Failure Is Not An Error: টেমপ্লেট সিগনেচারে কোনো টাইপ বসাতে গিয়ে ব্যর্থ হলে কম্পাইলার এরর না দিয়ে নিঃশব্দে সেই ওভারলোডটি বাদ দিয়ে পরবর্তী চেষ্টা করত'
          },
          {
            en: 'System Files Inside Network Architecture Environment',
            bn: 'সিস্টেম ফাইলস ইনসাইড নেটওয়ার্ক আর্কিটেকচার এনভায়রনমেন্ট'
          },
          {
            en: 'Software Foundation Is Never Authorized Everywhere',
            bn: 'সফটওয়্যার ফাউন্ডেশন ইজ নেভার অথরাইজড এভরিহোয়ার'
          },
          {
            en: 'Standard Format In New Application Execution',
            bn: 'স্ট্যান্ডার্ড ফরম্যাট ইন নিউ অ্যাপ্লিকেশন এক্সিকিউশন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Substitution Failure Is Not An Error.',
          bn: 'টাইপ বসাতে গিয়ে ব্যর্থ হলে এরর না দিয়ে অন্য অপশন খোঁজা।'
        },
        explanation: {
          en: 'SFINAE allowed template authors to selectively enable overloads via std::enable_if prior to C++20 Concepts, discarding ill-formed substitutions silently.',
          bn: 'SFINAE C++20 এর আগে std::enable_if দিয়ে টেমপ্লেট ওভারলোড বেছে নেওয়ার কৌশল ছিল, যেখানে অমিল হলে কম্পাইলার এরর না দিয়ে পরবর্তী ওভারলোড খুঁজত।'
        }
      },
      {
        id: 'q-template-bloat-mitigation',
        kind: 'mcq',
        topic: 'Mitigating binary bloat from template instantiation',
        question: {
          en: 'What architectural technique mitigates binary code bloat caused by instantiating complex templates over dozens of pointer types (e.g. Vector<int*>, Vector<char*>)?',
          bn: 'একাধিক পয়েন্টার টাইপে (যেমন Vector<int*>, Vector<char*>) জটিল টেমপ্লেট ব্যবহারের ফলে বাইনারি ফাইলের আকার স্ফীতি রোধে কোন আর্কিটেকচারাল কৌশল প্রয়োগ করা হয়?'
        },
        options: [
          {
            en: 'Template partial specialization routing all pointer types (Vector<T*>) to share a single internal Vector<void*> implementation, with thin type-safe casting wrappers',
            bn: 'টেমপ্লেট পারশিয়াল স্পেশালাইজেশনের মাধ্যমে সমস্ত পয়েন্টারকে (Vector<T*>) একটি একক Vector<void*> কোডে পরিচালিত করা এবং বাইরে পাতলা টাইপ-কাস্টিং রাখা'
          },
          {
            en: 'By deleting all template code and rewriting everything in bash scripts',
            bn: 'সমস্ত টেমপ্লেট কোড মুছে ফেলে পুরো প্রজেক্ট ব্যাশ স্ক্রিপ্টে রূপান্তর করা'
          },
          {
            en: 'By running the compiler in dark mode to save energy',
            bn: 'বিদ্যুৎ বাঁচাতে কম্পাইলারকে ডার্ক মোডে চালানো'
          },
          {
            en: 'There is no way to prevent binary code bloat in C++',
            bn: 'C++ এ বাইনারি কোড স্ফীতি কমানোর কোনো উপায় নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sharing a single void* implementation for all pointer types.',
          bn: 'সমস্ত পয়েন্টার টাইপের জন্য একটি একক void* বাস্তবায়ন ভাগাভাগি করা।'
        },
        explanation: {
          en: 'All pointers have identical representation (8 bytes). Specializing Vector<T*> to delegate to a single Vector<void*> prevents generating duplicate machine code.',
          bn: 'সব পয়েন্টারই মেমোরিতে দেখতে এক (৮ বাইট)। Vector<T*>-কে একটিমাত্র Vector<void*>-এ রিডাইরেক্ট করলে বারবার একই কোড তৈরি হওয়া বন্ধ হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'stl-and-the-vector',
    title: {
      en: 'The Standard Template Library & std::vector — Dynamic Growth & Cache Locality',
      bn: 'স্ট্যান্ডার্ড টেমপ্লেট লাইব্রেরি ও std::vector — ডাইনামিক বৃদ্ধি ও ক্যাশ লোকালিটি'
    }
  }
};
