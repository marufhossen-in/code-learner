import type { Lesson } from '../../../lib/types';

export const ThreadsVsProcessesLesson: Lesson = {
  slug: 'threads-vs-processes',
  tech: 'threads',
  title: {
    en: 'Threads vs Processes: Memory Isolation & Performance Architecture',
    bn: 'থ্রেড বনাম প্রসেস: মেমোরি আইসোলেশন ও পারফরম্যান্স আর্কিটেকচার'
  },
  summary: {
    en: 'Understand the architectural trade-offs between Multi-Processing and Multi-Threading. Contrast full virtual memory isolation against shared address spaces. Measure real hardware performance differences across creation latency, memory consumption, context-switch penalties, and communication mechanisms. Learn when to choose process isolation versus thread concurrency.',
    bn: 'মাল্টি-প্রসেসিং এবং মাল্টি-থ্রেডিংয়ের মধ্যকার স্থাপত্যগত সুবিধা ও অসুবিধাগুলো বুঝুন। সম্পূর্ণ ভার্চুয়াল মেমোরি আইসোলেশনের সাথে শেয়ার্ড মেমোরি স্পেসের তুলনা করুন। মেমোরি ব্যবহার, সৃষ্টি করতে প্রয়োজনীয় সময়, কনটেক্সট সুইচের খরচ এবং তথ্য বিনিময়ের ভিত্তিতে বাস্তব পারফরম্যান্স মাপুন। নিরাপত্তার জন্য কখন প্রসেস বেছে নেবেন আর গতির জন্য কখন থ্রেড ব্যবহার করবেন তা শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'the-architectural-divide',
      text: {
        en: 'The Architectural Divide: Hardware Isolation versus Shared Memory',
        bn: 'স্থাপত্যগত বিভাজন: হার্ডওয়্যার আইসোলেশন বনাম শেয়ার্ড মেমোরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you design high-concurrency software architectures, choosing between multiple processes or multiple threads represents a fundamental trade-off between fault isolation and operational speed.',
        bn: 'উচ্চ কনকারেন্সির সফটওয়্যার আর্কিটেকচার তৈরির সময় একাধিক প্রসেস নাকি একাধিক থ্রেড ব্যবহার করবেন—সেই সিদ্ধান্তটি মূলত নিরাপত্তা আইসোলেশন এবং কাজের গতির মাঝে একটি গুরুত্বপূর্ণ ভারসাম্য।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A Process provides absolute fault isolation: it possesses a dedicated virtual address space guarded by the CPU Memory Management Unit (MMU). If one process crashes due to a memory error, other processes continue running unaffected. A Thread trades that hardware isolation for speed: all threads share the same heap, allowing instant communication without operating system overhead, but an unhandled crash in one thread terminates the entire application.',
        bn: 'একটি প্রসেস সম্পূর্ণ নিরাপদ আইসোলেশন দেয়: এর নিজস্ব ভার্চুয়াল মেমোরি থাকে যা সিপিইউ MMU দ্বারা সুরক্ষিত। মেমোরি ত্রুটির কারণে একটি প্রসেস ক্র্যাশ করলেও অন্য প্রসেসগুলো অক্ষত থাকে। অন্যদিকে থ্রেড গতির জন্য এই সুরক্ষা ত্যাগ করে: সকল থ্রেড একই হিপ শেয়ার করায় অপারেটিং সিস্টেমের ঝামেলা ছাড়াই দ্রুত তথ্য বিনিময় সম্ভব হয়, তবে একটি থ্রেড ক্র্যাশ করলে পুরো অ্যাপ্লিকেশনটিই বন্ধ হয়ে যায়।'
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Dimension', bn: 'স্থাপত্যগত দিক' },
        { en: 'Process (Multi-Processing)', bn: 'প্রসেস ( মাল্টি-প্রসেসিং )' },
        { en: 'Thread (Multi-Threading)', bn: 'থ্রেড ( মাল্টি-থ্রেডিং )' },
      ],
      rows: [
        [
          { en: 'Virtual Address Space', bn: 'ভার্চুয়াল অ্যাড্রেস স্পেস' },
          { en: 'Strictly isolated by MMU page tables', bn: 'MMU পেজ টেবিল দ্বারা সম্পূর্ণ পৃথক' },
          { en: 'Shared directly across all sibling threads', bn: 'সকল সহোদর থ্রেডের মাঝে সরাসরি শেয়ার্ড' },
        ],
        [
          { en: 'Creation Overhead', bn: 'তৈরি করার সময় ও খরচ' },
          { en: 'Heavy (~1000 µs via fork/exec syscalls)', bn: 'ভারী ( fork/exec দিয়ে প্রায় ১০০০ মাইক্রোসেকেন্ড )' },
          { en: 'Lightweight (~10 to 50 µs via pthread_create)', bn: 'হালকা ( pthread_create দিয়ে প্রায় ১০ থেকে ৫০ মাইক্রোসেকেন্ড )' },
        ],
        [
          { en: 'Memory Footprint', bn: 'মেমোরি খরচ' },
          { en: 'Large (~10MB baseline per process)', bn: 'অধিক ( প্রসেস প্রতি বেসলাইন প্রায় ১০ মেগাবাইট )' },
          { en: 'Small (~2KB green to 8MB native stack)', bn: 'স্বল্প ( ২ কিলোবাইট থেকে ৮ মেগাবাইট স্ট্যাক )' },
        ],
        [
          { en: 'Context-Switch Cost', bn: 'কনটেক্সট সুইচের খরচ' },
          { en: 'Heavy: flushes CPU TLB and page directories', bn: 'ভারী: সিপিইউ TLB ক্যাশ ও পেজ ডিরেক্টরি মুছে ফেলে' },
          { en: 'Light: preserves TLB; only swaps registers', bn: 'হালকা: TLB অক্ষত থাকে, কেবল রেজিস্টার পরিবর্তন হয়' },
        ],
        [
          { en: 'Inter-Unit Communication', bn: 'যোগাযোগ ও তথ্য বিনিময়' },
          { en: 'Slow: requires OS IPC (pipes, sockets, shm)', bn: 'ধীরগতির: ওএস আইপিসি ( পাইপ, সকেট ) প্রয়োজন' },
          { en: 'Instant: zero-copy reads/writes to shared heap', bn: 'তাত্ক্ষণিক: শেয়ার্ড মেমোরিতে সরাসরি রিড ও রাইট' },
        ],
        [
          { en: 'Fault Blast Radius', bn: 'ত্রুটির ক্ষতির বিস্তৃতি' },
          { en: 'Isolated: crashed process does not affect peers', bn: 'সুরক্ষিত: ক্র্যাশ হওয়া প্রসেস অন্যদের ক্ষতি করে না' },
          { en: 'Fatal: single thread crash kills host process', bn: 'মারাত্মক: একটি থ্রেড ক্র্যাশ করলে পুরো প্রসেস মারা যায়' },
        ],
      ],
      caption: {
        en: 'Comparative architectural matrix evaluating performance, isolation, and overhead between processes and threads.',
        bn: 'প্রসেস এবং থ্রেডের পারফরম্যান্স, মেমোরি আইসোলেশন ও খরচের তুলনামূলক বিশ্লেষণ সারণী।'
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'Multi-Processing Isolation vs Multi-Threading Shared Memory Architecture',
        bn: 'মাল্টি-প্রসেসিং আইসোলেশন বনাম মাল্টি-থ্রেডিং শেয়ার্ড মেমোরি আর্কিটেকচার'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Comparison diagram showing multi-processing hardware isolation versus multi-threading shared memory architecture">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">PROCESSES VS THREADS: MEMORY ISOLATION &amp; BLAST RADIUS</text>
  
  <!-- Left Half: Multi-Processing -->
  <g transform="translate(30, 48)">
    <rect width="375" height="350" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <text x="187" y="24" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">MULTI-PROCESSING (HARD ISOLATION)</text>
    
    <!-- Process 1 -->
    <g transform="translate(15, 38)">
      <rect width="345" height="110" rx="6" fill="#0f172a" stroke="#64748b"/>
      <text x="172" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Process A (PID 101)</text>
      <rect x="15" y="32" width="315" height="30" rx="4" fill="#1e293b"/>
      <text x="172" y="52" fill="#cbd5e1" font-size="9" text-anchor="middle">Dedicated Page Table (CR3 Register)</text>
      <rect x="15" y="68" width="150" height="30" rx="4" fill="#064e3b"/>
      <text x="90" y="87" fill="#6ee7b7" font-size="9" text-anchor="middle">Private Heap</text>
      <rect x="180" y="68" width="150" height="30" rx="4" fill="#0284c7"/>
      <text x="255" y="87" fill="#f8fafc" font-size="9" text-anchor="middle">Private Stack</text>
    </g>
    
    <!-- Wall / Boundary -->
    <line x1="15" y1="168" x2="360" y2="168" stroke="#ef4444" stroke-width="2" stroke-dasharray="6 4"/>
    <text x="187" y="184" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">MMU HARDWARE BARRIER (NO DIRECT ACCESS)</text>
    <text x="187" y="198" fill="#94a3b8" font-size="9" text-anchor="middle">Communication requires OS IPC (Pipes/Sockets)</text>
    
    <!-- Process 2 Crashed -->
    <g transform="translate(15, 212)">
      <rect width="345" height="115" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="172" y="24" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Process B (PID 102) [CRASHED]</text>
      <text x="172" y="44" fill="#fca5a5" font-size="9" text-anchor="middle">Null Pointer Exception -> SIGSEGV Exit</text>
      <rect x="20" y="60" width="305" height="40" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="172" y="78" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">BLAST RADIUS CONTAINED!</text>
      <text x="172" y="92" fill="#cbd5e1" font-size="9" text-anchor="middle">Process A continues running without harm</text>
    </g>
  </g>
  
  <!-- Right Half: Multi-Threading -->
  <g transform="translate(435, 48)">
    <rect width="375" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="187" y="24" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">MULTI-THREADING (SHARED MEMORY)</text>
    
    <!-- Host Process Box -->
    <g transform="translate(15, 38)">
      <rect width="345" height="288" rx="6" fill="#0f172a" stroke="#10b981"/>
      <text x="172" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Single Host Process (PID 200)</text>
      
      <!-- Shared Heap -->
      <rect x="15" y="36" width="315" height="45" rx="4" fill="#064e3b" stroke="#10b981"/>
      <text x="172" y="55" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">SHARED HEAP &amp; OPEN SOCKETS</text>
      <text x="172" y="71" fill="#cbd5e1" font-size="9" text-anchor="middle">Zero-copy instant memory read/write</text>
      
      <!-- Thread 1 -->
      <g transform="translate(15, 92)">
        <rect width="150" height="90" rx="4" fill="#1e293b" stroke="#38bdf8"/>
        <text x="75" y="22" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Thread 1 (TID 1)</text>
        <text x="75" y="42" fill="#cbd5e1" font-size="8" text-anchor="middle">Private Stack 1</text>
        <text x="75" y="58" fill="#cbd5e1" font-size="8" text-anchor="middle">Registers: R1..R8</text>
        <text x="75" y="78" fill="#10b981" font-size="8" font-weight="bold" text-anchor="middle">Working on Core 0</text>
      </g>
      
      <!-- Thread 2 Crashed -->
      <g transform="translate(180, 92)">
        <rect width="150" height="90" rx="4" fill="#450a0a" stroke="#ef4444"/>
        <text x="75" y="22" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">Thread 2 (TID 2)</text>
        <text x="75" y="42" fill="#fca5a5" font-size="8" text-anchor="middle">Segfault in Memory!</text>
        <text x="75" y="58" fill="#fca5a5" font-size="8" text-anchor="middle">Triggers SIGSEGV</text>
        <text x="75" y="78" fill="#ef4444" font-size="8" font-weight="bold" text-anchor="middle">FATAL CRASH!</text>
      </g>
      
      <!-- Blast Radius Warning -->
      <rect x="15" y="196" width="315" height="75" rx="4" fill="#450a0a" stroke="#ef4444"/>
      <text x="172" y="218" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">FATAL BLAST RADIUS: PROCESS DIES!</text>
      <text x="172" y="236" fill="#fca5a5" font-size="9" text-anchor="middle">Thread 2 segfault forces OS kernel to terminate</text>
      <text x="172" y="252" fill="#cbd5e1" font-size="9" text-anchor="middle">host PID 200, killing healthy Thread 1 instantly!</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">Processes isolate memory faults at the cost of context-switch overhead; threads offer extreme speed with high blast radius</text>
</svg>`,
      caption: {
        en: 'Processes provide hardware fault isolation via MMU boundaries; threads share memory for ultra-fast communication but share crash blast radius.',
        bn: 'প্রসেস MMU বাধার মাধ্যমে হার্ডওয়্যার নিরাপত্তা দেয়; থ্রেড মেমোরি শেয়ার করে দ্রুত কাজ করলেও ক্র্যাশের ক্ষতি সবাইকে বহন করতে হয়।'
      },
    },
    {
      type: 'heading',
      id: 'benchmark-simulation-code',
      text: {
        en: 'Benchmarking Process vs Thread Latency and Memory Footprint',
        bn: 'প্রসেস বনাম থ্রেড লেটেন্সি এবং মেমোরি খরচের বেঞ্চমার্ক'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe the mathematical difference in hardware consumption between multi-processing and multi-threading, inspect the following benchmark simulator. It calculates memory allocation and context-switch overhead across 100 concurrent tasks.',
        bn: 'মাল্টি-প্রসেসিং এবং মাল্টি-থ্রেডিংয়ের মাঝে মেমোরি খরচ ও পারফরম্যান্সের গাণিতিক ব্যবধান প্রত্যক্ষ করতে নিচের বেঞ্চমার্ক সিমুলেশনটি পর্যালোচনা করুন। এটি ১০০ টি সমান্তরাল কাজের মেমোরি ও কনটেক্সট সুইচের সময় হিসাব করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'process-vs-thread-benchmark.js',
      code: `// Process vs Thread Performance and Resource Benchmark Simulator
// Compares memory allocation and context-switching overhead across 100 tasks

function runArchitectureBenchmark(taskCount = 100) {
  // 1. Multi-Processing Model Metrics
  const processBaseMemoryMB = 10.0;     // Baseline virtual address space & OS tables
  const processSwitchLatencyUs = 5.0;   // MMU CR3 reload + CPU TLB cache invalidation
  const totalProcessMemoryMB = taskCount * processBaseMemoryMB;
  const totalProcessSwitchTimeUs = taskCount * processSwitchLatencyUs;

  // 2. Multi-Threading Model Metrics
  const threadStackMemoryMB = 0.5;      // 512KB private execution stack per thread
  const threadSwitchLatencyUs = 0.5;    // Registers & stack swap only (preserves TLB)
  const hostProcessBaselineMB = 10.0;   // Single parent process container
  const totalThreadMemoryMB = hostProcessBaselineMB + (taskCount * threadStackMemoryMB);
  const totalThreadSwitchTimeUs = taskCount * threadSwitchLatencyUs;

  // 3. Efficiency Calculations
  const memorySavingsPercent = ((totalProcessMemoryMB - totalThreadMemoryMB) / totalProcessMemoryMB) * 100;
  const switchSpeedupRatio = totalProcessSwitchTimeUs / totalThreadSwitchTimeUs;

  return {
    taskCount,
    multiProcess: {
      memoryMB: totalProcessMemoryMB,
      contextSwitchUs: totalProcessSwitchTimeUs
    },
    multiThread: {
      memoryMB: totalThreadMemoryMB,
      contextSwitchUs: totalThreadSwitchTimeUs
    },
    memorySavingsPercent,
    switchSpeedupRatio
  };
}

const benchmark = runArchitectureBenchmark(100);

console.log('=== Step 1: Multi-Processing Footprint (100 Processes) ===');
console.log('Total RAM Consumed:', benchmark.multiProcess.memoryMB, 'MB');
console.log('Total Context Switch Overhead:', benchmark.multiProcess.contextSwitchUs, 'microseconds');

console.log('\\n=== Step 2: Multi-Threading Footprint (100 Threads) ===');
console.log('Total RAM Consumed:', benchmark.multiThread.memoryMB, 'MB');
console.log('Total Context Switch Overhead:', benchmark.multiThread.contextSwitchUs, 'microseconds');

console.log('\\n=== Architectural Efficiency Summary ===');
console.log('Memory Saved by Threading:', benchmark.memorySavingsPercent.toFixed(1) + '%');
console.log('Context Switch Acceleration:', benchmark.switchSpeedupRatio + 'x FASTER');`,
      caption: {
        en: 'The benchmark shows 100 threads save 94 percent RAM and execute context switches 10 times faster than 100 processes.',
        bn: 'বেঞ্চমার্কটি দেখায় ১০০ টি থ্রেড ৯৪ শতাংশ মেমোরি বাঁচায় এবং প্রসেসের তুলনায় ১০ গুণ দ্রুত কনটেক্সট সুইচ সম্পন্ন করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Hybrid Architecture: How Modern Browsers & Node.js Combine Both',
        bn: 'হাইব্রিড আর্কিটেকচার: ব্রাউজার ও Node.js কীভাবে উভয় মডেল ব্যবহার করে'
      },
      text: {
        en: 'Why do modern systems use both models simultaneously? Early web browsers ran as a single process with multiple threads; if a single complex web page hung or crashed, the entire browser window vanished! Today, Google Chrome uses a hybrid architecture. Every open browser tab is isolated in its own operating system Process for security and crash boundaries. Inside each tab, multiple Threads run concurrently to handle DOM rendering, network streaming, and JavaScript execution.',
        bn: 'আধুনিক সিস্টেমগুলো কেন উভয় মডেল একসাথে ব্যবহার করে? শুরুর দিকের ওয়েব ব্রাউজার একটিমাত্র প্রসেসের ভেতর একাধিক থ্রেড নিয়ে চলত; ফলে কোনো একটি ভারী ওয়েব পেজ হ্যাং বা ক্র্যাশ করলে পুরো ব্রাউজারই বন্ধ হয়ে যেত! বর্তমানে গুগল ক্রোম একটি হাইব্রিড মডেল ব্যবহার করে। প্রতিটি খোলা ট্যাবকে নিরাপত্তার স্বার্থে সম্পূর্ণ আলাদা প্রসেসে রাখা হয়। আর প্রতিটি ট্যাবের ভেতরে DOM রেন্ডারিং, নেটওয়ার্ক ডাউনলোড ও স্ক্রিপ্ট চালানোর জন্য একাধিক থ্রেড সমান্তরালভাবে কাজ করে।'
      },
    },
  ],
  exercises: [
    {
      id: 'th-vs-pr-ex-1',
      kind: 'predict',
      topic: "threads-vs-processes",
      question: {
        en: 'If a multi-threaded program spawns 10 threads, how many separate virtual address spaces are allocated by the operating system? (1). Type the number.',
        bn: 'একটি মাল্টি-থ্রেডেড প্রোগ্রাম যদি ১০ টি থ্রেড চালু করে, তবে অপারেটিং সিস্টেম সর্বমোট কয়টি স্বতন্ত্র ভার্চুয়াল অ্যাড্রেস স্পেস বরাদ্দ করে? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'All threads live in the same process: 1 address space.',
        bn: 'সকল থ্রেড একই প্রসেসে বাস করে: ১ টি অ্যাড্রেস স্পেস।'
      },
      explanation: {
        en: 'All 10 threads share the single virtual address space belonging to their parent host process.',
        bn: 'সকল ১০ টি থ্রেড তাদের মূল হোস্ট প্রসেসের একমাত্র ভার্চুয়াল মেমোরি স্পেসটি শেয়ার করে।'
      },
    },
    {
      id: 'th-vs-pr-ex-2',
      kind: 'mcq',
      topic: "threads-vs-processes",
      question: {
        en: 'What is the primary operational advantage of multi-processing over multi-threading in systems architecture?',
        bn: 'সিস্টেম আর্কিটেকচারে মাল্টি-থ্রেডিংয়ের তুলনায় মাল্টি-প্রসেসিংয়ের প্রধান সুবিধা কী?'
      },
      options: [
        {
          en: 'Strong fault isolation: if one process crashes or experiences a memory leak, other processes continue running unaffected',
          bn: 'দৃঢ় ফল্ট আইসোলেশন: একটি প্রসেস ক্র্যাশ করলে বা মেমোরি লিক হলেও অন্য প্রসেসগুলো সম্পূর্ণ অক্ষত অবস্থায় চলতে থাকে',
        },
        {
          en: 'Processes require zero physical RAM memory to execute code',
          bn: 'কোড চালানোর জন্য প্রসেসের কোনো ফিজিক্যাল র‍্যাম মেমোরির প্রয়োজন হয় না',
        },
        {
          en: 'Processes make the computer run without needing electrical power',
          bn: 'প্রসেস ব্যবহার করলে বিদ্যুৎ সংযোগ ছাড়াই কম্পিউটার চলতে পারে',
        },
        {
          en: 'Processes convert text files directly into physical gold coins',
          bn: 'প্রসেস যেকোনো টেক্সট ফাইলকে সরাসরি সোনার মুদ্রায় রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Hardware MMU memory isolation prevents crashes from affecting other processes.',
        bn: 'হার্ডওয়্যার মেমোরি আইসোলেশন একটির ক্র্যাশ থেকে অন্যকে নিরাপদে রক্ষা করে।',
      },
      explanation: {
        en: 'Because processes operate in isolated address spaces, a fatal segmentation fault in one process cannot corrupt neighboring processes.',
        bn: 'যেহেতু প্রতিটি প্রসেস আলাদা মেমোরিতে চলে, তাই একটির মারাত্মক ক্র্যাশ অন্য প্রসেসকে ক্ষতিগ্রস্ত করতে পারে না।'
      },
    },
    {
      id: 'th-vs-pr-ex-3',
      kind: 'mcq',
      topic: "threads-vs-processes",
      question: {
        en: 'Why is a thread context switch significantly faster than a process context switch on modern CPUs?',
        bn: 'আধুনিক সিপিইউতে প্রসেস কনটেক্সট সুইচের তুলনায় থ্রেড কনটেক্সট সুইচ অনেক বেশি দ্রুতগতির কেন?'
      },
      options: [
        {
          en: 'Because threads share the same page table, eliminating the requirement to flush the CPU Translation Lookaside Buffer (TLB) or reload the page directory register',
          bn: 'কারণ থ্রেডগুলো একই পেজ টেবিল শেয়ার করে, ফলে সিপিইউ TLB ক্যাশ মুছে ফেলার বা পেজ ডিরেক্টরি রেজিস্টার পুনরায় লোড করার প্রয়োজন হয় না',
        },
        {
          en: 'Because threads do not use electrical signals inside the CPU chip',
          bn: 'কারণ থ্রেড সিপিইউ চিপের ভেতরে কোনো বৈদ্যুতিক সংকেত ব্যবহার করে না',
        },
        {
          en: 'Because threads only execute on external USB flash drives',
          bn: 'কারণ থ্রেড কেবল এক্সটার্নাল ইউএসবি ফ্ল্যাশ ড্রাইভে চলে',
        },
        {
          en: 'Because threads shut down the computer operating system temporarily',
          bn: 'কারণ থ্রেড কম্পিউটারের অপারেটিং সিস্টেমকে সাময়িকভাবে বন্ধ করে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'TLB cache remains warm because page tables are unchanged.',
        bn: 'পেজ টেবিল পরিবর্তন না হওয়ায় TLB ক্যাশ অক্ষত থাকে।',
      },
      explanation: {
        en: 'A thread context switch only swaps CPU registers and the stack pointer. Process switches require flushing the TLB cache, causing memory latency.',
        bn: 'থ্রেড সুইচে কেবল রেজিস্টার ও স্ট্যাক পয়েন্টার পরিবর্তন হয়। প্রসেস সুইচে সম্পূর্ণ TLB ক্যাশ খালি করতে হয় যা ধীরগতির।'
      },
    },
    {
      id: 'th-vs-pr-ex-4',
      kind: 'predict',
      topic: "threads-vs-processes",
      question: {
        en: 'If a process allocates 10MB of baseline memory and a thread requires 1MB of stack, how many megabytes of total memory do 10 threads in that process consume? (20). Type the number.',
        bn: 'একটি প্রসেস যদি ১০ মেগাবাইট বেসলাইন মেমোরি নেয় এবং প্রতিটি থ্রেডের ১ মেগাবাইট স্ট্যাক লাগে, তবে সেই প্রসেসে ১০ টি থ্রেড সর্বমোট কত মেগাবাইট মেমোরি ব্যবহার করবে? ( ২০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '20',
      hint: {
        en: '10MB baseline + (10 threads * 1MB) = 20MB.',
        bn: '১০ মেগাবাইট বেসলাইন + ( ১০ টি থ্রেড * ১ মেগাবাইট ) = ২০ মেগাবাইট।'
      },
      explanation: {
        en: 'The memory footprint is the single process baseline (10MB) plus 10 thread stacks (10 * 1MB = 10MB), yielding 20MB total.',
        bn: 'মোট মেমোরি হলো প্রসেসের বেসলাইন ১০ মেগাবাইট এবং ১০ টি থ্রেড স্ট্যাকের ১০ মেগাবাইট, অর্থাৎ সর্বমোট ২০ মেগাবাইট।'
      },
    },
  ],
  quiz: {
    id: "threads-vs-processes-quiz",
    title: {
      en: 'Threads vs Processes Architectural Quiz',
      bn: 'থ্রেড বনাম প্রসেস আর্কিটেকচারাল কুইজ'
    },
    questions: [
      {
        id: 'th-vs-pr-qz-1',
        kind: 'mcq',
        topic: 'itc-vs-ipc-throughput',
        question: {
          en: 'Why does Inter-Thread Communication (ITC) achieve substantially higher throughput than Inter-Process Communication (IPC)?',
          bn: 'Inter-Process Communication (IPC)-এর তুলনায় Inter-Thread Communication (ITC) অনেক বেশি ডেটা আদান-প্রদান করতে পারে কেন?'
        },
        options: [
          {
            en: 'Threads communicate via direct zero-copy pointer dereferencing in shared heap memory, whereas processes require kernel system calls, memory copying, and context transitions',
            bn: 'থ্রেডগুলো শেয়ার্ড হিপের মেমোরি পয়েন্টারের মাধ্যমে সরাসরি তথ্য আদান-প্রদান করে, যেখানে প্রসেসের ক্ষেত্রে কার্নেল সিস্টেম কল ও মেমোরি কপির প্রয়োজন হয়',
          },
          {
            en: 'Because threads use light particles instead of electrical electrons',
            bn: 'কারণ থ্রেডগুলো ইলেকট্রনের বদলে আলোর কণা ব্যবহার করে',
          },
          {
            en: 'Because processes can only communicate by writing paper documents',
            bn: 'কারণ প্রসেস কেবল কাগজের চিঠি লিখে যোগাযোগ করতে পারে',
          },
          {
            en: 'Because threads bypass the laws of physics inside the computer',
            bn: 'কারণ থ্রেড কম্পিউটারের ভেতরে পদার্থবিজ্ঞানের নিয়ম অগ্রাহ্য করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Zero-copy shared memory vs kernel system call data copying.',
          bn: 'সরাসরি শেয়ার্ড মেমোরি বনাম কার্নেল সিস্টেম কলের মাধ্যমে ডাটা কপি।',
        },
        explanation: {
          en: 'Threads share memory directly. Passing an object requires passing a pointer (nanoseconds). IPC requires copying bytes across the kernel boundary.',
          bn: 'থ্রেড সরাসরি মেমোরি শেয়ার করে তাই কেবল পয়েন্টার পাঠালেই হয়। কিন্তু আইপিসিতে কার্নেলের মধ্য দিয়ে সমস্ত বাইট কপি করতে হয়।'
        },
      },
      {
        id: 'th-vs-pr-qz-2',
        kind: 'mcq',
        topic: 'browser-multiprocess-shift',
        question: {
          en: 'Why did major web browsers transition from single-process multi-threading to multi-process architectures for tabs?',
          bn: 'ওয়েব ব্রাউজারগুলো বিভিন্ন ট্যাবের জন্য একক প্রসেস মাল্টি-থ্রেডিং ছেড়ে মাল্টি-প্রসেস আর্কিটেকচারে স্থানান্তরিত হলো কেন?'
        },
        options: [
          {
            en: 'To prevent a crash or infinite JavaScript loop in one web tab from freezing or terminating all other tabs and the browser chrome',
            bn: 'যাতে যেকোনো একটি ওয়েব ট্যাবের ক্র্যাশ বা জটিল জাভাস্ক্রিপ্ট লুপের কারণে পুরো ব্রাউজার ও অন্যান্য সমস্ত ট্যাব হ্যাং বা বন্ধ না হয়ে যায়',
          },
          {
            en: 'To increase the physical weight of the laptop computer',
            bn: 'ল্যাপটপ কম্পিউটারের ওজন উল্লেখযোগ্যভাবে বৃদ্ধি করার জন্য',
          },
          {
            en: 'To make internet websites display without using any pixels',
            bn: 'কোনো পিক্সেল ছাড়াই যেন ওয়েব পেজ প্রদর্শিত হতে পারে সেজন্য',
          },
          {
            en: 'Because internet cables only allow process data, not thread data',
            bn: 'কারণ ইন্টারনেট কেবল কেবল প্রসেস ডেটা পাঠাতে পারে, থ্রেড ডেটা নয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Tab crash isolation: one bad webpage cannot kill the entire browser.',
          bn: 'ট্যাব আইসোলেশন: একটি খারাপ ওয়েবসাইট পুরো ব্রাউজার বন্ধ করতে পারে না।',
        },
        explanation: {
          en: 'Multi-process architecture isolates untrusted web code. If a tab runs out of memory or crashes, only that individual tab renderer process dies.',
          bn: 'মাল্টি-প্রসেস মডেল প্রতিটি ট্যাবের কোড আলাদা রাখে। ফলে মেমোরি শেষ হয়ে কোনো ট্যাব বন্ধ হলেও মূল ব্রাউজার সুরক্ষিত থাকে।'
        },
      },
      {
        id: 'th-vs-pr-qz-3',
        kind: 'mcq',
        topic: 'tlb-during-context-switch',
        question: {
          en: 'What happens to the CPU Translation Lookaside Buffer (TLB) during a process context switch?',
          bn: 'প্রসেস কনটেক্সট সুইচের সময় সিপিইউ Translation Lookaside Buffer (TLB)-এর কী ঘটে?'
        },
        options: [
          {
            en: 'The CPU must invalidate (flush) or tag TLB entries because virtual-to-physical address mappings differ between separate processes, causing cache misses',
            bn: 'সিপিইউকে অবশ্যই TLB এন্ট্রিগুলো মুছে ফেলতে হয় কারণ আলাদা প্রসেসের মেমোরি ম্যাপিং আলাদা থাকে, ফলে মেমোরি অ্যাক্সেসে বিলম্ব ঘটে',
          },
          {
            en: 'The TLB permanently saves the data into the computer BIOS chip',
            bn: 'TLB ডাটাগুলো কম্পিউটারের বায়োস চিপে চিরতরে সংরক্ষণ করে রাখে',
          },
          {
            en: 'The TLB begins playing audio tones through computer headphones',
            bn: 'TLB হেডফোনের মাধ্যমে বিভিন্ন ধরনের শব্দ শোনাতে শুরু করে',
          },
          {
            en: 'The TLB changes the monitor resolution to 640x480 pixels',
            bn: 'TLB মনিটরের ডিসপ্লে রেজোলিউশন ৬৪০x৪৮০ পিক্সেলে বদলে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Virtual memory address mappings belong to different processes, requiring TLB flushing.',
          bn: 'ভিন্ন প্রসেসের মেমোরি ঠিকানা আলাদা হওয়ায় TLB ক্যাশ মুছে ফেলতে হয়।',
        },
        explanation: {
          en: 'Because each process has a unique address space, old TLB entries are invalid for the new process, triggering a performance penalty.',
          bn: 'যেহেতু প্রতিটি প্রসেসের মেমোরি ম্যাপিং পৃথক, তাই নতুন প্রসেসের জন্য পুরানো TLB অকেজো হয়ে পড়ে এবং তা মুছে ফেলতে হয়।'
        },
      },
      {
        id: 'th-vs-pr-qz-4',
        kind: 'mcq',
        topic: 'when-to-choose-multiprocessing',
        question: {
          en: 'Under which engineering requirement is Multi-Processing strictly preferable over Multi-Threading?',
          bn: 'কোন প্রকৌশলগত প্রয়োজনীয়তার ক্ষেত্রে মাল্টি-থ্রেডিংয়ের চেয়ে মাল্টি-প্রসেসিং বেছে নেওয়া সম্পূর্ণ আবশ্যক?'
        },
        options: [
          {
            en: 'When executing untrusted third-party plugins or mission-critical tasks where security boundaries and absolute crash isolation are mandatory',
            bn: 'যখন অবিশ্বস্ত থার্ড-পার্টি প্লাগইন বা সংবেদনশীল কাজ চালানো হয় যেখানে নিরাপত্তা এবং ক্র্যাশ আইসোলেশন নিশ্চিত করা বাধ্যতামূলক',
          },
          {
            en: 'When the programmer wants the application to run with zero CPU usage',
            bn: 'যখন প্রোগ্রামার চান কোনো প্রকার সিপিইউ ব্যবহার ছাড়াই কোড চলুক',
          },
          {
            en: 'When writing software specifically for desktop calculators',
            bn: 'যখন কেবল সাধারণ পকেট ক্যালকুলেটরের জন্য সফটওয়্যার লেখা হয়',
          },
          {
            en: 'When the computer hard drive has zero remaining storage capacity',
            bn: 'যখন কম্পিউটারের হার্ড ড্রাইভে আর কোনো ফাঁকা জায়গা থাকে না',
          },
        ],
        answer: 0,
        hint: {
          en: 'Security sandboxing and hard crash isolation mandate multi-processing.',
          bn: 'নিরাপত্তা স্যান্ডবক্স এবং ক্র্যাশ আইসোলেশনের জন্য প্রসেস ব্যবহার করা জরুরি।',
        },
        explanation: {
          en: 'If code is untrusted or prone to memory bugs, multi-processing isolates the blast radius so failures cannot compromise the host system.',
          bn: 'কোড অনিরাপদ হলে বা ক্র্যাশের ঝুঁকি থাকলে মাল্টি-প্রসেসিং ক্ষতির পরিধি আটকে রেখে মূল সিস্টেমকে অক্ষত রাখে।'
        },
      },
    ],
  },
  next: {
    slug: 'thread-lifecycle',
    title: {
      en: 'Thread Lifecycle: States, Transitions & POSIX Management',
      bn: 'থ্রেড জীবনচক্র: অবস্থা, রূপান্তর এবং POSIX ব্যবস্থাপনা'
    },
  },
};
