import type { Lesson } from '../../../lib/types';

export const CpuCapstoneLesson: Lesson = {
  slug: 'cpu-capstone',
  tech: 'cpu',
  title: {
    en: 'Microprocessor Systems Architecture Capstone',
    bn: 'মাইক্রোপ্রসেসর সিস্টেমস আর্কিটেকচার ক্যাপস্টোন'
  },
  summary: {
    en: 'Synthesize the entire microprocessor stack into a unified architectural engineering model. Trace instructions through the fetch-decode-execute-writeback pipeline, analyze clock frequency trade-offs, evaluate branch prediction and speculative execution buffers, measure multi-core SMP scaling and MESI cache coherency, and benchmark end-to-end throughput on a virtual microprocessor.',
    bn: 'সম্পূর্ণ মাইক্রোপ্রসেসর স্ট্যাককে একটি সমন্বিত আর্কিটেকচারাল ইঞ্জিনিয়ারিং মডেলে রূপান্তর করুন। ফেচ-ডিকোড-এক্সিকিউট-রাইটব্যাক পাইপলাইনের মাধ্যমে নির্দেশের পথ বিশ্লেষণ, ক্লক ফ্রিকোয়েন্সি বিনিময় মূল্যায়ন, ব্রাঞ্চ প্রেডিকশন এবং স্পেকুলেটিভ এক্সিকিউশন বাফার পর্যালোচনা, মাল্টি-কোর SMP স্কেলিং ও MESI ক্যাশ কোহেরেন্সি পরিমাপ এবং একটি ভার্চুয়াল মাইক্রোপ্রসেসরে সামগ্রিক থ্রুপুট মূল্যায়ন সম্পন্ন করুন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'unified-microprocessor-datapath',
      text: {
        en: 'The Complete Modern Microprocessor Datapath',
        bn: 'সম্পূর্ণ আধুনিক মাইক্রোপ্রসেসর ডাটাপাথ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A modern high-performance microprocessor is an orchestration of specialized hardware stages operating in lockstep. The Front-End fetches 4 to 8 instructions per clock cycle from the high-speed L1 Instruction Cache, guided by adaptive branch predictors and Branch Target Buffers (BTB). The Decoder then decomposes complex x86 instructions into simple, RISC-like micro-operations (uOps).',
        bn: 'একটি আধুনিক উচ্চক্ষমতাসম্পন্ন মাইক্রোপ্রসেসর হলো সুনির্দিষ্ট হার্ডওয়্যার ধাপের একটি সমন্বিত রূপ যা অত্যন্ত সুশৃঙ্খলভাবে একসাথে কাজ করে। ফ্রন্ট-এন্ড ইউনিট উন্নত ব্রাঞ্চ প্রেডিক্টর এবং ব্রাঞ্চ টার্গেট বাফারের (BTB) সহায়তায় উচ্চগতির L1 নির্দেশ ক্যাশ থেকে প্রতি ক্লক সাইকেলে ৪ থেকে ৮ টি নির্দেশ ফেচ করে। এরপর ডিকোডার জটিল x86 নির্দেশসমূহকে সহজ, RISC-সদৃশ মাইক্রো-অপারেশনে (uOps) রূপান্তর করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Next, the Out-of-Order Execution Engine renames architectural registers to eliminate false register dependencies (Write-After-Write and Write-After-Read hazards). Micro-operations are dispatched into Reservation Stations and dispatched to independent Execution Ports containing integer ALUs, SIMD vector engines, and floating-point units. Results are calculated out of order as operands become ready. Finally, the Reorder Buffer (ROB) ensures all instructions commit to architectural state in strict original program order, preserving precise exceptions and squashing speculative paths during branch mispredictions.',
        bn: 'এরপর আউট-অফ-অর্ডার এক্সিকিউশন ইঞ্জিন রেজিস্টার রিনেইমিংয়ের মাধ্যমে কৃত্রিম ডিপেন্ডেন্সি ( WAW এবং WAR হ্যাজার্ড ) দূর করে। মাইক্রো-অপারেশনগুলোকে রিজার্ভেশন স্টেশনে পাঠানো হয় এবং সেখান থেকে বিভিন্ন এক্সিকিউশন পোর্টের পূর্ণসংখ্যার ALU, SIMD ভেক্টর ইঞ্জিন ও ফ্লোটিং-পয়েন্ট ইউনিটে প্রেরণ করা হয়। অপারেন্ড প্রস্তুত হওয়ামাত্র আউট-অফ-অর্ডার পদ্ধতিতে ফলাফল হিসাব করা হয়। সবশেষে রিঅর্ডার বাফার (ROB) নিশ্চিত করে যে সমস্ত নির্দেশ যেন মূল প্রোগ্রামের ধারাবাহিক ক্রমানুসারে কমিট হয়, যা সিস্টেমের সঠিক ব্যতিক্রম (precise exceptions) রক্ষা করে এবং ভুল অনুমানের পথ বাতিল করে।'
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'Full Superscalar Out-of-Order Microprocessor Architecture',
        bn: 'সম্পূর্ণ সুপারস্কেলার আউট-অফ-অর্ডার মাইক্রোপ্রসেসর আর্কিটেকচার'
      },
      svg: `<svg viewBox="0 0 840 480" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="End-to-end modern superscalar out-of-order processor architecture diagram">
  <rect width="840" height="480" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">COMPLETE SUPERSCALAR OUT-OF-ORDER PROCESSOR DATAPATH</text>
  
  <!-- Front End: Fetch & Decode -->
  <g transform="translate(30, 48)">
    <rect width="230" height="200" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="115" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">FRONT-END (IN-ORDER)</text>
    
    <rect x="15" y="38" width="200" height="34" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="115" y="58" fill="#cbd5e1" font-size="10" text-anchor="middle">Branch Predictor &amp; BTB</text>
    
    <rect x="15" y="80" width="200" height="34" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="115" y="100" fill="#cbd5e1" font-size="10" text-anchor="middle">Instruction Fetch (L1-I Cache)</text>
    
    <rect x="15" y="122" width="200" height="34" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="115" y="142" fill="#cbd5e1" font-size="10" text-anchor="middle">Instruction Decode (to uOps)</text>
    
    <rect x="15" y="164" width="200" height="26" rx="4" fill="#0369a1" fill-opacity="0.2" stroke="#38bdf8"/>
    <text x="115" y="181" fill="#7dd3fc" font-size="9" font-weight="bold" text-anchor="middle">Decode Width: 4-8 uOps/cycle</text>
  </g>
  
  <!-- Arrow to Middle -->
  <path d="M 260,148 L 300,148" fill="none" stroke="#64748b" stroke-width="2"/>
  <polygon points="300,148 290,143 290,153" fill="#64748b"/>
  
  <!-- Out of Order Engine -->
  <g transform="translate(305, 48)">
    <rect width="250" height="200" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="125" y="24" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">EXECUTION (OUT-OF-ORDER)</text>
    
    <rect x="15" y="38" width="220" height="32" rx="4" fill="#0f172a" stroke="#d97706"/>
    <text x="125" y="58" fill="#cbd5e1" font-size="10" text-anchor="middle">Register Renaming &amp; Alloc</text>
    
    <rect x="15" y="78" width="220" height="32" rx="4" fill="#0f172a" stroke="#d97706"/>
    <text x="125" y="98" fill="#cbd5e1" font-size="10" text-anchor="middle">Reservation Stations (Sched)</text>
    
    <!-- Execution Units Grid -->
    <g transform="translate(15, 118)">
      <rect x="0" y="0" width="50" height="70" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="25" y="32" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">ALU 0</text>
      <text x="25" y="48" fill="#94a3b8" font-size="8" text-anchor="middle">Int Add</text>
      
      <rect x="56" y="0" width="50" height="70" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="81" y="32" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">ALU 1</text>
      <text x="81" y="48" fill="#94a3b8" font-size="8" text-anchor="middle">Int Mul</text>
      
      <rect x="112" y="0" width="50" height="70" rx="4" fill="#0f172a" stroke="#a855f7"/>
      <text x="137" y="32" fill="#a855f7" font-size="9" font-weight="bold" text-anchor="middle">FPU</text>
      <text x="137" y="48" fill="#94a3b8" font-size="8" text-anchor="middle">Float/SIMD</text>
      
      <rect x="168" y="0" width="52" height="70" rx="4" fill="#0f172a" stroke="#38bdf8"/>
      <text x="194" y="32" fill="#38bdf8" font-size="9" font-weight="bold" text-anchor="middle">AGU</text>
      <text x="194" y="48" fill="#94a3b8" font-size="8" text-anchor="middle">Load/Store</text>
    </g>
  </g>
  
  <!-- Arrow to Back End -->
  <path d="M 555,148 L 595,148" fill="none" stroke="#64748b" stroke-width="2"/>
  <polygon points="595,148 585,143 585,153" fill="#64748b"/>
  
  <!-- Back End: Retirement -->
  <g transform="translate(600, 48)">
    <rect width="210" height="200" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="105" y="24" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">RETIREMENT (IN-ORDER)</text>
    
    <rect x="15" y="38" width="180" height="42" rx="4" fill="#0f172a" stroke="#059669"/>
    <text x="105" y="58" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">Reorder Buffer (ROB)</text>
    <text x="105" y="72" fill="#94a3b8" font-size="9" text-anchor="middle">In-flight State Tracking</text>
    
    <rect x="15" y="90" width="180" height="42" rx="4" fill="#0f172a" stroke="#059669"/>
    <text x="105" y="110" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">Architectural Commit</text>
    <text x="105" y="124" fill="#94a3b8" font-size="9" text-anchor="middle">Permanent Register File</text>
    
    <rect x="15" y="142" width="180" height="46" rx="4" fill="#047857" fill-opacity="0.2" stroke="#10b981"/>
    <text x="105" y="160" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">Retires 4-8 uOps/cycle</text>
    <text x="105" y="174" fill="#6ee7b7" font-size="9" text-anchor="middle">Squashes bad paths</text>
  </g>
  
  <!-- Memory Hierarchy Bar -->
  <g transform="translate(30, 270)">
    <rect width="780" height="185" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <text x="390" y="26" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">HIERARCHICAL MEMORY WALL &amp; COHERENCY BUS</text>
    
    <rect x="25" y="42" width="165" height="125" rx="6" fill="#0f172a" stroke="#38bdf8"/>
    <text x="107" y="66" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">L1 DATA CACHE</text>
    <text x="107" y="88" fill="#cbd5e1" font-size="10" text-anchor="middle">Size: 32-64 KB</text>
    <text x="107" y="108" fill="#cbd5e1" font-size="10" text-anchor="middle">Latency: 4 Cycles</text>
    <text x="107" y="130" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">Hit Rate: ~90%</text>
    <text x="107" y="150" fill="#94a3b8" font-size="9" text-anchor="middle">Private per core</text>
    
    <rect x="210" y="42" width="165" height="125" rx="6" fill="#0f172a" stroke="#0284c7"/>
    <text x="292" y="66" fill="#0284c7" font-size="12" font-weight="bold" text-anchor="middle">L2 CACHE</text>
    <text x="292" y="88" fill="#cbd5e1" font-size="10" text-anchor="middle">Size: 512KB - 2MB</text>
    <text x="292" y="108" fill="#cbd5e1" font-size="10" text-anchor="middle">Latency: 14 Cycles</text>
    <text x="292" y="130" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">Hit Rate: ~7%</text>
    <text x="292" y="150" fill="#94a3b8" font-size="9" text-anchor="middle">Private or Shared</text>
    
    <rect x="395" y="42" width="175" height="125" rx="6" fill="#0f172a" stroke="#0369a1"/>
    <text x="482" y="66" fill="#7dd3fc" font-size="12" font-weight="bold" text-anchor="middle">L3 SHARED CACHE</text>
    <text x="482" y="88" fill="#cbd5e1" font-size="10" text-anchor="middle">Size: 16 - 64 MB</text>
    <text x="482" y="108" fill="#cbd5e1" font-size="10" text-anchor="middle">Latency: 50 Cycles</text>
    <text x="482" y="130" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">Hit Rate: ~2.5%</text>
    <text x="482" y="150" fill="#94a3b8" font-size="9" text-anchor="middle">MESI Interconnect Ring</text>
    
    <rect x="590" y="42" width="165" height="125" rx="6" fill="#0f172a" stroke="#ef4444"/>
    <text x="672" y="66" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">MAIN MEMORY (DRAM)</text>
    <text x="672" y="88" fill="#cbd5e1" font-size="10" text-anchor="middle">Size: 16 - 128 GB</text>
    <text x="672" y="108" fill="#cbd5e1" font-size="10" text-anchor="middle">Latency: 200 Cycles</text>
    <text x="672" y="130" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">Miss Penalty: SEVERE</text>
    <text x="672" y="150" fill="#94a3b8" font-size="9" text-anchor="middle">The Memory Wall</text>
  </g>
</svg>`,
      caption: {
        en: 'The complete microprocessor pipeline combines in-order front-end decoding, out-of-order execution, in-order retirement (ROB), and multi-level caching to conquer the memory wall.',
        bn: 'সম্পূর্ণ মাইক্রোপ্রসেসর পাইপলাইনে ইন-অর্ডার ফ্রন্ট-এন্ড ডিকোডিং, আউট-অফ-অর্ডার এক্সিকিউশন, ইন-অর্ডার রিটায়ারমেন্ট (ROB) এবং মেমোরি ওয়াল অতিক্রম করতে বহুস্তরীয় ক্যাশ ব্যবহৃত হয়।'
      },
    },
    {
      type: 'heading',
      id: 'iron-law-memory-wall',
      text: {
        en: 'The Iron Law of Processor Performance & The Memory Wall',
        bn: 'প্রসেসর পারফরম্যান্সের আয়রন ল এবং মেমোরি ওয়াল'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The execution performance of any digital computer program is mathematically governed by the Iron Law of Processor Performance: Execution Time equals (Instructions per Program) multiplied by (Average Clock Cycles per Instruction, CPI) multiplied by (Clock Cycle Duration, seconds). System architects attack bottlenecks across all layers: toolchains generate tighter binary code, execution engines extract parallel micro-operations, and silicon fabs shrink transistor switching delays.',
        bn: 'যেকোনো ডিজিটাল কম্পিউটার প্রোগ্রামের কার্যকাল গাণিতিকভাবে প্রসেসর পারফরম্যান্সের আয়রন ল ( Iron Law ) দ্বারা নির্ধারিত হয়: এক্সিকিউশন সময় = ( প্রোগ্রাম প্রতি মোট নির্দেশ ) গুণন ( নির্দেশ প্রতি গড় ক্লক সাইকেল, CPI ) গুণন ( প্রতি সাইকেলের সময়কাল বা ক্লক পিরিয়ড )। প্রকৌশলীরা সমস্ত স্তরে গতির বাধা দূর করেন: টুলচেইন আরও নিখুঁত বাইনারি কোড তৈরি করে, এক্সিকিউশন ইঞ্জিন সমান্তরাল মাইক্রো-অপারেশন কার্যকর করে এবং সিলিকন ল্যাব ট্রানজিস্টরের স্যুইচিং বিলম্ব কমিয়ে আনে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The greatest obstacle facing modern microarchitectures is the Memory Wall: while arithmetic execution speeds have increased by thousands of times, main memory DRAM access latencies have only improved marginally. Fetching data from DDR5 RAM requires approximately 200 clock cycles. A CPU that misses its caches will spend up to 70 percent of its time completely stalled waiting for memory. Thus, deep caches, hardware prefetchers, and out-of-order execution are designed primarily to mask memory latency.',
        bn: 'আধুনিক মাইক্রোপ্রসেসরের প্রধান চ্যালেঞ্জ হলো মেমোরি ওয়াল ( Memory Wall ): গাণিতিক হিসাবের গতি হাজার গুণ বাড়লেও মূল DRAM মেমোরির অ্যাক্সেস সময় খুব সামান্যই উন্নত হয়েছে। DDR5 র‍্যাম থেকে ডাটা আনতে প্রায় ২০০ ক্লক সাইকেল সময় লাগে। কোনো সিপিইউর ক্যাশ মিস ঘটলে তার মোট সময়ের ৭০ শতাংশই কেবল মেমোরির জন্য অলস বসে অপচয় হয়। এই কারণেই গভীর ক্যাশ হায়ারার্কি, হার্ডওয়্যার প্রিফেচার এবং আউট-অফ-অর্ডার ইঞ্জিন মেমোরির এই দীর্ঘ বিলম্ব ঢাকতে তৈরি করা হয়েছে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'processor-capstone-sim.js',
      code: `// Virtual Microprocessor Systems Benchmark Simulation
// Computes Average Memory Access Time (AMAT), Effective CPI, IPC, and Runtime

class MicroprocessorBenchmark {
  constructor(clockSpeedGHz) {
    this.clockSpeedGHz = clockSpeedGHz; // e.g. 4.0 GHz
    this.cycleTimeNs = 1.0 / clockSpeedGHz; // 0.25 ns
  }

  evaluateWorkload(totalInstructions) {
    // Instruction mix breakdown
    const branchRatio = 0.20;      // 20% branch instructions
    const memoryRatio = 0.35;      // 35% memory loads/stores
    const baseALUCPI = 0.50;       // Superscalar 2-wide execution base

    // Branch predictor parameters
    const branchMispredictRate = 0.04; // 96% accuracy, 4% mispredicted
    const branchFlushPenalty = 16;      // 16 cycle pipeline flush penalty
    const branchStallCPI = branchRatio * branchMispredictRate * branchFlushPenalty;

    // Cache hierarchy parameters (latencies in cycles)
    const l1HitRate = 0.90;   const l1Latency = 4;
    const l2HitRate = 0.07;   const l2Latency = 14;
    const l3HitRate = 0.025;  const l3Latency = 50;
    const dramMissRate = 0.005; const dramLatency = 200;

    // AMAT = sum of (probability * latency)
    const amatCycles = (l1HitRate * l1Latency) +
                       (l2HitRate * l2Latency) +
                       (l3HitRate * l3Latency) +
                       (dramMissRate * dramLatency);

    // Memory stall penalty added over fast L1 access
    const memoryStallCPI = memoryRatio * (amatCycles - l1Latency);

    // Total Effective CPI and IPC
    const effectiveCPI = baseALUCPI + branchStallCPI + memoryStallCPI;
    const effectiveIPC = 1.0 / effectiveCPI;

    // Total execution cycles and time
    const totalCycles = totalInstructions * effectiveCPI;
    const totalTimeMs = (totalCycles * this.cycleTimeNs) / 1000000;

    return {
      amatCycles: amatCycles.toFixed(2),
      effectiveCPI: effectiveCPI.toFixed(3),
      effectiveIPC: effectiveIPC.toFixed(2),
      totalCycles: Math.round(totalCycles),
      totalTimeMs: totalTimeMs.toFixed(3),
    };
  }
}

const cpu = new MicroprocessorBenchmark(4.0);
const benchmark = cpu.evaluateWorkload(1000000);

console.log('=== Virtual 4.0 GHz Microprocessor Capstone Benchmark ===');
console.log('Workload Instructions  : 1000000');
console.log('Average Memory Latency : ' + benchmark.amatCycles + ' cycles');
console.log('Effective CPI          : ' + benchmark.effectiveCPI + ' cycles/inst');
console.log('Effective IPC          : ' + benchmark.effectiveIPC + ' inst/cycle');
console.log('Total Execution Cycles : ' + benchmark.totalCycles);
console.log('Total Wall Time        : ' + benchmark.totalTimeMs + ' ms');`,
      caption: {
        en: 'Virtual microprocessor simulation computes AMAT, Effective CPI, and execution runtime for 1000000 instructions at 4.0 GHz.',
        bn: 'ভার্চুয়াল মাইক্রোপ্রসেসর সিমুলেশন ৪.০ গিগাহার্টজে ১০০০০০০ নির্দেশের জন্য AMAT, কার্যকরী CPI এবং মোট কার্যকাল গণনা করে।'
      },
    },
    {
      type: 'callout',
      kind: 'success',
      title: {
        en: 'Mechanical Sympathy: Writing Hardware-Aware Software',
        bn: 'মেকানিক্যাল সিম্প্যাথি: হার্ডওয়্যার-সচেতন সফটওয়্যার তৈরি'
      },
      text: {
        en: 'Software engineering achieves peak efficiency when code harmonizes with processor architecture. By laying out memory in contiguous flat arrays rather than scattered pointer-linked nodes, modern software maximizes 64-byte cache line utilization and hardware spatial prefetchers. By keeping critical loop branches predictable and avoiding false sharing across threads, applications run up to 10 times faster without changing the underlying algorithm.',
        bn: 'সফটওয়্যার ইঞ্জিনিয়ারিং সর্বোচ্চ দক্ষতা অর্জন করে যখন কোড প্রসেসর আর্কিটেকচারের সাথে সামঞ্জস্য রেখে তৈরি করা হয়। বিচ্ছিন্ন পয়েন্টার-ভিত্তিক নোডের বদলে মেমোরিকে পাশাপাশি সাজানো ফ্ল্যাট অ্যারেতে বিন্যস্ত করলে আধুনিক সফটওয়্যার ৬৪ বাইট ক্যাশ লাইন ও প্রিফেচারের পূর্ণ সুবিধা নিতে পারে। জটিল লুপের ব্রাঞ্চকে সহজে অনুমানযোগ্য রেখে এবং থ্রেডগুলোর মাঝে ফলস শেয়ারিং দূর করে একই অ্যালগরিদমের গতি ১০ গুণ পর্যন্ত বৃদ্ধি করা সম্ভব।'
      },
    },
  ],
  exercises: [
    {
      id: 'cpu-cap-ex-1',
      kind: 'predict',
      question: {
        en: 'If a superscalar CPU front-end decodes 4 instructions every cycle, how many total instructions can execute across 5 clock cycles under ideal conditions? (4 * 5 = 20). Type the number.',
        bn: 'যদি একটি সুপারস্কেলার সিপিইউর ফ্রন্ট-এন্ড প্রতি সাইকেলে ৪ টি নির্দেশ ডিকোড করে, তবে আদর্শ অবস্থায় ৫ টি ক্লক সাইকেলে মোট কতটি নির্দেশ সম্পন্ন হতে পারে? ( ৪ * ৫ = ২০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '20',
      hint: {
        en: 'Multiply 4 instructions per cycle by 5 clock cycles: 4 * 5 = 20.',
        bn: 'প্রতি সাইকেলে ৪ টি নির্দেশকে ৫ টি ক্লক সাইকেল দিয়ে গুণ করুন: ৪ * ৫ = ২০।'
      },
      explanation: {
        en: 'A 4-wide superscalar engine executing across 5 clock cycles processes 4 * 5 = 20 instructions.',
        bn: 'একটি ৪-ওয়াইড সুপারস্কেলার ইঞ্জিন ৫ টি ক্লক সাইকেলে মোট ৪ * ৫ = ২০ টি নির্দেশ সম্পন্ন করে।'
      },
    },
    {
      id: 'cpu-cap-ex-2',
      kind: 'mcq',
      question: {
        en: 'What critical architectural responsibility does the Reorder Buffer (ROB) perform in an Out-of-Order (OoO) superscalar microprocessor?',
        bn: 'একটি আউট-অফ-অর্ডার (OoO) সুপারস্কেলার মাইক্রোপ্রসেসরে রিঅর্ডার বাফার (ROB) কোন গুরুত্বপূর্ণ আর্কিটেকচারাল দায়িত্ব পালন করে?'
      },
      options: [
        {
          en: 'It tracks in-flight speculative instructions and guarantees that results commit to architectural register state in strict original program order, preserving precise exceptions',
          bn: 'এটি সমস্ত চলমান স্পেকুলেটিভ নির্দেশের ওপর নজর রাখে এবং ফলাফলগুলো যেন মূল প্রোগ্রামের সঠিক ক্রমানুসারে কমিট হয় তা নিশ্চিত করে precise exception রক্ষা করে',
        },
        {
          en: 'It increases the physical voltage from the power outlet to overclock the RAM',
          bn: 'এটি র‍্যাম ওভারক্লক করার জন্য পাওয়ার আউটলেট থেকে বৈদ্যুতিক ভোল্টেজ বৃদ্ধি করে',
        },
        {
          en: 'It renders 3D graphics polygons onto the computer monitor screen',
          bn: 'এটি কম্পিউটার মনিটর স্ক্রিনে থ্রিডি গ্রাফিক্স পলিগন রেন্ডার করে',
        },
        {
          en: 'It reads sound waves from the microphone to generate text transcripts',
          bn: 'এটি মাইক্রোফোন থেকে শব্দ তরঙ্গ পড়ে টেক্সট রূপান্তর তৈরি করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Instructions execute out of order for speed, but they must retire in order to preserve program correctness.',
        bn: 'গতির জন্য নির্দেশ আউট-অফ-অর্ডারে চললেও সঠিকতা রক্ষার জন্য ইন-অর্ডারে সমাপ্ত হতে হয়।',
      },
      explanation: {
        en: 'The ROB buffers execution results and commits them strictly in original program order, allowing mispredicted speculative paths and software exceptions to be handled cleanly.',
        bn: 'রিঅর্ডার বাফার ফলাফলগুলো সাময়িকভাবে ধারণ করে এবং মূল ক্রম মেনে কমিট করে, যার ফলে ভুল অনুমানের পথ ও সফটওয়্যার ব্যতিক্রম সহজে সামলানো যায়।'
      },
    },
    {
      id: 'cpu-cap-ex-3',
      kind: 'mcq',
      question: {
        en: 'What architectural term describes the growing performance gap between rapid processor compute capabilities and comparatively sluggish main DRAM access latency?',
        bn: 'কোন আর্কিটেকচারাল পরিভাষা দ্রুত বর্ধনশীল প্রসেসর কম্পিউট গতি এবং তুলনামূলক ধীরগতির মূল DRAM মেমোরি অ্যাক্সেস সময়ের ব্যবধানকে প্রকাশ করে?'
      },
      options: [
        {
          en: 'The Memory Wall',
          bn: 'দ্য মেমোরি ওয়াল ( The Memory Wall )',
        },
        {
          en: 'The Silicon Desert',
          bn: 'দ্য সিলিকন ডেজার্ট ( The Silicon Desert )',
        },
        {
          en: 'The Transistor Trench',
          bn: 'দ্য ট্রানজিস্টর ট্রেঞ্চ ( The Transistor Trench )',
        },
        {
          en: 'The Motherboard Canyon',
          bn: 'দ্য মাদারবোর্ড ক্যানিয়ন ( The Motherboard Canyon )',
        },
      ],
      answer: 0,
      hint: {
        en: 'The disparity between CPU clock cycle times and off-chip RAM access times.',
        bn: 'সিপিইউ ক্লক সাইকেল এবং চিপের বাইরের র‍্যাম অ্যাক্সেস সময়ের মধ্যে বিরাট পার্থক্য।',
      },
      explanation: {
        en: 'The Memory Wall highlights that while CPU arithmetic operations take fractions of a nanosecond, reading from DRAM takes hundreds of cycles, bottlenecking system performance.',
        bn: 'মেমোরি ওয়াল প্রকাশ করে যে সিপিইউতে এক ন্যানোসেকেন্ডেরও কম সময়ে হিসাব হলেও DRAM থেকে ডাটা আনতে শত শত সাইকেল লেগে যায়, যা সিস্টেমে গতির বাধা তৈরি করে।'
      },
    },
    {
      id: 'cpu-cap-ex-4',
      kind: 'predict',
      question: {
        en: 'If a program executes 100 instructions and 20 of them are branches, with a 95 percent branch prediction accuracy, how many branch mispredictions occur? (20 * 0.05 = 1). Type the single digit.',
        bn: 'যদি একটি প্রোগ্রাম ১০০ টি নির্দেশ কার্যকর করে এবং তাদের মধ্যে ২০ টি ব্রাঞ্চ নির্দেশ হয়, যার ব্রাঞ্চ প্রেডিকশন নির্ভুলতা ৯৫ শতাংশ, তবে কতটি ব্রাঞ্চ ভুল অনুমান ঘটবে? ( ২০ * ০.০৫ = ১ )। একক সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Calculate 5 percent of 20 branch instructions: 20 * 0.05 = 1.',
        bn: '২০ টি ব্রাঞ্চ নির্দেশের ৫ শতাংশ হিসাব করুন: ২০ * ০.০৫ = ১।'
      },
      explanation: {
        en: 'With 20 branches and a 95 percent success rate, exactly 20 * 0.05 = 1 branch misprediction takes place.',
        bn: '৯৫ শতাংশ নির্ভুলতায় ২০ টি ব্রাঞ্চের মধ্যে ঠিক ২০ * ০.০৫ = ১ টি ভুল অনুমান ঘটে।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Microprocessor Systems Architecture Capstone Quiz',
      bn: 'মাইক্রোপ্রসেসর সিস্টেমস আর্কিটেকচার ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'cpu-cap-qz-1',
        kind: 'mcq',
        topic: 'superscalar-out-of-order-execution',
        question: {
          en: 'In modern superscalar microprocessors, why are instructions fetched and decoded in order, executed out of order, and then retired in order?',
          bn: 'আধুনিক সুপারস্কেলার মাইক্রোপ্রসেসরে কেন নির্দেশসমূহ ধারাবাহিকভাবে ফেচ ও ডিকোড করা হয়, আউট-অফ-অর্ডারে নির্বাহ করা হয় এবং পুনরায় ধারাবাহিকভাবে সম্পন্ন (retire) করা হয়?'
        },
        options: [
          {
            en: 'Out-of-order execution keeps execution units busy by running ready instructions immediately, while in-order retirement guarantees deterministic program correctness and precise exception handling',
            bn: 'আউট-অফ-অর্ডার এক্সিকিউশন প্রস্তুত নির্দেশ আগে চালিয়ে ইউনিটগুলোকে ব্যস্ত রাখে, অন্যদিকে ইন-অর্ডার রিটায়ারমেন্ট প্রোগ্রামের সঠিকতা ও নিখুঁত ব্যতিক্রম পরিচালনা নিশ্চিত করে',
          },
          {
            en: 'Because computer hardware cannot execute more than one instruction per minute',
            bn: 'কারণ কম্পিউটার হার্ডওয়্যার মিনিটে ১ টির বেশি নির্দেশ চালাতে পারে না',
          },
          {
            en: 'To slow down processor speed so that human users can read binary text on screen',
            bn: 'প্রসেসরের গতি কমিয়ে আনা যাতে সাধারণ মানুষ স্ক্রিনে বাইনারি লেখা পড়তে পারে',
          },
          {
            en: 'Because computer chips can only compute data during midnight hours',
            bn: 'কারণ কম্পিউটার চিপ কেবল মধ্যরাতের সময়ে ডাটা গণনা করতে পারে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Extracting instruction parallelism while guaranteeing programmatic safety.',
          bn: 'নির্দেশের সমান্তরাল গতি বাড়ানোর পাশাপাশি সফটওয়্যারের সঠিকতা অক্ষুণ্ণ রাখা।',
        },
        explanation: {
          en: 'Executing instructions out of order hides memory and dependency stalls, while the Reorder Buffer retires instructions strictly in program order so software behaves as expected.',
          bn: 'আউট-অফ-অর্ডারে চালালে মেমোরির অলস সময় ঢেকে রাখা যায় এবং রিঅর্ডার বাফার মূল ক্রমানুসারে সমাপ্ত করায় সফটওয়্যার স্বাভাবিক আচরণ করে।'
        },
      },
      {
        id: 'cpu-cap-qz-2',
        kind: 'mcq',
        topic: 'iron-law-processor-performance',
        question: {
          en: 'According to the Iron Law of Processor Performance, what three multiplicative factors dictate the execution runtime of a software program?',
          bn: 'প্রসেসর পারফরম্যান্সের আয়রন ল অনুসারে কোন ৩ টি গুণনীয়ক একটি সফটওয়্যার প্রোগ্রামের কার্যকাল নির্ধারণ করে?'
        },
        options: [
          {
            en: 'Instructions per Program, Average Cycles per Instruction (CPI), and Clock Cycle Time (seconds per cycle)',
            bn: 'প্রোগ্রাম প্রতি মোট নির্দেশ, নির্দেশ প্রতি গড় সাইকেল (CPI) এবং প্রতি ক্লক সাইকেলের সময়কাল ( সেকেন্ড )',
          },
          {
            en: 'Monitor Refresh Rate, Mouse DPI, and Keyboard Cable Length',
            bn: 'মনিটর রিফ্রেশ রেট, মাউস ডিপিআই এবং কিবোর্ড কেবলের দৈর্ঘ্য',
          },
          {
            en: 'Hard Drive Capacity, Wi-Fi Bandwidth, and Power Cord Color',
            bn: 'হার্ড ড্রাইভের ধারণক্ষমতা, ওয়াইফাই ব্যান্ডউইথ এবং পাওয়ার কর্ডের রঙ',
          },
          {
            en: 'Screen Brightness, Speaker Volume, and Motherboard Weight',
            bn: 'স্ক্রিনের উজ্জ্বলতা, স্পিকারের ভলিউম এবং মাদারবোর্ডের ওজন',
          },
        ],
        answer: 0,
        hint: {
          en: 'Time = Instructions * CPI * Clock Cycle Period.',
          bn: 'সময় = মোট নির্দেশ * CPI * ক্লক সাইকেলের সময়কাল।',
        },
        explanation: {
          en: 'The classic Iron Law establishes that performance depends on instruction count (compiler/ISA), CPI (microarchitecture), and cycle time (silicon technology).',
          bn: 'ঐতিহাসিক আয়রন ল প্রমাণ করে যে কার্যক্ষমতা মোট নির্দেশ ( কম্পাইলার ), CPI ( মাইক্রোআর্কিটেকচার ) এবং সাইকেলের সময়ের ( সিলিকন প্রযুক্তি ) ওপর নির্ভর করে।'
        },
      },
      {
        id: 'cpu-cap-qz-3',
        kind: 'mcq',
        topic: 'hardware-mechanical-sympathy-locality',
        question: {
          en: 'Which software development practice best exemplifies "mechanical sympathy" to maximize CPU cache performance and prefetcher bandwidth?',
          bn: 'সিপিইউ ক্যাশ পারফরম্যান্স এবং প্রিফেচার ব্যান্ডউইথের সর্বোচ্চ সুবিধা নিতে কোন সফটওয়্যার কৌশলটি "মেকানিক্যাল সিম্প্যাথি" এর সবচেয়ে বড় উদাহরণ?'
        },
        options: [
          {
            en: 'Organizing data in contiguous linear arrays (Data-Oriented Design) to exploit spatial locality and sequential 64-byte cache lines, rather than traversing pointer-linked objects scattered in memory',
            bn: 'মেমোরিতে ছড়িয়ে থাকা পয়েন্টার-যুক্ত অবজেক্ট পরিহার করে পাশাপাশি সাজানো লিনিয়ার অ্যারে (ডাটা-ওরিয়েন্টেড ডিজাইন) ব্যবহার করা, যা স্পেশিয়াল লোকালিটি ও ৬৪ বাইট ক্যাশ লাইনের সর্বোচ্চ সুবিধা দেয়',
          },
          {
            en: 'Writing software entirely in uppercase capital letters',
            bn: 'সমস্ত সফটওয়্যার কোড কেবল বড় হাতের অক্ষরে লেখা',
          },
          {
            en: 'Adding arbitrary sleep delays inside every loop iteration',
            bn: 'প্রতিটি লুপের ভেতরে অপ্রয়োজনীয় স্লিপ বা বিলম্ব যোগ করা',
          },
          {
            en: 'Deleting all comments from source code files to reduce electric current',
            bn: 'বিদ্যুৎ খরচ কমাতে সোর্স কোড ফাইল থেকে সমস্ত কমেন্ট মুছে ফেলা',
          },
        ],
        answer: 0,
        hint: {
          en: 'Contiguous memory layout aligns perfectly with CPU cache lines and prefetchers.',
          bn: 'ধারাবাহিক মেমোরি বিন্যাস সিপিইউর ক্যাশ লাইন ও প্রিফেচারের সাথে দারুণভাবে কাজ করে।',
        },
        explanation: {
          en: 'Contiguous arrays take full advantage of 64-byte cache line loads and trigger automatic hardware stream prefetchers, avoiding devastating DRAM access penalties.',
          bn: 'পাশাপাশি থাকা ডাটা ৬৪ বাইট ক্যাশ লাইন এবং অটোমেটিক প্রিফেচারের পূর্ণ সুবিধা গ্রহণ করে, যা DRAM-এর ধীরগতির বিলম্ব থেকে কোডকে রক্ষা করে।'
        },
      },
      {
        id: 'cpu-cap-qz-4',
        kind: 'mcq',
        topic: 'ipc-throughput-metric',
        question: {
          en: 'What primary performance metric reflects the architectural efficiency of a microprocessor pipeline and execution units, independent of clock frequency?',
          bn: 'ক্লক ফ্রিকোয়েন্সির প্রভাব বাদ দিয়ে মাইক্রোপ্রসেসর পাইপলাইন এবং এক্সিকিউশন ইউনিটের আর্কিটেকচারাল দক্ষতা মাপার প্রধান মেট্রিক কোনটি?'
        },
        options: [
          {
            en: 'Instructions Per Cycle (IPC), representing the average number of completed instructions retired per clock cycle',
            bn: 'ইন্সট্রাকশন পার সাইকেল (IPC), যা প্রতি ক্লক সাইকেলে সম্পন্ন হওয়া নির্দেশের গড় সংখ্যা প্রকাশ করে',
          },
          {
            en: 'Motherboard Copper Thickness in millimeters',
            bn: 'মিলিমিটারে মাদারবোর্ডের তামার স্তরের পুরুত্ব',
          },
          {
            en: 'Computer Cooling Fan Maximum Decibel Noise',
            bn: 'কম্পিউটার কুলিং ফ্যানের সর্বোচ্চ ডেসিবেল শব্দমাত্রা',
          },
          {
            en: 'Hard Disk Drive Physical Spin Speed (RPM)',
            bn: 'হার্ড ডিস্ক ড্রাইভের শারীরিক ঘূর্ণন গতি (RPM)',
          },
        ],
        answer: 0,
        hint: {
          en: 'The inverse of CPI, measuring instruction completion rate per cycle.',
          bn: 'CPI-এর বিপরীত মান, যা প্রতি সাইকেলে নির্দেশ সমাপ্তির হার প্রকাশ করে।',
        },
        explanation: {
          en: 'IPC (Instructions Per Cycle) measures how much real work the microarchitecture accomplishes every clock cycle through superscalar execution and latency hiding.',
          bn: 'ইন্সট্রাকশন পার সাইকেল (IPC) পরিমাপ করে যে সুপারস্কেলার ও লেটেন্সি হাইডিং প্রযুক্তির মাধ্যমে মাইক্রোআর্কিটেকচার প্রতি ক্লক সাইকেলে কতটা কার্যকর কাজ সম্পাদন করতে পারছে।'
        },
      },
    ],
  },
};
