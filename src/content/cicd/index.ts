import type { Hub } from '../../lib/types';
import { PipesAndThePipelineLesson } from './lessons/pipes-and-the-pipeline';
import { BuildsAndTheBuildLesson } from './lessons/builds-and-the-build';
import { TestsAndTheTestLesson } from './lessons/tests-and-the-test';
import { StagesAndTheStageLesson } from './lessons/stages-and-the-stage';
import { DeploysAndTheDeployLesson } from './lessons/deploys-and-the-deploy';
import { RollbacksAndTheRollbackLesson } from './lessons/rollbacks-and-the-rollback';
import { ReleasesAndTheReleaseLesson } from './lessons/releases-and-the-release';
import { TheCicdReleaseLesson } from './lessons/the-cicd-release';

export const cicdHub: Hub = {
  slug: 'cicd',
  name: 'CI/CD',
  icon: '🔁',
  tagline: {
    en: 'Master Continuous Integration and Continuous Delivery: automated pipelines, build optimization, test suites, zero-downtime deployments, automated rollbacks, and GitOps governance.',
    bn: 'কন্টিনিউয়াস ইন্টিগ্রেশন এবং কন্টিনিউয়াস ডেলিভারি আয়ত্ত করুন: স্বয়ংক্রিয় পাইপলাইন, বিল্ড অপ্টিমাইজেশন, টেস্ট স্যুট, জিরো-ডাউনটাইম ডিপ্লয়মেন্ট, স্বয়ংক্রিয় রোলব্যাক এবং গিটঅপ্স পরিচালনা।',
  },
  intro: {
    en: 'Continuous Integration and Continuous Delivery (CI/CD) automates the journey from developer code commit to production deployment. This curriculum teaches you how to construct resilient automation pipelines, optimize compilation and container caching, shard automated test suites, execute zero-downtime progressive rollouts (Canary, Blue-Green), trigger automated metric-driven rollbacks, and govern enterprise delivery with DevSecOps guardrails and DORA metrics.',
    bn: 'কন্টিনিউয়াস ইন্টিগ্রেশন এবং কন্টিনিউয়াস ডেলিভারি (সিআই/সিডি) ডেভেলপার কোড কমিট থেকে প্রোডাকশন ডিপ্লয়মেন্ট পর্যন্ত পুরো প্রক্রিয়া স্বয়ংক্রিয় করে। এই পাঠ্যক্রম আপনাকে শক্তিশালী অটোমেশন পাইপলাইন তৈরি, কম্পাইলেশন ও কন্টেইনার ক্যাশিং অপ্টিমাইজ, স্বয়ংক্রিয় টেস্ট স্যুট পরিচালনা, জিরো-ডাউনটাইম রোলআউট (ক্যানারি, ব্লু-গ্রিন), মেট্রিক-ভিত্তিক স্বয়ংক্রিয় রোলব্যাক এবং দেবসেকঅপ্স গার্ডরেইল সহ এন্টারপ্রাইজ ডেলিভারি পরিচালনা শেখাবে।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1: Core CI Pipelines, Builds, and Test Automation',
        bn: 'ধাপ ১: কোর সিআই পাইপলাইন, বিল্ড এবং টেস্ট অটোমেশন',
      },
      items: [
        {
          en: 'Pipeline Triggers & Anatomy: Event-driven workflows, push/PR triggers, runner pools, and DAG execution graphs.',
          bn: 'পাইপলাইন ট্রিগার ও গঠন: ইভেন্ট-ভিত্তিক ওয়ার্কফ্লো, পুশ ও পিআর ট্রিগার, রানার পুল এবং ড্যাগ এক্সিকিউশন গ্রাফ।',
        },
        {
          en: 'Automated Build Engineering: Dependency caching, multi-stage Docker packaging, and artifact optimization.',
          bn: 'স্বয়ংক্রিয় বিল্ড ইঞ্জিনিয়ারিং: ডিপেন্ডেন্সি ক্যাশিং, মাল্টি-স্টেজ ডকার প্যাকেজিং এবং আর্টিফ্যাক্ট অপ্টিমাইজেশন।',
        },
        {
          en: 'Test Automation in CI: Unit and integration suites, service containers, and flaky test quarantine strategies.',
          bn: 'সিআই-তে টেস্ট অটোমেশন: ইউনিট ও ইন্টিগ্রেশন স্যুট, সার্ভিস কন্টেইনার এবং অস্থির টেস্ট প্রতিরোধ কৌশল।',
        },
        {
          en: 'Pipeline Promotion Gates: Sequential stages, environment protection rules, and manual approval gates.',
          bn: 'পাইপলাইন প্রমোশন গেট: পর্যায়ক্রমিক স্টেজ, পরিবেশ সুরক্ষা নিয়ম এবং ম্যানুয়াল অনুমোদন গেট।',
        },
      ],
    },
    {
      title: {
        en: 'Stage 2: Progressive Delivery, Blue-Green, and Automated Rollbacks',
        bn: 'ধাপ ২: প্রগ্রেসিভ ডেলিভারি, ব্লু-গ্রিন এবং স্বয়ংক্রিয় রোলব্যাক',
      },
      items: [
        {
          en: 'Zero-Downtime Deployments: Rolling updates, blue-green environment switching, and canary traffic shaping.',
          bn: 'জিরো-ডাউনটাইম ডিপ্লয়মেন্ট: রোলিং আপডেট, ব্লু-গ্রিন পরিবেশ পরিবর্তন এবং ক্যানারি ট্রাফিক নিয়ন্ত্রণ।',
        },
        {
          en: 'Automated Rollbacks: Metric-driven health checks, error rate monitoring, and rapid traffic reversion.',
          bn: 'স্বয়ংক্রিয় রোলব্যাক: মেট্রিক-ভিত্তিক হেলথ চেক, এরর রেট পর্যবেক্ষণ এবং দ্রুত ট্রাফিক প্রত্যাবর্তন।',
        },
        {
          en: 'Release Governance: Semantic Versioning, automated changelogs from conventional commits, and git releases.',
          bn: 'রিলিজ পরিচালনা: সেমান্টিক ভার্সনিং, কনভেনশনাল কমিট থেকে স্বয়ংক্রিয় চেঞ্জলগ এবং গিট রিলিজ।',
        },
        {
          en: 'Artifact Verification: Cryptographic checksum validation, SBOM generation, and immutable image tagging.',
          bn: 'আর্টিফ্যাক্ট যাচাই: ক্রিপ্টোগ্রাফিক চেকসাম ভ্যালিডেশন, এসবিওএম তৈরি এবং অপরিবর্তনীয় ইমেজ ট্যাগিং।',
        },
      ],
    },
    {
      title: {
        en: 'Stage 3: Enterprise GitOps, DevSecOps, and DORA Metrics',
        bn: 'ধাপ ৩: এন্টারপ্রাইজ গিটঅপ্স, দেবসেকঅপ্স এবং ডোরা মেট্রিক্স',
      },
      items: [
        {
          en: 'GitOps Reconciliation: Declarative deployment controllers (ArgoCD/Flux) synchronizing Git with Kubernetes.',
          bn: 'গিটঅপ্স পুনর্মিলন: ডিক্লেয়ারেটিভ ডিপ্লয়মেন্ট কন্ট্রোলার (ArgoCD/Flux) দ্বারা গিটের সাথে কুবারনেটিসের সমন্বয়।',
        },
        {
          en: 'DevSecOps Guardrails: Static analysis (SAST), software composition analysis (SCA), and secret scanning.',
          bn: 'দেবসেকঅপ্স গার্ডরেইল: স্ট্যাটিক অ্যানালাইসিস (SAST), সফটওয়্যার কম্পোজিশন অ্যানালাইসিস (SCA) এবং সিক্রেট স্ক্যানিং।',
        },
        {
          en: 'DORA Metric Tracking: Monitoring Deployment Frequency, Lead Time for Changes, MTTR, and Change Failure Rate.',
          bn: 'ডোরা মেট্রিক্স ট্র্যাকিং: ডিপ্লয়মেন্ট ফ্রিকোয়েন্সি, পরিবর্তন বাস্তবায়নের সময়, এমটিটিআর এবং ফেইলিউর রেট পর্যবেক্ষণ।',
        },
      ],
    },
  ],
  lessons: [
    PipesAndThePipelineLesson,
    BuildsAndTheBuildLesson,
    TestsAndTheTestLesson,
    StagesAndTheStageLesson,
    DeploysAndTheDeployLesson,
    RollbacksAndTheRollbackLesson,
    ReleasesAndTheReleaseLesson,
    TheCicdReleaseLesson,
  ],
  projects: [
    {
      title: {
        en: 'Full-Stack Progressive Canary Delivery Pipeline with Automated Rollbacks',
        bn: 'স্বয়ংক্রিয় রোলব্যাক সহ ফুল-স্ট্যাক প্রগ্রেসিভ ক্যানারি ডেলিভারি পাইপলাইন',
      },
      brief: {
        en: 'Architect an end-to-end GitHub Actions pipeline with container caching, parallel test sharding, and canary traffic shifting that auto-rolls back if HTTP 5xx errors exceed 1 percent.',
        bn: 'কন্টেইনার ক্যাশিং, প্যারালাল টেস্ট শার্ডিং এবং ক্যানারি ট্রাফিক শিফটিং সহ একটি সম্পূর্ণ গিটহাব অ্যাকশন্স পাইপলাইন তৈরি করুন যা HTTP 5xx এরর ১ শতাংশের বেশি হলে স্বয়ংক্রিয় রোলব্যাক করে।',
      },
    },
    {
      title: {
        en: 'Enterprise DevSecOps GitOps Engine with OIDC Keyless Cloud Deployments',
        bn: 'OIDC কি-হীন ক্লাউড ডিপ্লয়মেন্ট সহ এন্টারপ্রাইজ দেবসেকঅপ্স গিটঅপ্স ইঞ্জিন',
      },
      brief: {
        en: 'Build an automated delivery engine incorporating SAST vulnerability gates, OIDC keyless authentication to AWS/GCP, and ArgoCD synchronization into Kubernetes clusters.',
        bn: 'SAST দুর্বলতা পরীক্ষা, AWS/GCP-তে OIDC কি-হীন প্রমাণীকরণ এবং কুবারনেটিস ক্লাস্টারে ArgoCD সমন্বয় সহ একটি স্বয়ংক্রিয় ডেলিভারি ইঞ্জিন তৈরি করুন।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Always keep build and test stages fast by leveraging multi-layer Docker caching, language dependency caches, and parallel test execution.',
      bn: 'মাল্টি-লেয়ার ডকার ক্যাশিং, ডিপেন্ডেন্সি ক্যাশ এবং প্যারালাল টেস্ট চালানোর মাধ্যমে বিল্ড ও টেস্ট ধাপ সর্বদা দ্রুত রাখুন।',
    },
    {
      en: 'Build once and deploy everywhere: never recompile source code between staging and production environments; promote identical immutable artifacts.',
      bn: 'একবার বিল্ড করে সর্বত্র প্রয়োগ করুন: স্টেজিং এবং প্রোডাকশন পরিবেশের জন্য পুনরায় কোড কম্পাইল না করে অভিন্ন অপরিবর্তনীয় আর্টিফ্যাক্ট ব্যবহার করুন।',
    },
    {
      en: 'Never store long-lived static cloud credentials in CI runner secrets; use short-lived OIDC web identity tokens instead.',
      bn: 'সিআই রানার সিক্রেটে দীর্ঘস্থায়ী স্ট্যাটিক ক্লাউড পাসওয়ার্ড রাখবেন না; পরিবর্তে ক্ষণস্থায়ী OIDC ওয়েব আইডেন্টিটি টোকেন ব্যবহার করুন।',
    },
    {
      en: 'Enforce automated canary or blue-green rollouts with automated health check probes to prevent failed releases from impacting users.',
      bn: 'ব্যবহারকারীদের ওপর ত্রুটিপূর্ণ রিলিজের প্রভাব রোধ করতে হেলথ চেক প্ররোব সহ স্বয়ংক্রিয় ক্যানারি বা ব্লু-গ্রিন রোলআউট নিশ্চিত করুন।',
    },
    {
      en: 'Treat deployment pipelines as software assets: store pipeline workflows in version control alongside application source code.',
      bn: 'ডিপ্লয়মেন্ট পাইপলাইনকে সফটওয়্যার সম্পদ হিসেবে বিবেচনা করুন: অ্যাপ্লিকেশনের মূল কোডের সাথেই ভার্সন কন্ট্রোলে পাইপলাইন কনফিগারেশন রাখুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the operational distinction between Continuous Delivery and Continuous Deployment?',
        bn: 'কন্টিনিউয়াস ডেলিভারি এবং কন্টিনিউয়াস ডিপ্লয়মেন্টের মধ্যে পরিচালনগত পার্থক্য কী?',
      },
      a: {
        en: 'Continuous Delivery automates the release pipeline up to staging, producing production-ready artifacts that require a manual human approval trigger to deploy to live production. Continuous Deployment eliminates manual gates entirely; every code change that passes automated tests and security checks deploys to production automatically.',
        bn: 'কন্টিনিউয়াস ডেলিভারি স্টেজিং পর্যন্ত পুরো রিলিজ পাইপলাইন স্বয়ংক্রিয় করে এবং প্রোডাকশনে ডিপ্লয় করার জন্য মানুষের অনুমোদনের অপেক্ষায় থাকে। কন্টিনিউয়াস ডিপ্লয়মেন্ট ম্যানুয়াল অনুমোদন পুরোপুরি দূর করে; স্বয়ংক্রিয় পরীক্ষা ও সিকিউরিটি চেকে উত্তীর্ণ প্রতিটি কোড সরাসরি ও স্বয়ংক্রিয়ভাবে প্রোডাকশনে পৌঁছে যায়।',
      },
    },
    {
      q: {
        en: 'How does Blue-Green deployment differ from Canary deployment in production systems?',
        bn: 'প্রোডাকশন সিস্টেমে ব্লু-গ্রিন ডিপ্লয়মেন্ট কীভাবে ক্যানারি ডিপ্লয়মেন্ট থেকে আলাদা?',
      },
      a: {
        en: 'Blue-Green runs two identical production environments (Blue and Green). The router sends 100 percent of traffic to Blue while Green is updated. Once verified, router traffic instantly flips to Green. Canary deployment shifts traffic incrementally (e.g. 5 percent, 25 percent, 100 percent) to a small subset of instances running the new version, monitoring telemetry before proceeding.',
        bn: 'ব্লু-গ্রিন দুটি অভিন্ন প্রোডাকশন পরিবেশ (ব্লু ও গ্রিন) চালায়। গ্রিন আপডেট করার সময় রাউটার ১০০ শতাংশ ট্রাফিক ব্লু-তে পাঠায়; পরীক্ষা শেষে সাথে সাথে সব ট্রাফিক গ্রিনে চলে যায়। অন্যদিকে ক্যানারি ডিপ্লয়মেন্ট নতুন ভার্সনে ধাপে ধাপে অল্প ট্রাফিক (যেমন ৫ শতাংশ, ২৫ শতাংশ, ১০০ শতাংশ) পাঠিয়ে পরিস্থিতি পর্যবেক্ষণ করে।',
      },
    },
    {
      q: {
        en: 'What are the 4 core DORA metrics used by elite engineering organizations to measure DevOps efficiency?',
        bn: 'উচ্চমানের ইঞ্জিনিয়ারিং দলগুলো ডেভঅপ্স দক্ষতা পরিমাপের জন্য কোন ৪ টি কোর ডোরা (DORA) মেট্রিক্স ব্যবহার করে?',
      },
      a: {
        en: 'The 4 metrics are: Deployment Frequency (how often code ships to prod), Lead Time for Changes (time from commit to running in prod), Mean Time to Recover (time to restore service after an outage), and Change Failure Rate (percentage of releases requiring urgent rollbacks or hotfixes).',
        bn: '৪ টি মেট্রিক হলো: ডিপ্লয়মেন্ট ফ্রিকোয়েন্সি (কত ঘনঘন কোড প্রোডাকশনে যায়), পরিবর্তন বাস্তবায়নের সময় (কমিট থেকে প্রোডাকশনে চলার সময়), পুনরুদ্ধারের গড় সময় (বিভ্রাটের পর সিস্টেম সচল করতে লাগা সময়) এবং পরিবর্তনের ব্যর্থতার হার (রোলব্যাক বা হটফিক্স প্রয়োজন হওয়া রিলিজের হার)।',
      },
    },
    {
      q: {
        en: 'How does flaky test quarantine prevent pipeline bloat and developer fatigue in CI systems?',
        bn: 'সিআই সিস্টেমে অস্থির (flaky) টেস্ট কোয়ারেন্টাইন কীভাবে পাইপলাইনের বিলম্ব এবং ডেভেলপারদের হতাশা দূর করে?',
      },
      a: {
        en: 'A flaky test intermittently passes and fails on identical code commits due to race conditions or network latency. Quarantining automatically isolates detected flaky tests into non-blocking test suites, preventing false-positive pipeline failures while routing bug tickets to test owners to repair timing issues.',
        bn: 'টাইমিং বা নেটওয়ার্কের কারণে একই কোডে কিছু টেস্ট কখনো পাস কখনো ফেইল করে। কোয়ারেন্টাইন এই টেস্টগুলোকে স্বয়ংক্রিয়ভাবে আলাদা করে নন-ব্লকিং অবস্থায় রাখে, ফলে মিথ্যা ত্রুটির কারণে মূল পাইপলাইন আটকে যায় না এবং ডেভেলপাররা নিশ্চিন্তে কাজ করতে পারেন।',
      },
    },
  ],
  realWorld: [
    {
      en: 'Netflix Spinnaker Delivery Engine: Automates multi-region AWS container deployments across thousands of microservices, running automated canary analysis that monitors telemetry and terminates flawed releases before customers notice.',
      bn: 'নেটফ্লিক্স স্পিনাকার ডেলিভারি ইঞ্জিন: হাজার হাজার মাইক্রোসার্ভিসে মাল্টি-রিজিয়ন এডব্লিউএস কন্টেইনার ডিপ্লয়মেন্ট স্বয়ংক্রিয় করে এবং টেলিমিতি বিশ্লেষণ করে ত্রুটিপূর্ণ রিলিজ ব্যবহারকারীদের দৃষ্টিগোচর হওয়ার আগেই বন্ধ করে দেয়।',
    },
    {
      en: 'GitHub Actions Continuous Integration Fleet: Manages millions of containerized workflow jobs daily, providing distributed dependency caching, parallel test matrices, and OIDC keyless authentication to major cloud providers.',
      bn: 'গিটহাব অ্যাকশন্স কন্টিনিউয়াস ইন্টিগ্রেশন ফ্লিট: প্রতিদিন লাখ লাখ কন্টেইনারাইজড ওয়ার্কফ্লো পরিচালনা করে, যা ডিস্ট্রিবিউটেড ডিপেন্ডেন্সি ক্যাশিং, প্যারালাল টেস্ট ম্যাট্রিক্স এবং প্রধান ক্লাউড প্ল্যাটফর্মে OIDC প্রমাণীকরণ সুবিধা দেয়।',
    },
    {
      en: 'Etsy Continuous Deployment Engine: Deploys software to production dozens of times per day using trunk-based development, small incremental commits, and automated canary telemetry checks that catch regressions in real time.',
      bn: 'এটসি কন্টিনিউয়াস ডিপ্লয়মেন্ট ইঞ্জিন: ট্রাঙ্ক-ভিত্তিক ডেভেলপমেন্ট, ছোট ছোট কমিট এবং স্বয়ংক্রিয় ক্যানারি চেক ব্যবহারের মাধ্যমে প্রতিদিন ডজন ডজন বার প্রোডাকশনে সফটওয়্যার ডিপ্লয় করে যা রিয়েল টাইমে ত্রুটি শনাক্ত করে।',
    },
  ],
};
