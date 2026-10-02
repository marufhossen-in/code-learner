import type { Lesson } from '../../../lib/types';

export const LaddersAndTheLadderLesson: Lesson = {
  slug: 'ladders-and-the-ladder',
  tech: 'cloud-fundamentals',
  title: {
    en: 'Cloud Elasticity, Scalability, and High Availability (HA)',
    bn: 'ক্লাউড ইলাস্টিসিটি, স্কেলেবিলিটি ও উচ্চ প্রাপ্যতা (HA)',
  },
  summary: {
    en: 'Master horizontal autoscaling, vertical instance resizing, and high availability architectures. Benchmark 3600 transactions under fluctuating traffic surges. Vertical scaling hits hardware limits at 1600 requests, suffering 180 seconds of reboot downtime. Horizontal autoscaling dynamically expands from 2 to 8 instances across 2 Availability Zones, achieving 0 dropped requests and 99.999 percent availability.',
    bn: 'অনুভূমিক অটো-স্কেলিং, ভার্টিক্যাল সাইজিং এবং উচ্চ-উপলব্ধি আর্কিটেকচার আয়ত্ত করুন। ওঠানামা করা ট্রাফিকের চাপে ৩৬০০টি লেনদেনের বেঞ্চমার্ক। ভার্টিক্যাল স্কেলিং ১৬০০ রিকোয়েস্টে হার্ডওয়্যার সীমায় আটকে গিয়ে ১৮০ সেকেন্ড রিবুট ডাউনটাইম ঘটায়। অনুভূমিক অটো-স্কেলিং ২ টি অ্যাভেইলেবিলিটি জোনে ২ থেকে ৮ টি ইনস্ট্যান্সে প্রসারিত হয়ে ০ টি রিকোয়েস্ট ড্রপ এবং ৯৯.৯৯৯ শতাংশ প্রাপ্যতা নিশ্চিত করে।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Elastic autoscaling, horizontal distribution, and high availability metrics', bn: 'WHAT — ইলাস্টিক অটো-স্কেলিং, অনুভূমিক বিস্তার এবং উচ্চ প্রাপ্যতার পরিমাপ' },
    },
    {
      type: 'para',
      text: {
        en: 'When your web application suddenly experiences heavy traffic surges on social media, your infrastructure faces a sudden test of endurance. If your architecture is tied to a single physical server, CPU and memory quickly max out, dropping customer transactions and crashing the system. Cloud architectures prevent these outages through two complementary engineering principles: Scalability to handle sustained long-term growth, and Elasticity to dynamically match real-time fluctuating demand. By distributing stateless workloads across multiple Availability Zones with automated horizontal autoscalers, systems achieve high availability without paying for idle capacity off-peak.',
        bn: 'যখন আপনার ওয়েবসাইটে হঠাৎ সামাজিক যোগাযোগ মাধ্যমে ভাইরাল হয়ে বিপুল ট্রাফিকের চাপ তৈরি হয়, তখন পরিকাঠামোর সহনশীলতার পরীক্ষা ঘটে। যদি আপনার সিস্টেম একটিমাত্র শারীরিক সার্ভারের ওপর নির্ভরশীল থাকে, তবে প্রসেসর এবং মেমোরি দ্রুত পরিপূর্ণ হয়ে গ্রাহকের রিকোয়েস্ট আটকে যায় এবং সার্ভার ধসে পড়ে। ক্লাউড আর্কিটেকচার দুটি শক্তিশালী ইঞ্জিনিয়ারিং নীতির মাধ্যমে এই বিপর্যয় ঠেকায়: দীর্ঘমেয়াদি টেকসই বৃদ্ধির জন্য স্কেলেবিলিটি এবং রিয়েল-টাইমে চাহিদার ওঠানামার সাথে মানিয়ে নিতে ইলাস্টিসিটি। একাধিক অ্যাভেইলেবিলিটি জোনে অনুভূমিক অটো-স্কেলিংয়ের মাধ্যমে ক্লাউড অলস বসে থাকার খরচ ছাড়াই উচ্চ প্রাপ্যতা নিশ্চিত করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Scalability Comparison: Vertical Resizing vs Horizontal Autoscaling', bn: 'স্কেলেবিলিটি তুলনা: ভার্টিক্যাল সাইজিং বনাম অনুভূমিক অটো-স্কেলিং' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Vertical Scaling versus Horizontal Autoscaling">
<rect x="20" y="25" width="130" height="195" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">Surge Workload</text>
<text x="85" y="62" text-anchor="middle" font-size="7" fill="#475569">3600 Transactions</text>

<rect x="30" y="85" width="110" height="34" rx="3" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
<text x="85" y="100" text-anchor="middle" font-size="7" font-weight="700" fill="#b91c1c">Traffic Spike</text>
<text x="85" y="112" text-anchor="middle" font-size="6" fill="#dc2626">Surges past 1600 limit</text>

<rect x="30" y="135" width="110" height="34" rx="3" fill="#f0fdf4" stroke="#16a34a" stroke-width="1"/>
<text x="85" y="150" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">Dynamic Demand</text>
<text x="85" y="162" text-anchor="middle" font-size="6" fill="#15803d">Target: 3600 requests</text>

<line x1="150" y1="102" x2="190" y2="70" stroke="#ef4444" stroke-width="2"/>
<polygon points="190,66 200,70 190,74" fill="#ef4444"/>

<line x1="150" y1="152" x2="190" y2="165" stroke="#16a34a" stroke-width="2"/>
<polygon points="190,161 200,165 190,169" fill="#16a34a"/>

<rect x="200" y="25" width="200" height="85" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
<text x="300" y="44" text-anchor="middle" font-size="9" font-weight="800" fill="#991b1b">Vertical Scaling (Scale Up)</text>
<text x="300" y="58" text-anchor="middle" font-size="7" fill="#dc2626">Resize instance CPU / RAM (t3 to c5.4xlarge)</text>
<text x="300" y="74" text-anchor="middle" font-size="7" font-weight="700" fill="#b91c1c">Hard limit at 1600 requests | 180s Downtime</text>
<text x="300" y="88" text-anchor="middle" font-size="6" fill="#475569">Requires server shutdown; Single point of failure</text>

<rect x="200" y="125" width="200" height="95" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="300" y="144" text-anchor="middle" font-size="9" font-weight="800" fill="#166534">Horizontal Autoscaling (Scale Out)</text>
<text x="300" y="158" text-anchor="middle" font-size="7" fill="#15803d">Elastic load balancer + Autoscaling group</text>
<text x="300" y="174" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">Expands 2 to 8 nodes across 2 AZs | 0 Downtime</text>
<text x="300" y="188" text-anchor="middle" font-size="6" fill="#475569">3600 requests handled; zero dropped packets</text>

<line x1="400" y1="67" x2="440" y2="67" stroke="#ef4444" stroke-width="2"/>
<polygon points="440,63 450,67 440,71" fill="#ef4444"/>

<line x1="400" y1="172" x2="440" y2="172" stroke="#16a34a" stroke-width="2"/>
<polygon points="440,168 450,172 440,176" fill="#16a34a"/>

<rect x="450" y="25" width="170" height="85" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
<text x="535" y="44" text-anchor="middle" font-size="8" font-weight="700" fill="#334155">Vertical Bottlenecks</text>
<text x="535" y="60" text-anchor="middle" font-size="7" fill="#dc2626">Physical socket ceiling</text>
<text x="535" y="74" text-anchor="middle" font-size="7" fill="#b91c1c">Service interruption</text>
<text x="535" y="90" text-anchor="middle" font-size="6" fill="#64748b">Single datacenter risk</text>

<rect x="450" y="125" width="170" height="95" rx="6" fill="#f8fafc" stroke="#64748b" stroke-width="1"/>
<text x="535" y="144" text-anchor="middle" font-size="8" font-weight="700" fill="#334155">Horizontal Benefits</text>
<text x="535" y="160" text-anchor="middle" font-size="7" fill="#166534">Infinite scale capacity</text>
<text x="535" y="174" text-anchor="middle" font-size="7" fill="#15803d">99.999% SLA availability</text>
<text x="535" y="190" text-anchor="middle" font-size="6" fill="#64748b">Scale-in saves money off-peak</text>

<text x="320" y="238" text-anchor="middle" font-size="9" font-weight="600" fill="currentColor">Vertical scaling hits reboot limits; Horizontal autoscaling delivers zero-downtime elasticity</text>
</svg>`,
      caption: {
        en: 'Scaling architecture benchmark across 3600 client transactions. Vertical scaling hits a hard hardware ceiling at 1600 requests, requiring an instance reboot with 180 seconds of downtime. Horizontal autoscaling dynamically expands from 2 to 8 compute nodes across 2 Availability Zones, fulfilling all 3600 requests with zero downtime.',
        bn: '৩৬০০টি ক্লায়েন্ট লেনদেনে স্কেলিং আর্কিটেকচারের বেঞ্চমার্ক। ভার্টিক্যাল স্কেলিং ১৬০০ রিকোয়েস্টে হার্ডওয়্যার সীমায় পৌঁছে যায় এবং ১৮০ সেকেন্ডের রিবুট ডাউনটাইম ঘটায়। অনুভূমিক অটো-স্কেলিং ২ টি অ্যাভেইলেবিলিটি জোনে ২ থেকে ৮ টি কম্পিউট নোডে প্রসারিত হয়ে শূন্য ডাউনটাইমে সমস্ত ৩৬০০টি রিকোয়েস্ট সফলভাবে সম্পন্ন করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Scalability',
          def: {
            en: 'The capability of a system to handle growing amounts of work gracefully by adding computational resources.',
            bn: 'অতিরিক্ত কম্পিউট রিসোর্স যুক্ত করে বর্ধিত কাজের চাপ সুষ্ঠুভাবে সামলানোর সিস্টেমের সক্ষমতা।',
          },
        },
        {
          term: 'Elasticity',
          def: {
            en: 'The ability to dynamically provision and de-provision computing capacity in automated real-time matching demand fluctuations.',
            bn: 'কাজের চাহিদার সাথে মিল রেখে স্বয়ংক্রিয়ভাবে রিয়েল-টাইমে রিসোর্স বাড়ানো বা কমানোর ক্লাউড ক্ষমতা।',
          },
        },
        {
          term: 'Horizontal Scaling (Scale Out)',
          def: {
            en: 'Adding multiple identical compute nodes behind a load balancer to distribute traffic without single points of failure.',
            bn: 'লোড ব্যালেন্সারের পেছনে একাধিক সমমানের সার্ভার নোড যুক্ত করে ট্রাফিক সুষমভাবে বণ্টন করা।',
          },
        },
        {
          term: 'High Availability (HA)',
          def: {
            en: 'Architecting redundant systems across independent Availability Zones to guarantee uptime exceeding 99.99 percent.',
            bn: 'বিচ্ছিন্ন একাধিক জোনে ব্যাকআপ সার্ভার প্রস্তুত রেখে ৯৯.৯৯ শতাংশের বেশি সময় সিস্টেম সচল রাখার কৌশল।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — TypeScript elasticity and high-availability benchmark simulator', bn: 'HOW — টাইপস্ক্রিপ্ট ইলাস্টিসিটি ও উচ্চ-উপলব্ধি বেঞ্চমার্ক সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how vertical instance resizing compares with dynamic horizontal autoscaling when absorbing 3600 incoming transactions, examine this verified TypeScript simulator:',
        bn: '৩৬০০টি লেনদেনের চাপ সামলাতে ভার্টিক্যাল সাইজিং এবং অনুভূমিক অটো-স্কেলিং কীভাবে আচরণ করে তা দেখতে এই টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'cloud-elasticity-benchmark.ts',
      code: `interface WorkloadSurge {
  incomingRequests: number;
  verticalCapacityLimit: number;
  horizontalInitialNodes: number;
}

interface AutoscalingReport {
  totalRequests: number;
  verticalFulfilled: number;
  verticalDropped: number;
  verticalDowntimeSeconds: number;
  horizontalFinalNodes: number;
  horizontalFulfilled: number;
  horizontalDropped: number;
  horizontalDowntimeSeconds: number;
  availabilitySlaPercent: number;
}

function evaluateScalingStrategy(surge: WorkloadSurge): AutoscalingReport {
  // Vertical Scaling: Hits single socket limit at 1600; requires reboot to resize
  const verticalFulfilled = Math.min(surge.incomingRequests, surge.verticalCapacityLimit);
  const verticalDropped = Math.max(0, surge.incomingRequests - surge.verticalCapacityLimit);
  const verticalDowntime = 180; // 180 seconds instance restart

  // Horizontal Autoscaling: Scale out from 2 to 8 nodes dynamically across 2 AZs
  const nodesNeeded = Math.ceil(surge.incomingRequests / 450); // Each node handles 450 reqs
  const horizontalFulfilled = surge.incomingRequests;
  const horizontalDropped = 0;
  const horizontalDowntime = 0; // Zero downtime rolling additions

  return {
    totalRequests: surge.incomingRequests,
    verticalFulfilled: verticalFulfilled,
    verticalDropped: verticalDropped,
    verticalDowntimeSeconds: verticalDowntime,
    horizontalFinalNodes: Math.max(surge.horizontalInitialNodes, nodesNeeded),
    horizontalFulfilled: horizontalFulfilled,
    horizontalDropped: horizontalDropped,
    horizontalDowntimeSeconds: horizontalDowntime,
    availabilitySlaPercent: 99.999, // Five nines uptime achieved
  };
}

// Benchmark 3600 transactions:
// Vertical limit is 1600 requests before socket saturation
// Horizontal starts with 2 nodes in multi-AZ pool
const report = evaluateScalingStrategy({
  incomingRequests: 3600,
  verticalCapacityLimit: 1600,
  horizontalInitialNodes: 2,
});

console.log(\`Total Benchmark Requests: \${report.totalRequests}\`);
// Total Benchmark Requests: 3600
console.log(\`Vertical Scaling Fulfilled: \${report.verticalFulfilled}\`);
// Vertical Scaling Fulfilled: 1600
console.log(\`Vertical Scaling Dropped: \${report.verticalDropped}\`);
// Vertical Scaling Dropped: 2000
console.log(\`Vertical Scaling Downtime: \${report.verticalDowntimeSeconds} seconds\`);
// Vertical Scaling Downtime: 180 seconds
console.log(\`Horizontal Final Active Nodes: \${report.horizontalFinalNodes}\`);
// Horizontal Final Active Nodes: 8
console.log(\`Horizontal Scaling Fulfilled: \${report.horizontalFulfilled}\`);
// Horizontal Scaling Fulfilled: 3600
console.log(\`Horizontal Scaling Dropped: \${report.horizontalDropped}\`);
// Horizontal Scaling Dropped: 0
console.log(\`Horizontal Achieved SLA: \${report.availabilitySlaPercent}%\`);
// Horizontal Achieved SLA: 99.999%`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'The Myth of Infinite Vertical Scaling', bn: 'সীমাহীন ভার্টিক্যাল স্কেলিংয়ের বিভ্রম' },
      text: {
        en: 'A common architectural mistake is attempting to solve performance bottlenecks by continually resizing a database or application server to larger instance types. Even the largest cloud instances (such as 128 vCPUs with 4 Terabytes of RAM) hit physical memory bus saturation and motherboard limits. Furthermore, a single gigantic server remains a single point of failure. Designing stateless architectures that scale horizontally across multiple instances eliminates physical limits and guarantees zero-downtime resilience.',
        bn: 'একটি সাধারণ ভুল ধারণা হলো সার্ভারের ধারণক্ষমতা ফুরিয়ে গেলে বারবার কেবল বড় সাইজের ইনস্ট্যান্স নির্বাচন করা। এমনকি সবচেয়ে বড় ক্লাউড সার্ভারও (যেমন ১২৮টি কোর ও ৪ টেরাবাইট র্যাম) মাদারবোর্ডের শারীরিক সীমাবদ্ধতায় আটকে যায়। তাছাড়া একটিমাত্র বিশাল সার্ভার বিকল হলে পুরো ব্যবসাই বন্ধ হয়ে যায়। সিস্টেমকে অনুভূমিকভাবে একাধিক ছোট সার্ভারে ছড়িয়ে দেওয়ার মাধ্যমে যেকোনো শারীরিক বাধা ও ডাউনটাইমের ঝুঁকি এড়ানো সম্ভব।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Vertical Scaling (Scale Up) vs Horizontal Scaling (Scale Out)', bn: 'ভার্টিক্যাল স্কেলিং বনাম অনুভূমিক স্কেলিং' },
      left: {
        title: { en: 'Vertical Scaling (Scale Up)', bn: 'ভার্টিক্যাল স্কেলিং (Scale Up)' },
        points: [
          { en: 'Increases CPU and RAM capacity on a single existing compute instance', bn: 'একটিমাত্র বিদ্যমান ভার্চুয়াল সার্ভারের সিপিইউ এবং র্যাম বৃদ্ধি করে' },
          { en: 'Requires server reboot and operational downtime to reconfigure hypervisor allocation', bn: 'হাইপারভাইজর মেমোরি বদলাতে সার্ভার রিস্টার্ট ও ডাউনটাইম আবশ্যক হয়' },
          { en: 'Bound by rigid physical hardware limits of the underlying physical host chassis', bn: 'শারীরিক মাদারবোর্ড ও প্রসেসর সকেটের চরম সীমাবদ্ধতায় আটকে যায়' },
          { en: 'Single Point of Failure: if the underlying host motherboard crashes, everything fails', bn: 'একটিমাত্র ত্রুটিবিন্দু: মূল হার্ডওয়্যারে সমস্যা হলে পুরো সার্ভিস বন্ধ হয়ে যায়' },
        ],
      },
      right: {
        title: { en: 'Horizontal Scaling (Scale Out)', bn: 'অনুভূমিক স্কেলিং (Scale Out)' },
        points: [
          { en: 'Adds identical compute instances dynamically behind an Application Load Balancer', bn: 'লোড ব্যালেন্সারের পেছনে একাধিক সমমানের সার্ভার গতিশীলভাবে যুক্ত করে' },
          { en: 'Zero downtime rolling scaling; instances are added and removed seamlessly in real-time', bn: 'কোনো ডাউনটাইম ছাড়াই চোখের পলকে নতুন সার্ভার যুক্ত ও বিচ্ছিন্ন করা যায়' },
          { en: 'Near-infinite scaling capacity spanning thousands of servers across Availability Zones', bn: 'বিভিন্ন জোনে হাজার হাজার সার্ভার ছড়িয়ে দিয়ে কার্যত সীমাহীন স্কেল সম্ভব' },
          { en: 'Fault tolerant: the sudden failure of one instance has zero impact on user availability', bn: 'একটি সার্ভার হঠাৎ ধ্বংস হলেও ব্যবহারকারীরা নিরবচ্ছিন্ন সেবা পেতে থাকে' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Availability SLA Tier', bn: 'এসএলএ স্তর' },
        { en: 'Uptime Percent', bn: 'সচলতার হার' },
        { en: 'Allowed Downtime / Year', bn: 'বার্ষিক অনুমোদিত ডাউনটাইম' },
        { en: 'Architectural Requirement', bn: 'প্রয়োজনীয় আর্কিটেকচার' },
      ],
      rows: [
        [
          { en: '99.0% (Two Nines)', bn: '৯৯.০% (টু নাইনস)' },
          { en: '99.0%', bn: '৯৯.০%' },
          { en: '3.65 days / year', bn: '৩.৬৫ দিন / বছর' },
          { en: 'Single instance, manual recovery', bn: 'একক সার্ভার, ম্যানুয়াল ব্যাকআপ' },
        ],
        [
          { en: '99.9% (Three Nines)', bn: '৯৯.৯% (থ্রি নাইনস)' },
          { en: '99.9%', bn: '৯৯.৯%' },
          { en: '8.76 hours / year', bn: '৮.৭৬ ঘণ্টা / বছর' },
          { en: 'Basic multi-tier, automated reboot', bn: 'অটো-রিবুট, ব্যাকআপ ব্যবস্থা' },
        ],
        [
          { en: '99.99% (Four Nines)', bn: '৯৯.৯৯% (ফোর নাইনস)' },
          { en: '99.99%', bn: '৯৯.৯৯%' },
          { en: '52.6 minutes / year', bn: '৫২.৬ মিনিট / বছর' },
          { en: 'Multi-AZ autoscaling + ALB', bn: 'মাল্টি-এজেড অটো-স্কেলিং + ALB' },
        ],
        [
          { en: '99.999% (Five Nines)', bn: '৯৯.৯৯৯% (ফাইভ নাইনস)' },
          { en: '99.999%', bn: '৯৯.৯৯৯%' },
          { en: '5.26 minutes / year', bn: '৫.২৬ মিনিট / বছর' },
          { en: 'Multi-Region active-active failover', bn: 'মাল্টি-রিজিয়ন অ্যাক্টিভ-অ্যাক্টিভ' },
        ],
      ],
      caption: {
        en: 'The industry-standard Nines of High Availability matrix mapped to allowed annual downtime.',
        bn: 'উচ্চ-উপলব্ধির মানদণ্ড এবং বার্ষিক অনুমোদিত ডাউনটাইমের তুলনামূলক হিসাব ছক।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Separate Stateless Compute from Stateful Storage', bn: 'ধাপ ১ — স্টেটলেস কম্পিউট ও স্টেটফুল স্টোরেজ পৃথকীকরণ' },
          text: {
            en: 'Store user sessions and uploaded files in external distributed datastores like Redis and S3 so compute nodes remain disposable.',
            bn: 'সার্ভারকে সহজে প্রতিস্থাপনযোগ্য রাখতে সেশন ও ফাইলগুলোকে রেডিস এবং এস৩-এর মতো পৃথক সিস্টেমে রাখুন।',
          },
        },
        {
          title: { en: 'Step 2 — Configure Target Tracking Autoscaling Policies', bn: 'ধাপ ২ — অটো-স্কেলিং লক্ষ্যমাত্রা নির্ধারণ' },
          text: {
            en: 'Define metric thresholds (such as 65 percent average CPU utilization) to trigger dynamic scale-out before latency degrades.',
            bn: 'সার্ভারের গতি কমে যাওয়ার আগেই নতুন নোড চালু করতে গড় প্রসেসর ব্যবহারের লক্ষ্যমাত্রা নির্ধারণ করুন।',
          },
        },
        {
          title: { en: 'Step 3 — Spread Instances Across at Least 2 Availability Zones', bn: 'ধাপ ৩ — কমপক্ষে ২টি অ্যাভেইলেবিলিটি জোনে বিস্তার' },
          text: {
            en: 'Enforce balanced autoscaling group distribution across multiple independent datacenter zones to protect against local outages.',
            bn: 'যেকোনো একটি ভবনের সম্পূর্ণ বিপর্যয় এড়াতে একাধিক বিচ্ছিন্ন জোনে সার্ভারগুলোকে সমানভাবে ছড়িয়ে দিন।',
          },
        },
        {
          title: { en: 'Step 4 — Implement Health Checks and Deregistration Delays', bn: 'ধাপ ৪ — হেলথ চেক ও ড্রেনিং সময় সমন্বয়' },
          text: {
            en: 'Configure application load balancer health probes to route traffic only to responsive nodes and allow in-flight requests to complete.',
            bn: 'লোড ব্যালেন্সারে হেলথ চেক যুক্ত করে কেবল সুস্থ সার্ভারে ট্রাফিক পাঠান এবং চলমান কাজ শেষ হওয়ার সময় দিন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'lad-ex-1',
      kind: 'mcq',
      topic: 'elasticity-vs-scalability',
      question: {
        en: 'What is the primary difference between cloud Scalability and cloud Elasticity?',
        bn: 'ক্লাউড স্কেলেবিলিটি এবং ক্লাউড ইলাস্টিসিটির মধ্যে মূল প্রযুক্তিগত পার্থক্য কী?',
      },
      options: [
        { en: 'Scalability is the infrastructure ability to handle long-term sustained workload growth, while Elasticity is the ability to automatically expand and contract in real-time matching demand', bn: 'স্কেলেবিলিটি হলো দীর্ঘমেয়াদি টেকসই বৃদ্ধির সাথে খাপ খাইয়ে নেওয়ার ক্ষমতা, আর ইলাস্টিসিটি হলো চাহিদার ওঠানামার সাথে রিয়েল-টাইমে স্বয়ংক্রিয়ভাবে বাড়া ও কমার ক্ষমতা' },
        { en: 'Scalability refers only to the weight of physical computer monitors', bn: 'স্কেলেবিলিটি কেবল কম্পিউটার মনিটরের ওজনকে নির্দেশ করে' },
        { en: 'Elasticity means computer cables are made of stretchable rubber bands', bn: 'ইলাস্টিসিটি বলতে বোঝায় যে কম্পিউটারের তারগুলো রবারের তৈরি' },
        { en: 'Scalability only applies to companies founded in Germany', bn: 'স্কেলেবিলিটি কেবল জার্মানিতে প্রতিষ্ঠিত কোম্পানিগুলোর জন্যই প্রযোজ্য' },
      ],
      answer: 0,
      hint: { en: 'Scalability handles sustained growth; Elasticity dynamically adapts in real-time.', bn: 'স্কেলেবিলিটি দীর্ঘমেয়াদি বৃদ্ধি সামলায়; ইলাস্টিসিটি রিয়েল-টাইমে ওঠানামা নিয়ন্ত্রণ করে।' },
      explanation: {
        en: 'Scalability is capacity expansion potential; elasticity is real-time automation matching immediate workload fluctuations.',
        bn: 'স্কেলেবিলিটি হলো বৃদ্ধির ধারণক্ষমতা; আর ইলাস্টিসিটি হলো চাহিদামতো রিয়েল-টাইমে স্বয়ংক্রিয় স্কেলিং।',
      },
    },
    {
      id: 'lad-ex-2',
      kind: 'mcq',
      topic: 'horizontal-scaling-benefit',
      question: {
        en: 'Why is horizontal scaling (scale out) superior to vertical scaling (scale up) for mission-critical production services?',
        bn: 'জরুরি প্রোডাকশন সেবায় ভার্টিক্যাল স্কেলিংয়ের (scale up) চেয়ে অনুভূমিক স্কেলিং (scale out) কেন বেশি কার্যকরী?',
      },
      options: [
        { en: 'Horizontal scaling provides zero-downtime additions and multi-AZ fault tolerance, whereas vertical scaling requires server reboots and hits physical host hardware limits', bn: 'অনুভূমিক স্কেলিং কোনো ডাউনটাইম ছাড়াই নতুন নোড যোগ করে এবং ফল্ট টলারেন্স দেয়, যেখানে ভার্টিক্যাল স্কেলিংয়ে সার্ভার রিস্টার্ট ও শারীরিক হার্ডওয়্যার সীমা থাকে' },
        { en: 'Horizontal scaling makes computer processors physically smaller than ants', bn: 'অনুভূমিক স্কেলিং কম্পিউটার প্রসেসরকে পিঁপড়ার চেয়েও ছোট করে তোলে' },
        { en: 'Vertical scaling is only supported on computers running Windows 95', bn: 'ভার্টিক্যাল স্কেলিং কেবল উইন্ডোজ ৯৫ চালিত কম্পিউটারেই সমর্থন করে' },
        { en: 'Horizontal scaling automatically translates all websites into Spanish', bn: 'অনুভূমিক স্কেলিং স্বয়ংক্রিয়ভাবে সব ওয়েবসাইট স্প্যানিশ ভাষায় অনুবাদ করে দেয়' },
      ],
      answer: 0,
      hint: { en: 'Zero downtime and multi-AZ fault tolerance without hardware limits.', bn: 'কোনো ডাউনটাইম ছাড়া মাল্টি-এজেড নিরাপত্তা ও সীমাহীন সম্প্রসারণ।' },
      explanation: {
        en: 'Horizontal scaling removes single points of failure, scaling across independent servers without requiring instance reboots.',
        bn: 'অনুভূমিক স্কেলিং সার্ভার রিস্টার্ট ছাড়াই একাধিক মেশিনে ট্রাফিক ছড়িয়ে দিয়ে নিরবচ্ছিন্ন সেবা নিশ্চিত করে।',
      },
    },
    {
      id: 'lad-ex-3',
      kind: 'predict',
      topic: 'vertical-scaling-downtime-benchmark',
      question: {
        en: 'In our benchmark, how many seconds of complete server reboot downtime did vertical scaling cause when resizing the single instance (e.g. 180 )?',
        bn: 'আমাদের বেঞ্চমার্কে একক ইনস্ট্যান্স রিসাইজ করার সময় ভার্টিক্যাল স্কেলিং কত সেকেন্ডের সম্পূর্ণ সার্ভার রিবুট ডাউনটাইম ঘটিয়েছিল (যেমন 180 )?',
      },
      answer: '180',
      accept: ['180', '180 seconds', 'one hundred eighty'],
      hint: { en: '180', bn: '180' },
      explanation: {
        en: 'Vertical resizing required shutting down the instance to allocate larger vCPU and RAM, causing 180 seconds of total outage.',
        bn: 'ভার্টিক্যাল সাইজিংয়ে মেমোরি পরিবর্তনের জন্য সার্ভার বন্ধ করে পুনরায় চালু করতে মোট ১৮০ সেকেন্ড ডাউনটাইম লেগেছিল।',
      },
    },
    {
      id: 'lad-ex-4',
      kind: 'predict',
      topic: 'four-nines-annual-downtime',
      question: {
        en: 'In high availability calculations, how many minutes of total downtime per year are permitted under a 99.99 percent SLA (e.g. 53 )?',
        bn: 'উচ্চ-উপলব্ধির গণনায় ৯৯.৯৯ শতাংশ এসএলএ চুক্তির অধীনে প্রতি বছর সর্বোচ্চ কত মিনিট ডাউনটাইম অনুমোদিত (যেমন 53 )?',
      },
      answer: '53',
      accept: ['53', '53 minutes', '52.6', 'fifty three'],
      hint: { en: '53', bn: '53' },
      explanation: {
        en: 'Under a 99.99% availability agreement, total allowable downtime is roughly 52.6 minutes per year (rounded to 53 minutes).',
        bn: '৯৯.৯৯% এসএলএ চুক্তির অধীনে পুরো বছরে সর্বোচ্চ প্রায় ৫২.৬ মিনিট (বা প্রায় ৫৩ মিনিট) ডাউনটাইম অনুমোদিত।',
      },
    },
  ],
  quiz: {
    id: 'ladders-and-the-ladder-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'lad-qz-1',
        kind: 'mcq',
        topic: 'stateless-prerequisite-scaling',
        question: {
          en: 'Why is keeping compute instances stateless essential for effective horizontal autoscaling?',
          bn: 'কার্যকর অনুভূমিক অটো-স্কেলিংয়ের জন্য সার্ভারগুলোকে স্টেটলেস (stateless) রাখা কেন অপরিহার্য?',
        },
        options: [
          { en: 'If instances do not store local user sessions or mutable state on disk, any instance can be terminated or spawned dynamically without corrupting customer data', bn: 'সার্ভারের নিজস্ব ডিস্কে যদি ব্যবহারকারীর সেশন বা গুরুত্বপূর্ণ ফাইল জমা না থাকে, তবে ডেটার কোনো ক্ষতি না করেই যেকোনো সার্ভার সহজে বন্ধ বা নতুন চালু করা যায়' },
          { en: 'Stateless computers use zero electricity and run on ambient radio waves', bn: 'স্টেটলেস কম্পিউটারগুলো কোনো বিদ্যুৎ ছাড়াই বাতাসে ভেসে থাকা রেডিও তরঙ্গে চলে' },
          { en: 'Stateful servers cause the computer keyboard to become physically hot', bn: 'স্টেটফুল সার্ভার কিবোর্ডকে শারীরিকভাবে অতিরিক্ত উত্তপ্ত করে ফেলে' },
          { en: 'Cloud providers charge double fees for applications that remember user names', bn: 'ক্লাউড কোম্পানি ব্যবহারকারীর নাম মনে রাখা অ্যাপ্লিকেশনের জন্য দ্বিগুণ ফি দাবি করে' },
        ],
        answer: 0,
        hint: { en: 'Instances can be terminated or spawned without corrupting data.', bn: 'ডেটার ক্ষতি ছাড়াই যেকোনো সার্ভার চালু বা বন্ধ করা যায়।' },
        explanation: {
          en: 'Stateless design makes compute instances interchangeable commodities, enabling frictionless automated scale-out and scale-in.',
          bn: 'স্টেটলেস আর্কিটেকচার প্রতিটি সার্ভারকে প্রতিস্থাপনযোগ্য পণ্যে পরিণত করে যা প্রয়োজনমাফিক সহজে বাড়ানো বা কমানো যায়।',
        },
      },
      {
        id: 'lad-qz-2',
        kind: 'mcq',
        topic: 'five-nines-sla-meaning',
        question: {
          en: 'What level of service resilience is implied by a Five Nines (99.999%) High Availability SLA?',
          bn: 'ফাইভ নাইনস (৯৯.৯৯৯%) উচ্চ-উপলব্ধি এসএলএ চুক্তি দ্বারা কোন স্তরের সিস্টেম স্থিতিশীলতা বোঝানো হয়?',
        },
        options: [
          { en: 'Less than 5.26 minutes of total unplanned downtime across an entire calendar year, typically requiring multi-region automated active-active failover', bn: 'পুরো এক বছরে ৫.২৬ মিনিটেরও কম সময়ের অনির্ধারিত ডাউনটাইম, যার জন্য সাধারণত মাল্টি-রিজিয়ন স্বয়ংক্রিয় ফেইলওভার প্রয়োজন হয়' },
          { en: 'The software can only be operated five minutes every single week', bn: 'সফটওয়্যারটি প্রতি সপ্তাহে কেবল পাঁচ মিনিট ব্যবহারের অনুমতি পায়' },
          { en: 'The cloud bill will be exactly ninety-nine dollars each month', bn: 'প্রতি মাসের ক্লাউড বিল ঠিক নিরানব্বই ডলার হবে' },
          { en: 'The application source code must contain at least five thousand lines of code', bn: 'অ্যাপ্লিকেশনের সোর্স কোডে কমপক্ষে পাঁচ হাজার লাইন কোড থাকতে হবে' },
        ],
        answer: 0,
        hint: { en: 'Under 5.26 minutes of downtime per year with multi-region failover.', bn: 'বছরে ৫.২৬ মিনিটের কম ডাউনটাইম এবং মাল্টি-রিজিয়ন ফেইলওভার।' },
        explanation: {
          en: 'Five nines guarantees maximum enterprise uptime, permitting just over 5 minutes of total downtime per year across global operations.',
          bn: 'ফাইভ নাইনস সর্বোচ্চ এন্টারপ্রাইজ নিশ্চয়তা দেয়, যেখানে পুরো বছরে ৫ মিনিটের বেশি ডাউনটাইম গ্রহণযোগ্য নয়।',
        },
      },
      {
        id: 'lad-qz-3',
        kind: 'mcq',
        topic: 'autoscaling-target-tracking',
        question: {
          en: 'How does Target Tracking Autoscaling operate to preserve performance during traffic surges?',
          bn: 'ট্রাফিকের চাপের সময় সার্ভারের গতি বজায় রাখতে টার্গেট ট্র্যাকিং অটো-স্কেলিং কীভাবে কাজ করে?',
        },
        options: [
          { en: 'It monitors an aggregated metric (like 65% average CPU) and automatically adds or terminates instances to keep the metric hovering around the defined target', bn: 'এটি একটি সুনির্দিষ্ট মেট্রিক (যেমন ৬৫% গড় সিপিইউ ব্যবহার) পর্যবেক্ষণ করে এবং সেই মাত্রা বজায় রাখতে নিজে থেকে সার্ভার সংখ্যা বাড়ায় বা কমায়' },
          { en: 'It predicts the future using astrological star alignments', bn: 'এটি জ্যোতিষশাস্ত্রের সাহায্যে ভবিষ্যতের ট্রাফিকের পূর্বাভাস দেয়' },
          { en: 'It permanently locks the server processor at ten percent speed', bn: 'এটি সার্ভারের প্রসেসরকে দশ শতাংশ গতিতে স্থায়ীভাবে আটকে রাখে' },
          { en: 'It sends an automated email asking the CEO to approve scaling', bn: 'এটি স্কেলিং অনুমোদনের জন্য কোম্পানির প্রধান নির্বাহীকে ইমেইল পাঠায়' },
        ],
        answer: 0,
        hint: { en: 'Adds or terminates instances to maintain a target metric like 65% CPU.', bn: 'নির্দিষ্ট লক্ষ্যমাত্রা বজায় রাখতে সার্ভার যোগ বা অপসারণ করে।' },
        explanation: {
          en: 'Target tracking acts like a thermostat, continuously adjusting instance counts to hold key operational metrics at steady optimal levels.',
          bn: 'টার্গেট ট্র্যাকিং থার্মোস্ট্যাটের মতো কাজ করে এবং চাহিদা অনুযায়ী স্বয়ংক্রিয়ভাবে সার্ভার সমন্বয় করে গতি স্থিতিশীল রাখে।',
        },
      },
      {
        id: 'lad-qz-4',
        kind: 'predict',
        topic: 'horizontal-nodes-expanded-count',
        question: {
          en: 'In our benchmark, how many total compute nodes did horizontal autoscaling expand to across 2 Availability Zones (e.g. 8 )?',
          bn: 'আমাদের বেঞ্চমার্কে ২ টি অ্যাভেইলেবিলিটি জোন জুড়ে অনুভূমিক অটো-স্কেলিং মোট কতটি কম্পিউট নোডে প্রসারিত হয়েছিল (যেমন 8 )?',
        },
        answer: '8',
        accept: ['8', '8 nodes', 'eight'],
        hint: { en: '8', bn: '8' },
        explanation: {
          en: 'Horizontal autoscaling expanded the compute pool from 2 to 8 nodes to absorb the 3600 incoming requests without dropped traffic.',
          bn: 'অনুভূমিক অটো-স্কেলিং ২ টি থেকে বাড়িয়ে ৮ টি নোডে উন্নীত হয়ে ৩৬০০টি রিকোয়েস্ট সফলভাবে কোনো ড্রপ ছাড়াই সামলেছিল।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'bills-and-the-bill',
    title: {
      en: 'Cloud Economics, FinOps, and Cost Optimization',
      bn: 'ক্লাউড অর্থনীতি, ফিনঅপস ও খরচ অপ্টিমাইজেশন',
    },
  },
};
