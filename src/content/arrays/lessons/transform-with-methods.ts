import type { Lesson } from '../../../lib/types';

export const TransformWithMethodsLesson: Lesson = {
  slug: 'transform-with-methods',
  tech: 'arrays',
  title: { en: 'map, filter, reduce', bn: 'ম্যাপ, ফিল্টার, রিডিউস' },
  summary: { en: 'The three transforms that replace most hand-written loops, their exact return contracts, and the reduce accumulator mistake that silently produces [NaN].', bn: 'তিনটি transform যেখানে প্রায় সব হাতে-লেখা loop বদলে যায়, তাদের ফেরতের চুক্তি, আর reduce-এর যে ভুলে চুপ করে [NaN] তৈরি হয়।' },
  minutes: 14,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — map, filter, reduce', bn: 'WHAT — ম্যাপ, ফিল্টার, রিডিউস' },
    },
    {
      type: 'para',
      text: { en: 'The list holds prices, and what you need to show them is the same list with tax added. The old answer was a loop, a new array and a push. map, filter and reduce are that loop, named — one line each, and they never touch the array you started with.', bn: 'তালিকাতে দামগুলো আছে, আর দেখানোর জন্য দরকার সেই তালিকাতেই কর যোগ করা সংস্করণ। পুরনো জবাব ছিল loop, একটা নতুন array আর push। map, filter, reduce — ওই loop-এর নাম দেওয়া রূপ, একটি লাইন করে, আর যেখান থেকে শুরু সেটিকে ছোঁয়ই না।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'map always returns the same number of elements — one result per slot, even when your callback returns undefined.',
          bn: 'map সবাই-সময় সমান সংখ্যক উপাদান ফেরত দেয় — বাক্স-প্রতি একটি ফল, callback undefined দিলেও।',
        },
        {
          en: 'filter keeps an element when the callback is truthy, and keeps order.',
          bn: 'filter ট্রুই হলে উপাদান রাখে, ক্রমও রাখে।',
        },
        {
          en: 'reduce is the only one whose return type you invent: number, object, array, Map — anything.',
          bn: 'reduce-ই ফেরতের ধরন আপনি বেছে নেন: সংখ্যা, object, array, Map — যেকিছু।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'transform.js',
      code: `const orders = [
  { id: 1, qty: 3, price: 9.5 },
  { id: 2, qty: 1, price: 40 },
  { id: 3, qty: 4, price: 2 },
];

const totals = orders.map(o => o.qty * o.price);       // [28.5, 40, 8]
const big = orders.filter(o => o.qty >= 3);             // orders 1 and 3
const grand = totals.reduce((sum, t) => sum + t, 0);          // 76.5
const byId = orders.reduce((m, o) => (m[o.id] = o, m), {}); // {1:{...},2:{...},3:{...}}

// the classic bug: no initial value on a list of strings
const names = ["ana", "bo", "cy"];
const joined = names.reduce((a, b) => a + b);           // "anabo" — first pair is ("ana","bo")
const wrong = names.reduce((a, b) => a + b.length, 0);   // 0+3, +2, +2 = 7
const oops = names.reduce((a, b) => a + b.length);       // "ana" + 2 -> "ana2" + 2 -> "ana22"`,
      caption: { en: 'Give reduce a seed whenever the answer type differs from the element type. Here the missing 0 turns a sum into string glue.', bn: 'ফলের ধরন উপাদানের ধরন থেকে আলাদা হলে reduce-কে বীজ দিন। এখানে ০ না-দিলে যোগ লেখা-জোড়া হয়ে যায়।' },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'callback',
          def: { en: 'The function you hand to the method: (value, index, array) => …', bn: 'যে function টি method-এ হাতে দেন: (value, index, array) => …' },
        },
        {
          term: 'accumulator',
          def: { en: 'reduce’s running result; the seed is the 2nd argument.', bn: 'reduce-এর চলমান ফল; বীজ হলো দ্বিতীয় argument।' },
        },
        {
          term: 'truthy test',
          def: { en: 'filter keeps anything whose callback is not 0, "", null, undefined, false or NaN.', bn: 'filter যা-ই থাকুক ট্রুই-কে রাখে: ০, "", null, undefined, false, NaN বাদে।' },
        },
        {
          term: 'chain',
          def: { en: 'orders.filter(...).map(...) — reads top-down, allocates one array per link.', bn: 'orders.filter(...).map(...) — উপর থেকে নিচে পড়া যায়, প্রতি ঘরে একটি array বানায়।' },
        },
      ],
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Chains are not free', bn: 'চেইন বিনামূল্যে নয়' },
      text: { en: 'filter().map().reduce() on a 1M-row list walks memory three times and builds two temporary arrays. For hot paths, one reduce, or a plain loop, is faster — measure before you argue.', bn: '১M সারির list-এ filter().map().reduce() তিনবার memory হাঁটে, দুটি সাময়িক array বানায়। গরম পথে একটি reduce, বা সাধারণ loop দ্রুত — আগে মেপে নিন, তারপর মত দিন।' },
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
          title: { en: '1. Shape the answer', bn: '১. উত্তরের গড়ন ঠিক করুন' },
          text: { en: 'Same count → map. Fewer → filter. One thing → reduce.', bn: 'সমান সংখ্যা → map। কম → filter। একটি জিনিস → reduce।' },
        },
        {
          title: { en: '2. Seed the reduce', bn: '২. reduce-এ বীজ দিন' },
          text: { en: 'reduce(fn, 0) for sums, reduce(fn, {}) for indexes, reduce(fn, []) for builds.', bn: 'যোগে reduce(fn, 0), index-এ reduce(fn, {}), গড়তে reduce(fn, [])।' },
        },
        {
          title: { en: '3. Keep it pure', bn: '৩. শুদ্ধ রাখুন' },
          text: { en: 'A map/filter callback that mutates an outer array is a loop with extra steps — that is a smell, not style.', bn: 'map/filter callback বাইরের array বদলে দিলে সেটা অপ্রয়োজনীয় loop মাত্র — এটা স্টাইল নয়, গন্ধ।' },
        },
        {
          title: { en: '4. Chain then name', bn: '৪. চেইন করে নাম দিন' },
          text: { en: 'const bigTotals = orders.filter(...).map(...) — a name is documentation, and it is testable.', bn: 'const bigTotals = orders.filter(...).map(...) — নামই নথি, আর যাচাইও করা যায়।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'map, filter, reduce: the moving parts', bn: 'ম্যাপ, ফিল্টার, রিডিউস: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="map, filter, reduce">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Shape the answer</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">Same count → map. Fewer → filter. One thing →</text>
<text x="352" y="79" font-size="11" fill="currentColor">reduce.</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Seed the reduce</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">reduce(fn, 0) for sums, reduce(fn, {}) for</text>
<text x="352" y="151" font-size="11" fill="currentColor">indexes, reduce(fn, []) for builds.</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Keep it pure</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">A map/filter callback that mutates an outer</text>
<text x="352" y="223" font-size="11" fill="currentColor">array is a loop with extra steps — that is a …</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Chain then name</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">const bigTotals = orders.filter(...).map(...)</text>
<text x="352" y="295" font-size="11" fill="currentColor">— a name is documentation, and it is testable.</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">map: 1-in 1-out. filter: 1-in 0-or-1-out. reduce: n-in 1-out. Pick by shape, not by fashion.</text>
</svg>`,
      caption: { en: 'map: 1-in 1-out. filter: 1-in 0-or-1-out. reduce: n-in 1-out. Pick by shape, not by fashion.', bn: 'map: একে-অনেক। filter: একে-শূন্য-বা-এক। reduce: অনেককে-এক। কোনটি নেবেন তা পদ্ধতি দেখে ঠিক করবেন, অভ্যাস দেখে নয়।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'map: 1-in 1-out. filter: 1-in 0-or-1-out. reduce: n-in 1-out. Pick by shape, not by fashion.', bn: 'map: একে-অনেক। filter: একে-শূন্য-বা-এক। reduce: অনেককে-এক। কোনটি নেবেন তা পদ্ধতি দেখে ঠিক করবেন, অভ্যাস দেখে নয়।' },
    },
  ],
  exercises: [
    {
      id: 'transform-with-methods-ex1',
      kind: 'fill',
      topic: 'arrays: map, filter, reduce',
      question: { en: 'Write the single method call that turns nums into their squares, as a new array.', bn: 'একটি method call লিখুন যা nums থেকে বর্গের নতুন array বানায়।' },
      code: `const nums = [1, 2, 3, 4];
const squares = /* your call */;`,
      answer: 'nums.map(n => n * n)',
      accept: [
        'nums.map(n => n * n)',
        'nums.map((n) => n * n)',
        'nums.map(n => n*n)',
        'nums.map(function (n) { return n * n; })',
      ],
      hint: { en: 'One result per element, returned.', bn: 'উপাদান-প্রতি একটি ফল, ফেরত দেওয়া।' },
      explanation: { en: 'map is the shape-preserving transform; forEach returns undefined and filter would drop elements.', bn: 'map আকার-রক্ষাকারী transform; forEach undefined দেয়, filter উপাদান ফেলে দেয়।' },
    },
    {
      id: 'transform-with-methods-ex2',
      kind: 'predict',
      topic: 'arrays: map, filter, reduce',
      question: { en: 'What is the result?', bn: 'ফল কী?' },
      code: `const r = [1, 2, 3].reduce((a, x) => a + x, 10);
console.log(r);`,
      answer: '16',
      accept: [
        '16',
      ],
      hint: { en: 'The seed is 10, not 1.', bn: 'এখানে seed ১০, ১ নয়।' },
      explanation: { en: 'The seed starts the accumulator at 10, so the walk is 10+1, then 11+2, then 13+3, which leaves 16.', bn: 'seed accumulator-টি ১০ নিয়ে শুরু করে, তাই ধাপগুলো ১০+১, তারপর ১১+২, তারপর ১৩+৩ — শেষে ১৬।' },
    },
    {
      id: 'transform-with-methods-ex3',
      kind: 'mcq',
      topic: 'arrays: map, filter, reduce',
      question: { en: 'What does this expression evaluate to?', bn: 'এই expression-টির ফল কী?' },
      code: `console.log([1, 2].map((x) => x * 2));`,
      options: [
        { en: '[2, 4]', bn: '[2, 4]' },
        { en: '[1, 2]', bn: '[1, 2]' },
        { en: '4', bn: '4' },
        { en: 'undefined', bn: 'undefined' },
      ],
      answer: 0,
      hint: { en: 'map always returns a new array.', bn: 'map সবসময় নতুন array ফেরত দেয়।' },
      explanation: { en: 'map replaces each element with the callback result and returns the new array; forEach would return undefined.', bn: 'map প্রতিটি উপাদানের জায়গায় callback-এর ফল বসিয়ে নতুন array ফেরত দেয়; forEach হলে undefined আসত।' },
    },
  ],
  quiz: {
    id: 'transform-with-methods-quiz',
    title: { en: 'Quiz — map, filter, reduce', bn: 'কুইজ — ম্যাপ, ফিল্টার, রিডিউস' },
    questions: [
      {
        id: 'transform-with-methods-q1',
        kind: 'mcq',
        topic: 'arrays: map, filter, reduce',
        question: { en: 'What does map return when a callback returns undefined for one item?', bn: 'একটি item-এ callback undefined দিলে map কী ফেরত দেয়?' },
        options: [
          { en: 'The array without that item', bn: 'সেই item বাদ দিয়ে নতুন array' },
          { en: 'undefined', bn: 'undefined' },
          { en: 'An array with undefined in that position', bn: 'সেই জায়গায় undefined বসানো array' },
          { en: 'It throws', bn: 'It throws' },
        ],
        answer: 2,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'map is length-preserving: every slot gets whatever the callback returned, including undefined.', bn: 'map দৈর্ঘ্য-রক্ষী: প্রতিটি বাক্সে callback যা ফেরত দিয়েছে সেটি বসে, undefined হলেও।' },
      },
      {
        id: 'transform-with-methods-q2',
        kind: 'mcq',
        topic: 'arrays: map, filter, reduce',
        question: { en: 'reduce without a seed on a 1-element array…', bn: '১-উপাদান array-তে seed ছাড়া reduce…' },
        options: [
          { en: 'returns the element', bn: 'ওই উপাদানটি ফেরত দেয়' },
          { en: 'throws TypeError', bn: 'TypeError ছোঁড়ে' },
          { en: 'returns undefined', bn: 'undefined ফেরত দেয়' },
          { en: 'loops forever', bn: 'চিরকাল চলতে থাকে' },
        ],
        answer: 0,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'With no initial value, reduce takes element 0 as the accumulator and starts at index 1; one element means zero iterations, so it returns that element.', bn: 'প্রাথমিক মান না দিলে reduce উপাদান ০ কে accumulator ধরে index ১ থেকে শুরু করে; একটি উপাদান মানে শূন্য iteration, তাই সেই উপাদানই ফেরত।' },
      },
      {
        id: 'transform-with-methods-q3',
        kind: 'mcq',
        topic: 'arrays: map, filter, reduce',
        question: { en: 'reduce on an empty array with no seed?', bn: 'খালি array-তে seed ছাড়া reduce?' },
        options: [
          { en: '0', bn: '0' },
          { en: 'undefined', bn: 'undefined' },
          {
            en: 'TypeError: Reduce of empty array',
            bn: 'TypeError: Reduce of empty array — খালি array-তে seed না দিলে এই error-টাই ছোঁড়ে',
          },
          { en: '[]', bn: '[]' },
        ],
        answer: 2,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'There is nothing to seed it with, so the engine throws. Always pass a seed when the array can be empty.', bn: 'বীজ দেওয়ার মতো কিছু নেই, তাই throw হয়। array খালি হতে পারে তো বীজ দিন।' },
      },
      {
        id: 'transform-with-methods-q4',
        kind: 'mcq',
        topic: 'arrays: map, filter, reduce',
        question: { en: 'Which builds a lookup object from a list most directly?', bn: 'list থেকে lookup object সবচেয়ে সরাসরি কোনটি বানায়?' },
        options: [
          { en: 'list.map(...)', bn: 'list.map(...)' },
          { en: 'list.filter(...)', bn: 'list.filter(...)' },
          { en: 'list.reduce((m, x) => (m[x.id] = x, m), {})', bn: 'list.reduce((m, x) => (m[x.id] = x, m), {})' },
          { en: 'list.some(...)', bn: 'list.some(...)' },
        ],
        answer: 2,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'A lookup keyed by id is an object, and only reduce can return one; the seed {} is what makes it an object build instead of a number sum.', bn: 'id দিয়ে key করা lookup একটি object, আর object শুধু reduce-ই ফেরত দিতে পারে; বীজ {}-ই এটি-সংখ্যা-যোগ না হয়ে object গড়া বানায়।' },
      },
      {
        id: 'transform-with-methods-q5',
        kind: 'mcq',
        topic: 'arrays: map, filter, reduce',
        question: { en: 'reduce((a, b) => a + b) with no seed on [5] returns?', bn: '[5]-এ seed ছাড়া reduce((a, b) => a + b)?' },
        options: [
          { en: '0', bn: '0' },
          { en: '5', bn: '5' },
          { en: 'NaN', bn: 'NaN' },
          { en: 'TypeError', bn: 'TypeError' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'With no initial value the first element becomes the accumulator and there is nothing left to add, so 5 comes back.', bn: 'প্রাথমিক মান না দিলে প্রথম উপাদানই accumulator হয়, যোগ করার বাকি কিছু নেই, তাই ৫ ফেরত।' },
      },
    ],
  },
  nextLesson: { slug: 'find-and-test', tech: 'arrays', title: { en: 'Finding and Testing', bn: 'খোঁজা যাচাই' } },
};
