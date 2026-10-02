import type { Hub } from '../../lib/types';
import { SubscriptionsAndTheSubscriptionLesson } from './lessons/subscriptions-and-the-subscription';
import { GroupsAndTheGroupLesson } from './lessons/groups-and-the-group';
import { VnetsAndTheVnetLesson } from './lessons/vnets-and-the-vnet';
import { AppsAndTheAppLesson } from './lessons/apps-and-the-app';
import { BlobsAndTheBlobLesson } from './lessons/blobs-and-the-blob';
import { FunctionsAndTheFunctionLesson } from './lessons/functions-and-the-function';
import { EntrasAndTheEntraLesson } from './lessons/entras-and-the-entra';
import { TheAzureReleaseLesson } from './lessons/the-azure-release';

export const azureHub: Hub = {
  slug: 'azure',
  name: 'Microsoft Azure',
  icon: '🔵',
  tagline: {
    en: 'Master Microsoft Azure: enterprise cloud governance, App Services, Blob storage, serverless Functions, VNet security, Entra ID, and Bicep automation.',
    bn: 'মাইক্রোসফট অ্যাজিউর আয়ত্ত করুন: এন্টারপ্রাইজ ক্লাউড গভর্নেন্স, অ্যাপ সার্ভিস, ব্লব স্টোরেজ, সার্ভারলেস ফাংশন, VNet নিরাপত্তা, এন্ট্রা আইডি এবং বাইসেপ অটোমেশন।',
  },
  intro: {
    en: 'Microsoft Azure is a leading global enterprise hyperscale cloud platform powering mission-critical workloads across hundreds of datacenters. This curriculum guides you from foundational management groups and subscriptions to deploying resilient App Service web apps, tiered Blob storage, serverless event-driven Azure Functions, isolated VNets, zero-trust Microsoft Entra ID access control, and Infrastructure as Code with Bicep.',
    bn: 'মাইক্রোসফট অ্যাজিউর হলো বিশ্বসেরা এন্টারপ্রাইজ ক্লাউড প্ল্যাটফর্ম যা বিশ্বজুড়ে শত শত ডেটা সেন্টারে গুরুত্বপূর্ণ সিস্টেম পরিচালনা করে। এই কোর্সে আপনি ম্যানেজমেন্ট গ্রুপ ও সাবস্ক্রিপশন পরিকাঠামো থেকে শুরু করে অ্যাপ সার্ভিস ওয়েব অ্যাপ, স্তরিত ব্লব স্টোরেজ, সার্ভারলেস অ্যাজিউর ফাংশন, বিচ্ছিন্ন VNet নেটওয়ার্কিং, জিরো-ট্রাস্ট মাইক্রোসফট এন্ট্রা আইডি নিরাপত্তা এবং বাইসেপ দ্বারা কোড হিসেবে পরিকাঠামো স্থাপন শিখবেন।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Azure Foundations, Governance, and Virtual Networks',
        bn: 'ধাপ ১ — অ্যাজিউর পরিকাঠামো, গভর্নেন্স এবং ভার্চুয়াল নেটওয়ার্ক',
      },
      items: [
        {
          en: 'Management Hierarchy: Management Groups, Subscriptions, and Regional Datacenters',
          bn: 'ম্যানেজমেন্ট স্তরবিন্যাস: ম্যানেজমেন্ট গ্রুপ, সাবস্ক্রিপশন এবং রিজিওনাল ডেটা সেন্টার',
        },
        {
          en: 'Resource Governance: Azure Resource Groups, ARM Templates, Tags, Locks, and Policies',
          bn: 'রিসোর্স গভর্নেন্স: অ্যাজিউর রিসোর্স গ্রুপ, এআরএম টেমপ্লেট, ট্যাগ, লক এবং পলিসি',
        },
        {
          en: 'Virtual Networks: Azure VNet Subnetting, Network Security Groups (NSGs), and Peering',
          bn: 'ভার্চুয়াল নেটওয়ার্ক: অ্যাজিউর VNet সাবনেট, নেটওয়ার্ক সিকিউরিটি গ্রুপ (NSG) এবং পিয়ারিং',
        },
        {
          en: 'Private Connectivity: Azure Private Endpoints, Service Endpoints, and VPN Gateways',
          bn: 'প্রাইভেট কানেক্টিভিটি: অ্যাজিউর প্রাইভেট এন্ডপয়েন্ট, সার্ভিস এন্ডপয়েন্ট এবং ভিপিএন গেটওয়ে',
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Scalable Compute, Storage Tiers, and Serverless Architecture',
        bn: 'ধাপ ২ — স্কেলেবল কম্পিউট, স্টোরেজ টিয়ার এবং সার্ভারলেস আর্কিটেকচার',
      },
      items: [
        {
          en: 'Azure App Service: Managed Web Apps, App Service Plans, and Deployment Slots',
          bn: 'অ্যাজিউর অ্যাপ সার্ভিস: পরিচালিত ওয়েব অ্যাপ, অ্যাপ সার্ভিস প্ল্যান এবং ডিপ্লয়মেন্ট স্লট',
        },
        {
          en: 'Azure Blob Storage: Hot, Cool, Cold, and Archive Tiers with Lifecycle Management',
          bn: 'অ্যাজিউর ব্লব স্টোরেজ: হট, কুল, কোল্ড ও আর্কাইভ টিয়ার এবং লাইফসাইকেল অটোমেশন',
        },
        {
          en: 'Secure Data Access: Storage Account Access Keys, SAS Tokens, and Managed Identities',
          bn: 'নিরাপদ ডেটা অ্যাক্সেস: স্টোরেজ অ্যাকাউন্ট অ্যাক্সেস কি, এসএএস টোকেন এবং পরিচালিত পরিচয়',
        },
        {
          en: 'Serverless Compute: Azure Functions Event Triggers, Input/Output Bindings, and Plans',
          bn: 'সার্ভারলেস কম্পিউট: অ্যাজিউর ফাংশন ইভেন্ট ট্রিগার, ইনপুট/আউটপুট বাইন্ডিং এবং প্ল্যান',
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Enterprise Security, DevOps Pipelines, and Observability',
        bn: 'ধাপ ৩ — এন্টারপ্রাইজ নিরাপত্তা, ডেভঅপ্স পাইপলাইন এবং অবসার্ভেবিলিটি',
      },
      items: [
        {
          en: 'Identity Governance: Microsoft Entra ID (Azure AD), App Registrations, and Azure RBAC',
          bn: 'আইডেন্টিটি গভর্নেন্স: মাইক্রোসফট এন্ট্রা আইডি (Azure AD), অ্যাপ রেজিস্ট্রেশন এবং রোল-বেসড অ্যাক্সেস',
        },
        {
          en: 'Infrastructure as Code: Azure Bicep Modules, Deterministic Deployments, and CI/CD',
          bn: 'কোড হিসেবে পরিকাঠামো: অ্যাজিউর বাইসেপ মডিউল, নির্ধারিত ডিপ্লয়মেন্ট এবং সিআই/সিডি',
        },
        {
          en: 'Full-Stack Telemetry: Azure Monitor Metrics, Log Analytics Workspaces, and App Insights',
          bn: 'ফুল-স্ট্যাক টেলিমেট্রি: অ্যাজিউর মনিটর মেট্রিক্স, লগ অ্যানালিটিক্স ওয়ার্কস্পেস এবং অ্যাপ ইনসাইটস',
        },
      ],
    },
  ],
  lessons: [
    SubscriptionsAndTheSubscriptionLesson,
    GroupsAndTheGroupLesson,
    VnetsAndTheVnetLesson,
    AppsAndTheAppLesson,
    BlobsAndTheBlobLesson,
    FunctionsAndTheFunctionLesson,
    EntrasAndTheEntraLesson,
    TheAzureReleaseLesson,
  ],
  projects: [
    {
      title: {
        en: 'Multi-Tier Enterprise Web App with Azure VNet and App Service',
        bn: 'অ্যাজিউর VNet এবং অ্যাপ সার্ভিস সহ মাল্টি-টিয়ার এন্টারপ্রাইজ ওয়েব অ্যাপ্লিকেশন',
      },
      brief: {
        en: 'Architect a secure web system using Azure App Service with Regional VNet Integration connecting to private backend Azure SQL Databases via Private Endpoints.',
        bn: 'প্রাইভেট এন্ডপয়েন্টের মাধ্যমে ব্যাকএন্ড অ্যাজিউর এসকিউএল ডেটাবেজের সাথে সংযুক্ত রিজিয়নাল VNet ইন্টিগ্রেশন সহ সুরক্ষিত অ্যাপ সার্ভিস আর্কিটেকচার তৈরি করুন।',
      },
    },
    {
      title: {
        en: 'Event-Driven Serverless Pipeline with Blob Storage and Azure Functions',
        bn: 'ব্লব স্টোরেজ এবং অ্যাজিউর ফাংশন সহ ইভেন্ট-ড্রিভেন সার্ভারলেস পাইপলাইন',
      },
      brief: {
        en: 'Build an automated document ingestion workflow triggered by Azure Blob storage uploads, processing documents via Azure Functions and writing metadata to Cosmos DB.',
        bn: 'ব্লব স্টোরেজে আপলোড দ্বারা স্বয়ংক্রিয়ভাবে সক্রিয় হওয়া একটি ডকুমেন্ট প্রসেসিং সিস্টেম তৈরি করুন যা অ্যাজিউর ফাংশন ও কসমস ডিবিতে মেটাডাটা সংরক্ষণ করে।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Organize cloud resources using standardized hierarchical Management Groups and Subscriptions to isolate billing and governance boundaries.',
      bn: 'বিলিং এবং প্রশাসনিক সীমানা পৃথক রাখতে মানসম্মত শ্রেণীবদ্ধ ম্যানেজমেন্ট গ্রুপ ও সাবস্ক্রিপশন ব্যবহার করে ক্লাউড রিসোর্স সংগঠিত করুন।',
    },
    {
      en: 'Enforce Azure Resource Locks (ReadOnly or CanNotDelete) on critical production resource groups to prevent catastrophic accidental deletion.',
      bn: 'ভুলবশত গুরুত্বপূর্ণ সিস্টেম মুছে যাওয়া ঠেকাতে প্রোডাকশন রিসোর্স গ্রুপগুলোতে অ্যাজিউর রিসোর্স লক (ReadOnly বা CanNotDelete) প্রয়োগ করুন।',
    },
    {
      en: 'Eliminate hardcoded secrets in code by configuring Azure Key Vault references paired with system-assigned Managed Identities on App Services and Functions.',
      bn: 'অ্যাপ সার্ভিস ও ফাংশনে সিস্টেম-অ্যাসাইনড ম্যানেজড আইডেন্টিটি এবং অ্যাজিউর কি-ভল্ট রেফারেন্স ব্যবহারের মাধ্যমে কোড থেকে স্থায়ী পাসওয়ার্ড পুরোপুরি দূর করুন।',
    },
    {
      en: 'Implement automated Blob Lifecycle Management policies to transition aged media files from Hot to Cool, Cold, and Archive tiers, optimizing storage spend.',
      bn: 'স্টোরেজ খরচ অপ্টিমাইজ করতে লাইফসাইকেল ম্যানেজমেন্টের মাধ্যমে পুরনো ফাইলগুলো হট থেকে কুল, কোল্ড ও আর্কাইভ টিয়ারে রূপান্তর করুন।',
    },
    {
      en: 'Utilize Azure App Service Deployment Slots for zero-downtime blue/green staging swaps with warm-up testing before routing production user traffic.',
      bn: 'ব্যবহারকারীদের ট্রাফিক পাঠানোর আগে ওয়ার্ম-আপ টেস্টিং এবং শূন্য ডাউনটাইমে ব্লু/গ্রিন সোয়াপ নিশ্চিত করতে ডিপ্লয়মেন্ট স্লট ব্যবহার করুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the operational distinction between Azure Subscriptions, Resource Groups, and Management Groups?',
        bn: 'অ্যাজিউর সাবস্ক্রিপশন, রিসোর্স গ্রুপ এবং ম্যানেজমেন্ট গ্রুপের মধ্যে পরিচালনগত পার্থক্য কী?',
      },
      a: {
        en: 'Management Groups organize multiple subscriptions to apply broad governance policies. A Subscription serves as a billing and quota boundary. Resource Groups act as logical containers for deploying, managing, and monitoring closely coupled Azure services sharing a unified lifecycle.',
        bn: 'ম্যানেজমেন্ট গ্রুপ একাধিক সাবস্ক্রিপশনে সামগ্রিক নীতিমালা প্রয়োগ করে। সাবস্ক্রিপশন বিলিং ও কোটার সীমানা নির্ধারণ করে। আর রিসোর্স গ্রুপ হলো একটি নির্দিষ্ট প্রজেক্ট বা লাইফসাইকেল ভাগ করে নেওয়া সম্পর্কিত সেবাগুলোর লজিক্যাল কন্টেইনার।',
      },
    },
    {
      q: {
        en: 'How does Azure App Service Deployment Slot swapping achieve zero downtime during application upgrades?',
        bn: 'অ্যাপ্লিকেশন আপগ্রেডের সময় অ্যাজিউর অ্যাপ সার্ভিস ডিপ্লয়মেন্ট স্লট সোয়াপ কীভাবে শূন্য ডাউনটাইম নিশ্চিত করে?',
      },
      a: {
        en: 'Deployment slots are live apps with their own hostnames. When swapping staging to production, Azure pre-warms the staging instance with health checks, executes traffic routing transitions at the virtual load balancer level, and swaps IP endpoints instantly without dropping active requests.',
        bn: 'ডিপ্লয়মেন্ট স্লট হলো নিজস্ব হোস্টনেম সহ পৃথক লাইভ অ্যাপ। স্টেজ থেকে প্রোডাকশনে সোয়াপ করার সময় অ্যাজিউর নতুন ইনস্ট্যান্সকে আগে ওয়ার্ম-আপ করে এবং ভার্চুয়াল লোড ব্যালেন্সারে তাৎক্ষণিকভাবে ট্রাফিক পরিবর্তন করে ফলে কোনো ডাউনটাইম হয় না।',
      },
    },
    {
      q: {
        en: 'What are the access patterns and cost trade-offs between Azure Blob Storage Hot, Cool, Cold, and Archive tiers?',
        bn: 'অ্যাজিউর ব্লব স্টোরেজের হট, কুল, কোল্ড এবং আর্কাইভ টিয়ারের মধ্যে ব্যবহারের ধরন ও খরচের পার্থক্য কী?',
      },
      a: {
        en: 'Hot tier has the highest storage cost with the lowest access cost for active data. Cool and Cold tiers offer lower storage rates but higher retrieval fees for infrequent access. Archive tier offers ultra-cheap long-term storage but requires several hours of rehydration before data can be read.',
        bn: 'হট টিয়ারে স্টোরেজ খরচ বেশি কিন্তু রিড খরচ সবচেয়ে কম। কুল ও কোল্ড টিয়ারে স্টোরেজ খরচ কম হলেও ডাটা পড়ার খরচ বেশি। আর্কাইভ টিয়ার দীর্ঘমেয়াদী স্টোরেজের জন্য সবচেয়ে সাশ্রয়ী, তবে ডাটা রিহাইড্রেট করে পড়তে কয়েক ঘণ্টা সময় প্রয়োজন হয়।',
      },
    },
    {
      q: {
        en: 'How do System-Assigned and User-Assigned Managed Identities enhance security in Microsoft Entra ID over service principal secrets?',
        bn: 'সার্ভিস প্রিন্সিপাল পাসওয়ার্ডের তুলনায় সিস্টেম-অ্যাসাইনড এবং ইউজার-অ্যাসাইনড ম্যানেজড আইডেন্টিটি কীভাবে এন্ট্রা আইডি নিরাপত্তা বৃদ্ধি করে?',
      },
      a: {
        en: 'Managed Identities eliminate hardcoded credentials entirely. Azure automatically provisions an identity in Microsoft Entra ID tied directly to the resource lifecycle and rotates authentication tokens transparently through Azure Instance Metadata Service (IMDS).',
        bn: 'ম্যানেজড আইডেন্টিটি কোডে পাসওয়ার্ড রাখার প্রয়োজনীয়তা সম্পূর্ণ দূর করে। অ্যাজিউর স্বয়ংক্রিয়ভাবে এন্ট্রা আইডিতে সংশ্লিষ্ট রিসোর্সের সাথে যুক্ত একটি আইডেন্টিটি তৈরি করে এবং মেটাডাটা সেবার মাধ্যমে টোকেন আবর্তন পরিচালনা করে।',
      },
    },
  ],
  realWorld: [
    {
      en: 'LinkedIn runs core enterprise services across Azure infrastructure, orchestrating scalable App Services, Azure Blob Storage, and Azure Monitor to maintain ultra-low latency for 900+ million global members.',
      bn: 'লিংকডইন তাদের গুরুত্বপূর্ণ এন্টারপ্রাইজ সিস্টেম অ্যাজিউরের ওপর পরিচালনা করে, যেখানে বিশ্বজুড়ে ৯০ কোটির বেশি পেশাজীবীকে সেবা দিতে স্কেলেবল অ্যাপ সার্ভিস, ব্লব স্টোরেজ এবং অ্যাজিউর মনিটর ব্যবহার করা হয়।',
    },
    {
      en: 'ASOS migrated its global e-commerce retail platform to Azure, leveraging Azure Functions event triggers and Cosmos DB to handle over 167 million customer orders annually with automated elasticity.',
      bn: 'অ্যাভেইলেবিলিটি ও স্কেলিং নিশ্চিত করতে অ্যাসোস (ASOS) তাদের ই-কমার্স সিস্টেম অ্যাজিউরে স্থানান্তর করে, যেখানে বছরে ১৬ কোটির বেশি অর্ডার পরিচালনায় অ্যাজিউর ফাংশন ও কসমস ডিবি ব্যবহৃত হয়।',
    },
    {
      en: 'Maersk automates international container tracking and logistics telemetry through Azure Event Hubs, Azure Kubernetes Service (AKS), and Azure SQL Database clusters across worldwide shipping corridors.',
      bn: 'মারস্ক (Maersk) বিশ্বজুড়ে জাহাজ ও কন্টেইনার ট্র্যাকিং এবং লজিস্টিকস টেলিমেট্রি পরিচালনায় অ্যাজিউর ইভেন্ট হাবস, অ্যাজিউর কিউবারনেটিস সার্ভিস এবং অ্যাজিউর এসকিউএল ক্লাস্টার ব্যবহার করে।',
    },
  ],
};
