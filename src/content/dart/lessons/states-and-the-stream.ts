import type { Lesson } from '../../../lib/types';

export const StatesAndTheStreamLesson: Lesson = {
  slug: 'states-and-the-stream',
  tech: 'dart',
  title: {
    en: 'Reactive Streams & StreamControllers',
    bn: 'রিঅ্যাক্টিভ স্ট্রিম এবং StreamControllers'
  },
  summary: {
    en: 'Master reactive asynchronous data pipelines in Dart. Understand the Stream<T> contract for handling continuous asynchronous events, contrast single-subscription streams against broadcast streams, build custom event publishers using StreamController and StreamSink, transform pipelines via map and where, and manage backpressure to avoid memory leaks.',
    bn: 'Dart-এ রিঅ্যাক্টিভ অ্যাসিনক্রোনাস ডেটা পাইপলাইন সম্পূর্ণ আয়ত্ত করুন। ধারাবাহিক ইভেন্ট পরিচালনার জন্য Stream<T> চুক্তি, সিঙ্গেল-সাবস্ক্রিপশন বনাম ব্রডকাস্ট স্ট্রিমের পার্থক্য, StreamController ও StreamSink দিয়ে কাস্টম ইভেন্ট পাবলিশার তৈরি, map ও where দিয়ে পাইপলাইন ট্রান্সফরমেশন এবং মেমোরি লিক রোধে ব্যাকপ্রেশার নিয়ন্ত্রণ।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'stream-contract-and-controllers-heading',
      text: {
        en: 'The Stream Contract, Sinks, and StreamControllers',
        bn: 'স্ট্রিম চুক্তি, সিঙ্ক এবং StreamControllers'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While a Future delivers exactly 1 asynchronous result upon completion, reactive architectures require pipelines capable of emitting continuous events over time. In Dart (Google\'s strongly typed client programming language), this is governed by Stream. A Stream provides an asynchronous sequence of events consisting of 3 distinct signals: data payloads, error notifications, and a terminal completion event. To author custom streams, developers employ a "StreamController". The controller exposes two foundational ends: an input "StreamSink" where producers push events via "add()", and an output "Stream" where consumers attach listeners.',
        bn: 'একটি Future কাজ শেষ করে কেবল ১ টি একক মান ফেরত দিলেও আধুনিক রিঅ্যাক্টিভ অ্যাপ্লিকেশনে এমন পাইপলাইনের প্রয়োজন হয় যা সময়ের সাথে সাথে অবিচ্ছিন্ন ইভেন্ট নির্গমন করতে পারে। কিন্তু Dart (গুগলের তৈরি স্ট্রংলি টাইপড ক্লায়েন্ট প্রোগ্রামিং ভাষা)-এ এই দায়িত্ব পালন করে Stream। একটি Stream মূলত ৩ টি সংকেত দ্বারা গঠিত ধারাবাহিক ইভেন্ট তৈরি করে: ডেটা পেলোড, এরর নোটিফিকেশন এবং কাজ সমাপ্তির সিগন্যাল। নিজস্ব কাস্টম স্ট্রিম তৈরি করতে ডেভেলপাররা "StreamController" ব্যবহার করেন। কন্ট্রোলারের মূলত ২ টি মুখ থাকে: একটি ইনপুট "StreamSink" যেখানে "add()" দিয়ে ডেটা ঢোকানো হয়, এবং অপরটি আউটপুট "Stream" যেখানে গ্রাহকেরা লিসেনার যুক্ত করে ডেটা গ্রহণ করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural difference between Single-Subscription Streams (strictly 1 listener) and Broadcast Streams (multiple concurrent listeners).',
        bn: 'চিত্র ১: সিঙ্গেল-সাবস্ক্রিপশন স্ট্রিম (কঠোরভাবে ১ জন গ্রাহক) এবং ব্রডকাস্ট স্ট্রিমের (একসাথে একাধিক গ্রাহক) মধ্যকার স্থাপত্যিক পার্থক্য।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">DART STREAM ARCHITECTURE: SINGLE-SUBSCRIPTION VS BROADCAST</text>

  <!-- Left: Single-Subscription Stream -->
  <g transform="translate(35, 65)">
    <rect width="360" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="360" height="30" rx="8" fill="#0284c7" />
    <text x="180" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Single-Subscription Stream (1-to-1)</text>

    <!-- Source -->
    <rect x="15" y="45" width="330" height="42" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="65" fill="#38bdf8" font-size="10" font-family="monospace">final controller = StreamController&lt;T&gt;();</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Dedicated private stream pipeline</text>

    <!-- 1 Listener -->
    <rect x="15" y="98" width="330" height="45" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="118" fill="#34d399" font-size="10" font-family="monospace">Listener 1: Active Subscriber</text>
    <text x="25" y="133" fill="#cbd5e1" font-size="9" font-family="sans-serif">Buffers events until listener attaches</text>

    <!-- 2nd Listener Error -->
    <rect x="15" y="152" width="330" height="68" rx="5" fill="#ef4444" fill-opacity="0.15" stroke="#ef4444" />
    <text x="25" y="174" fill="#f87171" font-size="10" font-family="sans-serif" font-weight="bold">Attempting 2nd Listener Fails:</text>
    <text x="25" y="192" fill="#f8fafc" font-size="9" font-family="monospace">StateError: Bad state: Stream has already been listened to!</text>
    <text x="25" y="207" fill="#cbd5e1" font-size="9" font-family="sans-serif">Use cases: File reading, HTTP socket streams</text>
  </g>

  <!-- Right: Broadcast Stream -->
  <g transform="translate(440, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#d97706" />
    <text x="182" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Broadcast Stream (1-to-Many)</text>

    <!-- Source -->
    <rect x="15" y="45" width="335" height="42" rx="5" fill="#0f172a" stroke="#d97706" />
    <text x="25" y="65" fill="#fbbf24" font-size="10" font-family="monospace">StreamController&lt;T&gt;.broadcast()</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Public publish-subscribe event bus</text>

    <!-- Multi Listeners -->
    <rect x="15" y="98" width="335" height="45" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="118" fill="#34d399" font-size="10" font-family="monospace">Subscriber A: UI Widget Tree Update</text>
    <text x="25" y="133" fill="#cbd5e1" font-size="9" font-family="sans-serif">Receives events emitted while subscribed</text>

    <rect x="15" y="152" width="335" height="68" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="174" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Multi-Subscriber Freedom:</text>
    <text x="25" y="192" fill="#f8fafc" font-size="9" font-family="sans-serif">Subscriber B (Analytics) &amp; Subscriber C (Logging)</text>
    <text x="25" y="207" fill="#cbd5e1" font-size="9" font-family="sans-serif">Can attach and detach dynamically without errors</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'broadcast-streams-and-lifecycle-heading',
      text: {
        en: 'Single-Subscription versus Broadcast Streams and Lifecycle Safety',
        bn: 'সিঙ্গেল-সাবস্ক্রিপশন বনাম ব্রডকাস্ট স্ট্রিম এবং লাইফসাইকেল নিরাপত্তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Dart strictly differentiates between single-subscription streams and broadcast streams. Standard streams are single-subscription: they preserve event order and hold an internal buffer until exactly 1 listener attaches. Attempting to attach a second listener immediately triggers a runtime StateError ("Stream has already been listened to!"). For multi-observer architectures where multiple UI widgets or analytics trackers need the same data, developers instantiate "StreamController.broadcast()". Crucially, streams carry strict lifecycle obligations. If an engineer forgets to cancel a "StreamSubscription" or close a "StreamController" when a widget is disposed, the sink remains in memory forever, creating severe memory leaks and zombie event loops.',
        bn: 'Dart সিঙ্গেল-সাবস্ক্রিপশন এবং ব্রডকাস্ট স্ট্রিমের মাঝে একটি কঠোর পার্থক্য বজায় রাখে। সাধারণ স্ট্রিমগুলো সিঙ্গেল-সাবস্ক্রিপশন হয়: এগুলো ইভেন্টের ক্রম বজায় রাখে এবং ঠিক ১ জন গ্রাহক শোনার জন্য না আসা পর্যন্ত ডেটা ধরে রাখে। দ্বিতীয় কোনো গ্রাহক এটি শোনার চেষ্টা করলেই রানটাইমে StateError ঘটে ("Stream has already been listened to!")। কিন্তু যেখানে একাধিক ইউআই উইজেট বা অ্যানালিটিক্স সার্ভিসের একই ডেটা প্রয়োজন, সেখানে "StreamController.broadcast()" তৈরি করা হয়। সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো, স্ট্রিমের জীবনচক্র সাবধানে নিয়ন্ত্রণ করা। কোনো উইজেট মুছে যাওয়ার সময় যদি ডেভেলপার "StreamSubscription" বাতিল বা কন্ট্রোলার "close()" করতে ভুলে যান, তবে তা চিরতরে মেমোরি লিক এবং ব্যাকগ্রাউন্ড রিসোর্স অপচয় ঘটায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Dart StreamController mechanics contrasting single-subscription enforcement with broadcast multi-subscriber pipelines.',
        bn: 'Dart StreamController মেকানিজমের TypeScript রূপায়ণ: সিঙ্গেল-সাবস্ক্রিপশন কঠোরতা বনাম ব্রডকাস্ট মাল্টি-সাবস্ক্রাইবার পাইপলাইন।'
      },
      code: `// Simulation of Dart Stream, StreamController, and Broadcast Event Architecture

export interface StreamSubscription<T> {
  cancel(): void;
}

export class SimulatedStreamController<T> {
  private listeners: ((event: T) => void)[] = [];
  private isClosed = false;

  constructor(public isBroadcast: boolean = false) {}

  // Input Sink: controller.sink.add(data)
  public add(data: T): void {
    if (this.isClosed) {
      throw new Error('Cannot add event to closed StreamController sink!');
    }
    // Broadcast data to all active listeners
    for (const listener of this.listeners) {
      listener(data);
    }
  }

  // Output Stream: controller.stream.listen(...)
  public listen(onData: (event: T) => void): StreamSubscription<T> {
    if (!this.isBroadcast && this.listeners.length >= 1) {
      // Dart StateError simulation for single-subscription stream violation
      throw new Error('StateError: Bad state: Stream has already been listened to!');
    }

    this.listeners.push(onData);

    return {
      cancel: () => {
        this.listeners = this.listeners.filter(l => l !== onData);
        console.log('[Stream] Subscription cancelled cleanly.');
      }
    };
  }

  // Close controller sink
  public close(): void {
    this.isClosed = true;
    console.log('[StreamController] Closed sink cleanly.');
  }
}

// Execution Demonstration
console.log('--- 1. Testing Single-Subscription Stream Law ---');
const singleStream = new SimulatedStreamController<number>(false);

// Listener 1 attaches successfully
const sub1 = singleStream.listen((data) => {
  console.log('[Single Stream] Subscriber 1 received:', data);
});

singleStream.add(100);

// Attempting Listener 2 throws StateError in single-subscription stream!
try {
  singleStream.listen((data) => console.log('Subscriber 2 received:', data));
} catch (err: unknown) {
  console.log('[Single Stream Expected Law Caught]:', (err as Error).message);
}

sub1.cancel();
singleStream.close();

console.log('\n--- 2. Testing Broadcast Stream (1-to-Many Bus) ---');
const broadcastStream = new SimulatedStreamController<string>(true);

// Multiple concurrent subscribers
const subA = broadcastStream.listen((msg) => console.log('[UI Widget A] State updated:', msg));
const subB = broadcastStream.listen((msg) => console.log('[Analytics B] Event logged:', msg));

broadcastStream.add('User Tapped Refresh');
broadcastStream.add('Data Synchronized Successfully');

subA.cancel();
subB.cancel();
broadcastStream.close();`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Stream<T>',
          def: {
            en: 'Asynchronous event channel delivering sequential data payloads, errors, and done notifications.',
            bn: 'অ্যাসিনক্রোনাস চ্যানেল যা পর্যায়ক্রমে ডেটা, এরর এবং সমাপ্তির সংকেত সরবরাহ করে।'
          }
        },
        {
          term: 'StreamController',
          def: {
            en: 'Manager object providing a StreamSink for injecting events and a Stream for listening to outputs.',
            bn: 'নিয়ন্ত্রক অবজেক্ট যা ডেটা পাঠানোর জন্য সিঙ্ক এবং ডেটা শোনার জন্য স্ট্রিম সরবরাহ করে।'
          }
        },
        {
          term: 'StreamSink',
          def: {
            en: 'Input interface of a stream controller where producers push data via add() or addError().',
            bn: 'স্ট্রিমের ইনপুট মুখ যেখানে ডেটা প্রস্তুতকারী add() মেথড ডেকে নতুন তথ্য প্রবেশ করায়।'
          }
        },
        {
          term: 'Broadcast Stream',
          def: {
            en: 'Multi-subscriber stream allowing any number of concurrent listeners to attach and detach dynamically.',
            bn: 'বহু-গ্রাহক স্ট্রিম যা একসাথে যেকোনো সংখ্যক লিসেনারকে কোনো এরর ছাড়াই ডেটা গ্রহণের সুযোগ দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'single-subscription-stream-violation-ex1',
      kind: 'mcq',
      topic: 'single-subscription-second-listener-error',
      question: {
        en: 'What occurs if a Dart application attempts to attach a second listener to a standard single-subscription Stream?',
        bn: 'একটি সাধারণ সিঙ্গেল-সাবস্ক্রিপশন স্ট্রিমে দ্বিতীয় কোনো লিসেনার যুক্ত করার চেষ্টা করলে কী ঘটে?'
      },
      options: [
        {
          en: 'It immediately throws a runtime StateError with the message "Bad state: Stream has already been listened to!"',
          bn: 'এটি তৎক্ষণাৎ একটি রানটাইম StateError ছুড়ে দেয় যার বার্তা হলো "Bad state: Stream has already been listened to!"'
        },
        {
          en: 'The second listener silently replaces the first listener',
          bn: 'দ্বিতীয় লিসেনারটি নীরবে প্রথম লিসেনারের জায়গা দখল করে'
        },
        {
          en: 'The phone operating system halts all network connections',
          bn: 'ফোন অপারেটিং সিস্টেম সমস্ত নেটওয়ার্ক সংযোগ বন্ধ করে দেয়'
        },
        {
          en: 'Single-subscription streams permit up to 5 listeners',
          bn: 'সিঙ্গেল-সাবস্ক্রিপশন স্ট্রিম ৫ জন পর্যন্ত লিসেনার সমর্থন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Single-subscription streams permit strictly 1 active listener.',
        bn: 'একাধিক গ্রাহকের জন্য সাধারণ স্ট্রিম কাজ করে না, ব্রডকাস্ট স্ট্রিম ব্যবহার করতে হয়।'
      },
      explanation: {
        en: 'Single-subscription streams are intended for 1-to-1 data transfer (like file streams). To support multiple simultaneous listeners, convert with stream.asBroadcastStream().',
        bn: 'একাধিক গ্রাহককে তথ্য পাঠাতে চাইলে স্ট্রিমটিকে ব্রডকাস্ট স্ট্রিমে রূপান্তর করতে হয়।'
      }
    },
    {
      id: 'streamcontroller-memory-leak-hazard-ex2',
      kind: 'mcq',
      topic: 'streamcontroller-close-dispose-leak-prevention',
      question: {
        en: 'Why must developers explicitly invoke "controller.close()" and "subscription.cancel()" inside a Flutter StatefulWidget\'s "dispose()" method?',
        bn: 'একটি Flutter StatefulWidget-এর "dispose()" মেথডের ভেতর ডেভেলপারদের কেন অবশ্যই "controller.close()" এবং "subscription.cancel()" ডাকতে হয়?'
      },
      options: [
        {
          en: 'To release the sink and unregister callbacks, preventing zombie listeners from retaining the State in memory and leaking RAM',
          bn: 'সিঙ্ক বন্ধ করতে এবং কলব্যাক বাতিল করতে, যাতে অকেজো লিসেনার মেমোরিতে স্টেট আটকে রেখে র‍্যাম অপচয় না করতে পারে'
        },
        {
          en: 'To wipe all user credentials from the device flash storage',
          bn: 'ডিভাইস ফ্ল্যাশ স্টোরেজ থেকে ব্যবহারকারীর সমস্ত তথ্য মুছে ফেলার জন্য'
        },
        {
          en: 'Because unclosed streams cause the phone battery to discharge in 1 minute',
          bn: 'কারণ বন্ধ না করা স্ট্রিম ১ মিনিটে ফোনের ব্যাটারি শেষ করে দেয়'
        },
        {
          en: 'Stream controllers close themselves automatically upon widget destruction',
          bn: 'উইজেট ধ্বংসের সাথে সাথে স্ট্রিম কন্ট্রোলার নিজে থেকেই বন্ধ হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Uncancelled stream subscriptions prevent garbage collection and cause memory leaks.',
        bn: 'সাবস্ক্রিপশন বাতিল না করলে মেমোরি মুক্ত হতে পারে না, ফলে অ্যাপ ভারি হয়ে যায়।'
      },
      explanation: {
        en: 'Streams maintain strong references to listener callbacks. Without explicit cancellation in dispose(), the detached widget is retained in memory, leaking resources.',
        bn: 'এর ফলে মেমোরি লিক ঘটে এবং অ্যাপ ধীরগতির হয়ে ক্র্যাশ করার ঝুঁকিতে পড়ে।'
      }
    },
    {
      id: 'async-generator-yield-stream-ex3',
      kind: 'mcq',
      topic: 'async-star-generator-yield-stream',
      question: {
        en: 'How does a Dart asynchronous generator function declared with "Stream<T> count() async*" emit values to subscribers?',
        bn: '"Stream<T> count() async*" দিয়ে ঘোষিত একটি Dart অ্যাসিনক্রোনাস জেনারেটর কীভাবে গ্রাহকদের কাছে মান পাঠায়?'
      },
      options: [
        {
          en: 'Using the "yield" statement to push each value onto the returned stream, cooperatively waiting if the downstream consumer pauses',
          bn: '"yield" স্টেটমেন্ট ব্যবহার করে প্রতিটি মান ফেরত পাঠানো স্ট্রিমে যুক্ত করে এবং গ্রাহক বিরতি নিলে নিজে থেকেও বিরতি গ্রহণ করে'
        },
        {
          en: 'By sending a network POST request to an external server',
          bn: 'একটি বাহ্যিক সার্ভারে নেটওয়ার্ক পোস্ট রিকোয়েস্ট পাঠিয়ে'
        },
        {
          en: 'By writing values to an encrypted log file on disk',
          bn: 'ডিস্কের একটি এনক্রিপ্ট করা ফাইলে মানগুলো লিখে'
        },
        {
          en: 'async* was deprecated in Dart 2.15',
          bn: 'Dart ২.১৫ সংস্করণে async* বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'async* uses yield to emit values onto the stream.',
        bn: 'সহজেই স্ট্রিম তৈরি করতে async* এবং yield এর জুড়ি নেই।'
      },
      explanation: {
        en: 'The async* modifier marks an asynchronous generator. Inside the function, calling "yield value;" emits that value to the stream, managing suspension cooperatively.',
        bn: 'ফলে কোনো জটিল কন্ট্রোলার না বানিয়েই সাধারণ লুপের মতো করে স্ট্রিম তৈরি করা যায়।'
      }
    },
    {
      id: 'stream-builder-widget-ui-binding-ex4',
      kind: 'mcq',
      topic: 'streambuilder-flutter-reactive-binding',
      question: {
        en: 'What architectural power does Flutter\'s "StreamBuilder<T>" widget provide when binding reactive streams to user interfaces?',
        bn: 'Flutter-এর "StreamBuilder<T>" উইজেট রিঅ্যাক্টিভ স্ট্রিমকে ইউজার ইন্টারফেসের সাথে যুক্ত করার সময় কোন স্থাপত্যিক ক্ষমতা প্রদান করে?'
      },
      options: [
        {
          en: 'It automatically listens to the stream, rebuilds its subtree whenever new data arrives, and cleanly cancels its internal subscription when the widget is removed',
          bn: 'এটি স্বয়ংক্রিয়ভাবে স্ট্রিম শোনে, নতুন ডেটা আসলেই উইজেট রিবিল্ড করে এবং উইজেটটি স্ক্রিন থেকে সরে গেলে নিজে থেকেই সাবস্ক্রিপশন বাতিল করে দেয়'
        },
        {
          en: 'It converts the phone screen resolution into 4K HDR',
          bn: 'এটি ফোনের স্ক্রিন রেজোলিউশনকে 4K HDR-এ রূপান্তর করে'
        },
        {
          en: 'It limits the frame rate to 10 frames per second',
          bn: 'এটি ফ্রেমরেটকে প্রতি সেকেন্ডে ১০ ফ্রেমে সীমাবদ্ধ করে দেয়'
        },
        {
          en: 'StreamBuilder requires an active Wi-Fi connection to render',
          bn: 'StreamBuilder রেন্ডার করার জন্য সক্রিয় ওয়াই-ফাই সংযোগ প্রয়োজন'
        }
      ],
      answer: 0,
      hint: {
        en: 'StreamBuilder manages stream subscription, rebuilding, and cancellation automatically.',
        bn: 'ম্যানুয়ালি স্টেট না বদলে সরাসরি লাইভ স্ট্রিমের সাথে স্ক্রিন জোড়ার সেরা মাধ্যম।'
      },
      explanation: {
        en: 'StreamBuilder handles the boilerplate of listening, rebuilding, and canceling subscriptions on unmount. Its AsyncSnapshot parameter exposes connection state and error payloads.',
        bn: 'এর মাধ্যমে কোনো মেমোরি লিক ছাড়াই লাইভ ডেটা স্ক্রিনে চমৎকারভাবে ফুটিয়ে তোলা যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-states-and-the-stream',
    title: {
      en: 'Dart Streams & Reactive Concurrency Quiz',
      bn: 'Dart স্ট্রিম এবং রিঅ্যাক্টিভ কনকারেন্সি কুইজ'
    },
    questions: [
      {
        id: 'quiz-stream-transformers-pipelining',
        kind: 'mcq',
        topic: 'stream-transformers-pipe-manipulation',
        question: {
          en: 'How do "StreamTransformers" (e.g. "stream.transform(...)") customize stream processing pipelines in Dart?',
          bn: 'Dart-এ "StreamTransformers" (যেমন "stream.transform(...)") কীভাবে স্ট্রিম প্রসেসিং পাইপলাইন কাস্টমাইজ করে?'
        },
        options: [
          {
            en: 'They encapsulate reusable, complex stream mutations (such as UTF-8 decoding, line splitting, or debouncing) into modular reusable transformation blocks',
            bn: 'তারা পুনর্ব্যবহারযোগ্য জটিল স্ট্রিম রূপান্তরকে (যেমন UTF-8 ডিকোডিং, লাইন বিভাজন বা ডিবউন্সিং) মডুলার ব্লকে আবদ্ধ করে সহজে ব্যবহারের সুযোগ দেয়'
          },
          {
            en: 'They accelerate the device processor frequency by 10 percent',
            bn: 'তারা ডিভাইসের প্রসেসরের গতি ১০ শতাংশ বৃদ্ধি করে'
          },
          {
            en: 'They turn the phone screen off during data transfers',
            bn: 'ডেটা স্থানান্তরের সময় তারা ফোনের স্ক্রিন বন্ধ করে দেয়'
          },
          {
            en: 'StreamTransformers are strictly forbidden in Flutter production code',
            bn: 'Flutter প্রোডাকশন কোডে StreamTransformers সম্পূর্ণ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'StreamTransformers package reusable stream transformations like decoding and filtering.',
          bn: 'বাইনারি ডেটা থেকে টেক্সট বানানো বা জটিল ফিল্টারিংয়ের মতো কাজের জন্য এটি সেরা।'
        },
        explanation: {
          en: 'StreamTransformer decouples transformation logic from specific streams, allowing pipelines like "fileStream.transform(utf8.decoder).transform(LineSplitter())".',
          bn: 'ফলে এক স্ট্রিমের তৈরি লজিক অন্য যেকোনো স্ট্রিমে অনায়াসে পুনর্ব্যবহার করা যায়।'
        }
      },
      {
        id: 'quiz-distinct-operator-stream-deduplication',
        kind: 'mcq',
        topic: 'stream-distinct-operator-deduplication',
        question: {
          en: 'What duty does the ".distinct()" operator fulfill when attached to a Dart Stream pipeline?',
          bn: 'একটি Dart Stream পাইপলাইনে ".distinct()" অপারেটর যুক্ত করলে এটি কোন দায়িত্ব পালন করে?'
        },
        options: [
          {
            en: 'It suppresses consecutive duplicate data events, passing an item downstream only if it is structurally distinct from the immediately preceding item',
            bn: 'এটি পর পর আসা ডুপ্লিকেট ডেটা বাদ দেয় এবং কেবল তখনই মানটি পাঠায় যখন তা ঠিক আগের মানের চেয়ে আলাদা হয়'
          },
          {
            en: 'It deletes all odd numbers from the stream',
            bn: 'এটি স্ট্রিম থেকে সমস্ত বিজোড় সংখ্যা মুছে ফেলে'
          },
          {
            en: 'It converts all text into lowercase characters',
            bn: 'এটি সমস্ত টেক্সটকে ছোট হাতের অক্ষরে রূপান্তর করে'
          },
          {
            en: 'distinct was removed in Dart 2.10',
            bn: 'Dart ২.১০ সংস্করণে distinct বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'distinct filters out consecutive identical values to prevent redundant updates.',
          bn: 'একই মান বারবার এলে যাতে ইউআই অযথা রিবিল্ড না হয়, তার জন্য এটি দরকার।'
        },
        explanation: {
          en: 'In UI programming, emitting the same state multiple times causes redundant frame rebuilds. The distinct operator prevents wasteful repainting by filtering duplicates.',
          bn: 'এর মাধ্যমে অপ্রয়োজনীয় রেন্ডারিং বন্ধ করে অ্যাপকে আরও দ্রুতগতির রাখা যায়।'
        }
      },
      {
        id: 'quiz-as-broadcast-stream-buffering',
        kind: 'mcq',
        topic: 'as-broadcast-stream-subscription-safety',
        question: {
          en: 'What critical behavioral change occurs when converting a stream using "stream.asBroadcastStream()"?',
          bn: '"stream.asBroadcastStream()" দিয়ে কোনো স্ট্রিম রূপান্তর করলে কোন গুরুত্বপূর্ণ আচরণগত পরিবর্তন ঘটে?'
        },
        options: [
          {
            en: 'Events emitted before a subscriber joins are no longer buffered for that subscriber; listeners only receive events pushed after their individual subscription starts',
            bn: 'নতুন গ্রাহক যুক্ত হওয়ার আগে নির্গত মানগুলো আর তার জন্য বাফার করে রাখা হয় না; গ্রাহক কেবল তার যুক্ত হওয়ার পরের মানগুলোই পেতে শুরু করে'
          },
          {
            en: 'The stream converts all data into 64-bit integer values',
            bn: 'স্ট্রিমটি সমস্ত ডেটাকে ৬৪-বিট পূর্ণসংখ্যায় রূপান্তর করে'
          },
          {
            en: 'The application process is restarted by the operating system',
            bn: 'অপারেটিং সিস্টেম অ্যাপ্লিকেশনের প্রসেসটি রিস্টার্ট করে'
          },
          {
            en: 'asBroadcastStream disables error handling completely',
            bn: 'asBroadcastStream এরর হ্যান্ডলিং সম্পূর্ণ বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Broadcast streams do not buffer past events for late-joining subscribers.',
          bn: 'রেডিওর মতো: চালু করার পর থেকে যা বাজবে কেবল তা-ই শোনা যাবে, আগেরগুলো নয়।'
        },
        explanation: {
          en: 'Unlike single-subscription streams that wait and buffer for a listener, broadcast streams drop events if no subscribers are listening at the moment of emission.',
          bn: 'তাই কেউ না শুনলে ডেটা হারিয়ে যায়, যা লাইভ ইভেন্ট বা ব্রডকাস্টের জন্য স্বাভাবিক।'
        }
      },
      {
        id: 'quiz-stream-yield-star-delegation',
        kind: 'mcq',
        topic: 'yield-star-stream-delegation-operator',
        question: {
          en: 'What does the "yield*" operator achieve inside an asynchronous generator function ("async*")?',
          bn: 'একটি অ্যাসিনক্রোনাস জেনারেটর ফাংশনে ("async*") "yield*" অপারেটর কী কাজ সম্পন্ন করে?'
        },
        options: [
          {
            en: 'It delegates emission to an entire upstream Stream or Iterable, forwarding all of its values onto the output stream until exhausted',
            bn: 'এটি একটি সম্পূর্ণ স্ট্রিম বা ইটারেবলের কাছে ডেটা পাঠানোর দায়িত্ব সমর্পণ করে এবং তার সমস্ত মান শেষ না হওয়া পর্যন্ত ফরোয়ার্ড করে'
          },
          {
            en: 'It halts the execution of the smartphone forever',
            bn: 'এটি স্মার্টফোনের কাজ চিরতরে বন্ধ করে দেয়'
          },
          {
            en: 'It encrypts the stream with a 4096-bit RSA key',
            bn: 'এটি স্ট্রিমটিকে একটি ৪০৯৬-বিট আরএসএ কি দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'yield* is only permitted in Python generators',
            bn: 'yield* কেবল পাইথন জেনারেটরে অনুমোদিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'yield* delegates to another Stream or Iterable completely.',
          bn: 'অন্য কোনো সম্পূর্ণ স্ট্রিমের সব মান নিজের স্ট্রিমে সরাসরি ঢেলে দেওয়ার সিনট্যাক্স।'
        },
        explanation: {
          en: 'Instead of manually looping through a sub-stream with await for, "yield* subStream;" efficiently pipes all values from the sub-stream directly into the parent stream.',
          bn: 'এর মাধ্যমে সাব-স্ট্রিমের সব ডেটা অত্যন্ত পরিচ্ছন্ন ও দ্রুত উপায়ে মূল স্ট্রিমে পাঠানো যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'nulls-and-the-safety',
    title: {
      en: 'Sound Null Safety, Flow Analysis & Late Bindings',
      bn: 'সাউন্ড নাল সেফটি, ফ্লো অ্যানালিসিস এবং লেট বাইন্ডিংস'
    }
  }
};
