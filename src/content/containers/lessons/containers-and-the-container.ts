import type { Lesson } from '../../../lib/types';

export const ContainersAndTheContainerLesson: Lesson = {
  slug: 'containers-and-the-container',
  tech: 'containers',
  title: {
    en: 'Introduction to Containers — Namespaces, Cgroups, and Isolation Primitives',
    bn: 'কন্টেইনার পরিচিতি — নেমস্পেস, সিগ্রুপস ও আইসোলেশন প্রিমিটিভস',
  },
  summary: {
    en: 'A foundational overview of container architecture, Linux namespaces, and control groups. Benchmark 500 worker workloads comparing containers (120 ms boot, 7.25 GB total RAM) against virtual machines (45000 ms boot, 512.00 GB total RAM). Save 44880 ms of startup latency (99.73% faster) and 504.75 GB of host memory (98.58% reduction), isolating 4 OOM limits to achieve 99.20% success (496 workers) with 0 host crashes.',
    bn: 'কন্টেইনার আর্কিটেকচার, লিনাক্স নেমস্পেস ও কন্ট্রোল গ্রুপের মৌলিক ধারণা। ৫০০টি ওয়ার্কার লোডে কন্টেইনার (১২০ ms বুট, ৭.২৫ GB মোট র্যাম) এবং ভার্চুয়াল মেশিনের (৪৫০০০ ms বুট, ৫১২.০০ GB মোট র্যাম) তুলনা। স্টার্টআপে ৪৪৮৮০ ms সময় বাঁচায় (৯৯.৭৩% দ্রুত) এবং ৫০৪.৭৫ GB হোস্ট মেমরি সাশ্রয় করে (৯৮.৫৮% হ্রাস), যেখানে ৪টি ওওএম সীমা নিয়ন্ত্রণ করে ৪৯৬টি ওয়ার্কারে ৯৯.২০% সাফল্য আসে এবং ০টি হোস্ট ক্র্যাশ ঘটে।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Linux namespaces, cgroups, and container processes', bn: 'WHAT — লিনাক্স নেমস্পেস, সিগ্রুপস ও কন্টেইনার প্রসেস' },
    },
    {
      type: 'para',
      text: {
        en: 'When you run an application in production, keeping software environments isolated and reproducible is essential. Containers achieve this isolation without running heavy virtual machines. In Linux systems, a container is a standard operating system process running directly on the host kernel. The Linux kernel uses namespaces to provide isolation for process IDs, networking interfaces, and filesystem mount points. Simultaneously, control groups, known as cgroups, regulate physical hardware usage such as CPU and RAM. Container runtimes like runc coordinate these kernel features to execute your code in milliseconds.',
        bn: 'যখন আপনি প্রোডাকশনে অ্যাপ্লিকেশন পরিচালনা করেন, তখন সফটওয়্যার পরিবেশ নিরাপদ ও সামঞ্জস্যপূর্ণ রাখা অপরিহার্য। কন্টেইনার কোনো ভারী ভার্চুয়াল মেশিন না চালিয়েই এই স্বাধীনতা নিশ্চিত করে। লিনাক্স সিস্টেমে কন্টেইনার হলো হোস্ট কার্নেলের ওপর সরাসরি চলা একটি স্বাভাবিক প্রসেস। লিনাক্স কার্নেল প্রসেস আইডি, নেটওয়ার্ক ও ফাইলসিস্টেম আলাদা রাখতে নেমস্পেস নামক শক্তিশালী প্রযুক্তি ব্যবহার করে। একই সাথে কন্ট্রোল গ্রুপ বা সিগ্রুপস সিপিইউ ও মেমরির মতো ফিজিক্যাল হার্ডওয়্যারের ব্যবহার নিয়ন্ত্রণ করে। runc-এর মতো কন্টেইনার রানটাইম কার্নেলের এই সুবিধাগুলো কাজে লাগিয়ে মিলিসেকেন্ডের মধ্যে কোড চালু করে দেয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Container vs Virtual Machine architecture: 500 workers comparison', bn: 'কন্টেইনার বনাম ভার্চুয়াল মেশিন আর্কিটেকচার: ৫০০টি ওয়ার্কারের তুলনা' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Container vs VM architecture diagram">
<rect x="25" y="35" width="160" height="165" rx="6" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
<text x="105" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">Virtual Machines (VM)</text>

<rect x="35" y="80" width="140" height="25" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="105" y="96" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">Guest OS & Kernel</text>

<rect x="35" y="110" width="140" height="25" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="105" y="126" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">Hypervisor Layer</text>

<text x="105" y="155" text-anchor="middle" font-size="8" font-weight="700" fill="#dc2626">512.00 GB Host RAM</text>
<text x="105" y="170" text-anchor="middle" font-size="8" font-weight="700" fill="#dc2626">45000 ms boot time</text>

<line x1="185" y1="117" x2="235" y2="117" stroke="#dc2626" stroke-width="2"/>
<polygon points="235,113 245,117 235,121" fill="#dc2626"/>

<rect x="245" y="35" width="180" height="165" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="335" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Linux Containers</text>

<rect x="255" y="80" width="160" height="30" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
<text x="335" y="95" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Isolated Processes (Namespaces)</text>
<text x="335" y="105" text-anchor="middle" font-size="7" fill="#1e40af">PID · NET · MNT · IPC · USER</text>

<rect x="255" y="118" width="160" height="30" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="335" y="133" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Cgroups v2 Resource Limits</text>
<text x="335" y="143" text-anchor="middle" font-size="7" fill="#15803d">memory.max · cpu.max</text>

<text x="335" y="175" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Shared Host Linux Kernel</text>

<line x1="425" y1="117" x2="475" y2="117" stroke="#16a34a" stroke-width="2"/>
<polygon points="475,113 485,117 475,121" fill="#16a34a"/>

<rect x="475" y="35" width="140" height="165" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="545" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Resource Savings</text>

<rect x="485" y="80" width="120" height="40" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="98" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">504.75 GB RAM Saved</text>
<text x="545" y="110" text-anchor="middle" font-size="7" fill="#166534">98.58% reduction</text>

<text x="545" y="145" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">120 ms boot (+44880 ms)</text>
<text x="545" y="175" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">99.20% success (0 crash)</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Containers share the host kernel, slashing boot time by 99.73% and saving 504.75 GB RAM</text>
</svg>`,
      caption: {
        en: 'Benchmarking 500 worker workloads: Containers (120 ms boot, 7.25 GB total RAM) save 44880 ms of startup time over Virtual Machines (45000 ms boot, 512.00 GB RAM, 99.73% faster). Cgroups throttle memory, isolating 4 OOM limits to maintain 99.20% success (496 workers) with 0 host crashes.',
        bn: '৫০০টি ওয়ার্কার লোডে কন্টেইনার (১২০ ms বুট, ৭.২৫ GB মোট র্যাম) ভার্চুয়াল মেশিনের (৪৫০০০ ms বুট, ৫১২.০০ GB র্যাম) চেয়ে ৪৪৮৮০ ms সময় বাঁচায় (৯৯.৭৩% দ্রুত)। সিগ্রুপ মেমরি নিয়ন্ত্রণ করে ৪টি ওওএম সীমা আলাদা করে ৪৯৬টি ওয়ার্কারে ৯৯.২০% সাফল্য দেয় এবং ০টি হোস্ট ক্র্যাশ ঘটে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Linux Namespaces',
          def: {
            en: 'A Linux kernel feature that partitions system resources such that each container sees its own isolated set of processes (PID), network interfaces (NET), and mount points (MNT).',
            bn: 'লিনাক্স কার্নেলের একটি সুবিধা যা প্রসেস আইডি, নেটওয়ার্ক ইন্টারফেস ও মাউন্ট পয়েন্টকে আলাদা করে প্রতিটি কন্টেইনারের জন্য নিজস্ব জগত তৈরি করে।',
          },
        },
        {
          term: 'Control Groups (cgroups)',
          def: {
            en: 'A Linux kernel subsystem that organizes processes hierarchically and limits, throttles, and accounts for resource usage such as CPU, memory, and disk I/O.',
            bn: 'লিনাক্স কার্নেলের একটি উপাদান যা প্রসেসগুলোর সিপিইউ, মেমরি ও ডিস্ক আইও ব্যবহারের কঠোর সীমা নির্ধারণ ও নিয়ন্ত্রণ করে।',
          },
        },
        {
          term: 'runc',
          def: {
            en: 'A lightweight universal container runtime compliant with the OCI specification, responsible for configuring namespaces, cgroups, and spawning container processes.',
            bn: 'একটি হালকা ও সার্বজনীন ওআইসি কনটেইনার রানটাইম যা কার্নেল নেমস্পেস ও সিগ্রুপ কনফিগার করে কন্টেইনার প্রসেস চালু করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Lightweight isolation and high-density computing', bn: 'কেন — হালকা আইসোলেশন ও উচ্চমাত্রার কম্পিউটিং সক্ষমতা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Blazing-fast startup: starting a container in 120 ms allows on-demand auto-scaling that keeps pace with sudden web traffic spikes.', bn: 'অতি দ্রুত স্টার্টআপ: ১২০ ms-এ কন্টেইনার চালু হওয়ার ফলে ট্রাফিক হঠাৎ বেড়ে গেলেও ক্লাউড সাথে সাথে নতুন কন্টেইনার তৈরি করতে পারে।' },
        { en: 'High-density resource utilization: sharing a single host kernel enables running hundreds of containers on hardware that could host only a few VMs.', bn: 'উচ্চমাত্রার রিসোর্স ব্যবহার: একটি হোস্ট কার্নেল শেয়ার করার কারণে অল্প হার্ডওয়্যারে শত শত কন্টেইনার একসাথে চালানো যায়।' },
        { en: 'Blast-radius protection via cgroups: allocating hard memory caps prevents a single buggy process from exhausting host RAM and crashing adjacent services.', bn: 'সিগ্রুপ দিয়ে মেমরি সুরক্ষা: মেমরির কঠোর সীমা নির্ধারণ করায় কোনো একটি সার্ভিস মেমরি লিক করলেও পাশের সার্ভিসগুলোর কোনো ক্ষতি হয় না।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Launching an isolated container in 4 steps', bn: 'HOW — ৪টি ধাপে আইসোলেটেড কন্টেইনার পরিচালনা' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Prepare root filesystem', bn: '১. রুট ফাইলসিস্টেম তৈরি' }, text: { en: 'Unpack a minimal Linux distribution (like Alpine) into a dedicated directory on the host disk.', bn: 'হোস্টের একটি নির্দিষ্ট ফোল্ডারে অ্যালপাইন লিনাক্সের মতো হালকা ডিস্ট্রিবিউশন আনপ্যাক করুন।' } },
        { title: { en: '2. Create isolated namespaces', bn: '২. নেমস্পেস আলাদা করা' }, text: { en: 'Invoke the unshare system call to create distinct PID, NET, MNT, and IPC namespaces.', bn: 'লিনাক্স unshare সিস্টেম কল চালিয়ে প্রসেস ও নেটওয়ার্কের জন্য নিজস্ব নেমস্পেস তৈরি করুন।' } },
        { title: { en: '3. Enforce cgroup resource limits', bn: '৩. সিগ্রুপ রিসোর্স সীমা প্রয়োগ' }, text: { en: 'Write limits into /sys/fs/cgroup (e.g. echo 536870912 > memory.max) to enforce a 512 MB memory ceiling.', bn: 'সিগ্রুপ ফাইলে মেমরির সর্বোচ্চ সীমা লিখে দিন যাতে নির্ধারিত মেমরির বেশি খরচ না হয়।' } },
        { title: { en: '4. Pivot root and execute', bn: '৪. পিভট রুট ও কোড চালু' }, text: { en: 'Execute pivot_root into the unpacked directory and launch the application entrypoint as PID 1.', bn: 'নতুন ফাইলসিস্টেমকে রুট হিসেবে নির্ধারণ করে এক নম্বর প্রসেস হিসেবে অ্যাপ্লিকেশন চালু করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'container_isolation_sim.js',
      code: `// Simulated Container vs VM Architecture benchmark across 500 worker tasks
const totalWorkers = 500;
const vmBootMs = 45000;
const containerBootMs = 120;
const bootSavedMs = vmBootMs - containerBootMs; // 44880 ms
const bootSpeedupPct = (bootSavedMs / vmBootMs) * 100; // 99.73%

const vmRamGB = 512.0;
const containerRamGB = 7.25;
const ramSavedGB = vmRamGB - containerRamGB; // 504.75 GB
const ramReductionPct = (ramSavedGB / vmRamGB) * 100; // 98.58%

const successWorkers = 496;
const oomWorkers = 4;
const successRate = (successWorkers / totalWorkers) * 100; // 99.20%

console.log("Total workers: " + totalWorkers);
console.log("Container boot: " + containerBootMs + " ms vs VM boot: " + vmBootMs + " ms (+ " + bootSavedMs + " ms saved, " + bootSpeedupPct.toFixed(2) + "% faster)");
console.log("Container RAM: " + containerRamGB.toFixed(2) + " GB vs VM RAM: " + vmRamGB.toFixed(2) + " GB (-" + ramSavedGB.toFixed(2) + " GB saved, " + ramReductionPct.toFixed(2) + "% reduction)");
console.log("Successful workers: " + successWorkers + " (" + successRate.toFixed(2) + "%), OOM isolated: " + oomWorkers + ", host crashes: 0");

// Output:
// Total workers: 500
// Container boot: 120 ms vs VM boot: 45000 ms (+ 44880 ms saved, 99.73% faster)
// Container RAM: 7.25 GB vs VM RAM: 512.00 GB (-504.75 GB saved, 98.58% reduction)
// Successful workers: 496 (99.20%), OOM isolated: 4, host crashes: 0`,
      caption: {
        en: 'Benchmarking 500 worker workloads: Containers (120 ms boot, 7.25 GB total RAM) save 44880 ms of startup time over Virtual Machines (45000 ms boot, 512.00 GB RAM, 99.73% faster). Cgroups throttle memory, isolating 4 OOM limits to maintain 99.20% success (496 workers) with 0 host crashes.',
        bn: '৫০০টি ওয়ার্কার লোডে কন্টেইনার (১২০ ms বুট, ৭.২৫ GB মোট র্যাম) ভার্চুয়াল মেশিনের (৪৫০০০ ms বুট, ৫১২.০০ GB র্যাম) চেয়ে ৪৪৮৮০ ms সময় বাঁচায় (৯৯.৭৩% দ্রুত)। সিগ্রুপ মেমরি নিয়ন্ত্রণ করে ৪টি ওওএম সীমা আলাদা করে ৪৯৬টি ওয়ার্কারে ৯৯.২০% সাফল্য দেয় এবং ০টি হোস্ট ক্র্যাশ ঘটে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive container isolation simulator', bn: 'INSIDE — জীবন্ত কন্টেইনার আইসোলেশন সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'Observe the efficiency advantage of containerized isolation across 500 worker tasks. Starting 500 containers takes only 120 ms and 7.25 GB total RAM, saving 44880 ms and 504.75 GB over 500 virtual machines (45000 ms boot, 512.00 GB RAM). Cgroups isolate 4 out-of-memory processes safely without affecting the remaining 496 tasks, preserving 99.20% success and 0 host crashes.',
        bn: '৫০০টি ওয়ার্কার কাজে কন্টেইনার আইসোলেশনের দক্ষতা লক্ষ্য করুন। ৫০০টি কন্টেইনার চালু হতে মাত্র ১২০ ms ও ৭.২৫ GB মোট র্যাম প্রয়োজন হয়, যা ৫০০টি ভার্চুয়াল মেশিনের (৪৫০০০ ms বুট, ৫১২.০০ GB র্যাম) তুলনায় ৪৪৮৮০ ms এবং ৫০৪.৭৫ GB সাশ্রয় করে। সিগ্রুপ ৪টি অতিরিক্ত মেমরি গ্রহণকারী প্রসেস হোস্টের কোনো ক্ষতি না করে বন্ধ করে দেয়, যা ৪৯৬টি কাজে ৯৯.২০% সাফল্য ও ০টি হোস্ট ক্র্যাশ নিশ্চিত করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Container isolation lab (verify memory savings, press Run)', bn: 'কন্টেইনার ল্যাব (মেমরি সাশ্রয় যাচাই, Run)' },
      html: '<h3>Container vs VM Resource Benchmark</h3>\n<pre id="out"></pre>\n<p>Compute memory footprint savings and startup latency speedup.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const vmRam = 512.0;\nconst cRam = 7.25;\nconst ramDiff = vmRam - cRam;\nconst vmBoot = 45000;\nconst cBoot = 120;\nconst bootDiff = vmBoot - cBoot;\nconsole.log("boot diff: " + bootDiff + " ms");\ndocument.getElementById("out").textContent = "VM: " + vmRam.toFixed(2) + " GB (" + vmBoot + " ms) · Container: " + cRam.toFixed(2) + " GB (" + cBoot + " ms) · Saved: -" + ramDiff.toFixed(2) + " GB (-" + bootDiff + " ms, 0 crashes ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Container production guidelines', bn: 'ফলাফল — নিরাপদ কন্টেইনার পরিচালনার মূল নীতিমালা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always specify memory and CPU limits in production: without cgroup limits, a runaway container can starve the host OS and trigger kernel panics.', bn: 'প্রোডাকশনে সর্বদা মেমরি ও সিপিইউর সীমা নির্ধারণ করুন: সিগ্রুপ সীমা না দিলে কোনো মেমরি লিকের কারণে পুরো সার্ভার ক্র্যাশ করতে পারে।`' },
        { en: 'Run containers with non-root user namespaces: mapping container root to an unprivileged host UID prevents container breakout vulnerabilities.', bn: 'নন-রুট ইউজার নেমস্পেস ব্যবহার করুন: কন্টেইনারের ভেতরের রুট ইউজারকে হোস্টে সাধারণ ইউজার হিসেবে ম্যাপ করলে কন্টেইনার হ্যাক হলেও সার্ভার সুরক্ষিত থাকে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — The PID 1 zombie process reaping trap', bn: 'ডিবাগ — কন্টেইনারে PID 1 জম্বি প্রসেসের সমস্যা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Neglecting zombie child process reaping inside containers', bn: 'কন্টেইনারে তৈরি হওয়া অবহেলিত জম্বি প্রসেস' },
      text: {
        en: 'In Linux, PID 1 has the unique operating system duty of adopting orphaned child processes and reaping their exit statuses. If your entrypoint process is a simple Node.js script that does not handle process reaping, zombie processes accumulate in the process table until the kernel PID limit is reached. Always use an init system like dumb-init or tini as PID 1.',
        bn: 'লিনাক্সে ১ নম্বর প্রসেসের বিশেষ দায়িত্ব হলো মূল প্রসেস বন্ধ হয়ে গেলে তার চাইল্ড প্রসেসগুলোর সমাপ্তি নিশ্চিত করা। সাধারণ নোডজেএস স্ক্রিপ্ট সরাসরি এক নম্বর প্রসেস হিসেবে চালালে মেমরিতে জম্বি প্রসেস জমতে থাকে যা সার্ভারের পিআইডি সীমা শেষ করে ফেলে। তাই dumb-init বা tini-এর মতো হালকা ইনিট সিস্টেম ব্যবহার করা উচিত।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Inspecting live cgroup limits directly via sysfs', bn: 'sysfs দিয়ে সরাসরি সিগ্রুপ লিমিট পর্যবেক্ষণ' },
      text: {
        en: 'You can verify the exact active cgroup limits applied to your container by inspecting /sys/fs/cgroup/ inside the running container. Inspecting memory.max and cpu.max reveals the exact bytes and quota enforced by the host Linux kernel.',
        bn: 'চলমান কন্টেইনারের ভেতরে /sys/fs/cgroup/ ফোল্ডার দেখে আপনি সরাসরি সক্রিয় মেমরি ও সিপিইউ সীমা যাচাই করতে পারেন। memory.max ও cpu.max ফাইল পড়ে কার্নেলের আসল বরাদ্দ নিশ্চিত হওয়া যায়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Container architectures at planetary scale', bn: 'বাস্তব ক্ষেত্র — বৈশ্বিক প্রযুক্তিতে কন্টেইনার ব্যবহার' },
    },
    {
      type: 'list',
      items: [
        { en: 'Google Borg: schedules over 2 billion containers every single week using Linux cgroups and namespaces, handling Search, YouTube, and Gmail at planetary scale.', bn: 'গুগল বোর্গ: লিনাক্স নেমস্পেস ও সিগ্রুপ ব্যবহার করে প্রতি সপ্তাহে ২ বিলিয়নের বেশি কন্টেইনার পরিচালনা করে যা গুগল সার্চ ও ইউটিউবকে সচল রাখে।' },
        { en: 'Netflix Titus: container management platform orchestrates hundreds of thousands of isolated containers daily for encoding 4K video streams with custom cgroup resource limits.', bn: 'নেটফ্লিক্স টাইটাস: তাদের ৪K ভিডিও এনকোডিং ও স্ট্রিমিং নিশ্চিত করতে সিগ্রুপ রিসোর্স লিমিট সহ প্রতিদিন লাখ লাখ কন্টেইনার পরিচালনা করে।' },
        { en: 'Financial Trading Platforms: isolates low-latency algorithmic trading engines inside dedicated CPU core sets using cgroup cpuset controllers, reducing jitter below 10 microseconds.', bn: 'ফিনান্সিয়াল ট্রেডিং প্ল্যাটফর্ম: সিপিইউ কোর আলাদা রাখতে সিগ্রুপ cpuset ব্যবহার করে ১০ মাইক্রোসেকেন্ডের নিচে অতি দ্রুত শেয়ার লেনদেন সম্পন্ন করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Container Images: OCI Specifications, Dockerfiles, and Root Filesystems', bn: 'পরবর্তী পাঠ — কন্টেইনার ইমেজ: ওআইসি স্পেসিফিকেশন, ডকারফাইল ও রুট ফাইলসিস্টেম' },
    },
    {
      type: 'para',
      text: {
        en: 'Now that you understand how Linux namespaces and cgroups isolate container processes, Lesson 2 explores container images: OCI manifests, Dockerfile instructions, layer composition, and reproducible filesystem snapshots.',
        bn: 'এখন যখন আপনি জানলেন কীভাবে লিনাক্স নেমস্পেস ও সিগ্রুপ কন্টেইনার প্রসেসকে আলাদা রাখে, তখন পাঠ ২ কন্টেইনার ইমেজ অন্বেষণ করবে: ওআইসি ম্যানিফেস্ট, ডকারফাইল নির্দেশিকা, লেয়ারের গঠন এবং ফাইলসিস্টেম স্ন্যাপশট।',
      },
    },
  ],
  exercises: [
    {
      id: 'cnt-intro-ex-1',
      kind: 'mcq',
      topic: 'namespaces-vs-cgroups-role',
      question: {
        en: 'What distinct architectural roles do Linux namespaces and control groups (cgroups) play in containerization?',
        bn: 'কন্টেইনার প্রযুক্তিতে লিনাক্স নেমস্পেস এবং কন্ট্রোল গ্রুপের (cgroups) আলাদা ভূমিকা কী?',
      },
      options: [
        {
          en: 'Namespaces provide isolation (what a container can see: PID, NET, MNT), while cgroups enforce resource metering and limits (how much CPU, RAM, and I/O a container can consume)',
          bn: 'নেমস্পেস আইসোলেশন নিশ্চিত করে (কন্টেইনার কী দেখতে পাবে: পিআইডি, নেটওয়ার্ক, ফাইলসিস্টেম), আর সিগ্রুপ রিসোর্সের সীমা নির্ধারণ করে (কন্টেইনার কতটুকু সিপিইউ, র্যাম ও আইও ব্যবহার করতে পারবে)',
        },
        {
          en: 'Namespaces encrypt internet passwords while cgroups change the desktop wallpaper color',
          bn: 'নেমস্পেস পাসওয়ার্ড এনক্রিপ্ট করে আর সিগ্রুপ মনিটরের ওয়ালপেপার পরিবর্তন করে',
        },
        {
          en: 'Namespaces are physical shipping containers while cgroups are wooden cargo pallets',
          bn: 'নেমস্পেস হলো ফিজিক্যাল লোহার কন্টেইনার আর সিগ্রুপ হলো কাঠের মালামাল বহনের পাটাতন',
        },
        {
          en: 'Namespaces clean dust from laptop cooling fans while cgroups recharge computer batteries',
          bn: 'নেমস্পেস ল্যাপটপের ফ্যান পরিষ্কার করে আর সিগ্রুপ ব্যাটারি চার্জ করে',
        },
      ],
      answer: 0,
      hint: { en: 'Namespaces isolate visibility; cgroups enforce resource limits.', bn: 'নেমস্পেস দেখার পরিধি আলাদা রাখে; সিগ্রুপ রিসোর্সের সীমা দেয়।' },
      explanation: {
        en: 'Namespaces partition system views (isolation), while cgroups throttle hardware consumption (resource limitation).',
        bn: 'নেমস্পেস সিস্টেমের আইসোলেশন দেয় এবং সিগ্রুপ হার্ডওয়্যার ব্যবহারের সীমা ঠিক করে।',
      },
    },
    {
      id: 'cnt-intro-ex-2',
      kind: 'mcq',
      topic: 'container-sim-numbers',
      question: {
        en: 'In our code walkthrough, how much startup latency and total RAM were saved by 500 containers compared to 500 virtual machines?',
        bn: 'আমাদের কোড আলোচনায় ৫০০টি ভার্চুয়াল মেশিনের তুলনায় ৫০০টি কন্টেইনারে কতটুকু স্টার্টআপ সময় এবং মোট র্যাম সাশ্রয় হয়েছিল?',
      },
      options: [
        {
          en: 'Saved 44880 ms of startup time (120 ms vs 45000 ms, 99.73% faster) and saved 504.75 GB of RAM (7.25 GB vs 512.00 GB, 98.58% reduction) with 0 host crashes',
          bn: 'স্টার্টআপে ৪৪৮৮০ ms সময় সাশ্রয় (১২০ ms বনাম ৪৫০০০ ms, ৯৯.৭৩% দ্রুত) এবং ৫০৪.৭৫ GB র্যাম সাশ্রয় (৭.২৫ GB বনাম ৫১২.০০ GB, ৯৮.৫৮% হ্রাস) সহ ০টি হোস্ট ক্র্যাশ',
        },
        {
          en: 'Saved 0 ms and consumed 1000 GB RAM with constant crashes',
          bn: '০ ms সাশ্রয় এবং ঘনঘন ক্র্যাশ সহ ১০০০ GB র্যাম খরচ',
        },
        {
          en: 'Saved 100 ms and saved 5 GB of RAM across 500 workers',
          bn: '৫০০টি ওয়ার্কারে ১০০ ms সময় সাশ্রয় এবং ৫ GB র্যাম সাশ্রয়',
        },
        {
          en: 'Saved 10 ms and saved 1 GB RAM across 500 workers',
          bn: '৫০০টি ওয়ার্কারে ১০ ms সময় সাশ্রয় এবং ১ GB র্যাম সাশ্রয়',
        },
      ],
      answer: 0,
      hint: { en: '45000 - 120 = 44880 ms saved (99.73%), 512 - 7.25 = 504.75 GB saved (98.58%).', bn: '৪৫০০০ - ১২০ = ৪৪৮৮০ ms সাশ্রয় (৯৯.৭৩%), ৫১২ - ৭.২৫ = ৫০৪.৭৫ GB সাশ্রয় (৯৮.৫৮%)।' },
      explanation: {
        en: 'Containers booted in 120 ms consuming only 7.25 GB RAM, saving 44880 ms and 504.75 GB RAM over VMs.',
        bn: 'কন্টেইনার মাত্র ১২০ ms ও ৭.২৫ GB র্যামে চালু হয়ে ৪৪৮৮০ ms সময় ও ৫০৪.৭৫ GB র্যাম বাঁচায়।',
      },
    },
    {
      id: 'cnt-intro-ex-3',
      kind: 'mcq',
      topic: 'pid-namespace-mapping',
      question: {
        en: 'How does the Linux PID namespace allow a containerized process to see itself as PID 1 while running on the host system?',
        bn: 'লিনাক্স PID নেমস্পেস কীভাবে একটি কন্টেইনার প্রসেসকে হোস্টে চলার পাশাপাশি কন্টেইনারের ভেতরে ১ নম্বর প্রসেস (PID 1) হিসেবে দেখতে সাহায্য করে?',
      },
      options: [
        {
          en: 'The PID namespace translates process identifiers hierarchically: inside the container namespace the process is PID 1, while on the host OS process table it possesses a regular higher PID (e.g. 48291)',
          bn: 'পিআইডি নেমস্পেস প্রসেস আইডি অনুবাদ করে: কন্টেইনারের ভেতরে প্রসেসটি নিজেকে ১ নম্বর প্রসেস হিসেবে দেখে, কিন্তু হোস্ট অপারেটিং সিস্টেমের মূল তালিকায় তার একটি সাধারণ বড় নম্বর (যেমন ৪৮২৯১) থাকে',
        },
        {
          en: 'It deletes all other running programs on the entire host machine',
          bn: 'এটি হোস্ট কম্পিউটারের অন্য সমস্ত চলমান প্রোগ্রাম মুছে ফেলে',
        },
        {
          en: 'It permanently locks the computer keyboard until restarted',
          bn: 'এটি রিস্টার্ট না করা পর্যন্ত কীবোর্ড সম্পূর্ণ লক করে রাখে',
        },
        {
          en: 'It prints a paper badge claiming the process is the server president',
          bn: 'এটি একটি কাগজের ব্যাজ প্রিন্ট করে দাবি করে যে এই প্রসেসটিই সার্ভারের প্রধান',
        },
      ],
      answer: 0,
      hint: { en: 'PID translation maps in-container PID 1 to a normal host PID.', bn: 'নেমস্পেস কন্টেইনারের ভেতরের PID 1-কে হোস্টের সাধারণ পিআইডিতে ম্যাপ করে।' },
      explanation: {
        en: 'Namespaces provide nested virtualization of IDs; a process is PID 1 in its namespace but has a standard PID on the host.',
        bn: 'নেমস্পেস আইডি অনুবাদ করে দেয়; ফলে প্রসেসটি কন্টেইনারে PID 1 হলেও হোস্টে তার আলাদা আইডি থাকে।',
      },
    },
    {
      id: 'cnt-intro-ex-4',
      kind: 'predict',
      topic: 'kernel-subsystem-name',
      question: {
        en: 'What seven-letter lowercase Linux kernel feature name throttles CPU, memory, and disk I/O for container processes (e.g. cgroups)?',
        bn: 'কন্টেইনার প্রসেসের সিপিইউ, মেমরি ও ডিস্ক আইও নিয়ন্ত্রণের জন্য ব্যবহৃত সাত অক্ষরের লিনাক্স কার্নেল ফিচারের নাম কী (যেমন cgroups)?',
      },
      answer: 'cgroups',
      accept: ['cgroups', 'cgroup', 'cgroups v2'],
      hint: { en: 'cgroups', bn: 'cgroups' },
      explanation: {
        en: 'Control groups (cgroups) enforce resource limits and accounting on Linux.',
        bn: 'কন্ট্রোল গ্রুপস (cgroups) লিনাক্সে রিসোর্সের ব্যবহার নিয়ন্ত্রণ ও পরিমাপ করে।',
      },
    },
  ],
  quiz: {
    id: 'containers-and-the-container-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'cnt-intro-q1',
        kind: 'mcq',
        topic: 'vm-vs-container-speed',
        question: {
          en: 'Why do Linux containers initialize in milliseconds (e.g. 120 ms) while virtual machines typically take tens of seconds (e.g. 45000 ms) to boot?',
          bn: 'ভার্চুয়াল মেশিন চালু হতে যেখানে কয়েক দশ সেকেন্ড (যেমন ৪৫০০০ ms) লাগে, সেখানে লিনাক্স কন্টেইনার কেন মাত্র কয়েক মিলিসেকেন্ডে (যেমন ১২০ ms) চালু হতে পারে?',
        },
        options: [
          {
            en: 'Containers share the already-booted host Linux kernel and simply spawn isolated processes, whereas virtual machines must emulate virtual hardware and boot an entire guest OS kernel from scratch',
            bn: 'কন্টেইনার ইতিমধ্যে চালু থাকা হোস্ট কার্নেল শেয়ার করে সরাসরি নতুন প্রসেস চালায়, যেখানে ভার্চুয়াল মেশিনকে নতুন করে ভার্চুয়াল হার্ডওয়্যার তৈরি করে পুরো গেস্ট অপারেটিং সিস্টেম বুট করতে হয়',
          },
          {
            en: 'Containers use wireless satellite beams while virtual machines use dial-up phone modems',
            bn: 'কন্টেইনার স্যাটেলাইট ব্যবহার করে আর ভার্চুয়াল মেশিন পুরনো ডায়াল-আপ মডেম ব্যবহার করে',
          },
          {
            en: 'Virtual machines are legally required by international law to pause for 40 seconds',
            bn: 'আইনগত কারণে ভার্চুয়াল মেশিনকে চালু হওয়ার আগে ৪০ সেকেন্ড অপেক্ষা করতে হয়',
          },
          {
            en: 'Containers bypass CPU instructions by writing directly onto the computer screen glass',
            bn: 'কন্টেইনার সিপিইউ বাদ দিয়ে সরাসরি মনিটরের কাঁচের ওপর ডেটা লিখে ফেলে',
          },
        ],
        answer: 0,
        hint: { en: 'Containers share the host kernel; VMs boot a whole guest OS.', bn: 'কন্টেইনার হোস্ট কার্নেল শেয়ার করে; ভিএম পুরো ওএস বুট করে।' },
        explanation: {
          en: 'Sharing the host kernel eliminates hypervisor overhead and guest OS boot time, enabling sub-second starts.',
          bn: 'হোস্ট কার্নেল শেয়ার করার কারণে অতিরিক্ত ওএস বুটের সময় বাঁচে এবং কন্টেইনার দ্রুত চালু হয়।',
        },
      },
      {
        id: 'cnt-intro-q2',
        kind: 'mcq',
        topic: 'container-sim-ram-savings',
        question: {
          en: 'In our code walkthrough, what was the memory reduction achieved by running 500 containers (7.25 GB total RAM) instead of 500 virtual machines (512.00 GB total RAM)?',
          bn: 'আমাদের কোড আলোচনায় ৫০০টি ভার্চুয়াল মেশিনের (৫১২.০০ GB মোট র্যাম) পরিবর্তে ৫০০টি কন্টেইনার (৭.২৫ GB মোট র্যাম) চালিয়ে কতটুকু মেমরি সাশ্রয় হয়েছিল?',
        },
        options: [
          { en: 'Saved 504.75 GB of RAM (a 98.58% reduction), enabling 496 successful tasks (99.20% success) with 0 host crashes', bn: '৫০৪.৭৫ GB র্যাম সাশ্রয় (৯৮.৫৮% হ্রাস), যা ৪৯৬টি সফল কাজ (৯৯.২০% সাফল্য) এবং ০টি হোস্ট ক্র্যাশ নিশ্চিত করে' },
          { en: 'Saved 5 GB of RAM with 100 host crashes across 500 tasks', bn: '৫০০টি কাজে ১০০টি হোস্ট ক্র্যাশ সহ ৫ GB র্যাম সাশ্রয়' },
          { en: 'Saved 0 GB of RAM with 500 failed tasks', bn: '৫০০টি ব্যর্থ কাজ সহ ০ GB র্যাম সাশ্রয়' },
          { en: 'Saved 50 GB of RAM with 50.00% success rate', bn: '৫০.০০% সাফল্য সহ ৫০ GB র্যাম সাশ্রয়' },
        ],
        answer: 0,
        hint: { en: '512 - 7.25 = 504.75 GB saved (98.58% reduction), 0 host crashes.', bn: '৫১২ - ৭.২৫ = ৫০৪.৭৫ GB সাশ্রয় (৯৮.৫৮% হ্রাস), ০টি হোস্ট ক্র্যাশ।' },
        explanation: {
          en: '500 containers saved 504.75 GB of RAM (98.58% reduction) compared to 500 VMs with 0 host crashes.',
          bn: '৫০০টি কন্টেইনার ৫০০টি ভিএমের তুলনায় ৫০৪.৭৫ GB র্যাম (৯৮.৫৮%) সাশ্রয় করে এবং ০টি ক্র্যাশ নিশ্চিত করে।',
        },
      },
      {
        id: 'cnt-intro-q3',
        kind: 'mcq',
        topic: 'user-namespaces-security',
        question: {
          en: 'Why is enabling User Namespaces critical for hardening containerized workloads against privilege escalation attacks?',
          bn: 'প্রিভিলেজ এস্কেলেশন আক্রমণ থেকে কন্টেইনারকে সুরক্ষিত রাখতে ইউজার নেমস্পেস চালু করা কেন অত্যন্ত গুরুত্বপূর্ণ?',
        },
        options: [
          {
            en: 'It maps root (UID 0) inside the container to an unprivileged standard user (e.g. UID 10001) on the host, preventing host takeover even if a container breakout occurs',
            bn: 'এটি কন্টেইনারের ভেতরের রুটকে (UID 0) হোস্ট কম্পিউটারের সাধারণ সুবিধাহীন ইউজার (যেমন UID 10001) হিসেবে রূপান্তর করে, ফলে কন্টেইনার ভেঙে বের হলেও আক্রমণকারী হোস্টে রুট সুবিধা পায় না',
          },
          {
            en: 'It prevents computer users from creating passwords containing uppercase letters',
            bn: 'এটি ব্যবহারকারীকে বড় হাতের অক্ষর দিয়ে পাসওয়ার্ড তৈরিতে বাধা দেয়',
          },
          {
            en: 'It deletes all user accounts from the host operating system immediately',
            bn: 'এটি সাথে সাথে হোস্ট কম্পিউটারের সমস্ত ইউজার অ্যাকাউন্ট মুছে ফেলে',
          },
          {
            en: 'It automatically turns off the computer monitor at 6 PM every evening',
            bn: 'এটি প্রতিদিন সন্ধ্যা ৬টায় মনিটরের বিদ্যুৎ সংযোগ বিচ্ছিন্ন করে',
          },
        ],
        answer: 0,
        hint: { en: 'User namespaces map container root to unprivileged host UIDs.', bn: 'ইউজার নেমস্পেস কন্টেইনারের রুটকে হোস্টে সাধারণ ইউজার বানায়।' },
        explanation: {
          en: 'User namespace mapping ensures that even root privileges inside a container have no elevated permissions on the host system.',
          bn: 'ইউজার নেমস্পেস কন্টেইনারের রুটকে সাধারণ ইউজার হিসেবে বিবেচনা করে সার্ভারকে হ্যাক থেকে বাঁচায়।',
        },
      },
      {
        id: 'cnt-intro-q4',
        kind: 'predict',
        topic: 'oci-runtime-cli-name',
        question: {
          en: 'What four-letter lowercase command-line tool serves as the industry-standard low-level OCI container runtime (e.g. runc)?',
          bn: 'শিল্পমানের লো-লেভেল ওআইসি কন্টেইনার রানটাইম হিসেবে ব্যবহৃত চার অক্ষরের কমান্ড-লাইন টুলের নাম কী (যেমন runc)?',
        },
        answer: 'runc',
        accept: ['runc', 'run-c'],
        hint: { en: 'runc', bn: 'runc' },
        explanation: {
          en: 'runc is the CLI tool for spawning and running containers according to the OCI specification.',
          bn: 'runc হলো ওআইসি স্পেসিফিকেশন অনুযায়ী কন্টেইনার তৈরি ও চালানোর প্রধান সিএলআই টুল।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'images-and-the-image',
    title: { en: 'Container Images: OCI Specifications, Dockerfiles, and Root Filesystems', bn: 'কন্টেইনার ইমেজ: ওআইসি স্পেসিফিকেশন, ডকারফাইল ও রুট ফাইলসিস্টেম' },
  },
};
