import type { Lesson } from '../../../lib/types';

export const eventedBackboneLesson: Lesson = {
  slug: 'the-evented-backbone',
  tech: 'node',
  title: {
    en: 'EventEmitter, Custom Events, Memory Leaks & Event-Driven Architecture',
    bn: 'EventEmitter, কাস্টম ইভেন্ট, মেমরি লিক ও ইভেন্ট-চালিত আর্কিটেকচার'
  },
  summary: {
    en: 'Master event-driven programming in Node.js across 10 structured topics, from the EventEmitter base class to production pipelines. Learn listener registration with on(), error handling traps, and promisifying events with events.once().',
    bn: 'EventEmitter বেস ক্লাস থেকে শুরু করে প্রোডাকশন পাইপলাইন পর্যন্ত 10 টি বিষয়ে Node.js ইভেন্ট-চালিত আর্কিটেকচার আয়ত্ত করুন। জানুন on() দিয়ে লিসেনার রেজিস্ট্রেশন, আনহ্যান্ডেল্ড এরর বিপদ এবং events.once() দিয়ে প্রমিজ সংযোগ।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-production-ledger',
    title: {
      en: 'The Production Ledger: Clustering, Process Management, Health Checks & PM2',
      bn: 'প্রোডাকশন লেজার: ক্লাস্টারিং, প্রসেস ম্যানেজমেন্ট, হেলথ চেক ও PM2'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Event-Driven Foundation: What is EventEmitter?', bn: '১. ইভেন্ট-চালিত ভিত্তি: EventEmitter কী?' } },
    {
      type: 'para',
      text: {
        en: 'At the core of Node.js lies an event-driven architecture that powers your server applications. Crucial built-in modules—including HTTP servers, TCP sockets, and readable/writable streams—inherit from the EventEmitter class provided by the native "events" module. Objects emit named events that cause previously registered function listeners to be called.',
        bn: 'Node.js-এর কেন্দ্রস্থলে রয়েছে ইভেন্ট-চালিত আর্কিটেকচার যা আপনার সার্ভার অ্যাপ্লিকেশনগুলোকে চালনা করে। HTTP সার্ভার, TCP সকেট এবং ফাইল স্ট্রিমসহ প্রায় সব অভ্যন্তরীণ মডিউল নেটিভ "events" মডিউলের EventEmitter ক্লাস থেকে তৈরি। কোনো অবজেক্ট নির্দিষ্ট নামের ইভেন্ট প্রকাশ (emit) করলে তার সাথে যুক্ত লিসেনার ফাংশনগুলো সক্রিয় হয়ে ওঠে।'
      }
    },
    {
      type: 'visual',
      id: 'node'
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import { EventEmitter } from "events";

const emitter = new EventEmitter();

// Register a listener for the "greet" event:
emitter.on("greet", (name) => {
  console.log(\`Hello, \${name}! Welcome to Node.js.\`);
});

// Trigger the event:
emitter.emit("greet", "Tanvir");

// Output:
// Hello, Tanvir! Welcome to Node.js.`,
      caption: {
        en: 'EventEmitter registers listener callbacks and invokes them when named events are emitted.',
        bn: 'EventEmitter লিসেনার ফাংশন রেজিস্টার করে এবং নির্দিষ্ট ইভেন্ট ট্রিগার হলে তা কার্যকর করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Registering and Triggering Events with on() and emit()', bn: '২. on() ও emit() দিয়ে ইভেন্ট হ্যান্ডলিং' } },
    {
      type: 'para',
      text: {
        en: 'The emitter.on(eventName, listener) method appends a callback function to the internal listener array for that event. You can pass multiple arbitrary arguments when calling emitter.emit(eventName, ...args). When triggered, all listeners registered for that event are invoked with those exact arguments.',
        bn: 'emitter.on(eventName, listener) মেথড নির্দিষ্ট ইভেন্টের জন্য একটি কলব্যাক ফাংশন যুক্ত করে। emitter.emit(eventName, ...args) ডাকার সময় যেকোনো সংখ্যক আর্গুমেন্ট পাঠানো যায়। ইভেন্ট ঘটার সাথে সাথে ওই ইভেন্টের সাথে যুক্ত সব লিসেনার পাঠানো আর্গুমেন্টগুলো গ্রহণ করে এক্সিকিউট হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const orderSystem = new EventEmitter();

orderSystem.on("orderPlaced", (orderId, amount, customerEmail) => {
  console.log(\`[Order #\${orderId}] Confirmed for $\${amount}\`);
  console.log(\`[Email Alert] Receipt sent to \${customerEmail}\`);
});

orderSystem.emit("orderPlaced", 1042, 89.5, "user@example.com");

// Output:
// [Order #1042] Confirmed for $89.5
// [Email Alert] Receipt sent to user@example.com`,
      caption: {
        en: 'Multiple parameters can be passed from the emit call directly into the listener functions.',
        bn: 'emit কলের মাধ্যমে সরাসরি লিসেনার ফাংশনগুলোতে একাধিক প্যারামিটার পাঠানো যায়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. One-Time Execution with once()', bn: '৩. once() দিয়ে এককালীন ইভেন্ট লিসেনার' } },
    {
      type: 'para',
      text: {
        en: 'When a listener should only respond to an event the very first time it fires (such as server initialization or a connection handshake), use emitter.once(). After being invoked once, the listener automatically unregisters itself from the listener queue, eliminating potential memory leaks.',
        bn: 'কোনো ইভেন্ট যখন শুধুমাত্র প্রথমবার কার্যকর হওয়া দরকার (যেমন ডাটাবেস সংযোগ স্থাপন বা সার্ভার চালু হওয়া), তখন emitter.once() ব্যবহার করা হয়। একবার এক্সিকিউট হওয়ার পর লিসেনারটি নিজে থেকেই কিউ থেকে অপসারিত হয়, যা মেমরি লিক রোধ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const server = new EventEmitter();

// Executes once and automatically unsubscribes:
server.once("init", () => {
  console.log("Server initialized successfully! (Will not run again)");
});

server.emit("init");
server.emit("init"); // Ignored!

// Output:
// Server initialized successfully! (Will not run again)`,
      caption: {
        en: 'emitter.once automatically unregisters the listener immediately after its first invocation.',
        bn: 'emitter.once প্রথমবার চলার সাথে সাথেই লিসেনারটিকে স্বয়ংক্রিয়ভাবে মুছে ফেলে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Synchronous Execution Nature: Order & Call Stack', bn: '৪. সিঙ্ক্রোনাস এক্সিকিউশন: লিসেনারের ক্রম ও স্ট্যাক' } },
    {
      type: 'para',
      text: {
        en: 'A common misconception is that EventEmitter is asynchronous. In reality, emitter.emit() executes all registered listeners SYNCHRONOUSLY in the exact order they were registered. If a listener contains a heavy synchronous calculation or throws an unhandled exception, it directly blocks or crashes the calling stack.',
        bn: 'অনেকে ভুলবশত মনে করেন EventEmitter বুঝি অ্যাসিনক্রোনাস। প্রকৃতপক্ষে emitter.emit() এর সাথে যুক্ত সব লিসেনারকে সিঙ্ক্রোনাসভাবে (ধারাবাহিকভাবে) একই স্ট্যাকে চালায়। কোনো লিসেনারে ভারী ক্যালকুলেশন থাকলে তা পুরো থ্রেড আটকে দেয় এবং কোনো এরর ক্যাচ না করলে অ্যাপ্লিকেশন ক্র্যাশ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const emitter = new EventEmitter();

emitter.on("step", () => console.log("First listener executed"));
emitter.on("step", () => console.log("Second listener executed"));

console.log("Before emit");
emitter.emit("step");
console.log("After emit");

// Output:
// Before emit
// First listener executed
// Second listener executed
// After emit`,
      caption: {
        en: 'Listeners are called synchronously in registration sequence before emit() completes.',
        bn: 'emit() শেষ হওয়ার আগেই নিবন্ধিত ক্রম অনুযায়ী লিসেনারগুলো সিঙ্ক্রোনাসভাবে চলে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The Special "error" Event: Crash Custody', bn: '৫. বিশেষ "error" ইভেন্ট ও অ্যাপ ক্র্যাশ' } },
    {
      type: 'para',
      text: {
        en: 'The string "error" holds special privilege in Node.js. If an EventEmitter emits an "error" event and has NO listeners registered for it, Node.js treats it as an unhandled exception, prints the stack trace, and crashes the entire process. Always attach an error listener to production emitters.',
        bn: 'Node.js-এ "error" ইভেন্টের জন্য বিশেষ নিয়ম রয়েছে। কোনো এমিটার যদি "error" ইভেন্ট প্রকাশ করে এবং তার জন্য কোনো লিসেনার না থাকে, তবে Node.js পুরো প্রসেসটিকে ক্র্যাশ করিয়ে বের হয়ে যায়। তাই প্রোডাকশনে প্রতিটি এমিটারে সর্বদা এরর লিসেনার যুক্ত করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const stream = new EventEmitter();

// If this error listener is missing, the next line crashes the process!
stream.on("error", (err) => {
  console.error("Gracefully captured error:", err.message);
});

stream.emit("error", new Error("Disk full: write operation aborted"));

// Output:
// Gracefully captured error: Disk full: write operation aborted`,
      caption: {
        en: 'Always attach an error listener to avoid unhandled exception process crashes.',
        bn: 'প্রসেস ক্র্যাশ ঠেকাতে সর্বদা "error" ইভেন্টে লিসেনার যুক্ত করে রাখা আবশ্যক।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Listener Management: off() and removeAllListeners()', bn: '৬. লিসেনার ম্যানেজমেন্ট: off() ও removeAllListeners()' } },
    {
      type: 'para',
      text: {
        en: 'To prevent memory leaks, always remove listeners when long-lived objects are done listening. Use emitter.off(eventName, listener) (alias of removeListener) passing the identical function reference. Use emitter.removeAllListeners(eventName) to remove all listeners registered for an event.',
        bn: 'মেমরি লিক এড়াতে কাজ শেষ হলে অপ্রয়োজনীয় লিসেনারগুলো মুছে ফেলা জরুরি। emitter.off(eventName, listener) দিয়ে নির্দিষ্ট ফাংশন রেফারেন্স সরিয়ে দেওয়া যায়। আবার emitter.removeAllListeners(eventName) দিয়ে নির্দিষ্ট ইভেন্টের সব লিসেনার একসাথে সাফ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const emitter = new EventEmitter();

function handlePing() {
  console.log("Ping received!");
}

emitter.on("ping", handlePing);
emitter.emit("ping"); // "Ping received!"

// Unsubscribe using function reference:
emitter.off("ping", handlePing);
emitter.emit("ping"); // (Nothing printed! Listener removed)`,
      caption: {
        en: 'emitter.off requires the exact same function reference that was originally registered.',
        bn: 'emitter.off ব্যবহারের জন্য নিবন্ধনের সময় ব্যবহৃত একই ফাংশন রেফারেন্স দিতে হয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Memory Leaks & setMaxListeners() Mechanics', bn: '৭. মেমরি লিক ও setMaxListeners() মেকানিজম' } },
    {
      type: 'para',
      text: {
        en: 'By default, if more than 10 listeners are added to a single event on an EventEmitter, Node.js prints a MaxListenersExceededWarning to stderr. This is a built-in safety safeguard designed to detect memory leaks (such as adding handlers inside per-request callbacks). You can adjust this threshold using setMaxListeners(limit).',
        bn: 'ডিফল্টভাবে কোনো একক ইভেন্টে ১০টির বেশি লিসেনার যুক্ত করলে Node.js একটি MaxListenersExceededWarning সতর্কতা প্রিন্ট করে। এটি মেমরি লিক শনাক্ত করার জন্য একটি অত্যন্ত দরকারি সেফটি ফিচার। বিশেষ প্রয়োজনে emitter.setMaxListeners(সংখ্যা) দিয়ে এই লিমিট বাড়ানো বা কমানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const bus = new EventEmitter();

// Default listener limit is 10:
console.log("Default max listeners:", bus.getMaxListeners()); // 10

// Increase threshold for legitimate high-fanout broadcast buses:
bus.setMaxListeners(25);
console.log("Updated max listeners:", bus.getMaxListeners()); // 25
console.log("Current listener count:", bus.listenerCount("update")); // 0`,
      caption: {
        en: 'The 10-listener default limit protects applications from undetected listener leaks.',
        bn: '১০টি লিসেনারের ডিফল্ট লিমিট অ্যাপ্লিকেশনকে মেমরি লিক হওয়া থেকে সতর্ক করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Promisifying Events: events.once() & Async Iterators', bn: '৮. প্রমিজিফাইং ইভেন্ট: events.once() ও অ্যাসিঙ্ক ইটারেটর' } },
    {
      type: 'para',
      text: {
        en: 'Modern async/await code can interface with EventEmitter using the events.once(emitter, eventName) helper. It returns a Promise that resolves when the event is emitted, allowing clean synchronous-looking asynchronous code. Furthermore, EventEmitter instances can be consumed asynchronously via for await (... of on(emitter, eventName)).',
        bn: 'আধুনিক async/await কোডে events.once(emitter, eventName) ফাংশনটি ব্যবহারের মাধ্যমে ইভেন্টকে প্রমিজে রূপান্তর করা যায়। এটি নির্দিষ্ট ইভেন্ট না ঘটা পর্যন্ত অপেক্ষা করে এবং রেজাল্ট রিটার্ন করে। এছাড়া for await (... of on(emitter, eventName)) দিয়ে ইভেন্টগুলোকে অ্যাসিঙ্ক লুপে হ্যান্ডল করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import { EventEmitter, once } from "events";

const downloadJob = new EventEmitter();

async function waitForCompletion() {
  setTimeout(() => downloadJob.emit("complete", { bytes: 4096 }), 20);
  
  // Await the next emission of "complete" event cleanly:
  const [result] = await once(downloadJob, "complete");
  console.log("Job finished! Downloaded bytes:", result.bytes);
}

await waitForCompletion();
// Output: Job finished! Downloaded bytes: 4096`,
      caption: {
        en: 'events.once bridges legacy event systems into modern Promise and async/await syntax.',
        bn: 'events.once পুরনো ইভেন্ট সিস্টেমকে আধুনিক Promise ও async/await সিনট্যাক্সে রূপান্তর করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Extending EventEmitter in Custom Domain Services', bn: '৯. কাস্টম ডোমেইন সার্ভিসে EventEmitter এক্সটেন্ড করা' } },
    {
      type: 'para',
      text: {
        en: 'In production backend architectures, custom domain classes extend EventEmitter to publish business lifecycle events. This decouples the primary business logic from secondary side effects like sending verification emails, auditing, or pushing metrics.',
        bn: 'প্রোডাকশন ব্যাকএন্ড সার্ভিসে নিজস্ব ক্লাসগুলোতে EventEmitter এক্সটেন্ড করা হয়। এর ফলে মূল ব্যবসায়িক লজিকের সাথে গৌণ কাজগুলো (যেমন ইমেইল পাঠানো, লগ রাখা বা অ্যানালিটিক্স পাঠানো) আলাদা রাখা যায়, ফলে কোড অনেক পরিচ্ছন্ন ও টেস্টযোগ্য হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `class UserService extends EventEmitter {
  async registerUser(email, name) {
    // 1. Perform database insertion:
    const user = { id: 101, email, name };
    console.log("User persisted to database:", user.email);

    // 2. Emit lifecycle event for observers:
    this.emit("userCreated", user);
    return user;
  }
}

const service = new UserService();

// Side-effect listener:
service.on("userCreated", (user) => {
  console.log(\`Sending welcome email to: \${user.email}\`);
});

await service.registerUser("user@codeshikhon.com", "Sabbir");
// Output:
// User persisted to database: user@codeshikhon.com
// Sending welcome email to: user@codeshikhon.com`,
      caption: {
        en: 'Extending EventEmitter allows domain classes to broadcast domain events cleanly.',
        bn: 'EventEmitter এক্সটেন্ড করে ডোমেইন ক্লাসগুলো সাইড-ইফেক্ট থেকে মুক্ত রেখে ইভেন্ট ছড়াতে পারে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Decoupled Architecture & Production Event Hubs', bn: '১০. ডিকাপল্ড আর্কিটেকচার ও প্রোডাকশন ইভেন্ট হাব' } },
    {
      type: 'para',
      text: {
        en: 'EventEmitter provides in-memory publish-subscribe within a single Node.js process. When designing event-driven systems, ensure events remain idempotent (able to be received repeatedly without damage), avoid circular event emissions. And remember that EventEmitter cannot pass events across different processes or servers without message brokers (like Redis, RabbitMQ, or Kafka).',
        bn: 'EventEmitter একটিমাত্র Node.js প্রসেসের ভেতর মেমোরি-ভিত্তিক পাবলিশ-সাবস্ক্রাইব সুবিধা দেয়। ইভেন্ট-চালিত সিস্টেমে খেয়াল রাখতে হবে যেন কোনো ইভেন্ট চক্রাকারে বারবার না চলে (circular event) এবং এটি একাধিক প্রসেস বা আলাদা সার্ভারের মধ্যে সরাসরি কাজ করে না (তার জন্য Redis বা RabbitMQ-এর মতো ব্রোকার লাগে)।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Process-level event hub pattern:
const eventHub = new EventEmitter();

// Audit logger subscriber:
eventHub.on("audit:log", (action, metadata) => {
  console.log(\`[AUDIT] Action: \${action} | Timestamp: \${new Date().toISOString()}\`);
});

eventHub.emit("audit:log", "USER_PASSWORD_RESET", { userId: 442 });
// Output:
// [AUDIT] Action: USER_PASSWORD_RESET | Timestamp: 2026-09-26T...`,
      caption: {
        en: 'A centralized in-memory event hub simplifies application-wide event monitoring.',
        bn: 'একটি কেন্দ্রীয় ইভেন্ট হাব অ্যাপ্লিকেশনের সব মডিউলের ইভেন্ট সহজে পর্যবেক্ষণ করতে সাহায্য করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'nod-eve-ex1',
      kind: 'predict',
      topic: 'node: register one-time listener',
      question: {
        en: 'Which EventEmitter method registers a listener that automatically removes itself after firing for the first time?',
        bn: 'EventEmitter-এর কোন মেথডটি এমন একটি লিসেনার যুক্ত করে যা প্রথমবার কার্যকর হওয়ার পর নিজে থেকেই মুছে যায়?'
      },
      code: `/* Registering a one-time event handler */
/* emitter.____________("serverReady", () => { console.log("Ready"); }); */`,
      answer: 'once',
      accept: ['once', 'emitter.once'],
      hint: {
        en: 'Executes once only.',
        bn: 'শুধুমাত্র একবার চলে।'
      },
      explanation: {
        en: 'emitter.once() adds a one-time listener that unregisters itself immediately after its first execution.',
        bn: 'emitter.once() এমন একটি লিসেনার যোগ করে যা প্রথমবার চলার পর সাথে সাথে মুছে যায়।'
      }
    },
    {
      id: 'nod-eve-ex2',
      kind: 'mcq',
      topic: 'node: unhandled error event crash',
      question: {
        en: 'What happens in Node.js when an EventEmitter emits the "error" event and NO listener is attached to handle it?',
        bn: 'Node.js-এ কোনো EventEmitter যদি "error" ইভেন্ট প্রকাশ করে এবং তা হ্যান্ডল করার মতো কোনো লিসেনার না থাকে, তবে কী ঘটবে?'
      },
      options: [
        { en: 'Node.js throws an unhandled exception, prints the stack trace, and crashes the process', bn: 'Node.js একটি আনহ্যান্ডেল্ড এক্সেপশন তৈরি করে স্ট্যাক ট্রেস প্রিন্ট করে পুরো প্রসেস ক্র্যাশ করিয়ে দেয়' },
        { en: 'The error is silently ignored and forgotten', bn: 'এররটি নীরবে অগ্রাহ্য করা হয়' },
        { en: 'The error is automatically emailed to the admin', bn: 'এররটি স্বয়ংক্রিয়ভাবে অ্যাডমিনকে ইমেইল করা হয়' },
        { en: 'Node.js converts the error into a warning message', bn: 'Node.js এররটিকে ওয়ার্নিংয়ে রূপান্তর করে' }
      ],
      answer: 0,
      hint: {
        en: 'Unhandled error crashes the Node.js process.',
        bn: 'আনহ্যান্ডেল্ড এরর প্রসেস ক্র্যাশ করায়।'
      },
      explanation: {
        en: 'If an EventEmitter emits an "error" event without any listeners, Node.js throws an unhandled error and terminates the process.',
        bn: '"error" ইভেন্টে কোনো লিসেনার না থাকলে Node.js প্রসেস বন্ধ করে বের হয়ে যায়।'
      }
    },
    {
      id: 'nod-eve-ex3',
      kind: 'mcq',
      topic: 'node: default max listeners',
      question: {
        en: 'What is the default limit of listeners on a single EventEmitter event before Node.js emits a MaxListenersExceededWarning memory leak warning?',
        bn: 'একটি ইভেন্টে কয়টির বেশি লিসেনার যুক্ত করলে মেমরি লিকের সম্ভাব্য সতর্কতা হিসেবে Node.js MaxListenersExceededWarning দেয়?'
      },
      options: [
        { en: '10 listeners', bn: '১০টি লিসেনার' },
        { en: '1 listener', bn: '১টি লিসেনার' },
        { en: '100 listeners', bn: '১০০টি লিসেনার' },
        { en: 'Unlimited (never warns)', bn: 'সীমাহীন (কখনো ওয়ার্ন করে না)' }
      ],
      answer: 0,
      hint: {
        en: 'Ten listeners by default.',
        bn: 'ডিফল্টভাবে দশটি লিসেনার।'
      },
      explanation: {
        en: 'The default threshold is 10 listeners per event to help developers catch accidental memory leaks early.',
        bn: 'মেমরি লিক এড়াতে ডিফল্টভাবে প্রতি ইভেন্টে সর্বোচ্চ ১০টি লিসেনারের পর সতর্কবার্তা দেওয়া হয়।'
      }
    }
  ],
  quiz: {
    id: 'nod-eve-quiz',
    title: { en: 'Node.js EventEmitter & Event-Driven Architecture Quiz', bn: 'Node.js EventEmitter ও ইভেন্ট-চালিত আর্কিটেকচার কুইজ' },
    questions: [
      {
        id: 'neq1',
        kind: 'mcq',
        topic: 'node: emit execution synchronicity',
        question: {
          en: 'How does EventEmitter execute its registered listeners when emitter.emit() is called?',
          bn: 'emitter.emit() কল করা হলে এটি নিবন্ধিত লিসেনারগুলোকে কীভাবে এক্সিকিউট করে?'
        },
        options: [
          { en: 'Synchronously on the current call stack in the order they were registered', bn: 'নিবন্ধিত ক্রম অনুসারে বর্তমান কল স্ট্যাকে সিঙ্ক্রোনাসভাবে' },
          { en: 'Asynchronously in separate background threads via libuv', bn: 'libuv-এর মাধ্যমে আলাদা ব্যাকগ্রাউন্ড থ্রেডে অ্যাসিনক্রোনাসভাবে' },
          { en: 'In reverse order after a 1-second timeout', bn: '1 সেকেন্ড বিরতি দিয়ে উল্টো ক্রমে' },
          { en: 'Randomly on future ticks of the event loop', bn: 'ইভেন্ট লুপের পরবর্তী টিকগুলোতে যেকোনো ক্রমে' }
        ],
        answer: 0,
        hint: {
          en: 'Synchronously in registration order.',
          bn: 'নিবন্ধিত ক্রমানুসারে সিঙ্ক্রোনাসভাবে।'
        },
        explanation: {
          en: 'emitter.emit() iterates through the listener array synchronously, calling each handler one by one on the same thread.',
          bn: 'emitter.emit() লিসেনার অ্যারে ধরে একই থ্রেডে পরপর সিঙ্ক্রোনাসভাবে সবগুলো ফাংশন কল করে।'
        }
      },
      {
        id: 'neq2',
        kind: 'mcq',
        topic: 'node: promisifying events',
        question: {
          en: 'Which function from the native "events" module converts an event emission into a Promise for use with async/await?',
          bn: 'নেটিভ "events" মডিউলের কোন ফাংশনটি async/await দিয়ে ব্যবহারের জন্য একটি ইভেন্টকে প্রমিজে রূপান্তর করে?'
        },
        options: [
          { en: 'events.once(emitter, eventName)', bn: 'events.once(emitter, eventName)' },
          { en: 'events.promisifyAll()', bn: 'events.promisifyAll()' },
          { en: 'events.await()', bn: 'events.await()' },
          { en: 'emitter.toPromise()', bn: 'emitter.toPromise()' }
        ],
        answer: 0,
        hint: {
          en: 'events.once returns a Promise.',
          bn: 'events.once একটি প্রমিজ দেয়।'
        },
        explanation: {
          en: 'events.once(emitter, eventName) creates a Promise that resolves when the specified event is emitted.',
          bn: 'events.once(emitter, eventName) একটি প্রমিজ তৈরি করে যা ইভেন্টটি ঘটার সাথে সাথেই রেজলভ হয়।'
        }
      },
      {
        id: 'neq3',
        kind: 'mcq',
        topic: 'node: unhandled error event crash',
        question: {
          en: 'What occurs when an EventEmitter instance emits an "error" event with zero registered error listeners?',
          bn: 'একটি EventEmitter ইনস্ট্যান্স কোনো এরর লিসেনার ছাড়া "error" ইভেন্ট প্রকাশ করলে কী ঘটে?'
        },
        options: [
          { en: 'Node.js throws an unhandled error, prints the stack trace to stderr, and immediately crashes the process with non-zero exit code', bn: 'Node.js একটি আনহ্যান্ডেল্ড এরর ছুড়ে দেয়, স্ট্যাক ট্রেস প্রিন্ট করে এবং পুরো প্রসেস তাৎক্ষণিক ক্র্যাশ করে' },
          { en: 'The error is logged to console and silently swallowed', bn: 'এররটি কনসোলে লগ হয় কিন্তু প্রসেস চলতে থাকে' },
          { en: 'Node.js restarts the server automatically', bn: 'Node.js স্বয়ংক্রিয়ভাবে সার্ভার রিস্টার্ট করে' },
          { en: 'It forwards the error to the client browser', bn: 'ক্লায়েন্ট ব্রাউজারে এরর পাঠিয়ে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Fatal unhandled exception and crash.',
          bn: 'মারাত্মক আনহ্যান্ডেল্ড এক্সেপশন ও ক্র্যাশ।'
        },
        explanation: {
          en: 'If an EventEmitter emits "error" with no listeners, Node.js treats it as an uncaught exception, which terminates the runtime process.',
          bn: 'লিসেনার ছাড়া "error" ইভেন্ট ঘটলে Node.js সেটিকে আনহ্যান্ডেল্ড এক্সেপশন ধরে সাথে সাথে প্রসেস বন্ধ করে দেয়।'
        }
      },
      {
        id: 'neq4',
        kind: 'mcq',
        topic: 'node: max listeners memory leak warning',
        question: {
          en: 'Why does Node.js print a MaxListenersExceededWarning when more than 10 listeners are attached to a single event?',
          bn: 'একটি ইভেন্টে ১০টির বেশি লিসেনার যুক্ত হলে Node.js কেন MaxListenersExceededWarning সতর্কতা প্রিন্ট করে?'
        },
        options: [
          { en: 'To alert developers to potential memory leaks where listeners are added repeatedly in loops without being cleaned up', bn: 'মেমরি লিক শনাক্ত করতে, যা লুপে বা বারবার লিসেনার যোগ করে কিন্তু রিমুভ না করার কারণে সৃষ্টি হয়' },
          { en: 'Because JavaScript arrays cannot hold more than 10 functions', bn: 'কারণ জাভাস্ক্রিপ্ট অ্যারে ১০টির বেশি ফাংশন রাখতে পারে না' },
          { en: 'To enforce a hardware thread limit', bn: 'হার্ডওয়্যার থ্রেড সীমা প্রয়োগ করতে' },
          { en: 'Because TCP connections max out at 10', bn: 'টিসিপি সংযোগ ১০টিতে সীমাবদ্ধ বলে' }
        ],
        answer: 0,
        hint: {
          en: 'Heuristic warning for memory leaks.',
          bn: 'মেমরি লিকের সম্ভাব্য সতর্কতা।'
        },
        explanation: {
          en: 'The default limit of 10 listeners is a safeguard to help identify memory leaks where handlers accumulate indefinitely without unbinding.',
          bn: '১০টি লিসেনারের ডিফল্ট সীমা রাখা হয়েছে যাতে ডেভেলপাররা অসাবধানতাবশত মেমরি লিক তৈরি করলে দ্রুত সতর্কবার্তা পায়।'
        }
      }
    ]
  }
};
