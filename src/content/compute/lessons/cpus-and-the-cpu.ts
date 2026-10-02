import type { Lesson } from '../../../lib/types';

export const CpusAndTheCpuLesson: Lesson = {
  slug: 'cpus-and-the-cpu',
  tech: 'compute',
  title: {
    en: 'Compute CPUs — vCPUs, Hyperthreading, NUMA, and Steal Time',
    bn: 'কম্পিউট সিপিইউ — vCPU, হাইপারথ্রেডিং, NUMA ও স্টিল টাইম',
  },
  summary: {
    en: 'A foundational overview of cloud processor architecture and vCPUs. Understand how virtual CPUs map to hardware hyper-threads, quantify non-uniform memory access (NUMA) node latency penalties, and diagnose hypervisor CPU steal time in high-load production servers.',
    bn: 'ক্লাউড প্রসেসর আর্কিটেকচার ও vCPU-র মৌলিক ধারণা। ভার্চুয়াল সিপিইউ কীভাবে হার্ডওয়্যার হাইপার-থ্রেডে ম্যাপ হয়, NUMA নোডের লেটেন্সি পেনাল্টি পরিমাপ এবং উচ্চ-চাপের প্রোডাকশনে হাইপারভাইজর সিপিইউ স্টিল টাইম শনাক্তকরণ।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Virtual CPUs, simultaneous multi-threading, and NUMA topologies', bn: 'WHAT — ভার্চুয়াল সিপিইউ, হাইপারথ্রেডিং ও NUMA টপোলজি' },
    },
    {
      type: 'para',
      text: {
        en: 'When you size compute instances in public clouds, capacity is measured in virtual central processing units (vCPUs). In modern enterprise hypervisors, one vCPU typically maps to a single hardware execution thread rather than a full dedicated physical core. Physical modern multi-core processors leverage simultaneous multi-threading (SMT) where two sibling threads share the arithmetic logic units and level-one instruction caches of one physical silicon core. On large multi-socket server motherboards, processors and physical RAM banks are arranged into Non-Uniform Memory Access (NUMA) domains. Accessing local memory pinned to your processor socket takes roughly half the time of accessing remote memory across the high-speed socket interconnect bus. Understanding these processor topologies allows you to diagnose compute bottlenecks, eliminate cache thrashing, and detect hypervisor steal time.',
        bn: 'যখন আপনি পাবলিক ক্লাউডে কম্পিউট ইনস্ট্যান্স বাছাই করেন, তখন প্রসেসিং ক্ষমতা ভার্চুয়াল সিপিইউ (vCPU) এককে পরিমাপ করা হয়। আধুনিক এন্টারপ্রাইজ হাইপারভাইজরে একটি vCPU সাধারণত একটি সম্পূর্ণ ফিজিক্যাল কোরের বদলে একটি একক হার্ডওয়্যার এক্সিকিউশন থ্রেড নির্দেশ করে। আধুনিক প্রসেসরগুলোতে সাইমালটেনিয়াস মাল্টি-থ্রেডিং (SMT) প্রযুক্তি থাকে যেখানে দুটি সিবলিং থ্রেড একটি ফিজিক্যাল কোরের ক্যাশ ও লজিক ইউনিট ভাগাভাগি করে ব্যবহার করে। বড় মাল্টি-সকেট সার্ভারে প্রসেসর এবং ফিজিক্যাল র্যাম ব্যাংকগুলো Non-Uniform Memory Access (NUMA) ডোমেইনে বিন্যস্ত থাকে। নিজস্ব সকেটের লোকাল মেমরি অ্যাক্সেস করার সময় ইন্টারকানেক্ট বাসের দূরের র্যাম অ্যাক্সেস করার তুলনায় প্রায় অর্ধেক সময় লাগে। এই প্রসেসর টপোলজি আয়ত্ত করলে আপনি পারফরম্যান্সের ঘাটতি দূর করতে এবং হাইপারভাইজর স্টিল টাইম দ্রুত শনাক্ত করতে পারবেন।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'NUMA node local versus remote interconnect memory access latency', bn: 'NUMA নোডের লোকাল বনাম রিমোট ইন্টারকানেক্ট মেমরি লেটেন্সি' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="NUMA Node Architecture and CPU Steal Time diagram">
<rect x="25" y="35" width="270" height="165" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
<text x="160" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">NUMA Node 0 (Socket 0)</text>

<rect x="40" y="75" width="115" height="45" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="97" y="95" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">16 vCPUs</text>
<text x="97" y="110" text-anchor="middle" font-size="8" fill="#1e40af">8 Physical Cores</text>

<rect x="165" y="75" width="115" height="45" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="222" y="95" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">64 GB Local RAM</text>
<text x="222" y="110" text-anchor="middle" font-size="8" fill="#16a34a">70 ns Local Latency</text>

<line x1="97" y1="120" x2="222" y2="120" stroke="#16a34a" stroke-width="2"/>
<text x="160" y="150" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">Local Access: 70 ns</text>

<line x1="295" y1="110" x2="345" y2="110" stroke="#ca8a04" stroke-width="3" stroke-dasharray="4"/>
<text x="320" y="98" text-anchor="middle" font-size="8" font-weight="700" fill="#ca8a04">UPI Bus</text>
<text x="320" y="130" text-anchor="middle" font-size="8" fill="#dc2626">+60 ns</text>

<rect x="345" y="35" width="270" height="165" rx="6" fill="#f8fafc" stroke="#059669" stroke-width="2"/>
<text x="480" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#065f46">NUMA Node 1 (Socket 1)</text>

<rect x="360" y="75" width="115" height="45" rx="4" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5"/>
<text x="417" y="95" text-anchor="middle" font-size="9" font-weight="700" fill="#047857">16 vCPUs</text>
<text x="417" y="110" text-anchor="middle" font-size="8" fill="#065f46">8 Physical Cores</text>

<rect x="485" y="75" width="115" height="45" rx="4" fill="#f0fdf4" stroke="#10b981" stroke-width="1.5"/>
<text x="542" y="95" text-anchor="middle" font-size="9" font-weight="700" fill="#047857">64 GB Remote RAM</text>
<text x="542" y="110" text-anchor="middle" font-size="8" fill="#dc2626">130 ns Remote</text>

<text x="480" y="150" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">Remote Access: 130 ns</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Remote NUMA interconnect adds 60 ns latency penalty over local 70 ns memory access</text>
</svg>`,
      caption: {
        en: 'NUMA local memory access takes 70 ns while remote socket traversal takes 130 ns, introducing a 60 ns cross-socket interconnect penalty across 2 NUMA nodes.',
        bn: 'NUMA লোকাল মেমরি অ্যাক্সেসে ৭০ ns সময় লাগে যেখানে রিমোট সকেটে ১৩০ ns লাগে, যা ২টি NUMA নোডে ৬০ ns ইন্টারকানেক্ট পেনাল্টি যোগ করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Virtual CPU (vCPU)',
          def: {
            en: 'A virtualized compute execution unit presented to guest VMs, representing one hardware thread of a multi-core processor.',
            bn: 'গেস্ট ভিএম-এ প্রদত্ত ভার্চুয়াল প্রসেসর ইউনিট, যা মাল্টি-কোর প্রসেসরের একটি একক হার্ডওয়্যার এক্সিকিউশন থ্রেডকে নির্দেশ করে।',
          },
        },
        {
          term: 'Non-Uniform Memory Access (NUMA)',
          def: {
            en: 'A multi-processor computer architecture where memory access latency depends on the physical location of the memory relative to the processor.',
            bn: 'মাল্টি-প্রসেসর কম্পিউটার আর্কিটেকচার যেখানে মেমরির ভৌগোলিক অবস্থানের উপর ভিত্তি করে ডেটা পড়ার গতি বা লেটেন্সি ভিন্ন হয়।',
          },
        },
        {
          term: 'CPU Steal Time (%st)',
          def: {
            en: 'The percentage of time a virtual CPU waited for the hypervisor to allocate real physical processor time while servicing other guests.',
            bn: 'হাইপারভাইজর অন্য ভিএমের কাজ করায় ভার্চুয়াল সিপিইউকে বাস্তব প্রসেসরের জন্য যে সময় অপেক্ষা করতে হয় তার শতকরা হার।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Eliminating memory latency and stolen clock cycles', bn: 'কেন — মেমরি লেটেন্সি ও স্টিল টাইম পরিহার' },
    },
    {
      type: 'list',
      items: [
        { en: 'Avoid cross-socket latency tax: memory-bound workloads (like Redis or PostgreSQL) experience up to 40% latency degradation when crossing NUMA interconnects.', bn: 'ক্রস-সকেট লেটেন্সি ট্যাক্স এড়ানো: রেডিস বা পোস্টগ্রেসের মতো মেমরি-নির্ভর অ্যাপ্লিকেশনে NUMA বাস পারাপারের কারণে ৪০% পর্যন্ত পারফরম্যান্স হ্রাস পেতে পারে।' },
        { en: 'Pin sibling threads to avoid cache eviction: pairing compute-heavy jobs on adjacent physical cores maximizes L3 cache hits.', bn: 'ক্যাশ উচ্ছেদ রোধে সিবলিং থ্রেড পিন করা: পাশাপাশি ফিজিক্যাল কোরে কাজ বরাদ্দ করলে L3 ক্যাশের হিট রেট সর্বোচ্চ থাকে।' },
        { en: 'Detect hypervisor oversubscription: identifying high CPU steal time allows automated migration off overloaded physical hypervisor hosts.', bn: 'অতিরিক্ত ভারাক্রান্ত হোস্ট শনাক্তকরণ: উচ্চ সিপিইউ স্টিল টাইম শনাক্ত করে ভিএমকে অন্য নিরাপদ ফিজিক্যাল হোস্টে স্থানান্তর করা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Optimizing vCPU performance in 4 steps', bn: 'HOW — ৪টি ধাপে vCPU পারফরম্যান্স উন্নতকরণ' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Inspect NUMA topology', bn: '১. NUMA টপোলজি পরীক্ষা' }, text: { en: 'Run numactl --hardware to inspect processor socket nodes and memory latencies.', bn: 'numactl --hardware চালিয়ে প্রসেসর সকেট ও মেমরির দূরত্ব যাচাই করুন।' } },
        { title: { en: '2. Bind process memory locally', bn: '২. লোকাল মেমরিতে প্রসেস বাঁধা' }, text: { en: 'Execute high-throughput engines with numactl --cpunodebind=0 --membind=0.', bn: 'উচ্চ-গতির ইঞ্জিনগুলো numactl কমান্ড দিয়ে নির্দিষ্ট লোকাল মেমরি নোডে সীমাবদ্ধ করুন।' } },
        { title: { en: '3. Monitor steal time metric', bn: '৩. স্টিল টাইম পর্যবেক্ষণ' }, text: { en: 'Check %st column in top or mpstat to ensure steal remains below 5.00%.', bn: 'top বা mpstat এর %st কলাম দেখে স্টিল টাইম ৫.০০% এর নিচে নিশ্চিত করুন।' } },
        { title: { en: '4. Disable hyperthreading if needed', bn: '৪. প্রয়োজনে হাইপারথ্রেডিং নিষ্ক্রিয়করণ' }, text: { en: 'Provision compute-optimized instances without SMT for latency-sensitive trading engines.', bn: 'লেটেন্সি-সংবেদনশীল কাজের জন্য SMT বিহীন বিশেষ কম্পিউট-অপ্টিমাইজড ইনস্ট্যান্স ব্যবহার করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'vcpu_numa_steal_sim.js',
      code: `// Simulated vCPU performance, NUMA latency, and CPU steal metrics
const localNumaLatencyNs = 70;
const remoteNumaLatencyNs = 130;
const numaInterconnectPenaltyNs = remoteNumaLatencyNs - localNumaLatencyNs; // 60 ns

const totalSchedulerTicks = 1000;
const activeGuestTicks = 940;
const stolenTicks = totalSchedulerTicks - activeGuestTicks; // 60 ticks

const cpuStealPct = (stolenTicks / totalSchedulerTicks) * 100; // 6.00%
const healthyStealThresholdPct = 5.00;

console.log("vCPU Performance and NUMA Node Latency Simulation:");
console.log("NUMA local access: " + localNumaLatencyNs + " ns, remote access: " + remoteNumaLatencyNs + " ns (cross-socket penalty: " + numaInterconnectPenaltyNs + " ns)");
console.log("Scheduler audit: " + activeGuestTicks + " active ticks, " + stolenTicks + " stolen ticks across " + totalSchedulerTicks + " ticks");
console.log("CPU steal: " + cpuStealPct.toFixed(2) + "% (healthy threshold: " + healthyStealThresholdPct.toFixed(2) + "% across 2 NUMA nodes)");

// Output:
// vCPU Performance and NUMA Node Latency Simulation:
// NUMA local access: 70 ns, remote access: 130 ns (cross-socket penalty: 60 ns)
// Scheduler audit: 940 active ticks, 60 stolen ticks across 1000 ticks
// CPU steal: 6.00% (healthy threshold: 5.00% across 2 NUMA nodes)`,
      caption: {
        en: 'The simulation records 70 ns local and 130 ns remote access (60 ns penalty), auditing 940 active and 60 stolen ticks across 1000 ticks for 6.00% CPU steal (threshold: 5.00% across 2 NUMA nodes).',
        bn: 'সিমুলেশনটিতে ৭০ ns লোকাল ও ১৩০ ns রিমোট অ্যাক্সেস (৬০ ns পেনাল্টি) পরিমাপ করা হয় এবং ১০০০ টিক্সে ৯৪০ সক্রিয় ও ৬০ চুরি টিক্স মিলিয়ে ৬.০০% সিপিইউ স্টিল ধরা পড়ে (২টি NUMA নোডে সীমা: ৫.০০%)।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive vCPU scheduler and NUMA lab', bn: 'INSIDE — জীবন্ত vCPU শিডিউলার ও NUMA ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test vCPU scheduler dynamics and NUMA penalties. Reading local socket memory consumes 70 ns while remote socket memory access jumps to 130 ns, incurring a 60 ns interconnect penalty across 2 NUMA nodes. In hypervisor scheduling, 940 active ticks and 60 stolen ticks across 1000 ticks produce 6.00% CPU steal time, breaching the 5.00% healthy threshold across 2 NUMA nodes. This signals physical host noisy-neighbor contention.',
        bn: 'vCPU শিডিউলার গতিশীলতা এবং NUMA পেনাল্টি পরীক্ষা করুন। লোকাল সকেটের মেমরি পড়তে ৭০ ns সময় লাগে আর রিমোট সকেটের মেমরি অ্যাক্সেসে সময় বেড়ে ১৩০ ns হয়, যা ২টি NUMA নোডে ৬০ ns অতিরিক্ত ইন্টারকানেক্ট পেনাল্টি যোগ করে। হাইপারভাইজর শিডিউলিংয়ে ১০০০ টিক্সে ৯৪০ সক্রিয় এবং ৬০ চুরি টিক্স মিলে ৬.০০% সিপিইউ স্টিল টাইম তৈরি করে, যা ২টি NUMA নোডে স্বাস্থ্যকর ৫.০০% সীমা অতিক্রম করে। এটি ফিজিক্যাল হোস্টে অন্য ভিএমের অতিরিক্ত চাপের স্পষ্ট লক্ষণ।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'vCPU scheduler lab (verify steal percentage, press Run)', bn: 'vCPU শিডিউলার ল্যাব (স্টিল শতাংশ পরীক্ষা, Run)' },
      html: '<h3>vCPU Steal Time & NUMA Penalty Monitor</h3>\n<pre id="out"></pre>\n<p>Compute scheduler steal time and memory interconnect penalties.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const localNs = 70;\nconst remoteNs = 130;\nconst pen = remoteNs - localNs;\nconst total = 1000;\nconst stolen = 60;\nconst stealPct = (stolen / total) * 100;\nconsole.log("steal: " + stealPct.toFixed(2) + "%");\ndocument.getElementById("out").textContent = "Local: " + localNs + " ns · Remote: " + remoteNs + " ns (+ " + pen + " ns) · Steal: " + stealPct.toFixed(2) + "% (1000 ticks, 2 nodes ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Processor scheduling rules for architects', bn: 'ফলাফল — প্রসেসর শিডিউলিংয়ের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Steal time above 5.00% demands immediate investigation: replace or migrate instances when the physical hypervisor host suffers CPU starvation.', bn: 'স্টিল টাইম ৫.০০% এর বেশি হলে দ্রুত ব্যবস্থা নিন: ফিজিক্যাল হোস্টে সিপিইউর টানাটানি দেখা দিলে ইনস্ট্যান্সটি অন্য হোস্টে স্থানান্তর করুন।' },
        { en: 'Keep latency-critical processes within single NUMA nodes: bind database memory pools strictly to local socket nodes to preserve memory throughput.', bn: 'সংবেদনশীল কাজ একক NUMA নোডে রাখুন: মেমরির সর্বোচ্চ গতি ধরে রাখতে ডেটাবেসের মেমরি পুল সবসময় লোকাল সকেট নোডে আবদ্ধ রাখুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common CPU allocation traps', bn: 'ডিবাগ — প্রসেসর বরাদ্দের সাধারণ বিভ্রান্তি' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Treating 1 vCPU as 1 dedicated physical core', bn: '১টি vCPU-কে একটি সম্পূর্ণ ডেডিকেটেড ফিজিক্যাল কোর ভাবার ভুল' },
      text: {
        en: 'A virtual CPU is almost always a single thread of a multi-threaded physical core. Running two intensive tasks on sibling threads can lead to cache line eviction and shared instruction decoder bottlenecks.',
        bn: 'ভার্চুয়াল সিপিইউ সাধারণত একটি মাল্টি-থ্রেডেড ফিজিক্যাল কোরের কেবল একটি থ্রেড মাত্র। দুটি উচ্চ-চাপের কাজ পাশাপাশি সিবলিং থ্রেডে চালালে তারা একে অন্যের ক্যাশ মেমরি দখল করে গতি কমিয়ে দিতে পারে।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Diagnosing CPU steal with the mpstat Linux utility', bn: 'mpstat টুলের সাহায্যে লিনাক্সে সিপিইউ স্টিল টাইম নির্ণয়' },
      text: {
        en: 'Execute mpstat -P ALL 1 to view real-time per-core CPU statistics. If the %steal column remains elevated while your application load is modest, request hypervisor migration from cloud support.',
        bn: 'প্রতিটি কোরের তাৎক্ষণিক অবস্থা দেখতে mpstat -P ALL 1 চালান। নিজের অ্যাপ্লিকেশনে চাপ কম থাকা সত্ত্বেও যদি %steal কলামের মান উঁচু থাকে, তবে ক্লাউড প্রোভাইডারের সহায়তায় ইনস্ট্যান্সটি স্থানান্তরিত করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production CPU architectures', bn: 'বাস্তব ক্ষেত্র — আধুনিক প্রসেসর পরিকাঠামো' },
    },
    {
      type: 'list',
      items: [
        { en: 'AWS Graviton (ARM Neoverse): eliminates SMT entirely, guaranteeing that every single vCPU is a full, dedicated physical processor core.', bn: 'AWS Graviton (ARM): হাইপারথ্রেডিং সম্পূর্ণ বর্জন করে প্রতিটি vCPU-কে একটি স্বয়ংসম্পূর্ণ ডেডিকেটেড ফিজিক্যাল কোর হিসেবে নিশ্চিত করে।' },
        { en: 'AMD EPYC processors: multi-chip module (MCM) architecture with dedicated Core Complex Dies (CCD) requiring careful NUMA scheduling.', bn: 'AMD EPYC: মাল্টি-চিপ মডিউল আর্কিটেকচার যাতে সর্বোচ্চ গতির জন্য সতর্কতার সাথে NUMA শিডিউলিং করতে হয়।' },
        { en: 'Intel Xeon Scalable: UPI (Ultra Path Interconnect) bus linking multiple CPU sockets with high-bandwidth coherent memory fabric.', bn: 'Intel Xeon Scalable: ইউপিআই বাসের মাধ্যমে একাধিক প্রসেসর সকেটকে যুক্ত করে সুসংগত মেমরি পরিকাঠামো তৈরি করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Cloud Memory and RAM Allocation', bn: 'পরবর্তী পাঠ — ক্লাউড মেমরি ও র্যাম বরাদ্দ' },
    },
    {
      type: 'para',
      text: {
        en: 'With CPU architectures and NUMA boundaries mastered, Lesson 4 explores cloud memory mechanics: virtual memory pages, Linux Out-Of-Memory (OOM) killer mechanics, swapping overhead, and configuring HugePages for high-performance databases.',
        bn: 'সিপিইউ আর্কিটেকচার ও NUMA বাউন্ডারি আয়ত্ত করার পর, পাঠ ৪ ক্লাউড মেমরি নিয়ে আলোচনা করবে: ভার্চুয়াল মেমরি পেজ, লিনাক্স OOM কিলার মেকানিজম, সোয়াপিং ওভারহেড এবং উচ্চ-গতির ডেটাবেসের জন্য HugePages কনফিগারেশন।',
      },
    },
  ],
  exercises: [
    {
      id: 'cmp-cpu-ex-1',
      kind: 'mcq',
      topic: 'vcpu-physical-thread-mapping',
      question: {
        en: 'In public cloud hypervisors, what does a single virtual CPU (vCPU) generally correspond to on the physical host machine?',
        bn: 'পাবলিক ক্লাউড হাইপারভাইজরে একটি ভার্চুয়াল সিপিইউ (vCPU) সাধারণত ফিজিক্যাল হোস্ট মেশিনের কোন অংশের সাথে সরাসরি সম্পর্কিত?',
      },
      options: [
        {
          en: 'One hardware execution thread (Hyper-Thread or SMT thread) sharing execution units and L1/L2 caches with a sibling thread on a physical core',
          bn: 'একটি হার্ডওয়্যার এক্সিকিউশন থ্রেড (হাইপার-থ্রেড বা SMT থ্রেড) যা ফিজিক্যাল কোরের এক্সিকিউশন ইউনিট ও L1/L2 ক্যাশ অপর একটি সিবলিং থ্রেডের সাথে ভাগ করে নেয়',
        },
        {
          en: 'An entire physical motherboard dedicated exclusively to the tenant',
          bn: 'গ্রাহকের জন্য নিবেদিত একটি সম্পূর্ণ ফিজিক্যাল মাদারবোর্ড',
        },
        {
          en: 'A software algorithm that runs inside browser cookies',
          bn: 'ব্রাউজার কুকির ভেতরে চলমান একটি সফটওয়্যার অ্যালগরিদম',
        },
        {
          en: 'A virtual currency token mined during idle compute hours',
          bn: 'অলস সময়ে মাইনিং করা একটি ভার্চুয়াল ক্রিপ্টোকারেন্সি টোকেন',
        },
      ],
      answer: 0,
      hint: { en: 'A vCPU is usually 1 hardware SMT thread.', bn: 'একটি vCPU সাধারণত ১টি হার্ডওয়্যার SMT থ্রেড।' },
      explanation: {
        en: 'In cloud virtualization, 1 vCPU is conventionally mapped to 1 hyper-thread on a multi-threaded physical core.',
        bn: 'ক্লাউড ভার্চুয়ালাইজেশনে সাধারণত ১টি vCPU একটি ফিজিক্যাল কোরের ১টি হাইপার-থ্রেডকে নির্দেশ করে।',
      },
    },
    {
      id: 'cmp-cpu-ex-2',
      kind: 'mcq',
      topic: 'numa-latency-sim-numbers',
      question: {
        en: 'In our code walkthrough, what were the local and remote NUMA memory latencies, and what was the resulting CPU steal percentage across 1000 ticks?',
        bn: 'আমাদের কোড আলোচনায় লোকাল ও রিমোট NUMA মেমরি লেটেন্সি কত ছিল এবং ১০০০ টিক্সে মোট কত শতাংশ সিপিইউ স্টিল পরিমাপ করা হয়েছিল?',
      },
      options: [
        {
          en: 'Local = 70 ns, Remote = 130 ns (60 ns penalty); 940 active and 60 stolen ticks across 1000 ticks for 6.00% CPU steal (threshold: 5.00% across 2 NUMA nodes)',
          bn: 'লোকাল = ৭০ ns, রিমোট = ১৩০ ns (৬০ ns পেনাল্টি); ১০০০ টিক্সে ৯৪০ সক্রিয় ও ৬০ চুরি টিক্স মিলে ৬.০০% সিপিইউ স্টিল (২টি NUMA নোডে সীমা: ৫.০০%)',
        },
        {
          en: 'Local = 0 ns, Remote = 0 ns (0 ns penalty); 1000 active and 0 stolen ticks across 1000 ticks for 0.00% CPU steal (threshold: 0.00% across 2 NUMA nodes)',
          bn: 'লোকাল = ০ ns, রিমোট = ০ ns (০ ns পেনাল্টি); ১০০০ টিক্সে ১০০০ সক্রিয় ও ০ চুরি টিক্স মিলে ০.০০% সিপিইউ স্টিল (২টি NUMA নোডে সীমা: ০.০০%)',
        },
        {
          en: 'Local = 500 ns, Remote = 1000 ns (500 ns penalty); 500 active and 500 stolen ticks across 1000 ticks for 50.00% CPU steal (threshold: 10.00% across 2 NUMA nodes)',
          bn: 'লোকাল = ৫০০ ns, রিমোট = ১০০০ ns (৫০০ ns পেনাল্টি); ১০০০ টিক্সে ৫০০ সক্রিয় ও ৫০০ চুরি টিক্স মিলে ৫০.০০% সিপিইউ স্টিল (২টি NUMA নোডে সীমা: ১০.০০%)',
        },
        {
          en: 'Local = 10 ns, Remote = 20 ns (10 ns penalty); 900 active and 100 stolen ticks across 1000 ticks for 10.00% CPU steal (threshold: 1.00% across 2 NUMA nodes)',
          bn: 'লোকাল = ১০ ns, রিমোট = ২০ ns (১০ ns পেনাল্টি); ১০০০ টিক্সে ৯০০ সক্রিয় ও ১০০ চুরি টিক্স মিলে ১০.০০% সিপিইউ স্টিল (২টি NUMA নোডে সীমা: ১.০০%)',
        },
      ],
      answer: 0,
      hint: { en: '70 ns local, 130 ns remote, 60 stolen ticks = 6.00% steal.', bn: '৭০ ns লোকাল, ১৩০ ns রিমোট, ৬০ চুরি টিক্স = ৬.০০% স্টিল।' },
      explanation: {
        en: 'The benchmark measured 70 ns local and 130 ns remote access (60 ns penalty), resulting in 6.00% steal over 1000 ticks.',
        bn: 'পরীক্ষায় ৭০ ns লোকাল ও ১৩০ ns রিমোট এক্সেস (৬০ ns পেনাল্টি) এবং ১০০০ টিক্সে ৬.০০% স্টিল টাইম পরিমাপ করা হয়েছিল।',
      },
    },
    {
      id: 'cmp-cpu-ex-3',
      kind: 'mcq',
      topic: 'cpu-steal-diagnosis',
      question: {
        en: 'What does a high CPU steal percentage (%st) in Linux top or mpstat indicate about a cloud virtual machine?',
        bn: 'লিনাক্সের top বা mpstat-এ উচ্চ সিপিইউ স্টিল পার্সেন্টেজ (%st) ক্লাউড ভার্চুয়াল মেশিন সম্পর্কে কী নির্দেশ করে?',
      },
      options: [
        {
          en: 'The physical hypervisor host is oversubscribed, causing your virtual machine to wait while physical CPU cycles are diverted to host tasks or noisy neighbor tenants',
          bn: 'ফিজিক্যাল হাইপারভাইজর হোস্টটি অতিরিক্ত ভারাক্রান্ত, যার ফলে আপনার ভিএমকে ফিজিক্যাল প্রসেসরের জন্য অপেক্ষা করতে হচ্ছে কারণ প্রসেসর অন্য ভিএমের কাজ করছে',
        },
        {
          en: 'The virtual machine has been hacked by an external cyber criminal',
          bn: 'ভার্চুয়াল মেশিনটি কোনো বহিরাগত সাইবার অপরাধী দ্বারা হ্যাক হয়েছে',
        },
        {
          en: 'The computer hard drive is spinning counter-clockwise',
          bn: 'কম্পিউটারের হার্ড ড্রাইভ ঘড়ির কাঁটার বিপরীত দিকে ঘুরছে',
        },
        {
          en: 'The operating system kernel has deleted its own graphics drivers',
          bn: 'অপারেটিং সিস্টেম কার্নেল নিজের গ্রাফিক্স ড্রাইভার নিজে মুছে ফেলেছে',
        },
      ],
      answer: 0,
      hint: { en: 'Steal time means the hypervisor stole clock cycles for others.', bn: 'স্টিল টাইম নির্দেশ করে হাইপারভাইজর অন্য কাজের জন্য প্রসেসর চক্র সরিয়ে নিয়েছে।' },
      explanation: {
        en: 'CPU steal time occurs when the hypervisor allocates physical processor execution time to other virtual machines.',
        bn: 'হাইপারভাইজর যখন ফিজিক্যাল প্রসেসরকে অন্য ভিএমের কাজে নিয়োজিত রাখে, তখন স্টিল টাইম বৃদ্ধি পায়।',
      },
    },
    {
      id: 'cmp-cpu-ex-4',
      kind: 'predict',
      topic: 'numa-acronym-token',
      question: {
        en: 'What architectural acronym designates memory configurations where memory access latency depends on socket placement (e.g. NUMA)?',
        bn: 'কোন কারিগরি সংক্ষিপ্ত রূপটি এমন মেমরি আর্কিটেকচারকে বোঝায় যেখানে সকেটের দূরত্বের উপর নির্ভর করে মেমরি অ্যাক্সেস স্পিড পরিবর্তিত হয় (যেমন NUMA)?',
      },
      answer: 'NUMA',
      accept: ['NUMA', 'numa', 'Non-Uniform Memory Access'],
      hint: { en: 'N-U-M-A', bn: 'N-U-M-A' },
      explanation: {
        en: 'NUMA stands for Non-Uniform Memory Access, describing architectures where local memory is faster than remote memory.',
        bn: 'NUMA এর পূর্ণরূপ হলো Non-Uniform Memory Access, যেখানে লোকাল মেমরি রিমোট মেমরির চেয়ে দ্রুত কাজ করে।',
      },
    },
  ],
  quiz: {
    id: 'cpus-and-the-cpu-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'cmp-cpu-q1',
        kind: 'mcq',
        topic: 'hyperthreading-sibling-cache-contention',
        question: {
          en: 'Why might latency-critical applications experience inconsistent throughput when running on two sibling threads of the same physical core?',
          bn: 'একই ফিজিক্যাল কোরের দুটি সিবলিং থ্রেডে কাজ চালালে লেটেন্সি-সংবেদনশীল অ্যাপ্লিকেশনগুলো কেন অস্থির থ্রুপুটের মুখোমুখি হতে পারে?',
        },
        options: [
          {
            en: 'Because sibling threads physically share execution pipelines and L1/L2 cache lines, causing frequent cache evictions and instruction decoder contention',
            bn: 'কারণ সিবলিং থ্রেডগুলো যৌথভাবে একই এক্সিকিউশন পাইপলাইন ও L1/L2 ক্যাশ ব্যবহার করে, যার ফলে অনাকাঙ্ক্ষিত ক্যাশ উচ্ছেদ ও ডিকোডার দ্বন্দ্ব ঘটে',
          },
          {
            en: 'Because sibling threads run at completely different electrical voltages',
            bn: 'কারণ সিবলিং থ্রেডগুলো সম্পূর্ণ ভিন্ন বৈদ্যুতিক ভোল্টেজে কাজ করে',
          },
          {
            en: 'Because hyperthreading was outlawed by Linux distributions in 2018',
            bn: 'কারণ ২০১৮ সালে লিনাক্স ডিস্ট্রিবিউশনগুলোতে হাইপারথ্রেডিং নিষিদ্ধ করা হয়েছিল',
          },
          {
            en: 'Because the CPU clock halts during every sibling context switch',
            bn: 'কারণ প্রতিটি সিবলিং কনটেক্সট সুইচের সময় সিপিইউ ক্লক সম্পূর্ণরূপে থেমে যায়',
          },
        ],
        answer: 0,
        hint: { en: 'Sibling threads compete for shared hardware execution units and cache.', bn: 'সিবলিং থ্রেডগুলো যৌথ ক্যাশ ও প্রসেসর পাইপলাইনের জন্য প্রতিযোগিতা করে।' },
        explanation: {
          en: 'Simultaneous Multi-Threading (SMT) shares L1/L2 caches and execution units between sibling threads, introducing contention.',
          bn: 'SMT প্রযুক্তিতে দুটি থ্রেড একই ক্যাশ ও এক্সিকিউশন ইউনিট ব্যবহার করায় পারস্পরিক প্রতিদ্বন্দ্বিতা তৈরি হয়।',
        },
      },
      {
        id: 'cmp-cpu-q2',
        kind: 'mcq',
        topic: 'numa-penalty-check',
        question: {
          en: 'In our code walkthrough, what was the cross-socket interconnect latency penalty calculated when accessing remote NUMA memory compared to local memory?',
          bn: 'আমাদের কোড আলোচনায় লোকাল মেমরির তুলনায় রিমোট NUMA মেমরি ব্যবহারের কারণে ক্রস-সকেট ইন্টারকানেক্টে কত অতিরিক্ত লেটেন্সি পেনাল্টি হিসাব করা হয়েছিল?',
        },
        options: [
          { en: '60 ns interconnect penalty (130 ns remote minus 70 ns local across 2 NUMA nodes)', bn: '৬০ ns ইন্টারকানেক্ট পেনাল্টি (২টি NUMA নোডে ১৩০ ns রিমোট বিয়োগ ৭০ ns লোকাল)' },
          { en: '1000 ns interconnect penalty across 2 NUMA nodes', bn: '২টি NUMA নোডে ১০০০ ns ইন্টারকানেক্ট পেনাল্টি' },
          { en: '0 ns interconnect penalty across 2 NUMA nodes', bn: '২টি NUMA নোডে ০ ns ইন্টারকানেক্ট পেনাল্টি' },
          { en: '5 ns interconnect penalty across 2 NUMA nodes', bn: '২টি NUMA নোডে ৫ ns ইন্টারকানেক্ট পেনাল্টি' },
        ],
        answer: 0,
        hint: { en: '130 - 70 = 60 ns.', bn: '১৩০ - ৭০ = ৬০ ns।' },
        explanation: {
          en: 'Remote NUMA traversal required 130 ns versus 70 ns local access, producing a 60 ns cross-socket penalty across 2 NUMA nodes.',
          bn: 'রিমোট মেমরিতে ১৩০ ns ও লোকালে ৭০ ns লেগেছিল, যার ফলে ২টি নোডে ৬০ ns অতিরিক্ত ইন্টারকানেক্ট পেনাল্টি হিসাব করা হয়েছিল।',
        },
      },
      {
        id: 'cmp-cpu-q3',
        kind: 'mcq',
        topic: 'numactl-process-binding',
        question: {
          en: 'What Linux utility is commonly used to bind a process and its allocated memory to a specific NUMA node to prevent cross-socket latency?',
          bn: 'ক্রস-সকেট লেটেন্সি প্রতিরোধ করতে কোনো প্রসেস এবং তার মেমরি নির্দিষ্ট NUMA নোডে বেঁধে রাখতে কোন লিনাক্স টুলটি ব্যবহৃত হয়?',
        },
        options: [
          {
            en: 'numactl (e.g. numactl --cpunodebind=0 --membind=0 ./server)',
            bn: 'numactl (যেমন numactl --cpunodebind=0 --membind=0 ./server)',
          },
          {
            en: 'grep --invert-match',
            bn: 'grep --invert-match',
          },
          {
            en: 'cat /dev/random',
            bn: 'cat /dev/random',
          },
          {
            en: 'ping 127.0.0.1',
            bn: 'ping 127.0.0.1',
          },
        ],
        answer: 0,
        hint: { en: 'numactl controls NUMA node allocation.', bn: 'numactl কমান্ড NUMA নোডে মেমরি বণ্টন নিয়ন্ত্রণ করে।' },
        explanation: {
          en: 'The numactl command-line tool controls NUMA policy for processes, pinning memory allocation and execution threads to local nodes.',
          bn: 'numactl টুলের সাহায্যে কোনো প্রসেসকে নির্দিষ্ট লোকাল সকেট ও মেমরিতে আবদ্ধ রাখা যায়।',
        },
      },
      {
        id: 'cmp-cpu-q4',
        kind: 'predict',
        topic: 'top-steal-column-header',
        question: {
          en: 'What two-letter column header in the Linux top utility displays the CPU steal percentage (e.g. st)?',
          bn: 'লিনাক্সের top কমান্ডে সিপিইউ স্টিল পার্সেন্টেজ কোন দুই অক্ষরের কলাম শিরোনামে প্রদর্শিত হয় (যেমন st)?',
        },
        answer: 'st',
        accept: ['st', '%st', 'steal'],
        hint: { en: 's-t', bn: 's-t' },
        explanation: {
          en: 'The "st" (or %st) column in Linux performance utilities like top, mpstat, and vmstat reports hypervisor steal time.',
          bn: 'লিনাক্সের top, mpstat ও vmstat টুলে "st" কলামটি হাইপারভাইজর স্টিল টাইম প্রকাশ করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'memories-and-the-memory',
    title: { en: 'Cloud Memory and RAM Allocation', bn: 'ক্লাউড মেমরি ও র্যাম বরাদ্দ' },
  },
};
