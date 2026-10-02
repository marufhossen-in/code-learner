import type { Lesson } from '../../../lib/types';

export const VarsAndTheArrayLesson: Lesson = {
  slug: 'vars-and-the-array',
  tech: 'lang-php',
  title: {
    en: 'Variables, Types, Operators & Complex Arrays',
    bn: 'ভেরিয়েবল, টাইপ, অপারেটর এবং জটিল অ্যারে'
  },
  summary: {
    en: 'Master PHP variables and data structures: explore scalar types, enforce declare(strict_types=1), utilize modern operators (??, ??=, <=>), manipulate associative hash tables, and perform array destructuring and functional transformations.',
    bn: 'পিএইচপি ভেরিয়েবল এবং ডেটা স্ট্রাকচার আয়ত্ত করুন: স্কেলার টাইপ, declare(strict_types=1) প্রয়োগ, আধুনিক অপারেটর (??, ??=, <=>), অ্যাসোসিয়েটিভ হ্যাশ টেবিল এবং অ্যারে ডিস্ট্রাকচারিং।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'variables-and-typing-heading',
      text: {
        en: 'Variable Anatomy, Type Coercion, and Strict Typing Declarations',
        bn: 'ভেরিয়েবলের গঠন, টাইপ কনভার্সন এবং কঠোর টাইপিং ঘোষণা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In PHP, all variable identifiers begin with a dollar sign ($) followed by a case-sensitive name. The language is dynamically typed, managing values inside internal zval structures containing a value, a type tag, and a reference counter (refcount). By default, PHP dynamically coerces types, treating string "42" as integer 42 during addition. Adding declare(strict_types=1); at the top of a file disables implicit type casting for function arguments and return types, triggering fatal TypeErrors on mismatches.',
        bn: 'পিএইচপিতে প্রতিটি ভেরিয়েবল ডলার চিহ্ন ($) দিয়ে শুরু হয় এবং এর নাম কেস-সেনসিটিভ হয়। ভাষাটি ডাইনামিক টাইপিং মেনে চলে এবং প্রতিটি মানকে একটি অভ্যন্তরীণ zval কাঠামোর ভেতর টাইপ ও রেফারেন্স কাউন্টার (refcount) সহ পরিচালনা করে। সাধারণ অবস্থায় পিএইচপি নিজে থেকেই ডেটা টাইপ রূপান্তর করে, যেমন যোগের সময় "42" স্ট্রিংকে সংখ্যা 42 ধরে নেয়। ফাইলের শুরুতে declare(strict_types=1); লিখলে এই শিথিলতা বন্ধ হয়ে যায় এবং অমিল দেখা দিলে সাথে সাথে ফ্যাটাল TypeError তৈরি হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Internal memory layout of a PHP zval container and the Zend HashTable powering associative arrays.',
        bn: 'চিত্র ১: পিএইচপি zval মেমোরি কন্টেইনার এবং অ্যাসোসিয়েটিভ অ্যারের অভ্যন্তরীণ জেন্ড হ্যাশ টেবিল কাঠামোর চিত্র।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PHP ZVAL VARIABLE &amp; ZEND HASHTABLE MEMORY STRUCTURE</text>

  <!-- Left: zval container -->
  <g transform="translate(35, 60)">
    <rect width="365" height="245" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="365" height="32" rx="8" fill="#0284c7" />
    <text x="182" y="21" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">zval Container: $price = 42;</text>

    <!-- Field 1: Value -->
    <rect x="15" y="50" width="335" height="50" rx="6" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="80" fill="#38bdf8" font-size="12" font-family="monospace">value.lval</text>
    <text x="150" y="80" fill="#f8fafc" font-size="13" font-family="monospace">42 (long integer)</text>

    <!-- Field 2: Type -->
    <rect x="15" y="110" width="335" height="50" rx="6" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="140" fill="#38bdf8" font-size="12" font-family="monospace">u1.v.type</text>
    <text x="150" y="140" fill="#f8fafc" font-size="13" font-family="monospace">IS_LONG</text>

    <!-- Field 3: Refcount -->
    <rect x="15" y="170" width="335" height="50" rx="6" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="200" fill="#38bdf8" font-size="12" font-family="monospace">refcount</text>
    <text x="150" y="200" fill="#f8fafc" font-size="13" font-family="monospace">1 (Single owner)</text>
  </g>

  <!-- Right: HashTable Structure -->
  <g transform="translate(440, 60)">
    <rect width="365" height="245" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="365" height="32" rx="8" fill="#7e22ce" />
    <text x="182" y="21" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Zend HashTable: $user = ['role' =&gt; 'admin']</text>

    <rect x="15" y="50" width="335" height="50" rx="6" fill="#0f172a" stroke="#a855f7" />
    <text x="25" y="80" fill="#c084fc" font-size="12" font-family="monospace">Hash Bucket</text>
    <text x="150" y="80" fill="#f8fafc" font-size="12" font-family="monospace">h: 0x9f4a12b</text>

    <rect x="15" y="110" width="335" height="50" rx="6" fill="#0f172a" stroke="#a855f7" />
    <text x="25" y="140" fill="#c084fc" font-size="12" font-family="monospace">Key String</text>
    <text x="150" y="140" fill="#f8fafc" font-size="12" font-family="monospace">zend_string("role")</text>

    <rect x="15" y="170" width="335" height="50" rx="6" fill="#0f172a" stroke="#a855f7" />
    <text x="25" y="200" fill="#c084fc" font-size="12" font-family="monospace">Value Pointer</text>
    <text x="150" y="200" fill="#34d399" font-size="12" font-family="monospace">-&gt; zval("admin")</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'modern-operators-arrays-heading',
      text: {
        en: 'Spaceship Comparison (<=>), Null Coalescing (??), and Array Pipelines',
        bn: 'স্পেসশিপ তুলনা (<=>), নাল কোলেসিং (??) এবং অ্যারে পাইপলাইন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern PHP includes expressive operators that streamline conditional evaluations. The spaceship operator ($a <=> $b) returns -1, 0, or 1 based on three-way relative magnitude, making sorting callbacks concise. The null coalescing operator ($var ?? "default") and its assignment variant ($var ??= "default") provide safe fallbacks without throwing undefined variable notices. Arrays in PHP function as ordered maps supporting destructuring syntax ([$x, $y] = $coords) and functional transformations like array_map and array_filter.',
        bn: 'আধুনিক পিএইচপিতে শর্তভিত্তিক মূল্যায়নের জন্য শক্তিশালী অপারেটর রয়েছে। স্পেসশিপ অপারেটর ($a <=> $b) ৩ টি সম্ভাব্য ফলাফলের ভিত্তিতে -1, 0 অথবা 1 রিটার্ন করে, যা সর্টিং কলব্যাকের জন্য আদর্শ। নাল কোলেসিং অপারেটর ($var ?? "default") এবং এর অ্যাসাইনমেন্ট রূপ ($var ??= "default") কোনো ওয়ার্নিং ছাড়াই নিরাপদ বিকল্প মান নিশ্চিত করে। পিএইচপিতে অ্যারে মূলত সুশৃঙ্খল হ্যাশ ম্যাপ হিসেবে কাজ করে যা ডিস্ট্রাকচারিং সিনট্যাক্স ([$x, $y] = $coords) এবং array_map ও array_filter এর মতো রূপান্তর সমর্থন করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of PHP zval typing, spaceship comparison, and functional array filtering across 3 items.',
        bn: '৩ টি উপাদানের ক্ষেত্রে পিএইচপি টাইপিং, স্পেসশিপ তুলনা এবং অ্যারে ফিল্টারিংয়ের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of PHP Typing, Operators, and Array Pipelines in TypeScript
interface ProductRecord {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

// Simulating PHP 8 spaceship comparison: $a <=> $b
export function spaceship(a: number, b: number): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

// 3 product items in catalog
const catalog: ProductRecord[] = [
  { id: 1, name: 'Monitor', price: 250, inStock: true },
  { id: 2, name: 'Keyboard', price: 75, inStock: false },
  { id: 3, name: 'Mouse', price: 30, inStock: true }
];

// 1. Simulating array_filter($catalog, fn($p) => $p['inStock'])
const inStockProducts = catalog.filter((p) => p.inStock);

// 2. Simulating usort($catalog, fn($a, $b) => $a['price'] <=> $b['price'])
inStockProducts.sort((a, b) => spaceship(a.price, b.price));

// 3. Simulating array destructuring: [$cheapest, $second] = $inStockProducts
const [cheapestProduct] = inStockProducts;

console.log('Total Products in Stock:', inStockProducts.length); // 2
console.log('Cheapest Product Name:', cheapestProduct.name); // "Mouse"
console.log('Cheapest Price:', cheapestProduct.price); // 30
console.log('Spaceship Test (30 vs 250):', spaceship(30, 250)); // -1`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'zval Container',
          def: {
            en: 'Internal Zend Engine C structure encapsulating a variable runtime value, type flag, and reference count.',
            bn: 'জেন্ড ইঞ্জিনের অভ্যন্তরীণ মেমোরি কাঠামো যা ভেরিয়েবলের আসল মান, ডেটা টাইপ এবং রেফারেন্স কাউন্ট ধারণ করে।'
          }
        },
        {
          term: 'Strict Types Directive',
          def: {
            en: 'File-level instruction (declare(strict_types=1);) disabling automatic type coercion for parameters and return types.',
            bn: 'ফাইল স্তরের নির্দেশ যা ফাংশন প্যারামিটার ও রিটার্ন মানের জন্য স্বয়ংক্রিয় টাইপ রূপান্তর পুরোপুরি নিষিদ্ধ করে।'
          }
        },
        {
          term: 'Spaceship Operator',
          def: {
            en: 'Three-way (3-way) comparison construct (<=>) evaluating to -1, 0, or 1 based on relative value size.',
            bn: '৩ টি সম্ভাব্য মানের ত্রিমুখী তুলনা অপারেটর (<=>) যা আপেক্ষিক আকারের ওপর ভিত্তি করে -1, 0 অথবা 1 প্রদান করে।'
          }
        },
        {
          term: 'Ordered Hash Map',
          def: {
            en: 'PHP hybrid array structure maintaining contiguous insertion order while providing key-based hash lookups.',
            bn: 'পিএইচপির বিশেষ অ্যারে কাঠামো যা ডেটা প্রবেশের ক্রম ঠিক রাখার পাশাপাশি দ্রুত কি-ভিত্তিক হ্যাশ লুকআপ সুবিধা দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'strict-types-type-error-ex1',
      kind: 'mcq',
      topic: 'strict-types-type-error',
      question: {
        en: 'What occurs under declare(strict_types=1); if a string "42" is passed into function calculate(int $amount)?',
        bn: 'declare(strict_types=1); সক্রিয় থাকা অবস্থায় function calculate(int $amount) ফাংশনে "42" স্ট্রিং পাঠালে কী ঘটে?'
      },
      options: [
        {
          en: 'PHP throws a fatal TypeError immediately, refusing to coerce the string into an integer',
          bn: 'পিএইচপি স্ট্রিংটিকে পূর্ণসংখ্যায় রূপান্তর করতে অস্বীকার করে সাথে সাথে একটি ফ্যাটাল TypeError তৈরি করে'
        },
        {
          en: 'It silently converts "42" to 42 without any warning',
          bn: 'এটি কোনো ওয়ার্নিং ছাড়াই "42" কে ৪২ এ রূপান্তর করে নেয়'
        },
        {
          en: 'It deletes the PHP interpreter from the server',
          bn: 'এটি সার্ভার থেকে পিএইচপি ইন্টারপ্রেটার মুছে ফেলে'
        },
        {
          en: 'It converts the number into a boolean true',
          bn: 'এটি সংখ্যাটিকে বুলিয়ান true তে বদলে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Strict typing forbids implicit scalar coercion across function boundary signatures.',
        bn: 'কঠোর টাইপিং ফাংশন আর্গুমেন্টে কোনো পরোক্ষ ডেটা টাইপ রূপান্তরের অনুমতি দেয় না।'
      },
      explanation: {
        en: 'With strict types declared, passing mismatched scalar types immediately raises a TypeError.',
        bn: 'কঠোর টাইপিং সক্রিয় থাকলে অমিল টাইপের ডেটা পাঠানো মাত্রই পিএইচপি একটি TypeError ছুড়ে দেয়।'
      }
    },
    {
      id: 'spaceship-sorting-logic-ex2',
      kind: 'mcq',
      topic: 'spaceship-sorting-return-values',
      question: {
        en: 'What does the expression 50 <=> 50 evaluate to in PHP?',
        bn: 'পিএইচপিতে 50 <=> 50 এক্সপ্রেশনটি মূল্যায়ন করলে কোন মানটি পাওয়া যায়?'
      },
      options: [
        { en: '0, indicating that both operands are strictly equal in magnitude', bn: '0, যা নির্দেশ করে যে উভয় পাশের মান আকারে সমান' },
        { en: '1, indicating left is larger', bn: '1, যা নির্দেশ করে বাম পাশের মান বড়' },
        { en: '-1, indicating left is smaller', bn: '-1, যা নির্দেশ করে বাম পাশের মান ছোট' },
        { en: '50, returning the original number', bn: '50, যা মূল সংখ্যাটি ফেরত দেয়' }
      ],
      answer: 0,
      hint: {
        en: 'Spaceship operator returns 0 when Left == Right.',
        bn: 'উভয় পাশের মান সমান হলে স্পেসশিপ অপারেটর ০ প্রদান করে।'
      },
      explanation: {
        en: 'Because 50 equals 50, the spaceship comparison evaluates directly to 0.',
        bn: 'উভয় সংখ্যা ৫০ হওয়ায় এদের তুলনা থেকে সরাসরি ০ পাওয়া যায়।'
      }
    },
    {
      id: 'null-coalescing-assignment-semantics-ex3',
      kind: 'mcq',
      topic: 'null-coalescing-assignment-operator',
      question: {
        en: 'What does $config["timeout"] ??= 30 accomplish in PHP 7.4+?',
        bn: 'পিএইচপি ৭.৪+ সংস্করণে $config["timeout"] ??= 30 স্টেটমেন্টটি কী কাজ সম্পন্ন করে?'
      },
      options: [
        {
          en: 'It assigns 30 to $config["timeout"] only if $config["timeout"] is null or currently not set',
          bn: 'এটি $config["timeout"] এ 30 মান সেট করে কেবল তখনই, যদি এটি পূর্বে সেট না থাকে বা এর মান null হয়'
        },
        {
          en: 'It forces the variable to be 30 regardless of its prior value',
          bn: 'পূর্বের মান যাই থাকুক না কেন এটি ভেরিয়েবলে 30 বসিয়ে দেয়'
        },
        {
          en: 'It deletes the timeout configuration setting',
          bn: 'এটি কনফিগারেশন থেকে টাইমআউট সেটিংটি মুছে ফেলে'
        },
        {
          en: 'It adds 30 seconds to the system clock',
          bn: 'এটি সিস্টেমের ঘড়িতে ৩০ সেকেন্ড যোগ করে'
        }
      ],
      answer: 0,
      hint: {
        en: '??= is shorthand for $a = $a ?? $b.',
        bn: '??= হলো $a = $a ?? $b এর সংক্ষিপ্ত রূপ।'
      },
      explanation: {
        en: 'The null coalescing assignment operator conditionally assigns the value only if the left operand is null or unset.',
        bn: 'বাম পাশের ভেরিয়েবল নাল বা অনুপস্থিত থাকলে তবেই কেবল ??= নতুন মান বরাদ্দ করে।'
      }
    },
    {
      id: 'array-destructuring-associative-ex4',
      kind: 'mcq',
      topic: 'array-destructuring-keys',
      question: {
        en: 'How do you unpack the "name" and "role" keys from $user = ["name" => "Zubair", "role" => "admin"] using destructuring?',
        bn: '$user = ["name" => "Zubair", "role" => "admin"] থেকে ডিস্ট্রাকচারিং ব্যবহার করে "name" এবং "role" কীভাবে বের করবেন?'
      },
      options: [
        { en: '["name" => $name, "role" => $role] = $user;', bn: '["name" => $name, "role" => $role] = $user;' },
        { en: '[$name, $role] = $user->values();', bn: '[$name, $role] = $user->values();' },
        { en: 'extract_keys($user, $name, $role);', bn: 'extract_keys($user, $name, $role);' },
        { en: 'unpack($user, ["name", "role"]);', bn: 'unpack($user, ["name", "role"]);' }
      ],
      answer: 0,
      hint: {
        en: 'Associative destructuring maps string array keys directly to target variables.',
        bn: 'অ্যাসোসিয়েটিভ ডিস্ট্রাকচারিং সরাসরি স্ট্রিং কি এর সাথে ভেরিয়েবল মিলিয়ে মান বসায়।'
      },
      explanation: {
        en: '["key" => $var] = $array assigns specific array keys into corresponding variables concisely.',
        bn: '["key" => $var] সিনট্যাক্স সুনির্দিষ্ট কি থেকে ডেটা আলাদা ভেরিয়েবলে নেওয়ার পরিচ্ছন্ন উপায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-vars-and-the-array',
    title: {
      en: 'PHP Variables, Operators and Arrays Quiz',
      bn: 'পিএইচপি ভেরিয়েবল, অপারেটর এবং অ্যারে কুইজ'
    },
    questions: [
      {
        id: 'quiz-variable-variables-syntax',
        kind: 'mcq',
        topic: 'variable-variables-dynamic-names',
        question: {
          en: 'Given $name = "score"; $$name = 100;, what is the value of $score in PHP?',
          bn: '$name = "score"; $$name = 100; কোডটি চালানোর পর পিএইচপিতে $score এর মান কী হবে?'
        },
        options: [
          {
            en: '100, because $$name uses the string value of $name ("score") as a dynamic variable identifier',
            bn: '100, কারণ $$name ভেরিয়েবলটি $name এর মানকে ("score") একটি গতিশীল ভেরিয়েবলের নাম হিসেবে ব্যবহার করে'
          },
          {
            en: 'null',
            bn: 'null'
          },
          {
            en: 'A fatal syntax parse error',
            bn: 'একটি মারাত্মক সিনট্যাক্স পার্স এরর'
          },
          {
            en: '"score"',
            bn: '"score"'
          }
        ],
        answer: 0,
        hint: {
          en: 'Double dollar signs ($$) denote variable variables whose identifier is dynamically evaluated.',
          bn: 'ডবল ডলার প্রতীক ($$) ডাইনামিক ভেরিয়েবল নির্দেশ করে যার নাম অন্য ভেরিয়েবলের মান থেকে নির্ধারিত হয়।'
        },
        explanation: {
          en: 'Variable variables resolve the inner variable value as the outer variable name, dynamically setting $score = 100.',
          bn: '$$name মূলত $score ভেরিয়েবল তৈরি করে তাতে ১০০ মান বরাদ্দ করে।'
        }
      },
      {
        id: 'quiz-in-array-type-coercion-hazard',
        kind: 'mcq',
        topic: 'in-array-loose-vs-strict',
        question: {
          en: 'Why does in_array("admin", [0, 1, 2]) evaluate to true in legacy PHP unless the strict parameter is set?',
          bn: 'কঠোর প্যারামিটার না দিলে পুরানো পিএইচপিতে in_array("admin", [0, 1, 2]) কেন true রিটার্ন করে?'
        },
        options: [
          {
            en: 'Without the strict true flag, loose equality (==) coerces non-numeric strings to integer 0, which matches the 0 element in the array',
            bn: 'কঠোর true ফ্ল্যাগ না থাকলে শিথিল সমতা (==) টেক্সট স্ট্রিংকে সংখ্যা ০ তে রূপান্তর করে, যা অ্যারের ০ উপাদানের সাথে মিলে যায়'
          },
          {
            en: 'Because "admin" has 5 letters',
            bn: 'কারণ "admin" শব্দটিতে ৫ টি বর্ণ আছে'
          },
          {
            en: 'It is a mathematical theorem in computer science',
            bn: 'এটি কম্পিউটার বিজ্ঞানের একটি গাণিতিক উপপাদ্য'
          },
          {
            en: 'in_array always returns true for all inputs',
            bn: 'in_array সব ধরনের ইনপুটের জন্যই সর্বদা true ফেরত দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Loose type comparison coerces non-numeric strings to 0 during numeric comparisons.',
          bn: 'শিথিল তুলনা টেক্সট স্ট্রিংকে সংখ্যা ০ এর সমান বিবেচনা করার ঝুঁকি তৈরি করে।'
        },
        explanation: {
          en: 'Always pass true as the third argument to in_array($needle, $haystack, true) to enforce strict identity (===) checks.',
          bn: 'এই মারাত্মক ভুল এড়াতে সর্বদা in_array ফাংশনে তৃতীয় আর্গুমেন্ট হিসেবে true দেওয়া উচিত।'
        }
      },
      {
        id: 'quiz-array-merge-vs-plus-operator',
        kind: 'mcq',
        topic: 'array-merge-vs-union-operator',
        question: {
          en: 'How does the array union operator ($a + $b) differ from array_merge($a, $b) for matching keys?',
          bn: 'একই নামের কি থাকার ক্ষেত্রে অ্যারে ইউনিয়ন অপারেটর ($a + $b) এবং array_merge($a, $b) এর মধ্যে পার্থক্য কী?'
        },
        options: [
          {
            en: '$a + $b keeps the values from the left array $a and ignores duplicate keys from $b, whereas array_merge overwrites existing keys with values from $b',
            bn: '$a + $b বাম পাশের $a এর মান ঠিক রেখে $b এর ডুপ্লিকেট কি উপেক্ষা করে, আর array_merge ডান পাশের $b এর মান দিয়ে আগের মান প্রতিস্থাপন করে'
          },
          {
            en: 'There is zero difference; they are exact aliases',
            bn: 'তাদের মধ্যে কোনো পার্থক্য নেই; তারা হুবহু একই'
          },
          {
            en: 'The + operator adds the numbers inside the arrays together',
            bn: '+ অপারেটর অ্যারের ভেতরের সংখ্যাগুলোকে পরস্পর যোগ করে'
          },
          {
            en: 'array_merge only works on indexed lists of numbers',
            bn: 'array_merge কেবল সংখ্যার ইনডেক্সড তালিকাতেই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: '+ operator preserves original left-hand keys; array_merge overwrites with right-hand keys.',
          bn: '+ অপারেটর বাম পাশের মূল মানকে অগ্রাধিকার দেয়; array_merge ডান পাশের মান দিয়ে ওভাররাইট করে।'
        },
        explanation: {
          en: 'Array union (+) is left-precedent, retaining $a keys; array_merge is right-precedent, overwriting with $b.',
          bn: '+ অপারেটর বাম পাশের ডেটা অক্ষত রাখে আর array_merge পরবর্তী অ্যারের ডেটা দিয়ে আগের ডেটা আপডেট করে।'
        }
      },
      {
        id: 'quiz-is-null-vs-isset-difference',
        kind: 'mcq',
        topic: 'isset-vs-is-null-evaluation',
        question: {
          en: 'What is the operational difference between isset($var) and is_null($var) when $var is completely undeclared?',
          bn: '$var ভেরিয়েবলটি পূর্বে ঘোষণা করা না থাকলে isset($var) এবং is_null($var) এর মধ্যে কার্যকরী পার্থক্য কী?'
        },
        options: [
          {
            en: 'isset($var) returns false safely without error, whereas is_null($var) triggers an "Undefined variable" warning notice',
            bn: 'isset($var) কোনো ওয়ার্নিং ছাড়াই নিরাপদে false রিটার্ন করে, আর is_null($var) একটি "Undefined variable" ওয়ার্নিং তৈরি করে'
          },
          {
            en: 'is_null formats the computer hard drive',
            bn: 'is_null কম্পিউটারের হার্ড ড্রাইভ ফরম্যাট করে দেয়'
          },
          {
            en: 'isset only works on integer numbers',
            bn: 'isset কেবল পূর্ণসংখ্যার ক্ষেত্রেই কাজ করতে পারে'
          },
          {
            en: 'Both throw fatal unhandled exceptions',
            bn: 'উভয়ই মারাত্মক ফ্যাটাল এক্সেপশন ছুড়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'isset is a language construct that suppresses undefined variable warnings.',
          bn: 'isset কোনো ভেরিয়েবল পূর্বে তৈরি না থাকলেও কোনো ওয়ার্নিং না দিয়ে নিরাপদভাবে পরীক্ষা করে।'
        },
        explanation: {
          en: 'isset checks both existence and non-null status without raising notices, whereas is_null expects the variable to exist.',
          bn: 'isset কোনো ত্রুটি না দেখিয়ে ভেরিয়েবলের উপস্থিতি যাচাই করে, কিন্তু is_null ভেরিয়েবলটি আগে থেকেই থাকা প্রত্যাশা করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'funcs-and-the-scope',
    title: {
      en: 'Functions, Scope, Closures & Type Signatures',
      bn: 'ফাংশন, স্কোপ, ক্লোজার এবং টাইপ সিগনেচার'
    }
  }
};
