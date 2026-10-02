import type { Lesson } from '../../../lib/types';

export const SentriesAtThePassLesson: Lesson = {
  slug: 'sentries-at-the-pass',
  tech: 'nestjs',
  title: {
    en: 'Guards & Authorization — CanActivate, ExecutionContext & Reflector',
    bn: 'গার্ড ও অথরাইজেশন — CanActivate, ExecutionContext ও Reflector'
  },
  summary: {
    en: 'Securing API endpoints requires fine-grained access control before controllers execute business logic. In this lesson, you will master the CanActivate guard interface, multi-protocol ExecutionContext inspection, custom metadata attachment with SetMetadata, and metadata extraction using Reflector for Role-Based Access Control.',
    bn: 'কন্ট্রোলারে ব্যবসায়িক লজিক কার্যকর হওয়ার আগেই এপিআই এন্ডপয়েন্টগুলোকে নিখুঁত অ্যাক্সেস কন্ট্রোল দিয়ে সুরক্ষিত করতে হয়। এই পাঠে আপনি CanActivate গার্ড ইন্টারফেস, মাল্টি-প্রোটোকল ExecutionContext পরিদর্শন, SetMetadata দিয়ে কাস্টম মেটাডাটা সংযুক্তি এবং Reflector দিয়ে রোল-বেসড অ্যাক্সেস কন্ট্রোল বাস্তবায়ন গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'guards-architecture-overview',
      text: {
        en: 'The Guard Authorization Architecture',
        bn: 'গার্ড অথরাইজেশন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build multi-tenant or role-restricted systems, endpoints must determine whether a caller has permission to proceed. In NestJS, Guards implement the CanActivate interface. They execute after all middleware but before any pipes, interceptors, or controllers, making them the ideal barrier for authentication and authorization.',
        bn: 'যখন আপনি বহু-ব্যবহারকারী বা রোল-ভিত্তিক সিস্টেম তৈরি করেন, তখন ইনকামিং রিকোয়েস্টের ভেতরে প্রবেশের অনুমতি আছে কিনা তা যাচাই করতে হয়। নেস্ট.জেএস-এ গার্ডগুলো CanActivate ইন্টারফেস বাস্তবায়ন করে। তারা সমস্ত মিডেলওয়্যারের পরে কিন্তু পাইপ ও কন্ট্রোলারের আগে কার্যকর হয়, ফলে অথেনটিকেশন ও নিরাপত্তার জন্য এটি সবচেয়ে আদর্শ।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'CanActivate Interface',
          def: {
            en: 'The core interface required for guards, defining canActivate(context) which must return true to grant access or false to trigger 403 Forbidden.',
            bn: 'গার্ডের জন্য আবশ্যক মূল ইন্টারফেস, যার canActivate(context) মেথড ট্রু রিটার্ন করলে প্রবেশের অনুমতি মেলে এবং ফলস হলে ৪০৩ ফরবিডেন এরর ঘটে।'
          }
        },
        {
          term: 'ExecutionContext',
          def: {
            en: 'An abstraction inheriting from ArgumentsHost that provides access to the current request, response, handler method, and target class.',
            bn: 'ArgumentsHost থেকে উত্তরাধিকার সূত্রে প্রাপ্ত একটি শক্তিশালী অবজেক্ট যা বর্তমান রিকোয়েস্ট, রেসপন্স, হ্যান্ডলার মেথড ও ক্লাসে প্রবেশের সুবিধা দেয়।'
          }
        },
        {
          term: 'Reflector',
          def: {
            en: 'A helper utility provided by NestJS used to extract custom metadata attached to route handlers or controllers via decorators.',
            bn: 'নেস্ট.জেএস সরবরাহকৃত একটি ইউটিলিটি ক্লাস যা ডেকোরেটর দিয়ে ক্লাসে বা মেথডে সেঁটে দেওয়া কাস্টম মেটাডাটা সহজেই পড়ে নিতে পারে।'
          }
        },
        {
          term: 'Role-Based Access Control (RBAC)',
          def: {
            en: 'An authorization pattern where endpoints require specific roles (such as admin or manager) verified by an inspection guard.',
            bn: 'একটি নিরাপত্তা মডেল যেখানে নির্দিষ্ট এন্ডপয়েন্টে প্রবেশের জন্য নির্দিষ্ট রোল (যেমন অ্যাডমিন বা ম্যানেজার) থাকা বাধ্যতামূলক করা হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'execution-context-table',
      text: {
        en: 'ExecutionContext Capabilities Across Protocols',
        bn: 'বিভিন্ন প্রোটোকলে ExecutionContext-এর সুবিধাসমূহ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Context Method', bn: 'কনটেক্সট মেথড' },
        { en: 'Returned Value', bn: 'প্রাপ্ত মান' },
        { en: 'Use Case in Guards', bn: 'গার্ডে ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'context.switchToHttp()', bn: 'context.switchToHttp()' },
          { en: 'HttpArgumentsHost ({ getRequest, getResponse })', bn: 'HttpArgumentsHost ({ getRequest, getResponse })' },
          { en: 'Extracts Express or Fastify request headers and JWT tokens', bn: 'এক্সপ্রেস বা ফাস্টিফাই রিকোয়েস্ট হেডার ও টোকেন সংগ্রহ' }
        ],
        [
          { en: 'context.getHandler()', bn: 'context.getHandler()' },
          { en: 'Reference to target method function', bn: 'টার্গেট মেথড ফাংশনের রেফারেন্স' },
          { en: 'Reflector metadata extraction at endpoint method scope', bn: 'মেথড লেভেলে কাস্টম ডেকোরেটর মেটাডাটা রিড করা' }
        ],
        [
          { en: 'context.getClass()', bn: 'context.getClass()' },
          { en: 'Reference to controller class constructor', bn: 'কন্ট্রোলার ক্লাসের রেফারেন্স' },
          { en: 'Reflector metadata extraction at controller class scope', bn: 'পুরো কন্ট্রোলার ক্লাস লেভেলে মেটাডাটা রিড করা' }
        ],
        [
          { en: 'context.getType()', bn: 'context.getType()' },
          { en: '"http" | "ws" | "rpc"', bn: '"http" | "ws" | "rpc"' },
          { en: 'Writing hybrid guards that branch based on network transport', bn: 'এইচটিটিপি, ওয়েবসকেট বা আরপিসি অনুযায়ী কাস্টম গার্ড চালানো' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'guard-rbac-code',
      text: {
        en: 'Working RBAC Guard with Reflector Simulation',
        bn: 'রিফ্লেক্টর সহ কার্যকরী আরবিএসি গার্ড সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of NestJS Reflector and CanActivate Guard
class MockReflector {
  constructor(metadataStore) {
    this.store = metadataStore;
  }

  getAllAndOverride(key, targets) {
    // Check method metadata first, then fallback to class metadata
    return this.store.get(key) || null;
  }
}

class RolesGuard {
  constructor(reflector) {
    this.reflector = reflector;
  }

  canActivate(context, mockUser) {
    // 1. Extract required roles from route metadata
    const requiredRoles = this.reflector.getAllAndOverride('roles', []);
    if (!requiredRoles || requiredRoles.length === 0) {
      return true; // Public or unannotated route
    }

    // 2. Evaluate authenticated user role
    if (!mockUser || !mockUser.role) {
      return false; // Unauthenticated
    }

    return requiredRoles.includes(mockUser.role);
  }
}

// Verification simulation
const metadata = new Map();
metadata.set('roles', ['admin', 'manager']);
const reflector = new MockReflector(metadata);
const guard = new RolesGuard(reflector);

const adminUser = { id: 101, username: 'dev_lead', role: 'admin' };
const guestUser = { id: 102, username: 'viewer_guest', role: 'guest' };

const adminAccess = guard.canActivate(null, adminUser);
const guestAccess = guard.canActivate(null, guestUser);

console.log('Admin access allowed:', adminAccess);
// -> Admin access allowed: true
console.log('Guest access allowed:', guestAccess);
// -> Guest access allowed: false`,
      caption: {
        en: 'RolesGuard granting access to admin and denying access to guest',
        bn: 'RolesGuard অ্যাডমিনকে প্রবেশাধিকার দিচ্ছে এবং গেস্টকে আটকে দিচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'guard-binding-scopes',
      text: {
        en: 'Guard Binding Scopes and Public Route Exceptions',
        bn: 'গার্ড বাইন্ডিং স্কোপ এবং পাবলিক রুটের ব্যতিক্রম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When applications apply global authentication guards via APP_GUARD, public endpoints (such as /auth/login and /auth/register) become unreachable by default. To solve this, developers create a custom @Public() decorator and configure guards to inspect this metadata using Reflector before evaluating tokens.',
        bn: 'অ্যাপ্লিকেশনে যখন APP_GUARD দিয়ে গ্লোবাল অথেনটিকেশন গার্ড বসানো হয়, তখন লগইন ও রেজিস্ট্রেশনের মতো পাবলিক রুটগুলোও ডিফল্টভাবে ব্লক হয়ে যায়। এই সমস্যা সমাধানে ডেভেলপাররা কাস্টম @Public() ডেকোরেটর তৈরি করেন এবং রিফ্লেক্টর দিয়ে সেই মেটাডাটা থাকলে গার্ডকে সরাসরি ট্রু রিটার্ন করতে নির্দেশ দেন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Register with APP_GUARD: Bind global guards in the root AppModule providers array to participate fully in dependency injection.',
          bn: '১. APP_GUARD দিয়ে বাইন্ড: ডিপেন্ডেন্সি ইনজেকশন পুরোপুরি ব্যবহার করতে রুট মডিউলের providers-এ APP_GUARD দিয়ে গ্লোবাল গার্ড যুক্ত করুন।'
        },
        {
          en: '2. Bypass with @Public: Create a custom decorator SetMetadata("isPublic", true) to skip authentication checks on public endpoints.',
          bn: '২. @Public দিয়ে ছাড়: পাবলিক এন্ডপয়েন্টে অথেনটিকেশন এড়িয়ে যেতে SetMetadata("isPublic", true) সহ কাস্টম ডেকোরেটর ব্যবহার করুন।'
        },
        {
          en: '3. Use getAllAndOverride: Query metadata across both the method handler and controller class so method settings override class defaults.',
          bn: '৩. getAllAndOverride ব্যবহার: রিফ্লেক্টরে এই মেথড ব্যবহার করুন যাতে মেথড লেভেলের নিয়ম ক্লাসের সাধারণ নিয়মকে ওভাররাইড করতে পারে।'
        },
        {
          en: '4. Throw Semantic Exceptions: Throw UnauthorizedException (401) for bad tokens and ForbiddenException (403) for insufficient role privileges.',
          bn: '৪. স্পষ্ট এরর প্রদান: টোকেন না থাকলে UnauthorizedException (৪০১) এবং রোল না মিললে ForbiddenException (৪০৩) ছুড়ে দিন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nest-grd-ex1',
      kind: 'mcq',
      topic: 'canactivate interface return types',
      question: {
        en: 'What return types are supported by the canActivate(context: ExecutionContext) method in a NestJS guard?',
        bn: 'নেস্ট.জেএস গার্ডের canActivate(context: ExecutionContext) মেথড কোন রিটার্ন টাইপগুলো সমর্থন করে?'
      },
      options: [
        {
          en: 'boolean | Promise<boolean> | Observable<boolean>',
          bn: 'boolean | Promise<boolean> | Observable<boolean>'
        },
        {
          en: 'string | number',
          bn: 'string | number'
        },
        {
          en: 'void | null',
          bn: 'void | null'
        },
        {
          en: 'Array<string>',
          bn: 'Array<string>'
        }
      ],
      answer: 0,
      hint: {
        en: 'Guards can evaluate access synchronously (boolean), asynchronously (Promise), or reactively (Observable).',
        bn: 'গার্ড সিঙ্ক্রোনাস (boolean), অ্যাসিনক্রোনাস (Promise) বা রিঅ্যাক্টিভ (Observable) যেকোনোভাবে অনুমতি দিতে পারে।'
      },
      explanation: {
        en: 'canActivate can return a boolean, a Promise resolving to a boolean, or an RxJS Observable emitting a boolean.',
        bn: 'canActivate মেথড বুলিয়ান, বুলিয়ানে সমাধান হওয়া প্রমিজ অথবা আরএক্সজেএস অবসার্ভেবল রিটার্ন করতে পারে।'
      }
    },
    {
      id: 'nest-grd-ex2',
      kind: 'mcq',
      topic: 'reflector getallandoverride purpose',
      question: {
        en: 'Why is reflector.getAllAndOverride() preferred over reflector.get() when inspecting metadata like @Roles() in guards?',
        bn: 'গার্ডে @Roles()-এর মতো মেটাডাটা পড়ার ক্ষেত্রে reflector.get()-এর চেয়ে reflector.getAllAndOverride() কেন বেশি কার্যকর?'
      },
      options: [
        {
          en: 'It evaluates metadata on the route handler method first, and if not found, falls back to the metadata defined on the parent controller class',
          bn: 'এটি প্রথমে নির্দিষ্ট মেথড হ্যান্ডলারে মেটাডাটা খোঁজে এবং সেখানে না পেলে প্যারেন্ট কন্ট্রোলার ক্লাসে সংজ্ঞায়িত মেটাডাটায় ফিরে যায়'
        },
        {
          en: 'It encrypts the metadata using 256-bit cryptography',
          bn: 'এটি মেটাডাটাকে ২৫৬-বিট ক্রিপ্টোগ্রাফি দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'It clears the Node.js memory buffer after each request',
          bn: 'এটি প্রতিটি রিকোয়েস্টের পর নোড.জেএস মেমরি বাফার মুছে ফেলে'
        },
        {
          en: 'reflector.get() was permanently removed in NestJS 8',
          bn: 'reflector.get() মেথডটি নেস্ট.জেএস ৮-এ চিরতরে মুছে ফেলা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Endpoint-specific method rules should override class-level defaults.',
        bn: 'মেথডের নির্দিষ্ট নিয়ম ক্লাসের সাধারণ নিয়মের ওপর অগ্রাধিকার পাওয়া উচিত।'
      },
      explanation: {
        en: 'getAllAndOverride provides clean hierarchical inheritance. A method-level @Roles("admin") will override a class-level @Roles("user") configuration.',
        bn: 'getAllAndOverride সুন্দর হায়ারার্কি তৈরি করে। ফলে মেথডের @Roles("admin") পুরো ক্লাসের সাধারণ @Roles("user") নিয়মকে ওভাররাইড করতে পারে।'
      }
    },
    {
      id: 'nest-grd-ex3',
      kind: 'mcq',
      topic: 'app_guard dependency injection benefit',
      question: {
        en: 'What is the architectural advantage of registering global guards via { provide: APP_GUARD, useClass: AuthGuard } in a module rather than app.useGlobalGuards() in main.ts?',
        bn: 'main.ts-এ app.useGlobalGuards()-এর বদলে মডিউলে { provide: APP_GUARD, useClass: AuthGuard } দিয়ে গ্লোবাল গার্ড নিবন্ধনের সুবিধা কী?'
      },
      options: [
        {
          en: 'Guards registered with APP_GUARD can inject other dependencies (such as Reflector, ConfigService, or AuthService) directly through their constructor',
          bn: 'APP_GUARD দিয়ে নিবন্ধিত গার্ডগুলো তাদের কনস্ট্রাক্টরে সরাসরি অন্যান্য সার্ভিস (যেমন Reflector, ConfigService বা AuthService) ইনজেক্ট করতে পারে'
        },
        {
          en: 'It makes the Express server run without any network ports',
          bn: 'এটি কোনো নেটওয়ার্ক পোর্ট ছাড়াই এক্সপ্রেস সার্ভার চালানোর সুবিধা দেয়'
        },
        {
          en: 'It reduces the size of the JavaScript bundle by 50 percent',
          bn: 'এটি জাভাস্ক্রিপ্ট বান্ডেলের আকার ৫০ শতাংশ সংকুচিত করে'
        },
        {
          en: 'APP_GUARD disables CORS security policies automatically',
          bn: 'APP_GUARD স্বয়ংক্রিয়ভাবে কর্স সিকিউরিটি পলিসি বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'app.useGlobalGuards() executes outside the IoC container context.',
        bn: 'app.useGlobalGuards() নেস্টের IoC কন্টেইনারের বাইরে থেকে কার্যকর হয়।'
      },
      explanation: {
        en: 'When instantiated via app.useGlobalGuards(new Guard()), the guard cannot inject services. Using the APP_GUARD token allows full IoC dependency injection.',
        bn: 'app.useGlobalGuards দিয়ে গার্ড বানালে কনস্ট্রাক্টরে সার্ভিস পাওয়া যায় না। কিন্তু APP_GUARD টোকেন ব্যবহার করলে পুরো ডিপেন্ডেন্সি ইনজেকশন সুবিধা পাওয়া যায়।'
      }
    },
    {
      id: 'nest-grd-ex4',
      kind: 'mcq',
      topic: 'executioncontext vs argumentshost',
      question: {
        en: 'What extra methods does ExecutionContext provide that base ArgumentsHost does not?',
        bn: 'বেস ArgumentsHost-এর তুলনায় ExecutionContext অতিরিক্ত কোন মেথডগুলো সরবরাহ করে?'
      },
      options: [
        {
          en: 'getClass() and getHandler() for inspecting the target controller and route handler',
          bn: 'টার্গেট কন্ট্রোলার ও রুট হ্যান্ডলার পরিদর্শনের জন্য getClass() এবং getHandler()'
        },
        {
          en: 'startServer() and stopServer() for process control',
          bn: 'প্রসেস নিয়ন্ত্রণের জন্য startServer() এবং stopServer()'
        },
        {
          en: 'createDatabaseTable() for SQL schema migrations',
          bn: 'এসকিউএল স্কিমা মাইগ্রেশনের জন্য createDatabaseTable()'
        },
        {
          en: 'compressResponse() for Gzip compression',
          bn: 'জিপ কম্প্রেশনের জন্য compressResponse()'
        }
      ],
      answer: 0,
      hint: {
        en: 'It allows guards to inspect which class and method is about to be executed.',
        bn: 'এটি গার্ডকে দেখতে দেয় কোন ক্লাস এবং কোন মেথডটি কার্যকর হতে যাচ্ছে।'
      },
      explanation: {
        en: 'ExecutionContext extends ArgumentsHost by adding getClass() and getHandler(), which are essential for Reflector to extract metadata from classes and methods.',
        bn: 'ExecutionContext ArgumentsHost-কে সম্প্রসারিত করে getClass() এবং getHandler() যুক্ত করে, যা রিফ্লেক্টরের মেটাডাটা পড়ার জন্য অপরিহার্য।'
      }
    }
  ],
  quiz: {
    id: 'sentries-at-the-pass-quiz',
    title: {
      en: 'Guards & Authorization Quiz',
      bn: 'গার্ড ও অথরাইজেশন কুইজ'
    },
    questions: [
      {
        id: 'q-guard-vs-middleware-timing',
        kind: 'mcq',
        topic: 'guard vs middleware execution lifecycle difference',
        question: {
          en: 'Why are Guards architecturally superior to Express middleware for implementing Role-Based Access Control in NestJS?',
          bn: 'নেস্ট.জেএস-এ রোল-বেসড অ্যাক্সেস কন্ট্রোল তৈরিতে সাধারণ এক্সপ্রেস মিডেলওয়্যারের চেয়ে গার্ড কেন বেশি শক্তিশালী?'
        },
        options: [
          {
            en: 'Middleware functions have no access to the ExecutionContext and do not know which route handler will execute; Guards know the exact target class, method, and Reflector metadata',
            bn: 'মিডেলওয়্যারের ExecutionContext-এ প্রবেশাধিকার থাকে না এবং সে জানে না কোন হ্যান্ডলারটি চলবে; কিন্তু গার্ড টার্গেট ক্লাস, মেথড ও রিফ্লেক্টর মেটাডাটা স্পষ্টভাবে জানে'
          },
          {
            en: 'Express middleware cannot read incoming request HTTP headers',
            bn: 'এক্সপ্রেস মিডেলওয়্যার ইনকামিং রিকোয়েস্টের এইচটিটিপি হেডার পড়তে পারে না'
          },
          {
            en: 'Guards execute in parallel threads across multiple CPU cores',
            bn: 'গার্ড একাধিক সিপিইউ কোরে প্যারালাল থ্রেডে কার্যকর হয়'
          },
          {
            en: 'Middleware is completely banned in modern TypeScript applications',
            bn: 'আধুনিক টাইপস্ক্রিপ্ট অ্যাপ্লিকেশনে মিডেলওয়্যার সম্পূর্ণ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Middleware is dumb to route metadata; guards are aware of the destination handler and class.',
          bn: 'মিডেলওয়্যার এন্ডপয়েন্টের মেটাডাটা জানে না; কিন্তু গার্ড পরবর্তী মেথড ও ক্লাস সম্পর্কে পুরোপুরি অবগত।'
        },
        explanation: {
          en: 'Middleware only knows the raw request and response streams. Guards have access to ExecutionContext, allowing them to inspect route metadata like @Roles() or @Public().',
          bn: 'মিডেলওয়্যার কেবল রিকোয়েস্ট ও রেসপন্স দেখে। গার্ডের কাছে ExecutionContext থাকে যার ফলে সে @Roles() বা @Public() মেটাডাটা পড়ে সঠিক সিদ্ধান্ত নিতে পারে।'
        }
      },
      {
        id: 'q-public-decorator-pattern',
        kind: 'mcq',
        topic: 'custom public decorator implementation',
        question: {
          en: 'How is a custom @Public() decorator typically implemented in NestJS using the SetMetadata utility?',
          bn: 'SetMetadata ইউটিলিটি ব্যবহার করে কীভাবে সাধারণত একটি কাস্টম @Public() ডেকোরেটর তৈরি করা হয়?'
        },
        options: [
          {
            en: 'export const IS_PUBLIC_KEY = "isPublic"; export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);',
            bn: 'export const IS_PUBLIC_KEY = "isPublic"; export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);'
          },
          {
            en: 'export const Public = new PublicDecoratorClass();',
            bn: 'export const Public = new PublicDecoratorClass();'
          },
          {
            en: 'export function Public() { return express.Router(); }',
            bn: 'export function Public() { return express.Router(); }'
          },
          {
            en: 'export const Public = process.env.PUBLIC_ROUTE;',
            bn: 'export const Public = process.env.PUBLIC_ROUTE;'
          }
        ],
        answer: 0,
        hint: {
          en: 'SetMetadata associates a key-value pair with the target route handler.',
          bn: 'SetMetadata একটি কি-ভ্যালু জোড়াকে টার্গেট রুট হ্যান্ডলারের সাথে বেঁধে দেয়।'
        },
        explanation: {
          en: 'SetMetadata attaches custom metadata to the method. Inside the AuthGuard, reflector.getAllAndOverride checks if IS_PUBLIC_KEY is true, allowing bypass.',
          bn: 'SetMetadata মেথডে মেটাডাটা সেঁটে দেয়। AuthGuard-এর ভেতরে রিফ্লেক্টর দিয়ে IS_PUBLIC_KEY সত্য পেলে গার্ড রিকোয়েস্ট পাস হতে দেয়।'
        }
      },
      {
        id: 'q-guard-unauthorized-vs-forbidden',
        kind: 'mcq',
        topic: 'unauthorized vs forbidden exception semantics',
        question: {
          en: 'If a user provides no Authorization header, which exception should a guard throw; and if a valid user lacks the required role, which exception should be thrown?',
          bn: 'যদি কোনো ইউজার Authorization হেডার না পাঠায় তবে কোন এক্সেপশন ছুড়তে হবে; আর টোকেন ঠিক থাকলেও রোল না মিললে কোনটি দিতে হবে?'
        },
        options: [
          {
            en: 'Throw UnauthorizedException (401) for missing/invalid tokens; throw ForbiddenException (403) for insufficient role privileges',
            bn: 'অনুপস্থিত বা ভুল টোকেনের জন্য UnauthorizedException (৪০১); আর রোল বা পারমিশন না থাকলে ForbiddenException (৪০৩)'
          },
          {
            en: 'Throw BadRequestException (400) for both cases indiscriminately',
            bn: 'উভয় ক্ষেত্রেই নির্বিচারে BadRequestException (৪০০) ছুড়ে দেওয়া'
          },
          {
            en: 'Throw InternalServerErrorException (500) to hide errors from the client',
            bn: 'ক্লায়েন্টের কাছ থেকে এরর গোপন করতে InternalServerErrorException (৫০০) ছুড়ে দেওয়া'
          },
          {
            en: 'Guards are not allowed to throw exceptions in NestJS',
            bn: 'নেস্ট.জেএস গার্ডে কোনো এক্সেপশন ছুড়তে দেওয়া হয় না'
          }
        ],
        answer: 0,
        hint: {
          en: '401 signifies unknown identity; 403 signifies identity verified but permission refused.',
          bn: '৪০১ পরিচয়হীনতা প্রকাশ করে; ৪০৩ পরিচয় থাকলেও অনুমতি না থাকার সংকেত দেয়।'
        },
        explanation: {
          en: '401 Unauthorized indicates authentication failure. 403 Forbidden indicates authorization failure. Maintaining this distinction is a fundamental REST requirement.',
          bn: '৪০১ অথেনটিকেশন ব্যর্থতা এবং ৪০৩ অথরাইজেশন ব্যর্থতা নির্দেশ করে। এই পার্থক্য বজায় রাখা রেস্ট এপিআই-এর একটি মৌলিক নিয়ম।'
        }
      },
      {
        id: 'q-guards-execution-order-multiple',
        kind: 'mcq',
        topic: 'multiple guards execution sequence',
        question: {
          en: 'If a controller is decorated with @UseGuards(AuthGuard, RolesGuard), in what order do the guards evaluate?',
          bn: 'যদি কোনো কন্ট্রোলারে @UseGuards(AuthGuard, RolesGuard) দেওয়া হয়, তবে গার্ডগুলো কোন ক্রমানুসারে চলবে?'
        },
        options: [
          {
            en: 'Strictly left-to-right: AuthGuard executes first; if it returns true, RolesGuard executes second. If AuthGuard fails, RolesGuard never runs',
            bn: 'কঠোরভাবে বাম থেকে ডানে: AuthGuard আগে চলবে; সত্য হলে RolesGuard চলবে। AuthGuard ব্যর্থ হলে RolesGuard কখনোই চলবে না'
          },
          {
            en: 'In random order based on JavaScript V8 heap memory addresses',
            bn: 'জাভাস্ক্রিপ্ট V8 মেমরি ঠিকানার ওপর ভিত্তি করে এলোমেলোভাবে'
          },
          {
            en: 'Both guards run in parallel and their boolean results are multiplied',
            bn: 'উভয় গার্ড সমান্তরালে চলে এবং তাদের ফলাফল গুণ করা হয়'
          },
          {
            en: 'RolesGuard executes first because it starts with the letter R',
            bn: 'RolesGuard আগে চলবে কারণ এর নামের প্রথম অক্ষর R'
          }
        ],
        answer: 0,
        hint: {
          en: 'Nest evaluates guards sequentially in the order they are passed to @UseGuards.',
          bn: 'নেস্ট @UseGuards-এ যেভাবে সাজানো থাকে ঠিক সেই ক্রমানুসারে ধারাবাহিকভাবে গার্ড চালায়।'
        },
        explanation: {
          en: 'Guards run sequentially in declaration order. If any guard returns false or throws, remaining guards in the list are aborted immediately.',
          bn: 'গার্ডগুলো ঘোষণার ক্রমানুসারে চলে। যেকোনো একটি গার্ড ফলস দিলে বা এরর ছুড়লে বাকি গার্ডগুলো আর চলে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'nets-and-weaves',
    title: {
      en: 'Lifecycle Interceptors & Filters — Middleware, Interceptors & Exception Filters',
      bn: 'লাইফসাইকেল ইন্টারসেপ্টর ও ফিল্টার — মিডেলওয়্যার, ইন্টারসেপ্টর ও এক্সেপশন ফিল্টার'
    }
  }
};
