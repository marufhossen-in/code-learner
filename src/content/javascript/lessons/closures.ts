import type { Lesson } from '../../../lib/types';

export const closuresLesson: Lesson = {
  slug: 'closures',
  tech: 'javascript',
  title: { en: 'Closures', bn: 'ক্লোজার (Closures)' },
  summary: {
    en: 'How a function remembers the variables of the place where it was born — and why every serious JavaScript pattern depends on it.',
    bn: 'একটি ফাংশন কীভাবে তার জন্মস্থানের ভেরিয়েবল মনে রাখে — এবং কেন প্রতিটি গুরুত্বপূর্ণ জাভাস্ক্রিপ্ট প্যাটার্ন এর উপর নির্ভর করে।',
  },
  minutes: 18,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — What is a closure?', bn: 'WHAT — ক্লোজার কী?' },
    },
    {
      type: 'para',
      text: {
        en: 'A closure is a function bundled together with the variables of the environment where it was created. Even after that outer environment has finished executing, the function can still read and change those variables.',
        bn: 'Closure হলো এমন একটি ফাংশন যা তার জন্মস্থানের (lexical environment) ভেরিয়েবলগুলোকে সাথে নিয়ে বেঁধে থাকে। বাইরের ফাংশন চলা শেষ হয়ে গেলেও, ভেতরের ফাংশন সেই ভেরিয়েবল পড়তে ও বদলাতে পারে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Lexical scope',
          def: {
            en: 'Where a variable is visible, decided by where it is written in the source code.',
            bn: 'ভেরিয়েবল কোথায় দেখা যাবে, তা ঠিক হয় সোর্স কোডে সেটি কোথায় লেখা হয়েছে তার ভিত্তিতে।',
          },
        },
        {
          term: 'Scope chain',
          def: {
            en: 'The lookup path the engine walks outward to find a variable.',
            bn: 'একটি ভেরিয়েবল খুঁজতে ইঞ্জিন বাইরের দিকে যে পথ ধরে এগোয়।',
          },
        },
        {
          term: 'Environment record',
          def: {
            en: 'The internal object that stores the variables of a scope.',
            bn: 'স্কোপের ভেরিয়েবলগুলো রাখা ইঞ্জিনের অভ্যন্তরীণ অবজেক্ট।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Why do closures exist?', bn: 'WHY — ক্লোজার কেন দরকার?' },
    },
    {
      type: 'para',
      text: {
        en: 'Without closures, every function would forget everything the moment it returned. Closures let functions carry private state, which powers several everyday patterns:',
        bn: 'ক্লোজার না থাকলে, ফাংশন রিটার্ন করার মুহূর্তেই সব ভুলে যেত। ক্লোজার ফাংশনকে প্রাইভেট স্টেট বহন করতে দেয়, যা দিয়ে বানানো হয় দৈনন্দিন বহু প্যাটার্ন:',
      },
    },
    {
      type: 'list',
      items: [
        {
          en: 'Data privacy — variables that cannot be touched from outside.',
          bn: 'ডেটা প্রাইভেসি — এমন ভেরিয়েবল যা বাইরে থেকে ছোঁয়া যায় না।',
        },
        {
          en: 'Function factories — makeCounter(), add(5), formatters, validators.',
          bn: 'ফাংশন ফ্যাক্টরি — makeCounter(), add(5), ফরম্যাটার, ভ্যালিডেটর।',
        },
        {
          en: 'Callbacks that remember context — event handlers, timers.',
          bn: 'কনটেক্সট মনে রাখা কলব্যাক — ইভেন্ট হ্যান্ডলার, টাইমার।',
        },
        {
          en: 'Memoization and caching — remembering previous results.',
          bn: 'মেমোইজেশন ও ক্যাশিং — আগের ফলাফল মনে রাখা।',
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — How it works', bn: 'HOW — কীভাবে কাজ করে' },
    },
    {
      type: 'para',
      text: {
        en: 'When a function is created, JavaScript saves a hidden reference to its surrounding environment. When the function later runs — from anywhere — name lookups walk outward along that saved chain.',
        bn: 'ফাংশন তৈরির সময় জাভাস্ক্রিপ্ট তার চারপাশের environment-এর একটি লুকানো রেফারেন্স সংরক্ষণ করে। পরে ফাংশনটি যেখান থেকেই চলুক, নাম খোঁজার সময় সেই চেইন ধরে বাইরে এগোয়।',
      },
    },
    {
      type: 'code',
      lang: 'js',
      code: `function outer() {
  const message = "I live inside outer()";

  function inner() {
    // inner has no 'message' of its own.
    // It looks OUTWARD along the scope chain.
    console.log(message);
  }

  return inner; // inner escapes, still holding message
}

const fn = outer(); // outer() has finished!
fn();               // yet this still prints the message`,
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INTERNAL — What happens inside the engine', bn: 'INTERNAL — ইঞ্জিনের ভেতরে কী ঘটে' },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Creation', bn: 'তৈরির মুহূর্ত' },
          text: {
            en: 'When inner is created, the engine attaches a link to outer’s environment record to inner’s internal [[Environment]] slot.',
            bn: 'inner তৈরি হওয়ার সময় ইঞ্জিন outer-এর environment record-এর লিংক inner-এর অভ্যন্তরীণ [[Environment]] স্লটে যুক্ত করে দেয়।',
          },
        },
        {
          title: { en: 'outer() returns', bn: 'outer() রিটার্ন করে' },
          text: {
            en: 'The stack frame of outer() is destroyed — but its environment record is NOT garbage collected, because inner still references it.',
            bn: 'outer()-এর স্ট্যাক ফ্রেম ধ্বংস হয় — কিন্তু এর environment record গার্বেজ-কালেক্ট হয় না, কারণ inner এখনো সেটিকে রেফার করে।',
          },
        },
        {
          title: { en: 'The heap keeps it alive', bn: 'হিপ টিকিয়ে রাখে' },
          text: {
            en: 'The record (with message) lives on the heap as long as any function referencing it is reachable.',
            bn: 'message-সহ রেকর্ডটি যতদিন কোনো ফাংশন থেকে পৌঁছানো যায়, ততদিন হিপে বেঁচে থাকে।',
          },
        },
        {
          title: { en: 'Lookup at call time', bn: 'কল করার সময় লুকআপ' },
          text: {
            en: 'When fn() runs and needs message, the engine: checks fn’s own scope (not found) → walks the scope chain → finds it in outer’s preserved record.',
            bn: 'fn() চলার সময় message দরকার হলে ইঞ্জিন: fn-এর নিজের স্কোপে খোঁজে (পায় না) → স্কোপ চেইন ধরে বাইরে যায় → outer-এর সংরক্ষিত রেকর্ডে পায়।',
          },
        },
      ],
    },
    {
      type: 'visual',
      id: 'execution',
      scenario: 'closure',
    },
    {
      type: 'heading',
      id: 'code',
      text: { en: 'CODE — A real counter factory', bn: 'CODE — বাস্তব কাউন্টার ফ্যাক্টরি' },
    },
    {
      type: 'code',
      lang: 'js',
      code: `function makeCounter() {
  let count = 0;              // private — invisible outside

  return function () {
    count += 1;               // closure: remembers count
    return count;
  };
}

const counter = makeCounter();
console.log(counter());       // ?
console.log(counter());       // ?
console.log(counter());       // ?

// count is unreachable from here:
console.log(typeof count);    // "undefined"`,
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — What runs, and why', bn: 'RESULT — কী রান হলো, আর কেন' },
    },
    {
      type: 'para',
      text: {
        en: 'Output: 1, 2, 3, then "undefined". Each call re-enters the same preserved environment and increments the SAME count. A second makeCounter() would create a separate environment with its own count. From global scope, count does not exist — true privacy without any keyword.',
        bn: 'আউটপুট: 1, 2, 3, তারপর "undefined"। প্রতিটি কল একই সংরক্ষিত environment-এ ঢুকে একই count বাড়ায়। দ্বিতীয় makeCounter() আলাদা environment বানাবে — নিজস্ব count সহ। গ্লোবাল স্কোপ থেকে count-এর অস্তিত্বই নেই — কোনো কীওয়ার্ড ছাড়াই আসল প্রাইভেসি।',
      },
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Classic closure bugs', bn: 'DEBUG — ক্লাসিক ক্লোজার বাগ' },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Bug 1: the loop captures ONE variable', bn: 'বাগ ১: লুপ ধরে রাখে একটি-ই ভেরিয়েবল' },
      text: {
        en: 'With var, there is a single i shared by all iterations. Every closure captures the same box, which ends at 3.',
        bn: 'var দিলে একটি-ই i সব ইটারেশন শেয়ার করে। সব ক্লোজার একই বাক্স ধরে, যার শেষ মান 3।',
      },
    },
    {
      type: 'code',
      lang: 'js',
      code: `// BUGGY — what does this print?
const fns = [];
for (var i = 0; i < 3; i++) {
  fns.push(function () { return i; });
}
console.log(fns[0](), fns[1](), fns[2]());
// → 3 3 3   (not 0 1 2!)

// FIX 1 — let creates a NEW i per iteration:
const ok1 = [];
for (let i = 0; i < 3; i++) {
  ok1.push(function () { return i; });
}
console.log(ok1[0](), ok1[1](), ok1[2]());
// → 0 1 2

// FIX 2 — capture the value in a parameter:
const ok2 = [];
for (var j = 0; j < 3; j++) {
  ok2.push((function (saved) {
    return function () { return saved; };
  })(j));
}
console.log(ok2[0](), ok2[1](), ok2[2]());
// → 0 1 2`,
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Bug 2: accidental memory retention', bn: 'বাগ ২: অনিচ্ছাকৃত মেমোরি আটকে রাখা' },
      text: {
        en: 'A closure keeps the ENTIRE reachable environment alive. If a tiny callback closes over a giant object (a big array, a DOM subtree), that memory cannot be freed. Null-out references you no longer need.',
        bn: 'ক্লোজার পুরো পৌঁছানো-যাওয়া environment-কে টিকিয়ে রাখে। ছোট্ট একটি কলব্যাক যদি বিশাল অবজেক্ট (বড় অ্যারে, DOM সাবট্রি) ধরে রাখে, সেই মেমোরি ফাঁকা হবে না। যা দরকার নেই, তা null করে দিন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Where you already use closures', bn: 'REAL WORLD — যেখানে আপনি ইতিমধ্যে ক্লোজার ব্যবহার করছেন' },
    },
    {
      type: 'code',
      lang: 'js',
      code: `// 1. Debounce — used in every search box
function debounce(fn, ms) {
  let timer = null;                  // remembered between events
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

// 2. Event handlers remembering context
function trackButton(button, name) {
  let clicks = 0;
  button.addEventListener("click", () => {
    clicks += 1;                     // closure over clicks + name
    console.log(name + " clicked", clicks, "times");
  });
}

// 3. The module pattern — privacy before classes existed
const bank = (function () {
  let balance = 0;                   // truly private
  return {
    deposit: (n) => (balance += n),
    getBalance: () => balance,
  };
})();

// 4. React: useState is powered by closures.
//    Every render's event handler closes over THAT render's state.`,
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Interview line', bn: 'ইন্টারভিউর উত্তর' },
      text: {
        en: '“A closure is a function plus its lexical environment. It exists because JavaScript uses lexical scoping, and it survives because the environment lives on the heap while referenced.”',
        bn: '“ক্লোজার হলো ফাংশন সাথে তার lexical environment। জাভাস্ক্রিপ্ট lexical scoping ব্যবহার করে বলে এটি আছে, আর রেফারেন্স থাকা পর্যন্ত environment হিপে টিকে থাকে বলে এটি বেঁচে থাকে।”',
      },
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — What to learn after this', bn: 'NEXT — এরপর কী শিখবেন' },
    },
    {
      type: 'list',
      items: [
        {
          en: 'Scope & hoisting — why let/const behave differently from var.',
          bn: 'স্কোপ ও হোইস্টিং — let/const var থেকে আলাদা আচরণ করে কেন।',
        },
        {
          en: 'The event loop — when do callbacks actually run?',
          bn: 'ইভেন্ট লুপ — কলব্যাক আসলে কখন চলে?',
        },
        {
          en: 'Memory & garbage collection — what stays, what goes.',
          bn: 'মেমোরি ও গার্বেজ কালেকশন — কী থাকে, কী যায়।',
        },
      ],
    },
  ],
  nextLesson: {
    slug: 'event-loop',
    tech: 'javascript',
    title: { en: 'The Event Loop', bn: 'ইভেন্ট লুপ' }
  },
  exercises: [
    {
      id: 'js-closure-ex1',
      kind: 'mcq',
      topic: 'concept',
      question: {
        en: 'Which statement defines a closure most precisely?',
        bn: 'কোন বাক্যটি ক্লোজারের সবচেয়ে নিখুঁত সংজ্ঞা?',
      },
      options: [
        { en: 'A function inside another function', bn: 'আরেকটি ফাংশনের ভেতরের ফাংশন' },
        {
          en: 'A function bundled with the environment where it was created',
          bn: 'যে environment-এ তৈরি হয়েছে, সেটির সাথে বাঁধা ফাংশন',
        },
        { en: 'A function that returns another function', bn: 'যে ফাংশন আরেকটি ফাংশন রিটার্ন করে' },
        { en: 'A variable stored on the heap', bn: 'হিপে সংরক্ষিত ভেরিয়েবল' },
      ],
      answer: 1,
      hint: {
        en: 'It is not about nesting or returning — it is about the remembered environment.',
        bn: 'ব্যাপারটি নেস্টিং বা রিটার্ন করার নয় — মনে-রাখা environment-এর।',
      },
      explanation: {
        en: 'Nested or returned functions are just common ways to CREATE closures. The closure itself is the function + its preserved lexical environment.',
        bn: 'নেস্টেড বা রিটার্ন করা ফাংশন ক্লোজার তৈরির প্রচলিত উপায় মাত্র। ক্লোজার হলো ফাংশন + তার সংরক্ষিত lexical environment।',
      },
    },
    {
      id: 'js-closure-ex2',
      kind: 'predict',
      topic: 'counter',
      question: { en: 'What is printed by the last line?', bn: 'শেষ লাইনে কী প্রিন্ট হবে?' },
      code: `function makeCounter() {
  let n = 10;
  return function () { n += 5; return n; };
}
const a = makeCounter();
const b = makeCounter();
a(); a();
console.log(a(), b());`,
      options: [
        { en: '25 15', bn: '25 15' },
        { en: '20 15', bn: '20 15' },
        { en: '25 25', bn: '25 25' },
        { en: '20 20', bn: '20 20' },
      ],
      answer: 0,
      hint: {
        en: 'Each makeCounter() call creates a SEPARATE environment with its own n.',
        bn: 'প্রতিটি makeCounter() কল আলাদা environment বানায় — নিজস্ব n সহ।',
      },
      explanation: {
        en: 'a() runs three times: 10→15→20→25. b has its own n starting at 10, so b() gives 15. Two closures, two private variables.',
        bn: 'a() তিনবার চলে: 10→15→20→25। b-র নিজস্ব n 10 থেকে শুরু, তাই b() দেয় 15। দুটি ক্লোজার, দুটি প্রাইভেট ভেরিয়েবল।',
      },
    },
    {
      id: 'js-closure-ex3',
      kind: 'predict',
      topic: 'loop-capture',
      question: { en: 'What does this print?', bn: 'এটি কী প্রিন্ট করবে?' },
      code: `const fns = [];
for (var i = 0; i < 3; i++) {
  fns.push(() => i);
}
console.log(fns[0](), fns[1](), fns[2]());`,
      options: [
        { en: '0 1 2', bn: '0 1 2' },
        { en: '3 3 3', bn: '3 3 3' },
        { en: '0 0 0', bn: '0 0 0' },
        { en: 'undefined undefined undefined', bn: 'মানহীন (undefined undefined undefined)' },
      ],
      answer: 1,
      hint: { en: 'var declares ONE i for the whole loop.', bn: 'var পুরো লুপের জন্য একটি-ই i ডিক্লেয়ার করে।' },
      explanation: {
        en: 'All three closures capture the same var i. After the loop, i is 3. Using let would give 0 1 2 because let creates a fresh binding per iteration.',
        bn: 'তিনটি ক্লোজারই একই var i ধরে। লুপ শেষে i = 3। let দিলে 0 1 2 হতো, কারণ let প্রতি ইটারেশনে নতুন বাইন্ডিং বানায়।',
      },
    },
    {
      id: 'js-closure-ex4',
      kind: 'fill',
      topic: 'factory',
      question: {
        en: 'Complete the factory so add5(3) returns 8:',
        bn: 'ফ্যাক্টরিটি সম্পূর্ণ করুন যাতে add5(3) রিটার্ন করে 8:',
      },
      code: `function add(x) {
  return function (y) {
    ______
  };
}
const add5 = add(5);
console.log(add5(3)); // 8`,
      answer: 'return x + y;',
      accept: ['return x + y;', 'return x + y', 'return (x + y);'],
      hint: { en: 'The inner function still remembers x.', bn: 'ভেতরের ফাংশন x এখনো মনে রাখে।' },
      explanation: {
        en: 'The returned function closes over x (=5 when add was called), so add5(3) computes 5 + 3.',
        bn: 'রিটার্ন করা ফাংশন x-কে ক্লোজ করে (add কলের সময় =5), তাই add5(3) হিসাব করে 5 + 3।',
      },
      solution: 'return x + y;',
    },
    {
      id: 'js-closure-ex5',
      kind: 'mcq',
      topic: 'memory',
      question: {
        en: 'outer() has returned. Why is its variable still NOT garbage collected?',
        bn: 'outer() রিটার্ড করেছে। তবু এর ভেরিয়েবল গার্বেজ-কালেক্ট হচ্ছে না কেন?',
      },
      options: [
        {
          en: 'Because var variables are never collected',
          bn: 'কারণ var ভেরিয়েবল কখনো কালেক্ট হয় না',
        },
        {
          en: 'Because a surviving function still references its environment',
          bn: 'কারণ বেঁচে-থাকা একটি ফাংশন এখনো তার environment রেফার করে',
        },
        {
          en: 'Because the stack frame was never destroyed',
          bn: 'কারণ স্ট্যাক ফ্রেম ধ্বংস হয়নি',
        },
        { en: 'Because of the event loop', bn: 'কারণ ইভেন্ট লুপ' },
      ],
      answer: 1,
      hint: { en: 'Collection depends on reachability, not on call state.', bn: 'কলের অবস্থা নয় — পৌঁছানো যায় কি না, তার উপর কালেকশন নির্ভর করে।' },
      explanation: {
        en: 'Garbage collection frees memory only when nothing can reach it. The returned closure keeps the environment record reachable, so it stays on the heap.',
        bn: 'কিছু পৌঁছাতে না পারলেই কেবল গার্বেজ কালেকশন মেমোরি ফাঁকা করে। রিটার্ন হওয়া ক্লোজার environment record-কে পৌঁছানোযোগ্য রাখে, তাই সেটি হিপে থাকে।',
      },
    },
  ],
  quiz: {
    id: 'js-closure-quiz',
    title: { en: 'Closures Quiz', bn: 'ক্লোজার কুইজ' },
    questions: [
      {
        id: 'js-closure-q1',
        kind: 'predict',
        topic: 'counter',
        question: { en: 'What is printed to the console when get() and typeof s are evaluated?', bn: 'get() এবং typeof s রান করার পর কনসোলে কী প্রিন্ট হবে?' },
        code: `function secret() {
  const s = "hidden";
  return () => s;
}
const get = secret();
console.log(get(), typeof s);`,
        options: [
          { en: '"hidden" "undefined"', bn: '"hidden" "undefined"' },
          { en: '"hidden" "string"', bn: '"hidden" "string"' },
          { en: 'undefined "undefined"', bn: 'undefined "undefined"' },
          { en: 'ReferenceError', bn: 'ReferenceError' },
        ],
        answer: 0,
        hint: { en: 'get keeps s alive privately.', bn: 'get, s-কে প্রাইভেটভাবে টিকিয়ে রাখে।' },
        explanation: {
          en: 'get() reads the preserved s. Globally, s was never declared, so typeof s is "undefined" — not an error.',
          bn: 'get() সংরক্ষিত s পড়ে। গ্লোবালি s কখনো ডিক্লেয়ার হয়নি, তাই typeof s হলো "undefined" — এরর নয়।',
        },
      },
      {
        id: 'js-closure-q2',
        kind: 'mcq',
        topic: 'concept',
        question: {
          en: 'In JavaScript, closures exist primarily because of…',
          bn: 'জাভাস্ক্রিপ্টে ক্লোজার আছে মূলত কারণ…',
        },
        options: [
          { en: 'dynamic typing', bn: 'ডাইনামিক টাইপিং' },
          { en: 'lexical scoping', bn: 'লেক্সিক্যাল স্কোপিং' },
          { en: 'the event loop', bn: 'ইভেন্ট লুপ' },
          { en: 'prototypal inheritance', bn: 'প্রোটোটাইপাল ইনহেরিট্যান্স' },
        ],
        answer: 1,
        hint: { en: 'It is about where code is written.', bn: 'কোড কোথায় লেখা হয়েছে — সেটার ব্যাপার।' },
        explanation: {
          en: 'Lexical (static) scoping means a function’s variable visibility is fixed at its definition site — a closure is the mechanism preserving that site’s environment.',
          bn: 'লেক্সিক্যাল (স্ট্যাটিক) স্কোপিং-এ ফাংশনের ভেরিয়েবল দৃশ্যতা ঠিক হয় সংজ্ঞার জায়গায় — ক্লোজার সেই জায়গার environment সংরক্ষণের প্রক্রিয়া।',
        },
      },
      {
        id: 'js-closure-q3',
        kind: 'predict',
        topic: 'loop-capture',
        question: { en: 'With let instead of var, the loop…', bn: 'var-এর বদলে let দিলে লুপটি…' },
        code: `for (let i = 0; i < 2; i++) {
  setTimeout(() => console.log(i), 0);
}`,
        options: [
          { en: 'prints 0 then 1', bn: '0 তারপর 1 প্রিন্ট করে' },
          { en: 'prints 2 twice', bn: 'দুইবার 2 প্রিন্ট করে' },
          { en: 'prints 0 then 0', bn: '0 তারপর 0 প্রিন্ট করে' },
          { en: 'throws an error', bn: 'এরর দেয়' },
        ],
        answer: 0,
        hint: { en: 'let creates a binding per iteration.', bn: 'let প্রতি ইটারেশনে নতুন বাইন্ডিং বানায়।' },
        explanation: {
          en: 'Each iteration gets its own i, so each timeout callback closes over a different value: 0 and 1.',
          bn: 'প্রতি ইটারেশন নিজস্ব i পায়, তাই প্রতিটি টাইমআউট কলব্যাক আলাদা মান ধরে: 0 ও 1।',
        },
      },
      {
        id: 'js-closure-q4',
        kind: 'mcq',
        topic: 'memory',
        question: {
          en: 'A small click handler closes over a 500 MB array. After the button is removed from the DOM…',
          bn: 'ছোট একটি ক্লিক হ্যান্ডলার 500 MB অ্যারে ক্লোজ করে রেখেছে। বাটন DOM থেকে সরানোর পর…',
        },
        options: [
          { en: 'The array is freed immediately', bn: 'অ্যারেটি সাথে সাথে ফাঁকা হয়' },
          {
            en: 'If the handler/listener was removed too, the array becomes collectable',
            bn: 'হ্যান্ডলার/লিসেনারও সরানো হলে অ্যারেটি কালেক্টযোগ্য হয়',
          },
          { en: 'The array lives forever no matter what', bn: 'যাই হোক অ্যারেটি চিরকাল থাকে' },
          { en: 'Only the handler is freed', bn: 'শুধু হ্যান্ডলার ফাঁকা হয়' },
        ],
        answer: 1,
        hint: { en: 'Think reachability through the listener.', bn: 'লিসেনারের মাধ্যমে পৌঁছানো-যাওয়ার কথা ভাবুন।' },
        explanation: {
          en: 'Removing the DOM node is not enough if an event listener (which references the closure, which references the array) is still registered. Remove listeners to break the chain.',
          bn: 'ইভেন্ট লিসেনার (যা ক্লোজারের, আর ক্লোজার যা অ্যারের রেফারেন্স রাখে) নিবন্ধিত থাকলে DOM নোড সরালেই যথেষ্ট নয়। চেইন ভাঙতে লিসেনার সরাতে হবে।',
        },
      },
      {
        id: 'js-closure-q5',
        kind: 'predict',
        topic: 'factory',
        question: { en: 'Output of the last line?', bn: 'শেষ লাইনের আউটপুট?' },
        code: `function multiplier(f) {
  return (n) => n * f;
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(triple(2)));`,
        options: [
          { en: '12', bn: '12' },
          { en: '8', bn: '8' },
          { en: '6', bn: '6' },
          { en: 'NaN', bn: 'NaN' },
        ],
        answer: 0,
        hint: { en: 'triple(2) first, then double of that.', bn: 'আগে triple(2), তারপর সেটার double।' },
        explanation: {
          en: 'triple(2) = 2×3 = 6. double(6) = 6×2 = 12. Two independent closures over two different f values.',
          bn: 'triple(2) = 2×3 = 6। double(6) = 6×2 = 12। দুটি ভিন্ন f-এর উপর দুটি স্বাধীন ক্লোজার।',
        },
      },
    ],
  },
  next: { slug: 'event-loop', title: { en: 'The Event Loop', bn: 'ইভেন্ট লুপ' } },
};
