import type { Lesson } from '../../../lib/types';

export const ArraysThatDoEverythingLesson: Lesson = {
  slug: 'arrays-that-do-everything',
  tech: 'php',
  title: {
    en: 'Arrays, Hash Maps & Array Transformation Functions',
    bn: 'অ্যারে, হ্যাশ ম্যাপ এবং অ্যারে ট্রান্সফরমেশন ফাংশন'
  },
  summary: {
    en: 'Comprehensive mastery of PHP arrays: indexed lists, associative hash maps, multidimensional matrices, array destructuring, unpacking (...$spread), and functional pipeline functions including array_map, array_filter, array_reduce, and usort.',
    bn: 'পিএইচপি অ্যারের পূর্ণাঙ্গ গাইড: ইনডেক্সড তালিকা, অ্যাসোসিয়েটিভ হ্যাশ ম্যাপ, বহুমাত্রিক ম্যাট্রিক্স, অ্যারে ডিস্ট্রাকচারিং, স্প্রেড অপারেটর (...), এবং array_map, array_filter, array_reduce ও usort এর মতো আধুনিক ফাংশনাল পাইপলাইন।'
  },
  minutes: 34,
  blocks: [
    {
      type: 'heading',
      id: 'array-architecture-heading',
      text: {
        en: 'The Universal Data Structure: Indexed Lists and Associative Hash Maps',
        bn: 'সার্বজনীন ডেটা স্ট্রাকচার: ইনডেক্সড তালিকা এবং অ্যাসোসিয়েটিভ হ্যাশ ম্যাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In PHP, an array is internally implemented as an ordered hash map (Zend HashTable). This single data structure fulfills the duties of numeric lists, key-value dictionaries, stacks, and queues. Indexed arrays use integer offsets starting at index 0, while associative arrays map descriptive string keys to values using the double-arrow operator (=>). Arrays maintain insertion order regardless of whether their keys are strings or numbers, and modern PHP supports unpacking with the spread operator (...) and array destructuring syntax.',
        bn: 'পিএইচপিতে অ্যারে মূলত একটি সুশৃঙ্খল হ্যাশ ম্যাপ (Zend HashTable) হিসেবে পরিচালিত হয়। এই একটি একক ডেটা স্ট্রাকচার দিয়েই ইনডেক্সড তালিকা, কি-ভ্যালু ডিকশনারি, স্ট্যাক এবং কিউ এর সব কাজ করা যায়। ইনডেক্সড অ্যারে ০ থেকে শুরু হওয়া পূর্ণসংখ্যা সূচক ব্যবহার করে, আর অ্যাসোসিয়েটিভ অ্যারে তীর চিহ্ন (=>) দিয়ে অর্থপূর্ণ স্ট্রিং কি এর সাথে ডেটা যুক্ত করে। কি স্ট্রিং বা সংখ্যা যাই হোক না কেন, পিএইচপি অ্যারে উপাদানের ক্রম সর্বদা ঠিক রাখে। আধুনিক পিএইচপিতে স্প্রেড অপারেটর (...) এবং ডিস্ট্রাকচারিং সিনট্যাক্স পুরোপুরি সমর্থিত।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Anatomy of PHP Zend HashTable representing both numeric indexed lists and associative key-value maps.',
        bn: 'চিত্র ১: পিএইচপি জেন্ড হ্যাশ টেবিলের অভ্যন্তরীণ রূপ যা ইনডেক্সড তালিকা এবং কি-ভ্যালু হ্যাশ ম্যাপ উভয় রূপেই কাজ করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PHP ARRAY ARCHITECTURE: INDEXED LIST vs ASSOCIATIVE HASH MAP</text>

  <!-- Left: Indexed Array -->
  <g transform="translate(30, 60)">
    <rect width="365" height="245" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="365" height="32" rx="8" fill="#0284c7" />
    <text x="182" y="21" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Indexed List: $colors = ['red', 'green', 'blue']</text>

    <!-- Slot 0 -->
    <rect x="15" y="50" width="335" height="50" rx="6" fill="#0f172a" stroke="#38bdf8" />
    <text x="30" y="80" fill="#38bdf8" font-size="14" font-family="monospace" font-weight="bold">[0]</text>
    <text x="100" y="80" fill="#f8fafc" font-size="13" font-family="monospace">"red"</text>
    <text x="260" y="80" fill="#94a3b8" font-size="10" font-family="sans-serif">Offset 0</text>

    <!-- Slot 1 -->
    <rect x="15" y="110" width="335" height="50" rx="6" fill="#0f172a" stroke="#38bdf8" />
    <text x="30" y="140" fill="#38bdf8" font-size="14" font-family="monospace" font-weight="bold">[1]</text>
    <text x="100" y="140" fill="#f8fafc" font-size="13" font-family="monospace">"green"</text>
    <text x="260" y="140" fill="#94a3b8" font-size="10" font-family="sans-serif">Offset 1</text>

    <!-- Slot 2 -->
    <rect x="15" y="170" width="335" height="50" rx="6" fill="#0f172a" stroke="#38bdf8" />
    <text x="30" y="200" fill="#38bdf8" font-size="14" font-family="monospace" font-weight="bold">[2]</text>
    <text x="100" y="200" fill="#f8fafc" font-size="13" font-family="monospace">"blue"</text>
    <text x="260" y="200" fill="#94a3b8" font-size="10" font-family="sans-serif">Offset 2</text>
  </g>

  <!-- Right: Associative Map -->
  <g transform="translate(445, 60)">
    <rect width="365" height="245" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="365" height="32" rx="8" fill="#7e22ce" />
    <text x="182" y="21" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Associative Map: $user = ['name' =&gt; 'Alice', 'role' =&gt; 'admin']</text>

    <!-- Key: name -->
    <rect x="15" y="50" width="335" height="50" rx="6" fill="#0f172a" stroke="#a855f7" />
    <text x="25" y="80" fill="#c084fc" font-size="12" font-family="monospace" font-weight="bold">'name'</text>
    <text x="90" y="80" fill="#f43f5e" font-size="12" font-family="monospace">=&gt;</text>
    <text x="120" y="80" fill="#f8fafc" font-size="12" font-family="monospace">"Alice"</text>
    <text x="240" y="80" fill="#94a3b8" font-size="10" font-family="sans-serif">Hash lookup</text>

    <!-- Key: role -->
    <rect x="15" y="110" width="335" height="50" rx="6" fill="#0f172a" stroke="#a855f7" />
    <text x="25" y="140" fill="#c084fc" font-size="12" font-family="monospace" font-weight="bold">'role'</text>
    <text x="90" y="140" fill="#f43f5e" font-size="12" font-family="monospace">=&gt;</text>
    <text x="120" y="140" fill="#f8fafc" font-size="12" font-family="monospace">"admin"</text>
    <text x="240" y="140" fill="#94a3b8" font-size="10" font-family="sans-serif">Hash lookup</text>

    <!-- Key: score -->
    <rect x="15" y="170" width="335" height="50" rx="6" fill="#0f172a" stroke="#a855f7" />
    <text x="25" y="200" fill="#c084fc" font-size="12" font-family="monospace" font-weight="bold">'score'</text>
    <text x="90" y="200" fill="#f43f5e" font-size="12" font-family="monospace">=&gt;</text>
    <text x="120" y="200" fill="#f8fafc" font-size="12" font-family="monospace">95</text>
    <text x="240" y="200" fill="#94a3b8" font-size="10" font-family="sans-serif">Numeric val</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'functional-pipeline-heading',
      text: {
        en: 'Transformation Pipelines: array_filter, array_map, array_reduce, and usort',
        bn: 'ট্রান্সফরমেশন পাইপলাইন: array_filter, array_map, array_reduce এবং usort'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Writing procedural foreach loops often introduces mutable temporary states. PHP provides robust higher-order functions to process collections cleanly. The array_filter utility extracts elements matching a boolean predicate. Next, array_map transforms each entry into a new representation. Finally, array_reduce aggregates a collection down to a single accumulated scalar value. When sorting associative structures by custom criteria, usort pairs seamlessly with the spaceship operator (<=>).',
        bn: 'ম্যানুয়াল foreach লুপ লিখে তথ্য পরিবর্তন করলে কোড জটিল ও ত্রুটিপ্রবণ হয়ে পড়ে। পিএইচপিতে কালেকশন প্রক্রিয়াকরণের জন্য শক্তিশালী হায়ার-অর্ডার ইউটিলিটি রয়েছে। array_filter ফাংশন শর্তানুসারে প্রয়োজনীয় উপাদানগুলো ছেঁকে আলাদা করে। এরপর array_map প্রতিটি মানকে রূপান্তর করে নতুন কাঠামো গঠন করে। সবশেষে array_reduce সম্পূর্ণ তালিকা থেকে একটি একক সমষ্টিক মান তৈরি করে। জটিল অবজেক্ট সর্ট করতে usort ফাংশনের সাথে স্পেসশিপ অপারেটর (<=>) সবচেয়ে কার্যকর।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of PHP array functional pipeline: filter, map, and reduce on order records.',
        bn: 'পিএইচপি অ্যারে ফাংশনাল পাইপলাইনের (filter, map, reduce) সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of PHP array pipeline functions in TypeScript
interface Order {
  id: number;
  product: string;
  price: number;
  status: 'completed' | 'pending' | 'cancelled';
}

// 4 orders in dataset
const orders: Order[] = [
  { id: 101, product: 'Book', price: 40, status: 'completed' },
  { id: 102, product: 'Keyboard', price: 80, status: 'completed' },
  { id: 103, product: 'Desk Lamp', price: 50, status: 'cancelled' },
  { id: 104, product: 'Headset', price: 180, status: 'completed' }
];

// 1. Simulating array_filter($orders, fn($o) => $o['status'] === 'completed')
const completedOrders = orders.filter((order) => order.status === 'completed');

// 2. Simulating array_map(fn($o) => $o['price'], $completed)
const completedPrices = completedOrders.map((order) => order.price);

// 3. Simulating array_reduce($prices, fn($carry, $p) => $carry + $p, 0)
const totalRevenue = completedPrices.reduce((carry, price) => carry + price, 0);

console.log('Total Orders Count:', orders.length); // 4
console.log('Completed Orders Count:', completedOrders.length); // 3
console.log('Total Revenue Calculated:', totalRevenue); // 300`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Indexed Array',
          def: {
            en: 'Linear list where elements are assigned contiguous numeric index keys automatically starting at index 0.',
            bn: 'ধারাবাহিক তালিকা যেখানে উপাদানগুলো স্বয়ংক্রিয়ভাবে ০ থেকে শুরু হওয়া পূর্ণসংখ্যা ইনডেক্স দ্বারা চিহ্নিত হয়।'
          }
        },
        {
          term: 'Associative Array',
          def: {
            en: 'Hash map storing value elements mapped to custom string keys via key-value associations.',
            bn: 'হ্যাশ ম্যাপ ডেটা স্ট্রাকচার যেখানে প্রতিটি মান একটি নির্দিষ্ট স্ট্রিং কি এর সাথে যুক্ত থাকে।'
          }
        },
        {
          term: 'Array Destructuring',
          def: {
            en: 'Syntax unpackaging array items directly into discrete local variables using square bracket notation.',
            bn: 'সিনট্যাক্স যার মাধ্যমে সরাসরি স্কয়ার ব্র্যাকেট ব্যবহার করে অ্যারের মানগুলো আলাদা লোকাল ভেরিয়েবলে গ্রহণ করা যায়।'
          }
        },
        {
          term: 'Higher-Order Functions',
          def: {
            en: 'Functional utilities (array_map, array_filter, array_reduce) accepting callback functions as arguments to process data structures.',
            bn: 'কার্যকরী ফাংশনসমূহ (array_map, array_filter, array_reduce) যা কলব্যাক ফাংশনকে আর্গুমেন্ট হিসেবে গ্রহণ করে তথ্য প্রক্রিয়াকরণ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'array-strict-in-array-search-ex1',
      kind: 'mcq',
      topic: 'in-array-strict-comparison',
      question: {
        en: 'Why is it critical to pass true as the third argument to in_array($needle, $haystack, true) in PHP?',
        bn: 'পিএইচপিতে in_array($needle, $haystack, true) ফাংশনে তৃতীয় আর্গুমেন্ট হিসেবে true দেওয়া কেন অত্যন্ত জরুরি?'
      },
      options: [
        {
          en: 'It enables strict type checking (===), preventing dangerous type coercion vulnerabilities where strings match 0 or false',
          bn: 'এটি কঠোর সমতা (===) চালু করে, যার ফলে স্ট্রিং মান ০ বা false এর সাথে ভুলভাবে মিলে যাওয়ার মারাত্মক ত্রুটি রোধ হয়'
        },
        {
          en: 'It encrypts the entire array with an SSL certificate',
          bn: 'এটি সম্পূর্ণ অ্যারেকে SSL সার্টিফিকেট দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'It doubles the execution speed of the hardware processor',
          bn: 'এটি কম্পিউটারের প্রসেসরের কাজের গতি দ্বিগুণ করে দেয়'
        },
        {
          en: 'Without true, PHP refuses to run on servers',
          bn: 'true না দিলে পিএইচপি সার্ভারে চলতে সম্পূর্ণ অস্বীকার করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'By default, in_array uses loose == equality, which matches any non-numeric string to integer 0.',
        bn: 'ডিফল্টভাবে in_array শিথিল সমতা (==) ব্যবহার করে, ফলে যেকোনো টেক্সট স্ট্রিং সংখ্যা ০ এর সমান হয়ে যেতে পারে।'
      },
      explanation: {
        en: 'Strict mode enforces identity checks (===), avoiding dangerous false positives in authentication and role checks.',
        bn: 'কঠোর মোড (true) নিশ্চিত করে যে মান এবং টাইপ উভয়ই অবিকল মিলেছে কি না।'
      }
    },
    {
      id: 'array-destructuring-syntax-ex2',
      kind: 'mcq',
      topic: 'array-destructuring-assignment',
      question: {
        en: 'Given $coordinates = [10, 20];, how do you unpack these into $x and $y using array destructuring?',
        bn: '$coordinates = [10, 20]; অ্যারে থেকে ডিস্ট্রাকচারিং ব্যবহার করে কীভাবে মান দুটিকে $x এবং $y ভেরিয়েবলে নেওয়া যাবে?'
      },
      options: [
        { en: '[$x, $y] = $coordinates;', bn: '[$x, $y] = $coordinates;' },
        { en: 'extract_all($coordinates, $x, $y);', bn: 'extract_all($coordinates, $x, $y);' },
        { en: '$x -> $y = $coordinates;', bn: '$x -> $y = $coordinates;' },
        { en: 'unpack($coordinates, [$x, $y]);', bn: 'unpack($coordinates, [$x, $y]);' }
      ],
      answer: 0,
      hint: {
        en: 'Square bracket destructuring assigns elements by positional index in PHP 7.1+.',
        bn: 'স্কয়ার ব্র্যাকেট ডিস্ট্রাকচারিং ক্রম অনুসারে মানগুলো সংশ্লিষ্ট ভেরিয়েবলে বসিয়ে দেয়।'
      },
      explanation: {
        en: '[$x, $y] = $coordinates assigns index 0 to $x and index 1 to $y cleanly.',
        bn: '[$x, $y] = $coordinates সিনট্যাক্স ইনডেক্স ০ এর মান $x এ এবং ইনডেক্স ১ এর মান $y এ সংরক্ষণ করে।'
      }
    },
    {
      id: 'array-map-vs-foreach-transformation-ex3',
      kind: 'mcq',
      topic: 'array-map-semantics',
      question: {
        en: 'What does array_map(fn($n) => $n * 2, [1, 2, 3]) return?',
        bn: 'array_map(fn($n) => $n * 2, [1, 2, 3]) এক্সপ্রেশনটির রিটার্ন মান কী হবে?'
      },
      options: [
        { en: 'A new array [2, 4, 6] containing doubled numbers without modifying the original input array', bn: 'মূল অ্যারে পরিবর্তন না করে দ্বিগুণ মানযুক্ত একটি নতুন অ্যারে [2, 4, 6]' },
        { en: 'The single integer number 12', bn: 'একটি একক পূর্ণসংখ্যা 12' },
        { en: 'A boolean value of true', bn: 'বুলিয়ান মান true' },
        { en: 'An empty array []', bn: 'একটি ফাঁকা অ্যারে []' }
      ],
      answer: 0,
      hint: {
        en: 'array_map applies the transformer callback to every element and returns a fresh array.',
        bn: 'array_map প্রতিটি উপাদানের ওপর রূপান্তর ফাংশন চালিয়ে একটি সম্পূর্ণ নতুন অ্যারে তৈরি করে।'
      },
      explanation: {
        en: 'array_map is an immutable transformer that produces an array where each item is doubled.',
        bn: 'array_map প্রতিটি উপাদানকে দ্বিগুণ করে নতুন অ্যারে ফেরত দেয় এবং মূল অ্যারে অপরিবর্তিত থাকে।'
      }
    },
    {
      id: 'spread-operator-unpacking-ex4',
      kind: 'mcq',
      topic: 'array-spread-operator',
      question: {
        en: 'What is the evaluated output of [...[1, 2], ...[3, 4]] in modern PHP?',
        bn: 'আধুনিক পিএইচপিতে [...[1, 2], ...[3, 4]] এক্সপ্রেশনটির ফলাফল কী হবে?'
      },
      options: [
        { en: 'A merged indexed array: [1, 2, 3, 4]', bn: 'একটি সংযুক্ত ইনডেক্সড অ্যারে: [1, 2, 3, 4]' },
        { en: 'A nested two-dimensional array: [[1, 2], [3, 4]]', bn: 'দ্বিমাত্রিক নেস্টেড অ্যারে: [[1, 2], [3, 4]]' },
        { en: 'A single integer sum of 10', bn: 'যোগফল হিসেবে একটি একক সংখ্যা 10' },
        { en: 'A fatal compiler error', bn: 'একটি মারাত্মক কম্পাইলার এরর' }
      ],
      answer: 0,
      hint: {
        en: 'The spread operator (...) unpacks array elements in-place into the outer array literal.',
        bn: 'স্প্রেড অপারেটর (...) উপাদানগুলোকে নতুন অ্যারির ভেতরে ক্রমানুসারে বিস্তার করে দেয়।'
      },
      explanation: {
        en: 'Array unpacking expands elements sequentially, merging both lists into [1, 2, 3, 4].',
        bn: 'অ্যারে আনপ্যাকিং দুটি তালিকার উপাদানগুলোকে পাশাপাশি সাজিয়ে [1, 2, 3, 4] তৈরি করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-arrays-that-do-everything',
    title: {
      en: 'PHP Arrays and Functional Transformation Quiz',
      bn: 'পিএইচপি অ্যারে এবং ফাংশনাল ট্রান্সফরমেশন কুইজ'
    },
    questions: [
      {
        id: 'quiz-array-filter-keys-preservation',
        kind: 'mcq',
        topic: 'array-filter-keys-behavior',
        question: {
          en: 'What happens to array keys when array_filter is executed on an indexed list?',
          bn: 'ইনডেক্সড তালিকার ওপর array_filter চালানো হলে অ্যারের ইনডেক্স কিগুলোর কী ঘটে?'
        },
        options: [
          {
            en: 'Original index keys are preserved, which can leave gaps; use array_values() to re-index sequentially from 0',
            bn: 'মূল ইনডেক্স কিগুলো সংরক্ষিত থাকে যার ফলে মাঝখানে ফাঁকা তৈরি হতে পারে; ০ থেকে পুনরায় সাজাতে array_values() ব্যবহার করতে হয়'
          },
          {
            en: 'Keys are always automatically renumbered from 0 to N without gaps',
            bn: 'কিগুলো সবসময় স্বয়ংক্রিয়ভাবে ০ থেকে N পর্যন্ত কোনো ফাঁকা ছাড়াই পুনরায় সাজানো হয়'
          },
          {
            en: 'All array keys are converted into random hexadecimal strings',
            bn: 'সমস্ত অ্যারে কি হেক্সাডেসিমেল স্ট্রিংয়ে পরিণত হয়'
          },
          {
            en: 'The array loses all keys and turns into a string',
            bn: 'অ্যারেটি সমস্ত কি হারিয়ে একটি সাধারণ স্ট্রিংয়ে রূপান্তরিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'array_filter preserves keys; to reset numeric indices, pass the filtered array to array_values().',
          bn: 'array_filter কি সংরক্ষণ করে; সংখ্যাসূচক ইনডেক্স ঠিক করতে array_values() প্রয়োজন হয়।'
        },
        explanation: {
          en: 'Because array_filter preserves keys, calling array_values($filtered) is required to restore continuous 0-indexed sequences.',
          bn: 'array_filter কি অপরিবর্তিত রাখে, তাই ইনডেক্স পুনরায় ০ থেকে ক্রমানুসারে সাজাতে array_values() ব্যবহার করা হয়।'
        }
      },
      {
        id: 'quiz-array-column-database-extraction',
        kind: 'mcq',
        topic: 'array-column-utility',
        question: {
          en: 'Why is array_column($users, "email", "id") immensely popular when processing database result sets?',
          bn: 'ডেটাবেসের ফলাফল প্রসেস করার ক্ষেত্রে array_column($users, "email", "id") কেন অত্যন্ত জনপ্রিয়?'
        },
        options: [
          {
            en: 'It extracts all "email" values into an associative dictionary where the array keys are mapped directly to user "id" values',
            bn: 'এটি সমস্ত "email" সংগ্রহ করে একটি নতুন ডিকশনারি বানায় যেখানে অ্যারের কি হিসেবে ইউজারের "id" বসে যায়'
          },
          {
            en: 'It deletes the email column from the physical database table',
            bn: 'এটি মূল ডেটাবেস টেবিল থেকে ইমেইল কলামটি সম্পূর্ণ মুছে ফেলে'
          },
          {
            en: 'It sends an email notification to every registered user',
            bn: 'এটি নিবন্ধিত প্রত্যেক ব্যবহারকারীর কাছে একটি ইমেইল বার্তা পাঠিয়ে দেয়'
          },
          {
            en: 'It counts the total number of letters in the word "email"',
            bn: 'এটি "email" শব্দটিতে মোট কতটি বর্ণ আছে তা গণনা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'array_column extracts a column of values, optionally keyed by another column.',
          bn: 'array_column একটি কলামের মান বের করে নেয় এবং অন্য একটি কলামকে কি হিসেবে ব্যবহার করার সুযোগ দেয়।'
        },
        explanation: {
          en: 'array_column effortlessly flattens tabular arrays and re-keys them by a designated primary key field.',
          bn: 'array_column সহজে বহুমাত্রিক ডেটা থেকে নির্দিষ্ট কলাম সংগ্রহ করে প্রাইমারি কি অনুসারে সাজায়।'
        }
      },
      {
        id: 'quiz-usort-spaceship-custom-order',
        kind: 'mcq',
        topic: 'usort-callback-comparison',
        question: {
          en: 'How do you sort an array of user objects descending by their "points" property using usort?',
          bn: 'usort এবং স্পেসশিপ অপারেটর দিয়ে ব্যবহারকারীদের অ্যারেকে তাদের "points" এর মান অনুসারে বড় থেকে ছোট (descending) ক্রমে কীভাবে সাজানো যায়?'
        },
        options: [
          { en: 'usort($users, fn($a, $b) => $b["points"] <=> $a["points"]);', bn: 'usort($users, fn($a, $b) => $b["points"] <=> $a["points"]);' },
          { en: 'usort($users, "points_down");', bn: 'usort($users, "points_down");' },
          { en: 'sort($users, points: false);', bn: 'sort($users, points: false);' },
          { en: 'reverse($users, "points");', bn: 'reverse($users, "points");' }
        ],
        answer: 0,
        hint: {
          en: 'Swapping $a and $b in the spaceship comparison ($b <=> $a) reverses sort order to descending.',
          bn: 'স্পেসশিপ অপারেটরে $b <=> $a লিখলে সর্টিংয়ের ক্রম উল্টে গিয়ে বড় থেকে ছোট হয়।'
        },
        explanation: {
          en: 'Evaluating $b["points"] <=> $a["points"] reverses standard comparison logic to sort in descending order.',
          bn: '$b["points"] <=> $a["points"] তুলনাটি বড় মানগুলোকে তালিকার প্রথমে নিয়ে এসে ডিসেন্ডিং সর্ট নিশ্চিত করে।'
        }
      },
      {
        id: 'quiz-array-reduce-accumulation',
        kind: 'mcq',
        topic: 'array-reduce-initial-value',
        question: {
          en: 'In array_reduce($items, $callback, $initial), what purpose does the $initial parameter serve?',
          bn: 'array_reduce($items, $callback, $initial) ফাংশনে $initial প্যারামিটারটির ভূমিকা কী?'
        },
        options: [
          {
            en: 'It establishes the starting value of the accumulator ($carry) before the first element is processed, preventing null errors on empty arrays',
            bn: 'এটি প্রথম উপাদান প্রসেস করার আগেই অ্যাকুমুলেটরের ($carry) প্রারম্ভিক মান নির্ধারণ করে, ফাঁকা অ্যারে হলেও নিরাপদ ফলাফল নিশ্চিত করে'
          },
          {
            en: 'It tells PHP how many CPU cores to allocate',
            bn: 'এটি পিএইচপিকে নির্ধারণ করে দেয় কতটি প্রসেসর কোর ব্যবহার করা হবে'
          },
          {
            en: 'It caps the maximum size of the resulting number',
            bn: 'এটি ফলাফলের সর্বোচ্চ আকারের সীমা নির্ধারণ করে'
          },
          {
            en: 'It has no purpose and is completely ignored by PHP',
            bn: 'এর কোনো কাজ নেই এবং পিএইচপি এটিকে সম্পূর্ণ উপেক্ষা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Initial value initializes the carry accumulator; for summation, you pass 0.',
          bn: 'Initial হলো অ্যাকুমুলেটরের শুরু মান; যোগফলের জন্য সাধারণত ০ দেওয়া হয়।'
        },
        explanation: {
          en: '$initial provides a stable starting state for the aggregator, which is returned directly if the input array is empty.',
          bn: '$initial অ্যাকুমুলেটরের শুরু মান নিশ্চিত করে, যার ফলে খালি অ্যারে থাকলেও সঠিক প্রাথমিক মান পাওয়া যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'forms-and-superglobals',
    title: {
      en: 'Form Handling, Superglobals & Input Validation',
      bn: 'ফর্ম হ্যান্ডলিং, সুপারগ্লোবাল এবং ইনপুট ভ্যালিডেশন'
    }
  }
};
