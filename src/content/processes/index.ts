import type { Hub } from '../../lib/types';
import { MeetProcessesLesson } from './lessons/meet-processes';
import { ProcessLifecycleLesson } from './lessons/process-lifecycle';
import { ForkExecLesson } from './lessons/fork-exec';
import { ProcessStatesLesson } from './lessons/process-states';
import { ZombieOrphanLesson } from './lessons/zombie-orphan';
import { SignalsIpcLesson } from './lessons/signals-ipc';
import { ProcessSchedulingLesson } from './lessons/process-scheduling';
import { ProcessesCapstoneLesson } from './lessons/processes-capstone';

export const processesHub: Hub = {
  slug: 'processes',
  name: 'Processes & OS Concurrency',
  icon: '⚙️',
  tagline: {
    en: 'Master operating system processes, Process Control Blocks, fork-exec lifecycle, IPC channels, and CPU scheduling algorithms.',
    bn: 'অপারেটিং সিস্টেম প্রসেস, প্রসেস কন্ট্রোল ব্লক, fork-exec জীবনচক্র, IPC চ্যানেল এবং সিপিইউ শিডিউলিং অ্যালগরিদম গভীরভাবে আয়ত্ত করুন।',
  },
  intro: {
    en: 'Discover how operating systems isolate and execute concurrent programs. Explore Process Control Blocks (PCB), fork and exec system calls, the five process execution states, Zombie and Orphan handling, Unix signals and inter-process communication (IPC), and CPU scheduling algorithms including Round Robin and CFS.',
    bn: 'অপারেটিং সিস্টেম কীভাবে কনকারেন্ট প্রোগ্রামগুলোকে আইসোলেট ও পরিচালনা করে তা আবিষ্কার করুন। প্রসেস কন্ট্রোল ব্লক (PCB), fork ও exec সিস্টেম কল, ৫ টি প্রসেস এক্সিকিউশন স্টেট, জম্বি ও অরফান হ্যান্ডলিং, ইউনিক্স সিগন্যাল ও ইন্টার-প্রসেস কমিউনিকেশন (IPC) এবং Round Robin ও CFS সহ প্রধান সিপিইউ শিডিউলিং অ্যালগরিদম শিখুন।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Foundations: PCBs & Memory Isolation (L1–L2)',
        bn: 'ধাপ ১ — ভিত্তি: PCB এবং মেমোরি আইসোলেশন (পাঠ ১–২)'
      },
      items: [
        {
          en: 'Operating system processes, PIDs, and Process Control Blocks (PCB)',
          bn: 'অপারেটিং সিস্টেম প্রসেস, PID এবং প্রসেস কন্ট্রোল ব্লক (PCB)'
        },
        {
          en: 'Process creation lifecycle: program binary to executing virtual address space',
          bn: 'প্রসেস তৈরির জীবনচক্র: বাইনারি থেকে সক্রিয় ভার্চুয়াল অ্যাড্রেস স্পেস'
        },
        {
          en: 'Practical inspection using ps, top, and the Linux /proc filesystem',
          bn: 'ps, top এবং লিনাক্স /proc ফাইলসিস্টেমের মাধ্যমে সরাসরি প্রসেস পর্যবেক্ষণ'
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Process Spawning: Fork, Exec & State Machines (L3–L4)',
        bn: 'ধাপ ২ — প্রসেস সৃষ্টি: Fork, Exec এবং স্টেট মেশিন (পাঠ ৩–৪)'
      },
      items: [
        {
          en: 'The fork() system call, Copy-On-Write (COW) memory, and the execve() family',
          bn: 'fork() সিস্টেম কল, কপি-অন-রাইট (COW) মেমোরি এবং execve() পরিবার'
        },
        {
          en: 'The 5 process execution states: New, Ready, Running, Waiting, and Terminated',
          bn: '৫ টি প্রসেস এক্সিকিউশন স্টেট: New, Ready, Running, Waiting এবং Terminated'
        },
        {
          en: 'Hardware context switches, CPU register state saving, and scheduling overhead',
          bn: 'হার্ডওয়্যার কনটেক্সট সুইচ, সিপিইউ রেজিস্টার স্টেট সংরক্ষণ এবং ওভারহেড'
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Clean Termination & Inter-Process Communication (L5–L6)',
        bn: 'ধাপ ৩ — সমাপ্তি এবং ইন্টার-প্রসেস কমিউনিকেশন (পাঠ ৫–৬)'
      },
      items: [
        {
          en: 'Zombie processes, waitpid() reaping, Orphan adoption by PID 1 (systemd/init)',
          bn: 'জম্বি প্রসেস, waitpid() রিপিং এবং PID ১ (systemd/init) দ্বারা অরফান প্রসেস গ্রহণ'
        },
        {
          en: 'POSIX signals: SIGINT, SIGTERM, SIGKILL, SIGCHLD, and graceful shutdowns',
          bn: 'পসিক্স সিগন্যাল: SIGINT, SIGTERM, SIGKILL, SIGCHLD এবং গ্রেসফুল শাটডাউন'
        },
        {
          en: 'Inter-process communication: Anonymous pipes, UNIX domain sockets, and shared memory',
          bn: 'ইন্টার-প্রসেস কমিউনিকেশন: অ্যানোনিমাস পাইপ, ইউনিক্স ডোমেন সকেট এবং শেয়ার্ড মেমোরি'
        },
      ],
    },
    {
      title: {
        en: 'Stage 4 — CPU Scheduling & Production Process Supervisor Capstone (L7–L8)',
        bn: 'ধাপ ৪ — সিপিইউ শিডিউলিং এবং প্রসেস সুপারভাইজার ক্যাপস্টোন (পাঠ ৭–৮)'
      },
      items: [
        {
          en: 'CPU scheduling algorithms: First-Come First-Served, Round Robin, and Linux CFS',
          bn: 'সিপিইউ শিডিউলিং অ্যালগরিদম: First-Come First-Served, Round Robin এবং লিনাক্স CFS'
        },
        {
          en: 'Building a production-ready Node.js process supervisor with auto-restart and telemetry',
          bn: 'স্বয়ংক্রিয় রিস্টার্ট ও টেলিমেট্রি সহ প্রোডাকশন-গ্রেড Node.js প্রসেস সুপারভাইজার নির্মাণ'
        },
        {
          en: 'Mastery of cgroups, namespaces, and modern container process isolation',
          bn: 'cgroups, namespaces এবং আধুনিক কন্টেইনার প্রসেস আইসোলেশনে দক্ষতা'
        },
      ],
    },
  ],
  projects: [
    {
      title: {
        en: 'Process Control Block (PCB) & State Machine Simulator',
        bn: 'প্রসেস কন্ট্রোল ব্লক (PCB) এবং স্টেট মেশিন সিমুলেটর'
      },
      description: {
        en: 'Build a deterministic operating system process simulator tracking PID, registers, priority, state transitions, and context switch costs in Node.js.',
        bn: 'Node.js-এ PID, রেজিস্টার, প্রায়োরিটি, স্টেট পরিবর্তন এবং কনটেক্সট সুইচের খরচ পরিচালনাকারী একটি অপারেটিং সিস্টেম সিমুলেটর তৈরি করুন।'
      },
      difficulty: 'intermediate',
      topics: ['pcb', 'process-states', 'context-switching', 'cpu-registers'],
    },
    {
      title: {
        en: 'Production Process Supervisor with Health Checks & Heartbeats',
        bn: 'হেলথ চেক ও হার্টবিট বিশিষ্ট প্রোডাকশন প্রসেস সুপারভাইজার'
      },
      description: {
        en: 'Develop an automated child process manager (similar to PM2) that spawns worker clusters, monitors health heartbeats, handles SIGTERM gracefully, and reaps zombies.',
        bn: 'একটি স্বয়ংক্রিয় চাইল্ড প্রসেস ম্যানেজার ( PM2 এর মতো ) তৈরি করুন যা ওয়ার্কার ক্লাস্টার চালায়, হার্টবিট পর্যবেক্ষণ করে, SIGTERM পরিচালনা করে এবং জম্বি পরিষ্কার করে।'
      },
      difficulty: 'advanced',
      topics: ['fork-exec', 'zombie-reaping', 'posix-signals', 'cluster-management'],
    },
    {
      title: {
        en: 'Multi-Core CPU Scheduling Engine (Round Robin & Priority)',
        bn: 'মাল্টি-কোর সিপিইউ শিডিউলিং ইঞ্জিন (Round Robin ও Priority)'
      },
      description: {
        en: 'Implement a comprehensive CPU scheduler simulation comparing FCFS, Shortest Job First, Round Robin time-slicing, and Linux Completely Fair Scheduler (CFS) virtual runtime trees.',
        bn: 'FCFS, Shortest Job First, Round Robin টাইম-স্লাইসিং এবং লিনাক্স Completely Fair Scheduler (CFS) এর ভার্চুয়াল রানটাইম ট্রি তুলনা করার একটি শিডিউলার ইঞ্জিন বাস্তবায়ন করুন।'
      },
      difficulty: 'advanced',
      topics: ['scheduling-algorithms', 'round-robin', 'cfs-red-black-tree', 'latency-analysis'],
    },
  ],
  bestPractices: [
    {
      en: 'Always intercept SIGTERM and SIGINT for graceful shutdown: stop accepting new requests, drain transactions, and terminate workers cleanly within the grace window.',
      bn: 'গ্রেসফুল শাটডাউনের জন্য সর্বদা SIGTERM ও SIGINT হ্যান্ডেল করুন: নতুন রিকোয়েস্ট নেওয়া বন্ধ করুন, ট্রানজ্যাকশন শেষ করুন এবং নির্দিষ্ট সময়ের মধ্যে প্রসেস বন্ধ করুন।'
    },
    {
      en: 'Always reap child processes by handling the SIGCHLD signal with waitpid(-1, &status, WNOHANG) to prevent process table exhaustion from zombie accumulation.',
      bn: 'জম্বি জমার কারণে প্রসেস টেবিল পূর্ণ হওয়া রোধ করতে সর্বদা SIGCHLD সিগন্যালে waitpid(-1, &status, WNOHANG) হ্যান্ডেল করে চাইল্ড প্রসেসের অবশিষ্টাংশ পরিষ্কার করুন।'
    },
    {
      en: 'The fork() system call shares physical pages between parent and child via Copy-On-Write (COW). Avoid mutating large shared structures immediately after forking to prevent page duplications.',
      bn: 'fork() সিস্টেম কল প্যারেন্ট ও চাইল্ডের মাঝে কপি-অন-রাইট (COW) এর মাধ্যমে মেমোরি পেজ শেয়ার করে। ফর্কের পরপরই বড় শেয়ার্ড ডাটা মিউটেট করা এড়িয়ে চলুন যাতে অপ্রয়োজনীয় পেজ কপি না হয়।'
    },
    {
      en: 'Use execve() with explicit arguments and sanitized environments rather than unsafe shell wrappers like system(), preventing command injection vulnerabilities.',
      bn: 'system() এর মতো অনিরাপদ ফাংশন পরিহার করে execve() ব্যবহার করুন যাতে পরিবেশ ভেরিয়েবল নিরাপদ থাকে এবং কমান্ড ইনজেকশন আক্রমণ প্রতিরোধ করা যায়।'
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the technical distinction between a Process and a Thread?',
        bn: 'একটি প্রসেস এবং একটি থ্রেডের মধ্যে প্রযুক্তিগত পার্থক্য কী?'
      },
      a: {
        en: 'A Process is an independent execution unit with its own private virtual address space, file descriptor table, and security credentials. A Thread is a lightweight dispatch unit that lives inside a process, sharing its heap memory, code, and global resources with sibling threads while maintaining its own private stack and CPU registers.',
        bn: 'প্রসেস হলো একটি সম্পূর্ণ স্বাধীন এক্সিকিউশন ইউনিট যার নিজস্ব ভার্চুয়াল অ্যাড্রেস স্পেস, ফাইল ডেসক্রিপ্টর টেবিল এবং নিরাপত্তা ব্যবস্থা থাকে। অপরদিকে, থ্রেড হলো প্রসেসের ভেতরের একটি ক্ষুদ্র ডিসপ্যাচ ইউনিট, যা সহোদর থ্রেডগুলোর সাথে একই হিপ মেমোরি ও কোড শেয়ার করে কিন্তু নিজস্ব স্ট্যাক ও সিপিইউ রেজিস্টার বজায় রাখে।'
      },
    },
    {
      q: {
        en: 'How does Copy-On-Write (COW) optimize the fork() system call?',
        bn: 'কপি-অন-রাইট (COW) কীভাবে fork() সিস্টেম কলকে অপ্টিমাইজ করে?'
      },
      a: {
        en: 'Instead of duplicating physical RAM when creating a child process, fork() marks memory pages as read-only and shares them between parent and child. Only when either process writes to a page does the CPU MMU trigger a page fault, duplicating that single 4KB page frame.',
        bn: 'চাইল্ড প্রসেস তৈরির সময় র‍্যামের ডাটা হুবহু কপি করার বদলে fork() মেমোরি পেজগুলোকে রিড-অনলি হিসেবে চিহ্নিত করে প্যারেন্ট ও চাইল্ডের মাঝে শেয়ার করে। কেবল যখন কোনো প্রসেস কোনো পেজে কিছু লিখতে যায়, তখন সিপিইউ MMU পেজ ফল্ট ঘটিয়ে কেবল সেই নির্দিষ্ট ৪ কিলোবাইট পেজটি কপি করে।'
      },
    },
    {
      q: {
        en: 'What is a Zombie process, why is it dangerous, and how do you eliminate it?',
        bn: 'জম্বি প্রসেস কী, এটি কেন বিপজ্জনক এবং কীভাবে একে দূর করা যায়?'
      },
      a: {
        en: 'A Zombie process is a terminated child process whose exit status has not yet been read by its parent via wait() or waitpid(). Although it consumes zero CPU or RAM, it occupies an entry in the operating system process table. If the table fills up, no new processes can be created. It is eliminated by having the parent call waitpid() or by terminating the parent so PID 1 adopts and reaps it.',
        bn: 'জম্বি প্রসেস হলো এমন একটি মৃত চাইল্ড প্রসেস যার এক্সিট স্ট্যাটাস প্যারেন্ট এখনও wait() বা waitpid() দিয়ে সংগ্রহ করেনি। যদিও এটি কোনো সিপিইউ বা র‍্যাম খরচ করে না, তবুও এটি প্রসেস টেবিলের একটি এন্ট্রি আটকে রাখে। টেবিল পূর্ণ হলে সিস্টেমে নতুন প্রসেস তৈরি বন্ধ হয়ে যায়। প্যারেন্টে waitpid() কল করে অথবা প্যারেন্টকে বন্ধ করে দিলে PID ১ একে রিমুভ করে।'
      },
    },
    {
      q: {
        en: 'How does the Linux Completely Fair Scheduler (CFS) use virtual runtime to schedule processes?',
        bn: 'লিনাক্স Completely Fair Scheduler (CFS) কীভাবে ভার্চুয়াল রানটাইম ব্যবহার করে প্রসেস শিডিউল করে?'
      },
      a: {
        en: 'CFS tracks the virtual runtime of each runnable task inside a self-balancing Red-Black Tree. High-priority processes with negative nice values accumulate virtual runtime slowly, while low-priority processes accumulate it quickly. The scheduler always dispatches the leftmost node in the tree with the lowest virtual runtime, guaranteeing proportional CPU fairness.',
        bn: 'CFS একটি স্ব-ভারসাম্যপূর্ণ রেড-ব্ল্যাক ট্রির ভেতরে প্রতিটি প্রসেসের ভার্চুয়াল রানটাইম ট্র্যাক করে। উচ্চ প্রায়োরিটির প্রসেসের ভার্চুয়াল রানটাইম ধীরে বাড়ে, আর কম প্রায়োরিটির প্রসেসের রানটাইম দ্রুত বৃদ্ধি পায়। শিডিউলার সর্বদা ট্রির সবচেয়ে বাঁ দিকের নোডে থাকা সর্বনিম্ন ভার্চুয়াল রানটাইমের প্রসেসটিকে চালায়, যা সমতা নিশ্চিত করে।'
      },
    },
  ],
  realWorld: [
    {
      en: 'htop & btop: Interactive real-time process viewers displaying CPU per-core utilization, memory consumption, process trees, and kill signals.',
      bn: 'htop এবং btop: প্রতিটি কোরে সিপিইউ ব্যবহার, মেমোরি খরচ, প্রসেস ট্রি এবং সিগন্যাল পাঠানোর সুবিধাযুক্ত ইন্টারঅ্যাক্টিভ রিয়েল-টাইম প্রসেস ভিউয়ার।'
    },
    {
      en: 'strace: Powerful diagnostic utility that intercepts and logs every system call made by a process including fork, execve, read, write, and kill.',
      bn: 'strace: একটি অত্যন্ত শক্তিশালী ডায়াগনস্টিক টুল যা fork, execve, read, write এবং kill সহ কোনো প্রসেসের করা প্রতিটি সিস্টেম কল সরাসরি পর্যবেক্ষণ ও রেকর্ড করে।'
    },
    {
      en: 'systemd (PID 1): The foundational Linux init system that serves as process ancestor, adopting orphaned processes, managing cgroups, and supervising services.',
      bn: 'systemd (PID ১): লিনাক্সের ভিত্তিগত ইনিট সিস্টেম যা সমস্ত প্রসেসের পূর্বপুরুষ হিসেবে কাজ করে, অরফান প্রসেসকে গ্রহণ করে, cgroups পরিচালনা করে এবং সার্ভিস তদারকি করে।'
    },
    {
      en: 'PM2 & Supervisord: Production process managers that maintain high availability through automatic cluster worker restarts, zero-downtime reloads, and log aggregation.',
      bn: 'PM2 এবং Supervisord: প্রোডাকশন প্রসেস ম্যানেজার যা স্বয়ংক্রিয় ওয়ার্কার ক্লাস্টার রিস্টার্ট, জিরো-ডাউনটাইম রিলোড ও লগ ব্যবস্থাপনার মাধ্যমে হাই অ্যাভেইলেবিলিটি নিশ্চিত করে।'
    },
  ],
  lessons: [
    MeetProcessesLesson,
    ProcessLifecycleLesson,
    ForkExecLesson,
    ProcessStatesLesson,
    ZombieOrphanLesson,
    SignalsIpcLesson,
    ProcessSchedulingLesson,
    ProcessesCapstoneLesson,
  ],
};
