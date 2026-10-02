import type { Lesson } from '../../../lib/types';

export const GatewaysAndTheGatewayLesson: Lesson = {
  slug: 'gateways-and-the-gateway',
  tech: 'cloud-networking',
  title: {
    en: 'Internet Gateways and NAT Gateways: Ingress, Egress, and Elastic IP Routing',
    bn: 'ইন্টারনেট গেটওয়ে ও ন্যাট গেটওয়ে: ইনগ্রেস, এগ্রেস ও ইলাস্টিক আইপি রাউটিং',
  },
  summary: {
    en: 'Master Internet Gateways, managed NAT Gateways, and IPv6 egress routing. Benchmark 2500 outbound transactions across single-AZ versus multi-AZ architectures. Sharing 1 NAT gateway across multiple zones risks total VPC outage during a zone failure. Provisioning 3 dedicated zone gateways isolates faults and allows 1700 transactions to continue uninterrupted.',
    bn: 'ইন্টারনেট গেটওয়ে, ম্যানেজড ন্যাট গেটওয়ে এবং IPv6 এগ্রেস রাউটিং আয়ত্ত করুন। একক জোন বনাম মাল্টি-জোন আর্কিটেকচারে ২৫০০টি বহির্গামী লেনদেনের বেঞ্চমার্ক। একাধিক জোনে ১টি মাত্র ন্যাট গেটওয়ে শেয়ার করলে জোন বিপর্যয়ে পুরো ভিপিসি অচল হতে পারে। কিন্তু ৩টি জোনে পৃথক গেটওয়ে রাখলে ত্রুটি বিচ্ছিন্ন থাকে এবং ১৭০০টি লেনদেন নিরবচ্ছিন্নভাবে সম্পন্ন হয়।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Bi-directional Internet Gateways versus outbound NAT translation', bn: 'WHAT — দ্বিমুখী ইন্টারনেট গেটওয়ে বনাম বহির্গামী ন্যাট ট্রান্সলেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'When your cloud infrastructure needs to interact with the outside world, you must choose between two distinct gateway mechanisms: Internet Gateways (IGWs) and NAT Gateways. An Internet Gateway is a horizontally scalable, redundant Virtual Private Cloud (VPC) edge component that performs bi-directional 1-to-1 static NAT, allowing public subnet hosts with Elastic IPs to receive incoming client traffic and send outgoing responses. Conversely, instances in private subnets require outbound access to download security patches or query third-party external services without exposing themselves to incoming web attacks. A NAT Gateway solves this by performing 1-to-many Port Address Translation (PAT), masking private IP addresses behind a single public Elastic IP.',
        bn: 'আপনার ক্লাউড অবকাঠামো যখন বাইরের বিশ্বের সাথে যোগাযোগ করার প্রয়োজন হয়, তখন আপনাকে দুটি ভিন্ন গেটওয়ে পদ্ধতির মধ্যে বেছে নিতে হয়: ইন্টারনেট গেটওয়ে (IGW) এবং ন্যাট গেটওয়ে (NAT Gateway)। ইন্টারনেট গেটওয়ে হলো একটি উচ্চ স্কেলেবল এবং রিডানড্যান্ট ভার্চুয়াল প্রাইভেট ক্লাউড (VPC) উপাদান যা দ্বিমুখী ১-টু-১ স্ট্যাটিক ন্যাট সম্পন্ন করে, ফলে ইলাস্টিক আইপি থাকা পাবলিক সার্ভারগুলো সরাসরি ক্লায়েন্টের রিকোয়েস্ট গ্রহণ করতে এবং রেসপন্স পাঠাতে পারে। অপরদিকে প্রাইভেট সাবনেটের সার্ভারগুলোর সফটওয়্যার প্যাচ ডাউনলোড বা বাইরের সার্ভিস কল করার জন্য কেবল একমুখী বহির্গামী পথ প্রয়োজন হয় যাতে তারা কোনো সাইবার আক্রমণের শিকার না হয়। ন্যাট গেটওয়ে পোর্ট অ্যাড্রেস ট্রান্সলেশন (PAT) ব্যবহারের মাধ্যমে প্রাইভেট আইপিগুলোকে একটি মাত্র পাবলিক ইলাস্টিক আইপির আড়ালে লুকিয়ে এই সুরক্ষা নিশ্চিত করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Multi-AZ NAT Gateway Redundancy: 2500 transactions evaluated', bn: 'মাল্টি-এজেড ন্যাট গেটওয়ে সহনশীলতা: ২৫০০টি লেনদেনের মূল্যায়ন' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Internet Gateway vs NAT Gateway multi-AZ diagram">
<rect x="20" y="25" width="130" height="195" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">Private Workers</text>
<text x="85" y="68" text-anchor="middle" font-size="8" fill="#475569">2500 Outbound Tasks</text>

<rect x="30" y="90" width="110" height="34" rx="3" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
<text x="85" y="105" text-anchor="middle" font-size="7" font-weight="700" fill="#b91c1c">Zone 1 Outage (800)</text>
<text x="85" y="115" text-anchor="middle" font-size="6" fill="#dc2626">Isolated network fault</text>

<rect x="30" y="135" width="110" height="34" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="85" y="150" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">Zone 2 &amp; 3 (1700)</text>
<text x="85" y="160" text-anchor="middle" font-size="6" fill="#15803d">100% healthy traffic</text>

<line x1="150" y1="120" x2="190" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="190,116 200,120 190,124" fill="#2563eb"/>

<rect x="200" y="20" width="420" height="205" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="410" y="42" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">Multi-AZ Dedicated NAT Gateway Topology</text>

<rect x="215" y="58" width="390" height="46" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="1"/>
<text x="230" y="76" font-size="9" font-weight="700" fill="#b91c1c">Zone 1: nat-gw-1a (EIP 198.51.100.10) — Disrupted</text>
<text x="230" y="92" font-size="7" fill="#dc2626">Failure contained to Zone 1 | 800 tasks isolated</text>

<rect x="215" y="112" width="390" height="46" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="230" y="130" font-size="9" font-weight="700" fill="#166534">Zone 2: nat-gw-1b (EIP 198.51.100.20) — Operational</text>
<text x="230" y="146" font-size="7" fill="#15803d">Processes 850 outbound transactions in 0.45 ms</text>

<rect x="215" y="166" width="390" height="46" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="230" y="184" font-size="9" font-weight="700" fill="#166534">Zone 3: nat-gw-1c (EIP 198.51.100.30) — Operational</text>
<text x="230" y="200" font-size="7" fill="#15803d">Processes 850 outbound transactions in 0.45 ms</text>

<text x="320" y="238" text-anchor="middle" font-size="9" font-weight="600" fill="currentColor">3 NAT gateways isolate zone failures: 1700 transactions continue uninterrupted</text>
</svg>`,
      caption: {
        en: 'Gateway egress architecture benchmark across 2500 outbound transactions. In a resilient multi-AZ setup with 3 dedicated NAT gateways, each zone processes traffic locally. When Zone 1 experiences a routing disruption impacting 800 transactions, Zone 2 and Zone 3 continue operating independently, allowing 1700 transactions to succeed with zero dropped packets.',
        bn: '২৫০০টি বহির্গামী লেনদেনে গেটওয়ে এগ্রেস আর্কিটেকচার বেঞ্চমার্ক। ৩টি ডেডিকেটেড ন্যাট গেটওয়ে বিশিষ্ট একটি সহনশীল মাল্টি-এজেড সেটআপে প্রতিটি জোন স্থানীয়ভাবে ট্রাফিক পরিচালনা করে। যখন জোন ১ এ রাউটিং বিঘ্ন ঘটে ৮০০টি লেনদেন ক্ষতিগ্রস্ত হয়, তখন জোন ২ এবং জোন ৩ স্বাধীনভাবে চালু থাকে, যার ফলে ১৭০০টি লেনদেন কোনো প্যাকেট ড্রপ ছাড়াই সফলভাবে সম্পন্ন হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Internet Gateway (IGW)',
          def: {
            en: 'A managed VPC edge component performing bi-directional 1-to-1 static NAT for public instances possessing Elastic IPs.',
            bn: 'একটি ক্লাউড গেটওয়ে যা ইলাস্টিক আইপি যুক্ত পাবলিক সার্ভারের জন্য দ্বিমুখী ১-টু-১ স্ট্যাটিক ন্যাট রূপান্তর করে।',
          },
        },
        {
          term: 'NAT Gateway',
          def: {
            en: 'A managed cloud appliance performing 1-to-many Port Address Translation, granting private instances outbound internet access.',
            bn: 'একটি ক্লাউড সেবা যা পোর্ট অ্যাড্রেস ট্রান্সলেশন করে প্রাইভেট সার্ভারগুলোকে ইন্টারনেটে যাওয়ার একমুখী সুযোগ দেয়।',
          },
        },
        {
          term: 'Elastic IP (EIP)',
          def: {
            en: 'A static public IPv4 address allocated to your cloud account that persists across instance stop and start cycles.',
            bn: 'একটি স্থায়ী পাবলিক আইপি যা আপনার অ্যাকাউন্টে বরাদ্দ থাকে এবং সার্ভার রিস্টার্ট করলেও পরিবর্তন হয় না।',
          },
        },
        {
          term: 'Egress-Only Internet Gateway',
          def: {
            en: 'A stateful IPv6 gateway permitting outbound internet connections while preventing external internet clients from reaching private instances.',
            bn: 'একটি IPv6 গেটওয়ে যা প্রাইভেট সার্ভারকে ইন্টারনেটে যেতে দেয় কিন্তু বাইরের কোনো সংযোগ ভেতরে ঢুকতে দেয় না।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — TypeScript multi-AZ NAT failover simulator and billing comparison', bn: 'HOW — টাইপস্ক্রিপ্ট মাল্টি-এজেড ন্যাট ফেইলওভার সিমুলেটর ও খরচ বিশ্লেষণ' },
    },
    {
      type: 'para',
      text: {
        en: 'To observe why enterprise architectures deploy 1 dedicated NAT Gateway per Availability Zone rather than sharing a single gateway across zones, examine this simulation testing 2500 outbound transactions during a zone failure:',
        bn: 'এন্টারপ্রাইজ ক্লাউডে কেন প্রতিটি জোনে ১টি করে ন্যাট গেটওয়ে রাখা হয় এবং একটি গেটওয়ে শেয়ার করলে কী ক্ষতি হয় তা বুঝতে ২৫০০টি লেনদেনের এই টাইপস্ক্রিপ্ট সিমুলেটরটি পর্যালোচনা করুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'multi-az-nat-benchmark.ts',
      code: `interface OutboundTransaction {
  id: number;
  originZone: 'us-east-1a' | 'us-east-1b' | 'us-east-1c';
  destinationHost: string;
}

interface EgressReport {
  singleNatSuccessful: number;
  singleNatFailed: number;
  multiNatSuccessful: number;
  multiNatFailed: number;
  multiNatLatencyMs: number;
}

function benchmarkEgressTopology(transactions: OutboundTransaction[]): EgressReport {
  // Scenario: us-east-1a suffers an availability zone networking fault
  const failedZone = 'us-east-1a';

  // 1. Single Shared NAT Gateway placed in us-east-1a
  // If the single gateway fails, ALL 2500 transactions across the VPC fail!
  let singleSuccess = 0;
  let singleFails = 0;
  const singleNatLocation = 'us-east-1a';

  if (singleNatLocation === failedZone) {
    singleFails = transactions.length; // 2500 dropped!
  } else {
    singleSuccess = transactions.length;
  }

  // 2. Multi-AZ: 3 Dedicated NAT Gateways (one per zone)
  // Only transactions in us-east-1a fail; us-east-1b and us-east-1c continue 100%
  let multiSuccess = 0;
  let multiFails = 0;

  for (const tx of transactions) {
    if (tx.originZone === failedZone) {
      multiFails++; // 800 isolated to Zone 1
    } else {
      multiSuccess++; // 1700 succeed in Zone 2 & 3
    }
  }

  return {
    singleNatSuccessful: singleSuccess,
    singleNatFailed: singleFails,
    multiNatSuccessful: multiSuccess,
    multiNatFailed: multiFails,
    multiNatLatencyMs: 0.45,
  };
}

// Generate 2500 outbound transactions across 3 Availability Zones:
// 800 in Zone 1a, 850 in Zone 1b, 850 in Zone 1c
const transactions: OutboundTransaction[] = [];
for (let i = 0; i < 2500; i++) {
  const zone = i < 800 ? 'us-east-1a' : i < 1650 ? 'us-east-1b' : 'us-east-1c';
  transactions.push({ id: i, originZone: zone, destinationHost: 'api.stripe.com' });
}

const report = benchmarkEgressTopology(transactions);

console.log(\`Total Outbound Transactions: \${transactions.length}\`);
// Total Outbound Transactions: 2500
console.log(\`Single Shared NAT Failed: \${report.singleNatFailed} (100% Outage)\`);
// Single Shared NAT Failed: 2500 (100% Outage)
console.log(\`Multi-AZ Dedicated NAT Succeeded: \${report.multiNatSuccessful}\`);
// Multi-AZ Dedicated NAT Succeeded: 1700
console.log(\`Multi-AZ Isolated Failure Count: \${report.multiNatFailed}\`);
// Multi-AZ Isolated Failure Count: 800
console.log(\`Local Zone NAT Latency: \${report.multiNatLatencyMs} ms\`);
// Local Zone NAT Latency: 0.45 ms`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Cross-AZ Data Transfer Charges with Shared NAT Gateways', bn: 'শেয়ার্ড ন্যাট গেটওয়েতে ক্রস-জোন ডেটা ট্রান্সফার চার্জের ঝুঁকি' },
      text: {
        en: 'Deploying a single NAT Gateway to save the monthly hourly fee is often an expensive trap. If an application in Zone 2 sends 10 Terabytes of data to external APIs through a NAT Gateway in Zone 1, AWS bills cross-AZ data transfer fees in both directions. In high-traffic systems, the cross-AZ data charges vastly exceed the cost of running dedicated NAT Gateways in every zone.',
        bn: 'প্রতি মাসের সামান্য খরচ বাঁচাতে একটি মাত্র ন্যাট গেটওয়ে শেয়ার করা প্রায়শই মারাত্মক ব্যয়বহুল ফাঁদে পরিণত হয়। জোন ২ এর কোনো অ্যাপ যদি জোন ১ এর ন্যাট গেটওয়ে দিয়ে ১০ টেরাবাইট ডেটা পাঠায়, তবে ক্লাউড প্রোভাইডার আসা এবং যাওয়া উভয় পথেই ক্রস-জোন ফি কাটে। ভারী ট্রাফিকের ক্ষেত্রে এই ক্রস-জোন বিলের অঙ্ক প্রতিটি জোনে আলাদা ন্যাট গেটওয়ে রাখার খরচের চেয়ে বহুগুণ বেশি হয়।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Internet Gateway (IGW) vs NAT Gateway', bn: 'ইন্টারনেট গেটওয়ে (IGW) বনাম ন্যাট গেটওয়ে (NAT Gateway)' },
      left: {
        title: { en: 'Internet Gateway (IGW)', bn: 'ইন্টারনেট গেটওয়ে (IGW)' },
        points: [
          { en: 'Provides bi-directional communication (both inbound ingress and outbound egress)', bn: 'দ্বিমুখী যোগাযোগ দেয় (ভেতরে আসার ইনগ্রেস এবং বাইরে যাওয়ার এগ্রেস উভয়ই)' },
          { en: 'Requires instance to have a public IPv4 address or attached Elastic IP', bn: 'সার্ভারে একটি পাবলিক আইপি বা ইলাস্টিক আইপি যুক্ত থাকা আবশ্যক' },
          { en: 'Horizontally scaled and managed by the cloud fabric with zero hourly instance charges', bn: 'কোনো প্রতি ঘণ্টার ফিক্সড চার্জ ছাড়াই ক্লাউড নেটওয়ার্কে চরম গতিতে স্বয়ংক্রিয়ভাবে স্কেল করে' },
          { en: 'Used exclusively in Public Subnets (DMZ) for Application Load Balancers and public services', bn: 'কেবল পাবলিক সাবনেটে লোড ব্যালেন্সার এবং পাবলিক ওয়েব সার্ভারের জন্য ব্যবহৃত হয়' },
        ],
      },
      right: {
        title: { en: 'NAT Gateway (Managed)', bn: 'ম্যানেজড ন্যাট গেটওয়ে' },
        points: [
          { en: 'Provides one-way outbound egress only; blocks external inbound connections', bn: 'কেবল একমুখী বহির্গামী ট্রাফিক দেয়; বাইরের কারো সরাসরি ভেতরে ঢোকা বন্ধ রাখে' },
          { en: 'Translates thousands of private RFC 1918 instances behind a single public Elastic IP', bn: 'হাজার হাজার প্রাইভেট সার্ভারকে একটি মাত্র পাবলিক ইলাস্টিক আইপির আড়ালে পরিচালিত করে' },
          { en: 'Incurs an hourly appliance fee plus per-Gigabyte data processing charges', bn: 'নির্দিষ্ট ঘণ্টার ফি ছাড়াও প্রতি গিগাবাইট ডেটা প্রসেসিংয়ের জন্য চার্জ প্রযোজ্য হয়' },
          { en: 'Placed in a Public Subnet, acting as the default internet gateway for Private Subnets', bn: 'পাবলিক সাবনেটে অবস্থান করে প্রাইভেট সাবনেটের ডিফল্ট ইন্টারনেট গেটওয়ে হিসেবে কাজ করে' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Gateway Type', bn: 'গেটওয়ের ধরন' },
        { en: 'Directionality', bn: 'যোগাযোগের দিক' },
        { en: 'IP Translation', bn: 'আইপি রূপান্তর' },
        { en: 'Subnet Placement', bn: 'সাবনেট অবস্থান' },
        { en: 'Typical Workload', bn: 'সাধারণ ব্যবহার' },
      ],
      rows: [
        [
          { en: 'Internet Gateway (IGW)', bn: 'ইন্টারনেট গেটওয়ে' },
          { en: 'Bi-directional (In + Out)', bn: 'দ্বিমুখী (ভিতর ও বাহির)' },
          { en: '1-to-1 Static NAT', bn: '১-টু-১ স্ট্যাটিক ন্যাট' },
          { en: 'Attached to VPC border', bn: 'ভিপিসি বর্ডারে সংযুক্ত' },
          { en: 'ALB, Bastion Hosts, Public APIs', bn: 'লোড ব্যালেন্সার, পাবলিক ওয়েব' },
        ],
        [
          { en: 'NAT Gateway', bn: 'ন্যাট গেটওয়ে' },
          { en: 'Outbound only (Egress)', bn: 'কেবল বহির্গামী (এগ্রেস)' },
          { en: '1-to-Many PAT (Port NAT)', bn: '১-টু-মেনি পোর্ট ন্যাট' },
          { en: 'Public DMZ Subnet', bn: 'পাবলিক ডিএমজেড সাবনেট' },
          { en: 'Private container pods fetching npm', bn: 'প্রাইভেট সার্ভারের আপডেট ও কল' },
        ],
        [
          { en: 'Egress-Only IGW', bn: 'এগ্রেস-অনলি আইসিডব্লিউ' },
          { en: 'IPv6 Outbound only', bn: 'কেবল IPv6 বহির্গামী' },
          { en: 'No NAT (Native IPv6 route)', bn: 'ন্যাট নেই (স্বাভাবিক IPv6)' },
          { en: 'VPC IPv6 border', bn: 'ভিপিসি IPv6 বর্ডার' },
          { en: 'Dual-stack private Kubernetes pods', bn: 'ডুয়াল-স্ট্যাক কুবারনেটিস পড' },
        ],
      ],
      caption: {
        en: 'Architectural comparison of cloud internet gateways and address translation mechanisms.',
        bn: 'ক্লাউড ইন্টারনেট গেটওয়ে এবং নেটওয়ার্ক অ্যাড্রেস ট্রান্সলেশন কৌশলের তুলনামূলক ছক।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Attach Internet Gateway to VPC', bn: 'ধাপ ১ — ভিপিসিতে ইন্টারনেট গেটওয়ে যুক্ত করা' },
          text: {
            en: 'Create an Internet Gateway resource and attach it to your primary Virtual Private Cloud border.',
            bn: 'একটি ইন্টারনেট গেটওয়ে তৈরি করে আপনার মূল ভার্চুয়াল প্রাইভেট ক্লাউডের সাথে সংযুক্ত করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Allocate Elastic IPs for NAT', bn: 'ধাপ ২ — ন্যাটের জন্য ইলাস্টিক আইপি বরাদ্দ' },
          text: {
            en: 'Allocate a static Elastic IP in each Availability Zone where you plan to deploy a managed NAT Gateway.',
            bn: 'প্রতিটি অ্যাভেইলাবিলিটি জোনের জন্য একটি করে স্থায়ী পাবলিক ইলাস্টিক আইপি বরাদ্দ নিন।',
          },
        },
        {
          title: { en: 'Step 3 — Deploy 1 NAT Gateway per Zone', bn: 'ধাপ ৩ — প্রতি জোনে ১টি ন্যাট গেটওয়ে স্থাপন' },
          text: {
            en: 'Launch a managed NAT Gateway inside the public subnet of each zone to guarantee failure isolation.',
            bn: 'জোন আইসোলেশন নিশ্চিত করতে প্রতিটি জোনের পাবলিক সাবনেটে একটি করে ন্যাট গেটওয়ে চালু করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Update Private Route Tables', bn: 'ধাপ ৪ — প্রাইভেট রাউট টেবিল আপডেট করা' },
          text: {
            en: 'Point the 0.0.0.0/0 route in each private subnet route table to the NAT Gateway residing in its own zone.',
            bn: 'প্রতিটি প্রাইভেট সাবনেটের ডিফল্ট রুট 0.0.0.0/0 নিজস্ব জোনের ন্যাট গেটওয়ের দিকে নির্দেশ করুন।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'gtw-ex-1',
      kind: 'mcq',
      topic: 'nat-vs-igw-core-difference',
      question: {
        en: 'What is the primary difference in traffic directionality between an Internet Gateway and a NAT Gateway?',
        bn: 'ট্রাফিক চলাচলের দিকের ভিত্তিতে ইন্টারনেট গেটওয়ে এবং ন্যাট গেটওয়ের মধ্যে প্রধান পার্থক্য কী?',
      },
      options: [
        { en: 'An Internet Gateway allows bi-directional traffic (both ingress and egress), while a NAT Gateway permits one-way outbound egress only', bn: 'ইন্টারনেট গেটওয়ে দ্বিমুখী ট্রাফিক (ইনগ্রেস ও এগ্রেস উভয়ই) পরিচালনা করে, আর ন্যাট গেটওয়ে কেবল একমুখী বহির্গামী এগ্রেসের অনুমতি দেয়' },
        { en: 'An Internet Gateway is made out of wood while a NAT Gateway is made of steel', bn: 'ইন্টারনেট গেটওয়ে কাঠ দিয়ে তৈরি আর ন্যাট গেটওয়ে স্টিল দিয়ে তৈরি' },
        { en: 'A NAT Gateway increases the speed of light in fiber optic cables', bn: 'ন্যাট গেটওয়ে ফাইবার অপটিক ক্যাবলে আলোর গতি বাড়িয়ে দেয়' },
        { en: 'There is zero difference; both terms refer to the exact same cloud setting', bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই; দুটি শব্দ একই ক্লাউড সেটিংকে বোঝায়' },
      ],
      answer: 0,
      hint: { en: 'IGW is bi-directional; NAT Gateway is outbound only.', bn: 'IGW দ্বিমুখী; ন্যাট গেটওয়ে কেবল একমুখী বহির্গামী।' },
      explanation: {
        en: 'Internet Gateways allow both inbound connections and outbound responses, while NAT Gateways only permit outbound connections.',
        bn: 'ইন্টারনেট গেটওয়ে ভেতরে আসা ও বাইরে যাওয়া দুটোই সমর্থন করে, কিন্তু ন্যাট গেটওয়ে কেবল একমুখী বাইরে যাওয়ার পথ দেয়।',
      },
    },
    {
      id: 'gtw-ex-2',
      kind: 'mcq',
      topic: 'multi-az-nat-reason',
      question: {
        en: 'Why do production best practices dictate deploying one NAT Gateway per Availability Zone rather than sharing one across the entire VPC?',
        bn: 'পুরো ভিপিসিতে একটি মাত্র ন্যাট গেটওয়ে শেয়ার না করে প্রতিটি অ্যাভেইলাবিলিটি জোনে একটি করে গেটওয়ে রাখার সেরা অনুশীলন কেন মানা হয়?',
      },
      options: [
        { en: 'To avoid cross-AZ data transfer fees and prevent an outage in one zone from terminating internet connectivity across the entire VPC', bn: 'ক্রস-জোন ডাটা ট্রান্সফার ফি এড়াতে এবং একটি জোনের বিপর্যয়ে পুরো ভিপিসির ইন্টারনেট বন্ধ হওয়া রোধ করতে' },
        { en: 'Because cloud providers only allow computers to use NAT Gateways on weekdays', bn: 'কারণ ক্লাউড প্রোভাইডাররা কেবল কাজের দিনগুলোতে কম্পিউটারকে ন্যাট ব্যবহারের অনুমতি দেয়' },
        { en: 'To make the cloud management console display extra blue buttons', bn: 'ক্লাউড ম্যানেজমেন্ট কনসোলে অতিরিক্ত নীল বাটন দেখানোর জন্য' },
        { en: 'Because NAT Gateways delete themselves if more than two computers connect to them', bn: 'কারণ দুটির বেশি কম্পিউটার যুক্ত হলে ন্যাট গেটওয়ে নিজে থেকেই মুছে যায়' },
      ],
      answer: 0,
      hint: { en: 'Failure isolation and eliminating cross-AZ data transfer charges.', bn: 'ত্রুটি বিচ্ছিন্ন রাখা এবং ক্রস-জোন ডেটা চার্জ দূর করা।' },
      explanation: {
        en: 'Deploying per-zone NAT gateways isolates failures and eliminates expensive inter-zone data transfer costs.',
        bn: 'প্রতি জোনে আলাদা ন্যাট গেটওয়ে রাখলে এক জোনের সমস্যা অন্য জোনে ছড়ায় না এবং অতিরিক্ত ডাটা খরচ বাঁচে।',
      },
    },
    {
      id: 'gtw-ex-3',
      kind: 'predict',
      topic: 'unaffected-zone-transactions',
      question: {
        en: 'In our benchmark of 2500 transactions, how many transactions in unaffected zones continued smoothly when Zone 1 failed (e.g. 1700 )?',
        bn: '২৫০০টি লেনদেনের বেঞ্চমার্কে জোন ১ বিকল হলেও অক্ষত জোনের কতগুলো লেনদেন নির্বিঘ্নে সম্পন্ন হয়েছিল (যেমন 1700 )?',
      },
      answer: '1700',
      accept: ['1700', '1700 transactions', 'seventeen hundred'],
      hint: { en: '1700', bn: '1700' },
      explanation: {
        en: 'With dedicated NAT gateways in each zone, the 1700 transactions in Zone 2 and Zone 3 continued with zero interruption.',
        bn: 'প্রতি জোনে আলাদা গেটওয়ে থাকায় জোন ২ ও জোন ৩ এর ১৭০০টি লেনদেন কোনো বিঘ্ন ছাড়াই সফলভাবে সম্পন্ন হয়েছিল।',
      },
    },
    {
      id: 'gtw-ex-4',
      kind: 'predict',
      topic: 'igw-acronym-meaning',
      question: {
        en: 'What 3 letter uppercase acronym represents the AWS Internet Gateway component (e.g. IGW)?',
        bn: 'এডাব্লিউএস ইন্টারনেট গেটওয়ে উপাদান নির্দেশকারী ৩ অক্ষরের ইংরেজি সংক্ষিপ্ত রূপটি কী (যেমন IGW)?',
      },
      answer: 'IGW',
      accept: ['IGW', 'igw'],
      hint: { en: 'IGW', bn: 'IGW' },
      explanation: {
        en: 'IGW stands for Internet Gateway, the horizontally scalable VPC component connecting public instances to the internet.',
        bn: 'IGW মানে Internet Gateway, যা পাবলিক ইনস্ট্যান্সগুলোকে সরাসরি ইন্টারনেটের সাথে যুক্ত করে।',
      },
    },
  ],
  quiz: {
    id: 'gateways-and-the-gateway-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'gtw-qz-1',
        kind: 'mcq',
        topic: 'elastic-ip-persistence',
        question: {
          en: 'What distinguishes an Elastic IP (EIP) from a standard auto-assigned public IP address in cloud networking?',
          bn: 'ক্লাউড নেটওয়ার্কিংয়ে সাধারণ অটো-অ্যাসাইনড পাবলিক আইপির তুলনায় একটি ইলাস্টিক আইপির (EIP) বিশেষত্ব কী?',
        },
        options: [
          { en: 'An Elastic IP is a static, persistent public IP allocated to your cloud account that does not change when instances are stopped and restarted', bn: 'একটি ইলাস্টিক আইপি হলো স্থায়ী পাবলিক আইপি যা আপনার অ্যাকাউন্টে সংরক্ষিত থাকে এবং সার্ভার বন্ধ করে চালু করলেও পরিবর্তিত হয় না' },
          { en: 'An Elastic IP changes its numeric digits every sixty seconds for security', bn: 'নিরাপত্তার জন্য একটি ইলাস্টিক আইপি প্রতি ৬০ সেকেন্ডে তার সংখ্যা বদলে ফেলে' },
          { en: 'An Elastic IP only works on computers located in the North Pole', bn: 'একটি ইলাস্টিক আইপি কেবল উত্তর মেরুতে অবস্থিত কম্পিউটারে কাজ করে' },
          { en: 'An Elastic IP eliminates the need for computer RAM memory', bn: 'একটি ইলাস্টিক আইপি কম্পিউটারের র্যাম মেমরির প্রয়োজনীয়তা দূর করে দেয়' },
        ],
        answer: 0,
        hint: { en: 'Static, persistent public IP allocated to your account.', bn: 'আপনার অ্যাকাউন্টে বরাদ্দকৃত একটি স্থায়ী পাবলিক আইপি।' },
        explanation: {
          en: 'Standard public IPs are released upon instance stop, whereas Elastic IPs stay persistently allocated to your account.',
          bn: 'সাধারণ পাবলিক আইপি সার্ভার বন্ধ করলেই হারিয়ে যায়, কিন্তু ইলাস্টিক আইপি স্থায়ীভাবে আপনার অ্যাকাউন্টে সংরক্ষিত থাকে।',
        },
      },
      {
        id: 'gtw-qz-2',
        kind: 'mcq',
        topic: 'nat-cross-az-cost-trap',
        question: {
          en: 'Why is routing all private subnet traffic through a single NAT Gateway located in another Availability Zone financially dangerous?',
          bn: 'অন্য একটি অ্যাভেইলাবিলিটি জোনের একক ন্যাট গেটওয়ের ওপর দিয়ে সমস্ত প্রাইভেট ট্রাফিক পাঠানো কেন আর্থিকভাবে বিপজ্জনক?',
        },
        options: [
          { en: 'Cloud providers bill data transfer fees in both directions whenever traffic crosses Availability Zone boundaries, creating massive unexpected bills', bn: 'ট্রাফিক যখনই জোন সীমানা অতিক্রম করে তখনই ক্লাউড প্রদানকারী উভয় পথেই ক্রস-জোন ফি কাটে, যা বিশাল অপ্রত্যাশিত বিল তৈরি করে' },
          { en: 'Because banks cancel corporate credit cards whenever NAT Gateways are deployed', bn: 'কারণ ন্যাট গেটওয়ে তৈরি করলেই ব্যাংক করপোরেট ক্রেডিট কার্ড বাতিল করে দেয়' },
          { en: 'Because single NAT Gateways cause database software licenses to expire immediately', bn: 'কারণ একক ন্যাট গেটওয়ের কারণে ডেটাবেজ সফটওয়্যার লাইসেন্স তৎক্ষণাৎ বাতিল হয়ে যায়' },
          { en: 'Because cross-zone traffic converts all image files into plain text', bn: 'কারণ ক্রস-জোন ট্রাফিক সমস্ত ছবির ফাইলকে প্লেইন টেক্সটে রূপান্তর করে ফেলে' },
        ],
        answer: 0,
        hint: { en: 'Cross-AZ data transfer fees in both directions.', bn: 'উভয় পথেই ক্রস-জোন ডেটা ট্রান্সফার চার্জ।' },
        explanation: {
          en: 'Inter-AZ data transfer is metered and charged, quickly exceeding the small hourly fee of running multiple NAT gateways.',
          bn: 'ক্রস-জোন ট্রাফিকের জন্য বাড়তি ফি দিতে হয়, যা প্রতিটি জোনে আলাদা গেটওয়ে রাখার খরচের চেয়ে দ্রুত অনেক বেড়ে যায়।',
        },
      },
      {
        id: 'gtw-qz-3',
        kind: 'mcq',
        topic: 'egress-only-igw-purpose',
        question: {
          en: 'What type of special gateway allows IPv6 instances in private subnets to initiate outbound internet connections without accepting inbound connections?',
          bn: 'কোন বিশেষ ধরনের গেটওয়ে প্রাইভেট সাবনেটের IPv6 ইনস্ট্যান্সগুলোকে ইনবাউন্ড সংযোগ গ্রহণ না করেই কেবল আউটবাউন্ড ইন্টারনেট সংযোগ শুরু করার অনুমতি দেয়?',
        },
        options: [
          { en: 'An Egress-Only Internet Gateway, which prevents external internet clients from initiating connections to private IPv6 addresses', bn: 'একটি এগ্রেস-অনলি ইন্টারনেট গেটওয়ে, যা বাইরের ইন্টারনেট ক্লায়েন্টকে প্রাইভেট IPv6 অ্যাড্রেসে নতুন সংযোগ শুরু করতে বাধা দেয়' },
          { en: 'A USB modem attached to the server chassis', bn: 'সার্ভার কেসিংয়ে লাগানো একটি সাধারণ ইউএসবি মডেম' },
          { en: 'A Bluetooth audio transmitter configured for Ethernet', bn: 'ইথারনেটের জন্য কনফিগার করা একটি ব্লুটুথ অডিও ট্রান্সমিটার' },
          { en: 'An optical CD-ROM burner running network scripts', bn: 'নেটওয়ার্ক স্ক্রিপ্ট পরিচালনাকারী একটি অপটিক্যাল সিডি-রম ড্রাইভ' },
        ],
        answer: 0,
        hint: { en: 'Egress-Only Internet Gateway for IPv6.', bn: 'IPv6 এর জন্য এগ্রেস-অনলি ইন্টারনেট গেটওয়ে।' },
        explanation: {
          en: 'Because IPv6 has no NAT, the Egress-Only Internet Gateway enforces one-way stateful egress security.',
          bn: 'IPv6-এ কোনো ন্যাট নেই বলে এগ্রেস-অনলি ইন্টারনেট গেটওয়ে একমুখী স্টেটফুল বহির্গামী নিরাপত্তা নিশ্চিত করে।',
        },
      },
      {
        id: 'gtw-qz-4',
        kind: 'predict',
        topic: 'nat-gateways-recommended-count',
        question: {
          en: 'How many dedicated NAT Gateways should be provisioned across a 3 Availability Zone enterprise VPC for full fault isolation (e.g. 3 )?',
          bn: 'পূর্ণাঙ্গ ত্রুটি বিচ্ছিন্নতার জন্য ৩টি অ্যাভেইলাবিলিটি জোনের এন্টারপ্রাইজ ভিপিসিতে কতটি ডেডিকেটেড ন্যাট গেটওয়ে রাখা উচিত (যেমন 3 )?',
        },
        answer: '3',
        accept: ['3', 'three', '3 NAT gateways'],
        hint: { en: '3', bn: '3' },
        explanation: {
          en: 'Deploying 1 NAT Gateway per Availability Zone (3 total) guarantees complete zone failure independence.',
          bn: 'প্রতিটি জোনে ১টি করে সর্বমোট ৩টি ন্যাট গেটওয়ে বসালে কোনো জোনের সমস্যা অন্য জোনে ছড়াতে পারে না।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'firewalls-and-the-firewall',
    title: {
      en: 'Security Groups and Network ACLs: Stateful Defense-in-Depth and Packet Filtering',
      bn: 'সিকিউরিটি গ্রুপ ও নেটওয়ার্ক এসিএল: স্টেটফুল বহুমাত্রিক নিরাপত্তা ও প্যাকেট ফিল্টারিং',
    },
  },
};
