import type { Lesson } from '../../../lib/types';

export const DecoratorsAndTheAtLesson: Lesson = {
  slug: 'decorators-and-the-at',
  tech: 'lang-python',
  title: {
    en: 'First-Class Functions, Closures & Decorators',
    bn: 'ফার্স্ট-ক্লাস ফাংশন, ক্লোজার এবং ডেকোরেটর'
  },
  summary: {
    en: 'Master metaprogramming in Python: leverage first-class function objects and lexical closures, construct function decorators with @ syntax, preserve function introspection metadata using @functools.wraps, and build parameterized decorator factories handling cross-cutting concerns like logging and timing.',
    bn: 'পাইথনে মেটাপ্রোগ্রামিং আয়ত্ত করুন: ফার্স্ট-ক্লাস ফাংশন অবজেক্ট ও লেক্সিক্যাল ক্লোজার, @ সিনট্যাক্স দিয়ে ফাংশন ডেকোরেটর তৈরি, @functools.wraps দিয়ে মেটাডেটা সংরক্ষণ এবং লগিং ও পারফরম্যান্স পরিমাপে প্যারামিটারাইজড ডেকোরেটর ফ্যাক্টরি তৈরি।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'first-class-closures-heading',
      text: {
        en: 'First-Class Functions, Lexical Closures, and the @ Decorator Sugar',
        bn: 'ফার্স্ট-ক্লাস ফাংশন, লেক্সিক্যাল ক্লোজার এবং @ ডেকোরেটর সিনট্যাক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Python (the versatile high-level language), functions are first-class citizens: they can be assigned to variables, passed into arguments, and returned from other functions. When an inner function references variables from its enclosing scope, Python constructs a closure that preserves those variable bindings even after the outer function finishes executing. A decorator is a callable that accepts a target function, wraps it with additional behavior, and returns the modified wrapper. The @decorator syntax provides clean syntactic sugar: @audit placed above def save() is structurally identical to save = audit(save).',
        bn: 'পাইথন (বহুমুখী উচ্চ-স্তরের প্রোগ্রামিং ভাষা) এ ফাংশনগুলো ফার্স্ট-ক্লাস অবজেক্ট: এদের ভেরিয়েবলে রাখা যায়, আর্গুমেন্ট হিসেবে অন্য ফাংশনে পাঠানো যায় এবং ফাংশন থেকেও রিটার্ন করা যায়। যখন কোনো অভ্যন্তরীণ ফাংশন বাইরের স্কোপের ভেরিয়েবল ব্যবহার করে, তখন পাইথন একটি ক্লোজার তৈরি করে যা বাইরের ফাংশন শেষ হওয়ার পরেও সেই মানগুলো মনে রাখে। ডেকোরেটর হলো একটি কলযোগ্য অবজেক্ট যা কোনো ফাংশনকে ইনপুট হিসেবে নিয়ে অতিরিক্ত সুবিধা যোগ করে একটি নতুন র‍্যাপার রিটার্ন করে। @decorator সিনট্যাক্স মূলত কোড পরিচ্ছন্ন রাখার উপায়: def save() এর ওপর @audit লেখা আর save = audit(save) লেখা পুরোপুরি একই।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural flow of a Python decorator intercepting execution with pre-processing, invocation, and post-processing.',
        bn: 'চিত্র ১: প্রি-প্রসেসিং, মূল ফাংশন এক্সিকিউশন এবং পোস্ট-প্রসেসিং সহ পাইথন ডেকোরেটরের কাঠামোগত কার্যপ্রবাহ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PYTHON FUNCTION DECORATOR INTERCEPTION PIPELINE</text>

  <!-- Step 1: Caller Request -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Client Caller</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="10" font-family="monospace">order.process()</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">Invokes target</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Calls wrapper</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Transparent Call</text>
  </g>

  <!-- Step 2: Pre-Execution Interception -->
  <g transform="translate(230, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Wrapper Pre-Hook</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">t0 = perf_counter()</text>
    <text x="15" y="85" fill="#fbbf24" font-size="9" font-family="monospace">Log ingress args</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Auth / Rate checks</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Pre-Flight Complete</text>
  </g>

  <!-- Step 3: Target Function Execution -->
  <g transform="translate(435, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#d97706" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Wrapped Function</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">result = fn(*args)</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">Original domain work</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Database &amp; Math</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Captures Output</text>
  </g>

  <!-- Step 4: Post-Hook & Return -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Post-Hook Exit</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">elapsed = t1 - t0</text>
    <text x="15" y="85" fill="#34d399" font-size="9" font-family="monospace">Emit telemetry</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">return result</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Returns to Caller</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'functools-wraps-and-parameters-heading',
      text: {
        en: 'Preserving Metadata with @functools.wraps and Parameterized Decorators',
        bn: '@functools.wraps দিয়ে মেটাডেটা সংরক্ষণ এবং প্যারামিটারাইজড ডেকোরেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a function is decorated, its identity is silently replaced by the wrapper function, erasing its original __name__, __doc__, and type annotations. To prevent breaking reflection, logging, and unit tests, developers must decorate the wrapper with @functools.wraps(fn). For decorators that accept configuration parameters (such as @retry(max_attempts=3)), a 3-level nesting factory pattern is used: an outer function accepts configuration parameters, an intermediate function receives the target callable, and the inner wrapper executes runtime logic.',
        bn: 'যখন কোনো ফাংশনকে ডেকোরেট করা হয়, তখন তার আসল পরিচয় ভেতরের র‍্যাপার ফাংশন দ্বারা প্রতিস্থাপিত হয়, ফলে তার মূল __name__, __doc__ এবং টাইপ তথ্য মুছে যায়। ইউনিট টেস্টিং এবং ডিবাগিংয়ে বিভ্রান্তি এড়াতে সর্বদা র‍্যাপারের ওপর @functools.wraps(fn) ডেকোরেটর ব্যবহার করা উচিত। আর কনফিগারেশন প্যারামিটার গ্রহণ করতে পারে এমন ডেকোরেটরের ক্ষেত্রে (যেমন @retry(max_attempts=3)) ৩ স্তরের নেস্টেড ফাংশন কাঠামো ব্যবহার করা হয়: বাইরের ফাংশন প্যারামিটার নেয়, মধ্যবর্তী ফাংশন মূল ফাংশনটি গ্রহণ করে এবং ভেতরের র‍্যাপারটি মূল কোড পরিচালনা করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Python function decorator wrapper with latency timing and metadata retention.',
        bn: 'লেটেন্সি টাইমিং এবং মেটাডেটা সংরক্ষণ সহ পাইথন ফাংশন ডেকোরেটরের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Python Decorators, Closures, and Metadata Preservation

interface DecoratedFunction {
  (...args: any[]): any;
  originalName: string;
}

// Simulating @timing_decorator with metadata preservation
export function timingDecorator(targetFn: (...args: any[]) => any): DecoratedFunction {
  const wrapper = function (...args: any[]) {
    const t0 = Date.now();
    const result = targetFn(...args);
    const elapsed = Date.now() - t0;
    console.log('Function ' + targetFn.name + ' executed in ' + elapsed + 'ms');
    return result;
  };

  // Simulating @functools.wraps: copying original metadata
  (wrapper as any).originalName = targetFn.name;
  return wrapper as DecoratedFunction;
}

// Target domain function
function calculateDiscount(price: number, percent: number): number {
  return price - (price * (percent / 100));
}

// Applying decorator: calculateDiscount = timingDecorator(calculateDiscount)
const decoratedCalculate = timingDecorator(calculateDiscount);

const finalPrice = decoratedCalculate(200, 15);
console.log('Final Calculated Price:', finalPrice); // -> 170
console.log('Preserved Original Name:', decoratedCalculate.originalName); // -> calculateDiscount`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Decorator',
          def: {
            en: 'Higher-order callable wrapping another function or class to dynamically extend behavior without modifying source code.',
            bn: 'হায়ার-অর্ডার ফাংশন যা অন্য কোনো ফাংশন বা ক্লাসের মূল কোড না বদলেই তার কাজের পরিধি বৃদ্ধি করে।'
          }
        },
        {
          term: 'Lexical Closure',
          def: {
            en: 'Function retaining references to variables in its enclosing scope even after the outer function has returned.',
            bn: 'ফাংশনের এমন রূপ যা বাইরের ফাংশনের কাজ শেষ হয়ে যাওয়ার পরও তার ভেতরের ভেরিয়েবলগুলোকে মনে রাখে।'
          }
        },
        {
          term: '@functools.wraps',
          def: {
            en: 'Standard library decorator copying original function attributes (__name__, __doc__) onto the wrapper callable.',
            bn: 'স্ট্যান্ডার্ড লাইব্রেরির ডেকোরেটর যা মূল ফাংশনের নাম ও ডকস্ট্রিং র‍্যাপার ফাংশনে হুবহু কপি করে সংরক্ষণ করে।'
          }
        },
        {
          term: 'Decorator Factory',
          def: {
            en: 'Outer function accepting configuration arguments that returns a decorator callable, enabling parameterized decorators.',
            bn: 'বাইরের ফাংশন যা কনফিগারেশন প্যারামিটার গ্রহণ করে একটি ডেকোরেটর রিটার্ন করার মাধ্যমে প্যারামিটারাইজড ডেকোরেটর তৈরি করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'decorator-syntactic-sugar-equivalence-ex1',
      kind: 'mcq',
      topic: 'decorator-syntactic-sugar-equivalence',
      question: {
        en: 'What is the precise structural equivalent of placing @log_action directly above def update_user(user_id): in Python?',
        bn: 'পাইথনে def update_user(user_id): এর ঠিক ওপরে @log_action লেখার সুনির্দিষ্ট সমতুল্য রূপ কোনটি?'
      },
      options: [
        { en: 'update_user = log_action(update_user)', bn: 'update_user = log_action(update_user)' },
        { en: 'log_action = update_user(log_action)', bn: 'log_action = update_user(log_action)' },
        { en: 'update_user.log_action()', bn: 'update_user.log_action()' },
        { en: 'import log_action.update_user', bn: 'import log_action.update_user' }
      ],
      answer: 0,
      hint: {
        en: 'The decorator accepts the original function as an argument and binds the return value to the function name.',
        bn: 'ডেকোরেটর মূল ফাংশনটিকে আর্গুমেন্ট হিসেবে নেয় এবং প্রাপ্ত ফলাফল ফাংশনের নামে পুনরায় বরাদ্দ করে।'
      },
      explanation: {
        en: '@decorator is syntactic sugar for rebinding the target name to decorator(target).',
        bn: '@decorator হলো মূলত target = decorator(target) স্টেটমেন্টটির একটি সহজ সিনট্যাক্স।'
      }
    },
    {
      id: 'functools-wraps-metadata-loss-ex2',
      kind: 'mcq',
      topic: 'functools-wraps-preserves-docstring',
      question: {
        en: 'Why is applying @functools.wraps(fn) inside a custom decorator wrapper considered best practice?',
        bn: 'কাস্টম ডেকোরেটর র‍্যাপারের ভেতর @functools.wraps(fn) প্রয়োগ করা সর্বোত্তম অনুশীলন কেন?'
      },
      options: [
        {
          en: 'It copies original function attributes (like __name__, __doc__, and annotations) to the wrapper, preventing metadata loss during introspection',
          bn: 'এটি মূল ফাংশনের নাম, ডকস্ট্রিং ও অ্যানোটেশন র‍্যাপারে কপি করে রাখে, ফলে ডিবাগিং ও টেস্টিংয়ে তথ্যের ক্ষতি হয় না'
        },
        {
          en: 'It doubles the CPU execution speed of the function',
          bn: 'এটি ফাংশনের সিপিইউ এক্সিকিউশন গতি দ্বিগুণ করে দেয়'
        },
        {
          en: 'It encrypts the function bytecode using SHA-256',
          bn: 'এটি ফাংশনের বাইটকোড SHA-256 দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'It prevents the function from ever raising any exceptions',
          bn: 'এটি ফাংশনকে কোনো এক্সেপশন ছুড়তে বাধা দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Without functools.wraps, introspection tools see the wrapper function name instead of the original function name.',
        bn: 'functools.wraps না দিলে মূল ফাংশনের নামের বদলে র‍্যাপারের নাম দেখা যায়।'
      },
      explanation: {
        en: '@functools.wraps preserves original callable metadata, enabling accurate debugging, doc generation, and test reporting.',
        bn: '@functools.wraps মূল ফাংশনের নাম ও বিবরণ ঠিক রেখে সঠিক ডিবাগিং ও টেস্টিং নিশ্চিত করে।'
      }
    },
    {
      id: 'parameterized-decorator-nesting-levels-ex3',
      kind: 'mcq',
      topic: 'parameterized-decorator-nesting-depth',
      question: {
        en: 'How many levels of nested functions are required to implement a decorator that accepts configuration arguments like @repeat(times=3)?',
        bn: '@repeat(times=3) এর মতো কনফিগারেশন প্যারামিটার গ্রহণকারী ডেকোরেটর তৈরি করতে কত স্তরের নেস্টেড ফাংশন প্রয়োজন হয়?'
      },
      options: [
        {
          en: '3 levels: an outer factory function receiving arguments, an intermediate decorator receiving the target function, and an inner wrapper executing the call',
          bn: '৩ টি স্তর: বাইরের ফ্যাক্টরি ফাংশন যা আর্গুমেন্ট গ্রহণ করে, মধ্যবর্তী ডেকোরেটর যা মূল ফাংশন গ্রহণ করে এবং ভেতরের র‍্যাপার যা কোড চালায়'
        },
        { en: '1 level only', bn: 'কেবল ১ টি স্তর' },
        { en: '5 levels', bn: '৫ টি স্তর' },
        { en: 'Parameterized decorators are impossible in Python', bn: 'পাইথনে প্যারামিটারযুক্ত ডেকোরেটর তৈরি অসম্ভব' }
      ],
      answer: 0,
      hint: {
        en: 'Outer takes configuration, middle takes function, inner takes *args and **kwargs.',
        bn: 'বাইরের ফাংশন কনফিগারেশন নেয়, মাঝের ফাংশন মূল ফাংশন নেয় এবং ভেতরের ফাংশন মূল আর্গুমেন্ট নিয়ে চলে।'
      },
      explanation: {
        en: 'A decorator factory returns a decorator, which in turn returns a wrapper, requiring 3 nested function scopes.',
        bn: 'ডেকোরেটর ফ্যাক্টরি একটি ডেকোরেটর দেয় যা পরবর্তীতে র‍্যাপার রিটার্ন করে, তাই মোট ৩ স্তরের ফাংশন লাগে।'
      }
    },
    {
      id: 'decorator-stacking-evaluation-order-ex4',
      kind: 'mcq',
      topic: 'decorator-stacking-application-order',
      question: {
        en: 'Given stacked decorators @dec1 followed immediately by @dec2 above def hello():, in what order are they applied to hello?',
        bn: 'def hello(): এর ঠিক ওপরে @dec1 এবং তার নিচে @dec2 থাকলে তারা কোন ক্রমে hello এর ওপর প্রয়োগ হয়?'
      },
      options: [
        {
          en: 'Bottom-up: @dec2 wraps hello first, and @dec1 wraps the resulting function: dec1(dec2(hello))',
          bn: 'নিচ থেকে ওপরে: প্রথমে @dec2 মূল ফাংশনকে র‍্যাপ করে, তারপর @dec1 সেই ফলাফলকে র‍্যাপ করে: dec1(dec2(hello))'
        },
        {
          en: 'Top-down: @dec1 wraps hello first: dec2(dec1(hello))',
          bn: 'উপর থেকে নিচে: প্রথমে @dec1 মূল ফাংশনকে র‍্যাপ করে: dec2(dec1(hello))'
        },
        {
          en: 'They execute simultaneously in parallel CPU threads',
          bn: 'তারা সমান্তরাল সিপিইউ থ্রেডে একসাথে চলে'
        },
        {
          en: 'Stacking decorators is forbidden in Python grammar',
          bn: 'পাইথনে একের অধিক ডেকোরেটর একসাথে ব্যবহার করা নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Decorators are evaluated bottom-to-top, wrapping from inside out.',
        bn: 'ডেকোরেটর নিচ থেকে ওপরে কার্যকর হয়, অর্থাৎ ভেতরের স্তর আগে মোড়ানো হয়।'
      },
      explanation: {
        en: 'Stacking evaluates nearest to the definition first: @dec1 @dec2 def f translates directly to f = dec1(dec2(f)).',
        bn: 'ফাংশনের সবচেয়ে কাছের ডেকোরেটরটি আগে কাজ করে, ফলে f = dec1(dec2(f)) আকারে কার্যকর হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-decorators-and-the-at',
    title: {
      en: 'Python Decorators and Closures Quiz',
      bn: 'পাইথন ডেকোরেটর এবং ক্লোজার কুইজ'
    },
    questions: [
      {
        id: 'quiz-decorator-timing-at-import-time',
        kind: 'mcq',
        topic: 'decorator-execution-timing-import',
        question: {
          en: 'When does the code inside a decorator function itself execute: when the module is imported, or when the decorated function is called?',
          bn: 'ডেকোরেটর ফাংশনের নিজস্ব কোড কখন কার্যকর হয়: যখন মডিউল ইমপোর্ট করা হয়, নাকি যখন ডেকোরেট করা ফাংশনটি কল করা হয়?'
        },
        options: [
          {
            en: 'At module import/load time when the function definition is executed, while the returned inner wrapper executes at call time',
            bn: 'মডিউল ইমপোর্ট বা লোড করার সময় যখন ফাংশনটি সংজ্ঞায়িত হয়, আর ভেতরের র‍্যাপার ফাংশনটি চলে প্রতিবার ফাংশন কল করার সময়'
          },
          {
            en: 'Only when the decorated function is explicitly called by a client',
            bn: 'কেবলমাত্র যখন কোনো ক্লায়েন্ট ফাংশনটি স্পষ্টভাবে কল করে'
          },
          {
            en: 'Only when the Python interpreter terminates',
            bn: 'কেবল যখন পাইথন ইন্টারপ্রেটার বন্ধ হয়'
          },
          {
            en: 'Decorators never execute at import time under any circumstance',
            bn: 'ডেকোরেটর কখনোই ইমপোর্ট করার সময় কাজ করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Function definition statements are executed at module load time, applying decorators immediately.',
          bn: 'মডিউল লোড হওয়ার সময় ফাংশন সংজ্ঞায়িত হওয়ার সাথে সাথেই ডেকোরেটর প্রয়োগ হয়।'
        },
        explanation: {
          en: 'Decorators run at definition time (import time), swapping the function object for the wrapper before any calls take place.',
          bn: 'ডেকোরেটর মূলত ফাইল লোডের সময়ই চলে মূল ফাংশনের জায়গায় নতুন র‍্যাপারটি বসিয়ে দেয়।'
        }
      },
      {
        id: 'quiz-class-decorators-instantiation-hook',
        kind: 'mcq',
        topic: 'class-decorator-behavior',
        question: {
          en: 'What argument does a class decorator (such as @singleton) receive when applied to a class definition class Database:?',
          bn: 'class Database: এর ওপর কোনো ক্লাস ডেকোরেটর (যেমন @singleton) প্রয়োগ করলে ডেকোরেটরটি আর্গুমেন্ট হিসেবে কী পায়?'
        },
        options: [
          {
            en: 'The class object itself (Database), allowing inspection or dynamic modification of its attributes and methods',
            bn: 'সরাসরি সেই ক্লাস অবজেক্টটি (Database), যার মাধ্যমে ক্লাসের প্রপার্টি ও মেথড পরীক্ষা বা পরিবর্তন করা যায়'
          },
          {
            en: 'An instance of the class automatically instantiated',
            bn: 'স্বয়ংক্রিয়ভাবে তৈরি হওয়া ক্লাসের একটি অবজেক্ট বা ইনস্ট্যান্স'
          },
          {
            en: 'The string name "Database"',
            bn: 'শুধুমাত্র ক্লাসের নামের স্ট্রিং "Database"'
          },
          {
            en: 'None',
            bn: 'None'
          }
        ],
        answer: 0,
        hint: {
          en: 'Class decorators receive the newly constructed class object and return a replacement class or instance.',
          bn: 'ক্লাস ডেকোরেটর তৈরি হওয়া ক্লাসটিকে আর্গুমেন্ট হিসেবে গ্রহণ করে।'
        },
        explanation: {
          en: 'Class decorators intercept class objects upon definition, enabling cross-cutting registration and mixin injection.',
          bn: 'ক্লাস ডেকোরেটর সম্পূর্ণ ক্লাসটিকে গ্রহণ করে তাতে নতুন মেথড বা আচরণ যুক্ত করার সুযোগ দেয়।'
        }
      },
      {
        id: 'quiz-functools-lru-cache-purpose',
        kind: 'mcq',
        topic: 'functools-lru-cache-memoization',
        question: {
          en: 'What functionality does the standard library decorator @functools.lru_cache provide to pure functions?',
          bn: 'স্ট্যান্ডার্ড লাইব্রেরির ডেকোরেটর @functools.lru_cache পিওর ফাংশনগুলোর ক্ষেত্রে কী সুবিধা দেয়?'
        },
        options: [
          {
            en: 'Automatic memoization caching return values for matching arguments, eliminating redundant recursive or expensive calculations',
            bn: 'আর্গুমেন্টের ভিত্তিতে রিটার্ন মান স্বয়ংক্রিয়ভাবে মেমোইজ বা ক্যাশ করে রাখা, ফলে অতিরিক্ত গণনা বা রিকার্সিভ কলের অপচয় রোধ হয়'
          },
          {
            en: 'It stores the return value in a MongoDB cluster',
            bn: 'এটি রিটার্ন মান একটি মঙ্গোডিবি ক্লাস্টারে জমা রাখে'
          },
          {
            en: 'It deletes the function if it takes longer than 1 second to execute',
            bn: 'ফাংশনটি চলতে ১ সেকেন্ডের বেশি সময় লাগলে এটি ফাংশনটি মুছে ফেলে'
          },
          {
            en: 'It forces the function to execute on a GPU accelerator',
            bn: 'এটি ফাংশনটিকে জিপিইউতে চলতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'LRU stands for Least Recently Used cache for memoizing expensive function calls.',
          bn: 'LRU মানে হলো লিস্ট রিসেন্টলি ইউজড ক্যাশ, যা আগের হিসাব করা মান দ্রুত সরবরাহ করে।'
        },
        explanation: {
          en: '@lru_cache memoizes function output based on input arguments, dramatically speeding up recursive algorithms.',
          bn: '@lru_cache একই আর্গুমেন্টের ফলাফল ক্যাশ করে রেখে রিকার্সিভ অ্যালগরিদমের গতি বহুগুণ বৃদ্ধি করে।'
        }
      },
      {
        id: 'quiz-closure-cell-variable-internals',
        kind: 'mcq',
        topic: 'closure-cell-variable-internals',
        question: {
          en: 'Where does CPython store free variables referenced by an inner closure function after the outer function stack exits?',
          bn: 'বাইরের ফাংশনের কাজ শেষ হওয়ার পর অভ্যন্তরীণ ক্লোজারের ব্যবহৃত বাইরের ভেরিয়েবলগুলো CPython কোথায় সংরক্ষণ করে?'
        },
        options: [
          {
            en: 'In internal cell objects referenced by the inner function\'s __closure__ attribute tuple',
            bn: 'অভ্যন্তরীণ ফাংশনের __closure__ অ্যাট্রিবিউট টিউপল দ্বারা নির্দেশিত অভ্যন্তরীণ সেল অবজেক্টে'
          },
          {
            en: 'In the operating system swap space',
            bn: 'অপারেটিং সিস্টেমের সোয়াপ স্পেসে'
          },
          {
            en: 'In a global SQLite database',
            bn: 'একটি গ্লোবাল এসকিউলাইট ডেটাবেসে'
          },
          {
            en: 'The variables are immediately deallocated and cause a segmentation fault',
            bn: 'ভেরিয়েবলগুলো সাথে সাথে মুছে গিয়ে সেগমেন্টেশন ফল্ট তৈরি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'CPython wraps closed-over variables in PyCellObject structures accessible via __closure__.',
          bn: 'CPython ক্লোজারের ভেরিয়েবলগুলোকে বিশেষ সেল অবজেক্টে মুড়িয়ে __closure__ এর ভেতর রাখে।'
        },
        explanation: {
          en: 'Cell objects maintain reference counts for free variables, allowing closures to outlive enclosing stack frames.',
          bn: 'সেল অবজেক্ট ভেরিয়েবলের রেফারেন্স কাউন্ট ঠিক রাখে, ফলে বাইরের ফাংশন শেষ হলেও ক্লোজার নিরাপদে কাজ করতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'context-and-the-with',
    title: {
      en: 'Context Managers, Resource Safety & The With Block',
      bn: 'কনটেক্সট ম্যানেজার, রিসোর্স নিরাপত্তা এবং With ব্লক'
    }
  }
};
