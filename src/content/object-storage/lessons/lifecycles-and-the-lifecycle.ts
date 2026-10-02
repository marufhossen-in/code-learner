import type { Lesson } from '../../../lib/types';

export const LifecyclesAndTheLifecycleLesson: Lesson = {
  slug: 'lifecycles-and-the-lifecycle',
  tech: 'object-storage',
  title: {
    en: 'Storage Classes: Lifecycle Rules & Glacier Archival',
    bn: 'স্টোরেজ ক্লাস: লাইফসাইকেল রুলস এবং গ্লেসিয়ার আর্কাইভ'
  },
  summary: {
    en: 'Optimize storage costs using S3 storage classes: Standard, Infrequent Access, and Glacier Deep Archive, configured with automated lifecycle transition and expiration rules.',
    bn: 'S3 স্টোরেজ ক্লাস ব্যবহার করে খরচ নিয়ন্ত্রণ করুন: স্ট্যান্ডার্ড, ইনফ্রিকুয়েন্ট অ্যাক্সেস এবং গ্লেসিয়ার ডিপ আর্কাইভ, যা স্বয়ংক্রিয় লাইফসাইকেল রুল দিয়ে পরিচালিত হয়।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'storage-classes-overview',
      text: {
        en: '1. The S3 Storage Class Spectrum',
        bn: '১. S3 স্টোরেজ ক্লাসের স্তরসমূহ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you manage petabytes of data, keeping all files in hot standard storage wastes budget. Not all files share the same access frequency; a log file accessed 100 times on day 1 may receive 0 queries after 30 days.',
        bn: 'যখন আপনি পেটাওয়াইট ডাটা পরিচালনা করেন, সব ফাইলকে হট স্ট্যান্ডার্ড স্টোরেজে রাখলে প্রচুর বাজেটের অপচয় হয়। সব ফাইলের ব্যবহারের হার এক নয়; ১ম দিনে ১০০ বার দেখা কোনো লগ ফাইল ৩০ দিন পর হয়তো ০ বার দেখা হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Amazon S3 provides a spectrum of storage tiers designed to trade retrieval latency for lower storage costs:',
        bn: 'Amazon S3 স্টোরেজ খরচ কমানোর উদ্দেশ্যে বিভিন্ন স্টোরেজ টিয়ার প্রদান করে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'S3 Standard: The default hot storage tier. Delivers millisecond retrieval latency across at least 3 Availability Zones with 99.99% availability. Best for active websites and live mobile media.',
          bn: 'S3 Standard: ডিফল্ট হট স্টোরেজ টিয়ার। কমপক্ষে ৩ টি অ্যাভেইলেবিলিটি জোনে ৯৯.৯৯% প্রাপ্যতা সহ মিলি-সেকেন্ডে ডাটা প্রদান করে। সক্রিয় ওয়েবসাইট ও অ্যাপ মিডিয়ার জন্য উপযুক্ত।'
        },
        {
          en: 'S3 Standard-Infrequent Access (S3 Standard-IA): For data accessed less frequently but requiring millisecond retrieval when requested. Storage pricing is up to 50% cheaper than Standard, but incurs a per-gigabyte retrieval fee. Minimum storage duration is 30 days.',
          bn: 'S3 Standard-Infrequent Access (S3 Standard-IA): কদাচিৎ ব্যবহৃত কিন্তু প্রয়োজনে দ্রুত মিলি-সেকেন্ডে প্রাপ্য ডাটার জন্য। এর স্টোরেজ খরচ ৫০% পর্যন্ত কম, তবে ডাটা রিট্রিভ করতে সামান্য ফি লাগে। ন্যূনতম সংরক্ষণের মেয়াদ ৩০ দিন।'
        },
        {
          en: 'S3 Glacier Flexible Retrieval: Low-cost archival storage for backups. Retrieval times range from Expedited (1 to 5 minutes) to Standard (3 to 5 hours) and Bulk (5 to 12 hours). Minimum storage duration is 90 days.',
          bn: 'S3 Glacier Flexible Retrieval: ব্যাকআপের জন্য স্বল্প খরচের আর্কাইভ স্টোরেজ। ডাটা তোলার সময় এক্সপিডাইটেড (১ থেকে ৫ মিনিট), স্ট্যান্ডার্ড (৩ থেকে ৫ ঘণ্টা) অথবা বাল্ক (৫ থেকে ১২ ঘণ্টা)। ন্যূনতম সংরক্ষণের মেয়াদ ৯০ দিন।'
        },
        {
          en: 'S3 Glacier Deep Archive: The lowest cost cloud storage available, costing less than 1 dollar per terabyte per month ($0.00099/GB). Designed for compliance archives requiring retrieval within 12 to 48 hours. Minimum storage duration is 180 days.',
          bn: 'S3 Glacier Deep Archive: ক্লাউডের সবচেয়ে সাশ্রয়ী স্টোরেজ যার খরচ প্রতি টেরাবাইটে প্রতি মাসে ১ ডলারেরও কম ($০.০০০৯৯/GB)। আইনি আর্কাইভের জন্য তৈরি যার রিট্রিভাল সময় ১২ থেকে ৪৮ ঘণ্টা। ন্যূনতম সংরক্ষণের মেয়াদ ১৮০ দিন।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'lifecycle-timeline-diagram',
      title: {
        en: 'S3 Lifecycle Transition & Archival Timeline',
        bn: 'S3 লাইফসাইকেল রূপান্তর এবং আর্কাইভ সময়রেখা'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">S3 Automated Lifecycle Cost Optimization Timeline</text>' +
          '<!-- Timeline Bar -->' +
          '<line x1="60" y1="210" x2="740" y2="210" stroke="#64748b" stroke-width="4"/>' +
          '<!-- Stage 1: Day 0 -->' +
          '<g transform="translate(60, 60)">' +
            '<rect width="130" height="110" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>' +
            '<text x="65" y="24" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">DAY 0: INGEST</text>' +
            '<rect x="10" y="35" width="110" height="60" rx="4" fill="#0f172a"/>' +
            '<text x="65" y="55" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">S3 Standard</text>' +
            '<text x="65" y="72" fill="#cbd5e1" font-size="9" text-anchor="middle">Active Hot Data</text>' +
            '<text x="65" y="86" fill="#94a3b8" font-size="8" text-anchor="middle">0 ms latency</text>' +
            '<circle cx="65" cy="150" r="14" fill="#3b82f6" stroke="#ffffff" stroke-width="2"/>' +
            '<text x="65" y="154" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">0d</text>' +
          '</g>' +
          '<!-- Stage 2: Day 30 -->' +
          '<g transform="translate(230, 60)">' +
            '<rect width="140" height="110" rx="8" fill="#1e293b" stroke="#facc15" stroke-width="2"/>' +
            '<text x="70" y="24" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">DAY 30: TRANSITION</text>' +
            '<rect x="10" y="35" width="120" height="60" rx="4" fill="#0f172a"/>' +
            '<text x="70" y="55" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">Standard-IA</text>' +
            '<text x="70" y="72" fill="#cbd5e1" font-size="9" text-anchor="middle">Infrequent Access</text>' +
            '<text x="70" y="86" fill="#34d399" font-size="8" text-anchor="middle">50% cost savings</text>' +
            '<circle cx="70" cy="150" r="14" fill="#facc15" stroke="#ffffff" stroke-width="2"/>' +
            '<text x="70" y="154" fill="#0f172a" font-size="9" font-weight="bold" text-anchor="middle">30d</text>' +
          '</g>' +
          '<!-- Stage 3: Day 90 -->' +
          '<g transform="translate(410, 60)">' +
            '<rect width="140" height="110" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>' +
            '<text x="70" y="24" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">DAY 90: ARCHIVE</text>' +
            '<rect x="10" y="35" width="120" height="60" rx="4" fill="#0f172a"/>' +
            '<text x="70" y="55" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">S3 Glacier</text>' +
            '<text x="70" y="72" fill="#cbd5e1" font-size="9" text-anchor="middle">Flexible Retrieval</text>' +
            '<text x="70" y="86" fill="#34d399" font-size="8" text-anchor="middle">80% cost savings</text>' +
            '<circle cx="70" cy="150" r="14" fill="#a855f7" stroke="#ffffff" stroke-width="2"/>' +
            '<text x="70" y="154" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">90d</text>' +
          '</g>' +
          '<!-- Stage 4: Day 365: Expire -->' +
          '<g transform="translate(590, 60)">' +
            '<rect width="140" height="110" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>' +
            '<text x="70" y="24" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">DAY 365: EXPIRE</text>' +
            '<rect x="10" y="35" width="120" height="60" rx="4" fill="#0f172a"/>' +
            '<text x="70" y="55" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Purge / Expire</text>' +
            '<text x="70" y="72" fill="#cbd5e1" font-size="9" text-anchor="middle">Deep Archive OR</text>' +
            '<text x="70" y="86" fill="#f87171" font-size="8" text-anchor="middle">Permanent Delete</text>' +
            '<circle cx="70" cy="150" r="14" fill="#ef4444" stroke="#ffffff" stroke-width="2"/>' +
            '<text x="70" y="154" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">365d</text>' +
          '</g>' +
          '<!-- Bottom Summary Box -->' +
          '<g transform="translate(60, 260)">' +
            '<rect width="670" height="120" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1"/>' +
            '<text x="335" y="28" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Lifecycle Configuration Rules Mechanics</text>' +
            '<text x="30" y="55" fill="#cbd5e1" font-size="10">&#x2714; Transition Actions: Automated movement between storage classes based on object creation age</text>' +
            '<text x="30" y="75" fill="#cbd5e1" font-size="10">&#x2714; Noncurrent Version Expirations: Auto-expire old versions after 30 days while retaining active version</text>' +
            '<text x="30" y="95" fill="#34d399" font-size="10">&#x2714; AbortIncompleteMultipartUpload: Deletes abandoned upload chunks after 7 days to eliminate hidden bills</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'lifecycle-rules-architecture',
      text: {
        en: '2. Anatomy of a Lifecycle Configuration Rule',
        bn: '২. লাইফসাইকেল কনফিগারেশন রুলের গঠন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'S3 Lifecycle rules automate data retention using declarative XML or JSON policies. A comprehensive policy combines 3 primary rule actions:',
        bn: 'S3 লাইফসাইকেল রুল ডিক্ল্যারেটিভ পলিসির মাধ্যমে স্বয়ংক্রিয়ভাবে ডাটা ব্যবস্থাপনা পরিচালনা করে। একটি পূর্ণাঙ্গ পলিসিতে ৩ টি প্রধান অ্যাকশন থাকে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Transition Actions: Define when current object revisions move to cheaper tiers (e.g. Days: 30 moves to Standard-IA; Days: 90 moves to Glacier Flexible Retrieval).',
          bn: '১. ট্রানজিশন অ্যাকশন: বর্তমান অবজেক্ট কখন সাশ্রয়ী টিয়ারে স্থানান্তরিত হবে তা নির্ধারণ করে (যেমন ৩০ দিনে Standard-IA এবং ৯০ দিনে Glacier Flexible Retrieval)।'
        },
        {
          en: '2. NoncurrentVersionExpiration: In version-enabled buckets, older revisions accumulate silently. You can specify NoncurrentDays: 30 and NewerNoncurrentVersions: 2 to delete historical versions older than 30 days while keeping 2 recent backups.',
          bn: '২. নন-কারেন্ট ভার্সন এক্সপিরেশন: ভার্সনিং চালু থাকা বাকেটে পুরোনো সংস্করণ জমা হতে থাকে। NoncurrentDays: 30 এবং NewerNoncurrentVersions: 2 নির্ধারণ করে ৩০ দিনের পুরোনো ভার্সন মুছে ফেলে সাম্প্রতিক ২ টি ব্যাকআপ অক্ষত রাখা যায়।'
        },
        {
          en: '3. AbortIncompleteMultipartUpload: Unfinished multipart uploads store abandoned byte chunks on disk indefinitely unless cleaned up. Setting DaysAfterInitiation: 7 automatically cleans up failed uploads after 7 days, eliminating hidden costs.',
          bn: '৩. অসম্পূর্ণ মাল্টিপার্ট আপলোড বাতিল: অসমাপ্ত মাল্টিপার্ট আপলোডের অবশিষ্ট অংশ ডিস্কে জমে বাড়তি খরচ তৈরি করে। DaysAfterInitiation: 7 নির্ধারণ করলে ৭ দিন পর ব্যর্থ আপলোডগুলো স্বয়ংক্রিয়ভাবে বাতিল ও ডিলিট হয়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'lifecycle-simulator',
      text: {
        en: '3. S3 Lifecycle Transition Engine in TypeScript',
        bn: '৩. TypeScript এ S3 লাইফসাইকেল ট্রানজিশন ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how an automated lifecycle evaluator inspects object age in days and applies storage class transitions and expiration policies:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে একটি স্বয়ংক্রিয় লাইফসাইকেল মূল্যায়ন ইঞ্জিন অবজেক্টের বয়স যাচাই করে স্টোরেজ ক্লাস রূপান্তর এবং এক্সপিরেশন কার্যকর করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of S3 lifecycle rule evaluation, storage class transitions, and object expiration.',
        bn: 'S3 লাইফসাইকেল রুল মূল্যায়ন, স্টোরেজ ক্লাস রূপান্তর এবং অবজেক্ট এক্সপিরেশনের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of S3 Lifecycle Rules, Transitions & Storage Class Tiering
type S3StorageClass = 'STANDARD' | 'STANDARD_IA' | 'GLACIER' | 'DEEP_ARCHIVE';

interface StoredFile {
  key: string;
  sizeBytes: number;
  ageDays: number;
  storageClass: S3StorageClass;
  isExpired: boolean;
}

interface LifecycleTransitionRule {
  transitionDays: number;
  targetStorageClass: S3StorageClass;
}

interface LifecyclePolicy {
  transitions: LifecycleTransitionRule[];
  expirationDays: number;
}

class S3LifecycleEngine {
  private policy: LifecyclePolicy;

  constructor(policy: LifecyclePolicy) {
    // Sort transitions ascending by days
    this.policy = {
      transitions: [...policy.transitions].sort((a, b) => a.transitionDays - b.transitionDays),
      expirationDays: policy.expirationDays
    };
  }

  evaluateObject(file: StoredFile): { updatedClass: S3StorageClass; expired: boolean; log: string } {
    // 1. Check expiration
    if (file.ageDays >= this.policy.expirationDays) {
      file.isExpired = true;
      return {
        updatedClass: file.storageClass,
        expired: true,
        log: file.key + ' expired and purged at ' + file.ageDays + ' days'
      };
    }

    // 2. Check storage class transitions (highest threshold met)
    let currentClass = file.storageClass;
    for (const rule of this.policy.transitions) {
      if (file.ageDays >= rule.transitionDays) {
        currentClass = rule.targetStorageClass;
      }
    }

    file.storageClass = currentClass;
    return {
      updatedClass: currentClass,
      expired: false,
      log: file.key + ' transitioned to ' + currentClass + ' at ' + file.ageDays + ' days'
    };
  }
}

// 1. Define lifecycle policy: Day 30 -> IA, Day 90 -> Glacier, Day 365 -> Expire
const policy: LifecyclePolicy = {
  transitions: [
    { transitionDays: 30, targetStorageClass: 'STANDARD_IA' },
    { transitionDays: 90, targetStorageClass: 'GLACIER' }
  ],
  expirationDays: 365
};

const engine = new S3LifecycleEngine(policy);

// 2. Test object at day 5 (active)
const f1: StoredFile = { key: 'logs/app.log', sizeBytes: 1048576, ageDays: 5, storageClass: 'STANDARD', isExpired: false };
const res1 = engine.evaluateObject(f1);
console.log('Day 5 Class: ' + res1.updatedClass); // -> STANDARD

// 3. Test object at day 35 (transitions to IA)
const f2: StoredFile = { key: 'logs/app.log', sizeBytes: 1048576, ageDays: 35, storageClass: 'STANDARD', isExpired: false };
const res2 = engine.evaluateObject(f2);
console.log('Day 35 Class: ' + res2.updatedClass); // -> STANDARD_IA

// 4. Test object at day 120 (transitions to Glacier)
const f3: StoredFile = { key: 'logs/app.log', sizeBytes: 1048576, ageDays: 120, storageClass: 'STANDARD', isExpired: false };
const res3 = engine.evaluateObject(f3);
console.log('Day 120 Class: ' + res3.updatedClass); // -> GLACIER

// 5. Test object at day 370 (expired and deleted)
const f4: StoredFile = { key: 'logs/app.log', sizeBytes: 1048576, ageDays: 370, storageClass: 'GLACIER', isExpired: false };
const res4 = engine.evaluateObject(f4);
console.log('Day 370 Expired?: ' + res4.expired); // -> true`
    }
  ],
  exercises: [
    {
      id: 'life-ex-1',
      kind: 'mcq',
      question: {
        en: 'Which S3 storage class offers the lowest storage cost per gigabyte in the cloud for compliance archives?',
        bn: 'আইনি আর্কাইভের জন্য ক্লাউডে প্রতি গিগাবাইটে কোন S3 স্টোরেজ ক্লাসটি সবচেয়ে কম খরচের সুবিধা দেয়?'
      },
      options: [
        {
          en: 'S3 Glacier Deep Archive',
          bn: 'S3 Glacier Deep Archive টিয়ার'
        },
        {
          en: 'S3 Standard',
          bn: 'S3 Standard'
        },
        {
          en: 'S3 Express One Zone',
          bn: 'S3 Express One Zone টিয়ার'
        },
        {
          en: 'S3 Standard-IA',
          bn: 'S3 Standard-IA'
        }
      ],
      answer: 0,
      hint: {
        en: 'Deep Archive costs less than $1 per terabyte per month ($0.00099/GB).',
        bn: 'ডিপ আর্কাইভের খরচ প্রতি টেরাবাইটে প্রতি মাসে ১ ডলারেরও কম ($০.০০০৯৯/GB)।'
      },
      explanation: {
        en: 'S3 Glacier Deep Archive is the lowest-cost storage tier ($0.00099 per GB/month), designed for long-term retention of data accessed once or twice a year.',
        bn: 'S3 Glacier Deep Archive হলো সবচেয়ে সাশ্রয়ী স্টোরেজ ক্লাস ($০.০০০৯৯/GB), যা বছরে এক বা দুবার দেখা হয় এমন দীর্ঘমেয়াদী ডাটার জন্য তৈরি।'
      }
    },
    {
      id: 'life-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the primary benefit of configuring "AbortIncompleteMultipartUpload" in an S3 lifecycle rule?',
        bn: 'S3 লাইফসাইকেল রুলে "AbortIncompleteMultipartUpload" কনফিগার করার প্রধান সুবিধা কী?'
      },
      options: [
        {
          en: 'It automatically cleans up abandoned multipart upload chunks after a set number of days to eliminate hidden storage fees',
          bn: 'অপ্রয়োজনীয় স্টোরেজ খরচ রোধ করতে এটি নির্দিষ্ট দিন পর অসমাপ্ত মাল্টিপার্ট আপলোডের অবশিষ্ট অংশ স্বয়ংক্রিয়ভাবে মুছে ফেলে'
        },
        {
          en: 'It speeds up fiber-optic internet connection speeds by 300 percent',
          bn: 'এটি ফাইবার অপটিক ইন্টারনেট সংযোগের গতি ৩০০ শতাংশ বৃদ্ধি করে'
        },
        {
          en: 'It converts incomplete video files into MP3 audio streams',
          bn: 'এটি অসমাপ্ত ভিডিও ফাইলকে MP3 অডিও স্ট্রিমে রূপান্তর করে'
        },
        {
          en: 'It disables all encryption requirements on the storage bucket',
          bn: 'এটি বাকেটের সমস্ত এনক্রিপশন বাধ্যবাধকতা বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Failed or abandoned multipart uploads continue incurring storage charges until aborted.',
        bn: 'ব্যর্থ মাল্টিপার্ট আপলোডের ফাইলগুলো মুছে না দেওয়া পর্যন্ত স্টোরেজ চার্জ কাটতে থাকে।'
      },
      explanation: {
        en: 'Incomplete multipart uploads retain uploaded byte parts indefinitely. The AbortIncompleteMultipartUpload action deletes these orphaned parts automatically.',
        bn: 'অসমাপ্ত আপলোডের টুকরোগুলো ক্লাউডে অনির্দিষ্টকাল জমা থাকে। এই রুলটি অনাথ অংশগুলোকে মুছে ফেলে অনাকাঙ্ক্ষিত বিল থেকে বাঁচায়।'
      }
    },
    {
      id: 'life-ex-3',
      kind: 'mcq',
      question: {
        en: 'What is the minimum storage duration charge billed for objects transitioned into S3 Standard-Infrequent Access (Standard-IA)?',
        bn: 'S3 Standard-Infrequent Access (Standard-IA)-এ স্থানান্তরিত অবজেক্টের জন্য ন্যূনতম কত দিনের স্টোরেজ চার্জ বিল করা হয়?'
      },
      options: [
        {
          en: '30 days minimum billing duration',
          bn: 'ন্যূনতম ৩০ দিনের বিলিং মেয়াদ'
        },
        {
          en: '1 day only',
          bn: 'কেবল ১ দিন'
        },
        {
          en: '365 days minimum billing duration',
          bn: 'ন্যূনতম ৩৬৫ দিনের বিলিং মেয়াদ'
        },
        {
          en: '0 days (instant pro-rated billing to the exact second)',
          bn: '০ দিন (প্রতি সেকেন্ডের নিখুঁত বিলিং)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Standard-IA enforces a 30-day minimum storage commitment.',
        bn: 'Standard-IA তে ন্যূনতম ৩০ দিনের স্টোরেজ প্রতিশ্রুতি কার্যকর থাকে।'
      },
      explanation: {
        en: 'S3 Standard-IA enforces a 30-day minimum storage duration. If an object is deleted or transitioned after 5 days, you are still billed for the full 30 days.',
        bn: 'S3 Standard-IA তে ন্যূনতম ৩০ দিনের চার্জ প্রযোজ্য হয়। কোনো অবজেক্ট ৫ দিন পর মুছে ফেললেও পুরো ৩০ দিনের বিল পরিশোধ করতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-lifecycles-and-the-lifecycle',
    title: {
      en: 'S3 Storage Classes and Lifecycle Rules Quiz',
      bn: 'S3 স্টোরেজ ক্লাস এবং লাইফসাইকেল রুলস কুইজ'
    },
    questions: [
      {
        id: 'life-q1',
        kind: 'mcq',
        question: {
          en: 'How does S3 Intelligent-Tiering optimize storage costs without requiring manual lifecycle rules?',
          bn: 'ম্যানুয়াল লাইফসাইকেল রুল ছাড়াই S3 Intelligent-Tiering কীভাবে স্বয়ংক্রিয়ভাবে স্টোরেজ খরচ সাশ্রয় করে?'
        },
        options: [
          {
            en: 'It monitors object access patterns and automatically moves data between frequent and infrequent tiers with zero retrieval fees',
            bn: 'এটি ডাটা ব্যবহারের ধরণ পর্যবেক্ষণ করে কোনো রিট্রিভাল ফি ছাড়াই স্বয়ংক্রিয়ভাবে ফ্রিকুয়েন্ট ও ইনফ্রিকুয়েন্ট টিয়ারে স্থানান্তর করে'
          },
          {
            en: 'It deletes 50 percent of stored files randomly at the end of each week',
            bn: 'প্রতি সপ্তাহের শেষে এটি সংরক্ষিত ফাইলের ৫০ শতাংশ এলোমেলোভাবে মুছে ফেলে'
          },
          {
            en: 'It forces all users to download files using dial-up modems',
            bn: 'এটি সমস্ত ব্যবহারকারীকে ডায়াল-আপ মডেম দিয়ে ফাইল ডাউনলোড করতে বাধ্য করে'
          },
          {
            en: 'It limits all object keys to exactly 4 characters',
            bn: 'এটি تمام অবজেক্ট কি-কে ঠিক ৪ অক্ষরে সীমাবদ্ধ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Intelligent-Tiering automatically moves data based on usage with no retrieval fees.',
          bn: 'ইন্টেলিজেন্ট-টিয়ারিং কোনো রিট্রিভাল ফি ছাড়াই ব্যবহারের ভিত্তিতে ডাটা স্থানান্তর করে।'
        },
        explanation: {
          en: 'S3 Intelligent-Tiering monitors access patterns. If an object is not accessed for 30 consecutive days, it moves automatically to infrequent access with 0 retrieval fees.',
          bn: 'S3 Intelligent-Tiering ৩০ দিন ধরে কোনো অবজেক্ট ব্যবহার না হলে স্বয়ংক্রিয়ভাবে ইনফ্রিকুয়েন্ট টিয়ারে সরিয়ে দেয় যার জন্য ০ টাকা বাড়তি রিট্রিভাল ফি দিতে হয়।'
        }
      },
      {
        id: 'life-q2',
        kind: 'mcq',
        question: {
          en: 'What are the 3 retrieval speed options available in S3 Glacier Flexible Retrieval?',
          bn: 'S3 Glacier Flexible Retrieval-এ ডাটা তোলার কোন ৩ টি গতির বিকল্প পাওয়া যায়?'
        },
        options: [
          {
            en: 'Expedited (1-5 minutes), Standard (3-5 hours), and Bulk (5-12 hours)',
            bn: 'এক্সপিডাইটেড (১-৫ মিনিট), স্ট্যান্ডার্ড (৩-৫ ঘণ্টা), এবং বাল্ক (৫-১২ ঘণ্টা)'
          },
          {
            en: 'Instant (1 ms), Slow (10 days), and Never',
            bn: 'ইনস্ট্যান্ট (১ ms), স্লো (১০ দিন), এবং কখনোই নয়'
          },
          {
            en: 'Hourly, Daily, and Annual',
            bn: 'ঘণ্টায়, দৈনিক, এবং বার্ষিক'
          },
          {
            en: 'Single-core, Dual-core, and Quad-core',
            bn: 'সিঙ্গেল-কোর, ডুয়াল-কোর, এবং কোয়াড-কোর'
          }
        ],
        answer: 0,
        hint: {
          en: 'Glacier Flexible supports Expedited (minutes), Standard (hours), and Bulk (half-day).',
          bn: 'গ্লেসিয়ার ফ্লেক্সিবল রিট্রিভাল এক্সপিডাইটেড (কয়েক মিনিট), স্ট্যান্ডার্ড (কয়েক ঘণ্টা) এবং বাল্ক সমর্থন করে।'
        },
        explanation: {
          en: 'S3 Glacier Flexible Retrieval provides 3 retrieval tiers: Expedited (1-5 min for urgent needs), Standard (3-5 hr default), and Bulk (5-12 hr lowest cost).',
          bn: 'Glacier Flexible Retrieval ৩ টি টিয়ার দেয়: জরুরি কাজের জন্য Expedited (১-৫ মিনিট), সাধারণ Standard (৩-৫ ঘণ্টা) এবং সাশ্রয়ী Bulk (৫-১২ ঘণ্টা)।'
        }
      },
      {
        id: 'life-q3',
        kind: 'mcq',
        question: {
          en: 'What is the minimum storage duration commitment for objects stored in S3 Glacier Deep Archive?',
          bn: 'S3 Glacier Deep Archive-এ সংরক্ষিত অবজেক্টের জন্য ন্যূনতম স্টোরেজ মেয়াদের প্রতিশ্রুতি কত দিন?'
        },
        options: [
          {
            en: '180 days',
            bn: '১৮০ দিন'
          },
          {
            en: '30 days',
            bn: '৩০ দিন'
          },
          {
            en: '90 days',
            bn: '৯০ দিন'
          },
          {
            en: '3650 days',
            bn: '৩৬৫০ দিন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Deep Archive requires a commitment of at least 180 days (approximately 6 months).',
          bn: 'ডিপ আর্কাইভে কমপক্ষে ১৮০ দিনের (প্রায় ৬ মাস) প্রতিশ্রুতি আবশ্যক।'
        },
        explanation: {
          en: 'S3 Glacier Deep Archive enforces a 180-day minimum storage duration. Deleting an object before 180 days incurs a pro-rated early deletion fee.',
          bn: 'S3 Glacier Deep Archive ১৮০ দিনের ন্যূনতম মেয়াদের প্রতিশ্রুতি দাবি করে। এর আগে ডাটা মুছলে অবশিষ্ট মেয়াদের ফি চার্জ করা হয়।'
        }
      },
      {
        id: 'life-q4',
        kind: 'mcq',
        question: {
          en: 'In an S3 lifecycle rule for a version-enabled bucket, what does the "NewerNoncurrentVersions" setting control?',
          bn: 'ভার্সনিং সক্রিয় বাকেটের লাইফসাইকেল রুলে "NewerNoncurrentVersions" সেটিংটি কী নিয়ন্ত্রণ করে?'
        },
        options: [
          {
            en: 'The number of recent noncurrent versions to retain when older versions are expired',
            bn: 'পুরোনো সংস্করণগুলো মুছে ফেলার সময় কতটি সাম্প্রতিক নন-কারেন্ট সংস্করণ সংরক্ষণ করতে হবে'
          },
          {
            en: 'The total number of AWS accounts allowed to download the file',
            bn: 'ফাইলটি ডাউনলোড করতে অনুমোদিত মোট AWS অ্যাকাউন্টের সংখ্যা'
          },
          {
            en: 'The maximum CPU usage allocated to the S3 bucket manager',
            bn: 'S3 বাকেট ম্যানেজারে বরাদ্দ করা সর্বোচ্চ CPU ব্যবহারের হার'
          },
          {
            en: 'The number of days an administrator must wait before deleting a bucket',
            bn: 'বাকেট ডিলিট করার আগে অ্যাডমিনিস্ট্রেটরকে কত দিন অপেক্ষা করতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'It ensures you always keep a specific count of historical backups while purging the rest.',
          bn: 'এটি নিশ্চিত করে যে বাকিগুলো মুছে গেলেও নির্দিষ্ট সংখ্যক অতীত ব্যাকআপ সবসময় সংরক্ষিত থাকে।'
        },
        explanation: {
          en: 'NewerNoncurrentVersions lets you specify a number of historical versions to keep (e.g. retain 3 versions) while expiring older historical clutter.',
          bn: 'NewerNoncurrentVersions নির্দিষ্ট সংখ্যক সাম্প্রতিক সংস্করণ অক্ষত রেখে তার চেয়ে পুরোনো সংস্করণগুলো মুছে ফেলার সুবিধা দেয়।'
        }
      },
      {
        id: 'life-q5',
        kind: 'mcq',
        question: {
          en: 'What architectural difference distinguishes S3 One Zone-IA from S3 Standard-IA?',
          bn: 'কোন আর্কিটেকচারাল পার্থক্যটি S3 One Zone-IA কে S3 Standard-IA থেকে আলাদা করে?'
        },
        options: [
          {
            en: 'S3 One Zone-IA stores data in a single Availability Zone rather than across at least 3 AZs, reducing cost by 20 percent',
            bn: 'S3 One Zone-IA ডাটাকে কমপক্ষে ৩ টি AZ-এর বদলে একটি একক অ্যাভেইলেবিলিটি জোনে রেখে ২০ শতাংশ খরচ কমায়'
          },
          {
            en: 'S3 One Zone-IA only allows 1 user to read data at a time',
            bn: 'S3 One Zone-IA একবারে কেবল ১ জন ব্যবহারকারীকে ডাটা পড়ার অনুমতি দেয়'
          },
          {
            en: 'S3 One Zone-IA encrypts data with 1 single 8-bit password',
            bn: 'S3 One Zone-IA ডাটাকে ১ টিমাত্র ৮-বিটের পাসওয়ার্ড দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'S3 One Zone-IA can only store files with names starting with the letter A',
            bn: 'S3 One Zone-IA কেবল A অক্ষর দিয়ে শুরু হওয়া নামের ফাইল সংরক্ষণ করতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'One Zone-IA sacrifices multi-AZ redundancy for lower storage pricing.',
          bn: 'One Zone-IA খরচ কমাতে মাল্টি-AZ সুরক্ষার বদলে একক জোনে ডাটা রাখে।'
        },
        explanation: {
          en: 'S3 One Zone-IA stores data in 1 single AZ for 20% lower cost than Standard-IA. It is ideal for reproducible secondary backups that do not require multi-AZ resilience.',
          bn: 'S3 One Zone-IA একটি একক জোনে ডাটা সংরক্ষণ করে ২০% কম খরচে সেবা দেয়, যা সহজেই পুনরায় তৈরি করা যায় এমন ব্যাকআপের জন্য আদর্শ।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'encrypts-and-the-encrypt',
    title: {
      en: 'Server-Side Encryption: SSE-S3, SSE-KMS & SSE-C',
      bn: 'সার্ভার-সাইড এনক্রিপশন: SSE-S3, SSE-KMS এবং SSE-C'
    }
  }
};
