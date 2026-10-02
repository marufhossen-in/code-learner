import type { Lesson } from '../../../lib/types';

export const FuncsAndTheScopeLesson: Lesson = {
  slug: 'funcs-and-the-scope',
  tech: 'lang-php',
  title: {
    en: 'Functions, Scope, Closures & Type Signatures',
    bn: 'ফাংশন, স্কোপ, ক্লোজার এবং টাইপ সিগনেচার'
  },
  summary: {
    en: 'Deep architectural dive into PHP functions: master lexical variable scoping (global, local, static), understand pass-by-reference (&), explore variadics (...$args) and named arguments, and leverage anonymous closures and modern arrow functions.',
    bn: 'পিএইচপি ফাংশন ও স্কোপের বিশদ আলোচনা: লোকাল, গ্লোবাল ও স্ট্যাটিক ভেরিয়েবল স্কোপ, রেফারেন্স পাসিং (&), ভ্যারিয়াডিক ও নেইমড আর্গুমেন্ট, অ্যানোনিমাস ক্লোজার এবং অ্যারো ফাংশন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'lexical-scoping-heading',
      text: {
        en: 'Function Execution Scopes, Static Retainers, and Reference Passing',
        bn: 'ফাংশন এক্সিকিউশন স্কোপ, স্ট্যাটিক ভেরিয়েবল এবং রেফারেন্স পাসিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike JavaScript, PHP (the server-side scripting language) functions possess strictly isolated lexical scopes: variables defined in the outer global scope are completely invisible inside a function body unless imported via the global keyword or passed as arguments. When persistent state is required across repeated invocations without polluting global memory, static variables retain their updated values between function calls. In standard calls, arguments are passed by value (copy-on-write); appending an ampersand (&) enables pass-by-reference, directly mutating the caller variable.',
        bn: 'জাভাস্ক্রিপ্টের মতো না হয়ে পিএইচপি (সার্ভার-সাইড স্ক্রিপ্টিং ভাষা) ফাংশন কঠোরভাবে সংরক্ষিত লোকাল স্কোপ মেনে চলে: গ্লোবাল স্কোপের ভেরিয়েবলগুলো ফাংশনের ভেতরে সরাসরি দেখা যায় না যদি না সেগুলোকে global কিওয়ার্ড দিয়ে আনা হয় বা আর্গুমেন্ট হিসেবে পাস করা হয়। গ্লোবাল মেমোরি নষ্ট না করে বারবার ফাংশন ডাকার মাঝে কোনো মান সংরক্ষণ করতে চাইলে static ভেরিয়েবল ব্যবহার করা হয়। সাধারণভাবে আর্গুমেন্ট মান হিসেবে কপি হয়; তবে ভেরিয়েবলের নামের আগে অ্যান্ড প্রতীক (&) যুক্ত করলে রেফারেন্স পাস হয়, যার ফলে ফাংশনের ভেতরের পরিবর্তন মূল ভেরিয়েবলেও ঘটে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural separation between Global Scope, Isolated Function Stack Frames, and Pass-by-Reference pointers.',
        bn: 'চিত্র ১: গ্লোবাল স্কোপ, ফাংশন স্ট্যাক ফ্রেম এবং রেফারেন্স পাসিং পয়েন্টারের স্থাপত্যিক মেমোরি চিত্র।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PHP FUNCTION SCOPE &amp; CALL STACK MEMORY ALLOCATION</text>

  <!-- Left: Global Scope -->
  <g transform="translate(35, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#0284c7" />
    <text x="115" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Global Scope</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="75" fill="#38bdf8" font-size="12" font-family="monospace">$counter = 10;</text>

    <rect x="15" y="110" width="200" height="50" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="140" fill="#38bdf8" font-size="12" font-family="monospace">$total = 200;</text>

    <text x="20" y="195" fill="#cbd5e1" font-size="10" font-family="sans-serif">Direct access blocked</text>
    <text x="20" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">inside functions</text>
  </g>

  <!-- Middle: Function Stack Frame -->
  <g transform="translate(305, 65)">
    <rect width="250" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="250" height="30" rx="8" fill="#059669" />
    <text x="125" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Stack Frame: apply(&amp;$val)</text>

    <rect x="15" y="45" width="220" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="75" fill="#34d399" font-size="11" font-family="monospace">&amp;$val -&gt; points to $counter</text>

    <rect x="15" y="110" width="220" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="140" fill="#fbbf24" font-size="11" font-family="monospace">static $invocations = 1;</text>

    <text x="20" y="195" fill="#cbd5e1" font-size="10" font-family="sans-serif">Stack destroyed upon return</text>
    <text x="20" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Static value preserved in RAM</text>
  </g>

  <!-- Right: Closures & Arrows -->
  <g transform="translate(595, 65)">
    <rect width="210" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="210" height="30" rx="8" fill="#7e22ce" />
    <text x="105" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">PHP 8 Closures</text>

    <rect x="15" y="45" width="180" height="55" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="20" y="70" fill="#c084fc" font-size="10" font-family="monospace">fn($x) =&gt; $x * 2</text>
    <text x="20" y="90" fill="#cbd5e1" font-size="9" font-family="sans-serif">Auto outer-scope capture</text>

    <rect x="15" y="115" width="180" height="55" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="20" y="140" fill="#c084fc" font-size="10" font-family="monospace">Named: tax: 15</text>
    <text x="20" y="160" fill="#cbd5e1" font-size="9" font-family="sans-serif">Order-independent call</text>

    <text x="15" y="205" fill="#c084fc" font-size="10" font-family="sans-serif">First-Class Callables</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'closures-and-named-args-heading',
      text: {
        en: 'Anonymous Closures, Arrow Functions (fn), and PHP 8 Named Arguments',
        bn: 'অ্যানোনিমাস ক্লোজার, অ্যারো ফাংশন (fn) এবং পিএইচপি ৮ নেইমড আর্গুমেন্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Anonymous closures allow functions to be assigned to variables and passed as first-class callbacks. Standard closures require an explicit use ($var) clause to capture variables from outer scopes. In contrast, short arrow functions (introduced in PHP 7.4 with syntax fn($x) => $x * $rate) automatically capture parent scope variables by value. Furthermore, PHP 8 introduced Named Arguments, enabling developers to pass parameters by parameter name rather than position (such as calculate(rate: 15, amount: 200)), making optional arguments skip effortless.',
        bn: 'অ্যানোনিমাস ক্লোজারের মাধ্যমে ফাংশনকে ভেরিয়েবলে সংরক্ষণ করা এবং কলব্যাক হিসেবে পাস করা যায়। সাধারণ ক্লোজারে বাইরের ভেরিয়েবল ব্যবহার করতে use ($var) ক্লজ লিখতে হয়। অপরপক্ষে পিএইচপি ৭.৪ এ যুক্ত হওয়া সংক্ষিপ্ত অ্যারো ফাংশন (সিনট্যাক্স fn($x) => $x * $rate) স্বয়ংক্রিয়ভাবে বাইরের ভেরিয়েবল কপি করে নেয়। উপরন্তু পিএইচপি ৮ এ নেইমড আর্গুমেন্ট যুক্ত হয়েছে, যার মাধ্যমে আর্গুমেন্টের পজিশন মনে না রেখে সরাসরি প্যারামিটারের নাম উল্লেখ করে মান পাঠানো যায় (যেমন calculate(rate: 15, amount: 200)), যা অপশনাল প্যারামিটারকে সহজে স্কিপ করার সুযোগ দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of PHP lexical scoping, pass-by-reference mutation, and named parameter dispatching.',
        bn: 'পিএইচপি লোকাল স্কোপ, রেফারেন্স দ্বারা মান পরিবর্তন এবং নেইমড আর্গুমেন্ট ডিসপ্যাচের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of PHP Scoping, Pass-By-Reference, and Closures in TypeScript

// 1. Simulating pass-by-reference: function increment(&$val)
export class RefBox<T> {
  constructor(public value: T) {}
}

export function phpIncrementRef(ref: RefBox<number>): void {
  ref.value += 10; // Directly mutates original value
}

// 2. Simulating static variables inside functions
export function makeStaticCounter() {
  let staticCount = 0; // Preserved across calls
  return function(): number {
    staticCount += 1;
    return staticCount;
  };
}

// 3. Simulating PHP 8 Named Arguments: calculate(amount: 200, tax: 15)
interface CalcOptions {
  amount: number;
  tax: number;
  discount?: number;
}

export function calculateTotal({ amount, tax, discount = 0 }: CalcOptions): number {
  return amount + (amount * (tax / 100)) - discount;
}

// Executing demonstrations
const numRef = new RefBox<number>(10);
phpIncrementRef(numRef);
console.log('Value after Pass-by-Reference:', numRef.value); // 20

const counter = makeStaticCounter();
console.log('Static Call 1:', counter()); // 1
console.log('Static Call 2:', counter()); // 2

// Calling with named arguments (regardless of order)
const total = calculateTotal({ tax: 15, amount: 200 });
console.log('Total with 15% Tax on 200:', total); // 230`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Lexical Scope Isolation',
          def: {
            en: 'PHP language architecture where variables declared outside a function are inaccessible within its stack frame by default.',
            bn: 'পিএইচপির স্থাপত্যিক বৈশিষ্ট্য যেখানে ফাংশনের বাইরের ভেরিয়েবল স্বতঃস্ফূর্তভাবে ফাংশনের ভেতরে ব্যবহার করা যায় না।'
          }
        },
        {
          term: 'Pass-by-Reference',
          def: {
            en: 'Syntax (&) directing a function parameter to point directly to the caller memory zval rather than creating an isolated copy.',
            bn: 'বিশেষ সিনট্যাক্স (&) যার মাধ্যমে ফাংশন নতুন কপি না করে মূল ভেরিয়েবলের মেমোরি পয়েন্টার নিয়ে কাজ করে।'
          }
        },
        {
          term: 'Static Variable',
          def: {
            en: 'Local function variable whose state is preserved in persistent memory across consecutive invocations in the request.',
            bn: 'ফাংশনের বিশেষ লোকাল ভেরিয়েবল যার মান একই রিকোয়েস্টে একাধিকবার ফাংশন কল করার মাঝেও টিকে থাকে।'
          }
        },
        {
          term: 'Arrow Function (fn)',
          def: {
            en: 'Concise single-expression closure syntax automatically capturing parent scope variables by value without explicit use clauses.',
            bn: 'এক লাইনের সংক্ষিপ্ত ক্লোজার যা কোনো use ক্লজ ছাড়াই অভিভাবক স্কোপের ভেরিয়েবল স্বয়ংক্রিয়ভাবে কপি করে নেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'php-scope-isolation-ex1',
      kind: 'mcq',
      topic: 'php-variable-scope-isolation',
      question: {
        en: 'What happens when a PHP function attempts to access an outer global variable $count without declaring global $count or passing it as a parameter?',
        bn: 'global $count ঘোষণা না করে বা প্যারামিটার হিসেবে না পাঠিয়ে ফাংশনের ভেতর থেকে বাইরের $count অ্যাক্সেস করতে গেলে কী ঘটে?'
      },
      options: [
        {
          en: 'PHP issues an "Undefined variable" warning and treats the variable as null within the local scope',
          bn: 'পিএইচপি একটি "Undefined variable" ওয়ার্নিং দেয় এবং লোকাল স্কোপে ভেরিয়েবলটিকে null হিসেবে বিবেচনা করে'
        },
        {
          en: 'It reads the global variable automatically as in JavaScript',
          bn: 'জাভাস্ক্রিপ্টের মতো এটি স্বয়ংক্রিয়ভাবে গ্লোবাল ভেরিয়েবলের মান পড়ে নেয়'
        },
        {
          en: 'It formats the server memory cache',
          bn: 'এটি সার্ভারের মেমোরি ক্যাশ মুছে ফেলে'
        },
        {
          en: 'The operating system reboots immediately',
          bn: 'অপারেটিং সিস্টেম সাথে সাথে রিবুট হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'PHP does not inherit outer scope variables automatically inside function bodies.',
        bn: 'পিএইচপি ফাংশন বাইরের ভেরিয়েবলগুলো নিজে থেকে ভেতরে প্রবেশ করায় না।'
      },
      explanation: {
        en: 'PHP functions have isolated scope; accessing outer variables requires global $var or passing arguments.',
        bn: 'ফাংশনের নিজস্ব আলাদা স্কোপ থাকে; বাইরের ভেরিয়েবল ব্যবহার করতে global কিওয়ার্ড দিতে হয়।'
      }
    },
    {
      id: 'static-variable-retention-ex2',
      kind: 'mcq',
      topic: 'static-variable-lifecycle',
      question: {
        en: 'What is printed if function tick() { static $c = 0; $c++; echo $c; } is invoked twice consecutively?',
        bn: 'function tick() { static $c = 0; $c++; echo $c; } ফাংশনটি পরপর দুইবার কল করলে আউটপুটে কী আসবে?'
      },
      options: [
        { en: '12 (1 on the first call, 2 on the second call)', bn: '12 (প্রথম কলে 1 এবং দ্বিতীয় কলে 2)' },
        { en: '11 (both calls print 1 because static variables reset on return)', bn: '11 (উভয় কলে 1 কারণ স্ট্যাটিক ভেরিয়েবল রিসেট হয়ে যায়)' },
        { en: '00', bn: '00' },
        { en: 'Fatal compilation exception', bn: 'মারাত্মক কম্পাইলেশন এক্সেপশন' }
      ],
      answer: 0,
      hint: {
        en: 'Static variables retain their values across function invocations during script execution.',
        bn: 'স্ট্যাটিক ভেরিয়েবল স্ক্রিপ্ট চলাকালীন ফাংশন কলের মাঝেও আগের মান ধরে রাখে।'
      },
      explanation: {
        en: 'The static variable $c increments from 0 to 1 on call 1, and from 1 to 2 on call 2, echoing 12.',
        bn: 'স্ট্যাটিক ভেরিয়েবল $c এর মান প্রথম কলে 0 থেকে 1 এবং দ্বিতীয় কলে 1 থেকে 2 হয়, ফলে মোট আউটপুট আসে 12।'
      }
    },
    {
      id: 'pass-by-reference-ampersand-ex3',
      kind: 'mcq',
      topic: 'pass-by-reference-ampersand',
      question: {
        en: 'Which character prefix designates a function parameter to be passed by reference in PHP?',
        bn: 'পিএইচপিতে রেফারেন্স দ্বারা প্যারামিটার পাস করার জন্য প্যারামিটারের পূর্বে কোন প্রতীকটি ব্যবহার করা হয়?'
      },
      options: [
        { en: 'Ampersand (&), as in function update(&$value)', bn: 'অ্যান্ড বা অ্যাম্পারস্যান্ড (&), যেমন function update(&$value)' },
        { en: 'Asterisk (*)', bn: 'অ্যাস্টেরিস্ক (*)' },
        { en: 'Percent sign (%)', bn: 'শতকরা চিহ্ন (%)' },
        { en: 'Hash symbol (#)', bn: 'হ্যাশ প্রতীক (#)' }
      ],
      answer: 0,
      hint: {
        en: 'The & symbol informs the Zend Engine to bind the caller zval rather than copying its value.',
        bn: '& প্রতীক কম্পাইলারকে নতুন কপি না করে মূল ভেরিয়েবলের রেফারেন্স ব্যবহার করতে বলে।'
      },
      explanation: {
        en: 'The ampersand (&) passes arguments by reference, letting the function modify the caller variable directly.',
        bn: '& প্রতীক রেফারেন্স পাসিং নির্দেশ করে যার মাধ্যমে মূল ভেরিয়েবলের মানে পরিবর্তন ঘটানো যায়।'
      }
    },
    {
      id: 'arrow-function-variable-capture-ex4',
      kind: 'mcq',
      topic: 'arrow-functions-scope-capture',
      question: {
        en: 'How do PHP arrow functions (fn() => ...) capture variables from their parent scope?',
        bn: 'পিএইচপি অ্যারো ফাংশন (fn() => ...) কীভাবে তাদের অভিভাবক স্কোপের ভেরিয়েবল সংগ্রহ করে?'
      },
      options: [
        {
          en: 'Automatically by value, without requiring an explicit "use" statement',
          bn: 'স্বয়ংক্রিয়ভাবে মান হিসেবে কপি করে, কোনো স্পষ্ট "use" স্টেটমেন্টের প্রয়োজন ছাড়াই'
        },
        {
          en: 'By reference, mutating all parent variables automatically',
          bn: 'রেফারেন্স হিসেবে, যার ফলে বাইরের সমস্ত ভেরিয়েবল বদলে যায়'
        },
        {
          en: 'They cannot access parent variables under any circumstances',
          bn: 'তারা কোনো অবস্থাতেই অভিভাবক স্কোপের ভেরিয়েবল ব্যবহার করতে পারে না'
        },
        {
          en: 'Only by writing 5 use statements',
          bn: 'কেবল ৫ টি use স্টেটমেন্ট লিখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Arrow functions feature implicit by-value variable binding from the enclosing lexical scope.',
        bn: 'অ্যারো ফাংশন বাইরের ভেরিয়েবলগুলোকে স্বয়ংক্রিয়ভাবে মান হিসেবে গ্রহণ করে নেয়।'
      },
      explanation: {
        en: 'fn() syntax captures outer variables by value automatically, simplifying inline callback expressions.',
        bn: 'fn() সিনট্যাক্স বাইরের ভেরিয়েবলকে স্বতঃস্ফূর্তভাবে মান আকারে নিয়ে কোড সহজ করে তোলে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-funcs-and-the-scope',
    title: {
      en: 'PHP Functions, Scope and Closures Quiz',
      bn: 'পিএইচপি ফাংশন, স্কোপ এবং ক্লোজার কুইজ'
    },
    questions: [
      {
        id: 'quiz-named-arguments-order-independence',
        kind: 'mcq',
        topic: 'php8-named-arguments',
        question: {
          en: 'What is the primary architectural advantage of PHP 8 Named Arguments?',
          bn: 'পিএইচপি ৮ এ যুক্ত হওয়া নেইমড আর্গুমেন্টের প্রধান স্থাপত্যিক সুবিধা কী?'
        },
        options: [
          {
            en: 'Arguments can be passed by parameter name rather than position, allowing optional parameters with default values to be safely skipped',
            bn: 'আর্গুমেন্ট পজিশনের বদলে সরাসরি প্যারামিটারের নাম দিয়ে পাঠানো যায়, ফলে ডিফল্ট মানযুক্ত অপশনাল প্যারামিটারগুলো সহজে স্কিপ করা যায়'
          },
          {
            en: 'Named arguments execute 10 times faster than positional ones',
            bn: 'নেইমড আর্গুমেন্ট সাধারণ আর্গুমেন্টের চেয়ে ১০ গুণ দ্রুত কার্যকর হয়'
          },
          {
            en: 'They eliminate the need for function return types',
            bn: 'এগুলো ফাংশনে রিটার্ন টাইপ লেখার প্রয়োজনীয়তা দূর করে'
          },
          {
            en: 'They store all variables permanently on GitHub',
            bn: 'তারা সমস্ত ভেরিয়েবল স্থায়ীভাবে গিটহাবে জমা রাখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Named parameters allow passing arguments in any order while skipping defaults.',
          bn: 'প্যারামিটারের নাম ধরে মান পাঠানো গেলে অপ্রয়োজনীয় ডিফল্ট আর্গুমেন্ট বাদ দেওয়া সহজ হয়।'
        },
        explanation: {
          en: 'Named arguments improve code clarity and allow skipping default values without passing dummy arguments.',
          bn: 'নেইমড আর্গুমেন্ট কোডের স্পষ্টতা বাড়ায় এবং মধ্যবর্তী অপ্রয়োজনীয় আর্গুমেন্ট বাদ দিতে সাহায্য করে।'
        }
      },
      {
        id: 'quiz-variadic-argument-spread-syntax',
        kind: 'mcq',
        topic: 'variadic-functions-splat-operator',
        question: {
          en: 'Which syntax allows a PHP function to accept an arbitrary number of arguments collected into an array?',
          bn: 'কোন সিনট্যাক্স ব্যবহারের মাধ্যমে পিএইচপি ফাংশন অনির্দিষ্ট সংখ্যক আর্গুমেন্ট একটি অ্যারে আকারে গ্রহণ করতে পারে?'
        },
        options: [
          {
            en: 'The variadic splat operator (...$params), as in function sum(int ...$numbers)',
            bn: 'ভ্যারিয়াডিক স্প্ল্যাট অপারেটর (...$params), যেমন function sum(int ...$numbers)'
          },
          {
            en: 'The pointer arrow (->$params)',
            bn: 'পয়েন্টার অ্যারো (->$params)'
          },
          {
            en: 'Double question marks (??$params)',
            bn: 'ডবল প্রশ্নবোধক চিহ্ন (??$params)'
          },
          {
            en: 'Brackets ($params[]) in parameter declarations',
            bn: 'প্যারামিটার ঘোষণায় ব্র্যাকেট ($params[])'
          }
        ],
        answer: 0,
        hint: {
          en: 'The three dots (...) denote variadic arguments in function parameter lists.',
          bn: 'তিনটি ডট (...) ভ্যারিয়াডিক আর্গুমেন্ট নির্দেশ করে।'
        },
        explanation: {
          en: '...$params gathers remaining arguments into an array, enforcing type checks on each element.',
          bn: '...$params অবশিষ্ট সমস্ত আর্গুমেন্টকে একটি অ্যারে হিসেবে ধারণ করে এবং টাইপ যাচাই নিশ্চিত করে।'
        }
      },
      {
        id: 'quiz-return-type-never-php81',
        kind: 'mcq',
        topic: 'php81-never-return-type',
        question: {
          en: 'What does the "never" return type introduced in PHP 8.1 signify for a function?',
          bn: 'পিএইচপি ৮.১ এ প্রবর্তিত "never" রিটার্ন টাইপ একটি ফাংশনের ক্ষেত্রে কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'The function will never return normally; it must always throw an exception, call exit(), or terminate execution',
            bn: 'ফাংশনটি কখনোই স্বাভাবিকভাবে কোনো মান রিটার্ন করবে না; এটি সর্বদা এক্সেপশন ছুড়বে, exit() কল করবে বা প্রোগ্রাম থামিয়ে দেবে'
          },
          {
            en: 'The function can only be executed on weekends',
            bn: 'ফাংশনটি কেবল ছুটির দিনেই কার্যকর করা যাবে'
          },
          {
            en: 'The function returns integer 0',
            bn: 'ফাংশনটি সর্বদা পূর্ণসংখ্যা 0 রিটার্ন করে'
          },
          {
            en: 'The function can never be called by any code',
            bn: 'কোনো কোড কখনোই ফাংশনটি কল করতে পারবে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'never is a bottom type indicating that the function terminates script execution or throws.',
          bn: 'never টাইপ নির্দেশ করে যে ফাংশনটির কাজ হলো এক্সেপশন দেওয়া বা প্রোগ্রাম বন্ধ করে দেওয়া।'
        },
        explanation: {
          en: 'Functions marked "never" promise to never reach an end statement or return, halting via exit() or throwing exceptions.',
          bn: 'never চিহ্নিত ফাংশন থেকে কোনো রিটার্ন আশা করা হয় না, এটি সরাসরি স্ক্রিপ্ট বন্ধ বা এক্সেপশন থ্রো করে।'
        }
      },
      {
        id: 'quiz-closure-binding-this-context',
        kind: 'mcq',
        topic: 'closure-binding-this-context',
        question: {
          en: 'When an anonymous function is defined inside a class method in PHP, what happens to $this?',
          bn: 'পিএইচপিতে কোনো ক্লাস মেথডের ভেতরে অ্যানোনিমাস ফাংশন তৈরি করলে $this এর কী ঘটে?'
        },
        options: [
          {
            en: 'It is automatically bound to the current class instance, giving the closure access to private and protected class members',
            bn: 'এটি স্বয়ংক্রিয়ভাবে ক্লাসের বর্তমান ইনস্ট্যান্সের সাথে আবদ্ধ হয়, ফলে ক্লোজারটি প্রাইভেট ও প্রোটেক্টেড মেম্বার অ্যাক্সেস করতে পারে'
          },
          {
            en: '$this is permanently destroyed',
            bn: '$this স্থায়ীভাবে বিনষ্ট হয়ে যায়'
          },
          {
            en: 'It turns into a static string',
            bn: 'এটি একটি স্ট্যাটিক স্ট্রিংয়ে পরিণত হয়'
          },
          {
            en: 'The compiler throws a fatal syntax error unless prefixed with static',
            bn: 'static না লিখলে কম্পাইলার মারাত্মক সিনট্যাক্স এরর ছুড়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Closures defined within objects automatically bind $this to the containing instance.',
          bn: 'অবজেক্টের ভেতরে তৈরি ক্লোজারে $this স্বয়ংক্রিয়ভাবে ক্লাসের রেফারেন্স ধারণ করে।'
        },
        explanation: {
          en: 'PHP binds $this automatically inside non-static closures, allowing encapsulation-safe member access.',
          bn: 'নন-স্ট্যাটিক ক্লোজারে $this স্বয়ংক্রিয়ভাবে ক্লাসের অবজেক্ট নির্দেশ করে অভ্যন্তরীণ প্রপার্টি অ্যাক্সেস নিশ্চিত করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'forms-and-the-post',
    title: {
      en: 'HTTP Superglobals, Input Streams & Sanitization',
      bn: 'এইচটিটিপি সুপারগ্লোবাল, ইনপুট স্ট্রিম এবং স্যানিটাইজেশন'
    }
  }
};
