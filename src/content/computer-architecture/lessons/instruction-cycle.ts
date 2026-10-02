import type { Lesson } from '../../../lib/types';

export const InstructionCycleLesson: Lesson = {
  slug: 'instruction-cycle',
  tech: 'computer-architecture',
  title: {
    en: 'Instruction Cycle, Pipelining & Branch Hazards',
    bn: 'ইন্সট্রাকশন সাইকেল, পাইপলাইনিং এবং ব্রাঞ্চ হ্যাজার্ড'
  },
  summary: {
    en: 'Dissect the fundamental CPU instruction execution cycle across 5 discrete stages: Fetch, Decode, Execute, Memory Access, and Writeback (FDEMW). Learn how classic 5-stage RISC pipelines achieve single-cycle throughput, and master pipeline hazard resolution including data forwarding for Read-After-Write hazards and branch prediction penalties.',
    bn: 'সিপিইউর মৌলিক ইন্সট্রাকশন এক্সিকিউশন সাইকেলের ৫ টি পৃথক ধাপ বিশ্লেষণ করুন: ফেচ, ডিকোড, এক্সিকিউট, মেমোরি অ্যাক্সেস এবং রাইটব্যাক (FDEMW)। ক্লাসিক ৫-ধাপের আরআইএসসি পাইপলাইন কীভাবে প্রতি ক্লকে ১ টি নির্দেশের থ্রুপুট নিশ্চিত করে তা জানুন এবং রিড-আফটার-রাইট ডাটা ফরওয়ার্ডিং ও ব্রাঞ্চ প্রেডিকশন পেনাল্টিসহ বিভিন্ন হ্যাজার্ড সমাধানের কৌশল আয়ত্ত করুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'five-stage-risc-pipeline',
      text: {
        en: 'The Classic 5-Stage RISC Pipeline Datapath',
        bn: 'ক্লাসিক ৫-ধাপের আরআইএসসি পাইপলাইন ডাটাপাথ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In an unpipelined processor, executing machine instructions sequentially creates massive hardware underutilization. If an instruction requires 5 clock cycles to complete, 5 consecutive instructions would consume 25 full clock cycles. Microprocessor architects overcome this inefficiency using pipelining: dividing instruction processing into 5 synchronized stages separated by pipeline registers, analogous to an industrial assembly line. Once the pipeline fills, 1 completed instruction retires on every single clock cycle.',
        bn: 'নন-পাইপলাইনড প্রসেসরে একের পর এক মেশিন নির্দেশ চালানো হলে হার্ডওয়্যারের ব্যাপক অপচয় ঘটে। যদি একটি নির্দেশ সম্পন্ন করতে ৫ টি ক্লক সাইকেল প্রয়োজন হয়, তবে পর পর ৫ টি নির্দেশের জন্য মোট ২৫ টি পূর্ণ ক্লক সাইকেল ব্যয় হবে। মাইক্রোপ্রসেসর ডিজাইনাররা পাইপলাইনিং পদ্ধতির মাধ্যমে এই অপচয় দূর করেন: নির্দেশ প্রসেসিংকে ৫ টি সমন্বিত ধাপে ভাগ করা হয় যা পাইপলাইন রেজিস্টার দ্বারা পৃথক থাকে, যেমন একটি আধুনিক কারখানার অ্যাসেম্বলি লাইন। একবার পাইপলাইন পূর্ণ হয়ে গেলে প্রতি ১ টি ক্লক সাইকেলে ১ টি করে নির্দেশ সম্পন্ন হয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The canonical 5 stages of the RISC instruction cycle operate in strict sequence:',
        bn: 'আরআইএসসি ইন্সট্রাকশন সাইকেলের মৌলিক ৫ টি ধাপ ক্রমানুসারে কাজ করে:'
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '1. Instruction Fetch (IF)',
          def: {
            en: 'The Program Counter (PC) sends the target memory address to the L1 instruction cache. The 32-bit machine instruction is fetched, and the PC increments by 4 bytes to point to the subsequent sequential instruction.',
            bn: 'প্রোগ্রাম কাউন্টার (PC) নির্দেশ ক্যাশে মেমোরি অ্যাড্রেস পাঠায়। ৩২-বিট মেশিন নির্দেশটি ফেচ করা হয় এবং পরবর্তী নির্দেশ নির্দেশ করতে পিসি ৪ বাইট বৃদ্ধি পায়।'
          }
        },
        {
          term: '2. Instruction Decode & Register Read (ID)',
          def: {
            en: 'The control unit decodes the opcode bits to determine the operation type (arithmetic, memory load/store, or branch) and reads source operands from the register file simultaneously.',
            bn: 'কন্ট্রোল ইউনিট অপকোড বিট ডিকোড করে অপারেশনের ধরন (পাটিগণিত, মেমোরি লোড/স্টোর বা ব্রাঞ্চ) নির্ধারণ করে এবং একই সাথে রেজিস্টার ফাইল থেকে সোর্স অপারেন্ড রিড করে।'
          }
        },
        {
          term: '3. Execute & Address Calculation (EX)',
          def: {
            en: 'The Arithmetic Logic Unit (ALU) performs the core computation: adding numbers, evaluating comparison flags, or calculating effective RAM addresses for memory pointer operations.',
            bn: 'অ্যারিথমেটিক লজিক ইউনিট (ALU) মূল গণনা সম্পন্ন করে: সংখ্যা যোগ করা, তুলনামূলক ফ্ল্যাগ মূল্যায়ন করা বা মেমোরি অপারেশনের জন্য কার্যকর র‍্যাম অ্যাড্রেস হিসাব করা।'
          }
        },
        {
          term: '4. Memory Access (MEM)',
          def: {
            en: 'If the instruction is a LOAD or STORE, the processor accesses the L1 data cache. Pure register-to-register arithmetic operations bypass this stage without accessing RAM.',
            bn: 'নির্দেশটি যদি LOAD বা STORE হয়, তবে প্রসেসর এল১ ডাটা ক্যাশ অ্যাক্সেস করে। সাধারণ রেজিস্টার পাটিগণিত নির্দেশগুলো মেমোরি রিড বা রাইট না করে সরাসরি এই ধাপ পার হয়।'
          }
        },
        {
          term: '5. Writeback (WB)',
          def: {
            en: 'The final result from the ALU or from data cache memory is written back into the designated destination register inside the register file, making it available to future instructions.',
            bn: 'অ্যালু বা ডাটা ক্যাশ মেমোরি থেকে প্রাপ্ত চূড়ান্ত ফলাফলটি রেজিস্টার ফাইলের নির্দিষ্ট ডেস্টিনেশন রেজিস্টারে সংরক্ষণ করা হয়, যাতে ভবিষ্যৎ নির্দেশগুলো তা ব্যবহার করতে পারে।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      title: {
        en: '5-Stage Pipelining and Hazard Forwarding Path',
        bn: '৫-ধাপের পাইপলাইনিং এবং হ্যাজার্ড ফরওয়ার্ডিং পথ'
      },
      svg: `<svg viewBox="0 0 820 420" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Five stage CPU instruction pipeline grid and data forwarding path">
  <rect width="820" height="420" fill="#0f172a" rx="12"/>
  
  <text x="410" y="32" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">5-STAGE INSTRUCTION PIPELINE EXECUTION GRID</text>
  
  <!-- Clock Cycle Headers -->
  <g fill="#94a3b8" font-size="12" font-weight="bold">
    <text x="140" y="65" text-anchor="middle">Cycle 1</text>
    <text x="230" y="65" text-anchor="middle">Cycle 2</text>
    <text x="320" y="65" text-anchor="middle">Cycle 3</text>
    <text x="410" y="65" text-anchor="middle">Cycle 4</text>
    <text x="500" y="65" text-anchor="middle">Cycle 5</text>
    <text x="590" y="65" text-anchor="middle">Cycle 6</text>
    <text x="680" y="65" text-anchor="middle">Cycle 7</text>
  </g>
  
  <!-- Instruction 1 -->
  <text x="30" y="105" fill="#f8fafc" font-size="12" font-weight="bold">I1: ADD R1</text>
  <rect x="100" y="85" width="80" height="30" rx="4" fill="#0284c7"/><text x="140" y="105" fill="#fff" font-size="11" text-anchor="middle">IF</text>
  <rect x="190" y="85" width="80" height="30" rx="4" fill="#0d9488"/><text x="230" y="105" fill="#fff" font-size="11" text-anchor="middle">ID</text>
  <rect x="280" y="85" width="80" height="30" rx="4" fill="#ca8a04"/><text x="320" y="105" fill="#fff" font-size="11" text-anchor="middle">EX</text>
  <rect x="370" y="85" width="80" height="30" rx="4" fill="#7c3aed"/><text x="410" y="105" fill="#fff" font-size="11" text-anchor="middle">MEM</text>
  <rect x="460" y="85" width="80" height="30" rx="4" fill="#16a34a"/><text x="500" y="105" fill="#fff" font-size="11" text-anchor="middle">WB</text>
  
  <!-- Instruction 2 -->
  <text x="30" y="150" fill="#f8fafc" font-size="12" font-weight="bold">I2: ADD R2</text>
  <rect x="190" y="130" width="80" height="30" rx="4" fill="#0284c7"/><text x="230" y="150" fill="#fff" font-size="11" text-anchor="middle">IF</text>
  <rect x="280" y="130" width="80" height="30" rx="4" fill="#0d9488"/><text x="320" y="150" fill="#fff" font-size="11" text-anchor="middle">ID</text>
  <rect x="370" y="130" width="80" height="30" rx="4" fill="#ca8a04"/><text x="410" y="150" fill="#fff" font-size="11" text-anchor="middle">EX</text>
  <rect x="460" y="130" width="80" height="30" rx="4" fill="#7c3aed"/><text x="500" y="150" fill="#fff" font-size="11" text-anchor="middle">MEM</text>
  <rect x="550" y="130" width="80" height="30" rx="4" fill="#16a34a"/><text x="590" y="150" fill="#fff" font-size="11" text-anchor="middle">WB</text>
  
  <!-- Instruction 3 (RAW Hazard on R1 & R2) -->
  <text x="30" y="195" fill="#f8fafc" font-size="12" font-weight="bold">I3: ADD R3</text>
  <rect x="280" y="175" width="80" height="30" rx="4" fill="#0284c7"/><text x="320" y="195" fill="#fff" font-size="11" text-anchor="middle">IF</text>
  <rect x="370" y="175" width="80" height="30" rx="4" fill="#0d9488"/><text x="410" y="195" fill="#fff" font-size="11" text-anchor="middle">ID</text>
  <rect x="460" y="175" width="80" height="30" rx="4" fill="#ca8a04" stroke="#ef4444" stroke-width="2"/><text x="500" y="195" fill="#fff" font-size="11" text-anchor="middle">EX</text>
  <rect x="550" y="175" width="80" height="30" rx="4" fill="#7c3aed"/><text x="590" y="195" fill="#fff" font-size="11" text-anchor="middle">MEM</text>
  <rect x="640" y="175" width="80" height="30" rx="4" fill="#16a34a"/><text x="680" y="195" fill="#fff" font-size="11" text-anchor="middle">WB</text>
  
  <!-- Forwarding Path Arrows -->
  <path d="M 450,145 Q 480,165 470,175" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow)"/>
  <path d="M 500,115 Q 520,145 490,175" fill="none" stroke="#38bdf8" stroke-width="2"/>
  
  <!-- Hazard Description Box -->
  <rect x="40" y="240" width="740" height="150" rx="8" fill="#1e293b" stroke="#334155"/>
  <text x="60" y="270" fill="#f59e0b" font-size="13" font-weight="bold">PIPELINE HAZARD RESOLUTION:</text>
  <text x="60" y="298" fill="#cbd5e1" font-size="12">1. Data Hazard (RAW): I3 needs R1 (produced by I1) and R2 (produced by I2) before they reach WB stage.</text>
  <text x="60" y="322" fill="#38bdf8" font-size="12">2. Hardware Forwarding: EX/MEM &amp; MEM/WB stage registers route results directly to I3 ALU in Cycle 5.</text>
  <text x="60" y="346" fill="#10b981" font-size="12">3. Zero Stalls: Forwarding saves 2 stall cycles per dependent arithmetic instruction, keeping CPI at 1.</text>
  <text x="60" y="370" fill="#f87171" font-size="12">4. Control Hazard: Branch misprediction flushes 2-3 instructions fetched during branch evaluation.</text>
</svg>`,
      caption: {
        en: 'The 5-stage pipeline achieves 1 instruction per cycle throughput; data forwarding paths route ALU results directly to dependent instructions to eliminate stalls.',
        bn: '৫-ধাপের পাইপলাইন প্রতি সাইকেলে ১ টি নির্দেশের থ্রুপুট অর্জন করে; ডাটা ফরওয়ার্ডিং পথ স্টল এড়াতে নির্ভর নির্দেশে সরাসরি অ্যালু রেজাল্ট পাঠায়।'
      },
    },
    {
      type: 'heading',
      id: 'pipeline-hazards',
      text: {
        en: 'Pipeline Hazards: Structural, Data, and Control Hazards',
        bn: 'পাইপলাইন হ্যাজার্ড: স্ট্রাকচারাল, ডাটা এবং কন্ট্রোল হ্যাজার্ড'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In practical execution, real CPU instructions encounter 3 primary pipeline hazards that threaten uninterrupted single-cycle throughput:',
        bn: 'ব্যবহারিক ক্ষেত্রে বাস্তব সিপিইউ নির্দেশগুলো ৩ টি প্রধান পাইপলাইন হ্যাজার্ডের মুখোমুখি হয় যা নির্বিঘ্ন সিঙ্গেল-সাইকেল এক্সিকিউশন ব্যাহত করে:'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Structural Hazards (Hardware Resource Contention)',
            bn: '১. স্ট্রাকচারাল হ্যাজার্ড (হার্ডওয়্যার রিসোর্স দ্বন্দ্ব)'
          },
          text: {
            en: 'Occurs when two instructions require the exact same physical circuit simultaneously. For example, if Instruction Fetch (IF) and Memory Access (MEM) attempt to read a single unified RAM bus at the same time. Resolved by Harvard Architecture: splitting memory into independent L1 Instruction and L1 Data caches.',
            bn: 'যখন দুটি ভিন্ন নির্দেশ একই সময়ে একই হার্ডওয়্যার সার্কিট ব্যবহারের চেষ্টা করে তখন এটি ঘটে। যেমন, Instruction Fetch (IF) এবং Memory Access (MEM) উভয়ই একই সাইকেলে একটিমাত্র র‍্যাম বাস ব্যবহারের চেষ্টা করলে দ্বন্দ্ব তৈরি হয়। হার্ভার্ড আর্কিটেকচারের মাধ্যমে স্বাধীন L1 Instruction এবং L1 Data ক্যাশ ব্যবহারের ফলে এই সমস্যার সমাধান হয়।'
          }
        },
        {
          title: {
            en: '2. Data Hazards (Read-After-Write Dependencies)',
            bn: '২. ডাটা হ্যাজার্ড (রিড-আফটার-রাইট নির্ভরতা)'
          },
          text: {
            en: 'Occurs when an instruction requires operand data currently being computed by a previous instruction that has not yet reached the Writeback stage. Resolved via Hardware Data Forwarding (bypassing), which routes the output of the EX or MEM stage directly into the ALU input multiplexers, eliminating 2 costly stall cycles.',
            bn: 'যখন একটি পরবর্তী নির্দেশ এমন অপারেন্ড ডাটা দাবি করে যা পূর্ববর্তী নির্দেশ দ্বারা প্রস্তুত হচ্ছে কিন্তু এখনো রাইটব্যাক ধাপে পৌঁছায়নি। হার্ডওয়্যার ডাটা ফরওয়ার্ডিং (বাইপাসিং) এর মাধ্যমে EX বা MEM ধাপের ফলাফল সরাসরি অ্যালু ইনপুট মাল্টিপ্লেক্সারে পাঠিয়ে এই সমস্যা সমাধান করা হয়, যা ২ সাইকেলের বিলম্ব দূর করে।'
          }
        },
        {
          title: {
            en: '3. Control Hazards (Branching & Pipeline Flushes)',
            bn: '৩. কন্ট্রোল হ্যাজার্ড (ব্রাঞ্চিং এবং পাইপলাইন ফ্লাশ)'
          },
          text: {
            en: 'Triggered by conditional branch instructions (such as BEQ or BNE). The processor fetches subsequent instructions along the sequential path before knowing whether the branch condition will evaluate true or false in the EX stage. If the branch is taken, instructions already in IF and ID must be discarded (pipeline flush), wasting 2 to 3 clock cycles.',
            bn: 'কন্ডিশনাল ব্রাঞ্চ নির্দেশ ( যেমন BEQ বা BNE ) দ্বারা এটি ঘটে। EX ধাপে ব্রাঞ্চ শর্ত সত্য না মিথ্যা তা জানার আগেই প্রসেসর পরবর্তী স্বাভাবিক নির্দেশগুলো ফেচ করে ফেলে। ব্রাঞ্চ গৃহীত হলে ইতিমধ্যে IF ও ID ধাপে থাকা ভুল নির্দেশগুলো বাতিল ( পাইপলাইন ফ্লাশ ) করতে হয়, ফলে ২ থেকে ৩ ক্লক সাইকেল অপচয় হয়।'
          }
        }
      ]
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'pipelined-cpu-sim.js',
      code: `// Cycle-Accurate 5-Stage RISC Pipeline Simulator with Data Forwarding
class PipelinedCpu {
  constructor() {
    this.regs = new Int32Array(8); // R0 through R7
    this.pc = 0;
    this.cycles = 0;
    this.completed = 0;
    
    // Inter-stage pipeline latches
    this.IF_ID = null;
    this.ID_EX = null;
    this.EX_MEM = null;
    this.MEM_WB = null;
  }

  step(program) {
    this.cycles++;
    console.log(\`=== Clock Cycle \${this.cycles} ===\`);

    // Stage 5: Writeback (WB)
    if (this.MEM_WB) {
      if (this.MEM_WB.destReg > 0) {
        this.regs[this.MEM_WB.destReg] = this.MEM_WB.result;
        console.log(\`  [WB] Committed R\${this.MEM_WB.destReg} = \${this.MEM_WB.result}\`);
      }
      this.completed++;
    }

    // Stage 4: Memory Access (MEM)
    const next_MEM_WB = this.EX_MEM
      ? { destReg: this.EX_MEM.destReg, result: this.EX_MEM.aluResult }
      : null;

    // Stage 3: Execute (EX) with Hazard Forwarding
    let next_EX_MEM = null;
    if (this.ID_EX) {
      let valA = this.ID_EX.valA;
      let valB = this.ID_EX.valB;

      // EX-to-EX Data Forwarding (Distance 1 hazard)
      if (this.EX_MEM && this.EX_MEM.destReg > 0) {
        if (this.EX_MEM.destReg === this.ID_EX.srcA) {
          valA = this.EX_MEM.aluResult;
          console.log(\`  [FORWARD] Forwarded R\${this.ID_EX.srcA} (\${valA}) from EX/MEM to ALU In A\`);
        }
        if (this.EX_MEM.destReg === this.ID_EX.srcB) {
          valB = this.EX_MEM.aluResult;
          console.log(\`  [FORWARD] Forwarded R\${this.ID_EX.srcB} (\${valB}) from EX/MEM to ALU In B\`);
        }
      }

      // MEM-to-EX Data Forwarding (Distance 2 hazard)
      if (this.MEM_WB && this.MEM_WB.destReg > 0) {
        if (this.MEM_WB.destReg === this.ID_EX.srcA && !(this.EX_MEM && this.EX_MEM.destReg === this.ID_EX.srcA)) {
          valA = this.MEM_WB.result;
          console.log(\`  [FORWARD] Forwarded R\${this.ID_EX.srcA} (\${valA}) from MEM/WB to ALU In A\`);
        }
        if (this.MEM_WB.destReg === this.ID_EX.srcB && !(this.EX_MEM && this.EX_MEM.destReg === this.ID_EX.srcB)) {
          valB = this.MEM_WB.result;
          console.log(\`  [FORWARD] Forwarded R\${this.ID_EX.srcB} (\${valB}) from MEM/WB to ALU In B\`);
        }
      }

      const res = valA + valB;
      next_EX_MEM = { destReg: this.ID_EX.destReg, aluResult: res };
      console.log(\`  [EX] Computed R\${this.ID_EX.destReg} = \${valA} + \${valB} = \${res}\`);
    }

    // Stage 2: Instruction Decode (ID)
    let next_ID_EX = null;
    if (this.IF_ID) {
      const instr = this.IF_ID;
      next_ID_EX = {
        destReg: instr.dest,
        srcA: instr.srcA,
        srcB: instr.srcB,
        valA: instr.srcA ? this.regs[instr.srcA] : (instr.immA ?? 0),
        valB: instr.srcB ? this.regs[instr.srcB] : (instr.immB ?? 0),
      };
      console.log(\`  [ID] Decoded instruction target R\${instr.dest}\`);
    }

    // Stage 1: Instruction Fetch (IF)
    let next_IF_ID = null;
    if (this.pc < program.length) {
      next_IF_ID = program[this.pc];
      console.log(\`  [IF] Fetched instruction index \${this.pc}\`);
      this.pc++;
    }

    // Advance pipeline registers to next cycle
    this.MEM_WB = next_MEM_WB;
    this.EX_MEM = next_EX_MEM;
    this.ID_EX = next_ID_EX;
    this.IF_ID = next_IF_ID;
  }
}

// Program with Read-After-Write (RAW) data hazard:
// I1: R1 = 10 + 0
// I2: R2 = 20 + 0
// I3: R3 = R1 + R2  <-- Requires R1 and R2 before WB stage!
const program = [
  { dest: 1, srcA: 0, immA: 10, srcB: 0, immB: 0 },
  { dest: 2, srcA: 0, immA: 20, srcB: 0, immB: 0 },
  { dest: 3, srcA: 1, srcB: 2 },
];

const cpu = new PipelinedCpu();
while (cpu.completed < program.length) {
  cpu.step(program);
}

console.log('Execution Finished:');
console.log('Total Clock Cycles =', cpu.cycles);
console.log('Registers: R1 =', cpu.regs[1], ', R2 =', cpu.regs[2], ', R3 =', cpu.regs[3]);`,
      caption: {
        en: 'Cycle-accurate 5-stage pipeline simulation resolving RAW data hazards via hardware forwarding.',
        bn: 'হার্ডওয়্যার ফরওয়ার্ডিংয়ের মাধ্যমে RAW ডাটা হ্যাজার্ড সমাধানকারী ৫-ধাপের সাইকেল-অ্যাকুরেট সিমুলেশন।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Dynamic Branch Prediction & Pipeline Flushes',
        bn: 'ডায়নামিক ব্রাঞ্চ প্রেডিকশন এবং পাইপলাইন ফ্লাশ'
      },
      text: {
        en: 'In deep pipeline processors (such as Intel Core or AMD Zen with 14 to 19 stages), branch mispredictions are extremely costly: flushing the pipeline throws away 15 to 20 clock cycles of work. Modern processors employ dynamic branch predictors (like TAGE predictors with multi-kilobyte history tables) achieving over 97 percent branch accuracy, keeping the execution pipeline fully saturated.',
        bn: 'গভীর পাইপলাইনযুক্ত আধুনিক প্রসেসরে ( যেমন ১৪ থেকে ১৯ ধাপের Intel Core বা AMD Zen ) ভুল ব্রাঞ্চ প্রেডিকশন অত্যন্ত ক্ষতিকর: পাইপলাইন ফ্লাশ করলে ১৫ থেকে ২০ ক্লক সাইকেলের সম্পন্ন কাজ বাতিল করতে হয়। আধুনিক প্রসেসর ডায়নামিক ব্রাঞ্চ প্রেডিক্টর ( যেমন মাল্টি-কিলোবাইট হিস্ট্রি টেবিলযুক্ত TAGE প্রেডিক্টর ) ব্যবহার করে যা ৯৭ শতাংশের বেশি নির্ভুলভাবে ব্রাঞ্চের গতিপথ নির্ণয় করতে পারে এবং পাইপলাইনকে পূর্ণ রাখে।'
      },
    },
  ],
  exercises: [
    {
      id: 'ca-pipe-ex-1',
      kind: 'predict',
      question: {
        en: 'In an unpipelined CPU where each instruction takes 5 clock cycles, how many total clock cycles are needed to execute 5 sequential instructions? (5 * 5)',
        bn: 'একটি নন-পাইপলাইনড সিপিইউতে প্রতি নির্দেশ ৫ ক্লক সাইকেল সময় নিলে ৫ টি ক্রমিক নির্দেশ সম্পন্ন করতে মোট কত ক্লক সাইকেল লাগবে? ( ৫ * ৫ )'
      },
      answer: '25',
      hint: {
        en: 'Multiply the instruction count (5) by the cycles per instruction (5).',
        bn: 'নির্দেশের সংখ্যা ( ৫ ) কে প্রতি নির্দেশের সাইকেল ( ৫ ) দিয়ে গুণ করুন।'
      },
      explanation: {
        en: 'Without pipelining, instructions run sequentially: 5 instructions multiplied by 5 cycles each equals 25 total clock cycles.',
        bn: 'পাইপলাইনিং ছাড়া নির্দেশগুলো ধারাবাহিকভাবে চলে: ৫ টি নির্দেশ প্রতিটিতে ৫ সাইকেল করে মোট ২৫ ক্লক সাইকেল সময় নেয়।'
      },
    },
    {
      id: 'ca-pipe-ex-2',
      kind: 'mcq',
      question: {
        en: 'Which hardware optimization allows dependent instructions to receive computation results directly without waiting 2 cycles for register writeback?',
        bn: 'কোন হার্ডওয়্যার অপ্টিমাইজেশন নির্ভর নির্দেশগুলোকে রেজিস্টার রাইটব্যাকের জন্য ২ সাইকেল অপেক্ষা না করেই সরাসরি ফলাফল ব্যবহারের সুযোগ দেয়?'
      },
      options: [
        {
          en: 'Data Forwarding (Bypassing) from EX or MEM stage registers',
          bn: 'EX বা MEM ধাপের রেজিস্টার থেকে সরাসরি ডাটা ফরওয়ার্ডিং (Data Forwarding / Bypassing)',
        },
        {
          en: 'Dynamic Frequency Scaling of the CPU clock oscillator',
          bn: 'সিপিইউ ক্লক অসিলেটরের ডায়নামিক ফ্রিকোয়েন্সি স্কেলিং',
        },
        {
          en: 'Switching from Two Complement to IEEE 754 floating point',
          bn: 'টুস কমপ্লিমেন্ট থেকে IEEE 754 ফ্লোটিং পয়েন্টে রূপান্তর',
        },
        {
          en: 'Flushing the Program Counter directly into main RAM',
          bn: 'প্রোগ্রাম কাউন্টার সরাসরি মূল র‍্যাম মেমোরিতে ফ্লাশ করা',
        },
      ],
      answer: 0,
      hint: {
        en: 'Routing computed results directly from intermediate pipeline registers to subsequent ALU inputs.',
        bn: 'মধ্যবর্তী পাইপলাইন রেজিস্টার থেকে সরাসরি পরবর্তী অ্যালু ইনপুটে ফলাফল পাঠানোর ব্যবস্থা।',
      },
      explanation: {
        en: 'Data forwarding (bypassing) routes the ALU output from EX/MEM or MEM/WB pipeline registers straight to the ALU inputs for the next cycle, eliminating stalls.',
        bn: 'ডাটা ফরওয়ার্ডিং EX/MEM বা MEM/WB পাইপলাইন রেজিস্টার থেকে অ্যালুর আউটপুট সরাসরি পরবর্তী সাইকেলের অ্যালু ইনপুটে পাঠায়, যা পাইপলাইন স্টল দূর করে।'
      },
    },
    {
      id: 'ca-pipe-ex-3',
      kind: 'mcq',
      question: {
        en: 'Why do modern microprocessors adopt the Harvard Architecture with separate L1 instruction and data caches?',
        bn: 'আধুনিক মাইক্রোপ্রসেসরগুলো কেন পৃথক L1 ইন্সট্রাকশন এবং ডাটা ক্যাশসহ হার্ভার্ড আর্কিটেকচার ব্যবহার করে?'
      },
      options: [
        {
          en: 'To eliminate Structural Hazards where instruction fetch (IF) and memory access (MEM) attempt to access RAM simultaneously',
          bn: 'স্ট্রাকচারাল হ্যাজার্ড দূর করতে যেখানে ইন্সট্রাকশন ফেচ (IF) এবং মেমোরি অ্যাক্সেস (MEM) একই সাথে র‍্যাম ব্যবহারের চেষ্টা করে',
        },
        {
          en: 'To double the maximum clock frequency beyond 100 GHz',
          bn: 'সর্বোচ্চ ক্লক ফ্রিকোয়েন্সি ১০০ গিগাহার্টজের ওপরে দ্বিগুণ করতে',
        },
        {
          en: 'To prevent Little-Endian integers from corrupting Big-Endian strings',
          bn: 'লিটল-এন্ডিয়ান ইন্টিজার যাতে বিগ-এন্ডিয়ান স্ট্রিংকে নষ্ট না করে তা নিশ্চিত করতে',
        },
        {
          en: 'Because ALU logic gates can only calculate odd numbers',
          bn: 'কারণ অ্যালুর লজিক গেট শুধুমাত্র বিজোড় সংখ্যা গণনা করতে পারে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Avoid collision when stage 1 reads an instruction while stage 4 reads data in the same cycle.',
        bn: 'একই সাইকেলে ১ম ধাপ নির্দেশ এবং ৪র্থ ধাপ ডাটা রিড করার সময় যাতে দ্বন্দ্ব না ঘটে।',
      },
      explanation: {
        en: 'Separate L1 instruction and data caches allow simultaneous fetching of the next instruction (IF stage) and reading/writing of data memory (MEM stage) in the same clock cycle without structural collision.',
        bn: 'পৃথক L1 ইন্সট্রাকশন এবং ডাটা ক্যাশ একই ক্লক সাইকেলে পরবর্তী নির্দেশ ফেচ (IF) এবং ডাটা মেমোরি অ্যাক্সেস (MEM) করার সুবিধা দেয় কোনো রিসোর্স সংঘর্ষ ছাড়াই।'
      },
    },
    {
      id: 'ca-pipe-ex-4',
      kind: 'predict',
      question: {
        en: 'In an ideal steady-state pipelined CPU with no hazard stalls, how many completed instructions retire per clock cycle? Type a single digit.',
        bn: 'কোনো হ্যাজার্ড স্টল না থাকলে একটি আদর্শ স্টেডি-স্টেট পাইপলাইনড সিপিইউতে প্রতি ক্লক সাইকেলে কয়টি নির্দেশ সম্পন্ন হয়? একটি একক সংখ্যা টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Once filled, a 5-stage pipeline completes one instruction every cycle (CPI = 1).',
        bn: 'একবার পূর্ণ হলে ৫-ধাপের পাইপলাইন প্রতি সাইকেলে ১ টি নির্দেশ সম্পন্ন করে ( CPI = ১ )।',
      },
      explanation: {
        en: 'In ideal steady state, 1 new instruction enters the pipeline and 1 finished instruction retires on every single clock cycle, achieving an effective Cycles Per Instruction (CPI) of 1.',
        bn: 'আদর্শ স্টেডি-স্টেটে প্রতি ক্লক সাইকেলে ১ টি নতুন নির্দেশ পাইপলাইনে প্রবেশ করে এবং ১ টি নির্দেশ সম্পন্ন হয়ে বের হয়, ফলে সাইকেল পার ইন্সট্রাকশন (CPI) হয় ১।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Instruction Cycle & CPU Pipelining Architecture Quiz',
      bn: 'ইন্সট্রাকশন সাইকেল এবং সিপিইউ পাইপলাইনিং আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'ca-pipe-qz-1',
        kind: 'mcq',
        topic: 'classic-risc-five-stages',
        question: {
          en: 'What are the 5 sequential stages of the classic RISC instruction datapath in exact chronological order?',
          bn: 'ক্লাসিক আরআইএসসি নির্দেশ ডাটাপাথের ৫ টি ক্রমিক ধাপের সঠিক সময়ক্রম কোনটি?'
        },
        options: [
          {
            en: 'Fetch (IF), Decode (ID), Execute (EX), Memory Access (MEM), Writeback (WB)',
            bn: 'ফেচ (IF), ডিকোড (ID), এক্সিকিউট (EX), মেমোরি অ্যাক্সেস (MEM), রাইটব্যাক (WB)',
          },
          {
            en: 'Decode (ID), Fetch (IF), Writeback (WB), Memory Access (MEM), Execute (EX)',
            bn: 'ডিকোড (ID), ফেচ (IF), রাইটব্যাক (WB), মেমোরি অ্যাক্সেস (MEM), এক্সিকিউট (EX)',
          },
          {
            en: 'Fetch (IF), Memory Access (MEM), Execute (EX), Writeback (WB), Decode (ID)',
            bn: 'ফেচ (IF), মেমোরি অ্যাক্সেস (MEM), এক্সিকিউট (EX), রাইটব্যাক (WB), ডিকোড (ID)',
          },
          {
            en: 'Execute (EX), Fetch (IF), Decode (ID), Writeback (WB), Memory Access (MEM)',
            bn: 'এক্সিকিউট (EX), ফেচ (IF), ডিকোড (ID), রাইটব্যাক (WB), মেমোরি অ্যাক্সেস (MEM)',
          },
        ],
        answer: 0,
        hint: {
          en: 'Begins with fetching the instruction and concludes with committing results back to registers.',
          bn: 'নির্দেশ ফেচ করার মাধ্যমে শুরু হয় এবং রেজিস্টারে ফলাফল রাইটব্যাকের মাধ্যমে শেষ হয়।',
        },
        explanation: {
          en: 'The classic 5-stage RISC pipeline sequentially processes each instruction through Fetch (IF), Decode (ID), Execute (EX), Memory Access (MEM), and Writeback (WB).',
          bn: 'ক্লাসিক ৫-ধাপের আরআইএসসি পাইপলাইন পর্যায়ক্রমে ফেচ (IF), ডিকোড (ID), এক্সিকিউট (EX), মেমোরি অ্যাক্সেস (MEM) এবং রাইটব্যাক (WB) এর মধ্য দিয়ে প্রতিটি নির্দেশ প্রক্রিয়া করে।'
        },
      },
      {
        id: 'ca-pipe-qz-2',
        kind: 'mcq',
        topic: 'forwarding-bypassing-raw',
        question: {
          en: 'How does hardware Data Forwarding (Bypassing) prevent processor stalls during Read-After-Write (RAW) data hazards?',
          bn: 'হার্ডওয়্যার ডাটা ফরওয়ার্ডিং (বাইপাসিং) কীভাবে রিড-আফটার-রাইট (RAW) ডাটা হ্যাজার্ডের সময় প্রসেসরের স্থবিরতা প্রতিরোধ করে?'
        },
        options: [
          {
            en: 'It routes computed results directly from pipeline latch registers (EX/MEM or MEM/WB) back to the ALU input multiplexers before the result is written to the register file',
            bn: 'ফলাফলটি রেজিস্টার ফাইলে সংরক্ষণ হওয়ার আগেই পাইপলাইন ল্যাচ (EX/MEM বা MEM/WB) থেকে সরাসরি অ্যালু ইনপুট মাল্টিপ্লেক্সারে পাঠিয়ে দেয়',
          },
          {
            en: 'It halts the CPU clock oscillator until the target data is manually refreshed by the operating system kernel',
            bn: 'অপারেটিং সিস্টেম কার্নেল কর্তৃক ডাটা রিফ্রেশ না হওয়া পর্যন্ত এটি সিপিইউ ক্লক অসিলেটর বন্ধ রাখে',
          },
          {
            en: 'It swaps the order of instructions randomly inside the L2 cache controller',
            bn: 'এটি এল২ ক্যাশ কন্ট্রোলারের ভেতরে নির্দেশের ক্রম এলোমেলোভাবে অদলবদল করে দেয়',
          },
          {
            en: 'It disables all integer calculations and reroutes math to the network card',
            bn: 'এটি সমস্ত ইন্টিজার গণনা বন্ধ করে নেটওয়ার্ক কার্ডে পাঠিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Internal bypass wires route results straight from stage registers into ALU inputs.',
          bn: 'অভ্যন্তরীণ বাইপাস সংযোগের মাধ্যমে মধ্যবর্তী রেজিস্টার থেকে সরাসরি অ্যালু ইনপুটে ফলাফল পৌঁছানো হয়।',
        },
        explanation: {
          en: 'Forwarding circuits intercept newly computed ALU or memory results inside intermediate pipeline registers and route them directly to dependent execution stages, bypassing register writeback latency.',
          bn: 'ফরওয়ার্ডিং সার্কিট মধ্যবর্তী পাইপলাইন রেজিস্টার থেকে সদ্য গণনাকৃত ফলাফল সংগ্রহ করে সরাসরি নির্ভরশীল এক্সিকিউশন ধাপে পাঠায়, যার ফলে রেজিস্টার রাইটব্যাকের বিলম্ব ঘটে না।'
        },
      },
      {
        id: 'ca-pipe-qz-3',
        kind: 'mcq',
        topic: 'branch-misprediction-flush',
        question: {
          en: 'What occurs inside a pipelined microprocessor when a conditional branch prediction is incorrect (branch misprediction)?',
          bn: 'পাইপলাইনযুক্ত মাইক্রোপ্রসেসরে যখন একটি কন্ডিশনাল ব্রাঞ্চের অনুমান ভুল হয় (ব্রাঞ্চ মিসপ্রেডিকশন) তখন কী ঘটে?'
        },
        options: [
          {
            en: 'Pipeline Flush: speculatively fetched instructions in earlier stages are discarded, wasting clock cycles',
            bn: 'পাইপলাইন ফ্লাশ: পূর্ববর্তী ধাপে আগাম ফেচ করা সমস্ত ভুল নির্দেশ বাতিল করা হয়, যার ফলে ক্লক সাইকেল অপচয় হয়',
          },
          {
            en: 'The CPU permanently locks up and must be powered down',
            bn: 'সিপিইউ স্থায়ীভাবে অচল হয়ে যায় এবং পাওয়ার বন্ধ করতে হয়',
          },
          {
            en: 'The ALU inverts all memory addresses in the system RAM',
            bn: 'অ্যালু সিস্টেম র‍্যামের সমস্ত মেমোরি অ্যাড্রেস উল্টে দেয়',
          },
          {
            en: 'The processor reboots into 16-bit real mode firmware',
            bn: 'প্রসেসর রিবুট হয়ে ১৬-বিট রিয়েল মোড ফার্মওয়্যারে প্রবেশ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Instructions fetched along the wrong speculative path must be cleared out.',
          bn: 'ভুল অনুমানের পথে সংগৃহীত নির্দেশগুলোকে পাইপলাইন থেকে মুছে ফেলতে হয়।',
        },
        explanation: {
          en: 'Branch mispredictions require flushing the pipeline: instructions fetched down the wrong execution path must be converted into NOPs (bubbles), paying a multi-cycle penalty.',
          bn: 'ব্রাঞ্চ মিসপ্রেডিকশনে পাইপলাইন ফ্লাশ করতে হয়: ভুল পথে ফেচ করা নির্দেশগুলো বাতিল করে ফাঁকা নির্দেশে ( NOP বা বাবল ) রূপান্তর করা হয়, যা বহু সাইকেলের অপচয় ঘটায়।'
        },
      },
      {
        id: 'ca-pipe-qz-4',
        kind: 'mcq',
        topic: 'structural-hazard-definition',
        question: {
          en: 'What characterizes a Structural Hazard in a microprocessor pipeline?',
          bn: 'মাইক্রোপ্রসেসর পাইপলাইনে একটি স্ট্রাকচারাল হ্যাজার্ডের মূল কারণ কী?'
        },
        options: [
          {
            en: 'Two or more simultaneous instructions require access to the exact same physical hardware component during the same cycle',
            bn: 'একই ক্লক সাইকেলে দুই বা ততোধিক নির্দেশ একসাথে একটি নির্দিষ্ট হার্ডওয়্যার কম্পোনেন্ট ব্যবহারের চেষ্টা করে',
          },
          {
            en: 'The CPU runs out of silicon thermal paste during high calculation workloads',
            bn: 'ভারী গণনার সময় সিপিইউর সিলিকন থার্মাল পেস্ট নিঃশেষ হয়ে যায়',
          },
          {
            en: 'A variable name in high-level code exceeds 255 characters',
            bn: 'উচ্চস্তরের কোডে কোনো ভেরিয়েবলের নাম ২৫৫ অক্ষরের বেশি হয়',
          },
          {
            en: 'An arithmetic calculation overflows the 64-bit boundary',
            bn: 'একটি পাটিগণিত গণনা ৬৪-বিট সীমা অতিক্রম করে ওভারফ্লো সৃষ্টি করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Hardware resource contention when the physical machinery cannot serve two requests simultaneously.',
          bn: 'হার্ডওয়্যার সম্পদের অভাব যখন বাস্তব সার্কিট একসাথে দুটি অনুরোধ পূরণ করতে পারে না।',
        },
        explanation: {
          en: 'Structural hazards stem from hardware resource conflicts, such as having only one memory port when both instruction fetch and data read stages require memory simultaneously.',
          bn: 'হার্ডওয়্যার রিসোর্স বিরোধ থেকে স্ট্রাকচারাল হ্যাজার্ড তৈরি হয়, যেমন মেমোরির একটিমাত্র পোর্ট থাকা অবস্থায় ফেচ এবং ডাটা রিড উভয় ধাপের একসাথে মেমোরি প্রয়োজন হওয়া।'
        },
      },
    ],
  },
  next: {
    slug: 'cache-hierarchy',
    title: {
      en: 'Cache Hierarchy, Locality & Memory Latency',
      bn: 'ক্যাশ হায়ারার্কি, লোকালিটি এবং মেমোরি ল্যাটেন্সি'
    },
  },
};
