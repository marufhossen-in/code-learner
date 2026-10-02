import type { LText } from '../lib/types';

/** Debugging Labs (Section 14): realistic broken code → find the bug → fix → explanation. */

export type DebugTech = 'javascript' | 'html' | 'css';
export type DebugDifficulty = 'easy' | 'medium' | 'hard';

export interface DebugOption {
  id: string;
  label: LText;
  correct: boolean;
  why: LText; // shown after this option is picked — the evidence-based reasoning
}

export interface DebugScenario {
  id: string;
  tech: DebugTech;
  difficulty: DebugDifficulty;
  points: number;
  title: LText;
  symptom: LText; // what the user OBSERVES (error message / wrong behaviour)
  code: string;
  lang: string;
  options: DebugOption[];
  fixedCode: string;
  explanation: LText; // the "why this bug happens" deep note, shown after solving
  realWorld: LText; // where this bites in production
}

/** Points shrink 50 per attempt, floor 25 — reward careful evidence gathering. */
export function scoreFor(points: number, attempts: number): number {
  return Math.max(points - 50 * Math.max(0, attempts - 1), 25);
}

export const DEBUG_SCENARIOS: DebugScenario[] = [
  {
    id: 'js-off-by-one',
    tech: 'javascript',
    difficulty: 'easy',
    points: 100,
    title: { en: 'The mysterious undefined fruit', bn: 'রহস্যময় undefined ফল' },
    symptom: {
      en: 'Console prints: banana, mango, undefined. Where did apple go, and who is undefined?',
      bn: 'কনসোলে আসছে: banana, mango, undefined। apple কোথায় গেল, আর undefined কে?',
    },
    code: `const fruits = ['apple', 'banana', 'mango'];
for (let i = 1; i <= fruits.length; i++) {
  console.log(fruits[i]);
}`,
    lang: 'js',
    options: [
      {
        id: 'a',
        label: { en: 'The loop starts at 1 and runs to length inclusive — the index leaves the array on both ends.', bn: 'লুপ শুরু ১ থেকে আর চলে length পর্যন্ত (<=) — সূচক দুই প্রান্তেই অ্যারের বাইরে।' },
        correct: true,
        why: {
          en: 'Arrays are 0-indexed: valid indices are 0..2. i=1 skips apple; i<=3 includes i=3 → fruits[3] is undefined.',
          bn: 'অ্যারে শূন্য-ইনডেক্সড: বৈধ সূচক ০..২। i=1 apple বাদ দেয়; i<=3 মানে i=3-ও প্রবেশ করে → fruits[3] হলো undefined।',
        },
      },
      {
        id: 'b',
        label: { en: 'const made the array immutable — the loop cannot read it.', bn: 'const অ্যারেটিকে অপরিবর্তনীয় বানিয়েছে — লুপ পড়তে পারছে না।' },
        correct: false,
        why: {
          en: 'const only blocks REASSIGNMENT (fruits = …). Reading and even mutating items is perfectly fine.',
          bn: 'const কেবল পুনঃঅ্যাসাইনমেন্ট (fruits = …) আটকায়। পড়া, বরং আইটেম বদলানোও সম্পূর্ণ ঠিক আছে।',
        },
      },
      {
        id: 'c',
        label: { en: 'console.log converts arrays to strings, breaking indexing.', bn: 'console.log অ্যারেকে স্ট্রিং বানিয়ে ফেলে, সূচক নষ্ট হয়।' },
        correct: false,
        why: {
          en: 'console.log never changes its argument — it only PRINTS. The array is untouched.',
          bn: 'console.log আর্গুমেন্ট কখনো বদলায় না — এটা শুধু ছাপে। অ্যারে অক্ষত থাকে।',
        },
      },
    ],
    fixedCode: `const fruits = ['apple', 'banana', 'mango'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`,
    explanation: {
      en: 'The classic off-by-one (OBOB): boundary conditions are where bugs breed. Say it out loud before running: "first index 0, last index length − 1."',
      bn: 'ক্লাসিক অফ-বাই-ওয়ান (OBOB): সীমানা শর্তেই বাগের বাসা। চালানোর আগে জোরে বলুন: "প্রথম সূচক ০, শেষ সূচক length − ১।"',
    },
    realWorld: {
      en: 'Off-by-one errors corrupt invoice rows, skip the first user in a list, and cause the famous "last page is empty" pagination bug.',
      bn: 'অফ-বাই-ওয়ান ভুল ইনভয়েসের সারি নষ্ট করে, তালিকার প্রথম ব্যবহারকারীকে বাদ দেয়, আর বিখ্যাত "শেষ পৃষ্ঠাটা খালি" পেজিনেশন বাগ তৈরি করে।',
    },
  },
  {
    id: 'js-assign-in-if',
    tech: 'javascript',
    difficulty: 'medium',
    points: 200,
    title: { en: 'Everyone gets full marks?!', bn: 'সবাই পূর্ণ নম্বর পেল?!' },
    symptom: {
      en: '"Perfect score!" prints even though score is 42. The condition should be false.',
      bn: 'score তো ৪২, তবু "পূর্ণ নম্বর!" ছাপে। শর্তের মিথ্যা হওয়ার কথা ছিল।',
    },
    code: `let score = 42;
if (score = 100) {
  console.log('পূর্ণ নম্বর!');
}`,
    lang: 'js',
    options: [
      {
        id: 'a',
        label: { en: 'Hoisting moved console.log above the if.', bn: 'Hoisting কনসোল.লগকে if-এর উপরে তুলে দিয়েছে।' },
        correct: false,
        why: {
          en: 'Hoisting lifts DECLARATIONS, never statements. The if still guards the log — the guard itself is lying.',
          bn: 'Hoisting কেবল ডিক্লারেশন তোলে, স্টেটমেন্ট নয়। if এখনো গার্ড করছে — ব্যর্থতা গার্ডের ভেতরেই।',
        },
      },
      {
        id: 'b',
        label: { en: '= is assignment, not comparison: it writes 100 and the result (100) is truthy.', bn: '= হলো অ্যাসাইনমেন্ট, তুলনা নয়: ১০০ লিখে দেয় আর ফলাফল (১০০) truthy।' },
        correct: true,
        why: {
          en: 'An assignment expression evaluates to the assigned value: (score = 100) → 100 → truthy. You wanted ===. Bonus: it also silently destroyed the real score.',
          bn: 'অ্যাসাইনমেন্ট এক্সপ্রেশনের মানই অ্যাসাইন করা মান: (score = 100) → 100 → truthy। চাই ছিল ===। বোনাস: আসল স্কোরটাও এতে চুপিচুপি নষ্ট হলো।',
        },
      },
      {
        id: 'c',
        label: { en: 'let-variables are always truthy inside if.', bn: 'let-ভেরিয়েবল if-এর ভেতরে সবসময় truthy।' },
        correct: false,
        why: {
          en: 'Declarations have no truthiness rules — values do. let x = 0 in an if is false. The declaration keyword is irrelevant here.',
          bn: 'ডিক্লারেশনের কোনো truthiness নিয়ম নেই — মানের আছে। let x = 0 হলে if মিথ্যা। এখানে ডিক্লারেশন কিওয়ার্ড অপ্রাসঙ্গিক।',
        },
      },
    ],
    fixedCode: `let score = 42;
if (score === 100) {
  console.log('পূর্ণ নম্বর!');
}`,
    explanation: {
      en: 'One missing equals sign ruined everything. Many teams write comparison constants FIRST ("100 === score") — with an accidental plain =, `100 = score` fails loudly instead of lying silently.',
      bn: 'একটি কম চিহ্নই ("=" → "==") সব নষ্ট করেছে। অনেক দল তুলনায় ধ্রুবক আগে লেখে ("100 === score") — ভুলে একটি মাত্র = হলে `100 = score` জোরে জোরে এরর দেয়, চুপচাপ মিথ্যা বলে না।',
    },
    realWorld: {
      en: 'if (user.role = "admin") — the assignment variant of this bug has granted admin rights in real codebases. Use ESLint rule no-cond-assign.',
      bn: 'if (user.role = "admin") — এই বাগের অ্যাসাইনমেন্ট-রূপ আসল কোডবেজে এডমিন অধিকার দান করেছে। ESLint-এর no-cond-assign নিয়ম চালু করুন।',
    },
  },
  {
    id: 'js-missing-await',
    tech: 'javascript',
    difficulty: 'hard',
    points: 300,
    title: { en: 'user.name is undefined — but the user EXISTS', bn: 'user.name তো undefined — অথচ ব্যবহারকারী আছে' },
    symptom: {
      en: 'Console prints undefined. Debugging shows `user` as "Promise { <pending> }".',
      bn: 'কনসোলে undefined। ডিবাগে দেখা যাচ্ছে `user` আসলে "Promise { <pending> }"।',
    },
    code: `async function fetchUser() {
  return { name: 'Mitu' };
}

const user = fetchUser();
console.log(user.name);`,
    lang: 'js',
    options: [
      {
        id: 'a',
        label: { en: 'fetchUser needs a callback parameter to return objects.', bn: 'অবজেক্ট ফেরত দিতে fetchUser-এর কলব্যাক প্যারামিটার লাগে।' },
        correct: false,
        why: {
          en: 'The function already returns the object — wrapped in a Promise. No callbacks required; this is the async/await world.',
          bn: 'ফাংশন অবজেক্ট ফেরত দেয়ই — শুধু Promise-এ মোড়ানো অবস্থায়। কলব্যাক দরকার নেই; এটা async/await-এর জগত।',
        },
      },
      {
        id: 'b',
        label: { en: 'Objects returned from functions lose their properties.', bn: 'ফাংশন থেকে ফেরত অবজেক্টের প্রপার্টি হারিয়ে যায়।' },
        correct: false,
        why: {
          en: 'Return values are passed by reference and keep everything. The object is intact — you are just holding its promise-wrapper.',
          bn: 'রিটার্ন মান রেফারেন্সে চলে যায়, সবই থাকে। অবজেক্ট অক্ষত — আপনি শুধু এর promise-মোড়ক হাতে নিয়েছেন।',
        },
      },
      {
        id: 'c',
        label: { en: 'Missing await: an async function ALWAYS returns a Promise; .name must wait for it to resolve.', bn: 'await হারানো: async ফাংশন সবসময় Promise ফেরত দেয়; ওটা resolve না হলে .name পাওয়া যায় না।' },
        correct: true,
        why: {
          en: 'async wraps ANY return into a Promise. user is Promise<{name}>, and Promise has no property "name" → undefined. await unwraps: const user = await fetchUser().',
          bn: 'async যেকোনো রিটার্নকে Promise-এ মুড়ে দেয়। user হলো Promise<{name}>, আর Promise-এর "name" নামে প্রপার্টি নেই → undefined। await মোড়ক খোলে: const user = await fetchUser()।',
        },
      },
    ],
    fixedCode: `async function fetchUser() {
  return { name: 'Mitu' };
}

async function main() {
  const user = await fetchUser();
  console.log(user.name);
}
main();`,
    explanation: {
      en: '"Promise { <pending> }" in a log is the universe telling you: await went missing somewhere upstream. Remember the Event Loop lab — resolve happens on a later microtask.',
      bn: 'লগে "Promise { <pending> }" মানে বিশ্ব বলছে: কোথাও ওপরে await হারিয়েছে। ইভেন্ট লুপ ল্যাব মনে করুন — resolve ঘটে পরের মাইক্রোটাস্কে।',
    },
    realWorld: {
      en: 'Half of all "data is undefined in production" bugs are missing awaits — in Next.js server components, in seed scripts, in tests that pass promises without awaiting expect().',
      bn: '"প্রোডাকশনে ডেটা undefined" বাগের অর্ধেকই হারানো await — Next.js সার্ভার কম্পোনেন্টে, সিড স্ক্রিপ্টে, আর expect(promise) লিখে await ভুলে যাওয়া টেস্টে।',
    },
  },
  {
    id: 'js-var-timeout',
    tech: 'javascript',
    difficulty: 'hard',
    points: 300,
    title: { en: 'Three timers, three identical answers', bn: 'তিনটি টাইমার, তিনটি হুবহু উত্তর' },
    symptom: {
      en: 'Expected 0, 1, 2 — console prints 3, 3, 3.',
      bn: 'আশা ছিল 0, 1, 2 — কনসোলে আসছে 3, 3, 3।',
    },
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}`,
    lang: 'js',
    options: [
      {
        id: 'a',
        label: { en: 'setTimeout adds the numbers together by design.', bn: 'setTimeout নকশা অনুযায়ী সংখ্যাগুলো যোগ করে ফেলে।' },
        correct: false,
        why: {
          en: 'setTimeout only schedules; it never touches your values. The 100ms delay is not the villain either.',
          bn: 'setTimeout শুধু সময় ঠিক করে; আপনার মান ছোঁয় না। ১০০ms বিলম্বও এখানে খলনায়ক নয়।',
        },
      },
      {
        id: 'b',
        label: { en: 'var is function-scoped: all three callbacks share ONE i, which is 3 by the time they run.', bn: 'var ফাংশন-স্কোপড: তিনটি কলব্যাক একটাই i ভাগ করে, চালু হওয়ার সময় সেটা ৩।' },
        correct: true,
        why: {
          en: 'One binding, three closures. The loop finishes (i becomes 3) BEFORE any timer fires. let creates a fresh binding per iteration — each closure keeps its own i.',
          bn: 'একটি বাইন্ডিং, তিনটি ক্লোজার। কোনো টাইমার চালু হওয়ার আগেই লুপ শেষ (i হয়ে যায় ৩)। let প্রতিটি ইটারেশনে নতুন বাইন্ডিং বানায় — প্রতিটি ক্লোজার নিজের i পায়।',
        },
      },
      {
        id: 'c',
        label: { en: 'The console rounds 0.3 up to 3.', bn: 'কনসোল ০.৩ কে ৩ করে রাউন্ড করে।' },
        correct: false,
        why: {
          en: 'Where would 0.3 even come from? console.log prints values exactly as they are.',
          bn: '০.৩ আসবেই বা কোথা থেকে? console.log মান যথাযথভাবেই ছাপে।',
        },
      },
    ],
    fixedCode: `for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}`,
    explanation: {
      en: 'The Closures lesson covers exactly this: a closure captures the BINDING, not the value. Change var→let and every iteration gets its own binding.',
      bn: 'ক্লোজার লেসনটাই এটি শেখায়: ক্লোজার ধরে রাখে বাইন্ডিংকে, মানকে নয়। var→let করলেই প্রতিটি ইটারেশন নিজস্ব বাইন্ডিং পায়।',
    },
    realWorld: {
      en: 'This exact pattern shipped as "every report email says September" bugs. It remains the #1 async interview question for a reason.',
      bn: 'এই হুবহু প্যাটার্ন "সব রিপোর্ট মেইলে সেপ্টেম্বর লেখা" বাগ হয়ে প্রোডাকশনে গেছে। ইন্টারভিউতে এক নম্বর async প্রশ্ন হওয়ার কারণ আছে।',
    },
  },
  {
    id: 'html-button-submit',
    tech: 'html',
    difficulty: 'medium',
    points: 200,
    title: { en: 'The Preview button that saves', bn: 'প্রিভিউ বাটন যে সেভ করে দেয়' },
    symptom: {
      en: 'Clicking "Preview" reloads the page and wipes the form. No JavaScript error in sight.',
      bn: '"Preview" চাপলেই পেজ রিলোড হয়ে ফর্ম ফাঁকা হয়ে যায়। কোনো জাভাস্ক্রিপ্ট এররও নেই।',
    },
    code: `<form action="/save" method="post">
  <input name="title" placeholder="শিরোনাম" />
  <button onclick="alert('preview!')">Preview</button>
  <button type="submit">Save</button>
</form>`,
    lang: 'html',
    options: [
      {
        id: 'a',
        label: { en: 'Inside a form, a button’s DEFAULT type is "submit" — Preview needs type="button".', bn: 'ফর্মের ভেতরে বাটনের ডিফল্ট type হলো "submit" — Preview-কে type="button" দিতে হবে।' },
        correct: true,
        why: {
          en: 'The spec says so: <button> in a form defaults to submit. The alert fires, THEN the form submits → navigation → wiped inputs.',
          bn: 'স্পেসিফিকেশন বলছে: ফর্মে <button> ডিফল্টে submit। alert চলে, তারপর ফর্ম সাবমিট → ন্যাভিগেশন → ইনপুট মুছে গেল।',
        },
      },
      {
        id: 'b',
        label: { en: 'The onclick alert is blocking the event loop.', bn: 'onclick alert ইভেন্ট লুপ থামিয়ে দিচ্ছে।' },
        correct: false,
        why: {
          en: 'alert does block — but dismissing it would continue normally. Blocking pauses; it does not reload pages.',
          bn: 'alert সত্যিই ব্লক করে — কিন্তু বন্ধ করলে সব স্বাভাবিক চলে। ব্লকিং থামায়, পেজ রিলোড করে না।',
        },
      },
      {
        id: 'c',
        label: { en: 'Two buttons in one form are not allowed by HTML.', bn: 'HTML-এ একটি ফর্মে দুই বাটন অনুমোদিত নয়।' },
        correct: false,
        why: {
          en: 'Forms may hold many buttons (think "Save draft" vs "Publish"). Only their TYPES matter.',
          bn: 'ফর্মে অনেক বাটন থাকতে পারে ("খসড়া রাখুন" বনাম "প্রকাশ")। গুরুত্বপূর্ণ শুধু তাদের TYPE।',
        },
      },
    ],
    fixedCode: `<form action="/save" method="post">
  <input name="title" placeholder="শিরোনাম" />
  <button type="button" onclick="alert('preview!')">Preview</button>
  <button type="submit">Save</button>
</form>`,
    explanation: {
      en: 'A bug with zero JavaScript — pure spec knowledge. The Forms lesson calls this "একটি type অ্যাট্রিবিউটের দাম"।',
      bn: 'শূন্য জাভাস্ক্রিপ্টের বাগ — খাঁটি স্পেক জ্ঞান। ফর্ম লেসনে এটাকে বলা হয়েছে "একটি type অ্যাট্রিবিউটের দাম"।',
    },
    realWorld: {
      en: 'Half of Stack Overflow’s "why does my React form refresh the page" answers are this button-type trap (or a missing preventDefault).',
      bn: 'Stack Overflow-র "আমার React ফর্ম পেজ রিফ্রেশ করে কেন" উত্তরের অর্ধেক এই বাটন-টাইপ ফাঁদ (নয়তো হারানো preventDefault)।',
    },
  },
  {
    id: 'css-flex-missing',
    tech: 'css',
    difficulty: 'easy',
    points: 100,
    title: { en: 'justify-content is completely ignored', bn: 'justify-content একদমই কাজ করছে না' },
    symptom: {
      en: 'Items should center with gaps — they sit left-aligned, touching each other. No console error, of course.',
      bn: 'আইটেমগুলোর গ্যাপসহ মাঝখানে আসার কথা — তারপরও বামে, একটার সাথে একটা লেগে। কনসোল এরর তো হবেই না।',
    },
    code: `.toolbar {
  justify-content: center;
  gap: 12px;
  background: #eee;
  padding: 8px;
}`,
    lang: 'css',
    options: [
      {
        id: 'a',
        label: { en: 'gap is invalid and crashes the whole rule.', bn: 'gap অবৈধ, তাই পুরো রুল ক্র্যাশ করেছে।' },
        correct: false,
        why: {
          en: 'CSS never crashes rules — unknown properties are skipped individually. And gap is perfectly valid… in flex/grid contexts.',
          bn: 'CSS কখনো রুল ক্র্যাশ করে না — অজানা প্রপার্টি আলাদাভাবে বাদ পড়ে। আর gap একদম বৈধ… flex/grid প্রেক্ষিতে।',
        },
      },
      {
        id: 'b',
        label: { en: 'Missing display: flex — flexbox properties on a block container are silently ignored.', bn: 'display: flex নেই — block কন্টেইনারে ফ্লেক্সবক্স প্রপার্টিগুলো নীরবে উপেক্ষিত হয়।' },
        correct: true,
        why: {
          en: 'justify-content and gap only have meaning inside a flex (or grid) formatting context. .toolbar is display: block, so they apply to nothing — no error, no warning.',
          bn: 'justify-content আর gap-এর অর্থ কেবল flex (বা grid) ফর্ম্যাটিং কনটেক্সটে। .toolbar হলো display: block, সুতরাং সেগুলোর কিছুই লাগছে না — কোনো এরর বা সতর্কতা ছাড়াই।',
        },
      },
      {
        id: 'c',
        label: { en: 'The background is covering the children; use z-index', bn: 'ব্যাকগ্রাউন্ড চাইল্ডদের ঢেকে ফেলছে; z-index লাগবে' },
        correct: false,
        why: {
          en: 'Backgrounds render behind content by definition. Visibility is fine — ALIGNMENT is what failed.',
          bn: 'ব্যাকগ্রাউন্ড সংজ্ঞা অনুযায়ী কনটেন্টের পেছনে থাকে। দৃশ্যমানতা ঠিক আছে — ব্যর্থ হয়েছে অ্যালাইনমেন্ট।',
        },
      },
    ],
    fixedCode: `.toolbar {
  display: flex;
  justify-content: center;
  gap: 12px;
  background: #eee;
  padding: 8px;
}`,
    explanation: {
      en: 'CSS fails silently by design. The Flexbox lab shows the same rule live: properties without their formatting context are decorative text.',
      bn: 'CSS ইচ্ছাকৃতভাবে নীরবে ব্যর্থ হয়। ফ্লেক্সবক্স ল্যাবে একই নিয়ম লাইভ দেখানো আছে: নিজস্ব প্রেক্ষিত ছাড়া প্রপার্টিগুলো শুধু সাজানো লেখা।',
    },
    realWorld: {
      en: 'Open devtools → Styles: Chrome now shows a grey "inactive" hint for exactly this. Senior devs check the formatting context first.',
      bn: 'ডেভটুলস → Styles খুলুন: Chrome এখন হুবহু এর জন্য ধূসর "inactive" ইঙ্গিত দেখায়। সিনিয়ররা আগে ফর্ম্যাটিং কনটেক্সট যাচাই করে।',
    },
  },
];

export const DEBUG_DIFF_LABELS: Record<DebugDifficulty, LText> = {
  easy: { en: 'easy', bn: 'সহজ' },
  medium: { en: 'medium', bn: 'মাঝারি' },
  hard: { en: 'hard', bn: 'কঠিন' },
};
