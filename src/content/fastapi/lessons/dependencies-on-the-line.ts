import type { Lesson } from '../../../lib/types';

export const DependenciesOnTheLineLesson: Lesson = {
  slug: 'dependencies-on-the-line',
  tech: 'fastapi',
  title: {
    en: 'Dependency Injection — Depends(), Sub-dependencies & Yield Cleanup',
    bn: 'ডিপেন্ডেন্সি ইনজেকশন — Depends(), সাব-ডিপেন্ডেন্সি ও Yield টিয়ারডাউন'
  },
  summary: {
    en: 'FastAPI features a hierarchical Dependency Injection system built on Depends(). In this lesson, you will master functional and class-based dependencies, sub-dependency trees, yield dependencies for guaranteed database session cleanup, router-level global guards, and dependency overrides for automated testing.',
    bn: 'FastAPI-তে রয়েছে Depends() চালিত একটি শক্তিশালী হায়ারার্কিকাল ডিপেন্ডেন্সি ইনজেকশন সিস্টেম। এই পাঠে আপনি ফাংশন ও ক্লাস ভিত্তিক ডিপেন্ডেন্সি, সাব-ডিপেন্ডেন্সি ট্রি, ডাটাবেজ সেশন টিয়ারডাউনের জন্য yield ডিপেন্ডেন্সি, রাউটার-লেভেল সিকিউরিটি গার্ড এবং টেস্টিংয়ের জন্য ডিপেন্ডেন্সি ওভাররাইড গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'dependency-injection-architecture',
      text: {
        en: 'The FastAPI Dependency Injection Architecture',
        bn: 'FastAPI ডিপেন্ডেন্সি ইনজেকশন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When building enterprise web APIs, different routes frequently share business concerns like database sessions, authentication checks, and pagination rules. FastAPI provides a native Dependency Injection container: route signatures declare callable dependencies with Depends(), and the framework resolves, executes, caches, and injects results automatically.',
        bn: 'এন্টারপ্রাইজ এপিআই তৈরির সময় বিভিন্ন রুটে ডাটাবেজ সেশন, অথেনটিকেশন ও পেজিনেশনের মতো একই কাজের পুনরাবৃত্তি হয়। FastAPI একটি শক্তিশালী বিল্ট-ইন ডিপেন্ডেন্সি ইনজেকশন কন্টেইনার সরবরাহ করে: ভিউ ফাংশনের সিগনেচারে Depends() দিয়ে প্রয়োজনীয় ডিপেন্ডেন্সি ঘোষণা করলেই ফ্রেমওয়ার্ক নিজে থেকে সেগুলো সমাধান, ক্যাশ এবং ইনজেক্ট করে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Depends()',
          def: {
            en: 'The FastAPI marker parameter declaring that an argument is a callable dependency to be resolved before the route handler executes.',
            bn: 'একটি FastAPI মার্কার যা নির্দেশ করে যে প্যারামিটারটি একটি কলযোগ্য ডিপেন্ডেন্সি এবং ভিউ চলার আগেই এর সমাধান করতে হবে।'
          }
        },
        {
          term: 'Sub-dependency Tree',
          def: {
            en: 'The hierarchical dependency graph where one dependency function declares other dependencies, resolved bottom-up by the framework.',
            bn: 'স্তরভিত্তিক ডিপেন্ডেন্সি কাঠামো যেখানে একটি ডিপেন্ডেন্সি ফাংশন অন্য ডিপেন্ডেন্সির ওপর নির্ভর করতে পারে এবং ফ্রেমওয়ার্ক নিচ থেকে উপরে তা সমাধান করে।'
          }
        },
        {
          term: 'Yield Dependency (Lifecycle)',
          def: {
            en: 'A dependency using the Python yield statement to run setup logic before the request and cleanup code after the response completes.',
            bn: 'একটি বিশেষ ডিপেন্ডেন্সি যা পাইথন yield ব্যবহার করে রিকোয়েস্টের শুরুতে সেটআপ এবং রেসপন্স শেষের পর নিশ্চিত টিয়ারডাউন লজিক চালায়।'
          }
        },
        {
          term: 'dependency_overrides',
          def: {
            en: 'A dictionary on the FastAPI application instance allowing test suites to substitute production dependencies with test fixtures and mocks.',
            bn: 'FastAPI অ্যাপের একটি ডিকশনারি যা স্বয়ংক্রিয় পরীক্ষার সময় আসল ডিপেন্ডেন্সিকে টেস্ট মক বা নকল ফিক্সচার দিয়ে প্রতিস্থাপন করতে দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'dependency-styles-matrix',
      text: {
        en: 'FastAPI Dependency Styles and Use-Cases Matrix',
        bn: 'FastAPI ডিপেন্ডেন্সির ধরন ও ব্যবহার ক্ষেত্র ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Dependency Pattern', bn: 'ডিপেন্ডেন্সি প্যাটার্ন' },
        { en: 'Signature Syntax', bn: 'সিনট্যাক্স' },
        { en: 'Typical Production Use Case', bn: 'প্রোডাকশনে সাধারণ ব্যবহার' }
      ],
      rows: [
        [
          { en: 'Function-based Dependency', bn: 'ফাংশন-ভিত্তিক ডিপেন্ডেন্সি' },
          { en: 'async def get_token(header: str = Header()): ...', bn: 'async def get_token(header: str = Header()): ...' },
          { en: 'API token extraction, request authorization, and query parameter extraction', bn: 'এপিআই টোকেন বের করা, রিকোয়েস্ট অথরাইজেশন ও কোয়েরি প্যারামিটার রিডিং' }
        ],
        [
          { en: 'Class-based Dependency', bn: 'ক্লাস-ভিত্তিক ডিপেন্ডেন্সি' },
          { en: 'commons: CommonParams = Depends(CommonParams)', bn: 'commons: CommonParams = Depends(CommonParams)' },
          { en: 'Complex shared query pagination, sorting filters, and search parameter objects', bn: 'জটিল পেজিনেশন, ফিল্টারিং ও সার্চ প্যারামিটারের অবজেক্ট তৈরি' }
        ],
        [
          { en: 'Yield Teardown Dependency', bn: 'Yield টিয়ারডাউন ডিপেন্ডেন্সি' },
          { en: 'def get_db(): db = Session(); try: yield db finally: db.close()', bn: 'def get_db(): db = Session(); try: yield db finally: db.close()' },
          { en: 'Relational database sessions, Redis client handles, and open file streams', bn: 'ডাটাবেজ সেশন পরিচালনা, রেডিস সংযোগ এবং ওপেন ফাইল স্ট্রিম হ্যান্ডলিং' }
        ],
        [
          { en: 'Router/Global Dependency', bn: 'রাউটার/গ্লোবাল ডিপেন্ডেন্সি' },
          { en: 'router = APIRouter(dependencies=[Depends(verify_key)])', bn: 'router = APIRouter(dependencies=[Depends(verify_key)])' },
          { en: 'Enforcing authentication guards across an entire sub-domain or API version', bn: 'পুরো সাব-ডোমেন বা এপিআই ভার্সনের ওপর একযোগে নিরাপত্তা যাচাই কার্যকর করা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'dependency-execution-code',
      text: {
        en: 'Working Sub-Dependency Resolution and Yield Cleanup Simulation',
        bn: 'কার্যকরী সাব-ডিপেন্ডেন্সি সমাধান ও Yield টিয়ারডাউন সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of FastAPI Hierarchical Dependency Graph and Yield Teardown
class MockDependencyContainer {
  constructor() {
    this.callCount = 0;
    this.isSessionClosed = false;
  }

  // 1. Yield dependency simulating get_db()
  async *getDbSession() {
    this.callCount += 1;
    const session = { id: 101, queryCount: 0 };
    try {
      yield session;
    } finally {
      // Guaranteed cleanup after route handler finishes
      this.isSessionClosed = true;
    }
  }

  // 2. Sub-dependency using get_db to load current user
  async getCurrentUser(session) {
    session.queryCount += 1;
    return { id: 42, username: 'alex', role: 'admin' };
  }
}

const container = new MockDependencyContainer();
const sessionGen = container.getDbSession();
const sessionResult = (await sessionGen.next()).value;
const currentUser = await container.getCurrentUser(sessionResult);

// Simulating route handler execution
const routePayload = { user: currentUser.username, queryCount: sessionResult.queryCount };

// Triggering teardown (code after yield)
await sessionGen.next();

console.log('Database session identifier:', sessionResult.id);
// -> Database session identifier: 101
console.log('Executed queries on session:', routePayload.queryCount);
// -> Executed queries on session: 1
console.log('Database session closed cleanly on teardown:', container.isSessionClosed);
// -> Database session closed cleanly on teardown: true`,
      caption: {
        en: 'Resolving session 101 with 1 query and executing post-yield cleanup to true',
        bn: '১০১ নম্বর সেশনে ১টি কোয়েরি সম্পন্ন এবং yield-পরবর্তী টিয়ারডাউনে ট্রু প্রাপ্তি'
      }
    },
    {
      type: 'heading',
      id: 'testing-overrides-and-caching',
      text: {
        en: 'Dependency Caching and Testing Overrides',
        bn: 'ডিপেন্ডেন্সি ক্যাশিং ও টেস্টিং ওভাররাইড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Within a single incoming HTTP request, FastAPI caches dependency results by default (use_cache=True). If three different sub-dependencies all require get_db(), the database session function executes once, and all three consumers receive the exact same instance. In unit tests, setting app.dependency_overrides[get_db] = test_db replaces the real database with an in-memory mock seamlessly.',
        bn: 'একক এইচটিটিপি রিকোয়েস্টের ভেতর FastAPI ডিফল্টভাবে ডিপেন্ডেন্সির ফলাফল ক্যাশ করে রাখে (use_cache=True)। যদি তিনটি আলাদা সাব-ডিপেন্ডেন্সিতে get_db() প্রয়োজন হয়, তবে ডাটাবেজ সেশন ফাংশনটি কেবল একবারই রান হয় এবং তিনটি জায়গাতেই একই সেশন অবজেক্ট পৌঁছে দেওয়া হয়। আর ইউনিট টেস্টের সময় app.dependency_overrides[get_db] = test_db লিখে আসল ডাটাবেজের বদলে সহজে মক ডাটাবেজ যুক্ত করা যায়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Yield for Safe Cleanup: Always implement database session and connection pool dependencies with yield and finally blocks.',
          bn: '১. নিরাপদে টিয়ারডাউনে yield: ডাটাবেজ সেশন তৈরিতে সর্বদা yield এবং finally ব্লক ব্যবহার করুন।'
        },
        {
          en: '2. Rely on Default Caching: Keep use_cache=True so identical dependencies are evaluated only once per incoming HTTP request.',
          bn: '২. ডিফল্ট ক্যাশিং কার্যকর রাখুন: use_cache=True বজায় রাখুন যাতে একটি রিকোয়েস্টে একই ডিপেন্ডেন্সি একাধিকবার না চলে।'
        },
        {
          en: '3. Clean Up Test Overrides: In pytest fixtures, always reset app.dependency_overrides.clear() after test execution completes.',
          bn: '৩. টেস্ট শেষে ওভাররাইড মুছুন: টেস্ট শেষ হওয়া মাত্রই app.dependency_overrides.clear() কল করে ওভাররাইড পরিষ্কার করুন।'
        },
        {
          en: '4. Router-Level Guards: Add security dependencies to APIRouter(dependencies=[...]) rather than repeating them on every route function.',
          bn: '৪. রাউটার লেভেলে গার্ড: প্রতিটি রুটে বারবার ডেকোরেটর না লিখে সরাসরি APIRouter(dependencies=[...])-এ নিরাপত্তা চেক যুক্ত করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fa-dep-ex1',
      kind: 'mcq',
      topic: 'yield dependency lifecycle guarantee',
      question: {
        en: 'What occurs to the code placed after "yield" inside a FastAPI dependency function if the route handler raises an unhandled exception?',
        bn: 'যদি ভিউ ফাংশনে কোনো অপ্রত্যাশিত এরর ঘটে, তবে FastAPI ডিপেন্ডেন্সির "yield"-এর পরের কোডের কী পরিণতি হয়?'
      },
      options: [
        {
          en: 'The code after yield (e.g. in a finally block) still executes reliably, guaranteeing that database connections, sockets, and file handles are safely closed',
          bn: 'yield-এর পরের কোড (যেমন finally ব্লকে থাকা অংশ) নিশ্চিতভাবে চলে, যার ফলে ডাটাবেজ কানেকশন বা ফাইল নিরাপদে বন্ধ হওয়া নিশ্চিত হয়'
        },
        {
          en: 'The cleanup code is skipped, permanently leaking the database connection in memory',
          bn: 'টিয়ারডাউন কোড বাদ পড়ে এবং মেমরিতে ডাটাবেজ সংযোগ চিরতরে আটকে থাকে'
        },
        {
          en: 'The server shuts down immediately without returning an HTTP response',
          bn: 'এইচটিটিপি রেসপন্স না দিয়েই ওয়েব সার্ভার তৎক্ষণাৎ বন্ধ হয়ে যায়'
        },
        {
          en: 'The exception is converted into an empty HTML document',
          bn: 'এক্সেপশনটি একটি খালি এইচটিএমএল ডকুমেন্টে রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Yield dependencies mimic Python context managers with guaranteed cleanup in finally blocks.',
        bn: 'Yield ডিপেন্ডেন্সি পাইথন কনটেক্সট ম্যানেজারের মতো কাজ করে এবং finally ব্লকের কোড চালানো নিশ্চিত করে।'
      },
      explanation: {
        en: 'FastAPI wraps yield dependencies in an exception-handling context. The teardown code after yield always runs, preventing resource and connection leaks.',
        bn: 'FastAPI এক্সেপশন হ্যান্ডলিংয়ের মাধ্যমে yield ডিপেন্ডেন্সি পরিচালনা করে। কোনো এরর আসলেও yield-এর পরের টিয়ারডাউন কোড অবশ্যই রান হয়।'
      }
    },
    {
      id: 'fa-dep-ex2',
      kind: 'mcq',
      topic: 'dependency caching behavior in a single request',
      question: {
        en: 'By default, how many times will a dependency function "get_current_user()" be executed if it is required by 3 separate sub-dependencies in the same HTTP request?',
        bn: 'একই এইচটিটিপি রিকোয়েস্টে ৩টি পৃথক সাব-ডিপেন্ডেন্সিতে "get_current_user()" প্রয়োজন হলে ডিফল্টভাবে এটি কতবার কার্যকর হবে?'
      },
      options: [
        {
          en: 'Exactly 1 time: FastAPI caches the resolved value for the duration of the request because use_cache=True by default',
          bn: 'ঠিক ১ বার: use_cache=True ডিফল্ট থাকায় FastAPI রিকোয়েস্ট চলাকালীন প্রাপ্ত মান ক্যাশ করে রাখে'
        },
        {
          en: '3 times: once for each sub-dependency that declared it',
          bn: '৩ বার: প্রতিটি সাব-ডিপেন্ডেন্সির জন্য আলাদা আলাদা একবার'
        },
        {
          en: '0 times: dependencies are resolved before server boot and never during requests',
          bn: '০ বার: সার্ভার চালুর সময়ই ডিপেন্ডেন্সি সমাধান হয়, রিকোয়েস্টে নয়'
        },
        {
          en: 'It runs in an infinite loop until aborted by the operating system',
          bn: 'অপারেটিং সিস্টেম থামানোর আগ পর্যন্ত এটি লুপে চলতেই থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'FastAPI caches dependency results within the scope of a single request by default.',
        bn: 'FastAPI একটি রিকোয়েস্টের ভেতর ডিপেন্ডেন্সির সমাধানকৃত মান নিজে থেকেই ক্যাশ করে রাখে।'
      },
      explanation: {
        en: 'With use_cache=True (the default), FastAPI evaluates the dependency once and shares the cached return value across all sub-dependencies in that request.',
        bn: 'use_cache=True থাকায় FastAPI একবারই ডিপেন্ডেন্সি ফাংশন চালায় এবং সেই মানটি বাকি সব সাব-ডিপেন্ডেন্সিতে শেয়ার করে সময় বাঁচায়।'
      }
    },
    {
      id: 'fa-dep-ex3',
      kind: 'mcq',
      topic: 'testing with app.dependency_overrides in pytest',
      question: {
        en: 'How do you replace a real production database dependency "get_db" with a mock database function "override_get_db" during automated testing?',
        bn: 'স্বয়ংক্রিয় পরীক্ষার সময় আসল ডাটাবেজ ডিপেন্ডেন্সি "get_db"-কে নকল ফাংশন "override_get_db" দিয়ে কীভাবে প্রতিস্থাপন করবেন?'
      },
      options: [
        {
          en: 'app.dependency_overrides[get_db] = override_get_db',
          bn: 'app.dependency_overrides[get_db] = override_get_db'
        },
        {
          en: 'app.replace_function("get_db", override_get_db)',
          bn: 'app.replace_function("get_db", override_get_db)'
        },
        {
          en: 'get_db = override_get_db in the Linux shell terminal',
          bn: 'লিনাক্স শেল টার্মিনালে get_db = override_get_db লিখে'
        },
        {
          en: 'Delete the get_db function from source code before testing',
          bn: 'পরীক্ষা শুরুর আগে মূল কোড থেকে get_db ফাংশনটি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'FastAPI provides the app.dependency_overrides dictionary specifically for testing.',
        bn: 'FastAPI-তে পরীক্ষার সুবিধার জন্য app.dependency_overrides ডিকশনারি তৈরি করা হয়েছে।'
      },
      explanation: {
        en: 'Assigning to app.dependency_overrides[original_dependency] tells FastAPI to execute the replacement fixture instead of the original production function.',
        bn: 'app.dependency_overrides[get_db]-এ মক ফাংশন বসালে FastAPI আসল কোডের বদলে টেস্টের সময় মক ফাংশন কার্যকর করে।'
      }
    },
    {
      id: 'fa-dep-ex4',
      kind: 'mcq',
      topic: 'class as dependency in fastapi',
      question: {
        en: 'What is the syntax shortcut for declaring a class-based dependency "CommonParams" when the variable name matches the class type?',
        bn: 'চলকের ধরন ও ক্লাসের নাম একই হলে ক্লাস-ভিত্তিক ডিপেন্ডেন্সি "CommonParams" ঘোষণার সংক্ষিপ্ত সিনট্যাক্স কোনটি?'
      },
      options: [
        {
          en: 'commons: CommonParams = Depends() (omitting the class inside Depends)',
          bn: 'commons: CommonParams = Depends() (Depends-এর ভেতর ক্লাসের নাম উল্লেখ না করে)'
        },
        {
          en: 'commons = new CommonParams()',
          bn: 'commons = new CommonParams()'
        },
        {
          en: 'commons: Class = AutoInject()',
          bn: 'commons: Class = AutoInject()'
        },
        {
          en: 'commons = import_class("CommonParams")',
          bn: 'commons = import_class("CommonParams")'
        }
      ],
      answer: 0,
      hint: {
        en: 'If Depends() has no arguments, FastAPI inspects the type annotation of the parameter.',
        bn: 'Depends()-এর ভেতর কিছু না দিলে FastAPI প্যারামিটারের টাইপ নোটেশন দেখে ক্লাসটি চিনে নেয়।'
      },
      explanation: {
        en: 'When Depends() is invoked without parameters, FastAPI automatically infers the dependency callable from the parameter\'s type hint.',
        bn: 'Depends()-এ কোনো আর্গুমেন্ট না থাকলে FastAPI প্যারামিটারে থাকা টাইপ হিন্ট দেখেই সংশ্লিষ্ট ক্লাসটি কল করে নেয়।'
      }
    }
  ],
  quiz: {
    id: 'dependencies-on-the-line-quiz',
    title: {
      en: 'FastAPI Dependency Injection Quiz',
      bn: 'FastAPI ডিপেন্ডেন্সি ইনজেকশন কুইজ'
    },
    questions: [
      {
        id: 'q-router-dependencies-enforcement',
        kind: 'mcq',
        topic: 'applying dependencies to entire routers',
        question: {
          en: 'When you attach a dependency to an APIRouter via "router = APIRouter(dependencies=[Depends(verify_token)])", what is the scope of its enforcement?',
          bn: '"router = APIRouter(dependencies=[Depends(verify_token)])" দিয়ে রাউটারে ডিপেন্ডেন্সি বসালে এর প্রয়োগের পরিধি কতটুকু হয়?'
        },
        options: [
          {
            en: 'The dependency is automatically executed for every route operation registered under that router, without having to repeat Depends() on each individual view function',
            bn: 'ওই রাউটারের অধীনস্থ প্রতিটি রুটের জন্য ডিপেন্ডেন্সিটি স্বয়ংক্রিয়ভাবে কার্যকর হয়, ফলে প্রতিটি ভিউতে আলাদা করে Depends() লিখতে হয় না'
          },
          {
            en: 'It only executes for the first route declared in the file',
            bn: 'এটি কেবল ফাইলের প্রথম রুটের জন্যই কার্যকর হয়'
          },
          {
            en: 'It deletes all routes that return HTML responses',
            bn: 'এটি এইচটিএমএল রেসপন্স দেয় এমন সমস্ত রুট মুছে ফেলে'
          },
          {
            en: 'Router dependencies are ignored unless passed explicitly as URL query params',
            bn: 'কোয়েরি প্যারামিটার হিসেবে না পাঠালে রাউটার ডিপেন্ডেন্সি কাজ করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Router-level dependencies guard all path operations mounted on that router.',
          bn: 'রাউটার লেভেলের ডিপেন্ডেন্সি ওই রাউটারে যুক্ত সমস্ত পাথে একযোগে নিরাপত্তা নিশ্চিত করে।'
        },
        explanation: {
          en: 'Declaring dependencies on APIRouter applies them globally across all endpoints mounted on that router, which is ideal for API key or authentication gates.',
          bn: 'APIRouter-এ ডিপেন্ডেন্সি দিলে সেই রাউটারের সমস্ত এন্ডপয়েন্টে তা নিজে থেকেই কার্যকর হয়, যা অথেনটিকেশন চেকের জন্য অত্যন্ত কার্যকর।'
        }
      },
      {
        id: 'q-sub-dependency-topological-order',
        kind: 'mcq',
        topic: 'resolution order of sub-dependencies',
        question: {
          en: 'In what order does FastAPI resolve a sub-dependency chain where View -> depends on B -> depends on A?',
          bn: 'FastAPI কোন ক্রমানুসারে সাব-ডিপেন্ডেন্সি চেইন সমাধান করে যেখানে View -> B এর ওপর নির্ভরশীল -> B আবার A এর ওপর নির্ভরশীল?'
        },
        options: [
          {
            en: 'Bottom-up topological order: A executes first, its result is injected into B, B executes, and B\'s result is injected into View',
            bn: 'টপোলজিক্যাল ক্রম: প্রথমে A কার্যকর হয়, তার ফলাফল B-তে যায়, B কার্যকর হয় এবং B-এর ফলাফল মূল View-তে প্রবেশ করে'
          },
          {
            en: 'Top-down: View executes first, then B, and A executes last after the HTTP response is sent',
            bn: 'প্রথমে View চলে, তারপর B এবং সবার শেষে রেসপন্স পাঠানোর পর A চলে'
          },
          {
            en: 'Random order evaluated concurrently in separate threads',
            bn: 'আলাদা আলাদা থ্রেডে এলোমেলো ক্রমে একই সাথে চলে'
          },
          {
            en: 'FastAPI does not support nested sub-dependencies',
            bn: 'FastAPI নেস্টেড সাব-ডিপেন্ডেন্সি সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Dependencies are resolved in dependency graph order from leaves to root.',
          bn: 'ডিপেন্ডেন্সি ট্রি-র পাতা থেকে মূল পর্যন্ত ক্রমানুসারে সমাধান করা হয়।'
        },
        explanation: {
          en: 'FastAPI computes the Directed Acyclic Graph (DAG) of dependencies and executes them in topological order, ensuring every dependency receives its prerequisites.',
          bn: 'FastAPI একটি DAG তৈরি করে নিচ থেকে উপরে প্রতিটি নির্ভরতা সমাধান করে, ফলে কোনো ফাংশনই প্রয়োজনীয় ডাটা ছাড়া কল হয় না।'
        }
      },
      {
        id: 'q-security-dependency-http-exception',
        kind: 'mcq',
        topic: 'raising HTTPException inside a dependency to block access',
        question: {
          en: 'What occurs when an authentication dependency raises "HTTPException(status_code=401, detail=\'Invalid token\')"?',
          bn: 'কোনো অথেনটিকেশন ডিপেন্ডেন্সি যদি "HTTPException(status_code=401, detail=\'Invalid token\')" ছুড়ে দেয় তবে কী ঘটবে?'
        },
        options: [
          {
            en: 'Request processing is immediately halted: FastAPI short-circuits the pipeline and returns the 401 response to the client without ever invoking the route handler',
            bn: 'রিকোয়েস্ট প্রসেসিং তৎক্ষণাৎ বন্ধ হয়ে যায়: FastAPI ভিউ ফাংশন না চালিয়েই সরাসরি ক্লায়েন্টকে ৪০১ রেসপন্স ফেরত পাঠায়'
          },
          {
            en: 'The route handler executes normally with None as the dependency value',
            bn: 'ডিপেন্ডেন্সির মান None ধরে নিয়ে ভিউ ফাংশন স্বাভাবিকভাবেই চলে'
          },
          {
            en: 'The server crashes with a UncaughtException alert in the terminal',
            bn: 'টার্মিনালে UncaughtException দেখিয়ে ওয়েব সার্ভার বন্ধ হয়ে যায়'
          },
          {
            en: 'The client is prompted to solve a CAPTCHA puzzle',
            bn: 'ক্লায়েন্টকে ক্যাপচা সমাধানের জন্য প্রম্পট দেখানো হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Raising HTTPException inside any dependency aborts the request immediately.',
          bn: 'যেকোনো ডিপেন্ডেন্সিতে HTTPException তুললে সাথে সাথে রিকোয়েস্ট বাতিল হয়ে যায়।'
        },
        explanation: {
          en: 'Raising HTTPException inside a dependency acts as an authorization gate. It aborts further execution and cleanly returns the specified HTTP error response.',
          bn: 'ডিপেন্ডেন্সিতে HTTPException ছুড়লে কোড প্রবাহ সেখানেই থেমে যায় এবং ভিউতে না ঢুকে ক্লায়েন্টকে সরাসরি এরর মেসেজ পাঠানো হয়।'
        }
      },
      {
        id: 'q-security-scopes-dependency-role',
        kind: 'mcq',
        topic: 'SecurityScopes in OAuth2 permission dependencies',
        question: {
          en: 'What special role does FastAPI\'s "Security(dependency_fn, scopes=[\'read\', \'write\'])" play compared to standard "Depends()"?',
          bn: 'সাধারণ "Depends()"-এর তুলনায় FastAPI-এর "Security(dependency_fn, scopes=[\'read\', \'write\'])" কোন বিশেষ ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'It passes the required scopes into the dependency via a SecurityScopes argument and documents the required permission scopes directly in the OpenAPI Swagger UI security definitions',
            bn: 'এটি SecurityScopes আর্গুমেন্টের মাধ্যমে প্রয়োজনীয় স্কোপগুলো ডিপেন্ডেন্সিতে পাঠায় এবং Swagger UI-তে সংশ্লিষ্ট রুটের পারমিশন স্কোপগুলো নথিভুক্ত করে'
          },
          {
            en: 'It encrypts the entire HTTP payload with a dynamic one-time password',
            bn: 'এটি ওয়ান-টাইম পাসওয়ার্ড দিয়ে সম্পূর্ণ এইচটিটিপি পে-লোড এনক্রিপ্ট করে'
          },
          {
            en: 'It restricts endpoint execution to machines located on the same local area network',
            bn: 'এটি কেবল লোকাল নেটওয়ার্কে থাকা কম্পিউটারের জন্য রুট সীমাবদ্ধ রাখে'
          },
          {
            en: 'Security() is an alias for Depends() with zero differences',
            bn: 'Security() এবং Depends()-এর মাঝে কোনো তফাত নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Security() integrates permission scopes into both runtime checking and OpenAPI documentation.',
          bn: 'Security() রানটাইম পারমিশন চেক এবং OpenAPI ডকুমেন্টেশন উভয়ের সাথে স্কোপ যুক্ত করে।'
        },
        explanation: {
          en: 'FastAPI Security() extends Depends() by binding OAuth2 scopes. The dependency receives a SecurityScopes instance to verify permissions, and OpenAPI reflects the required scopes.',
          bn: 'Security() মূলত Depends()-এর উন্নত রূপ যা OAuth2 স্কোপ পরিচালনা করে এবং Swagger UI-তে কোন এন্ডপয়েন্টের কী পারমিশন দরকার তা দেখায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'async-in-the-kitchen',
    title: {
      en: 'Async, Concurrency & BackgroundTasks — Event Loops & WebSockets',
      bn: 'অ্যাসিঙ্ক, কনকারেন্সি ও BackgroundTasks — ইভেন্ট লুপ ও ওয়েবসকেট'
    }
  }
};
