import type { Lesson } from '../../../lib/types';

export const invariantCourtLesson: Lesson = {
  slug: 'the-invariant-court',
  tech: 'typescript',
  title: {
    en: 'TypeScript Invariants & Verification: Exhaustive Checks, never & Variance',
    bn: 'টাইপস্ক্রিপ্ট ইনভ্যারিয়েন্টস ও ভেরিফিকেশন: এক্সহস্টিভ চেক, never ও ভ্যারিয়েন্স'
  },
  summary: {
    en: 'Master advanced TypeScript type theory and compiler verification across 10 structured topics. Understand set theory fundamentals (never vs unknown), compile-time exhaustiveness checking with assertNever, and handling expanding unions. Explore object utility types (Partial, Required, Readonly), projection with Pick and Omit, union filtering with Exclude and Extract, function reflection, variance mechanics, nominal branding, and type predicates.',
    bn: '১০টি সুসংগঠিত পয়েন্টে টাইপস্ক্রিপ্টের টাইপ থিওরি ও কম্পাইলার ভেরিফিকেশন আয়ত্ত করুন। সেট থিওরি ভিত্তি (never বনাম unknown), assertNever দিয়ে কম্পাইল-টাইম সম্পূর্ণতা পরীক্ষা এবং ক্রমবর্ধমান ইউনিয়ন নিয়ন্ত্রণ বুঝুন। অবজেক্ট ইউটিলিটি টাইপ (Partial, Required, Readonly), Pick ও Omit দিয়ে ফিল্টারিং, Exclude ও Extract দিয়ে ইউনিয়ন ছাঁটাই, ফাংশন রিফ্লেকশন, ভ্যারিয়েন্স নীতি, ব্র্যান্ডেড টাইপ এবং কাস্টম টাইপ প্রেডিকেট আয়ত্ত করুন।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Set Theory Foundations: The Bottom Type never vs unknown', bn: '১. সেট থিওরির ভিত্তি: নিম্নতম টাইপ never বনাম unknown' } },
    {
      type: 'para',
      text: {
        en: 'TypeScript models types as sets of allowable values. At the top sits unknown: the universal set containing every possible JavaScript value. At the bottom sits never: the empty set (∅) containing zero values. Because nothing can be a member of never, it represents impossible states or unreachable code execution.',
        bn: 'টাইপস্ক্রিপ্ট টাইপ সিস্টেমকে গণিতের সেট হিসেবে চিন্তা করে। সবার শীর্ষে থাকে unknown: যা সম্ভাব্য সমস্ত জাভাস্ক্রিপ্ট মানের সর্বজনীন সেট। আর সবার নিচে থাকে never: যা একটি সম্পূর্ণ শূন্য সেট (∅)। যেহেতু never সেটের কোনো সদস্য হতে পারে না, তাই এটি কোনো অসম্ভব অবস্থা বা কোডের কখনোই না পৌঁছানো অংশকে নির্দেশ করে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Type Lattice: Universal unknown to Empty never',
        bn: 'টাইপ ল্যাটিস: সর্বজনীন unknown থেকে শূন্য never'
      },
      caption: {
        en: 'TypeScript models types as sets: narrowing descends the lattice until impossible branches collapse into never.',
        bn: 'টাইপস্ক্রিপ্ট টাইপগুলোকে সেট হিসেবে দেখে: ন্যারোইং ল্যাটিস ধরে নিচে নামে যতক্ষণ না অসম্ভব শাখাগুলো never-এ পৌঁছায়।'
      },
      svg: `<svg viewBox="0 0 680 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="160" rx="10" fill="#0f172a"/>
  <rect x="25" y="45" width="180" height="70" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="115" y="70" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold" font-family="monospace">Top: unknown</text>
  <text x="115" y="95" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">Universal Set</text>
  <path d="M 215 80 L 250 80" stroke="#64748b" stroke-width="2"/>
  <rect x="255" y="45" width="180" height="70" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="345" y="70" text-anchor="middle" fill="#c084fc" font-size="13" font-weight="bold" font-family="monospace">Disjoint Subtypes</text>
  <text x="345" y="95" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">A | B Narrowing</text>
  <path d="M 445 80 L 480 80" stroke="#64748b" stroke-width="2"/>
  <rect x="485" y="45" width="170" height="70" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="570" y="70" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold" font-family="monospace">Bottom: never</text>
  <text x="570" y="95" text-anchor="middle" fill="#a7f3d0" font-size="10" font-family="monospace">Exhaustive Proof</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Universal Top Type (Accepts everything):
let topValue: unknown = "Hello";
topValue = 42;
topValue = { active: true };

// Empty Bottom Type (Accepts nothing):
// let deadEnd: never = 42; // ❌ Error: Type 'number' is not assignable to type 'never'

// never is assignable to all other types, but nothing is assignable to never!
console.log("Top and Bottom types initialized cleanly");
// Output: Top and Bottom types initialized cleanly`,
      caption: {
        en: 'never is the empty set (∅); unknown is the universal set of all values.',
        bn: 'never হলো শূন্য সেট (∅); unknown হলো সমস্ত সম্ভাব্য মানের সর্বজনীন সেট।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Exhaustive Verification: The assertNever Pattern', bn: '২. সম্পূর্ণতা যাচাই: assertNever প্যাটার্ন' } },
    {
      type: 'para',
      text: {
        en: 'When processing a Discriminated Union in a switch statement, handling every variant causes the remaining type in the default branch to narrow down to never. By creating a helper function assertNever(x: never): never, the compiler guarantees at compile time that every possible case has been handled.',
        bn: 'একটি switch স্টেটমেন্টে যখন কোনো ডিসক্রিমিনেটেড ইউনিয়নের প্রতিটি ভ্যারিয়েন্ট হ্যান্ডল করা হয়, তখন default ব্লকে গিয়ে টাইপটি সম্পূর্ণ সংকুচিত হয়ে never-এ পরিণত হয়। assertNever(x: never) নামের একটি ছোট ফাংশন রাখলে কম্পাইলার নিশ্চিত করে যে প্রতিটি কেস হ্যান্ডল করা হয়েছে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `type PaymentMethod = "credit_card" | "paypal" | "bkash";

function assertNever(x: never): never {
  throw new Error(\`Unexpected unhandled member: \${JSON.stringify(x)}\`);
}

function processPayment(method: PaymentMethod): string {
  switch (method) {
    case "credit_card":
      return "Processing via Stripe Gateway";
    case "paypal":
      return "Redirecting to PayPal Checkout";
    case "bkash":
      return "Prompting bKash USSD PIN";
    default:
      // If all 3 are handled, method is 'never' here:
      return assertNever(method);
  }
}

console.log(processPayment("bkash")); // "Prompting bKash USSD PIN"`,
      caption: {
        en: 'assertNever ensures at compile time that a switch statement drains all union members.',
        bn: 'assertNever কম্পাইল টাইমে নিশ্চিত করে যেন কোনো switch কেস বাদ না পড়ে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Expanding Unions: Turning Bugs into Compile Errors', bn: '৩. ক্রমবর্ধমান ইউনিয়ন: রানটাইম বাগ রোধে কম্পাইল এরর' } },
    {
      type: 'para',
      text: {
        en: 'The true power of assertNever appears when a teammate adds a new variant to a union (e.g. adding "crypto" to PaymentMethod). Without assertNever, the application compiles and silently crashes in production. With assertNever, the TypeScript compiler fails compilation across every file that forgot to handle the new variant.',
        bn: 'assertNever-এর আসল শক্তি বোঝা যায় যখন কোনো সহকর্মী ইউনিয়নে একটি নতুন ভ্যারিয়েন্ট যোগ করেন (যেমন PaymentMethod-এ "crypto")। assertNever না থাকলে কোড কম্পাইল হয়ে প্রোডাকশনে ক্র্যাশ করত। কিন্তু assertNever থাকলে যে যে ফাইলে নতুন ভ্যারিয়েন্টটি সামলানো হয়নি, কম্পাইলার সেখানে সাথে সাথে লাল দাগ দিয়ে কম্পাইল আটকে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `type ExtendedPayment = PaymentMethod | "crypto";

function executePayment(method: ExtendedPayment): string {
  switch (method) {
    case "credit_card": return "Stripe";
    case "paypal": return "PayPal";
    case "bkash": return "bKash";
    // ❌ If "crypto" is forgotten:
    // default:
    //   return assertNever(method);
    // TypeScript Error: Argument of type 'string' is not assignable to parameter of type 'never'!
    case "crypto": return "Web3 Wallet";
    default: return assertNever(method);
  }
}

console.log(executePayment("crypto")); // "Web3 Wallet"`,
      caption: {
        en: 'Adding new variants to a union immediately flags all unhandled switches across the codebase.',
        bn: 'ইউনিয়নে নতুন সদস্য যোগ করলে ভুলে যাওয়া সমস্ত জায়গায় কম্পাইলার এরর সংকেত দেয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Structural Transformations: Partial, Required & Readonly', bn: '৪. কাঠামোগত রূপান্তর: Partial, Required ও Readonly' } },
    {
      type: 'para',
      text: {
        en: 'TypeScript provides built-in mapped utility types that transform object contracts: Partial<T> marks every property optional (ideal for PATCH request bodies); Required<T> strips all optionality; and Readonly<T> freezes properties, preventing post-initialization mutation.',
        bn: 'টাইপস্ক্রিপ্টে কিছু শক্তিশালী বিল্ট-ইন ইউটিলিটি টাইপ রয়েছে: Partial<T> অবজেক্টের প্রতিটি প্রোপার্টিকে ঐচ্ছিক বা অপশনাল করে (PATCH এপিআইয়ের জন্য সেরা); Required<T> সব অপশনাল চিহ্ন সরিয়ে সব বাধ্যতামূলক করে। আর Readonly<T> অবজেক্টের মান পরিবর্তন করা নিষিদ্ধ করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `interface SystemConfig {
  host: string;
  port: number;
  sslEnabled?: boolean;
}

// 1. Partial: All fields optional for update operations
type ConfigUpdate = Partial<SystemConfig>;
const patch: ConfigUpdate = { port: 8080 }; // Valid: host not required!

// 2. Required: All fields strictly enforced
type StrictConfig = Required<SystemConfig>;
// const broken: StrictConfig = { host: "localhost", port: 3000 }; // Error: missing sslEnabled!

// 3. Readonly: Immutable properties
type FrozenConfig = Readonly<SystemConfig>;
const live: FrozenConfig = { host: "127.0.0.1", port: 5199 };
// live.port = 80; // ❌ Error: Cannot assign to 'port' because it is a read-only property

console.log("Config patch target port:", patch.port); // 8080`,
      caption: {
        en: 'Core utility types derive modified visibility and mutability contracts from single models.',
        bn: 'ইউটিলিটি টাইপগুলো একটি মূল মডেল থেকে অপশনাল ও রিড-অনলি ভ্যারিয়েন্ট তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Projection and Masking: Pick<T, K> vs Omit<T, K>', bn: '৫. ফিল্টারিং ও মাস্কিং: Pick<T, K> বনাম Omit<T, K>' } },
    {
      type: 'para',
      text: {
        en: 'Rather than redefining duplicate interfaces for previews or database inserts, Pick and Omit project sub-shapes from an authoritative master model. Pick<T, Keys> keeps only the specified keys; Omit<T, Keys> deletes the specified keys from the type.',
        bn: 'একই মডেলের ছোট সংস্করণের জন্য বারবার নতুন ইন্টারফেস না লিখে Pick এবং Omit ব্যবহার করা হয়। Pick<T, Keys> মূল মডেল থেকে কেবল নির্বাচিত কি-গুলোকে তুলে আনে; আর Omit<T, Keys> নির্বাচিত কি-গুলোকে বাদ দিয়ে বাকি সব রেখে নতুন টাইপ বানায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `interface UserAccount {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: Date;
}

// Public API view: Strip sensitive passwordHash
type PublicUser = Omit<UserAccount, "passwordHash">;

// Minimal table preview: Pick only id and name
type UserCardPreview = Pick<UserAccount, "id" | "name">;

const card: UserCardPreview = { id: "u-99", name: "Fahim" };
console.log("Card preview created:", card.name); // "Fahim"`,
      caption: {
        en: 'Pick and Omit generate targeted subsets from master data models.',
        bn: 'Pick এবং Omit মূল ডেটা মডেল থেকে নিরাপদ ও নির্দিষ্ট সাব-টাইপ তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Union Filtering: Exclude<T, U> vs Extract<T, U>', bn: '৬. ইউনিয়ন ফিল্টারিং: Exclude<T, U> বনাম Extract<T, U>' } },
    {
      type: 'para',
      text: {
        en: 'While Pick and Omit operate on object properties, Exclude and Extract operate on Union members. Exclude<T, U> removes from T all union members that match U; Extract<T, U> keeps only those union members from T that match U.',
        bn: 'Pick এবং Omit যেখানে অবজেক্টের ওপর কাজ করে, Exclude এবং Extract সেখানে কাজ করে ইউনিয়ন টাইপের ওপর। Exclude<T, U> ইউনিয়ন থেকে অপ্রয়োজনীয় টাইপগুলো ছেঁটে বাদ দেয়; আর Extract<T, U> ইউনিয়ন থেকে কেবল কাঙ্ক্ষিত নির্দিষ্ট টাইপগুলোকে বেছে নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "HEAD";

// 1. Exclude mutative methods to isolate safe read-only methods:
type ReadOnlyMethods = Exclude<HttpMethod, "POST" | "PUT" | "DELETE">;
// Evaluates to: "GET" | "OPTIONS" | "HEAD"

// 2. Extract specific CRUD actions:
type MutatingMethods = Extract<HttpMethod, "POST" | "PUT" | "DELETE">;
// Evaluates to: "POST" | "PUT" | "DELETE"

const action: MutatingMethods = "PUT";
console.log("Allowed mutating HTTP verb:", action); // "PUT"`,
      caption: {
        en: 'Exclude and Extract filter discrete members from union sets.',
        bn: 'Exclude এবং Extract ইউনিয়ন সেট থেকে নির্দিষ্ট সদস্য ছাঁটাই বা বাছাই করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Function Reflection: ReturnType, Parameters & Awaited', bn: '৭. ফাংশন রিফ্লেকশন: ReturnType, Parameters ও Awaited' } },
    {
      type: 'para',
      text: {
        en: 'To avoid duplicating function contracts, TypeScript provides function reflection utilities: ReturnType<typeof fn> extracts the output type; Parameters<typeof fn> extracts argument types as a tuple; and Awaited<T> recursively unwraps Promises.',
        bn: 'ফাংশনের রিটার্ন টাইপ বারবার নিজে না লিখে টাইপস্ক্রিপ্টের ফাংশন রিফ্লেকশন ব্যবহার করা যায়: ReturnType<typeof fn> ফাংশনের আউটপুট বের করে আনে; Parameters<typeof fn> আর্গুমেন্টগুলোকে টাপল আকারে দেয়; আর Awaited<T> প্রমিজের ভেতরের আসল মানটি বের করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `async function fetchMetric(metricId: string, limit: number): Promise<{ count: number }> {
  return { count: limit * 10 };
}

// 1. Extract parameter tuple:
type MetricArgs = Parameters<typeof fetchMetric>; // [metricId: string, limit: number]

// 2. Extract unwrapped async return type:
type MetricResponse = Awaited<ReturnType<typeof fetchMetric>>; // { count: number }

const result: MetricResponse = { count: 500 };
console.log("Unwrapped metric count:", result.count); // 500`,
      caption: {
        en: 'ReturnType and Awaited inspect executable functions directly without manual typing.',
        bn: 'ReturnType ও Awaited নিজে হাতে টাইপ না লিখে সরাসরি ফাংশন থেকে টাইপ সংগ্রহ করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Variance Mechanics: Covariance vs Contravariance', bn: '৮. ভ্যারিয়েন্স নীতি: কোভ্যারিয়েন্স বনাম কন্ট্রাভ্যারিয়েন্স' } },
    {
      type: 'para',
      text: {
        en: 'Variance dictates how subtyping of complex types relates to their subcomponents. First, return types are Covariant: a function returning a Dog can stand in for a function returning an Animal. Second, function parameters are Contravariant under strictFunctionTypes: a handler accepting any Animal can safely replace a handler expecting only a Dog.',
        bn: 'ভ্যারিয়েন্স নির্ধারণ করে একটি টাইপের বদলে অন্য একটি টাইপকে ব্যবহার করা যাবে কি না। প্রথমত, রিটার্ন টাইপ হলো কোভ্যারিয়েন্ট: একটি Dog রিটার্ন করা ফাংশন নির্দ্বিধায় Animal চাওয়া জায়গায় কাজ করতে পারে। দ্বিতীয়ত, ফাংশনের ইনপুট প্যারামিটার হলো কন্ট্রাভ্যারিয়েন্ট: যেকোনো Animal গ্রহণ করতে পারে এমন হ্যান্ডলারকে নির্দিষ্ট Dog গ্রহণকারী হ্যান্ডলারের জায়গায় নিরাপদে বসানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `class Animal { name = "Animal"; }
class Dog extends Animal { bark() { return "Woof"; } }

type AnimalConsumer = (a: Animal) => void;
type DogConsumer = (d: Dog) => void;

const handleAnimal: AnimalConsumer = (a) => console.log(a.name);
// ✅ Contravariance: A general animal handler safely accepts any Dog!
const handleDog: DogConsumer = handleAnimal;

handleDog(new Dog()); // "Animal"`,
      caption: {
        en: 'Function inputs are contravariant: wider acceptors safely substitute narrower expectations.',
        bn: 'ফাংশন প্যারামিটার কন্ট্রাভ্যারিয়েন্ট: চওড়া টাইপ গ্রহণকারী ফাংশন সংকীর্ণ প্রত্যাশাকে পূরণ করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Nominal Branding: Distinguishing Primitives with Symbols', bn: '৯. ব্র্যান্ডেড টাইপস: সিম্বল দিয়ে প্রিমিটিভের নামিনাল সুরক্ষা' } },
    {
      type: 'para',
      text: {
        en: 'Because TypeScript is purely structural, a UserId string and an OrderId string are assignable to each other by mistake. Nominal Branding attaches a phantom unique symbol, making the compiler treat structurally identical strings as completely distinct types.',
        bn: 'যেহেতু টাইপস্ক্রিপ্ট স্ট্রাকচারাল টাইপ সিস্টেম মেনে চলে, তাই ভুলবশত একটি UserId স্ট্রিংকে OrderId স্ট্রিংয়ের সাথে অদলবদল করে ফেলা সম্ভব। Nominal Branding-এর সাহায্যে একটি কাল্পনিক unique symbol জুড়ে দেওয়া হয়, যার ফলে হুবহু দেখতে স্ট্রিং হলেও কম্পাইলার তাদের একে অপরের সাথে মিশতে দেয় না।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `declare const brand: unique symbol;

type Brand<T, TBrand> = T & { readonly [brand]: TBrand };

type UserId = Brand<string, "UserId">;
type OrderId = Brand<string, "OrderId">;

function createUserId(id: string): UserId { return id as UserId; }
function createOrderId(id: string): OrderId { return id as OrderId; }

const uid = createUserId("usr_101");
const oid = createOrderId("ord_999");

function dispatchOrder(userId: UserId, orderId: OrderId) {
  console.log(\`Order \${orderId} dispatched to User \${userId}\`);
}

// dispatchOrder(oid, uid); // ❌ Error: Argument OrderId not assignable to parameter UserId!
dispatchOrder(uid, oid);    // ✅ Valid!
// Output: Order ord_999 dispatched to User usr_101`,
      caption: {
        en: 'Nominal brands prevent domain primitives (IDs, currencies) from being swapped accidentally.',
        bn: 'ব্র্যান্ডেড টাইপস প্রিমিটিভ আইডি বা মুদ্রার মান ভুলবশত অদলবদল হওয়া রোধ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Type Predicates: Custom Type Guards (value is T)', bn: '১০. টাইপ প্রেডিকেটস: কাস্টম টাইপ গার্ড (value is T)' } },
    {
      type: 'para',
      text: {
        en: 'When standard typeof and instanceof are insufficient, author a Type Predicate function whose return type is value is TargetType. When the function returns true at runtime, TypeScript automatically narrows the variable to TargetType in subsequent code blocks.',
        bn: 'যখন সাধারণ typeof বা instanceof দিয়ে কাজ হয় না, তখন টাইপ প্রেডিকেট ফাংশন লেখা হয় যার রিটার্ন টাইপ হয় value is TargetType। ফাংশনটি রানটাইমে true রিটার্ন করলে টাইপস্ক্রিপ্ট নিজে থেকেই পরবর্তী কোডে ভ্যারিয়েবলটিকে TargetType হিসেবে সংকুচিত করে নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `interface AdminAccount {
  role: "admin";
  permissions: string[];
}

// User-defined type predicate:
function isAdmin(user: any): user is AdminAccount {
  return typeof user === "object" && user !== null && user.role === "admin";
}

const candidate: unknown = { role: "admin", permissions: ["manage_users"] };

if (isAdmin(candidate)) {
  // candidate is strongly typed as AdminAccount here!
  console.log("Admin permissions count:", candidate.permissions.length); // 1
}`,
      caption: {
        en: 'Type predicates bridge custom runtime boolean checks with static compiler narrowing.',
        bn: 'টাইপ প্রেডিকেট রানটাইম সত্যতা যাচাইয়ের সাথে কম্পাইলারের টাইপ ন্যারোয়িং যুক্ত করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'ts-inv-ex1',
      kind: 'predict',
      topic: 'typescript: exhaustive checking bottom type',
      question: {
        en: 'Which TypeScript bottom type represents the empty set and is used in assertNever functions to prove exhaustive switch coverage?',
        bn: 'কোন নিম্নতম টাইপটি গণিতের শূন্য সেটকে নির্দেশ করে এবং সব কেস হ্যান্ডল করা হয়েছে কি না তা নিশ্চিত করতে assertNever-এ ব্যবহৃত হয়?'
      },
      code: `/* Exhaustive check function signature */
/* function assertNever(x: _____): never { throw new Error(); } */`,
      answer: 'never',
      accept: ['never', 'never type'],
      hint: {
        en: 'The type representing zero possible values.',
        bn: 'শূন্য সম্ভাব্য মানের টাইপ।'
      },
      explanation: {
        en: 'never is the bottom type in TypeScript. When a union is exhaustively checked, the remaining type in the default branch is reduced to never.',
        bn: 'never হলো টাইপস্ক্রিপ্টের বটম টাইপ। সব কেস শেষ হয়ে গেলে কোনো মান অবশিষ্ট না থাকায় তা never-এ পরিণত হয়।'
      }
    },
    {
      id: 'ts-inv-ex2',
      kind: 'mcq',
      topic: 'typescript: Omit utility type',
      question: {
        en: 'What does the Omit<T, K> utility type do?',
        bn: 'Omit<T, K> ইউটিলিটি টাইপটি কী কাজ করে?'
      },
      options: [
        { en: 'Constructs a new type by picking all properties from T and then removing the keys specified in K', bn: 'T অবজেক্টের সব প্রোপার্টি রেখে কেবল K-তে উল্লেখিত কি-গুলোকে বাদ দিয়ে একটি নতুন টাইপ তৈরি করে' },
        { en: 'Deletes the database table', bn: 'ডেটাবেস টেবিল মুছে দেয়' },
        { en: 'Makes all properties readonly', bn: 'সব প্রোপার্টি রিড-অনলি করে' },
        { en: 'Converts functions into promises', bn: 'ফাংশনকে প্রমিজে রূপান্তর করে' }
      ],
      answer: 0,
      hint: {
        en: 'It omits specified keys.',
        bn: 'এটি নির্দিষ্ট কি-গুলোকে বাদ দেয়।'
      },
      explanation: {
        en: 'Omit<T, K> removes specified keys K from type T, useful for creating public DTOs that strip sensitive internal fields.',
        bn: 'Omit<T, K> মূল অবজেক্ট থেকে নির্দিষ্ট কিছু কি বাদ দিয়ে নতুন টাইপ বানায়, যা পাসওয়ার্ড বা অভ্যন্তরীণ ডেটা গোপন রাখতে সাহায্য করে।'
      }
    },
    {
      id: 'ts-inv-ex3',
      kind: 'mcq',
      topic: 'typescript: custom type guard syntax',
      question: {
        en: 'What is the return type signature of a user-defined type guard function checking if a variable is a Fish?',
        bn: 'কোনো ভ্যারিয়েবল Fish কি না তা যাচাই করার জন্য একটি কাস্টম টাইপ গার্ড ফাংশনের রিটার্ন টাইপ কী হবে?'
      },
      options: [
        { en: 'pet is Fish', bn: 'pet is Fish' },
        { en: 'pet: Fish', bn: 'pet: Fish' },
        { en: 'typeof Fish', bn: 'typeof Fish' },
        { en: 'Fish | boolean', bn: 'Fish | boolean' }
      ],
      answer: 0,
      hint: {
        en: 'The "is" keyword creates a type predicate.',
        bn: '"is" কিওয়ার্ড টাইপ প্রেডিকেট তৈরি করে।'
      },
      explanation: {
        en: 'The syntax param is Type defines a type predicate, signaling to TypeScript that if the function returns true, the parameter has that specific type.',
        bn: 'param is Type সিনট্যাক্সটি একটি টাইপ প্রেডিকেট তৈরি করে যা সত্য হলে কম্পাইলার ভ্যারিয়েবলটিকে ওই নির্দিষ্ট টাইপে সংকুচিত করে নেয়।'
      }
    }
  ],
  quiz: {
    id: 'ts-invariant-quiz',
    title: { en: 'TypeScript Invariants & Type Theory Quiz', bn: 'টাইপস্ক্রিপ্ট ইনভ্যারিয়েন্টস ও টাইপ থিওরি কুইজ' },
    questions: [
      {
        id: 'tiq1',
        kind: 'mcq',
        topic: 'typescript: contravariance in function parameters',
        question: {
          en: 'Why are function parameters contravariant under strictFunctionTypes in TypeScript?',
          bn: 'strictFunctionTypes-এর অধীনে টাইপস্ক্রিপ্ট ফাংশন প্যারামিটার কেন কন্ট্রাভ্যারিয়েন্ট হয়?'
        },
        options: [
          { en: 'Because a handler that accepts a wider type (Animal) can safely handle any narrower input (Dog) passed to it by a caller', bn: 'কারণ যে হ্যান্ডলার বেশি বিস্তৃত টাইপ (Animal) গ্রহণ করতে পারে, সে কলারের পাঠানো যেকোনো সংকীর্ণ টাইপকে (Dog) নিরাপদে সামলাতে সক্ষম' },
          { en: 'Because it makes memory allocation faster', bn: 'মেমরি দ্রুত বরাদ্দ হয়' },
          { en: 'Because TypeScript was written in C#', bn: 'টাইপস্ক্রিপ্ট সি#-এ লেখা হয়েছিল বলে' },
          { en: 'It is a mathematical error', bn: 'এটি একটি গাণিতিক ভুল' }
        ],
        answer: 0,
        hint: {
          en: 'Wider handlers safely accept narrower inputs.',
          bn: 'বিস্তৃত হ্যান্ডলার সংকীর্ণ ইনপুটকে নিরাপদে গ্রহণ করে।'
        },
        explanation: {
          en: 'In function inputs, substitutability is reversed: a function expecting any Animal can safely replace a function expecting a Dog, because any Dog passed is an Animal.',
          bn: 'ফাংশন ইনপুটের ক্ষেত্রে যুক্তি বিপরীত হয়: যেকোনো Animal হ্যান্ডল করতে পারা ফাংশন Dog-এর জায়গায় নিরাপদে বসতে পারে কারণ প্রতিটি Dog-ই একটি Animal।'
        }
      },
      {
        id: 'tiq2',
        kind: 'mcq',
        topic: 'typescript: nominal branding purpose',
        question: {
          en: 'What architectural problem does Nominal Branding solve in structural TypeScript codebases?',
          bn: 'টাইপস্ক্রিপ্টের স্ট্রাকচারাল টাইপিংয়ে Nominal Branding কোন বাস্তব সমস্যা সমাধান করে?'
        },
        options: [
          { en: 'It prevents structurally identical primitive values (like a UserId string and an OrderId string) from being accidentally mixed up or passed interchangeably', bn: 'হুবহু একই রকম দেখতে প্রিমিটিভ মানগুলোকে (যেমন UserId স্ট্রিং ও OrderId স্ট্রিং) ভুলবশত একে অপরের জায়গায় পাস করা চিরতরে বন্ধ করে' },
          { en: 'It registers corporate trademarks in code', bn: 'ট্রেডমার্ক রেজিস্টার করে' },
          { en: 'It compresses JavaScript bundle size', bn: 'বান্ডল সাইজ কমায়' },
          { en: 'It speeds up garbage collection', bn: 'গার্বেজ কালেকশন দ্রুত করে' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents confusing different ID strings.',
          bn: 'ভিন্ন ভিন্ন আইডি স্ট্রিং গুলিয়ে ফেলা প্রতিরোধ করে।'
        },
        explanation: {
          en: 'Nominal branding attaches a unique phantom symbol to a primitive, forcing the structural compiler to treat two strings as completely incompatible distinct types.',
          bn: 'ব্র্যান্ডেড টাইপস একটি কাল্পনিক সিম্বল যোগ করে স্ট্রিংগুলোকে আলাদা করে ফেলে, ফলে ভুল আইডি ভুল জায়গায় পাস করলে সাথে সাথে কম্পাইল এরর আসে।'
        }
      },
      {
        id: 'tiq3',
        kind: 'mcq',
        topic: 'typescript: assertNever exhaustive verification',
        question: {
          en: 'What occurs when assertNever(x: never) receives an argument during exhaustive switch checking in TypeScript?',
          bn: 'টাইপস্ক্রিপ্টে এক্সহস্টিভ switch চেকের সময় assertNever(x: never) কোনো মান পেলে কী ঘটে?'
        },
        options: [
          { en: 'If every union member was handled, x has type never and compiles cleanly; if a variant was forgotten, x holds that type and produces an immediate compile-time error', bn: 'ইউনিয়নের প্রতিটি সদস্য হ্যান্ডল করা হলে x-এর টাইপ never হয় এবং কোনো এরর আসে না; কিন্তু কোনো কেস বাদ পড়লে x-এ সেই বাদ পড়া টাইপ থেকে যায় এবং কম্পাইল এরর দেয়' },
          { en: 'It reboots the application server', bn: 'অ্যাপ্লিকেশন সার্ভার রিবুট করে' },
          { en: 'It forces the switch statement to loop infinitely', bn: 'switch স্টেটমেন্টকে ইনফিনিট লুপে ফেলে' },
          { en: 'It converts the variable into a string at runtime', bn: 'রানটাইমে ভ্যারিয়েবলটিকে স্ট্রিংয়ে রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Empty set compiles; unhandled member triggers compile error.',
          bn: 'শূন্য সেট হলে পাস করে, অনিয়ন্ত্রিত মেম্বার থাকলে কম্পাইল এরর দেয়।'
        },
        explanation: {
          en: 'In an exhaustive switch, the default branch should only receive the empty type never. If a new union member is added without a corresponding case, TypeScript flags the assertNever call.',
          bn: 'সব কেস সামলানো হলে default কেবল never পায়। নতুন কোনো মেম্বার ভুলে বাদ পড়লে assertNever তাকে never হিসেবে গ্রহণ না করায় কম্পাইল এরর আসে।'
        }
      },
      {
        id: 'tiq4',
        kind: 'mcq',
        topic: 'typescript: user-defined type predicates',
        question: {
          en: 'How does a custom type predicate function (value is T) inform the TypeScript compiler during control flow analysis?',
          bn: 'কন্ট্রোল ফ্লো অ্যানালাইসিসে কাস্টম টাইপ প্রেডিকেট ফাংশন (value is T) কম্পাইলারকে কীভাবে দিকনির্দেশনা দেয়?'
        },
        options: [
          { en: 'When the function returns true, the compiler safely refines and narrows the checked argument from a wide type (like unknown) to the specific target type T', bn: 'ফাংশনটি true রিটার্ন করলে কম্পাইলার পরীক্ষিত ভ্যারিয়েবলটিকে unknown-এর মতো সাধারণ টাইপ থেকে কাঙ্ক্ষিত সুনির্দিষ্ট টাইপ T-তে ন্যারো করে নেয়' },
          { en: 'It prints debugging logs to the browser console', bn: 'ব্রাউজার কনসোলে ডিবাগিং লগ প্রিন্ট করে' },
          { en: 'It encrypts the variable before returning', bn: 'ফেরত দেওয়ার আগে ভ্যারিয়েবলকে এনক্রিপ্ট করে' },
          { en: 'It turns off strictNullChecks for the enclosing file', bn: 'ফাইলের জন্য strictNullChecks বন্ধ করে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'value is T narrows the type upon a true return.',
          bn: 'true রিটার্ন করলে ভ্যালুর টাইপ T-তে সংকুচিত হয়।'
        },
        explanation: {
          en: 'A type predicate returns a boolean at runtime and instructs the compiler to narrow the variable type to T within the truthy branch of an if check.',
          bn: 'টাইপ প্রেডিকেট ফাংশন রানটাইমে বুলিয়ান দেয় এবং সত্য হলে if ব্লকের ভেতরে ভ্যারিয়েবলের টাইপ সুনির্দিষ্ট T বানিয়ে দেয়।'
        }
      }
    ]
  }
};
