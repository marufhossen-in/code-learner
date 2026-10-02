import type { Lesson } from '../../../lib/types';

export const TheFranchiseOpensLesson: Lesson = {
  slug: 'the-franchise-opens',
  tech: 'nestjs',
  title: {
    en: 'Production Testing & Architecture — Supertest e2e, Mocking & Observability',
    bn: 'প্রোডাকশন টেস্টিং ও আর্কিটেকচার — সুপারটেস্ট e2e, মকিং ও অবজারভ্যাবিলিটি'
  },
  summary: {
    en: 'Production deployment of enterprise NestJS applications demands comprehensive automated testing, validated configurations, and high-availability health checks. In this capstone lesson, you will master isolated unit testing with Test.createTestingModule, provider mocking, portless e2e integration testing with Supertest, and Terminus Kubernetes health probes.',
    bn: 'এন্টারপ্রাইজ নেস্ট.জেএস অ্যাপ্লিকেশন প্রোডাকশনে সফলভাবে চালানোর জন্য সম্পূর্ণ অটোমেটেড টেস্টিং, কনফিগারেশন ভ্যালিডেশন এবং উচ্চ-কার্যক্ষম হেলথ চেক নিশ্চিত করা আবশ্যক। এই সমাপ্তি পাঠে আপনি Test.createTestingModule দিয়ে ইউনিট টেস্ট, প্রোভাইডার মকিং, সুপারটেস্ট দিয়ে e2e ইন্টিগ্রেশন টেস্ট এবং টার্মিনাস কুবারনেটিস হেলথ চেক গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'testing-architecture-overview',
      text: {
        en: 'The Enterprise Testing Pyramid and Quality Perimeter',
        bn: 'এন্টারপ্রাইজ টেস্টিং পিরামিড ও মান নিয়ন্ত্রণ কাঠামো'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you take an enterprise NestJS system into production, verifying code correctness cannot rely on manual API client testing. Nest provides the @nestjs/testing package to construct simulated IoC dependency containers for rapid unit testing and automated end-to-end (e2e) integration verification.',
        bn: 'যখন আপনি একটি এন্টারপ্রাইজ নেস্ট.জেএস সিস্টেম প্রোডাকশনে নিয়ে যান, তখন ম্যানুয়ালি ক্লিক করে কোড যাচাই করা যায় না। নেস্ট @nestjs/testing প্যাকেজের মাধ্যমে সিমুলেটেড IoC কন্টেইনার তৈরি করার সুবিধা দেয় যা দ্রুত ইউনিট টেস্ট এবং সুপারটেস্ট দিয়ে সম্পূর্ণ e2e ইন্টিগ্রেশন টেস্ট নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Test.createTestingModule()',
          def: {
            en: 'Static test harness factory that instantiates an isolated NestJS IoC container for unit and integration testing.',
            bn: 'টেস্টিং ফ্যাক্টরি মেথড যা ইউনিট ও ইন্টিগ্রেশন টেস্টের জন্য একটি বিচ্ছিন্ন নেস্ট.জেএস IoC কন্টেইনার তৈরি করে।'
          }
        },
        {
          term: 'overrideProvider()',
          def: {
            en: 'Test harness method that replaces real production services (like databases or payment gateways) with test doubles and mocks.',
            bn: 'টেস্টিং মেথড যা আসল প্রোডাকশন সার্ভিসকে (যেমন ডাটাবেজ বা পেমেন্ট গেটওয়ে) হালকা টেস্ট ডাবল বা মক অবজেক্ট দিয়ে প্রতিস্থাপন করে।'
          }
        },
        {
          term: 'End-to-End (e2e) Testing',
          def: {
            en: 'Automated verification testing the complete application stack including guards, pipes, controllers, and exception filters.',
            bn: 'স্বয়ংক্রিয় টেস্টিং পদ্ধতি যা গার্ড, পাইপ, কন্ট্রোলার ও ফিল্টার সহ পুরো অ্যাপ্লিকেশনকে শুরু থেকে শেষ পর্যন্ত পরীক্ষা করে।'
          }
        },
        {
          term: 'Terminus Health Checks',
          def: {
            en: 'Official NestJS health probe package exposing /health endpoints for Kubernetes liveness and readiness monitoring.',
            bn: 'অফিসিয়াল নেস্ট.জেএস প্যাকেজ যা কুবারনেটিস লাইভনেস ও রেডিনেস পর্যবেক্ষণের জন্য /health এন্ডপয়েন্ট সরবরাহ করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'testing-pyramid-table',
      text: {
        en: 'NestJS Testing Layers Comparison Matrix',
        bn: 'নেস্ট.জেএস টেস্টিং স্তরসমূহের তুলনামূলক ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Testing Layer', bn: 'টেস্টিং স্তর' },
        { en: 'Target Scope', bn: 'টার্গেট পরিধি' },
        { en: 'Execution Speed & Network', bn: 'গতি ও নেটওয়ার্ক নির্ভরতা' }
      ],
      rows: [
        [
          { en: 'Unit Tests (*.spec.ts)', bn: 'ইউনিট টেস্ট (*.spec.ts)' },
          { en: 'Single isolated service or pure calculation function with all dependencies mocked', bn: 'সমস্ত ডিপেন্ডেন্সি মক করে একটিমাত্র সার্ভিস বা ব্যবসায়িক ফাংশন পরীক্ষা' },
          { en: 'Instantaneous (< 10ms per test), zero network or database required', bn: 'তাত্ক্ষণিক (< ১০ms), কোনো নেটওয়ার্ক বা ডাটাবেজ লাগে না' }
        ],
        [
          { en: 'Integration Tests', bn: 'ইন্টিগ্রেশন টেস্ট' },
          { en: 'Controller paired with its real Service and local in-memory SQLite database', bn: 'কন্ট্রোলারের সাথে আসল সার্ভিস ও ইন-মেমরি এসকিউলাইট ডাটাবেজের মেলবন্ধন' },
          { en: 'Fast (< 50ms per suite), verifies inter-provider wiring', bn: 'দ্রুত (< ৫০ms), প্রোভাইডারের মধ্যকার সংযোগ যাচাই করে' }
        ],
        [
          { en: 'End-to-End Tests (*.e2e-spec.ts)', bn: 'এন্ড-টু-এন্ড টেস্ট (*.e2e-spec.ts)' },
          { en: 'Full HTTP request flow through Pipes, Guards, Handlers, and Interceptors', bn: 'পাইপ, গার্ড, কন্ট্রোলার ও ইন্টারসেপ্টর সহ পূর্ণ এইচটিটিপি রিকোয়েস্ট প্রবাহ' },
          { en: 'Moderate (~150ms per flow), uses Supertest without binding network ports', bn: 'মাঝারি (~১৫০ms), পোর্ট না খুলেই সুপারটেস্ট দিয়ে চলে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'testing-module-code',
      text: {
        en: 'Unit Testing with Mocked Providers Simulation',
        bn: 'মক প্রোভাইডার সহ ইউনিট টেস্টিং সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of NestJS Test.createTestingModule and Mock Override
class UsersService {
  constructor(databaseClient) {
    this.db = databaseClient;
  }

  findUser(id) {
    const user = this.db.getById(id);
    if (!user) throw new Error('User not found');
    return { success: true, user: user };
  }
}

// 1. Mock repository double replacing production database
const mockDatabase = {
  getById: (id) => {
    if (id === 101) return { id: 101, username: 'test_architect', role: 'admin' };
    return null;
  }
};

// 2. Initializing service with injected test double
const service = new UsersService(mockDatabase);
const result = service.findUser(101);

console.log('Unit test user resolution status:', result.success);
// -> Unit test user resolution status: true
console.log('Mocked user ID returned:', result.user.id);
// -> Mocked user ID returned: 101
console.log('Mocked user role verified:', result.user.role);
// -> Mocked user role verified: admin`,
      caption: {
        en: 'Service unit test verifying user 101 resolution with admin role',
        bn: 'সার্ভিস ইউনিট টেস্ট অ্যাডমিন রোল সহ ১০১ নম্বর ইউজার নিশ্চিত করছে'
      }
    },
    {
      type: 'heading',
      id: 'health-and-shutdown',
      text: {
        en: 'Production Observability and Graceful Shutdown Hooks',
        bn: 'প্রোডাকশন অবজারভ্যাবিলিটি ও গ্রেসফুল শাটডাউন হুক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Container orchestrators like Kubernetes require applications to report real-time health through liveness and readiness HTTP endpoints. NestJS provides Terminus to evaluate database connections, memory heap thresholds, and disk storage, while enableShutdownHooks guarantees connections drain before container termination.',
        bn: 'কুবারনেটিসের মতো কন্টেইনার ম্যানেজারদের জন্য অ্যাপ্লিকেশন লাইভনেস ও রেডিনেস এন্ডপয়েন্টে স্বাস্থ্যের অবস্থা জানানো প্রয়োজন। নেস্ট.জেএস টার্মিনাস প্যাকেজ দিয়ে ডাটাবেজ, মেমরি ও ডিস্কের অবস্থা পর্যবেক্ষণ করে এবং enableShutdownHooks দিয়ে কন্টেইনার বন্ধের আগে সমস্ত সক্রিয় সংযোগ নিরাপদে সমাপ্ত করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Mock Heavy Dependencies: In unit tests, replace database repositories with lightweight in-memory JavaScript objects.',
          bn: '১. ভারী নির্ভরতা মক করা: ইউনিট টেস্টে ডাটাবেজ ক্লায়েন্টের বদলে হালকা ইন-মেমরি জাভাস্ক্রিপ্ট অবজেক্ট ব্যবহার করুন।'
        },
        {
          en: '2. Portless e2e Testing: Pass app.getHttpServer() into Supertest to run full e2e test suites without port collision errors.',
          bn: '২. পোর্টলেস e2e টেস্ট: পোর্ট কনফ্লিক্ট এড়াতে app.getHttpServer() সরাসরি সুপারটেস্টে পাঠিয়ে টেস্ট চালান।'
        },
        {
          en: '3. Enable Shutdown Hooks: Call app.enableShutdownHooks() in main.ts so Nest listens to SIGTERM and gracefully closes database pools.',
          bn: '৩. শাটডাউন হুক চালু: main.ts ফাইলে app.enableShutdownHooks() দিন যাতে নেস্ট SIGTERM গ্রহণ করে ডাটাবেজ বন্ধ করতে পারে।'
        },
        {
          en: '4. Validate Environments with Joi: Validate process.env variables using Joi schema validation inside ConfigModule.forRoot().',
          bn: '৪. জয় দিয়ে কনফিগ যাচাই: ConfigModule-এ Joi স্কিমা দিয়ে নিশ্চিত করুন যে প্রয়োজনীয় সমস্ত এনভায়রনমেন্ট ভেরিয়েবল বিদ্যমান।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nest-tst-ex1',
      kind: 'mcq',
      topic: 'test createtestingmodule factory function',
      question: {
        en: 'Which static utility function from @nestjs/testing creates a mocked IoC container for unit and integration testing?',
        bn: '@nestjs/testing-এর কোন স্ট্যাটিক মেথডটি টেস্টিংয়ের জন্য একটি মক IoC কন্টেইনার তৈরি করে?'
      },
      options: [
        {
          en: 'Test.createTestingModule()',
          bn: 'Test.createTestingModule()'
        },
        {
          en: 'NestApp.createMockApp()',
          bn: 'NestApp.createMockApp()'
        },
        {
          en: 'Jest.createIoCModule()',
          bn: 'Jest.createIoCModule()'
        },
        {
          en: 'TestingModule.instantiate()',
          bn: 'TestingModule.instantiate()'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Test class exposes createTestingModule matching the @Module configuration signature.',
        bn: 'Test ক্লাস createTestingModule সরবরাহ করে যা @Module কনফিগারেশনের অনুরূপ।'
      },
      explanation: {
        en: 'Test.createTestingModule(metadata) compiles an isolated testing module where real dependencies can be selectively overridden with mocks.',
        bn: 'Test.createTestingModule(metadata) একটি পৃথক টেস্ট মডিউল কম্পাইল করে যেখানে আসল সার্ভিসকে মক দিয়ে বদলানো যায়।'
      }
    },
    {
      id: 'nest-tst-ex2',
      kind: 'mcq',
      topic: 'overrideprovider in e2e tests',
      question: {
        en: 'How do you swap a production database service with a test double inside a NestJS e2e testing module before compilation?',
        bn: 'কম্পাইলেশনের আগে নেস্ট.জেএস e2e টেস্ট মডিউলে আসল ডাটাবেজ সার্ভিসকে কীভাবে টেস্ট ডাবল দিয়ে প্রতিস্থাপন করবেন?'
      },
      options: [
        {
          en: 'moduleFixture.overrideProvider(DatabaseService).useValue(mockDbClient).compile()',
          bn: 'moduleFixture.overrideProvider(DatabaseService).useValue(mockDbClient).compile()'
        },
        {
          en: 'delete DatabaseService from node_modules',
          bn: 'node_modules থেকে DatabaseService মুছে ফেলে'
        },
        {
          en: 'process.env.DATABASE_OFFLINE = "true"',
          bn: 'process.env.DATABASE_OFFLINE = "true"'
        },
        {
          en: 'app.disableProvider("DatabaseService")',
          bn: 'app.disableProvider("DatabaseService")'
        }
      ],
      answer: 0,
      hint: {
        en: 'The testing module builder exposes an overrideProvider() chainable method.',
        bn: 'টেস্টিং মডিউল বিল্ডার একটি চেইনেবল overrideProvider() মেথড প্রদান করে।'
      },
      explanation: {
        en: 'overrideProvider(Token).useValue(mock) replaces the production provider registration before the testing module compiles.',
        bn: 'overrideProvider(Token).useValue(mock) কম্পাইলের আগেই আসল প্রোভাইডার সরিয়ে মক অবজেক্টটি বসিয়ে দেয়।'
      }
    },
    {
      id: 'nest-tst-ex3',
      kind: 'mcq',
      topic: 'terminus health check purpose',
      question: {
        en: 'What is the primary operational role of the @nestjs/terminus package in enterprise cloud deployments?',
        bn: 'এন্টারপ্রাইজ ক্লাউড ডেপ্লয়মেন্টে @nestjs/terminus প্যাকেজের প্রধান পরিচালন ভূমিকা কী?'
      },
      options: [
        {
          en: 'It exposes structured /health endpoints evaluating database connectivity, memory heap usage, and external microservice availability for Kubernetes probes',
          bn: 'এটি কুবারনেটিসের জন্য ডাটাবেজ সংযোগ, মেমরি ব্যবহার এবং বাহ্যিক মাইক্রোসার্ভিসের প্রাপ্যতা যাচাইকারী স্ট্রাকচার্ড /health এন্ডপয়েন্ট তৈরি করে'
        },
        {
          en: 'It encrypts hard drive storage sectors using military standards',
          bn: 'এটি হার্ডড্রাইভ স্টোরেজ সেক্টর এনক্রিপ্ট করে'
        },
        {
          en: 'It compresses HTTP response packets with Brotli compression',
          bn: 'এটি ব্রোটলি কম্প্রেশন দিয়ে এইচটিটিপি প্যাকেট সংকুচিত করে'
        },
        {
          en: 'It generates vector graphics icons for the frontend UI',
          bn: 'এটি ফ্রন্টএন্ডের জন্য ভেক্টর গ্রাফিক্স আইকন তৈরি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Terminus monitors critical application vitals to support automated Kubernetes pod restarts.',
        bn: 'টার্মিনাস অ্যাপ্লিকেশনের সার্বিক স্বাস্থ্য পর্যবেক্ষণ করে কুবারনেটিস পড পরিচালনা সহজ করে।'
      },
      explanation: {
        en: 'Terminus provides standardized health checks for databases, memory, and HTTP ping indicators, informing Kubernetes if a pod is healthy or needs replacement.',
        bn: 'টার্মিনাস ডাটাবেজ ও মেমরির স্বাস্থ্য পরীক্ষা করে কুবারনেটিসকে জানায় পডটি সুস্থ আছে নাকি রিস্টার্ট দেওয়া দরকার।'
      }
    },
    {
      id: 'nest-tst-ex4',
      kind: 'mcq',
      topic: 'enableshutdownhooks method functionality',
      question: {
        en: 'Why must app.enableShutdownHooks() be called inside main.ts when deploying NestJS services in Docker or Kubernetes?',
        bn: 'ডকার বা কুবারনেটিসে নেস্ট সার্ভিস চালালে কেন main.ts-এ app.enableShutdownHooks() কল করা আবশ্যক?'
      },
      options: [
        {
          en: 'It instructs NestJS to listen for system termination signals (SIGTERM/SIGINT) and invoke onModuleDestroy and beforeApplicationShutdown lifecycle hooks before exiting',
          bn: 'এটি নেস্টকে SIGTERM/SIGINT সিগন্যাল শোনার নির্দেশ দেয় এবং প্রস্থান করার আগে onModuleDestroy ও শাটডাউন লাইফসাইকেল হুকগুলো নিশ্চিতভাবে চালায়'
        },
        {
          en: 'It clears the browser history on all connected client phones',
          bn: 'এটি সমস্ত সংযুক্ত ক্লায়েন্ট ফোনের ব্রাউজার হিস্ট্রি মুছে দেয়'
        },
        {
          en: 'It resets the PostgreSQL administrator password to default',
          bn: 'এটি পোস্টগ্রেস ডাটাবেজের অ্যাডমিন পাসওয়ার্ড ডিফল্ট করে দেয়'
        },
        {
          en: 'It disables all TypeScript compiler warnings during runtime',
          bn: 'এটি রানটাইমে সমস্ত টাইপস্ক্রিপ্ট ওয়ার্নিং বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'By default, Node.js does not trigger NestJS shutdown hooks without enabling this listener.',
        bn: 'ডিফল্টভাবে এই মেথড কল না করলে নেস্ট নিজে থেকে সিস্টেম সিগন্যালে শাটডাউন হুক চালায় না।'
      },
      explanation: {
        en: 'By default, Nest does not hook into process SIGTERM. enableShutdownHooks() registers OS signal listeners so onModuleDestroy hooks can drain database connection pools.',
        bn: 'enableShutdownHooks() ওএস সিগন্যাল শোনে এবং কন্টেইনার বন্ধের সংকেত পেলে ডাটাবেজ পুল ড্রেইন করে নিরাপদ প্রস্থান নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'the-franchise-opens-quiz',
    title: {
      en: 'Production Testing & Architecture Quiz',
      bn: 'প্রোডাকশন টেস্টিং ও আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-e2e-global-pipes-replication',
        kind: 'mcq',
        topic: 'replicating global pipes in e2e test suite',
        question: {
          en: 'Why do automated e2e integration tests often pass unexpectedly on invalid data if global ValidationPipe is only registered in main.ts?',
          bn: 'যদি গ্লোবাল ValidationPipe কেবল main.ts ফাইলে নিবন্ধিত থাকে, তবে ভুল ডাটায় e2e ইন্টিগ্রেশন টেস্ট কেন অপ্রত্যাশিতভাবে পাস করে যায়?'
        },
        options: [
          {
            en: 'main.ts is NOT executed during e2e tests; the test creates the app instance independently via createNestApplication() and must manually attach app.useGlobalPipes(new ValidationPipe())',
            bn: 'e2e টেস্ট চলার সময় main.ts কার্যকর হয় না; টেস্ট নিজে createNestApplication() দিয়ে অ্যাপ তৈরি করে, তাই টেস্টেও ম্যানুয়ালি গ্লোবাল পাইপ যুক্ত করতে হয়'
          },
          {
            en: 'Supertest deletes all ValidationPipe instances from the project workspace',
            bn: 'সুপারটেস্ট প্রজেক্টের সমস্ত ValidationPipe মুছে ফেলে'
          },
          {
            en: 'TypeScript turns off validation when test files end in .spec.ts',
            bn: 'ফাইলের নাম .spec.ts হলে টাইপস্ক্রিপ্ট ভ্যালিডেশন বন্ধ করে দেয়'
          },
          {
            en: 'Node.js only validates inputs if the server is connected to the internet',
            bn: 'সার্ভার ইন্টারনেটে যুক্ত থাকলেই কেবল নোড.জেএস ইনপুট যাচাই করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The e2e test suite bootstraps a separate application instance from AppModule, not main.ts.',
          bn: 'e2e টেস্ট main.ts না চালিয়ে সরাসরি AppModule দিয়ে নতুন অ্যাপ অবজেক্ট তৈরি করে।'
        },
        explanation: {
          en: 'e2e tests instantiate the app via createNestApplication(). If global pipes or filters are configured in main.ts rather than APP_PIPE, the test app lacks validation unless manually attached.',
          bn: 'e2e টেস্ট main.ts চালায় না। তাই গ্লোবাল পাইপ APP_PIPE হিসেবে মডিউলে না থাকলে টেস্ট অ্যাপে ভ্যালিডেশন সক্রিয় থাকে না এবং ভুল ডাটাও পাস হয়ে যায়।'
        }
      },
      {
        id: 'q-config-validation-joi',
        kind: 'mcq',
        topic: 'environment variable validation with joi',
        question: {
          en: 'Why is defining a strict Joi validation schema inside ConfigModule.forRoot() considered an enterprise architectural best practice?',
          bn: 'ConfigModule.forRoot()-এর ভেতর কঠোর Joi ভ্যালিডেশন স্কিমা নির্ধারণ করা কেন একটি এন্টারপ্রাইজ মানদণ্ড?'
        },
        options: [
          {
            en: 'It causes the application to fail fast during bootstrap if mandatory environment variables (DATABASE_URL, JWT_SECRET) are missing, preventing runtime production crashes later',
            bn: 'প্রয়োজনীয় এনভায়রনমেন্ট ভেরিয়েবল (DATABASE_URL, JWT_SECRET) না থাকলে এটি বুটস্ট্র্যাপের শুরুতেই অ্যাপ বন্ধ করে দেয়, ফলে পরবর্তীতে প্রোডাকশনে অদ্ভুত ক্র্যাশ ঘটে না'
          },
          {
            en: 'It allows passwords to be stored in plain text safely on GitHub',
            bn: 'এটি গিটহাবে পাসওয়ার্ড উন্মুক্তভাবে নিরাপদে রাখার সুবিধা দেয়'
          },
          {
            en: 'It speeds up database write queries by exactly 25 percent',
            bn: 'এটি ডাটাবেজ রাইট কুয়েরি ঠিক ২৫ শতাংশ দ্রুত করে'
          },
          {
            en: 'Joi is the official database query compiler for MongoDB',
            bn: 'জয় হলো মঙ্গোডিবির অফিশিয়াল ডাটাবেজ কুয়েরি কম্পাইলার'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fail-fast design guarantees the application never starts in a corrupted or half-configured state.',
          bn: 'ফেইল-ফাস্ট ডিজাইন নিশ্চিত করে যে কোনো গুরুত্বপূর্ণ কনফিগ ছাড়া অ্যাপ্লিকেশন কখনোই চালু হবে না।'
        },
        explanation: {
          en: 'Validating process.env at boot time guarantees that misconfigured deployments fail immediately with actionable errors rather than failing silently on user transactions.',
          bn: 'চালু হওয়ার সময়ই কনফিগ যাচাই করলে ভুল কনফিগারেশনের কারণে অ্যাপ আগেই থেমে যায় এবং ঠিক কোন ভেরিয়েবলটি নেই তা স্পষ্টভাবে জানিয়ে দেয়।'
        }
      },
      {
        id: 'q-supertest-portless-advantage',
        kind: 'mcq',
        topic: 'portless e2e testing benefits',
        question: {
          en: 'Why is running e2e tests via request(app.getHttpServer()) superior to starting a live server on port 3000 during CI/CD test runs?',
          bn: 'সিআই/সিডি পাইপলাইনে পোর্ট ৩০০০-এ লাইভ সার্ভার চালানোর চেয়ে request(app.getHttpServer()) দিয়ে টেস্ট চালানো কেন শ্রেষ্ঠ?'
        },
        options: [
          {
            en: 'It completely eliminates EADDRINUSE port collisions when parallel test workers execute simultaneously and executes 10x faster by bypassing OS socket negotiation',
            bn: 'প্যারালাল টেস্ট রানার একসাথে চললেও এটি পোর্ট ব্যস্ততার সংঘাত দূর করে এবং ওএস সকেট ওভারহেড এড়িয়ে ১০ গুণ দ্রুত টেস্ট সম্পন্ন করে'
          },
          {
            en: 'It reduces the total number of lines in TypeScript source files',
            bn: 'এটি টাইপস্ক্রিপ্ট সোর্স ফাইলের লাইনের সংখ্যা কমিয়ে দেয়'
          },
          {
            en: 'Portless testing allows developers to skip writing assertions',
            bn: 'পোর্টলেস টেস্টিং ডেভেলপারদের কোনো অ্যাসারশন না লেখার সুযোগ দেয়'
          },
          {
            en: 'Supertest is only capable of communicating with Apache servers',
            bn: 'সুপারটেস্ট কেবলমাত্র অ্যাপাচি সার্ভারের সাথে যোগাযোগ করতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Passing the in-memory HTTP server directly bypasses network port binding.',
          bn: 'মেমরিতে থাকা সার্ভারটি ব্যবহার করলে কোনো নেটওয়ার্ক পোর্ট খোলার দরকার হয় না।'
        },
        explanation: {
          en: 'Supertest communicates directly with the in-memory http.Server instance. This prevents port conflicts in CI runners and speeds up suite execution dramatically.',
          bn: 'সুপারটেস্ট সরাসরি মেমরির এইচটিটিপি সার্ভারের সাথে কথা বলে, ফলে কোনো পোর্ট কনফ্লিক্ট হয় না এবং টেস্ট কয়েকগুণ দ্রুত শেষ হয়।'
        }
      },
      {
        id: 'q-unit-test-isolation-principle',
        kind: 'mcq',
        topic: 'pure unit test isolation principle',
        question: {
          en: 'Why should unit tests of a NestJS Service NEVER establish real network connections to production databases or external third-party APIs?',
          bn: 'নেস্ট.জেএস সার্ভিসের ইউনিট টেস্টে কেন কখনোই আসল ডাটাবেজ বা থার্ড-পার্টি এপিআই-তে নেটওয়ার্ক সংযোগ করা উচিত নয়?'
        },
        options: [
          {
            en: 'Real connections make tests slow, fragile, dependent on network availability, and risk modifying or corrupting real production data',
            bn: 'আসল সংযোগ টেস্টকে ধীর ও ভঙ্গুর করে, ইন্টারনেটের ওপর নির্ভরশীল করে এবং আসল ডাটা নষ্ট বা বিকৃত করার ঝুঁকি তৈরি করে'
          },
          {
            en: 'Node.js disables TCP sockets whenever test runners execute',
            bn: 'টেস্ট রানার চলার সময় নোড.জেএস টিসিপি সকেট বন্ধ করে দেয়'
          },
          {
            en: 'PostgreSQL refuses connections originating from .spec.ts files',
            bn: 'পোস্টগ্রেস .spec.ts ফাইল থেকে আসা সংযোগ সরাসরি প্রত্যাখ্যান করে'
          },
          {
            en: 'Unit tests run inside the web browser client, not on the server',
            bn: 'ইউনিট টেস্ট ওয়েব ব্রাউজারে চলে, সার্ভারে নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unit tests must be fast, deterministic, and isolated from external systems.',
          bn: 'ইউনিট টেস্টকে অতি দ্রুত, নির্ভরযোগ্য এবং বাইরের সিস্টেম থেকে সম্পূর্ণ বিচ্ছিন্ন হতে হয়।'
        },
        explanation: {
          en: 'Unit tests must test single units of logic in complete isolation. Network latency or external outages cause flaky test failures. Dependencies must be mocked.',
          bn: 'ইউনিট টেস্টকে সম্পূর্ণ স্বাধীনভাবে কেবল নির্দিষ্ট লজিক পরীক্ষা করতে হয়। ডাটাবেজ বা নেটওয়ার্ক সমস্যা যেন টেস্ট ব্যর্থ না করে সেজন্য মক ব্যবহার করা আবশ্যক।'
        }
      }
    ]
  }
};
