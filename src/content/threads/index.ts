import type { Hub } from '../../lib/types';
import { MeetThreadsLesson } from './lessons/meet-threads';
import { ThreadsVsProcessesLesson } from './lessons/threads-vs-processes';
import { ThreadLifecycleLesson } from './lessons/thread-lifecycle';
import { RaceConditionsLesson } from './lessons/race-conditions';
import { MutexLocksLesson } from './lessons/mutex-locks';
import { DeadlocksLesson } from './lessons/deadlocks';
import { ThreadPoolsLesson } from './lessons/thread-pools';
import { ThreadsCapstoneLesson } from './lessons/threads-capstone';

export const threadsHub: Hub = {
  slug: 'threads',
  name: 'Threads',
  icon: '🧵',
  tagline: {
    en: 'Master concurrent execution, shared memory architectures, thread lifecycles, synchronization primitives, race conditions, and thread pools.',
    bn: 'কনকারেন্ট এক্সিকিউশন, শেয়ার্ড মেমোরি আর্কিটেকচার, থ্রেড লাইফসাইকেল, সিঙ্ক্রোনাইজেশন প্রিমিটিভস, রেস কন্ডিশন এবং থ্রেড পুল আয়ত্ত করুন।'
  },
  intro: {
    en: 'Threads are the fundamental units of CPU execution that enable modern software to perform multiple tasks simultaneously within a single process. Unlike independent processes that operate in isolated address spaces, threads share the same heap memory, open file descriptors, and global variables while maintaining their own private stack and register state. This hub explores how operating systems schedule lightweight threads, the mechanisms behind context switching, the perils of race conditions and deadlocks, and the production patterns used to build scalable multithreaded systems.',
    bn: 'থ্রেড হলো সিপিইউ এক্সিকিউশনের মৌলিক একক যা আধুনিক সফটওয়্যারকে একটি একক প্রসেসের ভেতরে একসাথে একাধিক কাজ করার সুযোগ দেয়। স্বাধীন প্রসেসের মতো বিচ্ছিন্ন মেমোরিতে চলার বদলে থ্রেডগুলো একই হিপ মেমোরি, ওপেন ফাইল ডেসক্রিপ্টর এবং গ্লোবাল ভেরিয়েবল শেয়ার করে, যদিও তাদের প্রত্যেকের নিজস্ব প্রাইভেট স্ট্যাক ও রেজিস্টার থাকে। এই হাবে অপারেটিং সিস্টেম কীভাবে লাইটওয়েট থ্রেড শিডিউল করে, কনটেক্সট সুইচের মেকানিজম, রেস কন্ডিশন ও ডেডলকের বিপদ এবং স্কেলযোগ্য মাল্টি-থ্রেডেড সিস্টেম তৈরির প্রোডাকশন প্যাটার্ন বিস্তারিত আলোচনা করা হয়েছে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Thread Fundamentals & Architecture (L1–L2)',
        bn: 'ধাপ ১ — থ্রেডের প্রাথমিক ধারণা ও আর্কিটেকচার (পাঠ ১–২)'
      },
      items: [
        {
          en: 'Meet Threads: The fundamental dispatchable execution unit within an operating system process',
          bn: 'থ্রেডের পরিচিতি: অপারেটিং সিস্টেম প্রসেসের ভেতরে সবচেয়ে ক্ষুদ্র এক্সিকিউশন ইউনিট'
        },
        {
          en: 'Threads vs Processes: Deep memory layout comparison, shared heap vs isolated address spaces, and context switch costs',
          bn: 'থ্রেড বনাম প্রসেস: মেমোরি কাঠামোর গভীর তুলনা, শেয়ার্ড হিপ বনাম পৃথক মেমোরি এবং কনটেক্সট সুইচের খরচ'
        },
        {
          en: 'Milestone: Inspect running threads in Linux using top, ps -T, and thread-local storage inspection',
          bn: 'মাইলফলক: top, ps -T এবং থ্রেড-লোকাল স্টোরেজ ব্যবহার করে লিনাক্সে চলমান থ্রেড বিশ্লেষণ'
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Thread Lifecycle & Race Hazards (L3–L4)',
        bn: 'ধাপ ২ — থ্রেড লাইফসাইকেল ও রেস হ্যাজার্ড (পাঠ ৩–৪)'
      },
      items: [
        {
          en: 'Thread Lifecycle: New, Runnable, Running, Blocked, Waiting, and Terminated states with pthread_create and pthread_join',
          bn: 'থ্রেড জীবনচক্র: New, Runnable, Running, Blocked, Waiting এবং Terminated অবস্থা'
        },
        {
          en: 'Race Conditions: Data races on shared variables, non-atomic increments, and memory ordering hazards',
          bn: 'রেস কন্ডিশন: শেয়ার্ড ভেরিয়েবলে ডাটা রেস, নন-অ্যাটমিক ইনক্রিমেন্ট এবং মেমোরি করাপশন'
        },
        {
          en: 'Milestone: Reproduce a multi-threaded bank account balance race condition and verify corrupted financial totals',
          bn: 'মাইলফলক: মাল্টি-থ্রেডেড ব্যাংক অ্যাকাউন্টে ব্যালেন্স রেস কন্ডিশন তৈরি করে ডাটা গরমিল পরীক্ষা'
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Synchronization, Mutexes & Deadlocks (L5–L6)',
        bn: 'ধাপ ৩ — সিঙ্ক্রোনাইজেশন, মিউটেক্স ও ডেডলক (পাঠ ৫–৬)'
      },
      items: [
        {
          en: 'Mutex Locks & Semaphores: Mutual exclusion primitives, critical section boundaries, and atomic compare-and-swap',
          bn: 'মিউটেক্স লক ও সেমাফোর: মিউচুয়াল এক্সক্লুশন প্রিমিটিভস, ক্রিটিক্যাল সেকশন এবং অ্যাটমিক অপারেশন'
        },
        {
          en: 'Deadlocks & Coffman Conditions: Circular wait, hold and wait, mutual exclusion, and lock-ordering prevention strategies',
          bn: 'ডেডলক ও কফম্যান শর্ত: সার্কুলার ওয়েট, হোল্ড অ্যান্ড ওয়েট এবং লক অর্ডারিং প্রতিরোধ কৌশল'
        },
        {
          en: 'Milestone: Implement the Dining Philosophers synchronization challenge without triggering circular lock deadlocks',
          bn: 'মাইলফলক: বৃত্তাকার ডেডলক ছাড়াই ডাইনিং ফিলোসফার্স সিঙ্ক্রোনাইজেশন সমাধান বাস্তবায়ন'
        },
      ],
    },
    {
      title: {
        en: 'Stage 4 — Worker Pools & High-Concurrency Systems (L7–L8)',
        bn: 'ধাপ ৪ — ওয়ার্কার পুল ও উচ্চগতির কনকারেন্ট সিস্টেম (পাঠ ৭–৮)'
      },
      items: [
        {
          en: 'Thread Pools: Thread reuse architectures, task blocking queues, work-stealing algorithms, and thread exhaustion prevention',
          bn: 'থ্রেড পুল: থ্রেড পুনর্ব্যবহার আর্কিটেকচার, টাস্ক ব্লকিং কিউ এবং ওয়ার্ক-স্টিল অ্যালগরিদম'
        },
        {
          en: 'Threads Capstone: Production multi-threaded worker pool engine executing parallel computations with zero race hazards',
          bn: 'থ্রেডস ক্যাপস্টোন: কোনো প্রকার রেস কন্ডিশন ছাড়া সমান্তরাল কাজ সম্পন্নকারী প্রোডাকশন ওয়ার্কার পুল ইঞ্জিন'
        },
        {
          en: 'Milestone: Benchmark thread pool throughput against per-request thread spawning under heavy CPU load',
          bn: 'মাইলফলক: অতিরিক্ত কাজের চাপে প্রতি রিকোয়েস্টে নতুন থ্রেড বনাম থ্রেড পুলের পারফরম্যান্স বেঞ্চমার্ক'
        },
      ],
    },
  ],
  projects: [
    {
      title: {
        en: 'Multi-Threaded Concurrent Web Scraper',
        bn: 'মাল্টি-থ্রেডেড কনকারেন্ট ওয়েব স্ক্র্যাপার'
      },
      brief: {
        en: 'Spawns worker threads to crawl web endpoints simultaneously, utilizing thread-safe task queues and atomic result counters.',
        bn: 'থ্রেড-নিরাপদ টাস্ক কিউ এবং অ্যাটমিক রেজাল্ট কাউন্টার ব্যবহার করে সমান্তরালভাবে একাধিক ওয়েব ডেটা স্ক্র্যাপ করার ওয়ার্কার ইঞ্জিন তৈরি করুন।'
      },
      difficulty: 'intermediate',
    },
    {
      title: {
        en: 'Thread-Safe In-Memory Cache with Read-Write Locks',
        bn: 'রিড-রাইট লকযুক্ত থ্রেড-সেফ ইন-মেমোরি ক্যাশ'
      },
      brief: {
        en: 'Implements an in-memory key-value cache using shared read and exclusive write locks to maximize concurrent read throughput.',
        bn: 'শেয়ার্ড রিড এবং এক্সক্লুসিভ রাইট লক ব্যবহার করে উচ্চগতির থ্রেড-নিরাপদ ইন-মেমোরি কি-ভ্যালু ক্যাশ ইঞ্জিন বাস্তবায়ন করুন।'
      },
      difficulty: 'advanced',
    },
    {
      title: {
        en: 'High-Throughput Fixed Thread Pool Task Dispatcher',
        bn: 'উচ্চগতির ফিক্সড থ্রেড পুল টাস্ক ডিসপ্যাচার'
      },
      brief: {
        en: 'Builds a production-grade worker pool with bounded job queues, thread recycling, graceful shutdown, and crash recovery.',
        bn: 'নির্দিষ্ট আকারের জব কিউ, থ্রেড রিসাইক্লিং, গ্রেসফুল শাটডাউন এবং ক্র্যাশ রিকভারি সুবিধা সংবলিত প্রোডাকশন ওয়ার্কার পুল তৈরি করুন।'
      },
      difficulty: "advanced",
    },
  ],
  bestPractices: [
    {
      en: 'Minimize shared mutable state: prefer immutable data structures or message passing across threads to eliminate race conditions without locking overhead.',
      bn: 'শেয়ার্ড মিউটেবল ডাটা কমিয়ে আনুন: লকিং জটিলতা এড়াতে অপরিবর্তনশীল ডাটা বা মেসেজ পাসিং ব্যবহার করে থ্রেডের মাঝে তথ্য বিনিময় করুন।'
    },
    {
      en: 'Always acquire multiple mutex locks in a globally consistent order across all threads to mathematically prevent deadlocks.',
      bn: 'সকল থ্রেডে একাধিক মিউটেক্স লক সর্বদা একটি সুনির্দিষ্ট ধারাবাহিক ক্রমে গ্রহণ করুন যাতে গাণিতিকভাবে ডেডলক ঘটার সুযোগ না থাকে।'
    },
    {
      en: 'Always release mutex locks inside finally blocks or use RAII lock guards to prevent permanent deadlocks when exceptions occur in critical sections.',
      bn: 'ক্রিটিক্যাল সেকশনে ত্রুটি ঘটলেও লক যেন স্থায়ীভাবে আটকে না থাকে, সেজন্য সর্বদা finally ব্লক বা RAII গার্ড দিয়ে লক আনলক করুন।'
    },
    {
      en: 'Use fixed-size Thread Pools rather than spawning unbounded threads per request, preventing CPU context-switch thrashing and memory exhaustion.',
      bn: 'প্রতিটি নতুন কাজের জন্য নতুন থ্রেড তৈরি না করে ফিক্সড আকারের থ্রেড পুল ব্যবহার করুন, যা সিস্টেমের মেমোরি ও সিপিইউ সুরক্ষা নিশ্চিত করে।'
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the fundamental difference between a Process and a Thread regarding memory layout?',
        bn: 'মেমোরি কাঠামোর দিক থেকে প্রসেস এবং থ্রেডের মধ্যে মৌলিক পার্থক্য কী?'
      },
      a: {
        en: 'A Process owns an isolated virtual address space containing its own private text, heap, and data segments. Two processes cannot access each other memory without explicit OS IPC. A Thread is an execution unit inside a process that shares the same virtual address space, heap, and open file descriptors with sibling threads, while maintaining its own private stack and CPU register state.',
        bn: 'একটি প্রসেসের নিজস্ব সম্পূর্ণ পৃথক ভার্চুয়াল অ্যাড্রেস স্পেস থাকে যেখানে প্রাইভেট হিপ ও ডাটা সেগমেন্ট অন্তর্ভুক্ত। আইপিসি ছাড়া দুটি প্রসেস একে অপরের মেমোরি দেখতে পারে না। অপরদিকে থ্রেড হলো প্রসেসের ভেতরের এক্সিকিউশন ইউনিট যা একই হিপ মেমোরি ও ফাইল ডেসক্রিপ্টর সহোদর থ্রেডগুলোর সাথে শেয়ার করে, তবে প্রতিটি থ্রেডের নিজস্ব প্রাইভেট স্ট্যাক ও সিপিইউ রেজিস্টার থাকে।'
      },
    },
    {
      q: {
        en: 'What is a Race Condition, and how does a Mutex Lock eliminate it?',
        bn: 'রেস কন্ডিশন কী এবং একটি মিউটেক্স লক কীভাবে এটি সমাধান করে?'
      },
      a: {
        en: 'A Race Condition occurs when multiple concurrent threads read and write shared data without synchronization, causing the final outcome to depend unpredictably on thread scheduling order. A Mutex (mutual exclusion) lock ensures that only one thread can execute within a critical section at any given moment, forcing all competing threads to wait until the lock is released.',
        bn: 'রেস কন্ডিশন তখন ঘটে যখন একাধিক থ্রেড কোনো সমন্বয় ছাড়াই একই শেয়ার্ড মেমোরিতে রিড ও রাইট করে, যার ফলে চূড়ান্ত ফলাফল শিডিউলিং অর্ডারের ওপর নির্ভর করে বিভ্রান্তিকর হয়। মিউটেক্স (Mutual Exclusion) লক নিশ্চিত করে যে একই সময়ে কেবল একটি থ্রেড ক্রিটিক্যাল সেকশনে কাজ করতে পারবে এবং বাকি থ্রেডগুলো অপেক্ষা করতে বাধ্য হবে।'
      },
    },
    {
      q: {
        en: 'What are the four Coffman conditions required for a Deadlock to occur?',
        bn: 'ডেডলক ঘটার জন্য প্রয়োজনীয় ৪ টি কফম্যান শর্ত (Coffman Conditions) কী কী?'
      },
      a: {
        en: 'A deadlock can occur only if all 4 conditions hold simultaneously: 1. Mutual Exclusion (resources cannot be shared); 2. Hold and Wait (processes holding resources request new ones); 3. No Preemption (resources cannot be forcibly confiscated); and 4. Circular Wait (a closed chain of processes each waits for a resource held by the next). Breaking any 1 condition prevents deadlock entirely.',
        bn: 'ডেডলক ঘটার জন্য ৪ টি শর্ত একসাথে সত্য হতে হয়: ১. মিউচুয়াল এক্সক্লুশন ( রিসোর্স শেয়ার করা যায় না ); ২. হোল্ড অ্যান্ড ওয়েট ( একটি রিসোর্স ধরে রেখে নতুন রিসোর্সের জন্য অপেক্ষা ); ৩. নো প্রিম্পশন ( জোর করে রিসোর্স কেড়ে নেওয়া যায় না ); এবং ৪. সার্কুলার ওয়েট ( বৃত্তাকার চক্রাকারে একে অপরের রিসোর্সের জন্য অপেক্ষা )। যেকোনো ১ টি শর্ত ভেঙে দিলেই ডেডলক প্রতিরোধ করা যায়।'
      },
    },
    {
      q: {
        en: 'What is the difference between User-level Threads and Kernel-level Threads (1:1 vs M:N models)?',
        bn: 'ইউজার-লেভেল থ্রেড এবং কার্নেল-লেভেল থ্রেডের ( ১:১ বনাম M:N মডেল ) মধ্যে পার্থক্য কী?'
      },
      a: {
        en: 'In a 1:1 model (standard POSIX/Linux threads), each application thread maps directly to an OS kernel thread. The kernel schedules them across multiple CPU cores, but context switches require kernel privilege transitions. In an M:N model (Go goroutines, Erlang processes), a user-space runtime multiplexes M lightweight user threads onto N OS kernel threads, achieving ultra-fast microsecond context switching with small initial stack allocations.',
        bn: '১:১ মডেলে ( সাধারণ লিনাক্স থ্রেড ) প্রতিটি অ্যাপ্লিকেশন থ্রেড সরাসরি একটি ওএস কার্নেল থ্রেডের সাথে যুক্ত থাকে। কার্নেল এদের বিভিন্ন সিপিইউ কোরে শিডিউল করে, তবে কনটেক্সট সুইচে কার্নেলে ট্রানজিশনের প্রয়োজন হয়। M:N মডেলে ( যেমন Go goroutines ) একটি ইউজার-স্পেস রানটাইম M সংখ্যক হালকা থ্রেডকে N সংখ্যক কার্নেল থ্রেডের ওপর পরিচালনা করে, যা দ্রুততম কনটেক্সট সুইচ ও ছোট স্ট্যাক সাইজ নিশ্চিত করে।'
      },
    },
  ],
  realWorld: [
    {
      en: 'POSIX Threads (pthreads): The foundational C/C++ Unix threading standard providing low-level primitives for thread creation, mutex synchronization, condition variables, and join mechanics.',
      bn: 'POSIX Threads (pthreads): ইউনিক্স সিস্টেমের ভিত্তিগত সি/সি++ থ্রেডিং স্ট্যান্ডার্ড যা থ্রেড তৈরি, মিউটেক্স সিঙ্ক্রোনাইজেশন, কন্ডিশন ভেরিয়েবল এবং জয়েন অপারেশনের লো-লেভেল সুবিধা দেয়।'
    },
    {
      en: 'Java Concurrency Utilities (java.util.concurrent): Industry-standard enterprise concurrency framework offering thread-safe collections, ForkJoin pools, atomics, and read-write locks.',
      bn: 'জাভা কনকারেন্সি ইউটিলিটিজ: এন্টারপ্রাইজ গ্রেডের বিশ্বস্ত ফ্রেমওয়ার্ক যা থ্রেড-সেফ কালেকশন, ForkJoin পুল, অ্যাটমিক্স এবং রিড-রাইট লকের শক্তিশালী বাস্তবায়ন প্রদান করে।'
    },
    {
      en: 'Go Goroutines & Runtime Scheduler: High-performance green threads managed entirely in user space by Go M:N work-stealing scheduler, featuring lightweight initial stacks and channel communication.',
      bn: 'Go Goroutines ও রানটাইম শিডিউলার: Go ল্যাঙ্গুয়েজের উচ্চগতির গ্রিন থ্রেড যা M:N ওয়ার্ক-স্টিল শিডিউলার, ক্ষুদ্র প্রাথমিক স্ট্যাক এবং চ্যানেলের মাধ্যমে অত্যন্ত দ্রুত কনকারেন্সি চালায়।'
    },
    {
      en: 'Node.js worker_threads: Built-in module enabling JavaScript parallel CPU computation across isolated V8 runtimes communicating via structured-clone MessagePort channels and SharedArrayBuffer.',
      bn: 'Node.js worker_threads: নোড.জেএসের বিল্ট-ইন মডিউল যা পৃথক V8 রানটাইমে জাভাস্ক্রিপ্ট কোড চালিয়ে মাল্টি-কোর সিপিইউর পূর্ণ শক্তি ব্যবহারের সুবিধা দেয়।'
    },
  ],
  lessons: [
    MeetThreadsLesson,
    ThreadsVsProcessesLesson,
    ThreadLifecycleLesson,
    RaceConditionsLesson,
    MutexLocksLesson,
    DeadlocksLesson,
    ThreadPoolsLesson,
    ThreadsCapstoneLesson,
  ],
};
