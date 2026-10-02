import type { Lesson } from '../../../lib/types';

export const TheNightShiftLesson: Lesson = {
  slug: 'the-night-shift',
  tech: 'express',
  title: {
    en: 'Production Security & Performance — Helmet, CORS, Rate Limiting & Graceful Shutdown',
    bn: 'প্রোডাকশন সিকিউরিটি ও পারফরম্যান্স — হেলমেট, কর্স, রেট লিমিটিং ও গ্রেসফুল শাটডাউন'
  },
  summary: {
    en: 'Deploying Express services into production requires bulletproof defensive configurations and operational resilience. In this lesson, you will master HTTP header hardening with Helmet, cross-origin resource access control via CORS, brute-force mitigation using express-rate-limit, reverse proxy trust settings, and zero-downtime graceful shutdown routines.',
    bn: 'প্রোডাকশনে এক্সপ্রেস সার্ভিস ডেপ্লয় করার জন্য নিশ্ছিদ্র নিরাপত্তা কনফিগারেশন এবং পরিচালন স্থিতিশীলতা থাকা আবশ্যক। এই পাঠে আপনি হেলমেট দিয়ে এইচটিটিপি হেডার সুরক্ষিত করা, কর্স দিয়ে ক্রস-অরিজিন এক্সেস নিয়ন্ত্রণ, রেট লিমিটিং দিয়ে ব্রুট-ফোর্স আক্রমণ প্রতিরোধ, রিভার্স প্রক্সি ট্রাস্ট এবং জিরো-ডাউনটাইম গ্রেসফুল শাটডাউন বাস্তবায়ন গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'production-hardening-overview',
      text: {
        en: 'The Production Defense and Stability Perimeter',
        bn: 'প্রোডাকশন সুরক্ষা ও স্থিতিশীলতা কাঠামো'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you take an Express server from local development to production cloud environments, default framework settings expose security vulnerabilities. Exposing the X-Powered-By header advertises server software to attackers, unrestricted Cross-Origin Resource Sharing (CORS) permits unauthorized domain requests, unthrottled endpoints invite credential stuffing attacks, and abrupt container kills drop active database transactions.',
        bn: 'যখন আপনি একটি এক্সপ্রেস সার্ভার লোকাল এনভায়রনমেন্ট থেকে ক্লাউড প্রোডাকশনে নিয়ে যান, তখন ডিফল্ট কনফিগারেশন অনেক নিরাপত্তা ফাঁকফোকর উন্মুক্ত রাখে। X-Powered-By হেডার আক্রমণকারীদের ফ্রেমওয়ার্কের নাম জানিয়ে দেয়, ক্রস-অরিজিন রিসোর্স শেয়ারিং (CORS) খোলা রাখলে অননুমোদিত সাইট ডাটা চুরি করতে পারে, রেট লিমিট না থাকলে সার্ভার আটকে দেওয়া যায় এবং হঠাৎ কন্টেইনার বন্ধ করলে চলমান ডাটাবেজ লেনদেন নষ্ট হয়ে যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Helmet',
          def: {
            en: 'A security middleware collection setting 15 HTTP headers to protect against XSS, clickjacking, and MIME sniffing attacks.',
            bn: 'একটি নিরাপত্তা মিডেলওয়্যার প্যাকেজ যা ১৫টি এইচটিটিপি হেডার কনফিগার করে XSS, ক্লিকজ্যাকিং এবং মাইম স্নিফিং আক্রমণ প্রতিহত করে।'
          }
        },
        {
          term: 'Cross-Origin Resource Sharing (CORS)',
          def: {
            en: 'A browser security mechanism using HTTP headers to tell browsers which foreign web origins are permitted to access server resources.',
            bn: 'একটি ব্রাউজার নিরাপত্তা ব্যবস্থা যা এইচটিটিপি হেডারের মাধ্যমে নির্দেশ করে কোন বাইরের ওয়েবসাইট সার্ভারের ডাটা অ্যাক্সেস করতে পারবে।'
          }
        },
        {
          term: 'express-rate-limit',
          def: {
            en: 'Middleware that limits repeated requests to public APIs or endpoints, defending against brute-force attacks and Denial of Service.',
            bn: 'মিডেলওয়্যার যা নির্দিষ্ট সময়ে রিকোয়েস্টের সংখ্যা সীমিত করে ব্রুট-ফোর্স আক্রমণ এবং সার্ভিস ডাউন হওয়া রোধ করে।'
          }
        },
        {
          term: 'Graceful Shutdown',
          def: {
            en: 'The orderly termination process where a server stops accepting new connections, drains in-flight requests, closes database pools, and exits cleanly.',
            bn: 'সার্ভার বন্ধের একটি নিয়ন্ত্রিত প্রক্রিয়া যা নতুন রিকোয়েস্ট নেওয়া বন্ধ করে, চলমান কাজ শেষ করে, ডাটাবেজ সংযোগ বিচ্ছিন্ন করে এবং নিরাপদে প্রস্থান করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'helmet-security-headers-table',
      text: {
        en: 'Essential Security Headers Configured by Helmet',
        bn: 'হেলমেট দ্বারা কনফিগার করা প্রয়োজনীয় সিকিউরিটি হেডার'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'HTTP Header', bn: 'এইচটিটিপি হেডার' },
        { en: 'Production Value', bn: 'প্রোডাকশন মান' },
        { en: 'Security Vulnerability Mitigated', bn: 'যে আক্রমণ প্রতিরোধ করে' }
      ],
      rows: [
        [
          { en: 'X-Powered-By', bn: 'X-Powered-By' },
          { en: 'Removed (hidden completely)', bn: 'মুছে ফেলা হয় (সম্পূর্ণ লুকানো)' },
          { en: 'Server software fingerprinting by automated vulnerability scanners', bn: 'স্বয়ংক্রিয় স্ক্যানার দিয়ে সার্ভার ফ্রেমওয়ার্ক শনাক্তকরণ' }
        ],
        [
          { en: 'X-Content-Type-Options', bn: 'X-Content-Type-Options' },
          { en: 'nosniff', bn: 'nosniff' },
          { en: 'MIME-type confusion attacks executing scripts masquerading as images', bn: 'ছবির ছদ্মবেশে ক্ষতিকর স্ক্রিপ্ট চালানোর মাইম আক্রমণ' }
        ],
        [
          { en: 'X-Frame-Options', bn: 'X-Frame-Options' },
          { en: 'SAMEORIGIN (or DENY)', bn: 'SAMEORIGIN (অথবা DENY)' },
          { en: 'Clickjacking attacks embedding the application in invisible iframes', bn: 'অদৃশ্য আইফ্রেমে ওয়েবপেজ বসিয়ে ইউজারকে ঠকানোর ক্লিকজ্যাকিং' }
        ],
        [
          { en: 'Strict-Transport-Security (HSTS)', bn: 'Strict-Transport-Security (HSTS)' },
          { en: 'max-age=15552000; includeSubDomains', bn: 'max-age=15552000; includeSubDomains' },
          { en: 'Man-in-the-middle (MitM) attacks by forcing pure HTTPS connections', bn: 'বাধ্যতামূলক এইচটিটিপিএস প্রয়োগ করে মাঝপথে ডাটা চুরির আক্রমণ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'production-hardening-code',
      text: {
        en: 'Hardened Production Setup with Rate Limiting and Graceful Shutdown',
        bn: 'রেট লিমিটিং ও গ্রেসফুল শাটডাউন সহ সুরক্ষিত প্রোডাকশন সেটআপ'
      }
    },
    {
      type: 'code',
      code: `const express = require('express');
const app = express();

// 1. Trust first reverse proxy (Nginx, AWS ALB, Cloudflare)
app.set('trust proxy', 1);

// 2. Pure in-memory rate limiting simulation (100 requests per 15 minutes)
const RATE_LIMIT_MAX = 100;
const ipRequestBuckets = new Map();

function checkRateLimit(ip) {
  const count = (ipRequestBuckets.get(ip) || 0) + 1;
  ipRequestBuckets.set(ip, count);
  if (count > RATE_LIMIT_MAX) {
    return { allowed: false, count, retryAfter: 900 };
  }
  return { allowed: true, count, remaining: RATE_LIMIT_MAX - count };
}

// 3. Graceful shutdown handler
function registerGracefulShutdown(server) {
  const shutdown = (signal) => {
    console.log('Received signal:', signal);
    server.close(() => {
      console.log('HTTP server closed, draining active pool connections');
      process.exit(0);
    });
    // Force shutdown if connections hang longer than 10 seconds
    setTimeout(() => {
      console.error('Forced shutdown due to timeout');
      process.exit(1);
    }, 10000).unref();
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

// Verification simulation
const testIp = '192.168.1.50';
const limitResult = checkRateLimit(testIp);
console.log('Initial request allowed status:', limitResult.allowed);
// -> Initial request allowed status: true
console.log('Recorded IP request count:', limitResult.count);
// -> Recorded IP request count: 1`,
      caption: {
        en: 'Hardened rate limiting checks and SIGTERM graceful shutdown',
        bn: 'রেট লিমিটিং যাচাই এবং সিগটার্মে গ্রেসফুল শাটডাউন'
      }
    },
    {
      type: 'heading',
      id: 'cors-and-proxy-architecture',
      text: {
        en: 'CORS Preflight and Reverse Proxy Architecture',
        bn: 'কর্স প্রি-ফ্লাইট ও রিভার্স প্রক্সি আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern web architectures place Express behind a reverse proxy like Nginx or AWS CloudFront. If trust proxy is not configured, req.ip reports the IP address of the internal load balancer rather than the actual user, causing rate limiting to block all incoming traffic globally.',
        bn: 'আধুনিক ওয়েব ব্যবস্থায় এক্সপ্রেসকে সর্বদা Nginx বা ক্লাউড লোড ব্যালান্সারের পেছনে রাখা হয়। trust proxy কনফিগার না করলে req.ip আসল ব্যবহারকারীর বদলে লোড ব্যালান্সারের অভ্যন্তরীণ আইপি দেখায়, যার ফলে রেট লিমিটিং পুরো পৃথিবীর সমস্ত ট্রাফিক একযোগে ব্লক করে দেয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Enable Helmet Early: Mount helmet() as the very first middleware to inject security headers on every response.',
          bn: '১. হেলমেট শুরুতে মাউন্ট: প্রতিটি রেসপন্সে সিকিউরিটি হেডার যুক্ত করতে অ্যাপ্লিকেশনের একদম শুরুতে helmet() মাউন্ট করুন।'
        },
        {
          en: '2. Whitelist CORS Origins: Never use origin: "*" in authenticated APIs. Explicitly declare trusted frontend domains.',
          bn: '২. সুনির্দিষ্ট কর্স ডোমেইন: লগইনযুক্ত এপিআই-তে কখনো origin: "*" দেবেন না। ফ্রন্টএন্ড ডোমেইনের তালিকা নির্দিষ্ট করে দিন।'
        },
        {
          en: '3. Enable trust proxy: Set app.set("trust proxy", 1) so req.ip correctly inspects the X-Forwarded-For client IP header.',
          bn: '৩. trust proxy চালু: app.set("trust proxy", 1) দিন যাতে req.ip আসল ক্লায়েন্টের আইপি সঠিকভাবে পড়তে পারে।'
        },
        {
          en: '4. Handle SIGTERM Orderly: Listen to SIGTERM from Docker or Kubernetes to finish in-flight requests without dropping traffic.',
          bn: '৪. সিগটার্মে সুশৃঙ্খল প্রস্থান: কুবারনেটিস বা ডকার থেকে SIGTERM গ্রহণ করে চলমান রিকোয়েস্ট শেষ করে সার্ভার বন্ধ করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'exp-prod-ex1',
      kind: 'mcq',
      topic: 'helmet x-powered-by header removal',
      question: {
        en: 'Why does Helmet remove the "X-Powered-By: Express" HTTP response header by default?',
        bn: 'হেলমেট কেন ডিফল্টভাবে "X-Powered-By: Express" রেসপন্স হেডারটি মুছে ফেলে?'
      },
      options: [
        {
          en: 'It prevents automated vulnerability scanners and malicious actors from fingerprinting the server framework and exploiting Express-specific known CVE vulnerabilities',
          bn: 'এটি আক্রমণকারীদের সার্ভার সফটওয়্যার শনাক্ত করতে বাধা দেয় এবং এক্সপ্রেসের সুনির্দিষ্ট সিকিউরিটি ত্রুটি খোঁজা অসম্ভব করে'
        },
        {
          en: 'It reduces internet bandwidth costs by exactly 50 percent',
          bn: 'এটি ইন্টারনেটের ব্যান্ডউইথ খরচ ঠিক ৫০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'X-Powered-By is an invalid HTTP header in the HTTP/2 specification',
          bn: 'X-Powered-By হলো এইচটিটিপি/২ স্পেসিফিকেশনে একটি সম্পূর্ণ অবৈধ হেডার'
        },
        {
          en: 'It forces the client browser to reload all cached image files',
          bn: 'এটি ক্লায়েন্ট ব্রাউজারকে সমস্ত ক্যাশ করা ইমেজ ফাইল রিলোড করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Minimizing framework information exposure is a core security principle.',
        bn: 'সার্ভারের ভেতরের ফ্রেমওয়ার্কের নাম লুকিয়ে রাখা নিরাপত্তার একটি মূল নীতি।'
      },
      explanation: {
        en: 'Information disclosure helps attackers target version-specific vulnerabilities. Removing X-Powered-By prevents automated scanners from identifying Express.',
        bn: 'সার্ভারের সফটওয়্যার নাম জানা থাকলে আক্রমণকারীরা সহজেই নির্দিষ্ট আক্রমণ চালাতে পারে। এই হেডার সরালে সার্ভার সুরক্ষিত থাকে।'
      }
    },
    {
      id: 'exp-prod-ex2',
      kind: 'mcq',
      topic: 'cors origin configuration security standard',
      question: {
        en: 'What is the critical security danger of configuring cors({ origin: "*", credentials: true }) on an API that uses session cookies?',
        bn: 'সেশন কুকি ব্যবহার করা এপিআই-তে cors({ origin: "*", credentials: true }) কনফিগার করলে কোন মারাত্মক বিপদ ঘটে?'
      },
      options: [
        {
          en: 'Modern browsers strictly reject the combination of origin: "*" with credentials: true because it would permit any malicious website on the internet to read authenticated user data',
          bn: 'আধুনিক ব্রাউজারগুলো origin: "*" এবং credentials: true একসাথে গ্রহণ করে না কারণ এটি যেকোনো ক্ষতিকর সাইটকে ইউজারের ডাটা চুরির সুযোগ দেয়'
        },
        {
          en: 'It converts all database tables into read-only files',
          bn: 'এটি সমস্ত ডাটাবেজ টেবিলকে রিড-অনলি ফাইলে পরিণত করে'
        },
        {
          en: 'It increases the Node.js memory consumption to 100 percent',
          bn: 'এটি নোড.জেএস মেমরি খরচ ১০০ শতাংশে বাড়িয়ে দেয়'
        },
        {
          en: 'It automatically restarts the server every 10 seconds',
          bn: 'এটি প্রতি ১০ সেকেন্ড পর পর স্বয়ংক্রিয়ভাবে সার্ভার রিস্টার্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The CORS specification explicitly forbids wildcard origins when sending authenticated credentials.',
        bn: 'কুকি বা ক্রেডেনশিয়াল পাঠানোর ক্ষেত্রে কর্স স্পেসিফিকেশন ওয়াইল্ডকার্ড (*) কঠোরভাবে নিষিদ্ধ করেছে।'
      },
      explanation: {
        en: 'W3C CORS specifications block responses where Access-Control-Allow-Origin is "*" and Access-Control-Allow-Credentials is true. You must specify an exact origin.',
        bn: 'CORS নিয়ম অনুযায়ী ক্রেডেনশিয়াল সাপোর্ট থাকলে অরিজিন কখনোই "*" হতে পারবে না। নির্দিষ্ট ফ্রন্টএন্ড ডোমেইনের নাম উল্লেখ করা বাধ্যতামূলক।'
      }
    },
    {
      id: 'exp-prod-ex3',
      kind: 'mcq',
      topic: 'trust proxy configuration purpose',
      question: {
        en: 'Why must app.set("trust proxy", 1) be enabled when running Express behind Nginx, AWS CloudFront, or Cloudflare?',
        bn: 'Nginx বা ক্লাউডফ্লেয়ারের পেছনে এক্সপ্রেস চালালে কেন app.set("trust proxy", 1) কনফিগার করা আবশ্যক?'
      },
      options: [
        {
          en: 'Without trust proxy, req.ip returns the internal IP of the reverse proxy, causing rate limiting and security logs to confuse all distinct users as one single machine',
          bn: 'trust proxy না দিলে req.ip রিভার্স প্রক্সির অভ্যন্তরীণ আইপি দেখায়, যার ফলে রেট লিমিটিং সব ইউজারকে একটিমাত্র মেশিন ভেবে সবাইকে ব্লক করে'
        },
        {
          en: 'It encrypts the Node.js source code using AES-256',
          bn: 'এটি AES-256 দিয়ে নোড.জেএস সোর্স কোড এনক্রিপ্ট করে ফেলে'
        },
        {
          en: 'It disables all HTTP routing on port 3000',
          bn: 'এটি পোর্ট ৩০০০-এর সমস্ত এইচটিটিপি রাউটিং বন্ধ করে দেয়'
        },
        {
          en: 'It automatically installs Nginx inside the Docker container',
          bn: 'এটি ডকার কন্টেইনারের ভেতরে নিজে থেকে Nginx ইনস্টল করে নেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Express must look at the X-Forwarded-For header to find the real client IP.',
        bn: 'আসল ক্লায়েন্টের আইপি খুঁজে পেতে এক্সপ্রেসকে X-Forwarded-For হেডার পড়তে নির্দেশ দিতে হয়।'
      },
      explanation: {
        en: 'Reverse proxies forward the original client IP in the X-Forwarded-For header. Enabling trust proxy tells Express to trust that header and populate req.ip accurately.',
        bn: 'প্রক্সি সার্ভার আসল ইউজারের আইপি X-Forwarded-For হেডারে পাঠায়। trust proxy চালু থাকলে এক্সপ্রেস সেই হেডারটি পড়ে req.ip-তে সঠিক আইপি সেট করে।'
      }
    },
    {
      id: 'exp-prod-ex4',
      kind: 'mcq',
      topic: 'graceful shutdown execution flow',
      question: {
        en: 'In what order should tasks execute during a Kubernetes SIGTERM graceful shutdown sequence for an Express service?',
        bn: 'কুবারনেটিসে এক্সপ্রেস সার্ভারের জন্য SIGTERM গ্রেসফুল শাটডাউন ধাপে কোন ক্রমানুসারে কাজ সম্পন্ন হওয়া উচিত?'
      },
      options: [
        {
          en: '1. Stop accepting new connections via server.close(); 2. Allow active in-flight requests to finish; 3. Close database and Redis pools; 4. Call process.exit(0)',
          bn: '১. server.close() দিয়ে নতুন রিকোয়েস্ট বন্ধ; ২. চলমান রিকোয়েস্ট শেষ হতে দেওয়া; ৩. ডাটাবেজ ও রেডিস বন্ধ; ৪. process.exit(0) কল করা'
        },
        {
          en: '1. Call process.exit(1) immediately; 2. Delete all database tables; 3. Notify the load balancer',
          bn: '১. সাথে সাথে process.exit(1); ২. ডাটাবেজের টেবিল মুছে ফেলা; ৩. লোড ব্যালান্সারকে জানানো'
        },
        {
          en: '1. Clear all browser cookies; 2. Restart the physical server power switch',
          bn: '১. সব ব্রাউজার কুকি মুছে ফেলা; ২. ফিজিক্যাল সার্ভারের পাওয়ার সুইচ রিস্টার্ট করা'
        },
        {
          en: '1. Send a 500 error to every connected client; 2. Clear server RAM memory',
          bn: '১. প্রতিটি ক্লায়েন্টকে ৫০০ এরর পাঠানো; ২. সার্ভারের র‍্যাম মেমরি মুছে ফেলা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Stop incoming traffic first, finish ongoing transactions, close data pools, then exit.',
        bn: 'প্রথমে নতুন ট্রাফিক আটকান, চলমান কাজ শেষ করুন, ডাটা সংযোগ বন্ধ করে নিরাপদে বের হোন।'
      },
      explanation: {
        en: 'Graceful shutdown stops new incoming traffic, lets active HTTP requests complete without truncation, closes database connections cleanly, and exits with code 0.',
        bn: 'গ্রেসফুল শাটডাউন নতুন সংযোগ বন্ধ করে চলমান রিকোয়েস্টগুলো কোনো ক্ষতি ছাড়াই শেষ হতে দেয়, ডাটাবেজ সংযোগ সুন্দরভাবে বিচ্ছিন্ন করে এবং নিরাপদে প্রস্থান করে।'
      }
    }
  ],
  quiz: {
    id: 'the-night-shift-quiz',
    title: {
      en: 'Production Security & Performance Quiz',
      bn: 'প্রোডাকশন সিকিউরিটি ও পারফরম্যান্স কুইজ'
    },
    questions: [
      {
        id: 'q-rate-limiting-http-status-429',
        kind: 'mcq',
        topic: 'http 429 too many requests and retry-after',
        question: {
          en: 'Which HTTP status code and response header must be returned when a client exceeds their rate limit threshold?',
          bn: 'ক্লায়েন্ট রেট লিমিট অতিক্রম করলে কোন এইচটিটিপি স্ট্যাটাস কোড এবং রেসপন্স হেডার ফেরত দেওয়া বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'HTTP 429 Too Many Requests along with a Retry-After header indicating how many seconds to wait',
            bn: 'HTTP 429 Too Many Requests এবং কত সেকেন্ড অপেক্ষা করতে হবে তা নির্দেশক Retry-After হেডার'
          },
          {
            en: 'HTTP 404 Not Found along with a Cache-Control: no-store header',
            bn: 'HTTP 404 Not Found এবং Cache-Control: no-store হেডার'
          },
          {
            en: 'HTTP 200 OK along with an X-Limit-Over: true header',
            bn: 'HTTP 200 OK এবং X-Limit-Over: true হেডার'
          },
          {
            en: 'HTTP 502 Bad Gateway along with an Allow header',
            bn: 'HTTP 502 Bad Gateway এবং Allow হেডার'
          }
        ],
        answer: 0,
        hint: {
          en: 'RFC 6585 explicitly standardizes HTTP 429 and Retry-After for rate limiting.',
          bn: 'RFC 6585 বিশেষভাবে রেট লিমিটিংয়ের জন্য এইচটিটিপি ৪২৯ এবং Retry-After নির্ধারণ করেছে।'
        },
        explanation: {
          en: 'RFC 6585 defines 429 Too Many Requests. The Retry-After header informs the client how many seconds or which timestamp to wait before retrying.',
          bn: 'RFC 6585 অনুযায়ী ৪২৯ টু মেনি রিকোয়েস্ট দিতে হয় এবং Retry-After হেডারের মাধ্যমে ক্লায়েন্টকে কতক্ষণ অপেক্ষা করতে হবে তা স্পষ্ট জানানো হয়।'
        }
      },
      {
        id: 'q-cors-preflight-options',
        kind: 'mcq',
        topic: 'cors preflight options request',
        question: {
          en: 'Why do browsers automatically dispatch an HTTP OPTIONS request before sending a cross-origin PUT or DELETE with custom headers?',
          bn: 'কাস্টম হেডার সহ ক্রস-অরিজিন PUT বা DELETE পাঠানোর আগে ব্রাউজার কেন স্বয়ংক্রিয়ভাবে একটি HTTP OPTIONS রিকোয়েস্ট পাঠায়?'
        },
        options: [
          {
            en: 'It is a preflight handshake checking whether the destination server permits the HTTP method and headers before dispatching the potentially mutating request',
            bn: 'এটি একটি প্রি-ফ্লাইট যাচাই যা ডাটা পরিবর্তনকারী আসল রিকোয়েস্ট পাঠানোর আগেই পরীক্ষা করে সার্ভার মেথড ও হেডারগুলো অনুমোদন করে কিনা'
          },
          {
            en: 'It benchmarks network latency between the browser and DNS server',
            bn: 'এটি ব্রাউজার এবং ডিএনএস সার্ভারের মধ্যকার নেটওয়ার্ক গতি পরীক্ষা করে'
          },
          {
            en: 'The browser is checking whether the server supports WebSockets',
            bn: 'ব্রাউজার পরীক্ষা করে সার্ভার ওয়েবসকেট সমর্থন করে কিনা'
          },
          {
            en: 'OPTIONS requests are used to download CSS stylesheet themes',
            bn: 'সিএসএস স্টাইলশিট থিম ডাউনলোড করার জন্য OPTIONS রিকোয়েস্ট পাঠানো হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Preflight requests ask permission before executing non-simple HTTP requests.',
          bn: 'প্রি-ফ্লাইট রিকোয়েস্ট জটিল মেথড পাঠানোর আগেই সার্ভারের কাছে আগাম অনুমতি চায়।'
        },
        explanation: {
          en: 'Preflight OPTIONS requests protect servers from executing unexpected mutating operations (such as DELETE) from untrusted origins before confirming CORS policy compliance.',
          bn: 'প্রি-ফ্লাইট OPTIONS রিকোয়েস্ট সার্ভারকে রক্ষা করে যাতে অনুমোদনহীন সাইট থেকে ক্ষতিকর কোনো পরিবর্তনমূলক অপারেশন হঠাৎ কার্যকর হতে না পারে।'
        }
      },
      {
        id: 'q-hsts-security-mechanism',
        kind: 'mcq',
        topic: 'strict transport security hsts functionality',
        question: {
          en: 'What does the Strict-Transport-Security (HSTS) header instruct the client browser to do on subsequent visits?',
          bn: 'Strict-Transport-Security (HSTS) হেডারটি পরবর্তী ভিজিটের সময় ক্লায়েন্ট ব্রাউজারকে কী করতে নির্দেশ দেয়?'
        },
        options: [
          {
            en: 'Force all subsequent connections to the domain to automatically use HTTPS, completely preventing insecure HTTP downgrade attacks',
            bn: 'ডোমেইনের সমস্ত পরবর্তী সংযোগ স্বয়ংক্রিয়ভাবে এইচটিটিপিএস দিয়ে সম্পন্ন করতে বাধ্য করে এবং অনিরাপদ এইচটিটিপি ডাউনগ্রেড আক্রমণ রোধ করে'
          },
          {
            en: 'Clear local browser history and session storage daily',
            bn: 'প্রতিদিন ব্রাউজারের হিস্ট্রি এবং সেশন স্টোরেজ মুছে ফেলতে'
          },
          {
            en: 'Encrypt the client graphics card drivers',
            bn: 'ক্লায়েন্টের গ্রাফিক্স কার্ড ড্রাইভারকে এনক্রিপ্ট করতে'
          },
          {
            en: 'Disallow the user from downloading media files',
            bn: 'ব্যবহারকারীকে কোনো মিডিয়া ফাইল ডাউনলোডে বাধা দিতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'HSTS ensures browsers never talk to your server over plain HTTP.',
          bn: 'HSTS নিশ্চিত করে যে ব্রাউজার কখনোই সাধারণ এইচটিটিপি দিয়ে সার্ভারে কথা বলবে না।'
        },
        explanation: {
          en: 'HSTS tells browsers that the domain must only be reached via HTTPS for the specified duration (e.g. 1 year), neutralizing SSL stripping attacks.',
          bn: 'HSTS ব্রাউজারকে বলে দেয় যে নির্দিষ্ট সময়ের মধ্যে এই ডোমেইনে কেবল এইচটিটিপিএস দিয়েই যোগাযোগ করতে হবে, যা এসএসএল স্ট্রিপিং আক্রমণ প্রতিহত করে।'
        }
      },
      {
        id: 'q-redis-rate-limiter-cluster',
        kind: 'mcq',
        topic: 'distributed rate limiting with redis',
        question: {
          en: 'Why should a horizontally scaled Express deployment with 10 container replicas use a Redis store for express-rate-limit instead of default memory?',
          bn: '১০টি কন্টেইনারে চলমান হরিজন্টালি স্কেলড এক্সপ্রেস সিস্টেমে কেন লোকাল মেমরির বদলে রেডিস দিয়ে রেট লিমিট রাখা উচিত?'
        },
        options: [
          {
            en: 'In-memory stores track requests per container instance; with 10 replicas, an attacker could send 10 times the allowed traffic by hitting different containers. Redis shares state globally across all pods',
            bn: 'লোকাল মেমরি কেবল নিজের কন্টেইনারের ডাটা রাখে; ফলে ১০টি কন্টেইনার থাকলে আক্রমণকারী ১০ গুণ বেশি রিকোয়েস্ট পাঠাতে পারে। রেডিস সমস্ত পডের মাঝে একীভূত হিসাব রাখে'
          },
          {
            en: 'Redis decreases the size of TCP packets by 95 percent',
            bn: 'রেডিস টিসিপি প্যাকেটের আকার ৯৫ শতাংশ সংকুচিত করে'
          },
          {
            en: 'In-memory stores crash the Node.js runtime if more than 5 users connect',
            bn: '৫ জনের বেশি ইউজার ঢুকলে লোকাল মেমরি নোড.জেএসকে ক্র্যাশ করিয়ে দেয়'
          },
          {
            en: 'Redis is required to compile TypeScript in production',
            bn: 'প্রোডাকশনে টাইপস্ক্রিপ্ট চালাতে রেডিস থাকা বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Distributed replicas do not share Node.js process memory.',
          bn: 'বিভিন্ন কন্টেইনার একে অপরের নোড.জেএস প্রসেস মেমরি শেয়ার করতে পারে না।'
        },
        explanation: {
          en: 'When traffic is distributed across 10 replicas by a load balancer, local memory counters are isolated. A centralized Redis store aggregates IP counts across the entire fleet.',
          bn: 'লোড ব্যালান্সারের মাধ্যমে ট্রাফিক বিভিন্ন কন্টেইনারে ভাগ হয়ে যায়। কেন্দ্রীয় রেডিস ডাটাবেজ ব্যবহার করলে পুরো ক্লাস্টারের জন্য একসাথে সঠিক রেট লিমিট প্রয়োগ করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-grand-service',
    title: {
      en: 'Production Architecture & Testing — Layered MVC & Portless Supertest Suites',
      bn: 'প্রোডাকশন আর্কিটেকচার ও টেস্টিং — লেয়ার্ড এমভিসি ও পোর্টলেস সুপারটেস্ট স্যুট'
    }
  }
};
