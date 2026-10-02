import type { Lesson } from '../../../lib/types';

export const utilityLinesLesson: Lesson = {
  slug: 'the-utility-lines',
  tech: 'angular',
  title: {
    en: 'Dependency Injection & Services — @Injectable, inject() & Scopes',
    bn: 'ডিপেন্ডেন্সি ইনজেকশন ও সার্ভিসেস — @Injectable, inject() ও স্কোপস'
  },
  summary: {
    en: 'Dependency Injection (DI) is Angular\'s signature architectural superpower for decoupling business logic from UI components. In this lesson, you will master the modern functional inject() API, configure singleton and scoped providers, create type-safe InjectionTokens for configuration objects, and navigate hierarchical injector trees.',
    bn: 'ডিপেন্ডেন্সি ইনজেকশন (DI) হলো Angular-এর অন্যতম শক্তিশালী আর্কিটেকচার যা কম্পোনেন্ট থেকে বিজনেস লজিক সম্পূর্ণ আলাদা রাখে। এই পাঠে আপনি আধুনিক ফাংশনাল inject() এপিআই, সিঙ্গলটন ও স্কোপড প্রোভাইডার কনফিগারেশন, টাইপ-সেফ InjectionTokens এবং হায়ারার্কিক্যাল ইনজেক্টর ট্রির গতিবিধি গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'dependency-injection-architecture',
      text: {
        en: 'The Hierarchical Dependency Injection Architecture',
        bn: 'হায়ারার্কিক্যাল ডিপেন্ডেন্সি ইনজেকশন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you architect scalable enterprise applications in Angular, components should focus strictly on presentation rather than data storage or network communication. Angular\'s hierarchical Dependency Injection (DI) engine resolves and instantiates services automatically. Consumers request dependencies using the functional inject() API without instantiating objects by hand.',
        bn: 'যখন আপনি Angular-এ বড় এন্টারপ্রাইজ অ্যাপ্লিকেশন তৈরি করেন, তখন কম্পোনেন্টের মূল কাজ হওয়া উচিত স্ক্রিনে ডাটা দেখানো, ডাটা তৈরি বা নেটওয়ার্কিং নয়। Angular-এর হায়ারার্কিক্যাল ডিপেন্ডেন্সি ইনজেকশন (DI) ইঞ্জিন নিজে থেকেই সার্ভিসগুলো তৈরি ও সরবরাহ করে। ডেভেলপাররা হাতে অবজেক্ট না বানিয়ে আধুনিক inject() ফাংশন দিয়ে সরাসরি সার্ভিস ব্যবহার করেন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '@Injectable()',
          def: {
            en: 'A decorator defining a class as a participant in the Angular dependency injection system.',
            bn: 'একটি ক্লাস ডেকোরেটর যা নির্দেশ করে যে ক্লাসটি Angular ডিপেন্ডেন্সি ইনজেকশন সিস্টেমে অংশ নিতে পারে।'
          }
        },
        {
          term: 'inject()',
          def: {
            en: 'The modern functional API used to retrieve services from the active injection context without constructors.',
            bn: 'কনস্ট্রাক্টর ছাড়াই সরাসরি যেকোনো সার্ভিস সংগ্রহ করার আধুনিক ফাংশনাল এপিআই।'
          }
        },
        {
          term: 'providedIn: "root"',
          def: {
            en: 'Configures a service as an application-wide tree-shakable singleton instance.',
            bn: 'একটি সার্ভিসকে পুরো অ্যাপ্লিকেশনে একটিমাত্র শেয়ার্ড সিঙ্গলটন ইনস্ট্যান্স হিসেবে নির্ধারণ করে।'
          }
        },
        {
          term: 'InjectionToken',
          def: {
            en: 'A typed token used to inject non-class values such as API endpoint URLs and configuration interfaces.',
            bn: 'এপিআই ইউআরএল বা কনফিগারেশন অবজেক্টের মতো ক্লাসবিহীন মান ইনজেক্ট করার টাইপ-সেফ টোকেন।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'injector-hierarchy-matrix',
      text: {
        en: 'Injector Hierarchy and Scoping Matrix',
        bn: 'ইনজেক্টর হায়ারার্কি ও স্কোপিং ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Injector Tier', bn: 'ইনজেক্টর স্তর' },
        { en: 'Registration Syntax', bn: 'রেজিস্ট্রেশন সিনট্যাক্স' },
        { en: 'Instance Lifetime & Scope', bn: 'লাইফটাইম ও প্রাপ্যতা' }
      ],
      rows: [
        [
          { en: 'Root Environment', bn: 'রুট এনভায়রনমেন্ট' },
          { en: '@Injectable({ providedIn: "root" })', bn: '@Injectable({ providedIn: "root" })' },
          { en: 'App-wide singleton; instantiated lazily upon first request', bn: 'অ্যাপ-ব্যাপী সিঙ্গলটন; প্রথম চাওয়ার সময় তৈরি হয়' }
        ],
        [
          { en: 'Route Environment', bn: 'রুট এনভায়রনমেন্ট' },
          { en: 'provideRouter([ { path: "admin", providers: [...] } ])', bn: 'provideRouter([ { path: "admin", providers: [...] } ])' },
          { en: 'Scoped to that route branch; destroyed when leaving route', bn: 'নির্দিষ্ট রুটে সীমাবদ্ধ; রুট ছাড়লে মেমোরি খালি হয়' }
        ],
        [
          { en: 'Element / Component', bn: 'কম্পোনেন্ট স্তর' },
          { en: '@Component({ providers: [LocalStateService] })', bn: '@Component({ providers: [LocalStateService] })' },
          { en: 'Isolated instance per component; destroyed with the DOM node', bn: 'প্রতি উপাদানের নিজস্ব কপি; ডম নোড মুছলে ধ্বংস হয়' }
        ],
        [
          { en: 'InjectionToken', bn: 'InjectionToken' },
          { en: 'export const API_URL = new InjectionToken<string>("API_URL")', bn: 'export const API_URL = new InjectionToken<string>("API_URL")' },
          { en: 'Injects arbitrary primitive values and complex configuration maps', bn: 'যেকোনো কনফিগারেশন মান বা স্ট্রিং ইনজেক্ট করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'di-simulation-code',
      text: {
        en: 'Working Hierarchical Injector and inject() Simulation',
        bn: 'কার্যকরী হায়ারার্কিক্যাল ইনজেক্টর ও inject() সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Angular Hierarchical Dependency Injection and Token Resolution
class MockInjector {
  constructor(parent = null) {
    this.parent = parent;
    this.records = new Map();
  }

  provide(token, valueOrFactory) {
    this.records.set(token, valueOrFactory);
  }

  // Resolves token by walking up injector tree
  get(token, options = {}) {
    if (this.records.has(token)) {
      const entry = this.records.get(token);
      return typeof entry === 'function' ? entry() : entry;
    }

    if (this.parent) {
      return this.parent.get(token, options);
    }

    if (options.optional) {
      return null;
    }

    throw new Error('No provider for token: ' + token);
  }
}

// 1. Root Injector with Global Config
const rootInjector = new MockInjector();
rootInjector.provide('API_ENDPOINT', 'https://api.enterprise.com/v1');
rootInjector.provide('AUTH_TOKEN_ID', 4001);

// 2. Child Component Injector overriding local state
const componentInjector = new MockInjector(rootInjector);
componentInjector.provide('WIDGET_ID', 99);

// 3. Resolve tokens using hierarchical lookup
const resolvedApi = componentInjector.get('API_ENDPOINT');
const resolvedAuthId = componentInjector.get('AUTH_TOKEN_ID');
const resolvedWidgetId = componentInjector.get('WIDGET_ID');

console.log('Resolved API endpoint from root:', resolvedApi);
// -> Resolved API endpoint from root: https://api.enterprise.com/v1
console.log('Resolved auth token identifier:', resolvedAuthId);
// -> Resolved auth token identifier: 4001
console.log('Resolved component widget identifier:', resolvedWidgetId);
// -> Resolved component widget identifier: 99`,
      caption: {
        en: 'Injector resolves auth token 4001 from root and local widget ID 99 from component',
        bn: 'ইনজেক্টর রুট থেকে টোকেন ৪০০১ এবং কম্পোনেন্ট থেকে লোকাল উইজেট আইডি ৯৯ বের করছে'
      }
    },
    {
      type: 'heading',
      id: 'di-discipline-rules',
      text: {
        en: 'Dependency Injection Best Practices and Discipline Rules',
        bn: 'ডিপেন্ডেন্সি ইনজেকশন সেরা অনুশীলন ও নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To maintain clean architecture, always prefer functional inject() calls in property initializers over bloated class constructor signatures. Use providedIn: "root" for standard singleton services; this allows bundlers like Vite and Webpack to automatically tree-shake and omit unused services from production bundles.',
        bn: 'সুন্দর কোড আর্কিটেকচার বজায় রাখতে ক্লাসের বড় কনস্ট্রাক্টরের বদলে সরাসরি ভেরিয়েবল ঘোষণায় inject() ব্যবহার করুন। সাধারণ সিঙ্গলটন সার্ভিসে সর্বদা providedIn: "root" ব্যবহার করুন; এতে কোনো সার্ভিস প্রজেক্টে ব্যবহৃত না হলে কমপাইলার নিজে থেকেই তা ফাইনাল বান্ডল থেকে ছেঁটে বাদ দিতে পারে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Use inject() in Field Declarations: Write readonly service = inject(DataService) rather than constructor parameters.',
          bn: '১. ফিল্ডে inject() ব্যবহার: কনস্ট্রাক্টরে না লিখে সরাসরি readonly service = inject(DataService) লিখুন।'
        },
        {
          en: '2. Default to providedIn: "root": Make services tree-shakable singletons unless explicit component isolation is needed.',
          bn: '২. providedIn: "root" প্রাধান্য: সুনির্দিষ্ট আইসোলেশন না লাগলে সার্ভিস সর্বদা রুট স্কোপে রাখুন।'
        },
        {
          en: '3. Use InjectionToken for Primitives: Never inject plain strings directly; create strongly typed InjectionToken instances.',
          bn: '৩. InjectionToken ব্যবহার: সাধারণ টেক্সট ইনজেক্ট না করে সর্বদা টাইপ-সেফ InjectionToken ব্যবহার করুন।'
        },
        {
          en: '4. Pass { optional: true } for Fallbacks: When a dependency might not be provided, use inject(TOKEN, { optional: true }).',
          bn: '৪. অপশনাল ইনজেকশন: কোনো সার্ভিস অনুপস্থিত থাকতে পারলে inject(TOKEN, { optional: true }) দিয়ে ক্র্যাশ এড়ান।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ng-uti-ex1',
      kind: 'mcq',
      topic: 'functional inject API advantages over constructor injection',
      question: {
        en: 'What architectural benefit does the functional "inject()" API provide over traditional constructor parameter injection?',
        bn: 'প্রচলিত কনস্ট্রাক্টর ইনজেকশনের তুলনায় ফাংশনাল "inject()" এপিআই কোন প্রধান আর্কিটেকচারাল সুবিধা দেয়?'
      },
      options: [
        {
          en: 'inject() can be used in field initializers, standalone functions, route guards, and functional interceptors without having to declare class constructors or pass dependencies through "super()" calls in subclasses',
          bn: 'inject() ফিল্ড ভেরিয়েবল, সাধারণ ফাংশন, রুট গার্ড ও ইন্টারসেপ্টরে কনস্ট্রাক্টর ছাড়াই ব্যবহার করা যায় এবং ইনহেরিটেন্সে "super()" দিয়ে প্যারামিটারে পাঠানোর ঝামেলা দূর করে'
        },
        {
          en: 'inject() increases computer CPU processing speeds by 400%',
          bn: 'inject() কম্পিউটারের প্রসেসরের গতি ৪০০% বাড়িয়ে দেয়'
        },
        {
          en: 'Constructor injection was completely banned and made illegal in TypeScript',
          bn: 'কনস্ট্রাক্টর ইনজেকশন টাইপস্ক্রিপ্ট দ্বারা সম্পূর্ণ বেআইনি ঘোষণা করা হয়েছে'
        },
        {
          en: 'inject() replaces all HTML files with binary machine code',
          bn: 'inject() সব এইচটিএমএল ফাইলকে বাইনারি মেশিন কোডে পরিবর্তন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'inject() enables dependency injection outside class constructor headers.',
        bn: 'inject() ক্লাসের কনস্ট্রাক্টরের বাইরেও যেকোনো ফাংশনে ইনজেকশন ব্যবহারের সুযোগ দেয়।'
      },
      explanation: {
        en: 'The inject() function allows retrieving dependencies inside property initializers, factory functions, and route guards. It eliminates boilerplate super() chains in class inheritance.',
        bn: 'কনস্ট্রাক্টরে অনেক সার্ভিস থাকলে কোড অপরিষ্কার দেখাত এবং ইনহেরিটেন্সে super() লিখতে হতো। inject() ফিল্ডেই ঘোষণা করা যায় এবং ক্লাসের বাইরেও সহজে কাজ করে।'
      }
    },
    {
      id: 'ng-uti-ex2',
      kind: 'mcq',
      topic: 'tree-shaking benefits of providedIn root',
      question: {
        en: 'Why is "@Injectable({ providedIn: \'root\' })" preferred over registering services in an NgModule or bootstrap "providers: [...]" array?',
        bn: 'NgModule বা বুটস্ট্র্যাপের "providers: [...]" অ্যারেতে সার্ভিস যুক্ত করার চেয়ে "@Injectable({ providedIn: \'root\' })" ব্যবহার কেন শ্রেয়?'
      },
      options: [
        {
          en: 'It enables automatic tree-shaking: if the service is not imported and consumed by any active component in the project, the build optimizer completely removes it from the final JavaScript bundle',
          bn: 'এটি স্বয়ংক্রিয় ট্রি-শেকিং নিশ্চিত করে: কোনো কম্পোনেন্ট যদি সার্ভিসটি ব্যবহার না করে, তবে বিল্ড অপ্টিমাইজার ফাইনাল প্রোডাকশন ফাইল থেকে তা পুরোপুরি ছেঁটে বাদ দেয়'
        },
        {
          en: 'It allows the website to run on computers without an operating system',
          bn: 'এটি কোনো অপারেটিং সিস্টেম ছাড়াই কম্পিউটারে ওয়েবসাইট চালাতে সাহায্য করে'
        },
        {
          en: 'Services configured with providedIn root are run inside a separate browser process',
          bn: 'providedIn root দেওয়া সার্ভিসগুলো আলাদা একটি ব্রাউজার প্রসেসে চলে'
        },
        {
          en: 'providedIn root encrypts the service with 256-bit AES encryption',
          bn: 'providedIn root সার্ভিসটিকে ২৫৬-বিট এইএস এনক্রিপশন দিয়ে সুরক্ষা দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'providedIn: "root" creates tree-shakable providers that don\'t inflate bundles if unused.',
        bn: 'providedIn: "root" অব্যবহৃত সার্ভিস ফাইনাল বান্ডল থেকে বাদ দিয়ে সাইজ ছোট রাখে।'
      },
      explanation: {
        en: 'When a service specifies providedIn: "root", the compiler can detect if any code references it. If unreferenced, it is stripped during production optimization (tree-shaking).',
        bn: 'অ্যারেতে প্রোভাইডার দিলে তা কোনো জায়গায় ব্যবহৃত না হলেও বান্ডলে ঢুকে পড়ে। providedIn: "root" দিলে কমপাইলার অব্যবহৃত কোড বাদ দিয়ে অ্যাপ দ্রুত লোড হতে সাহায্য করে।'
      }
    },
    {
      id: 'ng-uti-ex3',
      kind: 'mcq',
      topic: 'purpose of InjectionToken for primitive and interface dependencies',
      question: {
        en: 'Why can TypeScript interfaces (such as "AppConfig") NOT be used directly as dependency injection tokens in Angular?',
        bn: 'টাইপস্ক্রিপ্ট ইন্টারফেসকে (যেমন "AppConfig") Angular-এ সরাসরি ডিপেন্ডেন্সি ইনজেকশন টোকেন হিসেবে কেন ব্যবহার করা যায় না?'
      },
      options: [
        {
          en: 'TypeScript interfaces only exist at compile time and are completely erased during JavaScript compilation; at runtime, no object exists to identify the token unless an "InjectionToken" is used',
          bn: 'টাইপস্ক্রিপ্ট ইন্টারফেস কেবল কমপাইল করার সময় থাকে এবং জাভাস্ক্রিপ্ট তৈরির সময় পুরোপুরি মুছে যায়; ফলে রানটাইমে টোকেন শনাক্ত করার কোনো অস্তিত্ব থাকে না, যা "InjectionToken" সমাধান করে'
        },
        {
          en: 'Interfaces are too large to fit in browser cache memory',
          bn: 'ইন্টারফেসগুলো ব্রাউজার ক্যাশ মেমোরিতে ধারণ করার জন্য অতিরিক্ত বড়'
        },
        {
          en: 'The Angular CLI prevents interfaces from being opened',
          bn: 'Angular CLI ইন্টারফেস ফাইলগুলো খুলতে বাধা দেয়'
        },
        {
          en: 'Interfaces can only be injected on mobile devices',
          bn: 'ইন্টারফেস কেবল মোবাইল ডিভাইসেই ইনজেক্ট করা সম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'TypeScript types and interfaces are erased at runtime; InjectionTokens preserve identity.',
        bn: 'টাইপস্ক্রিপ্ট ইন্টারফেস জাভাস্ক্রিপ্ট বানানোর সময় মুছে যায়, কিন্তু InjectionToken রানটাইমে টিকে থাকে।'
      },
      explanation: {
        en: 'TypeScript interfaces are compile-time contracts erased during compilation. InjectionToken creates a real JavaScript runtime object that the injector can store in its Map to look up dependencies.',
        bn: 'রানটাইমে ইন্টারফেসের অস্তিত্ব থাকে না বলে ইনজেক্টর তা খুঁজে পায় না। InjectionToken একটি সত্যিকারের জাভাস্ক্রিপ্ট অবজেক্ট বানায় যার মাধ্যমে সঠিক ডাটা সরবরাহ করা যায়।'
      }
    },
    {
      id: 'ng-uti-ex4',
      kind: 'mcq',
      topic: 'component-level providers isolating state instances',
      question: {
        en: 'What happens when a service is registered in a component\'s "providers: [FormStateService]" array rather than in "providedIn: \'root\'"?',
        bn: 'কোনো সার্ভিসকে "providedIn: \'root\'"-এর বদলে কোনো কম্পোনেন্টের "providers: [FormStateService]"-এ দিলে কী ঘটে?'
      },
      options: [
        {
          en: 'A new, isolated instance of the service is created specifically for each instance of that component and its children, destroyed when the component is unmounted from the DOM',
          bn: 'প্রতিটি কম্পোনেন্ট এবং তার ভেতরের চাইল্ডদের জন্য সার্ভিসের একটি সম্পূর্ণ নতুন ও স্বতন্ত্র কপি তৈরি হয়, যা কম্পোনেন্টটি ডম থেকে মুছে যাওয়ার সাথে সাথেই ধ্বংস হয়ে যায়'
        },
        {
          en: 'The service is shared globally across every user in the entire company',
          bn: 'সার্ভিসটি পুরো কোম্পানির সব ব্যবহারকারীর মাঝে গ্লোবালি শেয়ার হয়ে যায়'
        },
        {
          en: 'The service fails to compile and throws a fatal syntax error',
          bn: 'সার্ভিসটি কমপাইল হতে ব্যর্থ হয় এবং সিনট্যাক্স এরর দেয়'
        },
        {
          en: 'Component-level providers can only store numbers, never objects',
          bn: 'কম্পোনেন্ট স্তরের প্রোভাইডার কেবল সংখ্যা রাখতে পারে, কোনো অবজেক্ট নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Component providers create scoped service instances tied to that component lifecycle.',
        bn: 'কম্পোনেন্ট প্রোভাইডার প্রতিটি উপাদানের জন্য আলাদা লাইফসাইকেল যুক্ত সার্ভিস তৈরি করে।'
      },
      explanation: {
        en: 'Component providers create Element Injectors. Each component instance receives its own private service instance. This is ideal for isolated form state or modal wizard workflows.',
        bn: 'একাধিক ফর্ম বা মোডাল একই সাথে খুললে তাদের ডাটা যাতে একে অপরের সাথে না মেশে, সেজন্য কম্পোনেন্ট প্রোভাইডার দিয়ে প্রতিটির জন্য আলাদা সার্ভিস কপি নিশ্চিত করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'the-utility-lines-quiz',
    title: {
      en: 'Angular Dependency Injection & Services Quiz',
      bn: 'Angular ডিপেন্ডেন্সি ইনজেকশন ও সার্ভিসেস কুইজ'
    },
    questions: [
      {
        id: 'q-inject-flags-optional-self-skipself',
        kind: 'mcq',
        topic: 'inject options flags (optional, self, skipSelf, host)',
        question: {
          en: 'What does the "{ skipSelf: true }" option do when passed to "inject(LoggerService, { skipSelf: true })"?',
          bn: '"inject(LoggerService, { skipSelf: true })" অপশনটি দিলে কী ঘটে?'
        },
        options: [
          {
            en: 'It instructs the injector to start looking for the provider in the parent injector hierarchy, skipping the current component\'s own providers array',
            bn: 'এটি ইনজেক্টরকে বর্তমান কম্পোনেন্টের নিজস্ব প্রোভাইডার বাদ দিয়ে প্যারেন্ট বা ঊর্ধ্বতন ইনজেক্টর থেকে সার্ভিসটি খুঁজতে নির্দেশ দেয়'
          },
          {
            en: 'It deletes the current component from the browser screen',
            bn: 'এটি ব্রাউজার স্ক্রিন থেকে বর্তমান কম্পোনেন্টটি মুছে ফেলে'
          },
          {
            en: 'It skips executing the service methods completely',
            bn: 'এটি সার্ভিসের মেথডগুলো চলা পুরোপুরি এড়িয়ে যায়'
          },
          {
            en: 'skipSelf forces the service to return null in all cases',
            bn: 'skipSelf সব পরিস্থিতিতে সার্ভিসকে নাল রিটার্ন করতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'skipSelf begins token resolution in the parent injector rather than the local injector.',
          bn: 'skipSelf স্থানীয় ইনজেক্টর এড়িয়ে সরাসরি অভিভাবক ইনজেক্টর থেকে সার্ভিস খোঁজা শুরু করে।'
        },
        explanation: {
          en: 'By default, DI checks the local injector first. { skipSelf: true } bypasses the current injector and begins resolution at the parent, useful when a component decorates a parent service.',
          bn: 'ডিফল্টভাবে নিজের কম্পোনেন্টের প্রোভাইডার আগে দেখে। { skipSelf: true } দিলে নিজেরটা বাদ দিয়ে ওপরের প্যারেন্ট কম্পোনেন্টের সার্ভিস ব্যবহার করা সম্ভব হয়।'
        }
      },
      {
        id: 'q-environment-providers-bootstrap',
        kind: 'mcq',
        topic: 'EnvironmentProviders and makeEnvironmentProviders',
        question: {
          en: 'What is the role of "EnvironmentProviders" created by functions like "provideRouter()" and "provideHttpClient()"?',
          bn: '"provideRouter()" বা "provideHttpClient()"-এর মতো ফাংশন দ্বারা তৈরি "EnvironmentProviders"-এর ভূমিকা কী?'
        },
        options: [
          {
            en: 'They provide services configured exclusively for the application root or route environments, preventing accidental leakage into visual component providers arrays',
            bn: 'এগুলো শুধুমাত্র অ্যাপ্লিকেশন রুট বা রুট এনভায়রনমেন্টের জন্য সার্ভিস কনফিগার করে এবং ভুলবশত কম্পোনেন্টের প্রোভাইডার অ্যারেতে ঢোকা প্রতিরোধ করে'
          },
          {
            en: 'They regulate the temperature of the physical server room',
            bn: 'তারা ফিজিক্যাল সার্ভার রুমের তাপমাত্রা নিয়ন্ত্রণ করে'
          },
          {
            en: 'EnvironmentProviders convert all CSS code into JSON files',
            bn: 'EnvironmentProviders সমস্ত সিএসএস কোডকে জেএসএন ফাইলে পরিবর্তন করে'
          },
          {
            en: 'They are only supported on Linux operating systems',
            bn: 'সেগুলো কেবলমাত্র লিনাক্স অপারেটিং সিস্টেমে সমর্থিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'EnvironmentProviders ensure environment-level services stay at the root/route level.',
          bn: 'EnvironmentProviders সিস্টেম-লেভেলের সার্ভিসগুলোকে সুরক্ষিতভাবে রুট ও রুটে রাখে।'
        },
        explanation: {
          en: 'Angular distinguishes between Element Providers (components) and Environment Providers (root, routes). makeEnvironmentProviders() restricts configuration to where it belongs.',
          bn: 'রাউটার বা এইচটিটিপির মতো মূল সার্ভিসগুলো যাতে ভুল করে সাধারণ কম্পোনেন্টে না দিয়ে রুট বা রুট লেভেলে সুরক্ষিত থাকে, সেজন্য EnvironmentProviders ব্যবহৃত হয়।'
        }
      },
      {
        id: 'q-injectable-factory-pattern-usefactory',
        kind: 'mcq',
        topic: 'custom factory providers with useFactory and deps',
        question: {
          en: 'How can a developer dynamically instantiate a service based on runtime conditions (e.g., using a mock service in test environments)?',
          bn: 'রানটাইমের ওপর ভিত্তি করে কীভাবে কোনো সার্ভিস তৈরি করা হয় (যেমন টেস্টের সময় মক সার্ভিস এবং আসল সময় রিয়েল সার্ভিস)?'
        },
        options: [
          {
            en: 'Use a factory provider: "{ provide: DataService, useFactory: () => isDevMode() ? new MockDataService() : new RealDataService() }"',
            bn: 'ফ্যাক্টরি প্রোভাইডার ব্যবহার করে: "{ provide: DataService, useFactory: () => isDevMode() ? new MockDataService() : new RealDataService() }"'
          },
          {
            en: 'Rewrite the browser URL bar on every page load',
            bn: 'প্রতি পেজ লোডের সময় ব্রাউজারের ইউআরএল বার পুনরায় লিখে'
          },
          {
            en: 'Shut down the web browser and restart in safe mode',
            bn: 'ওয়েব ব্রাউজার বন্ধ করে সেফ মোডে রিস্টার্ট দিয়ে'
          },
          {
            en: 'Dynamic factory instantiation is forbidden in Angular',
            bn: 'Angular-এ ডায়নামিক ফ্যাক্টরি তৈরি করা সম্পূর্ণরূপে নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'useFactory lets you execute custom instantiation logic based on runtime criteria.',
          bn: 'useFactory রানটাইমের শর্ত বিবেচনা করে কাস্টম সার্ভিস তৈরি করার স্বাধীনতা দেয়।'
        },
        explanation: {
          en: 'Factory providers ({ provide, useFactory }) allow calculating service construction dynamically at runtime, injecting dependencies via inject() inside the factory function.',
          bn: 'useFactory দিয়ে শর্ত বিচার করে সঠিক সার্ভিস রিটার্ন করা যায়। টেস্টিং বা পরিবেশ ভেদে ভিন্ন সার্ভিস প্রদানের জন্য এটি আদর্শ কৌশল।'
        }
      },
      {
        id: 'q-forwardref-circular-reference-resolution',
        kind: 'mcq',
        topic: 'resolving circular class references using forwardRef',
        question: {
          en: 'When is "forwardRef(() => MyClass)" required in Angular provider configurations?',
          bn: 'Angular প্রোভাইডার কনফিগারেশনে "forwardRef(() => MyClass)" কখন ব্যবহার করতে হয়?'
        },
        options: [
          {
            en: 'When a token or provider references a class that has not yet been defined because of circular module dependencies or file ordering issues in JavaScript closures',
            bn: 'যখন কোনো প্রোভাইডার এমন একটি ক্লাসের রেফারেন্স চায় যা সার্কুলার ডিপেন্ডেন্সি বা ফাইল অর্ডারের কারণে তখনো জাভাস্ক্রিপ্টে সংজ্ঞায়িত করা শেষ হয়নি'
          },
          {
            en: 'When forwarding an email message over an SMTP server',
            bn: 'এসএমটিপি সার্ভারের মাধ্যমে একটি ইমেইল মেসেজ ফরোয়ার্ড করার সময়'
          },
          {
            en: 'forwardRef is required on every single Angular component',
            bn: 'প্রতিটি একক Angular কম্পোনেন্টে forwardRef বাধ্যতামূলক'
          },
          {
            en: 'When increasing the screen refresh rate from 60Hz to 120Hz',
            bn: 'স্ক্রিন রিফ্রেশ রেট ৬০ হার্টজ থেকে ১২০ হার্টজে বাড়ানোর সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'forwardRef allows referencing classes that are declared later in the file execution order.',
          bn: 'forwardRef কোডের নিচে ঘোষিত ক্লাসকে রানটাইমে খুঁজে পেতে সাহায্য করে।'
        },
        explanation: {
          en: 'JavaScript classes cannot be accessed before declaration (Temporal Dead Zone). forwardRef creates a closure returning the class reference once initialization is complete.',
          bn: 'ক্লাস তৈরি হওয়ার আগেই ব্যবহার করতে গেলে জাভাস্ক্রিপ্ট এরর দেয়। forwardRef একটি ফাংশনের ভেতর রেফারেন্স রেখে পরে লোড হওয়া নিশ্চিত করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-pipeline-depot',
    title: {
      en: 'RxJS Streams & HttpClient — Observables, Operators & Signals Interop',
      bn: 'RxJS স্ট্রিমস ও HttpClient — Observables, অপারেটরস ও সিগন্যালস রূপান্তর'
    }
  }
};
