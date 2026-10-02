import type { Lesson } from '../../../lib/types';

export const pipelineDepotLesson: Lesson = {
  slug: 'the-pipeline-depot',
  tech: 'angular',
  title: {
    en: 'RxJS Streams & HttpClient — Observables, Operators & Signals Interop',
    bn: 'RxJS স্ট্রিমস ও HttpClient — Observables, অপারেটরস ও সিগন্যালস রূপান্তর'
  },
  summary: {
    en: 'Asynchronous event streaming and HTTP networking form the backbone of modern data-driven web applications. In this lesson, you will master Angular HttpClient with functional interceptors, chain RxJS transformation operators like switchMap and debounceTime, handle network errors gracefully with catchError, and seamlessly bridge Observables to Signals using toSignal.',
    bn: 'অ্যাসিনক্রোনাস ইভেন্ট স্ট্রিম এবং এইচটিটিপি নেটওয়ার্কিং হলো আধুনিক ডাটা-ড্রিভেন ওয়েব অ্যাপ্লিকেশনের প্রাণকেন্দ্র। এই পাঠে আপনি ফাংশনাল ইন্টারসেপ্টর সহ Angular HttpClient, switchMap ও debounceTime-এর মতো রূপান্তর অপারেটর, catchError দিয়ে এরর হ্যান্ডলিং এবং toSignal দিয়ে Observable থেকে সিগন্যালে নিখুঁত রূপান্তর গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'rxjs-and-httpclient-architecture',
      text: {
        en: 'The RxJS Streaming Architecture and HttpClient Pipeline',
        bn: 'RxJS স্ট্রিমিং আর্কিটেকচার ও HttpClient পাইপলাইন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When your Angular application communicates with backend REST (Representational State Transfer) services or handles continuous user keystrokes, managing timing and race conditions requires reactive streams. RxJS Observables model asynchronous data arriving over time, while Angular\'s HttpClient provides strongly typed, immutable request pipelines. Modern Angular unifies both worlds by converting streams into synchronous signals via toSignal().',
        bn: 'যখন আপনার Angular অ্যাপ্লিকেশন কোনো ব্যাকএন্ড REST (রিপ্রেজেন্টেশনাল স্টেট ট্রান্সফার) এপিআইয়ের সাথে যোগাযোগ করে বা ব্যবহারকারীর টাইপিং ইভেন্ট হ্যান্ডল করে, তখন রেস কন্ডিশন ও টাইমিং নিয়ন্ত্রণে রিঅ্যাক্টিভ স্ট্রিম প্রয়োজন হয়। RxJS Observables সময়ের সাথে আসা অ্যাসিনক্রোনাস ডাটা পরিচালনা করে এবং HttpClient টাইপ-সেফ রিকোয়েস্ট পাঠায়। আধুনিক Angular toSignal() ফাংশন দিয়ে এই জটিল স্ট্রিমকে সাধারণ সিগন্যালে রূপান্তর করে কোড সহজ করে তোলে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Observable',
          def: {
            en: 'A lazy push-based collection representing an asynchronous stream of values emitted over time.',
            bn: 'একটি লেজি পুশ-ভিত্তিক ডাটা স্ট্রিম যা সময়ের সাথে সাথে এক বা একাধিক অ্যাসিনক্রোনাস মান সরবরাহ করে।'
          }
        },
        {
          term: 'switchMap()',
          def: {
            en: 'An RxJS flattening operator that cancels any pending inner HTTP request whenever a new value arrives.',
            bn: 'একটি RxJS অপারেটর যা নতুন মান আসামাত্র পূর্বের চলমান নেটওয়ার্ক রিকোয়েস্ট সাথে সাথে বাতিল করে দেয়।'
          }
        },
        {
          term: 'toSignal()',
          def: {
            en: 'A bridge utility converting an RxJS Observable into an Angular Signal with automatic unsubscription cleanup.',
            bn: 'একটি রূপান্তরকারী ইউটিলিটি যা মেমোরি পরিষ্কারের সুবিধা সহ Observable-কে সরাসরি Angular সিগন্যালে রূপান্তর করে।'
          }
        },
        {
          term: 'HttpInterceptorFn',
          def: {
            en: 'A functional middleware intercepting and transforming outgoing HTTP requests or incoming responses.',
            bn: 'একটি ফাংশনাল মিডলওয়্যার যা সার্ভারে পাঠানো বা আসা রিকোয়েস্টে হেডার বা টোকেন যুক্ত করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'rxjs-operators-matrix',
      text: {
        en: 'Core RxJS Operators and HTTP Pipeline Matrix',
        bn: 'মূল RxJS অপারেটরস ও এইচটিটিপি পাইপলাইন ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Operator Name', bn: 'অপারেটরের নাম' },
        { en: 'Stream Behavior', bn: 'স্ট্রিম আচরণ' },
        { en: 'Typical Engineering Use Case', bn: 'বাস্তব ব্যবহার' }
      ],
      rows: [
        [
          { en: 'debounceTime(300)', bn: 'debounceTime(300)' },
          { en: 'Pauses emissions until 300ms of user silence passes', bn: 'ব্যবহারকারীর টাইপিং থামার পর ৩০০ মিলিসেকেন্ড অপেক্ষা করে' },
          { en: 'Search input fields to prevent flooding the backend with requests', bn: 'সার্চ বক্সে অপ্রয়োজনীয় ব্যাকএন্ড রিকোয়েস্টের বন্যা বন্ধ করতে' }
        ],
        [
          { en: 'distinctUntilChanged()', bn: 'distinctUntilChanged()' },
          { en: 'Suppresses emissions if the value matches the previous value', bn: 'পূর্বের মানের সাথে বর্তমান মান মিলে গেলে নতুন ইভেন্ট আটকায়' },
          { en: 'Ignoring non-text keystrokes (like arrow keys) in search inputs', bn: 'তীর বা শিফট বাটনের মতো অপ্রয়োজনীয় কী-প্রেস এড়িয়ে যেতে' }
        ],
        [
          { en: 'switchMap(query => ...)', bn: 'switchMap(query => ...)' },
          { en: 'Cancels prior active request and switches to the new request', bn: 'পূর্বের পেন্ডিং রিকোয়েস্ট বাতিল করে নতুন রিকোয়েস্টে চলে যায়' },
          { en: 'Typeahead search ensuring stale responses never overwrite new queries', bn: 'টাইপঅ্যাহেড সার্চ যাতে পুরোনো ডাটা এসে নতুন রেজাল্ট নষ্ট না করে' }
        ],
        [
          { en: 'catchError(err => of([]))', bn: 'catchError(err => of([]))' },
          { en: 'Catches network exceptions and recovers with a fallback stream', bn: 'নেটওয়ার্ক এরর শনাক্ত করে ফলব্যাক মান সরবরাহ করে সচল রাখে' },
          { en: 'Graceful degradation displaying empty state when network fails', bn: 'সার্ভার ডাউন থাকলেও অ্যাপ ক্র্যাশ না করিয়ে খালি রেজাল্ট দেখানো' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'stream-simulation-code',
      text: {
        en: 'Working RxJS switchMap and toSignal Pipeline Simulation',
        bn: 'কার্যকরী RxJS switchMap ও toSignal পাইপলাইন সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of RxJS Stream Pipeline with debounce, switchMap cancellation and Signal bridge
class MockSearchStream {
  constructor() {
    this.history = [];
    this.activeRequestId = 0;
  }

  // Simulates search query pipeline: debounce, cancel old, fetch latest
  search(query) {
    this.activeRequestId += 1;
    const currentId = this.activeRequestId;

    // Simulate backend search matching items
    const database = ['Angular', 'TypeScript', 'Signals', 'RxJS', 'NgRx'];
    const matches = database.filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    );

    this.history.push({
      requestId: currentId,
      query: query,
      resultsCount: matches.length,
      matched: matches
    });

    return {
      id: currentId,
      items: matches
    };
  }
}

const pipeline = new MockSearchStream();

// 1. User types "a" (Request 1 started)
const req1 = pipeline.search('a');

// 2. User quickly types "ang" before req1 completes (switchMap cancels req1, runs req2)
const req2 = pipeline.search('ang');

// 3. User types "sig"
const req3 = pipeline.search('sig');

console.log('Total search requests initiated:', pipeline.activeRequestId);
// -> Total search requests initiated: 3
console.log('Results count for latest query "sig":', req3.items.length);
// -> Results count for latest query "sig": 1
console.log('First matched item name:', req3.items[0]);
// -> First matched item name: Signals`,
      caption: {
        en: 'Pipeline processes 3 search queries, canceling prior runs to yield 1 match for "sig"',
        bn: 'পাইপলাইন ৩ টি রিকোয়েস্ট প্রসেস করে আগেরগুলো বাতিল করে "sig" এর জন্য ১ টি রেজাল্ট দিচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'stream-discipline-rules',
      text: {
        en: 'RxJS and Signals Interoperability Best Practices',
        bn: 'RxJS ও সিগন্যালস সমন্বয়ের সেরা নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When architecting modern Angular applications, enforce a strict boundary between asynchronous transport and synchronous presentation. Use RxJS Observables to handle asynchronous streaming, retry logic, and debouncing. At the component or service boundary, convert the stream into a Signal with toSignal() so templates can consume data with simple function calls.',
        bn: 'আধুনিক Angular অ্যাপ্লিকেশনে নেটওয়ার্ক ট্রান্সপোর্ট এবং স্ক্রিনের প্রেজেন্টেশন স্টেটের মাঝে পরিষ্কার সীমানা বজায় রাখুন। নেটওয়ার্ক কল, রিট্রাই ও টাইমিংয়ের জন্য RxJS Observables ব্যবহার করুন। কিন্তু কম্পোনেন্ট বা সার্ভিসের সীমানায় toSignal() দিয়ে সেটিকে সিগন্যালে বদলে ফেলুন, যাতে টেমপ্লেটে কোনো সাবস্ক্রিপশন ম্যানুয়ালি হ্যান্ডল করার ঝামেলা না থাকে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Use toSignal() at Service Boundaries: Convert incoming HTTP Observables into signals with initialValue to prevent template null checks.',
          bn: '১. toSignal() দিয়ে রূপান্তর: টেমপ্লেটে নাল চেকিং এড়াতে initialValue সহ Observable-কে সরাসরি সিগন্যালে রূপান্তর করুন।'
        },
        {
          en: '2. Prevent Race Conditions with switchMap: When handling search or filtering inputs, always use switchMap to discard stale pending HTTP requests.',
          bn: '২. switchMap দিয়ে রেস আটকানো: সার্চ বা ফিল্টারে সর্বদা switchMap ব্যবহার করুন যাতে পুরোনো রিকোয়েস্টের ধীরগতির উত্তর নতুন রেজাল্ট নষ্ট না করে।'
        },
        {
          en: '3. Functional Interceptors: Register HTTP interceptors using provideHttpClient(withInterceptors([authInterceptor])) instead of legacy class interceptors.',
          bn: '৩. ফাংশনাল ইন্টারসেপ্টর: পুরোনো ক্লাসের বদলে আধুনিক provideHttpClient(withInterceptors([authInterceptor])) ব্যবহার করুন।'
        },
        {
          en: '4. Never Leave Dangling Subscriptions: If subscribing manually to Observables, always unsubscribe inside DestroyRef or use takeUntilDestroyed().',
          bn: '৪. মেমোরি লিক রোধ: হাতে সাবস্ক্রাইব করলে সর্বদা takeUntilDestroyed() ব্যবহার করুন যাতে কম্পোনেন্ট ধ্বংসের সাথে সাবস্ক্রিপশন বাতিল হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ng-pip-ex1',
      kind: 'mcq',
      topic: 'switchMap operator race condition cancellation mechanics',
      question: {
        en: 'Why is "switchMap" essential when implementing search typeahead input boxes that query an HTTP endpoint?',
        bn: 'সার্চ বক্সে এইচটিটিপি রিকোয়েস্ট পাঠানোর সময় "switchMap" ব্যবহার করা কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'If a user types a new letter while a previous HTTP request is still in flight, switchMap cancels the previous in-flight request and switches to the new inner Observable, preventing slow stale responses from overwriting newer search results',
          bn: 'আগের রিকোয়েস্ট চলাকালীন ব্যবহারকারী নতুন কিছু টাইপ করলে switchMap পুরোনো রিকোয়েস্টটি সাথে সাথে বাতিল করে নতুনটি শুরু করে, যার ফলে পুরোনো ধীরগতির রেসপন্স এসে নতুন রেজাল্ট নষ্ট করতে পারে না'
        },
        {
          en: 'switchMap prevents the computer keyboard from overheating',
          bn: 'switchMap কম্পিউটার কীবোর্ড অতিরিক্ত গরম হওয়া রোধ করে'
        },
        {
          en: 'It permanently disables the web server database',
          bn: 'এটি ওয়েব সার্ভার ডাটাবেজ স্থায়ীভাবে বন্ধ করে দেয়'
        },
        {
          en: 'switchMap converts text characters into musical notes',
          bn: 'switchMap টেক্সটের অক্ষরগুলোকে মিউজিক্যাল নোটে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'switchMap cancels the prior inner observable whenever a new outer value arrives.',
        bn: 'নতুন মান আসামাত্র আগের চলমান রিকোয়েস্ট বাতিল করাই switchMap-এর মূল কাজ।'
      },
      explanation: {
        en: 'Network latency varies. Without switchMap, an earlier slow request for "cat" might arrive after a faster request for "cats", rendering outdated results. switchMap automatically aborts stale requests.',
        bn: 'নেটওয়ার্কের গতির কারণে আগে পাঠানো রিকোয়েস্ট পরে আসতে পারে। switchMap পুরোনো রিকোয়েস্ট বাতিল করে কেবল সর্বশেষ টাইপ করা তথ্যের উত্তর স্ক্রিনে প্রদর্শন নিশ্চিত করে।'
      }
    },
    {
      id: 'ng-pip-ex2',
      kind: 'mcq',
      topic: 'toSignal utility converting observables to signals',
      question: {
        en: 'What architectural convenience does the "toSignal(observable$, { initialValue: [] })" function provide in modern Angular?',
        bn: 'আধুনিক Angular-এ "toSignal(observable$, { initialValue: [] })" ফাংশন কোন আর্কিটেকচারাল সুবিধা দেয়?'
      },
      options: [
        {
          en: 'It subscribes to the Observable and exposes emissions as a synchronous Signal, automatically un-subscribing when the surrounding injection context is destroyed',
          bn: 'এটি Observable-এ সাবস্ক্রাইব করে মানগুলোকে একটি সাধারণ সিগন্যালে পরিণত করে এবং কম্পোনেন্ট ধ্বংস হলে নিজে থেকেই সাবস্ক্রিপশন বন্ধ করে মেমোরি পরিষ্কার করে'
        },
        {
          en: 'It increases internet bandwidth speeds by 500%',
          bn: 'এটি ইন্টারনেট ব্যান্ডউইথের গতি ৫০০% বৃদ্ধি করে'
        },
        {
          en: 'toSignal deletes all CSS files from the web browser cache',
          bn: 'toSignal ওয়েব ব্রাউজার ক্যাশ থেকে সমস্ত সিএসএস ফাইল মুছে দেয়'
        },
        {
          en: 'It converts the Angular application into an offline desktop program',
          bn: 'এটি Angular অ্যাপ্লিকেশনটিকে একটি অফলাইন ডেস্কটপ প্রোগ্রামে পরিণত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'toSignal bridges reactive streams to synchronous signals with automated teardown.',
        bn: 'toSignal স্ট্রিমিংকে সাধারণ সিগন্যালে বদলে দেয় এবং মেমোরি লিক হতে দেয় না।'
      },
      explanation: {
        en: 'toSignal() removes the need to manually manage subscriptions or clutter templates with the async pipe. It tracks component destruction and cancels subscriptions automatically.',
        bn: 'toSignal() ব্যবহারের ফলে টেমপ্লেটে বারবার async পাইপ লিখতে হয় না বা হাতে unsubscribe করতে হয় না। এটি নিজে থেকেই পুরো লাইফসাইকেল নিখুঁতভাবে পরিচালনা করে।'
      }
    },
    {
      id: 'ng-pip-ex3',
      kind: 'mcq',
      topic: 'functional http interceptors configuration in modern angular',
      question: {
        en: 'How are HTTP interceptors configured in modern standalone Angular applications?',
        bn: 'আধুনিক স্ট্যান্ডঅ্যালোন Angular অ্যাপ্লিকেশনে কীভাবে এইচটিটিপি ইন্টারসেপ্টর কনফিগার করা হয়?'
      },
      options: [
        {
          en: 'Provide them via "provideHttpClient(withInterceptors([authInterceptorFn]))" using pure functional middleware matching "(req, next) => next(req)"',
          bn: '"provideHttpClient(withInterceptors([authInterceptorFn]))"-এর মাধ্যমে "(req, next) => next(req)" ফরম্যাটের সাধারণ ফাংশনাল মিডলওয়্যার দিয়ে'
        },
        {
          en: 'Register them in the Windows Registry settings',
          bn: 'উইন্ডোজের রেজিস্ট্রি সেটিংসে যুক্ত করার মাধ্যমে'
        },
        {
          en: 'Hardcode authentication headers directly into the physical WiFi router',
          bn: 'ওয়াইফাই রাউটারে সরাসরি প্রমাণীকরণ হেডার লিখে দিয়ে'
        },
        {
          en: 'HTTP interceptors are forbidden in modern standalone Angular',
          bn: 'আধুনিক স্ট্যান্ডঅ্যালোন Angular-এ এইচটিটিপি ইন্টারসেপ্টর সম্পূর্ণ নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Modern Angular uses functional interceptors with provideHttpClient(withInterceptors([..])).',
        bn: 'আধুনিক Angular ক্লাসের বদলে withInterceptors ফাংশন দিয়ে ইন্টারসেপ্টর যুক্ত করে।'
      },
      explanation: {
        en: 'Legacy HTTP_INTERCEPTORS multi-providers required verbose classes. Modern Angular uses functional HttpInterceptorFn middleware configured cleanly inside provideHttpClient().',
        bn: 'পুরোনো ক্লাসের জটিল বয়লারপ্লেট বাদ দিয়ে আধুনিক Angular সাধারণ ফাংশন দিয়ে ইন্টারসেপ্টর বানানোর সুবিধা এনেছে, যা provideHttpClient()-এ সহজেই পাস করা যায়।'
      }
    },
    {
      id: 'ng-pip-ex4',
      kind: 'mcq',
      topic: 'catchError and of operator for graceful network failure recovery',
      question: {
        en: 'What happens when an HTTP Observable uses ".pipe(catchError(err => of([])))" in Angular?',
        bn: 'কোনো এইচটিটিপি Observable-এ ".pipe(catchError(err => of([])))" ব্যবহার করলে কী ঘটে?'
      },
      options: [
        {
          en: 'It intercepts the network error, prevents the stream from terminating with an uncaught error, and emits a fallback empty array "[]" so the UI continues rendering gracefully',
          bn: 'এটি নেটওয়ার্ক এরর শনাক্ত করে স্ট্রিম ক্র্যাশ হওয়া আটকে দেয় এবং একটি খালি অ্যারে "[]" পাঠিয়ে ইন্টারফেসকে স্বাভাবিকভাবে চালু রাখে'
        },
        {
          en: 'It deletes all user cookies from the local storage disk',
          bn: 'এটি লোকাল স্টোরেজ থেকে সব ব্যবহারকারীর কুকি মুছে ফেলে'
        },
        {
          en: 'The catchError operator turns off the computer monitor',
          bn: 'catchError অপারেটর কম্পিউটার মনিটর বন্ধ করে দেয়'
        },
        {
          en: 'It sends an SMS message directly to the backend database server',
          bn: 'এটি সরাসরি ডাটাবেজ সার্ভারে একটি এসএমএস পাঠিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'catchError catches stream errors and returns a replacement fallback Observable.',
        bn: 'catchError ত্রুটি আটকে দিয়ে একটি নিরাপদ বিকল্প ডাটা স্ট্রিম সরবরাহ করে।'
      },
      explanation: {
        en: 'Unhandled HTTP errors terminate an Observable sequence permanently. catchError() handles the error and returns a new Observable (like of([])), allowing the application to recover gracefully.',
        bn: 'এরর হ্যান্ডল না করলে স্ট্রিম পুরোপুরি বন্ধ হয়ে যায়। catchError দিয়ে of([]) দিলে ইউজার ক্র্যাশ না দেখে কেবল একটি খালি তালিকা দেখে এবং অ্যাপ অক্ষত থাকে।'
      }
    }
  ],
  quiz: {
    id: 'the-pipeline-depot-quiz',
    title: {
      en: 'RxJS Streams & HttpClient Architecture Quiz',
      bn: 'RxJS স্ট্রিমস ও HttpClient আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-takeuntildestroyed-operator',
        kind: 'mcq',
        topic: 'takeUntilDestroyed operator automatic unsubscription',
        question: {
          en: 'What problem does the "takeUntilDestroyed()" operator solve when subscribing to Observables inside an Angular component?',
          bn: 'Angular কম্পোনেন্টে Observable সাবস্ক্রাইব করার সময় "takeUntilDestroyed()" অপারেটর কোন সমস্যার সমাধান করে?'
        },
        options: [
          {
            en: 'It automatically unsubscribes from the stream when the component is destroyed, eliminating memory leaks without requiring manual ngOnDestroy boilerplate or Subject triggers',
            bn: 'কম্পোনেন্ট ধ্বংস হওয়ার সাথে সাথে এটি স্বয়ংক্রিয়ভাবে সাবস্ক্রিপশন বাতিল করে, ফলে ngOnDestroy বা ম্যানুয়াল কোড ছাড়াই মেমোরি লিক পুরোপুরি প্রতিরোধ করা যায়'
          },
          {
            en: 'It permanently deletes the component file from the computer hard drive',
            bn: 'এটি কম্পিউটারের হার্ডড্রাইভ থেকে উপাদান ফাইলটি চিরতরে মুছে ফেলে'
          },
          {
            en: 'It converts HTTP GET requests into WebSocket connections',
            bn: 'এটি এইচটিটিপি গেট রিকোয়েস্টকে ওয়েবসকেট সংযোগে রূপান্তর করে'
          },
          {
            en: 'takeUntilDestroyed only works on weekend days',
            bn: 'takeUntilDestroyed কেবল ছুটির দিনেই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'takeUntilDestroyed ties observable subscription lifecycles to DestroyRef.',
          bn: 'takeUntilDestroyed কম্পোনেন্ট মুছে যাওয়ার সাথে সাথে স্বয়ংক্রিয়ভাবে সাবস্ক্রিপশন বন্ধ করে।'
        },
        explanation: {
          en: 'In previous Angular versions, developers had to maintain a destroyed$ Subject and call takeUntil(this.destroyed$) inside ngOnDestroy. takeUntilDestroyed() automates this via DestroyRef.',
          bn: 'আগে ngOnDestroy-তে ম্যানুয়ালি সাবস্ক্রিপশন আনসাবস্ক্রাইব করতে হতো। takeUntilDestroyed() কম্পোনেন্টের লাইফসাইকেল ধরে নিজে থেকেই এটি করে মেমোরি সুরক্ষিত রাখে।'
        }
      },
      {
        id: 'q-immutable-httprequest-cloning',
        kind: 'mcq',
        topic: 'HttpRequest immutability and req.clone() in interceptors',
        question: {
          en: 'Why do HTTP interceptors use "req.clone({ setHeaders: { ... } })" instead of mutating properties directly on the request: "req.headers.set(...) "?',
          bn: 'এইচটিটিপি ইন্টারসেপ্টরে সরাসরি মান না বদলে "req.clone({ setHeaders: { ... } })" কেন ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'HttpRequest objects are intentionally immutable in Angular; modifying properties directly throws a runtime error or fails silently because cloning is required to preserve request purity across retries',
            bn: 'Angular-এ HttpRequest অবজেক্ট পুরোপুরি অপরিবর্তনশীল (ইমিউটেবল); সরাসরি পরিবর্তন করলে এরর দেয় বা কাজ করে না, কারণ রিকোয়েস্ট রিট্রাই করার সময় মূল রিকোয়েস্ট অক্ষত রাখা জরুরি'
          },
          {
            en: 'Because cloning creates a physical clone of the computer hardware',
            bn: 'কারণ ক্লোনিং কম্পিউটারের হার্ডওয়্যারের একটি বাস্তব ক্লোন তৈরি করে'
          },
          {
            en: 'Headers can only be added to requests on Linux servers',
            bn: 'হেডার কেবল লিনাক্স সার্ভারেই রিকোয়েস্টে যোগ করা যায়'
          },
          {
            en: 'req.clone converts HTTP requests into SMS text messages',
            bn: 'req.clone এইচটিটিপি রিকোয়েস্টকে এসএমএস মেসেজে বদলে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'HttpRequest instances are immutable and must be cloned to update headers.',
          bn: 'HttpRequest পরিবর্তন করা যায় না, তাই নতুন হেডার দিতে clone() করতে হয়।'
        },
        explanation: {
          en: 'Angular HttpRequest objects are immutable to allow safe retries and middleware chaining. Attempting to mutate req.headers directly is invalid; you must create a clone with req.clone().',
          bn: 'রিকোয়েস্ট ফেইল করলে পুনরায় পাঠানোর সুবিধার্থে এটি অপরিবর্তনশীল রাখা হয়েছে। তাই টোকেন বা হেডার যোগ করার একমাত্র সঠিক নিয়ম হলো req.clone() করা।'
        }
      },
      {
        id: 'q-toobservable-signal-bridge',
        kind: 'mcq',
        topic: 'toObservable utility converting signals to observables',
        question: {
          en: 'When would an Angular engineer use the "toObservable(signal)" function?',
          bn: 'একজন Angular ইঞ্জিনিয়ার কখন "toObservable(signal)" ফাংশনটি ব্যবহার করবেন?'
        },
        options: [
          {
            en: 'When they need to pipe a signal state into RxJS operators like debounceTime, switchMap, or distinctUntilChanged to coordinate complex asynchronous workflows',
            bn: 'যখন কোনো সিগন্যালের মানকে debounceTime, switchMap বা distinctUntilChanged-এর মতো RxJS অপারেটরে পাস করে জটিল অ্যাসিনক্রোনাস কাজ সম্পন্ন করার প্রয়োজন হয়'
          },
          {
            en: 'To print the signal value onto physical printer paper',
            bn: 'সিগন্যালের মান কাগজে প্রিন্ট করার জন্য'
          },
          {
            en: 'toObservable is used to compress image file sizes by 99%',
            bn: 'toObservable ছবির ফাইলের সাইজ ৯৯% কমাতে ব্যবহৃত হয়'
          },
          {
            en: 'Signals and Observables cannot be converted between each other',
            bn: 'সিগন্যাল এবং Observable পরস্পরের মধ্যে রূপান্তর করা একেবারেই অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'toObservable allows using RxJS stream operators on signal state changes.',
          bn: 'toObservable সিগন্যালের পরিবর্তনের ওপর RxJS অপারেটর চালানোর সুবিধা দেয়।'
        },
        explanation: {
          en: 'toObservable() converts a signal into a stream. This allows leveraging RxJS operators (like debounceTime for search inputs or switchMap for API calls) directly triggered by signal changes.',
          bn: 'সিগন্যালে সরাসরি debounce করা যায় না। তাই toObservable() দিয়ে স্ট্রিমে পরিণত করে debounceTime বা switchMap চালিয়ে পুনরায় এপিআই কল করা সহজ হয়।'
        }
      },
      {
        id: 'q-forkjoin-vs-combinelatest-in-angular',
        kind: 'mcq',
        topic: 'parallel HTTP orchestration with forkJoin',
        question: {
          en: 'Which RxJS operator is ideal for firing 3 independent HTTP GET requests in parallel and waiting until all 3 complete before rendering a dashboard?',
          bn: 'একসাথে ৩টি স্বাধীন এইচটিটিপি রিকোয়েস্ট প্যারালালে পাঠিয়ে সবগুলোর কাজ শেষ হওয়া পর্যন্ত অপেক্ষা করতে কোন RxJS অপারেটরটি সবচেয়ে উপযুক্ত?'
        },
      options: [
        {
          en: '"forkJoin([http.get(usersUrl), http.get(ordersUrl), http.get(configUrl)])" fires all requests concurrently and emits a single array of responses when all complete',
          bn: '"forkJoin([http.get(usersUrl), http.get(ordersUrl), http.get(configUrl)])" সবগুলো রিকোয়েস্ট একসাথে পাঠায় এবং সবার কাজ শেষ হলে সবগুলোর উত্তরের একটি একক অ্যারে প্রদান করে'
        },
          {
            en: 'Write an infinite while loop calling fetch()',
            bn: 'fetch() ডেকে একটি অবিরাম হোয়াইল লুপ লিখে'
          },
          {
            en: 'Parallel HTTP requests are forbidden by the HTTP/2 specification',
            bn: 'এইচটিটিপি/২ স্পেসিফিকেশন অনুযায়ী একসাথে একাধিক রিকোয়েস্ট পাঠানো নিষিদ্ধ'
          },
          {
            en: 'forkJoin only works with WebSocket connections',
            bn: 'forkJoin কেবল ওয়েবসকেট সংযোগেই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'forkJoin acts like Promise.all for RxJS Observables that complete.',
          bn: 'forkJoin মূলত RxJS-এর জন্য Promise.all-এর মতো কাজ করে।'
        },
        explanation: {
          en: 'forkJoin executes multiple Observables in parallel and waits for all of them to emit their final value and complete. It is the RxJS equivalent of Promise.all() for HTTP requests.',
          bn: 'ড্যাশবোর্ডের একাধিক ডাটা আলাদা এপিআই থেকে একসাথে আনার জন্য forkJoin সেরা। এটি সব রিকোয়েস্ট প্যারালালে চালিয়ে সবার শেষ রেসপন্স একসাথে রিটার্ন করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-corridor-posts',
    title: {
      en: 'Angular Router — Functional Guards, Route Inputs & Lazy Loading',
      bn: 'Angular রাউটার — ফাংশনাল গার্ডস, রুট ইনপুটস ও লেজি লোডিং'
    }
  }
};
