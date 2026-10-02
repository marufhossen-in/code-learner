import type { Hub } from '../../lib/types';
import { typeThinkingLesson } from './lessons/type-thinking';
import { narrowingGenericsLesson } from './lessons/narrowing-generics';
import { typeFoundryLesson } from './lessons/the-type-foundry';
import { tighteningBenchLesson } from './lessons/the-tightening-bench';
import { domInventoryLesson } from './lessons/the-dom-inventory';
import { networkingGuardLesson } from './lessons/the-networking-guard';
import { frameworkBondLesson } from './lessons/the-framework-bond';
import { migrationLadderLesson } from './lessons/the-migration-ladder';
import { invariantCourtLesson } from './lessons/the-invariant-court';

export const tsHub: Hub = {
  slug: 'typescript',
  name: 'TypeScript',
  icon: '🔷',
  tagline: {
    en: 'JavaScript with a compile-time belief system: types verify, then erase — and in between the compiler becomes your refactoring assistant, state guard and auditor.',
    bn: 'জাভাস্ক্রিপ্ট, সঙ্গে কম্পাইল-টাইম বিশ্বাস-ব্যবস্থা: টাইপ যাচাই করে, তারপর মিলেয় যায় — আর মাঝখানে কম্পাইলার হয়ে ওঠে আপনার রিফ্যাক্টরিং-সহকারী, অবস্থা-প্রহরী ও নিরীক্ষক।',
  },
  about: {
    en: 'TypeScript adds zero bytes to your JavaScript and moves entire bug classes from production into your editor. The catch that makes everything else click: a type is not runtime armor — it is a compile-time belief set that the compiler audits at every line, then fully erases before a single byte ships. This hub teaches the ledger model until “possibly undefined” stops being noise and becomes a set member you failed to drain: structural typing (shape over name), inference rules (const takes literals, let widens, annotations override), narrowing as set algebra at every guard, discriminated unions that make illegal UI states unrepresentable, and generics as type-level functions whose constraints are two-way contracts. Every lesson runs inside the Type Lab, where you step code line by line and watch belief sets split at guards, narrow in branches, merge back, and bottom out on never when a switch forgets a case. The result is the jump from “red squiggles annoy me” to “the compiler proves my states are handled and my refactors are safe”.',
    bn: 'TypeScript আপনার জাভাস্ক্রিপ্টে শূন্য বাইট যোগ করে, অথচ পুরো বাগ-শ্রেণি প্রোডাকশন থেকে সরিয়ে দেয় আপনার এডিটরে। বাকি সব ক্লিক করানো মূল কথা: টাইপ রানটাইম-ঝিলমিল নয় — এটি কম্পাইল-টাইম বিশ্বাস-সেট, যা কম্পাইলার প্রতি লাইনে নিরীক্ষণ করে, তারপর এক বাইট পাঠানোর আগে পুরো মুছে দেয়। এই হাব খাতা-মডেল এতই শেখায় যে “possibly undefined” শব্দ-কোলাহল থেকে বেরিয়ে হয়ে যায় সেটের একটি সদস্য, যা আপনি বের করে দিতে ভুলে গেছেন: স্ট্রাকচারাল টাইপিং (নামের বদলে আকৃতি), অনুমানের নিয়ম (const লিটারেল নেয়, let প্রসারিত হয়, অ্যালানোটেশন জেতে), প্রতি গার্ডে সেট-বীজগণিত হিসেবে ন্যারোইং, অবৈধ UI-অবস্থা অপ্রকাশযোগ্য করা ডিসক্রিমিনেটেড ইউনিয়ন, আর টাইপ-স্তরের ফাংশন হিসেবে জেনেরিক — যার কনস্ট্রেইন্ট দ্বিমুখী চুক্তি। প্রতি লেসন চলে Type Lab-এর ভেতর — লাইন ধরে কোড স্টেপ করে দেখুন বিশ্বাস-সেট গার্ডে ভাগ হচ্ছে, শাখায় সঙ্কুচিত হচ্ছে, ফিরে মিশছে, আর switch কেস ভুললে never-এ ধসছে। ফল হলো “লাল-দাগ বিরক্ত করে” থেকে “কম্পাইলার প্রমাণ করে আমার অবস্থাগুলো সামলানো আর রিফ্যাক্টর নিরাপদ”-এর লাফ।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Beliefs & the ledger', bn: 'ধাপ ১ — বিশ্বাস আর খাতা' },
      items: [
        { en: 'Type erasure: verify at compile, vanish before runtime (lesson 1)', bn: 'টাইপ ইরেজার: কম্পাইলে যাচাই, রানটাইমের আগে উধাও (লেসন ১)' },
        { en: 'Structural typing: shape over name; excess checks on fresh literals', bn: 'স্ট্রাকচারাল টাইপিং: নামের বদলে আকৃতি; তাজা লিটারেলে অতিরিক্ত-যাচাই' },
        { en: 'Inference rules: const → literal, let → widened, annotations win', bn: 'অনুমানের নিয়ম: const → লিটারেল, let → প্রসারিত, অ্যালানোটেশন জেতে' },
        { en: 'unknown over any: keep the auditor on duty', bn: 'any-র বদলে unknown: নিরীক্ষককে দায়িত্বে রাখুন' },
      ],
    },
    {
      title: { en: 'Stage 2 — Unions as state machines', bn: 'ধাপ ২ — স্টেট-মেশিন হিসেবে ইউনিয়ন' },
      items: [
        { en: 'Union types of literals, one variant per UI state (lesson 2)', bn: 'লিটারেলের ইউনিয়ন টাইপ, প্রতি UI-অবস্থায় একটি ভ্যারিয়েন্ট (লেসন ২)' },
        { en: 'Discriminators: one literal tag field for clean partitioning', bn: 'ডিসক্রিমিনেটর: পরিষ্কার বিভাজনের একটি লিটারেল ট্যাগ ফিল্ড' },
        { en: 'Flow narrowing: typeof, in, instanceof, equality, truthiness', bn: 'ফ্লো-ন্যারোইং: typeof, in, instanceof, সমতা, ট্রুদিনেস' },
        { en: 'assertNever: defaults that prove exhaustiveness at compile time', bn: 'assertNever: কম্পাইল-কালে সম্পূর্ণতা প্রমাণকারী ডিফল্ট' },
      ],
    },
    {
      title: { en: 'Stage 3 — Generics: type-level functions', bn: 'ধাপ ৩ — জেনেরিক: টাইপ-স্তরের ফাংশন' },
      items: [
        { en: 'Type parameters bound per call site, then checked concretely (lesson 2)', bn: 'টাইপ-প্যারামিটার কল-সাইটপ্রতি বাঁধা, তারপর কংক্রিটভাবে যাচাইকৃত (লেসন ২)' },
        { en: 'Constraints with extends: the budget the body may spend', bn: 'extends কনস্ট্রেইন্ট: বডির খরচের বাজেট' },
        { en: 'keyof, typeof, indexed access for derived contracts', bn: 'উৎপাদিত চুক্তির জন্য keyof, typeof, ইনডেক্সড-অ্যাক্সেস' },
        { en: 'Utility vocabulary: Partial, Pick, Omit, Record, ReturnType', bn: 'ইউটিলিটি শব্দভাণ্ডার: Partial, Pick, Omit, Record, ReturnType' },
      ],
    },
    {
      title: { en: 'Stage 4 — Project-grade TypeScript', bn: 'ধাপ ৪ — প্রজেক্ট-মানের TypeScript' },
      items: [
        { en: 'strict family: strictNullChecks day one, noUncheckedIndexedAccess soon after', bn: 'strict পরিবার: প্রথম দিনে strictNullChecks, ফটাফট noUncheckedIndexedAccess' },
        { en: '.d.ts files and DefinitelyTyped: ledgers for the untyped wild', bn: '.d.ts ফাইল ও DefinitelyTyped: টাইপহীন বনজঙ্গলের খাতা' },
        { en: 'Mapped, conditional and template-literal types', bn: 'ম্যাপড, কন্ডিশনাল ও টেমপ্লেট-লিটারেল টাইপ' },
        { en: 'zod-style bridges: one schema, both the runtime check and the type', bn: 'zod-রীতির সেতু: এক স্কিমা — রানটাইম-যাচাই ও টাইপ দুটোই' },
      ],
    },
  ],
  lessons: [typeThinkingLesson, narrowingGenericsLesson, typeFoundryLesson, tighteningBenchLesson, domInventoryLesson, networkingGuardLesson, frameworkBondLesson, migrationLadderLesson, invariantCourtLesson],
  reference: [
    {
      group: 'Shape contracts',
      methods: [
        {
          name: 'interface / type',
          signature: 'interface User { id: string }  |  type Id = string | number',
          params: { en: 'Two spellings of shape contracts; interfaces extend and merge, aliases compose with unions and utilities.', bn: 'আকৃতি-চুক্তির দুই রীতি; ইন্টারফেস extend ও merge করে, অ্যালিয়াস বানায় ইউনিয়ন ও ইউটিলিটি দিয়ে।' },
          returns: { en: 'A named belief the compiler enforces structurally — shape fit, never name fit.', bn: 'নামযুক্ত বিশ্বাস যা কম্পাইলার বলবৎ করে স্ট্রাকচারালি — আকৃতি-মিল, নাম-মিল নয়।' },
          example: 'interface Point { x: number; y: number }',
        },
        {
          name: 'Narrowing guards',
          signature: "typeof x === 'string'  |  x instanceof C  |  'k' in x  |  Array.isArray(x)",
          params: { en: 'Set operations on the belief ledger at branch points — each guard partitions possibilities into two columns.', bn: 'শাখা-বিন্দুতে বিশ্বাস-খাতায় সেট-অপারেশন — প্রতি গার্ড সম্ভাবনা ভাগ করে দুই কলামে।' },
          returns: { en: 'Provably safe member access inside each branch; the squiggle flips to clean.', bn: 'প্রতি শাখায় প্রমাণযোগ্য নিরাপদ সদস্য-অ্যাক্সেস; লাল-দাগ পরিষ্কারে পাল্টায়।' },
          example: "if (typeof v === 'string') v.trim();",
        },
        {
          name: 'any / unknown / never',
          signature: 'let x: unknown  |  catch (e)  |  assertNever(x: never)',
          params: { en: 'any fires the auditor; unknown keeps it on with a toll (narrow first); never is the empty set — the exhaustiveness alarm.', bn: 'any নিরীক্ষক বরখাস্ত করে; unknown টোলসহ সক্রিয় রাখে (আগে ন্যারো); never শূন্য সেট — সম্পূর্ণতা-অ্যালার্ম।' },
          returns: { en: 'Discipline written into the type itself, not into team folklore.', bn: 'শৃঙ্খলা লেখা টাইপেই, দলগত কিংসদন্তিতে নয়।' },
          example: 'const data: unknown = JSON.parse(raw);',
        },
      ],
    },
    {
      group: 'Generics & utilities',
      methods: [
        {
          name: 'Generic parameters',
          signature: 'function f<T extends Shape>(x: T): T',
          params: { en: 'A type-level variable bound per call site; extends declares the minimum the caller owes and the maximum the body may use.', bn: 'টাইপ-স্তরের ভেরিয়েবল কল-সাইটপ্রতি বাঁধা; extends ঘোষণা করে কলারের ন্যূনতম ঋণ ও বডির সর্বোচ্চ ব্যবহার।' },
          returns: { en: 'One audited signature serving a thousand shapes — zero any required.', bn: 'একটি নিরীক্ষিত স্বাক্ষর হাজার আকৃতির সেবায় — any লাগেই না।' },
          example: 'function last<T>(xs: T[]): T | undefined { return xs[xs.length - 1]; }',
        },
        {
          name: 'Partial / Pick / Record',
          signature: "Partial<User>  |  Pick<User, 'id'>  |  Record<K, V>",
          params: { en: 'Derive public views from one source model: everything optional, only these keys, or a keyed dictionary.', bn: 'একটি সোর্স-মডেল থেকে উৎপাদিত পাবলিক ভিউ: সব ঐচ্ছিক, কেবল এই চাবি, বা চাবি-ভিত্তিক ডিকশনারি।' },
          returns: { en: 'Derivations that update themselves when the source model changes.', bn: 'এমন উৎপাদন যা সোর্স-মডেল বদলালে নিজেই হালনাগাদ হয়।' },
          example: "type Preview = Pick<Post, 'slug' | 'title'>;",
        },
        {
          name: 'ReturnType / Awaited / Parameters',
          signature: 'Awaited<ReturnType<typeof fetchUser>>',
          params: { en: 'Interrogate functions instead of re-declaring their shapes — one declaration feeds many derivations.', bn: 'ফাংশনের আকৃতি পুনর্ঘোষণা নয়, জিজ্ঞেস করুন — একটি ঘোষণা খাওয়ায় অনেক উৎপাদন।' },
          returns: { en: 'Types that can never drift from the code they describe.', bn: 'এমন টাইপ যা তার বর্ণিত কোড থেকে কখনো সরে যেতে পারে না।' },
          example: 'type R = Awaited<ReturnType<typeof fetchUser>>;',
        },
      ],
    },
    {
      group: 'Strictness & interop',
      methods: [
        {
          name: 'strict flags',
          signature: '"strict": true  +  "noUncheckedIndexedAccess": true',
          params: { en: 'strictNullChecks makes undefined a living set member you must drain; index-access honesty admits arrays can be empty.', bn: 'strictNullChecks undefined-কে বানায় জীবিত সেট-সদস্য, বের করতেই হবে; ইনডেক্স-অ্যাক্সেস-সততা স্বীকার করে অ্যারে খালি হতে পারে।' },
          returns: { en: 'The full auditor: the entire promise of TypeScript, on day one.', bn: 'পূর্ণ নিরীক্ষক: TypeScript-এর পুরো প্রতিশ্রুতি, প্রথম দিন থেকেই।' },
          example: 'const head = ids[0];  // string | undefined — সৎভাবে',
        },
        {
          name: 'satisfies',
          signature: 'const cfg = {…} satisfies Config',
          params: { en: 'Prove a literal fits a contract WITHOUT widening it — precise inference and constraint checking at once.', bn: 'প্রমাণ করুন লিটারেল চুক্তিতে বসে — প্রসারিত না করেই — একসঙ্গে নিখুঁত অনুমান ও সীমা-যাচাই।' },
          returns: { en: 'The literal keeps its own type AND the contract is verified.', bn: 'লিটারেল রাখে নিজের টাইপ, আর চুক্তি যাচাইও হয়।' },
          example: "const routes = { home: '/', about: '/about' } satisfies Record<string, string>;",
        },
        {
          name: 'Declaration files',
          signature: 'declare module "legacy-lib" { … }  |  /// <reference types="node" />',
          params: { en: 'Belief ledgers written for the untyped wild — DefinitelyTyped covers thousands of libraries.', bn: 'টাইপহীন বনজঙ্গলের জন্য লেখা বিশ্বাস-খাতা — DefinitelyTyped হাজারো লাইব্রেরি ঢেকে।' },
          returns: { en: 'Type safety with zero runtime bytes over third-party JavaScript.', bn: 'তৃতীয়-পক্ষ জাভাস্ক্রিপ্টের ওপর শূন্য রানটাইম-বাইটে টাইপ-নিরাপত্তা।' },
          example: 'npm i -D @types/express',
        },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'Strictify a JS Module', bn: 'JS-মডিউল strict করান' },
      diff: 'beginner',
      desc: {
        en: 'Take a runnable JavaScript utility module, rename it .ts, enable strict, and migrate it to zero any — one commit per error class conquered. Deliverable: the diff and your ledger reading of each squiggle (belief set, missing guard, wrong contract).',
        bn: 'চলমান একটি জাভাস্ক্রিপ্ট ইউটিলিটি-মডিউল নিন, নাম বদলে .ts করুন, strict চালু করুন, আর শূন্য any-তে মাইগ্রেট করুন — জয় করা প্রতি এরর-শ্রেণিতে একটি কমিট। ডেলিভারেবল: diff আর প্রতি লাল-দাগের আপনার খাতা-পাঠ (বিশ্বাস-সেট, অনুপস্থিত গার্ড, ভুল চুক্তি)।',
      },
    },
    {
      title: { en: 'Fetch-State Machine Library', bn: 'ফেচ-স্টেট-মেশিন লাইব্রেরি' },
      diff: 'intermediate',
      desc: {
        en: 'Build FetchState<T> as a four-variant discriminated union with pure transition functions (start, succeed, fail, reset) and a render helper whose assertNever default proves every state handled. Then add a fifth variant (retrying) and let the compile errors locate every forgotten switch.',
        bn: 'FetchState<T> বানান চার-ভ্যারিয়েন্ট ডিসক্রিমিনেটেড ইউনিয়নে, খাঁটি ট্রানজিশন-ফাংশনসহ (start, succeed, fail, reset) আর render হেল্পার যার assertNever ডিফল্ট প্রমাণ করে প্রতি অবস্থা সামলানো। তারপর পঞ্চম ভ্যারিয়েন্ট (retrying) যোগ করুন আর কম্পাইল-এরর দিয়ে খুঁজে নিন প্রতি ভুলে-যাওয়া switch।',
      },
    },
    {
      title: { en: 'Runtime↔Type Bridge', bn: 'রানটাইম↔টাইপ সেতু' },
      diff: 'advanced',
      desc: {
        en: 'Build a mini-validator in 100 lines: primitive schemas (string(), number(), boolean()), an object() combinator accumulating a mapped type, and an Infer<S> utility extracting the static type any schema manufactures. Stretch: .optional() adds a K?: hole automatically.',
        bn: '১০০ লাইনে মিনি-ভ্যালিডেটর বানান: প্রিমিটিভ স্কিমা (string(), number(), boolean()), object() কম্বিনেটর — ম্যাপড-টাইপ জমা করে, আর Infer<S> ইউটিলিটি — যেকোনো স্কিমার নির্মিত স্ট্যাটিক টাইপ বের করে। স্ট্রেচ: .optional() স্বয়ংক্রিয় K?: ফাঁক যোগ করে।',
      },
    },
  ],
  bestPractices: [
    { en: 'any is a resignation letter — quarantine it behind a TODO with a reason and an expiry date.', bn: 'any হলো পদত্যাগপত্র — কারণ ও মেয়াদসহ TODO-র আড়ালে কোয়ারেন্টাইন করুন।' },
    { en: 'Annotate at boundaries, infer inside: signatures and API contracts declared, local values left to inference.', bn: 'সীমানায় অ্যালানোটেট করুন, ভেতরে অনুমানে ছাড়ুন: স্বাক্ষর ও API-চুক্তি ঘোষিত, স্থানীয় মান অনুমানের হাতে।' },
    { en: 'Model state as unions, never as boolean flags — three flags is eight states; your UI has four.', bn: 'অবস্থা মডেল করুন ইউনিয়নে, বুলিয়ান-ফ্ল্যাগে কখনো নয় — তিন ফ্ল্যাগে আট অবস্থা; আপনার UI-তে চার।' },
    { en: 'Exhaust every switch with assertNever — teammates adding states should break compilation, not production.', bn: 'assertNever দিয়ে প্রতি switch সম্পূর্ণ করুন — অবস্থা যোগ করা সতীর্থের ভাঙা উচিত কম্পাইলেশন, প্রোডাকশন নয়।' },
    { en: 'Budget your generics: the constraint is a two-way contract — callers must supply it, bodies must not exceed it.', bn: 'জেনেরিকে বাজেট দিন: কনস্ট্রেইন্ট দ্বিমুখী চুক্তি — কলারকে তা দিতেই হবে, বডি তা ছাড়তে পারে না।' },
    { en: 'Validate the wire, trust the room: after one boundary validation, the interior may trust the ledger.', bn: 'তার যাচাই করুন, ঘর বিশ্বাস করুন: সীমানায় এক ভ্যালিডেশনের পর ভেতরখানা খাতা বিশ্বাস করতে পারে।' },
  ],
  interview: [
    {
      q: { en: 'What happens to TypeScript types at runtime?', bn: 'রানটাইমে TypeScript টাইপের কী হয়?' },
      a: {
        en: 'Nothing — erasure. Types verify during compilation, then are fully deleted; the emitted JavaScript is indistinguishable from hand-written JS and pays zero type cost. This is exactly why API boundaries still need runtime validation: there is nobody home at runtime to enforce a contract the compiler already burned.',
        bn: 'কিছুই নয় — ইরেজার। টাইপ কম্পাইলেশনে যাচাই হয়ে পুরো মুছে যায়; নির্গত জাভাস্ক্রিপ্ট হাতে-লেখার থেকে আলাদা করা যায় না আর শূন্য টাইপ-খরচ বহন করে। এজন্যই API-সীমানায় রানটাইম-ভ্যালিডেশন লাগেই: রানটাইমে বাড়িতে কেউ নেই চুক্তি বলবৎ করার — কম্পাইলার তা পুড়িয়েই ফেলেছে।',
      },
    },
    {
      q: { en: 'Structural vs nominal typing — which is TypeScript?', bn: 'স্ট্রাকচারাল বনাম নামিনাল টাইপিং — TypeScript কোনটি?' },
      a: {
        en: 'Structural. A value fits a type when its shape carries the required members — class name, origin and extra fields are irrelevant (fresh literals get bonus excess-property checks as a typo net). Nominal systems (Java/C#) count only declared relationships. TS is structural with tiny nominal wrinkles, e.g. classes carrying private members.',
        bn: 'স্ট্রাকচারাল। আকৃতিতে প্রয়োজনীয় সদস্য থাকলেই মান টাইপে বসে — ক্লাস-নাম, উৎস, অতিরিক্ত ফিল্ড অপ্রাসঙ্গিক (তাজা লিটারেল বোনাস পায় অতিরিক্ত-প্রপার্টি যাচাই, বানান-জাল হিসেবে)। নামিনাল ব্যবস্থায় (Java/C#) গণ্য কেবল ঘোষিত সম্পর্ক। TS স্ট্রাকচারাল — ক্ষুদ্র নামিনাল ভাঁজসহ, যেমন private-সদস্যবাহী ক্লাস।',
      },
    },
    {
      q: { en: 'unknown vs any — when which?', bn: 'unknown বনাম any — কখন কোনটা?' },
      a: {
        en: 'Both can hold anything. any switches the checker off — every operation legal, the audit refunded silently wherever the value flows. unknown keeps the checker on with a toll: narrow first, operate after. Rule: untrusted input (JSON.parse, fetch, catch) is unknown; any exists only inside a quarantined migration TODO.',
        bn: 'দুটোই যা-ই ধরতে পারে। any যাচাই বন্ধ করে দেয় — সব অপারেশন বৈধ, মান যেখানেই যায় সেখানেই নীরবে নিরীক্ষণ ফেরত। unknown যাচাই চালু রাখে টোলসহ: আগে ন্যারো, পরে অপারেট। নিয়ম: অবিশ্বস্ত ইনপুট (JSON.parse, fetch, catch) হলো unknown; any টিকে কেবল কোয়ারেন্টাইন করা মাইগ্রেশন-TODO-র ভেতর।',
      },
    },
    {
      q: { en: 'How do you make the compiler prove a switch is exhaustive?', bn: 'কম্পাইলার দিয়ে switch সম্পূর্ণ প্রমাণ করান কীভাবে?' },
      a: {
        en: 'Put default: assertNever(state) where assertNever(x: never): never throws. Exhaustive cases drain the belief set member by member, so default receives never and compiles. The day the union gains a variant, default receives a non-never — compilation fails at every forgotten switch, converting “did anyone remember?” into “it must compile”.',
        bn: 'দিন default: assertNever(state), যেখানে assertNever(x: never): never throw করে। সম্পূর্ণ কেস বিশ্বাস-সেট সদস্য-ধরে-সদস্য খালি করে — তাই default পায় never আর কম্পাইল হয়। ইউনিয়নে নতুন ভ্যারিয়েন্ট আসার দিনে default পায় অ-never — ভুলে-যাওয়া প্রতি switch-এ কম্পাইলেশন ব্যর্থ হয়: “কেউ কি মনে করেছিল?” বদলে যায় “কম্পাইল হতেই হবে”-তে।',
      },
    },
  ],
  realWorld: [
    { en: 'React Query, SWR and most hand-rolled data hooks are FetchState<T> in production costume — one union vocabulary for spinners, skeletons and error banners that the compiler itself audits.', bn: 'React Query, SWR আর হাতে-বানানো বেশিরভাগ ডেটা-হুক প্রোডাকশন-পোশাকে FetchState<T>-ই — স্পিনার, স্কেলেটন ও এরর-ব্যানারের এক ইউনিয়ন-শব্দভাণ্ডা, নিরীক্ষক স্বয়ং কম্পাইলার।' },
    { en: 'Rename a field in one model and strict mode walks every call site with a red squiggle — the ledger serving as a free refactoring assistant across million-line monorepos.', bn: 'একটি মডেলে ফিল্ডের নাম বদলান আর strict-মোড প্রতি কল-সাইটে লাল-দাগ টেনে হেঁটে আসে — মিলিয়ন-লাইনের মনোরেপোজুড়ে বিনামূল্যের রিফ্যাক্টরিং-সহকারী হিসেবে খাতা।' },
    { en: 'zod and valibot close the erasure gap this hub teaches: one schema manufactures both the runtime check and the static type — validation and verification from a single source.', bn: 'zod ও valibot এই হাবের শেখানো ইরেজার-ফাঁক বন্ধ করে: একটি স্কিমা নির্মাণ করে রানটাইম-যাচাই ও স্ট্যাটিক টাইপ দুটোই — এক উৎসে ভ্যালিডেশন ও যাচাই।' },
    { en: 'CodeShikhon itself is strict-TS end to end: Block discriminated unions drive every renderer, and noUnusedLocals plus noFallthroughCasesInSwitch keep the ledger guarding its own teachers.', bn: 'কোডশিখন নিজেই প্রান্ত-থেকে-প্রান্ত strict-TS: Block ডিসক্রিমিনেটেড-ইউনিয়ন প্রতি রেন্ডারার চালায়, আর noUnusedLocals ও noFallthroughCasesInSwitch খাতা রাখে নিজের শিক্ষকদেরও পাহারায়।' },
  ],
};
