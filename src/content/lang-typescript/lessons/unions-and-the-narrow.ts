import type { Lesson } from '../../../lib/types';

export const UnionsAndTheNarrowLesson: Lesson = {
  slug: 'unions-and-the-narrow',
  tech: 'lang-typescript',
  title: {
    en: 'Unions and Narrowing — Discriminated Unions and Type Guards',
    bn: 'ইউনিয়ন ও টাইপ ন্যারোয়িং — ডিসক্রিমিনেটেড ইউনিয়ন ও টাইপ গার্ড',
  },
  summary: {
    en: 'Master TypeScript union types (A | B), literal unions, and safe control-flow narrowing using typeof checks, truthiness guards, in operators, and discriminated unions with exhaustive switch pattern matching.',
    bn: 'টাইপস্ক্রিপ্ট ইউনিয়ন টাইপ (A | B), লিটারেল ইউনিয়ন এবং typeof চেক, ট্রুথিনেস গার্ড, in অপারেটর ও পুঙ্খানুপুঙ্খ সুইচ প্যাটার্ন ম্যাচিংসহ ডিসক্রিমিনেটেড ইউনিয়ন ব্যবহার করে নিরাপদ কন্ট্রোল-ফ্লো ন্যারোয়িং আয়ত্ত করুন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Polymorphic data modeled through union types', bn: 'WHAT — ইউনিয়ন টাইপের মাধ্যমে বহুরূপী ডেটা মডেলিং' },
    },
    {
      type: 'para',
      text: {
        en: 'Real-world data is rarely homogeneous: an API response may return either a user object or an error payload, and a payment identifier might be a numeric timestamp or an alphanumeric string. TypeScript models these flexible scenarios using union types joined by the pipe (|) operator. To safely access properties specific to one branch, TypeScript uses control flow analysis. Checking the runtime type with typeof, instanceof, or a discriminator tag narrows the broad union into a specific type within that block.',
        bn: 'বাস্তব জীবনের ডেটা সবসময় একই ধরনের হয় না: একটি এপিআই রেসপন্স হয়তো সফল ইউজার অবজেক্ট অথবা এরর মেসেজ পাঠাতে পারে, আবার পেমেন্ট আইডি হতে পারে কোনো সংখ্যা অথবা স্ট্রিং। টাইপস্ক্রিপ্ট এই পরিবর্তনশীল পরিস্থিতিগুলোকে পাইপ (|) অপারেটর দিয়ে ইউনিয়ন টাইপের মাধ্যমে প্রকাশ করে। ইউনিয়নের নির্দিষ্ট শাখার প্রপার্টি নিরাপদে ব্যবহার করার জন্য টাইপস্ক্রিপ্ট কন্ট্রোল ফ্লো অ্যানালাইসিস ব্যবহার করে। রানটাইমে typeof, instanceof বা ডিসক্রিমিনেটর ট্যাগ দিয়ে যাচাই করলে শর্তাধীন ব্লকের ভেতরে বিস্তৃত ইউনিয়নটি সুনির্দিষ্ট টাইপে সংকুচিত (narrowed) হয়ে যায়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Control flow narrowing across discriminated branches', bn: 'ডিসক্রিমিনেটেড শাখার মাধ্যমে কন্ট্রোল ফ্লো ন্যারোয়িং' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="TypeScript discriminated union narrowing diagram">
<rect x="230" y="20" width="180" height="50" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="320" y="42" text-anchor="middle" font-size="12" font-weight="800" fill="#1e40af">UNION TYPE</text>
<text x="320" y="58" text-anchor="middle" font-size="11" font-family="monospace" fill="currentColor">Circle | Square | Rect</text>

<line x1="320" y1="70" x2="320" y2="105" stroke="#4f46e5" stroke-width="2"/>
<polygon points="320,105 250,135 320,165 390,135" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
<text x="320" y="132" text-anchor="middle" font-size="11" font-weight="700" fill="#854d0e">DISCRIMINATOR</text>
<text x="320" y="146" text-anchor="middle" font-size="10" font-family="monospace" fill="#854d0e">shape.kind</text>

<line x1="250" y1="135" x2="110" y2="135" stroke="#2563eb" stroke-width="2"/>
<line x1="110" y1="135" x2="110" y2="175" stroke="#2563eb" stroke-width="2"/>
<rect x="20" y="175" width="180" height="50" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="110" y="195" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">BRANCH: "circle"</text>
<text x="110" y="212" text-anchor="middle" font-size="11" font-family="monospace" fill="currentColor">shape.radius safe ✓</text>

<line x1="320" y1="165" x2="320" y2="175" stroke="#2563eb" stroke-width="2"/>
<rect x="230" y="175" width="180" height="50" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="320" y="195" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">BRANCH: "square"</text>
<text x="320" y="212" text-anchor="middle" font-size="11" font-family="monospace" fill="currentColor">shape.size safe ✓</text>

<line x1="390" y1="135" x2="530" y2="135" stroke="#2563eb" stroke-width="2"/>
<line x1="530" y1="135" x2="530" y2="175" stroke="#2563eb" stroke-width="2"/>
<rect x="440" y="175" width="180" height="50" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="530" y="195" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">BRANCH: "rectangle"</text>
<text x="530" y="212" text-anchor="middle" font-size="11" font-family="monospace" fill="currentColor">shape.width/height ✓</text>
</svg>`,
      caption: {
        en: 'TypeScript inspects the literal discriminator property (kind). Inside each switch branch, the compiler narrows the shape to its specific interface, unlocking access to variant-specific fields.',
        bn: 'টাইপস্ক্রিপ্ট লিটারেল ডিসক্রিমিনেটর প্রপার্টি (kind) পরীক্ষা করে। প্রতিটি সুইচ ব্রাঞ্চের ভেতরে কম্পাইলার আকারটিকে সুনির্দিষ্ট ইন্টারফেসে সংকুচিত করে, ফলে নির্দিষ্ট ফিল্ডগুলো নিরাপদে অ্যাক্সেস করা যায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Union type',
          def: {
            en: 'A type formed from two or more existing types using the pipe operator (|), representing a value that can match any of those member types.',
            bn: 'পাইপ (|) অপারেটর ব্যবহার করে দুই বা ততোধিক টাইপ একত্রিত করে গঠিত টাইপ, যা এর যেকোনো সদস্য টাইপের মান গ্রহণ করতে পারে।',
          },
        },
        {
          term: 'Type narrowing',
          def: {
            en: 'The compiler refinement of a broad union type into a more specific type based on conditional runtime checks such as typeof, instanceof, or property tests.',
            bn: 'রানটাইমে typeof, instanceof বা প্রপার্টি যাচাইয়ের মাধ্যমে একটি বিস্তৃত ইউনিয়নকে কম্পাইলার কর্তৃক সুনির্দিষ্ট টাইপে সীমাবদ্ধ করার প্রক্রিয়া।',
          },
        },
        {
          term: 'Discriminated union',
          def: {
            en: 'A union of object types that share a common literal discriminator property (such as kind: "circle" or kind: "square"), enabling exhaustive switch branching.',
            bn: 'অবজেক্ট টাইপের এমন একটি ইউনিয়ন যাদের সবার একটি অভিন্ন লিটারেল ট্যাগ প্রপার্টি (যেমন kind: "circle" বা kind: "square") থাকে, যা সুইচ স্টেটমেন্টের মাধ্যমে সম্পূর্ণ নির্ভুল ব্রাঞ্চিং নিশ্চিত করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Eliminating runtime type cast exceptions', bn: 'কেন — রানটাইম টাইপ কাস্টিং এরর দূর করা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Express genuine polymorphic application states (such as Loading, Success, or Error) with compile-time mathematical safety.', bn: 'কম্পাইল-টাইম নির্ভুলতার সাথে অ্যাপ্লিকেশনের বিভিন্ন বহুরূপী অবস্থা (যেমন Loading, Success, Error) সুন্দরভাবে প্রকাশ করা যায়।' },
        { en: 'Forbid unsafe property access: the TypeScript compiler blocks accessing properties that do not exist across all members of an un-narrowed union.', bn: 'অনিরাপদ প্রপার্টি এক্সেস প্রতিরোধ: ন্যারোয়িং না করে সব সদস্যের মধ্যে বিদ্যমান নেই এমন প্রপার্টি এক্সেস করার চেষ্টা কম্পাইলার সরাসরি আটকে দেয়।' },
        { en: 'Exhaustiveness checking: adding a new variant triggers compile errors at every switch statement that fails to handle the new case.', bn: 'সম্পূর্ণতা যাচাই (Exhaustiveness): নতুন কোনো টাইপ ভ্যারিয়েন্ট যোগ করলে যেসব সুইচ ব্লকে তা হ্যান্ডেল করা হয়নি সেখানে স্বয়ংক্রিয়ভাবে কম্পাইল এরর দেখায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Narrowing techniques in 4 steps', bn: 'HOW — ৪টি ধাপে ন্যারোয়িং কৌশল' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Declare union types', bn: '১. ইউনিয়ন টাইপ ঘোষণা' }, text: { en: 'Combine primitive or object types with the pipe (|) operator.', bn: 'পাইপ (|) অপারেটর দিয়ে প্রিমিটিভ বা অবজেক্ট টাইপ যুক্ত করুন।' } },
        { title: { en: '2. Check primitive types', bn: '২. প্রিমিটিভ টাইপ যাচাই' }, text: { en: 'Use typeof expressions (e.g. typeof id === "string") to branch logic.', bn: 'typeof এক্সপ্রেশন (যেমন typeof id === "string") দিয়ে লজিক আলাদা করুন।' } },
        { title: { en: '3. Attach discriminator tags', bn: '৩. ডিসক্রিমিনেটর ট্যাগ যোগ' }, text: { en: 'Include a common literal property like kind or status on every object variant.', bn: 'প্রতিটি অবজেক্ট ভ্যারিয়েন্টে kind বা status এর মতো একটি অভিন্ন লিটারেল প্রপার্টি রাখুন।' } },
        { title: { en: '4. Enforce exhaustive switches', bn: '৪. পুঙ্খানুপুঙ্খ সুইচ নিশ্চিতকরণ' }, text: { en: 'Assign unhandled cases to the never type to catch missed variants at build time.', bn: 'বাদ পড়ে যাওয়া শাখাগুলো কম্পাইল-টাইমে ধরতে ডিফল্ট কেসে never টাইপে অ্যাসাইন করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'union_narrowing_sim.ts',
      code: `type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      // Narrowed to Circle: shape.radius is accessible
      return Math.round(3.14 * shape.radius * shape.radius);
    case "square":
      // Narrowed to Square: shape.size is accessible
      return shape.size * shape.size;
    case "rectangle":
      // Narrowed to Rectangle: shape.width and height are accessible
      return shape.width * shape.height;
    default: {
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
    }
  }
}

const c: Shape = { kind: "circle", radius: 10 };
const s: Shape = { kind: "square", size: 5 };
const r: Shape = { kind: "rectangle", width: 6, height: 4 };

const areaCircle = calculateArea(c);
const areaSquare = calculateArea(s);
const areaRect = calculateArea(r);
const totalArea = areaCircle + areaSquare + areaRect;

console.log("Discriminated Union Results:");
console.log("Circle (r=10) area: " + areaCircle);
console.log("Square (s=5) area: " + areaSquare);
console.log("Rectangle (6x4) area: " + areaRect);
console.log("Total aggregated area: " + totalArea);

// Output:
// Discriminated Union Results:
// Circle (r=10) area: 314
// Square (s=5) area: 25
// Rectangle (6x4) area: 24
// Total aggregated area: 363`,
      caption: {
        en: 'The simulation demonstrates type narrowing across 3 shapes: a circle with radius 10 yields area 314, a square with side 5 yields area 25, and a rectangle 6x4 yields area 24, producing total aggregated area 363.',
        bn: 'সিমুলেশনটি ৩টি আকারের টাইপ ন্যারোয়িং প্রদর্শন করে: ১০ ব্যাসার্ধের বৃত্ত ৩১৪ ক্ষেত্রফল তৈরি করে, ৫ বাহুর বর্গ ২৫ ক্ষেত্রফল তৈরি করে এবং ৬x৪ আয়তক্ষেত্র ২৪ ক্ষেত্রফল তৈরি করে, যার মোট সমষ্টি ৩৬৩।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive shape discriminator lab', bn: 'INSIDE — জীবন্ত ডিসক্রিমিনেটর ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test how control flow narrowing computes areas for 3 distinct shapes. With radius 10 the circle area is 314, with side 5 the square area is 25, and with dimensions 6 by 4 the rectangle area is 24, totalling 363. The never guard in the default case guarantees every shape variant is accounted for at compile time.',
        bn: 'পরীক্ষা করুন কীভাবে কন্ট্রোল ফ্লো ন্যারোয়িং ৩টি ভিন্ন আকারের ক্ষেত্রফল হিসাব করে। ১০ ব্যাসার্ধের বৃত্তে ক্ষেত্রফল ৩১৪, ৫ বাহুর বর্গে ক্ষেত্রফল ২৫ এবং ৬ গুণ ৪ মাপের আয়তক্ষেত্রে ক্ষেত্রফল ২৪, মোট ৩৬৩। ডিফল্ট কেসের never গার্ড নিশ্চিত করে প্রতিটি আকার কম্পাইল-টাইমেই সঠিকভাবে হ্যান্ডেল করা হয়েছে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Narrowing lab (modify dimensions, press Run)', bn: 'Narrowing lab (মাপ পরিবর্তন করুন, Run)' },
      html: '<h3>Discriminated Union Calculations</h3>\n<pre id="out"></pre>\n<p>Exhaustive switch computes exact geometric areas.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px; }',
      js: 'const c = { kind: "circle", radius: 10 };\nconst s = { kind: "square", size: 5 };\nconst r = { kind: "rectangle", width: 6, height: 4 };\nconst aC = Math.round(3.14 * c.radius * c.radius);\nconst aS = s.size * s.size;\nconst aR = r.width * r.height;\nconst total = aC + aS + aR;\nconsole.log("total area: " + total);\ndocument.getElementById("out").textContent = "Circle: " + aC + " · Square: " + aS + " · Rect: " + aR + " · Total: " + total;',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Narrowing principles', bn: 'ফলাফল — ন্যারোয়িংয়ের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Type safety without runtime loss: unions provide flexibility, while control-flow guards guarantee that only valid operations are performed on each branch.', bn: 'পারফরম্যান্স না কমিয়ে টাইপ নিরাপত্তা: ইউনিয়ন নমনীয়তা দেয়, আর কন্ট্রোল-ফ্লো গার্ড নিশ্চিত করে প্রতিটি শাখায় কেবল অনুমোদিত অপারেশনই সম্পাদিত হবে।' },
        { en: 'The never keyword ensures complete coverage: unhandled branches trigger immediate compiler errors before code ships to production.', bn: 'never কিওয়ার্ডের মাধ্যমে সম্পূর্ণতা রক্ষা: বাদ পড়ে যাওয়া যেকোনো শাখা কোড প্রোডাকশনে যাওয়ার আগেই কম্পাইল এরর ধরিয়ে দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common union mistakes', bn: 'ডিবাগ — ইউনিয়ন ব্যবহারের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Accessing properties without narrowing', bn: 'ন্যারোয়িং না করে সরাসরি প্রপার্টি অ্যাক্সেস' },
      text: {
        en: 'Attempting to read shape.radius when shape is Circle | Square causes the compiler error “Property radius does not exist on Square”. Cure: always check shape.kind === "circle" or use the in operator before reading variant-specific fields.',
        bn: 'shape যখন Circle | Square তখন সরাসরি shape.radius পড়তে গেলে কম্পাইলার এরর দেয় যে Square এ radius নেই। প্রতিকার: নির্দিষ্ট ফিল্ড পড়ার আগে সর্বদা shape.kind === "circle" অথবা in অপারেটর দিয়ে যাচাই করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Using the in operator for untagged objects', bn: 'ট্যাগহীন অবজেক্টের জন্য in অপারেটর ব্যবহার' },
      text: {
        en: 'When object types lack a shared literal discriminator property, use "radius" in shape to check for property existence dynamically, narrowing the type within that conditional branch.',
        bn: 'যখন অবজেক্টগুলোতে কোনো অভিন্ন ডিসক্রিমিনেটর প্রপার্টি থাকে না, তখন "radius" in shape ব্যবহার করে কোনো প্রপার্টি বিদ্যমান কিনা তা যাচাই করে সেই ব্লকে টাইপ সংকুচিত করা যায়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production patterns', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল প্যাটার্ন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Redux and state management reducers: action payloads are modeled as discriminated unions where action.type narrows the payload object.', bn: 'Redux ও স্টেট ম্যানেজমেন্ট: অ্যাকশন পেলোডগুলো ডিসক্রিমিনেটেড ইউনিয়ন হিসেবে গঠিত হয় যেখানে action.type পেলোডের টাইপ সুনির্দিষ্ট করে দেয়।' },
        { en: 'Network API response envelopes: union types { status: "success", data: T } | { status: "error", error: ApiError } guarantee resilient client handling.', bn: 'নেটওয়ার্ক এপিআই রেসপন্স: { status: "success", data: T } | { status: "error", error: ApiError } ইউনিয়ন টাইপ ক্লায়েন্টে নির্ভরযোগ্য ডেটা হ্যান্ডলিং নিশ্চিত করে।' },
        { en: 'Parser abstract syntax trees (ASTs): compiler AST nodes are modeled as thousands of tagged union variants parsed via exhaustive switch statements.', bn: 'পার্সার অ্যাবস্ট্রাক্ট সিনট্যাক্স ট্রি (AST): কম্পাইলার এএসটি নোডগুলো হাজার হাজার ডিসক্রিমিনেটেড ইউনিয়নের সমন্বয়ে তৈরি হয় যা সুইচ স্টেটমেন্টের মাধ্যমে প্রসেস করা হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Interfaces and Type Aliases', bn: 'পরবর্তী পাঠ — ইন্টারফেস ও টাইপ অ্যালিয়াস' },
    },
    {
      type: 'para',
      text: {
        en: 'With unions and narrowing mastered, Lesson 3 examines how to structure complex object models using interfaces, type aliases, optional properties, and declaration merging.',
        bn: 'ইউনিয়ন ও ন্যারোয়িং আয়ত্ত করার পর, পাঠ ৩ ইন্টারফেস, টাইপ অ্যালিয়াস, অপশনাল প্রপার্টি এবং ডিক্লারেশন মার্জিং ব্যবহার করে জটিল অবজেক্ট মডেল গঠন করা শেখাবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'ts-un-ex-1',
      kind: 'mcq',
      topic: 'union-syntax',
      question: {
        en: 'Which operator is used in TypeScript to declare a union type indicating that a variable can hold either a string or a number?',
        bn: 'একটি ভেরিয়েবল স্ট্রিং অথবা সংখ্যা উভয় মানই ধারণ করতে পারে বোঝাতে টাইপস্ক্রিপ্টে কোন অপারেটর ব্যবহার করা হয়?',
      },
      options: [
        { en: 'The pipe operator (|) as in string | number', bn: 'পাইপ অপারেটর (|) যেমন string | number' },
        { en: 'The ampersand operator (&) as in string & number', bn: 'অ্যাম্পারস্যান্ড অপারেটর (&) যেমন string & number' },
        { en: 'The double slash (//) as in string // number', bn: 'ডাবল স্ল্যাশ (//) যেমন string // number' },
        { en: 'The comma (,) as in string, number', bn: 'কমা (,) যেমন string, number' },
      ],
      answer: 0,
      hint: { en: 'The pipe symbol | represents logical OR in union definitions.', bn: 'পাইপ প্রতীক | ইউনিয়ন সংজ্ঞায় লজিক্যাল OR বোঝায়।' },
      explanation: {
        en: 'The pipe operator (|) separates member types within a union, meaning the value may satisfy any of the listed types.',
        bn: 'পাইপ অপারেটর (|) ইউনিয়নের সদস্য টাইপগুলোকে আলাদা করে, যার অর্থ মানটি উল্লিখিত যেকোনো একটি টাইপ পূরণ করতে পারে।',
      },
    },
    {
      id: 'ts-un-ex-2',
      kind: 'mcq',
      topic: 'discriminated-calc',
      question: {
        en: 'In our code simulation, what was the computed area of the circle with radius 10 and what was the total area of all 3 shapes?',
        bn: 'আমাদের কোড সিমুলেশনে, ১০ ব্যাসার্ধের বৃত্তটির ক্ষেত্রফল কত ছিল এবং ৩টি আকারের মোট ক্ষেত্রফল কত ছিল?',
      },
      options: [
        { en: 'Circle area = 314; Total area of all 3 shapes = 363', bn: 'বৃত্তের ক্ষেত্রফল = ৩১৪; ৩টি আকারের মোট ক্ষেত্রফল = ৩৬৩' },
        { en: 'Circle area = 200; Total area of all 3 shapes = 250', bn: 'বৃত্তের ক্ষেত্রফল = ২০০; ৩টি আকারের মোট ক্ষেত্রফল = ২৫০' },
        { en: 'Circle area = 150; Total area of all 3 shapes = 180', bn: 'বৃত্তের ক্ষেত্রফল = ১৫০; ৩টি আকারের মোট ক্ষেত্রফল = ১৮০' },
        { en: 'Circle area = 400; Total area of all 3 shapes = 500', bn: 'বৃত্তের ক্ষেত্রফল = ৪০০; ৩টি আকারের মোট ক্ষেত্রফল = ৫০০' },
      ],
      answer: 0,
      hint: { en: 'Circle area is 314 (3.14 * 10 * 10); square is 25; rectangle is 24; 314 + 25 + 24 = 363.', bn: 'বৃত্তের ক্ষেত্রফল ৩১৪ (৩.১৪ * ১০ * ১০); বর্গ ২৫; আয়তক্ষেত্র ২৪; ৩১৪ + ২৫ + ২৪ = ৩৬৩।' },
      explanation: {
        en: 'Circle area with radius 10 is 314. Adding square (25) and rectangle (24) yields total aggregated area 363.',
        bn: '১০ ব্যাসার্ধের বৃত্তের ক্ষেত্রফল ৩১৪। এর সাথে বর্গ (২৫) ও আয়তক্ষেত্র (২৪) যোগ করলে মোট ক্ষেত্রফল হয় ৩৬৩।',
      },
    },
    {
      id: 'ts-un-ex-3',
      kind: 'mcq',
      topic: 'never-check',
      question: {
        en: 'What is the purpose of assigning an unhandled switch branch to a variable of type never in TypeScript?',
        bn: 'টাইপস্ক্রিপ্টে কোনো সুইচ ব্লকের বাদ পড়ে যাওয়া শাখাকে never টাইপের ভেরিয়েবলে অ্যাসাইন করার উদ্দেশ্য কী?',
      },
      options: [
        {
          en: 'It produces a compile-time error if a new variant is added to the union without being handled in the switch',
          bn: 'সুইচ ব্লকে হ্যান্ডেল না করে ইউনিয়নে নতুন কোনো ভ্যারিয়েন্ট যুক্ত করা হলে এটি কম্পাইল-টাইম এরর তৈরি করে',
        },
        {
          en: 'It causes the browser window to automatically reload',
          bn: 'এটি ব্রাউজার উইন্ডোকে স্বয়ংক্রিয়ভাবে রিলোড করে',
        },
        {
          en: 'It speeds up loop iteration by 50 percent',
          bn: 'এটি লুপের গতি ৫০ শতাংশ বৃদ্ধি করে',
        },
        {
          en: 'It converts the JavaScript code into WebAssembly binary',
          bn: 'এটি জাভাস্ক্রিপ্ট কোডকে ওয়েবঅ্যাসেম্বলি বাইনারিতে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: { en: 'The never type enforces exhaustive compile-time checks.', bn: 'never টাইপ কম্পাইল-টাইমে সম্পূর্ণতা যাচাই করতে বাধ্য করে।' },
      explanation: {
        en: 'Because nothing can be assigned to never, if an unhandled union case reaches the default block, the compiler flags a type mismatch error.',
        bn: 'যেহেতু never টাইপে কিছুই অ্যাসাইন করা যায় না, তাই কোনো বাদ পড়ে যাওয়া টাইপ ডিফল্ট ব্লকে পৌঁছালে কম্পাইলার সাথে সাথে এরর দেয়।',
      },
    },
    {
      id: 'ts-un-ex-4',
      kind: 'predict',
      topic: 'narrowing-concept',
      question: {
        en: 'What term describes the compiler process of refining an open union type into a specific variant inside an if block?',
        bn: 'if ব্লকের ভেতরে একটি বিস্তৃত ইউনিয়ন টাইপকে নির্দিষ্ট ভ্যারিয়েন্টে সংকুচিত করার কম্পাইলার প্রক্রিয়াটিকে কী বলা হয়?',
      },
      answer: 'Type narrowing',
      accept: ['narrowing', 'narrow', 'type narrowing', 'guard'],
      hint: { en: 'It makes the type narrower and more specific.', bn: 'এটি টাইপকে সংকুচিত বা ন্যারো করে।' },
      explanation: {
        en: 'Type narrowing occurs when control flow analysis refines a broad union type into a specific type based on conditional guards.',
        bn: 'কন্ট্রোল ফ্লো অ্যানালাইসিস যখন শর্তের ভিত্তিতে বিস্তৃত ইউনিয়নকে সুনির্দিষ্ট টাইপে সীমাবদ্ধ করে, তখন তাকে টাইপ ন্যারোয়িং বলা হয়।',
      },
    },
  ],
  quiz: {
    id: 'unions-narrow-quiz',
    title: { en: 'Lesson 2 exam', bn: 'পাঠ ২ পরীক্ষা' },
    questions: [
      {
        id: 'ts-un-q1',
        kind: 'mcq',
        topic: 'discriminator-meaning',
        question: {
          en: 'What characteristic distinguishes a discriminated union from an arbitrary union of objects in TypeScript?',
          bn: 'টাইপস্ক্রিপ্টে সাধারণ অবজেক্ট ইউনিয়নের তুলনায় ডিসক্রিমিনেটেড ইউনিয়নের কোন বিশেষ বৈশিষ্ট্যটি থাকে?',
        },
        options: [
          {
            en: 'Every member object shares a common literal property (tag) with distinct literal values like kind: "circle" or kind: "square"',
            bn: 'প্রতিটি সদস্য অবজেক্টের একটি অভিন্ন লিটারেল প্রপার্টি (ট্যাগ) থাকে যার মানগুলো ভিন্ন হয় যেমন kind: "circle" বা kind: "square"',
          },
          {
            en: 'All member objects must have identical property names and identical types',
            bn: 'সব সদস্য অবজেক্টের প্রপার্টির নাম এবং টাইপ হুবহু একই হতে হয়',
          },
          {
            en: 'The union can only contain primitive numbers and booleans',
            bn: 'ইউনিয়নটি কেবল প্রিমিটিভ সংখ্যা এবং বুলিয়ান ধারণ করতে পারে',
          },
          {
            en: 'It requires defining a custom C++ native extension',
            bn: 'এর জন্য একটি কাস্টম C++ নেটিভ এক্সটেনশন সংজ্ঞায়িত করতে হয়',
          },
        ],
        answer: 0,
        hint: { en: 'A shared discriminator tag lets switches branch safely.', bn: 'একটি অভিন্ন ডিসক্রিমিনেটর ট্যাগ সুইচকে নিরাপদে ব্রাঞ্চ করতে দেয়।' },
        explanation: {
          en: 'A discriminated union relies on a shared literal property across all member types, enabling unambiguous type narrowing.',
          bn: 'ডিসক্রিমিনেটেড ইউনিয়ন সমস্ত সদস্যের মধ্যে একটি অভিন্ন লিটারেল প্রপার্টির ওপর নির্ভর করে, যা সুনির্দিষ্ট টাইপ ন্যারোয়িং সম্ভব করে।',
        },
      },
      {
        id: 'ts-un-q2',
        kind: 'mcq',
        topic: 'typeof-guard',
        question: {
          en: 'If a function parameter input has type string | number, what does if (typeof input === "string") allow inside its block?',
          bn: 'যদি কোনো ফাংশন প্যারামিটার input এর টাইপ string | number হয়, তবে if (typeof input === "string") ব্লকের ভেতরে কী করার অনুমতি দেয়?',
        },
        options: [
          {
            en: 'Safely calling string methods like input.toUpperCase() without compiler error',
            bn: 'কোনো কম্পাইল এরর ছাড়া নিরাপদে input.toUpperCase() এর মতো স্ট্রিং মেথড কল করার অনুমতি দেয়',
          },
          {
            en: 'Treating input as a number with input.toFixed(2)',
            bn: 'input কে সংখ্যা হিসেবে ধরে input.toFixed(2) কল করার অনুমতি দেয়',
          },
          {
            en: 'Deleting the input variable from computer memory',
            bn: 'কম্পিউটার মেমরি থেকে input ভেরিয়েবলটি মুছে ফেলার অনুমতি দেয়',
          },
          {
            en: 'Converting the runtime engine from Node.js to Deno',
            bn: 'রানটাইম ইঞ্জিনকে Node.js থেকে Deno তে রূপান্তর করার অনুমতি দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Inside the typeof === "string" block, input is narrowed to string.', bn: 'typeof === "string" ব্লকের ভেতরে input টাইপটি string হিসেবে সংকুচিত হয়।' },
        explanation: {
          en: 'TypeScript control flow analysis recognizes the typeof guard, narrowing input to string so all string methods become accessible.',
          bn: 'টাইপস্ক্রিপ্ট কন্ট্রোল ফ্লো অ্যানালাইসিস typeof গার্ড শনাক্ত করে input কে string এ সীমাবদ্ধ করে, ফলে সব স্ট্রিং মেথড নিরাপদে ব্যবহার করা যায়।',
        },
      },
      {
        id: 'ts-un-q3',
        kind: 'mcq',
        topic: 'total-shapes',
        question: {
          en: 'In our code walkthrough, how many total shape variants were handled in the calculateArea switch statement?',
          bn: 'আমাদের কোড আলোচনায় calculateArea সুইচ স্টেটমেন্টে মোট কয়টি আকারের ভ্যারিয়েন্ট হ্যান্ডেল করা হয়েছিল?',
        },
        options: [
          { en: 'Exactly 3 shape variants: circle, square, and rectangle', bn: 'ঠিক ৩টি আকারের ভ্যারিয়েন্ট: বৃত্ত, বর্গ এবং আয়তক্ষেত্র' },
          { en: 'Exactly 10 shape variants', bn: 'ঠিক ১০টি আকারের ভ্যারিয়েন্ট' },
          { en: 'Only 1 shape variant', bn: 'কেবল ১টি আকারের ভ্যারিয়েন্ট' },
          { en: 'Zero shape variants', bn: '০টি আকারের ভ্যারিয়েন্ট' },
        ],
        answer: 0,
        hint: { en: 'Circle, square, rectangle: 3 shapes.', bn: 'বৃত্ত, বর্গ, আয়তক্ষেত্র: ৩টি আকার।' },
        explanation: {
          en: 'The Shape union comprised exactly 3 geometric variants: circle, square, and rectangle.',
          bn: 'Shape ইউনিয়নটি ঠিক ৩টি জ্যামিতিক আকার নিয়ে গঠিত ছিল: বৃত্ত, বর্গ এবং আয়তক্ষেত্র।',
        },
      },
      {
        id: 'ts-un-q4',
        kind: 'predict',
        topic: 'operator-recite',
        question: {
          en: 'Which keyword can be used to dynamically test if a specific property exists on an un-narrowed object union (e.g. "radius" in shape)?',
          bn: 'একটি আন-ন্যারোড অবজেক্ট ইউনিয়নে নির্দিষ্ট প্রপার্টি বিদ্যমান কিনা তা গতিশীলভাবে পরীক্ষা করতে কোন কিওয়ার্ড ব্যবহৃত হয় (যেমন "radius" in shape)?',
        },
        answer: 'in',
        accept: ['in', 'in operator'],
        hint: { en: 'A two-letter operator testing property containment.', bn: 'প্রপার্টি বিদ্যমান কিনা তা যাচাইয়ের দুই অক্ষরের অপারেটর।' },
        explanation: {
          en: 'The in operator acts as a type guard: "propertyName" in object narrows the object type to members containing that property.',
          bn: 'in অপারেটর টাইপ গার্ড হিসেবে কাজ করে: "propertyName" in object অবজেক্টটিকে সেই সদস্য টাইপে সংকুচিত করে যাতে ওই প্রপার্টি রয়েছে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'interfaces-and-the-shape',
    title: { en: 'Interfaces and Shapes', bn: 'ইন্টারফেস ও অবজেক্টের গঠন' },
  },
};
