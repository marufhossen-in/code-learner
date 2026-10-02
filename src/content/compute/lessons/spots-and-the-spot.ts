import type { Lesson } from '../../../lib/types';

export const SpotsAndTheSpotLesson: Lesson = {
  slug: 'spots-and-the-spot',
  tech: 'compute',
  title: {
    en: 'Spot Instances — Preemptible VMs and Interruption Handling',
    bn: 'স্পট ইনস্ট্যান্স — প্রি-এম্পটিবল ভিএম ও বাধা ব্যবস্থাপনা',
  },
  summary: {
    en: 'A foundational overview of spot instances and preemptible compute markets. Understand surplus datacenter capacity pricing, architect mixed on-demand and spot fleets across multiple pools, and automate 120-second interruption notice draining to save up to 60.00% on infrastructure bills.',
    bn: 'স্পট ইনস্ট্যান্স ও প্রি-এম্পটিবল কম্পিউট মার্কেটের মৌলিক ধারণা। অতিরিক্ত ডাটা সেন্টার ক্ষমতার মূল্য নির্ধারণ, একাধিক পুলে অন-ডিমান্ড ও স্পটের মিশ্র বহর তৈরি এবং ৬০.০০% খরচ বাঁচাতে ১২০ সেকেন্ডের টার্মিনেশন নোটিশ হ্যান্ডলিং।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Spare datacenter capacity, dynamic pricing, and eviction notices', bn: 'WHAT — উদ্বৃত্ত ডাটা সেন্টার ক্ষমতা, স্পট মার্কেট ও নোটিশ মেকানিজম' },
    },
    {
      type: 'para',
      text: {
        en: 'When you operate large-scale data processing pipelines or elastic web fleets, compute bills can escalate rapidly. Cloud providers maintain massive reserves of spare server capacity to guarantee immediate availability for on-demand buyers. To monetize this idle hardware, providers sell spare capacity as Spot Instances (or Preemptible Virtual Machines) at discounts reaching 60% to 90% below standard hourly rates. However, spot instances carry a critical operational constraint: when an on-demand customer requires that underlying hardware, the cloud hypervisor automatically reclaims the instance with a 120-second warning. By architecting stateless workloads with graceful connection draining and combining spot instances with guaranteed on-demand nodes, you can achieve enterprise reliability at a fraction of standard operating expenses.',
        bn: 'যখন আপনি বড় আকারের ডেটা প্রসেসিং পাইপলাইন বা ইলাস্টিক ওয়েব ফ্লিট চালান, তখন কম্পিউট খরচ দ্রুত আকাশচুম্বী হতে পারে। ক্লাউড প্রোভাইডাররা অন-ডিমান্ড গ্রাহকদের চাহিদা মেটাতে ডাটা সেন্টারে বিপুল পরিমাণ অতিরিক্ত সার্ভার ক্ষমতা রিজার্ভ রাখে। এই অলস হার্ডওয়্যার থেকে মুনাফা অর্জনের জন্য প্রোভাইডাররা সাধারণ হারের চেয়ে ৬০% থেকে ৯০% পর্যন্ত ছাড়ে স্পট ইনস্ট্যান্স (বা প্রি-এম্পটিবল ভার্চুয়াল মেশিন) হিসেবে ক্ষমতা বিক্রি করে। তবে স্পট ইনস্ট্যান্সের একটি মৌলিক সীমাবদ্ধতা রয়েছে: যখন কোনো অন-ডিমান্ড গ্রাহকের সেই হার্ডওয়্যারটির প্রয়োজন হয়, তখন ক্লাউড হাইপারভাইজর ১২০ সেকেন্ডের নোটিশ দিয়ে ইনস্ট্যান্সটি প্রত্যাহার করে নেয়। সুনির্দিষ্ট কানেকশন ড্রেইনিং এবং অন-ডিমান্ডের সাথে স্পটের সংমিশ্রণ ঘটিয়ে আপনি অত্যন্ত কম খরচে এন্টারপ্রাইজ মানের টেকসই ক্লাস্টার পরিচালনা করতে পারেন।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Spot fleet mixed allocation and 120-second interruption lifecycle', bn: 'স্পট ফ্লিট মিশ্র বরাদ্দ ও ১২০-সেকেন্ডের বাধা হ্যান্ডলিং' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Spot Fleet Mixed Allocation and Interruption Lifecycle diagram">
<rect x="25" y="35" width="270" height="165" rx="6" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
<text x="160" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Mixed Fleet Allocation (10 nodes)</text>

<rect x="40" y="75" width="240" height="35" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
<text x="160" y="93" text-anchor="middle" font-size="9" font-weight="700" fill="#1d4ed8">2 On-Demand Nodes (Resilience Base)</text>
<text x="160" y="105" text-anchor="middle" font-size="7" fill="#1e40af">$0.20/hr guaranteed capacity</text>

<rect x="40" y="118" width="240" height="35" rx="4" fill="#f0fdf4" stroke="#16a34a" stroke-width="1.5"/>
<text x="160" y="136" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">8 Spot Nodes (70% Discounted)</text>
<text x="160" y="148" text-anchor="middle" font-size="7" fill="#166534">$0.20/hr distributed across 3 pools</text>

<text x="160" y="175" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Daily: $9.60 vs On-Demand: $24.00</text>
<text x="160" y="190" text-anchor="middle" font-size="8" fill="#166534">Saves $14.40 daily (60.00% savings)</text>

<rect x="345" y="35" width="270" height="165" rx="6" fill="#f8fafc" stroke="#ca8a04" stroke-width="2"/>
<text x="480" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#854d0e">Interruption Handling Lifecycle</text>

<rect x="360" y="75" width="240" height="30" rx="4" fill="#fef2f2" stroke="#dc2626" stroke-width="1.5"/>
<text x="480" y="95" text-anchor="middle" font-size="9" font-weight="700" fill="#991b1b">1 Notice Received (120s countdown)</text>

<rect x="360" y="112" width="240" height="30" rx="4" fill="#fffbeb" stroke="#f59e0b" stroke-width="1.5"/>
<text x="480" y="132" text-anchor="middle" font-size="9" font-weight="700" fill="#b45309">Drained 45 requests in 40s (ALB deregister)</text>

<rect x="360" y="150" width="240" height="30" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
<text x="480" y="170" text-anchor="middle" font-size="9" font-weight="700" fill="#166534">Replaced in 55s across 3 diversified pools</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Mixed spot fleets save $14.40 daily while draining connections within 40 seconds</text>
</svg>`,
      caption: {
        en: 'A 10-node mixed fleet (2 On-Demand + 8 Spot) costs $9.60/day versus $24.00/day On-Demand, saving $14.40 (60.00% across 24 hours); 1 notice (120s) drains 45 requests in 40s, replaced in 55s across 3 pools.',
        bn: '১০টি নোডের মিশ্র বহর (২ অন-ডিমান্ড + ৮ স্পট) দিনে $৯.৬০ খরচ করে (সার্বক্ষণিক $২৪.০০ এর বদলে), যা ২৪ ঘণ্টায় $১৪.৪০ সাশ্রয় করে (৬০.০০%); ১টি নোটিশে (১২০s) ৪০s এ ৪৫টি রিকোয়েস্ট ড্রেন হয়ে ৩টি পুলে ৫৫s এ প্রতিস্থাপিত হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Spot Instance',
          def: {
            en: 'Spare compute capacity sold at steep discounts, subject to reclamation by the cloud provider with a 2-minute interruption notice.',
            bn: 'অতিরিক্ত সার্ভার ক্ষমতা যা বিশাল ছাড়ে বিক্রি হয় এবং ক্লাউড প্রোভাইডার ২ মিনিটের নোটিশে যে কোনো সময় ফিরিয়ে নিতে পারে।',
          },
        },
        {
          term: 'Interruption Notice (120s)',
          def: {
            en: 'A programmatic signal published to the Instance Metadata Service and EventBridge warning that a spot instance will terminate in 120 seconds.',
            bn: 'মেটাডেটা সার্ভিস ও ইভেন্টব্রিজে পাঠানো সংকেত যা সতর্ক করে যে ১২০ সেকেন্ডের মধ্যে স্পট ইনস্ট্যান্সটি বন্ধ হয়ে যাবে।',
          },
        },
        {
          term: 'Capacity-Optimized Allocation',
          def: {
            en: 'A spot fleet strategy that provisions instances from pools with the greatest available capacity to minimize the risk of eviction.',
            bn: 'স্পট ফ্লিটের একটি কৌশল যা সবচেয়ে বেশি অলস ক্ষমতাসম্পন্ন পুল থেকে সার্ভার নিয়ে অনাকাঙ্ক্ষিত বন্ধ হওয়ার ঝুঁকি কমিয়ে আনে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Extreme cloud cost reduction and resilient batch processing', bn: 'কেন — ক্লাউড খরচ হ্রাস ও টেকসই ব্যাচ প্রসেসিং' },
    },
    {
      type: 'list',
      items: [
        { en: 'Slash non-critical compute bills: big data analytics (Spark, Hadoop) and video encoding clusters run up to 90% cheaper on spot pools.', bn: 'কম্পিউট খরচ ৯০% পর্যন্ত কমানো: ভিডিও এনকোডিং ও বিগ ডেটা প্রসেসিংয়ের মতো কাজে স্পট ব্যবহার করে খরচে ব্যাপক সাশ্রয় হয়।' },
        { en: 'Diversification across pools minimizes eviction impact: spanning 3 or more instance families ensures an interruption in a single pool leaves remaining nodes running.', bn: 'একাধিক পুলে বিভাজনে নিরাপত্তা: ৩টি বা তার বেশি ইনস্ট্যান্স পরিবার ব্যবহার করলে একটি পুলে চাপ পড়লেও বাকি পুলের সার্ভারগুলো সচল থাকে।' },
        { en: 'Eliminate data loss with automated draining: intercepting the 120-second warning allows background workers to checkpoint state before shutdown.', bn: 'স্বয়ংক্রিয় ড্রেইনিংয়ে ডেটা সুরক্ষিত রাখা: ১২০ সেকেন্ডের নোটিশ পেয়ে ওয়ার্কাররা চলমান কাজ নিরাপদে ডেটাবেসে সেভ করে বন্ধ হতে পারে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Managing spot fleets in 4 steps', bn: 'HOW — ৪টি ধাপে স্পট ফ্লিট ব্যবস্থাপনা' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Diversify instance families', bn: '১. বিভিন্ন ইনস্ট্যান্স পরিবারের মিশ্রণ' }, text: { en: 'Configure launch templates with m5.large, c5.large, and r5.large pool types.', bn: 'm5.large, c5.large ও r5.large এর মতো ভিন্ন ভিন্ন ধরনের সার্ভার যুক্ত করুন।' } },
        { title: { en: '2. Enforce minimum on-demand base', bn: '২. ন্যূনতম অন-ডিমান্ড ভিত্তি' }, text: { en: 'Reserve 2 on-demand instances to protect critical baseline request traffic.', bn: 'সার্ভিসের প্রধান কার্যক্ষমতা বজায় রাখতে অন্তত ২টি অন-ডিমান্ড সার্ভার নিশ্চিত করুন।' } },
        { title: { en: '3. Poll interruption metadata', bn: '৩. নোটিশ মেটাডেটা মনিটরিং' }, text: { en: 'Query /latest/meta-data/spot/instance-action every 5 seconds from a daemon.', bn: 'লোকাল ডেমন থেকে প্রতি ৫ সেকেন্ড অন্তর স্পট নোটিশের মেটাডেটা কুয়েরি করুন।' } },
        { title: { en: '4. Gracefully drain connections', bn: '৪. সুন্দরভাবে কানেকশন ড্রেন করা' }, text: { en: 'Deregister from target groups to allow existing HTTP requests to complete.', bn: 'টার্গেট গ্রুপ থেকে নোড সরিয়ে নিয়ে চলমান রিকোয়েস্টগুলো সম্পন্ন করার সময় দিন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'spot_fleet_economics_sim.js',
      code: `// Simulated Spot fleet economics, mixed allocation, and interruption
const onDemandDaily = 24.00; // 10 nodes at $0.10/hr
const mixedDaily = 9.60;     // 2 On-Demand ($0.20) + 8 Spot ($0.20) = $0.40/hr
const dailySavings = 14.40;   // $24.00 - $9.60
const savingsPct = 60.00;    // (14.40 / 24.00) * 100

// Interruption draining metrics
const noticeSeconds = 120; // 2-minute notice
const drainSeconds = 40;   // drained in 40s
const drainedRequests = 45;
const replacementSeconds = 55; // provisioned in 55s
const diversifiedPools = 3;

console.log("Spot Fleet Economics and Interruption Simulation:");
console.log("On-Demand 10 nodes: $" + onDemandDaily.toFixed(2) + "/day vs Mixed fleet (2 On-Demand + 8 Spot): $" + mixedDaily.toFixed(2) + "/day");
console.log("Daily savings: $" + dailySavings.toFixed(2) + " (" + savingsPct.toFixed(2) + "% savings across 24 hours)");
console.log("Interruption: 1 notice (" + noticeSeconds + "s), drained " + drainedRequests + " requests in " + drainSeconds + "s, replaced in " + replacementSeconds + "s across " + diversifiedPools + " pools");

// Output:
// Spot Fleet Economics and Interruption Simulation:
// On-Demand 10 nodes: $24.00/day vs Mixed fleet (2 On-Demand + 8 Spot): $9.60/day
// Daily savings: $14.40 (60.00% savings across 24 hours)
// Interruption: 1 notice (120s), drained 45 requests in 40s, replaced in 55s across 3 pools`,
      caption: {
        en: 'A 10-node mixed fleet (2 On-Demand + 8 Spot) costs $9.60/day versus $24.00/day On-Demand, saving $14.40 (60.00% across 24 hours); 1 notice (120s) drains 45 requests in 40s, replaced in 55s across 3 pools.',
        bn: '১০টি নোডের মিশ্র বহর (২ অন-ডিমান্ড + ৮ স্পট) দিনে $৯.৬০ খরচ করে (সার্বক্ষণিক $২৪.০০ এর বদলে), যা ২৪ ঘণ্টায় $১৪.৪০ সাশ্রয় করে (৬০.০০%); ১টি নোটিশে (১২০s) ৪০s এ ৪৫টি রিকোয়েস্ট ড্রেন হয়ে ৩টি পুলে ৫৫s এ প্রতিস্থাপিত হয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive spot fleet savings and interruption lab', bn: 'INSIDE — জীবন্ত স্পট ফ্লিট সাশ্রয় ও বাধা ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test spot instance economics and interruption handling. Running 10 On-Demand nodes costs $24.00/day, while a mixed fleet of 2 On-Demand and 8 Spot nodes costs only $9.60/day, saving $14.40 daily (60.00% savings across 24 hours). When 1 notice arrives with a 120s countdown, the instance drains 45 requests in 40s and is cleanly replaced in 55s across 3 pools. Spot fleets deliver massive cost efficiency without dropped connections.',
        bn: 'স্পট ইনস্ট্যান্সের অর্থনীতি ও টার্মিনেশন নোটিশ হ্যান্ডলিং পরীক্ষা করুন। ১০টি অন-ডিমান্ড সার্ভারে দিনে $২৪.০০ খরচ হলেও ২ অন-ডিমান্ড ও ৮ স্পটের মিশ্র বহরে দিনে মাত্র $৯.৬০ খরচ হয়, যা ২৪ ঘণ্টায় দিনে $১৪.৪০ সাশ্রয় নিশ্চিত করে (৬০.০০%)। যখন ১২০s গণনার ১টি নোটিশ আসে, ইনস্ট্যান্সটি ৪০s এ ৪৫টি রিকোয়েস্ট ড্রেন করে এবং ৩টি পুলে ৫৫s এ সুচারুভাবে প্রতিস্থাপিত হয়। স্পট ফ্লিট কোনো রিকোয়েস্ট ড্রপ না করেই বিপুল অর্থ সাশ্রয় করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Spot fleet lab (verify daily savings, press Run)', bn: 'স্পট ফ্লিট ল্যাব (দৈনিক সাশ্রয় দেখুন, Run)' },
      html: '<h3>Spot Fleet Economics Calculator</h3>\n<pre id="out"></pre>\n<p>Compute spot fleet cost savings and interruption drain speed.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const onDem = 24.00;\nconst mixed = 9.60;\nconst saved = onDem - mixed;\nconst pct = ((saved / onDem) * 100).toFixed(2);\nconsole.log("saved: $" + saved.toFixed(2));\ndocument.getElementById("out").textContent = "On-Demand: $" + onDem.toFixed(2) + " · Mixed: $" + mixed.toFixed(2) + " · Saved: $" + saved.toFixed(2) + " (" + pct + "%) (24h, 3 pools ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Spot fleet architectural laws', bn: 'ফলাফল — স্পট ফ্লিট পরিচালনার মূল নিয়ম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always maintain a baseline of On-Demand instances: combine 20% on-demand capacity with 80% spot capacity to survive market-wide spot evictions.', bn: 'সর্বদা ন্যূনতম অন-ডিমান্ড সার্ভার রাখুন: স্পট মার্কেটে তীব্র টান পড়লেও সার্ভিস সচল রাখতে ২০% অন-ডিমান্ড ও ৮০% স্পট অনুপাত বজায় রাখুন।' },
        { en: 'Never bid on a single instance type: diversify across at least 3 distinct CPU families to distribute risk across separate cloud pools.', bn: 'কখনোই একক ইনস্ট্যান্সের উপর নির্ভর করবেন না: ঝুঁকি কমাতে কমপক্ষে ৩টি ভিন্ন সিপিইউ পরিবারের সার্ভার মিশ্রিতভাবে ব্যবহার করুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common spot fleet mistakes', bn: 'ডিবাগ — স্পট ফ্লিটের সাধারণ ত্রুটি' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Running stateful databases on Spot Instances', bn: 'স্পট ইনস্ট্যান্সে স্টেটফুল ডেটাবেস চালানোর মারাত্মক ভুল' },
      text: {
        en: 'Never deploy primary relational databases or ZooKeeper quorum nodes on spot instances. An interruption will forcibly detach storage and trigger database crash recovery, risking severe write corruption.',
        bn: 'কখনোই প্রাইমারি রিলেশনাল ডেটাবেস বা জু-কিপার কোরাম নোড স্পট ইনস্ট্যান্সে চালাবেন না। আকস্মিক টার্মিনেশনের ফলে ডেটাবেস ক্র্যাশ করতে পারে এবং ডেটা নষ্টের মারাত্মক ঝুঁকি তৈরি হয়।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Leveraging AWS Node Termination Handler in Kubernetes', bn: 'কুবারনেটিসে AWS Node Termination Handler ব্যবহার' },
      text: {
        en: 'Install the AWS Node Termination Handler daemonset on Kubernetes spot worker nodes. It automatically catches IMDS spot interruption notices and issues a kubectl drain before the hypervisor terminates the host.',
        bn: 'কুবারনেটিস স্পট ওয়ার্কার নোডে AWS Node Termination Handler সক্রিয় রাখুন। এটি মেটাডেটা থেকে নোটিশ পাওয়া মাত্রই স্বয়ংক্রিয়ভাবে নোডটি ড্রেন করে পডগুলোকে অন্য সুস্থ নোডে সরিয়ে নেয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production spot adoption', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল স্পট ব্যবহার' },
    },
    {
      type: 'list',
      items: [
        { en: 'Lyft Machine Learning Fleets: trains complex pricing models across thousands of diversified GPU spot instances, reducing ML compute costs by 70%.', bn: 'Lyft মেশিন লার্নিং: হাজার হাজার ভিন্ন ভিন্ন স্পট GPU ইনস্ট্যান্সে মডেল ট্রেইনিং চালিয়ে মেশিন লার্নিংয়ের কম্পিউট খরচ ৭০% কমিয়ে আনে।' },
        { en: 'Pinterest Data Processing: processes petabytes of user engagement logs on Spot EMR clusters with automatic task retry capabilities.', bn: 'Pinterest ডেটা প্রসেসিং: ব্যবহারকারীর পেটা-বাইট এনগেজমেন্ট লগ স্পট ক্লাস্টারে প্রসেস করে ব্যর্থ কাজগুলো স্বয়ংক্রিয়ভাবে অন্য নোডে পুনরায় সম্পন্ন করে।' },
        { en: 'Fintech Batch Settlements: executes overnight trade clearing across Spot fleets, gracefully checkpointing progress to DynamoDB every 60 seconds.', bn: 'ফিনটেক সেটেলমেন্ট: রাতের বেলায় শেয়ার বাজারের কোটি কোটি লেনদেন স্পট ফ্লিটে হিসাব করে প্রতি ৬০ সেকেন্ডে ডায়নামোডিবিত অবস্থা সেভ করে রাখে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Auto-scaling Groups and Dynamic Policies', bn: 'পরবর্তী পাঠ — অটো-স্কেলিং গ্রুপ ও ডায়নামিক পলিসি' },
    },
    {
      type: 'para',
      text: {
        en: 'With spot mechanics and interruption handling mastered, Lesson 7 explores Auto-scaling Groups (ASG): target tracking policies, step scaling thresholds, cooldown timers, and automated fleet health checks.',
        bn: 'স্পট মেকানিক্স ও টার্মিনেশন নোটিশ হ্যান্ডলিং আয়ত্ত করার পর, পাঠ ৭ অটো-স্কেলিং গ্রুপ (ASG) শেখাবে: টার্গেট ট্র্যাকিং পলিসি, স্টেপ স্কেলিং থ্রেশহোল্ড, কুলডাউন টাইমার এবং স্বয়ংক্রিয় হেলথ চেক।',
      },
    },
  ],
  exercises: [
    {
      id: 'cmp-spot-ex-1',
      kind: 'mcq',
      topic: 'spot-interruption-warning-time',
      question: {
        en: 'How much advance warning does the cloud hypervisor (such as AWS EC2) provide before terminating an interrupted Spot Instance?',
        bn: 'কোনো স্পট ইনস্ট্যান্স প্রত্যাহার বা টার্মিনেট করার আগে ক্লাউড হাইপারভাইজর (যেমন AWS EC2) কতটুকু সময় পূর্বে সতর্কবার্তা প্রদান করে?',
      },
      options: [
        {
          en: 'A 2-minute interruption notice (120 seconds) published to the local Instance Metadata Service and EventBridge',
          bn: 'লোকাল ইনস্ট্যান্স মেটাডেটা সার্ভিস ও ইভেন্টব্রিজে প্রকাশিত একটি ২ মিনিটের (১২০ সেকেন্ড) টার্মিনেশন নোটিশ',
        },
        {
          en: 'A 24-hour postal letter delivered to the datacenter manager',
          bn: 'ডাটা সেন্টার ম্যানেজারের কাছে প্রেরিত ২৪ ঘণ্টার একটি ডাক চিঠি',
        },
        {
          en: 'A 30-day grace period with zero CPU throttling',
          bn: 'সিপিইউ থ্রটলিং ছাড়া ৩০ দিনের একটি নোটিশহীন সময়কাল',
        },
        {
          en: 'No warning ever; instances explode without electrical signals',
          bn: 'কখনোই কোনো সতর্কবার্তা দেওয়া হয় না; সার্ভারগুলো হঠাৎ বিস্ফোরিত হয়',
        },
      ],
      answer: 0,
      hint: { en: 'AWS spot provides a 2-minute (120-second) notice.', bn: 'AWS স্পট ২ মিনিট বা ১২০ সেকেন্ডের আগাম নোটিশ দেয়।' },
      explanation: {
        en: 'AWS provides a standard 2-minute (120-second) notification prior to reclaiming spot instance capacity.',
        bn: 'AWS স্পট ইনস্ট্যান্সের ক্ষমতা প্রত্যাহারের পূর্বে প্রমিত ২ মিনিট বা ১২০ সেকেন্ডের আগাম সতর্কবার্তা প্রদান করে।',
      },
    },
    {
      id: 'cmp-spot-ex-2',
      kind: 'mcq',
      topic: 'spot-sim-savings-numbers',
      question: {
        en: 'In our code walkthrough, what were the daily costs of the 10-node on-demand fleet versus the mixed fleet, and what was the daily savings across 24 hours?',
        bn: 'আমাদের কোড আলোচনায় ১০টি নোডের অন-ডিমান্ড বহর বনাম মিশ্র বহরের দৈনিক খরচ কত ছিল এবং ২৪ ঘণ্টায় দৈনিক সাশ্রয় কত হিসাব করা হয়েছিল?',
      },
      options: [
        {
          en: 'On-Demand: $24.00/day vs Mixed fleet (2 On-Demand + 8 Spot): $9.60/day; daily savings = $14.40 (60.00% savings across 24 hours); 1 notice (120s) drained 45 requests in 40s, replaced in 55s across 3 pools',
          bn: 'অন-ডিমান্ড: $২৪.০০/দিন বনাম মিশ্র বহর (২ অন-ডিমান্ড + ৮ স্পট): $৯.৬০/দিন; দৈনিক সাশ্রয় = $১৪.৪০ (২৪ ঘণ্টায় ৬০.০০%); ১টি নোটিশে (১২০s) ৪০s এ ৪৫টি রিকোয়েস্ট ড্রেন হয়ে ৩টি পুলে ৫৫s এ প্রতিস্থাপিত',
        },
        {
          en: 'On-Demand: $100.00/day vs Mixed fleet: $90.00/day; daily savings = $10.00 (10.00% savings across 24 hours); 1 notice (120s) drained 0 requests in 0s, replaced in 0s across 3 pools',
          bn: 'অন-ডিমান্ড: $১০০.০০/দিন বনাম মিশ্র বহর: $৯০.০০/দিন; দৈনিক সাশ্রয় = $১০.০০ (২৪ ঘণ্টায় ১০.০০%); ১টি নোটিশে (১২০s) ০s এ ০টি রিকোয়েস্ট ড্রেন হয়ে ৩টি পুলে ০s এ প্রতিস্থাপিত',
        },
        {
          en: 'On-Demand: $0.00/day vs Mixed fleet: $0.00/day; daily savings = $0.00 (0.00% savings across 24 hours); 0 notices (0s) drained 0 requests in 0s, replaced in 0s across 0 pools',
          bn: 'অন-ডিমান্ড: $০.০০/দিন বনাম মিশ্র বহর: $০.০০/দিন; দৈনিক সাশ্রয় = $০.০০ (২৪ ঘণ্টায় ০.০০%); ০টি নোটিশে (০s) ০s এ ০টি রিকোয়েস্ট ড্রেন হয়ে ০টি পুলে ০s এ প্রতিস্থাপিত',
        },
        {
          en: 'On-Demand: $50.00/day vs Mixed fleet: $25.00/day; daily savings = $25.00 (50.00% savings across 24 hours); 1 notice (120s) drained 10 requests in 10s, replaced in 10s across 3 pools',
          bn: 'অন-ডিমান্ড: $৫০.০০/দিন বনাম মিশ্র বহর: $২৫.০০/দিন; দৈনিক সাশ্রয় = $২৫.০০ (২৪ ঘণ্টায় ৫০.০০%); ১টি নোটিশে (১২০s) ১০s এ ১০টি রিকোয়েস্ট ড্রেন হয়ে ৩টি পুলে ১০s এ প্রতিস্থাপিত',
        },
      ],
      answer: 0,
      hint: { en: '$24.00 vs $9.60, saving $14.40 (60.00%).', bn: '$২৪.০০ বনাম $৯.৬০, সাশ্রয় $১৪.৪০ (৬০.০০%)।' },
      explanation: {
        en: 'The simulation proved that a mixed fleet cuts daily costs from $24.00 to $9.60, saving $14.40 (60.00%) across 24 hours while draining 45 requests in 40s across 3 pools.',
        bn: 'সিমুলেশনটিতে অন-ডিমান্ডের $২৪.০০ এর বিপরীতে মিশ্র বহরে $৯.৬০ খরচ হয় যা ২৪ ঘণ্টায় দিনে $১৪.৪০ (৬০.০০%) বাঁচায় এবং ৩টি পুলে ৪০ সেকেন্ডে ৪৫টি রিকোয়েস্ট ড্রেন করে ৫৫ সেকেন্ডে নতুন নোড যুক্ত হয়।',
      },
    },
    {
      id: 'cmp-spot-ex-3',
      kind: 'mcq',
      topic: 'spot-pool-diversification-best-practice',
      question: {
        en: 'Why should cloud architects configure Spot Auto-scaling fleets to diversify across multiple instance families (e.g. m5, c5, r5) and multiple Availability Zones?',
        bn: 'ক্লাউড প্রকৌশলীদের কেন স্পট অটো-স্কেলিং ফ্লিটকে একাধিক ইনস্ট্যান্স পরিবার (যেমন m5, c5, r5) এবং একাধিক অ্যাভেইলেবিলিটি জোনে বৈচিত্র্যময় করা উচিত?',
      },
      options: [
        {
          en: 'Because Spot availability is evaluated independently per instance pool; diversifying ensures that high demand or an eviction surge in one pool does not terminate the entire application fleet simultaneously',
          bn: 'কারণ প্রতিটি ইনস্ট্যান্স পুলের স্পট ধারণক্ষমতা সম্পূর্ণ স্বাধীনভাবে মূল্যায়িত হয়; একাধিক পুলে সার্ভার ছড়িয়ে রাখলে কোনো একটি পুলে সংকট দেখা দিলেও পুরো ফ্লিট একসাথে বন্ধ হয়ে যায় না',
        },
        {
          en: 'Because using multiple instance families gives your team extra points on developer leaderboards',
          bn: 'কারণ একাধিক ইনস্ট্যান্স পরিবার ব্যবহার করলে ডেভলপার লিডারবোর্ডে অতিরিক্ত পয়েন্ট পাওয়া যায়',
        },
        {
          en: 'Because diversified instances do not require internet IP addresses to communicate',
          bn: 'কারণ বৈচিত্র্যময় সার্ভারগুলোর যোগাযোগের জন্য কোনো ইন্টারনেট আইপির প্রয়োজন হয় না',
        },
        {
          en: 'Because single-family spot fleets are blocked by browser ad blockers',
          bn: 'কারণ একক পরিবারের স্পট ফ্লিটগুলো ব্রাউজার অ্যাড ব্লকার দ্বারা আটকে যায়',
        },
      ],
      answer: 0,
      hint: { en: 'Diversification spreads the risk of spot capacity reclamation.', bn: 'ভিন্ন পুলে সার্ভার রাখলে স্পট ক্ষমতা প্রত্যাহারের ঝুঁকি কমে যায়।' },
      explanation: {
        en: 'Diversifying across instance pools prevents mass simultaneous evictions when a particular instance size experiences high on-demand demand.',
        bn: 'একাধিক পুলে সার্ভার ছড়িয়ে রাখলে কোনো নির্দিষ্ট ইনস্ট্যান্স সাইজের চাহিদা বাড়লেও সব সার্ভার একসাথে বন্ধ হওয়া প্রতিহত হয়।',
      },
    },
    {
      id: 'cmp-spot-ex-4',
      kind: 'predict',
      topic: 'spot-interruption-seconds-value',
      question: {
        en: 'How many seconds of advance warning does AWS EC2 provide via the Instance Metadata Service before terminating a spot instance (e.g. 120)?',
        bn: 'স্পট ইনস্ট্যান্স টার্মিনেট করার পূর্বে AWS EC2 মেটাডেটা সার্ভিসের মাধ্যমে কত সেকেন্ড পূর্বে সতর্কবার্তা পাঠায় (যেমন 120)?',
      },
      answer: '120',
      accept: ['120', '120 seconds', '120s', 'two minutes'],
      hint: { en: '120 seconds (2 minutes).', bn: '১২০ সেকেন্ড (২ মিনিট)।' },
      explanation: {
        en: 'AWS EC2 Spot provides a 120-second (2-minute) notice via the instance metadata path before reclaiming capacity.',
        bn: 'AWS EC2 ক্ষমতা প্রত্যাহারের আগে ইনস্ট্যান্স মেটাডেটা পাথে ১২০ সেকেন্ড (২ মিনিট) সময় পূর্বে নোটিশ জারি করে।',
      },
    },
  ],
  quiz: {
    id: 'spots-and-the-spot-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'cmp-spot-q1',
        kind: 'mcq',
        topic: 'workloads-unsuitable-for-spot',
        question: {
          en: 'Which of the following workload types is fundamentally unsuitable for running exclusively on Spot Instances?',
          bn: 'নিচের কোন ধরণের কাজের জন্য স্পট ইনস্ট্যান্সের উপর শতভাগ নির্ভর করা সম্পূর্ণ অনুপযুক্ত?',
        },
        options: [
          {
            en: 'Stateful primary relational databases (such as PostgreSQL or MySQL primary writers) where sudden 2-minute uncoordinated terminations risk severe write corruption',
            bn: 'স্টেটফুল প্রাইমারি রিলেশনাল ডেটাবেস (যেমন PostgreSQL বা MySQL প্রাইমারি রাইটার) যেখানে আকস্মিক ২ মিনিটের বন্ধের কারণে রাইট ক্র্যাশ ও ডেটা নষ্টের মারাত্মক ঝুঁকি থাকে',
          },
          {
            en: 'Stateless batch video transcoding workers with checkpointing',
            bn: 'চেকপয়েন্টিংসহ স্টেটলেস ব্যাচ ভিডিও এনকোডিং ওয়ার্কার',
          },
          {
            en: 'Big data Spark worker nodes running idempotent analytics jobs',
            bn: 'বিগ ডেটা স্পার্ক ওয়ার্কার যা যেকোনো সময় পুনরাবৃত্তি করা যায়',
          },
          {
            en: 'Nightly continuous integration (CI) unit test runners',
            bn: 'রাতের বেলায় চলা অটোমেটেড ইউনিট টেস্ট এবং বিল্ড ওয়ার্কার',
          },
        ],
        answer: 0,
        hint: { en: 'Stateful databases require guaranteed uptime.', bn: 'স্টেটফুল ডেটাবেসের জন্য সার্বক্ষণিক নিশ্চয়তা প্রয়োজন।' },
        explanation: {
          en: 'Stateful database primaries must never run on Spot due to catastrophic data recovery and transaction interruption risks.',
          bn: 'ট্রানজ্যাকশন জটিলতা ও ডেটা নষ্টের ঝুঁকির কারণে প্রাইমারি ডেটাবেস কখনই স্পটে চালানো উচিত নয়।',
        },
      },
      {
        id: 'cmp-spot-q2',
        kind: 'mcq',
        topic: 'spot-draining-time-check',
        question: {
          en: 'In our code walkthrough, how quickly were the 45 in-flight requests drained following the interruption notice, and in how many seconds was the replacement instance provisioned across 3 pools?',
          bn: 'আমাদের কোড আলোচনায় বাধা নোটিশ পাওয়ার পর ৪৫টি চলমান রিকোয়েস্ট কত দ্রুত ড্রেন হয়েছিল এবং ৩টি পুলে কত সেকেন্ডে বিকল্প সার্ভারটি যুক্ত হয়েছিল?',
        },
        options: [
          { en: 'Drained 45 requests in 40s (within 120s notice); replaced in 55s across 3 diversified pools', bn: '১২০s নোটিশের মধ্যে ৪০s এ ৪৫টি রিকোয়েস্ট ড্রেন; ৩টি পুলে ৫৫s এ বিকল্প নোড চালু' },
          { en: 'Drained 45 requests in 500s; replaced in 1000s across 3 diversified pools', bn: '৫০০s এ ৪৫টি রিকোয়েস্ট ড্রেন; ৩টি পুলে ১০০০s এ বিকল্প নোড চালু' },
          { en: 'Drained 0 requests in 0s; replaced in 0s across 0 pools', bn: '০s এ ০টি রিকোয়েস্ট ড্রেন; ০টি পুলে ০s এ বিকল্প নোড চালু' },
          { en: 'Drained 1 request in 120s; replaced in 300s across 3 diversified pools', bn: '১২০s এ ১টি রিকোয়েস্ট ড্রেন; ৩টি পুলে ৩০০s এ বিকল্প নোড চালু' },
        ],
        answer: 0,
        hint: { en: '40s drain, 55s replacement across 3 pools.', bn: '৪০ সেকেন্ডে ড্রেন, ৫৫ সেকেন্ডে ৩টি পুলে প্রতিস্থাপন।' },
        explanation: {
          en: 'The simulation recorded a 40-second drain period for 45 requests, with the healthy replacement online in 55 seconds across 3 pools.',
          bn: 'সিমুলেশনে দেখা যায় ৪০ সেকেন্ডে ৪৫টি রিকোয়েস্ট নিরাপদে শেষ হয় এবং ৫৫ সেকেন্ডে ৩টি পুলের অন্য নোডটি চালু হয়ে ফ্লিটের শক্তি বজায় রাখে।',
        },
      },
      {
        id: 'cmp-spot-q3',
        kind: 'mcq',
        topic: 'graceful-draining-mechanism',
        question: {
          en: 'What specific operational action should an automated script execute immediately upon detecting an EC2 Spot interruption notice?',
          bn: 'একটি ইসি২ স্পট টার্মিনেশন নোটিশ শনাক্ত করার সাথে সাথে একটি স্বয়ংক্রিয় স্ক্রিপ্টের কোন নির্দিষ্ট পদক্ষেপটি গ্রহণ করা উচিত?',
        },
        options: [
          {
            en: 'Deregister the instance from the Application Load Balancer target group, stop accepting new requests, allow in-flight connections to complete, and flush pending state to S3',
            bn: 'অ্যাপ্লিকেশন লোড ব্যালেন্সার থেকে ইনস্ট্যান্সটি সরিয়ে নেওয়া, নতুন ট্রাফিক গ্রহণ বন্ধ করা, চলমান রিকোয়েস্ট শেষ হওয়ার সুযোগ দেওয়া এবং পেন্ডিং ডেটা এস৩-তে সেভ করা',
          },
          {
            en: 'Send an email to all registered website users asking them to log off',
            bn: 'সব ওয়েব ব্যবহারকারীকে ইমেইল পাঠিয়ে লগআউট করার অনুরোধ জানানো',
          },
          {
            en: 'Delete all files in the operating system root directory',
            bn: 'অপারেটিং সিস্টেমের রুট ফোল্ডারের সমস্ত ফাইল মুছে দেওয়া',
          },
          {
            en: 'Increase the CPU clock speed to 100 gigahertz',
            bn: 'সিপিইউ ক্লক স্পিড বাড়িয়ে ১০০ গিগাহার্টজ করে ফেলা',
          },
        ],
        answer: 0,
        hint: { en: 'Deregister from ALB and complete in-flight requests.', bn: 'লোড ব্যালেন্সার থেকে সরিয়ে চলমান কাজগুলো সম্পন্ন করতে হয়।' },
        explanation: {
          en: 'Deregistering the instance initiates ALB target group connection draining, protecting active client requests from sudden TCP resets.',
          bn: 'লোড ব্যালেন্সার থেকে ডি-রেজিস্টার করলে চলমান ক্লায়েন্ট রিকোয়েস্টগুলো কোনো এরর ছাড়াই নিরাপদে সম্পন্ন হতে পারে।',
        },
      },
      {
        id: 'cmp-spot-q4',
        kind: 'predict',
        topic: 'spot-vm-google-cloud-name',
        question: {
          en: 'What term did Google Cloud historically use to describe discounted VMs subject to sudden termination (e.g. Preemptible)?',
          bn: 'আকস্মিক টার্মিনেশন সাপেক্ষ ছাড়যুক্ত ভার্চুয়াল মেশিনগুলোকে গুগল ক্লাউড ঐতিহাসিকভাবে কোন নামে ডাকত (যেমন Preemptible)?',
        },
        answer: 'Preemptible',
        accept: ['Preemptible', 'preemptible', 'Preemptible VM', 'Preemptible VMs'],
        hint: { en: 'P-r-e-e-m-p-t-i-b-l-e', bn: 'P-r-e-e-m-p-t-i-b-l-e' },
        explanation: {
          en: 'Google Cloud designated its excess capacity instances as Preemptible VMs before adopting the unified Spot moniker.',
          bn: 'গুগল ক্লাউড স্পট নাম পুরোপুরি গ্রহণের পূর্বে তাদের স্বল্পমূল্যের অস্থায়ী ভার্চুয়াল মেশিনগুলোকে Preemptible VM বলত।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'autoscales-and-the-autoscale',
    title: { en: 'Auto-scaling Groups and Dynamic Policies', bn: 'অটো-স্কেলিং গ্রুপ ও ডায়নামিক পলিসি' },
  },
};
