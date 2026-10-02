import type { Lesson } from '../../../lib/types';

export const MutexLocksLesson: Lesson = {
  slug: 'mutex-locks',
  tech: 'threads',
  title: {
    en: 'Mutex Locks & Semaphores: Mutual Exclusion & Synchronization Primitives',
    bn: 'মিউটেক্স লক এবং সেমাফোর: মিউচুয়াল এক্সক্লুশন ও সিঙ্ক্রোনাইজেশন প্রিমিটিভস'
  },
  summary: {
    en: 'Master the foundational synchronization primitives used to eliminate race conditions and enforce mutual exclusion. Understand how Mutexes guard critical sections using hardware atomic Compare-And-Swap instructions and test-and-set locks. Contrast binary Mutexes against Counting Semaphores and Read-Write Locks, and analyze the performance penalties of lock contention, priority inversion, and spinlocks.',
    bn: 'রেস কন্ডিশন দূর করতে এবং মিউচুয়াল এক্সক্লুশন নিশ্চিত করতে ব্যবহৃত মৌলিক সিঙ্ক্রোনাইজেশন প্রিমিটিভগুলো আয়ত্ত করুন। হার্ডওয়্যার অ্যাটমিক Compare-And-Swap এবং টেস্ট-অ্যান্ড-সেট মেকানিজম ব্যবহার করে মিউটেক্স কীভাবে ক্রিটিক্যাল সেকশন পাহারা দেয় তা জানুন। বাইনারি মিউটেক্সের সাথে কাউন্টিং সেমাফোর ও রিড-রাইট লকের তুলনা করুন এবং লক কনটেনশন, প্রায়োরিটি ইনভার্সন ও স্পিনলকের পারফরম্যান্স প্রভাব বিশ্লেষণ করুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'enforcing-mutual-exclusion',
      text: {
        en: 'Enforcing Order in Shared Memory',
        bn: 'শেয়ার্ড মেমোরিতে শৃঙ্খলা প্রতিষ্ঠা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When multiple threads concurrently mutate shared data structures, you must guarantee that only one thread can execute within a critical section at any given moment. Operating systems solve this concurrency hazard using Mutexes, short for Mutual Exclusion locks.',
        bn: 'যখন একাধিক থ্রেড একই সাথে কোনো শেয়ার্ড ডাটা পরিবর্তন করতে যায়, তখন নিশ্চিত করতে হয় যেন একই সময়ে কেবল একটিমাত্র থ্রেড ক্রিটিক্যাল সেকশনে কাজ করতে পারে। অপারেটিং সিস্টেম এই ঝুঁকি দূর করতে মিউটেক্স ( Mutex বা Mutual Exclusion ) লক ব্যবহার করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A Mutex acts as a single exclusive digital token. Before entering a critical section, a thread must acquire the lock. If another thread already holds the lock, the requesting thread is suspended by the kernel. Once the owner finishes its work and releases the lock, the operating system scheduler wakes up the next waiting thread.',
        bn: 'একটি মিউটেক্স হলো একক মালিকানাধীন চাবির মতো। ক্রিটিক্যাল সেকশনে প্রবেশের আগে থ্রেডটিকে অবশ্যই লকটি নিতে হয়। অন্য কোনো থ্রেড আগে থেকেই সেটি ধরে রাখলে নতুন থ্রেডটিকে কার্নেল ঘুমে পাঠিয়ে দেয়। পূর্ববর্তী থ্রেড কাজ শেষ করে লক ছেড়ে দিলে শিডিউলার অপেক্ষায় থাকা পরবর্তী থ্রেডটিকে জাগিয়ে তোলে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Hardware Atomic CAS (Compare-And-Swap)',
            bn: '১. হার্ডওয়্যার অ্যাটমিক CAS (Compare-And-Swap)'
          },
          text: {
            en: 'Software locks cannot be built safely with plain memory reads. Modern CPUs provide atomic instructions (such as CMPXCHG on x86) that check if a memory address holds 0 and set it to 1 in a single indivisible cycle.',
            bn: 'সাধারণ মেমোরি রিড দিয়ে সফটওয়্যার লক তৈরি করা যায় না। আধুনিক সিপিইউতে অ্যাটমিক নির্দেশ থাকে যা কোনো মেমোরিতে ০ থাকলে অবিভাজ্য একক পদক্ষেপে একে ১ এ রূপান্তর করতে পারে।'
          },
        },
        {
          title: {
            en: '2. Binary Mutex (Mutual Exclusion Lock)',
            bn: '২. বাইনারি মিউটেক্স ( মিউচুয়াল এক্সক্লুশন লক )'
          },
          text: {
            en: 'A strict single-owner lock. Only 1 thread may hold it at any moment. If Thread 1 holds the lock, all other threads block until Thread 1 explicitly calls unlock.',
            bn: 'একটি কঠোর একক মালিকানাধীন লক। একই সময়ে মাত্র ১ টি থ্রেড এটি ধরে রাখতে পারে। প্রথম থ্রেডটি লক না ছাড়া পর্যন্ত বাকি সকল থ্রেড আটকে থাকে।'
          },
        },
        {
          title: {
            en: '3. Counting Semaphore',
            bn: '৩. কাউন্টিং সেমাফোর'
          },
          text: {
            en: 'A generalized resource counter initialized with capacity N (for example, N = 3 for a pool of 3 database connections). Threads decrement the counter on acquire and increment on release.',
            bn: 'একটি সাধারণ রিসোর্স কাউন্টার যা নির্দিষ্ট N ধারণক্ষমতা নিয়ে শুরু হয় ( যেমন ৩ টি ডাটাবেজ সংযোগের জন্য N = ৩ )। থ্রেড রিসোর্স নিলে কাউন্টার কমে এবং ছেড়ে দিলে বাড়ে।'
          },
        },
        {
          title: {
            en: '4. Read-Write Lock (rwlock)',
            bn: '৪. রিড-রাইট লক (rwlock)'
          },
          text: {
            en: 'Allows multiple concurrent reader threads because reading does not mutate data, but enforces strict exclusive single-thread access for writing.',
            bn: 'একাধিক থ্রেডকে একসাথে ডাটা পড়ার অনুমতি দেয় কারণ পড়লে ডাটা পরিবর্তিত হয় না, তবে লেখার সময় কঠোরভাবে কেবল একটিমাত্র থ্রেডকে সুযোগ দেয়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Mutex Guarding a Critical Section: Lock Acquisition, Waiting Queues & Wakes',
        bn: 'ক্রিটিক্যাল সেকশনে মিউটেক্স পাহারা: লক গ্রহণ, ওয়েটিং কিউ এবং ওয়েকআপ'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Mutex locking mechanism guarding a critical section with wait queue and wake transitions">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">MUTEX LOCK SYNCHRONIZATION: GUARDING THE CRITICAL SECTION</text>
  
  <!-- Left Side: Incoming Threads -->
  <g transform="translate(30, 50)">
    <rect width="210" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="105" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">INCOMING THREADS</text>
    
    <!-- Thread 1 -->
    <rect x="15" y="45" width="180" height="50" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="90" y="68" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Thread 1 (Arrives First)</text>
    <text x="90" y="84" fill="#cbd5e1" font-size="8" text-anchor="middle">Acquires Lock Successfully</text>
    
    <!-- Thread 2 -->
    <rect x="15" y="115" width="180" height="50" rx="4" fill="#450a0a" stroke="#ef4444"/>
    <text x="90" y="138" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">Thread 2 (Arrives Second)</text>
    <text x="90" y="154" fill="#cbd5e1" font-size="8" text-anchor="middle">Blocked -> Sent to Wait Queue</text>
    
    <!-- Thread 3 -->
    <rect x="15" y="185" width="180" height="50" rx="4" fill="#450a0a" stroke="#ef4444"/>
    <text x="90" y="208" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">Thread 3 (Arrives Third)</text>
    <text x="90" y="224" fill="#cbd5e1" font-size="8" text-anchor="middle">Blocked -> Sent to Wait Queue</text>
  </g>
  
  <!-- Middle: Mutex & Wait Queue -->
  <g transform="translate(270, 50)">
    <rect width="250" height="340" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="125" y="24" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">MUTEX STATE &amp; WAIT QUEUE</text>
    
    <!-- Lock State Indicator -->
    <rect x="25" y="45" width="200" height="60" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
    <text x="125" y="70" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">STATUS: LOCKED 🔒</text>
    <text x="125" y="88" fill="#cbd5e1" font-size="9" text-anchor="middle">Held exclusively by Thread 1</text>
    
    <!-- Waiting Queue Box -->
    <rect x="25" y="130" width="200" height="180" rx="6" fill="#0f172a" stroke="#ef4444"/>
    <text x="125" y="152" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">KERNEL SLEEP QUEUE</text>
    
    <rect x="35" y="168" width="180" height="35" rx="4" fill="#1e293b"/>
    <text x="125" y="190" fill="#fca5a5" font-size="9" text-anchor="middle">Thread 2 (Sleeping)</text>
    
    <rect x="35" y="215" width="180" height="35" rx="4" fill="#1e293b"/>
    <text x="125" y="237" fill="#fca5a5" font-size="9" text-anchor="middle">Thread 3 (Sleeping)</text>
    
    <text x="125" y="280" fill="#94a3b8" font-size="8" text-anchor="middle">Consumes 0% CPU cycles while sleeping</text>
  </g>
  
  <!-- Right: Critical Section -->
  <g transform="translate(550, 50)">
    <rect width="260" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="130" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">CRITICAL SECTION (MUTUAL EXCLUSION)</text>
    
    <!-- Safe Room -->
    <rect x="20" y="45" width="220" height="150" rx="6" fill="#064e3b" stroke="#10b981"/>
    <text x="130" y="75" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">ACTIVE EXECUTION ZONE</text>
    <text x="130" y="98" fill="#f8fafc" font-size="10" text-anchor="middle">Thread 1 Working Safely</text>
    
    <rect x="35" y="115" width="190" height="60" rx="4" fill="#0f172a"/>
    <text x="130" y="135" fill="#cbd5e1" font-size="9" text-anchor="middle">bank.balance += 500</text>
    <text x="130" y="152" fill="#6ee7b7" font-size="8" text-anchor="middle">Zero race hazards possible!</text>
    <text x="130" y="165" fill="#cbd5e1" font-size="8" text-anchor="middle">Only 1 thread allowed at a time</text>
    
    <!-- Unlock Event -->
    <rect x="20" y="220" width="220" height="90" rx="6" fill="#0f172a" stroke="#38bdf8"/>
    <text x="130" y="244" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">UPON CALLING UNLOCK()</text>
    <text x="130" y="265" fill="#cbd5e1" font-size="9" text-anchor="middle">1. Mutex ownership clears</text>
    <text x="130" y="280" fill="#cbd5e1" font-size="9" text-anchor="middle">2. OS wakes Thread 2 from queue</text>
    <text x="130" y="295" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">3. Thread 2 takes the lock next</text>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">Mutex guarantees mutual exclusion: only one thread enters the critical section while others sleep in the wait queue</text>
</svg>`,
      caption: {
        en: 'A mutex forces competing threads into a sleeping wait queue, waking them sequentially as the lock is released.',
        bn: 'মিউটেক্স অন্য সকল থ্রেডকে ওয়েটিং কিউতে অপেক্ষায় রাখে এবং লক খালি হওয়ার সাথে সাথে ক্রমানুসারে তাদের জাগিয়ে তোলে।'
      },
    },
    {
      type: 'heading',
      id: 'mutex-code-implementation',
      text: {
        en: 'Building and Testing a Thread-Safe Mutex in Node.js',
        bn: 'Node.js-এ থ্রেড-সেফ মিউটেক্স তৈরি ও পরীক্ষা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how mutual exclusion eliminates data races, inspect the following synchronization engine. It wraps concurrent bank transactions in a lock queue, ensuring that balance mutations execute with zero lost updates.',
        bn: 'মিউচুয়াল এক্সক্লুশন কীভাবে ডাটা রেস দূর করে তা পর্যবেক্ষণ করতে নিচের সিঙ্ক্রোনাইজেশন কোডটি পর্যালোচনা করুন। এটি একটি লক কিউয়ের মাধ্যমে ব্যাংক লেনদেনগুলো পরিচালনা করে এবং ব্যালেন্সের নিখুঁত হিসাব নিশ্চিত করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'mutex-synchronization-engine.js',
      code: `// Production-Grade Mutex Primitive and Critical Section Guard
// Eliminates race conditions by serializing access to shared mutable state

class AsyncMutex {
  constructor() {
    this.isLocked = false;
    this.waitQueue = [];
  }

  // Acquire exclusive lock or suspend caller
  async acquire() {
    if (!this.isLocked) {
      this.isLocked = true;
      return;
    }
    // Enqueue resolver to put caller to sleep
    await new Promise((resolve) => this.waitQueue.push(resolve));
  }

  // Release lock and wake next queued thread
  release() {
    if (this.waitQueue.length > 0) {
      const wakeNextThread = this.waitQueue.shift();
      wakeNextThread(); // Hands off lock directly
    } else {
      this.isLocked = false;
    }
  }

  // RAII-style scoped lock guard
  async runWithLock(criticalAction) {
    await this.acquire();
    try {
      return await criticalAction();
    } finally {
      this.release(); // Always release, even if exceptions occur!
    }
  }
}

// Thread-Safe Bank Account using AsyncMutex
class ThreadSafeBankAccount {
  constructor(initialBalance = 1000) {
    this.balance = initialBalance;
    this.mutex = new AsyncMutex();
  }

  async deposit(amount, clientName) {
    return await this.mutex.runWithLock(async () => {
      console.log('[' + clientName + '] Locked critical section. Current: $' + this.balance);
      const readVal = this.balance;
      // Simulated microsecond calculation delay
      await new Promise(r => setTimeout(r, 10));
      this.balance = readVal + amount;
      console.log('[' + clientName + '] Deposited $' + amount + ' -> New: $' + this.balance);
    });
  }

  async withdraw(amount, clientName) {
    return await this.mutex.runWithLock(async () => {
      console.log('[' + clientName + '] Locked critical section. Current: $' + this.balance);
      const readVal = this.balance;
      await new Promise(r => setTimeout(r, 10));
      this.balance = readVal - amount;
      console.log('[' + clientName + '] Withdrew $' + amount + ' -> New: $' + this.balance);
    });
  }
}

async function runSynchronizedSimulation() {
  const account = new ThreadSafeBankAccount(1000);
  console.log('=== Step 1: Initiating Concurrent Bank Transactions with Mutex ===');

  // Both transactions execute concurrently without interleaving defects
  await Promise.all([
    account.deposit(500, 'Thread_A'),
    account.withdraw(200, 'Thread_B')
  ]);

  console.log('\\n=== Verification ===');
  console.log('Expected Balance: $1300 ($1000 + $500 - $200)');
  console.log('Actual Balance:   $' + account.balance + ' (PERFECT DATA INTEGRITY!)');
}

runSynchronizedSimulation();`,
      caption: {
        en: 'The mutex ensures Thread A deposit and Thread B withdrawal run in isolation, producing the exact expected $1300 balance.',
        bn: 'মিউটেক্স নিশ্চিত করে থ্রেড এ-এর জমা এবং থ্রেড বি-এর উত্তোলন সম্পূর্ণ বিচ্ছিন্নভাবে সম্পন্ন হয় এবং সঠিক ১৩০০ ডলার ব্যালেন্স বজায় থাকে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Spinlocks versus Sleeping Mutexes: When to Burn CPU Cycles',
        bn: 'স্পিনলক বনাম স্লিপিং মিউটেক্স: কখন সিপিইউ সাইকেল ব্যবহার করবেন'
      },
      text: {
        en: 'What happens when a thread finds a lock already held? A standard Sleeping Mutex suspends the thread, yielding the physical CPU core to other runnable tasks. However, putting a thread to sleep and waking it up requires two kernel context switches (costing 1 to 5 microseconds). A Spinlock, in contrast, continuously loops in a busy-wait loop on the CPU core. If a critical section executes in only a few nanoseconds, a spinlock is significantly faster because it avoids context-switch latency. However, if the lock is held for milliseconds, spinlocks waste massive CPU energy.',
        bn: 'লক আটকে থাকলে একটি থ্রেড কী করে? সাধারণ স্লিপিং মিউটেক্স থ্রেডটিকে ঘুমে পাঠিয়ে দিয়ে সিপিইউ কোরটি অন্যদের ছেড়ে দেয়। তবে ঘুমে পাঠানো এবং পুনরায় জাগানোর জন্য ২ টি কার্নেল কনটেক্সট সুইচের প্রয়োজন হয় ( যার খরচ প্রায় ১ থেকে ৫ মাইক্রোসেকেন্ড )। বিপরীতে, স্পিনলক সিপিইউতে অবিরাম লুপ চালিয়ে অপেক্ষা করতে থাকে। যদি ক্রিটিক্যাল সেকশনের কাজ মাত্র কয়েক ন্যানোসেকেন্ডের হয়, তবে স্পিনলক অনেক বেশি কার্যকর। কিন্তু কাজ যদি দীর্ঘ সময়ের হয়, তবে স্পিনলক প্রচুর সিপিইউ শক্তি নষ্ট করে।'
      },
    },
  ],
  exercises: [
    {
      id: 'mutex-lock-ex-1',
      kind: 'predict',
      topic: "mutex-locks",
      question: {
        en: 'If a counting semaphore is initialized with a capacity of 3, how many threads can concurrently acquire it before subsequent threads block? (3). Type the number.',
        bn: 'একটি কাউন্টিং সেমাফোর যদি ৩ ধারণক্ষমতা নিয়ে শুরু হয়, তবে পরবর্তী থ্রেডগুলো আটকে যাওয়ার আগে সর্বমোট কয়টি থ্রেড একসাথে এটি গ্রহণ করতে পারবে? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Initial capacity is 3.',
        bn: 'প্রাথমিক ধারণক্ষমতা হলো ৩।'
      },
      explanation: {
        en: 'A counting semaphore decrements on each acquire. Exactly 3 threads may enter before the counter reaches 0.',
        bn: 'কাউন্টিং সেমাফোর প্রতি অ্যাকোয়ার অপারেশনে ১ করে কমে। কাউন্ট ০ হওয়ার আগে ঠিক ৩ টি থ্রেড প্রবেশ করতে পারে।'
      },
    },
    {
      id: 'mutex-lock-ex-2',
      kind: 'mcq',
      topic: "mutex-locks",
      question: {
        en: 'Which hardware CPU instruction primitive enables operating systems to build race-free mutex locks?',
        bn: 'সিপিইউর কোন হার্ডওয়্যার নির্দেশ অপারেটিং সিস্টেমকে রেস-মুক্ত মিউটেক্স লক তৈরি করার সক্ষমতা দেয়?'
      },
      options: [
        {
          en: 'Atomic Compare-And-Swap (CAS) instructions such as CMPXCHG that evaluate and write memory in a single unbroken cycle',
          bn: 'CMPXCHG-এর মতো অ্যাটমিক Compare-And-Swap (CAS) নির্দেশ যা মেমোরি পরীক্ষা ও লেখার কাজ একক অবিভাজ্য পদক্ষেপে সম্পন্ন করে',
        },
        {
          en: 'Instructions that turn on the computer webcam light',
          bn: 'যে নির্দেশগুলো কম্পিউটারের ওয়েবক্যামের বাতি জ্বালিয়ে দেয়',
        },
        {
          en: 'Instructions that change the font of the operating system desktop',
          bn: 'যে নির্দেশগুলো অপারেটিং সিস্টেমের ফন্ট পরিবর্তন করে',
        },
        {
          en: 'Instructions that delete unused files from the recycle bin',
          bn: 'যে নির্দেশগুলো রিসাইকেল বিন থেকে অপ্রয়োজনীয় ফাইল মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Atomic hardware CAS instructions prevent thread preemption during lock checks.',
        bn: 'অ্যাটমিক হার্ডওয়্যার নির্দেশ লক পরীক্ষার সময় কোনো থ্রেডকে বাধা দিতে দেয় না।',
      },
      explanation: {
        en: 'Hardware atomic primitives (CAS/LL-SC) ensure that checking lock availability and claiming it happen simultaneously without interruption.',
        bn: 'হার্ডওয়্যার অ্যাটমিক নির্দেশ নিশ্চিত করে যে লক খালি আছে কিনা তা দেখা এবং লক দখল করা একই সাথে কোনো বিঘ্ন ছাড়া সম্পন্ন হয়।'
      },
    },
    {
      id: 'mutex-lock-ex-3',
      kind: 'mcq',
      topic: "mutex-locks",
      question: {
        en: 'Why are Read-Write Locks (rwlocks) highly advantageous in read-heavy applications like configuration caches?',
        bn: 'কনফিগারেশন ক্যাশের মতো প্রচুর রিড হওয়া অ্যাপ্লিকেশনে রিড-রাইট লক (rwlock) কেন অত্যন্ত সুবিধাজনক?'
      },
      options: [
        {
          en: 'They allow unlimited concurrent reader threads to access memory simultaneously while still enforcing exclusive single-thread access for writes',
          bn: 'তারা অসংখ্য পাঠক থ্রেডকে একসাথে ডাটা পড়ার সুযোগ দেয় এবং একই সাথে লেখার সময় কঠোরভাবে একক থ্রেডের মালিকানা বজায় রাখে',
        },
        {
          en: 'They reduce the monthly electric bill of the cloud data center to zero',
          bn: 'তারা ক্লাউড ডাটা সেন্টারের মাসিক বিদ্যুৎ বিল সম্পূর্ণ শূন্য করে ফেলে',
        },
        {
          en: 'They allow computers to read text without needing any computer memory',
          bn: 'তারা কোনো মেমোরি ছাড়াই কম্পিউটারকে টেক্সট পড়ার সুযোগ দেয়',
        },
        {
          en: 'They convert all database records into compressed video files',
          bn: 'তারা ডাটাবেজের সমস্ত রেকর্ডকে ভিডিও ফাইলে রূপান্তর করে ফেলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Multiple simultaneous readers, single exclusive writer.',
        bn: 'একসাথে একাধিক পাঠক, লেখার সময় একজন লেখক।',
      },
      explanation: {
        en: 'Concurrent reads never cause race conditions because reading does not mutate data. Rwlocks maximize throughput by permitting parallel reads.',
        bn: 'ডাটা পড়লে কোনো পরিবর্তন হয় না তাই সমান্তরাল রিড নিরাপদ। রিড-রাইট লক একাধিক রিডারকে একসাথে কাজ করার সুযোগ দিয়ে গতি বাড়ায়।'
      },
    },
    {
      id: 'mutex-lock-ex-4',
      kind: 'predict',
      topic: "mutex-locks",
      question: {
        en: 'How many threads can simultaneously hold a standard binary mutex lock? (1). Type the number.',
        bn: 'একটি সাধারণ বাইনারি মিউটেক্স লকের মালিকানা একই সময়ে সর্বমোট কয়টি থ্রেড একসাথে পেতে পারে? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Binary mutex = single owner: 1 thread.',
        bn: 'বাইনারি মিউটেক্স = একক মালিক: ১ টি থ্রেড।'
      },
      explanation: {
        en: 'By definition, a binary mutex enforces mutual exclusion: at most 1 thread holds the lock at any moment.',
        bn: 'বাইনারি মিউটেক্স সর্বদা মিউচুয়াল এক্সক্লুশন রক্ষা করে, তাই যেকোনো মুহূর্তে সর্বোচ্চ ১ টি থ্রেড এটি ধরে রাখতে পারে।'
      },
    },
  ],
  quiz: {
    id: "mutex-locks-quiz",
    title: {
      en: 'Mutex Locks & Synchronization Primitives Quiz',
      bn: 'মিউটেক্স লক এবং সিঙ্ক্রোনাইজেশন প্রিমিটিভস কুইজ'
    },
    questions: [
      {
        id: 'mutex-lock-qz-1',
        kind: 'mcq',
        topic: 'priority-inversion-problem',
        question: {
          en: 'What is Priority Inversion in mutex scheduling, and how do operating systems mitigate it?',
          bn: 'মিউটেক্স শিডিউলিংয়ে প্রায়োরিটি ইনভার্সন (Priority Inversion) কী এবং অপারেটিং সিস্টেম কীভাবে এটি সমাধান করে?'
        },
        options: [
          {
            en: 'A high-priority thread is indirectly blocked by a medium-priority thread because a low-priority thread holds a required mutex; solved via Priority Inheritance',
            bn: 'একটি উচ্চ অগ্রাধিকারের থ্রেড পরোক্ষভাবে মাঝারি থ্রেড দ্বারা আটকে যায় কারণ একটি নিচু থ্রেড প্রয়োজনীয় মিউটেক্স ধরে রেখেছে; প্রায়োরিটি ইনহেরিটেন্সের মাধ্যমে এটি সমাধান করা হয়',
          },
          {
            en: 'When the computer CPU flips thread priority backwards automatically',
            bn: 'যখন সিপিইউ নিজে থেকেই থ্রেডের প্রায়োরিটি উল্টো করে দেয়',
          },
          {
            en: 'When the computer monitor refuses to display high-priority programs',
            bn: 'যখন কম্পিউটার মনিটর উচ্চ প্রায়োরিটির প্রোগ্রাম প্রদর্শন করতে অস্বীকৃতি জানায়',
          },
          {
            en: 'When all thread priority numbers become negative integers simultaneously',
            bn: 'যখন সমস্ত থ্রেডের প্রায়োরিটি নম্বর একসাথে ঋণাত্মক হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'High-priority task blocked waiting for lock held by low-priority task; solved by Priority Inheritance.',
          bn: 'নিচু থ্রেডের লকের জন্য উচ্চ থ্রেডের আটকে থাকা; প্রায়োরিটি ইনহেরিটেন্স দিয়ে নিচু থ্রেডের ক্ষমতা বাড়িয়ে সমাধান।',
        },
        explanation: {
          en: 'Priority inheritance temporarily elevates the low-priority thread priority to match the high-priority thread, allowing it to quickly release the lock.',
          bn: 'প্রায়োরিটি ইনহেরিটেন্স নিচু থ্রেডকে সাময়িকভাবে উচ্চ মর্যাদা দেয় যাতে এটি দ্রুত কাজ শেষ করে লক ছেড়ে দিতে পারে।'
        },
      },
      {
        id: 'mutex-lock-qz-2',
        kind: 'mcq',
        topic: 'finally-block-lock-release',
        question: {
          en: 'Why must mutex locks always be released inside a finally block or RAII destructor in production software?',
          bn: 'প্রোডাকশন সফটওয়্যারে মিউটেক্স লক সর্বদা একটি finally ব্লক বা RAII ডিস্ট্রাক্টরের ভেতরে রিলিজ করা কেন আবশ্যক?'
        },
        options: [
          {
            en: 'To guarantee that the lock is released even if an unhandled exception or error is thrown inside the critical section, preventing permanent deadlocks',
            bn: 'ক্রিটিক্যাল সেকশনের ভেতরে কোনো অপ্রত্যাশিত এরর ঘটলেও যেন লকটি অবশ্যই মুক্ত হয় এবং স্থায়ী ডেডলক না ঘটে তা নিশ্চিত করার জন্য',
          },
          {
            en: 'Because finally blocks make computer programs run ten times faster',
            bn: 'কারণ finally ব্লক প্রোগ্রামকে দশ গুণ দ্রুতগতিতে চালায়',
          },
          {
            en: 'Because operating systems delete code that does not contain finally blocks',
            bn: 'কারণ finally ব্লক না থাকলে অপারেটিং সিস্টেম কোড মুছে দেয়',
          },
          {
            en: 'Because releasing locks outside finally blocks shuts down the computer',
            bn: 'কারণ finally ব্লকের বাইরে লক ছাড়লে কম্পিউটার বন্ধ হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Guarantees lock release during exceptions, preventing permanent deadlock.',
          bn: 'ত্রুটি হলেও লক মুক্ত হওয়া নিশ্চিত করে চিরস্থায়ী ডেডলক রোধ করে।',
        },
        explanation: {
          en: 'If an error occurs before explicit unlock, the thread crashes while holding the lock. All subsequent threads will block forever unless a finally block releases it.',
          bn: 'লক ছাড়ার আগে ক্র্যাশ করলে লকটি চিরতরে আটকে থাকে। finally ব্লক নিশ্চিত করে যে বিপদ হলেও লকটি মুক্ত হবে।'
        },
      },
      {
        id: 'mutex-lock-qz-3',
        kind: 'mcq',
        topic: 'spinlock-efficiency-condition',
        question: {
          en: 'Under which specific operational scenario is a Spinlock mathematically superior to a standard sleeping Mutex?',
          bn: 'কোন সুনির্দিষ্ট পরিস্থিতিতে একটি স্পিনলক সাধারণ স্লিপিং মিউটেক্সের চেয়ে বেশি কার্যকর?'
        },
        options: [
          {
            en: 'When the critical section is guaranteed to execute in nanoseconds (such as updating a counter) on a multi-core CPU, avoiding costly context-switch penalties',
            bn: 'যখন মাল্টি-কোর সিপিইউতে ক্রিটিক্যাল সেকশনের কাজ মাত্র কয়েক ন্যানোসেকেন্ডে শেষ হয় এবং কনটেক্সট সুইচের অতিরিক্ত সময় অপচয় এড়ানো লক্ষ্য থাকে',
          },
          {
            en: 'When the critical section performs heavy disk I/O lasting several seconds',
            bn: 'যখন ক্রিটিক্যাল সেকশনে কয়েক সেকেন্ড ধরে ভারী ডিস্ক আই/ও কাজ চলে',
          },
          {
            en: 'When the computer only has a single single-core processor with no multi-threading',
            bn: 'যখন কম্পিউটারে কোনো মাল্টি-থ্রেডিং ছাড়া কেবল একটিমাত্র একক কোর থাকে',
          },
          {
            en: 'When the computer is completely disconnected from internet routers',
            bn: 'যখন কম্পিউটারটি ইন্টারনেট রাউটার থেকে পুরোপুরি বিচ্ছিন্ন থাকে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Ultra-short critical sections on multi-core systems where context switching costs more than spinning.',
          bn: 'মাল্টি-কোর সিস্টেমে অত্যন্ত সংক্ষিপ্ত কাজ যেখানে কনটেক্সট সুইচের খরচ স্পিন করার চেয়ে বেশি।',
        },
        explanation: {
          en: 'Context switching costs 1-5 µs. If the lock is held for only 50 ns, spinning burns fewer cycles than putting the thread to sleep and waking it.',
          bn: 'কনটেক্সট সুইচে ১-৫ মাইক্রোসেকেন্ড লাগে। কাজ যদি ৫০ ন্যানোসেকেন্ডের হয়, তবে ঘুমে পাঠানোর চেয়ে কিছুক্ষণ অপেক্ষা করা বেশি সাশ্রয়ী।'
        },
      },
      {
        id: 'mutex-lock-qz-4',
        kind: 'mcq',
        topic: 'recursive-vs-non-recursive-mutex',
        question: {
          en: 'What catastrophic failure occurs if a thread attempts to acquire a non-recursive mutex that it already owns?',
          bn: 'একটি থ্রেড যদি এমন একটি নন-রিকার্সিভ মিউটেক্স পুনরায় নেওয়ার চেষ্টা করে যা ইতিমধ্যে তারই দখলে আছে, তবে কোন মারাত্মক বিপর্যয় ঘটে?'
        },
        options: [
          {
            en: 'Self-Deadlock: the thread blocks waiting for the lock to be released, but because it is the only thread that can release it, it freezes itself forever',
            bn: 'সেলফ-ডেডলক (Self-Deadlock): থ্রেডটি লক খালি হওয়ার অপেক্ষায় আটকে যায়, কিন্তু যেহেতু সে নিজেই লকের মালিক, তাই সে নিজেকেই চিরতরে অচল করে ফেলে',
          },
          {
            en: 'The computer screen deletes all desktop shortcut icons',
            bn: 'কম্পিউটার স্ক্রিন থেকে সমস্ত ডেস্কটপ আইকন মুছে যায়',
          },
          {
            en: 'The mutex converts into an image file stored on the desktop',
            bn: 'মিউটেক্সটি ডেস্কটপে সংরক্ষিত একটি ছবির ফাইলে রূপান্তরিত হয়',
          },
          {
            en: 'The computer automatically purchases replacement hardware online',
            bn: 'কম্পিউটার নিজে থেকেই অনলাইনে নতুন হার্ডওয়্যার কিনে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Self-deadlock: a thread waiting for itself to release a lock freezes permanently.',
          bn: 'নিজেই নিজের লকের অপেক্ষায় থেকে চিরতরে আটকে যাওয়াকে সেলফ-ডেডলক বলে।',
        },
        explanation: {
          en: 'Non-recursive mutexes cannot be acquired twice by the same thread. Attempting to do so causes self-deadlock. Recursive mutexes track acquisition counts to allow this.',
          bn: 'নন-রিকার্সিভ মিউটেক্স একই থ্রেড দুইবার নিতে পারে না। নিলে সেলফ-ডেডলক ঘটে। রিকার্সিভ মিউটেক্স সংখ্যা মনে রেখে এই সুবিধা দেয়।'
        },
      },
    ],
  },
  next: {
    slug: 'deadlocks',
    title: {
      en: 'Deadlocks: Coffman Conditions & Deadlock Prevention Strategies',
      bn: 'ডেডলক: কফম্যান শর্ত এবং ডেডলক প্রতিরোধ কৌশল'
    },
  },
};
