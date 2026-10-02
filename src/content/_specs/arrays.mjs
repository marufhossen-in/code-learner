/** Arrays hub — hand-authored, engine-rendered (tools/reauthor.mjs).
 * Order follows w3schools' JS Arrays tutorial, then goes past it into cost/copy semantics. */
export const meta = {
  slug: 'arrays',
  exportName: 'arraysHub',
  name: 'Arrays',
  nameBn: 'অ্যারে',
  icon: '📦',
  tagline: {
    en: 'A row of numbered slots: index, length, push/pop/shift, map/filter/reduce, sort with a comparator, and the cost of every one of them.',
    bn: 'নম্বর দেওয়া বাক্সের সারি: index, length, push/pop/shift, map/filter/reduce, comparator দিয়ে sort — আর এগুলোর প্রতিটির খরচ।',
  },
  intro: {
    en: 'An array is the first data structure every programmer meets, and the one that hides the most: it is a contiguous block of numbered slots, so reading any slot costs the same, but squeezing one out of the front moves everything behind it. These eight lessons walk from “what is index 0” to “why shift() is slow”, with a runnable example and a check on every page.',
    bn: 'Array হলো প্রথম data structure যা প্রতিটি প্রোগ্রামারের সামনে আসে, আর সবচেয়ে বেশি জিনিস এটিই লুকিয়ে রাখে: এটি পাশাপাশি রাখা নম্বর দেওয়া বাক্সের একটা ব্লক। তাই যেকোনো বাক্স পড়া সমান সস্তা, কিন্তু সামনের দিক থেকে একটা বের করলে পেছনের সব বাক্সে নম্বর বদলাতে হয়। এই আটটি পাঠ “index 0 মনে কী” থেকে “shift() কেন ধীর” পর্যন্ত যায় — প্রতিটি পাতায় চলমান উদাহরণ আর যাচাইসহ।',
  },
  bestPractices: [
    { en: 'Count from zero, and write the last index as length - 1 every time — off-by-one is the top array bug.', bn: 'শুরু থেকে নয়, ০ থেকে গুনে লিখুন; শেষ index সবসময় length - 1 লিখুন — off-by-এই array-র সবচেয়ে বড় ভুল।' },
    { en: 'Prefer map/filter/reduce for building a new array; use a for loop when you need to stop early or mutate in place.', bn: 'নতুন array বানাতে map/filter/reduce এগিয়ে; আগে থামতে হলে বা জায়গাতেই বদলাতে হলে for loop ব্যবহার করুন।' },
    { en: 'Never call shift() inside a loop over a big array — it re-numbers every remaining slot on each call.', bn: 'বড় array-র উপর loop-এর ভিতরে shift() কখনও ডাকবেন না — প্রতিবারেই বাকি সব বাক্সের নম্বর বদলায়।' },
    { en: 'Sort numbers with an explicit comparator: .sort((a, b) => a - b). Default sort compares text, so 10 lands before 9.', bn: 'সংখ্যা সাজাতে স্পষ্ট comparator দিন: .sort((a, b) => a - b)। ডিফল্ট sort লেখার মতো তুলনা করে, তাই ৯-এর আগে ১০ বসে।' },
    { en: 'Copy with slice() or toSorted()/toReversed() when the original must stay intact; push/splice/sort change the array itself.', bn: 'আসল array অক্ষত চাইলে slice() বা toSorted()/toReversed() দিয়ে কপি করুন; push/splice/sort নিজেকেই বদলে দেয়।' },
  ],
  interview: [
    { q: { en: 'Why is arr[5000] as fast as arr[0] but arr.shift() is O(n)?', bn: 'arr[5000] কেন arr[0]-এর মতোই দ্রুত, কিন্তু arr.shift() কেন O(n)?' }, a: { en: 'The array knows its start address, so slot i is start + i × size — one arithmetic step. shift() removes slot 0, so every later element must move down one slot to keep the block contiguous: n copies.', bn: 'array-র শুরু-ঠিকানা জানা আছে, তাই slot i = start + i × size — এক যোগ-গুণ। shift() slot 0 মুছে দেয়, তাই পাশাপাশি ব্লক রাখতে বাকি সব উপাদান এক ধাপ নিচে নামাতে হয়: n কপি।' } },
    { q: { en: 'Does [1,2,3] === [1,2,3] in JavaScript? Why not?', bn: 'JavaScript-এ [1,2,3] === [1,2,3] নাকি? কেন নয়?' }, a: { en: 'No. Arrays are objects, so === compares references, not contents. Compare with join, or an element-wise loop, or a helper like _.isEqual / structuredClone-based checks.', bn: 'না। array হলো object, তাই === বিষয়বস্তু নয়, reference তুলনা করে। join দিয়ে, বা element-wise loop দিয়ে, অথবা _.isEqual-এর মতো helper দিয়ে মেলান।' } },
    { q: { en: 'map vs forEach — which one do you return an array from?', bn: 'map বনাম forEach — কোনটি থেকে array ফেরত পাওয়া যায়?' }, a: { en: 'map returns a new array of the same length with your callback results; forEach returns undefined and exists only for side effects. Reassigning inside forEach changes nothing.', bn: 'map একই দৈর্ঘ্যের নতুন array ফেরত দেয় callback-এর ফল নিয়ে; forEach undefined দেয়, শুধু পাশের কাজের জন্য। forEach-এর ভিতরে বসালে কিছু বদলায় না।' } },
    { q: { en: 'What does Array.isArray(x) catch that typeof x === "object" misses?', bn: 'typeof x === "object" যা ধরে না, Array.isArray(x) কী ধরে?' }, a: { en: 'typeof says "object" for arrays, plain objects, Date, Map, null is separate — it cannot single out arrays. Array.isArray is true only for arrays (and their subclass instances), so it is the check to use before .length or .map.', bn: 'typeof array, সাধারণ object, Date, Map — সবতেই "object" বলে (null আলাদা) — array আলাদা করে ধরে না। Array.isArray শুধু array-তে সত্যি, তাই .length বা .map-এর আগে এটাই চেক।' } },
  ],
  realWorld: [
    { en: 'Every HTMLCollection, NodeList and querySelectorAll result is array-shaped, not an array — Array.from(...) or [...nodes] unlocks map and filter.', bn: 'প্রতিটি HTMLCollection, NodeList, querySelectorAll-এর ফল array-এর মতো দেখায়, array নয় — Array.from(...) বা [...nodes] দিলে map/filter খোলে।' },
    { en: 'Spread for merged state ([...prev, item]) is what makes React re-renders fire: a new array reference is the signal that data changed.', bn: 'React-এ re-render এইজন্যই চলে যে নতুন array reference তৈরি হয়: [...prev, item] spread-ই সেই সংকেত।' },
    { en: 'Pandas Series, NumPy arrays and typed arrays (Int32Array) trade JavaScript flexibility for one flat memory block — the same contiguity idea, enforced.', bn: 'Pandas Series, NumPy array, typed array (Int32Array) — সবাই JavaScript-এর নমনীয়তা বদলে একটানা memory block দেয়; একই contiguous ধারণা, এবার বাধ্যতামূলক।' },
    { en: 'A leaderboard is a sorted array; a message queue is shift/push; a undo stack is push/pop — three products, one data structure.', bn: 'Leaderboard হলো sorted array; message queue হলো shift/push; undo stack হলো push/pop — তিনটি পণ্য, একই data structure।' },
  ],
  references: [
    {
      group: { en: 'Add and remove', bn: 'যোগ ও বিয়োগ' },
      items: [
        { term: 'push(...items)', def: { en: 'Appends to the end, returns the new length. O(n) in the number of items added.', bn: 'শেষে যোগ করে, নতুন length ফেরত দেয়। যোগ-সংখ্যা অনুযায়ী O(n)।' } },
        { term: 'pop()', def: { en: 'Removes and returns the last element. O(1). Popping an empty array returns undefined.', bn: 'শেষ উপাদান মুছে সেটি ফেরত দেয়। O(1)। খালি array-তে undefined।' } },
        { term: 'shift() / unshift()', def: { en: 'Remove/add at the front, and re-number every later slot — O(n) each time.', bn: 'সামনে মুছুন/যোগ করুন, সাথে বাকি সব slot-এর নম্বর বদলায় — প্রতিবার O(n)।' } },
        { term: 'splice(i, n, ...items)', def: { en: 'Cut n items starting at i, insert items there. The only in-place edit that both removes and adds. Mutates.', bn: 'i থেকে nটি কেটে সেখানে items বসায়। একমাত্র in-place সম্পাদনা যা মুছেও ফেলে, বসায়ও। বদলে দেয়।' } },
        { term: 'slice(a, b)', def: { en: 'A copy of the half-open window [a, b). Never mutates, never complains about out-of-range numbers.', bn: '[a, b) জানালার কপি। কখনও বদলায় না, সীমার বাইরের সংখ্যায় অভিযোগ করে না।' } },
      ],
    },
    {
      group: { en: 'Look and transform', bn: 'খোঁজা ও বদল' },
      items: [
        { term: 'at(-1)', def: { en: 'Index from the end, negative allowed. Same value as arr[arr.length - 1].', bn: 'পেছন থেকে গুনে index, ঋণাত্মক চলবে। arr[arr.length - 1]-এর সমান।' } },
        { term: 'indexOf / includes', def: { en: 'indexOf returns position or -1 (uses ===, so NaN never matches). includes returns true/false and does find NaN.', bn: 'indexOf অবস্থান বা -1 দেয় (=== চলে, তাই NaN মেলে না)। includes true/false দেয়, NaN-ও ধরে।' } },
        { term: 'find / findIndex', def: { en: 'First element (or its index) whose callback returns truthy; undefined / -1 if none.', bn: 'প্রথম উপাদান (বা তার index) যার callback সত্যি; না মিললে undefined / -1।' } },
        { term: 'map / filter / reduce', def: { en: 'New array of results / new array of keepers / one accumulated value. All three leave the source alone.', bn: 'ফলের নতুন array / রাখার-উপাদানের array / একটি জমা-মান। তিনটিই আসল array-কে ছোঁয়ে না।' } },
        { term: 'some / every', def: { en: 'Short-circuit booleans: some stops at the first true, every at the first false.', bn: 'থামিয়ে-দেওয়া boolean: some প্রথম সত্যিতে থামে, every প্রথম মিথ্যায়।' } },
        { term: 'sort / toSorted', def: { en: 'sort mutates and compares as strings unless you pass (a, b) => a - b; toSorted returns a sorted copy.', bn: 'sort নিজেকে বদলে, comparator না দিলে লেখা হিসেবে তুলনা করে; toSorted সাজানো কপি দেয়।' } },
      ],
    },
  ],
};

export const lessons = [
  {
    slug: 'what-is-an-array',
    title: { en: 'What an Array Is', bn: 'অ্যারে আসলে কী' },
    minutes: 9,
    summary: {
      en: 'An array is an ordered, numbered run of slots held in one contiguous block. You will name the three properties that define it — order, index, length — and read them off a real array in the console.',
      bn: 'অ্যারে হলো একটানা memory block-এ রাখা ক্রমবদ্ধ, নম্বর দেওয়া বাক্সের সারি। এর তিনটি সংজ্ঞাকারী গুণ — order, index, length — console-এ সত্যিকারের array থেকে পড়ে দেখবেন।',
    },
    why: [
      { e: 'Order is a promise, not an accident: [a, b] and [b, a] are different arrays.', b: 'ক্রম আসলে প্রতিশ্রুতি, কাকতালীয় নয়: [a, b] আর [b, a] দুটি আলাদা array।' },
      { e: 'Indexes are dense — no holes in the numbering, even when a slot holds nothing.', b: 'index ঘন থাকে — সংখ্যায় ফাঁক পড়ে না, বাক্স ফাঁকা থাকলেও।' },
      { e: 'Anything can live in a slot: numbers, strings, arrays, objects, functions — mixed freely.', b: 'যেকোনো জিনিস বাক্সে থাকতে পারে: সংখ্যা, লেখা, array, object, function — একসাথে মিশিয়েও।' },
    ],
    blocks: [
      { type: 'para', text: {
        en: 'Write const fruits = ["mango", "jackfruit", "banana"]; and the engine reserves one block of memory wide enough for three slots. Slot 0 holds "mango", slot 1 holds "jackfruit", slot 2 holds "banana". fruits.length is 3. The array does not care what a slot holds, and it never re-orders anything on its own — that is the whole contract. Because the block is contiguous, jumping to slot 2 costs one multiplication, not a walk from slot 0.',
        bn: 'const fruits = ["mango", "jackfruit", "banana"]; লিখলে engine তিনটি বাক্সের জন্য একটা memory block আলাদা রাখে। slot 0-তে "mango", slot 1-এ "jackfruit", slot 2-এ "banana"। fruits.length হলো ৩। বাক্সে কী আছে তা array দেখে না, আর সে নিজে থেকে ক্রমও বদলায় না — এটাই পুরো চুক্তি। block পাশাপাশি থাকায় slot 2-এ লাফ দিতে এক গুণ যথেষ্ট, slot 0 থেকে হেঁটে যেতে হয় না।',
      } },
      { type: 'code', lang: 'js', filename: 'first-array.js', code: [
        'const fruits = ["mango", "jackfruit", "banana"];',
        '',
        'console.log(fruits[0]);        // "mango"   — counting starts at 0',
        'console.log(fruits[2]);        // "banana"  — the last slot is length - 1',
        'console.log(fruits.length);    // 3',
        'console.log(fruits[3]);        // undefined — nothing lives there, no error',
        'fruits[3] = "lipthon";         // grow by writing the next free slot',
        'console.log(Array.isArray(fruits)); // true',
      ].join('\n'), caption: { en: 'Four reads, one write. Notice reading a missing slot gives undefined instead of throwing.', bn: 'চারটি পড়া, একটি লেখা। না-থাকা বাক্স পড়লে throw নয়, undefined আসে — সেদিকে খেয়াল রাখুন।' } },
      { type: 'keyterms', items: [
        { term: 'element', def: { en: 'One value sitting in one slot: in ["mango", "jackfruit"], "jackfruit" is the second element.', bn: 'একটি বাক্সের একটি মান: ["mango", "jackfruit"]-এ "jackfruit" দ্বিতীয় element।' } },
        { term: 'index', def: { en: 'The slot number, starting at 0.', bn: 'বাক্সের নম্বর, ০ থেকে শুরু।' } },
        { term: 'length', def: { en: 'How many slots are in the run — arr.length. One more than the biggest index.', bn: 'কয়টি বাক্স — arr.length। সবচেয়ে বড় index-এর এক বেশি।' } },
        { term: 'contiguous', def: { en: 'Slots sit next to each other in memory, which is why any index reads instantly.', bn: 'বাক্সগুলো memory-তে পাশাপাশি, তাই যেকোনো index সঙ্গে সঙ্গে পড়া যায়।' } },
        { term: 'reference type', def: { en: 'Two arrays with equal contents are not === equal; they are two different blocks.', bn: 'একই বিষয়বস্তুর দুটি array === সমান নয়; দুটি আলাদা block।' } },
      ] },
      { type: 'compare', title: { en: 'Array literal vs. look-alikes', bn: 'Array literal বনাম দেখতে-somo' },
        left: { title: { en: 'Not what you think', bn: 'যা মনে করেন না' }, points: [
          { en: 'typeof fruits === "object" — useless for spotting arrays.', bn: 'typeof fruits === "object" — array চেনায় না।' },
          { en: 'document.querySelectorAll("li") — array-shaped, no .map.', bn: 'document.querySelectorAll("li") — দেখতে array, .map নেই।' },
          { en: 'const a = []; a[10] = 1 → length jumps to 11 with nine empty holes.', bn: 'const a = []; a[10] = 1 → length ১১, মাঝে নয়টি ফাঁকা।' },
        ] },
        right: { title: { en: 'The real thing', bn: 'সত্যিকারেরটি' }, points: [
          { en: 'Array.isArray(x) is true only for arrays.', bn: 'Array.isArray(x) সত্যি শুধু array-র জন্য।' },
          { en: 'x.map / x.forEach work only when x is an array (or you made one with Array.from).', bn: 'x.map / x.forEach চলে শুধু x array হলে (বা Array.from দিয়ে বানালে)।' },
          { en: 'x.length is a live number: write to a free slot and it grows.', bn: 'x.length জীবন্ত সংখ্যা: ফাঁকা বাক্সে লিখলে বেড়ে যায়।' },
        ] } },
    ],
    steps: [
      { t: 'Reserve the block', tb: 'block আলাদা রাখুন', e: 'The literal lists slots in the order you typed them.', b: 'literal আপনার লেখার ক্রমে বাক্সগুলো ঠিক করে।' },
      { t: 'Name the array', tb: 'নাম দিন', e: 'const stores a reference to that block, not a copy of it.', b: 'const সেই block-এর reference ধরে রাখে, কপি নয়।' },
      { t: 'Read by index', tb: 'index দিয়ে পড়ুন', e: 'start + index × slotSize — one calculation, any slot.', b: 'start + index × slotSize — এক হিসাব, যেকোনো বাক্স।' },
      { t: 'Check membership first', tb: 'আগে চেনা যায় কিনা দেখুন', e: 'Array.isArray before using .length, then handle undefined on a missing slot.', b: '.length ব্যবহারের আগে Array.isArray, না-মিললে undefined সামলান।' },
    ],
    visual: null,
    note: 'Contiguous block + numbered slots = instant reads at any index. Everything else about arrays follows from that.',
    tryit: {
      title: 'Grow an array', titleBn: 'অ্যারে বড়াও',
      js: ['const fruits = ["mango", "jackfruit"];', 'fruits.push("lipthon");            // try removing this line', 'fruits[fruits.length] = "patal";  // the same trick, written longhand', '', 'document.getElementById("out").textContent =', '  fruits.join(", ") + "  (length " + fruits.length + ")";'].join('\n'),
      html: '<pre id="out" style="font:14px/1.7 ui-monospace,monospace"></pre>',
    },
    exercises: [
      { kind: 'predict', q: 'What does the second log print?', qb: 'দ্বিতীয় log কী ছেপে?', code: 'const a = [10, 20, 30];\nconsole.log(a.length);\nconsole.log(a[a.length - 1]);', answer: '30', accept: ['30', '30 ', '"30"'], hint: 'length is 3, so length - 1 is 2.', hintb: 'length ৩, তাই length - 1 হলো ২।', why: 'The last slot of a 3-element array is index 2, which holds 30.', whyb: '৩ উপাদানের array-র শেষ বাক্স index 2, সেখানে ৩০।' },
      { q: 'Which test tells you that x is an array?', qb: 'কোন চেক বলে দেবে x array?', options: ['typeof x === "array"', 'Array.isArray(x)', 'x instanceof Array === false', 'x.type === "array"'], answer: 1, hint: 'typeof never answers "array".', hintb: 'typeof কখনো "array" বলে না।', why: 'Array.isArray(x) is the only reliable one; typeof x is "object" for arrays, and instanceof breaks across frames/windows.', whyb: 'Array.isArray(x)-ই নির্ভরযোগ্য; typeof-এর উত্তর "object", আর instanceof frame জুড়ে ভেঙে যায়।' },
    ],
    quiz: [
      { q: 'Where does the first element live?', qb: 'প্রথম উপাদান কোন বাক্সে?', options: ['index 1', 'index 0', 'index -1', 'it has no index'], answer: 1, why: 'JavaScript arrays are zero-indexed: fruits[0] is the first element.', whyb: 'JavaScript array ০ থেকে গনে: fruits[0] হলো প্রথম উপাদান।' },
      { q: 'fruits has length 3. What is fruits[3]?', qb: 'fruits-এর length ৩। fruits[3] কী?', options: ['The third element', 'undefined', 'A thrown RangeError', 'null'], answer: 1, why: 'Reading past the end yields undefined — no error. Errors appear when you write to a bad index such as fruits[-1].', whyb: 'সীমার বাইরে পড়লে undefined — error নয়। উল্টো index যেমন fruits[-1]-এ লিখলে সমস্যা দেখা দেয়।' },
      { q: 'What makes [1,2] and [1,2] different to ===?', qb: '===-এর চোখে [1,2] আর [1,2] আলাদা কেন?', options: ['Different lengths', 'Different memory blocks (references)', 'Sorting order', 'One is a NodeList'], answer: 1, why: '=== on objects and arrays compares the reference. Same contents in two blocks are two values.', whyb: 'object/array-তে === reference তুলনা করে। দুটি আলাদা block-এ একই বিষয়বস্তু মানে দুটি আলাদা মান।' },
    ],
  },

  {
    slug: 'indexes-length-and-holes',
    title: { en: 'Indexes, Length and Holes', bn: 'index, length আর ফাঁকা' },
    minutes: 11,
    summary: {
      en: 'length is one past the highest index, not a count of filled slots — and that gap explains holes, sparse arrays, arr.at(-1), and why a loop must stop at length - 1.',
      bn: 'length সবচেয়ে বড় index-এর এক বেশি, ভরা বাক্সের গণনা নয় — এই এক ধাপ তফাতেই বোঝা যায় hole, sparse array, arr.at(-1), আর loop কেন length - 1 পর্যন্ত চলবে।',
    },
    why: [
      { e: 'length - 1 is the only safe last index; hard-coding 2 breaks the moment someone adds a fruit.', b: 'নিরাপদ শেষ index শুধু length - 1; ২ লিখে দিলেই কেউ একটি ফল যোগ করলে ভাঙবে।' },
      { e: 'Sparse arrays keep the numbering but leave nothing in a slot — map and forEach treat those slots differently.', b: 'sparse array সংখ্যা রাখে, বাক্স ফাঁকা রাখে — map আর forEach এই দুটোকে আলাদা চোখে দেখে।' },
    ],
    blocks: [
      { type: 'para', text: {
        en: 'Two ways to make a hole. Either write far ahead — const a = []; a[4] = "x" leaves slots 0..3 empty and length is 5 — or use the Array constructor: new Array(5) has length 5 with five holes. Holes are not undefined slots: undefined is a value, a hole is the absence of one. forEach(), filter(), reduce() and some() skip holes; map() copies them straight over; index reads give undefined either way, which is why “no error” is not proof that data exists.',
        bn: 'ফাঁকা বানানোর দুটি উপায়। হয় বহু এগিয়ে লিখুন — const a = []; a[4] = "x" হলে ০..৩ ফাঁকা, length ৫ — নয় Array constructor: new Array(5)-এ length ৫, পাঁচটি ফাঁকা। ফাঁকা বাক্স আর undefined সমান জিনিস নয়: undefined একটি মান, ফাঁকা মানে মানের অনুপস্থিতি। forEach, filter, reduce, some ফাঁকা এড়িয়ে যায়; map ফাঁকা হুবহু কপি করে; index-এ পড়লে দুটোতেই undefined — তাই “error আসেনি” মানেই তথ্য আছে নয়।',
      } },
      { type: 'code', lang: 'js', filename: 'holes.js', code: [
        'const a = [];',
        'a[4] = "x";',
        'console.log(a.length);            // 5  — highest index + 1',
        'console.log(a);                   // [ <4 empty items>, "x" ]',
        '',
        'a.forEach((v, i) => console.log("seen", i));   // prints nothing: holes are skipped',
        'a.map(() => 1);                  // [ <4 empty items>, 1 ] — holes copied as holes',
        '',
        'const dense = [undefined, undefined, undefined, undefined, "x"];',
        'console.log(dense.filter(() => true).length);  // 5 — forEach/map would visit these',
        '',
        'console.log(a.at(-1), a.at(-4));   // "x", undefined — at() counts from the end',
      ].join('\n'), caption: { en: 'The same undefined at index 3, produced two ways, is visited in one array and skipped in the other.', bn: 'index 3-এ একই undefined দুইভাবে তৈরি, একটি array-তে এটি দেখা যায়, অন্যটিতে এড়িয়ে যাওয়া হয়।' } },
      { type: 'table', head: [
        { en: 'You write', bn: 'যা লেখেন' }, { en: 'length', bn: 'length' }, { en: 'slot 2', bn: 'slot 2' }, { en: 'visited by forEach?', bn: 'forEach দেখে?' },
      ], rows: [
        [{ en: '[1, 2, 3]', bn: '' }, { en: '3', bn: '' }, { en: '3', bn: '' }, { en: 'yes', bn: 'হ্যাঁ' }],
        [{ en: 'new Array(3)', bn: '' }, { en: '3', bn: '' }, { en: 'hole', bn: 'ফাঁকা' }, { en: 'no', bn: 'না' }],
        [{ en: '[1, 2, undefined]', bn: '' }, { en: '3', bn: '' }, { en: 'undefined', bn: 'undefined' }, { en: 'yes', bn: 'হ্যাঁ' }],
        [{ en: '[, , 3]', bn: '' }, { en: '3', bn: '' }, { en: '3', bn: '' }, { en: 'no', bn: 'না' }],
      ], caption: { en: 'Length counts the numbering, not the contents. Only a real value is visited.', bn: 'length সংখ্যা গনে, বিষয়বস্তু নয়। আসল মান থাকলেই তা দেখা যায়।' } },
      { type: 'keyterms', items: [
        { term: 'length', def: { en: 'highest index + 1. Writing arr.length = 2 truncates; length is settable.', bn: 'সবচেয়ে বড় index + 1। arr.length = 2 লিখলে কেটে ছোট হয়; length লেখা যায়।' } },
        { term: 'hole', def: { en: 'A slot the array has no value for at all.', bn: 'যে বাক্সে মান বলতে কিছুই নেই।' } },
        { term: 'sparse', def: { en: 'An array with holes. Legal, slow to reason about, and rarely what you meant.', bn: 'যে array-তে ফাঁকা আছে। বৈধ, বোঝা ঝামেলা, প্রায়ই উদ্দেশ্য নয়।' } },
        { term: 'at(n)', def: { en: 'Indexing that accepts negatives: at(-1) is the last slot.', bn: 'ঋণাত্মক সংখ্যাও চলে: at(-1) শেষ বাক্স।' } },
      ] },
    ],
    steps: [
      { t: 'Ask for length', tb: 'length জিজ্ঞেস করুন', e: 'One past the highest index you have touched.', b: 'যে সবচেয়ে বড় index ছুঁয়েছেন, তার এক পরে।' },
      { t: 'Loop to length - 1', tb: 'length - 1 পর্যন্ত চালান', e: 'for (let i = 0; i < a.length; i++) — < not <=.', b: 'for (let i = 0; i < a.length; i++) — <= নয়, <।' },
      { t: 'Fill before you transform', tb: 'transform-এর আগে ভরুন', e: 'a.fill(undefined) turns holes into values so map/filter see them.', b: 'a.fill(undefined) ফাঁকাকে মান বানায়, তখন map/filter দেখে।' },
      { t: 'Trim with length', tb: 'length দিয়ে ছাঁটুন', e: 'a.length = 3 drops everything from index 3 on, in place.', b: 'a.length = 3 index 3 থেকে সব ফেলে দেয়, জায়গাতেই।' },
    ],
    visual: null,
    pitfall: { t: 'for (i = 0; i <= a.length; i++)', tb: 'for (i = 0; i <= a.length; i++)', e: 'The last pass reads index length — always undefined — and a filter or reduce on that iteration invents a value that was never in the array. Use <.', b: 'শেষবারে index length পড়া হয় — সবসময় undefined — আর সেই ধাপে filter/reduce এমন মান গড়ে বসায় যা array-তে ছিলই না। < ব্যবহার করুন।', },
    exercises: [
      { kind: 'predict', q: 'What is the length printed?', qb: 'কোন length ছাপা হয়?', code: 'const b = [7, 8];\nb[5] = 99;\nconsole.log(b.length);', answer: '6', accept: ['6'], hint: 'highest index + 1.', hintb: 'সবচেয়ে বড় index + ১।', why: 'b[5] makes 5 the highest index, so length becomes 6 — slots 2..4 are holes.', whyb: 'b[5] লিখলে বড়তম index ৫, তাই length ৬ — slot ২..৪ ফাঁকা।' },
      { q: 'Which array will forEach visit in every slot?', qb: 'কোন array-র সব বাক্স forEach দেখবে?', options: ['new Array(3)', '[1, , 3]', '[undefined, undefined, undefined]', '[ , , ,]'], answer: 2, hint: 'Holes are skipped; values are not.', hintb: 'ফাঁকা এড়িয়ে যায়, মান নয়।', why: 'Only the third has a real value (undefined) in each slot; the others contain holes.', whyb: 'তৃতীয়টিতে প্রতিটি বাক্সে আসল মান (undefined) আছে; বাকিগুলোতে ফাঁকা।' },
    ],
    quiz: [
      { q: 'Safe last index of array a?', qb: 'array a-র নিরাপদ শেষ index?', options: ['a.length', 'a.length - 1', 'a.lastIndex', 'a.length + 1'], answer: 1, why: 'Indexing starts at 0 and length is one past the end, so length - 1 is the last real slot.', whyb: 'index ০ থেকে, length শেষের এক পরে, তাই length - ১ আসল শেষ বাক্স।' },
      { q: 'What does a.at(-2) give you on a three-item array?', qb: 'a.at(-2) মানে কী?', options: ['index -2, which throws', 'second from the end', 'slice off two elements', 'the last two elements'], answer: 1, why: 'at() accepts negative indexes and counts from the end; at(-2) is the second-to-last slot.', whyb: 'at() ঋণাত্মক নেয়, পেছন থেকে গনে; at(-2) শেষের আগের বাক্স।' },
      { q: 'Setting a.length = 0 does what?', qb: 'a.length = 0 করলে কী হয়?', options: ['Throws', 'Frees the slots: empties the array in place', 'Copies the array', 'Deletes the variable'], answer: 1, why: 'length is a setter. Shrinking it to 0 removes every element without creating a new array, so other references see the same emptied array.', whyb: 'length একটি setter। ০ করলে নতুন array না বানিয়েই সব উপাদান মুছে যায়, তাই অন্য reference-ও একই খালি array দেখে।' },
    ],
  },

  {
    slug: 'add-remove-and-mutate',
    title: { en: 'Adding and Removing', bn: 'যোগ আর বিয়োগ' },
    minutes: 12,
    summary: {
      en: 'push/pop are O(1); shift/unshift and splice are O(n) because the block must stay contiguous. Learn which method mutates, which returns a copy, and what each one hands back.',
      bn: 'push/pop O(1); shift/unshift আর splice O(n), কারণ বাক্সের ব্লক পাশাপাশি থাকতে হবে। কোনটি নিজেকে বদলায়, কোনটি কপি দেয়, আর কোনটি কী ফেরত দেয় — সেটাই মূল।',
    },
    why: [
      { e: 'Return values differ: push gives the new length, pop gives the removed item, splice gives an array of removed items.', b: 'ফেরত আলাদা: push নতুন length দেয়, pop মুছে-যাওয়া উপাদান, splice মুছে-যাওয়াগুলোর array।' },
      { e: 'Mutating vs copying decides whether other references to the same array see your change.', b: 'বদলায় নাকি কপি — তাই ঠিক করে অন্য reference-ও পরিবর্তন দেখে কি না।' },
    ],
    blocks: [
      { type: 'para', text: {
        en: 'Adding at the end is cheap: the engine keeps a little spare room after the last slot, so push writes one value and increments length. Adding at the front is expensive: slot 0 must belong to the new element, so every existing element is copied one slot down first. That single fact explains three habits — build a queue with push and an index pointer instead of shift, prepend with unshift only on small arrays, and prefer concat / spread for joining.',
        bn: 'শেষে যোগ সস্তা: শেষ বাক্সের পরে engine একটু জায়গা খোলা রাখে, তাই push একটি মান লিখে length বাড়িয়ে দেয়। সামনে যোগ দামী: slot 0 নতুন উপাদানের হতে হবে, তাই আগেই প্রতিটি পুরোনো উপাদান এক ধাপ নিচে কপি করতে হয়। এই এক তথ্যেই তিনটি অভ্যাসের ব্যাখ্যা — queue বানান push + একটা index pointer দিয়ে, shift নয়; ছোট array-তে unshift; জোড়া দিতে concat / spread।',
      } },
      { type: 'code', lang: 'js', filename: 'edit.js', code: [
        'const log = [];',
        'log.push("boot");            // ["boot"]            — returns 1 (new length)',
        'log.push("hit", "miss");     // ["boot","hit","miss"]— returns 3',
        'const last = log.pop();      // last "miss", log is ["boot","hit"]',
        '',
        'log.unshift("start");        // ["start","boot","hit"] — O(n): everyone shifts right',
        'const first = log.shift();   // first "start",        — O(n): everyone shifts left',
        '',
        'const t = ["a", "b", "c", "d", "e"];',
        't.splice(1, 2, "X");         // ["a","X","d","e"] — remove 2 at index 1, insert "X"',
        'const cut = t.splice(0, 1);  // cut is ["a"], t is ["X","d","e"] — splice RETURNS the removed ones',
        '',
        'const copy = t.slice(1);     // copy ["d","e"]; t untouched',
        'console.log(t.concat(["z"])); // ["X","d","e","z"] — t itself still ["X","d","e"]',
      ].join('\n'), caption: { en: 'Every line except the last two mutates t or log. slice and concat are the safe pair.', bn: 'শেষ দুটি লাইন বাদে প্রতিটি লাইন t বা log নিজেদের বদলে দেয়। slice আর concat নিরাপদ জুটি।' } },
      { type: 'table', head: [
        { en: 'method', bn: 'method' }, { en: 'side', bn: 'পক্ষ' }, { en: 'mutates?', bn: 'বদলায়?' }, { en: 'returns', bn: 'ফেরত' }, { en: 'cost', bn: 'খরচ' },
      ], rows: [
        [{ en: 'push(x)', bn: '' }, { en: 'end', bn: 'শেষ' }, { en: 'yes', bn: 'হ্যাঁ' }, { en: 'new length', bn: 'নতুন length' }, { en: 'O(1)', bn: '' }],
        [{ en: 'pop()', bn: '' }, { en: 'end', bn: 'শেষ' }, { en: 'yes', bn: 'হ্যাঁ' }, { en: 'the item', bn: 'উপাদান' }, { en: 'O(1)', bn: '' }],
        [{ en: 'unshift(x)', bn: '' }, { en: 'front', bn: 'সামনে' }, { en: 'yes', bn: 'হ্যাঁ' }, { en: 'new length', bn: 'নতুন length' }, { en: 'O(n)', bn: '' }],
        [{ en: 'shift()', bn: '' }, { en: 'front', bn: 'সামনে' }, { en: 'yes', bn: 'হ্যাঁ' }, { en: 'the item', bn: 'উপাদান' }, { en: 'O(n)', bn: '' }],
        [{ en: 'splice(i, n, ...x)', bn: '' }, { en: 'anywhere', bn: 'যেখানে খুশি' }, { en: 'yes', bn: 'হ্যাঁ' }, { en: 'removed array', bn: 'মুছে-যাওয়ার array' }, { en: 'O(n)', bn: '' }],
        [{ en: 'slice(a, b)', bn: '' }, { en: 'window', bn: 'জানালা' }, { en: 'no', bn: 'না' }, { en: 'a copy', bn: 'এক কপি' }, { en: 'O(k)', bn: '' }],
        [{ en: 'toReversed / toSorted', bn: '' }, { en: 'whole', bn: 'পুরোটা' }, { en: 'no', bn: 'না' }, { en: 'a copy', bn: 'এক কপি' }, { en: 'O(n log n)', bn: '' }],
      ], caption: { en: 'k = elements copied. Only the last two rows are safe inside a component render.', bn: 'k = কপি-হওয়া উপাদান। শেষ দুটি সারিই component render-এ নিরাপদ।' } },
      { type: 'callout', kind: 'tip', title: { en: 'Deque without the tax', bn: 'কর ছাড়া queue' },
        text: { en: 'If you are removing from the front in a loop, keep a head pointer: let head = 0; read a[head]; head++. Cost O(1) per item, and one a.splice(0, head) at the end if you must shrink the block.', bn: 'loop-এ সামনে থেকে মুছতে হলে head pointer রাখুন: let head = 0; a[head] পড়ুন; head++। উপাদান-প্রতি O(1), শেষে একবার a.splice(0, head) ব্লক ছোট করতে।', } },
    ],
    steps: [
      { t: 'Pick the end', tb: 'পক্ষ বেছে নিন', e: 'End edits are O(1). Front edits are O(n) — only pay that when the array is short.', b: 'শেষে বদল O(1)। সামনে O(n) — ছোট array না হলে খরচ ভোগেন না।' },
      { t: 'Mutate or copy?', tb: 'বদলাবেন না কপি?', e: 'Other references to the same array see a mutation. In React state, always copy.', b: 'একই array-র অন্য reference বদল দেখে ফেলে। React state-এ সবসময় কপি করুন।' },
      { t: 'Read the return', tb: 'যা ফেরত আসে পড়ুন', e: 'push → length. pop/shift → item. splice → array of removed items. Mixing these up is half of array bugs.', b: 'push → length। pop/shift → উপাদান। splice → মুছে-যাওয়াগুলোর array। এই তিনটি গুলিয়ে যাওয়ায় অর্ধেক bug।' },
      { t: 'Batch the inserts', tb: 'যোগ একসাথে করুন', e: 'a.push(...items) or a.splice(i, 0, ...items) beats pushing one by one.', b: 'a.push(...items) বা a.splice(i, 0, ...items) এক এক করে ঠাসার চেয়ে ভালো।' },
    ],
    visual: 'dsa',
    scenario: 'push/pop/shift on the array view, watching indices re-number when the head moves',
    pitfall: { t: 'Using splice to delete inside a forward loop', tb: 'forward loop-এর ভিতরে splice দিয়ে মোছা', e: 'Deleting shifts the remaining items left, so the next i skips an element. Loop backwards, or build a new array with filter.', b: 'মুছলে বাকিগুলো বাঁয়ে সরে যায়, পরের i-তে একটি এড়িয়ে যায়। পেছন থেকে চালান, বা filter দিয়ে নতুন array বানান।' },
    exercises: [
      { kind: 'predict', q: 'What does the last log print?', qb: 'শেষ log কী ছেপে?', code: 'const a = [1, 2, 3, 4];\na.splice(1, 2);\nconsole.log(a.join("-"));', answer: '1-4', accept: ['1-4', '"1-4"'], hint: 'splice(1, 2) starts at index 1 and removes two.', hintb: 'splice(1, 2) index 1 থেকে দুটি মুছবে।', why: 'Indices 1 and 2 (values 2 and 3) leave; 1 and 4 remain, and join("-") writes "1-4".', whyb: 'index ১ ও ২ (মান ২, ৩) চলে যায়; ১ ও ৪ থাকে, join("-") লেখে "1-4"।' },
      { q: 'Which call returns the element that was removed?', qb: 'কোনটি মুছে-যাওয়া উপাদানটি ফেরত দেয়?', options: ['arr.push(x)', 'arr.splice(i, 1)', 'arr.pop()', 'arr.shift()'], answer: 0, hint: 'pop removes the last one and hands it to you.', hintb: 'pop শেষটি মুছে হাতে দেয়।', why: 'pop returns the last element; splice returns an ARRAY containing the removed items, so it needs [0] to get the element itself.', whyb: 'pop শেষ উপাদানটি দেয়; splice মুছে-যাওয়াগুলোর ARRAY দেয়, তাই উপাদান চাইলে [০] লাগে।' },
      { kind: 'fill', q: 'Write one expression that adds "tail" to the end of list without creating a new array.', qb: 'একটি expression লিখুন যা list-এর শেষে "tail" যোগ করে, নতুন array না বানিয়ে।', answer: 'list.push("tail")', accept: ['list.push("tail")', 'list.push("tail");', 'list.push(\\"tail\\")'], hint: 'One method, one argument.', hintb: 'একটি method, একটি argument।', why: 'push mutates in place. The copying alternatives are list.concat(["tail"]) and [...list, "tail"], both of which return new arrays.', whyb: 'push জায়গাতেই বদলায়। কপি-বিকল্প list.concat(["tail"]) আর [...list, "tail"] — দুটোই নতুন array দেয়।' },
    ],
    quiz: [
      { q: 'Cost of unshift on a 1000-element array?', qb: '১০০০ উপাদানের array-তে unshift-এর খরচ?', options: ['O(1)', 'O(n) — a copy of all 1000 slots', 'O(log n)', 'O(n²)'], answer: 1, why: 'Slot 0 is taken, so all 1000 elements are copied one slot up: linear work.', whyb: 'slot 0 দখল হয়ে যায়, তাই ১০০০টি উপাদান এক ধাপ উপরে কপি হয়: রৈখিক কাজ।' },
      { q: 't.slice(1) on ["X","d","e"] gives?', qb: '["X","d","e"]-এ t.slice(1) কী দেবে?', options: ['["X","d"]', '["d","e"]', '["X","d","e"]', 'undefined'], answer: 1, why: 'slice(a) copies from index a to the end — a half-open window, so indices 1 and 2.', whyb: 'slice(a) index a থেকে শেষ পর্যন্ত কপি করে — অর্ধ-খোলা জানালা, তাই ১ ও ২।' },
      { q: 'In React state, to append one item you write…', qb: 'React state-এ একটি যোগ করতে লেখেন…', options: ['state.push(item)', 'setState([...state, item])', 'state.unshift(item)', 'state.splice(0, 0, item)'], answer: 1, why: 'State must be replaced with a new reference for the update to be seen, and spread gives a fresh array with the item appended.', whyb: 'update দেখাতে নতুন reference দরকার, আর spread নতুন array বানিয়ে শেষে item বসায়।' },
    ],
  },

  {
    slug: 'walking-an-array',
    title: { en: 'Walking an Array', bn: 'অ্যারে পড়ে বেড়ানো' },
    minutes: 10,
    summary: {
      en: 'for, for…of, forEach, for…in and while — five ways to walk the same slots, and each one breaks somewhere: index access, break, this-binding and hole handling are the fault lines.',
      bn: 'for, for…of, forEach, for…in আর while — একই বাক্স পাড়ি দেওয়ার পাঁচ পথ, আর প্রতিটির দুর্বল জায়গা আছে: index access, break, this-binding, ফাঁকা পড়ার ভঙ্গি — এখানেই ভাঙন।',
    },
    lead: {"en":"You have thirty names in a list and you must show every one of them — there is no way to print thirty statements, and no way to know thirty in advance. Walking the array is the pattern under every loop you will ever write, and this page is the four ways to walk it, and when each one is wrong.","bn":"আপনার তালিকায় ত্রিশটি নাম, আর প্রত্যেকটি দেখাতেই হবে — ত্রিশটি আলাদা লাইন লেখা যায় না, আগে থেকে ত্রিশ জেনেও বসার উপায় নেই। array ঘুরে দেখার এই ঢং-ই পরে লেখা প্রতিটি loop-এর নিচে, আর এই পাতায় সেটি চারভাবে ঘোরার কথা — কখন কোনটি ভুল।"},
    why: [
      { e: 'for is the only form that can break or continue with an index in hand.', b: 'একমাত্র for-ই index হাতে রেখে break/continue করতে দেয়।' },
      { e: 'for…in walks an object’s keys — on arrays it also walks custom properties and yields strings.', b: 'for…in object-এর key হাঁটে — array-তে নিজস্ব property-ও ধরে, সংখ্যা লেখা হিসেবে।' },
      { e: 'for…of uses the iterator, so it works on arrays, Maps, Sets and strings alike.', b: 'for…of iterator ব্যবহার করে, তাই array, Map, Set, string — সবাইতে চলে।' },
    ],
    blocks: [
      { type: 'code', lang: 'js', filename: 'walk.js', code: [
        'const xs = [4, 9, 16, 25];',
        '',
        'for (let i = 0; i < xs.length; i++) {',
        '  if (xs[i] > 20) break;          // index in hand: can bail out early',
        '  console.log("classic", i, xs[i]);',
        '}',
        '',
        'for (const x of xs) console.log("of", x);      // values, no index, break/continue allowed',
        'xs.forEach((x, i) => console.log("each", i, x)); // index in the callback, no break',
        'xs.entries();   // iterator of [index, value] pairs',
        'for (const [i, x] of xs.entries()) console.log("pair", i, x);',
        '',
        'xs.custom = 1;',
        'for (const k in xs) console.log("in  ", k);    // 0,1,2,3,custom — strings, and the extra key',
      ].join('\n'), caption: { en: 'The for…in line prints "custom" too. That is the loop to avoid on arrays.', bn: 'for…in লাইনটি "custom"-ও ছাপে। array-তে এই loop-টাই এড়িয়ে চলতে হয়।' } },
      { type: 'compare', title: { en: 'Which walk to take', bn: 'কোন পথ নেবেন' },
        left: { title: { en: 'Use for / for…of', bn: 'for / for…of নিন' }, points: [
          { en: 'Early exit with break, or skip with continue.', bn: 'break দিয়ে আগে থামা, continue দিয়ে এড়ানো।' },
          { en: 'Index available without a callback: fastest shape for hot loops.', bn: 'callback ছাড়াই index: গরম loop-এ দ্রুততম।' },
          { en: 'Works the same on typed arrays and arrays of holes.', bn: 'typed array আর ফাঁকা array দুটোতেই একই রকম।' },
        ] },
        right: { title: { en: 'Use forEach / map', bn: 'forEach / map নিন' }, points: [
          { en: 'Transform or build a new array — map returns one.', bn: 'বদলান বা নতুন array বানান — map কপি ফেরত দেয়।' },
          { en: 'Chains read as intent: .filter(...).map(...).', bn: 'চেইনে উদ্দেশ্য দেখা যায়: .filter(...).map(...)।' },
          { en: 'No break; return only skips one step.', bn: 'break নেই; return শুধু একটি ধাপে লাগে।' },
        ] } },
    ],
    steps: [
      { t: 'Need the index or an exit?', tb: 'index না আগে থামা?', e: 'Plain for with i. It is also the only one that can break on a condition.', b: 'সাধারণ for, i সহ। শর্তে থামার একমাত্র পথও এটাই।' },
      { t: 'Just the values', tb: 'শুধু মান চাই', e: 'for…of — clean, works on any iterable, supports break.', b: 'for…of — পরিষ্কার, যেকোনো iterable-এ চলে, break চলে।' },
      { t: 'Build something new', tb: 'নতুন কিছু বানান', e: 'map / filter / reduce. No manual accumulator variable.', b: 'map / filter / reduce। হাতে accumulator লিখতে হয় না।' },
      { t: 'Never for…in', tb: 'for…in নয়', e: 'It walks keys of any object: strings, custom props, prototypes if someone polluted one.', b: 'যেকোনো object-এর key হাঁটে: লেখা, নিজস্ব property, prototype দূষিত হলে সেটাও।' },
    ],
    visual: 'execution',
    scenario: 'watch a loop step through frames while the call stack runs the callback',
    exercises: [
      { kind: 'predict', q: 'How many lines does the last loop print?', qb: 'শেষ loop কতটি লাইন ছেপে?', code: 'const a = [1, 2, 3];\na.extra = "x";\nfor (const k in a) console.log(k);', answer: '4', accept: ['4', 'four'], hint: 'for…in lists index keys as strings, plus any custom property.', hintb: 'for…in index key-গুলো লেখা হিসেবে দেয়, সাথে নিজস্ব property-ও।', why: 'Keys "0", "1", "2" and "extra" are printed: four lines.', whyb: '"0", "1", "2" আর "extra" — মোট চারটি লাইন।' },
      { q: 'You must stop as soon as a negative number appears. Which loop?', qb: 'ঋণাত্মক সংখ্যা দেখা মাত্রই থামতে হবে। কোন loop?', options: ['forEach with return', 'for…of with break', 'map with a flag', 'Object.entries().map()'], answer: 1, hint: 'return leaves the callback, not the loop.', hintb: 'return callback থেকে বেরোয়, loop থেকে নয়।', why: 'return inside forEach only exits that callback for one element; a break in for…of (or a classic for) stops the whole walk.', whyb: 'forEach-তে return শুধু সেই একটি উপাদানের callback থেকে বেরোয়; for…of-এর break পুরো হাঁটা থামায়।' },
    ],
    quiz: [
      { q: 'forEach gives which arguments to its callback?', qb: 'forEach callback-এ কোন argument গুলো যায়?', options: ['(value, index, array)', '(index, value)', '(value, key)', '(array, value)'], answer: 0, why: 'Element, then position, then the array itself — the third one is easy to forget and handy for a sum without a second loop.', whyb: 'আগে উপাদান, তারপর অবস্থান, তারপর array টাই — তিনটি ভুলে যান, কিন্তু দ্বিতীয় loop ছাড়া যোগে কাজে লাগে।' },
      { q: 'What does xs.entries() hand you?', qb: 'xs.entries() কী দেয়?', options: ['values only', 'an iterator of [index, value] pairs', 'a copy of the array', 'keys as strings'], answer: 1, why: 'An iterator of pairs, which destructures nicely in for (const [i, x] of xs.entries()).', whyb: 'জোড়ার iterator, যা for (const [i, x] of xs.entries())-এ সুন্দরভাবে খোলে।' },
      { q: 'Why does for…in misbehave on arrays?', qb: 'array-তে for…in কেন বেগতিক?', options: ['It is slower only', 'It yields string keys and includes own non-index properties', 'It skips the last element', 'It throws on holes'], answer: 1, why: 'for…in is an object loop: keys come back as strings and any extra own property (a.foo) is included.', whyb: 'for…in object-এর loop: key লেখা হিসেবে আসে, আর নিজস্ব অতিরিক্ত property (a.foo)ও ধরা পড়ে।' },
    ],
  },

  {
    slug: 'transform-with-methods',
    title: { en: 'map, filter, reduce', bn: 'ম্যাপ, ফিল্টার, রিডিউস' },
    minutes: 14,
    summary: {
      en: 'The three transforms that replace most hand-written loops, their exact return contracts, and the reduce accumulator mistake that silently produces [NaN].',
      bn: 'তিনটি transform যেখানে প্রায় সব হাতে-লেখা loop বদলে যায়, তাদের ফেরতের চুক্তি, আর reduce-এর যে ভুলে চুপ করে [NaN] তৈরি হয়।',
    },
    lead: {"en":"The list holds prices, and what you need to show them is the same list with tax added. The old answer was a loop, a new array and a push. map, filter and reduce are that loop, named — one line each, and they never touch the array you started with.","bn":"তালিকাতে দামগুলো আছে, আর দেখানোর জন্য দরকার সেই তালিকাতেই কর যোগ করা সংস্করণ। পুরনো জবাব ছিল loop, একটা নতুন array আর push। map, filter, reduce — ওই loop-এর নাম দেওয়া রূপ, একটি লাইন করে, আর যেখান থেকে শুরু সেটিকে ছোঁয়ই না।"},
    why: [
      { e: 'map always returns the same number of elements — one result per slot, even when your callback returns undefined.', b: 'map সবাই-সময় সমান সংখ্যক উপাদান ফেরত দেয় — বাক্স-প্রতি একটি ফল, callback undefined দিলেও।' },
      { e: 'filter keeps an element when the callback is truthy, and keeps order.', b: 'filter ট্রুই হলে উপাদান রাখে, ক্রমও রাখে।' },
      { e: 'reduce is the only one whose return type you invent: number, object, array, Map — anything.', b: 'reduce-ই ফেরতের ধরন আপনি বেছে নেন: সংখ্যা, object, array, Map — যেকিছু।' },
    ],
    blocks: [
      { type: 'code', lang: 'js', filename: 'transform.js', code: [
        'const orders = [',
        '  { id: 1, qty: 3, price: 9.5 },',
        '  { id: 2, qty: 1, price: 40 },',
        '  { id: 3, qty: 4, price: 2 },',
        '];',
        '',
        'const totals = orders.map(o => o.qty * o.price);       // [28.5, 40, 8]',
        'const big = orders.filter(o => o.qty >= 3);             // orders 1 and 3',
        'const grand = totals.reduce((sum, t) => sum + t, 0);          // 76.5',
        'const byId = orders.reduce((m, o) => (m[o.id] = o, m), {}); // {1:{...},2:{...},3:{...}}',
        '',
        '// the classic bug: no initial value on a list of strings',
        'const names = ["ana", "bo", "cy"];',
        'const joined = names.reduce((a, b) => a + b);           // "anabo" — first pair is ("ana","bo")',
        'const wrong = names.reduce((a, b) => a + b.length, 0);   // 0+3, +2, +2 = 7',
        'const oops = names.reduce((a, b) => a + b.length);       // "ana" + 2 -> "ana2" + 2 -> "ana22"',
      ].join('\n'), caption: { en: 'Give reduce a seed whenever the answer type differs from the element type. Here the missing 0 turns a sum into string glue.', bn: 'ফলের ধরন উপাদানের ধরন থেকে আলাদা হলে reduce-কে বীজ দিন। এখানে ০ না-দিলে যোগ লেখা-জোড়া হয়ে যায়।' } },
      { type: 'keyterms', items: [
        { term: 'callback', def: { en: 'The function you hand to the method: (value, index, array) => …', bn: 'যে function টি method-এ হাতে দেন: (value, index, array) => …' } },
        { term: 'accumulator', def: { en: 'reduce’s running result; the seed is the 2nd argument.', bn: 'reduce-এর চলমান ফল; বীজ হলো দ্বিতীয় argument।' } },
        { term: 'truthy test', def: { en: 'filter keeps anything whose callback is not 0, "", null, undefined, false or NaN.', bn: 'filter যা-ই থাকুক ট্রুই-কে রাখে: ০, "", null, undefined, false, NaN বাদে।' } },
        { term: 'chain', def: { en: 'orders.filter(...).map(...) — reads top-down, allocates one array per link.', bn: 'orders.filter(...).map(...) — উপর থেকে নিচে পড়া যায়, প্রতি ঘরে একটি array বানায়।' } },
      ] },
      { type: 'callout', kind: 'warn', title: { en: 'Chains are not free', bn: 'চেইন বিনামূল্যে নয়' },
        text: { en: 'filter().map().reduce() on a 1M-row list walks memory three times and builds two temporary arrays. For hot paths, one reduce, or a plain loop, is faster — measure before you argue.', bn: '১M সারির list-এ filter().map().reduce() তিনবার memory হাঁটে, দুটি সাময়িক array বানায়। গরম পথে একটি reduce, বা সাধারণ loop দ্রুত — আগে মেপে নিন, তারপর মত দিন।' } },
    ],
    steps: [
      { t: 'Shape the answer', tb: 'উত্তরের গড়ন ঠিক করুন', e: 'Same count → map. Fewer → filter. One thing → reduce.', b: 'সমান সংখ্যা → map। কম → filter। একটি জিনিস → reduce।' },
      { t: 'Seed the reduce', tb: 'reduce-এ বীজ দিন', e: 'reduce(fn, 0) for sums, reduce(fn, {}) for indexes, reduce(fn, []) for builds.', b: 'যোগে reduce(fn, 0), index-এ reduce(fn, {}), গড়তে reduce(fn, [])।' },
      { t: 'Keep it pure', tb: 'শুদ্ধ রাখুন', e: 'A map/filter callback that mutates an outer array is a loop with extra steps — that is a smell, not style.', b: 'map/filter callback বাইরের array বদলে দিলে সেটা অপ্রয়োজনীয় loop মাত্র — এটা স্টাইল নয়, গন্ধ।' },
      { t: 'Chain then name', tb: 'চেইন করে নাম দিন', e: 'const bigTotals = orders.filter(...).map(...) — a name is documentation, and it is testable.', b: 'const bigTotals = orders.filter(...).map(...) — নামই নথি, আর যাচাইও করা যায়।' },
    ],
    visual: null,
    note: 'map: 1-in 1-out. filter: 1-in 0-or-1-out. reduce: n-in 1-out. Pick by shape, not by fashion.',
    exercises: [
      { kind: 'fill', q: 'Write the single method call that turns nums into their squares, as a new array.', qb: 'একটি method call লিখুন যা nums থেকে বর্গের নতুন array বানায়।', code: 'const nums = [1, 2, 3, 4];\nconst squares = /* your call */;', answer: 'nums.map(n => n * n)', accept: ['nums.map(n => n * n)', 'nums.map((n) => n * n)', 'nums.map(n => n*n)', 'nums.map(function (n) { return n * n; })'], hint: 'One result per element, returned.', hintb: 'উপাদান-প্রতি একটি ফল, ফেরত দেওয়া।', why: 'map is the shape-preserving transform; forEach returns undefined and filter would drop elements.', whyb: 'map আকার-রক্ষাকারী transform; forEach undefined দেয়, filter উপাদান ফেলে দেয়।' },
      { kind: 'predict', q: 'What is the result?', qb: 'ফল কী?', code: 'const r = [1, 2, 3].reduce((a, x) => a + x, 10);\nconsole.log(r);', answer: '16', accept: ['16'], hint: 'The seed is 10, not 1.', hintb: 'এখানে seed ১০, ১ নয়।', why: 'The seed starts the accumulator at 10, so the walk is 10+1, then 11+2, then 13+3, which leaves 16.', whyb: 'seed accumulator-টি ১০ নিয়ে শুরু করে, তাই ধাপগুলো ১০+১, তারপর ১১+২, তারপর ১৩+৩ — শেষে ১৬।' },
    ],
    quiz: [
      { q: 'What does map return when a callback returns undefined for one item?', qb: 'একটি item-এ callback undefined দিলে map কী ফেরত দেয়?', options: ['The array without that item', 'undefined', 'An array with undefined in that position', 'It throws'], answer: 2, why: 'map is length-preserving: every slot gets whatever the callback returned, including undefined.', whyb: 'map দৈর্ঘ্য-রক্ষী: প্রতিটি বাক্সে callback যা ফেরত দিয়েছে সেটি বসে, undefined হলেও।' },
      { q: 'reduce without a seed on a 1-element array…', qb: '১-উপাদান array-তে seed ছাড়া reduce…', options: ['returns the element', 'throws TypeError', 'returns undefined', 'loops forever'], answer: 0, why: 'With no initial value, reduce takes element 0 as the accumulator and starts at index 1; one element means zero iterations, so it returns that element.', whyb: 'প্রাথমিক মান না দিলে reduce উপাদান ০-কে accumulator ধরে index ১ থেকে শুরু করে; একটি উপাদান মানে শূন্য iteration, তাই সেই উপাদানই ফেরত।' },
      { q: 'reduce on an empty array with no seed?', qb: 'খালি array-তে seed ছাড়া reduce?', options: ['0', 'undefined', 'TypeError: Reduce of empty array', '[]'], answer: 2, why: 'There is nothing to seed it with, so the engine throws. Always pass a seed when the array can be empty.', whyb: 'বীজ দেওয়ার মতো কিছু নেই, তাই throw হয়। array খালি হতে পারে তো বীজ দিন।' },
      { q: 'Which builds a lookup object from a list most directly?', qb: 'list থেকে lookup object সবচেয়ে সরাসরি কোনটি বানায়?', options: ['list.map(...)', 'list.filter(...)', 'list.reduce((m, x) => (m[x.id] = x, m), {})', 'list.some(...)'], answer: 2, why: 'A lookup keyed by id is an object, and only reduce can return one; the seed {} is what makes it an object build instead of a number sum.', whyb: 'id দিয়ে key করা lookup একটি object, আর object শুধু reduce-ই ফেরত দিতে পারে; বীজ {}-ই এটি-সংখ্যা-যোগ না হয়ে object গড়া বানায়।' },
    ],
  },

  {
    slug: 'find-and-test',
    title: { en: 'Finding and Testing', bn: 'খোঁজা যাচাই' },
    minutes: 10,
    summary: {
      en: 'indexOf vs includes vs find vs at, and the pair that answers “is any/all of it true” without walking the whole array twice.',
      bn: 'indexOf বনাম includes বনাম find বনাম at, আর যে জুটি পুরো array দুবার না হেঁটেই “কোনোটাকি সত্যি? সবটাই সত্যি?” উত্তর দেয়।',
    },
    lead: {"en":"You need one thing from the list: the first user whose email matches, or a plain yes-or-no about whether anyone is an admin. Both are loops you have written by hand; both are a single method call once you know the name of it.","bn":"তালিকা থেকে চাই একটাই জিনিস: email মিলে এমন প্রথম ব্যবহারকারী, নাকি কেউ admin — শুধু হ্যাঁ/না উত্তর। দুটোই আপনি হাতে লেখা loop; কোনটির নাম কী জানা থাকলে দুটোই এক লাইনের method call।"},
    why: [
      { e: 'indexOf uses ===, so it cannot find NaN and cannot find an object by shape.', b: 'indexOf === ব্যবহার করে, তাই NaN খুঁজে পায় না, গড়ন দিয়ে objectও পায় না।' },
      { e: 'includes finds NaN and reads better; find returns the element, findIndex the position.', b: 'includes NaN-ও পায়, পড়তেও সহজ; find উপাদান দেয়, findIndex অবস্থান।' },
      { e: 'some/every short-circuit: the first deciding element stops the walk.', b: 'some/every আগেই থামে: যে উপাদান সিদ্ধান্ত দেয়, সেই হাঁটা বন্ধ করে।' },
    ],
    blocks: [
      { type: 'table', head: [
        { en: 'question', bn: 'প্রশ্ন' }, { en: 'call', bn: 'ডাক' }, { en: 'answer', bn: 'উত্তর' }, { en: 'NaN-safe?', bn: 'NaN-নিরাপদ?' },
      ], rows: [
        [{ en: 'is it there?', bn: 'আছে?' }, { en: 'a.includes(v)', bn: '' }, { en: 'true / false', bn: 'true / false' }, { en: 'yes', bn: 'হ্যাঁ' }],
        [{ en: 'where is it?', bn: 'কোথায়?' }, { en: 'a.indexOf(v)', bn: '' }, { en: 'index / -1', bn: 'index / -1' }, { en: 'no', bn: 'না' }],
        [{ en: 'give me the first that…', bn: 'প্রথমটি দিন যা…' }, { en: 'a.find(p)', bn: '' }, { en: 'element / undefined', bn: 'উপাদান / undefined' }, { en: 'n/a', bn: '' }],

        [{ en: 'which number is the first that…', bn: 'কোন নম্বরটি প্রথম যা…' }, { en: 'a.findIndex(p)', bn: '' }, { en: 'index / -1', bn: 'index / -1' }, { en: 'n/a', bn: '' }],

        [{ en: 'any single one enough?', bn: 'একটিই কি যথেষ্ট?' }, { en: 'a.some(p)', bn: '' }, { en: 'true / false', bn: 'true / false' }, { en: 'n/a', bn: '' }],

        [{ en: 'all of them?', bn: 'সবটাই?' }, { en: 'a.every(p)', bn: '' }, { en: 'true / false', bn: 'true / false' }, { en: 'n/a', bn: '' }],

        [{ en: 'empty answer?', bn: 'খালি হলে?' }, { en: 'some / every on []', bn: '' }, { en: 'false / true', bn: 'false / true' }, { en: 'n/a', bn: '' }],

      ], caption: { en: 'every([]) is true by the empty-product rule — that default bites in validation code.', bn: 'every([]) খালি-গুণের নিয়মে সত্যি — validation কোডে এই default-ই কামড় দেয়।' } },
      { type: 'code', lang: 'js', filename: 'find.js', code: [
        'const ids = ["a7", "b2", NaN, "c9"];',
        'ids.indexOf(NaN);           // -1 — === cannot match NaN',
        'ids.includes(NaN);          // true',
        'ids.at(-1);                 // "c9"',
        '',
        'const users = [{ n: "Mitu", age: 17 }, { n: "Roni", age: 22 }];',
        'const under = users.find(u => u.age < 18);       // the Mitu object',
        'const pos = users.findIndex(u => u.age < 18);    // 0',
        'const none = users.find(u => u.age > 60);        // undefined — guard before reading .n',
        '',
        'const allAdults = users.every(u => u.age >= 18);  // false',
        'const anyoneYoung = users.some(u => u.age < 18);  // true, stops at index 0',
      ].join('\n'), caption: { en: 'find returns the element (or undefined); findIndex the position (or -1). The line above is the one that crashes if you forget.', bn: 'find উপাদান দেয় (না মিললে undefined); findIndex অবস্থান (না মিললে -1)। ভুলে গেলে ঠিক আগের লাইনটাই ভাঙে।' } },
      { type: 'callout', kind: 'tip', title: { en: 'Borrowing a lookup', bn: 'তালিকা ধার করা' },
        text: { en: 'Searching the same array for many values? Reduce it into a Set or an object once, then test in O(1): const seen = new Set(ids); seen.has("b2"). n searches on an array cost n×m; on a Set, n.', bn: 'একই array-তে অনেক মান খুঁজছেন? একবারে Set বা object-এ গড়ুন, তারপর O(1)-এ চেক: const seen = new Set(ids); seen.has("b2")। array-তে n খোঁজা n×m খরচ, Set-এ n।' } },
    ],
    steps: [
      { t: 'Name the predicate', tb: 'শর্ত নাম দিন', e: 'age < 18, exists, isDirty — a find/some/every is only as good as its test.', b: 'age < 18, exists, isDirty — find/some/every তার শর্তের মতোই ভালো।' },
      { t: 'Decide the answer shape', tb: 'উত্তরের আকার ঠিক করুন', e: 'Element → find. Position → findIndex. Yes/no → some/every. Existence only → includes.', b: 'উপাদান → find। অবস্থান → findIndex। হ্যাঁ/না → some/every। শুধু আছে কিনা → includes।' },
      { t: 'Guard the miss', tb: 'না-মিললে সামলান', e: 'find gives undefined: use optional chaining (u?.n) or a fallback object.', b: 'find undefined দেয়: optional chaining (u?.n) বা fallback object দিন।' },
      { t: 'Short-circuit is a feature', tb: 'আগে থামাই সুবিধে', e: 'some/every stop at the deciding element, so put cheap, likely tests first.', b: 'some/every সিদ্ধান্তকারী উপাদানে থামে, তাই সস্তা-সম্ভাব্য শর্ত আগে দিন।' },
    ],
    visual: 'dsa',
    scenario: 'linear scan versus hash lookup on the same element',
    exercises: [
      { kind: 'predict', q: 'What prints?', qb: 'কী ছাপা হয়?', code: 'const a = [1, 2, 3, 2];\nconsole.log(a.indexOf(2), a.lastIndexOf(2), a.findIndex(x => x > 2));', answer: '1 3 2', accept: ['1 3 2', '1,3,2', '1, 3, 2'], hint: 'indexOf first hit, lastIndexOf from the back, findIndex tests the arrow.', hintb: 'indexOf প্রথম মিল, lastIndexOf পেছন থেকে, findIndex arrow শর্তে।', why: '2 sits at index 1 (and again at 3); the first value greater than 2 is 3 at index 2.', whyb: '২ index ১-এ (আবার ৩-এও); ২-এর চেয়ে বড় প্রথম মান ৩, index ২।' },
      { q: 'Which line is safe on an empty array?', qb: 'খালি array-তে কোন লাইন নিরাপদ?', options: ['a.find(p).n', 'a.some(p) === true', 'a.every(p) — returns true for no elements', 'a[0].n'], answer: 2, hint: 'Two of these throw on missing values.', hintb: 'এই কয়েকের মধ্যে দুটি না-থাকলে throw করে।', why: 'every on [] returns true and reads the empty array as “nothing violates the rule”. some returns false; find gives undefined and then .n throws; a[0].n throws too.', whyb: '[]-তে every true দেয়, “নিয়ম কেউ লঙ্ঘন করছে না” পড়ে; some false দেয়; find undefined দিলে .n throw; a[0].n-ও throw।' },
    ],
    quiz: [
      { q: 'Find the first odd number in nums — one call?', qb: 'nums-এ প্রথম বিজোড় সংখ্যা, এক ডাকে?', options: ['nums.filter(n => n % 2)', 'nums.find(n => n % 2 === 1)', 'nums.includes(1)', 'nums.indexOf(1)'], answer: 1, why: 'find with the parity test returns the first odd element; filter would build a whole array of them.', whyb: 'parity শর্তে find প্রথম বিজোড় উপাদান দেয়; filter পুরো বিজোড়-দের array বানিয়ে ফেলত।' },
      { q: 'NaN in a list — which call reports it?', qb: 'list-এ NaN থাকলে কোন ডাকটি বলবে?', options: ['indexOf(NaN)', 'includes(NaN)', 'findIndex(x => x === NaN)', 'lastIndexOf(NaN)'], answer: 1, why: 'Every === comparison against NaN is false, and indexOf uses ===; includes uses SameValueZero, which treats NaN as equal to NaN.', whyb: 'NaN-এর সাথে === তুলনা মিথ্যা, আর indexOf === ব্যবহার করে; includes SameValueZero ব্যবহার করে, যেখানে NaN = NaN।' },
      { q: 'some vs every on a 10k list that fails at index 3?', qb: '১০k list index ৩-এরপর ifail — some বনাম every?', options: ['both walk all 10 000', 'some stops at 3, every keeps going', 'every stops at the first false, some keeps going only until the first true', 'neither short-circuits'], answer: 2, why: 'every returns false the moment one element fails; some needs a true, so it keeps walking until it finds one (or runs out).', whyb: 'একটি উপাদান ব্যর্থ হলেই every false দেয়; some-কে সত্যি চাই, তাই সে প্রথম সত্যি পাওয়া পর্যন্ত হাঁটে (বা শেষ পর্যন্ত)।' },
    ],
  },

  {
    slug: 'sort-and-order',
    title: { en: 'Sorting and Order', bn: 'সাজানো ক্রম' },
    minutes: 12,
    summary: {
      en: 'sort() mutates, compares as strings by default, and is stable since ES2019. Numeric order needs (a, b) => a - b, and objects need an explicit key. Copy first with toSorted or slice().',
      bn: 'sort() নিজেকে বদলায়, ডিফল্টে লেখার মতো তুলনা করে, ES2019 থেকে stable। সংখ্যার ক্রমে (a, b) => a - b লাগে, object-এ স্পষ্ট key লাগে। আগে toSorted বা slice() দিয়ে কপি নিন।',
    },
    lead: {"en":"You ask for the ten cheapest products and the site shows the ten most recently added. Nothing sorted them; the list came out in the order it was built. Sorting is its own small problem — with numbers in it, and one JavaScript trap that turns 110 into the biggest price.","bn":"আপনি সস্তা দশটি product চেয়েছেন, site দেখাচ্ছে সবচেয়ে নতুন যোগ হওয়া দশটি। কোনোটিই সাজানো হয়নি; যে ক্রমে তৈরি হয়েছিল সে ক্রমেই বেরিয়েছে। সাজানো নিজেই একটা ছোট সমস্যা — ভেতরে সংখ্যা আছে, আর JavaScript-এর এক ফাঁদ আছে যে 110-কে সবচেয়ে বড় দাম বানিয়ে দেয়।"},
    why: [
      { e: 'Default order is lexicographic: [10, 9, 1].sort() → [1, 10, 9] because "10" < "9" as text.', b: 'ডিফল্ট লেখা-ক্রম: [10, 9, 1].sort() → [1, 10, 9], কারণ লেখায় "10" < "9"।' },
      { e: 'A comparator returns negative / 0 / positive; those three signs drive every swap.', b: 'comparator ঋণাত্মক / ০ / ধনাত্মক ফেরত দেয়; এই তিনটি চিহ্নি প্রতিটি অদলবদল চালায়।' },
      { e: 'Stable means equal keys keep their original relative order — that is what makes a two-level sort work.', b: 'stable মানে সমান key-গুলোর আগের পারস্পরিক ক্রম থাকে — দুই-স্তরের sort এতেই চলে।' },
    ],
    blocks: [
      { type: 'code', lang: 'js', filename: 'sort.js', code: [
        'const ns = [10, 9, 1];',
        'ns.sort();                       // [1, 10, 9]  — strings, and ns itself changed',
        'ns.sort((a, b) => a - b);        // [1, 9, 10]  — numbers, ascending',
        'ns.sort((a, b) => b - a);        // [10, 9, 1]  — descending',
        '',
        'const rows = [{ n: "Roni", s: 70 }, { n: "Mitu", s: 90 }, { n: "Apu", s: 70 }];',
        'const copy = rows.toSorted((a, b) => a.s - b.s);   // rows untouched',
        '// by score, then by name — one comparator, two levels',
        'copy.sort((a, b) => a.s - b.s || a.n.localeCompare(b.n));',
        '',
        '["æ", "ø", "z"].sort();                       // locale-blind: ["z", "æ", "ø"]',
        '["æ", "ø", "z"].sort((a, b) => a.localeCompare(b, "en")); // uses collation rules',
      ].join('\n'), caption: { en: 'The || in the two-level comparator is the idiom: 0 means “fall through to the next key”.', bn: 'দুই-স্তরের comparator-এ ||-ইি: ০ মানে “পরের key-এ নামুন”।' } },
      { type: 'callout', kind: 'info', title: { en: 'What “stable” buys you', bn: 'stable যা কিনে দেয়' },
        text: { en: 'Sorting by name and then by score gives ties in score alphabetical order — two cheap sorts instead of one fiddly comparator. Sort the least important key first, the most important last.', bn: 'আগে নাম দিয়ে, তারপর score দিয়ে সাজালে score-এর টাই-গুলো বর্ণানুক্রমে থাকে — একটি ঝামেলা comparator-এর বদলে দুটি সহজ sort। কম গুরুত্বের key আগে, বেশি গুরুত্বেরটা শেষে।' } },
      { type: 'keyterms', items: [
        { term: 'comparator', def: { en: 'Returns <0 if a should precede b, 0 for tie, >0 to swap.', bn: 'a আগে গেলে <0, সমানে 0, অদলবদলে >0 ফেরত।' } },
        { term: 'mutating sort', def: { en: 'sort() and reverse() change the array and return the same reference.', bn: 'sort() ও reverse() array বদলে সেই reference ফেরত দেয়।' } },
        { term: 'toSorted / toReversed', def: { en: 'ES2023 copies: safe in React renders and shared state.', bn: 'ES2023 কপি: React render ও shared state-এ নিরাপদ।' } },
        { term: 'localeCompare', def: { en: 'Language-aware text order, including digits and accents.', bn: 'ভাষা-সচেতন লেখা ক্রম, সংখ্যা-অ্যাকসেন্টসহ।' } },
        { term: 'key function', def: { en: 'Sort by a derived value: items.sort((a, b) => score(a) - score(b)).', bn: 'ব্যুত্পন্ন মান দিয়ে সাজান: items.sort((a, b) => score(a) - score(b))।' } },
      ] },
    ],
    steps: [
      { t: 'Copy or not', tb: 'কপি নাকি না', e: 'Need the original? toSorted(...) or [...a].sort(...).', b: 'আসল লাগবে? toSorted(...) বা [...a].sort(...)।' },
      { t: 'Write the sign', tb: 'চিহ্ন লিখুন', e: 'a.x - b.x ascending, b.x - a.x descending — never return true/false.', b: 'a.x - b.x ঊর্ধ্ব, b.x - a.x নিম্ন — কখনো true/false ফেরত নয়।' },
      { t: 'Tie-break with ||', tb: 'টাই-ভাঙুন || দিয়ে', e: 'Subtract the primary keys; when that difference is 0 the || moves on to the secondary key.', b: 'প্রথম কী দুটি বিয়োগ করুন; তফাত ০ হলে || দ্বিতীয় কীতে নিয়ে যায় — secondary.localeCompare(secondary)।' },
      { t: 'Confirm stability', tb: 'stable কিনা নিশ্চিত হন', e: 'Every modern engine is stable; for equal keys, insertion order survives.', b: 'আধুনিক engine সবাই stable; সমান key-তে ঢোয়ার ক্রম থাকে।' },
    ],
    visual: 'dsa',
    scenario: 'watch swaps happen while the comparator returns -1, 0 or 1',
    tryit: {
      title: 'Comparator, by hand', titleBn: 'হাতে comparator',
      js: ['const ns = [30, 100, 9];', 'const textOrder = ns.slice().sort();                       // no comparator', 'const numOrder = ns.slice().sort((a, b) => a - b);            // ascending', 'const desc = ns.slice().sort((a, b) => b - a);                // descending', '', 'document.getElementById("out").textContent =', '  "text: " + textOrder.join(", ") + "\\n" +', '  "asc:  " + numOrder.join(", ") + "\\n" +', '  "desc: " + desc.join(", ");'].join('\n'),
      html: '<pre id="out" style="font:14px/1.7 ui-monospace,monospace"></pre>',
    },
    pitfall: { t: 'Sorting numbers without a comparator', tb: 'comparator ছাড়া সংখ্যা সাজানো', e: 'a.sort() turns [30, 100, 9] into [100, 30, 9] — text order. It also returns the array, so a = b.sort() makes a and b the same block.', b: 'a.sort() [30, 100, 9]-কে [100, 30, 9] করে — লেখা-ক্রম। এটি array-টাই ফেরত দেয়, তাই a = b.sort() লিখলে a আর b একই block।' },
    exercises: [
      { kind: 'fill', q: 'Write the comparator that sorts nums from largest to smallest.', qb: 'nums-কে বড় থেকে ছোট সাজানোর comparator লিখুন।', answer: '(a, b) => b - a', accept: ['(a, b) => b - a', 'a, b => b - a', 'function (a, b) { return b - a; }'], hint: 'Swap the subtraction.', hintb: 'বিয়োগ উল্টে দিন।', why: 'Returning a positive number when a is smaller tells the engine to move b first, which produces descending order.', whyb: 'a ছোট হলে ধনাত্মক সংখ্যা ফেরত দিলে engine b-কে আগে নামায় — ফল নিম্নক্রম।' },
      { kind: 'predict', q: 'What does the log print?', qb: 'log কী ছেপে?', code: 'const a = [2, 1, "10"];\nconst s = a.sort();\nconsole.log(s.join(","));', answer: '1,10,2', accept: ['1,10,2', '"1,10,2"'], hint: 'Everything becomes text first.', hintb: 'আগে সব লেখায় বদলায়।', why: 'sort compares "2", "1", "10" as strings: "1" < "10" < "2".', whyb: 'sort "2", "1", "10" লেখা হিসেবে তুলনা করে: "1" < "10" < "2"।' },
    ],
    quiz: [
      { q: 'What exactly does a.sort() return?', qb: 'sort() ফেরত দেয়…', options: ['a new sorted array', 'the same array, sorted in place', 'undefined', 'the first swapped index'], answer: 1, why: 'It returns the mutated receiver — the same reference — which is why chaining a.sort().reverse() works and why the original is gone.', whyb: 'এটি বদলানো receiver-টাই সেই reference ফেরত দেয় — তাই a.sort().reverse() চলে, আর আসল ক্রম হারায়।' },
      { q: 'Comparator returning 0 means…', qb: 'comparator 0 দিলে মানে…', options: ['throw', 'keep current order (tie)', 'move a to the end', 'stop sorting'], answer: 1, why: '0 declares the pair equal; with a stable algorithm their original order is preserved.', whyb: '0 জোড়াকে সমান ঘোষণা করে; stable অ্যালগরিদমে আগের ক্রম থেকে যায়।' },
      { q: 'Sort objects by price then name — which one?', qb: 'price তারপর নামে object সাজান — কোনটি?', options: ['(a, b) => a.price - b.price || a.name.localeCompare(b.name)', '(a, b) => a.price + b.price', 'a.price - b.price', '(a, b) => a.name - b.name'], answer: 0, why: 'The subtraction answers the primary key, and || falls through to the text comparison only when prices tie.', whyb: 'বিয়োগ primary key-এর উত্তর দেয়, দাম সমান হলে || তখন লেখা তুলনায় নামে।' },
    ],
  },

  {
    slug: 'arrays-in-memory',
    title: { en: 'Arrays in Memory and in the Wild', bn: 'memory-তে আর বাইরে অ্যারে' },
    minutes: 13,
    summary: {
      en: 'The cost table every array operation hides, the copy semantics that bite, typed arrays for raw numbers, and how the browser hands you array-shaped things that are not arrays.',
      bn: 'প্রতিটি array কাজের লুকানো খরচের তালিকা, যে কপি-নিয়ম কামড়ায়, কাঁচা সংখ্যার typed array, আর browser যে array-মতো জিনিস দেয় array নয়।',
    },
    lead: {"en":"Two loops over the same list, one takes eight milliseconds and the other takes two seconds, and the code looks identical. What differs is what the machine had to do with memory: whether the values sat side by side, or scattered across the heap. This page is that difference, seen from underneath.","bn":"একই তালিকার উপর দুটি loop, একটি আট মিলিসেকেন্ডে শেষ, অন্যটি দুই সেকেন্ড নেয়, অথচ code দেখতে হুবহু এক। ফারাকটা মেশিনের memory-র কাজে: মানগুলো পাশাপাশি বসে ছিল, না ছড়িয়ে ছিটিয়ে ছিল। নিচ থেকে সেই ফারাকটাই এই পাতায় দেখানো হচ্ছে।"},
    why: [
      { e: 'Reads and writes at a known index are O(1); inserts, deletes and search-while-sorted are the expensive ones.', b: 'জানা index-এ পড়া-লেখা O(1); ঢোকানো, মোছা আর sorted খোঁজাই দামী।' },
      { e: 'Slice and spread copy the top level only — nested arrays and objects stay shared.', b: 'slice আর spread শুধু উপরের স্তর কপি করে — ভিতরের array/object শেয়ার থাকে।' },
      { e: 'Typed arrays (Int32Array, Float64Array) are fixed-size and numeric-only, but they hold one flat buffer — 4-8 bytes per value instead of a boxed double.', b: 'typed array (Int32Array, Float64Array) নির্দিষ্ট আকারের, শুধু সংখ্যা, কিন্তু একটা flat buffer — প্রতি মান ৪-৮ byte, boxed double নয়।' },
    ],
    blocks: [
      { type: 'table', head: [
        { en: 'operation', bn: 'কাজ' }, { en: 'cost', bn: 'খরচ' }, { en: 'why', bn: 'কারণ' },
      ], rows: [
        [{ en: 'a[i] read / write', bn: '' }, { en: 'O(1)', bn: '' }, { en: 'start + i × size, one jump', bn: 'start + i × size, এক লাফ' }],
        [{ en: 'push / pop', bn: '' }, { en: 'O(1) amortised', bn: 'O(1), গড়ে' }, { en: 'spare capacity absorbs the growth', bn: 'খোলা জায়গা বাড়-টা শুষে নেয়' }],
        [{ en: 'splice(i, 1)', bn: '' }, { en: 'O(n)', bn: '' }, { en: 'everything after i slides down', bn: 'i-এর পরের সব নিচে সরে' }],
        [{ en: 'indexOf / includes', bn: '' }, { en: 'O(n)', bn: '' }, { en: 'linear scan until a match', bn: 'মেলার আগ পর্যন্ত হাঁটা' }],
        [{ en: 'sort', bn: '' }, { en: 'O(n log n)', bn: '' }, { en: 'engine compares pairs in a tuned merge/timsort', bn: 'engine সাজানো merge/timsort-এ জোড়া তুলনা করে' }],
        [{ en: 'concat / spread copy', bn: '' }, { en: 'O(n)', bn: '' }, { en: 'a fresh block, top-level references copied', bn: 'নতুন block, শুধু উপরের reference কপি' }],
        [{ en: 'a.includes in a loop', bn: '' }, { en: 'O(n²)', bn: '' }, { en: 'n scans of n each — reach for a Set', bn: 'n বার n-এর হাঁটা — Set নিন' }],
      ], caption: { en: 'Amortised: push occasionally resizes the block, which costs one O(n) copy spread across many cheap pushes.', bn: 'গড়ে: push মাঝে মাঝে block বড় করে — একটি O(n) কপি অনেক সস্তা push-এর মধ্যে ভাগ হয়ে যায়।' } },
      { type: 'code', lang: 'js', filename: 'cost-and-copies.js', code: [
        '// 1. shallow copy is not a copy of what lives inside',
        'const outer = [[1, 2], { k: 3 }];',
        'const shallow = outer.slice();',
        'shallow[0].push(99);',
        'console.log(outer[0]);                 // [1, 2, 99] — same inner array, both lists point at it',
        'const deep = structuredClone(outer);   // copies nested levels too (not functions)',
        '',
        '// 2. O(n²) scan, and the Set that kills it',
        'const ids = Array.from({ length: 200000 }, (_, i) => "u" + i);',
        'const wanted = ["u199999", "u150000", "u7"];',
        '// const found = wanted.map(id => ids.includes(id));  // 600 000 comparisons',
        'const set = new Set(ids);',
        'const found = wanted.map(id => set.has(id));        // 3 lookups',
        '',
        '// 3. 200 000 doubles: boxed array vs one flat buffer',
        'const boxed = new Array(200000).fill(1.5);       // ~3.2 MB of slots + boxed numbers',
        'const flat = new Float64Array(200000).fill(1.5); // 1.6 MB, contiguous, engine can SIMD it',
        'console.log(flat.reduce((s, v) => s + v, 0));    // 300000',
      ].join('\n'), caption: { en: 'Three lessons in twenty lines: shallow ≠ safe, Set beats a scan, and a typed array is a buffer wearing a shirt.', bn: 'বিশ লাইনে তিনটি পাঠ: shallow ≠ নিরাপদ, scan-এর চেয়ে Set, আর typed array হলো গেঞ্জি-পরা buffer।' } },
      { type: 'list', items: [
        { en: 'DOM: [...document.querySelectorAll("img")].map(i => i.src) — the NodeList has length and indexes but no map.', bn: 'DOM: [...document.querySelectorAll("img")].map(i => i.src) — NodeList-এ length ও index আছে, map নেই।' },
        { en: 'Strings are index-addressable but immutable: s[0] works, s[0] = "X" is ignored.', bn: 'string-এ index চলে কিন্তু বদল চলে না: s[0] পড়া যায়, s[0] = "X" উপেক্ষিত।' },
        { en: 'JSON round-trips lose holes: [1,,3] becomes [1,null,3] — null, not empty.', bn: 'JSON round-trip ফাঁকা রাখে না: [1,,3] হয়ে [1,null,3] — ফাঁকা নয়, null।' },
        { en: 'Array.from("αβγ") splits by code point; "αβγ".split("") splits by code unit — surrogate pairs break.', bn: 'Array.from("αβγ") code point ধরে ভাগে; "αβγ".split("") code unit ধরে — surrogate pair ভেঙে যায়।' },
      ] },
    ],
    steps: [
      { t: 'Count the walk', tb: 'হাঁটা গুনুন', e: 'Anything nested that scans a whole array inside an array is n² — the Set or Map fix is one line.', b: 'ভিতরে array-জুড়ে scan আছে এমন বাসা-ভরা loop = n² — Set/Map সমাধান এক লাইনের।' },
      { t: 'Copy the depth you need', tb: 'যত গভীরতা দরকার কপি করুন', e: 'Slice for a flat list; structuredClone for nested state you will mutate.', b: 'সমতল list-এ slice; বদলাবেন এমন বাসা-ভরা state-এ structuredClone।' },
      { t: 'Pick the right container', tb: 'ঠিক পাত্র বাছুন', e: 'Array for order + index. Set for membership. Map for keyed. Typed array for raw numeric streams.', b: 'ক্রম+index চাইলে array। আছে/নেই চাইলে Set। key দিলে Map। কাঁচা সংখ্যার স্রোতে typed array।' },
      { t: 'Convert near the edge', tb: 'প্রান্তে রূপান্তর করুন', e: 'Turn NodeList/arguments/iterators into arrays once, at the boundary, then stay typed inside.', b: 'NodeList/arguments/iterators-কে একবার সীমায় array বানান, ভিতরে সেভাবেই রাখুন।' },
    ],
    visual: null,
    note: 'Order + index → array. Membership → Set. Keyed data → Map. Raw numbers → typed array. Pay for the guarantee you actually need.',
    exercises: [
      { kind: 'predict', q: 'What does the log print?', qb: 'log কী ছেপে?', code: 'const a = [1, [2]];\nconst b = a.slice();\nb[1].push(3);\nconsole.log(JSON.stringify(a));', answer: '[1,[2,3]]', accept: ['[1,[2,3]]', '"[1,[2,3]]"'], hint: 'slice is shallow: the inner array is the same object.', hintb: 'slice সমতল: ভিতরের array একই object।', why: 'b[1] and a[1] are the same nested array, so pushing to one is visible in the other.', whyb: 'b[1] আর a[1] একই বাসা-ভিতরে array, তাই একটিতে push অন্যটিতে দেখা যায়।' },
      { q: 'You have a 100k-row list and must test membership 100k times. Fastest?', qb: '১০০k সারির list-এ ১০০k বার membership চেক — সবচেয়ে দ্রুত?', options: ['a.includes(v) inside the loop', 'new Set(a) once, then set.has(v)', 'a.indexOf(v) with early exit', 'a.sort() then a.indexOf(v)'], answer: 1, hint: 'Build once, then look up cheaply.', hintb: 'একবার গড়ুন, তারপর সস্তায় খুঁজুন।', why: 'One O(n) build plus n O(1) lookups beats n × O(n) scans by orders of magnitude. Sorting first then binary search (a.lastIndexOf style helper) is correct too but costs O(n log n) up front.', whyb: 'একটি O(n) গড়া + n বার O(1) দেখা n × O(n) হাঁটাকে বহুগুণ হারায়। আগে sort করে binary searchও ঠিক, কিন্তু শুরুতে O(n log n)।' },
    ],
    quiz: [
      { q: 'Why is push O(1) “amortised”?', qb: 'push কেন “গড়ে” O(1)?', options: ['It never copies', 'Spare capacity absorbs writes; occasional resize costs O(n)', 'The engine runs in parallel', 'Only for strings'], answer: 1, why: 'Engines over-allocate; when the spare room runs out, one O(n) copy happens and is spread across all the cheap pushes that followed the last resize.', whyb: 'engine আলাদা জায়গা বেশি করে রাখে; ফুরালে একটি O(n) কপি হয়, সেটা আগের বড় করার পরের অনেক সস্তা push-এর মধ্যে ভাগ হয়।' },
      { q: 'Which gives a deep-enough copy of nested state in modern browsers?', qb: 'আধুনিক browser-এ বাসা-ভরা state-এর যথেষ্ট গভীর কপি কোনটি?', options: ['state.slice()', 'structuredClone(state)', '[...state]', 'JSON.parse(JSON.stringify(state)) — always equal'], answer: 1, why: 'structuredClone walks nested levels (JSON also does, but loses Date, Map, Set, undefined and functions). Spread and slice are top-level only.', whyb: 'structuredClone ভিতরের স্তরও ধরে (JSON-ও ধরে, কিন্তু Date, Map, Set, undefined, function হারায়)। spread আর slice শুধু উপরের স্তর।' },
      { q: 'A Float64Array differs from a normal array because…', qb: 'Float64Array সাধারণ array থেকে আলাদা, কারণ…', options: ['it can hold any type', 'fixed length, one number type, one flat buffer', 'it auto-sorts', 'it is a linked list'], answer: 1, why: 'Length is locked at construction, every slot is a 64-bit double in contiguous memory, and out-of-range writes are silently ignored instead of growing the array.', whyb: 'দৈর্ঘ্য তৈরির সময়ই ঠিক, প্রতিটি বাক্স পাশাপাশি memory-তে ৬৪-বিট double, সীমার বাইরে লিখলে চুপ করে উপেক্ষা করে, বড় হয় না।' },
    ],
  },
];

/* ---------- gate top-up: the house anatomy wants 3 exercises + 4 quiz questions ---------- */
const EXTRAS = {
  'what-is-an-array': {
    ex: [{ q: 'What does the log print?', qb: 'log কী ছেপে?', code: 'const a = [1, 2];\nconst b = a;\nb.push(3);\nconsole.log(a.length);', options: ['2', '3', '1', 'a TypeError'], answer: 1, hint: 'b is not a copy.', hintb: 'b কপি নয়।', why: 'Both names point at the same block, so pushing through b grows a: length 3.', whyb: 'দুটি নাম একই block দেখায়, তাই b দিয়ে push করলে a-বেড়ে length ৩।' }],
    q: [{ q: 'How do you ask an array how many slots it has?', qb: 'array-কে কয়টি বাক্স জিজ্ঞেস করার উপায়?', options: ['a.size', 'a.length', 'a.count', 'a.total'], answer: 1, why: 'length is the property on JS arrays; size belongs to Set/Map, count and total do not exist.', whyb: 'JS array-তে length; size Set/Map-এর, count বা total বলে কিছু নেই।' }],
  },
  'indexes-length-and-holes': {
    ex: [{ q: 'How many slots does the walk visit?', qb: 'হাঁটায় কয়টি বাক্স দেখা যায়?', code: 'const a = [1, , 3];\nlet seen = 0;\na.forEach(() => seen++);\nconsole.log(seen);', options: ['2 — the two filled slots', '3 — every slot', '1 — only the first', '0'], answer: 0, hint: 'One slot is a hole, not a value.', hintb: 'একটি বাক্স ফাঁকা, মান নয়।', why: 'forEach skips holes, so indices 0 and 2 are visited: seen is 2.', whyb: 'forEach ফাঁকা এড়ায়, তাই index ০ ও ২ দেখা হয়: seen = ২।' }],
    q: [{ q: 'What does new Array(2).fill(0) produce?', qb: 'new Array(2).fill(0) কী বানায়?', options: ['[0, 0]', 'two holes', '[undefined]', 'a length of 0'], answer: 0, why: 'fill writes a real value into every slot, which also makes the holes visible to forEach/map.', whyb: 'fill প্রতিটি বাক্সে আসল মান লেখে, ফাঁকা-ও তখন forEach/map-এ ধরা পড়ে।' }],
  },
  'add-remove-and-mutate': {
    q: [{ q: 'Which call leaves the original array untouched?', qb: 'কোন ডাকটি আসল array-তে হাত দেয় না?', options: ['a.splice(0, 1)', 'a.pop()', 'a.concat([7])', 'a.unshift(7)'], answer: 2, why: 'concat builds a new array from both operands. splice, pop and unshift all mutate the receiver.', whyb: 'concat দুটি থেকে নতুন array বানায়। splice, pop, unshift তিনটিই নিজেকে বদলায়।' }],
  },
  'walking-an-array': {
    ex: [{ q: 'You need index and value together, without a callback. Which one?', qb: 'callback ছাড়া index আর মান দুটোই চাই। কোনটি?', options: ['for…in', 'for (const [i, x] of a.entries())', 'a.forEach', 'a.map'], answer: 1, hint: 'Which one hands you a pair, and can be broken out of?', hintb: 'কোনটি জোড়া দেয় এবং থেকে বেরোনো যায়?', why: 'entries() yields [index, value] pairs that destructure in for…of; for…in yields string keys and forEach/map force a callback.', whyb: 'entries() জোড়া [index, value] দেয় যা for…of-এ খোলে; for…in লেখা key দেয়, forEach/map বাধ্য করে callback।' }],
    q: [{ q: 'Can you break out of a forEach early?', qb: 'forEach থেকে আগে বেরোনো যায়?', options: ['return false stops it', 'break works inside it', 'no — it runs to the end', 'only on arrays of numbers'], answer: 2, why: 'forEach ignores the callback’s return value; use a classic for or for…of when the walk must stop.', whyb: 'forEach callback-এর ফল উপেক্ষা করে; থামতে হলে সাধারণ for বা for…of ব্যবহার করুন।' }],
  },
  'transform-with-methods': {
    ex: [{ q: 'What does this expression evaluate to?', qb: 'এই expression-টির ফল কী?', code: 'console.log([1, 2].map((x) => x * 2));', options: ['[2, 4]', '[1, 2]', '4', 'undefined'], answer: 0, hint: 'map always returns a new array.', hintb: 'map সবসময় নতুন array ফেরত দেয়।', why: 'map replaces each element with the callback result and returns the new array; forEach would return undefined.', whyb: 'map প্রতিটি উপাদানের জায়গায় callback-এর ফল বসিয়ে নতুন array ফেরত দেয়; forEach হলে undefined আসত।' }],
    q: [{ q: 'reduce((a, b) => a + b) with no seed on [5] returns?', qb: '[5]-এ seed ছাড়া reduce((a, b) => a + b)?', options: ['0', '5', 'NaN', 'TypeError'], answer: 1, why: 'With no initial value the first element becomes the accumulator and there is nothing left to add, so 5 comes back.', whyb: 'প্রাথমিক মান না দিলে প্রথম উপাদানই accumulator হয়, যোগ করার বাকি কিছু নেই, তাই ৫ ফেরত।' }],
  },
  'find-and-test': {
    ex: [{ q: 'One membership check on an array of strings — the clearest call?', qb: 'লেখার array-এ একবার আছে/নেই দেখা — সবচেয়ে স্পষ্ট ডাক?', options: ['a.indexOf(id) === true', 'a.includes(id)', 'a.find(id)', 'a.some(id)'], answer: 1, hint: 'Which call takes a value and answers true or false?', hintb: 'কোনটি মান নিয়ে true বা false দেয়?', why: 'includes takes a value and answers true/false. some takes a predicate, so passing a string tests the string’s own truthiness.', whyb: 'includes মান নিয়ে true/false দেয়। some predicate নেয়, তাই string দিলে সেই string-এর ট্রুথিনেস দেখা হয়।' }],
    q: [{ q: 'findIndex on no match gives…', qb: 'কাউ না মিললে findIndex দেয়…', options: ['undefined', '-1', '0', 'false'], answer: 1, why: 'Index-returning methods use -1 (indexOf, lastIndexOf, findIndex); value-returning ones use undefined (find).', whyb: 'অবস্থান-ফেরত method -1 দেয় (indexOf, lastIndexOf, findIndex); মান-ফেরত undefined দেয় (find)।' }],
  },
  'sort-and-order': {
    ex: [{ kind: 'predict', q: 'What prints?', qb: 'কী ছাপা হয়?', code: 'const a = [3, 1, 2];\nconst b = a.sort();\nconsole.log(a === b);', answer: 'true', accept: ['true'], hint: 'What does sort return?', hintb: 'sort কী ফেরত দেয় ভাবুন।', why: 'sort returns the same array it mutated, so b and a are one and the same block: === is true.', whyb: 'sort বদলানো array-টাই সেই reference ফেরত দেয়, তাই a আর b একই block: === true।' }],
    q: [{ q: 'toSorted() differs from sort() because it…', qb: 'toSorted()sort() থেকে আলাদা কেন?', options: ['sorts a copy and returns it', 'sorts twice', 'requires no comparator', 'only sorts numbers'], answer: 0, why: 'ES2023 added toSorted/toReversed as the non-mutating twins — safe when other code still holds the original array.', whyb: 'ES2023-এ toSorted/toReversed বিনা-বদলের জুটি — অন্য কোড আসল array ধরে রাখলে এটিই নিরাপদ।' }],
  },
  'arrays-in-memory': {
    ex: [{ q: 'structuredClone refuses to copy which of these?', qb: 'structuredClone কোনটি কপি করতে অস্বীকার করে?', options: ['a Date', 'a nested array', 'a function', 'a number'], answer: 2, hint: 'What cannot be written down as data?', hintb: 'যাকে data হিসেবে লেখা যায় না, সেটি কোনটি?', why: 'Functions, DOM nodes, and most class instances are not cloneable; Date, arrays and numbers are. For state, that is exactly what you want.', whyb: 'function, DOM node, বেশিরভাগ class instance কপি হয় না; Date, array, সংখ্যা হয়। state-এ দরকারিও ঠিক এটিই।' }],
    q: [{ q: 'Which container stores raw 64-bit doubles in one buffer?', qb: 'কোন পাত্র এক buffer-কাঁচা ৬৪-বিট double রাখে?', options: ['Array', 'Float64Array', 'Set', 'Map'], answer: 1, why: 'A typed array is a window over an ArrayBuffer, so each slot is 8 bytes of IEEE-754 with no boxing — the point of numeric streams, WebGL and audio.', whyb: 'typed array ArrayBuffer-র জানালা, প্রতিটি slot ৮ byte IEEE-754, boxing নেই — সংখ্যার স্রোত, WebGL, অডিও-র জন্যই।' }],
  },
};
for (const l of lessons) {
  const e = EXTRAS[l.slug];
  if (!e) continue;
  if (e.ex) l.exercises.push(...e.ex);
  if (e.q) l.quiz.push(...e.q);
}
