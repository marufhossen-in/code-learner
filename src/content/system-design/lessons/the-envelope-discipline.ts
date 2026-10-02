import type { Lesson } from '../../../lib/types';

export const envelopeLesson: Lesson = {
  slug: 'the-envelope-discipline',
  tech: 'system-design',
  title: {
    en: 'Back-of-the-Envelope Estimation — Capacity Planning, QPS, Storage, and Bandwidth',
    bn: 'ব্যাক-অব-দ্য-এনভেলপ হিসাব: ক্যাপাসিটি প্ল্যানিং, QPS, স্টোরেজ ও ব্যান্ডউইথ'
  },
  summary: {
    en: 'Every production system design interview and engineering review begins with back-of-the-envelope capacity estimation. Transforming vague product requirements into precise physical hardware numbers separates junior coders from principal architects. In this lesson, you will master the standard mental arithmetic for queries per second (QPS), traffic peak multipliers (3x), storage growth across 5-year horizons, origin bandwidth after CDN caching, and hot-tier RAM sizing using the 80/20 Pareto principle. Implement an automated capacity estimation engine in TypeScript that computes exact compute, storage, and networking requirements from raw product inputs.',
    bn: 'প্রতিটি সিস্টেম ডিজাইন ইন্টারভিউ এবং ক্যাপাসিটি প্ল্যানিংয়ের ভিত্তি হলো ব্যাক-অব-দ্য-এনভেলপ হিসাব। অস্পষ্ট প্রোডাক্ট চাহিদাকে বাস্তব সার্ভার ও হার্ডওয়্যার সংখ্যায় রূপান্তর করার দক্ষতাই একজন সিনিয়র ইঞ্জিনিয়ারের প্রধান পরিচয়। এই পাঠে আপনি সেকেন্ডে রিকোয়েস্ট সংখ্যা (QPS), ট্রাফিকের পিক বা সর্বোচ্চ চাপ (৩ গুণ), ৫ বছরের জন্য স্টোরেজ প্রবৃদ্ধি, সিডিএন ক্যাশের পর অরিজিন ব্যান্ডউইথ এবং ৮০/২০ প্যারেটো নিয়মে র‍্যামের (RAM) আকার নির্ণয়ের মানসিক পাটিগণিত আয়ত্ত করবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর ক্যাপাসিটি ক্যালকুলেটর বাস্তবায়ন করা হয়েছে যা সাধারণ প্রোডাক্ট ইনপুট থেকে সার্ভার, মেমরি ও নেটওয়ার্কের সুনির্দিষ্ট চাহিদা নিখুঁতভাবে গণনা করে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'architecture-of-mental-math',
      text: {
        en: 'The Architecture of Mental Math: Transforming Requirements into Hardware',
        bn: 'মানসিক পাটিগণিতের স্থাপত্য: চাহিদা থেকে হার্ডওয়্যার রূপান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you architect distributed cloud applications, you must determine whether a design requires 2 servers or 200 servers before drawing a single box.',
        bn: 'ডিস্ট্রিবিউটেড ক্লাউড সিস্টেম নকশা করার সময় কোনো ডায়াগ্রাম আঁকার আগেই আপনাকে নির্ধারণ করতে হয় পুরো সিস্টেমে ২টি সার্ভার লাগবে নাকি ২০০টি সার্ভার লাগবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Back-of-the-envelope estimation is the disciplined art of converting high-level business metrics into concrete engineering constraints. Consider a platform with 10000000 Daily Active Users (DAU), where each user issues 20 requests per day. The total daily volume is 200000000 requests. Dividing by 86400 seconds in a day yields an average traffic load of approximately 2315 Queries Per Second (QPS). Because real-world internet traffic is not evenly distributed, systems experience diurnal peaks (typically 3 times average traffic), requiring infrastructure provisioned for 6945 peak QPS. Sizing against peak rather than average prevents cascading server crashes during prime evening traffic.',
        bn: 'ব্যাক-অব-দ্য-এনভেলপ হিসাব হলো ব্যবসায়িক লক্ষ্যমাত্রাকে সুনির্দিষ্ট প্রকৌশলগত সংখ্যায় রূপান্তর করার এক কার্যকর মানসিক পাটিগণিত। ধরা যাক একটি প্ল্যাটফর্মে ১০০০০০০০ দৈনিক সক্রিয় ব্যবহারকারী (DAU) আছেন এবং প্রতিজন দিনে ২০টি করে রিকোয়েস্ট পাঠান। তাহলে দিনে মোট রিকোয়েস্ট সংখ্যা হয় ২০০০০০০০০ টি। এক দিনের মোট ৮৬৪০০ সেকেন্ড দিয়ে ভাগ করলে গড় ট্রাফিক পাওয়া যায় সেকেন্ডে প্রায় ২৩১৫ টি রিকোয়েস্ট বা QPS। বাস্তব জীবনে ইন্টারনেটের চাপ সব সময় সমান থাকে না; সন্ধ্যার দিকে ট্রাফিক স্বাভাবিকের চেয়ে ৩ গুণ পর্যন্ত বৃদ্ধি পায় (পিক ট্রাফিক), ফলে সিস্টেমকে নূন্যতম ৬৯৪৫ পিক QPS সামলানোর মতো করে তৈরি করতে হয়। গড়ের বদলে পিক ট্রাফিকের ভিত্তিতে সার্ভার বসালে চরম চাপের মুহূর্তেও সিস্টেম অচল হওয়া থেকে রক্ষা পায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'back-of-the-envelope',
          def: {
            en: 'Rapid heuristic calculations using simplified rounding to estimate system compute, storage, bandwidth, and memory constraints.',
            bn: 'সহজ মানসিক পাটিগণিতের সাহায্যে সিস্টেমের প্রসেসর, স্টোরেজ, ব্যান্ডউইথ ও মেমরির আনুমানিক চাহিদা দ্রুত হিসাব করার কৌশল।'
          }
        },
        {
          term: 'queries-per-second',
          def: {
            en: 'The primary metric of server throughput, calculated by dividing total daily incoming transactions by 86400 seconds.',
            bn: 'সার্ভারের কার্যক্ষমতা পরিমাপের প্রধান একক, যা মোট দৈনিক লেনদেনকে ৮৬৪০০ সেকেন্ড দিয়ে ভাগ করে নির্ণয় করা হয়।'
          }
        },
        {
          term: 'peak-multiplier',
          def: {
            en: 'A safety factor (typically 2x to 3x average QPS) applied during capacity sizing to absorb peak diurnal usage spikes.',
            bn: 'একটি নিরাপত্তা গুণক (সাধারণত গড়ের ২ থেকে ৩ গুণ) যা সন্ধ্যার মতো সর্বোচ্চ ব্যবহারের সময় ট্রাফিকের চাপ সামলাতে ব্যবহৃত হয়।'
          }
        },
        {
          term: 'pareto-principle-80-20',
          def: {
            en: 'The empirical observation that 20% of stored content generates 80% of read traffic, used to size in-memory caching tiers.',
            bn: 'একটি বাস্তব অভিজ্ঞতাভিত্তিক নিয়ম যাতে দেখা যায় ২০% তথ্য থেকে ৮০% রিড ট্রাফিক আসে, যা ক্যাশ মেমরির আকার নির্ধারণে ব্যবহৃত হয়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'five-golden-conversion-rules',
      text: {
        en: 'The 5 Golden Conversion Rules of Capacity Planning',
        bn: 'ক্যাপাসিটি প্ল্যানিংয়ের ৫টি সুবর্ণ রূপান্তর সূত্র'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Mastering capacity estimation requires standardizing on 5 fundamental conversion formulas that transform user numbers into physical hardware specifications.',
        bn: 'ক্যাপাসিটি প্ল্যানিংয়ে পারদর্শী হতে ৫টি মৌলিক রূপান্তর সূত্র মনে রাখা জরুরি যা ব্যবহারকারীর সংখ্যাকে বাস্তব হার্ডওয়্যারে রূপান্তর করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'System Dimension', bn: 'পরিমাপের ক্ষেত্র' },
        { en: 'Estimation Formula', bn: 'হিসাবের সূত্র' },
        { en: 'Working Example (10M DAU)', bn: 'বাস্তব উদাহরণ (১ কোটি DAU)' },
        { en: 'Hardware Infrastructure Verdict', bn: 'প্রয়োজনীয় হার্ডওয়্যার সিদ্ধান্ত' }
      ],
      rows: [
        [
          { en: 'Average Read QPS', bn: 'গড় রিড QPS' },
          { en: '(DAU × Daily Requests) / 86400 seconds', bn: '(DAU × দৈনিক রিকোয়েস্ট) / ৮৬৪০০ সেকেন্ড' },
          { en: '(10000000 × 20) / 86400 = 2315 QPS', bn: '(১০০০০০০০ × ২০) / ৮৬৪০০ = ২৩১৫ QPS' },
          { en: 'Baseline resting workload of the distributed system', bn: 'ডিস্ট্রিবিউটেড সিস্টেমের স্বাভাবিক কাজের চাপ' }
        ],
        [
          { en: 'Peak Traffic QPS', bn: 'পিক ট্রাফিক QPS' },
          { en: 'Average QPS × 3.0 Peak Multiplier', bn: 'গড় QPS × ৩.০ পিক গুণক' },
          { en: '2315 × 3 = 6945 peak QPS', bn: '২৩১৫ × ৩ = ৬৯৪৫ পিক QPS' },
          { en: 'Infrastructure provisioned to survive prime-time spikes', bn: 'সর্বোচ্চ চাপের সময় সচল থাকার জন্য নির্ধারিত মাপ' }
        ],
        [
          { en: 'Application Nodes', bn: 'অ্যাপ্লিকেশন সার্ভার' },
          { en: 'Peak QPS / Node Safe Capacity (500 QPS)', bn: 'পিক QPS / নোডের নিরাপদ ক্ষমতা (৫০০ QPS)' },
          { en: '6945 / 500 = 13.89 -> 14 nodes', bn: '৬৯৪৫ / ৫০০ = ১৩.৮৯ -> ১৪টি নোড' },
          { en: 'Deploy 14 stateless app servers + 1 standby (N+1 = 15)', bn: '১৪টি মূল সার্ভার + ১টি অতিরিক্ত স্ট্যান্ডবাই নোড' }
        ],
        [
          { en: '5-Year Storage Growth', bn: '৫ বছরের স্টোরেজ প্রবৃদ্ধি' },
          { en: 'Daily Writes × Size × 365 days × 5 years', bn: 'দৈনিক রাইট × সাইজ × ৩৬৫ দিন × ৫ বছর' },
          { en: '10M × 1KB × 1825 days = 17 TB', bn: '১০M × ১KB × ১৮২৫ দিন = ১৭ TB' },
          { en: 'Account for 3x replication factor = 51 TB raw disk space', bn: '৩ গুণ ডেটাবেস রেপ্লিকেশন বিবেচনায় মোট ৫১ TB ডিস্ক স্পেস' }
        ],
        [
          { en: 'Cache RAM Sizing', bn: 'ক্যাশ র‍্যাম (RAM) মাপ' },
          { en: '20% of Daily Active Working Set', bn: 'দৈনিক সক্রিয় তথ্যের ২০% অংশ' },
          { en: '0.20 × (10M writes × 1KB) = 2 GB hot slice', bn: '০.২০ × (১০M × ১KB) = ২ GB হট স্লাইস' },
          { en: 'Provision an 8 GB Redis cluster to allow 4x growth headroom', bn: 'ভবিষ্যতের বৃদ্ধির জন্য ৮ GB রেডিস ক্লাস্টার স্থাপন' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-capacity-code',
      text: {
        en: 'Executable Capacity Estimation Engine Simulation',
        bn: 'ক্যাপাসিটি ক্যালকুলেটরের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates exact compute, storage, and database replication requirements from baseline product usage parameters.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি প্রোডাক্টের প্রাথমিক ব্যবহারের মান থেকে সার্ভার, স্টোরেজ ও ডেটাবেস রেপ্লিকেশনের সঠিক প্রযুক্তিগত চাহিদা গণনা করে।'
      }
    },
    {
      type: 'code',
      code: `// Automated Back-of-the-Envelope Capacity Estimator

interface SystemRequirements {
  dailyActiveUsers: number;
  requestsPerUserDay: number;
  payloadBytesPerWrite: number;
}

interface CapacityPlan {
  averageQps: number;
  peakQps: number;
  appServersRequired: number;
  fiveYearStorageTb: number;
  replicatedStorageTb: number;
}

function calculateSystemCapacity(req: SystemRequirements): CapacityPlan {
  const SECONDS_PER_DAY = 86400;
  const totalDailyTransactions = req.dailyActiveUsers * req.requestsPerUserDay;

  // 1. Throughput calculations
  const averageQps = Math.round(totalDailyTransactions / SECONDS_PER_DAY);
  const peakMultiplier = 3;
  const peakQps = averageQps * peakMultiplier;

  // 2. Compute sizing: assume 1 stateless Node.js container handles 500 QPS safely
  const appServersRequired = Math.ceil(peakQps / 500);

  // 3. Storage sizing over 5 years (1825 days)
  const dailyStorageGb =
    (req.dailyActiveUsers * req.payloadBytesPerWrite) / (1024 * 1024 * 1024);
  const fiveYearStorageTb = Math.round((dailyStorageGb * 1825) / 1024);

  // Standard enterprise 3x replication factor (Leader + 2 Followers)
  const replicatedStorageTb = fiveYearStorageTb * 3;

  return {
    averageQps,
    peakQps,
    appServersRequired,
    fiveYearStorageTb,
    replicatedStorageTb
  };
}

const productSpecs: SystemRequirements = {
  dailyActiveUsers: 10000000,
  requestsPerUserDay: 20,
  payloadBytesPerWrite: 1024 // 1 KB
};

const plan = calculateSystemCapacity(productSpecs);

console.log('Average QPS:', plan.averageQps);
console.log('Peak QPS (3x multiplier):', plan.peakQps);
console.log('App server nodes needed:', plan.appServersRequired);
console.log('5-year storage needed (TB):', plan.fiveYearStorageTb);
console.log('3x replicated storage (TB):', plan.replicatedStorageTb);

// prints: Average QPS: 2315
// prints: Peak QPS (3x multiplier): 6945
// prints: App server nodes needed: 14
// prints: 5-year storage needed (TB): 17
// prints: 3x replicated storage (TB): 51`
    },
    {
      type: 'heading',
      id: 'latency-numbers-every-programmer-knows',
      text: {
        en: 'Latency Numbers Every Systems Architect Must Know',
        bn: 'প্রতিটি সিস্টেম আর্কিটেক্টের জানা আবশ্যক লেটেন্সি মানদণ্ড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Hardware sizing is governed by orders of magnitude in access latency. Reading from CPU L1 cache takes approximately 0.5 nanoseconds, whereas reading from main RAM memory requires 100 nanoseconds (200 times slower). In comparison, sequential throughput from a fast solid-state drive (SSD) takes 150 microseconds (1500 times slower than RAM). Seeking on a mechanical hard disk takes 10 milliseconds (100000 times slower than RAM). Sending a network packet from California to the Netherlands and back takes 150 milliseconds. Architecture decisions (such as adding an in-memory cache) succeed because memory access is orders of magnitude faster than disk and network roundtrips.',
        bn: 'হার্ডওয়্যারের ক্ষমতা নির্ধারণ মূলত অ্যাক্সেস সময়ের পার্থক্যের ওপর নির্ভর করে। প্রসেসরের L1 ক্যাশ থেকে ডেটা পড়তে সময় লাগে প্রায় ০.৫ ন্যানোসেকেন্ড, আর প্রধান র‍্যাম (RAM) মেমরি থেকে পড়তে লাগে ১০০ ন্যানোসেকেন্ড (২০০ গুণ বেশি)। তুলনামূলকভাবে দ্রুতগতির এসএসডি (SSD) ড্রাইভ থেকে পড়তে লাগে ১৫০ মাইক্রোসেকেন্ড (র‍্যামের চেয়ে ১৫০০ গুণ ধীর)। পুরনো মেকানিক্যাল ডিস্ক থেকে ডেটা খুঁজতে লাগে ১০ মিলিসেকেন্ড (র‍্যামের চেয়ে ১০০০০০ গুণ ধীর)। আর ক্যালিফোর্নিয়া থেকে নেদারল্যান্ডসে নেটওয়ার্ক প্যাকেট পাঠিয়ে ফেরত আনতে সময় লাগে ১৫০ মিলিসেকেন্ড। সিস্টেমে ক্যাশ মেমরি ব্যবহারের মূল কারণই হলো র‍্যামের গতি ডিস্ক ও দূরবর্তী নেটওয়ার্কের চেয়ে বহুগুণ বেশি।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Size for peak, not average: Multiply average QPS by 2x to 3x to ensure infrastructure survives peak traffic surges.',
          bn: 'গড়ের বদলে পিক ট্রাফিকের প্রস্তুতি নিন: সর্বোচ্চ ট্রাফিকের ধাক্কা সামলাতে গড় QPS-কে ২ থেকে ৩ গুণ বাড়িয়ে মাপুন।'
        },
        {
          en: 'Always plan for 5-year storage: Multiply daily data volume by 1825 days and apply a 3x replication factor.',
          bn: '৫ বছরের স্টোরেজ পরিকল্পনা করুন: দৈনিক ডেটাকে ১৮২৫ দিন দিয়ে গুণ করে ৩ গুণ রেপ্লিকেশন বিবেচনায় রাখুন।'
        },
        {
          en: 'Apply the 80/20 Pareto rule: Size hot-tier caching memory to hold the top 20% of daily active content.',
          bn: '৮০/২০ প্যারেটো নিয়ম মানুন: ক্যাশ মেমরিতে দৈনিক সক্রিয় কনটেন্টের শীর্ষ ২০% রাখার ব্যবস্থা করুন।'
        },
        {
          en: 'Respect the latency hierarchy: Memory access is thousands of times faster than SSD reads and cross-region networks.',
          bn: 'লেটেন্সির স্তরবিন্যাস বুঝুন: মেমরির গতি এসএসডি ডিস্ক এবং দূরবর্তী নেটওয়ার্কের চেয়ে হাজার গুণ দ্রুত।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-last-single-point',
    tech: 'system-design',
    title: {
      en: 'High Availability & Single Points of Failure — Redundancy and SLAs',
      bn: 'উচ্চ প্রাপ্যতা ও একক ব্যর্থতা বিন্দু: রিডানড্যান্সি ও SLA'
    }
  },
  exercises: [
    {
      id: 'env-ex1',
      kind: 'mcq',
      topic: 'qps-calculation-formula',
      question: {
        en: 'If a social media application has 8640000 Daily Active Users (DAU) and each user performs an average of 10 requests per day, what is the average Queries Per Second (QPS)?',
        bn: 'যদি একটি সোশ্যাল মিডিয়া অ্যাপ্লিকেশনে ৮৬৪০০০০ দৈনিক সক্রিয় ব্যবহারকারী (DAU) থাকেন এবং প্রত্যেকে দিনে গড়ে ১০টি রিকোয়েস্ট পাঠান, তবে গড় QPS কত হবে?'
      },
      options: [
        {
          en: '1000 QPS, calculated as (8640000 × 10) / 86400 seconds',
          bn: '১০০০ QPS, যা (৮৬৪০০০০ × ১০) / ৮৬৪০০ সেকেন্ড সূত্র দিয়ে হিসাব করা হয়'
        },
        {
          en: '50000 QPS, calculated by multiplying DAU by server count',
          bn: '৫০০০০ QPS, যা ব্যবহারকারীর সংখ্যাকে সার্ভার সংখ্যা দিয়ে গুণ করে পাওয়া যায়'
        },
        {
          en: '10 QPS, because each user only makes 10 requests',
          bn: '১০ QPS, কারণ প্রতি ব্যবহারকারী মাত্র ১০টি রিকোয়েস্ট পাঠান'
        },
        {
          en: 'QPS cannot be calculated without knowing the screen resolution of users',
          bn: 'ব্যবহারকারীর মনিটরের রেজোলিউশন না জানলে QPS হিসাব করা অসম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'Divide the 86400000 total daily requests by the 86400 seconds in a day.',
        bn: 'মোট দৈনিক ৮৬৪০০০০০ রিকোয়েস্টকে দিনের মোট ৮৬৪০০ সেকেন্ড দিয়ে ভাগ করুন।'
      },
      explanation: {
        en: 'Total daily requests (86400000) divided by 86400 seconds per day equals exactly 1000 QPS.',
        bn: '৮৬৪০০০০০ রিকোয়েস্টকে ৮৬৪০০ সেকেন্ড দিয়ে ভাগ করলে ঠিক ১০০০ QPS পাওয়া যায়।'
      }
    },
    {
      id: 'env-ex2',
      kind: 'mcq',
      topic: 'peak-traffic-sizing-rationale',
      question: {
        en: 'Why do system architects provision backend server clusters to handle 2x to 3x the average QPS rather than sizing strictly for average traffic?',
        bn: 'সিস্টেম আর্কিটেক্টরা কেন সার্ভার ক্লাস্টারকে গড়ের ঠিক সমান না বানিয়ে গড়ের চেয়ে ২ থেকে ৩ গুণ পিক ট্রাফিকের উপযোগী করে তৈরি করেন?'
      },
      options: [
        {
          en: 'Traffic is non-uniform and exhibits diurnal evening spikes; sizing for average traffic would cause server saturation and cascading failures during peak hours',
          bn: 'ইন্টারনেট ট্রাফিক সব সময় সমান থাকে না এবং সন্ধ্যার দিকে নাটকীয়ভাবে বেড়ে যায়; গড়ের মাপে তৈরি করলে পিক আওয়ারের চাপে সার্ভার ক্র্যাশ করবে'
        },
        {
          en: 'Because hardware manufacturers require buying servers in groups of 3',
          bn: 'কারণ হার্ডওয়্যার কোম্পানিগুলো একসাথে ৩টি করে সার্ভার কিনতে বাধ্য করে'
        },
        {
          en: 'Peak sizing reduces internet connection upload latency to zero nanoseconds',
          bn: 'পিক সাইজিং ব্যবহারে নেটওয়ার্কের লেটেন্সি শূন্য ন্যানোসেকেন্ডে নেমে আসে'
        },
        {
          en: 'Average traffic calculations were outlawed by international engineering standards',
          bn: 'কারণ আন্তর্জাতিক মানদণ্ডে গড়ের ভিত্তিতে সার্ভার তৈরি নিষিদ্ধ করা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'People use apps when awake, especially during lunch and evening hours. Infrastructure must survive the peaks.',
        bn: 'মানুষ দিনের নির্দিষ্ট সময়ে বেশি অ্যাপ ব্যবহার করে; পিক আওয়ারের সর্বোচ্চ চাপ সামলানোই প্রধান লক্ষ্য।'
      },
      explanation: {
        en: 'Diurnal usage cycles concentrate request volume into peak hours, necessitating capacity headroom to maintain service SLAs.',
        bn: 'দিনের বিভিন্ন সময়ে ট্রাফিকের ওঠানামা সামাল দিতে পর্যাপ্ত অতিরিক্ত সক্ষমতা রাখা আবশ্যক।'
      }
    },
    {
      id: 'env-ex3',
      kind: 'mcq',
      topic: 'storage-capacity-growth-horizon',
      question: {
        en: 'When estimating 5-year storage capacity for an enterprise database, why must the calculated data size be multiplied by a replication factor of 3?',
        bn: 'এন্টারপ্রাইজ ডেটাবেসের ৫ বছরের স্টোরেজ হিসাব করার সময় কেন মোট আকারকে ৩ গুণ রেপ্লিকেশন ফ্যাক্টর দিয়ে গুণ করতে হয়?'
      },
      options: [
        {
          en: 'Production high availability requires storing identical copies across multiple database nodes (such as 1 Leader and 2 Follower replicas) to prevent data loss upon hardware failure',
          bn: 'প্রোডাকশনে ডেটা ক্ষতি রোধ করতে একাধিক সার্ভারে একই তথ্যের অনুলিপি (যেমন ১টি লিডার ও ২টি ফলোয়ার রেপ্লিকা) রাখতে হয়, ফলে প্রকৃত ডিস্ক খরচ ৩ গুণ হয়'
        },
        {
          en: 'Because hard drives lose one third of their storage capacity every year',
          bn: 'কারণ হার্ড ড্রাইভের এক-তৃতীয়াংশ জায়গা প্রতি বছর নষ্ট হয়ে যায়'
        },
        {
          en: 'Three replicas are required to display text in bold styling',
          bn: 'লেখাকে বোল্ড অক্ষরে দেখাতে ৩টি রেপ্লিকা থাকা বাধ্যতামূলক'
        },
        {
          en: 'Because database operating systems only support drives that are multiples of 3',
          bn: 'কারণ ডেটাবেস অপারেটিং সিস্টেম কেবল ৩ এর গুণিতক ডিস্ক সমর্থন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'One primary database node and two replicas ensure the system survives losing two physical machines.',
        bn: 'একটি মূল ডেটাবেস এবং দুটি রেপ্লিকা নিশ্চিত করে যে দুটি সার্ভার নষ্ট হলেও সিস্টেম সচল থাকবে।'
      },
      explanation: {
        en: 'Enterprise databases maintain 3 synchronous or asynchronous replicas across availability zones to guarantee durability and fast failover.',
        bn: 'উচ্চ প্রাপ্যতা বজায় রাখতে ৩টি আলাদা জোনে ডেটা অনুলিপি করে রাখা আন্তর্জাতিক মানদণ্ড।'
      }
    },
    {
      id: 'env-ex4',
      kind: 'mcq',
      topic: 'pareto-80-20-cache-sizing',
      question: {
        en: 'How does the 80/20 Pareto rule guide memory capacity sizing for an in-memory caching tier like Redis or Memcached?',
        bn: 'রেডিস বা মেমক্যাশডের মতো ইন-মেমরি ক্যাশ স্তরের মেমরি নির্ধারণে ৮০/২০ প্যারেটো নীতি কীভাবে সহায়তা করে?'
      },
      options: [
        {
          en: 'Approximately 20% of content accounts for 80% of read requests; provisioning cache RAM to hold this active 20% "working set" delivers an 80% cache hit rate with reasonable hardware costs',
          bn: 'মোট কনটেন্টের শীর্ষ ২০% অংশ থেকেই প্রায় ৮০% রিড রিকোয়েস্ট আসে; এই ২০% তথ্য ক্যাশ মেমরিতে রাখলে পরিমিত খরচে ৮০% ক্যাশ হিট রেট অর্জন করা যায়'
        },
        {
          en: 'It means 80 percent of servers must be turned off 20 percent of the time',
          bn: 'এর অর্থ হলো ৮০ শতাংশ সার্ভারকে ২০ শতাংশ সময় বন্ধ রাখতে হবে'
        },
        {
          en: 'Because caching systems crash if RAM contains more than 80 megabytes of data',
          bn: 'কারণ ক্যাশ মেমরিতে ৮০ মেগাবাইটের বেশি ডেটা থাকলে তা ক্র্যাশ করে'
        },
        {
          en: 'The rule mandates that all cache keys must contain exactly 80 characters',
          bn: 'এই নিয়মের কারণে সব ক্যাশ কি ঠিক ৮০ অক্ষরের হতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'You don\'t need to cache the entire database in expensive RAM. Cache the hot 20% that everyone reads.',
        bn: 'পুরো ডেটাবেস দামি র‍্যামে রাখার দরকার নেই; বহুল পঠিত ২০% কনটেন্ট ক্যাশে রাখাই সবচেয়ে কার্যকর।'
      },
      explanation: {
        en: 'Caching hot working sets balances memory expenditure with throughput gains, serving the vast majority of traffic from fast RAM.',
        bn: 'হট ডেটা ক্যাশে রাখার মাধ্যমে ব্যয় ও গতির চমৎকার ভারসাম্য তৈরি করা সম্ভব হয়।'
      }
    }
  ],
  quiz: {
    id: 'envelope-discipline-quiz',
    title: {
      en: 'Back-of-the-Envelope System Capacity Estimation Quiz',
      bn: 'ব্যাক-অব-দ্য-এনভেলপ সিস্টেম ক্যাপাসিটি হিসাব কুইজ'
    },
    questions: [
      {
        id: 'ed-q1',
        kind: 'mcq',
        topic: 'seconds-in-a-day-rounding',
        question: {
          en: 'In system design back-of-the-envelope calculations, what rounded approximation for the 86400 seconds in a day is commonly used for rapid mental math?',
          bn: 'সিস্টেম ডিজাইনের দ্রুত হিসাবের সুবিধার্থে এক দিনের মোট ৮৬৪০০ সেকেন্ডকে সাধারণত কোন কাছাকাছি সংখ্যায় রূপান্তর করে ধরা হয়?'
        },
        options: [
          {
            en: '100000 (10^5) seconds, which provides a conservative estimate that is within 15 percent of exact time and simplifies mental division',
            bn: '১০০০০০ (১০^৫) সেকেন্ড, যা হিসাবকে খুব সহজ করে এবং আসল সময়ের প্রায় ১৫ শতাংশের মধ্যে থেকে দ্রুত ফলাফল দেয়'
          },
          {
            en: '1000 seconds, assuming days are very short',
            bn: '১০০০ সেকেন্ড, দিন খুব ছোট ধরে নিয়ে'
          },
          {
            en: '60 seconds, because time is measured in minutes',
            bn: '৬০ সেকেন্ড, কারণ সময় মিনিটে হিসাব করা হয়'
          },
          {
            en: '10000000 seconds for all global servers',
            bn: '১০০০০০০০ সেকেন্ড সব আন্তর্জাতিক সার্ভারের জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: '86400 rounds cleanly up to 100000 (10^5), making division by powers of ten effortless during interviews.',
          bn: '৮৬৪০০ সংখ্যাটিকে সহজে হিসাব করতে ১০০০০০ (১০^৫) ধরা হয়, যা ইন্টারভিউতে দ্রুত মুখে মুখে হিসাব করতে সাহায্য করে।'
        },
        explanation: {
          en: 'Approximating 86400 as 10^5 gives rapid order-of-magnitude estimations, slightly underestimating QPS for a built-in safety margin.',
          bn: '৮৬৪০০ সংখ্যাটিকে ১০^৫ ধরা হিসাবকে অত্যন্ত সহজ করে এবং তাৎক্ষণিক সিদ্ধান্ত নিতে দারুণ সহায়তা করে।'
        }
      },
      {
        id: 'ed-q2',
        kind: 'mcq',
        topic: 'bandwidth-from-qps',
        question: {
          en: 'If an API serves 5000 peak QPS and the average HTTP JSON response payload size is 2 Kilobytes (16 Kilobits), what is the required peak outgoing network bandwidth?',
          bn: 'যদি একটি এপিআই পিক সময়ে ৫০০০ QPS ট্রাফিক পায় এবং প্রতি উত্তরের সাইজ গড়ে ২ কিলোবাইট (১৬ কিলোবিট) হয়, তবে প্রয়োজনীয় পিক নেটওয়ার্ক ব্যান্ডউইথ কত হবে?'
        },
        options: [
          {
            en: '80 Megabits per second (Mbps), calculated as 5000 QPS × 16 Kbps',
            bn: '৮০ মেগাবিট পার সেকেন্ড (Mbps), যা ৫০০০ QPS × ১৬ Kbps সূত্র দিয়ে হিসাব করা হয়'
          },
          {
            en: '500 Gigabits per second, because networks always require fiber optics',
            bn: '৫০০ গিগাবিট পার সেকেন্ড, কারণ অপটিক্যাল ফাইবার লাগে'
          },
          {
            en: '10 Kilobits per second, because text is very small',
            bn: '১০ কিলোবিট পার সেকেন্ড, কারণ টেক্সটের সাইজ খুব ছোট'
          },
          {
            en: 'Bandwidth cannot be computed without measuring physical cable lengths',
            bn: 'তারের দৈর্ঘ্য না মাপলে ব্যান্ডউইথ হিসাব করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Remember: 1 Byte = 8 bits. 2 KB = 16 Kb. Multiply 5000 requests/sec by 16 Kb/request.',
          bn: 'মনে রাখুন: ১ বাইট = ৮ বিট। ২ কিলোবাইট = ১৬ কিলোবিট। ৫০০০ কে ১৬ দিয়ে গুণ করুন।'
        },
        explanation: {
          en: '5000 QPS multiplied by 2 KB equals 10 MB/s, which converts to 80 Mbps of network throughput.',
          bn: '৫০০০ QPS কে ২ KB দিয়ে গুণ করলে ১০ MB/s বা ৮০ Mbps ব্যান্ডউইথ পাওয়া যায়।'
        }
      },
      {
        id: 'ed-q3',
        kind: 'mcq',
        topic: 'cdn-offload-impact',
        question: {
          en: 'How does deploying a Content Delivery Network (CDN) with an 80 percent cache hit rate fundamentally alter backend origin server capacity requirements?',
          bn: '৮০ শতাংশ ক্যাশ হিট রেটযুক্ত একটি কনটেন্ট ডেলিভারি নেটওয়ার্ক (CDN) ব্যবহার করলে ব্যাকএন্ড মূল সার্ভারের সক্ষমতার ওপর কী প্রভাব পড়ে?'
        },
        options: [
          {
            en: 'The CDN absorbs 80% of static and media read requests at the edge, reducing incoming traffic to the origin servers down to only 20%, drastically decreasing compute and bandwidth costs',
            bn: 'CDN নেটওয়ার্কের প্রান্তে বসেই ৮০% রিকোয়েস্টের সমাধান করে ফেলে, যার ফলে মূল সার্ভারে মাত্র ২০% ট্রাফিক পৌঁছায় এবং সার্ভারের খরচ ব্যাপক হারে কমে যায়'
          },
          {
            en: 'The CDN forces the origin server to purchase 80 new physical hard drives',
            bn: 'CDN মূল সার্ভারকে ৮০টি নতুন হার্ড ড্রাইভ কিনতে বাধ্য করে'
          },
          {
            en: 'It increases the processing latency of database queries by 80 seconds',
            bn: 'এটি ডেটাবেস কোয়েরির সময় ৮০ সেকেন্ড বাড়িয়ে দেয়'
          },
          {
            en: 'CDNs completely eliminate the need for databases or backend servers entirely',
            bn: 'CDN ব্যবহারে কোনো ডেটাবেস বা সার্ভারের আর প্রয়োজনই থাকে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'An 80% cache hit rate means 4 out of every 5 requests are answered by the CDN without ever touching your origin.',
          bn: '৮০% ক্যাশ হিট মানে প্রতি ৫টি রিকোয়েস্টের ৪টিরই উত্তর সিডিএন দিয়ে দেয়, মূল সার্ভারে হাতই পড়ে না।'
        },
        explanation: {
          en: 'CDNs absorb the vast bulk of edge read volume, insulating backend databases and app servers from massive traffic floods.',
          bn: 'সিডিএন অধিকাংশ ট্রাফিক নিজে সামলে ব্যাকএন্ড সার্ভারকে অতিরিক্ত চাপের হাত থেকে রক্ষা করে।'
        }
      },
      {
        id: 'ed-q4',
        kind: 'mcq',
        topic: 'ram-vs-disk-latency-gap',
        question: {
          en: 'Why is reading data from main memory (RAM at ~100 nanoseconds) preferred over reading from solid-state storage (SSD at ~150 microseconds) in high-throughput caching systems?',
          bn: 'উচ্চগতির ক্যাশিং সিস্টেমে সলিড-স্টেট ড্রাইভের (SSD প্রায় ১৫০ মাইক্রোসেকেন্ড) বদলে কেন প্রধান মেমরি (RAM প্রায় ১০০ ন্যানোসেকেন্ড) থেকে ডেটা পড়া বহুগুণ বেশি গ্রহণযোগ্য?'
        },
        options: [
          {
            en: 'RAM access is approximately 1500 times faster than SSD reads, allowing a single caching node to serve hundreds of thousands of requests per second without I/O disk bottlenecks',
            bn: 'র‍্যামের গতি এসএসডি ড্রাইভের চেয়ে প্রায় ১৫০০ গুণ দ্রুত, যার ফলে একটি মাত্র নোড কোনো ডিস্ক জ্যাম ছাড়াই সেকেন্ডে লাখ লাখ রিকোয়েস্টের উত্তর দিতে পারে'
          },
          {
            en: 'SSD drives can only be read on alternate days of the week',
            bn: 'এসএসডি ড্রাইভ সপ্তাহে কেবল একদিন পর পর পড়া যায়'
          },
          {
            en: 'RAM memory permanently stores data even when physical electrical power is disconnected',
            bn: 'বিদ্যুৎ সংযোগ চলে গেলেও র‍্যামের ডেটা চিরকাল সংরক্ষিত থাকে'
          },
          {
            en: 'Because international computer laws require using RAM for all data storage',
            bn: 'কারণ আন্তর্জাতিক আইনে সব ডেটা কেবল র‍্যামেই রাখার নিয়ম রয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Microseconds are thousands of times slower than nanoseconds. RAM eliminates disk I/O wait times.',
          bn: 'মাইক্রোসেকেন্ড ন্যানোসেকেন্ডের চেয়ে হাজার গুণ বড়; র‍্যামের গতি ডিস্কের চেয়ে অবিশ্বাস্য রকম বেশি।'
        },
        explanation: {
          en: 'The enormous latency gap between RAM and persistent disk drives makes memory caching indispensable for sub-millisecond response times.',
          bn: 'র‍্যাম ও ডিস্কের মধ্যকার বিশাল গতির ব্যবধানের কারণেই আধুনিক সিস্টেমে মেমরি ক্যাশ ব্যবহার করা অপরিহার্য।'
        }
      }
    ]
  }
};
