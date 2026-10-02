import type { Lesson } from '../../../lib/types';

export const accidentalQuadraticLesson: Lesson = {
  slug: 'the-accidental-quadratic',
  tech: 'sorting',
  title: {
    en: 'The Accidental Quadratic: Hidden Linear Traps in Loops',
    bn: 'দি এক্সিডেন্টাল কোয়াড্রাটিক: লুপের ভেতর লুকানো ফাঁদ'
  },
  summary: {
    en: 'An accidental quadratic occurs when code presents a single visible loop that secretly executes linear work inside each iteration. Inexperienced engineers often overlook that built-in methods like array includes, indexOf, or shift perform full passes across memory. For a dataset of 1000 elements, scanning a list inside a loop triggers 1000000 operations. Converting the lookup collection into a hash Set beforehand costs 1000 steps upfront and allows 1000 constant-time checks, finishing in only 2000 total operations. This structural refactoring eliminates 998000 unnecessary operations. Other common accidental quadratics include string concatenation across loops and array unshifting. This lesson teaches hidden complexity detection, call-graph auditing, Set-based pre-indexing, and immutable buffer management.',
    bn: 'একটি এক্সিডেন্টাল কোয়াড্রাটিক তখন ঘটে যখন কোডে বাইরে থেকে একটিমাত্র সাধারণ লুপ দেখা যায় কিন্তু ভেতরের মেথডটি গোপনে প্রতিবার লিনিয়ার কাজ করে। অনভিজ্ঞ ডেভেলপাররা প্রায়ই খেয়াল করেন না যে অ্যারোর includes, indexOf বা shift মেথডগুলো ভেতরে পুরো মেমোরি স্ক্যান করে। ১০০০ উপাদানের একটি ডেটাসেটে লুপের ভেতর এমন স্ক্যান চালালে মোট ১০০০০০০ অপারেশন সংঘটিত হয়। অথচ আগেই ডাটাকে একটি হ্যাশ সেটে (Set) রূপান্তর করতে ১০০০ ধাপ এবং ভেতরে ১০০০টি কনস্ট্যান্ট লুকআপ মিলিয়ে মোট মাত্র ২০০০ অপারেশনেই কাজ শেষ করা যায়। এই সাধারণ পরিবর্তনের ফলে ৯৯৮০০০টি অপ্রয়োজনীয় অপারেশন বাতিল হয়ে যায়। এছাড়া লুপে স্ট্রিং যোগ করা বা অ্যারে শিফট করাও একই রকম বিপর্যয় ডেকে আনে। এই পাঠে লুকানো কমপ্লেক্সিটি শনাক্তকরণ, কল-গ্রাফ নিরীক্ষা, সেট ইনডেক্সিং এবং মেমোরি অপ্টিমাইজেশন বিস্তারিত শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Hidden Complexity in Innocent Loops',
        bn: 'মূল ধারণা: সাধারণ লুপের আড়ালে লুকানো কমপ্লেক্সিটি'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When your code looks linear because you only wrote one loop, hidden library calls can ruin performance. An internal linear scan inside a loop transforms harmless code into a quadratic bottleneck.',
        bn: 'বাইরে থেকে কেবল একটি লুপ দেখে কোডকে লিনিয়ার মনে হলেও লাইব্রেরি মেথডের কারণে পারফরম্যান্স ভেঙে পড়তে পারে। লুপের ভেতরের একটি অদৃশ্য লিনিয়ার স্ক্যান পুরো কোডটিকে কোয়াড্রাটিক জটিলতায় রূপান্তর করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The Accidental Quadratic',
          def: {
            en: 'An algorithmic defect where an apparent O(n) loop silently invokes an O(n) helper each cycle, compounding into O(n^2)',
            bn: 'এমন ত্রুটি যেখানে দৃশ্যমান O(n) লুপের ভেতর প্রতি পদক্ষেপে একটি O(n) সহায়ক মেথড চলে মোট কাজকে O(n^2)-এ পরিণত করে'
          }
        },
        {
          term: 'Linear Search Hidden in Helpers',
          def: {
            en: 'Standard array methods such as includes(), indexOf(), and slice() that iterate linearly over elements under the hood',
            bn: 'অ্যারোর সাধারণ মেথড যেমন includes(), indexOf() যা ব্যাকগ্রাউন্ডে পুরো মেমোরি একবার করে ঘুরে উপাদান খোঁজে'
          }
        },
        {
          term: 'The Set Conversion Antidote',
          def: {
            en: 'Pre-allocating a hash Set in O(n) time once before the loop, turning repeated inner lookups into average O(1) operations',
            bn: 'লুপ শুরুর আগে একবার O(n) খরচে হ্যাশ সেট তৈরি করে নেওয়া, যাতে লুপের ভেতরের প্রতিটি খোঁজ গড়ে O(1) সময়ে শেষ হয়'
          }
        },
        {
          term: 'String Immutability Tax',
          def: {
            en: 'Repeatedly appending characters to strings triggers full buffer memory copies each iteration, producing quadratic allocation overhead',
            bn: 'লুপে বারবার স্ট্রিং যোগ করলে প্রতিবার পুরো মেমোরি কপি করতে হয়, যা মেমোরিতে মারাত্মক কোয়াড্রাটিক চাপ তৈরি করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'hidden-traps-table',
      text: {
        en: 'Common Hidden Quadratic Traps and Their Antidotes',
        bn: 'লুকানো কোয়াড্রাটিক ফাঁদ ও তাদের সঠিক প্রতিকার'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Everyday JavaScript Patterns That Cause Accidental Quadratic Performance Degradation',
        bn: 'জাভাস্ক্রিপ্টের যেসব সাধারণ কোডিং প্যাটার্ন অনাকাঙ্ক্ষিত কোয়াড্রাটিক সমস্যা তৈরি করে'
      },
      head: [
        { en: 'Vulnerable Pattern', bn: 'ত্রুটিপূর্ণ কোড' },
        { en: 'Hidden Inner Cost', bn: 'ভেতরের লুকানো খরচ' },
        { en: 'Efficient Solution', bn: 'দক্ষ ও সঠিক সমাধান' }
      ],
      rows: [
        [
          { en: 'arr.filter(x => list.includes(x))', bn: 'arr.filter(x => list.includes(x))' },
          { en: 'includes() scans list linearly: O(n) inner', bn: 'includes() প্রতিবার পুরো তালিকা খোঁজে: O(n)' },
          { en: 'const set = new Set(list); arr.filter(x => set.has(x))', bn: 'আগে Set বানিয়ে set.has() ব্যবহার করা: O(n) মোট' }
        ],
        [
          { en: 'while (arr.length) arr.shift()', bn: 'while (arr.length) arr.shift()' },
          { en: 'shift() re-indexes every remaining element in memory: O(n)', bn: 'shift() মেমোরিতে বাকি সব উপাদানের ইনডেক্স সরায়: O(n)' },
          { en: 'Use an index pointer or a dedicated Queue structure', bn: 'ইনডেক্স পয়েন্টার বা কিউ (Queue) ব্যবহার করা: O(1) প্রতি পদক্ষেপে' }
        ],
        [
          { en: 'for (...) str += chunk', bn: 'for (...) str += chunk' },
          { en: 'String copying reallocates entire character buffer: O(n)', bn: 'স্ট্রিং অবিকৃত রাখতে নতুন মেমোরি কপি করে: O(n)' },
          { en: 'chunks.push(chunk); const out = chunks.join("")', bn: 'অ্যারেতে পুশ করে শেষে .join("") করা: O(n) মোট' }
        ],
        [
          { en: 'for (...) Object.keys(obj).forEach(...)', bn: 'for (...) Object.keys(obj).forEach(...)' },
          { en: 'Object.keys() allocates an array of keys on every trip: O(n)', bn: 'প্রতি পদক্ষেপে নতুন কি-অ্যারে তৈরি করে: O(n)' },
          { en: 'Lift Object.keys(obj) outside the loop prior to iteration', bn: 'লুপের বাইরে একবার Object.keys(obj) কল করে রাখা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Hidden Includes vs Set Pre-Indexing for 1000 Items',
        bn: 'চালনাযোগ্য সিমুলেশন: ১০০০ আইটেমে লুকানো includes বনাম Set ইনডেক্সিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates evaluating 1000 items. Naive list scanning incurs 1000000 operations, while pre-indexing via a Set finishes in 2000 operations, saving 998000 operations:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ১০০০টি আইটেমের ওপর হিসাব করে দেখায়। সাধারণ তালিকায় খোঁজার কারণে ১০০০০০০ অপারেশন লাগলেও সেটের মাধ্যমে মাত্র ২০০০ অপারেশনেই কাজ শেষ হয় এবং ৯৯৮০০০টি অপারেশন বেঁচে যায়:'
      }
    },
    {
      type: 'code',
      id: 'accidental-quadratic-sim',
      lang: 'javascript',
      code: `// Accidental Quadratic vs Set Pre-indexing Simulation for n = 1000
const n = 1000; // 1000 items processed

// Quadratic trap: looping 1000 items with inner array.includes() (1000 * 1000)
const quadraticOps = n * n;

// Optimized approach: 1000 steps to build Set + 1000 O(1) lookups
const linearOps = n + n;

// Total operations eliminated
const eliminated = quadraticOps - linearOps;

console.log('Processed dataset element count:', n);
// -> Processed dataset element count: 1000

console.log('Operations incurred by naive inner includes():', quadraticOps);
// -> Operations incurred by naive inner includes(): 1000000

console.log('Operations incurred using Set pre-indexing:', linearOps);
// -> Operations incurred using Set pre-indexing: 2000

console.log('Total unnecessary operations eliminated:', eliminated);
// -> Total unnecessary operations eliminated: 998000`,
      caption: {
        en: 'Figure 1: Processing 1000 items with inner includes costs 1000000 operations, while Set indexing finishes in 2000 steps, saving 998000 operations',
        bn: 'চিত্র ১: ১০০০ আইটেমে লুপের ভেতর includes চালালে ১০০০০০০ অপারেশন লাগে, যেখানে Set ব্যবহার করলে মাত্র ২০০০ ধাপে শেষ হয় এবং ৯৯৮০০০ অপারেশন বাঁচে'
      }
    },
    {
      type: 'heading',
      id: 'shift-and-concat-guide',
      text: {
        en: 'Array Shift & String Concatenation Inefficiencies',
        bn: 'অ্যারে শিফট ও স্ট্রিং কনক্যাটেনেশনের লুকানো বিপদ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In JavaScript engines, arrays are contiguous blocks of memory. Invoking .shift() removes the first element and forces the runtime to move all subsequent elements back by one index.',
        bn: 'জাভাস্ক্রিপ্ট ইঞ্জিনে সাধারণ অ্যারে মেমোরিতে পর্যায়ক্রমে থাকে। .shift() কল করলে প্রথম উপাদানটি মুছে গিয়ে পেছনের সমস্ত উপাদানকে এক ঘর করে এগিয়ে আনতে মেমোরি কপি করতে হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Re-Indexing Overhead',
          def: {
            en: 'The memory copy required when removing or prepending elements at the head of an array (O(n) work per operation)',
            bn: 'অ্যারোর শুরুতে কোনো কিছু যোগ বা বাদ দিলে বাকি সব উপাদান এক ঘর সরিয়ে নেওয়ার মেমোরি খরচ'
          }
        },
        {
          term: 'Array Join Pattern',
          def: {
            en: 'Accumulating substrings inside a dynamic array and performing a single atomic .join("") allocation to construct strings in linear time',
            bn: 'লুপে স্ট্রিং না বাড়িয়ে অ্যারেতে জমা করে শেষে একবার .join("") দিয়ে একবারে পুরো টেক্সট তৈরি করার সেরা উপায়'
          }
        },
        {
          term: 'Pointer Offset Queuing',
          def: {
            en: 'Simulating queue extraction by incrementing a head pointer rather than modifying the underlying array layout',
            bn: 'অ্যারে থেকে উপাদান ডিলিট না করে কেবল একটি পয়েন্টার বা ইনডেক্স বাড়িয়ে কিউয়ের কাজ সমাধান করা'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'accidental-ops-saved-ex',
      kind: 'mcq',
      topic: 'Operations eliminated by Set optimization',
      question: {
        en: 'According to our simulation of 1000 items, how many unnecessary operations are eliminated when replacing nested includes with a pre-indexed Set?',
        bn: 'আমাদের ১০০০ আইটেমের সিমুলেশন অনুযায়ী নেস্টেড includes-এর বদলে Set ইনডেক্সিং ব্যবহার করলে মোট কয়টি অপ্রয়োজনীয় অপারেশন বাতিল হয়?'
      },
      options: [
        {
          en: '998000 operations eliminated',
          bn: '৯৯৮০০০টি অপারেশন বাতিল হয়'
        },
        {
          en: '1000 operations',
          bn: '১০০০টি অপারেশন'
        },
        {
          en: '500 operations',
          bn: '৫০০টি অপারেশন'
        },
        {
          en: '0 operations',
          bn: '০টি অপারেশন'
        }
      ],
      answer: 0,
      hint: {
        en: '1000000 minus 2000 equals 998000.',
        bn: '১০০০০০০ থেকে ২০০০ বাদ দিলে ৯৯৮০০০ হয়।'
      },
      explanation: {
        en: 'The quadratic implementation executes 1000000 operations, whereas the Set approach needs only 2000, eliminating 998000 operations.',
        bn: 'কোয়াড্রাটিক কোডে ১০০০০০০ অপারেশন লাগলেও সেটে লাগে মাত্র ২০০০, যার ফলে ৯৯৮০০০ অপারেশন সাশ্রয় হয়।'
      }
    },
    {
      id: 'accidental-shift-cost-ex',
      kind: 'mcq',
      topic: 'Why array.shift() inside a loop is dangerous',
      question: {
        en: 'Why does executing while(arr.length) { arr.shift(); } on an array of size n result in O(n^2) quadratic performance?',
        bn: 'n আকারের একটি অ্যারোতে while(arr.length) { arr.shift(); } চালালে কেন তা O(n^2) কোয়াড্রাটিক সময় নেয়?'
      },
      options: [
        {
          en: 'Each shift() removes element 0 and forces the engine to shift all remaining n-1 elements left in memory, taking O(n) work per iteration',
          bn: 'প্রতিটি shift() ইনডেক্স ০ এর উপাদান সরায় এবং মেমোরিতে বাকি সব উপাদানকে এক ঘর বামে সরাতে বাধ্য করে, ফলে প্রতি লুপে O(n) কাজ হয়'
        },
        {
          en: 'The shift method connects to an external database over the network',
          bn: 'shift মেথড নেটওয়ার্কের মাধ্যমে ডাটাবেজে যুক্ত হয়'
        },
        {
          en: 'Because arrays in JavaScript can only hold ten items',
          bn: 'কারণ জাভাস্ক্রিপ্টে অ্যারোতে দশটির বেশি মান রাখা যায় না'
        },
        {
          en: 'The JavaScript engine restarts the processor on every shift call',
          bn: 'ইঞ্জিন প্রতিবার প্রসেসর রিস্টার্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Moving remaining elements in contiguous memory takes linear time per shift.',
        bn: 'মেমোরিতে বাকি উপাদানগুলোকে এক ঘর করে সরানোর খরচের কথা ভাবুন।'
      },
      explanation: {
        en: 'Shifting n times where each shift takes O(n) memory re-indexing yields n * O(n) = O(n^2) overall time.',
        bn: 'n বার শিফট চালালে এবং প্রতিবার বাকি উপাদান সরাতে O(n) সময় লাগলে মোট কাজ n * n = O(n^2) হয়।'
      }
    },
    {
      id: 'accidental-string-concat-ex',
      kind: 'mcq',
      topic: 'Efficient string building across loops',
      question: {
        en: 'What is the optimal way to concatenate thousands of text strings inside a loop to avoid quadratic memory copying?',
        bn: 'মেমোরির কোয়াড্রাটিক অপচয় রোধ করে লুপের ভেতর হাজার হাজার স্ট্রিং জোড়া লাগানোর সবচেয়ে কার্যকর পদ্ধতি কোনটি?'
      },
      options: [
        {
          en: 'Push each string chunk into an array and call array.join("") once at the conclusion of the loop',
          bn: 'প্রতিটি স্ট্রিং টুকরো একটি অ্যারোতে পুশ করে লুপ শেষে একবার array.join("") কল করা'
        },
        {
          en: 'Use the += operator with unbuffered strings',
          bn: 'সাধারণভাবে += দিয়ে স্ট্রিং বাড়ানো'
        },
        {
          en: 'Save each character in a separate text file on disk',
          bn: 'প্রতিটি অক্ষর আলাদা ফাইলে ডিস্কে সেভ করা'
        },
        {
          en: 'Convert the string into floating point numbers',
          bn: 'স্ট্রিংকে ফ্লোটিং পয়েন্ট সংখ্যা বানানো'
        }
      ],
      answer: 0,
      hint: {
        en: 'Accumulate in an array, then join once at the end.',
        bn: 'আগে অ্যারোতে জমা করে শেষে একবারে join করার কথা ভাবুন।'
      },
      explanation: {
        en: 'Accumulating in an array avoids allocating new string buffers on every step, constructing the final string in linear O(n) time.',
        bn: 'অ্যারোতে জমা রাখলে প্রতি ধাপে নতুন মেমোরি বাফার তৈরি হয় না, ফলে লিনিয়ার O(n) সময়ে পুরো টেক্সট তৈরি হয়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-accidental-quadratic',
    title: {
      en: 'The Accidental Quadratic Quiz',
      bn: 'দি এক্সিডেন্টাল কোয়াড্রাটিক কুইজ'
    },
    questions: [
      {
        id: 'q-accidental-filter-includes',
        kind: 'mcq',
        topic: 'Complexity of arr.filter(x => list.includes(x))',
        question: {
          en: 'Given two arrays arr and list, each containing n elements, what is the time complexity of arr.filter(x => list.includes(x))?',
          bn: 'arr এবং list উভয়ের আকার n হলে arr.filter(x => list.includes(x))-এর টাইম কমপ্লেক্সিটি কত হবে?'
        },
        options: [
          {
            en: 'O(n^2) because filter iterates n times and includes() performs an O(n) scan on each element',
            bn: 'O(n^2) কারণ filter চলে n বার এবং তার ভেতরে includes() প্রতিবার আরও n বার স্ক্যান চালায়'
          },
          {
            en: 'O(n) linear time',
            bn: 'O(n) লিনিয়ার টাইম'
          },
          {
            en: 'O(log n) logarithmic time',
            bn: 'O(log n) লগারিদমিক টাইম'
          },
          {
            en: 'O(1) constant time',
            bn: 'O(1) কনস্ট্যান্ট টাইম'
          }
        ],
        answer: 0,
        hint: {
          en: 'filter is O(n), includes is O(n); nesting them multiplies their cost.',
          bn: 'filter এর কাজ n, এবং includes এর কাজ n; ভেতরে থাকার কারণে n গুণ n হয়।'
        },
        explanation: {
          en: 'Invoking an O(n) search inside an O(n) loop multiplies the operations to n * n = O(n^2).',
          bn: 'একটি n বারের লুপের ভেতর n বারের আরেকটি স্ক্যান চালালে তাদের মোট কাজ গুণ হয়ে O(n^2) হয়।'
        }
      },
      {
        id: 'q-accidental-set-lookup-speed',
        kind: 'mcq',
        topic: 'Set lookup time complexity',
        question: {
          en: 'Why does converting list into const lookupSet = new Set(list) solve the accidental quadratic?',
          bn: 'লিস্টকে const lookupSet = new Set(list)-এ রূপান্তর করলে কেন এক্সিডেন্টাল কোয়াড্রাটিক সমস্যাটি দূর হয়?'
        },
        options: [
          {
            en: 'Creating the Set costs O(n) once upfront, and subsequent lookupSet.has(x) checks take average O(1) time, bringing total complexity down to O(n)',
            bn: 'সেট তৈরিতে শুরুতে একবার O(n) লাগে এবং পরবর্তীতে প্রতিটি lookupSet.has(x) গড়ে মাত্র O(1) সময় নেয়, ফলে সামগ্রিক কমপ্লেক্সিটি O(n)-এ নেমে আসে'
          },
          {
            en: 'Sets run using WebAssembly in the background',
            bn: 'সেট ব্যাকগ্রাউন্ডে ওয়েবঅ্যাসেম্বলি ব্যবহার করে'
          },
          {
            en: 'Sets compress data by ninety percent',
            bn: 'সেট উপাত্তকে নব্বই শতাংশ সংকুচিত করে'
          },
          {
            en: 'Sets delete duplicate loops from the source code',
            bn: 'সেট কোড থেকে লুপ মুছে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hash table lookups take O(1) average time.',
          bn: 'হ্যাশ টেবিলে কোনো মান খোঁজার গড় সময় O(1)।'
        },
        explanation: {
          en: 'A hash Set provides O(1) average membership tests, reducing an O(n * n) nested traversal to O(n + n) = O(n).',
          bn: 'হ্যাশ সেটে উপাদান খোঁজার গড় সময় O(1) হওয়ায় n * n কাজের বদলে n + n = O(n) সময়ে পুরো কাজ শেষ হয়।'
        }
      },
      {
        id: 'q-accidental-indexof-loop',
        kind: 'mcq',
        topic: 'Accidental quadratic in array deduplication',
        question: {
          en: 'Why is the classic array deduplication pattern arr.filter((item, index) => arr.indexOf(item) === index) considered an anti-pattern for large arrays?',
          bn: 'বড় অ্যারোর ক্ষেত্রে ডুপ্লিকেট বাদ দিতে arr.filter((item, index) => arr.indexOf(item) === index) ব্যবহার করাকে কেন বাজে কোডিং হিসেবে গণ্য করা হয়?'
        },
        options: [
          {
            en: 'indexOf() performs a linear scan from index 0 for every element evaluated by filter(), producing O(n^2) quadratic degradation',
            bn: 'filter-এর প্রতিটি উপাদানের জন্য indexOf() ইনডেক্স ০ থেকে শুরু করে পুরো অ্যারে স্ক্যান করে, যার ফলে কোয়াড্রাটিক O(n^2) ধীরগতি তৈরি হয়'
          },
          {
            en: 'It produces incorrect results on negative numbers',
            bn: 'ঋণাত্মক সংখ্যায় এটি ভুল ফল দেয়'
          },
          {
            en: 'The filter method does not support arrow functions',
            bn: 'filter মেথডে অ্যারো ফাংশন চলে না'
          },
          {
            en: 'indexOf is deprecated in ECMAScript',
            bn: 'indexOf বাতিল হয়ে গেছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'indexOf is an O(n) search nested inside an O(n) filter.',
          bn: 'filter-এর ভেতর indexOf থাকা মানে লিনিয়ার কাজের ভেতর আরেকটি লিনিয়ার কাজ ঢোকানো।'
        },
        explanation: {
          en: 'Calling indexOf() inside filter() creates an accidental quadratic. The correct modern alternative is Array.from(new Set(arr)).',
          bn: 'filter-এর ভেতর indexOf ডাকলে O(n^2) তৈরি হয়। আধুনিক জাভাস্ক্রিপ্টে এর সঠিক সমাধান হলো Array.from(new Set(arr))।'
        }
      },
      {
        id: 'q-accidental-small-vs-large-n',
        kind: 'mcq',
        topic: 'Why accidental quadratics hide in development environments',
        question: {
          en: 'Why do accidental quadratics frequently escape detection in development and QA environments only to crash systems in production?',
          bn: 'টেস্টিং এবং লোকাল পরিবেশে এক্সিডেন্টাল কোয়াড্রাটিক ধরা না পড়ে প্রোডাকশনে গিয়ে কেন হঠাৎ করে সার্ভার ক্র্যাশ করায়?'
        },
        options: [
          {
            en: 'Local testing uses small mock datasets (e.g. 50 items) where n^2 is trivial (2500 ops), but production handles real scales (e.g. 100000 items) where n^2 detonates (10000000000 ops)',
            bn: 'টেস্টিংয়ে ছোট ডেটাসেট (যেমন ৫০টি আইটেম) ব্যবহার করা হয় যেখানে n^2 নগণ্য (২৫০০ ধাপ), কিন্তু প্রোডাকশনে বাস্তব স্কেলে (যেমন ১০০০০০ আইটেম) n^2 বিস্ফোরণ ঘটায় (১০০০০০০০০০০ ধাপ)'
          },
          {
            en: 'Computers run faster in office buildings than in data centers',
            bn: 'অফিসের কম্পিউটার ডাটা সেন্টারের চেয়ে দ্রুত চলে'
          },
          {
            en: 'Production servers execute code backwards',
            bn: 'প্রোডাকশন সার্ভার কোড উল্টো চালায়'
          },
          {
            en: 'Big-O notation only takes effect when deployed to the internet',
            bn: 'ইন্টারনেটে গেলেই কেবল বিগ-ও কার্যকর হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Small n hides quadratic scaling; big n exposes the explosion.',
          bn: 'ছোট ইনপুটে কোয়াড্রাটিকের ভয়াবহতা বোঝা যায় না, কিন্তু বড় ইনপুটে তা ধরা পড়ে।'
        },
        explanation: {
          en: 'Quadratic curves appear flat for tiny inputs but steepen exponentially at scale, making small-data benchmarks deceptive.',
          bn: 'ছোট ইনপুটে কোয়াড্রাটিক গ্রাফ সমতল মনে হলেও ইনপুট বাড়ার সাথে সাথে খাড়া হয়ে সিস্টেমকে পুরোপুরি অচল করে দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-amortized-ledger',
    tech: 'sorting',
    title: {
      en: 'The Amortized Ledger: Dynamic Arrays & Growth Accounting',
      bn: 'দি অ্যামর্টাইজড লেজার: ডায়নামিক অ্যারে ও গ্রোথ অ্যাকাউন্টিং'
    }
  }
};
