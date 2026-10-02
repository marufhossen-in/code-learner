import type { Lesson } from '../../../lib/types';

export const CachesAndTheCacheLesson: Lesson = {
  slug: 'caches-and-the-cache',
  tech: 'query-optimization',
  title: {
    en: 'Buffer Pool & Cache Mechanics: shared_buffers, Hit Ratios & Flushing',
    bn: 'বাফার পুল ও ক্যাশ মেকানিজম: shared_buffers, হিট রেশিও ও ফ্লাশিং'
  },
  summary: {
    en: 'Understand how database engines cache disk pages in memory. Learn the dual-cache architecture of shared_buffers and the OS page cache, clock-sweep buffer eviction, cache hit ratio calculation, dirty page checkpoints, and how warm caches eliminate disk I/O.',
    bn: 'ডাটাবেস ইঞ্জিন কীভাবে মেমরিতে ডিস্ক পেজ ক্যাশ করে তা গভীরভাবে শিখুন। shared_buffers ও OS পেজ ক্যাশের দ্বৈত আর্কিটেকচার, ক্লক-সুইপ বাফার ইভিকশন, ক্যাশ হিট রেশিও গণনা, ডার্টি পেজ চেকপয়েন্ট এবং কীভাবে ওয়ার্ম ক্যাশ ডিস্ক I/O দূর করে তা আয়ত্ত করুন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'buffer-pool-core',
      text: {
        en: 'The Memory Hierarchy: Why Databases Cache 8KB Pages in RAM',
        bn: 'মেমরি হায়ারার্কি: কেন ডাটাবেস 8KB পেজ মেমরিতে ক্যাশ করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every relational database query depends on a fundamental hardware reality: reading data from RAM takes nanoseconds, while reading from disk takes milliseconds. Because disk I/O is the ultimate throughput bottleneck, database engines utilize a large dedicated memory region called the Buffer Pool to keep frequently accessed data blocks in memory.',
        bn: 'প্রতিটি রিলেশনাল ডাটাবেস কোয়েরি একটি মৌলিক হার্ডওয়্যার বাস্তবতার ওপর নির্ভরশীল: মেমরি বা র‍্যাম থেকে ডাটা পড়তে ন্যানোসেকেন্ড সময় লাগে, অথচ ডিস্ক থেকে পড়তে মিলিসেকেন্ড লেগে যায়। ডিস্ক I/O সবচেয়ে বড় বাধা হওয়ায় ডাটাবেস ইঞ্জিন বাফার পুল নামক একটি মেমরি ব্লক ব্যবহার করে প্রতিনিয়ত প্রয়োজনীয় ডাটা মেমরিতে জমা রাখে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In PostgreSQL, this memory space is known as shared_buffers. In MySQL InnoDB, it is named innodb_buffer_pool_size. Queries never read data directly from raw disk files. Whenever the query executor needs a table or index tuple, it first searches the buffer pool. If the 8KB page is already present, it is returned instantly as a buffer cache hit.',
        bn: 'PostgreSQL-এ এই মেমরি অঞ্চলটিকে shared_buffers বলা হয় এবং MySQL InnoDB-তে একে innodb_buffer_pool_size বলা হয়। কোয়েরি কখনো সরাসরি ডিস্কের কাঁচা ফাইল থেকে ডাটা পড়ে না। যখনই কোয়েরি এক্সিকিউটরের কোনো টেবিল বা ইনডেক্স রো প্রয়োজন হয়, সে প্রথমে বাফার পুলে অনুসন্ধান চালায়। যদি প্রয়োজনীয় 8KB পেজটি মেমরিতে পাওয়া যায়, তবে তা তাৎক্ষণিকভাবে বাফার ক্যাশ হিট হিসেবে রিটার্ন করে।'
      }
    },
    {
      type: 'diagram',
      id: 'buffer-pool-architecture',
      caption: {
        en: 'Figure 1: Database dual caching architecture — shared_buffers, Linux OS page cache, clock-sweep buffer eviction, and asynchronous background writer flushing.',
        bn: 'চিত্র ১: ডাটাবেসের দ্বৈত ক্যাশিং আর্কিটেকচার — shared_buffers, লিনাক্স ওএস পেজ ক্যাশ, ক্লক-সুইপ বাফার ইভিকশন এবং অ্যাসিঙ্ক্রোনাস ব্যাকগ্রাউন্ড রাইটার ফ্লাশিং।'
      },
      svg: `<svg viewBox="0 0 960 480" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" style="background:#090d16;border-radius:12px;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;">
  <defs>
    <linearGradient id="cchHdrGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#06b6d4"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <linearGradient id="ramGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1e293b"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
    <linearGradient id="diskGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1c1917"/>
      <stop offset="100%" stop-color="#0c0a09"/>
    </linearGradient>
    <marker id="cchArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
    <marker id="flushArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 9 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Title Header -->
  <rect x="24" y="20" width="912" height="52" rx="8" fill="#111827" stroke="#1f2937" stroke-width="1.5"/>
  <circle cx="50" cy="46" r="14" fill="url(#cchHdrGrad)"/>
  <text x="50" y="51" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">⚡</text>
  <text x="76" y="44" fill="#f8fafc" font-size="15" font-weight="bold">DATABASE BUFFER POOL &amp; DUAL CACHE ARCHITECTURE</text>
  <text x="76" y="60" fill="#94a3b8" font-size="11">shared_buffers (25% RAM), OS Page Cache, Clock-Sweep Replacement, and WAL Checkpoints</text>

  <!-- Query Executor Top -->
  <rect x="24" y="90" width="220" height="150" rx="8" fill="#111827" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="40" y="115" fill="#38bdf8" font-size="12" font-weight="bold">QUERY EXECUTOR</text>
  <rect x="36" y="128" width="196" height="96" rx="6" fill="#030712" stroke="#1e293b"/>
  <text x="46" y="148" fill="#f1f5f9" font-size="11">Request Block #428</text>
  <text x="46" y="168" fill="#94a3b8" font-size="10">1. Check shared_buffers</text>
  <text x="46" y="186" fill="#10b981" font-size="10">   HIT: Return in ~100ns</text>
  <text x="46" y="204" fill="#f59e0b" font-size="10">   MISS: Read OS / Disk</text>

  <!-- Hit Stream Arrow -->
  <path d="M 244 165 L 290 165" stroke="#38bdf8" stroke-width="2" marker-end="url(#cchArrow)"/>

  <!-- Shared Buffers Main Container -->
  <rect x="290" y="90" width="370" height="230" rx="10" fill="url(#ramGrad)" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="310" y="118" fill="#38bdf8" font-size="13" font-weight="bold">POSTGRESQL shared_buffers (RAM)</text>
  <text x="310" y="136" fill="#94a3b8" font-size="10">Clock-Sweep Frame Array: Holds 8KB Pages with Pin &amp; Dirty Bit</text>

  <!-- Buffer Frames Grid -->
  <g transform="translate(310, 150)">
    <!-- Frame 0: Clean Hot -->
    <rect x="0" y="0" width="100" height="65" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="10" y="20" fill="#a7f3d0" font-size="10" font-weight="bold">Frame 0 [8KB]</text>
    <text x="10" y="36" fill="#f1f5f9" font-size="10">Page #428</text>
    <text x="10" y="52" fill="#34d399" font-size="9">Usage: 4 | Clean</text>

    <!-- Frame 1: Dirty Hot -->
    <rect x="115" y="0" width="100" height="65" rx="4" fill="#451a03" stroke="#f59e0b"/>
    <text x="125" y="20" fill="#fde68a" font-size="10" font-weight="bold">Frame 1 [8KB]</text>
    <text x="125" y="36" fill="#f1f5f9" font-size="10">Page #102</text>
    <text x="125" y="52" fill="#fbbf24" font-size="9">Usage: 5 | DIRTY</text>

    <!-- Frame 2: Victim Cold -->
    <rect x="230" y="0" width="100" height="65" rx="4" fill="#18181b" stroke="#ef4444"/>
    <text x="240" y="20" fill="#fca5a5" font-size="10" font-weight="bold">Frame 2 [8KB]</text>
    <text x="240" y="36" fill="#94a3b8" font-size="10">Page #901</text>
    <text x="240" y="52" fill="#ef4444" font-size="9">Usage: 0 [Victim]</text>
  </g>

  <!-- Clock Pointer Graphic -->
  <rect x="310" y="230" width="330" height="75" rx="6" fill="#030712" stroke="#334155"/>
  <text x="325" y="252" fill="#60a5fa" font-size="11" font-weight="bold">Clock-Sweep Eviction Hand:</text>
  <text x="325" y="270" fill="#cbd5e1" font-size="10">Decrements usage count (0-5) on unpinned frames.</text>
  <text x="325" y="288" fill="#34d399" font-size="10">Protects hot indexes; evicts usage=0 pages when full.</text>

  <!-- Background Writer & Flushing -->
  <path d="M 475 320 L 475 355" stroke="#f59e0b" stroke-width="2" marker-end="url(#flushArrow)"/>
  <text x="490" y="342" fill="#fbbf24" font-size="10" font-weight="bold">bgwriter / Checkpoint Sync</text>

  <!-- OS Page Cache Layer -->
  <rect x="680" y="90" width="256" height="230" rx="10" fill="#131b2e" stroke="#6366f1" stroke-width="1.5"/>
  <text x="700" y="118" fill="#818cf8" font-size="13" font-weight="bold">LINUX OS PAGE CACHE</text>
  <text x="700" y="138" fill="#cbd5e1" font-size="11">Kernel File System Cache</text>
  <rect x="696" y="152" width="224" height="150" rx="6" fill="#030712" stroke="#334155"/>
  <text x="708" y="174" fill="#94a3b8" font-size="10">• Absorbs shared_buffers misses</text>
  <text x="708" y="196" fill="#94a3b8" font-size="10">• Serves blocks in ~5-10 microseconds</text>
  <text x="708" y="218" fill="#94a3b8" font-size="10">• Prevents direct SSD reads</text>
  <text x="708" y="240" fill="#34d399" font-size="10">• Sized to 50%-75% of remaining RAM</text>
  <text x="708" y="262" fill="#38bdf8" font-size="10">• Kernel dirty page flusher (pdflush)</text>

  <!-- Physical Disk Layer Bottom -->
  <rect x="24" y="370" width="912" height="90" rx="10" fill="url(#diskGrad)" stroke="#334155" stroke-width="1.5"/>
  <text x="40" y="398" fill="#f87171" font-size="13" font-weight="bold">PHYSICAL PERSISTENT STORAGE (NVMe SSD / Disk Storage)</text>
  <rect x="40" y="410" width="260" height="36" rx="4" fill="#1c1917" stroke="#44403c"/>
  <text x="50" y="432" fill="#f59e0b" font-size="11" font-weight="bold">Write-Ahead Log (WAL / Redo)</text>
  <rect x="320" y="410" width="260" height="36" rx="4" fill="#1c1917" stroke="#44403c"/>
  <text x="330" y="432" fill="#38bdf8" font-size="11" font-weight="bold">Table Heap Files (8KB Blocks)</text>
  <rect x="600" y="410" width="320" height="36" rx="4" fill="#1c1917" stroke="#44403c"/>
  <text x="610" y="432" fill="#34d399" font-size="11" font-weight="bold">B-Tree Index Files (8KB Leaf Nodes)</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'clock-sweep',
      text: {
        en: 'The Clock-Sweep Replacement Algorithm and Scan Protection',
        bn: 'ক্লক-সুইপ পেজ প্রতিস্থাপন অ্যালগরিদম ও স্ক্যান সুরক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Standard caches use Least Recently Used eviction. In databases, naive LRU is dangerous. If someone runs a sequential scan on a 50GB table, a simple LRU cache would evict every hot index root and lookup table from RAM, causing massive performance degradation across all connected applications.',
        bn: 'সাধারণ ক্যাশ Least Recently Used বা LRU নীতি ব্যবহার করে। তবে ডাটাবেসে সাধারণ LRU মারাত্মক ক্ষতিকর হতে পারে। কেউ যদি ৫০GB-এর একটি টেবিলে সিকোয়েনশিয়াল স্ক্যান চালায়, তবে সাধারণ LRU মেমরির সমস্ত জরুরি ইনডেক্স ও লুকআপ টেবিল মুছে ফেলে সার্ভারের মারাত্মক গতি হ্রাস ঘটাবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PostgreSQL solves this using the Clock-Sweep algorithm with usage counters ranging from 0 to 5. When a page is hit repeatedly, its counter increments up to 5. A sweeping clock hand only decrements counters on unpinned frames, allowing hot pages to survive intermittent scans.',
        bn: 'পোস্টগ্রেসকুয়েল ০ থেকে ৫ পর্যন্ত ব্যবহার কাউন্টারসহ ক্লক-সুইপ অ্যালগরিদম দিয়ে এই সমস্যার সমাধান করে। কোনো পেজ বারবার ব্যবহৃত হলে তার কাউন্টার ৫ পর্যন্ত বাড়ে। ক্লক হ্যান্ড শুধু আনপিন্ড পেজের কাউন্টার ১ কমায়, ফলে গরম পেজগুলো স্ক্যানের পরও মেমরিতে টিকে থাকে।'
      }
    },
    {
      type: 'heading',
      id: 'cache-hit-metrics',
      text: {
        en: 'Cache Hit Ratio: Formula and Health Benchmarks',
        bn: 'ক্যাশ হিট রেশিও: সূত্র ও স্বাস্থ্য বেঞ্চমার্ক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Cache Hit Ratio measures the proportion of 8KB page requests satisfied directly by shared memory without issuing disk read calls to the kernel. In PostgreSQL, this is queried from the pg_stat_database system view.',
        bn: 'ক্যাশ হিট রেশিও নির্দেশ করে কত শতাংশ ৮KB পেজ রিকোয়েস্ট কার্নেলে ডিস্ক রিড না পাঠিয়ে সরাসরি শেয়ার্ড মেমরি থেকে সম্পন্ন হয়েছে। পোস্টগ্রেসকুয়েলে এটি pg_stat_database সিস্টেম ভিউ থেকে জানা যায়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Formula: Hit Ratio = (blks_hit / (blks_hit + blks_read)) * 100.',
          bn: 'সূত্র: হিট রেশিও = (blks_hit / (blks_hit + blks_read)) * ১০০।'
        },
        {
          en: 'Production Target: Healthy OLTP production systems should maintain a Cache Hit Ratio above 99%.',
          bn: 'প্রোডাকশন লক্ষ্য: সুস্থ OLTP প্রোডাকশন সিস্টেমে ক্যাশ হিট রেশিও ৯৯% এর ওপরে থাকা উচিত।'
        },
        {
          en: 'Warning Threshold: When the ratio drops below 95%, disk I/O saturates, query latency spikes, and read queues accumulate.',
          bn: 'সতর্কতা সীমা: যখন এই অনুপাত ৯৫% এর নিচে নেমে আসে, তখন ডিস্ক I/O পূর্ণ হয়ে যায়, লেটেন্সি বাড়ে এবং কোয়েরি আটকে থাকে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'interactive-cache-sim',
      text: {
        en: 'Interactive Benchmark: Simulating Buffer Pool & Clock-Sweep Eviction',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: বাফার পুল ও ক্লক-সুইপ ইভিকশন সিমুলেশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      filename: 'buffer-pool-simulator.ts',
      code: `// Database Buffer Pool Clock-Sweep Replacement Simulator
function simulateBufferPool() {
  const POOL_CAPACITY = 8; // 8 buffer frames (each 8KB = 64KB pool)
  const frames = Array.from({ length: POOL_CAPACITY }, (_, i) => ({
    frameId: i,
    pageId: null as number | null,
    usageCount: 0,
    isDirty: false,
    pinCount: 0
  }));
  let clockHand = 0;
  let hits = 0;
  let misses = 0;

  function accessPage(pageId: number, isWrite = false) {
    const existing = frames.find(f => f.pageId === pageId);
    if (existing) {
      hits++;
      existing.usageCount = Math.min(5, existing.usageCount + 1);
      if (isWrite) existing.isDirty = true;
      return { status: "HIT", frameId: existing.frameId, usageCount: existing.usageCount };
    }

    misses++;
    // Clock-sweep victim search
    let victimIndex = -1;
    while (victimIndex === -1) {
      const frame = frames[clockHand];
      if (frame.pinCount === 0) {
        if (frame.usageCount > 0) {
          frame.usageCount--;
        } else {
          victimIndex = clockHand;
        }
      }
      clockHand = (clockHand + 1) % POOL_CAPACITY;
    }

    const victim = frames[victimIndex];
    const evictedPage = victim.pageId;
    victim.pageId = pageId;
    victim.usageCount = 1;
    victim.isDirty = isWrite;

    return { status: "MISS", frameId: victimIndex, evictedPage };
  }

  console.log("=== BUFFER POOL CLOCK-SWEEP SIMULATOR ===");
  console.log(\`Buffer Pool Capacity: \${POOL_CAPACITY} frames (8KB each)\`);

  // Sequence: hot pages (1, 2) accessed frequently; cold pages pass through
  const workload = [1, 2, 3, 1, 2, 4, 5, 6, 7, 8, 1, 2, 9, 10];
  workload.forEach(pid => {
    const res = accessPage(pid);
    if (res.status === "HIT") {
      console.log(\`Page \${pid} -> HIT  in Frame \${res.frameId} (usage=\${res.usageCount})\`);
    } else {
      console.log(\`Page \${pid} -> MISS -> Frame \${res.frameId} (evicted Page \${res.evictedPage ?? 'none'})\`);
    }
  });

  const total = hits + misses;
  const hitRatio = ((hits / total) * 100).toFixed(1);
  console.log("\\n=== BUFFER POOL METRICS SUMMARY ===");
  console.log(\`Total Requests: \${total} | Hits: \${hits} | Misses: \${misses}\`);
  console.log(\`Cache Hit Ratio: \${hitRatio}%\`);
}

simulateBufferPool();`
    },
    {
      type: 'terminal',
      id: 'buffer-output',
      cmd: 'npx tsx buffer-pool-simulator.ts',
      output: `=== BUFFER POOL CLOCK-SWEEP SIMULATOR ===
Buffer Pool Capacity: 8 frames (8KB each)
Page 1 -> MISS -> Frame 0 (evicted Page none)
Page 2 -> MISS -> Frame 1 (evicted Page none)
Page 3 -> MISS -> Frame 2 (evicted Page none)
Page 1 -> HIT  in Frame 0 (usage=2)
Page 2 -> HIT  in Frame 1 (usage=2)
Page 4 -> MISS -> Frame 3 (evicted Page none)
Page 5 -> MISS -> Frame 4 (evicted Page none)
Page 6 -> MISS -> Frame 5 (evicted Page none)
Page 7 -> MISS -> Frame 6 (evicted Page none)
Page 8 -> MISS -> Frame 7 (evicted Page none)
Page 1 -> HIT  in Frame 0 (usage=3)
Page 2 -> HIT  in Frame 1 (usage=3)
Page 9 -> MISS -> Frame 2 (evicted Page 3)
Page 10 -> MISS -> Frame 3 (evicted Page 4)

=== BUFFER POOL METRICS SUMMARY ===
Total Requests: 14 | Hits: 4 | Misses: 10
Cache Hit Ratio: 28.6%`
    }
  ],
  exercises: [
    {
      id: 'qo-cch-ex-1',
      kind: 'mcq',
      topic: 'production-cache-hit-ratio',
      question: {
        en: 'In PostgreSQL pg_stat_database, you observe blks_hit = 990000 and blks_read = 10000; what is the cache hit ratio?',
        bn: 'PostgreSQL এর pg_stat_database ভিউতে দেখা গেল blks_hit = 990000 এবং blks_read = 10000; ক্যাশ হিট রেশিও কত?'
      },
      options: [
        {
          en: '99.0%, indicating optimal OLTP health where 99% of page requests are satisfied directly from memory without physical disk I/O',
          bn: '99.0%, যা নির্দেশ করে যে 99% পেজ রিকোয়েস্ট কোনো ফিজিক্যাল ডিস্ক I/O ছাড়াই সরাসরি মেমরি থেকে সম্পন্ন হয়েছে'
        },
        {
          en: '1.0%, indicating that the database cache has failed completely',
          bn: '১.০%, যা নির্দেশ করে যে ডাটাবেস ক্যাশ পুরোপুরি অকেজো হয়ে গেছে'
        },
        {
          en: '50.0%, indicating random caching behavior',
          bn: '৫০.০%, যা ক্যাশের বিশৃঙ্খল আচরণ নির্দেশ করে'
        },
        {
          en: '10.0%, indicating that 90% of data is stored in the cloud',
          bn: '১০.০%, যা নির্দেশ করে যে ৯০% ডাটা ক্লাউডে জমা আছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Formula: (blks_hit / (blks_hit + blks_read)) * 100.',
        bn: 'সূত্র: (blks_hit / (blks_hit + blks_read)) * ১০০।'
      },
      explanation: {
        en: '990000 hits divided by 1000000 total block requests gives exactly 0.99 or 99.0%.',
        bn: 'মোট ১০০০০০০ রিকোয়েস্টের মধ্যে ৯৯০০০০ হিট হলে অনুপাতটি দাঁড়ায় ঠিক ৯৯.০%।'
      }
    },
    {
      id: 'qo-cch-ex-2',
      kind: 'mcq',
      topic: 'explain-buffers-metrics-interpretation',
      question: {
        en: 'An EXPLAIN query returns Buffers: shared hit = 4850 and read = 150; what percentage was served from RAM?',
        bn: 'একটি EXPLAIN কোয়েরিতে পাওয়া গেল Buffers: shared hit = 4850 এবং read = 150; শতকরা কত ভাগ মেমরি থেকে পরিবেশিত হয়েছে?'
      },
      options: [
        {
          en: '97.0% (4850 out of 5000 total blocks were served from shared_buffers, while only 150 required reading from OS cache or disk)',
          bn: '97.0% (মোট 5000টি ব্লকের মধ্যে 4850টি shared_buffers থেকে পরিবেশিত হয়েছে, আর মাত্র 150টি ওএস ক্যাশ বা ডিস্ক থেকে পড়তে হয়েছে)'
        },
        {
          en: '3.0%, because read represents the faster path',
          bn: '৩.০%, কারণ রিড অপারেশন বেশি দ্রুতগতির'
        },
        {
          en: '150.0%, because read blocks override hit blocks',
          bn: '১৫০.০%, কারণ রিড ব্লক হিট ব্লককে বাতিল করে দেয়'
        },
        {
          en: '50.0%, because hits and reads cancel each other out',
          bn: '৫০.০%, কারণ হিট ও রিড পরস্পরকে বাতিল করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Total blocks requested equals 4850 plus 150.',
        bn: 'মোট ব্লকের সংখ্যা হলো ৪৮৫০ যোগ ১৫০।'
      },
      explanation: {
        en: '4850 shared hits out of 5000 total blocks equals 97.0% buffer cache efficiency.',
        bn: 'মোট ৫০০০ ব্লকের মধ্যে ৪৮৫০ শেয়ার্ড হিট থাকা মানে বাফার ক্যাশের কার্যকারিতা ৯৭.০%।'
      }
    },
    {
      id: 'qo-cch-ex-3',
      kind: 'mcq',
      topic: 'clock-sweep-eviction-rationale',
      question: {
        en: 'Why does PostgreSQL use the Clock-Sweep page replacement algorithm with usage counters (0 to 5) instead of standard LRU?',
        bn: 'পোস্টগ্রেসকুয়েল সাধারণ LRU অ্যালগরিদমের পরিবর্তে কেন ব্যবহার কাউন্টার (0 থেকে 5) সহ ক্লক-সুইপ পেজ প্রতিস্থাপন অ্যালগরিদম ব্যবহার করে?'
      },
      options: [
        {
          en: 'To protect frequently accessed index root pages and lookup tables from being evicted when a single large sequential scan reads gigabytes of cold data',
          bn: 'একটি বড় সিকোয়েনশিয়াল স্ক্যান অনেক ডাটা পড়ার সময় যেন ঘন ঘন ব্যবহৃত ইনডেক্স ও লুকআপ টেবিল মেমরি থেকে মুছে না যায়'
        },
        {
          en: 'Because LRU requires a floppy disk drive to function',
          bn: 'কারণ এলআরইউ চালাতে ফ্লপি ডিস্ক ড্রাইভের প্রয়োজন হয়'
        },
        {
          en: 'To force the operating system to reboot on every cache miss',
          bn: 'প্রতিটি ক্যাশ মিসের সময় যেন অপারেটিং সিস্টেম রিস্টার্ট নেয়'
        },
        {
          en: 'Because Clock-Sweep deletes unpinned tables from disk automatically',
          bn: 'কারণ ক্লক-সুইপ ডিস্ক থেকে টেবিল নিজে থেকেই মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about what happens to hot index roots when a massive sequential scan touches gigabytes of data.',
        bn: 'বিশাল সিকোয়েনশিয়াল স্ক্যান চালালে মেমরির জরুরি ইনডেক্সগুলোর কী হতে পারে তা ভাবুন।'
      },
      explanation: {
        en: 'Clock-sweep usage counters give repeat-access pages a buffer buffer against being wiped out by large one-off sequential table scans.',
        bn: 'ক্লক-সুইপের ব্যবহার কাউন্টার বারবার ব্যবহৃত পেজগুলোকে সুরক্ষা দেয়, যাতে হঠাৎ আসা বড় সিকোয়েনশিয়াল স্ক্যান পুরো মেমরি খালি করে না দেয়।'
      }
    },
    {
      id: 'qo-cch-ex-4',
      kind: 'mcq',
      topic: 'shared-buffers-sizing-guidelines',
      question: {
        en: 'A dedicated PostgreSQL database server has 64GB of total system RAM. What is the standard recommended setting for shared_buffers, and why should it NOT be set to 95% of total RAM?',
        bn: 'একটি ডেডিকেটেড PostgreSQL ডাটাবেস সার্ভারে মোট 64GB সিস্টেম র‍্যাম রয়েছে। shared_buffers এর জন্য স্ট্যান্ডার্ড প্রস্তাবিত মান কত এবং কেন এটি মোট র‍্যামের 95% নির্ধারণ করা উচিত নয়?'
      },
      options: [
        {
          en: '16GB (25% of RAM), because PostgreSQL relies heavily on the Linux OS page cache, work_mem for queries, and maintenance operations',
          bn: '16GB (র‍্যামের ২৫%), কারণ পোস্টগ্রেসকুয়েল লিনাক্স ওএস পেজ ক্যাশ, কোয়েরির work_mem এবং রক্ষণাবেক্ষণ কাজের ওপর ব্যাপকভাবে নির্ভরশীল'
        },
        {
          en: '60GB (95% of RAM), because the operating system does not require any memory',
          bn: '৬০GB (র‍্যামের ৯৫%), কারণ অপারেটিং সিস্টেমের কোনো মেমরির দরকার হয় না'
        },
        {
          en: '512MB, because databases cannot use more than 1GB of memory',
          bn: '৫১২MB, কারণ ডাটাবেস ১GB-এর বেশি মেমরি ব্যবহার করতে পারে না'
        },
        {
          en: '0MB, because PostgreSQL only operates directly on raw NVMe drives',
          bn: '০MB, কারণ পোস্টগ্রেসকুয়েল সরাসরি এনভিএমই ড্রাইভে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'PostgreSQL relies on the operating system kernel cache for double-buffering.',
        bn: 'পোস্টগ্রেসকুয়েল ডাবল-বাফারিংয়ের জন্য অপারেটিং সিস্টেমের কার্নেল ক্যাশের ওপর নির্ভর করে।'
      },
      explanation: {
        en: 'Allocating 25% (16GB) leaves 75% for the Linux OS page cache, query work_mem, connection overhead, and background processes.',
        bn: '২৫% (১৬GB) বরাদ্দ করলে বাকি ৭৫% লিনাক্স ওএস পেজ ক্যাশ, কোয়েরির work_mem এবং অন্যান্য প্রসেসের জন্য সুরক্ষিত থাকে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Database Buffer Pool & Cache Architecture Quiz',
      bn: 'ডাটাবেস বাফার পুল ও ক্যাশ আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'qo-cch-qz-1',
        kind: 'mcq',
        topic: 'bgwriter-responsibilities',
        question: {
          en: 'What is the operational purpose of the PostgreSQL background writer (bgwriter) process?',
          bn: 'PostgreSQL-এ ব্যাকগ্রাউন্ড রাইটার (bgwriter) প্রসেসের মূল অপারেশনাল উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'It continuously flushes dirty pages from shared_buffers to storage in small batches, ensuring backend server processes always find clean buffer frames for incoming reads',
            bn: 'এটি ছোট ছোট ব্যাচে shared_buffers থেকে ডার্টি পেজ ডিস্কে ফ্লাশ করে, যাতে নতুন ডাটা পড়ার জন্য ব্যাকএন্ড প্রসেসগুলো সবসময় পরিষ্কার বাফার ফ্রেম পায়'
          },
          {
            en: 'It automatically compresses all tables into ZIP archives every hour',
            bn: 'এটি প্রতি ঘণ্টায় সমস্ত টেবিলকে জিপ ফাইলে রূপান্তর করে ফেলে'
          },
          {
            en: 'It sends SQL query results via email to database administrators',
            bn: 'এটি ইমেলের মাধ্যমে সমস্ত এসকিউএল কোয়েরির ফলাফল অ্যাডমিনের কাছে পাঠায়'
          },
          {
            en: 'It deletes un-indexed database columns during query execution',
            bn: 'কোয়েরি চলার সময় এটি ইনডেক্সহীন কলামগুলো মুছে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The bgwriter prepares clean buffer frames so queries do not have to synchronously write to disk during reads.',
          bn: 'bgwriter পরিচ্ছন্ন বাফার প্রস্তুত রাখে যাতে রিড করার সময় কোয়েরিকে নিজে ডিস্কে রাইট করতে না হয়।'
        },
        explanation: {
          en: 'Without bgwriter, a user query needing a free buffer frame would have to stop and synchronously write a dirty page to disk, spiking query latency.',
          bn: 'bgwriter না থাকলে কোনো কোয়েরি খালি বাফার ফ্রেম না পেলে তাকে নিজে দাঁড়িয়ে থেকে ডার্টি পেজ ডিস্কে লিখতে হতো, যা লেটেন্সি বহু গুণ বাড়িয়ে দিত।'
        }
      },
      {
        id: 'qo-cch-qz-2',
        kind: 'mcq',
        topic: 'wal-durability-dirty-pages',
        question: {
          en: 'When an UPDATE statement modifies a row, how does PostgreSQL ensure durability before the dirty page is flushed to disk?',
          bn: 'যখন কোনো UPDATE স্টেটমেন্ট একটি রো পরিবর্তন করে, তখন ডিস্কে ডার্টি পেজ ফ্লাশ করার আগেই PostgreSQL কীভাবে তথ্যের স্থায়িত্ব নিশ্চিত করে?'
        },
        options: [
          {
            en: 'By synchronously writing the change to the Write-Ahead Log (WAL) on disk before the transaction commits',
            bn: 'ট্রানজ্যাকশন কমিট হওয়ার আগেই ডিস্কে Write-Ahead Log বা WAL ফাইলে পরিবর্তনটি লিখে নিশ্চিত করার মাধ্যমে'
          },
          {
            en: 'By sending the modified row to all client browsers via WebSockets',
            bn: 'ওয়েবসকেটের মাধ্যমে পরিবর্তিত সারিটি সমস্ত ব্রাউজারে পাঠিয়ে দিয়ে'
          },
          {
            en: 'By disabling all future transactions on that table',
            bn: 'ঐ টেবিলের ওপর ভবিষ্যতের সমস্ত ট্রানজ্যাকশন বন্ধ করে দিয়ে'
          },
          {
            en: 'By creating a full database backup on tape drive',
            bn: 'টেপ ড্রাইভে ডাটাবেসের একটি সম্পূর্ণ ব্যাকআপ তৈরি করার মাধ্যমে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Write-Ahead Logging guarantees that log entries reach persistent storage before data pages do.',
          bn: 'রাইট-অ্যাহেড লগিং নিশ্চিত করে যে ডাটা পেজের আগেই লগ ডিস্কে স্থায়ীভাবে সংরক্ষিত হবে।'
        },
        explanation: {
          en: 'The WAL is an append-only sequential log. By writing changes to the WAL before commit, the database can safely crash and replay changes upon recovery.',
          bn: 'WAL হলো একটি অ্যাপেন্ড-অনলি লগ। কমিটের আগে WAL-এ পরিবর্তন লিখে ফেলা হলে সার্ভার হঠাৎ ক্র্যাশ করলেও রিস্টার্টের সময় ডাটা পুনরুদ্ধার করা যায়।'
        }
      },
      {
        id: 'qo-cch-qz-3',
        kind: 'mcq',
        topic: 'ring-buffer-bulk-read-protection',
        question: {
          en: 'How does PostgreSQL prevent a massive sequential scan on a huge table from wiping out the entire shared_buffers pool?',
          bn: 'PostgreSQL কীভাবে একটি বিশাল টেবিলের সিকোয়েনশিয়াল স্ক্যানকে পুরো shared_buffers খালি করে ফেলা থেকে রক্ষা করে?'
        },
        options: [
          {
            en: 'It allocates a small 256KB ring buffer (BAS_BULKREAD) in memory, cycling pages through that tiny ring instead of polluting the global buffer pool',
            bn: 'এটি মেমরিতে একটি ছোট 256KB রিং বাফার (BAS_BULKREAD) বরাদ্দ করে, পুরো গ্লোবাল বাফার নষ্ট না করে সেই ছোট রিংয়ের মধ্যেই পেজগুলো ঘুরিয়ে আনে'
          },
          {
            en: 'It pauses all client connections until the scan is manually cancelled',
            bn: 'স্ক্যানটি ম্যানুয়ালি বাতিল না করা পর্যন্ত সমস্ত ক্লায়েন্ট সংযোগ স্থগিত রাখে'
          },
          {
            en: 'It converts the table into a CSV file on desktop',
            bn: 'এটি টেবিলটিকে ডেক্সটপে একটি সিএসভি ফাইলে রূপান্তর করে'
          },
          {
            en: 'It divides the table into 100 separate database instances',
            bn: 'এটি টেবিলটিকে ১০০টি আলাদা ডাটাবেস ইনস্ট্যান্সে ভাগ করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'PostgreSQL uses a specialized 256KB ring buffer strategy for large bulk reads.',
          bn: 'পোস্টগ্রেসকুয়েল বড় বাল্ক রিডের জন্য একটি বিশেষ ২৫৬KB রিং বাফার কৌশল ব্যবহার করে।'
        },
        explanation: {
          en: 'Large sequential scans use a 256KB (32 page) ring buffer. As pages are read, older pages in the ring are overwritten, protecting the primary buffer pool.',
          bn: 'বড় সিকোয়েনশিয়াল স্ক্যান ২৫৬KB-এর একটি রিং বাফার ব্যবহার করে। নতুন পেজ এলে ঐ রিংয়ের পুরোনো পেজ প্রতিস্থাপিত হয়, ফলে মূল বাফার পুল সম্পূর্ণ সুরক্ষিত থাকে।'
        }
      },
      {
        id: 'qo-cch-qz-4',
        kind: 'mcq',
        topic: 'checkpoint-io-smoothing',
        question: {
          en: 'If a production database with high write volume experiences severe I/O latency spikes every 5 minutes, what checkpoint parameter should be adjusted?',
          bn: 'উচ্চ রাইট ভলিউমের একটি প্রোডাকশন ডাটাবেসে যদি প্রতি 5 মিনিট পর পর তীব্র I/O লেটেন্সি স্পাইক দেখা যায়, তবে কোন চেকপয়েন্ট প্যারামিটারটি সমন্বয় করা উচিত?'
        },
        options: [
          {
            en: 'Increase checkpoint_completion_target to 0.9 and increase max_wal_size, spreading dirty page writes evenly across the checkpoint interval',
            bn: 'checkpoint_completion_target বাড়িয়ে 0.9 করা এবং max_wal_size বাড়ানো, যাতে চেকপয়েন্ট সময় জুড়ে ডার্টি পেজগুলো সমানভাবে ধীরে ধীরে লেখা হয়'
          },
          {
            en: 'Disable the Write-Ahead Log completely',
            bn: 'রাইট-অ্যাহেড লগ পুরোপুরি বন্ধ করে দেওয়া'
          },
          {
            en: 'Delete all database tables and restore from yesterday',
            bn: 'সমস্ত ডাটাবেস টেবিল মুছে গতকালের ব্যাকআপ থেকে রিস্টোর করা'
          },
          {
            en: 'Set work_mem to 0KB',
            bn: 'work_mem মান ০KB নির্ধারণ করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Spreading checkpoint writes across 90% of the interval prevents sudden I/O saturation spikes.',
          bn: 'চেকপয়েন্টের পুরো সময়ের ৯০% জুড়ে ধীরে ধীরে রাইট ছড়িয়ে দিলে হঠাৎ I/O স্পাইক তৈরি হয় না।'
        },
        explanation: {
          en: 'Setting checkpoint_completion_target = 0.9 instructs PostgreSQL to spread writing dirty pages across 90% of the checkpoint duration, smoothing out disk I/O.',
          bn: 'checkpoint_completion_target = 0.9 সেট করলে পোস্টগ্রেসকুয়েল পুরো চেকপয়েন্ট সময়ের ৯০% ভাগ জুড়ে ধীরে ধীরে পেজ লেখে, ফলে ডিস্কের ওপর হঠাৎ কোনো অতিরিক্ত চাপ পড়ে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'expls-and-the-explain',
    title: {
      en: 'Mastering EXPLAIN & EXPLAIN ANALYZE: Nodes, Buffers & Timing',
      bn: 'EXPLAIN ও EXPLAIN ANALYZE আয়ত্তকরণ: নোডস, বাফার ও টাইমিং'
    }
  }
};
