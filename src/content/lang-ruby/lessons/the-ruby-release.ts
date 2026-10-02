import type { Lesson } from '../../../lib/types';

export const TheRubyReleaseLesson: Lesson = {
  slug: 'the-ruby-release',
  tech: 'lang-ruby',
  title: {
    en: 'The Ruby 3 Release: Fibers, Ractors & YJIT Concurrency',
    bn: 'Ruby ৩ রিলিজ: Fiber, Ractor এবং YJIT কনকারেন্সি'
  },
  summary: {
    en: 'Master modern concurrency and high-throughput execution in Ruby 3. Understand cooperative coroutines with Fibers and the Fiber Scheduler. Achieve true multi-core parallelism using isolated Ractors to bypass the Global VM Lock, exchange immutable messages safely, and accelerate production throughput by 15% to 30% with the native YJIT compiler.',
    bn: 'Ruby ৩-এর আধুনিক কনকারেন্সি এবং হাই-থ্রুপুট এক্সিকিউশন সম্পূর্ণ আয়ত্ত করুন। Fiber এবং Fiber Scheduler দিয়ে কোঅপারেটিভ কোরুটিন বুঝুন। গ্লোবাল VM লক এড়িয়ে আলাদা Ractor দিয়ে সত্যিকারের মাল্টি-কোর প্যারালালিজম, নিরাপদে ইমিউটেবল মেসেজ আদান-প্রদান এবং নিজস্ব YJIT কম্পাইলার দিয়ে প্রোডাকশনের গতি ১৫% থেকে ৩০% বৃদ্ধির কৌশল শিখুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'fibers-and-the-fiber-scheduler-heading',
      text: {
        en: 'Cooperative Concurrency: Fibers and Non-Blocking I/O',
        bn: 'কোঅপারেটিভ কনকারেন্সি: Fiber এবং নন-ব্লকিং I/O'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Scaling network applications to tens of thousands of concurrent connections requires non-blocking asynchronous architectures. In Ruby (the dynamic object-oriented programming language designed for programmer productivity), cooperative multitasking is powered by Fibers. Fibers are lightweight coroutines managed entirely in userspace with minimal stack memory overhead. Unlike operating system threads that switch preemptively, a Fiber pauses cooperatively when calling "Fiber.yield" and resumes via "resume". Ruby 3 introduced the native Fiber Scheduler hook. This enables asynchronous non-blocking event loops that automatically yield fibers during disk or socket waiting.',
        bn: 'একসাথে হাজার হাজার নেটওয়ার্ক কানেকশন সামলাতে আধুনিক সিস্টেমে নন-ব্লকিং অ্যাসিনক্রোনাস আর্কিটেকচার অপরিহার্য। কিন্তু Ruby (প্রোগ্রামারদের আনন্দের জন্য তৈরি ডাইনামিক অবজেক্ট-ওরিয়েন্টেড ভাষা)-তে এই কোঅপারেটিভ মাল্টিটাস্কিং পরিচালিত হয় Fiber-এর মাধ্যমে। Fiber হলো অত্যন্ত হালকা কোরুটিন যা প্রসেসের ইউজারস্পেসে খুব সামান্য মেমোরি নিয়ে চলে। অপারেটিং সিস্টেম থ্রেডের মতো স্বয়ংক্রিয় সুইচের বদলে Fiber সাময়িক বিরতি নিতে "Fiber.yield" কল করে এবং পুনরায় সচল হতে "resume" মেথড ব্যবহার করে। Ruby ৩ সংস্করণে যুক্ত হয়েছে নেটিভ Fiber Scheduler হুক। এটি এমন একটি অ্যাসিনক্রোনাস ইভেন্ট লুপ নিশ্চিত করে যা ফাইল বা নেটওয়ার্কের জন্য অপেক্ষার সময় ফাইবারগুলোকে স্বয়ংক্রিয়ভাবে বিরতি দিয়ে প্রধান থ্রেডকে মুক্ত রাখে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Ruby 3 concurrency architecture: multi-core parallel Ractors bypassing the GVL, cooperative Fibers, and native YJIT basic block compilation.',
        bn: 'চিত্র ১: Ruby ৩ কনকারেন্সি আর্কিটেকচার: GVL এড়িয়ে মাল্টি-কোর প্যারালাল Ractor, কোঅপারেটিভ Fiber এবং নেটিভ YJIT মেশিন কোড কম্পাইলেশন।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUBY 3 CONCURRENCY &amp; PARALLEL EXECUTION ARCHITECTURE</text>

  <!-- Left: Ractor 1 -->
  <g transform="translate(30, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#0284c7" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Ractor A (Core 1 - Independent GVL)</text>

    <!-- Fiber Inside -->
    <rect x="15" y="45" width="210" height="70" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="65" fill="#38bdf8" font-size="10" font-family="monospace">Fiber Scheduler</text>
    <text x="25" y="82" fill="#cbd5e1" font-size="9" font-family="sans-serif">Cooperative asynchronous I/O</text>
    <text x="25" y="98" fill="#34d399" font-size="9" font-family="sans-serif">Fiber.yield / resume loops</text>

    <!-- YJIT Module -->
    <rect x="15" y="125" width="210" height="60" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="145" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">YJIT Engine (--yjit)</text>
    <text x="25" y="162" fill="#cbd5e1" font-size="8" font-family="sans-serif">Compiles basic blocks to native code</text>
    <text x="25" y="176" fill="#fbbf24" font-size="8" font-family="sans-serif">15% to 30% faster CPU throughput</text>

    <text x="25" y="210" fill="#38bdf8" font-size="9" font-family="sans-serif">Local heap (no shared mutation)</text>
  </g>

  <!-- Middle: Message Channel -->
  <g transform="translate(290, 65)">
    <rect width="260" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="260" height="30" rx="8" fill="#d97706" />
    <text x="130" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Share-Nothing Message Channel</text>

    <rect x="15" y="45" width="230" height="65" rx="5" fill="#0f172a" stroke="#d97706" />
    <text x="25" y="68" fill="#fbbf24" font-size="10" font-family="monospace">Ractor.send(msg)</text>
    <text x="25" y="86" fill="#cbd5e1" font-size="9" font-family="sans-serif">Deeply frozen immutable payload</text>
    <text x="25" y="100" fill="#34d399" font-size="8" font-family="sans-serif">or ownership moved (move: true)</text>

    <rect x="15" y="120" width="230" height="65" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="140" fill="#34d399" font-size="10" font-family="monospace">msg = Ractor.receive</text>
    <text x="25" y="158" fill="#cbd5e1" font-size="9" font-family="sans-serif">Actor model message intake</text>
    <text x="25" y="172" fill="#38bdf8" font-size="8" font-family="sans-serif">Zero race conditions guaranteed</text>

    <rect x="15" y="195" width="230" height="30" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="215" fill="#fbbf24" font-size="9" font-family="sans-serif">Thread-Safe Memory Isolation</text>
  </g>

  <!-- Right: Ractor 2 -->
  <g transform="translate(570, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#7c3aed" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Ractor B (Core 2 - Independent GVL)</text>

    <rect x="15" y="45" width="210" height="70" rx="5" fill="#0f172a" stroke="#7c3aed" />
    <text x="25" y="65" fill="#c084fc" font-size="10" font-family="sans-serif" font-weight="bold">Parallel CPU Execution</text>
    <text x="25" y="82" fill="#cbd5e1" font-size="9" font-family="sans-serif">Runs simultaneous calculations</text>
    <text x="25" y="98" fill="#34d399" font-size="9" font-family="sans-serif">without locking Ractor A</text>

    <rect x="15" y="125" width="210" height="60" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="145" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">YJIT Engine (--yjit)</text>
    <text x="25" y="162" fill="#cbd5e1" font-size="8" font-family="sans-serif">Specialized machine bytecode</text>
    <text x="25" y="176" fill="#fbbf24" font-size="8" font-family="sans-serif">Near-zero warmup time</text>

    <text x="25" y="210" fill="#c084fc" font-size="9" font-family="sans-serif">True multi-core CPU parallelism</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'ractors-and-yjit-heading',
      text: {
        en: 'True Parallelism with Ractors and JIT Compilation with YJIT',
        bn: 'Ractor দিয়ে প্যারালালিজম এবং YJIT দিয়ে JIT কম্পাইলেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Historically, CRuby enforced a Global VM Lock restricting execution to a single thread per process, preventing parallel CPU computing. Ruby 3 introduced Ractors, implementing the Actor concurrency model. Each Ractor possesses its own independent lock and private heap. Because sharing mutable objects between Ractors is forbidden, programs communicate exclusively by passing immutable deeply frozen messages or transferring ownership ("move: true"). To accelerate runtime CPU performance across all Ractors, Ruby provides YJIT. YJIT dynamically converts hot basic blocks into native machine instructions, delivering 15% to 30% higher throughput.',
        bn: 'ঐতিহাসিকভাবে CRuby-তে একটি গ্লোবাল VM লক কার্যকর ছিল যা প্রতিটি প্রসেসে এক সাথে কেবল একটি থ্রেডকেই কোড চালাতে দিত, ফলে CPU প্যারালালিজম সম্ভব ছিল না। কিন্তু Ruby ৩ সংস্করণে যুক্ত হয়েছে Ractor, যা অ্যাক্টর কনকারেন্সি মডেল বাস্তবায়ন করে। প্রতিটি Ractor-এর নিজস্ব স্বতন্ত্র লক এবং মেমোরি হিপ থাকে। Ractor-গুলোর মাঝে মিউটেবল অবজেক্ট শেয়ার করা নিষিদ্ধ হওয়ায় প্রোগ্রামগুলো কেবল ডিপ-ফ্রোজেন ইমিউটেবল মেসেজ পাঠিয়ে বা মালিকানা স্থানান্তরের ("move: true") মাধ্যমে যোগাযোগ করে। সমস্ত Ractor-এর কাজের গতি বাড়াতে Ruby প্রদান করে YJIT কম্পাইলার। YJIT রানটাইমে কোডকে সরাসরি প্রসেসরের মেশিন কোডে রূপান্তর করে গতি ১৫% থেকে ৩০% পর্যন্ত বৃদ্ধি করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Ruby 3 Ractors running parallel tasks, Fiber cooperative yielding, and YJIT performance acceleration.',
        bn: 'Ruby ৩ Ractor প্যারালাল প্রসেসিং, Fiber কোঅপারেটিভ ইটারেশন এবং YJIT পারফরম্যান্সের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Ruby 3 Concurrency: Fibers, Ractors, and YJIT Basic Block Compiler

export class Ruby3ConcurrencyEngine {
  // Simulates Fiber cooperative coroutines: Fiber.yield and Fiber#resume
  public static *createFiberTask(name: string): Generator<string, string, void> {
    console.log('Fiber [' + name + '] started');
    yield 'Step 1: Network socket opened';

    console.log('Fiber [' + name + '] resumed after I/O wait');
    yield 'Step 2: Buffer payload received';

    return 'Step 3: Task complete';
  }

  // Simulates Ractor share-nothing message passing across independent GVLs
  public static executeRactorPair(dataPayload: { id: number; items: number[] }): {
    ractorAStatus: string;
    ractorBResult: number;
    gvlShared: boolean;
  } {
    // Immutable frozen message envelope passed across Ractors
    const deeplyFrozenPayload = Object.freeze({ ...dataPayload, items: Object.freeze([...dataPayload.items]) });

    // Ractor B computes sum in parallel on a separate CPU core
    const sum = deeplyFrozenPayload.items.reduce((acc, n) => acc + n, 0);

    return {
      ractorAStatus: 'Message dispatched safely without data race',
      ractorBResult: sum,
      gvlShared: false // True independent execution!
    };
  }

  // Simulates YJIT basic block compiler speedup
  public static calculateYJITBoost(standardMs: number): { yjitMs: number; throughputGainPercent: number } {
    // YJIT reduces execution latency by ~22%
    const yjitMs = Math.round(standardMs * 0.78);
    return {
      yjitMs,
      throughputGainPercent: 25 // 25% faster throughput
    };
  }
}

// Execution Demonstration
console.log('--- 1. Testing Cooperative Fibers (Fiber.yield / resume) ---');
const fiber = Ruby3ConcurrencyEngine.createFiberTask('HTTP-Fetcher');
console.log('First Resume:', fiber.next().value); // Step 1
console.log('Second Resume:', fiber.next().value); // Step 2
console.log('Final Execution:', fiber.next().value); // Step 3

console.log('\n--- 2. Testing Ruby 3 Ractor Parallel Message Passing ---');
const payload = { id: 101, items: [10, 20, 30, 40] };
const ractorOutput = Ruby3ConcurrencyEngine.executeRactorPair(payload);
console.log('Ractor Communication Status:', ractorOutput.ractorAStatus);
console.log('Parallel Ractor Computed Sum:', ractorOutput.ractorBResult); // 100
console.log('Did Ractors share GVL lock?:', ractorOutput.gvlShared); // false (Independent!)

console.log('\n--- 3. Testing Ruby 3 YJIT Compiler Acceleration ---');
const baselineLatencyMs = 100;
const perf = Ruby3ConcurrencyEngine.calculateYJITBoost(baselineLatencyMs);
console.log('Baseline CRuby Latency (ms):', baselineLatencyMs); // 100
console.log('YJIT Compiled Latency (ms):', perf.yjitMs); // 78
console.log('Throughput Gain (%):', perf.throughputGainPercent); // 25%`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Global VM Lock (GVL)',
          def: {
            en: 'Internal CRuby lock restricting execution to one thread per process for native code safety.',
            bn: 'CRuby-র অভ্যন্তরীণ লক যা মেমোরি সুরক্ষার জন্য প্রতিটি প্রসেসে এক সাথে একটি থ্রেডকেই কোড চালাতে দেয়।'
          }
        },
        {
          term: 'Fibers & Fiber Scheduler',
          def: {
            en: 'Lightweight userspace coroutines pausing cooperatively to handle thousands of concurrent I/O sockets.',
            bn: 'অত্যন্ত হালকা ইউজারস্পেস কোরুটিন যা থ্রেড না আটকে হাজার হাজার নেটওয়ার্ক সকেট সহজে সামলায়।'
          }
        },
        {
          term: 'Ractors (Parallel Actors)',
          def: {
            en: 'Ruby 3 concurrency primitive providing isolated GVLs and heaps for multi-core parallel processing.',
            bn: 'Ruby ৩ কনকারেন্সি মডেল যা আলাদা লক ও মেমোরি দিয়ে মাল্টি-কোর প্রসেসরে সমান্তরাল কাজ নিশ্চিত করে।'
          }
        },
        {
          term: 'YJIT Compiler',
          def: {
            en: 'Native Basic Block Versioning JIT compiler in CRuby delivering 15% to 30% higher request throughput.',
            bn: 'CRuby-র নিজস্ব JIT কম্পাইলার যা বাইটকোডকে মেশিন কোডে রূপান্তর করে গতি ১৫% থেকে ৩০% বৃদ্ধি করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ractor-parallel-gvl-bypass-ex1',
      kind: 'mcq',
      topic: 'ruby-ractor-parallel-execution-gvl',
      question: {
        en: 'How do Ruby 3 Ractors achieve true multi-core CPU parallel execution despite CRuby\'s Global VM Lock (GVL)?',
        bn: 'CRuby-র গ্লোবাল VM লক থাকা সত্ত্বেও Ruby ৩ Ractor কীভাবে মাল্টি-কোর প্রসেসরে সত্যিকারের প্যারালালিজম অর্জন করে?'
      },
      options: [
        {
          en: 'Each Ractor possesses its own independent GVL and isolated memory heap, preventing shared mutable data and executing simultaneously across CPU cores',
          bn: 'প্রতিটি Ractor-এর নিজস্ব স্বতন্ত্র GVL এবং আলাদা মেমোরি হিপ থাকে, ফলে কোনো মিউটেবল ডেটা শেয়ার না করে তারা সব CPU কোরে একসাথে চলতে পারে'
        },
        {
          en: 'Ractors run entirely in web browser service workers',
          bn: 'Ractor সম্পূর্ণভাবে ওয়েব ব্রাউজার সার্ভিস ওয়ার্কারে চলে'
        },
        {
          en: 'Ractors disable all computer cooling fans to accelerate calculations',
          bn: 'হিসাব দ্রুত করতে Ractor কম্পিউটারের ফ্যান বন্ধ করে দেয়'
        },
        {
          en: 'Ractors were deprecated in Ruby 3.1',
          bn: 'Ruby ৩.১ সংস্করণে Ractor বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each Ractor runs with its own GVL on an independent core.',
        bn: 'প্রতিটি Ractor সম্পূর্ণ স্বাধীন লকের অধীনে নিজস্ব প্রসেসর কোরে চলে।'
      },
      explanation: {
        en: 'Traditional Ruby threads share a single GVL, blocking true parallel CPU execution. Ractors each run with their own lock and communicate via messages, unlocking true parallelism.',
        bn: 'সাধারণ থ্রেড যেখানে একটিমাত্র লক শেয়ার করে, Ractor সেখানে নিজস্ব লকের মাধ্যমে মাল্টি-কোর প্রসেসরের পূর্ণ শক্তি কাজে লাগায়।'
      }
    },
    {
      id: 'share-nothing-immutable-ractor-ex2',
      kind: 'mcq',
      topic: 'ruby-ractor-share-nothing-isolation',
      question: {
        en: 'What occurs if code attempts to pass an unshared, mutable Hash directly to another Ractor without freezing it or specifying "move: true"?',
        bn: 'ফ্রোজেন না করে বা "move: true" না লিখে কোনো মিউটেবল Hash যদি অন্য একটি Ractor-এ সরাসরি পাঠানোর চেষ্টা করা হয় তবে কী ঘটে?'
      },
      options: [
        {
          en: 'A "Ractor::IsolationError: can not pass an unshareable object" is raised at runtime to prevent race conditions',
          bn: 'রেস কন্ডিশন প্রতিরোধ করতে রানটাইমে একটি "Ractor::IsolationError: can not pass an unshareable object" এরর ঘটে'
        },
        {
          en: 'The operating system reboots instantly',
          bn: 'অপারেটিং সিস্টেম সাথে সাথে রিবুট হয়'
        },
        {
          en: 'The hash is converted into an executable Python script',
          bn: 'হ্যাশটি একটি এক্সিকিউটেবল পাইথন স্ক্রিপ্টে রূপান্তরিত হয়'
        },
        {
          en: 'All data is silently wiped from disk',
          bn: 'ডিস্ক থেকে সমস্ত ডেটা নীরবে মুছে ফেলা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Ractors disallow sharing mutable objects across threads.',
        bn: 'মেমোরি রেস কন্ডিশন এড়াতে মিউটেবল ডেটা সরাসরি পাঠানো নিষিদ্ধ।'
      },
      explanation: {
        en: 'Ractors enforce a strict share-nothing architecture. To prevent race conditions, only deeply frozen immutable objects or moved objects can cross Ractor boundaries.',
        bn: 'ফলে ডেটা রেস তৈরি হওয়ার কোনো ঝুঁকি থাকে না এবং সিস্টেম সম্পূর্ণ নিরাপদ থাকে।'
      }
    },
    {
      id: 'fibers-vs-threads-cooperative-ex3',
      kind: 'mcq',
      topic: 'ruby-fibers-vs-threads-cooperative-scheduling',
      question: {
        en: 'What is the architectural difference between a Ruby Thread and a Ruby Fiber?',
        bn: 'Ruby Thread এবং Ruby Fiber-এর মধ্যে স্থাপত্যিক পার্থক্য কী?'
      },
      options: [
        {
          en: 'Threads are preemptively scheduled by the operating system kernel; Fibers are lightweight cooperative coroutines scheduled explicitly in userspace via yield and resume',
          bn: 'থ্রেডগুলো অপারেটিং সিস্টেম কার্নেল দিয়ে স্বয়ংক্রিয়ভাবে নির্ধারিত হয়; আর ফাইবারগুলো হলো হালকা কোঅপারেটিভ কোরুটিন যা yield ও resume দিয়ে সরাসরি প্রোগ্রামের ভেতর থেকে নিয়ন্ত্রিত হয়'
        },
        {
          en: 'Fibers only run on weekends while Threads run on weekdays',
          bn: 'ফাইবার কেবল ছুটির দিনে চলে আর থ্রেড কেবল কাজের দিনে চলে'
        },
        {
          en: 'There is zero difference; Fiber is an alias of Thread',
          bn: 'তাদের মাঝে কোনো পার্থক্য নেই; Fiber হলো Thread-এর সাধারণ এলিয়াস'
        },
        {
          en: 'Threads do not support network requests in modern Ruby',
          bn: 'আধুনিক Ruby-তে থ্রেড কোনো নেটওয়ার্ক রিকোয়েস্ট সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Threads are preemptive (kernel scheduled); Fibers are cooperative (programmer controlled).',
        bn: 'থ্রেড নিজে নিজে সুইচ করে, আর ফাইবারকে কোডের মাধ্যমে হাত দিয়ে বিরতি দিতে ও চালাতে হয়।'
      },
      explanation: {
        en: 'Fibers provide cooperative multitasking: they pause only when explicitly commanded to yield, drastically reducing stack allocation memory and context-switching overhead.',
        bn: 'এর মাধ্যমে খুব সামান্য মেমোরি খরচ করে লক্ষ লক্ষ কাজ একসাথে সাবলীলভাবে সম্পন্ন করা যায়।'
      }
    },
    {
      id: 'yjit-production-activation-flag-ex4',
      kind: 'mcq',
      topic: 'ruby-yjit-production-activation-command',
      question: {
        en: 'How do production engineering teams enable the YJIT compiler when launching their Ruby or Rails applications in production?',
        bn: 'প্রোডাকশনে Ruby বা Rails অ্যাপ্লিকেশন চালু করার সময় ইঞ্জিনিয়ারিং টিম কীভাবে YJIT কম্পাইলারটি সক্রিয় করে?'
      },
      options: [
        {
          en: 'Passing the "--yjit" command line flag (e.g. "ruby --yjit bin/puma") or setting the environment variable "RUBY_YJIT_ENABLE=1"',
          bn: '"--yjit" কমান্ড লাইন ফ্ল্যাগ ব্যবহার করে (যেমন "ruby --yjit bin/puma") অথবা "RUBY_YJIT_ENABLE=1" এনভায়রনমেন্ট ভ্যারিয়েবল সেট করে'
        },
        {
          en: 'By installing a hardware graphics card inside the server',
          bn: 'সার্ভারের ভেতরে একটি হার্ডওয়্যার গ্রাফিক্স কার্ড ইনস্টল করে'
        },
        {
          en: 'By rewriting the Rails application in C++',
          bn: 'পুরো Rails অ্যাপ্লিকেশনটি C++ এ পুনরায় লিখে'
        },
        {
          en: 'YJIT requires buying an enterprise monthly license key',
          bn: 'YJIT ব্যবহারের জন্য মাসিক লাইসেন্স কি কেনার প্রয়োজন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Enable YJIT via the --yjit flag or RUBY_YJIT_ENABLE=1.',
        bn: 'Ruby রান করার সময় কমান্ডে ফ্ল্যাগটি জুড়ে দিলেই JIT ইঞ্জিন সচল হয়ে যায়।'
      },
      explanation: {
        en: 'YJIT is built into official CRuby releases (Ruby 3.1+). Enabling it with "--yjit" immediately optimizes hot bytecode, delivering 15% to 30%+ higher throughput.',
        bn: 'ফলে কোনো বাড়তি লাইব্রেরি ছাড়াই অ্যাপ্লিকেশনের পারফরম্যান্স তাৎক্ষণিকভাবে বৃদ্ধি পায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-ruby-release',
    title: {
      en: 'Ruby 3 Release, Concurrency & YJIT Quiz',
      bn: 'Ruby ৩ রিলিজ, কনকারেন্সি এবং YJIT কুইজ'
    },
    questions: [
      {
        id: 'quiz-fiber-scheduler-async-gem',
        kind: 'mcq',
        topic: 'ruby-fiber-scheduler-async-event-loop',
        question: {
          en: 'What capability does the "async" gem provide when combined with Ruby 3\'s built-in Fiber Scheduler?',
          bn: 'Ruby ৩-এর বিল্ট-ইন Fiber Scheduler-এর সাথে যুক্ত হয়ে "async" জেম কোন অনন্য ক্ষমতা প্রদান করে?'
        },
        options: [
          {
            en: 'It enables writing standard synchronous-looking Ruby code that executes with fully non-blocking asynchronous I/O concurrency under the hood',
            bn: 'এটি সাধারণ সিনক্রোনাস দেখতে Ruby কোড লেখার সুযোগ দেয় যা অভ্যন্তরীণভাবে সম্পূর্ণ নন-ব্লকিং অ্যাসিনক্রোনাস I/O গতিতে চলে'
          },
          {
            en: 'It doubles the physical download speed of the server network card',
            bn: 'এটি সার্ভারের নেটওয়ার্ক কার্ডের ডাউনলোডের গতি দ্বিগুণ করে দেয়'
          },
          {
            en: 'It encrypts all database tables with AES-512',
            bn: 'এটি সমস্ত ডেটাবেস টেবিলকে AES-৫১২ দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'The async gem was deprecated in Ruby 3.2',
            bn: 'Ruby ৩.২ সংস্করণে async জেম বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'The Fiber Scheduler allows synchronous-style code to run non-blockingly.',
          bn: 'জটিল কলব্যাক বা প্রমিজের ঝামেলা এড়িয়ে সাধারণ কোডের মতোই অ্যাসিনক্রোনাস কাজ করার সুবিধা।'
        },
        explanation: {
          en: 'The Fiber Scheduler automatically intercepts blocking IO calls (like Net::HTTP or TCPSocket) and yields the active Fiber, allowing thousands of requests to run concurrently without thread exhaustion.',
          bn: 'এর মাধ্যমে থ্রেড ব্লকিং ছাড়াই একই সাথে লক্ষ লক্ষ নেটওয়ার্ক রিকোয়েস্ট সামলানো যায়।'
        }
      },
      {
        id: 'quiz-ractor-move-true-semantics',
        kind: 'mcq',
        topic: 'ruby-ractor-move-ownership-transfer',
        question: {
          en: 'What happens to the sender\'s reference when sending an object to a Ractor using "Ractor.send(buffer, move: true)"?',
          bn: '"Ractor.send(buffer, move: true)" ব্যবহার করে কোনো অবজেক্ট অন্য Ractor-এ পাঠালে প্রেরকের নিজস্ব রেফারেন্সটির কী ঘটে?'
        },
        options: [
          {
            en: 'The sender permanently relinquishes ownership: accessing "buffer" in the sender afterwards raises a Ractor::MovedError because ownership was transferred atomically',
            bn: 'প্রেরক স্থায়ীভাবে অবজেক্টটির মালিকানা হারায়: পরবর্তীতে প্রেরক "buffer" অ্যাক্সেস করতে গেলে Ractor::MovedError ঘটে কারণ মালিকানা অন্যটিতে স্থানান্তরিত হয়েছে'
          },
          {
            en: 'It duplicates the object 100 times in memory',
            bn: 'এটি মেমরিতে অবজেক্টটিকে ১০০ বার কপি করে'
          },
          {
            en: 'The object is deleted from the hard drive',
            bn: 'অবজেক্টটি হার্ডড্রাইভ থেকে মুছে যায়'
          },
          {
            en: 'move: true was removed in Ruby 3.2',
            bn: 'Ruby ৩.২ সংস্করণে move: true বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'move: true transfers ownership, making the original reference inaccessible.',
          bn: 'মালিকানা পুরোপুরি তুলে দেওয়া হয়, ফলে আগের জনের কাছে আর কোনো অ্যাক্সেস থাকে না।'
        },
        explanation: {
          en: 'Move semantics avoids expensive deep copying by transferring pointer ownership. To maintain share-nothing safety, the sender is immediately barred from reading or mutating the moved object.',
          bn: 'এর ফলে মেমোরি কপি করার অপচয় এড়ানো যায় এবং কোনো ডেটা রেস তৈরি হতে পারে না।'
        }
      },
      {
        id: 'quiz-yjit-basic-block-versioning-concept',
        kind: 'mcq',
        topic: 'ruby-yjit-basic-block-versioning-architecture',
        question: {
          en: 'Why did the CRuby team adopt Basic Block Versioning (BBV) for YJIT instead of Method-JIT or Tracing-JIT compilers?',
          bn: 'Method-JIT বা Tracing-JIT কম্পাইলারের বদলে CRuby টিম কেন YJIT-এর জন্য বেসিক ব্লক ভার্সনিং (BBV) বেছে নিয়েছিল?'
        },
        options: [
          {
            en: 'BBV compiles code lazily one basic block at a time, generating specialized machine code based on observed incoming types, eliminating JIT warmup latency while providing consistent speedups',
            bn: 'BBV একবারে কোডের একটিমাত্র বেসিক ব্লক কম্পাইল করে এবং আগমনকারী টাইপ দেখে বিশেষায়িত মেশিন কোড তৈরি করে, ফলে কোনো দীর্ঘ ওয়ার্মআপ বিলম্ব ছাড়াই তাৎক্ষণিক পারফরম্যান্স বৃদ্ধি পায়'
          },
          {
            en: 'Because BBV runs without an operating system',
            bn: 'কারণ BBV কোনো অপারেটিং সিস্টেম ছাড়াই চলে'
          },
          {
            en: 'BBV is designed specifically for quantum computers',
            bn: 'BBV বিশেষভাবে কোয়ান্টাম কম্পিউটারের জন্য ডিজাইন করা হয়েছে'
          },
          {
            en: 'Tracing JITs were banned by international software laws',
            bn: 'আন্তর্জাতিক সফটওয়্যার আইনে ট্রেসিং JIT নিষিদ্ধ করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'BBV specializes individual basic blocks lazily with near-zero warmup time.',
          bn: 'পুরো কোড একসাথে কম্পাইল না করে ছোট ছোট ব্লক টাইপ অনুযায়ী সাথে সাথে তৈরি করার সেরা কৌশল।'
        },
        explanation: {
          en: 'BBV handles Ruby\'s extreme dynamism gracefully. It avoids the catastrophic deoptimization storms of tracing JITs, providing instant 15% to 30%+ performance gains on real Rails codebases.',
          bn: 'এর মাধ্যমে অ্যাপ চালু হওয়ার মুহূর্ত থেকেই দ্রুতগতিতে কাজ সম্পন্ন করা সম্ভব হয়।'
        }
      },
      {
        id: 'quiz-ruby-3-3-prism-parser',
        kind: 'mcq',
        topic: 'ruby-prism-parser-evolution',
        question: {
          en: 'What architectural advantage does the portable "Prism" parser (introduced in Ruby 3.3) bring to the global Ruby ecosystem?',
          bn: 'Ruby ৩.৩ সংস্করণে যুক্ত হওয়া পোর্টেবল "Prism" পার্সার বৈশ্বিক Ruby ইকোসিস্টেমে কোন কাঠামোগত সুবিধা এনেছে?'
        },
        options: [
          {
            en: 'It serves as a fast, fault-tolerant, universal C library parser for Ruby, unifying tooling like syntax highlighters, linters (RuboCop), IDEs, and alternative Ruby implementations (TruffleRuby, JRuby)',
            bn: 'এটি একটি দ্রুত, ফল্ট-টলারেন্ট এবং সর্বজনীন C লাইব্রেরি পার্সার যা সিনট্যাক্স হাইলাইটার, লিন্টার (RuboCop), আইডিই এবং বিকল্প Ruby রানটাইমকে এক অভিন্ন পার্সারের অধীনে যুক্ত করে'
          },
          {
            en: 'It converts Ruby code into optical laser beams',
            bn: 'এটি Ruby কোডকে অপটিক্যাল লেজার রশ্মিতে রূপান্তর করে'
          },
          {
            en: 'It reboots the server if a syntax error occurs',
            bn: 'সিনট্যাক্স ভুল দেখা দিলেই এটি সার্ভার রিবুট করে'
          },
          {
            en: 'Prism was deprecated in Ruby 3.4',
            bn: 'Ruby ৩.৪ সংস্করণে Prism বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Prism is the official universal, fault-tolerant C parser for the Ruby language.',
          bn: 'সব এডিটর ও টুলে যেন হুবহু একই ব্যাকরণ ও পার্সিং কাজ করে তার বৈপ্লবিক ভিত্তি।'
        },
        explanation: {
          en: 'Prism (formerly YARP) provides a maintainable, error-tolerant AST parser for Ruby with clean C bindings, standardizing syntax parsing across all tools and IDEs.',
          bn: 'এর মাধ্যমে সব ডেভেলপার টুল ও রানটাইম এক অভিন্ন মানসম্মত পার্সিং সুবিধা লাভ করে।'
        }
      }
    ]
  }
};
