import type { Lesson } from '../../../lib/types';

export const ModulesAndMiseEnPlaceLesson: Lesson = {
  slug: 'modules-and-mise-en-place',
  tech: 'nestjs',
  title: {
    en: 'Modular Architecture — Encapsulation, Dynamic Modules & Exports',
    bn: 'মডিউলার আর্কিটেকচার — এনক্যাপসুলেশন, ডায়নামিক মডিউল ও এক্সপোর্ট'
  },
  summary: {
    en: 'Modules organize NestJS applications into cohesive, encapsulated boundaries. In this lesson, you will master the four @Module properties (imports, controllers, providers, exports), cross-module provider sharing, dynamic module configuration patterns (forRoot, register), and the architectural boundaries of @Global modules.',
    bn: 'মডিউলগুলো নেস্ট.জেএস অ্যাপ্লিকেশনকে সুসংহত ও সুশৃঙ্খল সীমানায় বিভক্ত করে। এই পাঠে আপনি @Module-এর চারটি প্রধান প্রোপার্টি (imports, controllers, providers, exports), মডিউলের মাঝে প্রোভাইডার শেয়ারিং, ডায়নামিক মডিউল প্যাটার্ন (forRoot, register) এবং @Global মডিউলের সঠিক ব্যবহার গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'modules-architecture-overview',
      text: {
        en: 'The Modular Encapsulation Architecture',
        bn: 'মডিউলার এনক্যাপসুলেশন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build large backend applications with hundreds of endpoints, organizing code into domain-driven modules prevents chaotic dependency tangles. In NestJS, a module is a class decorated with @Module that acts as an encapsulation boundary: providers declared in a module remain private and inaccessible to outside consumers unless explicitly placed in the exports array.',
        bn: 'যখন আপনি শত শত এন্ডপয়েন্ট বিশিষ্ট বড় ব্যাকএন্ড অ্যাপ্লিকেশন তৈরি করেন, তখন ডোমেন-ভিত্তিক মডিউলে কোড সাজালে বিশৃঙ্খলা দূর হয়। নেস্ট.জেএস-এ @Module দ্বারা চিহ্নিত ক্লাস একটি এনক্যাপসুলেশন বলয় হিসেবে কাজ করে: কোনো মডিউলের প্রোভাইডারগুলো ডিফল্টভাবে সম্পূর্ণ গোপন থাকে যতক্ষণ না সেগুলোকে exports অ্যারেতে স্পষ্টভাবে উন্মুক্ত করা হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '@Module()',
          def: {
            en: 'Class decorator providing metadata that Nest uses to organize the application structure and construct dependency graphs.',
            bn: 'ক্লাস ডেকোরেটর যা অ্যাপ্লিকেশনের কাঠামো সাজাতে এবং ডিপেন্ডেন্সি গ্রাফ তৈরি করতে নেস্ট-এর প্রয়োজনীয় মেটাডাটা সরবরাহ করে।'
          }
        },
        {
          term: 'Provider Encapsulation',
          def: {
            en: 'The security and isolation rule where providers are strictly scoped to their owning module unless explicitly exported.',
            bn: 'নিরাপত্তা ও পৃথকীকরণ নীতি যার ফলে প্রোভাইডারগুলো কেবল নিজস্ব মডিউলেই সীমাবদ্ধ থাকে, যতক্ষণ না তা এক্সপোর্ট করা হয়।'
          }
        },
        {
          term: 'Dynamic Module',
          def: {
            en: 'A module configurable at runtime by calling static methods like forRoot() or register() that return a DynamicModule object.',
            bn: 'একটি মডিউল যা রানটাইমে forRoot() বা register() মেথডের মাধ্যমে কাস্টম কনফিগারেশন গ্রহণ করে DynamicModule অবজেক্ট ফেরত দেয়।'
          }
        },
        {
          term: '@Global() Decorator',
          def: {
            en: 'Decorator that makes an exported provider available everywhere without needing to re-import the module into feature modules.',
            bn: 'ডেকোরেটর যা কোনো মডিউলের এক্সপোর্ট করা প্রোভাইডারকে অন্য প্রতিটি ফিচার মডিউলে বারবার ইমপোর্ট না করেই সর্বত্র ব্যবহারযোগ্য করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'module-properties-table',
      text: {
        en: 'The Four Metadata Properties of @Module',
        bn: '@Module-এর চারটি প্রধান মেটাডাটা প্রোপার্টি'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Property', bn: 'প্রোপার্টি' },
        { en: 'Expected Type', bn: 'প্রত্যাশিত ডাটা টাইপ' },
        { en: 'Architectural Function', bn: 'আর্কিটেকচারাল দায়িত্ব' }
      ],
      rows: [
        [
          { en: 'imports', bn: 'imports' },
          { en: 'Array of Modules', bn: 'মডিউলের অ্যারে' },
          { en: 'Brings in exported providers from other modules into this module scope', bn: 'অন্যান্য মডিউলের এক্সপোর্ট করা প্রোভাইডারগুলোকে এই মডিউলের ভেতরে ব্যবহারের সুবিধা দেয়' }
        ],
        [
          { en: 'controllers', bn: 'controllers' },
          { en: 'Array of Controllers', bn: 'কন্ট্রোলারের অ্যারে' },
          { en: 'Registers HTTP routing controllers to be instantiated by this module', bn: 'এই মডিউলের আওতাধীন এইচটিটিপি রাউটিং কন্ট্রোলারগুলোকে নিবন্ধিত করে' }
        ],
        [
          { en: 'providers', bn: 'providers' },
          { en: 'Array of Providers', bn: 'প্রোভাইডারের অ্যারে' },
          { en: 'Instantiates services private to this module scope by default', bn: 'এই মডিউলের নিজস্ব প্রাইভেট সার্ভিসগুলোকে প্রস্তুত ও সক্রিয় করে' }
        ],
        [
          { en: 'exports', bn: 'exports' },
          { en: 'Array of Providers/Modules', bn: 'প্রোভাইডার বা মডিউলের অ্যারে' },
          { en: 'Exposes selected internal providers to any module importing this module', bn: 'এই মডিউলটি যারা ইমপোর্ট করবে তাদের জন্য নির্দিষ্ট সার্ভিসগুলো উন্মুক্ত করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'dynamic-module-code',
      text: {
        en: 'Dynamic Module Implementation with forRoot Pattern',
        bn: 'forRoot প্যাটার্ন সহ ডায়নামিক মডিউল বাস্তবায়ন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of a NestJS Dynamic Module
class DynamicConfigModule {
  static forRoot(options) {
    return {
      module: DynamicConfigModule,
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options
        }
      ],
      exports: ['CONFIG_OPTIONS']
    };
  }
}

// 1. Instantiating dynamic module with environment parameters
const appConfig = DynamicConfigModule.forRoot({
  environment: 'production',
  maxConnections: 100
});

// 2. Inspecting module registration contract
const exportedToken = appConfig.exports[0];
const registeredValue = appConfig.providers[0].useValue;

console.log('Exported configuration token:', exportedToken);
// -> Exported configuration token: CONFIG_OPTIONS
console.log('Configured max connections allocation:', registeredValue.maxConnections);
// -> Configured max connections allocation: 100`,
      caption: {
        en: 'DynamicConfigModule registering CONFIG_OPTIONS with 100 max connections',
        bn: 'DynamicConfigModule ১০০ কানেকশন সীমা সহ CONFIG_OPTIONS রেজিস্টার করছে'
      }
    },
    {
      type: 'heading',
      id: 'dynamic-module-conventions',
      text: {
        en: 'Dynamic Module Method Naming Conventions',
        bn: 'ডায়নামিক মডিউলের মেথড নামকরণের নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'NestJS establishes strict community standards for dynamic module methods. Use register() for specific caller-configured features; use forRoot() to configure a singleton service once at the application root; and use forFeature() inside feature modules to attach local models or options.',
        bn: 'নেস্ট.জেএস ডায়নামিক মডিউল মেথডের জন্য সুনির্দিষ্ট মানদণ্ড তৈরি করেছে। কোনো নির্দিষ্ট ফিচারের কাস্টম কনফিগারেশনে register() ব্যবহার করা হয়; পুরো অ্যাপ্লিকেশনে একবার একক কনফিগারেশন সেট করতে forRoot() ব্যবহৃত হয়; এবং ফিচার মডিউলের লোকাল মডেল বা অপশন জুড়তে forFeature() ব্যবহৃত হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Explicit Exports: If ServiceB in ModuleB needs ServiceA from ModuleA, ModuleA MUST export ServiceA and ModuleB MUST import ModuleA.',
          bn: '১. স্পষ্ট এক্সপোর্ট: ModuleB-র যদি ModuleA-র সার্ভিস লাগে, তবে ModuleA-কে অবশ্যই তা এক্সপোর্ট করতে হবে এবং ModuleB-কে ইমপোর্ট করতে হবে।'
        },
        {
          en: '2. forRoot for Root Config: Use forRoot(options) or forRootAsync(options) to configure singletons (like TypeOrmModule or ConfigModule) once in AppModule.',
          bn: '২. মূলে forRoot ব্যবহার: TypeOrmModule বা ConfigModule-এর মতো অ্যাপ্লিকেশনব্যাপী সিঙ্গেলটনে রুট মডিউলে forRoot ব্যবহার করুন।'
        },
        {
          en: '3. forFeature for Child Models: Use forFeature([UserEntity]) within domain modules to register repository schemas without reconfiguring database credentials.',
          bn: '৩. সাব-মডিউলে forFeature: ডাটাবেজ তথ্য নতুন করে না দিয়ে ডোমেন মডিউলে নির্দিষ্ট টেবিল যুক্ত করতে forFeature ব্যবহার করুন।'
        },
        {
          en: '4. Ration @Global Usage: Restrict @Global() only to truly ubiquitous infrastructure modules (such as Database or Core Config) to avoid hidden dependencies.',
          bn: '৪. @Global ব্যবহারে সতর্কতা: কেবল ডাটাবেজ বা কোর কনফিগারেশনের মতো সর্বজনীন সার্ভিসেই @Global() ব্যবহার করুন যাতে কোডের স্বচ্ছতা নষ্ট না হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nest-mod-ex1',
      kind: 'mcq',
      topic: 'module provider encapsulation rule',
      question: {
        en: 'If UsersService is declared in the providers array of UsersModule, what must UsersModule do to allow OrdersModule to inject UsersService?',
        bn: 'UsersService যদি UsersModule-এর providers অ্যারেতে থাকে, তবে OrdersModule-কে তা ব্যবহারের সুযোগ দিতে UsersModule-এর কী করা উচিত?'
      },
      options: [
        {
          en: 'UsersModule must add UsersService to its exports array, and OrdersModule must add UsersModule to its imports array',
          bn: 'UsersModule-কে exports অ্যারেতে UsersService রাখতে হবে এবং OrdersModule-কে imports অ্যারেতে UsersModule যোগ করতে হবে'
        },
        {
          en: 'UsersModule must change its file extension from .ts to .js',
          bn: 'UsersModule-এর ফাইল এক্সটেনশন .ts থেকে .js করতে হবে'
        },
        {
          en: 'OrdersModule must declare UsersService in its own providers array, creating a duplicate instance',
          bn: 'OrdersModule-কে তার নিজের providers অ্যারেতে UsersService যুক্ত করতে হবে, যা ডুপ্লিকেট অবজেক্ট তৈরি করবে'
        },
        {
          en: 'All services are globally public by default without any configuration',
          bn: 'সমস্ত সার্ভিস কোনো কনফিগারেশন ছাড়াই ডিফল্টভাবে সবার জন্য উন্মুক্ত থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Nest enforces provider encapsulation: export from source, import into destination.',
        bn: 'নেস্ট প্রোভাইডার এনক্যাপসুলেশন মেনে চলে: উৎস থেকে এক্সপোর্ট এবং গন্তব্যে ইমপোর্ট।'
      },
      explanation: {
        en: 'Providers are private by default. To share a provider, the host module must place it in "exports", and the consumer module must list the host in "imports".',
        bn: 'প্রোভাইডার ডিফল্টভাবে প্রাইভেট থাকে। শেয়ার করতে হলে হোস্ট মডিউলকে "exports"-এ এবং গ্রাহক মডিউলকে "imports"-এ উল্লেখ করতে হয়।'
      }
    },
    {
      id: 'nest-mod-ex2',
      kind: 'mcq',
      topic: 'dynamic module method convention forroot',
      question: {
        en: 'By NestJS architectural convention, when should a dynamic module expose a static method named "forRoot()"?',
        bn: 'নেস্ট.জেএস আর্কিটেকচারাল রীতি অনুযায়ী কখন একটি ডায়নামিক মডিউলে "forRoot()" নামের স্ট্যাটিক মেথড ব্যবহার করা উচিত?'
      },
      options: [
        {
          en: 'When configuring a module once at the application root level (AppModule) to establish global singleton settings or shared database pools',
          bn: 'যখন পুরো অ্যাপ্লিকেশনের জন্য রুট লেভেলে (AppModule) একবার কনফিগার করে গ্লোবাল সিঙ্গেলটন বা ডাটাবেজ পুল তৈরি করতে হয়'
        },
        {
          en: 'When creating animated UI buttons on the client browser',
          bn: 'ক্লায়েন্ট ব্রাউজারে অ্যানিমেটেড বাটন তৈরির সময়'
        },
        {
          en: 'When restarting the Linux server operating system',
          bn: 'লিনাক্স অপারেটিং সিস্টেম রিস্টার্ট দেওয়ার সময়'
        },
        {
          en: 'forRoot() is strictly prohibited in modern NestJS projects',
          bn: 'আধুনিক নেস্ট.জেএস প্রজেক্টে forRoot() ব্যবহার সম্পূর্ণ নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'The name forRoot denotes configuration tailored for the root of the application.',
        bn: 'forRoot নামটি স্পষ্টভাবে অ্যাপ্লিকেশনের মূল বা রুট কনফিগারেশন প্রকাশ করে।'
      },
      explanation: {
        en: 'forRoot() configures a dynamic module once at the root level, ensuring providers and settings are instantiated once for the entire application graph.',
        bn: 'forRoot() রুট লেভেলে একবার মডিউল প্রস্তুত করে, যার ফলে পুরো ডিপেন্ডেন্সি ট্রিতে একটিমাত্র একীভূত কনফিগারেশন শেয়ার হয়।'
      }
    },
    {
      id: 'nest-mod-ex3',
      kind: 'mcq',
      topic: 'global decorator usage guidelines',
      question: {
        en: 'What architectural danger arises from overusing the @Global() decorator on feature modules?',
        bn: 'ফিচার মডিউলে অতিরিক্ত @Global() ডেকোরেটর ব্যবহার করলে কোন আর্কিটেকচারাল বিপদ ঘটে?'
      },
      options: [
        {
          en: 'It destroys modular encapsulation, creates hidden dependencies, makes unit testing difficult, and turns the architecture into an untraceable monolith',
          bn: 'এটি মডিউলার এনক্যাপসুলেশন নষ্ট করে, অপ্রকাশ্য নির্ভরতা তৈরি করে, টেস্টিং কঠিন করে এবং পুরো সিস্টেমকে জটিল মনোলিথে পরিণত করে'
        },
        {
          en: 'It causes the hard drive to run out of disk space within 5 minutes',
          bn: 'এটি ৫ মিনিটের মধ্যে হার্ডড্রাইভের সমস্ত মেমরি শেষ করে ফেলে'
        },
        {
          en: 'It limits the network speed of the Express server to 10 kbps',
          bn: 'এটি এক্সপ্রেস সার্ভারের নেটওয়ার্ক গতি ১০ kbps-এ নামিয়ে আনে'
        },
        {
          en: 'It makes TypeScript compile into Python code instead of JavaScript',
          bn: 'এটি টাইপস্ক্রিপ্টকে জাভাস্ক্রিপ্টের বদলে পাইথন কোডে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Global dependencies make it impossible to see where components originate.',
        bn: 'গ্লোবাল নির্ভরতা থাকলে কোনো উপাদান কোথা থেকে আসছে তা ট্র্যাক করা অসম্ভব হয়ে পড়ে।'
      },
      explanation: {
        en: '@Global makes providers available everywhere without imports. Overuse obscures dependencies and tightly couples modules together.',
        bn: '@Global সব জায়গায় ইমপোর্ট ছাড়াই সার্ভিস ঢুকিয়ে দেয়। অতিরিক্ত ব্যবহারে মডিউলগুলোর স্বাতন্ত্র্য নষ্ট হয়ে কোডবেজ জগাখিচুড়ি হয়ে যায়।'
      }
    },
    {
      id: 'nest-mod-ex4',
      kind: 'mcq',
      topic: 're-exporting modules pattern',
      question: {
        en: 'What is the architectural purpose of re-exporting a module, such as "exports: [CommonModule]" inside CoreModule?',
        bn: 'CoreModule-এর ভেতরে "exports: [CommonModule]"-এর মতো মডিউল পুনরায় এক্সপোর্ট করার আর্কিটেকচারাল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It acts as an aggregator barrel: any feature module that imports CoreModule automatically gains access to all exported providers of CommonModule',
          bn: 'এটি একটি সমন্বয়কারী হিসেবে কাজ করে: যে ফিচার মডিউল CoreModule ইমপোর্ট করবে সে স্বয়ংক্রিয়ভাবে CommonModule-এর সব সার্ভিস পেয়ে যাবে'
        },
        {
          en: 'It converts CommonModule into a binary C++ executable file',
          bn: 'এটি CommonModule-কে একটি বাইনারি C++ ফাইলে রূপান্তর করে'
        },
        {
          en: 'It automatically formats all source code files using Prettier',
          bn: 'এটি স্বয়ংক্রিয়ভাবে প্রিটিয়ার দিয়ে সোর্স কোড সাজিয়ে দেয়'
        },
        {
          en: 'Re-exporting modules throws a circular compilation error in TypeScript',
          bn: 'মডিউল রি-এক্সপোর্ট করলে টাইপস্ক্রিপ্টে সার্কুলার এরর ঘটে'
        }
      ],
      answer: 0,
      hint: {
        en: 'It bundles multiple common modules together for convenient single-import consumption.',
        bn: 'এটি বারবার আলাদা ইমপোর্ট করার ঝামেলা দূর করতে সাধারণ মডিউলগুলোকে একসাথে বান্ডেল করে।'
      },
      explanation: {
        en: 'Re-exporting allows aggregator modules to bundle several foundational modules together, simplifying the imports array for downstream feature modules.',
        bn: 'রি-এক্সপোর্ট করার মাধ্যমে বিভিন্ন দরকারি মডিউলকে একটি প্যাকেজে এনে অন্য মডিউলে খুব সহজে একবারে ইমপোর্ট করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'modules-and-mise-en-place-quiz',
    title: {
      en: 'Modular Architecture & Encapsulation Quiz',
      bn: 'মডিউলার আর্কিটেকচার ও এনক্যাপসুলেশন কুইজ'
    },
    questions: [
      {
        id: 'q-forfeature-orm-entities',
        kind: 'mcq',
        topic: 'forfeature pattern in orm database modules',
        question: {
          en: 'Why do ORM modules like TypeOrmModule use TypeOrmModule.forFeature([UserEntity]) within feature modules rather than re-running forRoot()?',
          bn: 'TypeOrmModule-এর মতো ডাটাবেজ মডিউলে ফিচার মডিউলের ভেতরে forRoot() পুনরায় না চালিয়ে কেন TypeOrmModule.forFeature([UserEntity]) ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'forRoot() establishes the global database connection pool once; forFeature() scopes specific entity repositories to that local feature module without opening duplicate connections',
            bn: 'forRoot() একবার পুরো অ্যাপের ডাটাবেজ কানেকশন পুল তৈরি করে; আর forFeature() নতুন কানেকশন না খুলে কেবল নির্দিষ্ট টেবিলকে ফিচার মডিউলের সাথে যুক্ত করে'
          },
          {
            en: 'forFeature() is 10 times faster than SQL database queries',
            bn: 'forFeature() এসকিউএল ডাটাবেজ কুয়েরির চেয়ে দশ গুণ দ্রুত কাজ করে'
          },
          {
            en: 'forRoot() only works on Windows operating systems',
            bn: 'forRoot() কেবল উইন্ডোজ অপারেটিং সিস্টেমে কার্যকর হয়'
          },
          {
            en: 'forFeature() deletes older tables before creating new ones',
            bn: 'forFeature() নতুন টেবিল তৈরির আগে পুরোনো টেবিল মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Connection configuration happens once; entity registration happens per feature.',
          bn: 'কানেকশন কনফিগারেশন হয় একবার; আর টেবিল বা এন্টিটি যুক্ত হয় প্রতি ফিচারে।'
        },
        explanation: {
          en: 'forRoot() defines the connection credentials and connection pool. forFeature() registers entity repositories within the local module scope without reconnecting.',
          bn: 'forRoot() একবার ডাটাবেজ সংযোগ তৈরি করে। forFeature() সেই বিদ্যমান সংযোগের ওপর ভিত্তি করে নির্দিষ্ট রিপোজিটরি মডিউলে সরবরাহ করে।'
        }
      },
      {
        id: 'q-dynamic-module-interface',
        kind: 'mcq',
        topic: 'dynamicmodule object contract',
        question: {
          en: 'What properties does a static method returning a DynamicModule object typically provide in NestJS?',
          bn: 'নেস্ট.জেএস-এ DynamicModule রিটার্নকারী একটি স্ট্যাটিক মেথড সাধারণত কোন প্রোপার্টিগুলো প্রদান করে?'
        },
        options: [
          {
            en: 'module (the target module class), plus optional providers, controllers, imports, and exports arrays matching @Module metadata',
            bn: 'module (টার্গেট মডিউল ক্লাস), এবং সাথে ঐচ্ছিক providers, controllers, imports ও exports অ্যারে যা @Module-এর অনুরূপ'
          },
          {
            en: 'port, hostname, protocol, and socketDescriptor integers',
            bn: 'port, hostname, protocol, এবং socketDescriptor সংখ্যা'
          },
          {
            en: 'username, password, and jwtSecretKey strings',
            bn: 'username, password, এবং jwtSecretKey টেক্সট'
          },
          {
            en: 'cpuArchitecture and operatingSystemType properties',
            bn: 'cpuArchitecture এবং operatingSystemType প্রোপার্টি'
          }
        ],
        answer: 0,
        hint: {
          en: 'A DynamicModule returns the exact same configuration shape as the @Module decorator.',
          bn: 'একটি DynamicModule ঠিক @Module ডেকোরেটরের মতো একই মেটাডাটা কাঠামো রিটার্ন করে।'
        },
        explanation: {
          en: 'A DynamicModule object mirrors @Module metadata. It requires the "module" property identifying the class, followed by dynamic providers, imports, and exports.',
          bn: 'DynamicModule অবজেক্টে একটি "module" প্রোপার্টি থাকা বাধ্যতামূলক যার সাথে ডায়নামিক প্রোভাইডার, ইমপোর্ট ও এক্সপোর্ট যুক্ত থাকে।'
        }
      },
      {
        id: 'q-circular-module-imports',
        kind: 'mcq',
        topic: 'circular module dependency resolution',
        question: {
          en: 'If AuthModule imports UsersModule and UsersModule imports AuthModule, how must the imports arrays be configured to resolve the cycle?',
          bn: 'যদি AuthModule UsersModule-কে এবং UsersModule AuthModule-কে ইমপোর্ট করে, তবে সার্কুলার এরর কাটিয়ে উঠতে imports অ্যারে কীভাবে সাজাতে হবে?'
        },
        options: [
          {
            en: 'Use forwardRef(() => ModuleName) inside the imports array on both participating modules: imports: [forwardRef(() => UsersModule)]',
            bn: 'উভয় মডিউলের imports অ্যারেতে forwardRef(() => ModuleName) ব্যবহার করতে হবে: imports: [forwardRef(() => UsersModule)]'
          },
          {
            en: 'Remove all TypeScript interfaces from both modules',
            bn: 'উভয় মডিউল থেকে সমস্ত টাইপস্ক্রিপ্ট ইন্টারফেস মুছে ফেলতে হবে'
          },
          {
            en: 'Change the port number of the Express HTTP server',
            bn: 'এক্সপ্রেস এইচটিটিপি সার্ভারের পোর্ট নম্বর পরিবর্তন করতে হবে'
          },
          {
            en: 'Circular module imports cannot be resolved in NestJS under any circumstances',
            bn: 'নেস্ট.জেএস-এ কোনো অবস্থাতেই সার্কুলার মডিউল সমাধান করা সম্ভব নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'forwardRef can wrap modules in the imports array just like services in constructors.',
          bn: 'কনস্ট্রাক্টরের মতো imports অ্যারেতেও মডিউলগুলোকে forwardRef দিয়ে মোড়ানো যায়।'
        },
        explanation: {
          en: 'Just as forwardRef breaks provider cycles, wrapping modules in forwardRef(() => Module) inside imports resolves circular module imports.',
          bn: 'সার্ভিসের মতোই মডিউলের ক্ষেত্রেও imports অ্যারেতে forwardRef(() => Module) ব্যবহার করলে সার্কুলার সংঘাত দূর হয়।'
        }
      },
      {
        id: 'q-feature-module-clean-boundary',
        kind: 'mcq',
        topic: 'feature module clean boundary benefit',
        question: {
          en: 'What is the principal software engineering advantage of encapsulating related controllers, services, and repositories into feature modules?',
          bn: 'সম্পর্কিত কন্ট্রোলার, সার্ভিস ও রিপোজিটরিকে ফিচার মডিউলে সাজানোর প্রধান সফটওয়্যার ইঞ্জিনিয়ারিং সুবিধা কী?'
        },
        options: [
          {
            en: 'High cohesion and low coupling: domain boundaries are clearly isolated, making code easier to maintain, refactor, test, and extract into independent microservices',
            bn: 'উচ্চ সংহতি এবং নিম্ন সংযোগ (High cohesion, low coupling): প্রতিটি ডোমেন স্বাধীন থাকে, ফলে কোড রক্ষণাবেক্ষণ, টেস্ট ও মাইক্রোসার্ভিসে রূপান্তর অত্যন্ত সহজ হয়'
          },
          {
            en: 'It reduces the download size of Google Chrome browser for users',
            bn: 'এটি ব্যবহারকারীদের জন্য গুগল ক্রোম ব্রাউজারের সাইজ কমিয়ে দেয়'
          },
          {
            en: 'It eliminates the need for database indexes in MongoDB',
            bn: 'এটি মঙ্গোডিবিতে ডাটাবেজ ইনডেক্সের প্রয়োজনীয়তা দূর করে দেয়'
          },
          {
            en: 'It automatically encrypts network packets at the Wi-Fi router level',
            bn: 'এটি ওয়াই-ফাই রাউটার লেভেলে নেটওয়ার্ক প্যাকেট এনক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modular boundaries promote maintainability, clear ownership, and future microservice migration.',
          bn: 'মডিউলার কাঠামো রক্ষণাবেক্ষণ সহজ করে এবং ভবিষ্যতে মাইক্রোসার্ভিসে রূপান্তরের পথ সুগম করে।'
        },
        explanation: {
          en: 'Feature modules group related domain capabilities together. This enforces clean boundaries and allows teams to develop or split features into microservices with minimal friction.',
          bn: 'ফিচার মডিউল সম্পর্কিত কাজগুলোকে একসাথে রাখে। এটি স্পষ্ট সীমানা তৈরি করে এবং ভবিষ্যতে সহজেই আলাদা সার্ভিসে ভাগ করার সুবিধা দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'pipes-and-validation',
    title: {
      en: 'Pipes & Request Validation — DTOs, class-validator & Transformations',
      bn: 'পাইপ ও রিকোয়েস্ট ভ্যালিডেশন — DTO, class-validator ও ট্রান্সফরমেশন'
    }
  }
};
