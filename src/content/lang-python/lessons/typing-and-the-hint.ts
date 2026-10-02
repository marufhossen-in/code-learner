import type { Lesson } from '../../../lib/types';

export const TypingAndTheHintLesson: Lesson = {
  slug: 'typing-and-the-hint',
  tech: 'lang-python',
  title: {
    en: 'Static Typing, Generics & TypeVar Hints',
    bn: 'স্ট্যাটিক টাইপিং, জেনেরিক এবং TypeVar হিন্টস'
  },
  summary: {
    en: 'Master modern Python type annotations (PEP 484): write typed function signatures, utilize modern union syntax (int | str) and Optional types, build parameterized generic classes with TypeVar, and catch static type regressions using Mypy before runtime.',
    bn: 'আধুনিক পাইথন টাইপ অ্যানোটেশন (PEP 484) আয়ত্ত করুন: টাইপযুক্ত ফাংশন সিগনেচার, আধুনিক ইউনিয়ন সিনট্যাক্স (int | str) ও অপশনাল টাইপ, TypeVar দিয়ে জেনেরিক ক্লাস এবং রানটাইমের আগেই Mypy দিয়ে টাইপ এরর শনাক্তকরণ।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'static-typing-and-unions-heading',
      text: {
        en: 'PEP 484 Type Annotations, Modern Union Types, and the __annotations__ Dunder',
        bn: 'PEP 484 টাইপ অ্যানোটেশন, আধুনিক ইউনিয়ন টাইপ এবং __annotations__ ডান্ডার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While Python remains dynamically typed at runtime, Python Enhancement Proposal (PEP 484) introduced static type hints that enable compile-time safety and editor autocompletion. Function signatures declare parameter types and return contracts using colons and arrows: def fetch_user(user_id: int) -> str | None:. In modern Python 3.10+, the pipe character (|) serves as the native union operator, replacing verbose Union[int, str] and Optional[str] imports. The CPython runtime stores these declarations inside an internal __annotations__ dictionary without executing runtime type checks or incurring performance penalties.',
        bn: 'রানটাইমে পাইথন ডাইনামিক টাইপিং মেনে চললেও Python Enhancement Proposal (PEP 484) এর মাধ্যমে স্ট্যাটিক টাইপ হিন্ট যুক্ত করা হয়েছে যা কোডিংয়ের সময় ভুল ধরতে এবং কোড এডিটরে অটো-কমপ্লিশন সুবিধা দেয়। ফাংশন সিগনেচারে কোলন এবং তীর চিহ্ন ব্যবহার করে প্যারামিটার ও রিটার্ন টাইপ ঘোষণা করা হয়: def fetch_user(user_id: int) -> str | None:। আধুনিক পাইথন ৩.১০+ এ পাইপ চিহ্ন (|) সরাসরি ইউনিয়ন অপারেটর হিসেবে কাজ করে, যা পুরানো Union[int, str] এর প্রয়োজনীয়তা দূর করেছে। CPython এই ঘোষণাগুলোকে মেমোরির __annotations__ ডিকশনারিতে জমা রাখে, ফলে রানটাইমে কোনো গতি কমে না।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Complete static analysis workflow separating Mypy build-time type verification from runtime CPython execution.',
        bn: 'চিত্র ১: রানটাইম CPython এক্সিকিউশন থেকে আলাদা করে Mypy বিল্ড-টাইম টাইপ ভ্যালিডেশনের কার্যপ্রবাহ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PYTHON STATIC TYPE ANALYSIS &amp; RUNTIME SEPARATION</text>

  <!-- Step 1: Annotated Source -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Typed Source</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">def find(id: int)</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">  -&gt; str | None:</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">find("string_id")</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Type Mismatch Code</text>
  </g>

  <!-- Step 2: Mypy Checker -->
  <g transform="translate(230, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Mypy Verifier</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">AST Symbol Table</text>
    <text x="15" y="85" fill="#fbbf24" font-size="9" font-family="monospace">Type Inference</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#f43f5e" font-size="9" font-family="monospace">Catches bug pre-run</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Zero Runtime Regressions</text>
  </g>

  <!-- Step 3: __annotations__ -->
  <g transform="translate(435, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#d97706" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. CPython Metadata</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">fn.__annotations__</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">{'id': int, 'return': ...}</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Stripped from VM loop</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Zero CPU Cost in VM</text>
  </g>

  <!-- Step 4: Native VM Run -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Bare Execution</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">Pure bytecode</text>
    <text x="15" y="85" fill="#34d399" font-size="9" font-family="monospace">Maximum agility</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Pydantic / FastAPI</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Safe &amp; High-Speed</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'generics-typevar-and-protocols-heading',
      text: {
        en: 'Parameterized Generics, TypeVar, and Structural Protocols',
        bn: 'প্যারামিটারাইজড জেনেরিক, TypeVar এবং স্ট্রাকচারাল প্রোটোকল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When writing reusable utility components (such as repositories or stack collections), using "Any" sacrifices all type safety. Python provides TypeVar from the typing module, allowing developers to create parameterized generic functions and classes where the output type is dynamically linked to the input type. For duck typing validation, typing.Protocol formalizes structural subtyping: an object satisfies a Protocol contract based on whether it implements required methods, without needing explicit class inheritance.',
        bn: 'রিপোজিটরি বা কালেকশনের মতো পুনরায় ব্যবহারযোগ্য কোড লেখার সময় "Any" ব্যবহার করলে টাইপ নিরাপত্তার সুবিধা নষ্ট হয়। পাইথনের typing মডিউলের TypeVar ব্যবহার করে জেনেরিক ফাংশন ও ক্লাস তৈরি করা যায়, যা ইনপুটের সাথে আউটপুটের টাইপ সম্পর্ক অক্ষত রাখে। এছাড়া ডাক টাইপিংকে সুশৃঙ্খল করতে typing.Protocol এর মাধ্যমে স্ট্রাকচারাল সাবটাইপিং করা হয়: কোনো ক্লাস নির্দিষ্ট মেথড বাস্তবায়ন করেছে কি না তার ভিত্তিতেই প্রোটোকল সন্তুষ্ট হয়, কোনো স্পষ্ট ইনহেরিটেন্সের প্রয়োজন পড়ে না।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Python PEP 484 static typing, union parameter validation, and generic TypeVar mapping.',
        bn: 'পাইথন টাইপিং, ইউনিয়ন প্যারামিটার এবং জেনেরিক TypeVar ম্যাপিংয়ের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Python PEP 484 Type Hints and Generic TypeVar in TypeScript

// 1. Simulating Python Generic Function: def first_element[T](items: list[T]) -> T | None
export function firstElement<T>(items: T[]): T | null {
  if (items.length === 0) return null;
  return items[0];
}

// 2. Simulating Python Union Type: def format_id(val: int | str) -> str
export function formatId(val: number | string): string {
  if (typeof val === 'number') {
    return \`ID-#\${val.toString().padStart(4, '0')}\`;
  }
  return \`ID-\${val.toUpperCase()}\`;
}

// 3. Simulating Python typing.Protocol: Renderable
interface RenderableProtocol {
  render(): string;
}

export function displayView(component: RenderableProtocol): string {
  return component.render();
}

// Executing demonstrations
const numberList = [10, 20, 30];
const stringList = ['alpha', 'beta', 'gamma'];

const firstNum = firstElement(numberList);
const firstStr = firstElement(stringList);
console.log('First Number Element:', firstNum); // 10
console.log('First String Element:', firstStr); // "alpha"

console.log('Formatted Numeric ID:', formatId(42)); // "ID-#0042"
console.log('Formatted String ID:', formatId('usr_dev')); // "ID-USR_DEV"`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Type Annotation',
          def: {
            en: 'Syntax (x: int -> str) documenting expected variable and signature types for static linters and tools.',
            bn: 'সিনট্যাক্স যা ভেরিয়েবল এবং ফাংশনের টাইপ উল্লেখ করে স্ট্যাটিক অ্যানালাইজারকে সাহায্য করে।'
          }
        },
        {
          term: 'Union Operator (|)',
          def: {
            en: 'Binary operator introduced in Python 3.10 specifying that a value can satisfy one of several types (e.g. int | str).',
            bn: 'পাইথন ৩.১০ এ যুক্ত হওয়া অপারেটর যা কোনো মান একাধিক টাইপের যেকোনো একটি হতে পারে তা বোঝায়।'
          }
        },
        {
          term: 'TypeVar',
          def: {
            en: 'Type variable enabling generic functions and classes to maintain type consistency between inputs and outputs.',
            bn: 'টাইপ ভেরিয়েবল যার মাধ্যমে জেনেরিক ফাংশনে ইনপুট ও আউটপুটের টাইপের সামঞ্জস্য রক্ষা করা হয়।'
          }
        },
        {
          term: 'Structural Protocol',
          def: {
            en: 'PEP 544 static duck typing mechanism verifying object contracts based on shape rather than class inheritance.',
            bn: 'ইনহেরিটেন্সের বদলে অবজেক্টের প্রয়োজনীয় মেথড ও গঠনের ভিত্তিতে টাইপ মেলানোর আধুনিক ব্যবস্থা।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'python310-union-pipe-syntax-ex1',
      kind: 'mcq',
      topic: 'python310-union-operator-syntax',
      question: {
        en: 'How do you express that a function parameter accepts either an integer or a string in modern Python 3.10+?',
        bn: 'আধুনিক পাইথন ৩.১০+ সংস্করণে একটি ফাংশন প্যারামিটার পূর্ণসংখ্যা অথবা স্ট্রিং গ্রহণ করতে পারে তা কীভাবে লিখবেন?'
      },
      options: [
        { en: 'def parse(val: int | str):', bn: 'def parse(val: int | str):' },
        { en: 'def parse(val: int or str):', bn: 'def parse(val: int or str):' },
        { en: 'def parse(val: [int, str]):', bn: 'def parse(val: [int, str]):' },
        { en: 'def parse(val: (int, str)):', bn: 'def parse(val: (int, str)):' }
      ],
      answer: 0,
      hint: {
        en: 'Python 3.10 introduced the pipe (|) operator for union type definitions.',
        bn: 'পাইথন ৩.১০ এ ইউনিয়ন টাইপ লিখতে সরাসরি পাইপ (|) চিহ্ন ব্যবহার করা হয়।'
      },
      explanation: {
        en: 'int | str is native union syntax in Python 3.10+, replacing typing.Union[int, str].',
        bn: 'int | str হলো পাইথনের আধুনিক ইউনিয়ন সিনট্যাক্স যা টাইপিং মডিউল ইমপোর্ট ছাড়াই কাজ করে।'
      }
    },
    {
      id: 'annotations-runtime-enforcement-ex2',
      kind: 'mcq',
      topic: 'type-hints-runtime-behavior',
      question: {
        en: 'Does standard CPython raise a TypeError at runtime if you pass a string to a function annotated as def double(x: int) -> int:?',
        bn: 'def double(x: int) -> int: ফাংশনে স্ট্রিং পাঠালে স্ট্যান্ডার্ড CPython রানটাইমে কি কোনো TypeError ছুড়ে দেয়?'
      },
      options: [
        {
          en: 'No, Python does not enforce type annotations at runtime; they are metadata checked by static analysis tools like Mypy',
          bn: 'না, পাইথন রানটাইমে টাইপ অ্যানোটেশন পরীক্ষা করে না; এগুলো কেবল Mypy এর মতো স্ট্যাটিক টুলের জন্য মেটাডেটা'
        },
        {
          en: 'Yes, CPython raises a fatal TypeError immediately upon call',
          bn: 'হ্যাঁ, CPython সাথে সাথে একটি মারাত্মক TypeError তৈরি করে'
        },
        {
          en: 'It converts the string to an integer automatically',
          bn: 'এটি স্ট্রিংটিকে নিজে থেকেই পূর্ণসংখ্যায় বদলে ফেলে'
        },
        {
          en: 'The operating system terminates execution',
          bn: 'অপারেটিং সিস্টেম প্রোগ্রামটি বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Python type hints are completely ignored by the CPython bytecode execution engine at runtime.',
        bn: 'রানটাইমে পাইথন ইন্টারপ্রেটার টাইপ হিন্ট পুরোপুরি উপেক্ষা করে নিজস্ব গতিতে কোড চালায়।'
      },
      explanation: {
        en: 'Type annotations have zero runtime enforcement in pure CPython; they serve static linters, documentation, and frameworks like Pydantic.',
        bn: 'টাইপ হিন্ট কেবল স্ট্যাটিক অ্যানালাইজার ও পাইডান্টিকের মতো ফ্রেমওয়ার্কের তথ্য হিসেবে কাজ করে, রানটাইমে কোনো প্রভাব ফেলে না।'
      }
    },
    {
      id: 'generic-typevar-purpose-ex3',
      kind: 'mcq',
      topic: 'typing-typevar-generics',
      question: {
        en: 'Why is using TypeVar("T") superior to using "Any" when typing a function that returns an element from an input list?',
        bn: 'ইনপুট লিস্ট থেকে মান ফেরত দেওয়া ফাংশনের ক্ষেত্রে "Any" এর চেয়ে TypeVar("T") ব্যবহার করা শ্রেষ্ঠ কেন?'
      },
      options: [
        {
          en: 'TypeVar preserves the exact element type relationship between the input list and the return value, enabling IDE type inference',
          bn: 'TypeVar ইনপুট লিস্টের উপাদানের টাইপের সাথে রিটার্ন টাইপের সুনির্দিষ্ট সম্পর্ক ধরে রাখে, ফলে কোড এডিটর সঠিক টাইপ বুঝতে পারে'
        },
        {
          en: 'TypeVar compresses list memory by 50 percent',
          bn: 'TypeVar লিস্টের মেমোরি ৫০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'Any is deprecated and triggers a SyntaxWarning in Python 3.12',
          bn: 'Any বাতিল হয়ে গেছে এবং পাইথন ৩.১২ এ ওয়ার্নিং দেয়'
        },
        {
          en: 'TypeVar forces lists to only contain numbers',
          bn: 'TypeVar লিস্টে কেবল সংখ্যা থাকতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'TypeVar links input and output types, whereas Any erases all type information.',
        bn: 'TypeVar ইনপুট ও আউটপুটের টাইপের যোগসূত্র অক্ষত রাখে, যেখানে Any সব টাইপ মুছে ফেলে।'
      },
      explanation: {
        en: 'TypeVar("T") binds the concrete type supplied by the caller, so passing list[User] guarantees a User return type.',
        bn: 'TypeVar কলারের পাঠানো আসল টাইপটিকে মনে রাখে, ফলে সঠিক টাইপ সেফটি বজায় থাকে।'
      }
    },
    {
      id: 'typing-protocol-structural-subtyping-ex4',
      kind: 'mcq',
      topic: 'typing-protocol-duck-typing',
      question: {
        en: 'How does typing.Protocol implement static duck typing in Python?',
        bn: 'পাইথনে typing.Protocol কীভাবে স্ট্যাটিক ডাক টাইপিং বাস্তবায়ন করে?'
      },
      options: [
        {
          en: 'A class satisfies a Protocol if it implements matching methods and attributes, without needing to explicitly inherit from the Protocol class',
          bn: 'কোনো ক্লাস যদি প্রোটোকলের সাথে মিলিয়ে প্রয়োজনীয় মেথড ও প্রপার্টি ধারণ করে, তবে ইনহেরিট না করেও সে প্রোটোকলটি পূরণ করতে পারে'
        },
        {
          en: 'It requires every class to extend abc.ABC explicitly',
          bn: 'এতে প্রতিটি ক্লাসে স্পষ্টভাবে abc.ABC ইনহেরিট করতে হয়'
        },
        {
          en: 'It encrypts method signatures with TLS',
          bn: 'এটি মেথড সিগনেচারগুলোকে টিএলএস দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'Protocols only work for network TCP connections',
          bn: 'প্রোটোকল কেবল নেটওয়ার্ক টিসিপি কানেকশনে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Protocol provides structural subtyping: if it walks like a duck and quacks like a duck, it satisfies the type.',
        bn: 'প্রোটোকল কাঠামোর ওপর জোর দেয়: আচরণ মিলে গেলেই অবজেক্টটি সেই টাইপ হিসেবে গণ্য হয়।'
      },
      explanation: {
        en: 'typing.Protocol formalizes duck typing at the static analysis level without requiring nominal inheritance.',
        bn: 'typing.Protocol কোনো কৃত্রিম ইনহেরিটেন্সের ঝামেলা ছাড়াই অবজেক্টের বৈশিষ্ট্যের ভিত্তিতে টাইপ যাচাই করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-typing-and-the-hint',
    title: {
      en: 'Python Static Typing and Generics Quiz',
      bn: 'পাইথন স্ট্যাটিক টাইপিং এবং জেনেরিক কুইজ'
    },
    questions: [
      {
        id: 'quiz-literal-type-restriction',
        kind: 'mcq',
        topic: 'typing-literal-type-validation',
        question: {
          en: 'What constraint does the annotation "mode: Literal[\'r\', \'w\', \'a\']" impose on a function argument?',
          bn: '"mode: Literal[\'r\', \'w\', \'a\']" অ্যানোটেশনটি কোনো ফাংশন আর্গুমেন্টের ওপর কী শর্ত আরোপ করে?'
        },
        options: [
          {
            en: 'Static type checkers verify that the argument passed is strictly one of the 3 exact string literals: "r", "w", or "a"',
            bn: 'স্ট্যাটিক টাইপ চেকার নিশ্চিত করে যে আর্গুমেন্ট হিসেবে পাঠানো মানটি অবশ্যই সুনির্দিষ্ট ৩ টি স্ট্রিং ("r", "w", বা "a") এর যেকোনো একটি হতে হবে'
          },
          {
            en: 'It converts the argument into an integer',
            bn: 'এটি আর্গুমেন্টটিকে পূর্ণসংখ্যায় রূপান্তর করে'
          },
          {
            en: 'The argument must be an array of letters',
            bn: 'আর্গুমেন্টটিকে অক্ষরের একটি অ্যারে হতে হয়'
          },
          {
            en: 'Literal types are unsupported in Python',
            bn: 'পাইথনে লিটারেল টাইপ কাজ করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Literal restricts values to an explicit enumerated list of constant literal values.',
          bn: 'Literal আর্গুমেন্টের মানকে সুনির্দিষ্ট কিছু পূর্বনির্ধারিত মানের মধ্যেই সীমাবদ্ধ করে।'
        },
        explanation: {
          en: 'typing.Literal guarantees that only explicitly permitted constant values pass static type verification.',
          bn: 'typing.Literal নিশ্চিত করে যে অনুমোদিত নির্দিষ্ট মানগুলো ছাড়া অন্য কোনো মান যেন পাস না হয়।'
        }
      },
      {
        id: 'quiz-future-annotations-postponed-evaluation',
        kind: 'mcq',
        topic: 'future-annotations-postponed-evaluation',
        question: {
          en: 'What optimization does "from __future__ import annotations" activate in Python source files?',
          bn: 'পাইথন ফাইলে "from __future__ import annotations" স্টেটমেন্টটি কোন অপ্টিমাইজেশন সক্রিয় করে?'
        },
        options: [
          {
            en: 'It stores type annotations as raw string literals in __annotations__ at definition time, resolving forward references and speeding up module import',
            bn: 'এটি টাইপ অ্যানোটেশনগুলোকে সংজ্ঞার সময় সরাসরি টেক্সট স্ট্রিং হিসেবে মেমোরিতে রাখে, ফলে ফরোয়ার্ড রেফারেন্সের ঝামেলা দূর হয় এবং ফাইল দ্রুত লোড হয়'
          },
          {
            en: 'It compiles Python code into Rust machine code',
            bn: 'এটি পাইথন কোডকে সরাসরি রাস্ট মেশিন কোডে কম্পাইল করে'
          },
          {
            en: 'It deletes all comments from source files',
            bn: 'এটি সোর্স ফাইল থেকে সমস্ত কমেন্ট মুছে ফেলে'
          },
          {
            en: 'It disables all function calls permanently',
            bn: 'এটি সব ফাংশন কল স্থায়ীভাবে বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'PEP 563 postpones evaluation of type annotations, treating them as string expressions.',
          bn: 'PEP 563 টাইপ অ্যানোটেশন তাৎক্ষণিক তৈরি না করে স্ট্রিং হিসেবে স্থগিত রাখে।'
        },
        explanation: {
          en: 'Postponed evaluation eliminates circular import crashes and allows classes to reference themselves in method signatures.',
          bn: 'স্থগিত মূল্যায়ন ক্লাসের ভেতরে নিজের নাম ব্যবহারের সুযোগ দেয় এবং সার্কুলার ইমপোর্টের ঝুঁকি এড়ায়।'
        }
      },
      {
        id: 'quiz-typeddict-fixed-keys-schema',
        kind: 'mcq',
        topic: 'typeddict-dictionary-schema',
        question: {
          en: 'What architectural advantage does typing.TypedDict provide over standard dict[str, Any] in Python?',
          bn: 'পাইথনে সাধারণ dict[str, Any] এর তুলনায় typing.TypedDict কোন স্থাপত্যিক সুবিধা দেয়?'
        },
        options: [
          {
            en: 'It enforces a strict schema requiring specific expected keys with strongly typed values, validated at type-check time without runtime overhead',
            bn: 'এটি ডিকশনারির কি-গুলোর নাম এবং প্রতিটি ভ্যালুর টাইপ কঠোরভাবে নির্দিষ্ট করে দেয়, যা টাইপ চেকিংয়ের সময় নির্ভুলতা নিশ্চিত করে'
          },
          {
            en: 'It turns the dictionary into a C++ struct',
            bn: 'এটি ডিকশনারিকে একটি সি++ স্ট্রাকচারে বদলে দেয়'
          },
          {
            en: 'It encrypts all dictionary values with AES',
            bn: 'এটি ডিকশনারির সমস্ত মান এইএস দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'TypedDict instances cannot be serialized to JSON',
            bn: 'TypedDict কে জেসনে রূপান্তর করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'TypedDict specifies expected string keys and their specific value types for dictionary objects.',
          bn: 'TypedDict ডিকশনারির নির্দিষ্ট কি এবং তাদের মানের টাইপ সুনির্দিষ্টভাবে নির্ধারণ করে।'
        },
        explanation: {
          en: 'TypedDict gives standard dictionary instances static type safety, catching missing or misspelled keys.',
          bn: 'TypedDict সাধারণ ডিকশনারিকে টাইপ সেফটি দেয় এবং কি-এর বানানে ভুল হলে সাথে সাথে সতর্ক করে।'
        }
      },
      {
        id: 'quiz-callable-type-signature',
        kind: 'mcq',
        topic: 'callable-type-annotation',
        question: {
          en: 'Which annotation denotes a callback function accepting an integer and a string and returning a boolean in Python?',
          bn: 'পাইথনে একটি পূর্ণসংখ্যা ও একটি স্ট্রিং গ্রহণ করে বুলিয়ান রিটার্ন করে এমন কলব্যাকের জন্য সঠিক অ্যানোটেশন কোনটি?'
        },
        options: [
          { en: 'Callable[[int, str], bool]', bn: 'Callable[[int, str], bool]' },
          { en: 'Function(int, str) -> bool', bn: 'Function(int, str) -> bool]' },
          { en: '(int, str) => bool', bn: '(int, str) => bool' },
          { en: 'Callback[int, str, bool]', bn: 'Callback[int, str, bool]' }
        ],
        answer: 0,
        hint: {
          en: 'Callable[[ArgTypes], ReturnType] is the canonical typing annotation for function parameters.',
          bn: 'Callable[[ArgTypes], ReturnType] হলো ফাংশন প্যারামিটারের প্রাতিষ্ঠানিক টাইপ লেখার নিয়ম।'
        },
        explanation: {
          en: 'Callable accepts a list of parameter types in the first argument and the return type in the second argument.',
          bn: 'Callable এর প্রথম আর্গুমেন্টে আর্গুমেন্ট টাইপের লিস্ট এবং দ্বিতীয়টিতে রিটার্ন টাইপ উল্লেখ থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'data-and-the-class',
    title: {
      en: 'Dataclasses, Immutability & Structural Pattern Matching',
      bn: 'ডেটাক্লাস, ইমিউটেবিলিটি এবং প্যাটার্ন ম্যাচিং'
    }
  }
};
