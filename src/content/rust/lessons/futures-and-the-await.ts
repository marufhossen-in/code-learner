import type { Lesson } from '../../../lib/types';

export const FuturesAndTheAwaitLesson: Lesson = {
  slug: 'futures-and-the-await',
  tech: 'rust',
  title: {
    en: 'Async, Futures & The Tokio Runtime',
    bn: 'অ্যাসিঙ্ক, ফিউচার্স এবং টোকিও রানটাইম'
  },
  summary: {
    en: 'Master asynchronous systems programming in Rust. Understand zero-cost state machines, decode the poll-based Future trait lifecycle with Poll::Ready and Poll::Pending, drive concurrent tasks with the Tokio multi-threaded work-stealing reactor, and master Pin and Waker notifications.',
    bn: 'Rust-এ অ্যাসিঙ্ক্রোনাস সিস্টেম প্রোগ্রামিং আয়ত্ত করুন। জিরো-কস্ট স্টেট মেশিন, Poll::Ready এবং Poll::Pending সহ Future ট্রেইটের পোল-ভিত্তিক জীবনচক্র, টোকিও মাল্টি-থ্রেডেড ওয়ার্ক-স্টিলিং এক্সিকিউটর পরিচালনা এবং Pin ও Waker নোটিফিকেশনের গভীর বিশ্লেষণ।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'async-futures-state-machine-heading',
      text: {
        en: 'The Poll-Based Future Trait, State Machines, and Lazy Execution',
        bn: 'পোল-ভিত্তিক Future ট্রেইট, স্টেট মেশিন এবং লেজি এক্সিকিউশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In JavaScript or C#, asynchronous tasks push callbacks eagerly into an event queue as soon as they are invoked. In Rust (the memory-safe systems programming language), asynchronous operations are completely lazy and pull-based. A Rust Future executes zero instructions until an executor actively polls it. Every "async fn" is compiled by the compiler into a compact, heapless state machine enum. When polled via "Future::poll", the task advances until it encounters an I/O boundary. If the operation cannot finish immediately, it registers a Waker handle with the operating system reactor and yields "Poll::Pending". When the underlying network socket or timer becomes ready, the reactor calls "waker.wake()", notifying the executor to re-poll the task.',
        bn: 'JavaScript বা C#-এ যেকোনো অ্যাসিঙ্ক্রোনাস কাজ ডাকার সাথে সাথেই ইভেন্ট কিউতে সক্রিয়ভাবে যুক্ত হয়ে চলতে শুরু করে। কিন্তু Rust (মেমোরি-নিরাপদ সিস্টেম প্রোগ্রামিং ভাষা)-এ অ্যাসিঙ্ক অপারেশন সম্পূর্ণ লেজি এবং পুল-ভিত্তিক। যতক্ষণ না কোনো এক্সিকিউটর সরাসরি পোল করে, ততক্ষণ একটি ফিউচার এক লাইন কোডও চালায় না। প্রতিটি "async fn" কম্পাইলেশনের সময় কোনো হিপ মেমোরি খরচ না করে একটি ছোট স্টেট মেশিন এনামে পরিণত হয়। "Future::poll" ডাকার পর কাজটি আই/ও সীমা পর্যন্ত অগ্রসর হয়। সঙ্গে সঙ্গে কাজ শেষ না হলে এটি অপারেটিং সিস্টেমের কাছে একটি Waker হ্যান্ডেল জমা দিয়ে "Poll::Pending" রিটার্ন করে। পরবর্তীতে নেটওয়ার্ক সকেট বা টাইমার প্রস্তুত হলে ওএস রিঅ্যাক্টর "waker.wake()" ডেকে এক্সিকিউটরকে পুনরায় পোল করার সংকেত পাঠায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The pull-based Future lifecycle: Step-by-step coordination between the Tokio worker thread executor, Waker handle, and OS epoll reactor.',
        bn: 'চিত্র ১: পুল-ভিত্তিক Future জীবনচক্র: টোকিও ওয়ার্কার থ্রেড এক্সিকিউটর, Waker হ্যান্ডেল এবং ওএস epoll রিঅ্যাক্টরের মধ্যকার সুশৃঙ্খল সমন্বয়।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUST PULL-BASED ASYNC RUNTIME &amp; WAKER ARCHITECTURE</text>

  <!-- Step 1: Tokio Executor -->
  <g transform="translate(30, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#0284c7" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Tokio Executor</text>

    <rect x="10" y="45" width="150" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">tokio::spawn(task)</text>
    <text x="15" y="85" fill="#94a3b8" font-size="8" font-family="monospace">Work-Stealing Queue</text>

    <rect x="10" y="105" width="150" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Calls poll(&amp;cx)</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Drives Green Task</text>
  </g>

  <!-- Step 2: Future State Machine -->
  <g transform="translate(230, 65)">
    <rect width="180" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="180" height="30" rx="8" fill="#d97706" />
    <text x="90" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Future State Machine</text>

    <rect x="10" y="45" width="160" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">Read Socket at Line 12</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">No bytes in buffer</text>

    <rect x="10" y="105" width="160" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Return: Poll::Pending</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Yields CPU instantly</text>
  </g>

  <!-- Step 3: OS Reactor & Waker -->
  <g transform="translate(440, 65)">
    <rect width="180" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="180" height="30" rx="8" fill="#059669" />
    <text x="90" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. OS Reactor (Mio)</text>

    <rect x="10" y="45" width="160" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">epoll / kqueue</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">FD Registered with Waker</text>

    <rect x="10" y="105" width="160" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">waker.wake()</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Network Packet In</text>
  </g>

  <!-- Step 4: Completion -->
  <g transform="translate(650, 65)">
    <rect width="160" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="160" height="30" rx="8" fill="#9333ea" />
    <text x="80" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Re-Poll &amp; Ready</text>

    <rect x="10" y="45" width="140" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">Re-enters queue</text>
    <text x="15" y="85" fill="#c084fc" font-size="8" font-family="monospace">Second poll(&amp;cx)</text>

    <rect x="10" y="105" width="140" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Poll::Ready(result)</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Zero CPU spinwaste</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'tokio-runtime-pin-cancellation-heading',
      text: {
        en: 'The Tokio Runtime, Memory Pinning, and Cancellation Safety',
        bn: 'টোকিও রানটাইম, মেমোরি পিনিং এবং ক্যান্সেলেশন সুরক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rust leaves the choice of async runtime open to the ecosystem. Tokio stands as the production industry standard, delivering a multi-threaded work-stealing threadpool where idle CPU cores steal scheduled tasks from busy worker queues to balance latency. Under the hood, async state machines frequently contain self-referential pointers: an internal buffer pointer pointing to an adjacent field within the same state machine. If such a struct moved in memory, the pointer would instantly dangle. Rust prevents this catastrophe through "Pin". Pinning guarantees that once a Future is pinned, its physical memory address remains immutable. Additionally, developers must design for cancellation safety: when "tokio::select!" terminates a losing branch, dropping the future mid-execution must not corrupt data streams.',
        bn: 'Rust কোনো একক অ্যাসিঙ্ক রানটাইম নিজের কোরে চাপিয়ে না দিয়ে ইকোসিস্টেমের হাতে ছেড়ে দিয়েছে। টোকিও (Tokio) হলো ইন্ডাস্ট্রির মূল প্রোডাকশন স্ট্যান্ডার্ড, যা একটি মাল্টি-থ্রেডেড ওয়ার্ক-স্টিলিং থ্রেডপুল সরবরাহ করে যেখানে অলস সিপিইউ কোরগুলো ব্যস্ত কোরের কিউ থেকে কাজ ভাগ করে নেয়। এর আড়ালে অ্যাসিঙ্ক স্টেট মেশিনগুলো প্রায়শই সেলফ-রেফারেনশিয়াল পয়েন্টার ধারণ করে, যেখানে একটি অভ্যন্তরীণ বাফার পয়েন্টার একই স্ট্রাক্টের অন্য ফিল্ডকে নির্দেশ করে। মেমোরিতে এই স্ট্রাক্টের ঠিকানা বদলে গেলে পয়েন্টার নষ্ট হয়ে যেত। Rust এই বিপর্যয় ঠেকাতে "Pin" ব্যবস্থা ব্যবহার করে। পিন করা নিশ্চিত করে যে ফিউচারের মেমোরি ঠিকানা কখনোই স্থানান্তরিত হবে না। তাছাড়া ডেভেলপারদের ক্যান্সেলেশন সেফটি নিশ্চিত করতে হয়; যেমন "tokio::select!"-এ কোনো অসমাপ্ত শাখা ড্রপ হলে ডেটা নষ্ট হওয়া বন্ধ করা জরুরি।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Rust pull-based poll executor, state machine transitions, and waker notifications.',
        bn: 'Rust পুল-ভিত্তিক পোল এক্সিকিউটর, স্টেট মেশিন রূপান্তর এবং Waker নোটিফিকেশনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Rust Future Trait Lifecycle, State Machine, and Waker System

export type PollResult<T> =
  | { status: 'Ready'; value: T }
  | { status: 'Pending' };

export interface Waker {
  wake(): void;
}

export interface AsyncContext {
  waker: Waker;
}

// Simulating the Rust "Future" trait contract
export interface RustFuture<T> {
  poll(cx: AsyncContext): PollResult<T>;
}

// State Machine representing an "async fn fetch_user_data(id: number) -> string"
export class SimulatedAsyncFetchFuture implements RustFuture<string> {
  private state: 'Initial' | 'AwaitingNetworkSocket' | 'Complete' = 'Initial';
  private packetReceived = false;

  constructor(public recordId: number) {}

  public poll(cx: AsyncContext): PollResult<string> {
    switch (this.state) {
      case 'Initial': {
        console.log('[Poll 1] State machine entered. Transitioning to AwaitingNetworkSocket.');
        this.state = 'AwaitingNetworkSocket';

        // Simulate OS background network packet reception
        setTimeout(() => {
          console.log('[OS Reactor] Network packet arrived for record:', this.recordId);
          this.packetReceived = true;
          cx.waker.wake(); // Notify the executor to schedule re-polling!
        }, 10);

        return { status: 'Pending' };
      }
      case 'AwaitingNetworkSocket': {
        if (!this.packetReceived) {
          console.log('[Poll N] Socket still empty. Yielding Poll::Pending.');
          return { status: 'Pending' };
        }

        console.log('[Poll 2] Packet ready! Transitioning to Complete.');
        this.state = 'Complete';
        return {
          status: 'Ready',
          value: 'User Record Payload for ID: ' + this.recordId
        };
      }
      case 'Complete':
        throw new Error('Polled a future that has already resolved to Ready!');
    }
  }
}

// Simulated Tokio Work-Stealing Task Executor
export class MiniTokioExecutor {
  private runQueue: RustFuture<unknown>[] = [];

  public spawn<T>(future: RustFuture<T>, onComplete: (res: T) => void): void {
    const task = future as RustFuture<unknown>;
    this.runQueue.push(task);

    const context: AsyncContext = {
      waker: {
        wake: () => {
          console.log('[Waker] Wake signal triggered. Re-queuing task for polling.');
          this.runQueue.push(task);
          this.drainRunQueue(onComplete as (res: unknown) => void);
        }
      }
    };

    this.drainRunQueue(onComplete as (res: unknown) => void, context);
  }

  private drainRunQueue(onComplete: (res: unknown) => void, contextOverride?: AsyncContext): void {
    while (this.runQueue.length > 0) {
      const task = this.runQueue.shift()!;
      const cx: AsyncContext = contextOverride || {
        waker: {
          wake: () => {
            this.runQueue.push(task);
            this.drainRunQueue(onComplete);
          }
        }
      };

      const result = task.poll(cx);
      if (result.status === 'Ready') {
        console.log('[Executor] Task completed successfully!');
        onComplete(result.value);
      } else {
        console.log('[Executor] Task returned Poll::Pending. Worker thread released.');
      }
    }
  }
}

// Execution Demonstration
const executor = new MiniTokioExecutor();
const fetchTask = new SimulatedAsyncFetchFuture(42);

executor.spawn(fetchTask, (finalValue) => {
  console.log('Final Result Received:', finalValue);
});`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Future Trait',
          def: {
            en: 'The foundational asynchronous contract in Rust with a poll method returning either Poll::Ready or Poll::Pending.',
            bn: 'Rust-এর মৌলিক অ্যাসিঙ্ক চুক্তি যার poll মেথড হয় Poll::Ready নয়তো Poll::Pending ফেরত দেয়।'
          }
        },
        {
          term: 'Waker',
          def: {
            en: 'A thread-safe notification handle that an I/O reactor uses to inform the executor that a paused task is ready to re-poll.',
            bn: 'একটি নোটিফিকেশন হ্যান্ডেল যা আই/ও প্রস্তুত হলে এক্সিকিউটরকে থেমে থাকা কাজটি আবার পোল করার সংকেত দেয়।'
          }
        },
        {
          term: 'Pinning (Pin)',
          def: {
            en: 'Memory wrapper guaranteeing that self-referential async state machine structs cannot be moved to new addresses.',
            bn: 'মেমোরি সুরক্ষা যা নিশ্চিত করে যে সেলফ-রেফারেনশিয়াল অ্যাসিঙ্ক স্টেট মেশিন মেমোরিতে নতুন ঠিকানায় নড়াচড়া করবে না।'
          }
        },
        {
          term: 'Tokio Runtime',
          def: {
            en: 'The standard multi-threaded work-stealing asynchronous executor and non-blocking I/O event reactor in Rust.',
            bn: 'Rust-এর স্ট্যান্ডার্ড মাল্টি-থ্রেডেড ওয়ার্ক-স্টিলিং অ্যাসিঙ্ক এক্সিকিউটর এবং নন-ব্লকিং আই/ও রিঅ্যাক্টর।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'future-trait-lazy-nature-ex1',
      kind: 'mcq',
      topic: 'rust-future-lazy-pull-based-model',
      question: {
        en: 'How does Rust\'s asynchronous execution model differ fundamentally from JavaScript Promises or C# Tasks?',
        bn: 'JavaScript প্রমিজ বা C# টাস্কের তুলনায় Rust-এর অ্যাসিঙ্ক্রোনাস এক্সিকিউশন মডেলের মৌলিক পার্থক্য কী?'
      },
      options: [
        {
          en: 'Rust Futures are completely lazy and pull-based: they execute zero instructions until an executor actively polls them via "Future::poll"',
          bn: 'Rust ফিউচার সম্পূর্ণ লেজি এবং পুল-ভিত্তিক: যতক্ষণ না কোনো এক্সিকিউটর সরাসরি "Future::poll" দিয়ে ডাকে, ততক্ষণ তারা এক লাইন কোডও চালায় না'
        },
        {
          en: 'Rust creates a new operating system process for every single await expression',
          bn: 'Rust প্রতিটি await এক্সপ্রেশনের জন্য একটি করে নতুন ওএস প্রসেস তৈরি করে'
        },
        {
          en: 'Rust runs all asynchronous code inside a 32-bit web browser engine',
          bn: 'Rust সমস্ত অ্যাসিঙ্ক কোড একটি ৩২-বিট ওয়েব ব্রাউজার ইঞ্জিনের ভেতরে চালায়'
        },
        {
          en: 'Rust Futures require garbage collection to release completed tasks',
          bn: 'সম্পন্ন টাস্ক মুক্ত করার জন্য Rust ফিউচারের একটি রানটাইম গার্বেজ কালেক্টর প্রয়োজন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Rust futures do nothing unless actively polled by an executor.',
        bn: 'যতক্ষণ এক্সিকিউটর পোল না করে, ততক্ষণ ফিউচার শান্ত অবস্থায় পড়ে থাকে।'
      },
      explanation: {
        en: 'In Rust, futures represent zero-cost state machines that only advance when polled. This pull model avoids unsolicited background allocations and idle CPU churn.',
        bn: 'এই পুল-ভিত্তিক পদ্ধতির কারণে অকারণে মেমোরি নষ্ট বা সিপিইউর বিদ্যুৎ অপচয় হয় না।'
      }
    },
    {
      id: 'waker-purpose-event-loop-ex2',
      kind: 'mcq',
      topic: 'waker-wake-executor-notification-role',
      question: {
        en: 'What specific role does the "Waker" handle fulfill when an asynchronous future returns "Poll::Pending"?',
        bn: 'একটি অ্যাসিঙ্ক্রোনাস ফিউচার যখন "Poll::Pending" ফেরত দেয়, তখন "Waker" হ্যান্ডেলটি কোন সুনির্দিষ্ট দায়িত্ব পালন করে?'
      },
      options: [
        {
          en: 'It gives the OS I/O reactor a callback to invoke ("waker.wake()") once data is ready, signaling the executor to place the task back onto the active run queue',
          bn: 'এটি ওএস আই/ও রিঅ্যাক্টরকে একটি সংকেত ("waker.wake()") দেওয়ার মাধ্যম প্রদান করে যাতে ডেটা আসা মাত্রই এক্সিকিউটর কাজটিকে পুনরায় রান কিউতে তুলে নেয়'
        },
        {
          en: 'It deletes the task from RAM to save power',
          bn: 'এটি বিদ্যুৎ বাঁচাতে র‍্যাম থেকে কাজটি চিরতরে মুছে দেয়'
        },
        {
          en: 'It converts the function return type into a 64-bit integer',
          bn: 'এটি ফাংশনের রিটার্ন টাইপকে একটি ৬৪-বিট পূর্ণসংখ্যায় রূপান্তর করে'
        },
        {
          en: 'The Waker mechanism was replaced by hardware interrupts in Rust 2021',
          bn: 'Rust ২০২১ সংস্করণে Waker ব্যবস্থা বাদ দিয়ে হার্ডওয়্যার ইন্টারাপ্ট আনা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Waker wakes up the executor when I/O completes.',
        bn: 'সকেটে বা ফাইলে ডেটা এলেই Waker এক্সিকিউটরকে ডেকে তুলে।'
      },
      explanation: {
        en: 'Without a Waker, an executor would be forced to continuously spin-loop and re-poll all waiting futures, consuming 100 percent CPU. Waker enables event-driven wakeups.',
        bn: 'ফলে অলস বসে থেকে বারবার পোল করে সিপিইউ নষ্ট না করে ইভেন্ট-ভিত্তিক নিখুঁত জাগরণ সম্ভব হয়।'
      }
    },
    {
      id: 'pinning-self-referential-safety-ex3',
      kind: 'mcq',
      topic: 'pinning-pin-self-referential-struct-safety',
      question: {
        en: 'Why is memory pinning ("Pin<&mut Self>") strictly required before polling self-referential async state machines in Rust?',
        bn: 'Rust-এ সেলফ-রেফারেনশিয়াল অ্যাসিঙ্ক স্টেট মেশিন পোল করার পূর্বে কেন মেমোরি পিনিং ("Pin<&mut Self>") বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'Async state machines often store internal pointers referencing their own fields; moving the struct in memory would invalidate those pointers and cause memory corruption',
          bn: 'অ্যাসিঙ্ক স্টেট মেশিন প্রায়শই নিজস্ব ফিল্ড নির্দেশকারী অভ্যন্তরীণ পয়েন্টার রাখে; স্ট্রাক্টটি মেমোরিতে স্থানান্তরিত হলে সেই পয়েন্টার নষ্ট হয়ে মেমোরি করাপশন ঘটবে'
        },
        {
          en: 'Pinning connects the computer motherboard to an electrical ground pin',
          bn: 'পিনিং কম্পিউটারের মাদারবোর্ডকে আর্থিং পিনের সাথে সংযুক্ত করে'
        },
        {
          en: 'Pinning doubles the network throughput of the socket',
          bn: 'পিনিং নেটওয়ার্ক সকেটের থ্রুপুট দ্বিগুণ করে দেয়'
        },
        {
          en: 'Pinning is only required when compiling for 8-bit microchips',
          bn: 'কেবল ৮-বিট মাইক্রোচিপের জন্য কোড তৈরির সময় পিনিং প্রয়োজন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pin prevents self-referential structs from moving in memory.',
        bn: 'মেমোরির ভেতর স্ট্রাক্টের স্থান পরিবর্তন আটকে দিয়ে অভ্যন্তরীণ পয়েন্টারগুলোকে সুরক্ষিত রাখা হয়।'
      },
      explanation: {
        en: 'When an async function awaits, local variables stored across the suspension point can be referenced by other locals. Pin guarantees the memory address remains strictly immobilized.',
        bn: 'এর মাধ্যমে ঝুলন্ত পয়েন্টার বা মেমোরি ধ্বংসের আশঙ্কা শুরুতেই নির্মূল হয়।'
      }
    },
    {
      id: 'tokio-work-stealing-latency-ex4',
      kind: 'mcq',
      topic: 'tokio-work-stealing-scheduler-load-balancing',
      question: {
        en: 'How does Tokio\'s multi-threaded work-stealing scheduler achieve high concurrency with low tail latency?',
        bn: 'টোকিওর মাল্টি-থ্রেডেড ওয়ার্ক-স্টিলিং শিডিউলার কীভাবে উচ্চ কনকারেন্সিতেও অত্যন্ত কম লেটেন্সি বজায় রাখে?'
      },
      options: [
        {
          en: 'Each worker thread maintains its own local queue; when an idle worker exhausts its tasks, it steals tasks from the queues of busier worker threads',
          bn: 'প্রতিটি ওয়ার্কার থ্রেড নিজস্ব লোকাল কিউ বজায় রাখে; কোনো অলস থ্রেডের কাজ শেষ হয়ে গেলে সে অন্য ব্যস্ত থ্রেডের কিউ থেকে কাজ ছিনিয়ে নিয়ে সম্পাদন করে'
        },
        {
          en: 'By disabling all operating system threads and running sequentially',
          bn: 'সমস্ত অপারেটিং সিস্টেম থ্রেড বন্ধ করে দিয়ে ধারাবাহিকভাবে একটি করে কোড চালিয়ে'
        },
        {
          en: 'By allocating 100 megabytes of heap memory per task',
          bn: 'প্রতিটি টাস্কের জন্য হিপে ১০০ মেগাবাইট করে মেমোরি বরাদ্দ দিয়ে'
        },
        {
          en: 'Work-stealing schedulers execute only on Windows machines',
          bn: 'ওয়ার্ক-স্টিলিং শিডিউলার কেবল উইন্ডোজ মেশিনে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Idle worker threads steal tasks from busy workers to balance load.',
        bn: 'কোনো কোর অলস বসে না থেকে অন্য কোরের কাজ ভাগ করে নেওয়ার মাধ্যমে সমান কাজের চাপ থাকে।'
      },
      explanation: {
        en: 'Work-stealing balances runtime load across CPU cores without requiring centralized locking bottlenecks, yielding extraordinary throughput under heavy network traffic.',
        bn: 'সেন্ট্রাল লকিংয়ের ধীরগতি এড়িয়ে সরাসরি থ্রেডগুলোর ভেতর চমৎকার ভারসাম্য তৈরি হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-futures-and-the-await',
    title: {
      en: 'Rust Async & Tokio Runtime Quiz',
      bn: 'Rust অ্যাসিঙ্ক এবং টোকিও রানটাইম কুইজ'
    },
    questions: [
      {
        id: 'quiz-tokio-select-cancellation-safety',
        kind: 'mcq',
        topic: 'tokio-select-cancellation-safety-hazards',
        question: {
          en: 'What architectural hazard must engineers prevent regarding "cancellation safety" when using "tokio::select!" in Rust?',
          bn: 'Rust-এ "tokio::select!" ব্যবহারের সময় ইঞ্জিনিয়ারদের "ক্যান্সেলেশন সেফটি" সম্পর্কিত কোন স্থাপত্যিক ঝুঁকি এড়াতে হয়?'
        },
        options: [
          {
            en: 'When one branch in select! resolves, all other branches are immediately dropped; if a dropped future was mid-way through writing to a network stream, state corruption occurs',
            bn: 'যখন select!-এর একটি শাখা সম্পন্ন হয়, অন্য সব শাখা তাৎক্ষণিকভাবে ড্রপ করা হয়; ড্রপ হওয়া ফিউচারটি যদি কোনো নেটওয়ার্ক স্ট্রিম লেখার মাঝপথে থাকত, তবে ডেটা নষ্ট বা করাপশন ঘটে'
          },
          {
            en: 'tokio::select! deletes the Cargo.toml file if it times out',
            bn: 'টাইমআউট হলে tokio::select! প্রজেক্টের Cargo.toml ফাইল মুছে দেয়'
          },
          {
            en: 'It turns multi-threaded processors into single-core CPUs',
            bn: 'এটি মাল্টি-থ্রেডেড প্রসেসরকে সিঙ্গেল-কোর সিপিইউ বানিয়ে দেয়'
          },
          {
            en: 'Cancellation safety issues only affect 16-bit systems',
            bn: 'ক্যান্সেলেশন সেফটির সমস্যা কেবল ১৬-বিট সিস্টেমে দেখা দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unselected branches in select! are dropped immediately, canceling unfinished work.',
          bn: 'অন্য কাজ ড্রপ হয়ে গেলে তার আংশিক করা কাজ বাফারে আটকে থেকে ডেটা এলোমেলো করতে পারে।'
        },
        explanation: {
          en: 'A future is cancellation-safe if dropping it at an await point leaves the system in a consistent state. Non-atomic reads or writes dropped halfway through cause data corruption.',
          bn: 'তাই জটিল নেটওয়ার্ক অপারেশনে কেবল ক্যান্সেলেশন-নিরাপদ মেথড ব্যবহার করা উচিত।'
        }
      },
      {
        id: 'quiz-tokio-task-spawn-blocking',
        kind: 'mcq',
        topic: 'tokio-task-spawn-blocking-heavy-compute',
        question: {
          en: 'Why should CPU-bound heavy calculations (e.g. image encoding or password hashing) be delegated to "tokio::task::spawn_blocking"?',
          bn: 'ভারী সিপিইউ ক্যালকুলেশন (যেমন ছবি এনকোডিং বা পাসওয়ার্ড হ্যাশিং) কেন "tokio::task::spawn_blocking"-এ পাঠানো উচিত?'
        },
        options: [
          {
            en: 'Synchronous blocking work on an async worker thread starves the executor, preventing thousands of concurrent network tasks from being polled on that core',
            bn: 'অ্যাসিঙ্ক ওয়ার্কার থ্রেডে দীর্ঘ সময় ব্লকিং কাজ চালালে এক্সিকিউটর আটকে যায়, ফলে সেই কোরে হাজার হাজার নেটওয়ার্ক টাস্ক পোল হতে না পেরে আটকে থাকে'
          },
          {
            en: 'Because Tokio worker threads can only execute addition operators',
            bn: 'কারণ টোকিও ওয়ার্কার থ্রেড কেবল যোগের কাজ করতে পারে'
          },
          {
            en: 'spawn_blocking compiles code with a 128-bit floating point engine',
            bn: 'spawn_blocking কোডকে একটি ১২৮-বিট ফ্লোটিং ইঞ্জিন দিয়ে চালায়'
          },
          {
            en: 'spawn_blocking was deprecated in modern Rust',
            bn: 'আধুনিক Rust-এ spawn_blocking বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Long blocking loops starve async worker threads.',
          bn: 'ওয়ার্কার থ্রেড আটকে গেলে অন্য কোনো অ্যাসিঙ্ক কাজ সে চালাতে পারে না।'
        },
        explanation: {
          en: 'Async worker threads rely on cooperative multitasking. A compute-heavy synchronous loop monopolizes the worker thread, causing tail latency spikes across the entire server.',
          bn: 'তাই ভারী ব্লকিং কাজের জন্য আলাদা ব্যাকগ্রাউন্ড থ্রেড ডেডিকেট করাই নিয়ম।'
        }
      },
      {
        id: 'quiz-async-trait-native-support',
        kind: 'mcq',
        topic: 'async-fn-in-traits-rust-1-75',
        question: {
          en: 'What architectural milestone did Rust achieve in version 1.75 regarding traits and asynchronous methods ("async fn")?',
          bn: 'Rust ১.৭৫ সংস্করণে ট্রেইটস এবং অ্যাসিঙ্ক্রোনাস মেথড ("async fn") নিয়ে কোন যুগান্তকারী মাইলফলক অর্জিত হয়েছিল?'
        },
        options: [
          {
            en: 'Native support for "async fn in traits" (AFIT) was stabilized, eliminating the need for the external async_trait macro and dynamic Box allocations in public interfaces',
            bn: 'ট্রেইটের ভেতর সরাসরি "async fn" (AFIT) আনুষ্ঠানিকভাবে চালু হয়, যার ফলে অতিরিক্ত async_trait ম্যাক্রো বা হিপে Box ডায়নামিক বরাদ্দের প্রয়োজন চিরতরে শেষ হয়'
          },
          {
            en: 'The compiler banned asynchronous programming in production',
            bn: 'কম্পাইলার প্রোডাকশনে অ্যাসিঙ্ক প্রোগ্রামিং সম্পূর্ণ নিষিদ্ধ করে'
          },
          {
            en: 'All traits were converted into JSON configuration files',
            bn: 'সমস্ত ট্রেইটকে জেএসন কনফিগারেশন ফাইলে রূপান্তর করা হয়'
          },
          {
            en: 'AFIT requires all network packets to be encrypted with RSA-4096',
            bn: 'AFIT এর জন্য সমস্ত নেটওয়ার্ক প্যাকেটকে RSA-4096 দিয়ে এনক্রিপ্ট হতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Rust 1.75 introduced native async fn in traits without heap allocation.',
          bn: 'হিপে মেমোরি খরচ না করে ট্রেইটের ভেতরে সরাসরি অ্যাসিঙ্ক মেথড লেখার সুবিধা আসে।'
        },
        explanation: {
          en: 'Before Rust 1.75, writing async methods in traits required heap-allocating every returned future using Box<dyn Future>. Native AFIT delivers zero-cost async polymorphism.',
          bn: 'এর মাধ্যমে শূন্য মেমোরি খরচে ঝরঝরে অ্যাসিঙ্ক ইন্টারফেস তৈরি সম্ভব হয়।'
        }
      },
      {
        id: 'quiz-channel-mpsc-backpressure',
        kind: 'mcq',
        topic: 'tokio-sync-mpsc-bounded-channels-backpressure',
        question: {
          en: 'Why do resilient systems architectures demand "bounded" mpsc channels (e.g. "tokio::sync::mpsc::channel(100)") over unbounded channels?',
          bn: 'টেকসই সিস্টেম আর্কিটেকচারে আনবাউন্ডেড চ্যানেলের পরিবর্তে কেন একটি নির্দিষ্ট সীমার "বাউন্ডেড" mpsc চ্যানেল (যেমন "tokio::sync::mpsc::channel(100)") অপরিহার্য?'
        },
        options: [
          {
            en: 'Bounded channels establish backpressure: when the buffer fills, producer tasks are safely suspended until consumers drain items, preventing out-of-memory crashes',
            bn: 'বাউন্ডেড চ্যানেল ব্যাকপ্রেশার তৈরি করে: বাফার পূর্ণ হয়ে গেলে প্রডিউসার টাস্ক থেমে থাকে যতক্ষণ না কনজিউমার ডেটা গ্রহণ করে, যা সার্ভারের মেমোরি ক্র্যাশ প্রতিরোধ করে'
          },
          {
            en: 'Unbounded channels use 10 times more CPU registers',
            bn: 'আনবাউন্ডেড চ্যানেল ১০ গুণ বেশি সিপিইউ রেজিস্টার ব্যবহার করে'
          },
          {
            en: 'Bounded channels encrypt all messages with AES-128',
            bn: 'বাউন্ডেড চ্যানেল সমস্ত মেসেজ AES-128 দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'Bounded channels were deprecated in Rust 2018',
            bn: 'Rust ২০১৮ সংস্করণে বাউন্ডেড চ্যানেল বাতিল করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Bounded channels provide backpressure to protect server memory.',
          bn: 'মেমোরি যাতে সীমাহীনভাবে বাড়তে না পারে, সেজন্য নির্দিষ্ট সীমার বাফার জরুরি।'
        },
        explanation: {
          en: 'In high-load servers, unbounded channels allow fast producers to queue millions of items faster than slow consumers can process them, inevitably causing Out-Of-Memory (OOM) fatal crashes.',
          bn: 'ব্যাকপ্রেশার প্রয়োগের মাধ্যমে সার্ভারের স্থিতিশীলতা ও নিরবচ্ছিন্ন সার্ভিস নিশ্চিত হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-crate-serve',
    title: {
      en: 'Production Microservice with Axum & Tokio',
      bn: 'Axum এবং Tokio দিয়ে প্রোডাকশন মাইক্রোসার্ভিস'
    }
  }
};
