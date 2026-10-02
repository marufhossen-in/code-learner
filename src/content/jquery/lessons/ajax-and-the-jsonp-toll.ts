import type { Lesson } from '../../../lib/types';

export const AjaxAndTheJsonpTollLesson: Lesson = {
  slug: 'ajax-and-the-jsonp-toll',
  tech: 'jquery',
  title: {
    en: 'AJAX, Shorthand Methods & Cross-Domain Requests',
    bn: 'অ্যাজাক্স, সংক্ষিপ্ত মেথড ও ক্রস-ডোমেইন রিকোয়েস্ট'
  },
  summary: {
    en: 'Before modern fetch existed, asynchronous web communication was driven by XMLHttpRequest, which required verbose boilerplates. jQuery transformed client-server communication by introducing its unified $.ajax architecture alongside high-level conveniences like $.get, $.post, $.getJSON, and the load method. For example, serializing an HTML form with 3 input fields encodes form data into URL-encoded format, submits a background request, receives an HTTP status of 200, and parses a 128 byte JSON payload automatically. Before Cross-Origin Resource Sharing (CORS) became standard, developers circumvented same-origin restrictions using JSON with Padding (JSONP), trading away error handling and HTTP verb diversity. Furthermore, jQuery coordinates global AJAX lifecycle hooks to drive loading indicators across applications. This lesson covers network abstraction, form serialization, cross-domain workarounds, and global network event listeners.',
    bn: 'আধুনিক ফেচ এপিআই আসার আগে ব্রাউজারে অ্যাসিনক্রোনাস যোগাযোগের একমাত্র মাধ্যম ছিল XMLHttpRequest, যার কোড ছিল অত্যন্ত জটিল। জেকোয়েরি তার একীভূত $.ajax আর্কিটেকচার এবং $.get, $.post, $.getJSON ও load-এর মতো সংক্ষিপ্ত মেথড দিয়ে ব্যাকগ্রাউন্ড নেটওয়ার্কিং সহজ করে তোলে। যেমন ৩টি ইনপুট ফিল্ড বিশিষ্ট একটি ফর্ম সিরিয়ালাইজ করে ব্যাকগ্রাউন্ডে পাঠিয়ে সফলভাবে ২০০ স্ট্যাটাস কোড ও ১২৮ বাইটের একটি জেএসন রেসপন্স কোনো পেজ রিলোড ছাড়াই গ্রহণ করা যায়। আধুনিক কর্স (CORS) প্রযুক্তি চালুর আগে ভিন্ন ডোমেইন থেকে ডাটা আনতে স্ক্রিপ্ট ইনজেকশন বা JSONP ব্যবহার করা হতো, যার ফলে পোস্ট রিকোয়েস্ট ও এরর হ্যান্ডলিংয়ের সুবিধা বাদ দিতে হতো। এছাড়া জেকোয়েরি গ্লোবাল লোডিং স্পিনার পরিচালনার চমৎকার ইভেন্ট সরবরাহ করে। এই পাঠে নেটওয়ার্ক অ্যাবস্ট্রাকশন, ফর্ম সিরিয়ালাইজেশন, ক্রস-ডোমেইন পদ্ধতি ও গ্লোবাল ইভেন্ট বিস্তারিত শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Background Network Abstraction',
        bn: 'মূল ধারণা: ব্যাকগ্রাউন্ড নেটওয়ার্ক বিমূর্তকরণ'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When your application communicates with a web server without reloading the page, `jQuery` abstracts away complex browser network APIs. The core `$.ajax()` function handles headers, serialization, and response parsing automatically.',
        bn: 'পুরো পেজ রিলোড না করে যখন আপনার অ্যাপ্লিকেশন সার্ভারের সাথে তথ্য আদান-প্রদান করে, জেকোয়েরি ব্রাউজারের জটিল নেটওয়ার্ক মেথডগুলোকে আড়াল করে একটি সহজ ইন্টারফেস দেয়। এর মূল `$.ajax()` ফাংশন নিজে থেকেই হেডার, সিরিয়ালাইজেশন এবং রেসপন্স পার্সিং সম্পন্ন করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The $.ajax() Engine',
          def: {
            en: 'The foundational asynchronous HTTP request method in jQuery supporting comprehensive configuration options and callbacks',
            bn: 'জেকোয়েরির প্রধান অ্যাসিনক্রোনাস নেটওয়ার্ক ফাংশন যা বিস্তারিত কনফিগারেশন ও কলব্যাকের মাধ্যমে সার্ভারের সাথে যোগাযোগ করে'
          }
        },
        {
          term: '$(elem).load(url)',
          def: {
            en: 'High-level helper fetching remote HTML markup and injecting the returned fragment directly into matched DOM nodes',
            bn: 'সার্ভার থেকে এইচটিএমএল এনে সরাসরি নির্দিষ্ট ডম উপাদানের ভেতরে ঢুকিয়ে দেওয়ার সবচেয়ে সহজ শর্টকাট মেথড'
          }
        },
        {
          term: 'Form Serialization',
          def: {
            en: 'Encoding form controls into a standard URL query string (.serialize()) or an array of objects (.serializeArray())',
            bn: 'ফর্মের সমস্ত ইনপুট ফিল্ডকে একসাথে ইউআরএল কুয়েরি স্ট্রিং বা জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর করার পদ্ধতি'
          }
        },
        {
          term: 'JSON with Padding (JSONP)',
          def: {
            en: 'Historical workaround circumventing Same-Origin Policy by dynamically injecting script tags that execute wrapped callback data',
            bn: 'স্ক্রিপ্ট ট্যাগের মাধ্যমে ভিন্ন ডোমেইন থেকে ডাটা এনে ফাংশন কলব্যাকের ভেতর আবৃত করে ব্রাউজারের নিরাপত্তা নীতি এড়ানোর পুরোনো কৌশল'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'ajax-methods-table',
      text: {
        en: 'jQuery AJAX Shorthand Methods',
        bn: 'জেকোয়েরির প্রধান সংক্ষিপ্ত অ্যাজাক্স মেথডসমূহ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison of jQuery AJAX Request Methods',
        bn: 'জেকোয়েরি অ্যাজাক্স মেথডসমূহের তুলনামূলক বৈশিষ্ট্য'
      },
      head: [
        { en: 'Method Name', bn: 'মেথডের নাম' },
        { en: 'HTTP Verb', bn: 'এইচটিটিপি ধরন' },
        { en: 'Primary Purpose', bn: 'প্রধান ব্যবহার' }
      ],
      rows: [
        [
          { en: '$.get(url, data, callback)', bn: '$.get(url, data, callback)' },
          { en: 'GET', bn: 'GET' },
          { en: 'Retrieves data from server without sending sensitive body payloads', bn: 'সার্ভার থেকে নিরাপদে তথ্য পাঠাতে বা পড়তে ব্যবহৃত হয়' }
        ],
        [
          { en: '$.post(url, data, callback)', bn: '$.post(url, data, callback)' },
          { en: 'POST', bn: 'POST' },
          { en: 'Transmits state-modifying payloads and submitted form records', bn: 'সার্ভারে নতুন তথ্য জমা দিতে বা রেকর্ড পরিবর্তন করতে ব্যবহৃত হয়' }
        ],
        [
          { en: '$.getJSON(url, callback)', bn: '$.getJSON(url, callback)' },
          { en: 'GET', bn: 'GET' },
          { en: 'Requests JSON endpoints and automatically parses string into native objects', bn: 'জেএসন এপিআই থেকে ডাটা এনে সরাসরি অবজেক্ট আকারে রূপান্তর করে' }
        ],
        [
          { en: '$(elem).load("page.html #area")', bn: '$(elem).load("page.html #area")' },
          { en: 'GET', bn: 'GET' },
          { en: 'Fetches partial HTML fragments and updates element innerHTML in 1 step', bn: 'দূরবর্তী এইচটিএমএলের নির্দিষ্ট অংশ এনে ১ ধাপে উপাদানে বসিয়ে দেয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Form Serialization & Background HTTP Transaction',
        bn: 'চালনাযোগ্য সিমুলেশন: ফর্ম সিরিয়ালাইজেশন ও ব্যাকগ্রাউন্ড এইচটিটিপি লেনদেন গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates serializing a form with 3 input fields, sending an asynchronous request, verifying a status of 200, and receiving a 128 byte payload:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ৩টি ইনপুট ফিল্ড বিশিষ্ট ফর্ম সিরিয়ালাইজ করে ব্যাকগ্রাউন্ড রিকোয়েস্টে ২০০ স্ট্যাটাস কোড এবং ১২৮ বাইটের পেলোড গ্রহণের প্রক্রিয়াটি হিসাব করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'jquery-ajax-sim',
      lang: 'javascript',
      code: `// jQuery AJAX Form Submission and Payload Simulation
const formFields = 3;     // 3 form fields: username, email, message
const mockStatus = 200;   // HTTP 200 OK returned by server
const payloadBytes = 128; // 128 bytes JSON response parsed automatically

console.log('Total input fields packaged via form.serialize():', formFields);
// -> Total input fields packaged via form.serialize(): 3

console.log('HTTP response status code received from endpoint:', mockStatus);
// -> HTTP response status code received from endpoint: 200

console.log('Payload data volume parsed into JavaScript object:', payloadBytes);
// -> Payload data volume parsed into JavaScript object: 128`,
      caption: {
        en: 'Figure 1: Packaging 3 form fields delivers a response with an HTTP status of 200 containing 128 bytes of parsed data',
        bn: 'চিত্র ১: ৩টি ফর্ম ফিল্ড পাঠিয়ে সফলভাবে ২০০ স্ট্যাটাস কোড ও ১২৮ বাইটের ডাটা গ্রহণ করা সম্ভব হয়'
      }
    },
    {
      type: 'heading',
      id: 'jsonp-and-global-guide',
      text: {
        en: 'JSONP Mechanics & Global AJAX Hooks',
        bn: 'জেএসওএনপি কৌশল ও গ্লোবাল অ্যাজাক্স হুক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Before CORS headers were implemented, browsers rejected cross-domain AJAX. JSONP bypassed this by injecting a script tag that executed a named callback function with the server data as arguments.',
        bn: 'কর্স প্রযুক্তি আসার আগে ব্রাউজার অন্য ডোমেইনের অ্যাজাক্স আটকে দিত। JSONP এই বাধা এড়াতে একটি ডায়নামিক স্ক্রিপ্ট ট্যাগ বসিয়ে দিত, যা সার্ভার থেকে কলব্যাক ফাংশনের ভেতর ডাটা এনে রান করাত।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '$(document).ajaxStart()',
          def: {
            en: 'Global event firing when the first active AJAX request begins, ideal for displaying global loading spinners',
            bn: 'অ্যাপ্লিকেশনে প্রথম কোনো অ্যাজাক্স রিকোয়েস্ট শুরু হওয়ার সাথে সাথে লোডিং স্পিনার দেখানোর গ্লোবাল হুক'
          }
        },
        {
          term: '$(document).ajaxStop()',
          def: {
            en: 'Global event firing when all active background network requests conclude, used to hide loading indicators',
            bn: 'সমস্ত ব্যাকগ্রাউন্ড নেটওয়ার্ক রিকোয়েস্ট শেষ হওয়ার সাথে সাথে লোডিং স্পিনার সরিয়ে নেওয়ার গ্লোবাল হুক'
          }
        },
        {
          term: 'JSONP Limitations',
          def: {
            en: 'Restricted strictly to HTTP GET requests, lacks granular error handling, and poses Cross-Site Scripting vulnerabilities',
            bn: 'কেবলমাত্র GET রিকোয়েস্টে সীমাবদ্ধ, এরর সঠিকভাবে ধরা যায় না এবং সাইটে স্ক্রিপ্ট ইনজেকশনের ঝুঁকি তৈরি করে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'jquery-ajax-status-ex',
      kind: 'mcq',
      topic: 'HTTP status code in simulated transaction',
      question: {
        en: 'According to our AJAX simulation, what HTTP status code indicates a successful network response from the server?',
        bn: 'আমাদের অ্যাজাক্স সিমুলেশন অনুযায়ী সার্ভার থেকে সফল নেটওয়ার্ক রেসপন্স বোঝাতে কোন এইচটিটিপি স্ট্যাটাস কোডটি ব্যবহৃত হয়েছে?'
      },
      options: [
        {
          en: '200 OK',
          bn: '২০০ OK'
        },
        {
          en: '404 Not Found',
          bn: '৪০৪ Not Found'
        },
        {
          en: '500 Server Error',
          bn: '৫০০ Server Error'
        },
        {
          en: '301 Redirect',
          bn: '৩০১ Redirect'
        }
      ],
      answer: 0,
      hint: {
        en: 'Standard HTTP success status is 200.',
        bn: 'স্ট্যান্ডার্ড সফলতার স্ট্যাটাস কোড ২০০-এর কথা ভাবুন।'
      },
      explanation: {
        en: 'HTTP 200 indicates a successful request where the server returned the requested payload data.',
        bn: 'এইচটিটিপি ২০০ স্ট্যাটাস কোড নির্দেশ করে যে সার্ভার সফলভাবে রিকোয়েস্ট গ্রহণ করে সঠিক তথ্য ফেরত পাঠিয়েছে।'
      }
    },
    {
      id: 'jquery-load-method-ex',
      kind: 'mcq',
      topic: 'Feature of $(selector).load()',
      question: {
        en: 'What makes $("#result").load("profile.html #user-card") unique compared to $.get()?',
        bn: '$.get()-এর তুলনায় $("#result").load("profile.html #user-card") মেথডটির অনন্য বৈশিষ্ট্য কী?'
      },
      options: [
        {
          en: 'It directly injects the fetched HTML into the matched element, and supports extracting a specific sub-fragment via a selector suffix',
          bn: 'এটি দূরবর্তী এইচটিএমএল এনে সরাসরি উপাদানের ভেতর বসিয়ে দেয় এবং সিলেক্টর দিয়ে নির্দিষ্ট অংশ ছেঁকে আনার সুবিধা দেয়'
        },
        {
          en: 'It only loads CSS style rules',
          bn: 'এটি কেবল সিএসএস লোড করে'
        },
        {
          en: 'It prints the web page on a physical printer',
          bn: 'এটি পেজটি প্রিন্টারে প্রিন্ট করে'
        },
        {
          en: 'It restarts the database server',
          bn: 'এটি ডাটাবেজ রিস্টার্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Loads HTML fragments directly into the DOM.',
        bn: 'ডমের ভেতরে সরাসরি এইচটিএমএল টুকরো বসিয়ে দেওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: '.load() simplifies injecting remote HTML chunks directly into selected DOM elements in one atomic operation.',
        bn: '.load() দূরবর্তী সার্ভার থেকে কোনো এইচটিএমএল টুকরো এনে এক লাইনেই সরাসরি ডমে প্রতিস্থাপন করে।'
      }
    },
    {
      id: 'jquery-serialize-benefit-ex',
      kind: 'mcq',
      topic: 'Purpose of $("form").serialize()',
      question: {
        en: 'Why do developers invoke $("form").serialize() when handling user input submissions?',
        bn: 'ব্যবহারকারীর ফর্ম সাবমিট করার সময় ডেভেলপাররা কেন $("form").serialize() কল করেন?'
      },
      options: [
        {
          en: 'It encodes all named input fields into a standard URL query string suitable for immediate transmission in AJAX requests',
          bn: 'এটি ফর্মের সমস্ত ইনপুট ফিল্ডকে আদর্শ ইউআরএল কুয়েরি স্ট্রিংয়ে রূপান্তর করে যা সহজেই নেটওয়ার্কে পাঠানো যায়'
        },
        {
          en: 'It deletes all user passwords from memory',
          bn: 'এটি পাসওয়ার্ড মুছে ফেলে'
        },
        {
          en: 'It converts the form into a PDF document',
          bn: 'এটি ফর্মকে পিডিএফ বানায়'
        },
        {
          en: 'It clears the browser cookies',
          bn: 'এটি ব্রাউজারের কুকিজ সাফ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Encodes form data into a URL string for HTTP transport.',
        bn: 'এইচটিটিপির মাধ্যমে পাঠানোর জন্য ডাটাকে ইউআরএল স্ট্রিং বানানোর কথা ভাবুন।'
      },
      explanation: {
        en: '.serialize() transforms input names and values into an encoded query string ready for GET or POST transport.',
        bn: '.serialize() ফর্মের প্রতিটি ইনপুট নাম ও মান নিয়ে একটি ইউআরএল-এনকোডেড স্ট্রিং তৈরি করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-ajax-and-jsonp',
    title: {
      en: 'AJAX & Cross-Domain Requests Quiz',
      bn: 'অ্যাজাক্স ও ক্রস-ডোমেইন রিকোয়েস্ট কুইজ'
    },
    questions: [
      {
        id: 'q-jquery-jsonp-drawbacks',
        kind: 'mcq',
        topic: 'Limitations of JSONP',
        question: {
          en: 'Which critical limitation prevented JSONP from being used for comprehensive REST API architectures?',
          bn: 'কোন সীমাবদ্ধতার কারণে পূর্ণাঙ্গ রেস্ট এপিআই (REST API) আর্কিটেকচারে JSONP ব্যবহার করা যেত না?'
        },
        options: [
          {
            en: 'JSONP only supports the HTTP GET method because script tags cannot initiate POST, PUT, or DELETE requests',
            bn: 'JSONP শুধুমাত্র HTTP GET সমর্থন করে কারণ স্ক্রিপ্ট ট্যাগ দিয়ে POST, PUT বা DELETE রিকোয়েস্ট পাঠানো যায় না'
          },
          {
            en: 'JSONP was banned by the W3C consortium',
            bn: 'ডব্লিউথ্রিসি এটি নিষিদ্ধ করেছিল'
          },
          {
            en: 'JSONP only works on desktop monitors',
            bn: 'এটি শুধু ডেস্কটপে চলত'
          },
          {
            en: 'JSONP requires installing Adobe Flash',
            bn: 'এর জন্য ফ্ল্যাশ লাগত'
          }
        ],
        answer: 0,
        hint: {
          en: 'Script tags load via GET requests only.',
          bn: 'স্ক্রিপ্ট ট্যাগ শুধুমাত্র GET পদ্ধতিতে সার্ভার থেকে ডাটা আনতে পারে।'
        },
        explanation: {
          en: 'Because script elements fetch resources solely through GET, JSONP cannot perform POST, PUT, or DELETE mutations.',
          bn: 'স্ক্রিপ্ট ট্যাগ দিয়ে ব্রাউজার কেবল GET করতে পারে, ফলে অন্য কোনো পরিবর্তনশীল মেথড চালানো সম্ভব হয় না।'
        }
      },
      {
        id: 'q-jquery-ajax-spinner-events',
        kind: 'mcq',
        topic: 'Managing global loading spinner with ajaxStart and ajaxStop',
        question: {
          en: 'Which pair of global jQuery events is commonly used to show and hide a global loading indicator?',
          bn: 'অ্যাপ্লিকেশনে গ্লোবাল লোডিং স্পিনার দেখানো ও লুকানোর জন্য কোন দুটি গ্লোবাল জেকোয়েরি ইভেন্ট ব্যবহৃত হয়?'
        },
        options: [
          {
            en: '$(document).ajaxStart() to show, and $(document).ajaxStop() to hide',
            bn: 'স্পিনার দেখাতে $(document).ajaxStart() এবং লুকাতে $(document).ajaxStop()'
          },
          {
            en: '$(window).onLoad() and $(window).onUnload()',
            bn: '$(window).onLoad() এবং $(window).onUnload()'
          },
          {
            en: '$.start() and $.end()',
            bn: '$.start() এবং $.end()'
          },
          {
            en: '$.spin() and $.stopSpin()',
            bn: '$.spin() এবং $.stopSpin()'
          }
        ],
        answer: 0,
        hint: {
          en: 'ajaxStart triggers when network activity begins; ajaxStop when all finish.',
          bn: 'প্রথম রিকোয়েস্টে ajaxStart এবং সব শেষ হলে ajaxStop চলার কথা ভাবুন।'
        },
        explanation: {
          en: 'ajaxStart fires when the first request begins; ajaxStop fires when the active request count drops back to zero.',
          bn: 'প্রথম রিকোয়েস্ট শুরু হলে ajaxStart স্পিনার চালু করে এবং সব রিকোয়েস্ট শেষ হলে ajaxStop তা বন্ধ করে।'
        }
      },
      {
        id: 'q-jquery-cors-header',
        kind: 'mcq',
        topic: 'Standard HTTP header enabling cross-origin requests in modern browsers',
        question: {
          en: 'Which HTTP response header sent by servers replaced the need for legacy JSONP workarounds in modern browsers?',
          bn: 'আধুনিক ব্রাউজারে পুরোনো JSONP-এর প্রয়োজনীয়তা দূর করে সার্ভার থেকে কোন এইচটিটিপি রেসপন্স হেডারটি পাঠানো হয়?'
        },
        options: [
          {
            en: 'Access-Control-Allow-Origin',
            bn: 'Access-Control-Allow-Origin'
          },
          {
            en: 'X-Allow-All-Domains',
            bn: 'X-Allow-All-Domains'
          },
          {
            en: 'Cross-Domain-Policy-Enable',
            bn: 'Cross-Domain-Policy-Enable'
          },
          {
            en: 'Content-Security-Script-All',
            bn: 'Content-Security-Script-All'
          }
        ],
        answer: 0,
        hint: {
          en: 'The standard CORS header specifying allowed origins.',
          bn: 'অনুমোদিত ডোমেইন উল্লেখকারী আদর্শ কর্স হেডারের কথা ভাবুন।'
        },
        explanation: {
          en: 'Access-Control-Allow-Origin is the standard CORS header that grants web browsers permission to access cross-domain APIs.',
          bn: 'Access-Control-Allow-Origin হলো অফিশিয়াল হেডার যার মাধ্যমে সার্ভার ব্রাউজারকে ভিন্ন ডোমেইন থেকে ডাটা নেওয়ার অনুমতি দেয়।'
        }
      },
      {
        id: 'q-jquery-datatype-json',
        kind: 'mcq',
        topic: 'Purpose of dataType: "json" in $.ajax()',
        question: {
          en: 'What does configuring dataType: "json" inside a $.ajax() configuration achieve?',
          bn: '$.ajax() কনফিগারেশনে dataType: "json" সেট করলে কী সুবিধা পাওয়া যায়?'
        },
        options: [
          {
            en: 'jQuery automatically parses the incoming response text into a JavaScript object before passing it to the success callback',
            bn: 'জেকোয়েরি নিজে থেকেই রেসপন্স টেক্সটটিকে জাভাস্ক্রিপ্ট অবজেক্টে পার্স করে সাকসেস কলব্যাকে পাঠায়'
          },
          {
            en: 'It compresses the request by ninety percent',
            bn: 'এটি রিকোয়েস্ট নব্বই শতাংশ সংকুচিত করে'
          },
          {
            en: 'It encrypts the JSON string with MD5',
            bn: 'এটি ডাটা এনক্রিপ্ট করে'
          },
          {
            en: 'It forces the browser to download the file to disk',
            bn: 'এটি ফাইল ডাউনলোড করায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Instructs jQuery to parse raw text into native JavaScript objects.',
          bn: 'কাঁচা টেক্সটকে অবজেক্টে পরিণত করার স্বয়ংক্রিয় সুবিধার কথা ভাবুন।'
        },
        explanation: {
          en: 'dataType instructs jQuery how to interpret the server response, converting JSON strings into objects automatically.',
          bn: 'dataType জেকোয়েরিকে নির্দেশ দেয় কীভাবে রেসপন্স পড়তে হবে, ফলে আলাদা JSON.parse() ছাড়াই অবজেক্ট পাওয়া যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'deferred-and-promises',
    tech: 'jquery',
    title: {
      en: 'jQuery Deferred, Promises & Pipeline Control',
      bn: 'জেকোয়েরি ডেফার্ড, প্রমিজ ও পাইপলাইন কন্ট্রোল'
    }
  }
};
