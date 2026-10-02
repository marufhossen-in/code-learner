import type { Lesson } from '../../../lib/types';

export const SeasoningEveryPlateLesson: Lesson = {
  slug: 'seasoning-every-plate',
  tech: 'express',
  title: {
    en: 'Middleware Pipeline — Execution Order, Next Function & Error Handling',
    bn: 'মিডেলওয়্যার পাইপলাইন — এক্সিকিউশন ক্রম, নেক্সট ফাংশন ও এরর হ্যান্ডলিং'
  },
  summary: {
    en: 'Middleware functions form the operational backbone of Express applications. In this comprehensive lesson, you will master the sequential execution pipeline, request object augmentation, asynchronous error wrapping with asyncHandler, and centralized 4-argument error-handling middleware architectures.',
    bn: 'মিডেলওয়্যার ফাংশনগুলো হলো এক্সপ্রেস অ্যাপ্লিকেশনের মূল কার্যনির্বাহী ভিত্তি। এই গভীর পাঠে আপনি মিডেলওয়্যারের ধারাবাহিক এক্সিকিউশন পাইপলাইন, রিকোয়েস্ট অবজেক্ট সমৃদ্ধকরণ, asyncHandler দিয়ে অ্যাসিনক্রোনাস এরর হ্যান্ডলিং এবং কেন্দ্রীভূত ৪-আর্গুমেন্ট এরর হ্যান্ডলার আর্কিটেকচার বিস্তারিত শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'middleware-architecture-overview',
      text: {
        en: 'The Express Middleware Execution Pipeline',
        bn: 'এক্সপ্রেস মিডেলওয়্যার এক্সিকিউশন পাইপলাইন'
      }
    },
    {
      type: 'visual',
      id: 'event-loop'
    },
    {
      type: 'para',
      text: {
        en: 'When you build an Express backend, every incoming HTTP request flows sequentially through a pipeline of middleware functions before reaching the final route handler. Each middleware receives the request object, response object, and a callback named next, allowing it to inspect headers, authenticate credentials, or modify the request payload.',
        bn: 'যখন আপনি একটি এক্সপ্রেস ব্যাকএন্ড তৈরি করেন, তখন প্রতিটি ইনকামিং এইচটিটিপি রিকোয়েস্ট মূল রুট হ্যান্ডলারে পৌঁছানোর আগে ধারাবাহিক মিডেলওয়্যার পাইপলাইনের মধ্য দিয়ে অতিক্রম করে। প্রতিটি মিডেলওয়্যার রিকোয়েস্ট অবজেক্ট, রেসপন্স অবজেক্ট এবং next নামের একটি কলব্যাক ফাংশন গ্রহণ করে, যা দিয়ে হেডার পরীক্ষা, অথেনটিকেশন বা ডাটা পরিবর্তন করা সম্ভব হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Middleware Function',
          def: {
            en: 'A function with access to (req, res, next) that can run code, modify objects, end the response, or invoke the next handler.',
            bn: 'একটি ফাংশন যা (req, res, next) অ্যাক্সেস করতে পারে এবং কোড রান, অবজেক্ট পরিবর্তন, রেসপন্স সমাপ্তি বা পরবর্তী হ্যান্ডলার কল করতে পারে।'
          }
        },
        {
          term: 'next() Callback',
          def: {
            en: 'The execution trigger that hands control over to the subsequent middleware function in the registered stack.',
            bn: 'এক্সিকিউশন ট্রিগার যা মিডেলওয়্যার স্ট্যাকের পরবর্তী ফাংশনটির কাছে রিকোয়েস্টের নিয়ন্ত্রণ হস্তান্তর করে।'
          }
        },
        {
          term: 'asyncHandler Pattern',
          def: {
            en: 'A higher-order function wrapping async route handlers to catch rejected promises and forward them automatically to next(err).',
            bn: 'একটি হায়ার-অর্ডার ফাংশন যা অ্যাসিনক্রোনাস রুট হ্যান্ডলারকে ঘিরে রাখে যাতে যেকোনো প্রমিজ রিজেকশন স্বয়ংক্রিয়ভাবে next(err)-এ পৌঁছে যায়।'
          }
        },
        {
          term: 'Error-Handling Middleware',
          def: {
            en: 'A special middleware registered with exactly four parameters (err, req, res, next) that catches all forwarded application errors.',
            bn: 'ঠিক চারটি প্যারামিটার (err, req, res, next) বিশিষ্ট একটি বিশেষ মিডেলওয়্যার যা অ্যাপ্লিকেশনের সমস্ত ফরোয়ার্ড করা এরর ধারণ করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'next-variants-table',
      text: {
        en: 'The Three Invocations of the next Function',
        bn: 'next ফাংশনের তিনটি ভিন্ন ব্যবহার'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Invocation', bn: 'ইনভোকেশন' },
        { en: 'Control Flow Action', bn: 'কন্ট্রোল ফ্লো অ্যাকশন' },
        { en: 'Common Use Case', bn: 'সাধারণ ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'next()', bn: 'next()' },
          { en: 'Passes execution to the very next middleware in the stack', bn: 'স্ট্যাকের ঠিক পরবর্তী মিডেলওয়্যার ফাংশনের কাছে নিয়ন্ত্রণ পাঠায়' },
          { en: 'Logging, attaching timestamps, body preprocessing', bn: 'লগিং, টাইমস্ট্যাম্প যুক্ত করা, ডাটা প্রি-প্রসেসিং' }
        ],
        [
          { en: 'next("route")', bn: 'next("route")' },
          { en: 'Skips all remaining middleware in the current route handler', bn: 'বর্তমান রুটের বাকি সমস্ত মিডেলওয়্যার এড়িয়ে পরের রুটে চলে যায়' },
          { en: 'Bypassing special handling when conditions are not met', bn: 'শর্ত পূরণ না হলে বিকল্প রুটে নিয়ন্ত্রণ পাঠানো' }
        ],
        [
          { en: 'next(error)', bn: 'next(error)' },
          { en: 'Bypasses all standard middleware and jumps to the error handler', bn: 'সমস্ত সাধারণ মিডেলওয়্যার বাদ দিয়ে সরাসরি এরর হ্যান্ডলারে লাফ দেয়' },
          { en: 'Database query failures, invalid tokens, validation errors', bn: 'ডাটাবেজ কুয়েরি ব্যর্থতা, অবৈধ টোকেন, ভ্যালিডেশন এরর' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'middleware-pipeline-code',
      text: {
        en: 'Production Middleware Stack and Centralized Error Handling',
        bn: 'প্রোডাকশন মিডেলওয়্যার স্ট্যাক ও কেন্দ্রীভূত এরর হ্যান্ডলিং'
      }
    },
    {
      type: 'code',
      code: `const express = require('express');
const app = express();

// 1. Asynchronous handler wrapper to catch unhandled promise rejections
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// 2. Custom operational error class
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

// 3. Application-level request timing middleware
let requestCounter = 0;
app.use((req, res, next) => {
  requestCounter += 1;
  req.requestTime = 1711500000;
  next();
});

// 4. Async route throwing operational error
app.get('/api/users/:id', asyncHandler(async (req, res, next) => {
  if (req.params.id === '999') {
    throw new AppError('User not found in database', 404);
  }
  res.json({ id: req.params.id, name: 'Alice' });
}));

// 5. Centralized 4-argument error-handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    status: 'error',
    statusCode: statusCode,
    message: err.message
  });
});

console.log('Processed requests count:', requestCounter);
// -> Process processed requests count: 0
const testError = new AppError('Item missing', 404);
console.log('Operational error code:', testError.statusCode);
// -> Operational error code: 404`,
      caption: {
        en: 'Centralized error handling with asyncHandler and custom AppError',
        bn: 'asyncHandler এবং কাস্টম AppError দিয়ে কেন্দ্রীভূত এরর হ্যান্ডলিং'
      }
    },
    {
      type: 'heading',
      id: 'error-handling-architecture',
      text: {
        en: 'Four-Parameter Error Middleware Architecture',
        bn: 'চার-প্যারামিটার এরর মিডেলওয়্যার আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Express inspects function.length to determine whether a callback is standard routing middleware (length 3) or error-handling middleware (length 4). If you define an error handler with only three parameters, Express treats it as regular middleware, completely breaking error propagation.',
        bn: 'এক্সপ্রেস জাভাস্ক্রিপ্ট ফাংশনের প্যারামিটার সংখ্যা (function.length) মেপে নির্ধারণ করে এটি সাধারণ মিডেলওয়্যার (৩টি আর্গুমেন্ট) নাকি এরর হ্যান্ডলার (৪টি আর্গুমেন্ট)। আপনি যদি এরর হ্যান্ডলারে ৩টি আর্গুমেন্ট দেন, তবে এক্সপ্রেস এটিকে সাধারণ মিডেলওয়্যার ভেবে এরর এড়িয়ে চলে যাবে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Arity Matters: Always declare all 4 parameters (err, req, res, next) even if next is not explicitly called.',
          bn: '১. প্যারামিটার সংখ্যা জরুরি: next সরাসরি কল না করলেও সর্বদা ৪টি প্যারামিটারই (err, req, res, next) ঘোষণা করুন।'
        },
        {
          en: '2. Mount Last: Always place centralized error-handling middleware at the very bottom of the file after all routes.',
          bn: '২. একদম নিচে স্থাপন: সমস্ত রুট সংজ্ঞার পর ফাইলের একদম নিচে এরর হ্যান্ডলার মিডেলওয়্যার যুক্ত করুন।'
        },
        {
          en: '3. Wrap Async: In Express 4, throw inside async functions does not trigger error middleware without asyncHandler or try/catch.',
          bn: '৩. অ্যাসিনক্রোনাস র্যাপার: এক্সপ্রেস ৪-এ async ফাংশনের ভেতরের throw নিজে থেকে এরর হ্যান্ডলারে যায় না, asyncHandler লাগে।'
        },
        {
          en: '4. Distinguish Operational Errors: Distinguish predictable operational errors (404, 400) from unexpected programming bugs (500).',
          bn: '৪. এরর পার্থক্যকরণ: অনুমেয় অপারেশনাল এরর (৪০৪, ৪০০) এবং অনাকাঙ্ক্ষিত প্রোগ্রামিং বাগ (৫০০)-এর মধ্যে পার্থক্য বজায় রাখুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'exp-mid-ex1',
      kind: 'mcq',
      topic: 'express error handler arity requirement',
      question: {
        en: 'How does Express internally recognize that a middleware function is designed to handle errors rather than standard requests?',
        bn: 'এক্সপ্রেস কীভাবে শনাক্ত করে যে একটি মিডেলওয়্যার ফাংশন সাধারণ রিকোয়েস্টের বদলে এরর হ্যান্ডল করার জন্য তৈরি?'
      },
      options: [
        {
          en: 'By inspecting the function arity: error handlers must declare exactly 4 parameters (err, req, res, next)',
          bn: 'ফাংশনের প্যারামিটার সংখ্যা দেখে: এরর হ্যান্ডলারে ঠিক ৪টি প্যারামিটার (err, req, res, next) থাকতে হয়'
        },
        {
          en: 'By requiring the function name to start with "handleError"',
          bn: 'ফাংশনের নাম "handleError" দিয়ে শুরু হওয়া বাধ্যতামূলক করে'
        },
        {
          en: 'By requiring an @ErrorHandler decorator on the function',
          bn: 'ফাংশনের ওপর @ErrorHandler ডেকোরেটর ব্যবহার বাধ্যতামূলক করে'
        },
        {
          en: 'By placing the function inside a folder named /errors',
          bn: 'ফাংশনটিকে /errors নামের ফোল্ডারে রাখার মাধ্যমে'
        }
      ],
      answer: 0,
      hint: {
        en: 'JavaScript functions report the number of formal parameters via the length property.',
        bn: 'জাভাস্ক্রিপ্ট ফাংশন তার formal প্যারামিটারের সংখ্যা length প্রোপার্টির মাধ্যমে প্রকাশ করে।'
      },
      explanation: {
        en: 'Express checks fn.length === 4. Only functions declaring 4 arguments are registered as error-handling middleware.',
        bn: 'এক্সপ্রেস fn.length === 4 পরীক্ষা করে। কেবল যে ফাংশনে ঠিক ৪টি আর্গুমেন্ট থাকে সেটিকেই এরর মিডেলওয়্যার হিসেবে বিবেচনা করা হয়।'
      }
    },
    {
      id: 'exp-mid-ex2',
      kind: 'mcq',
      topic: 'async error handling pitfall in express 4',
      question: {
        en: 'What happens in Express 4 when an unhandled exception is thrown inside an async route handler without a try/catch or asyncHandler wrapper?',
        bn: 'এক্সপ্রেস ৪-এ try/catch বা asyncHandler ছাড়া কোনো async রুট হ্যান্ডলারে এরর ঘটলে কী ঘটে?'
      },
      options: [
        {
          en: 'An unhandled promise rejection occurs, the request hangs indefinitely without a response, and the client eventually times out',
          bn: 'একটি আনহ্যান্ডলড প্রমিজ রিজেকশন ঘটে, ক্লায়েন্ট কোনো রেসপন্স না পেয়ে রিকোয়েস্ট ঝুলে থাকে এবং শেষ পর্যন্ত টাইমআউট হয়'
        },
        {
          en: 'Express automatically returns a 200 OK status code with an empty JSON object',
          bn: 'এক্সপ্রেস স্বয়ংক্রিয়ভাবে খালি জেএসন অবজেক্ট সহ ২০০ স্ট্যাটাস কোড পাঠায়'
        },
        {
          en: 'The server restarts automatically using clustering mode',
          bn: 'সার্ভারটি ক্লাস্টারিং মোড ব্যবহার করে স্বয়ংক্রিয়ভাবে রিস্টার্ট নেয়'
        },
        {
          en: 'Node.js opens a browser window displaying the stack trace',
          bn: 'নোড.জেএস একটি ব্রাউজার উইন্ডো খুলে স্ট্যাক ট্রেস প্রদর্শন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Express 4 does not natively intercept rejected Promises returned by route handlers.',
        bn: 'এক্সপ্রেস ৪ নিজে থেকে রুট হ্যান্ডলারের রিজেক্টেড প্রমিজ ক্যাপচার করতে পারে না।'
      },
      explanation: {
        en: 'In Express 4, route handlers returning rejected promises do not automatically forward errors to next(err), leaving connections hanging.',
        bn: 'এক্সপ্রেস ৪-এ প্রমিজ রিজেক্ট হলে তা নিজে থেকে next(err)-এ যায় না, ফলে ক্লায়েন্টের সংযোগটি অনির্দিষ্টকালের জন্য ঝুলে থাকে।'
      }
    },
    {
      id: 'exp-mid-ex3',
      kind: 'mcq',
      topic: 'skipping to error handling with next',
      question: {
        en: 'Which method call immediately instructs Express to stop standard pipeline execution and jump directly to the next error-handling middleware?',
        bn: 'কোন মেথড কল এক্সপ্রেসকে সাধারণ পাইপলাইন বন্ধ করে সরাসরি এরর হ্যান্ডলিং মিডেলওয়্যারে চলে যাওয়ার নির্দেশ দেয়?'
      },
      options: [
        {
          en: 'next(new Error("Something failed"))',
          bn: 'next(new Error("Something failed"))'
        },
        {
          en: 'next()',
          bn: 'next()'
        },
        {
          en: 'next("skip")',
          bn: 'next("skip")'
        },
        {
          en: 'res.error()',
          bn: 'res.error()'
        }
      ],
      answer: 0,
      hint: {
        en: 'Passing any argument (except the string "route") to next triggers error mode.',
        bn: 'next-এর ভেতর ("route" স্ট্রিং বাদে) যেকোনো আর্গুমেন্ট পাঠালে তা এরর মোড সক্রিয় করে।'
      },
      explanation: {
        en: 'When any argument other than "route" is passed to next(), Express treats it as an error and routes control directly to error handlers.',
        bn: 'next() ফাংশনে "route" ব্যতীত অন্য কোনো আর্গুমেন্ট পাঠালে এক্সপ্রেস তাকে এরর হিসেবে চিহ্নিত করে সরাসরি এরর হ্যান্ডলারে পাঠায়।'
      }
    },
    {
      id: 'exp-mid-ex4',
      kind: 'mcq',
      topic: 'decorating req object in middleware',
      question: {
        en: 'How should authentication middleware make the decoded user object available to downstream route handlers?',
        bn: 'অথেনটিকেশন মিডেলওয়্যার কীভাবে ডিকোড করা ইউজার অবজেক্টকে পরবর্তী রুট হ্যান্ডলারের কাছে ব্যবহারোপযোগী করে?'
      },
      options: [
        {
          en: 'Attach it directly to the request object, such as req.user = decodedUser, before calling next()',
          bn: 'next() কল করার আগে সরাসরি রিকোয়েস্ট অবজেক্টে req.user = decodedUser হিসেবে যুক্ত করে'
        },
        {
          en: 'Save the user object into a global variable shared across all concurrent requests',
          bn: 'সমস্ত রিকোয়েস্টের মাঝে শেয়ার করা একটি গ্লোবাল ভেরিয়েবলে ইউজার অবজেক্ট রেখে'
        },
        {
          en: 'Write the user object to a temporary CSV file on disk',
          bn: 'হার্ডডিস্কের একটি অস্থায়ী সিএসভি ফাইলে ইউজার অবজেক্ট লিখে'
        },
        {
          en: 'Append the user credentials to the response headers',
          bn: 'রেসপন্স হেডারে ব্যবহারকারীর সংবেদনশীল তথ্য সংযুক্ত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The req object is unique to each individual HTTP request transaction.',
        bn: 'req অবজেক্টটি প্রতিটি স্বতন্ত্র এইচটিটিপি রিকোয়েস্টের জন্য সম্পূর্ণ নিজস্ব থাকে।'
      },
      explanation: {
        en: 'Attaching data to req (such as req.user) safely passes request-scoped context downstream without data leaking across concurrent users.',
        bn: 'req অবজেক্টে ডাটা যুক্ত করলে (যেমন req.user) তা শুধুমাত্র সেই রিকোয়েস্টেই সীমাবদ্ধ থাকে এবং অন্যান্য ইউজারের সাথে ডাটা মিশে যায় না।'
      }
    }
  ],
  quiz: {
    id: 'seasoning-every-plate-quiz',
    title: {
      en: 'Express Middleware Pipeline Quiz',
      bn: 'এক্সপ্রেস মিডেলওয়্যার পাইপলাইন কুইজ'
    },
    questions: [
      {
        id: 'q-middleware-execution-hanging',
        kind: 'mcq',
        topic: 'middleware hanging connection bug',
        question: {
          en: 'What occurs if a custom logging middleware function does not call next() and does not send a response?',
          bn: 'যদি একটি কাস্টম লগিং মিডেলওয়্যার ফাংশন next() কল না করে এবং কোনো রেসপন্সও না পাঠায় তবে কী ঘটবে?'
        },
        options: [
          {
            en: 'The HTTP request freezes indefinitely because Express is waiting for instruction to advance or terminate',
            bn: 'এইচটিটিপি রিকোয়েস্টটি আটকে থাকবে কারণ এক্সপ্রেস সামনে এগিয়ে যাওয়ার বা শেষ করার কোনো নির্দেশ পাচ্ছে না'
          },
          {
            en: 'Express automatically generates a 204 No Content response after 500 milliseconds',
            bn: 'এক্সপ্রেস ৫০০ মিলিসেকেন্ড পর স্বয়ংক্রিয়ভাবে ২০৪ নো কনটেন্ট রেসপন্স তৈরি করে'
          },
          {
            en: 'The Node.js garbage collector terminates the active worker thread',
            bn: 'নোড.জেএস গার্বেজ কালেক্টর সক্রিয় ওয়ার্কার থ্রেডটি সাথে সাথে বন্ধ করে দেয়'
          },
          {
            en: 'The incoming HTTP request is automatically forwarded to Google DNS servers',
            bn: 'ইনকামিং এইচটিটিপি রিকোয়েস্টটি স্বয়ংক্রিয়ভাবে গুগল ডিএনএস সার্ভারে চলে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Express middleware requires an explicit handoff via next() or a response termination.',
          bn: 'এক্সপ্রেস মিডেলওয়্যারে স্পষ্টভাবে next() বা রেসপন্স সমাপ্তির নির্দেশ দিতে হয়।'
        },
        explanation: {
          en: 'Without calling next() or returning a response (res.send, res.json), the middleware chain stalls, resulting in a frozen client connection.',
          bn: 'next() না ডাকলে বা রেসপন্স না পাঠালে মিডেলওয়্যার চেইনের কাজ বন্ধ হয়ে থাকে, ফলে ক্লায়েন্টের রিকোয়েস্ট চিরতরে ঝুলে থাকে।'
        }
      },
      {
        id: 'q-asynchandler-internals',
        kind: 'mcq',
        topic: 'how asynchandler works',
        question: {
          en: 'How does the implementation "fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)" catch asynchronous errors?',
          bn: '"fn => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next)" কোডটি কীভাবে অ্যাসিনক্রোনাস এরর ধরে?'
        },
        options: [
          {
            en: 'It wraps the return value of fn in a Promise, ensuring any rejected promise or thrown error triggers .catch(next), forwarding the error to error middleware',
            bn: 'এটি fn-এর রিটার্ন ভ্যালুকে প্রমিজে মোড়ায়, ফলে যেকোনো রিজেকশন .catch(next)-এ ধরা পড়ে এবং এরর মিডেলওয়্যারে চলে যায়'
          },
          {
            en: 'It launches a separate child process for every incoming request',
            bn: 'এটি প্রতিটি ইনকামিং রিকোয়েস্টের জন্য আলাদা চাইল্ড প্রসেস তৈরি করে'
          },
          {
            en: 'It converts JavaScript exceptions into native C++ signals',
            bn: 'এটি জাভাস্ক্রিপ্ট এররগুলোকে নেটিভ C++ সিগন্যালে রূপান্তর করে'
          },
          {
            en: 'It restarts the Express HTTP server automatically upon failure',
            bn: 'ব্যর্থতার সাথে সাথে এটি এক্সপ্রেস এইচটিটিপি সার্ভারকে রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Promise.resolve().catch(next) intercepts rejected asynchronous operations.',
          bn: 'Promise.resolve().catch(next) অ্যাসিনক্রোনাস রিজেকশনগুলোকে সরাসরি আটকে ফেলে।'
        },
        explanation: {
          en: 'Wrapping the handler in Promise.resolve guarantees that asynchronous rejections trigger .catch(next), safely routing errors to centralized error middleware.',
          bn: 'Promise.resolve দিয়ে মুড়ে দিলে নিশ্চিত হওয়া যায় যে যেকোনো রিজেকশন .catch(next)-এ ধরা পড়বে এবং এরর মিডেলওয়্যারে চলে যাবে।'
        }
      },
      {
        id: 'q-operational-vs-programmer-errors',
        kind: 'mcq',
        topic: 'operational error classification',
        question: {
          en: 'Why is it considered a best practice to mark custom errors with an "isOperational = true" boolean property?',
          bn: 'কাস্টম এররে "isOperational = true" বুলিয়ান প্রোপার্টি যুক্ত করা কেন সর্বোত্তম অনুশীলন হিসেবে বিবেচিত হয়?'
        },
        options: [
          {
            en: 'It differentiates expected runtime failures (like invalid input or not found) from critical unexpected bugs (like TypeError or null references)',
            bn: 'এটি অনুমেয় সাধারণ ব্যর্থতা (যেমন অবৈধ ইনপুট বা নট ফাউন্ড) থেকে অনাকাঙ্ক্ষিত প্রোগ্রামিং বাগ (যেমন TypeError)-কে আলাদা করে'
          },
          {
            en: 'It allows the server to skip loading CSS stylesheets',
            bn: 'এটি সার্ভারকে সিএসএস স্টাইলশিট লোড করা এড়িয়ে যেতে দেয়'
          },
          {
            en: 'It makes database queries execute 2x faster in production',
            bn: 'এটি প্রোডাকশনে ডাটাবেজ কুয়েরি দ্বিগুণ দ্রুত কার্যকর করে'
          },
          {
            en: 'It is a mandatory keyword enforced by the ECMAScript standard',
            bn: 'এটি একমাস্ক্রিপ্ট স্ট্যান্ডার্ড দ্বারা নির্ধারিত একটি বাধ্যতামূলক কিওয়ার্ড'
          }
        ],
        answer: 0,
        hint: {
          en: 'Operational errors represent known failure conditions rather than broken code.',
          bn: 'অপারেশনাল এররগুলো কোড ভাঙার বদলে সিস্টেমে অনুমেয় ব্যর্থতাকে প্রকাশ করে।'
        },
        explanation: {
          en: 'Operational errors (bad user inputs, missing records) are expected and can be answered with 4xx statuses. Non-operational errors indicate serious bugs requiring logging and restarts.',
          bn: 'অপারেশনাল এরর (ভুল ইনপুট, রেকর্ড না পাওয়া) অনুমেয় এবং ৪xx দিয়ে জানানো যায়। কিন্তু নন-অপারেশনাল এরর হলো গুরুতর বাগ যা লগ করা জরুরি।'
        }
      },
      {
        id: 'q-next-route-behavior',
        kind: 'mcq',
        topic: 'next route skip behavior',
        question: {
          en: 'What specific behavior does calling next("route") produce within an Express application?',
          bn: 'একটি এক্সপ্রেস অ্যাপ্লিকেশনে next("route") কল করলে নির্দিষ্টভাবে কী ঘটে?'
        },
        options: [
          {
            en: 'It skips any remaining middleware functions in the current route handler stack and passes control to the next matching route',
            bn: 'এটি বর্তমান রুট স্ট্যাকের বাকি মিডেলওয়্যারগুলো বাদ দিয়ে পরবর্তী ম্যাচিং রুটের কাছে নিয়ন্ত্রণ হস্তান্তর করে'
          },
          {
            en: 'It redirects the browser to the root "/" homepage URL',
            bn: 'এটি ব্রাউজারকে হোমপেজের "/" ইউআরএলে রিডাইরেক্ট করে'
          },
          {
            en: 'It sends a 404 Route Not Found HTTP response to the client',
            bn: 'এটি ক্লায়েন্টের কাছে একটি ৪০৪ রুট নট ফাউন্ড রেসপন্স পাঠায়'
          },
          {
            en: 'It terminates the Node.js event loop immediately',
            bn: 'এটি নোড.জেএস ইভেন্ট লুপ অবিলম্বে বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The string "route" is a special token that exits the current route handler array.',
          bn: '"route" স্ট্রিংটি একটি বিশেষ সংকেত যা বর্তমান রুট হ্যান্ডলারের অ্যারে থেকে বের হয়ে যায়।'
        },
        explanation: {
          en: 'next("route") only works in middleware loaded by app.METHOD() or router.METHOD(). It skips the rest of the current route stack and passes control to the next route.',
          bn: 'next("route") বর্তমান রুটের অবশিষ্ট মিডেলওয়্যার এড়িয়ে পরের রুটে নিয়ন্ত্রণ পাঠায়, যা বিশেষ শর্তে বিকল্প রুট চালাতে দারুণ কার্যকর।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-order-tickets',
    title: {
      en: 'Request Processing — Body Parsers, File Uploads & Schema Validation',
      bn: 'রিকোয়েস্ট প্রসেসিং — বডি পার্সার, ফাইল আপলোড ও স্কিমা ভ্যালিডেশন'
    }
  }
};
