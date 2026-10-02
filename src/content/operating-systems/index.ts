import type { Hub } from '../../lib/types';
import { MeetOsLesson } from './lessons/meet-os';
import { SystemCallsLesson } from './lessons/system-calls';
import { FilesPermissionsLesson } from './lessons/files-permissions';
import { UsersGroupsLesson } from './lessons/users-groups';
import { SchedulingBasicsLesson } from './lessons/scheduling-basics';
import { VirtualMemoryIntroLesson } from './lessons/virtual-memory-intro';
import { BootProcessLesson } from './lessons/boot-process';
import { OsCapstoneLesson } from './lessons/os-capstone';

export const operatingSystemsHub: Hub = {
  slug: 'operating-systems',
  name: 'Operating Systems',
  icon: '🖥️',
  tagline: {
    en: 'Master computer architecture, kernel dual-mode execution, process scheduling, virtual memory paging, and system call interfaces.',
    bn: 'কম্পিউটার আর্কিটেকচার, কার্নেল ডুয়াল-মোড এক্সিকিউশন, প্রসেস শিডিউলিং, ভার্চুয়াল মেমোরি পেজিং এবং সিস্টেম কল ইন্টারফেস আয়ত্ত করুন।',
  },
  intro: {
    en: 'Operating systems serve as the foundational software layer bridging physical computer hardware and user applications. By abstracting CPU registers, RAM physical addresses, disk controllers, and network devices, the operating system provides hardware multiplexing, memory protection, and preemptive multitasking. This comprehensive curriculum takes you from core kernel abstractions to enterprise concurrency, paging architectures, and production performance.',
    bn: 'অপারেটিং সিস্টেম হলো কম্পিউটার হার্ডওয়্যার এবং ব্যবহারকারীর অ্যাপ্লিকেশনের মধ্যে সেতুবন্ধনকারী প্রধান সফটওয়্যার স্তর। সিপিইউ রেজিস্টার, ফিজিক্যাল র‍্যাম, ডিস্ক কন্ট্রোলার এবং নেটওয়ার্ক ডিভাইসকে বিমূর্ত করে অপারেটিং সিস্টেম হার্ডওয়্যার ব্যবস্থাপনা, মেমোরি সুরক্ষা এবং প্রি-এম্পটিভ মাল্টিটাস্কিং নিশ্চিত করে। এই পূর্ণাঙ্গ কারিকুলাম আপনাকে কার্নেলের মৌলিক ভিত্তি থেকে এন্টারপ্রাইজ কনকারেন্সি, পেজিং আর্কিটেকচার এবং প্রোডাকশন পারফরম্যান্সে পারদর্শী করে তুলবে।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Kernel Architecture & System Calls (Lessons 1–2)',
        bn: 'ধাপ ১ — কার্নেল আর্কিটেকচার এবং সিস্টেম কল (পাঠ ১–২)',
      },
      items: [
        {
          en: 'Operating system definition, dual-mode execution (User Mode vs Kernel Mode), and hardware abstraction',
          bn: 'অপারেটিং সিস্টেমের সংজ্ঞা, ডুয়াল-মোড এক্সিকিউশন (ইউজার মোড বনাম কার্নেল মোড) এবং হার্ডওয়্যার বিমূর্তকরণ',
        },
        {
          en: 'System call interfaces, software traps, CPU register preservation, and standard C library wrappers',
          bn: 'সিস্টেম কল ইন্টারফেস, সফটওয়্যার ট্র্যাপ, সিপিইউ রেজিস্টার সংরক্ষণ এবং স্ট্যান্ডার্ড সি লাইব্রেরি র‍্যাপার',
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Filesystems, Permissions & Multi-Tenant Security (Lessons 3–4)',
        bn: 'ধাপ ২ — ফাইলসিস্টেম, পারমিশন এবং মাল্টি-টেন্যান্ট সিকিউরিটি (পাঠ ৩–৪)',
      },
      items: [
        {
          en: 'Virtual File System (VFS), directory structures, inode tables, and discretionary file permissions',
          bn: 'ভার্চুয়াল ফাইলসিস্টেম (VFS), ডিরেক্টরি কাঠামো, ইনোড টেবিল এবং ফাইল পারমিশন',
        },
        {
          en: 'User identifiers (UIDs), group identifiers (GIDs), process credentials, and multi-tenant access control',
          bn: 'ইউজার আইডেন্টিফায়ার (UID), গ্রুপ আইডেন্টিফায়ার (GID), প্রসেস ক্রেডেনশিয়াল এবং বহু-ব্যবহারকারী অ্যাক্সেস নিয়ন্ত্রণ',
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — CPU Scheduling & Virtual Memory Architecture (Lessons 5–6)',
        bn: 'ধাপ ৩ — সিপিইউ শিডিউলিং এবং ভার্চুয়াল মেমোরি আর্কিটেকচার (পাঠ ৫–৬)',
      },
      items: [
        {
          en: 'Preemptive CPU scheduling, round-robin, multi-level feedback queues, context switching, and CFS',
          bn: 'প্রি-এম্পটিভ সিপিইউ শিডিউলিং, রাউন্ড-রবিন, মাল্টি-লেভেল ফিডব্যাক কিউ, কনটেক্সট সুইচিং এবং CFS',
        },
        {
          en: 'Virtual memory paging, page tables, Translation Lookaside Buffer (TLB), demand paging, and page faults',
          bn: 'ভার্চুয়াল মেমোরি পেজিং, পেজ টেবিল, ট্রান্সলেশন লুকাসাইড বাফার (TLB), ডিমান্ড পেজিং এবং পেজ ফল্ট',
        },
      ],
    },
    {
      title: {
        en: 'Stage 4 — System Boot Sequence & Enterprise Concurrency (Lessons 7–8)',
        bn: 'ধাপ ৪ — সিস্টেম বুট সিকোয়েন্স এবং এন্টারপ্রাইজ কনকারেন্সি (পাঠ ৭–৮)',
      },
      items: [
        {
          en: 'System initialization, firmware POST, GRUB bootloader, kernel decompression, and init sequence',
          bn: 'সিস্টেম ইনিশিয়ালাইজেশন, ফার্মওয়্যার POST, GRUB বুটলোডার, কার্নেল ডিকম্প্রেশন এবং ইনিট সিকোয়েন্স',
        },
        {
          en: 'Concurrency hazards, race conditions, mutual exclusion locks, semaphores, and deadlock prevention',
          bn: 'কনকারেন্সি ঝুঁকি, রেস কন্ডিশন, মিউচুয়াল এক্সক্লুশন লক, সেমাফোর এবং ডেডলক প্রতিরোধ কৌশল',
        },
      ],
    },
  ],
  lessons: [
    MeetOsLesson,
    SystemCallsLesson,
    FilesPermissionsLesson,
    UsersGroupsLesson,
    SchedulingBasicsLesson,
    VirtualMemoryIntroLesson,
    BootProcessLesson,
    OsCapstoneLesson,
  ],
  projects: [
    {
      title: {
        en: 'Preemptive Multitasking & CPU Scheduling Simulator',
        bn: 'প্রি-এম্পটিভ মাল্টিটাস্কিং এবং সিপিইউ শিডিউলিং সিমুলেটর',
      },
      brief: {
        en: 'Implement an in-memory process scheduling engine simulating timer interrupts, process state transitions (Ready, Running, Blocked), priority aging, and context switching across simulated multi-core processors.',
        bn: 'টাইমার ইন্টারাপ্ট, প্রসেসের অবস্থা পরিবর্তন (রেডি, রানিং, ব্লকড), প্রায়োরিটি এজিং এবং মাল্টি-কোর প্রসেসর জুড়ে কনটেক্সট সুইচিং অনুকরণকারী একটি ইন-মেমোরি শিডিউলিং ইঞ্জিন বাস্তবায়ন করুন।',
      },
    },
    {
      title: {
        en: 'Multi-Level Virtual Memory Paging & TLB Cache Simulator',
        bn: 'মাল্টি-লেভেল ভার্চুয়াল মেমোরি পেজিং এবং TLB ক্যাশ সিমুলেটর',
      },
      brief: {
        en: 'Build a two-level virtual page table simulator demonstrating virtual-to-physical address translation, Translation Lookaside Buffer (TLB) hit/miss tracking, and LRU demand page replacement algorithms.',
        bn: 'ভার্চুয়াল থেকে ফিজিক্যাল মেমোরি অ্যাড্রেস রূপান্তর, TLB হিট/মিস ট্র্যাকিং এবং LRU ডিমান্ড পেজ রিপ্লেসমেন্ট অ্যালগরিদম প্রদর্শনকারী একটি দ্বি-স্তরীয় পেজ টেবিল সিমুলেটর তৈরি করুন।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Never execute untrusted user code in privileged kernel mode; always enforce strict dual-mode CPU protection ring separation.',
      bn: 'সুবিধাপ্রাপ্ত কার্নেল মোডে কখনো অনির্ভরযোগ্য ইউজার কোড চালাবেন না; সর্বদা কঠোর ডুয়াল-মোড সিপিইউ সুরক্ষা বিভাজন বজায় রাখুন।',
    },
    {
      en: 'Minimize context switching overhead by batching I/O operations and employing non-blocking event-driven system calls like epoll.',
      bn: 'আই/ও অপারেশনগুলোকে ব্যাচ আকারে পরিচালনা করে এবং নন-ব্লকিং ইভেন্ট-ভিত্তিক সিস্টেম কল ব্যবহার করে কনটেক্সট সুইচিং অপচয় কমিয়ে আনুন।',
    },
    {
      en: 'Acquire multiple synchronization locks in a globally consistent order across all threads to eliminate the circular wait condition for deadlocks.',
      bn: 'ডেডলকের সার্কুলার ওয়েট শর্ত নির্মূল করতে সমস্ত থ্রেড জুড়ে সর্বদা একটি নির্দিষ্ট বিশ্বস্ত ক্রমে একাধিক সিঙ্ক্রোনাইজেশন লক গ্রহণ করুন।',
    },
    {
      en: 'Optimize virtual memory performance by maintaining strong spatial and temporal locality to maximize Translation Lookaside Buffer (TLB) hit ratios.',
      bn: 'ট্রান্সলেশন লুকাসাইড বাফারের (TLB) কার্যকারিতা বাড়াতে ডেটা অ্যাক্সেসে স্থানিক ও কালিক নিকটবর্তীতা বজায় রেখে মেমোরি পারফরম্যান্স অপ্টিমাইজ করুন।',
    },
    {
      en: 'Always clean up child processes by invoking wait() or waitpid() in the parent process to prevent defunct zombie process accumulation.',
      bn: 'প্রসেস টেবিলে অকেজো জম্বি প্রসেসের ভিড় প্রতিরোধ করতে প্যারেন্ট প্রসেস থেকে সর্বদা wait() বা waitpid() কল করে চাইল্ড প্রসেসের অবসান নিশ্চিত করুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the architectural difference between a hardware interrupt and a software trap in an operating system?',
        bn: 'একটি অপারেটিং সিস্টেমে হার্ডওয়্যার ইন্টারাপ্ট এবং সফটওয়্যার ট্র্যাপের মধ্যে কাঠামোগত পার্থক্য কী?',
      },
      a: {
        en: 'A hardware interrupt is an asynchronous electrical signal generated externally by peripheral hardware devices like network cards or timers to request CPU attention, whereas a software trap is a synchronous exception triggered intentionally by CPU instructions, such as executing a system call or encountering a divide-by-zero error.',
        bn: 'হার্ডওয়্যার ইন্টারাপ্ট হলো পেরিফেরাল হার্ডওয়্যার (যেমন নেটওয়ার্ক কার্ড বা টাইমার) দ্বারা তৈরি হওয়া একটি অ্যাসিঙ্ক্রোনাস সিগন্যাল, যেখানে সফটওয়্যার ট্র্যাপ হলো কোডের নিজস্ব নির্দেশ দ্বারা তৈরি হওয়া সিঙ্ক্রোনাস ব্যতিক্রম, যেমন সিস্টেম কল আহ্বান বা শূন্য দিয়ে ভাগের ত্রুটি।',
      },
    },
    {
      q: {
        en: 'How does the Translation Lookaside Buffer (TLB) accelerate virtual-to-physical memory address translation?',
        bn: 'ট্রান্সলেশন লুকাসাইড বাফার (TLB) কীভাবে ভার্চুয়াল থেকে ফিজিক্যাল মেমোরি ঠিকানা রূপান্তরকে দ্রুততর করে?',
      },
      a: {
        en: 'The TLB is an associative hardware cache built directly into the CPU Memory Management Unit (MMU) that stores recent virtual page to physical frame mappings. A TLB hit resolves the memory address in a single clock cycle, avoiding the multiple slow physical memory lookups required to walk multi-level page tables in RAM.',
        bn: 'টিএলবি হলো সিপিইউ মেমোরি ম্যানেজমেন্ট ইউনিটের (MMU) ভেতরে থাকা একটি অত্যন্ত দ্রুতগতির হার্ডওয়্যার ক্যাশ যা সাম্প্রতিক ভার্চুয়াল পেজ ম্যাপিং সংরক্ষণ করে। টিএলবি হিট হলে মাত্র একটি ক্লক সাইকেলে ঠিকানা পাওয়া যায়, ফলে র‍্যামের পেজ টেবিলে বারবার খোঁজার প্রয়োজন হয় না।',
      },
    },
    {
      q: {
        en: 'What are the four Coffman conditions required for a system deadlock to occur, and how do you prevent them?',
        bn: 'সিস্টেমে ডেডলক ঘটার জন্য প্রয়োজনীয় চারটি কফম্যান শর্ত কী কী এবং কীভাবে এগুলো প্রতিরোধ করা যায়?',
      },
      a: {
        en: 'Deadlock requires mutual exclusion, hold and wait, no preemption, and circular wait. Operating systems eliminate deadlocks by breaking at least one condition, most commonly by enforcing a strict global lock hierarchy across all threads to make circular wait impossible.',
        bn: 'ডেডলক ঘটার জন্য চারটি কফম্যান শর্ত পূরণ হতে হয়: মিউচুয়াল এক্সক্লুশন, হোল্ড অ্যান্ড ওয়েট, নো প্রি-এমপশন এবং সার্কুলার ওয়েট। যেকোনো একটি শর্ত দূর করলে ডেডলক সম্পূর্ণরূপে প্রতিরোধ হয়, যার মধ্যে লক অর্ডারিং সবচেয়ে বেশি ব্যবহৃত হয়।',
      },
    },
    {
      q: {
        en: 'What is the fundamental difference between preemptive and cooperative multitasking in operating systems?',
        bn: 'অপারেটিং সিস্টেমে প্রি-এম্পটিভ এবং কোঅপারেটিভ মাল্টিটাস্কিংয়ের মধ্যে মৌলিক পার্থক্য কী?',
      },
      a: {
        en: 'In preemptive multitasking, the operating system kernel utilizes hardware timer interrupts to forcibly suspend running processes and schedule another task, ensuring fair CPU distribution. In cooperative multitasking, processes run uninterrupted until they voluntarily yield CPU control, meaning a rogue loop can freeze the entire host system.',
        bn: 'প্রি-এম্পটিভ মাল্টিটাস্কিংয়ে অপারেটিং সিস্টেম কার্নেল টাইমার ইন্টারাপ্ট ব্যবহার করে চলমান প্রসেসকে জোরপূর্বক থামিয়ে অন্য কাজকে সুযোগ দেয়। কোঅপারেটিভ মাল্টিটাস্কিংয়ে প্রসেস নিজে থেকে না থামা পর্যন্ত চলতেই থাকে, যার ফলে একটি ভুল লুপ পুরো সিস্টেমকে অচল করে দিতে পারে।',
      },
    },
  ],
  realWorld: [
    {
      en: 'strace: Tracing every system call and signal intercepted between a user process and the operating system kernel.',
      bn: 'strace: ইউজার প্রসেস এবং কার্নেলের মধ্যে আদান-প্রদান হওয়া প্রতিটি সিস্টেম কল ও সিগন্যাল পর্যবেক্ষণ করা।',
    },
    {
      en: 'top: Real-time monitoring of CPU scheduling states, context switches, load averages, and memory allocation.',
      bn: 'top: সিপিইউ শিডিউলিং অবস্থা, কনটেক্সট সুইচ, লোড এভারেজ এবং মেমোরি বরাদ্দের রিয়েল-টাইম পর্যবেক্ষণ।',
    },
    {
      en: 'vmstat: Reporting summary statistics for virtual memory, kernel threads, disk block I/O, and CPU activity.',
      bn: 'vmstat: ভার্চুয়াল মেমোরি, কার্নেল থ্রেড, ডিস্ক ব্লক আই/ও এবং সিপিইউ কার্যকলাপের সারসংক্ষেপ প্রতিবেদন তৈরি।',
    },
    {
      en: 'taskset: Setting and retrieving the CPU affinity mask of a process to bind threads to specific hardware cores.',
      bn: 'taskset: নির্দিষ্ট হার্ডওয়্যার কোরে প্রসেসকে স্থায়ীভাবে আবদ্ধ করতে সিপিইউ অ্যাফিনিটি মাস্ক নির্ধারণ করা।',
    },
  ],
};
