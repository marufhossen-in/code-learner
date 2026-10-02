import type { Lesson } from '../../../lib/types';

export const BucketsAndTheBucketLesson: Lesson = {
  slug: 'buckets-and-the-bucket',
  tech: 'gcp',
  title: {
    en: 'Google Cloud Storage: Buckets, Classes, and Lifecycles',
    bn: 'গুগল ক্লাউড স্টোরেজ: বাকেট, ক্লাস এবং লাইফসাইকেল'
  },
  summary: {
    en: 'Master Google Cloud Storage (GCS): globally unique buckets, storage classes (Standard, Nearline, Coldline, Archive), Uniform Bucket-Level Access, Signed URLs, Object Versioning, and automated Lifecycle Management rules.',
    bn: 'গুগল ক্লাউড স্টোরেজ (GCS) আয়ত্ত করুন: বিশ্বব্যাপী অনন্য বাকেট, স্টোরেজ ক্লাস (স্ট্যান্ডার্ড, নিয়ারলাইন, কোল্ডলাইন, আর্কাইভ), ইউনিফর্ম বাকেট-লেভেল অ্যাক্সেস, সাইনড ইউআরএল, অবজেক্ট ভার্সনিং এবং স্বয়ংক্রিয় লাইফসাইকেল নীতি।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'gcs-fundamentals-and-classes',
      text: {
        en: 'Cloud Storage Architecture: Buckets and Storage Classes',
        bn: 'ক্লাউড স্টোরেজ আর্কিটেকচার: বাকেট এবং স্টোরেজ ক্লাস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Storing and distributing unstructured media, database backups, and analytics datasets requires scalable cloud object storage. Google Cloud Storage offers an exabyte-scale repository where data is organized into globally unique containers known as buckets. In this lesson, we study how to select between multi-regional and regional locations, how storage classes optimize data longevity, and how lifecycle management rules automate transitions without manual intervention.',
        bn: 'মিডিয়া ফাইল, ডেটাবেজ ব্যাকআপ এবং অ্যানালিটিক্স ডেটাসেট সংরক্ষণ করতে স্কেলেবল ক্লাউড অবজেক্ট স্টোরেজ অপরিহার্য। গুগল ক্লাউড স্টোরেজ একটি বিশাল পরিসরের পরিকাঠামো প্রদান করে যেখানে ডেটা বাকেট নামের বিশ্বব্যাপী অনন্য পাত্রে সংরক্ষিত থাকে। এই পাঠে আমরা শিখব কীভাবে মাল্টি-রিজিয়নাল এবং রিজিয়নাল লোকেশন নির্বাচন করতে হয়, কীভাবে বিভিন্ন স্টোরেজ ক্লাস খরচ কমায় এবং কীভাবে লাইফসাইকেল নীতি মানুষের হস্তক্ষেপ ছাড়াই স্বয়ংক্রিয়ভাবে ফাইল স্থানান্তর করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Standard Storage: Optimized for active workloads with low latency access and zero retrieval charges for frequently fetched assets.',
          bn: 'স্ট্যান্ডার্ড স্টোরেজ: সক্রিয় কাজের জন্য সেরা যেখানে সর্বনিম্ন লেটেন্সিতে ডেটা পড়া যায় এবং ঘন ঘন ডেটা রিড করার কোনো ফি নেই।'
        },
        {
          en: 'Nearline Storage: Designed for data accessed less than once a month, requiring a minimum retention period of 30 days.',
          bn: 'নিয়ারলাইন স্টোরেজ: মাসে একবারের কম প্রয়োজনীয় ডেটার জন্য তৈরি, যেখানে ন্যূনতম ৩০ দিনের স্টোরেজ সময়কাল বাধ্যতামূলক।'
        },
        {
          en: 'Coldline Storage: Cost-effective tier for disaster recovery and quarterly archives, requiring a minimum retention period of 90 days.',
          bn: 'কোল্ডলাইন স্টোরেজ: ত্রৈমাসিক ব্যাকআপ ও দুর্যোগ মোকাবিলার সাশ্রয়ী টিয়ার, যার ন্যূনতম স্টোরেজ সময়কাল ৯০ দিন।'
        },
        {
          en: 'Archive Storage: Coldest storage class providing ultra-cheap long-term preservation, carrying a minimum retention period of 365 days.',
          bn: 'আর্কাইভ স্টোরেজ: দীর্ঘমেয়াদী সংরক্ষণের জন্য সবচেয়ে সস্তা স্টোরেজ ক্লাস, যার ন্যূনতম ধারণকাল ৩৬৫ দিন।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'access-control-and-lifecycle-automation',
      text: {
        en: 'Access Governance and Lifecycle Automation',
        bn: 'প্রবেশাধিকার নিয়ন্ত্রণ এবং লাইফসাইকেল অটোমেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Securing cloud objects requires choosing modern authorization models and automating data hygiene. Uniform Bucket-Level Access unifies permissions under Cloud IAM, while lifecycle rules transition objects smoothly as they age.',
        bn: 'ক্লাউড অবজেক্টের নিরাপত্তা নিশ্চিত করতে আধুনিক অথরাইজেশন মডেল ও স্বয়ংক্রিয় ডেটা ব্যবস্থাপনা জরুরি। ইউনিফর্ম বাকেট-লেভেল অ্যাক্সেস ক্লাউড আইএএম-এর অধীনে সকল অনুমতি একত্রিত করে এবং লাইফসাইকেল নীতি ফাইল পুরনো হওয়ার সাথে সাথে তা সাশ্রয়ী টিয়ারে স্থানান্তর করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Uniform Bucket Access: Cloud IAM policy setting that disables legacy per-object access control lists across the entire storage bucket.',
          bn: 'ইউনিফর্ম বাকেট অ্যাক্সেস: ক্লাউড আইএএম পলিসি যা পুরো বাকেটের পুরনো অবজেক্ট এসিএল বাতিল করে একক নিরাপত্তা দেয়।'
        },
        {
          en: 'Signed URLs: Cryptographic time-limited URLs that grant temporary read or write permissions without requiring Google credentials.',
          bn: 'সাইনড ইউআরএল: ক্রিপ্টোগ্রাফিক সময়-সীমাবদ্ধ লিংক যা গুগল অ্যাকাউন্টের পরিচয়পত্র ছাড়াই সাময়িক রিড বা রাইটের সুযোগ দেয়।'
        },
        {
          en: 'Lifecycle Management: Declarative JSON policies that automatically transition objects to colder storage tiers or delete aged data.',
          bn: 'লাইফসাইকেল ম্যানেজমেন্ট: ঘোষণামূলক নিয়ম যা পুরনো ফাইলগুলোকে স্বয়ংক্রিয়ভাবে সাশ্রয়ী স্টোরেজ ক্লাসে পাঠায় বা ডিলিট করে দেয়।'
        },
        {
          en: 'Object Versioning: Data protection mechanism maintaining historical object revisions upon overwrites, safeguarding against accidental deletions.',
          bn: 'অবজেক্ট ভার্সনিং: নিরাপত্তা ব্যবস্থা যা অবজেক্ট পরিবর্তনের সাথে সাথে পুরনো ভার্সন সংরক্ষণ করে ভুলবশত মুছে যাওয়া রোধ করে।'
        }
      ]
    },
    {
      type: 'diagram',
      caption: {
        en: 'Google Cloud Storage lifecycle cost benchmark across 100000 GB of enterprise data. Storing all objects in Standard costs 2000 dollars monthly. Automated lifecycle rules transition aged objects into Nearline, Coldline, and Archive, reducing monthly spend to 568 dollars and saving 1432 dollars monthly (72 percent reduction).',
        bn: '১০০০০০ জিবি এন্টারপ্রাইজ ডেটার ওপর গুগল ক্লাউড স্টোরেজ লাইফসাইকেল খরচ বেঞ্চমার্ক। স্ট্যান্ডার্ড ক্লাসে সমস্ত ডেটা রাখলে প্রতি মাসে ২০০০ ডলার খরচ হয়। স্বয়ংক্রিয় লাইফসাইকেল নীতি পুরনো ফাইলগুলোকে নিয়ারলাইন, কোল্ডলাইন ও আর্কাইভে স্থানান্তর করে খরচ ৫৬৮ ডলারে নামিয়ে আনে এবং প্রতি মাসে ১৪৩২ ডলার সাশ্রয় করে (৭২ শতাংশ সাশ্রয়)।',
      },
      svg: `<svg viewBox="0 0 800 440" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="800" height="440" rx="12" fill="#0f172a" />

  <!-- Title -->
  <text x="400" y="30" text-anchor="middle" fill="#f8fafc" font-size="16" font-family="system-ui, sans-serif" font-weight="700">Google Cloud Storage: Storage Classes &amp; Lifecycle Automation</text>

  <!-- Left: Client Operations -->
  <rect x="25" y="60" width="180" height="180" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
  <text x="115" y="85" text-anchor="middle" fill="#38bdf8" font-size="12" font-family="system-ui, sans-serif" font-weight="700">Client Ingestion</text>

  <rect x="40" y="100" width="150" height="28" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1" />
  <text x="115" y="118" text-anchor="middle" fill="#cbd5e1" font-size="10" font-family="system-ui, sans-serif">gcloud / gsutil CLI</text>

  <rect x="40" y="136" width="150" height="28" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1" />
  <text x="115" y="154" text-anchor="middle" fill="#cbd5e1" font-size="10" font-family="system-ui, sans-serif">Signed URL Uploads</text>

  <rect x="40" y="172" width="150" height="28" rx="4" fill="#0f172a" stroke="#334155" stroke-width="1" />
  <text x="115" y="190" text-anchor="middle" fill="#cbd5e1" font-size="10" font-family="system-ui, sans-serif">JSON REST API v1</text>

  <rect x="40" y="208" width="150" height="24" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="115" y="224" text-anchor="middle" fill="#34d399" font-size="9" font-family="system-ui, sans-serif">UBLA: IAM Security Only</text>

  <!-- Arrow to Classes -->
  <path d="M 205 150 L 235 150" stroke="#38bdf8" stroke-width="2" />

  <!-- Center: 4 GCS Storage Classes -->
  <rect x="235" y="60" width="540" height="180" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
  <text x="505" y="85" text-anchor="middle" fill="#fbbf24" font-size="12" font-family="system-ui, sans-serif" font-weight="700">4 GCS Storage Classes (Automated Lifecycle Progression)</text>

  <!-- Class 1: Standard -->
  <rect x="250" y="100" width="120" height="125" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1" />
  <text x="310" y="122" text-anchor="middle" fill="#38bdf8" font-size="11" font-family="system-ui, sans-serif" font-weight="700">Standard</text>
  <text x="310" y="142" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">10000 GB Active</text>
  <text x="310" y="160" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="system-ui, sans-serif">$0.020 / GB</text>
  <text x="310" y="180" text-anchor="middle" fill="#94a3b8" font-size="8" font-family="system-ui, sans-serif">0d Min Retention</text>
  <text x="310" y="205" text-anchor="middle" fill="#34d399" font-size="10" font-family="system-ui, sans-serif" font-weight="700">$200 / mo</text>

  <!-- Arrow to Nearline -->
  <path d="M 370 160 L 382 160" stroke="#f59e0b" stroke-width="2" />

  <!-- Class 2: Nearline -->
  <rect x="382" y="100" width="120" height="125" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="442" y="122" text-anchor="middle" fill="#34d399" font-size="11" font-family="system-ui, sans-serif" font-weight="700">Nearline</text>
  <text x="442" y="142" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">20000 GB (30d+)</text>
  <text x="442" y="160" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="system-ui, sans-serif">$0.010 / GB</text>
  <text x="442" y="180" text-anchor="middle" fill="#94a3b8" font-size="8" font-family="system-ui, sans-serif">30d Min Retention</text>
  <text x="442" y="205" text-anchor="middle" fill="#34d399" font-size="10" font-family="system-ui, sans-serif" font-weight="700">$200 / mo</text>

  <!-- Arrow to Coldline -->
  <path d="M 502 160 L 514 160" stroke="#f59e0b" stroke-width="2" />

  <!-- Class 3: Coldline -->
  <rect x="514" y="100" width="120" height="125" rx="6" fill="#0f172a" stroke="#6366f1" stroke-width="1" />
  <text x="574" y="122" text-anchor="middle" fill="#818cf8" font-size="11" font-family="system-ui, sans-serif" font-weight="700">Coldline</text>
  <text x="574" y="142" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">30000 GB (90d+)</text>
  <text x="574" y="160" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="system-ui, sans-serif">$0.004 / GB</text>
  <text x="574" y="180" text-anchor="middle" fill="#94a3b8" font-size="8" font-family="system-ui, sans-serif">90d Min Retention</text>
  <text x="574" y="205" text-anchor="middle" fill="#34d399" font-size="10" font-family="system-ui, sans-serif" font-weight="700">$120 / mo</text>

  <!-- Arrow to Archive -->
  <path d="M 634 160 L 644 160" stroke="#f59e0b" stroke-width="2" />

  <!-- Class 4: Archive -->
  <rect x="644" y="100" width="118" height="125" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1" />
  <text x="703" y="122" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="system-ui, sans-serif" font-weight="700">Archive</text>
  <text x="703" y="142" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">40000 GB (365d+)</text>
  <text x="703" y="160" text-anchor="middle" fill="#f8fafc" font-size="10" font-family="system-ui, sans-serif">$0.0012 / GB</text>
  <text x="703" y="180" text-anchor="middle" fill="#94a3b8" font-size="8" font-family="system-ui, sans-serif">365d Min Retention</text>
  <text x="703" y="205" text-anchor="middle" fill="#34d399" font-size="10" font-family="system-ui, sans-serif" font-weight="700">$48 / mo</text>

  <!-- Bottom Details Bar: Cost Comparison -->
  <rect x="25" y="260" width="750" height="105" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
  <text x="400" y="285" text-anchor="middle" fill="#34d399" font-size="12" font-family="system-ui, sans-serif" font-weight="700">Storage Optimization: Baseline vs Lifecycle Automated Savings</text>

  <rect x="45" y="298" width="220" height="55" rx="6" fill="#0f172a" stroke="#f43f5e" stroke-width="1" />
  <text x="155" y="318" text-anchor="middle" fill="#fca5a5" font-size="11" font-family="system-ui, sans-serif" font-weight="600">Standard Baseline</text>
  <text x="155" y="335" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">100000 GB · $2000 / month</text>

  <rect x="290" y="298" width="220" height="55" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1" />
  <text x="400" y="318" text-anchor="middle" fill="#34d399" font-size="11" font-family="system-ui, sans-serif" font-weight="600">Tiered with Lifecycle</text>
  <text x="400" y="335" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">100000 GB · $568 / month</text>

  <rect x="535" y="298" width="220" height="55" rx="6" fill="#0f172a" stroke="#0ea5e9" stroke-width="1" />
  <text x="645" y="318" text-anchor="middle" fill="#38bdf8" font-size="11" font-family="system-ui, sans-serif" font-weight="600">Monthly Net Savings</text>
  <text x="645" y="335" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="system-ui, sans-serif">Save $1432 / mo (72% Reduction)</text>

  <!-- Bottom Verification Badge -->
  <rect x="25" y="380" width="750" height="44" rx="8" fill="#1e293b" stroke="#0ea5e9" stroke-width="1" />
  <circle cx="45" cy="402" r="6" fill="#10b981" />
  <text x="62" y="406" fill="#f8fafc" font-size="11" font-family="system-ui, sans-serif" font-weight="600">GCS Audit: 100000 GB | $2000 baseline | $568 tiered | $1432 saved (72%) | 0 errors</text>
</svg>`,
    },
    {
      type: 'heading',
      id: 'gcs-cost-simulator',
      text: {
        en: 'Interactive Benchmark: GCS Lifecycle Cost Simulator',
        bn: 'ইন্টারেক্টিভ বেঞ্চমার্ক: জিসিএস লাইফসাইকেল খরচ সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We run a deterministic TypeScript simulation benchmarking monthly storage spend across 100000 GB of enterprise data comparing unmanaged Standard class storage against automated lifecycle tiering.',
        bn: 'আমরা স্বয়ংক্রিয় লাইফসাইকেল টিয়ারিং বনাম স্ট্যান্ডার্ড ক্লাসের মাসিক খরচের তুলনা করে ১০০০০০ জিবি এন্টারপ্রাইজ ডেটার ওপর একটি নির্ধারিত টাইপস্ক্রিপ্ট সিমুলেশন পরিচালনা করি।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'gcs-lifecycle-simulator.ts',
      code: `// Google Cloud Storage Lifecycle Cost Benchmark
interface GcsLifecycleMetrics {
  totalGb: number;
  standardBaselineUsd: number;
  optimizedTieredUsd: number;
  monthlySavingsUsd: number;
  savingsPercentage: number;
}

function simulateGcsLifecycle(): GcsLifecycleMetrics {
  const total = 100000;
  const baseline = Math.round(total * 0.02); // $2000

  const stdCost = 10000 * 0.02; // $200 (Active Hot)
  const nearCost = 20000 * 0.01; // $200 (Nearline 30d+)
  const coldCost = 30000 * 0.004; // $120 (Coldline 90d+)
  const archCost = 40000 * 0.0012; // $48 (Archive 365d+)
  const optimized = Math.round(stdCost + nearCost + coldCost + archCost); // $568

  const saved = baseline - optimized; // $1432
  const pct = Math.round((saved / baseline) * 100); // 72%

  return {
    totalGb: total,
    standardBaselineUsd: baseline,
    optimizedTieredUsd: optimized,
    monthlySavingsUsd: saved,
    savingsPercentage: pct,
  };
}

const res = simulateGcsLifecycle();

console.log('--- Google Cloud Storage Lifecycle Benchmark ---');
console.log(\`Total data storage evaluated: \${res.totalGb} GB\`);
// Total data storage evaluated: 100000 GB
console.log(\`Standard class unmanaged baseline: $\${res.standardBaselineUsd} / month\`);
// Standard class unmanaged baseline: $2000 / month
console.log(\`Automated lifecycle tiered cost: $\${res.optimizedTieredUsd} / month\`);
// Automated lifecycle tiered cost: $568 / month
console.log(\`Recurring monthly budget savings: $\${res.monthlySavingsUsd} / month\`);
// Recurring monthly budget savings: $1432 / month
console.log(\`Percentage cost reduction: \${res.savingsPercentage}% lower monthly spend.\`);
// Percentage cost reduction: 72% lower monthly spend.`,
      caption: {
        en: 'Our deterministic benchmark evaluated 100000 GB of enterprise data under Google Cloud Storage lifecycle policies. Maintaining all data in the Standard class incurred a baseline cost of 2000 dollars monthly. Under automated lifecycle tiering, active data remained in Standard while older records transitioned to Nearline, Coldline, and Archive. This lowered the monthly bill to 568 dollars, achieving 1432 dollars in monthly savings, a 72 percent budget reduction.',
        bn: 'আমাদের নির্ধারিত বেঞ্চমার্কে গুগল ক্লাউড স্টোরেজ লাইফসাইকেল পলিসির অধীনে ১০০০০০ জিবি এন্টারপ্রাইজ ডেটা মূল্যায়ন করা হয়েছে। স্ট্যান্ডার্ড ক্লাসে সমস্ত ডেটা রাখার বেসলাইন খরচ ছিল মাসে ২০০০ ডলার। স্বয়ংক্রিয় লাইফসাইকেল টিয়ারিংয়ের ফলে সক্রিয় ডেটা স্ট্যান্ডার্ডে রেখে পুরনো ডেটা নিয়ারলাইন, কোল্ডলাইন এবং আর্কাইভে স্থানান্তরিত হয়। এটি মোট খরচ মাসে ৫৬৮ ডলারে নামিয়ে এনে ১৪৩২ ডলার নিয়মিত মাসিক সাশ্রয় নিশ্চিত করে, যা বাজেটের ৭২ শতাংশ খরচ হ্রাস করে।',
      },
    },
  ],
  exercises: [
    {
      id: 'gcp-bucket-ex-1',
      kind: 'predict',
      topic: 'baseline-standard-cost',
      question: {
        en: 'In our Google Cloud Storage lifecycle benchmark of 100000 GB, what was the baseline monthly cost in dollars if all data remained in the Standard class (e.g. 2000 ):',
        bn: 'আমাদের ১০০০০০ জিবি ক্লাউড স্টোরেজ লাইফসাইকেল বেঞ্চমার্কে সমস্ত ডেটা স্ট্যান্ডার্ড ক্লাসে থাকলে মাসিক বেসলাইন খরচ কত ডলার ছিল (যেমন 2000 ):',
      },
      answer: '2000',
      accept: ['2000', '$2000', '২০০০'],
      hint: {
        en: '2000',
        bn: '2000',
      },
      explanation: {
        en: 'At $0.020 per GB on the Standard storage class, 100000 GB of data yields a baseline monthly expense of 2000 dollars.',
        bn: 'স্ট্যান্ডার্ড ক্লাসে প্রতি জিবি ০.০২ ডলার হিসেবে ১০০০০০ জিবি ডেটার মোট মাসিক বেসলাইন খরচ হয় ২০০০ ডলার।'
      },
    },
    {
      id: 'gcp-bucket-ex-2',
      kind: 'mcq',
      topic: 'ubla-security-advantage',
      question: {
        en: 'What is the primary operational advantage of Uniform Bucket-Level Access (UBLA) over legacy Object ACLs?',
        bn: 'পুরনো অবজেক্ট এসিএল (ACL)-এর তুলনায় ইউনিফর্ম বাকেট-লেভেল অ্যাক্সেস (UBLA) ব্যবহারের প্রধান পরিচালনগত সুবিধা কী?'
      },
      options: [
        {
          en: 'It centralizes access management entirely within Cloud IAM, eliminating per-object permissions and accidental public exposures',
          bn: 'এটি ক্লাউড আইএএম-এর অধীনে কেন্দ্রীয়ভাবে অ্যাক্সেস নিয়ন্ত্রণ করে, যা প্রতিটি ফাইলের আলাদা পারমিশন এবং ভুলবশত ডেটা উন্মুক্ত হওয়ার ঝুঁকি দূর করে'
        },
        {
          en: 'It automatically translates all stored documents into Portuguese',
          bn: 'এটি সমস্ত সংরক্ষিত ফাইলকে স্বয়ংক্রিয়ভাবে পর্তুগিজ ভাষায় অনুবাদ করে'
        },
        {
          en: 'It deletes all files larger than one megabyte',
          bn: 'এক মেগাবাইটের চেয়ে বড় সমস্ত ফাইল স্বয়ংক্রিয়ভাবে ডিলিট করে দেয়'
        },
        {
          en: 'It forces users to change their account passwords every ten minutes',
          bn: 'ব্যবহারকারীদের প্রতি দশ মিনিটে পাসওয়ার্ড পরিবর্তন করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'UBLA unifies access control exclusively under Google Cloud IAM.',
        bn: 'UBLA সমস্ত পারমিশন কেবল ক্লাউড আইএএম দ্বারা পরিচালনা করে।'
      },
      explanation: {
        en: 'Uniform Bucket-Level Access disables individual object Access Control Lists (ACLs). Access is granted exclusively using Google Cloud IAM policies on the bucket, simplifying security audits and preventing leaked permissions.',
        bn: 'ইউনিফর্ম বাকেট-লেভেল অ্যাক্সেস পৃথক ফাইলের এসিএল বাতিল করে। কেবল বাকেটের ওপর আইএএম পলিসি প্রয়োগ করে নিরাপত্তা নিশ্চিত করা হয়, যা নিরাপত্তা নিরীক্ষাকে অনেক সহজ করে তোলে।'
      }
    },
    {
      id: 'gcp-bucket-ex-3',
      kind: 'predict',
      topic: 'monthly-lifecycle-savings',
      question: {
        en: 'In our benchmark, how many dollars were saved every month after implementing automated lifecycle transitions across the 100000 GB workload (e.g. 1432 ):',
        bn: 'আমাদের বেঞ্চমার্কে ১০০০০০ জিবি ডেটায় স্বয়ংক্রিয় লাইফসাইকেল চালুর পর প্রতি মাসে কত ডলার সাশ্রয় হয়েছিল (যেমন 1432 ):',
      },
      answer: '1432',
      accept: ['1432', '$1432', '১৪৩২'],
      hint: {
        en: '1432',
        bn: '1432',
      },
      explanation: {
        en: 'Lifecycle tiering reduced the monthly bill from 2000 dollars down to 568 dollars, saving exactly 1432 dollars every month.',
        bn: 'লাইফসাইকেল নীতি মাসিক বিল ২০০০ ডলার থেকে ৫৬৮ ডলারে নামিয়ে এনে প্রতি মাসে ঠিক ১৪৩২ ডলার সাশ্রয় করেছিল।'
      },
    },
    {
      id: 'gcp-bucket-ex-4',
      kind: 'mcq',
      topic: 'archive-minimum-duration',
      question: {
        en: 'What is the minimum storage duration requirement for objects stored in the Google Cloud Storage Archive class?',
        bn: 'গুগল ক্লাউড স্টোরেজ আর্কাইভ ক্লাসে সংরক্ষিত অবজেক্টের জন্য ন্যূনতম সংরক্ষণের বাধ্যবাধকতা কত দিন?'
      },
      options: [
        {
          en: '365 days; deleting or replacing an object before 365 days incurs an early deletion fee equivalent to the remaining days',
          bn: '৩৬৫ দিন; ৩৬৫ দিনের পূর্বে অবজেক্ট মুছে ফেললে বা পরিবর্তন করলে অবশিষ্ট দিনের সমান প্রারম্ভিক ডিলিট ফি দিতে হয়'
        },
        {
          en: '5 seconds; objects are automatically deleted if not read immediately',
          bn: '৫ সেকেন্ড; তাৎক্ষণিকভাবে না পড়লে অবজেক্ট সাথে সাথে মুছে যায়'
        },
        {
          en: '30 days; identical to Nearline storage',
          bn: '৩০ দিন; যা নিয়ারলাইন স্টোরেজের সমান'
        },
        {
          en: 'There is no minimum duration; storage is billed only down to the millisecond',
          bn: 'কোনো ন্যূনতম বাধ্যবাধকতা নেই; মিলি-সেকেন্ড হিসেবে বিল করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Archive requires 365 days of storage; deleting early incurs an early deletion fee.',
        bn: 'আর্কাইভে ৩৬৫ দিন রাখতে হয়; আগে ডিলিট করলে প্রারম্ভিক ফি প্রযোজ্য হয়।'
      },
      explanation: {
        en: 'Archive storage offers the lowest storage rates but enforces a 365-day minimum storage commitment. If an object is deleted after 100 days, Google charges the remaining 265 days as an early deletion fee.',
        bn: 'আর্কাইভ স্টোরেজে সবচেয়ে কম খরচ হলেও ৩৬৫ দিনের ন্যূনতম বাধ্যবাধকতা থাকে। ১০০ দিন পর ফাইল ডিলিট করলে বাকি ২৬৫ দিনের জন্য আর্লি ডিলিট চার্জ কাটা হয়।'
      }
    }
  ],
  quiz: {
    id: 'gcp-buckets-quiz',
    title: {
      en: 'Google Cloud Storage Architecture Knowledge Check',
      bn: 'গুগল ক্লাউড স্টোরেজ আর্কিটেকচার জ্ঞান যাচাই'
    },
    questions: [
      {
        id: 'gcp-bucket-qz-1',
        kind: 'mcq',
        topic: 'bucket-namespace-rules',
        question: {
          en: 'What is a critical architectural requirement regarding bucket names in Google Cloud Storage?',
          bn: 'গুগল ক্লাউড স্টোরেজে বাকেটের নামের ক্ষেত্রে গুরুত্বপূর্ণ স্থাপত্যগত শর্ত কোনটি?'
        },
        options: [
          {
            en: 'Bucket names reside in a single global namespace and must be globally unique across all Google Cloud accounts worldwide',
            bn: 'বাকেটের নামগুলো একটি একক গ্লোবাল নেমস্পেসে থাকে এবং বিশ্বজুড়ে সমস্ত গুগল ক্লাউড অ্যাকাউন্টের মধ্যে অনন্য হতে হয়'
          },
          {
            en: 'Two different companies can create buckets with identical names in different projects',
            bn: 'দুটি ভিন্ন কোম্পানি তাদের নিজ নিজ প্রজেক্টে হুবহু একই নামের বাকেট তৈরি করতে পারে'
          },
          {
            en: 'Bucket names can only contain punctuation marks and emoji icons',
            bn: 'বাকেটের নামে কেবল বিরামচিহ্ন এবং ইমোজি ব্যবহার করতে হয়'
          },
          {
            en: 'Buckets can be nested inside other buckets like folders on a filesystem',
            bn: 'সাধারণ ফোল্ডারের মতো একটি বাকেটের ভেতরে আরেকটি বাকেট তৈরি করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Bucket names are globally unique across all GCP customers.',
          bn: 'বাকেটের নাম বিশ্বজুড়ে সকল জিসিপি ব্যবহারকারীর মাঝে অনন্য হতে হয়।'
        },
        explanation: {
          en: 'Google Cloud Storage bucket names share a flat, global namespace. Once a bucket name is registered, no other project or user globally can use that name until it is deleted.',
          bn: 'ক্লাউড স্টোরেজের বাকেট নাম বিশ্বব্যাপী একটি উন্মুক্ত নেমস্পেসে অবস্থান করে। একবার একটি নাম রেজিস্টার হলে তা ডিলিট না করা পর্যন্ত পৃথিবীর আর কেউ সেই নাম নিতে পারে না।'
        }
      },
      {
        id: 'gcp-bucket-qz-2',
        kind: 'mcq',
        topic: 'signed-urls-use-case',
        question: {
          en: 'When should a cloud software team utilize Google Cloud Storage Signed URLs?',
          bn: 'কখন একটি ক্লাউড সফটওয়্যার টিমের গুগল ক্লাউড স্টোরেজ সাইনড ইউআরএল ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: 'When allowing end users or external mobile apps to upload or download specific private files directly without granting them Google Cloud IAM accounts',
            bn: 'যখন শেষ ব্যবহারকারী বা মোবাইল অ্যাপকে গুগল অ্যাকাউন্ট না দিয়েই সরাসরি নির্দিষ্ট প্রাইভেট ফাইলে আপলোড বা ডাউনলোডের সাময়িক অনুমতি দিতে হয়'
          },
          {
            en: 'When converting video files into audio podcasts offline',
            bn: 'অফলাইনে ভিডিও ফাইলকে অডিও পডকাস্টে রূপান্তর করার জন্য'
          },
          {
            en: 'When encrypting computer keyboards with physical master keys',
            bn: 'চাবি দিয়ে কম্পিউটারের কিবোর্ড লক করে রাখার জন্য'
          },
          {
            en: 'Whenever the network router experiences a power failure',
            bn: 'যখন নেটওয়ার্ক রাউটারে বিদ্যুৎ বিভ্রাট দেখা দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Signed URLs grant temporary access to specific objects without GCP credentials.',
          bn: 'সাইনড ইউআরএল কোনো গুগল ক্রেডেনশিয়াল ছাড়াই সাময়িক ফাইল অ্যাক্সেস দেয়।'
        },
        explanation: {
          en: 'A Signed URL gives temporary read or write access to an object. The URL is cryptographically signed using a service account private key, expiring after a set duration.',
          bn: 'সাইনড ইউআরএল নির্দিষ্ট সময়ের জন্য নিরাপদ প্রবেশাধিকার প্রদান করে। এটি সার্ভিস অ্যাকাউন্টের ক্রিপ্টোগ্রাফিক কি দিয়ে তৈরি হয় এবং মেয়াদ শেষে অকার্যকর হয়ে যায়।'
        }
      },
      {
        id: 'gcp-bucket-qz-3',
        kind: 'mcq',
        topic: 'object-versioning-storage-cost',
        question: {
          en: 'What cost risk occurs when enabling Object Versioning on a Cloud Storage bucket without configuring lifecycle deletion rules?',
          bn: 'লাইফসাইকেল নীতি ছাড়া ক্লাউড স্টোরেজে অবজেক্ট ভার্সনিং চালু করলে কোন ধরনের আর্থিক ঝুঁকি তৈরি হয়?'
        },
        options: [
          {
            en: 'Every overwritten or deleted object persists indefinitely as a non-current version, causing storage volume and monthly costs to grow continuously',
            bn: 'প্রতিটি পরিবর্তিত বা ডিলিট করা ফাইল পুরনো সংস্করণ হিসেবে আজীবন জমা থাকে, যার ফলে স্টোরেজ সাইজ ও মাসিক বিল অনবরত বাড়তে থাকে'
          },
          {
            en: 'Google sends physical collection letters to the office mailroom',
            bn: 'গুগল অফিসে ডাকযোগে কাগুজে বিলের নোটিশ পাঠায়'
          },
          {
            en: 'The bucket deletes all production databases automatically',
            bn: 'বাকেটটি প্রোডাকশনের সমস্ত ডেটাবেজ নিজে থেকে মুছে ফেলে'
          },
          {
            en: 'Internet access is immediately suspended across the company',
            bn: 'কোম্পানির সমস্ত ইন্টারনেট সংযোগ সাথে সাথে বিচ্ছিন্ন হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Non-current versions accumulate and consume billable storage.',
          bn: 'পুরনো ভার্সনগুলো জমতে থাকে এবং অতিরিক্ত স্টোরেজ বিল তৈরি করে।'
        },
        explanation: {
          en: 'Object Versioning keeps previous copies of files every time an object is overwritten. Without lifecycle rules to delete non-current versions after a specified number of days, storage charges compound over time.',
          bn: 'অবজেক্ট ভার্সনিং প্রতিবার পরিবর্তনের পুরনো কপি রেখে দেয়। নির্দিষ্ট দিন পর পুরনো ভার্সন মুছে ফেলার লাইফসাইকেল নিয়ম না থাকলে বিল অস্বাভাবিক হারে বৃদ্ধি পায়।'
        }
      },
      {
        id: 'gcp-bucket-qz-4',
        kind: 'mcq',
        topic: 'storage-class-tradeoff',
        question: {
          en: 'Which trade-off accurately describes transitioning data from Standard storage to Nearline or Coldline storage?',
          bn: 'স্ট্যান্ডার্ড থেকে নিয়ারলাইন বা কোল্ডলাইনে ডেটা স্থানান্তরের কোন ভারসাম্যটি সঠিক?'
        },
        options: [
          {
            en: 'Storage pricing per gigabyte decreases significantly, but data retrieval charges and minimum retention duration requirements are introduced',
            bn: 'প্রতি গিগাবাইটে স্টোরেজ খরচ অনেক কমে যায়, কিন্তু ডেটা পড়ার ওপর রিড ফি এবং ন্যূনতম দিন রাখার বাধ্যবাধকতা যুক্ত হয়'
          },
          {
            en: 'Data can only be accessed using black-and-white computer screens',
            bn: 'ডেটা কেবল সাদা-কালো কম্পিউটার মনিটরে দেখা সম্ভব হয়'
          },
          {
            en: 'The latency jumps from milliseconds to several weeks',
            bn: 'লেটেন্সি মিলি-সেকেন্ড থেকে কয়েক সপ্তাহে পৌঁছে যায়'
          },
          {
            en: 'There is zero difference; prices and features are 100% identical',
            bn: 'কোনো পার্থক্য নেই; দাম ও ফিচার পুরোপুরি হুবহু এক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Lower storage fee balanced by retrieval costs and minimum retention days.',
          bn: 'কম স্টোরেজ খরচের বিপরীতে রিট্রাইভাল ফি ও ন্যূনতম সময়সীমা যুক্ত হয়।'
        },
        explanation: {
          en: 'Nearline and Coldline classes offer substantial at-rest storage savings. However, reading or retrieving the data incurs an egress retrieval charge, making them economical only for infrequently accessed data.',
          bn: 'নিয়ারলাইন ও কোল্ডলাইন স্টোরেজ চার্জ নাটকীয়ভাবে কমায়। কিন্তু ডেটা রিড করার সময় আলাদা ফি কাটার কারণে এগুলো কেবল কম ব্যবহৃত ডেটার জন্যই উপযুক্ত।'
        }
      }
    ]
  },
  next: {
    slug: 'computes-and-the-compute',
    title: {
      en: 'Google Compute Engine: VMs, Machine Families, and MIGs',
      bn: 'গুগল কম্পিউট ইঞ্জিন: ভিএম, মেশিন ফ্যামিলি এবং এমআইজি'
    }
  }
};
