import type { Lesson } from '../../../lib/types';

export const ValuesAndTheCoercionLesson: Lesson = {
  slug: 'values-and-the-coercion',
  tech: 'lang-javascript',
  title: {
    en: 'Values and Coercion — Primitives, Reference Types, and Strict Equality',
    bn: 'মান ও কোয়ার্শন — প্রিমিটিভ, রেফারেন্স টাইপ ও কঠোর সমতা',
  },
  summary: {
    en: 'A beginner introduction to JavaScript value fundamentals: master the 7 primitive types, understand object references, master explicit conversions vs implicit coercion, navigate the typeof null quirk, and enforce strict equality (===) to prevent subtle production bugs.',
    bn: 'জাভাস্ক্রিপ্ট মানের প্রাথমিক পরিচিতি: ৭টি প্রিমিটিভ টাইপ আয়ত্ত করা, অবজেক্ট রেফারেন্স বোঝা, স্পষ্ট রূপান্তর বনাম স্বয়ংক্রিয় কোয়ার্শন, typeof null এর ঐতিহাসিক ত্রুটি এবং উৎপাদন ত্রুটি এড়াতে কঠোর সমতা (===) প্রয়োগ করা।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Seven primitives, objects, and comparison rules', bn: 'WHAT — সাতটি প্রিমিটিভ, অবজেক্ট ও তুলনার নিয়ম' },
    },
    {
      type: 'para',
      text: {
        en: 'When you write JavaScript, understanding how the engine categorizes, stores, and compares values is the foundation of writing predictable code. JavaScript organizes all values into two categories: seven immutable primitives that are passed by value, and mutable objects that are passed by memory reference. When operations combine disparate types, the engine performs automatic type conversion known as implicit coercion. Relying on loose equality (==) allows unexpected conversions where empty strings equal zero, which is why modern production standards require strict equality (===) and explicit type casting.',
        bn: 'যখন আপনি জাভাস্ক্রিপ্ট লেখেন, তখন ইঞ্জিন কীভাবে মানগুলোকে ভাগ করে, মেমরিতে রাখে এবং তুলনা করে তা বোঝা নির্ভরযোগ্য কোড লেখার প্রথম ভিত্তি। জাভাস্ক্রিপ্ট সমস্ত মানকে দুটি ভাগে বিভক্ত করে: সাতটি অপরিবর্তনীয় প্রিমিটিভ যা ভ্যালু দ্বারা পাস হয়, এবং পরিবর্তনশীল অবজেক্ট যা মেমরি রেফারেন্স দ্বারা পাস হয়। যখন অপারেশনে ভিন্ন ভিন্ন টাইপ একত্রিত হয়, তখন ইঞ্জিন স্বয়ংক্রিয়ভাবে টাইপ রূপান্তর ঘটায় যাকে ইমপ্লিসিট কোয়ার্শন বলা হয়। লুজ সমতা (==) ব্যবহার করলে খালি স্ট্রিংও শূন্যের সমান হয়ে অনাকাঙ্ক্ষিত বাগ তৈরি করে, যার কারণে আধুনিক প্রোডাকশন কোডে কঠোর সমতা (===) এবং স্পষ্ট টাইপ রূপান্তর বাধ্যতামূলক।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Primitive values in stack memory vs object references in heap memory', bn: 'স্ট্যাকের প্রিমিটিভ মান বনাম হিপের অবজেক্ট রেফারেন্স' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="JavaScript primitives vs reference objects memory diagram">
<rect x="30" y="35" width="240" height="150" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="150" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">STACK (7 PRIMITIVES)</text>
<text x="45" y="85" font-family="monospace" font-size="10" fill="currentColor">let a = 10;</text>
<text x="45" y="105" font-family="monospace" font-size="10" fill="currentColor">let b = a; // Copy by value</text>
<text x="45" y="130" font-size="10" fill="#2563eb">b = 20 leaves a unchanged</text>
<text x="45" y="150" font-size="9" fill="#1e40af">Number, String, Boolean,</text>
<text x="45" y="165" font-size="9" fill="#1e40af">Null, Undefined, Symbol, BigInt</text>

<rect x="370" y="35" width="240" height="150" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="490" y="60" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">HEAP (OBJECT REFERENCES)</text>
<text x="385" y="85" font-family="monospace" font-size="10" fill="currentColor">let obj1 = { id: 1 };</text>
<text x="385" y="105" font-family="monospace" font-size="10" fill="currentColor">let obj2 = obj1; // Reference copy</text>
<text x="385" y="130" font-size="10" fill="#166534">obj2.id = 2 modifies obj1!</text>
<text x="385" y="150" font-size="9" fill="#166534">Objects, Arrays, Functions share</text>
<text x="385" y="165" font-size="9" fill="#166534">underlying memory pointers</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Primitives are immutable copies; objects share underlying heap memory references</text>
</svg>`,
      caption: {
        en: 'The 7 primitive types are stored and passed by value. Objects are stored in heap memory and passed by reference, meaning assigning an object to a new variable shares mutations.',
        bn: '৭টি প্রিমিটিভ টাইপ সরাসরি মান দ্বারা সংরক্ষিত ও পাস হয়। অবজেক্টগুলো হিপ মেমরিতে থাকে এবং রেফারেন্স দ্বারা পাস হয়, যার অর্থ অবজেক্ট অ্যাসাইন করলে তারা একই মেমরি শেয়ার করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Primitive type',
          def: {
            en: 'One of seven immutable basic data types (number, string, boolean, null, undefined, symbol, bigint) passed by value.',
            bn: 'সাতটি অপরিবর্তনীয় মৌলিক ডেটা টাইপের একটি (number, string, boolean, null, undefined, symbol, bigint) যা সরাসরি মান দ্বারা পাস হয়।',
          },
        },
        {
          term: 'Type coercion',
          def: {
            en: 'The automatic or implicit conversion of values from one data type to another performed by the JavaScript runtime.',
            bn: 'জাভাস্ক্রিপ্ট রানটাইম কর্তৃক কোনো মানের এক ডেটা টাইপ থেকে অন্য ডেটা টাইপে স্বয়ংক্রিয় বা অন্তর্নিহিত রূপান্তর।',
          },
        },
        {
          term: 'Strict equality (===)',
          def: {
            en: 'A comparison operator that evaluates both data type and value without performing implicit type coercion.',
            bn: 'একটি তুলনা অপারেটর যা কোনো ধরনের স্বয়ংক্রিয় রূপান্তর ছাড়াই ডেটা টাইপ এবং মান উভয়ই যাচাই করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Eliminating unpredictable comparison pitfalls', bn: 'কেন — অপ্রত্যাশিত তুলনা জনিত বাগ দূর করা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Prevent silent logic bugs: loose equality evaluates "" == 0 and false == [] as true, allowing invalid form submissions and authorization bypasses.', bn: 'নীরব লজিক বাগ রোধ: লুজ সমতা "" == 0 এবং false == [] কে true ধরে, যা ভুল ফর্ম সাবমিশন এবং অথরাইজেশন ফাঁক তৈরি করতে পারে।' },
        { en: 'Predictable memory mutation: knowing that primitives are immutable guarantees that passing numbers or strings cannot mutate caller variables.', bn: 'পূর্বনির্ধারিত মেমরি আচরণ: প্রিমিটিভ অপরিবর্তনীয় হওয়ায় নিশ্চিত হওয়া যায় যে সংখ্যা বা স্ট্রিং পাস করলে কলারের ভেরিয়েবল কখনো পরিবর্তিত হবে না।' },
        { en: 'Explicit code communication: writing Number(str) communicates parsing intent clearly compared to obscure unary plus conversions (+str).', bn: 'স্পষ্ট কোড প্রকাশ: অস্পষ্ট ইউনারি প্লাসের (+str) তুলনায় স্পষ্ট Number(str) লিখলে কোডের উদ্দেশ্য পরিষ্কারভাবে বোঝা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Working with values and equality in 4 steps', bn: 'HOW — ৪টি ধাপে মান ও সমতা পরিচালনা' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Inspect data type', bn: '১. টাইপ পরীক্ষা' }, text: { en: 'Use typeof val to inspect primitives, remembering typeof null is "object".', bn: 'typeof val দিয়ে পরীক্ষা করুন, মনে রাখবেন typeof null হলো "object"।' } },
        { title: { en: '2. Check null vs undefined', bn: '২. null ও undefined এর পার্থক্য' }, text: { en: 'Use val === null and val === undefined to distinguish intent.', bn: 'সুনির্দিষ্ট উদ্দেশ্য বুঝতে val === null এবং val === undefined ব্যবহার করুন।' } },
        { title: { en: '3. Convert explicitly', bn: '৩. স্পষ্ট রূপান্তর' }, text: { en: 'Cast types deliberately with Number(x), String(x), and Boolean(x).', bn: 'Number(x), String(x) এবং Boolean(x) দিয়ে স্পষ্ট রূপান্তর করুন।' } },
        { title: { en: '4. Enforce strict equality', bn: '৪. কঠোর সমতা নিশ্চিতকরণ' }, text: { en: 'Standardize on === and !== to forbid hidden type coercion.', bn: 'লুকানো টাইপ কোয়ার্শন ঠেকাতে সর্বদা === এবং !== ব্যবহার করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'coercion_equality_sim.js',
      code: `// 1. Primitive vs Reference count
const primitivesCount = 7; // number, string, boolean, null, undefined, symbol, bigint
const activeScores = [85, 90, 95];

// 2. Strict equality vs Coercion comparison
const strVal = "100";
const numVal = 100;

const looseMatch = (strVal == numVal);   // true (coerced)
const strictMatch = (strVal === numVal); // false (different types)

// 3. Explicit conversion and reduction
const parsedScoresSum = activeScores.reduce((acc, score) => acc + score, Number("0"));

console.log("JavaScript Values and Coercion Results:");
console.log("Primitives total: " + primitivesCount + ", Scores count: " + activeScores.length);
console.log("\\"100\\" == 100: " + looseMatch + " (coerced), \\"100\\" === 100: " + strictMatch);
console.log("Scores sum: " + parsedScoresSum + " across 3 items");

// Output:
// JavaScript Values and Coercion Results:
// Primitives total: 7, Scores count: 3
// "100" == 100: true (coerced), "100" === 100: false
// Scores sum: 270 across 3 items`,
      caption: {
        en: 'The simulation evaluates 7 primitives and 3 scores (85, 90, 95) summing to 270. It proves that loose equality ("100" == 100) evaluates true via coercion, while strict equality evaluates false.',
        bn: 'সিমুলেশনটি ৭টি প্রিমিটিভ এবং ৩টি স্কোরের (৮৫, ৯০, ৯৫) সমষ্টি ২৭০ মূল্যায়ন করে। এটি প্রমাণ করে যে লুজ সমতা ("100" == 100) কোয়ার্শনের কারণে true দেয়, আর কঠোর সমতা false দেয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive type coercion simulator', bn: 'INSIDE — জীবন্ত টাইপ কোয়ার্শন ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test comparison semantics. Notice that "100" == 100 evaluates to true because the string is coerced into a number, whereas strict equality "100" === 100 returns false due to differing types. Three scores (85, 90, 95) aggregate to 270 across 7 JavaScript primitive categories. Modifying values verifies how coercion alters expressions.',
        bn: 'তুলনার নিয়মগুলো পরীক্ষা করুন। লক্ষ্য করুন যে "100" == 100 সত্য (true) হয় কারণ স্ট্রিংটি সংখ্যায় রূপান্তরিত হয়, কিন্তু কঠোর সমতা "100" === 100 টাইপ অমিলের কারণে false দেয়। ৭টি জাভাস্ক্রিপ্ট প্রিমিটিভের মধ্যে ৩টি স্কোর (৮৫, ৯০, ৯৫) যোগ হয়ে ২৭০ তৈরি করে। মান পরিবর্তন করে কোয়ার্শন পরখ করুন।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Coercion lab (modify inputs, press Run)', bn: 'Coercion lab (ইনপুট পরিবর্তন করুন, Run)' },
      html: '<h3>JavaScript Strict vs Loose Equality</h3>\n<pre id="out"></pre>\n<p>Compare strict (===) and loose (==) operations.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const s = "100";\nconst n = 100;\nconst loose = (s == n);\nconst strict = (s === n);\nconst scores = [85, 90, 95];\nconst sum = scores.reduce((a, b) => a + b, 0);\nconsole.log("sum: " + sum);\ndocument.getElementById("out").textContent = "\\"100\\" == 100: " + loose + " · \\"100\\" === 100: " + strict + " · Sum: " + sum + " (3 items) ✓";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Value architecture rules', bn: 'ফলাফল — ভ্যালু আর্কিটেকচারের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always enforce strict equality (===): lint rules like eqeqeq should be enabled to prevent unintended coercion bugs.', bn: 'সর্বদা কঠোর সমতা (===) প্রয়োগ করুন: অনিচ্ছাকৃত কোয়ার্শন বাগ রোধ করতে eqeqeq লিন্ট নিয়ম সক্রিয় রাখুন।' },
        { en: 'Primitives are compared by value, objects by reference: two distinct objects { id: 1 } === { id: 1 } will always return false.', bn: 'প্রিমিটিভ মানে তুলনা হয় আর অবজেক্ট রেফারেন্সে: ২টি আলাদা অবজেক্ট { id: 1 } === { id: 1 } সর্বদা false ফেরত দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common JavaScript type pitfalls', bn: 'ডিবাগ — জাভাস্ক্রিপ্ট টাইপের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'The typeof null === "object" historical bug', bn: 'typeof null === "object" এর ঐতিহাসিক ত্রুটি' },
      text: {
        en: 'In the original 1995 JavaScript implementation, values were stored with type tags where 0 indicated an object. Because null was represented as the NULL pointer (0x00), typeof null returned "object"! This bug cannot be fixed without breaking millions of websites. Cure: always check val === null directly.',
        bn: '১৯৯৫ সালের প্রথম জাভাস্ক্রিপ্ট ইঞ্জিনে মানের টাইপ ট্যাগ হিসেবে ০ দিয়ে অবজেক্ট বোঝানো হতো। null কে নাল পয়েন্টার (0x00) হিসেবে রাখায় typeof null "object" ফেরত দিত! কোটি কোটি ওয়েবসাইটের সামঞ্জস্য বজায় রাখতে এটি আর ঠিক করা সম্ভব নয়। প্রতিকার: সর্বদা সরাসরি val === null দিয়ে পরীক্ষা করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Testing for NaN correctly with Number.isNaN', bn: 'Number.isNaN দিয়ে সঠিকভাবে NaN পরীক্ষা' },
      text: {
        en: 'In JavaScript, NaN (Not a Number) is the only value in the language not equal to itself: NaN === NaN returns false! Never check if (x === NaN). Instead, use the robust ECMAScript 6 helper Number.isNaN(x).',
        bn: 'জাভাস্ক্রিপ্টে NaN হলো এমন একমাত্র মান যা নিজের সমানও নয়: NaN === NaN সর্বদা false দেয়! কখনোই if (x === NaN) লিখবেন না। এর বদলে নির্ভরযোগ্য Number.isNaN(x) মেথড ব্যবহার করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production type handling', bn: 'বাস্তব ক্ষেত্র — আধুনিক সিস্টেমে টাইপ হ্যান্ডলিং' },
    },
    {
      type: 'list',
      items: [
        { en: 'API JSON payload parsing: validating incoming payload numbers using Number.isFinite() to block malicious Infinity or NaN injections.', bn: 'এপিআই জেসন পার্সিং: ক্ষতিকারক Infinity বা NaN ঠেকাতে Number.isFinite() দিয়ে ইনপুট যাচাই করা।' },
        { en: 'Form input sanitization: converting raw HTML input string values into numbers explicitly before performing financial calculations.', bn: 'ফর্ম ইনপুট রূপান্তর: আর্থিক হিসাব করার পূর্বে এইচটিটিপি স্ট্রিং মানগুলোকে স্পষ্ট রূপান্তরের মাধ্যমে সংখ্যায় পরিবর্তন করা।' },
        { en: 'ESLint and Biome configurations: enforcing the eqeqeq rule across enterprise frontends to forbid loose equality completely.', bn: 'লিন্ট কনফিগারেশন: লুজ সমতা সম্পূর্ণ নিষিদ্ধ করতে এন্টারপ্রাইজ ফ্রন্টএন্ডে eqeqeq নিয়ম কার্যকর করা।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Closures and Lexical Scope', bn: 'পরবর্তী পাঠ — ক্লোজার ও লেক্সিক্যাল স্কোপ' },
    },
    {
      type: 'para',
      text: {
        en: 'With primitives, objects, and equality mastered, Lesson 2 explores lexical environments, how closures retain access to outer variables, and how to avoid memory leaks.',
        bn: 'প্রিমিটিভ, অবজেক্ট ও সমতা আয়ত্ত করার পর, পাঠ ২ লেক্সিক্যাল এনভায়রনমেন্ট, কীভাবে ক্লোজার বাইরের ভেরিয়েবল ধরে রাখে এবং মেমরি লিক প্রতিরোধ শেখাবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'js-val-ex-1',
      kind: 'mcq',
      topic: 'primitives-count',
      question: {
        en: 'How many primitive data types exist in modern ECMAScript JavaScript?',
        bn: 'আধুনিক ইসিএমএস্ক্রিপ্ট জাভাস্ক্রিপ্টে মোট কয়টি প্রিমিটিভ ডেটা টাইপ বিদ্যমান?',
      },
      options: [
        { en: 'Exactly 7 primitive types (number, string, boolean, null, undefined, symbol, bigint)', bn: 'ঠিক ৭টি প্রিমিটিভ টাইপ (number, string, boolean, null, undefined, symbol, bigint)' },
        { en: 'Only 3 primitive types', bn: 'কেবল ৩টি প্রিমিটিভ টাইপ' },
        { en: 'Exactly 12 primitive types', bn: 'ঠিক ১২টি প্রিমিটিভ টাইপ' },
        { en: 'Zero primitive types', bn: '০টি প্রিমিটিভ টাইপ' },
      ],
      answer: 0,
      hint: { en: 'Number, String, Boolean, Null, Undefined, Symbol, BigInt = 7.', bn: 'সংখ্যা, স্ট্রিং, বুলিয়ান, নাল, আনডিফাইন্ড, সিম্বল, বিগইন্ট = ৭টি।' },
      explanation: {
        en: 'JavaScript has 7 primitive types: number, string, boolean, null, undefined, symbol, and bigint.',
        bn: 'জাভাস্ক্রিপ্টে ঠিক ৭টি প্রিমিটিভ টাইপ রয়েছে: number, string, boolean, null, undefined, symbol এবং bigint।',
      },
    },
    {
      id: 'js-val-ex-2',
      kind: 'mcq',
      topic: 'equality-sim-calc',
      question: {
        en: 'In our code simulation, what were the results of comparing "100" to 100 using loose (==) versus strict (===) equality, and what was the sum of the 3 scores?',
        bn: 'আমাদের কোড সিমুলেশনে লুজ (==) বনাম কঠোর (===) সমতা দিয়ে "100" ও 100 তুলনা করলে ফলাফল কী হয়েছিল এবং ৩টি স্কোরের যোগফল কত ছিল?',
      },
      options: [
        { en: '"100" == 100 is true; "100" === 100 is false; Scores sum = 270 across 3 items', bn: '"100" == 100 হলো true; "100" === 100 হলো false; ৩টি স্কোরের যোগফল = ২৭০' },
        { en: 'Both comparisons returned true; Scores sum = 500', bn: 'উভয় তুলনাই true ফেরত দিয়েছিল; স্কোরের যোগফল = ৫০০' },
        { en: 'Both comparisons returned false; Scores sum = 100', bn: 'উভয় তুলনাই false ফেরত দিয়েছিল; স্কোরের যোগফল = ১০০' },
        { en: '"100" == 100 is false; "100" === 100 is true; Scores sum = 0', bn: '"100" == 100 হলো false; "100" === 100 হলো true; স্কোরের যোগফল = ০' },
      ],
      answer: 0,
      hint: { en: 'Loose coerces string to number; strict checks type; 85 + 90 + 95 = 270.', bn: 'লুজ সমতা স্ট্রিংকে সংখ্যায় রূপান্তর করে; কঠোর সমতা টাইপ যাচাই করে; ৮৫ + ৯০ + ৯৫ = ২৭০।' },
      explanation: {
        en: 'Loose equality coerces "100" to 100 returning true, while strict equality finds types differ (string vs number) returning false. 85+90+95=270.',
        bn: 'লুজ সমতা "100" কে ১০০ সংখ্যায় রূপান্তর করে true দেয়, আর কঠোর সমতা টাইপ অমিল হওয়ায় false দেয়। ৮৫+৯০+৯৫=২৭০।',
      },
    },
    {
      id: 'js-val-ex-3',
      kind: 'mcq',
      topic: 'typeof-null-quirk',
      question: {
        en: 'What does the typeof operator return when evaluated on null (typeof null) in JavaScript?',
        bn: 'জাভাস্ক্রিপ্টে null এর ওপর typeof অপারেটর প্রয়োগ করলে (typeof null) কী মান ফেরত আসে?',
      },
      options: [
        { en: '"object" (a historical engine bug from 1995)', bn: '"object" (১৯৯৫ সালের একটি ঐতিহাসিক ইঞ্জিন ত্রুটি)' },
        { en: '"null"', bn: '"null"' },
        { en: '"undefined"', bn: '"undefined"' },
        { en: '"boolean"', bn: '"boolean"' },
      ],
      answer: 0,
      hint: { en: 'typeof null famously returns "object".', bn: 'typeof null বিশেষভাবে "object" ফেরত দেয়।' },
      explanation: {
        en: 'Due to a historical bug in the original 1995 implementation of JavaScript, typeof null evaluates to "object".',
        bn: '১৯৯৫ সালে জাভাস্ক্রিপ্ট তৈরির সময়কার একটি ঐতিহাসিক ভুলের কারণে typeof null মূল্যায়ন করলে "object" ফেরত আসে।',
      },
    },
    {
      id: 'js-val-ex-4',
      kind: 'predict',
      topic: 'nan-equality-recite',
      question: {
        en: 'What does the boolean expression NaN === NaN evaluate to in JavaScript?',
        bn: 'জাভাস্ক্রিপ্টে NaN === NaN বুলিয়ান এক্সপ্রেশনটি মূল্যায়ন করলে কী মান পাওয়া যায়?',
      },
      answer: 'false',
      accept: ['false', 'False'],
      hint: { en: 'NaN is the only value in JavaScript not equal to itself.', bn: 'NaN হলো জাভাস্ক্রিপ্টের একমাত্র মান যা নিজের সমান নয়।' },
      explanation: {
        en: 'According to the IEEE 754 floating-point specification and ECMAScript, NaN is never equal to any value, including itself.',
        bn: 'আইইইই ৭৫৪ এবং ইসিএমএস্ক্রিপ্ট স্পেসিফিকেশন অনুযায়ী NaN নিজের সমতুল্য হলেও কখনোই নিজের সমান হয় না (false)।',
      },
    },
  ],
  quiz: {
    id: 'values-coercion-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'js-val-q1',
        kind: 'mcq',
        topic: 'strict-equality-benefit',
        question: {
          en: 'Why do modern JavaScript style guides and linters require using strict equality (===) over loose equality (==)?',
          bn: 'আধুনিক জাভাস্ক্রিপ্ট স্টাইল গাইড ও লিন্টারগুলো লুজ সমতার (==) চেয়ে কঠোর সমতা (===) ব্যবহারের নির্দেশ কেন দেয়?',
        },
        options: [
          {
            en: 'Strict equality prevents unintended and confusing implicit type coercion bugs like "" == 0',
            bn: 'কঠোর সমতা "" == 0 এর মতো অনাকাঙ্ক্ষিত ও বিভ্রান্তিকর স্বয়ংক্রিয় টাইপ রূপান্তর জনিত ভুল প্রতিরোধ করে',
          },
          {
            en: '=== executes 10 times faster by utilizing dedicated hardware transistors',
            bn: '=== বিশেষ হার্ডওয়্যার ট্রানজিস্টর ব্যবহার করে ১০ গুণ দ্রুত চলে',
          },
          {
            en: '== was removed from the ECMAScript standard in 2020',
            bn: '২০২০ সালে ইসিএমএস্ক্রিপ্ট স্ট্যান্ডার্ড থেকে == সম্পূর্ণ মুছে ফেলা হয়েছে',
          },
          {
            en: '=== automatically encrypts the compared variables',
            bn: '=== তুলনা করা ভেরিয়েবলগুলোকে স্বয়ংক্রিয়ভাবে এনক্রিপ্ট করে ফেলে',
          },
        ],
        answer: 0,
        hint: { en: 'Strict equality eliminates implicit type coercion.', bn: 'কঠোর সমতা অনাকাঙ্ক্ষিত টাইপ রূপান্তর পুরোপুরি দূর করে।' },
        explanation: {
          en: 'Strict equality checks both type and value, preventing bugs where strings or booleans implicitly coerce to numbers.',
          bn: 'কঠোর সমতা টাইপ ও মান উভয়ই যাচাই করে, ফলে স্ট্রিং বা বুলিয়ান নিজে থেকে সংখ্যায় বদলে গিয়ে ভুল ফলাফল দিতে পারে না।',
        },
      },
      {
        id: 'js-val-q2',
        kind: 'mcq',
        topic: 'scores-sum-ref',
        question: {
          en: 'In our code walkthrough, what was the total aggregated sum calculated across the 3 scores (85, 90, 95)?',
          bn: 'আমাদের কোড আলোচনায় ৩টি স্কোরের (৮৫, ৯০, ৯৫) মোট সমষ্টি কত হিসাব করা হয়েছিল?',
        },
        options: [
          { en: '270 across 3 items', bn: '৩টি উপাদানে ২৭০' },
          { en: '100 across 2 items', bn: '২টি উপাদানে ১০০' },
          { en: '500 across 5 items', bn: '৫টি উপাদানে ৫০০' },
          { en: '0 across 0 items', bn: '০টি উপাদানে ০' },
        ],
        answer: 0,
        hint: { en: '85 + 90 + 95 = 270.', bn: '৮৫ + ৯০ + ৯৫ = ২৭০।' },
        explanation: {
          en: 'The simulation reduced the array [85, 90, 95] to a sum of 270.',
          bn: 'সিমুলেশনটিতে [৮৫, ৯০, ৯৫] অ্যারেটি যোগ করে মোট ২৭০ পাওয়া গিয়েছিল।',
        },
      },
      {
        id: 'js-val-q3',
        kind: 'mcq',
        topic: 'object-reference-mutation',
        question: {
          en: 'If const a = { count: 1 }; const b = a; b.count = 5; what is the value of a.count?',
          bn: 'যদি const a = { count: 1 }; const b = a; b.count = 5; লেখা হয়, তবে a.count এর মান কত হবে?',
        },
        options: [
          {
            en: '5, because objects are passed by reference and both variables point to the same object in memory',
            bn: '৫, কারণ অবজেক্ট রেফারেন্স দ্বারা পাস হয় এবং উভয় ভেরিয়েবলই মেমরির একই অবজেক্টকে নির্দেশ করে',
          },
          {
            en: '1, because a retains its original unmutated value',
            bn: '১, কারণ a তার মূল অপরিবর্তিত মান ধরে রাখে',
          },
          {
            en: 'undefined, because b overwrote the property completely',
            bn: 'undefined, কারণ b প্রপার্টিটিকে সম্পূর্ণ প্রতিস্থাপন করেছে',
          },
          {
            en: 'NaN, because arithmetic was not performed properly',
            bn: 'NaN, কারণ গণনা সঠিকভাবে সম্পন্ন হয়নি',
          },
        ],
        answer: 0,
        hint: { en: 'Objects share memory references.', bn: 'অবজেক্ট মেমরি রেফারেন্স শেয়ার করে।' },
        explanation: {
          en: 'Objects are stored in heap memory and assigned by reference; mutating properties on b mutates the shared object seen by a.',
          bn: 'অবজেক্ট হিপ মেমরিতে থাকে এবং রেফারেন্স দ্বারা পাস হয়; তাই b এর প্রপার্টি পরিবর্তন করলে a এর মানও বদলে যায়।',
        },
      },
      {
        id: 'js-val-q4',
        kind: 'predict',
        topic: 'nan-checker-method',
        question: {
          en: 'Which ECMAScript 6 static method on the Number object reliably checks whether a value is NaN without coercion?',
          bn: 'Number অবজেক্টের কোন ইসিএমএস্ক্রিপ্ট ৬ স্ট্যাটিক মেথডটি কোনো কোয়ার্শন ছাড়াই কোনো মান NaN কিনা তা নির্ভরযোগ্যভাবে পরীক্ষা করে?',
        },
        answer: 'Number.isNaN',
        accept: ['Number.isNaN', 'isNaN', 'Number.isNaN()'],
        hint: { en: 'Begins with Number.is...', bn: 'Number.is... দিয়ে শুরু হয়।' },
        explanation: {
          en: 'Number.isNaN() checks whether the passed value is NaN of type Number, avoiding the flawed coercion of global isNaN().',
          bn: 'Number.isNaN() কোনো কোয়ার্শন ছাড়াই মানটি সরাসরি NaN কিনা পরীক্ষা করে, যা গ্লোবাল isNaN() এর দুর্বলতা দূর করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'closures-and-the-scope',
    title: { en: 'Closures and Lexical Scope', bn: 'ক্লোজার ও লেক্সিক্যাল স্কোপ' },
  },
};
