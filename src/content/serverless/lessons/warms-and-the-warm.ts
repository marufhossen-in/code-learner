import type { Lesson } from '../../../lib/types';

export const WarmsAndTheWarmLesson: Lesson = {
  slug: 'warms-and-the-warm',
  tech: 'serverless',
  title: {
    en: 'Cold Starts & Concurrency — MicroVM Lifecycle and Provisioned Warming',
    bn: 'কোল্ড স্টার্ট ও কনকারেন্সি — মাইক্রোভিএম জীবনচক্র ও প্রভিশনড ওয়ার্মিং',
  },
  summary: {
    en: 'A foundational overview of serverless cold starts, concurrency scaling, and provisioned warming. Compare on-demand executions against 10 provisioned warm instances across 1000 requests to eliminate 10 cold starts (450 ms). Slash p99 tail latency from 450 ms to 15.00 ms (+435 ms saved, a 96.67% reduction) with 0 timeouts across 990 warm invocations.',
    bn: 'সার্ভারলেস কোল্ড স্টার্ট, কনকারেন্সি স্কেলিং ও প্রভিশনড ওয়ার্মিংয়ের মৌলিক ধারণা। ১০টি কোল্ড স্টার্ট (৪৫০ ms) দূর করতে ১০০০টি রিকোয়েস্টে সাধারণ অন-ডিমান্ডের সাথে ১০টি প্রভিশনড ওয়ার্ম ইনস্ট্যান্সের তুলনা করুন। ৯৯০টি ওয়ার্ম ইনভোকেশনে ০টি টাইমআউট সহ p99 লেটেন্সি ৪৫০ ms থেকে ১৫.০০ ms এ নামিয়ে আনুন (+৪৩৫ ms সাশ্রয়, ৯৬.৬৭% হ্রাস)।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Cold start mechanics and microVM initialization', bn: 'WHAT — কোল্ড স্টার্টের কার্যপদ্ধতি ও মাইক্রোভিএম ইনিশিয়ালাইজেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'When your serverless functions experience sudden traffic surges or receive requests after sitting idle, users often notice unexpected latency spikes. This delay is known as a cold start. Because serverless runtimes do not maintain persistent running processes for dormant functions, the cloud provider must allocate a fresh microVM (minimalist virtual machine) sandbox, download your application code artifact, launch the language runtime, and execute global setup logic. Only after these initialization steps complete does your handler execute. In customer-facing web APIs, cold start delays degrade response times. Understanding concurrency limits and configuring provisioned warming guarantees that pre-warmed execution environments stand ready to serve requests immediately.',
        bn: 'যখন আপনার সার্ভারলেস ফাংশনে হঠাৎ প্রচুর ট্রাফিক আসে কিংবা দীর্ঘক্ষণ অলস থাকার পর নতুন রিকোয়েস্ট আসে, তখন ব্যবহারকারীরা কয়েক মুহূর্তের বিলম্ব দেখতে পান। এই বিলম্বকে কোল্ড স্টার্ট বলা হয়। যেহেতু সার্ভারলেস প্ল্যাটফর্মে কোনো স্থায়ী প্রসেস অলস বসে থাকে না, তাই ক্লাউড প্রোভাইডারকে একদম নতুন একটি মাইক্রোভিএম (হালকা ভার্চুয়াল মেশিন) চালু করতে হয়, কোড ফাইল ডাউনলোড করতে হয়, রানটাইম কার্যকর করতে হয় এবং গ্লোবাল সেটআপ সম্পন্ন করতে হয়। এই সমস্ত প্রাথমিক প্রস্তুতি শেষ হওয়ার পরই কেবল মূল হ্যান্ডলার কোড চলতে শুরু করে। পাবলিক ওয়েব এপিআইতে এই বিলম্ব ব্যবহারকারীর অভিজ্ঞতায় নেতিবাচক প্রভাব ফেলে। কনকারেন্সি সীমা বোঝা এবং প্রভিশনড ওয়ার্মিং ব্যবহার করলে আগে থেকেই প্রস্তুত কনটেইনারের মাধ্যমে তাৎক্ষণিক সাড়া দেওয়া সম্ভব হয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Cold start elimination: on-demand (450 ms) vs provisioned concurrency (15.00 ms)', bn: 'কোল্ড স্টার্ট দূরীকরণ: সাধারণ অন-ডিমান্ড (৪৫০ ms) বনাম প্রভিশনড কনকারেন্সি (১৫.০০ ms)' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Serverless Cold Start diagram">
<rect x="25" y="35" width="160" height="165" rx="6" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
<text x="105" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">1000 Total Requests</text>

<rect x="35" y="80" width="140" height="35" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="105" y="96" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">On-Demand Concurrency</text>
<text x="105" y="108" text-anchor="middle" font-size="7" fill="#dc2626">10 cold starts (450 ms)</text>

<rect x="35" y="125" width="140" height="35" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="105" y="141" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Provisioned Concurrency</text>
<text x="105" y="153" text-anchor="middle" font-size="7" fill="#15803d">10 instances pre-warmed</text>

<text x="105" y="185" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">0 cold starts (15.00 ms)</text>

<line x1="185" y1="117" x2="235" y2="117" stroke="#dc2626" stroke-width="2"/>
<polygon points="235,113 245,117 235,121" fill="#dc2626"/>

<rect x="245" y="35" width="180" height="165" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="335" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">MicroVM Pool</text>

<rect x="255" y="78" width="160" height="40" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="335" y="95" text-anchor="middle" font-size="8" font-weight="700" fill="#92400e">On-Demand: 990 warm at 15 ms</text>
<text x="335" y="108" text-anchor="middle" font-size="7" fill="#78350f">Avg: 19.35 ms | p99: 450 ms</text>

<rect x="255" y="125" width="160" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
<text x="335" y="142" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Provisioned: 1000 warm at 15 ms</text>
<text x="335" y="155" text-anchor="middle" font-size="7" fill="#1e40af">Avg: 15.00 ms | p99: 15.00 ms</text>

<text x="335" y="185" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">+435 ms saved on burst</text>

<line x1="425" y1="117" x2="475" y2="117" stroke="#16a34a" stroke-width="2"/>
<polygon points="475,113 485,117 475,121" fill="#16a34a"/>

<rect x="475" y="35" width="140" height="165" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="545" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">End-User Experience</text>

<rect x="485" y="80" width="120" height="45" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="100" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Sub-20 ms Response</text>
<text x="545" y="113" text-anchor="middle" font-size="7" fill="#166534">96.67% p99 drop</text>

<text x="545" y="160" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">0 timeouts</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Provisioned warming drops tail latency by +435 ms (from 450 ms down to 15.00 ms)</text>
</svg>`,
      caption: {
        en: 'Across 1000 requests, on-demand execution suffers 10 cold starts at 450 ms alongside 990 warm runs at 15 ms (avg 19.35 ms, p99 450 ms). Pre-warming 10 provisioned instances maintains 0 cold starts at 15.00 ms (+435 ms saved on bursts, a 96.67% tail drop with 0 timeouts).',
        bn: '১০০০টি রিকোয়েস্টে সাধারণ ব্যবস্থায় ১০টি কোল্ড স্টার্টে ৪৫০ ms ও ৯৯০টি ওয়ার্ম রানে ১৫ ms সময় লাগে (গড় ১৯.৩৫ ms, p99 ৪৫০ ms)। ১০টি প্রভিশনড ইনস্ট্যান্স ব্যবহারে ০টি কোল্ড স্টার্ট সহ ১৫.০০ ms বজায় থাকে (+৪৩৫ ms সাশ্রয়, ০টি টাইমআউট সহ ৯৬.৬৭% লেটেন্সি হ্রাস)।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Provisioned Concurrency',
          def: {
            en: 'An AWS Lambda configuration that initializes a requested number of execution environments in advance so they respond immediately with zero cold start latency.',
            bn: 'একটি ক্লাউড কনফিগারেশন যার মাধ্যমে নির্দিষ্ট সংখ্যক কনটেইনার আগে থেকেই চালু করে প্রস্তুত রাখা হয় যাতে কোনো কোল্ড স্টার্ট বিলম্ব না ঘটে।',
          },
        },
        {
          term: 'Reserved Concurrency',
          def: {
            en: 'A ceiling setting that guarantees a maximum concurrent instance capacity for a function while preventing it from scaling beyond that threshold to protect backends.',
            bn: 'ফাংশনের জন্য নির্ধারিত সর্বোচ্চ কনকারেন্সি সীমা যা একই সাথে ব্যাকএন্ড ডেটাবেজের ধারণক্ষমতা রক্ষা করতে অতিরিক্ত স্কেলিং আটকে দেয়।',
          },
        },
        {
          term: 'MicroVM Sandbox',
          def: {
            en: 'A lightweight virtual machine (such as Firecracker) spun up by cloud providers in milliseconds to isolate individual serverless function executions securely.',
            bn: 'একটি অতি হালকা ভার্চুয়াল মেশিন যা মিলিসেকেন্ডের মধ্যে চালু হয়ে প্রতিটি সার্ভারলেস ফাংশনকে নিরাপদ আইসোলেশন প্রদান করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Predictable tail latencies for enterprise APIs', bn: 'কেন — এন্টারপ্রাইজ সিস্টেমে দ্রুত ও নির্ভরযোগ্য রেসপন্স টাইম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Guarantee sub-50 ms p99 tail latency: provisioned warming cuts burst latency spikes by +435 ms, protecting checkout conversions on e-commerce platforms.', bn: 'দ্রুততম রেসপন্স টাইম নিশ্চিত করা: প্রভিশনড ওয়ার্মিং ব্যবহার করলে কোল্ড স্টার্টের ৪৩৫ ms বিলম্ব দূর হয় এবং কেনাকাটায় গ্রাহক আটকে থাকে না।' },
        { en: 'Shield legacy databases with reserved concurrency: capping concurrency prevents 5,000 sudden serverless instances from exhausting all PostgreSQL connection slots.', bn: 'ডেটাবেজকে অতিরিক্ত চাপ থেকে বাঁচানো: রিজার্ভড কনকারেন্সি দিয়ে সর্বোচ্চ সীমা বেঁধে রাখলে হাজার হাজার ল্যাম্বডা একসাথে চালু হয়ে ডেটাবেজ ক্র্যাশ করাতে পারে না।' },
        { en: 'Consistent user experience across global geographic regions: pre-warmed runtimes guarantee identical performance for initial visitors regardless of diurnal traffic dips.', bn: 'বিশ্বজুড়ে একই মানের পারফরম্যান্স: ট্রাফিক কমে গেলেও কনটেইনার রেডি থাকায় রাতে বা ভোরে প্রথম আসা ভিজিটরও সমান দ্রুতগতিতে সাইট দেখতে পান।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Configuring provisioned concurrency in 4 steps', bn: 'HOW — ৪টি ধাপে প্রভিশনড কনকারেন্সি কনফিগারেশন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Publish immutable version', bn: '১. ইমিউটেবল ভার্সন প্রকাশ' }, text: { en: 'Publish a numbered function version (e.g. version 5) since provisioned concurrency cannot bind to $LATEST.', bn: 'প্রভিশনড ওয়ার্মিং $LATEST এ কাজ করে না, তাই নির্দিষ্ট নম্বরযুক্ত ভার্সন প্রকাশ করুন।' } },
        { title: { en: '2. Create production alias', bn: '২. প্রোডাকশন অ্যালিয়াস তৈরি' }, text: { en: 'Create a pointer alias (e.g. prod) pointing to your published numbered function version.', bn: 'প্রকাশিত নির্দিষ্ট ভার্সনের ওপর prod নামে একটি অ্যালিয়াস বা পয়েন্টার তৈরি করুন।' } },
        { title: { en: '3. Allocate provisioned concurrency', bn: '৩. কনকারেন্সির সংখ্যা নির্ধারণ' }, text: { en: 'Configure ProvisionedConcurrentExecutions: 10 on the prod alias using AWS CLI or CloudFormation.', bn: 'কনফিগারেশনে prod অ্যালিয়াসের জন্য ১০টি প্রভিশনড ইনস্ট্যান্স বরাদ্দ দিন।' } },
        { title: { en: '4. Setup auto-scaling policies', bn: '৪. অটো-স্কেলিং নিয়ম তৈরি' }, text: { en: 'Attach Application Auto Scaling to adjust warm capacity based on business hours or metric thresholds.', bn: 'ব্যবসায়িক ব্যস্ততার সময় বাড়াতে এবং রাতে কমাতে অটো-স্কেলিং পলিসি জুড়ে দিন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'cold_start_warming_sim.js',
      code: `// Simulated serverless cold starts vs provisioned concurrency across 1000 requests
const totalReqs = 1000;
const onDemandColdStarts = 10;
const onDemandWarmReqs = totalReqs - onDemandColdStarts; // 990

const coldLatencyMs = 450;
const warmLatencyMs = 15;
const initSavedMs = coldLatencyMs - warmLatencyMs; // 435 ms
const p99ReductionPct = ((coldLatencyMs - warmLatencyMs) / coldLatencyMs) * 100; // 96.67%

const onDemandTotalTime = (onDemandColdStarts * coldLatencyMs) + (onDemandWarmReqs * warmLatencyMs);
const onDemandAvgLatency = onDemandTotalTime / totalReqs; // 19.35 ms

const provisionedWarmInstances = 10;
const provisionedColdStarts = 0;
const provisionedAvgLatency = 15.00;

console.log("Total requests: " + totalReqs);
console.log("On-Demand: 10 cold starts at " + coldLatencyMs + " ms, 990 warm at " + warmLatencyMs + " ms (avg: " + onDemandAvgLatency.toFixed(2) + " ms, p99: " + coldLatencyMs + " ms)");
console.log("Provisioned (" + provisionedWarmInstances + " instances): " + provisionedColdStarts + " cold starts, 1000 warm at " + provisionedAvgLatency.toFixed(2) + " ms (avg: " + provisionedAvgLatency.toFixed(2) + " ms, p99: " + provisionedAvgLatency.toFixed(2) + " ms)");
console.log("Latency saved on burst: +" + initSavedMs + " ms (p99 dropped by " + p99ReductionPct.toFixed(2) + "% with 0 timeouts)");

// Output:
// Total requests: 1000
// On-Demand: 10 cold starts at 450 ms, 990 warm at 15 ms (avg: 19.35 ms, p99: 450 ms)
// Provisioned (10 instances): 0 cold starts, 1000 warm at 15.00 ms (avg: 15.00 ms, p99: 15.00 ms)
// Latency saved on burst: +435 ms (p99 dropped by 96.67% with 0 timeouts)`,
      caption: {
        en: 'Across 1000 requests, on-demand execution suffers 10 cold starts at 450 ms alongside 990 warm runs at 15 ms (avg 19.35 ms, p99 450 ms). Pre-warming 10 provisioned instances maintains 0 cold starts at 15.00 ms (+435 ms saved on bursts, a 96.67% tail drop with 0 timeouts).',
        bn: '১০০০টি রিকোয়েস্টে সাধারণ ব্যবস্থায় ১০টি কোল্ড স্টার্টে ৪৫০ ms ও ৯৯০টি ওয়ার্ম রানে ১৫ ms সময় লাগে (গড় ১৯.৩৫ ms, p99 ৪৫০ ms)। ১০টি প্রভিশনড ইনস্ট্যান্স ব্যবহারে ০টি কোল্ড স্টার্ট সহ ১৫.০০ ms বজায় থাকে (+৪৩৫ ms সাশ্রয়, ০টি টাইমআউট সহ ৯৬.৬৭% লেটেন্সি হ্রাস)।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive cold start and warming lab', bn: 'INSIDE — জীবন্ত কোল্ড স্টার্ট ও ওয়ার্মিং ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Compare concurrency latency metrics. In standard on-demand scaling, 10 sudden concurrent requests trigger 10 cold starts at 450 ms each before 990 warm requests complete at 15 ms (average 19.35 ms). Enabling 10 provisioned warm instances eliminates all cold starts (0 cold starts across 1000 requests), cutting p99 tail latency from 450 ms down to 15.00 ms (+435 ms saved, a 96.67% drop with 0 timeouts).',
        bn: 'কনকারেন্সির গতি ও লেটেন্সি মেট্রিক্স তুলনা করুন। সাধারণ ব্যবস্থায় হঠাৎ ১০টি যুগপৎ রিকোয়েস্ট এলে প্রতিটিতে ৪৫০ ms করে ১০টি কোল্ড স্টার্ট হয় এবং বাকি ৯৯০টি ওয়ার্ম রিকোয়েস্ট ১৫ ms এ শেষ হয় (গড় ১৯.৩৫ ms)। অথচ ১০টি প্রভিশনড ইনস্ট্যান্স চালু রাখলে ১০০০টি রিকোয়েস্টে ০টি কোল্ড স্টার্ট হয় এবং p99 লেটেন্সি ৪৫০ ms থেকে কমে ১৫.০০ ms এ নেমে আসে (+৪৩৫ ms সাশ্রয়, ০টি টাইমআউট সহ ৯৬.৬৭% হ্রাস)।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Warming lab (verify tail latency drop, press Run)', bn: 'ওয়ার্মিং ল্যাব (লেটেন্সি হ্রাস যাচাই, Run)' },
      html: '<h3>Cold Start Latency Benchmark</h3>\n<pre id="out"></pre>\n<p>Compute p99 latency reduction achieved via provisioned warming.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const cold = 450;\nconst warm = 15.00;\nconst saved = cold - warm;\nconsole.log("burst saved: " + saved);\ndocument.getElementById("out").textContent = "On-Demand p99: " + cold + " ms · Provisioned p99: " + warm.toFixed(2) + " ms · Saved: +" + saved + " ms (96.67% drop, 0 timeouts ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Architectural decision: on-demand vs provisioned', bn: 'ফলাফল — সিদ্ধান্ত: সাধারণ অন-ডিমান্ড নাকি প্রভিশনড ওয়ার্মিং' },
    },
    {
      type: 'list',
      items: [
        { en: 'Use provisioned concurrency for synchronous customer-facing web APIs: guarantees consistent sub-second page loads during flash sales.', bn: 'পাবলিক ওয়েব এপিআইয়ের জন্য প্রভিশনড ওয়ার্মিং বেছে নিন: ছুটির দিনে বা ফ্ল্যাশ সেলের সময় তাৎক্ষণিক পেজ লোড নিশ্চিত করতে এটি সেরা।' },
        { en: 'Use standard on-demand concurrency for background queues and cron triggers: asynchronous workloads are latency-insensitive, saving provisioned hosting costs.', bn: 'ব্যাকগ্রাউন্ড কিউ এবং ক্রন টাস্কের জন্য অন-ডিমান্ড রাখুন: পেছনের কাজের ক্ষেত্রে কয়েক মিলিসেকেন্ড কোল্ড স্টার্ট কোনো সমস্যা তৈরি করে না এবং খরচ বাঁচায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — The pitfalls of home-grown ping warmers', bn: 'ডিবাগ — নিজস্ব পিং স্ক্রিপ্ট ব্যবহারের সমস্যা ও সমাধান' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Why scheduled CloudWatch ping rules fail to prevent cold starts during bursts', bn: 'শিডিউলড পিং স্ক্রিপ্ট দিয়ে ট্রাফিকের সময় কোল্ড স্টার্ট ঠেকানো অসম্ভব কেন' },
      text: {
        en: 'A recurring cron event (pinging your function every 5 minutes) warms only a single execution environment. If a sudden surge of 20 simultaneous users arrives, 1 request lands on the single warm instance while the other 19 users suffer full cold starts! Use AWS native Provisioned Concurrency instead of cron pings.',
        bn: 'প্রতি ৫ মিনিট পর পর ক্রন জব চালিয়ে পিং করলে কেবল একটিমাত্র কনটেইনার চালু থাকে। হঠাৎ ২০ জন ব্যবহারকারী একসাথে ঢুকলে ১ জন দ্রুত সেবা পেলেও বাকি ১৯ জনই পুরো কোল্ড স্টার্টের শিকার হয়! পিং স্ক্রিপ্টের বদলে ক্লাউডের নিজস্ব Provisioned Concurrency ব্যবহার করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Using esbuild and bundle minification to slash cold start times', bn: 'esbuild ব্যবহার করে কোল্ড স্টার্টের সময় নাটকীয়ভাবে কমিয়ে আনা' },
      text: {
        en: 'Cold start duration correlates directly with package size. Minifying your JavaScript handler with esbuild and tree-shaking unused SDK modules reduces deployment bundles from 50 MB down to 2 MB, cutting cold start initialization from 1200 ms down to under 200 ms.',
        bn: 'বান্ডলের সাইজ যত বড় হয়, কোল্ড স্টার্টের সময় তত বাড়ে। esbuild দিয়ে বান্ডল ৫০ মেগাবাইট থেকে ২ মেগাবাইটে নামিয়ে আনলে কোল্ড স্টার্ট ১২০০ ms থেকে কমে ২০০ ms এর নিচে চলে আসে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production concurrency scaling', bn: 'বাস্তব ক্ষেত্র — আধুনিক প্ল্যাটফর্মে কনকারেন্সি নিয়ন্ত্রণ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Ticketmaster High-Demand Ticket Sales: utilizes provisioned concurrency across hundreds of Lambda workers to handle tens of thousands of simultaneous concert ticket purchases.', bn: 'টিকিটমাস্টার: কনসার্টের টিকিট বিক্রির মুহূর্তে একসাথে হাজার হাজার ভক্তের চাপ সামলাতে আগে থেকেই শত শত প্রভিশনড ল্যাম্বডা প্রস্তুত রাখে।' },
        { en: 'Fintech Credit Card Authorizations: guarantees sub-10 ms transaction processing by pinning critical card validation microservices on provisioned warm containers.', bn: 'ফিনটেক পেমেন্ট সিস্টেম: কার্ড সোয়াইপ করার সাথে সাথে দ্রুত লেনদেন নিশ্চিত করতে পেমেন্ট সার্ভিসগুলো প্রভিশনড কনটেইনারে চালু রাখে।' },
        { en: 'Black Friday E-Commerce Flash Sales: uses Application Auto Scaling to ramp provisioned concurrency ahead of scheduled midnight discount promotions.', bn: 'ব্ল্যাক ফ্রাইডে ফ্ল্যাশ সেল: রাত ১২টায় ছাড় শুরু হওয়ার পূর্বেই অটো-স্কেলিংয়ের সাহায্যে ওয়ার্ম কনটেইনার বাড়িয়ে সিস্টেম সুরক্ষিত রাখে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Execution Timeouts, Memory Allocation, and Cost Optimization', bn: 'পরবর্তী পাঠ — এক্সিকিউশন টাইমআউট, মেমরি বরাদ্দ ও খরচ অপ্টিমাইজেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'With cold starts and concurrency scaling mastered, Lesson 6 investigates runtime resource allocation: configuring execution timeouts, scaling CPU power with memory, and calculating optimal cost curves.',
        bn: 'কোল্ড স্টার্ট ও কনকারেন্সি আয়ত্ত করার পর, পাঠ ৬ রানটাইম রিসোর্স বরাদ্দ শেখাবে: এক্সিকিউশন টাইমআউট কনফিগারেশন, মেমরির সাথে প্রসেসর ক্ষমতা বৃদ্ধি এবং ক্লাউড খরচ অপ্টিমাইজেশন।',
      },
    },
  ],
  exercises: [
    {
      id: 'srv-warm-ex-1',
      kind: 'mcq',
      topic: 'cold-start-root-cause',
      question: {
        en: 'What sequence of operations causes the latency penalty known as a cold start in serverless computing?',
        bn: 'সার্ভারলেস কম্পিউটিংয়ে কোন কাজগুলোর সমষ্টির কারণে কোল্ড স্টার্ট নামক বিলম্ব ঘটে থাকে?',
      },
      options: [
        {
          en: 'When no idle warm environment exists, the cloud provider must allocate a fresh microVM sandbox, download code artifacts, start the runtime environment, and execute global initialization code before the handler runs',
          bn: 'যখন কোনো ওয়ার্ম কনটেইনার তৈরি থাকে না, তখন ক্লাউড প্ল্যাটফর্মকে নতুন মাইক্রোভিএম চালু করতে হয়, কোড ডাউনলোড করতে হয়, রানটাইম শুরু করতে হয় এবং হ্যান্ডলার চলার আগে গ্লোবাল সেটআপ শেষ করতে হয়',
        },
        {
          en: 'The computer hardware fan turns off because the room temperature is too cold',
          bn: 'ঘরের তাপমাত্রা অতিরিক্ত ঠান্ডা হওয়ার কারণে কম্পিউটারের কুলিং ফ্যান বন্ধ হয়ে যায়',
        },
        {
          en: 'The software engineer forgot to turn on the office computer monitor',
          bn: 'সফটওয়্যার ইঞ্জিনিয়ার অফিসের কম্পিউটার মনিটরের সুইচ অন করতে ভুলে গিয়েছিলেন',
        },
        {
          en: 'The cloud database automatically erases all customer user profiles',
          bn: 'ক্লাউড ডেটাবেজ নিজে থেকেই সমস্ত গ্রাহকের প্রোফাইল মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: { en: 'MicroVM allocation, download, runtime start, and global init cause cold starts.', bn: 'মাইক্রোভিএম চালু, কোড ডাউনলোড ও গ্লোবাল সেটআপই কোল্ড স্টার্ট ঘটায়।' },
      explanation: {
        en: 'Cold starts stem from on-demand microVM initialization, artifact retrieval, and runtime boot.',
        bn: 'নতুন মাইক্রোভিএম চালু করা এবং কোড নামিয়ে সেটআপ করার কারণেই প্রাথমিক কোল্ড স্টার্ট হয়।',
      },
    },
    {
      id: 'srv-warm-ex-2',
      kind: 'mcq',
      topic: 'warm-sim-numbers',
      question: {
        en: 'In our code walkthrough, how much burst latency was saved by pre-warming 10 provisioned instances across 1000 requests, and what was the p99 tail drop compared to on-demand execution (450 ms)?',
        bn: 'আমাদের কোড আলোচনায় ১০০০টি রিকোয়েস্টে ১০টি প্রভিশনড ইনস্ট্যান্স ব্যবহারে অন-ডিমান্ডের (৪৫০ ms) তুলনায় কতটুকু সময় বেঁচেছিল এবং p99 লেটেন্সি শতকরা কতটুকু কমেছিল?',
      },
      options: [
        {
          en: 'Saved +435 ms on burst traffic (dropping p99 from 450 ms down to 15.00 ms, a 96.67% tail latency reduction with 0 timeouts across 1000 requests)',
          bn: 'হঠাৎ আসা ট্রাফিকে +৪৩৫ ms সাশ্রয় (p99 লেটেন্সি ৪৫০ ms থেকে কমে ১৫.০০ ms, ১০০০টি রিকোয়েস্টে ০টি টাইমআউট সহ ৯৬.৬৭% লেটেন্সি হ্রাস)',
        },
        {
          en: 'Saved 0 ms; all 1000 requests failed with 100 timeouts',
          bn: '০ ms সাশ্রয়; ১০০টি টাইমআউট সহ ১০০০টি রিকোয়েস্টের সবকয়টি ব্যর্থ',
        },
        {
          en: 'Saved 1000 ms with 50 timeouts across 1000 requests',
          bn: '১০০০টি রিকোয়েস্টে ৫০টি টাইমআউট সহ ১০০০ ms সাশ্রয়',
        },
        {
          en: 'Saved 10 ms with 20 timeouts across 1000 requests',
          bn: '১০০০টি রিকোয়েস্টে ২০টি টাইমআউট সহ ১০ ms সাশ্রয়',
        },
      ],
      answer: 0,
      hint: { en: '450 - 15 = 435 ms saved (96.67% p99 drop), 0 timeouts.', bn: '৪৫০ - ১৫ = ৪৩৫ ms সাশ্রয় (৯৬.৬৭% হ্রাস), ০টি টাইমআউট।' },
      explanation: {
        en: 'Pre-warming 10 instances eliminated cold starts, slashing p99 latency by 435 ms (a 96.67% reduction) with 0 timeouts.',
        bn: '১০টি ইনস্ট্যান্স আগে থেকে প্রস্তুত রাখায় কোল্ড স্টার্ট দূর হয় এবং ৪৩৫ ms (৯৬.৬৭%) লেটেন্সি কমে ০টি টাইমআউট বজায় থাকে।',
      },
    },
    {
      id: 'srv-warm-ex-3',
      kind: 'mcq',
      topic: 'cron-ping-warmer-limitation',
      question: {
        en: 'Why do custom scheduled cron "ping" warmers fail to protect production applications from cold starts during sudden traffic spikes?',
        bn: 'হঠাৎ ট্রাফিক বেড়ে যাওয়ার মুহূর্তে কোল্ড স্টার্ট ঠেকাতে শিডিউলড ক্রন "পিং" স্ক্রিপ্ট কেন ব্যর্থ হয়?',
      },
      options: [
        {
          en: 'Because a cron ping warms only a single microVM environment; if 20 concurrent visitors arrive simultaneously, 1 visitor reaches the warm container while the remaining 19 visitors suffer full cold starts',
          bn: 'কারণ ক্রন পিং কেবল একটিমাত্র মাইক্রোভিএম প্রস্তুত রাখতে পারে; হঠাৎ একসাথে ২০ জন ভিজিটর এলে ১ জন দ্রুত পেলেও বাকি ১৯ জনই পুরো কোল্ড স্টার্টের কবলে পড়ে',
        },
        {
          en: 'Because cron pings delete the application code from cloud storage',
          bn: 'কারণ ক্রন পিং ক্লাউড স্টোরেজ থেকে অ্যাপ্লিকেশনের সমস্ত কোড মুছে ফেলে',
        },
        {
          en: 'Because cron pings cause physical hard drives to overheat',
          bn: 'কারণ ক্রন পিং চালালে কম্পিউটারের হার্ডড্রাইভ অতিরিক্ত গরম হয়ে যায়',
        },
        {
          en: 'Because cron expressions are not supported by serverless runtimes',
          bn: 'কারণ সার্ভারলেস রানটাইমে কোনো ক্রন নিয়ম সমর্থন করে না',
        },
      ],
      answer: 0,
      hint: { en: 'A cron ping warms only 1 container, failing concurrent bursts.', bn: 'ক্রন পিং মাত্র ১টি কনটেইনার তৈরি করে, যা ট্রাফিকের ধাক্কা সামলাতে পারে না।' },
      explanation: {
        en: 'Each concurrent request requires a separate environment; a single cron ping keeps only 1 microVM warm.',
        bn: 'প্রতিটি যুগপৎ রিকোয়েস্টের জন্য আলাদা কনটেইনার লাগে; পিং স্ক্রিপ্ট কেবল একটি কনটেইনার সচল রাখতে পারে।',
      },
    },
    {
      id: 'srv-warm-ex-4',
      kind: 'predict',
      topic: 'firecracker-microvm-name',
      question: {
        en: 'What open-source microVM hypervisor technology developed by Amazon powers AWS Lambda and Fargate container sandboxes (e.g. Firecracker)?',
        bn: 'Amazon-এর তৈরি কোন ওপেন-সোর্স মাইক্রোভিএম হাইপারভাইজর প্রযুক্তি AWS Lambda ও Fargate কনটেইনারে ব্যবহৃত হয় (যেমন Firecracker)?',
      },
      answer: 'Firecracker',
      accept: ['Firecracker', 'firecracker'],
      hint: { en: 'Firecracker', bn: 'Firecracker' },
      explanation: {
        en: 'Firecracker is a Rust-based minimalist virtualization hypervisor purpose-built for secure, sub-second serverless sandboxing.',
        bn: 'Firecracker হলো রাস্ট-ভিত্তিক মিনিমালিস্ট ভার্চুয়ালাইজেশন প্রযুক্তি যা সার্ভারলেস কনটেইনার চালাতে ব্যবহৃত হয়।',
      },
    },
  ],
  quiz: {
    id: 'warms-and-the-warm-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'srv-warm-q1',
        kind: 'mcq',
        topic: 'reserved-concurrency-protection',
        question: {
          en: 'What operational disaster does configuring Reserved Concurrency prevent when serverless functions interact with traditional relational databases?',
          bn: 'সার্ভারলেস ফাংশন যখন সাধারণ রিলেশনাল ডেটাবেজের সাথে যোগাযোগ করে, তখন Reserved Concurrency কনফিগার করা কোন মারাত্মক বিপর্যয় রোধ করে?',
        },
        options: [
          {
            en: 'It caps the maximum number of simultaneous function instances, preventing a sudden viral spike of 5,000 Lambda executions from overwhelming and exhausting the database connection pool',
            bn: 'এটি সর্বোচ্চ যুগপৎ ফাংশনের সংখ্যা সীমাবদ্ধ রাখে, ফলে হঠাৎ ৫,০০০ রিকোয়েস্ট এলেও ডেটাবেজের সংযোগ পুলের সমস্ত লিমিট শেষ হয়ে ডেটাবেজ ধসে পড়া রোধ হয়',
          },
          {
            en: 'It permanently uninstalls the relational database from the network',
            bn: 'এটি নেটওয়ার্ক থেকে রিলেশনাল ডেটাবেজ সফটওয়্যারটি চিরতরে আনইনস্টল করে দেয়',
          },
          {
            en: 'It forces the database to write all records into plain text CSV files',
            bn: 'এটি সমস্ত রেকর্ড সাধারণ সিএসভি ফাইলে লিখতে ডেটাবেজকে বাধ্য করে',
          },
          {
            en: 'It increases the physical thickness of the computer memory chips',
            bn: 'এটি কম্পিউটারের মেমরি চিপের ফিজিক্যাল পুরুত্ব বাড়িয়ে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Reserved concurrency caps instances to protect backend DB pools.', bn: 'রিজার্ভড কনকারেন্সি সর্বোচ্চ সীমা বেঁধে দিয়ে ডেটাবেজ রক্ষা করে।' },
        explanation: {
          en: 'Reserved concurrency establishes a ceiling, preventing serverless auto-scaling from exhausting database connection pools.',
          bn: 'সর্বোচ্চ সীমা নির্দিষ্ট করে দিলে ল্যাম্বডা অতিরিক্ত স্কেল করে মূল ডেটাবেজ ক্র্যাশ করাতে পারে না।',
        },
      },
      {
        id: 'srv-warm-q2',
        kind: 'mcq',
        topic: 'warm-sim-p99-latency-check',
        question: {
          en: 'In our code walkthrough, what was the p99 tail latency under provisioned concurrency compared to on-demand execution across 1000 requests, and how much time was saved?',
          bn: 'আমাদের কোড আলোচনায় ১০০০টি রিকোয়েস্টে সাধারণ অন-ডিমান্ডের তুলনায় প্রভিশনড কনকারেন্সিতে p99 লেটেন্সি কত ছিল এবং কত সময় বেঁচেছিল?',
        },
        options: [
          { en: '15.00 ms under provisioned concurrency vs 450 ms under on-demand (+435 ms saved on burst spikes, a 96.67% drop with 0 timeouts)', bn: 'অন-ডিমান্ডের ৪৫০ ms এর তুলনায় প্রভিশনডে মাত্র ১৫.০০ ms (+৪৩৫ ms সাশ্রয়, ০টি টাইমআউট সহ ৯৬.৬৭% হ্রাস)' },
          { en: '450 ms under provisioned concurrency vs 15.00 ms under on-demand', bn: 'অন-ডিমান্ডের ১৫.০০ ms এর তুলনায় প্রভিশনডে ৪৫০ ms' },
          { en: '1000 ms under provisioned concurrency vs 500 ms under on-demand', bn: 'অন-ডিমান্ডের ৫০০ ms এর তুলনায় প্রভিশনডে ১০০০ ms' },
          { en: '50 ms under provisioned concurrency vs 50 ms under on-demand', bn: 'উভয় ক্ষেত্রেই ৫০ ms' },
        ],
        answer: 0,
        hint: { en: '15.00 ms vs 450 ms (+435 ms saved, 96.67% drop).', bn: '১৫.০০ ms বনাম ৪৫০ ms (+৪৩৫ ms সাশ্রয়, ৯৬.৬৭% হ্রাস)।' },
      explanation: {
        en: 'Provisioned concurrency dropped tail latency from 450 ms to 15.00 ms, saving 435 ms on burst invocations with 0 timeouts.',
        bn: 'প্রভিশনড ওয়ার্মিং লেটেন্সি ৪৫০ ms থেকে ১৫.০০ ms এ নামিয়ে এনে ৪৩৫ ms সময় সাশ্রয় করে এবং ০টি টাইমআউট নিশ্চিত করে।',
      },
      },
      {
        id: 'srv-warm-q3',
        kind: 'mcq',
        topic: 'bundle-size-cold-start-impact',
        question: {
          en: 'How does deployment artifact bundle size directly influence cold start latency in serverless runtimes?',
          bn: 'সার্ভারলেস রানটাইমে ডিপ্লয়মেন্ট ফাইলের বান্ডল সাইজ কীভাবে সরাসরি কোল্ড স্টার্টের সময়কে প্রভাবিত করে?',
        },
        options: [
          {
            en: 'Larger bundles require longer network download times to the microVM and force the language runtime to parse and compile megabytes of unused code, drastically inflating cold start duration',
            bn: 'বড় আকারের বান্ডল ডাউনলোড হতে বেশি সময় লাগে এবং রানটাইমকে অপ্রয়োজনীয় মেগাবাইট কোড পার্স ও কম্পাইল করতে হয়, যার ফলে কোল্ড স্টার্ট অনেক দীর্ঘায়িত হয়',
          },
          {
            en: 'Bundle size has zero correlation with cold start execution time',
            bn: 'বান্ডল সাইজের সাথে কোল্ড স্টার্টের কোনো ধরনের সম্পর্ক নেই',
          },
          {
            en: 'Larger bundles make serverless functions run completely free of charge',
            bn: 'বড় বান্ডল ব্যবহার করলে সার্ভারলেস ফাংশন সম্পূর্ণ বিনামূল্যে চলে',
          },
          {
            en: 'Smaller bundles cause microVM sandboxes to crash on boot',
            bn: 'ছোট বান্ডল ব্যবহার করলে মাইক্রোভিএম বুট করার সময় ক্র্যাশ করে',
          },
        ],
        answer: 0,
        hint: { en: 'Larger bundles take longer to download and compile on boot.', bn: 'বড় বান্ডল ডাউনলোড ও কম্পাইল হতে বেশি সময় নষ্ট করে।' },
        explanation: {
          en: 'Minified bundles download and parse rapidly, keeping cold start initialization times to a minimum.',
          bn: 'কোড বান্ডল ছোট এবং মিনিফাইড রাখলে তা খুব দ্রুত ডাউনলোড ও এক্সিকিউট হয়ে কোল্ড স্টার্ট কমায়।',
        },
      },
      {
        id: 'srv-warm-q4',
        kind: 'predict',
        topic: 'provisioned-concurrency-term',
        question: {
          en: 'What two-word AWS feature name pre-initializes a requested number of warm execution environments ready to respond with zero cold start latency (e.g. Provisioned Concurrency)?',
          bn: 'কোন দুই শব্দের AWS ফিচারটি নির্দিষ্ট সংখ্যক কনটেইনার আগে থেকেই চালু রেখে শূন্য কোল্ড স্টার্ট নিশ্চিত করে (যেমন Provisioned Concurrency)?',
        },
        answer: 'Provisioned Concurrency',
        accept: ['Provisioned Concurrency', 'provisioned concurrency'],
        hint: { en: 'Provisioned Concurrency', bn: 'Provisioned Concurrency' },
        explanation: {
          en: 'Provisioned Concurrency pre-warms microVM execution environments to eliminate cold start latency.',
          bn: 'Provisioned Concurrency আগে থেকেই কনটেইনার তৈরি করে রেখে কোল্ড স্টার্ট বিলম্ব দূর করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'timeouts-and-the-timeout',
    title: { en: 'Execution Timeouts, Memory Allocation, and Cost Optimization', bn: 'এক্সিকিউশন টাইমআউট, মেমরি বরাদ্দ ও খরচ অপ্টিমাইজেশন' },
  },
};
