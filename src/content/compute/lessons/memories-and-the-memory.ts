import type { Lesson } from '../../../lib/types';

export const MemoriesAndTheMemoryLesson: Lesson = {
  slug: 'memories-and-the-memory',
  tech: 'compute',
  title: {
    en: 'Cloud Memory — RAM Allocation, Swapping, OOM, and HugePages',
    bn: 'ক্লাউড মেমরি — র্যাম বরাদ্দ, সোয়াপিং, OOM ও HugePages',
  },
  summary: {
    en: 'A foundational overview of cloud memory management and RAM allocation. Understand how the Linux kernel maps virtual memory pages, how 2 MB HugePages reduce page table entries by 99.80%, how swapping introduces catastrophic latency spikes, and how the Out-Of-Memory (OOM) killer selects processes for termination.',
    bn: 'ক্লাউড মেমরি ব্যবস্থাপনা ও র্যাম বরাদ্দের মৌলিক ধারণা। লিনাক্স কার্নেল কীভাবে ভার্চুয়াল মেমরি পেজ ম্যাপ করে, ২ মেগাবাইট HugePages কীভাবে পেজ টেবিল এন্ট্রি ৯৯.৮০% কমিয়ে দেয়, সোয়াপিং কীভাবে ক্ষতিকর লেটেন্সি সৃষ্টি করে এবং OOM কিলার কীভাবে প্রসেস বন্ধ করে।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Virtual memory pages, swapping, and OOM killer scores', bn: 'WHAT — ভার্চুয়াল মেমরি পেজ, সোয়াপিং ও OOM কিলার স্কোর' },
    },
    {
      type: 'para',
      text: {
        en: 'When you operate production databases and web services on cloud compute, managing physical random access memory (RAM) is vital for sustained performance. Operating systems do not assign raw memory addresses directly to your applications; instead, the Linux kernel divides memory into virtual pages (standardized at 4 kilobytes per page). The CPU hardware translates these virtual addresses into physical RAM locations using an on-chip Translation Lookaside Buffer (TLB). When application memory demands exceed physical capacity, the operating system either pages inactive data out to disk swap space or triggers the Linux Out-Of-Memory (OOM) killer. Because disk I/O latency is orders of magnitude slower than electronic silicon RAM, cloud instances suffering from active memory swapping grind to a halt. Mastering HugePages and tuning kernel OOM scores ensures critical services survive traffic spikes without unhandled termination.',
        bn: 'যখন আপনি ক্লাউড কম্পিউটে প্রোডাকশন ডেটাবেস ও ওয়েব সার্ভিস পরিচালনা করেন, তখন ফিজিক্যাল র্যামের সঠিক ব্যবস্থাপনা টেকসই গতির জন্য অত্যন্ত গুরুত্বপূর্ণ। অপারেটিং সিস্টেম সরাসরি আপনার কোডকে মেমরি অ্যাড্রেস বরাদ্দ করে না; বরং লিনাক্স কার্নেল মেমরিকে ছোট ছোট ভার্চুয়াল পেজে ভাগ করে (সাধারণত প্রতি পেজ ৪ কিলোবাইট)। প্রসেসরের ট্রান্সলেশন লুকাসাইড বাফার (TLB) এই ভার্চুয়াল অ্যাড্রেসগুলোকে ফিজিক্যাল র্যামের ঠিকানায় রূপান্তর করে। যখন কোনো অ্যাপ্লিকেশনের মেমরির চাহিদা মোট ধারণক্ষমতা অতিক্রম করে, তখন সিস্টেম অলস ডেটা ডিস্ক সোয়াপে সরিয়ে দেয় অথবা লিনাক্স আউট-অফ-মেমরি (OOM) কিলার চালু করে। ডিস্কের গতি ফিজিক্যাল র্যামের তুলনায় হাজার গুণ ধীর হওয়ায় ক্লাউড সার্ভারে সোয়াপিং শুরু হলে সিস্টেম প্রায় থমকে যায়। HugePages ব্যবহার এবং কার্নেল OOM স্কোর নিয়ন্ত্রণ আপনার প্রধান সার্ভিসগুলোকে অনাকাঙ্ক্ষিত বন্ধ হওয়া থেকে রক্ষা করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Standard 4 KB pages versus 2 MB HugePages and OOM protection', bn: 'প্রমিত ৪ KB পেজ বনাম ২ MB HugePages এবং OOM সুরক্ষা' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Cloud Memory HugePages and Linux OOM Score diagram">
<rect x="25" y="35" width="270" height="165" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
<text x="160" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Standard 4 KB Page Tables</text>

<rect x="40" y="80" width="240" height="40" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5"/>
<text x="160" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#991b1b">8 GB Data = 2097152 page entries</text>
<text x="160" y="113" text-anchor="middle" font-size="8" fill="#dc2626">Heavy TLB miss rate · 16 MB overhead</text>

<text x="160" y="150" text-anchor="middle" font-size="9" font-weight="700" fill="#b91c1c">High translation latency</text>
<text x="160" y="175" text-anchor="middle" font-size="8" fill="#64748b">Exhausts CPU cache lines during lookups</text>

<rect x="345" y="35" width="270" height="165" rx="6" fill="#f8fafc" stroke="#16a34a" stroke-width="2"/>
<text x="480" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">2 MB Transparent HugePages</text>

<rect x="360" y="80" width="240" height="40" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="480" y="100" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">8 GB Data = 4096 page entries</text>
<text x="480" y="113" text-anchor="middle" font-size="8" fill="#166534">99.80% reduction in page table size</text>

<text x="480" y="150" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Instant TLB cache hits</text>
<text x="480" y="175" text-anchor="middle" font-size="8" fill="#166534">Protects Redis: score 250 vs Worker: 519</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">HugePages cut page table entries by 99.80% while OOM tuning shields primary caches</text>
</svg>`,
      caption: {
        en: 'For an 8 GB database, 2097152 entries with 4 KB pages compress to 4096 entries with 2 MB HugePages (99.80% reduction across 16 GB RAM), while score 250 protects Redis over score 519 across 2 monitored processes.',
        bn: '৮ জিবি ডেটাবেসে ৪ KB পেজের ২০৯৭১৫২টি এন্ট্রি ২ MB HugePages এ মাত্র ৪০৯৬টিতে সংকুচিত হয় (১৬ জিবি র্যামে ৯৯.৮০% হ্রাস), যেখানে ২টি পর্যবেক্ষণ করা প্রসেসে স্কোর ২৫০ স্কোর ৫১৯ এর বিপরীতে রেডিস রক্ষা করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Virtual Memory Page',
          def: {
            en: 'A fixed-length contiguous block of virtual memory (typically 4 KB) mapped by the operating system kernel to physical RAM.',
            bn: 'ভার্চুয়াল মেমরির নির্দিষ্ট দৈর্ঘ্যের ধারাবাহিক ব্লক (সাধারণত ৪ KB) যা কার্নেল দ্বারা ফিজিক্যাল র্যামে সংযুক্ত হয়।',
          },
        },
        {
          term: 'HugePages (2 MB / 1 GB)',
          def: {
            en: 'A hardware-assisted memory feature allowing the operating system to allocate 2 MB or 1 GB pages to reduce page table entries and TLB cache misses.',
            bn: 'হার্ডওয়্যার-সমর্থিত মেমরি ফিচার যা পেজ টেবিলের আকার কমাতে এবং ক্যাশ মিস দূর করতে ২ MB বা ১ GB আকারের পেজ বরাদ্দ করে।',
          },
        },
        {
          term: 'Out-Of-Memory (OOM) Killer',
          def: {
            en: 'A Linux kernel subsystem that terminates processes via SIGKILL (signal 9) when physical memory and swap are completely exhausted.',
            bn: 'লিনাক্স কার্নেলের একটি সাবসিস্টেম যা মেমরি ও সোয়াপ পুরোপুরি ফুরিয়ে গেলে SIGKILL দিয়ে প্রসেস বন্ধ করে সিস্টেম সচল রাখে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Eliminating swapping thrash and protecting stateful services', bn: 'কেন — সোয়াপিং ট্র্যাশ রোধ ও মূল সার্ভিস রক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Prevent swap latency explosions: disk swap accesses take milliseconds, causing API response times to spike from 5 ms to 2000 ms instantly.', bn: 'সোয়াপ লেটেন্সি বিস্ফোরণ রোধ: ডিস্ক সোয়াপে মেমরি অ্যাক্সেস করতে প্রচুর সময় লাগায় এপিআই রেসপন্স ৫ ms থেকে হঠাৎ ২০০০ ms এ পৌঁছে যেতে পারে।' },
        { en: 'Maximize database throughput with HugePages: PostgreSQL and Redis process intensive queries up to 30% faster by eliminating TLB misses.', bn: 'HugePages দিয়ে ডেটাবেসের গতি বৃদ্ধি: TLB ক্যাশ মিস রোধ করার মাধ্যমে রেডিস ও পোস্টগ্রেস প্রায় ৩০% বেশি গতিতে কুয়েরি কার্যকর করতে পারে।' },
        { en: 'Protect mission-critical daemons from OOM kills: configuring oom_score_adj ensures disposable batch workers take the termination hit first.', bn: 'জরুরি সার্ভিসকে OOM কিল থেকে রক্ষা: oom_score_adj কনফিগারেশনের মাধ্যমে নিশ্চিত করা যায় যেন ব্যাকগ্রাউন্ড ওয়ার্কার আগে বন্ধ হয়, মূল সার্ভিস নয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Configuring memory and HugePages in 4 steps', bn: 'HOW — ৪টি ধাপে মেমরি ও HugePages কনফিগারেশন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Inspect current page tables', bn: '১. পেজ টেবিলের আকার যাচাই' }, text: { en: 'Execute grep PageTables /proc/meminfo to see memory consumed by translation tables.', bn: 'grep PageTables /proc/meminfo চালিয়ে পেজ টেবিলের খরচ হওয়া মেমরি দেখুন।' } },
        { title: { en: '2. Allocate HugePages pool', bn: '২. HugePages পুল নির্ধারণ' }, text: { en: 'Configure vm.nr_hugepages in /etc/sysctl.conf to reserve 2 MB contiguous memory blocks.', bn: 'sysctl.conf ফাইলে vm.nr_hugepages নির্ধারণ করে ২ মেগাবাইটের মেমরি ব্লক সংরক্ষণ করুন।' } },
        { title: { en: '3. Disable swap on container nodes', bn: '৩. কন্টেইনার নোডে সোয়াপ বন্ধকরণ' }, text: { en: 'Run swapoff -a on Kubernetes compute hosts to enforce predictable resource limits.', bn: 'কুবারনেটিস নোডে অনুমানযোগ্য রিসোর্স নিশ্চিত করতে swapoff -a কমান্ড দিয়ে সোয়াপ নিষ্ক্রিয় করুন।' } },
        { title: { en: '4. Set process OOM protection', bn: '৪. OOM সুরক্ষামূলক স্কোর প্রদান' }, text: { en: 'Write -500 to /proc/<pid>/oom_score_adj to protect core database processes from SIGKILL.', bn: 'মূল ডেটাবেস প্রসেসের oom_score_adj ফাইলে -৫০০ লিখে তাকে সুরক্ষিত রাখুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'memory_hugepages_oom_sim.js',
      code: `// Simulated memory allocation, HugePages efficiency, and OOM score
const instanceRamGb = 16;
const dbAllocationGb = 8;

const standardPageSizeKb = 4;
const standardEntries = (dbAllocationGb * 1024 * 1024) / standardPageSizeKb; // 2097152

const hugePageSizeMb = 2;
const hugePageEntries = (dbAllocationGb * 1024) / hugePageSizeMb; // 4096

const pageTableReductionPct = Math.round((1 - (hugePageEntries / standardEntries)) * 10000) / 100; // 99.80%

// OOM Score calculation
const procA_ramGb = 12; // Redis: 12GB
const procA_adj = -500;
const procA_score = Math.max(0, Math.round((procA_ramGb / instanceRamGb) * 1000) + procA_adj); // 250

const procB_ramGb = 3.5; // Worker leak: 3.5GB
const procB_adj = 300;
const procB_score = Math.round((procB_ramGb / instanceRamGb) * 1000) + procB_adj; // 519

console.log("Memory HugePages and OOM Score Simulation:");
console.log("8 GB database: " + standardEntries + " entries with 4 KB pages reduced to " + hugePageEntries + " entries with 2 MB HugePages");
console.log("Page table entry reduction: " + pageTableReductionPct.toFixed(2) + "% reduction across 16 GB RAM");
console.log("OOM audit: Redis score " + procA_score + " protected against Worker score " + procB_score + " across 2 monitored processes");

// Output:
// Memory HugePages and OOM Score Simulation:
// 8 GB database: 2097152 entries with 4 KB pages reduced to 4096 entries with 2 MB HugePages
// Page table entry reduction: 99.80% reduction across 16 GB RAM
// OOM audit: Redis score 250 protected against Worker score 519 across 2 monitored processes`,
      caption: {
        en: 'For an 8 GB database, 2097152 entries with 4 KB pages drop to 4096 entries with 2 MB HugePages (99.80% reduction across 16 GB RAM), while score 250 protects Redis over score 519 across 2 monitored processes.',
        bn: '৮ জিবি ডেটাবেসে ৪ KB পেজের ২০৯৭১৫২টি এন্ট্রি ২ MB HugePages এ মাত্র ৪০৯৬টিতে সংকুচিত হয় (১৬ জিবি র্যামে ৯৯.৮০% হ্রাস), যেখানে ২টি পর্যবেক্ষণ করা প্রসেসে স্কোর ২৫০ স্কোর ৫১৯ এর বিপরীতে রেডিস রক্ষা করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive HugePages and OOM score calculator', bn: 'INSIDE — জীবন্ত HugePages ও OOM স্কোর ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test virtual memory scaling and OOM mitigation. Indexing an 8 GB database with standard 4 KB pages demands 2097152 entries, whereas 2 MB HugePages require only 4096 entries, yielding a 99.80% reduction across 16 GB RAM. In OOM evaluation, Redis with score 250 survives while an unruly Worker with score 519 gets killed across 2 monitored processes. This preserves critical data stores under memory exhaustion.',
        bn: 'ভার্চুয়াল মেমরির রূপান্তর ও OOM কিলার প্রতিরক্ষা পরীক্ষা করুন। সাধারণ ৪ KB পেজ দিয়ে ৮ জিবি ডেটাবেস সূচিত করতে ২০৯৭১৫২টি এন্ট্রির প্রয়োজন হয়, যেখানে ২ MB HugePages এ মাত্র ৪০৯৬টি এন্ট্রি লাগে যা ১৬ জিবি র্যামে ৯৯.৮০% সাশ্রয় নিশ্চিত করে। মেমরি ঘাটতির সময় OOM মূল্যায়নে রেডিস স্কোর ২৫০ নিয়ে নিরাপদে টিকে থাকে এবং বিপথগামী ওয়ার্কার স্কোর ৫১৯ নিয়ে ২টি পর্যবেক্ষণ করা প্রসেসে বন্ধ হয়ে যায়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Memory lab (verify page table reduction, press Run)', bn: 'মেমরি ল্যাব (পেজ টেবিল হ্রাস দেখুন, Run)' },
      html: '<h3>HugePages & OOM Score Monitor</h3>\n<pre id="out"></pre>\n<p>Compute virtual memory page counts and kernel OOM scores.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const dbGb = 8;\nconst stdEnt = (dbGb * 1024 * 1024) / 4;\nconst hugeEnt = (dbGb * 1024) / 2;\nconst redPct = ((1 - (hugeEnt / stdEnt)) * 100).toFixed(2);\nconsole.log("reduction: " + redPct + "%");\ndocument.getElementById("out").textContent = "Standard: " + stdEnt + " entries · HugePages: " + hugeEnt + " entries · Reduction: " + redPct + "% (16 GB RAM, 2 procs ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Memory engineering rules for cloud architectures', bn: 'ফলাফল — মেমরি ব্যবস্থাপনার মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Never allow production clusters to swap silently: disable swap on Kubernetes nodes to trigger fast failovers instead of slow I/O thrashing.', bn: 'প্রোডাকশনে অলক্ষে সোয়াপিং হতে দেবেন না: ধীরগতির ডিস্ক ক্র্যাশ এড়াতে কুবারনেটিস নোডে সোয়াপ বন্ধ রাখুন যেন দ্রুত ফেইলওভার হতে পারে।' },
        { en: 'Pre-allocate HugePages on boot: enable Transparent HugePages (2 MB or 1 GB) to eliminate page table memory footprint for caches.', bn: 'বুট হওয়ার সময় HugePages সংরক্ষণ করুন: মেমরি ক্যাশের গতি সর্বোচ্চ রাখতে বুটের সময়ই ২ MB বা ১ GB পেজ বরাদ্দ নিশ্চিত করুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common cloud memory pitfalls', bn: 'ডিবাগ — ক্লাউড মেমরির পরিচিত সমস্যা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Transparent HugePages (THP) latency spikes in Redis', bn: 'রেডিসে Transparent HugePages (THP) জনিত লেটেন্সি বৃদ্ধি' },
      text: {
        en: 'While static HugePages accelerate databases, Linux Transparent HugePages (THP) can cause severe latency spikes in Redis during background BGSAVE forks due to memory defragmentation pauses. Always set transparent_hugepage=madvise or never for Redis.',
        bn: 'স্থায়ী HugePages গতি বাড়ালেও লিনাক্সের স্বয়ংক্রিয় Transparent HugePages রেডিসের ব্যাকগ্রাউন্ড সেভের সময় মেমরি ডিফ্র্যাগমেন্টেশনের কারণে বড় ধরনের লেটেন্সি তৈরি করতে পারে। রেডিসের ক্ষেত্রে এটি madvise অথবা never রাখুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Protecting critical daemons with negative oom_score_adj', bn: 'নেগেটিভ oom_score_adj দিয়ে জরুরি সার্ভিস রক্ষা' },
      text: {
        en: 'Set systemd service directive OOMScoreAdjust=-500 for stateful daemons like PostgreSQL, ensuring that rogue web workers or background tasks get terminated before the primary database.',
        bn: 'পোস্টগ্রেসের মতো ডাটাবেসের সিস্টেম-ডি কনফিগারেশনে OOMScoreAdjust=-500 লিখে রাখুন, যাতে মেমরি শেষ হলেও কার্নেল ডাটাবেসের বদলে অপ্রয়োজনীয় ওয়েব ওয়ার্কার বন্ধ করে দেয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production memory footprints', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল মেমরি ব্যবস্থাপনা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Redis In-Memory Data Store: caches gigabytes of session data in physical RAM with sub-millisecond retrieval guarantees.', bn: 'Redis ডেটা স্টোর: সাব-মিলিসেকেন্ডের মধ্যে ডেটা সরবরাহের নিশ্চয়তা দিতে ফিজিক্যাল র্যামে গিগাবাইট ডেটা ক্যাশ করে রাখে।' },
        { en: 'Kubernetes Memory Limits: cgroups enforce hard memory limits, sending SIGKILL when pods breach their memory requests and limits.', bn: 'কুবারনেটিস মেমরি লিমিট: লিনাক্স সিগ্রুপের মাধ্যমে কন্টেইনারের মেমরি সীমাবদ্ধ করে সীমা লঙ্ঘনে সরাসরি পড রিস্টার্ট করে।' },
        { en: 'Apache Cassandra & JVM Heaps: utilize 1 GB HugePages in enterprise datacenters to eliminate JVM garbage collection pause thrashing.', bn: 'Apache Cassandra: এন্টারপ্রাইজ ডাটা সেন্টারে ১ GB HugePages ব্যবহার করে দীর্ঘ সময়ব্যাপী জাভা গার্বেজ কালেকশন পজ দূর করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Compute Scaling Strategies', bn: 'পরবর্তী পাঠ — কম্পিউট স্কেলিং কৌশল' },
    },
    {
      type: 'para',
      text: {
        en: 'With CPU and memory mechanics mastered, Lesson 5 investigates scaling architectures: vertical scaling (scale up) versus horizontal scaling (scale out), stateless application design, and distributed load distribution.',
        bn: 'সিপিইউ ও মেমরি পরিচালনা আয়ত্ত করার পর, পাঠ ৫ স্কেলিং আর্কিটেকচার শেখাবে: ভার্টিক্যাল স্কেলিং (স্কেল আপ) বনাম হরাইজন্টাল স্কেলিং (স্কেল আউট), স্টেটলেস অ্যাপ্লিকেশন ডিজাইন এবং ডিস্ট্রিবিউটেড লোড ডিস্ট্রিবিউশন।',
      },
    },
  ],
  exercises: [
    {
      id: 'cmp-mem-ex-1',
      kind: 'mcq',
      topic: 'standard-vs-hugepage-size',
      question: {
        en: 'What is the standard page size in modern Linux x86-64 operating systems, and what size do standard HugePages provide?',
        bn: 'আধুনিক লিনাক্স x86-64 অপারেটিং সিস্টেমে সাধারণ মেমরি পেজের আকার কত এবং প্রমিত HugePages কোন আকার প্রদান করে?',
      },
      options: [
        {
          en: 'Standard pages are 4 kilobytes (4 KB), while standard HugePages are 2 megabytes (2 MB) or 1 gigabyte (1 GB)',
          bn: 'সাধারণ পেজের আকার ৪ কিলোবাইট (4 KB), আর প্রমিত HugePages হলো ২ মেগাবাইট (2 MB) অথবা ১ গিগাবাইট (1 GB)',
        },
        {
          en: 'Standard pages are 100 megabytes, while HugePages are 5 bytes',
          bn: 'সাধারণ পেজের আকার ১০০ মেগাবাইট, আর HugePages হলো ৫ বাইট',
        },
        {
          en: 'Standard pages are stored on USB thumb drives',
          bn: 'সাধারণ পেজগুলো ইউএসবি পেনড্রাইভে সংরক্ষিত থাকে',
        },
        {
          en: 'All memory pages are identical in size to the computer monitor screen',
          bn: 'সব মেমরি পেজের আকার কম্পিউটার মনিটরের পর্দার সমান',
        },
      ],
      answer: 0,
      hint: { en: '4 KB standard, 2 MB / 1 GB HugePages.', bn: 'সাধারণ ৪ KB, HugePages ২ MB / ১ GB।' },
      explanation: {
        en: 'Linux uses 4 KB virtual pages by default; HugePages offer 2 MB and 1 GB sizes to reduce page table entries.',
        bn: 'লিনাক্সে সাধারণ পেজ ৪ KB হয়; HugePages ২ MB ও ১ GB আকার দিয়ে পেজ টেবিলের খরচ কমিয়ে আনে।',
      },
    },
    {
      id: 'cmp-mem-ex-2',
      kind: 'mcq',
      topic: 'hugepages-sim-numbers',
      question: {
        en: 'In our code walkthrough, how many page entries were required for an 8 GB database using 4 KB pages versus 2 MB HugePages, and what was the percentage reduction across 16 GB RAM?',
        bn: 'আমাদের কোড আলোচনায় ৮ জিবি ডেটাবেসের জন্য ৪ KB পেজে কতগুলো এন্ট্রি এবং ২ MB HugePages এ কতগুলো এন্ট্রি লেগেছিল, এবং ১৬ জিবি র্যামে কত শতাংশ হ্রাস পেয়েছিল?',
      },
      options: [
        {
          en: '2097152 entries with 4 KB pages reduced to 4096 entries with 2 MB HugePages (99.80% reduction across 16 GB RAM); score 250 protects Redis over score 519 across 2 monitored processes',
          bn: '৪ KB পেজের ২০৯৭১৫২টি এন্ট্রি ২ MB HugePages এ ৪০৯৬টিতে সংকুচিত (১৬ জিবি র্যামে ৯৯.৮০% হ্রাস); ২টি পর্যবেক্ষণ করা প্রসেসে স্কোর ২৫০ স্কোর ৫১৯ এর বিপরীতে রেডিস রক্ষা করে',
        },
        {
          en: '1000 entries reduced to 500 entries (50.00% reduction across 16 GB RAM); score 0 protects Redis over score 100 across 2 monitored processes',
          bn: '১০০০টি এন্ট্রি ৫০০টিতে হ্রাস (১৬ জিবি র্যামে ৫০.০০% হ্রাস); ২টি পর্যবেক্ষণ করা প্রসেসে স্কোর ০ স্কোর ১০০ এর বিপরীতে রেডিস রক্ষা করে',
        },
        {
          en: '0 entries reduced to 0 entries (0.00% reduction across 16 GB RAM); score 0 protects Redis over score 0 across 2 monitored processes',
          bn: '০টি এন্ট্রি ০টিতে হ্রাস (১৬ জিবি র্যামে ০.০০% হ্রাস); ২টি পর্যবেক্ষণ করা প্রসেসে স্কোর ০ স্কোর ০ এর বিপরীতে রেডিস রক্ষা করে',
        },
        {
          en: '5000000 entries reduced to 100000 entries (10.00% reduction across 16 GB RAM); score 50 protects Redis over score 90 across 2 monitored processes',
          bn: '৫০০০০০০টি এন্ট্রি ১০০০০০টিতে হ্রাস (১৬ জিবি র্যামে ১০.০০% হ্রাস); ২টি পর্যবেক্ষণ করা প্রসেসে স্কোর ৫০ স্কোর ৯০ এর বিপরীতে রেডিস রক্ষা করে',
        },
      ],
      answer: 0,
      hint: { en: '2097152 down to 4096 entries = 99.80% reduction.', bn: '২০৯৭১৫২ থেকে ৪০৯৬ এন্ট্রি = ৯৯.৮০% সাশ্রয়।' },
      explanation: {
        en: 'The simulation proved 2097152 standard entries compress to 4096 HugePages entries, a 99.80% reduction across 16 GB RAM.',
        bn: 'সিমুলেশনে দেখা যায় ২০৯৭১৫২টি সাধারণ এন্ট্রি ৪০৯৬টি HugePages এন্ট্রিতে পরিণত হয়, যা ১৬ জিবি র্যামে ৯৯.৮০% পেজ টেবিল হ্রাস করে।',
      },
    },
    {
      id: 'cmp-mem-ex-3',
      kind: 'mcq',
      topic: 'oom-killer-trigger-behavior',
      question: {
        en: 'Under what specific system condition does the Linux kernel activate the Out-Of-Memory (OOM) killer to terminate processes?',
        bn: 'সিস্টেমের কোন নির্দিষ্ট পরিস্থিতিতে লিনাক্স কার্নেল প্রসেস বন্ধ করতে Out-Of-Memory (OOM) কিলার সক্রিয় করে?',
      },
      options: [
        {
          en: 'When both physical RAM and available disk swap space are completely exhausted, leaving the kernel unable to allocate memory for essential operations',
          bn: 'যখন ফিজিক্যাল র্যাম এবং ডিস্ক সোয়াপ স্পেস উভয়ই পুরোপুরি নিঃশেষ হয়ে যায় এবং কার্নেল কোনো জরুরি কাজের জন্য মেমরি বরাদ্দ করতে পারে না',
        },
        {
          en: 'Whenever a user logs in with an incorrect SSH password',
          bn: 'যখনই কোনো ব্যবহারকারী ভুল এসএসএইচ পাসওয়ার্ড দিয়ে লগইন করার চেষ্টা করে',
        },
        {
          en: 'When the server clock reaches exactly midnight UTC',
          bn: 'যখন সার্ভারের ঘড়িতে ঠিক রাত বারোটা (UTC) বাজে',
        },
        {
          en: 'When a web browser downloads more than three images simultaneously',
          bn: 'যখন কোনো ওয়েব ব্রাউজার একসাথে তিনটির বেশি ছবি ডাউনলোড করে',
        },
      ],
      answer: 0,
      hint: { en: 'OOM triggers when RAM and swap are exhausted.', bn: 'র্যাম ও সোয়াপ নিঃশেষ হলে OOM সক্রিয় হয়।' },
      explanation: {
        en: 'The OOM killer is the kernel last-resort defense mechanism when no free physical or swap memory remains to satisfy requests.',
        bn: 'কোনো ফ্রি র্যাম বা সোয়াপ না থাকলে সিস্টেমকে ক্র্যাশ হওয়া থেকে বাঁচাতে কার্নেলের শেষ ভরসা হলো OOM কিলার।',
      },
    },
    {
      id: 'cmp-mem-ex-4',
      kind: 'predict',
      topic: 'oom-killer-acronym-token',
      question: {
        en: 'What three-letter acronym identifies the Linux kernel subsystem that forcibly terminates processes during acute memory exhaustion (e.g. OOM)?',
        bn: 'তীব্র মেমরি সংকটের সময় প্রসেস বন্ধ করে দেওয়া লিনাক্স কার্নেল সাবসিস্টেমকে কোন তিন অক্ষরের সংক্ষেপ দ্বারা চিহ্নিত করা হয় (যেমন OOM)?',
      },
      answer: 'OOM',
      accept: ['OOM', 'oom', 'OOM Killer', 'Out of memory'],
      hint: { en: 'O-O-M', bn: 'O-O-M' },
      explanation: {
        en: 'OOM stands for Out-Of-Memory, describing the kernel killer mechanism that halts tasks to free memory.',
        bn: 'OOM এর পূর্ণরূপ হলো Out-Of-Memory, যা মেমরি সংকটে প্রসেস কিল করে সিস্টেম বাঁচিয়ে রাখে।',
      },
    },
  ],
  quiz: {
    id: 'memories-and-the-memory-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'cmp-mem-q1',
        kind: 'mcq',
        topic: 'swapping-performance-penalty',
        question: {
          en: 'Why do high-throughput cloud database administrators routinely disable disk swapping entirely on production hosts?',
          bn: 'উচ্চ-গতির ক্লাউড ডেটাবেস প্রকৌশলীরা প্রোডাকশন হোস্টে কেন প্রায়শই ডিস্ক সোয়াপিং সম্পূর্ণরূপে নিষ্ক্রিয় রাখেন?',
        },
        options: [
          {
            en: 'Because disk swap access latency is orders of magnitude slower than electronic RAM, transforming a momentary memory surge into a paralyzing I/O storm',
            bn: 'কারণ ডিস্ক সোয়াপের লেটেন্সি ফিজিক্যাল র্যামের চেয়ে কয়েক হাজার গুণ ধীর হওয়ায় সামান্য মেমরি সংকটও পুরো সিস্টেমকে স্থবির করে দেয়',
          },
          {
            en: 'Because disk swap space creates computer viruses inside the motherboard',
            bn: 'কারণ ডিস্ক সোয়াপ স্পেস মাদারবোর্ডের ভেতর কম্পিউটার ভাইরাস তৈরি করে',
          },
          {
            en: 'Because swapping was declared illegal by international database protocols',
            bn: 'কারণ আন্তর্জাতিক ডেটাবেস প্রোটোকল দ্বারা সোয়াপিংকে বেআইনি ঘোষণা করা হয়েছে',
          },
          {
            en: 'Because swapping turns text files into empty zero-byte archives',
            bn: 'কারণ সোয়াপিং ফাইলগুলোকে শূন্য-বাইটের ফাইলে রূপান্তর করে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Disk latency is thousands of times slower than RAM.', bn: 'ডিস্কের গতি র্যামের তুলনায় কয়েক হাজার গুণ ধীর।' },
        explanation: {
          en: 'Active swapping introduces severe I/O blocking, causing requests to queue up and leading to catastrophic service degradation.',
          bn: 'সোয়াপিং শুরু হলে ডিস্ক আই/ও জ্যাম লেগে যায়, যার ফলে পুরো সিস্টেমের রেসপন্স টাইম অস্বাভাবিক বেড়ে যায়।',
        },
      },
      {
        id: 'cmp-mem-q2',
        kind: 'mcq',
        topic: 'oom-score-check',
        question: {
          en: 'In our code walkthrough, what was the adjusted OOM score of the protected Redis cache versus the leaking Worker across 2 monitored processes?',
          bn: 'আমাদের কোড আলোচনায় ২টি পর্যবেক্ষণ করা প্রসেসে সুরক্ষিত রেডিস ক্যাশের সমন্বিত OOM স্কোর এবং লিক হওয়া ওয়ার্কারের স্কোর কত ছিল?',
        },
        options: [
          { en: 'Redis score = 250, Worker score = 519 across 2 monitored processes', bn: 'রেডিসের স্কোর = ২৫০, ওয়ার্কারের স্কোর = ৫১৯ (২টি পর্যবেক্ষণ করা প্রসেসে)' },
          { en: 'Redis score = 1000, Worker score = 0 across 2 monitored processes', bn: 'রেডিসের স্কোর = ১০০০, ওয়ার্কারের স্কোর = ০ (২টি পর্যবেক্ষণ করা প্রসেসে)' },
          { en: 'Redis score = 50, Worker score = 50 across 2 monitored processes', bn: 'রেডিসের স্কোর = ৫০, ওয়ার্কারের স্কোর = ৫০ (২টি পর্যবেক্ষণ করা প্রসেসে)' },
          { en: 'Redis score = 0, Worker score = 0 across 2 monitored processes', bn: 'রেডিসের স্কোর = ০, ওয়ার্কারের স্কোর = ০ (২টি পর্যবেক্ষণ করা প্রসেসে)' },
        ],
        answer: 0,
        hint: { en: 'Redis was protected at score 250; worker reached 519.', bn: 'রেডিস ২৫০ স্কোরে সুরক্ষিত ছিল; ওয়ার্কার ৫১৯-এ পৌঁছেছিল।' },
        explanation: {
          en: 'With oom_score_adj applied, Redis received a safe score of 250 while the worker hit 519, ensuring the worker was killed first.',
          bn: 'oom_score_adj প্রয়োগ করায় রেডিসের স্কোর ২৫০ হয় এবং ওয়ার্কার ৫১৯ পেয়ে আগে টার্মিনেট হওয়ার যোগ্য হয়।',
        },
      },
      {
        id: 'cmp-mem-q3',
        kind: 'mcq',
        topic: 'oom-score-adjustment-file',
        question: {
          en: 'Which Linux procfs file path allows system administrators to adjust a specific process priority in the OOM killer calculation (range -1000 to +1000)?',
          bn: 'লিনাক্সের কোন procfs ফাইল পাথের মাধ্যমে অ্যাডমিনিস্ট্রেটররা OOM কিলারের হিসাব সমন্বয় করতে পারেন (যার পরিধি -১০০০ থেকে +১০০০)?',
        },
        options: [
          {
            en: '/proc/<PID>/oom_score_adj',
            bn: '/proc/<PID>/oom_score_adj',
          },
          {
            en: '/etc/hostname',
            bn: '/etc/hostname',
          },
          {
            en: '/var/log/syslog',
            bn: '/var/log/syslog',
          },
          {
            en: '/dev/null',
            bn: '/dev/null',
          },
        ],
        answer: 0,
        hint: { en: '/proc/<PID>/oom_score_adj adjusts the score.', bn: '/proc/<PID>/oom_score_adj ফাইলের সাহায্যে স্কোর পরিবর্তন করা হয়।' },
        explanation: {
          en: '/proc/<PID>/oom_score_adj is the modern interface to tune process vulnerability to the Linux kernel OOM killer.',
          bn: 'লিনাক্সে কোনো প্রসেসের OOM স্কোর সমন্বয় করতে /proc/<PID>/oom_score_adj ফাইল ব্যবহার করা হয়।',
        },
      },
      {
        id: 'cmp-mem-q4',
        kind: 'predict',
        topic: 'tlb-cache-acronym-token',
        question: {
          en: 'What three-letter acronym identifies the CPU hardware cache that stores recent virtual-to-physical memory page translations (e.g. TLB)?',
          bn: 'ভার্চুয়াল মেমরি থেকে ফিজিক্যাল মেমরির সাম্প্রতিক অনুবাদ সংরক্ষণকারী সিপিইউ হার্ডওয়্যার ক্যাশকে কোন তিন অক্ষরের সংক্ষেপ দ্বারা ডাকা হয় (যেমন TLB)?',
        },
        answer: 'TLB',
        accept: ['TLB', 'tlb', 'Translation Lookaside Buffer'],
        hint: { en: 'T-L-B', bn: 'T-L-B' },
        explanation: {
          en: 'TLB stands for Translation Lookaside Buffer, the high-speed CPU cache indexing virtual-to-physical memory page mappings.',
          bn: 'TLB হলো Translation Lookaside Buffer, যা ভার্চুয়াল মেমরি থেকে ফিজিক্যাল র্যামের ম্যাপ দ্রুত সরবরাহকারী হার্ডওয়্যার ক্যাশ।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'scalings-and-the-scaling',
    title: { en: 'Compute Scaling Strategies', bn: 'কম্পিউট স্কেলিং কৌশল' },
  },
};
