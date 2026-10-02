import type { Hub } from '../../lib/types';
import { MeetCpuLesson } from './lessons/meet-cpu';
import { CpuAnatomyLesson } from './lessons/cpu-anatomy';
import { FetchExecuteLesson } from './lessons/fetch-execute';
import { ClockSpeedLesson } from './lessons/clock-speed';
import { PipeliningLesson } from './lessons/pipelining';
import { BranchPredictionLesson } from './lessons/branch-prediction';
import { MulticoreLesson } from './lessons/multicore';
import { CpuCapstoneLesson } from './lessons/cpu-capstone';

export const cpuHub: Hub = {
  slug: 'cpu',
  name: 'CPU & Microprocessor Architecture',
  icon: '⚙️',
  tagline: {
    en: 'Master microprocessor architecture, silicon execution engines, clock frequency, pipelined datapaths, and multi-core parallelism.',
    bn: 'মাইক্রোপ্রসেসর আর্কিটেকচার, সিলিকন এক্সিকিউশন ইঞ্জিন, ক্লক ফ্রিকোয়েন্সি, পাইপলাইন ডাটাপাথ এবং মাল্টি-কোর প্যারালেলিজম গভীরভাবে আয়ত্ত করুন।'
  },
  intro: {
    en: 'A comprehensive beginner-to-expert introduction and deep architectural tour of the Central Processing Unit (CPU). Understand how silicon transistors synthesize control units, arithmetic logic units, and register files. Explore the fetch-decode-execute instruction cycle, clock gigahertz frequencies, superscalar pipelining hazards, branch prediction algorithms, and multi-core symmetric multiprocessing performance tradeoffs.',
    bn: 'সেন্ট্রাল প্রসেসিং ইউনিটের (CPU) একটি বিশদ প্রাথমিক ভূমিকা থেকে শুরু করে বিশেষজ্ঞ স্তরের অভ্যন্তরীণ স্থাপত্য বিশ্লেষণ। কীভাবে সিলিকন ট্রানজিস্টর কন্ট্রোল ইউনিট, অ্যারিথমেটিক লজিক ইউনিট এবং রেজিস্টার ফাইল গঠন করে তা জানুন। ফেচ-ডিকোড-এক্সিকিউট সাইকেল, গিগাহার্টজ ক্লক ফ্রিকোয়েন্সি, সুপারস্কেলার পাইপলাইনিং হ্যাজার্ড, ব্রাঞ্চ প্রেডিকশন এবং মাল্টি-কোর সিমেট্রিক মাল্টিপ্রসেসিং কর্মক্ষমতা গভীরভাবে অনুসন্ধান করুন।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — CPU Fundamentals & Silicon Datapaths (Lessons 1–2)',
        bn: 'ধাপ ১ — সিপিইউ ফান্ডামেন্টালস এবং সিলিকন ডাটাপাথ (পাঠ ১–২)'
      },
      items: [
        {
          en: 'Meet the CPU: Microprocessor evolution, silicon die structure, and compute engine principles',
          bn: 'সিপিইউর সাথে পরিচয়: মাইক্রোপ্রসেসর বিবর্তন, সিলিকন ডাই গঠন এবং কম্পিউট ইঞ্জিন মূলনীতি'
        },
        {
          en: 'CPU Anatomy: Control Unit, Arithmetic Logic Unit (ALU), Register Files, and internal system buses',
          bn: 'সিপিইউ গঠন: কন্ট্রোল ইউনিট, অ্যারিথমেটিক লজিক ইউনিট (ALU), রেজিস্টার ফাইল এবং অভ্যন্তরীণ বাস'
        },
        {
          en: 'Milestone: Trace internal hardware data flow from register inputs to ALU arithmetic output',
          bn: 'মাইলস্টোন: রেজিস্টার ইনপুট থেকে অ্যালু পাটিগণিত আউটপুট পর্যন্ত অভ্যন্তরীণ ডাটা প্রবাহ যাচাই'
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Clock Timing & The Instruction Cycle (Lessons 3–4)',
        bn: 'ধাপ ২ — ক্লক টাইমিং এবং ইন্সট্রাকশন সাইকেল (পাঠ ৩–৪)'
      },
      items: [
        {
          en: 'Fetch-Decode-Execute: Program Counter, Instruction Register, and micro-operation decoding',
          bn: 'ফেচ-ডিকোড-এক্সিকিউট: প্রোগ্রাম কাউন্টার, ইন্সট্রাকশন রেজিস্টার এবং মাইক্রো-অপারেশন ডিকোডিং'
        },
        {
          en: 'Clock Speed & Frequency: Oscillator crystals, gigahertz metrics, overclocking, and thermal throttling',
          bn: 'ক্লক স্পিড ও ফ্রিকোয়েন্সি: অসিলেটর ক্রিস্টাল, গিগাহার্টজ মেট্রিক, ওভারক্লকিং এবং থার্মাল থ্রটলিং'
        },
        {
          en: 'Milestone: Calculate CPU execution time using instruction count, clock cycles, and frequency',
          bn: 'মাইলস্টোন: নির্দেশ সংখ্যা, ক্লক সাইকেল এবং ফ্রিকোয়েন্সি ব্যবহার করে সিপিইউ সম্পাদন সময় গণনা'
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Pipelining & Speculative Execution (Lessons 5–6)',
        bn: 'ধাপ ৩ — পাইপলাইনিং এবং স্পেকুলেটিভ এক্সিকিউশন (পাঠ ৫–৬)'
      },
      items: [
        {
          en: 'Instruction Pipelining: Multi-stage assembly lines, hazard resolution, and superscalar dispatch',
          bn: 'ইন্সট্রাকশন পাইপলাইনিং: বহুস্তরী অ্যাসেম্বলি লাইন, হ্যাজার্ড সমাধান এবং সুপারস্কেলার ডিসপ্যাচ'
        },
        {
          en: 'Branch Prediction: Dynamic branch prediction, saturating 2-bit counters, and speculative execution',
          bn: 'ব্রাঞ্চ প্রেডিকশন: ডায়নামিক ব্রাঞ্চ প্রেডিকশন, ২-বিট স্যাচুরেটিং কাউন্টার এবং স্পেকুলেটিভ এক্সিকিউশন'
        },
        {
          en: 'Milestone: Identify and resolve Read-After-Write (RAW) data hazards using hardware data forwarding',
          bn: 'মাইলস্টোন: হার্ডওয়্যার ডাটা ফরওয়ার্ডিং ব্যবহার করে রিড-আফটার-রাইট (RAW) ডাটা হ্যাজার্ড সমাধান'
        },
      ],
    },
    {
      title: {
        en: 'Stage 4 — Multi-Core Concurrency & Hardware Capstone (Lessons 7–8)',
        bn: 'ধাপ ৪ — মাল্টি-কোর কনকারেন্সি এবং হার্ডওয়্যার ক্যাপস্টোন (পাঠ ৭–৮)'
      },
      items: [
        {
          en: 'Multi-Core Architectures: Symmetric Multiprocessing (SMP), cache coherency (MESI), and memory buses',
          bn: 'মাল্টি-কোর আর্কিটেকচার: সিমেট্রিক মাল্টিপ্রসেসিং (SMP), ক্যাশ কোহেরেন্সি (MESI) এবং মেমোরি বাস'
        },
        {
          en: 'CPU Systems Capstone: Virtual instruction emulator, hardware performance counters, and micro-benchmarks',
          bn: 'সিপিইউ সিস্টেমস ক্যাপস্টোন: ভার্চুয়াল ইন্সট্রাকশন এমুলেটর, হার্ডওয়্যার পারফরম্যান্স কাউন্টার ও বেঞ্চমার্ক'
        },
        {
          en: 'Milestone: Profile instruction throughput (IPC) and parallel speedup across independent execution cores',
          bn: 'মাইলস্টোন: স্বাধীন এক্সিকিউশন কোরের মধ্যে নির্দেশ থ্রুপুট (IPC) এবং সমান্তরাল গতি বৃদ্ধি পরিমাপ'
        },
      ],
    },
  ],
  lessons: [
    MeetCpuLesson,
    CpuAnatomyLesson,
    FetchExecuteLesson,
    ClockSpeedLesson,
    PipeliningLesson,
    BranchPredictionLesson,
    MulticoreLesson,
    CpuCapstoneLesson,
  ],
  projects: [
    {
      title: {
        en: 'Project 1 — Cycle-Accurate CPU Instruction Profiler & Benchmark',
        bn: 'প্রজেক্ট ১ — সাইকেল-অ্যাকুরেট সিপিইউ ইন্সট্রাকশন প্রোফাইলার এবং বেঞ্চমার্ক'
      },
      brief: {
        en: 'Construct a software simulator measuring CPU execution metrics across synthetic mathematical workloads. Track total instructions retired, simulated clock cycles, Instructions Per Cycle (IPC), and pipeline hazard stall cycles. Deliverable: a functioning benchmark module that prints an architectural efficiency report verifying steady-state pipeline saturation.',
        bn: 'গাণিতিক কাজের ওপর সিপিইউর সম্পাদন মেট্রিক পরিমাপকারী একটি সফটওয়্যার সিমুলেটর তৈরি করুন। মোট নির্দেশের সংখ্যা, ক্লক সাইকেল, ইন্সট্রাকশন পার সাইকেল (IPC) এবং পাইপলাইন স্টল সাইকেল পর্যবেক্ষণ করুন। ডেলিভারেবল: একটি কার্যকর বেঞ্চমার্ক মডিউল যা পাইপলাইন স্যাচুরেশন যাচাই করে একটি আর্কিটেকচারাল রিপোর্ট প্রদর্শন করে।'
      },
    },
    {
      title: {
        en: 'Project 2 — Multi-Core Scalability & Amdahl Bottleneck Analyzer',
        bn: 'প্রজেক্ট ২ — মাল্টি-কোর স্কেলেবিলিটি এবং এমডাহল বটলনেক অ্যানালাইজার'
      },
      brief: {
        en: 'Develop an architectural analysis tool that models multi-core parallel workloads across 1 to 64 virtual cores. Calculate theoretical speedup using Amdahl\'s Law, simulate cache false sharing overhead caused by shared 64-byte lines, and identify the point of diminishing returns where synchronization contention degrades throughput.',
        bn: '১ থেকে ৬৪ টি ভার্চুয়াল কোরের মধ্যে মাল্টি-কোর সমান্তরাল কাজ মডেল করার একটি বিশ্লেষণ টুল তৈরি করুন। এমডাহলের সূত্র ব্যবহার করে তাত্ত্বিক গতি বৃদ্ধি হিসাব করুন, শেয়ার্ড ৬৪-বাইট লাইনের কারণে সৃষ্ট ক্যাশ ফলস শেয়ারিং অপচয় সিমুলেট করুন এবং সিঙ্ক্রোনাইজেশন বিরোধের সীমা চিহ্নিত করুন।'
      },
    },
  ],
  bestPractices: [
    {
      en: 'Structure memory loops to traverse arrays in contiguous order, maximizing 64-byte L1 cache line prefetching.',
      bn: 'ধারাবাহিক মেমোরি ক্রমে অ্যারে পরিভ্রমণ করার মতো লুপ লিখুন, যা ৬৪-বাইট L1 ক্যাশ লাইন প্রিফেচিং নিশ্চিত করে।'
    },
    {
      en: 'Eliminate unpredictable conditional branches in tight performance loops to keep branch prediction rates above 95 percent.',
      bn: 'ঘনঘন চলা লুপ থেকে অপ্রত্যাশিত কন্ডিশনাল ব্রাঞ্চ পরিহার করুন যাতে ব্রাঞ্চ প্রেডিকশন নির্ভুলতা ৯৫ শতাংশের ওপরে থাকে।'
    },
    {
      en: 'Avoid shared mutable variables between parallel threads without 64-byte padding to prevent destructive multi-core cache line bouncing.',
      bn: 'মাল্টি-কোর সিস্টেমে ক্যাশ লাইন বাউন্সিং এড়াতে সমান্তরাল থ্রেডের শেয়ার্ড ভেরিয়েবলের মধ্যে ৬৪-বাইট প্যাডিং ব্যবহার করুন।'
    },
    {
      en: 'Minimize long dependency chains between consecutive arithmetic instructions to maximize superscalar Instruction-Level Parallelism (ILP).',
      bn: 'সুপারস্কেলার ইন্সট্রাকশন-লেভেল প্যারালেলিজমের (ILP) সর্বোচ্চ সুবিধা নিতে ক্রমিক পাটিগণিত নির্দেশের নির্ভরতা কমান।'
    },
    {
      en: 'Monitor CPU thermal throttling and frequency scaling under sustained multi-threaded compute workloads.',
      bn: 'দীর্ঘস্থায়ী মাল্টি-থ্রেডেড গণনার কাজের সময় সিপিইউর থার্মাল থ্রটলিং এবং ফ্রিকোয়েন্সি স্কেলিং নিয়মিত পর্যবেক্ষণ করুন।'
    },
  ],
  interview: [
    {
      q: {
        en: 'What causes CPU thermal throttling, and how does Dynamic Voltage and Frequency Scaling (DVFS) prevent silicon chip destruction?',
        bn: 'সিপিইউ থার্মাল থ্রটলিং কেন ঘটে এবং ডায়নামিক ভোল্টেজ অ্যান্ড ফ্রিকোয়েন্সি স্কেলিং (DVFS) কীভাবে সিলিকন চিপের ক্ষতি রোধ করে?'
      },
      a: {
        en: 'Dynamic power dissipation in CMOS processors is proportional to capacitance times voltage squared times clock frequency (P = C * V^2 * f). Under heavy sustained loads, junction temperatures can exceed safe silicon limits (typically 100 degrees Celsius). On-die thermal sensors trigger DVFS hardware, rapidly reducing operating voltage and clock frequency within microseconds to decrease heat dissipation and prevent thermal damage.',
        bn: 'সিএমওএস প্রসেসরে পাওয়ার খরচ ধারকত্ব, ভোল্টেজের বর্গ এবং ক্লক ফ্রিকোয়েন্সির সমানুপাতিক ( P = C * V^2 * f )। ভারী কাজের সময় সিলিকনের তাপমাত্রা নিরাপদ সীমা ( সাধারণত ১০০ ডিগ্রি সেলসিয়াস ) অতিক্রম করতে পারে। অন-ডাই থার্মাল সেন্সরগুলো ডিভিএফএস হার্ডওয়্যার সক্রিয় করে কয়েক মাইক্রোসেকেন্ডের মধ্যে ভোল্টেজ ও ফ্রিকোয়েন্সি কমিয়ে দেয়, যা তাপ কমিয়ে চিপকে রক্ষা করে।'
      },
    },
    {
      q: {
        en: 'Why does sorting an array of numbers prior to executing a conditional filtering loop produce a dramatic 5x to 10x execution speedup?',
        bn: 'কন্ডিশনাল ফিল্টারিং লুপ চালানোর আগে সংখ্যার অ্যারেকে সাজিয়ে (sort) নিলে কেন নাটকীয়ভাবে ৫ থেকে ১০ গুণ গতি বৃদ্ধি পায়?'
      },
      a: {
        en: 'Modern superscalar CPUs rely on speculative execution guided by branch predictors. In an unsorted array with random values, conditional branches evaluate unpredictably (50 percent branch accuracy), causing frequent pipeline flushes where 15 to 20 cycles of speculatively fetched instructions are discarded. In a sorted array, the branch evaluates false for all small numbers and then true for all remaining numbers, allowing the 2-bit branch predictor to achieve near 100 percent accuracy with zero stalls.',
        bn: 'আধুনিক সুপারস্কেলার সিপিইউ ব্রাঞ্চ প্রেডিক্টরের সাহায্যে স্পেকুলেটিভ এক্সিকিউশন পরিচালনা করে। এলোমেলো সংখ্যার ক্ষেত্রে কন্ডিশনাল ব্রাঞ্চের গতিপথ অপ্রত্যাশিত হয় ( ৫০ শতাংশ নির্ভুলতা ), ফলে বারবার পাইপলাইন ফ্লাশ ঘটে এবং প্রতিবার ১৫ থেকে ২০ সাইকেল অপচয় হয়। অ্যারে সাজানো থাকলে ব্রাঞ্চটি প্রথমে ধারাবাহিকভাবে false এবং পরে true হয়, ফলে ২-বিট ব্রাঞ্চ প্রেডিক্টর প্রায় ১০০ শতাংশ নির্ভুলতা অর্জন করে কোনো স্টল ছাড়াই।'
      },
    },
    {
      q: {
        en: 'What is the architectural difference between Simultaneous Multi-Threading (SMT / Hyper-Threading) and independent physical CPU cores?',
        bn: 'সিমুলটেনিয়াস মাল্টি-থ্রেডিং (SMT / হাইপার-থ্রেডিং) এবং স্বাধীন ফিজিক্যাল সিপিইউ কোরের মধ্যে আর্কিটেকচারাল পার্থক্য কী?'
      },
      a: {
        en: 'Independent physical cores have duplicate execution machinery: their own ALUs, floating-point units, vector pipelines, and L1 caches. In contrast, SMT duplicates only architectural state (Program Counter, registers, and stack pointers) while sharing the same underlying execution units and caches within a single physical core. SMT yields roughly a 20 to 30 percent throughput gain by filling execution bubbles when one thread stalls on memory, unlike an additional physical core which provides near 100 percent independent compute capacity.',
        bn: 'স্বাধীন ফিজিক্যাল কোরের নিজস্ব সম্পূর্ণ এক্সিকিউশন ইউনিট থাকে: পৃথক ALU, ফ্লোটিং-পয়েন্ট ইউনিট, ভেক্টর পাইপলাইন এবং L1 ক্যাশ। অন্যদিকে এসএমটি কেবল আর্কিটেকচারাল স্টেট ( প্রোগ্রাম কাউন্টার, রেজিস্টার ও স্ট্যাক পয়েন্টার ) দ্বিগুণ করে কিন্তু একটি মাত্র কোরের ভেতরের মূল এক্সিকিউশন ইউনিট ও ক্যাশ ভাগাভাগি করে। একটি থ্রেড মেমোরির অপেক্ষায় থাকলে অন্য থ্রেড কাজ চালিয়ে এসএমটি প্রায় ২০ থেকে ৩০ শতাংশ থ্রুপুট বাড়ায়, যেখানে একটি নতুন ফিজিক্যাল কোর প্রায় ১০০ শতাংশ স্বাধীন ক্ষমতা দেয়।'
      },
    },
    {
      q: {
        en: 'What architectural limitation known as the "Power Wall" halted the relentless scaling of single-core CPU clock frequencies beyond 4 to 5 GHz?',
        bn: '"পাওয়ার ওয়াল" নামে পরিচিত কোন আর্কিটেকচারাল সীমাবদ্ধতার কারণে সিঙ্গেল-কোর সিপিইউ ক্লক ফ্রিকোয়েন্সি ৪ থেকে ৫ গিগাহার্টজের ওপরে বৃদ্ধি করা বন্ধ হয়ে যায়?'
      },
      a: {
        en: 'Increasing clock frequency requires proportionally increasing voltage to maintain transistor switching speeds. Because dynamic power scales cubically with frequency and voltage (P ~ f^3), pushing clock speeds past 4 GHz caused power density to exceed the cooling limits of air and liquid heatsinks (reaching hundreds of watts per square centimeter). Microprocessor designers pivoted away from raw frequency scaling toward multi-core parallelism, wider superscalar pipelines, and larger cache hierarchies.',
        bn: 'ক্লক ফ্রিকোয়েন্সি বাড়াতে ট্রানজিস্টরের স্যুইচিং গতি বজায় রাখতে ভোল্টেজ বাড়াতে হয়। যেহেতু পাওয়ার খরচ ফ্রিকোয়েন্সি ও ভোল্টেজের সাথে ঘনক আকারে বৃদ্ধি পায় ( P ~ f^3 ), তাই ৪ গিগাহার্টজের ওপরে ফ্রিকোয়েন্সি বাড়ালে তাপের ঘনত্ব সাধারণ কুলারের অপসারণ ক্ষমতার বাইরে চলে যায় ( প্রতি বর্গ সেন্টিমিটারে শত শত ওয়াট )। ফলে প্রসেসর ডিজাইনাররা একক কোরের ফ্রিকোয়েন্সি বৃদ্ধির বদলে মাল্টি-কোর সমান্তরাল আর্কিটেকচার এবং বৃহত্তর ক্যাশের দিকে অগ্রসর হন।'
      },
    },
  ],
  realWorld: [
    {
      en: 'Linux perf subsystem: Hardware performance counters monitoring CPU Instructions Per Cycle (IPC), cache misses, and branch mispredictions.',
      bn: 'লিনাক্স পারফ সাবসিস্টেম: সিপিইউর ইন্সট্রাকশন পার সাইকেল (IPC), ক্যাশ মিস এবং ব্রাঞ্চ মিসপ্রেডিকশন পর্যবেক্ষণকারী হার্ডওয়্যার পারফরম্যান্স কাউন্টার।'
    },
    {
      en: 'Chromium V8 Engine: Just-In-Time (JIT) machine code generation generating native x86_64 and ARM64 processor instructions.',
      bn: 'ক্রোমিয়াম V8 ইঞ্জিন: জাভাস্ক্রিপ্ট কোড থেকে সরাসরি নেটিভ x86_64 এবং ARM64 প্রসেসর নির্দেশ তৈরিকারী জাস্ট-ইন-টাইম (JIT) কম্পাইলার।'
    },
    {
      en: 'Intel Turbo Boost & AMD Precision Boost: Hardware microcontrollers automatically scaling individual core clock frequencies based on thermal headroom.',
      bn: 'ইনটেল টার্বো বুস্ট এবং এএমডি প্রিসিশন বুস্ট: তাপমাত্রার মার্জিন অনুযায়ী একক কোরের ক্লক ফ্রিকোয়েন্সি স্বয়ংক্রিয়ভাবে বৃদ্ধিকারী হার্ডওয়্যার মাইক্রোকন্ট্রোলার।'
    },
  ],
};
