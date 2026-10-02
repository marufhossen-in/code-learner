import type { Lesson } from '../../../lib/types';

export const TheBlueprintedKitchenLesson: Lesson = {
  slug: 'the-blueprinted-kitchen',
  tech: 'nestjs',
  title: {
    en: 'NestJS Fundamentals & First App — Bootstrapping, Decorators & DI Containers',
    bn: 'নেস্ট.জেএস ফান্ডামেন্টালস ও প্রথম অ্যাপ — বুটস্ট্র্যাপিং, ডেকোরেটর ও ডিআই কন্টেইনার'
  },
  summary: {
    en: 'NestJS brings enterprise software design patterns to server-side Node.js through TypeScript decorators and Inversion of Control. In this foundational lesson, you will master the bootstrapping lifecycle via NestFactory, TypeScript metadata reflection, dependency graph construction, and the underlying HTTP adapter architecture.',
    bn: 'নেস্ট.জেএস টাইপস্ক্রিপ্ট ডেকোরেটর এবং ইনভার্সন অব কন্ট্রোল ব্যবহারের মাধ্যমে সার্ভার-সাইড নোড.জেএস-এ এন্টারপ্রাইজ সফটওয়্যার ডিজাইন প্যাটার্ন নিয়ে আসে। এই প্রাথমিক পাঠে আপনি NestFactory দিয়ে বুটস্ট্র্যাপ লাইফসাইকেল, টাইপস্ক্রিপ্ট মেটাডাটা রিফ্লেকশন, ডিপেন্ডেন্সি গ্রাফ তৈরি এবং এইচটিটিপি অ্যাডাপ্টার আর্কিটেকচার বিস্তারিত শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'nestjs-ioc-architecture',
      text: {
        en: 'The Inversion of Control Architecture',
        bn: 'ইনভার্সন অব কন্ট্রোল আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build server applications with traditional Node.js frameworks, code manually instantiates service classes using the new keyword and passes them around. NestJS reverses this control flow through an Inversion of Control (IoC) container that automatically scans class constructors, builds a directed acyclic graph of dependencies, and instantiates singletons.',
        bn: 'যখন আপনি সাধারণ নোড.জেএস ফ্রেমওয়ার্কে সার্ভার তৈরি করেন, তখন ম্যানুয়ালি new কিওয়ার্ড দিয়ে সার্ভিস ক্লাসের অবজেক্ট বানাতে হয়। নেস্ট.জেএস ইনভার্সন অব কন্ট্রোল (IoC) কন্টেইনার ব্যবহার করে এই প্রক্রিয়াকে স্বয়ংক্রিয় করে, যা কনস্ট্রাক্টরগুলো স্ক্যান করে নির্ভরতার গ্রাফ তৈরি করে এবং সিঙ্গেলটন ইনস্ট্যান্সগুলো সরবরাহ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Inversion of Control (IoC)',
          def: {
            en: 'A software design pattern where the framework controls the lifecycle and injection of application components rather than custom code.',
            bn: 'একটি সফটওয়্যার ডিজাইন প্যাটার্ন যেখানে ফ্রেমওয়ার্ক নিজে ক্লায়েন্ট কোডের বদলে অ্যাপ্লিকেশন উপাদানগুলোর লাইফসাইকেল ও অবজেক্ট তৈরি নিয়ন্ত্রণ করে।'
          }
        },
        {
          term: 'NestFactory.create()',
          def: {
            en: 'The core static method that scans the root AppModule, resolves the dependency graph, and boots the Nest application instance.',
            bn: 'মূল স্ট্যাটিক মেথড যা রুট AppModule স্ক্যান করে ডিপেন্ডেন্সি গ্রাফ সমাধান করে এবং নেস্ট অ্যাপ্লিকেশন চালু করে।'
          }
        },
        {
          term: 'reflect-metadata',
          def: {
            en: 'A TypeScript polyfill that enables runtime inspection of type metadata emitted by class and parameter decorators.',
            bn: 'একটি টাইপস্ক্রিপ্ট পলিফিল যা ক্লাস ও প্যারামিটার ডেকোরেটরের তৈরি করা টাইপ মেটাডাটা রানটাইমে পড়ার সুবিধা দেয়।'
          }
        },
        {
          term: 'HTTP Adapter',
          def: {
            en: 'The underlying server abstraction allowing NestJS to run seamlessly on top of either Express (default) or Fastify.',
            bn: 'অন্তর্নিহিত সার্ভার অ্যাবস্ট্রাকশন যার মাধ্যমে নেস্ট.জেএস এক্সপ্রেস (ডিফল্ট) বা ফাস্টিফাই উভয়ের ওপরেই সমান দক্ষতায় চলতে পারে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'express-vs-nestjs-comparison',
      text: {
        en: 'Architectural Comparison: Bare Express Versus NestJS',
        bn: 'আর্কিটেকচারাল তুলনা: সাধারণ এক্সপ্রেস বনাম নেস্ট.জেএস'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Dimension', bn: 'আর্কিটেকচারাল মাত্রা' },
        { en: 'Bare Express.js', bn: 'সাধারণ এক্সপ্রেস.জেএস' },
        { en: 'NestJS Framework', bn: 'নেস্ট.জেএস ফ্রেমওয়ার্ক' }
      ],
      rows: [
        [
          { en: 'Project Structure', bn: 'প্রজেক্টের গঠন' },
          { en: 'Unopinionated, arbitrary folder structures', bn: 'অনির্দিষ্ট, ডেভেলপার নিজের মতো ফোল্ডার সাজায়' },
          { en: 'Opinionated, modular architecture (Modules, Controllers, Services)', bn: 'সুনির্দিষ্ট মডিউলার আর্কিটেকচার (মডিউল, কন্ট্রোলার, সার্ভিস)' }
        ],
        [
          { en: 'Dependency Management', bn: 'ডিপেন্ডেন্সি ব্যবস্থাপনা' },
          { en: 'Manual instantiation with new or global variables', bn: 'new কিওয়ার্ড বা গ্লোবাল চলক দিয়ে ম্যানুয়াল অবজেক্ট তৈরি' },
          { en: 'Automated Dependency Injection via IoC Container', bn: 'IoC কন্টেইনার দিয়ে স্বয়ংক্রিয় ডিপেন্ডেন্সি ইনজেকশন' }
        ],
        [
          { en: 'Language Foundation', bn: 'ভাষাগত ভিত্তি' },
          { en: 'Plain JavaScript with optional external types', bn: 'সাধারণ জাভাস্ক্রিপ্ট, টাইপস্ক্রিপ্ট ঐচ্ছিক' },
          { en: 'Strict TypeScript with native Decorator metadata support', bn: 'কঠোর টাইপস্ক্রিপ্ট ও নেটিভ ডেকোরেটর মেটাডাটা সমর্থন' }
        ],
        [
          { en: 'Validation & Lifecycle', bn: 'ভ্যালিডেশন ও লাইফসাইকেল' },
          { en: 'Custom middleware chained manually', bn: 'ম্যানুয়াল মিডেলওয়্যার চেইনিং' },
          { en: 'Unified pipeline: Guards, Interceptors, Pipes, Filters', bn: 'সমন্বিত পাইপলাইন: গার্ড, ইন্টারসেপ্টর, পাইপ, ফিল্টার' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'bootstrapping-simulation-code',
      text: {
        en: 'NestJS Application Bootstrapping and DI Simulation',
        bn: 'নেস্ট.জেএস অ্যাপ্লিকেশন বুটস্ট্র্যাপিং ও ডিআই সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of the NestJS IoC Dependency Container
class Container {
  constructor() {
    this.services = new Map();
  }

  register(token, ServiceClass) {
    this.services.set(token, new ServiceClass());
  }

  get(token) {
    return this.services.get(token);
  }
}

// 1. Service Provider
class LoggerService {
  log(message) {
    return 'Logged: ' + message;
  }
}

// 2. Controller receiving injected service
class AppController {
  constructor(logger) {
    this.logger = logger;
  }

  getHealth() {
    return { status: 'healthy', log: this.logger.log('Health checked') };
  }
}

// 3. Bootstrapping IoC Container on port 3000
const ioc = new Container();
ioc.register('LoggerService', LoggerService);
const controller = new AppController(ioc.get('LoggerService'));
const response = controller.getHealth();

console.log('Registered services in IoC container:', ioc.services.size);
// -> Registered services in IoC container: 1
console.log('Controller health check status:', response.status);
// -> Controller health check status: healthy`,
      caption: {
        en: 'IoC container resolving 1 service for AppController',
        bn: 'IoC কন্টেইনার AppController-এর জন্য ১টি সার্ভিস প্রস্তুত করছে'
      }
    },
    {
      type: 'heading',
      id: 'bootstrapping-lifecycle',
      text: {
        en: 'The Application Bootstrapping Sequence',
        bn: 'অ্যাপ্লিকেশন বুটস্ট্র্যাপিং ধারাবাহিকতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The main.ts entrypoint contains a single bootstrap function calling NestFactory.create(AppModule). During this call, the framework executes module initialization hooks, resolves dependencies, and binds the HTTP server to an operating system network port.',
        bn: 'main.ts ফাইলে একটি একক bootstrap ফাংশন থাকে যা NestFactory.create(AppModule) কল করে। এই সময় ফ্রেমওয়ার্ক মডিউল ইনিশিয়ালাইজেশন সম্পন্ন করে, ডিপেন্ডেন্সি সমাধান করে এবং নির্ধারিত নেটওয়ার্ক পোর্টে সার্ভার চালু করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Root Module Resolution: NestFactory scans the root AppModule metadata to construct the dependency tree.',
          bn: '১. রুট মডিউল স্ক্যান: NestFactory রুট AppModule মেটাডাটা স্ক্যান করে ডিপেন্ডেন্সি ট্রি তৈরি করে।'
        },
        {
          en: '2. Constructor Metadata Reflection: TypeScript metadata (reflect-metadata) identifies which services each controller requires.',
          bn: '২. কনস্ট্রাক্টর মেটাডাটা রিফ্লেকশন: টাইপস্ক্রিপ্ট মেটাডাটা শনাক্ত করে প্রতিটি কন্ট্রোলারের কোন সার্ভিসগুলো প্রয়োজন।'
        },
        {
          en: '3. Singleton Caching: Providers are instantiated once and cached in memory across the entire application lifetime.',
          bn: '৩. সিঙ্গেলটন ক্যাশিং: প্রোভাইডারগুলোর অবজেক্ট একবার তৈরি হয় এবং পুরো অ্যাপের জন্য মেমরিতে ক্যাশ থাকে।'
        },
        {
          en: '4. Network Binding: app.listen(process.env.PORT || 3000) begins accepting incoming client TCP connections.',
          bn: '৪. নেটওয়ার্ক বাইন্ডিং: app.listen(process.env.PORT || 3000) ইনকামিং সংযোগ গ্রহণের কাজ শুরু করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nest-boot-ex1',
      kind: 'mcq',
      topic: 'nestfactory create entrypoint function',
      question: {
        en: 'Which core static method in NestJS initializes the application instance from the root AppModule?',
        bn: 'নেস্ট.জেএস-এর কোন মূল স্ট্যাটিক মেথডটি রুট AppModule থেকে অ্যাপ্লিকেশন ইনস্ট্যান্স শুরু করে?'
      },
      options: [
        {
          en: 'NestFactory.create(AppModule)',
          bn: 'NestFactory.create(AppModule)'
        },
        {
          en: 'new NestApplication(AppModule)',
          bn: 'new NestApplication(AppModule)'
        },
        {
          en: 'Express.bootstrap(AppModule)',
          bn: 'Express.bootstrap(AppModule)'
        },
        {
          en: 'AppModule.startServer()',
          bn: 'AppModule.startServer()'
        }
      ],
      answer: 0,
      hint: {
        en: 'The framework provides a factory class named NestFactory.',
        bn: 'ফ্রেমওয়ার্ক NestFactory নামের একটি ফ্যাক্টরি ক্লাস সরবরাহ করে।'
      },
      explanation: {
        en: 'NestFactory.create(AppModule) is the canonical static entrypoint that initializes the IoC container and returns an INestApplication instance.',
        bn: 'NestFactory.create(AppModule) হলো মূল স্ট্যাটিক মেথড যা IoC কন্টেইনার প্রস্তুত করে একটি INestApplication অবজেক্ট ফেরত দেয়।'
      }
    },
    {
      id: 'nest-boot-ex2',
      kind: 'mcq',
      topic: 'ioc container purpose',
      question: {
        en: 'What is the primary architectural purpose of the Inversion of Control (IoC) container in NestJS?',
        bn: 'নেস্ট.জেএস-এ ইনভার্সন অব কন্ট্রোল (IoC) কন্টেইনারের প্রধান আর্কিটেকচারাল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'To automatically manage object lifecycles, construct dependency graphs, and inject service instances into dependent classes',
          bn: 'স্বয়ংক্রিয়ভাবে অবজেক্টের লাইফসাইকেল পরিচালনা, ডিপেন্ডেন্সি গ্রাফ তৈরি এবং ক্লাসের মধ্যে প্রয়োজনীয় সার্ভিস ইনজেক্ট করা'
        },
        {
          en: 'To compress JavaScript files into zip archives during compilation',
          bn: 'কম্পাইলেশনের সময় জাভাস্ক্রিপ্ট ফাইল জিপ আর্কাইভে সংকুচিত করা'
        },
        {
          en: 'To convert TypeScript code into C++ binary executables',
          bn: 'টাইপস্ক্রিপ্ট কোডকে C++ বাইনারি ফাইলে রূপান্তর করা'
        },
        {
          en: 'To manage physical hard drive partitioning on the host machine',
          bn: 'হোস্ট মেশিনের হার্ডড্রাইভের পার্টিশন ব্যবস্থাপনা করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'It relieves application developers from manually instantiating classes with new.',
        bn: 'এটি ডেভেলপারদের ম্যানুয়ালি new দিয়ে অবজেক্ট তৈরির ঝামেলা থেকে মুক্তি দেয়।'
      },
      explanation: {
        en: 'The IoC container inverts the control of object instantiation. Instead of classes instantiating their own dependencies, the container instantiates and provides them.',
        bn: 'IoC কন্টেইনার অবজেক্ট তৈরির নিয়ন্ত্রণ নিজের হাতে নেয়। ক্লাসগুলো নিজে অবজেক্ট না বানিয়ে কন্টেইনারের কাছ থেকে প্রস্তুত অবজেক্ট গ্রহণ করে।'
      }
    },
    {
      id: 'nest-boot-ex3',
      kind: 'mcq',
      topic: 'underlying http adapter options',
      question: {
        en: 'Which two underlying HTTP platforms can NestJS run on top of via its adapter architecture?',
        bn: 'নেস্ট.জেএস তার অ্যাডাপ্টার আর্কিটেকচারের মাধ্যমে নিচে কোন দুটি এইচটিটিপি প্ল্যাটফর্মের ওপর চলতে পারে?'
      },
      options: [
        {
          en: 'Express (default) and Fastify',
          bn: 'এক্সপ্রেস (ডিফল্ট) এবং ফাস্টিফাই'
        },
        {
          en: 'Django and Flask',
          bn: 'জ্যাঙ্গো এবং ফ্লাস্ক'
        },
        {
          en: 'Apache and Nginx',
          bn: 'অ্যাপাচি এবং এনজিনক্স'
        },
        {
          en: 'Ruby on Rails and Sinatra',
          bn: 'রুবি অন রেইলস এবং সিনাত্রা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Express is the default; Fastify offers high-throughput benchmarking performance.',
        bn: 'এক্সপ্রেস হলো ডিফল্ট; আর ফাস্টিফাই উচ্চগতির পারফরম্যান্স প্রদান করে।'
      },
      explanation: {
        en: 'NestJS abstracts the HTTP server layer through platform adapters. By default it uses Express, but developers can switch to Fastify for higher performance.',
        bn: 'নেস্ট.জেএস প্ল্যাটফর্ম অ্যাডাপ্টারের মাধ্যমে এইচটিটিপি সার্ভারকে আলাদা রাখে। ডিফল্টভাবে এক্সপ্রেস ব্যবহৃত হলেও বেশি গতির জন্য ফাস্টিফাই বেছে নেওয়া যায়।'
      }
    },
    {
      id: 'nest-boot-ex4',
      kind: 'mcq',
      topic: 'reflect metadata role in nestjs di',
      question: {
        en: 'Why is the reflect-metadata library required by NestJS during TypeScript compilation and runtime?',
        bn: 'টাইপস্ক্রিপ্ট কম্পাইলেশন ও রানটাইমে নেস্ট.জেএস-এর জন্য reflect-metadata লাইব্রেরি কেন প্রয়োজন?'
      },
      options: [
        {
          en: 'It allows the NestJS IoC container to inspect the design:paramtypes constructor metadata emitted by the TypeScript compiler',
          bn: 'এটি টাইপস্ক্রিপ্ট কম্পাইলারের তৈরি করা design:paramtypes কনস্ট্রাক্টর মেটাডাটা রানটাইমে পড়ার সুযোগ দেয়'
        },
        {
          en: 'It converts SQL database queries into NoSQL JSON documents',
          bn: 'এটি এসকিউএল ডাটাবেজ কুয়েরিকে নোএসকিউএল জেএসন ডকুমেন্টে রূপান্তর করে'
        },
        {
          en: 'It styles terminal console log messages with bright colors',
          bn: 'এটি টার্মিনাল কনসোল লগগুলোকে রঙিন টেক্সটে রূপান্তর করে'
        },
        {
          en: 'It encrypts local source code files with AES cryptography',
          bn: 'এটি লোকাল সোর্স কোড ফাইলগুলোকে এনক্রিপ্ট করে রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The IoC container needs to know the data types of constructor parameters at runtime.',
        bn: 'IoC কন্টেইনারকে রানটাইমে কনস্ট্রাক্টর প্যারামিটারের টাইপগুলো জানতে হয়।'
      },
      explanation: {
        en: 'TypeScript emits metadata about parameter types when emitDecoratorMetadata is enabled. reflect-metadata allows Nest to read these types and inject matching services.',
        bn: 'emitDecoratorMetadata চালু থাকলে টাইপস্ক্রিপ্ট টাইপের মেটাডাটা সংরক্ষণ করে। reflect-metadata দিয়ে নেস্ট সেই টাইপগুলো পড়ে সঠিক সার্ভিস ইনজেক্ট করে।'
      }
    }
  ],
  quiz: {
    id: 'blueprinted-kitchen-quiz',
    title: {
      en: 'NestJS Architecture & IoC Quiz',
      bn: 'নেস্ট.জেএস আর্কিটেকচার ও আইওসি কুইজ'
    },
    questions: [
      {
        id: 'q-singleton-lifecycle-default',
        kind: 'mcq',
        topic: 'singleton provider lifecycle',
        question: {
          en: 'What is the default lifecycle scope of providers registered in the NestJS dependency injection container?',
          bn: 'নেস্ট.জেএস ডিপেন্ডেন্সি ইনজেকশন কন্টেইনারে নিবন্ধিত প্রোভাইডারগুলোর ডিফল্ট লাইফসাইকেল স্কোপ কী?'
        },
        options: [
          {
            en: 'Singleton: a single instance is instantiated at application bootstrap and shared across all incoming requests and consumers',
            bn: 'সিঙ্গেলটন: অ্যাপ্লিকেশন চালুর সময় একটিমাত্র অবজেক্ট তৈরি হয় এবং সমস্ত রিকোয়েস্টে সেটি শেয়ার করা হয়'
          },
          {
            en: 'Request-scoped: a new instance is created and destroyed for every single HTTP request',
            bn: 'রিকোয়েস্ট-স্কোপড: প্রতিটি একক এইচটিটিপি রিকোয়েস্টের জন্য নতুন অবজেক্ট তৈরি ও ধ্বংস হয়'
          },
          {
            en: 'Transient: a new instance is created every time the class name is referenced in code',
            bn: 'ট্রানজিয়েন্ট: কোডে যতবার ক্লাসের নাম উল্লেখ করা হয় ততবার নতুন অবজেক্ট তৈরি হয়'
          },
          {
            en: 'Ephemeral: instances only exist during the execution of a setTimeout timer',
            bn: 'ইফিমেরাল: অবজেক্টগুলো কেবল সেটটাইমআউট টাইমার চলাকালীন মেমরিতে থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Singletons are the most memory-efficient and performant lifecycle choice in Node.js.',
          bn: 'নোড.জেএস-এ মেমরি সাশ্রয় এবং সর্বোচ্চ গতির জন্য সিঙ্গেলটন সবচেয়ে আদর্শ।'
        },
        explanation: {
          en: 'NestJS defaults to the Singleton scope. Provider instances are cached in the IoC container and reused across the entire application lifetime.',
          bn: 'নেস্ট.জেএস ডিফল্টভাবে সিঙ্গেলটন স্কোপ ব্যবহার করে। প্রোভাইডারের অবজেক্টটি কন্টেইনারে ক্যাশ থাকে এবং পুরো অ্যাপ্লিকেশনে বারবার ব্যবহৃত হয়।'
        }
      },
      {
        id: 'q-fastify-adapter-advantage',
        kind: 'mcq',
        topic: 'fastify adapter benchmark advantage',
        question: {
          en: 'Why would an enterprise architecture replace the default Express HTTP adapter with FastifyAdapter in a NestJS deployment?',
          bn: 'একটি এন্টারপ্রাইজ সিস্টেমে কেন ডিফল্ট এক্সপ্রেস অ্যাডাপ্টারের বদলে FastifyAdapter বেছে নেওয়া হতে পারে?'
        },
        options: [
          {
            en: 'Fastify delivers significantly higher request-per-second throughput and lower latency under extreme network loads',
            bn: 'অতিরিক্ত নেটওয়ার্ক ট্রাফিকের সময় ফাস্টিফাই লক্ষণীয়ভাবে বেশি রিকোয়েস্ট-পার-সেকেন্ড এবং কম ল্যাটেন্সি প্রদান করে'
          },
          {
            en: 'Fastify eliminates the need for writing TypeScript code',
            bn: 'ফাস্টিফাই ব্যবহার করলে টাইপস্ক্রিপ্ট কোড লেখার কোনো প্রয়োজন পড়ে না'
          },
          {
            en: 'Express is deprecated and will not work on 64-bit operating systems',
            bn: 'এক্সপ্রেস বাতিল করা হয়েছে এবং এটি ৬৪-বিট অপারেটিং সিস্টেমে কাজ করে না'
          },
          {
            en: 'Fastify automatically creates a PostgreSQL database on startup',
            bn: 'চালু হওয়ার সাথে সাথে ফাস্টিফাই স্বয়ংক্রিয়ভাবে পোস্টগ্রেস ডাটাবেজ তৈরি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fastify is engineered specifically for raw HTTP performance and throughput.',
          bn: 'ফাস্টিফাই বিশেষভাবে অতি দ্রুত এইচটিটিপি পারফরম্যান্স ও থ্রুপুটের জন্য তৈরি।'
        },
        explanation: {
          en: 'Fastify is optimized for speed, handling up to 2x more requests per second than Express in high-concurrency microservice benchmarks.',
          bn: 'ফাস্টিফাই অত্যন্ত গতিশীল হওয়ায় উচ্চ চাপের মাইক্রোসার্ভিসে এক্সপ্রেসের তুলনায় প্রায় দ্বিগুণ বেশি রিকোয়েস্ট সামাল দিতে পারে।'
        }
      },
      {
        id: 'q-decorators-under-the-hood',
        kind: 'mcq',
        topic: 'typescript decorators functionality',
        question: {
          en: 'What are TypeScript decorators (@Controller, @Injectable, @Module) in NestJS from a pure JavaScript perspective?',
          bn: 'বিশুদ্ধ জাভাস্ক্রিপ্টের দৃষ্টিকোণ থেকে নেস্ট.জেএস-এর টাইপস্ক্রিপ্ট ডেকোরেটরগুলো (@Controller, @Injectable) আসলে কী?'
        },
        options: [
          {
            en: 'Functions that execute at class definition time to attach metadata to the target class or constructor via the Reflect API',
            bn: 'এমন কিছু ফাংশন যা ক্লাস সংজ্ঞায়িত করার সময় কার্যকর হয়ে Reflect API দিয়ে টার্গেট ক্লাসে মেটাডাটা যুক্ত করে'
          },
          {
            en: 'Special hardware instructions sent directly to the CPU registers',
            bn: 'সরাসরি সিপিইউ রেজিস্টারে পাঠানো বিশেষ হার্ডওয়্যার নির্দেশাবলী'
          },
          {
            en: 'CSS styling rules applied to backend terminal windows',
            bn: 'ব্যাকএন্ড টার্মিনাল উইন্ডোতে প্রয়োগ করা সিএসএস স্টাইল রুল'
          },
          {
            en: 'Operating system processes that run as background Linux daemons',
            bn: 'অপারেটিং সিস্টেমের ব্যাকগ্রাউন্ড লিনাক্স ডিমন প্রসেস'
          }
        ],
        answer: 0,
        hint: {
          en: 'Decorators are higher-order functions decorating classes, methods, or parameters.',
          bn: 'ডেকোরেটর হলো হায়ার-অর্ডার ফাংশন যা ক্লাস বা মেথডকে সাজিয়ে তোলে।'
        },
        explanation: {
          en: 'Decorators are JavaScript functions invoked with target classes. They use Reflect.defineMetadata to tag classes with routing and injection hints.',
          bn: 'ডেকোরেটর হলো সাধারণ জাভাস্ক্রিপ্ট ফাংশন যা Reflect.defineMetadata দিয়ে ক্লাসের গায়ে রাউটিং ও ইনজেকশনের তথ্য মেটাডাটা হিসেবে সেঁটে দেয়।'
        }
      },
      {
        id: 'q-app-module-root-significance',
        kind: 'mcq',
        topic: 'app module root of dependency graph',
        question: {
          en: 'What role does the root AppModule play during the NestFactory bootstrap initialization?',
          bn: 'NestFactory বুটস্ট্র্যাপের সময় রুট AppModule কোন ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'It serves as the starting node for the entire application dependency graph, from which Nest discovers all imported feature modules, controllers, and providers',
            bn: 'এটি পুরো অ্যাপ্লিকেশনের ডিপেন্ডেন্সি গ্রাফের মূল কেন্দ্র হিসেবে কাজ করে, যেখান থেকে নেস্ট সমস্ত ফিচার মডিউল, কন্ট্রোলার ও প্রোভাইডার আবিষ্কার করে'
          },
          {
            en: 'It stores the user passwords in an encrypted SQLite file',
            bn: 'এটি ব্যবহারকারীর পাসওয়ার্ড একটি এনক্রিপ্টেড এসকিউলাইট ফাইলে জমা রাখে'
          },
          {
            en: 'It generates the HTML and CSS code for the frontend landing page',
            bn: 'এটি ফ্রন্টএন্ড ল্যান্ডিং পেজের এইচটিএমএল ও সিএসএস কোড তৈরি করে'
          },
          {
            en: 'It opens an SSH connection to GitHub to download repository updates',
            bn: 'এটি গিটহাবে এসএসএইচ সংযোগ তৈরি করে নতুন আপডেট ডাউনলোড করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Every NestJS application requires at least one root module to build the graph.',
          bn: 'গ্রাফ তৈরি করার জন্য প্রতিটি নেস্ট অ্যাপ্লিকেশনে অন্তত একটি রুট মডিউল থাকা আবশ্যক।'
        },
        explanation: {
          en: 'AppModule is the root of the dependency tree. Nest recursively traverses its imports array to build the complete runtime application graph.',
          bn: 'AppModule হলো ডিপেন্ডেন্সি ট্রির শিকড়। নেস্ট এর imports অ্যারে দিয়ে সমস্ত সাব-মডিউল ঘুরে পুরো অ্যাপ্লিকেশনের আর্কিটেকচার দাঁড় করায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'controllers-on-the-line',
    title: {
      en: 'Controllers & Routing — Decorators, Parameter Extractors & Versioning',
      bn: 'কন্ট্রোলার ও রাউটিং — ডেকোরেটর, প্যারামিটার এক্সট্রাক্টর ও ভার্সনিং'
    }
  }
};
