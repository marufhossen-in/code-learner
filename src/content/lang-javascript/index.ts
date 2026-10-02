import type { Hub } from '../../lib/types';
import { ValuesAndTheCoercionLesson } from './lessons/values-and-the-coercion';
import { ClosuresAndTheScopeLesson } from './lessons/closures-and-the-scope';
import { PrototypesAndTheChainLesson } from './lessons/prototypes-and-the-chain';
import { PromisesAndTheThenLesson } from './lessons/promises-and-the-then';
import { ModulesAndTheImportLesson } from './lessons/modules-and-the-import';
import { IterablesAndTheSpreadLesson } from './lessons/iterables-and-the-spread';
import { ProxiesAndTheTrapLesson } from './lessons/proxies-and-the-trap';
import { TheScriptReleaseLesson } from './lessons/the-script-release';

export const langJavascriptHub: Hub = {
  slug: 'lang-javascript',
  name: 'JavaScript',
  icon: '⚡',
  tagline: {
    en: 'Master modern JavaScript from foundational primitives and scope to extreme-expert asynchronous event loops, prototypes, proxies, and production bundling.',
    bn: 'মৌলিক প্রিমিটিভ ও স্কোপ থেকে শুরু করে চরম-দক্ষ অ্যাসিঙ্ক্রোনাস ইভেন্ট লুপ, প্রোটোটাইপ, প্রক্সি ও প্রোডাকশন বান্ডলিং পর্যন্ত আধুনিক জাভাস্ক্রিপ্ট আয়ত্ত করুন।',
  },
  intro: {
    en: 'JavaScript is the universal programming language of the open web, powering high-concurrency Node.js microservices, rich single-page frontend applications, and cross-platform desktop software. Operating on an asynchronous, single-threaded, non-blocking event-driven runtime (V8), JavaScript combines functional paradigms like first-class closures and higher-order functions with dynamic object models based on prototypal inheritance. This complete curriculum takes you from primitive values and type coercion to lexical closures, prototype chains, Promise microtasks, ES modules, iterables, metaprogramming with Proxies, and modern tree-shaken production releases.',
    bn: 'জাভাস্ক্রিপ্ট হলো উন্মুক্ত ওয়েবের সার্বজনীন প্রোগ্রামিং ভাষা, যা উচ্চ-কনকারেন্সির Node.js মাইক্রোসার্ভিস, সমৃদ্ধ ফ্রন্টএন্ড সিঙ্গেল-পেজ অ্যাপ্লিকেশন এবং ক্রস-প্ল্যাটফর্ম ডেস্কটপ সফটওয়্যার পরিচালনা করে। একটি অ্যাসিঙ্ক্রোনাস, একক-থ্রেডেড, নন-ব্লকিং ইভেন্ট-চালিত রানটাইমে (V8) চালিত জাভাস্ক্রিপ্ট ফার্স্ট-ক্লাস ক্লোজার ও হায়ার-অর্ডার ফাংশনের মতো ফাংশনাল ধারণার সাথে প্রোটোটাইপাল ইনহেরিটেন্সের সমন্বয় ঘটায়। এই পূর্ণাঙ্গ পাঠ্যক্রমটি আপনাকে প্রিমিটিভ মান ও টাইপ কোয়ার্শন থেকে শুরু করে লেক্সিক্যাল স্কোপ, প্রোটোটাইপ চেইন, প্রমিজ মাইক্রোটাস্ক, ইএস মডিউল, ইটারেবল, প্রক্সি দিয়ে মেটা-প্রোগ্রামিং এবং আধুনিক প্রোডাকশন বান্ডলিং পর্যন্ত ধাপে ধাপে দক্ষ করে তুলবে।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Core Values, Scope, and Prototypes', bn: 'ধাপ ১ — মূল মান, স্কোপ ও প্রোটোটাইপ' },
      items: [
        { en: 'Primitives, objects, and type coercion: strict equality and implicit conversions (Lesson 1)', bn: 'প্রিমিটিভ, অবজেক্ট ও টাইপ কোয়ার্শন: কঠোর সমতা এবং স্বয়ংক্রিয় রূপান্তর (পাঠ ১)' },
        { en: 'Closures, lexical environments, and memory: garbage collection and variable capture (Lesson 2)', bn: 'ক্লোজার, লেক্সিক্যাল এনভায়রনমেন্ট ও মেমরি: গার্বেজ কালেকশন ও ভেরিয়েবল ক্যাপচার (পাঠ ২)' },
        { en: 'Prototypes, prototype chain, and inheritance: Object.create and ES6 class syntax (Lesson 3)', bn: 'প্রোটোটাইপ, প্রোটোটাইপ চেইন ও উত্তরাধিকার: Object.create এবং ইএস৬ ক্লাস (পাঠ ৩)' },
      ],
    },
    {
      title: { en: 'Stage 2 — Asynchronous Flow and Modular Architecture', bn: 'ধাপ ২ — অ্যাসিঙ্ক্রোনাস প্রবাহ ও মডিউলার আর্কিটেকচার' },
      items: [
        { en: 'Promises, microtasks, and async/await: non-blocking execution and event loop (Lesson 4)', bn: 'প্রমিজ, মাইক্রোটাস্ক ও async/await: নন-ব্লকিং এক্সিকিউশন ও ইভেন্ট লুপ (পাঠ ৪)' },
        { en: 'ES modules, dynamic imports, and module resolution: tree-shaking and exports (Lesson 5)', bn: 'ইএস মডিউল, ডায়নামিক ইমপোর্ট ও রেজোলিউশন: ট্রি-শেকিং এবং এক্সপোর্ট (পাঠ ৫)' },
        { en: 'Iterables, generators, and spread operators: protocols and lazy sequences (Lesson 6)', bn: 'ইটারেবল, জেনারেটর ও স্প্রেড অপারেটর: প্রোটোকল ও অলস সিকোয়েন্স (পাঠ ৬)' },
      ],
    },
    {
      title: { en: 'Stage 3 — Metaprogramming, Optimization, and Releases', bn: 'ধাপ ৩ — মেটা-প্রোগ্রামিং, অপ্টিমাইজেশন ও রিলিজ' },
      items: [
        { en: 'Proxies and Reflect: property traps, reactive state management, and validation (Lesson 7)', bn: 'প্রক্সি ও রিফ্লেক্ট: প্রপার্টি ট্র্যাপ, রিঅ্যাক্টিভ স্টেট এবং ভ্যালিডেশন (পাঠ ৭)' },
        { en: 'The script release: bundlers (Vite, Rollup), source maps, and production minification (Lesson 8)', bn: 'স্ক্রিপ্ট রিলিজ: বান্ডলার (Vite, Rollup), সোর্স ম্যাপ এবং মিনিফিকেশন (পাঠ ৮)' },
      ],
    },
  ],
  lessons: [
    ValuesAndTheCoercionLesson,
    ClosuresAndTheScopeLesson,
    PrototypesAndTheChainLesson,
    PromisesAndTheThenLesson,
    ModulesAndTheImportLesson,
    IterablesAndTheSpreadLesson,
    ProxiesAndTheTrapLesson,
    TheScriptReleaseLesson,
  ],
  references: [],
  projects: [
    {
      title: { en: 'Project 1 — High-Performance Reactive State Store', bn: 'প্রজেক্ট ১ — উচ্চ-গতির রিঅ্যাক্টিভ স্টেট স্টোর' },
      brief: {
        en: 'Build a zero-dependency reactive state store using JavaScript Proxies and closures. Implement automatic dependency tracking, computed properties, batch updates with microtask queuing (queueMicrotask), and unsubscribe listeners with zero memory leaks. Deliverable: a standalone ES module with complete unit test assertions.',
        bn: 'জাভাস্ক্রিপ্ট প্রক্সি ও ক্লোজার ব্যবহার করে কোনো বাড়তি লাইব্রেরি ছাড়া একটি রিঅ্যাক্টিভ স্টেট স্টোর তৈরি করুন। স্বয়ংক্রিয় ডিপেনডেন্সি ট্র্যাকিং, কম্পিউটেড প্রপার্টি, মাইক্রোটাস্ক কিউ দিয়ে ব্যাচ আপডেট এবং মেমরি লিক ছাড়া আনসাবস্ক্রাইব লিসেনার যুক্ত করুন। আউটপুট: পূর্ণাঙ্গ ইউনিট টেস্টসহ একটি স্বতন্ত্র ইএস মডিউল।',
      },
    },
    {
      title: { en: 'Project 2 — Resilient Asynchronous HTTP Client with Retry', bn: 'প্রজেক্ট ২ — স্বয়ংক্রিয় রিট্রাইযুক্ত টেকসই অ্যাসিঙ্ক এইচটিটিপি ক্লায়েন্ট' },
      brief: {
        en: 'Develop an asynchronous API client wrapping Fetch API with request/response interceptors, exponential backoff jittered retries, AbortController timeout cancellations, and strict JSON response parsing. Deliverable: a tree-shakable ES module ready for production npm distribution.',
        bn: 'রিকোয়েস্ট/রেসপন্স ইন্টারসেপ্টর, এক্সপোনেনশিয়াল ব্যাকঅফ রিট্রাই, AbortController টাইমআউট এবং কঠোর জেসন পার্সিংসহ Fetch API এর ওপর ভিত্তি করে একটি অ্যাসিঙ্ক্রোনাস এপিআই ক্লায়েন্ট তৈরি করুন। আউটপুট: প্রোডাকশন ব্যবহারের জন্য প্রস্তুত একটি ট্রি-শেকেবল ইএস মডিউল।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Always use strict equality (===): avoid implicit type coercion bugs by standardizing on triple-equals and explicit type conversions.',
      bn: 'সর্বদা কঠোর সমতা (===) ব্যবহার করুন: ট্রিপল-ইকুয়াল এবং স্পষ্ট টাইপ রূপান্তর ব্যবহারের মাধ্যমে অপ্রত্যাশিত কোয়ার্শন বাগ দূর করুন।',
    },
    {
      en: 'Avoid memory leaks in closures: nullify retained references to large DOM trees or arrays when event listeners or intervals are terminated.',
      bn: 'ক্লোজারে মেমরি লিক প্রতিরোধ করুন: ইভেন্ট লিসেনার বা ইন্টারভাল শেষ হলে বড় ডম এলিমেন্ট বা অ্যারের রেফারেন্স নাল করে মেমরি মুক্ত করুন।',
    },
    {
      en: 'Embrace non-blocking async/await with Promise.all: avoid serial await waterfalls for independent asynchronous network queries.',
      bn: 'Promise.all দিয়ে নন-ব্লকিং অ্যাসিঙ্ক কোড লিখুন: স্বাধীন নেটওয়ার্ক কুয়েরির ক্ষেত্রে ধীরগতির ধারাবাহিক await পরিহার করে সমান্তরাল রিকোয়েস্ট পাঠান।',
    },
    {
      en: 'Prefer immutable functional transforms: leverage map, filter, and reduce over manual index mutating loops for clean data pipelines.',
      bn: 'অপরিবর্তনীয় ফাংশনাল রূপান্তর বেছে নিন: ম্যানুয়াল ইনডেক্স মিউটেশনের বদলে map, filter এবং reduce ব্যবহার করে পরিচ্ছন্ন ডেটা পাইপলাইন তৈরি করুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the exact difference between == (loose equality) and === (strict equality) in JavaScript, and what coercion rules apply?',
        bn: 'জাভাস্ক্রিপ্টে == (লুজ সমতা) এবং === (কঠোর সমতা) এর মধ্যকার সুনির্দিষ্ট পার্থক্য কী এবং কোন কোয়ার্শন নিয়ম প্রযোজ্য হয়?',
      },
      a: {
        en: 'Strict equality (===) compares both type and value without performing any type conversion: if types differ, it returns false immediately. Loose equality (==) attempts implicit type coercion according to the Abstract Equality Comparison Algorithm: comparing a number to a string converts the string to a number (Number(str)); comparing a boolean converts the boolean to 1 or 0; and comparing an object to a primitive calls the object ToPrimitive method (valueOf/toString). Standardizing on === eliminates subtle edge cases like "" == 0 (true) and null == undefined (true).',
        bn: 'কঠোর সমতা (===) কোনো ধরনের রূপান্তর ছাড়াই টাইপ এবং মান উভয়ই তুলনা করে: টাইপ আলাদা হলে সাথে সাথে false ফেরত দেয়। অন্যদিকে লুজ সমতা (==) বিমূর্ত সমতা অ্যালগরিদম মেনে স্বয়ংক্রিয় টাইপ রূপান্তর ঘটায়: সংখ্যার সাথে স্ট্রিং তুলনা করলে স্ট্রিংকে সংখ্যায় রূপান্তর করে (Number(str)); বুলিয়ানকে ১ বা ০ তে রূপান্তর করে; এবং অবজেক্টের সাথে প্রিমিটিভ তুলনা করলে অবজেক্টের valueOf বা toString মেথড কল করে। সর্বদা === ব্যবহার করলে "" == 0 (true) বা null == undefined (true) এর মতো বিভ্রান্তিকর ভুল এড়ানো যায়।',
      },
    },
    {
      q: {
        en: 'What is a closure in JavaScript, how does it retain lexical scope, and how can it cause memory leaks?',
        bn: 'জাভাস্ক্রিপ্টে ক্লোজার কী, এটি কীভাবে লেক্সিক্যাল স্কোপ ধরে রাখে এবং কীভাবে মেমরি লিক সৃষ্টি করতে পারে?',
      },
      a: {
        en: 'A closure is the combination of a function bundled together with references to its surrounding lexical environment. In JavaScript, inner functions retain access to outer function variables even after the outer function has completed execution and returned. The JavaScript garbage collector cannot free variables referenced by an active closure. A memory leak occurs when closures inadvertently retain references to large objects (like DOM nodes or large arrays) in long-lived variables, global event listeners, or uncleared setInterval handlers.',
        bn: 'একটি ক্লোজার হলো একটি ফাংশন এবং তার আশেপাশের লেক্সিক্যাল পরিবেশের ভেরিয়েবলগুলোর সমন্বয়। জাভাস্ক্রিপ্টে ভেতরের ফাংশন বাইরের ফাংশনের কার্যকাল শেষ হয়ে যাওয়ার পরেও তার ভেরিয়েবলগুলোতে প্রবেশাধিকার বজায় রাখে। সচল ক্লোজার দ্বারা নির্দেশিত কোনো ভেরিয়েবলকে জাভাস্ক্রিপ্ট গার্বেজ কালেক্টর মেমরি থেকে মুছতে পারে না। কোনো দীর্ঘস্থায়ী গ্লোবাল ইভেন্ট লিসেনার বা ক্লিয়ার না করা setInterval হ্যান্ডলার যদি ক্লোজারের মাধ্যমে বড় অবজেক্ট বা ডম এলিমেন্ট ধরে রাখে, তবে মেমরি লিক ঘটে।',
      },
    },
    {
      q: {
        en: 'How does the JavaScript Event Loop coordinate the Call Stack, Microtask Queue, and Macrotask Queue?',
        bn: 'জাভাস্ক্রিপ্ট ইভেন্ট লুপ কীভাবে কল স্ট্যাক, মাইক্রোটাস্ক কিউ এবং ম্যাক্রোটাস্ক কিউ সমন্বয় করে?',
      },
      a: {
        en: 'JavaScript executes on a single-threaded event loop. Synchronous code executes immediately on the Call Stack. When asynchronous operations finish, their callbacks enter queues: Promise resolutions (then/catch/finally) and queueMicrotask enter the Microtask Queue, while setTimeout, setInterval, and I/O callbacks enter the Macrotask (Task) Queue. The Event Loop prioritizes the Microtask Queue: after each synchronous script or macrotask finishes, the engine drains the ENTIRE Microtask Queue before picking the next macrotask, explaining why Promise handlers execute before setTimeout(..., 0).',
        bn: 'জাভাস্ক্রিপ্ট একটি একক-থ্রেডেড ইভেন্ট লুপে চলে। সিঙ্ক্রোনাস কোড সরাসরি কল স্ট্যাকে এক্সিকিউট হয়। অ্যাসিঙ্ক্রোনাস কাজ শেষ হলে তাদের কলব্যাকগুলো কিউতে প্রবেশ করে: প্রমিজের সমাধান (then/catch) এবং queueMicrotask যায় মাইক্রোটাস্ক কিউতে, আর setTimeout, setInterval ও আই/ও কলব্যাক যায় ম্যাক্রোটাস্ক কিউতে। ইভেন্ট লুপ মাইক্রোটাস্ক কিউকে সর্বোচ্চ অগ্রাধিকার দেয়: কল স্ট্যাক খালি হলে পরবর্তী ম্যাক্রোটাস্ক ধরার আগেই ইঞ্জিন সম্পূর্ণ মাইক্রোটাস্ক কিউ খালি করে ফেলে, যার কারণে setTimeout(..., 0) এর পূর্বেই প্রমিজের কোড চলে।',
      },
    },
    {
      q: {
        en: 'How does prototypal inheritance operate via the __proto__ chain compared to classical OOP classes?',
        bn: 'ক্লাসিক্যাল ওওপি ক্লাসের তুলনায় __proto__ চেইনের মাধ্যমে প্রোটোটাইপাল ইনহেরিটেন্স কীভাবে কাজ করে?',
      },
      a: {
        en: 'In classical languages, classes act as blueprints that copy definitions into new instances. In JavaScript, inheritance is dynamic and live through objects linking to other objects via the internal [[Prototype]] link (__proto__). When accessing property obj.foo, the V8 engine first checks obj itself; if missing, it traverses up the prototype chain (obj.__proto__, then obj.__proto__.__proto__) until finding the property or reaching null (Object.prototype.__proto__). ES6 class and extends syntax are pure syntactic sugar over this prototype delegation system.',
        bn: 'ক্লাসিক্যাল ভাষায় ক্লাস হলো ব্লুপ্রিন্ট যা নতুন ইনস্ট্যান্সে মেথড কপি করে দেয়। কিন্তু জাভাস্ক্রিপ্টে ইনহেরিটেন্স হলো গতিশীল এবং এটি অবজেক্টের অভ্যন্তরীণ [[Prototype]] লিঙ্কের (__proto__) মাধ্যমে কাজ করে। কোনো প্রপার্টি obj.foo অ্যাক্সেস করলে ইঞ্জিন প্রথমে obj এর ভেতরে খোঁজে; না পেলে প্রোটোটাইপ চেইন বেয়ে ওপরে ওঠে (obj.__proto__) যতক্ষণ না প্রপার্টিটি পাওয়া যায় অথবা null এ পৌঁছায়। ইএস৬ এর class এবং extends মূলত এই প্রোটোটাইপ ব্যবস্থার ওপর একটি সহজ সিনট্যাক্টিক সুগার মাত্র।',
      },
    },
  ],
  realWorld: [
    {
      company: 'Netflix',
      description: {
        en: 'Renders blazing-fast client UI components and streaming video controls across thousands of smart TV devices using highly optimized modern JavaScript.',
        bn: 'হাজার হাজার স্মার্ট টিভি এবং ডিভাইসে অত্যন্ত অপ্টিমাইজড জাভাস্ক্রিপ্ট ব্যবহার করে দ্রুতগতির ক্লায়েন্ট ইউআই ও ভিডিও স্ট্রিমিং নিয়ন্ত্রণ করে।',
      },
    },
    {
      company: 'Slack & Discord',
      description: {
        en: 'Power real-time messaging, WebSocket event channels, and rich desktop user experiences using Electron and Node.js JavaScript architectures.',
        bn: 'Electron ও Node.js আর্কিটেকচার ব্যবহার করে রিয়েল-টাইম মেসেজিং, ওয়েবসকেট ইভেন্ট এবং সমৃদ্ধ ডেস্কটপ অভিজ্ঞতা পরিচালনা করে।',
      },
    },
    {
      company: 'Stripe',
      description: {
        en: 'Secures billions of dollars in global online transactions using strictly audited, sandboxed JavaScript client SDKs embedded in merchant websites.',
        bn: 'নিরাপদ স্যান্ডবক্সড জাভাস্ক্রিপ্ট ক্লায়েন্ট এসডিকে দিয়ে মার্চেন্ট ওয়েবসাইটে বিশ্বব্যাপী শত শত কোটি ডলারের অনলাইন পেমেন্ট লেনদেন সুরক্ষিত রাখে।',
      },
    },
  ],
};
