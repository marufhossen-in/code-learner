import type { Lesson } from '../../../lib/types';

export const ArchCapstoneLesson: Lesson = {
  slug: 'arch-capstone',
  tech: 'computer-architecture',
  title: {
    en: 'Computer Architecture Capstone: Virtual Machine & Micro-Benchmark',
    bn: 'কম্পিউটার আর্কিটেকচার ক্যাপস্টোন: ভার্চুয়াল মেশিন এবং মাইক্রো-বেঞ্চমার্ক'
  },
  summary: {
    en: 'Unify hardware and software engineering principles in an integrated capstone. Build an end-to-end 16-bit Virtual Machine emulator with registers, ALU arithmetic, instruction decoding, conditional branching, and memory loads/stores. Benchmark architectural tradeoffs including instruction-level parallelism, branch prediction penalties, and cache locality bottlenecks.',
    bn: 'হার্ডওয়্যার এবং সফটওয়্যার ইঞ্জিনিয়ারিংয়ের মূলনীতিগুলোকে একটি সমন্বিত ক্যাপস্টোনে একীভূত করুন। রেজিস্টার, অ্যালু পাটিগণিত, ইন্সট্রাকশন ডিকোডিং, শর্তাধীন ব্রাঞ্চিং এবং মেমোরি লোড/স্টোর সমৃদ্ধ একটি পূর্ণাঙ্গ ১৬-বিট ভার্চুয়াল মেশিন তৈরি করুন এবং ইন্সট্রাকশন-লেভেল প্যারালেলিজম, ব্রাঞ্চ প্রেডিকশন পেনাল্টি ও ক্যাশ লোকালিটির কর্মক্ষমতা বিশ্লেষণ করুন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'architectural-synthesis',
      text: {
        en: 'The Architectural Synthesis: From Silicon Transistors to Software Runtime',
        bn: 'আর্কিটেকচারাল সমন্বয়: সিলিকন ট্রানজিস্টর থেকে সফটওয়্যার রানটাইম'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Software does not run in a vacuum. Every program—from database queries to web browsers—executes upon physical silicon gates. Throughout this hub, we explored the complete vertical hierarchy of computer systems. At the foundation, complementary transistors create logic gates and arithmetic units. Above the gates, flip-flops build register files, pipelined datapaths execute machine instructions, and caches bridge the memory latency gap.',
        bn: 'সফটওয়্যার কখনো শূন্যতায় চলে না। ডাটাবেস কোয়েরি থেকে শুরু করে ওয়েব ব্রাউজার পর্যন্ত প্রতিটি উচ্চস্তরের প্রোগ্রাম ভৌত সিলিকন গেটের ওপর পরিচালিত হয়। এই ট্র্যাকে আমরা কম্পিউটার সিস্টেমের সম্পূর্ণ উল্লম্ব স্তরবিন্যাস অনুসন্ধান করেছি। একদম গোড়ায় পরিপূরক ট্রানজিস্টরগুলো লজিক গেট এবং পাটিগণিত ইউনিট গঠন করে। আর গেটের ওপরে ফ্লিপ-ফ্লপ রেজিস্টার ফাইল তৈরি করে, পাইপলাইন ডাটাপাথ মেশিন নির্দেশ চালায় এবং ক্যাশ মেমোরি গতি ব্যবধান দূর করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Mastering computer architecture empowers software engineers to practice Mechanical Sympathy: designing algorithms that cooperate with underlying hardware rather than fighting against it. Three architectural realities govern modern execution speed:',
        bn: 'কম্পিউটার আর্কিটেকচার আয়ত্ত করা সফটওয়্যার প্রকৌশলীদের মেকানিক্যাল সিম্প্যাথি (Mechanical Sympathy) অনুশীলনে সক্ষম করে: এমন অ্যালগরিদম ডিজাইন করা যা হার্ডওয়্যারের সাথে বিরোধ না করে সমন্বয় বজায় রেখে কাজ করে। ৩ টি আর্কিটেকচারাল বাস্তবতা আধুনিক এক্সিকিউশন গতি নিয়ন্ত্রণ করে:'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Memory Hierarchy Latency (Spatial & Temporal Locality)',
            bn: '১. মেমোরি হায়ারার্কি ল্যাটেন্সি (স্প্যাশিয়াল এবং টেম্পোরাল লোকালিটি)'
          },
          text: {
            en: 'Accessing L1 cache requires roughly 1 nanosecond; traversing to main DRAM consumes 70 nanoseconds. Organizing data in contiguous memory blocks (such as typed arrays) maximizes 64-byte cache line utilization and reduces cache misses.',
            bn: 'L1 ক্যাশ অ্যাক্সেস করতে প্রায় ১ ন্যানোসেকেন্ড সময় লাগে; অন্যদিকে মূল ডির‍্যামে যেতে ৭০ ন্যানোসেকেন্ড সময় ব্যয় হয়। সংলগ্ন মেমোরি ব্লকে ( যেমন টাইপড অ্যারে ) ডাটা সাজালে তা ৬৪-বাইট ক্যাশ লাইনের সর্বোচ্চ ব্যবহার নিশ্চিত করে এবং ক্যাশ মিস কমায়।'
          }
        },
        {
          title: {
            en: '2. Pipeline Throughput & Branch Predictability',
            bn: '২. পাইপলাইন থ্রুপুট এবং ব্রাঞ্চ প্রেডিকশন'
          },
          text: {
            en: 'Conditional branches that behave unpredictably cause repeated pipeline flushes, throwing away 15 to 20 clock cycles of speculative work per branch misprediction.',
            bn: 'অপ্রত্যাশিত কন্ডিশনাল ব্রাঞ্চের কারণে বারবার পাইপলাইন ফ্লাশ ঘটে, যার ফলে প্রতি ব্রাঞ্চ মিসপ্রেডিকশনে ১৫ থেকে ২০ ক্লক সাইকেলের অপচয় হয়।'
          }
        },
        {
          title: {
            en: '3. Instruction-Level Parallelism (ILP)',
            bn: '৩. ইন্সট্রাকশন-লেভেল প্যারালেলিজম (ILP)'
          },
          text: {
            en: 'Writing code with minimal Read-After-Write (RAW) data dependencies enables modern superscalar out-of-order processors to dispatch multiple independent instructions simultaneously.',
            bn: 'রিড-আফটার-রাইট (RAW) নির্ভরতা কম রেখে কোড লিখলে আধুনিক সুপারস্কেলার আউট-অব-অর্ডার প্রসেসর একই সাথে একাধিক স্বাধীন নির্দেশ কার্যকর করতে পারে।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      title: {
        en: 'Integrated Processor Architecture Datapath Blueprint',
        bn: 'সমন্বিত প্রসেসর আর্কিটেকচার ডাটাপাথ ব্লুপ্রিন্ট'
      },
      svg: `<svg viewBox="0 0 820 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Complete CPU architecture blueprint showing registers ALU control unit and memory bus">
  <rect width="820" height="440" fill="#0f172a" rx="12"/>
  
  <text x="410" y="30" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">COMPLETE HARDWARE DATAPATH ARCHITECTURE</text>
  
  <!-- Control Unit Box -->
  <rect x="40" y="55" width="220" height="150" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="150" y="80" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CONTROL UNIT</text>
  <rect x="55" y="95" width="190" height="28" rx="4" fill="#0f172a"/>
  <text x="150" y="114" fill="#f8fafc" font-size="11" text-anchor="middle">Program Counter (PC)</text>
  <rect x="55" y="130" width="190" height="28" rx="4" fill="#0f172a"/>
  <text x="150" y="149" fill="#f8fafc" font-size="11" text-anchor="middle">Instruction Register (IR)</text>
  <rect x="55" y="165" width="190" height="28" rx="4" fill="#0f172a"/>
  <text x="150" y="184" fill="#f59e0b" font-size="11" text-anchor="middle">Instruction Decoder</text>
  
  <!-- Register File Box -->
  <rect x="300" y="55" width="220" height="150" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
  <text x="410" y="80" fill="#a855f7" font-size="12" font-weight="bold" text-anchor="middle">REGISTER FILE (R0 - R7)</text>
  <text x="410" y="105" fill="#cbd5e1" font-size="11" text-anchor="middle">R0: 0x00 (Hardwired Zero)</text>
  <text x="410" y="125" fill="#cbd5e1" font-size="11" text-anchor="middle">R1: Accumulator Sum</text>
  <text x="410" y="145" fill="#cbd5e1" font-size="11" text-anchor="middle">R2: Loop Counter</text>
  <text x="410" y="165" fill="#cbd5e1" font-size="11" text-anchor="middle">R3: Step Increment (1)</text>
  <text x="410" y="185" fill="#38bdf8" font-size="10" text-anchor="middle">Dual Read Ports + Single Write Port</text>
  
  <!-- ALU Box -->
  <polygon points="560,70 650,70 680,110 680,150 650,190 560,190 580,130" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <text x="620" y="125" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">ALU</text>
  <text x="620" y="145" fill="#cbd5e1" font-size="10" text-anchor="middle">ADD / SUB</text>
  <text x="620" y="165" fill="#f59e0b" font-size="10" text-anchor="middle">Flags: Z, C, N</text>
  
  <!-- Interconnecting Buses -->
  <line x1="260" y1="130" x2="300" y2="130" stroke="#38bdf8" stroke-width="2"/>
  <line x1="520" y1="110" x2="570" y2="110" stroke="#a855f7" stroke-width="2"/>
  <line x1="520" y1="150" x2="570" y2="150" stroke="#a855f7" stroke-width="2"/>
  <line x1="680" y1="130" x2="740" y2="130" stroke="#10b981" stroke-width="2"/>
  <line x1="740" y1="130" x2="740" y2="230" stroke="#10b981" stroke-width="2"/>
  <line x1="740" y1="230" x2="410" y2="230" stroke="#10b981" stroke-width="2"/>
  <line x1="410" y1="230" x2="410" y2="205" stroke="#10b981" stroke-width="2"/>
  <text x="590" y="222" fill="#10b981" font-size="10">Writeback Result Bus</text>
  
  <!-- Memory Subsystem -->
  <rect x="40" y="270" width="740" height="140" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <text x="410" y="295" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">SYSTEM MEMORY BUS &amp; HIERARCHICAL STORAGE</text>
  
  <rect x="70" y="315" width="180" height="75" rx="6" fill="#0f172a" stroke="#0284c7"/>
  <text x="160" y="340" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">L1 Cache (SRAM)</text>
  <text x="160" y="360" fill="#cbd5e1" font-size="10" text-anchor="middle">Latency: ~1 ns</text>
  <text x="160" y="375" fill="#94a3b8" font-size="10" text-anchor="middle">64-Byte Cache Lines</text>
  
  <rect x="310" y="315" width="200" height="75" rx="6" fill="#0f172a" stroke="#ca8a04"/>
  <text x="410" y="340" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">System RAM (DDR DRAM)</text>
  <text x="410" y="360" fill="#cbd5e1" font-size="10" text-anchor="middle">Latency: ~70 ns</text>
  <text x="410" y="375" fill="#94a3b8" font-size="10" text-anchor="middle">Shared System Memory</text>
  
  <rect x="570" y="315" width="180" height="75" rx="6" fill="#0f172a" stroke="#7c3aed"/>
  <text x="660" y="340" fill="#a855f7" font-size="11" font-weight="bold" text-anchor="middle">NVMe Storage (SSD)</text>
  <text x="660" y="360" fill="#cbd5e1" font-size="10" text-anchor="middle">Latency: ~25,000 ns</text>
  <text x="660" y="375" fill="#94a3b8" font-size="10" text-anchor="middle">Non-Volatile Persistence</text>
</svg>`,
      caption: {
        en: 'Complete microprocessor architectural datapath integrating control unit, register file, ALU with flags, and tiered memory bus.',
        bn: 'কন্ট্রোল ইউনিট, রেজিস্টার ফাইল, ফ্ল্যাগযুক্ত অ্যালু এবং বহুস্তর মেমোরি বাস সমৃদ্ধ পূর্ণাঙ্গ প্রসেসর আর্কিটেকচারাল ডাটাপাথ।'
      },
    },
    {
      type: 'heading',
      id: 'virtual-machine-emulator',
      text: {
        en: 'Building the 16-Bit Bytecode Virtual Machine Emulator',
        bn: '১৬-বিট বাইটকোড ভার্চুয়াল মেশিন এমুলেটর নির্মাণ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe computer architecture principles firsthand, we implement a cycle-accurate Virtual Machine in JavaScript. The virtual CPU models 8 registers (with R0 permanently hardwired to 0), condition flags (Zero flag), 256 bytes of memory, and an instruction set architecture (ISA) supporting immediate loading, register addition, subtraction, conditional branching, and halting. Below, the VM executes an assembly program calculating the summation of integers 1 through 5 in a tight loop.',
        bn: 'কম্পিউটার আর্কিটেকচারের মূলনীতিগুলো প্রত্যক্ষ করতে আমরা জাভাস্ক্রিপ্টে একটি সাইকেল-অ্যাকুরেট ভার্চুয়াল মেশিন তৈরি করি। এই ভার্চুয়াল সিপিইউ ৮ টি রেজিস্টার ( যার মধ্যে R0 স্থায়ীভাবে ০ তে নির্ধারিত ), কন্ডিশন ফ্ল্যাগ ( জিরো ফ্ল্যাগ ), ২৫৬ বাইট মেমোরি এবং ইমিডিয়েট লোডিং, রেজিস্টার যোগ, বিয়োগ, শর্তাধীন ব্রাঞ্চিং ও হল্ট সমর্থনকারী একটি ইন্সট্রাকশন সেট আর্কিটেকচার (ISA) মডেল করে। নিচে ভার্চুয়াল মেশিনটি একটি লুপের মাধ্যমে ১ থেকে ৫ পর্যন্ত পূর্ণসংখ্যার যোগফল নির্ণয়ের অ্যাসেম্বলি প্রোগ্রাম চালায়।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'architecture-vm.js',
      code: `// Complete 16-Bit Architecture Virtual Machine & Loop Execution
class ArchitectureVM {
  constructor() {
    // 8 General-Purpose Registers: R0 is hardwired to 0
    this.regs = new Int32Array(8);
    this.flags = { zero: false, carry: false, negative: false };
    this.ram = new Uint8Array(256);
    this.pc = 0;
    this.halted = false;
    this.cycles = 0;
  }

  // Enforce architectural invariant: R0 is immutable zero
  setReg(regIndex, value) {
    if (regIndex !== 0) {
      this.regs[regIndex] = value;
    }
  }

  run() {
    console.log('--- Starting Architecture VM Execution ---');
    while (!this.halted && this.pc < this.ram.length) {
      this.cycles++;
      const opcode = this.ram[this.pc++];

      switch (opcode) {
        case 0x01: { // LOAD_IMM: R[dest] = immediate
          const dest = this.ram[this.pc++];
          const imm = this.ram[this.pc++];
          this.setReg(dest, imm);
          console.log(\`Cycle \${this.cycles}: LOAD_IMM R\${dest} = \${imm}\`);
          break;
        }
        case 0x02: { // ADD: R[dest] = R[a] + R[b]
          const dest = this.ram[this.pc++];
          const a = this.regs[this.ram[this.pc++]];
          const b = this.regs[this.ram[this.pc++]];
          const sum = a + b;
          this.setReg(dest, sum);
          this.flags.zero = (sum === 0);
          console.log(\`Cycle \${this.cycles}: ADD R\${dest} = \${a} + \${b} = \${sum}\`);
          break;
        }
        case 0x03: { // SUB: R[dest] = R[a] - R[b]
          const dest = this.ram[this.pc++];
          const a = this.regs[this.ram[this.pc++]];
          const b = this.regs[this.ram[this.pc++]];
          const diff = a - b;
          this.setReg(dest, diff);
          this.flags.zero = (diff === 0);
          console.log(\`Cycle \${this.cycles}: SUB R\${dest} = \${a} - \${b} = \${diff} (Zero=\${this.flags.zero})\`);
          break;
        }
        case 0x04: { // JUMP_IF_NOT_ZERO: if (!Z) PC = target
          const target = this.ram[this.pc++];
          if (!this.flags.zero) {
            console.log(\`Cycle \${this.cycles}: BRANCH TAKEN -> Jumping to PC=\${target}\`);
            this.pc = target;
          } else {
            console.log(\`Cycle \${this.cycles}: BRANCH NOT TAKEN -> Falling through\`);
          }
          break;
        }
        case 0xFF: // HALT: Stop CPU execution
          this.halted = true;
          console.log(\`Cycle \${this.cycles}: HALT\`);
          break;
        default:
          this.halted = true;
      }
    }
  }
}

// Assemble Program: Loop to sum integers 1 through 5
// R1: Accumulator (initialized to 0)
// R2: Counter (initialized to 5)
// R3: Step decrement (initialized to 1)
// Target Loop Address = 9:
//   ADD R1, R1, R2   (Accumulate: R1 += R2)
//   SUB R2, R2, R3   (Decrement: R2 -= 1; sets Zero Flag when R2 reaches 0)
//   JUMP_IF_NOT_ZERO 9 (Repeat loop while R2 != 0)
//   HALT
const bytecode = [
  0x01, 1, 0,    // Addr 0:  LOAD_IMM R1, 0
  0x01, 2, 5,    // Addr 3:  LOAD_IMM R2, 5
  0x01, 3, 1,    // Addr 6:  LOAD_IMM R3, 1
  0x02, 1, 1, 2, // Addr 9:  ADD R1, R1, R2 (Loop Start)
  0x03, 2, 2, 3, // Addr 13: SUB R2, R2, R3
  0x04, 9,       // Addr 17: JUMP_IF_NOT_ZERO 9
  0xFF           // Addr 19: HALT
];

const vm = new ArchitectureVM();
bytecode.forEach((byte, index) => { vm.ram[index] = byte; });
vm.run();

console.log('\\n--- Architectural Execution Summary ---');
console.log('Total Clock Cycles  =', vm.cycles);
console.log('Accumulator Sum R1  =', vm.regs[1]);
console.log('Loop Counter R2     =', vm.regs[2]);
console.log('Zero Flag (Z)       =', vm.flags.zero);
console.log('Hardwired Zero R0   =', vm.regs[0]);`,
      caption: {
        en: 'Cycle-accurate 16-bit virtual machine running an assembly loop calculating 5 + 4 + 3 + 2 + 1 = 15.',
        bn: '৫ + ৪ + ৩ + ২ + ১ = ১৫ যোগফল নির্ণয়কারী অ্যাসেম্বলি লুপ পরিচালনাকারী ১৬-বিট সাইকেল-অ্যাকুরেট ভার্চুয়াল মেশিন।'
      },
    },
    {
      type: 'heading',
      id: 'performance-benchmarks',
      text: {
        en: 'Architectural Optimization: Amdahl\'s Law & Data-Oriented Design',
        bn: 'আর্কিটেকচারাল অপ্টিমাইজেশন: এমডাহলের সূত্র এবং ডাটা-ওরিয়েন্টেড ডিজাইন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When optimizing computational systems, engineers rely on Amdahl\'s Law to predict the theoretical speedup of targeted hardware improvements. Amdahl\'s Law establishes that overall system acceleration is fundamentally limited by the serial fraction of the workload that cannot be improved. If memory latency accounts for 70 percent of execution time, doubling ALU processing speed yields at most a 1.18x overall speedup. Conversely, optimizing data memory layouts directly transforms performance.',
        bn: 'কম্পিউটেশনাল সিস্টেম অপ্টিমাইজ করার সময় প্রকৌশলীরা হার্ডওয়্যার উন্নতির তাত্ত্বিক গতি বৃদ্ধির পূর্বাভাস দিতে এমডাহলের সূত্র (Amdahl\'s Law) ব্যবহার করেন। এমডাহলের সূত্র প্রমাণ করে যে সামগ্রিক সিস্টেমের গতি বৃদ্ধি কাজের এমন ধারাবাহিক অংশ দ্বারা সীমাবদ্ধ থাকে যা সমান্তরাল বা দ্রুত করা যায় না। যদি মেমোরি ল্যাটেন্সি মোট এক্সিকিউশন সময়ের ৭০ শতাংশ ব্যয় করে, তবে অ্যালুর গতি দ্বিগুণ করলেও সামগ্রিক গতি বড়জোর ১.১৮ গুণ বৃদ্ধি পাবে। এর বিপরীতে, ডাটার মেমোরি লেআউট অপ্টিমাইজ করলে সরাসরি বিপুল কর্মক্ষমতা পাওয়া যায়।'
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Structure of Arrays (SoA) vs Array of Structures (AoS)',
        bn: 'স্ট্রাকচার অব অ্যারে (SoA) বনাম অ্যারে অব স্ট্রাকচার (AoS)'
      },
      text: {
        en: 'High-performance database storage engines and game physics runtimes avoid traditional Object-Oriented Array of Structures (such as an array of Particle objects with x, y, z, mass, color). When calculating physics positions, the CPU pulls unused mass and color bytes into the 64-byte L1 cache line, wasting cache capacity. By transitioning to Data-Oriented Structure of Arrays (separate continuous arrays for x, y, and z), contiguous floating-point numbers pack solidly into every cache line, achieving 100 percent cache line efficiency and enabling SIMD vectorization.',
        bn: 'উচ্চক্ষমতাসম্পন্ন ডাটাবেস স্টোরেজ ইঞ্জিন এবং গেম ফিজিক্স রানটাইম ঐতিহ্যবাহী অবজেক্ট-ওরিয়েন্টেড অ্যারে অব স্ট্রাকচার ( যেমন x, y, z, mass, color যুক্ত Particle অবজেক্টের অ্যারে ) এড়িয়ে চলে। ফিজিক্স অবস্থান গণনার সময় সিপিইউ অপ্রয়োজনীয় mass এবং color বাইটগুলোকে ৬৪-বাইট L1 ক্যাশ লাইনে টেনে নিয়ে আসে, যা ক্যাশ ধারণক্ষমতা অপচয় করে। ডাটা-ওরিয়েন্টেড স্ট্রাকচার অব অ্যারেতে ( x, y এবং z এর জন্য পৃথক ধারাবাহিক অ্যারে ) রূপান্তর করলে প্রতিটি ক্যাশ লাইনে কেবল প্রয়োজনীয় ফ্লোটিং-পয়েন্ট সংখ্যাগুলো ঠাসা থাকে, ফলে ১০০ শতাংশ ক্যাশ লাইন দক্ষতা নিশ্চিত হয় এবং SIMD ভেক্টরাইজেশন সক্রিয় হয়।'
      },
    },
  ],
  exercises: [
    {
      id: 'ca-cap-ex-1',
      kind: 'predict',
      question: {
        en: 'In RISC architectures with a hardwired zero register (such as Register 0), what is the numeric value of R0 after executing an ADD instruction writing into R0? Type the single digit.',
        bn: 'হার্ডওয়্যার জিরো রেজিস্টারযুক্ত ( যেমন রেজিস্টার ০ ) আরআইএসসি আর্কিটেকচারে R0 তে কোনো ADD নির্দেশের মান লেখার পর R0 এর সাংখ্যিক মান কত থাকে? একক সংখ্যা টাইপ করুন।'
      },
      answer: '0',
      hint: {
        en: 'Register R0 is physically tied to electrical ground and remains permanently 0.',
        bn: 'রেজিস্টার R0 আর্থিং বা গ্রাউন্ডে সরাসরি সংযুক্ত থাকে এবং এর মান সর্বদাই ০ থাকে।'
      },
      explanation: {
        en: 'In architectures like MIPS and RISC-V, writes to Register 0 (R0) are discarded by hardware, permanently guaranteeing R0 evaluates to 0.',
        bn: 'MIPS এবং RISC-V আর্কিটেকচারে রেজিস্টার ০ ( R0 ) এ কোনো মান লেখা হলে হার্ডওয়্যার তা উপেক্ষা করে, ফলে R0 এর মান স্থায়ীভাবে ০ থাকে।'
      },
    },
    {
      id: 'ca-cap-ex-2',
      kind: 'mcq',
      question: {
        en: 'According to Amdahl\'s Law, if 80 percent (0.80) of a program execution time cannot be parallelized, what is the absolute theoretical maximum speedup possible even with an infinite number of CPU cores? (1 / 0.80)',
        bn: 'এমডাহলের সূত্রানুসারে, যদি একটি প্রোগ্রামের ৮০ শতাংশ ( ০.৮০ ) অংশ সমান্তরাল করা সম্ভব না হয়, তবে অসীম প্রসেসর যোগ করলেও সর্বোচ্চ কত গুণ গতি বৃদ্ধি সম্ভব? ( ১ / ০.৮০ )'
      },
      options: [
        {
          en: '1.25x speedup',
          bn: '১.২৫ গুণ গতি বৃদ্ধি',
        },
        {
          en: '10x speedup',
          bn: '১০ গুণ গতি বৃদ্ধি',
        },
        {
          en: '80x speedup',
          bn: '৮০ গুণ গতি বৃদ্ধি',
        },
        {
          en: 'Infinite speedup',
          bn: 'অসীম গতি বৃদ্ধি',
        },
      ],
      answer: 0,
      hint: {
        en: 'Divide 1 by the serial fraction: 1 / 0.80 = 1.25.',
        bn: '১ কে সিরিয়াল অংশ দিয়ে ভাগ করুন: ১ / ০.৮০ = ১.২৫।',
      },
      explanation: {
        en: 'Amdahl\'s Law states Maximum Speedup = 1 / (1 - P). With a parallel fraction of 0.20, the serial fraction is 0.80, capping maximum theoretical acceleration at 1 / 0.80 = 1.25x.',
        bn: 'এমডাহলের সূত্রানুসারে সর্বোচ্চ গতি বৃদ্ধি = ১ / ( ১ - P )। প্যারালাল অংশ ০.২০ হলে সিরিয়াল অংশ ০.৮০, ফলে সর্বোচ্চ গতি বৃদ্ধি ১ / ০.৮০ = ১.২৫ গুণ এর বেশি হতে পারে না।'
      },
    },
    {
      id: 'ca-cap-ex-3',
      kind: 'mcq',
      question: {
        en: 'Why does Data-Oriented Design (Structure of Arrays) outperform traditional Object-Oriented Design (Array of Structures) in memory-intensive processing?',
        bn: 'মেমোরি-নিবিড় প্রসেসিংয়ে ডাটা-ওরিয়েন্টেড ডিজাইন (Structure of Arrays) কেন ঐতিহ্যবাহী অবজেক্ট-ওরিয়েন্টেড ডিজাইন (Array of Structures) এর চেয়ে বেশি গতি প্রদান করে?'
      },
      options: [
        {
          en: 'It packs contiguous relevant data into 64-byte cache lines without wasting capacity on unused object fields',
          bn: 'এটি অপ্রয়োজনীয় অবজেক্ট ফিল্ড বাদ দিয়ে প্রাসঙ্গিক ডাটাকে ৬৪-বাইট ক্যাশ লাইনে ঠাসা অবস্থায় রাখে',
        },
        {
          en: 'It converts all floating-point numbers into 8-bit ASCII characters',
          bn: 'এটি সমস্ত ফ্লোটিং-পয়েন্ট সংখ্যাকে ৮-বিট আসকি ক্যারেক্টারে রূপান্তর করে',
        },
        {
          en: 'It prevents the CPU from running at temperatures above 30 degrees',
          bn: 'এটি সিপিইউকে ৩০ ডিগ্রির ওপরে গরম হওয়া থেকে বাধা দেয়',
        },
        {
          en: 'Because Array of Structures cannot be compiled into machine code',
          bn: 'কারণ অ্যারে অব স্ট্রাকচারকে কখনো মেশিন কোডে রূপান্তর করা যায় না',
        },
      ],
      answer: 0,
      hint: {
        en: 'Keeping related coordinates adjacent in memory fills 64-byte cache lines with useful numbers.',
        bn: 'মেমোরিতে সংশ্লিষ্ট স্থানাঙ্কগুলো পাশাপাশি রাখলে প্রতি ৬৪-বাইট ক্যাশ লাইনে দরকারী সংখ্যা ভরে থাকে।',
      },
      explanation: {
        en: 'Structure of Arrays (SoA) guarantees that sequential memory iterations load 100 percent useful data into each 64-byte cache line, avoiding cold field pollution.',
        bn: 'স্ট্রাকচার অব অ্যারে (SoA) নিশ্চিত করে যে ধারাবাহিক মেমোরি ইটারেশনে প্রতি ৬৪-বাইট ক্যাশ লাইনে ১০০ শতাংশ প্রয়োজনীয় ডাটা লোড হয় এবং ক্যাশ অপচয় এড়ায়।'
      },
    },
    {
      id: 'ca-cap-ex-4',
      kind: 'predict',
      question: {
        en: 'If a program executes 100 instructions and 10 of them are conditional branches with an 80 percent prediction accuracy, how many branch misprediction pipeline flushes occur? (10 * 0.20 = 2). Type the digit.',
        bn: 'যদি একটি প্রোগ্রাম ১০০ টি নির্দেশ চালায় এবং তার মধ্যে ১০ টি কন্ডিশনাল ব্রাঞ্চের ৮০ শতাংশ প্রেডিকশন নির্ভুল হয়, তবে কতবার পাইপলাইন ফ্লাশ ঘটবে? ( ১০ * ০.২০ = ২ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '2',
      hint: {
        en: 'Calculate the misprediction rate: 100% - 80% = 20% (0.20). Multiply by 10 branches: 10 * 0.20 = 2.',
        bn: 'ভুল প্রেডিকশনের হার হিসাব করুন: ১০০% - ৮০% = ২০% ( ০.২০ )। ১০ টি ব্রাঞ্চ দিয়ে গুণ করুন: ১০ * ০.২০ = ২।'
      },
      explanation: {
        en: 'With an 80 percent success rate on 10 branches, 2 branches are mispredicted (10 * 0.20 = 2), triggering 2 pipeline flushes.',
        bn: '১০ টি ব্রাঞ্চের ৮০ শতাংশ সফল হলে বাকি ২ টি ব্রাঞ্চ ভুল অনুমান করা হয় ( ১০ * ০.২০ = ২ ), যা ২ বার পাইপলাইন ফ্লাশ ঘটায়।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Computer Systems Architecture Capstone Quiz',
      bn: 'কম্পিউটার সিস্টেমস আর্কিটেকচার ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'ca-cap-qz-1',
        kind: 'mcq',
        topic: 'hardwired-zero-r0',
        question: {
          en: 'What architectural advantage is gained by hardwiring Register 0 (R0) to constant zero in RISC instruction sets?',
          bn: 'আরআইএসসি ইন্সট্রাকশন সেটে রেজিস্টার ০ (R0) কে ধ্রুবক শূন্যে হার্ডওয়্যারযুক্ত করার আর্কিটেকচারাল সুবিধা কী?'
        },
        options: [
          {
            en: 'It simplifies the instruction set by synthesizing register moves, zero comparisons, and NOPs using standard ADD and SUB instructions without dedicated opcodes',
            bn: 'এটি পৃথক কোনো অপকোড ছাড়াই সাধারণ ADD ও SUB নির্দেশ ব্যবহার করে রেজিস্টার কপি, শূন্যের সাথে তুলনা এবং ফাঁকা নির্দেশ (NOP) তৈরি সহজ করে',
          },
          {
            en: 'It cuts the operating electricity consumption of the ALU in half',
            bn: 'এটি অ্যালুর বিদ্যুৎ খরচ অর্ধেকে নামিয়ে আনে',
          },
          {
            en: 'It prevents the operating system kernel from accessing user memory',
            bn: 'এটি অপারেটিং সিস্টেম কার্নেলকে ইউজার মেমোরি অ্যাক্সেস করতে বাধা দেয়',
          },
          {
            en: 'It enables the CPU to calculate infinite loops instantaneously',
            bn: 'এটি সিপিইউকে তাৎক্ষণিকভাবে ইনফিনিট লুপ গণনা করার সুবিধা দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Synthesizing standard moves and zero tests without adding specialized instructions.',
          bn: 'আলাদা নির্দেশ না বানিয়েই সাধারণ কপি এবং শূন্য পরীক্ষা সম্পন্ন করার সুবিধা।',
        },
        explanation: {
          en: 'A hardwired zero register allows operations like MOVE R1, R2 to be encoded simply as ADD R1, R2, R0, streamlining the instruction set architecture.',
          bn: 'একটি হার্ডওয়্যার্ড শূন্য রেজিস্টার MOVE R1, R2 এর মতো কাজগুলোকে সরাসরি ADD R1, R2, R0 হিসেবে এনকোড করার সুযোগ দেয়, যা ইন্সট্রাকশন সেটকে সহজ করে।'
        },
      },
      {
        id: 'ca-cap-qz-2',
        kind: 'mcq',
        topic: 'amdahls-law-ceiling',
        question: {
          en: 'What fundamental law of computer engineering describes the principle that overall speedup is limited by the serial fraction of a workload?',
          bn: 'কম্পিউটার ইঞ্জিনিয়ারিংয়ের কোন মৌলিক সূত্র প্রকাশ করে যে সামগ্রিক গতি বৃদ্ধি কাজের ধারাবাহিক অংশ দ্বারা সীমাবদ্ধ থাকে?'
        },
        options: [
          {
            en: 'Amdahl\'s Law',
            bn: 'এমডাহলের সূত্র (Amdahl\'s Law)',
          },
          {
            en: 'Moore\'s Law',
            bn: 'মুরস ল (Moore\'s Law)',
          },
          {
            en: 'Ohm\'s Law',
            bn: 'ওহমস ল (Ohm\'s Law)',
          },
          {
            en: 'De Morgan\'s Law',
            bn: 'ডি মরগানস ল (De Morgan\'s Law)',
          },
        ],
        answer: 0,
        hint: {
          en: 'Named after Gene Amdahl, who formulated this speedup limit in 1967.',
          bn: 'জিন এমডাহলের নামানুসারে গঠিত, যিনি ১৯৬৭ সালে এই গতি সীমাবদ্ধতার সূত্র দেন।',
        },
        explanation: {
          en: 'Amdahl\'s Law predicts the theoretical maximum speedup achievable through parallelism, proving that the non-parallel serial portion dictates the performance ceiling.',
          bn: 'এমডাহলের সূত্র সমান্তরাল প্রক্রিয়াকরণের মাধ্যমে তাত্ত্বিক সর্বোচ্চ গতি বৃদ্ধির পূর্বাভাস দেয় এবং প্রমাণ করে যে অপরিবর্তনশীল ধারাবাহিক অংশই গতির সর্বোচ্চ সীমা নির্ধারণ করে।'
        },
      },
      {
        id: 'ca-cap-qz-3',
        kind: 'mcq',
        topic: 'mechanical-sympathy',
        question: {
          en: 'How does Mechanical Sympathy apply to writing high-performance software code?',
          bn: 'উচ্চক্ষমতাসম্পন্ন সফটওয়্যার কোড লেখার ক্ষেত্রে মেকানিক্যাল সিম্প্যাথি (Mechanical Sympathy) কীভাবে প্রয়োগ করা হয়?'
        },
        options: [
          {
            en: 'By writing algorithms and structuring data layouts that align with CPU cache lines, branch predictors, and memory pipelines',
            bn: 'সিপিইউ ক্যাশ লাইন, ব্রাঞ্চ প্রেডিক্টর এবং মেমোরি পাইপলাইনের সাথে সামঞ্জস্য রেখে অ্যালগরিদম ও ডাটা লেআউট তৈরি করার মাধ্যমে',
          },
          {
            en: 'By replacing all software code with manual analog switches',
            bn: 'সমস্ত সফটওয়্যার কোড বাদ দিয়ে অ্যানালগ সুইচ ব্যবহার করার মাধ্যমে',
          },
          {
            en: 'By disabling processor hardware interrupts during web browsing',
            bn: 'ওয়েব ব্রাউজিংয়ের সময় প্রসেসরের হার্ডওয়্যার ইন্টারাপ্ট বন্ধ রাখার মাধ্যমে',
          },
          {
            en: 'By requiring software developers to physically assemble silicon chips by hand',
            bn: 'সফটওয়্যার ডেভেলপারদের নিজ হাতে সিলিকন চিপ জোড়া লাগাতে বাধ্য করার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Aligning software algorithms with the physical realities of processor hardware.',
          bn: 'প্রসেসর হার্ডওয়্যারের বাস্তব বৈশিষ্ট্যের সাথে সফটওয়্যার অ্যালগরিদমের সমন্বয় ঘটানো।',
        },
        explanation: {
          en: 'Mechanical Sympathy means understanding how the underlying computer hardware operates so you can write software that extracts maximum performance from silicon architectures.',
          bn: 'মেকানিক্যাল সিম্প্যাথি বলতে বোঝায় হার্ডওয়্যার কীভাবে কাজ করে তা বুঝে সফটওয়্যার তৈরি করা, যাতে সিলিকন আর্কিটেকচার থেকে সর্বোচ্চ গতি ও দক্ষতা অর্জন করা সম্ভব হয়।'
        },
      },
      {
        id: 'ca-cap-qz-4',
        kind: 'mcq',
        topic: 'instructions-per-cycle-metric',
        question: {
          en: 'Which architectural performance metric indicates how many instructions a processor core completes per clock cycle?',
          bn: 'কোন আর্কিটেকচারাল মেট্রিক নির্দেশ করে যে একটি প্রসেসর কোর প্রতি ক্লক সাইকেলে গড়ে কয়টি নির্দেশ সম্পন্ন করে?'
        },
        options: [
          {
            en: 'Instructions Per Cycle (IPC)',
            bn: 'ইন্সট্রাকশন পার সাইকেল (IPC)',
          },
          {
            en: 'Megahertz Clock Frequency (MHz)',
            bn: 'মেগাহার্টজ ক্লক ফ্রিকোয়েন্সি (MHz)',
          },
          {
            en: 'Dynamic RAM Bandwidth (GB/s)',
            bn: 'ডায়নামিক র‍্যাম ব্যান্ডউইথ (GB/s)',
          },
          {
            en: 'Total Physical Silicon Area (mm²)',
            bn: 'মোট ফিজিক্যাল সিলিকন ক্ষেত্রফল (mm²)',
          },
        ],
        answer: 0,
        hint: {
          en: 'Abbreviated as IPC, representing execution throughput per clock cycle.',
          bn: 'সংক্ষেপে IPC বলা হয়, যা প্রতি ক্লক সাইকেলে নির্দেশের থ্রুপুট প্রকাশ করে।',
        },
        explanation: {
          en: 'Instructions Per Cycle (IPC) measures instruction execution throughput, reflecting how effectively the processor pipeline, branch predictor, and execution units are utilized.',
          bn: 'ইন্সট্রাকশন পার সাইকেল (IPC) নির্দেশ এক্সিকিউশন থ্রুপুট পরিমাপ করে, যা প্রকাশ করে প্রসেসর পাইপলাইন, ব্রাঞ্চ প্রেডিক্টর এবং এক্সিকিউশন ইউনিট কতটা দক্ষতার সাথে ব্যবহৃত হচ্ছে।'
        },
      },
    ],
  },
};
