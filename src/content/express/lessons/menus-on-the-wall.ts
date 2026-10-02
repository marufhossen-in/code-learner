import type { Lesson } from '../../../lib/types';

export const MenusOnTheWallLesson: Lesson = {
  slug: 'menus-on-the-wall',
  tech: 'express',
  title: {
    en: 'Advanced Routing — Route Parameters, Query Strings & Modular Routers',
    bn: 'অ্যাডভান্সড রাউটিং — রুট প্যারামিটার, কোয়েরি স্ট্রিং ও মডুলার রাউটার'
  },
  summary: {
    en: 'Scalable Express applications require modular route organization beyond basic endpoint definitions. In this lesson, you will master dynamic route parameters, query string handling, parameter preloading with router.param, route chaining with app.route, and nested sub-routers using express.Router and mergeParams.',
    bn: 'স্কেলেবল এক্সপ্রেস অ্যাপ্লিকেশন তৈরির জন্য সাধারণ রুটের বাইরে গিয়ে মডুলার রাউটিং কাঠামো গড়ে তোলা অপরিহার্য। এই পাঠে আপনি ডায়নামিক রুট প্যারামিটার, কোয়েরি স্ট্রিং প্রসেসিং, router.param দিয়ে প্যারামিটার প্রি-লোডিং, app.route দিয়ে রুট চেইনিং এবং mergeParams সহ নেস্টেড সাব-রাউটার তৈরি গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'express-routing-hierarchy',
      text: {
        en: 'The Modular Routing Architecture',
        bn: 'মডুলার রাউটিং আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build backend systems with dozens of endpoints, registering every route directly on the root app instance causes clutter and naming collisions. Express provides the express.Router class as an isolated mini-application that encapsulates middleware and route definitions for specific domain modules.',
        bn: 'যখন আপনি ডজন ডজন এন্ডপয়েন্ট সমৃদ্ধ ব্যাকএন্ড সিস্টেম তৈরি করেন, তখন মূল অ্যাপ্লিকেশনে সমস্ত রুট যুক্ত করলে বিশৃঙ্খলা তৈরি হয়। এক্সপ্রেস এই সমস্যা সমাধানে express.Router ক্লাস সরবরাহ করে যা প্রতিটি মডিউলের জন্য একটি পৃথক মিনি-অ্যাপ্লিকেশন হিসেবে নিজস্ব মিডেলওয়্যার ও রুট ধারণ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Route Parameter (req.params)',
          def: {
            en: 'Named URL segments captured by colon syntax (such as :id or :slug) and exposed as key-value pairs on req.params.',
            bn: 'কোলন সিনট্যাক্স (যেমন :id বা :slug) দ্বারা চিহ্নিত ইউআরএল অংশ যা req.params অবজেক্টে কি-ভ্যালু জোড়া হিসেবে পাওয়া যায়।'
          }
        },
        {
          term: 'Query String (req.query)',
          def: {
            en: 'Key-value pairs following the question mark in a URL used for filtering, sorting, and pagination (such as ?page=1&limit=20).',
            bn: 'ইউআরএলের প্রশ্নবোধক চিহ্নের পরের অংশ যা ডাটা ফিল্টারিং, সাজানো এবং পৃষ্ঠা সংখ্যার (যেমন ?page=1&limit=20) জন্য ব্যবহৃত হয়।'
          }
        },
        {
          term: 'express.Router()',
          def: {
            en: 'An isolated routing mini-app capable of executing middleware and handling routes independently before being mounted onto the parent app.',
            bn: 'একটি স্বয়ংসম্পূর্ণ মিনি-রাউটার যা মূল অ্যাপে যুক্ত হওয়ার আগে স্বাধীনভাবে নিজস্ব মিডেলওয়্যার ও রুট পরিচালনা করতে সক্ষম।'
          }
        },
        {
          term: 'mergeParams: true',
          def: {
            en: 'A router configuration option allowing nested child routers to access route parameters defined in the parent router path.',
            bn: 'রাউটারের একটি কনফিগারেশন যার মাধ্যমে প্যারেন্ট রুটের প্যারামিটারগুলো নেস্টেড চাইল্ড রাউটারেও সরাসরি ব্যবহার করা যায়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'params-vs-query',
      text: {
        en: 'Route Parameters Versus Query Strings',
        bn: 'রুট প্যারামিটার বনাম কোয়েরি স্ট্রিং তুলনা'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Dimension', bn: 'মাত্রা' },
        { en: 'Route Parameters (req.params)', bn: 'রুট প্যারামিটার (req.params)' },
        { en: 'Query Strings (req.query)', bn: 'কোয়েরি স্ট্রিং (req.query)' }
      ],
      rows: [
        [
          { en: 'URL Syntax', bn: 'ইউআরএল সিনট্যাক্স' },
          { en: '/products/:id (e.g. /products/42)', bn: '/products/:id (যেমন /products/42)' },
          { en: '/products?category=books&limit=10', bn: '/products?category=books&limit=10' }
        ],
        [
          { en: 'Architectural Role', bn: 'স্থাপত্য ভূমিকা' },
          { en: 'Identifies a unique resource entity in REST', bn: 'রেস্টে একটি নির্দিষ্ট রিসোর্স বা সত্তাকে শনাক্ত করে' },
          { en: 'Filters, sorts, searches, or paginates resources', bn: 'রিসোর্স ফিল্টার, বাছাই, অনুসন্ধান বা পেজ সাজায়' }
        ],
        [
          { en: 'Required vs Optional', bn: 'বাধ্যতামূলক বনাম ঐচ্ছিক' },
          { en: 'Required by default unless defined with a question mark', bn: 'প্রশ্নবোধক চিহ্ন ছাড়া ডিফল্টভাবে রুট মেলাতে বাধ্যতামূলক' },
          { en: 'Always optional; missing keys return undefined', bn: 'সর্বদা ঐচ্ছিক; কি না থাকলে মান undefined থাকে' }
        ],
        [
          { en: 'Express Parsing', bn: 'এক্সপ্রেস পার্সিং' },
          { en: 'Extracted directly into req.params as strings', bn: 'স্ট্রিং হিসেবে সরাসরি req.params অবজেক্টে জমা হয়' },
          { en: 'Parsed into req.query via url or qs parser', bn: 'পার্সারের মাধ্যমে req.query অবজেক্টে তৈরি হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'modular-router-code',
      text: {
        en: 'Nested Routers and Route Chaining in Express',
        bn: 'এক্সপ্রেসে নেস্টেড রাউটার ও রুট চেইনিং'
      }
    },
    {
      type: 'code',
      code: `const express = require('express');
const app = express();

// 1. Child router with mergeParams for nested resources: /courses/:courseId/reviews
const reviewRouter = express.Router({ mergeParams: true });

reviewRouter.get('/:reviewId', (req, res) => {
  const { courseId, reviewId } = req.params;
  res.json({ courseId, reviewId, status: 'approved' });
});

// 2. Parent router for courses
const courseRouter = express.Router();
courseRouter.use('/:courseId/reviews', reviewRouter);

// 3. Route chaining with app.route() to avoid repeating paths
courseRouter.route('/')
  .get((req, res) => res.json({ courses: ['Express Architecture', 'Node.js Internals'] }))
  .post((req, res) => res.status(201).json({ created: true }));

app.use('/api/v1/courses', courseRouter);

// Simulation of nested param resolution
const mockParams = { courseId: '101', reviewId: '5' };
console.log('Nested parent param courseId:', mockParams.courseId);
// -> Nested parent param courseId: 101
console.log('Nested child param reviewId:', mockParams.reviewId);
// -> Nested child param reviewId: 5`,
      caption: {
        en: 'Nested review router inheriting parent courseId via mergeParams',
        bn: 'mergeParams দিয়ে চাইল্ড রিভিউ রাউটারে প্যারেন্ট courseId গ্রহণ করা'
      }
    },
    {
      type: 'heading',
      id: 'router-param-lifecycle',
      text: {
        en: 'Parameter Preloading and Validation Lifecycle',
        bn: 'প্যারামিটার প্রি-লোডিং ও ভ্যালিডেশন লাইফসাইকেল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When multiple endpoints require loading the exact same resource by an ID parameter, repeating the database fetch inside every route handler violates the DRY principle. Express provides router.param to run centralized preloading middleware whenever a named parameter appears in the request path.',
        bn: 'যখন একাধিক রুটে একই আইডি প্যারামিটার দিয়ে ডাটাবেজ থেকে ডাটা খোঁজার প্রয়োজন হয়, তখন প্রতিটি হ্যান্ডলারে একই কোড বারবার লেখা অপচয়। এক্সপ্রেস router.param মেথড প্রদান করে যা কোনো নির্দিষ্ট প্যারামিটার ইউআরএলে পেলেই স্বয়ংক্রিয়ভাবে প্রি-লোডিং মিডেলওয়্যার কার্যকর করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Use router.param: Intercept :id to query the database once, store the document on req.course, and call next().',
          bn: '১. router.param ব্যবহার: :id ধরে ডাটাবেজ থেকে একবার ডাটা এনে req.course-এ রাখুন এবং next() কল করুন।'
        },
        {
          en: '2. Early 404 Guard: If the resource does not exist in the database, return a 404 response immediately from router.param.',
          bn: '২. আগাম ৪০৪ গার্ড: ডাটাবেজে রিসোর্সটি না পাওয়া গেলে router.param থেকেই সরাসরি ৪০৪ স্ট্যাটাস পাঠিয়ে দিন।'
        },
        {
          en: '3. Enable mergeParams: When mounting nested routers such as /authors/:authorId/books, specify mergeParams: true.',
          bn: '৩. mergeParams চালু: /authors/:authorId/books-এর মতো নেস্টেড রাউটারে সর্বদা mergeParams: true ব্যবহার করুন।'
        },
        {
          en: '4. Chain with app.route: Group GET, POST, and PUT operations on identical endpoints using app.route("/endpoint") to keep code clean.',
          bn: '৪. app.route দিয়ে চেইনিং: একই রুটের GET, POST ও PUT মেথডগুলোকে app.route("/endpoint") দিয়ে একসাথে সাজান।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'exp-rout-ex1',
      kind: 'mcq',
      topic: 'express router instantiation',
      question: {
        en: 'Which Express factory function creates a new isolated router instance for modular endpoint grouping?',
        bn: 'মডুলার এন্ডপয়েন্ট তৈরির জন্য কোন এক্সপ্রেস ফ্যাক্টরি ফাংশনটি নতুন আইসোলেটেড রাউটার তৈরি করে?'
      },
      options: [
        {
          en: 'express.Router()',
          bn: 'express.Router()'
        },
        {
          en: 'express.createDispatcher()',
          bn: 'express.createDispatcher()'
        },
        {
          en: 'new express.SubApp()',
          bn: 'new express.SubApp()'
        },
        {
          en: 'express.RouteBuilder()',
          bn: 'express.RouteBuilder()'
        }
      ],
      answer: 0,
      hint: {
        en: 'It is a capital-R factory function on the main express package.',
        bn: 'এটি এক্সপ্রেস প্যাকেজের বড় হাতের R বিশিষ্ট একটি ফ্যাক্টরি ফাংশন।'
      },
      explanation: {
        en: 'express.Router() returns an isolated instance of middleware and routes that can be mounted into another router or the main application.',
        bn: 'express.Router() একটি স্বয়ংসম্পূর্ণ রাউটার অবজেক্ট তৈরি করে যা মূল অ্যাপ্লিকেশনের যেকোনো পাথে মাউন্ট করা যায়।'
      }
    },
    {
      id: 'exp-rout-ex2',
      kind: 'mcq',
      topic: 'mergeParams option purpose',
      question: {
        en: 'Why is { mergeParams: true } necessary when nesting routers such as app.use("/users/:userId/posts", postRouter)?',
        bn: 'app.use("/users/:userId/posts", postRouter)-এর মতো নেস্টেড রাউটারে { mergeParams: true } কেন প্রয়োজন?'
      },
      options: [
        {
          en: 'Without mergeParams: true, req.params in postRouter will be empty and cannot access :userId from the parent mount path',
          bn: 'mergeParams: true না দিলে postRouter-এর ভেতরে req.params খালি থাকবে এবং প্যারেন্ট পাথের :userId পাওয়া যাবে না'
        },
        {
          en: 'It compresses URL path strings using gzip compression',
          bn: 'এটি ইউআরএল পাথ স্ট্রিংকে জিপ কম্প্রেশন দিয়ে সংকুচিত করে'
        },
        {
          en: 'It converts all query strings into uppercase characters',
          bn: 'এটি সমস্ত কোয়েরি স্ট্রিংকে বড় হাতের অক্ষরে রূপান্তর করে'
        },
        {
          en: 'It connects the Express router to a Redis cluster',
          bn: 'এটি এক্সপ্রেস রাউটারকে একটি রেডিস ক্লাস্টারের সাথে সংযুক্ত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'By default, routers only capture parameters defined in their own local route patterns.',
        bn: 'ডিফল্টভাবে রাউটার শুধুমাত্র তার নিজের সংজ্ঞায়িত প্যারামিটারগুলো দেখতে পায়।'
      },
      explanation: {
        en: 'By default, child routers only parse parameters defined on their own routes. Setting mergeParams: true preserves params from the parent mount prefix.',
        bn: 'ডিফল্টভাবে চাইল্ড রাউটার প্যারেন্ট পাথের প্যারামিটার গ্রহণ করতে পারে না। mergeParams: true দিলে প্যারেন্টের :userId চাইল্ডের req.params-এ যুক্ত হয়।'
      }
    },
    {
      id: 'exp-rout-ex3',
      kind: 'mcq',
      topic: 'app route method chaining',
      question: {
        en: 'What is the key benefit of utilizing app.route("/api/items") to declare GET, POST, and DELETE handlers?',
        bn: 'GET, POST এবং DELETE হ্যান্ডলার তৈরিতে app.route("/api/items") ব্যবহারের প্রধান সুবিধা কী?'
      },
      options: [
        {
          en: 'It avoids repeating the endpoint path string across multiple handlers and groups related HTTP methods together cleanly',
          bn: 'এটি বারবার একই পাথ স্ট্রিং লেখা দূর করে এবং সম্পর্কিত মেথডগুলোকে এক জায়গায় সুন্দরভাবে সাজায়'
        },
        {
          en: 'It automatically encrypts all HTTP traffic using TLS certificates',
          bn: 'এটি স্বয়ংক্রিয়ভাবে টিএলএস সার্টিফিকেট দিয়ে সমস্ত ট্রাফিক এনক্রিপ্ট করে'
        },
        {
          en: 'It creates a database table matching the endpoint name',
          bn: 'এটি এন্ডপয়েন্টের নামের সাথে মিলিয়ে একটি ডাটাবেজ টেবিল তৈরি করে'
        },
        {
          en: 'It bypasses all Express middleware checks completely',
          bn: 'এটি এক্সপ্রেসের সমস্ত মিডেলওয়্যার যাচাই সম্পূর্ণ বাইপাস করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'It adheres to the Don\'t Repeat Yourself (DRY) principle for pathnames.',
        bn: 'এটি একই পাথ নাম বারবার লেখা রোধ করে কোড পরিচ্ছন্ন রাখে।'
      },
      explanation: {
        en: 'app.route() enables chainable route handlers for a single path, minimizing typos and grouping all HTTP operations for that resource in one location.',
        bn: 'app.route() একই পাথের জন্য মেথড চেইনিং সুবিধা দেয়, যার ফলে টাইপো দূর হয় এবং একই রিসোর্সের সব অপারেশন এক সাথে থাকে।'
      }
    },
    {
      id: 'exp-rout-ex4',
      kind: 'mcq',
      topic: 'router param execution lifecycle',
      question: {
        en: 'What arguments are provided to the callback registered with router.param("userId", callback)?',
        bn: 'router.param("userId", callback)-এ নিবন্ধিত কলব্যাকে কোন আর্গুমেন্টগুলো সরবরাহ করা হয়?'
      },
      options: [
        {
          en: '(req, res, next, id)',
          bn: '(req, res, next, id)'
        },
        {
          en: '(socket, buffer, stream)',
          bn: '(socket, buffer, stream)'
        },
        {
          en: '(err, config, database)',
          bn: '(err, config, database)'
        },
        {
          en: '(req, port, cluster)',
          bn: '(req, port, cluster)'
        }
      ],
      answer: 0,
      hint: {
        en: 'It receives standard middleware parameters plus the resolved parameter value.',
        bn: 'এটি সাধারণ মিডেলওয়্যার প্যারামিটারের সাথে সংশ্লিষ্ট আইডি ভ্যালুটি গ্রহণ করে।'
      },
      explanation: {
        en: 'The router.param callback receives req, res, next, and the value of the parameter itself (id), allowing centralized validation or database preloading.',
        bn: 'router.param কলব্যাকটি req, res, next এবং প্যারামিটারের আসল মানটি (id) গ্রহণ করে, যা দিয়ে সহজেই রিসোর্স যাচাই বা প্রি-লোড করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'menus-on-the-wall-quiz',
    title: {
      en: 'Advanced Express Routing Quiz',
      bn: 'অ্যাডভান্সড এক্সপ্রেস রাউটিং কুইজ'
    },
    questions: [
      {
        id: 'q-query-array-parsing',
        kind: 'mcq',
        topic: 'query string parsing behaviors',
        question: {
          en: 'When a client sends a GET request with "?tags=node&tags=express", how does the standard Express query parser represent req.query.tags?',
          bn: 'যখন কোনো ক্লায়েন্ট "?tags=node&tags=express" সহ রিকোয়েস্ট পাঠায়, তখন এক্সপ্রেস req.query.tags-কে কীভাবে উপস্থাপন করে?'
        },
        options: [
          {
            en: 'As an array of strings: ["node", "express"]',
            bn: 'স্ট্রিংয়ের একটি অ্যারে হিসেবে: ["node", "express"]'
          },
          {
            en: 'As a single comma-separated string: "node,express"',
            bn: 'কমা দিয়ে আলাদা করা একক স্ট্রিং হিসেবে: "node,express"'
          },
          {
            en: 'It throws a SyntaxError and responds with status 400',
            bn: 'এটি সিনট্যাক্স এরর তৈরি করে ৪০০ স্ট্যাটাস ফেরত দেয়'
          },
          {
            en: 'Only the final value "express" is kept, overwriting "node"',
            bn: 'আগের মান মুছে কেবল শেষ মান "express" সংরক্ষিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Repeating the same key in a URL query string forms a list in Express.',
          bn: 'একই কি বারবার পাঠালে এক্সপ্রেস তাকে একটি লিস্ট হিসেবে সংগ্রহ করে।'
        },
        explanation: {
          en: 'When a query parameter is duplicated in a query string, Express groups the values into a JavaScript array of strings.',
          bn: 'ইউআরএল কোয়েরিতে একই নামের প্যারামিটার একাধিকবার থাকলে এক্সপ্রেস স্বয়ংক্রিয়ভাবে সেগুলোকে স্ট্রিং অ্যারে হিসেবে সাজায়।'
        }
      },
      {
        id: 'q-optional-route-params',
        kind: 'mcq',
        topic: 'optional route parameters',
        question: {
          en: 'How do you define an optional route parameter in Express so that both /flights and /flights/2026 match the route?',
          bn: 'এক্সেপ্রেসে কীভাবে একটি ঐচ্ছিক রুট প্যারামিটার সংজ্ঞায়িত করবেন যাতে /flights এবং /flights/2026 উভয়ই মেলে?'
        },
        options: [
          {
            en: '/flights/:year?',
            bn: '/flights/:year?'
          },
          {
            en: '/flights/[year]',
            bn: '/flights/[year]'
          },
          {
            en: '/flights/{year?}',
            bn: '/flights/{year?}'
          },
          {
            en: '/flights/*year',
            bn: '/flights/*year'
          }
        ],
        answer: 0,
        hint: {
          en: 'Append a question mark to the named parameter token.',
          bn: 'প্যারামিটারের নামের শেষে একটি প্রশ্নবোধক চিহ্ন যোগ করতে হয়।'
        },
        explanation: {
          en: 'Adding a question mark to the parameter name (such as :year?) indicates to the route parser that the segment is optional.',
          bn: 'প্যারামিটারের নামের শেষে প্রশ্নবোধক চিহ্ন দিলে (যেমন :year?) এক্সপ্রেস বুঝে নেয় যে এই অংশটি ঐচ্ছিক।'
        }
      },
      {
        id: 'q-nested-router-mount',
        kind: 'mcq',
        topic: 'nested router mounting pattern',
        question: {
          en: 'In RESTful API design, what is the cleanest architectural pattern for mounting sub-resource routes like /organizations/:orgId/members?',
          bn: 'RESTful API ডিজাইনে /organizations/:orgId/members-এর মতো সাব-রিসোর্স রুট সাজানোর সবচেয়ে পরিচ্ছন্ন আর্কিটেকচারাল প্যাটার্ন কোনটি?'
        },
        options: [
          {
            en: 'Mount a memberRouter onto organizationRouter using orgRouter.use("/:orgId/members", memberRouter) with mergeParams: true enabled',
            bn: 'mergeParams: true সহ memberRouter তৈরি করে orgRouter.use("/:orgId/members", memberRouter) দিয়ে যুক্ত করা'
          },
          {
            en: 'Create 10 separate Express applications running on different TCP ports',
            bn: '১০টি আলাদা টিসিপি পোর্টে ১০টি সম্পূর্ণ পৃথক এক্সপ্রেস অ্যাপ্লিকেশন চালানো'
          },
          {
            en: 'Put all 200 API routes inside a single monolithic index.js file',
            bn: 'একটিমাত্র index.js ফাইলে সমস্ত ২০০টি রুট গাদাগাদি করে লিখে রাখা'
          },
          {
            en: 'Avoid using nested routes because HTTP prohibits slashes in paths',
            bn: 'নেস্টেড রুট ব্যবহার না করা কারণ এইচটিটিপিতে স্ল্যাশ দেওয়া নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sub-routers should be mounted hierarchically with parameter inheritance.',
          bn: 'সাব-রাউটারগুলোকে হায়ারার্কি মেনে প্যারামিটার শেয়ারিংসহ মাউন্ট করা উচিত।'
        },
        explanation: {
          en: 'Mounting memberRouter under organizationRouter with mergeParams: true maintains REST hierarchy while keeping route modules decoupled and modular.',
          bn: 'mergeParams: true দিয়ে চাইল্ড রাউটার মাউন্ট করলে রেস্ট কাঠামোর সৌন্দর্য বজায় থাকে এবং প্রতিটি মডিউলের কোড আলাদা ফাইলে পরিচ্ছন্ন থাকে।'
        }
      },
      {
        id: 'q-router-middleware-scope',
        kind: 'mcq',
        topic: 'router-level middleware scope',
        question: {
          en: 'If you register router.use(authMiddleware) on an adminRouter instance, which incoming requests will execute authMiddleware?',
          bn: 'যদি adminRouter ইনস্ট্যান্সে router.use(authMiddleware) যুক্ত করা হয়, তবে কোন ইনকামিং রিকোয়েস্টে authMiddleware কার্যকর হবে?'
        },
        options: [
          {
            en: 'Only requests that match paths mounted under adminRouter; requests to public routes on the main app are unaffected',
            bn: 'কেবল adminRouter-এর আওতাধীন রুটের রিকোয়েস্টে; মূল অ্যাপ্লিকেশনের পাবলিক রুটে এটি কোনো প্রভাব ফেলবে না'
          },
          {
            en: 'Every request hitting the entire Node.js server across all ports and routers',
            bn: 'সমস্ত পোর্ট ও রাউটার মিলিয়ে নোড.জেএস সার্ভারে আসা প্রতিটি রিকোয়েস্টে'
          },
          {
            en: 'Only requests originating from the localhost 127.0.0.1 IP address',
            bn: 'শুধুমাত্র লোকালহোস্ট 127.0.0.1 আইপি থেকে আসা রিকোয়েস্টে'
          },
          {
            en: 'No requests will execute it because router.use is deprecated',
            bn: 'কোনো রিকোয়েস্টেই চলবে না কারণ router.use সম্পূর্ণ বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Router-level middleware is strictly scoped to its router instance.',
          bn: 'রাউটার-লেভেল মিডেলওয়্যার শুধুমাত্র তার নিজস্ব রাউটারেই সীমাবদ্ধ থাকে।'
        },
        explanation: {
          en: 'Router middleware is scoped exclusively to routes registered on that router, enabling modular security boundaries and isolated processing pipelines.',
          bn: 'রাউটার মিডেলওয়্যার কেবল সেই নির্দিষ্ট রাউটারে সংজ্ঞায়িত রুটগুলোর জন্য কার্যকর হয়, ফলে নির্দিষ্ট রুটে আলাদা সুরক্ষা বলয় তৈরি করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'seasoning-every-plate',
    title: {
      en: 'Middleware Pipeline — Execution Order, Next Function & Error Handling',
      bn: 'মিডেলওয়্যার পাইপলাইন — এক্সিকিউশন ক্রম, নেক্সট ফাংশন ও এরর হ্যান্ডলিং'
    }
  }
};
