import type { Lesson } from '../../../lib/types';

export const RegistersIntroLesson: Lesson = {
  slug: 'registers-intro',
  tech: 'computer-architecture',
  title: {
    en: 'Sequential Logic, Flip-Flops & CPU Register Files',
    bn: 'সিকোয়েনশিয়াল লজিক, ফ্লিপ-ফ্লপ এবং সিপিইউ রেজিস্টার ফাইল'
  },
  summary: {
    en: 'Understand how computer hardware maintains memory state across clock ticks. Explore SR latches, D flip-flops, edge-triggered clocking, register file multiport architectures with dual read ports and single write ports, and special-purpose CPU registers including the Program Counter (PC), Instruction Register (IR), and Stack Pointer (SP).',
    bn: 'ক্লক টিকের মধ্যে কম্পিউটার হার্ডওয়্যার কীভাবে মেমোরির অবস্থা ধরে রাখে তা বিশ্লেষণ করুন। এসআর ল্যাচ, ডি ফ্লিপ-ফ্লপ, এজ-ট্রিগার্ড ক্লকিং, ডুয়াল রিড পোর্ট ও সিঙ্গেল রাইট পোর্ট সমৃদ্ধ মাল্টিপোর্ট রেজিস্টার ফাইল আর্কিটেকচার এবং প্রোগ্রাম কাউন্টার (PC), ইন্সট্রাকশন রেজিস্টার (IR) ও স্ট্যাক পয়েন্টার (SP) এর মতো বিশেষ রেজিস্টার বিস্তারিত জানুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'sequential-logic-latches',
      text: {
        en: 'From Combinational Logic to Sequential Memory: The D Flip-Flop',
        bn: 'কম্বিনেশনাল লজিক থেকে সিকোয়েনশিয়াল মেমোরি: ডি ফ্লিপ-ফ্লপ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Combinational logic circuits like adders and multiplexers cannot store information because their electrical outputs depend solely on their present input voltages. To construct persistent computer memory, digital designers implement sequential circuits with feedback loops where output voltages cycle back into input gates. The simplest storage element is the Set-Reset (SR) latch formed by cross-coupled NOR (Not-OR) gates. However, the SR latch suffers from an invalid state when both inputs equal 1 simultaneously, causing unpredictable hardware oscillation.',
        bn: 'অ্যাডার এবং মাল্টিপ্লেক্সারের মতো কম্বিনেশনাল লজিক সার্কিট কোনো তথ্য সংরক্ষণ করতে পারে না, কারণ তাদের আউটপুট সম্পূর্ণভাবে বর্তমান ইনপুট ভোল্টেজের ওপর নির্ভরশীল। স্থায়ী কম্পিউটার মেমোরি তৈরির জন্য ডিজিটাল ডিজাইনাররা ফিডব্যাক লুপসহ সিকোয়েনশিয়াল সার্কিট তৈরি করেন, যেখানে আউটপুট সংকেত ইনপুট গেটে ফিরে আসে। সবচেয়ে সাধারণ স্টোরেজ এলিমেন্ট হলো ক্রস-কাপল্ড নর ( Not-OR ) গেট দিয়ে গঠিত সেট-রিসেট (SR) ল্যাচ। তবে এসআর ল্যাচে উভয় ইনপুট ১ হলে একটি অবৈধ অবস্থা তৈরি হয়, যার ফলে হার্ডওয়্যারে অপ্রত্যাশিত অসিলেশন সৃষ্টি হয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The Data or D flip-flop completely resolves this hazard by taking a single data input D along with a periodic clock signal CLK. Inside the D flip-flop, an inverter guarantees that complementary inputs reach internal storage gates, preventing race conditions. Modern microprocessors use edge-triggered D flip-flops: the circuit samples input D strictly on the rising edge of the clock signal (when voltage shifts from 0 to 1). Once latched, output Q maintains this binary bit steadily throughout the entire clock cycle regardless of any changes on line D. Combining 64 parallel D flip-flops under one shared clock creates a 64-bit hardware register.',
        bn: 'ডাটা বা ডি ফ্লিপ-ফ্লপ একটি একক ডাটা ইনপুট D এবং নিয়মিত ক্লক সিগন্যাল CLK ব্যবহার করে এই ত্রুটি সম্পূর্ণ দূর করে। ডি ফ্লিপ-ফ্লপের ভেতরে একটি নট গেট নিশ্চিত করে যে অভ্যন্তরীণ স্টোরেজে সর্বদাই বিপরীত সংকেত পৌঁছায়, যা রেস কন্ডিশন প্রতিরোধ করে। আধুনিক মাইক্রোপ্রসেসর এজ-ট্রিগার্ড ডি ফ্লিপ-ফ্লপ ব্যবহার করে: ক্লক সিগন্যালের রাইজিং এজে (যখন ভোল্টেজ ০ থেকে ১ এ পরিবর্তিত হয়) সার্কিটটি ইনপুট D স্যাম্পল করে। একবার সংরক্ষিত হলে পুরো ক্লক সাইকেল জুড়ে আউটপুট Q এই বাইনারি বিট ধরে রাখে, ইনপুট D লাইনে যেকোনো পরিবর্তন হলেও। একটি শেয়ার্ড ক্লকের অধীনে ৬৪ টি সমান্তরাল ডি ফ্লিপ-ফ্লপ সংযুক্ত করে একটি ৬৪-বিট হার্ডওয়্যার রেজিস্টার গঠিত হয়।'
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'D Flip-Flop and CPU Register File Architecture',
        bn: 'ডি ফ্লিপ-ফ্লপ এবং সিপিইউ রেজিস্টার ফাইল আর্কিটেকচার'
      },
      svg: `<svg viewBox="0 0 820 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Sequential D flip-flop and multi-port CPU register file diagram">
  <rect width="820" height="440" fill="#0f172a" rx="12"/>
  
  <!-- Section 1: D Flip-Flop Edge Triggering -->
  <g transform="translate(30, 25)">
    <rect width="360" height="390" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <text x="180" y="32" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">EDGE-TRIGGERED D FLIP-FLOP</text>
    
    <!-- Latch Box -->
    <rect x="90" y="70" width="180" height="150" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <text x="110" y="115" fill="#f8fafc" font-size="16" font-weight="bold">D</text>
    <text x="245" y="115" fill="#f8fafc" font-size="16" font-weight="bold">Q</text>
    <text x="240" y="185" fill="#94a3b8" font-size="16" font-weight="bold">Q#</text>
    
    <!-- Clock triangle -->
    <path d="M 90,170 L 115,180 L 90,190 Z" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="125" y="185" fill="#f59e0b" font-size="12">CLK</text>
    
    <!-- Signal lines -->
    <line x1="30" y1="110" x2="90" y2="110" stroke="#38bdf8" stroke-width="3"/>
    <text x="50" y="100" fill="#38bdf8" font-size="11">Data</text>
    
    <line x1="270" y1="110" x2="330" y2="110" stroke="#10b981" stroke-width="3"/>
    <text x="285" y="100" fill="#10b981" font-size="11">Stored Q</text>
    
    <line x1="30" y1="180" x2="90" y2="180" stroke="#f59e0b" stroke-width="3"/>
    <text x="45" y="200" fill="#f59e0b" font-size="11">Clock</text>
    
    <!-- Waveform illustration -->
    <rect x="30" y="250" width="300" height="115" rx="4" fill="#090d16" stroke="#1e293b"/>
    <text x="40" y="272" fill="#94a3b8" font-size="11">CLK: __|‾‾|__|‾‾|__  (Samples on ↑ rising edge)</text>
    <text x="40" y="295" fill="#38bdf8" font-size="11">D:   ____|‾‾‾‾‾‾|___  (Input value)</text>
    <text x="40" y="320" fill="#10b981" font-size="11">Q:   _______|‾‾‾‾‾‾|  (Latches precisely at ↑)</text>
    <text x="40" y="348" fill="#e2e8f0" font-size="10">State holds stable until the next rising clock edge</text>
  </g>
  
  <!-- Section 2: Multi-Port Register File -->
  <g transform="translate(420, 25)">
    <rect width="370" height="390" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <text x="185" y="32" fill="#a855f7" font-size="14" font-weight="bold" text-anchor="middle">CPU MULTI-PORT REGISTER FILE</text>
    
    <!-- Register bank -->
    <rect x="110" y="65" width="150" height="240" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
    <text x="185" y="90" fill="#cbd5e1" font-size="12" text-anchor="middle">Register Bank (R0-R7)</text>
    
    <!-- Registers list -->
    <rect x="125" y="105" width="120" height="20" rx="3" fill="#334155"/>
    <text x="185" y="120" fill="#38bdf8" font-size="11" text-anchor="middle">R0: 0x00000000</text>
    <rect x="125" y="130" width="120" height="20" rx="3" fill="#334155"/>
    <text x="185" y="145" fill="#38bdf8" font-size="11" text-anchor="middle">R1: 0x0000002A</text>
    <rect x="125" y="155" width="120" height="20" rx="3" fill="#334155"/>
    <text x="185" y="170" fill="#38bdf8" font-size="11" text-anchor="middle">R2: 0x00000063</text>
    <rect x="125" y="180" width="120" height="20" rx="3" fill="#334155"/>
    <text x="185" y="195" fill="#e2e8f0" font-size="11" text-anchor="middle">... (R3 - R6)</text>
    <rect x="125" y="205" width="120" height="20" rx="3" fill="#334155"/>
    <text x="185" y="220" fill="#f59e0b" font-size="11" text-anchor="middle">R7 (SP): 0x00000040</text>
    
    <!-- Port lines -->
    <!-- Read Port 1 -->
    <line x1="260" y1="115" x2="330" y2="115" stroke="#10b981" stroke-width="2"/>
    <text x="335" y="112" fill="#10b981" font-size="10">Read Data 1</text>
    <text x="335" y="124" fill="#94a3b8" font-size="9">to ALU In A</text>
    
    <!-- Read Port 2 -->
    <line x1="260" y1="145" x2="330" y2="145" stroke="#10b981" stroke-width="2"/>
    <text x="335" y="142" fill="#10b981" font-size="10">Read Data 2</text>
    <text x="335" y="154" fill="#94a3b8" font-size="9">to ALU In B</text>
    
    <!-- Write Port -->
    <line x1="40" y1="180" x2="110" y2="180" stroke="#ef4444" stroke-width="2"/>
    <text x="30" y="172" fill="#ef4444" font-size="10">Write Data</text>
    <text x="30" y="184" fill="#94a3b8" font-size="9">from ALU Out</text>
    
    <!-- Write Enable -->
    <line x1="40" y1="215" x2="110" y2="215" stroke="#f59e0b" stroke-width="2"/>
    <text x="30" y="210" fill="#f59e0b" font-size="10">Write Enable (WE)</text>
    <text x="30" y="222" fill="#94a3b8" font-size="9">1 = commit write</text>
    
    <!-- Special Registers Banner -->
    <rect x="25" y="320" width="320" height="50" rx="4" fill="#090d16" stroke="#334155"/>
    <text x="185" y="340" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">Dedicated Special-Purpose Registers</text>
    <text x="185" y="358" fill="#94a3b8" font-size="10" text-anchor="middle">PC (Program Counter) | IR (Instruction) | SP (Stack)</text>
  </g>
</svg>`,
      caption: {
        en: 'Sequential D flip-flops capture data on clock rising edges; multi-port register files provide simultaneous dual reads and single writes in 1 clock cycle.',
        bn: 'সিকোয়েনশিয়াল ডি ফ্লিপ-ফ্লপ ক্লকের রাইজিং এজে ডাটা ধারণ করে; মাল্টি-পোর্ট রেজিস্টার ফাইল ১ টি ক্লক সাইকেলে যুগপৎ দুটি রিড এবং একটি রাইট সম্পন্ন করে।'
      },
    },
    {
      type: 'heading',
      id: 'register-file-architecture',
      text: {
        en: 'Multi-Port Register Files & Special-Purpose Architectural Registers',
        bn: 'মাল্টি-পোর্ট রেজিস্টার ফাইল এবং বিশেষ আর্কিটেকচারাল রেজিস্টার'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In high-performance microprocessor architectures, individual registers are grouped into a consolidated Register File. Because an Arithmetic Logic Unit instruction such as ADD R3, R1, R2 requires two source operands and writes one destination result within a single clock cycle, standard single-port memory would cause severe bottleneck delays. The register file overcomes this by providing multi-port access: two independent read ports driven by address decoders, and one synchronous write port guarded by a Write Enable (WE) control pin. Reading registers is combinational and instantaneous; writing registers is synchronous and only commits on the clock edge when Write Enable equals 1.',
        bn: 'উচ্চক্ষমতাসম্পন্ন মাইক্রোপ্রসেসর আর্কিটেকচারে একক রেজিস্টারগুলোকে একত্রিত করে একটি রেজিস্টার ফাইল গঠিত হয়। যেহেতু একটি এরিথমেটিক লজিক ইউনিট ইন্সট্রাকশন যেমন ADD R3, R1, R2 একটি মাত্র ক্লক সাইকেলের মধ্যে ২ টি সোর্স অপারেন্ড রিড করে এবং ১ টি ডেস্টিনেশন রেজাল্ট রাইট করে, তাই সাধারণ সিঙ্গেল-পোর্ট মেমোরি তীব্র গতি অচলাবস্থা তৈরি করত। রেজিস্টার ফাইল মাল্টি-পোর্ট অ্যাক্সেসের মাধ্যমে এটি সমাধান করে: অ্যাড্রেস ডিকোডার নিয়ন্ত্রিত ২ টি স্বাধীন রিড পোর্ট এবং রাইট এনেবল (WE) পিন নিয়ন্ত্রিত ১ টি সিঙ্ক্রোনাস রাইট পোর্ট। রেজিস্টার রিড করা কম্বিনেশনাল এবং তাৎক্ষণিক; রেজিস্টার রাইট করা সিঙ্ক্রোনাস এবং রাইট এনেবল মান ১ হলে ক্লক এজে কার্যকর হয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Microprocessors divide their internal storage bank into General-Purpose Registers (GPRs) and dedicated control cells (SPRs). General-purpose slots (such as RAX, RBX, RCX, RDX in x86_64, or X0 to X30 in ARM64) hold arithmetic temporaries and memory pointers. Meanwhile, special-purpose units are tightly wired into CPU execution logic:',
        bn: 'মাইক্রোপ্রসেসর তার অভ্যন্তরীণ স্টোরেজ ব্যাংককে জেনারেল-পারপাস রেজিস্টার (GPR) এবং নিবেদিত কন্ট্রোল সেলে (SPR) বিভক্ত করে। জেনারেল-পারপাস স্লটগুলো (যেমন x86_64 আর্কিটেকচারের RAX, RBX, RCX, RDX বা ARM64 এর X0 থেকে X30) গাণিতিক মধ্যবর্তী মান এবং মেমোরি পয়েন্টার ধারণ করে। অন্যদিকে স্পেশাল-পারপাস ইউনিটগুলো সিপিইউ এক্সিকিউশন লজিকের সাথে গভীরভাবে সংযুক্ত থাকে:'
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Program Counter (PC / RIP / IP)',
          def: {
            en: 'Dedicated architectural register holding the memory address of the next machine instruction to fetch. It automatically increments by instruction length or jumps to a target address upon branching.',
            bn: 'নিবেদিত আর্কিটেকচারাল রেজিস্টার যা পরবর্তী ফেচ করার মতো মেশিন নির্দেশের মেমোরি অ্যাড্রেস ধারণ করে। এটি স্বয়ংক্রিয়ভাবে বৃদ্ধি পায় বা ব্রাঞ্চ নির্দেশে নতুন অ্যাড্রেসে লাফ দেয়।'
          }
        },
        {
          term: 'Instruction Register (IR)',
          def: {
            en: 'Internal non-architectural register that holds the machine instruction opcode and operands currently being decoded and executed by the control unit.',
            bn: 'অভ্যন্তরীণ নন-আর্কিটেকচারাল রেজিস্টার যা কন্ট্রোল ইউনিট কর্তৃক ডিকোড এবং এক্সিকিউট হতে থাকা বর্তমান মেশিন নির্দেশের অপকোড ও অপারেন্ড ধারণ করে।'
          }
        },
        {
          term: 'Stack Pointer (SP / RSP)',
          def: {
            en: 'Register tracking the top memory address of the current execution call stack. Pushing a value decrements the pointer, while popping a value increments it.',
            bn: 'রেজিস্টার যা বর্তমান এক্সিকিউশন কল স্ট্যাকের শীর্ষ মেমোরি অ্যাড্রেস ট্র্যাক করে। কোনো মান পুশ করলে পয়েন্টার হ্রাস পায় এবং পপ করলে বৃদ্ধি পায়।'
          }
        },
        {
          term: 'Base / Frame Pointer (BP / RBP)',
          def: {
            en: 'Register establishing a stable anchor address at the base of the current stack frame, allowing local variables and function parameters to be referenced via fixed offsets.',
            bn: 'রেজিস্টার যা বর্তমান স্ট্যাক ফ্রেমের গোড়ায় একটি স্থির অ্যাঙ্কর অ্যাড্রেস স্থাপন করে, যার ফলে নির্দিষ্ট অফসেট দিয়ে লোকাল ভেরিয়েবল এবং ফাংশন প্যারামিটার পড়া যায়।'
          }
        }
      ]
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'multiport-register-file.js',
      code: `// Multi-Port CPU Register File & Call Stack Simulator
class CpuRegisterFile {
  constructor(numRegisters = 8) {
    // 8 General-Purpose Registers: R0 to R7
    this.regs = new Int32Array(numRegisters);
    this.pc = 0;   // Program Counter
    this.sp = 64;  // Stack Pointer (descending stack top)
    this.memory = new Int32Array(128); // 128-word RAM
  }

  // Dual-Port Asynchronous Read (Combinational Logic)
  readPorts(addrA, addrB) {
    return {
      portA: this.regs[addrA],
      portB: this.regs[addrB],
    };
  }

  // Synchronous Write Port (Commits only on Clock Edge with Write Enable)
  clockEdgeWrite(destAddr, data, writeEnable) {
    if (writeEnable && destAddr >= 0 && destAddr < this.regs.length) {
      this.regs[destAddr] = data;
    }
  }

  // Stack PUSH operation: decrement SP, write value to RAM
  push(regIndex) {
    this.sp -= 1;
    this.memory[this.sp] = this.regs[regIndex];
    console.log(\`PUSH R\${regIndex} (\${this.regs[regIndex]}) -> SP=\${this.sp}\`);
  }

  // Stack POP operation: read from RAM, increment SP, store in register
  pop(regIndex) {
    const value = this.memory[this.sp];
    this.sp += 1;
    this.regs[regIndex] = value;
    console.log(\`POP  -> R\${regIndex} (\${value}), SP=\${this.sp}\`);
  }
}

// 1. Initialize Register File with 8 registers
const cpu = new CpuRegisterFile(8);

// 2. Write initial values using write port with Write Enable = true
cpu.clockEdgeWrite(1, 42, true);  // R1 = 42
cpu.clockEdgeWrite(2, 99, true);  // R2 = 99
cpu.clockEdgeWrite(3, 15, false); // Ignored: WE is false

// 3. Read both registers simultaneously via dual read ports
const readResult = cpu.readPorts(1, 2);
console.log('Dual-Port Read [R1, R2]:', readResult);

// 4. Perform Stack Operations using Stack Pointer
cpu.push(1); // Push R1 (42) to stack
cpu.push(2); // Push R2 (99) to stack

// Clear R1 and R2
cpu.clockEdgeWrite(1, 0, true);
cpu.clockEdgeWrite(2, 0, true);

// Pop back into swapped registers
cpu.pop(1); // Pops 99 into R1
cpu.pop(2); // Pops 42 into R2

console.log('Restored Registers: R1 =', cpu.regs[1], ', R2 =', cpu.regs[2]);
console.log('Final Stack Pointer SP =', cpu.sp);`,
      caption: {
        en: 'Deterministic register file with dual read ports, synchronous write port, and stack operations.',
        bn: 'ডুয়াল রিড পোর্ট, সিঙ্ক্রোনাস রাইট পোর্ট এবং স্ট্যাক অপারেশনসহ নির্দেশিত রেজিস্টার ফাইল।'
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: {
        en: 'Architectural Register Spilling to RAM',
        bn: 'আর্কিটেকচারাল রেজিস্টার স্পিলিং এবং র‍্যামে সংরক্ষণ'
      },
      text: {
        en: 'Microprocessor register files are physically limited due to silicon area constraints: x86_64 defines 16 architectural 64-bit general-purpose registers, while ARM64 provides 32 registers. When a compiler generates complex machine code demanding more variables than available registers, it triggers register spilling. The compiler inserts instructions to write inactive register values into RAM stack memory and later reload them, increasing memory traffic and slowing critical loop execution from 1 cycle to tens of cycles.',
        bn: 'সিলিকন চিপের ক্ষেত্রফলের সীমাবদ্ধতার কারণে প্রসেসর রেজিস্টার ফাইল সীমিত থাকে: x86_64 আর্কিটেকচারে ১৬ টি আর্কিটেকচারাল ৬৪-বিট রেজিস্টার থাকে, আর ARM64 আর্কিটেকচারে ৩২ টি রেজিস্টার থাকে। যখন কম্পাইলার এমন জটিল কোড তৈরি করে যেখানে প্রাপ্ত রেজিস্টারের চেয়ে বেশি ভেরিয়েবলের প্রয়োজন হয়, তখন রেজিস্টার স্পিলিং ঘটে। কম্পাইলার নিষ্ক্রিয় রেজিস্টারের মান স্ট্যাক মেমোরিতে লিখে রাখে এবং পরে তা পুনরায় লোড করে, যা মেমোরি ট্রাফিক বৃদ্ধি করে এবং কার্যকর লুপের গতি ১ সাইকেল থেকে বহু সাইকেলে নামিয়ে দেয়।'
      },
    },
  ],
  exercises: [
    {
      id: 'ca-reg-ex-1',
      kind: 'predict',
      question: {
        en: 'On which clock transition does an edge-triggered D flip-flop capture and latch its input data: the rising clock transition from 0 to 1, or falling from 1 to 0? Type rising or falling.',
        bn: 'এজ-ট্রিগার্ড ডি ফ্লিপ-ফ্লপ কোন ক্লক ট্রানজিশনে তার ইনপুট ডাটা ধারণ ও ল্যাচ করে: ০ থেকে ১ এ রাইজিং ট্রানজিশন, নাকি ১ থেকে ০ এ ফলিং? rising বা falling টাইপ করুন।'
      },
      answer: 'rising',
      hint: {
        en: 'Positive edge-triggered registers commit changes when the clock line transitions from logic low (0) to logic high (1).',
        bn: 'পজিটিভ এজ-ট্রিগার্ড রেজিস্টার লজিক লো (০) থেকে লজিক হাই (১) এ পরিবর্তিত হওয়ার মুহূর্তে তথ্য সংরক্ষণ করে।'
      },
      explanation: {
        en: 'Positive edge-triggered flip-flops sample input D exactly when the clock voltage rises from 0 to 1, preserving that bit steadily until the next rising clock event.',
        bn: 'পজিটিভ এজ-ট্রিগার্ড ফ্লিপ-ফ্লপ ক্লক ভোল্টেজ ঠিক ০ থেকে ১ এ ওঠার মুহূর্তে ইনপুট D স্যাম্পল করে পরবর্তী রাইজিং ক্লক পর্যন্ত তা অপরিবর্তিত রাখে।'
      },
    },
    {
      id: 'ca-reg-ex-2',
      kind: 'mcq',
      question: {
        en: 'Why do modern CPU register files feature 2 dedicated read ports alongside 1 write port?',
        bn: 'আধুনিক সিপিইউ রেজিস্টার ফাইলে ১ টি রাইট পোর্টের পাশাপাশি কেন ২ টি নিবেদিত রিড পোর্ট থাকে?'
      },
      options: [
        {
          en: 'ALU instructions require two source operands and produce one destination result simultaneously in one clock cycle',
          bn: 'অ্যালু ইন্সট্রাকশনে দুটি সোর্স অপারেন্ড রিড এবং একটি ডেস্টিনেশন রেজাল্ট রাইট একই ক্লক সাইকেলে সম্পন্ন করতে হয়',
        },
        {
          en: 'To allow two different program threads to execute simultaneously on a single execution core',
          bn: 'একটি সিঙ্গেল কোর প্রসেসরে দুটি ভিন্ন প্রোগ্রাম থ্রেড একই সাথে চালানোর সুবিধা দিতে',
        },
        {
          en: 'Because reading data from flip-flops requires twice as much electrical power as writing data',
          bn: 'কারণ ফ্লিপ-ফ্লপ থেকে ডাটা রিড করতে ডাটা রাইট করার দ্বিগুণ বৈদ্যুতিক শক্তির প্রয়োজন হয়',
        },
        {
          en: 'To bypass the L1 cache controller completely during floating-point operations',
          bn: 'ফ্লোটিং-পয়েন্ট অপারেশনের সময় এল১ ক্যাশ কন্ট্রোলারকে সম্পূর্ণ বাইপাস করার জন্য',
        },
      ],
      answer: 0,
      hint: {
        en: 'A standard ADD instruction needs 2 input operands and 1 destination at the same time.',
        bn: 'একটি সাধারণ ADD নির্দেশে একই সময়ে ২ টি ইনপুট অপারেন্ড এবং ১ টি ডেস্টিনেশন প্রয়োজন হয়।',
      },
      explanation: {
        en: 'Typical binary ALU operations (like R3 = R1 + R2) need to read 2 source registers simultaneously and write back 1 result in a single machine cycle.',
        bn: 'সাধারণ বাইনারি অ্যালু অপারেশনে ( যেমন R3 = R1 + R2 ) একই সাইকেলে ২ টি সোর্স রেজিস্টার থেকে ডাটা রিড এবং ১ টি রেজাল্ট রাইট করতে হয়।'
      },
    },
    {
      id: 'ca-reg-ex-3',
      kind: 'mcq',
      question: {
        en: 'What architectural phenomenon occurs when a compiler generates code that exceeds the 16 or 32 available hardware registers?',
        bn: 'কম্পাইলার যখন প্রাপ্ত ১৬ বা ৩২ টি হার্ডওয়্যার রেজিস্টারের চেয়ে বেশি ভেরিয়েবল ব্যবহারের কোড তৈরি করে তখন কোন ঘটনাটি ঘটে?'
      },
      options: [
        {
          en: 'Register Spilling: excess variables are pushed to the RAM stack, increasing memory latency',
          bn: 'রেজিস্টার স্পিলিং: অতিরিক্ত ভেরিয়েবলগুলো র‍্যাম স্ট্যাক মেমোরিতে পাঠানো হয়, যা মেমোরি ল্যাটেন্সি বৃদ্ধি করে',
        },
        {
          en: 'Hardware Fault: the CPU halts execution immediately with an illegal opcode interrupt',
          bn: 'হার্ডওয়্যার ফল্ট: সিপিইউ তাত্ক্ষণিকভাবে একটি অবৈধ অপকোড ইন্টারাপ্ট দিয়ে এক্সিকিউশন বন্ধ করে',
        },
        {
          en: 'Bus Contention: the system data bus permanently short-circuits due to high voltage',
          bn: 'বাস কনটেনশন: অতিরিক্ত ভোল্টেজের কারণে সিস্টেম ডাটা বাস স্থায়ীভাবে শর্ট-সার্কিট হয়ে যায়',
        },
        {
          en: 'Microcode Reset: the CPU flushes the BIOS firmware ROM and restarts the operating system',
          bn: 'মাইক্রোকোড রিসেট: সিপিইউ বায়োস ফার্মওয়্যার রম মুছে ফেলে অপারেটিং সিস্টেম রিস্টার্ট করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'When hardware registers run out of capacity, variables must spill out into system RAM.',
        bn: 'হার্ডওয়্যার রেজিস্টারের ধারণক্ষমতা শেষ হয়ে গেলে অতিরিক্ত ভেরিয়েবলগুলোকে সিস্টেম র‍্যামে পাঠাতে হয়।',
      },
      explanation: {
        en: 'When live variables outnumber available registers, compilers perform register spilling, evicting temporary values to the stack in RAM and incurring costly memory overhead.',
        bn: 'যখন লাইভ ভেরিয়েবলের সংখ্যা প্রাপ্ত রেজিস্টারের চেয়ে বেড়ে যায়, তখন কম্পাইলার রেজিস্টার স্পিলিং করে স্ট্যাক মেমোরিতে মান সংরক্ষণ করে, যা ব্যয়বহুল মেমোরি ল্যাটেন্সি তৈরি করে।'
      },
    },
    {
      id: 'ca-reg-ex-4',
      kind: 'predict',
      question: {
        en: 'What is the 2-letter abbreviation for the dedicated CPU register that tracks the active top memory address of the execution stack?',
        bn: 'এক্সিকিউশন স্ট্যাকের সক্রিয় শীর্ষ মেমোরি অ্যাড্রেস ট্র্যাক করে এমন নিবেদিত সিপিইউ রেজিস্টারের ২ অক্ষরের সংক্ষিপ্ত রূপ কী?'
      },
      answer: 'SP',
      hint: {
        en: 'Short for Stack Pointer (on 64-bit x86 systems known as RSP).',
        bn: 'স্ট্যাক পয়েন্টার ( Stack Pointer ) এর সংক্ষিপ্ত রূপ ( ৬৪-বিট x86 সিস্টেমে যা RSP নামে পরিচিত )।',
      },
      explanation: {
        en: 'The Stack Pointer (SP) points to the memory address of the current top of the call stack, automatically decrementing upon PUSH and incrementing upon POP.',
        bn: 'স্ট্যাক পয়েন্টার ( SP ) কল স্ট্যাকের বর্তমান শীর্ষ মেমোরি অ্যাড্রেস নির্দেশ করে, যা PUSH অপারেশনে হ্রাস পায় এবং POP অপারেশনে বৃদ্ধি পায়।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Sequential Logic & CPU Registers Architecture Quiz',
      bn: 'সিকোয়েনশিয়াল লজিক এবং সিপিইউ রেজিস্টার আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'ca-reg-qz-1',
        kind: 'mcq',
        topic: 'sequential-vs-combinational',
        question: {
          en: 'What fundamental architectural property distinguishes sequential logic circuits from combinational logic circuits?',
          bn: 'কোন মৌলিক আর্কিটেকচারাল বৈশিষ্ট্য সিকোয়েনশিয়াল লজিক সার্কিটকে কম্বিনেশনাল লজিক সার্কিট থেকে পৃথক করে?'
        },
        options: [
          {
            en: 'Sequential circuits contain feedback loops and clocking mechanisms to store state, whereas combinational outputs depend solely on current inputs',
            bn: 'সিকোয়েনশিয়াল সার্কিটে স্টেট সংরক্ষণের জন্য ফিডব্যাক লুপ এবং ক্লকিং ব্যবস্থা থাকে, যেখানে কম্বিনেশনাল সার্কিটের আউটপুট শুধুমাত্র বর্তমান ইনপুটের ওপর নির্ভর করে',
          },
          {
            en: 'Sequential circuits operate only on analog continuous waves without binary digital voltages',
            bn: 'সিকোয়েনশিয়াল সার্কিট শুধুমাত্র অ্যানালগ অবিচ্ছিন্ন তরঙ্গে কাজ করে, কোনো বাইনারি ডিজিটাল ভোল্টেজ ব্যবহার করে না',
          },
          {
            en: 'Combinational circuits require a constant clock frequency to retain their electrical charge',
            bn: 'কম্বিনেশনাল সার্কিটের বৈদ্যুতিক চার্জ ধরে রাখার জন্য একটি স্থির ক্লক ফ্রিকোয়েন্সির প্রয়োজন হয়',
          },
          {
            en: 'Sequential circuits cannot be integrated inside silicon microprocessors',
            bn: 'সিকোয়েনশিয়াল সার্কিট সিলিকন মাইক্রোপ্রসেসরের ভেতরে তৈরি করা সম্ভব নয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'One circuit type remembers past states through feedback loops; the other does not.',
          bn: 'এক ধরনের সার্কিট ফিডব্যাক লুপের মাধ্যমে পূর্বের অবস্থা মনে রাখে; অন্যটি রাখে না।',
        },
        explanation: {
          en: 'Combinational circuits calculate outputs strictly from instantaneous inputs; sequential circuits use feedback memory elements to retain past historical state across clock cycles.',
          bn: 'কম্বিনেশনাল সার্কিট তাৎক্ষণিক ইনপুট থেকে আউটপুট হিসাব করে; সিকোয়েনশিয়াল সার্কিট ফিডব্যাক মেমোরির মাধ্যমে ক্লক সাইকেল জুড়ে পূর্ববর্তী স্টেট ধরে রাখে।'
        },
      },
      {
        id: 'ca-reg-qz-2',
        kind: 'mcq',
        topic: 'd-flip-flop-inversion',
        question: {
          en: 'How does an edge-triggered D flip-flop prevent the invalid oscillating state that plagues basic SR latches?',
          bn: 'এজ-ট্রিগার্ড ডি ফ্লিপ-ফ্লপ কীভাবে বেসিক এসআর ল্যাচের অবৈধ অসিলেশন অবস্থা প্রতিরোধ করে?'
        },
        options: [
          {
            en: 'It uses a single input D inverted for the complementary gate, guaranteeing both internal inputs can never equal 1 at the same time',
            bn: 'এটি একটিমাত্র ইনপুট D এর সাথে নট গেট ব্যবহার করে, যার ফলে অভ্যন্তরীণ দুটি ইনপুট কখনো একসাথে ১ হতে পারে না',
          },
          {
            en: 'It completely disables all electrical current flow during the clock rising edge',
            bn: 'এটি ক্লকের রাইজিং এজের সময় সমস্ত বৈদ্যুতিক কারেন্ট প্রবাহ সম্পূর্ণ বন্ধ করে দেয়',
          },
          {
            en: 'It replaces silicon semiconductor transistors with magnetic vacuum tubes',
            bn: 'এটি সিলিকন সেমিকন্ডাক্টর ট্রানজিস্টরের পরিবর্তে চৌম্বকীয় ভ্যাকুয়াম টিউব ব্যবহার করে',
          },
          {
            en: 'It forces the output Q to permanently remain at logic 0 regardless of input',
            bn: 'এটি ইনপুট নির্বিশেষে আউটপুট Q এর মানকে স্থায়ীভাবে লজিক ০ তে ধরে রাখতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Feeding D to one gate and ~D to the other ensures the two lines are always opposites.',
          bn: '১ টি গেটে D এবং অন্য গেটে ~D দিলে ২ টি লাইন সর্বদা বিপরীত মান বহন করে।',
        },
        explanation: {
          en: 'By feeding input D directly to one terminal and inverted D to the other, the D flip-flop guarantees inputs are always complementary, eliminating the invalid 1-1 condition.',
          bn: 'ইনপুট D কে সরাসরি এক প্রান্তে এবং নট গেট দিয়ে অন্য প্রান্তে পাঠানোর মাধ্যমে ডি ফ্লিপ-ফ্লপ নিশ্চিত করে যে ইনপুট দুটি সর্বদা বিপরীত হবে, যা অবৈধ ১-১ অবস্থা দূর করে।'
        },
      },
      {
        id: 'ca-reg-qz-3',
        kind: 'mcq',
        topic: 'write-enable-control',
        question: {
          en: 'What is the operational function of the Write Enable (WE) control pin on a CPU register file?',
          bn: 'সিপিইউ রেজিস্টার ফাইলে রাইট এনেবল (WE) কন্ট্রোল পিনের কাজের ভূমিকা কী?'
        },
        options: [
          {
            en: 'When WE is 1, data on the write port is latched into the target register on the clock edge; when 0, existing register contents remain protected',
            bn: 'যখন WE এর মান ১ হয়, তখন ক্লক এজে রাইট পোর্টের ডাটা নির্দিষ্ট রেজিস্টারে সংরক্ষিত হয়; যখন ০ হয়, তখন বিদ্যমান মান সুরক্ষিত থাকে',
          },
          {
            en: 'It doubles the operating voltage of the processor to allow overclocking',
            bn: 'এটি ওভারক্লকিংয়ের সুবিধা দিতে প্রসেসরের অপারেটিং ভোল্টেজ দ্বিগুণ করে দেয়',
          },
          {
            en: 'It converts 32-bit integer data into 64-bit IEEE 754 floating-point format',
            bn: 'এটি ৩২-বিট ইন্টিজার ডাটাকে ৬৪-বিট IEEE 754 ফ্লোটিং-পয়েন্ট ফরম্যাটে রূপান্তর করে',
          },
          {
            en: 'It clears all registers to zero at the beginning of every CPU clock cycle',
            bn: 'এটি প্রতি ক্লক সাইকেলের শুরুতে সমস্ত রেজিস্টারের মান মুছে শূন্য করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'The control line that enables or disables updating stored register state on the clock edge.',
          bn: 'ক্লক এজে রেজিস্টারের মান আপডেট করার অনুমতি নিয়ন্ত্রণকারী কন্ট্রোল লাইন।',
        },
        explanation: {
          en: 'Write Enable acts as a gatekeeper: registers only update their stored value on the clock edge when Write Enable is asserted to 1, preventing inadvertent overwrites.',
          bn: 'রাইট এনেবল একটি প্রহরীর মতো কাজ করে: শুধুমাত্র যখন রাইট এনেবলের মান ১ হয় তখনই ক্লক এজে রেজিস্টারের মান আপডেট হয়, যা অনিচ্ছাকৃত ওভাররাইট থেকে রক্ষা করে।'
        },
      },
      {
        id: 'ca-reg-qz-4',
        kind: 'mcq',
        topic: 'program-counter-purpose',
        question: {
          en: 'Which special-purpose architectural register continuously holds the memory address of the next machine instruction to be fetched by the CPU?',
          bn: 'কোন বিশেষ আর্কিটেকচারাল রেজিস্টার সিপিইউ কর্তৃক ফেচ করার মতো পরবর্তী মেশিন নির্দেশের মেমোরি অ্যাড্রেস সর্বক্ষণ ধারণ করে?'
        },
        options: [
          {
            en: 'Program Counter (PC / RIP)',
            bn: 'প্রোগ্রাম কাউন্টার (PC / RIP)',
          },
          {
            en: 'Instruction Register (IR)',
            bn: 'ইন্সট্রাকশন রেজিস্টার (IR)',
          },
          {
            en: 'Memory Address Register (MAR)',
            bn: 'মেমোরি অ্যাড্রেস রেজিস্টার (MAR)',
          },
          {
            en: 'Stack Pointer (SP / RSP)',
            bn: 'স্ট্যাক পয়েন্টার (SP / RSP)',
          },
        ],
        answer: 0,
        hint: {
          en: 'The register holding the address pointer of the instruction being fetched next.',
          bn: 'পরবর্তী ফেচ করা নির্দেশের অ্যাড্রেস পয়েন্টার ধারণকারী রেজিস্টার।',
        },
        explanation: {
          en: 'The Program Counter (PC) stores the pointer to the next instruction in memory, driving the instruction fetch stage of the processor pipeline.',
          bn: 'প্রোগ্রাম কাউন্টার (PC) মেমোরিতে পরবর্তী নির্দেশের পয়েন্টার সংরক্ষণ করে, যা প্রসেসর পাইপলাইনের ইন্সট্রাকশন ফেচ ধাপ পরিচালনা করে।'
        },
      },
    ],
  },
  next: {
    slug: 'instruction-cycle',
    title: {
      en: 'Instruction Cycle, Pipelining & Branch Hazards',
      bn: 'ইন্সট্রাকশন সাইকেল, পাইপলাইনিং এবং ব্রাঞ্চ হ্যাজার্ড'
    },
  },
};
