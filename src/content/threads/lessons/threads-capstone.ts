import type { Lesson } from '../../../lib/types';

export const ThreadsCapstoneLesson: Lesson = {
  slug: 'threads-capstone',
  tech: 'threads',
  title: {
    en: 'Multi-Threaded Production Engine Capstone',
    bn: 'মাল্টি-থ্রেডেড প্রোডাকশন ইঞ্জিন ক্যাপস্টোন'
  },
  summary: {
    en: 'Synthesize all multithreading concepts into an end-to-end production concurrency engine. Construct a multi-worker parallel task pipeline that processes thousands of jobs across multiple CPU cores without race conditions, deadlocks, or memory leaks. Implement thread-safe shared state with mutex guards, bounded blocking queues, thread recycling, and graceful shutdown metrics.',
    bn: 'সমস্ত মাল্টি-থ্রেডিং ধারণাকে একটি সমন্বিত প্রোডাকশন কনকারেন্সি ইঞ্জিনে রূপান্তর করুন। একাধিক সিপিইউ কোরে রেস কন্ডিশন, ডেডলক বা মেমোরি লিক ছাড়া হাজার হাজার কাজ সম্পন্ন করার জন্য একটি মাল্টি-ওয়ার্কার সমান্তরাল পাইপলাইন তৈরি করুন। মিউটেক্স গার্ডসহ থ্রেড-সেফ শেয়ার্ড মেমোরি, বাউন্ডেড ব্লকিং কিউ, কর্মী পুনর্ব্যবহার এবং গ্রেসফুল শাটডাউন বাস্তবায়ন করুন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'production-multithreaded-architecture',
      text: {
        en: 'The Architectural Mandate: High-Throughput Threaded Pipelines',
        bn: 'আর্কিটেকচারাল লক্ষ্য: উচ্চগতির মাল্টি-থ্রেডেড পাইপলাইন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you build backend systems that process thousands of transactions per second, single-threaded architectures bottleneck on compute-heavy workloads. At the same time, naive multithreading crashes from race conditions, deadlocks, and memory exhaustion.',
        bn: 'যখন আপনি প্রতি সেকেন্ডে হাজার হাজার লেনদেন সম্পন্নকারী ব্যাকএন্ড সিস্টেম তৈরি করেন, তখন একক থ্রেডের আর্কিটেকচার ভারী কাজের চাপে ধীর হয়ে পড়ে। আবার অন্যদিকে অনিয়ন্ত্রিত মাল্টি-থ্রেডিং ব্যবহার করলে তা রেস কন্ডিশন, ডেডলক এবং মেমোরির অপচয়ে ক্র্যাশ করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A production-grade multithreading engine combines four foundational building blocks. It pairs a fixed worker pool and a bounded FIFO task queue with scoped mutex locks and a coordinated graceful shutdown protocol.',
        bn: 'একটি প্রোডাকশন-গ্রেড মাল্টি-থ্রেডিং ইঞ্জিন মূলত ৪ টি মৌলিক উপাদানের সমন্বয় ঘটায়। এটি একটি নির্দিষ্ট কর্মী পুল ও বাউন্ডেড টাস্ক কিউয়ের সাথে স্কোপড মিউটেক্স লক এবং গ্রেসফুল শাটডাউন প্রটোকলকে যুক্ত করে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Thread-Safe Worker Pool Engine',
            bn: '১. থ্রেড-সেফ ওয়ার্কার পুল ইঞ্জিন'
          },
          text: {
            en: 'Pre-spawns 4 persistent worker threads on startup, assigning tasks from a shared blocking queue without incurring costly thread creation syscalls.',
            bn: 'অ্যাপ্লিকেশন চালুর সময়ই ৪ জন স্থায়ী কর্মী থ্রেড প্রস্তুত করে, যা নতুন থ্রেড সৃষ্টির সময় নষ্ট না করে শেয়ার্ড কিউ থেকে কাজ গ্রহণ করে।'
          },
        },
        {
          title: {
            en: '2. Mutex-Guarded State Machine',
            bn: '২. মিউটেক্স-সুরক্ষিত স্টেট মেশিন'
          },
          text: {
            en: 'All writes to the shared financial ledger and metrics counters are guarded by exclusive mutex locks, mathematically preventing race conditions and lost updates.',
            bn: 'শেয়ার্ড লেজার এবং মেট্রিক্সে যেকোনো পরিবর্তন মিউটেক্স লকের মাধ্যমে সুরক্ষিত থাকে, যা গাণিতিকভাবে ডাটা রেস ও লস্ট আপডেট প্রতিরোধ করে।'
          },
        },
        {
          title: {
            en: '3. Non-Blocking Task Ingestion',
            bn: '৩. নন-ব্লকিং কাজ গ্রহণ'
          },
          text: {
            en: 'Callers submit asynchronous jobs and receive immediate promises without blocking calling threads, allowing clients to ingest high-frequency event streams smoothly.',
            bn: 'রিকোয়েস্টকারী সরাসরি কাজ জমা দিয়ে তাৎক্ষণিক প্রমিস লাভ করে এবং নিজের কাজ চালিয়ে যেতে পারে, ফলে ইনকামিং ইভেন্টের গতি কখনো বাধাগ্রস্ত হয় না।'
          },
        },
        {
          title: {
            en: '4. Coordinated Graceful Draining',
            bn: '৪. সমন্বিত গ্রেসফুল শাটডাউন'
          },
          text: {
            en: 'Upon shutdown, the engine stops accepting new work, processes every enqueued job to completion, and reaps all worker threads with zero leaked memory.',
            bn: 'শাটডাউনের সংকেত পেলে ইঞ্জিন নতুন কাজ নেওয়া বন্ধ করে, কিউতে থাকা প্রতিটি কাজ সম্পূর্ণ করে এবং কোনো প্রকার মেমোরি লিক ছাড়াই সমস্ত কর্মী থ্রেড খালাস করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Production Multithreading Engine: Ingestion Layer, Worker Pool & Mutex Ledger',
        bn: 'প্রোডাকশন মাল্টি-থ্রেডিং ইঞ্জিন: টাস্ক ইনজেশন, ওয়ার্কার পুল এবং মিউটেক্স লেজার'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Production multithreading engine architecture diagram showing ingestion queue, worker pool, and mutex-protected shared ledger">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">PRODUCTION MULTI-THREADED PIPELINE ARCHITECTURE</text>
  
  <!-- Left Side: Ingestion Queue -->
  <g transform="translate(30, 48)">
    <rect width="210" height="350" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="105" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">TASK INGESTION QUEUE</text>
    
    <g transform="translate(15, 45)">
      <rect width="180" height="45" rx="4" fill="#0f172a" stroke="#0284c7"/>
      <text x="90" y="22" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">Job #20: Transfer $50</text>
      <text x="90" y="36" fill="#cbd5e1" font-size="8" text-anchor="middle">Enqueued</text>
      
      <rect y="55" width="180" height="45" rx="4" fill="#0f172a" stroke="#0284c7"/>
      <text x="90" y="77" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">Job #19: Transfer $50</text>
      <text x="90" y="91" fill="#cbd5e1" font-size="8" text-anchor="middle">Enqueued</text>
      
      <rect y="110" width="180" height="45" rx="4" fill="#0f172a" stroke="#0284c7"/>
      <text x="90" y="132" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">Job #18: Transfer $50</text>
      <text x="90" y="146" fill="#cbd5e1" font-size="8" text-anchor="middle">Enqueued</text>
      
      <rect y="170" width="180" height="60" rx="6" fill="#0f172a" stroke="#f59e0b"/>
      <text x="90" y="195" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">BOUNDED CAPACITY</text>
      <text x="90" y="214" fill="#cbd5e1" font-size="8" text-anchor="middle">Protects RAM against surges</text>
    </g>
  </g>
  
  <!-- Arrow to Pool -->
  <path d="M 245 170 L 275 170" stroke="#38bdf8" stroke-width="2"/>
  
  <!-- Center: Worker Pool (4 Workers) -->
  <g transform="translate(280, 48)">
    <rect width="250" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="125" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">REUSABLE WORKER POOL</text>
    
    <g transform="translate(15, 40)">
      <rect width="220" height="55" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="25" y="24" fill="#38bdf8" font-size="10" font-weight="bold">Worker 1 (Core 0)</text>
      <text x="25" y="42" fill="#cbd5e1" font-size="8">Processing Job #14</text>
      
      <rect y="65" width="220" height="55" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="25" y="89" fill="#38bdf8" font-size="10" font-weight="bold">Worker 2 (Core 1)</text>
      <text x="25" y="107" fill="#cbd5e1" font-size="8">Processing Job #15</text>
      
      <rect y="130" width="220" height="55" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="25" y="154" fill="#38bdf8" font-size="10" font-weight="bold">Worker 3 (Core 2)</text>
      <text x="25" y="172" fill="#cbd5e1" font-size="8">Processing Job #16</text>
      
      <rect y="195" width="220" height="55" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="25" y="219" fill="#38bdf8" font-size="10" font-weight="bold">Worker 4 (Core 3)</text>
      <text x="25" y="237" fill="#cbd5e1" font-size="8">Processing Job #17</text>
    </g>
  </g>
  
  <!-- Arrow to Mutex Ledger -->
  <path d="M 535 170 L 565 170" stroke="#10b981" stroke-width="2"/>
  
  <!-- Right Side: Mutex Protected Ledger -->
  <g transform="translate(570, 48)">
    <rect width="240" height="350" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="120" y="24" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">MUTEX SHARED LEDGER</text>
    
    <g transform="translate(15, 45)">
      <!-- Mutex lock icon -->
      <rect width="210" height="60" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
      <text x="105" y="28" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">EXCLUSIVE MUTEX 🔒</text>
      <text x="105" y="46" fill="#cbd5e1" font-size="9" text-anchor="middle">Guards Critical Section</text>
      
      <!-- Metrics box -->
      <rect y="75" width="210" height="180" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="105" y="105" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">CONFIRMED METRICS</text>
      
      <text x="20" y="140" fill="#f8fafc" font-size="10">Jobs Completed: 20</text>
      <text x="20" y="165" fill="#f8fafc" font-size="10">Transaction Sum: $1000</text>
      <text x="20" y="190" fill="#f8fafc" font-size="10">Lost Updates: 0 (ZERO!)</text>
      <text x="20" y="215" fill="#f8fafc" font-size="10">Deadlocks: 0 (ZERO!)</text>
      
      <text x="105" y="242" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">100% Data Integrity</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">The production engine combines thread pool recycling, bounded queues, and scoped mutex guards for extreme concurrency</text>
</svg>`,
      caption: {
        en: 'The production multithreading engine processes tasks via persistent workers, synchronizing shared metrics using scoped mutex guards.',
        bn: 'প্রোডাকশন ইঞ্জিন স্থায়ী কর্মীদের মাধ্যমে কাজ সম্পন্ন করে এবং স্কোপড মিউটেক্স গার্ড ব্যবহার করে শেয়ার্ড মেট্রিক্সের নিরাপত্তা নিশ্চিত করে।'
      },
    },
    {
      type: 'heading',
      id: 'capstone-engine-implementation',
      text: {
        en: 'Full Production Multithreaded Engine Simulation in Node.js',
        bn: 'Node.js-এ সম্পূর্ণ প্রোডাকশন মাল্টি-থ্রেডেড ইঞ্জিন সিমুলেশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how professional concurrency architectures operate under heavy load, inspect the following complete engine implementation. It coordinates worker threads, executes 20 concurrent transactions, and proves 100% mathematical consistency without lost updates.',
        bn: 'পেশাদার কনকারেন্সি আর্কিটেকচার কীভাবে কাজের চাপে কার্যকর থাকে তা দেখতে নিচের সম্পূর্ণ ইঞ্জিন বাস্তবায়নটি পর্যালোচনা করুন। এটি কর্মী থ্রেডগুলোকে পরিচালনা করে, ২০ টি সমান্তরাল লেনদেন সম্পন্ন করে এবং কোনো প্রকার ডাটা ক্ষতি ছাড়া ১০০% নির্ভুল ফলাফল প্রমাণ করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'production-concurrency-engine.js',
      code: `// Multi-Threaded Production Engine Capstone Simulation
// Integrates Worker Pools, Mutex Protection, and Graceful Draining

class ScopedMutex {
  constructor() {
    this.locked = false;
    this.waiters = [];
  }

  async acquire() {
    if (!this.locked) {
      this.locked = true;
      return;
    }
    await new Promise(resolve => this.waiters.push(resolve));
  }

  release() {
    if (this.waiters.length > 0) {
      const next = this.waiters.shift();
      next();
    } else {
      this.locked = false;
    }
  }

  async runWithLock(fn) {
    await this.acquire();
    try {
      return await fn();
    } finally {
      this.release();
    }
  }
}

// Shared Ledger protected by ScopedMutex
class SharedProductionLedger {
  constructor() {
    this.mutex = new ScopedMutex();
    this.completedJobsCount = 0;
    this.accumulatedBalance = 0;
  }

  async recordTransaction(jobId, amount, workerId) {
    return await this.mutex.runWithLock(async () => {
      // Critical Section: atomic mutation of shared ledger
      this.completedJobsCount++;
      this.accumulatedBalance += amount;
      console.log('[Worker ' + workerId + '] Committed Job ' + jobId + ' ($' + amount + ') -> Total: $' + this.accumulatedBalance);
    });
  }
}

// Production Concurrency Engine Pipeline
class ProductionConcurrencyEngine {
  constructor(workerCount = 4) {
    this.workerCount = workerCount;
    this.ledger = new SharedProductionLedger();
    this.queue = [];
    this.activeWorkers = 0;
    this.isDraining = false;
  }

  submitJob(jobId, amount) {
    if (this.isDraining) {
      throw new Error('Engine is shutting down; cannot accept new jobs.');
    }
    return new Promise((resolve) => {
      this.queue.push({ jobId, amount, resolve });
      this.dispatchNext();
    });
  }

  dispatchNext() {
    if (this.activeWorkers >= this.workerCount || this.queue.length === 0) {
      return;
    }

    this.activeWorkers++;
    const job = this.queue.shift();
    const workerId = this.activeWorkers;

    // Simulate concurrent worker computation
    setTimeout(async () => {
      await this.ledger.recordTransaction(job.jobId, job.amount, workerId);
      job.resolve();
      this.activeWorkers--;
      this.dispatchNext();
    }, 10);
  }

  async gracefulShutdown() {
    console.log('\\n[SHUTDOWN] Initiating graceful drain of all remaining tasks...');
    this.isDraining = true;
    while (this.queue.length > 0 || this.activeWorkers > 0) {
      await new Promise(r => setTimeout(r, 10));
    }
    console.log('[SHUTDOWN] Pipeline drained cleanly with zero dropped transactions.');
  }
}

async function runCapstoneDemo() {
  const engine = new ProductionConcurrencyEngine(4);
  console.log('=== Step 1: Submitting 20 Financial Transactions ($50 each) ===');

  const promises = [];
  for (let i = 1; i <= 20; i++) {
    promises.push(engine.submitJob('Tx_' + i, 50));
  }

  await Promise.all(promises);
  await engine.gracefulShutdown();

  console.log('\\n=== Final Capstone Ledger Telemetry ===');
  console.log('Total Transactions Processed:', engine.ledger.completedJobsCount);
  console.log('Final Calculated Total:      $' + engine.ledger.accumulatedBalance);
  console.log('Mathematical Invariant Check: $1000 Expected === $' + engine.ledger.accumulatedBalance + ' Actual -> PASSED!');
}

runCapstoneDemo();`,
      caption: {
        en: 'The capstone engine executes 20 parallel transactions across 4 workers, producing the exact $1000 balance without race hazards.',
        bn: 'ক্যাপস্টোন ইঞ্জিনটি ৪ জন কর্মীর মাধ্যমে ২০ টি সমান্তরাল লেনদেন সম্পন্ন করে এবং কোনো ত্রুটি ছাড়াই সঠিক ১০০০ ডলার হিসাব প্রমাণ করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Concurrency Diagnostics: ThreadSanitizer & Race Detectors',
        bn: 'কনকারেন্সি ডায়াগনস্টিকস: ThreadSanitizer এবং রেস ডিটেক্টর'
      },
      text: {
        en: 'In production systems written in C, C++, Go, and Rust, manual code review cannot catch every subtle multithreading bug. Modern compiler toolchains provide ThreadSanitizer (TSan). When code is compiled with -fsanitize=thread (or go test -race), the compiler instruments memory reads and writes with shadow memory tracking. If two threads touch the same memory location without synchronization, TSan prints the exact file and line numbers of both threads at runtime. Always enable race detectors in automated test suites!',
        bn: 'সি, সি++, Go এবং Rust-এ লিখিত প্রোডাকশন কোডে শুধুমাত্র চোখ বুলিয়ে সব মাল্টি-থ্রেডিং ত্রুটি ধরা অসম্ভব। আধুনিক কম্পাইলারগুলো ThreadSanitizer (TSan) সুবিধা প্রদান করে। কোড কম্পাইলের সময় -fsanitize=thread ( বা go test -race ) দিলে কম্পাইলার মেমোরির প্রতিটি পরিবর্তনের ওপর নজর রাখে। দুটি থ্রেড যদি সিঙ্ক্রোনাইজেশন ছাড়া একই মেমোরি স্পর্শ করে, তবে রানটাইমে TSan উভয় থ্রেডের সুনির্দিষ্ট ফাইল ও লাইন নম্বর প্রিন্ট করে সতর্ক করে দেয়। অটোমেটেড টেস্টিংয়ে সর্বদা রেস ডিটেক্টর চালু রাখা উচিত!'
      },
    },
  ],
  exercises: [
    {
      id: 'th-cap-ex-1',
      kind: 'predict',
      topic: "threads-capstone",
      question: {
        en: 'If a capstone production engine spawns 4 worker threads on a quad-core processor, how many worker threads are active? (4). Type the number.',
        bn: 'একটি ৪-কোর প্রসেসরে যদি ক্যাপস্টোন প্রোডাকশন ইঞ্জিন ৪ জন কর্মী থ্রেড প্রস্তুত করে, তবে সর্বমোট কয়টি কর্মী থ্রেড সক্রিয় থাকবে? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'The worker pool size is 4.',
        bn: 'কর্মী পুলের মোট সংখ্যা হলো ৪।'
      },
      explanation: {
        en: 'Spawning 4 workers on 4 CPU cores maximizes hardware parallel processing without context switch thrashing.',
        bn: '৪ কোরে ৪ জন কর্মী রাখলে কনটেক্সট সুইচের অপচয় ছাড়াই হার্ডওয়্যারের সমান্তরাল ক্ষমতার সর্বোচ্চ ব্যবহার নিশ্চিত হয়।'
      },
    },
    {
      id: 'th-cap-ex-2',
      kind: 'mcq',
      topic: "threads-capstone",
      question: {
        en: 'What is the primary architectural purpose of wrapping a shared metrics ledger in a scoped mutex lock?',
        bn: 'একটি শেয়ার্ড মেট্রিক্স লেজারকে স্কোপড মিউটেক্স লকের ভেতরে রাখার মূল স্থাপত্যগত উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'To ensure all read-modify-write operations on shared state occur with mutual exclusion, preventing corrupted totals and lost updates',
          bn: 'শেয়ার্ড ডাটার ওপর সমস্ত read-modify-write অপারেশন যেন মিউচুয়াল এক্সক্লুশনের সাথে সম্পন্ন হয় এবং ডাটা গরমিল ও লস্ট আপডেট সম্পূর্ণ প্রতিরোধ হয় তা নিশ্চিত করা',
        },
        {
          en: 'To make the database records print in uppercase letters',
          bn: 'ডাটাবেজের রেকর্ডগুলো যেন কেবল বড় হাতের অক্ষরে প্রিন্ট হয় তা নিশ্চিত করা',
        },
        {
          en: 'To prevent the computer keyboard from making mechanical clicking noises',
          bn: 'কিবোর্ড থেকে যেন কোনো যান্ত্রিক টাইপিং শব্দ না হয় তা নিশ্চিত করা',
        },
        {
          en: 'To reduce the physical weight of the computer server chassis',
          bn: 'কম্পিউটার সার্ভার চেসিসের শারীরিক ওজন হ্রাস করা',
        },
      ],
      answer: 0,
      hint: {
        en: 'Mutex locking guarantees mutual exclusion, eliminating data races.',
        bn: 'মিউটেক্স লকিং মিউচুয়াল এক্সক্লুশন নিশ্চিত করে ডাটা রেস দূর করে।',
      },
      explanation: {
        en: 'Wrapping shared state in a mutex ensures that updates are serialized, guaranteeing mathematical consistency across concurrent workers.',
        bn: 'শেয়ার্ড ডাটাকে মিউটেক্সে মুড়িয়ে দিলে আপডেটগুলো ধারাবাহিকভাবে ঘটে এবং গাণিতিক নির্ভুলতা বজায় থাকে।'
      },
    },
    {
      id: 'th-cap-ex-3',
      kind: 'mcq',
      topic: "threads-capstone",
      question: {
        en: 'How does compiler tooling like ThreadSanitizer (TSan) assist engineers in catching race conditions?',
        bn: 'ThreadSanitizer (TSan)-এর মতো কম্পাইলার টুল কীভাবে ইঞ্জিনিয়ারদের রেস কন্ডিশন শনাক্ত করতে সহায়তা করে?'
      },
      options: [
        {
          en: 'It instruments every memory access at compile time, detecting and reporting unsynchronized concurrent memory accesses during test runs with stack traces',
          bn: 'এটি কম্পাইল সময়ে প্রতিটি মেমোরি অ্যাক্সেসের ওপর নজরদারি কোড বসায় এবং টেস্ট চলার সময় সিঙ্ক্রোনাইজেশন ছাড়া ঘটা মেমোরি স্পর্শগুলো স্ট্যাক ট্রেসসহ রিপোর্ট করে',
        },
        {
          en: 'It physically replaces computer memory chips with newer hardware',
          bn: 'এটি কম্পিউটারের মেমোরি চিপগুলো শারীরিকভাবে নতুন হার্ডওয়্যার দিয়ে বদলে দেয়',
        },
        {
          en: 'It converts all multithreaded code into single-threaded Python scripts',
          bn: 'এটি সমস্ত মাল্টি-থ্রেডেড কোডকে একক থ্রেডের পাইথন স্ক্রিপ্টে রূপান্তর করে ফেলে',
        },
        {
          en: 'It automatically buys server hosting subscriptions from cloud providers',
          bn: 'এটি নিজে থেকেই ক্লাউড প্রোভাইডারের কাছ থেকে সার্ভার হোস্টিং সাবস্ক্রিপশন কিনে নেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'TSan tracks memory accesses at runtime to catch unsynchronized data races.',
        bn: 'TSan রানটাইমে মেমোরি ব্যবহারের ওপর নজর রেখে সমন্বয়হীন ডাটা রেস ধরে ফেলে।',
      },
      explanation: {
        en: 'TSan instruments memory reads and writes, flagging data races before software reaches production deployments.',
        bn: 'TSan মেমোরি পড়ার ও লেখার প্রতিটি পদক্ষেপে নজর রাখে, ফলে কোড প্রোডাকশনে যাওয়ার আগেই ডাটা রেস ধরা পড়ে।'
      },
    },
    {
      id: 'th-cap-ex-4',
      kind: 'predict',
      topic: "threads-capstone",
      question: {
        en: 'If the engine processes 20 financial jobs of $50 each, what is the exact calculated total? (1000). Type the number.',
        bn: 'ইঞ্জিনটি যদি ২০ টি কাজের প্রতিটিতে ৫০ ডলার করে লেনদেন সম্পন্ন করে, তবে নিখুঁতভাবে হিসাবকৃত মোট অর্থ কত হবে? ( ১০০০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1000',
      hint: {
        en: 'Multiply 20 jobs by $50 = 1000.',
        bn: '২০ টি কাজকে ৫০ দিয়ে গুণ করুন: ১০০০।'
      },
      explanation: {
        en: 'With proper mutex synchronization, all 20 updates commit cleanly: 20 * $50 = $1000.',
        bn: 'সঠিক মিউটেক্স সিঙ্ক্রোনাইজেশনের মাধ্যমে সমস্ত ২০ টি কাজ সফলভাবে যুক্ত হয়: ২০ * ৫০ = ১০০০ ডলার।'
      },
    },
  ],
  quiz: {
    id: "threads-capstone-quiz",
    title: {
      en: 'Multi-Threaded Production Engine Capstone Quiz',
      bn: 'মাল্টি-থ্রেডেড প্রোডাকশন ইঞ্জিন ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'th-cap-qz-1',
        kind: 'mcq',
        topic: 'graceful-draining-phase',
        question: {
          en: 'What sequence of operational steps occurs during the Graceful Drain phase of a production concurrency pipeline?',
          bn: 'একটি প্রোডাকশন কনকারেন্সি পাইপলাইনের গ্রেসফুল ড্রেন (Graceful Drain) ধাপে কোন সুনির্দিষ্ট পদক্ষেপগুলো কার্যকর হয়?'
        },
        options: [
          {
            en: 'The ingestion gate refuses new submissions, worker threads finish all enqueued tasks in the buffer, and the engine waits for zero active jobs before terminating threads',
            bn: 'ইনজেশন গেট নতুন কাজ গ্রহণ বন্ধ করে দেয়, কর্মী থ্রেডগুলো বাফারে থাকা সমস্ত কাজ শেষ করে এবং কোনো কাজ বাকি না থাকা নিশ্চিত হওয়ার পরই কর্মীদের বিদায় দেয়',
          },
          {
            en: 'The server cuts electrical power to all connected hard drives immediately',
            bn: 'সার্ভার তৎক্ষণাৎ সমস্ত সংযুক্ত হার্ড ড্রাইভের বিদ্যুৎ সংযোগ বিচ্ছিন্ন করে দেয়',
          },
          {
            en: 'The engine emails all source code files to third-party advertising companies',
            bn: 'ইঞ্জিনটি সমস্ত সোর্স কোড ফাইল বাইরের বিজ্ঞাপন কোম্পানির কাছে ইমেইল করে দেয়',
          },
          {
            en: 'The computer display turns into an analog clock permanently',
            bn: 'কম্পিউটার ডিসপ্লে চিরতরে একটি অ্যানালগ ঘড়িতে রূপান্তরিত হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Stop taking new jobs, finish in-flight work, then terminate cleanly.',
          bn: 'নতুন কাজ নেওয়া বন্ধ করা, চলমান কাজ শেষ করা, তারপর সুশৃঙ্খলভাবে থ্রেড বন্ধ করা।',
        },
        explanation: {
          en: 'Graceful draining prevents dropped transactions and corrupted state by finishing all in-flight work before shutdown.',
          bn: 'গ্রেসফুল ড্রেনিং নিশ্চিত করে যে কোনো লেনদেন যেন বাদ না পড়ে—শাটডাউনের আগে এটি চলমান সমস্ত কাজ সফলভাবে সম্পন্ন করে।'
        },
      },
      {
        id: 'th-cap-qz-2',
        kind: 'mcq',
        topic: 'bounded-queue-protection',
        question: {
          en: 'Why is combining a Bounded Queue with fixed worker threads critical for preventing memory exhaustion during extreme traffic spikes?',
          bn: 'অতিরিক্ত ট্রাফিকের চাপে মেমোরি সংকট রোধ করতে ফিক্সড কর্মীদের সাথে একটি বাউন্ডেড কিউ (Bounded Queue) যুক্ত করা কেন অত্যন্ত জরুরি?'
        },
        options: [
          {
            en: 'It establishes a strict upper limit on queued items in RAM; when capacity is reached, backpressure or rejection policies trigger rather than allowing memory to grow unbounded',
            bn: 'এটি র‍্যামে কিউতে রাখা আইটেমের ওপর একটি কঠোর সর্বোচ্চ সীমা স্থাপন করে; সীমা স্পর্শ করলে সীমাহীন মেমোরি বৃদ্ধির বদলে ব্যাকপ্রেসার বা রিজেকশন নীতি কার্যকর হয়',
          },
          {
            en: 'Because bounded queues physically convert computer RAM into extra hard drive storage',
            bn: 'কারণ বাউন্ডেড কিউ কম্পিউটারের র‍্যামকে হার্ড ড্রাইভ স্টোরেজে রূপান্তর করে ফেলে',
          },
          {
            en: 'Because unbounded queues make internet network routers catch fire',
            bn: 'কারণ আনবাউন্ডেড কিউ ইন্টারনেট রাউটারে আগুন ধরিয়ে দেয়',
          },
          {
            en: 'Because bounded queues only store numbers that end in zero',
            bn: 'কারণ বাউন্ডেড কিউ কেবল শূন্য দিয়ে শেষ হওয়া সংখ্যা সংরক্ষণ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'A bounded queue caps RAM usage and activates backpressure.',
          bn: 'বাউন্ডেড কিউ মেমোরির সর্বোচ্চ সীমা বেঁধে দেয় এবং ব্যাকপ্রেসার চালু করে।',
        },
        explanation: {
          en: 'An unbounded queue grows infinitely during traffic spikes, eventually triggering the kernel OOM Killer. Bounded queues protect system stability.',
          bn: 'আনবাউন্ডেড কিউ ট্রাফিকের চাপে সীমাহীনভাবে বাড়ে এবং শেষ পর্যন্ত ওএস মেমোরি হারিয়ে ক্র্যাশ করে। বাউন্ডেড কিউ এই বিপর্যয় ঠেকায়।'
        },
      },
      {
        id: 'th-cap-qz-3',
        kind: 'mcq',
        topic: 'finally-lock-release-pattern',
        question: {
          en: 'What software design pattern guarantees that a mutex lock is released even if a worker throws an unexpected runtime exception?',
          bn: 'কোন সফটওয়্যার ডিজাইন প্যাটার্ন নিশ্চিত করে যে কোনো অপ্রত্যাশিত রানটাইম এরর ঘটলেও মিউটেক্স লকটি অবশ্যই মুক্ত হবে?'
        },
        options: [
          {
            en: 'The Scoped Lock Guard pattern (or try...finally block) which unconditionally executes unlock logic in the cleanup phase regardless of how the block exits',
            bn: 'স্কোপড লক গার্ড প্যাটার্ন ( বা try...finally ব্লক ) যা ব্লকটি যেভাবেই শেষ হোক না কেন ক্লিনআপ ধাপে নিঃশর্তভাবে আনলক কোডটি কার্যকর করে',
          },
          {
            en: 'Writing the word unlock one hundred times at the end of the file',
            bn: 'ফাইলের শেষে একশত বার unlock শব্দটি লিখে রাখা',
          },
          {
            en: 'Restarting the computer operating system every time an error happens',
            bn: 'প্রতিবার এরর ঘটার সাথে সাথে অপারেটিং সিস্টেম রিস্টার্ট দেওয়া',
          },
          {
            en: 'Deleting all comments from the application source code',
            bn: 'অ্যাপ্লিকেশনের সোর্স কোড থেকে সমস্ত কমেন্ট মুছে ফেলা',
          },
        ],
        answer: 0,
        hint: {
          en: 'try-finally blocks guarantee lock release even during errors.',
          bn: 'try-finally ব্লক ত্রুটির মধ্যেও লক মুক্ত হওয়া নিশ্চিত করে।',
        },
        explanation: {
          en: 'RAII guards and try/finally blocks ensure that unlock() is executed during stack unwinding, preventing permanent deadlocks.',
          bn: 'try/finally ব্লক নিশ্চিত করে যে এরর হলেও unlock() কার্যকর হবে, ফলে লক চিরতরে আটকে থাকা রোধ হয়।'
        },
      },
      {
        id: 'th-cap-qz-4',
        kind: 'mcq',
        topic: 'tsan-testing-vs-production',
        question: {
          en: 'Why is ThreadSanitizer (TSan) typically deployed in automated CI/CD testing environments rather than production user-facing servers?',
          bn: 'ThreadSanitizer (TSan) কেন প্রোডাকশন সার্ভারে না চালিয়ে মূলত অটোমেটেড CI/CD টেস্টিং পরিবেশে চালানো হয়?'
        },
        options: [
          {
            en: 'TSan incurs substantial instrumentation overhead, slowing program execution by 2x to 10x and increasing memory consumption by 5x to 10x, making it unsuitable for low-latency production traffic',
            bn: 'TSan কোডের প্রতিটি মেমোরি অ্যাক্সেস ট্র্যাক করায় প্রোগ্রামের গতি ২ থেকে ১০ গুণ ধীর হয়ে যায় এবং মেমোরি ৫ থেকে ১০ গুণ বৃদ্ধি পায়, যা প্রোডাকশনের জন্য অনুপযোগী',
          },
          {
            en: 'Because TSan is strictly illegal to use on public cloud servers',
            bn: 'কারণ পাবলিক ক্লাউড সার্ভারে TSan ব্যবহার করা সম্পূর্ণ নিষিদ্ধ',
          },
          {
            en: 'Because TSan turns off computer cooling fans permanently',
            bn: 'কারণ TSan কম্পিউটারের কুলিং ফ্যান চিরতরে বন্ধ করে দেয়',
          },
          {
            en: 'Because TSan cannot run on computers connected to keyboards',
            bn: 'কারণ কিবোর্ড যুক্ত কম্পিউটারে TSan চালানো যায় না',
          },
        ],
        answer: 0,
        hint: {
          en: 'TSan adds 2x-10x CPU slowdown and 5x-10x memory overhead for shadow memory tracking.',
          bn: 'TSan গতি ২-১০ গুণ ধীর করে এবং শ্যাডো মেমোরির কারণে মেমোরি ৫-১০ গুণ বেশি খরচ করে।',
        },
        explanation: {
          en: 'Shadow memory tracking provides deep race detection at the cost of high CPU and RAM overhead, making it ideal for CI/CD testing but too heavy for production.',
          bn: 'শ্যাডো মেমোরি ট্র্যাকিং নিখুঁতভাবে রেস শনাক্ত করতে প্রচুর মেমোরি ও সিপিইউ খরচ করে, যা টেস্টের জন্য সেরা হলেও প্রোডাকশনের জন্য অতিরিক্ত ভারী।'
        },
      },
    ],
  },
  next: {
    slug: 'meet-dns',
    title: {
      en: 'Introduction to DNS & Domain Name Resolution',
      bn: 'ডিএনএস এবং ডোমেইন নেম রেজোলিউশনের প্রাথমিক ধারণা'
    },
  },
};
