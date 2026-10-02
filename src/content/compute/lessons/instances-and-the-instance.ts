import type { Lesson } from '../../../lib/types';

export const InstancesAndTheInstanceLesson: Lesson = {
  slug: 'instances-and-the-instance',
  tech: 'compute',
  title: {
    en: 'Compute Instances — Virtual Servers, Lifecycles, and Metadata',
    bn: 'কম্পিউট ইনস্ট্যান্স — ভার্চুয়াল সার্ভার, লাইফসাইকেল ও মেটাডেটা',
  },
  summary: {
    en: 'A beginner introduction to cloud compute fundamentals: understand how virtual instances differ from bare-metal servers, navigate the instance lifecycle (pending, running, stopped, terminated), prevent accidental data loss on ephemeral storage, and query the Instance Metadata Service (IMDSv2) securely.',
    bn: 'ক্লাউড কম্পিউটের প্রাথমিক পরিচিতি: বেয়ার-মেটাল সার্ভারের সাথে ভার্চুয়াল ইনস্ট্যান্সের পার্থক্য, ইনস্ট্যান্স লাইফসাইকেল (পেন্ডিং, রানিং, স্টপড, টার্মিনেটেড), ক্ষণস্থায়ী স্টোরেজে ডেটা ক্ষতি রোধ এবং নিরাপদ IMDSv2 মেটাডেটা কুয়েরি।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Virtual servers, provisioning states, and metadata services', bn: 'WHAT — ভার্চুয়াল সার্ভার, প্রভিশনিং স্টেট ও মেটাডেটা সার্ভিস' },
    },
    {
      type: 'para',
      text: {
        en: 'When you deploy backend services in the cloud, understanding the mechanics of compute instances is the first essential step in building reliable infrastructure. A cloud compute instance is not merely an abstract server; it is an orchestrated virtual machine running on physical datacenter hardware. Every instance transitions through a formal operational lifecycle: moving from pending initialization to running workloads, stopping to release unneeded CPU billing, and terminating when permanently decommissioned. Understanding how persistent root storage detaches from ephemeral instance memory prevents catastrophic data loss. Furthermore, querying the Instance Metadata Service allows your running software to discover its dynamic network identity and securely retrieve temporary security credentials without baking static secrets into disk images.',
        bn: 'যখন আপনি ক্লাউডে ব্যাকএন্ড সার্ভিস ডিপ্লয় করেন, তখন কম্পিউট ইনস্ট্যান্সের অভ্যন্তরীণ কার্যপ্রণালী বোঝা নির্ভরযোগ্য অবকাঠামো গড়ার প্রথম ও প্রধান ভিত্তি। একটি ক্লাউড কম্পিউট ইনস্ট্যান্স কেবল কোনো কাল্পনিক সার্ভার নয়; এটি ফিজিক্যাল ডাটা সেন্টারের হার্ডওয়্যারে চলা একটি সুসংগঠিত ভার্চুয়াল মেশিন। প্রতিটি ইনস্ট্যান্স একটি সুনির্দিষ্ট লাইফসাইকেলের মধ্য দিয়ে পরিচালিত হয়: পেন্ডিং প্রভিশনিং থেকে কাজের জন্য রানিং অবস্থা, অপ্রয়োজনীয় সিপিইউ বিলিং বন্ধ করতে স্টপড অবস্থা এবং কাজ শেষে স্থায়ী টার্মিনেশন। মেমরির ক্ষণস্থায়ী ডেটার সাথে পারসিস্টেন্ট রুট স্টোরেজের সম্পর্ক বোঝা ডেটা নষ্ট হওয়া রোধ করে। এছাড়া ইনস্ট্যান্স মেটাডেটা সার্ভিসের সাহায্যে কোনো সিক্রেট কোডে হার্ডকোড না করেই সার্ভার নিজের আইপি ও ক্লাউড ক্রেডেনশিয়াল নিরাপদে সংগ্রহ করতে পারে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Compute instance lifecycle state machine and storage persistence', bn: 'কম্পিউট ইনস্ট্যান্স লাইফসাইকেল স্টেট মেশিন ও স্টোরেজ স্থায়িত্ব' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Cloud compute instance lifecycle state machine diagram">
<rect x="20" y="45" width="115" height="120" rx="6" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
<text x="77" y="70" text-anchor="middle" font-size="10" font-weight="800" fill="#475569">PENDING</text>
<text x="30" y="98" font-size="8" fill="#64748b">Allocating host</text>
<text x="30" y="118" font-size="8" fill="#64748b">Attaching disk</text>
<text x="30" y="142" font-size="8" fill="#2563eb">Booting OS kernel</text>

<line x1="135" y1="105" x2="185" y2="105" stroke="#2563eb" stroke-width="2"/>
<polygon points="185,101 195,105 185,109" fill="#2563eb"/>

<rect x="195" y="45" width="125" height="120" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="257" y="70" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">RUNNING</text>
<text x="205" y="98" font-size="8" fill="#166534">10h active work</text>
<text x="205" y="118" font-size="8" fill="#166534">$0.80 compute cost</text>
<text x="205" y="142" font-size="8" fill="#166534">SSH / HTTP active</text>

<line x1="320" y1="90" x2="370" y2="90" stroke="#ca8a04" stroke-width="2"/>
<polygon points="370,86 380,90 370,94" fill="#ca8a04"/>

<line x1="380" y1="120" x2="330" y2="120" stroke="#16a34a" stroke-width="2"/>
<polygon points="330,116 320,120 330,124" fill="#16a34a"/>

<rect x="380" y="45" width="125" height="120" rx="6" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
<text x="442" y="70" text-anchor="middle" font-size="10" font-weight="800" fill="#854d0e">STOPPED</text>
<text x="390" y="98" font-size="8" fill="#854d0e">14h idle standby</text>
<text x="390" y="118" font-size="8" fill="#166534">$0.00 compute billing</text>
<text x="390" y="142" font-size="8" fill="#854d0e">EBS disk preserved</text>

<line x1="505" y1="105" x2="545" y2="105" stroke="#dc2626" stroke-width="2"/>
<polygon points="545,101 555,105 545,109" fill="#dc2626"/>

<rect x="555" y="60" width="75" height="90" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
<text x="592" y="85" text-anchor="middle" font-size="9" font-weight="800" fill="#991b1b">TERMINATED</text>
<text x="562" y="115" font-size="8" fill="#dc2626">Destroyed</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Stopping instances preserves persistent disk storage while stopping all CPU billing</text>
</svg>`,
      caption: {
        en: 'The instance transitions between 10 hours running ($0.80) and 14 hours stopped across 24 hours, saving $1.12 daily on 2 active states compared to 24-hour unmanaged execution.',
        bn: 'ইনস্ট্যান্সটি ২৪ ঘণ্টায় ১০ ঘণ্টা রানিং ($০.৮০) এবং ১৪ ঘণ্টা স্টপড অবস্থার মধ্যে পরিবর্তিত হয়ে সার্বক্ষণিক চলার তুলনায় ২টি সক্রিয় স্টেটে দিনে $১.১২ সাশ্রয় করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Compute instance',
          def: {
            en: 'A virtualized server environment provisioned on cloud hardware, combining virtual CPU, RAM, networking, and storage.',
            bn: 'ক্লাউড হার্ডওয়্যারে বরাদ্দ করা একটি ভার্চুয়াল সার্ভার পরিকাঠামো যাতে ভার্চুয়াল সিপিইউ, র্যাম, নেটওয়ার্ক ও স্টোরেজ থাকে।',
          },
        },
        {
          term: 'Instance lifecycle',
          def: {
            en: 'The finite state transitions (pending, running, stopping, stopped, terminated) governed by cloud management APIs.',
            bn: 'ক্লাউড ম্যানেজমেন্ট এপিআই দ্বারা নিয়ন্ত্রিত সার্ভারের ধারাবাহিক অবস্থা (পেন্ডিং, রানিং, স্টপিং, স্টপড, টার্মিনেটেড)।',
          },
        },
        {
          term: 'Instance Metadata Service (IMDS)',
          def: {
            en: 'An on-instance link-local HTTP service (169.254.169.254) providing instance identity, network IP, and temporary IAM tokens.',
            bn: 'ইনস্ট্যান্সের ভেতরের একটি লোকাল এইচটিটিপি সার্ভিস (169.254.169.254) যা সার্ভার পরিচিতি, আইপি এবং আইএএম টোকেন সরবরাহ করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Resource cost control and dynamic identity', bn: 'কেন — খরচ নিয়ন্ত্রণ ও গতিশীল পরিচিতি' },
    },
    {
      type: 'list',
      items: [
        { en: 'Halt compute charges during off-hours: stopping staging servers overnight releases CPU cores to save over 50% on non-production bills.', bn: 'কাজের বাইরে বিলিং বন্ধ রাখা: রাতে বা ছুটির দিনে স্টেজিং সার্ভার বন্ধ রাখলে সিপিইউ বিলিং থেমে গিয়ে খরচে ৫০% এর বেশি সাশ্রয় হয়।' },
        { en: 'Prevent ephemeral storage data loss: knowing local NVMe instance store volumes wipe on shutdown ensures databases attach persistent block storage.', bn: 'ক্ষণস্থায়ী স্টোরেজে ডেটা নষ্ট রোধ: লোকাল ডিস্ক বন্ধ করলে মুছে যায় জেনে ডেটাবেসে স্থায়ী ব্লক স্টোরেজ ব্যবহার নিশ্চিত করা যায়।' },
        { en: 'Automated identity and role assumption: querying IMDS delivers temporary cryptographic tokens, eliminating hardcoded access keys in repos.', bn: 'নিরাপদ ক্লাউড ভূমিকা গ্রহণ: IMDS থেকে সাময়িক ক্রিপ্টোগ্রাফিক টোকেন ব্যবহারের মাধ্যমে কোডে পাসওয়ার্ড হার্ডকোড করার ঝুঁকি দূর হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Managing instance lifecycles in 4 steps', bn: 'HOW — ৪টি ধাপে ইনস্ট্যান্স লাইফসাইকেল পরিচালনা' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Select instance type', bn: '১. ইনস্ট্যান্সের ধরন নির্বাচন' }, text: { en: 'Choose appropriate CPU/RAM family based on workload profile.', bn: 'কাজের ধরন অনুযায়ী উপযুক্ত সিপিইউ ও র্যামের অনুপাত বাছুন।' } },
        { title: { en: '2. Attach persistent EBS', bn: '২. স্থায়ী ডিস্ক সংযোগ' }, text: { en: 'Ensure root and data volumes are configured on persistent storage.', bn: 'রুট ও ডেটা ভলিউম স্থায়ী ব্লক স্টোরেজে রয়েছে কিনা নিশ্চিত করুন।' } },
        { title: { en: '3. Stop idle instances', bn: '৩. অলস সার্ভার বন্ধকরণ' }, text: { en: 'Invoke StopInstance APIs to freeze compute charges while preserving disks.', bn: 'ডিস্ক ঠিক রেখে বিল বন্ধ করতে StopInstance এপিআই কল করুন।' } },
        { title: { en: '4. Query IMDSv2 safely', bn: '৪. নিরাপদ IMDSv2 কুয়েরি' }, text: { en: 'Fetch session token with PUT request before requesting instance metadata.', bn: 'মেটাডেটা চাওয়ার আগে PUT রিকোয়েস্ট দিয়ে সেশন টোকেন সংগ্রহ করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'instance_lifecycle_sim.js',
      code: `// Simulated compute instance lifecycle and billing state
const hourlyComputeRate = 0.08; // $0.08/hr for 2 vCPU, 8GB RAM
const hourlyStorageRate = 0.01; // $0.01/hr for 100GB persistent disk

// Operational scenario: 10 hours running, 14 hours stopped per day
const runningHours = 10;
const stoppedHours = 14;
const totalDayHours = runningHours + stoppedHours; // 24 hours

const runningComputeCost = runningHours * hourlyComputeRate; // $0.80
const dailyStorageCost = totalDayHours * hourlyStorageRate;   // $0.24
const totalDailyCost = runningComputeCost + dailyStorageCost; // $1.04

const unmanaged24hCost = (24 * hourlyComputeRate) + dailyStorageCost; // $2.16
const dailySavings = Math.round((unmanaged24hCost - totalDailyCost) * 100) / 100; // $1.12

console.log("Compute Instance Lifecycle and Billing Simulation:");
console.log("Running: " + runningHours + "h ($" + runningComputeCost.toFixed(2) + "), Stopped: " + stoppedHours + "h across " + totalDayHours + "h");
console.log("Total daily cost: $" + totalDailyCost.toFixed(2) + ", Unmanaged 24h cost: $" + unmanaged24hCost.toFixed(2));
console.log("Daily savings from stopping: $" + dailySavings.toFixed(2) + " on 2 active states");

// Output:
// Compute Instance Lifecycle and Billing Simulation:
// Running: 10h ($0.80), Stopped: 14h across 24h
// Total daily cost: $1.04, Unmanaged 24h cost: $2.16
// Daily savings from stopping: $1.12 on 2 active states`,
      caption: {
        en: 'The simulation schedules 10 hours running ($0.80) and 14 hours stopped across 24 hours, costing $1.04 daily compared to $2.16 unmanaged, saving $1.12 daily on 2 active states.',
        bn: 'সিমুলেশনটি ২৪ ঘণ্টায় ১০ ঘণ্টা রানিং ($০.৮০) এবং ১৪ ঘণ্টা স্টপড রেখে দিনে $১.০৪ খরচ করে (সার্বক্ষণিক $২.১৬ এর বদলে), যা ২টি সক্রিয় স্টেটে দিনে $১.১২ সাশ্রয় করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive instance lifecycle cost lab', bn: 'INSIDE — জীবন্ত ইনস্ট্যান্স লাইফসাইকেল খরচ ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test compute instance lifecycle economics. Running an instance for 10 hours costs $0.80 in compute fees while stopping it for 14 hours incurs zero compute charges across 24 hours. Factoring in $0.24 for persistent storage yields a total daily cost of $1.04, saving $1.12 daily compared to unmanaged $2.16 24-hour execution on 2 active states. Understanding lifecycle states saves thousands annually.',
        bn: 'কম্পিউট ইনস্ট্যান্স লাইফসাইকেলের খরচ পরীক্ষা করুন। ২৪ ঘণ্টার মধ্যে ১০ ঘণ্টা চালালে কম্পিউট ফি বাবদ $০.৮০ লাগে আর ১৪ ঘণ্টা বন্ধ রাখলে কম্পিউট খরচ শূন্য হয়। স্থায়ী স্টোরেজের জন্য $০.২৪ যোগ করলে মোট দৈনিক খরচ দাঁড়ায় $১.০৪, যা সার্বক্ষণিক $২.১৬ খরচের তুলনায় ২টি সক্রিয় স্টেটে দিনে $১.১২ সাশ্রয় করে। লাইফসাইকেল ব্যবস্থাপনা বছরে প্রচুর খরচ কমায়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Compute lab (adjust running hours, press Run)', bn: 'Compute lab (রানিং ঘণ্টা পরিবর্তন করুন, Run)' },
      html: '<h3>Instance Lifecycle Cost Calculator</h3>\n<pre id="out"></pre>\n<p>Compute savings from stopping idle instances.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const runH = 10;\nconst stopH = 14;\nconst runCost = runH * 0.08;\nconst storCost = 24 * 0.01;\nconst total = runCost + storCost;\nconst unman = (24 * 0.08) + storCost;\nconst saved = unman - total;\nconsole.log("total: " + total.toFixed(2));\ndocument.getElementById("out").textContent = "Running: " + runH + "h · Stopped: " + stopH + "h · Cost: $" + total.toFixed(2) + " · Saved: $" + saved.toFixed(2) + " (24h period ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Instance lifecycle operational rules', bn: 'ফলাফল — ইনস্ট্যান্স লাইফসাইকেলের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Stopping releases compute capacity but retains persistent volumes: compute billing stops immediately; only disk storage is charged.', bn: 'স্টপ করলে কম্পিউট বিল বন্ধ হয় কিন্তু ডিস্ক অক্ষত থাকে: সাথে সাথে সিপিইউ বিলিং বন্ধ হয়ে কেবল ডিস্কের জন্য সামান্য ফি প্রযোজ্য হয়।' },
        { en: 'Always enforce IMDSv2: require session tokens to protect against Server-Side Request Forgery (SSRF) metadata theft exploits.', bn: 'সর্বদা IMDSv2 কার্যকর রাখুন: SSRF নিরাপত্তা আক্রমণ থেকে ক্লাউড ক্রেডেনশিয়াল রক্ষা করতে সেশন টোকেন বাধ্যতামূলক করুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common compute instance pitfalls', bn: 'ডিবাগ — কম্পিউট ইনস্ট্যান্সের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Confusing ephemeral instance store with persistent EBS volumes', bn: 'ক্ষণস্থায়ী স্টোরেজকে স্থায়ী ডিস্ক মনে করার ভুল' },
      text: {
        en: 'Some high-speed instance types provide local NVMe "Instance Store" disks with millions of IOPS. However, this storage is physically attached to the host server hardware: when you stop the instance, the hardware is wiped completely! Always store persistent databases on network-attached EBS volumes.',
        bn: 'কিছু উচ্চ-গতির ইনস্ট্যান্সে অত্যন্ত দ্রুতগতির লোকাল NVMe ডিস্ক থাকে। তবে এটি সার্ভার বন্ধ করা মাত্র পুরোপুরি মুছে যায়! তাই ডেটাবেসের মতো গুরুত্বপূর্ণ তথ্যের জন্য সর্বদা নেটওয়ার্ক-সংযুক্ত স্থায়ী EBS ভলিউম ব্যবহার করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Automating scheduled start and stop with AWS EventBridge', bn: 'AWS EventBridge দিয়ে স্বয়ংক্রিয় স্টার্ট ও স্টপ' },
      text: {
        en: 'Configure an AWS EventBridge cron schedule targeting Lambda to stop development instances on off-hours and weekends, slashing developer cloud bills by 65% with zero friction.',
        bn: 'EventBridge ক্রন শিডিউল ব্যবহার করে ছুটির দিন বা রাতে ডেভেলপমেন্ট সার্ভার নিজে থেকে বন্ধ রাখার নিয়ম করুন, যা ০ ঘর্ষণে ক্লাউড খরচ ৬৫% কমিয়ে দেবে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production compute deployments', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইন্ডাস্ট্রিয়াল কম্পিউট ব্যবস্থা' },
    },
    {
      type: 'list',
      items: [
        { en: 'AWS EC2 (Elastic Compute Cloud): world-spanning virtual server infrastructure powering millions of commercial websites.', bn: 'AWS EC2: বিশ্বব্যাপী কোটি কোটি ওয়েবসাইট পরিচালনাকারী বৃহত্তম বাণিজ্যিক ভার্চুয়াল সার্ভার পরিকাঠামো।' },
        { en: 'Google Cloud Compute Engine (GCE): high-speed live migration technology that migrates running VMs between physical hosts without reboots.', bn: 'Google Cloud GCE: লাইভ মাইগ্রেশন প্রযুক্তির মাধ্যমে সার্ভার রিস্টার্ট না করেই ফিজিক্যাল হার্ডওয়্যারের মধ্যে রানিং ভিএম স্থানান্তর করে।' },
        { en: 'HashiCorp Nomad and Kubernetes: orchestrate containerized workloads dynamically across fleets of cloud compute instances.', bn: 'কুবারনেটিস ও নোম্যাড: ক্লাউড কম্পিউট ইনস্ট্যান্সের বিশাল ফ্লিট জুড়ে কন্টেইনারাইজড অ্যাপ্লিকেশন গতিশীলভাবে সমন্বয় করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Virtual Machines and Hypervisors', bn: 'পরবর্তী পাঠ — ভার্চুয়াল মেশিন ও হাইপারভাইজর' },
    },
    {
      type: 'para',
      text: {
        en: 'With instance lifecycles and metadata mastered, Lesson 2 explores virtualization internals: Type 1 bare-metal hypervisors (KVM, AWS Nitro) versus Type 2 hypervisors, and hardware-assisted virtualization extensions.',
        bn: 'ইনস্ট্যান্স লাইফসাইকেল ও মেটাডেটা আয়ত্ত করার পর, পাঠ ২ ভার্চুয়ালাইজেশন ইন্টারনালস শেখাবে: টাইপ ১ বেয়ার-মেটাল হাইপারভাইজর (KVM, AWS Nitro) বনাম টাইপ ২ হাইপারভাইজর এবং হার্ডওয়্যার ভার্চুয়ালাইজেশন এক্সটেনশন।',
      },
    },
  ],
  exercises: [
    {
      id: 'cmp-inst-ex-1',
      kind: 'mcq',
      topic: 'instance-lifecycle-stopped-effect',
      question: {
        en: 'What occurs to billing and persistent storage when a cloud compute instance transitions to the "stopped" state?',
        bn: 'কোনো ক্লাউড কম্পিউট ইনস্ট্যান্স "stopped" অবস্থায় স্থানান্তরিত হলে বিলিং এবং স্থায়ী স্টোরেজের কী ঘটে?',
      },
      options: [
        {
          en: 'Compute CPU and RAM billing stops immediately while persistent block storage (EBS) volumes remain intact and charged',
          bn: 'সিপিইউ ও র্যামের কম্পিউট বিলিং সাথে সাথে বন্ধ হয়ে যায় আর স্থায়ী ব্লক স্টোরেজ (EBS) অক্ষত থাকে এবং তার জন্য নিয়মিত ফি প্রযোজ্য হয়',
        },
        {
          en: 'All data on persistent storage is permanently deleted',
          bn: 'স্থায়ী স্টোরেজের সমস্ত ডেটা চিরতরে মুছে যায়',
        },
        {
          en: 'The cloud provider continues charging 100% of compute fees',
          bn: 'ক্লাউড প্রোভাইডার কম্পিউট ফির শতভাগ চার্জ নেওয়া অব্যাহত রাখে',
        },
        {
          en: 'The physical server in the datacenter is powered off by robots',
          bn: 'ডাটা সেন্টারের ফিজিক্যাল সার্ভার রোবট দ্বারা বন্ধ করে দেওয়া হয়',
        },
      ],
      answer: 0,
      hint: { en: 'Compute charges stop; storage persists.', bn: 'কম্পিউট চার্জ থেমে যায়; স্টোরেজ টিকে থাকে।' },
      explanation: {
        en: 'Stopping an instance releases compute capacity, halting CPU billing while retaining persistent attached disk storage.',
        bn: 'ইনস্ট্যান্স স্টপ করলে সিপিইউ বিলিং বন্ধ হয় কিন্তু সংযুক্ত স্থায়ী ডিস্ক স্টোরেজ অক্ষত থাকে।',
      },
    },
    {
      id: 'cmp-inst-ex-2',
      kind: 'mcq',
      topic: 'instance-sim-savings',
      question: {
        en: 'In our code walkthrough, what were the running hours (and cost) and stopped hours, and what was the daily saving compared to unmanaged execution?',
        bn: 'আমাদের কোড আলোচনায় রানিং ঘণ্টা (এবং খরচ) ও স্টপড ঘণ্টা কত ছিল এবং সার্বক্ষণিক চলার তুলনায় দৈনিক সাশ্রয় কত ছিল?',
      },
      options: [
        { en: 'Running = 10h ($0.80), Stopped = 14h; daily savings = $1.12 on 2 active states', bn: 'রানিং = ১০h ($০.৮০), স্টপড = ১৪h; ২টি সক্রিয় স্টেটে দৈনিক সাশ্রয় = $১.১২' },
        { en: 'Running = 24h ($2.16), Stopped = 0h; daily savings = $0.00 on 2 active states', bn: 'রানিং = ২৪h ($২.১৬), স্টপড = ০h; ২টি সক্রিয় স্টেটে দৈনিক সাশ্রয় = $০.০০' },
        { en: 'Running = 5h ($0.40), Stopped = 5h; daily savings = $0.50 on 1 active state', bn: 'রানিং = ৫h ($০.৪০), স্টপড = ৫h; ১টি সক্রিয় স্টেটে দৈনিক সাশ্রয় = $০.৫০' },
        { en: 'Running = 0h ($0.00), Stopped = 0h; daily savings = $0.00 on 0 active states', bn: 'রানিং = ০h ($০.০০), স্টপড = ০h; ০টি সক্রিয় স্টেটে দৈনিক সাশ্রয় = $০.০০' },
      ],
      answer: 0,
      hint: { en: '$2.16 - $1.04 = $1.12 saved.', bn: '$২.১৬ - $১.০৪ = $১.১২ সাশ্রয়।' },
      explanation: {
        en: 'The simulation scheduled 10h running ($0.80) and 14h stopped across 24h, saving $1.12 daily on 2 active states.',
        bn: 'সিমুলেশনটিতে ২৪ ঘণ্টায় ১০h রানিং ($০.৮০) এবং ১৪h স্টপড রেখে ২টি সক্রিয় স্টেটে দিনে $১.১২ সাশ্রয় হিসাব করা হয়েছিল।',
      },
    },
    {
      id: 'cmp-inst-ex-3',
      kind: 'mcq',
      topic: 'imdsv2-session-token-security',
      question: {
        en: 'Why is the Instance Metadata Service version 2 (IMDSv2) required over legacy IMDSv1 in secure cloud architectures?',
        bn: 'নিরাপদ ক্লাউড পরিকাঠামোয় পুরনো IMDSv1 এর বদলে কেন IMDSv2 ব্যবহার বাধ্যতামূলক?',
      },
      options: [
        {
          en: 'IMDSv2 requires session-oriented PUT tokens that protect against Server-Side Request Forgery (SSRF) exploits attempting to steal IAM credentials',
          bn: 'IMDSv2 সেশন-ভিত্তিক PUT টোকেন দাবি করে, যা সার্ভার-সাইড রিকোয়েস্ট ফোরজারি (SSRF) আক্রমণের মাধ্যমে আইএএম ক্রেডেনশিয়াল চুরি করা প্রতিরোধ করে',
        },
        {
          en: 'IMDSv2 automatically doubles the network bandwidth of the instance',
          bn: 'IMDSv2 স্বয়ংক্রিয়ভাবে ইনস্ট্যান্সের নেটওয়ার্ক গতি দ্বিগুণ করে',
        },
        {
          en: 'IMDSv1 was disabled by global internet treaties in 2020',
          bn: '২০২০ সালে আন্তর্জাতিক চুক্তি দ্বারা IMDSv1 বাতিল করা হয়েছে',
        },
        {
          en: 'IMDSv2 encrypts the computer keyboard hardware',
          bn: 'IMDSv2 কম্পিউটারের কীবোর্ড হার্ডওয়্যার এনক্রিপ্ট করে রাখে',
        },
      ],
      answer: 0,
      hint: { en: 'IMDSv2 prevents SSRF token theft.', bn: 'IMDSv2 সেশন টোকেনের মাধ্যমে SSRF আক্রমণ প্রতিহত করে।' },
      explanation: {
        en: 'IMDSv2 uses a session-based header token requested via HTTP PUT, preventing simple HTTP GET SSRF attacks from stealing metadata.',
        bn: 'IMDSv2 সেশন টোকেন ব্যবহারের মাধ্যমে সাধারণ GET রিকোয়েস্ট দিয়ে তথ্য চুরি করার ফাঁক বন্ধ করে দেয়।',
      },
    },
    {
      id: 'cmp-inst-ex-4',
      kind: 'predict',
      topic: 'link-local-metadata-ip',
      question: {
        en: 'What link-local IPv4 address is universally queried by cloud instances to reach the Instance Metadata Service (e.g. 169.254.169.254)?',
        bn: 'ইনস্ট্যান্স মেটাডেটা সার্ভিসে প্রবেশ করতে ক্লাউড ইনস্ট্যান্সগুলো সার্বজনীনভাবে কোন লিঙ্ক-লোকাল IPv4 অ্যাড্রেসে কুয়েরি পাঠায় (যেমন 169.254.169.254)?',
      },
      answer: '169.254.169.254',
      accept: ['169.254.169.254', 'http://169.254.169.254'],
      hint: { en: '169.254.169.254', bn: '169.254.169.254' },
      explanation: {
        en: '169.254.169.254 is the standard link-local address allocated for the Instance Metadata Service across AWS, GCP, and Azure.',
        bn: '169.254.169.254 হলো AWS, GCP ও Azure এ ইনস্ট্যান্স মেটাডেটা সার্ভিসের জন্য নির্ধারিত প্রমিত লিঙ্ক-লোকাল আইপি।',
      },
    },
  ],
  quiz: {
    id: 'instances-instance-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'cmp-inst-q1',
        kind: 'mcq',
        topic: 'ephemeral-storage-behavior',
        question: {
          en: 'What happens to data stored on a local NVMe "Instance Store" disk when the cloud instance is stopped or restarted on a different host?',
          bn: 'ক্লাউড ইনস্ট্যান্সটি স্টপ করা হলে বা অন্য কোনো ফিজিক্যাল হোস্টে রিস্টার্ট হলে লোকাল NVMe "Instance Store" ডিস্কের ডেটার কী ঘটে?',
        },
        options: [
          {
            en: 'The data is completely wiped and permanently lost because instance store disks are physically tethered to the original host hardware',
            bn: 'ডেটা পুরোপুরি মুছে যায় এবং চিরতরে হারিয়ে যায় কারণ ইনস্ট্যান্স স্টোর ডিস্ক শারীরিকভাবে মূল ফিজিক্যাল সার্ভারের সাথে যুক্ত থাকে',
          },
          {
            en: 'The data is automatically backed up to floppy disks',
            bn: 'ডেটা স্বয়ংক্রিয়ভাবে ফ্লপি ডিস্কে ব্যাকআপ হয়ে যায়',
          },
          {
            en: 'The cloud provider mails the hard drive to the company office',
            bn: 'ক্লাউড প্রোভাইডার হার্ডডিস্কটি ডাকযোগে কোম্পানির ঠিকানায় পাঠিয়ে দেয়',
          },
          {
            en: 'The files are converted into audio podcasts',
            bn: 'ফাইলগুলো অডিও পডকাস্টে রূপান্তর হয়ে যায়',
          },
        ],
        answer: 0,
        hint: { en: 'Instance store storage is ephemeral.', bn: 'ইনস্ট্যান্স স্টোর ক্ষণস্থায়ী হওয়ায় বন্ধ করলে মুছে যায়।' },
        explanation: {
          en: 'Instance store storage is temporary and tied to the physical server host; stopping the instance destroys its data.',
          bn: 'ইনস্ট্যান্স স্টোর ক্ষণস্থায়ী এবং ফিজিক্যাল সার্ভারের সাথে যুক্ত; ইনস্ট্যান্স বন্ধ করলে এর সমস্ত তথ্য নষ্ট হয়ে যায়।',
        },
      },
      {
        id: 'cmp-inst-q2',
        kind: 'mcq',
        topic: 'unmanaged-cost-check',
        question: {
          en: 'In our code walkthrough, what was the total unmanaged 24-hour cost calculated for running the instance continuously without stopping?',
          bn: 'আমাদের কোড আলোচনায় কোনো বিরতি ছাড়া সার্বক্ষণিক ২৪ ঘণ্টা ইনস্ট্যান্স চালানোর জন্য আনম্যানেজড মোট খরচ কত হিসাব করা হয়েছিল?',
        },
        options: [
          { en: '$2.16 across 24 hours ($1.92 compute + $0.24 storage)', bn: '২৪ ঘণ্টায় মোট $২.১৬ ($১.৯২ কম্পিউট + $০.২৪ স্টোরেজ)' },
          { en: '$10.00 across 24 hours', bn: '২৪ ঘণ্টায় মোট $১০.০০' },
          { en: '$0.50 across 24 hours', bn: '২৪ ঘণ্টায় মোট $০.৫০' },
          { en: '$0.00 across 24 hours', bn: '২৪ ঘণ্টায় মোট $০.০০' },
        ],
        answer: 0,
        hint: { en: '(24 * 0.08) + 0.24 = $2.16.', bn: '(২৪ * ০.০৮) + ০.২৪ = $২.১৬।' },
        explanation: {
          en: 'The simulation resolved 24h compute ($1.92) + 24h storage ($0.24) to an unmanaged cost of $2.16 across 24 hours.',
          bn: 'সিমুলেশনটিতে ২৪ ঘণ্টা কম্পিউট ($১.৯২) + ২৪ ঘণ্টা স্টোরেজ ($০.২৪) মিলিয়ে ২৪ ঘণ্টায় মোট $২.১৬ খরচ হিসাব করা হয়েছিল।',
        },
      },
      {
        id: 'cmp-inst-q3',
        kind: 'mcq',
        topic: 'bare-metal-vs-virtual-instance',
        question: {
          en: 'What primary architectural advantage does a bare-metal cloud instance provide over standard virtualized compute instances?',
          bn: 'সাধারণ ভার্চুয়ালাইজড কম্পিউট ইনস্ট্যান্সের তুলনায় বেয়ার-মেটাল ক্লাউড ইনস্ট্যান্স কোন প্রধান সুবিধাটি প্রদান করে?',
        },
        options: [
          {
            en: 'Direct unvirtualized hardware access with zero hypervisor overhead, eliminating CPU latency jitter for specialized hypervisor nesting or latency-critical trading',
            bn: 'কোনো হাইপারভাইজর ওভারহেড ছাড়া সরাসরি হার্ডওয়্যার অ্যাক্সেস, যা লেটেন্সি-সংবেদনশীল ট্রেডিং বা নেস্টেড ভার্চুয়ালাইজেশনের জন্য নিখুঁত গতি দেয়',
          },
          {
            en: 'Free unlimited internet bandwidth forever',
            bn: 'আজীবন বিনামূল্যে সীমাহীন ইন্টারনেট ব্যান্ডউইথ',
          },
          {
            en: 'The ability to run without electricity',
            bn: 'বিদ্যুৎ ছাড়াই চলার অলৌকিক ক্ষমতা',
          },
          {
            en: 'Automatic translation of code into German',
            bn: 'কোড স্বয়ংক্রিয়ভাবে জার্মান ভাষায় অনুবাদ করার সুবিধা',
          },
        ],
        answer: 0,
        hint: { en: 'Bare metal bypasses the hypervisor completely.', bn: 'বেয়ার মেটাল হাইপারভাইজরকে সম্পূর্ণ এড়িয়ে সরাসরি হার্ডওয়্যারে চলে।' },
        explanation: {
          en: 'Bare-metal instances give tenants exclusive direct access to physical processors and memory without virtualization layers.',
          bn: 'বেয়ার-মেটাল ইনস্ট্যান্স কোনো ভার্চুয়ালাইজেশন লেয়ার ছাড়াই সরাসরি ফিজিক্যাল প্রসেসর ও মেমরি ব্যবহারের পূর্ণ সুবিধা দেয়।',
        },
      },
      {
        id: 'cmp-inst-q4',
        kind: 'predict',
        topic: 'cloud-vm-name-token',
        question: {
          en: 'What fundamental term designates an individual virtual server allocated within a cloud provider infrastructure (e.g. Instance)?',
          bn: 'ক্লাউড প্রোভাইডার পরিকাঠামোয় বরাদ্দ করা একটি স্বতন্ত্র ভার্চুয়াল সার্ভারকে কোন মৌলিক নামে অভিহিত করা হয় (যেমন Instance)?',
        },
        answer: 'Instance',
        accept: ['Instance', 'instance', 'Virtual Machine', 'VM'],
        hint: { en: 'I-n-s-t-a-n-c-e', bn: 'I-n-s-t-a-n-c-e' },
        explanation: {
          en: 'An instance is the standard terminology for a virtualized server provisioned on cloud compute infrastructure.',
          bn: 'ক্লাউড কম্পিউট পরিকাঠামোয় তৈরি একটি ভার্চুয়াল সার্ভারকে প্রমিত পরিভাষায় ইনস্ট্যান্স বলা হয়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'vms-and-the-vm',
    title: { en: 'Virtual Machines and Hypervisors', bn: 'ভার্চুয়াল মেশিন ও হাইপারভাইজর' },
  },
};
