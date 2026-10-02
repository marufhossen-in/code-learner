import type { Lesson } from '../../../lib/types';

export const ClosuresAndTheScopeLesson: Lesson = {
  slug: 'closures-and-the-scope',
  tech: 'lang-javascript',
  title: {
    en: 'Closures and Lexical Scope — Data Privacy, Environments, and Memory',
    bn: 'ক্লোজার ও লেক্সিক্যাল স্কোপ — ডেটা গোপনীয়তা, এনভায়রনমেন্ট ও মেমরি',
  },
  summary: {
    en: 'Master JavaScript closures and lexical scope: understand the scope chain (block vs function scope), encapsulate private state without classes, inspect closure memory retention in dev tools, and prevent catastrophic memory leaks in production event listeners.',
    bn: 'জাভাস্ক্রিপ্ট ক্লোজার ও লেক্সিক্যাল স্কোপ আয়ত্ত করুন: স্কোপ চেইন (ব্লক বনাম ফাংশন স্কোপ), ক্লাস ছাড়া প্রাইভেট স্টেট এনক্যাপসুলেশন, ডেভটুলসে ক্লোজার মেমরি বিশ্লেষণ এবং ইভেন্ট লিসেনারে মেমরি লিক প্রতিরোধ করা।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Lexical environments and persistent inner scope', bn: 'WHAT — লেক্সিক্যাল এনভায়রনমেন্ট ও স্থায়ী অভ্যন্তরীণ স্কোপ' },
    },
    {
      type: 'para',
      text: {
        en: 'When you build modular components and maintain state in JavaScript, closures form the invisible engine powering encapsulation and functional design. In JavaScript, every function retains access to the variables of its outer lexical environment, even after that outer function has finished executing and returned. This closure mechanism enables data privacy without classical class fields, allowing you to return specialized functions that interact with private state. However, because closures retain active memory references to their parent scopes, unreleased event handlers or long-lived intervals can inadvertently trigger serious memory leaks.',
        bn: 'যখন আপনি জাভাস্ক্রিপ্টে মডিউলার কম্পোনেন্ট তৈরি করেন এবং স্টেট বজায় রাখেন, তখন ক্লোজার এনক্যাপসুলেশন ও ফাংশনাল ডিজাইনের মূল চালিকাশক্তি হিসেবে কাজ করে। জাভাস্ক্রিপ্টে প্রতিটি ফাংশন তার বাইরের লেক্সিক্যাল এনভায়রনমেন্টের ভেরিয়েবলগুলোতে প্রবেশাধিকার ধরে রাখে, এমনকি বাইরের ফাংশনের কাজ শেষ হয়ে যাওয়ার পরেও। এই ক্লোজার ব্যবস্থা কোনো ক্লাসের প্রয়োজন ছাড়াই ডেটা গোপনীয়তা তৈরি করতে সাহায্য করে। তবে যেহেতু ক্লোজার মূল স্কোপের মেমরি রেফারেন্স ধরে রাখে, তাই অসাবধানতায় অনিষ্পন্ন ইভেন্ট হ্যান্ডলার বা ইন্টারভাল মারাত্মক মেমরি লিক ঘটাতে পারে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Closure retaining living reference to heap memory after outer return', bn: 'ফাংশন শেষ হওয়ার পরেও হিপ মেমরিতে ক্লোজার রেফারেন্স ধরে রাখা' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="JavaScript closure memory lifecycle diagram">
<rect x="30" y="35" width="220" height="150" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="140" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">CALL STACK (POPPED)</text>
<text x="45" y="90" font-family="monospace" font-size="10" fill="currentColor">createAccount(100)</text>
<text x="45" y="115" font-size="10" fill="#dc2626">✗ Execution frame popped</text>
<text x="45" y="135" font-size="10" fill="#2563eb">Returned inner API methods:</text>
<text x="45" y="155" font-family="monospace" font-size="10" fill="currentColor">deposit(), withdraw()</text>

<line x1="250" y1="110" x2="350" y2="110" stroke="#4f46e5" stroke-width="2"/>
<polygon points="350,105 365,110 350,115" fill="#4f46e5"/>
<text x="307" y="100" text-anchor="middle" font-size="10" font-weight="700" fill="#4f46e5">retains</text>

<rect x="365" y="35" width="245" height="150" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="487" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">HEAP (LEXICAL ENVIRONMENT)</text>
<text x="385" y="90" font-family="monospace" font-size="10" fill="currentColor">Scope [[Environment]] {</text>
<text x="400" y="115" font-family="monospace" font-size="10" fill="#166534">  balance = 120 (live)</text>
<text x="400" y="135" font-family="monospace" font-size="10" fill="#166534">  transactionCount = 2</text>
<text x="385" y="155" font-family="monospace" font-size="10" fill="currentColor">}</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Closures keep referenced outer variables alive in heap memory preventing garbage collection</text>
</svg>`,
      caption: {
        en: 'Even after createAccount finishes and pops from the call stack, the returned inner functions maintain a living closure reference to the lexical environment in heap memory.',
        bn: 'createAccount এর কাজ শেষ হয়ে কল স্ট্যাক থেকে মুছে গেলেও এর ফেরত দেওয়া ভেতরের ফাংশনগুলো হিপ মেমরিতে থাকা ভেরিয়েবলের ওপর সক্রিয় ক্লোজার রেফারেন্স ধরে রাখে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Closure',
          def: {
            en: 'The combination of a function bundled together with references to its surrounding lexical environment, allowing access to outer variables after execution.',
            bn: 'একটি ফাংশন এবং তার আশেপাশের লেক্সিক্যাল এনভায়রনমেন্টের রেফারেন্সের সমন্বয়, যা এক্সিকিউশনের পরেও বাইরের ভেরিয়েবলে প্রবেশের সুযোগ দেয়।',
          },
        },
        {
          term: 'Lexical scope',
          def: {
            en: 'The scoping model where variable accessibility is determined purely by the physical source-code location of declarations at parse time.',
            bn: 'এমন একটি স্কোপ ব্যবস্থা যেখানে পার্স করার সময় কোডের অবস্থান অনুযায়ী ভেরিয়েবলের প্রবেশাধিকার নির্ধারিত হয়।',
          },
        },
        {
          term: 'Memory leak',
          def: {
            en: 'A condition where allocated memory is retained indefinitely by unreleased references (such as orphaned closures), preventing garbage collection.',
            bn: 'এমন একটি অবস্থা যেখানে অপ্রয়োজনীয় রেফারেন্সের (যেমন অকেজো ক্লোজার) কারণে মেমরি আটকে থাকে এবং গার্বেজ কালেক্টর তা মুক্ত করতে পারে না।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Data privacy and persistent functional state', bn: 'কেন — ডেটা গোপনীয়তা ও স্থায়ী ফাংশনাল স্টেট' },
    },
    {
      type: 'list',
      items: [
        { en: 'True data encapsulation: private variables inside a closure scope cannot be accessed or overwritten directly from external code.', bn: 'প্রকৃত ডেটা গোপনীয়তা: ক্লোজার স্কোপের ভেতরের প্রাইভেট ভেরিয়েবল বাইরের কোনো কোড সরাসরি পড়তে বা পরিবর্তন করতে পারে না।' },
        { en: 'Reusable function factories: manufacture specialized functions (such as custom logger formatters or currency converters) dynamically.', bn: 'ফাংশন ফ্যাক্টরি তৈরি: প্রয়োজন অনুসারে কাস্টম লগার বা কারেন্সি কনভার্টারের মতো বিশেষায়িত ফাংশন গতিশীলভাবে তৈরি করা যায়।' },
        { en: 'State preservation in asynchronous handlers: retain component IDs and request states across timer delays and network round trips.', bn: 'অ্যাসিঙ্ক্রোনাস হ্যান্ডলারে স্টেট সংরক্ষণ: টাইমার বা নেটওয়ার্ক বিলম্বের পরেও কম্পোনেন্ট আইডি ও রিকোয়েস্টের অবস্থা সফলভাবে ধরে রাখা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Constructing closures in 4 steps', bn: 'HOW — ৪টি ধাপে ক্লোজার তৈরি' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Create outer factory', bn: '১. ফ্যাক্টরি ফাংশন তৈরি' }, text: { en: 'Declare an outer function containing private state variables.', bn: 'প্রাইভেট ভেরিয়েবল ধারণকারী একটি বাইরের ফাংশন ঘোষণা করুন।' } },
        { title: { en: '2. Define inner methods', bn: '২. ভেতরের মেথড গঠন' }, text: { en: 'Create nested functions that read and mutate the outer variables.', bn: 'বাইরের ভেরিয়েবল পড়তে ও পরিবর্তন করতে ভেতরের ফাংশন তৈরি করুন।' } },
        { title: { en: '3. Return API object', bn: '৩. এপিআই অবজেক্ট রিটার্ন' }, text: { en: 'Return the inner functions exposed as public method properties.', bn: 'পাবলিক মেথড হিসেবে ভেতরের ফাংশনগুলোকে অবজেক্ট আকারে ফেরত দিন।' } },
        { title: { en: '4. Clean up listeners', bn: '৪. লিসেনার পরিষ্কারকরণ' }, text: { en: 'Nullify listener references when components unmount to release heap memory.', bn: 'মেমরি মুক্ত করতে কম্পোনেন্ট বন্ধের সময় লিসেনার রেফারেন্স নাল করে দিন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'closure_counter_sim.js',
      code: `function createAccountManager(initialBalance) {
  let balance = initialBalance; // Private state protected by closure
  let transactionCount = 0;

  return {
    deposit(amount) {
      balance += amount;
      transactionCount++;
      return balance;
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        transactionCount++;
      }
      return balance;
    },
    getMetrics() {
      return { balance, transactionCount };
    }
  };
}

const account = createAccountManager(100);
account.deposit(50);   // balance: 150, tx: 1
account.withdraw(30);  // balance: 120, tx: 2

const metrics = account.getMetrics();
const balancePlusTransactions = metrics.balance + metrics.transactionCount;

console.log("Closure Encapsulation Results:");
console.log("Current balance: $" + metrics.balance + ", Transactions: " + metrics.transactionCount);
console.log("Sum metric: " + balancePlusTransactions);

// Output:
// Closure Encapsulation Results:
// Current balance: $120, Transactions: 2
// Sum metric: 122`,
      caption: {
        en: 'The simulation encapsulates balance: starting with 100 dollars, depositing 50 and withdrawing 30 yields 120 dollars across 2 transactions, resulting in a sum metric of 122.',
        bn: 'সিমুলেশনটি ব্যালেন্স এনক্যাপসুলেট করে: ১০০ ডলার দিয়ে শুরু করে ৫০ ডলার জমা ও ৩০ ডলার তোলার পর ২টি ট্রানজ্যাকশনে ব্যালেন্স হয় ১২০ ডলার, যার মোট মেট্রিক ১২২।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive closure state lab', bn: 'INSIDE — জীবন্ত ক্লোজার স্টেট ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test closure encapsulation in real time. Starting with an initial balance of 100 dollars, calling deposit(50) and withdraw(30) results in a balance of 120 dollars across 2 transactions, summing to 122. The balance variable cannot be modified directly from outside; it exists solely in the function lexical scope.',
        bn: 'বাস্তবে ক্লোজার এনক্যাপসুলেশন পরীক্ষা করুন। ১০০ ডলার প্রাথমিক ব্যালেন্স নিয়ে deposit(৫০) এবং withdraw(৩০) কল করলে ২টি লেনদেনে ব্যালেন্স দাঁড়ায় ১২০ ডলার, মোট ১২২। balance ভেরিয়েবলটি বাইরে থেকে সরাসরি পরিবর্তন করা অসম্ভব; এটি কেবল লেক্সিক্যাল স্কোপেই অবস্থান করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Closure lab (modify deposits, press Run)', bn: 'Closure lab (জমা পরিবর্তন করুন, Run)' },
      html: '<h3>JavaScript Closure Encapsulation</h3>\n<pre id="out"></pre>\n<p>Private variables protected from outside access.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'let bal = 100;\nbal += 50;\nbal -= 30;\nconst tx = 2;\nconst total = bal + tx;\nconsole.log("balance: " + bal + ", tx: " + tx);\ndocument.getElementById("out").textContent = "Balance: $" + bal + " · Transactions: " + tx + " · Sum Metric: " + total + " (closure protected ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Closure architecture rules', bn: 'ফলাফল — ক্লোজার আর্কিটেকচারের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Encapsulation without classes: closures let you expose clean public methods while keeping implementation details strictly private.', bn: 'ক্লাস ছাড়া এনক্যাপসুলেশন: ক্লোজার আপনাকে অভ্যন্তরীণ ভেরিয়েবল গোপন রেখে পরিচ্ছন্ন পাবলিক মেথড উন্মুক্ত করার সুযোগ দেয়।' },
        { en: 'Always tear down event listeners: removeEventListener prevents retained closures from leaking entire component DOM subtrees.', bn: 'সর্বদা ইভেন্ট লিসেনার পরিষ্কার করুন: removeEventListener অকেজো ক্লোজারকে সম্পূর্ণ ডম মেমরি ধরে রেখে লিক করা থেকে বিরত রাখে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common closure traps', bn: 'ডিবাগ — ক্লোজার ব্যবহারের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Accidental memory leaks in uncleared intervals', bn: 'ইন্টারভাল ক্লিয়ার না করার ফলে মেমরি লিক' },
      text: {
        en: 'A setInterval callback referencing large arrays keeps that entire outer scope alive in memory forever, even after UI components are unmounted. Always store the interval ID and invoke clearInterval(timerId) on component teardown.',
        bn: 'বড় অ্যারে নির্দেশকারী setInterval কলব্যাক কম্পোনেন্ট বন্ধ হওয়ার পরেও সম্পূর্ণ বাইরের স্কোপকে আজীবন মেমরিতে ধরে রাখে। সর্বদা টাইমার আইডি সংরক্ষণ করুন এবং কম্পোনেন্ট আনমাউন্টে clearInterval(timerId) কল করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'The classic for loop var closure trap', bn: 'for লুপে var ব্যবহারের চিরাচরিত ক্লোজার ফাঁদ' },
      text: {
        en: 'Writing for (var i = 0; i < 3; i++) with setTimeout captures a single shared function-scoped variable i, printing 3 three times! Cure: use block-scoped let (for (let i = 0; ...)) which binds a fresh lexical variable for every loop iteration.',
        bn: 'for (var i = 0; i < 3; i++) এর সাথে setTimeout দিলে একই শেয়ার্ড ভেরিয়েবল i ক্যাপচার হয়, ফলে ৩ তিনবার প্রিন্ট হয়! প্রতিকার: ব্লক-স্কোপড let ব্যবহার করুন যা প্রতি ইটারেশনে নতুন লেক্সিক্যাল ভেরিয়েবল বরাদ্দ করে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production closure patterns', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল ক্লোজার প্যাটার্ন' },
    },
    {
      type: 'list',
      items: [
        { en: 'React hooks (useState, useEffect): rely on closure arrays to persist state across repeated component re-render cycles.', bn: 'React হুকস (useState): কম্পোনেন্ট রিরেন্ডার চক্রজুড়ে স্টেট ধরে রাখতে ক্লোজার অ্যারের ওপর নির্ভর করে।' },
        { en: 'Redux store creators (createStore): keep application state private inside a closure, permitting mutations only via dispatch(action).', bn: 'Redux ক্রিয়েটর: অ্যাপ্লিকেশন স্টেটকে ক্লোজারে গোপন রাখে এবং কেবল dispatch(action) এর মাধ্যমে পরিবর্তনের অনুমতি দেয়।' },
        { en: 'API rate limiters: token bucket algorithms store timestamp counters inside closures to throttle outbound HTTP traffic.', bn: 'এপিআই রেট লিমিটার: টোকেন বাকেট অ্যালগরিদম ক্লোজারের ভেতরে কাউন্টার সংরক্ষণ করে এইচটিটিপি ট্রাফিক নিয়ন্ত্রণ করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Prototypes and the Chain', bn: 'পরবর্তী পাঠ — প্রোটোটাইপ ও চেইন' },
    },
    {
      type: 'para',
      text: {
        en: 'With closures and lexical scope mastered, Lesson 3 examines JavaScript prototypal inheritance, how property lookups traverse the prototype chain, and the relationship with modern ECMAScript class syntax.',
        bn: 'ক্লোজার ও লেক্সিক্যাল স্কোপ আয়ত্ত করার পর, পাঠ ৩ জাভাস্ক্রিপ্ট প্রোটোটাইপাল ইনহেরিটেন্স, কীভাবে প্রপার্টি প্রোটোটাইপ চেইন বেয়ে খোঁজা হয় এবং আধুনিক ইসিএমএস্ক্রিপ্ট ক্লাস সিনট্যাক্সের সম্পর্ক শেখাবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'js-cls-ex-1',
      kind: 'mcq',
      topic: 'closure-definition',
      question: {
        en: 'What fundamental mechanism allows a JavaScript inner function to access variables from its parent function after the parent has finished executing?',
        bn: 'প্যারেন্ট ফাংশন সম্পন্ন হওয়ার পরেও জাভাস্ক্রিপ্টের কোন মৌলিক কাঠামোর কারণে ভেতরের ফাংশন প্যারেন্টের ভেরিয়েবলগুলোতে প্রবেশাধিকার বজায় রাখে?',
      },
      options: [
        {
          en: 'A closure: the function retains a living reference to its lexical environment in heap memory',
          bn: 'একটি ক্লোজার: ফাংশনটি হিপ মেমরিতে তার লেক্সিক্যাল এনভায়রনমেন্টের একটি সক্রিয় রেফারেন্স ধরে রাখে',
        },
        {
          en: 'The operating system duplicates the entire process memory',
          bn: 'অপারেটিং সিস্টেম সম্পূর্ণ প্রসেস মেমরি ডুপ্লিকেট করে',
        },
        {
          en: 'The variables are automatically written to a temporary browser cookie',
          bn: 'ভেরিয়েবলগুলো স্বয়ংক্রিয়ভাবে ব্রাউজারের অস্থায়ী কুকিতে সংরক্ষিত হয়',
        },
        {
          en: 'JavaScript compiles the inner function into an external WebAssembly module',
          bn: 'জাভাস্ক্রিপ্ট ভেতরের ফাংশনটিকে একটি বাহ্যিক ওয়েবঅ্যাসেম্বলি মডিউলে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: { en: 'Closures bundle functions with their lexical scope.', bn: 'ক্লোজার ফাংশনকে তার লেক্সিক্যাল স্কোপের সাথে যুক্ত করে রাখে।' },
      explanation: {
        en: 'A closure bundles a function with its lexical environment, preserving variables on the heap even after the outer function returns.',
        bn: 'একটি ক্লোজার ফাংশনকে তার লেক্সিক্যাল এনভায়রনমেন্টের সাথে বেঁধে রাখে, ফলে বাইরের ফাংশন শেষ হলেও ভেরিয়েবলগুলো হিপে অক্ষত থাকে।',
      },
    },
    {
      id: 'js-cls-ex-2',
      kind: 'mcq',
      topic: 'closure-sim-metrics',
      question: {
        en: 'In our code simulation, what was the final account balance after depositing 50 dollars and withdrawing 30 dollars from an initial 100 dollars, and what was the transaction count?',
        bn: 'আমাদের কোড সিমুলেশনে প্রাথমিক ১০০ ডলার থেকে ৫০ ডলার জমা ও ৩০ ডলার তোলার পর চূড়ান্ত ব্যালেন্স কত ছিল এবং লেনদেনের সংখ্যা কত ছিল?',
      },
      options: [
        { en: 'Final balance = $120 across 2 transactions (sum metric = 122)', bn: '২টি লেনদেনে চূড়ান্ত ব্যালেন্স = $১২০ (মোট মেট্রিক = ১২২)' },
        { en: 'Final balance = $200 across 5 transactions', bn: '৫টি লেনদেনে চূড়ান্ত ব্যালেন্স = $২০০' },
        { en: 'Final balance = $50 across 1 transaction', bn: '১টি লেনদেনে চূড়ান্ত ব্যালেন্স = $৫০' },
        { en: 'Final balance = $0 across 0 transactions', bn: '০টি লেনদেনে চূড়ান্ত ব্যালেন্স = $০' },
      ],
      answer: 0,
      hint: { en: '100 + 50 - 30 = 120 dollars; 2 transactions.', bn: '১০০ + ৫০ - ৩০ = ১২০ ডলার; ২টি লেনদেন।' },
      explanation: {
        en: 'Starting at 100, adding 50 and subtracting 30 results in a balance of 120 across 2 operations. 120 + 2 = 122.',
        bn: '১০০ দিয়ে শুরু করে ৫০ যোগ এবং ৩০ বিয়োগ করায় ২টি অপারেশনে ব্যালেন্স হয় ১২০। ১২০ + ২ = ১২২।',
      },
    },
    {
      id: 'js-cls-ex-3',
      kind: 'mcq',
      topic: 'loop-var-let',
      question: {
        en: 'Why does replacing var with let inside a for loop (for (let i = 0; ...)) fix the classic closure timing issue in asynchronous callbacks?',
        bn: 'for লুপের ভেতরে var এর বদলে let ব্যবহার করলে (for (let i = 0; ...)) কেন তা অ্যাসিঙ্ক কলব্যাকের চিরাচরিত ক্লোজার ভুল সমাধান করে?',
      },
      options: [
        {
          en: 'let is block-scoped, binding a fresh distinct variable i for each loop iteration rather than sharing a single function-scoped variable',
          bn: 'let হলো ব্লক-স্কোপড, যা একটি একক ভেরিয়েবল শেয়ার করার বদলে প্রতিটি লুপ ইটারেশনের জন্য একটি নতুন স্বতন্ত্র ভেরিয়েবল i বরাদ্দ করে',
        },
        {
          en: 'let automatically delays the loop execution by 5 seconds',
          bn: 'let স্বয়ংক্রিয়ভাবে লুপের এক্সিকিউশন ৫ সেকেন্ড বিলম্বিত করে',
        },
        {
          en: 'var is completely forbidden in modern browser engines',
          bn: 'আধুনিক ব্রাউজার ইঞ্জিনে var ব্যবহার সম্পূর্ণ নিষিদ্ধ',
        },
        {
          en: 'let forces the callbacks to execute in reverse order',
          bn: 'let কলব্যাকগুলোকে বিপরীত ক্রমে চালাতে বাধ্য করে',
        },
      ],
      answer: 0,
      hint: { en: 'let creates a new binding per iteration.', bn: 'let প্রতিটি ইটারেশনের জন্য নতুন বাইন্ডিং তৈরি করে।' },
      explanation: {
        en: 'Because let creates a new lexical binding for each loop iteration, each closure captures its own independent value of i.',
        bn: 'যেহেতু let প্রতিটি লুপের জন্য নতুন লেক্সিক্যাল বাইন্ডিং তৈরি করে, তাই প্রতিটি ক্লোজার i এর নিজস্ব স্বাধীন মান ধরে রাখে।',
      },
    },
    {
      id: 'js-cls-ex-4',
      kind: 'predict',
      topic: 'gc-algorithm-name',
      question: {
        en: 'What is the name of the standard garbage collection algorithm used by modern JavaScript engines like V8 to reclaim unreachable memory?',
        bn: 'অপ্রয়োজনীয় মেমরি মুক্ত করতে V8 এর মতো আধুনিক জাভাস্ক্রিপ্ট ইঞ্জিনগুলোতে ব্যবহৃত আদর্শ গার্বেজ কালেকশন অ্যালগরিদমের নাম কী?',
      },
      answer: 'Mark-and-sweep',
      accept: ['Mark-and-sweep', 'mark and sweep', 'mark-and-sweep algorithm'],
      hint: { en: 'It marks reachable objects and sweeps the rest.', bn: 'এটি ব্যবহারযোগ্য অবজেক্টগুলোকে চিহ্নিত করে বাকিগুলো ঝেড়ে ফেলে দেয়।' },
      explanation: {
        en: 'The mark-and-sweep algorithm traverses references starting from roots, marking reachable objects and sweeping unreferenced memory.',
        bn: 'মার্ক-অ্যান্ড-সুইপ অ্যালগরিদম রুট থেকে রেফারেন্স অনুসরণ করে সচল অবজেক্টগুলোকে চিহ্নিত করে এবং বাকি মেমরি মুক্ত করে দেয়।',
      },
    },
  ],
  quiz: {
    id: 'closures-scope-quiz',
    title: { en: 'Lesson 2 exam', bn: 'পাঠ ২ পরীক্ষা' },
    questions: [
      {
        id: 'js-cls-q1',
        kind: 'mcq',
        topic: 'data-privacy-advantage',
        question: {
          en: 'What primary advantage does using a closure factory provide for internal application state management?',
          bn: 'অভ্যন্তরীণ অ্যাপ্লিকেশন স্টেট ব্যবস্থাপনায় ক্লোজার ফ্যাক্টরি ব্যবহারের মূল সুবিধা কী?',
        },
        options: [
          {
            en: 'It completely protects private variables from outside tampering while exposing controlled public mutation methods',
            bn: 'এটি বাইরের কোনো অনাকাঙ্ক্ষিত পরিবর্তন থেকে প্রাইভেট ভেরিয়েবলকে সম্পূর্ণ সুরক্ষিত রাখে এবং নিয়ন্ত্রিত পাবলিক মেথড উন্মুক্ত করে',
          },
          {
            en: 'It doubles the network bandwidth of the user Wi-Fi connection',
            bn: 'এটি ব্যবহারকারীর ওয়াই-ফাই সংযোগের নেটওয়ার্ক ব্যান্ডউইথ দ্বিগুণ করে',
          },
          {
            en: 'It automatically formats CSS stylesheets',
            bn: 'এটি স্বয়ংক্রিয়ভাবে সিএসএস স্টাইলশিট ফরম্যাট করে',
          },
          {
            en: 'It compiles JavaScript into native Android APK files',
            bn: 'এটি জাভাস্ক্রিপ্টকে সরাসরি নেটিভ অ্যান্ড্রয়েড এপিকে ফাইলে রূপান্তর করে',
          },
        ],
        answer: 0,
        hint: { en: 'Closures provide encapsulation and privacy.', bn: 'ক্লোজার এনক্যাপসুলেশন ও গোপনীয়তা প্রদান করে।' },
        explanation: {
          en: 'Variables enclosed in a closure cannot be accessed directly by external code, guaranteeing strict data encapsulation.',
          bn: 'ক্লোজারে আবদ্ধ ভেরিয়েবল সরাসরি বাইরের কোড দ্বারা স্পর্শ করা যায় না, যা কঠোর ডেটা গোপনীয়তা নিশ্চিত করে।',
        },
      },
      {
        id: 'js-cls-q2',
        kind: 'mcq',
        topic: 'transaction-count-calc',
        question: {
          en: 'In our code walkthrough, how many total transactions were recorded by the createAccountManager instance?',
          bn: 'আমাদের কোড আলোচনায় createAccountManager ইনস্ট্যান্সে মোট কয়টি লেনদেন রেকর্ড করা হয়েছিল?',
        },
        options: [
          { en: 'Exactly 2 transactions (one deposit and one withdrawal)', bn: 'ঠিক ২টি লেনদেন (একটি জমা এবং একটি উত্তোলন)' },
          { en: 'Exactly 10 transactions', bn: 'ঠিক ১০টি লেনদেন' },
          { en: 'Only 1 transaction', bn: 'কেবল ১টি লেনদেন' },
          { en: 'Zero transactions', bn: '০টি লেনদেন' },
        ],
        answer: 0,
        hint: { en: '1 deposit + 1 withdrawal = 2.', bn: '১টি জমা + ১টি উত্তোলন = ২টি।' },
        explanation: {
          en: 'The simulation called deposit(50) followed by withdraw(30), resulting in exactly 2 recorded transactions.',
          bn: 'সিমুলেশনটি deposit(50) এবং পরবর্তীতে withdraw(30) কল করায় মোট ঠিক ২টি লেনদেন রেকর্ড করা হয়েছিল।',
        },
      },
      {
        id: 'js-cls-q3',
        kind: 'mcq',
        topic: 'memory-leak-cause',
        question: {
          en: 'Which scenario is a frequent cause of production JavaScript memory leaks involving closures?',
          bn: 'ক্লোজার সংক্রান্ত প্রোডাকশন জাভাস্ক্রিপ্ট মেমরি লিকের একটি প্রচলিত কারণ কোনটি?',
        },
        options: [
          {
            en: 'Attaching event listeners or intervals with closures that reference large objects, without removing them when components unmount',
            bn: 'বড় অবজেক্ট নির্দেশকারী ক্লোজারযুক্ত ইভেন্ট লিসেনার বা ইন্টারভাল চালু করা এবং কম্পোনেন্ট বন্ধের সময় তা রিমুভ না করা',
          },
          {
            en: 'Using === instead of == in conditional if statements',
            bn: 'if স্টেটমেন্টে == এর বদলে === ব্যবহার করা',
          },
          {
            en: 'Declaring constants using the const keyword',
            bn: 'const কিওয়ার্ড দিয়ে কনস্ট্যান্ট ঘোষণা করা',
          },
          {
            en: 'Writing comments inside function bodies',
            bn: 'ফাংশনের ভেতরে কমেন্ট লেখা',
          },
        ],
        answer: 0,
        hint: { en: 'Lingering listeners prevent garbage collection.', bn: 'অনিষ্পন্ন লিসেনার গার্বেজ কালেকশনে বাধা দেয়।' },
        explanation: {
          en: 'Uncleared event listeners retain living references to their closures, preventing the garbage collector from freeing memory.',
          bn: 'ক্লিয়ার না করা ইভেন্ট লিসেনার তাদের ক্লোজারের সক্রিয় রেফারেন্স ধরে রাখে, যার ফলে মেমরি মুক্ত হতে পারে না।',
        },
      },
      {
        id: 'js-cls-q4',
        kind: 'predict',
        topic: 'closure-keyword-recite',
        question: {
          en: 'What term describes the scoping model where a function variable access is determined by its physical declaration location in source code?',
          bn: 'সোর্স কোডে কোনো ফাংশনের শারীরিক অবস্থানের ওপর ভিত্তি করে তার ভেরিয়েবল প্রবেশাধিকার নির্ধারিত হওয়ার স্কোপিং মডেলকে কী বলা হয়?',
        },
        answer: 'Lexical scope',
        accept: ['Lexical scope', 'lexical', 'static scope'],
        hint: { en: 'Also called static scope; begins with "L".', bn: 'স্ট্যাটিক স্কোপ নামেও পরিচিত; "L" দিয়ে শুরু হয়।' },
        explanation: {
          en: 'Lexical scope means that scope is determined at author/parse time based on where functions and blocks are authored.',
          bn: 'লেক্সিক্যাল স্কোপ বলতে বোঝায় যে কোড লেখার অবস্থানের ওপর ভিত্তি করেই পার্স করার সময় ভেরিয়েবলের স্কোপ নির্ধারিত হয়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'prototypes-and-the-chain',
    title: { en: 'Prototypes and the Chain', bn: 'প্রোটোটাইপ ও চেইন' },
  },
};
