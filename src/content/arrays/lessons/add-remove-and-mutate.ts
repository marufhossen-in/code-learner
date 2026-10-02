import type { Lesson } from '../../../lib/types';

export const AddRemoveAndMutateLesson: Lesson = {
  slug: 'add-remove-and-mutate',
  tech: 'arrays',
  title: { en: 'Adding and Removing', bn: 'যোগ আর বিয়োগ' },
  summary: { en: 'push/pop are O(1); shift/unshift and splice are O(n) because the block must stay contiguous. Learn which method mutates, which returns a copy, and what each one hands back.', bn: 'push/pop O(1); shift/unshift আর splice O(n), কারণ বাক্সের ব্লক পাশাপাশি থাকতে হবে। কোনটি নিজেকে বদলায়, কোনটি কপি দেয়, আর কোনটি কী ফেরত দেয় — সেটাই মূল।' },
  minutes: 12,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Adding and Removing', bn: 'WHAT — যোগ আর বিয়োগ' },
    },
    {
      type: 'para',
      text: { en: 'Adding at the end is cheap: the engine keeps a little spare room after the last slot, so push writes one value and increments length. Adding at the front is expensive: slot 0 must belong to the new element, so every existing element is copied one slot down first. That single fact explains three habits — build a queue with push and an index pointer instead of shift, prepend with unshift only on small arrays, and prefer concat / spread for joining.', bn: 'শেষে যোগ সস্তা: শেষ বাক্সের পরে engine একটু জায়গা খোলা রাখে, তাই push ১টি মান লিখে length বাড়িয়ে দেয়। সামনে যোগ দামী: slot 0 নতুন উপাদানের হতে হবে, তাই আগেই প্রতিটি পুরোনো উপাদান ১ ধাপ নিচে কপি করতে হয়। এই ১ তথ্যেই ৩টি অভ্যাসের ব্যাখ্যা — queue বানান push + একটা index pointer দিয়ে, shift নয়; ছোট array-তে unshift; জোড়া দিতে concat / spread।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'Return values differ: push gives the new length, pop gives the removed item, splice gives an array of removed items.',
          bn: 'ফেরত আলাদা: push নতুন length দেয়, pop মুছে-যাওয়া উপাদান, splice মুছে-যাওয়াগুলোর array।',
        },
        {
          en: 'Mutating vs copying decides whether other references to the same array see your change.',
          bn: 'বদলায় নাকি কপি — তাই ঠিক করে অন্য reference-ও পরিবর্তন দেখে কি না।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'edit.js',
      code: `const log = [];
log.push("boot");            // ["boot"]            — returns 1 (new length)
log.push("hit", "miss");     // ["boot","hit","miss"]— returns 3
const last = log.pop();      // last "miss", log is ["boot","hit"]

log.unshift("start");        // ["start","boot","hit"] — O(n): everyone shifts right
const first = log.shift();   // first "start",        — O(n): everyone shifts left

const t = ["a", "b", "c", "d", "e"];
t.splice(1, 2, "X");         // ["a","X","d","e"] — remove 2 at index 1, insert "X"
const cut = t.splice(0, 1);  // cut is ["a"], t is ["X","d","e"] — splice RETURNS the removed ones

const copy = t.slice(1);     // copy ["d","e"]; t untouched
console.log(t.concat(["z"])); // ["X","d","e","z"] — t itself still ["X","d","e"]`,
      caption: { en: 'Every line except the last two mutates t or log. slice and concat are the safe pair.', bn: 'শেষ দুটি লাইন বাদে প্রতিটি লাইন t বা log নিজেদের বদলে দেয়। slice আর concat নিরাপদ জুটি।' },
    },
    {
      type: 'table',
      head: [
        { en: 'method', bn: 'method' },
        { en: 'side', bn: 'পক্ষ' },
        { en: 'mutates?', bn: 'বদলায়?' },
        { en: 'returns', bn: 'ফেরত' },
        { en: 'cost', bn: 'খরচ' },
      ],
      rows: [
        [
          { en: 'push(x)', bn: 'push(x)' },
          { en: 'end', bn: 'শেষ' },
          { en: 'yes', bn: 'হ্যাঁ' },
          { en: 'new length', bn: 'নতুন length' },
          { en: 'O(1)', bn: 'O(1)' },
        ],
        [
          { en: 'pop()', bn: 'pop()' },
          { en: 'end', bn: 'শেষ' },
          { en: 'yes', bn: 'হ্যাঁ' },
          { en: 'the item', bn: 'উপাদান' },
          { en: 'O(1)', bn: 'O(1)' },
        ],
        [
          { en: 'unshift(x)', bn: 'unshift(x)' },
          { en: 'front', bn: 'সামনে' },
          { en: 'yes', bn: 'হ্যাঁ' },
          { en: 'new length', bn: 'নতুন length' },
          { en: 'O(n)', bn: 'O(n)' },
        ],
        [
          { en: 'shift()', bn: 'shift()' },
          { en: 'front', bn: 'সামনে' },
          { en: 'yes', bn: 'হ্যাঁ' },
          { en: 'the item', bn: 'উপাদান' },
          { en: 'O(n)', bn: 'O(n)' },
        ],
        [
          { en: 'splice(i, n, ...x)', bn: 'splice(i, n, ...x)' },
          { en: 'anywhere', bn: 'যেখানে খুশি' },
          { en: 'yes', bn: 'হ্যাঁ' },
          { en: 'removed array', bn: 'মুছে-যাওয়ার array' },
          { en: 'O(n)', bn: 'O(n)' },
        ],
        [
          { en: 'slice(a, b)', bn: 'slice(a, b)' },
          { en: 'window', bn: 'জানালা' },
          { en: 'no', bn: 'না' },
          { en: 'a copy', bn: 'এক কপি' },
          { en: 'O(k)', bn: 'O(k)' },
        ],
        [
          { en: 'toReversed / toSorted', bn: 'নতুন array চাইলে' },
          { en: 'whole', bn: 'পুরোটা' },
          { en: 'no', bn: 'না' },
          { en: 'a copy', bn: 'এক কপি' },
          { en: 'O(n log n)', bn: 'O(n log n)' },
        ],
      ],
      caption: { en: 'k = elements copied. Only the last two rows are safe inside a component render.', bn: 'k = কপি-হওয়া উপাদান। শেষ দুটি সারিই component render-এ নিরাপদ।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Deque without the tax', bn: 'কর ছাড়া queue' },
      text: { en: 'If you are removing from the front in a loop, keep a head pointer: let head = 0; read a[head]; head++. Cost O(1) per item, and one a.splice(0, head) at the end if you must shrink the block.', bn: 'loop-এ সামনে থেকে মুছতে হলে head pointer রাখুন: let head = 0; a[head] পড়ুন; head++। উপাদান-প্রতি O(1), শেষে ১ বার a.splice(0, head) ব্লক ছোট করতে।' },
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
          title: { en: '1. Pick the end', bn: '১. পক্ষ বেছে নিন' },
          text: { en: 'End edits are O(1). Front edits are O(n) — only pay that when the array is short.', bn: 'শেষে বদল O(1)। সামনে O(n) — ছোট array না হলে খরচ ভোগেন না।' },
        },
        {
          title: { en: '2. Mutate or copy?', bn: '২. বদলাবেন না কপি?' },
          text: { en: 'Other references to the same array see a mutation. In React state, always copy.', bn: 'একই array-র অন্য reference বদল দেখে ফেলে। React state-এ সবসময় কপি করুন।' },
        },
        {
          title: { en: '3. Read the return', bn: '৩. যা ফেরত আসে পড়ুন' },
          text: { en: 'push → length. pop/shift → item. splice → array of removed items. Mixing these up is half of array bugs.', bn: 'push → length। pop/shift → উপাদান। splice → মুছে-যাওয়াগুলোর array। এই তিনটি গুলিয়ে যাওয়ায় অর্ধেক bug।' },
        },
        {
          title: { en: '4. Batch the inserts', bn: '৪. যোগ একসাথে করুন' },
          text: { en: 'a.push(...items) or a.splice(i, 0, ...items) beats pushing one by one.', bn: 'a.push(...items) বা a.splice(i, 0, ...items) এক এক করে ঠাসার চেয়ে ভালো।' },
        },
      ],
    },
    {
      type: 'visual',
      id: 'dsa',
      scenario: 'push/pop/shift on the array view, watching indices re-number when the head moves',
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Using splice to delete inside a forward loop', bn: 'forward loop-এর ভিতরে splice দিয়ে মোছা' },
      text: { en: 'Deleting shifts the remaining items left, so the next i skips an element. Loop backwards, or build a new array with filter.', bn: 'মুছলে বাকিগুলো বাঁয়ে সরে যায়, পরের i-তে একটি এড়িয়ে যায়। পেছন থেকে চালান, বা filter দিয়ে নতুন array বানান।' },
    },
  ],
  exercises: [
    {
      id: 'add-remove-and-mutate-ex1',
      kind: 'predict',
      topic: 'arrays: Adding and Removing',
      question: { en: 'What does the last log print?', bn: 'শেষ log কী ছেপে?' },
      code: `const a = [1, 2, 3, 4];
a.splice(1, 2);
console.log(a.join("-"));`,
      answer: '1-4',
      accept: [
        '1-4',
        '"1-4"',
      ],
      hint: { en: 'splice(1, 2) starts at index 1 and removes two.', bn: 'splice(1, 2) index ১ থেকে ২টি মুছবে।' },
      explanation: { en: 'Indices 1 and 2 (values 2 and 3) leave; 1 and 4 remain, and join("-") writes "1-4".', bn: 'index ১ ও ২ (মান ২, ৩) চলে যায়; ১ ও ৪ থাকে, join("-") লেখে "1-4"।' },
    },
    {
      id: 'add-remove-and-mutate-ex2',
      kind: 'mcq',
      topic: 'arrays: Adding and Removing',
      question: { en: 'Which call returns the element that was removed?', bn: 'কোনটি মুছে-যাওয়া উপাদানটি ফেরত দেয়?' },
      options: [
        { en: 'arr.push(x)', bn: 'arr.push(x)' },
        { en: 'arr.splice(i, 1)', bn: 'arr.splice(i, 1)' },
        { en: 'arr.pop()', bn: 'arr.pop()' },
        { en: 'arr.shift()', bn: 'arr.shift()' },
      ],
      answer: 0,
      hint: { en: 'pop removes the last one and hands it to you.', bn: 'pop শেষটি মুছে হাতে দেয়।' },
      explanation: { en: 'pop returns the last element; splice returns an ARRAY containing the removed items, so it needs [0] to get the element itself.', bn: 'pop শেষ উপাদানটি দেয়; splice মুছে-যাওয়াগুলোর ARRAY দেয়, তাই উপাদান চাইলে [০] লাগে।' },
    },
    {
      id: 'add-remove-and-mutate-ex3',
      kind: 'fill',
      topic: 'arrays: Adding and Removing',
      question: { en: 'Write one expression that adds "tail" to the end of list without creating a new array.', bn: 'একটি expression লিখুন যা list-এর শেষে "tail" যোগ করে, নতুন array না বানিয়ে।' },
      answer: 'list.push("tail")',
      accept: [
        'list.push("tail")',
        'list.push("tail");',
        'list.push(\\"tail\\")',
      ],
      hint: { en: 'One method, one argument.', bn: 'একটি method, একটি argument।' },
      explanation: { en: 'push mutates in place. The copying alternatives are list.concat(["tail"]) and [...list, "tail"], both of which return new arrays.', bn: 'push জায়গাতেই বদলায়। কপি-বিকল্প list.concat(["tail"]) আর [...list, "tail"] — দুটোই নতুন array দেয়।' },
    },
  ],
  quiz: {
    id: 'add-remove-and-mutate-quiz',
    title: { en: 'Quiz — Adding and Removing', bn: 'কুইজ — যোগ আর বিয়োগ' },
    questions: [
      {
        id: 'add-remove-and-mutate-q1',
        kind: 'mcq',
        topic: 'arrays: Adding and Removing',
        question: { en: 'Cost of unshift on a 1000-element array?', bn: '১০০০ উপাদানের array-তে unshift-এর খরচ?' },
        options: [
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'O(n) — a copy of all 1000 slots', bn: 'O(n) — a copy of all 1000 slots' },
          { en: 'O(log n)', bn: 'O(log n)' },
          { en: 'O(n²)', bn: 'O(n²)' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Slot 0 is taken, so all 1000 elements are copied one slot up: linear work.', bn: 'slot 0 দখল হয়ে যায়, তাই ১০০০টি উপাদান এক ধাপ উপরে কপি হয়: রৈখিক কাজ।' },
      },
      {
        id: 'add-remove-and-mutate-q2',
        kind: 'mcq',
        topic: 'arrays: Adding and Removing',
        question: { en: 't.slice(1) on ["X","d","e"] gives?', bn: '["X","d","e"]-এ t.slice(1) কী দেবে?' },
        options: [
          { en: '["X","d"]', bn: '["X","d"]' },
          { en: '["d","e"]', bn: '["d","e"]' },
          { en: '["X","d","e"]', bn: '["X","d","e"]' },
          { en: 'undefined', bn: 'undefined' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'slice(a) copies from index a to the end — a half-open window, so indices 1 and 2.', bn: 'slice(a) index a থেকে শেষ পর্যন্ত কপি করে — অর্ধ-খোলা জানালা, তাই ১ ও ২।' },
      },
      {
        id: 'add-remove-and-mutate-q3',
        kind: 'mcq',
        topic: 'arrays: Adding and Removing',
        question: { en: 'In React state, to append one item you write…', bn: 'React state-এ একটি যোগ করতে লেখেন…' },
        options: [
          { en: 'state.push(item)', bn: 'state.push(item)' },
          { en: 'setState([...state, item])', bn: 'setState([...state, item])' },
          { en: 'state.unshift(item)', bn: 'state.unshift(item)' },
          { en: 'state.splice(0, 0, item)', bn: 'state.splice(0, 0, item)' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'State must be replaced with a new reference for the update to be seen, and spread gives a fresh array with the item appended.', bn: 'update দেখাতে নতুন reference দরকার, আর spread নতুন array বানিয়ে শেষে item বসায়।' },
      },
      {
        id: 'add-remove-and-mutate-q4',
        kind: 'mcq',
        topic: 'arrays: Adding and Removing',
        question: { en: 'Which call leaves the original array untouched?', bn: 'কোন ডাকটি আসল array-তে হাত দেয় না?' },
        options: [
          { en: 'a.splice(0, 1)', bn: 'a.splice(0, 1)' },
          { en: 'a.pop()', bn: 'a.pop()' },
          { en: 'a.concat([7])', bn: 'a.concat([7])' },
          { en: 'a.unshift(7)', bn: 'a.unshift(7)' },
        ],
        answer: 2,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'concat builds a new array from both operands. splice, pop and unshift all mutate the receiver.', bn: 'concat দুটি থেকে নতুন array বানায়। splice, pop, unshift তিনটিই নিজেকে বদলায়।' },
      },
    ],
  },
  nextLesson: {
    slug: 'walking-an-array',
    tech: 'arrays',
    title: { en: 'Walking an Array', bn: 'অ্যারে পড়ে বেড়ানো' },
  },
};
