import type { Lesson } from '../../../lib/types';

export const SlicesArraysAndStringsLesson: Lesson = {
  slug: 'slices-arrays-and-strings',
  tech: 'go',
  title: { en: 'Slices, Arrays and Strings', bn: 'slice, array আর string' },
  summary: { en: 'The header (pointer, len, cap) explains everything: why append sometimes copies, why a sub-slice shares memory, and why a string is an immutable byte run.', bn: 'হেডার (pointer, len, cap) সব ব্যাখ্যা করে: append কেন কখনও কপি করে, sub-slice কেন memory শেয়ার করে, আর string কেন অ-বদলানো byte-এর সারি।' },
  minutes: 14,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Slices, Arrays and Strings', bn: 'WHAT — slice, array আর string' },
    },
    {
      type: 'para',
      text: { en: 'In Go the list you pass to a function and the list your caller holds are not the same object, and both are not the array. That one sentence is the source of most beginner bugs in Go: an append that vanishes, a length that surprises you. A slice is three words of bookkeeping, and once you see them the rules fall out.', bn: 'Go-তে function-এ দেওয়া তালিকা আর ডাকনকারীর হাতের তালিকা এক জিনিস নয় — আর দুটোই array নয়। এই ১ লাইনেই Go-র বিগিনার bug-এর বেশিরভাগ: append করেও যে বাড়েনি, length যে অবাক করে। slice মূলত ৩টি শব্দের হিসাব, সেগুলো দেখে ফেললেই নিয়মগুলো নিজের থেকে বেরিয়ে আসে।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'A slice header is 24 bytes on a 64-bit machine: pass it by value without guilt; the elements are not copied.',
          bn: '64-বিট মেশিনে slice-এর হেডার ২৪ byte: value দিয়ে পাঠান, উপাদান কপি হয় না।',
        },
        {
          en: 'append writes into spare capacity when capacity allows — which is exactly why two slices can see each other’s writes.',
          bn: 'capacity থাকলে append খোলা জায়গাতেই লেখে — তাই দুটি slice একে-অপরের লেখা দেখে ফেলে।',
        },
        {
          en: 'Strings are a pointer plus a length; slicing one never copies, and there is nothing mutable to race on.',
          bn: 'string = pointer + দৈর্ঘ্য; slicing কপি করে না, আর বদলানোর কিছু না-থাকায় race-ও নেই।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'slices.go',
      code: 'a := [5]int{1, 2, 3, 4, 5}   // an array: length is part of the type\ns := a[1:3]                  // slice: len 2, cap 4, shares a’s memory\ns[0] = 99                    // a becomes [1 99 3 4 5]\n\nb := make([]int, 0, 8)       // len 0, cap 8: no growth until 9 items\nfor i := 0; i < 3; i++ {\n	b = append(b, i)          // still inside the capacity: no allocation\n}\nc := append(b, 100)          // may still share b’s array…\nd := append(slices.Clone(b), 200)   // …this one never does\n\ntxt := "hello gopher"\nhead := txt[:5]                // "hello" — no copy\nwords := strings.Fields(txt)   // ["hello" "gopher"]\nvar sb strings.Builder         // growable text buffer\nfor _, w := range words {\n	sb.WriteString(w)\n	sb.WriteByte(\'\\n\')\n}\nfmt.Print(sb.String(), head, len(c), len(d))',
      caption: { en: 'Five lines that explain slice aliasing, one that shows the safe copy, and the Builder for text assembly.', bn: '৫ লাইনে slice aliasing-এর ব্যাখ্যা, ১টি লাইনে নিরাপদ কপি, আর লেখা জোড়া দিতে Builder।' },
    },
    {
      type: 'table',
      head: [
        { en: 'expression', bn: 'expression' },
        { en: 'len', bn: 'len' },
        { en: 'cap', bn: 'cap' },
        { en: 'shares memory with', bn: ' কার সাথে memory শেয়ার' },
      ],
      rows: [
        [
          { en: 'a[1:3] on [5]int', bn: 'a[1:3] on [5]int' },
          { en: '2', bn: '2' },
          { en: '4', bn: '4' },
          { en: 'the array a', bn: 'array a' },
        ],
        [
          { en: 'make([]int, 3)', bn: 'make([]int, 3)' },
          { en: '3', bn: '3' },
          { en: '3', bn: '3' },
          { en: 'nothing yet', bn: 'এখন কারও সাথে না' },
        ],
        [
          { en: 'make([]int, 0, 8)', bn: 'make([]int, 0, 8)' },
          { en: '0', bn: '0' },
          { en: '8', bn: '8' },
          { en: 'its own array', bn: 'নিজের array' },
        ],
        [
          { en: 'append(s, v) when cap is free', bn: 'cap খালি থাকলে append(s, v)' },
          { en: '+1', bn: '+১' },
          { en: 'same', bn: 'একই' },
          { en: 's — writes are visible in s', bn: 's — লেখা s-এ দেখা যায়' },
        ],
        [
          { en: 'append(s, v) when cap is full', bn: 'cap পূর্ণ হলে append(s, v)' },
          { en: '+1', bn: '+১' },
          { en: 'grown (≈2×)', bn: 'বাড়ে (≈২×)' },
          { en: 'nobody: new array', bn: 'কারও সাথে না: নতুন array' },
        ],
        [
          { en: 's[2:] then append into cap', bn: 's[2:] তারপর cap-এ append' },
          { en: 'shorter', bn: 'ছোট' },
          { en: 'smaller', bn: 'আরও ছোট' },
          { en: 'the original array — the aliasing bug', bn: 'আসল array — aliasing-এই ভুল' },
        ],
      ],
      caption: { en: 'Only when capacity runs out does append move you to a new array — and everything that already shared the old one is left behind.', bn: 'capacity ফুরানোর সময়ই append নতুন array-তে যায় — পুরোনো যে-সব slice শেয়ার করছিল সেগুলো পিছনে থেকে যায়।' },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'header',
          def: { en: 'The triple (data pointer, length, capacity) a slice variable stores.', bn: 'slice চলকে যা থাকে: (data pointer, দৈর্ঘ্য, ধারণক্ষমতা)।' },
        },
        {
          term: 'append growth',
          def: { en: 'Below 256 elements roughly doubles; above it grows by ~25%; the rule is not contractual.', bn: '২৫৬ উপাদানের নিচে প্রায় দ্বিগুণ; উপরে ~২৫% বেড়েছে; নিয়মটি চুক্তি নয়।' },
        },
        {
          term: 'slices.Clone',
          def: { en: 'The explicit “I want my own memory” call (Go 1.21+).', bn: 'স্পষ্ট “আমার নিজের memory চাই” কল (Go 1.21+)।' },
        },
        {
          term: 'strings.Builder',
          def: { en: 'A byte buffer for text assembly; use it instead of s += in a loop.', bn: 'লেখা জোড়ার byte buffer; loop-এ s += না লিখে এটি ব্যবহার করুন।' },
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
          title: { en: '1. Make with a capacity', bn: '১. capacity দিয়ে make' },
          text: { en: 'make([]T, 0, n) when you know the size: one allocation instead of log n.', bn: 'আকার জানা থাকলে make([]T, 0, n): log n এর বদলে ১টি allocation।' },
        },
        {
          title: { en: '2. Reassign the result', bn: '২. ফল আবার বসান' },
          text: { en: 's = append(s, x) — the returned header is the truth.', bn: 's = append(s, x) — ফেরত-আসা হেডারই আসল।' },
        },
        {
          title: { en: '3. Copy before you escape', bn: '৩. বাইরে যেতে দিলে কপি' },
          text: { en: 'Keep a slice of a buffer only if you also keep its lifetime; otherwise slices.Clone.', bn: 'buffer-এর slice ধরে রাখবেন কিনা তার আয়ু-ও ধরে রাখলে; না হলে slices.Clone।' },
        },
        {
          title: { en: '4. Build strings with a Builder', bn: '৪. Builder দিয়ে string' },
          text: { en: 'In a loop, s += x copies the whole string each time: O(n²). Builder is O(n).', bn: 'loop-এ s += x প্রতিবার পুরো string কপি করে: O(n²)। Builder O(n)।' },
        },
      ],
    },
    {
      type: 'visual',
      id: 'dsa',
      scenario: 'watch the header move while a slice is appended and the array grows',
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'A slice is a window, not a box: move the window, and what it sees is the same memory.', bn: 'slice বাক্স নয়, জানালা: জানালাটা সরালেও যা দেখা যায়, সেই একই memory।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Keeping a sub-slice of a big buffer', bn: 'বড় buffer-এর sub-slice ধরে রাখা' },
      text: { en: 'b := big[1000:1010] still pins the whole big array in memory. If the small view outlives the buffer, copy it: b := slices.Clone(big[1000:1010]).', bn: 'b := big[1000:1010] লিখলেও পুরো বড় array memory-তে আটকা থাকে। ছোট view-টি buffer-এর চেয়ে বেশি দিন বাঁচলে কপি করুন: b := slices.Clone(big[1000:1010])।' },
    },
  ],
  exercises: [
    {
      id: 'slices-arrays-and-strings-ex1',
      kind: 'mcq',
      topic: 'go: Slices, Arrays and Strings',
      question: { en: 'After this, what is a[2]?', bn: 'এর পরে a[2] কত?' },
      code: `a := [4]int{1, 2, 3, 4}
s := a[1:]
s[1] = 9
fmt.Print(a[2])`,
      options: [
        { en: '3', bn: '3' },
        { en: '9', bn: '9' },
        { en: '0', bn: '0' },
        { en: 'compile error', bn: 'compile error হবে' },
      ],
      answer: 1,
      hint: { en: 'Where does s point?', bn: 's কোথায় তাকায়?' },
      explanation: { en: 's starts at index 1 of the same array, so s[1] is a[2] — the write lands in the array and prints 9.', bn: 's সেই array-এর index ১ থেকে শুরু, তাই s[1] মানে a[২] — লেখা array-তেই পড়ে, ৯ ছাপে।' },
    },
    {
      id: 'slices-arrays-and-strings-ex2',
      kind: 'mcq',
      topic: 'go: Slices, Arrays and Strings',
      question: { en: 'Which code grows a slice with the fewest allocations for 1000 items?', bn: '১০০০ উপাদানে সবচেয়ে কম allocation কোডটি?' },
      options: [
        { en: 'var s []int; loop append', bn: 'var s []int; loop append' },
        { en: 's := make([]int, 0, 1000); loop append', bn: 's := make([]int, 0, 1000); loop append' },
        { en: 's := [1000]int{}; copy in', bn: 's := [1000]int{}; copy in' },
        { en: 'concatenate with += each time', bn: 'concatenate with += each time' },
      ],
      answer: 1,
      hint: { en: 'Capacity is the lever.', bn: 'capacity-ই লিভার।' },
      explanation: { en: 'Pre-sizing gives one allocation and one copy at the end at most; the bare append version reallocates about ten times and copies each time.', bn: 'আগে-ঠিক করলে একটাই allocation; খালি append প্রায় দশবার realloc করে, প্রতিবার কপি হয়।' },
    },
    {
      id: 'slices-arrays-and-strings-ex3',
      kind: 'predict',
      topic: 'go: Slices, Arrays and Strings',
      question: { en: 'What prints? (string slicing on ASCII)', bn: 'কী ছাপে? (ASCII string slicing)' },
      code: `s := "gopher"
fmt.Print(len(s[:3]), len(s[3:]))`,
      answer: '33',
      accept: [
        '3 3',
        '33',
        '3,3',
      ],
      hint: { en: 'Both windows, one string.', bn: 'দুটি জানালা, একই string।' },
      explanation: { en: 'Slicing never copies, so the two views are 3 bytes each; len reports 3 and 3.', bn: 'slicing কপি করে না, ২টি view-ই ৩ byte; len যথাক্রমে ৩ ও ৩ বলে দেয়।' },
    },
  ],
  quiz: {
    id: 'slices-arrays-and-strings-quiz',
    title: { en: 'Quiz — Slices, Arrays and Strings', bn: 'কুইজ — slice, array আর string' },
    questions: [
      {
        id: 'slices-arrays-and-strings-q1',
        kind: 'mcq',
        topic: 'go: Slices, Arrays and Strings',
        question: { en: 'What happens when append exceeds capacity?', bn: 'append capacity ছাড়িয়ে গেলে কী হয়?' },
        options: [
          { en: 'It panics', bn: 'It panics' },
          { en: 'It allocates a bigger array and copies', bn: 'বেশি বড় array আলাদা করে কপি করে' },
          { en: 'It truncates the slice', bn: 'slice কেটে ছোট করে দেয়' },
          { en: 'It waits', bn: 'It waits' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'A new backing array is allocated, existing elements copied, and the returned header points at the new one. Slices made from the old header keep watching the old array.', bn: 'নতুন backing array হয়, পুরোনো উপাদান কপি হয়, ফেরত-আসা হেডার নতুনটিকে দেখায়। পুরোনো থেকে বানানো slice পুরোনোতেই তাকিয়ে থাকে।' },
      },
      {
        id: 'slices-arrays-and-strings-q2',
        kind: 'mcq',
        topic: 'go: Slices, Arrays and Strings',
        question: { en: 'len(s) on a slice tells you…', bn: 'slice-এ len(s) কী বলে?' },
        options: [
          { en: 'the backing array size', bn: 'পিছনের array-টি কত বড়' },
          { en: 'the number of visible elements', bn: 'দেখা যাওয়া উপাদানের সংখ্যা' },
          { en: 'the capacity minus length', bn: 'capacity থেকে length বিয়োগ' },
          { en: 'the byte size', bn: 'the byte size' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'len is the window width; cap is how far the window could extend without moving.', bn: 'len জানালার চওড়া; cap কত দূর সরানো যাবে না-গিয়ে।' },
      },
      {
        id: 'slices-arrays-and-strings-q3',
        kind: 'mcq',
        topic: 'go: Slices, Arrays and Strings',
        question: { en: 'Why is strings.Builder better than s += in a loop?', bn: 'loop-এ s += এর চেয়ে strings.Builder ভালো কেন?' },
        options: [
          { en: 'Builder is thread-safe by accident', bn: 'Builder কাকতালীয়ভাবে thread-safe' },
          { en: 's += copies the whole string every iteration', bn: 's += copies the whole string every iteration' },
          { en: 'Builder compresses', bn: 'Builder সংকুচিত করে' },
          { en: '+ is illegal on strings', bn: 'string-এ + বৈধ নয়' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'Each += allocates and copies the accumulated prefix, making the loop quadratic; Builder appends into a growing buffer once.', bn: 'প্রতি += জমা অংশ কপি করে নতুন করে, তাই loop দ্বিঘাত; Builder বাড়তে-থাকা buffer-এ একবার লেখে।' },
      },
      {
        id: 'slices-arrays-and-strings-q4',
        kind: 'mcq',
        topic: 'go: Slices, Arrays and Strings',
        question: { en: 'What does s[2:5] produce for a slice with len 4?', bn: 'len ৪ slice-তে s[2:5] কী দেয়?' },
        options: [
          { en: 'a 3-element slice', bn: 'তিন-উপাদানের slice' },
          {
            en: 'a runtime panic: index out of range',
            bn: 'runtime panic: index out of range — চালার সময় ভেঙে পড়বে',
          },
          { en: 'it clamps to 4', bn: 'it clamps to 4' },
          { en: 'a compile error', bn: 'compile error, চলবেই না' },
        ],
        answer: 1,
        hint: { en: 'Look at the example again.', bn: 'উদাহরণটা আবার দেখুন।' },
        explanation: { en: 'The high bound may exceed len only up to cap for slices; 5 is beyond both len 4 and typical cap, so the runtime panics — here with “index out of range [5] with length 4”.', bn: 'upper bound len ছাড়িয়ে cap পর্যন্ত যেতে পারে; ৫ হলো len ৪ আর স্বাভাবিক cap দুটোরই বাইরে, তাই runtime panic — “index out of range [5] with length 4”।' },
      },
    ],
  },
  nextLesson: {
    slug: 'structs-maps-and-interfaces',
    tech: 'go',
    title: { en: 'Structs, Maps and Interfaces', bn: 'struct, map আর interface' },
  },
};
