import type { Lesson } from '../../../lib/types';

export const tighteningBenchLesson: Lesson = {
  slug: 'ts-tightening-bench',
  tech: 'typescript',
  title: {
    en: 'TypeScript Tooling: tsconfig, Strict Flags, Declaration Merging & satisfies',
    bn: 'টাইপস্ক্রিপ্ট টুলিং: tsconfig, স্ট্রিক্ট ফ্ল্যাগ, ডিক্লারেশন মার্জিং ও satisfies'
  },
  summary: {
    en: 'Master enterprise TypeScript configuration across 10 structured topics: tsconfig.json architecture, the master strict flag, strictNullChecks defense, noImplicitAny, noUncheckedIndexedAccess honesty, declaration files (.d.ts), DefinitelyTyped (@types) integration, declaration merging and module augmentation, the satisfies operator, and const type parameters.',
    bn: '১০টি সুসংগঠিত পয়েন্টে করপোরেট টাইপস্ক্রিপ্ট কনফিগারেশন আয়ত্ত করুন: tsconfig.json স্থাপত্য, প্রধান strict ফ্ল্যাগ, strictNullChecks সুরক্ষা, noImplicitAny নিয়ম, noUncheckedIndexedAccess সততা, ডিক্লারেশন ফাইল (.d.ts), DefinitelyTyped (@types) প্যাকেজ, ডিক্লারেশন মার্জিং ও মডিউল অগমেন্টেশন, satisfies অপারেটর এবং const টাইপ প্যারামিটার।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-dom-inventory',
    title: {
      en: 'TypeScript in the Browser: DOM Elements, Events & Type Casting',
      bn: 'ব্রাউজারে টাইপস্ক্রিপ্ট: DOM এলিমেন্ট, ইভেন্টস ও টাইপ কাস্টিং'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The TypeScript Engine: tsconfig.json Anatomy', bn: '১. টাইপস্ক্রিপ্ট ইঞ্জিন: tsconfig.json-এর মূল রূপরেখা' } },
    {
      type: 'para',
      text: {
        en: 'The TypeScript compiler configuration file, named tsconfig.json, sits at the root of a project to direct the compiler (tsc) and coordinate build tools like linters and bundlers. It defines compilerOptions (how source files compile), include (which files are processed), and exclude (which folders are skipped, such as third-party packages and build output folders).',
        bn: 'প্রজেক্টের রুটে থাকা টাইপস্ক্রিপ্ট কম্পাইলার কনফিগারেশন ফাইল tsconfig.json মূলত কম্পাইলারকে (tsc) পরিচালনা করে এবং লিন্টার ও বান্ডলারের সঙ্গে সমন্বয় ঘটায়। এর ভেতরে compilerOptions (কীভাবে কোড কম্পাইল হবে), include (কোন ফাইল প্রসেস করা হবে) এবং exclude (কোন কোন ফোল্ডার বাদ থাকবে, যেমন থার্ড-পার্টি প্যাকেজ বা আউটপুট ফোল্ডার) সংজ্ঞায়িত থাকে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Strictness Hardening Pipeline',
        bn: 'স্ট্রিক্টনেস হার্ডেনিং পাইপলাইন'
      },
      caption: {
        en: 'Enabling strict flags transforms the compiler from a loose linter into a rigorous invariant checker.',
        bn: 'স্ট্রিক্ট ফ্ল্যাগগুলো সক্রিয় করলে কম্পাইলার সাধারণ লিন্টার থেকে নিখুঁত গাণিতিক যাচাইকারীতে পরিণত হয়।'
      },
      svg: `<svg viewBox="0 0 680 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="180" rx="10" fill="#0f172a"/>
  <rect x="30" y="35" width="180" height="110" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
  <text x="120" y="65" text-anchor="middle" fill="#fb7185" font-size="14" font-weight="bold" font-family="monospace">Lax Config</text>
  <text x="120" y="95" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="monospace">strict: false</text>
  <text x="120" y="118" text-anchor="middle" fill="#fda4af" font-size="12" font-family="monospace">Runtime Crashes</text>
  <path d="M 220 90 L 260 90" stroke="#64748b" stroke-width="2"/>
  <rect x="270" y="35" width="180" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="360" y="65" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold" font-family="monospace">strict: true</text>
  <text x="360" y="95" text-anchor="middle" fill="#e2e8f0" font-size="12" font-family="monospace">strictNullChecks</text>
  <text x="360" y="118" text-anchor="middle" fill="#e2e8f0" font-size="12" font-family="monospace">noImplicitAny</text>
  <path d="M 460 90 L 500 90" stroke="#64748b" stroke-width="2"/>
  <rect x="510" y="35" width="140" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <text x="580" y="65" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold" font-family="monospace">Hardened Code</text>
  <text x="580" y="95" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="monospace">Zero Any Holes</text>
  <text x="580" y="118" text-anchor="middle" fill="#a7f3d0" font-size="12" font-family="monospace">Compile Guarantees</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'json',
      code: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "skipLibCheck": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}`,
      caption: {
        en: 'A production tsconfig.json balances modern JavaScript targets with strict type auditing.',
        bn: 'প্রোডাকশন মানের tsconfig.json আধুনিক আউটপুট ও কঠোর টাইপ সুরক্ষা নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Sovereign Guard: The strict Flag', bn: '২. প্রধান নিরাপত্তা বলয়: strict: true ফ্ল্যাগ' } },
    {
      type: 'para',
      text: {
        en: 'Setting "strict": true enables an entire family of type-checking behaviors at once. It turns on strictNullChecks, noImplicitAny, strictFunctionTypes, strictBindCallApply, and noImplicitThis, converting TypeScript from a polite suggestion engine into an airtight mathematical verifier.',
        bn: '"strict": true চালু করলে এক ক্লিকেই একঝাঁক নিরাপত্তা ফ্ল্যাগ সক্রিয় হয়ে ওঠে। এটি strictNullChecks, noImplicitAny, strictFunctionTypes ইত্যাদিকে অন করে দেয়, ফলে টাইপস্ক্রিপ্ট সাধারণ পরামর্শদাতার বদলে একটি কঠোর ও নির্ভরযোগ্য কোড যাচাইকারীতে রূপান্তরিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `# Compiling with strict mode enabled:
npx tsc --noEmit

# Output with strict: false -> Compiles with zero warnings despite fatal runtime crashes
# Output with strict: true  -> Catches 4 potential undefined access bugs before deployment!`,
      caption: {
        en: 'strict: true enforces comprehensive static analysis, catching production runtime crashes in your editor.',
        bn: 'strict: true এডিটরেই রানটাইম ক্র্যাশ শনাক্ত করে কোডবেসকে ১০০% নিরাপদ রাখে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Banishing Null Pointer Exceptions: strictNullChecks', bn: '৩. নাল এক্সেপশন চিরতরে দূর: strictNullChecks' } },
    {
      type: 'para',
      text: {
        en: 'Without strictNullChecks, null and undefined are silently accepted as valid values for EVERY type (numbers, strings, objects). With strictNullChecks enabled, null and undefined exist as distinct types, forcing developers to guard or provide fallbacks before accessing properties.',
        bn: 'strictNullChecks বন্ধ থাকলে null এবং undefined যে কোনো টাইপের (string, number) ভেতর লুকিয়ে থাকতে পারে। কিন্তু এটি চালু রাখলে null ও undefined সম্পূর্ণ আলাদা টাইপ হিসেবে গণ্য হয়, ফলে কোনো প্রোপার্টি ব্যবহারের আগে ডেভেলপারকে অবশ্যই চেক বা ডিফল্ট মান দিতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `function getInitials(name: string | null): string {
  // ❌ Error under strictNullChecks: 'name' is possibly 'null'
  // return name.toUpperCase();

  // ✅ Safe: Exhaustive null guard protects runtime
  if (name === null) {
    return "N/A";
  }
  return name.slice(0, 2).toUpperCase();
}

console.log(getInitials("Arif")); // "AR"
console.log(getInitials(null));   // "N/A"`,
      caption: {
        en: 'strictNullChecks mandates explicit handling of nullish states before member access.',
        bn: 'strictNullChecks কোনো মেম্বার অ্যাক্সেস করার আগে নাল ভ্যালু চেক করা বাধ্যতামূলক করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Eliminating Untyped Blind Spots: noImplicitAny', bn: '৪. টাইপহীন অন্ধকার দূরীকরণ: noImplicitAny' } },
    {
      type: 'para',
      text: {
        en: 'When TypeScript cannot deduce a type from usage and no annotation is provided, it falls back to any. Under noImplicitAny: true, the compiler throws an error whenever a variable or function parameter silently slips into the unverified any black hole.',
        bn: 'যখন টাইপস্ক্রিপ্ট নিজে থেকে টাইপ বুঝতে পারে না এবং ব্যবহারকারীও কোনো টাইপ লেখেন না, তখন ডিফল্টভাবে any ধরে নেওয়া হয়। noImplicitAny: true দিলে কোনো ভ্যারিয়েবল বা প্যারামিটার যেন নীরবে any টাইপে পরিণত না হতে পারে, সেজন্য কম্পাইলার সাথে সাথে লাল এরর দেখায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// ❌ Rejected under noImplicitAny: Parameter 'amount' implicitly has an 'any' type
// function calculateVat(amount) { return amount * 0.15; }

// ✅ Approved: Explicit contract specified
function calculateVat(amount: number): number {
  return amount * 0.15;
}

console.log(calculateVat(200)); // 30`,
      caption: {
        en: 'noImplicitAny eliminates accidental loss of type-checker vigilance.',
        bn: 'noImplicitAny অজান্তে টাইপ ভেরিফিকেশন বন্ধ হয়ে যাওয়ার ঝুঁকি দূর করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Honest Array Indexing: noUncheckedIndexedAccess', bn: '৫. সত্যনিষ্ঠ ইনডেক্সিং: noUncheckedIndexedAccess' } },
    {
      type: 'para',
      text: {
        en: 'By default, TypeScript assumes array lookups always succeed: scores[0] is typed as number, even if scores is an empty array! Enabling "noUncheckedIndexedAccess": true honestly types all dynamic index accesses as Type | undefined, preventing out-of-bounds crashes.',
        bn: 'ডিফল্টভাবে টাইপস্ক্রিপ্ট ধরে নেয় যে কোনো অ্যারেতে ইনডেক্স অ্যাক্সেস করলে মান পাওয়া যাবেই: scores[0]-কে সরাসরি number ভাবা হয়, যদিও অ্যারেটি ফাঁকা হতে পারে! "noUncheckedIndexedAccess": true চালু করলে ইনডেক্স থেকে আসা মানকে Type | undefined হিসেবে চিহ্নিত করা হয়, যা ক্র্যাশ হওয়া থেকে রক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `const scores: number[] = [];

// With noUncheckedIndexedAccess: true
const firstScore = scores[0]; // Type: number | undefined (Honest!)

// ❌ Error: Object is possibly 'undefined'
// console.log(firstScore.toFixed(2));

// ✅ Safe check:
if (firstScore !== undefined) {
  console.log(firstScore.toFixed(2));
} else {
  console.log("No score recorded yet!"); // "No score recorded yet!"
}`,
      caption: {
        en: 'noUncheckedIndexedAccess forces code to acknowledge that dynamic lookups can miss.',
        bn: 'noUncheckedIndexedAccess মনে করিয়ে দেয় যে ডায়নামিক ইনডেক্স খালিও হতে পারে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Ambient Type Declarations: Demystifying .d.ts Files', bn: '৬. অ্যাম্বিয়েন্ট টাইপ ঘোষণা: .d.ts ফাইলের ভূমিকা' } },
    {
      type: 'para',
      text: {
        en: 'A declaration file (.d.ts) contains pure type definitions with ZERO runtime code. It describes the API shapes of external JavaScript libraries to the compiler using the declare keyword. Declaration files act as contracts so TypeScript knows what functions and variables exist.',
        bn: 'একটি ডিক্লারেশন ফাইলে (.d.ts) কোনো রানটাইম জাভাস্ক্রিপ্ট কোড থাকে না, থাকে কেবল খাঁটি টাইপ ডেফিনিশন। বাইরের কোনো প্লেইন জাভাস্ক্রিপ্ট লাইব্রেরির ভেতরের ফাংশন ও ভ্যারিয়েবলের কাঠামো declare কিওয়ার্ড দিয়ে কম্পাইলারকে জানিয়ে দেওয়াই এর প্রধান কাজ।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Inside types/global.d.ts (Ambient Type Declarations):
declare const APP_VERSION: string;
declare function trackMetric(eventName: string, latencyMs: number): void;

// Inside src/index.ts:
console.log("Running app version:", APP_VERSION);
trackMetric("page_view", 42); // Valid: Compiler knows these global signatures exist!`,
      caption: {
        en: 'Declaration files (.d.ts) document APIs for the compiler without adding JavaScript bytes.',
        bn: 'ডিক্লারেশন ফাইল (.d.ts) রানটাইম সাইজ না বাড়িয়েই কম্পাইলারকে টাইপের তথ্য দেয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. DefinitelyTyped: The @types Ecosystem', bn: '৭. DefinitelyTyped: @types ইকোসিস্টেম' } },
    {
      type: 'para',
      text: {
        en: 'Many established npm packages (like Express or Lodash) are written in plain JavaScript. The community maintains DefinitelyTyped, a giant GitHub repository containing .d.ts files published under the @types npm scope. Installing @types/node or @types/express provides instant autocomplete and type checking.',
        bn: 'অনেক জনপ্রিয় npm প্যাকেজ (যেমন Express বা Lodash) সরাসরি জাভাস্ক্রিপ্টে লেখা। সেগুলোতে টাইপস্ক্রিপ্ট সাপোর্ট দিতে কমিউনিটি DefinitelyTyped রিপোজিটরির মাধ্যমে @types নামে টাইপ ফাইল প্রকাশ করে। npm install -D @types/express বা @types/node দিলেই নিমিষে টাইপ চেকিং এবং অটো-কমপ্লিট সুবিধা পাওয়া যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Installing type definitions for Node.js and Express:
npm install --save-dev @types/node @types/express

# Result:
# TypeScript instantly resolves Node built-ins (fs, path, process)
# and Express Request/Response interfaces with complete static typing!`,
      caption: {
        en: '@types packages deliver community-authored declaration files for JavaScript libraries.',
        bn: '@types প্যাকেজগুলো সাধারণ জাভাস্ক্রিপ্ট লাইব্রেরিকে টাইপস্ক্রিপ্টের উপযোগী করে তোলে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Extending Environments: Declaration Merging & Module Augmentation', bn: '৮. পরিবেশ সম্প্রসারণ: ডিক্লারেশন মার্জিং ও মডিউল অগমেন্টেশন' } },
    {
      type: 'para',
      text: {
        en: 'TypeScript Interfaces possess a unique power: Declaration Merging. If multiple interfaces share the exact same name within a scope, TypeScript automatically merges their fields into a single combined interface. This powers Module Augmentation, allowing you to add custom properties to Express Request or Window.',
        bn: 'টাইপস্ক্রিপ্ট ইন্টারফেসের একটি বিশেষ ক্ষমতা হলো Declaration Merging। একই নামের একাধিক ইন্টারফেস থাকলে কম্পাইলার তাদের সব প্রোপার্টি একসাথে মিলিয়ে একটি বড় ইন্টারফেসে পরিণত করে। এর সাহায্যে Module Augmentation করে Express-এর Request অবজেক্ট বা ব্রাউজারের Window-তে নতুন প্রোপার্টি যুক্ত করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Augmenting Express Request to include authenticated user session:
declare global {
  namespace Express {
    interface Request {
      user?: { id: string; role: "admin" | "member" };
    }
  }
}

// In your middleware:
function authMiddleware(req: Express.Request) {
  req.user = { id: "usr_99", role: "admin" }; // Fully typed and validated!
  console.log("Authenticated user:", req.user.role);
}
authMiddleware({} as Express.Request); // "Authenticated user: admin"`,
      caption: {
        en: 'Declaration merging allows augmenting third-party library types seamlessly.',
        bn: 'ডিক্লারেশন মার্জিংয়ের মাধ্যমে বাইরের লাইব্রেরির টাইপ অবজেক্টে নিজস্ব প্রোপার্টি যোগ করা যায়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Precise Literal Validation: The satisfies Operator', bn: '৯. নিখুঁত লিটারেল ভ্যালিডেশন: satisfies অপারেটর' } },
    {
      type: 'para',
      text: {
        en: 'Prior to TypeScript 4.9, assigning a type annotation (const cfg: Config = ...) caused the compiler to WIDEN literal values, losing specific string and number types. The satisfies operator validates that an object matches a contract WITHOUT widening its inferred type.',
        bn: 'TypeScript ৪.৯ ভার্সনের আগে টাইপ অ্যানোটেশন দিলে অবজেক্টের লিটারেল মানগুলো প্রসারিত (widen) হয়ে সাধারণ string বা number হয়ে যেত। satisfies অপারেটর নিশ্চিত করে যে অবজেক্টটি একটি নির্দিষ্ট চুক্তি মেনে চলছে, কিন্তু একই সাথে তার নিখুঁত লিটারেল টাইপ অক্ষত রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `type ThemePalette = Record<string, string | [number, number, number]>;

// Using satisfies instead of type annotation:
const palette = {
  primary: "#3b82f6",
  accent: [255, 99, 71]
} satisfies ThemePalette;

// TypeScript preserves exact tuple structure instead of widening to (string | number[])!
palette.primary.toUpperCase(); // ✅ Valid! Compiler knows primary is specifically a string!
palette.accent[0].toFixed(2);  // ✅ Valid! Compiler knows accent is a tuple of numbers!
console.log(palette.primary);  // "#3b82f6"`,
      caption: {
        en: 'satisfies validates contracts while preserving the narrowest possible inferred types.',
        bn: 'satisfies চুক্তি ঠিক রেখেও মানের সবচেয়ে সুনির্দিষ্ট টাইপ সংরক্ষণ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Preserving Literal Types: Const Type Parameters', bn: '১০. লিটারেল টাইপ সুরক্ষা: Const টাইপ প্যারামিটার (<const T>)' } },
    {
      type: 'para',
      text: {
        en: 'TypeScript 5.0 introduced Const Type Parameters (<const T>). In generic functions, passing an array or object literal typically widens strings to string[]. Adding the const modifier instructs the compiler to infer the arguments as deeply readonly literal tuples, eliminating the need for callers to append as const manually.',
        bn: 'TypeScript ৫.০ ভার্সনে Const Type Parameters (<const T>) যুক্ত হয়। সাধারণ জেনেরিক ফাংশনে কোনো অ্যারে দিলে তা সাধারণ string[] হয়ে যায়। কিন্তু <const T> লিখলে কলারকে নিজে হাতে as const না লিখেই কম্পাইলার পুরো আর্গুমেন্টকে স্বয়ংক্রিয়ভাবে রিড-অনলি লিটারেল টাপলে পরিণত করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Function with const type parameter:
function createRouteConfig<const T extends string[]>(routes: T): T {
  return routes;
}

const myRoutes = createRouteConfig(["/home", "/about", "/dashboard"]);
// Inferred Type: readonly ["/home", "/about", "/dashboard"]
// (Instead of widened string[]!)

console.log(myRoutes[0]); // "/home"`,
      caption: {
        en: 'Const type parameters (<const T>) infer exact literal types without caller boilerplate.',
        bn: '<const T> কোনো বাড়তি কোড ছাড়াই কল করার সময় নিখুঁত লিটারেল টাইপ বজায় রাখে।'
      }
    }
  ],
  exercises: [
    {
      id: 'ts-tig-ex1',
      kind: 'predict',
      topic: 'typescript: satisfies operator',
      question: {
        en: 'Which TypeScript operator validates that a value matches a contract without widening its inferred literal types?',
        bn: 'মানের নিজস্ব লিটারেল টাইপ না হারিয়ে কোনো ভ্যালু চুক্তি মেনে চলছে কি না তা নিশ্চিত করতে কোন অপারেটরটি ব্যবহৃত হয়?'
      },
      code: `/* Validate config against ConfigType without widening */
/* const appConfig = { port: 3000 } _________ ConfigType; */`,
      answer: 'satisfies',
      accept: ['satisfies', 'satisfies operator'],
      hint: {
        en: 'It satisfies the type constraint.',
        bn: 'এটি টাইপ শর্ত সন্তুষ্ট বা পূরণ করে।'
      },
      explanation: {
        en: 'The satisfies operator checks compatibility against a type while keeping the most specific inferred type for the assigned expression.',
        bn: 'satisfies অপারেটর মানটিকে প্রসারিত না করে তার আসল সুনির্দিষ্ট টাইপ বহাল রেখেই টাইপ যাচাই সম্পন্ন করে।'
      }
    },
    {
      id: 'ts-tig-ex2',
      kind: 'mcq',
      topic: 'typescript: declaration files purpose',
      question: {
        en: 'What is contained inside a TypeScript declaration file (.d.ts)?',
        bn: 'একটি টাইপস্ক্রিপ্ট ডিক্লারেশন ফাইলের (.d.ts) ভেতরে কী থাকে?'
      },
      options: [
        { en: 'Pure type definitions and ambient declarations with zero emitted runtime JavaScript', bn: 'কোনো রানটাইম কোড ছাড়া শুধুমাত্র খাঁটি টাইপ ডেফিনিশন ও অ্যাম্বিয়েন্ট ডিক্লারেশন' },
        { en: 'Compiled machine assembly', bn: 'কম্পাইল করা মেশিন কোড' },
        { en: 'CSS stylesheets', bn: 'সিএসএস স্টাইলশিট' },
        { en: 'Database migrations', bn: 'ডেটাবেস মাইগ্রেশন' }
      ],
      answer: 0,
      hint: {
        en: 'Types only, no runtime code.',
        bn: 'শুধুমাত্র টাইপ, কোনো রানটাইম কোড থাকে না।'
      },
      explanation: {
        en: '.d.ts files exist solely to supply type information to the compiler; they produce zero JavaScript output when built.',
        bn: '.d.ts ফাইল কেবল কম্পাইলারকে টাইপের তথ্য দেওয়ার জন্য থাকে, বিল্ডের সময় এগুলো থেকে কোনো জাভাস্ক্রিপ্ট উৎপন্ন হয় না।'
      }
    },
    {
      id: 'ts-tig-ex3',
      kind: 'mcq',
      topic: 'typescript: declaration merging',
      question: {
        en: 'What happens when two interfaces with the exact same name are declared in the same scope?',
        bn: 'একই স্কোপের ভেতর হুবহু একই নামের দুটি ইন্টারফেস ঘোষণা করলে কী ঘটে?'
      },
      options: [
        { en: 'TypeScript merges their member fields into a single combined interface', bn: 'টাইপস্ক্রিপ্ট তাদের সমস্ত মেম্বার ফিল্ড একত্র করে একটি একক ইন্টারফেসে রূপান্তর করে' },
        { en: 'The compiler crashes with a duplicate identifier error', bn: 'ডুপ্লিকেট এরর দিয়ে ক্র্যাশ করে' },
        { en: 'The second interface overwrites and deletes the first one', bn: 'দ্বিতীয়টি প্রথমটিকে মুছে দেয়' },
        { en: 'All properties become optional', bn: 'সব প্রোপার্টি অপশনাল হয়ে যায়' }
      ],
      answer: 0,
      hint: {
        en: 'They merge together.',
        bn: 'তারা একত্রে মার্জ হয়ে যায়।'
      },
      explanation: {
        en: 'Declaration merging allows multiple interface definitions of the same name to combine, which powers module augmentation in libraries.',
        bn: 'ডিক্লারেশন মার্জিংয়ের মাধ্যমে একই নামের একাধিক ইন্টারফেস একীভূত হয়, যা লাইব্রেরির টাইপ বর্ধিত করতে সাহায্য করে।'
      }
    }
  ],
  quiz: {
    id: 'ts-tightening-quiz',
    title: { en: 'TypeScript Configuration & Tooling Quiz', bn: 'টাইপস্ক্রিপ্ট কনফিগারেশন ও টুলিং কুইজ' },
    questions: [
      {
        id: 'ttq1',
        kind: 'mcq',
        topic: 'typescript: noUncheckedIndexedAccess benefit',
        question: {
          en: 'What safety guarantee does "noUncheckedIndexedAccess": true provide?',
          bn: '"noUncheckedIndexedAccess": true চালু করলে কোন নিরাপত্তা নিশ্চিত হয়?'
        },
        options: [
          { en: 'Array lookups and dictionary index accesses are honestly typed as Type | undefined to prevent out-of-bounds crashes', bn: 'অ্যারে বা ডিকশনারি ইনডেক্সিংকে Type | undefined হিসেবে চিহ্নিত করে যাতে মেমরির বাইরের ক্র্যাশ রোধ করা যায়' },
          { en: 'It makes network requests run faster', bn: 'নেটওয়ার্ক রিকোয়েস্ট দ্রুত হয়' },
          { en: 'It converts arrays to linked lists', bn: 'অ্যারে লিঙ্কড লিস্টে পরিণত হয়' },
          { en: 'It prevents using console.log', bn: 'console.log ব্যবহার বন্ধ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Indexed lookups become Type | undefined.',
          bn: 'ইনডেক্স থেকে আসা মান Type | undefined হয়ে যায়।'
        },
        explanation: {
          en: 'noUncheckedIndexedAccess acknowledges that arbitrary index access can miss, enforcing undefined guards before usage.',
          bn: 'noUncheckedIndexedAccess নিশ্চিত করে যে ইনডেক্সে কোনো মান নাও থাকতে পারে, ফলে ব্যবহারের আগে নাল চেক করতে বাধ্য করে।'
        }
      },
      {
        id: 'ttq2',
        kind: 'mcq',
        topic: 'typescript: strictNullChecks impact',
        question: {
          en: 'Why is strictNullChecks considered one of the most critical flags in TypeScript?',
          bn: 'strictNullChecks কেন টাইপস্ক্রিপ্টের সবচেয়ে গুরুত্বপূর্ণ ফ্ল্যাগগুলোর একটি হিসেবে বিবেচিত হয়?'
        },
        options: [
          { en: 'It prevents null and undefined from being silently assigned to ordinary types, wiping out the "Cannot read properties of undefined" error class', bn: 'এটি সাধারণ টাইপের ভেতর null বা undefined ঢুকে যাওয়া বন্ধ করে "Cannot read properties of undefined" ক্র্যাশ চিরতরে দূর করে' },
          { en: 'It removes all comments from code', bn: 'কোড থেকে সব কমেন্ট মুছে দেয়' },
          { en: 'It converts numbers into floating points', bn: 'সংখ্যাকে ফ্লোটে রূপান্তর করে' },
          { en: 'It downloads node_modules faster', bn: 'node_modules দ্রুত ডাউনলোড করে' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents reading properties of null/undefined.',
          bn: 'null/undefined থেকে প্রোপার্টি রিড করার ক্র্যাশ বন্ধ করে।'
        },
        explanation: {
          en: 'strictNullChecks makes null and undefined distinct types, ensuring developers explicitly handle absence before reading properties.',
          bn: 'strictNullChecks এর ফলে কোনো ভ্যালু খালি থাকার সম্ভাবনা থাকলে তা আগে থেকেই হ্যান্ডল করা নিশ্চিত হয়।'
        }
      },
      {
        id: 'ttq3',
        kind: 'mcq',
        topic: 'typescript: satisfies operator advantage',
        question: {
          en: 'What is the primary advantage of using the satisfies operator instead of a type annotation (const x = value satisfies Type)?',
          bn: 'টাইপ অ্যানোটেশনের বদলে satisfies অপারেটর (const x = value satisfies Type) ব্যবহারের প্রধান সুবিধা কী?'
        },
        options: [
          { en: 'It verifies the value matches the type without widening or losing the specific literal types and keys of the value', bn: 'এটি মানটি টাইপের সাথে মিলছে কিনা তা যাচাই করে, অথচ ভ্যালুর নিখুঁত লিটারেল টাইপ এবং কি-গুলোকে প্রশস্ত বা নষ্ট করে না' },
          { en: 'It disables all TypeScript compiler checks on the variable', bn: 'এটি ভেরিয়েবলের ওপর সব টাইপস্ক্রিপ্ট কম্পাইলার চেক নিষ্ক্রিয় করে দেয়' },
          { en: 'It automatically minifies the resulting JavaScript bundle', bn: 'এটি চূড়ান্ত জাভাস্ক্রিপ্ট বান্ডেল স্বয়ংক্রিয়ভাবে মিনিফাই করে' },
          { en: 'It converts objects directly into JSON schemas at runtime', bn: 'এটি রানটাইমে অবজেক্টকে সরাসরি জেএসএন স্কিমায় রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Preserves literal types while enforcing conformance.',
          bn: 'টাইপের শর্ত পূরণ নিশ্চিত করেও সূক্ষ্ম লিটারেল টাইপ অক্ষুণ্ণ রাখে।'
        },
        explanation: {
          en: 'The satisfies operator validates that an expression matches a contract without changing its inferred type, preserving literal property keys and types.',
          bn: 'satisfies অপারেটর টাইপ মিলিয়ে নেয় ঠিকই, কিন্তু টাইপকে সাধারণ বা ওয়াইড করে না, ফলে অবজেক্টের নিজস্ব লিটারেল মান অক্ষত থাকে।'
        }
      },
      {
        id: 'ttq4',
        kind: 'mcq',
        topic: 'typescript: const type parameters modifier',
        question: {
          en: 'What does the const type parameter modifier (e.g. <const T>) accomplish in generic functions?',
          bn: 'জেনেরিক ফাংশনে const টাইপ প্যারামিটার (<const T>) যুক্ত করলে কী সুবিধা পাওয়া যায়?'
        },
        options: [
          { en: 'It instructs TypeScript to infer argument types as deeply readonly literals rather than widened primitive types', bn: 'এটি কম্পাইলারকে আর্গুমেন্টের মান প্রশস্ত প্রিমিটিভ টাইপের বদলে নিখুঁত ও অপরিবর্তনীয় রিডঅনলি লিটারেল হিসেবে ধরতে নির্দেশ দেয়' },
          { en: 'It prevents the function from ever being called more than once', bn: 'এটি ফাংশনটি একাধিকবার কল করা সম্পূর্ণরূপে নিষিদ্ধ করে' },
          { en: 'It changes variable scope from local to global', bn: 'এটি ভেরিয়েবলের স্কোপ লোকাল থেকে গ্লোবালে রূপান্তর করে' },
          { en: 'It deletes all null values from arguments before execution', bn: 'কোড চলার আগে আর্গুমেন্ট থেকে সব নাল মান মুছে ফেলে' }
        ],
        answer: 0,
        hint: {
          en: 'Infers deeply immutable literal structures.',
          bn: 'গভীরভাবে অপরিবর্তনীয় লিটারেল মান অনুমান করে।'
        },
        explanation: {
          en: 'Const type parameters (<const T>) trigger const inference without requiring callers to manually append "as const" onto every argument.',
          bn: 'const টাইপ প্যারামিটার ব্যবহারের ফলে কল করার সময় বারবার "as const" লেখার ঝামেলা ছাড়াই গভীর লিটারেল টাইপ অক্ষুণ্ণ থাকে।'
        }
      }
    ]
  }
};
