import type { Lesson } from '../../../lib/types';

export const ConcurrencyAndTheVirtualLesson: Lesson = {
  slug: 'concurrency-and-the-virtual',
  tech: 'lang-java',
  title: {
    en: 'Concurrency, Virtual Threads & Memory Model',
    bn: 'কনকারেন্সি, ভার্চুয়াল থ্রেডস এবং মেমোরি মডেল'
  },
  summary: {
    en: 'Architect high-throughput concurrent systems in Java. Transition from heavy OS platform threads to Java 21 Project Loom virtual workers, master the Java Memory Model rules for volatile memory visibility, coordinate mutual exclusion with synchronized monitors, and execute lock-free atomic CAS operations.',
    bn: 'জাভাতে উচ্চ-ক্ষমতার কনকারেন্ট সিস্টেম তৈরি করুন। সনাতন ওএস প্ল্যাটফর্ম থ্রেড থেকে জাভা ২১ ভার্চুয়াল থ্রেডে উত্তরণ, মেমোরি ভিজিবিলিটির জন্য জাভা মেমোরি মডেল, synchronized মনিটর লক এবং লক-ফ্রি অ্যাটমিক CAS অপারেশনের সঠিক প্রয়োগ শিখুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'platform-threads-vs-virtual-threads-heading',
      text: {
        en: 'The Concurrency Shift: Platform Threads to Java 21 Virtual Threads',
        bn: 'কনকারেন্সির যুগান্তকারী পরিবর্তন: প্ল্যাটফর্ম থ্রেড থেকে জাভা ২১ ভার্চুয়াল থ্রেডস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For decades, Java utilized platform threads that mapped 1:1 directly to operating system kernel threads. Each platform thread allocated approximately 1 megabyte of memory for its call stack, restricting typical enterprise servers to only 2000 or 5000 concurrent threads before exhausting memory. Java 21 revolutionized high-throughput concurrency with Project Loom Virtual Threads: lightweight user-mode tasks managed directly by the Java Virtual Machine (JVM). Millions of virtual threads can be multiplexed over a small pool of carrier OS workers. When a virtual thread executes a blocking network socket or database read, the runtime unmounts it from its carrier worker, freeing the OS thread to process other tasks.',
        bn: 'কয়েক দশক ধরে জাভা প্ল্যাটফর্ম থ্রেড ব্যবহার করে এসেছে যা সরাসরি অপারেটিং সিস্টেমের কার্নেল থ্রেডের সাথে ১:১ অনুপাতে যুক্ত থাকতো। প্রতিটি প্ল্যাটফর্ম থ্রেড প্রায় ১ মেগাবাইট মেমোরি দখল করতো, যার ফলে সাধারণ এন্টারপ্রাইজ সার্ভারে ২০০০ বা ৫০০০ টির বেশি সমান্তরাল থ্রেড চালু করলেই মেমোরি শেষ হয়ে যেতো। জাভা ২১ প্রজেক্ট লুমের ভার্চুয়াল থ্রেডের মাধ্যমে কনকারেন্সিতে বৈপ্লবিক পরিবর্তন এনেছে: এগুলো হলো সম্পূর্ণ Java Virtual Machine (JVM) নিয়ন্ত্রিত অত্যন্ত হালকা কাজ। সামান্য কয়েকটি ক্যারিয়ার ওএস কর্মীর ওপর নির্ভর করে লক্ষ লক্ষ ভার্চুয়াল থ্রেড অনায়াসে চালানো যায়। কোনো ভার্চুয়াল থ্রেড যখন নেটওয়ার্ক বা ডেটাবেস কলের জন্য অপেক্ষা করে, তখন রানটাইম সেটিকে ওএস কর্মী থেকে সরিয়ে নেয়, ফলে মূল সিস্টেম থ্রেডটি আটকে না থেকে অন্য কাজ চালিয়ে যেতে পারে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural comparison between traditional 1:1 OS Platform Threads and Java 21 Project Loom Virtual Threads multiplexed over Carrier Workers.',
        bn: 'চিত্র ১: সনাতন ১:১ ওএস প্ল্যাটফর্ম থ্রেড এবং ক্যারিয়ার কর্মীর ওপর জাভা ২১ ভার্চুয়াল থ্রেড মাল্টিপ্লেক্সিংয়ের আর্কিটেকচার তুলনা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">JAVA CONCURRENCY: PLATFORM THREADS VS VIRTUAL THREADS (PROJECT LOOM)</text>

  <!-- Step 1: OS Platform Threads -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#e11d48" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Platform Threads</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#fb7185" font-size="9" font-family="monospace">1:1 OS Kernel Map</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">~1 MB Stack Memory</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#fb7185" font-size="8" font-family="monospace">Limit: ~5000 Threads</text>

    <text x="15" y="215" fill="#fb7185" font-size="10" font-family="sans-serif">Heavy Context Switch</text>
  </g>

  <!-- Step 2: Virtual Threads -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Virtual Threads</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">M:N User-Space Mode</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">~1 KB Stack Footprint</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Scale: 1,000,000+ Tasks</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Unmount on Blocking IO</text>
  </g>

  <!-- Step 3: Java Memory Model -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#0284c7" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Memory Model</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">volatile Keyword</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Flushes CPU Caches</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="15" y="130" fill="#38bdf8" font-size="8" font-family="monospace">Happens-Before Barrier</text>

    <text x="15" y="215" fill="#38bdf8" font-size="10" font-family="sans-serif">Direct RAM Sync</text>
  </g>

  <!-- Step 4: Atomic CAS Primitives -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#d97706" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Atomic CAS</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">AtomicInteger</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Lock-Free Hardware</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="8" font-family="monospace">Compare-And-Swap</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Zero Race Conditions</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'jmm-and-volatile-visibility-heading',
      text: {
        en: 'The Java Memory Model (JMM) and Hardware Compare-And-Swap (CAS)',
        bn: 'জাভা মেমোরি মডেল (JMM) এবং হার্ডওয়্যার Compare-And-Swap (CAS)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern multi-core processors store cached data inside local L1 and L2 caches, causing changes written by one core to remain invisible to other cores. The Java Memory Model (JMM) formalizes exact memory visibility guarantees. Marking a field "volatile" establishes a "happens-before" relationship: any write to a volatile field flushes CPU store buffers to main RAM, invalidating stale cache lines for readers. However, volatile alone does not ensure atomic updates for compound statements like counter increments (count++ involves reading, mutating, and writing). To achieve thread-safe operations without lock contention, Java provides java.util.concurrent.atomic classes leveraging CPU-level Compare-And-Swap (CAS) instructions.',
        bn: 'আধুনিক মাল্টি-কোর প্রসেসরগুলো স্থানীয় L1 এবং L2 ক্যাশ মেমোরিতে ডেটা সংরক্ষণ করে, ফলে এক কোরের করা পরিবর্তন অন্য কোর অবিলম্বে দেখতে নাও পেতে পারে। জাভা মেমোরি মডেল (JMM) মেমোরির এই দৃশ্যমানতার সুনির্দিষ্ট নিয়ম নির্ধারণ করে। কোনো ফিল্ডকে "volatile" ঘোষণা করলে তা একটি "happens-before" নিশ্চয়তা দেয়: ভেরিয়েবলটিতে যেকোনো লেখা সরাসরি প্রধান মেমোরিতে জমা হয় এবং অন্য কোরের পুরনো ক্যাশ মুছে যায়। তবে volatile একাকী যৌগিক অপারেশন যেমন count++ এর ক্ষেত্রে অ্যাটোমিসিটি রক্ষা করতে পারে না (কারণ এতে পড়া, পরিবর্তন ও লেখার ৩ টি ধাপ থাকে)। কোনো ভারী লক ছাড়া থ্রেড-সেফ অপারেশন চালাতে জাভাতে AtomicInteger এর মতো ক্লাস রয়েছে যা প্রসেসরের হার্ডওয়্যার Compare-And-Swap (CAS) নির্দেশাবলী ব্যবহার করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Java virtual thread execution model, volatile memory barriers, and hardware CAS lock-free counter updates.',
        bn: 'জাভা ভার্চুয়াল থ্রেড এক্সিকিউশন মডেল, মেমোরি ভিজিবিলিটি এবং হার্ডওয়্যার CAS কাউন্টারের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Java Atomic CAS Counter and Virtual Thread Per-Task Dispatcher

export class AtomicCounterSimulator {
  private value: number;

  constructor(initialVal: number = 0) {
    this.value = initialVal;
  }

  // Simulated CPU-level Compare-And-Swap (CAS)
  public compareAndSet(expected: number, updated: number): boolean {
    if (this.value === expected) {
      this.value = updated;
      return true;
    }
    return false;
  }

  // Lock-free retry loop
  public incrementAndGet(): number {
    while (true) {
      const current = this.value;
      const next = current + 1;
      if (this.compareAndSet(current, next)) {
        return next;
      }
    }
  }

  public get(): number {
    return this.value;
  }
}

// Simulated Java 21 Executors.newVirtualThreadPerTaskExecutor()
export class VirtualThreadExecutorSimulator {
  private activeTasks: number = 0;

  public submitTask(task: () => void): void {
    this.activeTasks++;
    // Virtual thread executes lightweight task
    task();
    this.activeTasks--;
  }

  public getActiveCount(): number {
    return this.activeTasks;
  }
}

// Execution demonstration
const counter = new AtomicCounterSimulator(0);
const executor = new VirtualThreadExecutorSimulator();

executor.submitTask(() => counter.incrementAndGet());
executor.submitTask(() => counter.incrementAndGet());

console.log('Final Atomic Counter Value:', counter.get()); // 2
console.log('Active Tasks in Executor:', executor.getActiveCount()); // 0`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Virtual Thread',
          def: {
            en: 'Lightweight user-space thread introduced in Java 21 managed by the JVM rather than the OS kernel.',
            bn: 'জাভা ২১ এ প্রবর্তিত হালকা থ্রেড যা অপারেটিং সিস্টেমের বদলে সরাসরি JVM দ্বারা পরিচালিত হয়।'
          }
        },
        {
          term: 'volatile',
          def: {
            en: 'Modifier guaranteeing cross-core CPU cache visibility and establishing a happens-before memory barrier.',
            bn: 'মডিফায়ার যা প্রসেসর ক্যাশ বাইপাস করে সরাসরি প্রধান মেমোরির সাথে ভেরিয়েবলের দৃশ্যমানতা রক্ষা করে।'
          }
        },
        {
          term: 'CAS (Compare-And-Swap)',
          def: {
            en: 'Hardware-level atomic instruction verifying memory contents before updating, enabling non-blocking concurrency.',
            bn: 'হার্ডওয়্যার প্রসেসর নির্দেশ যা মেমোরির বর্তমান মান পরীক্ষা করে তবেই নতুন মান বসায়, কোনো ভারী লক ছাড়া।'
          }
        },
        {
          term: 'happens-before',
          def: {
            en: 'Formal relation in the Java Memory Model guaranteeing memory writes by one thread are visible to another.',
            bn: 'জাভা মেমোরি মডেলের গ্যারান্টি যা এক থ্রেডের করা পরিবর্তন অন্য থ্রেডের কাছে নিশ্চিতভাবে দৃশ্যমান করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'virtual-threads-memory-footprint-ex1',
      kind: 'mcq',
      topic: 'virtual-threads-stack-footprint',
      question: {
        en: 'Approximately how much initial stack memory does a Java 21 Virtual Thread consume compared to a 1MB Platform Thread?',
        bn: '১ মেগাবাইট প্ল্যাটফর্ম থ্রেডের তুলনায় জাভা ২১ ভার্চুয়াল থ্রেড শুরুতে আনুমানিক কতটুকু স্ট্যাক মেমোরি খরচ করে?'
      },
      options: [
        {
          en: 'Roughly 1 kilobyte (residing in heap memory), allowing millions of instances simultaneously',
          bn: 'আনুমানিক মাত্র ১ কিলোবাইট (যা হিপ মেমোরিতে থাকে), ফলে একসাথে লক্ষাধিক থ্রেড চালানো সম্ভব'
        },
        {
          en: 'Exactly 500 megabytes per instance',
          bn: 'প্রতিটি থ্রেডের জন্য ঠিক ৫০০ মেগাবাইট'
        },
        {
          en: 'Virtual threads consume zero bytes of memory',
          bn: 'ভার্চুয়াল থ্রেড ০ বাইট মেমোরি খরচ করে'
        },
        {
          en: 'It consumes the entire physical hard disk',
          bn: 'এটি পুরো হার্ডডিস্ক মেমোরি দখল করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Virtual threads consume only ~1 KB of initial heap stack space.',
        bn: 'ভার্চুয়াল থ্রেড মাত্র প্রায় ১ কিলোবাইট প্রাথমিক হিপ মেমোরি খরচ করে।'
      },
      explanation: {
        en: 'Because virtual threads allocate stacks dynamically on the JVM heap starting at ~1 KB, millions can coexist concurrently.',
        bn: 'হিপে অত্যন্ত সামান্য মেমোরি খরচ করার কারণে অনায়াসে লক্ষ লক্ষ ভার্চুয়াল থ্রেড তৈরি করা যায়।'
      }
    },
    {
      id: 'volatile-compound-operation-limitation-ex2',
      kind: 'mcq',
      topic: 'volatile-read-modify-write-non-atomic',
      question: {
        en: 'Why does declaring a variable "volatile int counter = 0;" NOT guarantee thread safety for "counter++"?',
        bn: '"volatile int counter = 0;" ঘোষণা করলেও "counter++" অপারেশনে থ্রেড-সেফটি কেন নিশ্চিত হয় না?'
      },
      options: [
        {
          en: 'Because "counter++" is a 3-step compound operation (read, modify, write); volatile guarantees visibility but not atomicity',
          bn: 'কারণ "counter++" হলো ৩ টি ধাপের যৌগিক অপারেশন (পড়া, পরিবর্তন, লেখা); volatile দৃশ্যমানতা দেয় কিন্তু অ্যাটোমিসিটি দেয় না'
        },
        {
          en: 'Because volatile is ignored on 64-bit operating systems',
          bn: 'কারণ ৬৪-বিট সিস্টেমে volatile উপেক্ষা করা হয়'
        },
        {
          en: 'Because counter++ converts variables into strings',
          bn: 'কারণ counter++ ভেরিয়েবলকে স্ট্রিংয়ে বদলে ফেলে'
        },
        {
          en: 'Because volatile variables can only be decremented',
          bn: 'কারণ volatile ভেরিয়েবল কেবল কমানো যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Volatile provides visibility, not atomic mutual exclusion for compound statements.',
        bn: 'Volatile কেবল দৃশ্যমানতা রক্ষা করে, ৩ ধাপের যৌগিক কাজে অ্যাটোমিসিটি দিতে পারে না।'
      },
      explanation: {
        en: 'Compound read-modify-write operations can interleave across threads. AtomicInteger or synchronized locks are required for atomicity.',
        bn: 'একাধিক থ্রেড একসাথে মান পরিবর্তন করতে গেলে তথ্য নষ্ট হতে পারে; তাই AtomicInteger প্রয়োজন।'
      }
    },
    {
      id: 'virtual-thread-creation-factory-syntax-ex3',
      kind: 'mcq',
      topic: 'thread-of-virtual-factory-method',
      question: {
        en: 'Which factory method syntax introduced in Java 21 launches a new virtual thread executing a Runnable?',
        bn: 'জাভা ২১ এ প্রবর্তিত কোন ফ্যাক্টরি মেথড সিনট্যাক্স দিয়ে একটি Runnable কার্যকর করতে নতুন ভার্চুয়াল থ্রেড শুরু করা হয়?'
      },
      options: [
        { en: 'Thread.ofVirtual().start(runnable)', bn: 'Thread.ofVirtual().start(runnable)' },
        { en: 'new VirtualThread(runnable)', bn: 'new VirtualThread(runnable)' },
        { en: 'Thread.createLoomWorker(runnable)', bn: 'Thread.createLoomWorker(runnable)' },
        { en: 'System.spawnVirtual(runnable)', bn: 'System.spawnVirtual(runnable)' }
      ],
      answer: 0,
      hint: {
        en: 'Thread.ofVirtual() provides the fluent builder API for virtual threads.',
        bn: 'Thread.ofVirtual() ভার্চুয়াল থ্রেড তৈরি করার ফ্লুয়েন্ট বিল্ডার এপিআই প্রদান করে।'
      },
      explanation: {
        en: 'Java 21 added Thread.ofVirtual() and Thread.ofPlatform() as standardized builders for launching threads.',
        bn: 'জাভা ২১ এ থ্রেড চালুর সুবিধার্থে Thread.ofVirtual() বিল্ডার মেথড যুক্ত করা হয়েছে।'
      }
    },
    {
      id: 'compare-and-swap-hardware-loop-ex4',
      kind: 'mcq',
      topic: 'atomic-cas-instruction-mechanics',
      question: {
        en: 'How does an AtomicInteger update its internal value without acquiring an operating system monitor lock?',
        bn: 'কোনো অপারেটিং সিস্টেম মনিটর লক ছাড়াই AtomicInteger কীভাবে তার ভেতরের মান পরিবর্তন করে?'
      },
      options: [
        {
          en: 'It uses a hardware-level Compare-And-Swap (CAS) instruction inside an optimistic retry loop',
          bn: 'এটি অপটিমিস্টিক রিট্রাই লুপের ভেতর প্রসেসরের হার্ডওয়্যার Compare-And-Swap (CAS) নির্দেশ ব্যবহার করে'
        },
        {
          en: 'It freezes all computer hardware until completion',
          bn: 'কাজ শেষ না হওয়া পর্যন্ত এটি সমস্ত কম্পিউটার হার্ডওয়্যার ফ্রিজ করে রাখে'
        },
        {
          en: 'It saves the integer value into a text file on disk',
          bn: 'এটি পূর্ণসংখ্যার মান ডিস্কের টেক্সট ফাইলে সেভ করে'
        },
        {
          en: 'It sends an HTTP request to an external server',
          bn: 'এটি বহিরাগত সার্ভারে একটি এইচটিটিপি রিকোয়েস্ট পাঠায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Atomic primitives use CPU CAS instructions without OS thread blocking.',
        bn: 'অ্যাটমিক প্রিমিটিভ প্রসেসরের CAS নির্দেশ ব্যবহার করে থ্রেড না আটকে কাজ সারে।'
      },
      explanation: {
        en: 'CAS instructions atomically verify and set values at the CPU memory bus level without expensive kernel context switches.',
        bn: 'লক ছাড়া সরাসরি সিপিইউ লেভেলে মান যাচাই করে পরিবর্তন করায় সিস্টেমের থ্রুপুট বহুগুণ বাড়ে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-concurrency-and-the-virtual',
    title: {
      en: 'Java Concurrency, Virtual Threads & JMM Quiz',
      bn: 'জাভা কনকারেন্সি, ভার্চুয়াল থ্রেডস এবং JMM কুইজ'
    },
    questions: [
      {
        id: 'quiz-pinning-virtual-threads-synchronized',
        kind: 'mcq',
        topic: 'virtual-thread-carrier-pinning',
        question: {
          en: 'What occurs when a Java 21 Virtual Thread executes a blocking operation inside a "synchronized" block (known as Thread Pinning)?',
          bn: 'জাভা ২১ ভার্চুয়াল থ্রেড কোনো "synchronized" ব্লকের ভেতর ব্লকিং কাজ চালালে কী ঘটে (যা থ্রেড পিনিং নামে পরিচিত)?'
        },
        options: [
          {
            en: 'The virtual thread becomes "pinned" to its underlying OS carrier thread, preventing the carrier from being released to process other virtual threads',
            bn: 'ভার্চুয়াল থ্রেডটি মূল ওএস ক্যারিয়ার থ্রেডের সাথে "পিন" বা আটকে থাকে, ফলে ক্যারিয়ার থ্রেডটি মুক্ত হতে না পেরে অন্য ভার্চুয়াল থ্রেড চালাতে পারে না'
          },
          {
            en: 'The Java runtime immediately crashes with a kernel fault',
            bn: 'জাভা রানটাইম কার্নেল ত্রুটি দিয়ে সাথে সাথে ক্র্যাশ করে'
          },
          {
            en: 'The operating system automatically doubles the number of CPU cores',
            bn: 'অপারেটিং সিস্টেম সিপিইউ কোরের সংখ্যা স্বয়ংক্রিয়ভাবে দ্বিগুণ করে'
          },
          {
            en: 'The synchronized block is converted into a Python function',
            bn: 'synchronized ব্লকটি পাইথন ফাংশনে রূপান্তর হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Synchronized blocks pin virtual threads to carrier threads; use ReentrantLock instead.',
          bn: 'synchronized ব্লকে থ্রেড পিন হয়ে যায়; এর বদলে ReentrantLock ব্যবহার করা শ্রেয়।'
        },
        explanation: {
          en: 'Thread pinning occurs inside synchronized blocks or native JNI calls. In modern Java, replacing synchronized with ReentrantLock avoids pinning.',
          bn: 'ভার্চুয়াল থ্রেড আটকে যাওয়া এড়াতে synchronized এর পরিবর্তে ReentrantLock ব্যবহারের পরামর্শ দেওয়া হয়।'
        }
      },
      {
        id: 'quiz-instruction-reordering-jmm-compiler',
        kind: 'mcq',
        topic: 'instruction-reordering-compiler-optimizations',
        question: {
          en: 'Why do JIT compilers and CPU architectures reorder machine instructions, and how does Java prevent reordering when necessary?',
          bn: 'JIT কম্পাইলার এবং প্রসেসর নির্দেশাবলীর ক্রম কেন পরিবর্তন (Reorder) করে এবং জাভা প্রয়োজনে কীভাবে তা প্রতিরোধ করে?'
        },
        options: [
          {
            en: 'To maximize CPU pipeline execution throughput; Java prevents reordering across critical boundaries using volatile barriers and synchronized monitors',
            bn: 'সিপিইউ পাইপলাইনের গতি সর্বোচ্চ করার জন্য; জাভা volatile মেমোরি ব্যারিয়ার এবং synchronized মনিটর ব্যবহার করে এই পুনর্বিন্যাস প্রতিরোধ করে'
          },
          {
            en: 'Instruction reordering is a hardware defect in Intel chips',
            bn: 'নির্দেশাবলীর পুনর্বিন্যাস ইন্টেল চিপের একটি হার্ডওয়্যার সমস্যা'
          },
          {
            en: 'Reordering is done to save electrical power in laptops',
            bn: 'ল্যাপটপে বিদ্যুৎ সাশ্রয় করতে এই পুনর্বিন্যাস করা হয়'
          },
          {
            en: 'Instruction reordering was disabled in Java 1.0',
            bn: 'জাভা ১.০ সংস্করণে নির্দেশাবলীর পুনর্বিন্যাস বন্ধ করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'CPUs reorder instructions for speed; memory barriers enforce strict ordering.',
          bn: 'গতির জন্য সিপিইউ নির্দেশ অদলবদল করে; মেমোরি ব্যারিয়ার তা নিয়ন্ত্রণ করে।'
        },
        explanation: {
          en: 'Compilers and CPUs reorder instructions to prevent pipeline stalls. Volatile writes and lock acquisitions insert memory barriers enforcing strict order.',
          bn: 'পাইপলাইন খালি থাকা রোধ করতে নির্দেশ বদলানো হয়; volatile কি-ওয়ার্ড সঠিক ক্রম বজায় রাখে।'
        }
      },
      {
        id: 'quiz-executorservice-virtual-threads-pool-pooling',
        kind: 'mcq',
        topic: 'virtual-threads-do-not-pool',
        question: {
          en: 'Why should developers NOT pool Virtual Threads using traditional fixed thread pool designs (e.g. Executors.newFixedThreadPool)?',
          bn: 'সনাতন ফিক্সড থ্রেড পুল (যেমন Executors.newFixedThreadPool) ব্যবহার করে ভার্চুয়াল থ্রেড পুলিং করা কেন অনুচিত?'
        },
        options: [
          {
            en: 'Because virtual threads are so cheap to instantiate (~1 KB) that they are meant to be created per task and discarded, eliminating thread pooling complexity',
            bn: 'কারণ ভার্চুয়াল থ্রেড তৈরি করা এতটাই সাশ্রয়ী (~১ KB) যে প্রতি কাজের জন্য নতুন তৈরি করে ফেলে দেওয়াই এর নিয়ম, পুল করার কোনো প্রয়োজন নেই'
          },
          {
            en: 'Because pooling virtual threads triggers an automatic hard drive format',
            bn: 'কারণ ভার্চুয়াল থ্রেড পুল করলে হার্ড ড্রাইভ ফরম্যাট হয়ে যায়'
          },
          {
            en: 'Because fixed thread pools cannot accept Runnables',
            bn: 'কারণ ফিক্সড থ্রেড পুল কোনো Runnable গ্রহণ করতে পারে না'
          },
          {
            en: 'Virtual threads can only be run sequentially one by one',
            bn: 'ভার্চুয়াল থ্রেড কেবল একের পর এক ধারাবাহিকভাবে চলতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Never pool virtual threads; create a fresh virtual thread per task.',
          bn: 'ভার্চুয়াল থ্রেড কখনো পুল করবেন না; প্রতি কাজের জন্য নতুন থ্রেড তৈরি করুন।'
        },
        explanation: {
          en: 'Platform threads are pooled because they are expensive. Virtual threads are lightweight; create one per task via newVirtualThreadPerTaskExecutor().',
          bn: 'ভার্চুয়াল থ্রেডের পেছনে কোনো ভারী খরচ নেই, তাই অযথা পুল না করে কাজ প্রতি নতুন থ্রেড নেওয়াই আধুনিক রীতি।'
        }
      },
      {
        id: 'quiz-deadlock-prevention-trylock-timeout',
        kind: 'mcq',
        topic: 'reentrantlock-trylock-deadlock-prevention',
        question: {
          en: 'How does java.util.concurrent.locks.ReentrantLock help prevent deadlocks compared to the intrinsic "synchronized" keyword?',
          bn: 'সনাতন "synchronized" কি-ওয়ার্ডের তুলনায় java.util.concurrent.locks.ReentrantLock কীভাবে ডেডলক প্রতিরোধে সহায়তা করে?'
        },
        options: [
          {
            en: 'It supports tryLock() with timeouts, allowing threads to abort lock acquisition gracefully instead of blocking indefinitely in a circular wait',
            bn: 'এটি টাইম-আউটসহ tryLock() সমর্থন করে, ফলে অনন্তকাল চক্রাকার অপেক্ষায় আটকে না থেকে থ্রেড নিরাপদভাবে ব্যর্থতা হ্যান্ডেল করতে পারে'
          },
          {
            en: 'It automatically disables multi-core CPU execution',
            bn: 'এটি মাল্টি-কোর সিপিইউ চালানো নিজে থেকেই বন্ধ করে দেয়'
          },
          {
            en: 'ReentrantLock deletes deadlocked threads from memory',
            bn: 'ReentrantLock আটকে থাকা থ্রেডগুলোকে মেমোরি থেকে মুছে ফেলে'
          },
          {
            en: 'Locks cannot be used in enterprise Java applications',
            bn: 'এন্টারপ্রাইজ জাভাতে লক ব্যবহার করা নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'tryLock(timeout) backs off if a lock cannot be acquired within a deadline.',
          bn: 'নির্ধারিত সময়ের মধ্যে লক না পেলে tryLock(timeout) নিরাপদভাবে ফিরে আসে।'
        },
        explanation: {
          en: 'ReentrantLock provides tryLock(timeout, unit), allowing threads to avoid indefinite blocking and break circular wait deadlocks.',
          bn: 'tryLock এর সময়সীমা নির্ধারণের সুবিধা অনির্দিষ্টকালের জন্য থ্রেড আটকে যাওয়া বা ডেডলক সম্পূর্ণ প্রতিরোধ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'modules-and-the-jar',
    title: {
      en: 'JPMS Modules, Encapsulation & JLink Packaging',
      bn: 'JPMS মডিউল, এনক্যাপসুলেশন এবং JLink প্যাকেজিং'
    }
  }
};
