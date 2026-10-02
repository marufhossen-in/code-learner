import type { Lesson } from '../../../lib/types';

export const RetainsAndTheRetainLesson: Lesson = {
  slug: 'retains-and-the-retain',
  tech: 'logging',
  title: {
    en: 'Retention and Compliance — Log Rotation, S3 Cold Tiering, and GDPR',
    bn: 'রিটেনশন ও কমপ্লায়েন্স — লগ রোটেশন, এস৩ কোল্ড টিয়ারিং ও জিডিপিআর',
  },
  summary: {
    en: 'Master enterprise log lifecycle and compliance management: configure automated logrotate routines, implement tiered storage from NVMe hot tiers to S3 Glacier cold archives, enforce GDPR right-to-be-forgotten redaction, and satisfy PCI-DSS audit retention laws.',
    bn: 'এন্টারপ্রাইজ লগ লাইফসাইকেল ও কমপ্লায়েন্স আয়ত্ত করুন: স্বয়ংক্রিয় logrotate কনফিগারেশন, NVMe হট টিয়ার থেকে এস৩ গ্লেসিয়ার কোল্ড আর্কাইভে স্তরভিত্তিক স্টোরেজ, জিডিপিআর তথ্য মোছার অধিকার এবং PCI-DSS অডিট রিটেনশন নীতি প্রয়োগ।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Tiered retention, rotation routines, and compliance standards', bn: 'WHAT — স্তরভিত্তিক রিটেনশন, রোটেশন ও কমপ্লায়েন্স' },
    },
    {
      type: 'para',
      text: {
        en: 'When your systems generate hundreds of gigabytes of logs daily, retaining every historical record on expensive high-performance SSD storage quickly becomes economically unsustainable. Without automated lifecycle policies, unmanaged log files will inevitably exhaust host disk space and crash running services. Modern engineering organizations implement tiered retention architectures: keeping hot searchable logs on fast storage for active incident debugging, transitioning aged records to compressed warm tiers, and archiving regulatory compliance logs into low-cost cold storage like Amazon S3 Glacier. Simultaneously, international privacy regulations like the General Data Protection Regulation (GDPR) mandate strict data minimization and user redaction policies. Mastering tiered lifecycle rules enables you to satisfy strict compliance audits while slashing storage expenditures.',
        bn: 'যখন আপনার সিস্টেম প্রতিদিন শত শত গিগাবাইট লগ তৈরি করে, তখন সমস্ত ঐতিহাসিক ডেটা ব্যয়বহুল উচ্চ-গতির এসএসডিতে রেখে দেওয়া আর্থিকভাবে অসম্ভব হয়ে পড়ে। স্বয়ংক্রিয় রিটেনশন নীতি ছাড়া অনিয়ন্ত্রিত লগ ফাইল হোস্টের সম্পূর্ণ ডিস্ক পূর্ণ করে রানিং সার্ভিসগুলোকে ক্র্যাশ করিয়ে দেবে। আধুনিক ইঞ্জিনিয়ারিং প্রতিষ্ঠানগুলো স্তরভিত্তিক রিটেনশন ব্যবস্থা প্রয়োগ করে: সাম্প্রতিক সমস্যা খোঁজার জন্য কয়েক দিন দ্রুতগতির স্টোরেজে হট লগ রাখা হয়, এরপর সংকুচিত ওয়ার্ম টিয়ারে পাঠানো হয় এবং আইনি কমপ্লায়েন্সের জন্য আমাজন এস৩ গ্লেসিয়ারের মতো অত্যন্ত সস্তা কোল্ড স্টোরেজে সংরক্ষণ করা হয়। একই সাথে জেনারেল ডেটা প্রটেকশন রেগুলেশন (GDPR) এর মতো আন্তর্জাতিক আইন মেনে ব্যবহারকারীর গোপন তথ্য মোছার ব্যবস্থাও থাকতে হয়। এই স্তরভিত্তিক নিয়ম আয়ত্ত করলে কম খরচে শতভাগ আইনি নিয়ম মেনে চলা সম্ভব হয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: '3-tier log storage lifecycle moving data from hot NVMe to cold archive', bn: 'হট NVMe থেকে কোল্ড আর্কাইভে ৩-স্তরের লগ স্টোরেজ লাইফসাইকেল' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="3-tier log retention lifecycle diagram">
<rect x="25" y="40" width="165" height="135" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="107" y="65" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">HOT TIER (0-7 DAYS)</text>
<text x="35" y="95" font-size="9" fill="#2563eb">NVMe / SSD storage</text>
<text x="35" y="115" font-size="9" fill="#2563eb">120GB volume ($24 cost)</text>
<text x="35" y="135" font-size="9" fill="#166534">Sub-second query speed</text>
<text x="35" y="158" font-size="9" fill="#1e40af">Active incident triage</text>

<line x1="190" y1="107" x2="235" y2="107" stroke="#2563eb" stroke-width="2"/>
<polygon points="235,103 245,107 235,111" fill="#2563eb"/>

<rect x="245" y="40" width="165" height="135" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="327" y="65" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">WARM TIER (7-30 DAYS)</text>
<text x="255" y="95" font-size="9" fill="#166534">S3 Standard / R2</text>
<text x="255" y="115" font-size="9" fill="#166534">380GB volume ($9 cost)</text>
<text x="255" y="135" font-size="9" fill="#166534">Compressed snappy chunks</text>
<text x="255" y="158" font-size="9" fill="#166534">Total: $33 across 2 tiers</text>

<line x1="410" y1="107" x2="455" y2="107" stroke="#16a34a" stroke-width="2"/>
<polygon points="455,103 465,107 455,111" fill="#16a34a"/>

<rect x="455" y="40" width="160" height="135" rx="6" fill="#faf5ff" stroke="#7e22ce" stroke-width="2"/>
<text x="535" y="65" text-anchor="middle" font-size="10" font-weight="800" fill="#6b21a8">COLD TIER (30-365+)</text>
<text x="465" y="95" font-size="9" fill="#6b21a8">S3 Glacier Deep Archive</text>
<text x="465" y="115" font-size="9" fill="#6b21a8">$0.004 per GB monthly</text>
<text x="465" y="135" font-size="9" fill="#166534">$67 saved on 500GB</text>
<text x="465" y="158" font-size="9" fill="#6b21a8">PCI-DSS / HIPAA legal</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Tiered retention slashes costs by $67 on 500GB volume while guaranteeing compliance</text>
</svg>`,
      caption: {
        en: 'Tiered retention keeps hot logs for 7 days ($24) and warm logs for 23 days ($9), saving $67 monthly on 500GB volume compared to unmanaged storage ($33 total across 2 active tiers).',
        bn: 'স্তরভিত্তিক রিটেনশনে ৭ দিন হট লগ ($২৪) এবং ২৩ দিন ওয়ার্ম লগ ($৯) রাখলে ৫০০GB ডেটাসেটে আনম্যানেজড স্টোরেজের তুলনায় মাসে $৬৭ সাশ্রয় হয় (২টি সক্রিয় স্তরে মোট খরচ $৩৩ ডলার)।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Tiered log retention',
          def: {
            en: 'A storage lifecycle policy transitioning log data across hot (NVMe), warm (S3), and cold (Glacier) storage tiers based on age.',
            bn: 'একটি স্টোরেজ লাইফসাইকেল নীতি যা বয়সের ওপর ভিত্তি করে লগকে পর্যায়ক্রমে হট (NVMe), ওয়ার্ম (S3) ও কোল্ড (Glacier) স্তরে স্থানান্তর করে।',
          },
        },
        {
          term: 'Log rotation',
          def: {
            en: 'The automated administrative process of archiving, compressing, and replacing current log files when they hit age or size limits.',
            bn: 'নির্দিষ্ট সময় বা ফাইলের আকার পূর্ণ হলে বর্তমান লগ ফাইলকে সংকুচিত, আর্কাইভ ও নতুন ফাইলে রূপান্তরের স্বয়ংক্রিয় প্রক্রিয়া।',
          },
        },
        {
          term: 'Data minimization',
          def: {
            en: 'A privacy compliance principle mandating that organizations delete or anonymize personal logs once their operational purpose expires.',
            bn: 'একটি গোপনীয়তা নীতি যা কাজের প্রয়োজনীয়তা শেষ হওয়া মাত্র ব্যক্তিগত তথ্যযুক্ত লগ মুছে ফেলা বা বেনামী করা বাধ্যতামূলক করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Slashing expenditures and legal audit protection', bn: 'কেন — খরচ হ্রাস ও আইনি অডিট সুরক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Prevent host disk exhaustion: automated logrotate truncates runaway log files before they fill root partitions and crash node daemons.', bn: 'ডিস্ক পূর্ণ হওয়া প্রতিরোধ: স্বয়ংক্রিয় logrotate অতিরিক্ত বড় লগ ফাইল ছেঁটে ফেলে নোড ক্র্যাশ হওয়া থেকে রক্ষা করে।' },
        { en: 'Massive cost savings: cold archiving in S3 Glacier costs under half a cent per gigabyte, cutting storage bills by 70% to 90%.', bn: 'বিপুল খরচ সাশ্রয়: এস৩ গ্লেসিয়ারে কোল্ড আর্কাইভের খরচ এক সেন্টেরও কম, ফলে মোট স্টোরেজ খরচ ৭০% থেকে ৯০% কমে যায়।' },
        { en: 'Automated legal compliance: satisfying PCI-DSS (1-year audit logs) and HIPAA (6-year retention) without manual operational engineering.', bn: 'আইনি বাধ্যবাধকতা পূরণ: কোনো ম্যানুয়াল কাজ ছাড়াই PCI-DSS (১ বছর) এবং HIPAA (৬ বছর) রিটেনশন আইন সহজেই পূরণ করা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Implementing retention in 4 steps', bn: 'HOW — ৪টি ধাপে রিটেনশন বাস্তবায়ন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Configure logrotate', bn: '১. logrotate কনফিগারেশন' }, text: { en: 'Set daily rotation with compress and rotate 7 on host machines.', bn: 'হোস্ট মেশিনে compress ও rotate 7 সহ দৈনিক রোটেশন চালু করুন।' } },
        { title: { en: '2. Enforce ILM policies', bn: '২. ILM পলিসি প্রয়োগ' }, text: { en: 'Transition hot indices to warm storage after 7 days in Elasticsearch.', bn: '৭ দিন পর হট ইনডেক্সগুলোকে ওয়ার্ম স্টোরেজে স্থানান্তর করুন।' } },
        { title: { en: '3. S3 Glacier transition', bn: '৩. এস৩ গ্লেসিয়ার স্থানান্তর' }, text: { en: 'Define S3 bucket lifecycle rules to move chunks to Glacier after 30 days.', bn: '৩০ দিন পর সংকুচিত চাঙ্কগুলো এস৩ গ্লেসিয়ারে পাঠানোর নিয়ম দিন।' } },
        { title: { en: '4. Set expiration TTL', bn: '৪. এক্সপায়ারেশন টিটিএল' }, text: { en: 'Permanently delete archived logs once regulatory deadlines elapse.', bn: 'আইনি সময়সীমা পার হওয়া মাত্র স্থায়ীভাবে আর্কাইভ ডেটা মুছে দিন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'retention_tiering_sim.js',
      code: `// Simulated 3-tier log storage cost calculation
const monthlyLogVolumeGb = 500; // GB per month

// Storage pricing per GB/month across 3 tiers
const hotPricePerGb = 0.20;    // $0.20/GB on NVMe hot tier (7 days: ~120 GB)
const warmPricePerGb = 0.023;  // $0.023/GB on S3 warm tier (23 days: ~380 GB)

const hotTierCost = Math.round(120 * hotPricePerGb);   // $24
const warmTierCost = Math.round(380 * warmPricePerGb); // $9
const combinedTierCost = hotTierCost + warmTierCost;   // $33

// Pure unmanaged hot tier cost comparison
const unmanagedHotCost = Math.round(500 * hotPricePerGb); // $100
const monthlySavings = unmanagedHotCost - combinedTierCost; // $67

console.log("Tiered Log Retention Cost Simulation:");
console.log("Hot tier cost: $" + hotTierCost + ", Warm tier cost: $" + warmTierCost);
console.log("Combined tiered storage cost: $" + combinedTierCost + " across 2 active tiers");
console.log("Monthly savings vs unmanaged hot storage: $" + monthlySavings + " on 500GB volume");

// Output:
// Tiered Log Retention Cost Simulation:
// Hot tier cost: $24, Warm tier cost: $9
// Combined tiered storage cost: $33 across 2 active tiers
// Monthly savings vs unmanaged hot storage: $67 on 500GB volume`,
      caption: {
        en: 'The simulation evaluates a 500GB monthly volume: hot storage costs $24 and warm storage costs $9 for a combined $33 across 2 active tiers, achieving $67 in monthly savings.',
        bn: 'সিমুলেশনটি ৫০০GB মাসিক ভলিউম মূল্যায়ন করে: হট স্টোরেজে $২৪ এবং ওয়ার্ম স্টোরেজে $৯ মিলে ২টি সক্রিয় স্তরে মোট খরচ $৩৩, যা প্রতি মাসে $৬৭ সাশ্রয় নিশ্চিত করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive retention cost lab', bn: 'INSIDE — জীবন্ত রিটেনশন খরচ ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test tiered storage economics live. Allocating 120GB to the hot tier costs $24 while 380GB in the warm tier costs $9, combining for a total of $33 across 2 active tiers. Compared to keeping all 500GB on expensive hot storage ($100), tiered retention saves $67 monthly on 500GB volume. Lifecycle policies automate these cost reductions without manual intervention.',
        bn: 'স্তরভিত্তিক স্টোরেজের অর্থনৈতিক সাশ্রয় পরীক্ষা করুন। হট টিয়ারে ১২০GB ডেটায় খরচ হয় $২৪ এবং ওয়ার্ম টিয়ারে ৩৮০GB ডেটায় খরচ হয় $৯, যা ২টি সক্রিয় স্তরে মোট খরচ দাঁড়ায় $৩৩। সম্পূর্ণ ৫০০GB ব্যয়বহুল হট স্টোরেজে রাখার ($১০০) তুলনায় স্তরভিত্তিক রিটেনশনে ৫০০GB ভলিউমে প্রতি মাসে $৬৭ সাশ্রয় হয়। স্বয়ংক্রিয় পলিসি কোনো বাড়তি কাজ ছাড়াই এই সাশ্রয় নিশ্চিত করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Retention lab (audit cost savings, press Run)', bn: 'Retention lab (খরচ সাশ্রয় নিরীক্ষা, Run)' },
      html: '<h3>Tiered Log Storage Economics</h3>\n<pre id="out"></pre>\n<p>Lifecycle cost optimization across storage tiers.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const hot = 24;\nconst warm = 9;\nconst tiered = hot + warm;\nconst unmanaged = 100;\nconst saved = unmanaged - tiered;\nconsole.log("saved: " + saved);\ndocument.getElementById("out").textContent = "Hot: $" + hot + " · Warm: $" + warm + " · Tiered: $" + tiered + " · Saved: $" + saved + " on 500GB (2 active tiers ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Retention and compliance rules', bn: 'ফলাফল — রিটেনশন ও কমপ্লায়েন্সের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Automate lifecycle transitions: rely on S3 bucket lifecycle rules and Elasticsearch ILM rather than manual deletion scripts.', bn: 'লাইফসাইকেল স্বয়ংক্রিয় রাখুন: ম্যানুয়াল ডিলিট স্ক্রিপ্টের বদলে ক্লাউড বাকেট রুলস এবং ইলাস্টিকসার্চ ILM এর ওপর নির্ভর করুন।' },
        { en: 'Pseudonymize identifiers for GDPR: store user IDs rather than names or emails so deleting the user identity mapping table satisfies right-to-be-forgotten without rewriting log archives.', bn: 'জিডিপিআরের জন্য ছদ্মনাম ব্যবহার করুন: নাম বা ইমেইলের বদলে আইডি রাখুন যাতে ম্যাপিং টেবিল মুছলেই আর্কাইভ না বদলে তথ্য মুছে ফেলার আইন মানা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common retention pitfalls', bn: 'ডিবাগ — রিটেনশনের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Linux open file descriptors preventing deleted log disk reclamation', bn: 'ফাইল ডেসক্রিপ্টর খোলা থাকার কারণে ডিস্ক খালি না হওয়া' },
      text: {
        en: 'If a bash script runs rm app.log while the application process still holds the open file descriptor, Linux keeps the disk blocks allocated, meaning df -h still shows 100% full! Cure: use copytruncate in logrotate or run > app.log to truncate the file in place without closing the descriptor.',
        bn: 'অ্যাপ্লিকেশন চালু থাকা অবস্থায় rm app.log দিলে লিনাক্স ডিস্কের জায়গা খালি করে না, ফলে ডিস্ক তখনও ১০০% পূর্ণ দেখায়! প্রতিকার: ফাইলে হাত না দিয়ে logrotate এ copytruncate ব্যবহার করুন বা > app.log দিয়ে খালি করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Glacier retrieval fee awareness', bn: 'গ্লেসিয়ার ডেটা উত্তোলনের ফি সম্পর্কে সতর্কতা' },
      text: {
        en: 'S3 Glacier Deep Archive storage is dirt-cheap, but bulk retrieval operations incur fees and take 3 to 5 hours. Keep 30 days of logs in S3 Standard warm tier so frequent incident queries never incur emergency archive retrieval charges.',
        bn: 'এস৩ গ্লেসিয়ার স্টোরেজ অত্যন্ত সস্তা হলেও ডেটা উত্তোলনে ফি লাগে এবং ৩ থেকে ৫ ঘণ্টা সময় নেয়। তাই ঘন ঘন সমস্যা অনুসন্ধানের জন্য প্রথম ৩০ দিনের লগ সাধারণ এস৩ ওয়ার্ম টিয়ারে রাখুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production retention architectures', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইন্ডাস্ট্রিয়াল রিটেনশন ব্যবস্থাপনা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Fintech PCI-DSS compliance: banks enforce 365-day immutable WORM (Write Once Read Many) log storage on S3 Object Lock to prevent tampering.', bn: 'ফিনটেক PCI-DSS কমপ্লায়েন্স: ব্যাংকগুলো ডেটা বিকৃতি ঠেকাতে এস৩ অবজেক্ট লক দিয়ে ৩৬৫ দিনের জন্য অপরিবর্তনীয় লগ সংরক্ষণ করে।' },
        { en: 'Healthcare HIPAA compliance: encrypts audit access logs with customer-managed KMS keys, retaining access histories for 6 years.', bn: 'স্বাস্থ্যসেবা HIPAA কমপ্লায়েন্স: নিরাপত্তা অডিট লগগুলোকে কেএমএস এনক্রিপশন দিয়ে দীর্ঘ ৬ বছর পর্যন্ত সুরক্ষিত রাখে।' },
        { en: 'Logrotate on Debian/RHEL: the ubiquitous Linux system utility rotating /var/log/syslog and nginx access logs daily across millions of servers.', bn: 'লিনাক্সে Logrotate: বিশ্বব্যাপী লক্ষ লক্ষ লিনাক্স সার্ভারে সিস্টেম ও ওয়েব সার্ভার লগ স্বয়ংক্রিয়ভাবে পরিচালনা করার সার্বজনীন টুল।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — The Logging Release: Production Observability', bn: 'পরবর্তী পাঠ — লগিং রিলিজ: প্রোডাকশন অবজার্ভেবিলিটি' },
    },
    {
      type: 'para',
      text: {
        en: 'With retention and compliance mastered, Lesson 8 concludes the hub with production release: implementing distributed correlation IDs across microservices, bridging logs with OpenTelemetry distributed traces, and configuring actionable alerts.',
        bn: 'রিটেনশন ও কমপ্লায়েন্স আয়ত্ত করার পর, পাঠ ৮ প্রোডাকশন রিলিজ দিয়ে কোর্স সম্পন্ন করবে: মাইক্রোসার্ভিস জুড়ে ডিস্ট্রিবিউটেড কোরিলেশন আইডি, ট্রেসিং ব্রিজ এবং অ্যালার্টিং কনফিগারেশন।',
      },
    },
  ],
  exercises: [
    {
      id: 'log-ret-ex-1',
      kind: 'mcq',
      topic: 'copytruncate-purpose',
      question: {
        en: 'Why is the copytruncate directive used in Linux logrotate configurations for running server applications?',
        bn: 'রানিং সার্ভার অ্যাপ্লিকেশনের ক্ষেত্রে লিনাক্স logrotate কনফিগারেশনে copytruncate নির্দেশিকাটি কেন ব্যবহৃত হয়?',
      },
      options: [
        {
          en: 'It truncates the existing log file in place so the running application can continue writing without closing and reopening its file descriptor',
          bn: 'এটি ফাইলটিকে নিজের জায়গাতেই শূন্য করে ফেলে যাতে চালু থাকা অ্যাপ্লিকেশন ফাইল ডেসক্রিপ্টর বন্ধ না করেই স্বাভাবিকভাবে লেখা চালিয়ে যেতে পারে',
        },
        {
          en: 'It doubles the size of the computer memory cache',
          bn: 'এটি কম্পিউটারের মেমরি ক্যাশের আকার দ্বিগুণ করে',
        },
        {
          en: 'It copies the log file onto a floppy disk automatically',
          bn: 'এটি স্বয়ংক্রিয়ভাবে ফ্লপি ডিস্কে লগ ফাইলের ব্যাকআপ রাখে',
        },
        {
          en: 'It encrypts the operating system desktop wallpaper',
          bn: 'এটি অপারেটিং সিস্টেমের ডেস্কটপ ওয়ালপেপার এনক্রিপ্ট করে',
        },
      ],
      answer: 0,
      hint: { en: 'copytruncate keeps open file descriptors alive.', bn: 'copytruncate খোলা ফাইল ডেসক্রিপ্টরকে অক্ষত রাখে।' },
      explanation: {
        en: 'Without copytruncate, deleting an active log file leaves the file descriptor open, preventing disk space reclamation until the process restarts.',
        bn: 'copytruncate না দিলে প্রসেস ফাইলটি ধরে রাখে এবং ডিস্কের জায়গা খালি হয় না যতক্ষণ না অ্যাপ্লিকেশন রিস্টার্ট দেওয়া হয়।',
      },
    },
    {
      id: 'log-ret-ex-2',
      kind: 'mcq',
      topic: 'retention-sim-savings',
      question: {
        en: 'In our code walkthrough for a 500GB volume, what was the combined tiered storage cost across the 2 active tiers, and what was the monthly saving?',
        bn: 'আমাদের কোড আলোচনায় ৫০০GB ভলিউমে ২টি সক্রিয় স্তরে মোট কত স্টোরেজ খরচ হয়েছিল এবং প্রতি মাসে সাশ্রয় কত ছিল?',
      },
      options: [
        { en: 'Combined cost = $33 across 2 active tiers; monthly savings = $67 on 500GB volume', bn: '২টি সক্রিয় স্তরে মোট খরচ = $৩৩; ৫০০GB ভলিউমে মাসিক সাশ্রয় = $৬৭' },
        { en: 'Combined cost = $100 across 2 active tiers; monthly savings = $10 on 500GB volume', bn: '২টি সক্রিয় স্তরে মোট খরচ = $১০০; ৫০০GB ভলিউমে মাসিক সাশ্রয় = $১০' },
        { en: 'Combined cost = $5 across 1 active tier; monthly savings = $50 on 500GB volume', bn: '১টি সক্রিয় স্তরে মোট খরচ = $৫; ৫০০GB ভলিউমে মাসিক সাশ্রয় = $৫০' },
        { en: 'Combined cost = $0 across 0 active tiers; monthly savings = $0 on 0GB volume', bn: '০টি সক্রিয় স্তরে মোট খরচ = $০; ০GB ভলিউমে মাসিক সাশ্রয় = $০' },
      ],
      answer: 0,
      hint: { en: '24 + 9 = $33; 100 - 33 = $67.', bn: '২৪ + ৯ = $৩৩; ১০০ - ৩৩ = $৬৭।' },
      explanation: {
        en: 'The simulation calculated $24 hot + $9 warm = $33 total, saving $67 compared to unmanaged $100 storage on 500GB.',
        bn: 'সিমুলেশনটি হট $২৪ + ওয়ার্ম $৯ = মোট $৩৩ হিসাব করে ৫০০GB ভলিউমে আনম্যানেজড $১০০ এর তুলনায় $৬৭ সাশ্রয় নিশ্চিত করেছিল।',
      },
    },
    {
      id: 'log-ret-ex-3',
      kind: 'mcq',
      topic: 'gdpr-immutable-compliance',
      question: {
        en: 'How can organizations satisfy the GDPR Right to be Forgotten when application logs are stored in immutable WORM archives that cannot be edited?',
        bn: 'অপরিবর্তনীয় WORM আর্কাইভে সংরক্ষিত লগের ক্ষেত্রে প্রতিষ্ঠানগুলো কীভাবে জিডিপিআরের তথ্য মোছার অধিকার (Right to be Forgotten) পূরণ করতে পারে?',
      },
      options: [
        {
          en: 'Log pseudonymous surrogate keys (e.g. user UUIDs) instead of raw names or emails, so deleting the mapping table entry renders historical logs irreversibly anonymous',
          bn: 'সরাসরি নাম বা ইমেইলের বদলে ছদ্মনামী আইডি (যেমন UUID) লগ করা, যাতে ম্যাপিং টেবিলটি মুছে দিলেই ঐতিহাসিক লগগুলো স্থায়ীভাবে বেনামী হয়ে যায়',
        },
        {
          en: 'Physically shred the company hard drives every weekend',
          bn: 'প্রতি সপ্তাহান্তে কোম্পানির হার্ডড্রাইভগুলো কুচি কুচি করে কেটে ফেলা',
        },
        {
          en: 'Turn off all logging in the application completely',
          bn: 'অ্যাপ্লিকেশনে সমস্ত লগিং পুরোপুরি বন্ধ করে দেওয়া',
        },
        {
          en: 'Rewrite the historical archives manually using a text editor',
          bn: 'টেক্সট এডিটর দিয়ে ম্যানুয়ালি পুরনো আর্কাইভ এডিট করা',
        },
      ],
      answer: 0,
      hint: { en: 'Pseudonymization allows cryptographic erasing.', bn: 'ছদ্মনামী কি ব্যবহার করে ক্রিপ্টোগ্রাফিক পদ্ধতিতে ডেটা মোছা যায়।' },
      explanation: {
        en: 'Pseudonymization decouples personal identities from immutable logs: deleting the key mapping renders archived logs anonymous legally.',
        bn: 'আইডি ও পরিচয়ের ম্যাপিং টেবিল ডিলিট করে দিলে অপরিবর্তনীয় লগের তথ্য আইনগতভাবে সম্পূর্ণ বেনামী হয়ে যায়।',
      },
    },
    {
      id: 'log-ret-ex-4',
      kind: 'predict',
      topic: 'linux-log-utility-name',
      question: {
        en: 'What ubiquitous Linux command-line utility manages automatic log rotation, compression, and removal (e.g. logrotate)?',
        bn: 'কোন সুপরিচিত লিনাক্স কমান্ড-লাইন টুলটি স্বয়ংক্রিয় লগ রোটেশন, কম্প্রেশন ও ফাইল অপসারণ পরিচালনা করে (যেমন logrotate)?',
      },
      answer: 'logrotate',
      accept: ['logrotate', 'Logrotate'],
      hint: { en: 'l-o-g-r-o-t-a-t-e', bn: 'l-o-g-r-o-t-a-t-e' },
      explanation: {
        en: 'logrotate is the standard administrative daemon that automates log file rotation and compression on Unix systems.',
        bn: 'logrotate হলো ইউনিক্স সিস্টেমের প্রমিত অ্যাডমিনিস্ট্রেটিভ টুল যা স্বয়ংক্রিয়ভাবে লগ ফাইল রোটেশন ও কম্প্রেশন পরিচালনা করে।',
      },
    },
  ],
  quiz: {
    id: 'retains-retain-quiz',
    title: { en: 'Lesson 7 exam', bn: 'পাঠ ৭ পরীক্ষা' },
    questions: [
      {
        id: 'log-ret-q1',
        kind: 'mcq',
        topic: 'pci-dss-retention-rule',
        question: {
          en: 'Under the Payment Card Industry Data Security Standard (PCI-DSS), what is the mandatory retention period for security audit logs?',
          bn: 'পেমেন্ট কার্ড ইন্ডাস্ট্রি ডেটা সিকিউরিটি স্ট্যান্ডার্ড (PCI-DSS) অনুযায়ী সিকিউরিটি অডিট লগ সংরক্ষণের বাধ্যতামূলক সময়সীমা কত?',
        },
        options: [
          {
            en: 'At least 1 year of audit logs must be retained, with at least 3 months immediately available online for active analysis',
            bn: 'কমপক্ষে ১ বছরের অডিট লগ সংরক্ষণ করতে হবে, যার মধ্যে অন্তত ৩ মাসের ডেটা তাৎক্ষণিক অনুসন্ধানের জন্য অনলাইনে সচল থাকতে হবে',
          },
          {
            en: 'Exactly 24 hours only',
            bn: 'ঠিক ২৪ ঘণ্টার জন্য কেবল',
          },
          {
            en: '100 years in printed books',
            bn: 'ছাপানো বই আকারে ১০০ বছর',
          },
          {
            en: 'Zero days (must be deleted immediately)',
            bn: '০ দিন (সাথে সাথে মুছে ফেলতে হবে)',
          },
        ],
        answer: 0,
        hint: { en: 'PCI-DSS mandates 1 year retention.', bn: 'PCI-DSS এ ১ বছর সংরক্ষণের নিয়ম রয়েছে।' },
        explanation: {
          en: 'PCI-DSS Requirement 10.7 mandates audit log retention for at least one year, with three months readily accessible.',
          bn: 'PCI-DSS ১০.৭ নিয়ম অনুযায়ী কমপক্ষে ১ বছর লগ রাখতে হয় যার মধ্যে ৩ মাসের ডেটা সাথে সাথে অ্যাক্সেসযোগ্য থাকতে হয়।',
        },
      },
      {
        id: 'log-ret-q2',
        kind: 'mcq',
        topic: 'tiered-cost-sum-check',
        question: {
          en: 'In our code walkthrough, what was the total combined tiered storage cost computed from hotTierCost ($24) plus warmTierCost ($9)?',
          bn: 'আমাদের কোড আলোচনায় hotTierCost ($২৪) এবং warmTierCost ($৯) যোগ করে মোট কত স্টোরেজ খরচ হিসাব করা হয়েছিল?',
        },
        options: [
          { en: '$33 across 2 active tiers', bn: '২টি সক্রিয় স্তরে মোট $৩৩' },
          { en: '$100 across 2 active tiers', bn: '২টি সক্রিয় স্তরে মোট $১০০' },
          { en: '$50 across 1 active tier', bn: '১টি সক্রিয় স্তরে মোট $৫০' },
          { en: '$0 across 0 active tiers', bn: '০টি সক্রিয় স্তরে মোট $০' },
        ],
        answer: 0,
        hint: { en: '24 + 9 = 33.', bn: '২৪ + ৯ = ৩৩।' },
        explanation: {
          en: 'The simulation resolved $24 hot and $9 warm, producing a combined tiered cost of $33 across 2 active tiers.',
          bn: 'সিমুলেশনটিতে হট $২৪ এবং ওয়ার্ম $৯ যোগ করে ২টি সক্রিয় স্তরে মোট $৩৩ খরচ হিসাব করা হয়েছিল।',
        },
      },
      {
        id: 'log-ret-q3',
        kind: 'mcq',
        topic: 'glacier-retrieval-latency',
        question: {
          en: 'What architectural characteristic of Amazon S3 Glacier Deep Archive storage makes it unsuitable for active, real-time incident troubleshooting?',
          bn: 'আমাজন এস৩ গ্লেসিয়ার ডিপ আর্কাইভ স্টোরেজের কোন বৈশিষ্ট্যের কারণে এটি চলমান সমস্যার তাৎক্ষণিক অনুসন্ধানের জন্য অনুপযুক্ত?',
        },
        options: [
          {
            en: 'Data retrieval operations take between 3 and 12 hours to restore objects before they can be queried, making rapid incident triage impossible',
            bn: 'ডেটা উত্তোলনের জন্য ৩ থেকে ১২ ঘণ্টা পর্যন্ত অপেক্ষা করতে হয়, ফলে সমস্যা চলাকালীন লাইভ ডিবাগিং করা অসম্ভব হয়ে পড়ে',
          },
          {
            en: 'Glacier Deep Archive automatically deletes all data after 5 minutes',
            bn: 'গ্লেসিয়ার ডিপ আর্কাইভ ৫ মিনিট পরই সব ডেটা মুছে ফেলে',
          },
          {
            en: 'Glacier can only store pictures of cats',
            bn: 'গ্লেসিয়ারে কেবল বিড়ালের ছবি রাখা যায়',
          },
          {
            en: 'It requires an analog telephone dial-up modem to connect',
            bn: 'এতে যুক্ত হতে ডায়াল-আপ মডেম প্রয়োজন হয়',
          },
        ],
        answer: 0,
        hint: { en: 'Glacier retrieval takes hours to restore.', bn: 'গ্লেসিয়ার থেকে ডেটা আনতে কয়েক ঘণ্টা সময় লাগে।' },
        explanation: {
          en: 'Glacier archives are designed for long-term cold compliance; retrieval latency ranges from hours to days.',
          bn: 'গ্লেসিয়ার মূলত দীর্ঘমেয়াদী আইনি কমপ্লায়েন্সের জন্য তৈরি; এখান থেকে ডেটা উত্তোলনে কয়েক ঘণ্টা থেকে দিন পর্যন্ত সময় লাগতে পারে।',
        },
      },
      {
        id: 'log-ret-q4',
        kind: 'predict',
        topic: 'immutable-storage-acronym',
        question: {
          en: 'What 4-letter storage acronym describes write-once, read-many media used for tamper-evident compliance archives (e.g. WORM)?',
          bn: 'বিকৃতিহীন কমপ্লায়েন্স সংরক্ষণের জন্য একবার লেখা ও বহুবার পড়ার উপযোগী স্টোরেজকে সংক্ষেপে কী বলা হয় (যেমন WORM)?',
        },
        answer: 'WORM',
        accept: ['WORM', 'worm', 'Write Once Read Many'],
        hint: { en: 'Write Once Read Many = W-O-R-M.', bn: 'Write Once Read Many = W-O-R-M।' },
        explanation: {
          en: 'WORM (Write Once, Read Many) ensures logs cannot be modified, overwritten, or deleted before retention deadlines.',
          bn: 'WORM নিশ্চিত করে যে রিটেনশন সময়সীমা শেষ হওয়ার আগে কোনোভাবেই লগ পরিবর্তন বা মোছা সম্ভব নয়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'the-logging-release',
    title: { en: 'The Logging Release — Production Observability', bn: 'লগিং রিলিজ — প্রোডাকশন অবজার্ভেবিলিটি' },
  },
};
