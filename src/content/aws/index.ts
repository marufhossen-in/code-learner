import type { Hub } from '../../lib/types';
import { RegionsAndTheRegionLesson } from './lessons/regions-and-the-region';
import { InstancesAndTheInstanceLesson } from './lessons/instances-and-the-instance';
import { BucketsAndTheBucketLesson } from './lessons/buckets-and-the-bucket';
import { QueuesAndTheQueueLesson } from './lessons/queues-and-the-queue';
import { LambdasAndTheLambdaLesson } from './lessons/lambdas-and-the-lambda';
import { VpcsAndTheVpcLesson } from './lessons/vpcs-and-the-vpc';
import { IamsAndTheIamLesson } from './lessons/iams-and-the-iam';
import { TheAwsReleaseLesson } from './lessons/the-aws-release';

export const awsHub: Hub = {
  slug: 'aws',
  name: 'Amazon Web Services (AWS)',
  icon: '🟠',
  tagline: {
    en: 'Master Amazon Web Services: compute with EC2, storage with S3, serverless Lambda, VPC networking, IAM security, and resilient cloud architecture.',
    bn: 'আমাজন ওয়েব সার্ভিসেস আয়ত্ত করুন: EC2 কম্পিউট, S3 অবজেক্ট স্টোরেজ, সার্ভারলেস ল্যাম্বডা, VPC নেটওয়ার্কিং, IAM নিরাপত্তা এবং আধুনিক ক্লাউড আর্কিটেকচার।',
  },
  intro: {
    en: 'Amazon Web Services (AWS) is the world\x27s most widely adopted cloud platform, offering over 200 fully featured services from datacenters globally. This track takes you from the core global infrastructure of Regions and Availability Zones to deploying production-grade compute on EC2, scalable object storage with S3, event-driven serverless architectures with Lambda, private cloud networking via VPCs, and Zero Trust security using IAM policies.',
    bn: 'আমাজন ওয়েব সার্ভিসেস (AWS) হলো বিশ্বের সর্বাধিক ব্যবহৃত ক্লাউড প্ল্যাটফর্ম, যা বিশ্বজুড়ে ডেটা সেন্টার থেকে ২০০ টিরও বেশি পূর্ণাঙ্গ সেবা প্রদান করে। এই ট্র্যাকটি আপনাকে রিজিওন ও অ্যাভেইলেবিলিটি জোনের বৈশ্বিক পরিকাঠামো থেকে শুরু করে EC2-তে কম্পিউট স্থাপন, S3-তে স্কেলেবল অবজেক্ট স্টোরেজ, ল্যাম্বডায় সার্ভারলেস ইভেন্ট-ড্রিভেন আর্কিটেকচার, VPC-এর মাধ্যমে সুরক্ষিত প্রাইভেট ক্লাউড নেটওয়ার্কিং এবং IAM পলিসি দ্বারা জিরো ট্রাস্ট নিরাপত্তা বাস্তবায়নের পূর্ণাঙ্গ পথ দেখাবে।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Global Infrastructure, Virtual Compute, and Scalable Storage',
        bn: 'ধাপ ১ — বৈশ্বিক পরিকাঠামো, ভার্চুয়াল কম্পিউট এবং স্কেলেবল স্টোরেজ',
      },
      items: [
        {
          en: 'AWS Global Infrastructure: Regions, Availability Zones, Local Zones, and Edge PoPs',
          bn: 'এডাব্লিউএস বৈশ্বিক পরিকাঠামো: রিজিওন, অ্যাভেইলেবিলিটি জোন, লোকাল জোন এবং এজ PoP',
        },
        {
          en: 'Amazon EC2: Virtual Machine Families, AMI Images, EBS Volumes, and Auto Scaling',
          bn: 'আমাজন EC2: ভার্চুয়াল মেশিন পরিবার, AMI ইমেজ, EBS ভলিউম এবং অটো স্কেলিং',
        },
        {
          en: 'Amazon S3: Storage Classes, Lifecycle Policies, Versioning, and Bucket Security',
          bn: 'আমাজন S3: স্টোরেজ শ্রেণিবিভাগ, লাইফসাইকেল নীতি, ভার্সনিং এবং বাকেট নিরাপত্তা',
        },
        {
          en: 'Decoupled Messaging: Amazon SQS Queue Buffering and Amazon SNS Pub/Sub Fanout',
          bn: 'ডিকাপল্ড মেসেজিং: আমাজন SQS কিউ বাফারিং এবং আমাজন SNS পাব/সাব ফ্যানআউট',
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Serverless Computing, Isolated Networking, and Zero-Trust IAM',
        bn: 'ধাপ ২ — সার্ভারলেস কম্পিউটিং, আইসোলেটেড নেটওয়ার্কিং এবং জিরো-ট্রাস্ট IAM',
      },
      items: [
        {
          en: 'AWS Lambda: Event-Driven Serverless Compute, Cold Starts, and Concurrency',
          bn: 'এডাব্লিউএস ল্যাম্বডা: ইভেন্ট-ড্রিভেন সার্ভারলেস কম্পিউট, কোল্ড স্টার্ট এবং কনকারেন্সি',
        },
        {
          en: 'Amazon VPC: Custom Subnets, Internet Gateways, NAT Gateways, and Security Groups',
          bn: 'আমাজন VPC: কাস্টম সাবনেট, ইন্টারনেট গেটওয়ে, NAT গেটওয়ে এবং সিকিউরিটি গ্রুপ',
        },
        {
          en: 'AWS IAM: Principals, Least Privilege Policies, STS AssumeRole, and Guardrails',
          bn: 'এডাব্লিউএস IAM: প্রিন্সিপাল, সর্বনিম্ন সুবিধার নীতি, STS AssumeRole এবং গার্ডরেইল',
        },
        {
          en: 'Database Services: Amazon RDS Multi-AZ Relational Clusters and DynamoDB NoSQL',
          bn: 'ডেটাবেজ সার্ভিস: আমাজন RDS মাল্টি-এজেড রিলেশনাল ক্লাস্টার এবং ডায়নামোডিবি NoSQL',
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Enterprise Architecture, Observability, and Production Release',
        bn: 'ধাপ ৩ — এন্টারপ্রাইজ আর্কিটেকচার, অবসার্ভেবিলিটি এবং প্রোডাকশন রিলিজ',
      },
      items: [
        {
          en: 'Production Architecture: Application Load Balancers, Route 53, and Multi-AZ Resilience',
          bn: 'প্রোডাকশন আর্কিটেকচার: অ্যাপ্লিকেশন লোড ব্যালেন্সার, রুট ৫৩ এবং মাল্টি-এজেড স্থিতিস্থাপকতা',
        },
        {
          en: 'Full-Stack Observability: CloudWatch Metrics, Alarms, Logs Insights, and X-Ray Tracing',
          bn: 'ফুল-স্ট্যাক অবসার্ভেবিলিটি: ক্লাউডওয়াচ মেট্রিক্স, অ্যালার্ম, লগস ইনসাইটস এবং এক্স-রে ট্রেসিং',
        },
        {
          en: 'AWS Well-Architected Framework: Reliability, Performance, and FinOps Cost Governance',
          bn: 'এডাব্লিউএস ওয়েল-আর্কিটেক্টেড ফ্রেমওয়ার্ক: স্থিতিস্থাপকতা, পারফরম্যান্স এবং ফিনঅপস কস্ট গভর্নেন্স',
        },
      ],
    },
  ],
  lessons: [
    RegionsAndTheRegionLesson,
    InstancesAndTheInstanceLesson,
    BucketsAndTheBucketLesson,
    QueuesAndTheQueueLesson,
    LambdasAndTheLambdaLesson,
    VpcsAndTheVpcLesson,
    IamsAndTheIamLesson,
    TheAwsReleaseLesson,
  ],
  projects: [
    {
      title: {
        en: 'Multi-Tier Enterprise Web Application on AWS',
        bn: 'এডাব্লিউএস-এ মাল্টি-টিয়ার এন্টারপ্রাইজ ওয়েব পরিকাঠামো',
      },
      brief: {
        en: 'Design a resilient architecture across 2 Availability Zones with an Application Load Balancer, auto-scaling EC2 instances, and Amazon RDS Multi-AZ replication.',
        bn: 'অ্যাপ্লিকেশন লোড ব্যালেন্সার, অটো-স্কেলিং EC2 ইনস্ট্যান্স এবং আমাজন RDS মাল্টি-এজেড রেপ্লিকেশন সহ ২ টি অ্যাভেইলেবিলিটি জোন জুড়ে একটি স্থিতিস্থাপক আর্কিটেকচার ডিজাইন করুন।',
      },
    },
    {
      title: {
        en: 'Event-Driven Serverless Data Processing Pipeline',
        bn: 'ইভেন্ট-ড্রিভেন সার্ভারলেস ডাটা প্রসেসিং পাইপলাইন',
      },
      brief: {
        en: 'Build an automated pipeline where S3 image uploads publish notifications to SQS queues, consumed by AWS Lambda functions writing metadata to DynamoDB.',
        bn: 'একটি স্বয়ংক্রিয় পাইপলাইন তৈরি করুন যেখানে S3-তে আপলোড করা ইমেজ SQS কিউতে বিজ্ঞপ্তি পাঠায়, যা ল্যাম্বডা ফাংশন দ্বারা প্রসেস হয়ে ডায়নামোডিবিতে মেটাডাটা সংরক্ষণ করে।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Never use the AWS root account for daily operations; enforce hardware MFA and create scoped IAM roles.',
      bn: 'দৈনন্দিন কাজের জন্য কখনোই এডাব্লিউএস রুট অ্যাকাউন্ট ব্যবহার করবেন না; হার্ডওয়্যার MFA বাধ্যতামূলক করুন এবং সুনির্দিষ্ট IAM রোল তৈরি করুন।',
    },
    {
      en: 'Deploy application workloads across a minimum of 2 Availability Zones behind an Application Load Balancer to guarantee high availability.',
      bn: 'উচ্চ প্রাপ্যতা নিশ্চিত করতে একটি অ্যাপ্লিকেশন লোড ব্যালেন্সারের পেছনে কমপক্ষে ২ টি অ্যাভেইলেবিলিটি জোন জুড়ে অ্যাপ্লিকেশন স্থাপন করুন।',
    },
    {
      en: 'Decouple synchronous service communication using Amazon SQS and SNS to absorb traffic spikes and isolate outages.',
      bn: 'ট্রাফিকের আকস্মিক চাপ সামলাতে এবং ত্রুটি আলাদা রাখতে আমাজন SQS ও SNS ব্যবহার করে সিঙ্ক্রোনাস যোগাযোগ বিচ্ছিন্ন করুন।',
    },
    {
      en: 'Implement S3 Lifecycle policies to transition aged object data to Glacier or Deep Archive, slashing storage costs.',
      bn: 'স্টোরেজ খরচ নাটকীয়ভাবে কমাতে পুরনো অবজেক্ট ডেটা গ্লেসিয়ার বা ডিপ আর্কাইভে রূপান্তর করতে S3 লাইফসাইকেল নিয়ম প্রয়োগ করুন।',
    },
    {
      en: 'Leverage CloudWatch alarms and AWS Cost Explorer anomaly detection to intercept unexpected infrastructure spend.',
      bn: 'অপ্রত্যাশিত পরিকাঠামো খরচ প্রতিরোধ করতে ক্লাউডওয়াচ অ্যালার্ম এবং এডাব্লিউএস কস্ট এক্সপ্লোরার অ্যানোমালি ডিটেকশন সক্রিয় রাখুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the operational difference between Security Groups and Network ACLs in Amazon VPC?',
        bn: 'আমাজন ভিপিসিতে সিকিউরিটি গ্রুপ এবং নেটওয়ার্ক এসিএল-এর মধ্যে পরিচালনগত পার্থক্য কী?',
      },
      a: {
        en: 'Security Groups are stateful firewalls operating at the instance virtual interface level, automatically allowing return traffic. Network ACLs are stateless firewalls operating at the subnet boundary, requiring explicit inbound and outbound permit rules.',
        bn: 'সিকিউরিটি গ্রুপ হলো ইনস্ট্যান্সের ভার্চুয়াল ইন্টারফেস স্তরে পরিচালিত স্টেটফুল ফায়ারওয়াল, যা স্বয়ংক্রিয়ভাবে রিটার্ন ট্রাফিক অনুমতি দেয়। অন্যদিকে নেটওয়ার্ক এসিএল হলো সাবনেট সীমানায় পরিচালিত স্টেটলেস ফায়ারওয়াল, যেখানে ইনবাউন্ড ও আউটবাউন্ড উভয় ট্রাফিকের জন্য স্পষ্ট অনুমতির নিয়ম প্রয়োজন হয়।',
      },
    },
    {
      q: {
        en: 'How does AWS Lambda manage execution environments, and how does Provisioned Concurrency eliminate cold starts?',
        bn: 'এডাব্লিউএস ল্যাম্বডা কীভাবে এক্সিকিউশন এনভায়রনমেন্ট পরিচালনা করে এবং প্রভিশনড কনকারেন্সি কীভাবে কোল্ড স্টার্ট দূর করে?',
      },
      a: {
        en: 'Lambda initializes a sandboxed container on the first request, incurring cold start latency while downloading code and bootstrapping runtimes. Provisioned Concurrency pre-warms dedicated execution environments, ensuring instant invocation with double-digit millisecond latency.',
        bn: 'ল্যাম্বডা প্রথম অনুরোধে কোড ডাউনলোড এবং রানটাইম বুটস্ট্র্যাপ করার সময় স্যান্ডবক্সড কন্টেইনার তৈরি করে, যা কোল্ড স্টার্ট বিলম্ব ঘটায়। প্রভিশনড কনকারেন্সি পূর্ব থেকেই প্রস্তুত এক্সিকিউশন এনভায়রনমেন্ট চালু রাখে, ফলে তাৎক্ষণিকভাবে দুই অঙ্কের মিলি-সেকেন্ড লেটেন্সিতে কোড কার্যকর হয়।',
      },
    },
    {
      q: {
        en: 'What are the trade-offs between Amazon S3 Standard, S3 Standard-IA, and S3 Glacier Flexible Retrieval?',
        bn: 'আমাজন S3 স্ট্যান্ডার্ড, S3 স্ট্যান্ডার্ড-আইএ এবং S3 গ্লেসিয়ার ফ্লেক্সিবল রিট্রিভালের মধ্যে মূল পার্থক্য ও ট্রেড-অফ কী?',
      },
      a: {
        en: 'S3 Standard has the highest storage cost with zero retrieval fees for frequent access. Standard-IA offers lower storage fees but charges per-gigabyte retrieval for infrequent access. Glacier provides ultra-low storage fees for archives but requires minutes to hours for data retrieval.',
        bn: 'S3 স্ট্যান্ডার্ডে প্রতিনিয়ত ব্যবহারের জন্য কোনো রিট্রিভাল ফি নেই তবে স্টোরেজ খরচ বেশি। স্ট্যান্ডার্ড-আইএ কম স্টোরেজ ফি দেয় কিন্তু প্রতি গিগাবাইট রিট্রিভালে ফি কাটে। গ্লেসিয়ার দীর্ঘমেয়াদী আর্কাইভের জন্য অত্যন্ত কম স্টোরেজ খরচ দেয়, তবে তথ্য পুনরুদ্ধারে কয়েক মিনিট থেকে কয়েক ঘণ্টা সময় প্রয়োজন হয়।',
      },
    },
    {
      q: {
        en: 'How does the AWS IAM policy evaluation engine resolve conflicting Allow and Deny permissions?',
        bn: 'এডাব্লিউএস আইএএম পলিসি ইঞ্জিন কীভাবে একাধিক অনুমোদনের মধ্যে বিরোধের সমাধান করে?',
      },
      a: {
        en: 'IAM evaluation begins with a default implicit deny. If any applicable policy contains an explicit Deny, access is immediately blocked regardless of any Allow statements. An action is permitted only when an explicit Allow exists and no explicit Deny applies.',
        bn: 'আইএএম মূল্যায়ন একটি ডিফল্ট অস্বীকৃতি দিয়ে শুরু হয়। কোনো প্রযোজ্য পলিসিতে স্পষ্ট অস্বীকৃতি (Explicit Deny) থাকলে, অন্য সব অনুমোদন সত্ত্বেও অ্যাক্সেস তৎক্ষণাৎ বাতিল হয়। কেবল তখনই অ্যাক্সেস অনুমোদিত হয় যখন একটি স্পষ্ট অনুমোদন থাকে এবং কোনো অস্বীকৃতি না থাকে।',
      },
    },
  ],
  realWorld: [
    {
      en: 'Airbnb migrated their entire cloud estate to AWS, utilizing dynamic EC2 autoscaling across multiple Availability Zones and Amazon RDS Multi-AZ to support millions of concurrent bookings.',
      bn: 'এয়ারবিএনবি তাদের সম্পূর্ণ ক্লাউড সিস্টেম এডাব্লিউএস-এ স্থানান্তরিত করেছে, যেখানে লাখ লাখ বুকিং সামলাতে একাধিক অ্যাভেইলেবিলিটি জোন জুড়ে ডায়নামিক EC2 অটো-স্কেলিং এবং আমাজন RDS মাল্টি-এজেড ব্যবহার করা হয়।',
    },
    {
      en: 'Prime Video processes millions of video transcoding and catalog metadata events using Amazon SQS queues and asynchronous AWS Lambda workers, eliminating streaming playback bottlenecks.',
      bn: 'প্রাইম ভিডিও আমাজন SQS কিউ এবং অসিঙ্ক্রোনাস এডাব্লিউএস ল্যাম্বডা ব্যবহার করে লাখ লাখ ভিডিও ট্রান্সকোডিং ও মেটাডাটা ইভেন্ট প্রক্রিয়া করে, যা স্ট্রিমিংয়ে কোনো ধীরগতি হতে দেয় না।',
    },
    {
      en: 'Epic Games scales backend infrastructure across AWS global regions to serve over 100 million players concurrently with sub-second matchmaking.',
      bn: 'এপিক গেমস বিশ্বজুড়ে খেলোয়াড়দের নিরবচ্ছিন্ন অভিজ্ঞতা দিতে এডাব্লিউএস গ্লোবাল রিজিওন জুড়ে পরিকাঠামো পরিচালনা করে যা একযোগে ১০০ মিলিয়নের বেশি খেলোয়াড়কে সেবা দেয়।',
    },
  ],
};
