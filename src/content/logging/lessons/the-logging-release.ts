import type { Lesson } from '../../../lib/types';

export const TheLoggingReleaseLesson: Lesson = {
  slug: 'the-logging-release',
  tech: 'logging',
  title: {
    en: 'The Logging Release — Correlation IDs, Distributed Tracing, and Alerting',
    bn: 'লগিং রিলিজ — কোরিলেশন আইডি, ডিস্ট্রিবিউটেড ট্রেসিং ও অ্যালার্টিং',
  },
  summary: {
    en: 'An advanced production guide to enterprise logging deployment: implement distributed correlation IDs across microservices using W3C traceparent headers, bridge structured logs with OpenTelemetry distributed traces, configure actionable error-budget alerts, and optimize ingestion costs with rate sampling.',
    bn: 'এন্টারপ্রাইজ লগিং ডিপ্লয়মেন্টের একটি উন্নত প্রোডাকশন গাইড: W3C traceparent হেডার দিয়ে মাইক্রোসার্ভিস জুড়ে ডিস্ট্রিবিউটেড কোরিলেশন আইডি পরিচালনা, ওপেনটেলিমেট্রি ট্রেসের সাথে লগের সংযোগ, এরর-বাজেট অ্যালার্টিং এবং রেট স্যাম্পলিং দ্বারা খরচ নিয়ন্ত্রণ।',
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Correlation identifiers, distributed tracing, and production alerts', bn: 'WHAT — কোরিলেশন আইডি, ডিস্ট্রিবিউটেড ট্রেসিং ও প্রোডাকশন অ্যালার্ট' },
    },
    {
      type: 'para',
      text: {
        en: 'When you operate complex distributed architectures spanning dozens of interconnected microservices, isolated log streams cannot tell the cohesive story of a user request. If a single customer transaction traverses an API gateway, an authentication service, an order processor, and a payment worker, troubleshooting a failure requires linking disparate logs chronologically. Modern production observability bridges logs and traces using distributed correlation identifiers following the W3C traceparent standard. By propagating a single trace identifier across network boundaries and embedding it in every structured log event, you enable engineers to isolate an entire cross-service execution path in milliseconds. Combining correlation IDs with automated rate-budget alerting delivers a robust, production-grade observability release.',
        bn: 'যখন আপনি ডজন ডজন মাইক্রোসার্ভিস সমন্বিত জটিল ডিস্ট্রিবিউটেড সিস্টেম পরিচালনা করেন, তখন বিচ্ছিন্ন লগ স্ট্রিম কোনো ব্যবহারকারী রিকোয়েস্টের পূর্ণাঙ্গ চিত্র তুলে ধরতে পারে না। যদি কোনো একটি লেনদেন এপিআই গেটওয়ে, অথেনটিকেশন সার্ভিস, অর্ডার প্রসেসর এবং পেমেন্ট ওয়ার্কার পেরিয়ে যায়, তবে ব্যর্থতা তদন্ত করতে সমস্ত লগকে সময়ানুক্রমে মেলানো প্রয়োজন হয়। আধুনিক প্রোডাকশন অবজার্ভেবিলিটি W3C traceparent স্ট্যান্ডার্ডের কোরিলেশন আইডির মাধ্যমে লগ ও ট্রেসের মধ্যে সেতু তৈরি করে। প্রতিটি নেটওয়ার্ক কলের সাথে একটিমাত্র ট্রেস আইডি পাঠিয়ে প্রতিটি স্ট্রাকচার্ড লগ লাইনে তা যুক্ত করলে প্রকৌশলীরা চোখের পলকে সমগ্র সার্ভিসের চলার পথ চিহ্নিত করতে পারেন। কোরিলেশন আইডির সাথে স্বয়ংক্রিয় রেট-বাজেট অ্যালার্টিং যুক্ত করে একটি সুদৃঢ় ও আধুনিক প্রোডাকশন রিলিজ নিশ্চিত করা যায়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Distributed correlation ID propagating across 3 microservices', bn: '৩টি মাইক্রোসার্ভিস জুড়ে ডিস্ট্রিবিউটেড কোরিলেশন আইডি প্রবাহ' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Distributed correlation ID log tracing diagram">
<rect x="25" y="45" width="165" height="130" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="107" y="70" text-anchor="middle" font-size="10" font-weight="800" fill="#1e40af">1. API GATEWAY</text>
<text x="35" y="98" font-family="monospace" font-size="8" fill="currentColor">traceId: 4bf92f35...</text>
<text x="35" y="118" font-family="monospace" font-size="8" fill="currentColor">spanId: 01 · 15ms</text>
<text x="35" y="142" font-size="8" fill="#166534">HTTP 200 (injected)</text>

<line x1="190" y1="110" x2="235" y2="110" stroke="#2563eb" stroke-width="2"/>
<polygon points="235,106 245,110 235,114" fill="#2563eb"/>

<rect x="245" y="45" width="165" height="130" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="327" y="70" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">2. AUTH SERVICE</text>
<text x="255" y="98" font-family="monospace" font-size="8" fill="currentColor">traceId: 4bf92f35...</text>
<text x="255" y="118" font-family="monospace" font-size="8" fill="currentColor">spanId: 02 · 25ms</text>
<text x="255" y="142" font-size="8" fill="#166534">HTTP 200 (propagated)</text>

<line x1="410" y1="110" x2="455" y2="110" stroke="#16a34a" stroke-width="2"/>
<polygon points="455,106 465,110 455,114" fill="#16a34a"/>

<rect x="455" y="45" width="160" height="130" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
<text x="535" y="70" text-anchor="middle" font-size="10" font-weight="800" fill="#991b1b">3. ORDER SERVICE</text>
<text x="465" y="98" font-family="monospace" font-size="8" fill="currentColor">traceId: 4bf92f35...</text>
<text x="465" y="118" font-family="monospace" font-size="8" fill="currentColor">spanId: 03 · 80ms</text>
<text x="465" y="142" font-size="8" fill="#dc2626">HTTP 500 (1 error detected)</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">A shared trace ID links 120ms total transaction latency and 1 error across 3 services</text>
</svg>`,
      caption: {
        en: 'A single trace ID connects 3 services (gateway 15ms, auth 25ms, order 80ms) totaling 120ms latency and isolating 1 HTTP 500 error event across 3 microservices.',
        bn: 'একটিমাত্র ট্রেস আইডি ৩টি সার্ভিসকে যুক্ত করে (গেটওয়ে ১৫ms, অথ ২৫ms, অর্ডার ৮০ms) মোট ১২০ms ল্যাটেন্সি তৈরি করে এবং ৩টি মাইক্রোসার্ভিসে ১টি এইচটিটিপি ৫০০ এরর সুনির্দিষ্ট করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Distributed correlation ID',
          def: {
            en: 'A unique identifier propagated across network headers to link all asynchronous log records produced by a single user transaction.',
            bn: 'একটি অনন্য শনাক্তকারী যা নেটওয়ার্ক হেডারের মাধ্যমে প্রবাহিত হয়ে একটি রিকোয়েস্টের সমস্ত মাইক্রোসার্ভিস লগ সংযুক্ত করে।',
          },
        },
        {
          term: 'W3C Trace Context',
          def: {
            en: 'A standard web specification defining unified traceparent and tracestate HTTP headers for distributed context propagation.',
            bn: 'একটি আদর্শ ওয়েব স্পেসিফিকেশন যা ডিস্ট্রিবিউটেড ট্রেসিংয়ের জন্য অভিন্ন traceparent ও tracestate হেডার নির্ধারণ করে।',
          },
        },
        {
          term: 'Log-derived metric alert',
          def: {
            en: 'An automated monitoring alert computed from log event frequencies (such as HTTP 500 error rates exceeding 1% over 5 minutes).',
            bn: 'লগ ইভেন্টের সংখ্যার ওপর ভিত্তি করে তৈরি একটি স্বয়ংক্রিয় সতর্কবার্তা (যেমন ৫ মিনিটে ৫০০ সার্ভার এরর ১% অতিক্রম করলে)।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Instant cross-service triage and cost control', bn: 'কেন — দ্রুত আন্তঃসার্ভিস সমাধান ও খরচ নিয়ন্ত্রণ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Single-query root cause discovery: querying traceId returns the entire multi-service execution narrative chronologically.', bn: 'এক কুয়েরিতে সমাধান: traceId দিয়ে সার্চ করলে সমস্ত সার্ভিসের পুরো কাজের ধারাবাহিক ইতিহাস একসাথে দেখা যায়।' },
        { en: 'Seamless metrics-to-logs navigation: Grafana dashboards let engineers jump directly from Prometheus error charts to the correlated log lines.', bn: 'মেট্রিক্স থেকে লগে রূপান্তর: গ্রাফানা ড্যাশবোর্ড ইঞ্জিনিয়ারদের প্রমিথিউস চার্ট থেকে সরাসরি সংশ্লিষ্ট লগে নিয়ে যেতে পারে।' },
        { en: 'Targeted cost sampling: retain 100% of error logs while sampling only 1% of high-volume successful health checks and static requests.', bn: 'খরচ সাশ্রয়ী স্যাম্পলিং: সমস্ত এরর লগ ১০০% সংরক্ষণ করে সাধারণ রিকোয়েস্টের মাত্র ১% রেখে স্টোরেজ খরচ নিয়ন্ত্রণ করা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Deploying production logging in 4 steps', bn: 'HOW — ৪টি ধাপে প্রোডাকশন লগিং প্রয়োগ' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Ingest traceparent', bn: '১. traceparent সংগ্রহ' }, text: { en: 'Extract incoming W3C traceparent headers at the gateway boundary.', bn: 'গেটওয়েতে আসা W3C traceparent হেডারগুলো সংগ্রহ করুন।' } },
        { title: { en: '2. Propagate context', bn: '২. কনটেক্সট প্রবাহ' }, text: { en: 'Forward trace_id into all outbound microservice HTTP and gRPC headers.', bn: 'পরবর্তী সার্ভিসের সমস্ত রিকোয়েস্টে trace_id হেডার যুক্ত করুন।' } },
        { title: { en: '3. Embed in log lines', bn: '৩. লগ লাইনে সংযোগ' }, text: { en: 'Attach trace_id and span_id automatically to every structured JSON record.', bn: 'প্রতিটি জেসন লগে স্বয়ংক্রিয়ভাবে trace_id ও span_id যুক্ত করুন।' } },
        { title: { en: '4. Alert on error rates', bn: '৪. এরর রেট অ্যালার্ট' }, text: { en: 'Configure alert triggers when HTTP 5xx log rate exceeds 1% for 5m.', bn: '৫ মিনিটে ৫xx এরর রেট ১% ছাড়িয়ে গেলে সাথে সাথে অ্যালার্ট দিন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'distributed_logging_release_sim.js',
      code: `// Simulated distributed trace correlation across 3 microservices
const traceId = "4bf92f3577b34da6a3ce929d0e0e4736";

const serviceLogs = [
  { service: "api-gateway", traceId, spanId: "01", latencyMs: 15, status: 200 },
  { service: "auth-service", traceId, spanId: "02", latencyMs: 25, status: 200 },
  { service: "order-service", traceId, spanId: "03", latencyMs: 80, status: 500 }
];

const totalServicesCount = serviceLogs.length; // 3 services
const totalTransactionLatency = serviceLogs.reduce((acc, l) => acc + l.latencyMs, 0); // 120ms
const errorsCount = serviceLogs.filter(l => l.status >= 500).length; // 1
const finalCombinedMetric = totalTransactionLatency + errorsCount; // 121

console.log("Distributed Logging Release Simulation:");
console.log("Trace ID: " + traceId + " tracked across " + totalServicesCount + " services");
console.log("Total transaction latency: " + totalTransactionLatency + "ms across 3 microservices");
console.log("Detected error events: " + errorsCount + " (order-service 500)");
console.log("Combined diagnostic footprint: " + finalCombinedMetric + " across 3 logged services");

// Output:
// Distributed Logging Release Simulation:
// Trace ID: 4bf92f3577b34da6a3ce929d0e0e4736 tracked across 3 services
// Total transaction latency: 120ms across 3 microservices
// Detected error events: 1 (order-service 500)
// Combined diagnostic footprint: 121 across 3 logged services`,
      caption: {
        en: 'The simulation tracks traceId across 3 microservices (15ms, 25ms, 80ms) totaling 120ms transaction latency and identifying 1 error event for a combined diagnostic metric of 121 across 3 services.',
        bn: 'সিমুলেশনটি ৩টি সার্ভিসের মধ্যে traceId ট্র্যাক করে (১৫ms, ২৫ms, ৮০ms) মোট ১২০ms ল্যাটেন্সি ও ১টি এরর চিহ্নিত করে ৩টি সার্ভিসে মোট ১২১ ডায়াগনস্টিক মেট্রিক নিশ্চিত করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive distributed correlation lab', bn: 'INSIDE — জীবন্ত ডিস্ট্রিবিউটেড কোরিলেশন ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test distributed correlation live. A single trace ID tracks execution across 3 microservices with individual latencies of 15ms, 25ms, and 80ms, producing a total transaction latency of 120ms. The final order-service failure generates 1 detected error, yielding a combined diagnostic metric of 121 across 3 logged services. Correlation IDs allow on-call engineers to isolate failing components in seconds.',
        bn: 'ডিস্ট্রিবিউটেড কোরিলেশন সরাসরি পরীক্ষা করুন। একটিমাত্র ট্রেস আইডি ৩টি মাইক্রোসার্ভিসে ১৫ms, ২৫ms ও ৮০ms ল্যাটেন্সি সহ মোট ১২০ms সময় রেকর্ড করে। শেষের অর্ডার সার্ভিসে ১টি এরর দেখা যায়, যা ৩টি সার্ভিসে মোট ১২১ ডায়াগনস্টিক মেট্রিক তৈরি করে। কোরিলেশন আইডি থাকার কারণে অন-কল ইঞ্জিনিয়াররা কয়েক সেকেন্ডেই সমস্যার উৎস খুঁজে পান।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Correlation lab (trace request path, press Run)', bn: 'Correlation lab (রিকোয়েস্ট পাথ ট্র্যাক করুন, Run)' },
      html: '<h3>Distributed Log Trace Correlation</h3>\n<pre id="out"></pre>\n<p>Cross-service transaction latency and error isolation.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const lats = [15, 25, 80];\nconst totLat = lats.reduce((a, b) => a + b, 0);\nconst errs = 1;\nconst metric = totLat + errs;\nconsole.log("metric: " + metric);\ndocument.getElementById("out").textContent = "Services: 3 · Total Latency: " + totLat + "ms · Errors: " + errs + " · Diagnostic Metric: " + metric + " (Trace ID linked ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Production logging architecture rules', bn: 'ফলাফল — প্রোডাকশন লগিং আর্কিটেকচারের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Standardize on W3C Trace Context: ensure all microservice HTTP clients automatically forward traceparent headers.', bn: 'W3C ট্রেস কনটেক্সট মানদণ্ড নিশ্চিত করুন: সমস্ত মাইক্রোসার্ভিসের ক্লায়েন্ট যাতে স্বয়ংক্রিয়ভাবে traceparent হেডার পাঠায় তা নিশ্চিত করুন।' },
        { en: 'Sample strategically at the edge: ingest 100% of errors and slow requests (>1s), while probabilistically sampling routine success logs.', bn: 'প্রবেশমুখেই কৌশলগত স্যাম্পলিং করুন: সমস্ত এরর ও ১ সেকেন্ডের বেশি ধীরগতির রিকোয়েস্ট ১০০% সংরক্ষণ করে সাধারণ সফল রিকোয়েস্টের সামান্য অংশ সংগ্রহ করুন।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common production logging traps', bn: 'ডিবাগ — প্রোডাকশন লগিংয়ের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Broken correlation context across asynchronous thread pools', bn: 'অ্যাসিঙ্ক্রোনাস থ্রেড পুলে কোরিলেশন কনটেক্সট হারিয়ে যাওয়া' },
      text: {
        en: 'Losing correlation ID context across timer callbacks causes downstream log records to omit trace identifiers. Cure: use AsyncLocalStorage in JavaScript or ThreadLocal MDC in Java to preserve tracing context across asynchronous boundaries.',
        bn: 'টাইমার কলব্যাকের কারণে কোরিলেশন আইডি হারিয়ে গেলে পরবর্তী লগগুলোতে ট্রেস বাদ পড়ে যায়। প্রতিকার: জাভাস্ক্রিপ্টে AsyncLocalStorage অথবা জাভায় ThreadLocal MDC ব্যবহার করে অ্যাসিঙ্ক সীমানার ওপারেও ট্রেস অক্ষত রাখুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Actionable alert runbooks linked in every notification', bn: 'প্রতিটি অ্যালার্ট নোটিফিকেশনে সমাধানের রানবুক লিঙ্ক থাকা' },
      text: {
        en: 'Never send a PagerDuty alert containing only "High error rate". Include a direct link to the Grafana Loki query pre-filtered by traceId and service, along with a triage runbook URL explaining the top 3 troubleshooting steps.',
        bn: 'কখনোই কেবল "High error rate" লিখে পেজার অ্যালার্ট পাঠাবেন না। নোটিফিকেশনে সরাসরি গ্রাফানা কুয়েরির লিঙ্ক এবং সমস্যা সমাধানের ৩টি পদক্ষেপযুক্ত রানবুক লিঙ্ক সংযুক্ত রাখুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production observability platforms', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইন্ডাস্ট্রিয়াল অবজার্ভেবিলিটি প্ল্যাটফর্ম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Shopify black friday telemetry: correlates millions of orders across thousands of microservices using centralized Kafka and OpenSearch pipelines.', bn: 'Shopify ব্ল্যাক ফ্রাইডে টেলিমেট্রি: কাফকা ও ওপেনসার্চ পাইপলাইনের সাহায্যে হাজার হাজার সার্ভিসের লক্ষ লক্ষ অর্ডার রিয়েল টাইমে ট্র্যাক করে।' },
        { en: 'Stripe payment ledger auditing: correlates every charge lifecycle event with immutable cryptographically hashed trace identifiers.', bn: 'Stripe পেমেন্ট অডিটিং: ক্রিপ্টোগ্রাফিক ট্রেস আইডির সাহায্যে প্রতিটি আর্থিক লেনদেনের সম্পূর্ণ ইতিহাস নিখুঁতভাবে সংরক্ষণ করে।' },
        { en: 'OpenTelemetry Jaeger and Tempo: open-source distributed tracing engines natively integrating span graphs with correlated Loki logs.', bn: 'Jaeger ও Tempo: আধুনিক ওপেন-সোর্স ডিস্ট্রিবিউটেড ট্রেসিং ইঞ্জিন যা লোকি লগের সাথে ট্রেস গ্রাফ সরাসরি যুক্ত করে।' },
      ],
    },
  ],
  exercises: [
    {
      id: 'log-rel-ex-1',
      kind: 'mcq',
      topic: 'correlation-id-purpose',
      question: {
        en: 'What primary problem does propagating a distributed correlation ID (or trace ID) solve in microservice architectures?',
        bn: 'মাইক্রোসার্ভিস আর্কিটেকচারে ডিস্ট্রিবিউটেড কোরিলেশন আইডি (বা ট্রেস আইডি) পাঠানোর মূল সুবিধা কী?',
      },
      options: [
        {
          en: 'It links all independent asynchronous log events generated across multiple microservices back to a single user request transaction',
          bn: 'এটি একাধিক মাইক্রোসার্ভিস জুড়ে তৈরি হওয়া সমস্ত স্বাধীন লগ ইভেন্টকে একটি একক ব্যবহারকারী রিকোয়েস্টের সাথে যুক্ত করে',
        },
        {
          en: 'It doubles the network connection speed of all servers',
          bn: 'এটি সমস্ত সার্ভারের নেটওয়ার্ক গতি দ্বিগুণ করে',
        },
        {
          en: 'It converts JSON logs into spreadsheet Excel files',
          bn: 'এটি জেসন লগকে এক্সেল ফাইলে রূপান্তর করে',
        },
        {
          en: 'It deletes all error logs automatically after 1 second',
          bn: 'এটি ১ সেকেন্ড পর সমস্ত এরর লগ নিজে থেকে মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: { en: 'Correlation IDs tie multi-service logs together.', bn: 'কোরিলেশন আইডি একাধিক সার্ভিসের লগকে একত্রে সংযুক্ত করে।' },
      explanation: {
        en: 'Correlation IDs link disparate logs across microservices, allowing engineers to trace an entire request journey.',
        bn: 'কোরিলেশন আইডি বিভিন্ন সার্ভিসের লগকে একটি সাধারণ সুতোয় বাঁধে, ফলে একটি রিকোয়েস্টের সম্পূর্ণ যাত্রা পর্যবেক্ষণ করা যায়।',
      },
    },
    {
      id: 'log-rel-ex-2',
      kind: 'mcq',
      topic: 'correlation-sim-latency',
      question: {
        en: 'In our code walkthrough, what was the total transaction latency across the 3 microservices, and how many error events were isolated?',
        bn: 'আমাদের কোড আলোচনায় ৩টি মাইক্রোসার্ভিসে মোট লেনদেন ল্যাটেন্সি কত ছিল এবং কয়টি এরর ইভেন্ট শনাক্ত করা হয়েছিল?',
      },
      options: [
        { en: 'Total latency = 120ms across 3 microservices, with 1 error event (combined diagnostic metric = 121)', bn: '৩টি মাইক্রোসার্ভিসে মোট ল্যাটেন্সি = ১২০ms, এবং ১টি এরর ইভেন্ট (মোট ডায়াগনস্টিক মেট্রিক = ১২১)' },
        { en: 'Total latency = 500ms across 5 microservices, with 5 error events', bn: '৫টি মাইক্রোসার্ভিসে মোট ল্যাটেন্সি = ৫০০ms, এবং ৫টি এরর ইভেন্ট' },
        { en: 'Total latency = 20ms across 1 microservice, with 0 error events', bn: '১টি মাইক্রোসার্ভিসে মোট ল্যাটেন্সি = ২০ms, এবং ০টি এরর ইভেন্ট' },
        { en: 'Total latency = 0ms across 0 microservices, with 0 error events', bn: '০টি মাইক্রোসার্ভিসে মোট ল্যাটেন্সি = ০ms, এবং ০টি এরর ইভেন্ট' },
      ],
      answer: 0,
      hint: { en: '15 + 25 + 80 = 120ms; 1 error; 120 + 1 = 121.', bn: '১৫ + ২৫ + ৮০ = ১২০ms; ১টি এরর; ১২০ + ১ = ১২১।' },
      explanation: {
        en: 'The simulation summed latencies of 15ms, 25ms, and 80ms to 120ms across 3 services, isolating 1 error (120 + 1 = 121).',
        bn: 'সিমুলেশনটিতে ১৫ms, ২৫ms ও ৮০ms যোগ করে ৩টি সার্ভিসে মোট ১২০ms ল্যাটেন্সি এবং ১টি এরর (১২০ + ১ = ১২১) হিসাব করা হয়েছিল।',
      },
    },
    {
      id: 'log-rel-ex-3',
      kind: 'mcq',
      topic: 'asynclocalstorage-trace-retention',
      question: {
        en: 'In Node.js backend microservices, what core runtime module preserves trace correlation context across asynchronous callbacks and Promises without manually passing arguments?',
        bn: 'Node.js ব্যাকএন্ড সার্ভিসে আর্গুমেন্ট পাস না করেই কোন রানটাইম মডিউলটি অ্যাসিঙ্ক কলব্যাক ও প্রমিজ জুড়ে ট্রেস কোরিলেশন কনটেক্সট অক্ষত রাখে?',
      },
      options: [
        {
          en: 'AsyncLocalStorage (part of the node:async_hooks core module)',
          bn: 'AsyncLocalStorage (node:async_hooks কোর মডিউলের অংশ)',
        },
        {
          en: 'process.exit',
          bn: 'process.exit',
        },
        {
          en: 'Math.random',
          bn: 'Math.random',
        },
        {
          en: 'JSON.stringify',
          bn: 'JSON.stringify',
        },
      ],
      answer: 0,
      hint: { en: 'AsyncLocalStorage stores async context.', bn: 'AsyncLocalStorage অ্যাসিঙ্ক কনটেক্সট সংরক্ষণ করে।' },
      explanation: {
        en: 'AsyncLocalStorage stores context throughout asynchronous execution chains without requiring manual function parameter passing.',
        bn: 'AsyncLocalStorage প্রতিটি ফাংশনে ম্যানুয়ালি ডেটা পাস না করেই সম্পূর্ণ অ্যাসিঙ্ক চেইনে কনটেক্সট বজায় রাখে।',
      },
    },
    {
      id: 'log-rel-ex-4',
      kind: 'predict',
      topic: 'w3c-trace-header-name',
      question: {
        en: 'What standard W3C HTTP header name carries the 4-part distributed trace context (e.g. traceparent)?',
        bn: 'কোন আদর্শ W3C এইচটিটিপি হেডারটি ৪-অংশের ডিস্ট্রিবিউটেড ট্রেস কনটেক্সট বহন করে (যেমন traceparent)?',
      },
      answer: 'traceparent',
      accept: ['traceparent', 'Traceparent', 'trace-parent'],
      hint: { en: 't-r-a-c-e-p-a-r-e-n-t', bn: 't-r-a-c-e-p-a-r-e-n-t' },
      explanation: {
        en: 'The traceparent header is the W3C standard header for propagating distributed tracing context across HTTP calls.',
        bn: 'traceparent হলো এইচটিটিপি কলের মাধ্যমে ডিস্ট্রিবিউটেড ট্রেস কনটেক্সট পাঠানোর জন্য W3C আদর্শ হেডার।',
      },
    },
  ],
  quiz: {
    id: 'logging-release-quiz',
    title: { en: 'Lesson 8 exam', bn: 'পাঠ ৮ পরীক্ষা' },
    questions: [
      {
        id: 'log-rel-q1',
        kind: 'mcq',
        topic: 'alert-runbook-best-practice',
        question: {
          en: 'What essential information should every production alert notification include to ensure rapid incident response by on-call engineers?',
          bn: 'অন-কল ইঞ্জিনিয়ারের দ্রুত সমস্যা সমাধানের জন্য প্রতিটি প্রোডাকশন অ্যালার্ট নোটিফিকেশনে কোন তথ্যটি থাকা অপরিহার্য?',
        },
        options: [
          {
            en: 'Direct deep-links to pre-filtered Grafana Loki/OpenSearch queries and an actionable triage runbook URL outlining remediation steps',
            bn: 'সরাসরি ফিল্টার করা গ্রাফানা লোকি বা ওপেনসার্চ কুয়েরির লিঙ্ক এবং সমস্যা সমাধানের নির্দেশিকাযুক্ত কার্যকর রানবুকের ইউআরএল',
          },
          {
            en: 'A picture of the cloud provider headquarters building',
            bn: 'ক্লাউড প্রোভাইডারের প্রধান কার্যালয়ের একটি ছবি',
          },
          {
            en: 'The personal home address of the developer who committed the code',
            bn: 'কোড লেখা ডেভেলপারের ব্যক্তিগত বাসার ঠিকানা',
          },
          {
            en: 'An MP3 audio recording of ocean waves',
            bn: 'সমুদ্রের ঢেউয়ের একটি এমপি৩ অডিও রেকর্ডিং',
          },
        ],
        answer: 0,
        hint: { en: 'Include query links and runbooks.', bn: 'সরাসরি কুয়েরি লিঙ্ক ও সমাধানের রানবুক যুক্ত রাখুন।' },
        explanation: {
          en: 'Actionable alerts must include pre-filtered query URLs and runbook links to eliminate manual search time during incidents.',
          bn: 'কার্যকর অ্যালার্টে অবশ্যই সরাসরি কুয়েরি লিঙ্ক এবং সমাধানের রানবুক থাকা উচিত যাতে অনুসন্ধানে অযথা সময় নষ্ট না হয়।',
        },
      },
      {
        id: 'log-rel-q2',
        kind: 'mcq',
        topic: 'metric-sum-check',
        question: {
          en: 'In our code walkthrough, what was the combined diagnostic metric computed from totalTransactionLatency (120ms) plus errorsCount (1)?',
          bn: 'আমাদের কোড আলোচনায় totalTransactionLatency (১২০ms) এবং errorsCount (১) যোগ করে মোট কত ডায়াগনস্টিক মেট্রিক হিসাব করা হয়েছিল?',
        },
        options: [
          { en: '121 across 3 logged services', bn: '৩টি লগ করা সার্ভিসে ১২১' },
          { en: '200 across 3 logged services', bn: '৩টি লগ করা সার্ভিসে ২০০' },
          { en: '50 across 1 logged service', bn: '১টি লগ করা সার্ভিসে ৫০' },
          { en: '0 across 0 logged services', bn: '০টি লগ করা সার্ভিসে ০' },
        ],
        answer: 0,
        hint: { en: '120 + 1 = 121.', bn: '১২০ + ১ = ১২১।' },
        explanation: {
          en: 'The simulation resolved 120ms total latency and 1 error event, producing a combined diagnostic metric of 121 across 3 services.',
          bn: 'সিমুলেশনটিতে ১২০ms মোট ল্যাটেন্সি ও ১টি এরর ইভেন্ট যোগ করে ৩টি সার্ভিসে মোট ১২১ মেট্রিক হিসাব করা হয়েছিল।',
        },
      },
      {
        id: 'log-rel-q3',
        kind: 'mcq',
        topic: 'rate-sampling-benefit',
        question: {
          en: 'What operational advantage does intelligent rate sampling provide when handling high-volume production endpoints (such as load balancer health checks)?',
          bn: 'উচ্চ-ভলিউমের প্রোডাকশন এন্ডপয়েন্টে (যেমন লোড ব্যালেন্সার হেলথ চেক) বুদ্ধিমান রেট স্যাম্পলিং ব্যবহারের সুবিধা কী?',
        },
        options: [
          {
            en: 'It captures 100% of failed requests while sampling only 1% of routine successful requests, slashing ingestion costs without blinding incident response',
            bn: 'এটি সমস্ত ব্যর্থ রিকোয়েস্ট শতভাগ রেকর্ড করে কিন্তু সাধারণ সফল রিকোয়েস্টের মাত্র ১% সংগ্রহ করে, ফলে সমস্যা নির্ণয় ব্যাহত না করেই খরচ বহুলাংশে কমে',
          },
          {
            en: 'It permanently turns off the server cooling fans',
            bn: 'এটি সার্ভারের কুলিং ফ্যান চিরতরে বন্ধ করে দেয়',
          },
          {
            en: 'It converts network cables into wireless connections automatically',
            bn: 'এটি নেটওয়ার্ক ক্যাবলকে স্বয়ংক্রিয়ভাবে ওয়্যারলেস কানেকশনে রূপান্তর করে',
          },
          {
            en: 'It deletes all user passwords from the database',
            bn: 'এটি ডেটাবেস থেকে সমস্ত পাসওয়ার্ড মুছে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Sample successes; keep all errors.', bn: 'সফল রিকোয়েস্ট স্যাম্পল করুন; সব এরর রেখে দিন।' },
        explanation: {
          en: 'Intelligent sampling retains critical anomalies while pruning repetitive success records to optimize storage costs.',
          bn: 'বুদ্ধিমান স্যাম্পলিং গুরুত্বপূর্ণ এররগুলোকে অক্ষত রেখে অপ্রয়োজনীয় সফল রেকর্ড ছেঁটে ফেলে স্টোরেজ খরচ নিয়ন্ত্রণ করে।',
        },
      },
      {
        id: 'log-rel-q4',
        kind: 'predict',
        topic: 'w3c-standard-body',
        question: {
          en: 'What international standards organization created the Trace Context and HTTP traceparent specification (e.g. W3C)?',
          bn: 'কোন আন্তর্জাতিক স্ট্যান্ডার্ড সংস্থা Trace Context এবং HTTP traceparent স্পেসিফিকেশন তৈরি করেছে (যেমন W3C)?',
        },
        answer: 'W3C',
        accept: ['W3C', 'w3c', 'World Wide Web Consortium'],
        hint: { en: 'World Wide Web Consortium = W-3-C.', bn: 'World Wide Web Consortium = W-3-C।' },
        explanation: {
          en: 'The W3C (World Wide Web Consortium) authored the Trace Context specification for distributed tracing.',
          bn: 'W3C (World Wide Web Consortium) ডিস্ট্রিবিউটেড ট্রেসিংয়ের জন্য Trace Context স্পেসিফিকেশন প্রণয়ন করেছে।',
        },
      },
    ],
  },
};
