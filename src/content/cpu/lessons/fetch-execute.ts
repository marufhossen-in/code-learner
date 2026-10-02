import type { Lesson } from '../../../lib/types';

export const FetchExecuteLesson: Lesson = {
  slug: 'fetch-execute',
  tech: 'cpu',
  title: {
    en: 'The Fetch-Decode-Execute Cycle & Instruction Decoding',
    bn: 'ফেচ-ডিকোড-এক্সিকিউট সাইকেল এবং ইন্সট্রাকশন ডিকোডিং'
  },
  summary: {
    en: 'Master the perpetual heartbeat of every microprocessor: the Fetch-Decode-Execute instruction cycle. Follow how the Program Counter (PC) addresses memory, how the Instruction Register (IR) holds machine code words, how decoders decompose opcodes and addressing modes, and how the Control Unit triggers micro-operations across internal data buses.',
    bn: 'প্রতিটি মাইক্রোপ্রসেসরের চিরন্তন হৃদস্পন্দন আয়ত্ত করুন: ফেচ-ডিকোড-এক্সিকিউট ইন্সট্রাকশন সাইকেল। প্রোগ্রাম কাউন্টার (PC) কীভাবে মেমোরি অ্যাড্রেস করে, ইন্সট্রাকশন রেজিস্টার (IR) কীভাবে মেশিন কোড ধরে রাখে, ডিকোডার কীভাবে অপকোড ও অ্যাড্রেসিং মোড বিশ্লেষণ করে এবং কন্ট্রোল ইউনিট কীভাবে অভ্যন্তরীণ বাসে মাইক্রো-অপারেশন পরিচালনা করে তা জানুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'perpetual-instruction-cycle',
      text: {
        en: 'The Perpetual Loop: Fetch, Decode, Execute, and Writeback',
        bn: 'চিরন্তন লুপ: ফেচ, ডিকোড, এক্সিকিউট এবং রাইটব্যাক'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Whenever you run a program on your computer, the microprocessor enters an endless loop called the Instruction Cycle. The CPU fetches machine code from memory one instruction at a time. It decodes the requested operation, executes the calculation, and writes the result back into silicon registers.',
        bn: 'আপনি যখনই আপনার কম্পিউটারে কোনো প্রোগ্রাম চালান, মাইক্রোপ্রসেসর ইন্সট্রাকশন সাইকেল নামের একটি নিরবচ্ছিন্ন লুপ শুরু করে। সিপিইউ মেমোরি থেকে প্রতিবারে ১ টি করে মেশিন কোড নির্দেশ সংগ্রহ করে। এরপর এটি কাঙ্ক্ষিত অপারেশন ডিকোড করে, হিসাব সম্পন্ন করে এবং ফলাফল সিলিকন রেজিস্টারে সংরক্ষণ করে।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Instruction Fetch (IF)',
            bn: '১. ইন্সট্রাকশন ফেচ (IF)'
          },
          text: {
            en: 'The Program Counter (PC) outputs the memory address of the next instruction onto the Address Bus. The memory subsystem retrieves the 32-bit machine word and transmits it over the Data Bus into the processor Instruction Register (IR). Meanwhile, the Program Counter automatically increments by 4 bytes to point to the subsequent sequential instruction.',
            bn: 'প্রোগ্রাম কাউন্টার (PC) পরবর্তী নির্দেশের মেমোরি ঠিকানা অ্যাড্রেস বাসে পাঠায়। মেমোরি সাব-সিস্টেম ৩২-বিট মেশিন কোডটি ডাটা বাসের মাধ্যমে প্রসেসরের ইন্সট্রাকশন রেজিস্টারে (IR) পাঠিয়ে দেয়। একই সময়ে পরবর্তী নির্দেশ নির্দেশ করতে প্রোগ্রাম কাউন্টার স্বয়ংক্রিয়ভাবে ৪ বাইট বৃদ্ধি পায়।'
          }
        },
        {
          title: {
            en: '2. Instruction Decode (ID)',
            bn: '২. ইন্সট্রাকশন ডিকোড (ID)'
          },
          text: {
            en: 'The Instruction Decoder parses the binary bits stored in the IR. It extracts the Operation Code (Opcode), determines the required arithmetic operation, reads operand data from the source registers in the register file, and decodes any immediate numerical constants.',
            bn: 'ইন্সট্রাকশন ডিকোডার আইআরে সংরক্ষিত বাইনারি বিটগুলো বিশ্লেষণ করে। এটি অপারেশন কোড (Opcode) শনাক্ত করে, প্রয়োজনীয় গাণিতিক কাজ নির্ধারণ করে, রেজিস্টার ফাইল থেকে অপারেন্ড রিড করে এবং কোনো তাৎক্ষণিক সংখ্যাগত মান থাকলে তা আলাদা করে।'
          }
        },
        {
          title: {
            en: '3. Instruction Execute (EX)',
            bn: '৩. ইন্সট্রাকশন এক্সিকিউট (EX)'
          },
          text: {
            en: 'The Control Unit activates the designated hardware execution unit. The Arithmetic Logic Unit (ALU) computes additions, subtractions, or comparisons, while status flags (Zero, Carry, Negative) are recorded in the processor flags register.',
            bn: 'কন্ট্রোল ইউনিট নির্ধারিত হার্ডওয়্যার এক্সিকিউশন ইউনিট সক্রিয় করে। অ্যারিথমেটিক লজিক ইউনিট (ALU) যোগ, বিয়োগ বা তুলনার কাজ করে এবং প্রসেসর ফ্ল্যাগ রেজিস্টারে স্ট্যাটাস ফ্ল্যাগ ( জিরো, ক্যারি, নেগেটিভ ) সংরক্ষণ করা হয়।'
          }
        },
        {
          title: {
            en: '4. Memory Access & Writeback (WB)',
            bn: '৪. মেমোরি অ্যাক্সেস এবং রাইটব্যাক (WB)'
          },
          text: {
            en: 'If the instruction is a LOAD or STORE, data moves between the CPU and memory cache. For arithmetic instructions, the computed result is written back into the designated destination register, completing the cycle.',
            bn: 'নির্দেশটি যদি LOAD বা STORE হয়, তবে সিপিইউ এবং মেমোরি ক্যাশের মধ্যে ডাটা আদান-প্রদান ঘটে। সাধারণ পাটিগণিত নির্দেশের ক্ষেত্রে চূড়ান্ত ফলাফল ডেস্টিনেশন রেজিস্টারে সংরক্ষণ করে সাইকেলটি সম্পন্ন হয়।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      title: {
        en: 'The Four-Phase Instruction Cycle State Machine Flow',
        bn: 'চার-পর্যায়ের ইন্সট্রাকশন সাইকেল স্টেট মেশিন প্রবাহ'
      },
      svg: `<svg viewBox="0 0 820 400" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Four phase instruction execution cycle state machine diagram">
  <rect width="820" height="400" fill="#0f172a" rx="12"/>
  
  <text x="410" y="32" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">INSTRUCTION CYCLE STATE MACHINE &amp; HARDWARE CONTROL</text>
  
  <!-- Phase 1: Fetch -->
  <g transform="translate(60, 65)">
    <rect width="150" height="180" rx="8" fill="#1e293b" stroke="#0284c7" stroke-width="2"/>
    <text x="75" y="30" fill="#0284c7" font-size="13" font-weight="bold" text-anchor="middle">1. FETCH (IF)</text>
    <rect x="15" y="50" width="120" height="30" rx="4" fill="#0f172a"/>
    <text x="75" y="70" fill="#cbd5e1" font-size="10" text-anchor="middle">PC -> Address Bus</text>
    <rect x="15" y="90" width="120" height="30" rx="4" fill="#0f172a"/>
    <text x="75" y="110" fill="#38bdf8" font-size="10" text-anchor="middle">RAM -> IR Register</text>
    <rect x="15" y="130" width="120" height="30" rx="4" fill="#0f172a"/>
    <text x="75" y="150" fill="#10b981" font-size="10" text-anchor="middle">PC = PC + 4</text>
  </g>
  
  <!-- Arrow 1 to 2 -->
  <line x1="210" y1="155" x2="245" y2="155" stroke="#38bdf8" stroke-width="3"/>
  <polygon points="245,150 255,155 245,160" fill="#38bdf8"/>
  
  <!-- Phase 2: Decode -->
  <g transform="translate(255, 65)">
    <rect width="150" height="180" rx="8" fill="#1e293b" stroke="#0d9488" stroke-width="2"/>
    <text x="75" y="30" fill="#0d9488" font-size="13" font-weight="bold" text-anchor="middle">2. DECODE (ID)</text>
    <rect x="15" y="50" width="120" height="30" rx="4" fill="#0f172a"/>
    <text x="75" y="70" fill="#cbd5e1" font-size="10" text-anchor="middle">Opcode Extraction</text>
    <rect x="15" y="90" width="120" height="30" rx="4" fill="#0f172a"/>
    <text x="75" y="110" fill="#f59e0b" font-size="10" text-anchor="middle">Read Rs1, Rs2</text>
    <rect x="15" y="130" width="120" height="30" rx="4" fill="#0f172a"/>
    <text x="75" y="150" fill="#cbd5e1" font-size="10" text-anchor="middle">Sign-Extend Imm</text>
  </g>
  
  <!-- Arrow 2 to 3 -->
  <line x1="405" y1="155" x2="440" y2="155" stroke="#38bdf8" stroke-width="3"/>
  <polygon points="440,150 450,155 440,160" fill="#38bdf8"/>
  
  <!-- Phase 3: Execute -->
  <g transform="translate(450, 65)">
    <rect width="150" height="180" rx="8" fill="#1e293b" stroke="#ca8a04" stroke-width="2"/>
    <text x="75" y="30" fill="#ca8a04" font-size="13" font-weight="bold" text-anchor="middle">3. EXECUTE (EX)</text>
    <rect x="15" y="50" width="120" height="30" rx="4" fill="#0f172a"/>
    <text x="75" y="70" fill="#cbd5e1" font-size="10" text-anchor="middle">ALU Calculation</text>
    <rect x="15" y="90" width="120" height="30" rx="4" fill="#0f172a"/>
    <text x="75" y="110" fill="#f59e0b" font-size="10" text-anchor="middle">Branch Condition</text>
    <rect x="15" y="130" width="120" height="30" rx="4" fill="#0f172a"/>
    <text x="75" y="150" fill="#ef4444" font-size="10" text-anchor="middle">Update Flags Z,C</text>
  </g>
  
  <!-- Arrow 3 to 4 -->
  <line x1="600" y1="155" x2="635" y2="155" stroke="#38bdf8" stroke-width="3"/>
  <polygon points="635,150 645,155 635,160" fill="#38bdf8"/>
  
  <!-- Phase 4: Writeback -->
  <g transform="translate(645, 65)">
    <rect width="140" height="180" rx="8" fill="#1e293b" stroke="#16a34a" stroke-width="2"/>
    <text x="70" y="30" fill="#16a34a" font-size="13" font-weight="bold" text-anchor="middle">4. WRITEBACK</text>
    <rect x="10" y="50" width="120" height="30" rx="4" fill="#0f172a"/>
    <text x="70" y="70" fill="#cbd5e1" font-size="10" text-anchor="middle">Result -> Reg File</text>
    <rect x="10" y="90" width="120" height="30" rx="4" fill="#0f172a"/>
    <text x="70" y="110" fill="#10b981" font-size="10" text-anchor="middle">Write Enable = 1</text>
    <rect x="10" y="130" width="120" height="30" rx="4" fill="#0f172a"/>
    <text x="70" y="150" fill="#38bdf8" font-size="10" text-anchor="middle">Instruction Done</text>
  </g>
  
  <!-- Loopback arrow from WB back to IF -->
  <path d="M 715,245 L 715,310 L 135,310 L 135,255" fill="none" stroke="#38bdf8" stroke-width="3" stroke-dasharray="6,4"/>
  <polygon points="130,255 135,245 140,255" fill="#38bdf8"/>
  <text x="410" y="335" fill="#94a3b8" font-size="12" text-anchor="middle">Loop repeats billions of times per second (Clock Cycle Cadence)</text>
</svg>`,
      caption: {
        en: 'The perpetual instruction cycle fetches binary opcodes from memory, decodes operations, executes ALU math, and writes back results.',
        bn: 'চিরন্তন ইন্সট্রাকশন সাইকেল মেমোরি থেকে অপকোড ফেচ করে, অপারেশন ডিকোড করে, অ্যালু গণনা চালায় এবং ফলাফল সংরক্ষণ করে।'
      },
    },
    {
      type: 'heading',
      id: 'machine-instruction-formats',
      text: {
        en: 'Machine Instruction Formats & Addressing Modes',
        bn: 'মেশিন ইন্সট্রাকশন ফরম্যাট এবং অ্যাড্রেসিং মোড'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Microprocessors organize machine instructions into structured bit patterns. In a standard 32-bit RISC architecture, instructions are categorized into distinct formats according to their operand types:',
        bn: 'মাইক্রোপ্রসেসর মেশিন নির্দেশগুলোকে নির্দিষ্ট বিট প্যাটার্নে সাজিয়ে রাখে। একটি স্ট্যান্ডার্ড ৩২-বিট আরআইএসসি আর্কিটেকচারে অপারেন্ডের ওপর ভিত্তি করে নির্দেশগুলোকে বিভিন্ন ফরম্যাটে ভাগ করা হয়:'
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'R-Type (Register) Format',
          def: {
            en: 'Pure register-to-register arithmetic operations: encodes a 7-bit opcode, 5-bit destination register (Rd), and two 5-bit source registers (Rs1, Rs2). Example: ADD R3, R1, R2.',
            bn: 'বিশুদ্ধ রেজিস্টার পাটিগণিত অপারেশন: একটি ৭-বিট অপকোড, ৫-বিট ডেস্টিনেশন রেজিস্টার (Rd) এবং দুটি ৫-বিট সোর্স রেজিস্টার (Rs1, Rs2) এনকোড করে। যেমন: ADD R3, R1, R2।'
          }
        },
        {
          term: 'I-Type (Immediate) Format',
          def: {
            en: 'Instructions embedding a direct numerical constant within the instruction word itself, alongside one source register and one destination register. Example: ADDI R1, R1, 10.',
            bn: 'যে নির্দেশগুলোর মধ্যে সরাসরি সংখ্যাগত ধ্রুবক মান এমবেড করা থাকে, সাথে ১ টি সোর্স এবং ১ টি ডেস্টিনেশন রেজিস্টার থাকে। যেমন: ADDI R1, R1, ১০।'
          }
        },
        {
          term: 'Base-Offset Addressing Mode',
          def: {
            en: 'Memory loads and stores where the effective RAM address is calculated by adding an immediate offset to a base pointer register: Address = Reg[Base] + Offset.',
            bn: 'মেমোরি লোড ও স্টোর অপারেশন যেখানে বেস রেজিস্টারের সাথে অফসেট যোগ করে মেমোরি অ্যাড্রেস বের করা হয়: অ্যাড্রেস = Reg[Base] + অফসেট।'
          }
        }
      ]
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'fetch-decode-execute-sim.js',
      code: `// Cycle-Accurate Fetch-Decode-Execute Microprocessor Simulator
class InstructionCycleMachine {
  constructor() {
    this.pc = 0;              // Program Counter
    this.ir = 0;              // Instruction Register
    this.regs = new Int32Array(4); // R0 to R3
    this.cycles = 0;

    // Simulated 32-bit Instruction Memory
    // Bytecode format: [Opcode, Dest/Src, Operand2/Imm]
    this.memory = [
      0x11, 15,     // Addr 0: LOAD_IMM R1 = 15
      0x12, 25,     // Addr 2: LOAD_IMM R2 = 25
      0x23, 1, 2,   // Addr 4: ADD R3 = R1 + R2 (15 + 25 = 40)
    ];
  }

  // Execute one complete instruction cycle
  step() {
    this.cycles++;
    console.log(\`\\n=== Clock Cycle \${this.cycles} ===\`);

    // 1. FETCH: Read opcode from memory at address PC
    this.ir = this.memory[this.pc++];
    console.log(\`  [FETCH] Read opcode 0x\${this.ir.toString(16).toUpperCase()} at PC=\${this.pc - 1}\`);

    // 2. DECODE & 3. EXECUTE
    if (this.ir === 0x11) { // LOAD_IMM into R1
      const imm = this.memory[this.pc++];
      this.regs[1] = imm;
      console.log(\`  [EXECUTE] Loaded immediate \${imm} into Register R1\`);
    } else if (this.ir === 0x12) { // LOAD_IMM into R2
      const imm = this.memory[this.pc++];
      this.regs[2] = imm;
      console.log(\`  [EXECUTE] Loaded immediate \${imm} into Register R2\`);
    } else if (this.ir === 0x23) { // ADD R3 = R1 + R2
      const src1 = this.memory[this.pc++];
      const src2 = this.memory[this.pc++];
      const result = this.regs[src1] + this.regs[src2];
      // 4. WRITEBACK
      this.regs[3] = result;
      console.log(\`  [EXECUTE & WRITEBACK] R3 = R\${src1} (\${this.regs[src1]}) + R\${src2} (\${this.regs[src2]}) -> \${result}\`);
    }
  }
}

const machine = new InstructionCycleMachine();

// Run all instructions until memory stream exhausted
while (machine.pc < machine.memory.length) {
  machine.step();
}

console.log('\\nFinal CPU Execution Summary:');
console.log('  Total Machine Cycles =', machine.cycles);
console.log('  Program Counter (PC) =', machine.pc);
console.log('  Computed Sum in R3   =', machine.regs[3]);`,
      caption: {
        en: 'Cycle-accurate instruction cycle virtual machine calculating 15 + 25 = 40 across 3 sequential cycles.',
        bn: '৩ টি ধারাবাহিক সাইকেলে ১৫ + ২৫ = ৪০ গণনা সম্পন্নকারী সাইকেল-অ্যাকুরেট ভার্চুয়াল মেশিন।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Hardware Decoders & CISC Micro-Operation Translation',
        bn: 'হার্ডওয়্যার ডিকোডার এবং সিআইএসসি মাইক্রো-অপারেশন রূপান্তর'
      },
      text: {
        en: 'Modern x86_64 processors from Intel and AMD bridge legacy CISC instruction sets with high-speed RISC pipelines. Hardware instruction decoders on the chip intercept complex variable-length x86 instructions (ranging from 1 to 15 bytes) and translate them on the fly into 1 or more uniform, fixed-length micro-operations (uops). These internal uops are dispatched onto out-of-order execution pipelines with single-cycle efficiency.',
        bn: 'ইনটেল এবং এএমডির আধুনিক x86_64 প্রসেসরগুলো ঐতিহ্যবাহী সিআইএসসি নির্দেশ এবং দ্রুতগতির আরআইএসসি পাইপলাইনের মধ্যে সংযোগ স্থাপন করে। চিপের হার্ডওয়্যার ডিকোডারগুলো পরিবর্তনশীল দৈর্ঘ্যের জটিল x86 নির্দেশগুলোকে ( যা ১ থেকে ১৫ বাইট পর্যন্ত হতে পারে ) সরাসরি ১ বা একাধিক সুষম ও নির্দিষ্ট দৈর্ঘ্যের মাইক্রো-অপারেশনে ( uops ) রূপান্তর করে। এই অভ্যন্তরীণ uops গুলো একক সাইকেলের দক্ষতায় আউট-অব-অর্ডার পাইপলাইনে পরিচালিত হয়।'
      },
    },
  ],
  exercises: [
    {
      id: 'cpu-fde-ex-1',
      kind: 'predict',
      question: {
        en: 'When a processor sequentially fetches fixed-length 32-bit (4-byte) instructions, by how many bytes does the Program Counter (PC) automatically increment after each fetch? Type the single digit.',
        bn: 'একটি প্রসেসর যখন ধারাবাহিকভাবে নির্দিষ্ট দৈর্ঘ্যের ৩২-বিট ( ৪-বাইট ) নির্দেশ ফেচ করে, তখন প্রতি ফেচের পর প্রোগ্রাম কাউন্টার (PC) স্বয়ংক্রিয়ভাবে কয়টি বাইট বৃদ্ধি পায়? একক সংখ্যা টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'A 32-bit word spans exactly 4 memory address bytes (32 / 8 = 4).',
        bn: 'একটি ৩২-বিট ওয়ার্ড ঠিক ৪ টি মেমোরি বাইট জুড়ে অবস্থান করে ( ৩২ / ৮ = ৪ )।',
      },
      explanation: {
        en: 'Because each 32-bit instruction consumes 4 bytes of memory, the Program Counter adds 4 to advance to the next sequential instruction address.',
        bn: 'যেহেতু প্রতিটি ৩২-বিট নির্দেশ মেমোরির ৪ বাইট জায়গা নেয়, তাই পরবর্তী নির্দেশের ঠিকানায় যেতে প্রোগ্রাম কাউন্টারে ৪ যোগ করা হয়।'
      },
    },
    {
      id: 'cpu-fde-ex-2',
      kind: 'mcq',
      question: {
        en: 'During which phase of the instruction cycle does the CPU decode the binary opcode and read source operands from the register file?',
        bn: 'ইন্সট্রাকশন সাইকেলের কোন ধাপে সিপিইউ বাইনারি অপকোড বিশ্লেষণ করে এবং রেজিস্টার ফাইল থেকে অপারেন্ড রিড করে?'
      },
      options: [
        {
          en: 'Instruction Decode (ID) Phase',
          bn: 'ইন্সট্রাকশন ডিকোড (ID) ধাপ',
        },
        {
          en: 'Monitor Refresh Phase',
          bn: 'মনিটর রিফ্রেশ ধাপ',
        },
        {
          en: 'Hard Disk Defragmentation Phase',
          bn: 'হার্ড ডিস্ক ডিফ্র্যাগমেন্টেশন ধাপ',
        },
        {
          en: 'Ethernet Packet Routing Phase',
          bn: 'ইথারনেট প্যাকেট রাউটিং ধাপ',
        },
      ],
      answer: 0,
      hint: {
        en: 'The phase where the opcode is interpreted by the instruction decoder.',
        bn: 'যে ধাপে ইন্সট্রাকশন ডিকোডার দ্বারা অপকোড ব্যাখ্যা করা হয়।',
      },
      explanation: {
        en: 'During the Decode (ID) stage, the instruction decoder parses opcode bits, determines required execution paths, and reads source registers simultaneously.',
        bn: 'ডিকোড (ID) ধাপে ডিকোডার অপকোড বিশ্লেষণ করে, প্রয়োজনীয় সার্কিট পথ নির্বাচন করে এবং একসাথে সোর্স রেজিস্টারগুলো রিড করে।'
      },
    },
    {
      id: 'cpu-fde-ex-3',
      kind: 'mcq',
      question: {
        en: 'Which dedicated CPU hardware register physically holds the fetched machine instruction word while it is being parsed by the decoder?',
        bn: 'ডিকোডার কর্তৃক বিশ্লেষণের সময় কোন নিবেদিত সিপিইউ হার্ডওয়্যার রেজিস্টার ফেচ করা মেশিন নির্দেশটি ধরে রাখে?'
      },
      options: [
        {
          en: 'Instruction Register (IR)',
          bn: 'ইন্সট্রাকশন রেজিস্টার (IR)',
        },
        {
          en: 'Graphics Framebuffer',
          bn: 'গ্রাফিক্স ফ্রেমবাফার',
        },
        {
          en: 'Audio Waveform Buffer',
          bn: 'অডিও ওয়েভফর্ম বাফার',
        },
        {
          en: 'Thermal Management Register',
          bn: 'থার্মাল ম্যানেজমেন্ট রেজিস্টার',
        },
      ],
      answer: 0,
      hint: {
        en: 'The non-architectural register dedicated to holding the currently active instruction.',
        bn: 'বর্তমানে সক্রিয় নির্দেশটি ধরে রাখার জন্য নিবেদিত নন-আর্কিটেকচারাল রেজিস্টার।',
      },
      explanation: {
        en: 'The Instruction Register (IR) latches the incoming machine instruction from the Data Bus, holding it stable while the decoder interprets its bitfields.',
        bn: 'ইন্সট্রাকশন রেজিস্টার (IR) ডাটা বাস থেকে আসা মেশিন নির্দেশটি ধারণ করে রাখে যাতে ডিকোডার নির্বিঘ্নে তার বিটগুলো বিশ্লেষণ করতে পারে।'
      },
    },
    {
      id: 'cpu-fde-ex-4',
      kind: 'predict',
      question: {
        en: 'If a program executes 60 instructions and each instruction completes its fetch-decode-execute cycle in 1 clock cycle, how many total clock cycles are consumed? (60 * 1)',
        bn: 'যদি একটি প্রোগ্রাম ৬০ টি নির্দেশ চালায় এবং প্রতিটি নির্দেশ ১ ক্লক সাইকেলে সম্পন্ন হয়, তবে মোট কত ক্লক সাইকেল ব্যয় হবে? ( ৬০ * ১ )'
      },
      answer: '60',
      hint: {
        en: 'Multiply 60 instructions by 1 cycle per instruction.',
        bn: '৬০ টি নির্দেশকে প্রতি নির্দেশের ১ সাইকেল দিয়ে গুণ করুন।'
      },
      explanation: {
        en: 'With a throughput of 1 instruction per clock cycle, executing 60 sequential instructions takes exactly 60 clock cycles.',
        bn: 'প্রতি ক্লক সাইকেলে ১ টি নির্দেশ সম্পন্ন হলে ৬০ টি নির্দেশ চালাতে ঠিক ৬০ ক্লক সাইকেল সময় লাগে।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'The Instruction Execution Cycle Quiz',
      bn: 'ইন্সট্রাকশন এক্সিকিউশন সাইকেল কুইজ'
    },
    questions: [
      {
        id: 'cpu-fde-qz-1',
        kind: 'mcq',
        topic: 'instruction-fetch-mechanics',
        question: {
          en: 'What sequence of hardware operations occurs during the Instruction Fetch (IF) phase of the CPU cycle?',
          bn: 'সিপিইউ সাইকেলের ইন্সট্রাকশন ফেচ (IF) ধাপে হার্ডওয়্যারে কোন ধারাবাহিক কাজগুলো ঘটে?'
        },
        options: [
          {
            en: 'The Program Counter outputs an address onto the Address Bus, RAM sends the instruction word over the Data Bus to the IR, and the PC increments',
            bn: 'প্রোগ্রাম কাউন্টার অ্যাড্রেস বাসে ঠিকানা পাঠায়, র‍্যাম ডাটা বাসের মাধ্যমে নির্দেশটি আইআরে পাঠায় এবং পিসির মান বৃদ্ধি পায়',
          },
          {
            en: 'The ALU immediately multiplies all registers by zero and halts the machine',
            bn: 'অ্যালু তাত্ক্ষণিকভাবে সমস্ত রেজিস্টার শূন্য দিয়ে গুণ করে মেশিন বন্ধ করে দেয়',
          },
          {
            en: 'The network card transmits all RAM data over the internet to a remote server',
            bn: 'নেটওয়ার্ক কার্ড ইন্টারনেটের মাধ্যমে র‍্যামের সমস্ত ডাটা দূরবর্তী সার্ভারে পাঠিয়ে দেয়',
          },
          {
            en: 'The computer powers off until the user clicks the mouse button',
            bn: 'ব্যবহারকারী মাউসে ক্লিক না করা পর্যন্ত কম্পিউটার বিদ্যুৎ সংযোগ বন্ধ রাখে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Address driven from PC to memory, instruction returned into IR, PC advances.',
          bn: 'পিসি থেকে মেমোরিতে ঠিকানা পাঠানো, আইআরে নির্দেশ গ্রহণ এবং পিসি বৃদ্ধি পাওয়া।',
        },
        explanation: {
          en: 'Instruction Fetch reads the instruction from memory into the IR and advances the Program Counter to point to the subsequent sequential instruction.',
          bn: 'ইন্সট্রাকশন ফেচ মেমোরি থেকে নির্দেশটি আইআরে নিয়ে আসে এবং পরবর্তী নির্দেশ নির্দেশ করতে প্রোগ্রাম কাউন্টারের মান বাড়িয়ে দেয়।'
        },
      },
      {
        id: 'cpu-fde-qz-2',
        kind: 'mcq',
        topic: 'immediate-addressing-mode',
        question: {
          en: 'What characterizes an "Immediate" addressing mode instruction in microprocessor architecture?',
          bn: 'মাইক্রোপ্রসেসর আর্কিটেকচারে একটি "ইমিডিয়েট" (Immediate) অ্যাড্রেসিং মোড নির্দেশের মূল বৈশিষ্ট্য কী?'
        },
        options: [
          {
            en: 'The numerical operand value is embedded directly inside the binary instruction word itself, requiring no separate RAM lookup',
            bn: 'সংখ্যাগত অপারেন্ড মানটি সরাসরি বাইনারি নির্দেশের ভেতরেই এমবেড থাকে, ফলে আলাদা কোনো র‍্যাম রিডের প্রয়োজন হয় না',
          },
          {
            en: 'The instruction must be executed within 1 picosecond or the CPU crashes',
            bn: 'নির্দেশটি ১ পিকোসেকেন্ডের মধ্যে চালাতে হয় নয়তো সিপিইউ ক্র্যাশ করে',
          },
          {
            en: 'The data is stored permanently on an external USB flash drive',
            bn: 'ডাটাটি বাইরের একটি ইউএসবি ফ্ল্যাশ ড্রাইভে স্থায়ীভাবে জমা থাকে',
          },
          {
            en: 'The instruction can only be written in Python without compilation',
            bn: 'নির্দেশটি কম্পাইল না করে কেবল সরাসরি পাইথনে লেখা সম্ভব',
          },
        ],
        answer: 0,
        hint: {
          en: 'Constants like ADDI R1, R1, 10 carry the number 10 inside the instruction bits.',
          bn: 'ADDI R1, R1, ১০ এর মতো নির্দেশে ১০ সংখ্যাটি নির্দেশের বিটের ভেতরেই থাকে।',
        },
        explanation: {
          en: 'Immediate addressing embeds constants directly within instruction bitfields, providing instantaneous operand availability without memory access overhead.',
          bn: 'ইমিডিয়েট অ্যাড্রেসিং সংখ্যাগত ধ্রুবককে সরাসরি নির্দেশের ভেতরে যুক্ত করে, ফলে মেমোরি অ্যাক্সেস ছাড়াই তাৎক্ষণিকভাবে মান ব্যবহার করা যায়।'
        },
      },
      {
        id: 'cpu-fde-qz-3',
        kind: 'mcq',
        topic: 'cisc-to-risc-micro-ops',
        question: {
          en: 'How do modern x86_64 microprocessors execute complex CISC instructions with the high clock speeds of RISC architectures?',
          bn: 'আধুনিক x86_64 মাইক্রোপ্রসেসরগুলো কীভাবে জটিল সিআইএসসি নির্দেশকে আরআইএসসি আর্কিটেকচারের উচ্চ গতিতে সম্পাদন করে?'
        },
        options: [
          {
            en: 'Hardware instruction decoders translate incoming complex x86 instructions into streams of simple, uniform internal micro-operations (uops)',
            bn: 'হার্ডওয়্যার ইন্সট্রাকশন ডিকোডার জটিল x86 নির্দেশগুলোকে অভ্যন্তরীণ সহজ ও সুষম মাইক্রো-অপারেশনে ( uops ) রূপান্তর করে',
          },
          {
            en: 'By removing all internal transistors and using optical mirrors',
            bn: 'ভেতরের সব ট্রানজিস্টর সরিয়ে অপটিক্যাল আয়না ব্যবহারের মাধ্যমে',
          },
          {
            en: 'By forcing software developers to write machine code entirely by hand in hexadecimal',
            bn: 'সফটওয়্যার ডেভেলপারদের নিজ হাতে হেক্সাডেসিমেলে মেশিন কোড লিখতে বাধ্য করে',
          },
          {
            en: 'By running all instructions backwards from end to beginning',
            bn: 'সমস্ত নির্দেশ শেষ থেকে শুরুর দিকে উল্টোভাবে পরিচালনা করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Translating complex outer instructions into simple inner micro-operations (uops).',
          bn: 'বাইরের জটিল নির্দেশগুলোকে ভেতরে সহজ মাইক্রো-অপারেশনে ( uops ) রূপান্তর করা।',
        },
        explanation: {
          en: 'Modern x86 CPUs feature hardware decoders that decompose complex instructions into uniform micro-ops (uops), allowing a superscalar RISC core to execute them out of order.',
          bn: 'আধুনিক x86 সিপিইউতে হার্ডওয়্যার ডিকোডার থাকে যা জটিল নির্দেশকে সহজ মাইক্রো-অপে রূপান্তর করে সুপারস্কেলার আরআইএসসি কোরে অত্যন্ত দ্রুত পরিচালনা করে।'
        },
      },
      {
        id: 'cpu-fde-qz-4',
        kind: 'mcq',
        topic: 'program-counter-branching',
        question: {
          en: 'Under what operational condition does the Program Counter (PC) diverge from its default sequential incrementing behavior?',
          bn: 'কোন কার্যগত পরিস্থিতিতে প্রোগ্রাম কাউন্টার (PC) তার স্বাভাবিক ধারাবাহিক বৃদ্ধির পথ পরিবর্তন করে?'
        },
        options: [
          {
            en: 'When the CPU executes a Branch, Jump, Function Call, or encounters an Interrupt, loading a non-sequential target address into the PC',
            bn: 'যখন সিপিইউ কোনো ব্রাঞ্চ, জাম্প, ফাংশন কল চালায় বা ইন্টারাপ্টের মুখোমুখি হয়, তখন পিসিতে নতুন গন্তব্যের ঠিকানা লোড হয়',
          },
          {
            en: 'Whenever the computer monitor is adjusted for brightness',
            bn: 'যখনই কম্পিউটার মনিটরের উজ্জ্বলতা পরিবর্তন করা হয়',
          },
          {
            en: 'When the computer mouse is moved across a wooden table',
            bn: 'যখন কাঠের টেবিলের ওপর মাউস নাড়াচাড়া করা হয়',
          },
          {
            en: 'Only during a power outage when battery backup is offline',
            bn: 'কেবল বিদ্যুৎ চলে যাওয়ার পর যখন ব্যাটারি ব্যাকআপ বন্ধ থাকে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Control transfer instructions override sequential PC progression.',
          bn: 'কন্ট্রোল ট্রান্সফার নির্দেশগুলো স্বাভাবিক ধারাবাহিক পিসি বৃদ্ধিকে পরিবর্তন করে।',
        },
        explanation: {
          en: 'Branch, Jump, and Call instructions overwrite the Program Counter with target addresses, redirecting execution flow to implement loops, conditionals, and functions.',
          bn: 'ব্রাঞ্চ, জাম্প এবং কল নির্দেশগুলো প্রোগ্রাম কাউন্টারে নতুন ঠিকানা বসিয়ে লুপ, শর্ত এবং ফাংশন কার্যকর করতে কোডের প্রবাহ বদলে দেয়।'
        },
      },
    ],
  },
  next: {
    slug: 'clock-speed',
    title: {
      en: 'Clock Speed, Frequency & Thermal Throttling',
      bn: 'ক্লক স্পিড, ফ্রিকোয়েন্সি এবং থার্মাল থ্রটলিং'
    },
  },
};
