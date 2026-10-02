import type { Lesson } from '../../../lib/types';

export const TheGrandServiceLesson: Lesson = {
  slug: 'the-grand-service',
  tech: 'express',
  title: {
    en: 'Production Architecture & Testing — Layered MVC & Portless Supertest Suites',
    bn: 'প্রোডাকশন আর্কিটেকচার ও টেস্টিং — লেয়ার্ড এমভিসি ও পোর্টলেস সুপারটেস্ট স্যুট'
  },
  summary: {
    en: 'Building scalable enterprise systems with Express requires separating HTTP routing concerns from business domain logic and writing robust automated integration tests. In this capstone lesson, you will master layered MVC architecture, decoupling app configuration from server listening, and running portless API test suites with Supertest.',
    bn: 'এক্সপ্রেস দিয়ে স্কেলেবল এন্টারপ্রাইজ সিস্টেম তৈরির জন্য এইচটিটিপি রাউটিং থেকে ব্যবসায়িক ডোমেন লজিক আলাদা রাখা এবং শক্তিশালী টেস্ট লেখা আবশ্যক। এই সমাপ্তি পাঠে আপনি লেয়ার্ড এমভিসি আর্কিটেকচার, সার্ভার লিসেনিং থেকে অ্যাপ কনফিগারেশন পৃথকীকরণ এবং সুপারটেস্ট দিয়ে পোর্টলেস এপিআই ইন্টিগ্রেশন টেস্ট চালানো গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'enterprise-layered-architecture',
      text: {
        en: 'The Enterprise Layered Architecture',
        bn: 'এন্টারপ্রাইজ লেয়ার্ড আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build large production systems, mixing database queries, business rules, and HTTP response formatting in a single route handler creates untestable codebases. Enterprise Express architectures partition applications into distinct, decoupled tiers: Routers, Controllers, Services, and Data Access Models.',
        bn: 'যখন আপনি বড় প্রোডাকশন সিস্টেম তৈরি করেন, তখন ডাটাবেজ কুয়েরি, ব্যবসায়িক নিয়ম এবং এইচটিটিপি রেসপন্স কোড একটিমাত্র হ্যান্ডলারে জগাখিচুড়ি করে রাখলে তা টেস্ট করা অসম্ভব হয়ে পড়ে। এন্টারপ্রাইজ এক্সপ্রেস আর্কিটেকচারে কোডকে চারটি স্বাধীন স্তরে ভাগ করা হয়: রাউটার, কন্ট্রোলার, সার্ভিস এবং ডাটা মডেল।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Decoupled App Pattern',
          def: {
            en: 'Separating Express middleware and route configuration (app.js) from network TCP port binding (server.js).',
            bn: 'নেটওয়ার্ক টিসিপি পোর্ট লিসেনিং (server.js) থেকে এক্সপ্রেস অ্যাপ কনফিগারেশন (app.js) সম্পূর্ণ আলাদা রাখার কৌশল।'
          }
        },
        {
          term: 'Supertest',
          def: {
            en: 'A testing library enabling HTTP integration tests against Express apps without binding to actual network ports.',
            bn: 'একটি টেস্টিং লাইব্রেরি যা কোনো বাহ্যিক নেটওয়ার্ক পোর্ট ছাড়াই সরাসরি এক্সপ্রেস অ্যাপের ওপর এইচটিটিপি টেস্ট চালায়।'
          }
        },
        {
          term: 'Service Layer',
          def: {
            en: 'A framework-agnostic JavaScript module containing pure business domain logic, independent of req and res objects.',
            bn: 'একটি ফ্রেমওয়ার্ক-স্বাধীন মডিউল যা req বা res অবজেক্ট ছাড়াই কেবল বিশুদ্ধ ব্যবসায়িক নিয়ম ও হিসাবনিকাশ ধারণ করে।'
          }
        },
        {
          term: 'Controller Layer',
          def: {
            en: 'The translation layer that extracts data from req, invokes service functions, and formats HTTP responses via res.',
            bn: 'একটি অনুবাদক স্তর যা req থেকে ইনপুট বের করে সার্ভিসে পাঠায় এবং ফলাফলকে res দিয়ে ক্লায়েন্টের জন্য সাজিয়ে দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'architectural-layers-table',
      text: {
        en: 'The Four-Tier Architecture Responsibility Matrix',
        bn: 'চার-স্তর আর্কিটেকচারের দায়িত্ব বণ্টন ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Layer', bn: 'আর্কিটেকচার স্তর' },
        { en: 'Primary Responsibility', bn: 'প্রধান দায়িত্ব' },
        { en: 'Aware of req and res?', bn: 'req এবং res সম্পর্কে অবগত?' }
      ],
      rows: [
        [
          { en: 'Router (routes/users.js)', bn: 'রাউটার (routes/users.js)' },
          { en: 'Maps HTTP paths and methods to specific controllers and guards', bn: 'এইচটিটিপি পাথ ও মেথডকে নির্দিষ্ট কন্ট্রোলার ও গার্ডের সাথে যুক্ত করে' },
          { en: 'No (passes to controller functions)', bn: 'না (কন্ট্রোলার ফাংশনের কাছে পাঠায়)' }
        ],
        [
          { en: 'Controller (controllers/users.js)', bn: 'কন্ট্রোলার (controllers/users.js)' },
          { en: 'Extracts params/body, delegates to services, formats status and JSON', bn: 'ইনপুট বের করে সার্ভিসে পাঠায় এবং স্ট্যাটাস ও জেএসন সাজায়' },
          { en: 'Yes (manages HTTP protocol interactions)', bn: 'হ্যাঁ (এইচটিটিপি প্রোটোকল পরিচালনা করে)' }
        ],
        [
          { en: 'Service (services/users.js)', bn: 'সার্ভিস (services/users.js)' },
          { en: 'Pure domain business calculations, pricing rules, email workflows', bn: 'বিশুদ্ধ ব্যবসায়িক হিসাবনিকাশ, ডিসকাউন্ট রুল ও ইমেইল লজিক' },
          { en: 'No (pure JavaScript functions with plain arguments)', bn: 'না (কেবল সাধারণ আর্গুমেন্ট বিশিষ্ট বিশুদ্ধ ফাংশন)' }
        ],
        [
          { en: 'Model/Repository (models/users.js)', bn: 'মডেল/রিপোজিটরি (models/users.js)' },
          { en: 'Executes database queries against PostgreSQL, MongoDB, or Redis', bn: 'পোস্টগ্রেস, মঙ্গো বা রেডিসে সরাসরি ডাটাবেজ কুয়েরি চালায়' },
          { en: 'No (database driver connections only)', bn: 'না (কেবল ডাটাবেজ ড্রাইভার সংযোগ)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'supertest-testing-code',
      text: {
        en: 'Portless Integration Testing with Supertest Simulation',
        bn: 'সুপারটেস্ট সিমুলেশন সহ পোর্টলেস ইন্টিগ্রেশন টেস্টিং'
      }
    },
    {
      type: 'code',
      code: `const express = require('express');

// 1. Decoupled Service Layer: Pure business logic without Express awareness
const OrderService = {
  calculateTotal(items, discountRate = 0) {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = subtotal * discountRate;
    return { subtotal, discount, total: subtotal - discount };
  }
};

// 2. Decoupled Controller Layer: Translates HTTP to Service and back
const OrderController = {
  checkout(req, res) {
    const { items, discountRate } = req.body;
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: 'Order must contain items array' });
    }
    const calculation = OrderService.calculateTotal(items, discountRate);
    return res.status(200).json({ success: true, order: calculation });
  }
};

// 3. Application instance without app.listen() call (app.js)
const app = express();
app.use(express.json());
app.post('/api/v1/orders/checkout', OrderController.checkout);

// 4. Test execution verification
const testItems = [
  { name: 'Microservice Design', price: 40, quantity: 2 },
  { name: 'Node Internals', price: 20, quantity: 1 }
];
const result = OrderService.calculateTotal(testItems, 0.1);
console.log('Order total calculated:', result.total);
// -> Order total calculated: 90
console.log('Calculated discount amount:', result.discount);
// -> Calculated discount amount: 10`,
      caption: {
        en: 'Pure service calculation with 90 total and 10 discount',
        bn: '৯০ মোট মূল্য এবং ১০ ছাড় সহ বিশুদ্ধ সার্ভিস ক্যালকুলেশন'
      }
    },
    {
      type: 'heading',
      id: 'portless-testing-benefits',
      text: {
        en: 'The Architectural Value of Portless Testing',
        bn: 'পোর্টলেস টেস্টিংয়ের আর্কিটেকচারাল সুবিধা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When automated CI/CD pipelines run integration tests, binding Express servers to real network ports causes flaky test runs due to EADDRINUSE port collisions when multiple test worker processes run concurrently. Supertest passes the Express app directly into the Node.js internal HTTP request simulator, eliminating all port requirements.',
        bn: 'সিআই/সিডি অটোমেশনে যখন টেস্ট চালানো হয়, তখন একাধিক টেস্ট প্রসেস একই সাথে চললে EADDRINUSE পোর্ট কনফ্লিক্ট দেখা দেয়। সুপারটেস্ট এক্সপ্রেস অ্যাপটিকে সরাসরি নোড.জেএস-এর অভ্যন্তরীণ এইচটিটিপি রিকোয়েস্ট সিমুলেটরে পাঠায়, যার ফলে কোনো নেটওয়ার্ক পোর্ট খোলার প্রয়োজন হয় না।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Separate app from server: Keep app.js (routes and middleware) decoupled from server.js (app.listen on PORT).',
          bn: '১. অ্যাপ ও সার্ভার পৃথকীকরণ: app.js (রুট ও মিডেলওয়্যার) থেকে server.js (পোর্টে app.listen)-কে সম্পূর্ণ আলাদা রাখুন।'
        },
        {
          en: '2. Zero Port Collisions: In Supertest test suites, import app directly without calling server.listen to avoid EADDRINUSE.',
          bn: '২. পোর্ট সংঘাতহীন টেস্ট: সুপারটেস্টে সরাসরি app ইমপোর্ট করুন, server.listen কল করা পরিহার করুন যাতে পোর্ট কনফ্লিক্ট না হয়।'
        },
        {
          en: '3. Pure Business Logic in Services: Write business rules in plain JavaScript functions so unit tests need zero mocks.',
          bn: '৩. সার্ভিসে বিশুদ্ধ লজিক: ব্যবসায়িক নিয়মগুলো সাধারণ ফাংশনে লিখুন যাতে সহজে মক ছাড়াই ইউনিট টেস্ট করা যায়।'
        },
        {
          en: '4. Structure Logs with Pino: Use structured JSON logging with request IDs rather than console.log to support production log indexers.',
          bn: '৪. পিনো দিয়ে স্ট্রাকচার্ড লগিং: প্রোডাকশন ক্লাউডে সার্চ করার সুবিধার্থে console.log-এর বদলে রিকোয়েস্ট আইডিসহ জেএসন লগিং ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'exp-arch-ex1',
      kind: 'mcq',
      topic: 'app js vs server js decoupling',
      question: {
        en: 'Why is separating app.js (Express configuration) from server.js (calling app.listen) considered an essential architectural standard?',
        bn: 'app.js (এক্সপ্রেস কনফিগারেশন) থেকে server.js (app.listen কল)-কে আলাদা রাখা কেন একটি অপরিহার্য আর্কিটেকচারাল মানদণ্ড?'
      },
      options: [
        {
          en: 'It enables automated testing tools like Supertest to import and test the Express app in-memory without opening a real network TCP port that could collide in CI',
          bn: 'এটি সুপারটেস্টের মতো টেস্টিং টুলকে কোনো আসল নেটওয়ার্ক টিসিপি পোর্ট না খুলেই মেমরির ভেতর টেস্ট চালানোর সুযোগ দেয়, ফলে সিআই রানারে পোর্ট কনফ্লিক্ট ঘটে না'
        },
        {
          en: 'It reduces the size of the node_modules folder by 40 percent',
          bn: 'এটি node_modules ফোল্ডারের আকার ৪০ শতাংশ সংকুচিত করে'
        },
        {
          en: 'Node.js throws a syntax error if app.listen is declared in the same file as app.use',
          bn: 'একই ফাইলে app.listen এবং app.use একসাথে লিখলে নোড.জেএস সিনট্যাক্স এরর দেয়'
        },
        {
          en: 'It is required by the ECMAScript 2026 specification',
          bn: 'এটি একমাস্ক্রিপ্ট ২০২৬ স্পেসিফিকেশন অনুযায়ী একটি বাধ্যতামূলক নিয়ম'
        }
      ],
      answer: 0,
      hint: {
        en: 'It isolates network binding from HTTP request routing logic.',
        bn: 'এটি নেটওয়ার্ক পোর্ট বাইন্ডিং থেকে এইচটিটিপি রাউটিং লজিককে সম্পূর্ণ আলাদা রাখে।'
      },
      explanation: {
        en: 'Separating app definition from port binding allows Supertest to exercise routes in memory without network overhead or EADDRINUSE conflicts during parallel test runs.',
        bn: 'অ্যাপ ও পোর্ট আলাদা রাখলে প্যারালাল টেস্ট চলার সময় কোনো পোর্ট ব্যস্ততার ঝামেলা ছাড়াই সুপারটেস্ট মেমরিতে সরাসরি রুটগুলো টেস্ট করতে পারে।'
      }
    },
    {
      id: 'exp-arch-ex2',
      kind: 'mcq',
      topic: 'service layer responsibility',
      question: {
        en: 'What is the primary role of the Service Layer in an enterprise Express layered architecture?',
        bn: 'একটি এন্টারপ্রাইজ এক্সপ্রেস লেয়ার্ড আর্কিটেকচারে সার্ভিস লেয়ারের প্রধান দায়িত্ব কী?'
      },
      options: [
        {
          en: 'To execute pure business domain logic, financial computations, and multi-model coordination completely decoupled from Express req and res objects',
          bn: 'এক্সপ্রেস req বা res অবজেক্টের ওপর নির্ভরশীল না হয়ে বিশুদ্ধ ব্যবসায়িক লজিক, হিসাবনিকাশ এবং একাধিক মডেলের সমন্বয় সাধন করা'
        },
        {
          en: 'To inspect client IP addresses and send 403 Forbidden responses',
          bn: 'ক্লায়েন্টের আইপি পরীক্ষা করা এবং ৪০৩ ফরবিডেন রেসপন্স পাঠানো'
        },
        {
          en: 'To compile CSS and Sass files into browser stylesheets',
          bn: 'সিএসএস ও স্যাস ফাইলগুলোকে ব্রাউজার স্টাইলশিটে কম্পাইল করা'
        },
        {
          en: 'To bind the HTTP server to a TCP network socket',
          bn: 'এইচটিটিপি সার্ভারকে টিসিপি নেটওয়ার্ক সকেটে যুক্ত করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Service layer has no knowledge of HTTP protocols or Express primitives.',
        bn: 'সার্ভিস লেয়ারের এইচটিটিপি প্রোটোকল বা এক্সপ্রেস ফ্রেমওয়ার্ক সম্পর্কে কোনো ধারণাই থাকে না।'
      },
      explanation: {
        en: 'Services contain framework-agnostic domain logic. They accept plain JavaScript inputs and return domain results, making them trivial to unit-test without HTTP mocks.',
        bn: 'সার্ভিস ফ্রেমওয়ার্ক-স্বাধীন সাধারণ জাভাস্ক্রিপ্ট কোড। এটি কোনো এইচটিটিপি মক ছাড়াই সহজে বিশুদ্ধ ইউনিট টেস্টের উপযোগী।'
      }
    },
    {
      id: 'exp-arch-ex3',
      kind: 'mcq',
      topic: 'supertest in memory execution',
      question: {
        en: 'How does Supertest execute HTTP requests against an Express application instance under the hood?',
        bn: 'সুপারটেস্ট কীভাবে পর্দার আড়ালে এক্সপ্রেস অ্যাপ্লিকেশনের ওপর এইচটিটিপি রিকোয়েস্ট কার্যকর করে?'
      },
      options: [
        {
          en: 'It directly passes simulated HTTP request stream events into the Express app callable function without opening a physical OS TCP socket',
          bn: 'কোনো ফিজিক্যাল ওএস টিসিপি সকেট না খুলেই এটি সরাসরি সিমুলেটেড রিকোয়েস্ট স্ট্রিম এক্সপ্রেস অ্যাপ্লিকেশন ফাংশনে পাস করে'
        },
        {
          en: 'It sends requests across the public internet through Google Public DNS',
          bn: 'এটি গুগল পাবলিক ডিএনএসের মাধ্যমে পাবলিক ইন্টারনেটে রিকোয়েস্ট পাঠায়'
        },
        {
          en: 'It opens an SSH tunnel to a remote staging server',
          bn: 'এটি দূরবর্তী স্টেজিং সার্ভারে একটি এসএসএইচ টানেল খোলে'
        },
        {
          en: 'It writes the request into a temporary JSON file on the hard drive',
          bn: 'এটি হার্ডড্রাইভের একটি অস্থায়ী জেএসন ফাইলে রিকোয়েস্ট লিখে রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Supertest operates on the in-memory Node.js HTTP server interface.',
        bn: 'সুপারটেস্ট মেমরিতে থাকা নোড.জেএস এইচটিটিপি সার্ভার ইন্টারফেসের সাথে সরাসরি যোগাযোগ করে।'
      },
      explanation: {
        en: 'Supertest wraps the Node.js http.Server interface directly, piping request and response streams in-memory without listening on a physical network port.',
        bn: 'সুপারটেস্ট নোড.জেএস সার্ভারের ইন্টারফেসে মেমরির ভেতর স্ট্রিম আদান-প্রদান করে, কোনো বাহ্যিক পোর্টের প্রয়োজন পড়ে না।'
      }
    },
    {
      id: 'exp-arch-ex4',
      kind: 'mcq',
      topic: 'structured logging vs console log',
      question: {
        en: 'Why do production Express architectures replace console.log() with a structured JSON logger like Pino or Winston?',
        bn: 'প্রোডাকশন এক্সপ্রেস আর্কিটেকচারে কেন console.log()-এর বদলে পিনো বা উইনস্টনের মতো স্ট্রাকচার্ড জেএসন লগার ব্যবহার করা হয়?'
      },
      options: [
        {
          en: 'Structured JSON log lines include timestamps, correlation IDs, log levels, and request metadata that log aggregators (Datadog, Elastic) can parse and index at high speed',
          bn: 'স্ট্রাকচার্ড জেএসন লগে টাইমস্ট্যাম্প, রিকোয়েস্ট আইডি ও মেটাডাটা থাকে যা সেন্ট্রাল লগ এগ্রিগেটররা (Datadog, Elastic) দ্রুত সার্চ ও ইনডেক্স করতে পারে'
        },
        {
          en: 'console.log is completely disabled by the Linux kernel in production',
          bn: 'প্রোডাকশনে লিনাক্স কার্নেল console.log সম্পূর্ণ বন্ধ করে দেয়'
        },
        {
          en: 'JSON logs automatically translate English error messages into Spanish',
          bn: 'জেএসন লগ স্বয়ংক্রিয়ভাবে ইংরেজি এরর মেসেজ স্প্যানিশ ভাষায় রূপান্তর করে'
        },
        {
          en: 'Winston reduces server CPU temperature by 10 degrees Celsius',
          bn: 'উইনস্টন সার্ভারের সিপিইউ তাপমাত্রা ১০ ডিগ্রি সেলসিয়াস কমিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Machine-readable structured logs are mandatory for enterprise observability.',
        bn: 'মেশিন দ্বারা সহজে পাঠযোগ্য স্ট্রাকচার্ড লগ এন্টারপ্রাইজ সিস্টেম পর্যবেক্ষণে বাধ্যতামূলক।'
      },
      explanation: {
        en: 'Structured loggers output NDJSON (newline-delimited JSON) lines containing correlation IDs and error stacks that centralized log engines easily query during outages.',
        bn: 'স্ট্রাকচার্ড লগার এক লাইনের সুন্দর জেএসন তৈরি করে যাতে রিকোয়েস্ট আইডি ও স্ট্যাক ট্রেস থাকে, ফলে যেকোনো ক্র্যাশের কারণ মুহূর্তেই সার্চ করে বের করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-grand-service-quiz',
    title: {
      en: 'Production Architecture & Testing Quiz',
      bn: 'প্রোডাকশন আর্কিটেকচার ও টেস্টিং কুইজ'
    },
    questions: [
      {
        id: 'q-controller-layer-duty',
        kind: 'mcq',
        topic: 'controller layer primary duty',
        question: {
          en: 'In clean layered architecture, what should an Express controller NEVER do directly?',
          bn: 'পরিচ্ছন্ন লেয়ার্ড আর্কিটেকচারে একটি এক্সপ্রেস কন্ট্রোলারের কখনোই সরাসরি কোন কাজটি করা উচিত নয়?'
        },
        options: [
          {
            en: 'Execute direct raw SQL queries against the database or perform complex business calculations; it should delegate these to Models and Services',
            bn: 'সরাসরি ডাটাবেজে র এসকিউএল কুয়েরি চালানো বা জটিল ব্যবসায়িক হিসাব করা; এর বদলে এগুলো মডেল ও সার্ভিসে পাঠানো উচিত'
          },
          {
            en: 'Inspect the incoming req.body or req.params data',
            bn: 'ইনকামিং req.body বা req.params ডাটা পরীক্ষা করা'
          },
          {
            en: 'Set HTTP response status codes like 200 or 201',
            bn: 'এইচটিটিপি রেসপন্স স্ট্যাটাস কোড যেমন ২০০ বা ২০১ নির্ধারণ করা'
          },
          {
            en: 'Return JSON data payloads using res.json()',
            bn: 'res.json() ব্যবহার করে জেএসন ডাটা ক্লায়েন্টকে ফেরত পাঠানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'Controllers are HTTP coordinators, not database engines or business calculators.',
          bn: 'কন্ট্রোলার হলো এইচটিটিপির সমন্বয়কারী, ডাটাবেজ ইঞ্জিন বা ব্যবসায়িক ক্যালকুলেটর নয়।'
        },
        explanation: {
          en: 'Controllers should be thin coordinators. They read HTTP requests, call domain services, and return HTTP responses. Database access belongs in the data access layer.',
          bn: 'কন্ট্রোলারকে হালকা রাখতে হয়। তারা শুধু রিকোয়েস্ট গ্রহণ করে সার্ভিসে পাঠায় এবং ফলাফল ক্লায়েন্টকে দেয়। ডাটাবেজের কাজ কেবল মডেলের দায়িত্ব।'
        }
      },
      {
        id: 'q-correlation-id-tracing',
        kind: 'mcq',
        topic: 'request correlation id tracing',
        question: {
          en: 'What is the architectural purpose of injecting a unique correlation ID (e.g. X-Request-Id) at the top of the Express middleware pipeline?',
          bn: 'এক্সপ্রেস মিডেলওয়্যার পাইপলাইনের একদম শুরুতে একটি ইউনিক কোরিলেশন আইডি (X-Request-Id) যুক্ত করার উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'It enables distributed tracing by linking all log messages, database queries, and downstream microservice calls triggered by that single user action under one traceable ID',
            bn: 'এটি একটিমাত্র রিকোয়েস্ট থেকে তৈরি সমস্ত লগ, ডাটাবেজ কুয়েরি এবং মাইক্রোসার্ভিস কলকে একটি একক আইডির সাথে যুক্ত করে সম্পূর্ণ গতিবিধি ট্র্যাক করতে দেয়'
          },
          {
            en: 'It guarantees the user cannot submit more than one form per day',
            bn: 'এটি নিশ্চিত করে যে ব্যবহারকারী দিনে একাধিক ফর্ম জমা দিতে পারবে না'
          },
          {
            en: 'It replaces the need for user passwords and two-factor authentication',
            bn: 'এটি পাসওয়ার্ড ও টু-ফ্যাক্টর অথেনটিকেশনের প্রয়োজনীয়তা বাতিল করে'
          },
          {
            en: 'It accelerates browser rendering speed on mobile Safari browsers',
            bn: 'এটি মোবাইল সাফারি ব্রাউজারে রেন্ডারিং গতি বৃদ্ধি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Correlation IDs tie all logs across microservices to a single HTTP transaction.',
          bn: 'কোরিলেশন আইডি মাইক্রোসার্ভিসগুলোর সমস্ত লগকে একটি নির্দিষ্ট রিকোয়েস্টের সাথে বেঁধে রাখে।'
        },
        explanation: {
          en: 'A correlation ID flows through logs, RPC calls, and database traces. When an error occurs, engineers query that single ID to reconstruct the exact timeline of the failure.',
          bn: 'কোরিলেশন আইডি সমস্ত লগ এবং ডাটাবেজ অপারেশনে ছড়িয়ে যায়। কোনো এরর ঘটলে ওই আইডি দিয়ে সার্চ করলেই পুরো ঘটনার ক্রম নিখুঁতভাবে দেখা যায়।'
        }
      },
      {
        id: 'q-supertest-assertion-pattern',
        kind: 'mcq',
        topic: 'supertest assertion syntax',
        question: {
          en: 'Which Supertest assertion pattern correctly verifies that a POST endpoint returns a 201 status and JSON Content-Type?',
          bn: 'কোন সুপারটেস্ট অ্যাসারশন প্যাটার্নটি সঠিকভাবে পরীক্ষা করে যে একটি POST এন্ডপয়েন্ট ২০১ স্ট্যাটাস এবং JSON হেডার পাঠিয়েছে?'
        },
        options: [
          {
            en: 'await request(app).post("/api/items").send(payload).expect("Content-Type", /json/).expect(201);',
            bn: 'await request(app).post("/api/items").send(payload).expect("Content-Type", /json/).expect(201);'
          },
          {
            en: 'app.assertResponse(201, "json")',
            bn: 'app.assertResponse(201, "json")'
          },
          {
            en: 'request.post.checkStatusEquals(201)',
            bn: 'request.post.checkStatusEquals(201)'
          },
          {
            en: 'test.verifyHttpPacket(app, 201)',
            bn: 'test.verifyHttpPacket(app, 201)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Supertest chains expectations using the .expect() helper method.',
          bn: 'সুপারটেস্ট প্রত্যাশিত মান যাচাই করতে চেইনেবল .expect() মেথড ব্যবহার করে।'
        },
        explanation: {
          en: 'Supertest provides fluent .expect() methods to assert HTTP status codes, headers, and body shapes on the resulting response object.',
          bn: 'সুপারটেস্টে সাবলীল .expect() মেথড দিয়ে এইচটিটিপি স্ট্যাটাস কোড এবং রেসপন্স হেডার নিখুঁতভাবে যাচাই করা যায়।'
        }
      },
      {
        id: 'q-unit-vs-integration-in-express',
        kind: 'mcq',
        topic: 'unit testing services vs integration testing routes',
        question: {
          en: 'In a professional Express test pyramid, how do unit tests of the Service Layer differ from integration tests of the API routes?',
          bn: 'একটি পেশাদার এক্সপ্রেস টেস্ট পিরামিডে সার্ভিস লেয়ারের ইউনিট টেস্টের সাথে এপিআই রুটের ইন্টিগ্রেশন টেস্টের মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'Unit tests verify pure business logic functions in isolation without HTTP or database overhead; integration tests verify the entire pipeline (middleware, routing, controllers, and database) end-to-end',
            bn: 'ইউনিট টেস্ট কোনো এইচটিটিপি বা ডাটাবেজ ছাড়াই বিশুদ্ধ ব্যবসায়িক ফাংশন পরীক্ষা করে; আর ইন্টিগ্রেশন টেস্ট শুরু থেকে শেষ পর্যন্ত পুরো পাইপলাইন (মিডেলওয়্যার, রুট, কন্ট্রোলার ও ডাটাবেজ) যাচাই করে'
          },
          {
            en: 'Unit tests run in production on live customer traffic; integration tests run on developers laptops',
            bn: 'ইউনিট টেস্ট প্রোডাকশনে আসল কাস্টমারের ট্রাফিকে চলে; আর ইন্টিগ্রেশন টেস্ট ডেভেলপারদের ল্যাপটপে চলে'
          },
          {
            en: 'Unit tests must always be written in Python; integration tests are written in JavaScript',
            bn: 'ইউনিট টেস্ট সর্বদা পাইথনে লিখতে হয়; আর ইন্টিগ্রেশন টেস্ট জাভাস্ক্রিপ্টে লেখা হয়'
          },
          {
            en: 'There is no difference; unit and integration testing are identical concepts in Node.js',
            bn: 'উভয়ের মধ্যে কোনো পার্থক্য নেই; নোড.জেএস-এ ইউনিট ও ইন্টিগ্রেশন টেস্ট একই জিনিস'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unit tests isolate single components; integration tests verify collaborating systems.',
          bn: 'ইউনিট টেস্ট একক অংশ পরীক্ষা করে; ইন্টিগ্রেশন টেস্ট পুরো সিস্টেমের মেলবন্ধন যাচাই করে।'
        },
        explanation: {
          en: 'Service unit tests execute in microseconds because they test plain functions with simple inputs. Route integration tests verify that middleware, parsers, and controllers cooperate correctly.',
          bn: 'সার্ভিস ইউনিট টেস্ট মাইক্রোসেকেন্ডে শেষ হয় কারণ সেখানে কোনো নেটওয়ার্ক থাকে না। আর রুট ইন্টিগ্রেশন টেস্ট নিশ্চিত করে যে মিডেলওয়্যার, কন্ট্রোলার ও ডাটাবেজ একসাথে ঠিকঠাক কাজ করছে।'
        }
      }
    ]
  }
};
