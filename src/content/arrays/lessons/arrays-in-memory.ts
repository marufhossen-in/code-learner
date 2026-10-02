import type { Lesson } from '../../../lib/types';

export const ArraysInMemoryLesson: Lesson = {
  slug: 'arrays-in-memory',
  tech: 'arrays',
  title: { en: 'Arrays in Memory and in the Wild', bn: 'memory-তে আর বাইরে অ্যারে' },
  summary: { en: 'The cost table every array operation hides, the copy semantics that bite, typed arrays for raw numbers, and how the browser hands you array-shaped things that are not arrays.', bn: 'প্রতিটি array কাজের লুকানো খরচের তালিকা, যে কপি-নিয়ম কামড়ায়, কাঁচা সংখ্যার typed array, আর browser যে array-মতো জিনিস দেয় array নয়।' },
  minutes: 13,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Arrays in Memory and in the Wild', bn: 'WHAT — memory-তে আর বাইরে অ্যারে' },
    },
    {
      type: 'para',
      text: { en: 'Two loops over the same list, one takes eight milliseconds and the other takes two seconds, and the code looks identical. What differs is what the machine had to do with memory: whether the values sat side by side, or scattered across the heap. This page is that difference, seen from underneath.', bn: 'একই তালিকার উপর দুটি loop, একটি আট মিলিসেকেন্ডে শেষ, অন্যটি দুই সেকেন্ড নেয়, অথচ code দেখতে হুবহু এক। ফারাকটা মেশিনের memory-র কাজে: মানগুলো পাশাপাশি বসে ছিল, না ছড়িয়ে ছিটিয়ে ছিল। নিচ থেকে সেই ফারাকটাই এই পাতায় দেখানো হচ্ছে।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'Reads and writes at a known index are O(1); inserts, deletes and search-while-sorted are the expensive ones.',
          bn: 'জানা index-এ পড়া-লেখা O(1); ঢোকানো, মোছা আর sorted খোঁজাই দামী।',
        },
        {
          en: 'Slice and spread copy the top level only — nested arrays and objects stay shared.',
          bn: 'slice আর spread শুধু উপরের স্তর কপি করে — ভিতরের array/object শেয়ার থাকে।',
        },
        {
          en: 'Typed arrays (Int32Array, Float64Array) are fixed-size and numeric-only, but they hold one flat buffer — 4-8 bytes per value instead of a boxed double.',
          bn: 'typed array (Int32Array, Float64Array) নির্দিষ্ট আকারের, শুধু সংখ্যা, কিন্তু একটা flat buffer — প্রতি মান ৪-৮ byte, boxed double নয়।',
        },
      ],
    },
    {
      type: 'table',
      head: [
        { en: 'operation', bn: 'কাজ' },
        { en: 'cost', bn: 'খরচ' },
        { en: 'why', bn: 'কারণ' },
      ],
      rows: [
        [
          { en: 'a[i] read / write', bn: 'a[i] read / write' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'start + i × size, one jump', bn: 'start + i × size, এক লাফ' },
        ],
        [
          { en: 'push / pop', bn: 'push / pop' },
          { en: 'O(1) amortised', bn: 'O(1), গড়ে' },
          { en: 'spare capacity absorbs the growth', bn: 'খোলা জায়গা বাড়-টা শুষে নেয়' },
        ],
        [
          { en: 'splice(i, 1)', bn: 'splice(i, 1)' },
          { en: 'O(n)', bn: 'O(n)' },
          { en: 'everything after i slides down', bn: 'i-এর পরের সব নিচে সরে' },
        ],
        [
          { en: 'indexOf / includes', bn: 'থাকে কি না দেখা' },
          { en: 'O(n)', bn: 'O(n)' },
          { en: 'linear scan until a match', bn: 'মেলার আগ পর্যন্ত হাঁটা' },
        ],
        [
          { en: 'sort', bn: 'sort' },
          { en: 'O(n log n)', bn: 'O(n log n)' },
          { en: 'engine compares pairs in a tuned merge/timsort', bn: 'engine সাজানো merge/timsort-এ জোড়া তুলনা করে' },
        ],
        [
          { en: 'concat / spread copy', bn: 'কপি করে যোগ করা' },
          { en: 'O(n)', bn: 'O(n)' },
          { en: 'a fresh block, top-level references copied', bn: 'নতুন block, শুধু উপরের reference কপি' },
        ],
        [
          { en: 'a.includes in a loop', bn: 'loop-এর ভেতর includes' },
          { en: 'O(n²)', bn: 'O(n²)' },
          { en: 'n scans of n each — reach for a Set', bn: 'n বার n-এর হাঁটা — Set নিন' },
        ],
      ],
      caption: { en: 'Amortised: push occasionally resizes the block, which costs one O(n) copy spread across many cheap pushes.', bn: 'গড়ে: push মাঝে মাঝে block বড় করে — একটি O(n) কপি অনেক সস্তা push-এর মধ্যে ভাগ হয়ে যায়।' },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'cost-and-copies.js',
      code: `// 1. shallow copy is not a copy of what lives inside
const outer = [[1, 2], { k: 3 }];
const shallow = outer.slice();
shallow[0].push(99);
console.log(outer[0]);                 // [1, 2, 99] — same inner array, both lists point at it
const deep = structuredClone(outer);   // copies nested levels too (not functions)

// 2. O(n²) scan, and the Set that kills it
const ids = Array.from({ length: 200000 }, (_, i) => "u" + i);
const wanted = ["u199999", "u150000", "u7"];
// const found = wanted.map(id => ids.includes(id));  // 600 000 comparisons
const set = new Set(ids);
const found = wanted.map(id => set.has(id));        // 3 lookups

// 3. 200 000 doubles: boxed array vs one flat buffer
const boxed = new Array(200000).fill(1.5);       // ~3.2 MB of slots + boxed numbers
const flat = new Float64Array(200000).fill(1.5); // 1.6 MB, contiguous, engine can SIMD it
console.log(flat.reduce((s, v) => s + v, 0));    // 300000`,
      caption: { en: 'Three lessons in twenty lines: shallow ≠ safe, Set beats a scan, and a typed array is a buffer wearing a shirt.', bn: 'বিশ লাইনে তিনটি পাঠ: shallow ≠ নিরাপদ, scan-এর চেয়ে Set, আর typed array হলো গেঞ্জি-পরা buffer।' },
    },
    {
      type: 'list',
      items: [
        {
          en: 'DOM: [...document.querySelectorAll("img")].map(i => i.src) — the NodeList has length and indexes but no map.',
          bn: 'DOM: [...document.querySelectorAll("img")].map(i => i.src) — NodeList-এ length ও index আছে, map নেই।',
        },
        {
          en: 'Strings are index-addressable but immutable: s[0] works, s[0] = "X" is ignored.',
          bn: 'string-এ index চলে কিন্তু বদল চলে না: s[0] পড়া যায়, s[0] = "X" উপেক্ষিত।',
        },
        {
          en: 'JSON round-trips lose holes: [1,,3] becomes [1,null,3] — null, not empty.',
          bn: 'JSON round-trip ফাঁকা রাখে না: [1,,3] হয়ে [1,null,3] — ফাঁকা নয়, null।',
        },
        {
          en: 'Array.from("αβγ") splits by code point; "αβγ".split("") splits by code unit — surrogate pairs break.',
          bn: 'Array.from("αβγ") code point ধরে ভাগে; "αβγ".split("") code unit ধরে — surrogate pair ভেঙে যায়।',
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
          title: { en: '1. Count the walk', bn: '১. হাঁটা গুনুন' },
          text: { en: 'Anything nested that scans a whole array inside an array is n² — the Set or Map fix is one line.', bn: 'ভিতরে array-জুড়ে scan আছে এমন বাসা-ভরা loop = n² — Set/Map সমাধান এক লাইনের।' },
        },
        {
          title: { en: '2. Copy the depth you need', bn: '২. যত গভীরতা দরকার কপি করুন' },
          text: { en: 'Slice for a flat list; structuredClone for nested state you will mutate.', bn: 'সমতল list-এ slice; বদলাবেন এমন বাসা-ভরা state-এ structuredClone।' },
        },
        {
          title: { en: '3. Pick the right container', bn: '৩. ঠিক পাত্র বাছুন' },
          text: { en: 'Array for order + index. Set for membership. Map for keyed. Typed array for raw numeric streams.', bn: 'ক্রম+index চাইলে array। আছে/নেই চাইলে Set। key দিলে Map। কাঁচা সংখ্যার স্রোতে typed array।' },
        },
        {
          title: { en: '4. Convert near the edge', bn: '৪. প্রান্তে রূপান্তর করুন' },
          text: { en: 'Turn NodeList/arguments/iterators into arrays once, at the boundary, then stay typed inside.', bn: 'NodeList/arguments/iterators-কে একবার সীমায় array বানান, ভিতরে সেভাবেই রাখুন।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Arrays in Memory and in the Wild: the moving parts', bn: 'memory-তে আর বাইরে অ্যারে: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Arrays in Memory and in the Wild">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Count the walk</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">Anything nested that scans a whole array</text>
<text x="352" y="79" font-size="11" fill="currentColor">inside an array is n² — the Set or Map fix is…</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Copy the depth you need</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">Slice for a flat list; structuredClone for</text>
<text x="352" y="151" font-size="11" fill="currentColor">nested state you will mutate.</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Pick the right container</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">Array for order + index. Set for membership.</text>
<text x="352" y="223" font-size="11" fill="currentColor">Map for keyed. Typed array for raw numeric st…</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Convert near the edge</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">Turn NodeList/arguments/iterators into arrays</text>
<text x="352" y="295" font-size="11" fill="currentColor">once, at the boundary, then stay typed inside.</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">Order + index → array. Membership → Set. Keyed data → Map. Raw numbers → typed array. Pay for t…</text>
</svg>`,
      caption: { en: 'Order + index → array. Membership → Set. Keyed data → Map. Raw numbers → typed array. Pay for the guarantee you actually need.', bn: 'ক্রম + index চাই → array। আছে কি না জানতে → Set। key দিয়ে খুঁজতে → Map। খালি সংখ্যা দলে দলে → typed array। যে নিশ্চয়তাটা আসলে দরকার, তারই দাম দিন।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'Order + index → array. Membership → Set. Keyed data → Map. Raw numbers → typed array. Pay for the guarantee you actually need.', bn: 'ক্রম + index চাই → array। আছে কি না জানতে → Set। key দিয়ে খুঁজতে → Map। খালি সংখ্যা দলে দলে → typed array। যে নিশ্চয়টা আসলে দরকার, তারই দাম দিন।' },
    },
  ],
  exercises: [
    {
      id: 'arrays-in-memory-ex1',
      kind: 'predict',
      topic: 'arrays: Arrays in Memory and in the Wild',
      question: { en: 'What does the log print?', bn: 'log কী ছেপে?' },
      code: `const a = [1, [2]];
const b = a.slice();
b[1].push(3);
console.log(JSON.stringify(a));`,
      answer: '[1,[2,3]]',
      accept: [
        '[1,[2,3]]',
        '"[1,[2,3]]"',
      ],
      hint: { en: 'slice is shallow: the inner array is the same object.', bn: 'slice সমতল: ভিতরের array একই object।' },
      explanation: { en: 'b[1] and a[1] are the same nested array, so pushing to one is visible in the other.', bn: 'b[1] আর a[1] একই বাসা-ভিতরে array, তাই একটিতে push অন্যটিতে দেখা যায়।' },
    },
    {
      id: 'arrays-in-memory-ex2',
      kind: 'mcq',
      topic: 'arrays: Arrays in Memory and in the Wild',
      question: { en: 'You have a 100k-row list and must test membership 100k times. Fastest?', bn: '১০০k সারির list-এ ১০০k বার membership চেক — সবচেয়ে দ্রুত?' },
      options: [
        { en: 'a.includes(v) inside the loop', bn: 'a.includes(v) inside the loop' },
        { en: 'new Set(a) once, then set.has(v)', bn: 'new Set(a) once, then set.has(v)' },
        { en: 'a.indexOf(v) with early exit', bn: 'a.indexOf(v) with early exit' },
        { en: 'a.sort() then a.indexOf(v)', bn: 'a.sort() then a.indexOf(v)' },
      ],
      answer: 1,
      hint: { en: 'Build once, then look up cheaply.', bn: 'একবার গড়ুন, তারপর সস্তায় খুঁজুন।' },
      explanation: { en: 'One O(n) build plus n O(1) lookups beats n × O(n) scans by orders of magnitude. Sorting first then binary search (a.lastIndexOf style helper) is correct too but costs O(n log n) up front.', bn: 'একটি O(n) গড়া + n বার O(1) দেখা n × O(n) হাঁটাকে বহুগুণ হারায়। আগে sort করে binary searchও ঠিক, কিন্তু শুরুতে O(n log n)।' },
    },
    {
      id: 'arrays-in-memory-ex3',
      kind: 'mcq',
      topic: 'arrays: Arrays in Memory and in the Wild',
      question: { en: 'structuredClone refuses to copy which of these?', bn: 'structuredClone কোনটি কপি করতে অস্বীকার করে?' },
      options: [
        { en: 'a Date', bn: 'a Date' },
        { en: 'a nested array', bn: 'ভিতরে আরেকটি array' },
        { en: 'a function', bn: 'a function' },
        { en: 'a number', bn: 'a number' },
      ],
      answer: 2,
      hint: { en: 'What cannot be written down as data?', bn: 'যাকে data হিসেবে লেখা যায় না, সেটি কোনটি?' },
      explanation: { en: 'Functions, DOM nodes, and most class instances are not cloneable; Date, arrays and numbers are. For state, that is exactly what you want.', bn: 'function, DOM node, বেশিরভাগ class instance কপি হয় না; Date, array, সংখ্যা হয়। state-এ দরকারিও ঠিক এটিই।' },
    },
  ],
  quiz: {
    id: 'arrays-in-memory-quiz',
    title: { en: 'Quiz — Arrays in Memory and in the Wild', bn: 'কুইজ — memory-তে আর বাইরে অ্যারে' },
    questions: [
      {
        id: 'arrays-in-memory-q1',
        kind: 'mcq',
        topic: 'arrays: Arrays in Memory and in the Wild',
        question: { en: 'Why is push O(1) “amortised”?', bn: 'push কেন “গড়ে” O(1)?' },
        options: [
          { en: 'It never copies', bn: 'কখনো কপি করে না' },
          {
            en: 'Spare capacity absorbs writes; occasional resize costs O(n)',
            bn: 'Spare capacity absorbs writes; occasional resize costs O(n)',
          },
          { en: 'The engine runs in parallel', bn: 'engine একসাথে কয়েকটি কাজ চালায়' },
          { en: 'Only for strings', bn: 'শুধু string-এর জন্য' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Engines over-allocate; when the spare room runs out, one O(n) copy happens and is spread across all the cheap pushes that followed the last resize.', bn: 'engine আলাদা জায়গা বেশি করে রাখে; ফুরালে একটি O(n) কপি হয়, সেটা আগের বড় করার পরের অনেক সস্তা push-এর মধ্যে ভাগ হয়।' },
      },
      {
        id: 'arrays-in-memory-q2',
        kind: 'mcq',
        topic: 'arrays: Arrays in Memory and in the Wild',
        question: { en: 'Which gives a deep-enough copy of nested state in modern browsers?', bn: 'আধুনিক browser-এ বাসা-ভরা state-এর যথেষ্ট গভীর কপি কোনটি?' },
        options: [
          { en: 'state.slice()', bn: 'state.slice()' },
          { en: 'structuredClone(state)', bn: 'structuredClone(state)' },
          { en: '[...state]', bn: '[...state]' },
          {
            en: 'JSON.parse(JSON.stringify(state)) — always equal',
            bn: 'JSON.parse(JSON.stringify(state)) — always equal',
          },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'structuredClone walks nested levels (JSON also does, but loses Date, Map, Set, undefined and functions). Spread and slice are top-level only.', bn: 'structuredClone ভিতরের স্তরও ধরে (JSON-ও ধরে, কিন্তু Date, Map, Set, undefined, function হারায়)। spread আর slice শুধু উপরের স্তর।' },
      },
      {
        id: 'arrays-in-memory-q3',
        kind: 'mcq',
        topic: 'arrays: Arrays in Memory and in the Wild',
        question: { en: 'A Float64Array differs from a normal array because…', bn: 'Float64Array সাধারণ array থেকে আলাদা, কারণ…' },
        options: [
          { en: 'it can hold any type', bn: 'যেকোনো type থাকতে পারে' },
          {
            en: 'fixed length, one number type, one flat buffer',
            bn: 'দৈর্ঘ্য স্থির, এক ধরনের সংখ্যা, একটি flat buffer',
          },
          { en: 'it auto-sorts', bn: 'it auto-sorts' },
          { en: 'it is a linked list', bn: 'এটি linked list' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Length is locked at construction, every slot is a 64-bit double in contiguous memory, and out-of-range writes are silently ignored instead of growing the array.', bn: 'দৈর্ঘ্য তৈরির সময়ই ঠিক, প্রতিটি বাক্স পাশাপাশি memory-তে ৬৪-বিট double, সীমার বাইরে লিখলে চুপ করে উপেক্ষা করে, বড় হয় না।' },
      },
      {
        id: 'arrays-in-memory-q4',
        kind: 'mcq',
        topic: 'arrays: Arrays in Memory and in the Wild',
        question: { en: 'Which container stores raw 64-bit doubles in one buffer?', bn: 'কোন পাত্র এক buffer-কাঁচা ৬৪-বিট double রাখে?' },
        options: [
          { en: 'Array', bn: 'Array' },
          { en: 'Float64Array', bn: 'Float64Array' },
          { en: 'Set', bn: 'Set' },
          { en: 'Map', bn: 'Map' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'A typed array is a window over an ArrayBuffer, so each slot is 8 bytes of IEEE-754 with no boxing — the point of numeric streams, WebGL and audio.', bn: 'typed array ArrayBuffer-র জানালা, প্রতিটি slot ৮ byte IEEE-754, boxing নেই — সংখ্যার স্রোত, WebGL, অডিও-র জন্যই।' },
      },
    ],
  },
};
