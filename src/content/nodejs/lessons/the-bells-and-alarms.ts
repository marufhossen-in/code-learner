import type { Lesson } from '../../../lib/types';

export const TheBellsAndAlarmsLesson: Lesson = {
  slug: 'the-bells-and-alarms',
  tech: 'nodejs',
  title: {
    en: 'EventEmitter and Event-Driven Architecture — Robust Error Handling',
    bn: 'ইভেন্টএমিটার ও ইভেন্ট-চালিত আর্কিটেকচার: নির্ভরযোগ্য এরর হ্যান্ডলিং'
  },
  summary: {
    en: 'At the core of the Node.js reactive runtime sits the EventEmitter pattern, which completely decouples publishers from subscribers. When an event fires via emit(), all registered listener functions execute synchronously in registration order. Critically, the error event possesses unique semantics: emitting an error without an attached listener causes the Node.js process to throw an unhandled exception and terminate. Production architectures differentiate between operational errors (transient timeouts and network partitions handled gracefully with retries) and programmer errors (syntax bugs and null pointer violations requiring immediate process restart). Developers pair EventEmitters with AsyncLocalStorage to propagate request tracing context across asynchronous boundaries without polluting parameter signatures.',
    bn: 'নোড.জেএস রিঅ্যাক্টিভ রানটাইমের কেন্দ্রে রয়েছে EventEmitter প্যাটার্ন, যা পাবলিশার ও সাবস্ক্রাইবারের মধ্যে চমৎকার ডিকাপলিং বজায় রাখে। যখন emit() এর মাধ্যমে ইভেন্ট ডাকা হয়, তখন নিবন্ধিত লিসেনারগুলো নিবন্ধনের ক্রমানুসারে সিঙ্ক্রোনাসভাবে কার্যকর হয়। বিশেষ করে error ইভেন্টের একটি নিজস্ব আচরণ রয়েছে: কোনো লিসেনার ছাড়া error ইভেন্ট পাঠালে পুরো নোড.জেএস প্রসেস তাৎক্ষণিকভাবে ক্র্যাশ করে। প্রোডাকশন আর্কিটেকচারে অপারেশনাল ত্রুটি (সাময়িক টাইমআউট বা নেটওয়ার্ক ড্রপ যা স্বাভাবিকভাবে সামলানো হয়) এবং প্রোগ্রামার ত্রুটির (বাগ বা নাল পয়েন্টার যা প্রসেস রিস্টার্টের দাবি রাখে) মধ্যে সুস্পষ্ট বিভাজন টানা হয়। তাছাড়া ডেভেলপাররা AsyncLocalStorage ব্যবহার করে প্যারামিটার দূষণ ছাড়াই সব অ্যাসিঙ্ক ফাংশনে রিকোয়েস্ট ট্রেসিং ডাটা পৌঁছে দেন।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'the-kitchen-at-scale',
    tech: 'nodejs',
    title: {
      en: 'Node.js at Scale — Cluster, Worker Threads, and Process Management',
      bn: 'স্কেলযোগ্য নোড.জেএস: ক্লাস্টার, ওয়ার্কার থ্রেড এবং প্রসেস ব্যবস্থাপনা'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'eventemitter-core-patterns',
      text: {
        en: 'The Architecture of Node.js EventEmitter',
        bn: 'নোড.জেএস ইভেন্টএমিটারের স্থাপত্যিক রূপরেখা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build distributed event-driven systems in Node.js, the EventEmitter class serves as the fundamental publisher-subscriber backbone. Core primitives such as streams, HTTP servers, and child processes all inherit from EventEmitter.',
        bn: 'যখন আপনি নোড.জেএসে ইভেন্ট-চালিত আর্কিটেকচার তৈরি করেন, তখন EventEmitter ক্লাসটি পাবলিশার-সাবস্ক্রাইবারের মূল মেরুদণ্ড হিসেবে কাজ করে। স্ট্রিম, এইচটিটিপি সার্ভার এবং চাইল্ড প্রসেস এর মতো মৌলিক সিস্টেমগুলো সবই মূলত EventEmitter এর ওপর ভিত্তি করে গঠিত।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Subscribers register listeners using emitter.on() or emitter.once(). When the emitter triggers emitter.emit(eventName, ...args), Node invokes every registered callback function synchronously in strict registration order. If any listener throws an unhandled synchronous error, subsequent listeners in the chain are prevented from running.',
        bn: 'গ্রাহকরা emitter.on() বা emitter.once() দিয়ে তাদের লিসেনার নিবন্ধন করে। যখন emitter.emit(eventName, ...args) ডাকা হয়, তখন নোড নিবন্ধিত প্রতিটি কলব্যাক ফাংশনকে ক্রমানুসারে সম্পূর্ণ সিঙ্ক্রোনাসভাবে চালায়। কোনো একটি লিসেনারে ত্রুটি ঘটলে পরবর্তী লিসেনারগুলো আর চলার সুযোগ পায় না।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'eventemitter',
          def: {
            en: 'A core Node.js class that facilitates asynchronous event dispatching and subscription across application modules.',
            bn: 'নোড.জেএসের একটি মৌলিক ক্লাস যা মডিউলগুলোর মধ্যে ইভেন্ট পাঠানো ও শোনার কাজ পরিচালনা করে।'
          }
        },
        {
          term: 'error-event',
          def: {
            en: 'A unique EventEmitter event that immediately throws an unhandled exception and crashes the process if left unhandled.',
            bn: 'একটি বিশেষ ইভেন্ট যা কোনো লিসেনার না থাকলে তাৎক্ষণিকভাবে এক্সেপশন ছুঁড়ে পুরো প্রসেস ক্র্যাশ করায়।'
          }
        },
        {
          term: 'operational-error',
          def: {
            en: 'A foreseeable runtime environmental failure (such as network disconnects or bad inputs) that applications must handle gracefully.',
            bn: 'একটি অনুমেয় সিস্টেম বা নেটওয়ার্ক ত্রুটি যা অ্যাপ্লিকেশনকে ক্র্যাশ না করিয়ে সুন্দরভাবে সামলাতে হয়।'
          }
        },
        {
          term: 'asynclocalstorage',
          def: {
            en: 'A Node.js utility that preserves request-scoped state and correlation IDs across nested asynchronous callbacks.',
            bn: 'একটি নোড.জেএস ইউটিলিটি যা অ্যাসিঙ্ক্রোনাস কলব্যাকের মধ্য দিয়ে রিকোয়েস্টের ট্রেস আইডি ও কনটেক্সট ডাটা অক্ষুণ্ণ রাখে।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'operational-vs-programmer-errors-table',
      text: {
        en: 'Comparison Matrix: Operational Errors vs Programmer Errors',
        bn: 'তুলনামূলক ম্যাট্রিক্স: অপারেশনাল ত্রুটি বনাম প্রোগ্রামার ত্রুটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A reliable backend requires a clear architectural boundary between expected runtime faults and code defects.',
        bn: 'একটি নির্ভরযোগ্য ব্যাকএন্ড সার্ভারে অনুমেয় পরিবেশগত ত্রুটি এবং কোডের অভ্যন্তরীণ বাগের মধ্যে সুস্পষ্ট পার্থক্য রাখা জরুরি।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Error Classification', bn: 'ত্রুটির ধরন' },
        { en: 'Underlying Root Cause', bn: 'মূল অন্তর্নিহিত কারণ' },
        { en: 'Standard Production Action', bn: 'প্রোডাকশনে গৃহীত পদক্ষেপ' },
        { en: 'Real-World System Example', bn: 'বাস্তব সিস্টেমের উদাহরণ' }
      ],
      rows: [
        [
          { en: 'Operational Error', bn: 'অপারেশনাল ত্রুটি' },
          { en: 'Transient network disconnects, busy sockets, full disk', bn: 'সাময়িক নেটওয়ার্ক সমস্যা, ব্যস্ত সকেট বা পূর্ণ হার্ডডিস্ক' },
          { en: 'Retry with backoff, fall back to cache, return HTTP 503', bn: 'ব্যাকঅফ দিয়ে পুনঃচেষ্টা, ক্যাশ ডাটা প্রদান বা ৫০৩ স্ট্যাটাস' },
          { en: 'Database connection timeout (ETIMEDOUT)', bn: 'ডেটাবেস সংযোগ টাইমআউট (ETIMEDOUT)' }
        ],
        [
          { en: 'Operational Error', bn: 'অপারেশনাল ত্রুটি' },
          { en: 'Malformed JSON payload provided by API consumer', bn: 'ক্লায়েন্টের পাঠানো ত্রুটিপূর্ণ বা অবৈধ JSON ডাটা' },
          { en: 'Reject request early, return HTTP 400 Bad Request', bn: 'রিকোয়েস্ট প্রত্যাখ্যান করে ৪০০ ব্যাড রিকোয়েস্ট ফেরত পাঠানো' },
          { en: 'Validation schema failure on user registration', bn: 'ব্যবহারকারী নিবন্ধনের সময় স্কিমা যাচাইয়ে ব্যর্থতা' }
        ],
        [
          { en: 'Programmer Error', bn: 'প্রোগ্রামার ত্রুটি (বাগ)' },
          { en: 'Syntax defects, unhandled null pointers, logic typos', bn: 'কোডে সিনট্যাক্স ভুল, নাল পয়েন্টার বা লজিক্যাল ত্রুটি' },
          { en: 'Log stack trace, close connections cleanly, restart worker', bn: 'স্ট্যাক ট্রেস লগ করা, সকেট বন্ধ করে প্রসেস রিস্টার্ট করা' },
          { en: 'TypeError: Cannot read property of undefined', bn: 'TypeError: Cannot read property of undefined' }
        ],
        [
          { en: 'Programmer Error', bn: 'প্রোগ্রামার ত্রুটি (বাগ)' },
          { en: 'Violated system invariants and assertion failures', bn: 'সিস্টেমের মৌলিক শর্ত বা অ্যাসারশন লঙ্ঘন' },
          { en: 'Fail fast: abort process immediately via process.exit(1)', bn: 'তৎক্ষণাৎ প্রক্রিয়া বন্ধ করা (process.exit(1))' },
          { en: 'assert(account.balance >= 0) evaluation failure', bn: 'assert(account.balance >= 0) শর্তের ব্যর্থতা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-emitter-and-trace-code',
      text: {
        en: 'Executable EventEmitter Implementation with AsyncLocalStorage Tracing',
        bn: 'AsyncLocalStorage সহ ইভেন্টএমিটারের সম্পূর্ণ বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program creates an EventEmitter, handles error events safely to prevent process crashes, and preserves distributed request IDs using AsyncLocalStorage.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি EventEmitter তৈরি করে, ক্র্যাশ রোধ করতে নিরাপদ error ইভেন্ট হ্যান্ডল করে এবং AsyncLocalStorage দিয়ে ডিস্ট্রিবিউটেড ট্রেসিং আইডি ধরে রাখে।'
      }
    },
    {
      type: 'code',
      code: `import { EventEmitter } from 'node:events';
import { AsyncLocalStorage } from 'node:async_hooks';

const emitter = new EventEmitter();
const storage = new AsyncLocalStorage();

let processedOrders = 0;

emitter.on('order', (orderId) => {
  processedOrders += 1;
  const traceId = storage.getStore();
  console.log('Order processed:', orderId, 'TraceId:', traceId);
});

// Always attach an error listener to prevent process crashes
emitter.on('error', (err) => {
  console.log('Caught emitter error safely:', err.message);
});

storage.run('req-trace-404', () => {
  emitter.emit('order', 88);
  emitter.emit('error', new Error('Simulated socket disconnect'));
});

console.log('Total orders processed =', processedOrders);
// prints: Order processed: 88 TraceId: req-trace-404
// prints: Caught emitter error safely: Simulated socket disconnect
// prints: Total orders processed = 1`
    },
    {
      type: 'heading',
      id: 'handling-uncaught-exceptions',
      text: {
        en: 'Handling uncaughtException and unhandledRejection Correctly',
        bn: 'uncaughtException এবং unhandledRejection এর সঠিক ব্যবস্থাপনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a programmer error escapes all try...catch blocks, Node.js triggers process.on("uncaughtException"). Attempting to resume normal request handling after an uncaught exception is dangerous: memory state, open database transactions, and mutexes are left in an undefined condition. The correct production protocol is to log the error to telemetry, release active resources gracefully, and terminate the process with process.exit(1). A supervisor such as PM2 or Kubernetes will automatically spin up a fresh, pristine worker process in milliseconds.',
        bn: 'যখন কোনো কোড ত্রুটি সব try...catch ব্লক অতিক্রম করে ফেলে, তখন নোড.জেএস process.on("uncaughtException") ইভেন্ট ট্রিগার করে। এমন মারাত্মক ত্রুটির পরও জোর করে সার্ভার চালু রাখার চেষ্টা করা অত্যন্ত বিপজ্জনক: এতে মেমরি, ডেটাবেস ট্রানজ্যাকশন এবং ভ্যারিয়েবলের স্টেট নষ্ট হয়ে অচল অবস্থায় পড়ে থাকে। প্রোডাকশনের সঠিক নিয়ম হলো: ত্রুটির স্ট্যাকট্রেস ক্লাউডে লগ করা, চলমান সংযোগগুলো মার্জিতভাবে বন্ধ করা এবং process.exit(1) দিয়ে প্রক্রিয়াটি বন্ধ করে দেওয়া। পিএম২ (PM2) বা কুবারনেটিসের মতো সুপারভাইজার তাৎক্ষণিকভাবে মাত্র কয়েক মিলিসেকেন্ডে একটি সম্পূর্ণ নতুন ফ্রেশ ওয়ার্কার চালু করে দেবে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Always listen for error: Unhandled error events will crash the entire Node.js runtime process immediately.',
          bn: 'error ইভেন্ট শুনুন: error ইভেন্টে কোনো লিসেনার না থাকলে সম্পূর্ণ নোড.জেএস রানটাইম ক্র্যাশ করবে।'
        },
        {
          en: 'Synchronous execution: By default, emitter.emit() executes all registered listener callbacks synchronously.',
          bn: 'সিঙ্ক্রোনাস কার্যকর: ডিফল্টভাবে emitter.emit() সমস্ত নিবন্ধিত লিসেনারকে সিঙ্ক্রোনাসভাবে চালায়।'
        },
        {
          en: 'Operational vs programmer errors: Catch and retry operational errors; crash, log, and restart on programmer bugs.',
          bn: 'অপারেশনাল বনাম প্রোগ্রামার ত্রুটি: পরিবেশগত ত্রুটি সামলে নিন; কোডের অভ্যন্তরীণ বাগে প্রসেস রিস্টার্ট করুন।'
        },
        {
          en: 'Preserve context with ALS: Use AsyncLocalStorage to track request IDs across asynchronous calls without parameter drilling.',
          bn: 'ALS দিয়ে কনটেক্সট ট্র্যাকিং: প্রতিটি ফাংশনে আর্গুমেন্ট না পাঠিয়েও AsyncLocalStorage দিয়ে রিকোয়েস্ট আইডি ধরে রাখুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ba-ex1',
      kind: 'mcq',
      topic: 'unhandled-error-event-crash',
      question: {
        en: 'What unique runtime behavior occurs in Node.js when an EventEmitter emits an "error" event, but no listener has been registered for "error"?',
        bn: 'নোড.জেএসে কোনো EventEmitter যখন একটি "error" ইভেন্ট নির্গত করে কিন্তু "error" এর জন্য কোনো লিসেনার থাকে না, তখন কী ঘটে?'
      },
      options: [
        {
          en: 'Node.js throws an unhandled exception, prints the stack trace, and crashes the entire process by design',
          bn: 'নোড.জেএস একটি আনহ্যান্ডল্ড এক্সেপশন ছুঁড়ে স্ট্যাক ট্রেস প্রিন্ট করে এবং নিয়মমাফিক সম্পূর্ণ প্রসেস ক্র্যাশ করায়'
        },
        {
          en: 'Node.js ignores the error and writes it to a secret hidden file',
          bn: 'নোড.জেএস ত্রুটিটি উপেক্ষা করে একটি গোপন ফাইলে লিখে রাখে'
        },
        {
          en: 'The computer sound card plays a loud alarm sound',
          bn: 'কম্পিউটারের সাউন্ড কার্ডে উচ্চ শব্দে একটি এলার্ম বেজে ওঠে'
        },
        {
          en: 'The event is automatically redirected to Google Search',
          bn: 'ইভেন্টটি স্বয়ংক্রিয়ভাবে গুগল সার্চে পাঠিয়ে দেওয়া হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The "error" event is treated specially in Node.js. An unhandled error event is treated as an uncaught exception.',
        bn: 'নোড.জেএসে "error" ইভেন্ট বিশেষ মর্যাদাপ্রাপ্ত। লিসেনার না থাকলে এটি মারাত্মক এক্সেপশন হিসেবে বিবেচিত হয়।'
      },
      explanation: {
        en: 'Unlike all other events, emitting unhandled error events triggers an immediate fatal exception, crashing the Node process.',
        bn: 'অন্যান্য সাধারণ ইভেন্টের মতো না হয়ে, unhandled "error" ইভেন্ট সরাসরি মারাত্মক এক্সেপশন ঘটিয়ে নোড প্রসেস বন্ধ করে দেয়।'
      }
    },
    {
      id: 'ba-ex2',
      kind: 'mcq',
      topic: 'operational-vs-programmer-fault',
      question: {
        en: 'Why should a Node.js server terminate with process.exit(1) on programmer errors (like uncaught exceptions) rather than continuing to serve traffic?',
        bn: 'কোডের অভ্যন্তরীণ বাগে (যেমন uncaught exceptions) সার্ভার চালু না রেখে কেন process.exit(1) দিয়ে বন্ধ করা উচিত?'
      },
      options: [
        {
          en: 'Because an unhandled programmer bug leaves the in-memory state corrupted, making subsequent responses unpredictable and untrustworthy',
          bn: 'কারণ কোডের অপ্রত্যাশিত বাগে মেমরির অভ্যন্তরীণ স্টেট নষ্ট হয়ে যায়, যার ফলে পরবর্তী সব রিকোয়েস্টের ফলাফল ভুল হওয়ার ঝুঁকি থাকে'
        },
        {
          en: 'Because the JavaScript programming language has a 5-minute lifespan',
          bn: 'কারণ জাভাস্ক্রিপ্ট প্রোগ্রামিং ভাষার জীবনকাল মাত্র ৫ মিনিট'
        },
        {
          en: 'Because operating systems prohibit processes from running after 6 PM',
          bn: 'কারণ অপারেটিং সিস্টেম সন্ধ্যা ৬টার পর কোনো প্রোগ্রাম চলতে দেয় না'
        },
        {
          en: 'Because exiting automatically upgrades the server CPU hardware',
          bn: 'কারণ প্রসেস বন্ধ করলে স্বয়ংক্রিয়ভাবে সিপিইউ হার্ডওয়্যার আপগ্রেড হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If a database transaction was left half-finished or variables corrupted, can you trust the server to handle the next customer payment?',
        bn: 'ভেরিয়েবল বা ট্রানজ্যাকশন মাঝপথে নষ্ট অবস্থায় থাকলে কি পরবর্তী গ্রাহকের পেমেন্ট নিরাপদ রাখা সম্ভব?'
      },
      explanation: {
        en: 'Resuming after an unknown bug leaves the process in an undefined, corrupted state. Clean exit and supervisor restart ensures reliability.',
        bn: 'অপ্রত্যাশিত বাগে মেমরি কলুষিত হয়। প্রসেস বন্ধ করে সুপারভাইজার দিয়ে নতুন ফ্রেশ ওয়ার্কার চালু করাই প্রোডাকশনের স্ট্যান্ডার্ড।'
      }
    },
    {
      id: 'ba-ex3',
      kind: 'mcq',
      topic: 'asynclocalstorage-purpose',
      question: {
        en: 'What architectural problem does Node.js AsyncLocalStorage solve in production web microservices?',
        bn: 'প্রোডাকশন ওয়েব মাইক্রোসার্ভিসে নোড.জেএস AsyncLocalStorage মূলত কোন স্থাপত্যিক সমস্যার সমাধান করে?'
      },
      options: [
        {
          en: 'It preserves and propagates request context (such as correlation IDs and auth tokens) across deeply nested asynchronous calls without manual parameter passing',
          bn: 'এটি প্রতিটি ফাংশনে ম্যানুয়ালি আর্গুমেন্ট পাঠানো ছাড়াই জটিল অ্যাসিঙ্ক ফাংশনগুলোর মধ্য দিয়ে রিকোয়েস্ট ট্রেস আইডি ও কনটেক্সট ডাটা অক্ষুণ্ণ রাখে'
        },
        {
          en: 'It stores files on the computer hard drive at zero cost',
          bn: 'এটি কম্পিউটারের হার্ডড্রাইভে সম্পূর্ণ বিনামূল্যে ফাইল সংরক্ষণ করে'
        },
        {
          en: 'It makes Node.js single-threaded applications run on 1000 computers simultaneously',
          bn: 'এটি সিঙ্গেল থ্রেডের নোড অ্যাপ্লিকেশনকে একসাথে ১০০০ কম্পিউটারে চালায়'
        },
        {
          en: 'It removes all CSS styles from incoming HTTP requests',
          bn: 'এটি ইনকামিং এইচটিটিপি রিকোয়েস্ট থেকে সমস্ত সিএসএস স্টাইল মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think of ThreadLocal storage in multi-threaded languages. AsyncLocalStorage brings request-scoped context to Node’s async event loop.',
        bn: 'মাল্টি-থ্রেডেড ভাষার ThreadLocal এর মতো, এটি নোডের অ্যাসিঙ্ক ইভেন্ট লুপে প্রতিটি রিকোয়েস্টের আলাদা তথ্য ধরে রাখে।'
      },
      explanation: {
        en: 'AsyncLocalStorage stores data that remains accessible throughout the lifecycle of an asynchronous execution chain.',
        bn: 'AsyncLocalStorage এমন ডাটা ধারণ করে যা সম্পূর্ণ অ্যাসিঙ্ক এক্সিকিউশন চেইনের যেকোনো স্তর থেকে সহজে রিড করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-bells-and-alarms-quiz',
    title: {
      en: 'EventEmitter and Error Handling Quiz',
      bn: 'ইভেন্টএমিটার ও এরর হ্যান্ডলিং কুইজ'
    },
    questions: [
      {
        id: 'ba-q1',
        kind: 'mcq',
        topic: 'emit-execution-synchronicity',
        question: {
          en: 'When emitter.emit("message", data) is called, are the registered listener callbacks executed synchronously or asynchronously by default?',
          bn: 'যখন emitter.emit("message", data) ডাকা হয়, তখন নিবন্ধিত লিসেনারগুলো ডিফল্টভাবে কীভাবে কার্যকর হয়?'
        },
        options: [
          {
            en: 'Synchronously: All registered listeners are invoked one after another on the current execution thread before emit() returns',
            bn: 'সিঙ্ক্রোনাসভাবে: emit() শেষ হওয়ার আগেই চলতি থ্রেডে একের পর এক সমস্ত নিবন্ধিত লিসেনার কার্যকর হয়'
          },
          {
            en: 'Asynchronously after a guaranteed 5-second delay',
            bn: 'অ্যাসিঙ্ক্রোনাসভাবে নিশ্চিত ৫ সেকেন্ড বিলম্বের পর'
          },
          {
            en: 'In a separate thread on a remote cloud server',
            bn: 'একটি দূরবর্তী ক্লাউড সার্ভারের সম্পূর্ণ আলাদা থ্রেডে'
          },
          {
            en: 'Only when the server reboots next morning',
            bn: 'পরের দিন সকালে সার্ভার রিবুট করার সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Many beginners assume emit() schedules tasks on the event loop, but EventEmitter callbacks are synchronous function calls.',
          bn: 'অনেকে ভাবেন emit() বুঝি ইভেন্ট লুপে কাজ পাঠায়, কিন্তু প্রকৃতপক্ষে লিসেনারগুলো সাধারণ সিঙ্ক্রোনাস ফাংশন হিসেবে সাথে সাথে চলে।'
        },
        explanation: {
          en: 'EventEmitter executes its listeners synchronously in the order they were registered, guaranteeing predictable flow control.',
          bn: 'EventEmitter তার লিসেনারগুলোকে নিবন্ধনের ক্রমানুসারে সম্পূর্ণ সিঙ্ক্রোনাসভাবে চালায়, যা কাজের ধারাবাহিকতা নিশ্চিত করে।'
        }
      },
      {
        id: 'ba-q2',
        kind: 'mcq',
        topic: 'max-listeners-exceeded-warning',
        question: {
          en: 'What causes Node.js to print the "MaxListenersExceededWarning: Possible EventEmitter memory leak detected" message?',
          bn: 'নোড.জেএসে "MaxListenersExceededWarning: Possible EventEmitter memory leak detected" সতর্কবার্তাটি কেন প্রদর্শিত হয়?'
        },
        options: [
          {
            en: 'More than 10 listeners (the default threshold) were attached to a single event without cleaning up disposed listeners',
            bn: 'পুরনো লিসেনার না মুছে একটি একক ইভেন্টে ১০টির বেশি লিসেনার (ডিফল্ট সীমা) যুক্ত করার কারণে'
          },
          {
            en: 'The server ran out of physical hard drive storage space',
            bn: 'সার্ভারের ফিজিক্যাল হার্ডডিস্কের ফাঁকা জায়গা শেষ হয়ে যাওয়ার কারণে'
          },
          {
            en: 'The application was deployed on a Linux operating system',
            bn: 'অ্যাপ্লিকেশনটি একটি লিনাক্স অপারেটিং সিস্টেমে ডিপ্লয় করার কারণে'
          },
          {
            en: 'More than 10 HTTP requests were received in a week',
            bn: 'এক সপ্তাহে ১০টির বেশি এইচটিটিপি রিকোয়েস্ট আসার কারণে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The default threshold is 10 listeners per event to alert developers of accidental memory leaks from uncleaned event subscriptions.',
          bn: 'মেমরি লিক সতর্কতার জন্য ইভেন্ট প্রতি সর্বোচ্চ ১০টি লিসেনারের ডিফল্ট সীমা নির্ধারণ করা থাকে।'
        },
        explanation: {
          en: 'Node warns when an emitter has more than 10 listeners to help developers spot forgotten event handlers that cause memory leaks.',
          bn: 'একটি ইভেন্টে ১০টির বেশি লিসেনার পরিষ্কার না করে ক্রমাগত যুক্ত করলে মেমরি লিক রোধের জন্য নোড এই সতর্কবার্তা দেয়।'
        }
      },
      {
        id: 'ba-q3',
        kind: 'mcq',
        topic: 'once-method-semantics',
        question: {
          en: 'How does the emitter.once(eventName, listener) method differ from emitter.on(eventName, listener)?',
          bn: 'emitter.once(eventName, listener) মেথডটি emitter.on(eventName, listener) থেকে কীভাবে আলাদা?'
        },
        options: [
          {
            en: 'The listener registered with once() executes at most one time: upon invocation, it is automatically unregistered',
            bn: 'once() দিয়ে নিবন্ধিত লিসেনারটি সর্বোচ্চ একবার চলে: প্রথমবার চলার পরপরই এটি নিজে থেকে মুছে যায়'
          },
          {
            en: 'once() deletes the JavaScript code file from disk after execution',
            bn: 'once() চলার পর ডিস্ক থেকে জাভাস্ক্রিপ্ট ফাইলটি মুছে ফেলে'
          },
          {
            en: 'once() can only be called on January 1st of each year',
            bn: 'once() কেবলমাত্র প্রতি বছর ১লা জানুয়ারিতে ডাকা যায়'
          },
          {
            en: 'once() is slower because it runs on an encrypted satellite connection',
            bn: 'once() ধীরগতির কারণ এটি এনক্রিপ্টেড স্যাটেলাইট সংযোগে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Useful for one-off lifecycle events, such as waiting for a database to connect or a server to start listening.',
          bn: 'শুধুমাত্র একবার ঘটা কোনো ইভেন্টের ক্ষেত্রে (যেমন সার্ভার চালু হওয়া) এটি অত্যন্ত সুবিধাজনক।'
        },
        explanation: {
          en: 'once() wraps the listener in an internal function that detaches itself immediately after its first invocation.',
          bn: 'once() লিসেনারকে এমনভাবে ঘিরে রাখে যাতে প্রথমবার চালনার পরই তা তালিকা থেকে নিজে থেকে অপসারিত হয়।'
        }
      },
      {
        id: 'ba-q4',
        kind: 'mcq',
        topic: 'unhandled-rejection-lifecycle',
        question: {
          en: 'What occurs in modern Node.js versions (v15+) when a Promise rejects and there is no .catch() handler attached?',
          bn: 'আধুনিক নোড.জেএস সংস্করণে (v15+) কোনো প্রমিজ রিজেক্ট হলে এবং কোনো .catch() না থাকলে কী ঘটে?'
        },
        options: [
          {
            en: 'The unhandled rejection is treated as an unhandled exception, terminating the Node.js process with a non-zero exit code',
            bn: 'রিজেকশনটিকে মারাত্মক এক্সেপশন হিসেবে গণ্য করা হয় এবং নন-জিরো এক্সিট কোড দিয়ে নোড.জেএস প্রসেস বন্ধ করে দেওয়া হয়'
          },
          {
            en: 'The computer restarts into safe mode automatically',
            bn: 'কম্পিউটার স্বয়ংক্রিয়ভাবে সেফ মোডে রিস্টার্ট হয়'
          },
          {
            en: 'The rejected promise is converted into an empty string',
            bn: 'রিজেক্টেড প্রমিজটিকে একটি খালি স্ট্রিংয়ে রূপান্তর করা হয়'
          },
          {
            en: 'Nothing happens and the rejection is completely forgotten',
            bn: 'কিছুই ঘটে না এবং রিজেকশনটি পুরোপুরি বিস্মৃত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Earlier Node versions printed a deprecation warning, but modern Node terminates the process to prevent unhandled silent failures.',
          bn: 'পুরনো নোডে কেবল সতর্কতা দেওয়া হতো, কিন্তু আধুনিক নোডে নীরব ব্যর্থতা ঠেকাতে প্রসেস সরাসরি বন্ধ করা হয়।'
        },
        explanation: {
          en: 'Starting with Node.js 15, unhandled promise rejections terminate the process with exit code 1 to enforce strict error handling.',
          bn: 'নোড ১৫ থেকে কঠোর নিয়ম চালু হয়েছে: হ্যান্ডল না করা প্রমিজ রিজেকশন সাথে সাথে ১ এক্সিট কোড দিয়ে প্রক্রিয়া শেষ করে।'
        }
      }
    ]
  }
};
