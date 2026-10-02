import type { Lesson } from '../../../lib/types';

export const harborCharterLesson: Lesson = {
  slug: 'the-harbor-charter',
  tech: 'web-apis',
  title: {
    en: 'Web APIs Architecture — Browser Runtime, Global Objects, and Secure Contexts',
    bn: 'ওয়েব এপিআই আর্কিটেকচার: ব্রাউজার রানটাইম, গ্লোবাল অবজেক্ট ও সিকিউর কনটেক্সট'
  },
  summary: {
    en: 'Web APIs extend the JavaScript language with powerful native browser capabilities that connect your code to the operating system, device hardware, and the internet. In this lesson, you will master the fundamental architecture of the browser runtime: the distinction between ECMAScript core, Document Object Model (DOM), and Web APIs. Explore the global access tiers (`window`, `navigator`, and `document`), robust runtime feature detection techniques, secure context requirements (HTTPS vs localhost), and the unified Permissions API. Implement an executable browser environment and API detection inspector in TypeScript.',
    bn: 'ওয়েব এপিআই (Web APIs) ব্রাউজারের শক্তিশালী নেটিভ ক্ষমতা দিয়ে জাভাস্ক্রিপ্টকে সমৃদ্ধ করে, যা আপনার কোডকে অপারেটিং সিস্টেম, ডিভাইস হার্ডওয়্যার ও ইন্টারনেটের সাথে যুক্ত করে। এই পাঠে আপনি ব্রাউজার রানটাইমের মূল আর্কিটেকচার শিখবেন: ECMAScript কোর, ডকুমেন্ট অবজেক্ট মডেল (DOM) এবং Web API-এর মৌলিক পার্থক্য। গ্লোবাল অ্যাক্সেস স্তর (`window`, `navigator`, ও `document`), নির্ভরযোগ্য রানটাইম ফিচার ডিটেকশন পদ্ধতি, সিকিউর কনটেক্সট (HTTPS বনাম localhost) এবং পারমিশন এপিআই-এর ব্যবহার বিস্তারিতভাবে জানবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর ব্রাউজার এনভায়রনমেন্ট ও এপিআই ডিটেকশন ইন্সপেক্টর বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'browser-architecture-and-web-apis',
      text: {
        en: 'The Browser Architecture: JavaScript Engine vs Web APIs',
        bn: 'ব্রাউজার আর্কিটেকচার: জাভাস্ক্রিপ্ট ইঞ্জিন বনাম ওয়েব এপিআই'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you run JavaScript in a modern web browser, you are working with far more than the core JavaScript language (standardized as ECMAScript).',
        bn: 'আধুনিক ওয়েব ব্রাউজারে জাভাস্ক্রিপ্ট চালানোর সময় আপনি কেবল মূল জাভাস্ক্রিপ্ট ভাষার (যা মানসম্মতভাবে ECMAScript নামে পরিচিত) চেয়ে অনেক বেশি সুবিশাল একটি পরিবেশের সাথে কাজ করেন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The browser runtime is built on 3 distinct pillars. First is the JavaScript engine (such as Google V8 or Mozilla SpiderMonkey) for variables, loops, and functions. Second is the Document Object Model (DOM) representing the live HTML element tree. Third are the Web APIs. Web APIs are native interfaces compiled in C++ inside the browser binary and exposed to JavaScript via global host objects. Through Web APIs, your code accesses networking (Fetch), sensors (Geolocation), storage (localStorage), and background threads (Web Workers).',
        bn: 'ব্রাউজার রানটাইম মূলত ৩টি পৃথক স্তম্ভের ওপর প্রতিষ্ঠিত। প্রথমত, জাভাস্ক্রিপ্ট ইঞ্জিন (যেমন Google V8 বা SpiderMonkey) যা ভেরিয়েবল, লুপ ও ফাংশন চালায়। দ্বিতীয়ত, ডকুমেন্ট অবজেক্ট মডেল (DOM) যা জীবন্ত এইচটিএমএল উপাদানের ট্রি নির্দেশ করে। তৃতীয়ত, ওয়েব এপিআই। ওয়েব এপিআই ব্রাউজারের মূল ইঞ্জিনে C++ ভাষায় তৈরি নেটিভ ইন্টারফেস যা জাভাস্ক্রিপ্টে গ্লোবাল অবজেক্টের মাধ্যমে উন্মুক্ত থাকে। এর মাধ্যমেই জাভাস্ক্রিপ্ট নেটওয়ার্ক (Fetch), হার্ডওয়্যার সেন্সর (Geolocation), লোকাল স্টোরেজ (localStorage) এবং ব্যাকগ্রাউন্ড থ্রেড (Web Workers)-এর সুবিধা পায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'web-api',
          def: {
            en: 'Native browser interfaces implemented in the browser engine that expose hardware, network, and storage capabilities to JavaScript.',
            bn: 'ব্রাউজার ইঞ্জিনে তৈরি নেটিভ ইন্টারফেস যা জাভাস্ক্রিপ্ট কোডকে হার্ডওয়্যার, নেটওয়ার্ক এবং স্টোরেজের সাথে যোগাযোগের ক্ষমতা দেয়।'
          }
        },
        {
          term: 'feature-detection',
          def: {
            en: 'A defensive programming practice checking if an API exists on window or navigator before invoking it, preventing runtime TypeError crashes.',
            bn: 'কোড চালানোর আগেই `window` বা `navigator`-এ কোনো এপিআই আছে কি না তা পরীক্ষা করার কৌশল, যা অপ্রত্যাশিত ক্র্যাশ রোধ করে।'
          }
        },
        {
          term: 'secure-context',
          def: {
            en: 'A browser security boundary requiring HTTPS (or localhost for development) to unlock sensitive device APIs like geolocation, camera, and crypto.',
            bn: 'ব্রাউজারের একটি নিরাপত্তা শর্ত যা ক্যামেরা বা অবস্থানের মতো সংবেদনশীল এপিআই ব্যবহারের জন্য HTTPS (বা লোকালহোস্ট) বাধ্যতামূলক করে।'
          }
        },
        {
          term: 'permissions-api',
          def: {
            en: 'A unified programmatic interface (navigator.permissions.query) to inspect consent states (granted, prompt, denied) before prompting the user.',
            bn: 'একটি কেন্দ্রীয় ইন্টারফেস (navigator.permissions.query) যার মাধ্যমে ব্যবহারকারীকে বিরক্ত না করেই পারমিশনের বর্তমান অবস্থা জানা যায়।'
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
      id: 'global-namespace-hierarchy-table',
      text: {
        en: 'The Web API Global Namespace Hierarchy',
        bn: 'ওয়েব এপিআই গ্লোবাল নেমস্পেস স্তরবিন্যাস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Web APIs are organized under three primary global access objects: window, navigator, and document.',
        bn: 'ওয়েব এপিআইগুলো মূলত তিনটি প্রধান গ্লোবাল অবজেক্টের অধীনে সুবিন্যস্ত থাকে: window, navigator এবং document।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Global Host Object', bn: 'গ্লোবাল হোস্ট অবজেক্ট' },
        { en: 'Architectural Scope', bn: 'আর্কিটেকচারাল পরিধি' },
        { en: 'Prominent Web APIs Exposed', bn: 'অন্তর্ভুক্ত প্রধান এপিআইসমূহ' },
        { en: 'Secure Context (HTTPS) Required?', bn: 'সিকিউর কনটেক্সট (HTTPS) প্রয়োজন?' }
      ],
      rows: [
        [
          { en: 'window', bn: 'window' },
          { en: 'The global execution scope representing the current browser tab and viewport', bn: 'বর্তমান ব্রাউজার ট্যাব এবং ভিউপোর্টের প্রতিনিধিত্বকারী গ্লোবাল অবজেক্ট' },
          { en: 'fetch, localStorage, sessionStorage, crypto, IndexedDB, setTimeout', bn: 'fetch, localStorage, sessionStorage, crypto, IndexedDB, setTimeout' },
          { en: 'Partial: storage is open on HTTP; crypto and storage persistence require HTTPS', bn: 'আংশিক: সাধারণ স্টোরেজ HTTP-তে চলে; ক্রিপ্টোগ্রাফির জন্য HTTPS বাধ্যতামূলক' }
        ],
        [
          { en: 'navigator', bn: 'navigator' },
          { en: 'Represents the user agent state, device hardware capabilities, and OS sensors', bn: 'ব্যবহারকারীর ব্রাউজার অবস্থা, ডিভাইস হার্ডওয়্যার এবং সেন্সরের পরিচয়' },
          { en: 'geolocation, clipboard, permissions, serviceWorker, mediaDevices, bluetooth', bn: 'geolocation, clipboard, permissions, serviceWorker, mediaDevices, bluetooth' },
          { en: 'Strictly Yes: all sensitive hardware and background workers require HTTPS', bn: 'কঠোরভাবে হ্যাঁ: সমস্ত হার্ডওয়্যার সেন্সর ও সার্ভিস ওয়ার্কারের জন্য HTTPS বাধ্যতামূলক' }
        ],
        [
          { en: 'document', bn: 'document' },
          { en: 'Represents the DOM tree, HTML document structure, and page rendering state', bn: 'এইচটিএমএল ডকুমেন্ট ট্রি এবং পেজের রেন্ডারিং অবস্থার প্রতিনিধিত্বকারী অবজেক্ট' },
          { en: 'querySelector, cookie, fullscreenElement, visibilityState, addEventListener', bn: 'querySelector, cookie, fullscreenElement, visibilityState, addEventListener' },
          { en: 'No: accessible across both standard HTTP and encrypted HTTPS environments', bn: 'না: সাধারণ HTTP এবং সুরক্ষিত HTTPS উভয় পরিবেশেই নির্বিঘ্নে কাজ করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-feature-detection-code',
      text: {
        en: 'Executable Web API Feature Detection Simulation',
        bn: 'ওয়েব এপিআই ফিচার ডিটেকশনের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how production frontend applications inspect runtime browser capabilities across 5 critical Web APIs, computing a compatibility percentage without throwing uncaught exceptions.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৫টি প্রধান ওয়েব এপিআই-এর ব্রাউজার সামঞ্জস্য পরীক্ষা করে এবং কোনো অপ্রত্যাশিত এরর ছাড়াই রানটাইম সামঞ্জস্যের শতকরা হার হিসাব করে।'
      }
    },
    {
      type: 'code',
      code: `// Browser Runtime Web API Capability Inspector

interface ApiFeature {
  name: string;
  supported: boolean;
}

interface CapabilityReport {
  totalInspected: number;
  supportedCount: number;
  missingCount: number;
  supportRatePercentage: string;
}

function inspectBrowserApis(): CapabilityReport {
  // Simulated global environment for robust capability scanning
  const mockWindow = {
    fetch: () => {},
    localStorage: {},
    crypto: {}
  };

  const mockNavigator = {
    geolocation: {}
    // serviceWorker omitted to simulate an unsupported or restricted environment
  };

  const apis: ApiFeature[] = [
    { name: 'Fetch API', supported: typeof mockWindow.fetch === 'function' },
    {
      name: 'Web Storage (localStorage)',
      supported: typeof mockWindow.localStorage !== 'undefined'
    },
    {
      name: 'Web Crypto API',
      supported: typeof mockWindow.crypto !== 'undefined'
    },
    {
      name: 'Geolocation API',
      supported: 'geolocation' in mockNavigator
    },
    {
      name: 'Service Worker API',
      supported: 'serviceWorker' in mockNavigator
    }
  ];

  let supportedCount = 0;
  let missingCount = 0;

  for (const api of apis) {
    if (api.supported) {
      supportedCount++;
    } else {
      missingCount++;
    }
  }

  const rate = Math.round((supportedCount / apis.length) * 100);

  return {
    totalInspected: apis.length,
    supportedCount,
    missingCount,
    supportRatePercentage: rate + '%'
  };
}

const report = inspectBrowserApis();

console.log('Total Web APIs inspected:', report.totalInspected);
console.log('Supported browser APIs:', report.supportedCount);
console.log('Unsupported or disabled APIs:', report.missingCount);
console.log('Runtime API compatibility rate:', report.supportRatePercentage);

// prints: Total Web APIs inspected: 5
// prints: Supported browser APIs: 4
// prints: Unsupported or disabled APIs: 1
// prints: Runtime API compatibility rate: 80%`
    },
    {
      type: 'heading',
      id: 'permissions-api-and-user-consent',
      text: {
        en: 'The Permissions API and User Consent Workflow',
        bn: 'পারমিশন এপিআই এবং ব্যবহারকারীর সম্মতির নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Invoking sensitive device APIs like Geolocation or Microphone without user interaction causes browsers to block the request. The Permissions API (navigator.permissions.query) solves this by allowing applications to inspect permission status before executing actions. Permission queries return 1 of 3 distinct states. The "granted" state means the user approved access, allowing code to execute immediately. The "prompt" state means the browser will show an approval dialogue to the user. The "denied" state means the user blocked access, and further attempts will fail. Engineering best practice mandates requesting permissions inside user gesture handlers (such as clicking a "Share Location" button) rather than on initial page load.',
        bn: 'ব্যবহারকারীর কোনো সক্রিয় ক্লিক ছাড়াই পেজ লোডের সাথে সাথে ক্যামেরা বা লোকেশনের মতো সংবেদনশীল এপিআই কল করলে আধুনিক ব্রাউজারগুলো তা সরাসরি আটকে দেয়। পারমিশন এপিআই (navigator.permissions.query) এই সমস্যার সুন্দর সমাধান দেয়। পারমিশন এপিআই ৩টি অবস্থার যেকোনো ১টি জানায়। "granted" মানে ব্যবহারকারী অনুমতি দিয়েছেন, ফলে সরাসরি কাজ করা যাবে। "prompt" মানে ব্রাউজার ব্যবহারকারীকে একটি অনুমোদনের পপআপ দেখাবে। আর "denied" মানে ব্যবহারকারী এটি ব্লক করে রেখেছেন, ফলে নতুন চেষ্টা ব্যর্থ হবে। সফটওয়্যার ইঞ্জিনিয়ারিংয়ের সেরা নিয়ম হলো কোনো বোতামে ব্যবহারকারী ক্লিক করার পরেই কেবল পারমিশন চাওয়া, পেজ লোডের সময় কখনোই নয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Web APIs are native browser capabilities: Compiled in C++ inside the browser engine and exposed as JavaScript global objects.',
          bn: 'ওয়েব এপিআই হলো ব্রাউজারের নেটিভ ক্ষমতা: যা ব্রাউজার ইঞ্জিনে তৈরি হয়ে জাভাস্ক্রিপ্ট গ্লোবাল অবজেক্ট হিসেবে কাজ করে।'
        },
        {
          en: 'Always use feature detection: Verify an API exists on window or navigator before calling it to prevent unhandled TypeErrors.',
          bn: 'সবসময় ফিচার ডিটেকশন করুন: কোনো এপিআই ব্যবহারের আগে তা ব্রাউজারে উপস্থিত আছে কি না তা নিশ্চিত হয়ে নিন।'
        },
        {
          en: 'Sensitive hardware requires HTTPS: Geolocation, camera, service workers, and cryptography are strictly blocked on unencrypted HTTP.',
          bn: 'সংবেদনশীল এপিআইতে HTTPS বাধ্যতামূলক: অবস্থান, ক্যামেরা ও সার্ভিস ওয়ার্কার সাধারণ HTTP সংযোগে পুরোপুরি নিষিদ্ধ।'
        },
        {
          en: 'Query permissions before prompting: Use navigator.permissions.query to respect user consent and gracefully handle denied states.',
          bn: 'অনুমতি চাওয়ার আগে পারমিশন জানুন: পারমিশন এপিআই দিয়ে বর্তমান অবস্থা জেনে ব্যবহারকারীকে সুন্দর অভিজ্ঞতা দিন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-cargo-manifest',
    tech: 'web-apis',
    title: {
      en: 'The Fetch API & Network Requests — Headers, Promises, and AbortController',
      bn: 'ফেচ এপিআই ও নেটওয়ার্ক রিকোয়েস্ট: হেডার্স, প্রমিস ও AbortController'
    }
  },
  exercises: [
    {
      id: 'hc-ex1',
      kind: 'mcq',
      topic: 'web-apis-vs-ecmascript-core',
      question: {
        en: 'What is the architectural difference between core ECMAScript JavaScript and Web APIs?',
        bn: 'মূল ECMAScript জাভাস্ক্রিপ্ট এবং ওয়েব এপিআই (Web APIs)-এর মধ্যকার প্রযুক্তিগত পার্থক্য কী?'
      },
      options: [
        {
          en: 'ECMAScript defines the core language syntax, types, and data structures (Array, Object, Promise); Web APIs are native host interfaces provided by the browser (fetch, localStorage, Geolocation) implemented in the browser engine',
          bn: 'ECMAScript মূল ভাষার ব্যাকরণ, ধরন ও ডেটা স্ট্রাকচার (Array, Object, Promise) নির্ধারণ করে; আর ওয়েব এপিআই হলো ব্রাউজার ইঞ্জিনে তৈরি নেটিভ ইন্টারফেস (fetch, localStorage, Geolocation)'
        },
        {
          en: 'ECMAScript is downloaded from npm while Web APIs are written in Python',
          bn: 'ECMAScript প্যাকেজ npm থেকে আসে আর ওয়েব এপিআই পাইথনে লেখা হয়'
        },
        {
          en: 'Web APIs were banned by international standards in 2021',
          bn: 'কারণ ২০২১ সালে আন্তর্জাতিক স্ট্যান্ডার্ড কমিটি ওয়েব এপিআই নিষিদ্ধ করেছিল'
        },
        {
          en: 'There is zero difference; ECMAScript and Web APIs are identical terms',
          bn: 'উভয়ের মধ্যে কোনো পার্থক্য নেই; দুটি একই জিনিস'
        }
      ],
      answer: 0,
      hint: {
        en: 'Node.js has ECMAScript without browser DOM. Web APIs are host environment extensions provided by browsers.',
        bn: 'Node.js-এও জাভাস্ক্রিপ্ট ভাষা আছে কিন্তু ব্রাউজার ডম নেই; ওয়েব এপিআই ব্রাউজারের নিজস্ব উপহার।'
      },
      explanation: {
        en: 'ECMAScript standardizes the language semantics; the browser provides Web APIs to give JavaScript access to the platform and OS.',
        bn: 'ECMAScript ভাষার নিয়ম ঠিক করে, আর ব্রাউজার ওয়েব এপিআই দিয়ে প্ল্যাটফর্ম ও হার্ডওয়্যারের সাথে যোগাযোগের পথ তৈরি করে দেয়।'
      }
    },
    {
      id: 'hc-ex2',
      kind: 'mcq',
      topic: 'feature-detection-pattern',
      question: {
        en: 'Which of the following code snippets represents the correct, modern approach for detecting Geolocation API support in a user browser?',
        bn: 'ব্যবহারকারীর ব্রাউজারে Geolocation API সমর্থিত কি না তা যাচাই করার সবচেয়ে আধুনিক ও নির্ভরযোগ্য কোড কোনটি?'
      },
      options: [
        {
          en: 'if ("geolocation" in navigator) { /* safely invoke API */ }',
          bn: 'if ("geolocation" in navigator) { /* নিরাপদে এপিআই ব্যবহার করুন */ }'
        },
        {
          en: 'if (navigator.userAgent.includes("Chrome")) { /* assume Chrome has it */ }',
          bn: 'if (navigator.userAgent.includes("Chrome")) { /* ধরে নেওয়া ক্রোম সমর্থন করবে */ }'
        },
        {
          en: 'try { formatHardDrive(); } catch(e) {}',
          bn: 'try { formatHardDrive(); } catch(e) {}'
        },
        {
          en: 'window.location = "https://download-geolocation.com"',
          bn: 'window.location = "https://download-geolocation.com"'
        }
      ],
      answer: 0,
      hint: {
        en: 'Detect capabilities, never browser user-agent strings. Use the "in" operator on navigator.',
        bn: 'ব্রাউজারের নাম দেখে নয়, navigator-এ ফিচারটি উপস্থিত আছে কি না ("in" দিয়ে) সরাসরি পরখ করুন।'
      },
      explanation: {
        en: 'Feature detection using the "in" operator or type checking avoids brittle userAgent parsing and prevents TypeError runtime crashes.',
        bn: 'ফিচার ডিটেকশন সরাসরি অবজেক্টের অস্তিত্ব পরীক্ষা করে ব্রাউজার ক্র্যাশ হওয়া রোধ করে।'
      }
    },
    {
      id: 'hc-ex3',
      kind: 'mcq',
      topic: 'secure-context-https-requirement',
      question: {
        en: 'Why do modern browsers strictly restrict sensitive Web APIs (like navigator.geolocation and navigator.mediaDevices) to Secure Contexts (HTTPS)?',
        bn: 'আধুনিক ব্রাউজারগুলো কেন সংবেদনশীল ওয়েব এপিআই (যেমন Geolocation ও mediaDevices) ব্যবহারের ক্ষেত্রে কঠোরভাবে সিকিউর কনটেক্সট (HTTPS) বাধ্যতামূলক করে?'
      },
      options: [
        {
          en: 'To prevent Man-in-the-Middle (MITM) attacks where an unencrypted network attacker could eavesdrop on private user location or hijack microphone and camera streams',
          bn: 'ম্যান-ইন-দ্য-মিডল (MITM) আক্রমণ প্রতিরোধ করতে, যাতে অরক্ষিত নেটওয়ার্কে কোনো হ্যাকার ব্যবহারকারীর গোপন অবস্থান চুরি করতে বা ক্যামেরা-মাইক্রোফোন হাইজ্যাক করতে না পারে'
        },
        {
          en: 'Because HTTPS reduces browser battery consumption by 80 percent',
          bn: 'কারণ HTTPS ব্রাউজারের ব্যাটারি খরচ ৮০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'HTTPS was made mandatory by the International Postal Union in 2023',
          bn: 'কারণ ২০২৩ সালে আন্তর্জাতিক ডাক সংস্থা HTTPS বাধ্যতামূলক করেছিল'
        },
        {
          en: 'Unencrypted HTTP causes computer monitors to lose brightness',
          bn: 'সাধারণ HTTP মনিটরের উজ্জ্বলতা কমিয়ে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Unencrypted HTTP traffic can be intercepted and altered by anyone on the Wi-Fi network.',
        bn: 'অরক্ষিত HTTP ট্র্যাফিক যেকোনো ওয়াইফাই নেটওয়ার্ক থেকে সহজেই চুরি ও পরিবর্তন করা যায়।'
      },
      explanation: {
        en: 'Secure Contexts ensure data encryption and origin authenticity, protecting private user sensor data from network tampering.',
        bn: 'সিকিউর কনটেক্সট তথ্যের এনক্রিপশন ও বিশ্বস্ততা নিশ্চিত করে ব্যবহারকারীর সংবেদনশীল ডেটা রক্ষা করে।'
      }
    },
    {
      id: 'hc-ex4',
      kind: 'mcq',
      topic: 'permissions-api-query-benefit',
      question: {
        en: 'What major user experience problem is solved by using navigator.permissions.query() before attempting to access a device feature?',
        bn: 'ডিভাইসের কোনো ফিচার ব্যবহারের আগে navigator.permissions.query() ব্যবহারের মাধ্যমে ব্যবহারকারীর কোন বড় সমস্যার সমাধান হয়?'
      },
      options: [
        {
          en: 'It enables the application to inspect whether permission is already "granted" or previously "denied" without triggering annoying popups or throwing unexpected permission errors',
          bn: 'এটি বিরক্তিকর পপআপ না দেখিয়ে বা অপ্রত্যাশিত এরর না ঘটিয়েই অ্যাপকে জানতে দেয় যে পারমিশন কি আগে থেকেই অনুমোদিত ("granted") নাকি নিষিদ্ধ ("denied") আছে'
        },
        {
          en: 'The Permissions API formats client hard drives to free up space',
          bn: 'পারমিশন এপিআই ক্লায়েন্টের হার্ড ড্রাইভ ফরম্যাট করে জায়গা খালি করে'
        },
        {
          en: 'It increases internet download speeds by 500 percent',
          bn: 'এটি ইন্টারনেটের ডাউনলোডের গতি ৫০০ শতাংশ বৃদ্ধি করে'
        },
        {
          en: 'Permissions queries permanently disable browser security warnings',
          bn: 'এটি ব্রাউজারের সমস্ত নিরাপত্তা সতর্কতা চিরতরে বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If state is "denied", show helpful instructions on how to re-enable it in browser settings instead of popping up broken alerts.',
        bn: 'যদি আগে থেকেই "denied" থাকে, তবে ব্যর্থ চেষ্টার বদলে ব্রাউজার সেটিংসে গিয়ে তা ঠিক করার বার্তা দেখানো যায়।'
      },
      explanation: {
        en: 'The Permissions API provides state visibility, allowing applications to render contextual UI and avoid jarring permission prompts.',
        bn: 'পারমিশন এপিআই বর্তমান অনুমতি অবস্থা আগে থেকেই প্রদর্শন করে চমৎকার ব্যবহারকারী অভিজ্ঞতা নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'harbor-charter-quiz',
    title: {
      en: 'Web APIs Architecture, Secure Contexts, and Global Objects Quiz',
      bn: 'ওয়েব এপিআই আর্কিটেকচার, সিকিউর কনটেক্সট ও গ্লোবাল অবজেক্ট কুইজ'
    },
    questions: [
      {
        id: 'hcq-q1',
        kind: 'mcq',
        topic: 'localhost-secure-context-exception',
        question: {
          en: 'Why do browsers treat "http://localhost" as a Secure Context even though it does not use the HTTPS protocol?',
          bn: 'HTTPS প্রোটোকল ব্যবহার না করা সত্ত্বেও ব্রাউজারগুলো কেন "http://localhost"-কে একটি সিকিউর কনটেক্সট (Secure Context) হিসেবে গণ্য করে?'
        },
        options: [
          {
            en: 'Localhost network packets loop back entirely within the local operating system loopback interface (127.0.0.1), preventing any external network attacker from eavesdropping on communications',
            bn: 'লোকালহোস্টের সমস্ত নেটওয়ার্ক প্যাকেট সম্পূর্ণভাবে অপারেটিং সিস্টেমের নিজস্ব লুপব্যাক ইন্টারফেসে (127.0.0.1) থাকে, ফলে বাইরের কোনো নেটওয়ার্ক হ্যাকারের তথ্য চুরির সুযোগ থাকে না'
          },
          {
            en: 'Because localhost runs exclusively on satellite internet connections',
            bn: 'কারণ লোকালহোস্ট কেবল স্যাটেলাইট ইন্টারনেট সংযোগে চলে'
          },
          {
            en: 'Localhost was granted special legal immunity by the United Nations in 2020',
            bn: 'কারণ ২০২০ সালে জাতিসংঘ লোকালহোস্টকে বিশেষ আইনি ছাড় দিয়েছিল'
          },
          {
            en: 'Because localhost permanently disables computer monitors',
            bn: 'কারণ লোকালহোস্ট কম্পিউটারের মনিটর বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Loopback traffic never leaves your local physical device, so it cannot be intercepted across the wire.',
          bn: 'লুপব্যাক ট্র্যাফিক আপনার কম্পিউটার ছেড়ে কখনোই ইন্টারনেটে যায় না, ফলে বাইরে থেকে কেউ তা দেখতে পারে না।'
        },
        explanation: {
          en: 'The W3C Secure Context specification explicitly designates loopback addresses (localhost, 127.0.0.1) as trustworthy to facilitate local development.',
          bn: 'W3C স্ট্যান্ডার্ড স্থানীয় ডেভেলপমেন্টের সুবিধার্থে লোকালহোস্ট লুপব্যাক ইন্টারফেসকে নির্ভরযোগ্য বলে স্বীকৃতি দেয়।'
        }
      },
      {
        id: 'hcq-q2',
        kind: 'mcq',
        topic: 'window-vs-navigator-object-role',
        question: {
          en: 'In web architecture, what is the key distinction between APIs attached to the "window" object versus APIs attached to the "navigator" object?',
          bn: 'ওয়েব আর্কিটেকচারে "window" অবজেক্টের সাথে যুক্ত এপিআই এবং "navigator" অবজেক্টের সাথে যুক্ত এপিআই-এর মধ্যে মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'The "window" object represents the current browser tab, DOM viewport, and script execution context; the "navigator" object represents the client browser identity, hardware devices, and system capabilities',
            bn: '"window" অবজেক্ট বর্তমান ব্রাউজার ট্যাব, ভিউপোর্ট ও স্ক্রিপ্ট এক্সিকিউশন পরিধি নির্দেশ করে; আর "navigator" অবজেক্ট ক্লায়েন্টের ব্রাউজার পরিচয়, হার্ডওয়্যার ও সিস্টেমের ক্ষমতা নির্দেশ করে'
          },
          {
            en: 'The window object is only available on desktop computers while navigator is only for mobile phones',
            bn: 'window কেবল ডেস্কটপে থাকে আর navigator কেবল মোবাইল ফোনে থাকে'
          },
          {
            en: 'Because navigator was deprecated in 2024 and replaced by CSS',
            bn: 'কারণ ২০২৪ সালে navigator বাতিল করে CSS দিয়ে প্রতিস্থাপন করা হয়েছিল'
          },
          {
            en: 'Window APIs are written in Java while Navigator APIs are written in C',
            bn: 'Window এপিআই জাভাতে এবং Navigator এপিআই সি ভাষায় লেখা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Window = this specific tab/page. Navigator = the whole browser application and physical device.',
          bn: 'Window হলো নির্দিষ্ট একটি ট্যাব বা পেজ; আর Navigator হলো পুরো ব্রাউজার ও ডিভাইসের পরিচয়।'
        },
        explanation: {
          en: 'Window encapsulates the document viewport and global scope; Navigator provides device and user-agent metadata.',
          bn: 'Window পেজের ভিউপোর্ট ও গ্লোবাল স্কোপ দেয়; Navigator হার্ডওয়্যার ও ব্রাউজারের পরিচয় দেয়।'
        }
      },
      {
        id: 'hcq-q3',
        kind: 'mcq',
        topic: 'permissions-query-state-transitions',
        question: {
          en: 'What are the three possible string values returned by navigator.permissions.query() representing a permission state?',
          bn: 'navigator.permissions.query() চালানোর পর অনুমতির অবস্থা নির্দেশ করতে কোন ৩টি সম্ভাব্য স্ট্রিং মান পাওয়া যায়?'
        },
        options: [
          {
            en: '"granted" (permission approved), "prompt" (user will be asked), and "denied" (permission blocked)',
            bn: '"granted" (অনুমোদিত), "prompt" (অনুমতি চাওয়া হবে), এবং "denied" (বাতিল বা ব্লক করা)'
          },
          {
            en: '"yes", "no", and "maybe"',
            bn: '"yes", "no", এবং "maybe"'
          },
          {
            en: '"active", "inactive", and "sleeping"',
            bn: '"active", "inactive", এবং "sleeping"'
          },
          {
            en: '"pass", "fail", and "retry"',
            bn: '"pass", "fail", এবং "retry"'
          }
        ],
        answer: 0,
        hint: {
          en: 'The standard specifies: granted, prompt, denied.',
          bn: 'স্ট্যান্ডার্ডে ৩টি মান রয়েছে: granted, prompt, denied।'
        },
        explanation: {
          en: 'The W3C Permissions specification strictly standardizes these three states across all conforming modern browsers.',
          bn: 'W3C স্ট্যান্ডার্ড আধুনিক ব্রাউজারগুলোতে এই ৩টি নির্দিষ্ট মান সুনির্দিষ্ট করেছে।'
        }
      },
      {
        id: 'hcq-q4',
        kind: 'mcq',
        topic: 'user-gesture-permission-requirement',
        question: {
          en: 'Why do modern web browsers automatically block attempts to open the Fullscreen API or Clipboard API unless triggered inside a "transient user activation" (user gesture)?',
          bn: 'ব্যবহারকারীর সক্রিয় হাতের ছোঁয়া বা ক্লিক (ইউজার জেসচার) ছাড়া ব্রাউজারগুলো কেন ফুলস্ক্রিন বা ক্লিপবোর্ড এপিআই চালানো স্বয়ংক্রিয়ভাবে আটকে দেয়?'
        },
        options: [
          {
            en: 'To prevent malicious websites from hijacking user screens or secretly reading clipboard passwords and tokens without active user knowledge or intent',
            bn: 'দুর্বৃত্তদের তৈরি ক্ষতিকর ওয়েবসাইট যেন ব্যবহারকারীর সম্মতি ছাড়াই পুরো স্ক্রিন দখল করতে না পারে বা ক্লিপবোর্ডের গোপন পাসওয়ার্ড চুরি করতে না পারে তা প্রতিরোধ করতে'
          },
          {
            en: 'Because user gestures reduce computer electrical current consumption by 90 percent',
            bn: 'কারণ ইউজার জেসচার কম্পিউটারের বিদ্যুৎ খরচ ৯০ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'User gestures were made mandatory by international gaming conventions in 2021',
            bn: 'কারণ ২০২১ সালে আন্তর্জাতিক গেমিং সংস্থা ইউজার জেসচার বাধ্যতামূলক করেছিল'
          },
          {
            en: 'To prevent computer mouse pointers from moving too fast',
            bn: 'যাতে মাউসের কার্সর অতিরিক্ত দ্রুত না নড়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A page should never suddenly hijack your entire screen or steal clipboard contents just because you loaded it.',
          bn: 'কোনো পেজ লোড হওয়ার সাথে সাথেই স্ক্রিন আটকে ফেলা বা ক্লিপবোর্ড পড়া চরম নিরাপত্তা ঝুঁকি।'
        },
        explanation: {
          en: 'Requiring a transient user activation (e.g. click, keypress) protects users against deceptive UI hijacking and unauthorized data access.',
          bn: 'ইউজার অ্যাক্টিভেশন নিশ্চিত করে যে ব্যবহারকারী নিজ ইচ্ছায় বাটন ক্লিক করার পরেই কেবল সংবেদনশীল কাজ সম্পন্ন হবে।'
        }
      }
    ]
  }
};
