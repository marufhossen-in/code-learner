import type { Lesson } from '../../../lib/types';

export const InvocationsAndTheInvocationLesson: Lesson = {
  slug: 'invocations-and-the-invocation',
  tech: 'serverless',
  title: {
    en: 'Invocation Models — Synchronous vs Asynchronous Function Execution',
    bn: 'ইনভোকেশন মডেল — সিনক্রোনাস বনাম অ্যাসিনক্রোনাস ফাংশন নির্বাহ',
  },
  summary: {
    en: 'A foundational overview of serverless invocation models. Contrast synchronous RequestResponse blocking with asynchronous Event queues across 600 orders (300 sync at 45 ms vs 300 async at 2.50 ms). Slash client wait time by 42.50 ms (94.44% faster response) and ensure dead-letter safety with 0 dropped events across 100.00% of transactions.',
    bn: 'সার্ভারলেস ইনভোকেশন মডেলের মৌলিক ধারণা। ৬০০টি অর্ডারে ব্লকিং সিনক্রোনাস রিকোয়েস্ট-রেসপন্সের সাথে বাফার্ড অ্যাসিনক্রোনাস কিউয়ের তুলনা করুন (৪৫ ms এ ৩০০টি সিনক্রোনাস বনাম ২.৫০ ms এ ৩০০টি অ্যাসিনক্রোনাস)। গ্রাহকের অপেক্ষার সময় ৪২.৫০ ms কমিয়ে (৯৪.৪৪% দ্রুত সাড়া) ০টি ড্রপ ইভেন্ট সহ ১০০.০০% লেনদেনে ডেড-লেটার নিরাপত্তা নিশ্চিত করুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Synchronous and asynchronous serverless execution models', bn: 'WHAT — সিনক্রোনাস ও অ্যাসিনক্রোনাস সার্ভারলেস এক্সিকিউশন মডেল' },
    },
    {
      type: 'para',
      text: {
        en: 'When your cloud architecture routes user requests into serverless functions, how the caller invokes your handler dictates system throughput and failure behavior. In the synchronous RequestResponse invocation model, the calling client halts and blocks until the function finishes execution and returns an HTTP response. In contrast, the asynchronous Event model accepts the incoming event into an internal managed queue, returns an immediate HTTP 202 acknowledgment to the caller, and executes the handler in the background. Asynchronous invocations provide built-in automatic retries with exponential backoff and dead-letter queues. Mastering both models empowers you to build responsive user interfaces while protecting backend databases from burst traffic spikes.',
        bn: 'যখন আপনার ক্লাউড আর্কিটেকচার ব্যবহারকারীর রিকোয়েস্ট সার্ভারলেস ফাংশনে পাঠায়, তখন ক্লায়েন্ট কীভাবে হ্যান্ডলারকে ইনভোক করছে তার ওপর সিস্টেমের পারফরম্যান্স ও এরর হ্যান্ডলিং নির্ভর করে। সিনক্রোনাস RequestResponse মডেলে ক্লায়েন্ট ফাংশন সম্পন্ন হওয়া এবং ডেটা ফেরত না আসা পর্যন্ত অপেক্ষা করে আটকে থাকে। অন্যদিকে অ্যাসিনক্রোনাস Event মডেলে ক্লাউড ইভেন্টটি নিজস্ব কিউতে জমা রেখে ক্লায়েন্টকে তাৎক্ষণিক ২০২ স্ট্যাটাস ফেরত দেয় এবং ব্যাকগ্রাউন্ডে কাজ চালায়। অ্যাসিনক্রোনাস পদ্ধতিতে স্বয়ংক্রিয় রিট্রাই এবং ডেড-লেটার কিউয়ের সুরক্ষা থাকে। এই দুটি মডেলের পার্থক্য ও প্রয়োগ আয়ত্ত করলে দ্রুতগতির ওয়েব ইন্টারফেস তৈরি করা যায় এবং হঠাৎ আসা ট্রাফিকের ধাক্কা থেকে ব্যাকএন্ড ডেটাবেজ সুরক্ষিত রাখা যায়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Invocation models: 300 synchronous (45 ms) vs 300 asynchronous (2.50 ms) orders', bn: 'ইনভোকেশন মডেল: ৩০০টি সিনক্রোনাস (৪৫ ms) বনাম ৩০০টি অ্যাসিনক্রোনাস (২.৫০ ms) অর্ডার' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Serverless Invocation Models diagram">
<rect x="25" y="35" width="160" height="165" rx="6" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
<text x="105" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">600 Total Orders</text>

<rect x="35" y="80" width="140" height="35" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="105" y="96" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">300 Sync (Checkout)</text>
<text x="105" y="108" text-anchor="middle" font-size="7" fill="#dc2626">45 ms client wait</text>

<rect x="35" y="125" width="140" height="35" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="105" y="141" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">300 Async (Invoice)</text>
<text x="105" y="153" text-anchor="middle" font-size="7" fill="#15803d">2.50 ms (+42.50 ms saved)</text>

<text x="105" y="185" text-anchor="middle" font-size="7" font-weight="700" fill="#166534">94.44% faster client ACK</text>

<line x1="185" y1="117" x2="235" y2="117" stroke="#dc2626" stroke-width="2"/>
<polygon points="235,113 245,117 235,121" fill="#dc2626"/>

<rect x="245" y="35" width="180" height="165" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="335" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">Cloud Invocation Router</text>

<rect x="255" y="78" width="160" height="40" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
<text x="335" y="95" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Sync: Direct Execution</text>
<text x="335" y="108" text-anchor="middle" font-size="7" fill="#1e40af">Zero platform retries</text>

<rect x="255" y="125" width="160" height="40" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1.5"/>
<text x="335" y="142" text-anchor="middle" font-size="8" font-weight="700" fill="#92400e">Async: Managed Queue</text>
<text x="335" y="155" text-anchor="middle" font-size="7" fill="#78350f">298 attempt 1 + 2 attempt 2</text>

<text x="335" y="185" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">0 dropped events (100.00%)</text>

<line x1="425" y1="117" x2="475" y2="117" stroke="#16a34a" stroke-width="2"/>
<polygon points="475,113 485,117 475,121" fill="#16a34a"/>

<rect x="475" y="35" width="140" height="165" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="545" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Lambda Handlers</text>

<rect x="485" y="80" width="120" height="40" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="98" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Sync Handler</text>
<text x="545" y="111" text-anchor="middle" font-size="7" fill="#166534">Immediate Output</text>

<rect x="485" y="128" width="120" height="40" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="146" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Async Worker</text>
<text x="545" y="159" text-anchor="middle" font-size="7" fill="#166534">Automatic Retries</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Asynchronous invocations return in 2.50 ms, saving 42.50 ms of client waiting</text>
</svg>`,
      caption: {
        en: 'Processing 600 orders: 300 synchronous checkouts block clients for 45 ms, while 300 asynchronous invoices respond in 2.50 ms (+42.50 ms saved, 94.44% faster response). Async retries resolved 298 on attempt 1 (99.33%) and 2 on attempt 2 (0.67%) with 0 dropped events (100.00% success).',
        bn: '৬০০টি অর্ডারে ৩০০টি সিনক্রোনাস চেকআউটে ক্লায়েন্টকে ৪৫ ms অপেক্ষা করতে হয়, অথচ ৩০০টি অ্যাসিনক্রোনাস ইনভয়েস মাত্র ২.৫০ ms এ রেসপন্স দেয় (+৪২.৫০ ms সাশ্রয়, ৯৪.৪৪% দ্রুত)। অ্যাসিনক্রোনাস কিউ ২৯৮টি ১ নম্বর চেষ্টায় (৯৯.৩৩%) ও ২টি ২ নম্বর চেষ্টায় (০.৬৭%) সম্পন্ন করে ০টি ড্রপ সহ ১০০.০০% সফলতা নিশ্চিত করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Synchronous Invocation',
          def: {
            en: 'An execution model where the client establishes a persistent connection and halts until the function finishes execution and returns the response payload.',
            bn: 'এমন একটি পদ্ধতি যেখানে ক্লায়েন্ট সংযোগ চালু রেখে ফাংশন শেষ হওয়া এবং ফলাফল ফেরত আসা পর্যন্ত অপেক্ষা করে।',
          },
        },
        {
          term: 'Asynchronous Invocation',
          def: {
            en: 'An execution model where the platform enqueues the payload, returns an instant HTTP 202 Accepted, and executes the handler in the background with retries.',
            bn: 'এমন একটি পদ্ধতি যেখানে প্ল্যাটফর্ম ইভেন্টটি কিউতে জমা রেখে সাথে সাথে ২০২ রেসপন্স দেয় এবং ব্যাকগ্রাউন্ডে ফাংশন চালায়।',
          },
        },
        {
          term: 'Dead-Letter Queue (DLQ)',
          def: {
            en: 'A secondary message queue where asynchronous events that repeatedly fail all automatic retries are routed for quarantine and offline inspection.',
            bn: 'একটি ব্যাকআপ মেসেজ কিউ যেখানে বারবার ব্যর্থ হওয়া সমস্যাযুক্ত ইভেন্টগুলো আলাদা করে বিশ্লেষণের জন্য জমা রাখা হয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Decoupling client interfaces from backend compute workloads', bn: 'কেন — ক্লায়েন্ট ইন্টারফেস থেকে ব্যাকএন্ড কাজ পৃথকীকরণ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Sub-second client responsiveness: returning an immediate 202 response frees mobile apps from waiting on slow external APIs, cutting latency by 42.50 ms.', bn: 'দ্রুত রেসপন্স প্রদান: সাথে সাথে ২০২ স্ট্যাটাস দিলে মোবাইল অ্যাপ আটকে থাকে না এবং ৪২.৫০ ms সময় বেঁচে যায়।' },
        { en: 'Automatic failure tolerance: asynchronous invocations retry twice with exponential backoff before sending poison pills to dead-letter queues.', bn: 'স্বয়ংক্রিয় ত্রুটি সহনশীলতা: সাময়িক নেটওয়ার্ক ত্রুটি হলে অ্যাসিনক্রোনাস মোড নিজে থেকেই দুইবার পুনরায় চেষ্টা করে সমস্যা সমাধান করে।' },
        { en: 'Smooth traffic spike absorption: queue-buffered asynchronous triggers protect downstream databases from being overwhelmed during flash sales.', bn: 'ট্রাফিকের চাপ সামলানো: কিউয়ের সাহায্যে বাফার তৈরি করে হঠাৎ আসা হাজার হাজার রিকোয়েস্ট সুশৃঙ্খলভাবে ডেটাবেজে পাঠানো যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — 4 steps to configure asynchronous processing with DLQ', bn: 'HOW — ৪টি ধাপে অ্যাসিনক্রোনাস ও DLQ কনফিগারেশন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Create SQS dead-letter queue', bn: '১. SQS ডেড-লেটার কিউ তৈরি' }, text: { en: 'Provision an Amazon SQS queue dedicated to receiving poison messages that exceed retry limits.', bn: 'বারবার ব্যর্থ হওয়া ইভেন্ট জমা রাখার জন্য একটি আলাদা SQS কিউ তৈরি করুন।' } },
        { title: { en: '2. Attach on-failure destination', bn: '২. অন-ফেইলিওর ডেস্টিনেশন যুক্ত করা' }, text: { en: 'Configure Lambda on-failure destination pointing to your newly created SQS dead-letter queue ARN.', bn: 'ল্যাম্বডার কনফিগারেশনে ব্যর্থ ইভেন্ট পাঠানোর জন্য সেই SQS কিউয়ের ঠিকানা নির্দেশ করুন।' } },
        { title: { en: '3. Set maximum retry attempts', bn: '৩. রিট্রাই সীমা নির্ধারণ' }, text: { en: 'Configure MaximumRetryAttempts: 2 to permit up to two automatic retries on unhandled errors.', bn: 'ফাংশনে এরর হলে সর্বোচ্চ কয়বার স্বয়ংক্রিয় চেষ্টা করা হবে তা নির্ধারণ করুন।' } },
        { title: { en: '4. Invoke with Event type', bn: '৪. Event টাইপে ইনভোক করা' }, text: { en: 'In AWS SDK, specify InvocationType: "Event" when calling lambda.invoke() to trigger async processing.', bn: 'এসডিকে কোডে InvocationType: "Event" লিখে ফাংশনকে ব্যাকগ্রাউন্ডে চালু করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'invocation_models_sim.js',
      code: `// Simulated synchronous vs asynchronous invocation processing across 600 orders
const syncOrders = 300;
const asyncOrders = 300;
const totalOrders = syncOrders + asyncOrders; // 600

const syncClientLatencyMs = 45;
const asyncClientLatencyMs = 2.50;
const clientLatencySavedMs = syncClientLatencyMs - asyncClientLatencyMs; // 42.50 ms
const clientSpeedupPct = (clientLatencySavedMs / syncClientLatencyMs) * 100; // 94.44%

const asyncAttempt1Success = 298; // 99.33%
const asyncAttempt2Success = 2; // 0.67%
const asyncAttempt1Pct = (asyncAttempt1Success / asyncOrders) * 100;
const asyncAttempt2Pct = (asyncAttempt2Success / asyncOrders) * 100;

const droppedMessages = 0;
const overallSuccessPct = 100.00;

console.log("Total orders: " + totalOrders);
console.log("Synchronous orders: " + syncOrders + " (client latency: " + syncClientLatencyMs + " ms)");
console.log("Asynchronous orders: " + asyncOrders + " (client latency: " + asyncClientLatencyMs.toFixed(2) + " ms, +" + clientLatencySavedMs.toFixed(2) + " ms saved / " + clientSpeedupPct.toFixed(2) + "% faster)");
console.log("Async retry queue: " + asyncAttempt1Success + " on attempt 1 (" + asyncAttempt1Pct.toFixed(2) + "%), " + asyncAttempt2Success + " on attempt 2 (" + asyncAttempt2Pct.toFixed(2) + "%), " + droppedMessages + " dropped (" + overallSuccessPct.toFixed(2) + "% success)");

// Output:
// Total orders: 600
// Synchronous orders: 300 (client latency: 45 ms)
// Asynchronous orders: 300 (client latency: 2.50 ms, +42.50 ms saved / 94.44% faster)
// Async retry queue: 298 on attempt 1 (99.33%), 2 on attempt 2 (0.67%), 0 dropped (100.00% success)`,
      caption: {
        en: 'Processing 600 orders: 300 synchronous checkouts block clients for 45 ms, while 300 asynchronous invoices respond in 2.50 ms (+42.50 ms saved, 94.44% faster response). Async retries resolved 298 on attempt 1 (99.33%) and 2 on attempt 2 (0.67%) with 0 dropped events (100.00% success).',
        bn: '৬০০টি অর্ডারে ৩০০টি সিনক্রোনাস চেকআউটে ক্লায়েন্টকে ৪৫ ms অপেক্ষা করতে হয়, অথচ ৩০০টি অ্যাসিনক্রোনাস ইনভয়েস মাত্র ২.৫০ ms এ রেসপন্স দেয় (+৪২.৫০ ms সাশ্রয়, ৯৪.৪৪% দ্রুত)। অ্যাসিনক্রোনাস কিউ ২৯৮টি ১ নম্বর চেষ্টায় (৯৯.৩৩%) ও ২টি ২ নম্বর চেষ্টায় (০.৬৭%) সম্পন্ন করে ০টি ড্রপ সহ ১০০.০০% সফলতা নিশ্চিত করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive invocation model comparison lab', bn: 'INSIDE — জীবন্ত ইনভোকেশন মডেল তুলনা ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Examine invocation telemetry across 600 total transactions. Direct synchronous checkouts (300 orders) block clients for 45 ms. Meanwhile, asynchronous invocations (300 orders) return an immediate 202 Accepted in 2.50 ms (+42.50 ms saved, 94.44% faster). The background queue resolves 298 orders on attempt 1 (99.33%) and recovers 2 orders on retry attempt 2 (0.67%), resulting in 0 dropped events across 100.00% of transactions.',
        bn: 'মোট ৬০০টি লেনদেনের ইনভোকেশন মেট্রিক্স পর্যালোচনা করুন। সরাসরি সিনক্রোনাস চেকআউট (৩০০টি অর্ডার) ক্লায়েন্টকে ৪৫ ms আটকে রাখে। অন্যদিকে অ্যাসিনক্রোনাস ইনভোকেশন (৩০০টি অর্ডার) মাত্র ২.৫০ ms এ তাৎক্ষণিক ২০২ স্ট্যাটাস প্রদান করে (+৪২.৫০ ms সাশ্রয়, ৯৪.৪৪% দ্রুত)। ব্যাকগ্রাউন্ড কিউ ২৯৮টি অর্ডার ১ নম্বর চেষ্টায় (৯৯.৩৩%) এবং ২টি অর্ডার ২ নম্বর রিট্রাইয়ে (০.৬৭%) সম্পন্ন করায় ১০০.০০% লেনদেনে ০টি ইভেন্ট ড্রপ হয়েছে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Invocation lab (verify async speedup, press Run)', bn: 'ইনভোকেশন ল্যাব (অ্যাসিনক্রোনাস গতি যাচাই, Run)' },
      html: '<h3>Invocation Model Benchmark</h3>\n<pre id="out"></pre>\n<p>Compare client latency between synchronous and asynchronous invocations.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const sync = 45;\nconst asy = 2.50;\nconst saved = sync - asy;\nconsole.log("latency saved: " + saved + " ms");\ndocument.getElementById("out").textContent = "Sync Latency: " + sync + " ms · Async Latency: " + asy.toFixed(2) + " ms · Client Saved: +" + saved.toFixed(2) + " ms (94.44% faster, 0 drops ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — When to choose sync vs async invocations', bn: 'ফলাফল — সিনক্রোনাস নাকি অ্যাসিনক্রোনাস: ব্যবহারের সোনালী নিয়ম' },
    },
    {
      type: 'list',
      items: [
        { en: 'Use synchronous invocations for interactive reads and immediate confirmations: user authentication, search queries, and real-time checkout validations.', bn: 'ইন্টারেক্টিভ কাজের জন্য সিনক্রোনাস বেছে নিন: ব্যবহারকারী লগইন, সার্চ কুয়েরি এবং সরাসরি কনফার্মেশনের জন্য এটি প্রযোজ্য।' },
        { en: 'Use asynchronous invocations for background jobs and bulk ingestion: PDF invoice generation, video encoding, email notifications, and webhook processing.', bn: 'ভারী ব্যাকগ্রাউন্ড কাজের জন্য অ্যাসিনক্রোনাস বেছে নিন: পিডিএফ তৈরি, ভিডিও এনকোডিং, ইমেইল পাঠানো এবং ওয়েবহুক প্রসেসিংয়ে এটি আদর্শ।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common invocation pitfalls', bn: 'ডিবাগ — ইনভোকেশনের সাধারণ সমস্যা ও প্রতিকার' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Silent message drops from missing dead-letter queues', bn: 'ডেড-লেটার কিউ না থাকায় নিঃশব্দে মেসেজ হারিয়ে যাওয়া' },
      text: {
        en: 'If you configure an asynchronous event trigger without a Dead-Letter Queue (DLQ) or on-failure destination, any event that fails its automatic retries is silently dropped forever. Always attach an SQS DLQ or SNS topic to capture failing payloads for debugging.',
        bn: 'যদি অ্যাসিনক্রোনাস ট্রিগারে ডেড-লেটার কিউ (DLQ) যুক্ত না থাকে, তবে কোনো মেসেজ দুইবার ব্যর্থ হওয়ার পর চিরতরে মুছে যায় এবং কোনো রেকর্ড থাকে না। ত্রুটিপূর্ণ ডেটা সুরক্ষিত রাখতে সর্বদা SQS কিউ বা SNS টপিক যুক্ত রাখুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Ensuring idempotency on retried asynchronous events', bn: 'পুনরায় চালিত অ্যাসিনক্রোনাস ইভেন্টে ইডিমপোটেন্সি নিশ্চিত করা' },
      text: {
        en: 'Because asynchronous event queues guarantee at-least-once delivery, network blips can cause your handler to receive the identical event twice. Store processed message IDs in DynamoDB or Redis with conditional writes to prevent duplicate payments or duplicate shipments.',
        bn: 'অ্যাসিনক্রোনাস কিউতে একই মেসেজ একাধিকবার আসার সম্ভাবনা থাকে। সিস্টেমে ডুপ্লিকেট পেমেন্ট বা ভুল অর্ডার এড়াতে প্রসেস করা মেসেজ আইডি ডায়নামোডিবি বা রেডিসে সেভ করে ইডিমপোটেন্সি নিশ্চিত করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production invocation pipelines', bn: 'বাস্তব ক্ষেত্র — আধুনিক এন্টারপ্রাইজ ইনভোকেশন পাইপলাইন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Stripe Webhook Gateway: ingests payment events asynchronously, queuing notifications to prevent partner merchant timeouts during massive Black Friday sales.', bn: 'স্ট্রাইপ ওয়েবহুক গেটওয়ে: পেমেন্ট নোটিফিকেশন অ্যাসিনক্রোনাসভাবে জমা করে যাতে ছুটির দিনে অতিরিক্ত ট্রাফিকেও কোনো রিকোয়েস্ট ড্রপ না হয়।' },
        { en: 'Twilio Programmable SMS: accepts millions of API SMS dispatch requests synchronously, then immediately triggers asynchronous delivery pipelines via serverless workers.', bn: 'টুইলিও এসএমএস প্ল্যাটফর্ম: গ্রাহকের এসএমএস পাঠানোর রিকোয়েস্ট দ্রুত গ্রহণ করে ব্যাকগ্রাউন্ডে সার্ভারলেস কর্মীদের দিয়ে মেসেজ পাঠায়।' },
        { en: 'Capital One Banking: uses asynchronous Lambda event streams to conduct real-time anti-fraud evaluations across millions of card swipes per second.', bn: 'ক্যাপিটাল ওয়ান ব্যাংক: কার্ড ব্যবহারের সাথে সাথে মিলিসেকেন্ডের মধ্যে জালিয়াতি শনাক্ত করতে অ্যাসিনক্রোনাস ইভেন্ট স্ট্রিম ব্যবহার করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Event Payloads and Event-Driven Architecture', bn: 'পরবর্তী পাঠ — ইভেন্ট পে-লোড ও ইভেন্ট-চালিত আর্কিটেকচার' },
    },
    {
      type: 'para',
      text: {
        en: 'With invocation models and retry patterns understood, Lesson 3 dives into event payload structures: parsing API Gateway proxy schemas, S3 object records, SQS message wrappers, and type-safe validation.',
        bn: 'ইনভোকেশন মডেল ও রিট্রাই মেকানিজম আয়ত্ত করার পর, পাঠ ৩ ইভেন্ট পে-লোডের গঠন শেখাবে: এপিআই গেটওয়ে প্রক্সি স্কিমা, S3 অবজেক্ট রেকর্ড, SQS মেসেজ পার্সিং এবং টাইপ-সেফ ভ্যালিডেশন।',
      },
    },
  ],
  exercises: [
    {
      id: 'srv-inv-ex-1',
      kind: 'mcq',
      topic: 'async-invocation-response-code',
      question: {
        en: 'What HTTP status code does AWS Lambda return immediately to the caller when a function is invoked asynchronously via InvocationType: "Event"?',
        bn: 'যখন কোনো ফাংশন InvocationType: "Event" দিয়ে অ্যাসিনক্রোনাসভাবে ইনভোক করা হয়, তখন AWS Lambda তাৎক্ষণিকভাবে ক্লায়েন্টকে কোন HTTP স্ট্যাটাস কোড ফেরত দেয়?',
      },
      options: [
        {
          en: 'HTTP 202 Accepted, indicating the event has been successfully validated and placed into a managed queue for background execution',
          bn: 'HTTP 202 Accepted, যা নির্দেশ করে যে ইভেন্টটি সফলভাবে গৃহীত হয়েছে এবং ব্যাকগ্রাউন্ডে কাজ করার জন্য কিউতে জমা রাখা হয়েছে',
        },
        {
          en: 'HTTP 404 Not Found, indicating that the server room is empty',
          bn: 'HTTP 404 Not Found, যার অর্থ সার্ভার রুম সম্পূর্ণ খালি',
        },
        {
          en: 'HTTP 500 Internal Server Error, indicating complete hardware failure',
          bn: 'HTTP 500 Internal Server Error, যার অর্থ কম্পিউটারের হার্ডওয়্যার নষ্ট',
        },
        {
          en: 'HTTP 301 Moved Permanently, redirecting to a social media website',
          bn: 'HTTP 301 Moved Permanently, যা অন্য কোনো ওয়েবসাইটে রিডাইরেক্ট করে',
        },
      ],
      answer: 0,
      hint: { en: 'Async returns 202 Accepted immediately.', bn: 'অ্যাসিনক্রোনাস মোডে তাৎক্ষণিক ২০২ স্ট্যাটাস পাওয়া যায়।' },
      explanation: {
        en: 'Asynchronous invocations return HTTP 202 Accepted upon queuing the event for background processing.',
        bn: 'ইভেন্ট কিউতে গৃহীত হওয়ার সাথে সাথে ল্যাম্বডা ২০২ স্ট্যাটাস কোড প্রদান করে।',
      },
    },
    {
      id: 'srv-inv-ex-2',
      kind: 'mcq',
      topic: 'inv-sim-numbers',
      question: {
        en: 'In our code walkthrough, how much client latency was saved by asynchronous invocations (2.50 ms) compared to synchronous checkouts (45 ms) across 600 total orders, and what was the retry success rate?',
        bn: 'আমাদের কোড আলোচনায় ৬০০টি মোট অর্ডারে সিনক্রোনাস চেকআউটের (৪৫ ms) তুলনায় অ্যাসিনক্রোনাস ইনভয়েসে (২.৫০ ms) ক্লায়েন্টের কত সময় বেঁচেছিল এবং রিট্রাইয়ে সাফল্যের হার কত ছিল?',
      },
      options: [
        {
          en: 'Saved 42.50 ms of client wait time (2.50 ms vs 45 ms, 94.44% faster); background queue resolved 298 on attempt 1 (99.33%) and 2 on attempt 2 (0.67%) with 0 dropped events (100.00% success across 600 orders)',
          bn: 'গ্রাহকের অপেক্ষার সময় ৪২.৫০ ms সাশ্রয় (২.৫০ ms বনাম ৪৫ ms, ৯৪.৪৪% দ্রুত); কিউ ২৯৮টি প্রথমবার (৯৯.৩৩%) ও ২টি দ্বিতীয় চেষ্টায় (০.৬৭%) সমাধান করে ৬০০টি অর্ডারে ০টি ড্রপ সহ ১০০.০০% সফলতা নিশ্চিত করে',
        },
        {
          en: 'Saved 0 ms; all 600 orders failed with 100 dropped events',
          bn: '০ ms সাশ্রয়; ৬০০টি অর্ডারের সবকয়টি ব্যর্থ হয়ে ১০০টি ড্রপ হয়েছে',
        },
        {
          en: 'Saved 500 ms; 100 orders dropped with 50 errors across 600 orders',
          bn: '৫০০ ms সাশ্রয়; ৬০০টি অর্ডারে ৫০টি এরর সহ ১০০টি ড্রপ হয়েছে',
        },
        {
          en: 'Saved 10 ms; 50 orders dropped with 20 errors across 600 orders',
          bn: '১০ ms সাশ্রয়; ৬০০টি অর্ডারে ২০টি এরর সহ ৫০টি ড্রপ হয়েছে',
        },
      ],
      answer: 0,
      hint: { en: '45 - 2.50 = 42.50 ms saved (94.44%), 298 (99.33%), 2 (0.67%), 0 drops.', bn: '৪৫ - ২.৫০ = ৪২.৫০ ms সাশ্রয় (৯৪.৪৪%), ২৯৮ (৯৯.৩৩%), ২ (০.৬৭%), ০ ড্রপ।' },
      explanation: {
        en: 'Asynchronous ordering returned in 2.50 ms vs 45 ms, saving 42.50 ms while retries ensured 100.00% success with 0 dropped events across 600 orders.',
        bn: 'অ্যাসিনক্রোনাস ব্যবস্থায় ৪৫ ms এর বদলে মাত্র ২.৫০ ms এ রেসপন্স মিলে ৪২.৫০ ms সময় বাঁচে এবং রিট্রাইয়ের সাহায্যে ৬০০টি অর্ডারে ০টি ড্রপ সহ ১০০.০০% সফলতা আসে।',
      },
    },
    {
      id: 'srv-inv-ex-3',
      kind: 'mcq',
      topic: 'dead-letter-queue-function',
      question: {
        en: 'What is the primary operational role of a Dead-Letter Queue (DLQ) in asynchronous serverless architectures?',
        bn: 'অ্যাসিনক্রোনাস সার্ভারলেস আর্কিটেকচারে Dead-Letter Queue (DLQ)-এর মূল অপারেশনাল দায়িত্ব কী?',
      },
      options: [
        {
          en: 'It captures and preserves poison messages that have repeatedly exhausted all automatic retry attempts, preventing silent data loss and enabling offline debugging',
          bn: 'এটি এমন সব ত্রুটিপূর্ণ মেসেজ সংরক্ষণ করে রাখে যা একাধিকবার চেষ্টা করেও ব্যর্থ হয়েছে, ফলে ডেটা হারিয়ে যায় না এবং পরবর্তীতে কারণ তদন্ত করা যায়',
        },
        {
          en: 'It deletes all user passwords from the database every morning',
          bn: 'প্রতিদিন সকালে এটি ডেটাবেজ থেকে সমস্ত ব্যবহারকারীর পাসওয়ার্ড মুছে ফেলে',
        },
        {
          en: 'It turns on the office air conditioner when server temperatures rise',
          bn: 'সার্ভারের তাপমাত্রা বাড়লে এটি অফিসের এয়ার কন্ডিশনার চালু করে দেয়',
        },
        {
          en: 'It prints postal letters on physical paper and mails them through the post office',
          bn: 'এটি কাগজের চিঠিতে তথ্য প্রিন্ট করে ডাকঘরের মাধ্যমে পোস্ট করে দেয়',
        },
      ],
      answer: 0,
      hint: { en: 'A DLQ quarantines failed messages after retries are exhausted.', bn: 'DLQ বারবার ব্যর্থ হওয়া মেসেজগুলো আলাদা করে জমা রাখে।' },
      explanation: {
        en: 'Dead-Letter Queues isolate poison pills that fail execution retries, ensuring no transaction is silently discarded.',
        bn: 'বারবার ব্যর্থ হওয়া ইভেন্টগুলোকে ডেড-লেটার কিউতে আলাদা করে রাখা হয় যাতে ডেটা চিরতরে হারিয়ে না যায়।',
      },
    },
    {
      id: 'srv-inv-ex-4',
      kind: 'predict',
      topic: 'async-invocation-type-value',
      question: {
        en: 'What string value is passed to the InvocationType parameter in the AWS SDK to request asynchronous execution (e.g. Event)?',
        bn: 'AWS SDK-তে অ্যাসিনক্রোনাস এক্সিকিউশন অনুরোধ করতে InvocationType প্যারামিটারে কোন স্ট্রিং মানটি পাঠানো হয় (যেমন Event)?',
      },
      answer: 'Event',
      accept: ['Event', 'event'],
      hint: { en: 'E-v-e-n-t', bn: 'E-v-e-n-t' },
      explanation: {
        en: 'InvocationType: "Event" instructs Lambda to enqueue the event asynchronously and return an immediate HTTP 202.',
        bn: 'InvocationType: "Event" নির্দেশ করলে ল্যাম্বডা ব্যাকগ্রাউন্ডে কিউতে কাজ জমা রেখে সাথে সাথে ২০২ রেসপন্স পাঠায়।',
      },
    },
  ],
  quiz: {
    id: 'invocations-and-the-invocation-quiz',
    title: { en: 'Lesson 2 exam', bn: 'পাঠ ২ পরীক্ষা' },
    questions: [
      {
        id: 'srv-inv-q1',
        kind: 'mcq',
        topic: 'sync-vs-async-retries',
        question: {
          en: 'How do AWS Lambda built-in retry mechanics differ between synchronous and asynchronous invocations?',
          bn: 'সিনক্রোনাস এবং অ্যাসিনক্রোনাস ইনভোকেশনের ক্ষেত্রে AWS Lambda-এর নিজস্ব রিট্রাই মেকানিজমে কী পার্থক্য রয়েছে?',
        },
        options: [
          {
            en: 'Synchronous invocations provide zero automatic retries by the cloud platform (the caller must handle errors), whereas asynchronous invocations automatically retry twice with exponential backoff before sending to a DLQ',
            bn: 'সিনক্রোনাসে ক্লাউড প্ল্যাটফর্ম নিজে থেকে কোনো রিট্রাই করে না (ক্লায়েন্টকেই এরর সামলাতে হয়), কিন্তু অ্যাসিনক্রোনাসে ল্যাম্বডা স্বয়ংক্রিয়ভাবে দুইবার রিট্রাই করে ব্যর্থ হলে DLQ-তে পাঠায়',
          },
          {
            en: 'Synchronous invocations retry 500 times in 1 millisecond',
            bn: 'সিনক্রোনাস ইনভোকেশন ১ মিলিসেকেন্ডে ৫০০ বার রিট্রাই করে',
          },
          {
            en: 'Asynchronous invocations never execute the handler code',
            bn: 'অ্যাসিনক্রোনাস ইনভোকেশন কখনো হ্যান্ডলার কোড চালায় না',
          },
          {
            en: 'Both invocation types automatically reboot the cloud data center on error',
            bn: 'কোনো এরর হলে উভয় ইনভোকেশনই পুরো ডেটাসেন্টার রিস্টার্ট করে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Sync has 0 retries; async automatically retries twice.', bn: 'সিনক্রোনাসে ০টি রিট্রাই; অ্যাসিনক্রোনাসে নিজে থেকেই ২ বার চেষ্টা হয়।' },
        explanation: {
          en: 'Asynchronous invocations include managed exponential backoff retries; synchronous invocations propagate errors directly to the caller.',
          bn: 'অ্যাসিনক্রোনাসে ক্লাউড নিজে থেকেই দুইবার রিট্রাই করে, কিন্তু সিনক্রোনাসে সরাসরি ক্লায়েন্টের কাছে এরর ফিরে যায়।',
        },
      },
      {
        id: 'srv-inv-q2',
        kind: 'mcq',
        topic: 'inv-sim-client-latency-check',
        question: {
          en: 'In our code walkthrough, what was the client response latency for asynchronous invoice generation compared to synchronous checkout across 600 orders?',
          bn: 'আমাদের কোড আলোচনায় ৬০০টি অর্ডারে সিনক্রোনাস চেকআউটের তুলনায় অ্যাসিনক্রোনাস ইনভয়েসে ক্লায়েন্টের রেসপন্স লেটেন্সি কত ছিল?',
        },
        options: [
          { en: '2.50 ms for asynchronous invocations vs 45 ms for synchronous checkouts (+42.50 ms saved, 94.44% faster)', bn: 'সিনক্রোনাসের ৪৫ ms এর তুলনায় অ্যাসিনক্রোনাসে মাত্র ২.৫০ ms (+৪২.৫০ ms সাশ্রয়, ৯৪.৪৪% দ্রুত)' },
          { en: '500 ms for asynchronous invocations vs 10 ms for synchronous checkouts', bn: 'সিনক্রোনাসের ১০ ms এর তুলনায় অ্যাসিনক্রোনাসে ৫০০ ms' },
          { en: '45 ms for asynchronous invocations vs 45 ms for synchronous checkouts', bn: 'সিনক্রোনাসের ৪৫ ms এর তুলনায় অ্যাসিনক্রোনাসে ৪৫ ms' },
          { en: '1000 ms for asynchronous invocations vs 100 ms for synchronous checkouts', bn: 'সিনক্রোনাসের ১০০ ms এর তুলনায় অ্যাসিনক্রোনাসে ১০০০ ms' },
        ],
        answer: 0,
        hint: { en: '2.50 ms vs 45 ms (+42.50 ms saved, 94.44% faster).', bn: '২.৫০ ms বনাম ৪৫ ms (+৪২.৫০ ms সাশ্রয়, ৯৪.৪৪% দ্রুত)।' },
        explanation: {
          en: 'Asynchronous invoicing immediately returned in 2.50 ms compared to 45 ms for synchronous blocking, cutting wait time by 42.50 ms.',
          bn: 'অ্যাসিনক্রোনাসে ক্লায়েন্ট মাত্র ২.৫০ ms এ উত্তর পেয়ে যায় যেখানে সিনক্রোনাসে ৪৫ ms লাগতো, ফলে ৪২.৫০ ms সময় বাঁচে।',
        },
      },
      {
        id: 'srv-inv-q3',
        kind: 'mcq',
        topic: 'idempotency-in-serverless',
        question: {
          en: 'Why is implementing idempotency critical when writing handlers that process asynchronous message queues?',
          bn: 'অ্যাসিনক্রোনাস মেসেজ কিউ প্রসেস করার হ্যান্ডলার লেখার সময় ইডিমপোটেন্সি নিশ্চিত করা কেন অত্যন্ত জরুরি?',
        },
        options: [
          {
            en: 'Because distributed messaging queues guarantee at-least-once delivery, meaning network glitches can cause the same message to be delivered twice; idempotency prevents duplicate charges or inventory drops',
            bn: 'কারণ ডিস্ট্রিবিউটেড মেসেজ কিউ অন্তত একবার পৌঁছানোর নিশ্চয়তা দেয়, ফলে নেটওয়ার্কের কারণে একই মেসেজ দুইবার আসতে পারে; ইডিমপোটেন্সি থাকলে গ্রাহকের অ্যাকাউন্ট থেকে দুইবার টাকা কাটার ঝুঁকি থাকে না',
          },
          {
            en: 'Because idempotency doubles the physical speed of the CPU clock',
            bn: 'কারণ ইডিমপোটেন্সি কম্পিউটারের প্রসেসরের গতি দ্বিগুণ করে দেয়',
          },
          {
            en: 'Because non-idempotent functions automatically delete the operating system',
            bn: 'কারণ ইডিমপোটেন্সি না থাকলে ফাংশন অপারেটিং সিস্টেম মুছে ফেলে',
          },
          {
            en: 'Because cloud providers charge double for functions without idempotency',
            bn: 'কারণ ইডিমপোটেন্সি না থাকলে ক্লাউড প্রোভাইডার দ্বিগুণ টাকা বিল করে',
          },
        ],
        answer: 0,
        hint: { en: 'Queues deliver at-least-once, risking duplicate execution.', bn: 'কিউ থেকে একই বার্তা দুইবার আসতে পারে, যা ইডিমপোটেন্সি প্রতিরোধ করে।' },
        explanation: {
          en: 'At-least-once delivery can trigger duplicate events; idempotent handlers guarantee that re-processing produces no side effects.',
          bn: 'একই মেসেজ পুনরায় এলেও যাতে সিস্টেমে কোনো ক্ষতিকর ডুপ্লিকেট না হয়, সেজন্য ইডিমপোটেন্সি নিশ্চিত করা আবশ্যক।',
        },
      },
      {
        id: 'srv-inv-q4',
        kind: 'predict',
        topic: 'sqs-acronym-token',
        question: {
          en: 'What three-letter acronym identifies the AWS managed message queuing service widely used as a Dead-Letter Queue (e.g. SQS)?',
          bn: 'ডেড-লেটার কিউ হিসেবে বহুল ব্যবহৃত AWS-এর পরিচালিত মেসেজ কিউইং সার্ভিসকে কোন তিন অক্ষরের সংক্ষেপ দ্বারা ডাকা হয় (যেমন SQS)?',
        },
        answer: 'SQS',
        accept: ['SQS', 'sqs', 'Simple Queue Service'],
        hint: { en: 'S-Q-S', bn: 'S-Q-S' },
        explanation: {
          en: 'Amazon SQS (Simple Queue Service) provides highly scalable message buffering and dead-letter queue storage.',
          bn: 'Amazon SQS হলো নির্ভরযোগ্য মেসেজ বাফারিং ও ডেড-লেটার কিউ সার্ভিস।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'events-and-the-event',
    title: { en: 'Event Payloads and Event-Driven Architecture', bn: 'ইভেন্ট পে-লোড ও ইভেন্ট-চালিত আর্কিটেকচার' },
  },
};
