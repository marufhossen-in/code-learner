import type { Lesson } from '../../../lib/types';

export const typeThinkingLesson: Lesson = {
  slug: 'type-thinking',
  tech: 'typescript',
  title: {
    en: 'Type Thinking — Foundations of TypeScript, Type Erasure, and Structural Typing',
    bn: 'টাইপ-চিন্তা: টাইপস্ক্রিপ্টের ভিত্তি, টাইপ ইরেজার ও স্ট্রাকচারাল টাইপিং'
  },
  summary: {
    en: 'TypeScript adds zero bytes to your JavaScript runtime and moves entire bug classes from production into your editor. Learn what a type actually is: a compile-time contract completely erased at build time. Understand structural typing where object shapes matter rather than nominal class names. Master how the compiler infers types automatically across variables and function return statements.',
    bn: 'TypeScript আপনার জাভাস্ক্রিপ্টে শূন্য বাইট যোগ করে, অথচ পুরো বাগ-শ্রেণি প্রোডাকশন থেকে সরিয়ে দেয় আপনার এডিটরে। শিখুন টাইপ আসলে কী: কম্পাইল-টাইম চুক্তি যা বিল্ডের সময় মুছে যায়। স্ট্রাকচারাল টাইপিং বুঝুন যেখানে ক্লাসের নামের বদলে অবজেক্টের আকৃতি গুরুত্বপূর্ণ। কম্পাইলার কীভাবে ভেরিয়েবল ও ফাংশন রিটার্ন থেকে স্বয়ংক্রিয়ভাবে টাইপ অনুমান করে তা আয়ত্ত করুন।'
  },
  minutes: 30,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT is a type in TypeScript?', bn: 'TypeScript-এ টাইপ কী?' } },
    {
      type: 'para',
      text: {
        en: 'When you write modern web applications, TypeScript helps you catch subtle bugs right in your code editor before running the program.',
        bn: 'আপনি যখন আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন টাইপস্ক্রিপ্ট কোড চালানোর আগেই এডিটরে সূক্ষ্ম ভুলগুলো ধরতে সাহায্য করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A type is a compile-time contract that the compiler verifies and then removes. When you write let count: number, you declare that count must hold numbers. The compiler audits every assignment and function argument across your program. At build time, all types are erased (deleted completely): the emitted JavaScript contains zero type overhead and runs at native speed. This creates a fundamental rule: types exist for the developer, not the runtime engine. Every feature like interfaces, generics, and unions allows you to express clearer guarantees without altering CPU instructions.',
        bn: 'টাইপ হলো এমন এক কম্পাইল-টাইম চুক্তি যা কম্পাইলার যাচাই করে এবং তারপর সরিয়ে দেয়। let count: number লিখলে আপনি ঘোষণা করছেন যে count-এ কেবল সংখ্যা থাকতে পারবে। কম্পাইলার আপনার কোডের প্রতিটি অ্যাসাইনমেন্ট ও ফাংশন আর্গুমেন্ট পুঙ্খানুপুঙ্খভাবে যাচাই করে। বিল্ডের সময় সমস্ত টাইপ মুছে ফেলা হয় (Type Erasure): ফলে চূড়ান্ত জাভাস্ক্রিপ্টে কোনো বাড়তি মেমরি খরচ হয় না এবং কোড স্বাভাবিক গতিতে চলে। এর মূল নীতি হলো: টাইপ থাকে প্রোগ্রামারের সুবিধার জন্য, রানটাইম ইঞ্জিনের জন্য নয়। ইন্টারফেস, জেনেরিক বা ইউনিয়নের মতো প্রতিটি বৈশিষ্ট্য সিপিইউর নির্দেশনা না বদলেই কোডকে আরও সুসংগঠিত করে তোলে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'type erasure', def: { en: 'Types verify at compile time, then are fully deleted — zero runtime footprint.', bn: 'টাইপ কম্পাইল-কালে যাচাই করে, তারপর পুরো মুছে যায় — রানটাইমে শূন্য ছাপ।' } },
        { term: 'structural typing', def: { en: 'A value fits a type when its SHAPE matches, whatever its class or name.', bn: 'আকৃতি মিললেই মান টাইপে বসে, তার ক্লাস বা নাম যা-ই হোক।' } },
        { term: 'inference', def: { en: 'TS computing the type you did not write from the value you did write.', bn: 'না-লেখা টাইপ TS বের করে নেয় আপনার লেখা মান থেকে।' } },
        { term: 'assignability', def: { en: 'The one-way question: may this value stand where that type is expected?', bn: 'একমুখী প্রশ্ন: এই মান কি সেই টাইপের জায়গায় দাঁড়াতে পারে?' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY move errors left (and what it costs)', bn: 'কেন ভুল বামে সরান (আর মূল্য কী)' } },
    {
      type: 'para',
      text: {
        en: 'Every bug has an address where it is cheapest to fix: the editor line where it is written costs a keystroke; the code review costs a comment; CI costs a pipeline. Production costs an incident, a rollback and lost trust. TypeScript’s entire value proposition is relocation: useState-shaped mistakes, typoed property names, “possibly undefined” dereferences — whole bug classes get caught at the editor line, with a squiggle, before the file is even saved. The trade is honesty about the tax: types are a second language you must maintain, and any (the escape hatch) silently refunds the entire investment wherever it appears. Teams that win at TS treat it like the roadmaps treat roadmaps — strict from day one (strictNullChecks above all), any quarantined behind review. And types treated as design: the day your data model changes, one edit to the type and the compiler becomes a free refactoring assistant that visits every call site for you.',
        bn: 'প্রতি বাগের একটি ঠিকানা আছে যেখানে তা ঠিক করা সবচেয়ে সস্তা: যেখানে লেখা হলো সেই এডিটর-লাইনে খরচ এক কিস্ট্রোক; কোড-রিভিউতে এক মন্তব্য; CI-তে এক পাইপলাইন; প্রোডাকশনে এক দুর্ঘটনা, এক রোলব্যাক আর হারানো বিশ্বাস। TypeScript-এর পুরো মূল্য-প্রস্তাব হলো স্থানান্তর: useState-আকৃতির ভুল, বানান-ভুলা প্রপার্টি, “সম্ভবত undefined” ডিরেফারেন্স — পুরো বাগ-শ্রেণি ধরা পড়ে এডিটর-লাইনেই, লাল-দাগ সহ, ফাইল সংরক্ষণও হওয়ার আগে। লেনদেনটা হলো করের সত্যকথন: টাইপ একটি দ্বিতীয় ভাষা, রক্ষণাবেক্ষণ করতে হয়, আর any (পলায়ন-দরজা) যেখানেই হাজির হয় সেখানেই নীরবে পুরো বিনিয়োগ ফেরত দেয়। TS-এ জেতা দলরা একে দেখে রোডম্যাপের মতো — প্রথম দিন থেকেই কঠোর (সবচেয়ে আগে strictNullChecks), any কোয়ারেন্টাইনে রিভিউর পেছনে, আর টাইপকে দেখা হয় নকশা হিসেবে: ডেটা-মডেল বদলানোর দিনে টাইপে এক সম্পাদনা দিলেই কম্পাইলার হয়ে ওঠে বিনামূল্যের রিফ্যাক্টরিং-সহকারী. আপনার হয়ে প্রতি কল-সাইট ঘুরে আসে।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW structural typing reads values', bn: 'স্ট্রাকচারাল টাইপিং মান পড়ে যেভাবে' } },
    {
      type: 'steps',
      items: [
        { title: { en: '1️⃣ The rule: shape, not name', bn: '1️⃣ নিয়ম: নাম নয়, আকৃতি' }, text: { en: 'An object fits interface User when it HAS the required members — class, origin, and extra fields are irrelevant.', bn: 'interface User-এ অবজেক্ট বসে যখন তার প্রয়োজনীয় সদস্য আছে — ক্লাস, উৎস, অতিরিক্ত ফিল্ড অপ্রাসঙ্গিক।' } },
        { title: { en: '2️⃣ Fresh object literals: extra fields rejected', bn: '2️⃣ তাজা অবজেক্ট-লিটারেল: অতিরিক্ত ফিল্ড বাতিল' }, text: { en: 'Direct literals get EXCESS PROPERTY CHECKS — typos caught; assigned variables skip the check (they may be reused elsewhere).', bn: 'সরাসরি লিটারেলে মেলে অতিরিক্ত-প্রপার্টি পরীক্ষা — বানান ধরা; অ্যাসাইনড ভেরিয়েবল পরীক্ষা পাশ কাটায় (অন্যত্র ব্যবহৃত হতে পারে)।' } },
        { title: { en: '3️⃣ Inference rules of thumb', bn: '3️⃣ অনুমানের হাতের-কাছের নিয়ম' }, text: { en: 'const takes the literal; let widens to the category; function returns infer from ALL return points; annotations always override.', bn: 'const লিটারেল নেয়; let প্রসারিত হয় শ্রেণিতে; ফাংশনের রিটার্ন নেয় সব রিটার্ন-পয়েন্ট মিলে; অ্যালানোটেশন সবসময় জেতে।' } },
        { title: { en: '4️⃣ any and unknown', bn: '4️⃣ any আর unknown' }, text: { en: 'any turns the checker OFF (you refund the system); unknown keeps it ON, demanding narrowing before use — unknown is any’s honest sibling.', bn: 'any যাচাই বন্ধ করে দেয় (ব্যবস্থা ফেরত নেবেন); unknown যাচাই চালু রাখে, ব্যবহারের আগে ন্যারোইং দাবি করে — unknown হলো any-এর সৎ ভাই।' } },
      ],
    },
    {
      type: 'code',
      lang: 'ts',
      code: `// স্ট্রাকচারাল: ক্লাস/নাম নয়, আকৃতিই রায় দেয়
interface Point { x: number; y: number }
const p3 = { x: 1, y: 2, z: 3 };
const p: Point = p3;     // ✅ অতিরিক্ত z সমস্যা নয় (ভেরিয়েবল দিয়ে)
const q: Point = { x: 1, y: 2, z: 3 };  // ✗ তাজা লিটারেলে z ধরা পড়ে!

// অনুমানের তিন নিয়ম — ল্যাবে স্টেপ ধরে দেখুন
const s = 'hello';   // টাইপ: "hello"  (const → লিটারেল)
let n = 42;          // টাইপ: number   (let → শ্রেণিতে প্রসার)
let id: string | number = 7;  // অ্যালানোটেশনই সিলিং

// any বনাম unknown — একই অজানা ডেটা, বিপরীত শৃঙ্খলা
function load(raw: unknown) {
  // raw.name        // ✗ প্রথমে প্রমাণ করো তুমি কে
  if (typeof raw === 'object' && raw !== null && 'name' in raw) {
    return (raw as { name: string }).name;   // ✅ ন্যারোইং-পরবর্তী
  }
  throw new Error('bad payload');
}`,
    },
    { type: 'heading', id: 'internal', text: { en: 'INTERNAL: the belief ledger per line', bn: 'ভেতরের কথা: প্রতি লাইনে বিশ্বাসের খাতা' } },
    {
      type: 'para',
      text: {
        en: 'Here is the model the compiler actually runs, and it is simpler than the syntax suggests. For every variable, at every program POINT, TypeScript maintains a SET — the belief set of types that variable may currently hold. Declarations seed the set (annotation wins over initializer). Flow analysis then EDITs the set as control flows: assignments narrow it to the assigned value; guards (typeof, instanceof, equality, truthiness, in, Array.isArray) perform set operations at branch points. The true branch keeps the intersection, the false branch keeps the remainder. At merges, the set UNIONS the survivors of all live paths. Every type error is the compiler asking “for every member still in the belief set, is this operation legal?”, at the exact line, before execution. The Type Lab below is this ledger made visible: step the scenarios and watch sets split at guards, narrow in branches, and merge back — the whole discipline in one right-hand column. Master reading that column and .d.ts files, library errors, and “possibly undefined” stop being noise and start being ledger entries.',
        bn: 'কম্পাইলার আসলে যে মডেল চালায় তা এটিই, আর সিনট্যাক্সের ইঙ্গিতের চেয়ে সরল। প্রতি ভেরিয়েবলে, প্রতি প্রোগ্রাম-পয়েন্টে TypeScript রেখে থাকে একটি সেট — ঐ ভেরিয়েবলের সম্ভাব্য টাইপের বিশ্বাস-সেট। ডিক্লারেশন সেটের বীজ বোনে (অ্যালানোটেশন ইনিশিয়ালাইজারকে জেতে)। ফ্লো-বিশ্লেষণ সেট সম্পাদনা করে কন্ট্রোল প্রবাহে: অ্যাসাইনমেন্ট তা সঙ্কুচিত করে অ্যাসাইন্ড মানে; গার্ড (typeof, instanceof, সমতা, ট্রুদিনেস, in, Array.isArray) শাখা-পয়েন্টে সেট-অপারেশন চালায় — true-শাখা রাখে ছেদ, false-শাখা রাখে অবশিষ্ট; মিলন-বিন্দুতে জীবিত পথগুলোর টিকে-যাওয়ারা ইউনিয়ন হয়। প্রতি টাইপ-এরর হলো কম্পাইলারের প্রশ্ন — “বিশ্বাস-সেটে থাকা প্রতি সদস্যের জন্য কি এই অপারেশন বৈধ?” — হুবহু ওই লাইনে, এক্সিকিউশনের আগে। নিচের Type Lab এই খাতা দৃশ্যমান করে: সিনারিও স্টেপ করুন আর দেখুন গার্ডে সেট ভাগ হচ্ছে, শাখায় সঙ্কুচিত হচ্ছে, ফিরে মিশছে — পুরো শৃঙ্খলা একটি ডান-কলামে। ওই কলাম পড়তে শিখে গেলে .d.ts ফাইল, লাইব্রেরি-এরর আর “possibly undefined” শব্দ-কোলাহল থেকে বেরিয়ে খাতার এন্ট্রি হয়ে যায়।',
      },
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: the Type Lab', bn: 'ভিজ্যুয়াল: টাইপ ল্যাব' } },
    { type: 'visual', id: 'ts-narrow' },
    {
      type: 'para',
      text: {
        en: 'Open the let-vs-const scenario first: watch const seize its literal while let widens to number, then watch a string assignment die at the exact line it was written. Then run the typeof-narrow scenario: at the guard, the belief column SPLITS — green keeps string, red keeps number — and the if-body’s method call flips from squiggle to clean. That flip, made visible, is 80% of everyday TypeScript.',
        bn: 'আগে let-বনাম-const সিনারিও খুলুন: const তার লিটারেল দখল করছে, let number-এ প্রসারিত হচ্ছে — তারপর একটি string অ্যাসাইনমেন্ট মরছে হুবহু যেখানে লেখা সে লাইনে। এরপর typeof-ন্যারো সিনারিও: গার্ডে বিশ্বাস-কলাম ভাগ হচ্ছে — সবুজ রাখে string, লাল রাখে number — আর if-বডির মেথড-কল লাল-দাগ থেকে পরিষ্কার হয়ে যাচ্ছে। দৃশ্যমান এই পাল্টানোই দৈনন্দিন TypeScript-এর ৮০%।',
      },
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: compile-time instincts', bn: 'ফলাফল: কম্পাইল-টাইম সহজাততা' } },
    {
      type: 'list',
      items: [
        { en: 'Beliefs, not behavior: every type error is a ledger audit, zero CPU instructions were consulted.', bn: 'আচরণ নয়, বিশ্বাস: প্রতি টাইপ-এরর এক খাতা-নিরীক্ষা, কোনো CPU-নির্দেশনা জিজ্ঞাসিত হয়নি।' },
        { en: 'Annotations at boundaries, inference inside: declare API surfaces, let local values infer.', bn: 'সীমানায় অ্যালানোটেশন, ভেতরে অনুমান: API-তল ঘোষণা করুন, স্থানীয় মান অনুমানে ছাড়ুন।' },
        { en: 'unknown over any, always — the honest handcuffs keep the auditor on duty.', bn: 'any-র বদলে সবসময় unknown — সৎ হাতকড়া নিরীক্ষককে দায়িত্বে রাখে।' },
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUGGING drill: property does not exist on type never', bn: 'ডিবাগিং অনুশীলন: never টাইপে প্রপার্টি নেই' } },
    {
      type: 'para',
      text: {
        en: 'Symptom: after an if-return early-exit, the compiler claims user is never and refuses user.name. Hypothesis via the ledger: the early branch did NOT actually narrow (the guard was written on the wrong variable, or the check ran inside a nested callback the flow-analyzer cannot follow). So on the surviving path every member was already excluded and the set bottomed out. Never, the empty set, on which NO operation is legal. Evidence hunt in the lab: walk the scenario and watch the false-branch column — somewhere it emptied. Fixes in order of honesty: correct the guard target; use an explicit else with an early return — the compiler compiler can trace; or, as a deliberate contract, throw inside the un-narrowed branch — throws are flow-visible too. The non-fixes: as-casting the error away (you silenced the witness) and any (you fired the auditor). The lesson’s invariant: when TS says never, believe the ledger, not your memory of what “should” be true.',
        bn: 'লক্ষণ: if-return প্রাথমিক-প্রস্থানের পরে কম্পাইলার দাবি করে user হলো never আর user.name বারণ করে। খাতা দিয়ে সন্দেহ: প্রাথমিক শাখা আসলে ন্যারোই করেনি (গার্ড লেখা হয়েছে ভুল ভেরিয়েবলে, নয় পরীক্ষা চলেছে এমন নেস্টেড কলব্যাকে যা ফ্লো-বিশ্লেষক অনুসরণ করতে পারে না) — তাই টিকে-থাকা পথে প্রতি সদস্য আগেই বাদ পড়েছে, সেট শূন্যে পৌঁছেছে. Never, যার ওপর কোনো অপারেশনই বৈধ নয়। ল্যাবে প্রমাণ-শিকার: সিনারিও হাঁটুন আর false-শাখা কলাম দেখুন — কোথাও তা খালি হয়ে গেছে। সততার ক্রমে সমাধান: গার্ডের লক্ষ্য ঠিক করুন; স্পষ্ট else দিন প্রাথমিক-রিটার্নসহ যা কম্পাইলার অনুসরণ করে; অথবা ইচ্ছাকৃত চুক্তি হিসেবে অন্যারোড শাখায় throw দিন — throw-ও ফ্লো-দৃশ্যমান। অ-সমাধান: as দিয়ে এরর চাপা দেওয়া (সাক্ষী চুপ করালেন) আর any (নিরীক্ষক বরখাস্ত করলেন)। লেসনের অটলতা: TS যখন never বলে, বিশ্বাস করুন খাতাকে — “হওয়া উচিত ছিল”-আকৃতির স্মৃতিকে নয়।',
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      text: {
        en: 'Reaching for `any` when a type is fiddly. Any is not a type — it is a signed resignation of the type system at that point, and the resignation silently spreads to everything the value touches.',
        bn: 'ঝামেলার টাইপ দেখলেই `any` ছোঁয়া। any টাইপ নয় — ওই বিন্দুতে টাইপ-সিস্টেমে পত্র সই করা পদত্যাগ, আর পদত্যাগ নীরবে ছড়ায় মান যা-ই ছোঁয় তার সবকিছুতে।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD', bn: 'বাস্তব জগত' } },
    {
      type: 'list',
      items: [
        { en: 'This entire platform is strict-TS: noUnusedLocals, noFallthroughCasesInSwitch — the ledger guards its own teachers.', bn: 'এই পুরো প্ল্যাটফর্মই strict-TS: noUnusedLocals, noFallthroughCasesInSwitch — শিক্ষকদেরও খাতা পাহারা দেয়।' },
        { en: 'Library .d.ts files are belief sets written by strangers — reading them IS reading structural typing in the wild.', bn: 'লাইব্রেরির .d.ts ফাইল হলো অচেনাদের লেখা বিশ্বাস-সেট — সেগুলো পড়া মানেই বুনো স্ট্রাকচারাল টাইপিং পড়া।' },
        { en: 'API validation libs (zod, valibot) close the erasure gap: one schema yields BOTH the runtime check and the static type.', bn: 'API-ভ্যালিডেশন লাইব্রেরি (zod, valibot) ইরেজার-ফাঁক বন্ধ করে: একটি স্কিমা দেয় রানটাইম-যাচাই ও স্ট্যাটিক টাইপ — দুটোই।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: narrowing & generics as superpowers', bn: 'পরবর্তী: ন্যারোইং ও জেনেরিক — সুপারশক্তি' } },
    {
      type: 'para',
      text: {
        en: 'You read the ledger now. Next lesson writes with it: union types as state machines (one discriminated union per UI state, and the compiler proves you handled all), generics as functions at the type level. And the small utility vocabulary (Partial, Pick, Record) that turns repetition into one-line derivations.',
        bn: 'খাতা এখন আপনি পড়তে পারেন। পরের লেসনে তা দিয়ে লেখা: স্টেট-মেশিন হিসেবে ইউনিয়ন টাইপ (UI-অবস্থাপ্রতি একটি ডিসক্রিমিনেটেড ইউনিয়ন — কম্পাইলার প্রমাণ করবে সব সামলানো হয়েছে), টাইপ-স্তরের ফাংশন হিসেবে জেনেরিক, আর ক্ষুদ্র ইউটিলিটি শব্দভাণ্ডার (Partial, Pick, Record) যা পুনরাবৃত্তিকে বানায় এক-লাইনের উৎপাদন।',
      },
    },
  ],
  nextLesson: {
    slug: 'narrowing-generics',
    tech: 'typescript',
    title: { en: 'Narrowing Generics — Turn the belief ledger from last lesson into a working', bn: 'ন্যারোইং ও জেনেরিক: কম্পাইলার দিয়ে প্রমাণ করান' }
  },
  exercises: [
    {
      id: 'ts-think-ex1',
      kind: 'predict',
      topic: 'inference',
      question: { en: "const s = 'hello' — TS infers the type of s as…", bn: "const s = 'hello' — TS s-এর টাইপ অনুমান করে…" },
      options: [
        { en: 'string', bn: 'string' },
        { en: '"hello" — const takes the exact literal; it can never change', bn: '"hello" — const নেয় হুবহু লিটারেল; এ তো বদলাবেই না' },
        { en: 'any', bn: 'any' },
      ],
      answer: 1,
      hint: { en: 'Const-ness is information: immutability ⇒ the value IS the type.', bn: 'const-ত্ব হলো তথ্য: অপরিবর্তনীয়তা ⇒ মান-ই টাইপ।' },
      explanation: { en: 'let widens (later numbers must fit); const narrows (no later exists).', bn: 'let প্রসারিত (পরের সংখ্যাগুলো ধরতে হবে); const সঙ্কুচিত (পরের কিছু নেই)।' },
    },
    {
      id: 'ts-think-ex2',
      kind: 'mcq',
      topic: 'structural',
      question: { en: 'A plain object {x:1, y:2, z:3} is assignable to interface Point {x; y} because…', bn: 'সরল অবজেক্ট {x:1, y:2, z:3} interface Point {x; y}-তে অ্যাসাইনযোগ্য কারণ…' },
      options: [
        { en: 'TypeScript ignores z entirely', bn: 'TypeScript z পুরো উপেক্ষা করে' },
        { en: 'Structural typing: required members present ⇒ shape fits; origin and extras are irrelevant for variables', bn: 'স্ট্রাকচারাল টাইপিং: প্রয়োজনীয় সদস্য উপস্থিত ⇒ আকৃতি মানে; উৎস ও অতিরিক্ত অপ্রাসঙ্গিক (ভেরিয়েবলে)' },
        { en: 'It is not assignable', bn: 'অ্যাসাইনযোগ্য নয়' },
      ],
      answer: 1,
      hint: { en: 'Fresh LITERALS get excess-property checks; variables travel lighter.', bn: 'তাজা লিটারেল পায় অতিরিক্ত-প্রপার্টি পরীক্ষা; ভেরিয়েবল হালকা ভ্রমণ করে।' },
      explanation: { en: 'Shape-fit, not name-fit. The literal form would have failed — same value, different rule.', bn: 'আকৃতি-মিল, নাম-মিল নয়। লিটারেল-রূপ ব্যর্থ হতো — একই মান, ভিন্ন নিয়ম।' },
    },
    {
      id: 'ts-think-ex3',
      kind: 'mcq',
      topic: 'any-vs-unknown',
      question: { en: 'For untrusted JSON.parse results the honest annotation is…', bn: 'অবিশ্বস্ত JSON.parse ফলাফলের সৎ অ্যালানোটেশন…' },
      options: [
        { en: 'any — who knows what it is', bn: 'any — কে জানে এটা কী' },
        { en: 'unknown — forces narrowing/validation before use, auditor stays on duty', bn: 'unknown — ব্যবহারের আগে ন্যারোইং/ভ্যালিডেশন বাধ্য করে, নিরীক্ষক দায়িত্বে থাকে' },
        { en: 'Object', bn: 'Object' },
      ],
      answer: 1,
      hint: { en: 'any switches the checker off; unknown keeps it on with a demand note.', bn: 'any যাচাই বন্ধ করে; unknown চালু রাখে দাবি-পত্রসহ।' },
      explanation: { en: 'unknown is any disciplined: same inscrutability, mandatory proof at the door.', bn: 'unknown হলো শৃঙ্খলিত any: একই অনুসন্ধান-অযোগ্যতা, দরজায় বাধ্যতামূলক প্রমাণ।' },
    },
    {
      id: 'ts-think-ex4',
      kind: 'fill',
      topic: 'erasure',
      question: { en: 'The one-word name for what happens to all type information at build time: type ____', bn: 'বিল্ড-কালে সব টাইপ-তথ্যের কী হয় তার এক-শব্দের নাম: type ____' },
      answer: 'erasure',
      accept: ['erasure', 'Erasure'],
      hint: { en: 'The shipped JS carries zero type bytes.', bn: 'পাঠানো JS বহন করে শূন্য টাইপ-বাইট।' },
      explanation: { en: 'Types verify, then vanish. Runtime protection must be rebuilt deliberately (validation), not assumed.',
        bn: 'টাইপ যাচাই করে, তারপর মিলেয় যায়। রানটাইম-সুরক্ষা গড়তে হয় ইচ্ছাকৃতভাবে (ভ্যালিডেশন), ধরে নেওয়া চলে না।' },
      solution: 'erasure',
    },
  ],
  quiz: {
    id: 'ts-think-quiz',
    title: { en: 'Quiz: the ledger', bn: 'কুইজ: খাতাটি' },
    questions: [
      {
        id: 'ts-think-q1',
        kind: 'mcq',
        topic: 'model',
        question: { en: 'At runtime, how much type information does compiled TS code carry?', bn: 'রানটাইমে কম্পাইল করা TS কোড কতটুকু টাইপ-তথ্য বহন করে?' },
        options: [
          { en: 'All of it, for safety', bn: 'সবই, নিরাপত্তার জন্য' },
          { en: 'None — types verify at compile time and are fully erased', bn: 'কিছুই নয় — টাইপ কম্পাইল-কালে যাচাই হয়ে পুরো মুছে যায়' },
          { en: 'Only function signatures', bn: 'কেবল ফাংশন-স্বাক্ষর' },
        ],
        answer: 1,
        hint: { en: 'Erasure is the feature, not the bug: zero runtime cost is the product.', bn: 'ইরেজার বাগ নয়, ফিচার: শূন্য রানটাইম-খরচ-ই পণ্য।' },
        explanation: { en: 'This is why runtime boundaries still need validation — nobody home to enforce.', bn: 'এজন্যই রানটাইম-সীমানায় ভ্যালিডেশন লাগেই — বলবৎ করার কেউ ঘরে নেই।' },
      },
      {
        id: 'ts-think-q2',
        kind: 'predict',
        topic: 'flow',
        question: { en: 'let id: string | number = 7; — after this line TS believes id is…', bn: 'let id: string | number = 7; — এই লাইনের পরে TS বিশ্বাস করে id…' },
        options: [
          { en: 'number (the value)', bn: 'number (মানটা)' },
          { en: 'string | number (the annotation sets the belief ceiling; assignments may later narrow)', bn: 'string | number (অ্যালানোটেশনই বিশ্বাসের সিলিং; অ্যাসাইনমেন্ট পরে সঙ্কুচিত করতে পারে)' },
          { en: '7', bn: '7' },
        ],
        answer: 1,
        hint: { en: 'Annotations override inference — the union is the contract, the value is a tenant.', bn: 'অ্যালানোটেশন অনুমানকে জেতে — ইউনিয়ন চুক্তি, মান ভাড়াটে।' },
        explanation: { en: 'The declared type is the ceiling; flow analysis can narrow below it but never widen past it.', bn: 'ঘোষিত টাইপ সিলিং; ফ্লো-বিশ্লেষণ তার নিচে সঙ্কুচিত করতে পারে, ওপরে প্রসারিত কখনো না।' },
      },
      {
        id: 'ts-think-q3',
        kind: 'mcq',
        topic: 'structural',
        question: { en: 'TypeScript checks assignability by…', bn: 'TypeScript অ্যাসাইনেবিলিটি যাচাই করে…' },
        options: [
          { en: 'Class names and explicit implements clauses', bn: 'ক্লাস-নাম আর স্পষ্ট implements ক্লজে' },
          { en: 'Structural comparison of required members (shape), not nominal identity', bn: 'প্রয়োজনীয় সদস্যের স্ট্রাকচারাল তুলনায় (আকৃতি), নামিনাল পরিচয় নয়' },
          { en: 'Runtime property probing', bn: 'রানটাইম প্রপার্টি-পরখে' },
        ],
        answer: 1,
        hint: { en: 'Ducks typing, formalized. If it has x and y, it is a Point.', bn: 'রীতিমতো প্রতিষ্ঠিত ডাক-টাইপিং। x আর y থাকলে সে-ই Point।' },
        explanation: { en: 'No interface registration needed; two independently-defined shapes with the same members are interchangeable.', bn: 'ইন্টারফেস-নিবন্ধন লাগে না; স্বাধীনভাবে সংজ্ঞায়িত সমসদস্য দুই আকৃতি পরস্পর-বিনিমেয়।' },
      },
      {
        id: 'ts-think-q4',
        kind: 'mcq',
        topic: 'never',
        question: { en: 'TS reports variable is of type never. The most productive response is…', bn: 'TS জানায় ভেরিয়েবল never টাইপের। সবচেয়ে ফলপ্রসূ সাড়া…' },
        options: [
          { en: 'Cast with as to silence it', bn: 'as দিয়ে চাপা দিন' },
          { en: 'Trust the ledger: some branch consumed every possibility — find and fix the narrowing that emptied the set', bn: 'খাতা বিশ্বাস করুন: কোনো শাখা সব সম্ভাবনা শেষ করেছে — সেট খালি করা ন্যারোইং খুঁজে ঠিক করুন' },
          { en: 'Change it to any', bn: 'any করে দিন' },
        ],
        answer: 1,
        hint: { en: 'never is the empty belief set — a proof that control flow excluded everything.', bn: 'never হলো শূন্য বিশ্বাস-সেট — প্রমাণ যে কন্ট্রোল-ফ্লো সবকিছু বাদ দিয়েছে।' },
        explanation: { en: 'Casts silence witnesses; any fires the auditor. The set got empty for a reason; find it.', bn: 'কাস্ট সাক্ষী চুপ করায়; any নিরীক্ষক বরখাস্ত করে। সেট কোনো কারণে খালি হয়েছে; খুঁজুন।' },
      },
    ],
  },
  next: { slug: 'narrowing-generics', title: { en: 'Narrowing & Generics', bn: 'ন্যারোইং ও জেনেরিক' } },
};
