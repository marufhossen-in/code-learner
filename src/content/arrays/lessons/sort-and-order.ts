import type { Lesson } from '../../../lib/types';

export const SortAndOrderLesson: Lesson = {
  slug: 'sort-and-order',
  tech: 'arrays',
  title: { en: 'Sorting and Order', bn: 'সাজানো ক্রম' },
  summary: { en: 'sort() mutates, compares as strings by default, and is stable since ES2019. Numeric order needs (a, b) => a - b, and objects need an explicit key. Copy first with toSorted or slice().', bn: 'sort() নিজেকে বদলায়, ডিফল্টে লেখার মতো তুলনা করে, ES2019 থেকে stable। সংখ্যার ক্রমে (a, b) => a - b লাগে, object-এ স্পষ্ট key লাগে। আগে toSorted বা slice() দিয়ে কপি নিন।' },
  minutes: 12,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Sorting and Order', bn: 'WHAT — সাজানো ক্রম' },
    },
    {
      type: 'para',
      text: { en: 'You ask for the ten cheapest products and the site shows the ten most recently added. Nothing sorted them; the list came out in the order it was built. Sorting is its own small problem — with numbers in it, and one JavaScript trap that turns 110 into the biggest price.', bn: 'আপনি সস্তা ১০টি product চেয়েছেন, site দেখাচ্ছে সবচেয়ে নতুন যোগ হওয়া ১০টি। কোনোটিই সাজানো হয়নি; যে ক্রমে তৈরি হয়েছিল সে ক্রমেই বেরিয়েছে। সাজানো নিজেই একটা ছোট সমস্যা — ভেতরে সংখ্যা আছে, আর JavaScript-এর ১টি ফাঁদ আছে যে ১১০ কে সবচেয়ে বড় দাম বানিয়ে দেয়।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'Default order is lexicographic: [10, 9, 1].sort() → [1, 10, 9] because "10" < "9" as text.',
          bn: 'ডিফল্ট লেখা-ক্রম: [10, 9, 1].sort() → [1, 10, 9], কারণ লেখায় "10" < "9"।',
        },
        {
          en: 'A comparator returns negative / 0 / positive; those three signs drive every swap.',
          bn: 'comparator ঋণাত্মক / ০ / ধনাত্মক ফেরত দেয়; এই ৩টি চিহ্ন প্রতিটি অদলবদল চালায়।',
        },
        {
          en: 'Stable means equal keys keep their original relative order — that is what makes a two-level sort work.',
          bn: 'stable মানে সমান key-গুলোর আগের পারস্পরিক ক্রম থাকে — দুই-স্তরের sort এতেই চলে।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'sort.js',
      code: `const ns = [10, 9, 1];
ns.sort();                       // [1, 10, 9]  — strings, and ns itself changed
ns.sort((a, b) => a - b);        // [1, 9, 10]  — numbers, ascending
ns.sort((a, b) => b - a);        // [10, 9, 1]  — descending

const rows = [{ n: "Roni", s: 70 }, { n: "Mitu", s: 90 }, { n: "Apu", s: 70 }];
const copy = rows.toSorted((a, b) => a.s - b.s);   // rows untouched
// by score, then by name — one comparator, two levels
copy.sort((a, b) => a.s - b.s || a.n.localeCompare(b.n));

["æ", "ø", "z"].sort();                       // locale-blind: ["z", "æ", "ø"]
["æ", "ø", "z"].sort((a, b) => a.localeCompare(b, "en")); // uses collation rules`,
      caption: { en: 'The || in the two-level comparator is the idiom: 0 means “fall through to the next key”.', bn: 'দুই-স্তরের comparator-এ ||-ইি: ০ মানে “পরের key-এ নামুন”।' },
    },
    {
      type: 'callout',
      kind: 'info',
      title: { en: 'What “stable” buys you', bn: 'stable যা কিনে দেয়' },
      text: { en: 'Sorting by name and then by score gives ties in score alphabetical order — two cheap sorts instead of one fiddly comparator. Sort the least important key first, the most important last.', bn: 'আগে নাম দিয়ে, তারপর score দিয়ে সাজালে score-এর টাই-গুলো বর্ণানুক্রমে থাকে — একটি ঝামেলা comparator-এর বদলে দুটি সহজ sort। কম গুরুত্বের key আগে, বেশি গুরুত্বেরটা শেষে।' },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'comparator',
          def: { en: 'Returns <0 if a should precede b, 0 for tie, >0 to swap.', bn: 'a আগে গেলে <0, সমানে 0, অদলবদলে >0 ফেরত।' },
        },
        {
          term: 'mutating sort',
          def: { en: 'sort() and reverse() change the array and return the same reference.', bn: 'sort() ও reverse() array বদলে সেই reference ফেরত দেয়।' },
        },
        {
          term: 'toSorted / toReversed',
          def: { en: 'ES2023 copies: safe in React renders and shared state.', bn: 'ES2023 কপি: React render ও shared state-এ নিরাপদ।' },
        },
        {
          term: 'localeCompare',
          def: { en: 'Language-aware text order, including digits and accents.', bn: 'ভাষা-সচেতন লেখা ক্রম, সংখ্যা-অ্যাকসেন্টসহ।' },
        },
        {
          term: 'key function',
          def: { en: 'Sort by a derived value: items.sort((a, b) => score(a) - score(b)).', bn: 'ব্যুত্পন্ন মান দিয়ে সাজান: items.sort((a, b) => score(a) - score(b))।' },
        },
      ],
    },
    {
      type: 'heading',
      id: 'mechanics',
      text: { en: 'HOW it runs — stage by stage', bn: 'কীভাবে চলে — ধাপে ধাপে' },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: '1. Copy or not', bn: '১. কপি নাকি না' },
          text: { en: 'Need the original? toSorted(...) or [...a].sort(...).', bn: 'আসল লাগবে? toSorted(...) বা [...a].sort(...)।' },
        },
        {
          title: { en: '2. Write the sign', bn: '২. চিহ্ন লিখুন' },
          text: { en: 'a.x - b.x ascending, b.x - a.x descending — never return true/false.', bn: 'a.x - b.x ঊর্ধ্ব, b.x - a.x নিম্ন — কখনো true/false ফেরত নয়।' },
        },
        {
          title: { en: '3. Tie-break with ||', bn: '৩. টাই-ভাঙুন || দিয়ে' },
          text: { en: 'Subtract the primary keys; when that difference is 0 the || moves on to the secondary key.', bn: 'প্রথম কী দুটি বিয়োগ করুন; তফাত ০ হলে || দ্বিতীয় কীতে নিয়ে যায় — secondary.localeCompare(secondary)।' },
        },
        {
          title: { en: '4. Confirm stability', bn: '৪. stable কিনা নিশ্চিত হন' },
          text: { en: 'Every modern engine is stable; for equal keys, insertion order survives.', bn: 'আধুনিক engine সবাই stable; সমান key-তে ঢোয়ার ক্রম থাকে।' },
        },
      ],
    },
    {
      type: 'visual',
      id: 'dsa',
      scenario: 'watch swaps happen while the comparator returns -1, 0 or 1',
    },
    {
      type: 'heading',
      id: 'try',
      text: { en: 'TRY IT — edit and watch', bn: 'চেষ্টা করুন — বদলে দেখুন' },
    },
    {
      type: 'tryit',
      title: { en: 'Comparator, by hand', bn: 'হাতে comparator' },
      html: '<pre id="out" style="font:14px/1.7 ui-monospace,monospace"></pre>',
      js: 'const ns = [30, 100, 9];\nconst textOrder = ns.slice().sort();                       // no comparator\nconst numOrder = ns.slice().sort((a, b) => a - b);            // ascending\nconst desc = ns.slice().sort((a, b) => b - a);                // descending\n\ndocument.getElementById("out").textContent =\n  "text: " + textOrder.join(", ") + "\\n" +\n  "asc:  " + numOrder.join(", ") + "\\n" +\n  "desc: " + desc.join(", ");',
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Sorting numbers without a comparator', bn: 'comparator ছাড়া সংখ্যা সাজানো' },
      text: { en: 'a.sort() turns [30, 100, 9] into [100, 30, 9] — text order. It also returns the array, so a = b.sort() makes a and b the same block.', bn: 'a.sort() [30, 100, 9]-কে [100, 30, 9] করে — লেখা-ক্রম। এটি array-টাই ফেরত দেয়, তাই a = b.sort() লিখলে a আর b একই block।' },
    },
  ],
  exercises: [
    {
      id: 'sort-and-order-ex1',
      kind: 'fill',
      topic: 'arrays: Sorting and Order',
      question: { en: 'Write the comparator that sorts nums from largest to smallest.', bn: 'nums-কে বড় থেকে ছোট সাজানোর comparator লিখুন।' },
      answer: '(a, b) => b - a',
      accept: [
        '(a, b) => b - a',
        'a, b => b - a',
        'function (a, b) { return b - a; }',
      ],
      hint: { en: 'Swap the subtraction.', bn: 'বিয়োগ উল্টে দিন।' },
      explanation: { en: 'Returning a positive number when a is smaller tells the engine to move b first, which produces descending order.', bn: 'a ছোট হলে ধনাত্মক সংখ্যা ফেরত দিলে engine b-কে আগে নামায় — ফল নিম্নক্রম।' },
    },
    {
      id: 'sort-and-order-ex2',
      kind: 'predict',
      topic: 'arrays: Sorting and Order',
      question: { en: 'What does the log print?', bn: 'log কী ছেপে?' },
      code: `const a = [2, 1, "10"];
const s = a.sort();
console.log(s.join(","));`,
      answer: '1,10,2',
      accept: [
        '1,10,2',
        '"1,10,2"',
      ],
      hint: { en: 'Everything becomes text first.', bn: 'আগে সব লেখায় বদলায়।' },
      explanation: { en: 'sort compares "2", "1", "10" as strings: "1" < "10" < "2".', bn: 'sort "2", "1", "10" লেখা হিসেবে তুলনা করে: "1" < "10" < "2"।' },
    },
    {
      id: 'sort-and-order-ex3',
      kind: 'predict',
      topic: 'arrays: Sorting and Order',
      question: { en: 'What prints?', bn: 'কী ছাপা হয়?' },
      code: `const a = [3, 1, 2];
const b = a.sort();
console.log(a === b);`,
      answer: 'true',
      accept: [
        'true',
      ],
      hint: { en: 'What does sort return?', bn: 'sort কী ফেরত দেয় ভাবুন।' },
      explanation: { en: 'sort returns the same array it mutated, so b and a are one and the same block: === is true.', bn: 'sort বদলানো array-টাই সেই reference ফেরত দেয়, তাই a আর b একই block: === true।' },
    },
  ],
  quiz: {
    id: 'sort-and-order-quiz',
    title: { en: 'Quiz — Sorting and Order', bn: 'কুইজ — সাজানো ক্রম' },
    questions: [
      {
        id: 'sort-and-order-q1',
        kind: 'mcq',
        topic: 'arrays: Sorting and Order',
        question: { en: 'What exactly does a.sort() return?', bn: 'sort() ফেরত দেয়…' },
        options: [
          { en: 'a new sorted array', bn: 'সাজানো নতুন array' },
          { en: 'the same array, sorted in place', bn: 'একই array, জায়গাতেই সাজানো' },
          { en: 'undefined', bn: 'undefined' },
          { en: 'the first swapped index', bn: 'প্রথম বদলানো index' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'It returns the mutated receiver — the same reference — which is why chaining a.sort().reverse() works and why the original is gone.', bn: 'এটি বদলানো receiver-টাই সেই reference ফেরত দেয় — তাই a.sort().reverse() চলে, আর আসল ক্রম হারায়।' },
      },
      {
        id: 'sort-and-order-q2',
        kind: 'mcq',
        topic: 'arrays: Sorting and Order',
        question: { en: 'Comparator returning 0 means…', bn: 'comparator 0 দিলে মানে…' },
        options: [
          { en: 'throw', bn: 'throw' },
          { en: 'keep current order (tie)', bn: 'keep current order (tie)' },
          { en: 'move a to the end', bn: 'a-কে শেষে পাঠায়' },
          { en: 'stop sorting', bn: 'stop sorting' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: '0 declares the pair equal; with a stable algorithm their original order is preserved.', bn: '0 জোড়াকে সমান ঘোষণা করে; stable অ্যালগরিদমে আগের ক্রম থেকে যায়।' },
      },
      {
        id: 'sort-and-order-q3',
        kind: 'mcq',
        topic: 'arrays: Sorting and Order',
        question: { en: 'Sort objects by price then name — which one?', bn: 'price তারপর নামে object সাজান — কোনটি?' },
        options: [
          {
            en: '(a, b) => a.price - b.price || a.name.localeCompare(b.name)',
            bn: '(a, b) => a.price - b.price || a.name.localeCompare(b.name)',
          },
          { en: '(a, b) => a.price + b.price', bn: '(a, b) => a.price + b.price' },
          { en: 'a.price - b.price', bn: 'a.price - b.price' },
          { en: '(a, b) => a.name - b.name', bn: '(a, b) => a.name - b.name' },
        ],
        answer: 0,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'The subtraction answers the primary key, and || falls through to the text comparison only when prices tie.', bn: 'বিয়োগ primary key-এর উত্তর দেয়, দাম সমান হলে || তখন লেখা তুলনায় নামে।' },
      },
      {
        id: 'sort-and-order-q4',
        kind: 'mcq',
        topic: 'arrays: Sorting and Order',
        question: { en: 'toSorted() differs from sort() because it…', bn: 'toSorted()sort() থেকে আলাদা কেন?' },
        options: [
          { en: 'sorts a copy and returns it', bn: 'কপি সাজিয়ে সেটি ফেরত দেয়' },
          { en: 'sorts twice', bn: 'sorts twice' },
          { en: 'requires no comparator', bn: 'কোনো comparator লাগে না' },
          { en: 'only sorts numbers', bn: 'শুধু সংখ্যা সাজায়' },
        ],
        answer: 0,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'ES2023 added toSorted/toReversed as the non-mutating twins — safe when other code still holds the original array.', bn: 'ES2023-এ toSorted/toReversed বিনা-বদলের জুটি — অন্য কোড আসল array ধরে রাখলে এটিই নিরাপদ।' },
      },
    ],
  },
  nextLesson: {
    slug: 'arrays-in-memory',
    tech: 'arrays',
    title: { en: 'Arrays in Memory and in the Wild', bn: 'memory-তে আর বাইরে অ্যারে' },
  },
};
