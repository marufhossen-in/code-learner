import type { Lesson } from '../../../lib/types';

export const IndexesLengthAndHolesLesson: Lesson = {
  slug: 'indexes-length-and-holes',
  tech: 'arrays',
  title: { en: 'Indexes, Length and Holes', bn: 'index, length আর ফাঁকা' },
  summary: { en: 'length is one past the highest index, not a count of filled slots — and that gap explains holes, sparse arrays, arr.at(-1), and why a loop must stop at length - 1.', bn: 'length সবচেয়ে বড় index-এর এক বেশি, ভরা বাক্সের গণনা নয় — এই এক ধাপ তফাতেই বোঝা যায় hole, sparse array, arr.at(-1), আর loop কেন length - 1 পর্যন্ত চলবে।' },
  minutes: 11,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Indexes, Length and Holes', bn: 'WHAT — index, length আর ফাঁকা' },
    },
    {
      type: 'para',
      text: { en: 'Two ways to make a hole. Either write far ahead — const a = []; a[4] = "x" leaves slots 0..3 empty and length is 5 — or use the Array constructor: new Array(5) has length 5 with five holes. Holes are not undefined slots: undefined is a value, a hole is the absence of one. forEach(), filter(), reduce() and some() skip holes; map() copies them straight over; index reads give undefined either way, which is why “no error” is not proof that data exists.', bn: 'ফাঁকা বানানোর ২টি উপায়। হয় বহু এগিয়ে লিখুন — const a = []; a[4] = "x" হলে ০..৩ ফাঁকা, length ৫ — নয় Array constructor: new Array(5) এ length ৫, ৫টি ফাঁকা। ফাঁকা বাক্স আর undefined সমান জিনিস নয়: undefined ১টি মান, ফাঁকা মানে মানের অনুপস্থিতি। forEach, filter, reduce, some ফাঁকা এড়িয়ে যায়; map ফাঁকা হুবহু কপি করে; index এ পড়লে দুটোতেই undefined — তাই “error আসেনি” মানেই তথ্য আছে নয়।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'length - 1 is the only safe last index; hard-coding 2 breaks the moment someone adds a fruit.',
          bn: 'নিরাপদ শেষ index শুধু length - 1; ২ লিখে দিলেই কেউ একটি ফল যোগ করলে ভাঙবে।',
        },
        {
          en: 'Sparse arrays keep the numbering but leave nothing in a slot — map and forEach treat those slots differently.',
          bn: 'sparse array সংখ্যা রাখে, বাক্স ফাঁকা রাখে — map আর forEach এই দুটোকে আলাদা চোখে দেখে।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'holes.js',
      code: `const a = [];
a[4] = "x";
console.log(a.length);            // 5  — highest index + 1
console.log(a);                   // [ <4 empty items>, "x" ]

a.forEach((v, i) => console.log("seen", i));   // prints nothing: holes are skipped
a.map(() => 1);                  // [ <4 empty items>, 1 ] — holes copied as holes

const dense = [undefined, undefined, undefined, undefined, "x"];
console.log(dense.filter(() => true).length);  // 5 — forEach/map would visit these

console.log(a.at(-1), a.at(-4));   // "x", undefined — at() counts from the end`,
      caption: { en: 'The same undefined at index 3, produced two ways, is visited in one array and skipped in the other.', bn: 'index ৩ এ একই undefined দুই উপায়ে তৈরি, ১টি array-তে এটি দেখা যায়, অন্যটিতে এড়িয়ে যাওয়া হয়।' },
    },
    {
      type: 'table',
      head: [
        { en: 'You write', bn: 'যা লেখেন' },
        { en: 'length', bn: 'length' },
        { en: 'slot 2', bn: 'slot 2' },
        { en: 'visited by forEach?', bn: 'forEach দেখে?' },
      ],
      rows: [
        [
          { en: '[1, 2, 3]', bn: '[1, 2, 3]' },
          { en: '3', bn: '3' },
          { en: '3', bn: '3' },
          { en: 'yes', bn: 'হ্যাঁ' },
        ],
        [
          { en: 'new Array(3)', bn: 'new Array(3)' },
          { en: '3', bn: '3' },
          { en: 'hole', bn: 'ফাঁকা' },
          { en: 'no', bn: 'না' },
        ],
        [
          { en: '[1, 2, undefined]', bn: '[1, 2, undefined]' },
          { en: '3', bn: '3' },
          { en: 'undefined', bn: 'undefined' },
          { en: 'yes', bn: 'হ্যাঁ' },
        ],
        [
          { en: '[, , 3]', bn: '[, , 3]' },
          { en: '3', bn: '3' },
          { en: '3', bn: '3' },
          { en: 'no', bn: 'না' },
        ],
      ],
      caption: { en: 'Length counts the numbering, not the contents. Only a real value is visited.', bn: 'length সংখ্যা গনে, বিষয়বস্তু নয়। আসল মান থাকলেই তা দেখা যায়।' },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'length',
          def: { en: 'highest index + 1. Writing arr.length = 2 truncates; length is settable.', bn: 'সবচেয়ে বড় index + 1। arr.length = 2 লিখলে কেটে ছোট হয়; length লেখা যায়।' },
        },
        {
          term: 'hole',
          def: { en: 'A slot the array has no value for at all.', bn: 'যে বাক্সে মান বলতে কিছুই নেই।' },
        },
        {
          term: 'sparse',
          def: { en: 'An array with holes. Legal, slow to reason about, and rarely what you meant.', bn: 'যে array-তে ফাঁকা আছে। বৈধ, বোঝা ঝামেলা, প্রায়ই উদ্দেশ্য নয়।' },
        },
        {
          term: 'at(n)',
          def: { en: 'Indexing that accepts negatives: at(-1) is the last slot.', bn: 'ঋণাত্মক সংখ্যাও চলে: at(-1) শেষ বাক্স।' },
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
          title: { en: '1. Ask for length', bn: '১. length জিজ্ঞেস করুন' },
          text: { en: 'One past the highest index you have touched.', bn: 'যে সবচেয়ে বড় index ছুঁয়েছেন, তার এক পরে।' },
        },
        {
          title: { en: '2. Loop to length - 1', bn: '২. length - 1 পর্যন্ত চালান' },
          text: { en: 'for (let i = 0; i < a.length; i++) — < not <=.', bn: 'for (let i = 0; i < a.length; i++) — <= নয়, <।' },
        },
        {
          title: { en: '3. Fill before you transform', bn: '৩. transform-এর আগে ভরুন' },
          text: { en: 'a.fill(undefined) turns holes into values so map/filter see them.', bn: 'a.fill(undefined) ফাঁকাকে মান বানায়, তখন map/filter দেখে।' },
        },
        {
          title: { en: '4. Trim with length', bn: '৪. length দিয়ে ছাঁটুন' },
          text: { en: 'a.length = 3 drops everything from index 3 on, in place.', bn: 'a.length = 3 index 3 থেকে সব ফেলে দেয়, জায়গাতেই।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Indexes, Length and Holes: the moving parts', bn: 'index, length আর ফাঁকা: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Indexes, Length and Holes">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Ask for length</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">One past the highest index you have touched.</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Loop to length - 1</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">for (let i = 0; i &lt; a.length; i++) — &lt; not &lt;=.</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Fill before you transform</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">a.fill(undefined) turns holes into values so</text>
<text x="352" y="223" font-size="11" fill="currentColor">map/filter see them.</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Trim with length</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">a.length = 3 drops everything from index 3 on,</text>
<text x="352" y="295" font-size="11" fill="currentColor">in place.</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">length is one past the highest index, not a count of filled slots — and that gap explains holes…</text>
</svg>`,
      caption: { en: 'length is one past the highest index, not a count of filled slots — and that gap explains holes, sparse arrays, arr.at(-1), and why a loop must stop at length - 1.', bn: 'length সবচেয়ে বড় index-এর এক বেশি, ভরা বাক্সের গণনা নয় — এই এক ধাপ তফাতেই বোঝা যায় hole, sparse array, arr.at(-1), আর loop কেন length - 1 পর্যন্ত চলবে।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'for (i = 0; i <= a.length; i++)', bn: 'for (i = 0; i <= a.length; i++)' },
      text: { en: 'The last pass reads index length — always undefined — and a filter or reduce on that iteration invents a value that was never in the array. Use <.', bn: 'শেষবারে index length পড়া হয় — সবসময় undefined — আর সেই ধাপে filter/reduce এমন মান গড়ে বসায় যা array-তে ছিলই না। < ব্যবহার করুন।' },
    },
  ],
  exercises: [
    {
      id: 'indexes-length-and-holes-ex1',
      kind: 'predict',
      topic: 'arrays: Indexes, Length and Holes',
      question: { en: 'What is the length printed?', bn: 'কোন length ছাপা হয়?' },
      code: `const b = [7, 8];
b[5] = 99;
console.log(b.length);`,
      answer: '6',
      accept: [
        '6',
      ],
      hint: { en: 'highest index + 1.', bn: 'সবচেয়ে বড় index + ১।' },
      explanation: { en: 'b[5] makes 5 the highest index, so length becomes 6 — slots 2..4 are holes.', bn: 'b[5] লিখলে বড়তম index ৫, তাই length ৬ — slot ২..৪ ফাঁকা।' },
    },
    {
      id: 'indexes-length-and-holes-ex2',
      kind: 'mcq',
      topic: 'arrays: Indexes, Length and Holes',
      question: { en: 'Which array will forEach visit in every slot?', bn: 'কোন array-র সব বাক্স forEach দেখবে?' },
      options: [
        { en: 'new Array(3)', bn: 'new Array(3)' },
        { en: '[1, , 3]', bn: '[1, , 3]' },
        { en: '[undefined, undefined, undefined]', bn: '[undefined, undefined, undefined]' },
        { en: '[ , , ,]', bn: '[ , , ,]' },
      ],
      answer: 2,
      hint: { en: 'Holes are skipped; values are not.', bn: 'ফাঁকা এড়িয়ে যায়, মান নয়।' },
      explanation: { en: 'Only the third has a real value (undefined) in each slot; the others contain holes.', bn: 'তৃতীয়টিতে প্রতিটি বাক্সে আসল মান (undefined) আছে; বাকিগুলোতে ফাঁকা।' },
    },
    {
      id: 'indexes-length-and-holes-ex3',
      kind: 'mcq',
      topic: 'arrays: Indexes, Length and Holes',
      question: { en: 'How many slots does the walk visit?', bn: 'হাঁটায় কয়টি বাক্স দেখা যায়?' },
      code: `const a = [1, , 3];
let seen = 0;
a.forEach(() => seen++);
console.log(seen);`,
      options: [
        { en: '2 — the two filled slots', bn: '২ — যে দুটি বাক্সে মান আছে' },
        { en: '3 — every slot', bn: '3 — every slot' },
        { en: '1 — only the first', bn: '১ — শুধু প্রথমটি' },
        { en: '0', bn: '0' },
      ],
      answer: 0,
      hint: { en: 'One slot is a hole, not a value.', bn: 'একটি বাক্স ফাঁকা, মান নয়।' },
      explanation: { en: 'forEach skips holes, so indices 0 and 2 are visited: seen is 2.', bn: 'forEach ফাঁকা এড়ায়, তাই index ০ ও ২ দেখা হয়: seen = ২।' },
    },
  ],
  quiz: {
    id: 'indexes-length-and-holes-quiz',
    title: { en: 'Quiz — Indexes, Length and Holes', bn: 'কুইজ — index, length আর ফাঁকা' },
    questions: [
      {
        id: 'indexes-length-and-holes-q1',
        kind: 'mcq',
        topic: 'arrays: Indexes, Length and Holes',
        question: { en: 'Safe last index of array a?', bn: 'array a-র নিরাপদ শেষ index?' },
        options: [
          { en: 'a.length', bn: 'a.length' },
          { en: 'a.length - 1', bn: 'a.length - 1' },
          { en: 'a.lastIndex', bn: 'a.lastIndex' },
          { en: 'a.length + 1', bn: 'a.length + 1' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Indexing starts at 0 and length is one past the end, so length - 1 is the last real slot.', bn: 'index ০ থেকে, length শেষের এক পরে, তাই length - ১ আসল শেষ বাক্স।' },
      },
      {
        id: 'indexes-length-and-holes-q2',
        kind: 'mcq',
        topic: 'arrays: Indexes, Length and Holes',
        question: { en: 'What does a.at(-2) give you on a three-item array?', bn: 'a.at(-2) মানে কী?' },
        options: [
          { en: 'index -2, which throws', bn: 'index -২, এটি throw করবে' },
          { en: 'second from the end', bn: 'শেষ থেকে দ্বিতীয় বাক্সটি' },
          { en: 'slice off two elements', bn: 'দুটি উপাদান কেটে ফেলে' },
          { en: 'the last two elements', bn: 'শেষের দুটি উপাদান' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'at() accepts negative indexes and counts from the end; at(-2) is the second-to-last slot.', bn: 'at() ঋণাত্মক নেয়, পেছন থেকে গনে; at(-2) শেষের আগের বাক্স।' },
      },
      {
        id: 'indexes-length-and-holes-q3',
        kind: 'mcq',
        topic: 'arrays: Indexes, Length and Holes',
        question: { en: 'Setting a.length = 0 does what?', bn: 'a.length = 0 করলে কী হয়?' },
        options: [
          { en: 'Throws', bn: 'Throws' },
          { en: 'Frees the slots: empties the array in place', bn: 'বাক্সগুলো খালি করে: একই array-তে সব মুছে দেয়' },
          { en: 'Copies the array', bn: 'array-এর কপি বানায়' },
          { en: 'Deletes the variable', bn: 'variable-টিই মুছে ফেলে' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'length is a setter. Shrinking it to 0 removes every element without creating a new array, so other references see the same emptied array.', bn: 'length একটি setter। ০ করলে নতুন array না বানিয়েই সব উপাদান মুছে যায়, তাই অন্য reference-ও একই খালি array দেখে।' },
      },
      {
        id: 'indexes-length-and-holes-q4',
        kind: 'mcq',
        topic: 'arrays: Indexes, Length and Holes',
        question: { en: 'What does new Array(2).fill(0) produce?', bn: 'new Array(2).fill(0) কী বানায়?' },
        options: [
          { en: '[0, 0]', bn: '[0, 0]' },
          { en: 'two holes', bn: 'two holes' },
          { en: '[undefined]', bn: '[undefined]' },
          { en: 'a length of 0', bn: 'a length of 0' },
        ],
        answer: 0,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'fill writes a real value into every slot, which also makes the holes visible to forEach/map.', bn: 'fill প্রতিটি বাক্সে আসল মান লেখে, ফাঁকা-ও তখন forEach/map-এ ধরা পড়ে।' },
      },
    ],
  },
  nextLesson: { slug: 'add-remove-and-mutate', tech: 'arrays', title: { en: 'Adding and Removing', bn: 'যোগ আর বিয়োগ' } },
};
