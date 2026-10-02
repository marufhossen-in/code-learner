import type { Lesson } from '../../../lib/types';

export const typeFoundryLesson: Lesson = {
  slug: 'ts-type-factory',
  tech: 'typescript',
  title: {
    en: 'TypeScript Advanced Types: Mapped, Conditional & Template Literal Types',
    bn: 'টাইপস্ক্রিপ্ট অ্যাডভান্সড টাইপস: ম্যাপড, কন্ডিশনাল ও টেমপ্লেট লিটারেল টাইপ'
  },
  summary: {
    en: 'Master advanced type-level programming across 10 structured topics: mapped type loops ([K in keyof T]), mapping modifiers (+/- readonly and ?), key remapping with as clauses, conditional types (T extends U ? X : Y), distributive conditional types, type inference with infer, non-distributive tuple checks, template literal types, string manipulation intrinsics, and index signatures vs Record.',
    bn: '১০টি সুসংগঠিত পয়েন্টে টাইপস্ক্রিপ্টের উন্নত মেটা-প্রোগ্রামিং আয়ত্ত করুন: ম্যাপড টাইপ লুপ ([K in keyof T]), ম্যাপিং মডিফায়ার (+/- readonly ও ?), as ধারা দিয়ে কি রূপান্তর, কন্ডিশনাল টাইপ (T extends U ? X : Y), ডিস্ট্রিবিউটিভ কন্ডিশনাল টাইপ, infer দিয়ে টাইপ আবিষ্কার, নন-ডিস্ট্রিবিউটিভ চেকিং, টেমপ্লেট লিটারেল টাইপ, স্ট্রিং ম্যানিপুলেশন টাইপ এবং ইনডেক্স সিগনেচার বনাম Record।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'ts-tightening-bench',
    title: {
      en: 'The Tightening Bench: tsconfig, Strict Flags & Declaration Merging',
      bn: 'টাইটনিং বেঞ্চ: tsconfig, স্ট্রিক্ট ফ্ল্যাগ ও ডিক্লারেশন মার্জিং'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Type-Level Loop: Mapped Types Syntax', bn: '১. টাইপ-স্তরের লুপ: ম্যাপড টাইপসের সিনট্যাক্স' } },
    {
      type: 'para',
      text: {
        en: 'A Mapped Type is a type-level loop. Instead of manually re-declaring properties for every shape variation, you iterate over keys using the syntax [K in keyof T]: T[K]. This generates a new type by applying a transformation to every existing property in T.',
        bn: 'ম্যাপড টাইপ হলো টাইপস্ক্রিপ্টের ভেতরের একটি লুপ। বারবার প্রতিটি প্রোপার্টি নিজে হাতে না লিখে [K in keyof T]: T[K] সিনট্যাক্স দিয়ে একটি অবজেক্টের সব কি (key) ধরে লুপ চালানো যায়। এর মাধ্যমে যেকোনো বিদ্যমান অবজেক্ট থেকে সহজেই নতুন রূপের টাইপ তৈরি করা সম্ভব হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Building a custom clone of TypeScript's Partial utility:
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

interface UserProfile {
  name: string;
  age: number;
}

// Resulting transformed type:
type NullableUser = Nullable<UserProfile>;
// Equivalent to:
// { name: string | null; age: number | null; }

const user: NullableUser = {
  name: "Rahim",
  age: null // Valid! Null is now explicitly accepted across all fields
};
console.log(user.name); // "Rahim"`,
      caption: {
        en: 'Mapped types iterate over union keys using the [K in Keys] syntax.',
        bn: 'ম্যাপড টাইপস [K in Keys] সিনট্যাক্স দিয়ে অবজেক্টের সমস্ত কি-র ওপর লুপ চালায়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Type Transformation Pipeline',
        bn: 'টাইপ রূপান্তরের পাইপলাইন'
      },
      caption: {
        en: 'Mapped types iterate over input keys and apply modifiers to synthesize new rigid types.',
        bn: 'ম্যাপড টাইপ ইনপুট অবজেক্টের প্রতিটি কি-কে ধরে মডিফায়ার প্রয়োগ করে নতুন রূপান্তর তৈরি করে।'
      },
      svg: `<svg viewBox="0 0 680 180" width="100%" height="180" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="180" rx="10" fill="#0f172a"/>
  <rect x="30" y="35" width="170" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="115" y="65" text-anchor="middle" fill="#38bdf8" font-size="14" font-weight="bold" font-family="monospace">Input Type T</text>
  <text x="115" y="95" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="monospace">id: number</text>
  <text x="115" y="118" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="monospace">name: string</text>
  <path d="M 210 90 L 260 90" stroke="#64748b" stroke-width="2"/>
  <rect x="270" y="35" width="180" height="110" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
  <text x="360" y="65" text-anchor="middle" fill="#c084fc" font-size="14" font-weight="bold" font-family="monospace">[K in keyof T]</text>
  <text x="360" y="95" text-anchor="middle" fill="#e2e8f0" font-size="12" font-family="monospace">+/- readonly</text>
  <text x="360" y="118" text-anchor="middle" fill="#e2e8f0" font-size="12" font-family="monospace">+/- ? optional</text>
  <path d="M 460 90 L 510 90" stroke="#64748b" stroke-width="2"/>
  <rect x="520" y="35" width="130" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <text x="585" y="65" text-anchor="middle" fill="#34d399" font-size="14" font-weight="bold" font-family="monospace">Output Type</text>
  <text x="585" y="95" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="monospace">readonly id</text>
  <text x="585" y="118" text-anchor="middle" fill="#94a3b8" font-size="12" font-family="monospace">name?: string</text>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Mapping Modifiers: Adding and Stripping readonly and ?', bn: '২. ম্যাপিং মডিফায়ার: readonly ও ? যোগ এবং বাদ দেওয়া' } },
    {
      type: 'para',
      text: {
        en: 'Mapped types can add or remove property modifiers using + or - prefixes. Prefixing +readonly (or bare readonly) locks every property into immutable mode; prefixing -readonly strips immutability. Similarly, -? strips the optional question mark, creating a strict Required<T> type.',
        bn: 'ম্যাপড টাইপে + বা - চিহ্ন দিয়ে প্রোপার্টির বৈশিষ্ট্য বদলানো যায়। যেমন +readonly (বা শুধু readonly) দিলে সব প্রোপার্টি রিড-অনলি হয়ে যায়; আর -readonly দিলে রিড-অনলি শর্ত উঠে যায়। একইভাবে -? দিলে অপশনাল চিহ্ন মুছে সব প্রোপার্টিকে বাধ্যতামূলক (Required) বানানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Custom implementation of TypeScript's Required<T> and Readonly<T>:
type Concrete<T> = {
  -readonly [K in keyof T]-?: T[K]; // Strips readonly AND strips optional (?)
};

interface DraftArticle {
  readonly id: number;
  title?: string;
  body?: string;
}

type PublishedArticle = Concrete<DraftArticle>;
// Result:
// { id: number; title: string; body: string; } (All mutable and strictly required!)

const post: PublishedArticle = {
  id: 101,
  title: "TypeScript Deep Dive",
  body: "Mastering mapped types."
};
post.id = 202; // Valid: -readonly removed immutability!
console.log(post.id); // 202`,
      caption: {
        en: 'The -? and -readonly modifier prefixes strip optionality and immutability.',
        bn: '-? এবং -readonly মডিফায়ার দিয়ে অপশনাল ও রিড-অনলি বাধা দূর করা যায়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Key Remapping via as: Property Name Synthesis', bn: '৩. as ধারা দিয়ে কি রিম্যাপিং: প্রোপার্টির নতুন নাম তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'TypeScript 4.1 introduced Key Remapping using the as clause inside mapped types: [K in keyof T as NewKeyType]. This lets you filter keys by mapping them to never, or synthesize getter/setter methods dynamically by combining with template literal types.',
        bn: 'TypeScript ৪.১ ভার্সনে as ধারার সাহায্যে কি-র নাম পরিবর্তনের সুবিধা যুক্ত হয়: [K in keyof T as NewKeyType]। এর সাহায্যে কোনো কি-কে never বানিয়ে ফিল্টার করে বাদ দেওয়া যায়, অথবা টেমপ্লেট লিটারেল টাইপ জুড়ে স্বয়ংক্রিয় গেটার বা সেটার মেথডের নাম তৈরি করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Generate strongly-typed Getter methods from any object schema:
type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K];
};

interface Account {
  balance: number;
  currency: string;
}

type AccountGetters = Getters<Account>;
// Resulting type shape:
// { getBalance: () => number; getCurrency: () => string; }

const actions: AccountGetters = {
  getBalance: () => 5000,
  getCurrency: () => "BDT"
};
console.log(actions.getBalance()); // 5000`,
      caption: {
        en: 'The as clause dynamically synthesizes new property keys during iteration.',
        bn: 'as ক্লজ দিয়ে লুপ চলাকালীন অবজেক্টের কি-র নাম নতুনভাবে তৈরি করা যায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Type-Level Branching: Conditional Types', bn: '৪. টাইপ-স্তরের শর্ত: কন্ডিশনাল টাইপস' } },
    {
      type: 'para',
      text: {
        en: 'Conditional Types introduce ternary logic to the type system: T extends U ? TrueType : FalseType. If the tested type T is assignable to U, the expression evaluates to TrueType; otherwise it evaluates to FalseType. This enables dynamic type transformations based on input shapes.',
        bn: 'কন্ডিশনাল টাইপস টাইপ সিস্টেমে টার্নারি অপারেটর (? :) নিয়ে আসে: T extends U ? TrueType : FalseType। যদি টাইপ T শর্ত U-এর সাথে মিলে যায়, তবে TrueType কার্যকর হয়; অন্যথায় FalseType কার্যকর হয়। এর ফলে ইনপুটের ওপর ভিত্তি করে স্বয়ংক্রিয়ভাবে সঠিক টাইপ নির্বাচন করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Check if a type is an Array, returning its element or itself:
type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>; // Evaluates to: string
type Num = Flatten<number>;   // Evaluates to: number

function unwrap<T>(item: T): Flatten<T> {
  return (Array.isArray(item) ? item[0] : item) as Flatten<T>;
}

console.log(unwrap(["Dhaka", "Chittagong"])); // "Dhaka"
console.log(unwrap(42));                      // 42`,
      caption: {
        en: 'Conditional types resolve to different types depending on subtype assignability.',
        bn: 'কন্ডিশনাল টাইপস শর্ত সাপেক্ষে আলাদা আলাদা টাইপ রিটার্ন করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Distributive Conditional Types: Union Distribution', bn: '৫. ডিস্ট্রিবিউটিভ কন্ডিশনাল টাইপস: ইউনিয়নের ওপর বণ্টন' } },
    {
      type: 'para',
      text: {
        en: 'When a naked (unwrapped) generic type parameter T is evaluated in a conditional type, unions automatically distribute over the condition: (A | B) extends U ? X : Y becomes (A extends U ? X : Y) | (B extends U ? X : Y). This is how standard utility types like Exclude<T, U> work.',
        bn: 'কন্ডিশনাল টাইপে যখন কোনো সাধারণ টাইপ প্যারামিটার T ব্যবহার করা হয়, তখন ইউনিয়ন টাইপ নিজে থেকেই আলাদা আলাদা ভাগে ভাগ হয়ে শর্তের মুখোমুখি হয়: (A | B) ভেঙে গিয়ে (A extends U ? X : Y) | (B extends U ? X : Y) হয়ে যায়। এভাবেই বিল্ট-ইন Exclude<T, U> টাইপ কাজ করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Custom Exclude implementation:
type MyExclude<T, U> = T extends U ? never : T;

type EventTypes = "click" | "hover" | "scroll" | "resize";
// Stripping mouse-related events:
type PageEvents = MyExclude<EventTypes, "click" | "hover">;
// Step 1: "click" extends "click" | "hover" ? never : "click"   -> never
// Step 2: "hover" extends "click" | "hover" ? never : "hover"   -> never
// Step 3: "scroll" extends "click" | "hover" ? never : "scroll" -> "scroll"
// Step 4: "resize" extends "click" | "hover" ? never : "resize" -> "resize"
// Union: never | never | "scroll" | "resize" = "scroll" | "resize"

const ev: PageEvents = "scroll";
console.log(ev); // "scroll"`,
      caption: {
        en: 'Unions automatically distribute across conditional branches, filtering never members.',
        bn: 'ইউনিয়ন সদস্যরা নিজে থেকেই আলাদা হয়ে পরীক্ষা দেয় এবং never অংশগুলো বাদ পড়ে যায়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Type Extraction: The infer Keyword', bn: '৬. টাইপ আবিষ্কার: infer কিওয়ার্ড' } },
    {
      type: 'para',
      text: {
        en: 'Inside conditional types, the infer keyword introduces a type variable that TypeScript deduces dynamically from the shape being inspected. Instead of asking what T is, you tell TypeScript: "Pattern-match this structure and infer the type variable at this specific position."',
        bn: 'কন্ডিশনাল টাইপের ভেতর infer কিওয়ার্ডের মাধ্যমে টাইপস্ক্রিপ্টকে প্যাটার্ন ম্যাচিং করতে বলা হয়। নিজে থেকে টাইপ বলে দেওয়ার বদলে কম্পাইলারকে বলা হয়: "এই কাঠামোর ভেতরে অমুক পজিশনে যে টাইপটি আছে, সেটিকে infer করে একটি নতুন টাইপ ভ্যারিয়েবলে সংরক্ষণ করো।"'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Custom implementation of ReturnType<T> and UnpackPromise<T>:
type GetReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type Await<T> = T extends Promise<infer U> ? U : T;

function calculateTax(amount: number): number {
  return amount * 0.15;
}

type TaxResult = GetReturnType<typeof calculateTax>; // Deductions: number
type ResolvedString = Await<Promise<string>>;       // Deductions: string

const rate: TaxResult = 15;
console.log(rate); // 15`,
      caption: {
        en: 'The infer keyword pattern-matches and captures constituent types dynamically.',
        bn: 'infer কিওয়ার্ড প্যাটার্ন ম্যাচ করে জটিল টাইপের ভেতর থেকে অংশবিশেষ বের করে আনে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Non-Distributive Conditionals: Tuple Wrapping [T]', bn: '৭. নন-ডিস্ট্রিবিউটিভ শর্ত: টাপল র‍্যাপিং [T]' } },
    {
      type: 'para',
      text: {
        en: 'If you want to test whether an entire union as a single whole matches a condition (rather than splitting each member individually), you wrap both sides of the condition in square brackets: [T] extends [U]. This stops distribution immediately.',
        bn: 'যদি আপনি চান কোনো ইউনিয়ন টাইপ আলাদা আলাদা না ভেঙে পুরোটা এক সাথে শর্ত পূরণ করে কি না তা যাচাই করতে, তবে শর্তের দুই পাশে থার্ড ব্র্যাকেট দিতে হয়: [T] extends [U]। ব্র্যাকেট দেওয়ার সাথে সাথে স্বয়ংক্রিয় বণ্টন (distribution) চিরতরে বন্ধ হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Checking if a type is exactly 'never' (naked never distributes to never!):
type IsNever<T> = [T] extends [never] ? true : false;

type Test1 = IsNever<never>;          // true
type Test2 = IsNever<string>;         // false
type Test3 = IsNever<string | never>; // false (string is not never)

console.log(true); // true`,
      caption: {
        en: 'Wrapping type variables in tuples [T] prevents distributive splitting of unions.',
        bn: '[T] দিয়ে টাইপকে টাপলে মুড়ে দিলে ইউনিয়ন আলাদা আলাদা ভাগে বিভক্ত হয় না।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Template Literal Types: String Pattern Verification', bn: '৮. টেমপ্লেট লিটারেল টাইপস: স্ট্রিং প্যাটার্ন যাচাই' } },
    {
      type: 'para',
      text: {
        en: 'Template Literal Types allow types to concatenate and pattern-match strings at compile time using JavaScript template literal syntax (`\${Type}`). They can enforce strict URL routes, CSS units, or reactive event listener names before any code executes.',
        bn: 'টেমপ্লেট লিটারেল টাইপসের সাহায্যে জাভাস্ক্রিপ্ট টেমপ্লেট স্ট্রিংয়ের মতো (`\${Type}`) টাইপ স্তরে স্ট্রিং জোড়া লাগানো বা প্যাটার্ন যাচাই করা যায়। এর মাধ্যমে এপিআই রুট, সিএসএস ইউনিট (যেমন px, rem) বা নির্দিষ্ট নামের ইভেন্ট হ্যান্ডলার নিখুঁতভাবে বাধ্য করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Enforce valid HTTP API route patterns and CSS pixel measurements:
type ApiRoute = \`/api/v\${number}/\${string}\`;
type CssPixel = \`\${number}px\`;

// ✅ Valid assignments:
const validRoute: ApiRoute = "/api/v1/users";
const validPadding: CssPixel = "16px";

// ❌ Invalid (Compile Errors):
// const badRoute: ApiRoute = "/v1/users";   // Error: missing /api prefix
// const badPixel: CssPixel = "16em";        // Error: must end with px

console.log(validRoute, validPadding); // "/api/v1/users" "16px"`,
      caption: {
        en: 'Template literal types enforce exact string patterns at compile time.',
        bn: 'টেমপ্লেট লিটারেল টাইপস কোড রান করার আগেই নির্ভুল স্ট্রিং প্যাটার্ন নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Built-in String Intrinsics: Uppercase & Capitalize', bn: '৯. বিল্ট-ইন স্ট্রিং টাইপস: Uppercase ও Capitalize' } },
    {
      type: 'para',
      text: {
        en: 'TypeScript provides four built-in string manipulation type utilities: Uppercase<StringType>, Lowercase<StringType>, Capitalize<StringType>, and Uncapitalize<StringType>. These intrinsics modify casing at the type level, powering reactive event and getter libraries.',
        bn: 'টাইপস্ক্রিপ্টে স্ট্রিংয়ের কেস পরিবর্তনের জন্য ৪টি বিশেষ অন্তর্নির্মিত টাইপ রয়েছে: Uppercase, Lowercase, Capitalize এবং Uncapitalize। টাইপ স্তরে অক্ষরের রূপ পরিবর্তন করার জন্য এগুলো অত্যন্ত কার্যকর, বিশেষ করে ইভেন্ট হ্যান্ডলার বা গেটার মেথডের নামকরণে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `type BaseEvents = "click" | "focus" | "submit";

// Build standard HTML event handler naming:
type EventHandlerName = \`on\${Capitalize<BaseEvents>}\`;
// Evaluates to: "onClick" | "onFocus" | "onSubmit"

type HttpVerb = "get" | "post" | "delete";
type UpperVerb = Uppercase<HttpVerb>;
// Evaluates to: "GET" | "POST" | "DELETE"

const method: UpperVerb = "POST";
console.log(method); // "POST"`,
      caption: {
        en: 'String intrinsics transform casing for idiomatic method and event names.',
        bn: 'স্ট্রিং ইন্ট্রিনসিক টাইপস মেথড ও ইভেন্টের প্রচলিত নামকরণের রূপান্তর সহজ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Dynamic Key Structures: Index Signatures vs Record<K, V>', bn: '১০. ডায়নামিক কি কাঠামো: ইনডেক্স সিগনেচার বনাম Record<K, V>' } },
    {
      type: 'para',
      text: {
        en: 'When dictionary keys cannot be known ahead of time, developers choose between two structural tools. An Index Signature ({ [key: string]: Value }) allows open string keys, whereas the mapped utility Record<Keys, Value> can restrict properties to discrete union members.',
        bn: 'যখন ডিকশনারির কি-গুলোর নাম আগে থেকে নিশ্চিত জানা থাকে না, তখন দুটি কার্যকরী কাঠামোগত টুল ব্যবহার করা হয়। Index Signature ({ [key: string]: Value }) যেকোনো স্ট্রিং কি সমর্থন করে, পক্ষান্তরে Record<Keys, Value> ইউটিলিটি কি-গুলোকে নির্দিষ্ট ইউনিয়ন মেম্বারে সীমাবদ্ধ রাখতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// 1. Index Signature (Open-ended dynamic keys):
interface UserCache {
  [userId: string]: { name: string; active: boolean };
}

// 2. Record utility (Constrained finite keys):
type Environment = "dev" | "staging" | "prod";
type ApiEndpoints = Record<Environment, string>;

const endpoints: ApiEndpoints = {
  dev: "https://dev.api.internal",
  staging: "https://staging.api.internal",
  prod: "https://api.codeshikhon.com"
};

console.log(endpoints.prod); // "https://api.codeshikhon.com"`,
      caption: {
        en: 'Record<K, V> constrains dictionary keys to discrete string unions.',
        bn: 'Record<K, V> ডিকশনারির কি-গুলোকে নির্দিষ্ট ইউনিয়ন সেটের মধ্যে সীমাবদ্ধ রাখে।'
      }
    }
  ],
  exercises: [
    {
      id: 'ts-typ-ex1',
      kind: 'predict',
      topic: 'typescript: infer keyword in conditional types',
      question: {
        en: 'Which TypeScript keyword is used inside conditional types to introduce a type variable that is dynamically deduced from the inspected shape?',
        bn: 'কন্ডিশনাল টাইপের ভেতর কোনো জটিল টাইপ কাঠামোর ভেতরের অংশ স্বয়ংক্রিয়ভাবে আবিষ্কার ও ক্যাপচার করতে কোন কিওয়ার্ডটি ব্যবহৃত হয়?'
      },
      code: `/* Extracting the resolved type of a Promise */
/* type Awaited<T> = T extends Promise<_____ U> ? U : T; */`,
      answer: 'infer',
      accept: ['infer', 'infer keyword'],
      hint: {
        en: 'It infers the variable type.',
        bn: 'এটি টাইপ ইনফার বা অনুমান করে।'
      },
      explanation: {
        en: 'The infer keyword declares a type variable in the conditional extends clause that TypeScript deduces dynamically via pattern matching.',
        bn: 'infer কিওয়ার্ড কন্ডিশনাল টাইপের ভেতর প্যাটার্ন ম্যাচিংয়ের মাধ্যমে ভেতরের টাইপটি স্বয়ংক্রিয়ভাবে বের করে আনে।'
      }
    },
    {
      id: 'ts-typ-ex2',
      kind: 'mcq',
      topic: 'typescript: Modifiers in mapped types',
      question: {
        en: 'How do you strip the optional modifier (?) from all properties in a mapped type to make them required?',
        bn: 'ম্যাপড টাইপের সমস্ত প্রোপার্টি থেকে অপশনাল চিহ্ন (?) বাদ দিয়ে সেগুলোকে বাধ্যতামূলক করতে কী লেখা হয়?'
      },
      options: [
        { en: '-?', bn: '-?' },
        { en: '+required', bn: '+required' },
        { en: '!?', bn: '!?' },
        { en: 'no-optional', bn: 'no-optional' }
      ],
      answer: 0,
      hint: {
        en: 'Minus removes the question mark.',
        bn: 'মাইনাস চিহ্ন প্রশ্নবোধক চিহ্নটি সরিয়ে দেয়।'
      },
      explanation: {
        en: 'The -? modifier strips optionality from each mapped property, forcing every property to be strictly required.',
        bn: '-? মডিফায়ার প্রতিটি প্রোপার্টি থেকে অপশনাল বৈশিষ্ট্য বাদ দিয়ে সেটিকে সম্পূর্ণ বাধ্যতামূলক করে তোলে।'
      }
    },
    {
      id: 'ts-typ-ex3',
      kind: 'mcq',
      topic: 'typescript: Distributive conditional types',
      question: {
        en: 'What technique prevents a union type from automatically distributing across a conditional type?',
        bn: 'কোন কৌশল অবলম্বন করলে কন্ডিশনাল টাইপে কোনো ইউনিয়ন স্বয়ংক্রিয়ভাবে আলাদা আলাদা ভাগে বিভক্ত হয় না?'
      },
      options: [
        { en: 'Wrapping both sides of the condition in square brackets ([T] extends [U])', bn: 'শর্তের উভয় পক্ষকে থার্ড ব্র্যাকেট বা টাপলে মুড়ে দিলে ([T] extends [U])' },
        { en: 'Adding readonly', bn: 'readonly যোগ করলে' },
        { en: 'Using the any type', bn: 'any টাইপ দিলে' },
        { en: 'Turning off strict mode', bn: 'স্ট্রিক্ট মোড বন্ধ করলে' }
      ],
      answer: 0,
      hint: {
        en: 'Wrap in tuple brackets.',
        bn: 'টাপল ব্র্যাকেটে মুড়ে নিন।'
      },
      explanation: {
        en: 'Wrapping the type parameter in a tuple [T] treats the union as a single consolidated entity rather than distributing over its constituents.',
        bn: '[T] দিয়ে টাইপকে টাপলে আবৃত করলে ইউনিয়ন ভেঙে না গিয়ে একক মান হিসেবে শর্ত পরীক্ষা করে।'
      }
    }
  ],
  quiz: {
    id: 'ts-foundry-quiz',
    title: { en: 'TypeScript Advanced Types Quiz', bn: 'টাইপস্ক্রিপ্ট অ্যাডভান্সড টাইপস কুইজ' },
    questions: [
      {
        id: 'tfq1',
        kind: 'mcq',
        topic: 'typescript: Template literal types utility',
        question: {
          en: 'What do Template Literal Types in TypeScript allow developers to do?',
          bn: 'টাইপস্ক্রিপ্টের টেমপ্লেট লিটারেল টাইপসের সাহায্যে ডেভেলপাররা কী করতে পারেন?'
        },
        options: [
          { en: 'Enforce and pattern-match exact string patterns (like URLs, CSS units, or event names) at compile time', bn: 'কম্পাইল টাইমে স্ট্রিংয়ের নির্দিষ্ট প্যাটার্ন (যেমন এপিআই ইউআরএল, সিএসএস ইউনিট বা ইভেন্টের নাম) নিখুঁতভাবে বাধ্য করতে' },
          { en: 'Convert HTML templates to CSS', bn: 'এইচটিএমএল টেমপ্লেটকে সিএসএসে রূপান্তর করতে' },
          { en: 'Run JavaScript in the browser faster', bn: 'ব্রাউজারে জাভাস্ক্রিপ্ট দ্রুত চালাতে' },
          { en: 'Create SQL tables automatically', bn: 'স্বয়ংক্রিয় এসকিউএল টেবিল বানাতে' }
        ],
        answer: 0,
        hint: {
          en: 'Compile-time string pattern enforcement.',
          bn: 'কম্পাইল টাইমে স্ট্রিং প্যাটার্ন নিশ্চিতকরণ।'
        },
        explanation: {
          en: 'Template literal types bring JavaScript template string syntax to types, enabling strict compile-time validation for structured strings.',
          bn: 'টেমপ্লেট লিটারেল টাইপস কোড রান করার আগেই নির্দিষ্ট কাঠামোর স্ট্রিং ভ্যালিডেশন নিশ্চিত করে।'
        }
      },
      {
        id: 'tfq2',
        kind: 'mcq',
        topic: 'typescript: Key remapping syntax',
        question: {
          en: 'Which clause is used in mapped types to remap property names or filter keys?',
          bn: 'ম্যাপড টাইপে কোনো প্রোপার্টির নাম পরিবর্তন বা কি-গুলোকে ফিল্টার করতে কোন ক্লজটি ব্যবহৃত হয়?'
        },
        options: [
          { en: 'as clause ([K in keyof T as ...])', bn: 'as ধারা ([K in keyof T as ...])' },
          { en: 'is clause', bn: 'is ধারা' },
          { en: 'map clause', bn: 'map ধারা' },
          { en: 'rename clause', bn: 'rename ধারা' }
        ],
        answer: 0,
        hint: {
          en: '[K in keyof T as NewKey]',
          bn: '[K in keyof T as NewKey]'
        },
        explanation: {
          en: 'The as clause allows key remapping in mapped types, enabling property name transformations and filtering keys to never.',
          bn: 'as ক্লজ দিয়ে ম্যাপড টাইপের ভেতরে প্রতিটি কি-র নাম বদলানো বা অপ্রয়োজনীয় কি-কে never বানিয়ে বাদ দেওয়া যায়।'
        }
      },
      {
        id: 'tfq3',
        kind: 'mcq',
        topic: 'typescript: Distributive conditional types',
        question: {
          en: 'What happens when a naked type parameter receiving a union like string | number is evaluated in a conditional type T extends U ? X : Y?',
          bn: 'কন্ডিশনাল টাইপে T extends U ? X : Y যখন string | number-এর মতো একটি ইউনিয়ন প্যারামিটার পায়, তখন কী ঘটে?'
        },
        options: [
          { en: 'It distributes across each union member individually', bn: 'এটি ইউনিয়নের প্রতিটি মেম্বারের ওপর আলাদাভাবে ডিস্ট্রিবিউট করে' },
          { en: 'It produces a compile error immediately', bn: 'এটি সাথে সাথে কম্পাইল এরর দেয়' },
          { en: 'It collapses the union to unknown', bn: 'এটি ইউনিয়নকে unknown-এ রূপান্তর করে' },
          { en: 'It only inspects the first type in the union', bn: 'এটি কেবল প্রথম টাইপটি পরীক্ষা করে' }
        ],
        answer: 0,
        hint: {
          en: 'Distributive behavior breaks unions into individual branches.',
          bn: 'ডিস্ট্রিবিউটিভ আচরণ ইউনিয়নকে ভেঙে প্রতিটি শাখার ওপর আলাদাভাবে কাজ করে।'
        },
        explanation: {
          en: 'Naked type parameters distribute over unions, evaluating (string extends U ? X : Y) | (number extends U ? X : Y). Wrapping in a tuple [T] prevents this.',
          bn: 'মুক্ত টাইপ প্যারামিটার ইউনিয়নের প্রতিটি উপাদানে আলাদাভাবে প্রয়োগ হয়। [T] টাপলে বাঁধলে এই ডিস্ট্রিবিউশন বন্ধ হয়।'
        }
      },
      {
        id: 'tfq4',
        kind: 'mcq',
        topic: 'typescript: infer keyword mechanics',
        question: {
          en: 'What is the role of the infer keyword in conditional types?',
          bn: 'কন্ডিশনাল টাইপে infer কি-ওয়ার্ডের ভূমিকা কী?'
        },
        options: [
          { en: 'It declares a type variable to extract a component type dynamically within the condition check', bn: 'কন্ডিশন পরীক্ষার ভেতরে কোনো অভ্যন্তরীণ টাইপ শনাক্ত ও নিষ্কাশন করতে একটি টাইপ ভেরিয়েবল ঘোষণা করে' },
          { en: 'It forces TypeScript to treat runtime values as any', bn: 'এটি টাইপস্ক্রিপ্টকে রানটাইম মান any ধরতে বাধ্য করে' },
          { en: 'It converts objects directly into JSON strings', bn: 'এটি অবজেক্টকে সরাসরি জেএসএন স্ট্রিংয়ে রূপান্তর করে' },
          { en: 'It automatically formats code at build time', bn: 'এটি বিল্ড টাইমে স্বয়ংক্রিয়ভাবে কোড ফরম্যাট করে' }
        ],
        answer: 0,
        hint: {
          en: 'T extends Promise<infer R> extracts R.',
          bn: 'T extends Promise<infer R> ভেতরের R বের করে আনে।'
        },
        explanation: {
          en: 'The infer keyword allows pattern matching within conditional types to extract return types, promise payloads, and array elements.',
          bn: 'infer কি-ওয়ার্ডের সাহায্যে কন্ডিশনাল টাইপের প্যাটার্ন ম্যাচিংয়ের মাধ্যমে রিটার্ন টাইপ বা প্রমিজের ভেতরের ডেটা টাইপ সহজেই উদ্ধার করা যায়।'
        }
      }
    ]
  }
};
