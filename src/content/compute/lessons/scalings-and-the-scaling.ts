import type { Lesson } from '../../../lib/types';

export const ScalingsAndTheScalingLesson: Lesson = {
  slug: 'scalings-and-the-scaling',
  tech: 'compute',
  title: {
    en: 'Compute Scaling Strategies — Scale Up versus Scale Out',
    bn: 'কম্পিউট স্কেলিং কৌশল — স্কেল আপ বনাম স্কেল আউট',
  },
  summary: {
    en: 'A foundational overview of compute scaling architectures and workload sizing. Compare vertical scaling (scale up) against horizontal scaling (scale out), design stateless application tiers behind load balancers, and quantify throughput and fault tolerance trade-offs across availability zones.',
    bn: 'কম্পিউট স্কেলিং আর্কিটেকচার ও ধারণক্ষমতা নির্ধারণের মৌলিক ধারণা। ভার্টিক্যাল স্কেলিং (স্কেল আপ) বনাম হরাইজন্টাল স্কেলিং (স্কেল আউট) এর তুলনা, লোড ব্যালেন্সারের পেছনে স্টেটলেস অ্যাপ্লিকেশন ডিজাইন এবং অ্যাভেইলেবিলিটি জোনে থ্রুপুট ও ফল্ট টলারেন্সের মূল্যায়ন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Vertical expansion versus distributed horizontal capacity', bn: 'WHAT — ভার্টিক্যাল বৃদ্ধি বনাম ডিস্ট্রিবিউটেড হরাইজন্টাল ক্ষমতা' },
    },
    {
      type: 'para',
      text: {
        en: 'When your web applications experience surging traffic, expanding your compute infrastructure is essential to maintain low latency. Cloud platforms offer two primary scaling paradigms: vertical scaling (scaling up) and horizontal scaling (scaling out). Vertical scaling replaces an existing virtual server with a larger instance containing more virtual processor cores and system memory. While scale-up requires zero architectural modifications to your application code, it introduces a hard hardware ceiling and requires disruptive reboots during instance resizing. In contrast, horizontal scaling provisions multiple identical, smaller virtual machines behind an Application Load Balancer (ALB). By decoupling state and storing session data in distributed caches, horizontal fleets scale elastically to meet fluctuating demand while surviving physical hardware outages across multiple availability zones.',
        bn: 'যখন আপনার ওয়েব অ্যাপ্লিকেশনে ট্রাফিকের চাপ বেড়ে যায়, তখন রেসপন্স টাইম কম রাখতে কম্পিউট পরিকাঠামো বৃদ্ধি করা অপরিহার্য। ক্লাউড প্ল্যাটফর্ম প্রধানত দুটি স্কেলিং পদ্ধতি প্রদান করে: ভার্টিক্যাল স্কেলিং (স্কেল আপ) এবং হরাইজন্টাল স্কেলিং (স্কেল আউট)। ভার্টিক্যাল স্কেলিংয়ে বর্তমান সার্ভারটিকে পরিবর্তন করে আরও বেশি প্রসেসর কোর ও মেমরিসম্পন্ন বড় সার্ভার বসানো হয়। স্কেল আপ পদ্ধতিতে কোডে কোনো পরিবর্তন করতে না হলেও এর একটি নির্দিষ্ট হার্ডওয়্যার সীমা থাকে এবং সার্ভার পরিবর্তনের সময় রিবুটের কারণে সাময়িক ডাউনটাইম ঘটে। বিপরীতে, হরাইজন্টাল স্কেলিংয়ে অ্যাপ্লিকেশন লোড ব্যালেন্সারের (ALB) পেছনে একাধিক ছোট ছোট সার্ভার সমান্তরালে চালানো হয়। সেশন ডেটাকে আলাদা ডিস্ট্রিবিউটেড ক্যাশে রেখে হরাইজন্টাল ফ্লিটের মাধ্যমে যেকোনো ট্রাফিকের চাপ সামলানো যায় এবং কোনো একটি সার্ভার নষ্ট হলেও পুরো সিস্টেম অক্ষত থাকে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Vertical scaling single point of failure versus horizontal load balancing', bn: 'ভার্টিক্যাল স্কেলিংয়ের একক ব্যর্থতার ঝুঁকি বনাম হরাইজন্টাল ব্যালেন্সিং' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Vertical versus Horizontal Compute Scaling diagram">
<rect x="25" y="35" width="270" height="165" rx="6" fill="#f8fafc" stroke="#dc2626" stroke-width="2"/>
<text x="160" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">Vertical Scaling (Scale Up)</text>

<rect x="70" y="80" width="180" height="60" rx="6" fill="#fee2e2" stroke="#ef4444" stroke-width="1.5"/>
<text x="160" y="105" text-anchor="middle" font-size="10" font-weight="800" fill="#991b1b">1 Large Node: $0.32/hr</text>
<text x="160" y="125" text-anchor="middle" font-size="8" fill="#7f1d1d">1800 req/s throughput · Single Point of Failure</text>

<text x="160" y="165" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">Hardware Ceiling Limit</text>
<text x="160" y="185" text-anchor="middle" font-size="8" fill="#64748b">Requires reboot downtime to resize</text>

<rect x="345" y="35" width="270" height="165" rx="6" fill="#f8fafc" stroke="#16a34a" stroke-width="2"/>
<text x="480" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">Horizontal Scaling (Scale Out)</text>

<rect x="390" y="68" width="180" height="25" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
<text x="480" y="85" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">Application Load Balancer</text>

<rect x="355" y="105" width="55" height="45" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="382" y="125" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Node 1</text>
<text x="382" y="140" text-anchor="middle" font-size="7" fill="#166534">AZ-a</text>

<rect x="420" y="105" width="55" height="45" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="447" y="125" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Node 2</text>
<text x="447" y="140" text-anchor="middle" font-size="7" fill="#166534">AZ-a</text>

<rect x="485" y="105" width="55" height="45" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="512" y="125" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Node 3</text>
<text x="512" y="140" text-anchor="middle" font-size="7" fill="#166534">AZ-b</text>

<rect x="550" y="105" width="55" height="45" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="577" y="125" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Node 4</text>
<text x="577" y="140" text-anchor="middle" font-size="7" fill="#166534">AZ-b</text>

<text x="480" y="172" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">4 nodes: 2000 req/s at $0.345/hr</text>
<text x="480" y="188" text-anchor="middle" font-size="8" fill="#166534">+200 req/s gain across 2 Availability Zones</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Horizontal scaling achieves multi-AZ fault tolerance while gaining +200 req/s throughput</text>
</svg>`,
      caption: {
        en: 'Vertical scaling with 1 node delivers 1800 req/s at $0.32/hr (SPOF), while horizontal scaling with 4 nodes yields 2000 req/s at $0.345/hr, gaining +200 req/s across 2 Availability Zones.',
        bn: '১টি নোডে ভার্টিক্যাল স্কেলিংয়ে $০.৩২/ঘণ্টায় ১৮০০ req/s মেলে (SPOF), যেখানে ৪টি নোডে হরাইজন্টাল স্কেলিংয়ে $০.৩৪৫/ঘণ্টায় ২০০০ req/s পাওয়া যায় যা ২টি অ্যাভেইলেবিলিটি জোনে +২০০ req/s সাশ্রয়ী গতি যোগ করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Vertical Scaling (Scale Up)',
          def: {
            en: 'Expanding system capacity by migrating to a physically or virtually larger instance with more CPU cores, RAM, and I/O bandwidth.',
            bn: 'বর্তমান ভার্চুয়াল সার্ভারের আকার বাড়িয়ে আরও শক্তিশালী সিপিইউ, বেশি মেমরি ও দ্রুতগতির ডিস্কযুক্ত একক সার্ভারে রূপান্তর।',
          },
        },
        {
          term: 'Horizontal Scaling (Scale Out)',
          def: {
            en: 'Distributing traffic by adding multiple identical smaller server instances in parallel behind a load balancer.',
            bn: 'লোড ব্যালেন্সারের পেছনে সমান্তরালে একাধিক একই ধরণের সার্ভার যুক্ত করে ব্যবহারকারীর চাপ ছড়িয়ে দেওয়ার পদ্ধতি।',
          },
        },
        {
          term: 'Stateless Architecture',
          def: {
            en: 'An application design where server instances store zero local client session state, allowing any server to handle any incoming request.',
            bn: 'অ্যাপ্লিকেশন ডিজাইন যেখানে সার্ভারের লোকাল মেমরিতে কোনো ক্লায়েন্ট সেশন রাখা হয় না, ফলে যেকোনো রিকোয়েস্ট যেকোনো সার্ভার সম্পন্ন করতে পারে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — High availability and zero-downtime elasticity', bn: 'কেন — সার্বক্ষণিক প্রাপ্যতা ও ডাউনটাইমহীন প্রসারণ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Eliminate single points of failure: distributing workloads across multiple availability zones guarantees uptime even if an entire datacenter fails.', bn: 'একক ব্যর্থতার ঝুঁকি দূরীকরণ: একাধিক অ্যাভেইলেবিলিটি জোনে সার্ভার ছড়িয়ে রাখলে পুরো একটি ডাটা সেন্টার পুড়ে বা নষ্ট হয়ে গেলেও সিস্টেম সচল থাকে।' },
        { en: 'Eliminate resize downtime: scaling horizontally adds instances dynamically without restarting or disrupting existing running services.', bn: 'ডাউনটাইম ছাড়া সার্ভার বৃদ্ধি: হরাইজন্টাল স্কেলিংয়ে চালু থাকা সার্ভিস রিস্টার্ট না করেই ট্রাফিকের সাথে সাথে নতুন সার্ভার যুক্ত করা যায়।' },
        { en: 'Linear cost optimization: scale down dynamically during night hours to avoid paying for massive idle vertical server hardware.', bn: 'খরচের সঠিক সমন্বয়: রাতে বা ছুটির দিনে ট্রাফিক কমলে অতিরিক্ত সার্ভারগুলো বন্ধ করে দিয়ে অপচয় শতভাগ রোধ করা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Migrating to horizontal scaling in 4 steps', bn: 'HOW — ৪টি ধাপে হরাইজন্টাল স্কেলিং বাস্তবায়ন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Externalize user sessions', bn: '১. সেশন ডেটা আলাদা করা' }, text: { en: 'Move user login sessions and shopping carts into an external Redis cluster.', bn: 'সার্ভারের মেমরি থেকে ব্যবহারকারীর লগইন সেশন সরিয়ে আলাদা রেডিস ক্লাস্টারে রাখুন।' } },
        { title: { en: '2. Offload uploaded assets', bn: '২. মিডিয়া ফাইল ক্লাউডে পাঠানো' }, text: { en: 'Store user uploads and static files directly on object storage (Amazon S3).', bn: 'ইউজারের আপলোড করা ছবি ও ফাইল সরাসরি এস৩ অবজেক্ট স্টোরেজে সংরক্ষণ করুন।' } },
        { title: { en: '3. Deploy Application Load Balancer', bn: '৩. লোড ব্যালেন্সার বসানো' }, text: { en: 'Route inbound internet traffic evenly across multiple private compute subnets.', bn: 'ইন্টারনেট ট্রাফিককে সমানভাবে একাধিক প্রাইভেট সাবনেটের সার্ভারে ভাগ করে দিন।' } },
        { title: { en: '4. Define health checks', bn: '৪. হেলথ চেক কনফিগার করা' }, text: { en: 'Configure HTTP /health probes to automatically drop crashed instances from rotation.', bn: 'সার্ভার নষ্ট হলে লোড ব্যালেন্সার যেন নিজে থেকেই ট্রাফিক বন্ধ করে দেয় সেজন্য হেলথ চেক সেট করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'scaling_strategies_sim.js',
      code: `// Simulated cost, throughput, and fault tolerance across scaling modes
const smallInstanceCost = 0.08; // $0.08/hr
const smallThroughput = 500;    // 500 req/s

// Vertical: 1 large instance (4x specs)
const verticalCost = 0.32; // $0.32/hr
const verticalThroughput = 1800; // 1800 req/s

// Horizontal: 4 small instances + ALB ($0.025/hr)
const horizontalNodes = 4;
const albCost = 0.025;
const horizontalCost = Math.round(((horizontalNodes * smallInstanceCost) + albCost) * 1000) / 1000; // $0.345/hr
const horizontalThroughput = horizontalNodes * smallThroughput; // 2000 req/s

const throughputGain = horizontalThroughput - verticalThroughput; // 200 req/s
const faultToleranceNodes = 2; // can lose 2 nodes

console.log("Scaling Strategies Cost and Throughput Simulation:");
console.log("Vertical: 1 node delivers " + verticalThroughput + " req/s at $" + verticalCost.toFixed(2) + "/hr (SPOF)");
console.log("Horizontal: " + horizontalNodes + " nodes deliver " + horizontalThroughput + " req/s at $" + horizontalCost.toFixed(3) + "/hr");
console.log("Throughput advantage: +" + throughputGain + " req/s across " + faultToleranceNodes + " Availability Zones");

// Output:
// Scaling Strategies Cost and Throughput Simulation:
// Vertical: 1 node delivers 1800 req/s at $0.32/hr (SPOF)
// Horizontal: 4 nodes deliver 2000 req/s at $0.345/hr
// Throughput advantage: +200 req/s across 2 Availability Zones`,
      caption: {
        en: 'Vertical scaling with 1 node delivers 1800 req/s at $0.32/hr (SPOF), while horizontal scaling with 4 nodes yields 2000 req/s at $0.345/hr, gaining +200 req/s across 2 Availability Zones.',
        bn: '১টি নোডে ভার্টিক্যাল স্কেলিংয়ে $০.৩২/ঘণ্টায় ১৮০০ req/s মেলে (SPOF), যেখানে ৪টি নোডে হরাইজন্টাল স্কেলিংয়ে $০.৩৪৫/ঘণ্টায় ২০০০ req/s পাওয়া যায় যা ২টি অ্যাভেইলেবিলিটি জোনে +২০০ req/s সাশ্রয়ী গতি যোগ করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive scaling throughput and fault lab', bn: 'INSIDE — জীবন্ত স্কেলিং থ্রুপুট ও ফল্ট ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test compute capacity trade-offs. Sizing vertically with 1 node delivers 1800 req/s at $0.32/hr but suffers from a single point of failure. Scaling horizontally with 4 nodes delivers 2000 req/s at $0.345/hr, gaining +200 req/s advantage while sustaining up to 2 node outages across 2 Availability Zones. Horizontal scaling is the gold standard of resilient cloud infrastructure.',
        bn: 'কম্পিউট সক্ষমতার লাভ-ক্ষতি পরীক্ষা করুন। ১টি নোডে ভার্টিক্যাল স্কেলিং করলে $০.৩২/ঘণ্টায় ১৮০০ req/s মেলে কিন্তু একক ব্যর্থতার মারাত্মক ঝুঁকি থাকে। বিপরীতে ৪টি নোডে হরাইজন্টাল স্কেলিং করলে $০.৩৪৫/ঘণ্টায় ২০০০ req/s পাওয়া যায়, যা ২টি অ্যাভেইলেবিলিটি জোনে ২টি নোড নষ্ট হলেও সিস্টেম চালু রেখে +২০০ req/s অতিরিক্ত গতি দেয়। আধুনিক টেকসই ক্লাউড তৈরিতে হরাইজন্টাল পদ্ধতিই প্রমিত।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Scaling lab (verify throughput gain, press Run)', bn: 'স্কেলিং ল্যাব (থ্রুপুট লাভ দেখুন, Run)' },
      html: '<h3>Horizontal vs Vertical Scaling Benchmark</h3>\n<pre id="out"></pre>\n<p>Compute fleet capacity and fault tolerance comparisons.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const vertTps = 1800;\nconst horizTps = 2000;\nconst gain = horizTps - vertTps;\nconst costV = 0.32;\nconst costH = 0.345;\nconsole.log("gain: " + gain + " req/s");\ndocument.getElementById("out").textContent = "Vertical: " + vertTps + " req/s ($" + costV + ") · Horizontal: " + horizTps + " req/s ($" + costH + ") · Gain: +" + gain + " req/s (2 AZs ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Scaling architectural guidelines', bn: 'ফলাফল — স্কেলিং আর্কিটেকচারের সোনালী নিয়ম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always scale stateless tiers horizontally: stateless web APIs achieve linear throughput scaling with zero single points of failure.', bn: 'স্টেটলেস টায়ার সর্বদা হরাইজন্টালি স্কেল করুন: স্টেটলেস এপিআইতে কোনো একক ঝুঁকি ছাড়াই সমানুপাতিক গতি অর্জন সম্ভব।' },
        { en: 'Scale databases vertically before sharding: modern cloud managed databases scale up to 128 vCPUs and 4 TB RAM before complex sharding is required.', bn: 'শার্ডিংয়ের আগে ডাটাবেস ভার্টিক্যালি বাড়ান: জটিল শার্ডিংয়ের ঝামেলায় যাওয়ার আগে আধুনিক ক্লাউড ডেটাবেস ১২৮টি vCPU ও ৪ টেরাবাইট র্যাম পর্যন্ত একাই বাড়ানো যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common scaling pitfalls', bn: 'ডিবাগ — স্কেলিংয়ের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Sticky sessions undermining horizontal load balancing', bn: 'স্টিকি সেশনের কারণে লোড ব্যালেন্সারের ভারসাম্য নষ্ট হওয়া' },
      text: {
        en: 'Enabling ALB sticky sessions pins returning users to the same backend server. If one heavy tenant generates thousands of requests, that single node will exhaust its CPU while sibling servers sit idle. Decouple sessions into Redis instead.',
        bn: 'লোড ব্যালেন্সারে স্টিকি সেশন চালু করলে ক্লায়েন্ট সবসময় একই সার্ভারে রিকোয়েস্ট পাঠায়। কোনো বড় গ্রাহক বেশি রিকোয়েস্ট পাঠালে একটি সার্ভার ক্র্যাশ করতে পারে অথচ পাশের সার্ভারগুলো অলস বসে থাকবে। সেশন রেডিসে রাখাই সমাধান।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Distributing evenly across Availability Zones', bn: 'অ্যাভেইলেবিলিটি জোন জুড়ে সমানভাবে সার্ভার বণ্টন' },
      text: {
        en: 'Always deploy auto-scaling groups across at least two or three Availability Zones. If AWS experiences a hardware fiber cut in us-east-1a, instances in us-east-1b seamlessly carry customer traffic.',
        bn: 'সর্বদা কমপক্ষে দুটি বা তিনটি ভিন্ন অ্যাভেইলেবিলিটি জোনে সার্ভার মোতায়েন করুন। একটি জোনের অপটিক্যাল ফাইবার বা বিদ্যুৎ ব্যবস্থা ক্ষতিগ্রস্ত হলেও অন্য জোনের সার্ভার স্বয়ংক্রিয়ভাবে ট্রাফিক সামলে নেবে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production scaling deployments', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল স্কেলিং ব্যবস্থা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Netflix API Fleet: runs tens of thousands of stateless microVMs distributed across AWS regions to absorb massive evening binge spikes.', bn: 'নেটফ্লিক্স এপিআই বহর: সন্ধ্যার বিনোদনের ব্যাপক চাপ সামলাতে হাজার হাজার স্টেটলেস মাইক্রো-ভিএম বিভিন্ন ক্লাউড অঞ্চলে সমান্তরালে চালায়।' },
        { en: 'Shopify Flash Sales: dynamically scales out edge Kubernetes nodes to handle 100,000 requests per second during Black Friday.', bn: 'Shopify ফ্ল্যাশ সেল: ব্ল্যাক ফ্রাইডের মতো বিশাল বিক্রির দিনে প্রতি সেকেন্ডে লক্ষাধিক অর্ডার সামলাতে কুবারনেটিস নোড কয়েক মিনিটে বাড়িয়ে নেয়।' },
        { en: 'Amazon Aurora Multi-AZ: combines massive vertical primary instances with auto-scaling read replicas distributed across 3 Availability Zones.', bn: 'Amazon Aurora: শক্তিশালী ভার্টিক্যাল রাইটার ডাটাবেসের সাথে ৩টি জোনে স্বয়ংক্রিয়ভাবে স্কেল হওয়া রিড রেপ্লিকা যুক্ত করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Spot Instances and Preemptible VMs', bn: 'পরবর্তী পাঠ — স্পট ইনস্ট্যান্স ও প্রি-এম্পটিবল ভিএম' },
    },
    {
      type: 'para',
      text: {
        en: 'With vertical and horizontal scaling principles mastered, Lesson 6 investigates cloud spot markets: auction mechanics, handling 2-minute interruption notices, and building fault-tolerant distributed fleets at up to 90% cost savings.',
        bn: 'ভার্টিক্যাল ও হরাইজন্টাল স্কেলিং আয়ত্ত করার পর, পাঠ ৬ ক্লাউড স্পট মার্কেট শেখাবে: নিলাম মেকানিক্স, ২ মিনিটের টার্মিনেশন নোটিশ হ্যান্ডলিং এবং ৯০% খরচ বাঁচিয়ে টেকসই ডিস্ট্রিবিউটেড ফ্লিট গঠন।',
      },
    },
  ],
  exercises: [
    {
      id: 'cmp-scale-ex-1',
      kind: 'mcq',
      topic: 'scale-up-vs-scale-out-definition',
      question: {
        en: 'What architectural distinction defines horizontal scaling (scale out) compared to vertical scaling (scale up)?',
        bn: 'ভার্টিক্যাল স্কেলিংয়ের (স্কেল আপ) তুলনায় হরাইজন্টাল স্কেলিংয়ের (স্কেল আউট) প্রধান কাঠামোগত পার্থক্য কী?',
      },
      options: [
        {
          en: 'Horizontal scaling adds multiple identical smaller instances behind a load balancer, whereas vertical scaling replaces a server with a single larger instance',
          bn: 'হরাইজন্টাল স্কেলিং লোড ব্যালেন্সারের পেছনে সমান্তরালে একাধিক ছোট সার্ভার যুক্ত করে, আর ভার্টিক্যাল স্কেলিং বর্তমান সার্ভারটিকে একটিমাত্র বড় সার্ভার দিয়ে প্রতিস্থাপন করে',
        },
        {
          en: 'Horizontal scaling requires purchasing physical metal wires',
          bn: 'হরাইজন্টাল স্কেলিংয়ের জন্য ফিজিক্যাল ধাতব তার কিনতে হয়',
        },
        {
          en: 'Vertical scaling only works on computers located in mountain altitudes',
          bn: 'ভার্টিক্যাল স্কেলিং কেবল পাহাড়ের উঁচুতে রাখা কম্পিউটারে কাজ করে',
        },
        {
          en: 'Horizontal scaling deletes the operating system kernel every hour',
          bn: 'হরাইজন্টাল স্কেলিং প্রতি ঘণ্টায় অপারেটিং সিস্টেমের কার্নেল মুছে দেয়',
        },
      ],
      answer: 0,
      hint: { en: 'Horizontal adds nodes; vertical increases node size.', bn: 'হরাইজন্টাল সার্ভারের সংখ্যা বাড়ায়; ভার্টিক্যাল সার্ভারের আকার বাড়ায়।' },
      explanation: {
        en: 'Horizontal scaling provisions nodes in parallel behind balancers; vertical scaling upgrades CPU/RAM on one node.',
        bn: 'হরাইজন্টাল স্কেলিংয়ে নোডের সংখ্যা বৃদ্ধি পায়; ভার্টিক্যাল স্কেলিংয়ে একটি নোডের ক্ষমতা বাড়ানো হয়।',
      },
    },
    {
      id: 'cmp-scale-ex-2',
      kind: 'mcq',
      topic: 'scaling-sim-comparison',
      question: {
        en: 'In our code walkthrough, what were the throughput and costs of 1 vertical node versus 4 horizontal nodes, and what throughput gain was achieved across 2 Availability Zones?',
        bn: 'আমাদের কোড আলোচনায় ১টি ভার্টিক্যাল নোড বনাম ৪টি হরাইজন্টাল নোডের গতি ও খরচ কত ছিল এবং ২টি অ্যাভেইলেবিলিটি জোনে কত বাড়তি থ্রুপুট পাওয়া গিয়েছিল?',
      },
      options: [
        {
          en: 'Vertical: 1 node delivers 1800 req/s at $0.32/hr; Horizontal: 4 nodes deliver 2000 req/s at $0.345/hr (gain: +200 req/s across 2 Availability Zones)',
          bn: 'ভার্টিক্যাল: ১টি নোডে $০.৩২/ঘণ্টায় ১৮০০ req/s; হরাইজন্টাল: ৪টি নোডে $০.৩৪৫/ঘণ্টায় ২০০০ req/s (২টি অ্যাভেইলেবিলিটি জোনে লাভ: +২০০ req/s)',
        },
        {
          en: 'Vertical: 1 node delivers 1000 req/s at $1.00/hr; Horizontal: 4 nodes deliver 1000 req/s at $1.00/hr (gain: +0 req/s across 2 Availability Zones)',
          bn: 'ভার্টিক্যাল: ১টি নোডে $১.০০/ঘণ্টায় ১০০০ req/s; হরাইজন্টাল: ৪টি নোডে $১.০০/ঘণ্টায় ১০০০ req/s (২টি অ্যাভেইলেবিলিটি জোনে লাভ: +০ req/s)',
        },
        {
          en: 'Vertical: 0 req/s at $0.00/hr; Horizontal: 0 req/s at $0.00/hr (gain: +0 req/s across 2 Availability Zones)',
          bn: 'ভার্টিক্যাল: $০.০০/ঘণ্টায় ০ req/s; হরাইজন্টাল: $০.০০/ঘণ্টায় ০ req/s (২টি অ্যাভেইলেবিলিটি জোনে লাভ: +০ req/s)',
        },
        {
          en: 'Vertical: 500 req/s at $0.10/hr; Horizontal: 600 req/s at $0.50/hr (gain: +100 req/s across 2 Availability Zones)',
          bn: 'ভার্টিক্যাল: $০.১০/ঘণ্টায় ৫০০ req/s; হরাইজন্টাল: $০.৫০/ঘণ্টায় ৬০০ req/s (২টি অ্যাভেইলেবিলিটি জোনে লাভ: +১০০ req/s)',
        },
      ],
      answer: 0,
      hint: { en: '1800 vs 2000 req/s, gaining +200 req/s.', bn: '১৮০০ বনাম ২০০০ req/s, লাভ +২০০ req/s।' },
      explanation: {
        en: 'The benchmark demonstrated 1800 req/s for vertical ($0.32/hr) vs 2000 req/s for 4 horizontal nodes ($0.345/hr), yielding +200 req/s across 2 AZs.',
        bn: 'পরীক্ষায় দেখা যায় ১টি ভার্টিক্যাল নোডে ১৮০০ req/s ($০.৩২/ঘণ্টা) এবং ৪টি হরাইজন্টাল নোডে ২০০০ req/s ($০.৩৪৫/ঘণ্টা) মেলে যা ২টি জোনে +২০০ req/s লাভ দেয়।',
      },
    },
    {
      id: 'cmp-scale-ex-3',
      kind: 'mcq',
      topic: 'stateless-prerequisite-for-horizontal-scaling',
      question: {
        en: 'Why must web application tiers be engineered to be stateless before successfully scaling horizontally behind a load balancer?',
        bn: 'লোড ব্যালেন্সারের পেছনে সফলভাবে হরাইজন্টাল স্কেলিং করার আগে কেন ওয়েব অ্যাপ্লিকেশন টায়ারকে স্টেটলেস করা বাধ্যতামূলক?',
      },
      options: [
        {
          en: 'Because subsequent HTTP requests from the same user may be routed to any instance; local in-memory session state would cause missing login credentials and data corruption',
          bn: 'কারণ একই ব্যবহারকারীর পরবর্তী রিকোয়েস্ট অন্য যেকোনো সার্ভারে যেতে পারে; সেশন লোকাল মেমরিতে থাকলে ব্যবহারকারী হঠাৎ লগআউট হয়ে যাবে ও ডেটা মিলবে না',
        },
        {
          en: 'Because stateful applications generate dangerous electrostatic shocks in datacenters',
          bn: 'কারণ স্টেটফুল অ্যাপ্লিকেশন ডাটা সেন্টারে বিপজ্জনক স্ট্যাটিক বিদ্যুৎ তৈরি করে',
        },
        {
          en: 'Because load balancers can only parse plain text emails',
          bn: 'কারণ লোড ব্যালেন্সার কেবল সাধারণ ইমেইল পড়তে পারে',
        },
        {
          en: 'Because the Linux kernel refuses to boot stateful programs',
          bn: 'কারণ লিনাক্স কার্নেল কোনো স্টেটফুল প্রোগ্রাম চালু করতে অস্বীকৃতি জানায়',
        },
      ],
      answer: 0,
      hint: { en: 'Requests hit random instances, so state must be external.', bn: 'যেকোনো রিকোয়েস্ট যেকোনো সার্ভারে যাওয়ায় সেশন বাইরে রাখতে হয়।' },
      explanation: {
        en: 'Statelessness guarantees that any available node can fulfill any user request by retrieving shared state from Redis or database pools.',
        bn: 'স্টেটলেস পদ্ধতিতে যেকোনো সার্ভার সেন্ট্রাল রেডিস বা ডেটাবেস থেকে সেশন নিয়ে নির্বিঘ্নে কাজ সম্পন্ন করতে পারে।',
      },
    },
    {
      id: 'cmp-scale-ex-4',
      kind: 'predict',
      topic: 'load-balancer-acronym-token',
      question: {
        en: 'What three-letter acronym identifies an Application Load Balancer that routes HTTP/HTTPS traffic across compute fleets (e.g. ALB)?',
        bn: 'কম্পিউট ফ্লিটের মধ্যে HTTP/HTTPS ট্রাফিক সুষম বণ্টনকারী অ্যাপ্লিকেশন লোড ব্যালেন্সারকে কোন তিন অক্ষরের সংক্ষেপ দ্বারা প্রকাশ করা হয় (যেমন ALB)?',
      },
      answer: 'ALB',
      accept: ['ALB', 'alb', 'Application Load Balancer', 'Load Balancer'],
      hint: { en: 'A-L-B', bn: 'A-L-B' },
      explanation: {
        en: 'ALB stands for Application Load Balancer, the Layer 7 traffic routing engine distributing incoming web requests.',
        bn: 'ALB হলো Application Load Balancer, যা লেয়ার ৭ এ ট্রাফিক একাধিক ব্যাকএন্ড সার্ভারে সমভাবে বণ্টন করে।',
      },
    },
  ],
  quiz: {
    id: 'scalings-and-the-scaling-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'cmp-scale-q1',
        kind: 'mcq',
        topic: 'single-point-of-failure-risk',
        question: {
          en: 'What critical operational vulnerability remains present when relying exclusively on vertical scaling for production workloads?',
          bn: 'প্রোডাকশনের জন্য কেবল ভার্টিক্যাল স্কেলিংয়ের উপর নির্ভর করলে কোন গুরুতর ঝুঁকিটি সবসময় উপস্থিত থাকে?',
        },
        options: [
          {
            en: 'Single point of failure (SPOF): if the underlying physical host crashes or requires hardware maintenance, the entire system suffers complete downtime',
            bn: 'একক ব্যর্থতার ঝুঁকি (SPOF): যদি মূল ফিজিক্যাল সার্ভার নষ্ট হয় বা রক্ষণাবেক্ষণের প্রয়োজন হয়, তবে পুরো সিস্টেম সম্পূর্ণরূপে বন্ধ হয়ে যায়',
          },
          {
            en: 'Vertical servers permanently consume all internet bandwidth in the country',
            bn: 'ভার্টিক্যাল সার্ভার পুরো দেশের সমস্ত ইন্টারনেট ব্যান্ডউইথ স্থায়ীভাবে গ্রাস করে',
          },
          {
            en: 'Vertical servers cannot execute JavaScript code',
            bn: 'ভার্টিক্যাল সার্ভারে কোনো জাভাস্ক্রিপ্ট কোড চালানো যায় না',
          },
          {
            en: 'Vertical scaling requires replacing all office monitors',
            bn: 'ভার্টিক্যাল স্কেলিং করার জন্য অফিসের সমস্ত মনিটর পরিবর্তন করতে হয়',
          },
        ],
        answer: 0,
        hint: { en: 'One server means one single point of failure.', bn: 'একটি সার্ভার থাকা মানেই একক ব্যর্থতার ঝুঁকি থাকা।' },
        explanation: {
          en: 'A vertically scaled single node lacks redundancy; when that instance or its underlying host fails, service stops completely.',
          bn: 'ভার্টিক্যাল স্কেলিংয়ে কোনো ব্যাকআপ নোড না থাকায় সেই সার্ভার বা ফিজিক্যাল হোস্ট ক্র্যাশ করলে পুরো সার্ভিস বন্ধ হয়ে যায়।',
        },
      },
      {
        id: 'cmp-scale-q2',
        kind: 'mcq',
        topic: 'scaling-throughput-gain-check',
        question: {
          en: 'In our code walkthrough, what was the throughput gain achieved by 4 horizontal nodes over the single vertical node across 2 Availability Zones?',
          bn: 'আমাদের কোড আলোচনায় ২টি অ্যাভেইলেবিলিটি জোনে একক ভার্টিক্যাল নোডের তুলনায় ৪টি হরাইজন্টাল নোডে কত অতিরিক্ত থ্রুপুট অর্জিত হয়েছিল?',
        },
        options: [
          { en: '+200 req/s gain (2000 req/s horizontal minus 1800 req/s vertical across 2 Availability Zones)', bn: '+২০০ req/s লাভ (২টি অ্যাভেইলেবিলিটি জোনে ২০০০ req/s হরাইজন্টাল বিয়োগ ১৮০০ req/s ভার্টিক্যাল)' },
          { en: '+5000 req/s gain across 2 Availability Zones', bn: '২টি অ্যাভেইলেবিলিটি জোনে +৫০০০ req/s লাভ' },
          { en: '+0 req/s gain across 2 Availability Zones', bn: '২টি অ্যাভেইলেবিলিটি জোনে +০ req/s লাভ' },
          { en: '+10 req/s gain across 2 Availability Zones', bn: '২টি অ্যাভেইলেবিলিটি জোনে +১০ req/s লাভ' },
        ],
        answer: 0,
        hint: { en: '2000 - 1800 = +200 req/s.', bn: '২০০০ - ১৮০০ = +২০০ req/s।' },
        explanation: {
          en: 'Horizontal scaling delivered 2000 req/s compared to 1800 req/s for vertical scaling, achieving a +200 req/s advantage.',
          bn: 'হরাইজন্টাল পদ্ধতিতে ২০০০ req/s মেলে যা ভার্টিক্যালের ১৮০০ req/s এর চেয়ে +২০০ req/s বেশি।',
        },
      },
      {
        id: 'cmp-scale-q3',
        kind: 'mcq',
        topic: 'externalizing-state-storage',
        question: {
          en: 'Where should dynamic user state (such as authentication tokens and shopping carts) be preserved to enable horizontal scaling?',
          bn: 'হরাইজন্টাল স্কেলিং সম্ভব করতে ব্যবহারকারীর গতিশীল সেশন ডেটা (যেমন লগইন টোকেন বা শপিং কার্ট) কোথায় রাখা উচিত?',
        },
        options: [
          {
            en: 'In an external distributed in-memory cache (like Redis or Memcached) or an external database cluster accessible to all fleet instances',
            bn: 'একটি বহিরাগত ডিস্ট্রিবিউটেড ইন-মেমরি ক্যাশে (যেমন Redis বা Memcached) অথবা সেন্ট্রাল ডেটাবেসে যা সব সার্ভার অ্যাক্সেস করতে পারে',
          },
          {
            en: 'In local temporary /tmp text files on each virtual machine disk',
            bn: 'প্রতিটি ভার্চুয়াল মেশিনের লোকাল /tmp ফোল্ডারের টেক্সট ফাইলে',
          },
          {
            en: 'In browser localStorage with no server validation',
            bn: 'সার্ভার ভ্যালিডেশন ছাড়া সম্পূর্ণ ব্রাউজারের লোকাল স্টোরেজে',
          },
          {
            en: 'Printed out on office paper slips',
            bn: 'অফিসের কাগজের টুকরায় প্রিন্ট করে রাখা',
          },
        ],
        answer: 0,
        hint: { en: 'Store state in external Redis or databases.', bn: 'সেশন ডেটা বাইরের রেডিস বা ডেটাবেসে সংরক্ষণ করতে হয়।' },
        explanation: {
          en: 'Decoupling state to Redis or relational databases allows compute nodes to remain completely stateless and interchangeable.',
          bn: 'রেডিসে সেশন রাখলে অ্যাপ্লিকেশন সার্ভারগুলো পুরোপুরি স্টেটলেস থাকে এবং যেকোনো নোড যেকোনো কাজ করতে পারে।',
        },
      },
      {
        id: 'cmp-scale-q4',
        kind: 'predict',
        topic: 'spof-acronym-token',
        question: {
          en: 'What four-letter acronym designates an architectural component whose failure halts the entire system (e.g. SPOF)?',
          bn: 'এমন কোনো সিস্টেম উপাদান যার ব্যর্থতায় পুরো সিস্টেম অচল হয়ে পড়ে তাকে কোন চার অক্ষরের সংক্ষেপ দ্বারা চিহ্নিত করা হয় (যেমন SPOF)?',
        },
        answer: 'SPOF',
        accept: ['SPOF', 'spof', 'Single Point of Failure'],
        hint: { en: 'S-P-O-F', bn: 'S-P-O-F' },
        explanation: {
          en: 'SPOF stands for Single Point of Failure, describing any un-replicated component that can bring down the infrastructure.',
          bn: 'SPOF এর পূর্ণরূপ হলো Single Point of Failure, যা কোনো অবিচ্ছিন্ন ব্যাকআপহীন দুর্বল অংশকে বোঝায় যার ব্যর্থতায় পুরো সিস্টেম থেমে যায়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'spots-and-the-spot',
    title: { en: 'Spot Instances and Preemptible VMs', bn: 'স্পট ইনস্ট্যান্স ও প্রি-এম্পটিবল ভিএম' },
  },
};
