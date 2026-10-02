import type { Lesson } from '../../../lib/types';

export const ErrorsAndTheNeverLesson: Lesson = {
  slug: 'errors-and-the-never',
  tech: 'lang-typescript',
  title: {
    en: 'Errors and the Never Type — Type-Safe Failures and Exhaustiveness',
    bn: 'এরর ও নেভার টাইপ — টাইপ-নিরাপদ ব্যর্থতা ও সম্পূর্ণতা',
  },
  summary: {
    en: 'Master type-safe error handling and the never bottom type in TypeScript: narrow unknown catch variables with instanceof guards, model explicit Result types, and implement exhaustive compile-time switches using the never type.',
    bn: 'টাইপস্ক্রিপ্টে টাইপ-নিরাপদ এরর হ্যান্ডলিং ও never বটম টাইপ আয়ত্ত করুন: instanceof গার্ড দিয়ে unknown ক্যাচ ভেরিয়েবল ন্যারোয়িং, সুনির্দিষ্ট Result টাইপ মডেলিং এবং never টাইপ দিয়ে পুঙ্খানুপুঙ্খ কম্পাইল-টাইম সুইচ নিশ্চিতকরণ।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Safe failure patterns and the bottom type', bn: 'WHAT — নিরাপদ ব্যর্থতা ও বটম টাইপ' },
    },
    {
      type: 'para',
      text: {
        en: 'When you handle runtime failures in modern TypeScript, untyped throw statements and default any catch blocks represent significant sources of unhandled production crashes. In modern TypeScript configurations, caught exception variables default to unknown because any thrown value could be an Error, a string, or an arbitrary object. To handle failures safely, you must narrow the caught value using instanceof or type predicates. Furthermore, TypeScript provides the never bottom type to represent states that should logically never occur, enabling strict compile-time exhaustiveness checking across complex discriminated unions.',
        bn: 'যখন আপনি আধুনিক টাইপস্ক্রিপ্টে রানটাইম ব্যর্থতা হ্যান্ডেল করেন, তখন আনটাইপড throw স্টেটমেন্ট এবং ডিফল্ট any ক্যাচ ব্লক প্রোডাকশন ক্র্যাশের অন্যতম প্রধান কারণ হয়ে দাঁড়ায়। আধুনিক টাইপস্ক্রিপ্ট কনফিগারেশনে ক্যাচ ভেরিয়েবল ডিফল্টভাবে unknown থাকে, কারণ নিক্ষিপ্ত যেকোনো মান একটি Error, স্ট্রিং বা যেকোনো অবজেক্ট হতে পারে। নিরাপদে ব্যর্থতা সামলাতে আপনাকে instanceof বা টাইপ প্রেডিকেট দিয়ে ক্যাচ করা মান সুনির্দিষ্ট করতে হয়। তাছাড়া টাইপস্ক্রিপ্ট never বটম টাইপ প্রদান করে যা যৌক্তিকভাবে কখনো ঘটবে না এমন অবস্থাকে নির্দেশ করে, ফলে জটিল ডিসক্রিমিনেটেড ইউনিয়নে কঠোর কম্পাইল-টাইম সম্পূর্ণতা নিশ্চিত করা যায়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Handling unknown exceptions and exhaustive never branches', bn: 'অজানা এক্সেপশন হ্যান্ডলিং এবং সম্পূর্ণ never ব্রাঞ্চিং' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="TypeScript error handling and never type exhaustiveness">
<rect x="20" y="30" width="180" height="85" rx="8" fill="#fef2f2" stroke="#dc2626" stroke-width="2"/>
<text x="110" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#991b1b">CATCH BLOCK</text>
<text x="35" y="75" font-family="monospace" font-size="10" fill="currentColor">catch (err: unknown) {</text>
<text x="50" y="95" font-size="10" fill="#991b1b">Cannot read .message yet</text>
<text x="35" y="105" font-family="monospace" font-size="10" fill="currentColor">}</text>

<line x1="200" y1="72" x2="280" y2="72" stroke="#4f46e5" stroke-width="2"/>
<polygon points="280,67 295,72 280,77" fill="#4f46e5"/>

<rect x="295" y="25" width="325" height="95" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="457" y="48" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">NARROWING WITH INSTANCEOF</text>
<text x="310" y="70" font-family="monospace" font-size="10" fill="currentColor">if (err instanceof Error) {</text>
<text x="325" y="90" font-family="monospace" font-size="10" fill="#166534">  console.error(err.message); // Safe ✓</text>
<text x="310" y="108" font-family="monospace" font-size="10" fill="currentColor">}</text>

<rect x="70" y="145" width="500" height="70" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5"/>
<text x="320" y="170" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">EXHAUSTIVE SWITCH WITH NEVER TYPE</text>
<text x="320" y="190" text-anchor="middle" font-family="monospace" font-size="10" fill="currentColor">default: const _unhandled: never = action; return _unhandled;</text>
<text x="320" y="205" text-anchor="middle" font-size="10" fill="#2563eb">Guarantees 100% of union variants are explicitly handled</text>
</svg>`,
      caption: {
        en: 'Caught exceptions default to unknown to prevent assumptions. Guarding with instanceof Error unlocks .message, while assigning unhandled switch cases to never guarantees complete variant coverage.',
        bn: 'অনাকাঙ্ক্ষিত অনুমান রোধ করতে ক্যাচ করা এক্সেপশন ডিফল্টভাবে unknown থাকে। instanceof Error দিয়ে গার্ড করলে .message এক্সেস পাওয়া যায় এবং ডিফল্ট কেসে never অ্যাসাইন করলে সব শাখার সম্পূর্ণতা নিশ্চিত হয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'never type',
          def: {
            en: 'The TypeScript bottom type representing values that never occur, used for functions that throw or for exhaustive union checks.',
            bn: 'টাইপস্ক্রিপ্টের বটম টাইপ যা এমন মানকে নির্দেশ করে যা কখনো ঘটবে না; এটি এরর ছুড়ে দেওয়া ফাংশন বা সম্পূর্ণতা যাচাইয়ে ব্যবহৃত হয়।',
          },
        },
        {
          term: 'unknown in catch',
          def: {
            en: 'The strict TypeScript compiler setting (useUnknownInCatchVariables) where caught exception variables are typed as unknown instead of any.',
            bn: 'টাইপস্ক্রিপ্টের কঠোর কম্পাইলার সেটিং যেখানে ক্যাচ করা এক্সেপশন ভেরিয়েবল any এর বদলে unknown হিসেবে টাইপ করা হয়।',
          },
        },
        {
          term: 'Result pattern',
          def: {
            en: 'An architectural pattern where functions return a discriminated union of success or failure ({ ok: true, data } | { ok: false, error }) rather than throwing exceptions.',
            bn: 'একটি আর্কিটেকচারাল প্যাটার্ন যেখানে এক্সেপশন ছুড়ে দেওয়ার পরিবর্তে ফাংশন সাফল্য বা ব্যর্থতার ডিসক্রিমিনেটেড ইউনিয়ন ফেরত দেয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Eliminate untyped runtime failure surprises', bn: 'কেন — আনটাইপড রানটাইম ব্যর্থতার ঝুঁকি দূর করা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Avoid undefined property crashes: forcing unknown in catch prevents writing err.message when someone throws a raw string.', bn: 'আনডিফাইন্ড প্রপার্টি ক্র্যাশ রোধ: ক্যাচে unknown বাধ্য করায় কেউ স্ট্রিং থ্রো করলেও err.message পড়ে ক্র্যাশ হওয়ার ঝুঁকি থাকে না।' },
        { en: 'Self-documenting APIs with Result types: callers immediately see potential failure modes in function signatures without reading internals.', bn: 'Result টাইপের মাধ্যমে স্পষ্ট এপিআই: কলাররা ফাংশন ভেতরের কোড না দেখেই সম্ভাব্য সব ব্যর্থতার ধরন সিগনেচার থেকেই বুঝতে পারে।' },
        { en: 'Never miss an edge case: the never type flags missing switch branches immediately upon adding new variants to existing unions.', bn: 'কোনো ক্ষেত্র বাদ না পড়া: বিদ্যমান ইউনিয়নে নতুন ভ্যারিয়েন্ট যোগ করলে never টাইপ বাদ পড়ে যাওয়া সুইচ ব্রাঞ্চ তাৎক্ষণিক শনাক্ত করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Resilient error patterns in 4 steps', bn: 'HOW — ৪টি ধাপে টেকসই এরর হ্যান্ডলিং' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Guard catch variables', bn: '১. ক্যাচ ভেরিয়েবল গার্ড' }, text: { en: 'Use err instanceof Error to safely access message and stack.', bn: 'message ও stack নিরাপদে পড়তে err instanceof Error ব্যবহার করুন।' } },
        { title: { en: '2. Create custom errors', bn: '২. কাস্টম এরর ক্লাস' }, text: { en: 'Extend Error with custom codes like class ApiError extends Error.', bn: 'class ApiError extends Error এর মতো কাস্টম কোডসহ Error ক্লাস তৈরি করুন।' } },
        { title: { en: '3. Return Result unions', bn: '৩. Result ইউনিয়ন রিটার্ন' }, text: { en: 'Model operations as { ok: true, data } | { ok: false, error } unions.', bn: 'অপারেশনগুলোকে { ok: true, data } | { ok: false, error } ইউনিয়ন হিসেবে গঠন করুন।' } },
        { title: { en: '4. Assign to never', bn: '৪. never এ অ্যাসাইন' }, text: { en: 'Place const _check: never = val in switch default cases for exhaustiveness.', bn: 'সম্পূর্ণতা যাচাই করতে সুইচের ডিফল্ট কেসে const _check: never = val রাখুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'error_never_sim.ts',
      code: `type Result<T> =
  | { ok: true; data: T }
  | { ok: false; error: string; code: number };

function parseScore(input: string): Result<number> {
  const num = Number(input);
  if (isNaN(num)) {
    return { ok: false, error: "Invalid numeric score", code: 400 };
  }
  if (num < 0 || num > 100) {
    return { ok: false, error: "Score out of range", code: 422 };
  }
  return { ok: true, data: num };
}

const inputs = ["95", "105", "abc"];
let successCount = 0;
let errorCount = 0;
let validScoreSum = 0;

console.log("Type-Safe Error & Result Pattern:");
for (const raw of inputs) {
  const res = parseScore(raw);
  if (res.ok) {
    successCount++;
    validScoreSum += res.data;
    console.log("Success: parsed valid score " + res.data);
  } else {
    errorCount++;
    console.log("Failed (HTTP " + res.code + "): " + res.error);
  }
}

console.log("Results Summary: " + successCount + " success, " + errorCount + " errors, sum: " + validScoreSum);

// Output:
// Type-Safe Error & Result Pattern:
// Success: parsed valid score 95
// Failed (HTTP 422): Score out of range
// Failed (HTTP 400): Invalid numeric score
// Results Summary: 1 success, 2 errors, sum: 95`,
      caption: {
        en: 'The simulation evaluates 3 inputs: score 95 succeeds, while 105 fails with HTTP 422 and "abc" fails with HTTP 400, totalling 1 success, 2 errors, and a sum of 95.',
        bn: 'সিমুলেশনটি ৩টি ইনপুট মূল্যায়ন করে: স্কোর ৯৫ সফল হয়, ১০৫ এইচটিটিপি ৪২২ সহ ব্যর্থ হয় এবং "abc" এইচটিটিপি ৪০০ সহ ব্যর্থ হয়, যার ফলাফল ১টি সাফল্য, ২টি এরর এবং মোট ৯৫।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive error and result pattern lab', bn: 'INSIDE — জীবন্ত এরর ও রেজাল্ট প্যাটার্ন ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'This interactive tester processes 3 inputs ("95", "105", "abc"). Only 1 score is valid (95), while 2 inputs trigger type-safe domain errors with HTTP status codes 422 and 400. In the success branch, res.data is guaranteed to be a number, while in the error branch res.error is guaranteed to be a string.',
        bn: 'এই ইন্টারেক্টিভ টেস্টারটি ৩টি ইনপুট ("৯৫", "১০৫", "abc") প্রক্রিয়া করে। কেবল ১টি স্কোর বৈধ (৯৫), আর ২টি ইনপুট এইচটিটিপি ৪২২ ও ৪০০ কোডসহ টাইপ-নিরাপদ এরর তৈরি করে। সফল শাখায় res.data নিশ্চিতভাবে সংখ্যা এবং ব্যর্থ শাখায় res.error নিশ্চিতভাবে স্ট্রিং থাকে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Error pattern lab (modify inputs, press Run)', bn: 'Error pattern lab (ইনপুট পরিবর্তন করুন, Run)' },
      html: '<h3>Type-Safe Result Pattern</h3>\n<pre id="out"></pre>\n<p>Explicit success and error branch narrowing.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const inputs = ["95", "105", "abc"];\nlet okCount = 0;\nlet errCount = 0;\ninputs.forEach(val => {\n  const n = Number(val);\n  if (!isNaN(n) && n >= 0 && n <= 100) okCount++;\n  else errCount++;\n});\nconsole.log("Success: " + okCount + ", Errors: " + errCount);\ndocument.getElementById("out").textContent = "Total inputs: " + inputs.length + " · Successes: " + okCount + " · Failures: " + errCount + " · Result pattern verified ✓";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Resilient error architecture', bn: 'ফলাফল — টেকসই এরর আর্কিটেকচারের শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Type-safe error handling eliminates unexpected runtime exceptions through explicit discriminated unions.', bn: 'টাইপ-নিরাপদ এরর হ্যান্ডলিং সুনির্দিষ্ট ডিসক্রিমিনেটেড ইউনিয়নের মাধ্যমে অপ্রত্যাশিত রানটাইম ক্র্যাশ রোধ করে।' },
        { en: 'The never type turns runtime boundary oversights into immediate compile-time errors.', bn: 'never টাইপ রানটাইমে শাখা বাদ পড়ার ঝুঁকিকে তাৎক্ষণিক কম্পাইল-টাইম এররে রূপান্তর করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common error traps', bn: 'ডিবাগ — এরর হ্যান্ডলিংয়ের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Assuming catch variables are Error instances', bn: 'ক্যাচ ভেরিয়েবলকে সরাসরি Error অবজেক্ট ভাবা' },
      text: {
        en: 'Writing catch (err) { console.log(err.message); } crashes if third-party code executes throw "Fatal database error!". Always guard with if (err instanceof Error) or create a getErrorMessage(err: unknown) helper.',
        bn: 'ক্যাচ ব্লকে catch (err) { console.log(err.message); } লিখলে কেউ স্ট্রিং থ্রো করলে অ্যাপ্লিকেশন ক্র্যাশ করে। সর্বদা if (err instanceof Error) দিয়ে গার্ড করুন অথবা getErrorMessage(err: unknown) হেল্পার ব্যবহার করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Custom error prototype chaining in ES5', bn: 'ES5 এ কাস্টম এরর প্রোটোটাইপ চেইনিং' },
      text: {
        en: 'When extending the native Error class in TypeScript targeting ES5, call Object.setPrototypeOf(this, CustomError.prototype) inside the constructor to maintain proper instanceof checks.',
        bn: 'ES5 টার্গেটে নেটিভ Error ক্লাস এক্সটেন্ড করার সময় কন্সট্রাক্টরের ভেতর Object.setPrototypeOf(this, CustomError.prototype) কল করুন যাতে instanceof সঠিকভাবে কাজ করে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production error handling', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইন্ডাস্ট্রিয়াল এরর প্যাটার্ন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Functional TypeScript libraries (fp-ts, effect-ts): structure enterprise pipelines entirely around Either and Result types.', bn: 'ফাংশনাল টাইপস্ক্রিপ্ট লাইব্রেরি (fp-ts, effect-ts): এন্টারপ্রাইজ পাইপলাইনগুলোকে সম্পূর্ণভাবে Either এবং Result টাইপের ওপর ভিত্তি করে তৈরি করে।' },
        { en: 'Microservice RPC clients (gRPC, ConnectRPC): map network and status codes into strongly typed error response unions.', bn: 'মাইক্রোসার্ভিস আরপিসি ক্লায়েন্ট: নেটওয়ার্ক ও স্ট্যাটাস কোডগুলোকে টাইপ-নিরাপদ এরর রেসপন্স ইউনিয়নে রূপান্তর করে।' },
        { en: 'Command line compilers (Rust, TypeScript compiler itself): utilize the never type in exhaustive AST visitors to guarantee every syntax node is processed.', bn: 'কম্পাইলার আর্কিটেকচার (tsc): এএসটি ভিজিটরে never টাইপ ব্যবহার করে নিশ্চিত করে যে প্রতিটি সিনট্যাক্স নোড হ্যান্ডেল করা হয়েছে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — The Typed Release and Production Tooling', bn: 'পরবর্তী পাঠ — টাইপড রিলিজ ও প্রোডাকশন টুলিং' },
    },
    {
      type: 'para',
      text: {
        en: 'With type-safe error handling and exhaustiveness mastered, our final Lesson 8 covers the complete production release cycle: tsconfig compiler flags, declaration emit (.d.ts), bundling, and shipping strict TypeScript to production.',
        bn: 'টাইপ-নিরাপদ এরর হ্যান্ডলিং ও সম্পূর্ণতা আয়ত্ত করার পর, আমাদের চূড়ান্ত পাঠ ৮ সম্পূর্ণ প্রোডাকশন রিলিজ চক্র শেখাবে: tsconfig কম্পাইলার ফ্ল্যাগ, ডিক্লারেশন এমিট (.d.ts), বান্ডলিং এবং প্রোডাকশনে কঠোর টাইপস্ক্রিপ্ট শিপিং।',
      },
    },
  ],
  exercises: [
    {
      id: 'ts-err-ex-1',
      kind: 'mcq',
      topic: 'unknown-catch',
      question: {
        en: 'Under TypeScript strict configuration (useUnknownInCatchVariables), what is the default type of the error variable in catch (e)?',
        bn: 'টাইপস্ক্রিপ্টের কঠোর কনফিগারেশনে (useUnknownInCatchVariables) catch (e) ব্লকে এরর ভেরিয়েবলটির ডিফল্ট টাইপ কী হয়?',
      },
      options: [
        { en: 'unknown', bn: 'unknown' },
        { en: 'any', bn: 'any' },
        { en: 'Error', bn: 'Error' },
        { en: 'string', bn: 'string' },
      ],
      answer: 0,
      hint: { en: 'It is unknown to prevent unsafe property access.', bn: 'অনিরাপদ অ্যাক্সেস ঠেকাতে এটি unknown থাকে।' },
      explanation: {
        en: 'TypeScript types caught errors as unknown, requiring developers to inspect the value with instanceof Error before reading properties.',
        bn: 'টাইপস্ক্রিপ্ট ক্যাচ করা এররকে unknown হিসেবে নির্ধারণ করে, যাতে প্রপার্টি পড়ার আগে ডেভেলপার instanceof Error দিয়ে পরীক্ষা করতে বাধ্য হন।',
      },
    },
    {
      id: 'ts-err-ex-2',
      kind: 'mcq',
      topic: 'error-sim-count',
      question: {
        en: 'In our code simulation, out of 3 inputs ("95", "105", "abc"), how many succeeded and how many errors were reported?',
        bn: 'আমাদের কোড সিমুলেশনে ৩টি ইনপুটের ("৯৫", "১০৫", "abc") মধ্যে কয়টি সফল হয়েছিল এবং কয়টি এরর রিপোর্ট করা হয়েছিল?',
      },
      options: [
        { en: '1 success and 2 errors (valid score sum = 95)', bn: '১টি সাফল্য এবং ২টি এরর (বৈধ স্কোরের সমষ্টি = ৯৫)' },
        { en: '3 successes and 0 errors', bn: '৩টি সাফল্য এবং ০টি এরর' },
        { en: '0 successes and 3 errors', bn: '০টি সাফল্য এবং ৩টি এরর' },
        { en: '2 successes and 1 error', bn: '২টি সাফল্য এবং ১টি এরর' },
      ],
      answer: 0,
      hint: { en: '95 was valid; 105 was out of range; "abc" was not a number.', bn: '৯৫ বৈধ ছিল; ১০৫ সীমার বাইরে ছিল; "abc" কোনো সংখ্যা ছিল না।' },
      explanation: {
        en: 'The simulation yielded exactly 1 success (score 95) and 2 failures (out of range and NaN), summing to 95.',
        bn: 'সিমুলেশনটিতে ঠিক ১টি সাফল্য (স্কোর ৯৫) এবং ২টি ব্যর্থতা ঘটেছিল, যার মোট সমষ্টি ৯৫।',
      },
    },
    {
      id: 'ts-err-ex-3',
      kind: 'mcq',
      topic: 'never-exhaustiveness',
      question: {
        en: 'How does assigning an unhandled switch branch to a never variable (const _check: never = val) enforce exhaustiveness?',
        bn: 'একটি হ্যান্ডেল না করা সুইচ শাখাকে never ভেরিয়েবলে (const _check: never = val) অ্যাসাইন করলে কীভাবে সম্পূর্ণতা নিশ্চিত হয়?',
      },
      options: [
        {
          en: 'If any union variant is not handled in a previous case, TypeScript raises a compile-time type mismatch error',
          bn: 'পূর্ববর্তী কেসে কোনো ইউনিয়ন ভ্যারিয়েন্ট বাদ পড়ে গেলে টাইপস্ক্রিপ্ট কম্পাইল-টাইমে টাইপ অমিলের এরর দেয়',
        },
        {
          en: 'It forces the operating system to allocate 4 gigabytes of virtual memory',
          bn: 'এটি অপারেটিং সিস্টেমকে ৪ গিগাবাইট ভার্চুয়াল মেমরি বরাদ্দ করতে বাধ্য করে',
        },
        {
          en: 'It deletes the node_modules directory automatically',
          bn: 'এটি স্বয়ংক্রিয়ভাবে node_modules ডিরেক্টরি মুছে ফেলে',
        },
        {
          en: 'It restarts the database server on every request',
          bn: 'এটি প্রতিটি রিকোয়েস্টে ডাটাবেস সার্ভার রিস্টার্ট করে',
        },
      ],
      answer: 0,
      hint: { en: 'Nothing can be assigned to never, so any unhandled variant causes a build error.', bn: 'never এ কিছুই অ্যাসাইন করা যায় না, তাই বাদ পড়া যেকোনো টাইপ বিল্ড এরর ঘটায়।' },
      explanation: {
        en: 'Because never can hold no values, assigning any remaining union member to never fails compilation, proving a missed branch.',
        bn: 'যেহেতু never কোনো মান ধারণ করতে পারে না, তাই কোনো অবশিষ্ট ইউনিয়ন সদস্যকে never এ অ্যাসাইন করতে গেলে কম্পাইলেশন ব্যর্থ হয়।',
      },
    },
    {
      id: 'ts-err-ex-4',
      kind: 'predict',
      topic: 'bottom-type-name',
      question: {
        en: 'What is the name of the TypeScript bottom type that represents values that can never occur?',
        bn: 'টাইপস্ক্রিপ্টের সেই বটম টাইপটির নাম কী যা এমন মানকে নির্দেশ করে যা কখনো ঘটতে পারে না?',
      },
      answer: 'never',
      accept: ['never', 'never type'],
      hint: { en: 'A 5-letter English word meaning "at no time".', bn: '৫ অক্ষরের একটি ইংরেজি শব্দ যার অর্থ "কখনো না"।' },
      explanation: {
        en: 'The never type is the bottom type in TypeScript, representing empty sets of values that cannot exist.',
        bn: 'never টাইপ হলো টাইপস্ক্রিপ্টের বটম টাইপ, যা এমন ফাঁকা সেটের প্রতিনিধিত্ব করে যার কোনো বাস্তব মান থাকতে পারে না।',
      },
    },
  ],
  quiz: {
    id: 'errors-never-quiz',
    title: { en: 'Lesson 7 exam', bn: 'পাঠ ৭ পরীক্ষা' },
    questions: [
      {
        id: 'ts-err-q1',
        kind: 'mcq',
        topic: 'result-pattern-benefit',
        question: {
          en: 'What primary advantage does returning a Result union { ok: true, data } | { ok: false, error } provide over throwing exceptions?',
          bn: 'এক্সেপশন থ্রো করার চেয়ে { ok: true, data } | { ok: false, error } Result ইউনিয়ন রিটার্ন করার মূল সুবিধা কী?',
        },
        options: [
          {
            en: 'It makes possible error conditions explicit in the type signature, forcing consumers to handle both branches',
            bn: 'এটি টাইপ সিগনেচারেই সম্ভাব্য সব এরর স্পষ্ট করে তোলে এবং কলারকে উভয় শাখা হ্যান্ডেল করতে বাধ্য করে',
          },
          {
            en: 'It encrypts the network payload with SSL certificates',
            bn: 'এটি এসএসএল সার্টিফিকেট দিয়ে নেটওয়ার্ক পেলোড এনক্রিপ্ট করে',
          },
          {
            en: 'It disables all garbage collection cycles in Node.js',
            bn: 'এটি Node.js এর সমস্ত গার্বেজ কালেকশন চক্র বন্ধ করে দেয়',
          },
          {
            en: 'It reduces the physical size of the computer hard drive',
            bn: 'এটি কম্পিউটারের হার্ড ড্রাইভের আকার কমিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Result unions force callers to handle failure explicitly.', bn: 'Result ইউনিয়ন কলারকে ব্যর্থতা স্পষ্টভাবে হ্যান্ডেল করতে বাধ্য করে।' },
        explanation: {
          en: 'Result types turn invisible throwing behavior into visible return contracts that the TypeScript compiler enforces.',
          bn: 'Result টাইপ অদৃশ্য এক্সেপশন আচরণকে দৃশ্যমান রিটার্ন চুক্তিতে পরিণত করে যা টাইপস্ক্রিপ্ট কম্পাইলার কার্যকর করে।',
        },
      },
      {
        id: 'ts-err-q2',
        kind: 'mcq',
        topic: 'http-error-code',
        question: {
          en: 'In our code walkthrough, what HTTP status code was returned when the input score was 105 (out of range)?',
          bn: 'আমাদের কোড আলোচনায় ইনপুট স্কোর ১০৫ (সীমার বাইরে) হওয়ার সময় কোন এইচটিটিপি স্ট্যাটাস কোড ফেরত দেওয়া হয়েছিল?',
        },
        options: [
          { en: 'HTTP code 422 (Unprocessable Entity)', bn: 'এইচটিটিপি কোড ৪২২ (Unprocessable Entity)' },
          { en: 'HTTP code 200 (OK)', bn: 'এইচটিটিপি কোড ২০০ (OK)' },
          { en: 'HTTP code 500 (Internal Server Error)', bn: 'এইচটিটিপি কোড ৫০০ (Internal Server Error)' },
          { en: 'HTTP code 404 (Not Found)', bn: 'এইচটিটিপি কোড ৪০৪ (Not Found)' },
        ],
        answer: 0,
        hint: { en: 'Scores outside 0-100 returned code 422.', bn: '০-১০০ এর বাইরের স্কোরের জন্য কোড ৪২২ দেওয়া হয়েছিল।' },
        explanation: {
          en: 'The simulation explicitly returned code: 422 with the error "Score out of range" when the score exceeded 100.',
          bn: 'স্কোর ১০০ অতিক্রম করায় সিমুলেশনে স্পষ্টভাবেই code: 422 এবং "Score out of range" ফেরত দেওয়া হয়েছিল।',
        },
      },
      {
        id: 'ts-err-q3',
        kind: 'mcq',
        topic: 'instanceof-check',
        question: {
          en: 'Why is if (err instanceof Error) the recommended way to inspect an unknown caught error variable?',
          bn: 'ক্যাচ ব্লকে অজানা এরর ভেরিয়েবল পরীক্ষা করতে if (err instanceof Error) কেন সবচেয়ে সুপারিশকৃত পদ্ধতি?',
        },
        options: [
          {
            en: 'It verifies that the object is genuinely an Error instance at runtime before safely accessing .message and .stack',
            bn: 'এটি রানটাইমে অবজেক্টটি সত্যি Error ইনস্ট্যান্স কিনা নিশ্চিত করে এবং এরপর নিরাপদে .message ও .stack অ্যাক্সেসের সুযোগ দেয়',
          },
          {
            en: 'It automatically fixes syntax errors in the database',
            bn: 'এটি ডাটাবেসের সিনট্যাক্স এরর স্বয়ংক্রিয়ভাবে ঠিক করে',
          },
          {
            en: 'It converts the error into an HTML table for styling',
            bn: 'এটি এররকে স্টাইলিং করার জন্য এইচটিএমএল টেবিলে রূপান্তর করে',
          },
          {
            en: 'It transmits an SMS alert to the engineering team',
            bn: 'এটি প্রকৌশল দলের কাছে একটি এসএমএস সতর্কবার্তা পাঠায়',
          },
        ],
        answer: 0,
        hint: { en: 'instanceof verifies the prototype at runtime.', bn: 'instanceof রানটাইমে প্রোটোটাইপ নিশ্চিত করে।' },
        explanation: {
          en: 'Using instanceof Error guards against strings, nulls, or plain objects being thrown, preventing runtime crashes when reading .message.',
          bn: 'instanceof Error ব্যবহার করলে স্ট্রিং বা নাল থ্রো করার কারণে .message পড়তে গিয়ে অ্যাপ ক্র্যাশ করা রোধ হয়।',
        },
      },
      {
        id: 'ts-err-q4',
        kind: 'predict',
        topic: 'never-return-keyword',
        question: {
          en: 'What return type is assigned to a function that unconditionally throws an exception and never reaches a return statement?',
          bn: 'শর্তহীনভাবে এক্সেপশন ছুড়ে দেয় এবং কখনো কোনো রিটার্ন স্টেটমেন্টে পৌঁছায় না এমন ফাংশনের রিটার্ন টাইপ কী হয়?',
        },
        answer: 'never',
        accept: ['never', 'never type'],
        hint: { en: 'The bottom type representing values that never occur.', bn: 'বটম টাইপ যা এমন মান প্রকাশ করে যা কখনো ঘটে না।' },
        explanation: {
          en: 'Functions that unconditionally throw or loop forever have the return type never because control flow never returns to the caller.',
          bn: 'যেসব ফাংশন শর্তহীনভাবে এরর ছুড়ে দেয় বা অনন্ত লুপে চলে তাদের রিটার্ন টাইপ never হয় কারণ নিয়ন্ত্রণ আর কলারের কাছে ফিরে আসে না।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'the-typed-release',
    title: { en: 'The Typed Release and Production Tooling', bn: 'টাইপড রিলিজ ও প্রোডাকশন টুলিং' },
  },
};
