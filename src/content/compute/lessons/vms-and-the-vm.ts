import type { Lesson } from '../../../lib/types';

export const VmsAndTheVmLesson: Lesson = {
  slug: 'vms-and-the-vm',
  tech: 'compute',
  title: {
    en: 'Virtual Machines — Hypervisors, KVM, and Cloud Virtualization',
    bn: 'ভার্চুয়াল মেশিন — হাইপারভাইজর, KVM ও ক্লাউড ভার্চুয়ালাইজেশন',
  },
  summary: {
    en: 'A foundational overview of cloud virtualization and bare-metal infrastructure. Understand how Type 1 and Type 2 hypervisors partition physical silicon, how Linux KVM executes guest instructions with hardware assistance, and how microVMs isolate workloads in milliseconds.',
    bn: 'ক্লাউড ভার্চুয়ালাইজেশন ও বেয়ার-মেটাল অবকাঠামোর মৌলিক ধারণা। টাইপ ১ ও টাইপ ২ হাইপারভাইজর কীভাবে সিলিকন ভাগ করে, KVM কীভাবে হার্ডওয়্যার সহায়তায় গেস্ট নির্দেশাবলী চালায় এবং মাইক্রো-ভিএম কীভাবে মিলিসেকেন্ডে বিচ্ছিন্নতা দেয়।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Bare-metal hypervisors, KVM, and guest isolation', bn: 'WHAT — বেয়ার-মেটাল হাইপারভাইজর, KVM ও গেস্ট বিচ্ছিন্নতা' },
    },
    {
      type: 'para',
      text: {
        en: 'When you rent computing capacity in modern datacenters, your workloads run on virtual machines managed by hypervisors that partition physical server hardware. Hypervisors act as the foundational arbiters between bare-metal silicon and multiple isolated guest operating systems. Understanding the architectural distinction between Type 1 bare-metal hypervisors (like KVM, VMware ESXi, and Amazon Web Services (AWS) Nitro) and Type 2 hosted hypervisors (like VirtualBox) is crucial for predicting system performance, virtualization overhead, and I/O latency. Modern hypervisors leverage hardware-assisted virtualization extensions like Intel VT-x and AMD-V to execute CPU instructions directly on the physical host, achieving near-native execution speed with microsecond overhead. By mastering guest isolation and hypervisor scheduling, you can design high-density infrastructure while maintaining strong security boundaries.',
        bn: 'যখন আপনি আধুনিক ডাটা সেন্টারে কম্পিউটিং পাওয়ার ভাড়া নেন, তখন আপনার কাজগুলো হাইপারভাইজর নিয়ন্ত্রিত ভার্চুয়াল মেশিনের মধ্যে চলে যা ফিজিক্যাল হার্ডওয়্যারকে সুবিন্যস্তভাবে ভাগ করে দেয়। হাইপারভাইজর সরাসরি ফিজিক্যাল প্রসেসর এবং একাধিক বিচ্ছিন্ন গেস্ট অপারেটিং সিস্টেমের মধ্যে প্রধান সমন্বয়কারী হিসেবে কাজ করে। টাইপ ১ বেয়ার-মেটাল হাইপারভাইজর (যেমন KVM, VMware ESXi, অ্যামাজন ওয়েব সার্ভিসেস (AWS) Nitro) এবং টাইপ ২ হাইপারভাইজরের (যেমন VirtualBox) মধ্যকার কাঠামোগত পার্থক্য বোঝা সিস্টেমের কর্মক্ষমতা ও নেটওয়ার্ক লেটেন্সি অনুমানের জন্য অত্যন্ত জরুরি। আধুনিক হাইপারভাইজরগুলো Intel VT-x এবং AMD-V এর মতো হার্ডওয়্যার এক্সটেনশন ব্যবহার করে গেস্ট কোড সরাসরি প্রসেসরে চালায়, যার ফলে ভার্চুয়ালাইজেশনের ওভারহেড প্রায় শূন্যে নেমে আসে। এর মাধ্যমে শক্তিশালী নিরাপত্তা নিশ্চিত করে উচ্চ-ঘনত্বের সার্ভার তৈরি করা সম্ভব হয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Type 1 bare-metal hypervisor versus Type 2 hosted architecture', bn: 'টাইপ ১ বেয়ার-মেটাল বনাম টাইপ ২ হাইপারভাইজর আর্কিটেকচার' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Type 1 versus Type 2 Hypervisor Architecture diagram">
<rect x="25" y="175" width="270" height="35" rx="4" fill="#0f172a" stroke="#334155" stroke-width="2"/>
<text x="160" y="198" text-anchor="middle" font-size="10" font-weight="700" fill="#f8fafc">Physical Hardware (Bare Metal)</text>

<rect x="25" y="125" width="270" height="35" rx="4" fill="#2563eb" stroke="#1d4ed8" stroke-width="2"/>
<text x="160" y="148" text-anchor="middle" font-size="10" font-weight="700" fill="#ffffff">Type 1 Hypervisor (KVM / ESXi / Nitro)</text>

<rect x="30" y="50" width="120" height="60" rx="4" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="90" y="75" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Guest VM 1 (Web)</text>
<text x="90" y="95" text-anchor="middle" font-size="8" fill="#166534">8 vCPUs · 32 GB RAM</text>

<rect x="170" y="50" width="120" height="60" rx="4" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="230" y="75" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Guest VM 2 (API)</text>
<text x="230" y="95" text-anchor="middle" font-size="8" fill="#166534">8 vCPUs · 32 GB RAM</text>

<rect x="345" y="175" width="270" height="35" rx="4" fill="#0f172a" stroke="#334155" stroke-width="2"/>
<text x="480" y="198" text-anchor="middle" font-size="10" font-weight="700" fill="#f8fafc">Physical Hardware</text>

<rect x="345" y="135" width="270" height="30" rx="4" fill="#475569" stroke="#334155" stroke-width="1.5"/>
<text x="480" y="155" text-anchor="middle" font-size="9" font-weight="700" fill="#f8fafc">Host Operating System (Windows / macOS)</text>

<rect x="345" y="95" width="270" height="30" rx="4" fill="#f59e0b" stroke="#d97706" stroke-width="1.5"/>
<text x="480" y="115" text-anchor="middle" font-size="9" font-weight="700" fill="#ffffff">Type 2 Hypervisor (VirtualBox / Workstation)</text>

<rect x="350" y="35" width="125" height="48" rx="4" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
<text x="412" y="58" text-anchor="middle" font-size="8" font-weight="700" fill="#854d0e">Guest VM A</text>
<text x="412" y="72" text-anchor="middle" font-size="7" fill="#854d0e">High OS overhead</text>

<rect x="485" y="35" width="125" height="48" rx="4" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
<text x="547" y="58" text-anchor="middle" font-size="8" font-weight="700" fill="#854d0e">Guest VM B</text>
<text x="547" y="72" text-anchor="middle" font-size="7" fill="#854d0e">Double scheduler latency</text>

<text x="160" y="25" text-anchor="middle" font-size="11" font-weight="800" fill="#2563eb">Cloud Native: Type 1</text>
<text x="480" y="25" text-anchor="middle" font-size="11" font-weight="800" fill="#d97706">Desktop Lab: Type 2</text>
</svg>`,
      caption: {
        en: 'Type 1 hypervisors run directly on bare metal without host OS penalty, allocating 30 vCPUs across 4 guest VMs with only 6.25% overhead on 32 cores.',
        bn: 'টাইপ ১ হাইপারভাইজর কোনো হোস্ট ওএস ছাড়া সরাসরি বেয়ার মেটালে চলে, যা ৩২টি কোরে মাত্র ৬.২৫% ওভারহেড রেখে ৪টি গেস্ট ভিএমে ৩০টি vCPU বণ্টন করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Type 1 Hypervisor (Bare Metal)',
          def: {
            en: 'Virtualization software executing directly on physical server hardware, managing guest operating systems with minimal CPU latency.',
            bn: 'ভার্চুয়ালাইজেশন সফটওয়্যার যা সরাসরি ফিজিক্যাল হার্ডওয়্যারে চলে এবং ন্যূনতম সিপিইউ লেটেন্সিতে গেস্ট সিস্টেম নিয়ন্ত্রণ করে।',
          },
        },
        {
          term: 'Type 2 Hypervisor (Hosted)',
          def: {
            en: 'Virtualization software running as an application inside an existing host operating system, suitable for desktop testing.',
            bn: 'ভার্চুয়ালাইজেশন সফটওয়্যার যা হোস্ট অপারেটিং সিস্টেমের উপর একটি অ্যাপ্লিকেশন হিসেবে চলে এবং ডেস্কটপ পরীক্ষার জন্য উপযুক্ত।',
          },
        },
        {
          term: 'KVM (Kernel-based Virtual Machine)',
          def: {
            en: 'The open-source Linux kernel module that turns the operating system into a high-performance Type 1 hypervisor.',
            bn: 'ওপেন-সোর্স লিনাক্স কার্নেল মডিউল যা লিনাক্স অপারেটিং সিস্টেমকে উচ্চ-গতির টাইপ ১ হাইপারভাইজরে রূপান্তর করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Server consolidation and hardware security boundaries', bn: 'কেন — সার্ভার ঘনত্ব ও হার্ডওয়্যার নিরাপত্তা প্রাচীর' },
    },
    {
      type: 'list',
      items: [
        { en: 'Maximize silicon utilization: running 4 to 20 isolated virtual machines on a single 32-core server drives CPU utilization from 10% to 75%.', bn: 'হার্ডওয়্যারের সর্বোচ্চ ব্যবহার: একটি ৩২-কোর সার্ভারে ৪ থেকে ২০টি বিচ্ছিন্ন ভিএম চালালে সিপিইউ ব্যবহারের দক্ষতা ১০% থেকে বেড়ে ৭৫% হয়।' },
        { en: 'Hardware-enforced tenant isolation: CPU rings and memory virtualization prevent malicious guest kernel code from reading co-located tenant data.', bn: 'হার্ডওয়্যার স্তরের নিরাপত্তা: সিপিইউ রিং ও মেমরি ভার্চুয়ালাইজেশন একই সার্ভারে থাকা অন্য কোম্পানির স্পর্শকাতর মেমরি পড়া প্রতিহত করে।' },
        { en: 'Microsecond startup microVMs: modern technologies like AWS Firecracker boot secure virtual machines in under 5 milliseconds for serverless execution.', bn: 'মিলিসেকেন্ডের মধ্যে ভিএম চালু: ফায়ারক্র্যাকারের মতো প্রযুক্তি সার্ভারলেস কাজের জন্য ৫ মিলিসেকেন্ডের নিচে নিরাপদ মাইক্রো-ভিএম চালু করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Hypervisor allocation in 4 steps', bn: 'HOW — ৪টি ধাপে হাইপারভাইজর রিসোর্স বণ্টন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Enable hardware virtualization', bn: '১. হার্ডওয়্যার ভার্চুয়ালাইজেশন চালু' }, text: { en: 'Verify Intel VT-x or AMD-V CPU flags are activated in motherboard firmware.', bn: 'মাদারবোর্ডের ফার্মওয়্যারে Intel VT-x বা AMD-V ফ্ল্যাগ চালু রয়েছে কিনা নিশ্চিত করুন।' } },
        { title: { en: '2. Reserve hypervisor host resources', bn: '২. হাইপারভাইজরের জন্য রিসোর্স সংরক্ষণ' }, text: { en: 'Dedicate 2 physical cores and 8 GB RAM strictly for host kernel orchestration.', bn: 'হোস্ট কার্নেল ও পরিচালনার জন্য নির্দিষ্টভাবে ২টি কোর এবং ৮ জিবি র্যাম সংরক্ষণ করুন।' } },
        { title: { en: '3. Partition guest vCPUs and RAM', bn: '৩. গেস্ট vCPU ও মেমরি বণ্টন' }, text: { en: 'Carve remaining capacity into defined guest virtual machine specifications.', bn: 'বাকি হার্ডওয়্যার ক্ষমতা বিভিন্ন গেস্ট ভার্চুয়াল মেশিনের জন্য সুনির্দিষ্ট অনুপাতে ভাগ করুন।' } },
        { title: { en: '4. Bind virtio I/O drivers', bn: '৪. Virtio I/O ড্রাইভার সংযোগ' }, text: { en: 'Install paravirtualized network and storage drivers for maximum throughput.', bn: 'সর্বোচ্চ গতির নেটওয়ার্ক ও স্টোরেজ থ্রুপুট নিশ্চিত করতে প্যারাভার্চুয়ালাইজড ড্রাইভার যুক্ত করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'hypervisor_allocation_sim.js',
      code: `// Simulated hypervisor CPU and memory allocation across 4 guest VMs
const hostPhysicalCores = 32;
const hostTotalRamGB = 128;

const guestVms = [
  { name: "vm-web-1", vcpus: 8, ramGB: 32 },
  { name: "vm-api-2", vcpus: 8, ramGB: 32 },
  { name: "vm-worker-3", vcpus: 8, ramGB: 32 },
  { name: "vm-cache-4", vcpus: 6, ramGB: 24 }
];

const totalGuestVcpus = guestVms.reduce((acc, v) => acc + v.vcpus, 0); // 30
const totalGuestRam = guestVms.reduce((acc, v) => acc + v.ramGB, 0);   // 120

const hypervisorReservedCores = hostPhysicalCores - totalGuestVcpus; // 2
const hypervisorReservedRam = hostTotalRamGB - totalGuestRam;       // 8

const hypervisorOverheadPct = (hypervisorReservedCores / hostPhysicalCores) * 100; // 6.25%

console.log("Hypervisor Resource Allocation Simulation:");
console.log("4 guest VMs allocated " + totalGuestVcpus + " vCPUs and " + totalGuestRam + " GB RAM");
console.log("Host reservation: " + hypervisorReservedCores + " cores and " + hypervisorReservedRam + " GB RAM reserved across 32 cores");
console.log("Hypervisor overhead: " + hypervisorOverheadPct.toFixed(2) + "% CPU overhead across " + guestVms.length + " VMs");

// Output:
// Hypervisor Resource Allocation Simulation:
// 4 guest VMs allocated 30 vCPUs and 120 GB RAM
// Host reservation: 2 cores and 8 GB RAM reserved across 32 cores
// Hypervisor overhead: 6.25% CPU overhead across 4 VMs`,
      caption: {
        en: 'The hypervisor allocates 30 vCPUs and 120 GB RAM across 4 guest VMs, keeping 2 cores and 8 GB RAM reserved across 32 cores with 6.25% CPU overhead.',
        bn: 'হাইপারভাইজরটি ৪টি গেস্ট ভিএমে ৩০টি vCPU ও ১২০ জিবি র্যাম বণ্টন করে ৩২টি কোরে ২টি কোর ও ৮ জিবি র্যাম সংরক্ষিত রাখে যার সিপিইউ ওভারহেড ৬.২৫%।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive hypervisor capacity allocation lab', bn: 'INSIDE — জীবন্ত হাইপারভাইজর ক্ষমতা বণ্টন ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test hypervisor partitioning on host hardware. Distributing capacity across 4 guest VMs utilizes 30 vCPUs and 120 GB RAM out of 32 physical cores and 128 GB RAM. The hypervisor reserves 2 cores and 8 GB RAM for bare-metal kernel orchestration, resulting in an efficient 6.25% CPU overhead across 4 VMs. This balance prevents noisy-neighbor CPU starvation.',
        bn: 'হোস্ট হার্ডওয়্যারে হাইপারভাইজর পার্টশনিং পরীক্ষা করুন। ৪টি গেস্ট ভিএমে ক্ষমতা বণ্টন করলে ৩২টি কোর ও ১২৮ জিবি র্যামের মধ্যে ৩০টি vCPU ও ১২০ জিবি র্যাম ব্যবহৃত হয়। হাইপারভাইজর কার্নেল পরিচালনার জন্য ২টি কোর ও ৮ জিবি র্যাম সংরক্ষণ করে, যার ফলে ৪টি ভিএমে মাত্র ৬.২৫% সিপিইউ ওভারহেড থাকে। এই সমতা প্রসেসর ঘাটতি রোধ করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'VM hypervisor lab (verify guest allocation, press Run)', bn: 'VM হাইপারভাইজর ল্যাব (গেস্ট বণ্টন দেখুন, Run)' },
      html: '<h3>Hypervisor Partitioning Calculator</h3>\n<pre id="out"></pre>\n<p>Compute virtualization overhead and guest density.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const cores = 32;\nconst vcpus = 30;\nconst vms = 4;\nconst reserved = cores - vcpus;\nconst overhead = (reserved / cores) * 100;\nconsole.log("overhead: " + overhead.toFixed(2));\ndocument.getElementById("out").textContent = "VMs: " + vms + " · vCPUs: " + vcpus + " · Reserved: " + reserved + " cores · Overhead: " + overhead.toFixed(2) + "% (32 cores ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Virtualization architectural takeaways', bn: 'ফলাফল — ভার্চুয়ালাইজেশন স্থাপত্যের সারসংক্ষেপ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Type 1 hypervisors dominate production clouds: KVM and ESXi bypass the host operating system layer for maximum raw throughput.', bn: 'প্রোডাকশন ক্লাউডে টাইপ ১ হাইপারভাইজর প্রমিত: KVM এবং ESXi সর্বোচ্চ গতির জন্য হোস্ট অপারেটিং সিস্টেম লেয়ার এড়িয়ে চলে।' },
        { en: 'Hardware virtualization is mandatory: modern x86/ARM hardware instructions allow direct CPU code execution without binary translation.', bn: 'হার্ডওয়্যার ভার্চুয়ালাইজেশন অত্যাবশ্যকীয়: আধুনিক x86/ARM প্রসেসর সরাসরি গেস্ট কোড কার্যকর করার সুবিধা দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common virtualization bottlenecks', bn: 'ডিবাগ — ভার্চুয়ালাইজেশনের প্রচলিত সমস্যা' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'CPU overcommitment causing hypervisor steal time', bn: 'অতিরিক্ত সিপিইউ বরাদ্দে হাইপারভাইজর স্টিল টাইমের ঝুঁকি' },
      text: {
        en: 'Allocating more vCPUs than physical processor threads causes high CPU steal time (stolen cycles), where the hypervisor forcibly pauses a virtual machine while another VM executes on the core. Monitor steal metrics diligently.',
        bn: 'ফিজিক্যাল প্রসেসরের ক্ষমতার চেয়ে বেশি vCPU বরাদ্দ করলে সিপিইউ স্টিল টাইম বেড়ে যায়, যেখানে হাইপারভাইজর একটি ভিএমকে থামিয়ে রেখে অন্য ভিএমের কাজ চালায়। নিয়মিত স্টিল টাইম মনিটর করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Enable paravirtualized virtio drivers in Linux guests', bn: 'লিনাক্স গেস্টে প্যারাভার্চুয়ালাইজড virtio ড্রাইভার ব্যবহার' },
      text: {
        en: 'Always verify that guest Linux kernels load virtio-blk and virtio-net kernel modules. Paravirtualized drivers communicate directly with KVM, boosting disk and network throughput by up to 300%.',
        bn: 'সবসময় নিশ্চিত করুন যেন লিনাক্স কার্নেলে virtio-blk ও virtio-net মডিউল সক্রিয় থাকে। প্যারাভার্চুয়ালাইজড ড্রাইভার সরাসরি KVM এর সাথে কথা বলে ডিস্ক ও নেটওয়ার্কের গতি ৩০০% পর্যন্ত বাড়িয়ে দেয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Industry virtualization engines', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল ভার্চুয়ালাইজেশন ইঞ্জিন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Linux KVM: the engine powering Google Cloud Compute Engine, OpenStack enterprise datacenters, and modern Linux hypervisors.', bn: 'Linux KVM: গুগল ক্লাউড কম্পিউট ইঞ্জিন ও ওপেনস্ট্যাক ডাটা সেন্টার চালনাকারী বিশ্বের সবচেয়ে জনপ্রিয় হাইপারভাইজর।' },
        { en: 'AWS Nitro System: custom PCIe cards offload virtualization, networking, and security from the host motherboard CPU.', bn: 'AWS Nitro System: নিবেদিত হার্ডওয়্যার কার্ড যা হোস্ট প্রসেসর থেকে ভার্চুয়ালাইজেশন ও নেটওয়ার্কের বোঝা সরিয়ে নেয়।' },
        { en: 'AWS Firecracker: open-source Rust-based microVM manager powering AWS Lambda and AWS Fargate with sub-second isolation.', bn: 'AWS Firecracker: ওপেন সোর্স মরিচামুক্ত রাস্টে তৈরি মাইক্রো-ভিএম ম্যানেজার যা ল্যাম্বডা ও ফারগেটকে মিলিসেকেন্ডে নিরাপত্তা দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Compute CPUs and vCPUs', bn: 'পরবর্তী পাঠ — কম্পিউট সিপিইউ ও vCPU' },
    },
    {
      type: 'para',
      text: {
        en: 'With hypervisor mechanics and KVM fundamentals mastered, Lesson 3 examines virtualized processor internals: physical cores versus vCPUs, hyperthreading sibling threads, NUMA node boundaries, and diagnosing CPU steal time.',
        bn: 'হাইপারভাইজর মেকানিক্স ও KVM আয়ত্ত করার পর, পাঠ ৩ ভার্চুয়াল প্রসেসরের অভ্যন্তরীণ রূপ দেখাবে: ফিজিক্যাল কোর বনাম vCPU, হাইপারথ্রেডিং সিবলিং থ্রেড, NUMA নোড বাউন্ডারি এবং সিপিইউ স্টিল টাইম শনাক্তকরণ।',
      },
    },
  ],
  exercises: [
    {
      id: 'cmp-vm-ex-1',
      kind: 'mcq',
      topic: 'type-1-vs-type-2-hypervisor',
      question: {
        en: 'What architectural characteristic distinguishes a Type 1 bare-metal hypervisor from a Type 2 hosted hypervisor?',
        bn: 'টাইপ ১ বেয়ার-মেটাল হাইপারভাইজরকে টাইপ ২ হাইপারভাইজর থেকে কোন কাঠামোগত বৈশিষ্ট্যটি পৃথক করে?',
      },
      options: [
        {
          en: 'A Type 1 hypervisor runs directly on the bare-metal server hardware without an underlying host operating system layer',
          bn: 'টাইপ ১ হাইপারভাইজর কোনো মধ্যবর্তী হোস্ট অপারেটিং সিস্টেম লেয়ার ছাড়াই সরাসরি ফিজিক্যাল সার্ভার হার্ডওয়্যারে চলে',
        },
        {
          en: 'A Type 1 hypervisor only runs on mobile smartphone operating systems',
          bn: 'টাইপ ১ হাইপারভাইজর কেবল মোবাইল স্মার্টফোনের অপারেটিং সিস্টেমে চলে',
        },
        {
          en: 'A Type 1 hypervisor requires an internet connection to boot BIOS',
          bn: 'টাইপ ১ হাইপারভাইজরের বায়োস বুট করার জন্য সার্বক্ষণিক ইন্টারনেট সংযোগ লাগে',
        },
        {
          en: 'Type 1 hypervisors were created by telephone switchboard operators',
          bn: 'টাইপ ১ হাইপারভাইজর টেলিফোন এক্সচেঞ্জের অপারেটরদের দ্বারা আবিষ্কৃত হয়েছিল',
        },
      ],
      answer: 0,
      hint: { en: 'Type 1 runs directly on bare metal.', bn: 'টাইপ ১ সরাসরি বেয়ার মেটালে চলে।' },
      explanation: {
        en: 'Type 1 hypervisors interface directly with physical CPU and memory hardware, eliminating host OS overhead and latency.',
        bn: 'টাইপ ১ হাইপারভাইজর সরাসরি ফিজিক্যাল প্রসেসর ও মেমরির সাথে যুক্ত থাকে, যা হোস্ট ওএস-এর বিলম্ব দূর করে।',
      },
    },
    {
      id: 'cmp-vm-ex-2',
      kind: 'mcq',
      topic: 'hypervisor-sim-numbers',
      question: {
        en: 'In our code walkthrough, how many vCPUs and GB RAM were allocated to the 4 guest VMs, and how many cores remained reserved for the hypervisor across 32 cores?',
        bn: 'আমাদের কোড আলোচনায় ৪টি গেস্ট ভিএমে কতগুলো vCPU ও কত জিবি র্যাম বণ্টন করা হয়েছিল এবং ৩২টি কোরের মধ্যে হাইপারভাইজরের জন্য কতগুলো কোর সংরক্ষিত ছিল?',
      },
      options: [
        { en: 'Allocated = 30 vCPUs and 120 GB RAM; 2 cores and 8 GB RAM reserved across 32 cores (6.25% overhead)', bn: 'বরাদ্দ = ৩০টি vCPU ও ১২০ জিবি র্যাম; ৩২টি কোরে সংরক্ষিত = ২টি কোর ও ৮ জিবি র্যাম (৬.২৫% ওভারহেড)' },
        { en: 'Allocated = 32 vCPUs and 128 GB RAM; 0 cores reserved across 32 cores (0% overhead)', bn: 'বরাদ্দ = ৩২টি vCPU ও ১২৮ জিবি র্যাম; ৩২টি কোরে সংরক্ষিত = ০টি কোর (০% ওভারহেড)' },
        { en: 'Allocated = 10 vCPUs and 40 GB RAM; 22 cores reserved across 32 cores (68.75% overhead)', bn: 'বরাদ্দ = ১০টি vCPU ও ৪০ জিবি র্যাম; ৩২টি কোরে সংরক্ষিত = ২২টি কোর (৬৮.৭৫% ওভারহেড)' },
        { en: 'Allocated = 0 vCPUs and 0 GB RAM; 32 cores reserved across 32 cores (100% overhead)', bn: 'বরাদ্দ = ০টি vCPU ও ০ জিবি র্যাম; ৩২টি কোরে সংরক্ষিত = ৩২টি কোর (১০০% ওভারহেড)' },
      ],
      answer: 0,
      hint: { en: '30 vCPUs and 120 GB allocated; 2 cores reserved across 32 cores.', bn: '৩০টি vCPU ও ১২০ জিবি বরাদ্দ; ৩২টি কোরে ২টি কোর সংরক্ষিত।' },
      explanation: {
        en: 'The simulation partitioned 30 vCPUs and 120 GB RAM to 4 guest VMs, keeping 2 cores and 8 GB RAM reserved across 32 cores with 6.25% overhead.',
        bn: 'সিমুলেশনটিতে ৪টি গেস্ট ভিএমে ৩০টি vCPU ও ১২০ জিবি র্যাম বরাদ্দ করে ৩২টি কোরে ২টি কোর ও ৮ জিবি র্যাম সংরক্ষিত রাখা হয় যার ওভারহেড ৬.২৫%।',
      },
    },
    {
      id: 'cmp-vm-ex-3',
      kind: 'mcq',
      topic: 'hardware-virtualization-extensions',
      question: {
        en: 'What CPU hardware extensions (such as Intel VT-x or AMD-V) enable hypervisors to execute guest operating system instructions at near-native speeds?',
        bn: 'কোন সিপিইউ হার্ডওয়্যার এক্সটেনশন (যেমন Intel VT-x বা AMD-V) হাইপারভাইজরকে প্রায় সরাসরি গতিতে গেস্ট অপারেটিং সিস্টেমের নির্দেশাবলী চালাতে সাহায্য করে?',
      },
      options: [
        {
          en: 'Hardware virtualization extensions provide root and non-root execution rings, letting guest OS code run directly on the physical processor while trapping privileged faults',
          bn: 'হার্ডওয়্যার ভার্চুয়ালাইজেশন এক্সটেনশন রুট ও নন-রুট এক্সিকিউশন মোড সরবরাহ করে, যা গেস্ট কোডকে সরাসরি প্রসেসরে চালিয়ে সুবিধাপ্রাপ্ত ফল্টগুলো হাইপারভাইজরে আটকে দেয়',
        },
        {
          en: 'Hardware extensions physically solder extra transistors onto RAM chips during boot',
          bn: 'হার্ডওয়্যার এক্সটেনশন বুট হওয়ার সময় স্বয়ংক্রিয়ভাবে র্যামে অতিরিক্ত ট্রানজিস্টর ঝালাই করে দেয়',
        },
        {
          en: 'Hardware extensions disable all computer cooling fans to accelerate clock speed',
          bn: 'হার্ডওয়্যার এক্সটেনশন ক্লক স্পিড বাড়াতে কম্পিউটারের সব কুলিং ফ্যান বন্ধ করে দেয়',
        },
        {
          en: 'They replace the motherboard battery with a solar panel',
          bn: 'তারা মাদারবোর্ডের ব্যাটারিকে সোলার প্যানেল দিয়ে প্রতিস্থাপন করে',
        },
      ],
      answer: 0,
      hint: { en: 'VT-x / AMD-V provide hardware privilege rings.', bn: 'VT-x / AMD-V হার্ডওয়্যার প্রিভিলেজ রিং সরবরাহ করে।' },
      explanation: {
        en: 'Intel VT-x and AMD-V introduce VMX root and non-root CPU operational modes, eliminating expensive software binary translation.',
        bn: 'Intel VT-x ও AMD-V হার্ডওয়্যারে নন-রুট মোড চালু করে গেস্ট কোড সরাসরি চালানোর সুযোগ দেয় এবং ধীরগতির সফটওয়্যার অনুবাদ পরিহার করে।',
      },
    },
    {
      id: 'cmp-vm-ex-4',
      kind: 'predict',
      topic: 'linux-kernel-hypervisor-name',
      question: {
        en: 'What open-source Linux kernel virtualization module converts the Linux kernel directly into a Type 1 hypervisor (e.g. KVM)?',
        bn: 'কোন ওপেন-সোর্স লিনাক্স কার্নেল ভার্চুয়ালাইজেশন মডিউল লিনাক্স কার্নেলকে সরাসরি একটি টাইপ ১ হাইপারভাইজরে রূপান্তর করে (যেমন KVM)?',
      },
      answer: 'KVM',
      accept: ['KVM', 'kvm', 'Kernel-based Virtual Machine'],
      hint: { en: 'K-V-M', bn: 'K-V-M' },
      explanation: {
        en: 'KVM (Kernel-based Virtual Machine) is the built-in Linux kernel module that turns Linux into a Type 1 hypervisor.',
        bn: 'KVM হলো লিনাক্স কার্নেলে অন্তর্ভুক্ত ভার্চুয়ালাইজেশন মডিউল যা লিনাক্সকে একটি টাইপ ১ হাইপারভাইজরে পরিণত করে।',
      },
    },
  ],
  quiz: {
    id: 'vms-and-the-vm-quiz',
    title: { en: 'Lesson 2 exam', bn: 'পাঠ ২ পরীক্ষা' },
    questions: [
      {
        id: 'cmp-vm-q1',
        kind: 'mcq',
        topic: 'type-2-hypervisor-use-case',
        question: {
          en: 'Why are Type 2 hypervisors (such as Oracle VirtualBox) commonly avoided for high-throughput production cloud infrastructure?',
          bn: 'উচ্চ-গতির প্রোডাকশন ক্লাউড পরিকাঠামোয় কেন টাইপ ২ হাইপারভাইজর (যেমন Oracle VirtualBox) এড়িয়ে চলা হয়?',
        },
        options: [
          {
            en: 'Because Type 2 hypervisors must pass all CPU, disk, and network I/O calls through an intermediate host operating system, doubling context switches and scheduling latency',
            bn: 'কারণ টাইপ ২ হাইপারভাইজরকে সব সিপিইউ, ডিস্ক ও নেটওয়ার্ক কল মধ্যবর্তী হোস্ট ওএস-এর মধ্য দিয়ে পাঠাতে হয়, যা কনটেক্সট সুইচ ও লেটেন্সি দ্বিগুণ করে দেয়',
          },
          {
            en: 'Because Type 2 hypervisors cannot run on 64-bit microprocessors',
            bn: 'কারণ টাইপ ২ হাইপারভাইজর ৬৪-বিট প্রসেসরে চলতে পারে না',
          },
          {
            en: 'Because they consume 100% of datacenter power lines',
            bn: 'কারণ তারা ডাটা সেন্টারের ১০০% বিদ্যুৎ একা গ্রাস করে ফেলে',
          },
          {
            en: 'Because Type 2 hypervisors only display text in green colors',
            bn: 'কারণ টাইপ ২ হাইপারভাইজর কেবল সবুজ রঙের টেক্সট প্রদর্শন করতে পারে',
          },
        ],
        answer: 0,
        hint: { en: 'Host OS intermediate layer introduces double context switches.', bn: 'হোস্ট ওএস-এর মধ্যবর্তী লেয়ার দ্বিগুণ কনটেক্সট সুইচিং তৈরি করে।' },
        explanation: {
          en: 'The intermediate host OS scheduler introduces substantial I/O latency and context-switching overhead in Type 2 virtualization.',
          bn: 'হোস্ট অপারেটিং সিস্টেমের মধ্যবর্তী লেয়ারের কারণে টাইপ ২ ভার্চুয়ালাইজেশনে অপ্রয়োজনীয় লেটেন্সি ও কনটেক্সট স্যুইচ ঘটে।',
        },
      },
      {
        id: 'cmp-vm-q2',
        kind: 'mcq',
        topic: 'hypervisor-reserved-cores',
        question: {
          en: 'In our code walkthrough, how many physical cores and GB RAM remained reserved exclusively for the hypervisor host across 32 cores?',
          bn: 'আমাদের কোড আলোচনায় ৩২টি কোরের মধ্যে কতগুলো ফিজিক্যাল কোর এবং কত জিবি র্যাম কেবল হাইপারভাইজর হোস্টের জন্য সংরক্ষিত রাখা হয়েছিল?',
        },
        options: [
          { en: '2 cores and 8 GB RAM reserved across 32 cores (6.25% overhead)', bn: '৩২টি কোরে সংরক্ষিত = ২টি কোর এবং ৮ জিবি র্যাম (৬.২৫% ওভারহেড)' },
          { en: '16 cores and 64 GB RAM reserved across 32 cores (50% overhead)', bn: '৩২টি কোরে সংরক্ষিত = ১৬টি কোর এবং ৬৪ জিবি র্যাম (৫০% ওভারহেড)' },
          { en: '0 cores and 0 GB RAM reserved across 32 cores (0% overhead)', bn: '৩২টি কোরে সংরক্ষিত = ০টি কোর এবং ০ জিবি র্যাম (০% ওভারহেড)' },
          { en: '1 core and 1 GB RAM reserved across 32 cores (3.125% overhead)', bn: '৩২টি কোরে সংরক্ষিত = ১টি কোর এবং ১ জিবি র্যাম (৩.১২৫% ওভারহেড)' },
        ],
        answer: 0,
        hint: { en: '32 - 30 = 2 cores, 128 - 120 = 8 GB.', bn: '৩২ - ৩০ = ২টি কোর, ১২৮ - ১২০ = ৮ জিবি।' },
        explanation: {
          en: 'Host reserved resources were 2 cores and 8 GB RAM across 32 cores, maintaining a 6.25% overhead profile.',
          bn: 'সিমুলেশনটিতে ৩২টি কোরের মধ্যে ২টি কোর ও ৮ জিবি র্যাম সংরক্ষিত ছিল যার ওভারহেড ছিল ৬.২৫%।',
        },
      },
      {
        id: 'cmp-vm-q3',
        kind: 'mcq',
        topic: 'aws-nitro-offload-architecture',
        question: {
          en: 'What architectural innovation does the AWS Nitro System introduce to hypervisor virtualization?',
          bn: 'হাইপারভাইজর ভার্চুয়ালাইজেশনে AWS Nitro System কোন নতুন স্থাপত্য উদ্ভাবন যুক্ত করেছে?',
        },
        options: [
          {
            en: 'It offloads hypervisor virtualization, networking, and EBS storage processing to dedicated hardware PCIe cards, reserving nearly 100% of host CPU and RAM for customer instances',
            bn: 'এটি ডেডিকেটেড হার্ডওয়্যার PCIe কার্ডের মাধ্যমে ভার্চুয়ালাইজেশন, নেটওয়ার্কিং ও স্টোরেজ প্রসেসিং পরিচালনা করে মূল সিপিইউ ও র্যামের প্রায় শতভাগ গ্রাহকের ইনস্ট্যান্সের জন্য উন্মুক্ত রাখে',
          },
          {
            en: 'It replaces computer chips with liquid nitrogen tanks',
            bn: 'এটি কম্পিউটার চিপের বদলে তরল নাইট্রোজেন ট্যাঙ্ক বসিয়ে দেয়',
          },
          {
            en: 'It eliminates the need for computer power cables entirely',
            bn: 'এটি কম্পিউটারের বিদ্যুৎ কেবলের প্রয়োজনীয়তা পুরোপুরি দূর করে দেয়',
          },
          {
            en: 'It prints source code on paper receipts inside the rack',
            bn: 'এটি সার্ভার র্যাকের ভেতরে কাগজের রসিদে সোর্স কোড প্রিন্ট করে',
          },
        ],
        answer: 0,
        hint: { en: 'Nitro offloads I/O and virtualization onto dedicated ASIC cards.', bn: 'নাইট্রো ডেডিকেটেড হার্ডওয়্যার কার্ডে ভার্চুয়ালাইজেশনের ভার স্থানান্তর করে।' },
        explanation: {
          en: 'AWS Nitro offloads network, storage, security, and hypervisor tasks to customized hardware cards, freeing host cores.',
          bn: 'AWS Nitro বিশেষায়িত হার্ডওয়্যার কার্ডের সাহায্যে হাইপারভাইজর ও নেটওয়ার্কের কাজ পরিচালনা করে মূল সার্ভার কোর খালি রাখে।',
        },
      },
      {
        id: 'cmp-vm-q4',
        kind: 'predict',
        topic: 'virtualization-arbiter-title',
        question: {
          en: 'What standard technical term identifies the software, firmware, or hardware layer that creates and runs virtual machines (e.g. Hypervisor)?',
          bn: 'ভার্চুয়াল মেশিন তৈরি ও পরিচালনা করার সফটওয়্যার বা হার্ডওয়্যার লেয়ারকে কোন প্রমিত কারিগরি নামে অভিহিত করা হয় (যেমন Hypervisor)?',
        },
        answer: 'Hypervisor',
        accept: ['Hypervisor', 'hypervisor', 'Virtual Machine Monitor', 'VMM'],
        hint: { en: 'H-y-p-e-r-v-i-s-o-r', bn: 'H-y-p-e-r-v-i-s-o-r' },
        explanation: {
          en: 'A hypervisor (or Virtual Machine Monitor, VMM) is the foundational layer responsible for virtualizing compute hardware.',
          bn: 'হাইপারভাইজর (বা ভার্চুয়াল মেশিন মনিটর) হলো সেই মূল লেয়ার যা কম্পিউট হার্ডওয়্যার ভার্চুয়ালাইজেশনের জন্য দায়ী।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'cpus-and-the-cpu',
    title: { en: 'Compute CPUs and vCPUs', bn: 'কম্পিউট সিপিইউ ও vCPU' },
  },
};
