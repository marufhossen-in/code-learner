import type { Lesson } from '../../../lib/types';

export const cargoManifestLesson: Lesson = {
  slug: 'the-cargo-manifest',
  tech: 'web-apis',
  title: {
    en: 'The Fetch API & Network Requests — Headers, Promises, and AbortController',
    bn: 'ফেচ এপিআই ও নেটওয়ার্ক রিকোয়েস্ট: হেডার্স, প্রমিস ও AbortController'
  },
  summary: {
    en: 'Modern web applications depend on asynchronous network communication to exchange data with backend APIs. In this lesson, you will master the native Fetch API, replacing legacy XMLHttpRequest patterns with clean Promise-based pipelines. Dissect the two-stage Promise lifecycle: header resolution (`response.ok`, HTTP status codes) followed by streaming body parsing (`response.json()`, `response.text()`, `response.blob()`). Understand CORS security policies, custom Headers manipulation, request methods (GET, POST, PUT, DELETE), and reliable request cancellation using AbortController and AbortSignal.timeout(). Implement an executable HTTP request wrapper with timeout and error handling in TypeScript.',
    bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশন ব্যাকএন্ড সার্ভারের সাথে ডেটা আদান-প্রদানের জন্য অ্যাসিঙ্ক্রোনাস নেটওয়ার্ক যোগাযোগের ওপর গভীরভাবে নির্ভরশীল। এই পাঠে আপনি ব্রাউজারের নেটিভ Fetch API পুঙ্খানুপুঙ্খভাবে শিখবেন, যা সেকেলে XMLHttpRequest-এর জটিলতা দূর করে পরিচ্ছন্ন প্রমিস-ভিত্তিক আর্কিটেকচার উপহার দেয়। ফেচের দ্বি-স্তরীয় প্রমিস জীবনচক্র বিশ্লেষণ করবেন: হেডার যাচাই (`response.ok`, স্ট্যাটাস কোড) এবং বডি পার্সিং (`response.json()`, `text()`, `blob()`)। CORS নিরাপত্তা নীতি, কাস্টম হেডার্স, বিভিন্ন মেথড (GET, POST, PUT) এবং AbortController ও AbortSignal.timeout() দিয়ে নেটওয়ার্ক রিকোয়েস্ট বাতিল করার আধুনিক কৌশল শিখবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর নেটওয়ার্ক রিকোয়েস্ট র্যাপার বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'fetch-paradigm-and-promises',
      text: {
        en: 'The Fetch Paradigm: Replacing XMLHttpRequest with Clean Promises',
        bn: 'ফেচ প্যারাডাইম: পরিচ্ছন্ন প্রমিসের মাধ্যমে XMLHttpRequest প্রতিস্থাপন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build modern web applications, retrieving data from remote HTTP endpoints is a fundamental task.',
        bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরি করার সময় দূরবর্তী সার্ভার থেকে তথ্য এনে পেজে দেখানো একটি মৌলিক কাজ।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In early web development, making asynchronous HTTP requests required the verbose XMLHttpRequest object with nested event listeners. The modern Fetch API standardizes network calls into clean, composable Promises. However, fetch possesses a critical design behavior that catches many developers: the Promise returned by fetch() only rejects on genuine physical network failures (such as DNS failure, total loss of internet connectivity, or severed TCP connections). An HTTP 404 (Not Found) or HTTP 500 (Internal Server Error) response is considered a successful HTTP transaction; it resolves the promise normally. Production code must always evaluate the "response.ok" boolean property before processing data.',
        bn: 'আগে ওয়েব পেজে ডেটা আনতে সেকেলে XMLHttpRequest অবজেক্ট ব্যবহার করতে হতো যাতে একাধিক জটিল ইভেন্ট লিসেনার লিখতে হতো। আধুনিক Fetch API সমস্ত নেটওয়ার্ক কলকে একটি পরিচ্ছন্ন প্রমিস-ভিত্তিক কাঠামোয় রূপান্তর করেছে। তবে ফেচ ব্যবহারের ক্ষেত্রে একটি অত্যন্ত গুরুত্বপূর্ণ নিয়ম মনে রাখা আবশ্যক: fetch() থেকে আসা প্রমিসটি কেবল তখনই ব্যর্থ (reject) হয় যখন সত্যিকারের কোনো ভৌত নেটওয়ার্ক বিপর্যয় ঘটে (যেমন ইন্টারনেট সংযোগ বিচ্ছিন্ন বা ডিএনএস ফেইল)। সার্ভার যদি HTTP 404 (Not Found) বা HTTP 500 (সার্ভার এরর) কোডও ফেরত দেয়, তবে কিন্তু প্রমিস রিজেক্ট হয় না, বরং স্বাভাবিকভাবেই সমাধান (resolve) হয়। তাই নির্ভরযোগ্য কোড লিখতে হলে সর্বদা "response.ok" প্রপার্টি পরীক্ষা করে নিশ্চিত হতে হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'fetch-api',
          def: {
            en: 'The standardized browser interface executing asynchronous HTTP network requests and returning native JavaScript Promises.',
            bn: 'ব্রাউজারের মানসম্মত নেটিভ ইন্টারফেস যা অ্যাসিঙ্ক্রোনাস নেটওয়ার্ক রিকোয়েস্ট চালিয়ে জাভাস্ক্রিপ্ট প্রমিস ফেরত দেয়।'
          }
        },
        {
          term: 'response-ok-property',
          def: {
            en: 'A built-in boolean property that evaluates to true if the HTTP response status code lies within the 200 to 299 successful range.',
            bn: 'একটি বিল্ট-ইন বুলিয়ান প্রপার্টি যা সার্ভারের স্ট্যাটাস কোড ২০০ থেকে ২৯৯ এর সফল সীমার মধ্যে থাকলে সত্য (true) ফেরত দেয়।'
          }
        },
        {
          term: 'abort-controller',
          def: {
            en: 'A standard browser utility providing an AbortSignal to cancel pending network requests or enforce client-side timeout thresholds.',
            bn: 'একটি স্ট্যান্ডার্ড ব্রাউজার অবজেক্ট যার সিগন্যাল ব্যবহার করে চলমান নেটওয়ার্ক কল বাতিল করা বা নির্দিষ্ট সময়ের পর টাইমআউট কার্যকর করা যায়।'
          }
        },
        {
          term: 'cors-policy',
          def: {
            en: 'Cross-Origin Resource Sharing: a security mechanism where servers use HTTP response headers to permit or block cross-domain requests.',
            bn: 'একটি নিরাপত্তা ব্যবস্থা যেখানে সার্ভার বিশেষ HTTP হেডারের মাধ্যমে ঠিক করে অন্য কোনো ডোমেইন থেকে তার ডেটা পড়া যাবে কি না।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'two-stage-promise-lifecycle-table',
      text: {
        en: 'The Two-Stage Promise Lifecycle: Headers vs Body Stream',
        bn: 'দ্বি-স্তরীয় প্রমিস জীবনচক্র: হেডার্স বনাম বডি স্ট্রিম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A fetch operation completes in two distinct phases: first receiving HTTP status headers, and subsequently streaming the response payload body.',
        bn: 'একটি ফেচ অপারেশন দুটি ধাপে সম্পন্ন হয়: প্রথমে সার্ভারের স্ট্যাটাস ও হেডার্স গ্রহণ করা হয়, এবং পরবর্তীতে রেসপন্সের মূল বডি ডেটা স্ট্রিম করে পড়া হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Body Parsing Method', bn: 'বডি পার্সিং মেথড' },
        { en: 'Output Data Type', bn: 'ফলাফলের ডেটা টাইপ' },
        { en: 'Primary Architectural Use Case', bn: 'প্রধান ব্যবহারের ক্ষেত্র' },
        { en: 'Typical HTTP Content-Type', bn: 'সাধারণ কনটেন্ট টাইপ' }
      ],
      rows: [
        [
          { en: 'response.json()', bn: 'response.json()' },
          { en: 'Parsed JavaScript Object or Array', bn: 'পার্স করা জাভাস্ক্রিপ্ট অবজেক্ট বা অ্যারে' },
          { en: 'Standard REST API endpoints returning structured JSON data', bn: 'স্ট্রাকচার্ড ডেটাবহনকারী সাধারণ REST API এন্ডপয়েন্ট' },
          { en: 'application/json', bn: 'application/json' }
        ],
        [
          { en: 'response.text()', bn: 'response.text()' },
          { en: 'Raw decoded UTF-8 String', bn: 'সাধারণ টেক্সট বা স্ট্রিং ডেটা' },
          { en: 'HTML templates, plain text files, CSV tables, SVG markup', bn: 'এইচটিএমএল টেমপ্লেট, সাধারণ টেক্সট ফাইল ও এসভিজি কোড' },
          { en: 'text/plain, text/html', bn: 'text/plain, text/html' }
        ],
        [
          { en: 'response.blob()', bn: 'response.blob()' },
          { en: 'Binary Large Object (Blob)', bn: 'বাইনারি অবজেক্ট (Blob)' },
          { en: 'Downloading raw media files: images, audio, video, PDF documents', bn: 'ছবি, অডিও, ভিডিও এবং পিডিএফ ফাইলের মতো বাইনারি মিডিয়া ডেটা' },
          { en: 'image/jpeg, image/png, application/pdf', bn: 'image/jpeg, image/png, application/pdf' }
        ],
        [
          { en: 'response.arrayBuffer()', bn: 'response.arrayBuffer()' },
          { en: 'Fixed-length raw binary ArrayBuffer memory', bn: 'নির্দিষ্ট দৈর্ঘ্যের কাঁচা বাইনারি মেমরি বাফার' },
          { en: 'Low-level cryptography, WebAssembly bytecode, Web Audio synthesis', bn: 'ওয়েবঅ্যাসেম্বলি বাইটকোড, ক্রিপ্টোগ্রাফি এবং উন্নত অডিও প্রসেসিং' },
          { en: 'application/octet-stream', bn: 'application/octet-stream' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-fetch-wrapper-code',
      text: {
        en: 'Executable Fetch Request Wrapper with Timeout Simulation',
        bn: 'টাইমআউটসহ ফেচ র্যাপারের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how production frontend applications wrap HTTP requests with status checks and error handling.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি স্ট্যাটাস যাচাই এবং এরর হ্যান্ডলিং সহ একটি কার্যকর নেটওয়ার্ক রিকোয়েস্ট ক্লায়েন্ট বাস্তবায়ন করে।'
      }
    },
    {
      type: 'code',
      code: `// Resilient HTTP Request Wrapper with Status Validation

interface HttpResponse<T> {
  ok: boolean;
  status: number;
  data: T | null;
  errorMessage: string | null;
}

interface UserProfile {
  id: number;
  user: string;
}

function executeHttpRequest<T>(
  mockStatusCode: number,
  mockPayload: string
): HttpResponse<T> {
  // 1. Evaluate whether status is in the 200-299 success range
  const isOk = mockStatusCode >= 200 && mockStatusCode <= 299;

  let parsedData: T | null = null;
  let errorMessage: string | null = null;

  if (isOk) {
    try {
      parsedData = JSON.parse(mockPayload) as T;
    } catch {
      errorMessage = 'Failed to parse JSON payload';
    }
  } else {
    errorMessage = 'HTTP ' + mockStatusCode;
  }

  return {
    ok: isOk,
    status: mockStatusCode,
    data: parsedData,
    errorMessage
  };
}

const successResponse = executeHttpRequest<UserProfile>(
  200,
  JSON.stringify({ id: 101, user: 'Alice' })
);

const notFoundResponse = executeHttpRequest<UserProfile>(
  404,
  JSON.stringify({ error: 'User not found' })
);

console.log('Successful request status:', successResponse.status);
console.log('Successful request ok boolean:', successResponse.ok);
console.log('Parsed user name:', successResponse.data?.user);
console.log('Not-found request status:', notFoundResponse.status);
console.log('Not-found request ok boolean:', notFoundResponse.ok);
console.log('Not-found request error message:', notFoundResponse.errorMessage);

// prints: Successful request status: 200
// prints: Successful request ok boolean: true
// prints: Parsed user name: Alice
// prints: Not-found request status: 404
// prints: Not-found request ok boolean: false
// prints: Not-found request error message: HTTP 404`
    },
    {
      type: 'heading',
      id: 'cors-policies-and-preflights',
      text: {
        en: 'CORS Security Policies and Preflight Requests',
        bn: 'CORS নিরাপত্তা নীতি এবং প্রিফ্লাইট রিকোয়েস্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Same-Origin Policy (SOP) restricts scripts running on one origin (protocol + domain + port) from interacting with resources from another origin. To allow cross-domain requests, servers configure Cross-Origin Resource Sharing (CORS) headers. When sending requests with custom headers or methods like PUT or DELETE, the browser automatically dispatches an HTTP OPTIONS "Preflight" request first. The preflight includes "Access-Control-Request-Method" and "Access-Control-Request-Headers". If the remote server fails to respond with a matching "Access-Control-Allow-Origin" header, the browser immediately cancels the request with a CORS error.',
        bn: 'ব্রাউজারের সেইম-অরিজিন পলিসি (SOP) একটি ডোমেইনের স্ক্রিপ্টকে অন্য ডোমেইনের ডেটা পড়া থেকে আটকে দেয় (প্রোটোকল + ডোমেইন + পোর্ট মিল থাকতে হয়)। ভিন্ন ডোমেইনে নিরাপদে ডেটা আদান-প্রদান করতে সার্ভারে CORS (Cross-Origin Resource Sharing) হেডার কনফিগার করতে হয়। কাস্টম হেডার বা PUT ও DELETE মেথডে রিকোয়েস্ট পাঠানোর আগে ব্রাউজার নিজে থেকেই একটি HTTP OPTIONS "প্রিফ্লাইট" রিকোয়েস্ট পাঠায়। এই প্রিফ্লাইটে "Access-Control-Request-Method" পাঠানো হয়। দূরবর্তী সার্ভার যদি ফিরতি রেসপন্সে "Access-Control-Allow-Origin" হেডার না দেয়, তবে ব্রাউজার সাথে সাথে রিকোয়েস্টটি আটকে দিয়ে CORS এরর দেখায়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Fetch only rejects on network failure: HTTP 404 and 500 do not reject the Promise; always check response.ok.',
          bn: 'ফেচ কেবল নেটওয়ার্ক ব্যর্থতায় রিজেক্ট হয়: ৪০৪ বা ৫০০ এররে প্রমিস রিজেক্ট হয় না; তাই সর্বদা response.ok পরীক্ষা করুন।'
        },
        {
          en: 'Parsing is a two-step process: Await the response headers first, then await response.json() or response.text().',
          bn: 'পার্সিং দুই ধাপে সম্পন্ন হয়: প্রথমে রেসপন্স হেডারের জন্য অপেক্ষা করুন, তারপর response.json() বা text()-এর জন্য অপেক্ষা করুন।'
        },
        {
          en: 'Cancel requests with AbortController: Pass signal to fetch options to enforce timeouts and cancel stale in-flight requests.',
          bn: 'AbortController দিয়ে রিকোয়েস্ট বাতিল করুন: টাইমআউট কার্যকর করতে এবং অপ্রয়োজনীয় নেটওয়ার্ক রিকোয়েস্ট আটকাতে সিগন্যাল ব্যবহার করুন।'
        },
        {
          en: 'CORS is enforced by browsers: Configure Access-Control-Allow-Origin headers on the server to permit cross-origin requests.',
          bn: 'CORS ব্রাউজার দ্বারা নিয়ন্ত্রিত হয়: ভিন্ন ডোমেইন থেকে অ্যাক্সেস দিতে সার্ভারে Access-Control-Allow-Origin হেডার সেট করতে হয়।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-warehouse-district',
    tech: 'web-apis',
    title: {
      en: 'Client-Side Storage — localStorage, sessionStorage, and IndexedDB',
      bn: 'ক্লায়েন্ট-সাইড স্টোরেজ: লোকালস্টোরেজ, সেশনস্টোরেজ ও ইনডেক্সডডিবি'
    }
  },
  exercises: [
    {
      id: 'cm-ex1',
      kind: 'mcq',
      topic: 'fetch-promise-rejection-semantics',
      question: {
        en: 'Under which of the following circumstances will the JavaScript fetch() Promise actively REJECT?',
        bn: 'কোন পরিস্থিতিতে জাভাস্ক্রিপ্ট fetch()-এর প্রমিসটি সক্রিয়ভাবে রিজেক্ট (Reject) হবে?'
      },
      options: [
        {
          en: 'A genuine network failure occurs (e.g. DNS lookup failure, severed internet connection, or TCP connection reset)',
          bn: 'প্রকৃত কোনো ভৌত নেটওয়ার্ক ব্যর্থতা ঘটলে (যেমন ডিএনএস ফেইল, ইন্টারনেট সংযোগ বিচ্ছিন্ন বা টিসিপি সংযোগ রিসেট)'
        },
        {
          en: 'The backend web server returns an HTTP 404 Not Found error',
          bn: 'ব্যাকএন্ড সার্ভার যখন HTTP 404 Not Found এরর ফেরত পাঠায়'
        },
        {
          en: 'The backend web server returns an HTTP 500 Internal Server Error',
          bn: 'ব্যাকএন্ড সার্ভার যখন HTTP 500 Internal Server Error ফেরত পাঠায়'
        },
        {
          en: 'The backend returns a JSON payload with an empty array',
          bn: 'সার্ভার যখন ফাঁকা অ্যারেসহ কোনো JSON ডেটা ফেরত দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Fetch only rejects if the network fails to transmit the request. HTTP 404/500 are valid HTTP responses.',
        bn: 'নেটওয়ার্কে প্যাকেট পাঠানো অসম্ভব হলেই কেবল রিজেক্ট হয়; ৪০৪ বা ৫০০ একটি বৈধ HTTP রেসপন্স।'
      },
      explanation: {
        en: 'Fetch resolves HTTP error codes (404, 500) normally with response.ok set to false; only network/DNS failures trigger Promise rejection.',
        bn: 'HTTP ৪০৪ ও ৫০০ কোডের ক্ষেত্রেও ফেচ স্বাভাবিকভাবে কাজ শেষ করে এবং response.ok ফলস দেয়; কেবল নেটওয়ার্কহীনতায় প্রমিস রিজেক্ট হয়।'
      }
    },
    {
      id: 'cm-ex2',
      kind: 'mcq',
      topic: 'response-ok-boolean-range',
      question: {
        en: 'What HTTP status code range causes the "response.ok" boolean property to evaluate to true in modern browsers?',
        bn: 'কোন HTTP স্ট্যাটাস কোড সীমার ক্ষেত্রে "response.ok" প্রপার্টিটি সত্য (true) হিসেবে মূল্যায়িত হয়?'
      },
      options: [
        {
          en: 'HTTP status codes in the range 200 through 299 (such as 200 OK, 201 Created, 204 No Content)',
          bn: 'HTTP স্ট্যাটাস কোড ২০০ থেকে ২৯৯ এর মধ্যে হলে (যেমন 200 OK, 201 Created, 204 No Content)'
        },
        {
          en: 'All status codes less than 1000',
          bn: '১০০০ এর কম সমস্ত স্ট্যাটাস কোডের ক্ষেত্রে'
        },
        {
          en: 'Only status code 200 exactly; all other codes return false',
          bn: 'কেবলমাত্র ২০০ কোডের জন্য; বাকি সব ক্ষেত্রে false হয়'
        },
        {
          en: 'Status codes that end in an even number',
          bn: 'যেসব স্ট্যাটাস কোডের শেষে জোড় সংখ্যা থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The entire 2xx success class sets response.ok to true.',
        bn: 'পুরো 2xx শ্রেণির সফল স্ট্যাটাস কোডগুলো response.ok-কে সত্য করে।'
      },
      explanation: {
        en: 'The WHATWG Fetch standard defines response.ok as true if response.status is between 200 and 299 inclusive.',
        bn: 'স্ট্যান্ডার্ড অনুযায়ী স্ট্যাটাস কোড ২০০ থেকে ২৯৯ এর মধ্যে থাকলে response.ok সত্য হয়।'
      }
    },
    {
      id: 'cm-ex3',
      kind: 'mcq',
      topic: 'abort-controller-timeout-implementation',
      question: {
        en: 'How do frontend engineers enforce a strict 5000-millisecond network timeout on a fetch request using AbortController?',
        bn: 'AbortController ব্যবহার করে কোনো ফেচ রিকোয়েস্টে কীভাবে ঠিক ৫০০০ মিলিসেকেন্ডের কঠোর টাইমআউট কার্যকর করা হয়?'
      },
      options: [
        {
          en: 'Instantiate const controller = new AbortController(), pass { signal: controller.signal } into fetch options, and schedule setTimeout(() => controller.abort(), 5000)',
          bn: 'const controller = new AbortController() তৈরি করে ফেচ অপশনে { signal: controller.signal } দেওয়া হয় এবং setTimeout(() => controller.abort(), 5000) শিডিউল করা হয়'
        },
        {
          en: 'Unplug the computer Ethernet cable after 5 seconds',
          bn: '৫ সেকেন্ড পর কম্পিউটারের নেটওয়ার্ক তার খুলে ফেলা হয়'
        },
        {
          en: 'Because fetch automatically cancels after 1 millisecond on all computers',
          bn: 'কারণ ফেচ সব কম্পিউটারে ১ মিলিসেকেন্ড পর নিজে থেকেই বাতিল হয়ে যায়'
        },
        {
          en: 'Set window.timeout = 5000 in CSS styles',
          bn: 'CSS ফাইলে window.timeout = 5000 লিখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pass controller.signal to fetch. Call controller.abort() when the timer fires.',
        bn: 'controller.signal পাস করুন এবং টাইমার শেষে controller.abort() কল করুন।'
      },
      explanation: {
        en: 'AbortController links a cancel signal to the underlying browser network stack, cleanly terminating in-flight sockets.',
        bn: 'AbortController ব্রাউজারের নেটওয়ার্ক স্ট্যাকের সাথে সিগন্যাল যুক্ত করে চলমান সংযোগটি বাতিল করে।'
      }
    },
    {
      id: 'cm-ex4',
      kind: 'mcq',
      topic: 'cors-preflight-options-trigger',
      question: {
        en: 'Why does a browser send an automatic HTTP OPTIONS "Preflight" request before executing certain cross-origin fetch requests?',
        bn: 'কিছু ক্রস-অরিজিন ফেচ রিকোয়েস্ট চালানোর আগে ব্রাউজার কেন নিজে থেকেই একটি স্বয়ংক্রিয় HTTP OPTIONS "প্রিফ্লাইট" রিকোয়েস্ট পাঠায়?'
      },
      options: [
        {
          en: 'To verify with the remote server whether the cross-origin method (such as PUT or DELETE) or custom headers (like Authorization) are safe and permitted before sending the actual payload',
          bn: 'মূল ডেটা পাঠানোর আগেই দূরবর্তী সার্ভারটি ওই মেথড (যেমন PUT বা DELETE) বা কাস্টম হেডার (যেমন Authorization) অনুমোদন করে কি না তা আগে নিশ্চিত হতে'
        },
        {
          en: 'Because OPTIONS requests format the remote database hard drive',
          bn: 'কারণ OPTIONS রিকোয়েস্ট সার্ভারের হার্ড ড্রাইভ ফরম্যাট করে'
        },
        {
          en: 'To increase the download speed of the subsequent GET request by 200 percent',
          bn: 'পরবর্তী GET রিকোয়েস্টের গতি ২০০ শতাংশ বৃদ্ধি করতে'
        },
        {
          en: 'Preflight requests were created by the International Maritime Organization',
          bn: 'কারণ আন্তর্জাতিক নৌ সংস্থা প্রিফ্লাইট রিকোয়েস্ট উদ্ভাবন করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Preflight checks permissions first so non-simple requests do not mutate server state without permission.',
        bn: 'অনুমতি ছাড়া ক্ষতিকর পরিবর্তন যেন না ঘটে সেজন্য আগে সার্ভার থেকে অনুমতি যাচাই করা হয়।'
      },
      explanation: {
        en: 'Preflight requests protect legacy servers from unexpected cross-origin mutating requests by verifying CORS headers in advance.',
        bn: 'প্রিফ্লাইট রিকোয়েস্ট সার্ভারের নিরাপত্তা নিশ্চিত করে অনুমোদনহীন ক্ষতিকর রিকোয়েস্ট আটকে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'cargo-manifest-quiz',
    title: {
      en: 'Fetch API, Network Streams, and CORS Security Quiz',
      bn: 'ফেচ এপিআই, নেটওয়ার্ক স্ট্রিম ও CORS নিরাপত্তা কুইজ'
    },
    questions: [
      {
        id: 'cmq-q1',
        kind: 'mcq',
        topic: 'body-stream-single-read-limitation',
        question: {
          en: 'What error occurs if an application attempts to call both "await response.json()" and "await response.text()" sequentially on the same Fetch Response object?',
          bn: 'একই Fetch Response অবজেক্টে পরপর "await response.json()" এবং "await response.text()" উভয় মেথড কল করলে কোন এরর দেখা দেয়?'
        },
        options: [
          {
            en: 'TypeError: Failed to execute read: body stream already read (because the underlying ReadableStream body can only be consumed once)',
            bn: 'TypeError: body stream already read (কারণ ভেতরের ReadableStream বডিটি মেমরি থেকে কেবল একবারই পড়া সম্ভব)'
          },
          {
            en: 'The computer operating system restarts automatically',
            bn: 'অপারেটিং সিস্টেম নিজে থেকেই রিস্টার্ট নেয়'
          },
          {
            en: 'Because calling two body parsers increases internet bandwidth bills',
            bn: 'কারণ দুটি পার্সার কল করলে ইন্টারনেটের বিল বেড়ে যায়'
          },
          {
            en: 'The second call formats the browser storage directory',
            bn: 'দ্বিতীয় কলটি ব্রাউজারের স্টোরেজ মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A response body is a stream, not a static buffer. Once consumed, the stream is locked and drained.',
          bn: 'রেসপন্স বডি একটি স্ট্রিম; একবার পড়া হয়ে গেলে তা মেমরি থেকে শেষ হয়ে যায়।'
        },
        explanation: {
          en: 'Fetch response bodies are one-time ReadableStreams; calling response.clone() is required if multiple reads of the same response are necessary.',
          bn: 'ফেচ বডি একমুখী স্ট্রিম হওয়ায় এটি একবারই পড়া যায়; একাধিকবার পড়তে চাইলে response.clone() ব্যবহার করতে হয়।'
        }
      },
      {
        id: 'cmq-q2',
        kind: 'mcq',
        topic: 'credentials-mode-cookie-inclusion',
        question: {
          en: 'In cross-origin fetch requests, what must be configured in the fetch options to include HTTP session cookies and authorization credentials?',
          bn: 'ভিন্ন ডোমেইনে করা ফেচ রিকোয়েস্টে ব্রাউজারের সেশন কুকিজ ও অথরাইজেশন তথ্য পাঠাতে ফেচ অপশনে কী কনফিগার করতে হয়?'
        },
        options: [
          {
            en: 'Set credentials: "include" in the fetch init options, and ensure the server responds with Access-Control-Allow-Credentials: true',
            bn: 'ফেচ অপশনে credentials: "include" সেট করতে হয় এবং সার্ভারকে Access-Control-Allow-Credentials: true হেডার দিয়ে সাড়া দিতে হয়'
          },
          {
            en: 'Set cookies: "send-all-passwords" in CSS',
            bn: 'CSS-এ cookies: "send-all-passwords" লিখে'
          },
          {
            en: 'Cookies can never be sent across network connections',
            bn: 'কুকিজ কখনোই নেটওয়ার্কে পাঠানো সম্ভব নয়'
          },
          {
            en: 'Because cross-origin cookies require approval from local police',
            bn: 'কারণ এর জন্য স্থানীয় পুলিশের অনুমোদনের প্রয়োজন হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'credentials: "include" tells the browser to attach origin cookies.',
          bn: 'credentials: "include" ব্রাউজারকে ডোমেইনের কুকিজ সাথে পাঠাতে নির্দেশ দেয়।'
        },
        explanation: {
          en: 'By default, cross-origin fetch omits credentials; explicit client configuration and server consent headers are strictly required.',
          bn: 'ডিফল্টভাবে ভিন্ন ডোমেইনে কুকি পাঠানো বন্ধ থাকে; ক্লায়েন্ট ও সার্ভার উভয় পাশেই এটি সক্রিয় করতে হয়।'
        }
      },
      {
        id: 'cmq-q3',
        kind: 'mcq',
        topic: 'abort-signal-timeout-shorthand',
        question: {
          en: 'What modern convenience method added in ECMAScript/HTML standards simplifies setting fetch timeouts without manually creating setTimeout timers?',
          bn: 'ম্যানুয়ালি setTimeout না লিখে সহজে ফেচ টাইমআউট কার্যকর করতে আধুনিক স্ট্যান্ডার্ডে কোন সুবিধাজনক মেথডটি যুক্ত করা হয়েছে?'
        },
        options: [
          {
            en: 'AbortSignal.timeout(5000), passed directly into the fetch signal option: fetch(url, { signal: AbortSignal.timeout(5000) })',
            bn: 'AbortSignal.timeout(5000), যা সরাসরি ফেচ অপশনে দেওয়া যায়: fetch(url, { signal: AbortSignal.timeout(5000) })'
          },
          {
            en: 'window.stopAfter(5000)',
            bn: 'window.stopAfter(5000)'
          },
          {
            en: 'document.pauseNetwork(5000)',
            bn: 'document.pauseNetwork(5000)'
          },
          {
            en: 'fetch.timeout = 5000',
            bn: 'fetch.timeout = 5000'
          }
        ],
        answer: 0,
        hint: {
          en: 'AbortSignal now has a static timeout() factory method.',
          bn: 'AbortSignal অবজেক্টে সরাসরি স্ট্যাটিক timeout() মেথড রয়েছে।'
        },
        explanation: {
          en: 'AbortSignal.timeout(ms) creates a signal that automatically aborts after the specified millisecond duration, eliminating boilerplate timer management.',
          bn: 'AbortSignal.timeout(ms) নিজে থেকেই নির্দিষ্ট সময় পর রিকোয়েস্ট বাতিল করে কোডের জটিলতা কমায়।'
        }
      },
      {
        id: 'cmq-q4',
        kind: 'mcq',
        topic: 'post-json-content-type-header',
        question: {
          en: 'When submitting a JavaScript object via HTTP POST using fetch, why must the "Content-Type: application/json" header be explicitly specified?',
          bn: 'ফেচ ব্যবহার করে HTTP POST মেথডে জাভাস্ক্রিপ্ট অবজেক্ট পাঠানোর সময় কেন "Content-Type: application/json" হেডারটি স্পষ্টভাবে উল্লেখ করা আবশ্যক?'
        },
        options: [
          {
            en: 'It informs the backend server parser how to interpret the incoming raw string body, allowing backend frameworks (Express, FastAPI, Spring) to parse it into native JSON objects',
            bn: 'এটি ব্যাকএন্ড সার্ভারকে জানায় বডিতে পাঠানো টেক্সটটি কীভাবে পড়তে হবে, যার ফলে ব্যাকএন্ড ফ্রেমওয়ার্ক (Express, FastAPI) এটিকে সঠিক JSON অবজেক্ট হিসেবে পার্স করতে পারে'
          },
          {
            en: 'Without this header, the client computer monitor turns black',
            bn: 'এই হেডার না দিলে ক্লায়েন্টের কম্পিউটার মনিটর কালো হয়ে যায়'
          },
          {
            en: 'Because Content-Type reduces server electricity costs by 50 percent',
            bn: 'কারণ কনটেন্ট টাইপ দিলে সার্ভারের বিদ্যুৎ খরচ ৫০ শতাংশ কমে যায়'
          },
          {
            en: 'Content-Type headers are mandated by international shipping treaties',
            bn: 'কারণ আন্তর্জাতিক পরিবহন আইনে এই হেডার বাধ্যতামূলক করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Without Content-Type: application/json, backend servers do not know the body is JSON and may treat it as plain text.',
          bn: 'এই হেডার না থাকলে ব্যাকএন্ড সার্ভার বুঝতে পারে না যে বডির টেক্সটটি আসলে একটি JSON।'
        },
        explanation: {
          en: 'The Content-Type entity header dictates MIME type negotiation, enabling server middleware to select the appropriate request body parser.',
          bn: 'কনটেন্ট টাইপ হেডার সার্ভারকে ডেটার ধরন বুঝিয়ে সঠিক মিডলওয়্যার দিয়ে তা পার্স করতে সাহায্য করে।'
        }
      }
    ]
  }
};
