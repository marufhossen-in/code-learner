import type { Lesson } from '../../../lib/types';

export const ProvidersInThePantryLesson: Lesson = {
  slug: 'providers-in-the-pantry',
  tech: 'nestjs',
  title: {
    en: 'Providers & Dependency Injection — Custom Tokens, Factories & Scopes',
    bn: 'প্রোভাইডার ও ডিপেন্ডেন্সি ইনজেকশন — কাস্টম টোকেন, ফ্যাক্টরি ও স্কোপ'
  },
  summary: {
    en: 'Providers represent the core business engine of NestJS, managing everything from database repositories to third-party SDK clients. In this lesson, you will master @Injectable declaration, custom provider recipes (useValue, useClass, useFactory), string and symbol tokens, circular dependency resolution with forwardRef, and provider injection scopes.',
    bn: 'প্রোভাইডার হলো নেস্ট.জেএস-এর মূল ইঞ্জিন যা ডাটাবেজ রিপোজিটরি থেকে শুরু করে থার্ড-পার্টি এসডিকে সবকিছু পরিচালনা করে। এই পাঠে আপনি @Injectable ঘোষণা, কাস্টম প্রোভাইডার কৌশল (useValue, useClass, useFactory), স্ট্রিং ও সিম্বল টোকেন, forwardRef দিয়ে সার্কুলার ডিপেন্ডেন্সি সমাধান এবং ইনজেকশন স্কোপ গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'providers-architecture-overview',
      text: {
        en: 'The Provider and Dependency Injection Architecture',
        bn: 'প্রোভাইডার ও ডিপেন্ডেন্সি ইনজেকশন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build scalable services, components should not create their own dependencies using hardcoded instantiation. In NestJS, any class decorated with @Injectable can be treated as a provider, registered in an IoC module, and injected into controllers or other services through constructor parameter signatures.',
        bn: 'যখন আপনি স্কেলেবল সার্ভিস তৈরি করেন, তখন উপাদানগুলোর নিজের ডিপেন্ডেন্সি নিজে তৈরি করা উচিত নয়। নেস্ট.জেএস-এ @Injectable দ্বারা চিহ্নিত যেকোনো ক্লাসকে প্রোভাইডার হিসেবে গণ্য করা হয়, যা মডিউলের IoC কন্টেইনারে নিবন্ধিত হয়ে কনস্ট্রাক্টরের মাধ্যমে কন্ট্রোলার বা অন্যান্য সার্ভিসে ইনজেক্ট হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '@Injectable()',
          def: {
            en: 'Class decorator marking a TypeScript class as a provider eligible for management and injection by the Nest IoC container.',
            bn: 'ক্লাস ডেকোরেটর যা একটি টাইপস্ক্রিপ্ট ক্লাসকে নেস্ট IoC কন্টেইনার দ্বারা পরিচালিত ও ইনজেক্ট করার যোগ্য প্রোভাইডার হিসেবে চিহ্নিত করে।'
          }
        },
        {
          term: 'Constructor Injection',
          def: {
            en: 'The standard technique where dependencies are declared as private readonly constructor parameters and resolved automatically.',
            bn: 'স্ট্যান্ডার্ড কৌশল যেখানে ক্লাসের কনস্ট্রাক্টরে private readonly প্যারামিটার হিসেবে নির্ভরতা ঘোষণা করা হয় এবং স্বয়ংক্রিয়ভাবে ইনজেক্ট হয়।'
          }
        },
        {
          term: 'Custom Providers',
          def: {
            en: 'Advanced provider definitions allowing values (useValue), classes (useClass), or dynamic factory functions (useFactory) to be injected.',
            bn: 'উন্নত প্রোভাইডার কৌশল যার মাধ্যমে সরাসরি মান (useValue), ক্লাস (useClass) বা ডায়নামিক ফ্যাক্টরি ফাংশন (useFactory) ইনজেক্ট করা যায়।'
          }
        },
        {
          term: 'forwardRef()',
          def: {
            en: 'A utility function allowing circular dependencies between two services to resolve cleanly without crashing at boot time.',
            bn: 'একটি ইউটিলিটি ফাংশন যা দুটি সার্ভিসের মধ্যকার সার্কুলার ডিপেন্ডেন্সিকে অ্যাপ ক্র্যাশ না করিয়ে নিরাপদে সমাধান করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'provider-recipes-table',
      text: {
        en: 'NestJS Provider Definition Recipes',
        bn: 'নেস্ট.জেএস প্রোভাইডার তৈরির বিভিন্ন রেসিপি'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Provider Recipe', bn: 'প্রোভাইডার রেসিপি' },
        { en: 'Configuration Syntax', bn: 'কনফিগারেশন সিনট্যাক্স' },
        { en: 'Common Use Case', bn: 'সাধারণ ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'Standard Class', bn: 'স্ট্যান্ডার্ড ক্লাস' },
          { en: 'providers: [UsersService]', bn: 'providers: [UsersService]' },
          { en: 'Domain services, repositories, and calculation engines', bn: 'ডোমেন সার্ভিস, রিপোজিটরি এবং ক্যালকুলেশন ইঞ্জিন' }
        ],
        [
          { en: 'Value Provider (useValue)', bn: 'ভ্যালু প্রোভাইডার (useValue)' },
          { en: '{ provide: "API_KEY", useValue: "secret-token" }', bn: '{ provide: "API_KEY", useValue: "secret-token" }' },
          { en: 'Injecting constant configurations or mock objects in tests', bn: 'কনস্ট্যান্ট কনফিগারেশন বা টেস্টে মক অবজেক্ট ইনজেক্ট করা' }
        ],
        [
          { en: 'Factory Provider (useFactory)', bn: 'ফ্যাক্টরি প্রোভাইডার (useFactory)' },
          { en: '{ provide: "DB", useFactory: async (cfg) => db, inject: [Config] }', bn: '{ provide: "DB", useFactory: async (cfg) => db, inject: [Config] }' },
          { en: 'Asynchronous connections, dynamic database client pools', bn: 'অ্যাসিনক্রোনাস সংযোগ, ডায়নামিক ডাটাবেজ ক্লায়েন্ট পুল' }
        ],
        [
          { en: 'Class Switcher (useClass)', bn: 'ক্লাস স্যুইচার (useClass)' },
          { en: '{ provide: Logger, useClass: isProd ? CloudLogger : LocalLogger }', bn: '{ provide: Logger, useClass: isProd ? CloudLogger : LocalLogger }' },
          { en: 'Swapping implementations based on runtime environment', bn: 'এনভায়রনমেন্টের ওপর ভিত্তি করে ভিন্ন ক্লাস প্রদান করা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'custom-provider-code',
      text: {
        en: 'Working Factory Provider and Dependency Injection Simulation',
        bn: 'কার্যকরী ফ্যাক্টরি প্রোভাইডার ও ডিপেন্ডেন্সি ইনজেকশন সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of NestJS Provider Injection with Factory
class DatabaseConnection {
  constructor(uri, poolSize) {
    this.uri = uri;
    this.poolSize = poolSize;
    this.connected = true;
  }
}

// 1. Asynchronous factory provider definition
const databaseProvider = {
  provide: 'DATABASE_POOL',
  useFactory: (envUri) => {
    const defaultPool = 10;
    return new DatabaseConnection(envUri, defaultPool);
  }
};

// 2. Service consuming the injected database provider token
class UsersService {
  constructor(db) {
    this.db = db;
  }

  getPoolInfo() {
    return {
      connected: this.db.connected,
      poolSize: this.db.poolSize
    };
  }
}

// 3. Dependency resolution
const dbInstance = databaseProvider.useFactory('postgres://localhost:5432/app');
const usersService = new UsersService(dbInstance);
const info = usersService.getPoolInfo();

console.log('Database connected status:', info.connected);
// -> Database connected status: true
console.log('Database pool allocation size:', info.poolSize);
// -> Database pool allocation size: 10`,
      caption: {
        en: 'Factory provider instantiating DatabaseConnection with 10 pool connections',
        bn: 'ফ্যাক্টরি প্রোভাইডার ১০টি পুল সংযোগ সহ DatabaseConnection তৈরি করছে'
      }
    },
    {
      type: 'heading',
      id: 'scopes-architecture',
      text: {
        en: 'Provider Injection Scopes: DEFAULT, REQUEST, and TRANSIENT',
        bn: 'প্রোভাইডার ইনজেকশন স্কোপ: DEFAULT, REQUEST ও TRANSIENT'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In NestJS, provider instances are cached as singletons by default under Scope.DEFAULT. When a provider requires per-request state (such as tenant IDs or request-specific logging), configuring Scope.REQUEST forces Nest to instantiate the service for every incoming request. However, request scoping cascades up the dependency chain, significantly increasing memory overhead.',
        bn: 'নেস্ট.জেএস-এ Scope.DEFAULT-এর অধীনে প্রোভাইডার অবজেক্টগুলো ডিফল্টভাবে সিঙ্গেলটন হিসেবে সংরক্ষিত থাকে। কিন্তু যখন প্রতি রিকোয়েস্টে আলাদা ডাটা (যেমন টেন্যান্ট আইডি বা রিকোয়েস্ট লগ) রাখার দরকার হয়, তখন Scope.REQUEST ব্যবহার করা হয়। তবে রিকোয়েস্ট স্কোপ পুরো ডিপেন্ডেন্সি ট্রিতে ছড়িয়ে পড়ে মেমরির খরচ বহুগুণ বাড়িয়ে দেয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Default to Singletons: Keep 99 percent of services as Scope.DEFAULT to maximize Node.js performance and caching.',
          bn: '১. সিঙ্গেলটনকে অগ্রাধিকার: সর্বোচ্চ নোড.জেএস গতি ও ক্যাশিং বজায় রাখতে ৯৯ শতাংশ সার্ভিস Scope.DEFAULT রাখুন।'
        },
        {
          en: '2. Break Circular Cycles: When ServiceA and ServiceB inject each other, use @Inject(forwardRef(() => TargetService)) on both ends.',
          bn: '২. সার্কুলার সাইকেল ভাঙা: দুটি সার্ভিস একে অপরকে চাইলে উভয়ের কনস্ট্রাক্টরে @Inject(forwardRef(() => TargetService)) দিন।'
        },
        {
          en: '3. Tokenize Constants: When injecting configuration objects or database clients, use descriptive string or Symbol tokens.',
          bn: '৩. টোকেন দিয়ে ইনজেক্ট: কনফিগারেশন অবজেক্ট বা ক্লায়েন্ট ইনজেক্ট করতে অর্থপূর্ণ স্ট্রিং বা সিম্বল টোকেন ব্যবহার করুন।'
        },
        {
          en: '4. Scope Bubbling Warning: Be aware that injecting a REQUEST-scoped provider into a singleton service turns that singleton into a request-scoped service.',
          bn: '৪. স্কোপ বাবিলং সতর্কতা: মনে রাখবেন কোনো সিঙ্গেলটনে REQUEST-স্কোপড সার্ভিস ইনজেক্ট করলে সেই সিঙ্গেলটন নিজেও রিকোয়েস্ট-স্কোপড হয়ে যায়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nest-prov-ex1',
      kind: 'mcq',
      topic: 'injectable decorator core function',
      question: {
        en: 'What does decorating a class with @Injectable() signify to the NestJS runtime?',
        bn: 'কোনো ক্লাসে @Injectable() ডেকোরেটর দিলে নেস্ট.জেএস রানটাইম কী বুঝে নেয়?'
      },
      options: [
        {
          en: 'The class is a provider whose lifecycle and dependencies can be managed and injected by the Nest IoC container',
          bn: 'ক্লাসটি একটি প্রোভাইডার যার লাইফসাইকেল ও নির্ভরতা নেস্ট IoC কন্টেইনার দ্বারা পরিচালিত ও ইনজেক্ট হতে পারে'
        },
        {
          en: 'The class will be compiled directly to WebAssembly binary code',
          bn: 'ক্লাসটি সরাসরি ওয়েবঅ্যাসেম্বলি বাইনারি কোডে রূপান্তরিত হবে'
        },
        {
          en: 'The class is accessible directly from client browser JavaScript consoles',
          bn: 'ক্লাসটি ক্লায়েন্ট ব্রাউজারের জাভাস্ক্রিপ্ট কনসোল থেকে সরাসরি ব্যবহারযোগ্য'
        },
        {
          en: 'The class is marked as an immutable database table definition',
          bn: 'ক্লাসটি অপরিবর্তনীয় ডাটাবেজ টেবিল হিসেবে চিহ্নিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'It registers the class into the dependency injection metadata catalog.',
        bn: 'এটি ক্লাসটিকে ডিপেন্ডেন্সি ইনজেকশন মেটাডাটা তালিকায় অন্তর্ভুক্ত করে।'
      },
      explanation: {
        en: '@Injectable() attaches metadata instructing the Nest IoC container that the class can be instantiated and supplied to other components.',
        bn: '@Injectable() ক্লাসে এমন মেটাডাটা যুক্ত করে যার ফলে কন্টেইনার বুঝতে পারে এটিকে তৈরি করে অন্য ক্লাসে সরবরাহ করা যাবে।'
      }
    },
    {
      id: 'nest-prov-ex2',
      kind: 'mcq',
      topic: 'custom provider usevalue purpose',
      question: {
        en: 'When should an application use { provide: "CONFIG_TOKEN", useValue: customConfig } instead of a standard class provider?',
        bn: 'কখন স্ট্যান্ডার্ড ক্লাস প্রোভাইডারের বদলে { provide: "CONFIG_TOKEN", useValue: customConfig } ব্যবহার করা উচিত?'
      },
      options: [
        {
          en: 'When injecting an existing plain object, third-party client instance, or test mock rather than instantiating a new class',
          bn: 'যখন নতুন কোনো ক্লাস তৈরি না করে বিদ্যমান কোনো অবজেক্ট, থার্ড-পার্টি ক্লায়েন্ট বা টেস্ট মক সরাসরি ইনজেক্ট করতে হয়'
        },
        {
          en: 'When writing HTML templates for server-side rendering',
          bn: 'সার্ভার-সাইড রেন্ডারিংয়ের জন্য এইচটিএমএল টেমপ্লেট লেখার সময়'
        },
        {
          en: 'When configuring CSS Grid column widths',
          bn: 'সিএসএস গ্রিড কলামের প্রস্থ নির্ধারণ করার সময়'
        },
        {
          en: 'useValue is deprecated in modern versions of NestJS',
          bn: 'useValue আধুনিক নেস্ট.জেএস সংস্করণে বাতিল করা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'useValue binds a pre-existing concrete value or mock to an injection token.',
        bn: 'useValue আগে থেকে তৈরি কোনো মান বা মককে ইনজেকশন টোকেনের সাথে বেঁধে দেয়।'
      },
      explanation: {
        en: 'useValue allows you to inject literal values, constant objects, or mocked service instances directly into consumers.',
        bn: 'useValue দিয়ে সরাসরি অবজেক্ট, কনস্ট্যান্ট মান বা মক করা সার্ভিস অন্য ক্লাসে ইনজেক্ট করা যায়।'
      }
    },
    {
      id: 'nest-prov-ex3',
      kind: 'mcq',
      topic: 'forwardref circular dependency fix',
      question: {
        en: 'How must forwardRef() be utilized to successfully break a circular dependency between UsersService and AuthService?',
        bn: 'UsersService এবং AuthService-এর মধ্যকার সার্কুলার ডিপেন্ডেন্সি কাটিয়ে উঠতে forwardRef() কীভাবে প্রয়োগ করতে হয়?'
      },
      options: [
        {
          en: 'Apply @Inject(forwardRef(() => AuthService)) in UsersService AND @Inject(forwardRef(() => UsersService)) in AuthService',
          bn: 'UsersService-এ @Inject(forwardRef(() => AuthService)) এবং AuthService-এ @Inject(forwardRef(() => UsersService)) উভয় দিকেই দিতে হবে'
        },
        {
          en: 'Call forwardRef() only once inside package.json dependencies',
          bn: 'package.json ফাইলে মাত্র একবার forwardRef() কল করতে হবে'
        },
        {
          en: 'Delete one of the services and rewrite all logic in C++',
          bn: 'যেকোনো একটি সার্ভিস মুছে ফেলে বাকি সমস্ত লজিক C++ এ লিখতে হবে'
        },
        {
          en: 'forwardRef() only works on controllers, never on services',
          bn: 'forwardRef কেবল কন্ট্রোলারে কাজ করে, সার্ভিসে কখনোই না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Both sides of the relationship must use forwardRef with lazy arrow function closures.',
        bn: 'সার্কুলার সম্পর্কের উভয় প্রান্তেই লেজি অ্যারো ফাংশন ক্লোজার সহ forwardRef দিতে হয়।'
      },
      explanation: {
        en: 'Circular dependencies require forwardRef(() => Service) with @Inject on both participating classes so Nest defers resolution until both are loaded.',
        bn: 'উভয় ক্লাসের কনস্ট্রাক্টরেই forwardRef ব্যবহার করতে হয় যাতে নেস্ট উভয় ক্লাস লোড না হওয়া পর্যন্ত অপেক্ষা করতে পারে।'
      }
    },
    {
      id: 'nest-prov-ex4',
      kind: 'mcq',
      topic: 'request scope performance impact',
      question: {
        en: 'Why does configuring Scope.REQUEST on a frequently called service degrade performance under high concurrency?',
        bn: 'বেশি কল হওয়া সার্ভিসে Scope.REQUEST কনফিগার করলে কেন অতিরিক্ত চাপে সার্ভার পারফরম্যান্স ব্যাপকভাবে কমে যায়?'
      },
      options: [
        {
          en: 'Nest must instantiate a new object graph and trigger garbage collection on every single HTTP request, creating significant CPU and memory overhead',
          bn: 'নেস্টকে প্রতিটি এইচটিটিপি রিকোয়েস্টের জন্য নতুন অবজেক্ট তৈরি ও গার্বেজ কালেক্ট করতে হয়, যা প্রচুর সিপিইউ ও মেমরি খরচ করে'
        },
        {
          en: 'Request scoping causes the operating system kernel to reboot',
          bn: 'রিকোয়েস্ট স্কোপ অপারেটিং সিস্টেম কার্নেলকে রিবুট করিয়ে দেয়'
        },
        {
          en: 'It limits the maximum number of database rows to 100',
          bn: 'এটি ডাটাবেজের সর্বোচ্চ রো সংখ্যা ১০০-তে সীমাবদ্ধ করে ফেলে'
        },
        {
          en: 'Request scoping disables TypeScript type checking permanently',
          bn: 'রিকোয়েস্ট স্কোপ টাইপস্ক্রিপ্ট টাইপ চেকিং চিরতরে বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Object creation and garbage collection on every request is expensive.',
        bn: 'প্রতিটি রিকোয়েস্টে নতুন অবজেক্ট তৈরি ও পরে তা মেমরি থেকে মোছা অনেক ব্যয়বহুল।'
      },
      explanation: {
        en: 'Unlike singletons, request-scoped providers require fresh heap allocations per request. Under thousands of concurrent requests, this stresses the V8 garbage collector.',
        bn: 'সিঙ্গেলটনের মতো একবারে না হয়ে প্রতি রিকোয়েস্টে নতুন মেমরি নেওয়ায় V8 গার্বেজ কালেক্টরের ওপর প্রচণ্ড চাপ পড়ে এবং অ্যাপ ধীর হয়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'providers-in-the-pantry-quiz',
    title: {
      en: 'Providers & Dependency Injection Quiz',
      bn: 'প্রোভাইডার ও ডিপেন্ডেন্সি ইনজেকশন কুইজ'
    },
    questions: [
      {
        id: 'q-scope-bubbling-mechanic',
        kind: 'mcq',
        topic: 'scope bubbling up the dependency graph',
        question: {
          en: 'What is "scope bubbling" in NestJS dependency injection, and why does it occur?',
          bn: 'নেস্ট.জেএস ডিপেন্ডেন্সি ইনজেকশনে "স্কোপ বাবলিং" কী এবং এটি কেন ঘটে?'
        },
        options: [
          {
            en: 'If a singleton provider injects a REQUEST-scoped provider, the singleton is automatically converted into a REQUEST-scoped provider as well',
            bn: 'যদি কোনো সিঙ্গেলটন প্রোভাইডার একটি REQUEST-স্কোপড প্রোভাইডার ইনজেক্ট করে, তবে সেই সিঙ্গেলটন নিজেও স্বয়ংক্রিয়ভাবে REQUEST-স্কোপড হয়ে যায়'
          },
          {
            en: 'CSS styling bubbles up from HTML elements to the browser window',
            bn: 'সিএসএস স্টাইল এইচটিএমএল উপাদান থেকে ব্রাউজার উইন্ডোতে উঠে আসে'
          },
          {
            en: 'Database connection errors bubble up into Linux system log files',
            bn: 'ডাটাবেজ সংযোগের এরর লিনাক্স সিস্টেম লগ ফাইলে উঠে যায়'
          },
          {
            en: 'It is a technique for rendering animated bubbles in HTML5 canvas',
            bn: 'এইচটিএমএল৫ ক্যানভাসে অ্যানিমেটেড বাবল আঁকার একটি কৌশল'
          }
        ],
        answer: 0,
        hint: {
          en: 'A singleton cannot depend on something that only exists for a single HTTP request.',
          bn: 'একটি স্থায়ী সিঙ্গেলটন এমন কিছুর ওপর নির্ভর করতে পারে না যা কেবল একটি রিকোয়েস্টেই বাঁচে।'
        },
        explanation: {
          en: 'A singleton cannot hold a static reference to request-scoped state. Therefore, Nest bubbles request scoping up to any dependent consumer.',
          bn: 'সিঙ্গেলটন অবজেক্ট প্রতি রিকোয়েস্টের আলাদা ডাটা ধরে রাখতে পারে না। তাই নেস্ট পুরো ডিপেন্ডেন্সি চেইনকেই রিকোয়েস্ট-স্কোপড বানিয়ে দেয়।'
        }
      },
      {
        id: 'q-usefactory-async-db',
        kind: 'mcq',
        topic: 'async factory provider for database connection',
        question: {
          en: 'Why is useFactory the standard provider recipe for creating third-party database connections (like TypeORM or Mongoose)?',
          bn: 'থার্ড-পার্টি ডাটাবেজ সংযোগ (যেমন TypeORM বা Mongoose) তৈরিতে useFactory কেন আদর্শ প্রোভাইডার রেসিপি?'
        },
        options: [
          {
            en: 'useFactory can return a Promise, allowing NestJS to pause bootstrapping until the asynchronous database network connection completes successfully',
            bn: 'useFactory প্রমিজ রিটার্ন করতে পারে, যার ফলে ডাটাবেজ সংযোগ সফল না হওয়া পর্যন্ত নেস্ট অ্যাপ চালুর কাজ অপেক্ষা করে'
          },
          {
            en: 'useFactory encrypts all database passwords with quantum cryptography',
            bn: 'useFactory কোয়ান্টাম ক্রিপ্টোগ্রাফি দিয়ে পাসওয়ার্ড এনক্রিপ্ট করে'
          },
          {
            en: 'useFactory runs 10x faster than standard JavaScript classes',
            bn: 'useFactory সাধারণ ক্লাসের চেয়ে দশ গুণ দ্রুত রান করে'
          },
          {
            en: 'useFactory is the only provider recipe that supports SQL SELECT queries',
            bn: 'useFactory কেবল একমাত্র রেসিপি যা এসকিউএল সিলেক্ট কুয়েরি সাপোর্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Factory functions can be async and await external connections before the app boots.',
          bn: 'ফ্যাক্টরি ফাংশন async হতে পারে যা অ্যাপ চালুর আগেই সংযোগ সম্পন্ন করতে পারে।'
        },
        explanation: {
          en: 'Nest awaits asynchronous factory providers during the bootstrap phase, guaranteeing that database clients are fully connected before incoming requests arrive.',
          bn: 'বুটস্ট্র্যাপের সময় নেস্ট অ্যাসিনক্রোনাস ফ্যাক্টরির জন্য অপেক্ষা করে, ফলে প্রথম রিকোয়েস্ট আসার আগেই ডাটাবেজ সংযোগ পুরোপুরি প্রস্তুত থাকে।'
        }
      },
      {
        id: 'q-symbol-tokens-di',
        kind: 'mcq',
        topic: 'symbol tokens for provider injection',
        question: {
          en: 'Why do enterprise NestJS architectures prefer Symbol tokens (e.g. Symbol("CACHE_SERVICE")) over plain strings when defining custom providers?',
          bn: 'কাস্টম প্রোভাইডারে সাধারণ স্ট্রিংয়ের বদলে সিম্বল টোকেন (যেমন Symbol("CACHE_SERVICE")) ব্যবহার এন্টারপ্রাইজ সিস্টেমে কেন বেশি পছন্দ করা হয়?'
        },
        options: [
          {
            en: 'Symbols guarantee complete token uniqueness across large modular codebases, completely preventing accidental token collision and overwriting',
            bn: 'সিম্বল পুরো কোডবেজে টোকেনের ইউনিকত্ব নিশ্চিত করে, ফলে দুর্ঘটনাবশত একই নামের টোকেন ওভাররাইট হওয়া সম্পূর্ণ প্রতিরোধ হয়'
          },
          {
            en: 'Symbols reduce memory consumption by exactly 50 percent',
            bn: 'সিম্বল মেমরি খরচ ঠিক ৫০ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'TypeScript does not allow strings in provider definitions',
            bn: 'টাইপস্ক্রিপ্ট প্রোভাইডারে স্ট্রিং লিখতে দেয় না'
          },
          {
            en: 'Symbol tokens are required by Docker container runtimes',
            bn: 'ডকার কন্টেইনারে চলার জন্য সিম্বল টোকেন থাকা বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'JavaScript Symbols are guaranteed to be unique primitives.',
          bn: 'জাভাস্ক্রিপ্ট সিম্বল হলো এমন প্রিমিটিভ যা সর্বদা একে অপরের থেকে সম্পূর্ণ অনন্য।'
        },
        explanation: {
          en: 'String tokens like "CONFIG" can easily clash when multiple modules register identically named tokens. Symbols guarantee unique references across packages.',
          bn: 'স্ট্রিং টোকেন দিলে বিভিন্ন মডিউলে একই নাম হয়ে সংঘাত তৈরি হতে পারে। কিন্তু সিম্বল ব্যবহার করলে কোনো টোকেন অন্য টোকেনের সাথে মিলে যায় না।'
        }
      },
      {
        id: 'q-property-vs-constructor-injection',
        kind: 'mcq',
        topic: 'constructor injection over property injection',
        question: {
          en: 'Why is constructor injection (private readonly service: Service) preferred over property injection (@Inject() service: Service)?',
          bn: 'প্রোপার্টি ইনজেকশনের (@Inject()) চেয়ে কনস্ট্রাক্টর ইনজেকশন (private readonly service: Service) কেন বেশি গ্রহণযোগ্য?'
        },
        options: [
          {
            en: 'Constructor injection explicitly documents all required dependencies in the class signature and makes unit testing trivial without invoking the full Nest DI container',
            bn: 'কনস্ট্রাক্টর ইনজেকশন ক্লাসের প্রয়োজনীয় সমস্ত নির্ভরতা স্পষ্টভাবে তুলে ধরে এবং নেস্ট কন্টেইনার ছাড়াই সহজে টেস্ট মক পাস করার সুযোগ দেয়'
          },
          {
            en: 'Property injection is not supported in TypeScript',
            bn: 'টাইপস্ক্রিপ্টে প্রোপার্টি ইনজেকশন সাপোর্ট করে না'
          },
          {
            en: 'Constructor injection makes the Node.js event loop run 5 times faster',
            bn: 'কনস্ট্রাক্টর ইনজেকশন নোড.জেএস ইভেন্ট লুপ পাঁচ গুণ দ্রুত চালায়'
          },
          {
            en: 'Property injection causes memory leaks in PostgreSQL databases',
            bn: 'প্রোপার্টি ইনজেকশন পোস্টগ্রেস ডাটাবেজে মেমরি লিক তৈরি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Classes with clear constructors can be instantiated with new in unit tests.',
          bn: 'কনস্ট্রাক্টর স্পষ্ট থাকলে সাধারণ ইউনিট টেস্টে সহজেই new দিয়ে অবজেক্ট তৈরি করা যায়।'
        },
        explanation: {
          en: 'With constructor injection, you can instantiate the class in a unit test via "new MyClass(mockService)". Property injection requires setting up reflection or DI test modules.',
          bn: 'কনস্ট্রাক্টর ইনজেকশন থাকলে ইউনিট টেস্টে সরাসরি "new MyClass(mockService)" লেখা যায়, কোনো জটিল ডিপেন্ডেন্সি ইনজেকশন মডিউল দাঁড় করানোর প্রয়োজন পড়ে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'modules-and-mise-en-place',
    title: {
      en: 'Modular Architecture — Encapsulation, Dynamic Modules & Exports',
      bn: 'মডিউলার আর্কিটেকচার — এনক্যাপসুলেশন, ডায়নামিক মডিউল ও এক্সপোর্ট'
    }
  }
};
