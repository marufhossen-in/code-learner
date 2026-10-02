import type { Lesson } from '../../../lib/types';

export const IterablesAndTheSpreadLesson: Lesson = {
  slug: 'iterables-and-the-spread',
  tech: 'lang-javascript',
  title: {
    en: 'Iterables and Spread — Iteration Protocols, Generators, and Rest Patterns',
    bn: 'ইটারেবল ও স্প্রেড — ইটারেশন প্রোটোকল, জেনারেটর ও রেস্ট প্যাটার্ন',
  },
  summary: {
    en: 'Master JavaScript iteration protocols: implement custom iterables using Symbol.iterator, generate lazy on-demand sequences with generator functions (function*), leverage rest parameters and spread operators, and avoid shallow copy mutations in nested object state.',
    bn: 'জাভাস্ক্রিপ্ট ইটারেশন প্রোটোকল আয়ত্ত করুন: Symbol.iterator দিয়ে কাস্টম ইটারেবল তৈরি, জেনারেটর ফাংশন (function*) দিয়ে অলস সিকোয়েন্স তৈরি, রেস্ট ও স্প্রেড অপারেটরের দক্ষ ব্যবহার এবং নেস্টেড অবজেক্টে শ্যালো কপির মিউটেশন প্রতিরোধ।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Iteration protocols, generator functions, and spread syntax', bn: 'WHAT — ইটারেশন প্রোটোকল, জেনারেটর ফাংশন ও স্প্রেড সিনট্যাক্স' },
    },
    {
      type: 'para',
      text: {
        en: 'When you manipulate collections, process streaming records, or transform object state in JavaScript, iteration protocols provide the universal interface uniting data structures. Introduced in modern language standards, any object implementing the Symbol.iterator method satisfies the iterable protocol and can be consumed by for...of loops, spread operators, and destructuring assignments. Complementing this protocol, generator functions (function*) allow you to yield values lazily on demand without allocating massive arrays in heap memory. However, while the spread operator provides concise cloning syntax, developers must remember that spread operations perform shallow copies where nested objects continue to share memory references.',
        bn: 'যখন আপনি জাভাস্ক্রিপ্টে ডেটা সংগ্রহ পরিচালনা করেন, স্ট্রিমিং রেকর্ড প্রসেস করেন বা অবজেক্ট স্টেট রূপান্তর করেন, তখন ইটারেশন প্রোটোকল সমস্ত ডেটা স্ট্রাকচারকে একটি সার্বজনীন রূপ দেয়। আধুনিক ভাষার স্ট্যান্ডার্ডে প্রবর্তিত Symbol.iterator মেথড বাস্তবায়নকারী যেকোনো অবজেক্ট ইটারেবল প্রোটোকল মেনে চলে এবং for...of লুপ, স্প্রেড অপারেটর ও ডিস্ট্রাকচারিং অ্যাসাইনমেন্ট সমর্থন করে। এর পাশাপাশি জেনারেটর ফাংশন (function*) মেমরিতে বড় অ্যারে তৈরি না করেই প্রয়োজন অনুসারে অলসভাবে মান সরবরাহ করে। তবে স্প্রেড অপারেটর লেখার সহজ সুবিধা দিলেও এটি শ্যালো কপি তৈরি করে, ফলে নেস্টেড অবজেক্টগুলো আগের মতোই একই মেমরি রেফারেন্স শেয়ার করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Generator yielding lazy values and spread operator flattening', bn: 'জেনারেটরের অলস মান সরবরাহ ও স্প্রেড অপারেটরের সংযোজন' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="JavaScript iterables generators and spread diagram">
<rect x="25" y="40" width="180" height="140" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="115" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">function* scoreGen()</text>
<text x="35" y="95" font-family="monospace" font-size="9" fill="currentColor">yield 25; // { value: 25 }</text>
<text x="35" y="118" font-family="monospace" font-size="9" fill="currentColor">yield 50; // { value: 50 }</text>
<text x="35" y="141" font-family="monospace" font-size="9" fill="currentColor">yield 75; // { value: 75 }</text>
<text x="35" y="165" font-size="9" fill="#2563eb">3 items generated lazily</text>

<line x1="205" y1="110" x2="255" y2="110" stroke="#4f46e5" stroke-width="2"/>
<polygon points="255,106 265,110 255,114" fill="#4f46e5"/>

<rect x="265" y="40" width="165" height="140" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="347" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">SPREAD OPERATOR (...)</text>
<text x="275" y="95" font-family="monospace" font-size="9" fill="currentColor">base = [10, 20]; (2)</text>
<text x="275" y="118" font-family="monospace" font-size="9" fill="currentColor">[...base, ...scoreGen()]</text>
<text x="275" y="141" font-size="9" fill="#166534">Flattens sequence items</text>
<text x="275" y="165" font-size="9" fill="#166534">into a fresh array</text>

<line x1="430" y1="110" x2="475" y2="110" stroke="#16a34a" stroke-width="2"/>
<polygon points="475,106 485,110 475,114" fill="#16a34a"/>

<rect x="485" y="45" width="135" height="130" rx="6" fill="#faf5ff" stroke="#7e22ce" stroke-width="2"/>
<text x="552" y="70" text-anchor="middle" font-size="11" font-weight="800" fill="#6b21a8">RESULT ARRAY</text>
<text x="495" y="98" font-family="monospace" font-size="9" fill="currentColor">5 total elements</text>
<text x="495" y="120" font-size="9" fill="#6b21a8">Sum = 180</text>
<text x="495" y="142" font-size="9" fill="#6b21a8">2 base + 3 gen</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Generators evaluate lazily on demand; spread operator consumes items sequentially</text>
</svg>`,
      caption: {
        en: 'Generators yield 3 items lazily on demand. Combining 2 base scores with 3 generator items via the spread operator produces 5 elements summing to 180.',
        bn: 'জেনারেটর প্রয়োজন অনুযায়ী অলসভাবে ৩টি মান সরবরাহ করে। স্প্রেড অপারেটর দিয়ে ২টি বেস স্কোরের সাথে ৩টি মান যুক্ত করলে ৫টি উপাদানে মোট ১৮০ পাওয়া যায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Iterable protocol',
          def: {
            en: 'A standard contract where an object implements [Symbol.iterator]() returning an iterator with a next() method.',
            bn: 'একটি আদর্শ নিয়ম যেখানে অবজেক্ট [Symbol.iterator]() বাস্তবায়ন করে যা next() মেথডযুক্ত ইটারেটর ফেরত দেয়।',
          },
        },
        {
          term: 'Generator function',
          def: {
            en: 'A special function declared with function* that can pause execution using yield and resume lazily on demand.',
            bn: 'function* দিয়ে ঘোষিত একটি বিশেষ ফাংশন যা yield ব্যবহার করে কাজ থামিয়ে রাখতে পারে এবং পরে প্রয়োজন অনুযায়ী পুনরায় শুরু হতে পারে।',
          },
        },
        {
          term: 'Shallow copy',
          def: {
            en: 'A duplication operation that copies top-level properties but retains shared references to any nested child objects.',
            bn: 'এমন একটি কপি প্রক্রিয়া যা ওপরের স্তরের প্রপার্টি কপি করলেও নেস্টেড ভেতরের অবজেক্টগুলোর একই মেমরি রেফারেন্স ধরে রাখে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Lazy sequences and functional immutability', bn: 'কেন — অলস সিকোয়েন্স ও ফাংশনাল অপরিবর্তনীয়তা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Massive memory savings: generators stream infinite or large sequence datasets one item at a time without loading entire arrays into RAM.', bn: 'বিপুল মেমরি সাশ্রয়: জেনারেটর সম্পূর্ণ অ্যারে র্যামে না এনে একবারে একটি করে আইটেম অলসভাবে স্ট্রিমিং করে মেমরি সাশ্রয় করে।' },
        { en: 'Polymorphic iterations: custom classes can be seamlessly traversed using standard for...of loops by attaching Symbol.iterator.', bn: 'বহুমুখী ইটারেশন: Symbol.iterator যুক্ত করে যেকোনো কাস্টম ক্লাসে আদর্শ for...of লুপ ব্যবহার করা যায়।' },
        { en: 'Immutable state updates: spreading objects and arrays creates fresh clones, avoiding destructive mutations in React state stores.', bn: 'অপরিবর্তনীয় স্টেট আপডেট: অবজেক্ট বা অ্যারে স্প্রেড করলে নতুন ক্লোন তৈরি হয়, যা মূল ডেটার ক্ষতি রোধ করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Implementing iterables in 4 steps', bn: 'HOW — ৪টি ধাপে ইটারেবল তৈরি' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Declare generator', bn: '১. জেনারেটর ঘোষণা' }, text: { en: 'Author generator functions using function* and yield statements.', bn: 'function* এবং yield ব্যবহার করে জেনারেটর ফাংশন লিখুন।' } },
        { title: { en: '2. Attach Symbol.iterator', bn: '২. Symbol.iterator সংযোগ' }, text: { en: 'Assign generator functions to [Symbol.iterator] on custom objects.', bn: 'কাস্টম অবজেক্টে [Symbol.iterator] প্রপার্টিতে জেনারেটর যুক্ত করুন।' } },
        { title: { en: '3. Spread into collections', bn: '৩. স্প্রেড দিয়ে সংযোজন' }, text: { en: 'Unpack sequence elements using [...generator()] spread syntax.', bn: '[...generator()] স্প্রেড সিনট্যাক্স দিয়ে উপাদানগুলো আলাদা করুন।' } },
        { title: { en: '4. Deep clone when nested', bn: '৪. নেস্টেড অবজেক্ট ক্লোনিং' }, text: { en: 'Employ structuredClone(obj) when nested objects must not be shared.', bn: 'নেস্টেড অবজেক্ট শেয়ার করা এড়াতে structuredClone(obj) ব্যবহার করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'iteration_spread_sim.js',
      code: `// 1. Generator lazy evaluation simulation
function* scoreSequence() {
  yield 25;
  yield 50;
  yield 75;
}

// 2. Consume generator with spread operator
const generatedScores = [...scoreSequence()];
const totalYieldedCount = generatedScores.length; // 3

// 3. Array aggregation and rest spread
const baseScores = [10, 20];
const combinedScores = [...baseScores, ...generatedScores]; // 5 total scores
const combinedSum = combinedScores.reduce((acc, val) => acc + val, 0); // 180

console.log("JavaScript Iterables and Spread Simulation:");
console.log("Yielded count: " + totalYieldedCount + ", Combined total items: " + combinedScores.length);
console.log("Base scores: 2 items, Generator scores: 3 items");
console.log("Combined aggregated sum: " + combinedSum + " across 5 total scores");

// Output:
// JavaScript Iterables and Spread Simulation:
// Yielded count: 3, Combined total items: 5
// Base scores: 2 items, Generator scores: 3 items
// Combined aggregated sum: 180 across 5 total scores`,
      caption: {
        en: 'The simulation produces 3 yielded scores (25, 50, 75) combined with 2 base scores (10, 20). The resulting 5 elements sum to 180 across 5 total scores.',
        bn: 'সিমুলেশনটিতে ৩টি জেনারেটর স্কোরের (২৫, ৫০, ৭৫) সাথে ২টি বেস স্কোর (১০, ২০) যুক্ত হয়ে ৫টি উপাদানে মোট ১৮০ তৈরি করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive iterable generator lab', bn: 'INSIDE — জীবন্ত ইটারেবল জেনারেটর ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test generator iteration and spread behavior. The generator yields 3 elements (25, 50, 75) lazily on demand. Spreading alongside 2 base scores creates a consolidated array of 5 total scores summing to 180. Notice how the spread operator iterates over any valid iterable without manual index loops.',
        bn: 'জেনারেটরের ইটারেশন ও স্প্রেড আচরণ পরীক্ষা করুন। জেনারেটর প্রয়োজন অনুযায়ী অলসভাবে ৩টি মান (২৫, ৫০, ৭৫) প্রদান করে। ২টি মূল স্কোরের সাথে স্প্রেড করায় ৫টি স্কোরে মোট ১৮০ তৈরি হয়। লক্ষ্য করুন কীভাবে স্প্রেড অপারেটর কোনো ইনডেক্স লুপ ছাড়াই যেকোনো ইটারেবলকে অনায়াসে ব্যবহার করতে পারে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Generator lab (inspect yields, press Run)', bn: 'Generator lab (ফলন পরীক্ষা করুন, Run)' },
      html: '<h3>JavaScript Generator & Spread</h3>\n<pre id="out"></pre>\n<p>Lazy sequence evaluation via generator functions.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'function* g() { yield 25; yield 50; yield 75; }\nconst arr = [10, 20, ...g()];\nconst sum = arr.reduce((a, b) => a + b, 0);\nconsole.log("sum: " + sum);\ndocument.getElementById("out").textContent = "Items: " + arr.length + " · Sum: " + sum + " (2 base + 3 yielded = 5 scores ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Iteration architecture rules', bn: 'ফলাফল — ইটারেশন আর্কিটেকচারের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Spread is shallow: nested objects inside spread arrays still retain memory references to the original object graph.', bn: 'স্প্রেড অগভীর বা শ্যালো কপি করে: স্প্রেড করা অ্যারের ভেতরের নেস্টেড অবজেক্টগুলো আগের মতোই মূল মেমরি রেফারেন্স ধরে রাখে।' },
        { en: 'Generators yield lazily: code inside a generator function does not execute until next() is invoked by consumers.', bn: 'জেনারেটর অলসভাবে কাজ করে: ব্যবহারকারী next() কল না করা পর্যন্ত জেনারেটর ফাংশনের ভেতরের কোড চলে না।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common iterable traps', bn: 'ডিবাগ — ইটারেবল ব্যবহারের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Accidental mutations with shallow spread copies', bn: 'অসাবধানতাবশত শ্যালো স্প্রেড কপিতে অনাকাঙ্ক্ষিত পরিবর্তন' },
      text: {
        en: 'Writing const clone = { ...original } copies primitive fields, but clone.user.name = "Alice" mutates original.user.name as well because the user object reference was copied, not cloned. Cure: use global structuredClone(original) for true deep copies.',
        bn: 'const clone = { ...original } লিখলে প্রিমিটিভ ফিল্ড কপি হলেও clone.user.name পরিবর্তন করলে original.user.name ও বদলে যায়, কারণ রেফারেন্স শেয়ার্ড ছিল। প্রতিকার: প্রকৃত ডিপ কপির জন্য global structuredClone(original) ব্যবহার করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Converting NodeList to Array with spread', bn: 'স্প্রেড দিয়ে NodeList কে অ্যারেতে রূপান্তর' },
      text: {
        en: 'DOM queries like document.querySelectorAll("div") return a NodeList which lacks array methods like map or filter. Spreading into an array ([...document.querySelectorAll("div")]) immediately unlocks all Array.prototype functional utilities.',
        bn: 'document.querySelectorAll("div") এর মতো ডম কুয়েরি NodeList ফেরত দেয় যাতে map বা filter মেথড থাকে না। [...document.querySelectorAll("div")] দিয়ে স্প্রেড করলে তা সাথে সাথে অ্যারেতে পরিণত হয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production iterable applications', bn: 'বাস্তব ক্ষেত্র — আধুনিক সিস্টেমে ইটারেবল ও স্প্রেড' },
    },
    {
      type: 'list',
      items: [
        { en: 'Redux reducers: using object spread ({ ...state, loading: false }) to return immutable new application states on dispatches.', bn: 'Redux রিডিউসার: অপরিবর্তনীয় নতুন স্টেট ফেরত দিতে অবজেক্ট স্প্রেড ({ ...state, loading: false }) ব্যবহার করা।' },
        { en: 'Pagination streaming: generator functions fetch paginated database records page-by-page, allowing consumers to stream results cleanly.', bn: 'পেজিনেশন স্ট্রিমিং: জেনারেটর ফাংশন পৃষ্ঠাভিত্তিক ডেটাবেস রেকর্ড এনে ব্যবহারকারীকে পরিচ্ছন্নভাবে ডেটা স্ট্রিম করার সুযোগ দেয়।' },
        { en: 'Set deduplication: [...new Set(duplicateArray)] provides an idiomatic one-liner to eliminate duplicate primitives from collections.', bn: 'ডুপ্লিকেট উপাদান দূরীকরণ: [...new Set(duplicateArray)] ব্যবহার করে যেকোনো অ্যারে থেকে সহজে ডুপ্লিকেট মান মুছে ফেলা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Proxies and Reflect Metaprogramming', bn: 'পরবর্তী পাঠ — প্রক্সি ও রিফ্লেক্ট মেটা-প্রোগ্রামিং' },
    },
    {
      type: 'para',
      text: {
        en: 'With iterables and generators mastered, Lesson 7 advances to JavaScript metaprogramming: intercepting runtime object operations with Proxies, property traps, and the companion Reflect API.',
        bn: 'ইটারেবল ও জেনারেটর আয়ত্ত করার পর, পাঠ ৭ জাভাস্ক্রিপ্ট মেটা-প্রোগ্রামিং শেখাবে: প্রক্সি, প্রপার্টি ট্র্যাপ ও পরিপূরক Reflect API দিয়ে অবজেক্ট অপারেশন নিয়ন্ত্রণ।',
      },
    },
  ],
  exercises: [
    {
      id: 'js-iter-ex-1',
      kind: 'mcq',
      topic: 'iterable-symbol-name',
      question: {
        en: 'What well-known Symbol property must an object implement to be compatible with for...of loops and the spread operator?',
        bn: 'for...of লুপ এবং স্প্রেড অপারেটর সমর্থন করার জন্য একটি অবজেক্টকে কোন সুপরিচিত সিম্বল মেথড বাস্তবায়ন করতে হয়?',
      },
      options: [
        {
          en: 'Symbol.iterator: a method that returns an iterator object conforming to the iterator protocol',
          bn: 'Symbol.iterator: এমন একটি মেথড যা ইটারেটর প্রোটোকল মেনে চলা একটি ইটারেটর অবজেক্ট ফেরত দেয়',
        },
        {
          en: 'Symbol.toString: which converts objects into JSON strings',
          bn: 'Symbol.toString: যা অবজেক্টকে জেসন স্ট্রিংয়ে রূপান্তর করে',
        },
        {
          en: 'Symbol.networkPort: which binds the object to a local TCP socket',
          bn: 'Symbol.networkPort: যা অবজেক্টকে লোকাল টিসিপি সকেটে সংযুক্ত করে',
        },
        {
          en: 'Symbol.compilerDirective: which deletes unused code',
          bn: 'Symbol.compilerDirective: যা অব্যবহৃত কোড মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: { en: 'Symbol.iterator unlocks iteration.', bn: 'Symbol.iterator ইটারেশন সক্রিয় করে।' },
      explanation: {
        en: 'Objects implementing [Symbol.iterator]() satisfy the iterable protocol and can be consumed by for...of and spread syntax.',
        bn: '[Symbol.iterator]() বাস্তবায়নকারী অবজেক্টগুলো ইটারেবল প্রোটোকল পূরণ করে এবং for...of ও স্প্রেডে কাজ করে।',
      },
    },
    {
      id: 'js-iter-ex-2',
      kind: 'mcq',
      topic: 'generator-spread-numbers',
      question: {
        en: 'In our code walkthrough, how many scores were yielded by the generator, how many base scores existed, and what was their combined sum across the 5 total scores?',
        bn: 'আমাদের কোড আলোচনায় জেনারেটর কয়টি স্কোর প্রদান করেছিল, কয়টি মূল স্কোর ছিল এবং ৫টি স্কোরে তাদের মোট সমষ্টি কত ছিল?',
      },
      options: [
        { en: '3 yielded, 2 base scores, combined sum = 180 across 5 total scores', bn: '৩টি জেনারেটর, ২টি মূল স্কোর, ৫টি স্কোরে মোট সমষ্টি = ১৮০' },
        { en: '10 yielded, 5 base scores, combined sum = 500 across 5 total scores', bn: '১০টি জেনারেটর, ৫টি মূল স্কোর, ৫টি স্কোরে মোট সমষ্টি = ৫০০' },
        { en: '1 yielded, 1 base score, combined sum = 50 across 2 total scores', bn: '১টি জেনারেটর, ১টি মূল স্কোর, ২টি স্কোরে মোট সমষ্টি = ৫০' },
        { en: '0 yielded, 0 base scores, combined sum = 0 across 0 total scores', bn: '০টি জেনারেটর, ০টি মূল স্কোর, ০টি স্কোরে মোট সমষ্টি = ০' },
      ],
      answer: 0,
      hint: { en: '10 + 20 + 25 + 50 + 75 = 180 across 5 scores.', bn: '১০ + ২০ + ২৫ + ৫০ + ৭৫ = ৫টি স্কোরে ১৮০।' },
      explanation: {
        en: 'The simulation defined 2 base scores (10, 20) and 3 yielded scores (25, 50, 75), producing a combined sum of 180 across 5 scores.',
        bn: 'সিমুলেশনটিতে ২টি বেস স্কোর (১০, ২০) এবং ৩টি জেনারেটর স্কোর (২৫, ৫০, ৭৫) মিলে ৫টি স্কোরে মোট ১৮০ উৎপন্ন হয়েছিল।',
      },
    },
    {
      id: 'js-iter-ex-3',
      kind: 'mcq',
      topic: 'shallow-copy-hazard',
      question: {
        en: 'Why is using object spread ({ ...original }) insufficient when you need to clone deeply nested objects without shared mutation side effects?',
        bn: 'শেয়ার্ড মিউটেশন এড়িয়ে সম্পূর্ণ নেস্টেড অবজেক্ট ক্লোন করতে অবজেক্ট স্প্রেড ({ ...original }) কেন যথেষ্ট নয়?',
      },
      options: [
        {
          en: 'Spread performs a shallow copy: nested objects copy only their reference pointers, so mutating nested properties mutates the original object',
          bn: 'স্প্রেড কেবল শ্যালো কপি করে: নেস্টেড অবজেক্টগুলোর শুধুমাত্র রেফারেন্স পয়েন্টার কপি হয়, ফলে নেস্টেড মান পরিবর্তন করলে মূল অবজেক্টও বদলে যায়',
        },
        {
          en: 'Spread deletes all string properties automatically',
          bn: 'স্প্রেড স্বয়ংক্রিয়ভাবে সমস্ত স্ট্রিং প্রপার্টি মুছে ফেলে',
        },
        {
          en: 'Spread syntax requires a dedicated GPU accelerator',
          bn: 'স্প্রেড সিনট্যাক্সের জন্য বিশেষ জিপিইউ এক্সিলারেটর প্রয়োজন হয়',
        },
        {
          en: 'Nested objects cannot be stored in JavaScript variables',
          bn: 'জাভাস্ক্রিপ্ট ভেরিয়েবলে নেস্টেড অবজেক্ট রাখা সম্ভব নয়',
        },
      ],
      answer: 0,
      hint: { en: 'Spread only copies top-level properties.', bn: 'স্প্রেড কেবল ওপরের স্তরের প্রপার্টি কপি করে।' },
      explanation: {
        en: 'Spread copies properties by value at the first level only; child objects share references. Use structuredClone for deep copies.',
        bn: 'স্প্রেড কেবল প্রথম স্তরে মান কপি করে; ভেতরের অবজেক্টগুলোর রেফারেন্স শেয়ার্ড থাকে। সম্পূর্ণ কপির জন্য structuredClone ব্যবহার করুন।',
      },
    },
    {
      id: 'js-iter-ex-4',
      kind: 'predict',
      topic: 'generator-keyword-syntax',
      question: {
        en: 'What keyword is used inside a JavaScript generator function body to pause execution and produce a value for the caller (e.g. yield)?',
        bn: 'জাভাস্ক্রিপ্ট জেনারেটর ফাংশনের ভেতরে কাজ থামিয়ে কলারকে মান সরবরাহ করতে কোন কিওয়ার্ডটি ব্যবহৃত হয় (যেমন yield)?',
      },
      answer: 'yield',
      accept: ['yield', 'Yield'],
      hint: { en: 'y-i-e-l-d', bn: 'y-i-e-l-d' },
      explanation: {
        en: 'The yield keyword pauses generator execution and emits the current value to the iterator consumer.',
        bn: 'yield কিওয়ার্ডটি জেনারেটরের কাজ সাময়িক থামিয়ে বর্তমান মানটি ইটারেটর ব্যবহারকারীকে প্রদান করে।',
      },
    },
  ],
  quiz: {
    id: 'iterables-spread-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'js-iter-q1',
        kind: 'mcq',
        topic: 'generator-lazy-advantage',
        question: {
          en: 'What is the primary memory and architectural benefit of using generator functions over standard array mapping?',
          bn: 'সাধারণ অ্যারে ম্যাপিংয়ের বদলে জেনারেটর ফাংশন ব্যবহারের মূল মেমরি ও আর্কিটেকচারাল সুবিধা কী?',
        },
        options: [
          {
            en: 'Generators evaluate lazily on demand, allowing infinite streams and huge datasets without holding entire collections in RAM',
            bn: 'জেনারেটর প্রয়োজন অনুযায়ী অলসভাবে কাজ করে, ফলে সম্পূর্ণ ডেটা র্যামে না রেখেই অসীম স্ট্রিম ও বিশাল ডেটাসেট পরিচালনা করা যায়',
          },
          {
            en: 'Generators double the client CPU clock speed',
            bn: 'জেনারেটর ক্লায়েন্টের সিপিইউ গতি দ্বিগুণ করে',
          },
          {
            en: 'Generators convert JavaScript code into plain HTML',
            bn: 'জেনারেটর জাভাস্ক্রিপ্ট কোডকে সরাসরি সাধারণ এইচটিএমএলে রূপান্তর করে',
          },
          {
            en: 'Generators encrypt all browser cookies automatically',
            bn: 'জেনারেটর সমস্ত ব্রাউজার কুকি স্বয়ংক্রিয়ভাবে এনক্রিপ্ট করে',
          },
        ],
        answer: 0,
        hint: { en: 'Lazy evaluation saves memory.', bn: 'অলস মূল্যায়ন মেমরি সাশ্রয় করে।' },
        explanation: {
          en: 'Generators calculate values one at a time on demand, avoiding upfront memory allocations for large sequences.',
          bn: 'জেনারেটর একবারে একটি করে মান তৈরি করে, যা বড় ডেটার ক্ষেত্রে এককালীন বিশাল মেমরি অপচয় রোধ করে।',
        },
      },
      {
        id: 'js-iter-q2',
        kind: 'mcq',
        topic: 'sum-metric-check',
        question: {
          en: 'In our code walkthrough, what was the total combined sum of all 5 scores from baseScores and scoreSequence?',
          bn: 'আমাদের কোড আলোচনায় baseScores এবং scoreSequence মিলিয়ে ৫টি স্কোরের মোট সমষ্টি কত হয়েছিল?',
        },
        options: [
          { en: '180 across 5 total scores (10, 20, 25, 50, 75)', bn: '৫টি স্কোরে মোট ১৮০ (১০, ২০, ২৫, ৫০, ৭৫)' },
          { en: '300 across 5 total scores', bn: '৫টি স্কোরে মোট ৩০০' },
          { en: '50 across 2 total scores', bn: '২টি স্কোরে মোট ৫০' },
          { en: '0 across 0 total scores', bn: '০টি স্কোরে মোট ০' },
        ],
        answer: 0,
        hint: { en: '10 + 20 + 25 + 50 + 75 = 180.', bn: '১০ + ২০ + ২৫ + ৫০ + ৭৫ = ১৮০।' },
        explanation: {
          en: 'The simulation reduced [10, 20, 25, 50, 75] to an aggregated sum of 180 across 5 scores.',
          bn: 'সিমুলেশনটিতে [১০, ২০, ২৫, ৫০, ৭৫] যোগ করে ৫টি স্কোরে মোট ১৮০ পাওয়া গিয়েছিল।',
        },
      },
      {
        id: 'js-iter-q3',
        kind: 'mcq',
        topic: 'deep-clone-standard-api',
        question: {
          en: 'Which modern global standard API should be used in JavaScript to perform a true deep copy of nested data structures?',
          bn: 'নেস্টেড ডেটা কাঠামোর প্রকৃত ডিপ কপি করার জন্য আধুনিক জাভাস্ক্রিপ্টে কোন গ্লোবাল আদর্শ এপিআইটি ব্যবহার করা উচিত?',
        },
        options: [
          {
            en: 'structuredClone: built into modern browsers and Node.js for recursive deep duplication of objects and arrays',
            bn: 'structuredClone: অবজেক্ট ও অ্যারের রিকার্সিভ ডিপ কপির জন্য আধুনিক ব্রাউজার ও Node.js এর নিজস্ব এপিআই',
          },
          {
            en: 'Object.freeze: which converts objects into numbers',
            bn: 'Object.freeze: যা অবজেক্টকে সংখ্যায় রূপান্তর করে',
          },
          {
            en: 'JSON.stringify: which runs in the kernel space',
            bn: 'JSON.stringify: যা কার্নেল স্পেসে চলে',
          },
          {
            en: 'window.alert: which prints objects onto the screen',
            bn: 'window.alert: যা স্ক্রিনে অবজেক্ট প্রদর্শন করে',
          },
        ],
        answer: 0,
        hint: { en: 'structuredClone handles deep cloning natively.', bn: 'structuredClone নেটিভভাবে ডিপ ক্লোনিং পরিচালনা করে।' },
        explanation: {
          en: 'structuredClone is the standard web platform API for deep cloning complex nested data structures without reference sharing.',
          bn: 'structuredClone হলো কোনো রেফারেন্স শেয়ারিং ছাড়া জটিল নেস্টেড ডেটা ডিপ ক্লোন করার আদর্শ ওয়েব এপিআই।',
        },
      },
      {
        id: 'js-iter-q4',
        kind: 'predict',
        topic: 'iterator-result-property',
        question: {
          en: 'What boolean property on an iterator result object indicates whether the sequence has reached completion (e.g. { done: true })?',
          bn: 'একটি ইটারেটর রেজাল্ট অবজেক্টের কোন বুলিয়ান প্রপার্টিটি সিকোয়েন্স সম্পন্ন হয়েছে কিনা নির্দেশ করে (যেমন { done: true })?',
        },
        answer: 'done',
        accept: ['done', 'Done'],
        hint: { en: '{ value, done }', bn: '{ value, done }' },
        explanation: {
          en: 'The done property is true when the iterator has exhausted all values in the sequence.',
          bn: 'ইটারেটর তার সমস্ত মান শেষ করে ফেললে done প্রপার্টির মান true হয়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'proxies-and-the-trap',
    title: { en: 'Proxies and Reflect Metaprogramming', bn: 'প্রক্সি ও রিফ্লেক্ট মেটা-প্রোগ্রামিং' },
  },
};
