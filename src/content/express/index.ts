import type { Hub } from '../../lib/types';
import { TheDiningRoomOpensLesson } from './lessons/the-dining-room-opens';
import { MenusOnTheWallLesson } from './lessons/menus-on-the-wall';
import { SeasoningEveryPlateLesson } from './lessons/seasoning-every-plate';
import { TheOrderTicketsLesson } from './lessons/the-order-tickets';
import { PlatingAnswersLesson } from './lessons/plating-answers';
import { TheBouncerAtTheDoorLesson } from './lessons/the-bouncer-at-the-door';
import { TheNightShiftLesson } from './lessons/the-night-shift';
import { TheGrandServiceLesson } from './lessons/the-grand-service';

export const expressHub: Hub = {
  slug: 'express',
  name: 'Express.js',
  icon: '🚂',
  tagline: {
    en: 'Build fast, robust, and production-ready RESTful APIs and web applications with the industry-standard Node.js framework.',
    bn: 'ইন্ডাস্ট্রি-স্ট্যান্ডার্ড নোড.জেএস ফ্রেমওয়ার্ক ব্যবহার করে দ্রুত, শক্তিশালী এবং প্রোডাকশন-রেডি রেস্টফুল এপিআই ও ওয়েব অ্যাপ্লিকেশন তৈরি করুন।'
  },
  intro: {
    en: 'Express.js is the foundational backend framework for the Node.js runtime. This complete track takes you from the core HTTP request-response lifecycle and route parameter dispatching to enterprise layered architectures. You will master composable middleware pipelines, centralized error handling, request body validation, JWT authentication, production security hardening with Helmet and rate limiting, and automated portless integration testing with Supertest.',
    bn: 'এক্সপ্রেস.জেএস হলো নোড.জেএস রানটাইমের সবচেয়ে নির্ভরযোগ্য ও বহুল ব্যবহৃত ব্যাকএন্ড ওয়েব ফ্রেমওয়ার্ক। এই সম্পূর্ণ ট্র্যাকে আপনি এইচটিটিপি রিকোয়েস্ট-রেসপন্স লাইফসাইকেল এবং রাউটিং মেকানিজম থেকে শুরু করে এন্টারপ্রাইজ লেয়ার্ড আর্কিটেকচার পর্যন্ত প্রতিটি বিষয় হাতে-কলমে শিখবেন। কম্পোজেবল মিডেলওয়্যার পাইপলাইন, কেন্দ্রীভূত এরর হ্যান্ডলিং, রিকোয়েস্ট ভ্যালিডেশন, জেডব্লিউটি অথেনটিকেশন, হেলমেট ও রেট লিমিটিং দিয়ে প্রোডাকশন সিকিউরিটি এবং সুপারটেস্ট দিয়ে অটোমেটেড ইন্টিগ্রেশন টেস্টিং এতে বিস্তারিত অন্তর্ভুক্ত রয়েছে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Core Routing & Request Lifecycle',
        bn: 'ধাপ ১ — কোর রাউটিং ও রিকোয়েস্ট লাইফসাইকেল'
      },
      items: [
        {
          en: 'Express server instantiation, environment port binding, HTTP method routing, and single response discipline (Lesson 1)',
          bn: 'এক্সপ্রেস সার্ভার তৈরি, পোর্ট বাইন্ডিং, এইচটিটিপি মেথড রাউটিং এবং রেসপন্স লাইফসাইকেল নিয়ম (পাঠ ১)'
        },
        {
          en: 'Route parameters, query strings, modular express.Router, nested routes with mergeParams, and route chaining (Lesson 2)',
          bn: 'রুট প্যারামিটার, কোয়েরি স্ট্রিং, মডুলার express.Router, mergeParams সহ নেস্টেড রুট এবং রুট চেইনিং (পাঠ ২)'
        },
        {
          en: 'Core principle: keep routes declarative, delegate business work to controllers, and enforce strict route matching precedence',
          bn: 'মূল নীতি: রুটগুলোকে ডিক্লারেটিভ রাখুন, মূল কাজ কন্ট্রোলারে পাঠান এবং রাউটের ক্রম সঠিকভাবে বজায় রাখুন'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Middleware Pipeline, Validation & Security',
        bn: 'ধাপ ২ — মিডেলওয়্যার পাইপলাইন, ভ্যালিডেশন ও সিকিউরিটি'
      },
      items: [
        {
          en: 'Middleware mechanics, next() propagation, asynchronous wrappers, and 4-argument centralized error handlers (Lesson 3)',
          bn: 'মিডেলওয়্যার মেকানিজম, next() ট্রাভার্সাল, অ্যাসিনক্রোনাস র্যাপার এবং ৪-আর্গুমেন্ট এরর হ্যান্ডলার (পাঠ ৩)'
        },
        {
          en: 'Body parsing limits, multipart file uploads with Multer, and schema validation with Zod (Lesson 4)',
          bn: 'বডি পার্সিং সীমা, মাল্টার দিয়ে ফাইল আপলোড এবং জড দিয়ে স্কিমা ভ্যালিডেশন (পাঠ ৪)'
        },
        {
          en: 'HTTP status codes, standard JSON envelopes, secure HttpOnly cookies, and file streaming (Lesson 5)',
          bn: 'এইচটিটিপি স্ট্যাটাস কোড, স্ট্যান্ডার্ড জেএসন রেসপন্স এনভেলপ, সুরক্ষিত কুকি এবং ফাইল স্ট্রিমিং (পাঠ ৫)'
        },
        {
          en: 'Password hashing with bcrypt, JWT authentication, and Role-Based Access Control (RBAC) middleware (Lesson 6)',
          bn: 'বিক্রিপ্ট দিয়ে পাসওয়ার্ড হ্যাশিং, জেডব্লিউটি অথেনটিকেশন এবং রোল-বেসড অ্যাক্সেস কন্ট্রোল মিডেলওয়্যার (পাঠ ৬)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Production Hardening & Enterprise Architecture',
        bn: 'ধাপ ৩ — প্রোডাকশন সিকিউরিটি ও এন্টারপ্রাইজ আর্কিটেকচার'
      },
      items: [
        {
          en: 'Security hardening with Helmet, CORS configuration, IP rate limiting, and graceful shutdown on SIGTERM (Lesson 7)',
          bn: 'হেলমেট দিয়ে সিকিউরিটি হেডার, কর্স কনফিগারেশন, রেট লিমিটিং এবং সিগটার্মে গ্রেসফুল শাটডাউন (পাঠ ৭)'
        },
        {
          en: 'Layered MVC architecture separating Routers, Controllers, and Services, plus portless Supertest integration testing (Lesson 8)',
          bn: 'লেয়ার্ড এমভিসি আর্কিটেকচার (রাউটার, কন্ট্রোলার, সার্ভিস) এবং সুপারটেস্ট দিয়ে পোর্টলেস এপিআই টেস্টিং (পাঠ ৮)'
        },
        {
          en: 'Enterprise principle: decouple framework primitives from core domain business logic to ensure testability and longevity',
          bn: 'এন্টারপ্রাইজ নীতি: টেস্টিং সহজ করতে ফ্রেমওয়ার্ক কোড থেকে মূল বিজনেস লজিক সম্পূর্ণ আলাদা রাখুন'
        }
      ]
    }
  ],
  lessons: [
    TheDiningRoomOpensLesson,
    MenusOnTheWallLesson,
    SeasoningEveryPlateLesson,
    TheOrderTicketsLesson,
    PlatingAnswersLesson,
    TheBouncerAtTheDoorLesson,
    TheNightShiftLesson,
    TheGrandServiceLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Production RESTful API: Task & User Management Engine',
        bn: 'প্রোডাকশন রেস্টফুল এপিআই: টাস্ক ও ইউজার ম্যানেজমেন্ট ইঞ্জিন'
      },
      brief: {
        en: 'Architect an enterprise RESTful API using Express 5 features: modular routers for /api/v1/auth and /api/v1/tasks; schema validation for request payloads; JWT access and refresh token authentication with HttpOnly cookies; role-based authorization; centralized operational error handling; and 404/422 responses. Verify that no unhandled promise rejections occur.',
        bn: 'এক্সপ্রেস ফ্রেমওয়ার্ক ব্যবহার করে এন্টারপ্রাইজ RESTful API তৈরি করুন: /api/v1/auth এবং /api/v1/tasks-এর জন্য মডুলার রাউটার; রিকোয়েস্ট পেলোডের জন্য স্কিমা ভ্যালিডেশন; HttpOnly কুকি সহ JWT এক্সেস ও রিফ্রেশ টোকেন অথেনটিকেশন; রোল-বেসড অথরাইজেশন; কেন্দ্রীভূত অপারেশনাল এরর হ্যান্ডলিং এবং ৪০৪/৪২২ রেসপন্স। কোনো আনহ্যান্ডলড প্রমিজ যেন ক্র্যাশ না ঘটায় তা নিশ্চিত করুন।'
      }
    },
    {
      title: {
        en: 'High-Security Gateway & Automated Integration Test Suite',
        bn: 'হাই-সিকিউরিটি গেটওয়ে ও অটোমেটেড ইন্টিগ্রেশন টেস্ট স্যুট'
      },
      brief: {
        en: 'Harden the Express service for mission-critical deployment: configure Helmet security headers, restrict CORS to trusted origins, apply IP rate limiting to authentication routes, register graceful shutdown handlers for SIGTERM and SIGINT, and write comprehensive portless Supertest integration tests covering authentication, resource CRUD, and error middleware.',
        bn: 'প্রোডাকশন ডেপ্লয়মেন্টের জন্য এক্সপ্রেস সার্ভিসকে সুরক্ষিত করুন: হেলমেট সিকিউরিটি হেডার কনফিগার করা, নির্দিষ্ট অরিজিনে CORS সীমাবদ্ধ করা, লগইন রুটে আইপি রেট লিমিটিং প্রয়োগ করা, SIGTERM ও SIGINT সিগন্যালে গ্রেসফুল শাটডাউন বাস্তবায়ন এবং সুপারটেস্ট দিয়ে সম্পূর্ণ টেস্ট স্যুট লেখা।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always use express.Router() to split endpoints into modular, single-responsibility files rather than attaching every handler to the root app instance.',
      bn: 'সব রুট রুট অ্যাপ্লিকেশনে না লিখে সর্বদা express.Router() ব্যবহার করে প্রতিটি রিসোর্সকে আলাদা মডিউলে বিভক্ত রাখুন।'
    },
    {
      en: 'Wrap asynchronous route handlers or use Express 5 native async error forwarding to prevent unhandled promise rejections from stalling requests.',
      bn: 'অ্যাসিনক্রোনাস রুট হ্যান্ডলারে এরর হ্যান্ডলিং নিশ্চিত করতে র্যাপার ফাংশন ব্যবহার করুন যাতে কোনো আনহ্যান্ডলড প্রমিজ রিকোয়েস্ট ঝুলিয়ে না রাখে।'
    },
    {
      en: 'Always place centralized 4-argument error-handling middleware (err, req, res, next) at the very end of your middleware stack after all route definitions.',
      bn: 'সর্বদা সমস্ত রুট সংজ্ঞার শেষে মিডেলওয়্যার পাইপলাইনের একদম নিচে ৪-আর্গুমেন্ট এরর হ্যান্ডলার মিডেলওয়্যার (err, req, res, next) যুক্ত করুন।'
    },
    {
      en: 'Validate all incoming request data (params, query, body) with a strict schema validator like Zod before executing any database or business operations.',
      bn: 'ডাটাবেজ বা ব্যবসায়িক লজিক কার্যকর করার আগেই জড-এর মতো কঠোর স্কিমা ভ্যালিডেটর দিয়ে সমস্ত ইনপুট ডাটা যাচাই করে নিন।'
    },
    {
      en: 'Never store sensitive tokens in localStorage on the client; use secure, HttpOnly, SameSite cookies to protect against Cross-Site Scripting (XSS).',
      bn: 'ক্লায়েন্টের localStorage-এ সংবেদনশীল টোকেন রাখবেন না; XSS আক্রমণ ঠেকাতে সুরক্ষিত HttpOnly এবং SameSite কুকি ব্যবহার করুন।'
    },
    {
      en: 'Separate your Express app configuration (app.js) from your network server binding (server.js) so you can run portless Supertest integration tests.',
      bn: 'নেটওয়ার্ক পোর্ট লিসেনিং (server.js) থেকে এক্সপ্রেস অ্যাপ কনফিগারেশন (app.js) আলাদা রাখুন যাতে সহজে পোর্টলেস সুপারটেস্ট চালানো যায়।'
    }
  ],
  interview: [
    {
      q: {
        en: 'How does Express middleware execution work, and what happens if you forget to call next() or return a response in a custom middleware?',
        bn: 'এক্সপ্রেস মিডেলওয়্যার এক্সিকিউশন কীভাবে কাজ করে, এবং কাস্টম মিডেলওয়্যারে next() কল করতে বা রেসপন্স ফেরত দিতে ভুলে গেলে কী ঘটে?'
      },
      a: {
        en: 'Express processes middleware sequentially in an array-like pipeline. When a request arrives, Express invokes the first matched middleware function with (req, res, next). If that function calls next(), control passes to the subsequent middleware. If the function sends a response (e.g. res.json()), the request-response lifecycle terminates. If a middleware neither sends a response nor calls next(), the HTTP connection hangs indefinitely until the client or gateway times out.',
        bn: 'এক্সপ্রেস একটি পাইপলাইনে ধারাবাহিকভাবে মিডেলওয়্যার চালায়। একটি রিকোয়েস্ট আসলে এক্সপ্রেস প্রথম মিডেলওয়্যার ফাংশনকে (req, res, next) দিয়ে কল করে। সেই ফাংশন next() কল করলে পরবর্তী মিডেলওয়্যারে নিয়ন্ত্রণ যায়। যদি ফাংশনটি রেসপন্স পাঠায় (যেমন res.json()), তবে লাইফসাইকেল শেষ হয়। যদি মিডেলওয়্যার রেসপন্সও না পাঠায় আবার next() কল করতেও ভুলে যায়, তবে ক্লায়েন্ট বা গেটওয়ে টাইমআউট না হওয়া পর্যন্ত সংযোগটি অনির্দিষ্টকালের জন্য ঝুলে থাকে।'
      }
    },
    {
      q: {
        en: 'Why does an Express error-handling middleware require exactly four arguments (err, req, res, next), and what breaks if you omit next?',
        bn: 'এক্সপ্রেস এরর হ্যান্ডলিং মিডেলওয়্যারে ঠিক চারটি আর্গুমেন্ট (err, req, res, next) থাকা কেন বাধ্যতামূলক, এবং next বাদ দিলে কী ত্রুটি ঘটে?'
      },
      a: {
        en: 'Express inspects the arity (function.length) of middleware callbacks using JavaScript reflection. A callback with three arguments (req, res, next) is treated as standard routing middleware. A callback with four parameters (err, req, res, next) is registered as an error handler. When an upstream middleware calls next(err) or throws an error, Express skips all normal middleware and jumps directly to the first 4-parameter error handler. If you omit next, function.length becomes 3, and Express mistakenly treats it as standard middleware, causing errors to bypass it completely.',
        bn: 'এক্সপ্রেস জাভাস্ক্রিপ্ট রিফ্লেকশনের মাধ্যমে ফাংশনের প্যারামিটার সংখ্যা (function.length) পরীক্ষা করে। তিনটি প্যারামিটার (req, res, next) থাকলে এক্সপ্রেস তাকে সাধারণ মিডেলওয়্যার হিসেবে বিবেচনা করে। ঠিক চারটি প্যারামিটার (err, req, res, next) থাকলেই এক্সপ্রেস তাকে এরর হ্যান্ডলার হিসেবে চেনে। কোনো মিডেলওয়্যার next(err) কল করলে এক্সপ্রেস সাধারণ মিডেলওয়্যারগুলো বাদ দিয়ে সরাসরি প্রথম ৪-প্যারামিটার এরর হ্যান্ডলারে চলে যায়। আপনি next বাদ দিলে length ৩ হয়ে যায় এবং এক্সপ্রেস এটিকে ভুলবশত সাধারণ মিডেলওয়্যার ভেবে এরর এড়িয়ে যায়।'
      }
    },
    {
      q: {
        en: 'What causes the "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client" error, and how do you prevent it?',
        bn: '"Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client" ত্রুটি কেন হয়, এবং এটি কীভাবে প্রতিরোধ করবেন?'
      },
      a: {
        en: 'This error occurs when application code attempts to send HTTP response headers or an HTTP status code after the response headers have already been flushed to the client socket. Common causes include forgetting to return after sending a response in conditional branches (e.g. if (!user) res.status(404).json(...); res.json(user);), or calling next() after sending a response. The fix is to always use return before sending a response when subsequent lines exist (e.g. return res.status(404).json(...);) to guarantee execution halts immediately.',
        bn: 'ক্লায়েন্টের কাছে রেসপন্স হেডার চলে যাওয়ার পর পুনরায় স্ট্যাটাস কোড বা হেডার পাঠানোর চেষ্টা করলে এই ত্রুটি দেখা দেয়। সাধারণত কোনো শর্তে রেসপন্স পাঠানোর পর return না লিখলে (যেমন if (!user) res.status(404).json(...); এর নিচে res.json(user); চালু থাকা) অথবা রেসপন্স পাঠানোর পর next() কল করলে এটি ঘটে। সমাধান হলো রেসপন্স পাঠানোর সময় সর্বদা return ব্যবহার করা (যেমন return res.status(404).json(...);) যাতে ফাংশনের কাজ সেখানেই নিশ্চিতভাবে থেমে যায়।'
      }
    },
    {
      q: {
        en: 'Why should you separate your Express app configuration into app.js and the listening call into server.js, and how does this enable portless testing with Supertest?',
        bn: 'কেন এক্সপ্রেস অ্যাপ কনফিগারেশন app.js-এ এবং পোর্ট লিসেনিং server.js-এ আলাদা করা উচিত, এবং এটি সুপারটেস্ট দিয়ে কীভাবে পোর্টলেস টেস্টিং সম্ভব করে?'
      },
      a: {
        en: 'Separating app definition from app.listen() isolates network port binding from HTTP route handling. In server.js, you import app and call app.listen(port). In automated test files, you import app directly into Supertest (e.g. request(app).get("/users")). Supertest uses Node.js internal HTTP request emulation without opening an external TCP port. This avoids port conflicts in parallel CI/CD test runners, speeds up test execution by 10x, and ensures server resources are instantly reclaimed after each test suite completes.',
        bn: 'app তৈরি এবং app.listen() আলাদা রাখলে নেটওয়ার্ক পোর্ট বাইন্ডিং থেকে এইচটিটিপি লজিক সম্পূর্ণ মুক্ত থাকে। server.js ফাইলে app ইমপোর্ট করে app.listen(port) চালানো হয়। টেস্ট ফাইলে app সরাসরি সুপারটেস্টে পাঠানো হয় (যেমন request(app).get("/users"))। সুপারটেস্ট কোনো বাহ্যিক টিসিপি পোর্ট না খুলেই নোড.জেএস-এর ভেতরের এইচটিটিপি ইমুলেশন দিয়ে রিকোয়েস্ট পাঠায়। এটি সিআই/সিডি রানারে পোর্ট কনফ্লিক্ট প্রতিরোধ করে, টেস্ট রান ১০ গুণ দ্রুত করে এবং টেস্ট শেষে সার্ভার রিসোর্স সাথে সাথে মুক্ত করে দেয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'High-Throughput Microservice Gateways: Companies use modular Express routers with Zod schema validation and Redis-backed rate limiting to route millions of requests securely across internal services.',
      bn: 'হাই-থ্রুপুট মাইক্রোসার্ভিস গেটওয়ে: বৃহৎ প্রতিষ্ঠানগুলো মডুলার এক্সপ্রেস রাউটার, জড ভ্যালিডেশন এবং রেডিস রেট লিমিটিং ব্যবহার করে প্রতিদিন কোটি কোটি রিকোয়েস্ট নিরাপদে অভ্যন্তরীণ সার্ভিসে পৌঁছে দেয়।'
    },
    {
      en: 'Enterprise Authentication & Multi-Tenant Systems: Express middleware stacks verify signed JWT tokens, extract tenant tenantId headers, and attach authenticated user permissions onto req.user before reaching controllers.',
      bn: 'এন্টারপ্রাইজ অথেনটিকেশন ও মাল্টি-টেন্যান্ট সিস্টেম: এক্সপ্রেস মিডেলওয়্যার স্ট্যাক সাইন করা JWT যাচাই করে, টেন্যান্ট আইডি বের করে এবং কন্ট্রোলারে যাওয়ার আগেই req.user-এ ইউজারের পারমিশন যুক্ত করে।'
    },
    {
      en: 'Resilient Financial Transaction APIs: Production fintech systems run Express with strict payload byte limits, idempotent request tracking, centralized error serialization, and zero-downtime graceful shutdown.',
      bn: 'নির্ভরযোগ্য আর্থিক লেনদেন এপিআই: ফিনটেক সিস্টেমে এক্সপ্রেস সার্ভারে কঠোর পেলোড সাইজ লিমিট, আইডেমপোটেন্ট রিকোয়েস্ট ট্র্যাকিং, কেন্দ্রীভূত এরর সিরিয়ালাইজেশন এবং জিরো-ডাউনটাইম গ্রেসফুল শাটডাউন ব্যবহৃত হয়।'
    },
    {
      en: 'Decoupled Serverless & Container Deployments: By keeping the Express app instance decoupled from server.listen(), teams deploy the exact same application code onto AWS Lambda, Google Cloud Run, and Kubernetes clusters.',
      bn: 'ডিকাপলড সার্ভারলেস ও কন্টেইনার ডেপ্লয়মেন্ট: অ্যাপকে server.listen() থেকে আলাদা রেখে একই এক্সপ্রেস কোডএডব্লিউএস ল্যাম্বডা, গুগল ক্লাউড রান এবং কুবারনেটিস ক্লাস্টারে একযোগে চালানো সম্ভব হয়।'
    }
  ]
};
