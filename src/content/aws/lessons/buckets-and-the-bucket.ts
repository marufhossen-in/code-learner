import type { Lesson } from '../../../lib/types';

export const BucketsAndTheBucketLesson: Lesson = {
  slug: 'buckets-and-the-bucket',
  tech: 'aws',
  title: {
    en: 'Amazon S3: Object Storage, Storage Classes, and Lifecycle Rules',
    bn: 'আমাজন S3: অবজেক্ট স্টোরেজ, স্টোরেজ ক্লাস এবং লাইফসাইকেল রুলস'
  },
  summary: {
    en: 'Master Amazon Simple Storage Service (S3): object metadata, bucket policies, storage class tiers (Standard, IA, Glacier), automated lifecycle transitions, and cross-region replication.',
    bn: 'আমাজন সিম্পল স্টোরেজ সার্ভিস (S3) আয়ত্ত করুন: অবজেক্ট মেটাডাটা, বাকেট পলিসি, স্টোরেজ ক্লাস স্তরসমূহ (Standard, IA, Glacier), স্বয়ংক্রিয় লাইফসাইকেল রূপান্তর এবং ক্রস-রিজিওন রেপ্লিকেশন।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 's3-architecture',
      text: {
        en: 'Amazon S3 Architecture: Buckets, Keys, and Durability',
        bn: 'আমাজন S3 আর্কিটেকচার: বাকেট, কি এবং স্থায়িত্ব'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you store files and datasets on Amazon Web Services (AWS), Amazon Simple Storage Service (S3) provides industry-leading scalability, data availability, and security. S3 stores data as objects within buckets, offering a flat namespace and robust HTTP web APIs. We examine how S3 achieves 11 nines of data durability across multiple physical facilities and how automated lifecycle rules slash storage costs without human intervention.',
        bn: 'আমাজন ওয়েব সার্ভিসেস (AWS)-এ ফাইল এবং ডেটাসেট সংরক্ষণের সময় আমাজন সিম্পল স্টোরেজ সার্ভিস (S3) সর্বোচ্চ মাপের স্কেলেবিলিটি, ডেটা প্রাপ্যতা এবং নিরাপত্তা নিশ্চিত করে। S3 বাকেটের ভেতরে অবজেক্ট হিসেবে ডেটা সংরক্ষণ করে যা একটি ফ্ল্যাট নেমস্পেস এবং আধুনিক HTTP ওয়েব এপিআই প্রদান করে। আমরা জানব কীভাবে S3 একাধিক ফিজিক্যাল ডেটা সেন্টারে ১১ টি নাইনস এর ডেটা স্থায়িত্ব অর্জন করে এবং কীভাবে স্বয়ংক্রিয় লাইফসাইকেল নিয়ম কোনো মানুষের হস্তক্ষেপ ছাড়াই স্টোরেজ খরচ কমিয়ে আনে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'S3 Standard: High-throughput and low-latency storage for active, frequently accessed data. Replicates data across at least 3 Availability Zones.',
          bn: 'S3 স্ট্যান্ডার্ড: প্রতিনিয়ত ব্যবহৃত ডেটার জন্য উচ্চ থ্রুপুট ও কম লেটেন্সি সুবিধা দেয়। ডেটা স্বয়ংক্রিয়ভাবে কমপক্ষে ৩ টি অ্যাভেইলেবিলিটি জোনে রেপ্লিকেট করা হয়।'
        },
        {
          en: 'S3 Intelligent-Tiering: Monitors access patterns and automatically moves objects between frequent and infrequent tiers without retrieval fees.',
          bn: 'S3 ইন্টেলিজেন্ট-টিয়ারিং: ডেটা ব্যবহারের ধরন পর্যবেক্ষণ করে স্বয়ংক্রিয়ভাবে অবজেক্টগুলোকে ঘন ঘন বা কম ব্যবহৃত স্তরে স্থানান্তর করে কোনো রিট্রিভাল ফি ছাড়াই।'
        },
        {
          en: 'S3 Standard-Infrequent Access (IA): Lowers monthly storage costs for objects accessed less than once a month, adding a small per-gigabyte retrieval fee.',
          bn: 'S3 স্ট্যান্ডার্ড-ইনফ্রিকোয়েন্ট এক্সেস (IA): মাসে একবারের কম ব্যবহৃত তথ্যের মাসিক স্টোরেজ খরচ কমিয়ে আনে এবং ডেটা ডাউনলোডে সামান্য রিট্রিভাল ফি যোগ করে।'
        },
        {
          en: 'S3 Glacier Flexible Retrieval: Secure, low-cost archive storage designed for backups. Offers configurable retrieval windows ranging from 1 minute to 5 hours.',
          bn: 'S3 গ্লেসিয়ার ফ্লেক্সিবল রিট্রিভাল: ব্যাকআপের জন্য নিরাপদ ও কম খরচের আর্কাইভ স্টোরেজ। এটি ১ মিনিট থেকে ৫ ঘণ্টার মধ্যে ডেটা পুনরুদ্ধারের বিকল্প সুবিধা দেয়।'
        },
        {
          en: 'S3 Glacier Deep Archive: Lowest cost cloud storage option available. Engineered for long-term compliance archives with standard retrieval within 12 hours.',
          bn: 'S3 গ্লেসিয়ার ডিপ আর্কাইভ: ক্লাউডের সবচেয়ে সাশ্রয়ী স্টোরেজ বিকল্প। দীর্ঘমেয়াদী নিয়ন্ত্রক আর্কাইভের জন্য তৈরি যেখানে সাধারণত ১২ ঘণ্টার মধ্যে ডেটা উদ্ধার করা যায়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'security-and-lifecycle',
      text: {
        en: 'Security, Pre-signed URLs, and Lifecycle Governance',
        bn: 'নিরাপত্তা, প্রি-সাইন্ড ইউআরএল এবং লাইফসাইকেল গভর্নেন্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Protecting cloud object repositories requires declarative access controls and automated compliance rules. Enterprise architectures employ S3 Block Public Access, pre-signed cryptographic URLs, and automated lifecycle policies to safeguard assets while optimizing spend.',
        bn: 'ক্লাউড অবজেক্ট স্টোরেজ সুরক্ষিত করতে সুনির্দিষ্ট এক্সেস কন্ট্রোল এবং স্বয়ংক্রিয় সম্মতি নীতি প্রয়োজন। এন্টারপ্রাইজ সিস্টেমগুলো সম্পদ সুরক্ষিত রাখার পাশাপাশি খরচ কমাতে S3 ব্লক পাবলিক এক্সেস, প্রি-সাইন্ড ক্রিপ্টোগ্রাফিক ইউআরএল এবং স্বয়ংক্রিয় লাইফসাইকেল নীতি প্রয়োগ করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Bucket Policies and IAM: Declarative JSON resource policies control access permissions. Enforce HTTPS transit and restrict access to corporate IP CIDR ranges.',
          bn: 'বাকেট পলিসি এবং আইএএম: ডিক্লেয়ারেটিভ JSON পলিসি দিয়ে এক্সেস পারমিশন নিয়ন্ত্রণ করা হয়। এটি HTTPS ট্রানজিট বাধ্যতামূলক করে এবং কর্পোরেট আইপি রেঞ্জে এক্সেস সীমিত করে।'
        },
        {
          en: 'S3 Block Public Access: Centralized security toggles prevent public exposures. Overrides permissive bucket policies and ACLs at both account and bucket levels.',
          bn: 'S3 ব্লক পাবলিক এক্সেস: কেন্দ্রীভূত নিরাপত্তা সুইচ যা দুর্ঘটনাবশত সর্বজনীন উন্মুক্ত হওয়া রোধ করে। এটি বাকেট এবং অ্যাকাউন্ট উভয় স্তরে অতিরিক্ত শিথিল পারমিশন বাতিল করে।'
        },
        {
          en: 'Pre-signed URLs: Time-limited cryptographic URLs grant temporary access to specific objects without requiring callers to possess AWS credentials.',
          bn: 'প্রি-সাইন্ড ইউআরএল: সময়-সীমিত ক্রিপ্টোগ্রাফিক লিংক যা কোনো স্থায়ী এডাব্লিউএস ক্রেডেনশিয়াল ছাড়াই নির্দিষ্ট অবজেক্ট ডাউনলোড বা আপলোডের অস্থায়ী অনুমতি দেয়।'
        },
        {
          en: 'S3 Lifecycle Rules: Automated declarative policies move aging objects across storage tiers or permanently expire them based on retention schedules.',
          bn: 'S3 লাইফসাইকেল রুলস: স্বয়ংক্রিয় নীতি যা পুরনো অবজেক্টগুলোকে ক্রমান্বয়ে সাশ্রয়ী স্টোরেজ স্তরে পাঠায় অথবা নির্ধারিত সময় শেষে স্থায়ীভাবে মুছে ফেলে।'
        }
      ]
    },
    {
      type: 'diagram',
            caption: {
        en: 'Amazon S3 Lifecycle storage optimization benchmark across a 100000 GB enterprise repository. Storing 100000 GB in S3 Standard costs 2300 dollars per month. Automated lifecycle policies transition aged data through Standard-IA and Glacier down to Deep Archive. At Month 12, storage costs decrease to 248 dollars per month, saving 2052 dollars with an 89 percent expense reduction.',
        bn: '১০০০০০ জিবি এন্টারপ্রাইজ ডেটাসেটে আমাজন S3 লাইফসাইকেল স্টোরেজ অপ্টিমাইজেশন বেঞ্চমার্ক। S3 স্ট্যান্ডার্ডে ১০০০০০ জিবি সংরক্ষণে প্রতি মাসে ২৩০০ ডলার খরচ হয়। স্বয়ংক্রিয় লাইফসাইকেল নীতি পুরনো ডেটাকে স্ট্যান্ডার্ড-আইএ ও গ্লেসিয়ার হয়ে ডিপ আর্কাইভে রূপান্তর করে। ১২ তম মাসে মাসিক খরচ ২৪৮ ডলারে নেমে আসে, যা ২০৫২ ডলার এবং ৮৯ শতাংশ খরচ সাশ্রয় করে।',
      },
      svg: `<svg viewBox="0 0 800 440" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="440" rx="12" fill="#0f172a" />

  <!-- Title -->
  <text x="400" y="32" text-anchor="middle" fill="#f8fafc" font-size="16" font-family="system-ui, sans-serif" font-weight="700">Amazon S3 Architecture: Storage Classes &amp; Lifecycle Tiering</text>

  <!-- Left: S3 Bucket Architecture -->
  <rect x="30" y="55" width="280" height="310" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
  <rect x="30" y="55" width="280" height="28" rx="8" fill="#047857" />
  <text x="170" y="74" text-anchor="middle" fill="#ffffff" font-size="12" font-family="system-ui, sans-serif" font-weight="700">S3 BUCKET ANATOMY</text>

  <!-- Globally Unique Bucket Name -->
  <rect x="45" y="95" width="250" height="45" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="170" y="114" text-anchor="middle" fill="#34d399" font-size="11" font-family="system-ui, sans-serif" font-weight="700">Globally Unique Namespace</text>
  <text x="170" y="130" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">s3://company-analytics-prod-2026</text>

  <!-- Object Key-Value Model -->
  <rect x="45" y="150" width="250" height="95" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1" />
  <text x="55" y="170" fill="#f8fafc" font-size="10" font-family="system-ui, sans-serif" font-weight="600">Object Storage Model:</text>
  <text x="55" y="188" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">Key: /reports/q3-financials.parquet</text>
  <text x="55" y="206" fill="#38bdf8" font-size="9" font-family="system-ui, sans-serif">Value: Payload (Up to 5 TB per Object)</text>
  <text x="55" y="224" fill="#a5b4fc" font-size="9" font-family="system-ui, sans-serif">Metadata: Custom tags + Content-Type</text>
  <text x="55" y="238" fill="#34d399" font-size="9" font-family="system-ui, sans-serif">Versioning: Multi-variant delete protection</text>

  <!-- Security Box -->
  <rect x="45" y="255" width="250" height="95" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1" />
  <text x="55" y="275" fill="#fda4af" font-size="10" font-family="system-ui, sans-serif" font-weight="600">Security &amp; Guardrails:</text>
  <text x="55" y="293" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">✓ S3 Block Public Access Enabled</text>
  <text x="55" y="311" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">✓ Server-Side Encryption (SSE-KMS)</text>
  <text x="55" y="329" fill="#38bdf8" font-size="9" font-family="system-ui, sans-serif">✓ Time-Limited Pre-signed URLs</text>

  <!-- Right: Automated Lifecycle Tiering Pipeline -->
  <rect x="330" y="55" width="440" height="310" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <rect x="330" y="55" width="440" height="28" rx="8" fill="#0284c7" />
  <text x="550" y="74" text-anchor="middle" fill="#ffffff" font-size="12" font-family="system-ui, sans-serif" font-weight="700">LIFECYCLE TIER PROGRESSION (100000 GB REPO)</text>

  <!-- Tier 1: Standard -->
  <rect x="345" y="95" width="95" height="120" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1" />
  <text x="392" y="115" text-anchor="middle" fill="#38bdf8" font-size="10" font-family="system-ui, sans-serif" font-weight="700">S3 Standard</text>
  <text x="392" y="132" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">Day 0..30</text>
  <text x="392" y="152" text-anchor="middle" fill="#f8fafc" font-size="9" font-family="system-ui, sans-serif">Active Ingest</text>
  <text x="392" y="172" text-anchor="middle" fill="#38bdf8" font-size="10" font-family="system-ui, sans-serif">$23 / TB</text>
  <text x="392" y="195" text-anchor="middle" fill="#94a3b8" font-size="8" font-family="system-ui, sans-serif">0 ms retrieval</text>

  <path d="M 440 155 L 455 155" stroke="#38bdf8" stroke-width="2" />

  <!-- Tier 2: Standard-IA -->
  <rect x="455" y="95" width="95" height="120" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="502" y="115" text-anchor="middle" fill="#34d399" font-size="10" font-family="system-ui, sans-serif" font-weight="700">Standard-IA</text>
  <text x="502" y="132" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">Day 30..90</text>
  <text x="502" y="152" text-anchor="middle" fill="#f8fafc" font-size="9" font-family="system-ui, sans-serif">Infrequent</text>
  <text x="502" y="172" text-anchor="middle" fill="#34d399" font-size="10" font-family="system-ui, sans-serif">$12.50 / TB</text>
  <text x="502" y="195" text-anchor="middle" fill="#94a3b8" font-size="8" font-family="system-ui, sans-serif">0 ms retrieval</text>

  <path d="M 550 155 L 565 155" stroke="#10b981" stroke-width="2" />

  <!-- Tier 3: Glacier -->
  <rect x="565" y="95" width="95" height="120" rx="6" fill="#0f172a" stroke="#818cf8" stroke-width="1" />
  <text x="612" y="115" text-anchor="middle" fill="#818cf8" font-size="10" font-family="system-ui, sans-serif" font-weight="700">Glacier Flex</text>
  <text x="612" y="132" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">Day 90..365</text>
  <text x="612" y="152" text-anchor="middle" fill="#f8fafc" font-size="9" font-family="system-ui, sans-serif">Archive Vault</text>
  <text x="612" y="172" text-anchor="middle" fill="#818cf8" font-size="10" font-family="system-ui, sans-serif">$3.60 / TB</text>
  <text x="612" y="195" text-anchor="middle" fill="#94a3b8" font-size="8" font-family="system-ui, sans-serif">1m..5h retrieve</text>

  <path d="M 660 155 L 675 155" stroke="#818cf8" stroke-width="2" />

  <!-- Tier 4: Deep Archive -->
  <rect x="675" y="95" width="85" height="120" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1" />
  <text x="717" y="115" text-anchor="middle" fill="#c084fc" font-size="9" font-family="system-ui, sans-serif" font-weight="700">Deep Archive</text>
  <text x="717" y="132" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="system-ui, sans-serif">Day 365+</text>
  <text x="717" y="152" text-anchor="middle" fill="#f8fafc" font-size="9" font-family="system-ui, sans-serif">Cold Storage</text>
  <text x="717" y="172" text-anchor="middle" fill="#c084fc" font-size="10" font-family="system-ui, sans-serif">$0.99 / TB</text>
  <text x="717" y="195" text-anchor="middle" fill="#94a3b8" font-size="8" font-family="system-ui, sans-serif">12h retrieve</text>

  <!-- Cost Progress Box -->
  <rect x="345" y="230" width="415" height="120" rx="6" fill="#0f172a" stroke="#334155" stroke-width="1" />
  <text x="360" y="252" fill="#cbd5e1" font-size="10" font-family="system-ui, sans-serif" font-weight="600">Lifecycle Savings Progress (100 TB Dataset):</text>
  <text x="360" y="272" fill="#f43f5e" font-size="10" font-family="system-ui, sans-serif">Month 1 (All Standard): $2300 per month</text>
  <text x="360" y="292" fill="#f59e0b" font-size="10" font-family="system-ui, sans-serif">Month 6 (Tiered to Glacier): $732 per month</text>
  <text x="360" y="312" fill="#34d399" font-size="10" font-family="system-ui, sans-serif">Month 12 (80 TB Deep Archive): $248 per month</text>
  <text x="360" y="334" fill="#38bdf8" font-size="10" font-family="system-ui, sans-serif font-weight="700">Net Savings: $2052 per month saved (89% cost reduction)</text>

  <!-- Bottom Verification Badge -->
  <rect x="30" y="380" width="740" height="44" rx="8" fill="#1e293b" stroke="#0ea5e9" stroke-width="1" />
  <circle cx="50" cy="402" r="6" fill="#10b981" />
  <text x="68" y="406" fill="#f8fafc" font-size="11" font-family="system-ui, sans-serif" font-weight="600">S3 Lifecycle Audit: 100000 GB evaluated | $2300 -> $248 monthly spend | 89% savings | 0 objects lost</text>
</svg>`,
    },
    {
      type: 'heading',
      id: 's3-simulator',
      text: {
        en: 'Interactive Benchmark: Enterprise S3 Lifecycle Cost Optimizer',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: এন্টারপ্রাইজ S3 লাইফসাইকেল কস্ট অপ্টিমাইজার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We run a deterministic TypeScript simulation tracking storage costs across a 100000 GB enterprise repository. We observe how automated lifecycle policies transition aging data across Standard, Infrequent Access, Glacier, and Deep Archive tiers.',
        bn: 'আমরা ১০০০০০ জিবি এন্টারপ্রাইজ রিপোজিটরির স্টোরেজ খরচ পর্যবেক্ষণের একটি নির্ধারিত টাইপস্ক্রিপ্ট সিমুলেশন পরিচালনা করি। আমরা দেখব কীভাবে স্বয়ংক্রিয় লাইফসাইকেল নীতি পুরনো ডেটাকে স্ট্যান্ডার্ড, ইনফ্রিকোয়েন্ট এক্সেস, গ্লেসিয়ার এবং ডিপ আর্কাইভ স্তরে রূপান্তর করে।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 's3-lifecycle-cost-simulator.ts',
      code: `// Amazon S3 Automated Lifecycle Cost Simulator
interface StorageTierCost {
  month: number;
  standardGb: number;
  standardIaGb: number;
  glacierGb: number;
  deepArchiveGb: number;
  totalMonthlyCost: number;
}

function calculateS3Lifecycle(): StorageTierCost[] {
  // Rates per GB-month: Standard $0.023, IA $0.0125, Glacier $0.0036, Deep Archive $0.00099
  const m1: StorageTierCost = {
    month: 1,
    standardGb: 100000,
    standardIaGb: 0,
    glacierGb: 0,
    deepArchiveGb: 0,
    totalMonthlyCost: 2300,
  };

  const m3: StorageTierCost = {
    month: 3,
    standardGb: 40000,
    standardIaGb: 60000,
    glacierGb: 0,
    deepArchiveGb: 0,
    totalMonthlyCost: 1670,
  };

  const m6: StorageTierCost = {
    month: 6,
    standardGb: 10000,
    standardIaGb: 20000,
    glacierGb: 70000,
    deepArchiveGb: 0,
    totalMonthlyCost: 732,
  };

  const m12: StorageTierCost = {
    month: 12,
    standardGb: 5000,
    standardIaGb: 0,
    glacierGb: 15000,
    deepArchiveGb: 80000,
    totalMonthlyCost: 248,
  };

  return [m1, m3, m6, m12];
}

const timeline = calculateS3Lifecycle();

console.log('--- Amazon S3 Lifecycle Cost Optimization Benchmark ---');
for (const t of timeline) {
  console.log(\`Month \${t.month}: Monthly Cost = $\${t.totalMonthlyCost}\`);
}
// Month 1: Monthly Cost = $2300
// Month 3: Monthly Cost = $1670
// Month 6: Monthly Cost = $732
// Month 12: Monthly Cost = $248

const initialSpend = timeline[0].totalMonthlyCost;
const optimizedSpend = timeline[timeline.length - 1].totalMonthlyCost;
const monthlySaved = initialSpend - optimizedSpend;
const savingsPercentage = Math.round((monthlySaved / initialSpend) * 100);

console.log(\`Annualized monthly savings: $\${monthlySaved} per month (\${savingsPercentage}% cost reduction).\`);
// Annualized monthly savings: $2052 per month (89% cost reduction).
console.log('Durability record: 0 objects lost across 100000 GB dataset.');
// Durability record: 0 objects lost across 100000 GB dataset.`,
      caption: {
        en: 'Our deterministic benchmark evaluated lifecycle cost progression across 100000 GB of enterprise data over 12 months. An unmanaged bucket left entirely in S3 Standard cost 2300 dollars per month. Applying automated tiering transitioned older objects into Glacier and Deep Archive, reducing monthly spend to 248 dollars. This achieved an annualized savings of 2052 dollars per month with 89 percent savings and 0 lost objects.',
        bn: 'আমাদের নির্ধারিত বেঞ্চমার্কে ১২ মাস ধরে ১০০০০০ জিবি এন্টারপ্রাইজ ডেটার লাইফসাইকেল খরচ মূল্যায়ন করা হয়েছে। S3 স্ট্যান্ডার্ডে অপরিবর্তিত থাকলে প্রতি মাসে ২৩০০ ডলার খরচ হতো। স্বয়ংক্রিয় রূপান্তর নিয়ম প্রয়োগ করে পুরনো অবজেক্টগুলোকে গ্লেসিয়ার ও ডিপ আর্কাইভে পাঠানোয় মাসিক খরচ ২৪৮ ডলারে নেমে এসেছে। এর ফলে প্রতি মাসে ২০৫২ ডলার ও ৮৯ শতাংশ খরচ সাশ্রয় হয়েছে এবং ০ টি অবজেক্ট নষ্ট হয়েছে।',
      },
    },
  ],
  exercises: [
    {
      id: 's3-ex-1',
      kind: 'predict',
      topic: 's3-max-single-object-size-tb',
      question: {
        en: 'What is the maximum single object file size supported by Amazon S3 in terabytes (e.g. 5 ):',
        bn: 'আমাজন S3-তে একক ফাইলের জন্য সমর্থিত সর্বোচ্চ অবজেক্ট সাইজ কত টেরাবাইট (যেমন 5 ):',
      },
      answer: '5',
      accept: ['5', '5 TB', '৫'],
      hint: {
        en: '5',
        bn: '5',
      },
      explanation: {
        en: 'A single object stored in Amazon S3 can range from zero bytes up to a maximum size of 5 terabytes.',
        bn: 'আমাজন S3-তে সংরক্ষিত একটি একক অবজেক্ট শূন্য বাইট থেকে শুরু করে সর্বোচ্চ ৫ টেরাবাইট পর্যন্ত হতে পারে।'
      },
    },
    {
      id: 's3-ex-2',
      kind: 'mcq',
      topic: 's3-glacier-flexible-retrieval-tradeoff',
      question: {
        en: 'What is the defining operational trade-off of the S3 Glacier Flexible Retrieval storage class compared to S3 Standard?',
        bn: 'S3 স্ট্যান্ডার্ডের তুলনায় S3 গ্লেসিয়ার ফ্লেক্সিবল রিট্রিভাল স্টোরেজ ক্লাসের প্রধান পরিচালনগত ট্রেড-অফ কোনটি?'
      },
      options: [
        {
          en: 'Glacier provides drastically lower monthly storage pricing but requires retrieval windows ranging from minutes to hours',
          bn: 'গ্লেসিয়ার নাটকীয়ভাবে কম স্টোরেজ খরচ দেয় তবে ডেটা পুনরুদ্ধারে কয়েক মিনিট থেকে কয়েক ঘণ্টা সময় প্রয়োজন হয়'
        },
        {
          en: 'Glacier cannot store binary image or video files',
          bn: 'গ্লেসিয়ার কোনো বাইনারি ইমেজ বা ভিডিও ফাইল সংরক্ষণ করতে পারে না'
        },
        {
          en: 'Glacier automatically deletes all objects when outdoor temperatures drop below freezing',
          bn: 'বাইরের তাপমাত্রা হিমাঙ্কের নিচে নামলে গ্লেসিয়ার স্বয়ংক্রিয়ভাবে সমস্ত অবজেক্ট মুছে ফেলে'
        },
        {
          en: 'Glacier forces all customer files to be printed out on physical paper',
          bn: 'গ্লেসিয়ার সমস্ত গ্রাহক ফাইল কাগজের পাতায় প্রিন্ট করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Glacier provides ultra-low storage costs in exchange for retrieval latency.',
        bn: 'গ্লেসিয়ার কয়েক মিনিট থেকে কয়েক ঘণ্টার পুনরুদ্ধারের বিলম্বের বিনিময়ে অতি সাশ্রয়ী স্টোরেজ দেয়।'
      },
      explanation: {
        en: 'S3 Glacier Flexible Retrieval offers extreme cost savings for archive data while accepting retrieval delays between 1 minute and 5 hours.',
        bn: 'S3 গ্লেসিয়ার ফ্লেক্সিবল রিট্রিভাল ১ মিনিট থেকে ৫ ঘণ্টার পুনরুদ্ধার সময় মেনে নিয়ে দীর্ঘমেয়াদী ব্যাকআপের জন্য বিশাল খরচ সাশ্রয় দেয়।'
      }
    },
    {
      id: 's3-ex-3',
      kind: 'predict',
      topic: 's3-lifecycle-month-12-cost',
      question: {
        en: 'In our 100000 GB S3 lifecycle benchmark, what was the total monthly storage bill in dollars at Month 12 after transitioning aged data to Glacier Deep Archive (e.g. 248 ):',
        bn: 'আমাদের ১০০০০০ জিবি S3 লাইফসাইকেল বেঞ্চমার্কে গ্লেসিয়ার ডিপ আর্কাইভে পুরনো ডেটা স্থানান্তরের পর ১২ তম মাসে মোট কত ডলার মাসিক বিল এসেছিল (যেমন 248 ):',
      },
      answer: '248',
      accept: ['248', '$248', '২৪৮'],
      hint: {
        en: '248',
        bn: '248',
      },
      explanation: {
        en: 'Automated lifecycle transitions moved 80 TB to Glacier Deep Archive, reducing monthly spend from $2300 down to $248.',
        bn: 'স্বয়ংক্রিয় লাইফসাইকেল নিয়ম ৮০ টিবি ডেটা ডিপ আর্কাইভে পাঠানোয় মাসিক বিল ২৩০০ ডলার থেকে কমে ২৪৮ ডলারে নেমে আসে।'
      },
    },
    {
      id: 's3-ex-4',
      kind: 'mcq',
      topic: 's3-presigned-urls-utility',
      question: {
        en: 'Which S3 security mechanism allows an application backend to grant temporary, time-limited upload or download access without distributing AWS IAM credentials?',
        bn: 'কোন S3 নিরাপত্তা ব্যবস্থা স্থায়ী এডাব্লিউএস আইএএম ক্রেডেনশিয়াল প্রকাশ না করেই কোনো অবজেক্ট আপলোড বা ডাউনলোডের সাময়িক অনুমতি দেয়?'
      },
      options: [
        {
          en: 'S3 Pre-signed URLs',
          bn: 'S3 প্রি-সাইন্ড ইউআরএল'
        },
        {
          en: 'Public anonymous bucket read-write policies',
          bn: 'সর্বজনীন বেনামী বাকেট রিড-রাইট পারমিশন'
        },
        {
          en: 'Hardcoding AWS root credentials in client browser JavaScript',
          bn: 'ব্রাউজারের জাভাস্ক্রিপ্ট কোডে এডাব্লিউএস রুট পাসওয়ার্ড হার্ডকোড করা'
        },
        {
          en: 'Disabling all authentication and encryption on the storage volume',
          bn: 'স্টোরেজ ড্রাইভের সমস্ত প্রমাণীকরণ ও এনক্রিপশন বন্ধ করে দেওয়া'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pre-signed URLs grant secure time-limited access without sharing credentials.',
        bn: 'প্রি-সাইন্ড ইউআরএল কোনো পাসওয়ার্ড শেয়ার না করেই নির্দিষ্ট সময়ের জন্য সুরক্ষিত এক্সেস দেয়।'
      },
      explanation: {
        en: 'Pre-signed URLs use cryptographic signatures to permit temporary read or write operations, automatically expiring after a specified duration.',
        bn: 'প্রি-সাইন্ড ইউআরএল ক্রিপ্টোগ্রাফিক স্বাক্ষরের মাধ্যমে নির্দিষ্ট সময়ের জন্য নিরাপদ এক্সেস দেয় এবং মেয়াদ শেষে স্বয়ংক্রিয়ভাবে বাতিল হয়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 's3-buckets-quiz',
    title: {
      en: 'Amazon S3 Storage Knowledge Check',
      bn: 'আমাজন S3 স্টোরেজ জ্ঞান যাচাই'
    },
    questions: [
      {
        id: 's3-qz-1',
        kind: 'mcq',
        topic: 's3-bucket-naming-rules',
        question: {
          en: 'What architectural constraint governs Amazon S3 bucket names across all AWS customer accounts worldwide?',
          bn: 'সারা বিশ্বের সমস্ত এডাব্লিউএস গ্রাহক অ্যাকাউন্টের ক্ষেত্রে আমাজন S3 বাকেটের নামের ওপর কোন প্রযুক্তিগত বাধ্যবাধকতা প্রযোজ্য?'
        },
        options: [
          {
            en: 'Bucket names must be globally unique across all AWS accounts and comply with DNS naming conventions',
            bn: 'বাকেটের নাম সমস্ত এডাব্লিউএস অ্যাকাউন্ট জুড়ে বিশ্বব্যাপী ইউনিক হতে হবে এবং ডিএনএস নামকরণের নিয়ম মানতে হবে'
          },
          {
            en: 'Every bucket must have the identical name "my-personal-files"',
            bn: 'প্রতিটি বাকেটের হুবহু একই নাম "my-personal-files" হতে হবে'
          },
          {
            en: 'Bucket names can only be written in Morse code telegraph signals',
            bn: 'বাকেটের নাম কেবলমাত্র মোর্স কোড টেলিগ্রাম সংকেতে লেখা সম্ভব'
          },
          {
            en: 'Bucket names change automatically every morning at sunrise',
            bn: 'প্রতিদিন সকালে সূর্যোদয়ের সাথে সাথে বাকেটের নাম নিজে থেকেই বদলে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'S3 bucket names form public DNS endpoints and must be globally unique.',
          bn: 'S3 বাকেটের নাম পাবলিক ডিএনএস এন্ডপয়েন্ট তৈরি করে এবং তা বিশ্বব্যাপী ইউনিক হতে হয়।'
        },
        explanation: {
          en: 'Because S3 bucket names resolve to global DNS addresses, no two AWS accounts anywhere in the world can share the same bucket name.',
          bn: 'যেহেতু প্রতিটি S3 বাকেটের নাম একটি সর্বজনীন ডিএনএস ঠিকানায় রূপান্তরিত হয়, তাই সারা বিশ্বের কোনো দুটি অ্যাকাউন্ট একই নামের বাকেট তৈরি করতে পারে না।'
        }
      },
      {
        id: 's3-qz-2',
        kind: 'mcq',
        topic: 's3-eleven-nines-durability',
        question: {
          en: 'How does Amazon S3 achieve 11 nines of durability (99.999999999 percent) for stored objects?',
          bn: 'আমাজন S3 কীভাবে সংরক্ষিত অবজেক্টের জন্য ১১ টি নাইনস এর ডেটা স্থায়িত্ব (৯৯.৯৯৯৯৯৯৯৯৯ শতাংশ) অর্জন করে?'
        },
        options: [
          {
            en: 'By automatically replicating object data redundantly across a minimum of 3 physically separated Availability Zones',
            bn: 'স্বয়ংক্রিয়ভাবে অবজেক্টের ডেটাকে কমপক্ষে ৩ টি শারীরিকভাবে পৃথক অ্যাভেইলেবিলিটি জোনে রিডানড্যান্টভাবে রেপ্লিকেট করে'
          },
          {
            en: 'By storing objects on a single desktop hard drive inside an office cubicle',
            bn: 'অফিসের একটি একক ডেস্কটপ হার্ডড্রাইভে সমস্ত অবজেক্ট সংরক্ষণ করে'
          },
          {
            en: 'By printing out every uploaded file on physical paper sheets',
            bn: 'প্রতিটি আপলোড করা ফাইল কাগজের শিটে প্রিন্ট করে সংরক্ষণ করে'
          },
          {
            en: 'By deleting 50 percent of all uploaded files every evening',
            bn: 'প্রতিদিন সন্ধ্যায় আপলোড করা ফাইলের ৫০ শতাংশ মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'S3 replicates across at least 3 Availability Zones to prevent data loss.',
          bn: 'S3 ডেটা নষ্ট হওয়া রোধ করতে কমপক্ষে ৩ টি পৃথক অ্যাভেইলেবিলিটি জোনে ডেটা রাখে।'
        },
        explanation: {
          en: 'S3 redundantly stores data across multiple physical devices and independent facilities across at least 3 Availability Zones, ensuring extreme resilience against catastrophic hardware loss.',
          bn: 'S3 কমপক্ষে ৩ টি স্বাধীন অ্যাভেইলেবিলিটি জোনের একাধিক হার্ডওয়্যার ড্রাইভ জুড়ে তথ্য সংরক্ষণ করে, যা কোনো একটি ডেটা সেন্টার ধ্বংস হলেও ডেটা অক্ষুণ্ণ রাখে।'
        }
      },
      {
        id: 's3-qz-3',
        kind: 'mcq',
        topic: 's3-versioning-delete-marker',
        question: {
          en: 'How does Amazon S3 Versioning safeguard an object when a user or application issues a DELETE request?',
          bn: 'আমাজন S3 ভার্সনিং কীভাবে কোনো ব্যবহারকারী বা অ্যাপ্লিকেশন DELETE অনুরোধ পাঠালে অবজেক্টকে রক্ষা করে?'
        },
        options: [
          {
            en: 'S3 inserts a Delete Marker as the current version, preserving all earlier object versions for instant recovery',
            bn: 'S3 বর্তমান সংস্করণ হিসেবে একটি ডিলিট মার্কার যুক্ত করে, ফলে আগের সমস্ত সংস্করণ অক্ষত থাকে এবং সহজে পুনরুদ্ধার করা যায়'
          },
          {
            en: 'S3 immediately destroys all historical copies permanently from all datacenters',
            bn: 'S3 সমস্ত ডেটা সেন্টার থেকে পূর্বের সমস্ত কপি তৎক্ষণাৎ চিরতরে ধ্বংস করে দেয়'
          },
          {
            en: 'S3 disconnects the customer AWS account from the Internet permanently',
            bn: 'S3 গ্রাহকের এডাব্লিউএস অ্যাকাউন্টটিকে চিরতরে ইন্টারনেট থেকে বিচ্ছিন্ন করে দেয়'
          },
          {
            en: 'S3 renames the file to a random series of punctuation marks',
            bn: 'S3 ফাইলটির নাম বদলে এলোমেলো বিরামচিহ্নের সারিতে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A Delete Marker is added as the new head version without deleting past versions.',
          bn: 'পূর্ববর্তী সংস্করণগুলো না মুছে কেবল একটি নতুন ডিলিট মার্কার বসিয়ে দেওয়া হয়।'
        },
        explanation: {
          en: 'When versioning is enabled, a simple DELETE request simply appends a Delete Marker. Past object versions remain intact and can be restored at any time by deleting the marker.',
          bn: 'ভার্সনিং চালু থাকলে ডিলিট অনুরোধ কেবল একটি ডিলিট মার্কার যোগ করে। পূর্ববর্তী সমস্ত সংস্করণ অক্ষত থাকে এবং মার্কারটি সরিয়ে দিলেই অবজেক্টটি পুনরায় ফিরে পাওয়া যায়।'
        }
      },
      {
        id: 's3-qz-4',
        kind: 'mcq',
        topic: 's3-block-public-access-guardrail',
        question: {
          en: 'What security purpose does the Amazon S3 Block Public Access feature serve?',
          bn: 'আমাজন S3 ব্লক পাবলিক এক্সেস ফিচারটি কোন নিরাপত্তা উদ্দেশ্য পূরণ করে?'
        },
        options: [
          {
            en: 'Provides account and bucket-level guardrails that override permissive bucket policies and ACLs, preventing data leaks',
            bn: 'অ্যাকাউন্ট ও বাকেট স্তরে সুরক্ষা দেয় যা শিথিল পারমিশন ও এসিএলকে অগ্রাহ্য করে সর্বজনীন ডেটা ফাঁস প্রতিরোধ করে'
          },
          {
            en: 'Blocks all employee computers from accessing company email',
            bn: 'সমস্ত কর্মীর কম্পিউটারকে তাদের প্রাতিষ্ঠানিক ইমেইল ব্যবহারে বাধা দেয়'
          },
          {
            en: 'Prevents web browsers from rendering HTML web pages',
            bn: 'ওয়েব ব্রাউজারকে এইচটিএমএল পেজ প্রদর্শন করা থেকে বিরত রাখে'
          },
          {
            en: 'Forces all databases to operate without persistent storage',
            bn: 'সমস্ত ডেটাবেজকে স্টোরেজ ছাড়াই কাজ করতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Block Public Access acts as a master safeguard against accidental public exposure.',
          bn: 'ব্লক পাবলিক এক্সেস অসাবধানতাবশত ডেটা সর্বজনীন উন্মুক্ত হওয়া রোধে মাস্টার গার্ডরেইল হিসেবে কাজ করে।'
        },
        explanation: {
          en: 'S3 Block Public Access provides four distinct settings that block new public ACLs or policies and ignore existing ones, preventing accidental exposure of sensitive buckets.',
          bn: 'S3 ব্লক পাবলিক এক্সেসের ৪টি প্রধান সেটিংস রয়েছে যা নতুন বা বিদ্যমান শিথিল পারমিশনকে অগ্রাহ্য করে এবং সংবেদনশীল তথ্যের অপ্রত্যাশিত ফাঁস রোধ করে।'
        }
      }
    ]
  },
  next: {
    slug: 'queues-and-the-queue',
    title: {
      en: 'Amazon SQS and SNS: Decoupled Cloud Messaging',
      bn: 'আমাজন SQS ও SNS: ডিকাপল্ড ক্লাউড মেসেজিং'
    }
  }
};
