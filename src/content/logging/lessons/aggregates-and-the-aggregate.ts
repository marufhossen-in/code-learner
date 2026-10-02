import type { Lesson } from '../../../lib/types';

export const AggregatesAndTheAggregateLesson: Lesson = {
  slug: 'aggregates-and-the-aggregate',
  tech: 'logging',
  title: {
    en: 'Aggregation and Collectors — Vector, Fluent Bit, and Memory Buffers',
    bn: 'অ্যাগ্রিগেশন ও কালেক্টর — Vector, Fluent Bit ও মেমরি বাফার',
  },
  summary: {
    en: 'Master log aggregation architectures: deploy high-performance log collectors (Vector, Fluent Bit) as Kubernetes DaemonSets, configure disk-backed buffers to withstand network outages, manage collector backpressure, and enrich raw container streams with pod metadata.',
    bn: 'লগ অ্যাগ্রিগেশন আর্কিটেকচার আয়ত্ত করুন: কুবারনেটিস ডেমনসেট হিসেবে উচ্চ-গতির কালেক্টর (Vector, Fluent Bit) স্থাপন, নেটওয়ার্ক বিঘ্ন সামলাতে ডিস্ক বাফার কনফিগারেশন, ব্যাকপ্রেশার ব্যবস্থাপনা এবং কন্টেইনার স্ট্রিমে পড মেটাডেটা সংযোজন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Collector daemons, buffering, and pipeline aggregation', bn: 'WHAT — কালেক্টর ডেমন, বাফারিং ও পাইপলাইন অ্যাগ্রিগেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'When you operate containerized workloads across thousands of Kubernetes pods, allowing individual application services to ship logs over the network directly creates severe performance bottlenecks. Direct network logging introduces synchronous HTTP delays into request lifecycles and risks dropping critical telemetry during network partitions. Modern infrastructure decouples logging through dedicated aggregation daemons such as Vector and Fluent Bit. By configuring collectors to tail local container streams, buffer batches in memory and local SSD storage, and enrich lines with cluster metadata, you insulate applications from telemetry backpressure. Understanding aggregation pipelines ensures logs flow reliably to central storage even during downstream outages.',
        bn: 'যখন আপনি হাজার হাজার কুবারনেটিস পডে কন্টেইনারাইজড ওয়ার্কলোড পরিচালনা করেন, তখন প্রতিটি অ্যাপ্লিকেশনকে সরাসরি নেটওয়ার্কের মাধ্যমে লগ পাঠাতে দিলে মারাত্মক পারফরম্যান্স বিভ্রাট সৃষ্টি হয়। সরাসরি নেটওয়ার্কে লগ পাঠানো রিকোয়েস্টের গতি কমিয়ে দেয় এবং সাময়িক নেটওয়ার্ক সমস্যায় মূল্যবান ডেটা হারিয়ে যাওয়ার ঝুঁকি তৈরি করে। আধুনিক পরিকাঠামো Vector ও Fluent Bit এর মতো বিশেষায়িত ডেমন কালেক্টরের মাধ্যমে লগিংকে মূল অ্যাপ্লিকেশন থেকে আলাদা করে দেয়। লোকাল কন্টেইনার স্ট্রিম সংগ্রহ করে, মেমরি ও লোকাল এসএসডিতে ব্যাচ বাফার করে এবং ক্লাস্টার মেটাডেটা যুক্ত করে কালেক্টরগুলো আপনার অ্যাপ্লিকেশনকে ব্যাকপ্রেশার থেকে মুক্ত রাখে। এই অ্যাগ্রিগেশন পাইপলাইন আয়ত্ত করলে কেন্দ্রীয় সার্ভার ডাউন থাকলেও ডেটা সুরক্ষিত থাকে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Node collector DaemonSet aggregating pod streams into disk buffer', bn: 'নোড কালেক্টর ডেমনসেট কর্তৃক পড লগ সংগ্রহ ও ডিস্ক বাফারে জমা' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Kubernetes log collection and buffering diagram">
<rect x="20" y="40" width="135" height="135" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="87" y="65" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">POD CONTAINERS</text>
<text x="30" y="95" font-family="monospace" font-size="8" fill="currentColor">order-svc (stdout)</text>
<text x="30" y="115" font-family="monospace" font-size="8" fill="currentColor">auth-svc (stdout)</text>
<text x="30" y="135" font-family="monospace" font-size="8" fill="currentColor">pay-svc (stdout)</text>
<text x="30" y="158" font-size="8" fill="#2563eb">Raw 350KB batch</text>

<line x1="155" y1="107" x2="205" y2="107" stroke="#2563eb" stroke-width="2"/>
<polygon points="205,103 215,107 205,111" fill="#2563eb"/>

<rect x="215" y="40" width="185" height="135" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="307" y="65" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">VECTOR / FLUENT BIT</text>
<text x="225" y="92" font-size="8" fill="#166534">1. Ingest /var/log/pods</text>
<text x="225" y="112" font-size="8" fill="#166534">2. Enrich k8s metadata</text>
<text x="225" y="132" font-size="8" fill="#166534">3. Disk Buffer (WAL queue)</text>
<text x="225" y="155" font-size="8" fill="#166534">4. Compress: 70KB output</text>

<line x1="400" y1="107" x2="455" y2="107" stroke="#16a34a" stroke-width="2"/>
<polygon points="455,103 465,107 455,111" fill="#16a34a"/>

<rect x="465" y="45" width="150" height="125" rx="6" fill="#faf5ff" stroke="#7e22ce" stroke-width="2"/>
<text x="540" y="70" text-anchor="middle" font-size="10" font-weight="800" fill="#6b21a8">CENTRAL LOG STORE</text>
<text x="475" y="98" font-size="8" fill="#6b21a8">Grafana Loki / Elastic</text>
<text x="475" y="118" font-size="8" fill="#166534">280KB saved (4 svcs)</text>
<text x="475" y="142" font-size="8" fill="#6b21a8">Zero pod latency impact</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Decoupled collectors buffer 350KB down to 70KB across 4 services to prevent backpressure</text>
</svg>`,
      caption: {
        en: 'The node collector DaemonSet ingests a 350KB incoming batch from 4 microservices, buffering and compressing it to 70KB (saving 280KB of network payload).',
        bn: 'নোড কালেক্টর ডেমনসেটটি ৪টি মাইক্রোসার্ভিস থেকে ৩৫০KB লগ সংগ্রহ করে বাফার ও কম্প্রেস করে ৭০KB তে সংকুচিত করে (মোট ২৮০KB নেটওয়ার্ক ব্যান্ডউইথ সাশ্রয়)।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Log collector',
          def: {
            en: 'A lightweight daemon (e.g. Vector, Fluent Bit) running on nodes to ingest, parse, transform, and forward log streams.',
            bn: 'একটি হালকা ডেমন প্রক্রিয়া (যেমন Vector, Fluent Bit) যা নোডে চলে লগ স্ট্রিম সংগ্রহ, পার্স, রূপান্তর ও ফরোয়ার্ড করে।',
          },
        },
        {
          term: 'Disk-backed buffer',
          def: {
            en: 'A write-ahead on-disk queue that stores pending log batches to prevent data loss during downstream network outages.',
            bn: 'একটি লোকাল ডিস্ক কিউ যা ডাউনস্ট্রিম নেটওয়ার্ক সমস্যার সময় ডেটা ক্ষতি রোধ করতে সংগৃহীত লগ সাময়িকভাবে সংরক্ষণ করে।',
          },
        },
        {
          term: 'Backpressure',
          def: {
            en: 'The resistance or slowing force propagated upstream when an ingestion pipeline cannot process records at incoming velocity.',
            bn: 'ইনজেশন পাইপলাইন আগত লগের গতি সামলাতে না পারলে উজানের দিকে তৈরি হওয়া প্রতিরোধ বা মন্থরতা।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Decoupled performance and crash resistance', bn: 'কেন — সংযোগহীন পারফরম্যান্স ও ক্র্যাশ প্রতিরোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Isolate user requests from logging latency: asynchronous stdout writing prevents slow network sockets from delaying response returns.', bn: 'ইউজার রিকোয়েস্ট ল্যাটেন্সি থেকে মুক্ত রাখা: অ্যাসিঙ্ক আউটপুট লেখার ফলে ধীরগতির নেটওয়ার্ক কানেকশন রেসপন্সে দেরি করায় না।' },
        { en: 'Immunity to central backend outages: disk-backed queues absorb hours of central Elasticsearch downtime without losing a single log.', bn: 'কেন্দ্রীয় সার্ভার আউটেজে নিরাপত্তা: লোকাল ডিস্ক বাফার থাকার কারণে কেন্দ্রীয় সার্ভার ডাউন থাকলেও কোনো লগ হারিয়ে যায় না।' },
        { en: 'Unified container metadata enrichment: collectors query the local kubelet to append namespace, pod name, and node IP automatically.', bn: 'স্বয়ংক্রিয় কুবারনেটিস মেটাডেটা: কালেক্টর স্থানীয় কুবিলেট থেকে পডের নাম, নেমস্পেস ও নোড আইপি স্বয়ংক্রিয়ভাবে যুক্ত করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Aggregating logs with collectors in 4 steps', bn: 'HOW — ৪টি ধাপে কালেক্টর দিয়ে লগ অ্যাগ্রিগেশন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Deploy DaemonSet', bn: '১. ডেমনসেট ডিপ্লয়' }, text: { en: 'Deploy Vector or Fluent Bit onto every Kubernetes worker node.', bn: 'প্রতিটি কুবারনেটিস ওয়ার্কার নোডে Vector বা Fluent Bit ডেমনসেট চালান।' } },
        { title: { en: '2. Tail pod paths', bn: '২. পড লগ ট্র্যাকিং' }, text: { en: 'Configure collector to tail container logs from /var/log/pods.', bn: '/var/log/pods ডিরেক্টরি থেকে কন্টেইনার লগ পড়ার নিয়ম দিন।' } },
        { title: { en: '3. Enable disk WAL', bn: '৩. ডিস্ক বাফার সক্রিয়করণ' }, text: { en: 'Set type: disk buffer with maximum capacity (e.g. 10GB limit).', bn: 'সর্বোচ্চ সাইজ সীমা দিয়ে লোকাল ডিস্ক বাফার সক্রিয় করুন।' } },
        { title: { en: '4. Batch and ship', bn: '৪. ব্যাচ শিপিং' }, text: { en: 'Batch events into compressed chunks to reduce HTTP requests.', bn: 'এইচটিটিপি কল কমাতে লগগুলোকে সংকুচিত ব্যাচ আকারে পাঠান।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'collector_buffer_sim.js',
      code: `// Simulated collector batching and buffering pipeline
const incomingBatchBytes = 350; // KB of raw log events
const compressedBatchBytes = 70; // KB after gzip (5:1 ratio)
const diskBufferCapacity = 500;  // MB buffer pool

const bandwidthSavedBytes = incomingBatchBytes - compressedBatchBytes; // 280 KB
const batchRecordsCount = 4; // microservices batched together
const bufferFootprintSum = incomingBatchBytes + compressedBatchBytes; // 420

console.log("Log Collector Buffering Simulation:");
console.log("Raw incoming batch: " + incomingBatchBytes + "KB -> Compressed: " + compressedBatchBytes + "KB");
console.log("Bandwidth reduction: " + bandwidthSavedBytes + "KB across " + batchRecordsCount + " microservices");
console.log("Combined pipeline throughput: " + bufferFootprintSum + "KB across 2 pipeline stages");

// Output:
// Log Collector Buffering Simulation:
// Raw incoming batch: 350KB -> Compressed: 70KB
// Bandwidth reduction: 280KB across 4 microservices
// Combined pipeline throughput: 420KB across 2 pipeline stages`,
      caption: {
        en: 'The simulation processes a 350KB incoming batch compressed to 70KB across 4 microservices, saving 280KB for a combined 420KB throughput across 2 pipeline stages.',
        bn: 'সিমুলেশনটি ৪টি মাইক্রোসার্ভিস থেকে ৩৫০KB ব্যাচ সংকুচিত করে ৭০KB তে নামিয়ে আনে, যা ২৮০KB সাশ্রয় এবং ২টি পাইপলাইন ধাপে মোট ৪২০KB থ্রুপুট নিশ্চিত করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive collector buffering lab', bn: 'INSIDE — জীবন্ত কালেক্টর বাফারিং ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test collector aggregation live. A raw batch of 350KB gathered across 4 microservices is compressed to 70KB before transmission. This saves 280KB of network payload and generates a combined throughput of 420KB across 2 pipeline stages. Notice how disk-backed buffers insulate container apps from remote network stalls.',
        bn: 'কালেক্টর অ্যাগ্রিগেশন পরীক্ষা করুন। ৪টি মাইক্রোসার্ভিস থেকে ৩৫০KB কাঁচা লগ সংগ্রহ করে ট্রান্সমিশনের পূর্বে ৭০KB তে সংকুচিত করা হয়। এটি ২৮০KB নেটওয়ার্ক পেলোড সাশ্রয় করে এবং ২টি পাইপলাইন ধাপে মোট ৪২০KB থ্রুপুট উৎপন্ন করে। লক্ষ্য করুন কীভাবে ডিস্ক বাফার কন্টেইনার অ্যাপগুলোকে রিমোট নেটওয়ার্কের ধীরগতি থেকে রক্ষা করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Collector lab (inspect compression, press Run)', bn: 'Collector lab (কম্প্রেশন পরীক্ষা করুন, Run)' },
      html: '<h3>Log Collector Pipeline</h3>\n<pre id="out"></pre>\n<p>Batching and disk-backed buffering metrics.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const raw = 350;\nconst comp = 70;\nconst saved = raw - comp;\nconst tot = raw + comp;\nconsole.log("tot: " + tot);\ndocument.getElementById("out").textContent = "Raw: " + raw + "KB · Compressed: " + comp + "KB · Saved: " + saved + "KB · Total: " + tot + "KB (4 services across 2 stages ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Collector architecture rules', bn: 'ফলাফল — কালেক্টর আর্কিটেকচারের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always prefer DaemonSet over sidecars: running one collector per node saves massive RAM compared to embedding a collector in every application pod.', bn: 'সাইডকারের চেয়ে ডেমনসেট বেছে নিন: নোড প্রতি একটি কালেক্টর চালালে প্রতিটি পডে আলাদা কালেক্টর রাখার তুলনায় বিপুল মেমরি সাশ্রয় হয়।' },
        { en: 'Always configure disk-backed buffers: in-memory buffers lose precious telemetry whenever a node encounters kernel panics or restarts.', bn: 'সর্বদা ডিস্ক বাফার চালু রাখুন: মেমরি বাফার ব্যবহার করলে নোড রিস্টার্ট হলে মূল্যবান লগ ডেটা চিরতরে হারিয়ে যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common collector pitfalls', bn: 'ডিবাগ — কালেক্টরের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Unbounded disk buffer filling up node root disk', bn: 'অসীম ডিস্ক বাফারের কারণে নোডের রুট ডিস্ক পূর্ণ হয়ে যাওয়া' },
      text: {
        en: 'If a collector disk buffer lacks a strict maximum byte limit, a multi-day downstream logging outage can fill the entire node root disk, causing the kubelet to evict all pods. Cure: configure a strict max_size (e.g. 10GB) with drop_oldest or block strategies.',
        bn: 'যদি ডিস্ক বাফারে সর্বোচ্চ সাইজ সীমা না থাকে, তবে ডাউনস্ট্রিম সার্ভার ডাউন থাকলে তা নোডের পুরো হার্ডডিস্ক ভরিয়ে ফেলতে পারে। প্রতিকার: সর্বোচ্চ সীমা (যেমন ১০GB) এবং drop_oldest নিয়ম প্রয়োগ করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Tuning batch size vs transmission latency', bn: 'ব্যাচ সাইজ ও পাঠানোর সময়ের মধ্যে সামঞ্জস্য' },
      text: {
        en: 'Configure collectors with dual flush thresholds: batch_size: 1MB and timeout: 2s. Whichever threshold hits first triggers the flush, guaranteeing low latency for sparse log streams while achieving high compression during heavy traffic spikes.',
        bn: 'কালেক্টরে দ্বৈত ফ্লাশ নিয়ম ব্যবহার করুন: batch_size: ১MB এবং timeout: ২s। যেটি আগে পূরণ হবে সাথে সাথে লগ পাঠিয়ে দেবে, ফলে কম ট্রাফিকেও সময়মতো লগ পাওয়া যায়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production collector deployments', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইন্ডাস্ট্রিয়াল কালেক্টর স্থাপন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Vector by Datadog: high-performance Rust daemon deployed globally on edge hosts to reshape and enrich terabytes of operational logs.', bn: 'Datadog এর Vector: রাস্টে তৈরি অতি-দ্রুতগতির ডেমন যা বিশ্বব্যাপী এজ সার্ভারে টেরাবাইট লগ প্রসেস ও রূপান্তর করে।' },
        { en: 'AWS FireLens for ECS: integrated Fluent Bit sidecar allowing container tasks to route logs to multiple AWS destinations simultaneously.', bn: 'AWS FireLens: কন্টেইনার টাস্ক থেকে সরাসরি একাধিক ক্লাউড ডেস্টিনেশনে লগ পাঠাতে ব্যবহৃত ফ্লুয়েন্ট বিট সংহত সমাধান।' },
        { en: 'Grafana Promtail: the dedicated agent tailing local log files and attaching Prometheus labels before streaming chunks to Grafana Loki.', bn: 'Grafana Promtail: প্রমিথিউস লেবেল যুক্ত করে সরাসরি গ্রাফানা লোকিতে লগ পাঠানোর জন্য তৈরি বিশেষায়িত এজেন্ট।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Network Shipping and Resilience', bn: 'পরবর্তী পাঠ — নেটওয়ার্ক শিপিং ও টেকসই ব্যবস্থা' },
    },
    {
      type: 'para',
      text: {
        en: 'With aggregation collectors and buffering mastered, Lesson 5 investigates network log shipping protocols: Syslog, OpenTelemetry OTLP, Kafka message buses, and managing network backpressure.',
        bn: 'অ্যাগ্রিগেশন ও বাফারিং আয়ত্ত করার পর, পাঠ ৫ নেটওয়ার্ক লগ শিপিং প্রোটোকল শেখাবে: Syslog, OpenTelemetry OTLP, কাফকা মেসেজ বাস এবং নেটওয়ার্ক ব্যাকপ্রেশার ব্যবস্থাপনা।',
      },
    },
  ],
  exercises: [
    {
      id: 'log-agg-ex-1',
      kind: 'mcq',
      topic: 'daemonset-vs-sidecar',
      question: {
        en: 'Why is running log collectors (like Vector or Fluent Bit) as a Kubernetes DaemonSet preferred over running them as sidecar containers in every pod?',
        bn: 'প্রতিটি পডে সাইডকার হিসেবে চালানোর চেয়ে কুবারনেটিস ডেমনসেট হিসেবে লগ কালেক্টর (যেমন Vector বা Fluent Bit) চালানো কেন উত্তম?',
      },
      options: [
        {
          en: 'A DaemonSet runs one single collector per host node, saving massive CPU and RAM overhead compared to duplicating collectors across hundreds of pods',
          bn: 'ডেমনসেট প্রতি নোডে একটিমাত্র কালেক্টর চালায়, ফলে শত শত পডে আলাদা কালেক্টর বসানোর বিশাল মেমরি ও সিপিইউ অপচয় রোধ হয়',
        },
        {
          en: 'Sidecar containers are forbidden by the Linux operating system',
          bn: 'লিনাক্স অপারেটিং সিস্টেমে সাইডকার কন্টেইনার ব্যবহার সম্পূর্ণ নিষিদ্ধ',
        },
        {
          en: 'DaemonSets encrypt the physical server monitor display',
          bn: 'ডেমনসেট সার্ভার মনিটরের ডিসপ্লে এনক্রিপ্ট করে রাখে',
        },
        {
          en: 'Sidecars cannot connect to the internet',
          bn: 'সাইডকার কন্টেইনার ইন্টারনেটের সাথে যুক্ত হতে পারে না',
        },
      ],
      answer: 0,
      hint: { en: 'One collector per node saves memory.', bn: 'নোড প্রতি একটি কালেক্টর মেমরি বাঁচায়।' },
      explanation: {
        en: 'Running one collector per node minimizes resource overhead by aggregating logs from all local pods into a single shared agent.',
        bn: 'নোড প্রতি একটি কালেক্টর রাখলে সমস্ত পডের লগ একটি শেয়ার্ড এজেন্টের মাধ্যমে সংগ্রহ করা যায়, যা সিস্টেমের মেমরি সাশ্রয় করে।',
      },
    },
    {
      id: 'log-agg-ex-2',
      kind: 'mcq',
      topic: 'collector-sim-bandwidth',
      question: {
        en: 'In our code walkthrough, how many kilobytes were saved through compression from the 350KB incoming batch, and what was the combined throughput across the 2 pipeline stages?',
        bn: 'আমাদের কোড আলোচনায় ৩৫০KB আগত ব্যাচ থেকে কম্প্রেশনের মাধ্যমে কত কিলোবাইট সাশ্রয় হয়েছিল এবং ২টি পাইপলাইন ধাপে মোট থ্রুপুট কত ছিল?',
      },
      options: [
        { en: '280KB saved across 4 microservices; combined throughput = 420KB across 2 pipeline stages', bn: '৪টি মাইক্রোসার্ভিসে ২৮০KB সাশ্রয়; ২টি পাইপলাইন ধাপে মোট থ্রুপুট = ৪২০KB' },
        { en: '10KB saved across 1 microservice; combined throughput = 100KB across 2 pipeline stages', bn: '১টি মাইক্রোসার্ভিসে ১০KB সাশ্রয়; ২টি পাইপলাইন ধাপে মোট থ্রুপুট = ১০০KB' },
        { en: '50KB saved across 2 microservices; combined throughput = 500KB across 2 pipeline stages', bn: '২টি মাইক্রোসার্ভিসে ৫০KB সাশ্রয়; ২টি পাইপলাইন ধাপে মোট থ্রুপুট = ৫০০KB' },
        { en: '0KB saved across 0 microservices; combined throughput = 0KB across 0 pipeline stages', bn: '০টি মাইক্রোসার্ভিসে ০KB সাশ্রয়; ০টি পাইপলাইন ধাপে মোট থ্রুপুট = ০KB' },
      ],
      answer: 0,
      hint: { en: '350 - 70 = 280KB; 350 + 70 = 420KB.', bn: '৩৫০ - ৭০ = ২৮০KB; ৩৫০ + ৭০ = ৪২০KB।' },
      explanation: {
        en: 'The simulation subtracted 70KB from 350KB to save 280KB, calculating a combined throughput of 420KB across 2 stages.',
        bn: 'সিমুলেশনটি ৩৫০KB থেকে ৭০KB বাদ দিয়ে ২৮০KB সাশ্রয় এবং ৩৫০ + ৭০ = ২টি ধাপে মোট ৪২০KB থ্রুপুট হিসাব করেছিল।',
      },
    },
    {
      id: 'log-agg-ex-3',
      kind: 'mcq',
      topic: 'disk-buffer-advantage',
      question: {
        en: 'What critical operational safety advantage does a disk-backed write-ahead log buffer provide over pure in-memory collector buffers?',
        bn: 'বিশুদ্ধ মেমরি বাফারের তুলনায় ডিস্ক-ব্যাকড রাইট-অ্যাহেড লগ বাফার কোন গুরুত্বপূর্ণ অপারেশনাল সুরক্ষা প্রদান করে?',
      },
      options: [
        {
          en: 'Pending log batches persist across collector crashes and absorb extended downstream network outages without losing telemetry',
          bn: 'সংগৃহীত লগ কালেক্টর ক্র্যাশ হলেও ডিস্কে অক্ষত থাকে এবং কেন্দ্রীয় সার্ভার ডাউন থাকলেও কোনো ডেটা নষ্ট না করে বাফার করতে পারে',
        },
        {
          en: 'It doubles the physical hard drive storage capacity of the server',
          bn: 'এটি সার্ভারের ফিজিক্যাল হার্ডড্রাইভ স্টোরেজ দ্বিগুণ করে দেয়',
        },
        {
          en: 'It automatically edits configuration files in production',
          bn: 'এটি প্রোডাকশনে স্বয়ংক্রিয়ভাবে কনফিগারেশন ফাইল এডিট করে ফেলে',
        },
        {
          en: 'It makes the network fiber optic cables glow in the dark',
          bn: 'এটি অপটিক্যাল ফাইবার ক্যাবলকে অন্ধকারে জ্বলজ্বলে করে তোলে',
        },
      ],
      answer: 0,
      hint: { en: 'Disk buffers survive restarts and outages.', bn: 'ডিস্ক বাফার রিস্টার্ট ও আউটেজেও ডেটা রক্ষা করে।' },
      explanation: {
        en: 'Disk buffers write batches to local SSD before shipping, preserving records even if agents restart or networks partition.',
        bn: 'ডিস্ক বাফার পাঠানোর আগেই ডেটা এসএসডিতে লিখে রাখে, ফলে এজেন্ট রিস্টার্ট বা নেটওয়ার্ক বিচ্ছিন্ন হলেও লগ সুরক্ষিত থাকে।',
      },
    },
    {
      id: 'log-agg-ex-4',
      kind: 'predict',
      topic: 'collector-daemonset-technology',
      question: {
        en: 'What ultra-fast, memory-safe log and metrics collector written in Rust was developed by Timber and acquired by Datadog (e.g. Vector)?',
        bn: 'টিম্বারের তৈরি এবং পরবর্তীতে Datadog এর অধিগৃহীত রাস্টে লেখা অত্যন্ত দ্রুতগতির ও মেমরি-নিরাপদ লগ কালেক্টরের নাম কী (যেমন Vector)?',
      },
      answer: 'Vector',
      accept: ['Vector', 'vector'],
      hint: { en: 'Begins with V-e-c-t-o-r.', bn: 'V-e-c-t-o-r দিয়ে শুরু।' },
      explanation: {
        en: 'Vector is an open-source, high-performance observability data pipeline written in Rust.',
        bn: 'Vector হলো রাস্টে তৈরি একটি ওপেন সোর্স ও উচ্চ-গতির অবজার্ভেবিলিটি ডেটা পাইপলাইন।',
      },
    },
  ],
  quiz: {
    id: 'aggregates-aggregate-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'log-agg-q1',
        kind: 'mcq',
        topic: 'backpressure-strategy',
        question: {
          en: 'What happens when an unconfigured log collector receives records faster than downstream networks can process without disk-backed buffering?',
          bn: 'ডিস্ক বাফার ছাড়া কোনো কালেক্টর যদি নেটওয়ার্কের ধারণক্ষমতার চেয়ে দ্রুতগতিতে লগ গ্রহণ করতে থাকে, তবে কী ঘটে?',
        },
        options: [
          {
            en: 'The collector exhausts available RAM and crashes due to Out-Of-Memory (OOM), dropping all pending log events',
            bn: 'কালেক্টরের র্যাম মেমরি শেষ হয়ে গিয়ে Out-Of-Memory (OOM) ক্র্যাশ ঘটে এবং সমস্ত পেন্ডিং লগ ইভেন্ট হারিয়ে যায়',
          },
          {
            en: 'The computer CPU automatically overclocks by 500%',
            bn: 'কম্পিউটারের সিপিইউ নিজে থেকে ৫০০% ওভারক্লক হয়ে যায়',
          },
          {
            en: 'The operating system converts the logs into audio MP3 files',
            bn: 'অপারেটিং সিস্টেম লগগুলোকে এমপি৩ অডিও ফাইলে রূপান্তর করে',
          },
          {
            en: 'All network routers immediately power down',
            bn: 'সমস্ত নেটওয়ার্ক রাউটার সাথে সাথে বন্ধ হয়ে যায়',
          },
        ],
        answer: 0,
        hint: { en: 'Memory exhaustion causes OOM panics.', bn: 'মেমরির ঘাটতি ওওএম ক্র্যাশ ঘটায়।' },
        explanation: {
          en: 'Unbounded memory buffers cause the operating system OOM killer to terminate the collector process, destroying uncommitted logs.',
          bn: 'সীমাহীন মেমরি বাফারের কারণে ওওএম কিলার কালেক্টর প্রসেসটি মেরে ফেলে, ফলে সমস্ত জমানো লগ নষ্ট হয়ে যায়।',
        },
      },
      {
        id: 'log-agg-q2',
        kind: 'mcq',
        topic: 'throughput-sum-check',
        question: {
          en: 'In our code walkthrough, what was the combined pipeline throughput computed from incomingBatchBytes (350KB) plus compressedBatchBytes (70KB)?',
          bn: 'আমাদের কোড আলোচনায় incomingBatchBytes (৩৫০KB) এবং compressedBatchBytes (৭০KB) যোগ করে মোট কত থ্রুপুট হিসাব করা হয়েছিল?',
        },
        options: [
          { en: '420KB across 2 pipeline stages', bn: '২টি পাইপলাইন ধাপে ৪২০KB' },
          { en: '500KB across 2 pipeline stages', bn: '২টি পাইপলাইন ধাপে ৫০০KB' },
          { en: '100KB across 1 pipeline stage', bn: '১টি পাইপলাইন ধাপে ১০০KB' },
          { en: '0KB across 0 pipeline stages', bn: '০টি পাইপলাইন ধাপে ০KB' },
        ],
        answer: 0,
        hint: { en: '350 + 70 = 420.', bn: '৩৫০ + ৭০ = ৪২০।' },
        explanation: {
          en: 'The simulation resolved 350KB incoming and 70KB compressed, producing a combined throughput of 420KB across 2 stages.',
          bn: 'সিমুলেশনটিতে ৩৫০KB আগত এবং ৭০KB সংকুচিত ডেটা যোগ করে ২টি ধাপে মোট ৪২০KB থ্রুপুট পাওয়া গিয়েছিল।',
        },
      },
      {
        id: 'log-agg-q3',
        kind: 'mcq',
        topic: 'dual-flush-thresholds',
        question: {
          en: 'Why do production collectors configure dual flush criteria combining both byte size (e.g. 1MB) and timeout intervals (e.g. 2s)?',
          bn: 'প্রোডাকশন কালেক্টরগুলোতে কেন সাইজ (যেমন ১MB) এবং সময়সীমা (যেমন ২s) উভয়ের সমন্বয়ে দ্বৈত ফ্লাশ নিয়ম চালু রাখা হয়?',
        },
        options: [
          {
            en: 'It guarantees low telemetry latency during low-traffic periods while maximizing compression and throughput during high-traffic spikes',
            bn: 'এটি কম ট্রাফিকের সময় দ্রুত লগ পাঠানোর নিশ্চয়তা দেয় এবং বেশি ট্রাফিকের সময় কম্প্রেশন বাড়িয়ে সর্বোচ্চ থ্রুপুট প্রদান করে',
          },
          {
            en: 'It reduces the cost of server hardware components by 90%',
            bn: 'এটি সার্ভারের যন্ত্রাংশের খরচ ৯০% কমিয়ে দেয়',
          },
          {
            en: 'It changes the screen resolution of all client monitors',
            bn: 'এটি ক্লায়েন্টের সমস্ত মনিটরের রেজোলিউশন বদলে দেয়',
          },
          {
            en: 'It prevents computers from going to sleep on weekends',
            bn: 'এটি সপ্তাহান্তে কম্পিউটারকে স্লিপ মোডে যাওয়া থেকে বিরত রাখে',
          },
        ],
        answer: 0,
        hint: { en: 'Dual flush thresholds balance latency and throughput.', bn: 'দ্বৈত নিয়ম ল্যাটেন্সি ও থ্রুপুটের মধ্যে ভারসাম্য তৈরি করে।' },
        explanation: {
          en: 'Whichever threshold triggers first flushes the batch: timer bounds latency, while byte size caps memory usage during spikes.',
          bn: 'যে শর্তটি আগে পূরণ হয় সেটিই কার্যকর হয়: টাইমার ল্যাটেন্সি কমায় এবং সাইজ সীমা মেমরির অপচয় রোধ করে।',
        },
      },
      {
        id: 'log-agg-q4',
        kind: 'predict',
        topic: 'wal-acronym-expansion',
        question: {
          en: 'What 3-word database storage term describes on-disk write queues that ensure durability before acknowledging batches (e.g. Write-ahead log)?',
          bn: 'ব্যাচ নিশ্চিত করার পূর্বে স্থায়ীত্ব রক্ষা করতে ব্যবহৃত অন-ডিস্ক কিউকে ডেটাবেসের ভাষায় কোন ৩-শব্দে অভিহিত করা হয় (যেমন Write-ahead log)?',
        },
        answer: 'Write-ahead log',
        accept: ['Write-ahead log', 'write ahead log', 'WAL', 'write-ahead logging'],
        hint: { en: 'W-A-L', bn: 'W-A-L' },
        explanation: {
          en: 'A Write-Ahead Log (WAL) records mutations to disk before committing them to active pipeline states.',
          bn: 'Write-Ahead Log (WAL) মূল পাইপলাইনে পাঠানোর আগেই পরিবর্তনগুলো লোকাল ডিস্কে সংরক্ষণ করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'ships-and-the-ship',
    title: { en: 'Network Shipping and Resilience', bn: 'নেটওয়ার্ক শিপিং ও টেকসই ব্যবস্থা' },
  },
};
