import type { Lesson } from '../../../lib/types';

export const loopLedgerLesson: Lesson = {
  slug: 'the-loop-ledger',
  tech: 'node',
  title: {
    en: 'Node.js Architecture & Event Loop: Beginner Overview, Phases & Workers',
    bn: 'Node.js আর্কিটেকচার ও ইভেন্ট লুপ: বিগিনার ওভারভিউ, পর্যায় ও ওয়ার্কার্স'
  },
  summary: {
    en: 'Master beginner to advanced Node.js architecture across 10 structured topics, from V8 and libuv runtime to event loop phases. Learn microtask queues, process.nextTick priority, thread pool tuning, and parallel worker_threads.',
    bn: 'V8 ও libuv রানটাইম থেকে শুরু করে ইভেন্ট লুপের বিভিন্ন ধাপ পর্যন্ত 10 টি বিষয়ে Node.js ইঞ্জিন আয়ত্ত করুন। জানুন মাইক্রোটাস্ক কিউ, process.nextTick এর অগ্রাধিকার, থ্রেড পুল টিউনিং এবং প্যারালাল worker_threads।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-middleware-vows',
    title: {
      en: 'Express Middleware & REST API Design: Pipeline, Routing & Error Handling',
      bn: 'Express মিডলওয়্যার ও REST API ডিজাইন: পাইপলাইন, রাউটিং ও এরর হ্যান্ডলিং'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Runtime Engine: V8 Architecture + Libuv Core', bn: '১. রানটাইম ইঞ্জিন: V8 আর্কিটেকচার ও Libuv কোর' } },
    {
      type: 'para',
      text: {
        en: 'Node.js is not a programming language or a framework. It is an open-source, cross-platform JavaScript runtime built on Google’s high-performance V8 engine and the C library libuv. V8 compiles and executes JavaScript code into machine code, while libuv provides the event loop, asynchronous I/O, and the background thread pool.',
        bn: 'Node.js কোনো প্রোগ্রামিং ভাষা বা ফ্রেমওয়ার্ক নয়। এটি গুগলের উচ্চগতির V8 ইঞ্জিন এবং সি লাইব্রেরি libuv-এর ওপর নির্মিত একটি ওপেন সোর্স জাভাস্ক্রিপ্ট রানটাইম এনভায়রনমেন্ট। V8 জাভাস্ক্রিপ্ট কোডকে সরাসরি মেশিন কোডে কম্পাইল করে, আর libuv ইভেন্ট লুপ, অ্যাসিঙ্ক I/O এবং ব্যাকগ্রাউন্ড থ্রেড পুল সরবরাহ করে।'
      }
    },
    {
      type: 'visual',
      id: 'node'
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Inspecting Node.js engine versions and architecture:
console.log("Node version:", process.version);
console.log("V8 engine version:", process.versions.v8);
console.log("Libuv version:", process.versions.uv);
console.log("Operating System Platform:", process.platform);

// Output:
// Node version: v20.20.2
// V8 engine version: 11.3.244.8-node.23
// Libuv version: 1.46.0
// Operating System Platform: linux`,
      caption: {
        en: 'Node.js coordinates Google V8 for JavaScript execution with Libuv for asynchronous system bindings.',
        bn: 'Node.js জাভাস্ক্রিপ্ট চালানোর জন্য V8 এবং অ্যাসিঙ্ক সিস্টেম কলের জন্য Libuv ব্যবহার করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Core Paradigm: Single-Threaded Non-Blocking I/O', bn: '২. মূল ভিত্তি: সিঙ্গল-থ্রেডেড নন-ব্লকিং I/O' } },
    {
      type: 'para',
      text: {
        en: 'Unlike traditional multi-threaded web servers (Apache, Tomcat) that allocate a new 2MB operating system thread for every concurrent HTTP request, Node.js runs on a single main thread using Non-Blocking I/O. When a file is read or a database query runs, the thread does not wait idle; it registers a callback and immediately handles the next client.',
        bn: 'সনাতন মাল্টি-থ্রেডেড সার্ভারের (যেমন Apache) মতো না হয়ে, যেখানে প্রতিটি ক্লায়েন্টের জন্য আলাদা থ্রেড তৈরি করে মেমরি অপচয় করা হয়, Node.js একটিমাত্র মেইন থ্রেডে Non-Blocking I/O দিয়ে কাজ করে। ফাইল পড়া বা ডেটাবেস কোয়েরি চলাকালীন থ্রেডটি বসে না থেকে অবিলম্বে পরবর্তী ক্লায়েন্টের রিকোয়েস্ট গ্রহণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import fs from "fs";

console.log("1. Starting file read request");

// Non-blocking asynchronous file read:
fs.readFile("package.json", "utf8", (err, data) => {
  if (err) throw err;
  console.log("3. File content read completed! Bytes:", data.length);
});

console.log("2. Main thread continues without waiting!");

// Output:
// 1. Starting file read request
// 2. Main thread continues without waiting!
// 3. File content read completed! Bytes: 2150`,
      caption: {
        en: 'Non-blocking calls register background operations and yield the main thread immediately.',
        bn: 'নন-ব্লকিং কল ব্যাকগ্রাউন্ডে কাজ পাঠিয়ে সাথে সাথে মেইন থ্রেডকে পরবর্তী কাজের জন্য মুক্ত করে দেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Event Loop Phases: Timers, Poll, Check & Close', bn: '৩. ইভেন্ট লুপের পর্যায়সমূহ: Timers, Poll, Check ও Close' } },
    {
      type: 'para',
      text: {
        en: 'The libuv Event Loop orchestrates task execution across four primary phases: 1) Timers: executes callbacks scheduled by setTimeout and setInterval; 2) Poll: retrieves new I/O events (sockets, files, network connections); 3) Check: executes callbacks registered by setImmediate. 4) Close: handles socket closure callbacks (e.g. socket.on("close")).',
        bn: 'libuv Event Loop মূলত ৪টি ধাপে কাজ সম্পাদন করে: ১) Timers: setTimeout ও setInterval-এর নির্ধারিত কাজ চালায়; ২) Poll: নতুন I/O ইভেন্ট (সকেট, নেটওয়ার্ক, ফাইল) গ্রহণ করে; ৩) Check: setImmediate-এর কাজগুলো এক্সিকিউট করে। ৪) Close: সকেট বা ফাইল বন্ধের (close ইভেন্ট) কাজগুলো পরিচালনা করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Demonstrating execution across different Event Loop phases:
setTimeout(() => console.log("Timers Phase: setTimeout executed"), 0);
setImmediate(() => console.log("Check Phase: setImmediate executed"));

// Output:
// Timers Phase: setTimeout executed
// Check Phase: setImmediate executed`,
      caption: {
        en: 'The event loop moves sequentially through distinct phases on every lap.',
        bn: 'ইভেন্ট লুপ প্রতি চক্করে ক্রমানুসারে নির্দিষ্ট পর্যায়গুলো অতিক্রম করে কাজ চালায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Microtask Priority: process.nextTick vs Promise.then', bn: '৪. মাইক্রোটাস্ক অগ্রাধিকার: process.nextTick বনাম Promise.then' } },
    {
      type: 'para',
      text: {
        en: 'Between each phase of the event loop, Node.js pauses to drain the Microtask Queues completely. There are two distinct microtask lanes: 1) process.nextTick queue (highest VIP priority); 2) Promise job queue (.then / async await). Microtasks ALWAYS execute before the loop advances to the next phase.',
        bn: 'ইভেন্ট লুপের প্রতিটি পর্যায়ের মাঝখানে Node.js থমকে গিয়ে সমস্ত Microtask শেষ করে নেয়। এর দুটি লেন রয়েছে: ১) process.nextTick (সর্বোচ্চ অগ্রাধিকারপ্রাপ্ত VIP লেন); ২) Promise জব কিউ (.then বা async/await)। পরের ফেজে যাওয়ার আগে মাইক্রোটাস্কের সব কাজ শেষ করা বাধ্যতামূলক।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `console.log("1. Synchronous script start");

setTimeout(() => console.log("5. Macrotask Timer phase"), 0);

Promise.resolve().then(() => console.log("3. Microtask: Promise resolved"));

process.nextTick(() => console.log("2. Microtask: process.nextTick priority"));

console.log("4. Synchronous script end");

// Output:
// 1. Synchronous script start
// 4. Synchronous script end
// 2. Microtask: process.nextTick priority
// 3. Microtask: Promise resolved
// 5. Macrotask Timer phase`,
      caption: {
        en: 'process.nextTick executes immediately after the current tick, preceding Promise microtasks.',
        bn: 'process.nextTick বর্তমান কাজের ঠিক পরপরই চলে প্রমিজ মাইক্রোটাস্কের চেয়েও আগে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Timer Mechanics: setImmediate vs setTimeout(fn, 0)', bn: '৫. টাইমার মেকানিজম: setImmediate বনাম setTimeout(fn, 0)' } },
    {
      type: 'para',
      text: {
        en: 'In the main module scope, the order between setTimeout(fn, 0) and setImmediate(fn) is non-deterministic (depending on process execution latency). However, inside any I/O cycle (like a file read or socket callback), setImmediate ALWAYS runs before setTimeout because the check phase directly follows the poll phase.',
        bn: 'গ্লোবাল ফাইলে setTimeout(fn, 0) এবং setImmediate(fn)-এর ক্রম নির্দিষ্ট থাকে না। কিন্তু কোনো I/O কলের ভেতরে (যেমন ফাইল পড়া বা নেটওয়ার্ক হ্যান্ডলার) setImmediate সর্বদা setTimeout-এর আগে রান করে, কারণ Poll ধাপের ঠিক পরেই Check ধাপ আসে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import fs from "fs";

fs.readFile("package.json", () => {
  // Inside an I/O callback:
  setTimeout(() => console.log("2. setTimeout (Timers phase)"), 0);
  setImmediate(() => console.log("1. setImmediate (Check phase - fires FIRST!)"));
});

// Output inside I/O:
// 1. setImmediate (Check phase - fires FIRST!)
// 2. setTimeout (Timers phase)`,
      caption: {
        en: 'Inside I/O callbacks, setImmediate is guaranteed to execute before any scheduled timer.',
        bn: 'I/O কলব্যাকের ভেতর setImmediate সর্বদা যেকোনো টাইমারের আগেই রান করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The Libuv Thread Pool: UV_THREADPOOL_SIZE Mechanics', bn: '৬. Libuv ব্যাকগ্রাউন্ড থ্রেড পুল: UV_THREADPOOL_SIZE' } },
    {
      type: 'para',
      text: {
        en: 'While JavaScript runs on a single thread, libuv maintains a background Worker Thread Pool (default size: 4) to handle synchronous operating system operations: file system I/O (fs), DNS lookups (dns.lookup), cryptographic algorithms (crypto.pbkdf2), and compression (zlib). Setting the UV_THREADPOOL_SIZE environment variable scales this pool up to 128.',
        bn: 'জাভাস্ক্রিপ্ট এক থ্রেডে চললেও libuv ব্যাকগ্রাউন্ডে ৪টি ওয়ার্কার থ্রেডের একটি পুল বজায় রাখে যা অপারেটিং সিস্টেমের ভারী কাজগুলো সম্পন্ন করে: যেমন ফাইল হ্যান্ডলিং (fs), ডিএনএস লুকআপ, ক্রিপ্টোগ্রাফি (crypto) ও কম্প্রেশন। UV_THREADPOOL_SIZE ভ্যারিয়েবল বাড়িয়ে এই পুল ১২৮ পর্যন্ত বড় করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import crypto from "crypto";

const start = Date.now();

// Dispatches 4 parallel cryptographic hashes into libuv thread pool:
for (let i = 1; i <= 4; i++) {
  crypto.pbkdf2("password", "salt", 100000, 64, "sha512", () => {
    console.log(\`Task \${i} completed in: \${Date.now() - start}ms\`);
  });
}

// Output:
// Task 1 completed in: 48ms
// Task 2 completed in: 49ms
// Task 3 completed in: 50ms
// Task 4 completed in: 51ms
// (All 4 finish concurrently across the 4 pool worker threads!)`,
      caption: {
        en: 'Libuv thread pool executes heavy cryptographic and file operations in background threads.',
        bn: 'Libuv থ্রেড পুল ক্রিপ্টো ও ফাইলের মতো ভারী কাজগুলো পটভূমির থ্রেডে সম্পন্ন করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. The Fatal Sin: Blocking the Event Loop', bn: '৭. মারাত্মক ভুল: ইভেন্ট লুপ ব্লক করে রাখা' } },
    {
      type: 'para',
      text: {
        en: 'Because Node.js executes all JavaScript on a single thread, running a synchronous CPU-heavy loop (like bcrypt.hashSync, calculating Fibonacci, or parsing a 50MB JSON file) freezes the server completely. Every incoming HTTP request is blocked and forced to wait until the CPU calculation finishes, collapsing throughput.',
        bn: 'যেহেতু Node.js একটিমাত্র থ্রেডে কোড চালায়, তাই কোনো ভারী সিঙ্ক কাজ (যেমন bcrypt.hashSync, ফিবোনাচ্চি বা ৫০ মেগাবাইটের JSON পার্স) চালালে পুরো সার্ভার হ্যাং হয়ে যায়। তখন কোনো নতুন ভিজিটর সাইটে ঢুকতে পারে না এবং সার্ভারের পারফরম্যান্স ধসে পড়ে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// ❌ DISASTROUS: Freezes the entire Node.js server for 200ms!
// function blockServer() {
//   const end = Date.now() + 200;
//   while (Date.now() < end) { /* CPU hostage! */ }
// }

// ✅ SAFE: Break large iterations across event loop ticks using setImmediate
function asyncChunkedProcessing(items, processItem) {
  let index = 0;
  function nextChunk() {
    const chunkEnd = Math.min(index + 50, items.length);
    while (index < chunkEnd) {
      processItem(items[index]);
      index++;
    }
    if (index < items.length) {
      // Yield thread back to event loop to handle incoming network requests!
      setImmediate(nextChunk);
    }
  }
  nextChunk();
}

console.log("Chunked task scheduling yields control back to event loop");
// Output: Chunked task scheduling yields control back to event loop`,
      caption: {
        en: 'Long-running CPU calculations must yield control to the event loop using setImmediate.',
        bn: 'দীর্ঘমেয়াদী হিসাবগুলোকে খণ্ড খণ্ড করে setImmediate দিয়ে লুপের নিয়ন্ত্রণ ছেড়ে দিতে হয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Parallel CPU Execution: The worker_threads Module', bn: '৮. প্যারালাল সিপিইউ প্রসেসিং: worker_threads মডিউল' } },
    {
      type: 'para',
      text: {
        en: 'When heavy CPU work cannot be avoided (video transcoding, machine learning inference, image resizing), Node.js provides the worker_threads module. Each Worker Thread runs in its own isolated V8 engine instance with independent event loops, communicating with the main thread via message channels (postMessage/onmessage).',
        bn: 'ভিডিও রূপান্তর বা মেশিন লার্নিংয়ের মতো অনিবার্য ভারী কাজের জন্য Node.js সরবরাহ করেছে worker_threads মডিউল। প্রতিটি ওয়ার্কার থ্রেড নিজস্ব স্বাধীন V8 ইঞ্জিন এবং ইভেন্ট লুপে চলে, এবং postMessage ও ইভেন্টের মাধ্যমে মেইন থ্রেডের সাথে নিরাপদে যোগাযোগ রক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import { isMainThread, Worker, parentPort } from "worker_threads";

if (isMainThread) {
  console.log("Main thread dispatches heavy work to Worker Thread");
  // const worker = new Worker("./worker.js");
  // worker.on("message", (res) => console.log("Result received:", res));
} else {
  // Inside worker thread:
  parentPort.postMessage({ status: "CPU calculation finished" });
}

console.log("Is running on primary thread:", isMainThread); // true`,
      caption: {
        en: 'worker_threads execute heavy computational algorithms without starving the main event loop.',
        bn: 'worker_threads মূল ইভেন্ট লুপকে বাধাগ্রস্ত না করে ব্যাকগ্রাউন্ডে ভারী হিসাব সম্পন্ন করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Error-First Callback Protocol & Modern Async/Await', bn: '৯. এরর-ফার্স্ট কলব্যাক প্রোটোকল ও আধুনিক Async/Await' } },
    {
      type: 'para',
      text: {
        en: 'Classic Node.js APIs standardized on the Error-First Callback pattern: callback(err, data). The first argument is reserved for an Error object (null on success). In modern Node.js, use the fs/promises module and util.promisify to handle asynchronous code with clean try/catch blocks.',
        bn: 'সনাতন Node.js এপিআই Error-First Callback নিয়ম মেনে চলত: callback(err, data)। প্রথম আর্গুমেন্টটি এরর অবজেক্টের জন্য বরাদ্দ থাকত (সফল হলে null)। আধুনিক Node.js-এ fs/promises এবং util.promisify দিয়ে কোডকে প্রমিজে রূপান্তর করে পরিচ্ছন্ন try/catch ব্লকে লেখা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import fs from "fs/promises";

async function readConfig() {
  try {
    const raw = await fs.readFile("package.json", "utf8");
    const parsed = JSON.parse(raw);
    console.log("Project name loaded:", parsed.name);
    return parsed.name;
  } catch (err) {
    console.error("Failed to read project config:", err.message);
  }
}

await readConfig(); // "Project name loaded: codeshikhon"` ,
      caption: {
        en: 'Modern fs/promises APIs replace legacy nested callbacks with clean async/await syntax.',
        bn: 'আধুনিক fs/promises এপিআই জটিল নেস্টেড কলব্যাকের বদলে সহজ async/await সিনট্যাক্স দেয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Process Observability: High-Resolution Performance Metrics', bn: '১০. প্রসেস পর্যবেক্ষণ: হাই-রেজোলিউশন পারফরম্যান্স পরিমাপ' } },
    {
      type: 'para',
      text: {
        en: 'Measuring latency requires microsecond precision. Standard Date.now() is susceptible to OS clock drift. Node.js provides process.hrtime.bigint() and the perf_hooks module (performance.now()), returning high-resolution monotonic timestamps immune to system clock adjustments.',
        bn: 'সার্ভারের গতি মাপতে মাইক্রো-সেকেন্ডের নিখুঁত পরিমাপ দরকার। সাধারণ Date.now() কম্পিউটারের ঘড়ির পরিবর্তনের কারণে ভুল হতে পারে। Node.js-এর process.hrtime.bigint() এবং perf_hooks মডিউল (performance.now()) সিস্টেম ঘড়ির ওঠানামা থেকে সম্পূর্ণ মুক্ত ও নিখুঁত সময় দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import { performance } from "perf_hooks";

const startHr = process.hrtime.bigint();
const startMs = performance.now();

// Simulate lightweight computational task:
let sum = 0;
for (let i = 0; i < 10000; i++) sum += i;

const elapsedNs = process.hrtime.bigint() - startHr;
const elapsedMs = performance.now() - startMs;

console.log("Elapsed nanoseconds:", Number(elapsedNs) > 0); // true
console.log("Elapsed milliseconds:", elapsedMs.toFixed(3));  // e.g. "0.142"`,
      caption: {
        en: 'High-resolution timers record execution latency down to nanosecond precision.',
        bn: 'হাই-রেজোলিউশন টাইমার ন্যানো-সেকেন্ডের নিখুঁত হিসেবে কোডের গতি পরিমাপ করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'nod-loo-ex1',
      kind: 'predict',
      topic: 'node: VIP microtask queue function',
      question: {
        en: 'Which Node.js function schedules a callback in the highest-priority microtask queue, executing before Promise callbacks and before the event loop advances to the next phase?',
        bn: 'কোন Node.js ফাংশনটি প্রমিজ কলব্যাকের চেয়েও আগে এবং ইভেন্ট লুপের পরবর্তী ফেজে যাওয়ার আগেই সর্বোচ্চ অগ্রাধিকারযুক্ত মাইক্রোটাস্ক কিউতে কাজ শিডিউল করে?'
      },
      code: `/* Scheduling a top-priority microtask in Node.js */
/* process.____________(() => { console.log("Priority run"); }); */`,
      answer: 'nextTick',
      accept: ['nextTick', 'process.nextTick'],
      hint: {
        en: 'It executes on the next tick.',
        bn: 'পরবর্তী টিক-এ কার্যকর হয়।'
      },
      explanation: {
        en: 'process.nextTick schedules callbacks in the microtask queue that drains immediately after the current operation finishes, before Promises and before the loop advances.',
        bn: 'process.nextTick সবচেয়ে দ্রুতগামী মাইক্রোটাস্ক যা বর্তমান অপারেশন শেষ হওয়ার সাথে সাথেই কার্যকর হয়।'
      }
    },
    {
      id: 'nod-loo-ex2',
      kind: 'mcq',
      topic: 'node: default thread pool size',
      question: {
        en: 'What is the default size of the libuv background thread pool in Node.js?',
        bn: 'Node.js-এ libuv ব্যাকগ্রাউন্ড থ্রেড পুলের ডিফল্ট সাইজ কত?'
      },
      options: [
        { en: '4 threads (can be scaled up to 128 via UV_THREADPOOL_SIZE)', bn: '৪টি থ্রেড (UV_THREADPOOL_SIZE দিয়ে ১২৮ পর্যন্ত বাড়ানো যায়)' },
        { en: '1 thread only', bn: 'মাত্র ১টি থ্রেড' },
        { en: '64 threads', bn: '৬৪টি থ্রেড' },
        { en: '1000 threads', bn: '১০০০টি থ্রেড' }
      ],
      answer: 0,
      hint: {
        en: 'Four worker threads by default.',
        bn: 'ডিফল্টভাবে চারটি ওয়ার্কার থ্রেড থাকে।'
      },
      explanation: {
        en: 'Libuv allocates 4 worker threads by default to handle file I/O, DNS lookup, and cryptographic operations in the background.',
        bn: 'Libuv ফাইল হ্যান্ডলিং, ক্রিপ্টো এবং ডিএনএস অপারেশনের জন্য ডিফল্টভাবে ৪টি ব্যাকগ্রাউন্ড থ্রেড চালু রাখে।'
      }
    },
    {
      id: 'nod-loo-ex3',
      kind: 'mcq',
      topic: 'node: event loop blocking danger',
      question: {
        en: 'Why is running a long synchronous CPU calculation (like bcrypt.hashSync) dangerous in a Node.js web server?',
        bn: 'Node.js ওয়েব সার্ভারে দীর্ঘমেয়াদী সিঙ্ক ক্যালকুলেশন (যেমন bcrypt.hashSync) চালানো কেন বিপজ্জনক?'
      },
      options: [
        { en: 'Because Node.js runs on a single main thread; blocking it freezes all other concurrent user requests on the server', bn: 'কারণ Node.js একটিমাত্র মেইন থ্রেডে চলে; এটি ব্লক হলে সার্ভারের অন্য সব ব্যবহারকারীর রিকোয়েস্ট আটকে যায়' },
        { en: 'Because it deletes the node_modules folder', bn: 'node_modules ফোল্ডার মুছে ফেলে' },
        { en: 'Because it disables SSL encryption', bn: 'SSL এনক্রিপশন বন্ধ করে' },
        { en: 'Because Node.js requires Python for math', bn: 'গণিতের জন্য পাইথন লাগে বলে' }
      ],
      answer: 0,
      hint: {
        en: 'Single thread is shared by all users.',
        bn: 'একক থ্রেড সবার মাঝে ভাগ করা থাকে।'
      },
      explanation: {
        en: 'In a single-threaded server, blocking CPU code prevents the event loop from picking up new network requests, degrading server response times for all clients.',
        bn: 'সিঙ্গল-থ্রেডেড সার্ভারে কোনো কাজ আটকে গেলে ইভেন্ট লুপ নতুন রিকোয়েস্ট নিতে পারে না, যার ফলে সব ব্যবহারকারীর জন্য সাইট স্থবির হয়ে পড়ে।'
      }
    }
  ],
  quiz: {
    id: 'nod-loop-quiz',
    title: { en: 'Node.js Architecture & Event Loop Quiz', bn: 'Node.js আর্কিটেকচার ও ইভেন্ট লুপ কুইজ' },
    questions: [
      {
        id: 'nlq1',
        kind: 'mcq',
        topic: 'node: setImmediate vs setTimeout in I/O',
        question: {
          en: 'Inside an asynchronous I/O callback (e.g. fs.readFile), which scheduled callback executes first?',
          bn: 'অ্যাসিনক্রোনাস I/O কলব্যাকের ভেতর (যেমন fs.readFile) কোনটি আগে এক্সিকিউট হয়?'
        },
        options: [
          { en: 'setImmediate, because the Check phase immediately follows the Poll phase', bn: 'setImmediate, কারণ Poll ধাপের ঠিক পরেই Check ধাপ আসে' },
          { en: 'setTimeout(fn, 0)', bn: 'setTimeout(fn, 0)' },
          { en: 'They always execute simultaneously in parallel', bn: 'উভয়ই একসাথে চলে' },
          { en: 'Neither will ever execute', bn: 'কোনোটিই কখনো চলবে না' }
        ],
        answer: 0,
        hint: {
          en: 'Check phase directly follows the Poll phase.',
          bn: 'Poll ধাপের ঠিক পরেই Check ধাপ।'
        },
        explanation: {
          en: 'When exiting the poll phase inside I/O, the event loop transitions directly into the check phase, guaranteeing setImmediate fires before timers.',
          bn: 'I/O শেষ হওয়ার পর ইভেন্ট লুপ সরাসরি Check ফেজে প্রবেশ করে, ফলে setImmediate সবসময় টাইমারের আগেই কার্যকর হয়।'
        }
      },
      {
        id: 'nlq2',
        kind: 'mcq',
        topic: 'node: parallel processing module',
        question: {
          en: 'Which built-in Node.js module should be used to run heavy CPU-bound algorithms on parallel operating system threads?',
          bn: 'সমান্তরাল অপারেটিং সিস্টেম থ্রেডে ভারী CPU কাজ চালাতে কোন বিল্ট-ইন Node.js মডিউলটি ব্যবহার করা উচিত?'
        },
        options: [
          { en: 'worker_threads', bn: 'worker_threads' },
          { en: 'http', bn: 'http' },
          { en: 'querystring', bn: 'querystring' },
          { en: 'events', bn: 'events' }
        ],
        answer: 0,
        hint: {
          en: 'Worker threads for CPU parallel execution.',
          bn: 'সিপিইউ কাজের জন্য ওয়ার্কার থ্রেডস।'
        },
        explanation: {
          en: 'The worker_threads module provides true multi-threaded parallel computation in Node.js, running independent V8 instances with shared memory buffers.',
          bn: 'worker_threads মডিউল আলাদা V8 ইঞ্জিনের সাহায্যে মাল্টি-থ্রেডেড প্যারালাল প্রসেসিং নিশ্চিত করে মেইন লুপকে সচল রাখে।'
        }
      },
      {
        id: 'nlq3',
        kind: 'mcq',
        topic: 'node: process.nextTick vs Promise microtasks',
        question: {
          en: 'Between process.nextTick and Promise.then microtasks, which queue executes first upon completing synchronous code?',
          bn: 'সিঙ্ক্রোনাস কোড শেষ হওয়ার পর process.nextTick এবং Promise.then মাইক্রোটাস্কের মাঝে কোন কিউটি আগে এক্সিকিউট হয়?'
        },
        options: [
          { en: 'process.nextTick callbacks drain completely before any Promise microtasks are processed', bn: 'যেকোনো Promise মাইক্রোটাস্ক প্রক্রিয়াকরণের আগেই process.nextTick কলব্যাকগুলো সম্পূর্ণ ড্রেন হয়' },
          { en: 'Promise.then always runs first', bn: 'Promise.then সর্বদা আগে চলে' },
          { en: 'They alternate one-by-one', bn: 'তারা একে একে পর্যায়ক্রমে চলে' },
          { en: 'Neither executes until the process exits', bn: 'প্রসেস শেষ না হওয়া পর্যন্ত কোনোটিই চলে না' }
        ],
        answer: 0,
        hint: {
          en: 'process.nextTick has the highest priority microtask lane.',
          bn: 'process.nextTick এর মাইক্রোটাস্কের অগ্রাধিকার সবচেয়ে বেশি।'
        },
        explanation: {
          en: 'The nextTickQueue takes absolute priority over the microtask queue, draining completely before the engine processes Promise.then microtasks.',
          bn: 'nextTickQueue মাইক্রোটাস্ক কিউয়ের চেয়েও বেশি অগ্রাধিকার পায় এবং Promise.then চালানোর আগেই এর সব কাজ সম্পন্ন হয়।'
        }
      },
      {
        id: 'nlq4',
        kind: 'mcq',
        topic: 'node: default libuv thread pool size',
        question: {
          en: 'What is the default size of the libuv background thread pool in Node.js?',
          bn: 'Node.js-এ libuv ব্যাকগ্রাউন্ড থ্রেড পুলের ডিফল্ট আকার কত?'
        },
        options: [
          { en: '4 worker threads (configurable via UV_THREADPOOL_SIZE)', bn: '4 টি ওয়ার্কার থ্রেড (যা UV_THREADPOOL_SIZE দিয়ে পরিবর্তনযোগ্য)' },
          { en: '1 thread', bn: '1 টি থ্রেড' },
          { en: '16 threads', bn: '16 টি থ্রেড' },
          { en: '64 threads', bn: '64 টি থ্রেড' }
        ],
        answer: 0,
        hint: {
          en: 'Default thread pool size is 4.',
          bn: 'ডিফল্ট থ্রেড পুলের আকার 4।'
        },
        explanation: {
          en: 'By default, libuv spawns 4 worker threads for offloading synchronous file system, crypto, and DNS lookup operations.',
          bn: 'ফাইল সিস্টেম, ক্রিপ্টোগ্রাফি এবং DNS খোঁজার কাজগুলো চালানোর জন্য libuv ডিফল্টভাবে 4 টি ব্যাকগ্রাউন্ড ওয়ার্কার থ্রেড ব্যবহার করে।'
        }
      }
    ]
  }
};
