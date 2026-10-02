import type { Lesson } from '../../../lib/types';

export const WalkingAnArrayLesson: Lesson = {
  slug: 'walking-an-array',
  tech: 'arrays',
  title: { en: 'Walking an Array', bn: 'অ্যারে পড়ে বেড়ানো' },
  summary: { en: 'for, for…of, forEach, for…in and while — five ways to walk the same slots, and each one breaks somewhere: index access, break, this-binding and hole handling are the fault lines.', bn: 'for, for…of, forEach, for…in আর while — একই বাক্স পাড়ি দেওয়ার পাঁচ পথ, আর প্রতিটির দুর্বল জায়গা আছে: index access, break, this-binding, ফাঁকা পড়ার ভঙ্গি — এখানেই ভাঙন।' },
  minutes: 10,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Walking an Array', bn: 'WHAT — অ্যারে পড়ে বেড়ানো' },
    },
    {
      type: 'para',
      text: { en: 'You have thirty names in a list and you must show every one of them — there is no way to print thirty statements, and no way to know thirty in advance. Walking the array is the pattern under every loop you will ever write, and this page is the four ways to walk it, and when each one is wrong.', bn: 'আপনার তালিকায় ত্রিশটি নাম, আর প্রত্যেকটি দেখাতেই হবে — ত্রিশটি আলাদা লাইন লেখা যায় না, আগে থেকে ত্রিশ জেনেও বসার উপায় নেই। array ঘুরে দেখার এই ঢং-ই পরে লেখা প্রতিটি loop-এর নিচে, আর এই পাতায় সেটি চারভাবে ঘোরার কথা — কখন কোনটি ভুল।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'for is the only form that can break or continue with an index in hand.',
          bn: 'একমাত্র for-ই index হাতে রেখে break/continue করতে দেয়।',
        },
        {
          en: 'for…in walks an object’s keys — on arrays it also walks custom properties and yields strings.',
          bn: 'for…in object-এর key হাঁটে — array-তে নিজস্ব property-ও ধরে, সংখ্যা লেখা হিসেবে।',
        },
        {
          en: 'for…of uses the iterator, so it works on arrays, Maps, Sets and strings alike.',
          bn: 'for…of iterator ব্যবহার করে, তাই array, Map, Set, string — সবাইতে চলে।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'walk.js',
      code: `const xs = [4, 9, 16, 25];

for (let i = 0; i < xs.length; i++) {
  if (xs[i] > 20) break;          // index in hand: can bail out early
  console.log("classic", i, xs[i]);
}

for (const x of xs) console.log("of", x);      // values, no index, break/continue allowed
xs.forEach((x, i) => console.log("each", i, x)); // index in the callback, no break
xs.entries();   // iterator of [index, value] pairs
for (const [i, x] of xs.entries()) console.log("pair", i, x);

xs.custom = 1;
for (const k in xs) console.log("in  ", k);    // 0,1,2,3,custom — strings, and the extra key`,
      caption: { en: 'The for…in line prints "custom" too. That is the loop to avoid on arrays.', bn: 'for…in লাইনটি "custom"-ও ছাপে। array-তে এই loop-টাই এড়িয়ে চলতে হয়।' },
    },
    {
      type: 'compare',
      title: { en: 'Which walk to take', bn: 'কোন পথ নেবেন' },
      left: {
        title: { en: 'Use for / for…of', bn: 'for / for…of নিন' },
        points: [
          { en: 'Early exit with break, or skip with continue.', bn: 'break দিয়ে আগে থামা, continue দিয়ে এড়ানো।' },
          {
            en: 'Index available without a callback: fastest shape for hot loops.',
            bn: 'callback ছাড়াই index: গরম loop-এ দ্রুততম।',
          },
          {
            en: 'Works the same on typed arrays and arrays of holes.',
            bn: 'typed array আর ফাঁকা array দুটোতেই একই রকম।',
          },
        ],
      },
      right: {
        title: { en: 'Use forEach / map', bn: 'forEach / map নিন' },
        points: [
          {
            en: 'Transform or build a new array — map returns one.',
            bn: 'বদলান বা নতুন array বানান — map কপি ফেরত দেয়।',
          },
          { en: 'Chains read as intent: .filter(...).map(...).', bn: 'চেইনে উদ্দেশ্য দেখা যায়: .filter(...).map(...)।' },
          { en: 'No break; return only skips one step.', bn: 'break নেই; return শুধু একটি ধাপে লাগে।' },
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
          title: { en: '1. Need the index or an exit?', bn: '১. index না আগে থামা?' },
          text: { en: 'Plain for with i. It is also the only one that can break on a condition.', bn: 'সাধারণ for, i সহ। শর্তে থামার একমাত্র পথও এটাই।' },
        },
        {
          title: { en: '2. Just the values', bn: '২. শুধু মান চাই' },
          text: { en: 'for…of — clean, works on any iterable, supports break.', bn: 'for…of — পরিষ্কার, যেকোনো iterable-এ চলে, break চলে।' },
        },
        {
          title: { en: '3. Build something new', bn: '৩. নতুন কিছু বানান' },
          text: { en: 'map / filter / reduce. No manual accumulator variable.', bn: 'map / filter / reduce। হাতে accumulator লিখতে হয় না।' },
        },
        {
          title: { en: '4. Never for…in', bn: '৪. for…in নয়' },
          text: { en: 'It walks keys of any object: strings, custom props, prototypes if someone polluted one.', bn: 'যেকোনো object-এর key হাঁটে: লেখা, নিজস্ব property, prototype দূষিত হলে সেটাও।' },
        },
      ],
    },
    {
      type: 'visual',
      id: 'execution',
      scenario: 'watch a loop step through frames while the call stack runs the callback',
    },
  ],
  exercises: [
    {
      id: 'walking-an-array-ex1',
      kind: 'predict',
      topic: 'arrays: Walking an Array',
      question: { en: 'How many lines does the last loop print?', bn: 'শেষ loop কতটি লাইন ছেপে?' },
      code: `const a = [1, 2, 3];
a.extra = "x";
for (const k in a) console.log(k);`,
      answer: '4',
      accept: [
        '4',
        'four',
      ],
      hint: { en: 'for…in lists index keys as strings, plus any custom property.', bn: 'for…in index key-গুলো লেখা হিসেবে দেয়, সাথে নিজস্ব property-ও।' },
      explanation: { en: 'Keys "0", "1", "2" and "extra" are printed: four lines.', bn: '"0", "1", "2" আর "extra" — মোট চারটি লাইন।' },
    },
    {
      id: 'walking-an-array-ex2',
      kind: 'mcq',
      topic: 'arrays: Walking an Array',
      question: { en: 'You must stop as soon as a negative number appears. Which loop?', bn: 'ঋণাত্মক সংখ্যা দেখা মাত্রই থামতে হবে। কোন loop?' },
      options: [
        { en: 'forEach with return', bn: 'forEach-এ return দিলেই থামে' },
        { en: 'for…of with break', bn: 'for…of + break — থামার একমাত্র ছোট পথ' },
        { en: 'map with a flag', bn: 'map + flag, শেষ পর্যন্ত সব বাক্স পড়ে' },
        { en: 'Object.entries().map()', bn: 'Object.entries().map()' },
      ],
      answer: 1,
      hint: { en: 'return leaves the callback, not the loop.', bn: 'return callback থেকে বেরোয়, loop থেকে নয়।' },
      explanation: { en: 'return inside forEach only exits that callback for one element; a break in for…of (or a classic for) stops the whole walk.', bn: 'forEach-তে return শুধু সেই একটি উপাদানের callback থেকে বেরোয়; for…of-এর break পুরো হাঁটা থামায়।' },
    },
    {
      id: 'walking-an-array-ex3',
      kind: 'mcq',
      topic: 'arrays: Walking an Array',
      question: { en: 'You need index and value together, without a callback. Which one?', bn: 'callback ছাড়া index আর মান দুটোই চাই। কোনটি?' },
      options: [
        { en: 'for…in', bn: 'for…in' },
        { en: 'for (const [i, x] of a.entries())', bn: 'for (const [i, x] of a.entries())' },
        { en: 'a.forEach', bn: 'a.forEach' },
        { en: 'a.map', bn: 'a.map' },
      ],
      answer: 1,
      hint: { en: 'Which one hands you a pair, and can be broken out of?', bn: 'কোনটি জোড়া দেয় এবং থেকে বেরোনো যায়?' },
      explanation: { en: 'entries() yields [index, value] pairs that destructure in for…of; for…in yields string keys and forEach/map force a callback.', bn: 'entries() জোড়া [index, value] দেয় যা for…of-এ খোলে; for…in লেখা key দেয়, forEach/map বাধ্য করে callback।' },
    },
  ],
  quiz: {
    id: 'walking-an-array-quiz',
    title: { en: 'Quiz — Walking an Array', bn: 'কুইজ — অ্যারে পড়ে বেড়ানো' },
    questions: [
      {
        id: 'walking-an-array-q1',
        kind: 'mcq',
        topic: 'arrays: Walking an Array',
        question: { en: 'forEach gives which arguments to its callback?', bn: 'forEach callback-এ কোন argument গুলো যায়?' },
        options: [
          { en: '(value, index, array)', bn: '(value, index, array)' },
          { en: '(index, value)', bn: '(index, value)' },
          { en: '(value, key)', bn: '(value, key)' },
          { en: '(array, value)', bn: '(array, value)' },
        ],
        answer: 0,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Element, then position, then the array itself — the third one is easy to forget and handy for a sum without a second loop.', bn: 'আগে উপাদান, তারপর অবস্থান, তারপর array টাই — তিনটি ভুলে যান, কিন্তু দ্বিতীয় loop ছাড়া যোগে কাজে লাগে।' },
      },
      {
        id: 'walking-an-array-q2',
        kind: 'mcq',
        topic: 'arrays: Walking an Array',
        question: { en: 'What does xs.entries() hand you?', bn: 'xs.entries() কী দেয়?' },
        options: [
          { en: 'values only', bn: 'values only' },
          { en: 'an iterator of [index, value] pairs', bn: 'an iterator of [index, value] pairs' },
          { en: 'a copy of the array', bn: 'array-এর কপি' },
          { en: 'keys as strings', bn: 'string হিসেবে key' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'An iterator of pairs, which destructures nicely in for (const [i, x] of xs.entries()).', bn: 'জোড়ার iterator, যা for (const [i, x] of xs.entries())-এ সুন্দরভাবে খোলে।' },
      },
      {
        id: 'walking-an-array-q3',
        kind: 'mcq',
        topic: 'arrays: Walking an Array',
        question: { en: 'Why does for…in misbehave on arrays?', bn: 'array-তে for…in কেন বেগতিক?' },
        options: [
          { en: 'It is slower only', bn: 'শুধু ধীর বলে' },
          {
            en: 'It yields string keys and includes own non-index properties',
            bn: 'key string হিসেবে আসে, array-তে বসানো অ-সংখ্যক property-ও পড়ে',
          },
          { en: 'It skips the last element', bn: 'শেষ উপাদানটি বাদ দেয়' },
          { en: 'It throws on holes', bn: 'hole দেখলে throw করে' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'for…in is an object loop: keys come back as strings and any extra own property (a.foo) is included.', bn: 'for…in object-এর loop: key লেখা হিসেবে আসে, আর নিজস্ব অতিরিক্ত property (a.foo)ও ধরা পড়ে।' },
      },
      {
        id: 'walking-an-array-q4',
        kind: 'mcq',
        topic: 'arrays: Walking an Array',
        question: { en: 'Can you break out of a forEach early?', bn: 'forEach থেকে আগে বেরোনো যায়?' },
        options: [
          { en: 'return false stops it', bn: 'return false দিলে থামে' },
          { en: 'break works inside it', bn: 'ভেতরে break চলে' },
          { en: 'no — it runs to the end', bn: 'না — শেষ বাক্স পর্যন্ত চলে' },
          { en: 'only on arrays of numbers', bn: 'শুধু সংখ্যার array-তে' },
        ],
        answer: 2,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'forEach ignores the callback’s return value; use a classic for or for…of when the walk must stop.', bn: 'forEach callback-এর ফল উপেক্ষা করে; থামতে হলে সাধারণ for বা for…of ব্যবহার করুন।' },
      },
    ],
  },
  nextLesson: {
    slug: 'transform-with-methods',
    tech: 'arrays',
    title: { en: 'map, filter, reduce', bn: 'ম্যাপ, ফিল্টার, রিডিউস' },
  },
};
