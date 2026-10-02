import type { Lesson } from '../../../lib/types';

export const LambdasAndTheCaptureLesson: Lesson = {
  slug: 'lambdas-and-the-capture',
  tech: 'cpp',
  title: {
    en: 'Lambdas, Closures & Functional C++ — Captures, std::function & Ranges',
    bn: 'ল্যাম্বডা, ক্লোজার ও ফাংশনাল C++ — ক্যাপচার, std::function ও রেঞ্জেস'
  },
  summary: {
    en: 'Lambda expressions, introduced in C++11 and refined across C++14/C++20, bridge functional programming idioms with zero-overhead systems performance. Under the hood, the compiler transforms every lambda into an anonymous functor struct whose overloaded operator() contains the executable body, storing captured variables as internal member fields. The capture clause ([...]) dictates scope binding: capturing by value copies state immutably (unless marked mutable), while capturing by reference binds to original stack variables with extreme caution against dangling references in asynchronous contexts. Stateless lambdas ([]) convert seamlessly to raw C function pointers, while generic and templated lambdas integrate with modern C++20 Ranges pipelines for expressive, inlined data processing.',
    bn: 'C++11 এ যুক্ত হওয়া এবং C++14/C++20 এ আরও সমৃদ্ধ হওয়া ল্যাম্বডা এক্সপ্রেশন শূন্য-ওভারহেড পারফরম্যান্সের সাথে ফাংশনাল প্রোগ্রামিং ধারণার চমৎকার মেলবন্ধন ঘটায়। নেপথ্যে কম্পাইলার প্রতিটি ল্যাম্বডাকে একটি বেনামী ফাঙ্কটর ক্লাসে রূপান্তর করে যার ওভারলোডেড operator() মূল কোডটি ধারণ করে এবং ক্যাপচার করা ভ্যারিয়েবলগুলোকে অভ্যন্তরীণ মেম্বার ফিল্ড হিসেবে সংরক্ষণ করে। ক্যাপচার ক্লজ ([...]) স্কোপের ডেটা ব্যবহারের ধরন ঠিক করে: মান বা ভ্যালু দিয়ে ক্যাপচার করলে অপরিবর্তনীয় কপি হয় (mutable না লিখলে), আর রেফারেন্স দিয়ে ক্যাপচার করলে মূল ভ্যারিয়েবলের সাথে যুক্ত থাকে যা অ্যাসিঙ্ক ব্যাকগ্রাউন্ডে ড্যাংলিং রেফারেন্সের ঝুঁকি তৈরি করতে পারে। স্টেটলেস ল্যাম্বডা ([]) সরাসরি সি ফাংশন পয়েন্টারে রূপান্তরিত হতে পারে, এবং জেনেরিক ল্যাম্বডা C++20 রেঞ্জেসের সাথে যুক্ত হয়ে দ্রুতগতির ইনলাইন ডেটা প্রসেসিং সম্পন্ন করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Inline Anonymous Functions and Closures',
        bn: 'মূল ধারণা: ইনলাইন বেনামী ফাংশন ও ক্লোজার'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'When you build modern software architectures in C++, passing small units of behavior as arguments is essential for standard algorithms, event handlers, and asynchronous tasks. Prior to modern revisions of the language, developers had to write cumbersome manual functor structs with overloaded operator parentheses. In C++11, lambdas introduced inline anonymous functions capable of capturing surrounding lexical scope, uniting functional programming elegance with zero-overhead compiler optimization.',
        bn: 'C++ এ যখন আপনি আধুনিক সফটওয়্যার আর্কিটেকচার তৈরি করেন, তখন স্ট্যান্ডার্ড অ্যালগরিদম, ইভেন্ট হ্যান্ডলার বা অ্যাসিঙ্ক্রোনাস কাজের জন্য কোডের অংশকে আর্গুমেন্ট হিসেবে পাঠানো অপরিহার্য হয়ে ওঠে। আধুনিক সংস্করণের পূর্বে প্রোগ্রামারদের প্যারেন্থেসিস অপারেটর ওভারলোড করে কষ্টকর ফাঙ্কটর স্ট্রাক্ট লিখতে হতো। কিন্তু C++11 এ আসা ল্যাম্বডা এক্সপ্রেশন ইনলাইন বেনামী ফাংশনের সুযোগ এনে দিয়েছে যা চারপাশের লেক্সিক্যাল স্কোপের ডেটা ক্যাপচার করতে পারে, যা একই সাথে ফাংশনাল প্রোগ্রামিংয়ের সৌন্দর্য এবং কম্পাইলারের শূন্য-ওভারহেড নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Lambda Expression',
          def: {
            en: 'An inline syntax construct defining an anonymous callable function object directly at the site of invocation',
            bn: 'একটি ইনলাইন সিনট্যাক্স যা কোড চালানোর স্থানেই সরাসরি একটি বেনামী কলযোগ্য ফাংশন অবজেক্ট তৈরি করার সুযোগ দেয়'
          }
        },
        {
          term: 'Closure Object',
          def: {
            en: 'The compiler-synthesized anonymous functor instance holding captured scope variables as private member fields',
            bn: 'কম্পাইলার কর্তৃক অলক্ষ্যে তৈরি করা একটি ফাঙ্কটর অবজেক্ট যা ক্যাপচার করা স্কোপ ভ্যারিয়েবলগুলোকে নিজস্ব মেম্বার হিসেবে জমা রাখে'
          }
        },
        {
          term: 'Capture Clause ([...])',
          def: {
            en: 'The initial bracketed specification dictating whether outer scope variables are captured by value ([=]) or by reference ([&])',
            bn: 'ল্যাম্বডার শুরুর ব্র্যাকেট অংশ যা নির্ধারণ করে বাইরের স্কোপের ভ্যারিয়েবলগুলো মান আকারে ([=]) নাকি রেফারেন্স আকারে ([&]) ক্যাপচার হবে'
          }
        },
        {
          term: 'Stateless Lambda',
          def: {
            en: 'A lambda with an empty capture clause ([]) that carries no internal member state and converts implicitly to a C function pointer',
            bn: 'খাঁটি ক্যাপচারহীন ল্যাম্বডা ([]) যার কোনো নিজস্ব মেম্বার স্টেট থাকে না এবং সরাসরি সাধারণ সি ফাংশন পয়েন্টারে রূপান্তরিত হতে পারে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'capture-mechanics',
      text: {
        en: 'Capture Modes: Value vs Reference and Dangling Traps',
        bn: 'ক্যাপচার মোড: মান বনাম রেফারেন্স এবং ড্যাংলিং ফাঁদ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The capture clause determines how enclosing variables bind to the generated closure object. Capturing by value ([x]) creates an independent copy inside the closure, protecting against outside mutation. By default, captured values are read-only; appending the mutable keyword allows internal modification of the local copy.',
        bn: 'ক্যাপচার ক্লজ ঠিক করে বাইরের ভ্যারিয়েবল কীভাবে ক্লোজার অবজেক্টে যুক্ত হবে। মান দিয়ে ক্যাপচার ([x]) করলে ক্লোজারের ভেতর সম্পূর্ণ স্বাধীন একটি কপি তৈরি হয় যা বাইরের পরিবর্তন থেকে সুরক্ষিত থাকে। ডিফল্টভাবে এই মানটি কেবল পড়ার উপযোগী থাকে; তবে mutable কিওয়ার্ড যোগ করলে ক্লোজারের ভেতরের কপিটি পরিবর্তন করা যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Capturing by reference ([&x]) binds the lambda to the original variable address. While avoiding copy overhead, reference capture exposes a catastrophic bug: if the lambda is stored or executed asynchronously after the enclosing stack frame returns, the captured reference becomes a dangling pointer to deallocated memory.',
        bn: 'রেফারেন্স দিয়ে ক্যাপচার ([&x]) করলে ল্যাম্বডা সরাসরি মূল মেমোরি ঠিকানার সাথে যুক্ত হয়। এতে কপি করার খরচ না থাকলেও এটি একটি মারাত্মক বিপদ ডেকে আনে: মূল ফাংশন শেষ হওয়ার পর যদি ল্যাম্বডাটি কোনো ব্যাকগ্রাউন্ড থ্রেডে চলতে থাকে, তবে সেই রেফারেন্সটি অবমুক্ত মেমোরির ড্যাংলিং পয়েন্টারে পরিণত হয়ে ক্র্যাশ ঘটায়।'
      }
    },
    {
      type: 'heading',
      id: 'stateless-c-compatibility',
      text: {
        en: 'Stateless Lambdas: Direct C Function Pointer Interop',
        bn: 'স্টেটলেস ল্যাম্বডা: সরাসরি সি ফাংশন পয়েন্টার ইন্টারঅপারেবিলিটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a lambda has an empty capture clause ([]), the compiler generates a closure struct with a size of only 1 byte (the minimum object size in C++). Because it captures zero state, the C++ standard mandates that stateless lambdas convert implicitly to standard C function pointers.',
        bn: 'যখন কোনো ল্যাম্বডার ক্যাপচার ক্লজ পুরোপুরি ফাঁকা ([]) থাকে, তখন কম্পাইলার মাত্র ১ বাইটের একটি ক্ষুদ্র ক্লোজার অবজেক্ট তৈরি করে (C++ এ অবজেক্টের সর্বনিম্ন মাপ ১ বাইট)। যেহেতু এর কোনো নিজস্ব স্টেট থাকে না, তাই C++ স্ট্যান্ডার্ডের নিয়মানুযায়ী স্টেটলেস ল্যাম্বডা সরাসরি সাধারণ সি ফাংশন পয়েন্টারে রূপান্তরিত হতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This enables seamless interoperation with legacy C libraries: a stateless lambda [](int a, int b) { return a - b; } can be passed directly to C qsort() or POSIX pthread_create without any glue code or adapter wrappers.',
        bn: 'এর ফলে লিগ্যাসি সি লাইব্রেরির সাথে চমৎকার সমন্বয় তৈরি হয়: একটি স্টেটলেস ল্যাম্বডা [](int a, int b) { return a - b; } কোনো বাড়তি অ্যাডাপ্টার কোড ছাড়াই সরাসরি সি-এর qsort() বা পসিক্স pthread_create-এ সাধারণ ফাংশন হিসেবে পাস করা যায়।'
      }
    },
    {
      type: 'heading',
      id: 'ranges-and-pipelines',
      text: {
        en: 'Modern C++20 Ranges: Functional Pipeline Composition',
        bn: 'আধুনিক C++20 রেঞ্জেস: ফাংশনাল পাইপলাইন কম্পোজিশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'C++20 elevates lambdas into declarative stream pipelines through the std::ranges library. Using the pipe operator (|), collections can be filtered and transformed lazily without allocating intermediate temporary vectors.',
        bn: 'C++20 এর std::ranges লাইব্রেরি ল্যাম্বডাকে আধুনিক স্ট্রিম পাইপলাইনে রূপান্তরিত করেছে। পাইপ অপারেটর (|) ব্যবহার করে কোনো সাময়িক মধ্যবর্তী ভেক্টর তৈরি না করেই সরাসরি অলস বা লেজি মূল্যায়নে ডেটা ফিল্টার ও রূপান্তর করা যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A pipeline numbers | views::filter(even) | views::transform(square) iterates over elements on the fly, composing operations cleanly. Because the compiler inlines the lambda closures completely, functional range pipelines match the raw performance of hand-written assembly loops.',
        bn: 'numbers | views::filter(even) | views::transform(square) পাইপলাইনটি চলার সাথে সাথে উপাদানগুলোকে প্রসেস করে। কম্পাইলার ল্যাম্বডা ক্লোজারগুলোকে শতভাগ ইনলাইন করে ফেলে বলে এই ফাংশনাল পাইপলাইনগুলো হাতে লেখা অ্যাসেম্বলি লুপের সমান গতি নিশ্চিত করে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Callable Function Mechanisms',
        bn: 'কাঠামোগত তুলনা: কলযোগ্য ফাংশন পদ্ধতিসমূহ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Callable Form', bn: 'কলযোগ্য রূপ' },
        { en: 'State Storage', bn: 'স্টেট সংরক্ষণ' },
        { en: 'Compiler Inlining', bn: 'ইনলাইনিং সুবিধা' },
        { en: 'Runtime Overhead', bn: 'রানটাইম ওভারহেড' }
      ],
      rows: [
        [
          { en: 'Stateless Lambda ([])', bn: 'স্টেটলেস ল্যাম্বডা ([])' },
          { en: 'Zero state (1 byte empty struct)', bn: 'শূন্য স্টেট (১ বাইটের খালি অবজেক্ট)' },
          { en: 'Always aggressively inlined', bn: 'সর্বদা শতভাগ ইনলাইন হয়' },
          { en: 'Zero runtime indirection (O(1))', bn: 'শূন্য রানটাইম ইনডিরেকশন (O(1))' }
        ],
        [
          { en: 'Stateful Lambda ([x, &y])', bn: 'স্টেটফুল ল্যাম্বডা ([x, &y])' },
          { en: 'Captured values/refs stored as member fields', bn: 'ক্যাপচার করা মান মেম্বার ফিল্ডে থাকে' },
          { en: 'Fully inlined if passed via template auto', bn: 'টেমপ্লেটে পাঠালে সরাসরি ইনলাইন হয়' },
          { en: 'Zero overhead; exact size of captured fields', bn: 'শূন্য ওভারহেড; ক্যাপচার ফিল্ডের সমান মাপ' }
        ],
        [
          { en: 'std::function<R(Args...)>', bn: 'std::function<R(Args...)>' },
          { en: 'Type-erased heap buffer for large closures', bn: 'টাইপ-মুছে ফেলা হিপ বাফার রাখে' },
          { en: 'Rarely inlined due to dynamic call indirection', bn: 'ডাইনামিক কলের কারণে ইনলাইন হয় না' },
          { en: 'Dynamic dispatch and potential heap allocation', bn: 'ডাইনামিক কল ও হিপ বরাদ্দের ওভারহেড' }
        ],
        [
          { en: 'C Function Pointer (*fn)', bn: 'সি ফাংশন পয়েন্টার (*fn)' },
          { en: 'None; strictly pure code instruction pointer', bn: 'নেই; কেবল মেশিন কোডের অ্যাড্রেস' },
          { en: 'Rarely inlined through variable pointer', bn: 'পয়েন্টারের কারণে ইনলাইন করা কঠিন' },
          { en: 'Single CPU indirect jump instruction', bn: 'একটি সিপিইউ ইনডাইরেক্ট জাম্প নির্দেশ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Lambdas, Closures & Ranges Pipeline',
        bn: 'বাস্তব কোড সিমুলেশন: ল্যাম্বডা, ক্লোজার ও রেঞ্জেস পাইপলাইন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of C++ Lambdas, Closures & Ranges in Node.js

// 1. Stateless Lambda simulation: [](int x) { return x * x; }
const statelessSquare = (x: number) => x * x;

// 2. Stateful Closure simulation: [factor = 3](int x) { return x * factor; }
class ClosureMultiplier {
  constructor(public factor: number) {}
  call(x: number): number {
    return x * this.factor;
  }
}
const statefulTimes3 = new ClosureMultiplier(3);

// 3. Modern C++20 Ranges pipeline simulation: numbers | filter(even) | transform(square)
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((n) => n % 2 === 0); // [2, 4, 6]
const squaredEvens = evens.map((n) => n * n); // [4, 16, 36]
const sumOfSquaredEvens = squaredEvens.reduce((acc, curr) => acc + curr, 0); // 56

const squareOf5 = statelessSquare(5); // 25
const multiplierResult = statefulTimes3.call(10); // 30

console.log('Result of stateless lambda squaring number 5:', squareOf5);
// -> Result of stateless lambda squaring number 5: 25
console.log('Result of stateful closure capturing factor 3 applied to 10:', multiplierResult);
// -> Result of stateful closure capturing factor 3 applied to 10: 30
console.log('Sum of transformed even squares across C++20 pipeline:', sumOfSquaredEvens);
// -> Sum of transformed even squares across C++20 pipeline: 56
console.log('Size of stateless lambda in memory in bytes: 1');
// -> Size of stateless lambda in memory in bytes: 1
console.log('Standard C++ standard version introducing lambda expressions: 11');
// -> Standard C++ standard version introducing lambda expressions: 11`,
      caption: {
        en: 'Simulation: stateless square(5) yields 25; factor 3 on 10 yields 30; C++20 ranges pipeline sums to 56; stateless lambda size is 1 byte; C++11 introduced lambdas',
        bn: 'সিমুলেশন: স্কয়ার(৫) দেয় ২৫; ফ্যাক্টর ৩ গুণ ১০ দেয় ৩০; C++20 রেঞ্জে যোগফল ৫৬; স্টেটলেস ল্যাম্বডার সাইজ ১ বাইট; C++11 এ ল্যাম্বডার সূচনা'
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
        en: 'Rule 1: Avoid default capture modes ([=] and [&]). Explicitly specify every captured variable ([x, &y]) to prevent accidental object copying or dangerous dangling reference traps.',
        bn: 'নিয়ম ১: ডিফল্ট ক্যাপচার ([=] এবং [&]) এড়িয়ে চলুন। প্রতিটি ক্যাপচার করা ভ্যারিয়েবলের নাম স্পষ্টভাবে লিখুন ([x, &y]) যাতে অসতর্ক কপি বা ড্যাংলিং রেফারেন্সের ঝুঁকি রোধ হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Never capture local variables by reference in asynchronous tasks or callbacks. If a thread or lambda outlives the calling function, captured stack references point to destroyed memory.',
        bn: 'নিয়ম ২: অ্যাসিঙ্ক্রোনাস টাস্ক বা কলব্যাকে কখনোই লোকাল ভ্যারিয়েবলকে রেফারেন্স দিয়ে ক্যাপচার করবেন না। থ্রেড মূল ফাংশনের চেয়ে বেশি সময় চললে তা ধ্বংস হওয়া মেমোরির দিকে নির্দেশ করে ক্র্যাশ ঘটাবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Prefer generic auto template parameters over std::function for algorithm callbacks. Passing lambdas directly via templates allows the compiler to inline the call completely with zero overhead.',
        bn: 'নিয়ম ৩: অ্যালগরিদম কলব্যাকে std::function-এর বদলে জেনেরিক auto টেমপ্লেট প্যারামিটার ব্যবহার করুন। টেমপ্লেট দিয়ে সরাসরি ল্যাম্বডা পাঠালে কম্পাইলার কোনো ওভারহেড ছাড়াই পুরো কোড ইনলাইন করে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Use C++14 generalized init-captures for move-only objects. Writing [p = std::move(ptr)] transfers exclusive ownership of std::unique_ptr directly into the lambda closure object.',
        bn: 'নিয়ম ৪: মুভ-অনলি অবজেক্টের ক্ষেত্রে C++14 ইনিট-ক্যাপচার ব্যবহার করুন। [p = std::move(ptr)] লিখলে std::unique_ptr-এর মতো অবজেক্টের একক মালিকানা সরাসরি ল্যাম্বডা ক্লোজারে স্থানান্তরিত হয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'cpp-lmb-ex1',
      kind: 'mcq',
      topic: 'The internal mechanics of a C++ lambda expression',
      question: {
        en: 'What does the C++ compiler generate under the hood when a developer writes a lambda expression?',
        bn: 'একজন ডেভেলপার যখন একটি ল্যাম্বডা এক্সপ্রেশন লেখেন তখন নেপথ্যে C++ কম্পাইলার মূলত কী তৈরি করে?'
      },
      options: [
        {
          en: 'An anonymous unique class (functor struct) with an overloaded operator() containing the lambda body and member fields storing any captured variables',
          bn: 'একটি বেনামী অনন্য ক্লাস (ফাঙ্কটর স্ট্রাক্ট) যার ওভারলোডেড operator() মূল কোডটি ধারণ করে এবং ক্যাপচার করা ভ্যারিয়েবলগুলো মেম্বার হিসেবে সংরক্ষিত থাকে'
        },
        {
          en: 'A temporary text file saved in the operating system root directory',
          bn: 'অপারেটিং সিস্টেমের রুট ফোল্ডারে সংরক্ষিত একটি সাময়িক টেক্সট ফাইল'
        },
        {
          en: 'An audio file that speaks the code aloud through the speakers',
          bn: 'একটি অডিও ফাইল যা কম্পিউটারের স্পিকারে কোডটি উচ্চারণ করে শোনায়'
        },
        {
          en: 'A global macro that deletes all unused functions from the program',
          bn: 'একটি গ্লোবাল ম্যাক্রো যা প্রোগ্রাম থেকে অপ্রয়োজনীয় ফাংশন মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'An anonymous class with an overloaded function call operator.',
        bn: 'ওভারলোডেড ফাংশন কল অপারেটর বিশিষ্ট একটি বেনামী ক্লাস।'
      },
      explanation: {
        en: 'The compiler translates each lambda into a unique closure class with operator(). Captured variables become member fields of that class.',
        bn: 'কম্পাইলার প্রতিটি ল্যাম্বডাকে operator() বিশিষ্ট একটি অনন্য ক্লোজার ক্লাসে রূপান্তর করে। ক্যাপচার করা ভ্যারিয়েবলগুলো সেই ক্লাসের মেম্বার ফিল্ড হয়ে যায়।'
      }
    },
    {
      id: 'cpp-lmb-ex2',
      kind: 'mcq',
      topic: 'Stateless lambdas converting to C function pointers',
      question: {
        en: 'Why can a stateless lambda (e.g. [](int a, int b) { return a + b; }) convert implicitly into a raw C function pointer (int (*)(int, int))?',
        bn: 'একটি স্টেটলেস ল্যাম্বডা (যেমন [](int a, int b) { return a + b; }) কেন স্বয়ংক্রিয়ভাবে একটি সাধারণ সি ফাংশন পয়েন্টারে (int (*)(int, int)) রূপান্তরিত হতে পারে?'
      },
      options: [
        {
          en: 'Because it captures zero enclosing state, the compiler synthesizes a static thunk function whose address directly satisfies the standard C function pointer ABI',
          bn: 'যেহেতু এটি কোনো স্টেট ক্যাপচার করে না, তাই কম্পাইলার একটি স্ট্যাটিক ফাংশন তৈরি করে যার ঠিকানা সরাসরি স্ট্যান্ডার্ড সি ফাংশন পয়েন্টারের সাথে মিলে যায়'
        },
        {
          en: 'Because all C++ code is converted into C before running',
          bn: 'কারণ সমস্ত C++ কোড চলার আগেই সি কোডে রূপান্তরিত হয়ে যায়'
        },
        {
          en: 'Because stateless lambdas take up 0 bytes in computer memory',
          bn: 'কারণ স্টেটলেস ল্যাম্বডা মেমোরিতে শূন্য বাইট জায়গা দখল করে'
        },
        {
          en: 'Because the operating system does not allow stateful lambdas',
          bn: 'কারণ অপারেটিং সিস্টেম স্টেটফুল ল্যাম্বডা ব্যবহারের অনুমতি দেয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Zero captured state allows direct static function pointer conversion.',
        bn: 'কোনো স্টেট না থাকায় সরাসরি সাধারণ স্ট্যাটিক ফাংশন পয়েন্টারে রূপান্তর সম্ভব।'
      },
      explanation: {
        en: 'Without captured member variables, a lambda requires no instance pointer (this). The compiler generates an implicit conversion to a regular function pointer.',
        bn: 'ক্যাপচার করা ভ্যারিয়েবল না থাকায় কোনো অবজেক্ট পয়েন্টারের (this) প্রয়োজন হয় না। ফলে কম্পাইলার একে সাধারণ ফাংশন পয়েন্টারে রূপান্তর করতে পারে।'
      }
    },
    {
      id: 'cpp-lmb-ex3',
      kind: 'mcq',
      topic: 'Dangling reference traps with reference captures in asynchronous contexts',
      question: {
        en: 'What dangerous bug is created when an asynchronous background thread executes a lambda that captured a local stack variable by reference ([&x])?',
        bn: 'একটি লোকাল ভ্যারিয়েবলকে রেফারেন্স দিয়ে ক্যাপচার ([&x]) করা কোনো ল্যাম্বডা যদি ব্যাকগ্রাউন্ড থ্রেডে চলে তবে কোন মারাত্মক বাগ তৈরি হয়?'
      },
      options: [
        {
          en: 'A dangling reference: the local stack frame terminates before the background thread runs; accessing x dereferences deallocated stack memory, causing memory corruption or crashes',
          bn: 'ড্যাংলিং রেফারেন্স: ব্যাকগ্রাউন্ড থ্রেড চলার আগেই লোকাল স্ট্যাক ফ্রেম শেষ হয়ে যায়; ফলে x ব্যবহারে অবমুক্ত মেমোরি অ্যাক্সেস হয়ে ক্র্যাশ বা ডেটা নষ্ট হয়'
        },
        {
          en: 'The compiler shuts down all electricity in the computer laboratory',
          bn: 'কম্পাইলার কম্পিউটার ল্যাবরেটরির সমস্ত বিদ্যুৎ সংযোগ বন্ধ করে দেয়'
        },
        {
          en: 'Variable x becomes an infinite loop that runs forever',
          bn: 'ভ্যারিয়েবল x একটি অনন্ত লুপে পরিণত হয়ে চিরকাল চলতে থাকে'
        },
        {
          en: 'The operating system deletes all passwords from disk',
          bn: 'অপারেটিং সিস্টেম ডিস্ক থেকে সমস্ত পাসওয়ার্ড মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Stack frame destroyed before the asynchronous thread reads the reference.',
        bn: 'থ্রেড রেফারেন্স পড়ার আগেই স্ট্যাক ফ্রেম ধ্বংস হয়ে যাওয়া।'
      },
      explanation: {
        en: 'Local stack variables die when the creating function exits. If a detached or async thread accesses a captured reference afterwards, it hits a dangling pointer.',
        bn: 'ফাংশন শেষ হলে লোকাল স্ট্যাক মেমোরি ধ্বংস হয়। ব্যাকগ্রাউন্ড থ্রেড পরে সেই রেফারেন্স ব্যবহারের চেষ্টা করলে অবমুক্ত মেমোরিতে মারাত্মক ক্র্যাশ ঘটে।'
      }
    },
    {
      id: 'cpp-lmb-ex4',
      kind: 'mcq',
      topic: 'C++14 generalized init-captures for move-only types',
      question: {
        en: 'How can a move-only resource (such as std::unique_ptr<Widget>) be transferred into a lambda in modern C++?',
        bn: 'আধুনিক C++ এ কীভাবে একটি মুভ-অনলি রিসোর্সকে (যেমন std::unique_ptr<Widget>) একটি ল্যাম্বডায় স্থানান্তর করা যায়?'
      },
      options: [
        {
          en: 'By using C++14 generalized init-capture syntax: [w = std::move(widget)]() { ... }',
          bn: 'C++14 এর সাধারণ ইনিট-ক্যাপচার সিনট্যাক্স ব্যবহার করে: [w = std::move(widget)]() { ... }'
        },
        {
          en: 'By attaching an email with the unique_ptr to the compiler',
          bn: 'কম্পাইলারের কাছে unique_ptr সংযুক্ত একটি ইমেইল পাঠিয়ে'
        },
        {
          en: 'By renaming the unique_ptr variable to start with the letter Z',
          bn: 'unique_ptr ভ্যারিয়েবলের নাম Z অক্ষর দিয়ে শুরু করে দিয়ে'
        },
        {
          en: 'Move-only objects can never be used inside lambda expressions',
          bn: 'মুভ-অনলি অবজেক্ট কখনোই ল্যাম্বডার ভেতরে ব্যবহার করা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'C++14 init-capture with std::move.',
        bn: 'std::move সহ C++14 ইনিট-ক্যাপচার ব্যবহারের কথা ভাবুন।'
      },
      explanation: {
        en: 'C++14 generalized init-captures allow moving objects into closure member fields: [ptr = std::move(p)] transfers exclusive ownership.',
        bn: 'C++14 ইনিট-ক্যাপচার ল্যাম্বডার মেম্বার ফিল্ডে সরাসরি অবজেক্ট মুভ করতে দেয়: [ptr = std::move(p)] একক মালিকানা স্থানান্তর সম্পন্ন করে।'
      }
    }
  ],
  quiz: {
    id: 'lambdas-and-the-capture-quiz',
    title: {
      en: 'Lambdas & Functional C++ Quiz',
      bn: 'ল্যাম্বডা ও ফাংশনাল C++ কুইজ'
    },
    questions: [
      {
        id: 'q-mutable-lambda-keyword',
        kind: 'mcq',
        topic: 'The mutable specifier on value-capturing lambdas',
        question: {
          en: 'What does marking a lambda as mutable (e.g. [count = 0]() mutable { count++; }) permit?',
          bn: 'একটি ল্যাম্বডায় mutable লিখলে (যেমন [count = 0]() mutable { count++; }) কী করার অনুমতি মেলে?'
        },
        options: [
          {
            en: 'It marks the synthesized operator() as non-const, allowing the lambda to modify its own internal copies of variables captured by value',
            bn: 'এটি তৈরি হওয়া operator()-কে নন-কনস্ট বানায়, যার ফলে ল্যাম্বডা মান আকারে ক্যাপচার করা তার নিজস্ব অভ্যন্তরীণ কপিগুলো পরিবর্তন করতে পারে'
          },
          {
            en: 'It mutates the variable name into a random integer',
            bn: 'এটি ভ্যারিয়েবলের নাম বদলে একটি এলোমেলো সংখ্যা বানিয়ে দেয়'
          },
          {
            en: 'It mutes all computer audio sounds while the lambda runs',
            bn: 'ল্যাম্বডা চলাকালীন এটি কম্পিউটারের সমস্ত অডিও শব্দ বন্ধ করে রাখে'
          },
          {
            en: 'It prevents the lambda from executing more than twice',
            bn: 'এটি ল্যাম্বডাকে দুইবারের বেশি চলতে বাধা দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modifying internal by-value captured copies.',
          bn: 'মান আকারে ক্যাপচার করা অভ্যন্তরীণ কপিগুলোর মান পরিবর্তন করা।'
        },
        explanation: {
          en: 'By default, a lambda operator() is const, preventing mutation of by-value captures. mutable removes const, allowing internal field updates.',
          bn: 'ডিফল্টভাবে ল্যাম্বডার operator() const থাকে, ফলে ক্যাপচার করা মান বদলানো যায় না। mutable কিওয়ার্ড দিলে ভেতরের কপি পরিবর্তন করার অনুমতি মেলে।'
        }
      },
      {
        id: 'q-std-function-overhead-cost',
        kind: 'mcq',
        topic: 'Overhead of std::function vs direct templated lambdas',
        question: {
          en: 'What architectural overhead is introduced when storing a lambda in std::function<void()> rather than using auto or templates?',
          bn: 'ল্যাম্বডাকে auto বা টেমপ্লেটের বদলে std::function<void()>-এ সংরক্ষণ করলে কোন আর্কিটেকচারাল ওভারহেড যোগ হয়?'
        },
        options: [
          {
            en: 'Type erasure introduces a virtual-like dynamic function pointer indirection on every call, and large captures may trigger dynamic heap allocation',
            bn: 'টাইপ মুছে ফেলার কারণে প্রতিটি কলে ভার্চুয়াল কলের মতো ইনডিরেকশন ঘটে এবং বড় ক্যাপচারের ক্ষেত্রে হিপে অতিরিক্ত মেমোরি বরাদ্দের ওভারহেড আসে'
          },
          {
            en: 'std::function forces the computer CPU to run at half clock speed',
            bn: 'std::function সিপিইউ ক্লক স্পিড অর্ধেকে নামিয়ে আনতে বাধ্য করে'
          },
          {
            en: 'It makes all function parameters convert to French text',
            bn: 'এটি সমস্ত ফাংশন প্যারামিটারকে ফরাসি ভাষায় রূপান্তর করে'
          },
          {
            en: 'There is zero overhead; std::function compiles to 0 bytes',
            bn: 'কোনো ওভারহেড নেই; std::function শূন্য বাইটে কম্পাইল হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Dynamic dispatch indirection and heap allocation for large captures.',
          bn: 'ডাইনামিক কল ইনডিরেকশন এবং বড় ক্যাপচারের জন্য হিপ মেমোরি বরাদ্দ।'
        },
        explanation: {
          en: 'std::function is a polymorphic wrapper. It incurs dynamic dispatch overhead and allocates heap memory if the captured closure exceeds its small buffer capacity.',
          bn: 'std::function হলো একটি পলিমরফিক মোড়ক। এতে ডাইনামিক কলের ইনডিরেকশন থাকে এবং ক্যাপচার সাইজ বড় হলে এটি হিপে মেমোরি বরাদ্দ করতে বাধ্য হয়।'
        }
      },
      {
        id: 'q-cpp20-ranges-pipeline-benefit',
        kind: 'mcq',
        topic: 'Benefits of C++20 Ranges over legacy STL loops',
        question: {
          en: 'What is the primary advantage of combining C++20 Ranges with lambdas (e.g. data | filter(...) | transform(...)) over nested loops?',
          bn: 'নেস্টেড লুপের তুলনায় ল্যাম্বডাসহ C++20 রেঞ্জেস (যেমন data | filter(...) | transform(...)) ব্যবহারের প্রধান সুবিধা কী?'
        },
        options: [
          {
            en: 'Lazy evaluation: elements are processed one-by-one through the pipeline on demand without allocating intermediate container vectors, and closures inline completely',
            bn: 'লেজি ইভ্যালুয়েশন: কোনো মধ্যবর্তী ভেক্টর তৈরি না করেই প্রতিটি উপাদান পাইপলাইনের মধ্য দিয়ে প্রসেস হয় এবং ক্লোজারগুলো শতভাগ ইনলাইন হয়'
          },
          {
            en: 'It allows arrays to store an infinite number of elements in RAM',
            bn: 'এটি র্যামে অসীম সংখ্যক উপাদান জমা রাখার অনুমতি দেয়'
          },
          {
            en: 'Ranges automatically send data to external printer machines',
            bn: 'রেঞ্জেস স্বয়ংক্রিয়ভাবে এক্সটার্নাল প্রিন্টারে ডেটা পাঠিয়ে দেয়'
          },
          {
            en: 'Ranges disable compiler optimization to avoid bugs',
            bn: 'বাগ এড়াতে রেঞ্জেস কম্পাইলার অপ্টিমাইজেশন নিষ্ক্রিয় করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Lazy evaluation without intermediate memory buffers.',
          bn: 'কোনো বাড়তি বাফার ছাড়া একবারে একটি করে উপাদানের অলস বা লেজি প্রসেসিং।'
        },
        explanation: {
          en: 'C++20 range views evaluate lazily. Combining them via the pipe operator avoids allocating intermediate vectors while maintaining fully inlined speed.',
          bn: 'C++20 রেঞ্জ ভিউ লেজি পদ্ধতিতে কাজ করে। পাইপ অপারেটর দিয়ে জুড়লে কোনো সাময়িক মেমোরি না কেড়েই পূর্ণ ইনলাইন গতিতে কাজ সম্পন্ন হয়।'
        }
      },
      {
        id: 'q-generic-lambda-auto-parameter',
        kind: 'mcq',
        topic: 'Generic lambdas with auto parameter deduction',
        question: {
          en: 'How does a generic lambda declared as [](auto a, auto b) { return a + b; } work under the hood in C++14 and beyond?',
          bn: 'C++14 এবং তার পরবর্তী সংস্করণে [](auto a, auto b) { return a + b; } হিসেবে ঘোষিত একটি জেনেরিক ল্যাম্বডা নেপথ্যে কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'The compiler generates an anonymous closure struct with a templated operator(): template <typename T1, typename T2> auto operator()(T1 a, T2 b) const',
            bn: 'কম্পাইলার একটি টেমপ্লেটযুক্ত operator() সহ বেনামী ক্লোজার তৈরি করে: template <typename T1, typename T2> auto operator()(T1 a, T2 b) const'
          },
          {
            en: 'It converts both parameters into double floating-point numbers',
            bn: 'এটি উভয় প্যারামিটারকে ডাবল ফ্লোটিং-পয়েন্ট সংখ্যায় রূপান্তর করে'
          },
          {
            en: 'It deletes all types from the operating system',
            bn: 'এটি অপারেটিং সিস্টেমের সমস্ত টাইপ মুছে ফেলে'
          },
          {
            en: 'Generic lambdas can only be used to compare text strings',
            bn: 'জেনেরিক ল্যাম্বডা কেবলমাত্র টেক্সট স্ট্রিং তুলনা করতেই ব্যবহৃত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The compiler synthesizes a templated call operator.',
          bn: 'কম্পাইলার একটি টেমপ্লেটযুক্ত ফাংশন কল অপারেটর তৈরি করে।'
        },
        explanation: {
          en: 'In C++14, auto parameters in lambdas map to template type parameters on the closure operator(), enabling compile-time monomorphization for any type combination.',
          bn: 'C++14 এ ল্যাম্বডার auto প্যারামিটার ক্লোজারের operator()-কে একটি টেমপ্লেটে রূপান্তর করে, যা যেকোনো টাইপের সমন্বয়ে শতভাগ গতিতে কাজ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-class-forge',
    title: {
      en: 'The Class Forge: Concurrency, Toolchains & Systems Architecture — Real-World Capstone',
      bn: 'দ্য ক্লাস ফোর্জ: কনকারেন্সি, টুলচেন ও সিস্টেম আর্কিটেকচার — বাস্তবমুখী ক্যাপস্টোন'
    }
  }
};
