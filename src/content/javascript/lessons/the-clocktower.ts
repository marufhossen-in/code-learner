import type { Lesson } from '../../../lib/types';

export const clocktowerLesson: Lesson = {
  slug: 'js-async-promises',
  tech: 'javascript',
  title: {
    en: 'JavaScript Asynchronous Programming: Promises, Async/Await & Fetch',
    bn: 'জাভাস্ক্রিপ্ট অ্যাসিনক্রোনাস প্রোগ্রামিং: প্রমিজ, async/await ও fetch'
  },
  summary: {
    en: 'Master non-blocking asynchronous programming across 10 structured topics: single-threaded non-blocking mechanics, callback hell, the three Promise lifecycle states, flat .then/.catch chaining, promise constructors, async/await syntax, try/catch error boundaries, Promise.all vs allSettled combinators, Promise.race timeouts. And production fetch requests with AbortController.',
    bn: '১০টি সুসংগঠিত পয়েন্টে নন-ব্লকিং অ্যাসিনক্রোনাস প্রোগ্রামিং আয়ত্ত করুন: সিঙ্গেল-থ্রেডেড নন-ব্লকিং মেকানিজম, কলব্যাক হেল, প্রমিজের ৩টি স্টেট, সমতল .then/.catch চেইনিং, প্রমিজ কনস্ট্রাক্টর, async/await সিনট্যাক্স, try/catch এরর হ্যান্ডলিং, Promise.all বনাম allSettled, Promise.race টাইমাউট এবং AbortController সহ প্রোডাকশন fetch।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'closures',
    title: { en: 'JavaScript Closures & Lexical Scope', bn: 'জাভাস্ক্রিপ্ট ক্লোজার ও লেক্সিক্যাল স্কোপ' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Synchronous vs Asynchronous: The Non-Blocking Engine', bn: '১. সিঙ্ক্রোনাস বনাম অ্যাসিনক্রোনাস: নন-ব্লকিং ইঞ্জিন' } },
    {
      type: 'para',
      text: {
        en: 'JavaScript runs on a single main thread with one call stack. In synchronous code, each statement blocks subsequent lines until it finishes. Asynchronous APIs (timers, network requests, file I/O) are offloaded to web browser APIs or Node.js libuv threads, allowing the main thread to continue processing user interactions without freezing the interface.',
        bn: 'জাভাস্ক্রিপ্ট একটিমাত্র মেইন থ্রেড ও কল স্ট্যাকের ওপর চলে। সিঙ্ক্রোনাস কোডে প্রতিটি লাইন শেষ না হওয়া পর্যন্ত পরের লাইন আটকে থাকে। কিন্তু অ্যাসিনক্রোনাস কাজগুলো (টাইমার, নেটওয়ার্ক রিকোয়েস্ট, ফাইল পড়া) ব্রাউজার ব্যাকগ্রাউন্ড বা Node.js-এ পাঠিয়ে দেওয়া হয়, যার ফলে মূল থ্রেড ব্যবহারকারীর ইন্টারঅ্যাকশন না থামিয়েই সাবলীলভাবে চলতে পারে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Promise Lifecycle: States and Transitions',
        bn: 'প্রমিজ লাইফসাইকেল: অবস্থা ও ট্রানজিশন'
      },
      caption: {
        en: 'A Promise starts pending and transitions irrevocably to either fulfilled with a value or rejected with an error.',
        bn: 'প্রমিজ pending অবস্থায় শুরু হয় এবং অপরিবর্তনীয়ভাবে fulfilled মান অথবা rejected এররে পৌঁছায়।'
      },
      svg: `<svg viewBox="0 0 680 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="150" rx="10" fill="#0f172a"/>
  <!-- Pending -->
  <rect x="25" y="45" width="160" height="60" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="105" y="72" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold" font-family="monospace">PENDING</text>
  <text x="105" y="90" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">Initial state</text>
  <!-- Arrow top -->
  <path d="M195 65 H270" stroke="#10b981" stroke-width="2"/>
  <text x="232" y="58" text-anchor="middle" fill="#34d399" font-size="10" font-family="monospace">resolve(v)</text>
  <!-- Fulfilled -->
  <rect x="280" y="25" width="180" height="50" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="370" y="48" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold" font-family="monospace">FULFILLED</text>
  <text x="370" y="64" text-anchor="middle" fill="#a7f3d0" font-size="10" font-family="monospace">.then(onSuccess)</text>
  <!-- Arrow bottom -->
  <path d="M195 85 H270" stroke="#f43f5e" stroke-width="2"/>
  <text x="232" y="100" text-anchor="middle" fill="#fb7185" font-size="10" font-family="monospace">reject(e)</text>
  <!-- Rejected -->
  <rect x="280" y="85" width="180" height="50" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="370" y="108" text-anchor="middle" fill="#fb7185" font-size="12" font-weight="bold" font-family="monospace">REJECTED</text>
  <text x="370" y="124" text-anchor="middle" fill="#fecdd3" font-size="10" font-family="monospace">.catch(onError)</text>
  <!-- Finally -->
  <rect x="500" y="55" width="155" height="50" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="577" y="78" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace">SETTLED</text>
  <text x="577" y="94" text-anchor="middle" fill="#cbd5e1" font-size="10" font-family="monospace">.finally(cleanUp)</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `console.log("1: Synchronous start");

// Asynchronous timer offloaded to browser Web API
setTimeout(() => {
  console.log("3: Asynchronous callback runs after main stack empties");
}, 0);

console.log("2: Synchronous end");

// Output:
// 1: Synchronous start
// 2: Synchronous end
// 3: Asynchronous callback runs after main stack empties`,
      caption: {
        en: 'Even with a 0ms delay, asynchronous timers yield until synchronous execution completes.',
        bn: '০ মিলিসেকেন্ড টাইমাউট থাকলেও সিঙ্ক্রোনাস কাজ শেষ হওয়ার আগে অ্যাসিনক্রোনাস কোড চলে না।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Callbacks and the "Callback Hell" Pyramid of Doom', bn: '২. কলব্যাক ও "কলব্যাক হেল" সমস্যা' } },
    {
      type: 'para',
      text: {
        en: 'Historically, asynchronous operations were coordinated by passing callback functions. Nesting multiple dependent asynchronous operations created deeply indented code known as "Callback Hell" or the "Pyramid of Doom", which made error handling difficult and inverted execution control.',
        bn: 'পূর্বে অ্যাসিনক্রোনাস কাজের সমন্বয় করতে কলব্যাক ফাংশন পাস করা হতো। একের ভেতর এক একাধিক কলব্যাক নেস্ট করতে করতে কোড ডানদিকে সরে গিয়ে "কলব্যাক হেল" তৈরি করত, যার ফলে এরর হ্যান্ডলিং ও কোড রক্ষণাবেক্ষণ অসম্ভব হয়ে পড়ত।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// ❌ The Pyramid of Doom (Callback Hell):
function legacyFetchOrder(orderId, callback) {
  setTimeout(() => {
    console.log("Order fetched:", orderId);
    callback(null, { id: orderId, userId: 101 });
  }, 100);
}

// Deeply nested nested nested callbacks:
legacyFetchOrder(501, (err, order) => {
  if (err) return console.error(err);
  // Nested step 2 -> nested step 3 -> nested step 4...
  console.log("Order processing completed for user:", order.userId);
});

// Output:
// Order fetched: 501
// Order processing completed for user: 101`,
      caption: {
        en: 'Nested callbacks invert control and scatter error recovery across multiple indented blocks.',
        bn: 'নেস্টেড কলব্যাক কোডকে জটিল করে তোলে এবং এরর নিয়ন্ত্রণকে ছড়িয়ে ফেলে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Promise Lifecycle: Pending, Fulfilled, and Rejected', bn: '৩. প্রমিজের জীবনচক্র: Pending, Fulfilled ও Rejected' } },
    {
      type: 'para',
      text: {
        en: 'A Promise is an object representing the eventual completion or failure of an asynchronous operation. A Promise exists in one of three mutually exclusive states: Pending (initial waiting state), Fulfilled (operation succeeded with a value), or Rejected (operation failed with a reason/error). Once settled, a promise is permanently locked.',
        bn: 'একটি Promise হলো কোনো অ্যাসিনক্রোনাস কাজের চূড়ান্ত ফলাফল বা ব্যর্থতা প্রকাশের একটি অবজেক্ট। একটি প্রমিজ ঠিক তিনটি অবস্থার যেকোনো একটিতে থাকতে পারে: Pending (অপেক্ষমান প্রাথমিক অবস্থা), Fulfilled (সফলভাবে মানসহ সমাপ্ত) অথবা Rejected (ব্যর্থ বা এরর সহ সমাপ্ত)। একবার নিষ্পত্তি হয়ে গেলে প্রমিজের অবস্থা আর কখনো বদলায় না।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `/*
   Promise State Transitions:
   
   +----------+  resolve(value)  +-----------+
   | PENDING  | ---------------> | FULFILLED |
   +----------+                  +-----------+
        |
        | reject(error)
        v
   +----------+
   | REJECTED |
   +----------+
*/

// Immediate fulfilled promise
const resolvedPromise = Promise.resolve("Data loaded");
resolvedPromise.then(val => console.log("State:", val));

// Immediate rejected promise
const rejectedPromise = Promise.reject(new Error("Network timeout"));
rejectedPromise.catch(err => console.log("Caught:", err.message));

// Output:
// State: Data loaded
// Caught: Network timeout`,
      caption: {
        en: 'Promises transition once from Pending to either Fulfilled or Rejected, permanently.',
        bn: 'প্রমিজ Pending থেকে Fulfilled বা Rejected অবস্থায় স্থায়ীভাবে একবারই রূপান্তরিত হয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Consuming Promises: Flat Chaining with then(), catch(), and finally()', bn: '৪. প্রমিজ ব্যবহার: then(), catch() ও finally() দিয়ে সমতল চেইনিং' } },
    {
      type: 'para',
      text: {
        en: 'Promises eliminate callback nesting through method chaining. .then(onFulfilled) receives the resolved value and returns a new promise; .catch(onRejected) handles any rejection that occurred anywhere in the preceding chain; .finally() runs cleanup code regardless of success or failure.',
        bn: 'প্রমিজ মেথড চেইনিংয়ের মাধ্যমে নেস্টিং দূর করে। .then(onFulfilled) সফল মান গ্রহণ করে এবং নতুন প্রমিজ রিটার্ন করে; .catch(onRejected) পুরো চেইনের যেকোনো স্থানের এরর এক জায়গায় ধরে; আর .finally() সাফল্য বা ব্যর্থতা নির্বিশেষে সবশেষে ক্লিনআপ কোড চালায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `function fetchUserData(userId) {
  return Promise.resolve({ id: userId, username: "Tanvir" });
}

function fetchUserPermissions(user) {
  return Promise.resolve({ ...user, permissions: ["read", "write"] });
}

// Flat, readable Promise Chain:
fetchUserData(101)
  .then(user => {
    console.log("Step 1 - User received:", user.username);
    return fetchUserPermissions(user); // Return inner promise to chain flat
  })
  .then(userWithPerms => {
    console.log("Step 2 - Permissions:", userWithPerms.permissions);
  })
  .catch(err => {
    console.error("Pipeline failure:", err.message);
  })
  .finally(() => {
    console.log("Step 3 - Cleanup: Connection closed");
  });

// Output:
// Step 1 - User received: Tanvir
// Step 2 - Permissions: [ 'read', 'write' ]
// Step 3 - Cleanup: Connection closed`,
      caption: {
        en: 'Returning promises inside .then() handlers produces flat, unindented pipelines.',
        bn: '.then()-এর ভেতর প্রমিজ রিটার্ন করলে কোড ডানদিকে না সরে সমতল লাইনে অগ্রসর হয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Creating Custom Promises: new Promise((resolve, reject) => {})', bn: '৫. কাস্টম প্রমিজ তৈরি: new Promise((resolve, reject) => {})' } },
    {
      type: 'para',
      text: {
        en: 'Custom asynchronous operations are wrapped in promises using the Promise constructor. It takes an executor function with two arguments: resolve(value) to mark completion, and reject(error) to signal failure. Any uncaught exceptions thrown inside the executor function automatically trigger reject().',
        bn: 'Promise কনস্ট্রাক্টর ব্যবহার করে যেকোনো সাধারণ অ্যাসিনক্রোনাস কাজকে প্রমিজে মোড়ানো যায়। এটি দুটি আর্গুমেন্টযুক্ত এক্সিকিউটর ফাংশন নেয়: সফলতার জন্য resolve(value) এবং ব্যর্থতার জন্য reject(error)। এক্সিকিউটরের ভেতরে কোনো এরর থ্রো হলেও তা স্বয়ংক্রিয়ভাবে reject() ডেকে নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Wrapping setTimeout into a modern reusable delay promise
function wait(ms) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new Error("Delay cannot be negative"));
      return;
    }
    setTimeout(() => {
      resolve(\`Waited for \${ms}ms\`);
    }, ms);
  });
}

wait(150)
  .then(msg => console.log("Success:", msg))
  .catch(err => console.error("Error:", err.message));

// Output:
// Success: Waited for 150ms`,
      caption: {
        en: 'The Promise constructor bridges legacy callback APIs into modern promise-based interfaces.',
        bn: 'Promise কনস্ট্রাক্টর পুরোনো কলব্যাক ভিত্তিক কোডকে আধুনিক প্রমিজে রূপান্তর করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Modern Async/Await: Syntactic Sugar for Linear Code', bn: '৬. আধুনিক Async/Await: সরল রৈখিক কোডের মতো অ্যাসিনক্রোনাস' } },
    {
      type: 'para',
      text: {
        en: 'The async and await keywords allow writing asynchronous code that looks and reads like standard synchronous code. Prefixing a function with async guarantees it returns a Promise. The await keyword pauses execution of the async function until the promise settles, unwrapping its resolved value.',
        bn: 'async এবং await কিওয়ার্ড অ্যাসিনক্রোনাস কোডকে সাধারণ সিঙ্ক্রোনাস কোডের মতো সহজ ও সরলরৈখিক করে তোলে। কোনো ফাংশনের আগে async লিখলে তা বাধ্যতামূলকভাবে একটি Promise রিটার্ন করে। আর await কিওয়ার্ড প্রমিজটি সম্পন্ন হওয়া পর্যন্ত অপেক্ষা করে এবং তার মানটি বের করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `function fetchAccountBalance() {
  return Promise.resolve(1250);
}

// An async function always returns a Promise!
async function displayAccountSummary() {
  console.log("Initiating balance inquiry...");
  
  // await pauses here until the promise resolves, then unwraps the value:
  const balance = await fetchAccountBalance();
  
  console.log("Account balance retrieved: $" + balance);
  return balance;
}

displayAccountSummary();

// Output:
// Initiating balance inquiry...
// Account balance retrieved: $1250`,
      caption: {
        en: 'await unwraps resolved promise values without callback indentation.',
        bn: 'await কোনো কলব্যাক বা চেইনিং ছাড়াই সরাসরি প্রমিজের ভেতরের মানটি উদ্ধার করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Robust Error Handling: try...catch...finally with Async/Await', bn: '৭. নির্ভরযোগ্য এরর হ্যান্ডলিং: async/await-এ try...catch...finally' } },
    {
      type: 'para',
      text: {
        en: 'Because async/await pauses execution inline, rejected promises throw exceptions that can be caught using standard try...catch blocks. This unifies synchronous and asynchronous error handling into one consistent language construct.',
        bn: 'async/await কোড সাধারণ কোডের মতো চলায় প্রমিজ ব্যর্থ হলে তা স্বাভাবিক এক্সেপশন থ্রো করে। ফলে সাধারণ try...catch ব্লক ব্যবহার করেই সিঙ্ক্রোনাস ও অ্যাসিনক্রোনাস উভয় ধরনের এরর এক জায়গায় নিখুঁতভাবে ধরা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `function simulateFailingNetwork() {
  return Promise.reject(new Error("503 Service Unavailable"));
}

async function safeApiCaller() {
  let loading = true;
  try {
    console.log("Connecting to cloud gateway...");
    const data = await simulateFailingNetwork();
    return data;
  } catch (error) {
    // Intercepts any rejected promise or runtime error
    console.error("Handled gracefully:", error.message);
    return { fallback: true };
  } finally {
    loading = false;
    console.log("Network operation finished, loading set to:", loading);
  }
}

safeApiCaller();

// Output:
// Connecting to cloud gateway...
// Handled gracefully: 503 Service Unavailable
// Network operation finished, loading set to: false`,
      caption: {
        en: 'try/catch handles both rejected promises and synchronous runtime exceptions identically.',
        bn: 'try/catch প্রমিজের ব্যর্থতা এবং সাধারণ রানটাইম এরর উভয়কেই সুন্দরভাবে সামাল দেয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Parallel Execution: Promise.all() vs Promise.allSettled()', bn: '৮. সমান্তরাল এক্সিকিউশন: Promise.all() বনাম Promise.allSettled()' } },
    {
      type: 'para',
      text: {
        en: 'Running asynchronous requests in series with consecutive awaits slows response times. Promise.all([p1, p2]) runs promises concurrently in parallel, resolving when all succeed, or failing fast if ANY single promise rejects. Promise.allSettled() waits for all promises to finish, returning an array of status objects ({ status: "fulfilled", value } or { status: "rejected", reason }).',
        bn: 'পরপর await লিখে অ্যাসিনক্রোনাস কাজ চালালে সময় বেশি লাগে। Promise.all() সবগুলো কাজকে সমান্তরালে একসাথে চালায়; সবাই সফল হলে মান দেয়, কিন্তু একটিও ব্যর্থ হলে সাথে সাথে রিজেক্ট করে (ফেল-ফাস্ট)। অন্যদিকে Promise.allSettled() সবাই শেষ হওয়া পর্যন্ত অপেক্ষা করে এবং প্রতিটির অবস্থা ({ status: "fulfilled" | "rejected" }) স্পষ্ট জানায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const task1 = Promise.resolve("User profile loaded");
const task2 = Promise.reject(new Error("Notifications unavailable"));
const task3 = Promise.resolve("Cart items loaded");

// 1. Promise.all: Fails fast on the first error!
Promise.all([task1, task3])
  .then(results => console.log("Promise.all success:", results))
  .catch(err => console.error("Promise.all failed:", err.message));

// 2. Promise.allSettled: Resilient inspection of all operations
Promise.allSettled([task1, task2, task3])
  .then(outcomes => {
    outcomes.forEach((outcome, idx) => {
      console.log(\`Task \${idx + 1}: \${outcome.status}\`);
    });
  });

// Output:
// Promise.all success: [ 'User profile loaded', 'Cart items loaded' ]
// Task 1: fulfilled
// Task 2: rejected
// Task 3: fulfilled`,
      caption: {
        en: 'Use Promise.all for all-or-nothing transactions; use Promise.allSettled for resilient UI dashboards.',
        bn: 'সবকিছু সফল হওয়ার শর্তে Promise.all এবং আংশিক ভুলের ক্ষেত্রে Promise.allSettled ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Racing Promises: Promise.race() and Promise.any()', bn: '৯. প্রমিজ রেস: Promise.race() ও Promise.any()' } },
    {
      type: 'para',
      text: {
        en: 'Promise.race(iterable) settles as soon as the FIRST promise settles (whether fulfilled or rejected), making it the standard pattern for network timeouts. Promise.any(iterable) waits for the FIRST FULFILLED promise, ignoring rejections until all fail (which throws an AggregateError).',
        bn: 'Promise.race() যে প্রমিজটি সবার আগে শেষ হয় (সফল বা ব্যর্থ যাই হোক) সাথে সাথে তার ফলাফল নিয়ে নিষ্পত্তি হয়, যা নেটওয়ার্ক টাইমাউট তৈরিতে ব্যবহৃত হয়। আর Promise.any() প্রথম যে প্রমিজটি সফলভাবে fulfilled হয় সেটিকে বেছে নেয় এবং ব্যর্থতাগুলো উপেক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Practical Pattern: Implementing an API Request Timeout
function fetchFastData() {
  return new Promise(resolve => setTimeout(() => resolve("Live Data"), 50));
}

function timeoutGuard(ms) {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Request timed out after " + ms + "ms")), ms);
  });
}

// Promise.race: Whoever settles first wins!
Promise.race([fetchFastData(), timeoutGuard(100)])
  .then(winner => console.log("Race winner:", winner))
  .catch(err => console.error("Race error:", err.message));

// Output:
// Race winner: Live Data`,
      caption: {
        en: 'Promise.race pairs an asynchronous operation against a timeout promise to prevent hanging requests.',
        bn: 'Promise.race কোনো অপারেশনের সাথে টাইমাউট প্রমিজ জুড়ে দিয়ে রিকোয়েস্ট আটকে থাকা বন্ধ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Production Async: The fetch() API and AbortController', bn: '১০. প্রোডাকশন ফেচ: fetch() API ও AbortController' } },
    {
      type: 'para',
      text: {
        en: 'The native fetch() API initiates HTTP network requests and returns a Promise. Crucially, fetch() only rejects on network failures (DNS/offline); it does NOT reject on HTTP 404 or 500 errors. Developers must verify response.ok. AbortController allows canceling ongoing requests when components unmount or search terms change.',
        bn: 'ব্রাউজারের fetch() API নেটওয়ার্ক রিকোয়েস্ট পাঠিয়ে একটি Promise প্রদান করে। অত্যন্ত গুরুত্বপূর্ণ বিষয় হলো, fetch() শুধুমাত্র নেটওয়ার্ক বিচ্ছিন্ন হলে রিজেক্ট হয়; সার্ভার থেকে ৪০৪ বা ৫০০ এরর এলেও এটি রিজেক্ট হয় না! তাই response.ok পরীক্ষা করা বাধ্যতামূলক। AbortController দিয়ে অপ্রয়োজনীয় রিকোয়েস্ট মাঝপথে বাতিল করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `async function fetchSecureApiData(endpointUrl) {
  // Setup AbortController for cancelation
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

  try {
    const response = await fetch(endpointUrl, {
      signal: controller.signal,
      headers: { "Accept": "application/json" }
    });

    // Check HTTP status code (200-299)
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }

    const payload = await response.json();
    console.log("Data payload parsed successfully:", payload);
    return payload;
  } catch (error) {
    if (error.name === "AbortError") {
      console.warn("Fetch operation aborted by client timeout");
    } else {
      console.error("Network communication failure:", error.message);
    }
  } finally {
    clearTimeout(timeoutId);
  }
}

console.log("Fetch architecture ready");
// Output:
// Fetch architecture ready`,
      caption: {
        en: 'Always verify response.ok and link AbortController signals to prevent hanging network requests.',
        bn: 'সর্বদা response.ok পরীক্ষা করুন এবং AbortController দিয়ে নেটওয়ার্ক রিকোয়েস্ট সুরক্ষিত রাখুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'js-async-ex1',
      kind: 'predict',
      topic: 'js: Fetch response.ok check',
      question: {
        en: 'Does a standard window.fetch() call reject its promise when the server responds with a 404 Not Found status code?',
        bn: 'সার্ভার 404 Not Found স্ট্যাটাস কোড পাঠালে সাধারণ window.fetch() কলটি কি তার প্রমিজ রিজেক্ট করে?'
      },
      code: `/* fetch('/api/missing-page') */
/* Server returns HTTP 404 */`,
      answer: 'no',
      accept: ['no', 'false'],
      hint: {
        en: 'fetch only rejects on complete network failures, not on HTTP error status codes.',
        bn: 'fetch শুধুমাত্র নেটওয়ার্ক বিচ্ছিন্ন হলে রিজেক্ট হয়, সার্ভার থেকে কোনো এইচটিটিপি স্ট্যাটাস এলে রিজেক্ট হয় না।'
      },
      explanation: {
        en: 'fetch() only rejects when a network failure occurs (e.g. offline, DNS failure). HTTP 404 and 500 responses resolve successfully, requiring developers to inspect response.ok.',
        bn: 'fetch() কেবল তখনই রিজেক্ট হয় যখন নেটওয়ার্ক সম্পূর্ণ বিচ্ছিন্ন থাকে। ৪০৪ বা ৫০০ এলেও প্রমিজ সফলভাবে resolve হয়, তাই response.ok চেক করা আবশ্যক।'
      }
    },
    {
      id: 'js-async-ex2',
      kind: 'mcq',
      topic: 'js: Promise.all behavior',
      question: {
        en: 'What happens when using Promise.all([p1, p2, p3]) if promise p2 rejects with an error?',
        bn: 'Promise.all([p1, p2, p3]) ব্যবহার করার সময় যদি p2 প্রমিজটি কোনো এরর সহ রিজেক্ট হয়, তবে কী ঘটবে?'
      },
      options: [
        { en: 'The entire Promise.all immediately rejects with p2’s error (Fail-Fast behavior)', bn: 'পুরো Promise.all-টি তাত্ক্ষণিকভাবে p2-এর এরর নিয়ে রিজেক্ট হয়ে যায় (ফেল-ফাস্ট আচরণ)' },
        { en: 'It waits for p1 and p3, then ignores p2', bn: 'এটি p1 ও p3-এর জন্য অপেক্ষা করে এবং p2-কে অগ্রাহ্য করে' },
        { en: 'It returns an array with null in place of p2', bn: 'এটি p2-এর জায়গায় null বসিয়ে অ্যারে দেয়' },
        { en: 'The browser restarts the script', bn: 'ব্রাউজার আবার স্ক্রিপ্ট রিস্টার্ট করে' }
      ],
      answer: 0,
      hint: {
        en: 'Promise.all is an "all-or-nothing" combinator.',
        bn: 'Promise.all হলো "সব মিললে পাস, একটি ব্যর্থ হলে ফেল" নীতিতে চলে।'
      },
      explanation: {
        en: 'Promise.all is fail-fast: if any single promise in the iterable rejects, the whole composite promise immediately rejects with that reason.',
        bn: 'Promise.all ফেল-ফাস্ট পদ্ধতিতে কাজ করে: তালিকার যেকোনো একটি প্রমিজ ব্যর্থ হলেই সম্পূর্ণ অপারেশন সাথে সাথে ব্যর্থ ঘোষিত হয়।'
      }
    },
    {
      id: 'js-async-ex3',
      kind: 'mcq',
      topic: 'js: Async function return value',
      question: {
        en: 'What does a function declared with the async keyword always return, even if you write return 42;?',
        bn: 'একটি async ফাংশনের ভেতরে শুধু return 42; লিখলেও সেটি আসলে কী রিটার্ন করে?'
      },
      options: [
        { en: 'A Promise that resolves to 42', bn: 'একটি Promise যা 42 মান সহ resolve হয়' },
        { en: 'The raw number 42', bn: 'সরাসরি সংখ্যা 42' },
        { en: 'undefined', bn: 'undefined' },
        { en: 'A generator object', bn: 'একটি জেনারেটর অবজেক্ট' }
      ],
      answer: 0,
      hint: {
        en: 'The async keyword guarantees wrapping into a Promise.',
        bn: 'async কিওয়ার্ড রিটার্ন মানকে প্রমিজে মুড়ে ফেলা নিশ্চিত করে।'
      },
      explanation: {
        en: 'Any function declared with async automatically wraps non-promise return values into a resolved Promise (equivalent to Promise.resolve(42)).',
        bn: 'যেকোনো async ফাংশন তার সাধারণ রিটার্ন মানকে স্বয়ংক্রিয়ভাবে একটি প্রমিজের ভেতরে মুড়ে (Promise.resolve(42)) ফেরত দেয়।'
      }
    }
  ],
  quiz: {
    id: 'js-async-quiz',
    title: { en: 'JavaScript Asynchronous Quiz', bn: 'জাভাস্ক্রিপ্ট অ্যাসিনক্রোনাস কুইজ' },
    questions: [
      {
        id: 'asq1',
        kind: 'mcq',
        topic: 'js: Promise.allSettled purpose',
        question: {
          en: 'Why would an engineer choose Promise.allSettled() over Promise.all()?',
          bn: 'কোন কারণে একজন সফটওয়্যার ইঞ্জিনিয়ার Promise.all()-এর বদলে Promise.allSettled() বেছে নেবেন?'
        },
        options: [
          { en: 'To inspect the status of every independent operation without letting a single failure discard successful results', bn: 'একটি ব্যর্থতার কারণে যাতে সফল কাজগুলো বাতিল না হয় এবং প্রতিটি কাজের ফলাফল যাতে স্পষ্ট জানা যায়' },
          { en: 'Because Promise.allSettled runs faster', bn: 'কারণ Promise.allSettled বেশি দ্রুত চলে' },
          { en: 'Because it works without internet connection', bn: 'কারণ এটি ইন্টারনেট ছাড়া চলে' },
          { en: 'It is the only combinator supported in mobile browsers', bn: 'এটি শুধু মোবাইলে চলে' }
        ],
        answer: 0,
        hint: {
          en: 'It settles all promises regardless of success or failure.',
          bn: 'এটি সাফল্য ও ব্যর্থতা নির্বিশেষে সব কাজের অবস্থা তুলে ধরে।'
        },
        explanation: {
          en: 'Promise.allSettled() guarantees that all promises complete, providing an array detailing which succeeded and which failed, perfect for independent dashboard components.',
          bn: 'Promise.allSettled() নিশ্চিত করে যে সব কাজ শেষ হবে এবং কোনটি সফল ও কোনটি ব্যর্থ তা বিস্তারিত জানায়, যা ড্যাশবোর্ড উইজেটে আদর্শ।'
        }
      },
      {
        id: 'asq2',
        kind: 'mcq',
        topic: 'js: AbortController utility',
        question: {
          en: 'What is the role of AbortController when executing network fetch requests?',
          bn: 'নেটওয়ার্ক fetch রিকোয়েস্ট চালানোর সময় AbortController-এর কাজ কী?'
        },
        options: [
          { en: 'It enables programmatic cancellation of in-flight HTTP requests', bn: 'এটি চলমান HTTP রিকোয়েস্ট মাঝপথে বাতিল করার ক্ষমতা দেয়' },
          { en: 'It encrypts passwords in HTTPS headers', bn: 'এটি পাসওয়ার্ড এনক্রিপ্ট করে' },
          { en: 'It doubles download speeds', bn: 'এটি ডাউনলোডের গতি দ্বিগুণ করে' },
          { en: 'It automatically retries failed requests 10 times', bn: 'এটি ব্যর্থ রিকোয়েস্ট ১০ বার রিট্রাই করে' }
        ],
        answer: 0,
        hint: {
          en: 'It aborts running requests.',
          bn: 'এটি চলমান কাজকে অ্যাবর্ট বা বাতিল করে।'
        },
        explanation: {
          en: 'AbortController allows passing an AbortSignal to fetch(), enabling developers to cancel hanging requests or cleanup when a user navigates away.',
          bn: 'AbortController একটি সিগন্যাল পাঠিয়ে চলমান fetch রিকোয়েস্টকে মাঝপথে বাতিল করতে পারে, যা অপ্রয়োজনীয় নেটওয়ার্ক ট্রাফিক বাঁচায়।'
        }
      },
      {
        id: 'asq3',
        kind: 'mcq',
        topic: 'js: Unhandled rejection behavior',
        question: {
          en: 'What occurs when an unhandled rejection happens in modern Node.js or browser environments?',
          bn: 'আধুনিক Node.js বা ব্রাউজারে unhandled promise rejection ঘটলে কী ঘটে?'
        },
        options: [
          { en: 'The environment emits an UnhandledPromiseRejection warning or terminates the process in strict configurations', bn: 'এনভায়রনমেন্ট একটি UnhandledPromiseRejection সতর্কবার্তা দেয় অথবা কঠোর কনফিগারেশনে প্রসেস বন্ধ করে দেয়' },
          { en: 'The promise automatically resolves with null', bn: 'প্রমিজটি স্বয়ংক্রিয়ভাবে null রিটার্ন করে' },
          { en: 'The computer restarts', bn: 'কম্পিউটার রিস্টার্ট হয়' },
          { en: 'It is silently ignored forever', bn: 'এটি চিরতরে নীরবে উপেক্ষা করা হয়' }
        ],
        answer: 0,
        hint: {
          en: 'Modern runtimes flag or terminate on unhandled rejections.',
          bn: 'আধুনিক রানটাইমগুলো unhandled rejection-এ এরর বা সতর্কবার্তা দেয়।'
        },
        explanation: {
          en: 'Unhandled rejections indicate unhandled asynchronous failures; modern Node.js logs warnings and exits with non-zero status unless caught with a rejection handler.',
          bn: 'unhandled rejection হলো এমন এরর যা ধরা হয়নি; ফলে রানটাইম সতর্কবার্তা দিয়ে প্রসেস বন্ধ করে দিতে পারে।'
        }
      },
      {
        id: 'asq4',
        kind: 'mcq',
        topic: 'js: await keyword restriction',
        question: {
          en: 'Why is await only permitted inside async functions in standard JavaScript?',
          bn: 'স্ট্যান্ডার্ড জাভাস্ক্রিপ্টে await শুধুমাত্র async ফাংশনের ভেতরে ব্যবহার করার অনুমতি দেওয়া হয় কেন?'
        },
        options: [
          { en: 'Because await pauses execution within that specific async context, yielding control back to the event loop', bn: 'কারণ await সেই নির্দিষ্ট async কনটেক্সটের কাজ স্থগিত করে নিয়ন্ত্রণ ইভেন্ট লুপের কাছে ছেড়ে দেয়' },
          { en: 'Because synchronous code runs faster with await', bn: 'কারণ সিঙ্ক্রোনাস কোড দ্রুত চালানোর জন্য' },
          { en: 'Because await converts JavaScript to WebAssembly', bn: 'কারণ এটি ওয়েবঅ্যাসেম্বলিতে রূপান্তর করে' },
          { en: 'It is a styling convention with no technical meaning', bn: 'এর কোনো টেকনিক্যাল অর্থ নেই' }
        ],
        answer: 0,
        hint: {
          en: 'It yields control back to the single thread.',
          bn: 'এটি ইভেন্ট লুপের জন্য নিয়ন্ত্রণ উন্মুক্ত রাখে।'
        },
        explanation: {
          en: 'await pauses the enclosing async function and queues the continuation as a microtask, without blocking other tasks on the JavaScript main thread.',
          bn: 'await মেইন থ্রেডকে ব্লক না করে শুধু সেই নির্দিষ্ট async ফাংশনটির কাজ সাময়িক স্থগিত রাখে।'
        }
      }
    ]
  }
};
