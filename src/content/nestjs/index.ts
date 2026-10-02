import type { Hub } from '../../lib/types';
import { TheBlueprintedKitchenLesson } from './lessons/the-blueprinted-kitchen';
import { ControllersOnTheLineLesson } from './lessons/controllers-on-the-line';
import { ProvidersInThePantryLesson } from './lessons/providers-in-the-pantry';
import { ModulesAndMiseEnPlaceLesson } from './lessons/modules-and-mise-en-place';
import { PipesAndValidationLesson } from './lessons/pipes-and-validation';
import { SentriesAtThePassLesson } from './lessons/sentries-at-the-pass';
import { NetsAndWeavesLesson } from './lessons/nets-and-weaves';
import { TheFranchiseOpensLesson } from './lessons/the-franchise-opens';

export const nestjsHub: Hub = {
  slug: 'nestjs',
  name: 'NestJS',
  icon: '🐈',
  tagline: {
    en: 'Architect enterprise-grade, scalable server-side TypeScript applications with modular Inversion of Control and Dependency Injection.',
    bn: 'মডুলার ইনভার্সন অব কন্ট্রোল এবং ডিপেন্ডেন্সি ইনজেকশন ব্যবহার করে এন্টারপ্রাইজ-গ্রেড, স্কেলেবল টাইপস্ক্রিপ্ট সার্ভার অ্যাপ্লিকেশন তৈরি করুন।'
  },
  intro: {
    en: 'NestJS is the premier progressive Node.js framework for building efficient, reliable, and scalable enterprise server-side systems. Built with TypeScript and inspired by Angular architecture, Nest combines Object-Oriented Programming, Functional Programming, and Functional Reactive Programming. This master curriculum guides you through Inversion of Control containers, declarative controllers, custom providers, encapsulated modules, pipe validation, guard-based authentication, lifecycle interceptors, and automated testing with Supertest.',
    bn: 'নেস্ট.জেএস হলো কার্যকর, নির্ভরযোগ্য এবং স্কেলেবল এন্টারপ্রাইজ সার্ভার অ্যাপ্লিকেশন তৈরির জন্য অগ্রণী নোড.জেএস ফ্রেমওয়ার্ক। টাইপস্ক্রিপ্ট দ্বারা নির্মিত এবং অ্যাঙ্গুলার আর্কিটেকচার দ্বারা অনুপ্রাণিত নেস্ট ওওপি, এফপি এবং এফআরপি-র এক অসাধারণ সমন্বয়। এই পূর্ণাঙ্গ পাঠ্যক্রমের মাধ্যমে আপনি ইনভার্সন অব কন্ট্রোল কন্টেইনার, ডিক্লারেটিভ কন্ট্রোলার, কাস্টম প্রোভাইডার, মডিউলার ক্যাপসুল, পাইপ ভ্যালিডেশন, গার্ড অথেনটিকেশন, লাইফসাইকেল ইন্টারসেপ্টর এবং সুপারটেস্ট দিয়ে অটোমেটেড টেস্টিং গভীরভাবে শিখবেন।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — IoC Architecture, Controllers & Providers',
        bn: 'ধাপ ১ — আইওসি আর্কিটেকচার, কন্ট্রোলার ও প্রোভাইডার'
      },
      items: [
        {
          en: 'Inversion of Control container, TypeScript metadata reflection, and bootstrap instantiation with NestFactory (Lesson 1)',
          bn: 'ইনভার্সন অব কন্ট্রোল কন্টেইনার, টাইপস্ক্রিপ্ট মেটাডাটা রিফ্লেকশন এবং NestFactory দিয়ে বুটস্ট্র্যাপ ইনস্ট্যানশিয়েশন (পাঠ ১)'
        },
        {
          en: 'Declarative routing with @Controller, HTTP method decorators, parameter extractors (@Param, @Body, @Query), and route versioning (Lesson 2)',
          bn: '@Controller দিয়ে ডিক্লারেটিভ রাউটিং, এইচটিটিপি মেথড ডেকোরেটর, প্যারামিটার এক্সট্রাক্টর (@Param, @Body, @Query) ও রুট ভার্সনিং (পাঠ ২)'
        },
        {
          en: 'Dependency Injection with @Injectable, constructor injection, custom provider tokens (useClass, useValue, useFactory), and injection scopes (Lesson 3)',
          bn: '@Injectable দিয়ে ডিপেন্ডেন্সি ইনজেকশন, কনস্ট্রাক্টর ইনজেকশন, কাস্টম প্রোভাইডার টোকেন ও ইনজেকশন স্কোপ (পাঠ ৩)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Modular Capsules, Validation & Security Guards',
        bn: 'ধাপ ২ — মডুলার ক্যাপসুল, ভ্যালিডেশন ও সিকিউরিটি গার্ড'
      },
      items: [
        {
          en: 'Encapsulated feature modules with @Module, provider exporting, dynamic modules with forRoot/register, and @Global modules (Lesson 4)',
          bn: '@Module দিয়ে ক্যাপসুল মডিউল, প্রোভাইডার এক্সপোর্ট, forRoot/register দিয়ে ডায়নামিক মডিউল ও @Global মডিউল (পাঠ ৪)'
        },
        {
          en: 'Data Transfer Objects (DTO), class-validator constraints, whitelist stripping, and automatic type coercion via ValidationPipe (Lesson 5)',
          bn: 'ডাটা ট্রান্সফার অবজেক্ট (DTO), class-validator শর্তাবলী, অতিরিক্ত ফিল্ড ছাঁটাই এবং ValidationPipe দিয়ে টাইপ রূপান্তর (পাঠ ৫)'
        },
        {
          en: 'Request authorization with CanActivate guards, ExecutionContext switching, custom metadata with Reflector, and JWT RBAC security (Lesson 6)',
          bn: 'CanActivate গার্ড দিয়ে অথরাইজেশন, ExecutionContext স্যুইচিং, রিফ্লেক্টর দিয়ে মেটাডাটা ও JWT RBAC নিরাপত্তা (পাঠ ৬)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Request Lifecycle, Interceptors & Enterprise Testing',
        bn: 'ধাপ ৩ — রিকোয়েস্ট লাইফসাইকেল, ইন্টারসেপ্টর ও এন্টারপ্রাইজ টেস্টিং'
      },
      items: [
        {
          en: 'Execution lifecycle: Middleware -> Guards -> Interceptors (pre) -> Pipes -> Handler -> Interceptors (post) -> Exception Filters (Lesson 7)',
          bn: 'এক্সিকিউশন লাইফসাইকেল: মিডেলওয়্যার -> গার্ড -> ইন্টারসেপ্টর -> পাইপ -> হ্যান্ডলার -> ইন্টারসেপ্টর -> এক্সেপশন ফিল্টার (পাঠ ৭)'
        },
        {
          en: 'Automated testing with Test.createTestingModule, mock provider overriding, e2e testing with Supertest, and Terminus health probes (Lesson 8)',
          bn: 'Test.createTestingModule দিয়ে টেস্টিং, মক প্রোভাইডার ওভাররাইড, সুপারটেস্ট e2e টেস্ট ও টার্মিনাস হেলথ চেক (পাঠ ৮)'
        }
      ]
    }
  ],
  lessons: [
    TheBlueprintedKitchenLesson,
    ControllersOnTheLineLesson,
    ProvidersInThePantryLesson,
    ModulesAndMiseEnPlaceLesson,
    PipesAndValidationLesson,
    SentriesAtThePassLesson,
    NetsAndWeavesLesson,
    TheFranchiseOpensLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Enterprise E-Commerce Microservice with NestJS Modules & RBAC',
        bn: 'নেস্ট.জেএস মডিউল ও আরবিএসি সহ এন্টারপ্রাইজ ই-কমার্স মাইক্রোসার্ভিস'
      },
      brief: {
        en: 'Architect a full-featured enterprise backend using NestJS: separate Products, Orders, and Auth feature modules; implement strict DTO validation with class-validator and whitelist stripping; secure administrative routes with JWT authentication and Role-Based Access Control guards; and catch domain errors with custom Exception Filters returning standardized JSON envelopes.',
        bn: 'নেস্ট.জেএস দিয়ে একটি এন্টারপ্রাইজ ব্যাকএন্ড তৈরি করুন: প্রোডাক্ট, অর্ডার এবং অথেনটিকেশন মডিউল পৃথকীকরণ; class-validator দিয়ে কঠোর DTO ভ্যালিডেশন; JWT এবং রোল-বেসড অ্যাক্সেস কন্ট্রোল গার্ড দিয়ে অ্যাডমিন রুট সুরক্ষা; এবং কাস্টম এক্সেপশন ফিল্টার দিয়ে সুশৃঙ্খল JSON এরর রেসপন্স প্রদান।'
      }
    },
    {
      title: {
        en: 'Production-Hardened Gateway with Interceptor Caching & Health Probes',
        bn: 'ইন্টারসেপ্টর ক্যাশিং ও হেলথ চেক সহ প্রোডাকশন-রেডি গেটওয়ে'
      },
      brief: {
        en: 'Harden an enterprise NestJS API gateway: configure dynamic ConfigModule for environment variables; implement logging and response transformation interceptors using RxJS observables; register Terminus health check probes for Kubernetes liveness/readiness; and build an automated test suite achieving 100% route coverage using Test.createTestingModule and Supertest.',
        bn: 'একটি এন্টারপ্রাইজ নেস্ট.জেএস এপিআই গেটওয়েকে সুরক্ষিত করুন: ডায়নামিক ConfigModule দিয়ে পরিবেশ চলক হ্যান্ডলিং; RxJS অবসার্ভেবল ব্যবহার করে রেসপন্স ট্রান্সফর্মেশন ইন্টারসেপ্টর; কুবারনেটিসের জন্য টার্মিনাস লাইভনেস/রেডিনেস হেলথ প্রোব; এবং Test.createTestingModule ও সুপারটেস্ট দিয়ে সম্পূর্ণ অটোমেটেড টেস্ট স্যুট তৈরি।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always declare providers in the providers array of the owning module and export them explicitly in the exports array if other modules need them.',
      bn: 'সর্বদা নিজস্ব মডিউলের providers অ্যারেতে প্রোভাইডার ঘোষণা করুন এবং অন্য মডিউলে ব্যবহারের প্রয়োজন হলে exports অ্যারেতে স্পষ্টভাবে এক্সপোর্ট করুন।'
    },
    {
      en: 'Enable global ValidationPipe with whitelist: true and forbidNonWhitelisted: true to automatically strip unexpected input properties and prevent parameter injection.',
      bn: 'হ্যান্ডলারে অপ্রয়োজনীয় ডাটা প্রবেশ রোধ করতে whitelist: true এবং forbidNonWhitelisted: true সহ গ্লোবাল ValidationPipe ব্যবহার করুন।'
    },
    {
      en: 'Prefer constructor injection over property injection (@Inject) for clear dependency contracts and straightforward unit testing.',
      bn: 'নির্ভরতা স্পষ্ট রাখতে এবং সহজে ইউনিট টেস্ট করার জন্য প্রোপার্টি ইনজেকশনের চেয়ে কনস্ট্রাক্টর ইনজেকশনকে প্রাধান্য দিন।'
    },
    {
      en: 'Keep controllers thin by delegating all business logic, data transformations, and database queries directly to injectable Services.',
      bn: 'কন্ট্রোলারকে হালকা রাখুন এবং সমস্ত ব্যবসায়িক লজিক, ডাটা রূপান্তর ও ডাটাবেজ অপারেশন ইনজেক্টেবল সার্ভিসের ওপর অর্পণ করুন।'
    },
    {
      en: 'Use ExecutionContext in guards and interceptors rather than assuming HTTP, allowing components to adapt across WebSockets and microservices.',
      bn: 'গার্ড এবং ইন্টারসেপ্টরে শুধু এইচটিটিপি বিবেচনা না করে ExecutionContext ব্যবহার করুন যাতে কোড ওয়েবসকেট ও মাইক্রোসার্ভিসেও কাজ করতে পারে।'
    },
    {
      en: 'Write integration tests using Test.createTestingModule to override heavy database or email providers with lightweight test doubles.',
      bn: 'টেস্টিংয়ে Test.createTestingModule ব্যবহার করে ভারী ডাটাবেজ বা ইমেইল সার্ভিসকে হালকা টেস্ট ডাবল বা মক দিয়ে প্রতিস্থাপন করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'How does Dependency Injection (DI) and Inversion of Control (IoC) work under the hood in NestJS, and how does TypeScript metadata reflection enable it?',
        bn: 'নেস্ট.জেএস-এ ডিপেন্ডেন্সি ইনজেকশন (DI) এবং ইনভার্সন অব কন্ট্রোল (IoC) কীভাবে কাজ করে, এবং টাইপস্ক্রিপ্ট মেটাডাটা রিফ্লেকশন এতে কীভাবে সাহায্য করে?'
      },
      a: {
        en: 'NestJS maintains an internal IoC container that tracks an application dependency graph. When a class is decorated with @Injectable() or @Controller(), TypeScript emits metadata about the parameter types in the constructor using reflect-metadata (design:paramtypes). At application startup during NestFactory.create(), the Nest IoC container recursively resolves the dependencies for each class, instantiates them in topological order, and caches singletons in memory. This eliminates manual instantiation and decouples consumers from concrete implementations.',
        bn: 'নেস্ট.জেএস একটি অভ্যন্তরীণ IoC কন্টেইনার পরিচালনা করে যা অ্যাপ্লিকেশনের নির্ভরতার গ্রাফ ট্র্যাক করে। যখন কোনো ক্লাসে @Injectable() বা @Controller() ডেকোরেটর দেওয়া হয়, তখন টাইপস্ক্রিপ্ট reflect-metadata ব্যবহার করে কনস্ট্রাক্টরের প্যারামিটার টাইপগুলোর মেটাডাটা সংরক্ষণ করে। NestFactory.create() চালুর সময় IoC কন্টেইনার রিকার্সিভভাবে প্রতিটি ক্লাসের নির্ভরতা সমাধান করে, ক্রমানুসারে অবজেক্ট তৈরি করে এবং মেমরিতে সিঙ্গেলটন হিসেবে ক্যাশ করে রাখে।'
      }
    },
    {
      q: {
        en: 'What is the precise execution lifecycle order when an incoming HTTP request hits a NestJS application?',
        bn: 'একটি ইনকামিং এইচটিটিপি রিকোয়েস্ট যখন নেস্ট.জেএস অ্যাপ্লিকেশনে আঘাত করে তখন এক্সিকিউশন লাইফসাইকেলের সঠিক ক্রম কী?'
      },
      a: {
        en: 'The execution lifecycle flows in a strictly deterministic sequence: 1. Global, Module, and Route Middleware execute first; 2. Guards execute to determine authorization (CanActivate); 3. Interceptors (pre-controller phase) execute; 4. Pipes execute to transform and validate incoming request payloads; 5. The Controller route handler executes and returns a result; 6. Interceptors (post-controller phase via RxJS operators) transform the outgoing response stream; 7. Exception Filters catch any thrown unhandled exceptions and format the final HTTP error payload.',
        bn: 'এক্সিকিউশন লাইফসাইকেল একটি নির্দিষ্ট ক্রমানুসারে পরিচালিত হয়: ১. প্রথমে গ্লোবাল, মডিউল ও রুট মিডেলওয়্যার চলে; ২. এরপর পারমিশন যাচাই করতে গার্ড (CanActivate) চলে; ৩. তারপর ইন্টারসেপ্টরের প্রাক-পর্ব চলে; ৪. এরপর ডাটা রূপান্তর ও যাচাই করতে পাইপ কার্যকর হয়; ৫. তারপর কন্ট্রোলার রুট হ্যান্ডলার চলে এবং ডাটা ফেরত দেয়; ৬. এরপর ইন্টারসেপ্টরের উত্তর-পর্ব (RxJS অপারেটর) রেসপন্স সাজায়; ৭. সবশেষে এক্সেপশন ফিল্টার যেকোনো অপ্রত্যাশিত এরর ধরে ক্লায়েন্টের জন্য এরর রেসপন্স তৈরি করে।'
      }
    },
    {
      q: {
        en: 'Why does a circular dependency between two NestJS services cause a runtime crash at boot time, and how does forwardRef() resolve it?',
        bn: 'দুটি নেস্ট.জেএস সার্ভিসের মাঝে সার্কুলার ডিপেন্ডেন্সি থাকলে কেন বুট টাইমে অ্যাপ ক্র্যাশ করে, এবং forwardRef() কীভাবে এটি সমাধান করে?'
      },
      a: {
        en: 'When ServiceA injects ServiceB and ServiceB injects ServiceA in their constructors, the IoC container encounters an infinite cycle and cannot resolve which service to instantiate first, resulting in undefined constructor arguments and runtime crashes. The forwardRef() utility function resolves this by returning a lazy closure returning the class reference, allowing Nest to defer instantiation until both tokens are registered in the DI registry. forwardRef() must be used with @Inject() on both sides of the circular relationship.',
        bn: 'যখন সার্ভিস A সার্ভিস B-কে চায় এবং সার্ভিস B সার্ভিস A-কে চায়, তখন IoC কন্টেইনার একটি অসীম চক্রের মুখোমুখি হয় এবং কাকে আগে তৈরি করবে তা বুঝতে পারে না, ফলে কনস্ট্রাক্টরে undefined গিয়ে অ্যাপ ক্র্যাশ করে। forwardRef() ফাংশনটি একটি লেজি ক্লোজার ফেরত দেয় যা ক্লাসের রেফারেন্স ধরে রাখে, ফলে কন্টেইনার উভয় টোকেন নিবন্ধিত না হওয়া পর্যন্ত অপেক্ষা করতে পারে। সার্কুলার সম্পর্কের উভয় প্রান্তেই @Inject(forwardRef(() => Service)) ব্যবহার করতে হয়।'
      }
    },
    {
      q: {
        en: 'What is the difference between DEFAULT, REQUEST, and TRANSIENT provider injection scopes, and why should REQUEST scope be used sparingly?',
        bn: 'DEFAULT, REQUEST এবং TRANSIENT প্রোভাইডার স্কোপের মধ্যে পার্থক্য কী, এবং REQUEST স্কোপ কেন সতর্কতার সাথে খুব কম ব্যবহার করা উচিত?'
      },
      a: {
        en: 'DEFAULT scope creates a single singleton instance shared across the entire application lifetime. REQUEST scope creates a brand new instance of the provider for each incoming HTTP request, garbage-collected when the response completes. TRANSIENT scope creates a dedicated instance for every injecting consumer class. REQUEST scope should be used sparingly because it bubbles up the entire dependency graph: any singleton injecting a REQUEST-scoped service becomes request-scoped itself, dramatically increasing memory allocations and degrading throughput by 20x to 50x under high concurrency.',
        bn: 'DEFAULT স্কোপ পুরো অ্যাপ্লিকেশনের লাইফটাইমে একটিমাত্র সিঙ্গেলটন ইনস্ট্যান্স শেয়ার করে। REQUEST স্কোপ প্রতিটি নতুন ইনকামিং এইচটিটিপি রিকোয়েস্টের জন্য আলাদা নতুন ইনস্ট্যান্স তৈরি করে যা রিকোয়েস্ট শেষে মুছে যায়। TRANSIENT স্কোপ প্রতিটি ইনজেক্টেড ক্লাসের জন্য আলাদা ইনস্ট্যান্স দেয়। REQUEST স্কোপ খুব কম ব্যবহার করা উচিত কারণ এটি ডিপেন্ডেন্সি ট্রির উপরের দিকেও ছড়িয়ে পড়ে: কোনো সিঙ্গেলটন সার্ভিসে রিকোয়েস্ট-স্কোপড সার্ভিস ইনজেক্ট করলে সেই সিঙ্গেলটন নিজেও রিকোয়েস্ট-স্কোপড হয়ে যায়, যা মেমরি খরচ বাড়িয়ে সার্ভারের কার্যক্ষমতা ২০ থেকে ৫০ গুণ ধীর করে দিতে পারে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Fintech Banking Core Gateways: Financial institutions build payment routing microservices with NestJS modules, strict DTO class-validator pipes, and audit logging interceptors to handle millions of transactions securely.',
      bn: 'ফিনটেক ব্যাংকিং পেমেন্ট গেটওয়ে: বৃহৎ আর্থিক প্রতিষ্ঠানগুলো নেস্ট.জেএস মডিউল, কঠোর DTO পাইপ এবং অডিট ইন্টারসেপ্টর ব্যবহার করে প্রতিদিন লাখ লাখ লেনদেন নিরাপদে পরিচালনা করে।'
    },
    {
      en: 'Multi-Tenant SaaS Platforms: Cloud platforms use custom dynamic modules (TenantModule.forRootAsync()) with execution context guards to isolate tenant database connections and enforce tenant-level permissions dynamically.',
      bn: 'মাল্টি-টেন্যান্ট সাস প্ল্যাটফর্ম: ক্লাউড সফটওয়্যারগুলো ডায়নামিক মডিউল এবং এক্সিকিউশন কনটেক্সট গার্ড ব্যবহার করে প্রতিটি প্রতিষ্ঠানের ডাটাবেজ সংযোগ সম্পূর্ণ আলাদা ও সুরক্ষিত রাখে।'
    },
    {
      en: 'Healthcare Telemedicine APIs: HIPAA-compliant medical backends use NestJS exception filters and encryption pipes to sanitize sensitive patient identifiers before persisting records or emitting audit events.',
      bn: 'টেলিমেডিসিন হেলথকেয়ার প্ল্যাটফর্ম: স্বাস্থ্যসেবা এপিআই-তে সংবেদনশীল রোগীর তথ্য সুরক্ষায় কাস্টম এক্সেপশন ফিল্টার ও এনক্রিপশন পাইপ ব্যবহার করে নিয়ন্ত্রক সংস্থার মানদণ্ড রক্ষা করা হয়।'
    },
    {
      en: 'High-Concurrency Streaming Services: Streaming platforms deploy NestJS microservices with Terminus health probes and Redis cache interceptors to handle millions of simultaneous viewer status updates.',
      bn: 'হাই-কনকারেন্সি স্ট্রিমিং সার্ভিস: লাইভ ভিডিও স্ট্রিমিং প্ল্যাটফর্মগুলো টার্মিনাস হেলথ প্রোব এবং রেডিস ক্যাশিং ইন্টারসেপ্টর দিয়ে তৈরি নেস্ট.জেএস মাইক্রোসার্ভিস ব্যবহার করে লাখ লাখ দর্শকের রিকোয়েস্ট সামাল দেয়।'
    }
  ]
};
