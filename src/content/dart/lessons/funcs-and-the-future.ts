import type { Lesson } from '../../../lib/types';

export const FuncsAndTheFutureLesson: Lesson = {
  slug: 'funcs-and-the-future',
  tech: 'dart',
  title: {
    en: 'Functions, Futures & The Single-Threaded Event Loop',
    bn: 'ফাংশন, ফিউচার এবং সিঙ্গেল-থ্রেডেড ইভেন্ট লুপ'
  },
  summary: {
    en: 'Master asynchronous control flow in Dart. Understand first-class functions and closures, explore the single-threaded event loop driven by the priority Microtask Queue and standard Event Queue, navigate asynchronous computation using Future<T> and async/await suspension, and handle errors predictably via try/catch blocks.',
    bn: 'Dart-এ অ্যাসিনক্রোনাস কন্ট্রোল ফ্লো আয়ত্ত করুন। ফার্স্ট-ক্লাস ফাংশন ও ক্লোজার, প্রায়োরিটি মাইক্রোটাস্ক কিউ এবং সাধারণ ইভেন্ট কিউ দ্বারা চালিত সিঙ্গেল-থ্রেডেড ইভেন্ট লুপের মেকানিজম, Future<T> ও async/await কো-অপারেটিভ সাসপেনশন এবং try/catch ব্লকের মাধ্যমে নির্ভরযোগ্য এরর হ্যান্ডলিং।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'functions-and-closures-heading',
      text: {
        en: 'First-Class Functions, Named Arguments, and Lexical Closures',
        bn: 'ফার্স্ট-ক্লাস ফাংশন, নামযুক্ত আর্গুমেন্ট এবং লেক্সিক্যাল ক্লোজার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In older object-oriented languages, functions existed strictly as subordinate methods chained to classes. In Dart (Google\'s strongly typed client programming language), functions are first-class objects possessing genuine types. Functions can be assigned to variables, passed as callback arguments, and returned dynamically from higher-order generators. Dart offers expressive parameter signatures, including optional positional arguments wrapped in square brackets and named arguments enclosed in curly braces with "required" annotations or default values. Furthermore, nested functions form lexical closures, safely capturing variables from their surrounding scope to maintain private state across asynchronous lifecycles.',
        bn: 'প্রাচীন অবজেক্ট-ওরিয়েন্টেড ভাষাগুলোতে ফাংশন কেবল ক্লাসের ভেতরে আবদ্ধ অধীনস্থ মেথড হিসেবে কাজ করত। কিন্তু Dart (গুগলের তৈরি স্ট্রংলি টাইপড ক্লায়েন্ট প্রোগ্রামিং ভাষা)-এ ফাংশন হলো প্রথম শ্রেণির নাগরিক যার নিজস্ব সুনির্দিষ্ট টাইপ রয়েছে। এখানে ফাংশনগুলোকে ভ্যারিয়েবলে সংরক্ষণ করা যায়, কলব্যাক হিসেবে অন্য ফাংশনে পাঠানো যায় এবং হায়ার-অর্ডার জেনারেটর থেকে ফেরত নেওয়া যায়। Dart অত্যন্ত চমৎকার প্যারামিটার সিগনেচার সমর্থন করে, যেমন তৃতীয় বন্ধনীতে ঐচ্ছিক পজিশনাল প্যারামিটার এবং দ্বিতীয় বন্ধনীতে ডিফল্ট মান সহ নামযুক্ত প্যারামিটার। তাছাড়া নেস্টেড ফাংশন লেক্সিক্যাল ক্লোজার তৈরি করে বাইরের স্কোপের ভ্যারিয়েবলগুলোকে নিরাপদে ধরে রাখতে পারে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Dart single-threaded event loop engine coordinating the priority Microtask Queue and the standard Event Queue.',
        bn: 'চিত্র ১: Dart সিঙ্গেল-থ্রেডেড ইভেন্ট লুপ ইঞ্জিন যা প্রায়োরিটি মাইক্রোটাস্ক কিউ এবং সাধারণ ইভেন্ট কিউ সমন্বয় করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">DART SINGLE-THREADED EVENT LOOP &amp; QUEUE PRIORITIZATION</text>

  <!-- Left: Priority Microtask Queue -->
  <g transform="translate(35, 65)">
    <rect width="360" height="235" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="360" height="30" rx="8" fill="#b91c1c" />
    <text x="180" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. High-Priority Microtask Queue</text>

    <text x="15" y="55" fill="#f87171" font-size="10" font-family="monospace">scheduleMicrotask(() =&gt; ...)</text>

    <!-- Task slots -->
    <rect x="15" y="70" width="330" height="38" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="25" y="93" fill="#fca5a5" font-size="10" font-family="monospace">Microtask 1: Synchronous internal state</text>

    <rect x="15" y="115" width="330" height="38" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="25" y="138" fill="#fca5a5" font-size="10" font-family="monospace">Microtask 2: State reconciliation check</text>

    <!-- Guarantee -->
    <rect x="15" y="160" width="330" height="60" rx="5" fill="#ef4444" fill-opacity="0.15" stroke="#ef4444" />
    <text x="25" y="182" fill="#f87171" font-size="10" font-family="sans-serif" font-weight="bold">Strict Priority Law:</text>
    <text x="25" y="202" fill="#f8fafc" font-size="9" font-family="sans-serif">Event loop drains ALL microtasks before picking any event!</text>
  </g>

  <!-- Right: Standard Event Queue -->
  <g transform="translate(440, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#0284c7" />
    <text x="182" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Standard Event Queue</text>

    <text x="15" y="55" fill="#38bdf8" font-size="10" font-family="monospace">I/O | User Gestures | Timers | Future</text>

    <!-- Event slots -->
    <rect x="15" y="70" width="335" height="38" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="93" fill="#38bdf8" font-size="10" font-family="monospace">Event 1: Network response packet arrived</text>

    <rect x="15" y="115" width="335" height="38" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="138" fill="#38bdf8" font-size="10" font-family="monospace">Event 2: Screen Touch Gesture (Tap)</text>

    <!-- Guarantee -->
    <rect x="15" y="160" width="335" height="60" rx="5" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" />
    <text x="25" y="182" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold">Single-Threaded Safety:</text>
    <text x="25" y="202" fill="#f8fafc" font-size="9" font-family="sans-serif">Events run 1 by 1 sequentially. Zero mutex locks required!</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'futures-and-event-loop-heading',
      text: {
        en: 'The Event Loop, Future<T>, and Async/Await Suspension',
        bn: 'ইভেন্ট লুপ, Future<T> এবং Async/Await সাসপেনশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike multi-threaded languages where threads share mutable memory and trigger race conditions, Dart executes code inside a single isolate driven by an event loop. The runtime manages two distinct priority queues: the Microtask Queue and the Event Queue. The event loop prioritizes microtasks with absolute urgency, emptying the entire microtask queue before fetching the next event from the Event Queue. When calling asynchronous APIs, Dart represents pending calculations using "Future<T>". Using the "await" keyword pauses the current async function cooperatively, releasing the single thread so UI rendering at 60 FPS continues uninterrupted while waiting for file or network I/O.',
        bn: 'একাধিক থ্রেড শেয়ার্ড মেমোরি নিয়ে কাজ করে ডেটা রেস তৈরি করার বদলে Dart একটি একক আইসোলেটের ভেতর ইভেন্ট লুপের মাধ্যমে কোড চালায়। রানটাইম মূলত ২ টি কিউ নিয়ন্ত্রণ করে: মাইক্রোটাস্ক কিউ এবং ইভেন্ট কিউ। ইভেন্ট লুপ সর্বদা মাইক্রোটাস্ক কিউকে সর্বোচ্চ অগ্রাধিকার দেয়, ফলে মাইক্রোটাস্ক কিউ সম্পূর্ণ খালি না হওয়া পর্যন্ত এটি সাধারণ ইভেন্ট কিউয়ের দিকে তাকায়ও না। অ্যাসিনক্রোনাস কাজের ফলাফলের জন্য Dart "Future<T>" ব্যবহার করে। "await" কি-ওয়ার্ডটি ব্যবহার করলে চলমান ফাংশনটি সাময়িক বিরতি নেয় এবং মেইন থ্রেডকে মুক্ত করে দেয়, যার ফলে নেটওয়ার্কের জন্য অপেক্ষার মাঝেও স্ক্রিনের ৬০ ফ্রেমের মসৃণ রেন্ডারিং সম্পূর্ণ নিরবচ্ছিন্ন থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Dart single-threaded event loop showing microtask queue priority over standard event queue execution.',
        bn: 'সাধারণ ইভেন্ট কিউয়ের ওপর মাইক্রোটাস্ক কিউয়ের কঠোর অগ্রাধিকার প্রদর্শনকারী Dart ইভেন্ট লুপের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Dart Single-Threaded Event Loop and Queue Prioritization

export class DartEventLoopSimulator {
  private microtaskQueue: (() => void)[] = [];
  private eventQueue: (() => void)[] = [];
  public executionLog: string[] = [];

  // 1. Enqueue Microtask (scheduleMicrotask)
  public scheduleMicrotask(action: () => void, label: string): void {
    this.microtaskQueue.push(() => {
      this.executionLog.push('[Microtask Queue] ' + label);
      action();
    });
  }

  // 2. Enqueue Standard Event (Future, Timer, I/O)
  public scheduleEvent(action: () => void, label: string): void {
    this.eventQueue.push(() => {
      this.executionLog.push('[Event Queue] ' + label);
      action();
    });
  }

  // Event loop tick engine: strictly prioritizes microtasks!
  public runEventLoop(): void {
    this.executionLog.push('[Event Loop] Cycle started.');

    // Step 1: Drain ALL microtasks first
    while (this.microtaskQueue.length > 0) {
      const task = this.microtaskQueue.shift()!;
      task();
    }

    // Step 2: Process events from Event Queue 1 by 1
    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift()!;
      event();

      // Check if event spawned new microtasks
      while (this.microtaskQueue.length > 0) {
        const nestedTask = this.microtaskQueue.shift()!;
        nestedTask();
      }
    }

    this.executionLog.push('[Event Loop] All queues drained.');
  }
}

// Execution Demonstration
const loop = new DartEventLoopSimulator();

console.log('Registering asynchronous actions across 2 distinct queues...');

// Enqueue Event Queue items (e.g. Future / Timer)
loop.scheduleEvent(() => {}, 'Future.delayed() Timer fired (Event 1)');
loop.scheduleEvent(() => {}, 'User Screen Tap Handled (Event 2)');

// Enqueue Microtask items (High-priority)
loop.scheduleMicrotask(() => {}, 'State Reconciliation Pass (Microtask 1)');
loop.scheduleMicrotask(() => {}, 'Animation Tick Guard (Microtask 2)');

// Run loop
loop.runEventLoop();

for (const entry of loop.executionLog) {
  console.log(entry);
}`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Event Loop',
          def: {
            en: 'Continuous execution engine picking and running tasks from queues sequentially on a single thread.',
            bn: 'ধারাবাহিক এক্সিকিউশন ইঞ্জিন যা একটি একক থ্রেডে কিউ থেকে এক এক করে কাজ নিয়ে চালায়।'
          }
        },
        {
          term: 'Microtask Queue',
          def: {
            en: 'Internal high-priority queue whose tasks are completely drained before any standard event can run.',
            bn: 'অভ্যন্তরীণ উচ্চ-অগ্রাধিকার কিউ যার সমস্ত কাজ শেষ না হওয়া পর্যন্ত সাধারণ ইভেন্ট চলতে পারে না।'
          }
        },
        {
          term: 'Event Queue',
          def: {
            en: 'Queue handling external events like I/O notifications, user gestures, timers, and Future callbacks.',
            bn: 'কিউ যা নেটওয়ার্ক আই/ও, ব্যবহারকারীর স্পর্শ, টাইমার এবং ফিউচারের কাজগুলো পরিচালনা করে।'
          }
        },
        {
          term: 'Future<T>',
          def: {
            en: 'Object representing the delayed eventual result (or error) of an asynchronous computation.',
            bn: 'অবজেক্ট যা কোনো অ্যাসিনক্রোনাস গণনার সম্ভাব্য ভবিষ্যৎ ফলাফল বা ত্রুটি ধারণ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'event-loop-queue-priority-ex1',
      kind: 'mcq',
      topic: 'event-loop-microtask-vs-event-queue-priority',
      question: {
        en: 'How does the Dart event loop prioritize execution when both the Microtask Queue and Event Queue contain waiting tasks?',
        bn: 'মাইক্রোটাস্ক কিউ এবং ইভেন্ট কিউ উভয়টিতেই কাজ জমা থাকলে Dart ইভেন্ট লুপ কীভাবে অগ্রাধিকার নির্ধারণ করে?'
      },
      options: [
        {
          en: 'It drains all tasks in the Microtask Queue completely before picking and executing the next item from the Event Queue',
          bn: 'ইভেন্ট কিউ থেকে পরবর্তী কাজ নেওয়ার আগে এটি মাইক্রোটাস্ক কিউয়ের সমস্ত কাজ সম্পূর্ণভাবে শেষ করে'
        },
        {
          en: 'It alternates 1 task from each queue in a round-robin schedule',
          bn: 'এটি প্রতিটি কিউ থেকে পর্যায়ক্রমে ১ টি করে কাজ নেয়'
        },
        {
          en: 'It executes the Event Queue first and deletes the Microtask Queue',
          bn: 'এটি আগে ইভেন্ট কিউ চালায় এবং মাইক্রোটাস্ক কিউ মুছে ফেলে'
        },
        {
          en: 'The queues run simultaneously on 2 different CPU cores',
          bn: 'কিউ দুটি একসাথে ২টি আলাদা সিপিইউ কোরে চলতে থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Microtask Queue has absolute priority over the Event Queue.',
        bn: 'জরুরি অভ্যন্তরীণ কাজ শেষ না করে ইভেন্ট লুপ বাইরের সাধারণ কাজ ধরে না।'
      },
      explanation: {
        en: 'The Microtask Queue represents urgent internal runtime updates. The event loop enforces that all microtasks must be cleared before external events run.',
        bn: 'এর মাধ্যমে অভ্যন্তরীণ স্টেট দ্রুত সমন্বয় করে সিস্টেমকে নির্ভরযোগ্য রাখা হয়।'
      }
    },
    {
      id: 'await-suspension-ui-thread-safety-ex2',
      kind: 'mcq',
      topic: 'await-non-blocking-event-loop-suspension',
      question: {
        en: 'What occurs to the main event loop thread when an async function in Flutter executes an "await http.get(...)" network call?',
        bn: 'Flutter-এ একটি অ্যাসিঙ্ক ফাংশন যখন "await http.get(...)" নেটওয়ার্ক কল চালায়, তখন মেইন ইভেন্ট লুপ থ্রেডে কী ঘটে?'
      },
      options: [
        {
          en: 'The function suspends cooperatively and yields the single thread back to the event loop so UI rendering and touch events continue at 60 FPS',
          bn: 'ফাংশনটি সাময়িক বিরতি নেয় এবং একক থ্রেডটিকে ইভেন্ট লুপের কাছে ছেড়ে দেয় যাতে ইউআই রেন্ডারিং ও স্পর্শ ইভেন্ট প্রতি সেকেন্ডে ৬০ ফ্রেমে চলতে পারে'
        },
        {
          en: 'The entire smartphone screen freezes until the network server responds',
          bn: 'সার্ভার সাড়া না দেওয়া পর্যন্ত পুরো স্মার্টফোনের স্ক্রিন ফ্রিজ হয়ে থাকে'
        },
        {
          en: 'The operating system creates 50 new OS threads',
          bn: 'অপারেটিং সিস্টেম ৫০ টি নতুন ওএস থ্রেড তৈরি করে'
        },
        {
          en: 'await blocks the motherboard CPU in an active spin loop',
          bn: 'await মাদারবোর্ড সিপিইউকে স্পিন লুপে আটকে রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'await yields the thread back to the event loop without blocking UI rendering.',
        bn: 'থ্রেড আটকে না রেখে মুক্ত করে দেওয়ায় ব্যবহারকারী কোনো ল্যাগ বা আটকানো অনুভব করেন না।'
      },
      explanation: {
        en: 'await is a cooperative suspension point. The function registers a completion callback on the Event Queue and frees the thread immediately for UI rendering.',
        bn: 'ফলে নেটওয়ার্ক কলের অপেক্ষায় থাকলেও স্ক্রিন সম্পূর্ণ মসৃণ ও সচল থাকে।'
      }
    },
    {
      id: 'named-parameters-required-keyword-ex3',
      kind: 'mcq',
      topic: 'named-parameters-required-annotation-null-safety',
      question: {
        en: 'Why is marking non-nullable named parameters with the "required" keyword mandatory in Dart (e.g. "void buildUser({required String name})")?',
        bn: 'Dart-এ নন-নালেবল নামযুক্ত প্যারামিটারে কেন "required" কি-ওয়ার্ড লেখা বাধ্যতামূলক (যেমন "void buildUser({required String name})")?'
      },
      options: [
        {
          en: 'Because named parameters are optional by default; without a default value or "required", omitting the parameter would illegally assign null to a non-nullable type',
          bn: 'কারণ নামযুক্ত প্যারামিটারগুলো ডিফল্টভাবে ঐচ্ছিক থাকে; ডিফল্ট মান বা "required" না থাকলে প্যারামিটার বাদ দিলে নন-নালেবল টাইপে নাল চলে আসত'
        },
        {
          en: 'Because required parameters run directly on the graphics card',
          bn: 'কারণ রিকোয়ার্ড প্যারামিটার সরাসরি গ্রাফিক্স কার্ডে চলে'
        },
        {
          en: 'Because required doubles the execution speed of functions',
          bn: 'কারণ required ফাংশনের এক্সিকিউশন গতি দ্বিগুণ করে দেয়'
        },
        {
          en: 'The required keyword was deprecated in Dart 3.0',
          bn: 'Dart ৩.০ সংস্করণে required কি-ওয়ার্ড বাতিল করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Named parameters are optional by default; non-nullable types need a default or required.',
        bn: 'নন-নালেবল টাইপ যাতে নাল না হয়ে যায়, সেজন্য মান দেওয়া নিশ্চিত করতেই required বসে।'
      },
      explanation: {
        en: 'Sound null safety requires every non-nullable variable to hold a non-null value. Since callers can omit named arguments, required enforces that the argument is supplied.',
        bn: 'ফলে কলার কোনো আর্গুমেন্ট না দিয়ে ফাংশন কল করতে পারে না, যা নাল এরর ঠেকায়।'
      }
    },
    {
      id: 'future-wait-parallel-execution-ex4',
      kind: 'mcq',
      topic: 'future-wait-concurrent-decomposition',
      question: {
        en: 'How does "Future.wait([fetchProfile(), fetchSettings()])" optimize loading data over sequential await statements?',
        bn: 'ধারাবাহিক await স্টেটমেন্টের তুলনায় "Future.wait([fetchProfile(), fetchSettings()])" কীভাবে ডেটা লোডিং দ্রুত করে?'
      },
      options: [
        {
          en: 'It initiates both asynchronous network calls concurrently in parallel, completing when all futures resolve, reducing total latency to the single slowest request',
          bn: 'এটি উভয় নেটওয়ার্ক রিকোয়েস্টকে সমান্তরালে একসাথে শুরু করে এবং সব ফিউচার শেষ হলে সাড়া দেয়, ফলে মোট সময় কমে সবচেয়ে ধীরগতির রিকোয়েস্টের সমান হয়'
        },
        {
          en: 'It deletes the network cache before making requests',
          bn: 'রিকোয়েস্ট পাঠানোর আগে এটি নেটওয়ার্ক ক্যাশ মুছে ফেলে'
        },
        {
          en: 'It limits the download speed to 100 kilobytes per second',
          bn: 'এটি ডাউনলোডের গতি প্রতি সেকেন্ডে ১০০ কিলোবাইটে সীমাবদ্ধ করে'
        },
        {
          en: 'Future.wait is only supported on Linux operating systems',
          bn: 'Future.wait কেবল লিনাক্স অপারেটিং সিস্টেমে সমর্থিত'
        }
      ],
      answer: 0,
      hint: {
        en: 'Future.wait runs multiple asynchronous tasks concurrently in parallel.',
        bn: 'একটির পর আরেকটি না করে সবগুলো কাজ একসাথে শুরু করার সেরা উপায়।'
      },
      explanation: {
        en: 'Sequential awaits add durations together (2s + 2s = 4s). Future.wait triggers both futures simultaneously, resolving in parallel in roughly 2 seconds total.',
        bn: 'এর মাধ্যমে অ্যাপ্লিকেশনের মোট অপেক্ষার সময় প্রায় অর্ধেক কমে যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-funcs-and-the-future',
    title: {
      en: 'Dart Functions & Futures Quiz',
      bn: 'Dart ফাংশন এবং ফিউচার কুইজ'
    },
    questions: [
      {
        id: 'quiz-unhandled-future-error-handling',
        kind: 'mcq',
        topic: 'future-error-handling-catcherror-try-catch',
        question: {
          en: 'What occurs if an asynchronous Future throws an exception that is not captured by a try/catch block or ".catchError()"?',
          bn: 'একটি অ্যাসিনক্রোনাস ফিউচার কোনো এক্সেপশন ছুড়লে তা যদি try/catch বা ".catchError()"-এ ধরা না পড়ে, তবে কী ঘটে?'
        },
        options: [
          {
            en: 'The error bubbles up as an unhandled asynchronous exception, triggering the zone error handler or crashing the application in production',
            bn: 'ত্রুটিটি একটি হ্যান্ডেলহীন অ্যাসিনক্রোনাস এক্সেপশন হিসেবে ছড়িয়ে পড়ে, যা জোন এরর হ্যান্ডলারকে সচল করে বা প্রোডাকশনে অ্যাপ ক্র্যাশ করায়'
          },
          {
            en: 'The compiler silently ignores the error and returns a 0',
            bn: 'কম্পাইলার নীরবে ত্রুটিটি উপেক্ষা করে ০ ফেরত দেয়'
          },
          {
            en: 'The smartphone turns on airplane mode automatically',
            bn: 'স্মার্টফোন স্বয়ংক্রিয়ভাবে অ্যারোপ্লেন মোড চালু করে'
          },
          {
            en: 'Unhandled errors are converted into strings',
            bn: 'হ্যান্ডেলহীন ত্রুটিগুলোকে স্ট্রিংয়ে রূপান্তর করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unhandled future errors propagate to the enclosing Zone error handler.',
          bn: 'ধরা না পড়লে ত্রুটি পুরো অ্যাপের জন্য বিপজ্জনক রূপ ধারণ করতে পারে।'
        },
        explanation: {
          en: 'Async errors must be guarded with try/catch inside async functions or .catchError(). Unhandled errors propagate to PlatformDispatcher.onError or crash the process.',
          bn: 'তাই সবসময় try/catch দিয়ে ফিউচার কলগুলোকে ঘিরে রাখা উচিত।'
        }
      },
      {
        id: 'quiz-future-microtask-vs-future-value',
        kind: 'mcq',
        topic: 'future-microtask-vs-future-event-queue',
        question: {
          en: 'Why would an engineer explicitly invoke "Future.microtask(() => ...)" instead of "Future(() => ...)"?',
          bn: 'একজন ইঞ্জিনিয়ার কেন "Future(() => ...)"-এর বদলে স্পষ্টভাবে "Future.microtask(() => ...)" ব্যবহার করবেন?'
        },
        options: [
          {
            en: 'To schedule the computation directly onto the high-priority Microtask Queue so it executes before any pending I/O or timer events on the Event Queue',
            bn: 'কাজটিকে সরাসরি উচ্চ-অগ্রাধিকার মাইক্রোটাস্ক কিউতে পাঠানোর জন্য, যাতে এটি ইভেন্ট কিউতে থাকা কোনো আই/ও বা টাইমার ইভেন্টের আগেই সম্পন্ন হয়'
          },
          {
            en: 'Because Future.microtask encrypts the code with AES-256',
            bn: 'কারণ Future.microtask কোডটিকে AES-256 দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'Because standard Future is not supported on Android devices',
            bn: 'কারণ সাধারণ ফিউচার অ্যান্ড্রয়েড ডিভাইসে চলে না'
          },
          {
            en: 'Future.microtask was deprecated in Dart 2.18',
            bn: 'Dart ২.১৮ সংস্করণে Future.microtask বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Future.microtask schedules work on the priority microtask queue.',
          bn: 'সাধারণ ইভেন্টের জন্য অপেক্ষা না করে দ্রুততম সময়ে কাজ সম্পন্ন করতে এটি দরকার।'
        },
        explanation: {
          en: 'Standard Future() schedules a callback on the Event Queue. Future.microtask() schedules on the Microtask Queue, guaranteeing immediate execution before the next event.',
          bn: 'ফলে সিস্টেমের ভেতরের অতি জরুরি কাজগুলো অগ্রাধিকার ভিত্তিতে আগেই সম্পন্ন হয়।'
        }
      },
      {
        id: 'quiz-tear-offs-function-passing',
        kind: 'mcq',
        topic: 'function-tear-offs-syntax-conciseness',
        question: {
          en: 'How does Dart\'s "tear-off" feature simplify passing methods to higher-order functions (e.g. "names.forEach(print);" instead of "names.forEach((n) => print(n));")?',
          bn: 'Dart-এর "টিয়ার-অফ" (tear-off) সুবিধা কীভাবে হায়ার-অর্ডারে মেথড পাঠানো সহজ করে (যেমন "names.forEach((n) => print(n));"-এর বদলে "names.forEach(print);")?'
        },
        options: [
          {
            en: 'It directly extracts the function or method reference as a closure without wrapping it in an unnecessary anonymous lambda wrapper, saving execution overhead',
            bn: 'এটি কোনো বাড়তি অ্যানোনিমাস ল্যাম্বডায় মোড়ানো ছাড়াই সরাসরি ফাংশনের রেফারেন্সটিকে ক্লোজার হিসেবে বের করে আনে, যা কোড ও মেমোরি বাঁচায়'
          },
          {
            en: 'It converts the list into a 64-bit integer index',
            bn: 'এটি লিস্টটিকে একটি ৬৪-বিট পূর্ণসংখ্যার ইনডেক্সে রূপান্তর করে'
          },
          {
            en: 'It deletes the print function from computer memory',
            bn: 'এটি মেমোরি থেকে প্রিন্ট ফাংশনটি মুছে ফেলে'
          },
          {
            en: 'Tear-offs are strictly forbidden in Flutter production code',
            bn: 'Flutter প্রোডাকশন কোডে টিয়ার-অফ ব্যবহার সম্পূর্ণ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'A tear-off provides the function reference directly without an extra closure layer.',
          bn: 'অপ্রয়োজনীয় বাড়তি ল্যাম্বডা না লিখে সরাসরি ফাংশনের নাম বসিয়ে দেওয়ার সুন্দর সিনট্যাক্স।'
        },
        explanation: {
          en: 'Tear-offs produce clean, readable code and eliminate the allocation of a redundant intermediate closure object by passing the function pointer directly.',
          bn: 'এর মাধ্যমে কোড অনেক পরিচ্ছন্ন হয় এবং বাড়তি অবজেক্ট তৈরির অপচয় বন্ধ হয়।'
        }
      },
      {
        id: 'quiz-synchronous-vs-asynchronous-generators',
        kind: 'mcq',
        topic: 'sync-vs-async-generators-yield-operators',
        question: {
          en: 'What return types and yield keywords differentiate synchronous generators from asynchronous generators in Dart?',
          bn: 'Dart-এ সিনক্রোনাস জেনারেটর এবং অ্যাসিনক্রোনাস জেনারেটরের মধ্যে কোন রিটার্ন টাইপ এবং কি-ওয়ার্ডগুলো পার্থক্য নির্দেশ করে?'
        },
        options: [
          {
            en: 'Synchronous generators return "Iterable<T>" marked with "sync*" using "yield"; asynchronous generators return "Stream<T>" marked with "async*" using "yield"',
            bn: 'সিনক্রোনাস জেনারেটর "yield" সহ "sync*" দিয়ে চিহ্নিত হয়ে "Iterable<T>" ফেরত দেয়; আর অ্যাসিনক্রোনাস জেনারেটর "yield" সহ "async*" দিয়ে চিহ্নিত হয়ে "Stream<T>" ফেরত দেয়'
          },
          {
            en: 'Synchronous generators only run on 32-bit hardware architectures',
            bn: 'সিনক্রোনাস জেনারেটর কেবল ৩২-বিট হার্ডওয়্যার আর্কিটেকচারে চলে'
          },
          {
            en: 'Asynchronous generators cannot emit numbers',
            bn: 'অ্যাসিনক্রোনাস জেনারেটর কোনো সংখ্যা নির্গমন করতে পারে না'
          },
          {
            en: 'Generators were replaced by raw loops in Dart 3.0',
            bn: 'Dart ৩.০ সংস্করণে জেনারেটর বাদ দিয়ে সাধারণ লুপ আনা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'sync* returns Iterable<T>; async* returns Stream<T>.',
          bn: 'তাত্ক্ষণিক তালিকার জন্য sync* ও Iterable, আর সময়ের সাথে সাথে ডেটা পাঠানোর জন্য async* ও Stream।'
        },
        explanation: {
          en: 'sync* produces on-demand synchronous Iterables. async* produces asynchronous Streams emitting events over time via cooperative yields.',
          bn: 'ফলে সিনক্রোনাস ও অ্যাসিনক্রোনাস উভয় ক্ষেত্রে জেনারেটর দিয়ে সহজে ডেটা স্ট্রিম তৈরি করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'widgets-and-the-build',
    title: {
      en: 'Declarative Composition & The Build Context',
      bn: 'ডিক্লেয়ারেটিভ কম্পোজিশন এবং বিল্ড কনটেক্সট'
    }
  }
};
