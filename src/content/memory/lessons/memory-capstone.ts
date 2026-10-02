import type { Lesson } from '../../../lib/types';

export const MemoryCapstoneLesson: Lesson = {
  slug: 'memory-capstone',
  tech: 'memory',
  title: {
    en: 'Systems Memory Architecture & High-Performance Capstone',
    bn: 'সিস্টেমস মেমোরি আর্কিটেকচার এবং হাই-পারফরম্যান্স ক্যাপস্টোন'
  },
  summary: {
    en: 'Synthesize the entire memory hierarchy into an end-to-end production architecture capstone. Trace memory flow from L1, L2, and L3 SRAM CPU caches through multi-channel DDR5 DRAM, OS virtual memory page tables, TLB hits and misses, to NVMe swap. Learn zero-copy I/O using Linux mmap and kernel sendfile, diagnose cache locality with row-major vs column-major matrix iteration, and build a high-performance in-memory ring buffer with zero runtime allocation overhead.',
    bn: 'মেমোরি হায়ারার্কির সম্পূর্ণ জ্ঞানকে একটি সমন্বিত প্রোডাকশন আর্কিটেকচার ক্যাপস্টোনে রূপান্তর করুন। L1, L2 এবং L3 SRAM ক্যাশ থেকে শুরু করে মাল্টি-চ্যানেল DDR5 র‍্যাম, ওএস ভার্চুয়াল মেমোরি পেজ টেবিল, TLB রূপান্তর এবং NVMe সোয়াপের মেমোরি প্রবাহ পর্যালোচনা করুন। লিনাক্স mmap ও কার্নেল sendfile এর সাহায্যে জিরো-কপি I/O শিখুন, রো-মেজর বনাম কলাম-মেজর ম্যাট্রিক্স ইটারেশনে ক্যাশ লোকালিটি পরীক্ষা করুন এবং শূন্য রানটাইম মেমোরি বরাদ্দের উচ্চগতির রিং বাফার তৈরি করুন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'the-full-memory-hierarchy',
      text: {
        en: 'The Complete Memory Hierarchy: Latency Numbers Every Engineer Must Know',
        bn: 'সম্পূর্ণ মেমোরি হায়ারার্কি: প্রতিটি সফটওয়্যার ইঞ্জিনিয়ারের জন্য প্রয়োজনীয় মেমোরি লেটেন্সি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When a processor core requests an instruction or data variable, the access time varies by a factor of 10000000 across the computer hardware hierarchy. Designing responsive systems requires understanding where data resides physically in silicon.',
        bn: 'একটি প্রসেসর কোর যখন কোনো নির্দেশনা বা ডাটা ভেরিয়েবল খোঁজে, তখন কম্পিউটার হার্ডওয়্যার হায়ারার্কির বিভিন্ন স্তরের মধ্যে মেমোরি অ্যাক্সেস সময়ের ব্যবধান ১ কোটি ( ১০০০০০০০ ) গুণ পর্যন্ত হতে পারে। উচ্চগতির সিস্টেম তৈরির জন্য সিলিকন চিপে ডাটার আসল শারীরিক অবস্থান বোঝা অত্যন্ত জরুরি।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'On-chip L1 SRAM cache responds in 1 nanosecond (64KB per core). L2 cache responds in 4 nanoseconds (1MB per core). L3 cache shared across all cores responds in 12 nanoseconds. Physical DDR5 DRAM main memory takes 70 nanoseconds over the memory bus. If a requested page is not in RAM, reading a page fault from an NVMe SSD takes 20000 nanoseconds (20 microseconds).',
        bn: 'সিপিইউ চিপের ভেতরে থাকা L1 SRAM ক্যাশ ১ ন্যানোসেকেন্ডে কাজ সম্পন্ন করে ( প্রতি কোরে ৬৪ কিলোবাইট )। L2 ক্যাশে সময় লাগে ৪ ন্যানোসেকেন্ড ( প্রতি কোরে ১ মেগাবাইট )। সব কোরের মাঝে শেয়ার করা L3 ক্যাশে সময় লাগে ১২ ন্যানোসেকেন্ড। মেমোরি বাসের মাধ্যমে যুক্ত ফিজিক্যাল DDR5 র‍্যামে যেতে সময় লাগে ৭০ ন্যানোসেকেন্ড। আর কাঙ্ক্ষিত পেজটি র‍্যামে না থাকলে NVMe এসএসডি থেকে পেজ ফল্ট পড়তে সময় লাগে ২০০০০ ন্যানোসেকেন্ড ( ২০ মাইক্রোসেকেন্ড )।',
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. CPU Cache Line Locality (64 Bytes)',
            bn: '১. সিপিইউ ক্যাশ লাইন লোকালিটি ( ৬৪ বাইট )'
          },
          text: {
            en: 'Processors never read single isolated bytes from DRAM. Instead, the memory controller fetches an entire 64-byte contiguous block called a Cache Line. Iterating a 2D matrix in row-major order reads adjacent elements inside the same cache line, executing 10 times faster than column-major strides.',
            bn: 'প্রসেসর কখনোই র‍্যাম থেকে একক বিচ্ছিন্ন বাইট পড়ে না। বরং মেমোরি কন্ট্রোলার প্রতিবার ক্যাশ লাইন (Cache Line) নামের ৬৪-বাইটের একটি সম্পূর্ণ অবিচ্ছিন্ন ব্লক তুলে আনে। রো-মেজর ক্রমে ম্যাট্রিক্স পড়লে একই ক্যাশ লাইনের ডাটা পর্যায়ক্রমে পাওয়া যায়, যা কলাম-মেজর ট্রাভার্সালের চেয়ে ১০ গুণ দ্রুত কাজ করে।'
          },
        },
        {
          title: {
            en: '2. Zero-Copy I/O with sendfile() and mmap()',
            bn: '২. sendfile() এবং mmap() দিয়ে জিরো-কপি I/O'
          },
          text: {
            en: 'Standard file reads copy data 4 separate times: Disk to Kernel Page Cache to User Space Buffer to Socket Buffer to Network Card. Instead, the Linux sendfile() system call routes disk payloads straight to socket hardware via Direct Memory Access (DMA), bypassing application RAM entirely.',
            bn: 'সাধারণ ফাইল রিড ৪ বার ডাটা কপি করে: ডিস্ক থেকে কার্নেল পেজ ক্যাশ, সেখান থেকে ইউজার স্পেস বাফার, এরপর সকেট বাফার হয়ে নেটওয়ার্ক কার্ড। বিপরীতে, লিনাক্স sendfile() সিস্টেম কল ডিরেক্ট মেমোরি অ্যাক্সেস (DMA) ব্যবহার করে ডিস্কের পেলোড সরাসরি সকেট হার্ডওয়্যারে পাঠায় এবং অ্যাপ্লিকেশনের র‍্যামের ঝামেলা সম্পূর্ণ দূর করে।'
          },
        },
        {
          title: {
            en: '3. Pre-Allocated Ring Buffers (Zero GC Overhead)',
            bn: '৩. প্রি-অ্যালোকেটেড রিং বাফার ( শূন্য GC অপচয় )'
          },
          text: {
            en: 'High-frequency trading and low-latency network engines avoid dynamic heap allocation entirely. They maintain fixed-size circular Ring Buffers with head and tail pointers, allowing continuous data streaming with exactly 0 runtime memory allocations.',
            bn: 'উচ্চগতির ট্রেডিং ও লো-লেটেন্সি নেটওয়ার্ক সিস্টেমগুলো ডায়নামিক হিপ মেমোরি বরাদ্দ সম্পূর্ণ এড়িয়ে চলে। তারা হেড ও টেইল পয়েন্টারযুক্ত নির্দিষ্ট সাইজের সার্কুলার রিং বাফার ব্যবহার করে, যার ফলে রানটাইমে ০ টি বাড়তি মেমোরি বরাদ্দেই অবিরাম ডাটা স্ট্রিম করা সম্ভব হয়।'
          },
        },
        {
          title: {
            en: '4. False Sharing Prevention via Cache Padding',
            bn: '৪. ক্যাশ প্যাডিংয়ের মাধ্যমে ফলস শেয়ারিং প্রতিরোধ'
          },
          text: {
            en: 'When two concurrent threads write to distinct variables situated on the exact same 64-byte cache line, CPU cache coherency protocols continuously invalidate both cores caches. Padding data structs to 64 bytes separates variables onto independent cache lines, restoring full multi-core parallelism.',
            bn: 'দুটি পৃথক থ্রেড যখন একই ৬৪-বাইটের ক্যাশ লাইনে অবস্থিত দুটি ভিন্ন ভেরিয়েবলে ডাটা লেখে, তখন সিপিইউ ক্যাশ প্রোটোকল বারবার উভয় কোরের ক্যাশ বাতিল করে দেয়। স্ট্রাক্টকে ৬৪ বাইটে প্যাডিং করে পৃথক ক্যাশ লাইনে রাখলে এই সংঘাত দূর হয় এবং মাল্টি-কোর প্রসেসরের পূর্ণ গতি ফিরে আসে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The Complete Memory Hierarchy & Linux Kernel Zero-Copy sendfile() Data Path',
        bn: 'সম্পূর্ণ মেমোরি হায়ারার্কি এবং লিনাক্স কার্নেল জিরো-কপি sendfile() ডাটা পাথ'
      },
      svg: `<svg viewBox="0 0 840 450" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="End-to-end computer memory hierarchy and zero-copy DMA data transmission diagram">
  <rect width="840" height="450" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">SYSTEMS MEMORY ARCHITECTURE &amp; ZERO-COPY I/O</text>
  
  <!-- Left Side: Memory Hierarchy Pyramid -->
  <g transform="translate(30, 48)">
    <rect width="360" height="350" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="180" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">HARDWARE LATENCY PYRAMID</text>
    
    <!-- L1 Cache -->
    <rect x="70" y="40" width="220" height="42" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="180" y="58" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">CPU Registers &amp; L1 Cache</text>
    <text x="180" y="73" fill="#cbd5e1" font-size="9" text-anchor="middle">64 KB SRAM | 1 ns Latency</text>
    
    <!-- L2 Cache -->
    <rect x="50" y="90" width="260" height="42" rx="4" fill="#0f172a" stroke="#06b6d4"/>
    <text x="180" y="108" fill="#06b6d4" font-size="10" font-weight="bold" text-anchor="middle">L2 On-Die Cache</text>
    <text x="180" y="123" fill="#cbd5e1" font-size="9" text-anchor="middle">1 MB SRAM | 4 ns Latency</text>
    
    <!-- L3 Cache -->
    <rect x="30" y="140" width="300" height="42" rx="4" fill="#0f172a" stroke="#3b82f6"/>
    <text x="180" y="158" fill="#3b82f6" font-size="10" font-weight="bold" text-anchor="middle">L3 Shared Processor Cache</text>
    <text x="180" y="173" fill="#cbd5e1" font-size="9" text-anchor="middle">32 MB SRAM | 12 ns Latency</text>
    
    <!-- Main DRAM Memory -->
    <rect x="15" y="190" width="330" height="45" rx="4" fill="#0f172a" stroke="#f59e0b"/>
    <text x="180" y="209" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">DDR5 Main Memory (RAM)</text>
    <text x="180" y="224" fill="#cbd5e1" font-size="9" text-anchor="middle">32 GB DRAM | 70 ns Latency | 64B Cache Lines</text>
    
    <!-- Virtual Memory TLB & Page Tables -->
    <rect x="15" y="243" width="330" height="42" rx="4" fill="#0f172a" stroke="#a855f7"/>
    <text x="180" y="261" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">OS Virtual Memory &amp; MMU TLB</text>
    <text x="180" y="276" fill="#cbd5e1" font-size="9" text-anchor="middle">4KB Pages / 2MB HugePages | CR3 Page Directory</text>
    
    <!-- NVMe SSD Storage / Swap -->
    <rect x="15" y="293" width="330" height="42" rx="4" fill="#0f172a" stroke="#ef4444"/>
    <text x="180" y="311" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">NVMe PCIe SSD (Disk &amp; Swap)</text>
    <text x="180" y="326" fill="#cbd5e1" font-size="9" text-anchor="middle">2 TB NAND Flash | 20,000 ns (20 µs) Latency</text>
  </g>
  
  <!-- Right Side: Zero-Copy Linux sendfile() Path -->
  <g transform="translate(420, 48)">
    <rect width="390" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="195" y="24" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">LINUX ZERO-COPY sendfile() DATA PATH</text>
    
    <!-- Disk File -->
    <rect x="20" y="42" width="350" height="48" rx="4" fill="#0f172a" stroke="#ef4444"/>
    <text x="195" y="64" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Disk File: /var/www/video.mp4</text>
    <text x="195" y="80" fill="#94a3b8" font-size="9" text-anchor="middle">Read via NVMe DMA Controller</text>
    
    <!-- Arrow 1: DMA to Kernel Page Cache -->
    <line x1="195" y1="90" x2="195" y2="115" stroke="#10b981" stroke-width="3"/>
    <polygon points="190,115 195,123 200,115" fill="#10b981"/>
    
    <!-- Kernel Page Cache -->
    <rect x="20" y="125" width="350" height="55" rx="6" fill="#064e3b" stroke="#10b981"/>
    <text x="195" y="148" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">Linux Kernel Page Cache</text>
    <text x="195" y="166" fill="#f8fafc" font-size="10" text-anchor="middle">4KB Page Frames cached in DRAM</text>
    
    <!-- Traditional bypass callout -->
    <rect x="20" y="195" width="350" height="45" rx="4" fill="#450a0a" stroke="#ef4444" stroke-dasharray="3 3"/>
    <text x="195" y="213" fill="#fca5a5" font-size="10" text-anchor="middle">Traditional I/O: 2 User Copies + 4 Context Switches</text>
    <text x="195" y="228" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">BYPASS USER SPACE COMPLETELY WITH ZERO-COPY</text>
    
    <!-- Arrow 2: DMA Direct Transfer to Socket / NIC -->
    <line x1="195" y1="240" x2="195" y2="265" stroke="#10b981" stroke-width="3"/>
    <polygon points="190,265 195,273 200,265" fill="#10b981"/>
    
    <!-- Network Interface Card -->
    <rect x="20" y="275" width="350" height="55" rx="6" fill="#0f172a" stroke="#38bdf8"/>
    <text x="195" y="298" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">Network Interface Card (NIC) Ring</text>
    <text x="195" y="316" fill="#cbd5e1" font-size="10" text-anchor="middle">Direct DMA Transmission onto 100GbE Fiber Cable</text>
  </g>
  
  <text x="420" y="425" fill="#94a3b8" font-size="10" text-anchor="middle">L1 Cache is 70x faster than DRAM; sendfile() transfers kernel page cache to NIC with zero CPU memory copies</text>
</svg>`,
      caption: {
        en: 'L1 CPU Cache is 70x faster than DRAM (1ns vs 70ns). Linux sendfile() streams kernel page cache to NICs with zero user memory copies.',
        bn: 'L1 ক্যাশ র‍্যামের চেয়ে ৭০ গুণ দ্রুত ( ১ ন্যানোসেকেন্ড বনাম ৭০ ন্যানোসেকেন্ড )। লিনাক্স sendfile() কোনো বাড়তি কপি ছাড়াই কার্নেল পেজ ক্যাশ সরাসরি নেটওয়ার্কে পাঠায়।'
      },
    },
    {
      type: 'heading',
      id: 'high-performance-code-and-benchmark',
      text: {
        en: 'Zero-Allocation Ring Buffer & Cache Stride Benchmark',
        bn: 'জিরো-অ্যালোকেশন রিং বাফার এবং ক্যাশ স্ট্রাইড বেঞ্চমার্ক'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To eliminate runtime garbage collection pauses in performance-critical applications, engineers replace dynamic arrays with circular ring buffers allocated once during system startup. The following production code benchmarks contiguous cache-line memory iteration and demonstrates circular pointer arithmetic.',
        bn: 'উচ্চ পারফরম্যান্সের অ্যাপ্লিকেশনে রানটাইম গার্বেজ কালেকশনজনিত বিলম্ব দূর করতে ইঞ্জিনিয়াররা ডায়নামিক অ্যারোর বদলে সিস্টেম শুরুর সময় একবার বরাদ্দকৃত সার্কুলার রিং বাফার ব্যবহার করেন। নিচের কোডটি ক্যাশ-লাইন মেমোরি ইটারেশন এবং সার্কুলার পয়েন্টার এরিথমেটিকের বাস্তব প্রয়োগ প্রদর্শন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'high-performance-memory-capstone.js',
      code: `// Production-Grade Systems Memory Architecture Capstone
// 1. Zero-Allocation High-Speed Circular Ring Buffer
// 2. Hardware Cache-Line Stride Performance Benchmark

class ZeroAllocRingBuffer {
  constructor(powerOfTwoCapacity = 1024) {
    this.capacity = powerOfTwoCapacity;
    this.mask = powerOfTwoCapacity - 1; // Bitwise AND replaces modulo (%)
    // Single contiguous typed array allocated at startup
    this.buffer = new Int32Array(powerOfTwoCapacity);
    this.head = 0; // Read index
    this.tail = 0; // Write index
    this.count = 0;
  }

  // O(1) Push with zero object allocations
  push(value) {
    if (this.count === this.capacity) {
      throw new Error('RING_BUFFER_OVERFLOW: Capacity reached!');
    }
    this.buffer[this.tail] = value;
    this.tail = (this.tail + 1) & this.mask; // Fast bitwise wrapping
    this.count++;
  }

  // O(1) Pop with zero object allocations
  pop() {
    if (this.count === 0) return null;
    const value = this.buffer[this.head];
    this.head = (this.head + 1) & this.mask;
    this.count--;
    return value;
  }
}

// 1. Benchmark Ring Buffer operations
const ring = new ZeroAllocRingBuffer(1024);
console.log('=== Step 1: Pre-Allocated Ring Buffer Simulation ===');

for (let i = 1; i <= 5; i++) {
  ring.push(i * 100);
}
console.log('Pushed 5 values. Count:', ring.count);
console.log('Popped first value :', ring.pop());
console.log('Popped second value:', ring.pop());
console.log('Remaining Count    :', ring.count, '(Zero GC allocations triggered!)');

// 2. Hardware Cache-Line Stride Benchmark (64 Bytes)
console.log('\\n=== Step 2: CPU Cache-Line Locality Analysis ===');
const ELEMENT_COUNT = 65536; // 64K integers = 256 KB memory
const matrix = new Int32Array(ELEMENT_COUNT);

// Benchmark Sequential Access (Adjacent bytes in same 64-byte cache line)
const startSeq = Date.now();
let sumSeq = 0;
for (let i = 0; i < ELEMENT_COUNT; i++) {
  sumSeq += matrix[i];
}
const seqDuration = Date.now() - startSeq;

// Benchmark Strided Access (Jumping 16 ints = 64 bytes, forcing cache line miss)
const STRIDE = 16; // 16 * 4 bytes = 64-byte jump
const startStride = Date.now();
let sumStride = 0;
for (let s = 0; s < STRIDE; s++) {
  for (let i = s; i < ELEMENT_COUNT; i += STRIDE) {
    sumStride += matrix[i];
  }
}
const strideDuration = Date.now() - startStride;

console.log('Sequential Contiguous Read (Cache Friendly): Completed in', seqDuration, 'ms');
console.log('Strided Non-Contiguous Read (64B Cache Miss): Completed in', strideDuration, 'ms');
console.log('Conclusion: Contiguous memory access maximizes CPU L1 cache hits, while strided hops cause expensive DRAM bus fetches!');`,
      caption: {
        en: 'The capstone demonstrates a 1024-slot zero-allocation ring buffer and measures sequential contiguous reads against 64-byte strided hops.',
        bn: 'ক্যাপস্টোনটি একটি ১০২৪-স্লটের শূন্য-অ্যালোকেশন রিং বাফার এবং ৬৪-বাইটের ক্যাশ স্ট্রাইড ইটারেশন পরিমাপ প্রদর্শন করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Why High-Frequency Trading Avoids Dynamic Memory Allocation',
        bn: 'উচ্চগতির ফিনান্সিয়াল ট্রেডিং কেন ডায়নামিক মেমোরি বরাদ্দ বর্জন করে'
      },
      text: {
        en: 'In electronic financial exchanges, microsecond delays determine millions of dollars in arbitrage profits. Production trading engines strictly forbid dynamic heap memory allocations during live market hours. All memory structures, order book depth arrays, and packet buffers are pre-allocated during system startup inside fixed-size ring buffers padded to 64-byte cache lines. This guarantees completely deterministic execution without a single page fault or allocator lock.',
        bn: 'ইলেকট্রনিক শেয়ার বাজারে মাইক্রোসেকেন্ডের সামান্যতম বিলম্বও কোটি কোটি টাকার লাভ-লোকসানের কারণ হতে পারে। প্রোডাকশন ট্রেডিং ইঞ্জিনগুলো লাইভ ট্রেডিং চলাকালীন ডায়নামিক হিপ মেমোরি বরাদ্দ সম্পূর্ণ নিষিদ্ধ করে। সমস্ত মেমোরি কাঠামো, অর্ডার বুক অ্যারে এবং প্যাকেট বাফার সিস্টেম চালুর সময় একবারই ৬৪-বাইটের ক্যাশ লাইনে প্যাডিং করে প্রি-অ্যালোকেট করা হয়। এর ফলে কোনো পেজ ফল্ট বা মেমোরি লকিং ঝামেলা ছাড়াই শতভাগ অনুমেয় গতিতে সিস্টেম পরিচালিত হয়।'
      },
    },
  ],
  exercises: [
    {
      id: 'mem-cap-ex-1',
      kind: 'predict',
      question: {
        en: 'How many bytes is a standard modern CPU cache line transferred in a single burst from physical DRAM to processor cache? (64). Type the number.',
        bn: 'ফিজিক্যাল র‍্যাম থেকে প্রসেসর ক্যাশে একবারে স্থানান্তরিত স্ট্যান্ডার্ড আধুনিক সিপিইউ ক্যাশ লাইনের আকার কত বাইট? ( ৬৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '64',
      hint: {
        en: 'Modern x86-64 and ARM64 CPUs use 64-byte cache lines.',
        bn: 'আধুনিক x86-64 এবং ARM64 প্রসেসরে ক্যাশ লাইনের আকার ৬৪ বাইট।'
      },
      explanation: {
        en: 'A standard CPU cache line is 64 bytes wide. All memory loads fetch 64 contiguous bytes at a time into the L1 cache.',
        bn: 'একটি স্ট্যান্ডার্ড সিপিইউ ক্যাশ লাইন ৬৪ বাইট প্রশস্ত। সমস্ত মেমোরি রিড একবারে ৬৪ টি অবিচ্ছিন্ন বাইট L1 ক্যাশে লোড করে।'
      },
    },
    {
      id: 'mem-cap-ex-2',
      kind: 'mcq',
      question: {
        en: 'What architectural performance hazard defines False Sharing in multi-threaded concurrent programming?',
        bn: 'মাল্টি-থ্রেডেড কনকারেন্ট প্রোগ্রামিংয়ে ফলস শেয়ারিং (False Sharing) এর আর্কিটেকচারাল সংজ্ঞা কী?'
      },
      options: [
        {
          en: 'Two independent threads running on different CPU cores write to separate variables that happen to share the exact same 64-byte cache line, causing constant cache invalidations',
          bn: 'পৃথক সিপিইউ কোরে চলা দুটি স্বাধীন থ্রেড দুটি ভিন্ন ভেরিয়েবলে লেখে যা দৈবক্রমে একই ৬৪-বাইটের ক্যাশ লাইনে অবস্থান করে, যার ফলে প্রতিনিয়ত ক্যাশ ইনভ্যালিডেশন ঘটতে থাকে',
        },
        {
          en: 'A user gives their computer password to another person falsely',
          bn: 'কোনো ব্যবহারকারী ভুলবশত তার কম্পিউটারের পাসওয়ার্ড অন্য কাউকে দিয়ে দেওয়া',
        },
        {
          en: 'Two computer screens share a single power cable and turn off',
          bn: 'দুটি কম্পিউটার মনিটর একটি পাওয়ার কেবলের সাথে যুক্ত হয়ে বন্ধ হয়ে যাওয়া',
        },
        {
          en: 'A web browser downloads false news stories from the internet',
          bn: 'একটি ওয়েব ব্রাউজার ইন্টারনেট থেকে ভুয়া সংবাদের পাতা ডাউনলোড করা',
        },
      ],
      answer: 0,
      hint: {
        en: 'Separate variables sharing the same 64-byte cache line trigger continuous cache coherency flushes.',
        bn: 'একই ৬৪-বাইটের ক্যাশ লাইনে থাকা দুটি ভিন্ন ভেরিয়েবল প্রতিনিয়ত ক্যাশ ফ্ল্যাশ ঘটায়।',
      },
      explanation: {
        en: 'False sharing degrades multi-core performance because the hardware coherency protocol (MESI) bounces the cache line back and forth between core caches.',
        bn: 'ফলস শেয়ারিং মাল্টি-কোর পারফরম্যান্স নষ্ট করে কারণ হার্ডওয়্যার প্রোটোকল বারবার উভয় কোরের মাঝে ক্যাশ লাইনটি আদান-প্রদান করে সময় নষ্ট করে।'
      },
    },
    {
      id: 'mem-cap-ex-3',
      kind: 'mcq',
      question: {
        en: 'How does the Linux sendfile() system call achieve Zero-Copy I/O when streaming large media files to network sockets?',
        bn: 'লার্জ মিডিয়া ফাইল নেটওয়ার্ক সকেটে পাঠানোর সময় লিনাক্স sendfile() সিস্টেম কল কীভাবে জিরো-কপি I/O নিশ্চিত করে?'
      },
      options: [
        {
          en: 'It transfers data directly from the kernel page cache into the network interface buffer using Direct Memory Access (DMA), completely bypassing user-space memory',
          bn: 'এটি ডিরেক্ট মেমোরি অ্যাক্সেস (DMA) ব্যবহার করে কার্নেল পেজ ক্যাশ থেকে সরাসরি নেটওয়ার্ক ইন্টারফেস বাফারে ডাটা পাঠায় এবং ইউজার-স্পেস মেমোরিকে সম্পূর্ণভাবে বাইপাস করে',
        },
        {
          en: 'It deletes the file from disk so zero bytes remain to be copied',
          bn: 'এটি ডিস্ক থেকে ফাইলটি মুছে দেয় যাতে কপি করার জন্য শূন্য বাইট অবশিষ্ট থাকে',
        },
        {
          en: 'It compresses the video until it occupies zero bytes of disk space',
          bn: 'এটি ভিডিওটিকে সংকুচিত করে যাতে ডিস্কে শূন্য বাইট জায়গা লাগে',
        },
        {
          en: 'It prints the file contents on paper and scans it back into the computer',
          bn: 'এটি ফাইলের লেখা কাগজে প্রিন্ট করে পুনরায় স্ক্যান করে কম্পিউটারে নেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'DMA transfers data directly between kernel buffers and network hardware.',
        bn: 'DMA সরাসরি কার্নেল বাফার ও নেটওয়ার্ক হার্ডওয়্যারের মধ্যে ডাটা স্থানান্তর করে।',
      },
      explanation: {
        en: 'sendfile() eliminates intermediate copies into user space, allowing direct kernel-to-NIC DMA transmission with minimal CPU utilization.',
        bn: 'sendfile() ইউজার স্পেসে কপি করার বাড়তি ঝামেলা দূর করে সরাসরি কার্নেল থেকে নেটওয়ার্ক কার্ডে ডাটা পাঠিয়ে সিপিইউর শ্রম বাঁচায়।'
      },
    },
    {
      id: 'mem-cap-ex-4',
      kind: 'predict',
      question: {
        en: 'If an in-memory circular ring buffer is initialized with a capacity of 1024 slots, how many total slots does it contain? (1024). Type the number.',
        bn: 'একটি ইন-মেমোরি সার্কুলার রিং বাফার যদি ১০২৪ টি স্লটের ধারণক্ষমতা নিয়ে চালু করা হয়, তবে এতে মোট কত স্লট থাকে? ( ১০২৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1024',
      hint: {
        en: 'The initialized capacity is 1024 slots.',
        bn: 'ইনিশিয়ালাইজ করা মোট ধারণক্ষমতা হলো ১০২৪ টি স্লট।'
      },
      explanation: {
        en: 'Power of two sizing with 1024 slots enables fast bitwise wrapping using mask 1023.',
        bn: '২ এর ঘাতবিশিষ্ট ১০২৪ স্লটের সাইজ ১০২৩ মাস্ক ব্যবহার করে দ্রুত বিটওয়াইজ র্যাপিংয়ের সুবিধা প্রদান করে।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Systems Memory Architecture Capstone Quiz',
      bn: 'সিস্টেমস মেমোরি আর্কিটেকচার ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'mem-cap-qz-1',
        kind: 'mcq',
        topic: 'row-major-vs-column-major-cache',
        question: {
          en: 'Why does iterating through a large two-dimensional array in row-major order execute significantly faster than column-major order on modern CPUs?',
          bn: 'আধুনিক সিপিইউতে একটি বড় দ্বিমাত্রিক অ্যারে রো-মেজর ক্রমে পড়লে তা কলাম-মেজর ক্রমের চেয়ে উল্লেখযোগ্যভাবে দ্রুত চলে কেন?'
        },
        options: [
          {
            en: 'Row-major elements reside contiguously in memory within the same 64-byte cache line (yielding high L1 cache hits), whereas column-major traversal jumps rows on every iteration (triggering constant cache misses)',
            bn: 'রো-মেজর উপাদানগুলো মেমোরিতে পাশাপাশি একই ৬৪-বাইটের ক্যাশ লাইনে থাকে ( যা প্রচুর L1 ক্যাশ হিট দেয় ), কিন্তু কলাম-মেজর ট্রাভার্সালে প্রতি ধাপে সারি লাফিয়ে চলতে হয় ( যা বারবার ক্যাশ মিস ঘটায় )',
          },
          {
            en: 'Because computer screens can only display horizontal rows',
            bn: 'কারণ কম্পিউটার স্ক্রিন কেবল অনুভূমিক সারি প্রদর্শন করতে পারে',
          },
          {
            en: 'Because column-major iteration requires an active satellite internet connection',
            bn: 'কারণ কলাম-মেজর ইটারেশনের জন্য সক্রিয় স্যাটেলাইট ইন্টারনেট সংযোগ প্রয়োজন হয়',
          },
          {
            en: 'Because keyboards are laid out in horizontal rows of keys',
            bn: 'কারণ কিবোর্ডের বাটনগুলো অনুভূমিক সারিতে সাজানো থাকে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Spatial locality: contiguous row elements share the same 64-byte cache line.',
          bn: 'স্প্যাশিয়াল লোকালিটি: সংলগ্ন উপাদানগুলো একই ৬৪-বাইটের ক্যাশ লাইন শেয়ার করে।',
        },
        explanation: {
          en: 'Spatial locality ensures that fetching one element brings its row neighbors into L1 cache, avoiding repeated high-latency DRAM lookups.',
          bn: 'স্প্যাশিয়াল লোকালিটি নিশ্চিত করে একটি উপাদান আনলে পাশের উপাদানগুলোও L1 ক্যাশে চলে আসে, ফলে বারবার ধীরগতির র‍্যামে যেতে হয় না।'
        },
      },
      {
        id: 'mem-cap-qz-2',
        kind: 'mcq',
        topic: 'ring-buffer-realtime-advantage',
        question: {
          en: 'What makes a fixed-size Circular Ring Buffer the architectural choice for real-time systems like audio processing and trading engines?',
          bn: 'অডিও প্রসেসিং এবং ট্রেডিং ইঞ্জিনের মতো রিয়েল-টাইম সিস্টেমে একটি নির্দিষ্ট সাইজের সার্কুলার রিং বাফার কেন প্রথম পছন্দ?'
        },
        options: [
          {
            en: 'It pre-allocates memory once at startup, enabling deterministic O(1) push and pop operations with exactly zero runtime memory allocations and zero garbage collection pauses',
            bn: 'এটি সিস্টেম শুরুর সময় একবারই মেমোরি বরাদ্দ করে নেয়, যা কোনো রানটাইম মেমোরি বরাদ্দ বা গার্বেজ কালেকশন বিরতি ছাড়াই O(1) গতিতে কাজ সম্পন্ন করে',
          },
          {
            en: 'It plays pleasant musical tones whenever data is written into it',
            bn: 'এতে ডাটা লেখার সময় এটি চমৎকার বাদ্যযন্ত্রের সুর বাজায়',
          },
          {
            en: 'It automatically translates English comments into German',
            bn: 'এটি ইংরেজি মন্তব্যগুলোকে স্বয়ংক্রিয়ভাবে জার্মান ভাষায় রূপান্তর করে',
          },
          {
            en: 'It reduces the physical temperature of the computer case by 50 degrees',
            bn: 'এটি কম্পিউটার কেসিংয়ের তাপমাত্রা ৫০ ডিগ্রি কমিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Deterministic O(1) streaming without any dynamic allocation or GC pauses.',
          bn: 'ডায়নামিক বরাদ্দ বা GC বিরতি ছাড়াই O(1) গতিতে অবিরাম ডাটা আদান-প্রদান।',
        },
        explanation: {
          en: 'Ring buffers provide predictable, bounded-latency streaming without triggering memory allocator locks or garbage collection freezes.',
          bn: 'রিং বাফার কোনো মেমোরি লকিং বা গার্বেজ কালেকশনের বিলম্ব ছাড়াই সম্পূর্ণ অনুমেয় গতিতে রিয়েল-টাইম ডাটা পরিচালনা করে।'
        },
      },
      {
        id: 'mem-cap-qz-3',
        kind: 'mcq',
        topic: 'cache-vs-ram-latency-impact',
        question: {
          en: 'How does the hardware latency gap between L1 cache (1ns) and physical DRAM (70ns) influence modern software design?',
          bn: 'L1 ক্যাশ ( ১ ন্যানোসেকেন্ড ) এবং ফিজিক্যাল র‍্যামের ( ৭০ ন্যানোসেকেন্ড ) মধ্যকার গতি ব্যবধান আধুনিক সফটওয়্যার ডিজাইনকে কীভাবে প্রভাবিত করে?'
        },
        options: [
          {
            en: 'Because DRAM access is 70 times slower than L1 cache, high-performance systems use data-oriented design (struct-of-arrays) and contiguous arrays to maximize cache hits rather than pointer-heavy linked trees',
            bn: 'যেহেতু র‍্যাম থেকে ডাটা আনা L1 ক্যাশের চেয়ে ৭০ গুণ ধীরগতির, তাই দ্রুতগতির সিস্টেমে পয়েন্টার-ভিত্তিক লিংকড ট্রির বদলে ক্যাশ-ফ্রেন্ডলি অবিচ্ছিন্ন অ্যারে ও ডাটা-ওরিয়েন্টেড ডিজাইন ব্যবহার করা হয়',
          },
          {
            en: 'It forces programmers to write software only using uppercase letters',
            bn: 'এটি প্রোগ্রামারদের কেবল বড় হাতের অক্ষর দিয়ে কোড লিখতে বাধ্য করে',
          },
          {
            en: 'It requires computer cases to be made of solid copper metal',
            bn: 'এর কারণে কম্পিউটারের কেসিং খাঁটি তামা দিয়ে তৈরি করতে হয়',
          },
          {
            en: 'It limits all computer hard drives to exactly 1 gigabyte of space',
            bn: 'এটি সমস্ত কম্পিউটার হার্ড ড্রাইভের স্থান ঠিক ১ গিগাবাইটে সীমাবদ্ধ করে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'DRAM latency penalties favor contiguous data structures over scattered pointer nodes.',
          bn: 'র‍্যামের ধীরগতির কারণে বিক্ষিপ্ত পয়েন্টার নোডের বদলে অবিচ্ছিন্ন ডাটা স্ট্রাকচার সেরা পছন্দ।',
        },
        explanation: {
          en: 'Traversing pointer-chasing node graphs causes frequent DRAM cache misses. Modern high-speed software organizes data in contiguous arrays to keep data in CPU caches.',
          bn: 'পয়েন্টার অনুসরণ করা নোড গ্রাফ বারবার ক্যাশ মিস ঘটায়। আধুনিক সিস্টেম ডাটাকে অবিচ্ছিন্ন অ্যারেতে সাজিয়ে সিপিইউ ক্যাশের সর্বোচ্চ সুবিধা নেয়।'
        },
      },
      {
        id: 'mem-cap-qz-4',
        kind: 'mcq',
        topic: 'false-sharing-padding-solution',
        question: {
          en: 'What architectural technique successfully prevents False Sharing between concurrent worker threads?',
          bn: 'কোন আর্কিটেকচারাল কৌশলের মাধ্যমে কনকারেন্ট কর্মী থ্রেডগুলোর মধ্যকার ফলস শেয়ারিং সফলভাবে প্রতিরোধ করা যায়?'
        },
        options: [
          {
            en: 'Applying 64-byte memory alignment and struct padding (e.g. alignas(64)) to ensure each thread variable resides on its own private CPU cache line',
            bn: 'মেমোরিতে ৬৪-বাইটের অ্যালাইনমেন্ট ও স্ট্রাক্ট প্যাডিং ( যেমন alignas(64) ) ব্যবহার করা যাতে প্রতিটি থ্রেডের নিজস্ব ভেরিয়েবল সম্পূর্ণ পৃথক সিপিইউ ক্যাশ লাইনে থাকে',
          },
          {
            en: 'Running all computer software on battery power only',
            bn: 'কম্পিউটারের সমস্ত সফটওয়্যার কেবল ব্যাটারি পাওয়ারে চালানো',
          },
          {
            en: 'Turning off the computer monitor while running programs',
            bn: 'প্রোগ্রাম চলার সময় কম্পিউটার মনিটর বন্ধ করে রাখা',
          },
          {
            en: 'Deleting all comments from the application source code',
            bn: 'অ্যাপ্লিকেশনের সোর্স কোড থেকে সমস্ত কমেন্ট বা মন্তব্য মুছে ফেলা',
          },
        ],
        answer: 0,
        hint: {
          en: 'Padding variables to 64-byte boundaries ensures separate cache lines.',
          bn: 'ভেরিয়েবলকে ৬৪-বাইটের সীমানায় প্যাডিং করলে সেগুলো পৃথক ক্যাশ লাইনে অবস্থান করে।',
        },
        explanation: {
          en: 'Cache line padding guarantees variables used by independent threads do not share a 64-byte line, eliminating false sharing cache flushes.',
          bn: 'ক্যাশ লাইন প্যাডিং নিশ্চিত করে যে স্বাধীন থ্রেডের ভেরিয়েবলগুলো একই ৬৪-বাইট লাইনে থাকবে না, ফলে ক্যাশ ইনভ্যালিডেশনের সমস্যা দূর হয়।'
        },
      },
    ],
  },
  next: {
    slug: 'meet-processes',
    title: {
      en: 'Operating System Processes & Process Control Blocks',
      bn: 'অপারেটিং সিস্টেম প্রসেস এবং প্রসেস কন্ট্রোল ব্লক'
    },
  },
};
