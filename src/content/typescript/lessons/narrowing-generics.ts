import type { Lesson } from '../../../lib/types';

export const narrowingGenericsLesson: Lesson = {
  slug: 'narrowing-generics',
  tech: 'typescript',
  title: {
    en: 'Narrowing & Generics — Discriminated Unions, Type Guards, and Polymorphic Functions',
    bn: 'ন্যারোইং ও জেনেরিক: ডিসক্রিমিনেটেড ইউনিয়ন, টাইপ গার্ড ও পলিমরফিক ফাংশন'
  },
  summary: {
    en: 'Master discriminated unions and generics in TypeScript to make illegal application states unrepresentable. Learn how control flow narrowing splits type possibilities across if statements and switch branches. Use the bottom type never to construct compile-time exhaustive checks. Leverage generic type parameters (T) with extends constraints to build reusable polymorphic utilities without resorting to any.',
    bn: 'টাইপস্ক্রিপ্টে ডিসক্রিমিনেটেড ইউনিয়ন ও জেনেরিক ব্যবহার করে অ্যাপ্লিকেশনের অবৈধ স্টেট সম্পূর্ণরূপে প্রতিরোধ করুন। if স্টেটমেন্ট ও switch ব্রাঞ্চের মাধ্যমে কন্ট্রোল ফ্লো ন্যারোইং কীভাবে টাইপকে নিখুঁত করে তা জানুন। never টাইপ দিয়ে কম্পাইল-টাইমে সম্পূর্ণতা (exhaustive check) নিশ্চিত করুন। any ব্যবহার না করেই extends কনস্ট্রেইন্ট সহ জেনেরিক প্যারামিটার (T) দিয়ে বহুমুখী রিইউজেবল কোড তৈরি করুন।'
  },
  minutes: 33,
  nextLesson: {
    slug: 'ts-type-factory',
    title: {
      en: 'The Type Foundry: mapped, conditional and template-literal types',
      bn: 'টাইপ-ঢালাইঘর: ম্যাপড, কন্ডিশনাল ও টেমপ্লেট-লিটারেল টাইপ',
    },
  },
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT are unions, narrowing and generics?', bn: 'ইউনিয়ন, ন্যারোইং আর জেনেরিক কী?' } },
    {
      type: 'para',
      text: {
        en: 'When you build resilient TypeScript applications, modeling states precisely eliminates runtime bugs before code ever executes.',
        bn: 'আপনি যখন স্থিতিস্থাপক টাইপস্ক্রিপ্ট অ্যাপ্লিকেশন তৈরি করেন, তখন স্টেটকে নিখুঁতভাবে মডেল করলে কোড রান করার আগেই মারাত্মক বাগ প্রতিরোধ করা সম্ভব হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A union type declares an explicit set of allowable possibilities. Writing Status = Idle | Loading | Success | Error guarantees a status is precisely one of these four variants. Narrowing is the process where TypeScript refines a broad union type into a specific subtype inside conditional branches. By checking properties with typeof, instanceof, or in operators, the compiler safely proves which members survive. Adding a shared literal field (like kind or status) creates a Discriminated Union, allowing clean switch statements without complex guards. Meanwhile, Generics introduce type-level parameters (T), enabling functions to accept and return matching shapes dynamically without losing type safety.',
        bn: 'একটি ইউনিয়ন টাইপ সম্ভাব্য মানগুলোর একটি সুস্পষ্ট তালিকা প্রকাশ করে। Status = Idle | Loading | Success | Error লিখলে নিশ্চিত হয় যে স্ট্যাটাস এই ৪ টি ভ্যারিয়েন্টের বাইরে অন্য কিছু হতে পারবে না। ন্যারোইং হলো এমন এক প্রক্রিয়া যার মাধ্যমে টাইপস্ক্রিপ্ট কোনো শর্তের ভেতরে গিয়ে বৃহত্তর ইউনিয়ন থেকে নির্দিষ্ট একটি টাইপ নিশ্চিত করে। typeof, instanceof বা in অপারেটর দিয়ে শর্ত পরীক্ষা করলে কম্পাইলার নিরাপদে নির্দিষ্ট মেম্বারকে চিহ্নিত করে। এর সাথে একটি সাধারণ লিটারেল ফিল্ড (যেমন kind বা status) যোগ করলে তৈরি হয় ডিসক্রিমিনেটেড ইউনিয়ন, যার ফলে সাধারণ switch স্টেটমেন্ট দিয়েই সব স্টেট সুনির্দিষ্টভাবে ভাগ করা যায়। অন্যদিকে জেনেরিক হলো টাইপ-লেভেলের প্যারামিটার (T), যার মাধ্যমে ফাংশনগুলো টাইপ নিরাপত্তা না হারিয়েই বহুমুখী ডেটা নিয়ে কাজ করতে পারে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'discriminated union', def: { en: 'A union whose members share one literal tag field — the discriminator.', bn: 'এমন ইউনিয়ন যার সদস্যরা ভাগ করে একটি লিটারেল ট্যাগ ফিল্ড — ডিসক্রিমিনেটর।' } },
        { term: 'exhaustiveness', def: { en: 'Using never to make the compiler PROVE a switch covered every member.', bn: 'never ব্যবহারে কম্পাইলারকে দিয়ে প্রমাণ করানো — switch সব সদস্য ঢেকেছে।' } },
        { term: 'generic parameter', def: { en: 'A type-level variable (T) bound per call site, then checked concretely.', bn: 'টাইপ-স্তরের ভেরিয়েবল (T) — কল-সাইটপ্রতি বাঁধা, তারপর কংক্রিটভাবে যাচাইকৃত।' } },
        { term: 'constraint (extends)', def: { en: 'The minimum the parameter must satisfy; inside the function only that much is known.', bn: 'প্যারামিটারের ন্যূনতম শর্ত; ফাংশনের ভেতরে জানা থাকে ততটুকুই।' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY: make illegal states unrepresentable', bn: 'কেন: অবৈধ অবস্থা উপস্থাপন-অযোগ্য বানান' } },
    {
      type: 'para',
      text: {
        en: 'The classic UI bug is a state COMBINATION that should not exist: isLoading: true AND data: present AND error: set — three booleans admit eight states; the UI has four. Discriminated unions delete the impossible by construction: Success means data is definitely there; Loading means it definitely is not. The WHY of generics mirrors it: without T you choose between twelve overloads of first, or any (firing the auditor at the heart of your utilities). With T, one signature carries the caller’s vocabulary through the function and back out — the IDE autocompletes the returned item’s methods with the SAME precision as if the function were written per type. The deepest why is shared: both features move knowledge from CODE REVIEW into CONSTRUCTION. You stop writing comments like “don’t render table while loading” and start writing types where rendering a table while loading does not compile. That is the standard the roadmaps converged on in lesson one, now weaponized.',
        bn: 'ক্লাসিক UI বাগ হলো এমন অবস্থা-সমষ্টি যার থাকার কথা নয়: isLoading: true AND ডেটা উপস্থিত AND error সেট — তিনটি বুলিয়ান স্বীকার করে আটটি অবস্থা; UI-তে আছে চারটি। ডিসক্রিমিনেটেড ইউনিয়ন অসম্ভবটাকে গঠনতন্ত্রে মুছে দেয়: Success মানে ডেটা নিশ্চিতভাবে আছে; Loading মানে নিশ্চিতভাবে নেই। জেনেরিকের কেন-ও প্রতিবিম্ব: T ছাড়া বেছে নিতে হয় first-এর বারোটি ওভারলোড, নয় any (হার্ট অব ইউটিলিটিতে নিরীক্ষক বরখাস্ত)। T নিয়ে একটি স্বাক্ষর বহন করে কলারের শব্দভাণ্ডার ফাংশনের ভেতর দিয়ে বেরিয়ে — ফেরত আইটেমের মেথড IDE সাজায় হুবহু সেই নিখুঁততায়, যেন ফাংশনটি টাইপপ্রতি লেখা। গভীরতম কেন-টা যৌথ: দুটি ফিচারই জ্ঞান সরিয়ে নেয় কোড-রিভিউ থেকে নির্মাণে। “লোডিং-এ টেবিল আঁকবেন না”-জাতীয় মন্তব্য লেখা বন্ধ করুন; এমন টাইপ লিখুন যেখানে লোডিং-এ টেবিল আঁকা কম্পাইলই হয় না। প্রথম লেসনে রোডম্যাপরা যে মানদণ্ডে এসে মিলিত হয়েছিল, এটি তার অস্ত্র-রূপ।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW: unions as state machines, generics as type functions', bn: 'কীভাবে: স্টেট-মেশিন হিসেবে ইউনিয়ন, টাইপ-ফাংশন হিসেবে জেনেরিক' } },
    {
      type: 'steps',
      items: [
        { title: { en: '1️⃣ Model states as members, never as flags', bn: '1️⃣ অবস্থা মডেল করুন সদস্যপ্রতি, ফ্ল্যাগে কখনো নয়' }, text: { en: 'One variant per UI state with exactly the data that state owns. Boolean soup is unrepresentable by definition.', bn: 'প্রতি UI-অবস্থায় একটি ভ্যারিয়েন্ট, ডেটা হুবহু সেই অবস্থার মালিকানাধীন। বুলিয়ান-স্যুপ সংজ্ঞায় অপ্রকাশযোগ্য।' } },
        { title: { en: '2️⃣ Discriminate with one literal tag', bn: '2️⃣ একটি লিটারেল ট্যাগে ডিসক্রিমিনেট করুন' }, text: { en: 'kind/status/type — one equality check splits the ledger; members with the same tag shape stay unioned within.', bn: 'kind/status/type — একটি সমতা-পরীক্ষায় খাতা ভাগ; সমান-আকৃতির সদস্যরা ভেতরে ইউনিয়নেই থাকে।' } },
        { title: { en: '3️⃣ Enforce exhaustiveness with never', bn: '3️⃣ never দিয়ে সম্পূর্ণতা বলবৎ করুন' }, text: { en: 'default: assertNever(state) — the day someone ADDS a variant, every switch that forgot it stops compiling. Free refactor assistant, again.', bn: 'default: assertNever(state) — যেদিন কেউ ভ্যারিয়েন্ট যোগ করবে, যেসব switch ভুলে গেছে সেগুলো কম্পাইল হওয়া বন্ধ করবে। আবার সেই বিনামূল্যের রিফ্যাক্টর-সহকারী।' } },
        { title: { en: '4️⃣ Generics: ask for exactly the freedom the function needs', bn: '4️⃣ জেনেরিক: ফাংশনের প্রয়োজনমতো স্বাধীনতাই চান' }, text: { en: 'T for pass-through, T extends Shape for capabilities, K extends keyof T for keys. The constraint is your contract; inside, you may only use what the constraint promises.', bn: 'পাস-থ্রুতে T, ক্ষমতার দরকারে T extends Shape, চাবিতে K extends keyof T। কনস্ট্রেইন্ট-ই আপনার চুক্তি; ভেতরে ব্যবহার করা যায় কেবল কনস্ট্রেইন্টের প্রতিশ্রুতি।' } },
      ],
    },
    {
      type: 'code',
      lang: 'ts',
      code: `// 1+2) UI-অবস্থা: চার সদস্য, একটি ট্যাগ, শূন্য অসম্ভব সমষ্টি
type FetchState<T> =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'success'; data: T }
  | { kind: 'error'; message: string };

// 3) সম্পূর্ণতা — কম্পাইলার প্রমাণ করে সব শাখা সামলানো
function assertNever(x: never): never {
  throw new Error('unhandled: ' + JSON.stringify(x));
}
function render(s: FetchState<string[]>): string {
  switch (s.kind) {
    case 'idle':    return '…';
    case 'loading': return 'spinner';
    case 'success': return s.data.join(', ');   // ✅ এখানে data নিশ্চিত
    case 'error':   return '⚠ ' + s.message;
    default:        return assertNever(s);      // নতুন ভ্যারিয়েন্ট = কম্পাইল-এরর
  }
}

// 4) জেনেরিক: টাইপ-স্তরের ফাংশন — T কলের বোঝা বহন করে
function first<T>(xs: T[]): T | undefined { return xs[0]; }
const n = first([1, 2, 3]);        // T = number বেঁধে গেছে
const w = first(['a', 'b']);       // T = string

// কনস্ট্রেইন্ট: প্রতিশ্রুতির চেয়ে বেশি চাইতে নেই
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}
longest('code', 'শেখা');           // ✅ string-এর length আছে
// longest(3, 4);                  // ✗ number-এর length নেই`,
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: set algebra at guards, unification at calls', bn: 'ভেতরের কথা: গার্ডে সেট-বীজগণিত, কলে ইউনিফিকেশন' } },
    {
      type: 'para',
      text: {
        en: 'Narrowing is pure set algebra on the belief ledger. Members of the union each carry an implicit predicate (kind === "loading"); a guard evaluates the predicate and partitions the set: TRUE-branch keeps matching members, FALSE-branch keeps the complement. Chained guards intersect; or-conditions union. In the false-branch after return early-exits, members drain gradually until the remainder is the exact case you intended. This explains why "possibly undefined" errors mean your set still has an unhandled member. Generics run a different machine: unification. At the call longest("code","শেখা"), the compiler solves constraint equations — T must satisfy both arguments and the extends clause — picking the best common T (here string). Inside the body it reasons with a stand-in type exposing ONLY the constraint’s members — which is precisely why a.length is legal and a.toUpperCase() is not, and why the audit remains complete with ZERO any in sight. The Type Lab scenario “discriminated union” shows the ledger view: watch the FetchState belief set split at kind === "loading", the success-branch claim data without complaint, and the default branch collapse to never — the machine, visible.',
        bn: 'ন্যারোইং হলো বিশ্বাস-খাতায় বিশুদ্ধ সেট-বীজগণিত। ইউনিয়নের প্রতি সদস্য বহন করে একটি অন্তর্নিহিত প্রেডিকেট (kind === "loading"); গার্ড প্রেডিকেট মূল্যায়ন করে সেট বিভক্ত করে: TRUE-শাখা রাখে মিলে-যাওয়া সদস্য, FALSE-শাখা রাখে পরিপূরক। শৃঙ্খলিত গার্ডে ছেদ; or-শর্তে ইউনিয়ন। প্রাথমিক প্রস্থানের পর false-শাখায় সদস্য একে একে কমে এবং অবশিষ্ট দাঁড়ায় কাঙ্ক্ষিত কেসটি। এটি ব্যাখ্যা করে কেন "possibly undefined" এরর আসলে বোঝায় আপনার সেটে এখনো একটি অনিয়ন্ত্রিত সদস্য বাকি আছে। জেনেরিক চালায় আলাদা মেশিন: ইউনিফিকেশন। longest("code","শেখা") কলে কম্পাইলার সমাধান করে কনস্ট্রেইন্ট-সমীকরণ — T-কে উভয় আর্গুমেন্ট ও extends ক্লজ মেনে চলতে হবে — ধরে নেয় সেরা সাধারণ T (এখানে string)। বডির ভেতরে যুক্তি চলে প্রতিনিধি-টাইপে, যা প্রকাশ করে কেবল কনস্ট্রেইন্টের সদস্যদেরই — ঠিক এজন্যই a.length বৈধ আর a.toUpperCase() নয়, আর নিরীক্ষণ সম্পূর্ণ থাকে দৃষ্টিতে শূন্য any নিয়ে। Type Lab-এর “discriminated union” সিনারিও দেখায় খাতা-দৃশ্য: দেখুন FetchState বিশ্বাস-সেট ভাগ হচ্ছে kind === "loading"-এ, success-শাখা data দাবি করছে নিরাপদে, আর default-শাখা ধসে পড়ছে never-এ — মেশিনটি, দৃশ্যমান।',
      },
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: the discriminated-union scenario', bn: 'ভিজ্যুয়াল: ডিসক্রিমিনেটেড-ইউনিয়ন সিনারিও' } },
    { type: 'visual', id: 'ts-narrow', scenario: 'discriminated-union' },
    {
      type: 'para',
      text: {
        en: 'Step through and watch the three-move endgame: guard splits the set, true branch handles its member, false branch drains the rest, and default meets never. That meeting — the empty set handed to assertNever — is the compile-time alarm that rings when the union grows later. Memorize its look now; you will recognize it instantly the first time a teammate ships a fifth UI state.',
        bn: 'স্টেপ ধরে দেখুন তিন-চালের শেষ-খেলা: গার্ড সেট ভাগ করে, true-শাখা তার সদস্য সামলায়, false-শাখা বাকিগুলো বের করে দেয়, আর default পৌঁছায় never-এ। এই দেখা — assertNever-এর হাতে শূন্য সেট তুলে দেওয়া — সেই কম্পাইল-টাইম অ্যালার্ম যা বাজে যখন ইউনিয়ন পরে বাড়ে। চেহারাটা এখনই মুখস্থ করুন; সহকর্মীর পাঠানো পঞ্চম UI-অবস্থা প্রথমবার দেখলেই চিনে ফেলবেন।',
      },
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: compile-time orchestration', bn: 'ফলাফল: কম্পাইল-টাইম অর্কেস্ট্রেশন' } },
    {
      type: 'list',
      items: [
        { en: 'Unions own the “shape of state”; booleans are banned from state duty.', bn: '“অবস্থার আকৃতি”-র মালিক ইউনিয়ন; অবস্থা-দায়িত্ব থেকে বুলিয়ান নিষিদ্ধ।' },
        { en: 'assertNever in defaults converts “did you remember?” into “it must compile”.', bn: 'ডিফল্টে assertNever “তোমার মনে ছিল করো?” প্রশ্নকে বানায় “কম্পাইল হতেই হবে”।' },
        { en: 'Generic constraints are budgets: pay only for the capabilities the body actually uses.', bn: 'জেনেরিক কনস্ট্রেইন্ট হলো বাজেট: বডি যতটুকু ক্ষমতা আসলে ব্যবহার করে, ঠিক ততটুকুরই মূল্য।' },
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUGGING drill: the constraint that lied', bn: 'ডিবাগিং অনুশীলন: মিথ্যা বলা কনস্ট্রেইন্ট' } },
    {
      type: 'para',
      text: {
        en: 'Symptom: inside function save<T extends { id: string }>(e: T), the call db.find(e.id) type-checks, but the compiled runtime crashes on records where id is sometimes undefined. Evidence hunt: hover e.id — the compiler faithfully reports string because you declared it. Fixes follow three practical steps: First, tighten the constraint to { id?: string } and narrow inside. Second, validate at the boundary with schemas like Zod. Third, keep loose inputs and map to strict models immediately. A constraint stronger than your data is not confidence; it is a signed false affidavit.',
        bn: 'লক্ষণ: function save<T extends { id: string }>(e: T)-এর ভেতরে db.find(e.id) টাইপ-চেক পাস করে, কিন্তু কম্পাইলড রানটাইম ক্র্যাশ করে সেসব রেকর্ডে যেখানে id মাঝে মাঝে undefined। প্রমাণ-শিকার: e.id-এ hover করুন — কম্পাইলার বিশ্বস্ততার সাথে string জানায় কারণ আপনি তা ঘোষণা করেছিলেন। সমাধানের জন্য ৩টি বাস্তবসম্মত ধাপ রয়েছে: প্রথমত, কনস্ট্রেইন্ট { id?: string } শক্ত করে ভেতরে ন্যারো করা। দ্বিতীয়ত, Zod-এর মতো স্কিমা দিয়ে সীমানায় ভ্যালিডেশন নিশ্চিত করা। তৃতীয়ত, ঢিলা ইনপুট গ্রহণ করে ভ্যালিডেশনের পরপরই কঠোর মডেলে রূপান্তর করা। ডেটার চেয়ে কঠোর কনস্ট্রেইন্ট আত্মবিশ্বাস নয়, বরং সই-করা মিথ্যা হলফনামা।'
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      text: {
        en: 'Modelling state with booleans. isLoading + data + error manufactures four impossible states for every real one — discriminated unions make the impossible unrepresentable for free.',
        bn: 'অবস্থাকে বুলিয়ানে মডেল করা। isLoading + data + error প্রতি আসল অবস্থার জন্য চারটি অসম্ভব অবস্থা তৈরি করে — ডিসক্রিমিনেটেড ইউনিয়ন অসম্ভবকে বিনামূল্যেই অপ্রকাশযোগ্য বানায়।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD', bn: 'বাস্তব জগত' } },
    {
      type: 'list',
      items: [
        { en: 'Redux/Zustand action types and React Query states are mainstream discriminated-union architecture.', bn: 'Redux/Zustand অ্যাকশন-টাইপ আর React Query স্টেট — মূলস্রোতের ডিসক্রিমিনেটেড-ইউনিয়ন স্থাপত্য।' },
        { en: 'This platform itself: the Block union in lib/types.ts drives every renderer with compile-proven coverage.', bn: 'এই প্ল্যাটফর্ম নিজেই: lib/types.ts-এর Block ইউনিয়ন প্রতি রেন্ডারার চালায় কম্পাইল-প্রমাণিত কভারেজে।' },
        { en: 'Utility types are tiny generics: Partial<T>, Pick<T, K>, Record<K, V> — vocabulary worth memorizing once.', bn: 'ইউটিলিটি টাইপগুলো ক্ষুদ্র জেনেরিক: Partial<T>, Pick<T, K>, Record<K, V> — একবার মুখস্থ করার যোগ্য শব্দভাণ্ডার।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: the TypeScript roadmap', bn: 'পরবর্তী: TypeScript রোডম্যাপ' } },
    {
      type: 'para',
      text: {
        en: 'The roadmap below sequences the rest: utility types, template literals, mapped and conditional types, declaration files for the untyped wild, and the strict flags worth turning on project-by-project. You now own the two moves everything else combines — sets that narrow, and holes that unify.',
        bn: 'নিচের রোডম্যাপ সাজিয়ে দেবে বাকি পথ: ইউটিলিটি টাইপ, টেমপ্লেট-লিটারেল, ম্যাপড ও কন্ডিশনাল টাইপ, টাইপহীন বনজঙ্গলের ডিক্লারেশন-ফাইল, আর প্রজেক্টপ্রতি চালু করার উপযোগী strict ফ্ল্যাগ। আপনি এখন মালিক সেই দুই চালের যা মিলেই বাকি সব — সঙ্কুচিত-হওয়া সেট, আর মিলিত-হওয়া ফাঁকা-ঘর।',
      },
    },
  ],
  exercises: [
    {
      id: 'ts-narrow-ex1',
      kind: 'mcq',
      topic: 'unions',
      question: { en: 'The core reason to prefer FetchState over isLoading+data+error…', bn: 'isLoading+data+error-এর বদলে FetchState পছন্দের মূল কারণ…' },
      options: [
        { en: 'It is fewer lines', bn: 'লাইন কম লাগে' },
        { en: 'Impossible state combinations stop being REPRESENTABLE at all — the compiler refuses them', bn: 'অসম্ভব অবস্থা-সমষ্টি উপস্থাপন করাই বন্ধ — কম্পাইলার তা প্রত্যাখ্যান করে' },
        { en: 'It runs faster', bn: 'দ্রুত চলে' },
      ],
      answer: 1,
      hint: { en: '3 booleans admit 8 states; the UI has 4. Close the gap in the TYPE.', bn: '৩ বুলিয়ান স্বীকার করে ৮ অবস্থা; UI-তে ৪। ফাঁক বন্ধ করুন টাইপেই।' },
      explanation: { en: 'Construction replaces discipline: reviewers stop guarding what can no longer exist.', bn: 'শৃঙ্খলার জায়গায় নির্মাণ: যা আর থাকতেই পারে না, রিভিউয়ারের তা পাহারা দিতে হয় না।' },
    },
    {
      id: 'ts-narrow-ex2',
      kind: 'predict',
      topic: 'discrimination',
      question: { en: "After state.kind === 'loading', inside the TRUE branch TS believes state is…", bn: "state.kind === 'loading' এর পরে TRUE-শাখায় TS বিশ্বাস করে state…" },
      options: [
        { en: 'Still the whole union', bn: 'এখনো পুরো ইউনিয়ন' },
        { en: "{ kind: 'loading' } — the matching member(s) only", bn: "{ kind: 'loading' } — মিলে-যাওয়া সদস্য(গুলো) কেবল" },
        { en: 'never', bn: 'never' },
      ],
      answer: 1,
      hint: { en: 'The guard partitions the belief set.', bn: 'গার্ড বিশ্বাস-সেট বিভক্ত করে।' },
      explanation: { en: 'One literal tag gives cheap, precise partitioning — the whole point of the discriminator.', bn: 'একটি লিটারেল ট্যাগ দেয় সস্তা, নিখুঁত বিভাজন — ডিসক্রিমিনেটরের পুরো অর্থ-ই।' },
    },
    {
      id: 'ts-narrow-ex3',
      kind: 'fill',
      topic: 'exhaustiveness',
      question: { en: 'default: ____(state) — the helper typed to accept only never, turning missed cases into compile errors.', bn: 'default: ____(state) — কেবল never গ্রহণকারী হেল্পার, মিস-হওয়া কেসকে বানায় কম্পাইল-এরর।' },
      answer: 'assertNever',
      accept: ['assertNever'],
      hint: { en: 'It throws only if the ledger hands it a NON-empty set.', bn: 'খাতা অ-শূন্য সেট দিলেই কেবল এটি throw করে।' },
      explanation: { en: 'If a future member reaches default, its type is not never → compile error → the switch must grow.', bn: 'ভবিষ্যৎ সদস্য default-এ পৌঁছালে টাইপ never নয় → কম্পাইল-এরর → switch-কে বাড়তেই হয়।' },
      solution: 'assertNever',
    },
    {
      id: 'ts-narrow-ex4',
      kind: 'mcq',
      topic: 'generics',
      question: { en: 'function first<T>(xs: T[]): T — what is T, mechanically?', bn: 'function first<T>(xs: T[]): T — টেকনিক্যালি T কী?' },
      options: [
        { en: 'A runtime parameter holding the type name', bn: 'টাইপ-নাম ধারণকারী রানটাইম প্যারামিটার' },
        { en: 'A compile-time variable the compiler binds per call (number for first([1,2])), then checks concretely — erased with all types', bn: 'কম্পাইল-টাইম ভেরিয়েবল — কম্পাইলার কলপ্রতি বাঁধে (first([1,2])-তে number), তারপর কংক্রিটভাবে যাচাই — সব টাইপের সঙ্গে মিলেয় যায়' },
        { en: 'An alias for any', bn: 'any-এর উপনাম' },
      ],
      answer: 1,
      hint: { en: 'Functions take values; generic functions also take TYPES.', bn: 'ফাংশন নেয় মান; জেনেরিক ফাংশন নেয় টাইপ-ও।' },
      explanation: { en: 'Per-call binding is why one signature serves every shape with full auditability — no any required.', bn: 'কলপ্রতি বাঁধাই কারণ — একটি স্বাক্ষর সেবা করে প্রতি আকৃতিতে পূর্ণ নিরীক্ষণযোগ্যতায় — any লাগে না।' },
    },
  ],
  quiz: {
    id: 'ts-narrow-quiz',
    title: { en: 'Quiz: unions, narrowing, generics', bn: 'কুইজ: ইউনিয়ন, ন্যারোইং, জেনেরিক' },
    questions: [
      {
        id: 'ts-narrow-q1',
        kind: 'mcq',
        topic: 'model',
        question: { en: 'Discriminated unions beat boolean flags chiefly because…', bn: 'ডিসক্রিমিনেটেড ইউনিয়ন বুলিয়ান-ফ্ল্যাগকে হারায় প্রধানত কারণ…' },
        options: [
          { en: 'They are more concise', bn: 'সংক্ষিপ্ত বলে' },
          { en: 'They make invalid state combinations unrepresentable, so the compiler — not reviewers — guards state integrity', bn: 'অবৈধ অবস্থা-সমষ্টি অপ্রকাশযোগ্য বানায় — রক্ষক কম্পাইলার, রিভিউয়ার নয়' },
          { en: 'They serialize better', bn: 'ভালো সিরিয়ালাইজ হয় বলে' },
        ],
        answer: 1,
        hint: { en: 'Move knowledge from review into construction.', bn: 'জ্ঞান সরান রিভিউ থেকে নির্মাণে।' },
        explanation: { en: 'The four impossible states of flag soup cannot be written, so they cannot be shipped.', bn: 'ফ্ল্যাগ-স্যুপের চার অসম্ভব অবস্থা লেখাই যায় না, তাই পাঠানোও যায় না।' },
      },
      {
        id: 'ts-narrow-q2',
        kind: 'predict',
        topic: 'never',
        question: { en: 'In a switch over FetchState, the default branch receives state of type…', bn: 'FetchState-এর switch-এ default-শাখা পায় state-এর টাইপ…' },
        options: [
          { en: 'The full union', bn: 'পুরো ইউনিয়ন' },
          { en: 'never — all members drained by the cases above; assertNever accepts it', bn: 'never — উপরের কেসগুলো সব সদস্য বের করে দিয়েছে; assertNever তা গ্রহণ করে' },
          { en: 'undefined', bn: 'undefined' },
        ],
        answer: 1,
        hint: { en: 'Exhaustive cases empty the set; the empty set IS the proof.', bn: 'সম্পূর্ণ কেস সেট খালি করে; শূন্য সেট-ই প্রমাণ।' },
        explanation: { en: 'The day the union grows, default receives a non-never → compile error at every forgotten switch. Free refactor assistant.', bn: 'ইউনিয়ন বাড়ার দিনে default পায় অ-never → ভুলে-যাওয়া প্রতি switch-এ কম্পাইল-এরর। বিনামূল্যের রিফ্যাক্টর-সহকারী।' },
      },
      {
        id: 'ts-narrow-q3',
        kind: 'mcq',
        topic: 'constraints',
        question: { en: 'Inside function f<T extends { length: number }>(x: T), which call is legal?', bn: 'function f<T extends { length: number }>(x: T)-এর ভেতরে কোন কল বৈধ?' },
        options: [
          { en: 'x.toUpperCase()', bn: 'x.toUpperCase()' },
          { en: 'x.length — the constraint promises exactly this much, and the body may use only what is promised', bn: 'x.length — কনস্ট্রেইন্ট প্রতিশ্রুতি দেয় হুবহু এতটুকুই, বডি ব্যবহার করতে পারে কেবল প্রতিশ্রুত' },
          { en: 'x.toFixed(2)', bn: 'x.toFixed(2)' },
        ],
        answer: 1,
        hint: { en: 'The budget is the contract: spends are limited to promised capabilities.', bn: 'বাজেট-ই চুক্তি: খরচ সীমিত প্রতিশ্রুত ক্ষমতায়।' },
        explanation: { en: 'Constraints are two-way: callers must supply them, bodies must live within them.', bn: 'কনস্ট্রেইন্ট দ্বিমুখী: কলারদের দিতে হবে, বডিকে তার মধ্যেই বাঁচতে হবে।' },
      },
      {
        id: 'ts-narrow-q4',
        kind: 'mcq',
        topic: 'ledger',
        question: { en: 'x possibly undefined really means, in ledger language…', bn: 'x possibly undefined খাতার ভাষায় আসলে মানে…' },
        options: [
          { en: 'The value was null somewhere at runtime', bn: 'রানটাইমে কোথাও মান null ছিল' },
          { en: 'Undefined is still a living member of the belief set at this point — drain it with a guard, optional chain, or early return', bn: 'এই বিন্দুতে undefined এখনো বিশ্বাস-সেটের জীবিত সদস্য — বের করুন গার্ড, অপশনাল-চেইন বা আর্লি-রিটার্নে' },
          { en: 'A compiler race condition', bn: 'কম্পাইলার রেস-কন্ডিশন' },
        ],
        answer: 1,
        hint: { en: 'The complaint is set-membership, not a value sighting.', bn: 'অভিযোগটি সেট-সদস্যতার, মান-দেখার নয়।' },
        explanation: { en: 'Every narrowing tool is a set operation that drains the unwanted member before use.', bn: 'প্রতি ন্যারোইং হাতিয়ার একটি সেট-অপারেশন — ব্যবহারের আগে অনাকাঙ্ক্ষিত সদস্য বের করে।' },
      },
    ],
  },
};
