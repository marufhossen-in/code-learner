import type { Lesson } from '../../../lib/types';

export const BlobsAndTheBlobLesson: Lesson = {
  slug: 'blobs-and-the-blob',
  tech: 'azure',
  title: {
    en: 'Azure Blob Storage: Storage Accounts, Access Tiers, and SAS Tokens',
    bn: 'অ্যাজিউর ব্লব স্টোরেজ: স্টোরেজ অ্যাকাউন্ট, অ্যাক্সেস টিয়ার এবং SAS টোকেন'
  },
  summary: {
    en: 'Master massively scalable object storage in Azure: Storage Account types, Hot, Cool, Cold, and Archive access tiers, automated lifecycle policies, and secure delegation via Shared Access Signatures (SAS).',
    bn: 'অ্যাজিউরে স্কেলেবল অবজেক্ট স্টোরেজ আয়ত্ত করুন: স্টোরেজ অ্যাকাউন্টের ধরন, হট, কুল, কোল্ড ও আর্কাইভ টিয়ার, স্বয়ংক্রিয় লাইফসাইকেল নীতি এবং শেয়ার্ড অ্যাক্সেস সিগনেচার (SAS) দ্বারা নিরাপদ ডেলিগেশন।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'blob-storage-fundamentals',
      text: {
        en: 'Azure Blob Storage Architecture and Account Types',
        bn: 'অ্যাজিউর ব্লব স্টোরেজ আর্কিটেকচার এবং অ্যাকাউন্টের প্রকারভেদ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Storing unstructured data at cloud scale requires high durability, elastic capacity, and cost tiering. Azure Blob Storage serves as Microsoft object storage solution, hosting petabytes of documents, video streams, and analytical datasets. In this guide, you will learn how to design storage accounts, leverage Hot, Cool, Cold, and Archive access tiers, automate lifecycle rules, and secure data access using Shared Access Signatures (SAS).',
        bn: 'ক্লাউড স্কেলে অসংগঠিত ডেটা সংরক্ষণের জন্য উচ্চ স্থায়িত্ব, স্থিতিস্থাপক ক্ষমতা এবং খরচ সাশ্রয়ী স্তরবিন্যাস প্রয়োজন। মাইক্রোসফটের অবজেক্ট স্টোরেজ সেবা হিসেবে অ্যাজিউর ব্লব স্টোরেজ পেটাপাইট আকারের নথি, ভিডিও এবং অ্যানালিটিক্স ডেটা পরিচালনা করে। এই পাঠে আপনি শিখবেন কীভাবে স্টোরেজ অ্যাকাউন্ট ডিজাইন করতে হয়, হট, কুল, কোল্ড ও আর্কাইভ টিয়ারের সুবিধা নিতে হয়, লাইফসাইকেল নিয়ম স্বয়ংক্রিয় করতে হয় এবং শেয়ার্ড অ্যাক্সেস সিগনেচার (SAS) দ্বারা ডেটা নিরাপদ রাখতে হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'General-Purpose v2 Accounts: Standard storage accounts supporting Azure Blobs, Files, Queues, and Tables under a single billing framework.',
          bn: 'জেনারেল-পারপাস ভি২ অ্যাকাউন্ট: স্ট্যান্ডার্ড স্টোরেজ অ্যাকাউন্ট যা একক বিলিং ব্যবস্থার অধীনে ব্লব, ফাইল, কিউ এবং টেবিল স্টোরেজ পরিচালনা করে।'
        },
        {
          en: 'Block Blobs: Optimized for streaming media, documents, and big data backups, storing up to 190 TB within individual blob files.',
          bn: 'ব্লক ব্লব: স্ট্রিমিং মিডিয়া, ডকুমেন্ট এবং বিগ ডেটা ব্যাকআপের জন্য আদর্শ, যা একক ফাইলে সর্বোচ্চ ১৯০ টিবি পর্যন্ত ডেটা সংরক্ষণ করতে পারে।'
        },
        {
          en: 'Append Blobs: Optimized for logging and telemetry ingestion, permitting append operations without modifying existing committed data blocks.',
          bn: 'অ্যাপেন্ড ব্লব: লগিং এবং টেলিমেট্রি সংরক্ষণের জন্য অপ্টিমাইজড, যা পূর্ববর্তী ব্লক পরিবর্তন না করেই শেষে নতুন ডেটা যোগ করতে দেয়।'
        },
        {
          en: 'Page Blobs: Collections of 512 byte pages supporting random read and write operations, serving as the underlying storage for Azure VM operating system disks.',
          bn: 'পেজ ব্লব: ৫১২ বাইট পেজের সমন্বয় যা র‍্যান্ডম রিড ও রাইট সমর্থন করে এবং ভার্চুয়াল মেশিনের অপারেটিং সিস্টেম ডিস্ক হিসেবে কাজ করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'access-tiers-and-lifecycle',
      text: {
        en: 'Storage Access Tiers, Rehydration, and SAS Security',
        bn: 'স্টোরেজ অ্যাক্সেস টিয়ার, রিহাইড্রেশন এবং SAS নিরাপত্তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Data storage costs grow quickly without automated tiering. Automated lifecycle management rules transition aging files to colder storage tiers, reducing long-term financial expenditure while retaining regulatory audit compliance.',
        bn: 'স্বয়ংক্রিয় স্তরবিন্যাস ছাড়া ডেটা স্টোরেজ খরচ দ্রুত বৃদ্ধি পায়। স্বয়ংক্রিয় লাইফসাইকেল নীতি পুরনো ফাইলগুলোকে সাশ্রয়ী কোল্ড বা আর্কাইভ টিয়ারে পাঠিয়ে দেয়, যা অডিট কমপ্লায়েন্স রক্ষা করার পাশাপাশি দীর্ঘমেয়াদী ব্যয় নাটকীয়ভাবে কমায়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Hot and Cool Tiers: Hot tier minimizes transaction fees for active data, while Cool tier lowers storage fees for data kept over 30 days.',
          bn: 'হট ও কুল টিয়ার: সক্রিয় ডেটার জন্য হট টিয়ার রিড ফি সর্বনিম্ন রাখে, আর কমপক্ষে ৩০ দিন সংরক্ষিত ডেটার ক্ষেত্রে কুল টিয়ার স্টোরেজ খরচ কমায়।'
        },
        {
          en: 'Cold and Archive Tiers: Cold tier serves rarely viewed data kept over 90 days, while Archive tier provides ultra-cheap offline storage for 180 days in retention.',
          bn: 'কোল্ড ও আর্কাইভ টিয়ার: কমপক্ষে ৯০ দিন রাখা ডেটা কোল্ড টিয়ারে থাকে, আর ১৮০ দিন সংরক্ষণের জন্য সবচেয়ে সাশ্রয়ী অফলাইন স্টোরেজ দেয় আর্কাইভ টিয়ার।'
        },
        {
          en: 'Blob Rehydration: Process of moving an archived offline blob back to an online Hot or Cool tier before applications can read it.',
          bn: 'ব্লব রিহাইড্রেশন: অ্যাপ্লিকেশন দ্বারা পড়ার জন্য একটি অফলাইন আর্কাইভ করা ব্লবকে পুনরায় অনলাইন হট বা কুল টিয়ারে ফিরিয়ে আনার প্রক্রিয়া।'
        },
        {
          en: 'Shared Access Signatures: Time-limited, permission-scoped security tokens granting restricted client access to specific blobs without revealing account keys.',
          bn: 'শেয়ার্ড অ্যাক্সেস সিগনেচার (SAS): নির্দিষ্ট সময় ও অনুমতির মেয়াদের টোকেন যা মূল অ্যাকাউন্ট পাসওয়ার্ড না দেখিয়েই গ্রাহককে ব্লব ব্যবহারের সুযোগ দেয়।'
        }
      ]
    },
    {
      type: 'diagram',
      caption: {
        en: 'Azure Blob Storage tiering benchmark across 100000 GB. Phase 1 in Hot storage costs 2080 dollars. Policies shift Phase 3 to Cool at 1200, Phase 6 to Cold at 600, and Phase 12 to Archive at 180, saving 1900 dollars with a 91 percent reduction.',
        bn: '১০০০০০ জিবি ডেটাসেটে অ্যাজিউর ব্লব স্টোরেজ টিয়ারিং বেঞ্চমার্ক। ১ম ধাপে হট স্টোরেজে খরচ ২০৮০ ডলার। নীতিগুলো ৩য় ধাপে ১২০০ দিয়ে কুল, ৬ষ্ঠ ধাপে ৬০০ দিয়ে কোল্ড এবং ১২ তম ধাপে ১৮০ দিয়ে আর্কাইভে রূপান্তর করে, যা ১৯০০ ডলার এবং ৯১ শতাংশ খরচ সাশ্রয় করে।',
      },
      svg: `<svg viewBox="0 0 800 440" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="440" rx="12" fill="#0f172a" />

  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" fill="#f8fafc" font-size="16" font-family="system-ui, sans-serif" font-weight="700">Azure Blob Storage: Automated Lifecycle Tiering (100000 GB)</text>

  <!-- Left to Right: 4 Access Tiers -->
  <!-- Tier 1: Hot Tier -->
  <rect x="25" y="60" width="170" height="175" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
  <circle cx="110" cy="88" r="8" fill="#f43f5e" />
  <text x="110" y="112" text-anchor="middle" fill="#fca5a5" font-size="12" font-family="system-ui, sans-serif" font-weight="700">1. Hot Tier (Month 1)</text>
  <text x="110" y="132" text-anchor="middle" fill="#f8fafc" font-size="14" font-family="system-ui, sans-serif" font-weight="700">$2080 / mo</text>
  <text x="110" y="152" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">$0.0208 per GB</text>
  <rect x="35" y="165" width="150" height="55" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1" />
  <text x="110" y="185" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">Active daily access</text>
  <text x="110" y="202" text-anchor="middle" fill="#34d399" font-size="9" font-family="system-ui, sans-serif">Zero retrieval fees</text>

  <!-- Transition Arrow 1 -->
  <path d="M 200 145 L 215 145" stroke="#38bdf8" stroke-width="2" />

  <!-- Tier 2: Cool Tier -->
  <rect x="220" y="60" width="170" height="175" rx="8" fill="#1e293b" stroke="#0ea5e9" stroke-width="1.5" />
  <circle cx="305" cy="88" r="8" fill="#0ea5e9" />
  <text x="305" y="112" text-anchor="middle" fill="#38bdf8" font-size="12" font-family="system-ui, sans-serif" font-weight="700">2. Cool Tier (Month 3)</text>
  <text x="305" y="132" text-anchor="middle" fill="#f8fafc" font-size="14" font-family="system-ui, sans-serif" font-weight="700">$1200 / mo</text>
  <text x="305" y="152" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">$0.0120 per GB</text>
  <rect x="230" y="165" width="150" height="55" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1" />
  <text x="305" y="185" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">30-day minimum</text>
  <text x="305" y="202" text-anchor="middle" fill="#38bdf8" font-size="9" font-family="system-ui, sans-serif">Infrequent access</text>

  <!-- Transition Arrow 2 -->
  <path d="M 395 145 L 410 145" stroke="#38bdf8" stroke-width="2" />

  <!-- Tier 3: Cold Tier -->
  <rect x="415" y="60" width="170" height="175" rx="8" fill="#1e293b" stroke="#6366f1" stroke-width="1.5" />
  <circle cx="500" cy="88" r="8" fill="#6366f1" />
  <text x="500" y="112" text-anchor="middle" fill="#818cf8" font-size="12" font-family="system-ui, sans-serif" font-weight="700">3. Cold Tier (Month 6)</text>
  <text x="500" y="132" text-anchor="middle" fill="#f8fafc" font-size="14" font-family="system-ui, sans-serif" font-weight="700">$600 / mo</text>
  <text x="500" y="152" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">$0.0060 per GB</text>
  <rect x="425" y="165" width="150" height="55" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1" />
  <text x="500" y="185" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">90-day minimum</text>
  <text x="500" y="202" text-anchor="middle" fill="#818cf8" font-size="9" font-family="system-ui, sans-serif">Rarely accessed data</text>

  <!-- Transition Arrow 3 -->
  <path d="M 590 145 L 605 145" stroke="#38bdf8" stroke-width="2" />

  <!-- Tier 4: Archive Tier -->
  <rect x="610" y="60" width="165" height="175" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <circle cx="692" cy="88" r="8" fill="#10b981" />
  <text x="692" y="112" text-anchor="middle" fill="#34d399" font-size="12" font-family="system-ui, sans-serif" font-weight="700">4. Archive Tier (M12)</text>
  <text x="692" y="132" text-anchor="middle" fill="#f8fafc" font-size="14" font-family="system-ui, sans-serif" font-weight="700">$180 / mo</text>
  <text x="692" y="152" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui, sans-serif">$0.0018 per GB</text>
  <rect x="618" y="165" width="150" height="55" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1" />
  <text x="692" y="185" text-anchor="middle" fill="#34d399" font-size="9" font-family="system-ui, sans-serif">180-day retention</text>
  <text x="692" y="202" text-anchor="middle" fill="#fbbf24" font-size="9" font-family="system-ui, sans-serif">Offline (Rehydrate)</text>

  <!-- Rehydration & SAS Security Section (Middle) -->
  <rect x="25" y="250" width="750" height="115" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="400" y="272" text-anchor="middle" fill="#fbbf24" font-size="12" font-family="system-ui, sans-serif" font-weight="700">Blob Rehydration Flow &amp; Shared Access Signature (SAS) Security</text>

  <rect x="45" y="285" width="330" height="65" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1" />
  <text x="210" y="305" text-anchor="middle" fill="#38bdf8" font-size="10" font-family="system-ui, sans-serif" font-weight="600">Rehydration Priority Options</text>
  <text x="210" y="323" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">• Standard Priority: Rehydrates in up to 15 hours</text>
  <text x="210" y="338" text-anchor="middle" fill="#34d399" font-size="9" font-family="system-ui, sans-serif">• High Priority: Urgent restore in &lt; 1 hour (extra cost)</text>

  <rect x="420" y="285" width="335" height="65" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1" />
  <text x="587" y="305" text-anchor="middle" fill="#34d399" font-size="10" font-family="system-ui, sans-serif" font-weight="600">Shared Access Signature (SAS) Delegation</text>
  <text x="587" y="323" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">• Scoped permissions (Read only) · IP address bounds</text>
  <text x="587" y="338" text-anchor="middle" fill="#38bdf8" font-size="9" font-family="system-ui, sans-serif">• Time-limited expiry · Backed by Microsoft Entra ID</text>

  <!-- Bottom Verification Badge -->
  <rect x="25" y="380" width="750" height="44" rx="8" fill="#1e293b" stroke="#0ea5e9" stroke-width="1" />
  <circle cx="45" cy="402" r="6" fill="#10b981" />
  <text x="62" y="406" fill="#f8fafc" font-size="11" font-family="system-ui, sans-serif" font-weight="600">Storage Audit: 100000 GB | $2080 Hot -> $180 Archive | $1900/mo saved | 91% cost reduction</text>
</svg>`,
    },
    {
      type: 'heading',
      id: 'blob-lifecycle-simulator',
      text: {
        en: 'Interactive Benchmark: Azure Blob Storage Lifecycle Simulator',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: অ্যাজিউর ব্লব স্টোরেজ লাইফসাইকেল সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We run a deterministic TypeScript simulation benchmarking multi-tier cost transitions across a 100000 GB enterprise repository over a 12-month period.',
        bn: 'আমরা ১২ মাসের সময়কালে একটি ১০০০০০ জিবি এন্টারপ্রাইজ রিপোজিটরি জুড়ে বহুস্তরীয় খরচ রূপান্তরের একটি নির্ধারিত টাইপস্ক্রিপ্ট সিমুলেশন পরিচালনা করি।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'blob-lifecycle-simulator.ts',
      code: `// Azure Blob Storage Lifecycle Cost Optimization Benchmark
interface BlobLifecycleMetrics {
  datasetGigabytes: number;
  initialHotCost: number;
  coolCost: number;
  coldCost: number;
  finalArchiveCost: number;
  monthlySavings: number;
  reductionPercentage: number;
}

function simulateBlobLifecycle(): BlobLifecycleMetrics {
  const gb = 100000;
  const hot = Math.round(gb * 0.0208); // 2080 dollars
  const cool = Math.round(gb * 0.0120); // 1200 dollars
  const cold = Math.round(gb * 0.0060); // 600 dollars
  const archive = Math.round(gb * 0.0018); // 180 dollars
  const savings = hot - archive; // 1900 dollars
  const pct = Math.round((savings / hot) * 100); // 91%

  return {
    datasetGigabytes: gb,
    initialHotCost: hot,
    coolCost: cool,
    coldCost: cold,
    finalArchiveCost: archive,
    monthlySavings: savings,
    reductionPercentage: pct,
  };
}

const res = simulateBlobLifecycle();

console.log('--- Azure Blob Storage Lifecycle Cost Optimization ---');
console.log(\`Enterprise dataset size: \${res.datasetGigabytes} GB\`);
// Enterprise dataset size: 100000 GB
console.log(\`Month 1 Hot Tier monthly cost: $\${res.initialHotCost}\`);
// Month 1 Hot Tier monthly cost: $2080
console.log(\`Month 3 Cool Tier monthly cost: $\${res.coolCost}\`);
// Month 3 Cool Tier monthly cost: $1200
console.log(\`Month 6 Cold Tier monthly cost: $\${res.coldCost}\`);
// Month 6 Cold Tier monthly cost: $600
console.log(\`Month 12 Archive Tier monthly cost: $\${res.finalArchiveCost}\`);
// Month 12 Archive Tier monthly cost: $180
console.log(\`Net monthly financial savings: $\${res.monthlySavings}\`);
// Net monthly financial savings: $1900
console.log(\`Total storage cost reduction: \${res.reductionPercentage}%\`);
// Total storage cost reduction: 91%`,
      caption: {
        en: 'Our deterministic benchmark evaluated lifecycle cost optimization across a 100000 GB Azure Blob Storage repository. Baseline Hot tier required 2080 dollars. Over 12 months, automated lifecycle rules shifted aging records through Cool at 1200 and Cold at 600 down to Archive storage at 180 per billing cycle. This automated tiering achieved 1900 in net savings, slashing expenses by 91 percent.',
        bn: 'আমাদের নির্ধারিত বেঞ্চমার্কে ১০০০০০ জিবি অ্যাজিউর ব্লব স্টোরেজে লাইফসাইকেল খরচ মূল্যায়ন করা হয়েছে। শুরুতে হট টিয়ারে ২০৮০ ডলার লাগত। ১২ মাস পর স্বয়ংক্রিয় লাইফসাইকেল নীতি পুরনো ডেটাকে ১২০০ খরচের কুল এবং ৬০০ খরচের কোল্ড হয়ে ১৮০ খরচের আর্কাইভে স্থানান্তর করায় বিল নাটকীয়ভাবে কমে। এই স্তরবিন্যাস ১৯০০ সাশ্রয় এবং ৯১ শতাংশ খরচ কমিয়েছে।',
      },
    },
  ],
  exercises: [
    {
      id: 'azure-blob-ex-1',
      kind: 'predict',
      topic: 'archive-tier-monthly-cost',
      question: {
        en: 'In our Blob Storage benchmark of 100000 GB, what was the monthly storage cost in dollars after transitioning data to the Archive tier at Month 12 (e.g. 180 ):',
        bn: 'আমাদের ১০০০০০ জিবি ব্লব স্টোরেজ বেঞ্চমার্কে ১২ তম মাসে আর্কাইভ টিয়ারে ডেটা স্থানান্তরের পর মাসিক খরচ কত ডলারে নেমে এসেছিল (যেমন 180 ):',
      },
      answer: '180',
      accept: ['180', '180 dollars', '১৮০'],
      hint: {
        en: '180',
        bn: '180',
      },
      explanation: {
        en: 'Transitioning 100000 GB into the Archive tier lowered the storage cost to 180 dollars per month.',
        bn: '১০০০০০ জিবি ডেটা আর্কাইভ টিয়ারে স্থানান্তরের ফলে স্টোরেজ খরচ প্রতি মাসে ১৮০ ডলারে নেমে আসে।'
      },
    },
    {
      id: 'azure-blob-ex-2',
      kind: 'mcq',
      topic: 'archive-tier-rehydration-tradeoff',
      question: {
        en: 'What is the primary operational trade-off of storing infrequently accessed data in the Azure Blob Storage Archive tier?',
        bn: 'অ্যাজিউর ব্লব স্টোরেজ আর্কাইভ টিয়ারে ডেটা সংরক্ষণের প্রধান পরিচালনগত সুবিধা ও অসুবিধা কী?'
      },
      options: [
        {
          en: 'It offers ultra-low storage fees but data remains offline, requiring a rehydration process that takes up to fifteen hours before files can be read',
          bn: 'এটি অত্যন্ত সাশ্রয়ী স্টোরেজ খরচ দেয় তবে ডেটা অফলাইনে থাকে, ফলে ফাইল পড়ার আগে রিহাইড্রেশন করতে পনের ঘণ্টা পর্যন্ত সময় লাগতে পারে'
        },
        {
          en: 'It changes the text font of stored documents to comic sans',
          bn: 'সংরক্ষিত দলিলের টেক্সট ফন্ট স্বয়ংক্রিয়ভাবে পরিবর্তন করে ফেলে'
        },
        {
          en: 'It deletes stored files if they are not opened every forty-eight hours',
          bn: 'প্রতি আটচল্লিশ ঘণ্টার মধ্যে ফাইল না খুললে তা স্থায়ীভাবে মুছে দেয়'
        },
        {
          en: 'It permanently disconnects developers from Microsoft Office',
          bn: 'ডেভেলপারদের মাইক্রোসফট অফিস ব্যবহার থেকে চিরতরে বিচ্ছিন্ন করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Archive tier is an offline tier requiring hours of rehydration to read.',
        bn: 'আর্কাইভ হলো একটি অফলাইন টিয়ার যা পড়ার জন্য কয়েক ঘণ্টার রিহাইড্রেশন আবশ্যক।'
      },
      explanation: {
        en: 'The Archive tier is designed for compliance backups stored for at least 180 days. Because media is offline, applications cannot access blobs immediately; they must initiate a rehydration request back to Hot or Cool.',
        bn: 'আর্কাইভ টিয়ার ১৮০ দিনের বেশি সংরক্ষণের উপযোগী ব্যাকআপের জন্য তৈরি। ডেটা অফলাইনে থাকায় তা সরাসরি পড়া যায় না; আগে রিহাইড্রেশন রিকোয়েস্ট পাঠিয়ে হট বা কুল টিয়ারে আনতে হয়।'
      }
    },
    {
      id: 'azure-blob-ex-3',
      kind: 'predict',
      topic: 'monthly-storage-savings-dollars',
      question: {
        en: 'In our 100000 GB repository, how many dollars were saved per month by automating lifecycle transitions from Hot down to Archive (e.g. 1900 ):',
        bn: 'আমাদের ১০০০০০ জিবি রিপোজিটরিতে হট থেকে আর্কাইভে স্বয়ংক্রিয় লাইফসাইকেল রূপান্তরের মাধ্যমে প্রতি মাসে কত ডলার সাশ্রয় হয়েছিল (যেমন 1900 ):',
      },
      answer: '1900',
      accept: ['1900', '1900 dollars', '১৯০০'],
      hint: {
        en: '1900',
        bn: '1900',
      },
      explanation: {
        en: 'Automated lifecycle management reduced storage bills from 2080 dollars down to 180 dollars, achieving 1900 dollars in monthly savings.',
        bn: 'স্বয়ংক্রিয় লাইফসাইকেল নীতি মাসিক খরচ ২০৮০ ডলার থেকে ১৮০ ডলারে নামিয়ে এনে প্রতি মাসে ১৯০০ ডলার সাশ্রয় করেছে।'
      },
    },
    {
      id: 'azure-blob-ex-4',
      kind: 'mcq',
      topic: 'sas-token-security-advantage',
      question: {
        en: 'Why is a Shared Access Signature (SAS) token preferred over sharing master Storage Account Access Keys with client applications?',
        bn: 'ক্লায়েন্ট অ্যাপ্লিকেশনে মূল স্টোরেজ অ্যাকাউন্ট অ্যাক্সেস কি দেওয়ার চেয়ে শেয়ার্ড অ্যাক্সেস সিগনেচার (SAS) টোকেন ব্যবহার করা কেন শ্রেয়?'
      },
      options: [
        {
          en: 'A SAS token provides granular, time-limited, and IP-restricted permissions to specific blobs without exposing master root account credentials',
          bn: 'একটি SAS টোকেন মূল অ্যাকাউন্ট পাসওয়ার্ড না দেখিয়েই নির্দিষ্ট ব্লবে সময়সীমা ও আইপি নিয়ন্ত্রিত সুনির্দিষ্ট অনুমতি প্রদান করে'
        },
        {
          en: 'Storage account access keys expire automatically after three minutes',
          bn: 'স্টোরেজ অ্যাকাউন্টের মূল কি তিন মিনিট পর পর স্বয়ংক্রিয়ভাবে অকেজো হয়ে যায়'
        },
        {
          en: 'SAS tokens make internet connections fifty percent faster',
          bn: 'SAS টোকেন ব্যবহার করলে ইন্টারনেটের গতি পঞ্চাশ শতাংশ বেড়ে যায়'
        },
        {
          en: 'Master keys can only be typed on government computers',
          bn: 'মূল কি কেবল সরকারি কম্পিউটারেই টাইপ করা সম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'SAS tokens provide temporary, time-bounded, scoped access without key exposure.',
        bn: 'SAS টোকেন মূল চাবি না দেখিয়েই অস্থায়ী ও সীমিত অ্যাক্সেস দেয়।'
      },
      explanation: {
        en: 'Storage account keys give full superuser control over all storage services. A SAS token restricts access to specific resources, HTTP verbs (such as Read only), IP ranges, and an explicit expiration timestamp.',
        bn: 'মূল স্টোরেজ কি পুরো অ্যাকাউন্টের সর্বময় ক্ষমতা দেয়। অন্যদিকে SAS টোকেন কেবল নির্দিষ্ট ফাইল, অ্যাকশন (যেমন শুধু পড়া), আইপি রেঞ্জ এবং মেয়াদের মধ্যে ক্ষমতা সীমাবদ্ধ রাখে।'
      }
    }
  ],
  quiz: {
    id: 'azure-blobs-quiz',
    title: {
      en: 'Azure Blob Storage and Object Tiering Knowledge Check',
      bn: 'অ্যাজিউর ব্লব স্টোরেজ ও অবজেক্ট টিয়ারিং জ্ঞান যাচাই'
    },
    questions: [
      {
        id: 'azure-blob-qz-1',
        kind: 'mcq',
        topic: 'blob-types-selection',
        question: {
          en: 'Which Azure Blob type should an architect select when designing a logging pipeline that continuously appends audit records to daily log files?',
          bn: 'একটি দৈনিক অডিট লগ ফাইলে ক্রমাগত তথ্য যোগ করার পাইপলাইন ডিজাইনে কোন ব্লব টাইপটি নির্বাচন করা উচিত?'
        },
        options: [
          {
            en: 'Append Blobs, which are specifically optimized for efficient append operations without rewriting existing committed blocks',
            bn: 'অ্যাপেন্ড ব্লব (Append Blobs), যা বিদ্যমান ব্লকগুলো পুনরায় না লিখে কেবল শেষে নতুন ডেটা যোগ করার জন্য বিশেষভাবে তৈরি'
          },
          {
            en: 'Page Blobs exclusively designed for floppy disks',
            bn: 'পেজ ব্লব যা পুরনো ফ্লপি ডিস্কের জন্য তৈরি'
          },
          {
            en: 'Video Blobs that only store television commercials',
            bn: 'ভিডিও ব্লব যা কেবল বাণিজ্যিক বিজ্ঞাপন সংরক্ষণ করে'
          },
          {
            en: 'Audio Blobs that play sound effects when opened',
            bn: 'অডিও ব্লব যা খুললেই শব্দ তৈরি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Append Blobs are optimized for fast append-only write workloads.',
          bn: 'অ্যাপেন্ড ব্লব দ্রুত নতুন ডেটা যোগ করার কাজের জন্য অপ্টিমাইজড।'
        },
        explanation: {
          en: 'Append Blobs are composed of blocks optimized for append operations. Calling AppendBlock adds data to the end of the blob with minimal latency and high concurrency.',
          bn: 'অ্যাপেন্ড ব্লব কেবল শেষে ডেটা যোগ করার কাজের জন্য তৈরি। এর মাধ্যমে অতি দ্রুত ও একাধিক উৎস থেকে একই লগে তথ্য সংরক্ষণ করা যায়।'
        }
      },
      {
        id: 'azure-blob-qz-2',
        kind: 'mcq',
        topic: 'rehydration-priority-modes',
        question: {
          en: 'When initiating a rehydration request to pull an archived blob back to the Hot tier, what is the difference between Standard and High priority?',
          bn: 'আর্কাইভ টিয়ার থেকে হট টিয়ারে ব্লব ফিরিয়ে আনার রিহাইড্রেশন অনুরোধে স্ট্যান্ডার্ড এবং হাই প্রায়োরিটির মধ্যে পার্থক্য কী?'
        },
        options: [
          {
            en: 'Standard priority takes up to 15 hours, while High priority prioritizes the request to complete in under 1 hour for blobs under 10 GB at a higher retrieval fee',
            bn: 'স্ট্যান্ডার্ড প্রায়োরিটিতে ১৫ ঘণ্টা পর্যন্ত সময় লাগে, আর হাই প্রায়োরিটি অতিরিক্ত ফিয়ের বিনিময়ে ১০ জিবির নিচের ব্লবকে ১ ঘণ্টার কমে ফিরিয়ে আনে'
          },
          {
            en: 'High priority physically transports the hard drive in a helicopter',
            bn: 'হাই প্রায়োরিটিতে হেলিকপ্টারে করে হার্ড ড্রাইভ বহন করা হয়'
          },
          {
            en: 'Standard priority deletes the files if the weather is cloudy',
            bn: 'আকাশ মেঘলা থাকলে স্ট্যান্ডার্ড প্রায়োরিটি ফাইল মুছে দেয়'
          },
          {
            en: 'There is no difference; both execute in exactly five seconds',
            bn: 'কোনো পার্থক্য নেই; উভয়ই ঠিক পাঁচ সেকেন্ডে সম্পন্ন হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Standard takes up to 15h; High priority rehydrates under 1h for extra cost.',
          bn: 'স্ট্যান্ডার্ডে ১৫ ঘণ্টা সময় লাগে; অতিরিক্ত খরচে হাই প্রায়োরিটি ১ ঘণ্টার নিচে রিহাইড্রেট করে।'
        },
        explanation: {
          en: 'Azure supports two rehydration priorities: Standard priority (processed in order, up to 15 hours) and High priority (higher retrieval cost, completing in under 1 hour for urgent data restores).',
          bn: 'অ্যাজিউরে ২ টি রিহাইড্রেশন মোড আছে: স্ট্যান্ডার্ড (১৫ ঘণ্টা পর্যন্ত) এবং হাই প্রায়োরিটি (জরুরি ডেটা উদ্ধারে ১ ঘণ্টার মধ্যে সম্পন্ন হয়)।'
        }
      },
      {
        id: 'azure-blob-qz-3',
        kind: 'mcq',
        topic: 'user-delegation-sas-benefit',
        question: {
          en: 'Why is a User Delegation SAS considered more secure than a standard Service SAS created with storage account access keys?',
          bn: 'স্টোরেজ কি দিয়ে তৈরি সার্ভিস এসএএসের চেয়ে ইউজার ডেলিগেশন SAS কেন বেশি নিরাপদ বিবেচিত হয়?'
        },
        options: [
          {
            en: 'It is signed with Microsoft Entra ID credentials rather than the master account key, allowing permissions to be revoked and audited via Azure RBAC',
            bn: 'এটি মূল অ্যাকাউন্ট চাবির বদলে এন্ট্রা আইডি ক্রেডেনশিয়াল দিয়ে স্বাক্ষরিত হয়, ফলে আরবিএসির মাধ্যমে অনুমতি অডিট ও বাতিল করা যায়'
          },
          {
            en: 'It permanently disables database password verification',
            bn: 'এটি স্থায়ীভাবে ডেটাবেজ পাসওয়ার্ড যাচাইকরণ বন্ধ করে দেয়'
          },
          {
            en: 'It prints all passwords on a laser printer every Friday',
            bn: 'প্রতি শুক্রবার লেজার প্রিন্টারে সমস্ত পাসওয়ার্ড প্রিন্ট করে'
          },
          {
            en: 'It only works when users log in from Antarctica',
            bn: 'কেবলমাত্র অ্যান্টার্কটিকা থেকে লগইন করলেই এটি কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'User Delegation SAS is secured by Microsoft Entra ID rather than static account keys.',
          bn: 'ইউজার ডেলিগেশন SAS স্থায়ী কি-এর বদলে এন্ট্রা আইডি দ্বারা নিয়ন্ত্রিত হয়।'
        },
        explanation: {
          en: 'User Delegation SAS tokens use Entra ID identity tokens instead of storage account keys. If the issuing user account is deactivated, all SAS tokens issued by that user become invalid immediately.',
          bn: 'ইউজার ডেলিগেশন SAS এন্ট্রা আইডি পরিচয় ব্যবহার করে। ব্যবহারকারীর অ্যাকাউন্ট বন্ধ হলে তার তৈরি করা সমস্ত SAS টোকেন সাথে সাথে অকেজো হয়ে যায়।'
        }
      },
      {
        id: 'azure-blob-qz-4',
        kind: 'mcq',
        topic: 'worm-immutable-storage',
        question: {
          en: 'How does Azure Blob immutable storage (WORM) protect enterprise data against ransomware and malicious tampering?',
          bn: 'অ্যাজিউর ব্লব অপরিবর্তনীয় স্টোরেজ (WORM) কীভাবে র‍্যানসমওয়্যার ও ক্ষতিকর বিকৃতি থেকে ডেটা রক্ষা করে?'
        },
        options: [
          {
            en: 'It enforces Write Once, Read Many policies where blobs can be created and read but cannot be modified or deleted by anyone, including subscription owners, during retention',
            bn: 'এটি রাইট ওয়ান্স, রিড মেনি নীতি প্রয়োগ করে যাতে ডেটা পড়া গেলেও রিটেনশন মেয়াদের মধ্যে এমনকি সাবস্ক্রিপশন ওনারও তা পরিবর্তন বা মুছে ফেলতে পারেন না'
          },
          {
            en: 'It converts files into audio podcasts played on smart speakers',
            bn: 'ফাইলগুলোকে স্মার্ট স্পিকারে বাজানো অডিও পডকাস্টে রূপান্তর করে'
          },
          {
            en: 'It formats server hard drives whenever an error occurs',
            bn: 'কোনো ত্রুটি দেখা দিলেই সার্ভারের হার্ড ড্রাইভ ফরম্যাট করে ফেলে'
          },
          {
            en: 'It only allows text files containing less than five words',
            bn: 'কেবল পাঁচ শব্দের কম দৈর্ঘ্যের টেক্সট ফাইল সংরক্ষণ করতে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'WORM policies prevent modification and deletion even by root administrators.',
          bn: 'WORM নীতি রিটেনশন মেয়াদে এমনকি মূল অ্যাডমিনকেও কোনো ডেটা মুছতে দেয় না।'
        },
        explanation: {
          en: 'Immutable storage for Azure Blob Storage provides WORM (Write Once, Read Many) capabilities through time-based retention policies and legal holds, meeting strict regulatory compliance (like SEC Rule 17a-4).',
          bn: 'অপরিবর্তনীয় ব্লব স্টোরেজ নির্দিষ্ট সময়ের জন্য ডেটা ডিলিট বা এডিট করা সম্পূর্ণ অসম্ভব করে তোলে, যা র‍্যানসমওয়্যার সংক্রমণ বা অভ্যন্তরীণ ডেটা ধ্বংস প্রতিরোধে সহায়ক।'
        }
      }
    ]
  },
  next: {
    slug: 'functions-and-the-function',
    title: {
      en: 'Azure Functions: Serverless Event Triggers, Bindings, and Plans',
      bn: 'অ্যাজিউর ফাংশন: সার্ভারলেস ইভেন্ট ট্রিগার, বাইন্ডিং এবং প্ল্যান'
    }
  }
};
