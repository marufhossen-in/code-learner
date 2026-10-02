import type { Hub } from '../../lib/types';
import { SkiesAndTheSkyLesson } from './lessons/skies-and-the-sky';
import { ZonesAndTheZoneLesson } from './lessons/zones-and-the-zone';
import { FavorsAndTheFavorLesson } from './lessons/favors-and-the-favor';
import { StampsAndTheStampLesson } from './lessons/stamps-and-the-stamp';
import { LaddersAndTheLadderLesson } from './lessons/ladders-and-the-ladder';
import { BillsAndTheBillLesson } from './lessons/bills-and-the-bill';
import { LatchesAndTheLatchLesson } from './lessons/latches-and-the-latch';
import { WelkinsAndTheWelkinLesson } from './lessons/welkins-and-the-welkin';

export const cloudFundamentalsHub: Hub = {
  slug: 'cloud-fundamentals',
  name: 'Cloud Fundamentals',
  icon: '☁️',
  tagline: {
    en: 'Master cloud computing principles, global infrastructure, service models, FinOps economics, and enterprise migration strategies.',
    bn: 'ক্লাউড কম্পিউটিংয়ের মৌলিক নীতি, গ্লোবাল পরিকাঠামো, সার্ভিস মডেল, ফিনঅপস অর্থনীতি এবং এন্টারপ্রাইজ মাইগ্রেশন কৌশল আয়ত্ত করুন।',
  },
  intro: {
    en: 'Cloud computing transformed modern software engineering by replacing physical datacenters with programmable, on-demand compute, storage, and networking. This track guides you through the foundational pillars of cloud technology: from the NIST 5 essential characteristics and global infrastructure to service models (IaaS, PaaS, SaaS, FaaS), cloud economics, zero-trust security, and enterprise migration strategies.',
    bn: 'ক্লাউড কম্পিউটিং শারীরিক ডেটা সেন্টারের পরিবর্তে প্রোগ্রামেবল, অন-ডিমান্ড কম্পিউট, স্টোরেজ এবং নেটওয়ার্কিং নিশ্চিত করে আধুনিক সফটওয়্যার ইঞ্জিনিয়ারিংয়ে বৈপ্লবিক পরিবর্তন এনেছে। এই ট্র্যাকটি আপনাকে ক্লাউড প্রযুক্তির মৌলিক স্তম্ভগুলো বিস্তারিতভাবে শেখাবে: এনআইএসটি সংজ্ঞায়িত ৫ টি অপরিহার্য বৈশিষ্ট্য ও বৈশ্বিক পরিকাঠামো থেকে শুরু করে সার্ভিস মডেল (IaaS, PaaS, SaaS, FaaS), ক্লাউড অর্থনীতি, জিরো-ট্রাস্ট নিরাপত্তা এবং এন্টারপ্রাইজ মাইগ্রেশন কৌশল।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Core Principles, Global Geography, and Service Models',
        bn: 'ধাপ ১ — মূল নীতি, বৈশ্বিক ভূগোল এবং সার্ভিস মডেল',
      },
      items: [
        {
          en: 'NIST 5 Essential Characteristics of Cloud Computing and CapEx versus OpEx',
          bn: 'ক্লাউড কম্পিউটিংয়ের এনআইএসটি ৫ টি অপরিহার্য বৈশিষ্ট্য এবং CapEx বনাম OpEx',
        },
        {
          en: 'Global Infrastructure: Regions, Availability Zones, and Edge Locations',
          bn: 'বৈশ্বিক পরিকাঠামো: অঞ্চল, অ্যাভেইলেবিলিটি জোন এবং এজ লোকেশন',
        },
        {
          en: 'Cloud Service Models: IaaS, PaaS, SaaS, and Serverless FaaS',
          bn: 'ক্লাউড সার্ভিস মডেল: IaaS, PaaS, SaaS এবং সার্ভারলেস FaaS',
        },
        {
          en: 'Deployment Models: Public, Private, Hybrid, and Multi-Cloud Architectures',
          bn: 'ডেপ্লয়মেন্ট মডেল: পাবলিক, প্রাইভেট, হাইব্রিড এবং মাল্টি-ক্লাউড আর্কিটেকচার',
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Scalability, Elasticity, and FinOps Economics',
        bn: 'ধাপ ২ — স্কেলেবিলিটি, স্থিতিস্থাপকতা এবং ফিনঅপস অর্থনীতি',
      },
      items: [
        {
          en: 'Vertical Scaling versus Horizontal Autoscaling and High Availability',
          bn: 'ভার্টিক্যাল স্কেলিং বনাম অনুভূমিক অটো-স্কেলিং এবং উচ্চ প্রাপ্যতা',
        },
        {
          en: 'Cloud Economics: On-Demand, Reserved Instances, and Spot Pricing Models',
          bn: 'ক্লাউড অর্থনীতি: অন-ডিমান্ড, সংরক্ষিত ইনস্ট্যান্স এবং স্পট মূল্য নির্ধারণ',
        },
        {
          en: 'FinOps Lifecycle: Cost Visibility, Rightsizing, and Governance',
          bn: 'ফিনঅপস জীবনচক্র: ব্যয় দৃশ্যমানতা, আকার সমন্বয় এবং সুশাসন',
        },
        {
          en: 'Disaster Recovery Tiers: Backup and Restore, Pilot Light, and Warm Standby',
          bn: 'দুর্যোগ পুনরুদ্ধার স্তর: ব্যাকআপ ও রিস্টোর, পাইলট লাইট এবং ওয়ার্ম স্ট্যান্ডবাই',
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Shared Responsibility, Security, and Enterprise Migration',
        bn: 'ধাপ ৩ — যৌথ দায়িত্ব মডেল, নিরাপত্তা এবং এন্টারপ্রাইজ মাইগ্রেশন',
      },
      items: [
        {
          en: 'The Shared Responsibility Model: Security OF the Cloud versus IN the Cloud',
          bn: 'যৌথ দায়িত্ব মডেল: ক্লাউডের নিজস্ব নিরাপত্তা বনাম ক্লাউডের ভেতরের নিরাপত্তা',
        },
        {
          en: 'Identity and Access Management (IAM), Least Privilege, and Zero Trust',
          bn: 'আইডেন্টিটি অ্যান্ড অ্যাক্সেস ম্যানেজমেন্ট (IAM), ন্যূনতম অধিকার এবং জিরো ট্রাস্ট',
        },
        {
          en: 'The 6 Rs Migration Framework and the AWS Well-Architected Pillars',
          bn: 'মাইগ্রেশনের ৬ টি আর ফ্রেমওয়ার্ক এবং এডাব্লিউএস ওয়েল-আর্কিটেক্টেড স্তম্ভ',
        },
      ],
    },
  ],
  lessons: [
    SkiesAndTheSkyLesson,
    ZonesAndTheZoneLesson,
    FavorsAndTheFavorLesson,
    StampsAndTheStampLesson,
    LaddersAndTheLadderLesson,
    BillsAndTheBillLesson,
    LatchesAndTheLatchLesson,
    WelkinsAndTheWelkinLesson,
  ],
  projects: [
    {
      title: {
        en: 'Multi-Tier Web Application Infrastructure',
        bn: 'মাল্টি-টিয়ার ওয়েব অ্যাপ্লিকেশন অবকাঠামো',
      },
      brief: {
        en: 'Design a high-availability architecture spanning 2 Availability Zones with public load balancers, auto-scaled application tiers, and multi-AZ database replication.',
        bn: 'পাবলিক লোড ব্যালেন্সার, অটো-স্কেলড অ্যাপ্লিকেশন স্তর এবং মাল্টি-এজেড ডেটাবেজ রেপ্লিকেশন সহ ২ টি অ্যাভেইলেবিলিটি জোন জুড়ে একটি উচ্চ-উপলব্ধ অবকাঠামো ডিজাইন করুন।',
      },
    },
    {
      title: {
        en: 'FinOps Cost Optimization and Workload Migration',
        bn: 'ফিনঅপস খরচ অপ্টিমাইজেশন ও মাইগ্রেশন পরিকল্পনা',
      },
      brief: {
        en: 'Develop an enterprise migration roadmap using the 6 Rs framework, rightsizing overprovisioned compute and implementing automated lifecycle storage rules.',
        bn: '৬ টি আর ফ্রেমওয়ার্ক ব্যবহার করে একটি এন্টারপ্রাইজ মাইগ্রেশন রোডম্যাপ তৈরি করুন এবং অতিরিক্ত কম্পিউট রিসোর্স সমন্বয় করে স্টোরেজ লাইফসাইকেল নিয়ম প্রয়োগ করুন।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Architect workloads across multiple Availability Zones to prevent single-datacenter failure points.',
      bn: 'একটি একক ডেটা সেন্টারের ব্যর্থতা এড়াতে একাধিক অ্যাভেইলেবিলিটি জোন জুড়ে সিস্টেম আর্কিটেকচার তৈরি করুন।',
    },
    {
      en: 'Apply the Principle of Least Privilege across all IAM policies and enforce multi-factor authentication.',
      bn: 'সমস্ত আইএএম নীতিতে ন্যূনতম অধিকার প্রয়োগ করুন এবং মাল্টি-ফ্যাক্টর প্রমাণীকরণ বাধ্যতামূলক করুন।',
    },
    {
      en: 'Automate horizontal autoscaling based on real-time traffic demand rather than paying for idle compute capacity.',
      bn: 'অলস কম্পিউট ক্ষমতার জন্য অর্থ পরিশোধ না করে রিয়েল-টাইম ট্রাফিক চাহিদার ওপর ভিত্তি করে স্বয়ংক্রিয় অনুভূমিক স্কেলিং কনফিগার করুন।',
    },
    {
      en: 'Leverage Spot and Reserved pricing models to achieve up to 70 percent infrastructure cost reduction for steady workloads.',
      bn: 'স্থির কাজের ক্ষেত্রে ৭০ শতাংশ পর্যন্ত অবকাঠামো খরচ কমাতে স্পট এবং সংরক্ষিত মূল্য নির্ধারণ মডেল ব্যবহার করুন।',
    },
    {
      en: 'Tag every cloud resource with environment, owner, and cost-center metadata for automated FinOps visibility.',
      bn: 'স্বয়ংক্রিয় ফিনঅপস নজরদারির জন্য প্রতিটি ক্লাউড রিসোর্সে পরিবেশ, মালিক এবং খরচ-কেন্দ্র মেটাডাটা ট্যাগ যুক্ত করুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the primary difference between Capital Expenditure (CapEx) and Operational Expenditure (OpEx) in cloud computing?',
        bn: 'ক্লাউড কম্পিউটিংয়ে ক্যাপিটাল এক্সপেন্ডিচার (CapEx) এবং অপারেশনাল এক্সপেন্ডিচার (OpEx)-এর মধ্যে মূল পার্থক্য কী?',
      },
      a: {
        en: 'CapEx requires upfront capital investment in physical hardware and facilities, whereas OpEx operates on an on-demand pay-as-you-go model with zero initial infrastructure purchases.',
        bn: 'CapEx-এ শারীরিক হার্ডওয়্যার এবং সুবিধার জন্য পূর্বে বিশাল মূলধনী বিনিয়োগ প্রয়োজন, যেখানে OpEx কোনো প্রাথমিক হার্ডওয়্যার কেনা ছাড়াই পে-অ্যাজ-ইউ-গো ভিত্তিতে অন-ডিমান্ড পরিচালিত হয়।',
      },
    },
    {
      q: {
        en: 'How does an Availability Zone differ from an entire Cloud Region?',
        bn: 'একটি অ্যাভেইলেবিলিটি জোন কীভাবে একটি সমগ্র ক্লাউড অঞ্চলের চেয়ে আলাদা?',
      },
      a: {
        en: 'A Region is a distinct geographical location consisting of at least 3 isolated Availability Zones, each with separate physical power, cooling, and networking.',
        bn: 'একটি রিজিয়ন হলো একটি স্বতন্ত্র ভৌগোলিক অবস্থান যা কমপক্ষে ৩ টি বিচ্ছিন্ন অ্যাভেইলেবিলিটি জোন নিয়ে গঠিত, যার প্রতিটিতে নিজস্ব বিদ্যুৎ, কুলিং এবং নেটওয়ার্কিং ব্যবস্থা থাকে।',
      },
    },
    {
      q: {
        en: 'What is the Shared Responsibility Model in cloud security?',
        bn: 'ক্লাউড সুরক্ষায় যৌথ দায়িত্ব মডেল বা শেয়ার্ড রেসপনসিবিলিটি মডেল কী?',
      },
      a: {
        en: 'The cloud provider manages security OF the cloud (physical facilities, hypervisor, hardware), while the customer is responsible for security IN the cloud (customer data, IAM, operating system patching, firewall rules).',
        bn: 'ক্লাউড প্রদানকারী ক্লাউডের নিজস্ব নিরাপত্তা (শারীরিক সুবিধা, হাইপারভাইজর, হার্ডওয়্যার) পরিচালনা করে, আর গ্রাহক ক্লাউডের ভেতরের নিরাপত্তার (গ্রাহকের ডেটা, আইএএম, অপারেটিং সিস্টেম প্যাচিং, ফায়ারওয়াল নিয়ম) জন্য দায়ী থাকে।',
      },
    },
    {
      q: {
        en: 'What are the 6 Rs of enterprise cloud migration strategy?',
        bn: 'এন্টারপ্রাইজ ক্লাউড মাইগ্রেশন কৌশলের ৬ টি আর (6 Rs) কী কী?',
      },
      a: {
        en: 'The 6 Rs migration strategies are Rehost (lift-and-shift), Replatform (lift-tinker-and-shift), Repurchase (drop-and-shop), Refactor (re-architecting for cloud-native), Retire, and Retain.',
        bn: 'মাইগ্রেশনের ৬ টি আর কৌশল হলো রিহোস্ট (লিফট-অ্যান্ড-শিফট), রিপ্ল্যাটফর্ম (লিফট-টিংকার-অ্যান্ড-শিফট), রিপারচেস (ড্রপ-অ্যান্ড-শপ), রিফ্যাক্টর (ক্লাউড-নেটিভ রি-আর্কিটেক্ট), রিটায়ার এবং রিটেইন।',
      },
    },
  ],
  realWorld: [
    {
      en: 'Netflix migrated from monolithic physical datacenters to AWS microservices, utilizing dynamic autoscaling across thousands of instances to handle peak evening streaming traffic.',
      bn: 'নেটফ্লিক্স তাদের মনোলিথিক শারীরিক ডেটা সেন্টার থেকে এডাব্লিউএস মাইক্রোসার্ভিসে স্থানান্তরিত হয়, যেখানে সন্ধ্যার পিক স্ট্রিমিং ট্রাফিক সামলাতে হাজার হাজার ইনস্ট্যান্সে ডায়নামিক অটো-স্কেলিং ব্যবহৃত হয়।',
    },
    {
      en: 'Financial institutions deploy hybrid cloud patterns, retaining core transactional databases in on-premises vaults while running stateless customer portals in elastic public cloud regions.',
      bn: 'আর্থিক প্রতিষ্ঠানগুলো হাইব্রিড ক্লাউড পদ্ধতি গ্রহণ করে, যেখানে মূল লেনদেন ডেটাবেজ অন-প্রিমিসেস সুরক্ষিত ভল্টে রেখে ইলাস্টিক পাবলিক ক্লাউড অঞ্চলে স্টেটলেস কাস্টমার পোর্টাল পরিচালনা করা হয়।',
    },
    {
      en: 'E-commerce platforms leverage Spot and Reserved compute instances during holiday flash sales, achieving resilient horizontal scaling while minimizing infrastructure expenses.',
      bn: 'ই-কমার্স প্ল্যাটফর্মগুলো উৎসবের ফ্ল্যাশ সেলের সময় স্পট এবং সংরক্ষিত কম্পিউট ব্যবহার করে, যা স্থিতিশীল অনুভূমিক স্কেলিং নিশ্চিত করার পাশাপাশি পরিকাঠামো খরচ নাটকীয়ভাবে কমায়।',
    },
  ],
};
