import type { Lesson } from '../../../lib/types';

export const MeetCpuLesson: Lesson = {
  slug: 'meet-cpu',
  tech: 'cpu',
  title: {
    en: 'Beginner Overview of the CPU: Architecture & Silicon Compute Engines',
    bn: 'সিপিইউর প্রাথমিক পরিচয়: মাইক্রোপ্রসেসর আর্কিটেকচার এবং সিলিকন কম্পিউট ইঞ্জিন'
  },
  summary: {
    en: 'Discover how the Central Processing Unit acts as the computational brain of digital systems. Explore the evolution from room-sized vacuum tubes to billions of nanoscale silicon MOSFET transistors. Learn the 3 core responsibilities of a CPU (fetching instructions, decoding operations, and manipulating binary state), and trace how microprocessors interface with system memory and peripherals.',
    bn: 'সেন্ট্রাল প্রসেসিং ইউনিট কীভাবে আধুনিক ডিজিটাল সিস্টেমের কম্পিউটেশনাল মস্তিষ্ক হিসেবে কাজ করে তা আবিষ্কার করুন। বিশাল ভ্যাকুয়াম টিউব থেকে শতকোটি ন্যানোস্কেল সিলিকন মসফেট ট্রানজিস্টরের বিবর্তন জানুন। সিপিইউর ৩ টি মৌলিক দায়িত্ব ( নির্দেশ ফেচ করা, অপারেশন ডিকোড করা এবং বাইনারি স্টেট পরিবর্তন করা ) বুঝুন এবং মাইক্রোপ্রসেসর কীভাবে সিস্টেম মেমোরি ও পেরিফেরাল ডিভাইসের সাথে যোগাযোগ করে তা জানুন।',
  },
  minutes: 18,
  blocks: [
    {
      type: 'heading',
      id: 'what-is-a-cpu',
      text: {
        en: 'The Silicon Engine: What is a Central Processing Unit?',
        bn: 'সিলিকন ইঞ্জিন: সেন্ট্রাল প্রসেসিং ইউনিট কী?'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The Central Processing Unit (CPU) is the primary electronic circuit that executes computer programs. Every software application—operating system kernels, web browsers, video games, and machine learning models—is compiled into machine code instructions that the CPU reads and calculates sequentially. Early computers in the 1940s required thousands of power-hungry vacuum tubes occupying entire rooms. In 1971, the invention of the single-chip microprocessor (the Intel 4004 with 2300 transistors) condensed an entire computing unit onto a single sliver of silicon.',
        bn: 'সেন্ট্রাল প্রসেসিং ইউনিট (CPU) হলো কম্পিউটারের প্রাথমিক বৈদ্যুতিক সার্কিট যা প্রোগ্রাম নির্দেশগুলো সম্পাদন করে। অপারেটিং সিস্টেম কার্নেল, ওয়েব ব্রাউজার, ভিডিও গেম এবং কৃত্রিম বুদ্ধিমত্তার মডেলসহ প্রতিটি সফটওয়্যার মেশিন কোড নির্দেশে রূপান্তরিত হয় যা সিপিইউ ক্রমানুসারে পড়ে এবং হিসাব করে। ১৯৪০-এর দশকে প্রাচীন কম্পিউটারগুলো পুরো ঘরজুড়ে বিস্তৃত হাজার হাজার বিদ্যুৎখেকো ভ্যাকুয়াম টিউব ব্যবহার করত। ১৯৭১ সালে একক চিপের মাইক্রোপ্রসেসর আবিষ্কারের মাধ্যমে ( ইনটেল ৪০০৪ যাতে ২৩০০ টি ট্রানজিস্টর ছিল ) সম্পূর্ণ কম্পিউটিং ইউনিটকে একটি ক্ষুদ্র সিলিকন চিপের ওপর নিয়ে আসা সম্ভব হয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Over the subsequent decades, semiconductor manufacturing advanced following Moore\'s Law: the observation by Gordon Moore that the number of transistors fabricated on a silicon microchip doubles roughly every 2 years. Today, modern microprocessors contain upwards of 50 billion transistors etched into a silicon die smaller than a postage stamp, switching electrical currents billions of times each second.',
        bn: 'পরবর্তী দশকগুলোতে সেমিকন্ডাক্টর উৎপাদন মুরস ল (Moore\'s Law) অনুসরণ করে এগিয়ে গেছে: গর্ডন মুরের পর্যবেক্ষণ অনুসারে একটি সিলিকন মাইক্রোচিপে ট্রানজিস্টরের সংখ্যা প্রতি ২ বছরে প্রায় দ্বিগুণ হয়। আজ আধুনিক মাইক্রোপ্রসেসরে একটি ডাকটিকিটের চেয়েও ছোট সিলিকন ডাইয়ের ওপর ৫০ বিলিয়নেরও বেশি ট্রানজিস্টর বসানো থাকে, যা প্রতি সেকেন্ডে শতকোটি বার বৈদ্যুতিক সংকেত পরিবর্তন করে।'
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'Microprocessor Physical Package and Internal Silicon Die Anatomy',
        bn: 'মাইক্রোপ্রসেসরের ভৌত প্যাকেজ এবং অভ্যন্তরীণ সিলিকন ডাই গঠন'
      },
      svg: `<svg viewBox="0 0 820 400" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Microprocessor package showing silicon die cores cache and memory controller">
  <rect width="820" height="400" fill="#0f172a" rx="12"/>
  
  <text x="410" y="32" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">MICROPROCESSOR PHYSICAL DIE &amp; EXECUTION ENGINE ARCHITECTURE</text>
  
  <!-- Outer CPU Package / Substrate -->
  <rect x="50" y="60" width="720" height="310" rx="10" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="75" y="85" fill="#94a3b8" font-size="12" font-weight="bold">Silicon Substrate &amp; Heat Spreader (LGA Package)</text>
  
  <!-- Silicon Die (Monolithic Core Area) -->
  <rect x="90" y="105" width="460" height="240" rx="8" fill="#0f172a" stroke="#0284c7" stroke-width="2"/>
  <text x="320" y="130" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">SILICON DIE CORES &amp; PIPELINES</text>
  
  <!-- Core 0 -->
  <rect x="110" y="145" width="205" height="85" rx="6" fill="#1e293b" stroke="#38bdf8"/>
  <text x="212" y="168" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">CPU CORE 0</text>
  <text x="212" y="188" fill="#cbd5e1" font-size="10" text-anchor="middle">ALU | Registers | Decoder</text>
  <text x="212" y="208" fill="#10b981" font-size="10" text-anchor="middle">L1 Cache (64 KB)</text>
  
  <!-- Core 1 -->
  <rect x="325" y="145" width="205" height="85" rx="6" fill="#1e293b" stroke="#38bdf8"/>
  <text x="427" y="168" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">CPU CORE 1</text>
  <text x="427" y="188" fill="#cbd5e1" font-size="10" text-anchor="middle">ALU | Registers | Decoder</text>
  <text x="427" y="208" fill="#10b981" font-size="10" text-anchor="middle">L1 Cache (64 KB)</text>
  
  <!-- Shared L2/L3 Cache -->
  <rect x="110" y="245" width="420" height="40" rx="4" fill="#1e293b" stroke="#10b981"/>
  <text x="320" y="270" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">SHARED L3 CACHE (32 MB - Ultra Fast SRAM)</text>
  
  <!-- Internal Interconnect Ring -->
  <rect x="110" y="295" width="420" height="35" rx="4" fill="#1e293b" stroke="#ca8a04"/>
  <text x="320" y="318" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">High-Speed On-Die Interconnect Bus</text>
  
  <!-- System Uncore / Controllers -->
  <g transform="translate(570, 105)">
    <rect width="180" height="240" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
    <text x="90" y="28" fill="#a855f7" font-size="12" font-weight="bold" text-anchor="middle">UNCORE CONTROLLERS</text>
    
    <rect x="15" y="45" width="150" height="45" rx="4" fill="#1e293b"/>
    <text x="90" y="66" fill="#f8fafc" font-size="11" text-anchor="middle">Memory Controller</text>
    <text x="90" y="82" fill="#94a3b8" font-size="9" text-anchor="middle">DDR5 RAM Bus (Direct)</text>
    
    <rect x="15" y="105" width="150" height="45" rx="4" fill="#1e293b"/>
    <text x="90" y="126" fill="#f8fafc" font-size="11" text-anchor="middle">PCIe Gen 5 Root</text>
    <text x="90" y="142" fill="#94a3b8" font-size="9" text-anchor="middle">NVMe &amp; GPU Lanes</text>
    
    <rect x="15" y="165" width="150" height="55" rx="4" fill="#1e293b"/>
    <text x="90" y="186" fill="#f8fafc" font-size="11" text-anchor="middle">Power &amp; Thermal</text>
    <text x="90" y="202" fill="#94a3b8" font-size="9" text-anchor="middle">DVFS Microcontroller</text>
  </g>
</svg>`,
      caption: {
        en: 'Microprocessors integrate multiple CPU execution cores, multi-level caches, and memory controllers on a monolithic silicon die.',
        bn: 'মাইক্রোপ্রসেসর একক সিলিকন ডাইয়ের ওপর একাধিক এক্সিকিউশন কোর, বহুস্তর ক্যাশ এবং মেমোরি কন্ট্রোলারকে একত্রিত করে।'
      },
    },
    {
      type: 'heading',
      id: 'core-cpu-responsibilities',
      text: {
        en: 'The Three Core Responsibilities of a Microprocessor',
        bn: 'মাইক্রোপ্রসেসরের ৩ টি প্রধান দায়িত্ব'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Regardless of architectural variety (whether x86_64, ARM64, or RISC-V), every microprocessor continuously carries out 3 fundamental duties:',
        bn: 'আর্কিটেকচারাল ভিন্নতা ( যেমন x86_64, ARM64 বা RISC-V ) সত্ত্বেও প্রতিটি মাইক্রোপ্রসেসর সর্বক্ষণ ৩ টি মৌলিক দায়িত্ব পালন করে:'
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '1. Instruction Fetch & Decoding',
          def: {
            en: 'Retrieving binary instruction words from system memory or L1 instruction cache using the Program Counter (PC), then interpreting the opcode to configure internal datapath routes.',
            bn: 'প্রোগ্রাম কাউন্টার (PC) ব্যবহার করে সিস্টেম মেমোরি বা L1 ক্যাশ থেকে বাইনারি নির্দেশ ফেচ করা এবং অপকোড বিশ্লেষণ করে অভ্যন্তরীণ সার্কিট সক্রিয় করা।'
          }
        },
        {
          term: '2. Arithmetic & Logic Transformation',
          def: {
            en: 'Operating electrical logic gates inside the Arithmetic Logic Unit (ALU) to compute arithmetic additions, subtractions, bitwise boolean operations, and floating-point math.',
            bn: 'অ্যারিথমেটিক লজিক ইউনিটের (ALU) লজিক গেট পরিচালনার মাধ্যমে সংখ্যা যোগ, বিয়োগ, বিটওয়াইজ বুলিয়ান এবং ফ্লোটিং-পয়েন্ট গণনার কাজ সম্পন্ন করা।'
          }
        },
        {
          term: '3. State Coordination & Memory Interfacing',
          def: {
            en: 'Updating architectural registers, advancing execution pointers, writing results to cache memory, and responding to hardware interrupts triggered by external peripherals.',
            bn: 'রেজিস্টার আপডেট করা, এক্সিকিউশন পয়েন্টার বৃদ্ধি করা, ক্যাশ মেমোরিতে ফলাফল রাইট করা এবং পেরিফেরাল ডিভাইসের হার্ডওয়্যার ইন্টারাপ্ট নিয়ন্ত্রণ করা।'
          }
        }
      ]
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'cpu-dispatch-engine.js',
      code: `// Deterministic Microprocessor Instruction Dispatch Engine
class MicroprocessorEngine {
  constructor() {
    // 4 Architectural 32-bit Registers: R0, R1, R2, R3
    this.regs = new Int32Array(4);
    this.pc = 0;          // Program Counter
    this.totalCycles = 0; // Simulated clock cycles
    this.instructionsRetired = 0;
  }

  // Fetch, Decode, and Execute an instruction sequence
  run(instructionStream) {
    console.log('--- Starting CPU Execution ---');

    while (this.pc < instructionStream.length) {
      this.totalCycles++;
      // 1. FETCH
      const currentInstruction = instructionStream[this.pc];
      this.pc++;

      // 2. DECODE & 3. EXECUTE
      switch (currentInstruction.op) {
        case 'LOAD_IMM':
          this.regs[currentInstruction.reg] = currentInstruction.val;
          console.log(\`Cycle \${this.totalCycles}: LOAD_IMM R\${currentInstruction.reg} = \${currentInstruction.val}\`);
          break;

        case 'ADD': {
          const sum = this.regs[currentInstruction.srcA] + this.regs[currentInstruction.srcB];
          this.regs[currentInstruction.dest] = sum;
          console.log(\`Cycle \${this.totalCycles}: ADD R\${currentInstruction.dest} = \${this.regs[currentInstruction.srcA]} + \${this.regs[currentInstruction.srcB]} -> \${sum}\`);
          break;
        }

        case 'SUB': {
          const diff = this.regs[currentInstruction.srcA] - this.regs[currentInstruction.srcB];
          this.regs[currentInstruction.dest] = diff;
          console.log(\`Cycle \${this.totalCycles}: SUB R\${currentInstruction.dest} = \${this.regs[currentInstruction.srcA]} - \${this.regs[currentInstruction.srcB]} -> \${diff}\`);
          break;
        }
      }

      this.instructionsRetired++;
    }
  }
}

// Machine program: Load 25 into R1, Load 15 into R2, Add R1 + R2 into R3
const program = [
  { op: 'LOAD_IMM', reg: 1, val: 25 },
  { op: 'LOAD_IMM', reg: 2, val: 15 },
  { op: 'ADD', dest: 3, srcA: 1, srcB: 2 },
];

const cpu = new MicroprocessorEngine();
cpu.run(program);

console.log('\\nExecution Summary:');
console.log('  Instructions Retired =', cpu.instructionsRetired);
console.log('  Total Clock Cycles   =', cpu.totalCycles);
console.log('  Register R3 Result   =', cpu.regs[3]);`,
      caption: {
        en: 'Microprocessor dispatch engine executing machine instructions to calculate 25 + 15 = 40 in 3 clock cycles.',
        bn: '৩ টি ক্লক সাইকেলে ২৫ + ১৫ = ৪০ গণনা সম্পন্নকারী মাইক্রোপ্রসেসর নির্দেশ ইঞ্জিন।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Silicon Transistor Scaling at the Nanometer Scale',
        bn: 'ন্যানোমিটার স্কেলে সিলিকন ট্রানজিস্টর স্কেলিং'
      },
      text: {
        en: 'Modern processor transistors are engineered at lithographic nodes measuring 3 nanometers (3 nm). To visualize this sub-microscopic scale: a single strand of human hair measures roughly 80000 nanometers in diameter. That means approximately 25000 modern silicon transistor gates can fit side-by-side across the thickness of a single human hair, enabling hundreds of millions of logic gates per square millimeter.',
        bn: 'আধুনিক প্রসেসর ট্রানজিস্টরগুলো মাত্র ৩ ন্যানোমিটার ( ৩ nm ) স্কেলে লিথোগ্রাফিক পদ্ধতিতে তৈরি করা হয়। এই অতি-ক্ষুদ্র আকারটি কল্পনা করতে: মানুষের একটি চুলের ব্যাস প্রায় ৮০000 ন্যানোমিটার। অর্থাৎ একটি একক চুলের পুরুত্বের মধ্যে প্রায় ২৫000 আধুনিক সিলিকন ট্রানজিস্টর পাশাপাশি বসানো সম্ভব, যা প্রতি বর্গ মিলিমিটারে শত শত মিলিয়ন লজিক গেট স্থাপনের সুযোগ দেয়।'
      },
    },
  ],
  exercises: [
    {
      id: 'cpu-meet-ex-1',
      kind: 'predict',
      question: {
        en: 'If a silicon microprocessor die holds 10 billion transistors and transistor density doubles according to Moore\'s Law over 2 years, how many billion transistors will be fabricated on the same silicon die area in 2 years? (10 * 2)',
        bn: 'যদি একটি সিলিকন মাইক্রোপ্রসেসর ডাইয়ে ১০ বিলিয়ন ট্রানজিস্টর থাকে এবং মুরস ল অনুসারে ২ বছরে ট্রানজিস্টর ঘনত্ব দ্বিগুণ হয়, তবে একই আয়তনের ডাইয়ে ২ বছর পর কত বিলিয়ন ট্রানজিস্টর তৈরি করা যাবে? ( ১০ * ২ )'
      },
      answer: '20',
      hint: {
        en: 'Multiply current transistor count (10) by 2.',
        bn: 'বর্তমান ট্রানজিস্টর সংখ্যা ( ১০ ) কে ২ দিয়ে গুণ করুন।'
      },
      explanation: {
        en: 'Following Moore\'s Law, doubling a density of 10 billion transistors over a 2-year cadence yields 20 billion transistors on the same silicon footprint.',
        bn: 'মুরস ল অনুসারে ২ বছরের মধ্যে ১০ বিলিয়ন ট্রানজিস্টরের ঘনত্ব দ্বিগুণ হয়ে একই সিলিকন ক্ষেত্রফলে ২০ বিলিয়ন ট্রানজিস্টরে পৌঁছায়।'
      },
    },
    {
      id: 'cpu-meet-ex-2',
      kind: 'mcq',
      question: {
        en: 'What was the revolutionary achievement of the Intel 4004 microprocessor released in 1971?',
        bn: '১৯৭১ সালে মুক্তিপ্রাপ্ত ইনটেল ৪০০৪ মাইক্রোপ্রসেসরের বৈপ্লবিক অর্জন কোনটি ছিল?'
      },
      options: [
        {
          en: 'It was the world\'s first commercially produced single-chip microprocessor, condensing all CPU logic onto one silicon die',
          bn: 'এটি ছিল বিশ্বের প্রথম বাণিজ্যিকভাবে উৎপাদিত একক চিপের মাইক্রোপ্রসেসর, যা সিপিইউর সব লজিক একটি সিলিকন ডাইয়ে নিয়ে আসে',
        },
        {
          en: 'It was the first computer processor to operate entirely underwater without electricity',
          bn: 'এটি ছিল বিদ্যুৎ ছাড়া সম্পূর্ণ পানির নিচে চলা প্রথম কম্পিউটার প্রসেসর',
        },
        {
          en: 'It could store 1 terabyte of video files on magnetic tape',
          bn: 'এটি ম্যাগনেটিক টেপে ১ টেরাবাইট ভিডিও ফাইল সংরক্ষণ করতে পারত',
        },
        {
          en: 'It eliminated the need for binary arithmetic by calculating in decimal letters',
          bn: 'এটি দশমিক অক্ষরে হিসাব করে বাইনারি পাটিগণিতের প্রয়োজনীয়তা দূর করেছিল',
        },
      ],
      answer: 0,
      hint: {
        en: 'Before 1971, computer CPUs consisted of dozens of discrete circuit boards rather than a single monolithic chip.',
        bn: '১৯৭১ সালের আগে কম্পিউটারের সিপিইউ একটি একক চিপের বদলে বহু সার্কিট বোর্ডের সমন্বয়ে গঠিত হতো।',
      },
      explanation: {
        en: 'The Intel 4004 integrated all core processing circuits—arithmetic logic, registers, and instruction decoding—onto a single silicon die containing 2300 transistors.',
        bn: 'ইনটেল ৪০০৪ সব মূল প্রসেসিং সার্কিট ( অ্যালু, রেজিস্টার ও ডিকোডার ) ২৩০০ টি ট্রানজিস্টর সমৃদ্ধ একটিমাত্র সিলিকন ডাইয়ে একত্রিত করেছিল।'
      },
    },
    {
      id: 'cpu-meet-ex-3',
      kind: 'mcq',
      question: {
        en: 'Which fundamental semiconductor device acts as the microscopic electrical switch forming digital binary logic inside modern CPUs?',
        bn: 'আধুনিক সিপিইউতে ডিজিটাল বাইনারি লজিক গঠনের জন্য অণুবীক্ষণিক বৈদ্যুতিক সুইচ হিসেবে কোন মৌলিক সেমিকন্ডাক্টর ডিভাইসটি কাজ করে?'
      },
      options: [
        {
          en: 'MOSFET Transistor (Metal-Oxide-Semiconductor Field-Effect Transistor)',
          bn: 'মসফেট ট্রানজিস্টর (MOSFET Transistor)',
        },
        {
          en: 'Incandescent Tungsten Light Bulb',
          bn: 'ভাস্বর টাংস্টেন লাইট বাল্ব',
        },
        {
          en: 'Analog Mechanical Relay Switch',
          bn: 'অ্যানালগ মেকানিক্যাল রিলে সুইচ',
        },
        {
          en: 'Liquid Mercury Thermometer',
          bn: 'তরল পারদ থার্মোমিটার',
        },
      ],
      answer: 0,
      hint: {
        en: 'The field-effect transistor that conducts electricity when its gate voltage is asserted.',
        bn: 'ফিল্ড-ইফেক্ট ট্রানজিস্টর যার গেট ভোল্টেজ সক্রিয় হলে বিদ্যুৎ প্রবাহিত হয়।',
      },
      explanation: {
        en: 'Silicon MOSFET transistors act as ultra-fast digital switches: applying gate voltage switches the channel between conducting (binary 1) and non-conducting (binary 0) states.',
        bn: 'সিলিকন মসফেট ট্রানজিস্টর উচ্চগতির সুইচ হিসেবে কাজ করে: গেট ভোল্টেজ প্রয়োগের মাধ্যমে এটি পরিবাহী ( ১ ) এবং অপরিবাহী ( ০ ) অবস্থায় পরিবর্তিত হয়।'
      },
    },
    {
      id: 'cpu-meet-ex-4',
      kind: 'predict',
      question: {
        en: 'What is the standard 3-letter abbreviation for the Central Processing Unit that drives computer computation? Type the 3 capital letters.',
        bn: 'কম্পিউটার গণনা পরিচালনাকারী সেন্ট্রাল প্রসেসিং ইউনিটের আদর্শ ৩ অক্ষরের সংক্ষিপ্ত রূপ কোনটি? ৩ টি বড় হাতের অক্ষরে টাইপ করুন।'
      },
      answer: 'CPU',
      hint: {
        en: 'Initials of Central Processing Unit.',
        bn: 'Central Processing Unit এর আদ্যক্ষর।',
      },
      explanation: {
        en: 'CPU stands for Central Processing Unit, the primary silicon brain responsible for running software programs in computer systems.',
        bn: 'CPU হলো Central Processing Unit-এর সংক্ষিপ্ত রূপ, যা কম্পিউটার সিস্টেমে সফটওয়্যার প্রোগ্রাম চালানোর প্রধান সিলিকন মস্তিষ্ক হিসেবে কাজ করে।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'CPU Architecture Fundamentals Quiz',
      bn: 'সিপিইউ আর্কিটেকচার ফান্ডামেন্টালস কুইজ'
    },
    questions: [
      {
        id: 'cpu-meet-qz-1',
        kind: 'mcq',
        topic: 'cpu-primary-role',
        question: {
          en: 'What is the primary operational role of the Central Processing Unit (CPU) within a computer system?',
          bn: 'একটি কম্পিউটার সিস্টেমে সেন্ট্রাল প্রসেসিং ইউনিটের (CPU) প্রাথমিক কার্যগত ভূমিকা কী?'
        },
        options: [
          {
            en: 'Fetching, decoding, and executing machine code instructions to perform computations and coordinate system components',
            bn: 'গণনা সম্পাদন এবং সিস্টেম উপাদান সমন্বয় করতে মেশিন কোড নির্দেশ ফেচ, ডিকোড এবং এক্সিকিউট করা',
          },
          {
            en: 'Storing long-term static data permanently without electrical power',
            bn: 'বিদ্যুৎ ছাড়া স্থায়ীভাবে দীর্ঘমেয়াদী স্ট্যাটিক ডাটা সংরক্ষণ করা',
          },
          {
            en: 'Converting alternating current (AC) electricity from the wall socket into direct current (DC)',
            bn: 'দেয়ালের সকেট থেকে আসা এসি বিদ্যুৎকে ডিসি বিদ্যুতে রূপান্তর করা',
          },
          {
            en: 'Displaying visual graphic pixels onto the monitor panel directly through analog beams',
            bn: 'অ্যানালগ রশ্মির সাহায্যে মনিটরে সরাসরি ভিজ্যুয়াল গ্রাফিক পিক্সেল প্রদর্শন করা',
          },
        ],
        answer: 0,
        hint: {
          en: 'The execution engine that reads software instructions and performs mathematical and logical operations.',
          bn: 'যে এক্সিকিউশন ইঞ্জিন সফটওয়্যার নির্দেশ পড়ে গাণিতিক ও যৌক্তিক কাজ পরিচালনা করে।',
        },
        explanation: {
          en: 'The CPU acts as the central execution engine of a computer, interpreting program code instructions and orchestrating data flow across registers, memory, and devices.',
          bn: 'সিপিইউ কম্পিউটারের কেন্দ্রীয় এক্সিকিউশন ইঞ্জিন হিসেবে কাজ করে, যা প্রোগ্রাম নির্দেশ ব্যাখ্যা করে এবং রেজিস্টার, মেমোরি ও ডিভাইসের মধ্যে ডাটা প্রবাহ পরিচালনা করে।'
        },
      },
      {
        id: 'cpu-meet-qz-2',
        kind: 'mcq',
        topic: 'single-chip-microprocessor',
        question: {
          en: 'How did the invention of the monolithic single-chip microprocessor transform computer systems compared to early vacuum tube mainframes?',
          bn: 'একক চিপের মাইক্রোপ্রসেসর আবিষ্কার কীভাবে প্রাচীন ভ্যাকুয়াম টিউব মেইনফ্রেমের তুলনায় কম্পিউটার সিস্টেমকে আমূল বদলে দিয়েছিল?'
        },
        options: [
          {
            en: 'By condensing room-sized discrete circuitry onto a tiny silicon die, drastically slashing power consumption, cost, and physical size while increasing speed',
            bn: 'ঘরের মতো বিশাল সার্কিটকে একটি ক্ষুদ্র সিলিকন ডাইয়ে এনে বিদ্যুৎ খরচ, আকার ও ব্যয় নাটকীয়ভাবে কমিয়ে এবং গতি বহুগুণ বাড়িয়ে',
          },
          {
            en: 'By allowing computers to run on steam power instead of electrical circuits',
            bn: 'বৈদ্যুতিক সার্কিটের বদলে বাষ্পীয় শক্তিতে কম্পিউটার চালানোর সুবিধা দিয়ে',
          },
          {
            en: 'By requiring operators to manually punch paper cards for every calculation',
            bn: 'প্রতিটি গণনার জন্য অপারেটরদের নিজ হাতে পাঞ্চ কার্ড তৈরির বাধ্যবাধকতা এনে',
          },
          {
            en: 'By eliminating all forms of internal computer memory entirely',
            bn: 'কম্পিউটারের অভ্যন্তরীণ মেমোরির প্রয়োজনীয়তা সম্পূর্ণ মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Monolithic silicon integration enabled orders of magnitude reduction in physical dimensions and electrical consumption.',
          bn: 'একক সিলিকনে সংহত করার ফলে আকার ও বিদ্যুৎ খরচে ব্যাপক পরিবর্তন আসে।',
        },
        explanation: {
          en: 'Integrating thousands of transistors onto a single silicon chip democratized computing, transitioning machines from giant room-sized mainframes into compact personal computers.',
          bn: 'একটি সিলিকন চিপে হাজার হাজার ট্রানজিস্টর একত্রিত করার ফলে বিশাল মেইনফ্রেমের জায়গা নেয় ক্ষুদ্র ব্যক্তিগত কম্পিউটার।'
        },
      },
      {
        id: 'cpu-meet-qz-3',
        kind: 'mcq',
        topic: 'moores-law-cadence',
        question: {
          en: 'What empirical trend in semiconductor manufacturing is formulated by Moore\'s Law?',
          bn: 'মুরস ল (Moore\'s Law) সেমিকন্ডাক্টর উৎপাদনের কোন ঐতিহাসিক প্রবণতাকে সংজ্ঞায়িত করে?'
        },
        options: [
          {
            en: 'The number of transistors packed onto a dense integrated circuit doubles approximately every 2 years',
            bn: 'একটি ঘন ইন্টিগ্রেটেড সার্কিটে ট্রানজিস্টরের সংখ্যা প্রায় প্রতি ২ বছরে দ্বিগুণ হয়',
          },
          {
            en: 'Computer monitors double in physical glass thickness every 10 years',
            bn: 'কম্পিউটার মনিটরের কাঁচের পুরুত্ব প্রতি ১০ বছরে দ্বিগুণ হয়',
          },
          {
            en: 'The electrical power required by a computer increases by 100 times every year',
            bn: 'কম্পিউটারের প্রয়োজনীয় বৈদ্যুতিক শক্তি প্রতি বছর ১০০ গুণ বৃদ্ধি পায়',
          },
          {
            en: 'Software bugs increase proportionally to the length of computer power cables',
            bn: 'কম্পিউটার পাওয়ার কেবলের দৈর্ঘ্যের অনুপাতে সফটওয়্যার বাগ বৃদ্ধি পায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Gordon Moore\'s observation regarding transistor count growth on microchips over a two-year period.',
          bn: 'দুই বছরের ব্যবধানে মাইক্রোচিপে ট্রানজিস্টর সংখ্যার বৃদ্ধি সংক্রান্ত গর্ডন মুরের ঐতিহাসিক পর্যবেক্ষণ।',
        },
        explanation: {
          en: 'Gordon Moore observed that ongoing innovations in semiconductor photolithography allow transistor counts on silicon microchips to double roughly every 2 years, driving decades of exponential computing growth.',
          bn: 'গর্ডন মুর লক্ষ্য করেছিলেন যে ফটোলিথোগ্রাফির উন্নতির কল্যাণে সিলিকন চিপে ট্রানজিস্টরের সংখ্যা প্রায় প্রতি ২ বছরে দ্বিগুণ হয়, যা কম্পিউটিং বিপ্লবের মূল চালিকাশক্তি।'
        },
      },
      {
        id: 'cpu-meet-qz-4',
        kind: 'mcq',
        topic: 'cpu-memory-interface',
        question: {
          en: 'How does a modern microprocessor communicate with high-speed system RAM across the motherboard?',
          bn: 'একটি আধুনিক মাইক্রোপ্রসেসর মাদারবোর্ডে উচ্চগতির সিস্টেম র‍্যামের সাথে কীভাবে যোগাযোগ করে?'
        },
        options: [
          {
            en: 'Through an integrated memory controller on the CPU die directly driving dedicated high-frequency memory bus channels',
            bn: 'সিপিইউ ডাইয়ের ইন্টিগ্রেটেড মেমোরি কন্ট্রোলারের মাধ্যমে সরাসরি উচ্চ-ফ্রিকোয়েন্সির ডেডিকেটেড মেমোরি বাস চ্যানেল পরিচালনা করে',
          },
          {
            en: 'By sending radio waves across the room to the power outlet',
            bn: 'ঘরের মধ্যে রেডিও তরঙ্গ পাঠিয়ে পাওয়ার আউটলেটের সাথে যোগাযোগের মাধ্যমে',
          },
          {
            en: 'Through an external sound card converting bits into human audible beeps',
            bn: 'শব্দ কার্ডের সাহায্যে বাইনারি বিটকে মানুষের শ্রবণযোগ্য শব্দে রূপান্তর করে',
          },
          {
            en: 'By writing data onto optical laser discs that spin inside the processor',
            bn: 'প্রসেসরের ভেতরে থাকা অপটিক্যাল লেজার ডিস্কে ডাটা লিখে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Modern CPUs contain the memory controller directly on the silicon die for minimal latency.',
          bn: 'ন্যূনতম ল্যাটেন্সির জন্য আধুনিক সিপিইউতে সরাসরি সিলিকন ডাইয়ের ওপরে মেমোরি কন্ট্রোলার বসানো থাকে।',
        },
        explanation: {
          en: 'Modern CPUs integrate the memory controller directly on-die, communicating with DDR RAM over high-speed parallel bus channels (such as dual-channel or quad-channel buses) to minimize latency.',
          bn: 'আধুনিক সিপিইউতে সরাসরি অন-ডাই মেমোরি কন্ট্রোলার থাকে যা ডিডিআর র‍্যামের সাথে উচ্চগতির সমান্তরাল বাস চ্যানেলের মাধ্যমে সরাসরি যোগাযোগ করে ল্যাটেন্সি কমিয়ে রাখে।'
        },
      },
    ],
  },
  next: {
    slug: 'cpu-anatomy',
    title: {
      en: 'CPU Anatomy: Control Unit, ALU & Registers',
      bn: 'সিপিইউ গঠন: কন্ট্রোল ইউনিট, অ্যালু এবং রেজিস্টার'
    },
  },
};
