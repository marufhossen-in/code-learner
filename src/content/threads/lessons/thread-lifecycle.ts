import type { Lesson } from '../../../lib/types';

export const ThreadLifecycleLesson: Lesson = {
  slug: 'thread-lifecycle',
  tech: 'threads',
  title: {
    en: 'Thread Lifecycle: States, Transitions & POSIX Thread Management',
    bn: 'থ্রেড জীবনচক্র: অবস্থা, রূপান্তর এবং POSIX থ্রেড ব্যবস্থাপনা'
  },
  summary: {
    en: 'Trace the complete lifecycle of a thread across New, Runnable, Running, Blocked, Waiting, and Terminated states. Master fundamental thread control operations including creation, joining, detachment, and graceful termination using POSIX pthreads and modern runtime primitives. Understand why unjoined joinable threads leak memory resources and how thread schedulers manage blocking I/O transitions.',
    bn: 'New, Runnable, Running, Blocked, Waiting এবং Terminated অবস্থার মধ্য দিয়ে একটি থ্রেডের সম্পূর্ণ জীবনচক্র পর্যবেক্ষণ করুন। POSIX pthreads ও আধুনিক রানটাইম ব্যবহার করে থ্রেড তৈরি, জয়েনিং, ডিটাচমেন্ট ও বন্ধ করার পদ্ধতি আয়ত্ত করুন। আনজয়েনড থ্রেড কীভাবে মেমোরি লিক ঘটায় এবং ব্লকিং আই/ও অপারেশনে শিডিউলার কীভাবে থ্রেড পরিচালনা করে তা বুঝুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'thread-state-machine',
      text: {
        en: 'The Six Discrete States of a Thread',
        bn: 'একটি থ্রেডের ছয়টি স্বতন্ত্র অবস্থা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you manage concurrent execution streams, an operating system does not execute all threads continuously. Instead, the OS thread scheduler orchestrates threads through a formal state machine to share physical CPU cores fairly.',
        bn: 'যখন আপনি কনকারেন্ট এক্সিকিউশন পরিচালনা করেন, তখন অপারেটিং সিস্টেম সকল থ্রেডকে একটানা চালায় না। বরং সিপিইউ কোরে সুষম বণ্টনের জন্য ওএস শিডিউলার একটি আনুষ্ঠানিক স্টেট মেশিনের মাধ্যমে থ্রেডগুলোর অবস্থা পরিবর্তন করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A thread begins in the NEW state upon memory allocation and transitions to RUNNABLE when placed in the ready queue. From there, it moves to RUNNING when dispatched onto a CPU core, enters BLOCKED when awaiting locks or I/O, and reaches TERMINATED upon task completion.',
        bn: 'মেমোরি বরাদ্দের সময় থ্রেড NEW অবস্থায় শুরু হয় এবং রেডি কিউতে গেলে RUNNABLE অবস্থায় রূপান্তরিত হয়। এরপর সিপিইউ কোরে নির্দেশ চালালে এটি RUNNING হয়, লক বা আই/ও অপেক্ষায় BLOCKED হয় এবং কাজ শেষ হলে TERMINATED অবস্থায় পৌঁছায়।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Thread Creation (pthread_create)',
            bn: '১. থ্রেড সৃষ্টি (pthread_create)'
          },
          text: {
            en: 'The operating system allocates a Thread Control Block (TCB) and private stack, placing the thread in the RUNNABLE queue ready for CPU dispatch.',
            bn: 'অপারেটিং সিস্টেম একটি থ্রেড কন্ট্রোল ব্লক (TCB) এবং নিজস্ব স্ট্যাক বরাদ্দ করে থ্রেডটিকে RUNNABLE কিউতে যুক্ত করে।'
          },
        },
        {
          title: {
            en: '2. CPU Scheduling (Dispatch & Preemption)',
            bn: '২. সিপিইউ শিডিউলিং ( ডিসপ্যাচ ও প্রিম্পশন )'
          },
          text: {
            en: 'The scheduler dispatches the thread to the RUNNING state on a core. When its time slice expires, a timer interrupt suspends it back to RUNNABLE.',
            bn: 'শিডিউলার থ্রেডটিকে সিপিইউ কোরে RUNNING অবস্থায় পাঠায়। নির্ধারিত সময় শেষ হলে টাইমার ইন্টারাপ্ট একে আবার RUNNABLE অবস্থায় ফেরত পাঠায়।'
          },
        },
        {
          title: {
            en: '3. Blocking on I/O or Synchronization Locks',
            bn: '৩. আই/ও বা সিঙ্ক্রোনাইজেশন লকে ব্লকিং'
          },
          text: {
            en: 'When a thread reads from a network socket or waits for an acquired mutex, it enters the BLOCKED state, freeing the CPU core for other active threads.',
            bn: 'যখন কোনো থ্রেড নেটওয়ার্ক থেকে ডাটা পড়ার জন্য অপেক্ষা করে বা মিউটেক্স লকের জন্য থামে, তখন এটি BLOCKED অবস্থায় গিয়ে সিপিইউ কোর খালি করে দেয়।'
          },
        },
        {
          title: {
            en: '4. Thread Reaping via pthread_join',
            bn: '৪. pthread_join দিয়ে রিসোর্স খালাস'
          },
          text: {
            en: 'Upon completing its function, the thread enters TERMINATED. The parent thread calls pthread_join() to harvest its exit code and release its stack memory.',
            bn: 'কাজ সম্পন্ন হলে থ্রেড TERMINATED অবস্থায় যায়। প্যারেন্ট থ্রেড pthread_join() কল করে এর রিটার্ন মান সংগ্রহ করে এবং স্ট্যাক মেমোরি মুক্ত করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Thread Lifecycle State Machine: Transitions, Scheduling & Join Reaping',
        bn: 'থ্রেড জীবনচক্র স্টেট মেশিন: রূপান্তর, শিডিউলিং ও রিসোর্স খালাস'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Thread lifecycle state machine diagram showing transitions between New, Runnable, Running, Blocked, and Terminated states">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">THREAD LIFECYCLE STATE MACHINE (POSIX &amp; OS SCHEDULER)</text>
  
  <!-- 1. NEW -->
  <g transform="translate(40, 80)">
    <circle cx="50" cy="50" r="45" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
    <text x="50" y="46" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">NEW</text>
    <text x="50" y="62" fill="#cbd5e1" font-size="8" text-anchor="middle">TCB Allocated</text>
  </g>
  
  <!-- Arrow NEW -> RUNNABLE -->
  <path d="M 135 130 L 195 130" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="165" y="122" fill="#38bdf8" font-size="9" text-anchor="middle">spawn()</text>
  
  <!-- 2. RUNNABLE -->
  <g transform="translate(200, 80)">
    <circle cx="50" cy="50" r="45" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
    <text x="50" y="46" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">RUNNABLE</text>
    <text x="50" y="62" fill="#cbd5e1" font-size="8" text-anchor="middle">In Ready Queue</text>
  </g>
  
  <!-- Arrow RUNNABLE <-> RUNNING -->
  <path d="M 295 115 L 365 115" stroke="#10b981" stroke-width="2"/>
  <text x="330" y="108" fill="#10b981" font-size="9" text-anchor="middle">Dispatch</text>
  
  <path d="M 365 145 L 295 145" stroke="#f59e0b" stroke-width="2"/>
  <text x="330" y="160" fill="#f59e0b" font-size="9" text-anchor="middle">Preempt</text>
  
  <!-- 3. RUNNING -->
  <g transform="translate(370, 80)">
    <circle cx="55" cy="50" r="48" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
    <text x="55" y="46" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">RUNNING</text>
    <text x="55" y="64" fill="#f8fafc" font-size="8" text-anchor="middle">Executing on Core</text>
  </g>
  
  <!-- Arrow RUNNING -> BLOCKED -->
  <path d="M 425 180 L 425 240" stroke="#ef4444" stroke-width="2"/>
  <text x="495" y="210" fill="#ef4444" font-size="9">Wait I/O or Mutex</text>
  
  <!-- 4. BLOCKED / WAITING -->
  <g transform="translate(370, 245)">
    <circle cx="55" cy="50" r="45" fill="#450a0a" stroke="#ef4444" stroke-width="2"/>
    <text x="55" y="46" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">BLOCKED</text>
    <text x="55" y="62" fill="#cbd5e1" font-size="8" text-anchor="middle">Sleeping / Idle</text>
  </g>
  
  <!-- Arrow BLOCKED -> RUNNABLE -->
  <path d="M 370 295 L 250 295 L 250 175" stroke="#38bdf8" stroke-width="2"/>
  <text x="290" y="315" fill="#38bdf8" font-size="9">I/O Complete / Mutex Free</text>
  
  <!-- Arrow RUNNING -> TERMINATED -->
  <path d="M 480 130 L 550 130" stroke="#64748b" stroke-width="2"/>
  <text x="515" y="122" fill="#cbd5e1" font-size="9" text-anchor="middle">Exit / Return</text>
  
  <!-- 5. TERMINATED -->
  <g transform="translate(555, 80)">
    <circle cx="50" cy="50" r="45" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
    <text x="50" y="44" fill="#cbd5e1" font-size="10" font-weight="bold" text-anchor="middle">TERMINATED</text>
    <text x="50" y="60" fill="#94a3b8" font-size="8" text-anchor="middle">Zombie Thread</text>
  </g>
  
  <!-- Arrow TERMINATED -> REAPED -->
  <path d="M 650 130 L 710 130" stroke="#10b981" stroke-width="2"/>
  <text x="680" y="122" fill="#10b981" font-size="9" text-anchor="middle">join()</text>
  
  <!-- 6. REAPED / DESTROYED -->
  <g transform="translate(715, 80)">
    <circle cx="50" cy="50" r="45" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
    <text x="50" y="44" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">REAPED</text>
    <text x="50" y="60" fill="#6ee7b7" font-size="8" text-anchor="middle">Memory Freed</text>
  </g>
  
  <!-- Warning Box below for Unjoined Leak -->
  <g transform="translate(520, 240)">
    <rect width="280" height="110" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="140" y="24" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">MEMORY LEAK HAZARD</text>
    <text x="15" y="45" fill="#cbd5e1" font-size="9">Joinable threads that are NEVER joined</text>
    <text x="15" y="60" fill="#cbd5e1" font-size="9">retain their stack &amp; return code in memory!</text>
    <text x="15" y="80" fill="#6ee7b7" font-size="9" font-weight="bold">Remedy: pthread_join() or detach</text>
    <text x="15" y="95" fill="#38bdf8" font-size="9">using pthread_detach() on launch.</text>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">Thread transitions are governed by the OS scheduler: sleeping threads yield CPU cores until unblocked</text>
</svg>`,
      caption: {
        en: 'A thread cycles between Runnable, Running, and Blocked states, finally requiring pthread_join to reap stack memory upon termination.',
        bn: 'একটি থ্রেড Runnable, Running এবং Blocked অবস্থার মধ্য দিয়ে আবর্তিত হয় এবং কাজ শেষে মেমোরি খালি করতে pthread_join প্রয়োজন হয়।'
      },
    },
    {
      type: 'heading',
      id: 'lifecycle-manager-code',
      text: {
        en: 'Simulating Thread State Transitions and Join Mechanics',
        bn: 'থ্রেড স্টেট ট্রানজিশন এবং জয়েন মেকানিজম সিমুলেশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how operating system thread schedulers handle blocking I/O and resource reaping, explore the following lifecycle manager. It executes state transitions and demonstrates how joining prevents thread memory leaks.',
        bn: 'ব্লকিং আই/ও এবং মেমোরি রিসোর্স খালাস করার পদ্ধতি বুঝতে নিচের লাইফসাইকেল ম্যানেজার কোডটি পর্যালোচনা করুন। এটি থ্রেডের বিভিন্ন অবস্থার রূপান্তর ঘটায় এবং জয়েন মেকানিজম কীভাবে মেমোরি লিক রোধ করে তা প্রদর্শন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'thread-lifecycle-manager.js',
      code: `// Thread Lifecycle and State Machine Simulation
// Demonstrates NEW -> RUNNABLE -> RUNNING -> BLOCKED -> TERMINATED -> REAPED

class ThreadLifecycleManager {
  constructor() {
    this.threadRegistry = new Map();
  }

  // Phase 1: Creation (spawns thread into NEW -> RUNNABLE)
  createThread(tid, threadName) {
    const thread = {
      tid,
      name: threadName,
      state: 'NEW',
      stackBytes: 1024 * 1024 * 2, // 2MB stack
      returnValue: null,
      isReaped: false
    };
    this.threadRegistry.set(tid, thread);
    console.log('[TID ' + tid + ' ' + thread.name + '] Created -> State: NEW');

    // Move to ready queue
    thread.state = 'RUNNABLE';
    console.log('[TID ' + tid + ' ' + thread.name + '] Enqueued in ready queue -> State: RUNNABLE');
    return thread;
  }

  // Phase 2: CPU Dispatch
  dispatch(tid, coreId) {
    const t = this.threadRegistry.get(tid);
    t.state = 'RUNNING';
    console.log('[TID ' + tid + ' ' + t.name + '] Dispatched to CPU Core ' + coreId + ' -> State: RUNNING');
  }

  // Phase 3: Blocking on I/O or Mutex
  blockThread(tid, waitReason) {
    const t = this.threadRegistry.get(tid);
    t.state = 'BLOCKED';
    console.log('[TID ' + tid + ' ' + t.name + '] Awaiting ' + waitReason + ' -> State: BLOCKED (CPU Core Freed)');
  }

  // Phase 4: Unblocking upon event
  unblockThread(tid) {
    const t = this.threadRegistry.get(tid);
    t.state = 'RUNNABLE';
    console.log('[TID ' + tid + ' ' + t.name + '] I/O completed -> Re-enqueued in RUNNABLE');
  }

  // Phase 5: Termination
  terminateThread(tid, exitCode) {
    const t = this.threadRegistry.get(tid);
    t.state = 'TERMINATED';
    t.returnValue = exitCode;
    console.log('[TID ' + tid + ' ' + t.name + '] Execution finished with code ' + exitCode + ' -> State: TERMINATED');
  }

  // Phase 6: Joining and Stack Memory Reaping
  joinThread(tid) {
    const t = this.threadRegistry.get(tid);
    if (t.state !== 'TERMINATED') {
      throw new Error('Cannot join thread TID ' + tid + ' while in state ' + t.state);
    }
    t.isReaped = true;
    const result = t.returnValue;
    console.log('\\n[MAIN THREAD] pthread_join(TID ' + tid + ') harvested result: ' + result);
    console.log('[MAIN THREAD] Reclaimed ' + (t.stackBytes / (1024 * 1024)) + 'MB execution stack memory cleanly!');
    return result;
  }
}

const manager = new ThreadLifecycleManager();

console.log('=== Step 1: Thread Creation & Execution ===');
const worker = manager.createThread(101, 'ImageCompressor');
manager.dispatch(101, 0);

console.log('\\n=== Step 2: Simulating Disk I/O Block ===');
manager.blockThread(101, 'Read Image Bytes from SSD');
manager.unblockThread(101);
manager.dispatch(101, 1);

console.log('\\n=== Step 3: Thread Completion ===');
manager.terminateThread(101, 42);

console.log('\\n=== Step 4: Parent Joins Child ===');
const result = manager.joinThread(101);
console.log('Final Result collected by parent:', result);`,
      caption: {
        en: 'The simulation traces a thread across creation, I/O blocking, termination, and stack memory reclamation via join.',
        bn: 'সিমুলেশনটি একটি থ্রেডের সৃষ্টি, আই/ও ব্লকিং, সমাপ্তি এবং জয়েনের মাধ্যমে স্ট্যাক মেমোরি পুনরুদ্ধারের সম্পূর্ণ ধাপগুলো দেখায়।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Joinable versus Detached Threads: Preventing Memory Leaks',
        bn: 'জয়েনঅ্যাবল বনাম ডিটাচড থ্রেড: মেমোরি লিক প্রতিরোধ'
      },
      text: {
        en: 'In POSIX pthreads and C++, threads are Joinable by default. When a joinable thread terminates, its return value and metadata remain allocated in memory until another thread calls pthread_join. If an application spawns 10000 joinable threads without joining them, system memory leaks rapidly. If a thread exit code is never needed, mark it as Detached using pthread_detach: the operating system will automatically destroy its stack and reclaim memory immediately upon termination.',
        bn: 'POSIX pthreads এবং সি++ এ থ্রেডগুলো ডিফল্টভাবে জয়েনঅ্যাবল থাকে। জয়েনঅ্যাবল থ্রেডের কাজ শেষ হলেও মেমোরি থেকে এর ডাটা মোছে না যতক্ষণ না অন্য কোনো থ্রেড pthread_join কল করে। কোনো অ্যাপ্লিকেশন যদি জয়েন না করে ১০০০০ জয়েনঅ্যাবল থ্রেড তৈরি করে, তবে দ্রুত মেমোরি লিক ঘটে। থ্রেডের ফিরতি মানের প্রয়োজন না থাকলে শুরুতেই pthread_detach ব্যবহার করে একে ডিটাচড করে দেওয়া উচিত, যাতে কাজ শেষের সাথে সাথেই ওএস মেমোরি মুছে ফেলে।'
      },
    },
  ],
  exercises: [
    {
      id: 'th-life-ex-1',
      kind: 'predict',
      topic: "thread-lifecycle",
      question: {
        en: 'How many primary lifecycle states (New, Runnable, Running, Blocked, Waiting, Terminated) does a thread transition through? (6). Type the number.',
        bn: 'একটি থ্রেড সর্বমোট কয়টি প্রধান লাইফসাইকেল অবস্থার ( New, Runnable, Running, Blocked, Waiting, Terminated ) মধ্য দিয়ে আবর্তিত হয়? ( ৬ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '6',
      hint: {
        en: 'Count the 6 discrete states.',
        bn: '৬ টি স্বতন্ত্র অবস্থা গণনা করুন।'
      },
      explanation: {
        en: 'A thread progresses through 6 formal states during its existence from allocation to termination.',
        bn: 'মেমোরি বরাদ্দ থেকে সমাপ্তি পর্যন্ত একটি থ্রেড ৬ টি স্বতন্ত্র অবস্থার মধ্য দিয়ে পরিচালিত হয়।'
      },
    },
    {
      id: 'th-life-ex-2',
      kind: 'mcq',
      topic: "thread-lifecycle",
      question: {
        en: 'What action does the operating system take when an active thread initiates a blocking disk read operation?',
        bn: 'একটি সক্রিয় থ্রেড যখন ব্লকিং ডিস্ক রিড অপারেশন শুরু করে, তখন অপারেটিং সিস্টেম কী পদক্ষেপ গ্রহণ করে?'
      },
      options: [
        {
          en: 'It moves the thread to the Blocked state, deschedules it, and assigns the physical CPU core to another runnable thread',
          bn: 'এটি থ্রেডটিকে Blocked অবস্থায় পাঠিয়ে দেয় এবং ফিজিক্যাল সিপিইউ কোরটি অন্য কোনো প্রস্তুত থ্রেডকে বরাদ্দ করে',
        },
        {
          en: 'It immediately disconnects the computer from the electrical outlet',
          bn: 'এটি তৎক্ষণাৎ কম্পিউটারের বৈদ্যুতিক সংযোগ বিচ্ছিন্ন করে দেয়',
        },
        {
          en: 'It increases the spinning speed of the computer cooling fan to maximum',
          bn: 'এটি কম্পিউটারের কুলিং ফ্যানের ঘূর্ণন গতি সর্বোচ্চ পর্যায়ে বাড়িয়ে দেয়',
        },
        {
          en: 'It erases all source code files stored on the solid state drive',
          bn: 'এটি এসএসডিতে সংরক্ষিত সমস্ত সোর্স কোড ফাইল মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Blocked threads yield CPU cores so other runnable threads can make progress.',
        bn: 'ব্লকড থ্রেড সিপিইউ কোর ছেড়ে দেয় যাতে প্রস্তুত থ্রেডগুলো কাজ চালিয়ে যেতে পারে।',
      },
      explanation: {
        en: 'Blocking I/O operations yield the CPU core, preventing processor cycles from being wasted during slow hardware operations.',
        bn: 'ব্লকিং আই/ও অপারেশনে থ্রেড কোর ছেড়ে দেয় যাতে ধীরগতির অপারেশনের সময় সিপিইউ অলস বসে না থাকে।'
      },
    },
    {
      id: 'th-life-ex-3',
      kind: 'mcq',
      topic: "thread-lifecycle",
      question: {
        en: 'Why must joinable threads be explicitly joined using pthread_join or language equivalents in multithreaded programs?',
        bn: 'মাল্টি-থ্রেডেড প্রোগ্রামে জয়েনঅ্যাবল থ্রেডগুলোকে স্পষ্টভাবে pthread_join দিয়ে জয়েন করা কেন জরুরি?'
      },
      options: [
        {
          en: 'To harvest the exit status and instruct the operating system to reclaim the thread private execution stack and TCB, preventing memory leaks',
          bn: 'থ্রেডের সমাপ্তি ফলাফল সংগ্রহ করতে এবং ওএসকে নিজস্ব স্ট্যাক ও TCB মেমোরি খালি করার নির্দেশ দিয়ে মেমোরি লিক রোধ করতে',
        },
        {
          en: 'Because joining a thread prints the computer screen in reverse colors',
          bn: 'কারণ থ্রেড জয়েন করলে কম্পিউটার স্ক্রিনের রঙ বিপরীত হয়ে যায়',
        },
        {
          en: 'Because unjoined threads make the computer mouse move randomly',
          bn: 'কারণ আনজয়েনড থ্রেডের কারণে মাউস এলোমেলোভাবে নড়াচড়া করতে থাকে',
        },
        {
          en: 'Because unjoined threads turn off the internet router permanently',
          bn: 'কারণ আনজয়েনড থ্রেড চিরতরে ইন্টারনেট রাউটার বন্ধ করে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Joining frees the terminated thread stack memory and reaps its metadata.',
        bn: 'জয়েন করার মাধ্যমে মৃত থ্রেডের মেমোরি ও স্ট্যাক পুরোপুরি মুক্ত করা হয়।',
      },
      explanation: {
        en: 'Without pthread_join, terminated joinable threads remain in memory as thread zombies, eventually exhausting process memory limits.',
        bn: 'pthread_join না করলে সমাপ্ত হওয়া থ্রেডগুলো মেমোরিতে জম্বি হিসেবে থেকে যায় এবং মেমোরি লিক ঘটায়।'
      },
    },
    {
      id: 'th-life-ex-4',
      kind: 'predict',
      topic: "thread-lifecycle",
      question: {
        en: 'If a worker thread returns an exit integer code of 42 upon termination, what number does pthread_join retrieve? (42). Type the number.',
        bn: 'একটি ওয়ার্কার থ্রেড সমাপ্তির সময় যদি ৪২ এক্সিট ইন্টিজার কোড প্রদান করে, তবে pthread_join কত সংখ্যাটি সংগ্রহ করবে? ( ৪২ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '42',
      hint: {
        en: 'The returned integer is 42.',
        bn: 'রিটার্ন করা ইন্টিজার মান হলো ৪২।'
      },
      explanation: {
        en: 'pthread_join receives the exact return pointer or status integer emitted by the worker thread function.',
        bn: 'pthread_join সরাসরি ওয়ার্কার থ্রেডের প্রদান করা সুনির্দিষ্ট রিটার্ন মানটি সংগ্রহ করে।'
      },
    },
  ],
  quiz: {
    id: "thread-lifecycle-quiz",
    title: {
      en: 'Thread Lifecycle & Management Quiz',
      bn: 'থ্রেড জীবনচক্র ও ব্যবস্থাপনা কুইজ'
    },
    questions: [
      {
        id: 'th-life-qz-1',
        kind: 'mcq',
        topic: 'blocked-vs-waiting-states',
        question: {
          en: 'In operating system thread schedulers, what is the technical distinction between the Blocked state and the Waiting state?',
          bn: 'অপারেটিং সিস্টেম থ্রেড শিডিউলারে Blocked অবস্থা এবং Waiting অবস্থার মধ্যে প্রযুক্তিগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'A thread is Blocked when suspended waiting for a hardware resource or mutex lock; it is Waiting when suspended waiting for an explicit signal from another thread or timer',
            bn: 'একটি থ্রেড Blocked হয় যখন কোনো হার্ডওয়্যার বা মিউটেক্স লকের জন্য আটকে থাকে; আর Waiting হয় যখন অন্য কোনো থ্রেডের সুনির্দিষ্ট সিগন্যাল বা টাইমারের অপেক্ষায় থাকে',
          },
          {
            en: 'Blocked is for desktop computers; Waiting is for mobile phones',
            bn: 'Blocked অবস্থা ডেস্কটপের জন্য প্রযোজ্য; আর Waiting অবস্থা কেবল ফোনের জন্য',
          },
          {
            en: 'Blocked threads consume zero electricity; Waiting threads consume maximum electricity',
            bn: 'Blocked থ্রেড কোনো বিদ্যুৎ ব্যবহার করে না; Waiting থ্রেড সর্বোচ্চ বিদ্যুৎ টানে',
          },
          {
            en: 'Both terms represent identical conditions with zero difference',
            bn: 'উভয় শব্দই কোনো পার্থক্য ছাড়া হুবহু একই অবস্থাকে নির্দেশ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Blocked waits on locks/hardware; Waiting waits on condition signals or timers.',
          bn: 'Blocked লকিং বা হার্ডওয়্যারে আটকে থাকে; Waiting সিগন্যাল বা টাইমারের জন্য থামে।',
        },
        explanation: {
          en: 'Blocked threads wait on external synchronization (mutexes, disk reads). Waiting threads suspend voluntarily until notified via condition variables.',
          bn: 'Blocked থ্রেড মিউটেক্স বা ডিস্কের অপেক্ষায় থাকে। আর Waiting থ্রেড কন্ডিশন ভেরিয়েবলের নোটিফিকেশনের অপেক্ষায় থাকে।'
        },
      },
      {
        id: 'th-life-qz-2',
        kind: 'mcq',
        topic: 'pthread-detach-mechanics',
        question: {
          en: 'What operational behavior occurs when a developer calls pthread_detach on an active thread?',
          bn: 'একজন ডেভেলপার যখন কোনো চলমান থ্রেডে pthread_detach কল করেন, তখন কী ধরনের আচরণ ঘটে?'
        },
        options: [
          {
            en: 'The thread is configured to automatically reclaim its own execution stack and TCB memory upon termination without requiring another thread to call pthread_join',
            bn: 'থ্রেডটিকে এমনভাবে চিহ্নিত করা হয় যাতে কাজ শেষের সাথে সাথেই ওএস নিজে থেকে এর স্ট্যাক মেমোরি খালি করে দেয়, অন্য কোনো থ্রেডের pthread_join কলের প্রয়োজন হয় না',
          },
          {
            en: 'The thread is physically disconnected from the computer power cord',
            bn: 'থ্রেডটিকে কম্পিউটারের পাওয়ার কর্ড থেকে শারীরিকভাবে বিচ্ছিন্ন করে দেওয়া হয়',
          },
          {
            en: 'The thread begins running backwards from the last instruction to the first',
            bn: 'থ্রেডটি শেষ নির্দেশ থেকে প্রথম নির্দেশের দিকে উল্টো চলা শুরু করে',
          },
          {
            en: 'The thread deletes the host operating system from the hard drive',
            bn: 'থ্রেডটি হার্ড ড্রাইভ থেকে মূল অপারেটিং সিস্টেমকে মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Detached threads clean up their own resources automatically on exit.',
          bn: 'ডিটাচড থ্রেড কাজ শেষে নিজেই নিজের মেমোরি রিসোর্স খালি করে দেয়।',
        },
        explanation: {
          en: 'Detached threads cannot be joined. The OS cleans up their resources as soon as they exit, preventing thread resource leaks.',
          bn: 'ডিটাচড থ্রেডকে জয়েন করা যায় না। এরা কাজ শেষ করার সাথে সাথে অপারেটিং সিস্টেম এদের সমস্ত মেমোরি মুক্ত করে দেয়।'
        },
      },
      {
        id: 'th-life-qz-3',
        kind: 'mcq',
        topic: 'asynchronous-cancellation-perils',
        question: {
          en: 'Why is forcibly terminating a thread asynchronously (such as calling pthread_cancel or Thread.stop()) considered extremely dangerous in production software?',
          bn: 'চলমান থ্রেডকে জোরপূর্বক বন্ধ করে দেওয়া ( যেমন pthread_cancel বা Thread.stop() ) প্রোডাকশন সফটওয়্যারে অত্যন্ত বিপজ্জনক কেন?'
        },
        options: [
          {
            en: 'The thread may be killed while holding a locked mutex or midway through writing to shared memory, leaving corrupted data structures and causing permanent deadlocks',
            bn: 'থ্রেডটি কোনো মিউটেক্স লক ধরে রাখা অবস্থায় বা শেয়ার্ড মেমোরিতে লেখার মাঝামাঝি মারা যেতে পারে, যার ফলে মেমোরি ক্ষতিগ্রস্ত হয় এবং স্থায়ী ডেডলক ঘটে',
          },
          {
            en: 'Because canceled threads cause the computer monitor to turn into water',
            bn: 'কারণ বাতিল করা থ্রেড কম্পিউটার মনিটরকে পানিতে রূপান্তর করে ফেলে',
          },
          {
            en: 'Because thread cancellation permanently breaks the physical space bar on keyboards',
            bn: 'কারণ থ্রেড বাতিল করলে কিবোর্ডের ফিজিক্যাল স্পেসবার স্থায়ীভাবে ভেঙে যায়',
          },
          {
            en: 'Because canceled threads send email messages to the computer manufacturer',
            bn: 'কারণ বাতিল করা থ্রেড কম্পিউটার প্রস্তুতকারকের কাছে ইমেইল পাঠিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Forced termination leaves locks locked and shared data half-written and corrupted.',
          bn: 'জোর করে বন্ধ করলে লক আটকে থাকে এবং ডাটা অর্ধসমাপ্ত অবস্থায় করাপ্ট হয়।',
        },
        explanation: {
          en: 'Asynchronous cancellation prevents cleanup handlers from running. If a thread held a mutex, all other threads waiting on that lock will deadlock forever.',
          bn: 'জোর করে থ্রেড বন্ধ করলে লক মুক্ত হয় না। ফলে সেই লকের জন্য অপেক্ষায় থাকা অন্য সব থ্রেড আজীবন ডেডলকে আটকে থাকে।'
        },
      },
      {
        id: 'th-life-qz-4',
        kind: 'mcq',
        topic: 'scheduler-unblock-trigger',
        question: {
          en: 'How does an operating system thread scheduler discover that a blocked thread is ready to return to the Runnable state?',
          bn: 'একটি ব্লকড থ্রেড যে পুনরায় Runnable অবস্থায় ফেরার জন্য প্রস্তুত, তা ওএস থ্রেড শিডিউলার কীভাবে জানতে পারে?'
        },
        options: [
          {
            en: 'Via hardware device interrupts (signaling I/O completion) or software wake-up notifications issued when another thread unlocks a mutex or signals a condition variable',
            bn: 'হার্ডওয়্যার ইন্টারাপ্টের মাধ্যমে ( আই/ও সম্পন্ন হওয়ার সংকেত ) অথবা অন্য কোনো থ্রেড মিউটেক্স আনলক বা কন্ডিশন ভেরিয়েবলে সংকেত দিলে প্রেরিত সফটওয়্যার নোটিফিকেশনের মাধ্যমে',
          },
          {
            en: 'By asking the user to press the Enter key on the keyboard',
            bn: 'ব্যবহারকারীকে কিবোর্ডের এন্টার কি চাপতে অনুরোধ করার মাধ্যমে',
          },
          {
            en: 'By checking the weather forecast on the internet every second',
            bn: 'প্রতি সেকেন্ডে ইন্টারনেটে আবহাওয়ার পূর্বাভাস যাচাই করার মাধ্যমে',
          },
          {
            en: 'By changing the computer desktop background wallpaper to blue',
            bn: 'কম্পিউটার ডেস্কটপের ব্যাকগ্রাউন্ডের ওয়ালপেপার নীল রঙে পরিবর্তন করার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Hardware interrupts for I/O completion, and software signals for unlocked mutexes.',
          bn: 'আই/ও-র জন্য হার্ডওয়্যার ইন্টারাপ্ট এবং লকের জন্য সফটওয়্যার সিগন্যাল।',
        },
        explanation: {
          en: 'When a disk read finishes, a hardware interrupt fires. When a lock is released, the unlock routine wakes up the next waiting thread in the scheduler queue.',
          bn: 'ডিস্কের কাজ শেষ হলে হার্ডওয়্যার ইন্টারাপ্ট আসে। আবার লক মুক্ত হলে আনলক কোডটি শিডিউলারের অপেক্ষায় থাকা পরবর্তী থ্রেডটিকে জাগিয়ে তোলে।'
        },
      },
    ],
  },
  next: {
    slug: 'race-conditions',
    title: {
      en: 'Race Conditions: Data Races & Synchronization Hazards',
      bn: 'রেস কন্ডিশন: ডাটা রেস এবং সিঙ্ক্রোনাইজেশন ঝুঁকি'
    },
  },
};
