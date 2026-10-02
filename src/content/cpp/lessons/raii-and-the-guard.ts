import type { Lesson } from '../../../lib/types';

export const RaiiAndTheGuardLesson: Lesson = {
  slug: 'raii-and-the-guard',
  tech: 'cpp',
  title: {
    en: 'RAII & Smart Pointers — Deterministic Resource Management with std::unique_ptr & std::shared_ptr',
    bn: 'RAII ও স্মার্ট পয়েন্টার — std::unique_ptr ও std::shared_ptr দিয়ে সুনির্দিষ্ট রিসোর্স ব্যবস্থাপনা'
  },
  summary: {
    en: 'Resource Acquisition Is Initialization (RAII) represents the quintessential design idiom of C++, establishing deterministic resource safety without runtime garbage collection pauses. RAII ties the acquisition of finite operating system resources (heap memory, file handles, sockets, mutex locks) to the constructor of a stack-allocated wrapper object and binds resource release to its destructor. During regular returns or unexpected exception stack unwinding, destructors run automatically in reverse order of declaration, eliminating memory leaks permanently. Modern C++ standardizes RAII through smart pointers: std::unique_ptr enforces exclusive zero-overhead single ownership (8 bytes), std::shared_ptr provides reference-counted shared ownership (16 bytes), and std::weak_ptr breaks circular ownership cycles.',
    bn: 'রিসোর্স অ্যাকুইজিশন ইজ ইনিশিয়ালাইজেশন (RAII) হলো C++ এর সবচেয়ে আদর্শ ডিজাইন প্যাটার্ন, যা কোনো প্রকার রানটাইম গার্বেজ কালেকশন বিলম্ব ছাড়াই শতভাগ নিশ্চিত রিসোর্স নিরাপত্তা প্রদান করে। RAII অপারেটিং সিস্টেমের যেকোনো সীমিত রিসোর্সের (হিপ মেমোরি, ফাইল হ্যান্ডেল, নেটওয়ার্ক সকেট, মিউটেক্স লক) বরাদ্দের দায়িত্বকে স্ট্যাক অবজেক্টের কনস্ট্রাক্টরের সাথে এবং তা মুক্ত করার দায়িত্বকে ডেস্ট্রাক্টরের সাথে আবদ্ধ করে। স্বাভাবিক রিটার্ন হোক বা অনাকাঙ্ক্ষিত এক্সেপশনজনিত স্ট্যাক আনওয়াইন্ডিং, ঘোষণার বিপরীত ক্রমে স্বয়ংক্রিয়ভাবে ডেস্ট্রাক্টরগুলো চালিত হয় এবং মেমোরি লিক স্থায়ীভাবে দূর করে। আধুনিক C++ স্মার্ট পয়েন্টারের মাধ্যমে RAII প্রয়োগ করে: std::unique_ptr দেয় জিরো-ওভারহেড একক মালিকানা (৮ বাইট), std::shared_ptr দেয় রেফারেন্স-কাউন্টেড যৌথ মালিকানা (১৬ বাইট) এবং std::weak_ptr বৃত্তাকার রেফারেন্সের অচলাবস্থা দূর করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The RAII Architectural Guarantee',
        bn: 'মূল ধারণা: RAII আর্কিটেকচারাল নিশ্চয়তা'
      }
    },
    {
      type: 'visual',
      id: 'execution'
    },
    {
      type: 'para',
      text: {
        en: 'When you build large-scale applications in C++, manual memory and resource management with raw new and delete represents the leading cause of memory leaks, double-free bugs, and security vulnerabilities. Resource Acquisition Is Initialization, commonly known as RAII, is the foundational paradigm of modern C++ that solves this problem permanently. By tying resource lifetimes to local stack objects, C++ guarantees deterministic cleanup even during runtime exceptions.',
        bn: 'C++ এ যখন আপনি বৃহদাকার অ্যাপ্লিকেশন তৈরি করেন, তখন ম্যানুয়াল new এবং delete দিয়ে মেমোরি পরিচালনা করাই মেমোরি লিক, ডাবল-ফ্রি ও নিরাপত্তা ত্রুটির প্রধান উৎস হয়ে দাঁড়ায়। রিসোর্স অ্যাকুইজিশন ইজ ইনিশিয়ালাইজেশন বা RAII হলো আধুনিক C++ এর সবচেয়ে গুরুত্বপূর্ণ মৌলিক ধারণা যা এই সমস্যার স্থায়ী সমাধান দেয়। যেকোনো রিসোর্সের জীবনকালকে লোকাল স্ট্যাক অবজেক্টের সাথে যুক্ত করে C++ এক্সেপশন বা জটিল ক্র্যাশের মধ্যেও শতভাগ সুনির্দিষ্ট রিসোর্স অবমুক্তির নিশ্চয়তা দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'RAII Paradigm',
          def: {
            en: 'Resource Acquisition Is Initialization; binding resource lifecycle to the constructor and destructor of a stack-allocated guard',
            bn: 'রিসোর্স অ্যাকুইজিশন ইজ ইনিশিয়ালাইজেশন; রিসোর্স সংগ্রহ ও অবমুক্ত করার কাজকে স্ট্যাক অবজেক্টের কনস্ট্রাক্টর ও ডেস্ট্রাক্টরের সাথে আবদ্ধ করার নীতি'
          }
        },
        {
          term: 'Stack Unwinding',
          def: {
            en: 'The runtime procedure that walks backwards through the call stack during an unhandled exception, deterministically invoking all local destructors',
            bn: 'এক্সেপশন ঘটার পর রানটাইম কর্তৃক কল স্ট্যাকের পেছন দিকে ফিরে গিয়ে সমস্ত লোকাল অবজেক্টের ডেস্ট্রাক্টর নিশ্চিতভাবে চালানোর যান্ত্রিক প্রক্রিয়া'
          }
        },
        {
          term: 'std::unique_ptr',
          def: {
            en: 'A zero-overhead smart pointer that strictly manages exclusive single ownership of a heap resource, freeing it on destruction',
            bn: 'একটি শূন্য-ওভারহেড স্মার্ট পয়েন্টার যা হিপ মেমোরির একক ও স্বতন্ত্র মালিকানা পরিচালনা করে এবং ধ্বংসের সময় নিজে থেকেই মেমোরি খালি করে'
          }
        },
        {
          term: 'std::shared_ptr',
          def: {
            en: 'A reference-counted smart pointer managing shared resource ownership via an atomic heap control block',
            bn: 'একটি রেফারেন্স-কাউন্টিং স্মার্ট পয়েন্টার যা একটি হিপ কন্ট্রোল ব্লকের মাধ্যমে একাধিক অংশের মাঝে রিসোর্সের যৌথ মালিকানা পরিচালনা করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'stack-unwinding-safety',
      text: {
        en: 'Stack Unwinding: Exception Safety Without Finally Blocks',
        bn: 'স্ট্যাক আনওয়াইন্ডিং: Finally ব্লক ছাড়াই এক্সেপশন নিরাপত্তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In languages like Java or Python, cleanup logic requires explicit finally blocks. If an exception occurs before a manual delete statement, the function terminates abruptly and the resource is leaked forever.',
        bn: 'জাভা বা পাইথনের মতো ভাষায় রিসোর্স মুক্ত করার জন্য সুনির্দিষ্ট finally ব্লকের প্রয়োজন হয়। ম্যানুয়াল delete লেখার আগেই যদি কোনো এক্সেপশন ঘটে, তবে ফাংশনটি তৎক্ষণাৎ বন্ধ হয়ে যায় এবং সেই রিসোর্সটি চিরতরে লিক হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In C++, RAII leverages compiler-mandated stack unwinding. When an exception is thrown, the C++ runtime traverses backward through the active stack frames, systematically calling the destructor of every local object in reverse order of its creation. Because destructors execute unconditionally, locks are released and memory is returned automatically.',
        bn: 'C++ এ RAII কম্পাইলার-নিয়ন্ত্রিত স্ট্যাক আনওয়াইন্ডিং সুবিধা ব্যবহার করে। কোডে কোনো এক্সেপশন তৈরি হওয়ার সাথে সাথে রানটাইম কল স্ট্যাকের পেছনের ফ্রেমগুলোতে ফিরে আসে এবং তৈরির বিপরীত ক্রমানুসারে প্রতিটি লোকাল অবজেক্টের ডেস্ট্রাক্টর চালায়। ডেস্ট্রাক্টর যেহেতু যেকোনো পরিস্থিতিতেই চলে, তাই লক অবমুক্ত হয় এবং মেমোরি নিজে থেকেই সিস্টেমে ফেরত চলে আসে।'
      }
    },
    {
      type: 'heading',
      id: 'unique-ptr-mechanics',
      text: {
        en: 'std::unique_ptr: Zero-Cost Exclusive Ownership',
        bn: 'std::unique_ptr: শূন্য-ওভারহেডে একক মালিকানা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'std::unique_ptr represents absolute exclusive ownership of a dynamic resource. To prevent duplicate ownership bugs, its copy constructor and copy assignment operator are explicitly deleted (= delete). Transferring ownership requires explicit move semantics via std::move().',
        bn: 'std::unique_ptr কোনো ডাইনামিক রিসোর্সের নিরঙ্কুশ একক মালিকানা নিশ্চিত করে। একাধিক মালিকানার মারাত্মক ভুল রোধ করতে এর কপি কনস্ট্রাক্টর ও কপি অ্যাসাইনমেন্ট কম্পাইলারে মুছে ফেলা হয়েছে (= delete)। মালিকানা অন্য কাউকে হস্তান্তর করতে চাইলে স্পষ্টভাবে std::move() দিয়ে মুভ অপারেশন চালাতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Crucially, std::unique_ptr incurs zero runtime memory overhead. On a standard 64-bit architecture, it occupies exactly 8 bytes—identical to a raw C pointer. Using std::make_unique<T>() delivers guaranteed exception safety during allocation.',
        bn: 'সবচেয়ে চমৎকার বিষয় হলো, std::unique_ptr ব্যবহারে কোনো বাড়তি মেমোরি খরচ হয় না। স্ট্যান্ডার্ড ৬৪-বিট সিস্টেমে এটি সাধারণ সি পয়েন্টারের মতো হুবহু ৮ বাইট জায়গা দখল করে। বরাদ্দের সময় std::make_unique<T>() ব্যবহার করলে শতভাগ এক্সেপশন নিরাপত্তা নিশ্চিত হয়।'
      }
    },
    {
      type: 'heading',
      id: 'shared-ptr-mechanics',
      text: {
        en: 'std::shared_ptr and std::weak_ptr: Reference Counting',
        bn: 'std::shared_ptr ও std::weak_ptr: রেফারেন্স কাউন্টিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When multiple subsystems require concurrent access to a resource, std::shared_ptr maintains an atomic reference count inside a heap control block. On a 64-bit system, a shared_ptr consumes 16 bytes: 8 bytes for the object pointer and 8 bytes for the control block pointer.',
        bn: 'যখন অ্যাপ্লিকেশনের একাধিক মডিউলের একই রিসোর্সে প্রবেশের প্রয়োজন হয়, তখন std::shared_ptr একটি হিপ কন্ট্রোল ব্লকের ভেতর অ্যাটমিক রেফারেন্স কাউন্ট বজায় রাখে। ৬৪-বিট সিস্টেমে একটি shared_ptr মোট ১৬ বাইট জায়গা নেয়: মূল অবজেক্ট নির্দেশ করতে ৮ বাইট এবং কন্ট্রোল ব্লকের জন্য ৮ বাইট।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every copy increments the strong reference count, and every destructor decrements it. When the count drops to 0, the resource and control block are deallocated. To prevent cyclic reference memory leaks where two shared_ptr instances point to each other, std::weak_ptr provides a non-owning observer.',
        bn: 'প্রতিটি নতুন কপি শক্তিশালী রেফারেন্স কাউন্ট এক বৃদ্ধি করে এবং প্রতিটি ডেস্ট্রাক্টর তা এক কমিয়ে দেয়। রেফারেন্স কাউন্ট কমে ০ হওয়ার সাথে সাথে মূল রিসোর্স ও কন্ট্রোল ব্লক অবমুক্ত হয়। দুটি shared_ptr একে অপরকে নির্দেশ করে যাতে কোনো মেমোরি অচলাবস্থা বা সাইক্লিক লিক না ঘটায়, সেজন্য std::weak_ptr মালিকানাহীন পর্যবেক্ষক হিসেবে কাজ করে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Pointer Ownership Models',
        bn: 'কাঠামোগত তুলনা: পয়েন্টার মালিকানা মডেলসমূহ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Pointer Type', bn: 'পয়েন্টার রূপ' },
        { en: 'Memory Footprint', bn: 'মেমোরি আকার' },
        { en: 'Copy Semantics', bn: 'কপি করার নিয়ম' },
        { en: 'Deallocation Responsibility', bn: 'মেমোরি অবমুক্তির দায়িত্ব' }
      ],
      rows: [
        [
          { en: 'Raw Pointer (T *)', bn: 'সাধারণ র\' পয়েন্টার (T *)' },
          { en: '8 bytes (64-bit address)', bn: '৮ বাইট (৬৪-বিট অ্যাড্রেস)' },
          { en: 'Shallow copy; creates duplicate raw pointers', bn: 'শ্যালো কপি; ডুপ্লিকেট পয়েন্টার তৈরি করে' },
          { en: 'Manual programmer delete; extreme leak hazard', bn: 'ম্যানুয়াল delete; মারাত্মক মেমোরি লিকের ঝুঁকি' }
        ],
        [
          { en: 'std::unique_ptr<T>', bn: 'std::unique_ptr<T>' },
          { en: '8 bytes (zero overhead)', bn: '৮ বাইট (শূন্য অতিরিক্ত খরচ)' },
          { en: 'Non-copyable; movable only via std::move', bn: 'কপি করা যায় না; কেবল std::move দিয়ে স্থানান্তর' },
          { en: 'Automatic upon destructor scope exit', bn: 'স্কোপ শেষ হলে ডেস্ট্রাক্টরে সম্পূর্ণ স্বয়ংক্রিয়' }
        ],
        [
          { en: 'std::shared_ptr<T>', bn: 'std::shared_ptr<T>' },
          { en: '16 bytes (ptr + control block)', bn: '১৬ বাইট (অবজেক্ট + কন্ট্রোল ব্লক)' },
          { en: 'Copyable; atomically increments reference count', bn: 'কপিযোগ্য; অ্যাটমিকভাবে রেফারেন্স কাউন্ট বৃদ্ধি করে' },
          { en: 'Automatic when atomic use_count hits 0', bn: 'রেফারেন্স কাউন্ট ০ হলে স্বয়ংক্রিয় অবমুক্তি' }
        ],
        [
          { en: 'std::weak_ptr<T>', bn: 'std::weak_ptr<T>' },
          { en: '16 bytes (ptr + control block)', bn: '১৬ বাইট (অবজেক্ট + কন্ট্রোল ব্লক)' },
          { en: 'Copyable; tracks weak references without owning', bn: 'কপিযোগ্য; মালিকানা ছাড়া দুর্বল ট্র্যাকিং করে' },
          { en: 'No ownership; must promote to shared_ptr via lock()', bn: 'মালিকানা নেই; lock() দিয়ে shared_ptr করতে হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: SharedPtr Reference Counting Lifecycle',
        bn: 'বাস্তব কোড সিমুলেশন: SharedPtr রেফারেন্স কাউন্টিং লাইফসাইকেল'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of C++ RAII, UniquePtr & SharedPtr in Node.js

class ControlBlock {
  public strongCount = 1;
}

class SimSharedPtr {
  public controlBlock: ControlBlock;

  constructor(public resourceId: string, controlBlock: ControlBlock | null = null) {
    if (controlBlock) {
      this.controlBlock = controlBlock;
      this.controlBlock.strongCount += 1;
    } else {
      this.controlBlock = new ControlBlock();
    }
  }

  copy(): SimSharedPtr {
    return new SimSharedPtr(this.resourceId, this.controlBlock);
  }

  release(): { freed: boolean; remaining: number } {
    this.controlBlock.strongCount -= 1;
    const remaining = this.controlBlock.strongCount;
    if (remaining === 0) {
      return { freed: true, remaining: 0 };
    }
    return { freed: false, remaining };
  }

  useCount(): number {
    return this.controlBlock.strongCount;
  }
}

// Simulating shared_ptr lifecycle
const sp1 = new SimSharedPtr('0x4000'); // count = 1
const initialCount = sp1.useCount();

const sp2 = sp1.copy(); // count = 2
const countAfterCopy = sp1.useCount();

const res1 = sp1.release(); // sp1 destroyed -> count = 1
const countAfterFirstRelease = res1.remaining;

const res2 = sp2.release(); // sp2 destroyed -> count = 0 -> FREED!
const countAfterFinalRelease = res2.remaining;

console.log('Shared pointer initial reference count upon creation:', initialCount);
// -> Shared pointer initial reference count upon creation: 1
console.log('Shared pointer reference count after creating second copy:', countAfterCopy);
// -> Shared pointer reference count after creating second copy: 2
console.log('Reference count after first pointer leaves scope:', countAfterFirstRelease);
// -> Reference count after first pointer leaves scope: 1
console.log('Reference count after final owner leaves scope (freed):', countAfterFinalRelease);
// -> Reference count after final owner leaves scope (freed): 0
console.log('Size of std::unique_ptr on 64-bit architecture in bytes: 8');
// -> Size of std::unique_ptr on 64-bit architecture in bytes: 8
console.log('Size of std::shared_ptr on 64-bit architecture in bytes: 16');
// -> Size of std::shared_ptr on 64-bit architecture in bytes: 16`,
      caption: {
        en: 'Simulation: initial refCount is 1; copy increments to 2; scope exit drops to 1; final exit hits 0 (resource freed); unique_ptr is 8 bytes, shared_ptr is 16 bytes',
        bn: 'সিমুলেশন: শুরুতে রেফারেন্স কাউন্ট ১; কপিতে বেড়ে ২ হয়; প্রস্থান করলে ১ থাকে; শেষ প্রস্থানে ০ হয়ে মেমোরি মুক্ত হয়; unique_ptr ৮ বাইট, shared_ptr ১৬ বাইট'
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
        en: 'Rule 1: Prefer std::make_unique and std::make_shared over explicit new. Factory functions provide complete exception safety and allocate the managed object and control block in a single contiguous memory chunk.',
        bn: 'নিয়ম ১: সরাসরি new লেখার বদলে সর্বদা std::make_unique ও std::make_shared ব্যবহার করুন। এই ফ্যাক্টরি মেথডগুলো নিখুঁত এক্সেপশন নিরাপত্তা দেয় এবং অবজেক্ট ও কন্ট্রোল ব্লককে একটি একক মেমোরি অংশে তৈরি করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Default to std::unique_ptr for dynamic resources. Only promote to std::shared_ptr when genuine multiple-ownership architecture is strictly required by the design.',
        bn: 'নিয়ম ২: ডাইনামিক রিসোর্সের ক্ষেত্রে শুরুতেই std::unique_ptr বেছে নিন। যখন সত্যিকার অর্থেই একাধিক মডিউলের মাঝে যৌথ মালিকানার প্রয়োজন হবে তখনই কেবল std::shared_ptr ব্যবহার করুন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Use std::weak_ptr to break cyclic shared pointer dependencies. Circular references between shared_ptr instances prevent the reference count from ever reaching 0, causing permanent memory leaks.',
        bn: 'নিয়ম ৩: সাইক্লিক রেফারেন্সের ফাঁদ এড়াতে std::weak_ptr ব্যবহার করুন। দুটি shared_ptr পরস্পরকে নির্দেশ করলে রেফারেন্স কাউন্ট কখনোই ০ হতে পারে না, ফলে স্থায়ী মেমোরি লিক ঘটে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Apply RAII to all concurrency mutexes using std::lock_guard or std::unique_lock. Manual mutex.unlock() calls risk permanent application deadlocks if an early return or exception triggers.',
        bn: 'নিয়ম ৪: থ্রেডিংয়ের মিউটেক্স লকে std::lock_guard বা std::unique_lock ব্যবহার করুন। ম্যানুয়ালি unlock() ডাকলে হঠাৎ কোনো এক্সেপশন বা আগাম রিটার্নে পুরো সিস্টেমে স্থায়ী ডেডলক তৈরি হতে পারে।'
      }
    }
  ],
  exercises: [
    {
      id: 'cpp-raii-ex1',
      kind: 'mcq',
      topic: 'The core guarantee of the RAII design pattern in C++',
      question: {
        en: 'What fundamental architectural guarantee does the RAII idiom provide in C++?',
        bn: 'C++ এ RAII ডিজাইন প্যাটার্ন কোন মৌলিক আর্কিটেকচারাল নিশ্চয়তা প্রদান করে?'
      },
      options: [
        {
          en: 'Resources acquired in a constructor are guaranteed to be released in the destructor when the stack object leaves scope, even if an exception unwinds the call stack',
          bn: 'কনস্ট্রাক্টরে বরাদ্দকৃত রিসোর্সটি স্কোপ শেষ হওয়ার সাথে সাথে ডেস্ট্রাক্টরে নিশ্চিতভাবে অবমুক্ত হবে, এমনকি এক্সেপশনের ফলে স্ট্যাক আনওয়াইন্ডিং ঘটলেও'
        },
        {
          en: 'It guarantees that programs will compile 50 times faster in the terminal',
          bn: 'এটি নিশ্চিত করে যে টার্মিনালে কোড ৫০ গুণ দ্রুত কম্পাইল হবে'
        },
        {
          en: 'It forces the operating system to double the size of the computer hard drive',
          bn: 'এটি অপারেটিং সিস্টেমকে হার্ডড্রাইভের ধারণক্ষমতা দ্বিগুণ করতে বাধ্য করে'
        },
        {
          en: 'It deletes all comments from the source code file automatically',
          bn: 'এটি সোর্স ফাইল থেকে সমস্ত কমেন্ট নিজে থেকেই মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Deterministic release of resources upon leaving scope.',
        bn: 'স্কোপ শেষ হওয়ার সাথে সাথে সুনির্দিষ্টভাবে মেমোরি ও রিসোর্স অবমুক্ত হওয়া।'
      },
      explanation: {
        en: 'RAII ties resource lifetimes to stack object scope. The C++ runtime guarantees that stack unwinding invokes destructors unconditionally.',
        bn: 'RAII রিসোর্সের স্থায়িত্বকে স্ট্যাক অবজেক্টের সাথে যুক্ত করে। C++ রানটাইম নিশ্চিত করে যে স্ট্যাক আনওয়াইন্ডিংয়ের সময়ও ডেস্ট্রাক্টর চলবেই।'
      }
    },
    {
      id: 'cpp-raii-ex2',
      kind: 'mcq',
      topic: 'The copy semantics of std::unique_ptr',
      question: {
        en: 'Why does the expression std::unique_ptr<int> p2 = p1; fail to compile when p1 is an existing unique_ptr?',
        bn: 'p1 একটি বিদ্যমান unique_ptr হলে std::unique_ptr<int> p2 = p1; এক্সপ্রেশনটি কম্পাইল করতে কেন ব্যর্থ হয়?'
      },
      options: [
        {
          en: 'std::unique_ptr has its copy constructor deleted (= delete) to enforce strictly exclusive ownership; ownership must be transferred using std::move(p1)',
          bn: 'std::unique_ptr-এর কপি কনস্ট্রাক্টর মুছে ফেলা হয়েছে (= delete) যাতে একক মালিকানা অক্ষুণ্ণ থাকে; মালিকানা বদলাতে std::move(p1) ব্যবহার করতে হয়'
        },
        {
          en: 'Because C++ does not allow the equal sign in variable declarations',
          bn: 'কারণ C++ এ ভ্যারিয়েবল ঘোষণায় সমান চিহ্ন ব্যবহার করার অনুমতি নেই'
        },
        {
          en: 'Because pointers can only store negative numbers',
          bn: 'কারণ পয়েন্টার কেবল ঋণাত্মক সংখ্যা সংরক্ষণ করতে পারে'
        },
        {
          en: 'Because p2 has too few letters in its variable name',
          bn: 'কারণ p2 ভ্যারিয়েবলের নামে অক্ষরের সংখ্যা অনেক কম'
        }
      ],
      answer: 0,
      hint: {
        en: 'Exclusive ownership prohibits duplicating the pointer.',
        bn: 'একক মালিকানার কারণে পয়েন্টার কপি করা নিষিদ্ধ।'
      },
      explanation: {
        en: 'Copying a unique_ptr would create two owners, causing a double-free on destruction. It is move-only, enforcing single ownership.',
        bn: 'unique_ptr কপি করলে দুজন মালিক তৈরি হতো এবং ডাবল-ফ্রি ক্র্যাশ ঘটত। তাই এটি কেবল মুভ করা যায়, কপি করা নিষিদ্ধ।'
      }
    },
    {
      id: 'cpp-raii-ex3',
      kind: 'mcq',
      topic: 'std::shared_ptr memory footprint and control block',
      question: {
        en: 'What is the memory size of a std::shared_ptr on a 64-bit architecture, and what does it store?',
        bn: '৬৪-বিট সিস্টেমে একটি std::shared_ptr-এর মেমোরি সাইজ কত এবং এটি কী কী তথ্য ধারণ করে?'
      },
      options: [
        {
          en: '16 bytes: an 8-byte pointer to the managed resource plus an 8-byte pointer to the heap-allocated control block (holding reference counts)',
          bn: '১৬ বাইট: মূল রিসোর্স নির্দেশকারী একটি ৮-বাইটের পয়েন্টার এবং হিপের কন্ট্রোল ব্লক (রেফারেন্স কাউন্ট ধারণকারী) নির্দেশকারী একটি ৮-বাইটের পয়েন্টার'
        },
        {
          en: '0 bytes because smart pointers exist only virtually in the mind',
          bn: '০ বাইট কারণ স্মার্ট পয়েন্টার কেবল ভার্চুয়ালি মনে মনে অবস্থান করে'
        },
        {
          en: '64 kilobytes because it stores an entire backup operating system',
          bn: '৬৪ কিলোবাইট কারণ এটি পুরো অপারেটিং সিস্টেমের ব্যাকআপ রাখে'
        },
        {
          en: '1 byte representing the letter S for shared',
          bn: '১ বাইট যা shared শব্দের প্রথম অক্ষর S নির্দেশ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pointer to object plus pointer to control block.',
        bn: 'মূল অবজেক্টের পয়েন্টার এবং কন্ট্রোল ব্লকের পয়েন্টার।'
      },
      explanation: {
        en: 'A shared_ptr is a fat pointer consisting of two 8-byte pointers: one to the managed object, and one to the control block containing reference counts.',
        bn: 'shared_ptr হলো একটি ফ্যাট পয়েন্টার যা দুটি ৮-বাইটের পয়েন্টার নিয়ে গঠিত: একটি মূল অবজেক্ট নির্দেশ করে এবং অন্যটি রেফারেন্স কাউন্টের কন্ট্রোল ব্লক নির্দেশ করে।'
      }
    },
    {
      id: 'cpp-raii-ex4',
      kind: 'mcq',
      topic: 'Breaking cyclic references using std::weak_ptr',
      question: {
        en: 'What fatal memory hazard occurs when two objects hold std::shared_ptr references to each other, and how is it resolved?',
        bn: 'দুটি অবজেক্ট যদি পরস্পরকে std::shared_ptr দিয়ে নির্দেশ করে তবে কোন মারাত্মক মেমোরি সংকট তৈরি হয় এবং কীভাবে তা সমাধান করা যায়?'
      },
      options: [
        {
          en: 'A cyclic reference leak occurs because neither reference count can ever reach 0; it is resolved by converting one of the references into a non-owning std::weak_ptr',
          bn: 'সাইক্লিক রেফারেন্স লিক ঘটে কারণ কোনোটিরই রেফারেন্স কাউন্ট কখনো ০ হতে পারে না; যেকোনো একটিকে মালিকানাহীন std::weak_ptr বানিয়ে এটি সমাধান করা হয়'
        },
        {
          en: 'The computer screen turns permanently upside down',
          bn: 'কম্পিউটার স্ক্রিন চিরতরে উল্টে যায়'
        },
        {
          en: 'The C++ compiler deletes all files on the hard drive',
          bn: 'কম্পাইলার হার্ডড্রাইভের সমস্ত ফাইল মুছে ফেলে'
        },
        {
          en: 'No bug occurs because circular references run 10 times faster',
          bn: 'কোনো বাগ হয় না কারণ বৃত্তাকার রেফারেন্স ১০ গুণ বেশি দ্রুত গতিতে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Circular shared pointers never reach count 0 without a weak pointer.',
        bn: 'উইক পয়েন্টার ছাড়া বৃত্তাকার শেয়ার্ড পয়েন্টার কখনোই ০ হতে পারে না।'
      },
      explanation: {
        en: 'Cycles keep the strong reference count above 0 permanently, causing a memory leak. std::weak_ptr observes the object without incrementing strong ownership.',
        bn: 'পরস্পরকে নির্দেশ করলে রেফারেন্স কাউন্ট সর্বদা ১ বা তার বেশি থাকে, ফলে মেমোরি লিক হয়। std::weak_ptr শক্তিশালী মালিকানা ছাড়াই অবজেক্ট পর্যবেক্ষণ করে।'
      }
    }
  ],
  quiz: {
    id: 'raii-and-the-guard-quiz',
    title: {
      en: 'RAII & Smart Pointers Quiz',
      bn: 'RAII ও স্মার্ট পয়েন্টার কুইজ'
    },
    questions: [
      {
        id: 'q-make-shared-advantage',
        kind: 'mcq',
        topic: 'Why std::make_shared is preferred over std::shared_ptr(new T)',
        question: {
          en: 'What architectural and performance advantages does std::make_shared<T>() provide over explicit std::shared_ptr<T>(new T())?',
          bn: 'সরাসরি std::shared_ptr<T>(new T()) লেখার চেয়ে std::make_shared<T>() ব্যবহার কোন আর্কিটেকচারাল ও পারফরম্যান্স সুবিধা দেয়?'
        },
        options: [
          {
            en: 'It performs a single combined heap allocation for both the managed object and the control block, reducing memory fragmentation and guaranteeing complete exception safety',
            bn: 'এটি অবজেক্ট এবং কন্ট্রোল ব্লক উভয়ের জন্য হিপে মাত্র একটি সমন্বিত মেমোরি বরাদ্দ করে, যা ফ্র্যাগমেন্টেশন কমায় এবং শতভাগ এক্সেপশন নিরাপত্তা দেয়'
          },
          {
            en: 'It makes the compiled program run without having an operating system',
            bn: 'এটি কোনো অপারেটিং সিস্টেম ছাড়াই কম্পাইল করা সফটওয়্যার চালাতে সাহায্য করে'
          },
          {
            en: 'It translates the object into an HTML website',
            bn: 'এটি অবজেক্টটিকে একটি এইচটিএমএল ওয়েবসাইটে রূপান্তর করে'
          },
          {
            en: 'It limits the object to storing only prime numbers',
            bn: 'এটি অবজেক্টটিকে কেবলমাত্র মৌলিক সংখ্যা সংরক্ষণে সীমাবদ্ধ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Single contiguous allocation for object and control block.',
          bn: 'অবজেক্ট এবং কন্ট্রোল ব্লকের জন্য হিপে একটি মাত্র মেমোরি বরাদ্দ।'
        },
        explanation: {
          en: 'std::make_shared allocates both the object and control block in one contiguous memory block, halving allocation overhead and improving cache locality.',
          bn: 'std::make_shared অবজেক্ট ও কন্ট্রোল ব্লককে একটি মাত্র অবিচ্ছিন্ন ব্লকে তৈরি করে, যা মেমোরি বরাদ্দের খরচ অর্ধেকে নামিয়ে আনে ও ক্যাশ লোকালিটি বাড়ায়।'
        }
      },
      {
        id: 'q-lock-guard-concurrency',
        kind: 'mcq',
        topic: 'RAII for concurrency mutexes with std::lock_guard',
        question: {
          en: 'Why is using std::lock_guard<std::mutex> lock(mtx); mandatory over manual mtx.lock() and mtx.unlock() in multithreaded systems?',
          bn: 'মাল্টিথ্রেডেড সিস্টেমে ম্যানুয়াল mtx.lock() ও mtx.unlock()-এর চেয়ে কেন std::lock_guard<std::mutex> lock(mtx); ব্যবহার করা বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'If a function throws an exception or returns early before manual unlock(), the mutex remains locked forever causing deadlocks; lock_guard unlocks deterministically via RAII',
            bn: 'ম্যানুয়াল unlock()-এর আগে এক্সেপশন বা আগাম রিটার্ন ঘটলে মিউটেক্সটি চিরতরে লক থেকে ডেডলক বাঁধায়; lock_guard ডেস্ট্রাক্টরের মাধ্যমে তা সুনির্দিষ্টভাবে আনলক করে'
          },
          {
            en: 'Because modern computers do not allow more than 1 thread to run',
            bn: 'কারণ আধুনিক কম্পিউটার একের অধিক থ্রেড চালানোর অনুমতি দেয় না'
          },
          {
            en: 'To make the lock invisible to computer monitors',
            bn: 'লকটিকে কম্পিউটার মনিটর থেকে অদৃশ্য করে রাখতে'
          },
          {
            en: 'Because lock_guard turns off the internet connection for safety',
            bn: 'কারণ নিরাপত্তার জন্য lock_guard ইন্টারনেট সংযোগ বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Automatic unlocking on all return paths and exceptions.',
          bn: 'যেকোনো রিটার্ন বা এক্সেপশনে স্বয়ংক্রিয়ভাবে আনলক নিশ্চিত করা।'
        },
        explanation: {
          en: 'Manual unlocking is fragile: any exception or early return leaves the mutex locked, causing deadlocks. std::lock_guard guarantees unlock via its destructor.',
          bn: 'ম্যানুয়াল আনলক অনিরাপদ: কোনো এক্সেপশন ঘটলে মিউটেক্স লক থেকে ডেডলক হয়ে পুরো সিস্টেম আটকে যায়। lock_guard ডেস্ট্রাক্টরের মাধ্যমে নিশ্চিত আনলক করে।'
        }
      },
      {
        id: 'q-custom-deleter-smart-ptr',
        kind: 'mcq',
        topic: 'Custom deleters for managing non-memory OS resources with unique_ptr',
        question: {
          en: 'How can std::unique_ptr be adapted using custom deleters to safely manage C system resources like FILE* streams or POSIX file descriptors?',
          bn: 'std::unique_ptr-এ কাস্টম ডিলিটার যোগ করে কীভাবে সি সিস্টেমের রিসোর্স যেমন FILE* স্ট্রিম বা পসিক্স ফাইল ডেসক্রিপ্টর নিরাপদে পরিচালনা করা যায়?'
        },
        options: [
          {
            en: 'By supplying a custom lambda or callable deleter (e.g. std::unique_ptr<FILE, decltype(&fclose)> p(fopen(...), &fclose)) so fclose is invoked on scope exit',
            bn: 'একটি কাস্টম ল্যাম্বডা বা কলব্যাক ডিলিটার দিয়ে (যেমন std::unique_ptr<FILE, decltype(&fclose)> p(fopen(...), &fclose)) যাতে স্কোপ শেষ হলে fclose চলে'
          },
          {
            en: 'By renaming the file extension from .c to .txt on the hard drive',
            bn: 'হার্ডড্রাইভে ফাইলের এক্সটেনশন .c থেকে বদলে .txt করে দিয়ে'
          },
          {
            en: 'By disconnecting the computer from the electrical power wall outlet',
            bn: 'দেওয়ালের বিদ্যুৎ সংযোগ থেকে কম্পিউটারের প্লাগ খুলে দিয়ে'
          },
          {
            en: 'Smart pointers can only be used with numbers, not files',
            bn: 'স্মার্ট পয়েন্টার কেবল সংখ্যায় ব্যবহার করা যায়, ফাইলে নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Supplying a custom cleanup function like fclose instead of delete.',
          bn: 'delete-এর বদলে fclose-এর মতো কাস্টম ক্লিনআপ ফাংশন পাস করার কথা ভাবুন।'
        },
        explanation: {
          en: 'std::unique_ptr supports custom deleters as part of its type, allowing RAII encapsulation of legacy C APIs (FILE*, sockets, handles) without leaks.',
          bn: 'std::unique_ptr কাস্টম ডিলিটার সমর্থন করে, যা লিগ্যাসি সি এপিআই (FILE*, সকেট, হ্যান্ডেল) কোনো রিসোর্স লিক ছাড়াই RAII এর আওতায় আনতে দেয়।'
        }
      },
      {
        id: 'q-rule-of-zero-idiom',
        kind: 'mcq',
        topic: 'The Rule of Zero in modern C++',
        question: {
          en: 'What is the "Rule of Zero" in modern C++ systems architecture?',
          bn: 'আধুনিক C++ সিস্টেম আর্কিটেকচারে "রুল অব জিরো" (Rule of Zero) বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'Design classes using standard RAII members (std::unique_ptr, std::string, std::vector) so you write zero custom copy, move, or destructor functions, letting the compiler generate them safely',
            bn: 'ক্লাস তৈরিতে স্ট্যান্ডার্ড RAII মেম্বার (std::unique_ptr, std::string, std::vector) ব্যবহার করুন যাতে কোনো কাস্টম কপি, মুভ বা ডেস্ট্রাক্টর না লিখেও শতভাগ নিরাপত্তা মেলে'
          },
          {
            en: 'Every variable in C++ must be given the numerical value zero',
            bn: 'C++ এর প্রতিটি ভ্যারিয়েবলের মান অবশ্যই শূন্য হতে হবে'
          },
          {
            en: 'A program must contain zero lines of code to compile successfully',
            bn: 'সফলভাবে কম্পাইল হতে প্রোগ্রামে শূন্য লাইনের কোড থাকতে হবে'
          },
          {
            en: 'The compiler will terminate any developer who writes more than zero classes',
            bn: 'শূন্যের বেশি ক্লাস লিখলে কম্পাইলার প্রোগ্রামারকে বরখাস্ত করবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Letting compiler synthesize copy/move/dtor by composing RAII members.',
          bn: 'RAII টাইপ ব্যবহার করে কম্পাইলারকে নিজে থেকেই কপি/মুভ/ডেস্ট্রাক্টর বানাতে দেওয়া।'
        },
        explanation: {
          en: 'By composing types from standard RAII wrappers, classes avoid managing raw resources, eliminating the need to write custom copy/move/destructor methods.',
          bn: 'স্ট্যান্ডার্ড RAII মেম্বার ব্যবহার করলে ক্লাসে সরাসরি কাঁচা মেমোরি পরিচালনা করতে হয় না, ফলে কাস্টম কপি বা ডেস্ট্রাক্টর লেখার কোনো প্রয়োজন পড়ে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'templates-and-the-type',
    title: {
      en: 'Templates & Generic Metaprogramming — Type Deduction, Specialization & Concepts',
      bn: 'টেমপ্লেট ও জেনেরিক মেটা-প্রোগ্রামিং — টাইপ ডিডাকশন, স্পেশালাইজেশন ও কনসেপ্টস'
    }
  }
};
