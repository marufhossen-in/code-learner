import type { Hub } from '../../lib/types';
import { MeetArchLesson } from './lessons/meet-arch';
import { BitsBinaryLesson } from './lessons/bits-binary';
import { LogicGatesLesson } from './lessons/logic-gates';
import { AluIntroLesson } from './lessons/alu-intro';
import { RegistersIntroLesson } from './lessons/registers-intro';
import { InstructionCycleLesson } from './lessons/instruction-cycle';
import { CacheHierarchyLesson } from './lessons/cache-hierarchy';
import { ArchCapstoneLesson } from './lessons/arch-capstone';

export const computerArchitectureHub: Hub = {
  slug: 'computer-architecture',
  name: 'Computer Architecture',
  icon: '🏛️',
  tagline: {
    en: 'Master von Neumann architecture, binary data representation, ALU circuits, CPU pipelining, multi-tier cache coherence, and out-of-order execution.',
    bn: 'ভন নিউম্যান আর্কিটেকচার, বাইনারি ডেটা রিপ্রেজেন্টেশন, এলইউ সার্কিট, সিপিইউ পাইপলাইনিং, মাল্টি-লেভেল ক্যাশ কোহেরেন্স এবং আউট-অব-অর্ডার এক্সিকিউশন আয়ত্ত করুন।',
  },
  intro: {
    en: 'Computer architecture defines the conceptual design and fundamental operational structure of computer systems. From microscopic silicon CMOS transistors forming universal logic gates to multi-gigahertz superscalar microprocessors executing billions of instructions per second, this comprehensive track explores how physical circuits process machine instructions. You will master the von Neumann datapath, binary arithmetic, instruction pipelining, CPU cache hierarchies, and modern hardware performance optimization.',
    bn: 'কম্পিউটার আর্কিটেকচার হলো কম্পিউটার ব্যবস্থার নকশা এবং মৌলিক পরিচালনা কাঠামোর বিজ্ঞান। সিলিকন সিএমওএস ট্রানজিস্টর থেকে শুরু করে মাল্টি-গিগাহার্টজের সুপারস্কেলার প্রসেসর কীভাবে প্রতি সেকেন্ডে শত কোটি নির্দেশ কার্যকর করে তা এই ট্র্যাকে তুলে ধরা হয়েছে। আপনি ভন নিউম্যান ডেটাপাথ, বাইনারি গাণিতিক পদ্ধতি, ইন্সট্রাকশন পাইপলাইনিং, সিপিইউ ক্যাশ হায়ারার্কি এবং আধুনিক হার্ডওয়্যার পারফরম্যান্স অপ্টিমাইজেশন গভীরভাবে আয়ত্ত করবেন।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Machine Organization & Data Representation (Lessons 1–2)',
        bn: 'ধাপ ১ — মেশিন সংগঠন এবং ডেটা রূপায়ন (পাঠ ১–২)',
      },
      items: [
        {
          en: 'Von Neumann vs Harvard architecture, system bus interfaces (control, address, data), and the central processing unit datapath',
          bn: 'ভন নিউম্যান বনাম হার্ভার্ড আর্কিটেকচার, সিস্টেম বাস ইন্টারফেস (কন্ট্রোল, অ্যাড্রেস, ডেটা) এবং সিপিইউ ডেটাপাথ',
        },
        {
          en: 'Binary data representation, two complement signed integers, IEEE 754 floating point arithmetic, and endianness byte ordering',
          bn: 'বাইনারি ডেটা উপস্থাপনা, টু-স কমপ্লিমেন্ট সাইনড ইন্টিজার, IEEE 754 ফ্লোটিং পয়েন্ট এবং এন্ডিয়াননেস বাইট সিকোয়েন্স',
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Digital Logic & The Arithmetic Logic Unit (Lessons 3–4)',
        bn: 'ধাপ ২ — ডিজিটাল লজিক এবং অ্যারিথমেটিক লজিক ইউনিট (পাঠ ৩–৪)',
      },
      items: [
        {
          en: 'CMOS transistors, universal NAND and NOR gates, combinational logic truth tables, multiplexers, and decoders',
          bn: 'সিএমওএস ট্রানজিস্টর, সার্বজনীন NAND ও NOR গেট, কম্বিনেশনাল লজিক ট্রুথ টেবিল, মাল্টিপ্লেক্সার এবং ডিকোডার',
        },
        {
          en: 'Arithmetic Logic Unit (ALU) design, half and full adders, ripple-carry vs carry-lookahead adders, and status condition flags',
          bn: 'অ্যারিথমেটিক লজিক ইউনিট (ALU) ডিজাইন, হাফ ও ফুল অ্যাডার, রিপল-ক্যারি বনাম ক্যারি-লুকঅ্যাহেড অ্যাডার এবং স্ট্যাটাস ফ্ল্যাগ',
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Registers, Pipelining & Branch Prediction (Lessons 5–6)',
        bn: 'ধাপ ৩ — রেজিস্টার, পাইপলাইনিং এবং ব্রাঞ্চ প্রেডিকশন (পাঠ ৫–৬)',
      },
      items: [
        {
          en: 'Sequential logic, D flip-flops, register files, program counter (PC), instruction register (IR), and stack pointer (SP)',
          bn: 'সিকোয়েনশিয়াল লজিক, ডি ফ্লিপ-ফ্লপ, রেজিস্টার ফাইল, প্রোগ্রাম কাউন্টার (PC), ইন্সট্রাকশন রেজিস্টার (IR) এবং স্ট্যাক পয়েন্টার (SP)',
        },
        {
          en: 'The classic 5-stage instruction pipeline (IF, ID, EX, MEM, WB), structural, data (RAW), and control hazards, and dynamic branch prediction',
          bn: 'ক্লাসিক ৫ টি ধাপের ইন্সট্রাকশন পাইপলাইন (IF, ID, EX, MEM, WB), পাইপলাইন হ্যাজার্ড ও ডেটা ফরোয়ার্ডিং এবং ডায়নামিক ব্রাঞ্চ প্রেডিকশন',
        },
      ],
    },
    {
      title: {
        en: 'Stage 4 — Cache Hierarchies & Modern Microarchitecture (Lessons 7–8)',
        bn: 'ধাপ ৪ — ক্যাশ হায়ারার্কি এবং আধুনিক মাইক্রোআর্কিটেকচার (পাঠ ৭–৮)',
      },
      items: [
        {
          en: 'Memory hierarchy, L1, L2, and L3 caches, cache lines, direct-mapped vs set-associative mapping, and MESI cache coherence protocol',
          bn: 'মেমোরি হায়ারার্কি, এল ১ , এল ২ এবং এল ৩ ক্যাশ, ক্যাশ লাইন, সেট-অ্যাসোসিয়েটিভ ম্যাপিং এবং MESI ক্যাশ কোহেরেন্স প্রোটোকল',
        },
        {
          en: 'Superscalar execution, out-of-order processing, Register Renaming, Reorder Buffer (ROB), hardware profiling, and architecture capstone',
          bn: 'সুপারস্কেলার এক্সিকিউশন, আউট-অব-অর্ডার প্রসেসিং, রেজিস্টার রিনেইমিং, রিঅর্ডার বাফার (ROB), হার্ডওয়্যার প্রোফাইলিং এবং ক্যাপস্টোন',
        },
      ],
    },
  ],
  lessons: [
    MeetArchLesson,
    BitsBinaryLesson,
    LogicGatesLesson,
    AluIntroLesson,
    RegistersIntroLesson,
    InstructionCycleLesson,
    CacheHierarchyLesson,
    ArchCapstoneLesson,
  ],
  projects: [
    {
      title: {
        en: 'Project 1 — Deterministic 8-Bit Microprocessor Simulator',
        bn: 'প্রজেক্ট ১ — ৮-বিট মাইক্রোপ্রসেসর সিমুলেটর',
      },
      brief: {
        en: 'Implement a complete cycle-accurate 8-bit CPU virtual machine in software. Build the register file (A, B, PC, SP), decode 16 opcodes (LOAD, ADD, SUB, JUMP, CALL, RET), manage an ALU with Zero, Carry, and Overflow status flags, and run a sample multiplication algorithm verified against expected register values.',
        bn: 'সফটওয়্যারে একটি পূর্ণাঙ্গ ৮-বিট সিপিইউ ভার্চুয়াল মেশিন তৈরি করুন। রেজিস্টার ফাইল (A, B, PC, SP) বাস্তবায়ন করুন, ১৬ টি অপকোড ডিকোড করুন, জিরো, ক্যারি ও ওভারফ্লো ফ্ল্যাগ সম্বলিত ALU পরিচালনা করুন এবং একটি মাল্টিপ্লিকেশন অ্যালগরিদম চালিয়ে প্রত্যাশিত রেজিস্টার মান যাচাই করুন।',
      },
    },
    {
      title: {
        en: 'Project 2 — Hardware Cache Coherence & False-Sharing Benchmark Engine',
        bn: 'প্রজেক্ট ২ — হার্ডওয়্যার ক্যাশ কোহেরেন্স এবং ফলস-শেয়ারিং বেঞ্চমার্ক ইঞ্জিন',
      },
      brief: {
        en: 'Construct a cache hierarchy benchmark tool measuring access latencies across L1, L2, L3, and main DRAM. Simulate multi-core MESI protocol invalidation cycles, demonstrating how adjacent variables placed on the same 64-byte cache line cause catastrophic false-sharing penalties, and resolve it using cache-line alignment padding.',
        bn: 'একটি ক্যাশ হায়ারার্কি বেঞ্চমার্ক টুল তৈরি করুন যা এল ১ , এল ২ , এল ৩ এবং মূল র‍্যামের অ্যাক্সেস লেটেন্সি পরিমাপ করে। মাল্টি-কোর MESI প্রোটোকলের ক্যাশ ইনভ্যালিডেশন চক্র সিমুলেট করুন, দেখান কীভাবে একই ৬৪ বাইটের ক্যাশ লাইনে থাকা ভেরিয়েবল ফলস-শেয়ারিং অপচয় ঘটায় এবং ক্যাশ-লাইন অ্যালাইনমেন্ট প্যাডিং দিয়ে তা সমাধান করুন।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Align data structures to 64-byte cache lines to prevent multi-core cache line bouncing and false sharing in concurrent code.',
      bn: 'কনকারেন্ট কোডে মাল্টি-কোর ক্যাশ বাউন্সিং এবং ফলস শেয়ারিং প্রতিহত করতে ডেটা স্ট্রাকচারকে ৬৪ বাইটের ক্যাশ লাইনের সাথে অ্যালাইন করুন।',
    },
    {
      en: 'Organize data in contiguous memory arrays (structure of arrays) to maximize spatial and temporal CPU hardware prefetcher hit rates.',
      bn: 'হার্ডওয়্যার প্রিফেচারের কার্যক্ষমতা বৃদ্ধি করতে ডেটাকে মেমোরিতে পাশাপাশি ক্রমানুসারে (স্ট্রাকচার অব অ্যারে) সাজিয়ে রাখুন।',
    },
    {
      en: 'Avoid data-dependent branching inside inner compute loops to prevent expensive CPU pipeline flush penalties caused by branch mispredictions.',
      bn: 'ভিতরের লুপে ব্রাঞ্চ মিসপ্রেডিকশনের ফলে সিপিইউ পাইপলাইন খালি হওয়ার ক্ষতি এড়াতে শর্তাধীন জাম্প নির্দেশ কমিয়ে আনুন।',
    },
    {
      en: 'Use bitwise shift and mask operations instead of division or modulo operators for power-of-two arithmetic in performance-critical code.',
      bn: 'উচ্চ পারফরম্যান্স কোডে ২ এর ঘাতবিশিষ্ট সংখ্যার জন্য ভাগ বা মডুলো চিহ্নের পরিবর্তে দ্রুতগতির বিটওয়াইজ শিফট ও মাস্ক ব্যবহার করুন।',
    },
    {
      en: 'Utilize Single Instruction Multiple Data (SIMD) vector registers (AVX-512, NEON) to parallelize floating-point arithmetic across 8 or 16 numbers simultaneously.',
      bn: 'একসাথে ৮ বা ১৬ টি ফ্লোটিং পয়েন্ট সংখ্যার গাণিতিক কাজ সমান্তরালে সম্পন্ন করতে সিঙ্গেল ইন্সট্রাকশন মাল্টিপল ডেটা (SIMD) ভেক্টর রেজিস্টার ব্যবহার করুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the fundamental architectural difference between the von Neumann architecture and the Harvard architecture, and what is the von Neumann bottleneck?',
        bn: 'ভন নিউম্যান আর্কিটেকচার এবং হার্ভার্ড আর্কিটেকচারের মধ্যে মৌলিক পার্থক্য কী এবং ভন নিউম্যান বটলনেক বলতে কী বোঝায়?',
      },
      a: {
        en: 'Von Neumann systems share a single physical bus and memory for both program instructions and application data, creating a bottleneck where the CPU cannot read an instruction and transfer data simultaneously. Harvard architectures utilize completely independent buses and memory banks for instructions and data, enabling parallel access. Modern CPUs combine both: an internal Harvard L1 split cache (L1 instruction vs L1 data) backed by a unified von Neumann main memory.',
        bn: 'ভন নিউম্যান সিস্টেমে প্রোগ্রাম নির্দেশ এবং ডেটার জন্য একটি মাত্র বাস ও মেমোরি শেয়ার করা হয়, ফলে সিপিইউ একই সাথে নির্দেশ পড়া ও ডেটা স্থানান্তরের কাজ করতে পারে না যা ভন নিউম্যান বটলনেক নামে পরিচিত। হার্ভার্ড আর্কিটেকচারে নির্দেশ এবং ডেটার জন্য সম্পূর্ণ স্বাধীন বাস থাকে। আধুনিক সিপিইউ উভয় পদ্ধতির সমন্বয় করে: প্রসেসরের ভেতরে পৃথক এল ১ নির্দেশ ও ডেটা ক্যাশ (হার্ভার্ড) থাকে, কিন্তু বাইরে মূল মেমোরি অভিন্ন (ভন নিউম্যান) থাকে।',
      },
    },
    {
      q: {
        en: 'Explain how the MESI cache coherence protocol maintains data consistency across multiple CPU cores without memory corruption.',
        bn: 'মাল্টিপল সিপিইউ কোরে ডেটা মেমোরির অখণ্ডতা বজায় রাখতে MESI ক্যাশ কোহেরেন্স প্রোটোকল কীভাবে কাজ করে তা ব্যাখ্যা করুন।',
      },
      a: {
        en: 'The MESI protocol tracks every 64-byte cache line in one of four states: Modified (line is dirty and exists only in this core cache), Exclusive (line matches main memory and exists only in this core), Shared (line matches main memory and exists in multiple core caches), or Invalid (line data is stale). When core A writes to a Shared line, it broadcasts a bus Invalidation signal, forcing all other cores to mark their copies Invalid before core A transitions to Modified.',
        bn: 'MESI প্রোটোকল প্রতিটি ৬৪ বাইটের ক্যাশ লাইনকে ৪ টি অবস্থার একটিতে ট্র্যাক করে: মডিফাইড (ডেটা পরিবর্তিত এবং কেবল এই কোরে আছে), এক্সক্লুসিভ (মেমোরির সমান এবং কেবল এই কোরে আছে), শেয়ার্ড (একাধিক কোরের ক্যাশে বিদ্যমান), অথবা ইনভ্যালিড (ডেটা পুরোনো ও বাতিল)। কোর A যখন কোনো শেয়ার্ড লাইনে লেখে, তখন সে বাসের মাধ্যমে ইনভ্যালিডেশন সিগন্যাল পাঠায়, ফলে অন্য সব কোর তাদের কপি বাতিল করে এবং কোর A মডিফাইড অবস্থায় যায়।',
      },
    },
    {
      q: {
        en: 'What are pipeline hazards in superscalar microprocessors, and how does data forwarding resolve Read-After-Write (RAW) data hazards?',
        bn: 'সুপারস্কেলার প্রসেসরে পাইপলাইন হ্যাজার্ড কী এবং ডেটা ফরোয়ার্ডিং কীভাবে Read-After-Write (RAW) হ্যাজার্ড সমাধান করে?',
      },
      a: {
        en: 'Pipeline hazards are conditions preventing the next instruction from executing in its designated clock cycle: structural hazards (hardware resource conflicts), data hazards (instruction depends on results of prior instruction), and control hazards (branch decisions). A RAW hazard occurs when instruction 2 needs a register computed by instruction 1 before it has reached the Writeback stage. Data forwarding bypasses the register file by routing the ALU output directly from the Execution stage into the input latch of the following instruction.',
        bn: 'পাইপলাইন হ্যাজার্ড হলো এমন অবস্থা যা পরবর্তী নির্দেশকে নির্দিষ্ট ক্লক সাইকেলে চলতে বাধা দেয়: স্ট্রাকচারাল হ্যাজার্ড (হার্ডওয়্যার সম্পদের টানাটানি), ডেটা হ্যাজার্ড (আগের নির্দেশের ফলাফলের ওপর নির্ভরতা) এবং কন্ট্রোল হ্যাজার্ড (ব্রাঞ্চ জাম্প)। RAW হ্যাজার্ডে ২ নং নির্দেশের একটি রেজিস্টার প্রয়োজন হয় যা ১ নং নির্দেশ এখনো মেমোরিতে লিখে শেষ করেনি। ডেটা ফরোয়ার্ডিং রেজিস্টার ফাইলের অপেক্ষা না করে সরাসরি ALU-এর আউটপুট থেকে পরবর্তী নির্দেশের ইনপুটে ফলাফল পাঠিয়ে দেয়।',
      },
    },
    {
      q: {
        en: 'How does Out-of-Order (OoO) execution combined with Register Renaming prevent false dependencies in high-performance CPUs?',
        bn: 'হাই-পারফরম্যান্স সিপিইউতে রেজিস্টার রিনেইমিং এবং আউট-অব-অর্ডার এক্সিকিউশন কীভাবে মিথ্যা নির্ভরতা (False Dependencies) দূর করে?',
      },
      a: {
        en: 'Traditional code execution is limited by architectural register names (e.g. RAX or R1). False dependencies like Write-After-Read (WAR) and Write-After-Write (WAW) occur purely because code reuses the same register name. Register Renaming maps architectural registers to a much larger pool of physical registers (e.g. 16 architectural mapped to 128 physical). The Reorder Buffer (ROB) then allows independent instructions to execute out-of-order whenever operands are ready, retiring them in original program order to maintain precise architectural state.',
        bn: 'ঐতিহ্যবাহী নির্দেশগুলো নির্দিষ্ট রেজিস্টার নামের (যেমন RAX বা R1) সীমাবদ্ধতায় আটকে থাকে। কোডে একই রেজিস্টার বারবার ব্যবহারের কারণে WAR বা WAW-এর মতো কৃত্রিম নির্ভরতা সৃষ্টি হয়। রেজিস্টার রিনেইমিং অল্প সংখ্যক আর্কিটেকচারাল রেজিস্টারকে প্রসেসরের ভেতরে থাকা বিশাল সংখ্যক ফিজিক্যাল রেজিস্টারে ম্যাপ করে। এরপর রিঅর্ডার বাফার (ROB) ইনপুট প্রস্তুত থাকা কাজগুলোকে আগেভাগে আউট-অব-অর্ডার সম্পন্ন করে এবং মূল প্রোগ্রাম অনুযায়ী ক্রমানুসারে রিটায়ার করে।',
      },
    },
  ],
  realWorld: [
    {
      en: 'RISC-V Open Architecture: Modern silicon chips adopt open-standard instruction set architectures (ISAs) enabling modular, royalty-free microcontroller and supercomputer core designs.',
      bn: 'RISC-V ওপেন আর্কিটেকচার: আধুনিক সিলিকন চিপগুলো ওপেন স্ট্যান্ডার্ড ইন্সট্রাকশন সেট (ISA) ব্যবহার করে রয়্যালটি-মুক্ত মাইক্রোকন্ট্রোলার ও সুপারকম্পিউটার প্রসেসর তৈরি করছে।',
    },
    {
      en: 'Apple Silicon Unified Memory: Integrating CPU, GPU, and Neural Engine on a single high-bandwidth memory fabric eliminates discrete PCIe bus transfer bottlenecks.',
      bn: 'অ্যাপল সিলিকন ইউনিফাইড মেমোরি: সিপিইউ, জিপিইউ এবং নিউরাল ইঞ্জিনকে একক হাই-ব্যান্ডউইথ মেমোরি পুলে সংযুক্ত করে পৃথক PCIe বাসের স্থানান্তর বিলম্ব দূর করে।',
    },
    {
      en: 'Hardware Performance Counters (perf): SREs and systems engineers query CPU hardware events (cache misses, branch mispredictions, cycle stalls) using PMU performance monitoring units.',
      bn: 'হার্ডওয়্যার পারফরম্যান্স কাউন্টার (perf): সিস্টেম ইঞ্জিনিয়াররা প্রসেসরের ভেতরে থাকা PMU ইউনিটের মাধ্যমে ক্যাশ মিস, ব্রাঞ্চ মিসপ্রেডিকশন এবং সাইকেল স্টল ট্র্যাক করেন।',
    },
  ],
};
