import type { Hub } from '../../lib/types';
import { WhatIsAnArrayLesson } from './lessons/what-is-an-array';
import { IndexesLengthAndHolesLesson } from './lessons/indexes-length-and-holes';
import { AddRemoveAndMutateLesson } from './lessons/add-remove-and-mutate';
import { WalkingAnArrayLesson } from './lessons/walking-an-array';
import { TransformWithMethodsLesson } from './lessons/transform-with-methods';
import { FindAndTestLesson } from './lessons/find-and-test';
import { SortAndOrderLesson } from './lessons/sort-and-order';
import { ArraysInMemoryLesson } from './lessons/arrays-in-memory';

export const arraysHub: Hub = {
  slug: 'arrays',
  name: 'Arrays',
  icon: '📦',
  tagline: { en: 'A row of numbered slots: index, length, push/pop/shift, map/filter/reduce, sort with a comparator, and the cost of every one of them.', bn: 'নম্বর দেওয়া বাক্সের সারি: index, length, push/pop/shift, map/filter/reduce, comparator দিয়ে sort — আর এগুলোর প্রতিটির খরচ।' },
  intro: { en: 'An array is the first data structure every programmer meets, and the one that hides the most: it is a contiguous block of numbered slots, so reading any slot costs the same, but squeezing one out of the front moves everything behind it. These eight lessons walk from “what is index 0” to “why shift() is slow”, with a runnable example and a check on every page.', bn: 'Array হলো প্রথম data structure যা প্রতিটি প্রোগ্রামারের সামনে আসে, আর সবচেয়ে বেশি জিনিস এটিই লুকিয়ে রাখে: এটি পাশাপাশি রাখা নম্বর দেওয়া বাক্সের একটা ব্লক। তাই যেকোনো বাক্স পড়া সমান সস্তা, কিন্তু সামনের দিক থেকে একটা বের করলে পেছনের সব বাক্সে নম্বর বদলাতে হয়। এই আটটি পাঠ “index 0 মনে কী” থেকে “shift() কেন ধীর” পর্যন্ত যায় — প্রতিটি পাতায় চলমান উদাহরণ আর যাচাইসহ।' },
  roadmap: [
    {
      title: { en: 'Stage 1 — First principles', bn: 'ধাপ ১ — ভিত্তি' },
      items: [
        {
          en: 'What an Array Is — An array is an ordered, numbered run of slots held in one contiguous block.',
          bn: 'অ্যারে আসলে কী — অ্যারে হলো একটানা memory block-এ রাখা ক্রমবদ্ধ, নম্বর দেওয়া বাক্সের সারি।',
        },
        {
          en: 'Indexes, Length and Holes — length is one past the highest index, not a count of filled slots — and that gap explains holes, sparse arrays, arr.',
          bn: 'index, length আর ফাঁকা — length সবচেয়ে বড় index-এর এক বেশি, ভরা বাক্সের গণনা নয় — এই এক ধাপ তফাতেই বোঝা যায় hole, sparse array, arr.',
        },
        {
          en: 'Adding and Removing — push/pop are O(1); shift/unshift and splice are O(n) because the block must stay contiguous.',
          bn: 'যোগ আর বিয়োগ — push/pop O(1); shift/unshift আর splice O(n), কারণ বাক্সের ব্লক পাশাপাশি থাকতে হবে।',
        },
      ],
    },
    {
      title: { en: 'Stage 2 — Working set', bn: 'ধাপ ২ — কাজের অংশ' },
      items: [
        {
          en: 'Walking an Array — for, for…of, forEach, for…in and while — five ways to walk the same slots, and each one breaks somewhere: index access, break, this-binding and hole handling are the fault lines.',
          bn: 'অ্যারে পড়ে বেড়ানো — for, for…of, forEach, for…in আর while — একই বাক্স পাড়ি দেওয়ার পাঁচ পথ, আর প্রতিটির দুর্বল জায়গা আছে: index access, break, this-binding, ফাঁকা পড়ার ভঙ্গি — এখানেই ভাঙন।',
        },
        {
          en: 'map, filter, reduce — The three transforms that replace most hand-written loops, their exact return contracts, and the reduce accumulator mistake that silently produces [NaN].',
          bn: 'ম্যাপ, ফিল্টার, রিডিউস — তিনটি transform যেখানে প্রায় সব হাতে-লেখা loop বদলে যায়, তাদের ফেরতের চুক্তি, আর reduce-এর যে ভুলে চুপ করে [NaN] তৈরি হয়।',
        },
        {
          en: 'Finding and Testing — indexOf vs includes vs find vs at, and the pair that answers “is any/all of it true” without walking the whole array twice.',
          bn: 'খোঁজা যাচাই — indexOf বনাম includes বনাম find বনাম at, আর যে জুটি পুরো array দুবার না হেঁটেই “কোনোটাকি সত্যি? সবটাই সত্যি?” উত্তর দেয়।',
        },
      ],
    },
    {
      title: { en: 'Stage 3 — Professional edge', bn: 'ধাপ ৩ — পেশাদার স্তর' },
      items: [
        {
          en: 'Sorting and Order — sort() mutates, compares as strings by default, and is stable since ES2019.',
          bn: 'সাজানো ক্রম — sort() নিজেকে বদলায়, ডিফল্টে লেখার মতো তুলনা করে, ES2019 থেকে stable। সংখ্যার ক্রমে (a, b) => a - b লাগে, object-এ স্পষ্ট key লাগে।',
        },
        {
          en: 'Arrays in Memory and in the Wild — The cost table every array operation hides, the copy semantics that bite, typed arrays for raw numbers, and how the browser hands you array-shaped things that are not arrays.',
          bn: 'memory-তে আর বাইরে অ্যারে — প্রতিটি array কাজের লুকানো খরচের তালিকা, যে কপি-নিয়ম কামড়ায়, কাঁচা সংখ্যার typed array, আর browser যে array-মতো জিনিস দেয় array নয়।',
        },
      ],
    },
  ],
  lessons: [WhatIsAnArrayLesson, IndexesLengthAndHolesLesson, AddRemoveAndMutateLesson, WalkingAnArrayLesson, TransformWithMethodsLesson, FindAndTestLesson, SortAndOrderLesson, ArraysInMemoryLesson],
  projects: [
    {
      title: { en: 'Arrays drill', bn: 'অ্যারে অনুশীলন' },
      difficulty: 'beginner',
      brief: { en: 'Rebuild the worked examples from memory, then change one input and predict the new output before running it.', bn: 'উদাহরণগুলো মুখস্থ না দেখে লিখুন, তারপর একটি ইনপুট বদালিয়ে আউটপুট আগেই ভাবুন, পরে চালাুন।' },
    },
    {
      title: { en: 'Arrays in a real page', bn: 'সত্যিকারের পেজে অ্যারে' },
      difficulty: 'beginner',
      brief: { en: 'Wire the concept into a small page you already own, and write one paragraph on what broke first.', bn: 'নিজের একটি ছোট পেজে ধারণাটি বসান, আর প্রথমে কী ভেঙেছিল সেটা নিয়ে একটি অনুচ্ছেদ লিখুন।' },
    },
  ],
  bestPractices: [
    {
      en: 'Count from zero, and write the last index as length - 1 every time — off-by-one is the top array bug.',
      bn: 'শুরু থেকে নয়, ০ থেকে গুনে লিখুন; শেষ index সবসময় length - 1 লিখুন — off-by-এই array-র সবচেয়ে বড় ভুল।',
    },
    {
      en: 'Prefer map/filter/reduce for building a new array; use a for loop when you need to stop early or mutate in place.',
      bn: 'নতুন array বানাতে map/filter/reduce এগিয়ে; আগে থামতে হলে বা জায়গাতেই বদলাতে হলে for loop ব্যবহার করুন।',
    },
    {
      en: 'Never call shift() inside a loop over a big array — it re-numbers every remaining slot on each call.',
      bn: 'বড় array-র উপর loop-এর ভিতরে shift() কখনও ডাকবেন না — প্রতিবারেই বাকি সব বাক্সের নম্বর বদলায়।',
    },
    {
      en: 'Sort numbers with an explicit comparator: .sort((a, b) => a - b). Default sort compares text, so 10 lands before 9.',
      bn: 'সংখ্যা সাজাতে স্পষ্ট comparator দিন: .sort((a, b) => a - b)। ডিফল্ট sort লেখার মতো তুলনা করে, তাই ৯-এর আগে ১০ বসে।',
    },
    {
      en: 'Copy with slice() or toSorted()/toReversed() when the original must stay intact; push/splice/sort change the array itself.',
      bn: 'আসল array অক্ষত চাইলে slice() বা toSorted()/toReversed() দিয়ে কপি করুন; push/splice/sort নিজেকেই বদলে দেয়।',
    },
  ],
  interview: [
    {
      q: { en: 'Why is arr[5000] as fast as arr[0] but arr.shift() is O(n)?', bn: 'arr[5000] কেন arr[0]-এর মতোই দ্রুত, কিন্তু arr.shift() কেন O(n)?' },
      a: { en: 'The array knows its start address, so slot i is start + i × size — one arithmetic step. shift() removes slot 0, so every later element must move down one slot to keep the block contiguous: n copies.', bn: 'array-র শুরু-ঠিকানা জানা আছে, তাই slot i = start + i × size — এক যোগ-গুণ। shift() slot 0 মুছে দেয়, তাই পাশাপাশি ব্লক রাখতে বাকি সব উপাদান এক ধাপ নিচে নামাতে হয়: n কপি।' },
    },
    {
      q: { en: 'Does [1,2,3] === [1,2,3] in JavaScript? Why not?', bn: 'JavaScript-এ [1,2,3] === [1,2,3] নাকি? কেন নয়?' },
      a: { en: 'No. Arrays are objects, so === compares references, not contents. Compare with join, or an element-wise loop, or a helper like _.isEqual / structuredClone-based checks.', bn: 'না। array হলো object, তাই === বিষয়বস্তু নয়, reference তুলনা করে। join দিয়ে, বা element-wise loop দিয়ে, অথবা _.isEqual-এর মতো helper দিয়ে মেলান।' },
    },
    {
      q: { en: 'map vs forEach — which one do you return an array from?', bn: 'map বনাম forEach — কোনটি থেকে array ফেরত পাওয়া যায়?' },
      a: { en: 'map returns a new array of the same length with your callback results; forEach returns undefined and exists only for side effects. Reassigning inside forEach changes nothing.', bn: 'map একই দৈর্ঘ্যের নতুন array ফেরত দেয় callback-এর ফল নিয়ে; forEach undefined দেয়, শুধু পাশের কাজের জন্য। forEach-এর ভিতরে বসালে কিছু বদলায় না।' },
    },
    {
      q: { en: 'What does Array.isArray(x) catch that typeof x === "object" misses?', bn: 'typeof x === "object" যা ধরে না, Array.isArray(x) কী ধরে?' },
      a: { en: 'typeof says "object" for arrays, plain objects, Date, Map, null is separate — it cannot single out arrays. Array.isArray is true only for arrays (and their subclass instances), so it is the check to use before .length or .map.', bn: 'typeof array, সাধারণ object, Date, Map — সবতেই "object" বলে (null আলাদা) — array আলাদা করে ধরে না। Array.isArray শুধু array-তে সত্যি, তাই .length বা .map-এর আগে এটাই চেক।' },
    },
  ],
  realWorld: [
    {
      en: 'Every HTMLCollection, NodeList and querySelectorAll result is array-shaped, not an array — Array.from(...) or [...nodes] unlocks map and filter.',
      bn: 'প্রতিটি HTMLCollection, NodeList, querySelectorAll-এর ফল array-এর মতো দেখায়, array নয় — Array.from(...) বা [...nodes] দিলে map/filter খোলে।',
    },
    {
      en: 'Spread for merged state ([...prev, item]) is what makes React re-renders fire: a new array reference is the signal that data changed.',
      bn: 'React-এ re-render এইজন্যই চলে যে নতুন array reference তৈরি হয়: [...prev, item] spread-ই সেই সংকেত।',
    },
    {
      en: 'Pandas Series, NumPy arrays and typed arrays (Int32Array) trade JavaScript flexibility for one flat memory block — the same contiguity idea, enforced.',
      bn: 'Pandas Series, NumPy array, typed array (Int32Array) — সবাই JavaScript-এর নমনীয়তা বদলে একটানা memory block দেয়; একই contiguous ধারণা, এবার বাধ্যতামূলক।',
    },
    {
      en: 'A leaderboard is a sorted array; a message queue is shift/push; a undo stack is push/pop — three products, one data structure.',
      bn: 'Leaderboard হলো sorted array; message queue হলো shift/push; undo stack হলো push/pop — তিনটি পণ্য, একই data structure।',
    },
  ],
  references: [
    {
      group: { en: 'Add and remove', bn: 'যোগ ও বিয়োগ' },
      items: [
        {
          term: 'push(...items)',
          def: { en: 'Appends to the end, returns the new length. O(n) in the number of items added.', bn: 'শেষে যোগ করে, নতুন length ফেরত দেয়। যোগ-সংখ্যা অনুযায়ী O(n)।' },
        },
        {
          term: 'pop()',
          def: { en: 'Removes and returns the last element. O(1). Popping an empty array returns undefined.', bn: 'শেষ উপাদান মুছে সেটি ফেরত দেয়। O(1)। খালি array-তে undefined।' },
        },
        {
          term: 'shift() / unshift()',
          def: { en: 'Remove/add at the front, and re-number every later slot — O(n) each time.', bn: 'সামনে মুছুন/যোগ করুন, সাথে বাকি সব slot-এর নম্বর বদলায় — প্রতিবার O(n)।' },
        },
        {
          term: 'splice(i, n, ...items)',
          def: { en: 'Cut n items starting at i, insert items there. The only in-place edit that both removes and adds. Mutates.', bn: 'i থেকে nটি কেটে সেখানে items বসায়। একমাত্র in-place সম্পাদনা যা মুছেও ফেলে, বসায়ও। বদলে দেয়।' },
        },
        {
          term: 'slice(a, b)',
          def: { en: 'A copy of the half-open window [a, b). Never mutates, never complains about out-of-range numbers.', bn: '[a, b) জানালার কপি। কখনও বদলায় না, সীমার বাইরের সংখ্যায় অভিযোগ করে না।' },
        },
      ],
    },
    {
      group: { en: 'Look and transform', bn: 'খোঁজা ও বদল' },
      items: [
        {
          term: 'at(-1)',
          def: { en: 'Index from the end, negative allowed. Same value as arr[arr.length - 1].', bn: 'পেছন থেকে গুনে index, ঋণাত্মক চলবে। arr[arr.length - 1]-এর সমান।' },
        },
        {
          term: 'indexOf / includes',
          def: { en: 'indexOf returns position or -1 (uses ===, so NaN never matches). includes returns true/false and does find NaN.', bn: 'indexOf অবস্থান বা -1 দেয় (=== চলে, তাই NaN মেলে না)। includes true/false দেয়, NaN-ও ধরে।' },
        },
        {
          term: 'find / findIndex',
          def: { en: 'First element (or its index) whose callback returns truthy; undefined / -1 if none.', bn: 'প্রথম উপাদান (বা তার index) যার callback সত্যি; না মিললে undefined / -1।' },
        },
        {
          term: 'map / filter / reduce',
          def: { en: 'New array of results / new array of keepers / one accumulated value. All three leave the source alone.', bn: 'ফলের নতুন array / রাখার-উপাদানের array / একটি জমা-মান। তিনটিই আসল array-কে ছোঁয়ে না।' },
        },
        {
          term: 'some / every',
          def: { en: 'Short-circuit booleans: some stops at the first true, every at the first false.', bn: 'থামিয়ে-দেওয়া boolean: some প্রথম সত্যিতে থামে, every প্রথম মিথ্যায়।' },
        },
        {
          term: 'sort / toSorted',
          def: { en: 'sort mutates and compares as strings unless you pass (a, b) => a - b; toSorted returns a sorted copy.', bn: 'sort নিজেকে বদলে, comparator না দিলে লেখা হিসেবে তুলনা করে; toSorted সাজানো কপি দেয়।' },
        },
      ],
    },
  ]
};
