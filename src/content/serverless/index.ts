import type { Hub } from '../../lib/types';
import { HandlersAndTheHandlerLesson } from './lessons/handlers-and-the-handler';
import { InvocationsAndTheInvocationLesson } from './lessons/invocations-and-the-invocation';
import { EventsAndTheEventLesson } from './lessons/events-and-the-event';
import { TriggersAndTheTriggerLesson } from './lessons/triggers-and-the-trigger';
import { WarmsAndTheWarmLesson } from './lessons/warms-and-the-warm';
import { TimeoutsAndTheTimeoutLesson } from './lessons/timeouts-and-the-timeout';
import { ZipsAndTheZipLesson } from './lessons/zips-and-the-zip';
import { TheServerlessReleaseLesson } from './lessons/the-serverless-release';

export const serverlessHub: Hub = {
  slug: 'serverless',
  name: 'Serverless',
  icon: '⚡',
  tagline: {
    en: 'Master event-driven serverless computing: function handlers, invocation models, cold start mitigation, execution timeouts, and zero-downtime releases.',
    bn: 'ইভেন্ট-চালিত সার্ভারলেস কম্পিউটিং আয়ত্ত করুন: ফাংশন হ্যান্ডলার, ইনভোকেশন মডেল, কোল্ড স্টার্ট অপ্টিমাইজেশন, এক্সিকিউশন টাইমআউট ও ডাউনটাইমহীন রিলিজ।',
  },
  intro: {
    en: 'Serverless computing abstracts infrastructure management, enabling developers to write event-triggered stateless code billed strictly per millisecond of compute. This comprehensive path takes you from basic function handler signatures and execution context through synchronous vs asynchronous invocation models, event source triggers (S3, SQS, DynamoDB Streams), cold start elimination, memory tuning, zip and container packaging, and production canary deployment automation.',
    bn: 'সার্ভারলেস কম্পিউটিং অবকাঠামো পরিচালনার ঝামেলা দূর করে ডেভেলপারদের ইভেন্ট-চালিত স্টেটলেস কোড লেখার সুযোগ দেয়, যার খরচ কেবল কার্যকর সময়ের মিলিসেকেন্ড অনুযায়ী নির্ধারিত হয়। এই বিস্তৃত ট্র্যাকটি ফাংশন হ্যান্ডলার এবং এক্সিকিউশন কন্টেক্সট থেকে শুরু করে সিনক্রোনাস বনাম অ্যাসিনক্রোনাস ইনভোকেশন, ইভেন্ট সোর্স ট্রিগার (S3, SQS, DynamoDB), কোল্ড স্টার্ট সমাধান, মেমরি টিউনিং, জিপ ও কনটেইনার প্যাকেজিং এবং প্রোডাকশন ক্যানারি ডিপ্লয়মেন্ট বিস্তারিতভাবে শেখাবে।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Handlers, Invocations, and Events', bn: 'ধাপ ১ — হ্যান্ডলার, ইনভোকেশন ও ইভেন্ট' },
      items: [
        { en: 'Understand the serverless execution model, function handler signatures, and event/context objects.', bn: 'সার্ভারলেস এক্সিকিউশন মডেল, ফাংশন হ্যান্ডলারের গঠন এবং ইভেন্ট ও কন্টেক্সট অবজেক্টের কাজ বুঝুন।' },
        { en: 'Contrast synchronous request-response invocations with asynchronous buffered event processing.', bn: 'সিনক্রোনাস রিকোয়েস্ট-রেসপন্স ইনভোকেশনের সাথে অ্যাসিনক্রোনাস বাফার্ড ইভেন্টের পার্থক্য জানুন।' },
        { en: 'Parse diverse incoming event schemas: API Gateway HTTP payloads, message queues, and cloud audit logs.', bn: 'এপিআই গেটওয়ে পে-লোড, মেসেজ কিউ এবং ক্লাউড ইভেন্টের বিভিন্ন স্কিমা পার্স করা শিখুন।' },
      ],
    },
    {
      title: { en: 'Stage 2 — Triggers, Cold Starts, and Performance Tuning', bn: 'ধাপ ২ — ট্রিগার, কোল্ড স্টার্ট ও পারফরম্যান্স টিউনিং' },
      items: [
        { en: 'Configure event source mappings across object storage, pub/sub queues, and database change streams.', bn: 'অবজেক্ট স্টোরেজ, পাব/সাব মেসেজিং ও ডেটাবেজ চেঞ্জ স্ট্রিমের সাথে ইভেন্ট সোর্স ম্যাপিং কনফিগার করুন।' },
        { en: 'Diagnose runtime cold starts and apply provisioned concurrency, bundle minification, and global caching.', bn: 'রানটাইম কোল্ড স্টার্ট শনাক্ত করে প্রভিশনড কনকারেন্সি ও বান্ডল মিনিফিকেশন প্রয়োগ করুন।' },
        { en: 'Tune execution timeouts and balance memory allocation to maximize CPU power and slash cloud billing.', bn: 'টাইমআউট অপ্টিমাইজ করুন এবং মেমরি বাড়িয়ে প্রসেসর ক্ষমতা বৃদ্ধির মাধ্যমে মোট ক্লাউড খরচ কমান।' },
      ],
    },
    {
      title: { en: 'Stage 3 — Artifact Packaging and Production Release Automation', bn: 'ধাপ ৩ — প্যাকেজিং ও প্রোডাকশন রিলিজ অটোমেশন' },
      items: [
        { en: 'Package microservices using slim zip bundles, Lambda Layers, and optimized OCI container images.', bn: 'হালকা জিপ বান্ডল, ল্যাম্বডা লেয়ার এবং ওআইসি কনটেইনার ইমেজ ব্যবহার করে মাইক্রোসার্ভিস প্যাকেজ করুন।' },
        { en: 'Orchestrate zero-downtime canary traffic shifting with weighted aliases and automated rollback alarms.', bn: 'ওয়েটেড অ্যালিয়াস এবং ক্লাউডওয়াচ অ্যালার্ম ব্যবহার করে নিরাপদ ক্যানারি ডিপ্লয়মেন্ট পরিচালনা করুন।' },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'Event-Driven Real-Time Media Thumbnail Processing Pipeline', bn: 'ইভেন্ট-চালিত রিয়েল-টাইম মিডিয়া প্রসেসিং পাইপলাইন' },
      brief: {
        en: 'Build an automated pipeline where user image uploads to an Amazon S3 bucket asynchronously trigger a Node.js Lambda function to validate formats, generate resized WebP thumbnails, and update DynamoDB records with execution telemetry.',
        bn: 'এমন একটি স্বয়ংক্রিয় পাইপলাইন তৈরি করুন যেখানে S3 বাকেটে ছবি আপলোড করলেই ল্যাম্বডা ফাংশন ট্রিগার হয়ে থাম্বনেইল তৈরি করে এবং ডেটাবেজে মেটাডাটা সংরক্ষণ করে।',
      },
    },
    {
      title: { en: 'High-Throughput E-Commerce Webhook Ingestion Engine', bn: 'উচ্চ-গতির ই-কমার্স ওয়েবহুক প্রসেসিং ইঞ্জিন' },
      brief: {
        en: 'Design an enterprise API Gateway and SQS-backed serverless ingestion engine processing 10,000 payment webhooks per minute with batch window aggregation, exponential backoff retries, and dead-letter queue isolation.',
        bn: 'প্রতি মিনিটে ১০,০০০ পেমেন্ট ওয়েবহুক প্রসেস করতে API Gateway ও SQS চালিত সার্ভারলেস ইঞ্জিন তৈরি করুন যা ব্যাচ প্রসেসিং ও ডেড-লেটার কিউ নিরাপত্তা নিশ্চিত করে।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Declare heavyweight database clients and SDK connections outside the handler in global scope to reuse TCP connections across warm container invocations.',
      bn: 'হ্যান্ডলার ফাংশনের বাইরে গ্লোবাল স্কোপে ডেটাবেজ ও ক্লাউড ক্লায়েন্ট ইনিশিয়ালাইজ করুন যাতে পরবর্তী ওয়ার্ম ইনভোকেশনে টিসিপি কানেকশন পুনরায় ব্যবহার করা যায়।',
    },
    {
      en: 'Right-size function memory allocation: AWS Lambda scales CPU and network throughput linearly with memory; increasing RAM often cuts execution time and reduces net billing.',
      bn: 'সঠিক মেমরি নির্ধারণ করুন: মেমরির সাথে আনুপাতিক হারে সিপিইউ এবং নেটওয়ার্ক গতি বাড়ে; মেমরি বাড়ালে কাজ দ্রুত শেষ হয়ে অনেক সময় বিলিং কমে যায়।',
    },
    {
      en: 'Always attach a Dead-Letter Queue (DLQ) or on-failure Lambda Destination to asynchronous triggers to prevent lost transactions upon consecutive processing failures.',
      bn: 'অ্যাসিনক্রোনাস ট্রিগারে সর্বদা ডেড-লেটার কিউ (DLQ) বা অন-ফেইলিওর ডেস্টিনেশন যুক্ত রাখুন যাতে কোনো ইভেন্ট প্রক্রিয়াকরণ ব্যর্থ হলে ডেটা চিরতরে হারিয়ে না যায়।',
    },
    {
      en: 'Implement idempotency checks using distributed locks or DynamoDB transactional writes to safely handle duplicate message deliveries from at-least-once queues.',
      bn: 'ইডিমপোটেন্সি নিশ্চিত করতে ট্রানজ্যাকশন আইডি যাচাই করুন যাতে মেসেজ কিউ থেকে একই বার্তা একাধিকবার এলেও সিস্টেমে ডুপ্লিকেট ডেটা তৈরি না হয়।',
    },
  ],
  interview: [
    {
      q: {
        en: 'How does the AWS Lambda execution environment lifecycle operate across Init, Invoke, and Shutdown phases?',
        bn: 'AWS Lambda-এর এক্সিকিউশন এনভায়রনমেন্টের জীবনচক্র Init, Invoke এবং Shutdown ধাপে কীভাবে কাজ করে?',
      },
      a: {
        en: 'The Lambda lifecycle consists of three distinct phases: Init, Invoke, and Shutdown. In the Init phase, Lambda downloads the function code or container image, initializes the runtime, and executes code outside the handler (loading modules and establishing database connections). In the Invoke phase, Lambda executes the handler logic with the incoming event payload. If subsequent requests arrive while the environment remains active, Lambda reuses the warm container, executing only the Invoke phase. Finally, if the container sits idle past its retention period, the Shutdown phase terminates the runtime, gives background tasks 500 ms to exit, and deallocates the microVM.',
        bn: 'ল্যাম্বডার জীবনচক্র তিনটি ধাপে বিভক্ত: Init, Invoke এবং Shutdown। Init ধাপে কোড ডাউনলোড করে রানটাইম শুরু হয় এবং হ্যান্ডলারের বাইরের কোড (যেমন মডিউল লোড ও ডেটাবেজ সংযোগ) নির্বাহ হয়। Invoke ধাপে নির্দিষ্ট ইভেন্ট দিয়ে হ্যান্ডলারের ভেতরের কোড চলে। কনটেইনার চালু থাকা অবস্থায় নতুন রিকোয়েস্ট এলে সরাসরি দ্রুত Invoke ধাপটি সম্পন্ন হয়। এরপর দীর্ঘদিন কোনো রিকোয়েস্ট না এলে Shutdown ধাপে ৫০০ মিলিসেকেন্ডের মধ্যে কাজ গুটিয়ে মাইক্রোভিএম বন্ধ করে দেওয়া হয়।',
      },
    },
    {
      q: {
        en: 'What causes serverless cold starts, and what architectural strategies eliminate or minimize cold start latency?',
        bn: 'সার্ভারলেস কোল্ড স্টার্ট কেন ঘটে এবং কোন কোন কৌশলের মাধ্যমে কোল্ড স্টার্ট লেটেন্সি সর্বনিম্ন রাখা যায়?',
      },
      a: {
        en: 'A cold start occurs when an incoming invocation arrives and no idle warm execution environment exists, forcing the cloud provider to provision a new microVM, download the deployment artifact, start the language runtime, and run global initialization code. Cold start latency ranges from 150 ms in lightweight Node.js/Go to 2–5 seconds in large JVM or Python bundles. Mitigation strategies include: (1) Provisioned Concurrency, which pre-warms a fixed pool of execution environments ready to respond instantly; (2) bundle minification and tree-shaking with tools like esbuild to minimize zip size; (3) moving heavy dynamic imports into lazy-loaded code paths; and (4) choosing compiled runtimes (Rust, Go) or fast-starting runtimes (Node.js) over heavy runtime stacks.',
        bn: 'কোল্ড স্টার্ট তখনই ঘটে যখন কোনো রিকোয়েস্ট আসার সময় তৈরি কোনো ওয়ার্ম কনটেইনার প্রস্তুত থাকে না; তখন ক্লাউড প্রোভাইডারকে নতুন মাইক্রোভিএম চালু করে কোড ডাউনলোড ও গ্লোবাল সেটআপ করতে হয়। এটি দূর করতে: (১) Provisioned Concurrency দিয়ে আগে থেকেই নির্দিষ্ট সংখ্যক কনটেইনার প্রস্তুত রাখা যায়; (২) esbuild দিয়ে কোড বান্ডল ছোট রাখা যায়; (৩) হ্যান্ডলারের ভেতর লেজি ইমপোর্ট ব্যবহার করা যায়; এবং (৪) দ্রুত শুরু হয় এমন আধুনিক রানটাইম (যেমন Node.js বা Go) নির্বাচন করা যায়।',
      },
    },
    {
      q: {
        en: 'What is the operational difference between synchronous and asynchronous Lambda invocations regarding error handling and retries?',
        bn: 'এরর হ্যান্ডলিং ও রিট্রাইয়ের ক্ষেত্রে সিনক্রোনাস ও অ্যাসিনক্রোনাস ল্যাম্বডা ইনভোকেশনের মূল পার্থক্য কী?',
      },
      a: {
        en: 'In synchronous invocations (invoked by API Gateway, ALB, or the CLI with RequestResponse), the caller halts and waits for the function execution to finish. If the function throws an unhandled exception or times out, Lambda returns the error directly to the caller, and no automatic built-in retries occur—the caller is solely responsible for handling failure. In asynchronous invocations (invoked by S3, SNS, EventBridge, or Event invocation type), Lambda places the event into an internal managed queue, returns an immediate HTTP 202 Accepted to the caller, and processes the event in the background. If execution fails, Lambda automatically retries twice by default with exponential backoff before sending the poison message to a configured Dead-Letter Queue (DLQ) or on-failure destination.',
        bn: 'সিনক্রোনাস ইনভোকেশনে (যেমন API Gateway) ক্লায়েন্ট রিকোয়েস্ট পাঠিয়ে উত্তরের জন্য অপেক্ষা করে। ফাংশনে এরর হলে সাথে সাথে ক্লায়েন্টের কাছে ত্রুটি ফিরে যায় এবং ক্লাউড নিজে থেকে কোনো রিট্রাই করে না; ক্লায়েন্টকেই পুনরায় চেষ্টা করতে হয়। কিন্তু অ্যাসিনক্রোনাস ইনভোকেশনে (যেমন S3 বা SNS) ক্লাউড তাৎক্ষণিক ২০২ রেসপন্স দিয়ে ইভেন্টটি নিজস্ব কিউতে জমা রাখে এবং ব্যাকগ্রাউন্ডে কাজ চালায়। ফাংশন ব্যর্থ হলে ল্যাম্বডা স্বয়ংক্রিয়ভাবে দুইবার রিট্রাই করে এবং সফল না হলে মেসেজটি ডেড-লেটার কিউতে পাঠিয়ে দেয়।',
      },
    },
    {
      q: {
        en: 'How does AWS Lambda allocate CPU power, memory, and network throughput under the hood?',
        bn: 'AWS Lambda কীভাবে অভ্যন্তরীণভাবে মেমরির সাথে সিপিইউ এবং নেটওয়ার্ক ক্ষমতা বরাদ্দ করে?',
      },
      a: {
        en: 'In AWS Lambda, memory is the single master control knob for compute capacity. You configure memory between 128 MB and 10,240 MB (10 GB) in 1 MB increments. Lambda allocates CPU power, network bandwidth, and disk I/O throughput in direct linear proportion to the configured memory. At 1,769 MB of memory, a function receives exactly one full dedicated vCPU. Above 1,769 MB, the function gains access to multiple CPU cores (up to 6 vCPUs at 10 GB), enabling multi-threaded computations. Consequently, compute-heavy or cryptographic workloads often execute 5x faster when given 1,769 MB instead of 256 MB, resulting in a lower overall cost because duration drops faster than the price per millisecond increases.',
        bn: 'ল্যাম্বডাতে মেমরি হলো প্রধান নিয়ন্ত্রণকারী পরিমাপ। ১২৮ মেগাবাইট থেকে ১০,২৪০ মেগাবাইট পর্যন্ত মেমরি নির্ধারণ করা যায়। মেমরির অনুপাত অনুযায়ী সিপিইউ এবং নেটওয়ার্ক ক্ষমতা বাড়ে। ১৭৬৯ মেগাবাইটে একটি সম্পূর্ণ ভার্চুয়াল সিপিইউ বরাদ্দ হয়। ১৭৬৯ মেগাবাইটের উপরে একাধিক সিপিইউ কোর পাওয়া যায়। ভারী গাণিতিক বা এনক্রিপশন কাজে মেমরি বাড়ালে কাজ অনেক দ্রুত শেষ হয়, যার ফলে বেশি মেমরি দেওয়া সত্ত্বেও মোট খরচ কমে যেতে পারে।',
      },
    },
  ],
  realWorld: [
    {
      en: 'Netflix: executes millions of automated media encoding and security compliance audit jobs daily using event-driven AWS Lambda functions triggered by S3 uploads and EventBridge rules.',
      bn: 'নেটফ্লিক্স: মিডিয়া ফাইল প্রসেসিং এবং নিরাপত্তা যাচাইয়ের জন্য প্রতিদিন লাখ লাখ ইভেন্ট-চালিত ল্যাম্বডা ফাংশন পরিচালনা করে যা স্বয়ংক্রিয়ভাবে কাজ সম্পন্ন করে।',
    },
    {
      en: 'Coca-Cola: powers thousands of smart touchless freestyle vending machines worldwide via API Gateway and serverless microservices, delivering 99.99% availability with zero idle infrastructure costs.',
      bn: 'কোকা-কোলা: বিশ্বব্যাপী স্মার্ট ভেন্ডিং মেশিন পরিচালনায় সার্ভারলেস আর্কিটেকচার ব্যবহার করে, যা অলস সার্ভারের খরচ বাঁচিয়ে ৯৯.৯৯% নির্ভরযোগ্যতা নিশ্চিত করে।',
    },
    {
      en: 'BBC Online: handles breaking news surges and live video metadata feeds with serverless backends that automatically scale from zero to tens of thousands of concurrent requests in seconds.',
      bn: 'বিবিসি অনলাইন: জরুরি সংবাদের বিশাল ট্রাফিক সামলাতে সার্ভারলেস ব্যাকএন্ড ব্যবহার করে যা সেকেন্ডের মধ্যে শূন্য থেকে হাজার হাজার যুগপৎ রিকোয়েস্টে স্কেল করতে পারে।',
    },
  ],
  lessons: [
    HandlersAndTheHandlerLesson,
    InvocationsAndTheInvocationLesson,
    EventsAndTheEventLesson,
    TriggersAndTheTriggerLesson,
    WarmsAndTheWarmLesson,
    TimeoutsAndTheTimeoutLesson,
    ZipsAndTheZipLesson,
    TheServerlessReleaseLesson,
  ],
  references: [],
};
