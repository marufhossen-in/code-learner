import type { Lesson } from '../../../lib/types';

export const RaceConditionsLesson: Lesson = {
  slug: 'race-conditions',
  tech: 'threads',
  title: {
    en: 'Race Conditions: Data Races, Read-Modify-Write Hazards & Critical Sections',
    bn: 'রেস কন্ডিশন: ডাটা রেস, Read-Modify-Write হ্যাজার্ড এবং ক্রিটিক্যাল সেকশন'
  },
  summary: {
    en: 'Uncover how concurrent execution leads to race conditions when multiple threads access shared memory without proper synchronization. Deconstruct the non-atomic Read-Modify-Write cycle that causes lost updates in operations as simple as count++. Explore critical section vulnerabilities, dirty reads, and how hardware memory ordering and CPU instruction interleaving destroy data integrity.',
    bn: 'সঠিক সিঙ্ক্রোনাইজেশন ছাড়া একাধিক থ্রেড শেয়ার্ড মেমোরি ব্যবহার করলে কীভাবে রেস কন্ডিশন তৈরি হয় তা জানুন। count++ এর মতো সহজ অপারেশনেও নন-অ্যাটমিক Read-Modify-Write চক্রের কারণে কীভাবে ডাটা হারিয়ে যায় তা বিস্তারিত দেখুন। ক্রিটিক্যাল সেকশনের ঝুঁকি, ডার্টি রিড এবং হার্ডওয়্যার নির্দেশাবলির ওভারল্যাপিং কীভাবে ডাটার অখণ্ডতা নষ্ট করে তা শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'the-nature-of-race-conditions',
      text: {
        en: 'The Silent Destroyer of Concurrent Software',
        bn: 'কনকারেন্ট সফটওয়্যারের গোপন শত্রু'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you build multi-threaded applications, race conditions are among the most difficult defects to detect because they are non-deterministic. A program might run successfully across 1000 automated tests on a developer laptop, yet silently corrupt data when deployed under high load on a multi-core production server.',
        bn: 'মাল্টি-থ্রেডেড অ্যাপ্লিকেশন তৈরির সময় রেস কন্ডিশন সবচেয়ে বিভ্রান্তিকর ত্রুটিগুলোর একটি কারণ এটি অনির্ধারিত আচরণ করে। একটি প্রোগ্রাম হয়তো ডেভেলপারের ল্যাপটপে ১০০০ টি টেস্টের সবগুলোতে সফল হতে পারে, কিন্তু প্রোডাকশন সার্ভারে অতিরিক্ত চাপের সময় নীরবে মেমোরির ডাটা নষ্ট করে দিতে পারে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A Race Condition occurs when the correct outcome of a program depends on the uncontrollable timing, execution speed, or operating system thread scheduling order. When two or more threads read and mutate shared memory simultaneously without locking, the threads enter a race where the winner of the CPU core overwrites the other thread changes.',
        bn: 'রেস কন্ডিশন তখন ঘটে যখন একটি প্রোগ্রামের ফলাফল অনিয়ন্ত্রিত সময়, এক্সিকিউশন গতি বা ওএস শিডিউলিং অর্ডারের ওপর নির্ভরশীল হয়ে পড়ে। যখন দুই বা ততোধিক থ্রেড কোনো লকিং ছাড়া একই শেয়ার্ড মেমোরি একসাথে পরিবর্তন করতে যায়, তখন থ্রেডগুলোর মাঝে প্রতিযোগিতা শুরু হয় এবং যে থ্রেড পরে লিখে সে অন্য থ্রেডের ডাটা মুছে দেয়।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. The Deceptive Atomicity of count++',
            bn: '১. count++ অপারেশনের বিভ্রান্তিকর রূপ'
          },
          text: {
            en: 'In high-level languages, incrementing a variable appears as a single atomic operation. At the hardware CPU assembly level, it is actually 3 distinct machine instructions: READ, MODIFY, and WRITE.',
            bn: 'উচ্চস্তরের ভাষায় ভেরিয়েবলের মান ১ বৃদ্ধি করা একক কাজ মনে হলেও সিপিইউ অ্যাসেম্বলিতে এটি আসলে ৩ টি পৃথক নির্দেশ: READ, MODIFY এবং WRITE।'
          },
        },
        {
          title: {
            en: '2. Step 1: READ from RAM into Register',
            bn: '২. ধাপ ১: র‍্যাম থেকে রেজিস্টারে পড়া (READ)'
          },
          text: {
            en: 'The CPU loads the current integer value from physical RAM into a thread-private processor register (for example, reading 10 into register RAX).',
            bn: 'সিপিইউ ফিজিক্যাল র‍্যাম থেকে বর্তমান সংখ্যাটি থ্রেডের নিজস্ব রেজিস্টারে লোড করে ( যেমন মেমোরি থেকে ১০ মানটি রেজিস্টারে পড়া )। '
          },
        },
        {
          title: {
            en: '3. Step 2: MODIFY inside Register',
            bn: '৩. ধাপ ২: রেজিস্টারের ভেতরে মান বাড়ানো (MODIFY)'
          },
          text: {
            en: 'The arithmetic logic unit increments the register value by 1, turning 10 into 11 strictly within the private register space.',
            bn: 'সিপিইউর অ্যারিথমেটিক লজিক ইউনিট রেজিস্টারের মান ১ বৃদ্ধি করে ১০ থেকে ১১ তে রূপান্তর করে।'
          },
        },
        {
          title: {
            en: '4. Step 3: WRITE Register Back to RAM',
            bn: '৪. ধাপ ৩: রেজিস্টার থেকে র‍্যামে লেখা (WRITE)'
          },
          text: {
            en: 'The CPU writes the calculated value 11 from the register back into shared RAM. If another thread interleaved during these steps, updates are lost forever!',
            bn: 'সিপিইউ রেজিস্টারের ১১ মানটি পুনরায় শেয়ার্ড র‍্যামে লিখে দেয়। এই ধাপগুলোর মাঝে যদি অন্য কোনো থ্রেড ঢুকে পড়ে, তবে ডাটা চিরতরে হারিয়ে যায়!'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The Lost Update Race Condition Timeline: Non-Atomic Read-Modify-Write Hazard',
        bn: 'লস্ট আপডেট রেস কন্ডিশন টাইমলাইন: নন-অ্যাটমিক Read-Modify-Write সংকট'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Lost update race condition timeline illustrating non-atomic read modify write hazard">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">THE LOST UPDATE HAZARD: NON-ATOMIC READ-MODIFY-WRITE TIMELINE</text>
  
  <!-- Shared RAM Box at Top -->
  <g transform="translate(240, 48)">
    <rect width="360" height="50" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="180" y="24" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">SHARED RAM: counter (Initial Value = 10)</text>
    <text x="180" y="40" fill="#cbd5e1" font-size="9" text-anchor="middle">Target of two concurrent increment operations</text>
  </g>
  
  <!-- Timeline Steps: t0 to t5 -->
  <!-- Thread 1 Column Left -->
  <g transform="translate(40, 115)">
    <rect width="360" height="280" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="180" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">THREAD 1 (CORE 0)</text>
    
    <!-- t0 -->
    <rect x="15" y="40" width="330" height="45" rx="4" fill="#0f172a" stroke="#38bdf8"/>
    <text x="25" y="58" fill="#38bdf8" font-size="10" font-weight="bold">t0: READ</text>
    <text x="25" y="74" fill="#cbd5e1" font-size="9">Loads counter from RAM (Reg1 = 10)</text>
    
    <!-- Context switch wait -->
    <rect x="15" y="95" width="330" height="85" rx="4" fill="#450a0a" stroke="#ef4444" stroke-dasharray="4 4"/>
    <text x="180" y="125" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">[PREEMPTED BY OS SCHEDULER]</text>
    <text x="180" y="145" fill="#cbd5e1" font-size="9" text-anchor="middle">Thread 1 paused while holding stale Reg1 = 10</text>
    <text x="180" y="160" fill="#cbd5e1" font-size="8" text-anchor="middle">Thread 2 executes during this window!</text>
    
    <!-- t4 & t5 -->
    <rect x="15" y="190" width="330" height="75" rx="4" fill="#0f172a" stroke="#ef4444"/>
    <text x="25" y="210" fill="#f59e0b" font-size="10" font-weight="bold">t4: MODIFY</text>
    <text x="120" y="210" fill="#cbd5e1" font-size="9">Increments stale Reg1 (10 -> 11)</text>
    <text x="25" y="235" fill="#ef4444" font-size="10" font-weight="bold">t5: WRITE</text>
    <text x="120" y="235" fill="#fca5a5" font-size="9">Writes 11 to RAM, OVERWRITING Thread 2!</text>
    <text x="25" y="252" fill="#ef4444" font-size="9" font-weight="bold">CRITICAL CORRUPTION: LOST UPDATE OCCURRED!</text>
  </g>
  
  <!-- Thread 2 Column Right -->
  <g transform="translate(440, 115)">
    <rect width="360" height="280" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="180" y="24" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">THREAD 2 (CORE 1)</text>
    
    <!-- Wait t0 -->
    <rect x="15" y="40" width="330" height="45" rx="4" fill="#0f172a" stroke="#64748b"/>
    <text x="180" y="68" fill="#94a3b8" font-size="9" text-anchor="middle">Idle / Waiting for dispatch</text>
    
    <!-- t1, t2, t3 -->
    <rect x="15" y="95" width="330" height="85" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="25" y="118" fill="#6ee7b7" font-size="10" font-weight="bold">t1: READ</text>
    <text x="100" y="118" fill="#cbd5e1" font-size="9">Reads counter from RAM (Reg2 = 10)</text>
    <text x="25" y="140" fill="#6ee7b7" font-size="10" font-weight="bold">t2: MODIFY</text>
    <text x="100" y="140" fill="#cbd5e1" font-size="9">Increments Reg2 (10 -> 11)</text>
    <text x="25" y="162" fill="#6ee7b7" font-size="10" font-weight="bold">t3: WRITE</text>
    <text x="100" y="162" fill="#f8fafc" font-size="9">Writes 11 to RAM! (counter is now 11)</text>
    
    <!-- t4 & t5 wait -->
    <rect x="15" y="190" width="330" height="75" rx="4" fill="#450a0a" stroke="#ef4444"/>
    <text x="180" y="215" fill="#fca5a5" font-size="10" font-weight="bold" text-anchor="middle">DISASTER: WORK ERASED!</text>
    <text x="180" y="235" fill="#cbd5e1" font-size="9" text-anchor="middle">Thread 2 successful write was completely</text>
    <text x="180" y="250" fill="#cbd5e1" font-size="9" text-anchor="middle">erased by Thread 1 stale write at t5!</text>
  </g>
  
  <text x="420" y="424" fill="#94a3b8" font-size="10" text-anchor="middle">Expected value after 2 increments: 12. Actual value stored: 11. One update was silently lost!</text>
</svg>`,
      caption: {
        en: 'A classic lost update: Thread 2 writes 11, but Thread 1 overwrites RAM with its own stale 11 at t5, losing one entire increment.',
        bn: 'একটি ক্লাসিক লস্ট আপডেট: থ্রেড ২ মেমোরিতে ১১ লিখে কিন্তু থ্রেড ১ পরে এসে আবার ১১ লিখে আগের পরিবর্তনটি পুরোপুরি মুছে ফেলে।'
      },
    },
    {
      type: 'heading',
      id: 'race-condition-code-simulation',
      text: {
        en: 'Demonstrating Lost Updates and Balance Corruption in Node.js',
        bn: 'Node.js-এ লস্ট আপডেট এবং ব্যালেন্স গরমিলের সিমুলেশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe the mathematical destruction caused by race conditions, examine the following simulation. It demonstrates how two uncoordinated concurrent threads corrupt a bank account balance and lose hundreds of increments.',
        bn: 'রেস কন্ডিশনের ফলে কীভাবে গাণিতিক ত্রুটি ঘটে তা প্রত্যক্ষ করতে নিচের সিমুলেশনটি পর্যালোচনা করুন। এটি দেখায় কীভাবে কোনো সমন্বয় ছাড়া দুটি সমান্তরাল থ্রেড ব্যাংক ব্যালেন্স নষ্ট করে এবং শত শত ইনক্রিমেন্ট হারিয়ে ফেলে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'race-condition-demonstration.js',
      code: `// Deterministic Race Condition & Lost Update Simulation
// Demonstrates how non-atomic read-modify-write causes lost updates

class UnsafeSharedCounter {
  constructor(initialValue = 0) {
    this.value = initialValue;
    this.lostUpdatesCount = 0;
  }

  // Simulates two concurrent threads executing N increments each
  simulateConcurrentIncrements(iterations = 1000) {
    console.log('Running ' + iterations + ' concurrent increments per thread (2 threads)...');
    
    for (let i = 0; i < iterations; i++) {
      // Thread 1 reads value
      const regA = this.value;

      // Simulated thread preemption (Thread 2 executes in between)
      const isInterleaved = (i % 3 === 0); // 33% interleaving collision rate

      if (isInterleaved) {
        // Thread 2 reads the same stale value as Thread 1
        const regB = this.value;
        const regB_modified = regB + 1;
        this.value = regB_modified; // Thread 2 writes

        // Thread 1 resumes with its old regA
        const regA_modified = regA + 1;
        this.value = regA_modified; // Thread 1 overwrites Thread 2's write!

        this.lostUpdatesCount++;
      } else {
        // Clean execution without interleaving
        this.value += 2;
      }
    }

    const expectedTotal = iterations * 2;
    return {
      expectedTotal,
      actualTotal: this.value,
      lostUpdates: this.lostUpdatesCount,
      dataLossPercent: ((this.lostUpdatesCount / expectedTotal) * 100).toFixed(1)
    };
  }
}

// Bank Account Race Condition Simulation
class UnsafeBankAccount {
  constructor(startingBalance = 1000) {
    this.balance = startingBalance;
  }

  // Interleaved transfer simulation
  interleavedTransfer() {
    console.log('\\n=== Bank Account Balance Race Hazard ===');
    console.log('Starting Balance: $' + this.balance);

    // Thread A prepares to deposit $500
    const threadA_read = this.balance; // Reads 1000
    console.log('[Thread A] Read balance: $' + threadA_read + ' (Wants to deposit $500)');

    // Context switch: Thread B prepares to withdraw $200
    const threadB_read = this.balance; // Also reads 1000!
    console.log('[Thread B] Read balance: $' + threadB_read + ' (Wants to withdraw $200)');

    // Thread B commits withdrawal first
    this.balance = threadB_read - 200; // 1000 - 200 = 800
    console.log('[Thread B] Committed withdrawal. Balance in RAM: $' + this.balance);

    // Thread A commits deposit based on its stale read!
    this.balance = threadA_read + 500; // 1000 + 500 = 1500 (ERASES Thread B withdrawal!)
    console.log('[Thread A] Committed deposit. Balance in RAM: $' + this.balance);

    console.log('\\nCRITICAL ACCOUNTING ERROR:');
    console.log('Expected Balance: $1300 ($1000 + $500 - $200)');
    console.log('Actual Balance:   $' + this.balance + ' (The $200 withdrawal vanished!)');
  }
}

const counter = new UnsafeSharedCounter(0);
const metrics = counter.simulateConcurrentIncrements(1000);

console.log('=== Step 1: Counter Race Condition Results ===');
console.log('Expected Counter Value:', metrics.expectedTotal);
console.log('Actual Counter Value:  ', metrics.actualTotal);
console.log('Total Lost Updates:    ', metrics.lostUpdates, '(' + metrics.dataLossPercent + '% lost!)');

const bank = new UnsafeBankAccount(1000);
bank.interleavedTransfer();`,
      caption: {
        en: 'The benchmark demonstrates how uncoordinated thread execution loses hundreds of updates and erases financial transactions.',
        bn: 'বেঞ্চমার্কটি প্রমাণ করে সমন্বয়হীন থ্রেড এক্সিকিউশন শত শত ডাটা আপডেট নষ্ট করে এবং আর্থিক লেনদেন মুছে ফেলে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Critical Sections & Thread-Safety: The Need for Mutual Exclusion',
        bn: 'ক্রিটিক্যাল সেকশন এবং থ্রেড-সেফটি: মিউচুয়াল এক্সক্লুশনের প্রয়োজনীয়তা'
      },
      text: {
        en: 'A Critical Section is any region of program code that accesses shared mutable state (such as shared heap memory, global arrays, or active database records) that must not be concurrently executed by more than one thread. Software that guarantees deterministic, safe execution across multiple concurrent threads without data races or corruption is called Thread-Safe. In the next lesson, we will explore Mutexes and Semaphores—the fundamental synchronization primitives that guard critical sections.',
        bn: 'একটি ক্রিটিক্যাল সেকশন (Critical Section) হলো কোডের এমন একটি অংশ যেখানে শেয়ার্ড মিউটেবল ডাটা ( যেমন শেয়ার্ড মেমোরি বা ডাটাবেজ রেকর্ড ) অ্যাক্সেস করা হয় এবং একই সময়ে একাধিক থ্রেড সেখানে প্রবেশ করতে পারে না। যে সফটওয়্যার কোনো প্রকার ডাটা রেস বা মেমোরি গরমিল ছাড়াই একাধিক থ্রেডে নিরাপদ ফলাফল নিশ্চিত করে তাকে থ্রেড-সেফ (Thread-Safe) বলা হয়। পরবর্তী পাঠে আমরা মিউটেক্স ও সেমাফোর নিয়ে জানব—যা ক্রিটিক্যাল সেকশন পাহারা দেওয়ার মূল চাবিকাঠি।'
      },
    },
  ],
  exercises: [
    {
      id: 'race-cond-ex-1',
      kind: 'predict',
      topic: "race-conditions",
      question: {
        en: 'How many machine assembly instructions (Read, Modify, Write) compose a standard counter increment? (3). Type the number.',
        bn: 'একটি সাধারণ ভেরিয়েবল ইনক্রিমেন্ট করার জন্য কম্পিউটারের অ্যাসেম্বলিতে সর্বমোট কয়টি নির্দেশ ( Read, Modify, Write ) কার্যকর হয়? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Read, modify, and write: 3 instructions.',
        bn: 'Read, modify এবং write: ৩ টি নির্দেশ।'
      },
      explanation: {
        en: 'At the CPU level, an increment requires loading the value into a register, adding 1, and writing back to memory.',
        bn: 'সিপিইউতে ইনক্রিমেন্ট করার জন্য মান রেজিস্টারে লোড করা, ১ যোগ করা এবং মেমোরিতে পুনরায় লেখার জন্য ৩ টি নির্দেশের প্রয়োজন হয়।'
      },
    },
    {
      id: 'race-cond-ex-2',
      kind: 'mcq',
      topic: "race-conditions",
      question: {
        en: 'What precise condition defines a Data Race in multithreaded systems architecture?',
        bn: 'মাল্টি-থ্রেডেড সিস্টেম আর্কিটেকচারে সুনির্দিষ্টভাবে ডাটা রেস (Data Race) বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'Two or more concurrent threads access the exact same memory location simultaneously, at least one access is a write, and no synchronization locks are used',
          bn: 'দুই বা ততোধিক থ্রেড কোনো লকিং ছাড়া একই মেমোরি ঠিকানায় একই সাথে কাজ করে এবং এদের মধ্যে অন্তত একটি অপারেশন হলো রাইট (write)',
        },
        {
          en: 'Two physical computer mice connected to the motherboard moving in opposite directions',
          bn: 'কম্পিউটার মাদারবোর্ডে যুক্ত দুটি মাউস বিপরীত দিকে নড়াচড়া করা',
        },
        {
          en: 'A video game race car driving across a virtual suspension bridge',
          bn: 'ভিডিও গেমের একটি রেসিং কার ভার্চুয়াল ব্রিজের ওপর দিয়ে দ্রুত গতিতে চলা',
        },
        {
          en: 'A program file that finishes downloading from the internet in under one second',
          bn: 'একটি প্রোগ্রাম ফাইল এক সেকেন্ডের কম সময়ে ইন্টারনেট থেকে ডাউনলোড হওয়া',
        },
      ],
      answer: 0,
      hint: {
        en: 'Concurrent access to same memory where at least one thread writes without locks.',
        bn: 'একই মেমোরিতে অন্তত একজনের রাইট অপারেশন যেখানে কোনো লক ব্যবহার করা হয়নি।',
      },
      explanation: {
        en: 'A data race requires simultaneous unsynchronized access to shared memory with at least one writer thread.',
        bn: 'ডাটা রেস হতে হলে অন্তত একটি থ্রেডকে কোনো সিঙ্ক্রোনাইজেশন ছাড়া শেয়ার্ড মেমোরিতে নতুন ডাটা লিখতে হয়।'
      },
    },
    {
      id: 'race-cond-ex-3',
      kind: 'mcq',
      topic: "race-conditions",
      question: {
        en: 'Why are race conditions notoriously difficult to debug and reproduce in testing environments?',
        bn: 'টেস্টিং পরিবেশে রেস কন্ডিশন শনাক্ত করা এবং পুনরায় তৈরি করা অত্যন্ত কঠিন কেন?'
      },
      options: [
        {
          en: 'Their occurrence depends on unpredictable microsecond hardware thread scheduling and CPU cache interleaving, varying across core counts and loads',
          bn: 'এদের উপস্থিতি নির্ভর করে ওএস শিডিউলিং ও হার্ডওয়্যার ক্যাশের মাইক্রোসেকেন্ড পর্যায়ের সময়ের ওপর, যা লোড ও কোরের সংখ্যার ওপর ভিত্তি করে অপ্রত্যাশিতভাবে পরিবর্তিত হয়',
        },
        {
          en: 'Because computer programming languages refuse to print error messages on Tuesdays',
          bn: 'কারণ কম্পিউটার প্রোগ্রামিং ভাষা সপ্তাহের কোনো নির্দিষ্ট দিনে ত্রুটির বার্তা দেখাতে অস্বীকৃতি জানায়',
        },
        {
          en: 'Because race conditions make the computer keyboard keys change physical locations',
          bn: 'কারণ রেস কন্ডিশনের ফলে কিবোর্ডের বাটনগুলো নিজের জায়গা পরিবর্তন করে ফেলে',
        },
        {
          en: 'Because computer software runs backwards whenever testing tools are opened',
          bn: 'কারণ টেস্টিং টুল চালু করলে সফটওয়্যার উল্টো দিকে চলতে শুরু করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Non-deterministic hardware thread scheduling makes bugs intermittent.',
        bn: 'অনির্ধারিত শিডিউলিংয়ের কারণে ত্রুটিগুলো অনিয়মিতভাবে দেখা দেয়।',
      },
      explanation: {
        en: 'Because thread scheduling is non-deterministic, race conditions trigger intermittently (Heisenbugs) and disappear under debuggers.',
        bn: 'থ্রেড শিডিউলিংয়ের অনিয়মিত স্বভাবের কারণে রেস কন্ডিশন সর্বদা ঘটে না, ফলে ডিবাগারের উপস্থিতিতে অনেক সময় ধরা পড়ে না।'
      },
    },
    {
      id: 'race-cond-ex-4',
      kind: 'predict',
      topic: "race-conditions",
      question: {
        en: 'If 2 concurrent threads each increment a shared counter 1000 times, what is the ideal mathematically expected total? (2000). Type the number.',
        bn: 'যদি ২ টি সমান্তরাল থ্রেডের প্রত্যেকে একটি শেয়ার্ড কাউন্টারকে ১০০০ বার করে ইনক্রিমেন্ট করে, তবে গাণিতিকভাবে প্রত্যাশিত নিখুঁত মোট মান কত হবে? ( ২০০০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '2000',
      hint: {
        en: 'Multiply 2 threads by 1000 increments = 2000.',
        bn: '২ টি থ্রেডকে ১০০০ ইনক্রিমেন্ট দিয়ে গুণ করুন: ২০০০।'
      },
      explanation: {
        en: 'With 2 threads each performing 1000 increments, the correct total is 2000. Under race conditions, actual results are often far less.',
        bn: '২ টি থ্রেড ১০০০ বার করে বাড়ালে সঠিক যোগফল হয় ২০০০। কিন্তু রেস কন্ডিশন থাকলে মান এর চেয়ে অনেক কম হয়।'
      },
    },
  ],
  quiz: {
    id: "race-conditions-quiz",
    title: {
      en: 'Race Conditions and Critical Sections Quiz',
      bn: 'রেস কন্ডিশন এবং ক্রিটিক্যাল সেকশন কুইজ'
    },
    questions: [
      {
        id: 'race-cond-qz-1',
        kind: 'mcq',
        topic: 'critical-section-definition',
        question: {
          en: 'What is the rigorous technical definition of a Critical Section in concurrent multithreading?',
          bn: 'কনকারেন্ট মাল্টি-থ্রেডিংয়ে ক্রিটিক্যাল সেকশন (Critical Section)-এর সঠিক প্রযুক্তিগত সংজ্ঞা কী?'
        },
        options: [
          {
            en: 'A segment of code that accesses shared mutable resources that must be executed by at most one thread at any given moment to prevent data corruption',
            bn: 'কোডের একটি অংশ যা শেয়ার্ড মিউটেবল ডাটা ব্যবহার করে এবং মেমোরি সুরক্ষা নিশ্চিত করতে একই সময়ে কেবল একটিমাত্র থ্রেড সেখানে প্রবেশ করতে পারে',
          },
          {
            en: 'The section of a computer program that downloads files from the internet',
            bn: 'কম্পিউটার প্রোগ্রামের যে অংশটি ইন্টারনেট থেকে ফাইল ডাউনলোড করে',
          },
          {
            en: 'The portion of a video game where players fight final boss monsters',
            bn: 'ভিডিও গেমের যে অংশে খেলোয়াড়রা চূড়ান্ত বসদের সাথে লড়াই করে',
          },
          {
            en: 'Any code written exclusively using uppercase letters',
            bn: 'যেকোনো কোড যা কেবলমাত্র বড় হাতের অক্ষরে লেখা হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'A code block accessing shared mutable data requiring mutual exclusion.',
          bn: 'শেয়ার্ড মিউটেবল ডাটায় প্রবেশের কোড ব্লক যাতে মিউচুয়াল এক্সক্লুশন আবশ্যক।',
        },
        explanation: {
          en: 'Critical sections require mutual exclusion. Only one thread may execute inside a critical section at any instant.',
          bn: 'ক্রিটিক্যাল সেকশনে মিউচুয়াল এক্সক্লুশন বজায় রাখতে হয় যাতে একই সময়ে একটির বেশি থ্রেড ডাটা পরিবর্তন করতে না পারে।'
        },
      },
      {
        id: 'race-cond-qz-2',
        kind: 'mcq',
        topic: 'lost-update-root-cause',
        question: {
          en: 'In a Read-Modify-Write race hazard, what specific event causes a Lost Update to occur?',
          bn: 'Read-Modify-Write রেস হ্যাজার্ডে সুনির্দিষ্ট কোন ঘটনার কারণে লস্ট আপডেট (Lost Update) ঘটে?'
        },
        options: [
          {
            en: 'A thread reads a shared value, gets preempted while another thread writes an updated value, and then writes its own computation based on the stale read, obliterating the intermediate update',
            bn: 'একটি থ্রেড পুরনো মান পড়ে থেমে যায়, এর মাঝে অন্য থ্রেড নতুন মান লিখে ফেলে, এবং প্রথম থ্রেডটি পুনরায় চালু হয়ে পুরনো মানের ওপর হিসাব করে লিখে মাঝের আপডেটটি মুছে ফেলে',
          },
          {
            en: 'The CPU runs out of memory and forgets mathematical rules',
            bn: 'সিপিইউর মেমোরি শেষ হয়ে যায় এবং এটি গণিতের নিয়ম ভুলে যায়',
          },
          {
            en: 'The computer hard drive spins backwards due to wind resistance',
            bn: 'বাতাসের বাধার কারণে কম্পিউটারের হার্ড ড্রাইভ উল্টো দিকে ঘুরতে থাকে',
          },
          {
            en: 'The operating system deletes numbers that end in odd digits',
            bn: 'অপারেটিং সিস্টেম বিজোড় সংখ্যা দিয়ে শেষ হওয়া সমস্ত ডাটা মুছে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'A stale write overwrites changes made by an interleaved thread.',
          bn: 'পুরনো ডাটার ওপর ভিত্তি করে লেখা নতুন ডাটা মাঝের পরিবর্তনকে মুছে দেয়।',
        },
        explanation: {
          en: 'When Thread A writes using stale state read before Thread B wrote, Thread B update is permanently destroyed.',
          bn: 'থ্রেড বি-এর লেখার আগেই পড়া পুরনো ডাটার ওপর থ্রেড এ যখন নতুন মান লেখে, তখন থ্রেড বি-এর আপডেট চিরতরে মুছে যায়।'
        },
      },
      {
        id: 'race-cond-qz-3',
        kind: 'mcq',
        topic: 'data-race-vs-race-condition',
        question: {
          en: 'What is the subtle technical difference between a Data Race and a Race Condition in computer science?',
          bn: 'কম্পিউটার বিজ্ঞানে ডাটা রেস (Data Race) এবং রেস কন্ডিশনের (Race Condition) মধ্যে সূক্ষ্ম প্রযুক্তিগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'A Data Race is an unsynchronized concurrent memory access at the hardware level; a Race Condition is a semantic program logic flaw where execution timing affects business correctness',
            bn: 'ডাটা রেস হলো হার্ডওয়্যার পর্যায়ে সিঙ্ক্রোনাইজেশন ছাড়া মেমোরি অ্যাক্সেস; আর রেস কন্ডিশন হলো লজিক্যাল ত্রুটি যেখানে সময়ের তারতম্যে সফটওয়্যারের আসল ব্যবসায়িক ফলাফল ভুল আসে',
          },
          {
            en: 'A Data Race is for laptop computers; a Race Condition is for desktop computers',
            bn: 'ডাটা রেস ল্যাপটপের জন্য ঘটে; আর রেস কন্ডিশন ডেস্কটপ কম্পিউটারে হয়',
          },
          {
            en: 'Data Races only happen in Python, while Race Conditions only happen in C++',
            bn: 'ডাটা রেস কেবল পাইথনে হয়, আর রেস কন্ডিশন কেবল সি++ এ ঘটে',
          },
          {
            en: 'Both terms describe identical hard drive motor rotations',
            bn: 'উভয় শব্দই হার্ড ড্রাইভ মোটরের হুবহু একই ঘূর্ণনকে নির্দেশ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Data race is unsynchronized memory access; race condition is timing-dependent program logic flaw.',
          bn: 'ডাটা রেস হলো সমন্বয়হীন মেমোরি ব্যবহার; রেস কন্ডিশন হলো সময়নির্ভর লজিক্যাল ত্রুটি।',
        },
        explanation: {
          en: 'You can have a data race without a high-level race condition, and you can have race conditions (like check-then-act) even when all memory accesses are individually atomic.',
          bn: 'ব্যক্তিগত মেমোরি অ্যাক্সেস অ্যাটমিক হলেও চেক-দেন-অ্যাক্টের মতো লজিকে রেস কন্ডিশন তৈরি হতে পারে।'
        },
      },
      {
        id: 'race-cond-qz-4',
        kind: 'mcq',
        topic: 'heisenbug-logging-phenomenon',
        question: {
          en: 'Why does inserting a console.log or printf statement inside a concurrent function sometimes cause an intermittent race condition to disappear (a Heisenbug)?',
          bn: 'একটি কনকারেন্ট ফাংশনের ভেতর console.log বা printf যোগ করলে অনিয়মিত রেস কন্ডিশন অনেক সময় হঠাৎ গায়েব হয়ে যায় কেন ( হাইসেনবাগ )?'
        },
        options: [
          {
            en: 'I/O system calls like printing introduce massive microsecond delays and acquire internal I/O locks, altering thread interleaving timings and masking the race window',
            bn: 'প্রিন্ট করার মতো আই/ও সিস্টেম কল প্রচুর সময় নষ্ট করে এবং অভ্যন্তরীণ লক ব্যবহার করে, যার ফলে থ্রেডের টাইমিং বদলে গিয়ে রেস কন্ডিশনের ফাঁকটি সাময়িকভাবে ঢেকে যায়',
          },
          {
            en: 'Because console text emits electrical magnetism that fixes computer memory chips',
            bn: 'কারণ কনসোল টেক্সট চুম্বকীয় শক্তি তৈরি করে যা মেমোরি চিপকে মেরামত করে ফেলে',
          },
          {
            en: 'Because print statements automatically rewrite source code into safe Rust code',
            bn: 'কারণ প্রিন্ট স্টেটমেন্ট স্বয়ংক্রিয়ভাবে কোডকে নিরাপদ রাস্ট কোডে রূপান্তর করে দেয়',
          },
          {
            en: 'Because print statements reduce computer operating temperature to absolute zero',
            bn: 'কারণ প্রিন্ট স্টেটমেন্ট কম্পিউটারের তাপমাত্রা পরম শূন্যে নামিয়ে আনে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Printing adds I/O delays and internal synchronization that alters thread scheduling timing.',
          bn: 'প্রিন্টিংয়ের ধীরগতি এবং অভ্যন্তরীণ লক থ্রেডের টাইমিং পরিবর্তন করে ত্রুটি আড়াল করে।',
        },
        explanation: {
          en: 'I/O operations are thousands of times slower than memory access. The delay alters thread interleaving, masking the race condition while the logger is active.',
          bn: 'আই/ও অপারেশন সাধারণ মেমোরির চেয়ে হাজার গুণ ধীরগতির। এই বিলম্ব থ্রেডগুলোর চলার ছন্দ বদলে ফেলে রেস কন্ডিশন আড়াল করে।'
        },
      },
    ],
  },
  next: {
    slug: 'mutex-locks',
    title: {
      en: 'Mutex Locks & Semaphores: Mutual Exclusion Primitives',
      bn: 'মিউটেক্স লক এবং সেমাফোর: মিউচুয়াল এক্সক্লুশন প্রিমিটিভস'
    },
  },
};
