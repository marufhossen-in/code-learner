import type { Lesson } from '../../../lib/types';

export const syntaxMintLesson: Lesson = {
  slug: 'js-syntax-variables',
  tech: 'javascript',
  title: {
    en: 'JavaScript Basics: Syntax, Variables, Data Types & Strict Mode',
    bn: 'জাভাস্ক্রিপ্ট বেসিক্স: সিনট্যাক্স, ভেরিয়েবল, ডেটা টাইপ ও স্ট্রিক্ট মোড'
  },
  summary: {
    en: 'Beginner foundation in JavaScript programming across 10 structured topics. Understand script placement with defer, console output mechanisms, and syntax rules. Explore let vs const vs var, block scope, the Temporal Dead Zone, primitive data types, undefined vs null, dynamic typing with typeof, explicit conversion, and "use strict".',
    bn: '১০টি সুসংগঠিত পয়েন্টে জাভাস্ক্রিপ্ট ভাষার প্রাথমিক ভিত্তি শিখুন। defer সহ স্ক্রিপ্ট লোডিং, কনসোল আউটপুট পদ্ধতি এবং সিনট্যাক্স নিয়মাবলী বুঝুন। let বনাম const বনাম var, ব্লক স্কোপ, টেম্পোরাল ডেড জোন, প্রিমিটিভ ডেটা টাইপ, undefined বনাম null, typeof দিয়ে ডায়নামিক টাইপিং, স্পষ্ট টাইপ রূপান্তর এবং "use strict" সেরা অনুশীলন আবিষ্কার করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'js-operators-decisions',
    title: { en: 'The Operator Court: arithmetic, coercion and the decision bench', bn: 'অপারেটর-আদালত: পাটিগণিত, রূপান্তর-নিয়ম আর সিদ্ধান্ত-বেঞ্চ' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. JavaScript Engine & Script Placement: defer vs async', bn: '১. জাভাস্ক্রিপ্ট ইঞ্জিন ও স্ক্রিপ্ট প্লেসমেন্ট: defer বনাম async' } },
    {
      type: 'para',
      text: {
        en: 'JavaScript is a high-level, single-threaded, just-in-time compiled language executed by engines like V8 (Chrome, Node.js) and SpiderMonkey (Firefox). In HTML documents, external scripts placed in the <head> should use the defer attribute. This downloads files in parallel without blocking HTML parsing, executing only after the full DOM is parsed.',
        bn: 'জাভাস্ক্রিপ্ট হলো একটি হাই-লেভেল, সিঙ্গেল-থ্রেডেড ভাষা যা V8 ও SpiderMonkey-এর মতো আধুনিক ইঞ্জিনে চলে। HTML ডকুমেন্টে <head>-এ স্ক্রিপ্ট যুক্ত করার সময় defer অ্যাট্রিবিউট ব্যবহার করা উচিত। এটি ব্যাকগ্রাউন্ডে স্ক্রিপ্ট ডাউনলোড করে এবং সম্পূর্ণ DOM তৈরি হওয়ার পর ক্রমানুসারে চালায়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Variable Lifecycle: Scope & Temporal Dead Zone',
        bn: 'ভেরিয়েবল লাইফসাইকেল: স্কোপ ও টেম্পোরাল ডেড জোন'
      },
      caption: {
        en: 'let and const enforce block scope and guard against uninitialized access via the Temporal Dead Zone.',
        bn: 'let এবং const ব্লক স্কোপ বলবৎ করে এবং টেম্পোরাল ডেড জোনের মাধ্যমে ঘোষণা করার আগে অ্যাক্সেস প্রতিরোধ করে।'
      },
      svg: `<svg viewBox="0 0 680 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="150" rx="10" fill="#0f172a"/>
  <!-- var -->
  <rect x="25" y="35" width="180" height="85" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="115" y="60" text-anchor="middle" fill="#fb7185" font-size="13" font-weight="bold" font-family="monospace">var (Legacy)</text>
  <text x="115" y="80" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">Function-Scoped</text>
  <text x="115" y="100" text-anchor="middle" fill="#fda4af" font-size="10" font-family="monospace">Hoisted as undefined</text>
  <!-- let & const -->
  <rect x="235" y="35" width="220" height="85" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="345" y="60" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold" font-family="monospace">let / const (Modern)</text>
  <text x="345" y="80" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">Block-Scoped</text>
  <text x="345" y="100" text-anchor="middle" fill="#cbd5e1" font-size="10" font-family="monospace">Temporal Dead Zone</text>
  <!-- TDZ Error Guard -->
  <rect x="485" y="35" width="170" height="85" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="570" y="60" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold" font-family="monospace">ReferenceError</text>
  <text x="570" y="80" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">Guards Uninitialized</text>
  <text x="570" y="100" text-anchor="middle" fill="#a7f3d0" font-size="10" font-family="monospace">Zero Silent Bugs</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'html',
      code: `<!-- 1. Preferred modern pattern: defer preserves DOM parsing and execution order -->
<head>
  <script src="app.js" defer></script>
</head>

<!-- 2. Independent utility scripts (analytics, trackers) using async -->
<head>
  <script src="analytics.js" async></script>
</head>

<!-- 3. Inline script placed before closing </body> tag -->
<body>
  <h1 id="headline">Welcome</h1>
  <script>
    console.log("DOM is ready!");
  </script>
</body>

<!-- Rendered Output:
   Browser parses HTML uninterrupted; app.js executes smoothly immediately upon DOMContentLoaded.
-->`,
      caption: {
        en: 'defer downloads scripts in parallel and executes them in sequence once HTML parsing finishes.',
        bn: 'defer স্ক্রিপ্টকে সমান্তরালে ডাউনলোড করে এবং HTML পার্সিং শেষে ক্রমানুসারে চালায়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Output Mechanisms: console, textContent, and alert', bn: '২. আউটপুট প্রদর্শন: console, textContent ও alert' } },
    {
      type: 'para',
      text: {
        en: 'JavaScript can produce output in several ways: console.log() and console.table() log structured data into browser DevTools for debugging; element.textContent writes sanitized text directly into the live DOM; and window.alert() displays a blocking modal dialog.',
        bn: 'জাভাস্ক্রিপ্ট বিভিন্ন উপায়ে আউটপুট প্রদর্শন করতে পারে: console.log() ও console.table() ডিবাগিংয়ের জন্য ব্রাউজার DevTools-এ ডেটা দেখায়; element.textContent সরাসরি লাইভ DOM-এ নিরাপদ টেক্সট লিখে। এবং window.alert() একটি পপ-আপ ডায়ালগ দেখায় যা কোড চলা সাময়িক থামিয়ে রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. Developer Console Logging
console.log("Application started");
console.warn("Storage quota approaching limit");
console.error("Failed to connect to authentication server");

// 2. Tabular Data Logging
console.table([
  { id: 1, role: "Admin", active: true },
  { id: 2, role: "Editor", active: false }
]);

// 3. Safe DOM Output (Prevents XSS attacks)
document.getElementById("output").textContent = "Rendered safely via textContent";

// Output printed in console:
// Application started
// [Table representation of Admin and Editor roles]
// "Rendered safely via textContent"`,
      caption: {
        en: 'console.table formats arrays of objects into readable tabular grids inside developer tools.',
        bn: 'console.table ডেভেলপার টুলের ভেতরে অবজেক্টের অ্যারেকে সুন্দর টেবিলে প্রদর্শন করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Statements, Syntax Rules, Semicolons, and Identifiers', bn: '৩. স্টেটমেন্ট, সিনট্যাক্স নিয়ম, সেমিকোলন ও আইডেন্টিফায়ার' } },
    {
      type: 'para',
      text: {
        en: 'A JavaScript program is a list of statements executed line-by-line. While JavaScript features Automatic Semicolon Insertion (ASI), writing explicit semicolons prevents edge-case parsing ambiguities. Identifiers must begin with a letter, underscore (_), or dollar sign ($), and use camelCase by convention.',
        bn: 'একটি জাভাস্ক্রিপ্ট প্রোগ্রাম হলো একের পর এক স্টেটমেন্টের সমষ্টি যা ক্রমানুসারে নির্বাহ হয়। জাভাস্ক্রিপ্টে অটোমেটিক সেমিকোলন ইনসার্শন (ASI) থাকলেও স্পষ্টভাবে সেমিকোলন দেওয়া কোডকে নিরাপদ রাখে। আইডেন্টিফায়ার বা ভেরিয়েবলের নাম অবশ্যই অক্ষর, আন্ডারস্কোর (_) বা ডলার ($) দিয়ে শুরু হতে হয় এবং কনভেনশন অনুযায়ী camelCase লেখা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Valid identifier naming conventions:
const userName = "Tanvir";         // camelCase (Standard)
const MAX_LOGIN_ATTEMPTS = 5;      // UPPERCASE_SNAKE_CASE (Constants)
const _privateKey = "secret_123";  // Underscore prefix (Internal/Private)
const $domElement = document.body; // Dollar prefix (Common for DOM references)

// Semicolon insertion safeguard:
let count = 10;
let total = count * 2;

console.log(total);
// Output:
// 20`,
      caption: {
        en: 'Standard naming conventions and explicit semicolons prevent runtime ambiguities.',
        bn: 'আদর্শ নামকরণের নিয়ম ও স্পষ্ট সেমিকোলন কোডের রানটাইম ভুলভ্রান্তি প্রতিরোধ করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Variable Declarations: let, const, and the Problems of var', bn: '৪. ভেরিয়েবল ডিক্লারেশন: let, const এবং var-এর সমস্যা' } },
    {
      type: 'para',
      text: {
        en: 'Modern JavaScript (ES6+) provides let and const to replace legacy var. const declares block-scoped bindings that cannot be reassigned; let declares block-scoped variables that can be reassigned; var is function-scoped, permits accidental re-declarations, and leaks outside for loops and if blocks.',
        bn: 'আধুনিক জাভাস্ক্রিপ্টে (ES6+) পুরোনো var-এর বদলে let এবং const চালু করা হয়েছে। const দিয়ে এমন ভেরিয়েবল ঘোষণা করা হয় যার মান পরিবর্তন করা যায় না; let দিয়ে এমন ভেরিয়েবল তৈরি হয় যার মান পরবর্তীতে বদলানো যায়। আর var হলো ফাংশন-স্কোপড, যা লুপ ও if ব্লকের বাইরে লিক হয়ে যায় এবং অনিচ্ছাকৃত ভুলের জন্ম দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. const: Immutable binding (Preferred default)
const port = 3000;
// port = 8080; // TypeError: Assignment to constant variable!

// Note: const objects are mutable in their properties!
const config = { env: "development" };
config.env = "production"; // Permitted!
console.log(config.env);
// Output: "production"

// 2. let: Mutable variable for re-assignment
let score = 0;
score = score + 10;
console.log(score);
// Output: 10

// 3. var: Dangerously allows accidental re-declaration
var user = "Alice";
var user = "Bob"; // Silently overwrites without throwing an error!`,
      caption: {
        en: 'Always default to const; use let only when reassignment is strictly required.',
        bn: 'সর্বদা const ব্যবহার করা উচিত; শুধুমাত্র মান পরিবর্তন করার প্রয়োজন হলেই let ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Scope & Hoisting: Block Scope and the Temporal Dead Zone', bn: '৫. স্কোপ ও হোইস্টিং: ব্লক স্কোপ ও টেম্পোরাল ডেড জোন' } },
    {
      type: 'para',
      text: {
        en: 'A block is any code enclosed within curly braces {}. Variables declared with let and const are strictly Block-Scoped: they exist only inside their enclosing block. Furthermore, while var variables are hoisted as undefined, let and const enter the Temporal Dead Zone (TDZ) and throw a ReferenceError if accessed before their declaration line.',
        bn: 'কার্লি ব্র্যাকেট {} দিয়ে ঘেরা যেকোনো কোড অংশকে ব্লক বলা হয়। let ও const দিয়ে ঘোষিত ভেরিয়েবল কঠোরভাবে ব্লক-স্কোপড: এরা যে ব্লকে তৈরি হয় কেবল তার ভেতরেই বেঁচে থাকে। তাছাড়া var হোইস্ট হয়ে undefined দেখায়, কিন্তু let ও const টেম্পোরাল ডেড জোন (TDZ)-এ থাকে এবং ঘোষণার লাইনের আগে ব্যবহার করতে গেলে ReferenceError দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. Block Scope isolation
{
  let insideBlock = "Secret Token";
  const blockNumber = 42;
  var leakedVar = "I escaped the block!";
}

// console.log(insideBlock); // ReferenceError: insideBlock is not defined
console.log(leakedVar);
// Output: "I escaped the block!" (var leaks outside!)

// 2. The Temporal Dead Zone (TDZ)
function demonstrateTDZ() {
  // console.log(greeting); // ReferenceError: Cannot access 'greeting' before initialization!
  let greeting = "Hello World";
  console.log(greeting);
}

demonstrateTDZ();
// Output:
// "Hello World"`,
      caption: {
        en: 'Accessing let or const variables before initialization throws a ReferenceError due to the TDZ.',
        bn: 'ঘোষণার পূর্বে let বা const ভেরিয়েবল ব্যবহার করলে TDZ-এর কারণে ReferenceError ঘটে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Primitive Data Types: Strings, Numbers, BigInt, and Booleans', bn: '৬. প্রিমিটিভ ডেটা টাইপ: স্ট্রিং, সংখ্যা, BigInt ও বুলিয়ান' } },
    {
      type: 'para',
      text: {
        en: 'JavaScript has 7 primitive data types stored directly in memory (stack). String represents textual data wrapped in quotes; Number represents double-precision 64-bit binary floating-point numbers; BigInt handles integers beyond Number.MAX_SAFE_INTEGER safe limits suffixed with n; and Boolean represents true or false logical flags.',
        bn: 'জাভাস্ক্রিপ্টে ৭টি প্রিমিটিভ ডেটা টাইপ রয়েছে যা মেমোরিতে সরাসরি সংরক্ষিত হয়। String টেক্সট ডেটা প্রকাশ করে; Number ডাবল-প্রিসিশন ৬৪-বিট ফ্লোটিং-পয়েন্ট সংখ্যা প্রকাশ করে; BigInt বিশাল পূর্ণসংখ্যা ধারণ করে (শেষে n থাকে); এবং Boolean হলো সত্য (true) বা মিথ্যা (false) লজিক্যাল ফ্ল্যাগ।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. Strings (Single, double, or template literals)
const message = 'Hello';
const interpolated = \`Result: \${message} World!\`;

// 2. Numbers (Integers and floats share the same Number type)
const integer = 42;
const float = 3.14159;
console.log(0.1 + 0.2 === 0.3); // false! (IEEE 754 floating point arithmetic)
console.log((0.1 + 0.2).toFixed(1)); // "0.3"

// 3. BigInt (For exact precision beyond 9 quadrillion)
const safeMax = Number.MAX_SAFE_INTEGER; // 9007199254740991
const largeBigInt = 9007199254740991n + 10n;

// 4. Boolean
const isLoggedIn = true;
const hasPermission = false;

console.log(interpolated);
console.log(largeBigInt.toString());
// Output:
// Result: Hello World!
// 9007199254741001`,
      caption: {
        en: 'BigInt handles arbitrary-precision integers beyond safe number limits.',
        bn: 'BigInt নিরাপদ সীমার চেয়ে বড় যেকোনো পূর্ণসংখ্যা নিখুঁতভাবে গণনা করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Primitive Data Types: Undefined vs Null and Symbols', bn: '৭. প্রিমিটিভ ডেটা টাইপ: Undefined বনাম Null ও সিম্বল' } },
    {
      type: 'para',
      text: {
        en: 'undefined means a variable has been declared but has not yet been assigned a value (the engine default). null represents the intentional absence of any object value. Symbol creates a unique, immutable identifier guaranteed never to collide with any other property key.',
        bn: 'undefined-এর অর্থ হলো একটি ভেরিয়েবল তৈরি করা হয়েছে কিন্তু এখনো কোনো মান দেওয়া হয়নি (ইঞ্জিনের ডিফল্ট)। null হলো কোনো অবজেক্টের ইচ্ছাকৃত অনুপস্থিতি নির্দেশক মান। Symbol একটি অনন্য ও অপরিবর্তনীয় আইডেন্টিফায়ার তৈরি করে যা অন্য কোনো প্রপার্টির সাথে কখনোই মিলে যায় না।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. undefined: Variable without value
let unassignedBox;
console.log(unassignedBox); // undefined

// 2. null: Explicit intentional emptiness
let activeUser = null; // Explicitly set to empty

console.log(undefined == null);  // true  (Loose equality: both falsy empty values)
console.log(undefined === null); // false (Strict equality: different types!)

// 3. Symbol: Unique identifier
const id1 = Symbol("userId");
const id2 = Symbol("userId");
console.log(id1 === id2); // false! Every Symbol is globally unique

// Output:
// undefined
// true
// false
// false`,
      caption: {
        en: 'undefined is the engine default; null is a developer declaration of intentional absence.',
        bn: 'undefined হলো ইঞ্জিনের ডিফল্ট খালি মান; null হলো ইউজারের ইচ্ছাকৃত খালি ঘোষণা।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Dynamic Typing and the typeof Operator', bn: '৮. ডায়নামিক টাইপিং ও typeof অপারেটর' } },
    {
      type: 'para',
      text: {
        en: 'JavaScript is dynamically typed: variables hold values, but variable names are not bound to a fixed type. The typeof operator inspects the type of a variable. Note the historic JavaScript bug: typeof null evaluates to "object" due to a legacy 1995 engine implementation detail.',
        bn: 'জাভাস্ক্রিপ্ট হলো ডায়নামিক্যালি টাইপড ভাষা: ভেরিয়েবল মান ধারণ করে কিন্তু কোনো নির্দিষ্ট টাইপে বাঁধা থাকে না। typeof অপারেটর দিয়ে কোনো ভেরিয়েবলের বর্তমান টাইপ জানা যায়। একটি ঐতিহাসিক ত্রুটির কারণে typeof null দিলে "object" আসে, যা ১৯৯৫ সালের ইঞ্জিনের একটি পরিচিত বাগ।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `let dynamicVar = "Coding";
console.log(typeof dynamicVar); // "string"

dynamicVar = 100;
console.log(typeof dynamicVar); // "number"

dynamicVar = true;
console.log(typeof dynamicVar); // "boolean"

dynamicVar = undefined;
console.log(typeof dynamicVar); // "undefined"

// The historic JS typeof bug:
console.log(typeof null); // "object" (Legacy bug in JS engine specification!)

// Proper way to verify null:
const isNull = (val) => val === null;
console.log(isNull(null)); // true

// Output:
// string
// number
// boolean
// undefined
// object
// true`,
      caption: {
        en: 'typeof null returns "object" due to a 1995 legacy engine encoding decision.',
        bn: '১৯৯৫ সালের একটি ঐতিহাসিক বাগের কারণে typeof null দিলে "object" প্রদর্শন করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Type Coercion vs Explicit Type Conversion', bn: '৯. টাইপ রূপান্তর: স্বয়ংক্রিয় রূপান্তর বনাম স্পষ্ট কনভার্সন' } },
    {
      type: 'para',
      text: {
        en: 'Type coercion occurs when JavaScript automatically converts values between types behind the scenes (e.g. "5" + 2 results in "52"). To write robust, bug-free applications, always use explicit type conversion functions: Number(), String(), and Boolean().',
        bn: 'যখন জাভাস্ক্রিপ্ট নিজে নিজেই এক টাইপকে অন্য টাইপে রূপান্তর করে তখন তাকে টাইপ কোয়ার্শন বলে (যেমন "5" + 2 দিলে "52" হয়)। বাগমুক্ত সফটওয়্যার তৈরি করতে সর্বদা স্পষ্ট টাইপ রূপান্তর ফাংশন ব্যবহার করতে হয়: Number(), String() এবং Boolean()।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Implicit Coercion surprises:
console.log("5" + 2); // "52" (String concatenation wins!)
console.log("5" - 2); // 3 (Mathematical subtraction forces number conversion!)
console.log("5" * "2"); // 10

// Explicit Conversion (Best Practice):
const inputStr = "42";
const convertedNum = Number(inputStr); // 42 (Safe number)
const stringified = String(123);      // "123"

// Boolean Falsy Values in JavaScript:
// false, 0, -0, 0n, "", null, undefined, NaN
console.log(Boolean(""));      // false
console.log(Boolean("Hello")); // true
console.log(Boolean(0));       // false
console.log(Boolean(1));       // true

// Output:
// 52
// 3
// 10
// false
// true
// false
// true`,
      caption: {
        en: 'Explicit conversion with Number(), String(), and Boolean() prevents coercion bugs.',
        bn: 'Number(), String() এবং Boolean() দিয়ে সরাসরি টাইপ বদলানো অপ্রত্যাশিত বাগ দূর করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. JavaScript Strict Mode: "use strict"', bn: '১০. জাভাস্ক্রিপ্ট স্ট্রিক্ট মোড: "use strict"' } },
    {
      type: 'para',
      text: {
        en: 'Strict mode, enabled by placing "use strict"; at the top of a script or function, eliminates silent JavaScript errors by turning them into explicit runtime exceptions. It prevents accidental global variable leaks (e.g. undeclared x = 10), forbids duplicate parameter names, and secures eval().',
        bn: 'স্ক্রিপ্ট বা ফাংশনের শীর্ষে "use strict"; লিখে স্ট্রিক্ট মোড চালু করা হয়। এটি জাভাস্ক্রিপ্টের লুকানো ভুলগুলোকে স্পষ্ট এক্সেপশনে রূপান্তর করে। এটি ঘোষণা ছাড়া ভেরিয়েবল ব্যবহার (x = 10) বন্ধ করে, ফাংশনে ডুপ্লিকেট প্যারামিটার নাম নিষিদ্ধ করে এবং eval()-কে নিরাপদ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `"use strict";

function secureFunction() {
  // 1. Accidental global variable assignment:
  // message = "Oops"; // ReferenceError: message is not defined!
  
  let message = "Clean and safe";
  console.log(message);
}

secureFunction();

// 2. Strict mode catches duplicate parameter errors:
// function badMath(a, a, c) {} // SyntaxError: Duplicate parameter name not allowed in this context

console.log("Strict mode execution clean");
// Output:
// Clean and safe
// Strict mode execution clean`,
      caption: {
        en: '"use strict" catches silent developer mistakes and converts them into helpful exceptions.',
        bn: '"use strict" অসাবধানতাবশত করা ভুলগুলোকে থামিয়ে দিয়ে পরিষ্কার এক্সেপশন ছুড়ে দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'js-syntax-ex1',
      kind: 'predict',
      topic: 'js: Typeof operator bug',
      question: {
        en: 'What string is returned by executing typeof null in JavaScript?',
        bn: 'জাভাস্ক্রিপ্টে typeof null রান করলে কোন স্ট্রিংটি রিটার্ন হয়?'
      },
      code: `/* JavaScript typeof inspection */
/* console.log(typeof null); */`,
      answer: 'object',
      accept: ['object', '"object"'],
      hint: {
        en: 'It is a famous legacy quirk from 1995.',
        bn: 'এটি ১৯৯৫ সালের একটি বিখ্যাত ঐতিহাসিক ইঞ্জিন বাগ।'
      },
      explanation: {
        en: 'In the original 1995 JavaScript engine implementation, values were stored with type tags where object was 0 and null was represented as a NULL pointer (0x00), causing typeof null to return "object".',
        bn: '১৯৯৫ সালের প্রথম জাভাস্ক্রিপ্ট ইঞ্জিনে অবজেক্টের টাইপ ট্যাগ ছিল 0 এবং null-কে নাল পয়েন্টার (0x00) হিসেবে রাখা হয়েছিল। ফলে typeof null পরীক্ষা করলে "object" ফেরত আসে।'
      }
    },
    {
      id: 'js-syntax-ex2',
      kind: 'mcq',
      topic: 'js: Const variable mutation',
      question: {
        en: 'What happens when you modify a property on an object declared with const (e.g. const user = { name: "A" }; user.name = "B";)?',
        bn: 'const দিয়ে ঘোষিত অবজেক্টের কোনো প্রপার্টির মান পরিবর্তন করলে (যেমন user.name = "B";) কী ঘটবে?'
      },
      options: [
        { en: 'The modification succeeds because const prevents reassigning the variable binding, not mutating object contents', bn: 'পরিবর্তন সফল হবে কারণ const ভেরিয়েবলের বাইন্ডিং রক্ষা করে, কিন্তু অবজেক্টের ভেতরের প্রপার্টি পরিবর্তন আটকে রাখে না' },
        { en: 'A TypeError is thrown immediately', bn: 'তাত্ক্ষণিকভাবে TypeError ঘটবে' },
        { en: 'The object is deleted from memory', bn: 'অবজেক্টটি মেমোরি থেকে মুছে যাবে' },
        { en: 'The change is silently ignored', bn: 'পরিবর্তনটি নীরবে অগ্রাহ্য করা হবে' }
      ],
      answer: 0,
      hint: {
        en: 'const protects the variable binding, not the object interior.',
        bn: 'const ভেরিয়েবলকে নতুন মান অ্যাসাইন করতে বাধা দেয়, কিন্তু ভেতরের ডেটা পরিবর্তন আটকায় না।'
      },
      explanation: {
        en: 'const creates an immutable variable binding (you cannot do user = {}), but the object referenced by the variable remains mutable. To freeze an object completely, use Object.freeze().',
        bn: 'const ভেরিয়েবলের রেফারেন্স লক করে রাখে (নতুন অবজেক্ট অ্যাসাইন করা যাবে না), কিন্তু অবজেক্টের ভেতরের প্রপার্টি মিউটেবল থাকে। সম্পূর্ণ অবজেক্ট লক করতে Object.freeze() দরকার।'
      }
    },
    {
      id: 'js-syntax-ex3',
      kind: 'mcq',
      topic: 'js: Temporal dead zone',
      question: {
        en: 'What error occurs if you attempt to read a variable declared with let before its declaration line?',
        bn: 'let দিয়ে ঘোষিত কোনো ভেরিয়েবলকে তার ডিক্লারেশন লাইনের আগে পড়তে চাইলে কোন এররটি ঘটে?'
      },
      options: [
        { en: 'ReferenceError (due to the Temporal Dead Zone)', bn: 'ReferenceError (টেম্পোরাল ডেড জোনের কারণে)' },
        { en: 'It returns undefined without any error', bn: 'কোনো এরর ছাড়াই undefined রিটার্ন করে' },
        { en: 'SyntaxError', bn: 'SyntaxError' },
        { en: 'It returns null', bn: 'এটি null রিটার্ন করে' }
      ],
      answer: 0,
      hint: {
        en: 'It is inaccessible during the TDZ period.',
        bn: 'TDZ সময়ের মধ্যে এটিকে অ্যাক্সেস করা যায় না।'
      },
      explanation: {
        en: 'Variables declared with let and const are hoisted but remain uninitialized in the Temporal Dead Zone (TDZ). Accessing them before initialization throws a ReferenceError.',
        bn: 'let ও const দিয়ে ঘোষিত ভেরিয়েবল হোইস্ট হলেও টেম্পোরাল ডেড জোনে থাকে। ডিক্লারেশনের পূর্বে এদের মান পড়ার চেষ্টা করলে ReferenceError ঘটে।'
      }
    }
  ],
  quiz: {
    id: 'js-syntax-quiz',
    title: { en: 'JavaScript Syntax Quiz', bn: 'জাভাস্ক্রিপ্ট সিনট্যাক্স কুইজ' },
    questions: [
      {
        id: 'sq1',
        kind: 'mcq',
        topic: 'js: Equality comparison',
        question: {
          en: 'What is the evaluated result of undefined === null in JavaScript?',
          bn: 'জাভাস্ক্রিপ্টে undefined === null তুলনা করলে ফলাফল কী আসে?'
        },
        options: [
          { en: 'false (because they are different data types)', bn: 'false (কারণ তাদের ডেটা টাইপ ভিন্ন)' },
          { en: 'true', bn: 'true' },
          { en: 'TypeError', bn: 'TypeError' },
          { en: 'NaN', bn: 'NaN' }
        ],
        answer: 0,
        hint: {
          en: 'Strict equality (===) checks both value and type.',
          bn: 'কঠোর সমতা (===) মান এবং ডেটা টাইপ উভয়ই পরীক্ষা করে।'
        },
        explanation: {
          en: 'Both values are loosely equal in loose comparisons (undefined == null is true), but strictly unequal (undefined === null is false) because the former has its own type while the latter reports object.',
          bn: 'উভয় মান লুজ সমতায় (==) সত্য হলেও কঠোর সমতায় (===) মিথ্যা কারণ প্রথমটির নিজস্ব স্বতন্ত্র টাইপ রয়েছে আর দ্বিতীয়টি অবজেক্ট হিসেবে টাইপ নির্দেশ করে।'
        }
      },
      {
        id: 'sq2',
        kind: 'mcq',
        topic: 'js: Strict mode purpose',
        question: {
          en: 'What is the primary benefit of enabling "use strict" at the top of your JavaScript files?',
          bn: 'জাভাস্ক্রিপ্ট ফাইলের শীর্ষে "use strict" চালু করার মূল সুবিধা কী?'
        },
        options: [
          { en: 'It prevents accidental global variables and turns silent errors into throw exceptions', bn: 'এটি অসাবধানতাবশত গ্লোবাল ভেরিয়েবল তৈরি বন্ধ করে এবং লুকানো ভুলগুলোকে স্পষ্ট এররে পরিণত করে' },
          { en: 'It converts JavaScript into TypeScript automatically', bn: 'এটি জাভাস্ক্রিপ্টকে স্বয়ংক্রিয়ভাবে টাইপস্ক্রিপ্টে রূপান্তর করে' },
          { en: 'It increases network download speeds', bn: 'এটি ডাউনলোডের গতি বাড়িয়ে দেয়' },
          { en: 'It disables all console.log output', bn: 'এটি কনসোলের সব আউটপুট বন্ধ করে' }
        ],
        answer: 0,
        hint: {
          en: 'It enforces strict coding hygiene.',
          bn: 'এটি কোডিংয়ে কঠোর শৃঙ্খলা নিশ্চিত করে।'
        },
        explanation: {
          en: '"use strict" catches common mistakes like undeclared variable assignments, throwing immediate exceptions rather than silently failing or creating global variables.',
          bn: '"use strict" ঘোষণা ছাড়া ভেরিয়েবল ব্যবহার করার মতো মারাত্মক ভুলগুলো শনাক্ত করে সাথে সাথে এক্সেপশন ছুড়ে দেয়।'
        }
      },
      {
        id: 'sq3',
        kind: 'mcq',
        topic: 'js: Temporal Dead Zone access',
        question: {
          en: 'What occurs when code attempts to access a variable declared with let before its declaration line?',
          bn: 'let দিয়ে ঘোষিত কোনো ভেরিয়েবলকে তার ডিক্লারেশন লাইনের পূর্বে অ্যাক্সেস করার চেষ্টা করলে কী ঘটে?'
        },
        options: [
          { en: 'A ReferenceError is thrown because the variable resides in the Temporal Dead Zone (TDZ)', bn: 'একটি ReferenceError ঘটে কারণ ভেরিয়েবলটি তখনো টেম্পোরাল ডেড জোনে (TDZ) থাকে' },
          { en: 'The variable silently returns undefined', bn: 'ভেরিয়েবলটি নীরবে undefined প্রদান করে' },
          { en: 'The browser halts all tab execution', bn: 'ব্রাউজার ট্যাবের সব কাজ বন্ধ করে দেয়' },
          { en: 'The variable initializes with zero', bn: 'ভেরিয়েবলটি শূন্য দিয়ে শুরু হয়' }
        ],
        answer: 0,
        hint: {
          en: 'Accessing variables in TDZ throws ReferenceError.',
          bn: 'TDZ-এ থাকা ভেরিয়েবল অ্যাক্সেস করলে ReferenceError আসে।'
        },
        explanation: {
          en: 'Variables declared with let and const are hoisted into their block scope but cannot be accessed before their declaration line, living in the Temporal Dead Zone.',
          bn: 'let ও const দিয়ে ঘোষিত ভেরিয়েবল হোইস্ট হলেও ডিক্লারেশনের আগে অ্যাক্সেসযোগ্য হয় না, ফলে রেফারেন্স এরর ঘটে।'
        }
      },
      {
        id: 'sq4',
        kind: 'mcq',
        topic: 'js: script defer attribute advantage',
        question: {
          en: 'Why is defer preferred over normal script loading when linking external scripts in HTML head?',
          bn: 'HTML head-এ এক্সটার্নাল স্ক্রিপ্ট যুক্ত করার সময় সাধারণ লোডিংয়ের চেয়ে defer কেন বেশি উপযোগী?'
        },
        options: [
          { en: 'It downloads the script file in parallel without blocking HTML parsing and runs only after the DOM is fully constructed', bn: 'এটি HTML পার্সিং বন্ধ না করেই ব্যাকগ্রাউন্ডে স্ক্রিপ্ট ডাউনলোড করে এবং সম্পূর্ণ DOM তৈরি হওয়ার পর চালায়' },
          { en: 'It minifies the JavaScript code at runtime', bn: 'রানটাইমে কোড মিনিফাই করে' },
          { en: 'It encrypts local storage data', bn: 'লোকাল স্টোরেজের ডেটা এনক্রিপ্ট করে' },
          { en: 'It disables all CSS styling', bn: 'সব সিএসএস স্টাইল বন্ধ করে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Non-blocking parallel download with post-DOM execution.',
          bn: 'পার্সিং বন্ধ না করে ব্যাকগ্রাউন্ড ডাউনলোড ও DOM তৈরির পর এক্সিকিউশন।'
        },
        explanation: {
          en: 'The defer attribute enables background downloading without stalling DOM generation, firing callbacks in document order once DOMContentLoaded is reached.',
          bn: 'defer অ্যাট্রিবিউট নিশ্চিত করে যে ব্রাউজার স্ক্রিপ্টের অপেক্ষায় পেইজ লোড বন্ধ রাখবে না।'
        }
      }
    ]
  }
};
