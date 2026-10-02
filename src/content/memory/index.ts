import type { Hub } from '../../lib/types';
import { MeetMemoryLesson } from './lessons/meet-memory';
import { RamBasicsLesson } from './lessons/ram-basics';
import { StackHeapLesson } from './lessons/stack-heap';
import { PointersRefsLesson } from './lessons/pointers-refs';
import { GarbageCollectionLesson } from './lessons/garbage-collection';
import { MemoryLeaksLesson } from './lessons/memory-leaks';
import { FragmentationLesson } from './lessons/fragmentation';
import { MemoryCapstoneLesson } from './lessons/memory-capstone';

export const memoryHub: Hub = {
  slug: 'memory',
  name: 'Memory Management & Systems Architecture',
  icon: '🧠',
  tagline: {
    en: 'Master computer memory systems: physical DRAM, virtual address spaces, stack versus heap execution, pointers, allocator fragmentation, and garbage collection.',
    bn: 'কম্পিউটার মেমোরি সিস্টেম গভীরভাবে আয়ত্ত করুন: ফিজিক্যাল DRAM, ভার্চুয়াল অ্যাড্রেস স্পেস, স্ট্যাক বনাম হিপ এক্সিকিউশন, পয়েন্টার, অ্যালকেটর ফ্র্যাগমেন্টেশন এবং গার্বেজ কালেকশন।',
  },
  intro: {
    en: 'A comprehensive beginner-to-expert guide to computer memory architecture and runtime memory management. Understand how operating systems virtualize hardware RAM into isolated 64-bit address spaces using page tables and TLBs. Explore physical DRAM capacitor refresh cycles, contrast stack allocation speed against dynamic heap flexibility, analyze pointer dereferencing and buffer hazards, prevent memory leaks, and master modern garbage collection runtimes.',
    bn: 'কম্পিউটার মেমোরি আর্কিটেকচার এবং রানটাইম মেমোরি ব্যবস্থাপনার একটি বিশদ প্রাথমিক থেকে বিশেষজ্ঞ স্তরের নির্দেশিকা। অপারেটিং সিস্টেম কীভাবে পেজ টেবিল এবং TLB ব্যবহার করে ফিজিক্যাল র‍্যামকে পৃথক ৬৪-বিট অ্যাড্রেস স্পেসে রূপান্তর করে তা জানুন। ফিজিক্যাল DRAM ক্যাপাসিটরের রিফ্রেশ সাইকেল, দ্রুতগতির স্ট্যাক অ্যালকেশনের সাথে ডায়নামিক হিপের তুলনা, পয়েন্টার রেফারেন্সিং ও বাফার ঝুঁকি, মেমোরি লিক প্রতিরোধ এবং আধুনিক গার্বেজ কালেকশন রানটাইম বিস্তারিতভাবে শিখুন।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Memory Virtualization & Physical RAM (Lessons 1–2)',
        bn: 'ধাপ ১ — মেমোরি ভার্চুয়ালাইজেশন এবং ফিজিক্যাল র‍্যাম (পাঠ ১–২)'
      },
      items: [
        {
          en: 'Virtual Memory Architecture: Page Tables, MMU Translation, and 4KB Page Frames',
          bn: 'ভার্চুয়াল মেমোরি আর্কিটেকচার: পেজ টেবিল, MMU রূপান্তর এবং ৪ কিলোবাইট পেজ ফ্রেম'
        },
        {
          en: 'Physical RAM Basics: DRAM Capacitor Cells, CAS Latency, and DDR Channel Bandwidth',
          bn: 'ফিজিক্যাল র‍্যামের মূল ভিত্তি: DRAM ক্যাপাসিটর সেল, CAS লেটেন্সি এবং DDR চ্যানেল ব্যান্ডউইথ'
        },
        {
          en: 'Milestone: Calculate virtual-to-physical address translation offsets and DRAM refresh timings',
          bn: 'মাইলফলক: ভার্চুয়াল থেকে ফিজিক্যাল অ্যাড্রেস অফসেট এবং DRAM রিফ্রেশ টাইমিং গণনা'
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Stack Execution, Heap Allocation & Pointers (Lessons 3–4)',
        bn: 'ধাপ ২ — স্ট্যাক এক্সিকিউশন, হিপ অ্যালকেশন এবং পয়েন্টার (পাঠ ৩–৪)'
      },
      items: [
        {
          en: 'Stack versus Heap: CPU Stack Pointer Movement, Activation Frames, and Dynamic Heaps',
          bn: 'স্ট্যাক বনাম হিপ: সিপিইউ স্ট্যাক পয়েন্টার নিয়ন্ত্রণ, অ্যাক্টিভেশন ফ্রেম এবং ডায়নামিক হিপ'
        },
        {
          en: 'Pointers & References: Raw Addresses, Dereferencing, Use-After-Free, and Dangling Pointers',
          bn: 'পয়েন্টার এবং রেফারেন্স: মেমোরি অ্যাড্রেসিং, ডিরেফারেন্সিং, ইউজ-আফটার-ফ্রি এবং ড্যাংলিং পয়েন্টার'
        },
        {
          en: 'Milestone: Inspect stack frame push/pop cycles and trace pointer memory addresses in debugger',
          bn: 'মাইলফলক: ডিবাগারে স্ট্যাক ফ্রেম পুশ/পপ পর্যবেক্ষণ এবং পয়েন্টার মেমোরি ঠিকানা ট্র্যাকিং'
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Garbage Collection & Memory Leaks (Lessons 5–6)',
        bn: 'ধাপ ৩ — গার্বেজ কালেকশন এবং মেমোরি লিক (পাঠ ৫–৬)'
      },
      items: [
        {
          en: 'Automatic Reclamation: Tracing Mark-and-Sweep, Reference Counting, and Generational GC',
          bn: 'স্বয়ংক্রিয় পুনরুদ্ধার: ট্রেসিং মার্ক-অ্যান্ড-সুইপ, রেফারেন্স কাউন্টিং এবং জেনারেশনাল GC'
        },
        {
          en: 'Memory Leaks: Unclosed Event Listeners, Retained Closures, and Global Cache Leaks',
          bn: 'মেমোরি লিক: অমুক্ত ইভেন্ট লিসেনার, রিটেইনড ক্লোজার এবং গ্লোবাল ক্যাশ লিক'
        },
        {
          en: 'Milestone: Profile and isolate retained memory leaks using Chrome DevTools Heap Snapshots',
          bn: 'মাইলফলক: ক্রোম ডেভটুলস হিপ স্ন্যাপশট ব্যবহার করে মেমোরি লিক শনাক্ত ও প্রতিকার'
        },
      ],
    },
    {
      title: {
        en: 'Stage 4 — Allocator Fragmentation & Systems Capstone (Lessons 7–8)',
        bn: 'ধাপ ৪ — অ্যালকেটর ফ্র্যাগমেন্টেশন এবং সিস্টেম ক্যাপস্টোন (পাঠ ৭–৮)'
      },
      items: [
        {
          en: 'Fragmentation: Internal versus External Fragmentation, Free Lists, and Slab Allocators',
          bn: 'ফ্র্যাগমেন্টেশন: ইন্টারনাল বনাম এক্সটারনাল ফ্র্যাগমেন্টেশন, ফ্রি লিস্ট এবং স্ল্যাব অ্যালকেটর'
        },
        {
          en: 'Production Capstone: Architecture Synthesis, Mechanical Sympathy, and Zero-Copy I/O',
          bn: 'প্রোডাকশন ক্যাপস্টোন: আর্কিটেকচার সমন্বয়, মেকানিক্যাল সিম্প্যাথি এবং জিরো-কপি I/O'
        },
        {
          en: 'Capstone Project: Architect and benchmark a high-throughput, low-fragmentation memory pool',
          bn: 'ক্যাপস্টোন প্রকল্প: উচ্চ থ্রুপুট ও নিম্ন ফ্র্যাগমেন্টেশনযুক্ত মেমোরি পুল ডিজাইন ও বেঞ্চমার্ক'
        },
      ],
    },
  ],
  lessons: [
    MeetMemoryLesson,
    RamBasicsLesson,
    StackHeapLesson,
    PointersRefsLesson,
    GarbageCollectionLesson,
    MemoryLeaksLesson,
    FragmentationLesson,
    MemoryCapstoneLesson,
  ],
  projects: [
    {
      title: {
        en: 'Project 1 — High-Throughput Fixed-Size Slab Memory Pool',
        bn: 'প্রজেক্ট ১ — উচ্চ থ্রুপুট বিশিষ্ট ফিক্সড-সাইজ স্ল্যাব মেমোরি পুল'
      },
      brief: {
        en: 'Build a production C++ or Node.js Buffer memory pool allocator that pre-allocates contiguous memory slabs. Eliminate external fragmentation and reduce allocation latency from 120 nanoseconds down to 4 nanoseconds for high-frequency network packet buffers.',
        bn: 'সি++ বা নোড.জেএস বাফার মেমোরি পুল অ্যালকেটর তৈরি করুন যা আগে থেকেই মেমোরি স্ল্যাব প্রস্তুত করে রাখে। এক্সটারনাল ফ্র্যাগমেন্টেশন দূর করুন এবং হাই-ফ্রিকোয়েন্সি নেটওয়ার্ক প্যাকেটের জন্য অ্যালকেশন বিলম্ব ১২০ ন্যানোসেকেন্ড থেকে কমিয়ে ৪ ন্যানোসেকেন্ডে আনুন।',
      },
    },
    {
      title: {
        en: 'Project 2 — Enterprise Heap Profiler & Leak Detector',
        bn: 'প্রজেক্ট ২ — এন্টারপ্রাইজ হিপ প্রোফাইলার এবং লিক ডিটেক্টর'
      },
      brief: {
        en: 'Instrument a long-running Node.js or Go microservice to capture heap snapshots under synthetic stress. Isolate accidental retaining paths caused by uncleaned event listeners and detached DOM nodes, restoring memory baseline back to steady state.',
        bn: 'সিন্থেটিক ট্রাফিকের অধীনে হিপ স্ন্যাপশট ধারণ করার জন্য একটি দীর্ঘমেয়াদী নোড.জেএস বা গো মাইক্রোসার্ভিস বিশ্লেষণ করুন। অবমুক্ত ইভেন্ট লিসেনার ও বিচ্ছিন্ন নোডের কারণে আটকে থাকা অবজেক্ট শনাক্ত করে মেমোরি বেসলাইন স্বাভাবিক অবস্থায় ফিরিয়ে আনুন।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Prefer stack allocations and contiguous flat arrays over pointer-chasing heap objects to maximize CPU L1 cache line utilization.',
      bn: 'সিপিইউ L1 ক্যাশ লাইনের সর্বোচ্চ সুবিধা নিতে বিচ্ছিন্ন হিপ অবজেক্টের চেয়ে স্ট্যাক অ্যালকেশন ও পাশাপাশি সাজানো ফ্ল্যাট অ্যারেকে প্রাধান্য দিন।'
    },
    {
      en: 'Always unregister event listeners, clear setInterval timers, and nullify global cache references to prevent permanent heap memory leaks.',
      bn: 'স্থায়ী হিপ মেমোরি লিক প্রতিরোধ করতে সর্বদা ইভেন্ট লিসেনার আনরেজিস্টার করুন, setInterval টাইমার বাতিল করুন এবং অপ্রয়োজনীয় রেফারেন্স মুক্ত করুন।'
    },
    {
      en: 'Size long-lived collections with upfront capacity allocations to eliminate expensive dynamic array reallocations and memory churn.',
      bn: 'বারবার ডায়নামিক অ্যারে মেমোরি রিস্ট্রাকচারিং ও অপচয় রোধ করতে দীর্ঘস্থায়ী কালেকশন তৈরির সময় শুরুতেই নির্দিষ্ট সাইজ বরাদ্দ করুন।'
    },
    {
      en: 'Use specialized memory allocators like jemalloc or TCMalloc for multi-threaded services to eliminate global heap lock contention.',
      bn: 'মাল্টি-থ্রেডেড সার্ভিসের ক্ষেত্রে গ্লোবাল হিপ লক কনটেনশন এড়াতে jemalloc বা TCMalloc এর মতো বিশেষায়িত মেমোরি অ্যালকেটর ব্যবহার করুন।'
    },
    {
      en: 'Profile applications under production-scale loads with AddressSanitizer and Valgrind to catch use-after-free and dangling pointer defects.',
      bn: 'ইউজ-আফটার-ফ্রি এবং ড্যাংলিং পয়েন্টার ত্রুটি শনাক্ত করতে প্রোডাকশন লোডে AddressSanitizer বা Valgrind দিয়ে কোড পরীক্ষা করুন।'
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the precise structural difference between Stack memory and Heap memory during program execution?',
        bn: 'প্রোগ্রাম চলাকালীন স্ট্যাক মেমোরি এবং হিপ মেমোরির মধ্যে সুনির্দিষ্ট কাঠামোগত পার্থক্য কী?'
      },
      a: {
        en: 'Stack memory is a rigid, contiguous LIFO (Last-In-First-Out) memory structure managed automatically by the CPU via the Stack Pointer register. Allocation and deallocation require only a single CPU instruction (incrementing or decrementing the pointer), providing sub-nanosecond speed, but sizes must be known at compile time. Heap memory is a flexible, dynamic memory region managed by an allocator. Objects can persist across function calls and have runtime-determined sizes, but allocations require metadata searching, lock synchronization, and explicit deallocation or garbage collection.',
        bn: 'স্ট্যাক মেমোরি হলো একটি সুশৃঙ্খল, ধারাবাহিক LIFO মেমোরি কাঠামো যা সিপিইউর স্ট্যাক পয়েন্টার রেজিস্টার দ্বারা স্বয়ংক্রিয়ভাবে পরিচালিত হয়। পয়েন্টার বাড়ানো বা কমানোর মাধ্যমে মাত্র ১ টি সিপিইউ নির্দেশে এটি অতি দ্রুতগতিতে কাজ করে, তবে কম্পাইল সময়ে এর আকার জানা থাকতে হয়। অন্যদিকে হিপ মেমোরি হলো একটি নমনীয়, ডায়নামিক অঞ্চল। এখানে অবজেক্টগুলো ফাংশন শেষ হওয়ার পরেও টিকে থাকতে পারে এবং রানটাইমে আকার পরিবর্তিত হতে পারে, তবে এতে মেমোরি খোঁজা, লক সমন্বয় ও ম্যানুয়াল বা স্বয়ংক্রিয় গার্বেজ কালেকশনের প্রয়োজন হয়।'
      },
    },
    {
      q: {
        en: 'How does the Memory Management Unit (MMU) translate a 64-bit Virtual Address into a Physical RAM address?',
        bn: 'মেমোরি ম্যানেজমেন্ট ইউনিট (MMU) কীভাবে একটি ৬৪-বিট ভার্চুয়াল অ্যাড্রেসকে ফিজিক্যাল র‍্যামের ঠিকানায় রূপান্তর করে?'
      },
      a: {
        en: 'The CPU MMU splits the virtual address into a Virtual Page Number (VPN) and an offset (typically 12 bits for a standard 4KB page). The MMU first checks the Translation Lookaside Buffer (TLB), an ultra-fast on-chip associative cache. If a TLB hit occurs (under 1 nanosecond), the Physical Frame Number (PFN) is retrieved immediately. On a TLB miss, the MMU performs a multi-level page table walk through DRAM memory tables (CR3 register in x86-64), maps the VPN to the physical frame, and appends the unchanged 12-bit offset to form the physical address.',
        bn: 'সিপিইউর MMU ভার্চুয়াল ঠিকানাকে একটি ভার্চুয়াল পেজ নম্বর (VPN) এবং একটি অফসেটে ( সাধারণ ৪ কিলোবাইট পেজের জন্য ১২ বিট ) বিভক্ত করে। MMU প্রথমে অন-চিপ উচ্চগতির TLB ক্যাশ পরীক্ষা করে। TLB হিট হলে ১ ন্যানোসেকেন্ডেরও কম সময়ে ফিজিক্যাল ফ্রেম নম্বর (PFN) পাওয়া যায়। TLB মিস ঘটলে MMU ড্রাম মেমোরিতে বহুস্তরী পেজ টেবিল অনুসন্ধান চালায়, ভার্চুয়াল পেজকে ফিজিক্যাল ফ্রেমে ম্যাপ করে এবং অপরিবর্তিত ১২-বিট অফসেট যুক্ত করে আসল ফিজিক্যাল ঠিকানা প্রস্তুত করে।'
      },
    },
    {
      q: {
        en: 'What causes a Memory Leak in garbage-collected runtimes like JavaScript (V8), Java, or Python?',
        bn: 'জাভাস্ক্রিপ্ট (V8), জাভা বা পাইথনের মতো গার্বেজ-কালেক্টেড রানটাইমে মেমোরি লিক হওয়ার মূল কারণ কী?'
      },
      a: {
        en: 'In garbage-collected environments, developers cannot directly forget to "free" memory. Instead, memory leaks occur when an application unintentionally maintains a persistent reference path from a Root Object (such as the global window, active closures, or process-wide caches) to an allocated object that is no longer needed. Because the garbage collector traces reachability from roots, any object connected to a root cannot be reclaimed, gradually exhausting available system memory.',
        bn: 'গার্বেজ-কালেক্টেড পরিবেশে মেমোরি মুক্ত করতে সরাসরি "ভুলে যাওয়ার" সুযোগ নেই। বরং মেমোরি লিক ঘটে যখন কোনো অ্যাপ্লিকেশন অনিচ্ছাকৃতভাবে রুট অবজেক্ট ( যেমন গ্লোবাল অবজেক্ট, সক্রিয় ক্লোজার বা ক্যাশ ) থেকে অপ্রয়োজনীয় অবজেক্টের দিকে একটি স্থায়ী রেফারেন্স ধরে রাখে। যেহেতু গার্বেজ কালেক্টর রুট থেকে পৌঁছানো যায় এমন অবজেক্ট শনাক্ত করে মেমোরি রক্ষা করে, তাই রুট সংযুক্ত অবজেক্টগুলো কখনোই ডিলিট হয় না এবং ধীরে ধীরে পুরো মেমোরি গ্রাস করে ফেলে।'
      },
    },
    {
      q: {
        en: 'What is the operational difference between Internal Fragmentation and External Fragmentation in memory allocators?',
        bn: 'মেমোরি অ্যালকেটরে ইন্টারনাল ফ্র্যাগমেন্টেশন এবং এক্সটারনাল ফ্র্যাগমেন্টেশনের মধ্যে কাজের পার্থক্য কী?'
      },
      a: {
        en: 'Internal fragmentation occurs when memory is allocated in fixed block sizes (such as power-of-two slabs or 4KB pages): if a process requests 33 bytes and receives a 64-byte block, the unused 31 bytes inside the allocated chunk sit wasted. External fragmentation occurs when dynamic allocations and deallocations leave tiny free blocks scattered across the heap. Although the total sum of free memory may be massive, an allocation request for a large contiguous buffer fails because no single contiguous block exists.',
        bn: 'ইন্টারনাল ফ্র্যাগমেন্টেশন ঘটে যখন মেমোরি নির্দিষ্ট আকারের ব্লকে বরাদ্দ করা হয় ( যেমন ৪ কিলোবাইট পেজ বা স্ল্যাব ): কোনো প্রোগ্রাম যদি ৩৩ বাইট চেয়ে ৬৪ বাইটের ব্লক পায়, তবে ব্লকের ভেতরের অব্যবহৃত ৩১ বাইট নষ্ট হয়। অন্যদিকে এক্সটারনাল ফ্র্যাগমেন্টেশন ঘটে যখন বারবার মেমোরি বরাদ্দ ও মুক্ত করার ফলে হিপজুড়ে ছোট ছোট ফাঁকা মেমোরি খণ্ড ছড়িয়ে থাকে। সামগ্রিকভাবে প্রচুর মেমোরি ফাঁকা থাকা সত্ত্বেও একসাথে কোনো বড় ধারাবাহিক ব্লক না থাকায় নতুন অ্যালকেশন ব্যর্থ হয়।'
      },
    },
    {
      q: {
        en: 'Why do modern high-performance microprocessors require periodic DRAM capacitor refresh cycles?',
        bn: 'আধুনিক উচ্চক্ষমতাসম্পন্ন মাইক্রোপ্রসেসরে কেন নির্দিষ্ট সময় পর পর DRAM ক্যাপাসিটর রিফ্রেশ সাইকেলের প্রয়োজন হয়?'
      },
      a: {
        en: 'Dynamic RAM (DRAM) stores each individual bit of data as an electrical charge inside a microscopic capacitor paired with a single MOSFET transistor. Because sub-nanoscale capacitors naturally leak electrical charge through dielectric leakage within tens of milliseconds, the memory controller must periodically read and recharge every memory row (typically every 64 milliseconds under JEDEC standards). If a row is not refreshed in time, its voltage drops and stored binary data flips, corrupting program execution.',
        bn: 'ডায়নামিক র‍্যাম (DRAM) প্রতিটি বাইনারি বিট ডাটাকে একটি মসফেট ট্রানজিস্টরের সাথে যুক্ত অতি ক্ষুদ্র ক্যাপাসিটরে বৈদ্যুতিক চার্জ হিসেবে জমা রাখে। ন্যানোস্কেল ক্যাপাসিটরগুলো থেকে কয়েক মিলিমিটারের ভেতর চার্জ বের হয়ে ক্ষয়প্রাপ্ত হওয়ার কারণে মেমোরি কন্ট্রোলারকে প্রতি নির্দিষ্ট সময় পর পর ( সাধারণ JEDEC মানদণ্ডে প্রতি ৬৪ মিলিসেকেন্ডে ) প্রতিটি মেমোরি রো পুনরায় রিচার্জ করতে হয়। সময়মতো রিফ্রেশ না হলে ভোল্টেজ কমে বাইনারি মান নষ্ট হয়ে যায়।'
      },
    },
  ],
  realWorld: [
    {
      en: 'Valgrind & AddressSanitizer (ASan): The gold-standard debugging instrumentations for detecting out-of-bounds array reads, use-after-free bugs, and heap memory leaks in systems programming.',
      bn: 'Valgrind এবং AddressSanitizer (ASan): সিস্টেম প্রোগ্রামিংয়ে বাফার উপচে পড়া, ইউজ-আফটার-ফ্রি এবং হিপ মেমোরি লিক শনাক্ত করার জন্য বিশ্বমানের ডায়াগনস্টিক টুল।'
    },
    {
      en: 'jemalloc & TCMalloc: Advanced multi-threaded slab memory allocators developed by FreeBSD/Facebook and Google that minimize lock contention and heap fragmentation in massive scale backend services.',
      bn: 'jemalloc এবং TCMalloc: ফেসবুক ও গুগল কর্তৃক উদ্ভাবিত মাল্টি-থ্রেডেড স্ল্যাব মেমোরি অ্যালকেটর, যা বৃহৎ ব্যাকএন্ড সার্ভিসে হিপ লক কনটেনশন ও ফ্র্যাগমেন্টেশন হ্রাস করে।'
    },
    {
      en: 'V8 Orinoco & Oilpan GC: High-performance generational, incremental, and concurrent garbage collectors powering Node.js and Google Chrome to eliminate user-visible browser lag spikes.',
      bn: 'V8 Orinoco এবং Oilpan GC: গুগল ক্রোম ও নোড.জেএস চালিত উচ্চগতির জেনারেশনাল ও কনকারেন্ট গার্বেজ কালেক্টর, যা ব্রাউজার ল্যাগ দূর করে মসৃণ গতি নিশ্চিত করে।'
    },
  ],
};
