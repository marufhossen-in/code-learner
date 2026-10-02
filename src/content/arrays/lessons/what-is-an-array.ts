import type { Lesson } from '../../../lib/types';

export const WhatIsAnArrayLesson: Lesson = {
  slug: 'what-is-an-array',
  tech: 'arrays',
  title: { en: 'What an Array Is', bn: 'অ্যারে আসলে কী' },
  summary: { en: 'An array is an ordered, numbered run of slots held in one contiguous block. You will name the three properties that define it — order, index, length — and read them off a real array in the console.', bn: 'অ্যারে হলো একটানা memory block-এ রাখা ক্রমবদ্ধ, নম্বর দেওয়া বাক্সের সারি। এর তিনটি সংজ্ঞাকারী গুণ — order, index, length — console-এ সত্যিকারের array থেকে পড়ে দেখবেন।' },
  minutes: 9,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — What an Array Is', bn: 'WHAT — অ্যারে আসলে কী' },
    },
    {
      type: 'para',
      text: { en: 'Write const fruits = ["mango", "jackfruit", "banana"]; and the engine reserves one block of memory wide enough for three slots. Slot 0 holds "mango", slot 1 holds "jackfruit", slot 2 holds "banana". fruits.length is 3. The array does not care what a slot holds, and it never re-orders anything on its own — that is the whole contract. Because the block is contiguous, jumping to slot 2 costs one multiplication, not a walk from slot 0.', bn: 'const fruits = ["mango", "jackfruit", "banana"]; লিখলে engine তিনটি বাক্সের জন্য একটা memory block আলাদা রাখে। slot ০ নম্বরে "mango", slot ১ এ "jackfruit", slot ২ এ "banana"। fruits.length হলো ৩। বাক্সে কী আছে তা array দেখে না, আর সে নিজে থেকে ক্রমও বদলায় না — এটাই পুরো চুক্তি। block পাশাপাশি থাকায় slot ২ এ লাফ দিতে ১টি গুণ যথেষ্ট, slot ০ থেকে হেঁটে যেতে হয় না।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'Order is a promise, not an accident: [a, b] and [b, a] are different arrays.',
          bn: 'ক্রম আসলে প্রতিশ্রুতি, কাকতালীয় নয়: [a, b] আর [b, a] দুটি আলাদা array।',
        },
        {
          en: 'Indexes are dense — no holes in the numbering, even when a slot holds nothing.',
          bn: 'index ঘন থাকে — সংখ্যায় ফাঁক পড়ে না, বাক্স ফাঁকা থাকলেও।',
        },
        {
          en: 'Anything can live in a slot: numbers, strings, arrays, objects, functions — mixed freely.',
          bn: 'যেকোনো জিনিস বাক্সে থাকতে পারে: সংখ্যা, লেখা, array, object, function — একসাথে মিশিয়েও।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'first-array.js',
      code: `const fruits = ["mango", "jackfruit", "banana"];

console.log(fruits[0]);        // "mango"   — counting starts at 0
console.log(fruits[2]);        // "banana"  — the last slot is length - 1
console.log(fruits.length);    // 3
console.log(fruits[3]);        // undefined — nothing lives there, no error
fruits[3] = "lipthon";         // grow by writing the next free slot
console.log(Array.isArray(fruits)); // true`,
      caption: { en: 'Four reads, one write. Notice reading a missing slot gives undefined instead of throwing.', bn: 'চারটি পড়া, একটি লেখা। না-থাকা বাক্স পড়লে throw নয়, undefined আসে — সেদিকে খেয়াল রাখুন।' },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'element',
          def: { en: 'One value sitting in one slot: in ["mango", "jackfruit"], "jackfruit" is the second element.', bn: 'একটি বাক্সের একটি মান: ["mango", "jackfruit"]-এ "jackfruit" দ্বিতীয় element।' },
        },
        {
          term: 'index',
          def: { en: 'The slot number, starting at 0.', bn: 'বাক্সের নম্বর, ০ থেকে শুরু।' },
        },
        {
          term: 'length',
          def: { en: 'How many slots are in the run — arr.length. One more than the biggest index.', bn: 'কয়টি বাক্স — arr.length। সবচেয়ে বড় index-এর এক বেশি।' },
        },
        {
          term: 'contiguous',
          def: { en: 'Slots sit next to each other in memory, which is why any index reads instantly.', bn: 'বাক্সগুলো memory-তে পাশাপাশি, তাই যেকোনো index সঙ্গে সঙ্গে পড়া যায়।' },
        },
        {
          term: 'reference type',
          def: { en: 'Two arrays with equal contents are not === equal; they are two different blocks.', bn: 'একই বিষয়বস্তুর দুটি array === সমান নয়; দুটি আলাদা block।' },
        },
      ],
    },
    {
      type: 'compare',
      title: { en: 'Array literal vs. look-alikes', bn: 'Array literal বনাম দেখতে-somo' },
      left: {
        title: { en: 'Not what you think', bn: 'যা মনে করেন না' },
        points: [
          {
            en: 'typeof fruits === "object" — useless for spotting arrays.',
            bn: 'typeof fruits === "object" — array চেনায় না।',
          },
          {
            en: 'document.querySelectorAll("li") — array-shaped, no .map.',
            bn: 'document.querySelectorAll("li") — দেখতে array, .map নেই।',
          },
          {
            en: 'const a = []; a[10] = 1 → length jumps to 11 with nine empty holes.',
            bn: 'const a = []; a[10] = 1 → length ১১, মাঝে নয়টি ফাঁকা।',
          },
        ],
      },
      right: {
        title: { en: 'The real thing', bn: 'সত্যিকারেরটি' },
        points: [
          { en: 'Array.isArray(x) is true only for arrays.', bn: 'Array.isArray(x) সত্যি শুধু array-র জন্য।' },
          {
            en: 'x.map / x.forEach work only when x is an array (or you made one with Array.from).',
            bn: 'x.map / x.forEach চলে শুধু x array হলে (বা Array.from দিয়ে বানালে)।',
          },
          {
            en: 'x.length is a live number: write to a free slot and it grows.',
            bn: 'x.length জীবন্ত সংখ্যা: ফাঁকা বাক্সে লিখলে বেড়ে যায়।',
          },
        ],
      },
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
          title: { en: '1. Reserve the block', bn: '১. block আলাদা রাখুন' },
          text: { en: 'The literal lists slots in the order you typed them.', bn: 'literal আপনার লেখার ক্রমে বাক্সগুলো ঠিক করে।' },
        },
        {
          title: { en: '2. Name the array', bn: '২. নাম দিন' },
          text: { en: 'const stores a reference to that block, not a copy of it.', bn: 'const সেই block-এর reference ধরে রাখে, কপি নয়।' },
        },
        {
          title: { en: '3. Read by index', bn: '৩. index দিয়ে পড়ুন' },
          text: { en: 'start + index × slotSize — one calculation, any slot.', bn: 'start + index × slotSize — এক হিসাব, যেকোনো বাক্স।' },
        },
        {
          title: { en: '4. Check membership first', bn: '৪. আগে চেনা যায় কিনা দেখুন' },
          text: { en: 'Array.isArray before using .length, then handle undefined on a missing slot.', bn: '.length ব্যবহারের আগে Array.isArray, না-মিললে undefined সামলান।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'What an Array Is: the moving parts', bn: 'অ্যারে আসলে কী: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="What an Array Is">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Reserve the block</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">The literal lists slots in the order you typed</text>
<text x="352" y="79" font-size="11" fill="currentColor">them.</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Name the array</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">const stores a reference to that block, not a</text>
<text x="352" y="151" font-size="11" fill="currentColor">copy of it.</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Read by index</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">start + index × slotSize — one calculation,</text>
<text x="352" y="223" font-size="11" fill="currentColor">any slot.</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Check membership first</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">Array.isArray before using .length, then</text>
<text x="352" y="295" font-size="11" fill="currentColor">handle undefined on a missing slot.</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">Contiguous block + numbered slots = instant reads at any index. Everything else about arrays fo…</text>
</svg>`,
      caption: { en: 'Contiguous block + numbered slots = instant reads at any index. Everything else about arrays follows from that.', bn: 'পাশাপাশি block + নম্বর দেওয়া slot = যেকোনো index সঙ্গে সঙ্গে পড়া যায়। array-র বাকি সব কথা এখান থেকেই আসে।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'Contiguous block + numbered slots = instant reads at any index. Everything else about arrays follows from that.', bn: 'পাশাপাশি block + নম্বর দেওয়া slot = যেকোনো index সঙ্গে সঙ্গে পড়া যায়। array-র বাকি সব কথা এখান থেকেই আসে।' },
    },
    {
      type: 'heading',
      id: 'try',
      text: { en: 'TRY IT — edit and watch', bn: 'চেষ্টা করুন — বদলে দেখুন' },
    },
    {
      type: 'tryit',
      title: { en: 'Grow an array', bn: 'অ্যারে বড়াও' },
      html: '<pre id="out" style="font:14px/1.7 ui-monospace,monospace"></pre>',
      js: 'const fruits = ["mango", "jackfruit"];\nfruits.push("lipthon");            // try removing this line\nfruits[fruits.length] = "patal";  // the same trick, written longhand\n\ndocument.getElementById("out").textContent =\n  fruits.join(", ") + "  (length " + fruits.length + ")";',
    },
  ],
  exercises: [
    {
      id: 'what-is-an-array-ex1',
      kind: 'predict',
      topic: 'arrays: What an Array Is',
      question: { en: 'What does the second log print?', bn: 'দ্বিতীয় log কী ছেপে?' },
      code: `const a = [10, 20, 30];
console.log(a.length);
console.log(a[a.length - 1]);`,
      answer: '30',
      accept: [
        '30',
        '30 ',
        '"30"',
      ],
      hint: { en: 'length is 3, so length - 1 is 2.', bn: 'length ৩, তাই length - 1 হলো ২।' },
      explanation: { en: 'The last slot of a 3-element array is index 2, which holds 30.', bn: '৩ উপাদানের array-র শেষ বাক্স index 2, সেখানে ৩০।' },
    },
    {
      id: 'what-is-an-array-ex2',
      kind: 'mcq',
      topic: 'arrays: What an Array Is',
      question: { en: 'Which test tells you that x is an array?', bn: 'কোন চেক বলে দেবে x array?' },
      options: [
        { en: 'typeof x === "array"', bn: 'typeof x === "array"' },
        { en: 'Array.isArray(x)', bn: 'Array.isArray(x)' },
        { en: 'x instanceof Array === false', bn: 'x instanceof Array === false' },
        { en: 'x.type === "array"', bn: 'x.type === "array"' },
      ],
      answer: 1,
      hint: { en: 'typeof never answers "array".', bn: 'typeof কখনো "array" বলে না।' },
      explanation: { en: 'Array.isArray(x) is the only reliable one; typeof x is "object" for arrays, and instanceof breaks across frames/windows.', bn: 'Array.isArray(x)-ই নির্ভরযোগ্য; typeof-এর উত্তর "object", আর instanceof frame জুড়ে ভেঙে যায়।' },
    },
    {
      id: 'what-is-an-array-ex3',
      kind: 'mcq',
      topic: 'arrays: What an Array Is',
      question: { en: 'What does the log print?', bn: 'log কী ছেপে?' },
      code: `const a = [1, 2];
const b = a;
b.push(3);
console.log(a.length);`,
      options: [
        { en: '2', bn: '2' },
        { en: '3', bn: '3' },
        { en: '1', bn: '1' },
        { en: 'a TypeError', bn: 'a TypeError' },
      ],
      answer: 1,
      hint: { en: 'b is not a copy.', bn: 'b কপি নয়।' },
      explanation: { en: 'Both names point at the same block, so pushing through b grows a: length 3.', bn: 'দুটি নাম একই block দেখায়, তাই b দিয়ে push করলে a-বেড়ে length ৩।' },
    },
  ],
  quiz: {
    id: 'what-is-an-array-quiz',
    title: { en: 'Quiz — What an Array Is', bn: 'কুইজ — অ্যারে আসলে কী' },
    questions: [
      {
        id: 'what-is-an-array-q1',
        kind: 'mcq',
        topic: 'arrays: What an Array Is',
        question: { en: 'Where does the first element live?', bn: 'প্রথম উপাদান কোন বাক্সে?' },
        options: [
          { en: 'index 1', bn: 'index 1' },
          { en: 'index 0', bn: 'index 0' },
          { en: 'index -1', bn: 'index -1' },
          { en: 'it has no index', bn: 'index নেই বলে' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'JavaScript arrays are zero-indexed: fruits[0] is the first element.', bn: 'JavaScript array ০ থেকে গনে: fruits[0] হলো প্রথম উপাদান।' },
      },
      {
        id: 'what-is-an-array-q2',
        kind: 'mcq',
        topic: 'arrays: What an Array Is',
        question: { en: 'fruits has length 3. What is fruits[3]?', bn: 'fruits-এর length ৩। fruits[3] কী?' },
        options: [
          { en: 'The third element', bn: 'তৃতীয় উপাদানটি' },
          { en: 'undefined', bn: 'undefined' },
          { en: 'A thrown RangeError', bn: 'RangeError throw হবে' },
          { en: 'null', bn: 'null' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Reading past the end yields undefined — no error. Errors appear when you write to a bad index such as fruits[-1].', bn: 'সীমার বাইরে পড়লে undefined — error নয়। উল্টো index যেমন fruits[-1]-এ লিখলে সমস্যা দেখা দেয়।' },
      },
      {
        id: 'what-is-an-array-q3',
        kind: 'mcq',
        topic: 'arrays: What an Array Is',
        question: { en: 'What makes [1,2] and [1,2] different to ===?', bn: '===-এর চোখে [1,2] আর [1,2] আলাদা কেন?' },
        options: [
          { en: 'Different lengths', bn: 'দৈর্ঘ্য আলাদা' },
          { en: 'Different memory blocks (references)', bn: 'Different memory blocks (references)' },
          { en: 'Sorting order', bn: 'সাজানোর ক্রম' },
          { en: 'One is a NodeList', bn: 'একটি NodeList, array নয়' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: '=== on objects and arrays compares the reference. Same contents in two blocks are two values.', bn: 'object/array-তে === reference তুলনা করে। দুটি আলাদা block-এ একই বিষয়বস্তু মানে দুটি আলাদা মান।' },
      },
      {
        id: 'what-is-an-array-q4',
        kind: 'mcq',
        topic: 'arrays: What an Array Is',
        question: { en: 'How do you ask an array how many slots it has?', bn: 'array-কে কয়টি বাক্স জিজ্ঞেস করার উপায়?' },
        options: [
          { en: 'a.size', bn: 'a.size' },
          { en: 'a.length', bn: 'a.length' },
          { en: 'a.count', bn: 'a.count' },
          { en: 'a.total', bn: 'a.total' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'length is the property on JS arrays; size belongs to Set/Map, count and total do not exist.', bn: 'JS array-তে length; size Set/Map-এর, count বা total বলে কিছু নেই।' },
      },
    ],
  },
  nextLesson: {
    slug: 'indexes-length-and-holes',
    tech: 'arrays',
    title: { en: 'Indexes, Length and Holes', bn: 'index, length আর ফাঁকা' },
  },
};
