import type { Lesson } from '../../../lib/types';

export const MeetArchLesson: Lesson = {
  slug: 'meet-arch',
  tech: 'computer-architecture',
  title: {
    en: 'Introduction to Computer Architecture & The Von Neumann Machine',
    bn: 'কম্পিউটার আর্কিটেকচারের ভূমিকা এবং ভন নিউম্যান মেশিন',
  },
  summary: {
    en: 'A foundational beginner overview and introduction to the von Neumann computer model separating computation from memory. Understand the three system buses (Data Bus, Address Bus, Control Bus), the CPU internal datapath (Control Unit, Arithmetic Logic Unit, Registers), clock cycle timing, and the von Neumann memory bottleneck.',
    bn: 'মেমোরি থেকে গণনাকে পৃথককারী মৌলিক ভন নিউম্যান কম্পিউটার মডেলের ভূমিকা ও সংক্ষিপ্ত রূপরেখা বিশ্লেষণ করুন। ৩ টি সিস্টেম বাস ( ডেটা বাস, অ্যাড্রেস বাস, কন্ট্রোল বাস ), সিপিইউ অভ্যন্তরীণ ডেটাপাথ ( কন্ট্রোল ইউনিট, অ্যারিথমেটিক লজিক ইউনিট, রেজিস্টার ), ক্লক সাইকেল টাইমিং এবং ভন নিউম্যান মেমোরি বটলনেক বিস্তারিত জানুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'von-neumann-principles',
      text: {
        en: 'The Stored-Program Paradigm & System Bus Architecture',
        bn: 'সংরক্ষিত-প্রোগ্রাম পদ্ধতি এবং সিস্টেম বাস আর্কিটেকচার',
      },
    },
    {
      type: 'para',
      text: {
        en: 'In 1945, mathematician John von Neumann introduced the stored-program computer architecture. In this design, machine instructions and application data share the same physical memory space. A central processing unit (CPU) reads both program code and variables through a shared communication pathway called the system bus. This foundational concept replaced early computing machines that required physical rewiring for each new program.',
        bn: '১৯৪৫ সালে গণিতবিদ জন ভন নিউম্যান সংরক্ষিত-প্রোগ্রাম কম্পিউটার আর্কিটেকচার প্রস্তাব করেন। এই নকশায় মেশিনের নির্দেশ এবং অ্যাপ্লিকেশনের ডেটা একই ফিজিক্যাল মেমোরি স্পেস শেয়ার করে। একটি সেন্ট্রাল প্রসেসিং ইউনিট (CPU) সিস্টেম বাস নামের একটি অভিন্ন সংযোগ পথের মাধ্যমে প্রোগ্রাম কোড এবং ভেরিয়েবল উভয়ই পড়ে থাকে। এই বৈপ্লবিক ধারণাটি পূর্বের কম্পিউটারগুলোর জটিল তার পরিবর্তনের প্রয়োজনীয়তা দূর করে।',
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'The Von Neumann Architecture: CPU Datapath, System Bus & Memory',
        bn: 'ভন নিউম্যান আর্কিটেকচার: সিপিইউ ডেটাপাথ, সিস্টেম বাস এবং মেমোরি',
      },
      svg: `<svg viewBox="0 0 820 440" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="cpuArchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="ramArchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="busGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.25"/>
    </linearGradient>
    <marker id="busArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#475569"/>
    </marker>
    <marker id="busBidirectional" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6">
      <path d="M 2 5 L 8 1 L 8 9 z" fill="#0284c7"/>
    </marker>
  </defs>

  <!-- CPU Boundary -->
  <rect x="25" y="30" width="350" height="370" rx="12" fill="url(#cpuArchGrad)" stroke="#0284c7" stroke-width="2"/>
  <text x="45" y="60" font-size="16" font-weight="700" fill="#0369a1">CENTRAL PROCESSING UNIT (CPU)</text>

  <!-- Control Unit (CU) -->
  <rect x="45" y="80" width="310" height="85" rx="8" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="60" y="105" font-size="14" font-weight="700" fill="#0f172a">Control Unit (CU)</text>
  <text x="60" y="125" font-size="11" fill="#475569">Program Counter (PC) -> Instruction Register (IR)</text>
  <text x="60" y="145" font-size="11" fill="#0284c7">Decodes opcodes &amp; coordinates clock timing</text>

  <!-- Arithmetic Logic Unit (ALU) -->
  <rect x="45" y="180" width="310" height="85" rx="8" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="60" y="205" font-size="14" font-weight="700" fill="#0f172a">Arithmetic Logic Unit (ALU)</text>
  <text x="60" y="225" font-size="11" fill="#475569">Add, Sub, Bitwise AND, OR, XOR, Shifts</text>
  <text x="60" y="245" font-size="11" fill="#047857">Status Flags: Zero (Z), Carry (C), Overflow (V)</text>

  <!-- Register File -->
  <rect x="45" y="280" width="310" height="100" rx="8" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="60" y="305" font-size="14" font-weight="700" fill="#0f172a">Internal Register File</text>
  <text x="60" y="325" font-size="11" fill="#475569">Accumulator (ACC) | General Registers (R0-R7)</text>
  <text x="60" y="345" font-size="11" fill="#475569">Memory Address (MAR) | Memory Data (MDR)</text>
  <text x="60" y="365" font-size="11" fill="#b45309">Ultra-fast single-cycle silicon storage (&lt; 0.5 ns)</text>

  <!-- System Bus (Middle highway) -->
  <rect x="410" y="30" width="120" height="370" rx="10" fill="url(#busGrad)" stroke="#d97706" stroke-width="2"/>
  <text x="470" y="60" font-size="13" font-weight="700" fill="#92400e" text-anchor="middle">SYSTEM BUS</text>

  <rect x="420" y="90" width="100" height="70" rx="6" fill="#ffffff" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="470" y="115" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle">Address Bus</text>
  <text x="470" y="135" font-size="10" fill="#475569" text-anchor="middle">Unidirectional</text>
  <text x="470" y="150" font-size="9" fill="#0284c7" text-anchor="middle">CPU -> Memory</text>

  <rect x="420" y="180" width="100" height="70" rx="6" fill="#ffffff" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="470" y="205" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle">Data Bus</text>
  <text x="470" y="225" font-size="10" fill="#475569" text-anchor="middle">Bidirectional</text>
  <text x="470" y="240" font-size="9" fill="#047857" text-anchor="middle">Read &amp; Write</text>

  <rect x="420" y="270" width="100" height="70" rx="6" fill="#ffffff" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="470" y="295" font-size="11" font-weight="700" fill="#0f172a" text-anchor="middle">Control Bus</text>
  <text x="470" y="315" font-size="10" fill="#475569" text-anchor="middle">Signals</text>
  <text x="470" y="330" font-size="9" fill="#b45309" text-anchor="middle">RD, WR, Clock</text>

  <!-- Main Memory (RAM) -->
  <rect x="565" y="30" width="230" height="370" rx="12" fill="url(#ramArchGrad)" stroke="#047857" stroke-width="2"/>
  <text x="585" y="60" font-size="15" font-weight="700" fill="#065f46">MAIN MEMORY (RAM)</text>
  <text x="585" y="80" font-size="11" fill="#64748b">Shared Address Space</text>

  <rect x="580" y="100" width="200" height="120" rx="6" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="590" y="125" font-size="12" font-weight="700" fill="#065f46">Instructions (Program Code)</text>
  <text x="590" y="145" font-size="11" fill="#475569">0x00: LOAD [0x0A]</text>
  <text x="590" y="165" font-size="11" fill="#475569">0x02: ADD  [0x0B]</text>
  <text x="590" y="185" font-size="11" fill="#475569">0x04: STORE [0x0C]</text>
  <text x="590" y="205" font-size="11" fill="#475569">0x06: HALT</text>

  <rect x="580" y="240" width="200" height="110" rx="6" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="590" y="265" font-size="12" font-weight="700" fill="#065f46">Data Variables</text>
  <text x="590" y="285" font-size="11" fill="#475569">0x0A: 5 (Value A)</text>
  <text x="590" y="305" font-size="11" fill="#475569">0x0B: 7 (Value B)</text>
  <text x="590" y="325" font-size="11" fill="#047857">0x0C: 12 (Result Sum)</text>
</svg>`,
      caption: {
        en: 'The classic von Neumann architecture: the CPU datapath contains the Control Unit, ALU, and Registers; the three system buses transmit addresses, data, and control clocks to shared main memory.',
        bn: 'ক্লাসিক ভন নিউম্যান আর্কিটেকচার: সিপিইউ ডেটাপাথে কন্ট্রোল ইউনিট, ALU এবং রেজিস্টার থাকে; ৩ টি সিস্টেম বাস শেয়ার্ড মূল মেমোরিতে ঠিকানা, ডেটা এবং কন্ট্রোল ক্লক সংকেত আদান-প্রদান করে।',
      },
    },
    {
      type: 'heading',
      id: 'datapath-registers-and-bus-signals',
      text: {
        en: 'The Three System Buses: Address, Data, and Control',
        bn: '৩ টি সিস্টেম বাস: অ্যাড্রেস, ডেটা এবং কন্ট্রোল বাস',
      },
    },
    {
      type: 'para',
      text: {
        en: 'The system bus connects the processor to memory chips and input/output controllers. It consists of three distinct sets of electrical conductors. First, the Address Bus is strictly unidirectional, driven solely by the CPU to point to a specific memory cell. The number of address lines determines the maximum addressable memory space; for example, a 32-bit address bus can access 4 GiB of RAM. Second, the Data Bus is bidirectional, transmitting the actual opcode bytes and data values between components. Third, the Control Bus carries synchronization signals including Memory Read, Memory Write, System Clock pulses, and Hardware Interrupt requests.',
        bn: 'সিস্টেম বাস প্রসেসরকে মেমোরি চিপ এবং ইনপুট/আউটপুট কন্ট্রোলারের সাথে সংযুক্ত করে। এটি ৩ টি পৃথক পরিবাহী তারের সেটে বিভক্ত। প্রথমত, অ্যাড্রেস বাস সম্পূর্ণ একমুখী, যা শুধুমাত্র সিপিইউ দ্বারা নিয়ন্ত্রিত হয়ে নির্দিষ্ট মেমোরি সেলকে নির্দেশ করে। অ্যাড্রেস লাইনের সংখ্যা মেমোরি ধারণক্ষমতা নির্ধারণ করে; যেমন ৩২-বিট অ্যাড্রেস বাস ৪ গিগাবাইট র‍্যাম অ্যাক্সেস করতে পারে। দ্বিতীয়ত, ডেটা বাস দ্বিমুখী, যা বিভিন্ন উপাদানের মধ্যে আসল বাইট ও নির্দেশ স্থানান্তর করে। তৃতীয়ত, কন্ট্রোল বাস মেমোরি রিড, রাইট, সিস্টেম ক্লক ও ইন্টারাপ্ট সংকেত আদান-প্রদান করে।',
      },
    },
    {
      type: 'code',
      code: `// Deterministic Von Neumann Machine Simulation with Register Datapath & System Bus
class VonNeumannComputer {
  constructor() {
    this.memory = new Uint8Array(16); // 16-byte shared memory space
    this.pc = 0;   // Program Counter
    this.mar = 0;  // Memory Address Register
    this.mdr = 0;  // Memory Data Register
    this.ir = 0;   // Instruction Register
    this.acc = 0;  // Accumulator Register
    this.halted = false;
    this.cycleCount = 0;
  }

  // Load sample program and data constants into shared memory
  loadProgram() {
    // Opcode mapping: 1 = LOAD [addr], 2 = ADD [addr], 3 = STORE [addr], 0 = HALT
    this.memory[0] = 1;  this.memory[1] = 10; // LOAD [10]
    this.memory[2] = 2;  this.memory[3] = 11; // ADD [11]
    this.memory[4] = 3;  this.memory[5] = 12; // STORE [12]
    this.memory[6] = 0;                       // HALT

    // Data constants in same linear memory
    this.memory[10] = 5; // Value A = 5
    this.memory[11] = 7; // Value B = 7
  }

  // Execute one complete instruction cycle (Fetch, Decode, Execute)
  stepInstruction() {
    if (this.halted) return;

    // 1. Fetch: Address Bus gets PC; Memory returns Opcode into MDR; Latch IR
    this.mar = this.pc++;
    this.mdr = this.memory[this.mar];
    this.ir = this.mdr;
    this.cycleCount++;

    if (this.ir === 0) {
      this.halted = true;
      return;
    }

    // Fetch memory operand address
    this.mar = this.pc++;
    const operandAddress = this.memory[this.mar];
    this.cycleCount++;

    // 2. Decode and 3. Execute
    if (this.ir === 1) {
      // LOAD: Read operand from memory into Accumulator
      this.mar = operandAddress;
      this.acc = this.memory[this.mar];
    } else if (this.ir === 2) {
      // ADD: ALU adds memory operand to Accumulator
      this.mar = operandAddress;
      this.acc += this.memory[this.mar];
    } else if (this.ir === 3) {
      // STORE: Write Accumulator value to Data Bus into memory
      this.mar = operandAddress;
      this.memory[this.mar] = this.acc;
    }
  }

  run() {
    while (!this.halted && this.pc < 16) {
      this.stepInstruction();
    }
  }
}

// Verification Run
const machine = new VonNeumannComputer();
machine.loadProgram();
machine.run();

console.log('Program completed in clock cycles:', machine.cycleCount);
console.log('Final Accumulator Value (5 + 7):', machine.acc);
console.log('Stored Result in Memory[12]:', machine.memory[12]);`,
      caption: {
        en: 'A verified simulation of the von Neumann machine architecture executing instructions and reading data from shared memory using MAR, MDR, PC, and Accumulator registers.',
        bn: 'ভন নিউম্যান মেশিন আর্কিটেকচারের বাস্তব সিমুলেশন যা MAR, MDR, PC এবং Accumulator রেজিস্টার ব্যবহার করে শেয়ার্ড মেমোরি থেকে নির্দেশ ও ডেটা পরিচালনা করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Von Neumann Architecture',
          def: {
            en: 'A computer design model where program instructions and operational data reside in the same unified memory address space and share system bus pathways.',
            bn: 'একটি কম্পিউটার নকশা যেখানে প্রোগ্রামের নির্দেশাবলী এবং ডেটা একই মেমোরি স্পেসে থাকে এবং একই সিস্টেম বাস ব্যবহার করে।',
          },
        },
        {
          term: 'Control Unit (CU)',
          def: {
            en: 'The CPU orchestrator that fetches machine instructions from memory, decodes opcodes, and emits electrical timing signals to coordinate all datapath circuits.',
            bn: 'সিপিইউর নিয়ন্ত্রণ কেন্দ্র যা মেমোরি থেকে নির্দেশ আনে, অপকোড ডিকোড করে এবং সমস্ত সার্কিট পরিচালনার জন্য প্রয়োজনীয় টাইমিং সংকেত তৈরি করে।',
          },
        },
        {
          term: 'Arithmetic Logic Unit (ALU)',
          def: {
            en: 'The digital processing engine inside the CPU responsible for executing integer arithmetic calculations and boolean logic evaluations.',
            bn: 'সিপিইউর ভেতরে থাকা ডিজিটাল প্রসেসিং ইঞ্জিন যা পূর্ণসংখ্যার গাণিতিক হিসাব এবং বুলিয়ান লজিক অপারেশন সম্পন্ন করে।',
          },
        },
        {
          term: 'System Bus',
          def: {
            en: 'The collection of shared electrical conducting lines (Address Bus, Data Bus, and Control Bus) facilitating data transfer between CPU, RAM, and I/O devices.',
            bn: 'সিপিইউ, মেমোরি এবং অন্যান্য ডিভাইসের মধ্যে তথ্য স্থানান্তরের জন্য ব্যবহৃত ৩ টি সমন্বিত তারের মাধ্যম (অ্যাড্রেস, ডেটা এবং কন্ট্রোল বাস)।',
          },
        },
      ],
    },
    {
      type: 'callout',
      text: {
        en: 'The classic von Neumann bottleneck occurs because instructions and data must travel sequentially across the same shared system bus. Modern computer architectures mitigate this bandwidth limitation by placing fast on-chip SRAM cache memories (L1, L2, L3) directly on the silicon microprocessor die.',
        bn: 'ঐতিহ্যবাহী ভন নিউম্যান বটলনেক সৃষ্টি হয় কারণ একই শেয়ার্ড সিস্টেম বাসের ওপর দিয়ে ক্রমানুসারে নির্দেশ এবং ডেটা উভয়ই পাঠাতে হয়। আধুনিক কম্পিউটার আর্কিটেকচার সিপিইউ চিপের ভেতরেই দ্রুতগতির অন-চিপ এস-র‍্যাম ক্যাশ মেমোরি ( এল ১ , এল ২ , এল ৩ ) বসিয়ে এই সীমাবদ্ধতা বহুলাংশে দূর করেছে।',
      },
    },
  ],
  exercises: [
    {
      id: 'ca-meet-ex-1',
      kind: 'predict',
      question: {
        en: 'On a processor architecture featuring a 32-bit Address Bus, how many total gigabytes (GiB) of physical memory can the CPU uniquely address?',
        bn: '৩২-বিট অ্যাড্রেস বাস বিশিষ্ট একটি প্রসেসর আর্কিটেকচারে সিপিইউ ফিজিক্যাল মেমোরির সর্বোচ্চ কত গিগাবাইট (GiB) জায়গা শনাক্ত করতে পারে?'
      },
      answer: '4',
      hint: {
        en: 'Compute 2 to the power of 32 bytes, which equals 4294967296 bytes.',
        bn: '২ এর ঘাত ৩২ হিসেব করুন, যা ৪২৯৪৯৬৭২৯৬ বাইটের সমান।',
      },
      explanation: {
        en: 'With 32 address lines, the CPU can generate 2^32 distinct binary addresses, equaling exactly 4294967296 bytes or 4 GiB of memory.',
        bn: '৩২ টি অ্যাড্রেস লাইনের সাহায্যে সিপিইউ ২^৩২ টি পৃথক বাইনারি ঠিকানা তৈরি করতে পারে, যা ঠিক ৪২৯৪৯৬৭২৯৬ বাইট বা ৪ গিগাবাইট মেমোরির সমান।',
      },
    },
    {
      id: 'ca-meet-ex-2',
      kind: 'mcq',
      question: {
        en: 'Which of the three system buses is strictly unidirectional, transmitting memory addresses from the CPU outwards to memory and peripheral interfaces?',
        bn: '৩ টি সিস্টেম বাসের মধ্যে কোনটি সম্পূর্ণ একমুখী, যা সিপিইউ থেকে বাইরের মেমোরি ও পেরিফেরাল ডিভাইসের দিকে মেমোরি ঠিকানা পাঠায়?'
      },
      options: [
        {
          en: 'Address Bus',
          bn: 'অ্যাড্রেস বাস (Address Bus)',
        },
        {
          en: 'Power Cable Ground Wire',
          bn: 'পাওয়ার কেবলের গ্রাউন্ড তার',
        },
        {
          en: 'Audio Synthesizer Bus',
          bn: 'অডিও সিন্থেসাইজার বাস',
        },
        {
          en: 'Monitor Backlight Cable',
          bn: 'মনিটরের ব্যাকলাইট কেবল',
        },
      ],
      answer: 0,
      hint: {
        en: 'Only the CPU specifies which address cell is being targeted for reading or writing.',
        bn: 'কেবল সিপিইউ নির্দিষ্ট করে কোন মেমোরি সেলে রিড বা রাইট কাজ সম্পন্ন হবে।',
      },
      explanation: {
        en: 'The Address Bus is unidirectional because memory cells and peripherals never drive address lines; the processor solely controls which address location to activate.',
        bn: 'অ্যাড্রেস বাস একমুখী কারণ মেমোরি বা পেরিফেরাল কখনো অ্যাড্রেস তৈরি করে না; কেবল প্রসেসরই নির্দিষ্ট করে কোন সেলটি সক্রিয় হবে।',
      },
    },
    {
      id: 'ca-meet-ex-3',
      kind: 'mcq',
      question: {
        en: 'What fundamental design limitation is described by the architectural term "von Neumann bottleneck"?',
        bn: 'আর্কিটেকচারাল পরিভাষা "ভন নিউম্যান বটলনেক" দ্বারা কোন মৌলিক নকশাগত সীমাবদ্ধতাকে বোঝানো হয়?'
      },
      options: [
        {
          en: 'Memory transfer throughput is limited because program instructions and application data must compete for sequential transfer across the exact same physical bus',
          bn: 'মেমোরি স্থানান্তরের গতি সীমিত হয়ে পড়ে কারণ প্রোগ্রামের নির্দেশ এবং ডেটাকে একই ফিজিক্যাল বাসের ওপর দিয়ে ক্রমানুসারে চলাচল করতে হয়',
        },
        {
          en: 'The computer case becomes too hot if the mouse is moved rapidly',
          bn: 'মাউস খুব দ্রুত নাড়ালে কম্পিউটারের কেসিং অতিরিক্ত গরম হয়ে যায়',
        },
        {
          en: 'Computer monitors cannot display text without an external battery',
          bn: 'বাইরের ব্যাটারি ছাড়া কম্পিউটার মনিটরে লেখা প্রদর্শন করা সম্ভব হয় না',
        },
        {
          en: 'Keyboard keys stick together whenever mathematical equations are typed',
          bn: 'গাণিতিক সমীকরণ লেখার সময় কিবোর্ডের বোতামগুলো একসাথে আটকে যায়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Because data and instructions share one bus, the CPU frequently sits idle waiting for memory reads to finish.',
        bn: 'যেহেতু ডেটা এবং নির্দেশ একই বাস শেয়ার করে, তাই মেমোরি থেকে ডেটা আসার অপেক্ষায় প্রসেসরকে প্রায়ই অলস বসে থাকতে হয়।',
      },
      explanation: {
        en: 'The von Neumann bottleneck refers to the speed mismatch between fast CPUs and slower shared memory buses, capping real-world processing throughput.',
        bn: 'ভন নিউম্যান বটলনেক বলতে দ্রুতগতির সিপিইউ এবং তুলনামূলক ধীরগতির শেয়ার্ড বাসের গতির অমিলকে বোঝায়, যা সামগ্রিক গতি কমিয়ে দেয়।',
      },
    },
    {
      id: 'ca-meet-ex-4',
      kind: 'predict',
      question: {
        en: 'What standard 2-letter abbreviation represents the CPU register that holds the memory address of the next instruction to be fetched?',
        bn: 'পরবর্তী যে নির্দেশটি মেমোরি থেকে আনা হবে তার ঠিকানা ধারণকারী সিপিইউ রেজিস্টারটিকে কোন স্ট্যান্ডার্ড ২ অক্ষরের সংক্ষিপ্ত রূপে প্রকাশ করা হয়?'
      },
      answer: 'PC',
      hint: {
        en: 'It stands for Program Counter.',
        bn: 'এটি Program Counter এর সংক্ষিপ্ত রূপ।',
      },
      explanation: {
        en: 'The Program Counter (PC) automatically increments after each instruction fetch, maintaining the sequential execution pointer in memory.',
        bn: 'প্রোগ্রাম কাউন্টার (PC) প্রতিটি নির্দেশ আনার পর স্বয়ংক্রিয়ভাবে বৃদ্ধি পায় এবং মেমোরিতে কাজের ধারাবাহিকতা বজায় রাখে।',
      },
    },
  ],
  quiz: {
    title: {
      en: 'Von Neumann Architecture & CPU Datapath Knowledge Check',
      bn: 'ভন নিউম্যান আর্কিটেকচার এবং সিপিইউ ডেটাপাথ জ্ঞান যাচাই',
    },
    questions: [
      {
        id: 'ca-meet-qz-1',
        kind: 'mcq',
        topic: 'von-neumann-vs-harvard',
        question: {
          en: 'How does the Harvard architecture differ from the classical von Neumann architecture in its physical memory and bus organization?',
          bn: 'ফিজিক্যাল মেমোরি এবং বাস বিন্যাসের দিক থেকে হার্ভার্ড আর্কিটেকচার ক্লাসিক্যাল ভন নিউম্যান আর্কিটেকচারের থেকে কীভাবে আলাদা?'
        },
        options: [
          {
            en: 'Harvard architecture utilizes physically separate memory banks and independent buses for instructions and data, allowing simultaneous instruction fetch and data read',
            bn: 'হার্ভার্ড আর্কিটেকচারে নির্দেশ এবং ডেটার জন্য সম্পূর্ণ পৃথক মেমোরি ব্যাংক ও স্বাধীন বাস থাকে, ফলে একই সাথে নির্দেশ আনা এবং ডেটা পড়া সম্ভব হয়',
          },
          {
            en: 'Harvard architecture eliminates all arithmetic logic units from the microprocessor',
            bn: 'হার্ভার্ড আর্কিটেকচারে প্রসেসর থেকে সকল অ্যারিথমেটিক লজিক ইউনিট বাদ দেওয়া হয়',
          },
          {
            en: 'Harvard architecture requires electricity only during daytime operating hours',
            bn: 'হার্ভার্ড আর্কিটেকচারে কেবল দিনের বেলা কাজের সময় বিদ্যুতের প্রয়োজন হয়',
          },
          {
            en: 'Harvard architecture converts electronic pulses into mechanical gear rotations',
            bn: 'হার্ভার্ড আর্কিটেকচারে বৈদ্যুতিক স্পন্দনকে মেকানিক্যাল গিয়ারের ঘূর্ণনে রূপান্তর করা হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Consider whether instruction fetches and data transfers can occur in the same clock cycle.',
          bn: 'একই ক্লক সাইকেলে নির্দেশ আনা এবং ডেটা আদান-প্রদান সম্ভব কিনা তা বিবেচনা করুন।',
        },
        explanation: {
          en: 'By maintaining dedicated buses for program memory and data memory, Harvard systems avoid the shared-bus bottleneck of pure von Neumann designs.',
          bn: 'নির্দেশ এবং ডেটার জন্য পৃথক বাস ব্যবহার করার কারণে হার্ভার্ড আর্কিটেকচারে ভন নিউম্যান ডিজাইনের মতো বাসের যানজট বা বটলনেক থাকে না।',
        },
      },
      {
        id: 'ca-meet-qz-2',
        kind: 'mcq',
        topic: 'control-unit-role',
        question: {
          en: 'What specific operational responsibility does the Control Unit (CU) execute during the instruction cycle of a central processing unit?',
          bn: 'সেন্ট্রাল প্রসেসিং ইউনিটের ইন্সট্রাকশন সাইকেলের সময় কন্ট্রোল ইউনিট (CU) কোন নির্দিষ্ট পরিচালনা দায়িত্ব পালন করে?'
        },
        options: [
          {
            en: 'It fetches instructions from memory, decodes machine opcodes, and generates synchronized electrical micro-signals to orchestrate registers, ALU, and bus pathways',
            bn: 'এটি মেমোরি থেকে নির্দেশ নিয়ে আসে, মেশিন অপকোড ডিকোড করে এবং রেজিস্টার, ALU ও বাস পরিচালনার জন্য সমন্বিত বৈদ্যুতিক সিগন্যাল তৈরি করে',
          },
          {
            en: 'It directly calculates floating-point trigonometric sine and cosine functions',
            bn: 'এটি সরাসরি ফ্লোটিং-পয়েন্ট ত্রিকোণমিতিক সাইন ও কোসাইন গণনা করে',
          },
          {
            en: 'It monitors external room humidity and activates cooling fans in the building',
            bn: 'এটি ঘরের আর্দ্রতা পর্যবেক্ষণ করে ভবনের কুলিং ফ্যান চালু করে',
          },
          {
            en: 'It translates machine code into human-readable spoken English podcasts',
            bn: 'এটি মেশিন কোডকে মানুষের বোধগম্য অডিও পডকাস্টে রূপান্তর করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'The Control Unit acts as the central coordinator or director of the processor hardware.',
          bn: 'কন্ট্রোল ইউনিট প্রসেসর হার্ডওয়্যারের মূল সমন্বয়ক বা পরিচালক হিসেবে কাজ করে।',
        },
        explanation: {
          en: 'The CU decodes the instruction inside the Instruction Register (IR) and manages the control bus asserting Read/Write lines and directing data through the ALU.',
          bn: 'কন্ট্রোল ইউনিট IR রেজিস্টারে থাকা নির্দেশ ডিকোড করে কন্ট্রোল বাসের মাধ্যমে রিড/রাইট লাইন সক্রিয় করে এবং ALU-র মধ্য দিয়ে ডেটা প্রবাহ নিয়ন্ত্রণ করে।',
        },
      },
      {
        id: 'ca-meet-qz-3',
        kind: 'mcq',
        topic: 'data-bus-width',
        question: {
          en: 'How does doubling the width of the CPU Data Bus (for example, from 32 bits to 64 bits) affect computer system performance?',
          bn: 'সিপিইউ ডেটা বাসের প্রস্থ দ্বিগুণ বৃদ্ধি করলে (যেমন ৩২ বিট থেকে ৬৪ বিট) কম্পিউটার সিস্টেমের পারফরম্যান্সে কী প্রভাব পড়ে?'
        },
        options: [
          {
            en: 'It doubles the volume of data that can be transferred between the CPU and memory in a single bus clock cycle, accelerating memory throughput',
            bn: 'এটি একটি একক বাস ক্লক সাইকেলে সিপিইউ এবং মেমোরির মধ্যে স্থানান্তরিত হতে পারা ডেটার পরিমাণ দ্বিগুণ করে মেমোরি থ্রুপুট বাড়িয়ে দেয়',
          },
          {
            en: 'It causes the physical weight of the computer motherboard to double immediately',
            bn: 'এর ফলে কম্পিউটার মাদারবোর্ডের ওজন সাথে সাথে দ্বিগুণ বৃদ্ধি পায়',
          },
          {
            en: 'It restricts the computer to running only one program every 24 hours',
            bn: 'এটি কম্পিউটারকে প্রতি ২৪ ঘণ্টায় মাত্র একটি প্রোগ্রাম চালানোর মধ্যে সীমাবদ্ধ করে',
          },
          {
            en: 'It turns off the CPU cooling heatsink fan automatically to save power',
            bn: 'এটি বিদ্যুৎ সাশ্রয়ের জন্য স্বয়ংক্রিয়ভাবে প্রসেসরের কুলিং ফ্যান বন্ধ করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'A wider data bus carries more bits in parallel on each electrical clock tick.',
          bn: 'একটি প্রশস্ত ডেটা বাস প্রতিটি ক্লক টিকের সাথে সমান্তরালে বেশি বিট বহন করতে পারে।',
        },
        explanation: {
          en: 'A 64-bit data bus moves 8 bytes per transfer cycle compared to 4 bytes on a 32-bit bus, effectively doubling memory data bandwidth at the same clock frequency.',
          bn: '৬৪-বিট ডেটা বাস প্রতি সাইকেলে ৮ বাইট স্থানান্তর করে যেখানে ৩২-বিট বাসে মাত্র ৪ বাইট সম্ভব হতো, ফলে মেমোরি ব্যান্ডউইথ দ্বিগুণ হয়ে যায়।',
        },
      },
      {
        id: 'ca-meet-qz-4',
        kind: 'mcq',
        topic: 'mitigating-memory-bottlenecks',
        question: {
          en: 'Which modern hardware architectural innovation is specifically employed to alleviate the performance penalty of the von Neumann memory bottleneck?',
          bn: 'ভন নিউম্যান মেমোরি বটলনেকের ক্ষতিকর প্রভাব কমাতে আধুনিক হার্ডওয়্যারে কোন নির্দিষ্ট আর্কিটেকচারাল প্রযুক্তি ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'Integrated multi-level on-chip SRAM caches (L1, L2, L3) with separate instruction and data caches close to execution units',
            bn: 'প্রসেসর চিপের ভেতরেই সমন্বিত মাল্টি-লেভেল এস-র‍্যাম ক্যাশ ( এল ১ , এল ২ , এল ৩ ) যেখানে নির্দেশ ও ডেটার জন্য পৃথক ক্যাশ থাকে',
          },
          {
            en: 'Connecting computer sound cards directly to home water pipes',
            bn: 'কম্পিউটারের সাউন্ড কার্ডকে সরাসরি বাসার পানির পাইপের সাথে সংযুক্ত করা',
          },
          {
            en: 'Replacing all semiconductor transistors with mechanical brass switches',
            bn: 'সকল সেমিকন্ডাক্টর ট্রানজিস্টরকে প্রাচীন মেকানিক্যাল সুইচে রূপান্তর করা',
          },
          {
            en: 'Limiting the maximum CPU clock speed strictly to 100 kilohertz',
            bn: 'সিপিইউ ক্লক স্পিড সর্বোচ্চ ১০০ কিলোহার্টজে সীমাবদ্ধ রাখা',
          },
        ],
        answer: 0,
        hint: {
          en: 'By caching instructions and data on-chip, the CPU rarely has to wait for slow external memory buses.',
          bn: 'চিপের ভেতর ক্যাশ রাখায় সিপিইউকে ধীরগতির মেমোরি বাসের জন্য খুব কমই অপেক্ষা করতে হয়।',
        },
        explanation: {
          en: 'Modern microprocessors place split L1 instruction and data caches right next to execution pipelines, achieving Harvard-style parallel access while preserving von Neumann memory semantics.',
          bn: 'আধুনিক প্রসেসরগুলো এক্সিকিউশন ইউনিটের কাছেই আলাদা এল ১ নির্দেশ ও ডেটা ক্যাশ রাখে, যা ভন নিউম্যান কাঠামো ঠিক রেখেও হার্ভার্ডের মতো দ্রুত সমান্তরাল সুবিধা দেয়।',
        },
      },
    ],
  },
  next: {
    slug: 'bits-binary',
    title: {
      en: 'Binary Data Representation, Two\'s Complement & IEEE 754',
      bn: 'বাইনারি ডেটা রূপায়ন, টু-স কমপ্লিমেন্ট এবং IEEE 754',
    },
  },
};
