import type { Lesson } from '../../../lib/types';

export const TypesAndTheLooseEngineLesson: Lesson = {
  slug: 'types-and-the-loose-engine',
  tech: 'php',
  title: {
    en: 'Type System, Operators & Control Flow',
    bn: 'টাইপ সিস্টেম, অপারেটর এবং কন্ট্রোল ফ্লো'
  },
  summary: {
    en: 'Master PHP 8 typing and logic flow: compare loose juggling versus declare(strict_types=1), explore scalar types (int, float, string, bool), union types, the spaceship operator (<=>), null coalescing (??), and modern match expressions.',
    bn: 'পিএইচপি ৮ এর টাইপ সিস্টেম এবং লজিক ফ্লো আয়ত্ত করুন: শিথিল টাইপ জাগলিং বনাম declare(strict_types=1), স্কেলার টাইপ (int, float, string, bool), ইউনিয়ন টাইপ, স্পেসশিপ অপারেটর (<=>), নাল কোলেসিং (??) এবং আধুনিক ম্যাচ এক্সপ্রেশন।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'type-system-heading',
      text: {
        en: 'Type Juggling versus Strict Types (declare(strict_types=1))',
        bn: 'টাইপ জাগলিং বনাম কঠোর টাইপ (declare(strict_types=1))'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Historically, PHP dynamically coerced variables into whatever data type an operator demanded, a behavior termed type juggling. For example, adding an integer 5 to a numeric string "10" silently produced an integer 15. While convenient for rapid scripting, implicit coercion frequently introduced subtle production vulnerabilities. In modern PHP, adding declare(strict_types=1); at the very top of each file enforces strict scalar typing: passing a string into a function expecting an integer immediately throws a fatal TypeError.',
        bn: 'ঐতিহাসিকভাবে পিএইচপি অপারেটরের চাহিদা অনুযায়ী ভেরিয়েবলের ডেটা টাইপ স্বয়ংক্রিয়ভাবে রূপান্তর করতো, যাকে টাইপ জাগলিং বলা হয়। উদাহরণস্বরূপ, পূর্ণসংখ্যা ৫ এর সাথে স্ট্রিং "10" যোগ করলে ফলাফল কোনো ত্রুটি ছাড়াই পূর্ণসংখ্যা ১৫ হতো। দ্রুত স্ক্রিপ্টিংয়ে এটি সহজ হলেও বড় অ্যাপ্লিকেশনে এটি মারাত্মক ত্রুটি ডেকে আনতে পারে। আধুনিক পিএইচপিতে ফাইলের শীর্ষে declare(strict_types=1); যোগ করলে কঠোর স্কেলার টাইপিং কার্যকর হয়: ফলে পূর্ণসংখ্যার স্থলে স্ট্রিং পাঠালে সাথে সাথে ফ্যাটাল TypeError তৈরি হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Comparison between legacy switch statement (loose equality) and modern PHP 8 match expression (strict equality).',
        bn: 'চিত্র ১: সনাতন switch স্টেটমেন্ট (শিথিল সমতা) এবং আধুনিক পিএইচপি ৮ match এক্সপ্রেশনের (কঠোর সমতা) মধ্যে তুলনা।'
      },
      svg: `<svg viewBox="0 0 840 320" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="320" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SWITCH STATEMENT vs MATCH EXPRESSION IN PHP 8</text>

  <!-- Left: Legacy Switch -->
  <g transform="translate(35, 60)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="365" height="32" rx="8" fill="#b91c1c" />
    <text x="182" y="21" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Legacy: switch ($status)</text>
    
    <text x="16" y="55" fill="#f87171" font-size="11" font-family="monospace">switch ($code) {</text>
    <text x="32" y="75" fill="#cbd5e1" font-size="10" font-family="monospace">case '200': // Loose equality (==)</text>
    <text x="48" y="93" fill="#94a3b8" font-size="10" font-family="monospace">$msg = 'OK';</text>
    <text x="48" y="111" fill="#f87171" font-size="10" font-family="monospace">break; // Mandatory break</text>
    <text x="32" y="131" fill="#cbd5e1" font-size="10" font-family="monospace">case '404':</text>
    <text x="48" y="149" fill="#94a3b8" font-size="10" font-family="monospace">$msg = 'Not Found';</text>
    <text x="48" y="167" fill="#f87171" font-size="10" font-family="monospace">break;</text>
    <text x="16" y="187" fill="#f87171" font-size="11" font-family="monospace">}</text>

    <rect x="15" y="198" width="335" height="26" rx="4" fill="#450a0a" />
    <text x="22" y="215" fill="#fca5a5" font-size="9" font-family="sans-serif">Loose type coercion: accidental fallthrough bugs</text>
  </g>

  <!-- Right: Modern Match -->
  <g transform="translate(440, 60)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="365" height="32" rx="8" fill="#047857" />
    <text x="182" y="21" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Modern: match ($status)</text>
    
    <text x="16" y="55" fill="#34d399" font-size="11" font-family="monospace">$msg = match ($code) {</text>
    <text x="32" y="75" fill="#cbd5e1" font-size="10" font-family="monospace">200 =&gt; 'OK',</text>
    <text x="32" y="93" fill="#cbd5e1" font-size="10" font-family="monospace">404 =&gt; 'Not Found',</text>
    <text x="32" y="111" fill="#cbd5e1" font-size="10" font-family="monospace">500 =&gt; 'Server Error',</text>
    <text x="32" y="129" fill="#94a3b8" font-size="10" font-family="monospace">default =&gt; 'Unknown',</text>
    <text x="16" y="149" fill="#34d399" font-size="11" font-family="monospace">};</text>

    <text x="16" y="177" fill="#6ee7b7" font-size="10" font-family="sans-serif">&#10003; Strict identity comparison (===)</text>
    <text x="16" y="192" fill="#6ee7b7" font-size="10" font-family="sans-serif">&#10003; Directly returns expression value</text>
    
    <rect x="15" y="198" width="335" height="26" rx="4" fill="#064e3b" />
    <text x="22" y="215" fill="#a7f3d0" font-size="9" font-family="sans-serif">Throws UnhandledMatchError if value unmapped</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'modern-operators-heading',
      text: {
        en: 'Spaceship (<=>), Null Coalescing (??), and Match Logic',
        bn: 'স্পেসশিপ (<=>), নাল কোলেসিং (??) এবং ম্যাচ লজিক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PHP provides expressive modern operators that simplify conditional logic. The spaceship operator ($a <=> $b) performs three-way comparison: it returns -1 if the left operand is smaller, 0 if both operands are equal, and 1 if the left operand is larger, making array sorting callbacks concise. The null coalescing operator ($config["timeout"] ?? 30) returns the left value if it exists and is not null; otherwise, it falls back to the default on the right. In PHP 8, the match expression replaces cumbersome switch statements with strict identity comparison (===) and concise return expressions.',
        bn: 'পিএইচপিতে শর্তভিত্তিক লজিককে সহজ করতে শক্তিশালী আধুনিক অপারেটর রয়েছে। স্পেসশিপ অপারেটর ($a <=> $b) ৩ টি সম্ভাব্য ফলাফলের ত্রিমুখী তুলনা চালায়: বাম পাশের মান ছোট হলে এটি -1, সমান হলে 0 এবং বাম পাশের মান বড় হলে 1 রিটার্ন করে, যা অ্যারে সর্টিংয়ে অত্যন্ত সুবিধাজনক। নাল কোলেসিং অপারেটর ($config["timeout"] ?? 30) বাম পাশের মান বিদ্যমান ও নাল না হলে সেটি গ্রহণ করে, অন্যথায় ডান পাশের ডিফল্ট মান বেছে নেয়। পিএইচপি ৮ এর match এক্সপ্রেশন পুরানো switch স্টেটমেন্টের জটিলতা কাটিয়ে কঠোর সমতা (===) ভিত্তিক সরাসরি মান রিটার্ন করার সুবিধা দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of PHP 8 strict types, spaceship three-way comparison, and match status mapping.',
        bn: 'পিএইচপি ৮ কঠোর টাইপিং, ৩ টি ফলাফলের স্পেসশিপ তুলনা এবং ম্যাচ ম্যাপিংয়ের TypeScript কোড।'
      },
      code: `// Simulation of PHP 8 Spaceship and Match mechanics in TypeScript
interface Product {
  id: number;
  name: string;
  price: number;
}

// Spaceship operator logic: returns -1, 0, or 1
export function spaceshipCompare(a: number, b: number): number {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

// Simulating PHP 8 match ($statusCode) { 200 => 'OK', 404 => 'Not Found', 500 => 'Error' }
export function matchHttpStatus(code: number): string {
  switch (code) {
    case 200:
      return 'HTTP 200: Success OK';
    case 404:
      return 'HTTP 404: Resource Not Found';
    case 500:
      return 'HTTP 500: Internal Server Error';
    default:
      return 'HTTP ' + code + ': Unhandled Code';
  }
}

// Catalog with 3 products
const catalog: Product[] = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Monitor', price: 250 }
];

// Sort products ascending by price using spaceship compare
catalog.sort((p1, p2) => spaceshipCompare(p1.price, p2.price));

console.log('Cheapest Product:', catalog[0].name, catalog[0].price); // Mouse 25
console.log('Status 200 Match:', matchHttpStatus(200)); // HTTP 200: Success OK
console.log('Status 404 Match:', matchHttpStatus(404)); // HTTP 404: Resource Not Found
console.log('Spaceship Test (25 vs 999):', spaceshipCompare(25, 999)); // -1`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Type Juggling',
          def: {
            en: 'Automatic implicit data type coercion performed by the PHP interpreter during evaluation.',
            bn: 'মূল্যায়নের সময় পিএইচপি ইন্টারপ্রেটার দ্বারা ভেরিয়েবলের ডেটা টাইপ স্বয়ংক্রিয়ভাবে রূপান্তর করার প্রক্রিয়া।'
          }
        },
        {
          term: 'Strict Types',
          def: {
            en: 'Compiler directive enforcing exact type signatures for function parameters and return values without coercion.',
            bn: 'কম্পাইলার নির্দেশিকা যা কোনো রূপান্তর ছাড়াই ফাংশন প্যারামিটার এবং রিটার্ন ভ্যালুর কঠোর টাইপ মেনে চলতে বাধ্য করে।'
          }
        },
        {
          term: 'Spaceship Operator',
          def: {
            en: 'Three-way comparison operator (<=>) returning -1, 0, or 1 based on relative magnitude.',
            bn: '৩ টি সম্ভাব্য ফলাফলের তুলনা অপারেটর (<=>) যা মানের ছোট, সমান বা বড় হওয়ার ওপর ভিত্তি করে -1, 0 অথবা 1 রিটার্ন করে।'
          }
        },
        {
          term: 'Match Expression',
          def: {
            en: 'PHP 8 construct evaluating conditions using strict identity comparison (===) and returning values directly.',
            bn: 'পিএইচপি ৮ এর একটি কাঠামো যা কঠোর সমতা (===) দিয়ে শর্ত পরীক্ষা করে এবং সরাসরি ফলাফল মান হিসেবে ফেরত দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'strict-types-directive-ex1',
      kind: 'mcq',
      topic: 'strict-types-declaration',
      question: {
        en: 'Where must declare(strict_types=1); be placed in a PHP file to enforce strict type checking?',
        bn: 'কঠোর টাইপ চেকিং নিশ্চিত করতে পিএইচপি ফাইলে declare(strict_types=1); কোথায় স্থাপন করতে হবে?'
      },
      options: [
        {
          en: 'At the very first statement of the script, immediately after the opening <?php tag before any code runs',
          bn: 'স্ক্রিপ্টের সর্বপ্রথম স্টেটমেন্ট হিসেবে, কোনো কোড চলার পূর্বে ওপেনিং <?php ট্যাগের ঠিক পরেই'
        },
        {
          en: 'Inside the HTML <footer> element at the bottom of the page',
          bn: 'পৃষ্ঠার নিচের অংশে এইচটিএমএল <footer> এলিমেন্টের ভেতরে'
        },
        {
          en: 'Inside every while loop conditional bracket',
          bn: 'প্রতিটি while লুপের ব্র্যাকেটের ভেতরে'
        },
        {
          en: 'Only inside database connection passwords',
          bn: 'কেবল ডেটাবেস কানেকশনের পাসওয়ার্ডের ভেতরে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Strict types is a file-level compilation directive that must precede any executable logic.',
        bn: 'এটি একটি ফাইল স্তরের কম্পাইলার নির্দেশিকা যা যেকোনো কোড কার্যকর হওয়ার আগেই থাকতে হয়।'
      },
      explanation: {
        en: 'Placing declare(strict_types=1); anywhere after executable code produces a fatal compile-time error.',
        bn: 'অন্য কোনো কোডের পরে এটি লিখলে পিএইচপিতে কম্পাইল-টাইম এরর তৈরি হয়।'
      }
    },
    {
      id: 'spaceship-operator-return-ex2',
      kind: 'mcq',
      topic: 'spaceship-operator-evaluation',
      question: {
        en: 'What integer value does the spaceship expression 10 <=> 20 evaluate to in PHP?',
        bn: 'পিএইচপিতে স্পেসশিপ এক্সপ্রেশন 10 <=> 20 এর মূল্যায়ন করলে কোন পূর্ণসংখ্যা পাওয়া যাবে?'
      },
      options: [
        { en: '-1 because 10 is strictly less than 20', bn: '-1 কারণ 10 সংখ্যাটি 20 এর চেয়ে ছোট' },
        { en: '1 because 10 is a positive number', bn: '1 কারণ 10 একটি ধনাত্মক সংখ্যা' },
        { en: '0 because both are integers', bn: '0 কারণ উভয়ই পূর্ণসংখ্যা' },
        { en: '100 because numbers multiply', bn: '100 কারণ সংখ্যাগুলো গুণ হয়' }
      ],
      answer: 0,
      hint: {
        en: 'Left < Right yields -1, Left == Right yields 0, Left > Right yields 1.',
        bn: 'বাম < ডান হলে -1, বাম == ডান হলে 0, এবং বাম > ডান হলে 1 পাওয়া যায়।'
      },
      explanation: {
        en: 'Because 10 is less than 20, the spaceship operator evaluates to -1.',
        bn: '১০ সংখ্যাটি ২০ এর চেয়ে ছোট হওয়ায় স্পেসশিপ অপারেটর -১ প্রদান করে।'
      }
    },
    {
      id: 'null-coalescing-operator-ex3',
      kind: 'mcq',
      topic: 'null-coalescing-semantics',
      question: {
        en: 'What is the evaluated result of $role ?? "guest" when $role is unset or explicitly null?',
        bn: 'যখন $role আনসেট বা স্পষ্টভাবে null থাকে, তখন $role ?? "guest" এর মান কী হবে?'
      },
      options: [
        {
          en: '"guest" because the null coalescing operator falls back to the right operand if the left operand is null or nonexistent',
          bn: '"guest" কারণ বাম পাশের মান null বা অনুপস্থিত হলে নাল কোলেসিং অপারেটর ডান পাশের ডিফল্ট মান গ্রহণ করে'
        },
        {
          en: 'A fatal unhandled error crashing the server',
          bn: 'একটি মারাত্মক ফ্যাটাল এরর যা সার্ভার ক্র্যাশ করে'
        },
        {
          en: 'An empty array with zero entries',
          bn: 'শূন্য এন্ট্রিযুক্ত একটি ফাঁকা অ্যারে'
        },
        {
          en: 'The number 0',
          bn: 'সংখ্যা 0'
        }
      ],
      answer: 0,
      hint: {
        en: 'Null coalescing operator ?? gracefully falls back without emitting notices.',
        bn: 'নাল কোলেসিং অপারেটর ?? কোনো ওয়ার্নিং না দিয়ে নিরাপদভাবে বিকল্প মান বেছে নেয়।'
      },
      explanation: {
        en: 'The ?? operator suppresses undefined index warnings and returns the fallback right operand.',
        bn: '?? অপারেটর কোনো ত্রুটি না দেখিয়ে নিরাপদভাবে ডান পাশের বিকল্প মান প্রদান করে।'
      }
    },
    {
      id: 'match-vs-switch-strictness-ex4',
      kind: 'mcq',
      topic: 'match-expression-strictness',
      question: {
        en: 'What fundamental behavioral difference distinguishes PHP 8 match expressions from classic switch blocks?',
        bn: 'পিএইচপি ৮ match এক্সপ্রেশন এবং সনাতন switch ব্লকের মধ্যে মৌলিক পার্থক্য কী?'
      },
      options: [
        {
          en: 'match uses strict identity comparison (===), returns values directly, and does not require break statements',
          bn: 'match কঠোর সমতা (===) ব্যবহার করে, সরাসরি ফলাফল মান ফেরত দেয় এবং এতে কোনো break স্টেটমেন্টের প্রয়োজন হয় না'
        },
        {
          en: 'match is 10 times slower than switch',
          bn: 'match এক্সপ্রেশন switch এর চেয়ে 10 গুণ ধীরগতির'
        },
        {
          en: 'switch can only compare decimal floating numbers',
          bn: 'switch কেবল দশমিক সংখ্যাই তুলনা করতে পারে'
        },
        {
          en: 'match only runs on Sundays',
          bn: 'match কেবল রবিবারেই কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Match uses === identity checking, returns an expression value, and eliminates break fallthrough bugs.',
        bn: 'Match কঠোর সমতা (===) মেনে চলে, সরাসরি মান রিটার্ন করে এবং ব্রেক ভুলের ঝুঁকি দূর করে।'
      },
      explanation: {
        en: 'match uses strict === equality, eliminating the loose comparison coercion pitfalls of traditional switch statements.',
        bn: 'match কঠোর সমতা মেনে কাজ করে, যার ফলে পুরানো switch এর মতো ভুল টাইপ কনভার্সনের ঝুঁকি থাকে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-types-and-the-loose-engine',
    title: {
      en: 'PHP 8 Type System and Operators Quiz',
      bn: 'পিএইচপি ৮ টাইপ সিস্টেম এবং অপারেটর কুইজ'
    },
    questions: [
      {
        id: 'quiz-unhandled-match-error',
        kind: 'mcq',
        topic: 'match-unhandled-match-error',
        question: {
          en: 'What happens in PHP 8 if a subject value matches none of the match arms and no default arm is provided?',
          bn: 'পিএইচপি ৮ এ যদি কোনো মান match এর কোনো শর্তের সাথে না মিলে এবং কোনো default শর্ত দেওয়া না থাকে, তবে কী ঘটে?'
        },
        options: [
          {
            en: 'PHP throws an UnhandledMatchError exception, immediately alerting developers to missing branch handling',
            bn: 'পিএইচপি একটি UnhandledMatchError এক্সেপশন ছুড়ে দেয়, যা ডেভেলপারকে অনুপস্থিত শর্ত হ্যান্ডেল করতে সতর্ক করে'
          },
          {
            en: 'It silently assigns the number 404 to the variable',
            bn: 'এটি কোনো ত্রুটি না দেখিয়ে ভেরিয়েবলে 404 সংখ্যাটি বসিয়ে দেয়'
          },
          {
            en: 'It deletes the PHP interpreter from the operating system',
            bn: 'এটি অপারেটিং সিস্টেম থেকে পিএইচপি ইন্টারপ্রেটার মুছে ফেলে'
          },
          {
            en: 'It restarts the database server',
            bn: 'এটি ডেটাবেস সার্ভার রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Match expressions are exhaustive and require either comprehensive branches or a default arm.',
          bn: 'Match এক্সপ্রেশনে সমস্ত শর্ত পূরণ করতে হয় অথবা একটি default শর্ত দিতে হয়।'
        },
        explanation: {
          en: 'Unlike switch which silently skips unmatched code, match throws UnhandledMatchError if unhandled.',
          bn: 'switch যেখানে চুপচাপ কোড এড়িয়ে যায়, match সেখানে ত্রুটি ধরিয়ে দিতে UnhandledMatchError ছুড়ে দেয়।'
        }
      },
      {
        id: 'quiz-nullsafe-operator-chaining',
        kind: 'mcq',
        topic: 'php-nullsafe-operator',
        question: {
          en: 'What is the purpose of the nullsafe operator (?->) introduced in PHP 8?',
          bn: 'পিএইচপি ৮ এ প্রবর্তিত নালসেফ অপারেটরের (?->) মূল উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'It safely halts method or property chain evaluation and returns null immediately if any intermediate object is null, avoiding "Call to a member function on null" fatal errors',
            bn: 'যেকোনো মধ্যবর্তী অবজেক্ট null হলে এটি সাথে সাথে চেইন থামিয়ে null রিটার্ন করে, ফলে "Call to a member function on null" ফ্যাটাল এরর ঘটে না'
          },
          {
            en: 'It encrypts database rows using 256-bit encryption keys',
            bn: 'এটি ২৫৬-বিট কি দিয়ে ডেটাবেসের তথ্য এনক্রিপ্ট করে'
          },
          {
            en: 'It compresses image files to save disk bandwidth',
            bn: 'এটি ডিস্কের জায়গা বাঁচাতে ছবি কম্প্রেস করে'
          },
          {
            en: 'It changes the font color of rendered HTML paragraphs',
            bn: 'এটি এইচটিএমএল প্যারাগ্রাফের ফন্টের রঙ পরিবর্তন করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Nullsafe operator ?-> avoids nested is_null() checks when traversing object graphs.',
          bn: 'নালসেফ অপারেটর ?-> বারবার অবজেক্ট নাল কি না তা পরীক্ষা করার ঝামেলা দূর করে।'
        },
        explanation: {
          en: 'The ?-> operator short-circuits to null if an element in the property/method chain is null.',
          bn: '?-> অপারেটর চেইনের যেকোনো সদস্য null হলে সরাসরি সম্পূর্ণ অপারেশনের মান হিসেবে null ফেরত দেয়।'
        }
      },
      {
        id: 'quiz-union-types-feature',
        kind: 'mcq',
        topic: 'php-union-types',
        question: {
          en: 'How does PHP 8 represent a function parameter that accepts either an int or a float?',
          bn: 'পিএইচপি ৮ এ কীভাবে একটি ফাংশন প্যারামিটার ঘোষণা করা যায় যা int অথবা float উভয় টাইপ গ্রহণ করতে পারে?'
        },
        options: [
          { en: 'Using union type syntax: function calculate(int|float $amount)', bn: 'ইউনিয়ন টাইপ সিনট্যাক্স ব্যবহার করে: function calculate(int|float $amount)' },
          { en: 'Using comma syntax: function calculate(int, float $amount)', bn: 'কমা সিনট্যাক্স ব্যবহার করে: function calculate(int, float $amount)' },
          { en: 'Using question mark syntax: function calculate(?int_float $amount)', bn: 'প্রশ্নবোধক চিহ্ন দিয়ে: function calculate(?int_float $amount)' },
          { en: 'PHP cannot accept multiple types in a single parameter', bn: 'পিএইচপিতে এক প্যারামিটারে একাধিক টাইপ গ্রহণ করা অসম্ভব' }
        ],
        answer: 0,
        hint: {
          en: 'Union types use the vertical pipe symbol | to combine multiple allowed types.',
          bn: 'একাধিক অনুমোদিত টাইপ যুক্ত করতে পাইপ প্রতীক | ব্যবহার করা হয়।'
        },
        explanation: {
          en: 'PHP 8 introduced union types with the pipe delimiter (int|float), allowing precise type constraints.',
          bn: 'পিএইচপি ৮ এ পাইপ চিহ্নের (int|float) মাধ্যমে একাধিক ডেটা টাইপ একসাথে সংজ্ঞায়িত করা যায়।'
        }
      },
      {
        id: 'quiz-null-coalescing-assignment',
        kind: 'mcq',
        topic: 'null-coalescing-assignment-operator',
        question: {
          en: 'What does the null coalescing assignment operator ($settings["timeout"] ??= 30) perform?',
          bn: 'নাল কোলেসিং অ্যাসাইনমেন্ট অপারেটর ($settings["timeout"] ??= 30) আসলে কী কাজ সম্পন্ন করে?'
        },
        options: [
          {
            en: 'It assigns 30 to $settings["timeout"] only if $settings["timeout"] is currently not set or evaluates to null',
            bn: 'এটি $settings["timeout"] এ 30 মান সেট করে কেবল তখনই, যদি এটি পূর্বে সেট করা না থাকে বা এর মান null হয়'
          },
          {
            en: 'It overwrites the setting with 30 regardless of its prior value',
            bn: 'এটি পূর্বের মান যাই থাকুক না কেন মুছে ফেলে সেখানে 30 বসিয়ে দেয়'
          },
          {
            en: 'It adds 30 to the existing number inside the variable',
            bn: 'এটি ভেরিয়েবলের ভেতরের বিদ্যমান মানের সাথে 30 যোগ করে'
          },
          {
            en: 'It generates a random number between 1 and 30',
            bn: 'এটি 1 থেকে 30 এর মধ্যে একটি দৈব সংখ্যা তৈরি করে'
          }
        ],
        answer: 0,
        hint: {
          en: '$a ??= $b is shorthand for $a = $a ?? $b.',
          bn: '$a ??= $b হলো $a = $a ?? $b এর সংক্ষিপ্ত রূপ।'
        },
        explanation: {
          en: '??= assigns the right-hand value only if the left-hand variable is null or unset.',
          bn: '??= কেবল তখনই মান অ্যাসাইন করে যখন সংশ্লিষ্ট ভেরিয়েবলটি আনসেট বা নাল অবস্থায় থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'arrays-that-do-everything',
    title: {
      en: 'Arrays, Hash Maps & Array Transformation Functions',
      bn: 'অ্যারে, হ্যাশ ম্যাপ এবং অ্যারে ট্রান্সফরমেশন ফাংশন'
    }
  }
};
