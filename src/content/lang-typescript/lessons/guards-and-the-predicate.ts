import type { Lesson } from '../../../lib/types';

export const GuardsAndThePredicateLesson: Lesson = {
  slug: 'guards-and-the-predicate',
  tech: 'lang-typescript',
  title: {
    en: 'Type Guards and Predicates — Custom Narrowing and Assertion Functions',
    bn: 'টাইপ গার্ড ও প্রেডিকেট — কাস্টম ন্যারোয়িং ও অ্যাসারশন ফাংশন',
  },
  summary: {
    en: 'Master user-defined type predicates (arg is Type), assertion functions (asserts val is Type), and the satisfies operator to safely narrow unknown runtime values without resorting to dangerous manual type casts.',
    bn: 'ইউজার-ডিফাইন্ড টাইপ প্রেডিকেট (arg is Type), অ্যাসারশন ফাংশন (asserts val is Type) এবং satisfies অপারেটর আয়ত্ত করুন যাতে বিপজ্জনক ম্যানুয়াল টাইপ কাস্টিং ছাড়াই অজানা রানটাইম ডেটাকে নিরাপদে সুনির্দিষ্ট করা যায়।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Custom type predicates for complex runtime data', bn: 'WHAT — জটিল রানটাইম ডেটার জন্য কাস্টম টাইপ প্রেডিকেট' },
    },
    {
      type: 'para',
      text: {
        en: 'When your application receives unstructured external payloads like JSON over HTTP or database records, basic typeof checks are often insufficient to validate complex nested shapes. TypeScript allows you to define custom type predicates using the signature parameterName is TargetType. When your validator function returns true, the TypeScript compiler automatically narrows the tested variable to the target type across downstream conditional branches, delivering runtime verification and compile-time certainty in a single call.',
        bn: 'যখন আপনার অ্যাপ্লিকেশন এইচটিটিপি দিয়ে জেসন বা ডাটাবেস থেকে জটিল বাহ্যিক ডেটা গ্রহণ করে, তখন সাধারণ typeof চেক জটিল অবজেক্ট ভ্যালিডেশনের জন্য যথেষ্ট হয় না। টাইপস্ক্রিপ্ট আপনাকে parameterName is TargetType সিগনেচার ব্যবহার করে কাস্টম টাইপ প্রেডিকেট লেখার সুবিধা দেয়। যখন এই ভ্যালিডেটর ফাংশনটি true রিটার্ন করে, তখন টাইপস্ক্রিপ্ট কম্পাইলার স্বয়ংক্রিয়ভাবে পরবর্তী শর্তাধীন কোডে পরীক্ষিত ভেরিয়েবলটিকে নির্দিষ্ট টাইপে সংকুচিত করে, ফলে একক ফাংশন কলেই রানটাইম যাচাই ও কম্পাইল-টাইম নিরাপত্তা নিশ্চিত হয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Type predicate narrowing flow from unknown to validated interface', bn: 'অজানা ডেটা থেকে টাইপ প্রেডিকেট ন্যারোয়িং প্রবাহ' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="TypeScript type predicate flow">
<rect x="20" y="40" width="170" height="90" rx="8" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
<text x="105" y="65" text-anchor="middle" font-size="12" font-weight="800" fill="#334155">UNTRUSTED DATA</text>
<text x="35" y="90" font-family="monospace" font-size="11" fill="currentColor">const raw: unknown;</text>
<text x="35" y="110" font-size="10" fill="#64748b">No property access allowed</text>

<line x1="190" y1="85" x2="280" y2="85" stroke="#4f46e5" stroke-width="2"/>
<polygon points="280,80 295,85 280,90" fill="#4f46e5"/>

<rect x="300" y="30" width="180" height="110" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
<text x="390" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#854d0e">TYPE PREDICATE</text>
<text x="315" y="80" font-family="monospace" font-size="10" fill="currentColor">isUserPayload(data):</text>
<text x="315" y="100" font-family="monospace" font-size="10" fill="#2563eb">  data is UserPayload</text>
<text x="390" y="125" text-anchor="middle" font-size="10" fill="#854d0e">Runtime boolean audit</text>

<line x1="480" y1="85" x2="520" y2="85" stroke="#16a34a" stroke-width="2"/>
<text x="500" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#16a34a">true</text>

<rect x="525" y="40" width="105" height="90" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="577" y="65" text-anchor="middle" font-size="10" font-weight="800" fill="#166534">NARROWED</text>
<text x="535" y="90" font-family="monospace" font-size="10" fill="currentColor">.userId ✓</text>
<text x="535" y="110" font-family="monospace" font-size="10" fill="currentColor">.username ✓</text>

<rect x="120" y="165" width="400" height="50" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
<text x="320" y="185" text-anchor="middle" font-size="11" font-weight="700" fill="#1e40af">Satisfies operator: validate without widening literals</text>
<text x="320" y="202" text-anchor="middle" font-size="10" fill="#2563eb">const config = { mode: "dark" } satisfies ConfigSchema;</text>
</svg>`,
      caption: {
        en: 'The predicate function inspects raw untrusted data. When it returns true, the TypeScript compiler narrows the variable to UserPayload, granting safe access to its properties.',
        bn: 'প্রেডিকেট ফাংশনটি অবিশ্বস্ত কাঁচা ডেটা পরীক্ষা করে। এটি true রিটার্ন করলে টাইপস্ক্রিপ্ট কম্পাইলার ভেরিয়েবলটিকে UserPayload এ সংকুচিত করে এবং এর প্রপার্টিগুলোতে নিরাপদ অ্যাক্সেস দেয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Type predicate',
          def: {
            en: 'A special function return type in the form of arg is Type that instructs the compiler to narrow the argument variable if the function evaluates to true.',
            bn: 'arg is Type গঠনের একটি বিশেষ ফাংশন রিটার্ন টাইপ যা ফাংশনটি true রিটার্ন করলে কম্পাইলারকে ভেরিয়েবলটি সুনির্দিষ্ট টাইপে সংকুচিত করার নির্দেশ দেয়।',
          },
        },
        {
          term: 'Assertion function',
          def: {
            en: 'A function with a return type asserts condition or asserts val is Type that throws an error if validation fails, narrowing the variable for the rest of the current scope.',
            bn: 'asserts condition বা asserts val is Type রিটার্ন টাইপযুক্ত ফাংশন যা ভ্যালিডেশন ব্যর্থ হলে এরর ছুড়ে দেয় এবং সফল হলে বর্তমান স্কোপের বাকি অংশে ভেরিয়েবলটি সংকুচিত করে।',
          },
        },
        {
          term: 'satisfies operator',
          def: {
            en: 'A TypeScript operator that validates that an expression conforms to a type contract while preserving the most specific inferred literal type of the value.',
            bn: 'টাইপস্ক্রিপ্টের একটি অপারেটর যা কোনো এক্সপ্রেশন একটি টাইপ চুক্তি পূরণ করেছে কিনা তা যাচাই করে, অথচ মানের সবচেয়ে সুনির্দিষ্ট ইনফার্ড লিটারেল টাইপটি সংরক্ষণ করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Secure application boundaries against corrupt inputs', bn: 'কেন — বিকৃত ইনপুট থেকে অ্যাপ্লিকেশনের সীমানা রক্ষা করা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Protect system integrity: untrusted user input is validated before entering business critical service layers.', bn: 'সিস্টেমের নির্ভরযোগ্যতা রক্ষা: ব্যবসায়িক গুরুত্বপূর্ণ কোডে প্রবেশের আগেই অবিশ্বস্ত ব্যবহারকারী ইনপুট সঠিকভাবে যাচাই করা হয়।' },
        { en: 'Eliminate unsafe type assertions: prevent developers from masking runtime bugs by using unchecked as User casts.', bn: 'অনিরাপদ টাইপ অ্যাসারশন দূর করা: unchecked as User কাস্টিং দিয়ে রানটাইম বাগ লুকিয়ে রাখা রোধ করে।' },
        { en: 'Retain literal precision with satisfies: ensure configuration objects conform to schema without losing specific string literals.', bn: 'satisfies দিয়ে লিটারেল স্পষ্টতা ধরে রাখা: কনফিগারেশন অবজেক্ট স্কিমা মেনে চলছে কিনা নিশ্চিত করে লিটারেল টাইপ অক্ষুণ্ণ রাখা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Writing type predicates in 4 steps', bn: 'HOW — ৪টি ধাপে টাইপ প্রেডিকেট তৈরি' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Annotate return type', bn: '১. রিটার্ন টাইপ অ্যানোটেশন' }, text: { en: 'Specify arg is TargetType as the explicit function return type.', bn: 'ফাংশনের স্পষ্ট রিটার্ন টাইপ হিসেবে arg is TargetType উল্লেখ করুন।' } },
        { title: { en: '2. Audit object shape', bn: '২. অবজেক্ট কাঠামো পরীক্ষা' }, text: { en: 'Verify that value is non-null and matches typeof === "object".', bn: 'মানটি নন-নাল এবং typeof === "object" কিনা তা প্রথমে নিশ্চিত করুন।' } },
        { title: { en: '3. Verify nested properties', bn: '৩. প্রপার্টি টাইপ যাচাই' }, text: { en: 'Check that every required field possesses its expected primitive type.', bn: 'প্রতিটি আবশ্যক ফিল্ড প্রত্যাশিত প্রিমিটিভ টাইপ ধারণ করছে কিনা পরীক্ষা করুন।' } },
        { title: { en: '4. Branch conditionally', bn: '৪. শর্তাধীন ব্রাঞ্চিং' }, text: { en: 'Use if (isType(v)) to trigger automatic compiler type narrowing.', bn: 'স্বয়ংক্রিয় কম্পাইলার টাইপ ন্যারোয়িং কার্যকর করতে if (isType(v)) ব্যবহার করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'type_predicate_sim.ts',
      code: `interface UserPayload {
  userId: number;
  username: string;
  permissions: string[];
}

function isUserPayload(value: unknown): value is UserPayload {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  const candidate = value as Record<string, unknown>;
  return (
    typeof candidate.userId === "number" &&
    typeof candidate.username === "string" &&
    Array.isArray(candidate.permissions)
  );
}

const rawInputs: unknown[] = [
  { userId: 101, username: "Arif", permissions: ["read", "write"] },
  { userId: 102, username: "Nadia", permissions: ["read"] },
  { userId: "invalid_id", username: "Fake" }, // invalid
  null,                                       // invalid
];

let validCount = 0;
let totalPermissions = 0;

console.log("Type Predicate Validation Results:");
for (const input of rawInputs) {
  if (isUserPayload(input)) {
    validCount++;
    totalPermissions += input.permissions.length;
    console.log("Validated user: " + input.username + " (ID: " + input.userId + ", Perms: " + input.permissions.length + ")");
  } else {
    console.log("Rejected invalid payload");
  }
}

console.log("Summary: " + validCount + " valid users found, total permissions: " + totalPermissions);

// Output:
// Type Predicate Validation Results:
// Validated user: Arif (ID: 101, Perms: 2)
// Validated user: Nadia (ID: 102, Perms: 1)
// Rejected invalid payload
// Rejected invalid payload
// Summary: 2 valid users found, total permissions: 3`,
      caption: {
        en: 'The simulation filters 4 raw inputs using a type predicate. It accepts 2 valid users (IDs 101 and 102) with 3 total permissions, safely rejecting the 2 invalid payloads.',
        bn: 'সিমুলেশনটি টাইপ প্রেডিকেট ব্যবহার করে ৪টি কাঁচা ইনপুট ফিল্টার করে। এটি ৩টি মোট পারমিশনসহ ২টি বৈধ ব্যবহারকারী (আইডি ১০১ এবং ১০২) গ্রহণ করে এবং ২টি অবৈধ ইনপুট প্রত্যাখ্যান করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive type predicate lab', bn: 'INSIDE — জীবন্ত প্রেডিকেট ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test the runtime filter against 4 unknown inputs. The predicate accepts 2 valid records (user 101 with 2 permissions, user 102 with 1 permission) for a total of 3 permissions, while rejecting the 2 invalid entries. Inside the guarded if branch, TypeScript grants full access to typed properties.',
        bn: '৪টি অজানা ইনপুটের ওপর রানটাইম ফিল্টারটি পরীক্ষা করুন। প্রেডিকেটটি মোট ৩টি পারমিশনসহ ২টি বৈধ রেকর্ড (ব্যবহারকারী ১০১ এর ২টি, ব্যবহারকারী ১০২ এর ১টি) গ্রহণ করে এবং ২টি অবৈধ এন্ট্রি প্রত্যাখ্যান করে। সুরক্ষিত if ব্লকের ভেতরে টাইপস্ক্রিপ্ট টাইপড প্রপার্টি ব্যবহারের পূর্ণ অনুমতি দেয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Predicate lab (modify inputs, press Run)', bn: 'Predicate lab (ইনপুট পরিবর্তন করুন, Run)' },
      html: '<h3>Type Predicate Filtering</h3>\n<pre id="out"></pre>\n<p>Safe narrowing without manual casting.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const inputs = [\n  { userId: 101, username: "Arif", permissions: ["read", "write"] },\n  { userId: 102, username: "Nadia", permissions: ["read"] },\n  null,\n  { bad: true }\n];\nconst valid = inputs.filter(x => x && typeof x.userId === "number" && typeof x.username === "string");\nconsole.log("valid records: " + valid.length);\ndocument.getElementById("out").textContent = "Total inputs: " + inputs.length + " · Valid users: " + valid.length + " · Passed narrowing ✓";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Guarding principles', bn: 'ফলাফল — গার্ড ব্যবহারের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Type predicates bridge runtime verification with static typing without casting risks.', bn: 'টাইপ প্রেডিকেট কোনো কাস্টিং ঝুঁকি ছাড়াই রানটাইম যাচাইয়ের সাথে স্ট্যাটিক টাইপিংয়ের সেতুবন্ধন তৈরি করে।' },
        { en: 'The satisfies operator checks contracts while maintaining literal precision for configuration objects.', bn: 'satisfies অপারেটর কনফিগারেশন অবজেক্টের জন্য লিটারেল স্পষ্টতা বজায় রেখে চুক্তির শর্ত পূরণ নিশ্চিত করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common predicate pitfalls', bn: 'ডিবাগ — প্রেডিকেটের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Lying predicates (returning true blindly)', bn: 'ভুল প্রেডিকেট (যাচাই ছাড়া true রিটার্ন করা)' },
      text: {
        en: 'A type predicate function returns a boolean. If you write return true without verifying all fields, TypeScript trusts the assertion anyway, leading to runtime undefined crashes. Cure: check every required field rigorously before returning true.',
        bn: 'টাইপ প্রেডিকেট ফাংশন কেবল একটি বুলিয়ান রিটার্ন করে। সব ফিল্ড যাচাই না করে অন্ধভাবে return true লিখলে টাইপস্ক্রিপ্ট তা বিশ্বাস করে, ফলে রানটাইমে ক্র্যাশ হয়। প্রতিকার: true রিটার্ন করার আগে প্রতিটি আবশ্যক ফিল্ড কঠোরভাবে পরীক্ষা করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Using assertion functions for fail-fast logic', bn: 'দ্রুত ব্যর্থতার জন্য অ্যাসারশন ফাংশন ব্যবহার' },
      text: {
        en: 'When writing endpoint guards, use function assertUser(val: unknown): asserts val is User that throws an HttpError immediately if validation fails, narrowing val for all following lines in the function.',
        bn: 'এন্ডপয়েন্ট গার্ড লেখার সময় function assertUser(val: unknown): asserts val is User ব্যবহার করুন যা শর্ত পূরণ না হলে HttpError ছুড়ে দেয় এবং ফাংশনের পরবর্তী সমস্ত লাইনের জন্য val কে সংকুচিত করে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production validation libraries', bn: 'বাস্তব ক্ষেত্র — আধুনিক ভ্যালিডেশন লাইব্রেরি' },
    },
    {
      type: 'list',
      items: [
        { en: 'Schema validation libraries (Zod, Valibot, Yup): generate TypeScript predicates automatically from runtime schema definitions.', bn: 'স্কিমা ভ্যালিডেশন লাইব্রেরি (Zod, Valibot, Yup): রানটাইম স্কিমা থেকে স্বয়ংক্রিয়ভাবে টাইপস্ক্রিপ্ট প্রেডিকেট তৈরি করে।' },
        { en: 'API routing frameworks (tRPC, Next.js API Routes): validate incoming JSON payloads at server boundaries to ensure type-safe handler arguments.', bn: 'এপিআই রাউটিং ফ্রেমওয়ার্ক (tRPC, Next.js): সার্ভারের প্রবেশমুখেই জেসন ডেটা পরীক্ষা করে হ্যান্ডলারে টাইপ-নিরাপদ ডেটা পাঠায়।' },
        { en: 'WebSocket message dispatchers: inspect incoming binary or JSON events, narrowing event envelopes to typed domain actions.', bn: 'ওয়েবসকেট মেসেজ ডিসপ্যাচার: আগত মেসেজ পরীক্ষা করে ইভেন্ট পেলোডকে সুনির্দিষ্ট ডোমেন অ্যাকশনে রূপান্তর করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Mapped and Utility Types', bn: 'পরবর্তী পাঠ — ম্যাপড ও ইউটিলিটি টাইপ' },
    },
    {
      type: 'para',
      text: {
        en: 'With predicates mastered, Lesson 6 explores TypeScript built-in utility types (Partial, Pick, Omit, Record) and shows how to author custom mapped types using keyof and indexed access.',
        bn: 'প্রেডিকেট আয়ত্ত করার পর, পাঠ ৬ টাইপস্ক্রিপ্টের অন্তর্নির্মিত ইউটিলিটি টাইপ (Partial, Pick, Omit, Record) এবং keyof ও ইনডেক্সড এক্সেস ব্যবহার করে কীভাবে কাস্টম ম্যাপড টাইপ লিখতে হয় তা শেখাবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'ts-grd-ex-1',
      kind: 'mcq',
      topic: 'predicate-syntax',
      question: {
        en: 'Which return type syntax defines a custom user-defined type predicate for a parameter named data and target type User?',
        bn: 'কোন রিটার্ন টাইপ সিনট্যাক্সটি data নামক প্যারামিটার এবং User নামক টার্গেট টাইপের জন্য একটি কাস্টম টাইপ প্রেডিকেট সংজ্ঞায়িত করে?',
      },
      options: [
        { en: 'data is User', bn: 'data is User' },
        { en: 'User of data', bn: 'User of data' },
        { en: 'boolean => User', bn: 'boolean => User' },
        { en: 'data: User', bn: 'data: User' },
      ],
      answer: 0,
      hint: { en: 'The format is parameterName is TargetType.', bn: 'ফরম্যাটটি হলো parameterName is TargetType।' },
      explanation: {
        en: 'The type predicate syntax data is User instructs TypeScript to narrow data to User in any conditional branch where the function evaluates to true.',
        bn: 'data is User সিনট্যাক্স টাইপস্ক্রিপ্টকে নির্দেশ করে যে ফাংশনটি true মূল্যায়ন করলে শর্তাধীন ব্লকে data ভেরিয়েবলটিকে User হিসেবে সংকুচিত করতে হবে।',
      },
    },
    {
      id: 'ts-grd-ex-2',
      kind: 'mcq',
      topic: 'predicate-stats',
      question: {
        en: 'In our code simulation, out of 4 raw inputs, how many valid users were identified and what was their combined permission count?',
        bn: 'আমাদের কোড সিমুলেশনে ৪টি কাঁচা ইনপুটের মধ্যে কয়টি বৈধ ব্যবহারকারী পাওয়া গিয়েছিল এবং তাদের মোট পারমিশন সংখ্যা কত ছিল?',
      },
      options: [
        { en: '2 valid users with 3 total permissions', bn: '২টি বৈধ ব্যবহারকারী যাদের মোট ৩টি পারমিশন' },
        { en: '4 valid users with 10 total permissions', bn: '৪টি বৈধ ব্যবহারকারী যাদের মোট ১০টি পারমিশন' },
        { en: '1 valid user with 5 total permissions', bn: '১টি বৈধ ব্যবহারকারী যার মোট ৫টি পারমিশন' },
        { en: '0 valid users with 0 total permissions', bn: '০টি বৈধ ব্যবহারকারী এবং ০টি পারমিশন' },
      ],
      answer: 0,
      hint: { en: 'User 101 had 2 permissions and user 102 had 1 permission (2 + 1 = 3) out of 4 inputs.', bn: 'ব্যবহারকারী ১০১ এর ২টি এবং ব্যবহারকারী ১০২ এর ১টি পারমিশন (২ + ১ = ৩) ছিল ৪টি ইনপুটের মধ্যে।' },
      explanation: {
        en: 'The predicate accepted 2 valid users (IDs 101 and 102) with 2 and 1 permissions respectively, summing to 3 permissions.',
        bn: 'প্রেডিকেটটি যথাক্রমে ২টি ও ১টি পারমিশনসহ ২টি বৈধ ব্যবহারকারী (আইডি ১০১ এবং ১০২) গ্রহণ করেছে, যার যোগফল ৩টি পারমিশন।',
      },
    },
    {
      id: 'ts-grd-ex-3',
      kind: 'mcq',
      topic: 'satisfies-operator',
      question: {
        en: 'What advantage does the satisfies operator offer compared to standard type annotation (const x: Type)?',
        bn: 'সাধারণ টাইপ অ্যানোটেশনের (const x: Type) তুলনায় satisfies অপারেটর কোন সুবিধা দেয়?',
      },
      options: [
        {
          en: 'It verifies that the value satisfies the contract while preserving the exact inferred literal types of properties',
          bn: 'এটি অবজেক্ট চুক্তির শর্ত পূরণ করেছে কিনা যাচাই করে, অথচ প্রপার্টির সুনির্দিষ্ট লিটারেল টাইপটি সংরক্ষণ করে',
        },
        {
          en: 'It sends telemetry data to GitHub automatically',
          bn: 'এটি গিটহাবে স্বয়ংক্রিয়ভাবে টেলিমেট্রি ডেটা পাঠায়',
        },
        {
          en: 'It disables all JavaScript type checking inside that file',
          bn: 'এটি ফাইলের ভেতরের সমস্ত জাভাস্ক্রিপ্ট টাইপ চেকিং নিষ্ক্রিয় করে',
        },
        {
          en: 'It converts objects into binary JSON at build time',
          bn: 'এটি বিল্ডের সময় অবজেক্টকে বাইনারি জেসনে রূপান্তর করে',
        },
      ],
      answer: 0,
      hint: { en: 'satisfies validates the type without widening literal values.', bn: 'satisfies লিটারেল মানকে প্রশস্ত না করেই টাইপ যাচাই করে।' },
      explanation: {
        en: 'satisfies ensures conformance to an interface while preserving specific literal types, enabling autocomplete without widening.',
        bn: 'satisfies ইন্টারফেসের শর্ত পূরণ নিশ্চিত করার পাশাপাশি নির্দিষ্ট লিটারেল টাইপ বজায় রাখে, ফলে সঠিক অটোকমপ্লিশন পাওয়া যায়।',
      },
    },
    {
      id: 'ts-grd-ex-4',
      kind: 'predict',
      topic: 'keyword-predicate',
      question: {
        en: 'Which two-letter keyword joins the parameter name and target type in a type predicate (e.g. pet ... Fish)?',
        bn: 'টাইপ প্রেডিকেটে প্যারামিটারের নাম এবং টার্গেট টাইপকে যুক্ত করতে কোন দুই অক্ষরের কিওয়ার্ড ব্যবহৃত হয় (যেমন pet ... Fish)?',
      },
      answer: 'is',
      accept: ['is'],
      hint: { en: 'A simple two-letter word meaning "exists as".', bn: 'দুই অক্ষরের একটি পরিচিত ইংরেজি শব্দ।' },
      explanation: {
        en: 'The is keyword indicates a type predicate return signature (e.g. value is TargetType).',
        bn: 'is কিওয়ার্ডটি টাইপ প্রেডিকেট রিটার্ন সিগনেচার নির্দেশ করে (যেমন value is TargetType)।',
      },
    },
  ],
  quiz: {
    id: 'guards-predicate-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'ts-grd-q1',
        kind: 'mcq',
        topic: 'assertion-signature',
        question: {
          en: 'What does a function signature function assertIsDefined<T>(val: T): asserts val is NonNullable<T> do when it executes?',
          bn: 'function assertIsDefined<T>(val: T): asserts val is NonNullable<T> সিগনেচারের একটি ফাংশন চললে কী ঘটে?',
        },
        options: [
          {
            en: 'It throws an error if val is null or undefined, narrowing val to NonNullable<T> for all remaining code in the scope',
            bn: 'val যদি null বা undefined হয় তবে এটি এরর ছুড়ে দেয়, আর অন্যথায় স্কোপের পরবর্তী সমস্ত কোডের জন্য val কে NonNullable<T> এ সংকুচিত করে',
          },
          {
            en: 'It prints a warning to the console and continues running unchanged',
            bn: 'এটি কনসোলে একটি সতর্কবার্তা প্রিন্ট করে এবং কোনো পরিবর্তন ছাড়াই চলতে থাকে',
          },
          {
            en: 'It replaces null values with the number zero silently',
            bn: 'এটি কোনো বিজ্ঞপ্তি ছাড়াই নাল মানকে শূন্য দিয়ে প্রতিস্থাপন করে',
          },
          {
            en: 'It compiles the TypeScript file directly into native x86 machine code',
            bn: 'এটি টাইপস্ক্রিপ্ট ফাইলকে সরাসরি নেটিভ x86 মেশিন কোডে কম্পাইল করে',
          },
        ],
        answer: 0,
        hint: { en: 'Assertion functions throw on failure and narrow on success.', bn: 'অ্যাসারশন ফাংশন ব্যর্থ হলে এরর ছুড়ে দেয় এবং সফল হলে টাইপ সংকুচিত করে।' },
        explanation: {
          en: 'Assertion functions throw an exception if the condition is not met; if execution continues, TypeScript narrows the variable for the entire scope.',
          bn: 'শর্ত পূরণ না হলে অ্যাসারশন ফাংশন এক্সেপশন ছুড়ে দেয়; আর কোড সামনে এগোলে টাইপস্ক্রিপ্ট পুরো স্কোপের জন্য ভেরিয়েবলটি সংকুচিত করে।',
        },
      },
      {
        id: 'ts-grd-q2',
        kind: 'mcq',
        topic: 'raw-inputs-count',
        question: {
          en: 'In our code walkthrough, how many total raw inputs were evaluated in the rawInputs array?',
          bn: 'আমাদের কোড আলোচনায় rawInputs অ্যারেতে মোট কয়টি কাঁচা ইনপুট মূল্যায়ন করা হয়েছিল?',
        },
        options: [
          { en: 'Exactly 4 raw inputs evaluated', bn: 'ঠিক ৪টি কাঁচা ইনপুট মূল্যায়ন করা হয়েছিল' },
          { en: 'Exactly 10 raw inputs evaluated', bn: 'ঠিক ১০টি কাঁচা ইনপুট মূল্যায়ন করা হয়েছিল' },
          { en: 'Only 1 raw input evaluated', bn: 'কেবল ১টি কাঁচা ইনপুট মূল্যায়ন করা হয়েছিল' },
          { en: 'Zero raw inputs evaluated', bn: '০টি কাঁচা ইনপুট মূল্যায়ন করা হয়েছিল' },
        ],
        answer: 0,
        hint: { en: '2 valid objects, 1 invalid ID, 1 null = 4 total.', bn: '২টি বৈধ অবজেক্ট, ১টি ভুল আইডি, ১টি নাল = মোট ৪টি।' },
        explanation: {
          en: 'The test array contained 4 items: user 101, user 102, an invalid ID object, and null.',
          bn: 'টেস্ট অ্যারেটিতে ৪টি উপাদান ছিল: ইউজার ১০১, ইউজার ১০২, ভুল আইডিসহ একটি অবজেক্ট এবং নাল।',
        },
      },
      {
        id: 'ts-grd-q3',
        kind: 'mcq',
        topic: 'as-cast-danger',
        question: {
          en: 'Why is using type assertions like data as User dangerous when handling external API data?',
          bn: 'বাহ্যিক এপিআই ডেটা হ্যান্ডেল করার সময় data as User এর মতো টাইপ অ্যাসারশন ব্যবহার কেন বিপজ্জনক?',
        },
        options: [
          {
            en: 'It bypasses compiler checks without performing runtime validation, causing runtime crashes if properties are missing',
            bn: 'এটি রানটাইমে কোনো যাচাই না করেই কম্পাইলারকে শান্ত করে, ফলে প্রত্যাশিত প্রপার্টি না থাকলে রানটাইমে অ্যাপ্লিকেশন ক্র্যাশ করে',
          },
          {
            en: 'It causes the CSS stylesheet to fail downloading',
            bn: 'এটি সিএসএস স্টাইলশিট ডাউনলোডে বাধা দেয়',
          },
          {
            en: 'It forces the database to drop all production tables',
            bn: 'এটি ডাটাবেসের সমস্ত প্রোডাকশন টেবিল ডিলিট করতে বাধ্য করে',
          },
          {
            en: 'It generates extra HTTP network requests automatically',
            bn: 'এটি স্বয়ংক্রিয়ভাবে অতিরিক্ত এইচটিটিপি নেটওয়ার্ক রিকোয়েস্ট তৈরি করে',
          },
        ],
        answer: 0,
        hint: { en: 'as tells the compiler to trust you without verifying.', bn: 'as কম্পাইলারকে যাচাই ছাড়াই অন্ধভাবে বিশ্বাস করতে বলে।' },
        explanation: {
          en: 'Type assertions (as) perform no runtime verification; if the external payload doesn’t match, runtime crashes occur.',
          bn: 'টাইপ অ্যাসারশন (as) রানটাইমে কোনো পরীক্ষা করে না; বাহ্যিক ডেটা প্রত্যাশিত কাঠামোর না হলে রানটাইম ক্র্যাশ ঘটে।',
        },
      },
      {
        id: 'ts-grd-q4',
        kind: 'predict',
        topic: 'satisfies-operator-recite',
        question: {
          en: 'Which TypeScript operator introduced in version 4.9 validates that an expression conforms to a type without widening its literal types?',
          bn: 'টাইপস্ক্রিপ্ট ভার্সন ৪.৯ এ চালু হওয়া কোন অপারেটরটি লিটারেল টাইপ অক্ষুণ্ণ রেখে কোনো এক্সপ্রেশন টাইপ চুক্তি পূরণ করেছে কিনা তা যাচাই করে?',
        },
        answer: 'satisfies',
        accept: ['satisfies', 'satisfies operator'],
        hint: { en: 'Begins with the letters "sat".', bn: '"sat" অক্ষর দিয়ে শুরু হয়।' },
        explanation: {
          en: 'The satisfies operator validates that a value matches a type definition while maintaining the most narrow inferred literal types.',
          bn: 'satisfies অপারেটর মানটি টাইপ ডেফিনিশন মেনে চলছে কিনা যাচাই করার পাশাপাশি সবচেয়ে সুনির্দিষ্ট ইনফার্ড লিটারেল টাইপ সংরক্ষণ করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'mapped-and-the-utility',
    title: { en: 'Mapped and Utility Types', bn: 'ম্যাপড ও ইউটিলিটি টাইপ' },
  },
};
