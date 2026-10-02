import type { Lesson } from '../../../lib/types';

export const FuncsAndTheLambdaLesson: Lesson = {
  slug: 'funcs-and-the-lambda',
  tech: 'scala',
  title: {
    en: 'Functional Programming & Lambdas: Higher-Order Functions & Currying',
    bn: 'ফাংশনাল প্রোগ্রামিং ও ল্যাম্বডা: হায়ার-অর্ডার ফাংশন ও কারিং'
  },
  summary: {
    en: 'Master functional programming in Scala: first-class functions, anonymous lambdas, higher-order functions (map, filter, fold), currying, partially applied functions, and placeholder syntax (_).',
    bn: 'স্কালাতে ফাংশনাল প্রোগ্রামিংয়ে দক্ষতা: ফার্স্ট-ক্লাস ফাংশন, বেনামী ল্যাম্বডা, হায়ার-অর্ডার ফাংশন (map, filter, fold), কারিং, আংশিক প্রয়োগকৃত ফাংশন এবং প্লেসহোল্ডার সিনট্যাক্স (_)।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'first-class-functions',
      text: {
        en: '1. First-Class Functions and Function Traits',
        bn: '১. ফার্স্ট-ক্লাস ফাংশন এবং ফাংশন ট্রেইট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you program in Scala, you treat functions as first-class citizens. Functions can be assigned to values (val f = (x: Int) => x * 2), passed as arguments into other routines, and returned dynamically from methods.',
        bn: 'যখন আপনি স্কালাতে কোড লেখেন, আপনি ফাংশনগুলোকে ফার্স্ট-ক্লাস সিটিজেন হিসেবে ব্যবহার করেন। ফাংশনগুলোকে ভেরিয়েবলে রাখা যায় (val f = (x: Int) => x * 2), অন্য রুটিনে আর্গুমেন্ট হিসেবে পাঠানো যায় এবং মেথড থেকে রিটার্নও করা যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Under the hood on the JVM, every function is an instance of a Scala Function trait (such as Function1[A, B] for single-argument lambdas or Function2[A, B, C] for 2-argument functions) implementing the apply() method.',
        bn: 'জেভিএমের নেপথ্যে প্রতিটি ফাংশন মূলত একটি স্কালা Function ট্রেইটের ইনস্ট্যান্স (যেমন ১ টি আর্গুমেন্টের জন্য Function1[A, B] কিংবা ২টি আর্গুমেন্টের জন্য Function2[A, B, C]) যা apply() মেথড বাস্তবায়ন করে।'
      }
    },
    {
      type: 'visual',
      id: 'hof-and-currying-diagram',
      title: {
        en: 'Higher-Order Functions & Currying Architecture',
        bn: 'হায়ার-অর্ডার ফাংশন ও কারিং আর্কিটেকচার'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Scala Functional Mechanics: HOFs &amp; Currying</text>' +
          '<!-- Column 1: Higher-Order Functions -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. HIGHER-ORDER FUNCTIONS (HOFs)</text>' +
            '<rect x="15" y="45" width="330" height="60" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="68" fill="#38bdf8" font-size="10" font-weight="bold">map: list.map(_ * 2)</text>' +
            '<text x="25" y="88" fill="#cbd5e1" font-size="9">Transforms List(1, 2, 3) &#x2192; List(2, 4, 6)</text>' +
            '<rect x="15" y="115" width="330" height="60" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="138" fill="#10b981" font-size="10" font-weight="bold">filter: list.filter(_ &gt;= 2)</text>' +
            '<text x="25" y="158" fill="#cbd5e1" font-size="9">Keeps elements matching predicate &#x2192; List(2, 3)</text>' +
            '<rect x="15" y="185" width="330" height="60" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="208" fill="#f59e0b" font-size="10" font-weight="bold">foldLeft: list.foldLeft(0)(_ + _)</text>' +
            '<text x="25" y="228" fill="#cbd5e1" font-size="9">Accumulates left-to-right from seed 0 &#x2192; 6</text>' +
            '<rect x="15" y="255" width="330" height="55" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="278" fill="#c084fc" font-size="10" font-weight="bold">@tailrec: Tail Call Optimization</text>' +
            '<text x="25" y="296" fill="#cbd5e1" font-size="9">Compiles recursion into a JVM loop with 0 stack growth</text>' +
          '</g>' +
          '<!-- Column 2: Currying -->' +
          '<g transform="translate(410, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">2. CURRYING &amp; MULTIPLE PARAMETER LISTS</text>' +
            '<rect x="15" y="45" width="330" height="75" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="68" fill="#facc15" font-size="11" font-weight="bold">def add(x: Int)(y: Int): Int = x + y</text>' +
            '<text x="25" y="88" fill="#cbd5e1" font-size="9">Transforms f(x, y) into a chain: f(x) &#x2192; g(y)</text>' +
            '<text x="25" y="105" fill="#34d399" font-size="9">val addTen = add(10) // Partially applied function</text>' +
            '<rect x="15" y="130" width="330" height="85" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="152" fill="#38bdf8" font-size="10" font-weight="bold">Enables Clean DSL Syntax:</text>' +
            '<text x="25" y="172" fill="#cbd5e1" font-size="9">Using curly braces on final parameter list:</text>' +
            '<text x="25" y="190" fill="#38bdf8" font-size="9" font-family="monospace">myTransaction("tx1") { connection &#x2192; ... }</text>' +
            '<rect x="15" y="225" width="330" height="85" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="248" fill="#fbbf24" font-size="10" font-weight="bold">Implicit / Using Parameters in Scala 3:</text>' +
            '<text x="25" y="268" fill="#cbd5e1" font-size="9">def query(sql: String)(using ctx: DbContext)</text>' +
            '<text x="25" y="288" fill="#34d399" font-size="9">Compiler automatically injects matching contextual beans</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'placeholder-syntax',
      text: {
        en: '2. The Placeholder Syntax (_)',
        bn: '২. প্লেসহোল্ডার সিনট্যাক্স (_)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Scala provides concise lambda notation using the underscore (_) placeholder. When an argument appears exactly once in an anonymous function expression, you can omit the explicit parameter definition: numbers.map(x => x * 2) condenses into numbers.map(_ * 2). Multiple underscores represent successive arguments: (a, b) => a + b becomes _ + _.',
        bn: 'স্কালা আন্ডারস্কোর (_) প্লেসহোল্ডার ব্যবহার করে অতি সংক্ষেপে ল্যাম্বডা লেখার সুযোগ দেয়। যখন কোনো আর্গুমেন্ট ফাংশনের ভেতর ঠিক একবারই ব্যবহৃত হয়, তখন আর্গুমেন্টের নাম না লিখে _ ব্যবহার করা যায়: numbers.map(x => x * 2) খুব সংক্ষেপে numbers.map(_ * 2) হয়ে যায়। একাধিক আন্ডারস্কোর ক্রমান্বয়ে একাধিক আর্গুমেন্ট নির্দেশ করে: যেমন (a, b) => a + b হয়ে যায় _ + _।'
      }
    },
    {
      type: 'heading',
      id: 'currying-details',
      text: {
        en: '3. Currying and Multiple Parameter Lists',
        bn: '৩. কারিং এবং একাধিক প্যারামিটার তালিকা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Currying is the process of translating a function taking multiple arguments into a sequence of functions, each taking a single argument. In Scala, currying is natively supported via multiple parameter lists: def multiply(rate: Double)(amount: Double): Double = rate * amount.',
        bn: 'কারিং (Currying) হলো একাধিক আর্গুমেন্ট গ্রহণকারী ফাংশনকে একের পর এক একক আর্গুমেন্ট গ্রহণকারী ফাংশনের শৃঙ্খলে রূপান্তর করার প্রক্রিয়া। স্কালাতে একাধিক প্যারামিটার তালিকার মাধ্যমে কারিং সরাসরি সমর্থিত: def multiply(rate: Double)(amount: Double): Double = rate * amount।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. Scala Functional Engine in TypeScript',
        bn: '৪. TypeScript এ স্কালা ফাংশনাল ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates higher-order function transformations (map, filter, foldLeft), lambda closures, and curried function execution:',
        bn: 'নিচের TypeScript প্রোগ্রামটি হায়ার-অর্ডার ফাংশন (map, filter, foldLeft), ল্যাম্বডা ক্লোজার্স এবং কারিড ফাংশনের কার্যপদ্ধতি প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Scala higher-order functions (map, filter, foldLeft) and curried functions.',
        bn: 'স্কালা হায়ার-অর্ডার ফাংশন (map, filter, foldLeft) এবং কারিড ফাংশনের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of Scala Higher-Order Functions and Currying

// 1. Immutable List with HOFs
class ScalaList<T> {
  private items: T[];

  constructor(elements: T[]) {
    this.items = [...elements];
  }

  // map: (T => U) => ScalaList[U]
  map<U>(fn: (item: T) => U): ScalaList<U> {
    const result: U[] = [];
    for (const x of this.items) {
      result.push(fn(x));
    }
    return new ScalaList<U>(result);
  }

  // filter: (T => Boolean) => ScalaList[T]
  filter(predicate: (item: T) => boolean): ScalaList<T> {
    const result: T[] = [];
    for (const x of this.items) {
      if (predicate(x)) {
        result.push(x);
      }
    }
    return new ScalaList<T>(result);
  }

  // foldLeft: Seed => ((Acc, T) => Acc) => Acc
  foldLeft<Acc>(seed: Acc, op: (accumulator: Acc, item: T) => Acc): Acc {
    let current = seed;
    for (const x of this.items) {
      current = op(current, x);
    }
    return current;
  }

  toArray(): T[] {
    return [...this.items];
  }
}

// 2. Curried Function Simulation: def calculateTax(rate: number)(price: number): number
function calculateTax(rate: number): (price: number) => number {
  return function (price: number): number {
    return Math.round(price * (1 + rate));
  };
}

// Demonstration
// 1. Test Higher-Order Functions
const numbers = new ScalaList<number>([10, 20, 30, 40]);

// map equivalent to numbers.map(_ * 2)
const doubled = numbers.map((n) => n * 2);
console.log('Doubled list: ' + doubled.toArray().join(', ')); // -> 20, 40, 60, 80

// filter equivalent to numbers.filter(_ > 20)
const filtered = numbers.filter((n) => n > 20);
console.log('Filtered items (> 20): ' + filtered.toArray().join(', ')); // -> 30, 40

// foldLeft equivalent to numbers.foldLeft(0)(_ + _)
const sumTotal = numbers.foldLeft(0, (acc, n) => acc + n);
console.log('Fold left accumulated sum: ' + sumTotal); // -> 100

// 2. Test Curried Tax Calculator
const vatCalculator = calculateTax(0.15); // Partially applied function (15% VAT)
const finalPrice1 = vatCalculator(100);
const finalPrice2 = vatCalculator(200);

console.log('Final price for 100 with 15% VAT: ' + finalPrice1); // -> 115
console.log('Final price for 200 with 15% VAT: ' + finalPrice2); // -> 230`
    }
  ],
  exercises: [
    {
      id: 'func-ex-1',
      kind: 'mcq',
      question: {
        en: 'What does the concise expression list.map(_ * 2) evaluate to in Scala?',
        bn: 'স্কালাতে সংক্ষিপ্ত এক্সপ্রেশন list.map(_ * 2) কী মান প্রদান করে?'
      },
      options: [
        {
          en: 'It transforms every element by multiplying it by 2, equivalent to list.map(x => x * 2)',
          bn: 'এটি প্রতিটি উপাদানকে ২ দিয়ে গুণ করে নতুন তালিকা দেয়, যা list.map(x => x * 2) এর হুবহু সমতুল্য'
        },
        {
          en: 'It removes all elements smaller than 2',
          bn: 'এটি ২ এর চেয়ে ছোট تمام উপাদান মুছে দেয়'
        },
        {
          en: 'It prints the number 2 to the system console twice',
          bn: 'এটি সিস্টেম কনসোলে ২ সংখ্যাটিকে দুবার প্রিন্ট করে'
        },
        {
          en: 'It throws an undefined variable error for underscore',
          bn: 'আন্ডারস্কোরের জন্য আনডিফাইন্ড ভেরিয়েবল এরর তৈরি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The underscore is Scala placeholder syntax for lambda parameters.',
        bn: 'আন্ডারস্কোর হলো ল্যাম্বডা প্যারামিটারের জন্য স্কেলার প্লেসহোল্ডার সিনট্যাক্স।'
      },
      explanation: {
        en: 'The underscore (_) is Scala\'s placeholder syntax, allowing single-use lambda parameters to be expressed concisely without explicitly naming them.',
        bn: 'স্কালাতে একবার ব্যবহৃত ল্যাম্বডা প্যারামিটারের নাম না লিখে _ প্লেসহোল্ডার দিয়ে অতি সংক্ষেপে এক্সপ্রেশন লেখা যায়।'
      }
    },
    {
      id: 'func-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the purpose of the @tailrec annotation on recursive methods in Scala?',
        bn: 'স্কালাতে রিকার্সিভ মেথডের ওপর @tailrec অ্যানোটেশন ব্যবহারের উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It instructs the compiler to verify that recursion is in tail position and compile it into a loop with zero stack growth',
          bn: 'এটি কম্পাইলারকে নিশ্চিত করতে বাধ্য করে যে রিকার্সনটি টেইল পজিশনে আছে এবং কোনো স্ট্যাক মেমরি খরচ ছাড়াই এটিকে লুপে রূপান্তর করে'
        },
        {
          en: 'It terminates recursion after exactly 10 iterations',
          bn: 'এটি ঠিক ১০ টি ইটারেশনের পর রিকার্সন জোর করে বন্ধ করে দেয়'
        },
        {
          en: 'It runs the recursion on a GPU shader core',
          bn: 'এটি জিপিইউ শেডার কোরে রিকার্সন চালায়'
        },
        {
          en: 'It converts numbers into strings automatically',
          bn: 'এটি নিজে থেকেই সংখ্যাকে স্ট্রিংয়ে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Tail call optimization eliminates StackOverflowError.',
        bn: 'টেইল কল অপ্টিমাইজেশন স্ট্যাকওভারফ্লো এরর দূর করে।'
      },
      explanation: {
        en: '@tailrec instructs scalac to verify tail call optimization; if the recursive call is not in tail position, compilation fails with an error.',
        bn: '@tailrec নিশ্চিত করে যে রিকার্সিভ কলটি টেইল পজিশনে রয়েছে, ফলে কম্পাইলার একে নিরাপদ লুপে রূপান্তর করতে পারে।'
      }
    },
    {
      id: 'func-ex-3',
      kind: 'mcq',
      question: {
        en: 'What is currying in Scala method signatures (e.g. def f(a: Int)(b: Int): Int)?',
        bn: 'স্কালা মেথড সিগনেচারে কারিং (যেমন def f(a: Int)(b: Int): Int) বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'Structuring a function into multiple consecutive parameter lists so arguments can be supplied one list at a time',
          bn: 'ফাংশনটিকে একাধিক ধারাবাহিক প্যারামিটার তালিকায় বিভক্ত করা যাতে একবারে একটি তালিকা আর্গুমেন্ট হিসেবে পাস করা যায়'
        },
        {
          en: 'A method that can only be invoked during breakfast hours',
          bn: 'এমন একটি মেথড যা কেবল সকালের নাস্তার সময় কল করা যায়'
        },
        {
          en: 'An encryption algorithm for password hashes',
          bn: 'পাসওয়ার্ড হ্যাশ তৈরির একটি এনক্রিপশন অ্যালগরিদম'
        },
        {
          en: 'A tool for connecting to relational databases',
          bn: 'রিলেশনাল ডাটাবেজে সংযোগ তৈরির একটি টুল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Currying splits parameters across multiple parentheses lists.',
        bn: 'কারিং প্যারামিটারগুলোকে একাধিক বন্ধনী তালিকায় ভাগ করে।'
      },
      explanation: {
        en: 'Currying converts a method with multiple arguments into a chain of single-argument function applications using multiple parameter lists.',
        bn: 'কারিং একটি বহু-আর্গুমেন্টের মেথডকে একের পর এক প্যারামিটার তালিকা গ্রহণের মাধ্যমে আংশিক ফাংশন রূপান্তরের সুযোগ দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-funcs-and-the-lambda',
    title: {
      en: 'Scala Functional Programming and Lambdas Quiz',
      bn: 'স্কালা ফাংশনাল প্রোগ্রামিং ও ল্যাম্বডা কুইজ'
    },
    questions: [
      {
        id: 'func-q1',
        kind: 'mcq',
        question: {
          en: 'What higher-order collection method collapses elements from left to right starting from an explicit initial accumulator seed?',
          bn: 'একটি নির্দিষ্ট প্রাথমিক সীড মান দিয়ে শুরু করে বাম থেকে ডানে উপাদানগুলোকে একত্রিত করে কোন হায়ার-অর্ডার কালেকশন মেথড?'
        },
        options: [
          {
            en: 'foldLeft (e.g. list.foldLeft(0)(_ + _))',
            bn: 'foldLeft (যেমন list.foldLeft(0)(_ + _))'
          },
          {
            en: 'filter',
            bn: 'filter'
          },
          {
            en: 'flatten',
            bn: 'flatten'
          },
          {
            en: 'takeRight',
            bn: 'takeRight'
          }
        ],
        answer: 0,
        hint: {
          en: 'Folding accumulates from a starting seed.',
          bn: 'ফোল্ডিং একটি প্রাথমিক সীড মান থেকে সঞ্চয়ন করে।'
        },
        explanation: {
          en: 'foldLeft takes a starting accumulator seed and a binary operator, applying it sequentially from the first to the last element.',
          bn: 'foldLeft একটি প্রারম্ভিক সীড এবং বাইনারি অপারেটর নিয়ে প্রথম থেকে শেষ উপাদান পর্যন্ত সঞ্চয়ন চালায়।'
        }
      },
      {
        id: 'func-q2',
        kind: 'mcq',
        question: {
          en: 'What happens when you partially apply a curried method def multiply(x: Int)(y: Int) by writing multiply(5)?',
          bn: 'একটি কারিড মেথড def multiply(x: Int)(y: Int) এ multiply(5) লিখে আংশিক প্রয়োগ করলে কী ঘটে?'
        },
        options: [
          {
            en: 'It returns a new function of type Int => Int waiting for the second argument y',
            bn: 'এটি Int => Int টাইপের একটি নতুন ফাংশন প্রদান করে যা দ্বিতীয় আর্গুমেন্ট y এর অপেক্ষায় থাকে'
          },
          {
            en: 'It immediately throws an IllegalArgumentException',
            bn: 'এটি তাৎক্ষণিকভাবে IllegalArgumentException নিক্ষেপ করে'
          },
          {
            en: 'It returns 0 by default',
            bn: 'এটি ডিফল্টভাবে ০ ফেরত দেয়'
          },
          {
            en: 'It deletes the method from memory',
            bn: 'এটি মেমরি থেকে মেথডটি মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Partial application fixes the first argument and returns the remaining function.',
          bn: 'আংশিক প্রয়োগ প্রথম আর্গুমেন্টকে স্থির রেখে বাকি অংশের জন্য ফাংশন দেয়।'
        },
        explanation: {
          en: 'Supplying fewer parameter lists than defined produces a partially applied function waiting for the remaining arguments.',
          bn: 'প্রয়োজনীয় সংখ্যার চেয়ে কম প্যারামিটার তালিকা প্রদান করলে বাকি তালিকার জন্য একটি আংশিক প্রয়োগকৃত ফাংশন তৈরি হয়।'
        }
      },
      {
        id: 'func-q3',
        kind: 'mcq',
        question: {
          en: 'In Scala lambda syntax, what does (x: Int, y: Int) => x + y compile to under the hood on the JVM?',
          bn: 'স্কালা ল্যাম্বডা সিনট্যাক্সে (x: Int, y: Int) => x + y জেভিএমে নেপথ্যে কীসে কম্পাইল হয়?'
        },
        options: [
          {
            en: 'An anonymous class implementing the scala.Function2[Int, Int, Int] trait with an apply method',
            bn: 'একটি অ্যানোনিমাস ক্লাস যা apply মেথড সহ scala.Function2[Int, Int, Int] ট্রেইট বাস্তবায়ন করে'
          },
          {
            en: 'A static C pointer to heap memory',
            bn: 'হিপ মেমরির একটি স্ট্যাটিক C পয়েন্টার'
          },
          {
            en: 'A shell script executed by /bin/bash',
            bn: '/bin/bash দিয়ে রান হওয়া একটি শেল স্ক্রিপ্ট'
          },
          {
            en: 'A raw database SQL view',
            bn: 'একটি ডাটাবেজ SQL ভিউ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Functions in Scala are instances of FunctionN traits.',
          bn: 'স্কালাতে ফাংশনগুলো FunctionN ট্রেইটের ইনস্ট্যান্স।'
        },
        explanation: {
          en: 'Every function literal in Scala is instantiated as a FunctionN trait object (Function0 to Function22) whose apply() method executes the body.',
          bn: 'স্কালাতে প্রতিটি ল্যাম্বডা ফাংশন FunctionN ট্রেইটের একটি অবজেক্ট হিসেবে রূপ পায় এবং এর apply() মেথডটি রান হয়।'
        }
      },
      {
        id: 'func-q4',
        kind: 'mcq',
        question: {
          en: 'What is the type of an anonymous function that takes a String and returns its length as an Int?',
          bn: 'একটি বেনামী ফাংশন যা একটি String নেয় এবং তার দৈর্ঘ্য Int হিসেবে ফেরত দেয়, তার টাইপ সিগনেচার কোনটি?'
        },
        options: [
          {
            en: 'String => Int',
            bn: 'String => Int'
          },
          {
            en: 'Int => String',
            bn: 'Int => String'
          },
          {
            en: '(String, Int) => Unit',
            bn: '(String, Int) => Unit'
          },
          {
            en: 'Function0[String]',
            bn: 'Function0[String]'
          }
        ],
        answer: 0,
        hint: {
          en: 'Arrow notation: InputType => OutputType.',
          bn: 'তীর চিহ্ন সিনট্যাক্স: InputType => OutputType।'
        },
        explanation: {
          en: 'In Scala, function types are denoted using the arrow syntax: InputType => ReturnType. Thus, a function from String to Int has type String => Int.',
          bn: 'স্কালাতে ফাংশন টাইপ লেখা হয় InputType => ReturnType নিয়মে, তাই String থেকে Int এর টাইপ হলো String => Int।'
        }
      },
      {
        id: 'func-q5',
        kind: 'mcq',
        question: {
          en: 'Why is placeholder syntax numbers.reduce(_ + _) preferred over (a, b) => a + b in idiomatic Scala?',
          bn: 'মানসম্মত স্কালাতে (a, b) => a + b এর বদলে প্লেসহোল্ডার সিনট্যাক্স numbers.reduce(_ + _) কেন বেশি পছন্দ করা হয়?'
        },
        options: [
          {
            en: 'It reduces boilerplate syntax while maintaining full compile-time type safety',
            bn: 'এটি সম্পূর্ণ টাইপ নিরাপত্তা বজায় রেখে অতিরিক্ত বয়লারপ্লেট কোড কমায়'
          },
          {
            en: 'It runs 100 times faster because it bypasses the JVM compiler',
            bn: 'এটি জেভিএম কম্পাইলার বাইপাস করে ১০০ গুণ দ্রুত রান করে'
          },
          {
            en: 'Because using letters like "a" and "b" is illegal in Scala 3',
            bn: 'কারণ স্কালা ৩ এ "a" এবং "b" এর মতো বর্ণ ব্যবহার করা নিষিদ্ধ'
          },
          {
            en: 'It saves the output directly to a cloud AWS bucket',
            bn: 'এটি সরাসরি ক্লাউড AWS বাকেটে ফলাফল সংরক্ষণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Conciseness without sacrificing type safety.',
          bn: 'টাইপ নিরাপত্তা অক্ষুণ্ণ রেখে কোডের সংক্ষিপ্ততা ও স্পষ্টতা।'
        },
        explanation: {
          en: 'Placeholder syntax allows concise, declarative functional programming by eliminating arbitrary variable naming when parameters are used only once.',
          bn: 'প্যারামিটার মাত্র একবার ব্যবহৃত হলে অপ্রয়োজনীয় নাম বাদ দিয়ে প্লেসহোল্ডার সিনট্যাক্স কোডকে পরিচ্ছন্ন ও প্রকাশক্ষম করে তোলে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'cases-and-the-class',
    title: {
      en: 'Case Classes & Pattern Matching: Algebraic Data Types & Sealed Trees',
      bn: 'কেস ক্লাস ও প্যাটার্ন ম্যাচিং: অ্যালজেব্রাইক ডাটা টাইপ ও সিলড ট্রি'
    }
  }
};
