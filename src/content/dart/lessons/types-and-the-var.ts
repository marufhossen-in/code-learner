import type { Lesson } from '../../../lib/types';

export const TypesAndTheVarLesson: Lesson = {
  slug: 'types-and-the-var',
  tech: 'dart',
  title: {
    en: 'Static Types, Final vs Const & Pattern Records',
    bn: 'স্ট্যাটিক টাইপস, Final বনাম Const এবং প্যাটার্ন রেকর্ডস'
  },
  summary: {
    en: 'Master Dart\'s type system and immutability tiers. Understand type inference via var, contrast runtime single-assignment final against compile-time canonical const, explore anonymous structured data via Dart 3 Records ((int, String)), and unlock structural destructuring and exhaustive switch pattern matching.',
    bn: 'Dart-এর টাইপ সিস্টেম এবং ইমিউটেবিলিটি স্তর সম্পূর্ণ আয়ত্ত করুন। var দিয়ে টাইপ ইনফারেন্স, রানটাইম ফাইনাল বনাম কম্পাইল-টাইম ক্যানোনিকাল const-এর পার্থক্য, Dart ৩ রেকর্ডস ((int, String)) দিয়ে স্ট্রাকচার্ড ডেটা তৈরি এবং স্ট্রাকচারাল ডিস্ট্রাকচারিং ও প্যাটার্ন ম্যাচিং।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'static-types-final-vs-const-heading',
      text: {
        en: 'Static Types, Var Inference, and the Immutability Spectrum',
        bn: 'স্ট্যাটিক টাইপস, Var ইনফারেন্স এবং ইমিউটেবিলিটির স্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Dynamic scripting languages often trade developer speed for catastrophic runtime type crashes in production. In Dart (Google\'s strongly typed client language), static type safety is guaranteed at compile time without sacrificing concise syntax. When declaring variables using "var", the compiler automatically infers the concrete static type from the initializing expression. Dart separates immutability into two distinct levels: "final" and "const". A final variable can only be assigned once and is evaluated at runtime (such as capturing the current system timestamp). Conversely, a const variable represents a compile-time constant canonicalized in memory, enabling identical const objects to share the exact same physical memory address.',
        bn: 'ডায়নামিক স্ক্রিপ্টিং ভাষাগুলো ডেভেলপারকে দ্রুত কোড লেখার স্বাধীনতা দিলেও প্রোডাকশনে অপ্রত্যাশিত টাইপ ত্রুটি ঘটায়। কিন্তু Dart (ক্লায়েন্ট অ্যাপের জন্য গুগলের তৈরি স্ট্রংলি টাইপড ভাষা)-এ সংক্ষিপ্ত সিনট্যাক্স বজায় রেখেই কম্পাইল-টাইমে শতভাগ টাইপ নিরাপত্তা নিশ্চিত করা হয়। "var" কি-ওয়ার্ড দিয়ে ভ্যারিয়েবল ঘোষণা করলে কম্পাইলার নিজে থেকেই প্রাথমিক মানের ওপর ভিত্তি করে কংক্রিট স্ট্যাটিক টাইপ নির্ধারণ করে। Dart অপরিবর্তনীয়তাকে মূলত দুটি আলাদা স্তরে ভাগ করে: "final" এবং "const"। একটি final ভ্যারিয়েবলে কেবল একবারই মান নির্ধারণ করা যায় যা রানটাইমে হিসেব হয় (যেমন সিস্টেমের বর্তমান সময়)। অন্যদিকে const হলো কম্পাইল-টাইম ধ্রুবক যা মেমোরিতে ক্যানোনিকালাইজড থাকে, যার ফলে দুটি অভিন্ন const অবজেক্ট মেমোরির হুবহু একই ফিজিক্যাল ঠিকানা শেয়ার করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Dart 3 Records architecture: Anonymous structured aggregate types ((int, String)) with positional access ($1, $2) and pattern matching destructuring.',
        bn: 'চিত্র ১: Dart ৩ রেকর্ডস আর্কিটেকচার: পজিশনাল ফিল্ড ($1, $2) এবং প্যাটার্ন ম্যাচিং ডিস্ট্রাকচারিং সহ অ্যানোনিমাস স্ট্রাকচার্ড ডেটা টাইপ ((int, String))।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">DART 3 RECORDS &amp; PATTERN MATCHING ARCHITECTURE</text>

  <!-- Left: Record Declaration -->
  <g transform="translate(35, 65)">
    <rect width="360" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="360" height="30" rx="8" fill="#0284c7" />
    <text x="180" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Anonymous Record: (int, {String name})</text>

    <!-- Source Signature -->
    <rect x="15" y="45" width="330" height="42" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="65" fill="#38bdf8" font-size="10" font-family="monospace">(int id, {String name}) user = (101, name: "Tamim");</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Zero boilerplate DTO class required!</text>

    <!-- Fields -->
    <rect x="15" y="98" width="160" height="50" rx="5" fill="#0f172a" />
    <text x="25" y="118" fill="#34d399" font-size="10" font-family="monospace">user.$1</text>
    <text x="25" y="136" fill="#cbd5e1" font-size="9" font-family="sans-serif">Positional field -&gt; 101</text>

    <rect x="185" y="98" width="160" height="50" rx="5" fill="#0f172a" />
    <text x="195" y="118" fill="#34d399" font-size="10" font-family="monospace">user.name</text>
    <text x="195" y="136" fill="#cbd5e1" font-size="9" font-family="sans-serif">Named field -&gt; "Tamim"</text>

    <!-- Performance -->
    <rect x="15" y="160" width="330" height="60" rx="5" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" />
    <text x="25" y="182" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold">Immutable Value Semantics:</text>
    <text x="25" y="202" fill="#f8fafc" font-size="9" font-family="sans-serif">Automatic structural equality and hashcode out-of-the-box!</text>
  </g>

  <!-- Right: Pattern Matching -->
  <g transform="translate(440, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#d97706" />
    <text x="182" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Pattern Destructuring &amp; Switch Expressions</text>

    <!-- Destructuring code -->
    <rect x="15" y="45" width="335" height="42" rx="5" fill="#0f172a" stroke="#d97706" />
    <text x="25" y="65" fill="#fbbf24" font-size="10" font-family="monospace">var (id, :name) = user;</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Unpacks positional and named fields into locals</text>

    <!-- Switch Expression -->
    <rect x="15" y="98" width="335" height="60" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="118" fill="#34d399" font-size="10" font-family="monospace">final result = switch (response) {</text>
    <text x="35" y="134" fill="#cbd5e1" font-size="9" font-family="monospace">(200, String body) =&gt; "Payload: $body",</text>
    <text x="35" y="148" fill="#f87171" font-size="9" font-family="monospace">(_, String err) =&gt; "Failure: $err",</text>
    <text x="25" y="156" fill="#34d399" font-size="9" font-family="monospace">};</text>

    <!-- Guarantees -->
    <rect x="15" y="170" width="335" height="50" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="190" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Compile-Time Exhaustiveness:</text>
    <text x="25" y="205" fill="#f8fafc" font-size="9" font-family="sans-serif">Compiler halts build if any case or shape is unhandled!</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'dart-3-records-pattern-matching-heading',
      text: {
        en: 'Dart 3 Records, Destructuring, and Exhaustive Patterns',
        bn: 'Dart ৩ রেকর্ডস, ডিস্ট্রাকচারিং এবং পূর্ণাঙ্গ প্যাটার্নস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Before Dart 3, returning multiple values from a function required either creating verbose custom data classes or relying on loosely typed Maps and Lists. Dart 3 completely revolutionized data modeling with Records. A Record is an anonymous, immutable, aggregate value type declared using parentheses ("(int, String)"). Records can intermix positional fields (accessed via $1, $2) and named fields (accessed by name). Furthermore, Dart 3 introduces structural Pattern Matching. Patterns allow developers to destructure records inline, validate shapes, and execute exhaustive switch expressions where the compiler strictly verifies that all potential cases are covered without unhandled runtime leaks.',
        bn: 'Dart ৩-এর পূর্বে কোনো ফাংশন থেকে একাধিক মান ফেরত পাঠাতে হয় দীর্ঘ কাস্টম ক্লাস তৈরি করতে হতো নয়তো অনিরাপদ ম্যাপ বা লিস্ট ব্যবহার করতে হতো। কিন্তু Dart ৩ রেকর্ডস প্রবর্তনের মাধ্যমে ডেটা মডেলিংয়ে বৈপ্লবিক পরিবর্তন এনেছে। একটি রেকর্ড হলো বন্ধনীযুক্ত অ্যানোনিমাস এবং অপরিবর্তনীয় ভ্যালু টাইপ ("(int, String)")। রেকর্ডসে পজিশনাল ফিল্ডের ($1, $2) পাশাপাশি নামযুক্ত ফিল্ডও রাখা যায়। তাছাড়া Dart ৩-এ যোগ করা হয়েছে স্ট্রাকচারাল প্যাটার্ন ম্যাচিং। প্যাটার্নের সাহায্যে এক লাইনেই রেকর্ডস থেকে ডেটা ভেঙে বের করে নেওয়া যায়, শর্ত যাচাই করা যায় এবং পূর্ণাঙ্গ সুইচ এক্সপ্রেশনের মাধ্যমে কম্পাইল-টাইমেই সমস্ত সম্ভাব্য কেস হ্যান্ডেল করা নিশ্চিত করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Dart type inference, const canonicalization identity, and Dart 3 Records destructuring and pattern matching.',
        bn: 'Dart টাইপ ইনফারেন্স, const ক্যানোনিকালাইজেশন এবং Dart ৩ রেকর্ডস ডিস্ট্রাকচারিং ও প্যাটার্ন ম্যাচিংয়ের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Dart Type System, Const Canonicalization, and Dart 3 Records

// 1. Const Canonicalization Simulation
// Dart compiler caches identical compile-time const instances at identical memory addresses
export class DartConstCanonicalizer {
  private static instancePool = new Map<string, object>();

  public static getCanonicalConst(key: string, data: object): object {
    if (!this.instancePool.has(key)) {
      this.instancePool.set(key, Object.freeze(data));
    }
    return this.instancePool.get(key)!;
  }
}

// 2. Dart 3 Records Simulation: (int code, {String message})
export interface Dart3Record<T extends unknown[]> {
  positional: T;
  named: Record<string, unknown>;
}

export class Dart3RecordEngine {
  public static createRecord<T extends unknown[]>(positional: T, named: Record<string, unknown> = {}): Dart3Record<T> {
    return { positional, named };
  }

  // Simulates Pattern Matching switch expression:
  // switch (response) { (200, message: String m) => "OK", ... }
  public static matchResponseRecord(record: Dart3Record<[number]>): string {
    const statusCode = record.positional[0];
    const message = record.named['message'] as string;

    // Pattern matching with guards
    if (statusCode === 200) {
      return '[Status 200 OK] Handled successfully: ' + message;
    } else if (statusCode >= 500) {
      return '[Server Error ' + statusCode + '] Critical failure: ' + message;
    } else {
      return '[Client Error ' + statusCode + '] Handled: ' + message;
    }
  }
}

// Execution Demonstration
console.log('--- 1. Testing Compile-Time Const Canonicalization ---');
const constA = DartConstCanonicalizer.getCanonicalConst('duration_5s', { seconds: 5 });
const constB = DartConstCanonicalizer.getCanonicalConst('duration_5s', { seconds: 5 });
const regularInstance = { seconds: 5 };

console.log('Canonical Const Identity (identical memory pointer):', constA === constB); // true
console.log('Regular Instance Identity (different heap pointer):', constA === regularInstance); // false

console.log('\n--- 2. Testing Dart 3 Records & Pattern Destructuring ---');
// Simulates: (200, message: "User Session Active")
const networkRecord = Dart3RecordEngine.createRecord([200], { message: 'User Session Active' });

// Positional $1 access and named access
const code = networkRecord.positional[0];
const msg = networkRecord.named['message'];
console.log('Record Fields: Positional $1 =', code, '| Named message =', msg);

// Pattern Matching
const matchOutput = Dart3RecordEngine.matchResponseRecord(networkRecord);
console.log('Pattern Match Result:', matchOutput);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Type Inference (var)',
          def: {
            en: 'Static type analysis where the compiler deduces the exact type from the assigned expression, rejecting differing types later.',
            bn: 'বিশ্লেষণ যাতে কম্পাইলার প্রাথমিক মান দেখে সুনির্দিষ্ট টাইপ নির্ধারণ করে এবং ভবিষ্যতে অন্য টাইপ বসালে এরর দেয়।'
          }
        },
        {
          term: 'Final vs Const',
          def: {
            en: 'final variables are assigned once at runtime; const variables are compile-time constants canonicalized in physical memory.',
            bn: 'final ভ্যারিয়েবল রানটাইমে একবার নির্ধারিত হয়; আর const হলো কম্পাইল-টাইম ধ্রুবক যা মেমোরিতে শেয়ার্ড থাকে।'
          }
        },
        {
          term: 'Canonical Instance',
          def: {
            en: 'Single physical memory object shared across all identical const constructor evaluations to eliminate memory allocation.',
            bn: 'মেমোরির একক বস্তু যা সমস্ত অভিন্ন const অবজেক্ট শেয়ার করে বাড়তি মেমোরি খরচ শূন্যে নামিয়ে আনে।'
          }
        },
        {
          term: 'Dart 3 Record',
          def: {
            en: 'Anonymous, immutable aggregate value type ((int, String)) allowing multiple returns and positional/named fields.',
            bn: 'অপরিবর্তনীয় টাইপ যা কোনো বাড়তি ক্লাস না বানিয়েই একাধিক মান ফেরত পাঠানোর এবং প্যাটার্ন ম্যাচিংয়ের সুবিধা দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'var-type-inference-soundness-ex1',
      kind: 'mcq',
      topic: 'var-type-inference-vs-dynamic',
      question: {
        en: 'What occurs if a Dart developer writes "var age = 25;" and later attempts "age = \\"twenty-five\\";"?',
        bn: 'একজন Dart ডেভেলপার "var age = 25;" লেখার পর যদি পরবর্তীতে "age = \\"twenty-five\\";" লেখার চেষ্টা করেন, তবে কী ঘটে?'
      },
      options: [
        {
          en: 'The compiler halts with a type error because "var" statically inferred "int" at initialization, permanently forbidding assignment of String values',
          bn: 'কম্পাইলার টাইপ এরর দিয়ে বিল্ড আটকে দেয় কারণ "var" শুরুতে ভ্যারিয়েবলটিকে "int" হিসেবে নির্ধারণ করেছে, ফলে এতে String বসানো নিষিদ্ধ'
        },
        {
          en: 'The string is converted into an integer automatically',
          bn: 'স্ট্রিংটি স্বয়ংক্রিয়ভাবে পূর্ণসংখ্যায় রূপান্তরিত হয়'
        },
        {
          en: 'The operating system reboots the smartphone immediately',
          bn: 'অপারেটিং সিস্টেম তাৎক্ষণিকভাবে স্মার্টফোন রিবুট করে'
        },
        {
          en: 'Dart allows dynamic mutation across all var declarations',
          bn: 'Dart সমস্ত var ঘোষণায় যেকোনো টাইপের মান বসানোর অনুমতি দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'var performs static type inference; it is not dynamic.',
        bn: 'শুরুতেই টাইপ স্থির হয়ে যাওয়ায় অন্য কোনো টাইপ বসানো সম্পূর্ণ নিষিদ্ধ।'
      },
      explanation: {
        en: 'In Dart, var infers the type once at initialization. Unlike dynamic, a var variable is strictly typed and rejects values of different types at compile time.',
        bn: 'এর মাধ্যমে লেখার সুবিধা মিললেও টাইপ সুরক্ষার কোনো কমতি হয় না।'
      }
    },
    {
      id: 'final-vs-const-canonicalization-ex2',
      kind: 'mcq',
      topic: 'final-vs-const-compile-time-memory-canonicalization',
      question: {
        en: 'Why does comparing two identical "const Duration(seconds: 5)" objects with "identical(a, b)" evaluate to true in Dart?',
        bn: 'Dart-এ দুটি অভিন্ন "const Duration(seconds: 5)" অবজেক্টকে "identical(a, b)" দিয়ে তুলনা করলে কেন ফলাফল true হয়?'
      },
      options: [
        {
          en: 'Because the Dart compiler canonicalizes compile-time const instances, allocating only 1 physical object in memory shared by all identical const expressions',
          bn: 'কারণ Dart কম্পাইলার কম্পাইল-টাইম const অবজেক্টগুলোকে ক্যানোনিকালাইজ করে, ফলে সব অভিন্ন const এক্সপ্রেশন মেমোরির ঠিক ১ টি ফিজিক্যাল অবজেক্ট শেয়ার করে'
        },
        {
          en: 'Because identical() converts all instances into 0 bytes of RAM',
          bn: 'কারণ identical() সমস্ত অবজেক্টকে ০ বাইট র‍্যামে রূপান্তর করে'
        },
        {
          en: 'Because Duration objects cannot be compared in Dart',
          bn: 'কারণ Dart-এ Duration অবজেক্ট তুলনা করা যায় না'
        },
        {
          en: 'const instances always create fresh heap allocations',
          bn: 'const অবজেক্ট সর্বদা নতুন হিপ মেমোরি তৈরি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'const instances are canonicalized in physical memory at compile-time.',
        bn: 'একই মানের জন্য বারবার নতুন মেমোরি বরাদ্দ না করে একই ঠিকানা পুনর্ব্যবহার করা হয়।'
      },
      explanation: {
        en: 'Const canonicalization ensures zero duplicate allocations for identical constant values. This is why Flutter strongly recommends const constructors for widgets.',
        bn: 'এই কারণেই Flutter-এ উইজেট তৈরির সময় const ব্যবহারের ওপর এত জোর দেওয়া হয়।'
      }
    },
    {
      id: 'dart-3-records-positional-fields-ex3',
      kind: 'mcq',
      topic: 'dart-3-records-positional-field-access',
      question: {
        en: 'Given the Dart 3 record "var point = (10, 20);", how are the individual positional coordinates accessed?',
        bn: 'Dart ৩ রেকর্ড "var point = (10, 20);"-এর ক্ষেত্রে এর পজিশনাল মানগুলো কীভাবে অ্যাক্সেস করা হয়?'
      },
      options: [
        {
          en: 'Using the dollar-prefixed index getters "point.$1" and "point.$2"',
          bn: 'ডলার-উপসর্গযুক্ত ইনডেক্স গেটার "point.$1" এবং "point.$2" ব্যবহার করে'
        },
        {
          en: 'Using array brackets "point[0]" and "point[1]"',
          bn: 'অ্যারে ব্র্যাকেট "point[0]" এবং "point[1]" ব্যবহার করে'
        },
        {
          en: 'Using an SQL query sent to device storage',
          bn: 'ডিভাইস স্টোরেজে পাঠানো একটি এসকিউএল কোয়েরির মাধ্যমে'
        },
        {
          en: 'Positional records cannot be read in Dart 3',
          bn: 'Dart ৩-এ পজিশনাল রেকর্ডস পড়া যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Positional fields in Dart 3 records are accessed via $1, $2, etc.',
        bn: 'Dart ৩ রেকর্ডসে পজিশন অনুসারে $1 এবং $2 দিয়ে মানগুলো সরাসরি বের করে নেওয়া যায়।'
      },
      explanation: {
        en: 'Dart 3 records provide $1, $2, $n getters for positional members, while named members are accessed directly by their identifier name (point.x).',
        bn: 'পজিশনের জন্য ডলার চিহ্ন আর নামের জন্য সরাসরি নাম লিখে মান পাওয়া যায়।'
      }
    },
    {
      id: 'pattern-matching-switch-expressions-ex4',
      kind: 'mcq',
      topic: 'pattern-matching-exhaustive-switch-expressions',
      question: {
        en: 'What architectural advantage do Dart 3 switch expressions (e.g. "final res = switch (state) { ... };") have over legacy switch statements?',
        bn: 'প্রথাগত সুইচ স্টেটমেন্টের তুলনায় Dart ৩ সুইচ এক্সপ্রেশনের (যেমন "final res = switch (state) { ... };") স্থাপত্যিক সুবিধা কী?'
      },
      options: [
        {
          en: 'They return values directly, enforce strict compile-time exhaustiveness, and support deep structural pattern destructuring with where guards without break keywords',
          bn: 'তারা সরাসরি মান ফেরত দেয়, কম্পাইল-টাইমে প্রতিটি কেস পূরণ বাধ্যতামূলক করে এবং কোনো break কি-ওয়ার্ড ছাড়াই প্যাটার্ন ডিস্ট্রাকচারিং ও গার্ড সমর্থন করে'
        },
        {
          en: 'They delete unused comments from the source file',
          bn: 'তারা সোর্স ফাইল থেকে অব্যবহৃত কমেন্ট মুছে ফেলে'
        },
        {
          en: 'They run exclusively on 64-bit Linux supercomputers',
          bn: 'তারা কেবল ৬৪-বিট লিনাক্স সুপারকম্পিউটারে চলে'
        },
        {
          en: 'Switch expressions were deprecated in Dart 3.2',
          bn: 'Dart ৩.২ সংস্করণে সুইচ এক্সপ্রেশন বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Switch expressions return values and require compile-time exhaustiveness.',
        bn: 'ব্রেক ছাড়া সোজা মান তৈরি করতে এবং কোনো বিকল্প যাতে বাদ না পড়ে তা নিশ্চিত করতে এটি ব্যবহৃত হয়।'
      },
      explanation: {
        en: 'Switch expressions transform control flow into expressive value declarations, eliminating fall-through bugs and enforcing compile-time exhaustiveness.',
        bn: 'এর মাধ্যমে কোড আরও সংক্ষিপ্ত, মার্জিত এবং ত্রুটিহীন হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-types-and-the-var',
    title: {
      en: 'Dart Types & Records Quiz',
      bn: 'Dart টাইপস এবং রেকর্ডস কুইজ'
    },
    questions: [
      {
        id: 'quiz-dynamic-vs-object-question',
        kind: 'mcq',
        topic: 'dynamic-vs-object-type-safety-difference',
        question: {
          en: 'What is the critical type-safety distinction between "dynamic" and "Object?" in Dart?',
          bn: 'Dart-এ "dynamic" এবং "Object?"-এর মধ্যে টাইপ নিরাপত্তার মূল পার্থক্য কী?'
        },
        options: [
          {
            en: '"dynamic" disables compile-time type checking, deferring all member lookups to runtime; "Object?" enforces static type checking, requiring explicit casts or checks before calling members',
            bn: '"dynamic" কম্পাইল-টাইম টাইপ চেকিং বন্ধ করে সব মেথড কল রানটাইমে ফেলে দেয়; আর "Object?" স্ট্যাটিক টাইপ নিশ্চিত করে, ফলে কোনো মেথড ডাকার আগে টাইপ যাচাই বাধ্যতামূলক হয়'
          },
          {
            en: 'dynamic is only permitted in web browsers',
            bn: 'dynamic কেবল ওয়েব ব্রাউজারে অনুমোদিত'
          },
          {
            en: 'Object? converts numbers into 16-bit floating point values',
            bn: 'Object? সমস্ত সংখ্যাকে ১৬-বিট ফ্লোটিং পয়েন্টে রূপান্তর করে'
          },
          {
            en: 'There is zero difference between dynamic and Object?',
            bn: 'dynamic এবং Object?-এর মধ্যে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'dynamic turns off static analysis; Object? requires type checks before calling methods.',
          bn: 'dynamic বিপজ্জনক কারণ এটি ভুল কোডও কম্পাইল করতে দেয়, Object? কঠোরভাবে নিয়ম মানে।'
        },
        explanation: {
          en: 'Calling non-existent methods on dynamic compiles silently and crashes at runtime with NoSuchMethodError. Calling on Object? triggers a compile error until narrowed.',
          bn: 'তাই অনিরাপদ dynamic পরিহার করে সর্বত্র Object? ও স্মার্ট কাস্ট ব্যবহার করা শ্রেয়।'
        }
      },
      {
        id: 'quiz-records-structural-equality',
        kind: 'mcq',
        topic: 'records-structural-equality-hashcode',
        question: {
          en: 'How do Dart 3 records evaluate equality ("==") and hash codes when comparing two instances with identical fields?',
          bn: 'হুবহু একই ফিল্ডযুক্ত ২ টি Dart ৩ রেকর্ডস অবজেক্টের মধ্যে সমতা ("==") এবং হ্যাশক্যালকুলেশন কীভাবে মূল্যায়িত হয়?'
        },
        options: [
          {
            en: 'Records automatically evaluate structural equality: if all respective positional and named fields are equal, "r1 == r2" is true with matching hashCodes',
            bn: 'রেকর্ডস স্বয়ংক্রিয়ভাবে কাঠামোগত সমতা মূল্যায়ন করে: সমস্ত পজিশনাল ও নামযুক্ত ফিল্ড সমান হলে কোনো বাড়তি কোড ছাড়াই "r1 == r2" সত্য হয় এবং হ্যাশক্যালকুলেশন মিলে যায়'
          },
          {
            en: 'Records evaluate referential equality only, returning false for different heap objects',
            bn: 'রেকর্ডস কেবল মেমোরি ঠিকানা দেখে, ফলে আলাদা অবজেক্ট হলে মিথ্যা ফেরত দেয়'
          },
          {
            en: 'Comparing records throws an exception in production',
            bn: 'প্রোডাকশনে রেকর্ডস তুলনা করলে এক্সেপশন ঘটে'
          },
          {
            en: 'Records cannot be compared with ==',
            bn: 'রেকর্ডস কখনোই == দিয়ে তুলনা করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Records have built-in structural equality based on their field values.',
          bn: 'ভেতরের মান সমান হলেই রেকর্ডসের সমতা সত্য প্রমাণিত হয়।'
        },
        explanation: {
          en: 'Dart 3 records provide value semantics out-of-the-box, making them ideal keys in Sets and Maps without manually overriding == and hashCode.',
          bn: 'ফলে কোনো বয়লারপ্লেট কোড না লিখেই এগুলোকে Set বা Map-এর কি হিসেবে ব্যবহার করা যায়।'
        }
      },
      {
        id: 'quiz-late-final-variable-initialization',
        kind: 'mcq',
        topic: 'late-final-variable-lazy-initialization',
        question: {
          en: 'What architectural behavior does declaring a field as "late final" provide in a Dart class?',
          bn: 'একটি Dart ক্লাসে কোনো ফিল্ডকে "late final" ঘোষণা করলে কোন স্থাপত্যিক আচরণ পাওয়া যায়?'
        },
        options: [
          {
            en: 'It enables lazy evaluation (initialized on first access) and enforces single-assignment at runtime, throwing a LateInitializationError on reassignment',
            bn: 'এটি অলস মূল্যায়ন নিশ্চিত করে (প্রথমবার ব্যবহারের সময় তৈরি হয়) এবং রানটাইমে কেবল একবারই মান গ্রহণ বাধ্যতামূলক করে, পুনরায় মান বসাতে গেলে এরর দেয়'
          },
          {
            en: 'It encrypts the variable with a 256-bit AES key',
            bn: 'এটি ভ্যারিয়েবলটিকে একটি ২৫৬-বিট এইএস কি দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'It forces the variable to be garbage-collected after 5 seconds',
            bn: '৫ সেকেন্ড পর এটি ভ্যারিয়েবলটিকে মেমোরি থেকে মুছে ফেলতে বাধ্য করে'
          },
          {
            en: 'late final was deprecated in Dart 2.12',
            bn: 'Dart ২.১২ সংস্করণে late final বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'late final combines lazy evaluation with single-assignment enforcement.',
          bn: 'দরকার না হওয়া পর্যন্ত তৈরি না করা এবং একবারের বেশি মান পরিবর্তন করতে না দেওয়ার সেরা কৌশল।'
        },
        explanation: {
          en: 'Top-level or instance late final variables run their initializers only upon first read. Once assigned, subsequent assignments throw an exception, guaranteeing immutability.',
          bn: 'এর মাধ্যমে মেমোরি সাশ্রয় হয় এবং মান অপরিবর্তনীয় থাকে।'
        }
      },
      {
        id: 'quiz-pattern-destructuring-variable-declaration',
        kind: 'mcq',
        topic: 'pattern-destructuring-shorthand-syntax',
        question: {
          en: 'In Dart 3, how does the shorthand syntax "var (:name, :age) = person;" unpack a record with named fields "name" and "age"?',
          bn: 'Dart ৩-এ "var (:name, :age) = person;" সিনট্যাক্সটি কীভাবে নামযুক্ত ফিল্ড "name" এবং "age" বিশিষ্ট একটি রেকর্ডকে ভেঙে আলাদা করে?'
        },
        options: [
          {
            en: 'It extracts the named fields "name" and "age" from person and declares matching local variables of the same names in 1 concise statement',
            bn: 'এটি person থেকে "name" এবং "age" ফিল্ডগুলো বের করে এবং একই নামের স্থানীয় ভ্যারিয়েবল ঘোষণা করে মাত্র ১ লাইনে মানগুলো বসিয়ে দেয়'
          },
          {
            en: 'It deletes person from the heap memory',
            bn: 'এটি person-কে হিপ মেমোরি থেকে মুছে ফেলে'
          },
          {
            en: 'It formats the names into uppercase strings',
            bn: 'এটি নামগুলোকে বড় হাতের স্ট্রিংয়ে রূপান্তর করে'
          },
          {
            en: 'Shorthand named destructuring is illegal in Dart 3',
            bn: 'Dart ৩-এ এমন সংক্ষিপ্ত ডিস্ট্রাকচারিং অবৈধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'The colon shorthand (:fieldName) declares a local variable matching the field name.',
          bn: 'কোলন দিয়ে একবারে ফিল্ডের নামেই নতুন লোকাল ভ্যারিয়েবল তৈরি করা যায়।'
        },
        explanation: {
          en: 'Writing (:name) is shorthand for (name: name). It extracts the named record member and binds it to a local variable named "name", reducing repetitive code.',
          bn: 'বারবার name: name না লিখে সংক্ষেপে (:name) লিখে সময় ও কোড বাঁচানো যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'funcs-and-the-future',
    title: {
      en: 'Functions, Futures & The Single-Threaded Event Loop',
      bn: 'ফাংশন, ফিউচার এবং সিঙ্গেল-থ্রেডেড ইভেন্ট লুপ'
    }
  }
};
