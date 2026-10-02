import type { Lesson } from '../../../lib/types';

export const TheDiningRoomOpensLesson: Lesson = {
  slug: 'the-dining-room-opens',
  tech: 'express',
  title: {
    en: 'Express Server Fundamentals — App Creation, Port Binding & Route Handling',
    bn: 'এক্সপ্রেস সার্ভার ফান্ডামেন্টালস — অ্যাপ তৈরি, পোর্ট বাইন্ডিং ও রুট হ্যান্ডলিং'
  },
  summary: {
    en: 'Express.js provides a fast and minimalist routing layer on top of the native Node.js http module. In this foundational lesson, you will master Express application instantiation, environment-aware port listening, HTTP method routing, and the single-response rule governing request and response lifecycles.',
    bn: 'এক্সপ্রেস.জেএস নোড.জেএস-এর নেটিভ http মডিউলের ওপর একটি দ্রুত ও মিনিমালিস্ট রাউটিং লেয়ার তৈরি করে। এই প্রাথমিক পাঠে আপনি এক্সপ্রেস অ্যাপ্লিকেশন তৈরি, এনভায়রনমেন্ট অনুযায়ী পোর্ট লিসেনিং, এইচটিটিপি মেথড রাউটিং এবং রিকোয়েস্ট ও রেসপন্স লাইফসাইকেলের একক রেসপন্স নীতি গভীরভাবে শিখবেন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'express-architecture-overview',
      text: {
        en: 'The Express Request Pipeline Architecture',
        bn: 'এক্সপ্রেস রিকোয়েস্ট পাইপলাইন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'event-loop'
    },
    {
      type: 'para',
      text: {
        en: 'When you build web applications with Node.js, the standard HTTP module requires you to manually parse raw URL strings, serialize headers, and manage byte streams. Express solves these complexities by providing an intuitive application instance equipped with declarative route matching, request helpers, and response formatters.',
        bn: 'যখন আপনি নোড.জেএস দিয়ে ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন সাধারণ এইচটিটিপি মডিউলে ইউআরএল পার্সিং, হেডার সাজানো এবং বাইট স্ট্রিম ম্যানুয়ালি সামলাতে হয়। এক্সপ্রেস এই জটিলতা দূর করে একটি ডিক্লারেটিভ রাউটিং সিস্টেম, রিকোয়েস্ট হেল্পার এবং রেসপন্স ফরম্যাটার সমৃদ্ধ সহজ ইন্টারফেস উপহার দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'express()',
          def: {
            en: 'The top-level factory function exported by the express module that creates a new Express application instance.',
            bn: 'এক্সপ্রেস মডিউল থেকে এক্সপোর্ট করা শীর্ষ ফ্যাক্টরি ফাংশন যা একটি নতুন এক্সপ্রেস অ্যাপ্লিকেশন ইনস্ট্যান্স তৈরি করে।'
          }
        },
        {
          term: 'app.listen(port, callback)',
          def: {
            en: 'Binds and listens for incoming TCP connections on the specified port, creating an underlying Node.js HTTP server.',
            bn: 'নির্দিষ্ট পোর্টে নতুন টিসিপি সংযোগ গ্রহণের জন্য সার্ভার চালু করে এবং নেটিভ নোড.জেএস এইচটিটিপি সার্ভার তৈরি করে।'
          }
        },
        {
          term: 'Route Handler',
          def: {
            en: 'A callback function accepting (req, res) that executes when an incoming HTTP request matches a specified method and path.',
            bn: 'একটি কলব্যাক ফাংশন যা (req, res) গ্রহণ করে এবং কোনো ইনকামিং রিকোয়েস্ট নির্দিষ্ট মেথড ও পাথের সাথে মিললে কার্যকর হয়।'
          }
        },
        {
          term: 'ERR_HTTP_HEADERS_SENT',
          def: {
            en: 'A runtime error thrown when application code attempts to send headers or a body after the response has already finished.',
            bn: 'একটি রানটাইম এরর যা তখন ঘটে যখন একটি রেসপন্স ক্লায়েন্টে পাঠানো শেষ হওয়ার পর কোড পুনরায় হেডার বা বডি পাঠানোর চেষ্টা করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'native-http-vs-express',
      text: {
        en: 'Comparing Native Node.js HTTP with Express',
        bn: 'নেটিভ নোড.জেএস এইচটিটিপি বনাম এক্সপ্রেস তুলনা'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Feature', bn: 'বৈশিষ্ট্য' },
        { en: 'Native Node.js (http module)', bn: 'নেটিভ নোড.জেএস (http মডিউল)' },
        { en: 'Express.js Framework', bn: 'এক্সপ্রেস.জেএস ফ্রেমওয়ার্ক' }
      ],
      rows: [
        [
          { en: 'Routing Mechanism', bn: 'রাউটিং মেকানিজম' },
          { en: 'Manual if/else checks on req.url and req.method', bn: 'req.url এবং req.method-এর ওপর ম্যানুয়াল if/else শর্ত' },
          { en: 'Declarative methods: app.get(), app.post(), app.put()', bn: 'ডিক্লারেটিভ মেথড: app.get(), app.post(), app.put()' }
        ],
        [
          { en: 'JSON Responses', bn: 'জেএসন রেসপন্স' },
          { en: 'res.setHeader() + JSON.stringify() + res.end()', bn: 'res.setHeader() + JSON.stringify() + res.end()' },
          { en: 'Convenient res.json({ key: value })', bn: 'সহজ ও সরাসরি res.json({ key: value })' }
        ],
        [
          { en: 'Parameter Parsing', bn: 'প্যারামিটার পার্সিং' },
          { en: 'Custom regex matching against URL strings', bn: 'ইউআরএল স্ট্রিংয়ের ওপর কাস্টম রেজেক্স পার্সিং' },
          { en: 'Automatic req.params and req.query extraction', bn: 'স্বয়ংক্রিয় req.params এবং req.query সংগ্রহ' }
        ],
        [
          { en: 'Middleware Pipeline', bn: 'মিডেলওয়্যার পাইপলাইন' },
          { en: 'Requires custom function composition chains', bn: 'কাস্টম ফাংশন চেইন ম্যানুয়ালি তৈরি করতে হয়' },
          { en: 'Standardized app.use() pipeline with next()', bn: 'next() সহ স্ট্যান্ডার্ড app.use() পাইপলাইন' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'express-hello-world-code',
      text: {
        en: 'Working Express Server with Port Binding and Route Dispatch',
        bn: 'পোর্ট বাইন্ডিং ও রুট ডিসপ্যাচ সহ কার্যকরী এক্সপ্রেস সার্ভার'
      }
    },
    {
      type: 'code',
      code: `// A standard production-ready Express server entrypoint
const express = require('express');
const app = express();

// Use dynamic port from environment, fallback to 3000
const PORT = process.env.PORT || 3000;

// Root health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', uptime: process.uptime() });
});

// Primary API welcome route
app.get('/api/v1/welcome', (req, res) => {
  res.json({ message: 'Welcome to the CodeShikhon Express API' });
});

// Verification simulation
const routeCount = app._router.stack.filter(layer => layer.route).length;
console.log('Server configured port:', PORT);
// -> Server configured port: 3000
console.log('Registered route layers count:', routeCount);
// -> Registered route layers count: 2`,
      caption: {
        en: 'Configuring Express app with health checks on port 3000',
        bn: 'পোর্ট ৩০০০-এ হেলথ চেক সহ এক্সপ্রেস অ্যাপ কনফিগার করা'
      }
    },
    {
      type: 'heading',
      id: 'single-response-rule',
      text: {
        en: 'The Single Response Lifecycle Rule',
        bn: 'একক রেসপন্স লাইফসাইকেল নীতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'An HTTP transaction is strictly 1 request to 1 response. Once res.send(), res.json(), or res.end() executes, the response headers and body stream to the client. If subsequent code attempts to call res.status() or res.json(), Node.js throws ERR_HTTP_HEADERS_SENT. Always use return when sending early responses inside conditional branches.',
        bn: 'এইচটিটিপি প্রোটোকলে প্রতিটি ১টি রিকোয়েস্টের বিপরীতে ঠিক ১টি রেসপন্স সম্ভব। একবার res.send(), res.json() বা res.end() কার্যকর হয়ে গেলে রেসপন্স ক্লায়েন্টে চলে যায়। এরপর কোডে পুনরায় res.status() বা res.json() কল করা হলে নোড.জেএস ERR_HTTP_HEADERS_SENT এরর দেয়। কোনো শর্তের ভেতর রেসপন্স পাঠানোর সময় সর্বদা return ব্যবহার করুন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Top-to-Bottom Execution: Express routes match in the exact order they are declared in the codebase.',
          bn: '১. উপর-থেকে-নিচে এক্সিকিউশন: কোডে যেভাবে রুট সাজানো থাকে, ঠিক সেই ক্রমানুসারে এক্সপ্রেস রুট মেলায়।'
        },
        {
          en: '2. Specific Before General: Declare specific static routes (e.g. /users/profile) before dynamic routes (e.g. /users/:id).',
          bn: '২. সুনির্দিষ্ট রুট আগে: ডায়নামিক রুটের (/users/:id) আগে সর্বদা সুনির্দিষ্ট স্ট্যাটিক রুট (/users/profile) সংজ্ঞায়িত করুন।'
        },
        {
          en: '3. Return Early: Prefix response helper invocations with return (e.g. return res.status(404).json(...)) to stop execution.',
          bn: '৩. দ্রুত রিটার্ন: শর্তসাপেক্ষ রেসপন্সে কোড থামিয়ে দিতে return res.status(404).json(...) ব্যবহার করুন।'
        },
        {
          en: '4. Dynamic Ports: Read port configuration from process.env.PORT to support Docker, Cloud Run, and Kubernetes environments.',
          bn: '৪. ডায়নামিক পোর্ট: ক্লাউড ও কুবারনেটিসের জন্য সর্বদা process.env.PORT থেকে পোর্ট নম্বর পড়ুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'exp-intro-ex1',
      kind: 'mcq',
      topic: 'express server port binding',
      question: {
        en: 'Which method on the Express application instance binds the server to an incoming TCP network port?',
        bn: 'এক্সপ্রেস অ্যাপ্লিকেশন ইনস্ট্যান্সের কোন মেথডটি সার্ভারকে ইনকামিং টিসিপি নেটওয়ার্ক পোর্টে সংযুক্ত করে?'
      },
      options: [
        {
          en: 'app.listen(port, callback)',
          bn: 'app.listen(port, callback)'
        },
        {
          en: 'app.connect(port)',
          bn: 'app.connect(port)'
        },
        {
          en: 'app.bindSocket(port)',
          bn: 'app.bindSocket(port)'
        },
        {
          en: 'app.startServer(port)',
          bn: 'app.startServer(port)'
        }
      ],
      answer: 0,
      hint: {
        en: 'The method name matches the native Node.js HTTP server method.',
        bn: 'মেথডটির নাম নেটিভ নোড.জেএস এইচটিটিপি সার্ভারের মেথডের অনুরূপ।'
      },
      explanation: {
        en: 'app.listen() creates a Node.js http.Server instance and begins listening on the specified port for incoming connections.',
        bn: 'app.listen() একটি নোড.জেএস http.Server ইনস্ট্যান্স তৈরি করে এবং ইনকামিং সংযোগ গ্রহণের জন্য নির্ধারিত পোর্টে অপেক্ষা শুরু করে।'
      }
    },
    {
      id: 'exp-intro-ex2',
      kind: 'mcq',
      topic: 'http headers sent error root cause',
      question: {
        en: 'What causes Node.js to throw "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client"?',
        bn: 'কোন কারণে নোড.জেএস "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client" এরর দেয়?'
      },
      options: [
        {
          en: 'Attempting to send a response (res.json, res.send) after another response has already been sent for the same request',
          bn: 'একই রিকোয়েস্টের জন্য ইতিমধ্যে রেসপন্স পাঠানো শেষ হওয়ার পর পুনরায় আরেকটি রেসপন্স (res.json, res.send) পাঠানোর চেষ্টা করলে'
        },
        {
          en: 'Writing an async/await function inside a database query',
          bn: 'ডাটাবেজ কুয়েরির ভেতরে একটি async/await ফাংশন লিখলে'
        },
        {
          en: 'Running the Express server with nodemon instead of node',
          bn: 'node-এর বদলে nodemon দিয়ে এক্সপ্রেস সার্ভার চালু রাখলে'
        },
        {
          en: 'Setting the port variable to a number higher than 1024',
          bn: 'পোর্ট ভেরিয়েবলের মান ১০২৪-এর চেয়ে বড় কোনো সংখ্যা নির্ধারণ করলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Every HTTP transaction permits exactly one response payload.',
        bn: 'প্রতিটি এইচটিটিপি লেনদেনে কেবল একটিমাত্র রেসপন্স পাঠানো যায়।'
      },
      explanation: {
        en: 'HTTP only allows one response per request. If code calls res.json() twice in a single handler, Node.js throws ERR_HTTP_HEADERS_SENT.',
        bn: 'এইচটিটিপিতে প্রতিটি রিকোয়েস্টের বিপরীতে একটিমাত্র রেসপন্স সম্ভব। এক হ্যান্ডলারে দুবার res.json() কল করলে এই এরর তৈরি হয়।'
      }
    },
    {
      id: 'exp-intro-ex3',
      kind: 'mcq',
      topic: 'express route execution order',
      question: {
        en: 'In what order does Express evaluate routes when an incoming HTTP request arrives?',
        bn: 'একটি নতুন ইনকামিং এইচটিটিপি রিকোয়েস্ট আসলে এক্সপ্রেস কোন ক্রমানুসারে রুটগুলো মেলায়?'
      },
      options: [
        {
          en: 'In exact top-to-bottom order as registered in the source code until a matching route sends a response or halts',
          bn: 'সোর্স কোডে যেভাবে উপর থেকে নিচে সাজানো আছে ঠিক সেই ক্রমানুসারে যতক্ষণ না কোনো রুট রেসপন্স পাঠায়'
        },
        {
          en: 'In alphabetical order by URL pathname',
          bn: 'ইউআরএল পাথের বর্ণানুক্রমিক (alphabetical) অনুসারে'
        },
        {
          en: 'Longest URL pathnames are always matched first',
          bn: 'সবচেয়ে বড় ইউআরএল পাথগুলো সর্বদা আগে মেলানো হয়'
        },
        {
          en: 'Randomly based on available V8 thread pool workers',
          bn: 'V8 থ্রেড পুলের খালি কর্মীদের ওপর ভিত্তি করে এলোমেলোভাবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Express uses a sequential array of routing layers.',
        bn: 'এক্সপ্রেস রাউটিং লেয়ারের একটি ধারাবাহিক অ্যারে ব্যবহার করে।'
      },
      explanation: {
        en: 'Express evaluates routes sequentially from top to bottom. The first handler that matches the method and URL path gets executed.',
        bn: 'এক্সপ্রেস উপর থেকে নিচে ক্রমানুসারে রুট পরীক্ষা করে। প্রথম যে রুটের মেথড ও পাথ মিলে যায় সেটি সরাসরি কার্যকর হয়।'
      }
    },
    {
      id: 'exp-intro-ex4',
      kind: 'mcq',
      topic: 'res json helper functionality',
      question: {
        en: 'What tasks does res.json(data) perform automatically that native res.end() does not?',
        bn: 'res.json(data) স্বয়ংক্রিয়ভাবে কোন কাজগুলো সম্পন্ন করে যা নেটিভ res.end() করে না?'
      },
      options: [
        {
          en: 'Sets Content-Type to application/json, stringifies JavaScript objects with JSON.stringify(), and terminates the response stream',
          bn: 'Content-Type হেডারকে application/json করে, অবজেক্টকে JSON.stringify() করে এবং রেসপন্স স্ট্রিম সমাপ্ত করে'
        },
        {
          en: 'Encrypts the payload with 256-bit AES encryption before transmission',
          bn: 'পাঠানোর আগে পেলোডটিকে ২৫৬-বিট এইএস এনক্রিপশন দিয়ে সুরক্ষিত করে'
        },
        {
          en: 'Saves the JSON payload to a local text file on the hard drive',
          bn: 'জেএসন ডাটা সরাসরি হার্ডড্রাইভের লোকাল টেক্সট ফাইলে সংরক্ষণ করে'
        },
        {
          en: 'Converts the JSON payload into an SQL INSERT query',
          bn: 'জেএসন পেলোডটিকে সরাসরি একটি এসকিউএল ইনসার্ট কুয়েরিতে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'It handles MIME header formatting and object serialization.',
        bn: 'এটি মাইম হেডার ঠিক করে এবং অবজেক্টকে টেক্সট স্ট্রিংয়ে পরিণত করে।'
      },
      explanation: {
        en: 'res.json() automatically formats objects into valid JSON strings, configures the application/json header, and flushes the buffer.',
        bn: 'res.json() স্বয়ংক্রিয়ভাবে অবজেক্টকে জেএসন স্ট্রিংয়ে রূপান্তর করে, application/json হেডার বসায় এবং রেসপন্স পাঠিয়ে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'dining-room-opens-quiz',
    title: {
      en: 'Express Server Fundamentals Quiz',
      bn: 'এক্সপ্রেস সার্ভার ফান্ডামেন্টালস কুইজ'
    },
    questions: [
      {
        id: 'q-process-env-port',
        kind: 'mcq',
        topic: 'environment port configuration',
        question: {
          en: 'Why should production Express servers read the listening port from process.env.PORT instead of hardcoding a number like 3000?',
          bn: 'প্রোডাকশন এক্সপ্রেস সার্ভারে পোর্ট ৩০০০ ফিক্সড না লিখে কেন process.env.PORT থেকে পড়া উচিত?'
        },
        options: [
          {
            en: 'Cloud platforms (Heroku, AWS ECS, Google Cloud Run) dynamically inject their assigned listening port via environment variables',
            bn: 'ক্লাউড প্ল্যাটফর্মগুলো (হিরোকু, এডব্লিউএস, ক্লাউড রান) পরিবেশ চলকের মাধ্যমে ডায়নামিক পোর্ট বরাদ্দ করে'
          },
          {
            en: 'The number 3000 is mathematically disallowed by HTTP/2 protocols',
            bn: '৩০০০ সংখ্যাটি এইচটিটিপি/২ প্রোটোকলে গাণিতিকভাবে নিষিদ্ধ'
          },
          {
            en: 'Reading environment variables decreases JavaScript memory usage by 50%',
            bn: 'এনভায়রনমেন্ট ভেরিয়েবল পড়লে জাভাস্ক্রিপ্ট মেমরির খরচ ৫০% কমে যায়'
          },
          {
            en: 'Node.js cannot compile TypeScript files if port 3000 is referenced',
            bn: 'পোর্ট ৩০০০ লেখা থাকলে নোড.জেএস কোনো টাইপস্ক্রিপ্ট ফাইল চালাতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hosting providers assign random ports at container boot time.',
          bn: 'হোস্টিং প্রোভাইডাররা কন্টেইনার চালুর সময় যেকোনো পোর্ট বরাদ্দ করতে পারে।'
        },
        explanation: {
          en: 'Cloud hosting providers set process.env.PORT dynamically. Hardcoding 3000 causes deployment crashes because the platform router expects traffic on its designated port.',
          bn: 'ক্লাউড হোস্টিং সার্ভিসগুলো ডায়নামিকভাবে process.env.PORT প্রদান করে। ৩০০০ ফিক্সড করে রাখলে ক্লাউড গেটওয়ের সাথে পোর্ট মিলবে না এবং অ্যাপ ক্র্যাশ করবে।'
        }
      },
      {
        id: 'q-return-early-res',
        kind: 'mcq',
        topic: 'return early pattern',
        question: {
          en: 'What is the primary architectural purpose of writing "return res.status(404).json(...)" inside route handlers?',
          bn: 'রুট হ্যান্ডলারের ভেতর "return res.status(404).json(...)" লেখার মূল আর্কিটেকচারাল উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'To immediately halt function execution and prevent remaining lines from executing and triggering ERR_HTTP_HEADERS_SENT',
            bn: 'ফাংশনের পরবর্তী কোড চলা অবিলম্বে বন্ধ করা যাতে পরবর্তীতে দ্বিতীয় কোনো রেসপন্স পাঠিয়ে এরর না ঘটে'
          },
          {
            en: 'To send the response over UDP instead of TCP sockets',
            bn: 'টিসিপি সকেটের পরিবর্তে ইউডিপি দিয়ে রেসপন্স পাঠানোর জন্য'
          },
          {
            en: 'To delete the user session from the Redis cache database',
            bn: 'রেডিস ক্যাশ ডাটাবেজ থেকে ব্যবহারকারীর সেশন মুছে ফেলার জন্য'
          },
          {
            en: 'To instruct the client browser to immediately clear all cookies',
            bn: 'ক্লায়েন্ট ব্রাউজারকে সাথে সাথে সব কুকি মুছে ফেলার নির্দেশ দিতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The return keyword prevents subsequent code execution in JavaScript functions.',
          bn: 'রিটার্ন কিওয়ার্ড জাভাস্ক্রিপ্ট ফাংশনের পরবর্তী লাইনগুলোর এক্সিকিউশন থামিয়ে দেয়।'
        },
        explanation: {
          en: 'Calling res.json() does not stop JavaScript function execution. Writing return ensures that downstream lines in the same function do not execute and try to send another response.',
          bn: 'res.json() কল করলেই ফাংশন থেমে যায় না। return লিখলে নিশ্চিত হওয়া যায় যে নিচের কোডগুলো আর চলবে না এবং দ্বিতীয় কোনো রেসপন্স পাঠিয়ে ক্র্যাশ ঘটাবে না।'
        }
      },
      {
        id: 'q-express-req-object',
        kind: 'mcq',
        topic: 'req object properties',
        question: {
          en: 'Which set of properties are populated by Express on the incoming req object for inspecting incoming traffic?',
          bn: 'ইনকামিং ট্রাফিক পরীক্ষা করার জন্য এক্সপ্রেস req অবজেক্টে কোন প্রোপার্টিগুলো প্রস্তুত করে?'
        },
        options: [
          {
            en: 'req.method, req.url, req.headers, req.params, and req.query',
            bn: 'req.method, req.url, req.headers, req.params, এবং req.query'
          },
          {
            en: 'req.cpuUsage, req.gpuMemory, and req.diskSpeed',
            bn: 'req.cpuUsage, req.gpuMemory, এবং req.diskSpeed'
          },
          {
            en: 'req.dnsLookup, req.arpTable, and req.subnetMask',
            bn: 'req.dnsLookup, req.arpTable, এবং req.subnetMask'
          },
          {
            en: 'req.mysqlConnection, req.mongoClient, and req.redisPool',
            bn: 'req.mysqlConnection, req.mongoClient, এবং req.redisPool'
          }
        ],
        answer: 0,
        hint: {
          en: 'Express decorates the request with HTTP metadata and parsed URL tokens.',
          bn: 'এক্সপ্রেস এইচটিটিপি মেটাডাটা ও ইউআরএল প্যারামিটার দিয়ে রিকোয়েস্ট সাজায়।'
        },
        explanation: {
          en: 'Express enhances the raw Node.js request with convenient properties including req.method, req.url, req.headers, req.params, and req.query.',
          bn: 'এক্সপ্রেস নোড.জেএস-এর রিকোয়েস্ট অবজেক্টকে সমৃদ্ধ করে req.method, req.url, req.headers, req.params এবং req.query-এর মতো দরকারি তথ্য সহজে দেয়।'
        }
      },
      {
        id: 'q-specific-route-precedence',
        kind: 'mcq',
        topic: 'route precedence ordering',
        question: {
          en: 'If app.get("/users/:id") is declared above app.get("/users/settings"), what happens when a client sends a GET request to /users/settings?',
          bn: 'যদি কোডে app.get("/users/:id") রুটটি app.get("/users/settings")-এর উপরে লেখা থাকে, তবে /users/settings-এ রিকোয়েস্ট পাঠালে কী ঘটবে?'
        },
        options: [
          {
            en: 'The /users/:id route captures the request with req.params.id equal to the string "settings", starving the specialized handler',
            bn: '/users/:id রুটটি রিকোয়েস্টটি গ্রহণ করে ফেলবে এবং req.params.id এর মান "settings" হবে, ফলে নিচের রুটটি কখনোই চলবে না'
          },
          {
            en: 'Express throws an UncaughtRouteCollisionException during server startup',
            bn: 'সার্ভার চালুর সময় এক্সপ্রেস UncaughtRouteCollisionException এরর দেবে'
          },
          {
            en: 'The browser displays a 500 Internal Server Error immediately',
            bn: 'ব্রাউজার সাথে সাথে ৫০০ ইন্টারনাল সার্ভার এরর প্রদর্শন করবে'
          },
          {
            en: 'Express automatically merges both handlers into a single function',
            bn: 'এক্সপ্রেস স্বয়ংক্রিয়ভাবে দুটি হ্যান্ডলারকে একটি ফাংশনে পরিণত করবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Dynamic parameters match any non-slash string character sequence.',
          bn: 'ডায়নামিক প্যারামিটার যেকোনো সাধারণ টেক্সট স্ট্রিংকে ম্যাচ করে ফেলে।'
        },
        explanation: {
          en: 'Because Express evaluates routes in declaration order, the wildcard param :id matches the string "settings". Specific static routes must always be registered before dynamic parameterized routes.',
          bn: 'যেহেতু এক্সপ্রেস উপর থেকে নিচে রুট মেলায়, তাই :id ডায়নামিক প্যারামিটার "settings" শব্দটিকে আইডি হিসেবে ধরে ফেলে। তাই নির্দিষ্ট স্ট্যাটিক রুট সর্বদা ডায়নামিক রুটের উপরে রাখতে হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'menus-on-the-wall',
    title: {
      en: 'Advanced Routing — Route Parameters, Query Strings & Modular Routers',
      bn: 'অ্যাডভান্সড রাউটিং — রুট প্যারামিটার, কোয়েরি স্ট্রিং ও মডুলার রাউটার'
    }
  }
};
