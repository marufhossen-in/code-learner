import type { Hub } from '../../lib/types';
import { syntaxMintLesson } from './lessons/the-syntax-mint';
import { operatorCourtLesson } from './lessons/the-operator-court';
import { repetitionMillLesson } from './lessons/the-repetition-mill';
import { shelfWorksLesson } from './lessons/the-shelf-works';
import { registryOfShapesLesson } from './lessons/the-registry-of-shapes';
import { publicSquareLesson } from './lessons/the-public-square';
import { clocktowerLesson } from './lessons/the-clocktower';
import { closuresLesson } from './lessons/closures';
import { eventLoopLesson } from './lessons/event-loop';
import { onePageEachLesson } from './lessons/one-page-each';

export const javascriptHub: Hub = {
  slug: 'javascript',
  name: 'JavaScript',
  icon: '⚡',
  tagline: {
    en: 'The language of the browser — and the server, and everything in between.',
    bn: 'ব্রাউজারের ভাষা — এবং সার্ভারের, এবং মাঝখানের সবকিছুর।',
  },
  about: {
    en: 'JavaScript is a single-threaded, dynamically typed language with prototypes, first-class functions and closures. It powers the interactive web (DOM manipulation, events), backends (Node.js), mobile apps, servers and tools. This hub teaches not just the syntax, but the engine: how code is parsed, how memory works, and how the event loop schedules everything.',
    bn: 'জাভাস্ক্রিপ্ট একটি সিঙ্গেল-থ্রেডেড, ডাইনামিক্যালি টাইপড ভাষা যাতে প্রোটোটাইপ, ফার্স্ট-ক্লাস ফাংশন ও ক্লোজার আছে। ইন্টারঅ্যাক্টিভ ওয়েব (DOM, ইভেন্ট), ব্যাকএন্ড (Node.js), মোবাইল অ্যাপ, সার্ভার ও টুল — সব এটিই চালায়। এই হাবে শুধু সিনট্যাক্স নয়, ইঞ্জিনও শেখানো হয়: কোড কীভাবে পার্স হয়, মেমোরি কীভাবে কাজ করে, আর ইভেন্ট লুপ কীভাবে সব শিডিউল করে।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Foundations', bn: 'ধাপ ১ — ভিত্তি' },
      items: [
        { en: 'Variables (let/const), types, operators', bn: 'ভেরিয়েবল (let/const), টাইপ, অপারেটর' },
        { en: 'Conditionals, loops, functions', bn: 'কন্ডিশনাল, লুপ, ফাংশন' },
        { en: 'Arrays & objects — your first data structures', bn: 'অ্যারে ও অবজেক্ট — প্রথম ডেটা স্ট্রাকচার' },
      ],
    },
    {
      title: { en: 'Stage 2 — Core mechanics', bn: 'ধাপ ২ — মূল প্রক্রিয়া' },
      items: [
        { en: 'Scope & closures (this hub’s lessons)', bn: 'স্কোপ ও ক্লোজার (এই হাবের লেসন)' },
        { en: 'The event loop & asynchronous code', bn: 'ইভেন্ট লুপ ও অ্যাসিঙ্ক্রোনাস কোড' },
        { en: 'Promises, async/await', bn: 'Promise, async/await' },
      ],
    },
    {
      title: { en: 'Stage 3 — The browser', bn: 'ধাপ ৩ — ব্রাউজার' },
      items: [
        { en: 'DOM, events, forms', bn: 'DOM, ইভেন্ট, ফর্ম' },
        { en: 'fetch, JSON, Web APIs', bn: 'fetch, JSON, ওয়েব API' },
        { en: 'Storage: localStorage, cookies, IndexedDB', bn: 'স্টোরেজ: localStorage, কুকি, IndexedDB' },
      ],
    },
    {
      title: { en: 'Stage 4 — Professional', bn: 'ধাপ ৪ — প্রফেশনাল' },
      items: [
        { en: 'Memory & performance', bn: 'মেমোরি ও পারফরম্যান্স' },
        { en: 'Modules, tooling, testing', bn: 'মডিউল, টুলিং, টেস্টিং' },
        { en: 'TypeScript as the next step', bn: 'পরবর্তী ধাপে TypeScript' },
      ],
    },
  ],
  lessons: [syntaxMintLesson, operatorCourtLesson, repetitionMillLesson, shelfWorksLesson, registryOfShapesLesson, publicSquareLesson, clocktowerLesson, closuresLesson, eventLoopLesson, onePageEachLesson],
  reference: [
    {
      group: 'Array',
      methods: [
        {
          name: 'map',
          signature: 'arr.map(fn) → Array',
          params: { en: 'fn(item, index, array) — transform.', bn: 'fn(item, index, array) — রূপান্তরকারী ফাংশন।' },
          returns: { en: 'A NEW array of transformed items.', bn: 'রূপান্তরিত আইটেমের নতুন অ্যারে।' },
          example: '[1, 2, 3].map(n => n * 2)\n// → [2, 4, 6]',
          mistake: {
            en: 'Using map only for side effects — use forEach instead.',
            bn: 'শুধু পার্শ্বপ্রতিক্রিয়ার জন্য map ব্যবহার — সেজন্য forEach।',
          },
          related: ['filter', 'forEach'],
        },
        {
          name: 'filter',
          signature: 'arr.filter(fn) → Array',
          params: { en: 'fn(item) → boolean — keep when true.', bn: 'fn(item) → boolean — true হলে রাখে।' },
          returns: { en: 'A NEW array with kept items.', bn: 'রাখা আইটেমের নতুন অ্যারে।' },
          example: '[1, 2, 3, 4].filter(n => n % 2 === 0)\n// → [2, 4]',
          related: ['map', 'find'],
        },
        {
          name: 'at',
          signature: 'arr.at(i) → item | undefined',
          params: { en: 'Index; negative counts from the end.', bn: 'ইনডেক্স; ঋণাত্মক হলে শেষ থেকে গুনে।' },
          returns: { en: 'The item at that position.', bn: 'সেই অবস্থানের আইটেম।' },
          example: '["a", "b", "c"].at(-1)\n// → "c"',
          related: ['slice'],
        },
      ],
    },
    {
      group: 'String',
      methods: [
        {
          name: 'includes',
          signature: 'str.includes(search) → boolean',
          params: { en: 'Search string, optional start index.', bn: 'খোঁজার স্ট্রিং, ঐচ্ছিক শুরুর ইনডেক্স।' },
          returns: { en: 'true if found.', bn: 'পাওয়া গেলে true।' },
          example: '"developer".includes("velo")\n// → true',
          related: ['indexOf', 'startsWith'],
        },
        {
          name: 'split',
          signature: 'str.split(sep) → Array',
          params: { en: 'Separator string or regex.', bn: 'বিভাজক স্ট্রিং বা regex।' },
          returns: { en: 'Array of pieces.', bn: 'টুকরোগুলোর অ্যারে।' },
          example: '"a,b,c".split(",")\n// → ["a", "b", "c"]',
          mistake: {
            en: 'split("") on emoji text can break surrogate pairs.',
            bn: 'ইমোজি টেক্সটে split("") surrogate জোড়া ভেঙে ফেলতে পারে।',
          },
          related: ['join'],
        },
      ],
    },
    {
      group: 'Object',
      methods: [
        {
          name: 'entries',
          signature: 'Object.entries(obj) → [k, v][]',
          params: { en: 'Any object.', bn: 'যেকোনো অবজেক্ট।' },
          returns: { en: 'Array of [key, value] pairs.', bn: '[কি, মান] জোড়ার অ্যারে।' },
          example: 'Object.entries({ a: 1 })\n// → [["a", 1]]',
          related: ['keys', 'values'],
        },
        {
          name: 'keys',
          signature: 'Object.keys(obj) → string[]',
          params: { en: 'Any object.', bn: 'যেকোনো অবজেক্ট।' },
          returns: { en: 'Array of own enumerable keys.', bn: 'নিজস্ব enumerable কি-এর অ্যারে।' },
          example: 'Object.keys({ a: 1, b: 2 })\n// → ["a", "b"]',
          related: ['entries', 'hasOwn'],
        },
      ],
    },
    {
      group: 'Promise',
      methods: [
        {
          name: 'then',
          signature: 'p.then(onOk, onErr) → Promise',
          params: { en: 'Fulfillment and rejection handlers.', bn: 'সফলতা ও ব্যর্থতার হ্যান্ডলার।' },
          returns: { en: 'A NEW promise (chainable).', bn: 'নতুন প্রমিজ (চেইনযোগ্য)।' },
          example: 'fetch("/api").then(r => r.json())',
          mistake: {
            en: 'Nesting .then inside .then — return the inner promise and chain flat.',
            bn: '.then-এর ভেতরে .then নেস্ট করা — ভেতরের প্রমিজ রিটার্ন করে সমতল চেইন করুন।',
          },
          related: ['catch', 'finally'],
        },
        {
          name: 'all',
          signature: 'Promise.all(iterable) → Promise<Array>',
          params: { en: 'Array of promises/values.', bn: 'প্রমিজ/মানের অ্যারে।' },
          returns: { en: 'Resolves with all results; rejects if ANY rejects.', bn: 'সব ফলাফলসহ resolve; যেকোনোটি ব্যর্থ হলে reject।' },
          example: 'Promise.all([fetch("/a"), fetch("/b")])',
          related: ['allSettled', 'race'],
        },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'Todo App with localStorage', bn: 'localStorage-সহ টুডু অ্যাপ' },
      diff: 'beginner',
      desc: {
        en: 'CRUD over the DOM, event delegation, and persistence. Teaches: state ↔ UI sync.',
        bn: 'DOM-এ CRUD, ইভেন্ট ডেলিগেশন ও পারসিস্টেন্স। শেখায়: স্টেট ↔ UI সিংক।',
      },
    },
    {
      title: { en: 'Weather Dashboard', bn: 'ওয়েদার ড্যাশবোর্ড' },
      diff: 'intermediate',
      desc: {
        en: 'fetch + async/await against a public API, loading/error states, debounced search.',
        bn: 'পাবলিক API-তে fetch + async/await, লোডিং/এরর স্টেট, ডিবাউন্সড সার্চ।',
      },
    },
    {
      title: { en: 'Analytics Dashboard', bn: 'অ্যানালিটিক্স ড্যাশবোর্ড' },
      diff: 'advanced',
      desc: {
        en: 'Canvas charts, virtualized lists, memoization — closure-heavy architecture.',
        bn: 'ক্যানভাস চার্ট, ভার্চুয়ালাইজড লিস্ট, মেমোইজেশন — ক্লোজারনির্ভর আর্কিটেকচার।',
      },
    },
  ],
  bestPractices: [
    { en: 'Prefer const; use let only when rebinding is real.', bn: 'const-ই প্রাথমিক; পুনর্নির্ধারণ সত্যিই দরকার হলেই কেবল let।' },
    { en: 'Never rely on var loop capture — use let.', bn: 'var-এর লুপ-ক্যাপচারে ভরসা করবেন না — let ব্যবহার করুন।' },
    { en: 'Always handle promise rejections (.catch / try await).', bn: 'প্রমিজ রিজেকশন সবসময় হ্যান্ডেল করুন (.catch / try await)।' },
    { en: 'Keep functions small and pure where possible.', bn: 'সম্ভব হলে ফাংশন ছোট ও পিওর রাখুন।' },
    { en: 'Debounce high-frequency events (scroll, input, resize).', bn: 'বেশি-ঘটে এমন ইভেন্ট (scroll, input, resize) ডিবাউন্স করুন।' },
    { en: 'Name booleans as questions: isReady, hasError.', bn: 'বুলিয়ানের নাম প্রশ্নের মতো রাখুন: isReady, hasError।' },
  ],
  interview: [
    {
      q: { en: 'What is a closure?', bn: 'ক্লোজার কী?' },
      a: {
        en: 'A function combined with its lexical environment; it keeps outer variables alive and readable after the outer function returns.',
        bn: 'ফাংশন ও তার লেক্সিক্যাল environment-এর সমন্বয়; বাইরের ফাংশন রিটার্নের পরও ভেরিয়েবল টিকে থাকে ও পড়া যায়।',
      },
    },
    {
      q: { en: 'Explain the event loop in one minute.', bn: 'এক মিনিটে ইভেন্ট লুপ ব্যাখ্যা করুন।' },
      a: {
        en: 'One stack. When it empties: drain all microtasks (promises), optionally render, then run the oldest macrotask (timers, I/O). Repeat.',
        bn: 'একটি স্ট্যাক। খালি হলে: সব মাইক্রোটাস্ক (promise) শেষ করুন, দরকারে রেন্ডার, তারপর সবচেয়ে পুরোনো ম্যাক্রোটাস্ক (টাইমার, I/O)। রিপিট।',
      },
    },
    {
      q: { en: 'let vs var?', bn: 'let বনাম var?' },
      a: {
        en: 'let is block-scoped, not hoisted into usable form (TDZ), and creates fresh bindings per loop iteration; var is function-scoped and shared.',
        bn: 'let ব্লক-স্কোপড, ব্যবহারযোগ্য হোইস্ট হয় না (TDZ), প্রতি লুপ ইটারেশনে নতুন বাইন্ডিং দেয়; var ফাংশন-স্কোপড ও শেয়ারড।',
      },
    },
    {
      q: { en: 'Microtask vs macrotask, with examples.', bn: 'মাইক্রোটাস্ক বনাম ম্যাক্রোটাস্ক — উদাহরণসহ।' },
      a: {
        en: 'Promise callbacks and queueMicrotask are microtasks (run first, all of them); setTimeout, I/O and clicks are macrotasks (one per cycle).',
        bn: 'Promise কলব্যাক ও queueMicrotask মাইক্রোটাস্ক (আগে ও সব একসাথে); setTimeout, I/O, ক্লিক ম্যাক্রোটাস্ক (প্রতি চক্রে একটি)।',
      },
    },
  ],
  realWorld: [
    { en: 'Every interactive page you have ever used runs on this engine.', bn: 'আপনার ব্যবহার করা প্রতিটি ইন্টারঅ্যাক্টিভ পেজ এই ইঞ্জিনে চলে।' },
    { en: 'React/Vue/Angular are JavaScript closures + scheduling at scale.', bn: 'React/Vue/Angular হলো স্কেলে জাভাস্ক্রিপ্ট ক্লোজার + শিডিউলিং।' },
    { en: 'Node.js runs the SAME event loop on your server.', bn: 'Node.js আপনার সার্ভারে সেই একই ইভেন্ট লুপ চালায়।' },
    { en: 'Browser devtools’ “Call Stack” and “Scope” panes show these exact concepts.', bn: 'ব্রাউজার devtools-এর “Call Stack” ও “Scope” প্যানেল এই ধারণাগুলোই দেখায়।' },
  ],
};
