import type { Hub } from '../../lib/types';
import { ProjectsAndTheProjectLesson } from './lessons/projects-and-the-project';
import { BucketsAndTheBucketLesson } from './lessons/buckets-and-the-bucket';
import { ComputesAndTheComputeLesson } from './lessons/computes-and-the-compute';
import { FunctionsAndTheFunctionLesson } from './lessons/functions-and-the-function';
import { NetworksAndTheNetworkLesson } from './lessons/networks-and-the-network';
import { IamsAndTheIamLesson } from './lessons/iams-and-the-iam';
import { VaultsAndTheVaultLesson } from './lessons/vaults-and-the-vault';
import { TheGcpReleaseLesson } from './lessons/the-gcp-release';

export const gcpHub: Hub = {
  slug: 'gcp',
  name: 'Google Cloud',
  icon: '☁️',
  tagline: {
    en: 'Master Google Cloud Platform: resource hierarchy, Cloud Storage, Compute Engine, Cloud Functions, VPC networks, Cloud IAM, and Cloud Build automation.',
    bn: 'গুগল ক্লাউড প্ল্যাটফর্ম আয়ত্ত করুন: রিসোর্স স্তরবিন্যাস, ক্লাউড স্টোরেজ, কম্পিউট ইঞ্জিন, ক্লাউড ফাংশন, ভিপিসি নেটওয়ার্কিং, ক্লাউড আইএএম এবং ক্লাউড বিল্ড অটোমেশন।',
  },
  intro: {
    en: 'Google Cloud Platform (GCP) delivers hyperscale global infrastructure, advanced analytics, and industry-leading developer velocity. This curriculum guides you from organizing Projects within Folders and Organizations to provisioning scalable Compute Engine VMs, multi-class Cloud Storage buckets, event-driven Cloud Functions, global VPC networking, least-privilege Cloud IAM policies, and automated delivery pipelines with Terraform and Cloud Build.',
    bn: 'গুগল ক্লাউড প্ল্যাটফর্ম (GCP) বৈশ্বিক হাইপারস্কেল অবকাঠামো, উন্নত অ্যানালিটিক্স এবং ডেভেলপার গতিশীলতা প্রদান করে। এই পাঠ্যক্রমে আপনি অর্গানাইজেশন ও ফোল্ডারের অধীনে প্রজেক্ট বিন্যাস থেকে শুরু করে স্কেলেবল কম্পিউট ইঞ্জিন ভার্চুয়াল মেশিন, মাল্টি-ক্লাস ক্লাউড স্টোরেজ বাকেট, ইভেন্ট-ড্রিভেন ক্লাউড ফাংশন, গ্লোবাল ভিপিসি নেটওয়ার্ক, সর্বনিম্ন সুবিধার ক্লাউড আইএএম পলিসি এবং টেরাফর্ম ও ক্লাউড বিল্ডের স্বয়ংক্রিয় পাইপলাইন আয়ত্ত করবেন।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Resource Hierarchy, Global Storage, and Compute VMs',
        bn: 'ধাপ ১ — রিসোর্স স্তরবিন্যাস, গ্লোবাল স্টোরেজ এবং কম্পিউট ভিএম',
      },
      items: [
        {
          en: 'Resource Hierarchy: Organizations, Folders, Projects, and Billing Account Boundaries',
          bn: 'রিসোর্স স্তরবিন্যাস: অর্গানাইজেশন, ফোল্ডার, প্রজেক্ট এবং বিলিং অ্যাকাউন্টের সীমানা',
        },
        {
          en: 'Google Cloud Storage: Buckets, Object Versioning, and Multi-Class Storage Tiers',
          bn: 'গুগল ক্লাউড স্টোরেজ: বাকেট, অবজেক্ট ভার্সনিং এবং মাল্টি-ক্লাস স্টোরেজ টিয়ার',
        },
        {
          en: 'Compute Engine: Virtual Machine Instances, Machine Families, and Local SSDs',
          bn: 'কম্পিউট ইঞ্জিন: ভার্চুয়াল মেশিন ইনস্ট্যান্স, মেশিন ফ্যামিলি এবং লোকাল এসএসডি',
        },
        {
          en: 'Resilient Compute: Managed Instance Groups (MIGs), Health Checks, and Autoscaling',
          bn: 'সহনশীল কম্পিউট: ম্যানেজড ইনস্ট্যান্স গ্রুপ (MIG), হেলথ চেক এবং অটো-স্কেলিং',
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Global Networking, Serverless, and Secret Security',
        bn: 'ধাপ ২ — গ্লোবাল নেটওয়ার্কিং, সার্ভারলেস এবং সিক্রেট নিরাপত্তা',
      },
      items: [
        {
          en: 'Global VPC Networks: Regional Subnets, Shared VPC, Peering, and Private Google Access',
          bn: 'গ্লোবাল ভিপিসি নেটওয়ার্ক: রিজিয়নাল সাবনেট, শেয়ার্ড ভিপিসি, পিয়ারিং এবং প্রাইভেট গুগল অ্যাক্সেস',
        },
        {
          en: 'Serverless Functions: Cloud Functions 2nd Gen, Eventarc Triggers, and Cloud Run',
          bn: 'সার্ভারলেস ফাংশন: ক্লাউড ফাংশন ২য় প্রজন্ম, ইভেন্টআর্ক ট্রিগার এবং ক্লাউড রান',
        },
        {
          en: 'Cloud IAM Governance: Principals, Predefined Roles, and Service Account Impersonation',
          bn: 'ক্লাউড আইএএম গভর্নেন্স: প্রিন্সিপাল, প্রিডিফাইন্ড রোল এবং সার্ভিস অ্যাকাউন্ট ইমপার্সোনেশন',
        },
        {
          en: 'Cloud Security & Secrets: Secret Manager, Cloud KMS Keys, and Security Command Center',
          bn: 'ক্লাউড সিকিউরিটি ও সিক্রেট: সিক্রেট ম্যানেজার, ক্লাউড কেএমএস কি এবং সিকিউরিটি কমান্ড সেন্টার',
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Infrastructure as Code, CI/CD, and Observability',
        bn: 'ধাপ ৩ — কোড হিসেবে পরিকাঠামো, সিআই/সিডি এবং অবসার্ভেবিলিটি',
      },
      items: [
        {
          en: 'Terraform Automation: Google Cloud Provider, State Locking, and Declarative Resources',
          bn: 'টেরাফর্ম অটোমেশন: গুগল ক্লাউড প্রোভাইডার, স্টেট লকিং এবং ডিক্লোরেটিভ রিসোর্স',
        },
        {
          en: 'Cloud Build CI/CD: Automated Build Triggers, Container Artifacts, and Deployments',
          bn: 'ক্লাউড বিল্ড সিআই/সিডি: স্বয়ংক্রিয় বিল্ড ট্রিগার, কন্টেইনার আর্টিফ্যাক্ট এবং ডেপ্লয়মেন্ট',
        },
        {
          en: 'Cloud Operations: Cloud Monitoring Metrics, Log Analytics, and Alert Policies',
          bn: 'ক্লাউড অপারেশনস: ক্লাউড মনিটরিং মেট্রিক্স, লগ অ্যানালিটিক্স এবং অ্যালার্ট পলিসি',
        },
      ],
    },
  ],
  lessons: [
    ProjectsAndTheProjectLesson,
    BucketsAndTheBucketLesson,
    ComputesAndTheComputeLesson,
    FunctionsAndTheFunctionLesson,
    NetworksAndTheNetworkLesson,
    IamsAndTheIamLesson,
    VaultsAndTheVaultLesson,
    TheGcpReleaseLesson,
  ],
  projects: [
    {
      title: {
        en: 'Multi-Region High Availability Web Fleet with Global VPC and Managed Instance Groups',
        bn: 'গ্লোবাল ভিপিসি এবং ম্যানেজড ইনস্ট্যান্স গ্রুপ সহ মাল্টি-রিজিয়ন হাই অ্যাভেইলেবিলিটি ওয়েব ফ্লিট',
      },
      brief: {
        en: 'Architect a global web application using Google Cloud External Application Load Balancers distributing traffic across regional Managed Instance Groups with auto-healing and Cloud NAT.',
        bn: 'স্বয়ংক্রিয় রিকভারি এবং ক্লাউড ন্যাট সহ রিজিয়নাল ম্যানেজড ইনস্ট্যান্স গ্রুপে ট্রাফিক বণ্টনকারী এক্সটার্নাল অ্যাপ্লিকেশন লোড ব্যালেন্সার আর্কিটেকচার তৈরি করুন।',
      },
    },
    {
      title: {
        en: 'Event-Driven Media Processing Pipeline with Cloud Storage and Cloud Functions',
        bn: 'ক্লাউড স্টোরেজ এবং ক্লাউড ফাংশন সহ ইভেন্ট-ড্রিভেন মিডিয়া প্রসেসিং পাইপলাইন',
      },
      brief: {
        en: 'Build an automated pipeline that processes media uploads in Cloud Storage via Eventarc triggers and Cloud Functions 2nd Gen, storing metadata in Firestore with zero server management.',
        bn: 'ক্লাউড স্টোরেজে ফাইল আপলোডের সাথে সাথে ইভেন্টআর্ক ট্রিগার ও ক্লাউড ফাংশনের মাধ্যমে মিডিয়া প্রসেস করে ফায়ারস্টোরে মেটাডাটা সংরক্ষণকারী স্বয়ংক্রিয় পাইপলাইন তৈরি করুন।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Organize cloud resources under a standardized Organization and Folder hierarchy to separate billing and administrative environments.',
      bn: 'বিলিং এবং প্রশাসনিক পরিবেশ পৃথক রাখতে মানসম্মত অর্গানাইজেশন ও ফোল্ডার কাঠামোর অধীনে ক্লাউড রিসোর্স সংগঠিত করুন।',
    },
    {
      en: 'Enforce Uniform Bucket-Level Access on Google Cloud Storage buckets to consolidate access management under Cloud IAM instead of legacy ACLs.',
      bn: 'পুরনো এসিএলের বদলে ক্লাউড আইএএম দ্বারা সমন্বিত প্রবেশাধিকার নিশ্চিত করতে ক্লাউড স্টোরেজ বাকেটে ইউনিফর্ম বাকেট-লেভেল অ্যাক্সেস প্রয়োগ করুন।',
    },
    {
      en: 'Deploy compute workloads within regional Managed Instance Groups (MIGs) across at least three availability zones with automated health checks for high availability.',
      bn: 'উচ্চ প্রাপ্যতা নিশ্চিত করতে স্বয়ংক্রিয় হেলথ চেক সহ অন্তত তিনটি অ্যাভেইলেবিলিটি জোনে রিজিয়নাল ম্যানেজড ইনস্ট্যান্স গ্রুপের (MIG) মধ্যে কম্পিউট ওয়ার্কলোড চালান।',
    },
    {
      en: 'Apply the principle of least privilege by granting fine-grained Predefined IAM roles rather than broad Primitive roles (Owner, Editor, Viewer).',
      bn: 'ব্যাপক প্রিমিটিভ রোলের (ওনার, এডিটর, ভিউয়ার) বদলে সুনির্দিষ্ট প্রিডিফাইন্ড আইএএম রোল বরাদ্দ করে সর্বনিম্ন অধিকারের নীতি নিশ্চিত করুন।',
    },
    {
      en: 'Eliminate hardcoded database passwords by retrieving secrets dynamically at runtime from Google Cloud Secret Manager using Workload Identity Federation.',
      bn: 'ওয়ার্কলোড আইডেন্টিটি ফেডারেশন ব্যবহার করে রানটাইমে গুগল ক্লাউড সিক্রেট ম্যানেজার থেকে তথ্য নিয়ে কোড থেকে পাসওয়ার্ডের ঝুঁকি দূর করুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the operational difference between a Google Cloud Project ID, Project Number, and Project Name?',
        bn: 'গুগল ক্লাউড প্রজেক্ট আইডি, প্রজেক্ট নম্বর এবং প্রজেক্ট নামের মধ্যে পরিচালনগত পার্থক্য কী?',
      },
      a: {
        en: 'Project ID is a globally unique user-chosen string used in CLI commands and APIs (immutable). Project Number is a globally unique system-assigned integer used internally by Google services. Project Name is a mutable, non-unique display label for human identification.',
        bn: 'প্রজেক্ট আইডি হলো বিশ্বজুড়ে অনন্য ব্যবহারকারীর নির্বাচিত নাম যা সিএলআই এবং এপিআইতে ব্যবহৃত হয় (অপরিবর্তনশীল)। প্রজেক্ট নম্বর হলো গুগলের দেওয়া অনন্য সংখ্যা। আর প্রজেক্ট নেম হলো কেবল চেনার জন্য মানুষের দেওয়া পরিবর্তনশীল লেবেল।',
      },
    },
    {
      q: {
        en: 'How does Google Cloud Global VPC architecture fundamentally differ from virtual networks in other cloud providers?',
        bn: 'অন্যান্য ক্লাউড প্রোভাইডারের ভার্চুয়াল নেটওয়ার্কের তুলনায় গুগল ক্লাউডের গ্লোবাল ভিপিসি আর্কিটেকচার কীভাবে আলাদা?',
      },
      a: {
        en: 'In Google Cloud, a VPC is a global construct spanning all worldwide regions. Subnets are regional resources carved out of the global VPC. Compute instances in different continents on the same VPC communicate privately over Google internal fiber backbone without needing VPNs or peering.',
        bn: 'গুগল ক্লাউডে ভিপিসি হলো বিশ্বব্যাপী বিস্তৃত একটি একক নেটওয়ার্ক। সাবনেটগুলো নির্দিষ্ট অঞ্চলের অধীনে তৈরি হয়। একই ভিপিসির বিভিন্ন মহাদেশের সার্ভারগুলো কোনো ভিপিএন বা পিয়ারিং ছাড়াই সরাসরি গুগলের নিজস্ব ফাইবার নেটওয়ার্কে ব্যক্তিগতভাবে যোগাযোগ করতে পারে।',
      },
    },
    {
      q: {
        en: 'What are the access patterns and cost trade-offs between Cloud Storage Standard, Nearline, Coldline, and Archive classes?',
        bn: 'ক্লাউড স্টোরেজের স্ট্যান্ডার্ড, নিয়ারলাইন, কোল্ডলাইন এবং আর্কাইভ ক্লাসের মধ্যে ব্যবহারের ধরন ও খরচের পার্থক্য কী?',
      },
      a: {
        en: 'Standard has high storage costs but zero retrieval fees for hot data. Nearline (once a month) and Coldline (once a quarter) offer lower storage fees with modest retrieval fees. Archive (less than once a year) offers rock-bottom storage pricing with high retrieval costs and a 365-day minimum storage duration.',
        bn: 'স্ট্যান্ডার্ডে স্টোরেজ খরচ বেশি কিন্তু ডেটা পড়ার কোনো ফি নেই। নিয়ারলাইন (মাসে একবার) ও কোল্ডলাইনে (ত্রৈমাসিকে একবার) স্টোরেজ খরচ কম কিন্তু রিড ফি আছে। আর্কাইভে (বছরে একবারেরও কম) স্টোরেজ খরচ সবচেয়ে কম হলেও রিড খরচ বেশি এবং ৩৬৫ দিনের ন্যূনতম স্টোরেজ বাধ্যবাধকতা থাকে।',
      },
    },
    {
      q: {
        en: 'What is the security difference between Google Cloud Primitive Roles and Predefined Roles in Cloud IAM?',
        bn: 'ক্লাউড আইএএমে গুগল ক্লাউড প্রিমিটিভ রোল এবং প্রিডিফাইন্ড রোলের মধ্যে নিরাপত্তার পার্থক্য কী?',
      },
      a: {
        en: 'Primitive roles (Owner, Editor, Viewer) grant broad, sweeping permissions across all services in a project, violating least privilege. Predefined roles provide granular, service-specific permissions (such as Storage Object Viewer or Compute Network Admin) curated by Google for secure operational duties.',
        bn: 'প্রিমিটিভ রোল (ওনার, এডিটর, ভিউয়ার) একটি প্রজেক্টের সমস্ত সার্ভিসের ওপর অতিরিক্ত ক্ষমতা দেয় যা নিরাপত্তার নীতি ভঙ্গ করে। অন্যদিকে প্রিডিফাইন্ড রোল গুগলের তৈরি সুনির্দিষ্ট কাজের উপযোগী সীমিত ও নিরাপদ ক্ষমতা প্রদান করে।',
      },
    },
  ],
  realWorld: [
    {
      en: 'Spotify migrated its massive music catalog, recommendations engine, and streaming infrastructure to Google Cloud, running BigQuery and Compute Engine for hundreds of millions of active listeners.',
      bn: 'স্পটিফাই তাদের সঙ্গীত ক্যাটালগ ও স্ট্রিমিং অবকাঠামো গুগল ক্লাউডে স্থানান্তর করে, যেখানে লাখ লাখ ব্যবহারকারীকে সেবা দিতে বিগকোয়েরি এবং কম্পিউট ইঞ্জিন ব্যবহৃত হয়।',
    },
    {
      en: 'PayPal leverages Google Cloud to process billions of secure digital transactions with automated elasticity and real-time fraud detection.',
      bn: 'পেপ্যাল বিলিয়ন বিলিয়ন ডিজিটাল লেনদেন ও জালিয়াতি প্রতিরোধে গুগল ক্লাউডের অটোমেটেড স্কেলিং প্ল্যাটফর্ম ব্যবহার করে।',
    },
    {
      en: 'The Home Depot modernized its retail supply chain and inventory platform on Google Cloud using Kubernetes, Cloud Storage, and Cloud Monitoring.',
      bn: 'হোম ডিপো তাদের রিটেইল সাপ্লাই চেইন ও ইনভেন্টরি ম্যানেজমেন্ট আধুনিকায়নে গুগল ক্লাউড কিউবারনেটিস, ক্লাউড স্টোরেজ ও মনিটরিং ব্যবহার করে।',
    },
  ],
};
