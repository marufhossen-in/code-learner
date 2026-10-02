import type { Lesson } from '../../../lib/types';

export const StlAndTheVectorLesson: Lesson = {
  slug: 'stl-and-the-vector',
  tech: 'cpp',
  title: {
    en: 'The Standard Template Library & std::vector — Dynamic Growth & Cache Locality',
    bn: 'স্ট্যান্ডার্ড টেমপ্লেট লাইব্রেরি ও std::vector — ডাইনামিক বৃদ্ধি ও ক্যাশ লোকালিটি'
  },
  summary: {
    en: 'The C++ Standard Template Library (STL) delivers high-performance generic algorithms, iterators, and data containers. Among these, std::vector reigns as the premier sequential container across modern systems programming. Unlike node-based data structures (like std::list) that fragment memory across disparate heap locations, std::vector allocates an unbroken contiguous array in RAM. This linear memory layout aligns seamlessly with modern CPU 64-byte hardware cache lines, drastically minimizing CPU cache misses during sequential traversal. To achieve amortized O(1) appending via push_back(), std::vector employs geometric capacity doubling (0 -> 1 -> 2 -> 4 -> 8). Calling reserve() upfront bypasses expensive heap reallocation and prevents iterator invalidation.',
    bn: 'C++ স্ট্যান্ডার্ড টেমপ্লেট লাইব্রেরি (STL) উচ্চগতির জেনেরিক অ্যালগরিদম, ইটারেটর এবং নির্ভরযোগ্য ডেটা কন্টেইনার সরবরাহ করে। এর মধ্যে std::vector আধুনিক সিস্টেম প্রোগ্রামিংয়ে সবচেয়ে বেশি ব্যবহৃত প্রধান কন্টেইনার হিসেবে স্বীকৃত। নোড-ভিত্তিক ডেটা স্ট্রাকচার (যেমন std::list) যেখানে হিপের বিভিন্ন প্রান্তে মেমোরি ছড়িয়ে রাখে, std::vector সেখানে র্যামে একটি অবিচ্ছিন্ন একক মেমোরি ব্লক বরাদ্দ করে। এই সমান্তরাল মেমোরি বিন্যাস আধুনিক সিপিইউর ৬৪-বাইটের ক্যাশ লাইনের সাথে নিখুঁতভাবে মিলে যায় এবং লুপ ট্রাভার্সালে ক্যাশ মিসের সংখ্যা ব্যাপকভাবে কমিয়ে আনে। push_back() দিয়ে O(1) সময়ে উপাদান যোগ করতে std::vector জ্যামিতিক দ্বিগুণ পদ্ধতিতে ক্যাপাসিটি বাড়ায় (০ -> ১ -> ২ -> ৪ -> ৮)। শুরুতে reserve() কল করলে অপ্রয়োজনীয় মেমোরি রিলোকেশন দূর হয় এবং ইটারেটর অকার্যকর হওয়া রোধ হয়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The STL Framework and Sequential Contiguity',
        bn: 'মূল ধারণা: STL ফ্রেমওয়ার্ক ও মেমোরির অবিচ্ছিন্নতা'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build performance-critical systems in C++, organizing data collections efficiently determines whether an application runs smoothly or stalls on memory latency. The Standard Template Library provides a unified suite of algorithms and containers. Among these, std::vector is the undisputed workhorse of modern C++, offering contiguous memory layouts, amortized constant-time additions, and unbeatable hardware cache locality.',
        bn: 'C++ এ যখন আপনি পারফরম্যান্স-নির্ভর সিস্টেম তৈরি করেন, তখন ডেটার সংগ্রহ কীভাবে মেমোরিতে সাজানো হচ্ছে তা অ্যাপ্লিকেশনের গতি নির্ধারণ করে। স্ট্যান্ডার্ড টেমপ্লেট লাইব্রেরি অ্যালগরিদম ও কন্টেইনারের এক চমৎকার সমন্বিত স্যুট প্রদান করে। এগুলোর মধ্যে std::vector হলো আধুনিক C++ এর সবচেয়ে শক্তিশালী ও অপরিহার্য কন্টেইনার, যা অবিচ্ছিন্ন মেমোরি লেআউট, দ্রুত ডেটা সংযোজন এবং অতুলনীয় হার্ডওয়্যার ক্যাশ লোকালিটি নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Standard Template Library (STL)',
          def: {
            en: 'The standardized C++ library providing generic containers, traversal iterators, algorithms, and allocators',
            bn: 'C++ এর স্ট্যান্ডার্ড লাইব্রেরি যা জেনেরিক ডেটা কন্টেইনার, ইটারেটর, অ্যালগরিদম এবং মেমোরি বরাদ্দকারী প্রদান করে'
          }
        },
        {
          term: 'std::vector',
          def: {
            en: 'A sequence container managing a contiguous, dynamically growing heap buffer that supports random access in O(1) time',
            bn: 'একটি অবিচ্ছিন্ন ডাইনামিক হিপ বাফার পরিচালনাকারী কন্টেইনার যা O(1) সময়ে যেকোনো ইনডেক্সে সরাসরি প্রবেশের সুবিধা দেয়'
          }
        },
        {
          term: 'Cache Locality',
          def: {
            en: 'Memory layout where adjacent elements load into high-speed CPU hardware cache lines simultaneously, accelerating reads',
            bn: 'এমন মেমোরি বিন্যাস যেখানে পাশাপাশি থাকা উপাদানগুলো একসাথে উচ্চগতির সিপিইউ ক্যাশ লাইনে লোড হয়ে পড়ার গতি বাড়ায়'
          }
        },
        {
          term: 'Iterator Invalidation',
          def: {
            en: 'A state where existing pointers or iterators become dangling because a container reallocated its memory buffer elsewhere',
            bn: 'এমন একটি অবস্থা যেখানে কন্টেইনার মেমোরি স্থানান্তর করার কারণে পূর্বের পয়েন্টার বা ইটারেটরগুলো অকার্যকর হয়ে যায়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'contiguous-cache-locality',
      text: {
        en: 'Hardware Reality: Why Contiguous Vectors Beat Linked Lists',
        bn: 'হার্ডওয়্যার বাস্তবতা: লিংকড লিস্টের চেয়ে ভেক্টর কেন দ্রুতগতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Computer science textbooks often praise linked lists (std::list) for theoretical O(1) arbitrary insertions. In hardware reality, modern central processing units do not read single bytes from RAM; they fetch 64-byte chunks known as CPU Cache Lines into ultra-fast L1/L2 caches.',
        bn: 'কম্পিউটার বিজ্ঞানের বইগুলোতে প্রায়শই তাত্ত্বিক O(1) ইনসার্শনের জন্য লিংকড লিস্টের (std::list) প্রশংসা করা হয়। কিন্তু বাস্তব হার্ডওয়্যারে সিপিইউ র্যাম থেকে একটি একক বাইট পড়ে না; বরং তারা একবারে ৬৪-বাইটের একটি সম্পূর্ণ চাঙ্ক অতি দ্রুতগতির L1/L2 ক্যাশে নিয়ে আসে যাকে CPU Cache Line বলে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because std::vector stores elements contiguously, reading index 0 automatically pulls the next several elements into the CPU cache line for free. In contrast, std::list scatters node pointers across the heap, causing a costly CPU cache miss and RAM bus stall on nearly every node traversal.',
        bn: 'std::vector উপাদানগুলোকে পরপর সাজিয়ে রাখে বলে ইনডেক্স ০ পড়ার সাথে সাথে পরবর্তী উপাদানগুলো বিনা খরচে সিপিইউ ক্যাশ লাইনে চলে আসে। বিপরীতে std::list প্রতিটি নোডকে হিপের এলোমেলো স্থানে ছড়িয়ে রাখে, যার ফলে প্রায় প্রতিটি নোড পরিদর্শনে সিপিইউ ক্যাশ মিস ঘটে এবং র্যাম থেকে ডেটা আনতে গিয়ে প্রসেসর অলস বসে থাকে।'
      }
    },
    {
      type: 'heading',
      id: 'geometric-growth-mechanics',
      text: {
        en: 'Geometric Doubling: Size vs Capacity and reserve()',
        bn: 'জ্যামিতিক দ্বিগুণ বৃদ্ধি: Size বনাম Capacity এবং reserve()'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A vector tracks two distinct properties: size() is the number of active elements, while capacity() is the total memory allocated. When size reaches capacity, the vector executes geometric doubling (e.g. 0 -> 1 -> 2 -> 4 -> 8), allocating a new buffer, moving existing elements, and freeing the old buffer.',
        bn: 'একটি ভেক্টর দুটি বৈশিষ্ট্য পরিচালনা করে: size() হলো বর্তমানে থাকা উপাদানের সংখ্যা, আর capacity() হলো মোট বরাদ্দকৃত মেমোরি বাফার। সাইজ যখন ক্যাপাসিটিতে পৌঁছায়, তখন ভেক্টর জ্যামিতিক দ্বিগুণ পদ্ধতিতে বৃদ্ধি পায় (যেমন ০ -> ১ -> ২ -> ৪ -> ৮), অর্থাৎ নতুন দ্বিগুণ সাইজের বাফার নেয়, আগের উপাদানগুলো সরিয়ে আনে এবং পুরোনো মেমোরি খালি করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This geometric scaling guarantees that push_back() achieves amortized O(1) time complexity. When the final element count is predictable, calling vec.reserve(100) upfront allocates the complete buffer in a single heap operation, reducing 4 repetitive reallocations down to 1.',
        bn: 'এই জ্যামিতিক সম্প্রসারণ নিশ্চিত করে যে push_back() গাণিতিকভাবে এমর্টাইজড O(1) সময়ে কাজ করে। উপাদানের সংখ্যা আগে থেকে অনুমান করা সম্ভব হলে শুরুতেই vec.reserve(100) কল করলে এক কলেই পুরো বাফার বরাদ্দ হয়, যার ফলে বারবার ৪টি রিলোকেশনের স্থলে মাত্র ১টি মেমোরি অপারেশন সম্পন্ন হয়।'
      }
    },
    {
      type: 'heading',
      id: 'emplace-back-performance',
      text: {
        en: 'emplace_back vs push_back: In-Place Construction',
        bn: 'emplace_back বনাম push_back: সরাসরি মেমোরিতে নির্মাণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Calling push_back(Item(a, b)) constructs a temporary object on the local stack frame, copies or moves it into the vector buffer, and destroys the temporary. This sequence wastes CPU cycles creating and destructing transient objects.',
        bn: 'push_back(Item(a, b)) কল করলে প্রথমে লোকাল স্ট্যাক ফ্রেমে একটি সাময়িক অবজেক্ট তৈরি হয়, তারপর সেটি ভেক্টর বাফারে কপি বা মুভ করা হয় এবং শেষে সাময়িক অবজেক্টটি ধ্বংস হয়। এই পুরো প্রক্রিয়ায় ক্ষণস্থায়ী অবজেক্টের কারণে বাড়তি সিপিইউ সময় নষ্ট হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Using emplace_back(a, b) forwards constructor arguments directly into the vector uninitialized memory via placement new. The object constructs directly in place inside the vector, completely eliminating temporary object creation overhead.',
        bn: 'emplace_back(a, b) ব্যবহার করলে কনস্ট্রাক্টরের আর্গুমেন্টগুলো সরাসরি ভেক্টরের মেমোরিতে পাঠিয়ে দেওয়া হয়। এর ফলে অবজেক্টটি সরাসরি ভেক্টর বাফারের ভেতরেই তৈরি হয়ে যায় এবং সাময়িক অবজেক্ট তৈরির কোনো বাড়তি খরচ থাকে না।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: STL Sequence Containers',
        bn: 'কাঠামোগত তুলনা: STL সিকোয়েন্স কন্টেইনারসমূহ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Container Type', bn: 'কন্টেইনার রূপ' },
        { en: 'Memory Layout', bn: 'মেমোরি বিন্যাস' },
        { en: 'Random Access Cost', bn: 'ইনডেক্স অ্যাক্সেস খরচ' },
        { en: 'Insertion at Back vs Middle', bn: 'শেষে বনাম মাঝে ইনসার্শন' }
      ],
      rows: [
        [
          { en: 'std::vector<T>', bn: 'std::vector<T>' },
          { en: 'Contiguous unbroken heap array', bn: 'একক অবিচ্ছিন্ন হিপ অ্যারে' },
          { en: 'O(1) direct memory pointer offset', bn: 'O(1) সরাসরি মেমোরি অফসেট' },
          { en: 'Back: amortized O(1); Middle: O(N) shift', bn: 'শেষে: O(1); মাঝে: O(N) উপাদান সরানো' }
        ],
        [
          { en: 'std::deque<T>', bn: 'std::deque<T>' },
          { en: 'Chunked array of fixed-size blocks', bn: 'নির্দিষ্ট সাইজের ব্লকের সমন্বিত অ্যারে' },
          { en: 'O(1) double pointer indirection', bn: 'O(1) দুই ধাপের পয়েন্টার ইনডিরেকশন' },
          { en: 'Front and Back: O(1); Middle: O(N)', bn: 'শুরু ও শেষে: O(1); মাঝে: O(N)' }
        ],
        [
          { en: 'std::list<T>', bn: 'std::list<T>' },
          { en: 'Doubly-linked nodes scattered on heap', bn: 'হিপে ছড়িয়ে থাকা ডাবলি-লিংকড নোড' },
          { en: 'O(N) sequential pointer chasing', bn: 'O(N) পয়েন্টার ধরে ধরে অনুসন্ধান' },
          { en: 'Any position given iterator: O(1)', bn: 'ইটারেটর জানা থাকলে যেকোনো স্থানে: O(1)' }
        ],
        [
          { en: 'std::array<T, N>', bn: 'std::array<T, N>' },
          { en: 'Fixed-size stack-allocated contiguous array', bn: 'ফিক্সড সাইজের স্ট্যাক কন্টিনুয়াস অ্যারে' },
          { en: 'O(1) zero-overhead direct stack offset', bn: 'O(1) সরাসরি স্ট্যাক অফসেট' },
          { en: 'Fixed compile-time size (no dynamic insertions)', bn: 'নির্দিষ্ট সাইজ (ডাইনামিক বৃদ্ধি নেই)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Vector Capacity Doubling & reserve()',
        bn: 'বাস্তব কোড সিমুলেশন: ভেক্টর ক্যাপাসিটি বৃদ্ধি ও reserve()'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of C++ std::vector Dynamic Growth in Node.js

class SimVector {
  public storage: number[] = [];
  public _capacity = 0;
  public reallocations = 0;

  push_back(value: number) {
    if (this.storage.length >= this._capacity) {
      this._grow();
    }
    this.storage.push(value);
  }

  reserve(newCapacity: number) {
    if (newCapacity > this._capacity) {
      this._capacity = newCapacity;
      this.reallocations += 1;
    }
  }

  _grow() {
    const nextCap = this._capacity === 0 ? 1 : this._capacity * 2;
    this._capacity = nextCap;
    this.reallocations += 1;
  }

  size(): number {
    return this.storage.length;
  }

  capacity(): number {
    return this._capacity;
  }
}

// Simulation of 5 pushes with geometric doubling
const vec = new SimVector();
vec.push_back(10); // cap: 1
vec.push_back(20); // cap: 2
vec.push_back(30); // cap: 4
vec.push_back(40); // cap: 4
vec.push_back(50); // cap: 8

const finalSize = vec.size(); // 5
const finalCapacity = vec.capacity(); // 8
const totalReallocations = vec.reallocations; // 4 reallocations (1, 2, 4, 8)

// Comparison with pre-reserved vector
const reservedVec = new SimVector();
reservedVec.reserve(100);
for (let i = 0; i < 50; i++) {
  reservedVec.push_back(i);
}
const reservedCapacity = reservedVec.capacity(); // 100
const reservedReallocCount = reservedVec.reallocations; // 1 (only initial reserve)

console.log('Final vector element count (size) after 5 push_back calls:', finalSize);
// -> Final vector element count (size) after 5 push_back calls: 5
console.log('Final vector buffer capacity after geometric doubling:', finalCapacity);
// -> Final vector buffer capacity after geometric doubling: 8
console.log('Total reallocations incurred without reserve():', totalReallocations);
// -> Total reallocations incurred without reserve(): 4
console.log('Total reallocations incurred with reserve(100) across 50 pushes:', reservedReallocCount);
// -> Total reallocations incurred with reserve(100) across 50 pushes: 1
console.log('Modern CPU cache line standard size in bytes: 64');
// -> Modern CPU cache line standard size in bytes: 64`,
      caption: {
        en: 'Simulation: 5 pushes grow size to 5 and capacity to 8 across 4 reallocations; pre-reserving 100 avoids extra allocations; CPU cache line is 64 bytes',
        bn: 'সিমুলেশন: ৫টি পুশে সাইজ ৫ ও ক্যাপাসিটি ৮ হয় ৪টি রিলোকেশনে; আগে ১০০ রিজার্ভ করলে মাত্র ১টি বরাদ্দ লাগে; ক্যাশ লাইন ৬৪ বাইট'
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
        en: 'Rule 1: Always call reserve() when the collection size is known in advance. Pre-allocating capacity eliminates expensive heap reallocation cascades and completely avoids iterator invalidation bugs.',
        bn: 'নিয়ম ১: কালেকশনের সাইজ আগে জানা থাকলে সর্বদা reserve() কল করুন। শুরুতেই প্রয়োজনীয় ক্যাপাসিটি নিয়ে রাখলে বারবার মেমোরি রিলোকেশন হয় না এবং ইটারেটর অকার্যকর হওয়া রোধ হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Prefer emplace_back() over push_back() for non-primitive types. Emplacing constructs elements directly in place inside the vector, bypassing redundant temporary object construction and copy passes.',
        bn: 'নিয়ম ২: কাস্টম অবজেক্টের ক্ষেত্রে push_back()-এর বদলে emplace_back() ব্যবহার করুন। এটি সরাসরি ভেক্টরের মেমোরিতে অবজেক্ট তৈরি করে সাময়িক অবজেক্ট কপি করার বাড়তি খরচ বাঁচায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Beware of iterator invalidation after mutator operations. Adding elements via push_back() or inserting elements can trigger reallocation, turning active iterators and references into dangling pointers.',
        bn: 'নিয়ম ৩: উপাদান যোগ বা পরিবর্তনের পর ইটারেটর অকার্যকর হওয়ার ব্যাপারে সতর্ক থাকুন। push_back() বা insert করার সময় মেমোরি রিলোকেট হলে আগের ইটারেটর বা রেফারেন্স ড্যাংলিং পয়েন্টারে পরিণত হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Default to std::vector unless specific constraints dictate otherwise. Due to hardware CPU cache lines, std::vector outperforms node-based lists in virtually all real-world computational workloads.',
        bn: 'নিয়ম ৪: বিশেষ কোনো বাধ্যবাধকতা না থাকলে ডিফল্ট কন্টেইনার হিসেবে std::vector বেছে নিন। হার্ডওয়্যারের ক্যাশ সুবিধার কারণে বাস্তবে প্রায় সব ক্ষেত্রেই ভেক্টর লিংকড লিস্টের চেয়ে অনেক বেশি দ্রুত গতিতে চলে।'
      }
    }
  ],
  exercises: [
    {
      id: 'cpp-vec-ex1',
      kind: 'mcq',
      topic: 'Contiguous memory and hardware cache line advantages of std::vector',
      question: {
        en: 'Why does std::vector consistently outperform std::list for element traversal on modern hardware architectures?',
        bn: 'আধুনিক কম্পিউটার আর্কিটেকচারে উপাদানসমূহ ঘুরে দেখার ক্ষেত্রে std::list-এর তুলনায় std::vector কেন লক্ষণীয়ভাবে বেশি দ্রুত কাজ করে?'
      },
      options: [
        {
          en: 'std::vector allocates elements contiguously in RAM, maximizing CPU 64-byte cache line utilization and eliminating memory bus stall misses',
          bn: 'std::vector র্যামে উপাদানগুলোকে পরপর অবিচ্ছিন্নভাবে রাখে, যা সিপিইউর ৬৪-বাইটের ক্যাশ লাইন সুবিধা পুরোপুরি কাজে লাগায় এবং ক্যাশ মিস দূর করে'
        },
        {
          en: 'Because std::vector turns off the computer monitor display during loops',
          bn: 'কারণ লুপ চলার সময় std::vector মনিটরের ডিসপ্লে বন্ধ করে দেয়'
        },
        {
          en: 'std::list is an invalid C++ container that fails to compile',
          bn: 'std::list একটি অবৈধ C++ কন্টেইনার যা কখনো কম্পাইল হতে পারে না'
        },
        {
          en: 'Because vectors can only store integers up to the number 10',
          bn: 'কারণ ভেক্টর কেবল ১০ পর্যন্ত পূর্ণসংখ্যা জমা রাখতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sequential contiguous layout vs scattered heap nodes.',
        bn: 'পরপর অবিচ্ছিন্ন মেমোরি বনাম হিপে ছড়িয়ে থাকা বিচ্ছিন্ন নোড।'
      },
      explanation: {
        en: 'Modern CPUs fetch 64-byte cache lines. Contiguous vector elements reside in cache together, whereas list nodes scatter across the heap, triggering latency penalties.',
        bn: 'আধুনিক সিপিইউ একবারে ৬৪ বাইটের ক্যাশ লাইন লোড করে। ভেক্টরের উপাদানগুলো একসাথে ক্যাশে চলে আসে, কিন্তু লিস্টের নোডগুলো ছড়ানো থাকায় প্রতিবার সময় নষ্ট হয়।'
      }
    },
    {
      id: 'cpp-vec-ex2',
      kind: 'mcq',
      topic: 'Size versus Capacity in std::vector',
      question: {
        en: 'What is the distinction between vec.size() and vec.capacity() in std::vector?',
        bn: 'std::vector-এ vec.size() এবং vec.capacity()-এর মধ্যকার মূল পার্থক্য কী?'
      },
      options: [
        {
          en: 'size() is the number of active elements currently stored in the vector, while capacity() is the total elements the allocated memory buffer can hold before reallocation',
          bn: 'size() হলো বর্তমানে সংরক্ষিত উপাদানের সংখ্যা, আর capacity() হলো মেমোরি পুনরায় বরাদ্দ না করে বাফারে মোট কতটি উপাদান রাখা সম্ভব তার পরিমাপ'
        },
        {
          en: 'size() is measured in miles while capacity() is measured in gallons',
          bn: 'size() মাপা হয় মাইলে আর capacity() মাপা হয় গ্যালনে'
        },
        {
          en: 'Both always return the identical number at all times',
          bn: 'উভয়ই সব সময় হুবহু একই সংখ্যা প্রদান করে'
        },
        {
          en: 'capacity() is the size of the computer hard disk',
          bn: 'capacity() হলো কম্পিউটারের পুরো হার্ডডিস্কের মোট আকার'
        }
      ],
      answer: 0,
      hint: {
        en: 'Active element count vs allocated buffer slot capacity.',
        bn: 'বর্তমান উপাদান সংখ্যা বনাম বরাদ্দকৃত মেমোরি স্লটের ধারণক্ষমতা।'
      },
      explanation: {
        en: 'size() indicates how many elements have been pushed. capacity() reflects the current buffer capacity, which grows geometrically.',
        bn: 'size() জানায় কতগুলো উপাদান জমা আছে। আর capacity() নির্দেশ করে বর্তমান বাফারে না বাড়িয়ে আর কতগুলো উপাদান রাখা সম্ভব।'
      }
    },
    {
      id: 'cpp-vec-ex3',
      kind: 'mcq',
      topic: 'Iterator invalidation during vector reallocation',
      question: {
        en: 'What dangerous hazard is caused by iterator invalidation after calling vec.push_back()?',
        bn: 'vec.push_back() কল করার পর ইটারেটর অকার্যকর (Iterator Invalidation) হলে কোন মারাত্মক বিপদের ঝুঁকি তৈরি হয়?'
      },
      options: [
        {
          en: 'If push_back triggers a buffer reallocation, existing iterators, pointers, and references point to freed memory, causing undefined behavior if dereferenced',
          bn: 'push_back যদি মেমোরি রিলোকেশন ঘটায়, তবে আগের ইটারেটর ও পয়েন্টারগুলো অবমুক্ত মেমোরি নির্দেশ করে এবং ব্যবহারে মারাত্মক অনির্ধারিত আচরণ ঘটায়'
        },
        {
          en: 'The compiler shuts down all running programs on the computer',
          bn: 'কম্পাইলার কম্পিউটারের সমস্ত চলমান সফটওয়্যার বন্ধ করে দেয়'
        },
        {
          en: 'The vector element values are permanently multiplied by 100',
          bn: 'ভেক্টরের সমস্ত উপাদানের মান চিরতরে ১০০ দিয়ে গুণ হয়ে যায়'
        },
        {
          en: 'The vector turns into an HTML file on the desktop',
          bn: 'ভেক্টরটি ডেস্কটপে একটি এইচটিএমএল ফাইলে রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Old pointers point to deallocated memory after growth.',
        bn: 'মেমোরি বাড়ানোর পর পুরোনো পয়েন্টারগুলো অবমুক্ত মেমোরিকে নির্দেশ করে।'
      },
      explanation: {
        en: 'When a vector grows beyond its capacity, it moves to a new heap allocation. All pointers and iterators to the old allocation become dangling pointers.',
        bn: 'ভেক্টর ক্যাপাসিটি ছাড়িয়ে বড় হলে নতুন মেমোরিতে চলে যায়। ফলে পুরোনো বাফারের দিকে নির্দেশ করা সমস্ত ইটারেটর ও পয়েন্টার ড্যাংলিং হয়ে যায়।'
      }
    },
    {
      id: 'cpp-vec-ex4',
      kind: 'mcq',
      topic: 'emplace_back versus push_back efficiency',
      question: {
        en: 'Why is emplace_back(args...) often more efficient than push_back(Type(args...))?',
        bn: 'push_back(Type(args...))-এর চেয়ে emplace_back(args...) ব্যবহার করা কেন প্রায়শই বেশি দক্ষ ও দ্রুতগতির?'
      },
      options: [
        {
          en: 'emplace_back constructs the object directly in place inside the vector memory buffer, eliminating temporary object construction and copy/move passes',
          bn: 'emplace_back সরাসরি ভেক্টর বাফারের ভেতর অবজেক্টটি তৈরি করে, ফলে সাময়িক অবজেক্ট তৈরি এবং তা কপি বা মুভ করার বাড়তি খরচ বাঁচে'
        },
        {
          en: 'emplace_back makes the code compile without using any memory',
          bn: 'emplace_back কোনো মেমোরি ব্যবহার না করেই কোড কম্পাইল করতে দেয়'
        },
        {
          en: 'push_back is only supported on 16-bit MS-DOS computers',
          bn: 'push_back কেবলমাত্র ১৬-বিট এমএস-ডস কম্পিউটারেই সমর্থিত'
        },
        {
          en: 'emplace_back encrypts the vector with a cryptographic password',
          bn: 'emplace_back ভেক্টরটিকে একটি গোপন পাসওয়ার্ড দিয়ে এনক্রিপ্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'In-place construction without creating a temporary object.',
        bn: 'কোনো সাময়িক অবজেক্ট না বানিয়ে সরাসরি মূল জায়গায় অবজেক্ট তৈরি করা।'
      },
      explanation: {
        en: 'emplace_back uses placement new to construct the object directly into the pre-allocated buffer slot, eliminating temporary object overhead.',
        bn: 'emplace_back প্লেসমেন্ট new ব্যবহার করে সরাসরি বাফারের খালি স্লটে অবজেক্ট তৈরি করে, যার ফলে সাময়িক অবজেক্ট তৈরির কোনো ঝামেলা থাকে না।'
      }
    }
  ],
  quiz: {
    id: 'stl-and-the-vector-quiz',
    title: {
      en: 'STL & std::vector Architecture Quiz',
      bn: 'STL ও std::vector আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-geometric-growth-amortization',
        kind: 'mcq',
        topic: 'Why geometric doubling achieves amortized O(1) appending',
        question: {
          en: 'Why does doubling capacity (geometric scaling) provide amortized O(1) time complexity for vector insertions, whereas adding fixed increments (+10) would degrade to O(N)?',
          bn: 'ক্যাপাসিটি দ্বিগুণ করা (জ্যামিতিক বৃদ্ধি) কেন ভেক্টরে উপাদানের সংযোজনকে এমর্টাইজড O(1) সময় দেয়, যেখানে নির্দিষ্ট সংখ্যা যোগ করলে (+১০) তা O(N)-এ নেমে যেত?'
        },
        options: [
          {
            en: 'Doubling ensures that expensive reallocations happen exponentially less frequently as the vector grows, spreading the copying cost evenly across all N insertions',
            bn: 'দ্বিগুণ করার ফলে ভেক্টর যত বড় হয় ব্যয়বহুল রিলোকেশন তত কম ঘটে, যা সমস্ত উপাদানের মাঝে মেমোরি কপির মোট খরচ সমানভাবে বণ্টন করে দেয়'
          },
          {
            en: 'Because computers can only multiply by 2 and cannot perform addition',
            bn: 'কারণ কম্পিউটার কেবল ২ দিয়ে গুণ করতে পারে কিন্তু যোগ করতে পারে না'
          },
          {
            en: 'Because fixed increments delete the entire vector every 10 elements',
            bn: 'কারণ নির্দিষ্ট সংখ্যা যোগ করলে প্রতি ১০টি উপাদান পর পর পুরো ভেক্টর মুছে যায়'
          },
          {
            en: 'Geometric growth makes the computer fan spin twice as fast',
            bn: 'জ্যামিতিক বৃদ্ধি কম্পিউটারের কুলিং ফ্যানকে দ্বিগুণ দ্রুত চালায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Exponentially decreasing reallocation frequency.',
          bn: 'ভেক্টর যত বাড়ে মেমোরি পরিবর্তনের প্রয়োজনীয়তা তত দ্রুত কমে আসা।'
        },
        explanation: {
          en: 'Geometric doubling ensures total copy operations for N insertions sum to at most 2N. Amortized over N operations, each insertion averages O(1) time.',
          bn: 'জ্যামিতিক বৃদ্ধিতে N উপাদানের জন্য মোট কপি অপারেশন সর্বোচ্চ 2N হয়। N দিয়ে ভাগ করলে প্রতিটি উপাদানের জন্য গড় সময় O(1) থাকে।'
        }
      },
      {
        id: 'q-reserve-vs-resize',
        kind: 'mcq',
        topic: 'Difference between reserve() and resize() in std::vector',
        question: {
          en: 'What is the operational difference between calling vec.reserve(10) and vec.resize(10)?',
          bn: 'std::vector-এ vec.reserve(10) এবং vec.resize(10) ডাকার মধ্যে কার্যকর পার্থক্য কী?'
        },
        options: [
          {
            en: 'reserve(10) allocates capacity without creating elements (size remains unchanged), whereas resize(10) changes size to 10 by default-constructing actual elements',
            bn: 'reserve(10) কোনো উপাদান তৈরি না করেই কেবল বাফার ক্যাপাসিটি বাড়ায় (সাইজ অপরিবর্তিত থাকে), আর resize(10) ডিফল্ট মান দিয়ে ১০টি উপাদান তৈরি করে সাইজ ১০ করে'
          },
          {
            en: 'reserve(10) deletes 10 elements while resize(10) prints 10 numbers',
            bn: 'reserve(10) ১০টি উপাদান মুছে ফেলে আর resize(10) ১০টি সংখ্যা প্রিন্ট করে'
          },
          {
            en: 'resize(10) only works on Windows while reserve(10) only works on Linux',
            bn: 'resize(10) কেবল উইন্ডোজে কাজ করে আর reserve(10) কেবল লিনাক্সে কাজ করে'
          },
          {
            en: 'Both functions are completely identical synonyms',
            bn: 'দুটি ফাংশনই একে অপরের সম্পূর্ণ সমার্থক ও অভিন্ন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Allocating raw capacity vs constructing actual elements.',
          bn: 'শুধু বাফার জায়গা বরাদ্দ করা বনাম বাস্তবে উপাদান তৈরি করে সাইজ বাড়ানো।'
        },
        explanation: {
          en: 'reserve() modifies capacity() without changing size(). resize() modifies size() by constructing or destructing elements.',
          bn: 'reserve() সাইজ না বদলে শুধু ক্যাপাসিটি বাড়ায়। আর resize() সরাসরি উপাদান তৈরি করে সাইজ বৃদ্ধি করে।'
        }
      },
      {
        id: 'q-std-array-stack-allocation',
        kind: 'mcq',
        topic: 'std::array stack allocation vs std::vector heap allocation',
        question: {
          en: 'When should a systems engineer choose std::array<T, N> over std::vector<T>?',
          bn: 'একজন সিস্টেম ইঞ্জিনিয়ার কখন std::vector<T>-এর বদলে std::array<T, N> বেছে নেবেন?'
        },
        options: [
          {
            en: 'When the element count N is small and strictly fixed at compile time, eliminating heap dynamic allocation overhead entirely by storing elements on the stack',
            bn: 'যখন উপাদান সংখ্যা N ছোট এবং কম্পাইল টাইমে নিশ্চিতভাবে জানা থাকে, যাতে হিপের খরচ বাঁচিয়ে সরাসরি স্ট্যাকে মেমোরি রাখা যায়'
          },
          {
            en: 'When the program needs to connect to the internet',
            bn: 'যখন প্রোগ্রামটির ইন্টারনেটের সাথে যুক্ত হওয়ার প্রয়োজন হয়'
          },
          {
            en: 'When storing more than 50 billion gigabytes of data',
            bn: '৫০ বিলিয়ন গিগাবাইটের বেশি ডেটা সংরক্ষণের প্রয়োজন হলে'
          },
          {
            en: 'std::array is an obsolete C++98 feature that should never be used',
            bn: 'std::array একটি পুরোনো অপ্রচলিত ফিচার যা কখনো ব্যবহার করা উচিত নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fixed compile-time size allocated directly on the stack.',
          bn: 'নির্দিষ্ট সাইজের ডেটা যা সরাসরি স্ট্যাক ফ্রেমে সংরক্ষিত হয়।'
        },
        explanation: {
          en: 'std::array<T, N> has zero heap allocation overhead, storing its elements inline on the stack with compile-time fixed size.',
          bn: 'std::array<T, N> কোনো হিপ মেমোরি খরচ করে না, এটি সরাসরি স্ট্যাকে নির্দিষ্ট সাইজে সংরক্ষিত হয়ে দ্রুততম গতি দেয়।'
        }
      },
      {
        id: 'q-map-vs-unordered-map',
        kind: 'mcq',
        topic: 'std::map (Red-Black tree) vs std::unordered_map (Hash table)',
        question: {
          en: 'What is the internal data structure difference between std::map and std::unordered_map in the C++ STL?',
          bn: 'C++ STL-এ std::map এবং std::unordered_map-এর অভ্যন্তরীণ ডেটা স্ট্রাকচারের মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'std::map is an ordered balanced Red-Black tree providing O(log N) operations, while std::unordered_map is a hash table offering average O(1) operations with bucket hashing',
            bn: 'std::map হলো একটি সাজানো সুষম রেড-ব্ল্যাক ট্রি যা O(log N) গতি দেয়, আর std::unordered_map হলো একটি হ্যাশ টেবিল যা বাকেট হ্যাশিংয়ের মাধ্যমে গড়ে O(1) গতি দেয়'
          },
          {
            en: 'std::map is stored on the computer keyboard while unordered_map is stored in the mouse',
            bn: 'std::map কিবোর্ডে থাকে আর unordered_map মাউসের মেমোরিতে থাকে'
          },
          {
            en: 'std::map can only store countries while unordered_map stores cities',
            bn: 'std::map কেবল দেশের নাম আর unordered_map কেবল শহরের নাম জমা রাখে'
          },
          {
            en: 'There is no difference; they are exact duplicates',
            bn: 'কোনো পার্থক্য নেই; উভয়ই একে অপরের হুবহু প্রতিরূপ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Red-Black tree O(log N) vs Hash table O(1).',
          bn: 'রেড-ব্ল্যাক ট্রি O(log N) বনাম হ্যাশ টেবিল O(1)।'
        },
        explanation: {
          en: 'std::map uses a Red-Black tree maintaining keys in sorted order with O(log N) complexity. std::unordered_map uses a hash table with O(1) average lookup.',
          bn: 'std::map রেড-ব্ল্যাক ট্রি ব্যবহার করে কিগুলোকে সাজিয়ে রাখে এবং O(log N) গতি দেয়। std::unordered_map হ্যাশ টেবিল দিয়ে গড়ে O(1) সময়ে কাজ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'move-and-the-rvalue',
    title: {
      en: 'Move Semantics & Rvalue References — Zero-Copy Resource Transfers with std::move',
      bn: 'মুভ সেমান্টিকস ও rvalue রেফারেন্স — std::move দিয়ে শূন্য-কপি রিসোর্স স্থানান্তর'
    }
  }
};
