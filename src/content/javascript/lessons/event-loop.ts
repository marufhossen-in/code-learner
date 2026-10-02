import type { Lesson } from '../../../lib/types';

export const eventLoopLesson: Lesson = {
  slug: 'event-loop',
  tech: 'javascript',
  title: { en: 'The Event Loop', bn: 'ইভেন্ট লুপ' },
  summary: {
    en: 'One thread, thousands of things happening — the scheduling trick that keeps JavaScript non-blocking.',
    bn: 'একটি থ্রেড, হাজারো কাজ — যে সময়-সূত্রের কারণে জাভাস্ক্রিপ্ট কখনো থেমে যায় না; কল-স্ট্যাক আর সারির এই কূটনীতিই আসল শিল্প।',
  },
  minutes: 20,
  nextLesson: {
    slug: 'js-the-long-tail',
    tech: 'javascript',
    title: { en: 'JavaScript: The Long Tail', bn: 'জাভাস্ক্রিপ্ট: দ্য লং টেইল' }
  },
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — What is the event loop?', bn: 'WHAT — ইভেন্ট লুপ কী?' },
    },
    {
      type: 'para',
      text: {
        en: 'When you run JavaScript, your code executes on a single call stack — it can do one thing at a time. The event loop coordinates the call stack, browser APIs, and queues of waiting work so your application stays responsive without blocking.',
        bn: 'জাভাস্ক্রিপ্ট চালানোর সময় আপনার কোড একটিমাত্র কল স্ট্যাকে চলে — এটি একবারে একটি কাজই করতে পারে। ইভেন্ট লুপ কল স্ট্যাক, ব্রাউজার API এবং অপেক্ষমাণ কাজের কিউ সমন্বয় করে যাতে আপনার অ্যাপ্লিকেশন আটকে না গিয়ে সাবলীলভাবে কাজ করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Call stack',
          def: {
            en: 'Where function calls are tracked; LIFO.',
            bn: 'ফাংশন কল রেকর্ড হয় এখানে; LIFO কাঠামো।',
          },
        },
        {
          term: 'Macrotasks (tasks)',
          def: {
            en: 'Timers, I/O events, user clicks — queued as whole units.',
            bn: 'টাইমার, I/O ইভেন্ট, ইউজার ক্লিক — পুরো ইউনিট হিসেবে কিউতে থাকে।',
          },
        },
        {
          term: 'Microtasks',
          def: {
            en: 'Promise callbacks, queueMicrotask — drained completely after every task.',
            bn: 'Promise কলব্যাক, queueMicrotask — প্রতিটি টাস্কের পর পুরোপুরি শেষ করা হয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Why does this design exist?', bn: 'WHY — এই ডিজাইন কেন?' },
    },
    {
      type: 'para',
      text: {
        en: 'A page must respond to clicks while data downloads, timers tick, and animations run. Instead of many threads (with all the locking pain that brings), JavaScript chose one thread plus asynchronous waiting: slow operations are handed to the browser/OS, and their results come back as queued callbacks.',
        bn: 'ডেটা ডাউনলোড হচ্ছে, টাইমার চলছে, অ্যানিমেশন চলছে — এই ফাঁকেও পেজকে ক্লিকে সাড়া দিতে হয়। অনেক থ্রেডের (আর তার লকিং-জটিলতার) বদলে জাভাস্ক্রিপ্ট বেছে নিয়েছে এক থ্রেড + অ্যাসিঙ্ক্রোনাস অপেক্ষা: ধীর কাজগুলো ব্রাউজার/OS-কে দিয়ে দেওয়া হয়, ফলাফল ফিরে আসে কিউতে জমা হওয়া কলব্যাক হিসেবে।',
      },
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — The rules of the loop', bn: 'HOW — লুপের নিয়ম' },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: '1. Run synchronous code', bn: '১. সিঙ্ক্রোনাস কোড চালান' },
          text: {
            en: 'The main script is a task; it runs on the stack until it empties.',
            bn: 'মূল স্ক্রিপ্ট একটি টাস্ক; স্ট্যাক খালি না হওয়া পর্যন্ত চলে।',
          },
        },
        {
          title: { en: '2. Drain ALL microtasks', bn: '২. সব মাইক্রোটাস্ক শেষ করুন' },
          text: {
            en: 'Promise .then callbacks, queueMicrotask — every single one, including ones enqueued while draining.',
            bn: 'Promise-এর .then কলব্যাক, queueMicrotask — সবগুলো, এমনকি শেষ করতে গিয়ে নতুন যুক্ত হওয়াটাও।',
          },
        },
        {
          title: { en: '3. Render if needed', bn: '৩. দরকার হলে রেন্ডার' },
          text: {
            en: 'The browser may repaint here — this is why long microtask chains freeze the page.',
            bn: 'ব্রাউজার এখানে repaint করতে পারে — লম্বা মাইক্রোটাস্ক চেইন পেজ ফ্রিজ করে এই কারণে।',
          },
        },
        {
          title: { en: '4. Take ONE macrotask', bn: '৪. একটি ম্যাক্রোটাস্ক নিন' },
          text: {
            en: 'The oldest timer/I/O/click callback runs. Then back to step 2. Forever.',
            bn: 'সবচেয়ে পুরোনো টাইমার/I/O/ক্লিক কলব্যাক চলে। তারপর আবার ধাপ ২। চিরকাল।',
          },
        },
      ],
    },
    {
      type: 'visual',
      id: 'event-loop',
      scenario: 'timeout-promise',
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INTERNAL — Under the hood', bn: 'INTERNAL — পর্দার আড়ালে' },
    },
    {
      type: 'para',
      text: {
        en: 'setTimeout does not pause JavaScript. It registers a timer with the BROWSER (a Web API), which counts independently. When the timer fires, the callback is placed in the task queue — it can only run when the stack is empty AND every microtask has finished. A 0ms timeout really means “not before the current stack and all microtasks are done”.',
        bn: 'setTimeout জাভাস্ক্রিপ্টকে থামায় না। এটি ব্রাউজারের (Web API) কাছে টাইমার নিবন্ধন করে, যা আলাদাভাবে গুনতে থাকে। টাইমার শেষ হলে কলব্যাকটি টাস্ক কিউতে রাখা হয় — সেটি চলতে পারে কেবল স্ট্যাক খালি হলে এবং সব মাইক্রোটাস্ক শেষ হলে। 0ms টাইমআউটের আসল অর্থ: “বর্তমান স্ট্যাক ও সব মাইক্রোটাস্ক শেষ হওয়ার আগে নয়।”',
      },
    },
    {
      type: 'heading',
      id: 'code',
      text: { en: 'CODE — The classic interview snippet', bn: 'CODE — ক্লাসিক ইন্টারভিউ প্রশ্ন' },
    },
    {
      type: 'code',
      lang: 'js',
      code: `console.log("A: start");

setTimeout(() => {
  console.log("B: timeout");   // macrotask
}, 0);

Promise.resolve().then(() => {
  console.log("C: promise");   // microtask
});

console.log("D: end");`,
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — The order, explained', bn: 'RESULT — ক্রমটির ব্যাখ্যা' },
    },
    {
      type: 'para',
      text: {
        en: 'Output: A, D, C, B. Synchronous logs run first (A, D). Only then does the loop check queues: microtasks first — so the promise (C) beats the timer. The macrotask (B) runs on the next full cycle.',
        bn: 'আউটপুট: A, D, C, B। আগে সিঙ্ক্রোনাস লগ চলে (A, D)। তারপরই লুপ কিউ দেখে: মাইক্রোটাস্ক আগে — তাই promise (C) টাইমারকে হারায়। ম্যাক্রোটাস্ক (B) চলে পরের পুরো চক্রে।',
      },
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Mistakes you will meet', bn: 'DEBUG — যেসব ভুল আপনার সামনে আসবে' },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Mistake 1: “setTimeout(fn, 0) runs immediately”', bn: 'ভুল ১: “setTimeout(fn, 0) সাথে সাথে চলে”' },
      text: {
        en: 'It runs after the current synchronous code and all microtasks. It is a way to defer, not to parallelize.',
        bn: 'এটি চলে বর্তমান সিঙ্ক্রোনাস কোড ও সব মাইক্রোটাস্কের পর। এটি পেছানোর উপায়, প্যারালেল করার নয়।',
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Mistake 2: starving the loop', bn: 'ভুল ২: লুপকে ক্ষুধায় রাখা' },
      text: {
        en: 'A 200ms synchronous loop blocks EVERYTHING — clicks, timers, rendering. Split heavy work into chunks (setTimeout/MessageChannel) or move it to a Web Worker.',
        bn: '200ms-এর সিঙ্ক্রোনাস লুপ সব কিছু আটকে দেয় — ক্লিক, টাইমার, রেন্ডারিং। ভারী কাজ ভাগ করুন (setTimeout/MessageChannel) অথবা Web Worker-এ পাঠান।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'async/await is promise sugar', bn: 'async/await হলো promise-ই' },
      text: {
        en: 'await pauses the async function and queues its continuation as a MICROTASK. So awaiting something still finishes before the next timer.',
        bn: 'await অ্যাসিঙ্ক ফাংশন থামিয়ে বাকি অংশ মাইক্রোটাস্ক হিসেবে কিউতে রাখে। তাই কিছু await করলেও সেটি পরের টাইমারের আগে শেষ হয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Where this knowledge pays', bn: 'REAL WORLD — যেখানে এই জ্ঞান কাজে লাগে' },
    },
    {
      type: 'list',
      items: [
        {
          en: 'fetch()/axios resolve through microtasks — data handlers run before pending timers.',
          bn: 'fetch()/axios মাইক্রোটাস্কে resolve হয় — ডেটা হ্যান্ডলার অপেক্ষমাণ টাইমারের আগে চলে।',
        },
        {
          en: 'React state updates are scheduled, then flushed before paint — batching is queue-aware.',
          bn: 'React স্টেট আপডেট শিডিউল হয়ে পেইন্টের আগে ফ্লাশ হয় — ব্যাচিং কিউ-সচেতন।',
        },
        {
          en: 'Node.js has its own phases (timers → poll → check) plus process.nextTick.',
          bn: 'Node.js-এর নিজস্ব ফেজ আছে (timers → poll → check) সাথে process.nextTick।',
        },
        {
          en: 'Animations (requestAnimationFrame) run in the render step — between microtasks and the next task.',
          bn: 'অ্যানিমেশন (requestAnimationFrame) চলে রেন্ডার ধাপে — মাইক্রোটাস্ক আর পরের টাস্কের মাঝে।',
        },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Keep going', bn: 'NEXT — এগিয়ে যান' },
    },
    {
      type: 'list',
      items: [
        {
          en: 'Promises & async/await — mastering microtasks.',
          bn: 'Promise ও async/await — মাইক্রোটাস্কে দক্ষতা।',
        },
        {
          en: 'Web Workers — real parallelism in the browser.',
          bn: 'ওয়েব ওয়ার্কার — ব্রাউজারে আসল প্যারালেলিজম।',
        },
        {
          en: 'Browser rendering pipeline — what happens in the render step.',
          bn: 'ব্রাউজার রেন্ডারিং পাইপলাইন — রেন্ডার ধাপে কী ঘটে।',
        },
      ],
    },
  ],
  exercises: [
    {
      id: 'js-loop-ex1',
      kind: 'predict',
      topic: 'order',
      question: { en: 'What is the output order?', bn: 'আউটপুটের ক্রম কী?' },
      code: `console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");`,
      options: [
        { en: '1 4 3 2', bn: '1 4 3 2' },
        { en: '1 2 3 4', bn: '1 2 3 4' },
        { en: '1 4 2 3', bn: '1 4 2 3' },
        { en: '4 1 3 2', bn: '4 1 3 2' },
      ],
      answer: 0,
      hint: { en: 'Sync → microtasks → macrotasks.', bn: 'সিঙ্ক → মাইক্রোটাস্ক → ম্যাক্রোটাস্ক।' },
      explanation: {
        en: 'Sync code prints 1 and 4. The loop then drains microtasks (3) before taking the timer macrotask (2).',
        bn: 'সিঙ্ক কোড প্রিন্ট করে 1 ও 4। টাইমার ম্যাক্রোটাস্ক (2) নেওয়ার আগে লুপ মাইক্রোটাস্ক (3) শেষ করে।',
      },
    },
    {
      id: 'js-loop-ex2',
      kind: 'mcq',
      topic: 'concept',
      question: {
        en: 'Which queue is emptied completely before the browser can render?',
        bn: 'ব্রাউজার রেন্ডার করার আগে কোন কিউ পুরোপুরি খালি হয়?',
      },
      options: [
        { en: 'The macrotask queue', bn: 'ম্যাক্রোটাস্ক কিউ' },
        { en: 'The microtask queue', bn: 'মাইক্রোটাস্ক কিউ' },
        { en: 'The call queue', bn: 'কল কিউ' },
        { en: 'None — rendering preempts everything', bn: 'কোনোটিই নয় — রেন্ডারিং সবকিছু ছাপিয়ে যায়' },
      ],
      answer: 1,
      hint: { en: 'Promise callbacks belong to it.', bn: 'Promise কলব্যাক এখানেই থাকে।' },
      explanation: {
        en: 'After each task, ALL microtasks (including newly queued ones) run before rendering or the next macrotask.',
        bn: 'প্রতিটি টাস্কের পর, রেন্ডারিং বা পরের ম্যাক্রোটাস্কের আগে সব মাইক্রোটাস্ক (নতুন যুক্ত হওয়াসহ) চলে।',
      },
    },
    {
      id: 'js-loop-ex3',
      kind: 'predict',
      topic: 'order',
      question: { en: 'What is the exact execution output printed to the console?', bn: 'কনসোলে প্রিন্ট হওয়া সঠিক এক্সিকিউশন আউটপুট কোনটি?' },
      code: `setTimeout(() => console.log("t"));
Promise.resolve()
  .then(() => console.log("p1"))
  .then(() => console.log("p2"));
console.log("s");`,
      options: [
        { en: 's p1 p2 t', bn: 's p1 p2 t' },
        { en: 's p1 t p2', bn: 's p1 t p2' },
        { en: 't s p1 p2', bn: 't s p1 p2' },
        { en: 's t p1 p2', bn: 's t p1 p2' },
      ],
      answer: 0,
      hint: { en: 'Chained .then callbacks are all microtasks.', bn: 'চেইন করা .then কলব্যাক সবই মাইক্রোটাস্ক।' },
      explanation: {
        en: 's is synchronous. p1 queues p2 as another microtask, and the microtask queue drains fully — p1, p2 — before the timer t.',
        bn: 's সিঙ্ক্রোনাস। p1 আরেকটি মাইক্রোটাস্ক হিসেবে p2 কিউ করে, আর কিউ পুরোপুরি খালি হয় — p1, p2 — টাইমার t-এর আগেই।',
      },
    },
    {
      id: 'js-loop-ex4',
      kind: 'fill',
      topic: 'defer',
      question: {
        en: 'Fill in so the heavy work does not block the click handler:', bn: 'পূরণ করুন যাতে ভারী কাজ ক্লিক হ্যান্ডলার ব্লক না করে:',
      },
      code: `button.addEventListener("click", () => {
  console.log("clicked!");
});
// Defer the heavy work to a later TASK:
______(() => heavyWork(), 0);`,
      answer: 'setTimeout',
      accept: ['setTimeout'],
      hint: { en: 'You need a macrotask, not a microtask.', bn: 'মাইক্রোটাস্ক নয়, ম্যাক্রোটাস্ক দরকার।' },
      explanation: {
        en: 'setTimeout schedules heavyWork as a separate task, so the click finishes rendering first. queueMicrotask would still block rendering.',
        bn: 'setTimeout heavyWork-কে আলাদা টাস্কে শিডিউল করে, ফলে আগে ক্লিকের রেন্ডারিং হয়। queueMicrotask দিলে রেন্ডারিং তখনো আটকে থাকত।',
      },
      solution: 'setTimeout',
    },
  ],
  quiz: {
    id: 'js-loop-quiz',
    title: { en: 'Event Loop Quiz', bn: 'ইভেন্ট লুপ কুইজ' },
    questions: [
      {
        id: 'js-loop-q1',
        kind: 'predict',
        topic: 'order',
        question: { en: 'What is the sequential console output produced by invoking go()?', bn: 'go() কল করার পর ক্রমানুসারে কনসোলে কোন আউটপুটটি দেখা যাবে?' },
        code: `async function go() {
  console.log("x");
  await null;
  console.log("y");
}
go();
console.log("z");`,
        options: [
          { en: 'x z y', bn: 'x z y' },
          { en: 'x y z', bn: 'x y z' },
          { en: 'z x y', bn: 'z x y' },
          { en: 'y x z', bn: 'y x z' },
        ],
        answer: 0,
        hint: { en: 'await queues the rest as a microtask.', bn: 'await বাকিঅংশ মাইক্রোটাস্কে কিউ করে।' },
        explanation: {
          en: 'x runs synchronously inside go(). await suspends; z runs (still synchronous outer code); then the microtask continuation prints y.',
          bn: 'go()-র ভেতরে x সিঙ্ক্রোনাসভাবে চলে। await থামায়; z চলে (বাইরের সিঙ্ক্রোনাস কোড); তারপর মাইক্রোটাস্ক কন্টিনিউয়েশন y প্রিন্ট করে।',
        },
      },
      {
        id: 'js-loop-q2',
        kind: 'mcq',
        topic: 'concept',
        question: {
          en: 'setTimeout(fn, 0) guarantees the callback runs…',
          bn: 'setTimeout(fn, 0) গ্যারান্টি দেয় কলব্যাকটি চলবে…',
        },
        options: [
          { en: 'immediately', bn: 'সাথে সাথে' },
          { en: 'after exactly 0 milliseconds', bn: 'ঠিক 0 মিলিসেকেন্ড পর' },
          {
            en: 'after the stack empties and microtasks drain',
            bn: 'স্ট্যাক খালি হওয়া ও মাইক্রোটাস্ক শেষ হওয়ার পর',
          },
          { en: 'in parallel on another thread', bn: 'অন্য থ্রেডে প্যারালেলভাবে' },
        ],
        answer: 2,
        hint: { en: 'Timers are macrotasks.', bn: 'টাইমার হলো ম্যাক্রোটাস্ক।' },
        explanation: {
          en: 'A timer callback is a macrotask: it waits for an empty stack AND a drained microtask queue — and rendering may happen first too.',
          bn: 'টাইমার কলব্যাক ম্যাক্রোটাস্ক: স্ট্যাক খালি ও মাইক্রোটাস্ক কিউ শেষ হওয়া পর্যন্ত অপেক্ষা করে — আগে রেন্ডারিংও হতে পারে।',
        },
      },
      {
        id: 'js-loop-q3',
        kind: 'predict',
        topic: 'order',
        question: { en: 'What is the exact output sequence printed by these scheduled callbacks?', bn: 'শিডিউল করা এই কলব্যাকগুলো থেকে কনসোলে প্রিন্ট হওয়া সঠিক সিকোয়েন্স কোনটি?' },
        code: `setTimeout(() => console.log("a"));
setTimeout(() => console.log("b"));
Promise.resolve().then(() => console.log("c"));`,
        options: [
          { en: 'c a b', bn: 'c a b' },
          { en: 'a b c', bn: 'a b c' },
          { en: 'c b a', bn: 'c b a' },
          { en: 'a c b', bn: 'a c b' },
        ],
        answer: 0,
        hint: { en: 'One microtask beats two macrotasks.', bn: 'একটি মাইক্রোটাস্ক দুটি ম্যাক্রোটাস্ককে হারায়।' },
        explanation: {
          en: 'The microtask c runs after the (empty) synchronous script but before either timer; macrotasks then run in order: a, b.',
          bn: 'মাইক্রোটাস্ক c চলে (খালি) সিঙ্ক্রোনাস স্ক্রিপ্টের পর, কিন্তু যেকোনো টাইমারের আগে; তারপর ম্যাক্রোটাস্ক ক্রমে চলে: a, b।',
        },
      },
      {
        id: 'js-loop-q4',
        kind: 'mcq',
        topic: 'blocking',
        question: {
          en: 'A while(true) loop on the main thread freezes the page because…',
          bn: 'মূল থ্রেডের while(true) লুপ পেজ ফ্রিজ করে কারণ…',
        },
        options: [
          { en: 'The browser kills JavaScript after 5 seconds', bn: 'ব্রাউজার 5 সেকেন্ড পর জাভাস্ক্রিপ্ট বন্ধ করে' },
          {
            en: 'The stack never empties, so no task, microtask or render can proceed',
            bn: 'স্ট্যাক কখনো খালি হয় না, তাই কোনো টাস্ক, মাইক্রোটাস্ক বা রেন্ডার এগোতে পারে না',
          },
          { en: 'The event loop runs out of memory', bn: 'ইভেন্ট লুপের মেমোরি শেষ হয়ে যায়' },
          { en: 'Timers are disabled by infinite loops', bn: 'ইনফিনিট লুপ টাইমার নিষ্ক্রিয় করে' },
        ],
        answer: 1,
        hint: { en: 'The loop only advances when the stack is empty.', bn: 'স্ট্যাক খালি হলেই কেবল লুপ এগোয়।' },
        explanation: {
          en: 'Everything — timers, promises, clicks, paint — requires the stack to empty. Infinite synchronous work never lets that happen.',
          bn: 'সবকিছু — টাইমার, প্রমিজ, ক্লিক, পেইন্ট — স্ট্যাক খালি হওয়ার উপর নির্ভর করে। অসীম সিঙ্ক্রোনাস কাজ তা কখনো হতে দেয় না।',
        },
      },
    ],
  },
};
