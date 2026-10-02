import type { Lesson } from '../../../lib/types';

export const TheClassForgeLesson: Lesson = {
  slug: 'the-class-forge',
  tech: 'cpp',
  title: {
    en: 'The Class Forge: Concurrency, Toolchains & Systems Architecture — Real-World Capstone',
    bn: 'দ্য ক্লাস ফোর্জ: কনকারেন্সি, টুলচেন ও সিস্টেম আর্কিটেকচার — বাস্তবমুখী ক্যাপস্টোন'
  },
  summary: {
    en: 'Modern C++ systems architecture unites encapsulation, RAII resource management, templates, and move semantics to forge high-throughput, multi-threaded applications. Modern standards (C++20 and C++23) transform systems engineering: std::jthread introduces cooperative cancellation via stop tokens and automatic RAII thread joining on destruction, eliminating terminate crashes. Hardware atomic operations (<atomic>) with explicit acquire-release memory ordering enable lock-free ring buffers and data structures that bypass operating system kernel mutex locks. Compile-time evaluation with consteval and constexpr guarantees zero runtime computation for static tables, while C++20 Modules replace textual headers to deliver lightning-fast compilation boundaries.',
    bn: 'আধুনিক C++ সিস্টেম আর্কিটেকচার এনক্যাপসুলেশন, RAII মেমোরি ম্যানেজমেন্ট, টেমপ্লেট এবং মুভ সেমান্টিকসকে একত্রিত করে উচ্চগতির মাল্টি-থ্রেডেড অ্যাপ্লিকেশন গড়ে তোলে। আধুনিক মানদণ্ডসমূহ (C++20 ও C++23) সিস্টেম ইঞ্জিনিয়ারিংয়ে বৈপ্লবিক পরিবর্তন এনেছে: std::jthread স্টপ টোকেনের মাধ্যমে সহযোগিতামূলক থ্রেড বাতিল এবং ধ্বংসের সময় স্বয়ংক্রিয় RAII জয়েনিং নিশ্চিত করে থ্রেড ক্র্যাশ স্থায়ীভাবে দূর করে। অ্যাটমিক অপারেশন (<atomic>) এবং অ্যাকোয়ার-রিলিজ মেমোরি অর্ডারিং ব্যবহার করে ওএস কার্নেল মিউটেক্স এড়িয়ে সম্পূর্ণ লক-ফ্রি রিং বাফার তৈরি করা সম্ভব হয়। consteval ও constexpr-এর মাধ্যমে কম্পাইল টাইমে নিখুঁত হিসাব সম্পন্ন করে রানটাইম খরচ শূন্যে নামিয়ে আনা হয়, অন্যদিকে C++20 মডিউল হেডার ফাইলের সীমাবদ্ধতা দূর করে ৫ গুণ দ্রুত কম্পাইলেশন নিশ্চিত করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Production Concurrency and Modern Standards',
        bn: 'মূল ধারণা: প্রোডাকশন কনকারেন্সি ও আধুনিক মানদণ্ড'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'When you assemble high-performance systems in C++, architecture reaches its ultimate test in multi-threaded concurrency. Modern C++ unites encapsulation, templates, and Resource Acquisition Is Initialization (RAII) guards with hardware atomics. This design allows software to achieve maximum parallel throughput without operating system lock contention.',
        bn: 'C++ এ যখন আপনি উচ্চগতির সিস্টেম তৈরি করেন, তখন আর্কিটেকচার তার চূড়ান্ত পরীক্ষায় পৌঁছায় মাল্টি-থ্রেডেড কনকারেন্সিতে। আধুনিক C++ এনক্যাপসুলেশন, টেমপ্লেট এবং রিসোর্স অ্যাকুইজিশন ইজ ইনিশিয়ালাইজেশন (RAII) গার্ডকে হার্ডওয়্যার অ্যাটমিক্সের সাথে সমন্বিত করে। এই ডিজাইন অপারেটিং সিস্টেমের লকিং জটিলতা ছাড়াই প্রসেসরের প্রতিটি কোরের সমান্তরাল পারফরম্যান্স নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'std::jthread',
          def: {
            en: 'A modern C++20 thread wrapper that automatically joins upon destruction (RAII) and supports cooperative cancellation tokens',
            bn: 'C++20 এর একটি আধুনিক থ্রেড কাঠামো যা ডেস্ট্রাক্টরে স্বয়ংক্রিয়ভাবে জয়েন করে এবং স্টপ টোকেন দিয়ে থ্রেড বাতিলের সুবিধা দেয়'
          }
        },
        {
          term: 'std::atomic<T>',
          def: {
            en: 'A hardware-synchronized type executing read-modify-write CPU instructions without operating system mutex locks',
            bn: 'হার্ডওয়্যার-নিয়ন্ত্রিত একটি ডেটা টাইপ যা কোনো অপারেটিং সিস্টেম মিউটেক্স লক ছাড়াই সরাসরি সিপিইউতে নির্বিঘ্ন রিড-রাইট সম্পন্ন করে'
          }
        },
        {
          term: 'Memory Ordering',
          def: {
            en: 'Hardware and compiler memory synchronization constraints (relaxed, acquire, release, sequential consistency) governing CPU store buffers',
            bn: 'সিপিইউ এবং কম্পাইলারের জন্য মেমোরি সিনক্রোনাইজেশন নিয়মাবলী যা মেমোরিতে ডেটা পড়ার ও লেখার সঠিক ক্রম নির্ধারণ করে'
          }
        },
        {
          term: 'consteval',
          def: {
            en: 'A C++20 keyword designating an immediate function that is strictly guaranteed to execute at compile time with zero runtime overhead',
            bn: 'C++20 এর একটি কিওয়ার্ড যা নিশ্চিত করে যে ফাংশনটি বাধ্যতামূলকভাবে কম্পাইল টাইমে চলবে এবং রানটাইমে কোনো কোড রাখবে না'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'modern-threads-jthread',
      text: {
        en: 'std::jthread: RAII Cancellation and Crash-Free Joining',
        bn: 'std::jthread: RAII থ্রেড বাতিলকরণ ও ক্র্যাশহীন সমাপ্তি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Legacy C++11 std::thread suffered from a hazardous design defect: if a thread object is destroyed while still joinable (for example, if an exception is thrown before thread.join()), its destructor calls std::terminate, crashing the entire process abruptly.',
        bn: 'পুরোনো C++11 এর std::thread-এ একটি মারাত্মক নিরাপত্তা ত্রুটি ছিল: যদি থ্রেডটি চলার সময় join() ডাকার আগেই কোনো এক্সেপশনের কারণে অবজেক্টটি ধ্বংস হয়, তবে তার ডেস্ট্রাক্টর std::terminate ডেকে পুরো প্রোগ্রাম তৎক্ষণাৎ ক্র্যাশ করিয়ে দিত।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'C++20 introduced std::jthread to resolve this issue through RAII. The destructor of a jthread automatically signals a cooperative cancellation request via an internal std::stop_token and automatically invokes join(), ensuring clean teardown without aborts.',
        bn: 'C++20 এই জটিলতা দূর করতে RAII নীতিতে তৈরি std::jthread উপহার দেয়। একটি jthread-এর ডেস্ট্রাক্টর নিজে থেকেই std::stop_token দিয়ে থ্রেড বন্ধের সংকেত পাঠায় এবং ধ্বংসের সময় স্বয়ংক্রিয়ভাবে join() নিশ্চিত করে প্রোগ্রাম ক্র্যাশ হওয়া চিরতরে রোধ করে।'
      }
    },
    {
      type: 'heading',
      id: 'atomic-lock-free',
      text: {
        en: 'Lock-Free Atomics and Ring Buffer Architecture',
        bn: 'লক-ফ্রি অ্যাটমিক্স ও রিং বাফার আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In ultra-low-latency architectures like audio processing or algorithmic trading, acquiring standard OS mutexes incurs milliseconds of thread descheduling latency. Lock-free data structures replace mutexes with hardware atomic operations like std::atomic<size_t>.',
        bn: 'অডিও ইঞ্জিন বা শেয়ার বাজারের অ্যালগরিদমিক ট্রেডিংয়ের মতো জায়গায় সাধারণ অপারেটিং সিস্টেম মিউটেক্স ব্যবহার করলে থ্রেড স্লিপে গিয়ে অতিরিক্ত সময় নষ্ট হয়। লক-ফ্রি ডেটা স্ট্রাকচার মিউটেক্সের বদলে সরাসরি সিপিইউ হার্ডওয়্যারের std::atomic<size_t> অপারেশন ব্যবহার করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In a single-producer single-consumer (SPSC) circular ring buffer, a producer writes data to a head pointer using release memory order, while a consumer reads from a tail pointer using acquire memory order. Across 4 pushed messages and 2 popped messages, the atomic indices synchronize without a single mutex lock or OS context switch.',
        bn: 'একটি সিঙ্গেল-প্রডিউসার সিঙ্গেল-কনজিউমার (SPSC) সার্কুলার রিং বাফারে উৎপাদক রিলিজ মেমোরি অর্ডার দিয়ে হেড পয়েন্টারে লেখে এবং ভোক্তা অ্যাকোয়ার মেমোরি অর্ডার দিয়ে টেইল থেকে পড়ে। ৪টি মেসেজ পাঠানো এবং ২টি মেসেজ পড়ার পুরো প্রক্রিয়ায় কোনো মিউটেক্স লক বা ওএস কনটেক্সট সুইচ ছাড়াই পুরোপুরি লক-ফ্রি গতিতে ডেটা আদান-প্রদান সম্পন্ন হয়।'
      }
    },
    {
      type: 'heading',
      id: 'compile-time-eval',
      text: {
        en: 'Compile-Time Evaluation: constexpr vs consteval',
        bn: 'কম্পাইল-টাইম এক্সিকিউশন: constexpr বনাম consteval'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern C++ pushes extensive computation from runtime to compile time. A constexpr function can run at compile time when passed constant literals, but silently falls back to ordinary runtime execution if passed dynamic variables.',
        bn: 'আধুনিক C++ রানটাইমের বিশাল কাজের চাপ কমিয়ে কম্পাইল টাইমে নিয়ে এসেছে। একটি constexpr ফাংশন ধ্রুবক সংখ্যা পেলে কম্পাইল টাইমে হিসাব সম্পন্ন করে, তবে ডাইনামিক ভ্যারিয়েবল পেলে সাধারণ রানটাইম কোড হিসেবে নির্বাহ হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'C++20 introduces consteval (immediate functions), which strictly mandates compile-time evaluation. If a consteval function cannot be resolved during compilation, the compiler issues an immediate compilation error, guaranteeing zero runtime CPU footprint.',
        bn: 'C++20 এর consteval (ইমিডিয়েট ফাংশন) শর্তহীনভাবে কম্পাইল টাইমে হিসাব সম্পন্ন করার নিশ্চয়তা দেয়। কোনো কারণে কম্পাইলেশনের সময় এর মান বের করা সম্ভব না হলে কম্পাইলার সাথে সাথে এরর প্রদর্শন করে, ফলে রানটাইমে সিপিইউর ওপর অতিরিক্ত ১ সাইকেলেরও বোঝা থাকে না।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Concurrency Execution Paradigms',
        bn: 'কাঠামোগত তুলনা: কনকারেন্সি এক্সিকিউশন মডেলসমূহ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Concurrency Model', bn: 'কনকারেন্সি মডেল' },
        { en: 'Destructor Behavior', bn: 'ডেস্ট্রাক্টরের আচরণ' },
        { en: 'Cooperative Stop Token', bn: 'স্টপ টোকেন সমর্থন' },
        { en: 'Primary Architecture Role', bn: 'প্রধান আর্কিটেকচারাল ভূমিকা' }
      ],
      rows: [
        [
          { en: 'std::thread (C++11)', bn: 'std::thread (C++11)' },
          { en: 'Calls std::terminate if joinable (fatal crash hazard)', bn: 'join() না থাকলে ক্র্যাশ করিয়ে প্রোগ্রাম বন্ধ করে' },
          { en: 'None (requires manual boolean atomic flags)', bn: 'নেই (ম্যানুয়াল বুলিয়ান ফ্ল্যাগ লাগে)' },
          { en: 'Legacy thread execution in pre-C++20 codebases', bn: 'C++20 পূর্ববর্তী পুরোনো কোডবেসে থ্রেড চালানো' }
        ],
        [
          { en: 'std::jthread (C++20)', bn: 'std::jthread (C++20)' },
          { en: 'Requests stop and automatically joins (RAII safe)', bn: 'স্টপ সংকেত দেয় এবং স্বয়ংক্রিয়ভাবে join করে' },
          { en: 'Built-in std::stop_token and stop_callback', bn: 'অন্তর্নির্মিত std::stop_token সমর্থন করে' },
          { en: 'Modern, crash-free background worker threads', bn: 'আধুনিক ক্র্যাশহীন ব্যাকগ্রাউন্ড ওয়ার্কার থ্রেড' }
        ],
        [
          { en: 'std::async (Future / Promise)', bn: 'std::async (Future / Promise)' },
          { en: 'Blocks on future destructor until task completes', bn: 'কাজ শেষ না হওয়া পর্যন্ত ডেস্ট্রাক্টরে অপেক্ষা করে' },
          { en: 'None built-in', bn: 'অন্তর্নির্মিত নেই' },
          { en: 'Simple one-off fire-and-forget background jobs', bn: 'সহজ একবারের ব্যাকগ্রাউন্ড কাজ পরিচালনা' }
        ],
        [
          { en: 'Custom Thread Worker Pool', bn: 'কাস্টম ওয়ার্কার থ্রেড পুল' },
          { en: 'Gracefully drains task queue and joins workers', bn: 'টাস্ক কিউ খালি করে সব ওয়ার্কারকে শান্ত করে' },
          { en: 'Integrated with atomic shutdown flags', bn: 'অ্যাটমিক শাটডাউন ফ্ল্যাগের সাথে সমন্বিত' },
          { en: 'High-throughput servers, game engines, graphics', bn: 'উচ্চগতির সার্ভার, গেম ইঞ্জিন ও গ্রাফিক্স রেন্ডারিং' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Lock-Free SPSC Ring Buffer',
        bn: 'বাস্তব কোড সিমুলেশন: লক-ফ্রি SPSC রিং বাফার'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of C++20 Lock-Free SPSC Ring Buffer & Concurrency in Node.js

class AtomicRingBuffer {
  public buffer: (number | null)[];
  public head = 0; // Producer write index (atomic)
  public tail = 0; // Consumer read index (atomic)
  public totalPushed = 0;
  public totalPopped = 0;

  constructor(public capacity = 8) {
    this.buffer = new Array(capacity).fill(null);
  }

  // Producer push (acquire-release order simulation)
  push(item: number): boolean {
    const nextHead = (this.head + 1) % this.capacity;
    if (nextHead === this.tail) {
      return false; // Buffer full
    }
    this.buffer[this.head] = item;
    this.head = nextHead;
    this.totalPushed += 1;
    return true;
  }

  // Consumer pop (acquire-release order simulation)
  pop(): number | null {
    if (this.head === this.tail) {
      return null; // Buffer empty
    }
    const item = this.buffer[this.tail];
    this.buffer[this.tail] = null;
    this.tail = (this.tail + 1) % this.capacity;
    this.totalPopped += 1;
    return item;
  }

  occupancy(): number {
    return (this.head - this.tail + this.capacity) % this.capacity;
  }
}

const ring = new AtomicRingBuffer(8);

// Producer pushes 4 messages
ring.push(100);
ring.push(200);
ring.push(300);
ring.push(400);

// Consumer pops 2 messages
const firstRead = ring.pop(); // 100
const secondRead = ring.pop(); // 200

const remainingItems = ring.occupancy(); // 2
const totalItemsPushed = ring.totalPushed; // 4
const totalItemsPopped = ring.totalPopped; // 2

console.log('First message consumed from atomic ring buffer:', firstRead);
// -> First message consumed from atomic ring buffer: 100
console.log('Second message consumed from atomic ring buffer:', secondRead);
// -> Second message consumed from atomic ring buffer: 200
console.log('Unconsumed messages lingering in ring buffer pool:', remainingItems);
// -> Unconsumed messages lingering in ring buffer pool: 2
console.log('Total messages successfully written by producer:', totalItemsPushed);
// -> Total messages successfully written by producer: 4
console.log('C++ standard introducing std::jthread and cooperative cancellation: 20');
// -> C++ standard introducing std::jthread and cooperative cancellation: 20`,
      caption: {
        en: 'Simulation: atomic ring buffer consumes 100 and 200; 2 items linger in pool; 4 messages pushed; C++20 standard introduced std::jthread',
        bn: 'সিমুলেশন: রিং বাফার থেকে ১০০ ও ২০০ গ্রহণ; পুলে ২টি আইটেম বাকি; মোট ৪টি পুশ সম্পন্ন; C++20 স্ট্যান্ডার্ডে std::jthread এর সূচনা'
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
        en: 'Rule 1: Always prefer std::jthread over std::thread in C++20. RAII automatic joining on destruction prevents fatal process crashes caused by unjoined thread objects during exceptions.',
        bn: 'নিয়ম ১: C++20 কোডে std::thread-এর বদলে সর্বদা std::jthread বেছে নিন। ডেস্ট্রাক্টরে স্বয়ংক্রিয়ভাবে জয়েন করার ক্ষমতা এক্সেপশন চলাকালীন হঠাৎ প্রোগ্রাম ক্র্যাশ হওয়া প্রতিরোধ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Use consteval for static lookup tables and hashing functions. Mandating evaluation during compilation shifts heavy computational overhead into compile time with zero runtime cost.',
        bn: 'নিয়ম ২: স্ট্যাটিক টেবিল ও হ্যাশিং অ্যালগরিদমে consteval ব্যবহার করুন। কম্পাইলেশনের সময়ই হিসাব সম্পন্ন করার নিশ্চয়তা দিলে রানটাইমে প্রসেসরের সময় শতভাগ সাশ্রয় হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Default to memory_order_seq_cst for atomics unless profiling demands acquire-release. Sequential consistency is the safest memory ordering and avoids subtle multi-core hardware reordering bugs.',
        bn: 'নিয়ম ৩: পারফরম্যান্স বিশ্লেষণে বিশেষ প্রয়োজন না হলে অ্যাটমিক্সে ডিফল্টভাবে memory_order_seq_cst ব্যবহার করুন। এটি মাল্টি-কোর প্রসেসরে অপ্রত্যাশিত ডেটা অমিল রোধের সবচেয়ে নিরাপদ পদ্ধতি।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Compile production binaries with sanitizers and strict flags: -Wall -Wextra -Wpedantic -fsanitize=thread,address. Catching data races and memory bugs during testing is mandatory for systems software.',
        bn: 'নিয়ম ৪: প্রোডাকশন কোড সর্বদা স্যানিটাইজার সহ কম্পাইল করুন: -Wall -Wextra -Wpedantic -fsanitize=thread,address। টেস্টিং চলাকালীন থ্রেড রেস কন্ডিশন ও মেমোরি ত্রুটি ধরা সিস্টেম সফটওয়্যারের জন্য অপরিহার্য।'
      }
    }
  ],
  exercises: [
    {
      id: 'cpp-forge-ex1',
      kind: 'mcq',
      topic: 'std::jthread safety improvements over std::thread in C++20',
      question: {
        en: 'What critical safety improvement does std::jthread introduce over legacy std::thread in C++20?',
        bn: 'C++20 এ std::jthread পুরোনো std::thread-এর তুলনায় কোন গুরুত্বপূর্ণ নিরাপত্তা উন্নতি এনেছে?'
      },
      options: [
        {
          en: 'Its destructor automatically requests cooperative cancellation via a stop token and automatically joins the thread (RAII), preventing std::terminate crashes if joinable',
          bn: 'এর ডেস্ট্রাক্টর স্টপ টোকেনের মাধ্যমে সহযোগিতামূলক বাতিলের অনুরোধ পাঠায় এবং থ্রেডটিকে নিজে থেকেই join করে, ফলে থ্রেড চালু থাকা অবস্থায় প্রোগ্রাম ক্র্যাশ হয় না'
        },
        {
          en: 'It forces the operating system to shut down all computer monitors',
          bn: 'এটি অপারেটিং সিস্টেমকে সমস্ত মনিটর বন্ধ করতে বাধ্য করে'
        },
        {
          en: 'It accelerates internet speeds to 1000 megabits per second',
          bn: 'এটি ইন্টারনেটের গতি প্রতি সেকেন্ডে ১০০০ মেগাবিটে উন্নীত করে'
        },
        {
          en: 'It changes the color of all variables to green on the terminal screen',
          bn: 'এটি টার্মিনাল স্ক্রিনে সমস্ত ভ্যারিয়েবলের রঙ সবুজ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Automatic RAII joining on destruction and stop tokens.',
        bn: 'ধ্বংসের সময় স্বয়ংক্রিয় জয়েনিং এবং স্টপ টোকেনের সুবিধা।'
      },
      explanation: {
        en: 'std::jthread embodies RAII: its destructor signals stop and joins automatically, eliminating the fatal crash bug of unjoined std::thread objects.',
        bn: 'std::jthread হলো RAII এর প্রতিরূপ: এর ডেস্ট্রাক্টর নিজে থেকেই স্টপ সংকেত দেয় এবং জয়েন করে, ফলে পুরোনো থ্রেডের মতো হঠাৎ প্রোগ্রাম ক্র্যাশ হয় না।'
      }
    },
    {
      id: 'cpp-forge-ex2',
      kind: 'mcq',
      topic: 'consteval immediate functions versus constexpr',
      question: {
        en: 'How does consteval introduced in C++20 differ strictly from standard constexpr functions?',
        bn: 'C++20 এ যুক্ত হওয়া consteval সাধারণ constexpr ফাংশনের থেকে কীভাবে কঠোরভাবে আলাদা?'
      },
      options: [
        {
          en: 'consteval designates an immediate function that MUST evaluate at compile time; if it cannot be resolved during compilation, the compiler throws an error, whereas constexpr can run at runtime',
          bn: 'consteval হলো এমন এক ফাংশন যা বাধ্যতামূলকভাবে কম্পাইল টাইমে চলতে হয়; কম্পাইলেশনে ব্যর্থ হলে কম্পাইলার সরাসরি এরর দেয়, যেখানে constexpr রানটাইমেও চলতে পারে'
        },
        {
          en: 'consteval functions can only store negative numbers in RAM',
          bn: 'consteval ফাংশন কেবল ঋণাত্মক সংখ্যা র্যামে জমা রাখতে পারে'
        },
        {
          en: 'consteval was removed from modern C++ because it ran too fast',
          bn: 'খুব বেশি দ্রুত চলার কারণে আধুনিক C++ থেকে consteval মুছে ফেলা হয়েছে'
        },
        {
          en: 'There is zero difference; they are exact duplicates',
          bn: 'কোনো পার্থক্য নেই; উভয়ই একে অপরের হুবহু প্রতিরূপ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Mandatory compile-time execution; runtime invocation is a compilation error.',
        bn: 'বাধ্যতামূলক কম্পাইল-টাইম এক্সিকিউশন; রানটাইমে চললে কম্পাইলার এরর দেয়।'
      },
      explanation: {
        en: 'constexpr can fall back to runtime if inputs are dynamic. consteval forces compile-time evaluation unconditionally, guaranteeing zero runtime overhead.',
        bn: 'constexpr ডাইনামিক ইনপুট পেলে রানটাইমে চলে যায়। কিন্তু consteval কোনো আপস না করে বাধ্যতামূলকভাবে কম্পাইল টাইমে চলে শূন্য রানটাইম খরচ নিশ্চিত করে।'
      }
    },
    {
      id: 'cpp-forge-ex3',
      kind: 'mcq',
      topic: 'Lock-free single-producer single-consumer ring buffers',
      question: {
        en: 'Why do high-performance systems use lock-free circular ring buffers instead of mutex-protected queues?',
        bn: 'উচ্চগতির পারফরম্যান্স সিস্টেমে মিউটেক্স-সুরক্ষিত কিউয়ের পরিবর্তে কেন লক-ফ্রি সার্কুলার রিং বাফার ব্যবহার করা হয়?'
      },
      options: [
        {
          en: 'They eliminate operating system kernel mutex contention and thread descheduling pauses by synchronizing head and tail indices using fast CPU atomic instructions',
          bn: 'দ্রুতগতির সিপিইউ অ্যাটমিক ইন্সট্রাকশন দিয়ে হেড ও টেইল পরিচালনা করার ফলে অপারেটিং সিস্টেম কার্নেল মিউটেক্স দ্বন্দ্ব ও থ্রেড স্লিপের বিলম্ব দূর হয়'
        },
        {
          en: 'Because ring buffers take up zero bytes of computer memory',
          bn: 'কারণ রিং বাফার কম্পিউটারের মেমোরিতে শূন্য বাইট জায়গা দখল করে'
        },
        {
          en: 'Because mutexes are illegal under the international C++ standard',
          bn: 'কারণ আন্তর্জাতিক C++ স্ট্যান্ডার্ডে মিউটেক্স ব্যবহার বেআইনি'
        },
        {
          en: 'Ring buffers automatically turn on the computer cooling fan',
          bn: 'রিং বাফার নিজে থেকেই কম্পিউটারের কুলিং ফ্যান চালু করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Eliminating mutex lock contention using hardware atomic operations.',
        bn: 'হার্ডওয়্যার অ্যাটমিক্স দিয়ে অপারেটিং সিস্টেম লকের বিলম্ব দূর করা।'
      },
      explanation: {
        en: 'Lock-free queues use CPU atomic operations (e.g. acquire-release memory order) to synchronize without kernel thread blocking, achieving sub-microsecond latency.',
        bn: 'লক-ফ্রি কিউ সিপিইউর নিজস্ব অ্যাটমিক অপারেশন ব্যবহার করে ওএস থ্রেড ব্লকিং ছাড়াই ডেটা আদান-প্রদান করে, যা ন্যানোসেকেন্ড গতির নিশ্চয়তা দেয়।'
      }
    },
    {
      id: 'cpp-forge-ex4',
      kind: 'mcq',
      topic: 'C++20 Modules versus legacy header files',
      question: {
        en: 'What architectural advantage do C++20 Modules (import module_name;) provide over traditional #include headers?',
        bn: 'ঐতিহ্যবাহী #include হেডারের তুলনায় C++20 মডিউল (import module_name;) কোন আর্কিটেকচারাল সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'Modules are compiled once into binary interface files rather than repetitively re-parsed in every translation unit, eliminating macro leakage and speeding up builds by 5x',
          bn: 'মডিউল প্রতিটি ফাইলে বারবার পার্স না হয়ে একবারই বাইনারিতে কম্পাইল হয়, যা ম্যাক্রো লিকেজ বন্ধ করে এবং বিল্ডের গতি ৫ গুণ পর্যন্ত বাড়িয়ে দেয়'
        },
        {
          en: 'Modules allow C++ programs to run on mobile phones without a battery',
          bn: 'মডিউল কোনো ব্যাটারি ছাড়াই মোবাইল ফোনে C++ কোড চালাতে সাহায্য করে'
        },
        {
          en: 'Modules convert all source code into German automatically',
          bn: 'মডিউল সমস্ত সোর্স কোডকে স্বয়ংক্রিয়ভাবে জার্মান ভাষায় অনুবাদ করে'
        },
        {
          en: 'Modules only work when compiling code during a thunderstorm',
          bn: 'মডিউল কেবলমাত্র বজ্রপাতের সময় কোড কম্পাইল করলেই কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Compile once into binary interface, no macro leakage, fast build times.',
        bn: 'একবার কম্পাইল হওয়া বাইনারি ইন্টারফেস, ম্যাক্রো দূষণ রোধ এবং দ্রুত কম্পাইলেশন।'
      },
      explanation: {
        en: 'C++20 Modules eliminate textual inclusion, preventing preprocessor macros from leaking across files and drastically cutting compilation times.',
        bn: 'C++20 মডিউল টেক্সট কপি করার বদলে সরাসরি বাইনারি ইন্টারফেস লোড করে, ফলে ম্যাক্রো ছড়ানো বন্ধ হয় এবং কম্পাইলেশনের সময় নাটকীয়ভাবে কমে আসে।'
      }
    }
  ],
  quiz: {
    id: 'the-class-forge-quiz',
    title: {
      en: 'Systems Concurrency & Capstone Architecture Quiz',
      bn: 'সিস্টেমস কনকারেন্সি ও ক্যাপস্টোন আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-memory-order-acquire-release',
        kind: 'mcq',
        topic: 'Acquire-Release memory order synchronization',
        question: {
          en: 'What synchronization contract does memory_order_release on a write and memory_order_acquire on a read establish across threads?',
          bn: 'এক থ্রেডে memory_order_release দিয়ে লেখা এবং অন্য থ্রেডে memory_order_acquire দিয়ে পড়ার মাঝে কোন সিনক্রোনাইজেশন চুক্তি প্রতিষ্ঠিত হয়?'
        },
        options: [
          {
            en: 'All prior memory writes executed before the store-release are guaranteed to be visible to the other thread immediately following its load-acquire',
            bn: 'স্টোর-রিলিজের আগে সম্পন্ন হওয়া সমস্ত মেমোরি রাইট নিশ্চিতভাবে অন্য থ্রেডের লোড-অ্যাকোয়ারের পরপরই সম্পূর্ণ দৃশ্যমান হবে'
          },
          {
            en: 'Both threads must immediately terminate and delete their stack memory',
            bn: 'উভয় থ্রেড সাথে সাথে বন্ধ হয়ে তাদের স্ট্যাক মেমোরি মুছে ফেলতে বাধ্য হয়'
          },
          {
            en: 'It causes the CPU clock frequency to double for 5 seconds',
            bn: 'এটি ৫ সেকেন্ডের জন্য সিপিইউ ক্লক ফ্রিকোয়েন্সি দ্বিগুণ করে দেয়'
          },
          {
            en: 'Acquire and release can only be used on single-core computers',
            bn: 'অ্যাকোয়ার ও রিলিজ কেবলমাত্র সিঙ্গেল-কোর কম্পিউটারে ব্যবহার করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Memory writes prior to release become visible after acquire.',
          bn: 'রিলিজের আগের মেমোরি রাইটগুলো অ্যাকোয়ারের পর অন্য থ্রেডে দৃশ্যমান হয়।'
        },
        explanation: {
          en: 'Acquire-release pairs create a synchronized-with relationship, ensuring data written by the producer is visible to the consumer without full sequential consistency overhead.',
          bn: 'অ্যাকোয়ার-রিলিজ জুটি নিশ্চিত করে যে উৎপাদকের লেখা ডেটা কোনো ওভারহেড ছাড়াই ভোক্তার কাছে সঠিকভাবে দৃশ্যমান হবে।'
        }
      },
      {
        id: 'q-static-initialization-fiasco',
        kind: 'mcq',
        topic: 'constinit and the Static Initialization Order Fiasco',
        question: {
          en: 'What critical bug does the C++20 constinit keyword eliminate regarding global static variables?',
          bn: 'C++20 এর constinit কিওয়ার্ডটি গ্লোবাল স্ট্যাটিক ভ্যারিয়েবলের ক্ষেত্রে কোন মারাত্মক বাগ চিরতরে দূর করে?'
        },
        options: [
          {
            en: 'The Static Initialization Order Fiasco: it guarantees the variable is initialized at compile time during static initialization phase, preventing access to uninitialized globals',
            bn: 'স্ট্যাটিক ইনিশিয়ালাইজেশন অর্ডার জটিলতা: এটি নিশ্চিত করে ভ্যারিয়েবলটি কম্পাইল টাইমে তৈরি হবে, ফলে অন্য ফাইল থেকে খালি অবস্থায় পড়ার ভুল দূর হয়'
          },
          {
            en: 'It deletes all global variables to make the software run 10 times faster',
            bn: 'সফটওয়্যার ১০ গুণ দ্রুত চালাতে এটি সমস্ত গ্লোবাল ভ্যারিয়েবল মুছে ফেলে'
          },
          {
            en: 'It makes all integers constant strings of English text',
            bn: 'এটি সমস্ত পূর্ণসংখ্যাকে ইংরেজি অক্ষরের কনস্ট্যান্ট স্ট্রিংয়ে পরিণত করে'
          },
          {
            en: 'constinit was created only for debugging audio files',
            bn: 'constinit কেবল অডিও ফাইল ডিবাগ করার জন্যই তৈরি করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Guaranteed compile-time static initialization preventing uninitialized access.',
          bn: 'কম্পাইল টাইমে স্ট্যাটিক ইনিশিয়ালাইজেশন যা অশোধিত গ্লোবালের বিপদ দূর করে।'
        },
        explanation: {
          en: 'The static initialization order across translation units is undefined in C++. constinit forces compile-time initialization, ensuring variables are ready before main().',
          bn: 'বিভিন্ন ফাইলে গ্লোবালের তৈরির ক্রম অনির্ধারিত থাকে। constinit কম্পাইল টাইমে মান বসিয়ে নিশ্চিত করে main() চলার আগেই ভ্যারিয়েবল প্রস্তুত আছে।'
        }
      },
      {
        id: 'q-thread-pool-worker-model',
        kind: 'mcq',
        topic: 'Why thread pools outperform continuous thread spawning',
        question: {
          en: 'Why is managing a fixed Thread Pool of worker threads superior to spawning a new std::jthread for every incoming network request in a high-volume server?',
          bn: 'উচ্চ ট্রাফিকের সার্ভারে প্রতিটি নেটওয়ার্ক রিকোয়েস্টের জন্য নতুন std::jthread তৈরি করার চেয়ে একটি নির্দিষ্ট থ্রেড পুল পরিচালনা করা কেন শ্রেয়?'
        },
        options: [
          {
            en: 'Spawning threads creates expensive OS kernel context switch overhead and risks stack memory exhaustion (out-of-memory); a pool reuses existing warm worker threads via a queue',
            bn: 'বারবার থ্রেড তৈরি করলে কার্নেল ওভারহেড ও মেমোরি শেষ হয়ে সিস্টেম অচল হতে পারে; পুল একটি কিউয়ের মাধ্যমে প্রস্তুত থ্রেডগুলোকে পুনরায় ব্যবহার করে'
          },
          {
            en: 'Because modern operating systems permit a maximum of 4 threads in total',
            bn: 'কারণ আধুনিক অপারেটিং সিস্টেম পুরো কম্পিউটারে সর্বোচ্চ ৪টি থ্রেড চালাতে দেয়'
          },
          {
            en: 'Because thread pools turn off the computer power supply to save electricity',
            bn: 'কারণ বিদ্যুৎ বাঁচাতে থ্রেড পুল কম্পিউটারের পাওয়ার সাপ্লাই বন্ধ করে দেয়'
          },
          {
            en: 'Thread pools are only used when designing graphic logos in Adobe Illustrator',
            bn: 'থ্রেড পুল কেবলমাত্র অ্যাডোবি ইলাস্ট্রেটরে লোগো ডিজাইন করতেই ব্যবহৃত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Thread allocation overhead and OS resource limits vs reusing warm threads.',
          bn: 'বারবার থ্রেড তৈরির খরচ বনাম কিউয়ের মাধ্যমে প্রস্তুত থ্রেড পুনরায় ব্যবহার।'
        },
        explanation: {
          en: 'Thread creation is expensive (allocating 1-8 MB stack memory and kernel structures). Thread pools reuse a bounded set of workers, providing stable latency and memory safety.',
          bn: 'থ্রেড তৈরিতে প্রচুর মেমোরি ও ওএস ওভারহেড খরচ হয়। থ্রেড পুল প্রস্তুত ওয়ার্কার ব্যবহার করে স্মৃতি ও গতির অতুলনীয় স্থিতিশীলতা নিশ্চিত করে।'
        }
      },
      {
        id: 'q-thread-sanitizer-flag',
        kind: 'mcq',
        topic: 'ThreadSanitizer (-fsanitize=thread) for catching data races',
        question: {
          en: 'Which compiler diagnostic toolchain flag enables ThreadSanitizer (TSan) to detect data races and deadlocks in concurrent C++ applications?',
          bn: 'মাল্টিথ্রেডেড C++ অ্যাপ্লিকেশনে ডেটা রেস ও ডেডলক তাৎক্ষণিক শনাক্ত করতে কোন কম্পাইলার ফ্ল্যাগ দিয়ে ThreadSanitizer (TSan) সক্রিয় করা হয়?'
        },
        options: [
          {
            en: '-fsanitize=thread (e.g. g++ -fsanitize=thread -g main.cpp)',
            bn: '-fsanitize=thread (যেমন g++ -fsanitize=thread -g main.cpp)'
          },
          {
            en: '-O0 -fno-inline (disable optimization)',
            bn: '-O0 -fno-inline (অপ্টিমাইজেশন নিষ্ক্রিয়)'
          },
          {
            en: '-std=c++98 (use 1998 standard)',
            bn: '-std=c++98 (১৯৯৮ সালের স্ট্যান্ডার্ড ব্যবহার)'
          },
          {
            en: '-m32 (compile for 32-bit architecture)',
            bn: '-m32 (৩২-বিট আর্কিটেকচারের জন্য কম্পাইল)'
          }
        ],
        answer: 0,
        hint: {
          en: 'The thread sanitizer compiler flag.',
          bn: 'থ্রেড স্যানিটাইজারের সুনির্দিষ্ট কম্পাইলার ফ্ল্যাগ।'
        },
        explanation: {
          en: 'ThreadSanitizer (-fsanitize=thread) instruments memory accesses and synchronization primitives to detect data races and deadlocks during runtime testing.',
          bn: 'ThreadSanitizer (-fsanitize=thread) প্রতিটি মেমোরি অ্যাক্সেস নিরীক্ষণ করে কোড চলার সময় ডেটা রেস ও ডেডলক তাৎক্ষণিক রিপোর্ট করে।'
        }
      }
    ]
  }
};
