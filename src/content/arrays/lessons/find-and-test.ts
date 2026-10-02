import type { Lesson } from '../../../lib/types';

export const FindAndTestLesson: Lesson = {
  slug: 'find-and-test',
  tech: 'arrays',
  title: { en: 'Finding and Testing', bn: 'খোঁজা যাচাই' },
  summary: { en: 'indexOf vs includes vs find vs at, and the pair that answers “is any/all of it true” without walking the whole array twice.', bn: 'indexOf বনাম includes বনাম find বনাম at, আর যে জুটি পুরো array দুবার না হেঁটেই “কোনোটাকি সত্যি? সবটাই সত্যি?” উত্তর দেয়।' },
  minutes: 10,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Finding and Testing', bn: 'WHAT — খোঁজা যাচাই' },
    },
    {
      type: 'para',
      text: { en: 'You need one thing from the list: the first user whose email matches, or a plain yes-or-no about whether anyone is an admin. Both are loops you have written by hand; both are a single method call once you know the name of it.', bn: 'তালিকা থেকে চাই একটাই জিনিস: email মিলে এমন প্রথম ব্যবহারকারী, নাকি কেউ admin — শুধু হ্যাঁ/না উত্তর। দুটোই আপনি হাতে লেখা loop; কোনটির নাম কী জানা থাকলে দুটোই এক লাইনের method call।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'indexOf uses ===, so it cannot find NaN and cannot find an object by shape.',
          bn: 'indexOf === ব্যবহার করে, তাই NaN খুঁজে পায় না, গড়ন দিয়ে objectও পায় না।',
        },
        {
          en: 'includes finds NaN and reads better; find returns the element, findIndex the position.',
          bn: 'includes NaN-ও পায়, পড়তেও সহজ; find উপাদান দেয়, findIndex অবস্থান।',
        },
        {
          en: 'some/every short-circuit: the first deciding element stops the walk.',
          bn: 'some/every আগেই থামে: যে উপাদান সিদ্ধান্ত দেয়, সেই হাঁটা বন্ধ করে।',
        },
      ],
    },
    {
      type: 'table',
      head: [
        { en: 'question', bn: 'প্রশ্ন' },
        { en: 'call', bn: 'ডাক' },
        { en: 'answer', bn: 'উত্তর' },
        { en: 'NaN-safe?', bn: 'NaN-নিরাপদ?' },
      ],
      rows: [
        [
          { en: 'is it there?', bn: 'আছে?' },
          { en: 'a.includes(v)', bn: 'a.includes(v)' },
          { en: 'true / false', bn: 'true / false' },
          { en: 'yes', bn: 'হ্যাঁ' },
        ],
        [
          { en: 'where is it?', bn: 'কোথায়?' },
          { en: 'a.indexOf(v)', bn: 'a.indexOf(v)' },
          { en: 'index / -1', bn: 'index / -1' },
          { en: 'no', bn: 'না' },
        ],
        [
          { en: 'give me the first that…', bn: 'প্রথমটি দিন যা…' },
          { en: 'a.find(p)', bn: 'a.find(p)' },
          { en: 'element / undefined', bn: 'উপাদান / undefined' },
          { en: 'n/a', bn: 'n/a' },
        ],
        [
          { en: 'which number is the first that…', bn: 'কোন নম্বরটি প্রথম যা…' },
          { en: 'a.findIndex(p)', bn: 'a.findIndex(p)' },
          { en: 'index / -1', bn: 'index / -1' },
          { en: 'n/a', bn: 'n/a' },
        ],
        [
          { en: 'any single one enough?', bn: 'একটিই কি যথেষ্ট?' },
          { en: 'a.some(p)', bn: 'a.some(p)' },
          { en: 'true / false', bn: 'true / false' },
          { en: 'n/a', bn: 'n/a' },
        ],
        [
          { en: 'all of them?', bn: 'সবটাই?' },
          { en: 'a.every(p)', bn: 'a.every(p)' },
          { en: 'true / false', bn: 'true / false' },
          { en: 'n/a', bn: 'n/a' },
        ],
        [
          { en: 'empty answer?', bn: 'খালি হলে?' },
          { en: 'some / every on []', bn: 'some / every on []' },
          { en: 'false / true', bn: 'false / true' },
          { en: 'n/a', bn: 'n/a' },
        ],
      ],
      caption: { en: 'every([]) is true by the empty-product rule — that default bites in validation code.', bn: 'every([]) খালি-গুণের নিয়মে সত্যি — validation কোডে এই default-ই কামড় দেয়।' },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'find.js',
      code: `const ids = ["a7", "b2", NaN, "c9"];
ids.indexOf(NaN);           // -1 — === cannot match NaN
ids.includes(NaN);          // true
ids.at(-1);                 // "c9"

const users = [{ n: "Mitu", age: 17 }, { n: "Roni", age: 22 }];
const under = users.find(u => u.age < 18);       // the Mitu object
const pos = users.findIndex(u => u.age < 18);    // 0
const none = users.find(u => u.age > 60);        // undefined — guard before reading .n

const allAdults = users.every(u => u.age >= 18);  // false
const anyoneYoung = users.some(u => u.age < 18);  // true, stops at index 0`,
      caption: { en: 'find returns the element (or undefined); findIndex the position (or -1). The line above is the one that crashes if you forget.', bn: 'find উপাদান দেয় (না মিললে undefined); findIndex অবস্থান (না মিললে -1)। ভুলে গেলে ঠিক আগের লাইনটাই ভাঙে।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Borrowing a lookup', bn: 'তালিকা ধার করা' },
      text: { en: 'Searching the same array for many values? Reduce it into a Set or an object once, then test in O(1): const seen = new Set(ids); seen.has("b2"). n searches on an array cost n×m; on a Set, n.', bn: 'একই array-তে অনেক মান খুঁজছেন? একবারে Set বা object-এ গড়ুন, তারপর O(1)-এ চেক: const seen = new Set(ids); seen.has("b2")। array-তে n খোঁজা n×m খরচ, Set-এ n।' },
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
          title: { en: '1. Name the predicate', bn: '১. শর্ত নাম দিন' },
          text: { en: 'age < 18, exists, isDirty — a find/some/every is only as good as its test.', bn: 'age < 18, exists, isDirty — find/some/every তার শর্তের মতোই ভালো।' },
        },
        {
          title: { en: '2. Decide the answer shape', bn: '২. উত্তরের আকার ঠিক করুন' },
          text: { en: 'Element → find. Position → findIndex. Yes/no → some/every. Existence only → includes.', bn: 'উপাদান → find। অবস্থান → findIndex। হ্যাঁ/না → some/every। শুধু আছে কিনা → includes।' },
        },
        {
          title: { en: '3. Guard the miss', bn: '৩. না-মিললে সামলান' },
          text: { en: 'find gives undefined: use optional chaining (u?.n) or a fallback object.', bn: 'find undefined দেয়: optional chaining (u?.n) বা fallback object দিন।' },
        },
        {
          title: { en: '4. Short-circuit is a feature', bn: '৪. আগে থামাই সুবিধে' },
          text: { en: 'some/every stop at the deciding element, so put cheap, likely tests first.', bn: 'some/every সিদ্ধান্তকারী উপাদানে থামে, তাই সস্তা-সম্ভাব্য শর্ত আগে দিন।' },
        },
      ],
    },
    {
      type: 'visual',
      id: 'dsa',
      scenario: 'linear scan versus hash lookup on the same element',
    },
  ],
  exercises: [
    {
      id: 'find-and-test-ex1',
      kind: 'predict',
      topic: 'arrays: Finding and Testing',
      question: { en: 'What prints?', bn: 'কী ছাপা হয়?' },
      code: `const a = [1, 2, 3, 2];
console.log(a.indexOf(2), a.lastIndexOf(2), a.findIndex(x => x > 2));`,
      answer: '1 3 2',
      accept: [
        '1 3 2',
        '1,3,2',
        '1, 3, 2',
      ],
      hint: { en: 'indexOf first hit, lastIndexOf from the back, findIndex tests the arrow.', bn: 'indexOf প্রথম মিল, lastIndexOf পেছন থেকে, findIndex arrow শর্তে।' },
      explanation: { en: '2 sits at index 1 (and again at 3); the first value greater than 2 is 3 at index 2.', bn: '২ আছে index ১ এ (আবার ৩ নম্বরেও); ২ এর চেয়ে বড় প্রথম মান ৩, যা index ২ এ।' },
    },
    {
      id: 'find-and-test-ex2',
      kind: 'mcq',
      topic: 'arrays: Finding and Testing',
      question: { en: 'Which line is safe on an empty array?', bn: 'খালি array-তে কোন লাইন নিরাপদ?' },
      options: [
        { en: 'a.find(p).n', bn: 'a.find(p).n' },
        { en: 'a.some(p) === true', bn: 'a.some(p) === true' },
        { en: 'a.every(p) — returns true for no elements', bn: 'a.every(p) — returns true for no elements' },
        { en: 'a[0].n', bn: 'a[0].n' },
      ],
      answer: 2,
      hint: { en: 'Two of these throw on missing values.', bn: 'এই কয়েকের মধ্যে দুটি না-থাকলে throw করে।' },
      explanation: { en: 'every on [] returns true and reads the empty array as “nothing violates the rule”. some returns false; find gives undefined and then .n throws; a[0].n throws too.', bn: '[]-তে every true দেয়, “নিয়ম কেউ লঙ্ঘন করছে না” পড়ে; some false দেয়; find undefined দিলে .n throw; a[0].n-ও throw।' },
    },
    {
      id: 'find-and-test-ex3',
      kind: 'mcq',
      topic: 'arrays: Finding and Testing',
      question: { en: 'One membership check on an array of strings — the clearest call?', bn: 'লেখার array-এ একবার আছে/নেই দেখা — সবচেয়ে স্পষ্ট ডাক?' },
      options: [
        { en: 'a.indexOf(id) === true', bn: 'a.indexOf(id) === true' },
        { en: 'a.includes(id)', bn: 'a.includes(id)' },
        { en: 'a.find(id)', bn: 'a.find(id)' },
        { en: 'a.some(id)', bn: 'a.some(id)' },
      ],
      answer: 1,
      hint: { en: 'Which call takes a value and answers true or false?', bn: 'কোনটি মান নিয়ে true বা false দেয়?' },
      explanation: { en: 'includes takes a value and answers true/false. some takes a predicate, so passing a string tests the string’s own truthiness.', bn: 'includes মান নিয়ে true/false দেয়। some predicate নেয়, তাই string দিলে সেই string-এর ট্রুথিনেস দেখা হয়।' },
    },
  ],
  quiz: {
    id: 'find-and-test-quiz',
    title: { en: 'Quiz — Finding and Testing', bn: 'কুইজ — খোঁজা যাচাই' },
    questions: [
      {
        id: 'find-and-test-q1',
        kind: 'mcq',
        topic: 'arrays: Finding and Testing',
        question: { en: 'Find the first odd number in nums — one call?', bn: 'nums-এ প্রথম বিজোড় সংখ্যা, এক ডাকে?' },
        options: [
          { en: 'nums.filter(n => n % 2)', bn: 'nums.filter(n => n % 2)' },
          { en: 'nums.find(n => n % 2 === 1)', bn: 'nums.find(n => n % 2 === 1)' },
          { en: 'nums.includes(1)', bn: 'nums.includes(1)' },
          { en: 'nums.indexOf(1)', bn: 'nums.indexOf(1)' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'find with the parity test returns the first odd element; filter would build a whole array of them.', bn: 'parity শর্তে find প্রথম বিজোড় উপাদান দেয়; filter পুরো বিজোড়-দের array বানিয়ে ফেলত।' },
      },
      {
        id: 'find-and-test-q2',
        kind: 'mcq',
        topic: 'arrays: Finding and Testing',
        question: { en: 'NaN in a list — which call reports it?', bn: 'list-এ NaN থাকলে কোন ডাকটি বলবে?' },
        options: [
          { en: 'indexOf(NaN)', bn: 'indexOf(NaN)' },
          { en: 'includes(NaN)', bn: 'includes(NaN)' },
          { en: 'findIndex(x => x === NaN)', bn: 'findIndex(x => x === NaN)' },
          { en: 'lastIndexOf(NaN)', bn: 'lastIndexOf(NaN)' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Every === comparison against NaN is false, and indexOf uses ===; includes uses SameValueZero, which treats NaN as equal to NaN.', bn: 'NaN-এর সাথে === তুলনা মিথ্যা, আর indexOf === ব্যবহার করে; includes SameValueZero ব্যবহার করে, যেখানে NaN = NaN।' },
      },
      {
        id: 'find-and-test-q3',
        kind: 'mcq',
        topic: 'arrays: Finding and Testing',
        question: { en: 'some vs every on a 10k list that fails at index 3?', bn: '১০k list index ৩ এ ব্যর্থ হলে — some বনাম every?' },
        options: [
          { en: 'both walk all 10 000', bn: 'both walk all 10 000' },
          { en: 'some stops at 3, every keeps going', bn: 'some ৩ নম্বরে থামে, every চলতেই থাকে' },
          {
            en: 'every stops at the first false, some keeps going only until the first true',
            bn: 'every প্রথম false-এ থামে, some প্রথম true পর্যন্তই চলে',
          },
          { en: 'neither short-circuits', bn: 'দুটোই থামে না' },
        ],
        answer: 2,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'every returns false the moment one element fails; some needs a true, so it keeps walking until it finds one (or runs out).', bn: 'একটি উপাদান ব্যর্থ হলেই every false দেয়; some-কে সত্যি চাই, তাই সে প্রথম সত্যি পাওয়া পর্যন্ত হাঁটে (বা শেষ পর্যন্ত)।' },
      },
      {
        id: 'find-and-test-q4',
        kind: 'mcq',
        topic: 'arrays: Finding and Testing',
        question: { en: 'findIndex on no match gives…', bn: 'কাউ না মিললে findIndex দেয়…' },
        options: [
          { en: 'undefined', bn: 'undefined' },
          { en: '-1', bn: '-1' },
          { en: '0', bn: '0' },
          { en: 'false', bn: 'false' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Index-returning methods use -1 (indexOf, lastIndexOf, findIndex); value-returning ones use undefined (find).', bn: 'অবস্থান-ফেরত method -1 দেয় (indexOf, lastIndexOf, findIndex); মান-ফেরত undefined দেয় (find)।' },
      },
    ],
  },
  nextLesson: { slug: 'sort-and-order', tech: 'arrays', title: { en: 'Sorting and Order', bn: 'সাজানো ক্রম' } },
};
