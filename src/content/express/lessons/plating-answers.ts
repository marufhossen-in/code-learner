import type { Lesson } from '../../../lib/types';

export const PlatingAnswersLesson: Lesson = {
  slug: 'plating-answers',
  tech: 'express',
  title: {
    en: 'Response Engineering — HTTP Statuses, Content Negotiation & Cookies',
    bn: 'রেসপন্স ইঞ্জিনিয়ারিং — এইচটিটিপি স্ট্যাটাস, কনটেন্ট নেগোসিয়েশন ও কুকিজ'
  },
  summary: {
    en: 'Production web services communicate with frontend clients, third-party consumers, and browsers through disciplined response contracts. In this lesson, you will master semantic HTTP status codes, uniform JSON API envelopes, secure cookie configuration, content negotiation with res.format, and high-performance file downloads.',
    bn: 'প্রোডাকশন ওয়েব সার্ভিসগুলো ফ্রন্টএন্ড ক্লায়েন্ট এবং ব্রাউজারের সাথে সুশৃঙ্খল রেসপন্স চুক্তির মাধ্যমে যোগাযোগ করে। এই পাঠে আপনি অর্থপূর্ণ এইচটিটিপি স্ট্যাটাস কোড, ইউনিফর্ম জেএসন এপিআই এনভেলপ, সুরক্ষিত কুকি কনফিগারেশন, res.format দিয়ে কনটেন্ট নেগোসিয়েশন এবং ফাইল ডাউনলোড গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'response-contract-overview',
      text: {
        en: 'The Disciplined Response Pipeline',
        bn: 'সুশৃঙ্খল রেসপন্স পাইপলাইন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build Application Programming Interfaces (APIs) for web and mobile clients, returning raw status 200 responses with ad-hoc strings creates brittle client applications. Professional Express engineering demands semantic HTTP status codes, standardized JSON response structures, content negotiation, and secure cookie storage for authentication tokens.',
        bn: 'যখন আপনি ওয়েব ও মোবাইল ক্লায়েন্টের জন্য অ্যাপ্লিকেশন প্রোগ্রামিং ইন্টারফেস (APIs) তৈরি করেন, তখন সমস্ত ক্ষেত্রে এলোমেলো টেক্সটসহ ২০০ স্ট্যাটাস পাঠালে ক্লায়েন্ট অ্যাপ্লিকেশনগুলো ভঙ্গুর হয়ে পড়ে। পেশাদার এক্সপ্রেস ডেভেলপমেন্টে অর্থপূর্ণ এইচটিটিপি স্ট্যাটাস কোড, মানসম্মত জেএসন কাঠামো, কনটেন্ট নেগোসিয়েশন এবং টোকেনের জন্য সুরক্ষিত কুকি ব্যবহার অপরিহার্য।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Semantic Status Codes',
          def: {
            en: 'Industry-standard HTTP status codes communicating exact outcomes (such as 201 Created, 204 No Content, 401 Unauthorized, 403 Forbidden).',
            bn: 'শিল্প-মানসম্পন্ন এইচটিটিপি স্ট্যাটাস কোড যা রিকোয়েস্টের ফলাফল স্পষ্টভাবে প্রকাশ করে (যেমন ২০১ ক্রিয়েটেড, ২০৪ নো কনটেন্ট, ৪০১ ও ৪০৩ ফরবিডেন)।'
          }
        },
        {
          term: 'Response Envelope',
          def: {
            en: 'A consistent top-level JSON structure wrapping payloads with status, data, error, and pagination metadata properties.',
            bn: 'একটি ধারাবাহিক শীর্ষ স্তরের জেএসন কাঠামো যা status, data, error এবং পেজিনেশন মেটাডাটা দিয়ে তথ্যকে সুন্দরভাবে আবদ্ধ করে।'
          }
        },
        {
          term: 'HttpOnly Cookie',
          def: {
            en: 'A browser cookie inaccessible to client-side JavaScript document.cookie, mitigating Cross-Site Scripting (XSS) credential theft.',
            bn: 'ব্রাউজারের একটি সুরক্ষিত কুকি যা জাভাস্ক্রিপ্ট document.cookie দিয়ে পড়া যায় না, ফলে এক্সএসএস আক্রমণ থেকে রক্ষা পাওয়া যায়।'
          }
        },
        {
          term: 'res.format()',
          def: {
            en: 'An Express response helper performing content negotiation based on the incoming request Accept header (JSON, HTML, text).',
            bn: 'একটি এক্সপ্রেস রেসপন্স মেথড যা ইনকামিং Accept হেডারের ওপর ভিত্তি করে কনটেন্ট নেগোসিয়েশন (JSON, HTML, text) পরিচালনা করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'http-status-codes-matrix',
      text: {
        en: 'Essential RESTful HTTP Status Codes Matrix',
        bn: 'প্রয়োজনীয় রেস্টফুল এইচটিটিপি স্ট্যাটাস কোড ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Status Code', bn: 'স্ট্যাটাস কোড' },
        { en: 'Standard Name', bn: 'মানসম্মত নাম' },
        { en: 'When to Return in Express', bn: 'এক্সেপ্রেসে কখন পাঠাবেন' }
      ],
      rows: [
        [
          { en: '200', bn: '২০০' },
          { en: 'OK', bn: 'OK' },
          { en: 'Successful GET, PUT, or PATCH returning data', bn: 'সফল GET, PUT বা PATCH যা ডাটা ফেরত দেয়' }
        ],
        [
          { en: '201', bn: '২০১' },
          { en: 'Created', bn: 'Created' },
          { en: 'Successful POST creating a new resource, set Location header', bn: 'নতুন রিসোর্স তৈরির সফল POST, Location হেডারসহ' }
        ],
        [
          { en: '204', bn: '২০৪' },
          { en: 'No Content', bn: 'No Content' },
          { en: 'Successful DELETE or action yielding zero response body', bn: 'সফল DELETE যেখানে কোনো রেসপন্স বডি থাকে না' }
        ],
        [
          { en: '401', bn: '৪০১' },
          { en: 'Unauthorized', bn: 'Unauthorized' },
          { en: 'Missing, expired, or invalid authentication credentials', bn: 'অনুপস্থিত, মেয়াদোত্তীর্ণ বা ভুল অথেনটিকেশন তথ্য' }
        ],
        [
          { en: '403', bn: '৪০৩' },
          { en: 'Forbidden', bn: 'Forbidden' },
          { en: 'Authenticated user lacks necessary permissions or role', bn: 'লগইন করা ব্যবহারকারীর প্রয়োজনীয় অনুমতি বা রোল নেই' }
        ],
        [
          { en: '404', bn: '৪০৪' },
          { en: 'Not Found', bn: 'Not Found' },
          { en: 'Requested endpoint or entity ID does not exist', bn: 'অনুরোধ করা এন্ডপয়েন্ট বা রিসোর্সটি ডাটাবেজে নেই' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'response-methods-code',
      text: {
        en: 'Standard Response Formatter and Secure Cookie Setting',
        bn: 'স্ট্যান্ডার্ড রেসপন্স ফরম্যাটার ও সুরক্ষিত কুকি নির্ধারণ'
      }
    },
    {
      type: 'code',
      code: `const express = require('express');
const app = express();

// 1. Standardized JSON Response Envelope Helper
function sendSuccess(res, statusCode, data, meta = {}) {
  return res.status(statusCode).json({
    success: true,
    statusCode: statusCode,
    data: data,
    meta: meta
  });
}

// 2. Cookie issuance with HttpOnly and SameSite security
app.post('/api/v1/auth/session', (req, res) => {
  const sessionToken = 'secure-jwt-token-xyz';
  
  // Set cookie valid for 86400000 ms (24 hours)
  res.cookie('auth_token', sessionToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 86400000
  });

  return sendSuccess(res, 201, { user: 'developer' });
});

// 3. Resource deletion returning strict 204 No Content
app.delete('/api/v1/items/:id', (req, res) => {
  // 204 responses must never contain a body
  return res.status(204).end();
});

// Verification simulation
const mockResponse = { success: true, statusCode: 201, itemsCount: 1 };
console.log('API response status:', mockResponse.statusCode);
// -> API response status: 201
console.log('Payload items count:', mockResponse.itemsCount);
// -> Payload items count: 1`,
      caption: {
        en: 'Unified JSON response envelopes and secure cookie configuration',
        bn: 'একীভূত জেএসন রেসপন্স এনভেলপ ও সুরক্ষিত কুকি কনফিগারেশন'
      }
    },
    {
      type: 'heading',
      id: 'content-negotiation-architecture',
      text: {
        en: 'Content Negotiation with res.format',
        bn: 'res.format দিয়ে কনটেন্ট নেগোসিয়েশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a single URL endpoint serves both web browsers and API consumers, hardcoding res.json() forces browser users to view raw text. Express provides res.format() to inspect the client Accept header and return matching representations automatically.',
        bn: 'যখন একটি একক ইউআরএল এন্ডপয়েন্ট ব্রাউজার এবং মোবাইল এপিআই উভয়ের জন্য ব্যবহৃত হয়, তখন কেবল res.json() লিখলে ব্রাউজার ব্যবহারকারীরা র টেক্সট দেখতে পান। এক্সপ্রেস res.format() মেথড প্রদান করে যা ক্লায়েন্টের Accept হেডার যাচাই করে স্বয়ংক্রিয়ভাবে উপযুক্ত ফরম্যাট ফেরত দেয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Use 201 for Created: When creating database records, always send HTTP 201 Created and provide the URL in the Location header.',
          bn: '১. তৈরিতে ২০১ ব্যবহার: নতুন ডাটাবেজ রেকর্ড তৈরি হলে সর্বদা ২০১ ক্রিয়েটেড স্ট্যাটাস এবং Location হেডারে নতুন ইউআরএল দিন।'
        },
        {
          en: '2. Empty Body on 204: Never pass JSON or text to a 204 response. Use res.status(204).end() to conform to RFC 9110.',
          bn: '২. ২০৪-এ বডি মুক্ত: ২০৪ স্ট্যাটাসে কোনো জেএসন বা লেখা পাঠাবেন না। RFC 9110 মানদণ্ড মেনে res.status(204).end() দিন।'
        },
        {
          en: '3. Arm Cookies: Always set httpOnly: true, sameSite: "strict", and secure: true in production to prevent cookie sniffing and theft.',
          bn: '৩. সুরক্ষিত কুকি: টোকেন চুরির হাত থেকে রক্ষা পেতে কুকিতে সর্বদা httpOnly: true, sameSite: "strict" এবং secure: true দিন।'
        },
        {
          en: '4. Stream Large Files: When serving multi-megabyte PDFs or video assets, use res.sendFile() or stream pipelines rather than reading files into memory.',
          bn: '৪. বড় ফাইল স্ট্রিমিং: বড় সাইজের পিডিএফ বা ভিডিও ফাইল মেমরিতে না রেখে res.sendFile() বা স্ট্রিম পাইপলাইন দিয়ে পাঠান।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'exp-resp-ex1',
      kind: 'mcq',
      topic: 'http 204 no content specifications',
      question: {
        en: 'According to HTTP specifications, what is strictly prohibited in an HTTP 204 No Content response?',
        bn: 'এইচটিটিপি স্পেসিফিকেশন অনুসারে এইচটিটিপি ২০৪ নো কনটেন্ট রেসপন্সে কোন বিষয়টি কঠোরভাবে নিষিদ্ধ?'
      },
      options: [
        {
          en: 'Including any message body or payload in the HTTP response',
          bn: 'এইচটিটিপি রেসপন্সে যেকোনো ধরনের মেসেজ বডি বা ডাটা পেলোড অন্তর্ভুক্ত করা'
        },
        {
          en: 'Setting response headers like Date or Server',
          bn: 'Date বা Server-এর মতো রেসপন্স হেডার যুক্ত করা'
        },
        {
          en: 'Returning status 204 from a DELETE route',
          bn: 'DELETE রুট থেকে ২০৪ স্ট্যাটাস ফেরত দেওয়া'
        },
        {
          en: 'Using TCP port 443 for HTTPS encryption',
          bn: 'এইচটিটিপিএস এনক্রিপশনের জন্য টিসিপি পোর্ট ৪৪৩ ব্যবহার করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'The name "No Content" literally dictates that the response body must be empty.',
        bn: '"নো কনটেন্ট" নামটি স্পষ্টভাবে নির্দেশ করে যে রেসপন্সের বডি সম্পূর্ণ খালি থাকতে হবে।'
      },
      explanation: {
        en: 'RFC 9110 specifies that a 204 response must not include a message body. Calling res.status(204).end() closes the connection with zero bytes.',
        bn: 'RFC 9110 বলে যে ২০৪ রেসপন্সে কোনো বডি থাকতে পারবে না। res.status(204).end() কল করলে কোনো অতিরিক্ত বাইট ছাড়াই সংযোগ শেষ হয়।'
      }
    },
    {
      id: 'exp-resp-ex2',
      kind: 'mcq',
      topic: 'httponly cookie security property',
      question: {
        en: 'What crucial security protection does setting { httpOnly: true } on an authentication cookie provide?',
        bn: 'অথেনটিকেশন কুকিতে { httpOnly: true } অপশনটি নির্ধারণ করলে কোন গুরুত্বপূর্ণ নিরাপত্তা সুরক্ষা পাওয়া যায়?'
      },
      options: [
        {
          en: 'It blocks client-side JavaScript document.cookie from reading the cookie, shielding session tokens from Cross-Site Scripting (XSS) theft',
          bn: 'এটি ক্লায়েন্টের জাভাস্ক্রিপ্ট document.cookie দিয়ে কুকি পড়া আটকে দেয়, ফলে XSS আক্রমণ হলেও সেশন টোকেন সুরক্ষিত থাকে'
        },
        {
          en: 'It prevents the browser from saving the cookie to the local hard drive',
          bn: 'এটি ব্রাউজারকে লোকাল হার্ডড্রাইভে কুকি সংরক্ষণ করতে বাধা দেয়'
        },
        {
          en: 'It converts the HTTP response from JSON into XML format',
          bn: 'এটি এইচটিটিপি রেসপন্সকে জেএসন থেকে এক্সএমএল ফরম্যাটে রূপান্তর করে'
        },
        {
          en: 'It forces the client to download a mobile application',
          bn: 'এটি ক্লায়েন্টকে মোবাইল অ্যাপ্লিকেশন ডাউনলোড করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'It prevents injected malicious client scripts from reading session secrets.',
        bn: 'এটি ইনজেক্ট করা ক্ষতিকর স্ক্রিপ্টগুলোকে সেশন টোকেন পড়তে বাধা দেয়।'
      },
      explanation: {
        en: 'HttpOnly cookies cannot be accessed via document.cookie in the browser. Even if an attacker executes an XSS payload, they cannot extract the token.',
        bn: 'HttpOnly কুকি ব্রাউজারের জাভাস্ক্রিপ্ট কোড থেকে সম্পূর্ণ অদৃশ্য থাকে। ফলে ওয়েবসাইটে XSS আক্রমণ হলেও আক্রমণকারী টোকেন চুরি করতে পারে না।'
      }
    },
    {
      id: 'exp-resp-ex3',
      kind: 'mcq',
      topic: 'res format content negotiation helper',
      question: {
        en: 'What is the primary function of Express res.format({ "text/html": fn, "application/json": fn })?',
        bn: 'এক্সপ্রেস res.format({ "text/html": fn, "application/json": fn })-এর মূল কাজ কী?'
      },
      options: [
        {
          en: 'It performs HTTP content negotiation, selecting the appropriate handler that matches the client request Accept header',
          bn: 'এটি এইচটিটিপি কনটেন্ট নেগোসিয়েশন করে ক্লায়েন্টের পাঠানো Accept হেডারের সাথে মিলিয়ে সঠিক রেসপন্স ফরম্যাটটি বেছে নেয়'
        },
        {
          en: 'It reformats messy JavaScript source code using Prettier',
          bn: 'এটি প্রিটিয়ার ব্যবহার করে এলোমেলো জাভাস্ক্রিপ্ট কোড সাজিয়ে দেয়'
        },
        {
          en: 'It formats database SQL schemas into JSON schema representations',
          bn: 'এটি ডাটাবেজ এসকিউএল স্কিমাকে জেএসন স্কিমায় রূপান্তর করে'
        },
        {
          en: 'It clears the cache of all connected Nginx reverse proxy servers',
          bn: 'এটি সংযুক্ত તમામ Nginx রিভার্স প্রক্সি সার্ভারের ক্যাশ পরিষ্কার করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'It evaluates the Accept HTTP request header sent by the client.',
        bn: 'এটি ক্লায়েন্টের পাঠানো Accept এইচটিটিপি রিকোয়েস্ট হেডার মূল্যায়ন করে।'
      },
      explanation: {
        en: 'res.format checks the Accept header on the request. If the client requested JSON, it runs the json callback; if HTML was requested, it executes the html callback.',
        bn: 'res.format ক্লায়েন্টের Accept হেডার পরীক্ষা করে। ক্লায়েন্ট জেএসন চাইলে json কলব্যাক চালায়, আর এইচটিএমএল চাইলে html কলব্যাক কার্যকর করে।'
      }
    },
    {
      id: 'exp-resp-ex4',
      kind: 'mcq',
      topic: 'res sendfile vs streaming large downloads',
      question: {
        en: 'Why is res.sendFile(path) superior to using fs.readFileSync() followed by res.send(buffer) for serving downloadable files?',
        bn: 'ডাউনলোড ফাইল পাঠানোর ক্ষেত্রে fs.readFileSync() এবং res.send(buffer)-এর চেয়ে res.sendFile(path) কেন শ্রেষ্ঠ?'
      },
      options: [
        {
          en: 'res.sendFile streams the file in small chunks directly to the network socket, avoiding blocking the event loop or consuming gigabytes of server RAM',
          bn: 'res.sendFile ফাইলটিকে ছোট ছোট চ্যাঙ্কে সরাসরি স্ট্রিমিং করে, ফলে ইভেন্ট লুপ আটকায় না এবং সার্ভারের গিগাবাইট মেমরি অপচয় হয় না'
        },
        {
          en: 'res.sendFile automatically removes all passwords from PDF documents',
          bn: 'res.sendFile পিডিএফ ডকুমেন্ট থেকে সমস্ত পাসওয়ার্ড স্বয়ংক্রিয়ভাবে মুছে দেয়'
        },
        {
          en: 'fs.readFileSync is banned by the Node.js Foundation',
          bn: 'fs.readFileSync ফাংশনটি নোড.জেএস ফাউন্ডেশন দ্বারা নিষিদ্ধ করা হয়েছে'
        },
        {
          en: 'res.sendFile converts image files into animated GIF formats',
          bn: 'res.sendFile ইমেজ ফাইলগুলোকে অ্যানিমেটেড জিআইএফ ফরম্যাটে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Streaming handles large files in non-blocking bite-sized chunks.',
        bn: 'স্ট্রিমিং পুরো ফাইল মেমরিতে না এনে ধাপে ধাপে নেটওয়ার্কে পাঠায়।'
      },
      explanation: {
        en: 'fs.readFileSync loads the entire file into server memory synchronously. res.sendFile streams the file asynchronously and supports HTTP range requests and caching.',
        bn: 'fs.readFileSync পুরো ফাইল একবারে মেমরিতে তুলে ইভেন্ট লুপ আটকে দেয়। কিন্তু res.sendFile ব্যাকগ্রাউন্ডে স্ট্রিম করে এবং ক্যাশিং সাপোর্ট দেয়।'
      }
    }
  ],
  quiz: {
    id: 'plating-answers-quiz',
    title: {
      en: 'Response Engineering & HTTP Statuses Quiz',
      bn: 'রেসপন্স ইঞ্জিনিয়ারিং ও এইচটিটিপি স্ট্যাটাস কুইজ'
    },
    questions: [
      {
        id: 'q-http-401-vs-403',
        kind: 'mcq',
        topic: '401 unauthorized vs 403 forbidden semantics',
        question: {
          en: 'In professional REST API engineering, what is the precise semantic distinction between HTTP 401 and HTTP 403?',
          bn: 'পেশাদার REST API তৈরিতে এইচটিটিপি ৪০১ এবং এইচটিটিপি ৪০৩ এর মধ্যে সঠিক পার্থক্য কোনটি?'
        },
        options: [
          {
            en: '401 Unauthorized means authentication is missing or invalid (who are you?); 403 Forbidden means identity is verified but permission is denied (you cannot enter)',
            bn: '৪০১ নির্দেশ করে যে ব্যবহারকারী লগইন করেনি বা টোকেন ভুল (আপনি কে?); ৪০৩ নির্দেশ করে পরিচয় জানা কিন্তু অধিকার নেই (প্রবেশ নিষেধ)'
          },
          {
            en: '401 is reserved exclusively for GET requests, while 403 is reserved exclusively for POST requests',
            bn: '৪০১ শুধুমাত্র GET রিকোয়েস্টের জন্য আর ৪০৩ শুধুমাত্র POST রিকোয়েস্টের জন্য সংরক্ষিত'
          },
          {
            en: '401 indicates a database failure, while 403 indicates an operating system crash',
            bn: '৪০১ ডাটাবেজ ব্যর্থতা আর ৪০৩ অপারেটিং সিস্টেম ক্র্যাশ প্রকাশ করে'
          },
          {
            en: 'There is no difference; 401 and 403 are interchangeable aliases in HTTP/1.1',
            bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই; এগুলো এইচটিটিপি/১.১-এর সমার্থক শব্দ'
          }
        ],
        answer: 0,
        hint: {
          en: '401 is an identity/authentication failure; 403 is a permission/authorization refusal.',
          bn: '৪০১ হলো পরিচয় না জানার ত্রুটি; ৪০৩ হলো অনুমতি না থাকার প্রত্যাখ্যান।'
        },
        explanation: {
          en: '401 denotes lack of valid authentication credentials. 403 denotes that the server knows who the client is, but refuses to authorize the requested action.',
          bn: '৪০১ মানে টোকেন নেই বা ভুল। আর ৪০৩ মানে ইউজার কে তা সার্ভার জানে, কিন্তু কাজটি করার পারমিশন ইউজারের নেই।'
        }
      },
      {
        id: 'q-samesite-cookie-attribute',
        kind: 'mcq',
        topic: 'samesite cookie attribute protection',
        question: {
          en: 'How does setting SameSite: "strict" on an authentication session cookie protect users from Cross-Site Request Forgery (CSRF)?',
          bn: 'অথেনটিকেশন কুকিতে SameSite: "strict" নির্ধারণ করা কীভাবে ব্যবহারকারীকে CSRF আক্রমণ থেকে রক্ষা করে?'
        },
        options: [
          {
            en: 'The browser completely refrains from attaching the cookie to any cross-site request originating from a foreign domain (e.g. following a third-party link)',
            bn: 'বাইরের কোনো ডোমেইন থেকে লিংক ক্লিক করে রিকোয়েস্ট আসলে ব্রাউজার সেই রিকোয়েস্টে এই কুকি পাঠানো সম্পূর্ণ বন্ধ রাখে'
          },
          {
            en: 'It encrypts the user hard drive with a military-grade private key',
            bn: 'এটি ব্যবহারকারীর হার্ডড্রাইভকে শক্তিশালী চাবি দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'It forces the client browser to refresh every 30 seconds',
            bn: 'এটি প্রতি ৩০ সেকেন্ড পর পর ক্লায়েন্ট ব্রাউজারকে রিফ্রেশ করতে বাধ্য করে'
          },
          {
            en: 'It converts the HTTP port from 80 to 8080 automatically',
            bn: 'এটি স্বয়ংক্রিয়ভাবে এইচটিটিপি পোর্ট ৮০ থেকে ৮০৮০-তে পরিবর্তন করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'SameSite=strict prevents cookies from traveling on cross-site navigations.',
          bn: 'SameSite=strict অন্য ওয়েবসাইট থেকে আসা যেকোনো লিংকে কুকি পাঠানো আটকে দেয়।'
        },
        explanation: {
          en: 'With SameSite: "strict", cookies are only sent in first-party contexts. If a malicious site triggers a request to your API, the browser omits the auth cookie.',
          bn: 'SameSite: "strict" থাকলে ব্রাউজার অন্য কোনো ওয়েবসাইট থেকে আসা রিকোয়েস্টে এই কুকি কখনোই পাঠায় না, ফলে সিএসআরএফ আক্রমণ ব্যর্থ হয়।'
        }
      },
      {
        id: 'q-location-header-201',
        kind: 'mcq',
        topic: 'http location header on 201 created',
        question: {
          en: 'When returning HTTP status 201 Created after creating a new resource, what HTTP response header should be included to indicate where the resource lives?',
          bn: 'নতুন রিসোর্স তৈরির পর ২০১ ক্রিয়েটেড স্ট্যাটাস পাঠানোর সময় রিসোর্সটির ঠিকানা জানাতে কোন রেসপন্স হেডার দেওয়া উচিত?'
        },
        options: [
          {
            en: 'Location: /api/v1/users/42',
            bn: 'Location: /api/v1/users/42'
          },
          {
            en: 'Destination-Port: 3000',
            bn: 'Destination-Port: 3000'
          },
          {
            en: 'File-Path: /var/data/users/42.json',
            bn: 'File-Path: /var/data/users/42.json'
          },
          {
            en: 'Redirect-Target: https://google.com',
            bn: 'Redirect-Target: https://google.com'
          }
        ],
        answer: 0,
        hint: {
          en: 'The standard REST header for identifying created resource URIs is Location.',
          bn: 'তৈরিকৃত রিসোর্সের ইউআরআই প্রকাশের স্ট্যান্ডার্ড রেস্ট হেডার হলো Location।'
        },
        explanation: {
          en: 'HTTP/1.1 specifications state that a 201 Created response should include a Location header containing the canonical URL where the created resource can be fetched.',
          bn: 'এইচটিটিপি স্পেসিফিকেশন নির্দেশ করে যে ২০১ ক্রিয়েটেড রেসপন্সে Location হেডার থাকা উচিত যাতে নতুন রিসোর্সটির আসল ইউআরএল উল্লেখ থাকে।'
        }
      },
      {
        id: 'q-uniform-api-envelope',
        kind: 'mcq',
        topic: 'consistent json response structure',
        question: {
          en: 'Why is standardizing on a uniform API response envelope (e.g. { success, statusCode, data, error }) advantageous for frontend development teams?',
          bn: 'ফ্রন্টএন্ড ডেভেলপমেন্ট টিমের জন্য একটি অভিন্ন এপিআই এনভেলপ ({ success, statusCode, data, error }) মান্য করার সুবিধা কী?'
        },
        options: [
          {
            en: 'Frontend HTTP clients (Axios, Fetch wrappers) can implement a single predictable interceptor for response decoding, loading states, and error handling',
            bn: 'ফ্রন্টএন্ড ক্লায়েন্টগুলো একটিমাত্র প্রেডিক্টেবল ইন্টারসেপ্টর দিয়ে সমস্ত ডাটা ডিকোডিং, লোডিং ও এরর হ্যান্ডলিং সহজে পরিচালনা করতে পারে'
          },
          {
            en: 'It reduces TCP packet sizes by exactly 80 percent across mobile networks',
            bn: 'এটি মোবাইল নেটওয়ার্কে টিসিপি প্যাকেটের সাইজ ঠিক ৮০ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'It removes the need for browsers to download JavaScript frameworks',
            bn: 'এটি ব্রাউজারে জাভাস্ক্রিপ্ট ফ্রেমওয়ার্ক ডাউনলোডের প্রয়োজনীয়তা বাতিল করে'
          },
          {
            en: 'It prevents SQL injection vulnerabilities in MySQL databases',
            bn: 'এটি মাইএসকিউএল ডাটাবেজে এসকিউএল ইনজেকশন সম্পূর্ণ প্রতিরোধ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A consistent shape eliminates defensive conditional guesswork in client code.',
          bn: 'একটি ধারাবাহিক গঠন ক্লায়েন্ট কোডে এলোমেলো অনুমান ও শর্ত লেখার ঝামেলা দূর করে।'
        },
        explanation: {
          en: 'Enveloping guarantees predictable schema contracts. Client developers write one unified error parser rather than inspecting different payload shapes per endpoint.',
          bn: 'অভিন্ন রেসপন্স ফরম্যাট থাকলে ফ্রন্টএন্ড ডেভেলপারদের প্রতিটি এন্ডপয়েন্টের জন্য আলাদা কোড লিখতে হয় না, একটিমাত্র হ্যান্ডলার সব সামলে নেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-bouncer-at-the-door',
    title: {
      en: 'Authentication & Authorization — JWT, Sessions & Role-Based Access Control',
      bn: 'অথেনটিকেশন ও অথরাইজেশন — জেডব্লিউটি, সেশন ও রোল-বেসড অ্যাক্সেস কন্ট্রোল'
    }
  }
};
