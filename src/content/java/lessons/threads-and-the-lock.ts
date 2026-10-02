import type { Lesson } from '../../../lib/types';

export const ThreadsAndTheLockLesson: Lesson = {
  slug: 'threads-and-the-lock',
  tech: 'java',
  title: {
    en: 'Concurrency, Virtual Threads & Memory Visibility',
    bn: 'কনকারেন্সি, ভার্চুয়াল থ্রেডস এবং মেমোরি ভিজিবিলিটি'
  },
  summary: {
    en: 'Conquer concurrent systems in Java. Transition from OS platform threads to Java 21 Project Loom Virtual Threads, master the Java Memory Model with volatile and synchronized monitors, orchestrate async flows via CompletableFuture, and prevent race conditions using atomic variables.',
    bn: 'জাভাতে কনকারেন্ট সিস্টেম আয়ত্ত করুন। ওএস প্ল্যাটফর্ম থ্রেড থেকে জাভা ২১ ভার্চুয়াল থ্রেডে উত্তরণ, মেমোরি ভিজিবিলিটি এবং CompletableFuture দিয়ে অ্যাসিঙ্ক কার্যপ্রবাহ পরিচালনা করে রেস কন্ডিশন প্রতিরোধ করুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'platform-vs-virtual-threads-heading',
      text: {
        en: 'Evolution of Java Concurrency: Heavy OS Threads to Java 21 Virtual Threads',
        bn: 'জাভা কনকারেন্সির বিবর্তন: ভারী ওএস থ্রেড থেকে জাভা ২১ ভার্চুয়াল থ্রেড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Historically, Java threads mapped 1:1 onto operating system kernel threads. Each platform worker allocated approximately 1 megabyte of memory for its call stack. This bounded production servers to only 2000 or 5000 concurrent routines before exhausting memory. Java 21 revolutionized concurrency with Project Loom Virtual Threads: lightweight user-space tasks managed entirely by the JVM (Java Virtual Machine) runtime. Millions of virtual units can be multiplexed over a tiny pool of carrier OS workers. When a task blocks on network or database I/O, the runtime unmounts it from the carrier without blocking underlying operating system resources.',
        bn: 'ঐতিহাসিকভাবে জাভা থ্রেডগুলো সরাসরি অপারেটিং সিস্টেমের কার্নেল থ্রেডের সাথে ১:১ অনুপাতে যুক্ত থাকতো। প্রতিটি প্ল্যাটফর্ম কর্মী প্রায় ১ মেগাবাইট মেমোরি দখল করতো, যার ফলে সাধারণ প্রোডাকশন সার্ভারে ২০০০ বা ৫০০০ টির বেশি রুটিন চালু করলেই মেমোরি সংকট দেখা দিতো। জাভা ২১ প্রজেক্ট লুমের ভার্চুয়াল থ্রেডের মাধ্যমে কনকারেন্সিতে বৈপ্লবিক পরিবর্তন এনেছে: এগুলো হলো সম্পূর্ণ JVM (Java Virtual Machine) নিয়ন্ত্রিত অত্যন্ত হালকা কাজ। সামান্য কয়েকটি ক্যারিয়ার এক্সিকিউটরের ওপর নির্ভর করে লক্ষ লক্ষ ভার্চুয়াল রুটিন অনায়াসে চালানো যায়। কোনো টাস্ক যখন নেটওয়ার্ক বা ডেটাবেস কলের জন্য অপেক্ষা করে, তখন রানটাইম সেটিকে ওএস কর্মী থেকে সরিয়ে নেয়, ফলে মূল সিস্টেমটি আটকে না থেকে অন্য কাজ চালিয়ে যেতে পারে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural comparison between traditional 1-to-1 OS Platform Threads and Java 21 Project Loom Virtual Threads multiplexing over Carrier Threads.',
        bn: 'চিত্র ১: সনাতন ১-এর-বিপরীতে-১ ওএস প্ল্যাটফর্ম থ্রেড এবং ক্যারিয়ার থ্রেডের ওপর জাভা ২১ প্রজেক্ট লুম ভার্চুয়াল থ্রেড মাল্টিপ্লেক্সিংয়ের আর্কিটেকচার।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">JAVA CONCURRENCY: PLATFORM THREADS VS VIRTUAL THREADS (PROJECT LOOM)</text>

  <!-- Step 1: Traditional Platform Thread -->
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
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">M:N User-Space Threads</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">~1 KB Stack Footprint</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Scale: 1,000,000+ Tasks</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Unmount on Blocking IO</text>
  </g>

  <!-- Step 3: Java Memory Model -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#0284c7" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Memory Visibility</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">volatile Keyword</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Flushes CPU Caches</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="15" y="130" fill="#38bdf8" font-size="8" font-family="monospace">Happens-Before Order</text>

    <text x="15" y="215" fill="#38bdf8" font-size="10" font-family="sans-serif">Direct RAM Sync</text>
  </g>

  <!-- Step 4: Synchronization & CAS -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#d97706" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Mutual Exclusion</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">synchronized / Lock</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Intrinsic Monitors</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="8" font-family="monospace">Atomic CAS Ops</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Zero Race Conditions</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'jmm-and-atomic-cas-heading',
      text: {
        en: 'The Java Memory Model (JMM), Volatile Visibility, and Hardware CAS',
        bn: 'জাভা মেমোরি মডেল (JMM), Volatile ভিজিবিলিটি এবং হার্ডওয়্যার CAS'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Multi-core modern CPUs maintain local L1 and L2 caches that can obscure writes made by one thread from another running on a different core. The Java Memory Model (JMM) establishes strict rules governing visibility and instruction reordering. Declaring a field "volatile" creates a "happens-before" guarantee: any write to a volatile variable is flushed directly to main memory, invalidating outdated CPU cache lines for other reading threads. However, volatile alone does not guarantee atomicity for compound operations like counter increments (count++ involves read, modify, and write). For atomic compound operations without lock contention, Java provides java.util.concurrent.atomic classes (such as AtomicInteger) leveraging CPU-level Compare-And-Swap (CAS) instructions.',
        bn: 'আধুনিক মাল্টি-কোর প্রসেসরে প্রতিটি কোরের নিজস্ব L1 এবং L2 ক্যাশ মেমোরি থাকে, যার ফলে এক থ্রেডের করা ডেটা পরিবর্তন অন্য থ্রেড তাৎক্ষণিকভাবে দেখতে নাও পেতে পারে। জাভা মেমোরি মডেল (JMM) এই ভিজিবিলিটি এবং নির্দেশাবলীর পুনর্বিন্যাস কঠোরভাবে নিয়ন্ত্রণ করে। কোনো ভেরিয়েবলকে "volatile" ঘোষণা করলে তা একটি "happens-before" নিশ্চয়তা দেয়: ভেরিয়েবলটির প্রতিটি পরিবর্তন সরাসরি প্রধান মেমোরিতে লেখা হয় এবং অন্য থ্রেডের পুরনো ক্যাশ মুছে যায়। তবে volatile একাকী যৌগিক অপারেশন যেমন count++ এর ক্ষেত্রে অ্যাটোমিসিটি নিশ্চিত করতে পারে না (কারণ এতে পড়া, পরিবর্তন ও লেখার ৩ টি ধাপ থাকে)। কোনো ভারী লক ছাড়া অ্যাটমিক অপারেশন চালাতে জাভাতে AtomicInteger এর মতো ক্লাস রয়েছে যা প্রসেসরের হার্ডওয়্যার Compare-And-Swap (CAS) নির্দেশাবলী ব্যবহার করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Java atomic CAS (Compare-And-Swap) operations and mutual exclusion locks preventing concurrent race conditions.',
        bn: 'জাভা হার্ডওয়্যার CAS এবং লক মেকানিজমের সিমুলেশন যা কনকারেন্ট রেস কন্ডিশন সম্পূর্ণরূপে প্রতিরোধ করে।'
      },
      code: `// Simulation of Java Atomic CAS Counter and Mutual Exclusion Lock

export class AtomicIntegerSimulator {
  private value: number;

  constructor(initialValue: number = 0) {
    this.value = initialValue;
  }

  // Simulating CPU-level CAS (Compare-And-Swap)
  public compareAndSet(expected: number, updated: number): boolean {
    if (this.value === expected) {
      this.value = updated;
      return true;
    }
    return false;
  }

  // Atomic increment leveraging CAS retry loop
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

// Simulating Java ReentrantLock mutual exclusion
export class SimpleLockSimulator {
  private isLocked: boolean = false;

  public lock(): void {
    if (this.isLocked) {
      throw new Error('Lock acquisition contention');
    }
    this.isLocked = true;
  }

  public unlock(): void {
    this.isLocked = false;
  }
}

// Executing atomic operations
const counter = new AtomicIntegerSimulator(0);
counter.incrementAndGet();
counter.incrementAndGet();
console.log('Atomic Counter Final Value:', counter.get()); // 2`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Virtual Thread',
          def: {
            en: 'Java 21 lightweight user-mode thread scheduled by the JVM over OS carrier threads for extreme scalability.',
            bn: 'জাভা ২১ এর অত্যন্ত হালকা থ্রেড যা JVM দ্বারা নিয়ন্ত্রিত হয় এবং লক্ষাধিক পর্যন্ত স্কেল করতে পারে।'
          }
        },
        {
          term: 'volatile',
          def: {
            en: 'Java keyword guaranteeing visibility across CPU caches and establishing a happens-before memory ordering barrier.',
            bn: 'জাভা কি-ওয়ার্ড যা প্রসেসর ক্যাশ বাইপাস করে সরাসরি প্রধান মেমোরির সাথে ভেরিয়েবলের দৃশ্যমানতা নিশ্চিত করে।'
          }
        },
        {
          term: 'synchronized',
          def: {
            en: 'Java keyword acquiring an intrinsic object monitor lock to ensure mutual exclusion across concurrent threads.',
            bn: 'জাভা কি-ওয়ার্ড যা অবজেক্টের মনিটর লক দখল করে যাতে একসাথে কেবল একটি থ্রেড কোড চালাতে পারে।'
          }
        },
        {
          term: 'CAS (Compare-And-Swap)',
          def: {
            en: 'Low-level atomic CPU instruction verifying memory value before updating, enabling non-blocking concurrency.',
            bn: 'হার্ডওয়্যার প্রসেসর নির্দেশ যা মেমোরির বর্তমান মান পরীক্ষা করে তবেই নতুন মান বসায়, কোনো ভারী লক ছাড়া।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'virtual-threads-java-version-loom-ex1',
      kind: 'mcq',
      topic: 'virtual-threads-project-loom-java21',
      question: {
        en: 'In which long-term support (LTS) release was Project Loom Virtual Threads officially finalized in Java?',
        bn: 'কোন লং-টার্ম সাপোর্ট (LTS) সংস্করণে জাভাতে প্রজেক্ট লুম ভার্চুয়াল থ্রেড আনুষ্ঠানিকভাবে যুক্ত হয়?'
      },
      options: [
        { en: 'Java 21', bn: 'Java 21' },
        { en: 'Java 8', bn: 'Java 8' },
        { en: 'Java 11', bn: 'Java 11' },
        { en: 'Java 17', bn: 'Java 17' }
      ],
      answer: 0,
      hint: {
        en: 'Virtual threads became fully stable and production-ready in LTS version 21.',
        bn: 'ভার্চুয়াল থ্রেড এলটিএস সংস্করণ ২১ এ স্থায়ী ও প্রোডাকশন-রেডি হিসেবে মুক্তি পায়।'
      },
      explanation: {
        en: 'Java 21 officially brought Virtual Threads (JEP 444) out of preview into production status.',
        bn: 'জাভা ২১ আনুষ্ঠানিকভাবে ভার্চুয়াল থ্রেডকে পূর্ণাঙ্গ ফিচার হিসেবে অন্তর্ভুক্ত করে।'
      }
    },
    {
      id: 'volatile-visibility-vs-atomicity-ex2',
      kind: 'mcq',
      topic: 'volatile-keyword-atomicity-limit',
      question: {
        en: 'Why is declaring "private volatile int counter = 0;" insufficient to prevent race conditions during "counter++"?',
        bn: '"counter++" অপারেশনের সময় "private volatile int counter = 0;" ডিক্লেয়ার করলেও রেস কন্ডিশন কেন ঘটে?'
      },
      options: [
        {
          en: 'volatile guarantees memory visibility across CPU caches, but "counter++" is a compound 3-step operation (read, modify, write) requiring atomicity',
          bn: 'volatile কেবল মেমোরি ভিজিবিলিটি নিশ্চিত করে, কিন্তু "counter++" হলো ৩ টি ধাপের যৌগিক কাজ (পড়া, পরিবর্তন, লেখা) যার জন্য অ্যাটোমিসিটি আবশ্যক'
        },
        {
          en: 'volatile only works on strings and arrays',
          bn: 'volatile শুধুমাত্র স্ট্রিং এবং অ্যারেতে কাজ করে'
        },
        {
          en: 'volatile variables can never be incremented',
          bn: 'volatile ভেরিয়েবলের মান বৃদ্ধি করা অসম্ভব'
        },
        {
          en: 'volatile is deprecated in modern Java',
          bn: 'আধুনিক জাভাতে volatile বাতিল করা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Volatile provides visibility and ordering, not atomic read-modify-write compound safety.',
        bn: 'Volatile দৃশ্যমানতা রক্ষা করে, কিন্তু ৩ ধাপের যৌগিক কাজকে অ্যাটমিক রাখতে পারে না।'
      },
      explanation: {
        en: 'Because counter++ consists of multiple machine instructions, multiple threads can interleave. AtomicInteger is needed for lock-free atomicity.',
        bn: 'যেহেতু একাধিক প্রসেসর নির্দেশ কার্যকর হয়, তাই থ্রেডগুলোর মধ্যে তথ্য নষ্ট হতে পারে। এর জন্য AtomicInteger দরকার।'
      }
    },
    {
      id: 'virtual-thread-unmounting-blocking-io-ex3',
      kind: 'mcq',
      topic: 'virtual-thread-continuation-unmount',
      question: {
        en: 'What does the JVM do when a Java 21 Virtual Thread executes a blocking network socket read?',
        bn: 'জাভা ২১ ভার্চুয়াল থ্রেড যখন কোনো ব্লকিং নেটওয়ার্ক সকেট রিড চালায় তখন JVM কী করে?'
      },
      options: [
        {
          en: 'The JVM unmounts the virtual thread from its carrier OS thread, allowing the carrier thread to execute other virtual threads while waiting',
          bn: 'JVM ভার্চুয়াল থ্রেডটিকে ওএস ক্যারিয়ার থ্রেড থেকে সরিয়ে দেয়, ফলে ক্যারিয়ার থ্রেড আটকে না থেকে অন্য ভার্চুয়াল থ্রেড চালাতে পারে'
        },
        {
          en: 'The operating system kills the entire Java process',
          bn: 'অপারেটিং সিস্টেম পুরো জাভা প্রসেসটি বন্ধ করে দেয়'
        },
        {
          en: 'The JVM locks all CPU cores until the socket responds',
          bn: 'সকেট থেকে ডেটা না আসা পর্যন্ত JVM সব সিপিইউ কোর লক করে রাখে'
        },
        {
          en: 'The virtual thread automatically converts into an error',
          bn: 'ভার্চুয়াল থ্রেড নিজে থেকে এররে রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Virtual threads suspend on I/O without blocking the underlying OS carrier thread.',
        bn: 'আই/ও অপেক্ষার সময় ভার্চুয়াল থ্রেড ক্যারিয়ার থ্রেডকে মুক্ত করে দেয়।'
      },
      explanation: {
        en: 'Project Loom uses Continuations to pause virtual threads during blocking calls without holding valuable OS threads captive.',
        bn: 'কন্টিনিউয়েশন ব্যবহার করে ভার্চুয়াল থ্রেডকে স্থগিত করা হয় যাতে ওএস থ্রেডের অপচয় না ঘটে।'
      }
    },
    {
      id: 'deadlock-four-necessary-conditions-ex4',
      kind: 'mcq',
      topic: 'deadlock-circular-wait-prevention',
      question: {
        en: 'How can concurrent Java applications reliably avoid deadlocks when acquiring multiple monitor locks?',
        bn: 'একাধিক মনিটর লক দখলের সময় জাভা অ্যাপ্লিকেশন কীভাবে নির্ভরযোগ্যভাবে ডেডলক এড়াতে পারে?'
      },
      options: [
        {
          en: 'By enforcing a strict, global lock acquisition ordering protocol across all threads',
          bn: 'সব থ্রেড জুড়ে কঠোরভাবে একটি পূর্বনির্ধারিত ক্রম মেনে ধারাবাহিকভাবে লক নেওয়ার নিয়ম প্রয়োগ করে'
        },
        {
          en: 'By using only 1 single static lock across the entire application',
          bn: 'পুরো অ্যাপ্লিকেশনে শুধুমাত্র ১ টি একক স্ট্যাটিক লক ব্যবহার করে'
        },
        {
          en: 'Deadlocks cannot be prevented in concurrent systems',
          bn: 'কনকারেন্ট সিস্টেমে ডেডলক কখনোই এড়ানো যায় না'
        },
        {
          en: 'By removing all synchronized keywords from the codebase',
          bn: 'কোডবেস থেকে সব synchronized কি-ওয়ার্ড মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consistent lock ordering eliminates circular wait conditions.',
        bn: 'নির্দিষ্ট ধারাবাহিকতায় লক গ্রহণ করলে চক্রাকার অপেক্ষা ভেঙে যায় এবং ডেডলক ঘটে না।'
      },
      explanation: {
        en: 'Deadlocks require circular wait; acquiring locks in an identical global sequence eliminates the possibility of circular dependencies.',
        bn: 'ধারাবাহিক লক অর্ডারিং চক্রাকার অপেক্ষা প্রতিরোধ করে ডেডলক সম্পূর্ণ নির্মূল করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-threads-and-the-lock',
    title: {
      en: 'Java Concurrency and Virtual Threads Mastery Quiz',
      bn: 'জাভা কনকারেন্সি এবং ভার্চুয়াল থ্রেডস কুইজ'
    },
    questions: [
      {
        id: 'quiz-completable-future-async-composition',
        kind: 'mcq',
        topic: 'completable-future-thenapply-pipeline',
        question: {
          en: 'Which class in java.util.concurrent enables non-blocking asynchronous pipeline chaining using methods like thenApply and thenCompose?',
          bn: 'java.util.concurrent প্যাকেজের কোন ক্লাসটি thenApply এবং thenCompose মেথডের মাধ্যমে নন-ব্লকিং অ্যাসিঙ্ক পাইপলাইন চেইনিং সমর্থন করে?'
        },
        options: [
          { en: 'CompletableFuture', bn: 'CompletableFuture' },
          { en: 'ThreadExecutor', bn: 'ThreadExecutor' },
          { en: 'SyncBarrier', bn: 'SyncBarrier' },
          { en: 'ConcurrentStream', bn: 'ConcurrentStream' }
        ],
        answer: 0,
        hint: {
          en: 'Java 8 introduced CompletableFuture for non-blocking asynchronous programming.',
          bn: 'জাভা ৮ এ নন-ব্লকিং অ্যাসিঙ্ক্রোনাস কাজের জন্য CompletableFuture যুক্ত করা হয়।'
        },
        explanation: {
          en: 'CompletableFuture implements both Future and CompletionStage, supporting rich functional chaining of async tasks.',
          bn: 'CompletableFuture অ্যাসিঙ্ক কাজগুলোকে পাইপলাইনের মতো একটার পর আরেকটা সাজিয়ে কার্যকর করতে দেয়।'
        }
      },
      {
        id: 'quiz-threadlocal-virtual-thread-warning',
        kind: 'mcq',
        topic: 'threadlocal-virtual-thread-memory-footprint',
        question: {
          en: 'Why must developers exercise caution when using ThreadLocal storage with millions of Virtual Threads?',
          bn: 'লক্ষ লক্ষ ভার্চুয়াল থ্রেড ব্যবহারের সময় ThreadLocal মেমোরি ব্যবহারে ডেভেলপারদের সতর্ক থাকা কেন আবশ্যক?'
        },
        options: [
          {
            en: 'Because ThreadLocal values are allocated per thread, and millions of virtual threads each holding heavy ThreadLocal objects can quickly exhaust JVM heap memory',
            bn: 'কারণ প্রতিটি থ্রেডের জন্য পৃথক ThreadLocal মেমোরি বরাদ্দ হয়, এবং লক্ষ লক্ষ থ্রেড ভারী অবজেক্ট রাখলে JVM হিপ মেমোরি দ্রুত নিঃশেষ হতে পারে'
          },
          {
            en: 'ThreadLocal variables automatically shut down the operating system',
            bn: 'ThreadLocal ভেরিয়েবল নিজে থেকেই অপারেটিং সিস্টেম বন্ধ করে দেয়'
          },
          {
            en: 'Virtual threads cannot read ThreadLocal variables at all',
            bn: 'ভার্চুয়াল থ্রেড ThreadLocal ভেরিয়েবল একদম পড়তেই পারে না'
          },
          {
            en: 'ThreadLocal only works on 32-bit hardware architectures',
            bn: 'ThreadLocal কেবল ৩২-বিট হার্ডওয়্যারে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Scoped values in Java 21 are designed as a lightweight alternative to ThreadLocal for virtual threads.',
          bn: 'ভার্চুয়াল থ্রেডের মেমোরি অপচয় রোধে জাভা ২১ এ Scoped Values আনা হয়েছে।'
        },
        explanation: {
          en: 'With millions of virtual threads, unconstrained ThreadLocal allocations accumulate massive heap footprint. Scoped values are preferred.',
          bn: 'লক্ষ লক্ষ ভার্চুয়াল থ্রেড থাকলে ThreadLocal এর কারণে প্রচুর মেমোরি লিক হতে পারে।'
        }
      },
      {
        id: 'quiz-synchronized-reentrancy-concept',
        kind: 'mcq',
        topic: 'reentrant-monitor-locks',
        question: {
          en: 'What does "reentrancy" mean regarding Java synchronized locks?',
          bn: 'জাভাতে synchronized লকের ক্ষেত্রে "reentrancy" কথাটির অর্থ কী?'
        },
        options: [
          {
            en: 'A thread that already holds a lock on an object can re-enter another synchronized block guarded by the same object without self-deadlocking',
            bn: 'যে থ্রেড ইতিমধ্যে কোনো অবজেক্টের লক ধরে রেখেছে, সে নিজে না আটকে একই অবজেক্টের সুরক্ষায় থাকা অন্য ব্লকে পুনরায় প্রবেশ করতে পারে'
          },
          {
            en: 'The lock resets back to 0 every 10 seconds',
            bn: 'প্রতি ১০ সেকেন্ড পরপর লকটি নিজে থেকে ০ মানে রিসেট হয়'
          },
          {
            en: 'Only 2 threads can hold the lock simultaneously',
            bn: 'একসাথে কেবল ২ টি থ্রেড লকটি ধরে রাখতে পারে'
          },
          {
            en: 'Reentrancy means locks cannot be acquired inside loops',
            bn: 'লুপের ভেতর লক নেওয়া যাবে না এটাই Reentrancy'
          }
        ],
        answer: 0,
        hint: {
          en: 'Reentrant monitors track acquisition count per thread to avoid self-deadlocks.',
          bn: 'একই থ্রেড নিজের অধিকৃত লকে দ্বিতীয়বার ঢুকতে পারলে তাকে রি-এন্ট্রান্ট বলা হয়।'
        },
        explanation: {
          en: 'Java intrinsic monitors are reentrant: they increment a hold count when the owning thread enters another synchronized method on the same object.',
          bn: 'একই থ্রেড নিজের লকে ঢুকলে হোল্ড কাউন্টার বৃদ্ধি পায়, ফলে কোনো সেলফ-ডেডলক হয় না।'
        }
      },
      {
        id: 'quiz-thread-interruption-cooperative',
        kind: 'mcq',
        topic: 'thread-interrupt-cooperative-cancellation',
        question: {
          en: 'Why is Thread.interrupt() in Java considered cooperative rather than preemptive force termination?',
          bn: 'জাভাতে Thread.interrupt() কে জোরপূর্বক বন্ধ করার বদলে সহযোগিতামূলক বা কোঅপারেটিভ বলা হয় কেন?'
        },
        options: [
          {
            en: 'It does not forcibly kill the thread; it simply sets an interrupt flag that the target thread must actively poll or catch via InterruptedException to gracefully terminate',
            bn: 'এটি জোর করে থ্রেড মেরে ফেলে না; বরং একটি ফ্ল্যাগ সেট করে যা থ্রেডটি নিজে চেক করে বা InterruptedException ধরে সুশৃঙ্খলভাবে বন্ধ হয়'
          },
          {
            en: 'It immediately uninstalls the Java runtime',
            bn: 'এটি তাৎক্ষণিকভাবে জাভা রানটাইম আনইনস্টল করে ফেলে'
          },
          {
            en: 'It pauses the thread forever without any resume method',
            bn: 'এটি কোনো পুনরাবৃত্তি ছাড়াই থ্রেডটিকে চিরতরে থামিয়ে দেয়'
          },
          {
            en: 'Interrupt only works on daemon threads',
            bn: 'Interrupt কেবল ডেমন থ্রেডেই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Java deprecated Thread.stop() because cooperative cancellation via Thread.interrupt() prevents corrupt state.',
          bn: 'ডেটা নষ্ট হওয়া ঠেকাতে সরাসরি থ্রেড বন্ধ না করে interrupt ফ্ল্যাগ দিয়ে শান্তভাবে কাজ বন্ধের সুযোগ দেওয়া হয়।'
        },
        explanation: {
          en: 'Thread.interrupt() sets the interrupted status. The target thread retains control over when and how it exits, preventing inconsistent locks.',
          bn: 'থ্রেড নিজে সিদ্ধান্ত নেয় কখন নিরাপদভাবে কাজ শেষ করে বের হবে, যা মেমোরির অখণ্ডতা রক্ষা করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'jdbc-and-the-row',
    title: {
      en: 'JDBC, Connection Pooling & Transaction Management',
      bn: 'JDBC, কানেকশন পুলিং এবং ট্রানজ্যাকশন ম্যানেজমেন্ট'
    }
  }
};
