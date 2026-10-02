import type { Lesson } from '../../../lib/types';

export const TypesAndTheAnnotationLesson: Lesson = {
  slug: 'types-and-the-annotation',
  tech: 'lang-typescript',
  title: {
    en: 'Types and Annotations — Primitive Types, Inference, and Type Erasure',
    bn: 'টাইপ ও অ্যানোটেশন — প্রিমিটিভ টাইপ, ইনফারেন্স ও টাইপ ইরেজার',
  },
  summary: {
    en: 'A beginner introduction to TypeScript type fundamentals: declare explicit primitive types (number, string, boolean), understand automatic compiler inference, leverage typed arrays and tuples, and master compile-time type erasure where all types vanish leaving zero runtime JavaScript overhead.',
    bn: 'টাইপস্ক্রিপ্ট টাইপের প্রাথমিক পরিচিতি: সুনির্দিষ্ট প্রিমিটিভ টাইপ (number, string, boolean) ঘোষণা, স্বয়ংক্রিয় কম্পাইলার ইনফারেন্স, টাইপড অ্যারে ও টাপল এবং কম্পাইল-টাইম টাইপ ইরেজার আয়ত্ত করা যেখানে সমস্ত টাইপ মুছে গিয়ে রানটাইমে শূন্য জাভাস্ক্রিপ্ট ওভারহেড বজায় রাখে।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Static types on JavaScript foundations', bn: 'WHAT — জাভাস্ক্রিপ্ট ভিত্তিতে স্ট্যাটিক টাইপ' },
    },
    {
      type: 'para',
      text: {
        en: 'When learning modern web development, TypeScript extends JavaScript by adding static type definitions right in your editor before runtime execution. Every variable, function parameter, and return value can carry an explicit type annotation like count: number or name: string. The compiler continuously verifies every assignment to prevent type mismatch bugs. At build time, the TypeScript compiler strips away every type annotation completely through type erasure, leaving clean, native JavaScript that executes with zero runtime overhead.',
        bn: 'আধুনিক ওয়েব ডেভেলপমেন্ট শেখার সময়, টাইপস্ক্রিপ্ট জাভাস্ক্রিপ্টের ওপর স্ট্যাটিক টাইপ ডেফিনিশন যুক্ত করে প্রোগ্রাম চালানোর আগেই এডিটরে ভুলগুলো ধরতে সাহায্য করে। প্রতিটি ভেরিয়েবল, ফাংশন প্যারামিটার এবং রিটার্ন ভ্যালুর সাথে count: number বা name: string এর মতো স্পষ্ট টাইপ অ্যানোটেশন দেওয়া যায়। কম্পাইলার কোডের প্রতিটি অ্যাসাইনমেন্ট যাচাই করে টাইপ অমিল জনিত বাগ প্রতিরোধ করে। বিল্ডের সময় টাইপস্ক্রিপ্ট কম্পাইলার সমস্ত টাইপ অ্যানোটেশন সম্পূর্ণ মুছে ফেলে (টাইপ ইরেজার), ফলে চূড়ান্ত জাভাস্ক্রিপ্টে কোনো বাড়তি মেমরি খরচ হয় না এবং কোড স্বাভাবিক গতিতে চলে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Type checking at compile time, zero overhead at runtime', bn: 'কম্পাইল-টাইমে টাইপ যাচাই এবং রানটাইমে শূন্য ওভারহেড' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="TypeScript compilation and type erasure">
<rect x="20" y="40" width="180" height="150" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="110" y="65" text-anchor="middle" font-size="12" font-weight="800" fill="#1e40af">TYPESCRIPT SOURCE</text>
<text x="35" y="95" font-family="monospace" font-size="11" fill="currentColor">let age: number = 25;</text>
<text x="35" y="120" font-family="monospace" font-size="11" fill="currentColor">let name: string = "Bob";</text>
<text x="35" y="145" font-family="monospace" font-size="11" fill="currentColor">let ok: boolean = true;</text>
<text x="110" y="175" text-anchor="middle" font-size="11" font-weight="600" fill="#2563eb">Static Type Checking ✓</text>

<line x1="210" y1="115" x2="270" y2="115" stroke="#4f46e5" stroke-width="2" marker-end="url(#arrow)"/>
<rect x="275" y="80" width="90" height="70" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
<text x="320" y="105" text-anchor="middle" font-size="12" font-weight="800" fill="#854d0e">COMPILER</text>
<text x="320" y="125" text-anchor="middle" font-size="11" font-weight="600" fill="#854d0e">tsc</text>
<text x="320" y="140" text-anchor="middle" font-size="10" fill="#a16207">Type Erasure</text>

<line x1="375" y1="115" x2="435" y2="115" stroke="#4f46e5" stroke-width="2"/>
<rect x="440" y="40" width="180" height="150" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="530" y="65" text-anchor="middle" font-size="12" font-weight="800" fill="#166534">EMITTED JAVASCRIPT</text>
<text x="455" y="95" font-family="monospace" font-size="11" fill="currentColor">let age = 25;</text>
<text x="455" y="120" font-family="monospace" font-size="11" fill="currentColor">let name = "Bob";</text>
<text x="455" y="145" font-family="monospace" font-size="11" fill="currentColor">let ok = true;</text>
<text x="530" y="175" text-anchor="middle" font-size="11" font-weight="600" fill="#16a34a">0 Bytes Extra Runtime</text>
<text x="320" y="220" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">Types exist for developer tooling; emitted code runs as pure JavaScript</text>
</svg>`,
      caption: {
        en: 'TypeScript verifies types during development and compilation. During the build, all annotations are erased, leaving clean JavaScript that runs without runtime penalties.',
        bn: 'টাইপস্ক্রিপ্ট ডেভেলপমেন্ট ও কম্পাইলেশনের সময় টাইপ যাচাই করে। বিল্ডের সময় সমস্ত অ্যানোটেশন মুছে ফেলা হয়, ফলে কোনো পারফরম্যান্স ক্ষতি ছাড়াই সাধারণ জাভাস্ক্রিপ্ট চলে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Type annotation',
          def: {
            en: 'Explicit syntax following a variable, parameter, or function (such as : number or : string) that declares its required data type to the compiler.',
            bn: 'ভেরিয়েবল, প্যারামিটার বা ফাংশনের পরে কোলন দিয়ে লেখা সুনির্দিষ্ট টাইপ ঘোষণা (যেমন : number বা : string) যা কম্পাইলারকে অনুমোদিত ডেটা টাইপ জানিয়ে দেয়।',
          },
        },
        {
          term: 'Type inference',
          def: {
            en: 'The compiler capability to automatically deduce the data type of an expression from its assigned value without requiring manual type annotations.',
            bn: 'অ্যাসাইন করা মান বিশ্লেষণ করে সরাসরি টাইপ না লিখেও কম্পাইলারের স্বয়ংক্রিয়ভাবে সঠিক টাইপ নির্ধারণ করার সক্ষমতা।',
          },
        },
        {
          term: 'Type erasure',
          def: {
            en: 'The build-time compilation process where all TypeScript type syntax is completely removed, producing pure JavaScript with zero runtime performance cost.',
            bn: 'বিল্ড-টাইম কম্পাইলেশন প্রক্রিয়া যেখানে সমস্ত টাইপস্ক্রিপ্ট সিনট্যাক্স সম্পূর্ণ মুছে ফেলা হয়, ফলে রানটাইমে কোনো বাড়তি পারফরম্যান্স খরচ থাকে না।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Shift errors left and eliminate runtime surprises', bn: 'কেন — ভুলগুলো রানটাইম থেকে এডিটরে সরিয়ে আনা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Catch type errors before code executes: typoed property names and undefined variable access are caught at compile time instead of causing production crashes.', bn: 'কোড চালানোর আগেই টাইপ ভুল ধরা: ভুল বানান বা আনডিফাইন্ড ভেরিয়েবল ব্যবহারের ভুলগুলো রানটাইম ক্র্যাশ করার বদলে কম্পাইল-টাইমেই ধরা পড়ে।' },
        { en: 'Type inference avoids repetitive code bloat: TypeScript automatically infers primitive types for initialized variables without requiring verbose boilerplate.', bn: 'ইনফারেন্স অপ্রয়োজনীয় কোড কমায়: ইনিশিয়ালাইজ করা ভেরিয়েবলের জন্য টাইপস্ক্রিপ্ট নিজে থেকেই সঠিক টাইপ বুঝে নেয়, ফলে বারবার টাইপ লেখার ঝামেলা থাকে না।' },
        { en: 'Zero runtime execution tax: because type annotations are fully erased during compilation, your emitted application code executes at native JavaScript speed.', bn: 'রানটাইমে বাড়তি কোনো খরচ নেই: কম্পাইলেশনের সময় টাইপ অ্যানোটেশন সম্পূর্ণ মুছে যাওয়ায় চূড়ান্ত কোড সাধারণ জাভাস্ক্রিপ্টের সমান গতিতে চলে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Core types and syntax in 4 steps', bn: 'HOW — ৪টি ধাপে মূল টাইপ ও সিনট্যাক্স' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Annotate primitives', bn: '১. প্রিমিটিভ অ্যানোটেশন' }, text: { en: 'Declare explicit types for number, string, and boolean variables.', bn: 'number, string এবং boolean ভেরিয়েবলের জন্য স্পষ্ট টাইপ ঘোষণা করুন।' } },
        { title: { en: '2. Define collections', bn: '২. অ্যারে ও টাপল গঠন' }, text: { en: 'Create typed arrays (number[]) and fixed-length typed tuples ([string, number]).', bn: 'টাইপড অ্যারে (number[]) এবং নির্দিষ্ট দৈর্ঘ্যের টাপল ([string, number]) তৈরি করুন।' } },
        { title: { en: '3. Leverage inference', bn: '৩. ইনফারেন্স ব্যবহার' }, text: { en: 'Allow TypeScript to infer primitive types automatically when initializing constants.', bn: 'কনস্ট্যান্ট ইনিশিয়ালাইজ করার সময় টাইপস্ক্রিপ্টকে স্বয়ংক্রিয়ভাবে টাইপ অনুমান করতে দিন।' } },
        { title: { en: '4. Choose unknown over any', bn: '৪. any এর বদলে unknown' }, text: { en: 'Use unknown for untrusted external data to force type-safe narrowing before usage.', bn: 'অবিশ্বস্ত ডেটার ক্ষেত্রে unknown ব্যবহার করুন যাতে ব্যবহারের পূর্বে টাইপ নিশ্চিত করা বাধ্যতামূলক হয়।' } },
      ],
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'type_annotation_sim.ts',
      code: `interface UserRecord {
  name: string;
  age: number;
  active: boolean;
}

// 1. Primitive explicit annotations
const user: UserRecord = { name: "Rahim", age: 25, active: true };

// 2. Typed arrays and fixed tuples
const scores: number[] = [88, 92, 95];
const tuple: [string, number] = ["ID-101", 3];

// 3. Mathematical operations with verified types
const scoresSum = scores.reduce((acc, val) => acc + val, 0);

console.log("TypeScript Primitives and Annotations:");
console.log("User: " + user.name + ", Age: " + user.age + ", Active: " + user.active);
console.log("Array scores count: " + scores.length + ", sum: " + scoresSum);
console.log("Tuple record: label = " + tuple[0] + ", count = " + tuple[1]);
console.log("Type Erasure: typeof user in JS runtime is \\"" + typeof user + "\\" (types erased)");

// Output:
// TypeScript Primitives and Annotations:
// User: Rahim, Age: 25, Active: true
// Array scores count: 3, sum: 275
// Tuple record: label = ID-101, count = 3
// Type Erasure: typeof user in JS runtime is "object" (types erased)`,
      caption: {
        en: 'The TypeScript script demonstrates explicit primitive types, array aggregations (3 scores summing to 275), and fixed tuples (label ID-101 with count 3); in runtime JavaScript, all interfaces vanish into plain objects.',
        bn: 'টাইপস্ক্রিপ্ট স্ক্রিপ্টটি সুনির্দিষ্ট প্রিমিটিভ টাইপ, অ্যারে যোগফল (৩টি স্কোরের সমষ্টি ২৭৫) এবং নির্দিষ্ট টাপল (লেবেল ID-101 ও কাউন্ট ৩) প্রদর্শন করে; রানটাইমে সমস্ত ইন্টারফেস মুছে সাধারণ অবজেক্টে পরিণত হয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive type annotations lab', bn: 'INSIDE — জীবন্ত টাইপ অ্যানোটেশন ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive simulator demonstrates static typing and runtime evaluation. Three score numbers [88, 92, 95] sum to 275, while a 2-element tuple holds a string identifier and an item count of 3. If you edit the values, notice that the JavaScript runtime inspects only raw numbers and strings: the TypeScript annotations vanish at compile time.',
        bn: 'এই ইন্টারেক্টিভ সিমুলেটরটি স্ট্যাটিক টাইপিং এবং রানটাইম হিসাব প্রদর্শন করে। তিনটি স্কোরের সংখ্যা [৮৮, ৯২, ৯৫] যোগ হয়ে ২৭৫ হয় এবং ২-উপাদানের একটি টাপল স্ট্রিং শনাক্তকারী ও সংখ্যা ৩ ধারণ করে। মান পরিবর্তন করলে লক্ষ্য করবেন জাভাস্ক্রিপ্ট রানটাইমে কেবল সাধারণ সংখ্যা ও স্ট্রিংই থাকে: টাইপস্ক্রিপ্ট অ্যানোটেশন কম্পাইল-টাইমেই মুছে যায়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Type lab (modify scores, press Run)', bn: 'Type lab (স্কোর পরিবর্তন করুন, Run)' },
      html: '<h3>TypeScript Primitives & Erasure</h3>\n<pre id="out"></pre>\n<p>Console displays typed calculations.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const scores = [88, 92, 95]; // try [90, 85, 100]!\nconst sum = scores.reduce((a, b) => a + b, 0);\nconst tuple = ["ID-101", 3];\nconsole.log("scores: " + scores.length + " items, sum = " + sum);\nconsole.log("tuple: " + tuple[0] + " count " + tuple[1]);\ndocument.getElementById("out").textContent = "scores sum: " + sum + " · tuple: " + tuple[0] + " (" + tuple[1] + " items) · types erased ✓";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Core typing principles', bn: 'ফলাফল — টাইপিংয়ের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Type discipline: explicit primitive types (number, string, boolean) and structured collections guarantee data integrity during development.', bn: 'টাইপ শৃঙ্খলা: সুনির্দিষ্ট প্রিমিটিভ টাইপ (number, string, boolean) এবং সুগঠিত ডেটা কাঠামো ডেভেলপমেন্টের সময় ডেটার নির্ভরযোগ্যতা নিশ্চিত করে।' },
        { en: 'Zero runtime footprint: compilation removes 100% of TypeScript type syntax, guaranteeing that applications run with pure JavaScript speed.', bn: 'রানটাইমে শূন্য ওভারহেড: কম্পাইলেশন ১০০% টাইপস্ক্রিপ্ট সিনট্যাক্স সরিয়ে ফেলে, যার ফলে অ্যাপ্লিকেশন সাধারণ জাভাস্ক্রিপ্টের সমান দ্রুতগতিতে চলে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common annotation pitfalls', bn: 'ডিবাগ — টাইপ অ্যানোটেশনের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'The any contagion (the silent disabler)', bn: 'any ব্যবহারের ঝুঁকি (The any contagion)' },
      text: {
        en: 'Using any turns off the TypeScript compiler for that variable, allowing invalid method calls and spreading untyped assumptions across downstream functions. Symptoms: code compiles without errors but crashes at runtime with “is not a function”. Cure: use unknown for unpredictable values, enforcing type narrowing before use.',
        bn: 'any ব্যবহার করলে সংশ্লিষ্ট ভেরিয়েবলের জন্য টাইপ চেকার নিষ্ক্রিয় হয়ে যায়, ফলে ভুল মেথড কল হলেও কম্পাইলার সতর্ক করে না। লক্ষণ: কোনো এরর ছাড়া কোড কম্পাইল হলেও রানটাইমে ক্র্যাশ করা। প্রতিকার: অনিশ্চিত ডেটার জন্য unknown ব্যবহার করুন যা ব্যবহারের পূর্বে টাইপ নিশ্চিত করা বাধ্যতামূলক করে।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Excess property checks on object literals', bn: 'অবজেক্ট লিটারেলে অতিরিক্ত প্রপার্টি যাচাই' },
      text: {
        en: 'Direct object literals passed to typed interfaces trigger strict excess property checks, flagging misspelled properties as errors. However, assigning the object to an intermediate variable first bypasses this check due to structural compatibility. Cure: write inline object literals to ensure typo detection.',
        bn: 'টাইপড ইন্টারফেসে সরাসরি অবজেক্ট লিটারেল পাঠালে অতিরিক্ত প্রপার্টি কঠোরভাবে যাচাই করা হয় এবং বানানের ভুল ধরা পড়ে। তবে অবজেক্টটি আগে অন্য ভেরিয়েবলে রাখলে স্ট্রাকচারাল টাইপিংয়ের কারণে এই অতিরিক্ত ফিল্ড চেকিং বন্ধ হয়ে যায়। প্রতিকার: বানানের ভুল ধরতে সরাসরি ইনলাইন অবজেক্ট ব্যবহার করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production codebases', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইন্ডাস্ট্রিতে টাইপস্ক্রিপ্ট' },
    },
    {
      type: 'list',
      items: [
        { en: 'Major technology companies (Microsoft, Airbnb, Stripe): standardize on strict TypeScript to prevent null reference errors across distributed teams.', bn: 'শীর্ষ প্রযুক্তি প্রতিষ্ঠান (Microsoft, Airbnb, Stripe): বড় প্রকৌশল দলগুলোতে নাল রেফারেন্স এরর দূর করতে কঠোর টাইপস্ক্রিপ্ট ব্যবহার করে।' },
        { en: 'Full-stack web frameworks (Next.js, Remix, Nuxt): share TypeScript interfaces across client API calls and server routes without duplication.', bn: 'ফুল-স্ট্যাক ওয়েব ফ্রেমওয়ার্ক (Next.js, Remix, Nuxt): কোনো ডুপ্লিকেশন ছাড়াই ক্লায়েন্ট ও সার্ভারের মধ্যে ইন্টারফেস শেয়ার করে।' },
        { en: 'Open-source npm package ecosystem: distributes declaration files (.d.ts) so consumers receive rich IDE autocompletion and compiler validation.', bn: 'ওপেন-সোর্স এনপিএম প্যাকেজ: ডিক্লারেশন ফাইল (.d.ts) বিতরণ করে যাতে ব্যবহারকারীরা এডিটরে স্বয়ংক্রিয় সাজেশন এবং টাইপ সুরক্ষা পায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Unions and Narrowing', bn: 'পরবর্তী পাঠ — ইউনিয়ন ও টাইপ ন্যারোয়িং' },
    },
    {
      type: 'para',
      text: {
        en: 'With primitive types and type erasure mastered, Lesson 2 explores union types, literal types, and control-flow type narrowing using typeof and equality checks.',
        bn: 'প্রিমিটিভ টাইপ ও টাইপ ইরেজার আয়ত্ত করার পর, পাঠ ২ ইউনিয়ন টাইপ, লিটারেল টাইপ এবং typeof ও সমতা যাচাইয়ের মাধ্যমে কন্ট্রোল-ফ্লো টাইপ ন্যারোয়িং শেখাবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'ts-ann-ex-1',
      kind: 'mcq',
      topic: 'primitive-syntax',
      question: {
        en: 'Which TypeScript statement correctly declares an explicit primitive type annotation for an integer count?',
        bn: 'কোন টাইপস্ক্রিপ্ট স্টেটমেন্টটি একটি পূর্ণসংখ্যার জন্য সঠিক প্রিমিটিভ টাইপ অ্যানোটেশন ঘোষণা করে?',
      },
      options: [
        { en: 'let count: number = 25;', bn: 'let count: number = ২৫;' },
        { en: 'let count = Integer(25);', bn: 'let count = Integer(২৫);' },
        { en: 'number count = 25;', bn: 'number count = ২৫;' },
        { en: 'let count: Int = 25;', bn: 'let count: Int = ২৫;' },
      ],
      answer: 0,
      hint: { en: 'TypeScript uses colon followed by lower-case type name (number).', bn: 'টাইপস্ক্রিপ্টে ভেরিয়েবলের নামের পর কোলন এবং ছোট হাতের টাইপ নাম (number) বসে।' },
      explanation: {
        en: 'In TypeScript, type annotations use the syntax variable: type = value. All JavaScript numeric values belong to the number type.',
        bn: 'টাইপস্ক্রিপ্টে variable: type = value সিনট্যাক্স ব্যবহৃত হয়। জাভাস্ক্রিপ্টের সমস্ত সংখ্যা number টাইপের অন্তর্ভুক্ত।',
      },
    },
    {
      id: 'ts-ann-ex-2',
      kind: 'mcq',
      topic: 'array-tuple',
      question: {
        en: 'In the code simulation, what is the sum of the 3 array scores [88, 92, 95] and how many elements does the tuple hold?',
        bn: 'কোড সিমুলেশনে, ৩টি অ্যারে স্কোরের [৮৮, ৯২, ৯৫] যোগফল কত এবং টাপলটিতে কয়টি উপাদান রয়েছে?',
      },
      options: [
        { en: 'Sum = 275 across 3 scores; tuple holds 2 elements (["ID-101", 3])', bn: '৩টি স্কোরের যোগফল = ২৭৫; টাপলটিতে ২টি উপাদান রয়েছে (["ID-101", ৩])' },
        { en: 'Sum = 200 across 2 scores; tuple holds 5 elements', bn: '২টি স্কোরের যোগফল = ২০০; টাপলটিতে ৫টি উপাদান রয়েছে' },
        { en: 'Sum = 100 across 3 scores; tuple holds 1 element', bn: '৩টি স্কোরের যোগফল = ১০০; টাপলটিতে ১টি উপাদান রয়েছে' },
        { en: 'Sum = 300 across 4 scores; tuple holds 0 elements', bn: '৪টি স্কোরের যোগফল = ৩০০; টাপলটিতে ০টি উপাদান রয়েছে' },
      ],
      answer: 0,
      hint: { en: '88 + 92 + 95 = 275; the tuple is [string, number].', bn: '৮৮ + ৯২ + ৯৫ = ২৭৫; টাপলটি হলো [string, number]।' },
      explanation: {
        en: '88 + 92 + 95 = 275. The tuple ["ID-101", 3] is a fixed-length collection holding exactly 2 elements with specific types at each index.',
        bn: '৮৮ + ৯২ + ৯৫ = ২৭৫। ["ID-101", ৩] টাপলটি একটি নির্দিষ্ট দৈর্ঘ্যের সংগ্রহ যাতে প্রতিটি ইনডেক্সে নির্ধারিত টাইপসহ ঠিক ২টি উপাদান থাকে।',
      },
    },
    {
      id: 'ts-ann-ex-3',
      kind: 'mcq',
      topic: 'unknown-vs-any',
      question: {
        en: 'Why is unknown considered significantly safer than any when accepting data from an external network API?',
        bn: 'বাহ্যিক নেটওয়ার্ক এপিআই থেকে ডেটা গ্রহণের সময় any এর চেয়ে unknown কেন উল্লেখযোগ্যভাবে নিরাপদ?',
      },
      options: [
        {
          en: 'unknown prevents direct property access until the developer narrows the type using checks like typeof or instanceof',
          bn: 'unknown প্রপার্টি ব্যবহারে বাধা দেয় যতক্ষণ না ডেভেলপার typeof বা instanceof দিয়ে টাইপ নিশ্চিত করেন',
        },
        {
          en: 'unknown automatically converts strings into numbers at runtime',
          bn: 'unknown রানটাইমে স্ট্রিংকে স্বয়ংক্রিয়ভাবে সংখ্যায় রূপান্তর করে',
        },
        {
          en: 'unknown deletes external network errors completely',
          bn: 'unknown বাহ্যিক নেটওয়ার্ক এরর সম্পূর্ণরূপে মুছে ফেলে',
        },
        {
          en: 'any executes slower than unknown inside the V8 engine',
          bn: 'V8 ইঞ্জিনের ভেতর any এর গতি unknown এর চেয়ে ধীর',
        },
      ],
      answer: 0,
      hint: { en: 'unknown enforces type checks before allowing method calls or property access.', bn: 'unknown কোনো মেথড কল করার পূর্বে টাইপ যাচাই করতে বাধ্য করে।' },
      explanation: {
        en: 'any shuts down the type checker, allowing runtime crashes. In contrast, unknown forces developers to verify the type before operating on the value.',
        bn: 'any টাইপ চেকার নিষ্ক্রিয় করে দেয় যা রানটাইম ক্র্যাশ ডেকে আনে। বিপরীতে unknown ব্যবহারের আগে টাইপ যাচাই বাধ্যতামূলক করে সুরক্ষা দেয়।',
      },
    },
    {
      id: 'ts-ann-ex-4',
      kind: 'predict',
      topic: 'erasure-meaning',
      question: {
        en: 'What happens to TypeScript type annotations (such as : number or interface User) when code is compiled to JavaScript?',
        bn: 'যখন টাইপস্ক্রিপ্ট কোড জাভাস্ক্রিপ্টে কম্পাইল করা হয়, তখন টাইপ অ্যানোটেশনগুলোর (: number বা interface User) কী ঘটে?',
      },
      answer: 'All types are completely erased: zero runtime bytes or overhead.',
      accept: ['erased', 'erase', 'removed', 'strip', 'deleted', 'zero', 'disappear'],
      hint: { en: 'Recall the concept of compile-time type erasure producing zero runtime overhead.', bn: 'কম্পাইল-টাইম টাইপ ইরেজারের ধারণা মনে করুন যা রানটাইমে কোনো ওভারহেড রাখে না।' },
      explanation: {
        en: 'Through type erasure, all TypeScript type annotations and interfaces are completely deleted during compilation, emitting pure JavaScript.',
        bn: 'টাইপ ইরেজারের মাধ্যমে কম্পাইলেশনের সময় সমস্ত টাইপ অ্যানোটেশন ও ইন্টারফেস মুছে ফেলা হয় এবং কেবল সাধারণ জাভাস্ক্রিপ্ট প্রস্তুত হয়।',
      },
    },
  ],
  quiz: {
    id: 'types-annotation-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'tsq1',
        kind: 'mcq',
        topic: 'annotation-purpose',
        question: {
          en: 'What is the primary role of static type annotations in TypeScript during application development?',
          bn: 'অ্যাপ্লিকেশন ডেভেলপমেন্টের সময় টাইপস্ক্রিপ্টে স্ট্যাটিক টাইপ অ্যানোটেশনের মূল ভূমিকা কী?',
        },
        options: [
          {
            en: 'They establish compile-time contracts verified by the compiler and editor to prevent type mismatch bugs before execution',
            bn: 'তারা কম্পাইল-টাইম চুক্তি স্থাপন করে যা কম্পাইলার ও এডিটর যাচাই করে কোড চলার আগেই টাইপ অমিল জনিত ভুল প্রতিরোধ করে',
          },
          {
            en: 'They encrypt application variables to prevent security inspection',
            bn: 'তারা ভেরিয়েবলগুলোকে এনক্রিপ্ট করে নিরাপত্তা নিশ্চিত করে',
          },
          {
            en: 'They allocate dedicated operating system threads for every variable',
            bn: 'তারা প্রতিটি ভেরিয়েবলের জন্য অপারেটিং সিস্টেমের আলাদা থ্রেড বরাদ্দ করে',
          },
          {
            en: 'They force JavaScript engines to execute mathematical operations in 64-bit integer mode',
            bn: 'তারা জাভাস্ক্রিপ্ট ইঞ্জিনকে ৬৪-বিট ইন্টিজার মোডে গণনা করতে বাধ্য করে',
          },
        ],
        answer: 0,
        hint: { en: 'Annotations provide tooling contracts checked before runtime.', bn: 'অ্যানোটেশন হলো রানটাইমের পূর্বে পরীক্ষিত টুলিং চুক্তি।' },
        explanation: {
          en: 'TypeScript annotations exist to help the developer and compiler audit code correctness, catching subtle bugs before runtime.',
          bn: 'টাইপস্ক্রিপ্ট অ্যানোটেশন প্রোগ্রামার ও কম্পাইলারকে কোডের নির্ভুলতা যাচাই করতে সাহায্য করে যাতে রানটাইমের আগেই ভুল ধরা পড়ে।',
        },
      },
      {
        id: 'tsq2',
        kind: 'mcq',
        topic: 'runtime-impact',
        question: {
          en: 'How much runtime performance overhead or extra memory footprint do TypeScript type annotations add to emitted JavaScript?',
          bn: 'চূড়ান্ত জাভাস্ক্রিপ্টে টাইপস্ক্রিপ্ট টাইপ অ্যানোটেশনগুলো কতটুকু রানটাইম পারফরম্যান্স ওভারহেড বা বাড়তি মেমরি খরচ যোগ করে?',
        },
        options: [
          {
            en: 'Zero bytes and zero overhead — all type annotations are fully erased at compile time',
            bn: 'শূন্য বাইট এবং শূন্য ওভারহেড — কম্পাইল-টাইমে সমস্ত টাইপ অ্যানোটেশন সম্পূর্ণ মুছে ফেলা হয়',
          },
          {
            en: 'Exactly 8 bytes of metadata per declared variable',
            bn: 'ঘোষিত প্রতিটি ভেরিয়েবলের জন্য ঠিক ৮ বাইট মেটাডেটা',
          },
          {
            en: 'Double the memory consumption of standard JavaScript',
            bn: 'সাধারণ জাভাস্ক্রিপ্টের তুলনায় দ্বিগুণ মেমরি খরচ',
          },
          {
            en: 'A 15% execution slowdown during function invocation',
            bn: 'ফাংশন কলের সময় ১৫% গতি হ্রাস',
          },
        ],
        answer: 0,
        hint: { en: 'Types are purely compile-time constructs erased during build.', bn: 'টাইপগুলো কেবল কম্পাইল-টাইমে থাকে এবং বিল্ডের সময় মুছে যায়।' },
        explanation: {
          en: 'Because TypeScript performs complete type erasure during the build, emitted code is standard JavaScript running with zero extra overhead.',
          bn: 'বিল্ডের সময় টাইপস্ক্রিপ্ট সমস্ত টাইপ মুছে ফেলে বলে চূড়ান্ত কোড সাধারণ জাভাস্ক্রিপ্ট হিসেবে চলে এবং বাড়তি কোনো খরচ হয় না।',
        },
      },
      {
        id: 'tsq3',
        kind: 'mcq',
        topic: 'inference-benefit',
        question: {
          en: 'When a variable is declared as const message = "Hello, World!"; what does TypeScript automatically infer?',
          bn: 'যখন কোনো ভেরিয়েবল const message = "Hello, World!"; হিসেবে ঘোষিত হয়, তখন টাইপস্ক্রিপ্ট স্বয়ংক্রিয়ভাবে কী অনুমান করে?',
        },
        options: [
          {
            en: 'It infers the literal string type "Hello, World!" because a const variable can never be reassigned',
            bn: 'এটি লিটারেল স্ট্রিং টাইপ "Hello, World!" অনুমান করে কারণ const ভেরিয়েবল কখনোই পরিবর্তন করা যায় না',
          },
          {
            en: 'It infers the type as any because no explicit colon was written',
            bn: 'কোলন না লেখায় এটি any টাইপ অনুমান করে',
          },
          {
            en: 'It marks the variable as an uninitialized unknown',
            bn: 'এটি ভেরিয়েবলটিকে অজানা হিসেবে চিহ্নিত করে',
          },
          {
            en: 'It throws a syntax error requiring an explicit : string annotation',
            bn: 'সুনির্দিষ্ট : string অ্যানোটেশন দাবি করে সিনট্যাক্স এরর দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'const variables narrow to literal types because their value is immutable.', bn: 'const ভেরিয়েবলের মান অপরিবর্তনীয় হওয়ায় তা লিটারেল টাইপে সংকুচিত হয়।' },
        explanation: {
          en: 'TypeScript infers the narrowest possible type: for const primitive assignments, it infers the literal type "Hello, World!".',
          bn: 'টাইপস্ক্রিপ্ট সবচেয়ে সুনির্দিষ্ট টাইপ অনুমান করে: const প্রিমিটিভের ক্ষেত্রে এটি লিটারেল টাইপ "Hello, World!" নির্ধারণ করে।',
        },
      },
      {
        id: 'tsq4',
        kind: 'predict',
        topic: 'primitives-recite',
        question: {
          en: 'What are the three core JavaScript primitive types supported by TypeScript type annotations?',
          bn: 'টাইপস্ক্রিপ্ট টাইপ অ্যানোটেশনে সমর্থিত জাভাস্ক্রিপ্টের তিনটি মূল প্রিমিটিভ টাইপ কী কী?',
        },
        answer: 'number, string, boolean',
        accept: ['number', 'string', 'boolean', 'primitives'],
        hint: { en: 'Name numeric values, text values, and true/false values in lowercase.', bn: 'সংখ্যা, টেক্সট এবং সত্য/মিথ্যা মান বোঝায় এমন তিনটি টাইপের নাম বলুন।' },
        explanation: {
          en: 'The three primary primitive types are number, string, and boolean. All complex types build upon these fundamentals.',
          bn: 'তিনটি প্রাথমিক প্রিমিটিভ টাইপ হলো number, string এবং boolean। সমস্ত জটিল টাইপ এদের ভিত্তির ওপরই গড়ে ওঠে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'unions-and-the-narrow',
    title: { en: 'Unions and Narrowing', bn: 'ইউনিয়ন ও টাইপ ন্যারোয়িং' },
  },
};
