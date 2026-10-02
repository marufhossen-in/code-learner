import type { Lesson } from '../../../lib/types';

export const HandlersAndTheHandlerLesson: Lesson = {
  slug: 'handlers-and-the-handler',
  tech: 'serverless',
  title: {
    en: 'Function Handlers — Handler Signatures, Execution Context, and Global Lifecycle',
    bn: 'ফাংশন হ্যান্ডলার — হ্যান্ডলারের গঠন, এক্সিকিউশন কন্টেক্সট ও গ্লোবাল জীবনচক্র',
  },
  summary: {
    en: 'A foundational overview of serverless function handlers and execution context. Learn the anatomy of event and context parameters and isolate global initialization from handler logic. Process 1000 invocations with 999 warm runs (99.90%) and 1 cold start (0.10%), achieving a 64.82 ms latency drop (12.18 ms vs 77 ms, an 84.18% speedup with 0 errors).',
    bn: 'সার্ভারলেস ফাংশন হ্যান্ডলার ও এক্সিকিউশন কন্টেক্সটের মৌলিক ধারণা। ইভেন্ট ও কন্টেক্সট প্যারামিটারের গঠন জানুন এবং হ্যান্ডলার লজিক থেকে গ্লোবাল কাজ আলাদা রাখুন। ৯৯৯টি ওয়ার্ম রান (৯৯.৯০%) ও ১টি কোল্ড স্টার্ট (০.১০%) সহ ১০০০টি ইনভোকেশন পরিচালনা করে ৬৪.৮২ ms লেটেন্সি সাশ্রয় (৭৭ ms এর বদলে ১২.১৮ ms, ০টি এরর সহ ৮৪.১৮% গতিবৃদ্ধি) নিশ্চিত করুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Serverless function entry points and execution context', bn: 'WHAT — সার্ভারলেস ফাংশন এন্ট্রি পয়েন্ট ও এক্সিকিউশন কন্টেক্সট' },
    },
    {
      type: 'para',
      text: {
        en: 'When you build modern cloud applications without provisioning dedicated virtual machines, you write discrete modular functions executed on demand. In serverless platforms like AWS (Amazon Web Services) Lambda or Google Cloud Functions, the function handler serves as the definitive entry point where the cloud runtime dispatches incoming events. The handler receives two primary arguments: the event object holding trigger payloads and the context object providing execution runtime metadata. Code placed outside the handler in global scope runs once during container initialization and remains cached across warm invocations. Understanding this lifecycle division allows you to optimize connection pooling, eliminate redundant database handshakes, and slash execution duration.',
        bn: 'যখন আপনি সার্বক্ষণিক ভার্চুয়াল মেশিন না চালিয়ে আধুনিক ক্লাউড অ্যাপ্লিকেশন তৈরি করেন, তখন নির্দিষ্ট কাজের জন্য ছোট ছোট স্বয়ংসম্পূর্ণ ফাংশন লিখতে হয়। AWS (Amazon Web Services) Lambda বা Google Cloud Functions-এর মতো প্ল্যাটফর্মে ফাংশন হ্যান্ডলার হলো মূল প্রবেশদ্বার যেখানে ক্লাউড রানটাইম ইনকামিং ইভেন্ট পাঠিয়ে কোড কার্যকর করে। হ্যান্ডলার প্রধানত দুটি আর্গুমেন্ট গ্রহণ করে: ইভেন্ট অবজেক্ট যা ইনকামিং ডেটা বহন করে এবং কন্টেক্সট অবজেক্ট যা রানটাইমের মেটাডাটা সরবরাহ করে। হ্যান্ডলারের বাইরে গ্লোবাল স্কোপে লেখা কোড কনটেইনার তৈরির সময় একবার চলে এবং পরবর্তী ওয়ার্ম রিকোয়েস্টে সংরক্ষিত থাকে। এই জীবনচক্রের সঠিক ব্যবহার জানলে ডেটাবেজ সংযোগ পুনরায় ব্যবহার করে সময় ও ক্লাউড বিলিং নাটকীয়ভাবে কমানো সম্ভব।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Execution lifecycle across 1000 invocations: 1 cold start vs 999 warm runs', bn: '১০০০টি ইনভোকেশনে এক্সিকিউশন জীবনচক্র: ১টি কোল্ড স্টার্ট বনাম ৯৯৯টি ওয়ার্ম রান' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Serverless Function Handler Lifecycle diagram">
<rect x="25" y="35" width="160" height="165" rx="6" fill="#f8fafc" stroke="#dc2626" stroke-width="1.5"/>
<text x="105" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">Event Trigger</text>

<rect x="35" y="80" width="140" height="40" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="1"/>
<text x="105" y="98" text-anchor="middle" font-size="8" font-weight="700" fill="#991b1b">1000 Invocations</text>
<text x="105" y="112" text-anchor="middle" font-size="7" fill="#dc2626">API Gateway / SQS</text>

<text x="105" y="150" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">0 dropped events</text>
<text x="105" y="170" text-anchor="middle" font-size="7" fill="#64748b">Event + Context passed</text>

<line x1="185" y1="117" x2="235" y2="117" stroke="#dc2626" stroke-width="2"/>
<polygon points="235,113 245,117 235,121" fill="#dc2626"/>

<rect x="245" y="35" width="180" height="165" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="335" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">MicroVM Runtime</text>

<rect x="255" y="75" width="160" height="35" rx="4" fill="#fef3c7" stroke="#d97706" stroke-width="1"/>
<text x="335" y="90" text-anchor="middle" font-size="8" font-weight="700" fill="#92400e">Init Phase: Global Scope</text>
<text x="335" y="102" text-anchor="middle" font-size="7" fill="#78350f">1 cold start (0.10%)</text>

<rect x="255" y="118" width="160" height="35" rx="4" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5"/>
<text x="335" y="133" text-anchor="middle" font-size="8" font-weight="700" fill="#1d4ed8">Invoke Phase: handler()</text>
<text x="335" y="145" text-anchor="middle" font-size="7" fill="#1e40af">999 warm runs (99.90%)</text>

<text x="335" y="180" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Avg Latency: 12.18 ms</text>

<line x1="425" y1="117" x2="475" y2="117" stroke="#16a34a" stroke-width="2"/>
<polygon points="475,113 485,117 475,121" fill="#16a34a"/>

<rect x="475" y="35" width="140" height="165" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="545" y="60" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">Cloud Backend</text>

<rect x="485" y="80" width="120" height="45" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="1"/>
<text x="545" y="100" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">Reused DB Pool</text>
<text x="545" y="113" text-anchor="middle" font-size="7" fill="#166534">+64.82 ms saved</text>

<text x="545" y="160" text-anchor="middle" font-size="8" font-weight="700" fill="#166534">84.18% speedup</text>

<text x="320" y="222" text-anchor="middle" font-size="10" font-weight="600" fill="currentColor">Global scope caching delivers 12.18 ms average latency vs 77 ms without reuse</text>
</svg>`,
      caption: {
        en: 'Across 1000 total invocations, 1 cold start (0.10%) initializes global connections while 999 warm invocations (99.90%) run in 12 ms. Reusing database pools achieves a 12.18 ms average latency vs 77 ms without reuse (+64.82 ms saved, an 84.18% speedup with 0 errors).',
        bn: '১০০০টি ইনভোকেশনে ১টি কোল্ড স্টার্ট (০.১০%) গ্লোবাল সংযোগ তৈরি করে এবং ৯৯৯টি ওয়ার্ম রান (৯৯.৯০%) মাত্র ১২ ms এ শেষ হয়। সংযোগ পুনরায় ব্যবহারে গড় লেটেন্সি ৭৭ ms থেকে কমে ১২.১৮ ms হয় (+৬৪.৮২ ms সাশ্রয়, ০টি এরর সহ ৮৪.১৮% গতিবৃদ্ধি)।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Function Handler',
          def: {
            en: 'The specific entry point method declared in your code that serverless runtimes execute when handling incoming triggers.',
            bn: 'কোডে ঘোষিত মূল ফাংশন যা সার্ভারলেস রানটাইম কোনো ইভেন্ট পাওয়ার সাথে সাথে প্রথম কার্যকর করে।',
          },
        },
        {
          term: 'Execution Context',
          def: {
            en: 'A runtime object passed to handlers providing request metadata, function identifiers, and remaining execution time via getRemainingTimeInMillis().',
            bn: 'একটি রানটাইম অবজেক্ট যা হ্যান্ডলারকে রিকোয়েস্ট আইডি, মেমরি সীমা এবং অবশিষ্ট সময় জানার সুযোগ দেয়।',
          },
        },
        {
          term: 'Cold Start',
          def: {
            en: 'The latency overhead incurred when a cloud provider spins up a brand-new container microVM to handle an invocation.',
            bn: 'নতুন কোনো রিকোয়েস্ট আসার পর ক্লাউড প্ল্যাটফর্ম সম্পূর্ণ নতুন কনটেইনার চালু করার সময় যে প্রাথমিক বিলম্ব ঘটে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — The performance advantages of serverless architecture', bn: 'কেন — সার্ভারলেস আর্কিটেকচারের পারফরম্যান্স ও বাণিজ্যিক সুবিধা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Sub-millisecond billing precision: you pay exclusively for exact compute time consumed during active execution, reducing idle operational costs to zero.', bn: 'মিলিসেকেন্ড বিলিং নিখুঁত রাখা: সার্ভার অলস বসে থাকার জন্য কোনো টাকা দিতে হয় না; কোড যতটুকু সময় চলে কেবল তার বিল হয়।' },
        { en: 'Instantaneous automated horizontal scaling: cloud providers automatically spin up thousands of concurrent microVMs during sudden visitor traffic spikes.', bn: 'স্বয়ংক্রিয় তাৎক্ষণিক স্কেলিং: হঠাৎ লাখ লাখ ব্যবহারকারী সাইটে এলেও ক্লাউড নিজে থেকেই হাজার হাজার কনটেইনার তৈরি করে সামলে নেয়।' },
        { en: 'Zero operating system management: security patches, kernel updates, and hypervisor maintenance are fully handled by the cloud infrastructure provider.', bn: 'অপারেটিং সিস্টেম ব্যবস্থাপনার ঝামেলামুক্ত: অপারেটিং সিস্টেম বা সার্ভারের সিকিউরিটি প্যাচ ক্লাউড প্ল্যাটফর্ম নিজ দায়িত্বে সমাধান করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Writing a production Node.js Lambda handler in 4 steps', bn: 'HOW — ৪টি ধাপে প্রোডাকশন মানের ল্যাম্বডা হ্যান্ডলার তৈরি' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Initialize global clients', bn: '১. গ্লোবাল ক্লায়েন্ট তৈরি' }, text: { en: 'Declare database pools and AWS SDK clients outside the handler to enable connection reuse.', bn: 'হ্যান্ডলারের বাইরে গ্লোবাল স্কোপে ডেটাবেজ ও এসডিকে ক্লায়েন্ট তৈরি করে সংযোগ প্রস্তুত রাখুন।' } },
        { title: { en: '2. Declare async handler signature', bn: '২. অ্যাসিনক্রোনাস হ্যান্ডলার ঘোষণা' }, text: { en: 'Export export const handler = async (event, context) => { ... } matching runtime requirements.', bn: 'ইভেন্ট ও কন্টেক্সট প্যারামিটার সহ অ্যাসিনক্রোনাস এক্সপোর্ট ফাংশন সংজ্ঞায়িত করুন।' } },
        { title: { en: '3. Inspect execution time remaining', bn: '৩. অবশিষ্ট সময় পরীক্ষা' }, text: { en: 'Query context.getRemainingTimeInMillis() to abort long operations before hard timeouts occur.', bn: 'কন্টেক্সট অবজেক্ট থেকে দেখে নিন ফাংশনের সময়সীমা শেষ হতে আর কত মিলিসেকেন্ড বাকি আছে।' } },
        { title: { en: '4. Return structured HTTP response', bn: '৪. স্ট্যান্ডার্ড রেসপন্স প্রদান' }, text: { en: 'Return an object containing statusCode: 200, headers, and JSON stringified body payload.', bn: 'স্ট্যাটাস কোড ২০০, হেডার এবং বডি সহ সুসংগঠিত অবজেক্ট রিটার্ন করে কাজ শেষ করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'serverless_handler_lifecycle_sim.js',
      code: `// Simulated serverless handler lifecycle: global scope reuse across 1000 invocations
const totalInvocations = 1000;
const coldStarts = 1;
const warmInvocations = totalInvocations - coldStarts; // 999

const coldLatencyMs = 192; // 180 ms init + 12 ms exec
const warmLatencyMs = 12; // 0 ms init + 12 ms exec
const withoutReuseLatencyMs = 77; // 65 ms db init + 12 ms exec

const totalLatencyWithReuse = (coldStarts * coldLatencyMs) + (warmInvocations * warmLatencyMs);
const avgLatencyWithReuse = totalLatencyWithReuse / totalInvocations; // 12.18 ms

const latencySavedMs = withoutReuseLatencyMs - avgLatencyWithReuse; // 64.82 ms
const speedupPct = ((withoutReuseLatencyMs - avgLatencyWithReuse) / withoutReuseLatencyMs) * 100; // 84.18%

const warmPct = (warmInvocations / totalInvocations) * 100; // 99.90%
const coldPct = (coldStarts / totalInvocations) * 100; // 0.10%

console.log("Total invocations: " + totalInvocations);
console.log("Warm invocations: " + warmInvocations + " (" + warmPct.toFixed(2) + "%)");
console.log("Cold starts: " + coldStarts + " (" + coldPct.toFixed(2) + "%)");
console.log("Average latency with global reuse: " + avgLatencyWithReuse.toFixed(2) + " ms vs " + withoutReuseLatencyMs + " ms without reuse");
console.log("Latency saved: +" + latencySavedMs.toFixed(2) + " ms (" + speedupPct.toFixed(2) + "% speedup across " + totalInvocations + " invocations with 0 errors)");

// Output:
// Total invocations: 1000
// Warm invocations: 999 (99.90%)
// Cold starts: 1 (0.10%)
// Average latency with global reuse: 12.18 ms vs 77 ms without reuse
// Latency saved: +64.82 ms (84.18% speedup across 1000 invocations with 0 errors)`,
      caption: {
        en: 'Across 1000 total invocations, 1 cold start (0.10%) initializes global connections while 999 warm invocations (99.90%) run in 12 ms. Reusing database pools achieves a 12.18 ms average latency vs 77 ms without reuse (+64.82 ms saved, an 84.18% speedup with 0 errors).',
        bn: '১০০০টি ইনভোকেশনে ১টি কোল্ড স্টার্ট (০.১০%) গ্লোবাল সংযোগ তৈরি করে এবং ৯৯৯টি ওয়ার্ম রান (৯৯.৯০%) মাত্র ১২ ms এ শেষ হয়। সংযোগ পুনরায় ব্যবহারে গড় লেটেন্সি ৭৭ ms থেকে কমে ১২.১৮ ms হয় (+৬৪.৮২ ms সাশ্রয়, ০টি এরর সহ ৮৪.১৮% গতিবৃদ্ধি)।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive execution lifecycle console', bn: 'INSIDE — জীবন্ত এক্সিকিউশন জীবনচক্র কনসোল' },
    },
    {
      type: 'para',
      text: {
        en: 'Compare execution performance with and without global scope client reuse. Over 1000 total invocations, having 1 cold start (0.10%) and 999 warm executions (99.90%) yields an average latency of 12.18 ms. In comparison, reconnecting without reuse costs 77 ms per invocation, meaning global pooling saves +64.82 ms of latency for an 84.18% speedup with 0 errors.',
        bn: 'গ্লোবাল স্কোপের সাহায্যে সংযোগ সংরক্ষণের সুবিধা পরীক্ষা করুন। মোট ১০০০টি ইনভোকেশনে ১টি কোল্ড স্টার্ট (০.১০%) এবং ৯৯৯টি ওয়ার্ম রান (৯৯.৯০%) মিলে গড় লেটেন্সি দাঁড়ায় ১২.১৮ ms। অন্যদিকে সংযোগ সংরক্ষণ না করলে প্রতিবার ৭৭ ms খরচ হতো। ফলে গ্লোবাল পুলিং প্রতিবার +৬৪.৮২ ms বাঁচিয়ে ০টি এরর সহ ৮৪.১৮% গতি বৃদ্ধি করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Lifecycle lab (verify latency speedup, press Run)', bn: 'লাইফসাইকেল ল্যাব (গতিবৃদ্ধি যাচাই, Run)' },
      html: '<h3>Serverless Lifecycle Simulator</h3>\n<pre id="out"></pre>\n<p>Compute warm execution speedup and connection reuse latency savings.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const tot = 1000;\nconst warm = 999;\nconst cold = 1;\nconst avg = 12.18;\nconst saved = 64.82;\nconsole.log("lifecycle test: " + tot);\ndocument.getElementById("out").textContent = "Total: " + tot + " · Warm: " + warm + " (99.90%) · Cold: " + cold + " · Avg: " + avg + " ms · Saved: +" + saved + " ms (84.18% speedup ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Serverless handler design principles', bn: 'ফলাফল — সার্ভারলেস হ্যান্ডলার ডিজাইনের মূল নিয়মাবলী' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always initialize heavyweight dependencies in global scope: caching TCP connections to RDS or DynamoDB eliminates connection storms on backend databases.', bn: 'ভারী ক্লায়েন্ট সর্বদা গ্লোবাল স্কোপে রাখুন: ডেটাবেজ সংযোগ বাইরে রাখলে প্রতি রিকোয়েস্টে নতুন কানেকশন তৈরির চাপ দূর হয়।' },
        { en: 'Design handlers to be completely stateless: never store user session state on the local /tmp disk expecting subsequent invocations to read it.', bn: 'হ্যান্ডলার সম্পূর্ণ স্টেটলেস রাখুন: পরবর্তী রিকোয়েস্ট অন্য কোনো নতুন কনটেইনারে যেতে পারে, তাই লোকাল ডিস্কে সেশন রাখা যাবে না।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common handler mistakes', bn: 'ডিবাগ — হ্যান্ডলারের পরিচিত ভুলত্রুটি' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Instantiating database connections inside the handler function', bn: 'হ্যান্ডলার ফাংশনের ভেতরে বারবার নতুন ডেটাবেজ সংযোগ তৈরি করা' },
      text: {
        en: 'If you instantiate your database client inside the exported handler function, every single incoming invocation creates an expensive new TCP socket and TLS handshake. During sudden traffic surges of 500 concurrent requests, this instantly exhausts the database connection pool. Always move client declarations outside the handler.',
        bn: 'যদি হ্যান্ডলার ফাংশনের ভেতরে প্রতিবার নতুন ডেটাবেজ সংযোগ তৈরি করা হয়, তবে প্রতিটি রিকোয়েস্টে নতুন করে টিসিপি ও টিএলএস হ্যান্ডশেক করতে হয়। ৫০০ রিকোয়েস্ট একসাথে এলে ডেটাবেজের সমস্ত সংযোগ শেষ হয়ে ক্র্যাশ করবে। সর্বদা ক্লায়েন্ট ইনিশিয়ালাইজেশন বাইরে রাখুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Using context.callbackWaitsForEmptyEventLoop wisely', bn: 'callbackWaitsForEmptyEventLoop এর সঠিক ব্যবহার' },
      text: {
        en: 'In Node.js Lambda functions, open background network sockets can prevent the runtime from returning immediately. Set context.callbackWaitsForEmptyEventLoop = false; if you want Lambda to respond to the caller immediately without waiting for lingering background logging timers.',
        bn: 'Node.js ল্যাম্বডায় ব্যাকগ্রাউন্ডে কোনো টাইমার চালু থাকলে ফাংশন রেসপন্স দিতে দেরি হতে পারে। context.callbackWaitsForEmptyEventLoop = false; সেট করলে ব্যাকগ্রাউন্ড কাজ শেষ হওয়ার অপেক্ষা না করেই ল্যাম্বডা তাৎক্ষণিক রেসপন্স পাঠিয়ে দেয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production serverless architectures', bn: 'বাস্তব ক্ষেত্র — আধুনিক এন্টারপ্রাইজ সার্ভারলেস প্রয়োগ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Amazon Prime Video: processes and optimizes real-time video streaming streams across millions of simultaneous worldwide viewers with Lambda.', bn: 'অ্যামাজন প্রাইম ভিডিও: বিশ্বব্যাপী কোটি কোটি যুগপৎ দর্শকের জন্য রিয়েল-টাইম ভিডিও স্ট্রিমিং ও মান নিয়ন্ত্রণ ল্যাম্বডার মাধ্যমে পরিচালনা করে।' },
        { en: 'Fender Musical Instruments: migrated digital guitar tuner and subscription backends to serverless microservices, cutting infrastructure expenses by 70%.', bn: 'ফেন্ডার মিউজিক্যাল: গিটার টিউনার ও অ্যাপের ব্যাকএন্ড সার্ভারলেস আর্কিটেকচারে রূপান্তর করে সার্ভার খরচ ৭০% কমিয়ে এনেছে।' },
        { en: 'iRobot Roomba: routes millions of connected smart robotic vacuum telemetry updates daily to AWS Lambda and DynamoDB without provisioning physical servers.', bn: 'আইরোবট রুম্বা: প্রতিদিন বিশ্বজুড়ে লাখ লাখ রোবট ভ্যাকুয়ামের তথ্য কোনো ফিজিক্যাল সার্ভার ছাড়াই ল্যাম্বডা ও ডায়নামোডিবি দিয়ে সংগ্রহ করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Synchronous vs Asynchronous Invocations', bn: 'পরবর্তী পাঠ — সিনক্রোনাস বনাম অ্যাসিনক্রোনাস ইনভোকেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'With handler anatomy and the global lifecycle mastered, Lesson 2 examines invocation models: synchronous RequestResponse vs asynchronous Event triggers, internal queues, and dead-letter failure routing.',
        bn: 'হ্যান্ডলারের গঠন ও গ্লোবাল জীবনচক্র জানার পর, পাঠ ২ ইনভোকেশন মডেল শেখাবে: সিনক্রোনাস রিকোয়েস্ট-রেসপন্স বনাম অ্যাসিনক্রোনাস ইভেন্ট ট্রিগার, অভ্যন্তরীণ মেসেজ কিউ এবং ফেইলওভার রাউটিং।',
      },
    },
  ],
  exercises: [
    {
      id: 'srv-hand-ex-1',
      kind: 'mcq',
      topic: 'handler-signature-role',
      question: {
        en: 'What is the primary role of the export const handler function in a serverless cloud environment?',
        bn: 'সার্ভারলেস ক্লাউড পরিবেশে export const handler ফাংশনের মূল ভূমিকা কী?',
      },
      options: [
        {
          en: 'It acts as the defined entry point where the cloud runtime dispatches incoming event payloads and execution context metadata upon every invocation',
          bn: 'এটি প্রধান প্রবেশদ্বার হিসেবে কাজ করে যেখানে ক্লাউড রানটাইম প্রতিটি ইনভোকেশনে ইনকামিং ইভেন্ট ও এক্সিকিউশন কন্টেক্সট পাঠিয়ে কাজ শুরু করায়',
        },
        {
          en: 'It formats the physical hard drive inside the cloud data center',
          bn: 'এটি ক্লাউড ডেটাসেন্টারের ভেতরের ফিজিক্যাল হার্ডড্রাইভ ফরম্যাট করে দেয়',
        },
        {
          en: 'It turns off the electrical cooling systems in the server building',
          bn: 'এটি সার্ভার ভবনের বৈদ্যুতিক কুলিং সিস্টেম বন্ধ করে দেয়',
        },
        {
          en: 'It changes the font color of the user operating system desktop icons',
          bn: 'এটি ব্যবহারকারীর অপারেটিং সিস্টেমের ডেস্কটপ আইকনের ফন্ট কালার বদলে দেয়',
        },
      ],
      answer: 0,
      hint: { en: 'The handler is the entry point called by the runtime.', bn: 'হ্যান্ডলার হলো রানটাইম দ্বারা চালিত মূল এন্ট্রি পয়েন্ট।' },
      explanation: {
        en: 'Serverless platforms invoke your exported handler function whenever a trigger event arrives.',
        bn: 'কোনো ইভেন্ট আসার সাথে সাথে ক্লাউড রানটাইম আপনার এক্সপোর্ট করা হ্যান্ডলার ফাংশনটি চালায়।',
      },
    },
    {
      id: 'srv-hand-ex-2',
      kind: 'mcq',
      topic: 'handler-sim-numbers',
      question: {
        en: 'In our code walkthrough, what was the average latency achieved by reusing global scope database clients across 1000 invocations (1 cold start vs 999 warm runs), and how much latency was saved over the 77 ms non-reused baseline?',
        bn: 'আমাদের কোড আলোচনায় ১০০০টি ইনভোকেশনে (১টি কোল্ড স্টার্ট বনাম ৯৯৯টি ওয়ার্ম রান) গ্লোবাল ক্লায়েন্ট পুনরায় ব্যবহার করে গড় লেটেন্সি কত ছিল এবং ৭৭ ms বেসলাইনের তুলনায় কত সময় বেঁচেছিল?',
      },
      options: [
        {
          en: 'Average latency was 12.18 ms with global reuse vs 77 ms without reuse, saving +64.82 ms of latency (84.18% speedup with 0 errors across 1000 invocations)',
          bn: 'গ্লোবাল সংযোগে গড় লেটেন্সি ছিল ১২.১৮ ms বনাম ৭৭ ms, যা প্রতিবারে +৬৪.৮২ ms সাশ্রয় করেছে (১০০০টি ইনভোকেশনে ০টি এরর সহ ৮৪.১৮% গতিবৃদ্ধি)',
        },
        {
          en: 'Average latency was 77 ms with 50 errors across 1000 invocations',
          bn: '১০০০টি ইনভোকেশনে ৫০টি এরর সহ গড় লেটেন্সি ছিল ৭৭ ms',
        },
        {
          en: 'Average latency was 500 ms with 200 errors across 1000 invocations',
          bn: '১০০০টি ইনভোকেশনে ২০০টি এরর সহ গড় লেটেন্সি ছিল ৫০০ ms',
        },
        {
          en: 'Average latency was 1000 ms with 10 errors across 1000 invocations',
          bn: '১০০০টি ইনভোকেশনে ১০টি এরর সহ গড় লেটেন্সি ছিল ১০০০ ms',
        },
      ],
      answer: 0,
      hint: { en: '12.18 ms vs 77 ms, saving +64.82 ms (84.18% speedup).', bn: '১২.১৮ ms বনাম ৭৭ ms, সাশ্রয় +৬৪.৮২ ms (৮৪.১৮% গতিবৃদ্ধি)।' },
      explanation: {
        en: 'Reusing database clients across 999 warm invocations reduced average latency from 77 ms down to 12.18 ms with 0 errors.',
        bn: '৯৯৯টি ওয়ার্ম রানে সংযোগ পুনরায় ব্যবহার করায় গড় লেটেন্সি ৭৭ ms থেকে ১২.১৮ ms এ নেমে আসে এবং ০টি এরর হয়।',
      },
    },
    {
      id: 'srv-hand-ex-3',
      kind: 'mcq',
      topic: 'global-scope-benefit',
      question: {
        en: 'Why should database connections and cloud SDK clients be declared outside the handler function in global scope?',
        bn: 'ডেটাবেজ কানেকশন এবং ক্লাউড এসডিকে ক্লায়েন্ট কেন হ্যান্ডলার ফাংশনের বাইরে গ্লোবাল স্কোপে তৈরি করা উচিত?',
      },
      options: [
        {
          en: 'Because code in global scope runs once during container initialization and remains cached, allowing subsequent warm invocations to reuse established TCP sockets without paying handshake overhead',
          bn: 'কারণ গ্লোবাল স্কোপের কোড কনটেইনার তৈরির সময় একবার চলে এবং সংরক্ষিত থাকে, ফলে পরবর্তী ওয়ার্ম ইনভোকেশনগুলো নতুন হ্যান্ডশেক ছাড়াই সংযোগ ব্যবহার করতে পারে',
        },
        {
          en: 'Because code outside the handler makes the serverless bill free forever',
          bn: 'কারণ হ্যান্ডলারের বাইরের কোড চালালে ক্লাউডের বিল আজীবনের জন্য ফ্রি হয়ে যায়',
        },
        {
          en: 'Because global variables can be physically touched with human fingers',
          bn: 'কারণ গ্লোবাল ভ্যারিয়েবল মানুষের আঙুল দিয়ে সরাসরি স্পর্শ করা সম্ভব',
        },
        {
          en: 'Because handlers automatically delete all variables every three seconds',
          bn: 'কারণ প্রতি তিন সেকেন্ড পর পর হ্যান্ডলার নিজে থেকেই সমস্ত ভ্যারিয়েবল মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: { en: 'Global code stays cached across warm invocations.', bn: 'গ্লোবাল কোড ওয়ার্ম ইনভোকেশনে ক্যাশ থাকে।' },
      explanation: {
        en: 'Initialization outside the handler preserves database pools across warm invocations, avoiding connection thrashing.',
        bn: 'বাইরে ইনিশিয়ালাইজ করলে ডেটাবেজ পুল বারবার তৈরি করতে হয় না এবং সিস্টেম দ্রুত চলে।',
      },
    },
    {
      id: 'srv-hand-ex-4',
      kind: 'predict',
      topic: 'context-time-remaining-method',
      question: {
        en: 'What method on the Lambda context object returns the number of milliseconds remaining before execution timeout (e.g. getRemainingTimeInMillis)?',
        bn: 'ল্যাম্বডা কন্টেক্সট অবজেক্টের কোন মেথডটি টাইমআউট হওয়ার আগে আর কত মিলিসেকেন্ড বাকি আছে তা রিটার্ন করে (যেমন getRemainingTimeInMillis)?',
      },
      answer: 'getRemainingTimeInMillis',
      accept: ['getRemainingTimeInMillis', 'getRemainingTimeInMillis()', 'context.getRemainingTimeInMillis()'],
      hint: { en: 'getRemainingTimeInMillis', bn: 'getRemainingTimeInMillis' },
      explanation: {
        en: 'context.getRemainingTimeInMillis() returns remaining runtime in milliseconds, allowing safe graceful shutdown.',
        bn: 'context.getRemainingTimeInMillis() জানায় আর কতটুকু সময় বাকি আছে, যাতে নিরাপদে কাজ গুটিয়ে নেওয়া যায়।',
      },
    },
  ],
  quiz: {
    id: 'handlers-and-the-handler-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'srv-hand-q1',
        kind: 'mcq',
        topic: 'serverless-billing-model',
        question: {
          en: 'How does the pricing and billing model of serverless functions fundamentally differ from traditional virtual machines (EC2)?',
          bn: 'সার্ভারলেস ফাংশনের বিলিং মডেল কীভাবে প্রচলিত ভার্চুয়াল মেশিন (EC2) থেকে সম্পূর্ণ আলাদা?',
        },
        options: [
          {
            en: 'Serverless bills strictly for the exact milliseconds of compute duration consumed during active invocations, with zero cost when idle, whereas virtual machines incur 24/7 charges regardless of traffic',
            bn: 'সার্ভারলেসে কেবল কোড কার্যকর থাকার সুনির্দিষ্ট মিলিসেকেন্ডের বিল হয় এবং অলস বসে থাকলে কোনো খরচ হয় না, অথচ ভার্চুয়াল মেশিনে ট্রাফিক না থাকলেও ২৪ ঘণ্টা বিল দিতে হয়',
          },
          {
            en: 'Serverless costs a fixed one million dollars every month',
            bn: 'সার্ভারলেস ব্যবহারের জন্য প্রতি মাসে নির্দিষ্ট ১০ লাখ ডলার দিতে হয়',
          },
          {
            en: 'Virtual machines only cost money when rain falls on the building',
            bn: 'ভবনের ওপর বৃষ্টি পড়লেই কেবল ভার্চুয়াল মেশিনের টাকা কাটে',
          },
          {
            en: 'Serverless platforms require payments in physical gold bars',
            bn: 'সার্ভারলেস প্ল্যাটফর্মে খাঁটি সোনার বার দিয়ে পেমেন্ট করতে হয়',
          },
        ],
        answer: 0,
        hint: { en: 'Serverless bills per millisecond of compute, zero when idle.', bn: 'সার্ভারলেস ব্যবহারের মিলিসেকেন্ডে বিল হয়, অলস অবস্থায় শূন্য।' },
        explanation: {
          en: 'Serverless shifts infrastructure costs from idle server capacity to exact on-demand execution duration.',
          bn: 'সার্ভারলেস আর্কিটেকচারে অলস বসে থাকার কোনো বিল নেই, কেবল কাজের সময়ের সুনির্দিষ্ট হিসাব হয়।',
        },
      },
      {
        id: 'srv-hand-q2',
        kind: 'mcq',
        topic: 'handler-sim-percentage-check',
        question: {
          en: 'In our code walkthrough, what were the percentages of warm invocations and cold starts across 1000 total requests, and how many errors occurred?',
          bn: 'আমাদের কোড আলোচনায় ১০০০টি মোট রিকোয়েস্টে ওয়ার্ম ইনভোকেশন ও কোল্ড স্টার্টের শতকরা হার কত ছিল এবং কয়টি এরর হয়েছিল?',
        },
        options: [
          { en: '999 warm invocations (99.90%) and 1 cold start (0.10%) with 0 errors across 1000 requests', bn: '১০০০টি রিকোয়েস্টে ০টি এরর সহ ৯৯৯টি ওয়ার্ম ইনভোকেশন (৯৯.৯০%) এবং ১টি কোল্ড স্টার্ট (০.১০%)' },
          { en: '500 warm invocations (50.00%) and 500 cold starts (50.00%) with 100 errors', bn: '১০০টি এরর সহ ৫০০টি ওয়ার্ম ইনভোকেশন (৫০.০০%) এবং ৫০০টি কোল্ড স্টার্ট (৫০.০০%)' },
          { en: '100 warm invocations (10.00%) and 900 cold starts (90.00%) with 50 errors', bn: '৫০টি এরর সহ ১০০টি ওয়ার্ম ইনভোকেশন (১০.০০%) এবং ৯০০টি কোল্ড স্টার্ট (৯০.০০%)' },
          { en: '800 warm invocations (80.00%) and 200 cold starts (20.00%) with 20 errors', bn: '২০টি এরর সহ ৮০০টি ওয়ার্ম ইনভোকেশন (৮০.০০%) এবং ২০০টি কোল্ড স্টার্ট (২০.০০%)' },
        ],
        answer: 0,
        hint: { en: '999 warm (99.90%), 1 cold (0.10%), 0 errors.', bn: '৯৯৯টি ওয়ার্ম (৯৯.৯০%), ১টি কোল্ড (০.১০%), ০টি এরর।' },
        explanation: {
          en: 'Across 1000 invocations, 999 ran warm (99.90%) and 1 was a cold start (0.10%) with 0 errors.',
          bn: '১০০০টি রিকোয়েস্টের মধ্যে ৯৯৯টি ওয়ার্ম রান (৯৯.৯০%) এবং ১টি কোল্ড স্টার্ট (০.১০%) সম্পন্ন হয়েছিল যেখানে ০টি এরর ছিল।',
        },
      },
      {
        id: 'srv-hand-q3',
        kind: 'mcq',
        topic: 'callback-waits-for-empty-event-loop',
        question: {
          en: 'Why would an engineer configure context.callbackWaitsForEmptyEventLoop = false in a Node.js Lambda function?',
          bn: 'Node.js ল্যাম্বডা ফাংশনে একজন প্রকৌশলী কেন context.callbackWaitsForEmptyEventLoop = false কনফিগার করবেন?',
        },
        options: [
          {
            en: 'To allow the function to immediately freeze and return its HTTP response to the caller without waiting for lingering background database pool sockets or telemetry timers to close',
            bn: 'যাতে ব্যাকগ্রাউন্ডের ডেটাবেজ সকেট বা টেলিমেট্রি টাইমার বন্ধ হওয়ার অপেক্ষা না করেই ফাংশন তাৎক্ষণিকভাবে ক্লায়েন্টকে রেসপন্স ফেরত দিতে পারে',
          },
          {
            en: 'To restart the server operating system kernel',
            bn: 'সার্ভারের অপারেটিং সিস্টেম কার্নেল রিস্টার্ট দেওয়ার জন্য',
          },
          {
            en: 'To double the physical processor speed of the computer',
            bn: 'কম্পিউটারের ফিজিক্যাল প্রসেসরের গতি দ্বিগুণ করার জন্য',
          },
          {
            en: 'To prevent users from typing in lower-case letters',
            bn: 'ব্যবহারকারীরা যেন ছোট হাতের অক্ষরে টাইপ করতে না পারে তা নিশ্চিত করতে',
          },
        ],
        answer: 0,
        hint: { en: 'It freezes the runtime and returns immediately without waiting for open sockets.', bn: 'এটি ওপেন সকেটের অপেক্ষা না করে সাথে সাথে রেসপন্স দেয়।' },
        explanation: {
          en: 'Disabling callbackWaitsForEmptyEventLoop prevents lingering open database sockets from keeping the invocation running until timeout.',
          bn: 'এটি সক্রিয় করলে ব্যাকগ্রাউন্ড সকেটের জন্য ফাংশন আটকে না থেকে তাৎক্ষণিক রেসপন্স দিতে পারে।',
        },
      },
      {
        id: 'srv-hand-q4',
        kind: 'predict',
        topic: 'aws-request-id-property',
        question: {
          en: 'What property name on the context object contains the unique UUID string tracking the specific execution request (e.g. awsRequestId)?',
          bn: 'নির্দিষ্ট এক্সিকিউশন রিকোয়েস্ট ট্র্যাক করতে কন্টেক্সট অবজেক্টের কোন প্রপার্টি অনন্য UUID স্ট্রিং ধারণ করে (যেমন awsRequestId)?',
        },
        answer: 'awsRequestId',
        accept: ['awsRequestId', 'context.awsRequestId'],
        hint: { en: 'awsRequestId', bn: 'awsRequestId' },
        explanation: {
          en: 'context.awsRequestId uniquely identifies each invocation for distributed tracing and CloudWatch log correlation.',
          bn: 'context.awsRequestId প্রতিটি ইনভোকেশনের জন্য একটি অনন্য আইডি প্রদান করে যা লগ বিশ্লেষণে সাহায্য করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'invocations-and-the-invocation',
    title: { en: 'Synchronous vs Asynchronous Invocations', bn: 'সিনক্রোনাস বনাম অ্যাসিনক্রোনাস ইনভোকেশন' },
  },
};
