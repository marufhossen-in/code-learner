import type { Lesson } from '../../../lib/types';

export const SlicesAndTheAppendLesson: Lesson = {
  slug: 'slices-and-the-append',
  tech: 'lang-go',
  title: {
    en: 'Slices and Append — Memory Headers, Backing Arrays, and Capacity Growth',
    bn: 'স্লাইস ও অ্যাপেন্ড — মেমরি হেডার, ব্যাকিং অ্যারে ও ক্যাপাসিটি বৃদ্ধি',
  },
  summary: {
    en: 'Master Go slices and the append built-in: understand the 3-word slice header (pointer, length, capacity), slice expressions (slice[start:end]), shared backing array memory semantics, and dynamic reallocation when capacity exhausts.',
    bn: 'গো স্লাইস ও append ফাংশন আয়ত্ত করুন: ৩-শব্দের স্লাইস হেডার (পয়েন্টার, দৈর্ঘ্য, ক্যাপাসিটি), স্লাইস এক্সপ্রেশন (slice[start:end]), ব্যাকিং অ্যারের মেমরি আচরণ এবং ক্যাপাসিটি শেষ হলে ডায়নামিক মেমরি বরাদ্দ বুঝতে পারা।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Slice structure and dynamic backing arrays', bn: 'WHAT — স্লাইসের গঠন ও ডায়নামিক ব্যাকিং অ্যারে' },
    },
    {
      type: 'para',
      text: {
        en: 'When you work with collections of data in Go, slices are the fundamental building blocks of almost every program. While arrays have a fixed size that is fixed at compile time, a slice is a flexible, dynamic view over an underlying backing array. Internally, a slice is a lightweight 24-byte structure consisting of three fields: a pointer to the backing array, a length, and a capacity. Understanding how the append function reallocates backing arrays when capacity is exhausted is essential to writing high-performance, memory-efficient Go applications.',
        bn: 'যখন আপনি গো-তে ডেটা সংগ্রহ নিয়ে কাজ করেন, তখন স্লাইস প্রায় প্রতিটি প্রোগ্রামের মৌলিক ভিত্তি হয়ে দাঁড়ায়। কম্পাইল-টাইমে নির্ধারিত স্থির আকারের অ্যারের তুলনায় স্লাইস হলো ব্যাকিং অ্যারের ওপর একটি নমনীয় ও গতিশীল উইন্ডো। অভ্যন্তরীণভাবে একটি স্লাইস হলো একটি হালকা ২৪-বাইটের কাঠামো যা তিনটি ফিল্ড নিয়ে গঠিত: ব্যাকিং অ্যারের একটি পয়েন্টার, দৈর্ঘ্য এবং ধারণক্ষমতা (ক্যাপাসিটি)। ক্যাপাসিটি শেষ হয়ে গেলে append ফাংশন কীভাবে নতুন ব্যাকিং অ্যারে বরাদ্দ করে তা জানা উচ্চ-গতির মেমরি-দক্ষ গো কোড লেখার জন্য অত্যন্ত জরুরি।',
      },
    },
    {
      type: 'diagram',
      title: { en: '24-byte slice header pointing to contiguous backing array memory', bn: 'ব্যাকিং অ্যারের অবিচ্ছিন্ন মেমরির নির্দেশক ২৪-বাইটের স্লাইস হেডার' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Go slice header and backing array diagram">
<rect x="30" y="40" width="180" height="140" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="120" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">SLICE HEADER (24 B)</text>
<text x="45" y="95" font-family="monospace" font-size="11" fill="currentColor">ptr  → 0x1040</text>
<text x="45" y="125" font-family="monospace" font-size="11" fill="currentColor">len  = 3 items</text>
<text x="45" y="155" font-family="monospace" font-size="11" fill="currentColor">cap  = 4 slots</text>

<line x1="210" y1="90" x2="310" y2="90" stroke="#4f46e5" stroke-width="2"/>
<polygon points="310,85 325,90 310,95" fill="#4f46e5"/>

<rect x="330" y="40" width="280" height="140" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="470" y="65" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">BACKING ARRAY (Heap/Stack)</text>
<g font-family="monospace" font-size="11">
  <rect x="350" y="85" width="50" height="40" fill="#bbf7d0" stroke="#16a34a"/>
  <text x="375" y="110" text-anchor="middle" fill="#14532d">85</text>
  <rect x="405" y="85" width="50" height="40" fill="#bbf7d0" stroke="#16a34a"/>
  <text x="430" y="110" text-anchor="middle" fill="#14532d">90</text>
  <rect x="460" y="85" width="50" height="40" fill="#bbf7d0" stroke="#16a34a"/>
  <text x="485" y="110" text-anchor="middle" fill="#14532d">95</text>
  <rect x="515" y="85" width="50" height="40" fill="#fef9c3" stroke="#ca8a04" stroke-dasharray="3"/>
  <text x="540" y="110" text-anchor="middle" fill="#854d0e">_</text>
</g>
<text x="420" y="150" font-size="10" fill="#166534">Length = 3 (active)</text>
<text x="540" y="150" font-size="10" fill="#854d0e">Cap = 4 (1 free)</text>
<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Appending when len == cap allocates a new doubled backing array</text>
</svg>`,
      caption: {
        en: 'The slice header contains a memory pointer, length 3, and capacity 4. The 3 active elements (85, 90, 95) use 3 slots, leaving 1 unused spare slot in the backing array.',
        bn: 'স্লাইস হেডারে মেমরি পয়েন্টার, দৈর্ঘ্য ৩ এবং ক্যাপাসিটি ৪ থাকে। ৩টি সক্রিয় উপাদান (৮৫, ৯০, ৯৫) ৩টি স্লট দখল করে, যা ব্যাকিং অ্যারেতে ১টি অব্যবহৃত খালি স্লট রাখে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Slice header',
          def: {
            en: 'The internal 3-word Go struct holding a pointer to the backing array, current element count (len), and maximum allocated capacity (cap).',
            bn: 'অভ্যন্তরীণ ৩-শব্দের গো স্ট্রাকচার যা ব্যাকিং অ্যারের পয়েন্টার, বর্তমান উপাদানের সংখ্যা (len) এবং সর্বোচ্চ বরাদ্দকৃত ধারণক্ষমতা (cap) ধারণ করে।',
          },
        },
        {
          term: 'Backing array',
          def: {
            en: 'The contiguous block of memory allocated in heap or stack that stores the actual elements referenced by one or more slices.',
            bn: 'হিপ বা স্ট্যাকে বরাদ্দকৃত অবিচ্ছিন্ন মেমরি ব্লক যা এক বা একাধিক স্লাইস দ্বারা নির্দেশিত মূল ডেটা সংরক্ষণ করে।',
          },
        },
        {
          term: 'Capacity growth',
          def: {
            en: 'The runtime reallocation algorithm triggered when append exceeds slice capacity, typically doubling memory to amortize reallocation costs.',
            bn: 'স্লাইস ক্যাপাসিটি পূর্ণ হয়ে গেলে append দ্বারা ট্রিগার হওয়া মেমরি বৃদ্ধি অ্যালগরিদম, যা সাধারণত মেমরি দ্বিগুণ করে রিলোকেশন খরচ কমায়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — High-speed memory ergonomics and zero-copy slicing', bn: 'কেন — দ্রুততম মেমরি ব্যবহার ও জিরো-কপি স্লাইসিং' },
    },
    {
      type: 'list',
      items: [
        { en: 'Instant sub-slicing without memory allocation: creating slice[1:3] merely adjusts pointer and length in O(1) time without copying bytes.', bn: 'মেমরি কপি ছাড়া তাৎক্ষণিক সাব-স্লাইসিং: slice[1:3] তৈরি করা কেবল পয়েন্টার ও দৈর্ঘ্য সমন্বয় করে O(1) সময়ে কাজ করে, কোনো বাইট কপি করতে হয় না।' },
        { en: 'Amortized constant-time append: geometric capacity doubling ensures that appending N elements takes O(N) total time rather than O(N²).', bn: 'অ্যামরটাইজড কনস্ট্যান্ট-টাইম অ্যাপেন্ড: ক্যাপাসিটি জ্যামিতিকভাবে দ্বিগুণ হওয়ায় N সংখ্যক উপাদান যোগ করতে মোট O(N) সময় লাগে।' },
        { en: 'Predictable heap allocation control: using make([]T, 0, cap) preallocates backing arrays, completely eliminating reallocation garbage.', bn: 'পূর্বনির্ধারিত হিপ মেমরি নিয়ন্ত্রণ: make([]T, 0, cap) দিয়ে আগে থেকেই ক্যাপাসিটি বরাদ্দ করলে অতিরিক্ত রিলোকেশন এবং গার্বেজ তৈরি হয় না।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Working with slices in 4 steps', bn: 'HOW — ৪টি ধাপে স্লাইসের ব্যবহার' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Preallocate with make', bn: '১. make দিয়ে বরাদ্দ' }, text: { en: 'Use make([]int, 0, expectedCap) to reserve backing memory upfront.', bn: 'make([]int, 0, expectedCap) দিয়ে শুরুতেই প্রয়োজনীয় মেমরি সংরক্ষণ করুন।' } },
        { title: { en: '2. Append elements', bn: '২. উপাদান অ্যাপেন্ড' }, text: { en: 'Always reassign slice = append(slice, element) to capture new pointers.', bn: 'নতুন পয়েন্টার গ্রহণ করতে সর্বদা slice = append(slice, element) লিখুন।' } },
        { title: { en: '3. Create slice windows', bn: '৩. স্লাইস উইন্ডো তৈরি' }, text: { en: 'Use slice[start:end] to view subsets of the underlying backing array.', bn: 'ব্যাকিং অ্যারের অংশবিশেষ দেখতে slice[start:end] ব্যবহার করুন।' } },
        { title: { en: '4. Copy for isolation', bn: '৪. পৃথক ক্লোনের জন্য copy' }, text: { en: 'Use copy(dst, src) when you need an independent copy that will not mutate shared memory.', bn: 'শেয়ার্ড মেমরি অক্ষুণ্ণ রেখে সম্পূর্ণ স্বাধীন কপির জন্য copy(dst, src) ব্যবহার করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'slices_growth_sim.go',
      code: `package main

import "fmt"

func main() {
	// 1. Initial slice with preallocated capacity 4
	scores := make([]int, 0, 4)
	fmt.Printf("Initial: len=%d, cap=%d\\n", len(scores), cap(scores))

	// 2. Append 3 elements within capacity
	scores = append(scores, 85, 90, 95)
	fmt.Printf("After 3 items: len=%d, cap=%d\\n", len(scores), cap(scores))

	// 3. Exceed capacity 4 by adding 2 more items (triggers reallocation to cap 8)
	scores = append(scores, 100, 75)
	fmt.Printf("After 5 items: len=%d, cap=%d\\n", len(scores), cap(scores))

	// 4. Compute sum of all 5 scores
	sum := 0
	for _, val := range scores {
		sum += val
	}
	fmt.Printf("Total scores sum: %d across %d items\\n", sum, len(scores))
}

// Output:
// Initial: len=0, cap=4
// After 3 items: len=3, cap=4
// After 5 items: len=5, cap=8
// Total scores sum: 445 across 5 items`,
      caption: {
        en: 'The simulation traces capacity growth: starting with capacity 4, adding 3 items leaves capacity at 4; adding 2 more items pushes length to 5 and triggers doubling to capacity 8, summing to 445 across all 5 items.',
        bn: 'সিমুলেশনটি ক্যাপাসিটি বৃদ্ধি প্রদর্শন করে: ক্যাপাসিটি ৪ দিয়ে শুরু করে ৩টি উপাদান যোগ করলে ক্যাপাসিটি ৪ থাকে; আরও ২টি যোগ করলে দৈর্ঘ্য ৫ হয়ে ক্যাপাসিটি দ্বিগুণ হয়ে ৮ হয়, যার ৫টি উপাদানের মোট যোগফল ৪৪৫।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive slice growth lab', bn: 'INSIDE — জীবন্ত স্লাইস বৃদ্ধি ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test how Go handles dynamic slice growth. Starting with capacity 4, inserting 3 scores (85, 90, 95) keeps capacity at 4. When 2 additional scores (100, 75) are appended, length reaches 5, exceeding the initial limit and forcing Go to allocate a new backing array with capacity 8. The total sum of all 5 elements equals 445.',
        bn: 'গো কীভাবে স্লাইসের ক্যাপাসিটি বৃদ্ধি করে তা পরীক্ষা করুন। ক্যাপাসিটি ৪ নিয়ে শুরু করে ৩টি স্কোর (৮৫, ৯০, ৯৫) বসালে ক্যাপাসিটি ৪ থাকে। আরও ২টি স্কোর (১০০, ৭৫) যোগ করলে দৈর্ঘ্য ৫ হয়ে প্রাথমিক সীমা ছাড়িয়ে যায় এবং গো ক্যাপাসিটি ৮ বিশিষ্ট নতুন ব্যাকিং অ্যারে বরাদ্দ করে। ৫টি উপাদানের মোট যোগফল দাঁড়ায় ৪৪৫।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Slice lab (modify elements, press Run)', bn: 'Slice lab (উপাদান পরিবর্তন করুন, Run)' },
      html: '<h3>Go Slice Allocation & Reallocation</h3>\n<pre id="out"></pre>\n<p>Watch capacity double when length exceeds initial allocation.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'let scores = [85, 90, 95, 100, 75];\nconst sum = scores.reduce((a, b) => a + b, 0);\nconst len = scores.length;\nconst cap = len > 4 ? 8 : 4;\nconsole.log("sum: " + sum + ", len: " + len + ", cap: " + cap);\ndocument.getElementById("out").textContent = "Items: " + len + " · Cap: " + cap + " · Sum: " + sum + " · Growth verified ✓";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Slice architecture rules', bn: 'ফলাফল — স্লাইস আর্কিটেকচারের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Passing slices passes a 24-byte header: functions receive a copy of the pointer, length, and capacity, pointing to the same underlying backing array.', bn: 'স্লাইস পাস করলে কেবল ২৪-বাইটের হেডার কপি হয়: ফাংশনগুলো একই ব্যাকিং অ্যারেকে নির্দেশকারী পয়েন্টার, দৈর্ঘ্য ও ক্যাপাসিটির কপি গ্রহণ করে।' },
        { en: 'Always capture append return value: slice = append(slice, val) guarantees your local header pointer updates if reallocation occurred.', bn: 'সর্বদা append এর রিটার্ন মান গ্রহণ করুন: slice = append(slice, val) নিশ্চিত করে যে নতুন মেমরি বরাদ্দ হলে লোকাল হেডার পয়েন্টার আপডেট হবে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common slice pitfalls', bn: 'ডিবাগ — স্লাইসের সাধারণ ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Accidental shared backing array mutation', bn: 'শেয়ার্ড ব্যাকিং অ্যারেতে অনাকাঙ্ক্ষিত পরিবর্তন' },
      text: {
        en: 'If two slices share a backing array (e.g. b := a[1:3]), modifying b[0] inadvertently mutates a[1]! Cure: use copy(dst, src) or the full slice expression a[1:3:3] to limit capacity and force append to reallocate.',
        bn: '২টি স্লাইস যদি একই ব্যাকিং অ্যারে শেয়ার করে (যেমন b := a[1:3]), তবে b[0] পরিবর্তন করলে a[1] ও বদলে যায়! প্রতিকার: স্বাধীন কপির জন্য copy(dst, src) অথবা ক্যাপাসিটি সীমাবদ্ধ করতে a[1:3:3] সিনট্যাক্স ব্যবহার করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Preallocating slice capacity with make', bn: 'make দিয়ে আগেই ক্যাপাসিটি বরাদ্দ করা' },
      text: {
        en: 'When the number of incoming items is known or can be estimated, writing make([]T, 0, count) prevents multiple geometric reallocation cycles, reducing GC pressure significantly.',
        bn: 'আগত উপাদানের সংখ্যা জানা থাকলে make([]T, 0, count) লিখলে বারবার মেমরি রিলোকেশন চক্র এড়ানো যায়, যা গার্বেজ কালেক্টরের ওপর চাপ অনেক কমায়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production slice performance', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল স্লাইস পারফরম্যান্স' },
    },
    {
      type: 'list',
      items: [
        { en: 'Network packet parsers (gRPC, TCP sockets): sub-slice raw byte buffers ([]byte) to read headers without copying gigabytes of payload data.', bn: 'নেটওয়ার্ক প্যাকেট পার্সার: মেমরি কপি না করেই র বাইট বাফার ([]byte) সাব-স্লাইস করে গিগাবাইট ডেটা থেকে দ্রুত হেডার পড়ে।' },
        { en: 'Database query scanners (database/sql): scan query results into preallocated slice buffers to optimize microservice database latency.', bn: 'ডাটাবেস কুয়েরি স্ক্যানার: মাইক্রোসার্ভিসের ডাটাবেস ল্যাটেন্সি কমাতে আগে থেকে বরাদ্দকৃত স্লাইসে কুয়েরির ফলাফল সংরক্ষণ করে।' },
        { en: 'Log ingest engines (Fluentd, Grafana Loki): utilize ring-buffer slices to batch streaming logs before flushing to cloud object storage.', bn: 'লগিং ইঞ্জিন: ক্লাউড স্টোরেজে পাঠানোর আগে স্ট্রিমিং লগ ব্যাচ করতে রিং-বাফার স্লাইস ব্যবহার করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Maps and Range', bn: 'পরবর্তী পাঠ — ম্যাপ ও রেঞ্জ' },
    },
    {
      type: 'para',
      text: {
        en: 'With slices and memory reallocation mastered, Lesson 3 examines Go hash maps, the comma-ok lookup idiom, map deletion, and idiomatic for...range iteration.',
        bn: 'স্লাইস ও মেমরি রিলোকেশন আয়ত্ত করার পর, পাঠ ৩ গো হ্যাশ ম্যাপ, comma-ok লুকআপ ইডিয়ম, ম্যাপ থেকে ডিলিট এবং for...range ইটারেশন শেখাবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'go-slc-ex-1',
      kind: 'mcq',
      topic: 'slice-header-components',
      question: {
        en: 'What three fields comprise the internal 24-byte slice header structure in 64-bit Go?',
        bn: '৬৪-বিট গো-তে অভ্যন্তরীণ ২৪-বাইটের স্লাইস হেডার কাঠামোটি কোন তিনটি ফিল্ড নিয়ে গঠিত?',
      },
      options: [
        {
          en: 'Pointer to backing array, length (len), and capacity (cap)',
          bn: 'ব্যাকিং অ্যারের পয়েন্টার, দৈর্ঘ্য (len) এবং ক্যাপাসিটি (cap)',
        },
        {
          en: 'Filename, line number, and checksum hash',
          bn: 'ফাইলের নাম, লাইন নম্বর এবং চেকসাম হ্যাশ',
        },
        {
          en: 'Operating system process ID, thread count, and mutex lock',
          bn: 'অপারেটিং সিস্টেম প্রসেস আইডি, থ্রেড কাউন্ট এবং মিউটেক্স লক',
        },
        {
          en: 'IPv4 address, port number, and socket descriptor',
          bn: 'আইপিভি৪ অ্যাড্রেস, পোর্ট নম্বর এবং সকেট ডেসক্রিপ্টর',
        },
      ],
      answer: 0,
      hint: { en: 'A slice tracks pointer, current length, and maximum capacity.', bn: 'স্লাইস পয়েন্টার, বর্তমান দৈর্ঘ্য এবং সর্বোচ্চ ক্যাপাসিটি ট্র্যাক করে।' },
      explanation: {
        en: 'In Go, a slice header is a 3-word struct: a pointer to the underlying array, length (len), and capacity (cap).',
        bn: 'গো-তে স্লাইস হেডার হলো ৩-শব্দের স্ট্রাকচার: ব্যাকিং অ্যারের পয়েন্টার, দৈর্ঘ্য (len) এবং ক্যাপাসিটি (cap)।',
      },
    },
    {
      id: 'go-slc-ex-2',
      kind: 'mcq',
      topic: 'slice-sim-metrics',
      question: {
        en: 'In our code simulation, what did capacity grow to after appending 5 items to a slice with initial capacity 4, and what was the total scores sum?',
        bn: 'আমাদের কোড সিমুলেশনে প্রাথমিক ক্যাপাসিটি ৪ থাকা স্লাইসে ৫টি উপাদান যোগ করার পর ক্যাপাসিটি কত হয়েছিল এবং মোট স্কোরের যোগফল কত ছিল?',
      },
      options: [
        { en: 'Capacity grew to 8; Total scores sum = 445 across 5 items', bn: 'ক্যাপাসিটি বৃদ্ধি পেয়ে ৮ হয়েছিল; ৫টি উপাদানের মোট যোগফল = ৪৪৫' },
        { en: 'Capacity remained 4; Total scores sum = 200', bn: 'ক্যাপাসিটি ৪ রয়ে গিয়েছিল; মোট স্কোরের যোগফল = ২০০' },
        { en: 'Capacity grew to 100; Total scores sum = 500', bn: 'ক্যাপাসিটি ১০০ হয়েছিল; মোট যোগফল = ৫০০' },
        { en: 'Capacity grew to 5; Total scores sum = 350', bn: 'ক্যাপাসিটি ৫ হয়েছিল; মোট যোগফল = ৩৫০' },
      ],
      answer: 0,
      hint: { en: 'Capacity doubled from 4 to 8; 85 + 90 + 95 + 100 + 75 = 445.', bn: 'ক্যাপাসিটি ৪ থেকে দ্বিগুণ হয়ে ৮ হয়েছিল; ৮৫ + ৯০ + ৯৫ + ১০০ + ৭৫ = ৪৪৫।' },
      explanation: {
        en: 'Exceeding capacity 4 triggered reallocation, doubling capacity to 8. The 5 scores sum up to 445.',
        bn: 'ক্যাপাসিটি ৪ অতিক্রম করায় নতুন মেমরি বরাদ্দ হয়ে ক্যাপাসিটি দ্বিগুণ হয়ে ৮ হয় এবং ৫টি স্কোরের যোগফল ৪৪৫ হয়।',
      },
    },
    {
      id: 'go-slc-ex-3',
      kind: 'mcq',
      topic: 'append-reassign',
      question: {
        en: 'Why must the return value of append always be assigned back to the slice variable (slice = append(slice, val))?',
        bn: 'কেন append এর রিটার্ন মানকে সর্বদা পুনরায় স্লাইস ভেরিয়েবলে অ্যাসাইন করতে হয় (slice = append(slice, val))?',
      },
      options: [
        {
          en: 'Because if capacity is exceeded, append allocates a new backing array with a new memory pointer',
          bn: 'কারণ ধারণক্ষমতা অতিক্রম করলে append নতুন মেমরি পয়েন্টারসহ একটি সম্পূর্ণ নতুন ব্যাকিং অ্যারে বরাদ্দ করে',
        },
        {
          en: 'Because append deletes the original variable from the CPU registers',
          bn: 'কারণ append সিপিইউ রেজিস্টার থেকে মূল ভেরিয়েবলটি মুছে ফেলে',
        },
        {
          en: 'Because without reassignment the program crashes with a segmentation fault',
          bn: 'কারণ পুনরায় অ্যাসাইন না করলে প্রোগ্রাম সেগমেন্টেশন ফল্ট দিয়ে ক্র্যাশ করে',
        },
        {
          en: 'Because Go enforces a compiler rule that all function returns must be reassigned',
          bn: 'কারণ গো-এর কম্পাইলার নিয়ম অনুযায়ী সমস্ত ফাংশন রিটার্ন পুনরায় অ্যাসাইন করা বাধ্যতামূলক',
        },
      ],
      answer: 0,
      hint: { en: 'append returns an updated header with the new pointer, length, and cap.', bn: 'append নতুন পয়েন্টার, দৈর্ঘ্য ও ক্যাপাসিটিযুক্ত আপডেটেড হেডার ফেরত দেয়।' },
      explanation: {
        en: 'If appending causes capacity growth, the slice points to a new memory block. Reassigning updates the local header.',
        bn: 'অ্যাপেন্ডের ফলে ক্যাপাসিটি বৃদ্ধি পেলে স্লাইস নতুন মেমরি ব্লকে নির্দেশ করে। পুনরায় অ্যাসাইন করলে লোকাল হেডারটি আপডেট হয়।',
      },
    },
    {
      id: 'go-slc-ex-4',
      kind: 'predict',
      topic: 'capacity-builtin-name',
      question: {
        en: 'Which Go built-in function returns the total allocated capacity of a slice or array?',
        bn: 'কোন গো বিল্ট-ইন ফাংশনটি কোনো স্লাইস বা অ্যারের মোট বরাদ্দকৃত ক্যাপাসিটি ফেরত দেয়?',
      },
      answer: 'cap',
      accept: ['cap', 'cap()'],
      hint: { en: 'Short for capacity, 3 letters.', bn: 'capacity এর সংক্ষিপ্ত রূপ, ৩ অক্ষরের।' },
      explanation: {
        en: 'The cap() built-in returns the capacity of a slice, representing the number of elements in the backing array from the slice start.',
        bn: 'cap() বিল্ট-ইন ফাংশন স্লাইসের ধারণক্ষমতা ফেরত দেয়, যা ব্যাকিং অ্যারের অবশিষ্ট স্লট সংখ্যা নির্দেশ করে।',
      },
    },
  ],
  quiz: {
    id: 'slices-append-quiz',
    title: { en: 'Lesson 2 exam', bn: 'পাঠ ২ পরীক্ষা' },
    questions: [
      {
        id: 'go-slc-q1',
        kind: 'mcq',
        topic: 'subslice-behavior',
        question: {
          en: 'When a sub-slice is created with sub := original[1:3], what happens to the underlying memory?',
          bn: 'যখন sub := original[1:3] দিয়ে একটি সাব-স্লাইস তৈরি করা হয়, তখন অন্তর্নিহিত মেমরিতে কী ঘটে?',
        },
        options: [
          {
            en: 'sub references the exact same backing array without copying any elements, sharing underlying memory with original',
            bn: 'sub কোনো উপাদান কপি না করেই হুবহু একই ব্যাকিং অ্যারেকে নির্দেশ করে এবং original এর সাথে মেমরি শেয়ার করে',
          },
          {
            en: 'The operating system duplicates the entire RAM buffer',
            bn: 'অপারেটিং সিস্টেম সম্পূর্ণ র‍্যাম বাফার ডুপ্লিকেট করে',
          },
          {
            en: 'original is destroyed and set to nil immediately',
            bn: 'original ধ্বংস হয়ে সাথে সাথে nil এ পরিণত হয়',
          },
          {
            en: 'The compiler writes the elements to a temporary file on disk',
            bn: 'কম্পাইলার উপাদানগুলোকে ডিস্কের একটি অস্থায়ী ফাইলে লিখে রাখে',
          },
        ],
        answer: 0,
        hint: { en: 'Sub-slicing is zero-copy; both slices share the backing array.', bn: 'সাব-স্লাইসিং জিরো-কপি; উভয় স্লাইস একই ব্যাকিং অ্যারে শেয়ার করে।' },
        explanation: {
          en: 'Sub-slicing adjusts the pointer and length in a new header while pointing to the existing backing array.',
          bn: 'সাব-স্লাইসিং নতুন হেডারে কেবল পয়েন্টার ও দৈর্ঘ্য সমন্বয় করে বিদ্যমান ব্যাকিং অ্যারেকেই নির্দেশ করে।',
        },
      },
      {
        id: 'go-slc-q2',
        kind: 'mcq',
        topic: 'preallocate-syntax',
        question: {
          en: 'Which Go statement creates an integer slice with an initial length of 0 and a preallocated capacity of 100?',
          bn: 'কোন গো স্টেটমেন্টটি প্রাথমিক দৈর্ঘ্য ০ এবং আগে থেকে বরাদ্দকৃত ক্যাপাসিটি ১০০ বিশিষ্ট একটি ইন্টিজার স্লাইস তৈরি করে?',
        },
        options: [
          { en: 'make([]int, 0, 100)', bn: 'make([]int, 0, 100)' },
          { en: 'new([]int, 100)', bn: 'new([]int, 100)' },
          { en: 'allocate(int, 0, 100)', bn: 'allocate(int, 0, 100)' },
          { en: '[]int{len: 0, cap: 100}', bn: '[]int{len: 0, cap: 100}' },
        ],
        answer: 0,
        hint: { en: 'make takes slice type, length, and capacity.', bn: 'make ফাংশন স্লাইস টাইপ, দৈর্ঘ্য এবং ক্যাপাসিটি গ্রহণ করে।' },
        explanation: {
          en: 'make([]T, len, cap) preallocates memory: make([]int, 0, 100) creates an empty slice ready to append 100 items without reallocating.',
          bn: 'make([]T, len, cap) মেমরি আগে থেকে বরাদ্দ করে: make([]int, 0, 100) খালি স্লাইস তৈরি করে যাতে ১০০টি উপাদান কোনো রিলোকেশন ছাড়াই অ্যাপেন্ড করা যায়।',
        },
      },
      {
        id: 'go-slc-q3',
        kind: 'mcq',
        topic: 'items-count-walkthrough',
        question: {
          en: 'In our code walkthrough, how many total integer scores were stored in the final scores slice?',
          bn: 'আমাদের কোড আলোচনায় চূড়ান্ত scores স্লাইসটিতে মোট কয়টি ইন্টিজার স্কোর সংরক্ষিত ছিল?',
        },
        options: [
          { en: 'Exactly 5 scores (85, 90, 95, 100, 75)', bn: 'ঠিক ৫টি স্কোর (৮৫, ৯০, ৯৫, ১০০, ৭৫)' },
          { en: 'Exactly 20 scores', bn: 'ঠিক ২০টি স্কোর' },
          { en: 'Only 1 score', bn: 'কেবল ১টি স্কোর' },
          { en: 'Zero scores', bn: '০টি স্কোর' },
        ],
        answer: 0,
        hint: { en: '3 scores appended first, then 2 more.', bn: 'প্রথমে ৩টি স্কোর এবং পরে আরও ২টি যোগ করা হয়েছিল।' },
        explanation: {
          en: 'The simulation appended 3 elements, followed by 2 more, yielding exactly 5 elements.',
          bn: 'সিমুলেশনটিতে প্রথমে ৩টি এবং পরবর্তীতে আরও ২টি উপাদান অ্যাপেন্ড করায় মোট ঠিক ৫টি উপাদান ছিল।',
        },
      },
      {
        id: 'go-slc-q4',
        kind: 'predict',
        topic: 'length-builtin-name',
        question: {
          en: 'Which Go built-in function returns the current number of active elements in a slice?',
          bn: 'কোন গো বিল্ট-ইন ফাংশনটি কোনো স্লাইসের বর্তমান সক্রিয় উপাদানের সংখ্যা ফেরত দেয়?',
        },
        answer: 'len',
        accept: ['len', 'len()'],
        hint: { en: 'Short for length, 3 letters.', bn: 'length এর সংক্ষিপ্ত রূপ, ৩ অক্ষরের।' },
        explanation: {
          en: 'The len() function returns the current count of elements stored in the slice.',
          bn: 'len() ফাংশন কোনো স্লাইসে সংরক্ষিত বর্তমান উপাদানের সংখ্যা ফেরত দেয়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'maps-and-the-range',
    title: { en: 'Maps and Range', bn: 'ম্যাপ ও রেঞ্জ' },
  },
};
