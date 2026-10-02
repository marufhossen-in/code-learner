import type { Lesson } from '../../../lib/types';

export const CpuAnatomyLesson: Lesson = {
  slug: 'cpu-anatomy',
  tech: 'cpu',
  title: {
    en: 'CPU Anatomy: Control Unit, ALU, Registers & Internal Buses',
    bn: 'সিপিইউ গঠন: কন্ট্রোল ইউনিট, অ্যালু, রেজিস্টার এবং অভ্যন্তরীণ বাস'
  },
  summary: {
    en: 'Dissect the internal anatomy of a central processing unit. Understand the specialized sub-systems that execute computations across silicon circuits. Learn how the Control Unit coordinates clock signals, the ALU performs math and logic, the Register File supplies sub-nanosecond operands, and internal buses link them together.',
    bn: 'একটি সেন্ট্রাল প্রসেসিং ইউনিটের অভ্যন্তরীণ গঠন পুঙ্খানুপুঙ্খভাবে বিশ্লেষণ করুন। সিলিকন সার্কিটজুড়ে কম্পিউটেশন পরিচালনাকারী বিশেষায়িত সাব-সিস্টেমগুলো জানুন। কন্ট্রোল ইউনিট কীভাবে ক্লক সংকেত সমন্বয় করে, অ্যালু কীভাবে গণিত ও যুক্তি সম্পাদন করে, রেজিস্টার ফাইল কীভাবে সাব-ন্যানোসেকেন্ড অপারেন্ড সরবরাহ করে এবং অভ্যন্তরীণ বাস এদের সংযুক্ত করে তা শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'three-anatomical-pillars',
      text: {
        en: 'The Three Pillars of CPU Architecture: Control, Compute, and Storage',
        bn: 'সিপিইউ আর্কিটেকচারের ৩ টি মূল স্তম্ভ: কন্ট্রোল, কম্পিউট এবং স্টোরেজ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you look inside a central processing unit, you find a sophisticated cluster of specialized functional blocks operating in concert. A CPU is not a single monolithic circuit. Instead, every core partitions its workload into three foundational pillars: control, arithmetic calculation, and ultra-fast register storage.',
        bn: 'আপনি যখন সেন্ট্রাল প্রসেসিং ইউনিটের অভ্যন্তরে তাকাবেন, তখন দেখতে পাবেন সমন্বিতভাবে কাজ করা বিশেষায়িত কার্যকরী ব্লকের এক সুশৃঙ্খল সমাবেশ। সিপিইউ কোনো একক সার্কিট নয়। প্রতিটি কোর তার কাজকে ৩ টি মৌলিক স্তম্ভে ভাগ করে নেয়: কন্ট্রোল পরিচালনা, গাণিতিক হিসাব এবং অতি দ্রুতগতির রেজিস্টার স্টোরেজ।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. The Control Unit (CU) — The Conductor',
            bn: '১. কন্ট্রোল ইউনিট (CU) — অর্কেস্ট্রা পরিচালক'
          },
          text: {
            en: 'The Control Unit oversees the execution cycle. It fetches machine code instructions from memory into the Instruction Register (IR), uses a decoder to interpret the binary opcode, and pulses electrical control lines to coordinate ALU operations, register reads, and data bus routing.',
            bn: 'কন্ট্রোল ইউনিট এক্সিকিউশন সাইকেল পরিচালনা করে। এটি মেমোরি থেকে ইন্সট্রাকশন রেজিস্টারে (IR) মেশিন কোড নির্দেশ নিয়ে আসে, ডিকোডার দিয়ে বাইনারি অপকোড ব্যাখ্যা করে এবং অভ্যন্তরীণ তারে বৈদ্যুতিক সংকেত পাঠিয়ে অ্যালু ও রেজিস্টারের কাজ সমন্বয় করে।'
          }
        },
        {
          title: {
            en: '2. The Arithmetic Logic Unit (ALU) — The Compute Engine',
            bn: '২. অ্যারিথমেটিক লজিক ইউনিট (ALU) — কম্পিউট ইঞ্জিন'
          },
          text: {
            en: 'The ALU executes all elementary mathematical operations (such as integer addition, subtraction, and multiplication) along with bitwise logical operations (AND, OR, XOR, NOT). It evaluates arithmetic conditions and asserts hardware status flags (Zero, Carry, Negative, and Overflow).',
            bn: 'অ্যালু সমস্ত মৌলিক গাণিতিক কাজ ( যেমন পূর্ণসংখ্যার যোগ, বিয়োগ ও গুণ ) এবং বিটওয়াইজ যৌক্তিক অপারেশন ( AND, OR, XOR, NOT ) সম্পাদন করে। এটি গণনার ফলাফল মূল্যায়ন করে হার্ডওয়্যার স্ট্যাটাস ফ্ল্যাগ ( জিরো, ক্যারি, নেগেটিভ ও ওভারফ্লো ) সক্রিয় করে।'
          }
        },
        {
          title: {
            en: '3. The Register File — The Ultra-Fast Storage Bank',
            bn: '৩. রেজিস্টার ফাইল — অতি দ্রুতগতির স্টোরেজ ব্যাংক'
          },
          text: {
            en: 'Registers are tiny storage cells built directly into the silicon core using static RAM flip-flops. Capable of being read and written within a single clock cycle (less than 1 nanosecond), registers feed immediate operands straight into ALU execution ports.',
            bn: 'রেজিস্টার হলো স্ট্যাটিক র‍্যাম ফ্লিপ-ফ্লপ ব্যবহার করে সরাসরি সিলিকন কোরের ভেতরে তৈরি ক্ষুদ্র স্টোরেজ সেল। ১ টি ক্লক সাইকেলের মধ্যে ( ১ ন্যানোসেকেন্ডেরও কম সময়ে ) পড়া ও লেখার ক্ষমতাসম্পন্ন এই রেজিস্টারগুলো সরাসরি অ্যালুর ইনপুটে অপারেন্ড সরবরাহ করে।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      title: {
        en: 'Detailed CPU Core Internal Anatomy and Datapath Routing',
        bn: 'সিপিইউ কোরের বিশদ অভ্যন্তরীণ গঠন এবং ডাটাপাথ রাউটিং'
      },
      svg: `<svg viewBox="0 0 820 420" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Detailed diagram of CPU internal anatomy showing CU ALU registers and buses">
  <rect width="820" height="420" fill="#0f172a" rx="12"/>
  
  <text x="410" y="32" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">CPU INTERNAL ANATOMY &amp; CO-PROCESSOR SUBSYSTEMS</text>
  
  <!-- Control Unit Box -->
  <g transform="translate(40, 60)">
    <rect width="220" height="230" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="110" y="28" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">CONTROL UNIT (CU)</text>
    
    <rect x="20" y="45" width="180" height="35" rx="4" fill="#0f172a"/>
    <text x="110" y="68" fill="#f8fafc" font-size="11" text-anchor="middle">Program Counter (PC)</text>
    
    <rect x="20" y="90" width="180" height="35" rx="4" fill="#0f172a"/>
    <text x="110" y="113" fill="#f8fafc" font-size="11" text-anchor="middle">Instruction Register (IR)</text>
    
    <rect x="20" y="135" width="180" height="40" rx="4" fill="#0f172a"/>
    <text x="110" y="160" fill="#f59e0b" font-size="11" text-anchor="middle">Instruction Decoder</text>
    
    <rect x="20" y="185" width="180" height="30" rx="4" fill="#0f172a"/>
    <text x="110" y="205" fill="#10b981" font-size="10" text-anchor="middle">Timing &amp; Control Logic</text>
  </g>
  
  <!-- Register File Box -->
  <g transform="translate(300, 60)">
    <rect width="210" height="230" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
    <text x="105" y="28" fill="#a855f7" font-size="13" font-weight="bold" text-anchor="middle">REGISTER FILE</text>
    
    <rect x="20" y="45" width="170" height="22" rx="3" fill="#0f172a"/>
    <text x="105" y="61" fill="#cbd5e1" font-size="10" text-anchor="middle">R0: Hardwired 0</text>
    <rect x="20" y="72" width="170" height="22" rx="3" fill="#0f172a"/>
    <text x="105" y="88" fill="#cbd5e1" font-size="10" text-anchor="middle">R1: General Purpose</text>
    <rect x="20" y="99" width="170" height="22" rx="3" fill="#0f172a"/>
    <text x="105" y="115" fill="#cbd5e1" font-size="10" text-anchor="middle">R2: General Purpose</text>
    <rect x="20" y="126" width="170" height="22" rx="3" fill="#0f172a"/>
    <text x="105" y="142" fill="#cbd5e1" font-size="10" text-anchor="middle">R3: General Purpose</text>
    <rect x="20" y="153" width="170" height="22" rx="3" fill="#0f172a"/>
    <text x="105" y="169" fill="#f59e0b" font-size="10" text-anchor="middle">SP: Stack Pointer</text>
    <rect x="20" y="180" width="170" height="22" rx="3" fill="#0f172a"/>
    <text x="105" y="196" fill="#f59e0b" font-size="10" text-anchor="middle">BP: Base Pointer</text>
    <text x="105" y="218" fill="#38bdf8" font-size="9" text-anchor="middle">Dual Read Ports | 1 Write Port</text>
  </g>
  
  <!-- ALU & FPU Execution Box -->
  <g transform="translate(550, 60)">
    <rect width="230" height="230" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="115" y="28" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">EXECUTION ENGINES</text>
    
    <!-- Integer ALU -->
    <rect x="20" y="45" width="190" height="75" rx="6" fill="#0f172a" stroke="#10b981"/>
    <text x="115" y="70" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">INTEGER ALU</text>
    <text x="115" y="90" fill="#cbd5e1" font-size="10" text-anchor="middle">Adder | Logic Gates | Shifter</text>
    <text x="115" y="108" fill="#f59e0b" font-size="9" text-anchor="middle">Status Flags: Z, C, N, V</text>
    
    <!-- Floating Point Unit FPU -->
    <rect x="20" y="135" width="190" height="75" rx="6" fill="#0f172a" stroke="#ca8a04"/>
    <text x="115" y="160" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">FLOATING POINT (FPU)</text>
    <text x="115" y="180" fill="#cbd5e1" font-size="10" text-anchor="middle">IEEE 754 Math | SIMD Vectors</text>
    <text x="115" y="198" fill="#38bdf8" font-size="9" text-anchor="middle">Square Roots | Matrix Math</text>
  </g>
  
  <!-- Internal System Interconnect Buses -->
  <g transform="translate(40, 310)">
    <rect width="740" height="85" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <text x="370" y="25" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">INTERNAL PROCESSOR BUSSES &amp; MEMORY INTERFACE</text>
    
    <rect x="30" y="40" width="200" height="30" rx="4" fill="#0284c7"/>
    <text x="130" y="60" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Internal Data Bus (64-bit)</text>
    
    <rect x="270" y="40" width="200" height="30" rx="4" fill="#ca8a04"/>
    <text x="370" y="60" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Internal Address Bus (64-bit)</text>
    
    <rect x="510" y="40" width="200" height="30" rx="4" fill="#16a34a"/>
    <text x="610" y="60" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">L1 Cache Interface Line</text>
  </g>
</svg>`,
      caption: {
        en: 'The internal CPU datapath orchestrates instruction decoding in the Control Unit, math in the ALU and FPU, and temporary state in registers.',
        bn: 'অভ্যন্তরীণ সিপিইউ ডাটাপাথ কন্ট্রোল ইউনিটে ডিকোডিং, অ্যালু ও এফপিইউতে গণনা এবং রেজিস্টারে অস্থায়ী স্টেট সংরক্ষণ সমন্বয় করে।'
      },
    },
    {
      type: 'heading',
      id: 'specialized-coprocessors',
      text: {
        en: 'Specialized Hardware: Floating-Point Units & SIMD Vectors',
        bn: 'বিশেষায়িত হার্ডওয়্যার: ফ্লোটিং-পয়েন্ট ইউনিট এবং সিমড ভেক্টর'
      },
    },
    {
      type: 'para',
      text: {
        en: 'While standard ALUs operate strictly on whole integers, modern computing demands complex fractional calculations for 3D graphics, physics simulations, audio processing, and deep learning. Microprocessors incorporate dedicated Floating-Point Units (FPUs) adhering to the IEEE 754 standard for single-precision (32-bit) and double-precision (64-bit) floating-point calculations.',
        bn: 'সাধারণ অ্যালু কেবল পূর্ণসংখ্যা নিয়ে কাজ করে, কিন্তু আধুনিক কম্পিউটিংয়ে থ্রিডি গ্রাফিক্স, পদার্থবিজ্ঞান সিমুলেশন, অডিও প্রসেসিং এবং কৃত্রিম বুদ্ধিমত্তার জন্য জটিল ভগ্নাংশের গণনার প্রয়োজন হয়। এজন্য মাইক্রোপ্রসেসরে নিবেদিত ফ্লোটিং-পয়েন্ট ইউনিট (FPU) অন্তর্ভুক্ত থাকে যা সিঙ্গেল-প্রিসিশন ( ৩২-বিট ) এবং ডাবল-প্রিসিশন ( ৬৪-বিট ) গণনার জন্য IEEE 754 মান অনুসরণ করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To accelerate scientific and multimedia algorithms, CPU architects introduced SIMD (Single Instruction, Multiple Data) vector extensions, such as Intel AVX-512 and ARM NEON. Instead of adding two numbers in isolation, a single 512-bit vector register holds 16 separate 32-bit floating-point numbers, calculating all 16 arithmetic operations simultaneously in 1 clock cycle.',
        bn: 'বৈজ্ঞানিক এবং মাল্টিমিডিয়া অ্যালগরিদমের গতি বাড়াতে সিপিইউ ডিজাইনাররা সিমড ( Single Instruction, Multiple Data ) ভেক্টর এক্সটেনশন যুক্ত করেছেন, যেমন Intel AVX-512 এবং ARM NEON। একটি একক নির্দেশ দিয়ে ২ টি সংখ্যা আলাদা যোগ করার বদলে একটি ৫১২-বিট ভেক্টর রেজিস্টারে ১৬ টি পৃথক ৩২-বিট ফ্লোটিং-পয়েন্ট সংখ্যা রাখা যায় এবং ১ টি ক্লক সাইকেলে একসাথে ১৬ টি যোগ সম্পন্ন করা যায়।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'cpu-anatomy-simulator.js',
      code: `// Deterministic CPU Internal Subsystem Simulation (CU, ALU, FPU, Registers)
class CpuSubsystems {
  constructor() {
    this.pc = 0;
    // 8 General-Purpose Registers: R0 to R7
    this.regs = new Float64Array(8);
    this.flags = { zero: false, negative: false };
    this.clockCycles = 0;
  }

  // Control Unit: Fetches and decodes instruction
  step(instruction) {
    this.clockCycles++;
    console.log(\`[CU] Cycle \${this.clockCycles}: Decoding \${instruction.op}\`);

    switch (instruction.op) {
      case 'INT_ADD': { // Routed to Integer ALU
        const a = this.regs[instruction.srcA];
        const b = this.regs[instruction.srcB];
        const result = (a + b) | 0; // Truncate to 32-bit int
        this.regs[instruction.dest] = result;
        this.flags.zero = (result === 0);
        this.flags.negative = (result < 0);
        console.log(\`  [ALU] Integer ADD R\${instruction.dest} = \${a} + \${b} -> \${result} (Zero=\${this.flags.zero})\`);
        break;
      }

      case 'FP_SQRT': { // Routed to Floating-Point Unit (FPU)
        const val = this.regs[instruction.src];
        const result = Math.sqrt(val);
        this.regs[instruction.dest] = result;
        console.log(\`  [FPU] Sqrt(R\${instruction.src}) -> \${result.toFixed(4)} stored in R\${instruction.dest}\`);
        break;
      }

      case 'SET': {
        this.regs[instruction.dest] = instruction.val;
        break;
      }
    }
  }
}

const cpu = new CpuSubsystems();

// 1. Load initial integer values
cpu.step({ op: 'SET', dest: 1, val: 50 });
cpu.step({ op: 'SET', dest: 2, val: 30 });

// 2. Execute integer addition on ALU: R3 = R1 + R2 = 80
cpu.step({ op: 'INT_ADD', dest: 3, srcA: 1, srcB: 2 });

// 3. Execute floating-point square root on FPU: R4 = sqrt(R3) = sqrt(80)
cpu.step({ op: 'FP_SQRT', dest: 4, src: 3 });

console.log('\\nFinal Architectural State:');
console.log('  R3 (ALU Integer Sum) =', cpu.regs[3]);
console.log('  R4 (FPU Square Root) =', cpu.regs[4].toFixed(4));
console.log('  Zero Condition Flag  =', cpu.flags.zero);`,
      caption: {
        en: 'Integrated simulation demonstrating how Control Unit routes integer math to the ALU and floating-point math to the FPU.',
        bn: 'কন্ট্রোল ইউনিট কীভাবে পূর্ণসংখ্যার কাজ অ্যালুতে এবং দশমিকের কাজ এফপিইউতে পাঠায় তার সমন্বিত সিমুলেশন।'
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Hardwired Control vs Microcode ROM Decoding',
        bn: 'হার্ডওয়্যার্ড কন্ট্রোল বনাম মাইক্রোকোড রম ডিকোডিং'
      },
      text: {
        en: 'Early CISC processors (such as the Intel 8086) implemented complex instructions using an internal Microcode ROM—essentially a miniature processor inside the CPU that translated high-level instructions into sequences of primitive micro-operations. In contrast, modern RISC processors employ Hardwired Control Units built entirely from fast combinational logic gates, decoding instructions in a fraction of a nanosecond to achieve single-cycle execution.',
        bn: 'প্রাচীন সিআইএসসি প্রসেসরগুলো ( যেমন ইনটেল ৮০৮৬ ) একটি অভ্যন্তরীণ মাইক্রোকোড রম ( Microcode ROM ) ব্যবহার করে জটিল নির্দেশগুলো সম্পন্ন করত—যা মূলত প্রসেসরের ভেতরের আরেকটি অতি-ক্ষুদ্র প্রসেসর ছিল। এর বিপরীতে আধুনিক আরআইএসসি প্রসেসর সম্পূর্ণ দ্রুতগতির কম্বিনেশনাল লজিক গেট দিয়ে গঠিত হার্ডওয়্যার্ড কন্ট্রোল ইউনিট ব্যবহার করে, যা ন্যানোসেকেন্ডের ভগ্নাংশে নির্দেশ ডিকোড করে প্রতি ক্লকে ১ টি নির্দেশ সম্পন্ন করতে পারে।'
      },
    },
  ],
  exercises: [
    {
      id: 'cpu-anat-ex-1',
      kind: 'predict',
      question: {
        en: 'On a processor core equipped with 512-bit SIMD vector registers, how many 32-bit (4-byte) single-precision floating-point numbers can be packed and calculated in parallel? (512 / 32)',
        bn: '৫১২-বিট সিমড ভেক্টর রেজিস্টারযুক্ত একটি প্রসেসর কোরে কয়টি ৩২-বিট ( ৪-বাইট ) ফ্লোটিং-পয়েন্ট সংখ্যা একসাথে রেখে গণনা করা সম্ভব? ( ৫১২ / ৩২ )'
      },
      answer: '16',
      hint: {
        en: 'Divide the 512-bit register width by the 32-bit element size.',
        bn: '৫১২-বিট রেজিস্টারের আকারকে ৩২-বিট উপাদানের আকার দিয়ে ভাগ করুন।'
      },
      explanation: {
        en: 'Dividing 512 bits by 32 bits per floating-point number gives exactly 16 parallel data lanes per SIMD vector instruction.',
        bn: '৫১২ বিটকে ৩২ বিট দিয়ে ভাগ করলে প্রতি ভেক্টর নির্দেশে ঠিক ১৬ টি সমান্তরাল ডাটা লেন পাওয়া যায়।'
      },
    },
    {
      id: 'cpu-anat-ex-2',
      kind: 'mcq',
      question: {
        en: 'Which CPU sub-system acts as the conductor of the execution engine, interpreting instruction opcodes and driving internal control lines?',
        bn: 'কোন সিপিইউ সাব-সিস্টেম এক্সিকিউশন ইঞ্জিনের পরিচালক হিসেবে অপকোড ডিকোড করে এবং অভ্যন্তরীণ কন্ট্রোল লাইন সক্রিয় করে?'
      },
      options: [
        {
          en: 'Control Unit (CU)',
          bn: 'কন্ট্রোল ইউনিট (CU)',
        },
        {
          en: 'Liquid Cooling Radiator',
          bn: 'লিকুইড কুলিং রেডিয়েটর',
        },
        {
          en: 'PCIe Expansion Slot',
          bn: 'পিসিআইই এক্সপেনশন স্লট',
        },
        {
          en: 'Hard Disk Platter Motor',
          bn: 'হার্ড ডিস্ক স্পিন্ডল মোটর',
        },
      ],
      answer: 0,
      hint: {
        en: 'The unit containing the Program Counter and Instruction Decoder.',
        bn: 'যে ইউনিটে প্রোগ্রাম কাউন্টার এবং ইন্সট্রাকশন ডিকোডার থাকে।',
      },
      explanation: {
        en: 'The Control Unit fetches, decodes, and orchestrates the flow of data across the ALU, registers, and memory by asserting electrical control lines.',
        bn: 'কন্ট্রোল ইউনিট নির্দেশ ফেচ ও ডিকোড করে এবং বৈদ্যুতিক সংকেত পাঠিয়ে অ্যালু, রেজিস্টার ও মেমোরির মধ্যে ডাটা প্রবাহ পরিচালনা করে।'
      },
    },
    {
      id: 'cpu-anat-ex-3',
      kind: 'mcq',
      question: {
        en: 'What is the primary operational advantage of Hardwired Control Units compared to Microcoded Control Units?',
        bn: 'মাইক্রোকোডেড কন্ট্রোল ইউনিটের তুলনায় হার্ডওয়্যার্ড কন্ট্রোল ইউনিটের প্রধান কার্যগত সুবিধা কোনটি?'
      },
      options: [
        {
          en: 'Significantly faster instruction decoding because pure combinational logic gates decode opcodes without microcode ROM lookup delays',
          bn: 'অপেক্ষাকৃত দ্রুতগতির নির্দেশ ডিকোডিং কারণ কম্বিনেশনাল লজিক গেট মাইক্রোকোড রমের বিলম্ব ছাড়াই তাৎক্ষণিক নির্দেশ ডিকোড করে',
        },
        {
          en: 'It doubles the size of the computer chassis',
          bn: 'এটি কম্পিউটারের কেসিংয়ের আকার দ্বিগুণ করে তোলে',
        },
        {
          en: 'It allows computer programs to run without any electrical power',
          bn: 'এটি কোনো বিদ্যুৎ খরচ ছাড়াই কম্পিউটার প্রোগ্রাম চালানোর সুবিধা দেয়',
        },
        {
          en: 'It converts Big-Endian integers into ASCII strings automatically',
          bn: 'এটি বিগ-এন্ডিয়ান ইন্টিজারকে স্বয়ংক্রিয়ভাবে আসকি স্ট্রিংয়ে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Pure hardware logic gates eliminate multi-cycle microcode lookup steps.',
        bn: 'সরাসরি হার্ডওয়্যার গেট ব্যবহারের ফলে মাইক্রোকোড খোঁজার বাড়তি সাইকেল অপচয় হয় না।',
      },
      explanation: {
        en: 'Hardwired control uses direct combinational gate circuits to decode instructions within a fraction of a cycle, enabling maximum clock frequencies.',
        bn: 'হার্ডওয়্যার্ড কন্ট্রোল সরাসরি লজিক গেটের মাধ্যমে ন্যানোসেকেন্ডের ভগ্নাংশে নির্দেশ ডিকোড করতে পারে, যা সর্বোচ্চ ক্লক গতি নিশ্চিত করে।'
      },
    },
    {
      id: 'cpu-anat-ex-4',
      kind: 'predict',
      question: {
        en: 'What is the standard 3-letter abbreviation for the dedicated hardware co-processor inside the CPU that performs decimal and fractional math? Type the 3 capital letters.',
        bn: 'সিপিইউর ভেতরে দশমিক ও ভগ্নাংশের গণনা পরিচালনাকারী নিবেদিত হার্ডওয়্যারের আদর্শ ৩ অক্ষরের সংক্ষিপ্ত রূপ কোনটি? ৩ টি বড় হাতের অক্ষরে টাইপ করুন।'
      },
      answer: 'FPU',
      hint: {
        en: 'Initials of Floating-Point Unit.',
        bn: 'Floating-Point Unit এর সংক্ষিপ্ত রূপ।',
      },
      explanation: {
        en: 'FPU stands for Floating-Point Unit, the specialized execution circuit engineered to perform IEEE 754 decimal arithmetic efficiently.',
        bn: 'FPU হলো Floating-Point Unit এর সংক্ষিপ্ত রূপ, যা দক্ষভাবে IEEE 754 দশমিক পাটিগণিত সম্পন্ন করতে তৈরি করা হয়েছে।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'CPU Anatomy & Subsystems Quiz',
      bn: 'সিপিইউ গঠন এবং সাব-সিস্টেম কুইজ'
    },
    questions: [
      {
        id: 'cpu-anat-qz-1',
        kind: 'mcq',
        topic: 'instruction-register-ir-role',
        question: {
          en: 'What is the specific operational function of the Instruction Register (IR) located inside the Control Unit?',
          bn: 'কন্ট্রোল ইউনিটের ভেতরে অবস্থিত ইন্সট্রাকশন রেজিস্টারের (IR) নির্দিষ্ট কাজের ভূমিকা কী?'
        },
        options: [
          {
            en: 'It holds the binary machine instruction word currently being decoded and executed by the processor',
            bn: 'এটি প্রসেসর কর্তৃক বর্তমানে ডিকোড এবং কার্যকর হতে থাকা বাইনারি মেশিন নির্দেশটি ধরে রাখে',
          },
          {
            en: 'It stores the user desktop wallpaper image file permanently',
            bn: 'এটি ব্যবহারকারীর ডেস্কটপ ওয়ালপেপারের ছবি স্থায়ীভাবে জমা রাখে',
          },
          {
            en: 'It counts the total number of keystrokes typed on the keyboard',
            bn: 'এটি কিবোর্ডে টাইপ করা মোট বোতামের সংখ্যা গণনা করে',
          },
          {
            en: 'It cools the silicon die by generating cold air currents',
            bn: 'এটি ঠান্ডা বাতাস তৈরি করে সিলিকন ডাইকে শীতল রাখে',
          },
        ],
        answer: 0,
        hint: {
          en: 'The internal register where the fetched instruction opcode resides during decoding.',
          bn: 'যে অভ্যন্তরীণ রেজিস্টারে ডিকোড করার সময় ফেচ করা নির্দেশের অপকোড জমা থাকে।',
        },
        explanation: {
          en: 'The Instruction Register (IR) holds the fetched machine word so the instruction decoder can parse the opcode and operand fields throughout the execution cycle.',
          bn: 'ইন্সট্রাকশন রেজিস্টার (IR) ফেচ করা মেশিন কোড ধরে রাখে যাতে ডিকোডার পুরো এক্সিকিউশন সাইকেল জুড়ে অপকোড ও অপারেন্ড বিশ্লেষণ করতে পারে।'
        },
      },
      {
        id: 'cpu-anat-qz-2',
        kind: 'mcq',
        topic: 'registers-vs-ram-speed',
        question: {
          en: 'Why do CPU registers deliver sub-nanosecond access speeds thousands of times faster than main system RAM?',
          bn: 'সিপিইউ রেজিস্টারগুলো কেন মূল সিস্টেম র‍্যামের চেয়ে হাজার গুণ দ্রুত সাব-ন্যানোসেকেন্ড গতিতে কাজ করতে পারে?'
        },
        options: [
          {
            en: 'Registers are fabricated from static SRAM flip-flops directly integrated into the silicon execution datapath, with zero memory bus transit delay',
            bn: 'রেজিস্টারগুলো সরাসরি সিলিকন ডাটাপাথের সাথে যুক্ত স্ট্যাটিক এস-র‍্যাম ফ্লিপ-ফ্লপ দিয়ে তৈরি, ফলে কোনো বাস বিলম্ব থাকে না',
          },
          {
            en: 'Registers use optical lasers to read data across empty space',
            bn: 'রেজিস্টারগুলো শূন্যস্থানের মধ্য দিয়ে লেজার রশ্মি ব্যবহার করে ডাটা পড়ে',
          },
          {
            en: 'Main RAM runs at a higher electrical voltage that slows down electrons',
            bn: 'মূল র‍্যাম উচ্চ ভোল্টেজে চলার কারণে ইলেকট্রনের গতি ধীর হয়ে যায়',
          },
          {
            en: 'Because registers only store the letter Z',
            bn: 'কারণ রেজিস্টারগুলো কেবল Z অক্ষর সংরক্ষণ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'SRAM flip-flops physically adjacent to the ALU eliminate off-chip memory bus traversal.',
          bn: 'অ্যালুর ঠিক পাশেই অবস্থিত এস-র‍্যাম ফ্লিপ-ফ্লপ চিপের বাইরের মেমোরি বাসের ভ্রমণ বিলম্ব দূর করে।',
        },
        explanation: {
          en: 'Registers reside on the same silicon die directly adjacent to the ALU, using fast multi-port SRAM circuits requiring no capacitive refresh cycles or off-chip bus traversal.',
          bn: 'রেজিস্টারগুলো সরাসরি সিলিকন চিপে অ্যালুর পাশে অবস্থান করে এবং এতে কোনো ক্যাপাসিটিভ রিফ্রেশ বা চিপের বাইরের বাসের প্রয়োজন হয় না।'
        },
      },
      {
        id: 'cpu-anat-qz-3',
        kind: 'mcq',
        topic: 'simd-vector-acceleration',
        question: {
          en: 'How does SIMD (Single Instruction, Multiple Data) vector hardware accelerate computing workloads?',
          bn: 'সিমড ( Single Instruction, Multiple Data ) ভেক্টর হার্ডওয়্যার কীভাবে কম্পিউটিং কাজের গতি বাড়ায়?'
        },
        options: [
          {
            en: 'By packing multiple independent data elements into wide vector registers and executing a single arithmetic operation across all lanes simultaneously',
            bn: 'প্রশস্ত ভেক্টর রেজিস্টারে একাধিক স্বাধীন ডাটা উপাদান রেখে একটিমাত্র নির্দেশের মাধ্যমে একসাথে সব লেনে অপারেশন চালিয়ে',
          },
          {
            en: 'By shutting down all CPU cores except one to conserve battery power',
            bn: 'ব্যাটারি সাশ্রয় করতে একটি ছাড়া বাকি সব সিপিইউ কোর বন্ধ রেখে',
          },
          {
            en: 'By converting all numerical calculations into plain text sentences',
            bn: 'সমস্ত গাণিতিক হিসাবকে সাধারণ টেক্সট বাক্যে রূপান্তর করে',
          },
          {
            en: 'By erasing the operating system and running directly on the BIOS firmware',
            bn: 'অপারেটিং সিস্টেম মুছে ফেলে সরাসরি বায়োস ফার্মওয়্যারের ওপর প্রোগ্রাম চালিয়ে',
          },
        ],
        answer: 0,
        hint: {
          en: 'One instruction operating across multiple parallel data items in a single wide register.',
          bn: 'একটি প্রশস্ত রেজিস্টারে সংরক্ষিত একাধিক ডাটার ওপর একযোগে কাজ করা একটি একক নির্দেশ।',
        },
        explanation: {
          en: 'SIMD architectures allow a single instruction to process arrays of numbers simultaneously across wide execution datapaths, massively speeding up multimedia, graphics, and AI tensors.',
          bn: 'সিমড আর্কিটেকচার একটিমাত্র নির্দেশের মাধ্যমে প্রশস্ত ডাটাপাথে একই সাথে সংখ্যার অ্যারে প্রসেস করে মাল্টিমিডিয়া, গ্রাফিক্স ও এআই টেনসরের গতি বিপুল পরিমাণে বাড়িয়ে দেয়।'
        },
      },
      {
        id: 'cpu-anat-qz-4',
        kind: 'mcq',
        topic: 'alu-condition-flags-purpose',
        question: {
          en: 'What is the functional purpose of the status condition flags (such as Zero, Negative, and Carry) produced by the ALU?',
          bn: 'অ্যালু কর্তৃক প্রস্তুতকৃত স্ট্যাটাস কন্ডিশন ফ্ল্যাগগুলোর ( যেমন জিরো, নেগেটিভ ও ক্যারি ) কার্যগত উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'They record arithmetic outcome states that allow subsequent conditional branch instructions to make execution flow decisions',
            bn: 'তারা গাণিতিক ফলাফলের অবস্থা সংরক্ষণ করে যা পরবর্তী কন্ডিশনাল ব্রাঞ্চ নির্দেশগুলোকে সিদ্ধান্তের ভিত্তি যোগায়',
          },
          {
            en: 'They control the color scheme of the operating system desktop window borders',
            bn: 'তারা অপারেটিং সিস্টেমের উইন্ডো বর্ডারের রঙের বিন্যাস নিয়ন্ত্রণ করে',
          },
          {
            en: 'They store user passwords in encrypted format permanently in RAM',
            bn: 'তারা র‍্যামে ব্যবহারকারীর পাসওয়ার্ড স্থায়ীভাবে এনক্রিপ্ট অবস্থায় সংরক্ষণ করে',
          },
          {
            en: 'They regulate the physical speed of the CPU cooling fans directly',
            bn: 'তারা সিপিইউ কুলিং ফ্যানের শারীরিক ঘূর্ণন গতি সরাসরি নিয়ন্ত্রণ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Status flags enable decisions: if result is zero, jump to loop exit.',
          bn: 'স্ট্যাটাস ফ্ল্যাগ সিদ্ধান্ত নিতে সাহায্য করে: ফলাফল শূন্য হলে লুপ থেকে বের হয়ে যাওয়ার মতো কাজ।',
        },
        explanation: {
          en: 'Condition flags capture the mathematical traits of the most recent ALU result, allowing control instructions like JZ (Jump if Zero) or JL (Jump if Less) to implement conditional logic.',
          bn: 'কন্ডিশন ফ্ল্যাগগুলো সর্বশেষ অ্যালু ফলাফলের বৈশিষ্ট্য ধারণ করে, যার ওপর ভিত্তি করে JZ বা JL এর মতো ব্রাঞ্চ নির্দেশগুলো কন্ডিশনাল লজিক কার্যকর করে।'
        },
      },
    ],
  },
  next: {
    slug: 'fetch-execute',
    title: {
      en: 'The Fetch-Decode-Execute Cycle & Instruction Decoding',
      bn: 'ফেচ-ডিকোড-এক্সিকিউট সাইকেল এবং ইন্সট্রাকশন ডিকোডিং'
    },
  },
};
