import type { Lesson } from '../../../lib/types';

export const CacheHierarchyLesson: Lesson = {
  slug: 'cache-hierarchy',
  tech: 'computer-architecture',
  title: {
    en: 'Cache Hierarchy, Locality & Memory Latency',
    bn: 'ক্যাশ হায়ারার্কি, লোকালিটি এবং মেমোরি ল্যাটেন্সি'
  },
  summary: {
    en: 'Bridge the massive speed disparity between CPU clock cycles and main RAM. Master the Memory Wall, Temporal Locality versus Spatial Locality with 64-byte cache lines, L1, L2, and L3 multi-tier cache memory, Set-Associative mapping, Cache Hit/Miss calculations, and Write-Back versus Write-Through cache consistency policies.',
    bn: 'সিপিইউ ক্লক সাইকেল এবং মূল র‍্যামের মধ্যকার বিশাল গতির পার্থক্য মেটানোর কৌশল শিখুন। মেমোরি ওয়াল, টেম্পোরাল লোকালিটি এবং ৬৪-বাইট ক্যাশ লাইনযুক্ত স্প্যাশিয়াল লোকালিটি, L1, L2 ও L3 বহুস্তর ক্যাশ মেমোরি, সেট-অ্যাসোসিয়েটিভ ম্যাপিং, ক্যাশ হিট ও মিস গণনা এবং রাইট-ব্যাক বনাম রাইট-থ্রু ক্যাশ নীতি গভীরভাবে আয়ত্ত করুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'memory-wall-locality',
      text: {
        en: 'The Memory Wall and Principles of Cache Locality',
        bn: 'মেমোরি ওয়াল এবং ক্যাশ লোকালিটির মূলনীতি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'While microprocessor arithmetic execution speeds have accelerated exponentially over decades, main Dynamic RAM (DRAM) access latencies have improved at a far slower pace. This performance gap is known as the Memory Wall. A modern CPU core operating at 3 GHz performs an internal register operation in approximately 0.33 nanoseconds. In stark contrast, fetching data from main system DRAM requires 60 to 100 nanoseconds, forcing the CPU to stall for 200 to 300 wasted clock cycles. Without high-speed on-chip cache memory, modern processors would spend over 95 percent of their time completely idle waiting on memory buses.',
        bn: 'বিগত কয়েক দশকে প্রসেসরের পাটিগণিত এক্সিকিউশন গতি বিপুল বৃদ্ধি পেলেও মূল ডায়নামিক র‍্যামের (DRAM) ল্যাটেন্সির উন্নতি হয়েছে অত্যন্ত ধীরগতিতে। এই বিশাল কর্মক্ষমতার ব্যবধানকে মেমোরি ওয়াল (Memory Wall) বলা হয়। ৩ গিগাহার্টজে চলা আধুনিক একটি সিপিইউ কোর প্রায় ০.৩৩ ন্যানোসেকেন্ডে একটি অভ্যন্তরীণ রেজিস্টার অপারেশন সম্পন্ন করে। অন্যদিকে, মূল সিস্টেম ডির‍্যাম থেকে ডাটা আনতে ৬০ থেকে ১০০ ন্যানোসেকেন্ড সময় লাগে, যার ফলে সিপিইউকে ২০০ থেকে ৩০০ ক্লক সাইকেল অলস বসে থাকতে হয়। হাই-স্পিড অন-চিপ ক্যাশ মেমোরি না থাকলে আধুনিক প্রসেসর তাদের কাজের ৯৫ শতাংশেরও বেশি সময় মেমোরি বাসের অপেক্ষায় অপচয় করত।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Microprocessor architects defeat the Memory Wall by exploiting the Principle of Locality, which states that computer programs access a relatively small portion of their address space at any given instant:',
        bn: 'মাইক্রোপ্রসেসর স্থপতিরা লোকালিটি নীতির সুযোগ নিয়ে মেমোরি ওয়াল সমস্যা সমাধান করেন, যা প্রকাশ করে যে যেকোনো মুহূর্তে একটি কম্পিউটার প্রোগ্রাম তার মেমোরির একটি ক্ষুদ্র অংশ ব্যবহার করে:'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Temporal Locality (Locality in Time)',
            bn: '১. টেম্পোরাল লোকালিটি (সময়ের লোকালিটি)'
          },
          text: {
            en: 'If a memory address is accessed right now, it will very likely be accessed again repeatedly in the near future. Examples include loop accumulator variables, array length bounds, and active function call stack frames.',
            bn: 'যদি কোনো মেমোরি অ্যাড্রেস এই মুহূর্তে ব্যবহৃত হয়, তবে অদূর ভবিষ্যতে বারবার সেটি পুনরায় ব্যবহারের প্রবল সম্ভাবনা থাকে। উদাহরণস্বরূপ লুপের অ্যাকুমুলেটর ভেরিয়েবল, অ্যারের দৈর্ঘ্য এবং সক্রিয় ফাংশন কল স্ট্যাক ফ্রেম।'
          }
        },
        {
          title: {
            en: '2. Spatial Locality (Locality in Space)',
            bn: '২. স্প্যাশিয়াল লোকালিটি (স্থানের লোকালিটি)'
          },
          text: {
            en: 'If a memory address is accessed, contiguous memory addresses physically adjacent to it will likely be accessed soon. Modern processors capitalize on spatial locality by fetching fixed 64-byte blocks called Cache Lines rather than individual words. Reading 1 single 4-byte integer automatically brings 15 adjacent integers into high-speed cache for free.',
            bn: 'যদি কোনো মেমোরি অ্যাড্রেস ব্যবহৃত হয়, তবে তার ঠিক পাশাপাশি থাকা সন্নিহিত অ্যাড্রেসগুলোও দ্রুত ব্যবহৃত হওয়ার সম্ভাবনা থাকে। আধুনিক প্রসেসর একক ওয়ার্ডের বদলে ৬৪-বাইট আকারের ক্যাশ লাইন (Cache Line) মেমোরি ব্লক একবারে সংগ্রহ করে এই সুবিধার সদ্ব্যবহার করে। ১ টি একক ৪-বাইট ইন্টিজার পড়ার সময় স্বয়ংক্রিয়ভাবে পার্শ্ববর্তী ১৫ টি ইন্টিজারও কোনো বাড়তি খরচ ছাড়াই উচ্চগতির ক্যাশে চলে আসে।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      title: {
        en: 'The Memory Latency Hierarchy & Cache Line Structure',
        bn: 'মেমোরি ল্যাটেন্সি হায়ারার্কি এবং ক্যাশ লাইন গঠন'
      },
      svg: `<svg viewBox="0 0 820 420" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Hierarchical CPU cache memory pyramid and 64 byte cache line decomposition">
  <rect width="820" height="420" fill="#0f172a" rx="12"/>
  
  <!-- Left Side: Cache Pyramid -->
  <g transform="translate(40, 20)">
    <text x="180" y="24" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">HARDWARE MEMORY HIERARCHY</text>
    
    <!-- Registers -->
    <polygon points="180,45 120,80 240,80" fill="#ef4444"/>
    <text x="180" y="70" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">CPU Registers (0.5 ns, &lt;2 KB)</text>
    
    <!-- L1 Cache -->
    <polygon points="120,85 85,130 275,130 240,85" fill="#f59e0b"/>
    <text x="180" y="112" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">L1 Cache (~1 ns, 64 KB)</text>
    
    <!-- L2 Cache -->
    <polygon points="85,135 55,185 305,185 275,135" fill="#10b981"/>
    <text x="180" y="165" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">L2 Cache (~4 ns, 512 KB - 1 MB)</text>
    
    <!-- L3 Cache -->
    <polygon points="55,190 25,245 335,245 305,190" fill="#06b6d4"/>
    <text x="180" y="222" fill="#0f172a" font-size="11" font-weight="bold" text-anchor="middle">L3 Cache (~15 ns, 16 - 64 MB)</text>
    
    <!-- Main RAM -->
    <polygon points="25,250 0,310 360,310 335,250" fill="#6366f1"/>
    <text x="180" y="285" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Main DRAM (~70 ns, 16 - 128 GB)</text>
    
    <!-- NVMe / SSD -->
    <rect x="0" y="315" width="360" height="50" rx="4" fill="#334155"/>
    <text x="180" y="345" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">NVMe SSD (~20,000 ns, 1 - 4 TB)</text>
  </g>
  
  <!-- Right Side: 64-Byte Cache Line Breakdown -->
  <g transform="translate(440, 20)">
    <text x="175" y="24" fill="#a855f7" font-size="14" font-weight="bold" text-anchor="middle">64-BYTE CACHE LINE ANATOMY</text>
    
    <rect x="0" y="55" width="350" height="150" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="175" y="80" fill="#cbd5e1" font-size="12" text-anchor="middle">Physical 64-bit Memory Address Split</text>
    
    <!-- Address Decomposition Boxes -->
    <rect x="15" y="100" width="160" height="40" rx="4" fill="#0284c7"/>
    <text x="95" y="125" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Tag (e.g. 52 bits)</text>
    
    <rect x="185" y="100" width="80" height="40" rx="4" fill="#ca8a04"/>
    <text x="225" y="125" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Set Index</text>
    
    <rect x="275" y="100" width="60" height="40" rx="4" fill="#16a34a"/>
    <text x="305" y="125" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Offset</text>
    
    <text x="95" y="155" fill="#94a3b8" font-size="10" text-anchor="middle">Identifies block</text>
    <text x="225" y="155" fill="#94a3b8" font-size="10" text-anchor="middle">Selects set</text>
    <text x="305" y="155" fill="#94a3b8" font-size="10" text-anchor="middle">6 bits (0-63)</text>
    
    <rect x="15" y="175" width="320" height="20" rx="3" fill="#090d16"/>
    <text x="175" y="190" fill="#38bdf8" font-size="10" text-anchor="middle">Dirty Bit (1b) | Valid Bit (1b) | 64 Bytes Data Payload</text>
    
    <!-- Associativity Callout -->
    <rect x="0" y="225" width="350" height="140" rx="6" fill="#1e293b" stroke="#334155"/>
    <text x="175" y="250" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">N-WAY SET ASSOCIATIVE</text>
    <text x="20" y="275" fill="#cbd5e1" font-size="11">• Direct-Mapped: 1 line per set (High collision risk)</text>
    <text x="20" y="300" fill="#38bdf8" font-size="11">• 8-Way Associative: 8 lines per set (Modern standard)</text>
    <text x="20" y="325" fill="#10b981" font-size="11">• Write-Back: writes dirty bit; delays RAM flush</text>
    <text x="20" y="350" fill="#f87171" font-size="11">• Write-Through: writes both cache and RAM immediately</text>
  </g>
</svg>`,
      caption: {
        en: 'The CPU cache hierarchy bridges the speed gap from 0.5 nanosecond registers to 70 nanosecond DRAM using 64-byte cache lines.',
        bn: 'সিপিইউ ক্যাশ হায়ারার্কি ৬৪-বাইট ক্যাশ লাইন ব্যবহারের মাধ্যমে ০.৫ ন্যানোসেকেন্ডের রেজিস্টার থেকে ৭০ ন্যানোসেকেন্ডের ডির‍্যামের গতির ব্যবধান দূর করে।'
      },
    },
    {
      type: 'heading',
      id: 'cache-associativity-write-policies',
      text: {
        en: 'Cache Set Associativity & Write Consistency Policies',
        bn: 'ক্যাশ সেট অ্যাসোসিয়েটিভিটি এবং রাইট কনসিস্টেন্সি নীতি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When the CPU requests a memory address, the cache controller extracts the Set Index to locate the candidate lines. In a Direct-Mapped cache, each memory address maps to exactly 1 specific cache line. If two frequently accessed variables hash to the same set index, they repeatedly evict each other in a destructive performance failure called Cache Thrashing. Modern microprocessors eliminate thrashing by using N-Way Set-Associative caches (such as 8-way associativity in L1 and 16-way in L3), allowing up to 8 or 16 independent lines to coexist within each set, managed by Least-Recently-Used (LRU) eviction algorithms.',
        bn: 'সিপিইউ যখন কোনো মেমোরি অ্যাড্রেস দাবি করে, তখন ক্যাশ কন্ট্রোলার সেট ইনডেক্স ব্যবহার করে নির্দিষ্ট লাইনগুলো চিহ্নিত করে। একটি ডাইরেক্ট-ম্যাপড ক্যাশে প্রতিটি মেমোরি অ্যাড্রেস ঠিক ১ টি নির্দিষ্ট ক্যাশ লাইনে ম্যাপ হয়। যদি ঘনঘন ব্যবহৃত ২ টি ভিন্ন ভেরিয়েবল একই সেট ইনডেক্সে আঘাত করে, তবে তারা বারবার একে অপরকে ক্যাশ থেকে তাড়িয়ে দেয় যা ক্যাশ থ্র্যাশিং (Cache Thrashing) নামে পরিচিত। আধুনিক মাইক্রোপ্রসেসর এন-ওয়ে সেট-অ্যাসোসিয়েটিভ ক্যাশ (যেমন L1 ক্যাশে ৮-ওয়ে এবং L3 ক্যাশে ১৬-ওয়ে) ব্যবহারের মাধ্যমে থ্র্যাশিং দূর করে, যার ফলে প্রতিটি সেটে ৮ বা ১৬ টি স্বাধীন লাইন একসাথে থাকতে পারে এবং লিস্ট-রিসেন্টলি-ইউজড (LRU) অ্যালগরিদম দ্বারা পরিচালিত হয়।'
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Write-Through Policy',
          def: {
            en: 'Every memory write operation updates both the cache line and main system DRAM simultaneously. Simplifies cache coherence, but heavily saturates the system memory bus with write traffic.',
            bn: 'প্রতিটি মেমোরি রাইট অপারেশন একই সাথে ক্যাশ লাইন এবং মূল সিস্টেম ডির‍্যাম উভয় স্থানে ডাটা আপডেট করে। এটি ক্যাশ সামঞ্জস্য রক্ষা সহজ করে, তবে মেমোরি বাসকে অতিরিক্ত রাইট ট্রাফিক দিয়ে ভারাক্রান্ত করে তোলে।'
          }
        },
        {
          term: 'Write-Back Policy with Dirty Bit',
          def: {
            en: 'Stores write exclusively to the on-chip cache line, marking an internal Dirty Bit to 1. The modified block is written back to main DRAM only when the line is evicted by an LRU replacement, drastically reducing memory bus contention.',
            bn: 'মেমোরি রাইট শুধুমাত্র অন-চিপ ক্যাশ লাইনে সম্পন্ন হয় এবং একটি অভ্যন্তরীণ ডার্টি বিটের মান ১ করা হয়। পরবর্তীতে LRU প্রতিস্থাপনের কারণে লাইনটি মুছে ফেলার সময়ই কেবল সংশোধিত ডাটা ডির‍্যামে লেখা হয়, যা বাস ট্রাফিক ব্যাপকভাবে কমায়।'
          }
        },
        {
          term: 'Average Memory Access Time (AMAT)',
          def: {
            en: 'Formula calculating effective memory latency: AMAT = Hit Time + (Miss Rate * Miss Penalty). Even a tiny 5 percent miss rate to a 100-cycle RAM degrades processor performance significantly.',
            bn: 'কার্যকর মেমোরি ল্যাটেন্সি গণনার সূত্র: AMAT = হিট টাইম + ( মিস রেট * মিস পেনাল্টি )। ১০০ সাইকেল ল্যাটেন্সির র‍্যামে মাত্র ৫ শতাংশ মিস রেটও প্রসেসরের সামগ্রিক কর্মক্ষমতাকে মারাত্মকভাবে কমিয়ে দেয়।'
          }
        }
      ]
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'cache-locality-benchmark.js',
      code: `// Deterministic Cache Line Simulation & Spatial Locality Benchmark
class CacheLineSimulator {
  constructor(lineSizeBytes = 64) {
    this.lineSizeBytes = lineSizeBytes;
    this.intsPerLine = lineSizeBytes / 4; // 16 32-bit integers per 64-byte line
    this.cachedLineTag = -1;
    this.hits = 0;
    this.misses = 0;
  }

  access(elementIndex) {
    // Determine which 64-byte cache line block this index belongs to
    const lineTag = Math.floor(elementIndex / this.intsPerLine);

    if (this.cachedLineTag === lineTag) {
      this.hits++;
    } else {
      this.misses++;
      // Hardware prefetch: fills entire 64-byte cache line from RAM
      this.cachedLineTag = lineTag;
    }
  }

  get hitRatePercent() {
    const total = this.hits + this.misses;
    return total === 0 ? 0 : ((this.hits / total) * 100).toFixed(1);
  }
}

// 1. Sequential Traversal (Stride = 1): Exploits Spatial Locality
const seqCache = new CacheLineSimulator(64);
const TOTAL_ELEMENTS = 64; // 4 full cache lines

for (let i = 0; i < TOTAL_ELEMENTS; i++) {
  seqCache.access(i);
}

console.log('Sequential Access (Stride 1):');
console.log('  Cache Hits   =', seqCache.hits);
console.log('  Cache Misses =', seqCache.misses);
console.log('  Hit Rate     =', seqCache.hitRatePercent + '%');

// 2. Strided Traversal (Stride = 16 integers = 64 bytes): Misses Every Cache Line
const stridedCache = new CacheLineSimulator(64);

for (let i = 0; i < TOTAL_ELEMENTS; i += 16) {
  stridedCache.access(i);
}

console.log('\\nStrided Access (Stride 16 integers):');
console.log('  Cache Hits   =', stridedCache.hits);
console.log('  Cache Misses =', stridedCache.misses);
console.log('  Hit Rate     =', stridedCache.hitRatePercent + '%');`,
      caption: {
        en: 'Sequential access achieves 93.8 percent cache hits via 64-byte spatial locality; strided access suffers 0 percent hits.',
        bn: 'ধারাবাহিক অ্যাক্সেস ৬৪-বাইট স্প্যাশিয়াল লোকালিটির কল্যাণে ৯৩.৮ শতাংশ হিট রেট পায়; স্ট্রাইড অ্যাক্সেস ০ শতাংশ হিট পায়।'
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: {
        en: 'Multithreaded False Sharing on Multi-Core CPUs',
        bn: 'মাল্টি-কোর সিপিইউতে মাল্টিথ্রেডেড ফলস শেয়ারিং'
      },
      text: {
        en: 'False Sharing occurs when two CPU cores execute parallel threads updating independent variables that reside within the exact same 64-byte cache line. Under the hardware MESI cache coherence protocol, Core 1 writing variable A invalidates the entire cache line in Core 2, forcing Core 2 to stall and reload from L3 cache even though it only modified variable B. Programmers eliminate false sharing by adding 64-byte alignment padding between thread variables.',
        bn: 'ফলস শেয়ারিং (False Sharing) তখন ঘটে যখন দুটি আলাদা সিপিইউ কোরে চলা স্বাধীন থ্রেড এমন দুটি ভেরিয়েবল আপডেট করে যা একই ৬৪-বাইট ক্যাশ লাইনে অবস্থিত। হার্ডওয়্যারের MESI ক্যাশ কোহেরেন্স প্রটোকলের অধীনে, কোর ১ যখন ভেরিয়েবল A রাইট করে তখন তা কোর ২ এর পুরো ক্যাশ লাইন বাতিল করে দেয়, ফলে কোর ২ শুধুমাত্র ভেরিয়েবল B পরিবর্তন করলেও পুনরায় L3 ক্যাশ থেকে পুরো লাইন রিড করতে বাধ্য হয়। থ্রেড ভেরিয়েবলের মাঝে ৬৪-বাইট প্যাডিং যুক্ত করে ডেভেলপাররা এই সমস্যা সমাধান করেন।'
      },
    },
  ],
  exercises: [
    {
      id: 'ca-cache-ex-1',
      kind: 'predict',
      question: {
        en: 'How many 4-byte (32-bit) integer numbers fit inside one standard 64-byte CPU cache line? (64 / 4)',
        bn: '১ টি সাধারণ ৬৪-বাইট সিপিইউ ক্যাশ লাইনের ভেতরে কয়টি ৪-বাইট ( ৩২-বিট ) পূর্ণসংখ্যা আঁটে? ( ৬৪ / ৪ )'
      },
      answer: '16',
      hint: {
        en: 'Divide the 64-byte line size by 4 bytes per integer.',
        bn: '৬৪-বাইট লাইন আকারকে প্রতি ইন্টিজারের ৪ বাইট দিয়ে ভাগ করুন।'
      },
      explanation: {
        en: 'Dividing 64 bytes by 4 bytes yields exactly 16 integers loaded into CPU cache per line fetch.',
        bn: '৬৪ বাইটকে ৪ বাইট দিয়ে ভাগ করলে প্রতি লাইন ফেচে ঠিক ১৬ টি ইন্টিজার সিপিইউ ক্যাশে লোড হয়।'
      },
    },
    {
      id: 'ca-cache-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the operational function of the Dirty Bit in a Write-Back cache line?',
        bn: 'রাইট-ব্যাক ক্যাশ লাইনে ডার্টি বিট (Dirty Bit) এর কাজের ভূমিকা কী?'
      },
      options: [
        {
          en: 'It indicates that the line data was modified in cache and must be written back to DRAM before eviction',
          bn: 'এটি নির্দেশ করে যে লাইনের ডাটা ক্যাশে পরিবর্তিত হয়েছে এবং মুছে ফেলার আগে ডির‍্যামে সংরক্ষণ করতে হবে',
        },
        {
          en: 'It flags memory addresses that contain viruses or corrupted bits',
          bn: 'এটি ভাইরাস বা নষ্ট বিটযুক্ত মেমোরি অ্যাড্রেস চিহ্নিত করে',
        },
        {
          en: 'It forces the CPU clock to run at half its rated frequency',
          bn: 'এটি সিপিইউ ক্লককে তার স্বাভাবিক ফ্রিকোয়েন্সির অর্ধেকে চালাতে বাধ্য করে',
        },
        {
          en: 'It converts Big-Endian bytes into Little-Endian integer arrays',
          bn: 'এটি বিগ-এন্ডিয়ান বাইটকে লিটল-এন্ডিয়ান ইন্টিজার অ্যারেতে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Marks whether cache contents differ from main memory so the line gets flushed when evicted.',
        bn: 'ক্যাশের তথ্য মূল মেমোরির সাথে অমিল আছে কিনা তা চিহ্নিত করে যাতে লাইনটি মুছে ফেলার সময় র‍্যামে আপডেট করা হয়।',
      },
      explanation: {
        en: 'In Write-Back caching, modified cache blocks set their dirty bit to 1; only dirty blocks are written to RAM when replaced, saving huge memory bandwidth.',
        bn: 'রাইট-ব্যাক ক্যাশিংয়ে পরিবর্তিত ব্লকের ডার্টি বিট ১ করা হয়; প্রতিস্থাপনের সময় শুধুমাত্র ডার্টি ব্লকগুলোই র‍্যামে লেখা হয়, যা বিশাল ব্যান্ডউইথ সাশ্রয় করে।'
      },
    },
    {
      id: 'ca-cache-ex-3',
      kind: 'mcq',
      question: {
        en: 'Why does iterating through a large two-dimensional array row-by-row execute much faster than column-by-column in C or JavaScript?',
        bn: 'সি বা জাভাস্ক্রিপ্টে একটি বিশাল দ্বিমাত্রিক অ্যারে কলামভিত্তিক ঘোরার চেয়ে সারিভিত্তিক (row-by-row) ঘোরা অনেক দ্রুত কাজ করে কেন?'
      },
      options: [
        {
          en: 'Row traversal visits contiguous memory addresses, maximizing Spatial Locality and filling 64-byte cache lines',
          bn: 'সারিভিত্তিক পরিভ্রমণ পাশাপাশি থাকা ধারাবাহিক মেমোরি অ্যাড্রেস পড়ে, যা স্প্যাশিয়াল লোকালিটি বাড়ায় এবং ৬৪-বাইট ক্যাশ লাইনের সর্বোচ্চ সুবিধা নেয়',
        },
        {
          en: 'Row traversal disables all operating system background processes',
          bn: 'সারিভিত্তিক পরিভ্রমণ অপারেটিং সিস্টেমের সমস্ত ব্যাকগ্রাউন্ড প্রসেস বন্ধ করে দেয়',
        },
        {
          en: 'Column traversal causes the CPU ALU to invert binary arithmetic logic',
          bn: 'কলামভিত্তিক পরিভ্রমণ সিপিইউ অ্যালুর বাইনারি লজিক উল্টে দেয়',
        },
        {
          en: 'Because computer hardware cannot multiply row numbers',
          bn: 'কারণ কম্পিউটার হার্ডওয়্যার সারির সংখ্যা গুণ করতে পারে না',
        },
      ],
      answer: 0,
      hint: {
        en: 'Sequential array memory matches the physical cache line layout, preventing repeated cache misses.',
        bn: 'মেমোরিতে উপাদানগুলো ধারাবাহিকভাবে অবস্থান করায় প্রতিবার ক্যাশ লাইনের সম্পূর্ণ সুবিধা নেওয়া যায়।',
      },
      explanation: {
        en: 'Row-major layout stores sequential row elements in adjacent memory locations; reading one element pulls the whole 64-byte line into L1 cache, avoiding misses.',
        bn: 'রো-মেজর লেআউটে সারির উপাদানগুলো মেমোরিতে পাশাপাশি সংরক্ষিত থাকে; একটি উপাদান পড়লে পুরো ৬৪-বাইট ক্যাশ লাইন L1 ক্যাশে চলে আসে এবং মিস এড়ায়।'
      },
    },
    {
      id: 'ca-cache-ex-4',
      kind: 'predict',
      question: {
        en: 'If an L1 cache has a hit time of 1 cycle, a miss rate of 10 percent (0.10), and a miss penalty of 10 cycles, what is the Average Memory Access Time (AMAT) in cycles? Formula: 1 + (0.10 * 10) = 1 + 1.',
        bn: 'যদি L1 ক্যাশের হিট টাইম হয় ১ সাইকেল, মিস রেট ১০ শতাংশ ( ০.১০ ) এবং মিস পেনাল্টি ১০ সাইকেল হয়, তবে সাইকেলে গড় মেমোরি অ্যাক্সেস টাইম (AMAT) কত? সূত্র: ১ + ( ০.১০ * ১০ ) = ১ + ১।'
      },
      answer: '2',
      hint: {
        en: 'AMAT = Hit Time + (Miss Rate * Miss Penalty). Here: 1 + (0.10 * 10) = 1 + 1 = 2.',
        bn: 'AMAT = হিট টাইম + ( মিস রেট * মিস পেনাল্টি )। এখানে: ১ + ( ০.১০ * ১০ ) = ১ + ১ = ২।'
      },
      explanation: {
        en: 'With a 10 percent miss rate multiplied by a 10-cycle penalty, the average miss delay is 1 cycle. Adding the 1-cycle hit time gives an AMAT of exactly 2 cycles.',
        bn: '১০ শতাংশ মিস রেটকে ১০ সাইকেল পেনাল্টি দিয়ে গুণ করলে গড় মিস বিলম্ব হয় ১ সাইকেল। এর সাথে ১ সাইকেলের হিট টাইম যোগ করলে মোট AMAT হয় ঠিক ২ সাইকেল।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Cache Memory Hierarchy & Locality Architecture Quiz',
      bn: 'ক্যাশ মেমোরি হায়ারার্কি এবং লোকালিটি আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'ca-cache-qz-1',
        kind: 'mcq',
        topic: 'memory-wall-disparity',
        question: {
          en: 'What architectural engineering reality is described by the concept of the Memory Wall?',
          bn: 'মেমোরি ওয়াল (Memory Wall) ধারণাটি কম্পিউটার আর্কিটেকচারের কোন বাস্তবতাকে ব্যাখ্যা করে?'
        },
        options: [
          {
            en: 'The growing disparity between rapidly increasing CPU processing speeds and the relatively slow access latencies of off-chip DRAM memory',
            bn: 'দ্রুত বর্ধনশীল সিপিইউ প্রসেসিং গতির সাথে চিপের বাইরের তুলনামূলকভাবে ধীরগতির ডির‍্যামের ক্রমবর্ধমান ব্যবধান',
          },
          {
            en: 'A physical silicon shield blocking radio interference between registers',
            bn: 'রেজিস্টারগুলোর মধ্যে রেডিও তরঙ্গের বিঘ্ন রোধ করার জন্য একটি সিলিকন শিল্ড',
          },
          {
            en: 'The maximum storage capacity of a hard disk partition',
            bn: 'একটি হার্ড ডিস্ক পার্টিশনের সর্বোচ্চ স্টোরেজ ধারণক্ষমতা',
          },
          {
            en: 'The operating system limit on how many programs can run concurrently',
            bn: 'একসাথে কতগুলো প্রোগ্রাম চলতে পারে তার ওপর অপারেটিং সিস্টেমের সীমাবদ্ধতা',
          },
        ],
        answer: 0,
        hint: {
          en: 'Processors run at sub-nanosecond speeds while DRAM chips lag far behind.',
          bn: 'প্রসেসর সাব-ন্যানোসেকেন্ড গতিতে চললেও ডির‍্যাম চিপের গতি অনেক পিছিয়ে রয়েছে।',
        },
        explanation: {
          en: 'The Memory Wall refers to the performance divergence where CPU compute capabilities have outpaced memory bandwidth and latency improvements.',
          bn: 'মেমোরি ওয়াল বলতে প্রসেসরের গণনার গতির তুলনায় মেমোরি বাস ও ল্যাটেন্সির ধীরগতির উন্নতিজনিত ব্যবধানকে বোঝায়।'
        },
      },
      {
        id: 'ca-cache-qz-2',
        kind: 'mcq',
        topic: 'n-way-set-associativity',
        question: {
          en: 'How does an 8-way set-associative cache prevent the destructive cache thrashing found in direct-mapped caches?',
          bn: 'একটি ৮-ওয়ে সেট-অ্যাসোসিয়েটিভ ক্যাশ কীভাবে ডাইরেক্ট-ম্যাপড ক্যাশের ধ্বংসাত্মক ক্যাশ থ্র্যাশিং প্রতিরোধ করে?'
        },
        options: [
          {
            en: 'By allowing up to 8 independent memory blocks to reside simultaneously in the same cache set index before evicting a line using LRU',
            bn: 'এলআরইউ দ্বারা লাইন মুছে ফেলার আগে একই ক্যাশ সেট ইনডেক্সে একসাথে ৮ টি স্বাধীন মেমোরি ব্লক থাকার অনুমতি দিয়ে',
          },
          {
            en: 'By doubling the physical width of the 64-bit ALU registers',
            bn: '৬৪-বিট অ্যালু রেজিস্টারের শারীরিক প্রস্থ দ্বিগুণ করে',
          },
          {
            en: 'By converting all memory pointers into static constant integers',
            bn: 'সমস্ত মেমোরি পয়েন্টারকে স্ট্যাটিক ধ্রুবক পূর্ণসংখ্যায় রূপান্তরিত করে',
          },
          {
            en: 'By turning off the CPU L2 and L3 caches during execution',
            bn: 'এক্সিকিউশনের সময় সিপিইউর এল২ ও এল৩ ক্যাশ বন্ধ রেখে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Multiple line slots per set index allow distinct colliding variables to share the set.',
          bn: 'প্রতি সেটে একাধিক লাইনের জায়গা থাকায় ভিন্ন ভেরিয়েবল একই সাথে থাকার সুযোগ পায়।',
        },
        explanation: {
          en: 'Set associativity gives multiple line slots per set index, preventing two active addresses that map to the same set from constantly evicting one another.',
          bn: 'সেট অ্যাসোসিয়েটিভিটি প্রতি সেটে একাধিক লাইনের জায়গা দেয়, যার ফলে একই সেটে ম্যাপ হওয়া দুটি সক্রিয় অ্যাড্রেস একে অপরকে অবিরাম তাড়িয়ে দিতে পারে না।'
        },
      },
      {
        id: 'ca-cache-qz-3',
        kind: 'mcq',
        topic: 'multithreaded-false-sharing',
        question: {
          en: 'What mechanism causes severe Multithreaded False Sharing in parallel software systems?',
          bn: 'সমান্তরাল সফটওয়্যার সিস্টেমে মারাত্মক মাল্টিথ্রেডেড ফলস শেয়ারিং (False Sharing) ঘটার মূল কারণ কী?'
        },
        options: [
          {
            en: 'Independent variables updated by separate CPU cores share the exact same 64-byte cache line, causing constant MESI cache line invalidation and stalling',
            bn: 'আলাদা সিপিইউ কোর দ্বারা পরিবর্তিত দুটি স্বাধীন ভেরিয়েবল একই ৬৪-বাইট ক্যাশ লাইনে অবস্থান করে, যা অনবরত MESI ক্যাশ লাইন বাতিল ও বিলম্ব ঘটায়',
          },
          {
            en: 'Two threads attempt to run the exact same binary opcode in parallel',
            bn: 'দুটি থ্রেড একসাথে ঠিক একই বাইনারি অপকোড চালানোর চেষ্টা করে',
          },
          {
            en: 'The compiler accidentally translates JavaScript code into Python syntax',
            bn: 'কম্পাইলার ভুলবশত জাভাস্ক্রিপ্ট কোডকে পাইথন সিনট্যাক্সে রূপান্তর করে',
          },
          {
            en: 'The system power supply fails to deliver 5 volts to the motherboard',
            bn: 'সিস্টেম পাওয়ার সাপ্লাই মাদারবোর্ডে ৫ ভোল্ট বিদ্যুৎ সরবরাহ করতে ব্যর্থ হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Two independent variables inadvertently falling inside the identical 64-byte boundary.',
          bn: 'দুটি ভিন্ন ভেরিয়েবল অনিচ্ছাকৃতভাবে একই ৬৪-বাইট ক্যাশ লাইনের মধ্যে অবস্থান করা।',
        },
        explanation: {
          en: 'Even when two threads modify distinct variables, if those variables share a 64-byte cache line, cache coherence hardware continuously invalidates the line across cores.',
          bn: 'দুটি থ্রেড ভিন্ন ভেরিয়েবল পরিবর্তন করলেও সেগুলো যদি একই ৬৪-বাইট ক্যাশ লাইনে থাকে, তবে ক্যাশ কোহেরেন্স হার্ডওয়্যার কোরগুলোর মধ্যে লাইনটি বারবার বাতিল করতে থাকে।'
        },
      },
      {
        id: 'ca-cache-qz-4',
        kind: 'mcq',
        topic: 'write-back-vs-write-through',
        question: {
          en: 'Why is the Write-Back caching policy generally preferred over Write-Through in modern multi-core microprocessors?',
          bn: 'আধুনিক মাল্টি-কোর মাইক্রোপ্রসেসরে রাইট-থ্রু এর চেয়ে রাইট-ব্যাক ক্যাশিং নীতিকে কেন সাধারণত বেশি প্রাধান্য দেওয়া হয়?'
        },
        options: [
          {
            en: 'It writes only to on-chip cache and updates main RAM only on eviction, significantly conserving main memory bus bandwidth',
            bn: 'এটি কেবল অন-চিপ ক্যাশে লেখে এবং লাইনটি মুছে ফেলার সময়ই র‍্যামে আপডেট করে, যা মেমোরি বাসের ব্যান্ডউইথ ব্যাপকভাবে সাশ্রয় করে',
          },
          {
            en: 'It eliminates the need for RAM chips entirely by compressing all data into CPU registers',
            bn: 'এটি সমস্ত ডাটাকে সিপিইউ রেজিস্টারে সংকুচিত করে র‍্যাম চিপের প্রয়োজনীয়তা সম্পূর্ণ দূর করে',
          },
          {
            en: 'It prevents integer variables from exceeding 32 bits',
            bn: 'এটি ইন্টিজার ভেরিয়েবলকে ৩২ বিট অতিক্রম করতে বাধা দেয়',
          },
          {
            en: 'It allows cache memory to run at 0 volts with zero power consumption',
            bn: 'এটি ক্যাশ মেমোরিকে কোনো বিদ্যুৎ খরচ ছাড়াই ০ ভোল্টে চালানোর সুবিধা দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Delaying writes to slow main RAM until cache eviction saves critical memory bus traffic.',
          bn: 'ক্যাশ লাইন মুছে ফেলার আগ পর্যন্ত ধীরগতির র‍্যামে ডাটা রাইট স্থগিত রাখলে মেমোরি বাসের চাপ অনেক কমে।',
        },
        explanation: {
          en: 'Write-Back caches keep writes in ultra-fast L1/L2 SRAM and only flush to slow off-chip DRAM when lines are evicted, drastically reducing bus contention.',
          bn: 'রাইট-ব্যাক ক্যাশ ডাটা পরিবর্তনের কাজটি দ্রুতগতির অন-চিপ ক্যাশেই সম্পন্ন করে এবং লাইন প্রতিস্থাপনের সময়ই কেবল ধীরগতির র‍্যামে পাঠায়, যা বাস ট্রাফিক বিপুল পরিমাণে কমায়।'
        },
      },
    ],
  },
  next: {
    slug: 'arch-capstone',
    title: {
      en: 'Computer Architecture Capstone: Virtual Machine & Benchmark',
      bn: 'কম্পিউটার আর্কিটেকচার ক্যাপস্টোন: ভার্চুয়াল মেশিন এবং বেঞ্চমার্ক'
    },
  },
};
