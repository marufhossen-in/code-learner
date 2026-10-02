import type { Lesson } from '../../../lib/types';

export const MulticoreLesson: Lesson = {
  slug: 'multicore',
  tech: 'cpu',
  title: {
    en: 'Multi-Core Architecture, SMT & Cache Coherency',
    bn: 'মাল্টি-কোর আর্কিটেকচার, SMT এবং ক্যাশ কোহেরেন্সি'
  },
  summary: {
    en: 'Explore modern multi-core microprocessor architecture. Understand physical cores versus simultaneous multithreading (SMT / Intel Hyper-Threading), symmetric multiprocessing (SMP), the MESI cache coherence protocol (Modified, Exclusive, Shared, Invalid), bus snooping, false sharing pitfalls, and theoretical scaling limits governed by Amdahl Law.',
    bn: 'আধুনিক মাল্টি-কোর মাইক্রোপ্রসেসর আর্কিটেকচার আবিষ্কার করুন। ফিজিক্যাল কোর বনাম সাইমালট্যানিয়াস মাল্টিথ্রেডিং (SMT / হাইপার-থ্রেডিং), সিমেট্রিক মাল্টিপ্রসেসিং (SMP), MESI ক্যাশ কোহেরেন্সি প্রোটোকল ( মডিফাইড, এক্সক্লুসিভ, শেয়ার্ড, ইনভ্যালিড ), বাস স্নুপিং, ফলস শেয়ারিং সমস্যা এবং আমদাহলের সূত্র নির্ধারিত তাত্ত্বিক সীমাবদ্ধতা সম্পর্কে জানুন।',
  },
  minutes: 24,
  blocks: [
    {
      type: 'heading',
      id: 'multicore-pivot-smt',
      text: {
        en: 'The Multi-Core Pivot & Simultaneous Multithreading (SMT)',
        bn: 'মাল্টি-কোর রূপান্তর এবং সাইমালট্যানিয়াস মাল্টিথ্রেডিং (SMT)'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When Dennard scaling collapsed and single-core processors hit the 4 GHz thermal wall, hardware engineers could no longer boost software speed simply by cranking up clock frequencies. Microprocessor design pivoted to Symmetric Multiprocessing (SMP): fabricating multiple independent physical execution cores onto a single silicon chip. Rather than running one task at 8 GHz, a modern chip runs 8 physical cores at 3 GHz, processing parallel tasks concurrently while staying within safe thermal limits.',
        bn: 'যখন ডেনার্ড স্কেলিং ভেঙে পড়ে এবং একক কোরের প্রসেসরগুলো ৪ গিগাহার্টজের থার্মাল সীমার দেয়ালে ধাক্কা খায়, তখন ইঞ্জিনিয়াররা কেবল ক্লক স্পিড বাড়িয়ে প্রসেসরের গতি বৃদ্ধি করার সুযোগ হারান। প্রসেসর ডিজাইন তখন সিমেট্রিক মাল্টিপ্রসেসিং (SMP) ধারায় মোড় নেয়: একটি সিলিকন চিপের ওপর একাধিক স্বাধীন ফিজিক্যাল কোর যুক্ত করা হয়। ১ টি কাজকে ৮ গিগাহার্টজে চালানোর বদলে আধুনিক চিপ নিরাপদ তাপমাত্রার মধ্যে ৩ গিগাহার্টজে ৮ টি স্বাধীন কোরে সমান্তরালভাবে কাজ পরিচালনা করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To extract even greater productivity from each core, engineers created Simultaneous Multithreading (SMT, branded as Hyper-Threading by Intel). SMT duplicates architectural state registers (such as Program Counters and general-purpose register files) while sharing the expensive physical execution engines (ALUs and FPUs). When Thread 0 stalls while waiting hundreds of clock cycles for data from main RAM, the core instantly routes instructions from Thread 1 into the idle execution units. This keeps execution pipelines active, improving overall throughput by 20 to 30 percent with minimal silicon overhead.',
        bn: 'প্রতিটি কোরের সর্বোচ্চ কার্যক্ষমতা নিশ্চিত করতে প্রকৌশলীরা উদ্ভাবন করেন সাইমালট্যানিয়াস মাল্টিথ্রেডিং (SMT, যা ইন্টেল চিপে হাইপার-থ্রেডিং নামে পরিচিত)। SMT আর্কিটেকচারাল স্টেট রেজিস্টারসমূহ ( যেমন প্রোগ্রাম কাউন্টার ও রেজিস্টার ফাইল ) নকল করে রাখে কিন্তু ব্যয়বহুল ফিজিক্যাল এক্সিকিউশন ইউনিট ( ALU ও FPU ) শেয়ার করে। থ্রেড ০ যখন র‍্যাম থেকে ডাটা আনার জন্য কয়েকশো ক্লক সাইকেল অলস অপেক্ষা করে, কোরটি সাথে সাথে অলস এক্সিকিউশন ইউনিটে থ্রেড ১ এর নির্দেশ চালাতে শুরু করে। এটি পাইপলাইনকে সচল রাখে এবং চিপের ক্ষেত্রফল সামান্য বাড়িয়েই ২০ থেকে ৩০ শতাংশ পর্যন্ত অতিরিক্ত থ্রুপুট প্রদান করে।'
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'Multi-Core Topology, Cache Hierarchy & MESI Coherence State Protocol',
        bn: 'মাল্টি-কোর টপোলজি, ক্যাশ হায়ারার্কি এবং MESI কোহেরেন্সি স্টেট প্রোটোকল'
      },
      svg: `<svg viewBox="0 0 840 460" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Multi core processor topology with L1 L2 L3 caches and MESI cache coherence state machine">
  <rect width="840" height="460" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">QUAD-CORE PROCESSOR ARCHITECTURE &amp; CACHE COHERENCY</text>
  
  <!-- Core 0 -->
  <g transform="translate(40, 50)">
    <rect width="170" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="85" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CORE 0 (SMT T0/T1)</text>
    <rect x="15" y="38" width="140" height="30" rx="4" fill="#0f172a" stroke="#64748b"/>
    <text x="85" y="58" fill="#cbd5e1" font-size="10" text-anchor="middle">Execution Units (ALU)</text>
    <rect x="15" y="75" width="140" height="28" rx="4" fill="#0284c7" fill-opacity="0.2" stroke="#0284c7"/>
    <text x="85" y="93" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Private L1 Cache (32KB)</text>
    <rect x="15" y="110" width="140" height="28" rx="4" fill="#0369a1" fill-opacity="0.2" stroke="#0369a1"/>
    <text x="85" y="128" fill="#7dd3fc" font-size="10" font-weight="bold" text-anchor="middle">Private L2 Cache (512KB)</text>
  </g>
  
  <!-- Core 1 -->
  <g transform="translate(230, 50)">
    <rect width="170" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="85" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CORE 1 (SMT T2/T3)</text>
    <rect x="15" y="38" width="140" height="30" rx="4" fill="#0f172a" stroke="#64748b"/>
    <text x="85" y="58" fill="#cbd5e1" font-size="10" text-anchor="middle">Execution Units (ALU)</text>
    <rect x="15" y="75" width="140" height="28" rx="4" fill="#0284c7" fill-opacity="0.2" stroke="#0284c7"/>
    <text x="85" y="93" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Private L1 Cache (32KB)</text>
    <rect x="15" y="110" width="140" height="28" rx="4" fill="#0369a1" fill-opacity="0.2" stroke="#0369a1"/>
    <text x="85" y="128" fill="#7dd3fc" font-size="10" font-weight="bold" text-anchor="middle">Private L2 Cache (512KB)</text>
  </g>
  
  <!-- Core 2 -->
  <g transform="translate(440, 50)">
    <rect width="170" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="85" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CORE 2 (SMT T4/T5)</text>
    <rect x="15" y="38" width="140" height="30" rx="4" fill="#0f172a" stroke="#64748b"/>
    <text x="85" y="58" fill="#cbd5e1" font-size="10" text-anchor="middle">Execution Units (ALU)</text>
    <rect x="15" y="75" width="140" height="28" rx="4" fill="#0284c7" fill-opacity="0.2" stroke="#0284c7"/>
    <text x="85" y="93" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Private L1 Cache (32KB)</text>
    <rect x="15" y="110" width="140" height="28" rx="4" fill="#0369a1" fill-opacity="0.2" stroke="#0369a1"/>
    <text x="85" y="128" fill="#7dd3fc" font-size="10" font-weight="bold" text-anchor="middle">Private L2 Cache (512KB)</text>
  </g>
  
  <!-- Core 3 -->
  <g transform="translate(630, 50)">
    <rect width="170" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="85" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">CORE 3 (SMT T6/T7)</text>
    <rect x="15" y="38" width="140" height="30" rx="4" fill="#0f172a" stroke="#64748b"/>
    <text x="85" y="58" fill="#cbd5e1" font-size="10" text-anchor="middle">Execution Units (ALU)</text>
    <rect x="15" y="75" width="140" height="28" rx="4" fill="#0284c7" fill-opacity="0.2" stroke="#0284c7"/>
    <text x="85" y="93" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Private L1 Cache (32KB)</text>
    <rect x="15" y="110" width="140" height="28" rx="4" fill="#0369a1" fill-opacity="0.2" stroke="#0369a1"/>
    <text x="85" y="128" fill="#7dd3fc" font-size="10" font-weight="bold" text-anchor="middle">Private L2 Cache (512KB)</text>
  </g>
  
  <!-- Interconnect Ring Bus -->
  <rect x="40" y="215" width="760" height="18" rx="4" fill="#f59e0b" fill-opacity="0.2" stroke="#f59e0b" stroke-width="2"/>
  <text x="420" y="228" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">HIGH-SPEED COHERENCY INTERCONNECT RING BUS (SNOOPING &amp; INVALIDATION)</text>
  
  <!-- Shared L3 Cache -->
  <rect x="40" y="245" width="760" height="42" rx="6" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-width="2"/>
  <text x="420" y="271" fill="#10b981" font-size="13" font-weight="bold" text-anchor="middle">SHARED LAST-LEVEL L3 CACHE (16 MB - 32 MB)</text>
  
  <!-- MESI Protocol Breakdown -->
  <g transform="translate(40, 305)">
    <rect width="760" height="135" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2"/>
    <text x="380" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">THE MESI CACHE COHERENCE PROTOCOL STATES (64-BYTE CACHE LINE)</text>
    
    <rect x="20" y="40" width="170" height="75" rx="6" fill="#0f172a" stroke="#ef4444"/>
    <text x="105" y="62" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">MODIFIED (M)</text>
    <text x="105" y="82" fill="#cbd5e1" font-size="10" text-anchor="middle">Line is dirty &amp; exclusive.</text>
    <text x="105" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Memory is outdated.</text>
    
    <rect x="205" y="40" width="170" height="75" rx="6" fill="#0f172a" stroke="#38bdf8"/>
    <text x="290" y="62" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">EXCLUSIVE (E)</text>
    <text x="290" y="82" fill="#cbd5e1" font-size="10" text-anchor="middle">Only 1 core has line.</text>
    <text x="290" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Matches main memory.</text>
    
    <rect x="390" y="40" width="170" height="75" rx="6" fill="#0f172a" stroke="#10b981"/>
    <text x="475" y="62" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">SHARED (S)</text>
    <text x="475" y="82" fill="#cbd5e1" font-size="10" text-anchor="middle">Multiple cores cached.</text>
    <text x="475" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Read-only clean copy.</text>
    
    <rect x="575" y="40" width="170" height="75" rx="6" fill="#0f172a" stroke="#f59e0b"/>
    <text x="660" y="62" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">INVALID (I)</text>
    <text x="660" y="82" fill="#cbd5e1" font-size="10" text-anchor="middle">Data is stale/invalid.</text>
    <text x="660" y="98" fill="#94a3b8" font-size="9" text-anchor="middle">Must re-read from bus.</text>
  </g>
</svg>`,
      caption: {
        en: 'Multi-core chips utilize private L1/L2 caches and shared L3 cache; MESI protocol maintains coherence across all cores over a shared interconnect bus.',
        bn: 'মাল্টি-কোর চিপ প্রাইভেট L1/L2 ক্যাশ এবং শেয়ার্ড L3 ক্যাশ ব্যবহার করে; MESI প্রোটোকল ইন্টারকানেক্ট বাসের মাধ্যমে সমস্ত কোরের মধ্যে সামঞ্জস্য বজায় রাখে।'
      },
    },
    {
      type: 'heading',
      id: 'cache-coherence-false-sharing',
      text: {
        en: 'Cache Coherency, Bus Snooping & The False Sharing Trap',
        bn: 'ক্যাশ কোহেরেন্সি, বাস স্নুপিং এবং ফলস শেয়ারিং ফাঁদ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When multiple cores run threads simultaneously, cache consistency is essential. If Core 0 writes a new value to memory address 0x1000, Core 1 must not read stale data from its private L1 cache. Under the MESI protocol, when Core 0 issues a write, it broadcasts an invalidation request across the interconnect bus (Bus Snooping). Every other core snooping the bus transitions that cache line from Shared (S) to Invalid (I). Next time Core 1 attempts to read that address, a cache miss occurs, forcing it to fetch the latest value updated by Core 0.',
        bn: 'একাধিক কোর যখন একসাথে থ্রেড চালায়, তখন ক্যাশের ডাটার মিল থাকা অপরিহার্য। কোর ০ যদি মেমোরি ঠিকানা 0x1000-এ নতুন মান লেখে, তবে কোর ১ যেন তার নিজস্ব L1 ক্যাশ থেকে পুরোনো মান না পড়ে। MESI প্রোটোকলে কোর ০ লেখার সময় ইন্টারকানেক্ট বাসে ইনভ্যালিডেশন বার্তা পাঠায় ( যাকে বাস স্নুপিং বলা হয় )। বাসের সংকেত শুনে অন্য সব কোর তাদের ক্যাশ লাইনকে শেয়ার্ড (S) থেকে ইনভ্যালিড (I) অবস্থায় রূপান্তর করে। পরবর্তীতে কোর ১ ঠিকানাটি পড়তে গেলে ক্যাশ মিস ঘটে এবং কোর ০ এর হালনাগাদ করা সঠিক মান সংগ্রহ করতে বাধ্য হয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Microprocessor caches move data in fixed 64-byte chunks called Cache Lines, creating a silent performance killer known as False Sharing. Suppose Thread 0 on Core 0 modifies variable x (stored in bytes 0 to 7), while Thread 1 on Core 1 updates variable y (stored in bytes 8 to 15). Although x and y are completely independent in code, both reside within the exact same 64-byte cache line. Every write by Core 0 invalidates Core 1 cache line, bouncing the 64-byte line constantly back and forth between cores (cache thrashing) and slowing execution by up to 10 times!',
        bn: 'মাইক্রোপ্রসেসর ক্যাশ মেমোরি থেকে ৬৪ বাইট আকারের নির্দিষ্ট ব্লকে ডাটা স্থানান্তর করে, যাকে ক্যাশ লাইন বলে। এটি ফলস শেয়ারিং (False Sharing) নামের একটি জটিল পারফরম্যান্স সমস্যার জন্ম দেয়। ধরা যাক কোর ০ এর থ্রেড ০ ভেরিয়েবল x পরিবর্তন করে ( যা ০ থেকে ৭ বাইটে সংরক্ষিত ), অন্যদিকে কোর ১ এর থ্রেড ১ ভেরিয়েবল y আপডেট করে ( যা ৮ থেকে ১৫ বাইটে সংরক্ষিত )। কোডে x এবং y সম্পূর্ণ স্বাধীন হলেও তারা একই ৬৪ বাইট ক্যাশ লাইনের অংশ। ফলে কোর ০ লিখলেই কোর ১ এর সম্পূর্ণ ক্যাশ লাইন বাতিল হয়ে যায় এবং লাইনটি দুই কোরের মাঝে অনবরত বাউন্স করতে থাকে, যা কোডের কার্যক্ষমতা ১০ গুণ পর্যন্ত ধীর করে দেয়।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'amdahls-law-scaling.js',
      code: `// Deterministic Calculation of Amdahl's Law Speedup Ceiling
// Formula: Speedup(p, n) = 1 / ((1 - p) + (p / n))
// p = parallelizable fraction of program (0.0 to 1.0)
// n = number of physical CPU cores

function computeSpeedup(parallelFraction, cores) {
  const serialFraction = 1.0 - parallelFraction;
  const speedup = 1.0 / (serialFraction + (parallelFraction / cores));
  return speedup;
}

const parallelWorkload = 0.90; // 90% parallel, 10% strictly sequential
const coreCounts = [1, 2, 4, 8, 16, 64, 1024];

console.log('--- Amdahl Law Speedup for 90% Parallel Workload ---');
for (const cores of coreCounts) {
  const speedup = computeSpeedup(parallelWorkload, cores);
  console.log('Cores: ' + String(cores).padEnd(5) + ' Speedup: ' + speedup.toFixed(2) + 'x');
}

const infiniteSpeedupLimit = 1.0 / (1.0 - parallelWorkload);
console.log('Theoretical Maximum Speedup (infinite cores): ' + infiniteSpeedupLimit.toFixed(2) + 'x');
console.log('Conclusion: The serial 10% portion fundamentally caps speedup at 10x regardless of core count!');`,
      caption: {
        en: 'Amdahl Law shows that if 10 percent of code is sequential, maximum speedup is capped at 10x even on 1024 CPU cores.',
        bn: 'আমদাহলের সূত্র দেখায় যে কোডের ১০ শতাংশ ধারাবাহিক হলে ১০২৪ টি সিপিইউ কোরেও সর্বোচ্চ গতি ১০ গুণের বেশি বাড়ানো যায় না।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Preventing False Sharing with 64-Byte Cache Alignment',
        bn: '৬৪-বাইট ক্যাশ অ্যালাইনমেন্ট দিয়ে ফলস শেয়ারিং প্রতিরোধ'
      },
      text: {
        en: 'High-performance concurrent systems in C++, Rust, and Go prevent false sharing by inserting 64-byte memory padding between concurrent variables (such as alignas(64)). By guaranteeing that thread-local variables reside on separate 64-byte cache lines, both CPU cores write at full memory bandwidth without invalidating each other private caches.',
        bn: 'সি++, রাস্ট এবং গো ভাষায় উচ্চক্ষমতাসম্পন্ন মাল্টি-থ্রেডেড প্রোগ্রামিংয়ে ভেরিয়েবলের মাঝে ৬৪ বাইট মেমোরি প্যাডিং যুক্ত করে ( যেমন alignas(64) ) ফলস শেয়ারিং দূর করা হয়। প্রতিটি থ্রেডের নিজস্ব ভেরিয়েবল যাতে আলাদা ৬৪ বাইট ক্যাশ লাইনে অবস্থান করে তা নিশ্চিত করার মাধ্যমে প্রসেসর কোরগুলো একে অপরের ক্যাশ বাতিল না করেই পূর্ণ গতিতে কাজ সম্পাদন করতে পারে।'
      },
    },
  ],
  exercises: [
    {
      id: 'cpu-mc-ex-1',
      kind: 'predict',
      question: {
        en: 'If a modern processor features 8 physical CPU cores and each core supports 2-way Simultaneous Multithreading (SMT / Hyper-Threading), how many logical hardware execution threads appear to the operating system? (8 * 2 = 16). Type the number.',
        bn: 'যদি একটি আধুনিক প্রসেসরে ৮ টি ফিজিক্যাল সিপিইউ কোর থাকে এবং প্রতিটি কোর ২-ওয়ে সাইমালট্যানিয়াস মাল্টিথ্রেডিং (SMT) সমর্থন করে, তবে অপারেটিং সিস্টেম কতটি লজিক্যাল থ্রেড দেখতে পাবে? ( ৮ * ২ = ১৬ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '16',
      hint: {
        en: 'Multiply physical cores by threads per core: 8 * 2 = 16.',
        bn: 'ফিজিক্যাল কোরের সংখ্যাকে প্রতি কোরের থ্রেড দিয়ে গুণ করুন: ৮ * ২ = ১৬।'
      },
      explanation: {
        en: 'With 8 physical cores and 2 hardware threads per core, the operating system kernel schedules tasks across 16 logical threads simultaneously.',
        bn: '৮ টি ফিজিক্যাল কোর এবং প্রতি কোরে ২ টি করে থ্রেড থাকলে অপারেটিং সিস্টেম ১৬ টি লজিক্যাল থ্রেডে কাজ বণ্টন করে।'
      },
    },
    {
      id: 'cpu-mc-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the standard data transfer block size (Cache Line) utilized by modern x86-64 and ARM microprocessor caches?',
        bn: 'আধুনিক x86-64 এবং এআরএম মাইক্রোপ্রসেসর ক্যাশ মেমোরিতে সাধারণ ডাটা ব্লকের আকার ( ক্যাশ লাইন ) কত?'
      },
      options: [
        {
          en: '64 bytes',
          bn: '৬৪ বাইট',
        },
        {
          en: '1 single bit',
          bn: '১ একক বিট',
        },
        {
          en: '4 gigabytes',
          bn: '৪ গিগাবাইট',
        },
        {
          en: '128 megabytes',
          bn: '১২৮ মেগাবাইট',
        },
      ],
      answer: 0,
      hint: {
        en: 'Almost all modern desktop and server processors move data in 64-byte chunks.',
        bn: 'প্রায় সমস্ত আধুনিক ডেস্কটপ ও সার্ভার প্রসেসর ৬৪ বাইট ব্লকে ডাটা স্থানান্তর করে।'
      },
      explanation: {
        en: 'A standard cache line across x86-64 and ARM64 architectures is 64 bytes in length.',
        bn: 'x86-64 এবং ARM64 আর্কিটেকচারে একটি আদর্শ ক্যাশ লাইনের আকার ৬৪ বাইট।'
      },
    },
    {
      id: 'cpu-mc-ex-3',
      kind: 'mcq',
      question: {
        en: 'In the MESI cache coherence protocol, what does the Invalid (I) state signify for a core local cache line?',
        bn: 'MESI ক্যাশ কোহেরেন্সি প্রোটোকলে ইনভ্যালিড (I) অবস্থা কোনো কোরের লোকাল ক্যাশ লাইনের জন্য কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'The cached data is stale because another core wrote to that address; any subsequent read must miss and fetch the fresh copy from the bus',
          bn: 'ক্যাশের ডাটাটি পুরোনো হয়ে গেছে কারণ অন্য কোর ওই ঠিকানায় লিখেছে; ফলে পরবর্তী রিড অপারেশনে ক্যাশ মিস ঘটবে এবং বাস থেকে নতুন ডাটা আনতে হবে',
        },
        {
          en: 'The physical silicon inside the CPU chip has burned out permanently',
          bn: 'সিপিইউ চিপের ভেতরের ফিজিক্যাল সিলিকন স্থায়ীভাবে পুড়ে নষ্ট হয়ে গেছে',
        },
        {
          en: 'The line contains verified cryptographic tokens that never expire',
          bn: 'লাইনটিতে যাচাইকৃত ক্রিপ্টোগ্রাফিক টোকেন রয়েছে যা কখনো মেয়াদোত্তীর্ণ হয় না',
        },
        {
          en: 'The data is stored directly on an optical CD-ROM disc',
          bn: 'ডাটা সরাসরি অপটিক্যাল সিডি-রম ডিস্কে সংরক্ষিত রয়েছে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Invalid means the local copy was superseded by another core write.',
        bn: 'ইনভ্যালিড মানে লোকাল কপিটি অন্য কোরের পরিবর্তনের ফলে পুরোনো হয়ে গেছে।',
      },
      explanation: {
        en: 'When another core writes to a shared address, bus snooping marks the local copy as Invalid (I), forcing the core to re-read fresh data.',
        bn: 'অন্য কোনো কোর শেয়ার্ড ঠিকানায় লিখলে বাস স্নুপিংয়ের মাধ্যমে লোকাল কপিটি ইনভ্যালিড (I) হিসেবে চিহ্নিত হয়, যাতে কোরটি বাধ্য হয়ে নতুন ডাটা গ্রহণ করে।'
      },
    },
    {
      id: 'cpu-mc-ex-4',
      kind: 'predict',
      question: {
        en: 'According to Amdahl Law, if exactly 50 percent of a computer program is strictly sequential (parallel fraction P = 0.50), what is the maximum theoretical speedup ceiling even with an infinite number of CPU cores? (1 / 0.50 = 2). Type the single digit.',
        bn: 'আমদাহলের সূত্র অনুসারে, যদি একটি কম্পিউটার প্রোগ্রামের ঠিক ৫০ শতাংশ কাজ সম্পূর্ণ ধারাবাহিক হয় ( সমান্তরাল অংশ P = ০.৫০ ), তবে অসীম সংখ্যক সিপিইউ কোর ব্যবহার করলেও সর্বোচ্চ তাত্ত্বিক গতি বৃদ্ধি কত গুণ হবে? ( ১ / ০.৫০ = ২ )। একক সংখ্যাটি টাইপ করুন।'
      },
      answer: '2',
      hint: {
        en: 'Calculate Speedup = 1 / (1 - 0.50) = 1 / 0.50 = 2.',
        bn: 'হিসাব করুন স্পিডআপ = ১ / ( ১ - ০.৫০ ) = ১ / ০.৫০ = ২।'
      },
      explanation: {
        en: 'With a 50 percent sequential bottleneck, maximum speedup is bounded by 1 / 0.50 = 2x, meaning the program can never run more than twice as fast regardless of how many cores are added.',
        bn: '৫০ শতাংশ ধারাবাহিক কাজের ক্ষেত্রে সর্বোচ্চ গতি ১ / ০.৫০ = ২ গুণের বেশি বাড়ানো সম্ভব নয়, কোর সংখ্যা যত বেশিই যোগ করা হোক না কেন।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Multi-Core Architecture & Cache Coherency Quiz',
      bn: 'মাল্টি-কোর আর্কিটেকচার এবং ক্যাশ কোহেরেন্সি কুইজ'
    },
    questions: [
      {
        id: 'cpu-mc-qz-1',
        kind: 'mcq',
        topic: 'multicore-pivot-motivation',
        question: {
          en: 'Why did microprocessor manufacturers transition from building single-core processors with higher clock speeds to multi-core architectures in the mid-2000s?',
          bn: '২০০০ সালের মাঝামাঝি সময়ে মাইক্রোপ্রসেসর প্রস্তুতকারকরা কেন উচ্চ ক্লক স্পিডের একক কোরের বদলে মাল্টি-কোর আর্কিটেকচারে স্থানান্তরিত হন?'
        },
        options: [
          {
            en: 'Dennard scaling collapsed, causing power consumption and heat dissipation to surge exponentially beyond the 4 GHz thermal wall',
            bn: 'ডেনার্ড স্কেলিং ভেঙে পড়ে, যার ফলে ৪ গিগাহার্টজের থার্মাল সীমার বাইরে বিদ্যুৎ খরচ ও তাপমাত্রা মাত্রাতিরিক্ত হারে বেড়ে যায়',
          },
          {
            en: 'Because computer software stopped using binary numbers',
            bn: 'কারণ কম্পিউটার সফটওয়্যার বাইনারি সংখ্যা ব্যবহার করা বন্ধ করে দেয়',
          },
          {
            en: 'Single-core chips ran out of physical space on motherboard sockets',
            bn: 'একক কোরের চিপগুলোর মাদারবোর্ড সকেটে ফিজিক্যাল স্থানের অভাব দেখা দেয়',
          },
          {
            en: 'To make computers heavier and more difficult to carry',
            bn: 'কম্পিউটারকে ভারী ও বহন করা কঠিন করে তোলার উদ্দেশ্যে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Excessive thermal dissipation and electrical power limits prevented higher clock frequencies.',
          bn: 'অতিরিক্ত তাপ উৎপাদন এবং বিদ্যুতের সীমাবদ্ধতা ক্লক স্পিড বাড়াতে বাধা দেয়।',
        },
        explanation: {
          en: 'The thermal wall prevented single cores from clocking beyond 4 GHz efficiently. Putting multiple independent cores on the same chip offered far better performance per watt.',
          bn: 'থার্মাল বাধার কারণে একক কোরে ৪ গিগাহার্টজের বেশি গতি অর্জন অসম্ভব হয়ে পড়ে। একই চিপে একাধিক স্বাধীন কোর যুক্ত করে বিদ্যুৎ সাশ্রয়ী উচ্চ গতি অর্জন সম্ভব হয়।'
        },
      },
      {
        id: 'cpu-mc-qz-2',
        kind: 'mcq',
        topic: 'smt-hyperthreading-distinction',
        question: {
          en: 'What structural difference distinguishes Simultaneous Multithreading (SMT / Hyper-Threading) from a separate physical core?',
          bn: 'একটি পৃথক ফিজিক্যাল কোরের সাথে সাইমালট্যানিয়াস মাল্টিথ্রেডিংয়ের (SMT / হাইপার-থ্রেডিং) কাঠামোগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'SMT duplicates only architectural state registers (such as Program Counter and register files) while sharing ALUs and caches; a physical core possesses dedicated execution units',
            bn: 'SMT কেবল আর্কিটেকচারাল স্টেট রেজিস্টারসমূহ ( যেমন প্রোগ্রাম কাউন্টার ও রেজিস্টার ফাইল ) নকল করে কিন্তু ALU ও ক্যাশ শেয়ার করে; অন্যদিকে ফিজিক্যাল কোরের নিজস্ব এক্সিকিউশন ইউনিট থাকে',
          },
          {
            en: 'SMT uses software emulation in Windows instead of actual hardware silicon',
            bn: 'SMT আসল হার্ডওয়্যার সিলিকনের বদলে উইন্ডোজে সফটওয়্যার এমুলেশন ব্যবহার করে',
          },
          {
            en: 'A physical core only computes subtraction, while SMT only computes addition',
            bn: 'ফিজিক্যাল কোর কেবল বিয়োগ করতে পারে, আর SMT কেবল যোগ করতে পারে',
          },
          {
            en: 'SMT requires an external USB stick to function',
            bn: 'SMT কাজ করার জন্য একটি বাহ্যিক ইউএসবি ড্রাইভের প্রয়োজন হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'SMT shares execution units between threads, while physical cores duplicate the entire execution engine.',
          bn: 'SMT থ্রেডগুলোর মধ্যে এক্সিকিউশন ইউনিট শেয়ার করে, আর ফিজিক্যাল কোরের সম্পূর্ণ নিজস্ব ইঞ্জিন থাকে।',
        },
        explanation: {
          en: 'SMT duplicates lightweight register state so two threads share one core execution pipeline, keeping ALUs busy when one thread experiences a memory stall.',
          bn: 'SMT হালকা ওজনের রেজিস্টার স্টেট নকল করে দুটি থ্রেডকে একটি কোরে চালাতে দেয়, যাতে একটি থ্রেড মেমোরির জন্য অপেক্ষা করার সময়ও ALU ব্যস্ত থাকে।'
        },
      },
      {
        id: 'cpu-mc-qz-3',
        kind: 'mcq',
        topic: 'false-sharing-concurrency-bug',
        question: {
          en: 'What mechanism causes "False Sharing" to severely degrade performance in multi-threaded software?',
          bn: 'মাল্টি-থ্রেডেড সফটওয়্যারে কোন প্রক্রিয়ার কারণে "ফলস শেয়ারিং" পারফরম্যান্সকে মারাত্মকভাবে ধীর করে দেয়?'
        },
        options: [
          {
            en: 'Independent variables updated by distinct CPU cores happen to share the same 64-byte cache line, causing constant cache invalidations and interconnect bus thrashing',
            bn: 'ভিন্ন ভিন্ন সিপিইউ কোরের স্বাধীন ভেরিয়েবলগুলো একই ৬৪ বাইট ক্যাশ লাইনে অবস্থান করায় অনবরত ক্যাশ বাতিল ও ইন্টারকানেক্ট বাসের অপচয় ঘটে',
          },
          {
            en: 'Two computers on the internet attempt to share the same Wi-Fi password',
            bn: 'ইন্টারনেটের দুটি কম্পিউটার একই ওয়াইফাই পাসওয়ার্ড শেয়ার করার চেষ্টা করে',
          },
          {
            en: 'The operating system shares screen wallpaper across multiple monitors',
            bn: 'অপারেটিং সিস্টেম একাধিক মনিটরে একই স্ক্রিন ওয়ালপেপার প্রদর্শন করে',
          },
          {
            en: 'The RAM chips physically detach from the motherboard slots',
            bn: 'মাদারবোর্ড স্লট থেকে র‍্যাম চিপ শারীরিকভাবে খুলে পড়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Two independent variables sharing the same 64-byte cache line cause ping-pong invalidations.',
          bn: 'একই ৬৪ বাইট ক্যাশ লাইনে ২ টি স্বাধীন ভেরিয়েবল থাকলে অনবরত ক্যাশ বাতিল হতে থাকে।',
        },
        explanation: {
          en: 'Because caches operate in 64-byte lines, writes to unrelated variables on the same line trigger MESI invalidations on other cores, creating unnecessary memory bus traffic.',
          bn: 'যেহেতু ক্যাশ ৬৪ বাইটের লাইনে কাজ করে, তাই একই লাইনে থাকা সম্পর্কহীন ভেরিয়েবলে লিখলেও অন্য কোরের ক্যাশ বাতিল হয় এবং বাসে ট্রাফিক জ্যাম তৈরি হয়।'
        },
      },
      {
        id: 'cpu-mc-qz-4',
        kind: 'mcq',
        topic: 'amdahl-law-limitations',
        question: {
          en: 'What fundamental insight does Amdahl Law establish regarding parallel computing acceleration?',
          bn: 'প্যারালাল কম্পিউটিংয়ের গতি বৃদ্ধির ক্ষেত্রে আমদাহলের সূত্র কোন মৌলিক সত্যটি প্রতিষ্ঠা করে?'
        },
        options: [
          {
            en: 'The maximum speedup achievable by parallelization is strictly bounded by the sequential, non-parallelizable portion of the algorithm regardless of core count',
            bn: 'যত কোরই যোগ করা হোক না কেন, প্যারালাল কাজের সর্বোচ্চ গতি অ্যালগরিদমের ধারাবাহিক বা নন-প্যারালাল অংশের দৈর্ঘ্য দ্বারা কঠোরভাবে সীমাবদ্ধ থাকে',
          },
          {
            en: 'Adding more cores always provides an infinite linear speedup for every program',
            bn: 'বেশি কোর যোগ করলে সবসময় প্রতিটি প্রোগ্রামের গতি সরলরেখায় অসীম পর্যন্ত বাড়তে থাকে',
          },
          {
            en: 'Parallel programs always run slower than sequential programs',
            bn: 'প্যারালাল প্রোগ্রাম সর্বদা একক ধারাবাহিক প্রোগ্রামের চেয়ে ধীরগতিতে চলে',
          },
          {
            en: 'Computer memory capacity shrinks when multiple cores are powered on',
            bn: 'একাধিক কোর চালু করলে কম্পিউটার মেমোরির ধারণক্ষমতা কমে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'The sequential portion of an algorithm acts as a hard ceiling on overall speedup.',
          bn: 'অ্যালগরিদমের ধারাবাহিক অংশটি সামগ্রিক গতি বৃদ্ধির জন্য একটি সর্বোচ্চ বাধা হিসেবে কাজ করে।',
        },
        explanation: {
          en: 'Amdahl Law proves that no matter how many hundreds of cores you throw at a problem, the speedup can never exceed 1 / (1 - P), where P is the parallelizable fraction.',
          bn: 'আমদাহলের সূত্র প্রমাণ করে যে যত শত কোরই ব্যবহার করা হোক না কেন, গতি বৃদ্ধি কখনো ১ / ( ১ - P ) এর চেয়ে বেশি হতে পারে না, যেখানে P হলো প্যারালাল কাজের অংশ।'
        },
      },
    ],
  },
  next: {
    slug: 'cpu-capstone',
    title: {
      en: 'Microprocessor Systems Capstone',
      bn: 'মাইক্রোপ্রসেসর সিস্টেমস ক্যাপস্টোন'
    },
  },
};
