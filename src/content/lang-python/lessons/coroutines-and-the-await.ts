import type { Lesson } from '../../../lib/types';

export const CoroutinesAndTheAwaitLesson: Lesson = {
  slug: 'coroutines-and-the-await',
  tech: 'lang-python',
  title: {
    en: 'Asynchronous Programming, Coroutines & Asyncio',
    bn: 'অ্যাসিনক্রোনাস প্রোগ্রামিং, করুটিন এবং Asyncio'
  },
  summary: {
    en: 'Master high-concurrency non-blocking I/O in Python: explore the asyncio single-threaded event loop, define asynchronous coroutines with async and await, manage concurrent Tasks, and orchestrate parallel network requests with asyncio.gather.',
    bn: 'পাইথনে উচ্চ-গতির নন-ব্লকিং I/O আয়ত্ত করুন: asyncio সিঙ্গেল-থ্রেডেড ইভেন্ট লুপ, async এবং await দিয়ে অ্যাসিনক্রোনাস করুটিন তৈরি, কনকারেন্ট টাস্ক পরিচালনা এবং asyncio.gather দিয়ে সমান্তরাল নেটওয়ার্ক রিকোয়েস্ট নির্বাহ।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'event-loop-and-coroutines-heading',
      text: {
        en: 'The Asyncio Event Loop, Coroutine Suspension, and Non-Blocking I/O',
        bn: 'Asyncio ইভেন্ট লুপ, করুটিন সাসপেনশন এবং নন-ব্লকিং I/O'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Traditional multi-threading in Python faces the constraints of the Global Interpreter Lock (GIL) and heavy operating system thread stack memory overhead. To solve high-concurrency network workloads, Python provides asyncio, an asynchronous framework running cooperative multitasking over a single-threaded event loop. Functions declared with "async def" define coroutines. Calling a coroutine function does not execute its body immediately; instead, it returns a coroutine object that must be scheduled on the event loop. The "await" expression temporarily suspends the coroutine, yielding control back to the event loop so other ready tasks can execute while waiting for network I/O.',
        bn: 'পাইথনে প্রচলিত মাল্টি-থ্রেডিং ব্যবস্থা গ্লোবাল ইন্টারপ্রেটার লক (GIL) এবং মেমোরি খরচের কারণে উচ্চ-গতির নেটওয়ার্ক সিস্টেমে কিছুটা সীমাবদ্ধ থাকে। এই সমস্যার সমাধানে পাইথনে asyncio যুক্ত করা হয়েছে, যা একটি একক থ্রেডে চলা ইভেন্ট লুপের ওপর কোঅপারেটিভ মাল্টিটাস্কিং পরিচালনা করে। "async def" দিয়ে লেখা ফাংশনগুলো মূলত করুটিন। এমন ফাংশন কল করলে কোড সাথে সাথে রান করে না; বরং একটি করুটিন অবজেক্ট রিটার্ন করে যা ইভেন্ট লুপে চালাতে হয়। আর "await" এক্সপ্রেশন করুটিনের কাজ সাময়িক স্থগিত করে ইভেন্ট লুপকে নিয়ন্ত্রণ ফিরিয়ে দেয়, ফলে নেটওয়ার্ক বা ডেটাবেস থেকে ডেটা আসার অপেক্ষাকালে অন্যান্য প্রস্তুত কাজগুলো নির্বিঘ্নে চলতে পারে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural lifecycle of the single-threaded asyncio event loop scheduling, suspending, and resuming coroutines.',
        bn: 'চিত্র ১: সিঙ্গেল-থ্রেডেড asyncio ইভেন্ট লুপে করুটিন শিডিউলিং, সাময়িক স্থগিত এবং পুনরায় চালুর কার্যপ্রবাহ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PYTHON ASYNCIO EVENT LOOP &amp; COROUTINE SCHEDULER</text>

  <!-- Step 1: Dispatch Coroutine -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Task Dispatch</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">async def fetch():</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">  data = await req()</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">create_task(fetch())</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Enters Loop Queue</text>
  </g>

  <!-- Step 2: Coroutine Suspension -->
  <g transform="translate(230, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Await Suspension</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">Hits await point</text>
    <text x="15" y="85" fill="#fbbf24" font-size="9" font-family="monospace">I/O socket waiting</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Yields CPU to loop</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Zero Blocking Waits</text>
  </g>

  <!-- Step 3: Event Loop Interleaving -->
  <g transform="translate(435, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#d97706" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Loop Interleaving</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">Executes Task B</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">Polls epoll/kqueue</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Socket data arrives</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">OS Selectors Active</text>
  </g>

  <!-- Step 4: Resume & Gather -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Coroutine Resume</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">asyncio.gather(*)</text>
    <text x="15" y="85" fill="#34d399" font-size="9" font-family="monospace">Resolves results</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">10k+ Connections</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Maximum Egress</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'tasks-and-gather-heading',
      text: {
        en: 'Concurrent Tasks, Orchestration with asyncio.gather, and Timeouts',
        bn: 'কনকারেন্ট টাস্ক, asyncio.gather দিয়ে সমন্বয় এবং টাইমআউট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To execute multiple coroutines concurrently rather than sequentially, applications wrap coroutines in Tasks using asyncio.create_task(). Tasks immediately register with the event loop, running in the background. The asyncio.gather(*tasks) utility aggregates multiple futures or coroutines into a unified concurrent operation, returning a list of resolved values once all tasks finish. To prevent rogue network sockets from hanging indefinitely, Python 3.11 provides the asynchronous context manager async with asyncio.timeout(5.0):, automatically cancelling the enclosed coroutine if it exceeds the deadline.',
        bn: 'একাধিক করুটিন একের পর এক না চালিয়ে সমান্তরালভাবে চালাতে সেগুলোকে asyncio.create_task() দিয়ে টাস্কে মুড়িয়ে নিতে হয়। টাস্কগুলো সাথে সাথে ইভেন্ট লুপে যুক্ত হয়ে ব্যাকগ্রাউন্ডে চলতে শুরু করে। আর asyncio.gather(*tasks) মেথড একাধিক করুটিনকে একসাথে যুক্ত করে একটি যৌথ অপারেশনে রূপ দেয় এবং সব কাজ শেষ হলে ফলাফলগুলোর একটি সম্মিলিত তালিকা প্রদান করে। কোনো নেটওয়ার্ক সংযোগ যেন অনন্তকাল আটকে না থাকে সেজন্য পাইথন ৩.১১ এ async with asyncio.timeout(5.0): কনটেক্সট ম্যানেজার আনা হয়েছে, যা সময় পার হলে স্বয়ংক্রিয়ভাবে কাজটি বাতিল করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Python asyncio event loop, coroutine suspension, and concurrent gather execution across 3 tasks.',
        bn: '৩ টি টাস্কের ক্ষেত্রে পাইথন asyncio ইভেন্ট লুপ, করুটিন সাসপেনশন এবং সমান্তরাল gather এক্সিকিউশনের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Python Asyncio Event Loop and Concurrent Coroutine Gather

// Simulating an asynchronous network request coroutine
export async function fetchApiPayload(endpoint: string, delayMs: number): Promise<{ endpoint: string; status: number }> {
  // Awaiting simulated network socket I/O (suspends execution)
  await new Promise((resolve) => setTimeout(resolve, delayMs));
  return { endpoint, status: 200 };
}

// Simulating asyncio.gather(*tasks)
export async function runConcurrentGather() {
  const t0 = Date.now();

  // Schedule 3 concurrent tasks on the event loop
  const task1 = fetchApiPayload('/api/users', 40);
  const task2 = fetchApiPayload('/api/products', 50);
  const task3 = fetchApiPayload('/api/orders', 30);

  // Await all 3 concurrent tasks together
  const results = await Promise.all([task1, task2, task3]);
  const totalElapsed = Date.now() - t0;

  console.log('Gather Completed in:', totalElapsed, 'ms');
  console.log('Total Resolved Results:', results.length); // 3
  return results;
}

// Execute demonstration
runConcurrentGather().then((data) => {
  data.forEach((r) => console.log(\`Fetched: \${r.endpoint} -> \${r.status}\`));
});`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Coroutine',
          def: {
            en: 'Specialized Python function declared with async def that can pause and resume execution via the await keyword.',
            bn: 'async def দিয়ে তৈরি বিশেষ ফাংশন যা await কিওয়ার্ডের মাধ্যমে কাজ সাময়িক স্থগিত ও পুনরায় শুরু করতে পারে।'
          }
        },
        {
          term: 'Event Loop',
          def: {
            en: 'Single-threaded runtime orchestrator monitoring I/O selectors, scheduling ready tasks, and driving coroutines.',
            bn: 'একক থ্রেডে চলা কেন্দ্রীয় নিয়ন্ত্রক যা কাজের তালিকা পর্যবেক্ষণ করে একে একে করুটিনগুলো কার্যকর করে।'
          }
        },
        {
          term: 'asyncio.Task',
          def: {
            en: 'Wrapper object scheduling a coroutine on the active event loop to run concurrently in the background.',
            bn: 'বিশেষ অবজেক্ট যা কোনো করুটিনকে ব্যাকগ্রাউন্ডে সমান্তরালভাবে চালানোর জন্য ইভেন্ট লুপে যুক্ত করে।'
          }
        },
        {
          term: 'asyncio.gather',
          def: {
            en: 'High-level utility executing multiple awaitable tasks concurrently and returning their results in a preserved sequence.',
            bn: 'উচ্চ-স্তরের মেথড যা একাধিক অ্যাসিঙ্ক কাজকে একসাথে চালিয়ে তাদের ফলাফল সঠিক ক্রমে একটি তালিকায় ফেরত দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'coroutine-call-returns-object-ex1',
      kind: 'mcq',
      topic: 'coroutine-call-execution-rule',
      question: {
        en: 'What happens when you invoke an async function directly without the "await" keyword (e.g., res = fetch_data())?',
        bn: '"await" কিওয়ার্ড ছাড়া সরাসরি কোনো অ্যাসিঙ্ক ফাংশন কল করলে (যেমন res = fetch_data()) কী ঘটে?'
      },
      options: [
        {
          en: 'It returns a coroutine object immediately without executing the function body; Python may raise a "coroutine was never awaited" warning',
          bn: 'ফাংশনের ভেতরের কোড না চালিয়েই এটি সাথে সাথে একটি করুটিন অবজেক্ট রিটার্ন করে এবং পাইথন একটি ওয়ার্নিং প্রদর্শন করতে পারে'
        },
        {
          en: 'It executes synchronously on the main thread and blocks the program',
          bn: 'এটি সাধারণ ফাংশনের মতো সাথে সাথে চলে পুরো প্রোগ্রাম আটকে রাখে'
        },
        {
          en: 'It creates a new operating system process',
          bn: 'এটি অপারেটিং সিস্টেমে একটি নতুন প্রসেস তৈরি করে'
        },
        {
          en: 'The computer restarts immediately',
          bn: 'কম্পিউটার সাথে সাথে রিস্টার্ট হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Async functions return un-awaited coroutine objects until awaited or wrapped in a Task.',
        bn: 'অ্যাসিঙ্ক ফাংশন await না করা পর্যন্ত কোড না চালিয়ে কেবল একটি করুটিন অবজেক্ট তৈরি করে।'
      },
      explanation: {
        en: 'Calling an async function constructs a coroutine object; it only executes when scheduled on an event loop via await or create_task.',
        bn: 'অ্যাসিঙ্ক ফাংশন কল করলে কেবল করুটিন তৈরি হয়; কোড রান করতে অবশ্যই await অথবা create_task দিতে হয়।'
      }
    },
    {
      id: 'blocking-call-in-event-loop-hazard-ex2',
      kind: 'mcq',
      topic: 'asyncio-blocking-call-hazard',
      question: {
        en: 'Why is invoking a blocking synchronous function like "time.sleep(5)" inside an async coroutine considered a critical flaw?',
        bn: 'একটি অ্যাসিঙ্ক করুটিনের ভেতর "time.sleep(5)" এর মতো ব্লকিং ফাংশন কল করা মারাত্মক ত্রুটি হিসেবে বিবেচিত হয় কেন?'
      },
      options: [
        {
          en: 'It freezes the entire single-threaded event loop for 5 seconds, stopping all other concurrent tasks from executing',
          bn: 'এটি সম্পূর্ণ সিঙ্গেল-থ্রেডেড ইভেন্ট লুপকে ৫ সেকেন্ডের জন্য অবরুদ্ধ করে দেয়, ফলে অন্য কোনো কাজ চলতে পারে না'
        },
        {
          en: 'It crashes the operating system kernel',
          bn: 'এটি অপারেটিং সিস্টেম কার্নেল ক্র্যাশ করে'
        },
        {
          en: 'time.sleep is permanently illegal in Python 3',
          bn: 'পাইথন ৩ এ time.sleep সম্পূর্ণ অবৈধ'
        },
        {
          en: 'It converts all strings into numbers',
          bn: 'এটি সমস্ত স্ট্রিংকে সংখ্যায় রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Asyncio relies on cooperative yielding; non-yielding blocking calls freeze the single thread.',
        bn: 'Asyncio একক থ্রেডে চলে; ব্লকিং কোড চালালে সেই থ্রেড আটকে গিয়ে পুরো ইভেন্ট লুপ থেমে যায়।'
      },
      explanation: {
        en: 'Use asyncio.sleep() instead of time.sleep() so the event loop remains unblocked and free to drive other tasks.',
        bn: 'ব্লকিং এড়াতে time.sleep() এর বদলে সর্বদা নন-ব্লকিং asyncio.sleep() ব্যবহার করা উচিত।'
      }
    },
    {
      id: 'asyncio-gather-concurrency-benefit-ex3',
      kind: 'mcq',
      topic: 'asyncio-gather-concurrent-speedup',
      question: {
        en: 'If 3 independent API requests each taking 100ms are awaited using asyncio.gather(req1, req2, req3), approximately how long will the total operation take?',
        bn: 'প্রতিটি ১০০ মিলিসেকেন্ড সময় নেওয়া ৩ টি স্বাধীন এপিআই রিকোয়েস্ট asyncio.gather দিয়ে চালালে মোট আনুমানিক কত সময় লাগবে?'
      },
      options: [
        {
          en: 'Approximately 100ms, because the requests are executed concurrently in parallel over the event loop',
          bn: 'আনুমানিক ১০০ মিলিসেকেন্ড, কারণ রিকোয়েস্টগুলো ইভেন্ট লুপে সমান্তরালভাবে সম্পন্ন হয়'
        },
        {
          en: '300ms, because they run sequentially one after another',
          bn: '৩০০ মিলিসেকেন্ড, কারণ তারা একের পর এক চলে'
        },
        {
          en: '1000ms',
          bn: '১০০০ মিলিসেকেন্ড'
        },
        {
          en: '0ms, because network requests take zero time',
          bn: '০ মিলিসেকেন্ড, কারণ কোনো সময় লাগে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Concurrent execution overlaps network wait times, bounded only by the slowest single request.',
        bn: 'সমান্তরাল কাজে নেটওয়ার্ক অপেক্ষার সময় পরস্পরের সাথে মিশে যায়, ফলে সবচেয়ে ধীর রিকোয়েস্টের সমান সময় লাগে।'
      },
      explanation: {
        en: 'asyncio.gather overlaps non-blocking I/O operations concurrently, reducing total latency to ~100ms.',
        bn: 'asyncio.gather কাজগুলোকে সমান্তরালে চালিয়ে মোট সময় ৩০০ মিলিসেকেন্ড থেকে কমিয়ে প্রায় ১০০ মিলিসেকেন্ডে নামিয়ে আনে।'
      }
    },
    {
      id: 'asyncio-create-task-scheduling-ex4',
      kind: 'mcq',
      topic: 'asyncio-create-task-background-run',
      question: {
        en: 'What does "task = asyncio.create_task(background_work())" accomplish in modern Python?',
        bn: 'আধুনিক পাইথনে "task = asyncio.create_task(background_work())" স্টেটমেন্টটি কী কাজ সম্পন্ন করে?'
      },
      options: [
        {
          en: 'It wraps the coroutine into an asyncio.Task and schedules it to run concurrently in the background on the active event loop',
          bn: 'এটি করুটিনটিকে একটি asyncio.Task এ মুড়িয়ে নেয় এবং সক্রিয় ইভেন্ট লুপে ব্যাকগ্রাউন্ডে সমান্তরালে চলার জন্য শিডিউল করে'
        },
        {
          en: 'It starts an operating system process on an external server',
          bn: 'এটি বহিরাগত সার্ভারে একটি নতুন ওএস প্রসেস চালু করে'
        },
        {
          en: 'It writes the coroutine code to a file',
          bn: 'এটি করুটিনের কোড একটি ফাইলে লিখে রাখে'
        },
        {
          en: 'It deletes the active event loop',
          bn: 'এটি সক্রিয় ইভেন্ট লুপটি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'create_task submits the coroutine to the event loop immediately without blocking caller execution.',
        bn: 'create_task বর্তমান কোড না থামিয়েই করুটিনটিকে ব্যাকগ্রাউন্ডে চলার ব্যবস্থা করে দেয়।'
      },
      explanation: {
        en: 'create_task schedules coroutines for background execution, returning a Task handle that can be queried or awaited later.',
        bn: 'create_task করুটিনকে ব্যাকগ্রাউন্ডে যুক্ত করে এবং একটি হ্যান্ডেল দেয় যা পরবর্তীতে নিয়ন্ত্রণ করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-coroutines-and-the-await',
    title: {
      en: 'Python Coroutines and Asyncio Concurrency Quiz',
      bn: 'পাইথন করুটিন এবং Asyncio কনকারেন্সি কুইজ'
    },
    questions: [
      {
        id: 'quiz-asyncio-run-entry-point',
        kind: 'mcq',
        topic: 'asyncio-run-lifecycle-management',
        question: {
          en: 'What is the recommended standard entry point to initialize, execute, and cleanly finalize an asyncio application?',
          bn: 'একটি asyncio অ্যাপ্লিকেশন চালু করা, চালানো এবং সঠিকভাবে বন্ধ করার প্রাতিষ্ঠানিক স্ট্যান্ডার্ড কমান্ড কোনটি?'
        },
        options: [
          {
            en: 'asyncio.run(main()), which manages event loop creation, task execution, and shutdown cleanup atomically',
            bn: 'asyncio.run(main()), যা স্বয়ংক্রিয়ভাবে নতুন ইভেন্ট লুপ তৈরি, টাস্ক নির্বাহ এবং কাজ শেষে লুপ বন্ধ করার দায়িত্ব নেয়'
          },
          {
            en: 'loop.start()',
            bn: 'loop.start()'
          },
          {
            en: 'thread.run(main)',
            bn: 'thread.run(main)'
          },
          {
            en: 'asyncio.start_server()',
            bn: 'asyncio.start_server()'
          }
        ],
        answer: 0,
        hint: {
          en: 'asyncio.run is the top-level entry point managing the complete event loop lifecycle.',
          bn: 'asyncio.run হলো মূল প্রবেশদ্বার যা ইভেন্ট লুপের সম্পূর্ণ জীবনচক্র পরিচালনা করে।'
        },
        explanation: {
          en: 'asyncio.run() instantiates a fresh event loop, executes the main coroutine, cancels lingering tasks, and closes the loop cleanly.',
          bn: 'asyncio.run() নিজে থেকেই ইভেন্ট লুপ তৈরি করে, কাজ শেষ হলে অবশিষ্ট টাস্কগুলো বাতিল করে নিরাপদ সমাপ্তি নিশ্চিত করে।'
        }
      },
      {
        id: 'quiz-asyncio-gather-return-exceptions',
        kind: 'mcq',
        topic: 'asyncio-gather-return-exceptions-flag',
        question: {
          en: 'What effect does passing "return_exceptions=True" have when executing asyncio.gather(*tasks)?',
          bn: 'asyncio.gather(*tasks) চালানোর সময় "return_exceptions=True" দিলে এর ফলাফল কী হয়?'
        },
        options: [
          {
            en: 'Exceptions raised by individual tasks are returned as exception objects in the results list alongside valid outputs, rather than cancelling remaining tasks',
            bn: 'কোনো নির্দিষ্ট টাস্কে এরর হলেও বাকি কাজগুলো বাতিল হয় না; বরং প্রাপ্ত ফলাফলের তালিকায় এরর অবজেক্টটি স্বাভাবিক ডেটার মতোই যুক্ত থাকে'
          },
          {
            en: 'It deletes all exceptions from memory',
            bn: 'এটি মেমোরি থেকে সব এরর মুছে ফেলে'
          },
          {
            en: 'It causes the entire program to crash instantly',
            bn: 'এটি সম্পূর্ণ প্রোগ্রাম সাথে সাথে ক্র্যাশ করায়'
          },
          {
            en: 'It converts exceptions into integer numbers',
            bn: 'এটি এররগুলোকে পূর্ণসংখ্যায় রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'return_exceptions=True prevents single task failures from abruptly aborting the entire batch.',
          bn: 'return_exceptions=True একটি টাস্কের ভুলের কারণে সম্পূর্ণ ব্যাচ নষ্ট হওয়া প্রতিরোধ করে।'
        },
        explanation: {
          en: 'Setting return_exceptions=True captures exception instances gracefully, allowing callers to inspect per-task success and failures.',
          bn: 'return_exceptions=True প্রতিটি টাস্কের সফলতা বা ব্যর্থতা আলাদাভাবে পরীক্ষা করার সুযোগ দেয়।'
        }
      },
      {
        id: 'quiz-async-iterator-dunder-methods',
        kind: 'mcq',
        topic: 'async-iterators-aiter-anext',
        question: {
          en: 'Which pair of dunder methods must an asynchronous iterator implement to support "async for item in stream:"?',
          bn: '"async for item in stream:" সমর্থন করতে একটি অ্যাসিনক্রোনাস ইটারেটরে কোন দুটি ডান্ডার মেথড থাকা আবশ্যক?'
        },
        options: [
          { en: '__aiter__() and __anext__()', bn: '__aiter__() এবং __anext__()' },
          { en: '__iter__() and __next__()', bn: '__iter__() এবং __next__()' },
          { en: '__async_iter__() only', bn: '__async_iter__() কেবল' },
          { en: '__stream_start__() and __stream_step__()', bn: '__stream_start__() এবং __stream_step__()' }
        ],
        answer: 0,
        hint: {
          en: 'Async iterator protocol uses the "a"-prefixed equivalents of standard iteration methods.',
          bn: 'সাধারণ ইটারেশনের নামের শুরুতে "a" যুক্ত মেথডগুলো অ্যাসিনক্রোনাস ইটারেশনে ব্যবহৃত হয়।'
        },
        explanation: {
          en: '__aiter__() returns the iterator object, and __anext__() returns an awaitable resolving each element or raising StopAsyncIteration.',
          bn: '__aiter__() ইটারেটর অবজেক্ট প্রদান করে আর __anext__() প্রতি ধাপে নতুন মান অ্যাওয়েট করার সুযোগ দেয়।'
        }
      },
      {
        id: 'quiz-cpu-bound-workloads-in-asyncio',
        kind: 'mcq',
        topic: 'asyncio-to-thread-cpu-bound',
        question: {
          en: 'How should CPU-intensive workloads (like machine learning inference or password hashing) be executed from within an asyncio application?',
          bn: 'মেশিন লার্নিং বা ক্রিপ্টোগ্রাফির মতো ভারী সিপিইউ কাজগুলোকে asyncio অ্যাপ্লিকেশনে কীভাবে চালানো উচিত?'
        },
        options: [
          {
            en: 'Offloaded to separate worker threads using asyncio.to_thread() or a ProcessPoolExecutor, preventing event loop starvation',
            bn: 'asyncio.to_thread() অথবা ProcessPoolExecutor দিয়ে আলাদা ব্যাকগ্রাউন্ড ওয়ার্কারে চালিয়ে, যাতে মূল ইভেন্ট লুপ অবরুদ্ধ না হয়'
          },
          {
            en: 'Executed directly in the main coroutine with await',
            bn: 'মূল করুটিনের ভেতরে সরাসরি await দিয়ে চালিয়ে'
          },
          {
            en: 'CPU-bound tasks are strictly prohibited in Python',
            bn: 'পাইথনে প্রসেসর-নিবিড় কাজ করা কঠোরভাবে নিষিদ্ধ'
          },
          {
            en: 'Converted into JSON strings before computation',
            bn: 'গণনা করার আগে জেসন স্ট্রিংয়ে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Heavy CPU processing blocks the single-threaded event loop unless offloaded to a thread pool or process pool.',
          bn: 'ভারী কাজগুলো আলাদা থ্রেডে বা প্রসেসে না সরালে একক থ্রেডের ইভেন্ট লুপ পুরোপুরি আটকে যায়।'
        },
        explanation: {
          en: 'asyncio.to_thread() delegates blocking computation to an OS thread pool, keeping the event loop responsive to concurrent traffic.',
          bn: 'asyncio.to_thread() ভারী কাজগুলোকে আলাদা থ্রেডে পাঠিয়ে মূল ইভেন্ট লুপকে সচল ও দ্রুতগতির রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-python-release',
    title: {
      en: 'Python Packaging, Virtual Environments & The GIL',
      bn: 'পাইথন প্যাকেজিং, ভার্চুয়াল এনভায়রনমেন্ট এবং GIL'
    }
  }
};
