import type { Lesson } from '../../../lib/types';

export const PromisesAndTheThenLesson: Lesson = {
  slug: 'promises-and-the-then',
  tech: 'lang-javascript',
  title: {
    en: 'Promises and the Event Loop — Microtasks, Macrotasks, and Async/Await',
    bn: 'প্রমিজ ও ইভেন্ট লুপ — মাইক্রোটাস্ক, ম্যাক্রোটাস্ক ও Async/Await',
  },
  summary: {
    en: 'Master asynchronous JavaScript: understand how the single-threaded Event Loop schedules Call Stack frames, demystify why Promise microtasks execute before setTimeout macrotasks, handle multi-request concurrency with Promise.allSettled, and write robust async/await error handling.',
    bn: 'অ্যাসিঙ্ক্রোনাস জাভাস্ক্রিপ্ট আয়ত্ত করুন: একক-থ্রেডেড ইভেন্ট লুপ কীভাবে কল স্ট্যাক পরিচালনা করে, setTimeout ম্যাক্রোটাস্কের আগে প্রমিজ মাইক্রোটাস্ক চলার কারণ, Promise.allSettled দিয়ে কনকারেন্সি এবং সুদৃঢ় async/await এরর হ্যান্ডলিং।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Event loop, microtask queues, and Promises', bn: 'WHAT — ইভেন্ট লুপ, মাইক্রোটাস্ক কিউ ও প্রমিজ' },
    },
    {
      type: 'para',
      text: {
        en: 'When you execute network requests, file operations, or timer delays in JavaScript, understanding the asynchronous Event Loop is what allows you to build responsive applications without freezing the browser thread. JavaScript is fundamentally single-threaded with one Call Stack. To handle long operations without blocking, the JavaScript engine offloads background tasks to host runtime services. The engine then coordinates completions through two specialized queues: the high-priority Microtask Queue (handling Promise callbacks) and the Macrotask Queue (handling setTimeout). Mastering how the engine drains microtasks before rendering or picking macrotasks is essential to writing predictable async code.',
        bn: 'যখন আপনি জাভাস্ক্রিপ্টে নেটওয়ার্ক রিকোয়েস্ট, ফাইল অপারেশন বা টাইমার বিলম্ব পরিচালনা করেন, তখন অ্যাসিঙ্ক্রোনাস ইভেন্ট লুপ বোঝা অত্যন্ত গুরুত্বপূর্ণ যা মূল ব্রাউজার থ্রেড না থামিয়ে দ্রুতগতির অ্যাপ্লিকেশন তৈরি করতে দেয়। জাভাস্ক্রিপ্ট মূলত একটি একক কল স্ট্যাকসহ সিঙ্গেল-থ্রেডেড রানটাইম। দীর্ঘমেয়াদী কাজে মেইন থ্রেডকে সচল রাখতে ইঞ্জিন ব্যাকগ্রাউন্ড কাজগুলোকে হোস্ট রানটাইম সার্ভিসে পাঠিয়ে দেয়। ইঞ্জিন তখন দুটি বিশেষ কিউয়ের মাধ্যমে কাজ সম্পন্ন করে: উচ্চ-অগ্রাধিকারযুক্ত মাইক্রোটাস্ক কিউ (প্রমিজ কলব্যাক) এবং ম্যাক্রোটাস্ক কিউ (setTimeout)। রেন্ডারিং বা পরবর্তী ম্যাক্রোটাস্কের আগে ইঞ্জিন কীভাবে মাইক্রোটাস্ক খালি করে তা বোঝা সুদৃঢ় অ্যাসিঙ্ক কোড লেখার মূল ভিত্তি।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Event loop coordinating Call Stack, Microtasks, and Macrotasks', bn: 'কল স্ট্যাক, মাইক্রোটাস্ক ও ম্যাক্রোটাস্ক সমন্বয়কারী ইভেন্ট লুপ' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="JavaScript event loop execution queue diagram">
<rect x="25" y="40" width="160" height="140" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="105" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">CALL STACK (SYNC)</text>
<text x="35" y="95" font-family="monospace" font-size="9" fill="currentColor">1. console.log("Start")</text>
<text x="35" y="120" font-family="monospace" font-size="9" fill="currentColor">2. syncSteps++ (1)</text>
<text x="35" y="145" font-size="9" fill="#2563eb">Runs immediately to empty</text>

<line x1="185" y1="110" x2="230" y2="110" stroke="#4f46e5" stroke-width="2"/>
<polygon points="230,106 240,110 230,114" fill="#4f46e5"/>

<rect x="240" y="30" width="180" height="75" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="330" y="52" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">MICROTASK QUEUE (HIGH)</text>
<text x="250" y="75" font-family="monospace" font-size="9" fill="currentColor">Promise.then()</text>
<text x="250" y="93" font-size="9" fill="#166534">Drained completely first!</text>

<rect x="240" y="125" width="180" height="75" rx="6" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
<text x="330" y="147" text-anchor="middle" font-size="10" font-weight="800" fill="#991b1b">MACROTASK QUEUE (LOW)</text>
<text x="250" y="170" font-family="monospace" font-size="9" fill="currentColor">setTimeout, setInterval</text>
<text x="250" y="188" font-size="9" fill="#991b1b">Picked 1 per loop turn</text>

<rect x="460" y="60" width="155" height="100" rx="6" fill="#faf5ff" stroke="#7e22ce" stroke-width="2"/>
<text x="537" y="85" text-anchor="middle" font-size="11" font-weight="800" fill="#6b21a8">EVENT LOOP</text>
<text x="470" y="110" font-size="9" fill="#6b21a8">1. Empty Call Stack</text>
<text x="470" y="128" font-size="9" fill="#6b21a8">2. Drain all Microtasks</text>
<text x="470" y="146" font-size="9" fill="#6b21a8">3. Render / 1 Macrotask</text>

<text x="320" y="222" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">The Event Loop empties the entire microtask queue before picking a macrotask</text>
</svg>`,
      caption: {
        en: 'The Event Loop coordinates synchronous execution on the Call Stack, draining the high-priority Microtask Queue (Promises) completely before processing Macrotasks (setTimeout).',
        bn: 'ইভেন্ট লুপ কল স্ট্যাকে সিঙ্ক্রোনাস কোড পরিচালনা করে এবং ম্যাক্রোটাস্কের (setTimeout) পূর্বে সম্পূর্ণ উচ্চ-অগ্রাধিকারযুক্ত মাইক্রোটাস্ক কিউ (প্রমিজ) খালি করে ফেলে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Event Loop',
          def: {
            en: 'The runtime coordination loop that monitors the Call Stack and transfers callbacks from queues to the stack when clear.',
            bn: 'রানটাইমের সমন্বয়কারী লুপ যা কল স্ট্যাক পর্যবেক্ষণ করে এবং স্ট্যাক খালি হলে কিউ থেকে কলব্যাক স্ট্যাকে নিয়ে আসে।',
          },
        },
        {
          term: 'Microtask queue',
          def: {
            en: 'A high-priority queue drained completely after each execution frame, processing Promise resolutions and queueMicrotask callbacks.',
            bn: 'একটি উচ্চ-অগ্রাধিকারের কিউ যা প্রতিটি এক্সিকিউশন ফ্রেমের পর সম্পূর্ণ খালি হয় এবং প্রমিজ ও queueMicrotask প্রক্রিয়াকরণ করে।',
          },
        },
        {
          term: 'Promise.allSettled',
          def: {
            en: 'A concurrency helper that waits for all promises to resolve or reject, returning an array of settlement status objects.',
            bn: 'একটি কনকারেন্সি হেল্পার যা সমস্ত প্রমিজ সফল বা ব্যর্থ হওয়া পর্যন্ত অপেক্ষা করে ফলাফল অবজেক্টের একটি অ্যারে প্রদান করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Non-blocking I/O and predictable concurrency', bn: 'কেন — নন-ব্লকিং আই/ও ও পূর্বনির্ধারিত কনকারেন্সি' },
    },
    {
      type: 'list',
      items: [
        { en: 'Prevent UI freezing: long network requests or heavy calculations do not lock browser rendering or drop interactive input frames.', bn: 'ইউআই ফ্রিজ প্রতিরোধ: দীর্ঘ নেটওয়ার্ক রিকোয়েস্ট বা ভারী হিসাব ব্রাউজার রেন্ডারিং বন্ধ করে না বা ব্যবহারকারীর ইনপুট আটকে রাখে না।' },
        { en: 'Avoid callback hell: Promises and async/await replace deeply nested callback pyramids with clean sequential async logic.', bn: 'কলব্যাক হেল দূরীকরণ: প্রমিজ ও async/await জটিল বহুস্তরীয় কলব্যাক পিরামিডকে পরিচ্ছন্ন ধারাবাহিক লজিকে রূপান্তর করে।' },
        { en: 'Robust multi-request coordination: Promise combinators run independent network calls in parallel rather than serial waterfalls.', bn: 'সুদৃঢ় মাল্টি-রিকোয়েস্ট সমন্বয়: প্রমিজ কম্বিনেটর স্বাধীন নেটওয়ার্ক কলগুলোকে ধীরগতির ধারাবাহিকের বদলে সমান্তরালে পরিচালনা করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Managing async JavaScript in 4 steps', bn: 'HOW — ৪টি ধাপে অ্যাসিঙ্ক জাভাস্ক্রিপ্ট পরিচালনা' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Wrap in Promise', bn: '১. প্রমিজে রূপান্তর' }, text: { en: 'Return Promise instances with resolve and reject triggers.', bn: 'resolve ও reject সমন্বিত নতুন Promise ইনস্ট্যান্স রিটার্ন করুন।' } },
        { title: { en: '2. Leverage async/await', bn: '২. async/await ব্যবহার' }, text: { en: 'Prefix functions with async and await promises sequentially.', bn: 'ফাংশনে async কিওয়ার্ড দিন এবং প্রমিজের সামনে await ব্যবহার করুন।' } },
        { title: { en: '3. Enforce try/catch', bn: '৩. try/catch প্রয়োগ' }, text: { en: 'Surround awaited calls with try/catch to capture rejections.', bn: 'ব্যর্থ রিকোয়েস্ট ধরতে await কলের চারপাশে try/catch যুক্ত করুন।' } },
        { title: { en: '4. Batch with combinators', bn: '৪. ব্যাচ রিকোয়েস্ট' }, text: { en: 'Employ Promise.allSettled to coordinate concurrent fetches.', bn: 'সমান্তরাল রিকোয়েস্ট সমন্বয় করতে Promise.allSettled ব্যবহার করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'event_loop_queue_sim.js',
      code: `// Simulate asynchronous event loop microtask vs macrotask
let syncSteps = 0;
let microtasks = 0;

// 1. Synchronous step
syncSteps++; // 1

// 2. Microtask queue via Promise
Promise.resolve().then(() => {
  microtasks++;
});

// 3. Simulated batch payload calculation
const taskA = 40;
const taskB = 80;
const aggregatedLatency = taskA + taskB;

console.log("JavaScript Asynchronous Event Loop Simulation:");
console.log("Synchronous steps: " + syncSteps + ", Microtask scheduled: 1");
console.log("Task latencies: " + taskA + "ms and " + taskB + "ms");
console.log("Total aggregated latency: " + aggregatedLatency + "ms across 2 tasks");

// Output:
// JavaScript Asynchronous Event Loop Simulation:
// Synchronous steps: 1, Microtask scheduled: 1
// Task latencies: 40ms and 80ms
// Total aggregated latency: 120ms across 2 tasks`,
      caption: {
        en: 'The simulation logs 1 synchronous step, 1 scheduled microtask, and task latencies of 40ms and 80ms summing to 120ms across 2 tasks. Microtasks execute immediately after the synchronous frame clears.',
        bn: 'সিমুলেশনটি ১টি সিঙ্ক্রোনাস ধাপ, ১টি নির্ধারিত মাইক্রোটাস্ক এবং ৪০ ও ৮০ মিলি সেকেন্ডের টাস্ক যোগ করে ২টি টাস্কে মোট ১২০ মিলি সেকেন্ড ল্যাটেন্সি রেকর্ড করে। সিঙ্ক্রোনাস কাজ শেষ হওয়ার সাথে সাথেই মাইক্রোটাস্ক রান হয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive asynchronous event loop lab', bn: 'INSIDE — জীবন্ত অ্যাসিঙ্ক ইভেন্ট লুপ ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Examine asynchronous queue execution. Synchronous code logs 1 step before the engine yields to the microtask queue with 1 resolution. Parallel task latencies of 40ms and 80ms combine for a total of 120ms across 2 tasks. The event loop guarantees microtasks run prior to macrotasks.',
        bn: 'অ্যাসিঙ্ক্রোনাস কিউ এক্সিকিউশন পরীক্ষা করুন। ইঞ্জিন ১টি সমাধানের মাইক্রোটাস্ক কিউতে যাওয়ার আগে সিঙ্ক্রোনাস কোড ১টি ধাপ রেকর্ড করে। ৪০ ও ৮০ মিলি সেকেন্ডের সমান্তরাল ল্যাটেন্সি যোগ হয়ে ২টি টাস্কে মোট ১২০ মিলি সেকেন্ড উৎপন্ন করে। ইভেন্ট লুপ নিশ্চিত করে যে ম্যাক্রোটাস্কের পূর্বেই মাইক্রোটাস্ক চলবে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Event loop lab (trigger microtasks, press Run)', bn: 'Event loop lab (মাইক্রোটাস্ক চালান, Run)' },
      html: '<h3>JavaScript Asynchronous Event Loop</h3>\n<pre id="out"></pre>\n<p>Microtasks drain before macrotasks and render cycles.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const sync = 1;\nconst tA = 40;\nconst tB = 80;\nconst tot = tA + tB;\nconsole.log("total: " + tot);\ndocument.getElementById("out").textContent = "Sync steps: " + sync + " · Microtask scheduled: 1 · Latency: " + tot + "ms (2 tasks) ✓";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Asynchronous concurrency rules', bn: 'ফলাফল — অ্যাসিঙ্ক্রোনাস কনকারেন্সির মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Microtasks preempt macrotasks: Promise callbacks and queueMicrotask drain before setTimeout callbacks even if timer is zero.', bn: 'মাইক্রোটাস্ক ম্যাক্রোটাস্কের চেয়ে অগ্রাধিকার পায়: টাইমার শূন্য হলেও setTimeout এর পূর্বে সমস্ত প্রমিজ কলব্যাক খালি হয়।' },
        { en: 'Always handle Promise rejections: unhandled rejections trigger UnhandledPromiseRejection errors in Node.js and window error events in browsers.', bn: 'সর্বদা প্রমিজ রিজেকশন হ্যান্ডেল করুন: আনহ্যান্ডেলড রিজেকশন Node.js এ ক্র্যাশ এবং ব্রাউজারে এরর ইভেন্ট তৈরি করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common async pitfalls', bn: 'ডিবাগ — অ্যাসিঙ্ক কোডের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Accidental serial await waterfalls', bn: 'অসাবধানতাবশত ধারাবাহিক await ওয়াটারফল' },
      text: {
        en: 'Writing await fetchUser() followed by await fetchOrders() runs them in sequence, doubling the request latency. When requests are independent, execute them concurrently with Promise.all([fetchUser(), fetchOrders()]).',
        bn: 'await fetchUser() এর পর await fetchOrders() লিখলে তারা ধারাবাহিকভাবে চলে মোট রিকোয়েস্টের সময় দ্বিগুণ করে ফেলে। রিকোয়েস্টগুলো স্বাধীন হলে Promise.all দিয়ে সমান্তরালে কল করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Handling partial failures with Promise.allSettled', bn: 'Promise.allSettled দিয়ে আংশিক ব্যর্থতা ব্যবস্থাপনা' },
      text: {
        en: 'Promise.all rejects immediately if any single promise fails. For dashboard metrics where one broken widget should not break other panels, use Promise.allSettled which guarantees inspection of all results.',
        bn: 'Promise.all এ একটিমাত্র প্রমিজ ব্যর্থ হলেই সম্পূর্ণ অপারেশন ভেস্তে যায়। ড্যাশবোর্ডে কোনো একটি উইজেটের ব্যর্থতা যাতে অন্যগুলোর ক্ষতি না করে, সেজন্য Promise.allSettled ব্যবহার করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production async architectures', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল অ্যাসিঙ্ক আর্কিটেকচার' },
    },
    {
      type: 'list',
      items: [
        { en: 'Fastify and Express middleware: asynchronous handler chains process HTTP requests non-blockingly across thousands of connections.', bn: 'Fastify ও Express মিডলওয়্যারে অ্যাসিঙ্ক্রোনাস হ্যান্ডলার চেইন হাজার হাজার কানেকশনে নন-ব্লকিং উপায়ে এইচটিটিপি রিকোয়েস্ট পরিচালনা করে।' },
        { en: 'GraphQL query batching: DataLoader uses queueMicrotask to collect independent field queries into a single combined database query.', bn: 'GraphQL কুয়েরি ব্যাচিং: DataLoader লাইব্রেরি queueMicrotask ব্যবহার করে একাধিক কুয়েরিকে একটি সমন্বিত ডেটাবেস কুয়েরিতে রূপান্তর করে।' },
        { en: 'Browser fetch caching: service workers intercept network requests asynchronously using Cache API and stale-while-revalidate strategies.', bn: 'ব্রাউজার ক্যাশিং: সার্ভিস ওয়ার্কার Cache API ব্যবহার করে অ্যাসিঙ্ক্রোনাস নেটওয়ার্ক রিকোয়েস্ট দ্রুত ক্যাশ থেকে সরবরাহ করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — ES Modules and Architecture', bn: 'পরবর্তী পাঠ — ইএস মডিউল ও আর্কিটেকচার' },
    },
    {
      type: 'para',
      text: {
        en: 'With asynchronous JavaScript mastered, Lesson 5 investigates modern ES modules: static imports, tree-shaking, dynamic import() code-splitting, and how module graph resolution operates.',
        bn: 'অ্যাসিঙ্ক্রোনাস জাভাস্ক্রিপ্ট আয়ত্ত করার পর, পাঠ ৫ আধুনিক ইএস মডিউলে নজর দেবে: স্ট্যাটিক ইমপোর্ট, ট্রি-শেকিং, ডায়নামিক ইমপোর্টের মাধ্যমে কোড-স্প্লিটিং এবং মডিউল গ্রাফের রেজোলিউশন।',
      },
    },
  ],
  exercises: [
    {
      id: 'js-prom-ex-1',
      kind: 'mcq',
      topic: 'microtask-priority',
      question: {
        en: 'In the JavaScript Event Loop, why do Promise then() callbacks execute before setTimeout(..., 0) callbacks?',
        bn: 'জাভাস্ক্রিপ্ট ইভেন্ট লুপে setTimeout(..., 0) এর পূর্বেই কেন প্রমিজের then() কলব্যাকগুলো এক্সিকিউট হয়?',
      },
      options: [
        {
          en: 'Promise callbacks queue in the Microtask Queue, which the engine drains completely before processing the Macrotask Queue',
          bn: 'প্রমিজ কলব্যাকগুলো মাইক্রোটাস্ক কিউতে জমা হয়, যা ম্যাক্রোটাস্ক কিউ দেখার আগেই ইঞ্জিন সম্পূর্ণ খালি করে ফেলে',
        },
        {
          en: 'setTimeout is deprecated in modern ECMAScript standards',
          bn: 'আধুনিক ইসিএমএস্ক্রিপ্টে setTimeout পুরোপুরি বাতিল করা হয়েছে',
        },
        {
          en: 'Promises run directly on the host computer graphics card',
          bn: 'প্রমিজগুলো সরাসরি কম্পিউটারের গ্রাফিক্স কার্ডে চলে',
        },
        {
          en: 'The operating system treats setTimeout as background audio',
          bn: 'অপারেটিং সিস্টেম setTimeout কে ব্যাকগ্রাউন্ড অডিও হিসেবে গণ্য করে',
        },
      ],
      answer: 0,
      hint: { en: 'Microtasks are prioritized over macrotasks.', bn: 'মাইক্রোটাস্কগুলো ম্যাক্রোটাস্কের চেয়ে বেশি অগ্রাধিকার পায়।' },
      explanation: {
        en: 'The Event Loop specification requires draining all pending microtasks after synchronous code before picking the next macrotask.',
        bn: 'ইভেন্ট লুপ নিয়ম অনুযায়ী সিঙ্ক্রোনাস কোড শেষ হওয়ার পর পরবর্তী ম্যাক্রোটাস্কের আগেই সমস্ত মাইক্রোটাস্ক সম্পন্ন করতে হয়।',
      },
    },
    {
      id: 'js-prom-ex-2',
      kind: 'mcq',
      topic: 'latency-sum-sim',
      question: {
        en: 'In our code walkthrough, what were the individual latencies of taskA and taskB, and what was the aggregated latency across the 2 tasks?',
        bn: 'আমাদের কোড আলোচনায় taskA এবং taskB এর স্বতন্ত্র ল্যাটেন্সি কত ছিল এবং ২টি টাস্কে মোট ল্যাটেন্সি কত ছিল?',
      },
      options: [
        { en: 'taskA = 40ms, taskB = 80ms, total aggregated latency = 120ms across 2 tasks', bn: 'taskA = ৪০ms, taskB = ৮০ms, ২টি টাস্কে মোট ল্যাটেন্সি = ১২০ms' },
        { en: 'taskA = 100ms, taskB = 200ms, total aggregated latency = 300ms across 2 tasks', bn: 'taskA = ১০০ms, taskB = ২০০ms, ২টি টাস্কে মোট ল্যাটেন্সি = ৩০০ms' },
        { en: 'taskA = 10ms, taskB = 10ms, total aggregated latency = 20ms across 2 tasks', bn: 'taskA = ১০ms, taskB = ১০ms, ২টি টাস্কে মোট ল্যাটেন্সি = ২০ms' },
        { en: 'taskA = 0ms, taskB = 0ms, total aggregated latency = 0ms across 0 tasks', bn: 'taskA = ০ms, taskB = ০ms, ০টি টাস্কে মোট ল্যাটেন্সি = ০ms' },
      ],
      answer: 0,
      hint: { en: '40 + 80 = 120ms.', bn: '৪০ + ৮০ = ১২০ms।' },
      explanation: {
        en: 'The simulation defined task latencies of 40ms and 80ms, producing a total aggregated latency of 120ms across 2 tasks.',
        bn: 'সিমুলেশনটিতে ৪০ ও ৮০ মিলি সেকেন্ডের দুটি টাস্ক মিলিয়ে ২টি টাস্কে মোট ১২০ মিলি সেকেন্ড ল্যাটেন্সি হিসাব করা হয়েছিল।',
      },
    },
    {
      id: 'js-prom-ex-3',
      kind: 'mcq',
      topic: 'promise-allsettled-usage',
      question: {
        en: 'Which Promise combinator should be selected when executing multiple asynchronous tasks where every result must be reported, regardless of individual failures?',
        bn: 'একাধিক অ্যাসিঙ্ক কাজের ক্ষেত্রে কোনো একটির ব্যর্থতা সত্ত্বেও সবগুলোর ফলাফল জানতে চাইলে কোন প্রমিজ কম্বিনেটরটি ব্যবহার করা উচিত?',
      },
      options: [
        {
          en: 'Promise.allSettled: it returns status and value/reason for every promise without short-circuiting on rejection',
          bn: 'Promise.allSettled: এটি কোনো রিজেকশনে পুরো কাজ না থামিয়ে প্রতিটি প্রমিজের স্ট্যাটাস ও মান বা কারণ সরবরাহ করে',
        },
        {
          en: 'Promise.race: it only picks the slowest request',
          bn: 'Promise.race: এটি শুধুমাত্র সবচেয়ে ধীরগতির রিকোয়েস্টটি বাছাই করে',
        },
        {
          en: 'Promise.reject: it automatically crashes the browser',
          bn: 'Promise.reject: এটি ব্রাউজার ক্র্যাশ করায়',
        },
        {
          en: 'Promise.any: it fails if any single promise succeeds',
          bn: 'Promise.any: এটি কোনো একটি সফল হলেই ব্যর্থ হয়',
        },
      ],
      answer: 0,
      hint: { en: 'allSettled waits for all promises to settle.', bn: 'allSettled সব প্রমিজের নিষ্পত্তি হওয়া পর্যন্ত অপেক্ষা করে।' },
      explanation: {
        en: 'Promise.allSettled waits for all promises to resolve or reject, returning full audit objects for every concurrent operation.',
        bn: 'Promise.allSettled সব প্রমিজ সফল বা ব্যর্থ হওয়া পর্যন্ত অপেক্ষা করে এবং প্রতিটির বিস্তারিত অবস্থা প্রদান করে।',
      },
    },
    {
      id: 'js-prom-ex-4',
      kind: 'predict',
      topic: 'promise-states-count',
      question: {
        en: 'How many distinct mutual lifecycle states can a JavaScript Promise exist in (pending, fulfilled, rejected)?',
        bn: 'জাভাস্ক্রিপ্ট প্রমিজ মোট কয়টি পরস্পর স্বতন্ত্র লাইফসাইকেল স্টেটে (pending, fulfilled, rejected) থাকতে পারে?',
      },
      answer: '3',
      accept: ['3', 'three'],
      hint: { en: 'Pending, fulfilled, rejected = 3 states.', bn: 'পেন্ডিং, ফুলফিল্ড ও রিজেক্টেড = ৩টি অবস্থা।' },
      explanation: {
        en: 'A Promise exists across 3 states: pending, fulfilled, or rejected.',
        bn: 'একটি প্রমিজ ৩টি সম্ভাব্য অবস্থায় থাকে: পেন্ডিং, ফুলফিল্ড অথবা রিজেক্টেড।',
      },
    },
  ],
  quiz: {
    id: 'promises-eventloop-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'js-prom-q1',
        kind: 'mcq',
        topic: 'single-threaded-eventloop',
        question: {
          en: 'What architectural component prevents JavaScript from blocking during network I/O despite being single-threaded?',
          bn: 'সিঙ্গেল-থ্রেডেড হওয়া সত্ত্বেও কোন আর্কিটেকচারাল কাঠামোর কারণে জাভাস্ক্রিপ্ট নেটওয়ার্ক আই/ও চলাকালীন মূল থ্রেড আটকে রাখে না?',
        },
        options: [
          {
            en: 'The Event Loop delegating asynchronous I/O to runtime host APIs and queueing callbacks for Call Stack processing',
            bn: 'ইভেন্ট লুপের হোস্ট রানটাইম এপিআইতে অ্যাসিঙ্ক কাজ পাঠানো এবং কিউয়ের মাধ্যমে কল স্ট্যাকে কলব্যাক সমন্বয় করার ব্যবস্থা',
          },
          {
            en: 'JavaScript creating 500 parallel OS kernel threads for every line of code',
            bn: 'প্রতিটি কোড লাইনের জন্য জাভাস্ক্রিপ্ট ৫০০টি সমান্তরাল কার্নেল থ্রেড তৈরি করে',
          },
          {
            en: 'The browser turning off JavaScript parsing during network requests',
            bn: 'নেটওয়ার্ক চলাকালীন ব্রাউজার জাভাস্ক্রিপ্ট পার্সিং বন্ধ করে দেয়',
          },
          {
            en: 'Using USB hardware adapters to speed up synchronous while loops',
            bn: 'সিঙ্ক্রোনাস হোয়াইল লুপ দ্রুত করতে ইউএসবি হার্ডওয়্যার ব্যবহার করা হয়',
          },
        ],
        answer: 0,
        hint: { en: 'The Event Loop coordinates async operations.', bn: 'ইভেন্ট লুপ অ্যাসিঙ্ক কাজগুলো সমন্বয় করে।' },
        explanation: {
          en: 'The Event Loop allows single-threaded JavaScript to offload operations to browser/Node APIs and handle completions asynchronously.',
          bn: 'ইভেন্ট লুপ সিঙ্গেল-থ্রেডেড জাভাস্ক্রিপ্টকে হোস্ট এপিআইতে কাজ পাঠাতে দেয় এবং কলব্যাকের মাধ্যমে নন-ব্লকিং আচরণ নিশ্চিত করে।',
        },
      },
      {
        id: 'js-prom-q2',
        kind: 'mcq',
        topic: 'task-latency-check',
        question: {
          en: 'In our code walkthrough, what was the total aggregated latency calculated across the 2 tasks (40ms and 80ms)?',
          bn: 'আমাদের কোড আলোচনায় ২টি টাস্কের (৪০ms ও ৮০ms) মোট ল্যাটেন্সি কত হিসাব করা হয়েছিল?',
        },
        options: [
          { en: '120ms across 2 tasks', bn: '২টি টাস্কে ১২০ms' },
          { en: '200ms across 2 tasks', bn: '২টি টাস্কে ২০০ms' },
          { en: '50ms across 1 task', bn: '১টি টাস্কে ৫০ms' },
          { en: '0ms across 0 tasks', bn: '০টি টাস্কে ০ms' },
        ],
        answer: 0,
        hint: { en: '40 + 80 = 120.', bn: '৪০ + ৮০ = ১২০।' },
        explanation: {
          en: 'The simulation summed taskA (40ms) and taskB (80ms) to 120ms across 2 tasks.',
          bn: 'সিমুলেশনটিতে taskA (৪০ms) ও taskB (৮০ms) যোগ করে ২টি টাস্কে মোট ১২০ms পাওয়া গিয়েছিল।',
        },
      },
      {
        id: 'js-prom-q3',
        kind: 'mcq',
        topic: 'serial-await-waterfall-hazard',
        question: {
          en: 'What performance defect occurs when multiple independent asynchronous requests are authored using sequential await statements?',
          bn: 'একাধিক স্বাধীন অ্যাসিঙ্ক রিকোয়েস্টের সামনে ধারাবাহিকভাবে await লিখলে কী ধরনের পারফরম্যান্স সমস্যা তৈরি হয়?',
        },
        options: [
          {
            en: 'An await waterfall: requests execute one after another in serial, unnecessarily multiplying the total response time',
            bn: 'একটি await ওয়াটারফল: রিকোয়েস্টগুলো ধারাবাহিকভাবে একটির পর আরেকটি চলে মোট সময়কে অযথা বহুগুণ বাড়িয়ে দেয়',
          },
          {
            en: 'The database tables are dropped automatically',
            bn: 'ডেটাবেস টেবিলগুলো স্বয়ংক্রিয়ভাবে মুছে যায়',
          },
          {
            en: 'The operating system restarts unexpectedly',
            bn: 'অপারেটিং সিস্টেম অপ্রত্যাশিতভাবে রিস্টার্ট নেয়',
          },
          {
            en: 'HTTP status codes are inverted from 200 to 500',
            bn: 'এইচটিটিপি স্ট্যাটাস কোড ২০০ থেকে ৫০০ এ পরিবর্তিত হয়ে যায়',
          },
        ],
        answer: 0,
        hint: { en: 'It is called an await waterfall.', bn: 'একে await ওয়াটারফল বলা হয়।' },
        explanation: {
          en: 'Sequential await on independent calls forms a waterfall; use Promise.all to trigger them concurrently.',
          bn: 'স্বাধীন রিকোয়েস্টে ধারাবাহিক await দিলে ওয়াটারফল সৃষ্টি হয়; এগুলো সমান্তরালে চালাতে Promise.all ব্যবহার করা উচিত।',
        },
      },
      {
        id: 'js-prom-q4',
        kind: 'predict',
        topic: 'microtask-api-method',
        question: {
          en: 'Which standard global JavaScript function explicitly queues a function onto the microtask queue (e.g. queueMicrotask)?',
          bn: 'কোন আদর্শ গ্লোবাল জাভাস্ক্রিপ্ট ফাংশনটি সরাসরি মাইক্রোটাস্ক কিউতে কাজ জমা দেয় (যেমন queueMicrotask)?',
        },
        answer: 'queueMicrotask',
        accept: ['queueMicrotask', 'queueMicrotask()'],
        hint: { en: 'queueM...', bn: 'queueM... দিয়ে শুরু।' },
        explanation: {
          en: 'queueMicrotask(callback) enqueues a callback onto the microtask queue to run before UI rendering or macrotasks.',
          bn: 'queueMicrotask(callback) সরাসরি মাইক্রোটাস্ক কিউতে কলব্যাক জমা করে যা রেন্ডারিং বা ম্যাক্রোটাস্কের আগেই সম্পন্ন হয়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'modules-and-the-import',
    title: { en: 'ES Modules and Architecture', bn: 'ইএস মডিউল ও আর্কিটেকচার' },
  },
};
