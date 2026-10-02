import type { Hub } from '../../lib/types';
import { TemplatesAndTheTemplateLesson } from './lessons/templates-and-the-template';
import { VariablesAndTheVariableLesson } from './lessons/variables-and-the-variable';
import { ModulesAndTheModuleLesson } from './lessons/modules-and-the-module';
import { StatesAndTheStateLesson } from './lessons/states-and-the-state';
import { PlansAndThePlanLesson } from './lessons/plans-and-the-plan';
import { AppliesAndTheApplyLesson } from './lessons/applies-and-the-apply';
import { DestroysAndTheDestroyLesson } from './lessons/destroys-and-the-destroy';
import { TheIacReleaseLesson } from './lessons/the-iac-release';

export const iacHub: Hub = {
  slug: 'iac',
  name: 'Infrastructure as Code',
  icon: '🏗️',
  tagline: {
    en: 'Master Infrastructure as Code: declarative HCL syntax, state management, modular architecture, execution plans, and GitOps delivery pipelines.',
    bn: 'ইনফ্রাস্ট্রাকচার অ্যাজ কোড আয়ত্ত করুন: ডিক্লোরেটিভ HCL সিনট্যাক্স, স্টেট ম্যানেজমেন্ট, মডুলার আর্কিটেকচার, এক্সিকিউশন প্ল্যান এবং গিটঅপ্স ডেলিভারি পাইপলাইন।',
  },
  intro: {
    en: 'Infrastructure as Code (IaC) transforms cloud engineering by codifying physical and virtual infrastructure into declarative, version-controlled source files. Using modern tools like HashiCorp Terraform and OpenTofu, this curriculum takes you from core HCL syntax and variables to reusable modules, distributed remote state locking, speculative execution plans, safe apply reconciliations, automated resource teardowns, and enterprise GitOps release pipelines.',
    bn: 'ইনফ্রাস্ট্রাকচার অ্যাজ কোড (IaC) ক্লাউড অবকাঠামোকে ডিক্লোরেটিভ এবং ভার্সন-নিয়ন্ত্রিত সোর্স কোডে রূপান্তর করে সফটওয়্যার ইঞ্জিনিয়ারিংয়ে বিপ্লব এনেছে। হ্যাশিকর্প টেরাফর্ম ও ওপেনটোফুর মতো আধুনিক টুল ব্যবহার করে এই কোর্সে আপনি মৌলিক HCL সিনট্যাক্স থেকে শুরু করে পুনর্ব্যবহারযোগ্য মডিউল, ডিস্ট্রিবিউটেড রিমোট স্টেট লকিং, এক্সিকিউশন প্ল্যান, নিরাপদ ডেপ্লয়মেন্ট, নিয়ন্ত্রিত ধ্বংস এবং এন্টারপ্রাইজ গিটঅপ্স পাইপলাইন আয়ত্ত করবেন।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Declarative Syntax, Variables, and Modules',
        bn: 'ধাপ ১ — ডিক্লোরেটিভ সিনট্যাক্স, ভ্যারিয়েবল এবং মডিউল',
      },
      items: [
        {
          en: 'Declarative Foundations: HCL Blocks, Cloud Providers, and Resource Declarations',
          bn: 'ডিক্লোরেটিভ ভিত্তি: HCL ব্লক, ক্লাউড প্রোভাইডার এবং রিসোর্স ঘোষণা',
        },
        {
          en: 'Configurability: Input Variables, Validation Rules, Local Values, and Outputs',
          bn: 'কনফিগারেবিলিটি: ইনপুট ভ্যারিয়েবল, ভ্যালিডেশন নিয়ম, লোকাল মান এবং আউটপুট',
        },
        {
          en: 'Modular Architecture: Root vs Child Modules, Composition, and Registry Sourcing',
          bn: 'মডুলার আর্কিটেকচার: রুট বনাম চাইল্ড মডিউল, কম্পোজিশন এবং রেজিস্ট্রি সোর্সিং',
        },
        {
          en: 'Data Sources: Dynamic Querying and Integration of Existing Cloud Infrastructure',
          bn: 'ডেটা সোর্স: ক্লাউডে বিদ্যমান অবকাঠামোর তথ্য কোডে ডায়নামিকভাবে ব্যবহার',
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — State Management, Execution Plans, and Apply Workflows',
        bn: 'ধাপ ২ — স্টেট ম্যানেজমেন্ট, এক্সিকিউশন প্ল্যান এবং অ্যাপ্লাই কার্যপ্রবাহ',
      },
      items: [
        {
          en: 'Terraform State: Mapping Declared Code to Real-World Cloud Resource IDs',
          bn: 'টেরাফর্ম স্টেট: কোডের রিসোর্সকে ক্লাউডের বাস্তব রিসোর্স আইডির সাথে সংযুক্তকরণ',
        },
        {
          en: 'Remote Backends: Distributed State Storage, Versioning, and DynamoDB Locking',
          bn: 'রিমোট ব্যাকএন্ড: ডিস্ট্রিবিউটেড স্টেট স্টোরেজ, ভার্সনিং এবং ডায়নামোডিবি লকিং',
        },
        {
          en: 'Speculative Plans: Dependency Graphs (DAG), Resource Diffs, and Saved Artifacts',
          bn: 'এক্সিকিউশন প্ল্যান: ডিপেনডেন্সি গ্রাফ (DAG), রিসোর্স পরিবর্তন এবং সংরক্ষিত ফাইল',
        },
        {
          en: 'Reconciliation Apply: Parallel Execution, Resource Lifecycles, and Rollback Safety',
          bn: 'রিকনসিলিয়েশন অ্যাপ্লাই: সমান্তরাল এক্সিকিউশন, লাইফসাইকেল নিয়ম এবং রোলব্যাক নিরাপত্তা',
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Safe Decommissioning, GitOps Pipelines, and Policy as Code',
        bn: 'ধাপ ৩ — নিরাপদ ধ্বংস, গিটঅপ্স পাইপলাইন এবং পলিসি অ্যাজ কোড',
      },
      items: [
        {
          en: 'Controlled Teardown: Targeted Destroys, Prevent Destroy Locks, and Ephemeral Cleanups',
          bn: 'নিয়ন্ত্রিত ধ্বংস: সুনির্দিষ্ট ডিলিট, প্রিভেন্ট ডেস্ট্রয় লক এবং ক্ষণস্থায়ী পরিবেশ মুছে ফেলা',
        },
        {
          en: 'Policy as Code: Open Policy Agent (OPA) Guardrails, Rego Rules, and Sentinel Auditing',
          bn: 'পলিসি অ্যাজ কোড: ওপেন পলিসি এজেন্ট (OPA) নিরাপত্তা সীমানা এবং স্বয়ংক্রিয় অডিট',
        },
        {
          en: 'Enterprise GitOps: Automated CI/CD Workflows, Atlantis, and Multi-Environment Promotion',
          bn: 'এন্টারপ্রাইজ গিটঅপ্স: স্বয়ংক্রিয় সিআই/সিডি ওয়ার্কফ্লো, আটলান্টিস এবং পরিবেশ রূপান্তর',
        },
      ],
    },
  ],
  lessons: [
    TemplatesAndTheTemplateLesson,
    VariablesAndTheVariableLesson,
    ModulesAndTheModuleLesson,
    StatesAndTheStateLesson,
    PlansAndThePlanLesson,
    AppliesAndTheApplyLesson,
    DestroysAndTheDestroyLesson,
    TheIacReleaseLesson,
  ],
  projects: [
    {
      title: {
        en: 'Multi-Region High Availability VPC Fleet with Modular Terraform',
        bn: 'মডুলার টেরাফর্ম সহ মাল্টি-রিজিয়ন হাই অ্যাভেইলেবিলিটি ভিপিসি ফ্লিট',
      },
      brief: {
        en: 'Architect a reusable Terraform module stamping out multi-region VPC topologies, private subnets, security firewalls, and route tables across multiple cloud accounts.',
        bn: 'একটি পুনর্ব্যবহারযোগ্য টেরাফর্ম মডিউল তৈরি করুন যা একাধিক ক্লাউড অ্যাকাউন্টে মাল্টি-রিজিয়ন ভিপিসি, প্রাইভেট সাবনেট ও ফায়ারওয়াল স্বয়ংক্রিয়ভাবে স্থাপন করে।',
      },
    },
    {
      title: {
        en: 'Production GitOps Pipeline with Remote State Locking and Policy Guardrails',
        bn: 'রিমোট স্টেট লকিং এবং পলিসি গার্ডরেইল সহ প্রোডাকশন গিটঅপ্স পাইপলাইন',
      },
      brief: {
        en: 'Build an automated CI/CD pipeline using GitHub Actions, remote S3 backends with DynamoDB locking, and Open Policy Agent (OPA) checks enforcing least-privilege security.',
        bn: 'গিটহাব অ্যাকশন্স, ডায়নামোডিবি লকিং সহ রিমোট এস৩ ব্যাকএন্ড এবং ওপিএ পলিসি চেক ব্যবহার করে একটি নিরাপদ ও স্বয়ংক্রিয় সিআই/সিডি পাইপলাইন তৈরি করুন।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Always store Terraform state in a secured remote backend with encryption at rest and automated state locking to prevent concurrent apply collisions.',
      bn: 'একসাথে একাধিক ব্যক্তির কাজে স্টেট ফাইলের ক্ষতি রোধ করতে সর্বদা এনক্রিপ্ট করা রিমোট ব্যাকএন্ড ও স্বয়ংক্রিয় স্টেট লকিং ব্যবহার করুন।',
    },
    {
      en: 'Decompose monolithic configurations into reusable, independently deployable modules with explicit input validations and typed outputs.',
      bn: 'বিশাল একরৈখিক কোড এড়িয়ে সুনির্দিষ্ট ইনপুট ভ্যালিডেশন এবং টাইপযুক্ত আউটপুট সহ ছোট ও পুনর্ব্যবহারযোগ্য মডিউলে কোড ভাগ করুন।',
    },
    {
      en: 'Never run terraform apply in production without first reviewing a speculative execution plan and saving the exact plan artifact file.',
      bn: 'প্রোডাকশনে এক্সিকিউশন প্ল্যান পর্যালোচনা ও নির্দিষ্ট প্ল্যান ফাইল সংরক্ষণ না করে কখনো সরাসরি টেরাফর্ম অ্যাপ্লাই কমান্ড চালাবেন না।',
    },
    {
      en: 'Attach prevent_destroy lifecycle protection to mission-critical stateful resources such as production databases and storage repositories.',
      bn: 'ভুলবশত গুরুত্বপূর্ণ সিস্টেম মুছে যাওয়া প্রতিরোধ করতে প্রোডাকশন ডেটাবেজ ও স্টোরেজের মতো রিসোর্সে prevent_destroy লাইফসাইকেল যুক্ত করুন।',
    },
    {
      en: 'Enforce Policy as Code guardrails in pull request pipelines to reject unencrypted storage, broad security rules, and out-of-region deployments automatically.',
      bn: 'পুল রিকোয়েস্টের সময় নিরাপত্তা নীতি যাচাই করতে পলিসি অ্যাজ কোড ব্যবহার করুন যাতে দুর্বল ফায়ারওয়াল বা অননুমোদিত রিসোর্স স্বয়ংক্রিয়ভাবে বাতিল হয়।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the role of the terraform.tfstate file and why should it never be committed to git repositories?',
        bn: 'terraform.tfstate ফাইলের ভূমিকা কী এবং এটি কেন কখনো গিট রিপোজিটরিতে কমিট করা উচিত নয়?',
      },
      a: {
        en: 'The state file maps declared configuration blocks to real-world cloud resource IDs and attributes. It must never be committed to git because it frequently contains sensitive data in plaintext (such as database passwords and private keys) and lacks atomic concurrency locking.',
        bn: 'স্টেট ফাইল ডিক্লোরেটিভ কোডকে বাস্তব ক্লাউড রিসোর্স আইডির সাথে যুক্ত করে। এটি কখনোই গিটে কমিট করা যাবে না কারণ এতে সাধারণ টেক্সট হিসেবে ডেটাবেজ পাসওয়ার্ড ও সিক্রেট থাকতে পারে এবং গিটে কনকারেন্ট লকিং সুবিধা থাকে না।',
      },
    },
    {
      q: {
        en: 'How does Terraform construct the Directed Acyclic Graph (DAG) during terraform plan?',
        bn: 'টেরাফর্ম প্ল্যান চলার সময় কীভাবে ডিরেক্টেড অ্যাসাইক্লিক গ্রাফ (DAG) তৈরি করা হয়?',
      },
      a: {
        en: 'Terraform inspects variable references, resource attributes, and explicit depends_on declarations to build a dependency DAG. It validates that no circular references exist and calculates the optimal concurrent execution order for provisioning and updates.',
        bn: 'টেরাফর্ম ভ্যারিয়েবল রেফারেন্স, রিসোর্স বৈশিষ্ট্য এবং স্পষ্ট depends_on ঘোষণার ওপর ভিত্তি করে একটি ডিপেনডেন্সি গ্রাফ তৈরি করে। এটি কোনো চক্রাকার নির্ভরতা নেই তা নিশ্চিত করে সমান্তরাল কাজের সর্বোচ্চ গতি নির্ধারণ করে।',
      },
    },
    {
      q: {
        en: 'What is the operational purpose of the create_before_destroy lifecycle rule in Terraform?',
        bn: 'টেরাফর্মে create_before_destroy লাইফসাইকেল নিয়মের পরিচালনগত উদ্দেশ্য কী?',
      },
      a: {
        en: 'By default, Terraform destroys an existing resource before creating its replacement when an immutable property changes. The create_before_destroy rule inverts this sequence, provisioning the new resource and verifying health before terminating the old one, achieving zero downtime.',
        bn: 'সাধারণত টেরাফর্ম পরিবর্তনশীল নয় এমন কিছু বদলাতে গেলে আগের রিসোর্সটি আগে মুছে ফেলে নতুনটি বানায়। এই নিয়মটি সেই ক্রম উল্টে দেয়, ফলে নতুন রিসোর্স আগে তৈরি ও নিশ্চিত হওয়ার পরই কেবল পুরনোটি ধ্বংস হয়, যা ডাউনটাইম রোধ করে।',
      },
    },
    {
      q: {
        en: 'What is configuration drift and how does terraform refresh detect discrepancies between code and reality?',
        bn: 'কনফিগারেশন ড্রিফট (drift) কী এবং টেরাফর্ম রিফ্রেশ কীভাবে কোড ও ক্লাউডের মধ্যে অমিল শনাক্ত করে?',
      },
      a: {
        en: 'Configuration drift occurs when engineers make out-of-band modifications to cloud resources using the console or CLI without updating code. Running terraform plan or refresh queries live cloud APIs to update the state file, highlighting all discrepancies in the execution diff.',
        bn: 'কনফিগারেশন ড্রিফট ঘটে যখন কেউ কোড না বদলে সরাসরি কনসোল বা সিএলআই দিয়ে ক্লাউডে পরিবর্তন ঘটায়। টেরাফর্ম প্ল্যান বা রিফ্রেশ লাইভ ক্লাউড এপিআই অনুসন্ধান করে স্টেট ফাইল হালনাগাদ করে এবং সমস্ত অমিল নিখুঁতভাবে তুলে ধরে।',
      },
    },
  ],
  realWorld: [
    {
      en: 'Adobe manages hundreds of multi-region cloud applications across AWS and Azure using Terraform modules, enabling automated provisioning for over 300 developer engineering teams.',
      bn: 'অ্যাডোবি (Adobe) এডাব্লিউএস এবং অ্যাজিউরজুড়ে শত শত মাল্টি-রিজিয়ন ক্লাউড অ্যাপ্লিকেশন পরিচালনায় টেরাফর্ম মডিউল ব্যবহার করে, যা ৩০০ টির বেশি ইঞ্জিনিয়ারিং টিমের স্বয়ংক্রিয় অবকাঠামো নিশ্চিত করে।',
    },
    {
      en: 'Uber orchestrates millions of infrastructure resources across hybrid datacenters and public clouds using declarative Infrastructure as Code, standardizing compute and storage topology.',
      bn: 'উবার (Uber) হাইব্রিড ডেটা সেন্টার ও পাবলিক ক্লাউডজুড়ে লাখ লাখ রিসোর্স পরিচালনায় ডিক্লোরেটিভ ইনফ্রাস্ট্রাকচার অ্যাজ কোড ব্যবহার করে কম্পিউট ও স্টোরেজ অবকাঠামো পরিচালনা করে।',
    },
    {
      en: 'Bloomberg automates financial analytics clusters and isolated networking fabrics using Terraform and Open Policy Agent guardrails to guarantee regulatory compliance.',
      bn: 'ব্লুমবার্গ (Bloomberg) আর্থিক অ্যানালিটিক্স ক্লাস্টার ও নেটওয়ার্ক তৈরিতে টেরাফর্ম এবং ওপেন পলিসি এজেন্ট ব্যবহার করে নিয়ন্ত্রক সম্মতি ও নিরাপত্তা নিশ্চিত করে।',
    },
  ],
};
