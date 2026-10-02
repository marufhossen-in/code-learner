import type { Lesson } from '../../../lib/types';

export const RobinsAndTheRobinLesson: Lesson = {
  slug: 'robins-and-the-robin',
  tech: 'load-balancing',
  title: {
    en: 'Round-Robin and Weighted Balancers: Cyclic Scheduling and Hardware Capacities',
    bn: 'রাউন্ড-রবিন ও ওজনযুক্ত ব্যালেন্সার: চক্রাকার শিডিউলিং ও হার্ডওয়্যার সক্ষমতা',
  },
  summary: {
    en: 'Master Round-Robin and Smooth Weighted Round-Robin load balancing algorithms. Benchmark 1800 requests dispatched across 3 servers with unequal hardware capacities (weights 3, 2, and 1 ). Pure cyclic rotation forces 600 queries onto every node, overtaxing smaller machines. Smooth weighted rotation gracefully allots 900 requests to Node A, 600 to Node B, and 300 to Node C without burst clustering.',
    bn: 'রাউন্ড-রবিন এবং স্মুথ ওয়েটেড রাউন্ড-রবিন লোড ব্যালেন্সিং অ্যালগরিদমের বিশদ পর্যালোচনা। ৩টি ভিন্ন সক্ষমতার সার্ভারে (ওজন যথাক্রমে ৩, ২ এবং ১ ) ১৮০০টি রিকোয়েস্ট বিতরণের বেঞ্চমার্ক। সাধারণ চক্রাকার আবর্তন প্রতিটি সার্ভারকে সমহারে ৬০০টি রিকোয়েস্ট দিয়ে দুর্বল সার্ভারে অতিরিক্ত চাপ তৈরি করে, কিন্তু স্মুথ ওয়েটেড অ্যালগরিদম নোড A তে ৯০০টি, নোড B তে ৬০০টি এবং নোড C তে ৩০০টি রিকোয়েস্ট সমভাবে বিতরণ করে সার্ভার স্পাইক দূর করে।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Cyclic rotation and proportional weight distribution', bn: 'WHAT — চক্রাকার আবর্তন এবং আনুপাতিক ওজন বণ্টন' },
    },
    {
      type: 'para',
      text: {
        en: 'When distributing traffic across your backend cluster, you can use Round-Robin as your primary baseline. In this model, the dispatcher treats upstream backend targets as a circular array, assigning each incoming connection to the next available worker in fixed sequential order. While ideal for identical workloads across homogeneous hardware nodes, pure cyclic rotation breaks down when servers differ in CPU cores or memory capacity. Weighted Round-Robin resolves this disparity by assigning numeric multipliers to each host, directing proportionally more connections to high-capacity machines while preventing resource exhaustion on smaller nodes.',
        bn: 'আপনার ক্লাস্টারে ট্রাফিক বিতরণের ক্ষেত্রে আপনি রাউন্ড-রবিনকে প্রাথমিক ভিত্তি হিসেবে ব্যবহার করতে পারেন। এর মৌলিক রূপরেখায় ডিসপ্যাচার পেছনের সব সার্ভারকে একটি চক্রাকার সারির মতো বিবেচনা করে ক্রমানুসারে প্রতিটি নতুন রিকোয়েস্ট বরাদ্দ করে। সব সার্ভারের হার্ডওয়্যার ও প্রতিটি কাজের চাপ সমান হলে এটি চমৎকার কাজ করে, কিন্তু মেশিনের সিপিইউ বা র্যামের সক্ষমতায় পার্থক্য থাকলে সমস্যা দেখা দেয়। ওয়েটেড রাউন্ড-রবিন প্রতিটি হোস্টে নির্দিষ্ট সংখ্যাসূচক ওজন যুক্ত করে এই সমস্যার সমাধান করে, যার ফলে শক্তিশালী নোড বেশি কাজ পায় এবং দুর্বল নোড অতিরিক্ত চাপ থেকে সুরক্ষিত থাকে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Smooth Weighted Round-Robin distribution: 1800 queries across 3 servers', bn: 'স্মুথ ওয়েটেড রাউন্ড-রবিন ট্রাফিক বিতরণ: ৩টি সার্ভারে ১৮০০টি কুয়েরি' },
      svg: `<svg viewBox="0 0 640 250" font-family="system-ui, sans-serif" role="img" aria-label="Round-robin and weighted load balancing diagram">
<rect x="20" y="30" width="130" height="180" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="1.5"/>
<text x="85" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Client Queries</text>
<text x="85" y="75" text-anchor="middle" font-size="9" fill="#475569">1800 Requests</text>

<rect x="30" y="105" width="110" height="40" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="85" y="123" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Arrival Stream</text>
<text x="85" y="136" text-anchor="middle" font-size="7" fill="#475569">Continuous Load</text>

<line x1="150" y1="120" x2="200" y2="120" stroke="#2563eb" stroke-width="2"/>
<polygon points="200,116 210,120 200,124" fill="#2563eb"/>

<rect x="210" y="25" width="200" height="195" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="310" y="48" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Nginx Smooth Dispatcher</text>

<rect x="225" y="65" width="170" height="42" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="82" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Interleaved Cadence</text>
<text x="310" y="96" text-anchor="middle" font-size="8" fill="#15803d">A &rarr; B &rarr; A &rarr; C &rarr; B &rarr; A</text>

<rect x="225" y="125" width="170" height="42" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="310" y="142" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Weight Ratios: 3 : 2 : 1</text>
<text x="310" y="156" text-anchor="middle" font-size="7" fill="#15803d">Total Cycle Weight = 6</text>

<line x1="410" y1="75" x2="460" y2="60" stroke="#16a34a" stroke-width="1.5"/>
<polygon points="460,57 470,60 461,64" fill="#16a34a"/>
<line x1="410" y1="120" x2="460" y2="120" stroke="#16a34a" stroke-width="1.5"/>
<polygon points="460,116 470,120 460,124" fill="#16a34a"/>
<line x1="410" y1="165" x2="460" y2="180" stroke="#16a34a" stroke-width="1.5"/>
<polygon points="461,176 470,180 460,183" fill="#16a34a"/>

<rect x="470" y="30" width="150" height="180" rx="6" fill="#fafafa" stroke="#64748b" stroke-width="1.5"/>
<text x="545" y="50" text-anchor="middle" font-size="10" font-weight="800" fill="#334155">Server Fleet</text>

<rect x="480" y="60" width="130" height="34" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="545" y="74" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">Node A (8 vCPUs, w=3)</text>
<text x="545" y="86" text-anchor="middle" font-size="7" fill="#15803d">900 queries (50.0%)</text>

<rect x="480" y="104" width="130" height="34" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="545" y="118" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">Node B (4 vCPUs, w=2)</text>
<text x="545" y="130" text-anchor="middle" font-size="7" fill="#15803d">600 queries (33.3%)</text>

<rect x="480" y="148" width="130" height="34" rx="3" fill="#eff6ff" stroke="#3b82f6" stroke-width="1"/>
<text x="545" y="162" text-anchor="middle" font-size="7" font-weight="700" fill="#1d4ed8">Node C (2 vCPUs, w=1)</text>
<text x="545" y="174" text-anchor="middle" font-size="7" fill="#15803d">300 queries (16.7%)</text>

<text x="320" y="238" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">1800 queries: Node A takes 900, Node B takes 600, Node C takes 300 smoothly</text>
</svg>`,
      caption: {
        en: 'Smooth Weighted Round-Robin benchmark: 1800 client requests reach the dispatcher. With configured weights 3, 2, and 1 , the smooth algorithm interleaves traffic across the 3 nodes: Node A receives 900 queries, Node B handles 600 queries, and Node C processes 300 queries. Naive round-robin would have forced 600 requests onto Node C, overwhelming its 2 CPU cores.',
        bn: 'স্মুথ ওয়েটেড রাউন্ড-রবিন বেঞ্চমার্ক: ডিসপ্যাচারে ১৮০০টি ক্লায়েন্ট রিকোয়েস্ট পৌঁছায়। ৩, ২ এবং ১ ওজন কনফিগার করায় স্মুথ অ্যালগরিদম ৩টি নোডের মধ্যে ভারসাম্য রেখে ট্রাফিক পাঠায়: নোড A পায় ৯০০টি কুয়েরি, নোড B পায় ৬০০টি কুয়েরি এবং নোড C সামলায় ৩০০টি কুয়েরি। গতানুগতিক রাউন্ড-রবিন নোড C এর ২ সিপিইউ কোরের ওপর সমহারে ৬০০টি কাজের বোঝা চাপিয়ে তাকে বিকল করে দিত।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Round-Robin',
          def: {
            en: 'Pure cyclic routing assigning incoming requests to backend servers sequentially one after another in circular sequence.',
            bn: 'বিশুদ্ধ চক্রাকার রাউটিং পদ্ধতি যা পেছনের সার্ভারগুলোতে ক্রমানুসারে একের পর এক রিকোয়েস্ট পাঠায়।',
          },
        },
        {
          term: 'Weighted Round-Robin',
          def: {
            en: 'An extension where nodes with higher hardware capacity receive proportionally more requests in each rotation cycle.',
            bn: 'একটি বর্ধিত সংস্করণ যেখানে উচ্চ ক্ষমতাসম্পন্ন সার্ভার প্রতিটি চক্রে সংখ্যানুপাতে বেশি রিকোয়েস্ট পায়।',
          },
        },
        {
          term: 'Smooth Interleaving',
          def: {
            en: 'A scheduling technique that spaces out high-weight server assignments (e.g. A, B, A, C, B, A) to prevent burst clusters.',
            bn: 'একটি শিডিউলিং কৌশল যা উচ্চ ওজনের সার্ভারের কাজগুলোকে সারিতে ছড়িয়ে দেয় যাতে কোনো সার্ভারে হঠাৎ জট তৈরি না হয়।',
          },
        },
        {
          term: 'Convoy Effect',
          def: {
            en: 'A queue pathology where rapid lightweight tasks get blocked behind a single slow compute job in round-robin queues.',
            bn: 'একটি সারিবদ্ধ জটিলতা যেখানে একটি ধীরগতির দীর্ঘ কাজের পেছনে দ্রুতগতির ছোট কাজগুলো আটকে দীর্ঘ বিলম্ব তৈরি করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Nginx smooth weighted round-robin TypeScript simulator', bn: 'HOW — এনজিনএক্স স্মুথ ওয়েটেড রাউন্ড-রবিন টাইপস্ক্রিপ্ট সিমুলেটর' },
    },
    {
      type: 'para',
      text: {
        en: 'A common mistake in custom load balancers is executing simple weighted round robin naively: sending 3 requests to A, then 2 to B, then 1 to C (yielding AAA-BB-C). That pattern hammers server A with an aggressive burst. Nginx uses a smooth weighted algorithm that increments dynamic weights and decrements total weight on selection, yielding perfectly interleaved flow (A, B, A, C, B, A). Test the code below across 1800 requests:',
        bn: 'কাস্টম লোড ব্যালেন্সার তৈরির সময় একটি সাধারণ ভুল হলো সরাসরি ওয়েটেড রাউন্ড-রবিন প্রয়োগ করা: নোড A কে টানা ৩টি, B কে ২টি এবং C কে ১টি রিকোয়েস্ট পাঠানো (AAA-BB-C)। এর ফলে নোড A এর ওপর হঠাৎ মারাত্মক ট্রাফিক স্পাইক তৈরি হয়। এনজিনএক্স একটি স্মুথ অ্যালগরিদম ব্যবহার করে যা গতিশীল ওজন বাড়িয়ে নিখুঁতভাবে রিকোয়েস্টগুলোকে ছড়িয়ে দেয় (A, B, A, C, B, A)। ১৮০০টি রিকোয়েস্টে নিচের কোডটি যাচাই করে দেখুন:',
      },
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'smooth-wrr-benchmark.ts',
      code: `interface UpstreamNode {
  name: string;
  weight: number;
  currentWeight: number;
  handledCount: number;
}

function runSmoothWeightedRoundRobin(totalRequests: number): {
  sequence: string[];
  counts: Record<string, number>;
} {
  const nodes: UpstreamNode[] = [
    { name: 'Node-A', weight: 3, currentWeight: 0, handledCount: 0 },
    { name: 'Node-B', weight: 2, currentWeight: 0, handledCount: 0 },
    { name: 'Node-C', weight: 1, currentWeight: 0, handledCount: 0 },
  ];

  const totalWeight = nodes.reduce((sum, n) => sum + n.weight, 0);
  const sequence: string[] = [];

  for (let req = 0; req < totalRequests; req++) {
    // Step 1: Add configured weight to dynamic currentWeight for each node
    for (const node of nodes) {
      node.currentWeight += node.weight;
    }

    // Step 2: Select node with highest currentWeight
    let bestNode = nodes[0];
    for (const node of nodes) {
      if (node.currentWeight > bestNode.currentWeight) {
        bestNode = node;
      }
    }

    // Step 3: Decrement total weight from selected node
    bestNode.currentWeight -= totalWeight;
    bestNode.handledCount++;

    if (req < 6) {
      sequence.push(bestNode.name);
    }
  }

  const counts: Record<string, number> = {};
  for (const n of nodes) {
    counts[n.name] = n.handledCount;
  }

  return { sequence, counts };
}

const { sequence, counts } = runSmoothWeightedRoundRobin(1800);

console.log(\`First 6 dispatches: \${sequence.join(' -> ')}\`);
// First 6 dispatches: Node-A -> Node-B -> Node-A -> Node-C -> Node-B -> Node-A

console.log(\`Node-A handled: \${counts['Node-A']}\`);
// Node-A handled: 900
console.log(\`Node-B handled: \${counts['Node-B']}\`);
// Node-B handled: 600
console.log(\`Node-C handled: \${counts['Node-C']}\`);
// Node-C handled: 300`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Configuring Smooth Weighted Upstreams in Nginx', bn: 'এনজিনএক্সে স্মুথ ওয়েটেড আপস্ট্রিম কনফিগারেশন' },
      text: {
        en: 'In Nginx, weighted round-robin is active whenever weights are specified inside an upstream block: upstream backend_cluster { server alpha.net weight=3; server beta.net weight=2; server gamma.net weight=1; }. Nginx automatically applies its smooth interleaving algorithm without needing third-party modules.',
        bn: 'এনজিনএক্সে আপস্ট্রিম ব্লকে ওজন নির্দেশ করলেই স্বয়ংক্রিয়ভাবে স্মুথ ওয়েটেড রাউন্ড-রবিন সক্রিয় হয়: upstream backend_cluster { server alpha.net weight=3; server beta.net weight=2; server gamma.net weight=1; }। অতিরিক্ত কোনো মডিউল ছাড়াই এনজিনএক্স নিজস্ব স্মুথ শিডিউলিং প্রয়োগ করে।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Basic Round-Robin vs Smooth Weighted Round-Robin', bn: 'সাধারণ রাউন্ড-রবিন বনাম স্মুথ ওয়েটেড রাউন্ড-রবিন' },
      left: {
        title: { en: 'Pure Round-Robin', bn: 'বিশুদ্ধ রাউন্ড-রবিন' },
        points: [
          { en: 'Assumes all backend nodes have identical CPU, memory, and disk IO capacity', bn: 'ধরে নেয় প্রতিটি ব্যাকএন্ড সার্ভারের সিপিইউ, মেমরি ও ডিস্কের ক্ষমতা সমান' },
          { en: 'Splits 1800 requests into flat 600, 600, 600 allotments regardless of machine size', bn: 'সার্ভারের আকার বিবেচনা না করেই ১৮০০টি কাজকে ৬০০, ৬০০, ৬০০ আকারে ভাগ করে' },
          { en: 'Causes memory exhaustion and CPU saturation on smaller cloud instances', bn: 'ছোট ক্লাউড ইনস্ট্যান্সগুলোতে মেমরি সংকট ও সিপিইউ ক্র্যাশ ঘটায়' },
          { en: 'Requires no initial capacity calibration or weight calculation', bn: 'প্রাথমিক সক্ষমতা পরিমাপ বা ওজন নির্ধারণের প্রয়োজন হয় না' },
        ],
      },
      right: {
        title: { en: 'Smooth Weighted Round-Robin', bn: 'স্মুথ ওয়েটেড রাউন্ড-রবিন' },
        points: [
          { en: 'Accepts proportional weights matching actual hardware specifications', bn: 'প্রকৃত হার্ডওয়্যার স্পেসিফিকেশন অনুযায়ী সংখ্যানুপাতিক ওজন গ্রহণ করে' },
          { en: 'Allots 900 queries to Node A, 600 to Node B, and 300 to Node C', bn: 'নোড A কে ৯০০টি, নোড B কে ৬০০টি এবং নোড C কে ৩০০টি কুয়েরি বরাদ্দ করে' },
          { en: 'Interleaves assignments evenly (A, B, A, C, B, A) to prevent localized micro-bursts', bn: 'মাইক্রো-স্পাইক রোধ করতে কাজগুলোকে নিখুঁতভাবে সারিতে ছড়িয়ে দেয় (A, B, A, C, B, A)' },
          { en: 'Ensures full cluster utilization without overwhelming low-spec edge nodes', bn: 'দুর্বল নোডগুলোকে অতিরিক্ত চাপ না দিয়ে ক্লাস্টারের সর্বোচ্চ ব্যবহার নিশ্চিত করে' },
        ],
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Server Node', bn: 'সার্ভার নোড' },
        { en: 'vCPU Cores', bn: 'সিপিইউ কোর' },
        { en: 'Configured Weight', bn: 'নির্ধারিত ওজন' },
        { en: 'Smooth WRR Quota (1800 req)', bn: 'স্মুথ কোটা (১৮০০ রিকোয়েস্ট)' },
        { en: 'Pure RR Quota (Unweighted)', bn: 'সাধারণ কোটা (ওজনহীন)' },
      ],
      rows: [
        [
          { en: 'Node A (High spec)', bn: 'নোড A (উচ্চ সক্ষমতা)' },
          { en: '8 Cores', bn: '৮ কোর' },
          { en: '3', bn: '৩' },
          { en: '900 (50.0%)', bn: '৯০০ (৫০.০%)' },
          { en: '600 (33.3%)', bn: '৬০০ (৩৩.৩%)' },
        ],
        [
          { en: 'Node B (Mid spec)', bn: 'নোড B (মাঝারি সক্ষমতা)' },
          { en: '4 Cores', bn: '৪ কোর' },
          { en: '2', bn: '২' },
          { en: '600 (33.3%)', bn: '৬০০ (৩৩.৩%)' },
          { en: '600 (33.3%)', bn: '৬০০ (৩৩.৩%)' },
        ],
        [
          { en: 'Node C (Low spec)', bn: 'নোড C (কম সক্ষমতা)' },
          { en: '2 Cores', bn: '২ কোর' },
          { en: '1', bn: '১' },
          { en: '300 (16.7%)', bn: '৩০০ (১৬.৭%)' },
          { en: '600 (33.3% - Crash danger)', bn: '৬০০ (৩৩.৩% - ক্র্যাশ ঝুঁকি)' },
        ],
      ],
      caption: {
        en: 'Quota allocation under smooth weighted round-robin versus naive unweighted round-robin.',
        bn: 'স্মুথ ওয়েটেড রাউন্ড-রবিন বনাম সাধারণ ওজনহীন রাউন্ড-রবিনে কাজের কোটা বণ্টনের তুলনা।',
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Step 1 — Audit Node Hardware Profiles', bn: 'ধাপ ১ — নোড হার্ডওয়্যার স্পেসিফিকেশন অডিট' },
          text: {
            en: 'Record the vCPU count, memory capacity, and network bandwidth of each server in your upstream pool.',
            bn: 'আপনার আপস্ট্রিম পুলের প্রতিটি সার্ভারের সিপিইউ সংখ্যা, র্যাম ও ব্যান্ডউইথ পরিমাপ করুন।',
          },
        },
        {
          title: { en: 'Step 2 — Calculate Relative Weight Ratios', bn: 'ধাপ ২ — আপেক্ষিক ওজনের অনুপাত নির্ধারণ' },
          text: {
            en: 'Reduce the hardware metrics to small whole integers (e.g. 8 cores to 3, 4 cores to 2, 2 cores to 1).',
            bn: 'হার্ডওয়্যার সক্ষমতাকে ছোট পূর্ণসংখ্যার অনুপাতে রূপান্তর করুন (যেমন ৮ কোরের জন্য ৩, ৪ কোরের জন্য ২, ২ কোরের জন্য ১)।',
          },
        },
        {
          title: { en: 'Step 3 — Deploy Upstream Configuration', bn: 'ধাপ ৩ — আপস্ট্রিম কনফিগারেশন স্থাপন' },
          text: {
            en: 'Configure the weight directive on each server entry inside your load balancer upstream configuration block.',
            bn: 'লোড ব্যালেন্সার কনফিগারেশনে প্রতিটি সার্ভার এন্ট্রির পাশে নির্ধারিত ওজন যোগ করুন।',
          },
        },
        {
          title: { en: 'Step 4 — Verify Smooth Interleaving Under Load', bn: 'ধাপ ৪ — কাজের চাপে মসৃণ বিস্তার পরীক্ষা' },
          text: {
            en: 'Execute load tests to confirm that incoming queries interleave across nodes without creating localized micro-bursts.',
            bn: 'লোড টেস্ট চালিয়ে নিশ্চিত করুন যে কাজগুলো ক্লাস্টারে সমভাবে ছড়িয়ে পড়ছে এবং কোনো সার্ভারে হঠাৎ জট হচ্ছে না।',
          },
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'rob-ex-1',
      kind: 'mcq',
      topic: 'round-robin-assumption',
      question: {
        en: 'What fundamental assumption does unweighted Round-Robin make about incoming requests and backend servers?',
        bn: 'সাধারণ ওজনহীন রাউন্ড-রবিন অ্যালগরিদম ইনকামিং রিকোয়েস্ট এবং ব্যাকএন্ড সার্ভার সম্পর্কে কোন মৌলিক অনুমান করে?',
      },
      options: [
        { en: 'That all incoming requests require identical processing resources and all backend servers possess identical hardware capacity', bn: 'সব ইনকামিং রিকোয়েস্টে সমান প্রসেসিং ক্ষমতা লাগে এবং সব সার্ভারের হার্ডওয়্যার ক্ষমতা সম্পূর্ণ সমান' },
        { en: 'That every server operates in a different physical time zone', bn: 'প্রতিটি সার্ভার আলাদা ভৌগোলিক টাইম জোনে অবস্থান করে' },
        { en: 'That all internet users speak the exact same human language', bn: 'ইন্টারনেট ব্যবহারকারী সবাই একই মানবীয় ভাষায় কথা বলে' },
        { en: 'That computer keyboards only contain uppercase letters', bn: 'কম্পিউটার কিবোর্ডে কেবল বড় হাতের বর্ণমালা থাকে' },
      ],
      answer: 0,
      hint: { en: 'Identical requests and identical server capacities.', bn: 'সমান রিকোয়েস্ট ও সমান সার্ভার সক্ষমতা।' },
      explanation: {
        en: 'Pure round-robin ignores hardware specs and request latency, assuming all nodes and tasks are identical.',
        bn: 'সাধারণ রাউন্ড-রবিন কোনো হার্ডওয়্যার স্পেক বা প্রসেসিং সময়ের পার্থক্য না দেখেই সবাইকে সমানে কাজ বরাদ্দ করে।',
      },
    },
    {
      id: 'rob-ex-2',
      kind: 'mcq',
      topic: 'smooth-wrr-benefit',
      question: {
        en: 'Why is smooth weighted round-robin scheduling superior to naive weighted scheduling (such as AAA BB C)?',
        bn: 'কেন স্মুথ ওয়েটেড রাউন্ড-রবিন সাধারণ ওয়েটেড শিডিউলিং (যেমন AAA BB C) পদ্ধতির চেয়ে অনেক বেশি কার্যকর?',
      },
      options: [
        { en: 'It interleaves requests smoothly (A, B, A, C, B, A), preventing high-weight nodes from suffering sudden burst spikes', bn: 'এটি রিকোয়েস্টগুলোকে সারিতে সুন্দরভাবে ছড়িয়ে দেয় (A, B, A, C, B, A), যাতে ভারী নোডে হঠাৎ ট্রাফিক স্পাইক না ঘটে' },
        { en: 'It reduces the cost of server hardware by exactly half', bn: 'এটি সার্ভার হার্ডওয়্যারের খরচ ঠিক অর্ধেকে নামিয়ে আনে' },
        { en: 'It converts HTTP connections into analog telephone calls', bn: 'এটি এইচটিটিপি সংযোগকে অ্যানালগ টেলিফোন কলে রূপান্তর করে' },
        { en: 'It increases the font size of the load balancer log output', bn: 'এটি লোড ব্যালেন্সার লগ আউটপুটের ফন্ট সাইজ বড় করে' },
      ],
      answer: 0,
      hint: { en: 'It interleaves requests evenly to avoid burst spikes.', bn: 'এটি হঠাৎ ট্রাফিক জট ঠেকাতে কাজগুলোকে ছড়িয়ে দেয়।' },
      explanation: {
        en: 'Interleaving prevents consecutive requests from overwhelming the primary node at the beginning of each cycle.',
        bn: 'কাজের মসৃণ বিস্তার প্রতিটি চক্রের শুরুতে শক্তিশালী সার্ভারের ওপর একনাগাড়ে রিকোয়েস্টের বন্যা আটকায়।',
      },
    },
    {
      id: 'rob-ex-3',
      kind: 'predict',
      topic: 'wrr-handled-count-query',
      question: {
        en: 'In our smooth round-robin simulation of 1800 requests across nodes with weights 3, 2, and 1 , how many total requests were handled by Node B?',
        bn: '৩টি নোডে ৩, ২ এবং ১ ওজন বণ্টন করে ১৮০০টি রিকোয়েস্টের সিমুলেশনে নোড B সর্বমোট কতটি কাজ সম্পন্ন করেছে?',
      },
      answer: '600',
      accept: ['600', '600 requests', 'six hundred'],
      hint: { en: '600', bn: '600' },
      explanation: {
        en: 'Node B has weight 2 out of total weight 6 (2 / 6 = 33.3%). 1800 * (2 / 6) = 600 requests.',
        bn: 'মোট ওজন ৬ এর মধ্যে নোড B এর ওজন ২ হওয়ায় এটি মোট কাজের ৩৩.৩% অর্থাৎ ১৮০০ * (২ / ৬) = ৬০০টি রিকোয়েস্ট সামলেছে।',
      },
    },
    {
      id: 'rob-ex-4',
      kind: 'predict',
      topic: 'sum-of-weights',
      question: {
        en: 'In a 3 server cluster where weights are 3, 2, and 1 , what is the total sum of weights across all nodes (e.g. 6)?',
        bn: '৩টি সার্ভারের ক্লাস্টারে ওজন ৩, ২ এবং ১ হলে সমস্ত নোডের মোট ওজনের যোগফল কত (যেমন 6)?',
      },
      answer: '6',
      accept: ['6', 'six', 'total weight 6'],
      hint: { en: '6', bn: '6' },
      explanation: {
        en: 'The sum of weights is 3 + 2 + 1 = 6, forming the denominator for proportional distribution.',
        bn: 'ওজনের যোগফল ৩ + ২ + ১ = ৬, যা আনুপাতিক ট্রাফিক বণ্টনের ভিত্তি তৈরি করে।',
      },
    },
  ],
  quiz: {
    id: 'robins-and-the-robin-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'rob-qz-1',
        kind: 'mcq',
        topic: 'heterogeneous-cluster-unweighted-rr',
        question: {
          en: 'What happens if a cluster with 8 core, 4 core, and 2 core machines uses naive unweighted Round-Robin under heavy traffic?',
          bn: '৮ কোর, ৪ কোর এবং ২ কোর যুক্ত একটি ক্লাস্টারে তীব্র ট্রাফিকের সময় সাধারণ রাউন্ড-রবিন চালালে কী পরিণতি হবে?',
        },
        options: [
          { en: 'The weakest 2 core machine receives the exact same number of requests as the 8 core machine, causing CPU saturation and high latency', bn: 'দুর্বল ২ কোর মেশিনটি শক্তিশালী ৮ কোর মেশিনের সমান কাজ পাওয়ায় তার প্রসেসর দ্রুত ১০০% পূর্ণ হয়ে ল্যাগ ও ক্র্যাশ ঘটবে' },
          { en: 'The load balancer automatically buys additional cloud RAM', bn: 'লোড ব্যালেন্সার নিজে থেকেই ক্লাউডে অতিরিক্ত র্যাম কিনে নেবে' },
          { en: 'All incoming network packets will immediately turn into SVG images', bn: 'সমস্ত ইনকামিং নেটওয়ার্ক প্যাকেট তৎক্ষণাৎ এসভিজি ছবিতে রূপান্তরিত হবে' },
          { en: 'The server operating system downgrades itself to MS-DOS', bn: 'সার্ভারের অপারেটিং সিস্টেম নিজে থেকেই এমএস-ডস ভার্সনে চলে যাবে' },
        ],
        answer: 0,
        hint: { en: 'The 2-core node receives the same traffic as the 8-core node.', bn: '২ কোর নোডটি ৮ কোর নোডের সমান ট্রাফিক পাবে।' },
        explanation: {
          en: 'Unweighted round-robin is unaware of CPU capacity differences and overloads weaker nodes in heterogeneous environments.',
          bn: 'ওজনহীন রাউন্ড-রবিন সিপিইউ পার্থক্যের কথা জানে না বলে ভিন্ন ক্ষমতার ক্লাস্টারে দুর্বল সার্ভারকে অতিরিক্ত চাপে ফেলে।',
        },
      },
      {
        id: 'rob-qz-2',
        kind: 'mcq',
        topic: 'convoy-effect-definition',
        question: {
          en: 'What does the term "Convoy Effect" describe in basic load balancing queues?',
          bn: 'লোড ব্যালেন্সিং কিউ বা সারিতে "কনভয় ইফেক্ট" বলতে কোন পরিস্থিতি বোঝানো হয়?',
        },
        options: [
          { en: 'When a sequence of fast, lightweight requests gets stuck behind a single long-running heavy request, creating cascading queue delays', bn: 'যখন একটি দীর্ঘ সময়সাপেক্ষ জটিল কাজের পেছনে দ্রুতগতির ছোট রিকোয়েস্টগুলো আটকে পুরো সারিতে ব্যাপক বিলম্ব তৈরি করে' },
          { en: 'When military trucks carry computer servers across a desert', bn: 'যখন সেনাবাহিনীর ট্রাকে করে মরুভূমির ওপর দিয়ে কম্পিউটার সার্ভার বহন করা হয়' },
          { en: 'When a database runs out of disk storage space on the weekend', bn: 'যখন ছুটির দিনে একটি ডেটাবেজের ডিস্ক স্পেস ফুরিয়ে যায়' },
          { en: 'When users submit invalid login passwords multiple times', bn: 'যখন ব্যবহারকারীরা বারবার ভুল লগইন পাসওয়ার্ড টাইপ করে' },
        ],
        answer: 0,
        hint: { en: 'Fast requests blocked behind a long slow job.', bn: 'ধীরগতির একটি কাজের পেছনে দ্রুত কাজগুলো আটকে যাওয়া।' },
        explanation: {
          en: 'The convoy effect happens when short requests are blocked behind slow queries in naive FIFO worker queues.',
          bn: 'কনভয় ইফেক্ট ঘটে যখন একটি দীর্ঘস্থায়ী কাজের কারণে তার পেছনের দ্রুতগতির রিকোয়েস্টগুলো অহেতুক অপেক্ষায় থাকে।',
        },
      },
      {
        id: 'rob-qz-3',
        kind: 'mcq',
        topic: 'nginx-weight-directive',
        question: {
          en: 'In Nginx configuration, how do you assign a relative capacity of 3 to an upstream backend server?',
          bn: 'এনজিনএক্স কনফিগারেশনে একটি আপস্ট্রিম সার্ভারকে ৩ আপেক্ষিক ক্ষমতা বরাদ্দ করতে কোন সিনট্যাক্সটি লেখা হয়?',
        },
        options: [
          { en: 'server backend1.internal weight=3;', bn: 'server backend1.internal weight=3;' },
          { en: 'server backend1.internal speed=fast;', bn: 'server backend1.internal speed=fast;' },
          { en: 'server backend1.internal cores=8;', bn: 'server backend1.internal cores=8;' },
          { en: 'server backend1.internal priority=maximum;', bn: 'server backend1.internal priority=maximum;' },
        ],
        answer: 0,
        hint: { en: 'weight=3', bn: 'weight=3' },
        explanation: {
          en: 'Nginx upstream servers support the weight=N parameter to control proportional traffic distribution.',
          bn: 'এনজিনএক্সে weight=N প্যারামিটার ব্যবহারের মাধ্যমে আনুপাতিক ট্রাফিক বিতরণ নিয়ন্ত্রণ করা হয়।',
        },
      },
      {
        id: 'rob-qz-4',
        kind: 'predict',
        topic: 'weight-per-unit-quota',
        question: {
          en: 'If total weight is 6 and total requests is 1800 , what is the request quota per unit weight (e.g. 300)?',
          bn: 'যদি মোট ওজন ৬ এবং সর্বমোট রিকোয়েস্ট ১৮০০ হয়, তবে প্রতি একক ওজনের জন্য নির্ধারিত রিকোয়েস্ট সংখ্যা কত (যেমন 300)?',
        },
        answer: '300',
        accept: ['300', '300 requests', 'three hundred'],
        hint: { en: '300', bn: '300' },
        explanation: {
          en: '1800 total requests divided by total weight 6 yields 300 requests per unit weight.',
          bn: '১৮০০টি রিকোয়েস্টকে মোট ওজন ৬ দিয়ে ভাগ করলে প্রতি একক ওজনে ৩০০টি করে রিকোয়েস্ট পড়ে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'conns-and-the-conn',
    title: {
      en: 'Least Connections Algorithm: Dynamic Workload Balancing and Active State Tracking',
      bn: 'লিস্ট কানেকশনস অ্যালগরিদম: ডায়নামিক ওয়ার্কলোড ব্যালেন্সিং ও অ্যাক্টিভ স্টেট ট্র্যাকিং',
    },
  },
};
