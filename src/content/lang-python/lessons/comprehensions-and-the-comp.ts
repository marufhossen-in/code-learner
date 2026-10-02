import type { Lesson } from '../../../lib/types';

export const ComprehensionsAndTheCompLesson: Lesson = {
  slug: 'comprehensions-and-the-comp',
  tech: 'lang-python',
  title: {
    en: 'List, Set & Dict Comprehensions & Lazy Generators',
    bn: 'লিস্ট, সেট ও ডিকশনারি কম্প্রিহেনশন এবং লেজি জেনারেটর'
  },
  summary: {
    en: 'Master functional data processing in Python: write expressive list, set, and dictionary comprehensions, replace bloated nested loops with declarative pipeline filters, and conserve system memory using lazy generator expressions yielding items on demand.',
    bn: 'পাইথনে ফাংশনাল ডেটা প্রসেসিং আয়ত্ত করুন: লিস্ট, সেট ও ডিকশনারি কম্প্রিহেনশন, নেস্টেড লুপের বদলে ডিক্লেয়ারেটিভ ফিল্টারিং এবং মেমোরি বাঁচিয়ে লেজি জেনারেটর এক্সপ্রেশনের মাধ্যমে অন-ডিমান্ড ডেটা স্ট্রিমিং।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'declarative-comprehensions-heading',
      text: {
        en: 'Declarative Syntax: List, Set, and Dictionary Comprehensions',
        bn: 'ডিক্লেয়ারেটিভ সিনট্যাক্স: লিস্ট, সেট এবং ডিকশনারি কম্প্রিহেনশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Comprehensions provide a concise, declarative syntax for transforming iterables into new data structures. In Python (the expressive scripting language), list comprehensions ([expr for item in iterable if condition]) combine mapping and filtering into a single optimized instruction that executes faster than imperative for-loops appending to empty lists. Python extends this paradigm across 3 core container types: square brackets produce lists, curly braces with single values produce unique sets, and key-value pairs separated by colons produce dictionaries ({k: v for k, v in items}).',
        bn: 'কম্প্রিহেনশন হলো পাইথনে যেকোনো ইটারেবল ডেটাকে নতুন কাঠামোর ডেটায় রূপান্তর করার একটি সংক্ষিপ্ত ও কার্যকর পদ্ধতি। পাইথন (জনপ্রিয় স্ক্রিপ্টিং ভাষা) এ সাধারণ লুপের ভেতরে খালি লিস্টে বারংবার অ্যাপেন্ড করার চেয়ে লিস্ট কম্প্রিহেনশন ([expr for item in iterable if condition]) দ্রুত এবং পরিচ্ছন্নভাবে কাজ করে। পাইথনে ৩ টি মূল কনটেইনারে এই সুবিধা রয়েছে: থার্ড ব্র্যাকেট দিয়ে লিস্ট, সেকেন্ড ব্র্যাকেটে একক মান দিয়ে ইউনিক সেট এবং কোলনযুক্ত কি-ভ্যালু পেয়ার দিয়ে ডিকশনারি ({k: v for k, v in items}) তৈরি করা যায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Memory comparison between eager list comprehension allocation and lazy generator streaming on demand.',
        bn: 'চিত্র ১: মেমোরিতে সম্পূর্ণ লিস্ট সংরক্ষণের সাথে অন-ডিমান্ড লেজি জেনারেটর স্ট্রিমিংয়ের মেমোরি ব্যবহারের তুলনা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">EAGER LIST ALLOCATION VS LAZY GENERATOR STREAMING</text>

  <!-- Left: Eager List Comprehension -->
  <g transform="translate(35, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#0284c7" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Eager List: [x * 2 for x in range(1000)]</text>

    <rect x="15" y="45" width="335" height="50" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="68" fill="#38bdf8" font-size="11" font-family="monospace">Allocates all 1000 items in RAM</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">Memory footprint: ~8856 bytes</text>

    <rect x="15" y="105" width="335" height="60" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="128" fill="#fbbf24" font-size="10" font-family="monospace">[0, 2, 4, 6, 8, ... 1998]</text>
    <text x="25" y="148" fill="#34d399" font-size="9" font-family="monospace">Entire array buffered before use</text>

    <text x="20" y="205" fill="#38bdf8" font-size="10" font-family="sans-serif">O(N) Memory Overhead</text>
  </g>

  <!-- Right: Lazy Generator Expression -->
  <g transform="translate(440, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#7e22ce" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Lazy Generator: (x * 2 for x in range(1000))</text>

    <rect x="15" y="45" width="335" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="25" y="68" fill="#c084fc" font-size="11" font-family="monospace">Allocates stateful iterator frame</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">Memory footprint: ~112 bytes constant</text>

    <rect x="15" y="105" width="335" height="60" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="25" y="128" fill="#34d399" font-size="10" font-family="monospace">Yields 1 item per next() invocation</text>
    <text x="25" y="148" fill="#c084fc" font-size="9" font-family="monospace">Zero elements stored in buffer</text>

    <text x="20" y="205" fill="#c084fc" font-size="10" font-family="sans-serif">O(1) Constant Memory Footprint</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'lazy-generators-and-yield-heading',
      text: {
        en: 'Generator Expressions, The Yield Statement, and Streaming Iterators',
        bn: 'জেনারেটর এক্সপ্রেশন, Yield স্টেটমেন্ট এবং স্ট্রিমিং ইটারেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When processing massive datasets with millions of records, generating eager lists can easily exhaust available RAM. Python resolves this with generator expressions, written using parentheses: (x * 2 for x in stream). Rather than building an in-memory collection, a generator returns an iterator object yielding 1 item at a time upon each next() call. For complex multi-step pipelines, generator functions use the yield keyword to pause execution, preserve their stack frame, and resume dynamically upon subsequent iteration.',
        bn: 'লাখ লাখ রেকর্ডের মতো বিশাল ডেটাসেট নিয়ে কাজ করার সময় সম্পূর্ণ লিস্ট মেমোরিতে তৈরি করলে র্যাম দ্রুত শেষ হয়ে যেতে পারে। পাইথন প্রথম বন্ধনী ব্যবহারের মাধ্যমে জেনারেটর এক্সপ্রেশন দিয়ে এই সমস্যার চমৎকার সমাধান করে: (x * 2 for x in stream)। এটি মেমোরিতে সম্পূর্ণ ডেটা জমা না রেখে একটি ইটারেটর প্রদান করে যা প্রতিবার next() ডাকার সময় ১ টি করে আইটেম সরবরাহ করে। জটিল কাজের জন্য সাধারণ ফাংশনে yield কিওয়ার্ড ব্যবহার করে কোডের অবস্থান সাময়িক স্থগিত রাখা এবং পরবর্তীতে সেখান থেকেই পুনরায় কাজ শুরু করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Python list comprehension, dictionary mapping, and lazy generator iteration.',
        bn: 'লিস্ট কম্প্রিহেনশন, ডিকশনারি ম্যাপিং এবং লেজি জেনারেটর ইটারেশনের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Python Comprehensions and Lazy Generator Iteration

// 1. Simulating List Comprehension: [x * 2 for x in numbers if x % 2 == 0]
const rawNumbers = [1, 2, 3, 4, 5, 6];
const evenDoubled = rawNumbers
  .filter((x) => x % 2 === 0)
  .map((x) => x * 2);
console.log('List Comprehension Result:', evenDoubled); // [4, 8, 12]

// 2. Simulating Dict Comprehension: {str(k): k ** 2 for k in range(1, 4)}
const squareMap: Record<string, number> = {};
[1, 2, 3].forEach((k) => {
  squareMap[String(k)] = k * k;
});
console.log('Dict Comprehension Result:', squareMap); // {"1": 1, "2": 4, "3": 9}

// 3. Simulating Lazy Generator with yield: (x * 10 for x in range(3))
function* numberStreamGenerator() {
  yield 10; // Yields 1 item
  yield 20; // Yields 1 item
  yield 30; // Yields 1 item
}

const stream = numberStreamGenerator();
console.log('Stream Item 1:', stream.next().value); // 10
console.log('Stream Item 2:', stream.next().value); // 20
console.log('Stream Item 3:', stream.next().value); // 30
console.log('Stream Finished:', stream.next().done); // true`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'List Comprehension',
          def: {
            en: 'Declarative syntax construct generating a new list by transforming and filtering elements from an iterable.',
            bn: 'সংক্ষিপ্ত সিনট্যাক্স যার মাধ্যমে কোনো ইটারেবল ডেটা ফিল্টার ও রূপান্তর করে সরাসরি নতুন লিস্ট তৈরি করা হয়।'
          }
        },
        {
          term: 'Dict Comprehension',
          def: {
            en: 'Expression enclosed in curly braces ({key: val for item in iterable}) generating a newly mapped dictionary.',
            bn: 'সেকেন্ড ব্র্যাকেটে লেখা এক্সপ্রেশন যা ইটারেবল থেকে সরাসরি কি-ভ্যালু সমন্বিত নতুন ডিকশনারি গঠন করে।'
          }
        },
        {
          term: 'Generator Expression',
          def: {
            en: 'Parenthesized comprehension producing a lazy iterator calculating values on demand without buffering.',
            bn: 'প্রথম বন্ধনীতে লেখা বিশেষ কম্প্রিহেনশন যা মেমোরিতে পুরো ডেটা জমা না রেখে প্রয়োজনে একটি করে মান তৈরি করে।'
          }
        },
        {
          term: 'Yield Keyword',
          def: {
            en: 'Statement pausing a generator function, returning a value to the caller, and saving local execution state.',
            bn: 'বিশেষ কিওয়ার্ড যা ফাংশনের কাজ সাময়িক থামিয়ে মান রিটার্ন করে এবং ভেতরের মেমোরি স্টেট সংরক্ষণ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'comprehension-parentheses-generator-ex1',
      kind: 'mcq',
      topic: 'comprehension-brackets-vs-parentheses',
      question: {
        en: 'What data structure is produced by the expression gen = (x * 2 for x in range(10)) in Python?',
        bn: 'পাইথনে gen = (x * 2 for x in range(10)) এক্সপ্রেশনটির মাধ্যমে কোন ধরনের ডেটা স্ট্রাকচার তৈরি হয়?'
      },
      options: [
        {
          en: 'A generator object producing values lazily on demand, NOT a tuple',
          bn: 'একটি জেনারেটর অবজেক্ট যা প্রয়োজনের সময় একটি করে মান সরবরাহ করে, কোনো টিউপল নয়'
        },
        {
          en: 'An immutable tuple containing 10 numbers',
          bn: '১০ টি সংখ্যা সমন্বিত একটি অপরিবর্তনীয় টিউপল'
        },
        {
          en: 'A standard list buffered in memory',
          bn: 'মেমোরিতে সংরক্ষিত একটি সাধারণ লিস্ট'
        },
        {
          en: 'A fatal syntax parse error',
          bn: 'একটি মারাত্মক সিনট্যাক্স পার্স এরর'
        }
      ],
      answer: 0,
      hint: {
        en: 'Parentheses around a comprehension produce a lazy generator expression, not a tuple.',
        bn: 'কম্প্রিহেনশনের চারপাশে প্রথম বন্ধনী দিলে টিউপল না হয়ে লেজি জেনারেটর তৈরি হয়।'
      },
      explanation: {
        en: 'Parentheses denote generator expressions in Python; creating a tuple requires tuple(x for x in ...).',
        bn: 'প্রথম বন্ধনী দিয়ে জেনারেটর তৈরি হয়; টিউপল তৈরি করতে স্পষ্ট করে tuple() লিখতে হয়।'
      }
    },
    {
      id: 'set-comprehension-deduplication-ex2',
      kind: 'mcq',
      topic: 'set-comprehension-deduplication',
      question: {
        en: 'Given nums = [1, 2, 2, 3, 3, 3], what does the set comprehension {x for x in nums} produce?',
        bn: 'nums = [1, 2, 2, 3, 3, 3] দেওয়া থাকলে সেট কম্প্রিহেনশন {x for x in nums} এর আউটপুট কী হবে?'
      },
      options: [
        { en: '{1, 2, 3}, because sets automatically eliminate duplicate values', bn: '{1, 2, 3}, কারণ সেট স্বয়ংক্রিয়ভাবে ডুপ্লিকেট মানগুলো বাদ দেয়' },
        { en: '{1, 2, 2, 3, 3, 3}, preserving all duplicates', bn: '{1, 2, 2, 3, 3, 3}, সব ডুপ্লিকেট মান সংরক্ষণ করে' },
        { en: 'A dictionary with 6 keys', bn: '৬ টি কি সমন্বিত একটি ডিকশনারি' },
        { en: 'None', bn: 'None' }
      ],
      answer: 0,
      hint: {
        en: 'Sets enforce mathematical uniqueness, discarding duplicate elements automatically.',
        bn: 'সেট গাণিতিক নিয়মে কেবল ইউনিক উপাদান রাখে, ডুপ্লিকেট মান বাতিল করে।'
      },
      explanation: {
        en: 'Curly braces without colons construct sets, collapsing duplicated elements into unique items.',
        bn: 'কোলন ছাড়া সেকেন্ড ব্র্যাকেট সেট তৈরি করে এবং একই উপাদান একাধিকবার থাকলে তা বাদ দেয়।'
      }
    },
    {
      id: 'dict-comprehension-syntax-ex3',
      kind: 'mcq',
      topic: 'dict-comprehension-colon-syntax',
      question: {
        en: 'Which syntax properly constructs a dictionary mapping numbers 1 through 3 to their cubes in Python?',
        bn: 'পাইথনে ১ থেকে ৩ পর্যন্ত সংখ্যা এবং তাদের ঘনফল দিয়ে ডিকশনারি তৈরি করার সঠিক সিনট্যাক্স কোনটি?'
      },
      options: [
        { en: '{x: x**3 for x in [1, 2, 3]}', bn: '{x: x**3 for x in [1, 2, 3]}' },
        { en: '[x -> x**3 for x in [1, 2, 3]]', bn: '[x -> x**3 for x in [1, 2, 3]]' },
        { en: 'dict(x = x**3 for x in [1, 2, 3])', bn: 'dict(x = x**3 for x in [1, 2, 3])' },
        { en: 'make_dict([1, 2, 3], cubes)', bn: 'make_dict([1, 2, 3], cubes)' }
      ],
      answer: 0,
      hint: {
        en: 'Dictionary comprehensions require a colon between key and value expressions inside curly braces.',
        bn: 'ডিকশনারি কম্প্রিহেনশনে সেকেন্ড ব্র্যাকেটের ভেতর কি এবং ভ্যালুর মাঝে কোলন চিহ্ন দিতে হয়।'
      },
      explanation: {
        en: '{key: val for x in iterable} is the canonical dictionary comprehension syntax.',
        bn: '{key: val for x in iterable} হলো পাইথনের প্রাতিষ্ঠানিক ডিকশনারি কম্প্রিহেনশন সিনট্যাক্স।'
      }
    },
    {
      id: 'matrix-flattening-comprehension-ex4',
      kind: 'mcq',
      topic: 'nested-comprehension-clause-order',
      question: {
        en: 'What is the correct clause order to flatten matrix = [[1, 2], [3, 4]] into [1, 2, 3, 4] using a list comprehension?',
        bn: 'লিস্ট কম্প্রিহেনশন ব্যবহার করে matrix = [[1, 2], [3, 4]] কে [1, 2, 3, 4] এ রূপান্তর করার সঠিক ক্রম কোনটি?'
      },
      options: [
        {
          en: '[x for row in matrix for x in row], matching the order of nested for-loops',
          bn: '[x for row in matrix for x in row], যা সাধারণ নেস্টেড লুপের লেখার ক্রম অনুসরণ করে'
        },
        {
          en: '[x for x in row for row in matrix]',
          bn: '[x for x in row for row in matrix]'
        },
        {
          en: '[matrix for row in x]',
          bn: '[matrix for row in x]'
        },
        {
          en: 'flatten(matrix) without comprehension syntax',
          bn: 'কম্প্রিহেনশন ছাড়া flatten(matrix)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Clauses in comprehensions follow the exact same order as regular nested loops: outer loop first, inner loop second.',
        bn: 'কম্প্রিহেনশনে ক্লজগুলোর ক্রম সাধারণ লুপের মতোই হয়: আগে বাইরের লুপ, পরে ভেতরের লুপ।'
      },
      explanation: {
        en: 'Comprehension clauses read left-to-right matching standard nested loop statements: "for row in matrix" followed by "for x in row".',
        bn: 'বাম থেকে ডানে পড়ার ক্ষেত্রে সাধারণ লুপের মতোই প্রথমে "for row in matrix" এবং পরে "for x in row" বসে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-comprehensions-and-the-comp',
    title: {
      en: 'Python Comprehensions and Generators Quiz',
      bn: 'পাইথন কম্প্রিহেনশন এবং জেনারেটর কুইজ'
    },
    questions: [
      {
        id: 'quiz-generator-exhaustion-behavior',
        kind: 'mcq',
        topic: 'generator-exhaustion-stopiteration',
        question: {
          en: 'What occurs when next() is called on a Python generator that has already yielded all of its available elements?',
          bn: 'সব উপাদান দেওয়া শেষ হয়ে যাওয়ার পর কোনো পাইথন জেনারেটরে পুনরায় next() কল করলে কী ঘটে?'
        },
        options: [
          {
            en: 'Python raises a StopIteration exception, which for-loops automatically catch to terminate iteration',
            bn: 'পাইথন একটি StopIteration এক্সেপশন ছুড়ে দেয়, যা সাধারণ for লুপ স্বয়ংক্রিয়ভাবে গ্রহণ করে লুপ সমাপ্ত করে'
          },
          {
            en: 'The generator restarts from the beginning automatically',
            bn: 'জেনারেটরটি নিজে থেকেই আবার শুরু থেকে চলা শুরু করে'
          },
          {
            en: 'It returns integer 0 endlessly',
            bn: 'এটি অবিরত ০ রিটার্ন করতে থাকে'
          },
          {
            en: 'It deletes the generator function from disk',
            bn: 'এটি ডিস্ক থেকে জেনারেটর ফাংশন মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Generators cannot be rewound; once exhausted, they raise StopIteration.',
          bn: 'জেনারেটরে ডেটা শেষ হলে এটি StopIteration এক্সেপশন ছুড়ে দেয়।'
        },
        explanation: {
          en: 'Generators are single-pass iterators. Exhausting elements triggers StopIteration to signal completion.',
          bn: 'জেনারেটর কেবল একবারই চলে; সব আইটেম শেষ হলে StopIteration এর মাধ্যমে সমাপ্তি নিশ্চিত করে।'
        }
      },
      {
        id: 'quiz-generator-memory-constant-footprint',
        kind: 'mcq',
        topic: 'generator-constant-memory-footprint',
        question: {
          en: 'Why does a generator expression processing 1000000 integers consume virtually identical memory to one processing 10 integers?',
          bn: '১০০০০০০ সংখ্যার একটি জেনারেটর এক্সপ্রেশন কেন ১০ টি সংখ্যার ১টি জেনারেটরের সমান মেমোরি খরচ করে?'
        },
        options: [
          {
            en: 'Generators do not buffer elements in memory; they calculate 1 item at a time on the fly, maintaining an O(1) constant memory footprint',
            bn: 'জেনারেটর মেমোরিতে কোনো ডেটা জমা রাখে না; এটি প্রতিবার কেবল ১ টি মান তৈরি করে সরবরাহ করে, ফলে মেমোরি খরচ সর্বদা O(1) থাকে'
          },
          {
            en: 'Because CPython compresses numbers using GZIP',
            bn: 'কারণ CPython জিজিপ দিয়ে সংখ্যাগুলোকে কম্প্রেস করে'
          },
          {
            en: 'Generators store numbers on the internet instead of RAM',
            bn: 'জেনারেটর র্যামের বদলে ইন্টারনেটে সংখ্যাগুলো জমা রাখে'
          },
          {
            en: 'Memory consumption is limited by the operating system kernel',
            bn: 'মেমোরি খরচ অপারেটিং সিস্টেম কার্নেল দ্বারা নির্ধারিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Generators yield values on demand without storing historical elements.',
          bn: 'জেনারেটর কোনো উপাদান ধরে রাখে না, চাহিবামাত্র একটি করে তৈরি করে দেয়।'
        },
        explanation: {
          en: 'Because values are computed lazily, memory consumption remains constant regardless of stream length.',
          bn: 'মানগুলো তাৎক্ষণিকভাবে তৈরি হওয়ায় উপাদানের সংখ্যা যাই হোক না কেন মেমোরি খরচ বাড়ে না।'
        }
      },
      {
        id: 'quiz-list-comprehension-scope-isolation',
        kind: 'mcq',
        topic: 'comprehension-loop-variable-leakage',
        question: {
          en: 'In Python 3, does the loop variable inside a list comprehension (e.g. "x" in [x for x in range(5)]) leak into the outer scope?',
          bn: 'পাইথন ৩ এ লিস্ট কম্প্রিহেনশনের ভেতরের লুপ ভেরিয়েবলটি (যেমন [x for x in range(5)] এর "x") কি বাইরের স্কোপে ছড়িয়ে পড়ে?'
        },
        options: [
          {
            en: 'No, Python 3 executes comprehensions inside dedicated function scopes, keeping loop variables completely isolated',
            bn: 'না, পাইথন ৩ কম্প্রিহেনশনকে একটি নিজস্ব ফাংশন স্কোপে চালায়, ফলে ভেতরের ভেরিয়েবল বাইরে আসে না'
          },
          {
            en: 'Yes, "x" overwrites any variable named "x" in the outer module',
            bn: 'হ্যাঁ, "x" বাইরের স্কোপে থাকা একই নামের ভেরিয়েবলকে বদলে দেয়'
          },
          {
            en: 'Only if the list contains negative numbers',
            bn: 'কেবল যদি লিস্টে ঋণাত্মক সংখ্যা থাকে'
          },
          {
            en: 'Only on Windows operating systems',
            bn: 'কেবল উইন্ডোজ অপারেটিং সিস্টেমে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Python 3 fixed the Python 2 bug where comprehension variables leaked into surrounding scopes.',
          bn: 'পাইথন ৩ এ পাইথন ২ এর পুরানো সমস্যা দূর করা হয়েছে যাতে কম্প্রিহেনশনের ভেরিয়েবল বাইরের স্কোপে না ছড়ায়।'
        },
        explanation: {
          en: 'Python 3 scopes comprehensions like mini-functions, preventing loop variables from polluting enclosing namespaces.',
          bn: 'পাইথন ৩ কম্প্রিহেনশনকে আলাদা স্কোপে কার্যকর করায় লুপ ভেরিয়েবল সুরক্ষিত থাকে।'
        }
      },
      {
        id: 'quiz-yield-from-syntax-benefit',
        kind: 'mcq',
        topic: 'yield-from-subgenerator-delegation',
        question: {
          en: 'What capability does the "yield from" syntax provide when working with nested generators in Python?',
          bn: 'পাইথনে নেস্টেড জেনারেটরের সাথে কাজ করার সময় "yield from" সিনট্যাক্সটি কোন সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'It delegates iteration directly to a sub-generator or iterable, transparently piping values and bidirectional send() messages',
            bn: 'এটি সরাসরি কোনো সাব-জেনারেটর বা ইটারেবলের ওপর কাজ অর্পণ করে, ফলে স্বয়ংক্রিয়ভাবে মান এবং দ্বিমুখী send() মেসেজ আদান-প্রদান করা যায়'
          },
          {
            en: 'It deletes the outer generator function from memory',
            bn: 'এটি মেমোরি থেকে বাইরের জেনারেটর মুছে ফেলে'
          },
          {
            en: 'It forces the generator to run in a background operating system thread',
            bn: 'এটি জেনারেটরকে ব্যাকগ্রাউন্ড থ্রেডে চলতে বাধ্য করে'
          },
          {
            en: 'It converts the generator into a SQLite database',
            bn: 'এটি জেনারেটরটিকে একটি এসকিউলাইট ডেটাবেসে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'yield from delegates to another iterable, replacing manual "for item in subgen: yield item" loops.',
          bn: 'yield from সাব-জেনারেটরের সমস্ত উপাদান সরাসরি বাইরে পাঠানোর কাজটি সহজ করে।'
        },
        explanation: {
          en: 'yield from establishes a direct transparent channel between the caller and the sub-generator.',
          bn: 'yield from মূল কলারের সাথে সাব-জেনারেটরের সরাসরি সংযোগ স্থাপন করে ম্যানুয়াল লুপের ঝামেলা কমায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'decorators-and-the-at',
    title: {
      en: 'First-Class Functions, Closures & Decorators',
      bn: 'ফার্স্ট-ক্লাস ফাংশন, ক্লোজার এবং ডেকোরেটর'
    }
  }
};
