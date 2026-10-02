import type { Lesson } from '../../../lib/types';

export const TheKitchenThatNeverBlocksLesson: Lesson = {
  slug: 'the-kitchen-that-never-blocks',
  tech: 'nodejs',
  title: {
    en: 'Node.js Architecture — Event Loop, V8, and Asynchronous I/O',
    bn: 'নোড.জেএস আর্কিটেকচার: ইভেন্ট লুপ, V8 এবং অ্যাসিঙ্ক্রোনাস I/O'
  },
  summary: {
    en: 'When you start learning server-side JavaScript, Node.js represents a fundamental departure from traditional multi-threaded server architectures like Apache or Tomcat. Instead of spawning an operating system thread per client connection, Node.js uses a single-threaded event-driven architecture powered by Google Chrome’s V8 JavaScript engine and the libuv C library. While the main thread executes JavaScript synchronously, non-blocking asynchronous I/O operations are delegated directly to the operating system kernel. CPU-intensive operations and blocking file tasks are offloaded to libuv’s internal thread pool of 4 worker threads, enabling millions of concurrent connections with minimal memory overhead.',
    bn: 'সার্ভার-সাইড জাভাস্ক্রিপ্ট শেখার শুরুতে নোড.জেএস (Node.js) ঐতিহ্যবাহী মাল্টি-থ্রেডেড সার্ভার কাঠামো (যেমন অ্যাপাচি) থেকে সম্পূর্ণ ভিন্ন একটি ধারণার পরিচয় দেয়। প্রতিটি ক্লায়েন্টের জন্য আলাদা আলাদা থ্রেড তৈরি না করে নোড.জেএস গুগল ক্রোমের V8 ইঞ্জিন এবং libuv সি লাইব্রেরির সাহায্যে একটি একক-থ্রেডেড ইভেন্ট-চালিত আর্কিটেকচার পরিচালনা করে। মূল থ্রেডটি যখন জাভাস্ক্রিপ্ট কোড চালায়, তখন নেটওয়ার্ক ও ফাইল I/O কাজগুলো অপারেটিং সিস্টেম কার্নেল এবং libuv এর ৪টি থ্রেডের পুলে অর্পণ করা হয়, যার ফলে অত্যন্ত কম মেমরি খরচে একসাথে হাজার হাজার ক্লায়েন্ট রিকোয়েস্ট পরিচালনা করা সম্ভব হয়।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'the-pantry-and-its-labels',
    tech: 'nodejs',
    title: {
      en: 'Node.js Modules — CommonJS, ESM, and Package Management',
      bn: 'নোড.জেএস মডিউল: কমনজেএস, ইএসএম এবং প্যাকেজ ব্যবস্থাপনা'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'v8-and-libuv-runtime',
      text: {
        en: 'The Runtime Foundation: V8 and libuv Integration',
        bn: 'রানটাইম ভিত্তি: V8 এবং libuv লাইব্রেরির সংযোগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you start building backend servers with JavaScript, Node.js allows you to execute code outside the browser without web browser APIs. Created by Ryan Dahl in 2009, Node.js combines Google’s high-performance V8 engine with the libuv C library to handle asynchronous I/O.',
        bn: 'যখন আপনি জাভাস্ক্রিপ্ট দিয়ে ব্যাকএন্ড সার্ভার তৈরি শুরু করেন, তখন নোড.জেএস ব্রাউজারের বাইরে কোড চালানোর পূর্ণ স্বাধীনতা দেয়। ২০০৯ সালে রায়ান ডাহল কর্তৃক উদ্ভাবিত নোড.জেএস গুগলের উচ্চগতির V8 ইঞ্জিন এবং libuv সি লাইব্রেরিকে একত্রিত করে অ্যাসিঙ্ক্রোনাস ইনপুট-আউটপুট পরিচালনা করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While JavaScript itself is single-threaded with a single call stack, Node.js is multi-threaded under the hood. Asynchronous network requests are dispatched directly to OS kernel polling mechanisms like epoll on Linux, kqueue on macOS, and IOCP on Windows. Blocking system tasks are handled by libuv’s internal worker thread pool, which defaults to 4 background threads.',
        bn: 'জাভাস্ক্রিপ্ট নিজে একটি একক কল স্ট্যাকের মাধ্যমে একক-থ্রেডে চললেও নোড.জেএস ভেতরে ভেতরে মাল্টি-থ্রেডেড সুবিধা ব্যবহার করে। অ্যাসিঙ্ক্রোনাস নেটওয়ার্ক রিকোয়েস্টগুলো অপারেটিং সিস্টেমের কার্নেলে (লিনাক্সে epoll, ম্যাকওএসে kqueue, উইন্ডোজে IOCP) পাঠিয়ে দেওয়া হয়। আর ব্লকিং ফাইল কাজগুলো libuv এর অভ্যন্তরীণ থ্রেড পুলে পরিচালিত হয়, যার ডিফল্ট আকার ৪টি ব্যাকগ্রাউন্ড থ্রেড।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'v8-engine',
          def: {
            en: 'Google’s open-source C++ JavaScript engine that compiles JavaScript into native machine code using just-in-time (JIT) compilation.',
            bn: 'গুগলের সি++ জাভাস্ক্রিপ্ট ইঞ্জিন যা জেআইটি (JIT) কম্পাইলেশনের মাধ্যমে জাভাস্ক্রিপ্টকে সরাসরি মেশিন কোডে রূপান্তর করে।'
          }
        },
        {
          term: 'libuv-library',
          def: {
            en: 'A multi-platform C library providing the event loop, asynchronous I/O polling, and a background worker thread pool.',
            bn: 'একটি মাল্টি-প্ল্যাটফর্ম সি লাইব্রেরি যা ইভেন্ট লুপ, অ্যাসিঙ্ক্রোনাস আই/ও পোলিং এবং ব্যাকগ্রাউন্ড থ্রেড পুল পরিচালনা করে।'
          }
        },
        {
          term: 'event-loop',
          def: {
            en: 'The single-threaded coordination loop in Node.js that processes callbacks across phases (Timers, Poll, Check).',
            bn: 'নোড.জেএস-এর একক-থ্রেডেড সমন্বয় লুপ যা বিভিন্ন ধাপে (টাইমার, পোল, চেক) কলব্যাকগুলো পরিচালনা করে।'
          }
        },
        {
          term: 'thread-pool',
          def: {
            en: 'A pool of background worker threads in libuv (default size 4) handling blocking operations like crypto and file I/O.',
            bn: 'libuv এর একটি ব্যাকগ্রাউন্ড থ্রেড পুল (ডিফল্ট আকার ৪) যা ক্রিপ্টোগ্রাফি ও ফাইল সিস্টেমের মতো ব্লকিং কাজগুলো সম্পন্ন করে।'
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
      id: 'multi-threaded-vs-node-table',
      text: {
        en: 'Architectural Comparison: Multi-Threaded Model vs Node.js Event Loop',
        bn: 'কাঠামোগত তুলনা: মাল্টি-থ্রেডেড মডেল বনাম নোড.জেএস ইভেন্ট লুপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The architectural contrast between thread-per-connection servers and Node.js explains why Node.js excels at high-concurrency I/O applications.',
        bn: 'প্রতি কানেকশনে আলাদা থ্রেড তৈরি করা সার্ভার এবং নোড.জেএসের কাঠামোগত পার্থক্য ব্যাখ্যা করে কেন নোড.জেএস উচ্চ ট্রাফিকের আই/ও কাজে অত্যন্ত দক্ষ।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architecture Aspect', bn: 'স্থাপত্যিক দিক' },
        { en: 'Traditional Multi-Threaded Model', bn: 'ঐতিহ্যবাহী মাল্টি-থ্রেডেড মডেল' },
        { en: 'Node.js Event Loop Model', bn: 'নোড.জেএস ইভেন্ট লুপ মডেল' }
      ],
      rows: [
        [
          { en: 'Concurrency Mechanism', bn: 'কনকারেন্সি কৌশল' },
          { en: 'Allocates 1 OS thread per client connection', bn: 'প্রতিটি সংযোগের জন্য ১টি করে ওএস থ্রেড তৈরি করে' },
          { en: 'Single main thread handling asynchronous events', bn: 'একক মূল থ্রেড যা অ্যাসিঙ্ক্রোনাস ইভেন্ট পরিচালনা করে' }
        ],
        [
          { en: 'Memory Overhead', bn: 'মেমরির খরচ' },
          { en: 'High: each thread reserves 1 MB to 2 MB of stack RAM', bn: 'বেশি: প্রতি থ্রেডে ১ থেকে ২ মেগাবাইট স্ট্যাক র‍্যাম লাগে' },
          { en: 'Minimal: single call stack with lightweight callbacks', bn: 'খুবই কম: একক কল স্ট্যাক ও হালকা কলব্যাক অবজেক্ট' }
        ],
        [
          { en: 'I/O Waiting Behavior', bn: 'আই/ও অপেক্ষার আচরণ' },
          { en: 'Threads block synchronously while waiting for disks or network', bn: 'ডিস্ক বা নেটওয়ার্কের জন্য থ্রেডগুলো অলস বসে অপেক্ষা করে' },
          { en: 'Non-blocking I/O delegates work to the kernel and continues', bn: 'কার্নেলে কাজ পাঠিয়ে থ্রেড অন্য রিকোয়েস্ট প্রসেস করতে থাকে' }
        ],
        [
          { en: 'Ideal Application Workload', bn: 'আদর্শ কাজের ক্ষেত্র' },
          { en: 'Heavy CPU-bound computations and scientific modeling', bn: 'ভারী সিপিইউ গণনা এবং বৈজ্ঞানিক সিমুলেশন' },
          { en: 'I/O-intensive real-time APIs, chat apps, and streaming servers', bn: 'আই/ও নির্ভর রিয়েল-টাইম এপিআই, চ্যাট অ্যাপ ও স্ট্রিমিং' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-event-loop-code',
      text: {
        en: 'Executable Event Loop Execution Order Trace',
        bn: 'ইভেন্ট লুপ ও মাইক্রোটাস্ক এক্সিকিউশন অর্ডারের বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how Node.js orders execution across synchronous code, microtasks (process.nextTick and Promise), timers, and setImmediate callbacks.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি প্রদর্শন করে কীভাবে নোড.জেএস সিঙ্ক্রোনাস কোড, মাইক্রোটাস্ক (process.nextTick এবং Promise), টাইমার এবং setImmediate কলব্যাকের এক্সিকিউশন ক্রম নির্ধারণ করে।'
      }
    },
    {
      type: 'code',
      code: `console.log('1: Synchronous start');

setTimeout(() => {
  console.log('4: setTimeout (Timers phase)');
}, 0);

setImmediate(() => {
  console.log('5: setImmediate (Check phase)');
});

Promise.resolve().then(() => {
  console.log('3: Promise microtask');
});

process.nextTick(() => {
  console.log('2: process.nextTick microtask');
});

console.log('1b: Synchronous end');

// Output: 1: Synchronous start
// Output: 1b: Synchronous end
// Output: 2: process.nextTick microtask
// Output: 3: Promise microtask
// Output: 4: setTimeout (Timers phase)
// Output: 5: setImmediate (Check phase)`
    },
    {
      type: 'heading',
      id: 'blocking-the-event-loop',
      text: {
        en: 'The Cardinal Rule: Don’t Block the Event Loop',
        bn: 'মৌলিক নিয়ম: ইভেন্ট লুপ কখনো ব্লক করবেন না'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because Node.js executes JavaScript on a single thread, any heavy synchronous operation completely freezes the server. Executing massive loops, parsing 100 MB JSON files with JSON.parse, or running catastrophic regular expressions blocks the call stack, preventing all other users from being served. To maintain responsiveness, developers offload CPU-heavy computation to Worker Threads or break long operations using setImmediate.',
        bn: 'যেহেতু নোড.জেএস একটিমাত্র থ্রেডে জাভাস্ক্রিপ্ট চালায়, তাই যেকোনো ভারী সিঙ্ক্রোনাস অপারেশন পুরো সার্ভারকে সাময়িক স্থবির করে দেয়। বিশাল লুপ চালানো, ১০০ মেগাবাইটের JSON ফাইল পার্স করা বা জটিল রেগুলার এক্সপ্রেশন চালানো কল স্ট্যাককে আটকে ফেলে, যার ফলে অন্য কোনো ব্যবহারকারী সার্ভিস পায় না। সিস্টেমকে সচল রাখতে ডেভেলপাররা ভারী কাজ ওয়ার্কার থ্রেডে (Worker Threads) পাঠান অথবা setImmediate দিয়ে ধাপে ধাপে সম্পন্ন করেন।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'V8 and libuv separation: V8 compiles and runs JavaScript code; libuv provides the event loop, non-blocking I/O, and thread pool.',
          bn: 'V8 ও libuv এর ভূমিকা: V8 জাভাস্ক্রিপ্ট কোড চালায়; আর libuv ইভেন্ট লুপ, অ্যাসিঙ্ক্রোনাস আই/ও এবং থ্রেড পুল পরিচালনা করে।'
        },
        {
          en: 'Microtask priority: process.nextTick and Promise callbacks drain immediately before the event loop advances to its next phase.',
          bn: 'মাইক্রোটাস্কের অগ্রাধিকার: ইভেন্ট লুপের পরবর্তী ধাপে যাওয়ার আগেই process.nextTick এবং প্রমিজের কাজগুলো অগ্রাধিকার ভিত্তিতে শেষ হয়।'
        },
        {
          en: 'Worker thread pool: Libuv uses 4 background worker threads by default for file system I/O, crypto, and DNS lookups.',
          bn: 'ওয়ার্কার থ্রেড পুল: ফাইল সিস্টেম, ক্রিপ্টোগ্রাফি এবং ডিএনএস কাজের জন্য libuv ডিফল্টভাবে ৪টি ব্যাকগ্রাউন্ড থ্রেড ব্যবহার করে।'
        },
        {
          en: 'Never block the event loop: Avoid synchronous CPU-heavy functions on the main thread to maintain high concurrency.',
          bn: 'ইভেন্ট লুপ আটকাবেন না: মূল থ্রেডে ভারী সিঙ্ক্রোনাস কাজ এড়িয়ে চলুন যাতে সব ব্যবহারকারী দ্রুত প্রতিক্রিয়া পায়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'knb-ex1',
      kind: 'mcq',
      topic: 'v8-vs-libuv-responsibility',
      question: {
        en: 'In the Node.js runtime architecture, what is the primary role of the libuv library?',
        bn: 'নোড.জেএস রানটাইম আর্কিটেকচারে libuv লাইব্রেরির মূল দায়িত্ব কী?'
      },
      options: [
        {
          en: 'It provides the cross-platform event loop, manages asynchronous I/O with the OS kernel, and maintains the worker thread pool',
          bn: 'এটি মাল্টি-প্ল্যাটফর্ম ইভেন্ট লুপ পরিচালনা করে, ওএস কার্নেলের সাথে অ্যাসিঙ্ক্রোনাস আই/ও সমন্বয় করে এবং ওয়ার্কার থ্রেড পুল চালায়'
        },
        {
          en: 'It renders HTML and CSS inside the server terminal',
          bn: 'এটি সার্ভার টার্মিনালের ভেতর এইচটিএমএল এবং সিএসএস রেন্ডার করে'
        },
        {
          en: 'It compiles TypeScript files into Python code',
          bn: 'এটি টাইপস্ক্রিপ্ট ফাইলগুলোকে পাইথন কোডে রূপান্তর করে'
        },
        {
          en: 'It connects the computer directly to power lines',
          bn: 'এটি কম্পিউটারকে সরাসরি বিদ্যুতের তারের সাথে যুক্ত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'V8 executes JavaScript code. What library handles the event loop and background I/O?',
        bn: 'V8 জাভাস্ক্রিপ্ট কোড চালায়। কোন লাইব্রেরি ইভেন্ট লুপ এবং ব্যাকগ্রাউন্ড আই/ও পরিচালনা করে?'
      },
      explanation: {
        en: 'libuv is the multi-platform C library responsible for non-blocking I/O polling, timers, and the 4-thread worker pool in Node.js.',
        bn: 'libuv হলো সি লাইব্রেরি যা নোড.জেএসে নন-ব্লকিং আই/ও পোলিং, টাইমার এবং ৪টি থ্রেডের ওয়ার্কার পুল পরিচালনা করে।'
      }
    },
    {
      id: 'knb-ex2',
      kind: 'mcq',
      topic: 'microtask-execution-order',
      question: {
        en: 'Between process.nextTick() callbacks and standard setTimeout(fn, 0) callbacks, which executes first?',
        bn: 'process.nextTick() কলব্যাক এবং সাধারণ setTimeout(fn, 0) কলব্যাকের মধ্যে কোনটি আগে কার্যকর হয়?'
      },
      options: [
        {
          en: 'process.nextTick() executes first because microtasks drain immediately before the event loop transitions between phases',
          bn: 'process.nextTick() আগে কার্যকর হয় কারণ ইভেন্ট লুপের নতুন ধাপে যাওয়ার আগেই সমস্ত মাইক্রোটাস্ক সম্পন্ন হয়'
        },
        {
          en: 'setTimeout executes first because timers have the highest operating system priority',
          bn: 'setTimeout আগে চলে কারণ ওএসে টাইমারের অগ্রাধিকার সর্বোচ্চ'
        },
        {
          en: 'They execute simultaneously on two different CPU cores',
          bn: 'তারা দুটি ভিন্ন সিপিইউ কোরে একসাথে পরিচালিত হয়'
        },
        {
          en: 'The execution order is completely random on every run',
          bn: 'প্রতিবার চালনার সময় এদের ক্রম সম্পূর্ণ এলোমেলো থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Microtask queues drain immediately after the current JavaScript operation completes, before the Timers phase runs.',
        bn: 'চলতি জাভাস্ক্রিপ্ট অপারেশন শেষ হওয়ার সাথে সাথেই মাইক্রোটাস্ক কিউ ফাঁকা করা হয়, টাইমার ধাপ শুরু হওয়ার আগেই।'
      },
      explanation: {
        en: 'process.nextTick is part of the microtask queue, which is evaluated immediately after the current call stack clears.',
        bn: 'process.nextTick মাইক্রোটাস্কের অংশ, যা কল স্ট্যাক খালি হওয়ামাত্র টাইমার কলব্যাকের পূর্বেই কার্যকর হয়।'
      }
    },
    {
      id: 'knb-ex3',
      kind: 'mcq',
      topic: 'default-threadpool-size',
      question: {
        en: 'What is the default number of worker threads in libuv’s thread pool, and how can it be reconfigured?',
        bn: 'libuv এর থ্রেড পুলে ডিফল্টভাবে কতটি ওয়ার্কার থ্রেড থাকে এবং এটি কীভাবে পরিবর্তন করা যায়?'
      },
      options: [
        {
          en: 'Default is 4 threads, configurable by setting the UV_THREADPOOL_SIZE environment variable before starting Node.js',
          bn: 'ডিফল্ট হলো ৪টি থ্রেড, যা নোড.জেএস চালুর পূর্বে UV_THREADPOOL_SIZE এনভায়রনমেন্ট ভ্যারিয়েবলের মাধ্যমে পরিবর্তন করা যায়'
        },
        {
          en: 'Default is 100 threads, hardcoded into the CPU chip',
          bn: 'ডিফল্ট হলো ১০০টি থ্রেড, যা সিপিইউ চিপের ভেতর স্থায়ীভাবে নির্ধারণ করা থাকে'
        },
        {
          en: 'Default is 0 threads, Node.js never uses threads',
          bn: 'ডিফল্ট হলো ০টি থ্রেড, নোড.জেএস কখনোই কোনো থ্রেড ব্যবহার করে না'
        },
        {
          en: 'Default is 1000 threads for every megabyte of RAM',
          bn: 'প্রতি মেগাবাইট র‍্যামের জন্য ডিফল্ট ১০০০টি থ্রেড'
        }
      ],
      answer: 0,
      hint: {
        en: 'libuv sets a conservative default of 4 worker threads for operations like crypto.pbkdf2 and fs calls.',
        bn: 'ক্রিপ্টোগ্রাফি এবং ফাইল সিস্টেম কাজের জন্য libuv ডিফল্টভাবে ৪টি ওয়ার্কার থ্রেড বরাদ্দ রাখে।'
      },
      explanation: {
        en: 'The default thread pool size is 4. Applications performing heavy crypto or compression can increase it up to 1024.',
        bn: 'ডিফল্ট থ্রেড পুলের আকার ৪। ভারী ক্রিপ্টোগ্রাফির ক্ষেত্রে UV_THREADPOOL_SIZE দিয়ে এটি ১০২৪ পর্যন্ত বাড়ানো যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-kitchen-that-never-blocks-quiz',
    title: {
      en: 'Node.js Architecture and Event Loop Quiz',
      bn: 'নোড.জেএস আর্কিটেকচার এবং ইভেন্ট লুপ কুইজ'
    },
    questions: [
      {
        id: 'knb-q1',
        kind: 'mcq',
        topic: 'blocking-operation-consequence',
        question: {
          en: 'What occurs when a developer executes a heavy synchronous computation (like a 10-second while loop) on the Node.js main thread?',
          bn: 'কোনো ডেভেলপার নোড.জেএসের মূল থ্রেডে একটি ভারী সিঙ্ক্রোনাস কাজ (যেমন ১০ সেকেন্ডের হোয়াইল লুপ) চালালে কী ঘটে?'
        },
        options: [
          {
            en: 'The entire event loop freezes, blocking all other incoming HTTP requests, timers, and callbacks from executing until the loop finishes',
            bn: 'পুরো ইভেন্ট লুপ স্থবির হয়ে যায়, যার ফলে লুপটি শেষ না হওয়া পর্যন্ত অন্যান্য সমস্ত এইচটিটিপি রিকোয়েস্ট ও কলব্যাক আটকে থাকে'
          },
          {
            en: 'Node.js automatically creates a new operating system thread to run the loop in the background',
            bn: 'নোড.জেএস ব্যাকগ্রাউন্ডে লুপটি চালানোর জন্য স্বয়ংক্রিয়ভাবে একটি নতুন ওএস থ্রেড তৈরি করে'
          },
          {
            en: 'The server reboots itself immediately without errors',
            bn: 'সার্ভারটি কোনো ত্রুটি ছাড়াই তাৎক্ষণিকভাবে নিজে থেকে রিবুট হয়'
          },
          {
            en: 'The while loop is ignored and skipped',
            bn: 'হোয়াইল লুপটি উপেক্ষা করে বাদ দিয়ে দেওয়া হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'JavaScript runs on a single thread. Can other callbacks run while that thread is busy executing a synchronous loop?',
          bn: 'জাভাস্ক্রিপ্ট একটি একক থ্রেডে চলে। সেই থ্রেড ব্যস্ত থাকলে অন্য কোনো কলব্যাক কি চলতে পারবে?'
        },
        explanation: {
          en: 'Because JavaScript execution is single-threaded, a blocking synchronous operation monopolizes the thread and starves all other requests.',
          bn: 'একক থ্রেডের কারণে কোনো ব্লকিং কাজ মূল থ্রেড দখল করে রাখলে অন্য সমস্ত ক্লায়েন্টের কাজ স্থগিত হয়ে যায়।'
        }
      },
      {
        id: 'knb-q2',
        kind: 'mcq',
        topic: 'check-phase-setimmediate',
        question: {
          en: 'In which phase of the Node.js event loop do callbacks scheduled with setImmediate() execute?',
          bn: 'নোড.জেএস ইভেন্ট লুপের কোন ধাপে setImmediate() দিয়ে নির্ধারিত কলব্যাকগুলো কার্যকর হয়?'
        },
        options: [
          {
            en: 'The Check phase, which runs immediately after the Poll phase finishes processing I/O events',
            bn: 'চেক (Check) ধাপে, যা পোল ধাপে আই/ও ইভেন্ট প্রসেস করার পরপরই পরিচালিত হয়'
          },
          {
            en: 'The Timers phase alongside setTimeout',
            bn: 'টাইমার ধাপে setTimeout এর সাথে'
          },
          {
            en: 'Before the V8 engine initializes',
            bn: 'V8 ইঞ্জিন চালু হওয়ার আগেই'
          },
          {
            en: 'Only when the server shuts down',
            bn: 'কেবলমাত্র সার্ভার বন্ধ করার সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Event loop phases in order: Timers -> Pending -> Poll -> Check -> Close. Where does setImmediate belong?',
          bn: 'ইভেন্ট লুপের ধাপগুলো হলো: টাইমার -> পেন্ডিং -> পোল -> চেক -> ক্লোজ। setImmediate কোথায় বসে?'
        },
        explanation: {
          en: 'setImmediate callbacks are explicitly designed to execute in the Check phase of the event loop right after the Poll phase.',
          bn: 'setImmediate এর কলব্যাকগুলো সুনির্দিষ্টভাবে ইভেন্ট লুপের চেক ধাপে পোল ধাপের সমাপ্তির পর কার্যকর হয়।'
        }
      },
      {
        id: 'knb-q3',
        kind: 'mcq',
        topic: 'threadpool-workload-types',
        question: {
          en: 'Which of the following operations is offloaded to libuv’s thread pool rather than handled directly by OS kernel asynchronous polling?',
          bn: 'নিচের কোন অপারেশনটি ওএস কার্নেলের বদলে libuv এর থ্রেড পুলে পরিচালিত হয়?'
        },
        options: [
          {
            en: 'Cryptographic hashing (crypto.pbkdf2) and file system operations (fs.readFile)',
            bn: 'ক্রিপ্টোগ্রাফিক হ্যাশিং (crypto.pbkdf2) এবং ফাইল সিস্টেম অপারেশন (fs.readFile)'
          },
          {
            en: 'Incoming TCP socket connections',
            bn: 'ইনকামিং টিসিপি সকেট সংযোগ'
          },
          {
            en: 'Math.sin() and Math.cos() calculations',
            bn: 'Math.sin() এবং Math.cos() এর সাধারণ হিসাব'
          },
          {
            en: 'Evaluating let a = 1 + 2 in JavaScript',
            bn: 'জাভাস্ক্রিপ্টে let a = ১ + ২ মূল্যায়ন করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Operating system kernels do not provide truly asynchronous non-blocking APIs for local file systems in the same way they do for network sockets.',
          bn: 'নেটওয়ার্ক সকেটের মতো স্থানীয় ফাইল সিস্টেমের জন্য ওএস কার্নেল শতভাগ নন-ব্লকিং এপিআই প্রদান করে না।'
        },
        explanation: {
          en: 'File I/O, DNS lookup (dns.lookup), and CPU-intensive crypto/zlib operations use libuv’s thread pool workers.',
          bn: 'ফাইল আই/ও, ডিএনএস লুকআপ এবং ক্রিপ্টো/কম্প্রেশনের মতো কাজগুলো libuv এর থ্রেড পুল ব্যবহার করে।'
        }
      },
      {
        id: 'knb-q4',
        kind: 'mcq',
        topic: 'worker-threads-cpu-scaling',
        question: {
          en: 'When a Node.js web server must perform intense CPU-bound image resizing for every upload, what is the best architectural solution?',
          bn: 'যখন কোনো নোড.জেএস সার্ভারকে প্রতি আপলোডে ভারী সিপিইউ-নির্ভর ইমেজ রিসাইজ করতে হয়, তখন সবচেয়ে ভালো স্থাপত্যিক সমাধান কোনটি?'
        },
        options: [
          {
            en: 'Offload the image processing tasks to Worker Threads (worker_threads module) or a background worker queue, keeping the main event loop responsive',
            bn: 'ইমেজ প্রসেসিং কাজগুলো ওয়ার্কার থ্রেড (worker_threads মডিউল) বা ব্যাকগ্রাউন্ড কিউতে পাঠানো, যাতে মূল ইভেন্ট লুপ সচল থাকে'
          },
          {
            en: 'Run the image processing synchronously inside the main Express route handler',
            bn: 'মূল এক্সপ্রেস রাউট হ্যান্ডলারের ভেতর সরাসরি সিঙ্ক্রোনাসভাবে ইমেজ প্রসেস করা'
          },
          {
            en: 'Delete the images from disk without processing',
            bn: 'প্রসেস না করে ডিস্ক থেকে ছবিগুলো মুছে ফেলা'
          },
          {
            en: 'Increase the computer screen brightness to 100 percent',
            bn: 'কম্পিউটার স্ক্রিনের ব্রাইটনেস ১০০ শতাংশে বাড়িয়ে দেওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'To prevent blocking the single event loop thread, isolate CPU work on separate OS threads via Worker Threads.',
          bn: 'একক ইভেন্ট লুপ যাতে আটকে না যায়, সেজন্য ভারী সিপিইউ কাজ পৃথক ওএস থ্রেডে পরিচালনা করতে হবে।'
        },
        explanation: {
          en: 'Node.js worker_threads allow parallel CPU computation on separate threads sharing memory without stalling the primary event loop.',
          bn: 'worker_threads মডিউল মূল ইভেন্ট লুপকে সচল রেখে আলাদা থ্রেডে সমান্তরাল সিপিইউ প্রসেসিং করার সুযোগ দেয়।'
        }
      }
    ]
  }
};
