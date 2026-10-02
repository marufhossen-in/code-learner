import type { Lesson } from '../../../lib/types';

export const FlowsAndTheCollectLesson: Lesson = {
  slug: 'flows-and-the-collect',
  tech: 'kotlin',
  title: {
    en: 'Asynchronous Streams, Reactive Flows & StateFlow',
    bn: 'অ্যাসিনক্রোনাস স্ট্রিম, রিঅ্যাক্টিভ ফ্লো এবং StateFlow'
  },
  summary: {
    en: 'Master asynchronous reactive streaming in Kotlin. Understand cold Flow pipelines powered by the emit and collect operators, contrast cold streams against hot observable state holders using StateFlow and SharedFlow, handle backpressure via buffer and conflate, and integrate reactive UI states safely with lifecycle-aware scopes.',
    bn: 'Kotlin-এ অ্যাসিনক্রোনাস রিঅ্যাক্টিভ স্ট্রিমিং সম্পূর্ণ আয়ত্ত করুন। emit ও collect চালিত কোল্ড Flow পাইপলাইন, StateFlow ও SharedFlow দিয়ে হট অবজেক্টের স্টেট ব্যবস্থাপনা, buffer ও conflate দিয়ে ব্যাকপ্রেশার নিয়ন্ত্রণ এবং লাইফসাইকেল-সচেতন স্কোপ দিয়ে ইউআই স্টেট সিঙ্ক্রোনাইজেশন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'cold-flows-emit-collect-heading',
      text: {
        en: 'Cold Asynchronous Flows and the Emit-Collect Contract',
        bn: 'কোল্ড অ্যাসিনক্রোনাস ফ্লো এবং এমিট-কালেক্ট চুক্তি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While standard suspending functions return a singular asynchronous result, reactive systems demand streams that emit sequences of values over time. In Kotlin (JetBrains\' modern statically typed programming language), this is fulfilled natively by Flow. A Flow is cold by default: the producer block declared inside "flow { ... }" executes only when a consumer initiates collection via the terminal "collect" operator. Each new collector triggers an independent, isolated execution of the flow builder from scratch. Values are pushed asynchronously using the "emit" suspending call, allowing smooth cooperative suspension between data production and consumer consumption without blocking worker threads.',
        bn: 'স্ট্যান্ডার্ড সাসপেন্ডিং ফাংশন কেবল একটি একক মান ফেরত দিলেও আধুনিক সিস্টেমে এমন স্ট্রিমের প্রয়োজন হয় যা সময়ের সাথে সাথে ধারাবাহিকভাবে একাধিক মান নির্গমন করতে পারে। কিন্তু Kotlin (জেটব্রেইন্সের তৈরি আধুনিক স্ট্যাটিক্যালি টাইপড প্রোগ্রামিং ভাষা)-এ এই প্রয়োজন মেটায় Flow। একটি Flow ডিফল্টভাবে "কোল্ড" বা অলস থাকে: "flow { ... }"-এর ভেতরের কোড ততক্ষণ পর্যন্ত চলে না যতক্ষণ না কোনো গ্রাহক "collect" মেথড ডাকে। প্রতিটি নতুন গ্রাহক পুরো ফ্লো বিল্ডারটিকে শুরু থেকে একদম পৃথকভাবে চালায়। "emit" মেথডের মাধ্যমে ডেটা পাঠানো হয়, যা কোনো ওএস থ্রেড না আটকে ডেটা প্রস্তুতকারী ও গ্রাহকের মধ্যে মসৃণ সমন্বয় নিশ্চিত করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural contrast between cold on-demand Flows and hot broadcast StateFlow state holders maintaining the latest value for multiple collectors.',
        bn: 'চিত্র ১: চাহিদা অনুসারে চলা কোল্ড Flow এবং একাধিক গ্রাহকের জন্য সর্বদা সর্বশেষ মান ধরে রাখা হট StateFlow-এর মধ্যকার স্থাপত্যিক পার্থক্য।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">KOTLIN COLD FLOW VS HOT STATEFLOW ARCHITECTURE</text>

  <!-- Left: Cold Flow -->
  <g transform="translate(35, 65)">
    <rect width="360" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="360" height="30" rx="8" fill="#0284c7" />
    <text x="180" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Cold Flow: On-Demand Execution</text>

    <rect x="15" y="45" width="330" height="42" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="65" fill="#38bdf8" font-size="10" font-family="monospace">flow { emit(1); delay(100); emit(2) }</text>
    <text x="25" y="78" fill="#94a3b8" font-size="9" font-family="sans-serif">Dormant until collect() is called!</text>

    <!-- Collectors -->
    <rect x="15" y="98" width="330" height="50" rx="5" fill="#0f172a" />
    <text x="25" y="118" fill="#34d399" font-size="10" font-family="monospace">Collector A.collect() -&gt; Runs pipeline from 0</text>
    <text x="25" y="136" fill="#34d399" font-size="10" font-family="monospace">Collector B.collect() -&gt; Runs independent 2nd pipeline</text>

    <!-- Guarantee -->
    <rect x="15" y="160" width="330" height="60" rx="5" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" />
    <text x="25" y="182" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold">Zero Resource Waste:</text>
    <text x="25" y="202" fill="#f8fafc" font-size="9" font-family="sans-serif">Producer halts automatically when collector cancels</text>
  </g>

  <!-- Right: Hot StateFlow -->
  <g transform="translate(440, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#d97706" />
    <text x="182" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Hot StateFlow: Shared State Holder</text>

    <rect x="15" y="45" width="335" height="42" rx="5" fill="#0f172a" stroke="#d97706" />
    <text x="25" y="65" fill="#fbbf24" font-size="10" font-family="monospace">val state = MutableStateFlow(initial = 0)</text>
    <text x="25" y="78" fill="#94a3b8" font-size="9" font-family="sans-serif">Always active in memory | Holds current value</text>

    <!-- Shared Broadcast -->
    <rect x="15" y="98" width="335" height="50" rx="5" fill="#0f172a" />
    <text x="25" y="118" fill="#c084fc" font-size="10" font-family="monospace">Multiple UI observers collect same shared stream</text>
    <text x="25" y="136" fill="#cbd5e1" font-size="9" font-family="sans-serif">Replay buffer = 1 (new subscribers get latest value instantly)</text>

    <!-- Guarantee -->
    <rect x="15" y="160" width="335" height="60" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="182" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Conflation Built-in:</text>
    <text x="25" y="202" fill="#f8fafc" font-size="9" font-family="sans-serif">Slow subscribers skip intermediate drops; read current state</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'hot-stateflow-and-backpressure-heading',
      text: {
        en: 'Hot StateFlow, SharedFlow, and Backpressure Strategies',
        bn: 'হট StateFlow, SharedFlow এবং ব্যাকপ্রেশার কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In contrast to cold flows, hot streams produce values regardless of whether subscribers are listening. Kotlin Coroutines delivers two standardized hot stream primitives: StateFlow and SharedFlow. StateFlow is a state-holding observable stream that always retains its latest value (accessible synchronously via ".value"), functioning as the standard model for Android ViewModel UI state. It features automatic conflation: if consecutive emissions produce equal values, downstream collectors are not notified. For broadcast event buses like toast alerts or navigation actions, developers utilize SharedFlow with configurable replay buffers. When emitters outpace slow consumers, operators like "buffer()", "conflate()", and "collectLatest()" prevent backpressure bottlenecks by discarding outdated intermediate frames.',
        bn: 'কোল্ড ফ্লোর বিপরীতে হট স্ট্রিম কোনো গ্রাহক না শুনলেও ব্যাকগ্রাউন্ডে সক্রিয় থাকে এবং মান তৈরি করতে পারে। Kotlin কোরুটিন দুটি স্ট্যান্ডার্ড হট স্ট্রিম সরবরাহ করে: StateFlow এবং SharedFlow। StateFlow হলো একটি স্টেট-হোল্ডার স্ট্রিম যা সর্বদা তার সর্বশেষ মানটি ধরে রাখে (যা ".value" দিয়ে সরাসরি পড়া যায়) এবং অ্যান্ড্রয়েড ভিউমডেলের ইউআই স্টেট নিয়ন্ত্রণের জন্য আদর্শ মাধ্যম। এতে স্বয়ংক্রিয় কনফ্লেশন সুবিধা রয়েছে: মান অপরিবর্তিত থাকলে এটি বাড়তি নোটিফিকেশন পাঠায় না। অন্যদিকে ন্যাভিগেশন বা অ্যালার্ট মেসেজের মতো এককালীন ইভেন্টের জন্য কনফিগারযোগ্য বাফার সহ SharedFlow ব্যবহৃত হয়। গ্রাহক যখন ডেটা প্রস্তুতকারীর চেয়ে ধীরগতির হয়, তখন "buffer()", "conflate()" বা "collectLatest()" অপারেটরগুলো পুরোনো মান বাদ দিয়ে ব্যাকপ্রেশার সমস্যা সমাধান করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Kotlin cold Flow pipeline with emit/collect, and hot StateFlow state holder with reactive subscribers and conflated caching.',
        bn: 'Kotlin কোল্ড Flow পাইপলাইন (emit/collect) এবং সাবস্ক্রাইবার ও কনফ্লেটেড ক্যাশ সহ হট StateFlow-এর TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Kotlin Cold Flow and Hot StateFlow State Management

// 1. Cold Flow Simulation (flow { emit(...) })
export class KotlinColdFlow<T> {
  constructor(private producer: (emit: (val: T) => Promise<void>) => Promise<void>) {}

  // Terminal operator: collect { ... } triggers execution from scratch
  public async collect(collector: (val: T) => void): Promise<void> {
    await this.producer(async (value) => {
      collector(value);
    });
  }
}

// 2. Hot StateFlow Simulation (MutableStateFlow)
export class SimulatedStateFlow<T> {
  private currentValue: T;
  private subscribers: ((val: T) => void)[] = [];

  constructor(initialValue: T) {
    this.currentValue = initialValue;
  }

  // Synchronous read of latest state
  public get value(): T {
    return this.currentValue;
  }

  // Hot emit: updates state and notifies all active observers
  // Conflates: ignores if new value equals current value
  public emit(newValue: T): void {
    if (this.currentValue === newValue) {
      return; // Conflate identical consecutive values
    }
    this.currentValue = newValue;
    for (const sub of this.subscribers) {
      sub(this.currentValue);
    }
  }

  // New subscriber receives latest value immediately (replay = 1)
  public subscribe(collector: (val: T) => void): () => void {
    this.subscribers.push(collector);
    collector(this.currentValue); // Replay current state
    return () => {
      this.subscribers = this.subscribers.filter(s => s !== collector);
    };
  }
}

// Execution Demonstration
async function runDemonstration() {
  console.log('--- 1. Testing Cold Flow ---');
  const coldNumberFlow = new KotlinColdFlow<number>(async (emit) => {
    console.log('[Producer] Cold flow builder started for collector.');
    await emit(1);
    await emit(2);
    await emit(3);
  });

  // Collector 1
  console.log('Collector 1 subscribing:');
  await coldNumberFlow.collect((num) => console.log('Collector 1 received:', num));

  console.log('\n--- 2. Testing Hot StateFlow ---');
  const uiState = new SimulatedStateFlow<string>('Idle');
  console.log('Initial State Value:', uiState.value); // Idle

  // Subscriber 1 attaches
  const unsubscribe1 = uiState.subscribe((val) => {
    console.log('[UI Screen] Rendered State:', val);
  });

  // Hot updates emitted
  uiState.emit('Loading');
  uiState.emit('Success');

  // Attempting duplicate emission (conflated)
  uiState.emit('Success'); // Ignored, no redundant UI render!

  unsubscribe1();
}

runDemonstration();`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Cold Flow',
          def: {
            en: 'On-demand stream that only initiates execution when a consumer invokes the terminal collect operator.',
            bn: 'অলস স্ট্রিম যা গ্রাহক collect মেথড না ডাকা পর্যন্ত কোনো কাজই শুরু করে না।'
          }
        },
        {
          term: 'Hot Stream',
          def: {
            en: 'Active stream producing and maintaining state independently of whether active collectors exist in memory.',
            bn: 'সক্রিয় স্ট্রিম যা গ্রাহক থাকুক বা না থাকুক ব্যাকগ্রাউন্ডে মান তৈরি ও ধরে রাখে।'
          }
        },
        {
          term: 'StateFlow',
          def: {
            en: 'Hot, state-holding observable flow retaining its single latest value with built-in equality conflation.',
            bn: 'হট স্ট্রিম যা সর্বদা সর্বশেষ মান ধরে রাখে এবং অপ্রয়োজনীয় ডুপ্লিকেট নোটিফিকেশন বন্ধ রাখে।'
          }
        },
        {
          term: 'Backpressure',
          def: {
            en: 'Condition where an upstream stream emits items faster than a downstream collector can process them.',
            bn: 'পরিস্থিতি যেখানে ডেটা প্রস্তুতকারী গ্রাহকের গ্রহণের গতির চেয়ে দ্রুত ডেটা পাঠাতে থাকে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'cold-flow-execution-trigger-ex1',
      kind: 'mcq',
      topic: 'cold-flow-terminal-collect-trigger',
      question: {
        en: 'When does the code declared inside a Kotlin "flow { emit(...) }" builder actually begin executing?',
        bn: 'Kotlin "flow { emit(...) }" বিল্ডারের ভেতরের কোডটি মূলত কখন চলতে শুরু করে?'
      },
      options: [
        {
          en: 'Only when a downstream consumer invokes a terminal operator like "collect()", executing the builder independently for that subscriber',
          bn: 'কেবল তখনই যখন কোনো গ্রাহক "collect()"-এর মতো টার্মিনাল মেথড ডাকে, এবং প্রতিটি গ্রাহকের জন্য কোডটি পৃথকভাবে চলে'
        },
        {
          en: 'Immediately when the flow { } block is declared in source code',
          bn: 'সোর্স কোডে flow { } ব্লকটি লেখার সাথে সাথেই'
        },
        {
          en: 'When the computer battery reaches 100 percent',
          bn: 'কম্পিউটার ব্যাটারি ১০০ শতাংশে পৌঁছানোর সময়'
        },
        {
          en: 'Flows only run during compile time',
          bn: 'ফ্লো কেবল কম্পাইল-টাইমে চলতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Flows are cold; they do not run until collect() is invoked.',
        bn: 'টার্মিনাল মেথড collect না ডাকা পর্যন্ত ফ্লো সম্পূর্ণ ঘুমন্ত অবস্থায় থাকে।'
      },
      explanation: {
        en: 'Because Flows are cold streams, no computation or resource allocation happens until a collector demands data, preventing wasteful background polling.',
        bn: 'এর ফলে কোনো গ্রাহক না থাকলে অহেতুক নেটওয়ার্ক বা মেমোরি খরচ হওয়ার সুযোগ থাকে না।'
      }
    },
    {
      id: 'stateflow-vs-sharedflow-ui-state-ex2',
      kind: 'mcq',
      topic: 'stateflow-vs-sharedflow-characteristics',
      question: {
        en: 'Why is "StateFlow" preferred over standard "SharedFlow" for modeling UI state in Android ViewModels?',
        bn: 'অ্যান্ড্রয়েড ভিউমডেলের ইউআই স্টেট নিয়ন্ত্রণের জন্য কেন "SharedFlow"-এর চেয়ে "StateFlow" অধিক গ্রহণযোগ্য?'
      },
      options: [
        {
          en: 'StateFlow is designed specifically to hold and expose a single current state via ".value", automatically replaying that latest state to newly attached views',
          bn: 'StateFlow বিশেষভাবে ডিজাইন করা হয়েছে যাতে ".value"-এর মাধ্যমে একক বর্তমান মান ধরে রাখা যায় এবং নতুন যুক্ত হওয়া ভিউগুলোকে তাৎক্ষণিক সর্বশেষ স্টেট পাঠানো যায়'
        },
        {
          en: 'StateFlow turns off the mobile screen when idle',
          bn: 'নিষ্ক্রিয় থাকলে StateFlow মোবাইল স্ক্রিন বন্ধ করে দেয়'
        },
        {
          en: 'SharedFlow cannot send strings to consumers',
          bn: 'SharedFlow গ্রাহকদের কোনো স্ট্রিং পাঠাতে পারে না'
        },
        {
          en: 'StateFlow requires payment of a license fee to Google',
          bn: 'StateFlow ব্যবহারের জন্য গুগলকে লাইসেন্স ফি দিতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'StateFlow always has a current value and replays the latest state to new collectors.',
        bn: 'ভিউ ঘুরে গেলেও যাতে আগের সর্বশেষ ডেটা সাথে সাথে ফিরে পাওয়া যায়, তার জন্য এটি সেরা।'
      },
      explanation: {
        en: 'UI components need to know the current state upon screen rotation. StateFlow guarantees that new observers instantly receive the latest emitted state snapshot.',
        bn: 'ফলে স্ক্রিন ঘোরানো বা পুনরায় চালু করার সময় ইউআই কখনোই খালি অবস্থায় থাকে না।'
      }
    },
    {
      id: 'flow-conflate-backpressure-ex3',
      kind: 'mcq',
      topic: 'flow-conflate-operator-backpressure',
      question: {
        en: 'How does the ".conflate()" operator handle backpressure when a Flow emits 100 values per second but the collector takes 1 second per item?',
        bn: 'যখন একটি Flow প্রতি সেকেন্ডে ১০০ টি মান নির্গমন করে কিন্তু গ্রাহক প্রতিটি মান প্রসেস করতে ১ সেকেন্ড সময় নেয়, তখন ".conflate()" কীভাবে ব্যাকপ্রেশার সামলায়?'
      },
      options: [
        {
          en: 'It drops intermediate values and passes only the single most recent emitted value to the collector once it finishes its current processing cycle',
          bn: 'এটি মধ্যবর্তী পুরোনো মানগুলোকে বাদ দিয়ে দেয় এবং গ্রাহক বর্তমান কাজ শেষ করা মাত্রই তাকে সর্বশেষ নির্গত মানটি সরবরাহ করে'
        },
        {
          en: 'It crashes the app with an OutOfMemoryError immediately',
          bn: 'এটি মেমোরি ফুল করে অ্যাপটিকে তৎক্ষণাৎ ক্র্যাশ করায়'
        },
        {
          en: 'It pauses the physical CPU for 10 seconds',
          bn: 'এটি সিপিইউকে ১০ সেকেন্ডের জন্য থামিয়ে রাখে'
        },
        {
          en: 'The conflate operator was removed in Kotlin 1.6',
          bn: 'Kotlin ১.৬ সংস্করণে conflate অপারেটর বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'conflate drops intermediate values when downstream is too slow.',
        bn: 'অপ্রয়োজনীয় পুরোনো ডেটা বাদ দিয়ে সরাসরি সর্বশেষ ডেটায় ঝাঁপ দেওয়ার কৌশল।'
      },
      explanation: {
        en: 'Conflation prevents memory bloat by skipping stale intermediate updates, ensuring that slow UI collectors always process the freshest available data.',
        bn: 'এর মাধ্যমে ধীরগতির ইউআইতেও মেমোরি না ফুল করে সর্বদা টাটকা ডেটা প্রদর্শন করা যায়।'
      }
    },
    {
      id: 'flowon-dispatcher-context-preservation-ex4',
      kind: 'mcq',
      topic: 'flowon-operator-thread-context-preservation',
      question: {
        en: 'Why must developers use ".flowOn(Dispatchers.IO)" instead of wrapping emissions inside "withContext(Dispatchers.IO)" in a Flow builder?',
        bn: 'Flow বিল্ডারে "withContext(Dispatchers.IO)" ব্যবহারের বদলে কেন ডেভেলপারদের অবশ্যই ".flowOn(Dispatchers.IO)" ব্যবহার করতে হয়?'
      },
      options: [
        {
          en: 'To respect Flow Context Preservation: Kotlin forbids changing coroutine context inside the flow block; flowOn changes upstream dispatchers while keeping the collector on its own thread',
          bn: 'Flow কনটেক্সট প্রিজারভেশন নীতি মানার জন্য: Kotlin ফ্লো ব্লকের ভেতর সরাসরি থ্রেড বদলানো নিষিদ্ধ করে; flowOn গ্রাহকের থ্রেড ঠিক রেখে কেবল পেছনের ডেটা প্রস্তুতকারকের থ্রেড বদলে দেয়'
        },
        {
          en: 'Because flowOn speeds up the GPU rendering pipeline by 5x',
          bn: 'কারণ flowOn জিপিইউ রেন্ডারিং গতি ৫ গুণ বাড়িয়ে দেয়'
        },
        {
          en: 'Because withContext is only supported on Apple Mac computers',
          bn: 'কারণ withContext কেবল অ্যাপল ম্যাক কম্পিউটারে কাজ করে'
        },
        {
          en: 'flowOn was deprecated in Kotlin Coroutines 1.4',
          bn: 'Kotlin কোরুটিন ১.৪ সংস্করণে flowOn বাতিল করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Flow enforces context preservation; use flowOn to change upstream execution context.',
        bn: 'ফ্লোর ভেতর থ্রেড বদলানো নিষিদ্ধ, তাই বাইরে থেকে flowOn দিয়ে থ্রেড ঠিক করতে হয়।'
      },
      explanation: {
        en: 'Flow strictly preserves the collector\'s context. Calling withContext inside emit violates this contract and throws an IllegalStateException; flowOn correctly splits execution.',
        bn: 'ফলে গ্রাহক ও প্রস্তুতকারক নিজস্ব উপযুক্ত থ্রেডে নিরাপদে কাজ করতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-flows-and-the-collect',
    title: {
      en: 'Kotlin Reactive Flows & StateFlow Quiz',
      bn: 'Kotlin রিঅ্যাক্টিভ ফ্লো এবং StateFlow কুইজ'
    },
    questions: [
      {
        id: 'quiz-statein-operator-lifecycle',
        kind: 'mcq',
        topic: 'statein-operator-cold-to-hot-conversion',
        question: {
          en: 'What transformation does the "stateIn()" operator perform when applied to a cold Flow pipeline in an Android ViewModel?',
          bn: 'অ্যান্ড্রয়েড ভিউমডেলে একটি কোল্ড Flow-এর ওপর "stateIn()" অপারেটর প্রয়োগ করলে এটি কোন রূপান্তর সম্পাদন করে?'
        },
        options: [
          {
            en: 'It converts the cold Flow into a hot StateFlow with a specified SharingStarted strategy (e.g. WhileSubscribed(5000)), sharing upstream computation across all UI observers',
            bn: 'এটি কোল্ড Flow-কে একটি নির্দিষ্ট শেয়ারিং স্ট্র্যাটেজি সহ (যেমন WhileSubscribed(5000)) হট StateFlow-তে রূপান্তর করে, যা সমস্ত ইউআই গ্রাহকের মাঝে পেছনের গণনা শেয়ার করে'
          },
          {
            en: 'It shuts down the phone camera to save battery',
            bn: 'ব্যাটারি বাঁচাতে এটি ফোনের ক্যামেরা বন্ধ করে দেয়'
          },
          {
            en: 'It encrypts the flow into a password-protected zip file',
            bn: 'এটি ফ্লোটিকে একটি পাসওয়ার্ডযুক্ত জিপ ফাইলে এনক্রিপ্ট করে'
          },
          {
            en: 'stateIn was removed from Kotlin Coroutines in 2023',
            bn: '২০২৩ সালে Kotlin কোরুটিন থেকে stateIn বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'stateIn converts a cold flow into a hot StateFlow scoped to a CoroutineScope.',
          bn: 'কোল্ড ফ্লোকে ভিউমডেলের উপযোগী হট StateFlow-তে পরিণত করার সবচেয়ে আধুনিক অপারেটর।'
        },
        explanation: {
          en: 'stateIn prevents redundant upstream network or database requests by sharing one hot stream across multiple UI screens, managing stop timeouts via WhileSubscribed(5000).',
          bn: 'এর মাধ্যমে একাধিক স্ক্রিন একই ডেটা শেয়ার করে অপ্রয়োজনীয় নেটওয়ার্ক রিকোয়েস্ট কমিয়ে দেয়।'
        }
      },
      {
        id: 'quiz-collectlatest-cancellation-behavior',
        kind: 'mcq',
        topic: 'collectlatest-cancellation-of-previous-action',
        question: {
          en: 'How does "collectLatest { ... }" behave when a new value arrives while the previous collector block is still performing an asynchronous action?',
          bn: 'পূর্ববর্তী গ্রাহক ব্লক যখন একটি অ্যাসিঙ্ক কাজে ব্যস্ত থাকে, তখন নতুন মান এসে পৌঁছালে "collectLatest { ... }" কীভাবে আচরণ করে?'
        },
        options: [
          {
            en: 'It cancels the ongoing execution of the previous block immediately and restarts the block with the newly arrived value',
            bn: 'এটি তাৎক্ষণিকভাবে আগের ব্লকের চলমান কাজ বাতিল করে দেয় এবং নতুন আসা মানটি নিয়ে আবার ব্লকটি শুরু করে'
          },
          {
            en: 'It locks the CPU core until the previous block completes',
            bn: 'আগের কাজটি শেষ না হওয়া পর্যন্ত এটি সিপিইউ কোর লক করে রাখে'
          },
          {
            en: 'It throws an OutOfMemoryError and crashes the application',
            bn: 'এটি মেমোরি এরর ছুড়ে অ্যাপটিকে ক্র্যাশ করায়'
          },
          {
            en: 'collectLatest is identical to standard collect in all respects',
            bn: 'collectLatest সব দিক থেকেই সাধারণ collect-এর হুবহু সমান'
          }
        ],
        answer: 0,
        hint: {
          en: 'collectLatest cancels the previous block if a new value arrives.',
          bn: 'নতুন ডেটা আসার সাথে সাথে পুরোনো অকেজো কাজটি বন্ধ করে দেওয়া হয়।'
        },
        explanation: {
          en: 'Ideal for search query filtering or UI transitions where only the most recent user input matters. If the user types "k", then "ko", collectLatest aborts the search for "k".',
          bn: 'সার্চ ফিল্টারে এটি সেরা; নতুন বর্ণ লিখলে পুরোনো সার্চের ফলাফল সাথে সাথে বাতিল হয়ে যায়।'
        }
      },
      {
        id: 'quiz-sharedflow-replay-buffer-behavior',
        kind: 'mcq',
        topic: 'sharedflow-replay-buffer-parameter',
        question: {
          en: 'What occurs when configuring a "MutableSharedFlow" with "replay = 0"?',
          bn: '"replay = 0" দিয়ে একটি "MutableSharedFlow" কনফিগার করলে কী ঘটে?'
        },
        options: [
          {
            en: 'Values are broadcast only to currently active collectors; new subscribers joining later do not receive past emissions, ideal for one-off events like navigation actions',
            bn: 'মানগুলো কেবল বর্তমানে সক্রিয় গ্রাহকদের কাছে সম্প্রচারিত হয়; পরবর্তীতে যুক্ত হওয়া নতুন গ্রাহক আগের কোনো মান পায় না, যা ন্যাভিগেশন ইভেন্টের জন্য আদর্শ'
          },
          {
            en: 'The flow deletes all files from local storage',
            bn: 'ফ্লোটি লোকাল স্টোরেজ থেকে সমস্ত ফাইল মুছে ফেলে'
          },
          {
            en: 'The application is forced to restart immediately',
            bn: 'অ্যাপ্লিকেশনটি তৎক্ষণাৎ রিস্টার্ট হতে বাধ্য হয়'
          },
          {
            en: 'replay = 0 causes a fatal compile-time error',
            bn: 'replay = 0 লিখলে মারাত্মক কম্পাইল-টাইম এরর ঘটে'
          }
        ],
        answer: 0,
        hint: {
          en: 'replay = 0 retains no past events for future subscribers.',
          bn: 'একবার ঘটে যাওয়া ঘটনা যাতে নতুন স্ক্রিনে পুনরায় না ঘটে, তার জন্য replay = 0 লাগে।'
        },
        explanation: {
          en: 'A replay of 0 ensures that events like "Navigate to Checkout" are consumed only once by active listeners and are never re-triggered when an Android screen recreates.',
          bn: 'এর মাধ্যমে স্ক্রিন ঘোরার পর যাতে অপ্রয়োজনীয় ডুপ্লিকেট পপআপ বা পেজ জাম্প না হয় তা নিশ্চিত করা যায়।'
        }
      },
      {
        id: 'quiz-repeatonlifecycle-android-safety',
        kind: 'mcq',
        topic: 'repeatonlifecycle-safe-ui-collection',
        question: {
          en: 'Why is collecting flows using "repeatOnLifecycle(Lifecycle.State.STARTED)" standard best practice in Android UI development?',
          bn: 'অ্যান্ড্রয়েড ইউআই তৈরিতে "repeatOnLifecycle(Lifecycle.State.STARTED)" দিয়ে ফ্লো সংগ্রহ করা কেন আদর্শ সেরা পদ্ধতি?'
        },
        options: [
          {
            en: 'It automatically starts collecting when the UI becomes visible (STARTED) and completely cancels collection when the UI enters background (STOPPED), saving battery and CPU',
            bn: 'ইউআই স্ক্রিনে দৃশ্যমান হলে (STARTED) এটি স্বয়ংক্রিয়ভাবে ফ্লো সংগ্রহ শুরু করে এবং ব্যাকগ্রাউন্ডে চলে গেলে (STOPPED) তা সম্পূর্ণ বাতিল করে দেয়, ফলে ব্যাটারি ও সিপিইউ বাঁচে'
          },
          {
            en: 'It converts all UI components into WebViews',
            bn: 'এটি সমস্ত ইউআই উপাদানকে ওয়েবভিউতে রূপান্তর করে'
          },
          {
            en: 'It doubles the physical RAM of the device',
            bn: 'এটি ডিভাইসের শারীরিক র‍্যামের পরিমাণ দ্বিগুণ করে দেয়'
          },
          {
            en: 'repeatOnLifecycle was deprecated in Android 13',
            bn: 'অ্যান্ড্রয়েড ১৩-তে repeatOnLifecycle বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'repeatOnLifecycle starts and stops coroutines safely based on screen visibility.',
          bn: 'ইউজার অ্যাপ দেখা বন্ধ করলেই ব্যাকগ্রাউন্ডের অপ্রয়োজনীয় কাজ থামিয়ে দেওয়া হয়।'
        },
        explanation: {
          en: 'Collecting flows while an app is in the background wastes resources and can cause crashes. repeatOnLifecycle cleanly suspends/cancels coroutines when the UI is not visible.',
          bn: 'ফলে অ্যাপ ব্যাকগ্রাউন্ডে থাকার সময় মেমোরি ও ব্যাটারি সাশ্রয় হয় এবং ক্র্যাশ প্রতিরোধ হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-kotlin-release',
    title: {
      en: 'Kotlin 2.0 K2 Compiler, Tooling & Multiplatform',
      bn: 'Kotlin ২.০ K2 কম্পাইলার, টুলিং এবং মাল্টিপ্ল্যাটফর্ম'
    }
  }
};
