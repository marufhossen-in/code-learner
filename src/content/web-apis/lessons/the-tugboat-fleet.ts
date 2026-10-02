import type { Lesson } from '../../../lib/types';

export const tugboatFleetLesson: Lesson = {
  slug: 'the-tugboat-fleet',
  tech: 'web-apis',
  title: {
    en: 'Web Workers & Concurrency — Multithreading, postMessage, and Service Workers',
    bn: 'ওয়েব ওয়ার্কার্স ও কনকারেন্সি: মাল্টিথ্রেডিং, postMessage ও সার্ভিস ওয়ার্কার্স'
  },
  summary: {
    en: 'JavaScript in the browser executes on a single main UI thread by default. Heavy computational tasks like image filtering, data parsing, or physics simulations freeze the user interface. In this lesson, you will master client-side concurrency using Web Workers: Dedicated Workers (`new Worker()`), communication via `postMessage` and `onmessage`, zero-copy memory transfers with Transferable Objects (`ArrayBuffer`), and background network proxies with Service Workers. Learn how to offload CPU-intensive operations from the main thread, handle worker error events, terminate idle workers, and structure offline-first network caching strategies. Implement an executable Web Worker message exchange simulation in TypeScript.',
    bn: 'ব্রাউজারে জাভাস্ক্রিপ্ট ডিফল্টভাবে একটিমাত্র মূল ইউআই থ্রেডে চলে। ইমেজ ফিল্টারিং, বিশাল ডেটা পার্সিং বা পদার্থবিজ্ঞানের হিসাবের মতো জটিল কাজগুলো করার সময় ব্যবহারকারীর ইন্টারফেস আটকে যায়। এই পাঠে আপনি ওয়েব ওয়ার্কার্স ব্যবহার করে ক্লায়েন্ট-সাইড মাল্টিথ্রেডিং শিখবেন: ডেডিকেটেড ওয়ার্কার (`new Worker()`), `postMessage` ও `onmessage`-এর মাধ্যমে যোগাযোগ, ট্রান্সফারেবল অবজেক্টসের মাধ্যমে জিরো-কপি মেমরি স্থানান্তর এবং সার্ভিস ওয়ার্কার্সের মাধ্যমে অফলাইন ক্যাশিং। কীভাবে মূল থ্রেডকে মুক্ত রাখা যায়, ওয়ার্কার টার্মিনেট করতে হয় এবং অফলাইন নেটওয়ার্ক স্ট্র্যাটেজি সাজাতে হয় তা বিশদভাবে জানবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর ওয়েব ওয়ার্কার মেসেজ এক্সচেঞ্জ সিমুলেশন বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'single-thread-bottleneck-and-workers',
      text: {
        en: 'The Single-Thread Bottleneck: Why Offloading Matters',
        bn: 'একক থ্রেডের সীমাবদ্ধতা: ব্যাকগ্রাউন্ড প্রসেসিং কেন জরুরি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you execute heavy computational logic in a web application, JavaScript runs on the same thread responsible for rendering user interface animations.',
        bn: 'ওয়েব অ্যাপ্লিকেশনে জটিল গাণিতিক হিসাব চালানোর সময় জাভাস্ক্রিপ্ট সেই একই থ্রেডে চলে যা ব্যবহারকারীর ইন্টারফেস ও অ্যানিমেশন আঁকার জন্য দায়ী।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The browser runs a single-threaded event loop. If your script executes a CPU-heavy task (such as image pixel manipulation, CSV parsing, or cryptography) that runs for 300 milliseconds, the entire browser window completely freezes. Buttons do not click, input textboxes refuse to type, and CSS animations grind to a halt. Web Workers solve this bottleneck by spawning genuine operating system background threads. Workers execute in an isolated global scope (represented by "self") completely decoupled from the DOM. They cannot touch "document" or "window", eliminating thread-race conditions, and communicate exclusively with the main thread via asynchronous message passing.',
        bn: 'ব্রাউজার একটিমাত্র থ্রেডের ইভেন্ট লুপে কাজ করে। আপনার স্ক্রিপ্ট যদি কোনো ভারী কাজ (যেমন ছবির পিক্সেল প্রসেসিং, বিশাল CSV পার্সিং বা এনক্রিপশন) করতে ৩০০ মিলিসেকেন্ড সময় নেয়, তবে পুরো ব্রাউজার উইন্ডোটি পুরোপুরি জমে যায়। বোতামে ক্লিক করা যায় না, টাইপ আটকে থাকে এবং অ্যানিমেশন থেমে যায়। ওয়েব ওয়ার্কার্স অপারেটিং সিস্টেমের সত্যিকারের ব্যাকগ্রাউন্ড থ্রেড তৈরি করে এই সমস্যার সমাধান দেয়। ওয়ার্কারগুলো একটি সম্পূর্ণ পৃথক বিচ্ছিন্ন পরিবেশে ("self") চলে যা ডম (DOM) থেকে পুরোপুরি মুক্ত। তারা সরাসরি "document" বা "window" স্পর্শ করতে পারে না, ফলে কোনো ডেটা রেসের ঝুঁকি থাকে না; তারা কেবল মেসেজ পাঠানোর মাধ্যমে মূল থ্রেডের সাথে যোগাযোগ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'web-worker',
          def: {
            en: 'A background JavaScript execution thread running in parallel with the main browser UI thread without blocking rendering.',
            bn: 'একটি ব্যাকগ্রাউন্ড জাভাস্ক্রিপ্ট থ্রেড যা মূল ইউআই থ্রেডের সাথে সমান্তরালে কাজ করে এবং ইন্টারফেসকে সচল রাখে।'
          }
        },
        {
          term: 'post-message-interface',
          def: {
            en: 'The standardized asynchronous message-passing API used by main threads and workers to exchange serialized data payloads.',
            bn: 'মূল থ্রেড এবং ব্যাকগ্রাউন্ড ওয়ার্কারের মধ্যে তথ্য আদান-প্রদানের মানসম্মত অ্যাসিঙ্ক্রোনাস মেসেজিং ইন্টারফেস।'
          }
        },
        {
          term: 'transferable-objects',
          def: {
            en: 'High-performance binary memory buffers (ArrayBuffer, ImageBitmap) transferred between threads with zero copying by transferring address ownership.',
            bn: 'উচ্চগতির বাইনারি বাফার যা কোনো মেমরি কপি না করেই তাৎক্ষণিকভাবে এক থ্রেড থেকে অন্য থ্রেডে মালিকানা স্থানান্তর করতে পারে।'
          }
        },
        {
          term: 'service-worker',
          def: {
            en: 'A specialized programmable network proxy worker that intercepts outgoing HTTP requests, manages local caches, and powers offline experiences.',
            bn: 'একটি বিশেষ প্রোগ্রামযোগ্য নেটওয়ার্ক প্রক্সি ওয়ার্কার যা ব্রাউজারের নেটওয়ার্ক রিকোয়েস্ট নিয়ন্ত্রণ করে এবং অফলাইনে পেজ সচল রাখে।'
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
      id: 'worker-types-comparison-table',
      text: {
        en: 'Comparative Architecture: Dedicated vs Shared vs Service Workers',
        bn: 'ব্রাউজার ওয়ার্কারের প্রকারভেদ ও তুলনামূলক বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The browser provides three distinct worker architectures tailored for isolated computation, cross-tab coordination, or network interception.',
        bn: 'ব্রাউজারে ৩টি ভিন্ন ধরনের ওয়ার্কার রয়েছে যা স্বাধীন হিসাব-নিকাশ, একাধিক ট্যাবের সমন্বয় অথবা নেটওয়ার্ক নিয়ন্ত্রণের জন্য তৈরি।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Worker Architecture', bn: 'ওয়ার্কারের ধরন' },
        { en: 'Instantiation API', bn: 'তৈরির সিনট্যাক্স' },
        { en: 'Communication & Scope', bn: 'যোগাযোগের পরিধি' },
        { en: 'Primary Architectural Workload', bn: 'প্রধান কাজের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'Dedicated Worker', bn: 'ডেডিকেটেড ওয়ার্কার' },
          { en: 'const worker = new Worker("worker.js")', bn: 'const worker = new Worker("worker.js")' },
          { en: 'Tied strictly to the single parent browser tab that instantiated it', bn: 'কেবলমাত্র যে নির্দিষ্ট ট্যাবটি তৈরি করেছে তার সাথেই যুক্ত থাকে' },
          { en: 'Heavy CPU math: 3D physics, cryptography, image processing, large CSV parsing', bn: 'ভারী সিপিইউ কাজ: থ্রিডি ফিজিক্স, ক্রিপ্টোগ্রাফি, ইমেজ ফিল্টারিং ও ফাইল পার্সিং' }
        ],
        [
          { en: 'Shared Worker', bn: 'শেয়ার্ড ওয়ার্কার' },
          { en: 'const shared = new SharedWorker("shared.js")', bn: 'const shared = new SharedWorker("shared.js")' },
          { en: 'Shared across multiple open tabs/windows of the identical origin via MessagePorts', bn: 'MessagePort-এর মাধ্যমে একই ওয়েবসাইটের একাধিক খোলা ট্যাবের মধ্যে শেয়ার করা যায়' },
          { en: 'Cross-tab state coordination, shared WebSocket connection pooling', bn: 'ট্যাবের মধ্যে ডেটা সমন্বয় ও একটিমাত্র কেন্দ্রীয় ওয়েবসকেট সংযোগ ব্যবহার' }
        ],
        [
          { en: 'Service Worker', bn: 'সার্ভিস ওয়ার্কার' },
          { en: 'navigator.serviceWorker.register("sw.js")', bn: 'navigator.serviceWorker.register("sw.js")' },
          { en: 'Runs independently of open tabs; acts as a programmable client-side network proxy', bn: 'ট্যাব খোলা না থাকলেও চলতে পারে; একটি ক্লায়েন্ট-সাইড নেটওয়ার্ক প্রক্সি হিসেবে কাজ করে' },
          { en: 'Progressive Web Apps (PWAs), offline asset caching, push notifications', bn: 'প্রোগ্রেসিভ ওয়েব অ্যাপ (PWA), অফলাইন অ্যাসেট ক্যাশিং ও পুশ নোটিফিকেশন' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-worker-simulation-code',
      text: {
        en: 'Executable Web Worker Message Dispatch Simulation',
        bn: 'ওয়েব ওয়ার্কার মেসেজ বিনিময়ের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how a background worker processes a batch of 3 mathematical tasks, calculating results asynchronously without blocking the caller.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি ব্যাকগ্রাউন্ড ওয়ার্কার কীভাবে ৩টি গাণিতিক কাজ সমান্তরালে সম্পন্ন করে ফলাফল ফেরত পাঠায় তা বাস্তবায়ন করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Asynchronous Web Worker Task Dispatch

interface WorkerTask {
  id: string;
  value: number;
}

interface WorkerTaskResult {
  jobId: string;
  input: number;
  output: number;
}

interface WorkerBatchReport {
  totalJobsSubmitted: number;
  jobsCompleted: number;
  results: WorkerTaskResult[];
}

function processWorkerBatch(tasks: WorkerTask[]): WorkerBatchReport {
  const results: WorkerTaskResult[] = [];
  let totalProcessed = 0;

  for (const task of tasks) {
    // In a real Worker, this calculation executes on a secondary OS thread
    const computedOutput = task.value * task.value;
    results.push({
      jobId: task.id,
      input: task.value,
      output: computedOutput
    });
    totalProcessed++;
  }

  return {
    totalJobsSubmitted: tasks.length,
    jobsCompleted: totalProcessed,
    results
  };
}

const batchQueue: WorkerTask[] = [
  { id: 'task-1', value: 10 },
  { id: 'task-2', value: 25 },
  { id: 'task-3', value: 50 }
];

const report = processWorkerBatch(batchQueue);

console.log('Total computation jobs dispatched:', report.totalJobsSubmitted);
console.log('Successfully completed worker tasks:', report.jobsCompleted);
console.log('Task 1 output value:', report.results[0].output);
console.log('Task 2 output value:', report.results[1].output);
console.log('Task 3 output value:', report.results[2].output);

// prints: Total computation jobs dispatched: 3
// prints: Successfully completed worker tasks: 3
// prints: Task 1 output value: 100
// prints: Task 2 output value: 625
// prints: Task 3 output value: 2500`
    },
    {
      type: 'heading',
      id: 'zero-copy-transferables-and-cloning',
      text: {
        en: 'Zero-Copy Memory Transfer with Transferable Objects',
        bn: 'ট্রান্সফারেবল অবজেক্টসের মাধ্যমে জিরো-কপি মেমরি স্থানান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'By default, postMessage uses the Structured Clone Algorithm to serialize objects passed between threads. While convenient for small JSON payloads, serializing a 50MB binary array buffer deep-copies every single byte, consuming double the memory and freezing threads for tens of milliseconds. Transferable Objects solve this via memory ownership transfer: by passing the buffer in the second argument array (e.g. "worker.postMessage(buffer, [buffer])"), the browser instantly transfers ownership of the underlying memory pointer to the worker. The operation completes in zero milliseconds; the sending thread buffer immediately has its "byteLength" set to 0, preventing concurrent mutation hazards.',
        bn: 'ডিফল্টভাবে postMessage স্ট্রাকচার্ড ক্লোন অ্যালগরিদম ব্যবহার করে দুটি থ্রেডের মধ্যে ডেটা কপি করে। ছোট ডেটার জন্য এটি ভালো হলেও ৫০ মেগাবাইটের একটি বাইনারি বাফার কপি করতে গেলে মেমরি দ্বিগুণ খরচ হয় এবং কয়েক দশক মিলিসেকেন্ড সময় নষ্ট হয়। ট্রান্সফারেবল অবজেক্টস (Transferable Objects) কোনো কপি ছাড়াই মেমরির সরাসরি মালিকানা স্থানান্তরের মাধ্যমে এটি সমাধান করে: দ্বিতীয় প্যারামিটারে বাফারটি দিলে (যেমন "worker.postMessage(buffer, [buffer])") ব্রাউজার তাৎক্ষণিকভাবে মেমরির পয়েন্টারটি ওয়ার্কারের কাছে দিয়ে দেয়। এই কাজটি শূন্য মিলিসেকেন্ডেই শেষ হয়; প্রেরণকারী থ্রেডের মূল বাফারটির "byteLength" সাথে সাথে ০ হয়ে যায়, যার ফলে দুটি থ্রেড একসাথে একই মেমরিতে লেখার কোনো ঝুঁকি থাকে না।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Offload CPU-intensive operations: Keep the main UI thread at 60fps by running image processing, parsing, and physics in Web Workers.',
          bn: 'ভারী কাজ ব্যাকগ্রাউন্ডে দিন: ইমেজ প্রসেসিং ও ফাইল পার্সিং ওয়ার্কারে চালিয়ে মূল ইউআই থ্রেডকে সর্বদা ৬০ ফ্রেমে সচল রাখুন।'
        },
        {
          en: 'Workers have no DOM access: Workers run in an isolated scope with self; they communicate strictly via postMessage and onmessage.',
          bn: 'ওয়ার্কারের কোনো ডম অ্যাক্সেস নেই: ওয়ার্কার সম্পূর্ণ আলাদা পরিবেশে চলে এবং কেবল postMessage দিয়ে ডেটা আদান-প্রদান করে।'
        },
        {
          en: 'Use Transferables for large binary data: Transfer memory ownership of ArrayBuffers with zero copying to eliminate serialization overhead.',
          bn: 'বড় ডেটায় ট্রান্সফারেবল ব্যবহার করুন: মেমরি কপি করার অপচয় এড়াতে ArrayBuffer-এর সরাসরি মালিকানা ওয়ার্কারে স্থানান্তর করুন।'
        },
        {
          en: 'Always terminate idle workers: Call worker.terminate() when operations finish to free operating system thread memory.',
          bn: 'অলস ওয়ার্কার বন্ধ করুন: কাজ শেষে worker.terminate() কল করে অপারেটিং সিস্টেমের মেমরি মুক্ত করে দিন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-harbor-services',
    tech: 'web-apis',
    title: {
      en: 'Hardware & Gated APIs — Geolocation, Clipboard, Notifications, and Media',
      bn: 'হার্ডওয়্যার ও গেটেড এপিআই: জিওলোকেশন, ক্লিপবোর্ড, নোটিফিকেশন ও মিডিয়া'
    }
  },
  exercises: [
    {
      id: 'tf-ex1',
      kind: 'mcq',
      topic: 'worker-dom-access-restriction',
      question: {
        en: 'What occurs if a script running inside a Dedicated Web Worker attempts to access "window.document.getElementById("app")"?',
        bn: 'একটি ডেডিকেটেড ওয়েব ওয়ার্কারের ভেতরের স্ক্রিপ্ট যদি "window.document.getElementById("app")" কল করার চেষ্টা করে, তবে কী ঘটে?'
      },
      options: [
        {
          en: 'A ReferenceError is thrown because neither "window" nor "document" exists in the worker global execution scope (which is represented by "self")',
          bn: 'একটি ReferenceError ঘটবে কারণ ওয়ার্কারের গ্লোবাল স্কোপে ("self") "window" বা "document" নামের কোনো অবজেক্টের অস্তিত্বই নেই'
        },
        {
          en: 'The element is returned perfectly with full CSS styling',
          bn: 'উপাদানটি সম্পূর্ণ সিএসএস স্টাইলসহ সফলভাবে ফেরত আসবে'
        },
        {
          en: 'The computer operating system restarts immediately',
          bn: 'কম্পিউটার অপারেটিং সিস্টেম সাথে সাথে রিস্টার্ট নেবে'
        },
        {
          en: 'The worker formats the client hard drive to clear errors',
          bn: 'ওয়ার্কার হার্ড ড্রাইভ ফরম্যাট করে ফেলবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Workers are isolated from the DOM to eliminate multi-threaded race conditions on the render tree.',
        bn: 'মাল্টিথ্রেডেড কনফ্লিক্ট এড়াতে ওয়ার্কারকে ডম (DOM) থেকে পুরোপুরি দূরে রাখা হয়েছে।'
      },
      explanation: {
        en: 'Web Workers execute in a WorkerGlobalScope without DOM or window access; all UI updates must be communicated back to the main thread via postMessage.',
        bn: 'ওয়ার্কার ডম স্পর্শ করতে পারে না; পেজে কিছু পরিবর্তন করতে চাইলে postMessage দিয়ে মূল থ্রেডকে নির্দেশ পাঠাতে হয়।'
      }
    },
    {
      id: 'tf-ex2',
      kind: 'mcq',
      topic: 'transferable-objects-bytelength-neutering',
      question: {
        en: 'When an ArrayBuffer is transferred to a Web Worker using Transferable Objects (e.g. worker.postMessage(buffer, [buffer])), what happens to the original buffer on the main thread?',
        bn: 'ট্রান্সফারেবল অবজেক্টস ব্যবহার করে যখন একটি ArrayBuffer ওয়ার্কারে স্থানান্তর করা হয়, তখন মূল থ্রেডে থাকা বাফারটির কী ঘটে?'
      },
      options: [
        {
          en: 'The original buffer is neutered: its byteLength becomes 0 and its memory is completely detached, preventing the main thread from accessing or mutating it',
          bn: 'মূল বাফারটি পুরোপুরি নিষ্ক্রিয় (neutered) হয়ে যায়: এর byteLength ০ হয়ে যায় এবং মেমরি বিচ্ছিন্ন হয়ে যাওয়ায় মূল থ্রেড আর এটি পড়তে পারে না'
        },
        {
          en: 'The buffer is duplicated into 10 separate memory copies',
          bn: 'বাফারটি মেমরিতে ১০টি আলাদা অনুলিপি তৈরি করে'
        },
        {
          en: 'The buffer deletes all user account passwords permanently',
          bn: 'বাফারটি সমস্ত পাসওয়ার্ড মুছে ফেলে'
        },
        {
          en: 'The buffer reduces internet connection costs to zero dollars',
          bn: 'বাফারটি ইন্টারনেটের খরচ শূন্য টাকায় নামিয়ে আনে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Zero-copy transfer means moving memory ownership. If the worker owns it, the main thread no longer has it.',
        bn: 'মালিকানা হস্তান্তর মানে ওয়ার্কার এখন এর মালিক; মূল থ্রেডের কাছে এর দৈর্ঘ্য শূন্য হয়ে যায়।'
      },
      explanation: {
        en: 'Transferable memory is detached from the sender to guarantee memory safety without lock contention between threads.',
        bn: 'নিরাপত্তা নিশ্চিত করতে প্রেরকের মেমরি খালি করে সরাসরি প্রাপকের কাছে মালিকানা দেওয়া হয়।'
      }
    },
    {
      id: 'tf-ex3',
      kind: 'mcq',
      topic: 'service-worker-lifecycle-stages',
      question: {
        en: 'What are the three core lifecycle events that govern a Service Worker installation and activation in the browser?',
        bn: 'ব্রাউজারে একটি সার্ভিস ওয়ার্কার ইনস্টল ও সক্রিয় করার ক্ষেত্রে কোন ৩টি মূল জীবনচক্র ইভেন্ট কাজ করে?'
      },
      options: [
        {
          en: 'install (caching static shell assets), activate (sweeping old caches), and fetch (intercepting outgoing network requests)',
          bn: 'install (স্ট্যাটিক ফাইল ক্যাশ করা), activate (পুরনো ক্যাশ পরিষ্কার করা), এবং fetch (নেটওয়ার্ক রিকোয়েস্ট আটকানো)'
        },
        {
          en: 'start, pause, and stop',
          bn: 'start, pause, এবং stop'
        },
        {
          en: 'open, read, and delete',
          bn: 'open, read, এবং delete'
        },
        {
          en: 'boot, sleep, and restart',
          bn: 'boot, sleep, এবং restart'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Service Worker specification standardizes: install, activate, and fetch.',
        bn: 'সার্ভিস ওয়ার্কারের ৩টি প্রধান ইভেন্ট হলো: install, activate, fetch।'
      },
      explanation: {
        en: 'Service Workers follow a strict lifecycle: install caches the shell, activate cleans previous versions, and fetch intercepts HTTP traffic.',
        bn: 'সার্ভিস ওয়ার্কার ইনস্টলে ক্যাশ তৈরি করে, অ্যাক্টিভেটে পুরনো ডেটা মোছে এবং ফেচে নেটওয়ার্ক নিয়ন্ত্রণ করে।'
      }
    },
    {
      id: 'tf-ex4',
      kind: 'mcq',
      topic: 'shared-worker-messageport-channel',
      question: {
        en: 'How do multiple open browser tabs communicate with a single Shared Worker instance running on the same origin?',
        bn: 'একই ওয়েবসাইটের একাধিক খোলা ট্যাব কীভাবে একটি একক শেয়ার্ড ওয়ার্কারের সাথে যোগাযোগ রক্ষা করে?'
      },
      options: [
        {
          en: 'Each tab connects through a dedicated MessagePort via the "connect" event (e.g. sharedWorker.port.postMessage() and sharedWorker.port.onmessage)',
          bn: 'প্রতিটি ট্যাব "connect" ইভেন্টের মাধ্যমে একটি নিজস্ব MessagePort ব্যবহার করে যুক্ত হয় (যেমন sharedWorker.port.postMessage())'
        },
        {
          en: 'Tabs communicate by sending physical radio signals through the air',
          bn: 'ট্যাবগুলো বাতাসের মাধ্যমে রেডিও সিগন্যাল পাঠিয়ে যোগাযোগ করে'
        },
        {
          en: 'Because Shared Workers require users to speak into their microphone',
          bn: 'কারণ এতে ব্যবহারকারীকে মাইক্রোফোনে কথা বলতে হয়'
        },
        {
          en: 'Shared Workers format all open tabs once per minute',
          bn: 'শেয়ার্ড ওয়ার্কার প্রতি মিনিটে সব ট্যাব ফরম্যাট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Shared workers communicate via explicit ports (sharedWorker.port).',
        bn: 'শেয়ার্ড ওয়ার্কার সুনির্দিষ্ট পোর্ট (sharedWorker.port) দিয়ে যোগাযোগ চালায়।'
      },
      explanation: {
        en: 'SharedWorkers manage connections via MessagePort objects, allowing multiple client pages to share a single background state.',
        bn: 'MessagePort ব্যবহারের মাধ্যমে একাধিক ট্যাব একটিমাত্র কেন্দ্রীয় ওয়ার্কারের সাথে যুক্ত থাকতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'tugboat-fleet-quiz',
    title: {
      en: 'Web Workers, Multithreading, and Service Workers Quiz',
      bn: 'ওয়েব ওয়ার্কার্স, মাল্টিথ্রেডিং ও সার্ভিস ওয়ার্কার্স কুইজ'
    },
    questions: [
      {
        id: 'tfq-q1',
        kind: 'mcq',
        topic: 'worker-terminate-resource-cleanup',
        question: {
          en: 'Why is it critical for client applications to invoke "worker.terminate()" from the main thread once a long-running calculation finishes?',
          bn: 'দীর্ঘ গাণিতিক কাজ সম্পন্ন হওয়ার পর মূল থ্রেড থেকে কেন "worker.terminate()" কল করা অপরিহার্য?'
        },
        options: [
          {
            en: 'Web Workers run on dedicated OS background threads with their own heap memory; terminating idle workers releases the OS thread and reclaims memory',
            bn: 'ওয়েব ওয়ার্কার অপারেটিং সিস্টেমের ব্যাকগ্রাউন্ড থ্রেড ও আলাদা মেমরি ব্যবহার করে চলে; অলস ওয়ার্কার বন্ধ করলে সিস্টেমের থ্রেড ও মেমরি মুক্ত হয়'
          },
          {
            en: 'Failure to terminate causes the computer processor to melt physically',
            bn: 'টার্মিনেট না করলে প্রসেসর গলে যায়'
          },
          {
            en: 'Because unclosed workers format all browser bookmarks',
            bn: 'কারণ খোলা ওয়ার্কার ব্রাউজারের বুকমার্ক মুছে ফেলে'
          },
          {
            en: 'worker.terminate() was made mandatory by the International Postal Union',
            bn: 'কারণ আন্তর্জাতিক ডাক সংস্থা এটি বাধ্যতামূলক করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'A worker does not automatically garbage collect itself. It stays alive waiting for messages until terminated.',
          bn: 'ওয়ার্কার নিজে নিজে বন্ধ হয় না; টার্মিনেট না করা পর্যন্ত সে মেমরি আটকে রেখে অপেক্ষা করতে থাকে।'
        },
        explanation: {
          en: 'Workers consume non-trivial operating system resources; explicit termination frees threads and prevents resource exhaustion.',
          bn: 'ওয়ার্কার সিস্টেমের মূল্যবান মেমরি ব্যবহার করে; কাজ শেষে টার্মিনেট করে মেমরি মুক্ত করে দিতে হয়।'
        }
      },
      {
        id: 'tfq-q2',
        kind: 'mcq',
        topic: 'service-worker-https-security-gate',
        question: {
          en: 'Why do modern browser engines strictly prohibit registering a Service Worker on an insecure HTTP origin (outside of localhost)?',
          bn: 'আধুনিক ব্রাউজারগুলো লোকালহোস্ট ব্যতীত সাধারণ অরক্ষিত HTTP ডোমেইনে কেন সার্ভিস ওয়ার্কার রেজিস্ট্রেশন কঠোরভাবে নিষিদ্ধ করেছে?'
        },
        options: [
          {
            en: 'A Service Worker is a powerful network proxy; an unencrypted Man-in-the-Middle attacker could inject a malicious worker to permanently hijack all network traffic and steal passwords',
            bn: 'সার্ভিস ওয়ার্কার একটি অতি শক্তিশালী নেটওয়ার্ক প্রক্সি; অরক্ষিত সংযোগে কোনো হ্যাকার একটি ক্ষতিকর ওয়ার্কার ঢুকিয়ে দিলে সে চিরতরে সমস্ত ট্র্যাফিক হাইজ্যাক করে পাসওয়ার্ড চুরি করতে পারবে'
          },
          {
            en: 'Because HTTP connections format client computer monitors',
            bn: 'কারণ HTTP সংযোগ মনিটর ফরম্যাট করে ফেলে'
          },
          {
            en: 'Service workers increase server electricity bills by 500 percent on HTTP',
            bn: 'কারণ এতে সার্ভারের বিদ্যুৎ বিল ৫০০ শতাংশ বেড়ে যায়'
          },
          {
            en: 'HTTP was outlawed by international cyber treaties in 2021',
            bn: 'কারণ ২০২১ সালে আন্তর্জাতিক আইনে HTTP নিষিদ্ধ করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'A Service Worker can intercept every network call. Giving that power to unencrypted HTTP is an extreme security risk.',
          bn: 'সার্ভিস ওয়ার্কার সমস্ত নেটওয়ার্ক কল নিয়ন্ত্রণ করতে পারে; তাই এতে কঠোরভাবে HTTPS প্রয়োজন।'
        },
        explanation: {
          en: 'Service Workers hold proxy authority over page requests; HTTPS is mandatory to guarantee integrity and authenticity.',
          bn: 'সার্ভিস ওয়ার্কারের বিশাল ক্ষমতার কারণে হ্যাকিং প্রতিরোধে HTTPS শতভাগ বাধ্যতামূলক।'
        }
      },
      {
        id: 'tfq-q3',
        kind: 'mcq',
        topic: 'worker-error-event-handling',
        question: {
          en: 'How does a frontend application running on the main thread listen for and handle uncaught runtime errors that occur inside a Web Worker script?',
          bn: 'ওয়েব ওয়ার্কারের ভেতরের স্ক্রিপ্টে কোনো অপ্রত্যাশিত এরর ঘটলে মূল থ্রেড কীভাবে তা শুনে হ্যান্ডেল করতে পারে?'
        },
        options: [
          {
            en: 'By attaching an "onerror" event listener on the worker instance (e.g. worker.onerror = (event) => { console.error(event.message); })',
            bn: 'ওয়ার্কারের ওপর "onerror" ইভেন্ট লিসেনার যুক্ত করে (যেমন worker.onerror = (event) => { console.error(event.message); })'
          },
          {
            en: 'By wrapping the user computer in aluminum foil',
            bn: 'কম্পিউটার অ্যালুমিনিয়াম ফয়েল দিয়ে পেঁচিয়ে'
          },
          {
            en: 'Worker errors cannot be detected by any software tool',
            bn: 'ওয়ার্কারের এরর কখনোই ধরা সম্ভব নয়'
          },
          {
            en: 'Because worker errors format all client device storage',
            bn: 'কারণ এরর হলে ডিভাইসের স্টোরেজ ফরম্যাট হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use the worker.onerror event handler.',
          bn: 'worker.onerror হ্যান্ডলার ব্যবহার করুন।'
        },
        explanation: {
          en: 'The worker.onerror event captures unhandled exceptions thrown inside the worker thread and reports them to the host page.',
          bn: 'worker.onerror ব্যাকগ্রাউন্ড থ্রেডের যেকোনো সমস্যা মূল পেজে জানিয়ে দেয়।'
        }
      },
      {
        id: 'tfq-q4',
        kind: 'mcq',
        topic: 'service-worker-stale-while-revalidate',
        question: {
          en: 'In Service Worker caching strategies, what does the "Stale-While-Revalidate" pattern accomplish?',
          bn: 'সার্ভিস ওয়ার্কার ক্যাশিংয়ে "স্টেল-হোয়াইল-রিভ্যালিডেট" (Stale-While-Revalidate) প্যাটার্ন কী কাজ করে?'
        },
        options: [
          {
            en: 'It serves the cached asset immediately for instant page rendering, while asynchronously fetching an updated version from the network in the background to refresh the cache for future visits',
            bn: 'এটি তাৎক্ষণিক পেজ লোডের জন্য সাথে সাথে ক্যাশে থাকা ডেটা প্রদর্শন করে, এবং একই সাথে ব্যাকগ্রাউন্ডে নেটওয়ার্ক থেকে তাজা সংস্করণ এনে ভবিষ্যতের জন্য ক্যাশ আপডেট করে রাখে'
          },
          {
            en: 'It deletes all user passwords and restarts the browser',
            bn: 'এটি সব পাসওয়ার্ড মুছে ব্রাউজার রিস্টার্ট করে'
          },
          {
            en: 'Because stale-while-revalidate formats the hard drive every morning',
            bn: 'কারণ এটি প্রতিদিন সকালে ড্রাইভ ফরম্যাট করে'
          },
          {
            en: 'It increases internet subscription costs by 400 percent',
            bn: 'এটি ইন্টারনেটের খরচ ৪০০ শতাংশ বাড়িয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Show cached data instantly (fast) + fetch fresh data in background (fresh for next time).',
          bn: 'মুহূর্তে পুরনো ক্যাশ দেখিয়ে গতি নিশ্চিত করা এবং পেছনের নেটওয়ার্ক থেকে নতুন ডেটা আনা।'
        },
        explanation: {
          en: 'Stale-While-Revalidate delivers instantaneous UI rendering while eliminating the risk of serving permanently outdated assets.',
          bn: 'এই কৌশলটি তাত্ক্ষণিক গতি দেওয়ার পাশাপাশি ব্যাকগ্রাউন্ডে নিয়মিত নতুন ডেটা দিয়ে ক্যাশ সতেজ রাখে।'
        }
      }
    ]
  }
};
