import type { Hub } from '../../lib/types';
import { signalGridLesson } from './lessons/the-signal-grid';
import { blueprintRoomsLesson } from './lessons/the-blueprint-rooms';
import { utilityLinesLesson } from './lessons/the-utility-lines';
import { pipelineDepotLesson } from './lessons/the-pipeline-depot';
import { corridorPostsLesson } from './lessons/the-corridor-posts';
import { permitBureauLesson } from './lessons/the-permit-bureau';
import { templateCraftsmenLesson } from './lessons/the-template-craftsmen';
import { changeDetectiveLesson } from './lessons/the-change-detective';

export const angularHub: Hub = {
  slug: 'angular',
  name: 'Angular',
  icon: '🅰️',
  tagline: {
    en: 'Enterprise-grade TypeScript web application platform: Signals, Standalone Components, built-in control flow, and hierarchical dependency injection.',
    bn: 'এন্টারপ্রাইজ-গ্রেড টাইপস্ক্রিপ্ট ওয়েব অ্যাপ্লিকেশন প্ল্যাটফর্ম: সিগন্যালস, স্ট্যান্ডঅ্যালোন কম্পোনেন্টস, বিল্ট-ইন কন্ট্রোল ফ্লো ও হায়ারার্কিক্যাল ডিপেন্ডেন্সি ইনজেকশন।'
  },
  about: {
    en: 'Angular is Google\'s full-featured, opinionated application framework engineered for building high-performance enterprise web software in TypeScript. Modern Angular (v17+) features a reactive revolution: fine-grained Signals for zero-overhead change detection, Standalone Components that eliminate legacy NgModule boilerplate, native declarative control flow (@if, @for, @switch), functional dependency injection with inject(), type-safe Reactive Forms, and seamless RxJS asynchronous stream interoperability.',
    bn: 'Angular হলো টাইপস্ক্রিপ্টে হাই-পারফরম্যান্স এন্টারপ্রাইজ ওয়েব সফটওয়্যার তৈরির জন্য গুগলের একটি পূর্ণাঙ্গ অপিনিয়নেটেড অ্যাপ্লিকেশন ফ্রেমওয়ার্ক। আধুনিক Angular (ভার্সন ১৭+) একটি রিঅ্যাক্টিভ বিপ্লব এনেছে: নিখুঁত স্টেট ট্র্যাকিংয়ের জন্য সিগন্যালস, পুরোনো NgModule বাদ দিয়ে স্ট্যান্ডঅ্যালোন কম্পোনেন্টস, বিল্ট-ইন ডিক্লেয়ারেটিভ কন্ট্রোল ফ্লো (@if, @for, @switch), inject() দিয়ে ফাংশনাল ডিপেন্ডেন্সি ইনজেকশন, টাইপ-সেফ রিঅ্যাক্টিভ ফর্ম এবং RxJS অ্যাসিনক্রোনাস স্ট্রিমের সহজ সমন্বয়।'
  },
  roadmap: [
    {
      title: { en: 'Phase 1 — Reactivity & Modern Core Architecture', bn: 'ধাপ ১ — রিঅ্যাক্টিভিটি ও আধুনিক কোর আর্কিটেকচার' },
      items: [
        { en: 'Angular Signals: signal(), computed() and effect() reactive primitives (Lesson 1)', bn: 'Angular সিগন্যালস: signal(), computed() ও effect() রিঅ্যাক্টিভ ভিত্তি (পাঠ ১)' },
        { en: 'Standalone Components: @Component metadata, imports array, and template encapsulation (Lesson 2)', bn: 'স্ট্যান্ডঅ্যালোন কম্পোনেন্টস: @Component মেটাডাটা, imports অ্যারে ও টেমপ্লেট এনক্যাপসুলেশন (পাঠ ২)' },
        { en: 'Modern Template Control Flow: @if, @else, @for with mandatory track, and @switch', bn: 'আধুনিক টেমপ্লেট কন্ট্রোল ফ্লো: @if, @else, বাধ্যতামূলক track সহ @for ও @switch' },
        { en: 'Component Data Binding: [property], (event), [(two-way)], and class/style mappings', bn: 'কম্পোনেন্ট ডাটা বাইন্ডিং: [property], (event), [(two-way)] ও ক্লাস/স্টাইল ম্যাপিং' }
      ]
    },
    {
      title: { en: 'Phase 2 — Services, Dependency Injection & RxJS', bn: 'ধাপ ২ — সার্ভিসেস, ডিপেন্ডেন্সি ইনজেকশন ও RxJS' },
      items: [
        { en: 'Hierarchical Dependency Injection: @Injectable, providedIn: "root", and modern inject() (Lesson 3)', bn: 'হায়ারার্কিক্যাল ডিপেন্ডেন্সি ইনজেকশন: @Injectable, providedIn: "root" ও আধুনিক inject() (পাঠ ৩)' },
        { en: 'Injection Contexts: InjectionToken, EnvironmentProviders, and view-level scoping', bn: 'ইনজেকশন কনটেক্সট: InjectionToken, EnvironmentProviders ও ভিউ-লেভেল স্কোপিং' },
        { en: 'RxJS Streams and HttpClient: Observables, operators (map, switchMap, debounceTime) (Lesson 4)', bn: 'RxJS স্ট্রিমস ও HttpClient: Observables, অপারেটরস (map, switchMap, debounceTime) (পাঠ ৪)' },
        { en: 'Signal Interoperability: toSignal() and toObservable() bridging synchronous and async state', bn: 'সিগন্যাল রূপান্তর: toSignal() ও toObservable() দিয়ে সিঙ্ক ও অ্যাসিনক্রোনাস স্টেটের সেতু' }
      ]
    },
    {
      title: { en: 'Phase 3 — Routing, Navigation & Type-Safe Forms', bn: 'ধাপ ৩ — রাউটিং, নেভিগেশন ও টাইপ-সেফ ফর্মস' },
      items: [
        { en: 'Modern Angular Router: provideRouter, functional canActivate guards, and route inputs (Lesson 5)', bn: 'আধুনিক Angular রাউটার: provideRouter, ফাংশনাল canActivate গার্ড ও রুট ইনপুটস (পাঠ ৫)' },
        { en: 'Lazy-Loading Architecture: loadComponent() and loadChildren() code splitting', bn: 'লেজি-লোডিং আর্কিটেকচার: loadComponent() ও loadChildren() দিয়ে কোড স্প্লিটিং' },
        { en: 'Strictly Typed Reactive Forms: FormControl, FormGroup, FormBuilder, and custom Validators (Lesson 6)', bn: 'টাইপ-সেফ রিঅ্যাক্টিভ ফর্মস: FormControl, FormGroup, FormBuilder ও কাস্টম ভ্যালিডেটরস (পাঠ ৬)' },
        { en: 'Async Form Validation: Debounced server validation and dynamic form arrays', bn: 'অ্যাসিনক্রোনাস ফর্ম যাচাই: ডিবাউন্সড সার্ভার ভ্যালিডেশন ও ডায়নামিক ফর্ম অ্যারে' }
      ]
    },
    {
      title: { en: 'Phase 4 — Optimization, Directives & Performance', bn: 'ধাপ ৪ — অপ্টিমাইজেশন, ডিরেক্টিভস ও পারফরম্যান্স' },
      items: [
        { en: 'Pipes and Directives: Pure pipes, custom attribute directives, and hostDirectives (Lesson 7)', bn: 'পাইপস ও ডিরেক্টিভস: পিওর পাইপস, কাস্টম অ্যাট্রিবিউট ডিরেক্টিভ ও hostDirectives (পাঠ ৭)' },
        { en: 'Performance Engineering: ChangeDetectionStrategy.OnPush and zone-less Signals (Lesson 8)', bn: 'পারফরম্যান্স ইঞ্জিনিয়ারিং: ChangeDetectionStrategy.OnPush ও জোন-লেস সিগন্যালস (পাঠ ৮)' },
        { en: 'Deferrable Views: @defer, @placeholder, @loading, and @error viewport triggers', bn: 'ডেফারেবল ভিউস: @defer, @placeholder, @loading ও @error ভিউপোর্ট ট্রিগার' },
        { en: 'Enterprise State Management: NgRx SignalStore, immutable updates, and architectural testing', bn: 'এন্টারপ্রাইজ স্টেট ম্যানেজমেন্ট: NgRx SignalStore, ইমিউটেবল আপডেট ও আর্কিটেকচারাল টেস্টিং' }
      ]
    }
  ],
  references: [
    {
      group: { en: 'Signals & Reactivity API', bn: 'সিগন্যালস ও রিঅ্যাক্টিভিটি এপিআই' },
      items: [
        {
          name: 'signal(value)',
          desc: {
            en: 'Creates a writable reactive signal with .set() and .update() methods.',
            bn: 'একটি পরিবর্তনযোগ্য রিঅ্যাক্টিভ সিগন্যাল তৈরি করে যাতে .set() ও .update() মেথড থাকে।'
          }
        },
        {
          name: 'computed(fn)',
          desc: {
            en: 'Creates a read-only memoized signal that re-evaluates lazily when dependencies change.',
            bn: 'একটি রিড-অনলি মেমোইজড সিগন্যাল তৈরি করে যা ডিপেন্ডেন্সি পাল্টালে অলসভাবে পুনরায় হিসাব হয়।'
          }
        },
        {
          name: 'effect(fn)',
          desc: {
            en: 'Registers a reactive side-effect function that automatically tracks and re-runs on signal changes.',
            bn: 'একটি রিঅ্যাক্টিভ সাইড-এফেক্ট ফাংশন যা সিগন্যাল পরিবর্তনের সাথে সাথে নিজে থেকেই আবার চলে।'
          }
        }
      ]
    },
    {
      group: { en: 'Component & Template Directives', bn: 'কম্পোনেন্ট ও টেমপ্লেট ডিরেক্টিভস' },
      items: [
        {
          name: '@Component({ standalone: true })',
          desc: {
            en: 'Declares a self-contained component with direct template imports and scoped styling.',
            bn: 'সরাসরি টেমপ্লেট ইমপোর্ট ও নিজস্ব স্টাইল সহ একটি স্বয়ংসম্পূর্ণ কম্পোনেন্ট ঘোষণা করে।'
          }
        },
        {
          name: '@for (item of list; track item.id)',
          desc: {
            en: 'Built-in fast control flow loop requiring an explicit identity tracking expression.',
            bn: 'বিল্ট-ইন দ্রুতগতির লুপ যাতে সুনির্দিষ্ট ট্র্যাকিং এক্সপ্রেশন দেওয়া বাধ্যতামূলক।'
          }
        },
        {
          name: '@defer (on viewport)',
          desc: {
            en: 'Declarative lazy-loading mechanism deferring sub-template compilation until triggered.',
            bn: 'ডিক্লেয়ারেটিভ লেজি-লোডিং ব্যবস্থা যা স্ক্রিনে আসার পূর্ব পর্যন্ত সাব-টেমপ্লেট লোড স্থগিত রাখে।'
          }
        }
      ]
    },
    {
      group: { en: 'Dependency Injection & Routing', bn: 'ডিপেন্ডেন্সি ইনজেকশন ও রাউটিং' },
      items: [
        {
          name: 'inject(Token)',
          desc: {
            en: 'Modern functional dependency injection function callable in constructors and field initializers.',
            bn: 'আধুনিক ফাংশনাল ইনজেকশন মেথড যা ফিল্ড ইনিশিয়ালাইজার বা কনস্ট্রাক্টরে সরাসরি কল করা যায়।'
          }
        },
        {
          name: 'provideRouter(routes)',
          desc: {
            en: 'Configures client-side SPA routing with functional guards and component input binding.',
            bn: 'ফাংশনাল গার্ড ও কম্পোনেন্ট ইনপুট বাইন্ডিং সহ ক্লায়েন্ট-সাইড রাউটিং কনফিগার করে।'
          }
        }
      ]
    }
  ],
  lessons: [
    signalGridLesson,
    blueprintRoomsLesson,
    utilityLinesLesson,
    pipelineDepotLesson,
    corridorPostsLesson,
    permitBureauLesson,
    templateCraftsmenLesson,
    changeDetectiveLesson
  ],
  projects: [
    {
      title: { en: 'Real-Time Telemetry Dashboard with Angular Signals', bn: 'Angular সিগন্যালস দিয়ে রিয়েল-টাইম টেলিমেট্রি ড্যাশবোর্ড' },
      difficulty: 'intermediate',
      desc: {
        en: 'Build a high-performance monitoring dashboard utilizing Angular Signals for synchronous state, computed() for metric aggregations, and effect() for charting telemetry.',
        bn: 'সিঙ্ক্রোনাস স্টেটের জন্য Angular Signals, মেট্রিক বিশ্লেষণের জন্য computed() এবং চার্ট নিয়ন্ত্রণের জন্য effect() ব্যবহার করে একটি হাই-পারফরম্যান্স ড্যাশবোর্ড তৈরি করুন।'
      },
      diff: {
        en: 'Demonstrates modern standalone architecture, signal-driven UI updates, and zero-overhead change detection.',
        bn: 'আধুনিক স্ট্যান্ডঅ্যালোন আর্কিটেকচার, সিগন্যাল-ভিত্তিক ইউআই আপডেট এবং জিরো-ওভারহেড চেঞ্জ ডিটেকশন প্রদর্শন করে।'
      }
    },
    {
      title: { en: 'Enterprise Workflow Portal with Reactive Forms & Guards', bn: 'রিঅ্যাক্টিভ ফর্মস ও গার্ডস দিয়ে এন্টারপ্রাইজ ওয়ার্কফ্লো পোর্টাল' },
      difficulty: 'advanced',
      desc: {
        en: 'Architect a role-based administrative portal featuring strictly typed Reactive Forms, custom async debounced validators, functional canActivate guards, and lazy-loaded routes.',
        bn: 'টাইপ-সেফ রিঅ্যাক্টিভ ফর্মস, কাস্টম অ্যাসিনক্রোনাস ভ্যালিডেটরস, ফাংশনাল canActivate গার্ড এবং লেজি-লোডেড রুট সহ একটি পূর্ণাঙ্গ অ্যাডমিন পোর্টাল তৈরি করুন।'
      },
      diff: {
        en: 'Provides hands-on experience in building scalable enterprise validation logic and bulletproof authentication pipelines.',
        bn: 'স্কেলেবল এন্টারপ্রাইজ ভ্যালিডেশন লজিক এবং দুর্ভেদ্য প্রমাণীকরণ পাইপলাইন তৈরির বাস্তব অভিজ্ঞতা দেয়।'
      }
    },
    {
      title: { en: 'High-Scale E-Commerce Catalog with Deferrable Views & OnPush', bn: 'ডেফারেবল ভিউস ও OnPush সহ হাই-স্কেল ই-কমার্স ক্যাটালগ' },
      difficulty: 'expert',
      desc: {
        en: 'Develop an e-commerce storefront rendering thousands of products using ChangeDetectionStrategy.OnPush, @defer (on viewport) lazy chunks, and SignalStore state management.',
        bn: 'হাজার হাজার পণ্য স্মুথলি দেখানোর জন্য OnPush স্ট্র্যাটেজি, @defer ভিউপোর্ট চাঙ্ক এবং SignalStore স্টেট ম্যানেজমেন্ট ব্যবহার করে একটি ই-কমার্স স্টোরফ্রন্ট তৈরি করুন।'
      },
      diff: {
        en: 'Teaches maximum runtime optimization, modern code-splitting boundaries, and fine-grained DOM patching.',
        bn: 'সর্বোচ্চ রানটাইম অপ্টিমাইজেশন, আধুনিক কোড স্প্লিটিং এবং নিখুঁত ডম প্যাচিংয়ের কলাকৌশল শেখায়।'
      }
    }
  ],
  bestPractices: [
    {
      en: '1. Standardize on Standalone Components: Build all new components, directives, and pipes with standalone: true, completely retiring legacy NgModule configurations.',
      bn: '১. স্ট্যান্ডঅ্যালোন কম্পোনেন্ট বাধ্যতামূলক: পুরোনো NgModule পুরোপুরি পরিহার করে সব কম্পোনেন্ট, ডিরেক্টিভ ও পাইপ standalone: true দিয়ে তৈরি করুন।'
    },
    {
      en: '2. Rely on Signals for State: Store all component state inside writable signals and derive calculated values with computed() instead of invoking template methods.',
      bn: '২. স্টেটে সিগন্যাল প্রাধান্য: কম্পোনেন্টের মান সিগন্যালে সংরক্ষণ করুন এবং টেমপ্লেটে মেথড কল না করে computed() দিয়ে মান বের করুন।'
    },
    {
      en: '3. Mandate track in @for Loops: Always supply a unique, stable database identifier in @for (item of items; track item.id) to enable efficient DOM recycling.',
      bn: '৩. @for লুপে track আবশ্যক: ভার্চুয়াল ডম যাতে অহেতুক নতুন নোড না বানায় সেজন্য @for লুপে সর্বদা ইউনিক আইডি দিয়ে track নির্ধারণ করুন।'
    },
    {
      en: '4. Inject with Modern inject() API: Utilize the functional inject(Service) function in field declarations rather than injecting services into bloated class constructors.',
      bn: '৪. আধুনিক inject() এর ব্যবহার: ক্লাসের বড় কনস্ট্রাক্টরের বদলে সরাসরি ভেরিয়েবল ঘোষণায় inject(Service) ফাংশন ব্যবহার করুন।'
    },
    {
      en: '5. Enforce OnPush Change Detection: Configure ChangeDetectionStrategy.OnPush across all visual components to eliminate wasteful zone-based dirty checking.',
      bn: '৫. OnPush চেঞ্জ ডিটেকশন নিশ্চিতকরণ: অপ্রয়োজনীয় ডম রি-চেকিং আটকাতে প্রতিটি প্রেজেন্টেশনাল কম্পোনেন্টে OnPush স্ট্র্যাটেজি প্রয়োগ করুন।'
    },
    {
      en: '6. Bridge RxJS and Signals with Interop: Convert incoming HTTP and WebSocket Observables into signals at service boundaries via toSignal() for clean synchronous consumption.',
      bn: '৬. toSignal দিয়ে রূপান্তর: টেমপ্লেটে সরাসরি ব্যবহারের সুবিধার্থে সার্ভিস সীমানায় toSignal() দিয়ে RxJS স্ট্রিমকে সিগন্যালে রূপান্তর করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the architectural difference between Angular Signals and traditional RxJS Observables?',
        bn: 'Angular Signals এবং প্রচলিত RxJS Observables-এর মধ্যে মৌলিক আর্কিটেকচারাল পার্থক্য কী?'
      },
      a: {
        en: 'Signals represent synchronous, always-available reactive values designed for state tracking and template consumption with zero subscription cleanup boilerplate. In contrast, RxJS Observables model asynchronous event streams over time (such as WebSockets, HTTP requests, and user clicks) requiring cancellation and operators (switchMap, debounceTime). In modern Angular, RxJS handles asynchronous transport while Signals drive the presentation state via toSignal().',
        bn: 'Signals হলো সিংক্রোনাস ও সর্বদা বিদ্যমান রিঅ্যাক্টিভ মান, যা সাবস্ক্রিপশন ম্যানেজমেন্টের ঝামেলা ছাড়াই স্টেট ট্র্যাক করতে ব্যবহৃত হয়। অন্যদিকে RxJS Observables সময়ের সাথে সাথে প্রবাহিত অ্যাসিনক্রোনাস ইভেন্ট স্ট্রিম (যেমন এইচটিটিপি রিকোয়েস্ট ও ওয়েবসকেট) নিয়ন্ত্রণ করে। আধুনিক Angular-এ ব্যাকএন্ড নেটওয়ার্কিংয়ের জন্য RxJS ব্যবহৃত হয় এবং টেমপ্লেটে ডাটা দেখানোর জন্য toSignal() দিয়ে সিগন্যালে বদলে নেওয়া হয়।'
      }
    },
    {
      q: {
        en: 'Why did Angular introduce the new built-in control flow (@if, @for, @switch) over legacy *ngIf and *ngFor?',
        bn: 'Angular পুরোনো *ngIf ও *ngFor বাদ দিয়ে নতুন বিল্ট-ইন কন্ট্রোল ফ্লো (@if, @for, @switch) কেন এনেছে?'
      },
      a: {
        en: 'The built-in control flow is parsed and executed directly by the Angular compiler without requiring CommonModule imports. It provides up to 90% faster template reconciliation, enforces identity tracking in @for loops (preventing accidental list re-render bugs), supports ergonomic @empty blocks, and provides clean TypeScript type narrowing without extra container wrapper tags.',
        bn: 'নতুন কন্ট্রোল ফ্লো সরাসরি কমপাইলারের ভেতর অন্তর্ভুক্ত হওয়ায় কোনো মডিউল ইমপোর্ট ছাড়াই চলে। এটি টেমপ্লেট রেন্ডারিংয়ে ৯০% পর্যন্ত বেশি গতি দেয়, @for লুপে ট্র্যাকিং বাধ্যতামূলক করে ভুল এড়ায়, খালি তালিকার জন্য সরাসরি @empty ব্লক দেয় এবং কোনো অতিরিক্ত মোড়ক ট্যাগ ছাড়াই নিখুঁত টাইপস্ক্রিপ্ট টাইপ সেফটি নিশ্চিত করে।'
      }
    },
    {
      q: {
        en: 'What architectural advantage does the inject() function offer over traditional constructor dependency injection?',
        bn: 'প্রচলিত কনস্ট্রাক্টর ইনজেকশনের তুলনায় inject() ফাংশন কোন আর্কিটেকচারাল সুবিধা দেয়?'
      },
      a: {
        en: 'The inject() function enables functional dependency injection that works outside class declarations. It can be used directly inside standalone functions, route guards, functional interceptors, and reusable custom utility composables. It also eliminates the need to maintain cumbersome super(injector) calls in derived inheritance hierarchies.',
        bn: 'inject() ফাংশন ক্লাসের কনস্ট্রাক্টরের বাইরেও কাজ করে। এটি সাধারণ ফাংশন, রুট গার্ড, এইচটিটিপি ইন্টারসেপ্টর এবং পুনর্ব্যবহারযোগ্য ইউটিলিটি ফাংশনের ভেতরেও সরাসরি ব্যবহার করা যায়। তাছাড়া ইনহেরিটেন্সের সময় ক্লাসে বারবার super() ডাকার ঝামেলাও চিরতরে দূর করে।'
      }
    },
    {
      q: {
        en: 'How does ChangeDetectionStrategy.OnPush work in tandem with Angular Signals to eliminate Zone.js overhead?',
        bn: 'ChangeDetectionStrategy.OnPush কীভাবে Angular Signals-এর সাথে কাজ করে Zone.js-এর কাজের চাপ দূর করে?'
      },
      a: {
        en: 'In default change detection, Zone.js monkey-patches every browser async API and dirty-checks the entire application component tree on every event. With OnPush, Angular only checks a component when its inputs change, an event originates within it, or an attached Signal notifies the runtime. Signals pinpoint the exact component boundary that changed, allowing Angular to perform localized updates without checking parent subtrees.',
        bn: 'ডিফল্ট সিস্টেমে Zone.js প্রতিটি ব্রাউজার ইভেন্টে পুরো অ্যাপ্লিকেশনের সব কম্পোনেন্ট পুনরায় চেক করে। কিন্তু OnPush এবং Signals একসাথে ব্যবহার করলে Angular জেনে যায় ঠিক কোন কম্পোনেন্টের ডাটা বদলেছে এবং পুরো পেজ না ঘেঁটে কেবল নির্দিষ্ট উপাদানটি সাথে সাথে আপডেট করে দেয়।'
      }
    }
  ],
  realWorld: [
    {
      en: '1. Global Banking Portals: Financial institutions use Angular\'s strict TypeScript types, hierarchical dependency injection, and Reactive Forms to manage auditable multi-step loan applications.',
      bn: '১. আন্তর্জাতিক ব্যাংকিং পোর্টাল: ফাইন্যান্সিয়াল প্রতিষ্ঠানগুলো তাদের বহু-ধাপ বিশিষ্ট লোন ও লেনদেনের অ্যাপ্লিকেশন সুরক্ষিত রাখতে Angular-এর টাইপস্ক্রিপ্ট ও রিঅ্যাক্টিভ ফর্ম ব্যবহার করে।'
    },
    {
      en: '2. High-Frequency Trading Consoles: Stock and crypto platforms utilize Angular Signals and OnPush change detection to render thousands of real-time price ticks per second with zero UI lag.',
      bn: '২. ট্রেডিং প্ল্যাটফর্ম: স্টক ও ক্রিপ্টো এক্সচেঞ্জগুলো প্রতি সেকেন্ডে হাজার হাজার মূল্যের পরিবর্তন কোনো ল্যাগ ছাড়াই পর্দায় ফুটিয়ে তুলতে Signals এবং OnPush চেঞ্জ ডিটেকশন কাজে লাগায়।'
    },
    {
      en: '3. Healthcare Patient Records: Enterprise hospital systems leverage Angular Router functional guards and lazy-loaded modules to ensure strict role-based HIPAA patient data compliance.',
      bn: '৩. স্বাস্থ্যসেবা ডাটাবেজ: আধুনিক হাসপাতালগুলো রোগীর গোপন তথ্যের নিরাপত্তা নিশ্চিত করতে Angular-এর ফাংশনাল রুট গার্ড এবং মডিউলার অ্যাক্সেস কন্ট্রোল ব্যবহার করে।'
    },
    {
      en: '4. Airline Reservation Systems: Aviation companies rely on Angular Deferrable Views (@defer) to load heavy flight seating maps and payment gateways strictly when scrolled into view.',
      bn: '৪. এয়ারলাইন বুকিং ব্যবস্থা: বিমান সংস্থাগুলো সিট ম্যাপ এবং পেমেন্ট গেটওয়ের মতো ভারী অংশগুলো দ্রুত লোড করতে Angular-এর @defer প্রযুক্তি প্রয়োগ করে।'
    }
  ]
};
