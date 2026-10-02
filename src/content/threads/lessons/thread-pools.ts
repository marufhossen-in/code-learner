import type { Lesson } from '../../../lib/types';

export const ThreadPoolsLesson: Lesson = {
  slug: 'thread-pools',
  tech: 'threads',
  title: {
    en: 'Thread Pools: Worker Queues, Work-Stealing & High-Throughput Concurrency',
    bn: 'থ্রেড পুল: ওয়ার্কার কিউ, ওয়ার্ক-স্টিলিং এবং উচ্চগতির কনকারেন্সি'
  },
  summary: {
    en: 'Overcome the severe memory and context-switching penalties of unbounded thread creation using Thread Pools. Master the worker queue pattern where a fixed pool of pre-allocated threads pulls tasks from a thread-safe blocking queue. Analyze optimal thread pool sizing formulas for CPU-bound versus I/O-bound workloads, graceful shutdown mechanics, and modern work-stealing schedulers.',
    bn: 'প্রতি রিকোয়েস্টে নতুন থ্রেড তৈরির মেমোরি ও কনটেক্সট সুইচ অপচয় দূর করতে থ্রেড পুল ব্যবহার করুন। প্রি-অ্যালোকেটেড থ্রেডের একটি স্থায়ী দল কীভাবে থ্রেড-সেফ ব্লকিং কিউ থেকে কাজ গ্রহণ করে তা শিখুন। সিপিইউ-বাউন্ড বনাম আই/ও-বাউন্ড কাজের জন্য পুল সাইজ নির্ধারণের গাণিতিক সূত্র, গ্রেসফুল শাটডাউন এবং আধুনিক ওয়ার্ক-স্টিলিং শিডিউলারের কার্যপদ্ধতি আয়ত্ত করুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'the-perils-of-thread-per-request',
      text: {
        en: 'The Perils of Unbounded Thread Creation',
        bn: 'অনিয়ন্ত্রিত থ্রেড সৃষ্টির মারাত্মক ঝুঁকি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you build network servers, a naive architecture creates a new thread for every incoming connection. If 10000 concurrent requests arrive in 1 second, the operating system attempts to allocate 10000 thread stacks consuming 10GB to 80GB of RAM. The CPU spends 90 percent of its cycles thrashing in context switches rather than executing application code.',
        bn: 'নেটওয়ার্ক সার্ভার তৈরির সময় প্রতিটি নতুন রিকোয়েস্টের জন্য নতুন থ্রেড তৈরি করা একটি ভয়ানক ভুল কৌশল। ১ সেকেন্ডে ১০০০০ সমান্তরাল রিকোয়েস্ট আসলে অপারেটিং সিস্টেম ১০০০০ টি থ্রেড স্ট্যাক তৈরি করতে গিয়ে ১০ গিগাবাইট থেকে ৮০ গিগাবাইট পর্যন্ত র‍্যাম অপচয় করে। আসল কোড চালানোর বদলে সিপিইউ তার ৯০ শতাংশ সময় কেবল কনটেক্সট সুইচে নষ্ট করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A Thread Pool eliminates this resource exhaustion. It pre-allocates a fixed pool of reusable worker threads (for example, 8 workers on an 8-core CPU) and a central thread-safe Blocking Queue. Incoming tasks wait safely in the queue until an idle worker thread becomes available to process them.',
        bn: 'একটি থ্রেড পুল মেমোরির এই মারাত্মক অপচয় রোধ করে। এটি শুরুতেই নির্দিষ্ট সংখ্যক পুনর্ব্যবহারযোগ্য কর্মী থ্রেড প্রস্তুত রাখে ( যেমন ৮-কোর সিপিইউতে ৮ জন কর্মী ) এবং একটি কেন্দ্রীয় ব্লকিং কিউ পরিচালনা করে। নতুন কাজগুলো সারিবদ্ধভাবে কিউতে অপেক্ষা করে এবং কর্মী খালি হওয়া মাত্রই কাজ শুরু করে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Persistent Worker Allocation',
            bn: '১. স্থায়ী কর্মী থ্রেড বরাদ্দ'
          },
          text: {
            en: 'The pool pre-spawns worker threads once during application bootstrap, entirely eliminating runtime thread creation latency on incoming requests.',
            bn: 'অ্যাপ্লিকেশন চালুর সময়ই পুল সমস্ত কর্মী থ্রেড তৈরি করে রাখে, ফলে রিকোয়েস্ট আসার পর নতুন থ্রেড সৃষ্টির কোনো বিলম্ব ঘটে না।'
          },
        },
        {
          title: {
            en: '2. Thread-Safe Blocking Task Queue',
            bn: '২. থ্রেড-সেফ ব্লকিং টাস্ক কিউ'
          },
          text: {
            en: 'Tasks are submitted to a FIFO queue guarded by condition variables. Idle worker threads sleep efficiently with zero CPU usage until a task arrives.',
            bn: 'কন্ডিশন ভেরিয়েবল দ্বারা সুরক্ষিত একটি FIFO কিউতে কাজগুলো জমা হয়। কোনো কাজ না থাকলে অলস কর্মীরা ০% সিপিইউ ব্যবহারে ঘুমে থাকে।'
          },
        },
        {
          title: {
            en: '3. Optimal Mathematical Pool Sizing',
            bn: '৩. পুলের আকারের গাণিতিক সূত্র'
          },
          text: {
            en: 'For CPU-bound tasks, set pool size to cores + 1 (8 cores = 9 threads) to prevent thrashing. For I/O-bound tasks, scale up based on wait time (8 cores with 90 percent wait = 80 threads).',
            bn: 'সিপিইউ-বাউন্ড কাজের জন্য পুল সাইজ হয় কোর + ১ ( ৮ কোরে ৯ টি থ্রেড )। আর আই/ও-বাউন্ড কাজের ক্ষেত্রে অপেক্ষার সময়ের ওপর ভিত্তি করে সংখ্যা বাড়ানো হয় ( ৮ কোরে ৯০ শতাংশ অপেক্ষায় ৮০ টি থ্রেড )। '
          },
        },
        {
          title: {
            en: '4. Work-Stealing Scheduling',
            bn: '৪. ওয়ার্ক-স্টিলিং শিডিউলিং'
          },
          text: {
            en: 'Modern schedulers give each worker a private deque. An idle thread steals tasks from the tail of a busy peer deque, eliminating lock contention bottlenecks.',
            bn: 'আধুনিক শিডিউলার প্রতিটি কর্মীকে নিজস্ব ডিকিউ (deque) দেয়। কোনো কর্মী কাজ শেষ করে ফেললে ব্যস্ত কর্মীর কিউয়ের পেছন থেকে কাজ ধার নিয়ে সম্পন্ন করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Thread Pool Architecture: Central Blocking Queue, Worker Recycling & Dispatch',
        bn: 'থ্রেড পুল আর্কিটেকচার: ব্লকিং কিউ, কর্মী পুনর্ব্যবহার এবং ডিসপ্যাচ'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Thread pool architecture showing task queue, persistent worker threads, and graceful load balancing">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">THREAD POOL ARCHITECTURE: WORKER QUEUES &amp; LOAD BALANCING</text>
  
  <!-- Left Side: Incoming Tasks -->
  <g transform="translate(30, 48)">
    <rect width="180" height="350" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="90" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">INCOMING TASKS</text>
    
    <g transform="translate(15, 42)">
      <rect width="150" height="36" rx="4" fill="#0f172a" stroke="#0284c7"/>
      <text x="75" y="22" fill="#cbd5e1" font-size="9" text-anchor="middle">Task #104 (HTTP POST)</text>
      
      <rect y="46" width="150" height="36" rx="4" fill="#0f172a" stroke="#0284c7"/>
      <text x="75" y="68" fill="#cbd5e1" font-size="9" text-anchor="middle">Task #103 (Resize Img)</text>
      
      <rect y="92" width="150" height="36" rx="4" fill="#0f172a" stroke="#0284c7"/>
      <text x="75" y="114" fill="#cbd5e1" font-size="9" text-anchor="middle">Task #102 (SQL Query)</text>
      
      <rect y="138" width="150" height="36" rx="4" fill="#0f172a" stroke="#0284c7"/>
      <text x="75" y="160" fill="#cbd5e1" font-size="9" text-anchor="middle">Task #101 (Send Email)</text>
      
      <text x="75" y="210" fill="#94a3b8" font-size="10" text-anchor="middle">1000s of requests</text>
      <text x="75" y="226" fill="#6ee7b7" font-size="9" text-anchor="middle">arrive safely without</text>
      <text x="75" y="240" fill="#6ee7b7" font-size="9" text-anchor="middle">allocating new stacks!</text>
    </g>
  </g>
  
  <!-- Arrow to Queue -->
  <path d="M 215 170 L 255 170" stroke="#38bdf8" stroke-width="2"/>
  
  <!-- Middle: Blocking Task Queue -->
  <g transform="translate(260, 48)">
    <rect width="210" height="350" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="105" y="24" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">BLOCKING TASK QUEUE</text>
    
    <g transform="translate(15, 45)">
      <rect width="180" height="55" rx="6" fill="#0f172a" stroke="#f59e0b"/>
      <text x="90" y="24" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">FIFO TASK BUFFER</text>
      <text x="90" y="42" fill="#cbd5e1" font-size="8" text-anchor="middle">Capacity: Bounded (e.g. 500)</text>
      
      <rect y="68" width="180" height="40" rx="4" fill="#1e293b"/>
      <text x="90" y="92" fill="#6ee7b7" font-size="9" text-anchor="middle">Task #98 (Waiting for worker)</text>
      
      <rect y="118" width="180" height="40" rx="4" fill="#1e293b"/>
      <text x="90" y="142" fill="#6ee7b7" font-size="9" text-anchor="middle">Task #99 (Waiting for worker)</text>
      
      <rect y="168" width="180" height="40" rx="4" fill="#1e293b"/>
      <text x="90" y="192" fill="#6ee7b7" font-size="9" text-anchor="middle">Task #100 (Waiting for worker)</text>
      
      <rect y="220" width="180" height="60" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="90" y="242" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">Condition Variable</text>
      <text x="90" y="260" fill="#cbd5e1" font-size="8" text-anchor="middle">Signals idle workers to wake</text>
    </g>
  </g>
  
  <!-- Arrow to Workers -->
  <path d="M 475 170 L 515 170" stroke="#10b981" stroke-width="2"/>
  
  <!-- Right Side: Fixed Worker Pool -->
  <g transform="translate(520, 48)">
    <rect width="290" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="145" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">FIXED WORKER POOL (4 WORKERS)</text>
    
    <g transform="translate(15, 38)">
      <!-- Worker 1 -->
      <rect width="260" height="60" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="80" y="24" fill="#38bdf8" font-size="10" font-weight="bold">Worker 1 (TID 1)</text>
      <text x="80" y="42" fill="#cbd5e1" font-size="8">Processing Task #95 on Core 0</text>
      <text x="210" y="32" fill="#6ee7b7" font-size="9" font-weight="bold">BUSY</text>
      
      <!-- Worker 2 -->
      <g transform="translate(0, 68)">
        <rect width="260" height="60" rx="6" fill="#064e3b" stroke="#10b981"/>
        <text x="80" y="24" fill="#38bdf8" font-size="10" font-weight="bold">Worker 2 (TID 2)</text>
        <text x="80" y="42" fill="#cbd5e1" font-size="8">Processing Task #96 on Core 1</text>
        <text x="210" y="32" fill="#6ee7b7" font-size="9" font-weight="bold">BUSY</text>
      </g>
      
      <!-- Worker 3 -->
      <g transform="translate(0, 136)">
        <rect width="260" height="60" rx="6" fill="#064e3b" stroke="#10b981"/>
        <text x="80" y="24" fill="#38bdf8" font-size="10" font-weight="bold">Worker 3 (TID 3)</text>
        <text x="80" y="42" fill="#cbd5e1" font-size="8">Processing Task #97 on Core 2</text>
        <text x="210" y="32" fill="#6ee7b7" font-size="9" font-weight="bold">BUSY</text>
      </g>
      
      <!-- Worker 4 -->
      <g transform="translate(0, 204)">
        <rect width="260" height="60" rx="6" fill="#0f172a" stroke="#38bdf8"/>
        <text x="80" y="24" fill="#38bdf8" font-size="10" font-weight="bold">Worker 4 (TID 4)</text>
        <text x="80" y="42" fill="#6ee7b7" font-size="8">Pulling Task #98 from queue!</text>
        <text x="210" y="32" fill="#38bdf8" font-size="9" font-weight="bold">READY</text>
      </g>
      
      <text x="130" y="290" fill="#94a3b8" font-size="9" text-anchor="middle">Workers never die: recycled indefinitely!</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">A fixed thread pool buffers load spikes in RAM queues, recycling persistent worker threads with zero context-switch thrashing</text>
</svg>`,
      caption: {
        en: 'A thread pool buffers incoming work in a thread-safe queue, processing hundreds of tasks using a small fixed team of recycled workers.',
        bn: 'থ্রেড পুল আগত কাজগুলোকে কিউতে জমা রাখে এবং অল্প কয়েকজন স্থায়ী কর্মীকে বারবার ব্যবহার করে শত শত কাজ সম্পন্ন করে।'
      },
    },
    {
      type: 'heading',
      id: 'thread-pool-simulation-code',
      text: {
        en: 'Implementing a Reusable Thread Pool Engine in Node.js',
        bn: 'Node.js-এ পুনর্ব্যবহারযোগ্য থ্রেড পুল তৈরি ও বাস্তবায়ন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how worker pools eliminate thread creation overhead and recycle execution contexts, inspect the following pool engine. It processes 10 asynchronous tasks across 3 persistent worker threads and performs a graceful shutdown.',
        bn: 'ওয়ার্কার পুল কীভাবে থ্রেড সৃষ্টির সময় বাঁচায় এবং বারবার একই থ্রেড ব্যবহার করে তা প্রত্যক্ষ করতে নিচের কোডটি পর্যালোচনা করুন। এটি ৩ জন স্থায়ী কর্মীর মাধ্যমে ১০ টি কাজ সম্পন্ন করে এবং সফলভাবে গ্রেসফুল শাটডাউন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'reusable-thread-pool.js',
      code: `// High-Performance Reusable Worker Thread Pool Simulator
// Recycles fixed worker threads across arbitrary task streams

class ProductionThreadPool {
  constructor(poolSize = 3) {
    this.poolSize = poolSize;
    this.taskQueue = [];
    this.activeWorkers = 0;
    this.isShuttingDown = false;
  }

  // Submit a task to the queue
  submitTask(taskId, taskPayload) {
    if (this.isShuttingDown) {
      throw new Error('RejectedExecution: Thread pool is shutting down.');
    }

    return new Promise((resolve, reject) => {
      this.taskQueue.push({ taskId, payload: taskPayload, resolve, reject });
      console.log('[SUBMIT] Task ' + taskId + ' queued (Queue depth: ' + this.taskQueue.length + ')');
      this.dispatchNext();
    });
  }

  // Dispatch work to idle worker threads
  dispatchNext() {
    if (this.activeWorkers >= this.poolSize || this.taskQueue.length === 0) {
      return;
    }

    this.activeWorkers++;
    const currentTask = this.taskQueue.shift();
    const workerId = this.activeWorkers;

    // Simulate persistent worker thread execution
    setTimeout(() => {
      console.log('-> [WORKER ' + workerId + '] Executing Task ' + currentTask.taskId + ': ' + currentTask.payload);
      
      // Simulate task compute work
      const result = 'Done_' + currentTask.taskId;
      currentTask.resolve(result);

      // Recycle worker thread
      this.activeWorkers--;
      this.dispatchNext(); // Pull next waiting task immediately
    }, 15);
  }

  // Graceful shutdown: wait for queue to drain
  async shutdown() {
    console.log('\\n[SHUTDOWN] Stopping task intake; draining queue...');
    this.isShuttingDown = true;
    while (this.taskQueue.length > 0 || this.activeWorkers > 0) {
      await new Promise(r => setTimeout(r, 10));
    }
    console.log('[SHUTDOWN] All tasks complete. All 3 worker threads retired cleanly!');
  }
}

async function runPoolDemo() {
  const pool = new ProductionThreadPool(3);
  console.log('=== Step 1: Submitting 10 Tasks to a 3-Worker Pool ===');

  const promises = [];
  for (let i = 1; i <= 10; i++) {
    promises.push(pool.submitTask('Job_' + i, 'Compute hash batch #' + i));
  }

  const results = await Promise.all(promises);
  console.log('\\n=== Results Processed by Recycled Workers ===');
  console.log('Completed tasks count:', results.length);

  await pool.shutdown();
}

runPoolDemo();`,
      caption: {
        en: 'The thread pool processes 10 jobs using only 3 recycled worker threads, eliminating context-switch thrashing.',
        bn: 'থ্রেড পুলটি মাত্র ৩ জন কর্মীকে বারবার ব্যবহার করে ১০ টি কাজ সফলভাবে সম্পন্ন করে এবং মেমোরির অপচয় রোধ করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Thread Pool Saturation & Rejection Policies',
        bn: 'থ্রেড পুল স্যাচুরেশন এবং রিজেকশন পলিসি'
      },
      text: {
        en: 'What happens when a thread pool task queue becomes completely full under heavy traffic spikes? A production pool must implement a Rejection Policy: 1. AbortPolicy: Throws an exception and returns HTTP 503 to the client; 2. CallerRunsPolicy: Forces the submitting thread to execute the task itself, naturally slowing down incoming request intake; 3. DiscardOldestPolicy: Drops the oldest unhandled task in the queue to make room for newer requests.',
        bn: 'অতিরিক্ত ট্রাফিকের চাপে থ্রেড পুলের কিউ সম্পূর্ণ পূর্ণ হয়ে গেলে কী ঘটে? প্রোডাকশন পুলে অবশ্যই রিজেকশন পলিসি থাকতে হয়: ১. AbortPolicy: এটি এরর ছুড়ে দিয়ে ক্লায়েন্টকে HTTP ৫০৩ স্ট্যাটাস পাঠায়; ২. CallerRunsPolicy: যে রিকোয়েস্ট পাঠিয়েছে তাকে দিয়েই কাজটি করায়, যার ফলে নতুন রিকোয়েস্ট আসার গতি স্বাভাবিকভাবেই কমে যায়; ৩. DiscardOldestPolicy: নতুন কাজের জায়গা করে দিতে কিউয়ের সবচেয়ে পুরনো অবহেলিত কাজটি বাতিল করে দেয়।'
      },
    },
  ],
  exercises: [
    {
      id: 'th-pool-ex-1',
      kind: 'predict',
      topic: "thread-pools",
      question: {
        en: 'For an 8-core CPU executing purely CPU-bound tasks, what is the standard optimal thread pool size formula (N_cpu + 1)? (9). Type the number.',
        bn: '৮-কোর সিপিইউতে বিশুদ্ধ সিপিইউ-বাউন্ড কাজের জন্য স্ট্যান্ডার্ড সর্বোত্তম থ্রেড পুল সাইজ ফর্মুলা ( N_cpu + ১ ) অনুযায়ী মোট থ্রেড সংখ্যা কত? ( ৯ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '9',
      hint: {
        en: '8 cores + 1 spare thread = 9.',
        bn: '৮ টি কোর + ১ টি অতিরিক্ত থ্রেড = ৯।'
      },
      explanation: {
        en: 'For CPU-bound tasks, N_cpu + 1 keeps all cores saturated while avoiding excessive context switching overhead.',
        bn: 'সিপিইউ-বাউন্ড কাজের জন্য কোর + ১ ফর্মুলা সমস্ত কোরকে ব্যস্ত রাখে এবং কনটেক্সট সুইচের অতিরিক্ত অপচয় রোধ করে।'
      },
    },
    {
      id: 'th-pool-ex-2',
      kind: 'mcq',
      topic: "thread-pools",
      question: {
        en: 'What catastrophic operational failure occurs if a high-traffic web server spawns a new thread per request without a thread pool?',
        bn: 'উচ্চ ট্রাফিকের ওয়েব সার্ভারে থ্রেড পুল ছাড়া প্রতি রিকোয়েস্টে নতুন থ্রেড তৈরি করলে কোন মারাত্মক বিপর্যয় ঘটে?'
      },
      options: [
        {
          en: 'Thread thrashing and Out-Of-Memory crash: the OS allocates thousands of thread stacks, exhausting RAM and wasting 90% of CPU cycles on context switches',
          bn: 'থ্রেড থ্র্যাশিং এবং মেমোরি সংকট: ওএস হাজার হাজার থ্রেড স্ট্যাক তৈরি করতে গিয়ে র‍্যাম শেষ করে ফেলে এবং সিপিইউ ৯০% সময় কেবল কনটেক্সট সুইচে নষ্ট করে',
        },
        {
          en: 'The server power cord catches fire immediately',
          bn: 'সার্ভারের পাওয়ার ক্যাবলে সাথে সাথে আগুন ধরে যায়',
        },
        {
          en: 'The website turns into a black and white printable PDF',
          bn: 'ওয়েবসাইটটি একটি সাদাকালো প্রিন্টযোগ্য পিডিএফ ফাইলে রূপান্তরিত হয়',
        },
        {
          en: 'The computer screen deletes all installed programming languages',
          bn: 'কম্পিউটার স্ক্রিন থেকে সমস্ত প্রোগ্রামিং ভাষা নিজে থেকেই মুছে যায়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Unbounded thread creation exhausts memory stacks and causes CPU thrashing.',
        bn: 'সীমাহীন থ্রেড তৈরি মেমোরি শেষ করে ফেলে এবং সিপিইউ কনটেক্সট সুইচে আটকে যায়।',
      },
      explanation: {
        en: 'Without pools, thousands of threads compete for CPU cores, causing thrashing where the CPU does nothing except context switching.',
        bn: 'পুল না থাকলে হাজার হাজার থ্রেডের প্রতিযোগিতায় সিপিইউ কাজের চেয়ে কনটেক্সট সুইচে বেশি সময় ব্যয় করে হ্যাং হয়ে যায়।'
      },
    },
    {
      id: 'th-pool-ex-3',
      kind: 'mcq',
      topic: "thread-pools",
      question: {
        en: 'How does a Work-Stealing thread pool algorithm maximize multi-core hardware utilization in modern runtimes?',
        bn: 'আধুনিক রানটাইমে ওয়ার্ক-স্টিলিং (Work-Stealing) থ্রেড পুল অ্যালগরিদম কীভাবে মাল্টি-কোর হার্ডওয়্যারের সর্বোচ্চ ব্যবহার নিশ্চিত করে?'
      },
      options: [
        {
          en: 'Idle worker threads pull tasks from the tail of busy sibling workers private deques, balancing loads without central lock bottlenecks',
          bn: 'অলস কর্মী থ্রেডগুলো ব্যস্ত সহোদর কর্মীদের নিজস্ব ডিকিউর পেছন থেকে কাজ নিয়ে সম্পন্ন করে, যা কোনো কেন্দ্রীয় লকের জট ছাড়াই কাজের সুষম বণ্টন ঘটায়',
        },
        {
          en: 'By stealing electricity from neighboring computers in the office',
          bn: 'অফিসের পাশের কম্পিউটারগুলো থেকে বিদ্যুৎ চুরি করার মাধ্যমে',
        },
        {
          en: 'By downloading external software programs without user permission',
          bn: 'ব্যবহারকারীর অনুমতি ছাড়াই বাইরের সফটওয়্যার ডাউনলোড করার মাধ্যমে',
        },
        {
          en: 'By physically moving the processor chip across the motherboard',
          bn: 'মাদারবোর্ডের ওপর প্রসেসর চিপকে শারীরিকভাবে সরানোর মাধ্যমে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Idle threads steal tasks from the deques of busy threads.',
        bn: 'অলস থ্রেড ব্যস্ত থ্রেডের কিউ থেকে অতিরিক্ত কাজ ধার নিয়ে চালায়।',
      },
      explanation: {
        en: 'Work-stealing eliminates central lock contention by giving each thread a double-ended queue, allowing idle threads to steal work dynamically.',
        bn: 'ওয়ার্ক-স্টিলিং প্রতিটি থ্রেডকে নিজস্ব কিউ দেয়, ফলে কেন্দ্রীয় লকের ঝামেলা ছাড়াই অলস থ্রেড অন্যের কাজ ভাগ করে নিতে পারে।'
      },
    },
    {
      id: 'th-pool-ex-4',
      kind: 'predict',
      topic: "thread-pools",
      question: {
        en: 'If a thread pool maintains 4 persistent workers, how many total worker threads are recycled across 100 completed tasks? (4). Type the number.',
        bn: 'একটি থ্রেড পুলে যদি ৪ জন স্থায়ী কর্মী থাকে, তবে ১০০ টি কাজ সম্পন্ন করার সময় সর্বমোট কয়টি কর্মী থ্রেডকে বারবার পুনর্ব্যবহার করা হয়? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'The worker team size is 4.',
        bn: 'কর্মী দলের মোট সংখ্যা হলো ৪।'
      },
      explanation: {
        en: 'The pool reuses the exact same 4 worker threads repeatedly, rather than spawning 100 separate threads.',
        bn: '১০০ টি আলাদা থ্রেড তৈরির বদলে পুলটি হুবহু একই ৪ জন কর্মীকে বারবার ব্যবহার করে কাজগুলো সম্পন্ন করে।'
      },
    },
  ],
  quiz: {
    id: "thread-pools-quiz",
    title: {
      en: 'Thread Pools & Concurrency Sizing Quiz',
      bn: 'থ্রেড পুল ও কনকারেন্সি সাইজিং কুইজ'
    },
    questions: [
      {
        id: 'th-pool-qz-1',
        kind: 'mcq',
        topic: 'preallocation-latency-advantage',
        question: {
          en: 'Why does pre-allocating threads in a thread pool improve system response latency compared to on-demand spawning?',
          bn: 'অন-ডিমান্ড তৈরির তুলনায় থ্রেড পুলে থ্রেড আগে থেকে প্রস্তুত রাখলে সিস্টেমের রেসপন্স লেটেন্সি উল্লেখযোগ্যভাবে উন্নত হয় কেন?'
        },
        options: [
          {
            en: 'Pre-allocation eliminates the microsecond kernel system call overhead of stack allocation, page mapping, and TCB initialization during request processing',
            bn: 'আগে থেকে প্রস্তুত রাখলে রিকোয়েস্ট প্রক্রিয়াকরণের সময় স্ট্যাক মেমোরি বরাদ্দ, পেজ ম্যাপিং এবং TCB তৈরির ধীরগতির কার্নেল সিস্টেম কলের প্রয়োজন হয় না',
          },
          {
            en: 'Because pre-allocated threads make the internet speed ten times faster',
            bn: 'কারণ আগে থেকে তৈরি থ্রেড ইন্টারনেটের গতি দশ গুণ বাড়িয়ে দেয়',
          },
          {
            en: 'Because computer hardware runs without electricity when threads are pre-allocated',
            bn: 'কারণ থ্রেড আগে তৈরি রাখলে কম্পিউটার বিদ্যুৎ ছাড়াই চলতে পারে',
          },
          {
            en: 'Because pre-allocated threads delete all cookies stored in the web browser',
            bn: 'কারণ আগে থেকে তৈরি থ্রেড ব্রাউজারের সমস্ত কুকিজ মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Avoids thread creation syscalls and stack allocation during request handling.',
          bn: 'রিকোয়েস্ট আসার পর নতুন করে মেমোরি বরাদ্দ ও কার্নেল সিস্টেম কলের সময় বাঁচায়।',
        },
        explanation: {
          en: 'Spawning a thread takes 10-50 microseconds. Pre-allocated threads are already alive and immediately dequeue tasks with zero startup delay.',
          bn: 'নতুন থ্রেড তৈরিতে ১০-৫০ মাইক্রোসেকেন্ড লাগে। পুলে থাকা প্রস্তুত কর্মীরা কোনো বিলম্ব ছাড়াই তাৎক্ষণিকভাবে কাজ শুরু করতে পারে।'
        },
      },
      {
        id: 'th-pool-qz-2',
        kind: 'mcq',
        topic: 'io-bound-pool-sizing-logic',
        question: {
          en: 'In an I/O-bound workload where threads spend 80% of their duration waiting on network databases, why can the thread pool size safely exceed the CPU core count?',
          bn: 'আই/ও-বাউন্ড কাজে যেখানে থ্রেডগুলো তাদের ৮০% সময় ডাটাবেজের অপেক্ষায় কাটায়, সেখানে থ্রেড পুল সাইজ সিপিইউ কোরের চেয়ে বেশি রাখা সম্পূর্ণ নিরাপদ কেন?'
        },
        options: [
          {
            en: 'Because waiting threads are descheduled into the Blocked state consuming 0% CPU, allowing other worker threads to utilize the core while the database responds',
            bn: 'কারণ অপেক্ষমাণ থ্রেডগুলো Blocked অবস্থায় ঘুমিয়ে থাকে এবং ০% সিপিইউ ব্যবহার করে, ফলে ডাটাবেজ সাড়া দেওয়ার মাঝে অন্য কর্মীরা কোর ব্যবহার করতে পারে',
          },
          {
            en: 'Because database queries turn into physical stone inside the computer',
            bn: 'কারণ ডাটাবেজ কুয়েরি কম্পিউটারের ভেতরে পাথরে রূপান্তরিত হয়',
          },
          {
            en: 'Because network cables possess unlimited computing processing power',
            bn: 'কারণ নেটওয়ার্ক কেবলের নিজস্ব অসীম কম্পিউটিং ক্ষমতা থাকে',
          },
          {
            en: 'Because I/O-bound programs do not use computer memory',
            bn: 'কারণ আই/ও-বাউন্ড প্রোগ্রামগুলো কম্পিউটারের কোনো মেমোরি ব্যবহার করে না',
          },
        ],
        answer: 0,
        hint: {
          en: 'Blocked I/O threads yield the CPU, leaving cores available for other workers.',
          bn: 'আই/ও-তে আটকে থাকা থ্রেড সিপিইউ ছেড়ে দেয়, ফলে অন্য কর্মীরা কাজ করার সুযোগ পায়।',
        },
        explanation: {
          en: 'When a thread waits on network I/O, the OS deschedules it. Sizing the pool larger keeps CPU cores saturated while other threads await I/O responses.',
          bn: 'নেটওয়ার্ক অপেক্ষায় থাকা থ্রেডকে ওএস ঘুমে পাঠিয়ে দেয়। পুল বড় রাখলে একদল যখন অপেক্ষায় থাকে, অন্য দল তখন কোরে কাজ করতে পারে।'
        },
      },
      {
        id: 'th-pool-qz-3',
        kind: 'mcq',
        topic: 'caller-runs-policy-benefit',
        question: {
          en: 'What unique operational benefit does the CallerRunsPolicy rejection strategy provide when a thread pool queue becomes fully saturated?',
          bn: 'থ্রেড পুলের কিউ সম্পূর্ণ পূর্ণ হয়ে গেলে CallerRunsPolicy কৌশলটি কোন অনন্য সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'It forces the client/submitting thread to execute the task synchronously, which naturally backpressures and throttles incoming request rates without dropping data',
            bn: 'এটি যে রিকোয়েস্ট পাঠিয়েছে তাকে দিয়েই কাজটি সরাসরি করায়, যার ফলে কোনো ডাটা নষ্ট না করেই নতুন রিকোয়েস্ট আসার গতি স্বাভাবিকভাবে নিয়ন্ত্রিত হয়',
          },
          {
            en: 'It increases the computer speaker sound volume to maximum',
            bn: 'এটি কম্পিউটারের স্পিকারের শব্দ সর্বোচ্চ মাত্রায় বাড়িয়ে দেয়',
          },
          {
            en: 'It restarts the entire operating system into recovery mode',
            bn: 'এটি পুরো অপারেটিং সিস্টেমকে রিকভারি মোডে রিস্টার্ট করে',
          },
          {
            en: 'It sends text messages to the user mobile phone',
            bn: 'এটি ব্যবহারকারীর মোবাইল ফোনে এসএমএস পাঠিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Forces the producer to do work, applying natural backpressure.',
          bn: 'উৎপাদককে দিয়েই কাজ করিয়ে ব্যাকপ্রেসার প্রয়োগ করে ইনকামিং গতি নিয়ন্ত্রণ করা।',
        },
        explanation: {
          en: 'CallerRunsPolicy forces the producer to execute tasks. While the producer is busy executing, it cannot submit new tasks, providing automatic backpressure.',
          bn: 'CallerRunsPolicy রিকোয়েস্টকারীকে দিয়ে কাজ করায়। সে নিজে কাজে ব্যস্ত থাকায় নতুন কাজ জমা দিতে পারে না, ফলে সিস্টেমে স্বাভাবিক ভারসাম্য আসে।'
        },
      },
      {
        id: 'th-pool-qz-4',
        kind: 'mcq',
        topic: 'graceful-shutdown-phases',
        question: {
          en: 'What sequence of actions defines a Graceful Shutdown in a production thread pool engine?',
          bn: 'প্রোডাকশন থ্রেড পুলে গ্রেসফুল শাটডাউন (Graceful Shutdown) বলতে সুনির্দিষ্ট কোন পদক্ষেপগুলোকে বোঝায়?'
        },
        options: [
          {
            en: 'The pool rejects new task submissions, allows all currently queued and executing tasks to finish to completion, and only then terminates the worker threads',
            bn: 'পুল নতুন কোনো কাজ গ্রহণ করা বন্ধ করে দেয়, কিউতে থাকা ও চলমান সমস্ত কাজ সম্পূর্ণ হওয়ার সুযোগ দেয় এবং সব কাজ শেষের পরই কেবল কর্মী থ্রেডগুলোকে বন্ধ করে',
          },
          {
            en: 'The pool immediately kills all threads midway through calculations and shuts off the computer',
            bn: 'পুল সমস্ত থ্রেডকে কাজের মাঝামাঝি মেরে ফেলে এবং সাথে সাথে কম্পিউটার বন্ধ করে দেয়',
          },
          {
            en: 'The pool formats all solid state drives and deletes source code files',
            bn: 'পুল সমস্ত এসএসডি ড্রাইভ ফরম্যাট করে সোর্স কোড ফাইলগুলো মুছে দেয়',
          },
          {
            en: 'The pool sends all uncompleted tasks via postal mail',
            bn: 'পুল সমস্ত অসমাপ্ত কাজ ডাকযোগে পাঠিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Stop taking new work, drain existing queue, then destroy workers cleanly.',
          bn: 'নতুন কাজ নেওয়া বন্ধ করা, চলমান ও কিউয়ের কাজ শেষ করা, তারপর কর্মীদের ছুটি দেওয়া।',
        },
        explanation: {
          en: 'Graceful shutdown guarantees zero data loss by refusing new tasks while draining the queue and finishing in-flight tasks cleanly.',
          bn: 'গ্রেসফুল শাটডাউন নিশ্চিত করে কোনো ডাটা যাতে হারিয়ে না যায়—নতুন কাজ বন্ধ রেখে এটি চলমান সকল কাজ সাফল্যের সাথে সম্পন্ন করে।'
        },
      },
    ],
  },
  next: {
    slug: 'threads-capstone',
    title: {
      en: 'Multi-Threaded Production Engine Capstone',
      bn: 'মাল্টি-থ্রেডেড প্রোডাকশন ইঞ্জিন ক্যাপস্টোন'
    },
  },
};
