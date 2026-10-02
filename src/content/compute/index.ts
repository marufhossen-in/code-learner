import type { Hub } from '../../lib/types';
import { InstancesAndTheInstanceLesson } from './lessons/instances-and-the-instance';
import { VmsAndTheVmLesson } from './lessons/vms-and-the-vm';
import { CpusAndTheCpuLesson } from './lessons/cpus-and-the-cpu';
import { MemoriesAndTheMemoryLesson } from './lessons/memories-and-the-memory';
import { ScalingsAndTheScalingLesson } from './lessons/scalings-and-the-scaling';
import { SpotsAndTheSpotLesson } from './lessons/spots-and-the-spot';
import { AutoscalesAndTheAutoscaleLesson } from './lessons/autoscales-and-the-autoscale';
import { TheComputeReleaseLesson } from './lessons/the-compute-release';

export const computeHub: Hub = {
  slug: 'compute',
  name: 'Compute',
  icon: '🖥️',
  tagline: {
    en: 'Master enterprise cloud compute from virtual machine instances and hypervisors to vCPU scheduling, NUMA memory nodes, Spot arbitrage, and multi-AZ auto-scaling fleets.',
    bn: 'ভার্চুয়াল মেশিন ইনস্ট্যান্স ও হাইপারভাইজর থেকে শুরু করে vCPU শিডিউলিং, NUMA মেমরি নোড, স্পট ইনস্ট্যান্স এবং মাল্টি-AZ অটো-স্কেলিং ফ্লিট পর্যন্ত এন্টারপ্রাইজ ক্লাউড কম্পিউট আয়ত্ত করুন।',
  },
  intro: {
    en: 'Cloud compute is the foundational engine powering every modern web application, microservice cluster, and distributed data processing pipeline. Beyond simply renting remote servers, mastering compute requires a deep mechanical understanding of virtualization architectures: Type 1 bare-metal hypervisors (KVM, AWS Nitro), hardware-assisted CPU virtualization (VT-x), simultaneous multithreading (SMT vCPUs), and non-uniform memory access (NUMA) topologies. This complete curriculum takes you from instance lifecycles and hypervisor mechanics to vertical versus horizontal scaling trade-offs, slashing infrastructure bills by 90% using Spot instances, and engineering resilient, multi-availability-zone auto-scaling fleets with zero-downtime rolling updates.',
    bn: 'ক্লাউড কম্পিউট হলো আধুনিক ওয়েব অ্যাপ্লিকেশন, মাইক্রোসার্ভিস ক্লাস্টার এবং ডিস্ট্রিবিউটেড ডেটা প্রসেসিং পাইপলাইনের মূল চালিকাশক্তি। কেবল দূরবর্তী সার্ভার ভাড়া নেওয়ার বাইরে কম্পিউট আয়ত্ত করতে ভার্চুয়ালাইজেশন কাঠামোর গভীর মেকানিক্যাল জ্ঞান প্রয়োজন: টাইপ ১ বেয়ার-মেটাল হাইপারভাইজর (KVM, AWS Nitro), হার্ডওয়্যার-অ্যাসিস্টেড সিপিইউ ভার্চুয়ালাইজেশন (VT-x), হাইপার-থ্রেডিং (vCPU) এবং নন-ইউনিফর্ম মেমরি অ্যাক্সেস (NUMA) টপোলজি। এই পূর্ণাঙ্গ পাঠ্যক্রমটি আপনাকে ইনস্ট্যান্স লাইফসাইকেল ও হাইপারভাইজর মেকানিক্স থেকে শুরু করে ভার্টিক্যাল বনাম হরাইজন্টাল স্কেলিং, স্পট ইনস্ট্যান্স দিয়ে ৯০% ক্লাউড খরচ হ্রাস এবং মাল্টি-AZ অটো-স্কেলিং ফ্লিটের মাধ্যমে শূন্য-ডাউনটাইম ডিপ্লয়মেন্ট নিশ্চিত করতে দক্ষ করে তুলবে।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Virtualization, Hypervisors, and Hardware', bn: 'ধাপ ১ — ভার্চুয়ালাইজেশন, হাইপারভাইজর ও হার্ডওয়্যার' },
      items: [
        { en: 'Instances, machine lifecycles, and provisioning states (Lesson 1)', bn: 'ইনস্ট্যান্স, মেশিন লাইফসাইকেল ও প্রভিশনিং স্টেট (পাঠ ১)' },
        { en: 'Virtual machines and Type 1 bare-metal hypervisors: KVM and Nitro (Lesson 2)', bn: 'ভার্চুয়াল মেশিন ও টাইপ ১ বেয়ার-মেটাল হাইপারভাইজর: KVM ও Nitro (পাঠ ২)' },
        { en: 'vCPUs, hyper-threading, core pinning, and clock frequencies (Lesson 3)', bn: 'vCPU, হাইপার-থ্রেডিং, কোর পিনিং ও ঘড়ির গতি (পাঠ ৩)' },
      ],
    },
    {
      title: { en: 'Stage 2 — Memory Topologies and Capacity Scaling', bn: 'ধাপ ২ — মেমরি টপোলজি ও ক্যাপাসিটি স্কেলিং' },
      items: [
        { en: 'RAM architecture, memory-optimized instance families, and NUMA nodes (Lesson 4)', bn: 'র্যাম আর্কিটেকচার, মেমরি-অপ্টিমাইজড ইনস্ট্যান্স ও NUMA নোড (পাঠ ৪)' },
        { en: 'Vertical scaling (scale-up) vs horizontal scaling (scale-out) trade-offs (Lesson 5)', bn: 'ভার্টিক্যাল স্কেলিং (স্কেল-আপ) বনাম হরাইজন্টাল স্কেলিং (স্কেল-আউট) (পাঠ ৫)' },
        { en: 'Spot and preemptible instances: cloud arbitrage and interruption handling (Lesson 6)', bn: 'স্পট ও প্রিএম্পটিবল ইনস্ট্যান্স: খরচ সাশ্রয় ও বাধা সামলানো (পাঠ ৬)' },
      ],
    },
    {
      title: { en: 'Stage 3 — Elastic Fleets and High Availability', bn: 'ধাপ ৩ — ইলাস্টিক ফ্লিট ও হাই অ্যাভেইলেবিলিটি' },
      items: [
        { en: 'Auto Scaling Groups (ASG): target tracking and cooldown periods (Lesson 7)', bn: 'অটো স্কেলিং গ্রুপ (ASG): টার্গেট ট্র্যাকিং ও কুলডাউন সময় (পাঠ ৭)' },
        { en: 'Production compute release: multi-AZ resilience, launch templates, and health checks (Lesson 8)', bn: 'প্রোডাকশন কম্পিউট রিলিজ: মাল্টি-AZ টেকসই ব্যবস্থা ও হেলথ চেক (পাঠ ৮)' },
      ],
    },
  ],
  lessons: [
    InstancesAndTheInstanceLesson,
    VmsAndTheVmLesson,
    CpusAndTheCpuLesson,
    MemoriesAndTheMemoryLesson,
    ScalingsAndTheScalingLesson,
    SpotsAndTheSpotLesson,
    AutoscalesAndTheAutoscaleLesson,
    TheComputeReleaseLesson,
  ],
  references: [],
  projects: [
    {
      title: { en: 'Project 1 — High-Availability Web Fleet with Mixed Spot and On-Demand Instances', bn: 'প্রজেক্ট ১ — স্পট ও অন-ডিমান্ড মিশ্রিত হাই-অ্যাভেইলেবিলিটি ওয়েব ফ্লিট' },
      brief: {
        en: 'Design and deploy a resilient multi-availability-zone compute fleet using an Auto Scaling Group. Configure launch templates with automated user-data initialization, balance an On-Demand baseline with cost-effective Spot instances, and implement a graceful 2-minute termination handler. Deliverable: production Terraform declarations and automated stress-testing scripts.',
        bn: 'অটো স্কেলিং গ্রুপ ব্যবহার করে একটি টেকসই মাল্টি-AZ কম্পিউট ফ্লিট তৈরি করুন। ইউজার-ডেটা স্ক্রিপ্টসহ লঞ্চ টেমপ্লেট কনফিগার করুন, অন-ডিমান্ড বেসলাইনের সাথে স্পট ইনস্ট্যান্সের সমন্বয় করুন এবং ২ মিনিটের গ্রেসফুল টার্মিনেশন হ্যান্ডলার যুক্ত করুন। আউটপুট: প্রোডাকশন টেরাফর্ম কোড এবং লোড-টেস্টিং স্ক্রিপ্ট।',
      },
    },
    {
      title: { en: 'Project 2 — NUMA-Aware In-Memory Cache Cluster on Bare-Metal Instances', bn: 'প্রজেক্ট ২ — বেয়ার-মেটাল ইনস্ট্যান্সে NUMA-সচেতন ইন-মেমরি ক্যাশ ক্লাস্টার' },
      brief: {
        en: 'Deploy a high-throughput Redis/Dragonfly cluster on memory-optimized cloud instances. Bind process worker threads directly to physical CPU cores and local NUMA memory nodes using numactl and isolcpus, eliminating cross-socket memory latency penalties. Deliverable: benchmarking metrics proving sub-millisecond p99 latency under 100,000 QPS load.',
        bn: 'মেমরি-অপ্টিমাইজড ইনস্ট্যান্সে একটি উচ্চ-গতির ক্যাশ ক্লাস্টার স্থাপন করুন। numactl ব্যবহার করে প্রসেস থ্রেডগুলোকে সরাসরি ফিজিক্যাল সিপিইউ কোর এবং লোকাল NUMA মেমরিতে পিন করুন, যা ক্রস-সকেট মেমরি বিলম্ব দূর করবে। আউটপুট: প্রতি সেকেন্ডে ১,০০,০০০ কুয়েরি লোডে সাব-মিলি সেকেন্ড ল্যাটেন্সির বেঞ্চমার্ক প্রমাণ।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Right-size compute instances using historical p95 telemetry: avoid wasting budget on idle over-provisioned CPU and RAM.',
      bn: 'ঐতিহাসিক p95 মেট্রিক্স দেখে সঠিক আকারের ইনস্ট্যান্স বাছুন: অতিরিক্ত সিপিইউ ও র্যামের অপচয় রোধ করে ক্লাউড খরচ কমান।',
    },
    {
      en: 'Deploy across at least 3 Availability Zones: distribute instances across independent datacenter fault domains to survive facility outages.',
      bn: 'কমপক্ষে ৩টি অ্যাভেইলেবিলিটি জোনে ডিপ্লয় করুন: ডাটা সেন্টার বিপর্যয়েও সার্ভিস সচল রাখতে একাধিক স্বাধীন জোনে ইনস্ট্যান্স ছড়িয়ে দিন।',
    },
    {
      en: 'Use mixed instance policies in Auto Scaling Groups: maintain 20% On-Demand for baseline capacity and 80% Spot for elastic peak traffic.',
      bn: 'অটো স্কেলিংয়ে মিশ্র ইনস্ট্যান্স নীতি ব্যবহার করুন: বেসলাইনের জন্য ২০% অন-ডিমান্ড এবং সাময়িক পিক লোডের জন্য ৮০% স্পট ইনস্ট্যান্স রাখুন।',
    },
    {
      en: 'Configure generous scaling cooldown periods: prevent metric thrashing where fleets rapidly scale up and down in destabilizing feedback loops.',
      bn: 'যথেষ্ট স্কেলিং কুলডাউন সময় নির্ধারণ করুন: দ্রুত ওঠানামার অস্থিতিশীল লুপ প্রতিরোধ করে ক্লাস্টারের স্থায়িত্ব রক্ষা করুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the architectural difference between a Type 1 bare-metal hypervisor and a Type 2 hosted hypervisor, and why do cloud providers use Type 1?',
        bn: 'টাইপ ১ বেয়ার-মেটাল হাইপারভাইজর এবং টাইপ ২ হোস্টের হাইপারভাইজরের মধ্যকার কাঠামোগত পার্থক্য কী এবং ক্লাউড প্রোভাইডাররা কেন টাইপ ১ ব্যবহার করে?',
      },
      a: {
        en: 'A Type 1 hypervisor (such as KVM, Xen, or AWS Nitro) runs directly on the bare-metal server hardware without an underlying host operating system. It manages hardware virtualization instructions (Intel VT-x, AMD-V) directly, delivering near-native CPU, memory, and I/O performance with minimal virtualization overhead. A Type 2 hypervisor (such as VirtualBox or VMware Workstation) runs on top of a general-purpose host OS (Windows/Linux), introducing double-scheduling latency and severe I/O penalties. Cloud hyperscalers exclusively deploy Type 1 architectures to maximize resource isolation, density, and hardware performance.',
        bn: 'টাইপ ১ হাইপারভাইজর (যেমন KVM, Xen বা AWS Nitro) কোনো হোস্ট অপারেটিং সিস্টেম ছাড়াই সরাসরি ফিজিক্যাল হার্ডওয়্যারের ওপর চলে। এটি সরাসরি হার্ডওয়্যার ভার্চুয়ালাইজেশন ইনস্ট্রাকশন (Intel VT-x, AMD-V) পরিচালনা করে, ফলে প্রায় নেটিভ হার্ডওয়্যারের সমান গতি ও অত্যন্ত কম ওভারহেড পাওয়া যায়। অন্যদিকে টাইপ ২ হাইপারভাইজর (যেমন VirtualBox বা VMware Workstation) সাধারণ অপারেটিং সিস্টেমের ওপর চলে, যা দ্বিগুণ শিডিউলিং বিলম্ব এবং ধীরগতির আই/ও সৃষ্টি করে। ক্লাউড প্রোভাইডাররা সর্বোচ্চ নিরাপত্তা, গতি এবং কর্মক্ষমতার জন্য কেবল টাইপ ১ হাইপারভাইজর ব্যবহার করে।',
      },
    },
    {
      q: {
        en: 'What is a vCPU in cloud computing, and how does Simultaneous Multithreading (SMT) affect compute performance under heavy load?',
        bn: 'ক্লাউড কম্পিউটিংয়ে vCPU কী এবং ভারী কাজের চাপে হাইপার-থ্রেডিং (SMT) কীভাবে সিপিইউর পারফরম্যান্স প্রভাবিত করে?',
      },
      a: {
        en: 'In modern cloud providers, 1 vCPU typically corresponds to 1 hardware thread (hyper-thread) on a physical CPU core using Simultaneous Multithreading (SMT). A dual-thread physical core presents as 2 vCPUs. SMT shares execution units (ALUs, FPUs, L1/L2 caches) between the two threads. While SMT boosts throughput by 20% to 30% for general web services by keeping pipelines filled during memory stalls, two compute-bound or cryptographic threads on the same physical core will contend for execution units. For high-performance computing (HPC) or low-latency financial trading, engineers disable SMT or bind threads to dedicated physical cores.',
        bn: 'আধুনিক ক্লাউডে ১টি vCPU সাধারণত ফিজিক্যাল সিপিইউ কোরের ১টি হার্ডওয়্যার থ্রেড (হাইপার-থ্রেড) হিসেবে কাজ করে। ফলে ১টি ফিজিক্যাল কোর ২টি vCPU তৈরি করে। এই দুটি থ্রেড একই এক্সিকিউশন ইউনিট এবং ক্যাশ মেমরি শেয়ার করে। সাধারণ ওয়েব অ্যাপ্লিকেশনে এটি ২০% থেকে ৩০% থ্রুপুট বাড়ালেও ভারী গাণিতিক বা ক্রিপ্টোগ্রাফিক কাজে দুটি থ্রেড একই হার্ডওয়্যারের জন্য প্রতিযোগিতা করে গতি কমিয়ে দিতে পারে। অত্যন্ত উচ্চ-গতির ফিনান্সিয়াল ট্রেডিং বা এইচপিসি কাজের জন্য ইঞ্জিনিয়াররা হাইপার-থ্রেডিং বন্ধ রেখে সরাসরি ডেডিকেটেড ফিজিক্যাল কোর ব্যবহার করেন।',
      },
    },
    {
      q: {
        en: 'What are the architectural trade-offs between vertical scaling (scale-up) and horizontal scaling (scale-out)?',
        bn: 'ভার্টিক্যাল স্কেলিং (স্কেল-আপ) এবং হরাইজন্টাল স্কেলিং (স্কেল-আউট) এর মধ্যকার আর্কিটেকচারাল সুবিধা ও অসুবিধাগুলো কী কী?',
      },
      a: {
        en: 'Vertical scaling increases the CPU and RAM capacity of an existing single instance (e.g. upgrading from 4 vCPUs to 64 vCPUs). It requires zero architectural modifications and maintains low latency because all data resides in shared memory, but it suffers from a hard hardware ceiling, exorbitant costs at the top tier, and mandatory downtime during instance resizing. Horizontal scaling adds multiple identical instances behind a load balancer. It provides theoretically infinite elasticity, fault isolation (if one node dies, traffic routes to others), and zero-downtime updates, but it requires applications to be strictly stateless and introduces distributed state synchronization complexity.',
        bn: 'ভার্টিক্যাল স্কেলিং একটি একক সার্ভারের সিপিইউ ও র্যামের ধারণক্ষমতা বৃদ্ধি করে (যেমন ৪ vCPU থেকে ৬৪ vCPU)। এতে কোডে কোনো পরিবর্তন করতে হয় না এবং সব ডেটা একই মেমরিতে থাকায় গতি বেশি হয়; তবে এর একটি হার্ডওয়্যার সীমা রয়েছে, খরচ মাত্রাতিরিক্ত বাড়ে এবং সাইজ পরিবর্তনের সময় ডাউনটাইম অনিবার্য হয়। অন্যদিকে হরাইজন্টাল স্কেলিং লোড ব্যালেন্সারের পেছনে একাধিক একই ধরনের সার্ভার যুক্ত করে। এটি অসীম সম্প্রসারণ ক্ষমতা, আউটেজ থেকে নিরাপত্তা এবং শূন্য-ডাউনটাইম নিশ্চিত করে; তবে এর জন্য অ্যাপ্লিকেশনকে স্টেটলেস হতে হয় এবং ডেটা সমন্বয়ের জটিলতা তৈরি হয়।',
      },
    },
    {
      q: {
        en: 'How do Spot (preemptible) instances achieve 70% to 90% cost discounts, and how must applications handle termination notices?',
        bn: 'স্পট (প্রিএম্পটিবল) ইনস্ট্যান্স কীভাবে ৭০% থেকে ৯০% খরচ সাশ্রয় করে এবং টার্মিনেশন নোটিশ পেলে অ্যাপ্লিকেশন কীভাবে তা সামলাবে?',
      },
      a: {
        en: 'Spot instances represent unused, spare compute capacity in cloud datacenters auctioned at steep discounts. However, the cloud provider reserves the right to reclaim the instance at any time with a 2-minute interruption notice when On-Demand customers demand capacity. Applications running on Spot instances must be stateless, idempotent, or checkpointed (such as Kubernetes worker nodes, CI/CD runners, or batch encoders). Applications listen for the termination event on the Instance Metadata Service (IMDS), gracefully drain active HTTP connections, flush local caches to S3 or Redis, and deregister from target groups within the 2-minute window.',
        bn: 'স্পট ইনস্ট্যান্স হলো ক্লাউড ডাটা সেন্টারে অব্যবহৃত থাকা অতিরিক্ত সার্ভার যা বিপুল ছাড়ে নিলামের মাধ্যমে দেওয়া হয়। তবে অন-ডিমান্ড গ্রাহকদের চাহিদা বাড়লে ক্লাউড প্রোভাইডার মাত্র ২ মিনিটের নোটিশে যেকোনো সময় এই ইনস্ট্যান্স ফিরিয়ে নিতে পারে। তাই স্পট ইনস্ট্যান্সে চলা অ্যাপ্লিকেশনগুলোকে অবশ্যই স্টেটলেস ও ব্যাচ কাজের উপযোগী হতে হয়। সার্ভারগুলো ইনস্ট্যান্স মেটাডেটা সার্ভিস (IMDS) পর্যবেক্ষণ করে টার্মিনেশন নোটিশ পাওয়া মাত্র ২ মিনিটের মধ্যে চলমান রিকোয়েস্ট শেষ করে, লোকাল ক্যাশ সেভ করে এবং নিরাপদে ট্রাফিক থেকে নিজেকে সরিয়ে নেয়।',
      },
    },
  ],
  realWorld: [
    {
      company: 'Netflix',
      description: {
        en: 'Encodes millions of streaming video titles globally using massive fleets of AWS EC2 Spot instances, cutting processing costs by 80%.',
        bn: 'বিশাল AWS EC2 স্পট ইনস্ট্যান্স ফ্লিটের মাধ্যমে বিশ্বব্যাপী লক্ষ লক্ষ ভিডিও এনকোড করে প্রসেসিং খরচ ৮০% হ্রাস করে।',
      },
    },
    {
      company: 'Airbnb',
      description: {
        en: 'Runs stateless microservices across multi-AZ Auto Scaling Groups on AWS, dynamically scaling thousands of instances based on user booking spikes.',
        bn: 'AWS এ মাল্টি-AZ অটো স্কেলিং গ্রুপের মাধ্যমে ব্যবহারকারীর বুকিং চাপের ওপর ভিত্তি করে হাজার হাজার ইনস্ট্যান্স গতিশীলভাবে পরিচালনা করে।',
      },
    },
    {
      company: 'Uber',
      description: {
        en: 'Processes real-time driver dispatch matching algorithms on high-performance compute clusters with pinned CPU cores and NUMA-aware memory.',
        bn: 'সিপিইউ কোর পিনিং এবং NUMA-সচেতন মেমরি অপ্টিমাইজড কম্পিউট ক্লাস্টারে রিয়েল-টাইম রাইড ম্যাচিং অ্যালগরিদম পরিচালনা করে।',
      },
    },
  ],
};
