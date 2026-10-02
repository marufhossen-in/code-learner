import type { Lesson } from '../../../lib/types';

export const PipeliningLesson: Lesson = {
  slug: 'pipelining',
  tech: 'cpu',
  title: {
    en: 'Instruction Pipelining & Superscalar Execution',
    bn: 'ইন্সট্রাকশন পাইপলাইনিং এবং সুপারস্কেলার এক্সিকিউশন'
  },
  summary: {
    en: 'Discover how microprocessors achieve high throughput via instruction pipelining and superscalar execution. Learn how multi-stage assembly lines allow overlapping instruction execution. Explore the 3 classes of pipeline hazards (Structural, Data, and Control hazards), and understand how modern superscalar processors dispatch multiple independent instructions per clock cycle to push IPC above 1.0.',
    bn: 'ইন্সট্রাকশন পাইপলাইনিং এবং সুপারস্কেলার এক্সিকিউশনের মাধ্যমে মাইক্রোপ্রসেসর কীভাবে উচ্চ থ্রুপুট অর্জন করে তা আবিষ্কার করুন। বহুস্তরী অ্যাসেম্বলি লাইন কীভাবে একাধিক নির্দেশ একসাথে চালানোর সুযোগ দেয় তা জানুন। ৩ ধরনের পাইপলাইন হ্যাজার্ড ( স্ট্রাকচারাল, ডাটা এবং কন্ট্রোল ) বুঝুন এবং আধুনিক সুপারস্কেলার প্রসেসর কীভাবে প্রতি ক্লক সাইকেলে একাধিক স্বাধীন নির্দেশ পরিচালনা করে IPC ১.০ এর ওপরে উন্নীত করে তা অনুসন্ধান করুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'pipeline-assembly-line',
      text: {
        en: 'The Assembly Line Concept: From Sequential to Pipelined Datapaths',
        bn: 'অ্যাসেম্বলি লাইন ধারণা: সিকোয়েনশিয়াল থেকে পাইপলাইনড ডাটাপাথ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In an unpipelined processor datapath, an instruction must completely traverse all 5 stages of execution (Fetch, Decode, Execute, Memory Access, and Writeback) before the next instruction can begin. Because only 1 stage is active at any given moment, 80 percent of the CPU circuitry sits completely idle. An unpipelined architecture executing 10 instructions requiring 5 clock cycles each would take 50 full clock cycles (an average CPI—Cycles Per Instruction—of 5.0).',
        bn: 'নন-পাইপলাইনড প্রসেসর ডাটাপাথে একটি নির্দেশকে পরবর্তী নির্দেশ শুরু হওয়ার আগে এক্সিকিউশনের পুরো ৫ টি ধাপ ( ফেচ, ডিকোড, এক্সিকিউট, মেমোরি অ্যাক্সেস এবং রাইটব্যাক ) সম্পূর্ণ পার করতে হয়। যেকোনো মুহূর্তে কেবল ১ টি ধাপ সক্রিয় থাকার কারণে সিপিইউর ৮০ শতাংশ সার্কিট সম্পূর্ণ অলস বসে থাকে। প্রতিটিতে ৫ ক্লক সাইকেল সময় লাগা এমন ১০ টি নির্দেশ চালাতে একটি নন-পাইপলাইনড আর্কিটেকচারে মোট ৫০ টি পূর্ণ ক্লক সাইকেল ব্যয় হয় ( গড় CPI—সাইকেলস পার ইন্সট্রাকশন—হয় ৫.০ )।',
      },
    },
    {
      type: 'para',
      text: {
        en: 'Pipelining solves this waste by organizing the datapath like an industrial automotive assembly line. While Task 1 is in the Writeback stage, Task 2 is in Memory Access, Task 3 is in Execute, Task 4 is in Decode, and Task 5 is entering Fetch. Once the 5-stage pipeline fills, 1 completed operation retires on every single clock cycle, achieving an ideal throughput of 1 instruction per cycle (CPI = 1.0).',
        bn: 'শিল্প কারখানার স্বয়ংক্রিয় অ্যাসেম্বলি লাইনের মতো ডাটাপাথ সাজিয়ে পাইপলাইনিং এই অপচয় দূর করে। যখন ১ম কাজটি রাইটব্যাক ধাপে থাকে, তখন ২য় কাজ মেমোরি অ্যাক্সেসে, ৩য় কাজ এক্সিকিউটে, ৪র্থ কাজ ডিকোডে এবং ৫ম কাজ ফেচ ধাপে প্রবেশ করে। একবার ৫-ধাপের পাইপলাইন পূর্ণ হয়ে গেলে প্রতি ১ টি ক্লক সাইকেলে ১ টি করে অপারেশন সম্পন্ন হয়ে বের হয়, ফলে প্রতি সাইকেলে ১ টি নির্দেশের আদর্শ থ্রুপুট অর্জিত হয় ( CPI = ১.০ )।',
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'Scalar Pipelining versus 4-Way Superscalar Execution Dispatch',
        bn: 'স্কেলার পাইপলাইনিং বনাম ৪-ওয়ে সুপারস্কেলার এক্সিকিউশন ডিসপ্যাচ'
      },
      svg: `<svg viewBox="0 0 820 400" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Timeline comparing scalar pipeline and 4-wide superscalar instruction dispatch">
  <rect width="820" height="400" fill="#0f172a" rx="12"/>
  
  <text x="410" y="32" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">SCALAR PIPELINING VS MULTI-ISSUE SUPERSCALAR EXECUTION</text>
  
  <!-- Section 1: Scalar Pipeline (1 instruction per cycle) -->
  <g transform="translate(40, 60)">
    <rect width="740" height="135" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <text x="20" y="25" fill="#38bdf8" font-size="12" font-weight="bold">1. SCALAR PIPELINE (1 Instruction Dispatched Per Cycle — Peak IPC = 1.0)</text>
    
    <!-- Timeline Cycles -->
    <text x="140" y="50" fill="#94a3b8" font-size="11" text-anchor="middle">Cycle 1</text>
    <text x="220" y="50" fill="#94a3b8" font-size="11" text-anchor="middle">Cycle 2</text>
    <text x="300" y="50" fill="#94a3b8" font-size="11" text-anchor="middle">Cycle 3</text>
    <text x="380" y="50" fill="#94a3b8" font-size="11" text-anchor="middle">Cycle 4</text>
    <text x="460" y="50" fill="#94a3b8" font-size="11" text-anchor="middle">Cycle 5</text>
    
    <!-- Row 1 -->
    <text x="20" y="80" fill="#f8fafc" font-size="11">Instr 1:</text>
    <rect x="105" y="65" width="70" height="22" rx="3" fill="#0284c7"/><text x="140" y="80" fill="#fff" font-size="10" text-anchor="middle">IF</text>
    <rect x="185" y="65" width="70" height="22" rx="3" fill="#0d9488"/><text x="220" y="80" fill="#fff" font-size="10" text-anchor="middle">ID</text>
    <rect x="265" y="65" width="70" height="22" rx="3" fill="#ca8a04"/><text x="300" y="80" fill="#fff" font-size="10" text-anchor="middle">EX</text>
    <rect x="345" y="65" width="70" height="22" rx="3" fill="#7c3aed"/><text x="380" y="80" fill="#fff" font-size="10" text-anchor="middle">MEM</text>
    <rect x="425" y="65" width="70" height="22" rx="3" fill="#16a34a"/><text x="460" y="80" fill="#fff" font-size="10" text-anchor="middle">WB</text>
    
    <!-- Row 2 -->
    <text x="20" y="110" fill="#f8fafc" font-size="11">Instr 2:</text>
    <rect x="185" y="95" width="70" height="22" rx="3" fill="#0284c7"/><text x="220" y="110" fill="#fff" font-size="10" text-anchor="middle">IF</text>
    <rect x="265" y="95" width="70" height="22" rx="3" fill="#0d9488"/><text x="300" y="110" fill="#fff" font-size="10" text-anchor="middle">ID</text>
    <rect x="345" y="95" width="70" height="22" rx="3" fill="#ca8a04"/><text x="380" y="110" fill="#fff" font-size="10" text-anchor="middle">EX</text>
    <rect x="425" y="95" width="70" height="22" rx="3" fill="#7c3aed"/><text x="460" y="110" fill="#fff" font-size="10" text-anchor="middle">MEM</text>
    <rect x="505" y="95" width="70" height="22" rx="3" fill="#16a34a"/><text x="540" y="110" fill="#fff" font-size="10" text-anchor="middle">WB</text>
  </g>
  
  <!-- Section 2: 4-Way Superscalar (4 instructions dispatched in parallel) -->
  <g transform="translate(40, 215)">
    <rect width="740" height="160" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="20" y="25" fill="#10b981" font-size="12" font-weight="bold">2. 4-WAY SUPERSCALAR (4 Parallel Execution Ports — Peak IPC = 4.0)</text>
    
    <!-- Parallel Dispatch Blocks in Cycle 1 -->
    <rect x="20" y="45" width="165" height="95" rx="6" fill="#0f172a" stroke="#0284c7"/>
    <text x="102" y="65" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">CYCLE 1 DISPATCH</text>
    <text x="102" y="85" fill="#cbd5e1" font-size="9" text-anchor="middle">• Port 0: ALU (ADD R1)</text>
    <text x="102" y="100" fill="#cbd5e1" font-size="9" text-anchor="middle">• Port 1: ALU (ADD R2)</text>
    <text x="102" y="115" fill="#cbd5e1" font-size="9" text-anchor="middle">• Port 2: Load (LD R3)</text>
    <text x="102" y="130" fill="#cbd5e1" font-size="9" text-anchor="middle">• Port 3: Branch (JMP)</text>
    
    <!-- Parallel Dispatch Blocks in Cycle 2 -->
    <rect x="210" y="45" width="165" height="95" rx="6" fill="#0f172a" stroke="#10b981"/>
    <text x="292" y="65" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">CYCLE 2 DISPATCH</text>
    <text x="292" y="85" fill="#cbd5e1" font-size="9" text-anchor="middle">• Port 0: ALU (SUB R4)</text>
    <text x="292" y="100" fill="#cbd5e1" font-size="9" text-anchor="middle">• Port 1: ALU (OR R5)</text>
    <text x="292" y="115" fill="#cbd5e1" font-size="9" text-anchor="middle">• Port 2: Store (ST R6)</text>
    <text x="292" y="130" fill="#cbd5e1" font-size="9" text-anchor="middle">• Port 3: ALU (XOR R7)</text>
    
    <!-- Summary Callout -->
    <rect x="400" y="45" width="320" height="95" rx="6" fill="#0f172a" stroke="#f59e0b"/>
    <text x="560" y="70" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">SUPERSCALAR EFFICIENCY</text>
    <text x="415" y="95" fill="#cbd5e1" font-size="10">• Multiple independent ALUs execute in parallel</text>
    <text x="415" y="115" fill="#38bdf8" font-size="10">• Instruction Level Parallelism (ILP) pushes IPC &gt; 2.5</text>
    <text x="415" y="130" fill="#10b981" font-size="10">• Completes 8 instructions in just 2 clock cycles!</text>
  </g>
</svg>`,
      caption: {
        en: 'Scalar pipelines achieve 1 instruction per cycle; 4-way superscalar processors dispatch multiple independent operations to reach peak IPC above 3.0.',
        bn: 'স্কেলার পাইপলাইন প্রতি সাইকেলে ১ টি নির্দেশ সম্পন্ন করে; ৪-ওয়ে সুপারস্কেলার প্রসেসর একাধিক অপারেশন চালিয়ে IPC ৩.০ এর ওপরে নিয়ে যায়।'
      },
    },
    {
      type: 'heading',
      id: 'pipeline-hazards-resolution',
      text: {
        en: 'Overcoming Pipeline Hazards: Structural, Data, and Control',
        bn: 'পাইপলাইন হ্যাজার্ড সমাধান: স্ট্রাকচারাল, ডাটা এবং কন্ট্রোল'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In realistic execution, pipelines do not flow continuously without interruption. Microprocessors encounter 3 categories of pipeline hazards that threaten single-cycle throughput:',
        bn: 'বাস্তব ক্ষেত্রে পাইপলাইন কোনো ধরনের বাধা ছাড়া একটানা চলতে পারে না। মাইক্রোপ্রসেসর ৩ ধরনের পাইপলাইন হ্যাজার্ডের মুখোমুখি হয় যা প্রতি সাইকেলে নির্দেশের স্বাভাবিক প্রবাহকে ব্যাহত করে:'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Structural Hazards (Hardware Contention)',
            bn: '১. স্ট্রাকচারাল হ্যাজার্ড (হার্ডওয়্যার সংঘর্ষ)'
          },
          text: {
            en: 'Occurs when multiple pipeline stages attempt to access the exact same physical circuit in the same clock cycle. Solved by duplicating hardware resources, such as maintaining independent L1 Instruction and L1 Data caches.',
            bn: 'যখন একই ক্লক সাইকেলে একাধিক পাইপলাইন ধাপ একটি নির্দিষ্ট হার্ডওয়্যার সার্কিট ব্যবহারের চেষ্টা করে। হার্ডওয়্যার রিসোর্স দ্বিগুণ করে এই সমস্যা দূর করা হয়, যেমন স্বাধীন L1 Instruction এবং L1 Data ক্যাশ রাখা।'
          }
        },
        {
          title: {
            en: '2. Data Hazards (Read-After-Write Dependencies)',
            bn: '২. ডাটা হ্যাজার্ড (রিড-আফটার-রাইট নির্ভরতা)'
          },
          text: {
            en: 'Occurs when an instruction requires operand values being calculated by a preceding instruction that has not yet reached writeback. Solved via Hardware Data Forwarding (bypassing), which routes intermediate stage outputs directly to the ALU inputs, avoiding 2 bubble stall cycles.',
            bn: 'যখন কোনো পরবর্তী নির্দেশের এমন অপারেন্ড প্রয়োজন হয় যা পূর্ববর্তী নির্দেশ এখনো তৈরি করে উঠতে পারেনি। হার্ডওয়্যার ডাটা ফরওয়ার্ডিং (বাইপাসিং) এর মাধ্যমে মধ্যবর্তী ধাপ থেকে সরাসরি অ্যালু ইনপুটে মান পাঠিয়ে ২ সাইকেলের স্টল দূর করা হয়।'
          }
        },
        {
          title: {
            en: '3. Control Hazards (Branching Interruptions)',
            bn: '৩. কন্ট্রোল হ্যাজার্ড (ব্রাঞ্চিং বিঘ্ন)'
          },
          text: {
            en: 'Occurs when a conditional branch changes the Program Counter, requiring the CPU to flush speculatively fetched instructions if the branch target was mispredicted, costing 15 to 20 wasted clock cycles in deep pipelines.',
            bn: 'যখন কন্ডিশনাল ব্রাঞ্চের কারণে প্রোগ্রাম কাউন্টারের মান পরিবর্তিত হয়। ভুল অনুমানের কারণে ফেচ করা নির্দেশগুলো পাইপলাইন থেকে মুছে ফেলতে হয়, যা গভীর পাইপলাইনে ১৫ থেকে ২০ ক্লক সাইকেল অপচয় করে।'
          }
        }
      ]
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'superscalar-dispatch-sim.js',
      code: `// Deterministic 4-Way Superscalar CPU Dispatch Simulator
class SuperscalarCore {
  constructor(issueWidth = 4) {
    this.issueWidth = issueWidth; // Up to 4 instructions per cycle
    this.cycles = 0;
    this.instructionsRetired = 0;
  }

  // Execute a batch of instructions with dependency analysis
  run(instructionStream) {
    let index = 0;
    console.log('--- Starting 4-Way Superscalar Execution ---');

    while (index < instructionStream.length) {
      this.cycles++;
      console.log(\`\\n=== Clock Cycle \${this.cycles} ===\`);

      let currentBatchSize = 0;
      const destinationRegistersInFlight = new Set();

      // Bundle independent instructions up to issueWidth (4)
      while (currentBatchSize < this.issueWidth && (index + currentBatchSize) < instructionStream.length) {
        const candidate = instructionStream[index + currentBatchSize];

        // Check for Data Hazards (Read-After-Write dependency with current batch)
        if (destinationRegistersInFlight.has(candidate.src1) || destinationRegistersInFlight.has(candidate.src2)) {
          console.log(\`  [STALL] Instruction \${candidate.id} has RAW dependency -> stopping current issue bundle\`);
          break; // Must wait for next cycle
        }

        destinationRegistersInFlight.add(candidate.dest);
        console.log(\`  [DISPATCH PORT \${currentBatchSize}] Executing \${candidate.id}: R\${candidate.dest} = R\${candidate.src1} + R\${candidate.src2}\`);
        currentBatchSize++;
      }

      if (currentBatchSize === 0) currentBatchSize = 1; // Progress at least 1
      index += currentBatchSize;
      this.instructionsRetired += currentBatchSize;
    }
  }

  get ipc() {
    return (this.instructionsRetired / this.cycles).toFixed(2);
  }
}

// 7 instructions with dependencies:
// 4 independent operations in batch 1, 2 in batch 2, 1 in batch 3
const workload = [
  { id: 'I1', dest: 1, src1: 0, src2: 0 },
  { id: 'I2', dest: 2, src1: 0, src2: 0 },
  { id: 'I3', dest: 3, src1: 0, src2: 0 },
  { id: 'I4', dest: 4, src1: 0, src2: 0 }, // Independent batch of 4
  { id: 'I5', dest: 5, src1: 1, src2: 2 }, // Depends on I1, I2
  { id: 'I6', dest: 6, src1: 3, src2: 4 }, // Depends on I3, I4
  { id: 'I7', dest: 7, src1: 5, src2: 6 }, // Depends on I5, I6
];

const cpu = new SuperscalarCore(4);
cpu.run(workload);

console.log('\\nFinal Superscalar Metrics:');
console.log('  Total Instructions Retired =', cpu.instructionsRetired);
console.log('  Total Clock Cycles         =', cpu.cycles);
console.log('  Instructions Per Cycle     =', cpu.ipc + ' IPC (Exceeds scalar limit of 1.0)');`,
      caption: {
        en: '4-way superscalar core dispatches independent instructions across parallel ports to achieve 2.33 IPC.',
        bn: '৪-ওয়ে সুপারস্কেলার কোর সমান্তরাল পোর্টে স্বাধীন নির্দেশ পাঠিয়ে ২.৩৩ IPC অর্জন করে।'
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Out-of-Order (OoO) Execution & Reorder Buffers (ROB)',
        bn: 'আউট-অব-অর্ডার (OoO) এক্সিকিউশন এবং রিঅর্ডার বাফার (ROB)'
      },
      text: {
        en: 'Modern high-performance processors do not execute instructions strictly in the order written by the compiler. Using Tomasulo\'s algorithm, an Out-of-Order (OoO) execution engine inspects an instruction window of 500 or more instructions. When an instruction stalls waiting for a slow main RAM load (100 cycles), the processor skips ahead and executes subsequent independent instructions across idle ALUs. A circular Reorder Buffer (ROB) ensures results are committed to architectural registers in strict original program order, preserving program correctness.',
        bn: 'আধুনিক উচ্চক্ষমতাসম্পন্ন প্রসেসরগুলো কম্পাইলারের লেখা নির্দেশের ক্রম পুরোপুরি হুবহু অনুসরণ করে চলে না। তোমাসুলোর অ্যালগরিদম ব্যবহার করে আউট-অব-অর্ডার (OoO) এক্সিকিউশন ইঞ্জিন ৫০০ বা ততোধিক নির্দেশের উইন্ডো পর্যবেক্ষণ করে। যখন কোনো নির্দেশ ধীরগতির র‍্যাম থেকে ডাটা লোডের অপেক্ষায় থাকে ( ১০০ সাইকেল ), প্রসেসর তখন পরবর্তী স্বাধীন নির্দেশগুলো অলস অ্যালুতে সম্পন্ন করে ফেলে। একটি বৃত্তাকার রিঅর্ডার বাফার (ROB) নিশ্চিত করে যে ফলাফলগুলো মূল প্রোগ্রামের ক্রম অনুসারেই রেজিস্টারে জমা হবে, ফলে সফটওয়্যারের নির্ভুলতা বজায় থাকে।'
      },
    },
  ],
  exercises: [
    {
      id: 'cpu-pipe-ex-1',
      kind: 'predict',
      question: {
        en: 'In an ideal 5-stage pipelined processor with no hazard stalls, how many clock cycles are needed to complete 10 sequential instructions? Formula: 5 stages + (10 - 1) = 5 + 9 = 14 cycles. Type 14.',
        bn: 'কোনো হ্যাজার্ড স্টল না থাকলে একটি আদর্শ ৫-ধাপের পাইপলাইন প্রসেসরে ১০ টি ক্রমিক নির্দেশ সম্পন্ন করতে কত ক্লক সাইকেল লাগবে? সূত্র: ৫ ধাপ + ( ১০ - ১ ) = ৫ + ৯ = ১৪ সাইকেল। ১৪ টাইপ করুন।'
      },
      answer: '14',
      hint: {
        en: '5 cycles to fill the pipeline, plus 1 cycle for each of the remaining 9 instructions: 5 + 9 = 14.',
        bn: 'পাইপলাইন পূর্ণ করতে ৫ সাইকেল, সাথে বাকি ৯ টি নির্দেশের জন্য ১ সাইকেল করে: ৫ + ৯ = ১৪।'
      },
      explanation: {
        en: 'The first instruction requires 5 cycles to complete. After that, 1 instruction retires every cycle, requiring 5 + (10 - 1) = 14 total cycles.',
        bn: 'প্রথম নির্দেশটি সম্পন্ন হতে ৫ সাইকেল সময় নেয়। এরপর প্রতি সাইকেলে ১ টি করে নির্দেশ শেষ হয়, ফলে মোট সময় লাগে ৫ + ( ১০ - ১ ) = ১৪ সাইকেল।'
      },
    },
    {
      id: 'cpu-pipe-ex-2',
      kind: 'mcq',
      question: {
        en: 'What fundamental architectural distinction separates a scalar pipelined CPU from a superscalar CPU?',
        bn: 'কোন মৌলিক আর্কিটেকচারাল বৈশিষ্ট্য একটি স্কেলার পাইপলাইনড সিপিইউকে সুপারস্কেলার সিপিইউ থেকে পৃথক করে?'
      },
      options: [
        {
          en: 'A scalar pipeline dispatches at most 1 instruction per cycle, whereas a superscalar processor dispatches multiple independent instructions per cycle across parallel execution units',
          bn: 'স্কেলার পাইপলাইন প্রতি সাইকেলে সর্বোচ্চ ১ টি নির্দেশ পরিচালনা করে, যেখানে সুপারস্কেলার প্রসেসর সমান্তরাল ইউনিটে একসাথে একাধিক স্বাধীন নির্দেশ পরিচালনা করে',
        },
        {
          en: 'Scalar processors run exclusively on direct current batteries while superscalar processors use wind power',
          bn: 'স্কেলার প্রসেসর কেবল ডিসি ব্যাটারিতে চলে আর সুপারস্কেলার প্রসেসর বায়ুর শক্তিতে চলে',
        },
        {
          en: 'Superscalar processors cannot calculate integer numbers',
          bn: 'সুপারস্কেলার প্রসেসর পূর্ণসংখ্যা গণনা করতে পারে না',
        },
        {
          en: 'Scalar processors have no arithmetic logic units',
          bn: 'স্কেলার প্রসেসরে কোনো এরিথমেটিক লজিক ইউনিট থাকে না',
        },
      ],
      answer: 0,
      hint: {
        en: 'Superscalar CPUs replicate execution ports to dispatch multiple instructions simultaneously.',
        bn: 'সুপারস্কেলার সিপিইউতে একাধিক পোর্ট থাকে যা একসাথে বহু নির্দেশ পরিচালনা করতে পারে।',
      },
      explanation: {
        en: 'Superscalar processors feature multiple parallel execution pipelines and ALUs, enabling them to achieve an Instruction Per Cycle (IPC) rate greater than 1.0.',
        bn: 'সুপারস্কেলার প্রসেসরে একাধিক সমান্তরাল এক্সিকিউশন ইউনিট থাকে, যা তাদের প্রতি সাইকেলে ১.০ এর চেয়ে বেশি নির্দেশ ( IPC > ১.০ ) সম্পন্ন করার ক্ষমতা দেয়।'
      },
    },
    {
      id: 'cpu-pipe-ex-3',
      kind: 'mcq',
      question: {
        en: 'Which hardware optimization eliminates 2 bubble stall cycles when an instruction requires the result of the immediately preceding instruction?',
        bn: 'কোন হার্ডওয়্যার অপ্টিমাইজেশন ২ সাইকেলের বাবল স্টল দূর করে যখন একটি নির্দেশের ঠিক পূর্ববর্তী নির্দেশের ফলাফল প্রয়োজন হয়?'
      },
      options: [
        {
          en: 'Hardware Data Forwarding (Bypassing) from intermediate pipeline stage registers directly to ALU inputs',
          bn: 'মধ্যবর্তী পাইপলাইন রেজিস্টার থেকে সরাসরি অ্যালু ইনপুটে হার্ডওয়্যার ডাটা ফরওয়ার্ডিং (Data Forwarding / Bypassing)',
        },
        {
          en: 'Shutting down the computer power supply until next week',
          bn: 'পরবর্তী সপ্তাহ পর্যন্ত কম্পিউটারের বিদ্যুৎ সংযোগ বন্ধ রাখা',
        },
        {
          en: 'Converting all 64-bit numbers into 16-bit binary approximations',
          bn: 'সমস্ত ৬৪-বিট সংখ্যাকে ১৬-বিট বাইনারি অনুমানে রূপান্তর করা',
        },
        {
          en: 'Reversing the direction of rotation of the computer cooling fan',
          bn: 'কম্পিউটার কুলিং ফ্যানের ঘূর্ণনের দিক উল্টে দেওয়া',
        },
      ],
      answer: 0,
      hint: {
        en: 'Bypassing register writeback by routing newly computed ALU results directly to the next stage.',
        bn: 'সদ্য গণনাকৃত অ্যালু ফলাফলকে সরাসরি পরবর্তী ধাপে পাঠিয়ে রেজিস্টার রাইটব্যাকের বিলম্ব দূর করা।',
      },
      explanation: {
        en: 'Data forwarding intercepts computed results in the EX or MEM pipeline latches and routes them directly to subsequent ALU inputs, preventing pipeline stalls.',
        bn: 'ডাটা ফরওয়ার্ডিং মধ্যবর্তী পাইপলাইন থেকে সদ্য তৈরি ফলাফল সরাসরি পরবর্তী অ্যালু ইনপুটে পাঠায়, ফলে পাইপলাইন আটকে থাকে না।'
      },
    },
    {
      id: 'cpu-pipe-ex-4',
      kind: 'predict',
      question: {
        en: 'If a 4-way superscalar processor completes 12 instructions in 3 clock cycles, what is its Instructions Per Cycle (IPC)? (12 / 3 = 4). Type 4.',
        bn: 'যদি একটি ৪-ওয়ে সুপারস্কেলার প্রসেসর ৩ ক্লক সাইকেলে ১২ টি নির্দেশ সম্পন্ন করে, তবে তার ইন্সট্রাকশন পার সাইকেল (IPC) কত? ( ১২ / ৩ = ৪ )। ৪ টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Divide instructions retired (12) by total clock cycles (3).',
        bn: 'সম্পন্ন হওয়া নির্দেশ ( ১২ ) কে মোট ক্লক সাইকেল ( ৩ ) দিয়ে ভাগ করুন।'
      },
      explanation: {
        en: 'Instructions Per Cycle (IPC) equals instructions completed divided by elapsed cycles: 12 instructions divided by 3 cycles yields an IPC of 4.',
        bn: 'ইন্সট্রাকশন পার সাইকেল (IPC) হলো মোট নির্দেশকে মোট সাইকেল দিয়ে ভাগফল: ১২ টি নির্দেশকে ৩ সাইকেল দিয়ে ভাগ করলে IPC হয় ৪।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'CPU Instruction Pipelining & Superscalar Quiz',
      bn: 'সিপিইউ ইন্সট্রাকশন পাইপলাইনিং এবং সুপারস্কেলার কুইজ'
    },
    questions: [
      {
        id: 'cpu-pipe-qz-1',
        kind: 'mcq',
        topic: 'pipelining-throughput-gain',
        question: {
          en: 'How does an instruction pipeline dramatically improve microprocessor execution throughput?',
          bn: 'ইন্সট্রাকশন পাইপলাইনিং কীভাবে মাইক্রোপ্রসেসর এক্সিকিউশন থ্রুপুট নাটকীয়ভাবে বৃদ্ধি করে?'
        },
        options: [
          {
            en: 'By overlapping execution phases across multiple instructions simultaneously, retiring 1 instruction every clock cycle once filled',
            bn: 'একসাথে একাধিক নির্দেশের বিভিন্ন ধাপ পরিচালনা করে এবং পাইপলাইন পূর্ণ হলে প্রতি ক্লকে ১ টি করে নির্দেশ সম্পন্ন করে',
          },
          {
            en: 'By slowing down the clock speed to consume zero electricity',
            bn: 'বিদ্যুৎ খরচ শূন্যে নামাতে ক্লকের গতি কমিয়ে দিয়ে',
          },
          {
            en: 'By converting all machine code instructions into plain English audio files',
            bn: 'সমস্ত মেশিন কোড নির্দেশকে ইংরেজি অডিও ফাইলে রূপান্তর করে',
          },
          {
            en: 'By deleting all variables from memory as soon as they are created',
            bn: 'মেমোরিতে তৈরি হওয়ার সাথে সাথেই সমস্ত ভেরিয়েবল মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Assembly line execution where multiple instructions are processed concurrently.',
          bn: 'অ্যাসেম্বলি লাইন পদ্ধতি যেখানে একসাথে একাধিক নির্দেশ বিভিন্ন ধাপে প্রক্রিয়াধীন থাকে।',
        },
        explanation: {
          en: 'Pipelining overlaps the execution of multiple instructions across separate hardware stages, keeping all CPU units busy simultaneously to achieve single-cycle throughput.',
          bn: 'পাইপলাইনিং বিভিন্ন ধাপে একাধিক নির্দেশ একই সাথে চালানোর মাধ্যমে সমস্ত সার্কিটকে ব্যস্ত রাখে এবং প্রতি সাইকেলে একটি নির্দেশের থ্রুপুট নিশ্চিত করে।'
        },
      },
      {
        id: 'cpu-pipe-qz-2',
        kind: 'mcq',
        topic: 'read-after-write-data-hazard',
        question: {
          en: 'What causes a Read-After-Write (RAW) data hazard in a pipelined CPU datapath?',
          bn: 'পাইপলাইনযুক্ত সিপিইউ ডাটাপাথে একটি রিড-আফটার-রাইট (RAW) ডাটা হ্যাজার্ড কেন ঘটে?'
        },
        options: [
          {
            en: 'A subsequent instruction attempts to read an operand register before a preceding instruction has written its computed result back to that register',
            bn: 'একটি পরবর্তী নির্দেশ কোনো রেজিস্টার থেকে ডাটা পড়ার চেষ্টা করে যখন পূর্ববর্তী নির্দেশ এখনো সেই রেজিস্টারে ফলাফল লেখেনি',
          },
          {
            en: 'The operating system runs out of physical hard disk space',
            bn: 'অপারেটিং সিস্টেমে ফিজিক্যাল হার্ড ডিস্কের স্থান শেষ হয়ে গেলে',
          },
          {
            en: 'The CPU cooling liquid freezes into solid ice',
            bn: 'সিপিইউর কুলিং তরল জমে কঠিন বরফে পরিণত হলে',
          },
          {
            en: 'Two mouse cursors move across the screen at the same time',
            bn: 'স্ক্রিনে একসাথে দুটি মাউস কার্সার নাড়াচাড়া করলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'A dependency where instruction 2 needs the output of instruction 1 before writeback.',
          bn: 'এমন নির্ভরতা যেখানে ২য় নির্দেশের কাজ করতে ১ম নির্দেশের ফলাফলের জন্য অপেক্ষা করতে হয়।',
        },
        explanation: {
          en: 'A RAW data hazard occurs when an instruction depends on the result of an ongoing prior instruction that is still in the pipeline and has not committed to the register file.',
          bn: 'RAW ডাটা হ্যাজার্ড ঘটে যখন কোনো পরবর্তী নির্দেশ পূর্ববর্তী নির্দেশের ফলাফলের ওপর নির্ভর করে যা এখনো পাইপলাইনের ভেতরে প্রক্রিয়াধীন অবস্থায় রয়েছে।'
        },
      },
      {
        id: 'cpu-pipe-qz-3',
        kind: 'mcq',
        topic: 'out-of-order-execution-tomasulo',
        question: {
          en: 'How does Out-of-Order (OoO) execution prevent long memory latency stalls from freezing the entire processor?',
          bn: 'আউট-অব-অর্ডার (OoO) এক্সিকিউশন কীভাবে ধীরগতির মেমোরি ল্যাটেন্সির কারণে পুরো প্রসেসর আটকে যাওয়া প্রতিরোধ করে?'
        },
        options: [
          {
            en: 'By inspecting an instruction window and executing later independent instructions while the stalled instruction waits for memory, retiring them in order via a Reorder Buffer',
            bn: 'নির্দেশের উইন্ডো দেখে আটকে থাকা নির্দেশের অপেক্ষার সময় পরবর্তী স্বাধীন নির্দেশগুলো চালিয়ে এবং রিঅর্ডার বাফারের মাধ্যমে মূল ক্রমে ফলাফল নিশ্চিত করে',
          },
          {
            en: 'By permanently halting the processor and restarting the operating system kernel',
            bn: 'প্রসেসর স্থায়ীভাবে বন্ধ করে অপারেটিং সিস্টেম কার্নেল রিস্টার্ট করে',
          },
          {
            en: 'By writing random numbers into the system BIOS firmware',
            bn: 'সিস্টেম বায়োস ফার্মওয়্যারে এলোমেলো সংখ্যা লিখে',
          },
          {
            en: 'By forcing all calculations to run on the sound card',
            bn: 'সাউন্ড কার্ডের ওপর সমস্ত গণনা চালাতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Looking ahead in the instruction stream to find independent operations that can run right now.',
          bn: 'নির্দেশের প্রবাহের সামনে তাকিয়ে এখনই চালানো সম্ভব এমন স্বাধীন কাজগুলো খুঁজে বের করা।',
        },
        explanation: {
          en: 'Out-of-Order execution bypasses stalled instructions, executing subsequent independent instructions across idle functional units, keeping the core saturated.',
          bn: 'আউট-অব-অর্ডার এক্সিকিউশন আটকে থাকা নির্দেশকে এড়িয়ে পরবর্তী স্বাধীন কাজগুলো সম্পন্ন করে প্রসেসরের গতি ও কার্যক্ষমতা বজায় রাখে।'
        },
      },
      {
        id: 'cpu-pipe-qz-4',
        kind: 'mcq',
        topic: 'pipeline-bubble-stall',
        question: {
          en: 'What occurs inside a pipelined microprocessor when a pipeline hazard forces a "bubble" or stall cycle?',
          bn: 'পাইপলাইন হ্যাজার্ডের কারণে যখন একটি "বাবল" বা স্টল সাইকেলের সৃষ্টি হয় তখন মাইক্রোপ্রসেসরের ভেতরে কী ঘটে?'
        },
        options: [
          {
            en: 'Control logic inserts a NOP (No-Operation) into the stalled stage, holding previous instructions stationary while allowing downstream stages to clear',
            bn: 'কন্ট্রোল লজিক স্টল হওয়া ধাপে একটি NOP (ফাঁকা নির্দেশ) প্রবেশ করায়, যার ফলে আগের নির্দেশগুলো দাঁড়িয়ে থাকে এবং সামনের ধাপগুলো এগিয়ে যায়',
          },
          {
            en: 'The CPU motherboard bursts into flames and burns up',
            bn: 'সিপিইউ মাদারবোর্ডে আগুন ধরে পুড়ে যায়',
          },
          {
            en: 'All system memory RAM chips are erased and formatted',
            bn: 'সিস্টেমের সমস্ত র‍্যাম মেমোরি চিপ মুছে ফরম্যাট হয়ে যায়',
          },
          {
            en: 'The computer keyboard disconnects itself automatically',
            bn: 'কম্পিউটার কিবোর্ড স্বয়ংক্রিয়ভাবে সংযোগ বিচ্ছিন্ন হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'A pipeline bubble is an idle NOP cycle inserted to wait for an unresolved dependency.',
          bn: 'পাইপলাইন বাবল হলো একটি অলস ফাঁকা নির্দেশ সাইকেল যা নির্ভরতা সমাধানের জন্য অপেক্ষা করে।',
        },
        explanation: {
          en: 'A pipeline bubble introduces an idle NOP cycle into intermediate pipeline latches, delaying dependent instructions until data or resource hazards are cleared.',
          bn: 'পাইপলাইন বাবল মধ্যবর্তী ধাপে একটি ফাঁকা সাইকেল তৈরি করে, যা নির্ভরতা সমাধান না হওয়া পর্যন্ত সংশ্লিষ্ট নির্দেশগুলোকে অপেক্ষায় রাখে।'
        },
      },
    ],
  },
  next: {
    slug: 'branch-prediction',
    title: {
      en: 'Branch Prediction & Speculative Execution',
      bn: 'ব্রাঞ্চ প্রেডিকশন এবং স্পেকুলেটিভ এক্সিকিউশন'
    },
  },
};
