import type { Lesson } from '../../../lib/types';

export const EnumsAndTheSwitchLesson: Lesson = {
  slug: 'enums-and-the-switch',
  tech: 'swift',
  title: {
    en: 'Enums with Associated Values & Pattern Matching',
    bn: 'অ্যাসোসিয়েটেড ভ্যালু সহ এনাম এবং প্যাটার্ন ম্যাচিং'
  },
  summary: {
    en: 'Master Swift\'s powerful algebraic enums. Model rich domain states using associated values, construct memory-efficient tagged unions, execute exhaustive switch statements with where guards, leverage indirect enums for recursive trees, and handle results via the standard Result<Success, Failure> enum.',
    bn: 'Swift-এর শক্তিশালী অ্যালজেব্রাইক এনাম আয়ত্ত করুন। অ্যাসোসিয়েটেড ভ্যালু দিয়ে সমৃদ্ধ ডোমেন স্টেট তৈরি, মেমোরি-দক্ষ ট্যাগড ইউনিয়ন গঠন, where গার্ড সহ পূর্ণাঙ্গ সুইচ স্টেটমেন্ট, রিকার্সিভ ডেটা স্ট্রাকচারের জন্য indirect এনাম এবং Result<Success, Failure> দিয়ে নির্ভরযোগ্য এরর হ্যান্ডলিং।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'algebraic-enums-associated-values-heading',
      text: {
        en: 'Algebraic Enums, Associated Values, and Memory Layout',
        bn: 'অ্যালজেব্রাইক এনাম, অ্যাসোসিয়েটেড ভ্যালু এবং মেমোরির বিন্যাস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In C or Java, enums operate primarily as named integer constants without the ability to attach contextual information. In Swift (Apple\'s type-safe compiled programming language), enums are full first-class algebraic sum types. Each enum case can carry completely distinct payloads known as associated values. An enum case might store a tuple of integers, an array of strings, or a complete custom struct. In physical memory, the compiler lays out an associated value enum as a tagged union: a 1-byte integer discriminant tag followed by padding bytes and a payload zone sized to the single largest case. When an enum represents recursive data structures like trees or linked lists, developers prepend the "indirect" keyword, directing the compiler to store an 8-byte heap pointer box that eliminates infinite size cycles.',
        bn: 'C বা Java-র মতো ভাষায় এনাম মূলত কয়েকটি ধারাবাহিক পূর্ণসংখ্যার নাম হিসেবে কাজ করে এবং তাতে বাড়তি তথ্য যুক্ত করা যায় না। কিন্তু Swift (অ্যাপলের তৈরি টাইপ-নিরাপদ কম্পাইল্ড ভাষা)-এ এনাম হলো সম্পূর্ণ প্রথম শ্রেণির অ্যালজেব্রাইক সাম টাইপ। প্রতিটি এনাম কেস সম্পূর্ণ ভিন্ন ভিন্ন আকারের তথ্য বহন করতে পারে যাকে অ্যাসোসিয়েটেড ভ্যালু বলা হয়। একটি কেস হয়তো দুটি পূর্ণসংখ্যা ধারণ করে, অন্য কেস একটি সম্পূর্ণ অবজেক্ট ধারণ করতে পারে। মেমোরির ভেতরে কম্পাইলার একে ট্যাগড ইউনিয়ন হিসেবে সাজায়: একটি ১-বাইটের ডিসক্রিমিন্যান্ট ট্যাগ, যার পর প্যাডিং এবং সর্ববৃহৎ কেসের সমান মেমোরি বরাদ্দ থাকে। ট্রি বা লিঙ্কড লিস্টের মতো রিকার্সিভ ডেটা স্ট্রাকচারের ক্ষেত্রে ডেভেলপাররা "indirect" কি-ওয়ার্ড ব্যবহার করেন, যা হিপে একটি ৮-বাইটের পয়েন্টার বক্স বসিয়ে অসীম আকারের জটিলতা দূর করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Memory layout of an associated value enum (1-byte tag, 7-byte padding, 16-byte payload = 24 bytes) and exhaustive pattern matching with where guards.',
        bn: 'চিত্র ১: অ্যাসোসিয়েটেড ভ্যালু এনামের মেমোরি গঠন (১-বাইট ট্যাগ, ৭-বাইট প্যাডিং, ১৬-বাইট পেলোড = ২৪ বাইট) এবং where গার্ড সহ পূর্ণাঙ্গ প্যাটার্ন ম্যাচিং।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SWIFT ASSOCIATED VALUE ENUM MEMORY &amp; PATTERN MATCHING</text>

  <!-- Left: Memory Layout -->
  <g transform="translate(35, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#0284c7" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Tagged Union Memory Layout: 24 Bytes Total</text>

    <!-- Tag -->
    <rect x="20" y="55" width="70" height="75" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="55" y="80" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Tag</text>
    <text x="55" y="100" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">1 Byte</text>
    <text x="55" y="118" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">0 / 1 / 2</text>

    <!-- Padding -->
    <rect x="100" y="55" width="70" height="75" rx="5" fill="#334155" stroke="#64748b" />
    <text x="135" y="80" fill="#94a3b8" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Pad</text>
    <text x="135" y="100" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">7 Bytes</text>
    <text x="135" y="118" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">Alignment</text>

    <!-- Payload -->
    <rect x="180" y="55" width="165" height="75" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="262" y="80" fill="#34d399" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Payload Buffer</text>
    <text x="262" y="100" fill="#38bdf8" font-size="10" font-family="monospace" text-anchor="middle">16 Bytes</text>
    <text x="262" y="118" fill="#cbd5e1" font-size="9" font-family="sans-serif" text-anchor="middle">Sized to largest variant</text>

    <!-- Code summary -->
    <rect x="20" y="150" width="325" height="65" rx="5" fill="#0284c7" fill-opacity="0.15" stroke="#0284c7" />
    <text x="30" y="172" fill="#38bdf8" font-size="10" font-family="monospace">enum Status { case idle, active(Int), err(String) }</text>
    <text x="30" y="192" fill="#f8fafc" font-size="10" font-family="sans-serif">Total = 1 byte tag + 7 pad + 16 payload = 24 bytes</text>
  </g>

  <!-- Right: Exhaustive Switch Matching -->
  <g transform="translate(440, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#d97706" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Exhaustive Switch with Where Guards</text>

    <!-- Arms -->
    <rect x="15" y="45" width="335" height="35" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="67" fill="#34d399" font-size="10" font-family="monospace">case .success(let data): handle(data)</text>

    <rect x="15" y="88" width="335" height="35" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="110" fill="#fbbf24" font-size="10" font-family="monospace">case .error(let c) where c &gt;= 500: retry()</text>

    <rect x="15" y="131" width="335" height="35" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="153" fill="#38bdf8" font-size="10" font-family="monospace">case .error(let c): showClientError(c)</text>

    <!-- Guarantees -->
    <rect x="15" y="175" width="335" height="45" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="193" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Compile-Time Exhaustiveness:</text>
    <text x="25" y="208" fill="#f8fafc" font-size="9" font-family="sans-serif">Build halts if any enum case is unhandled!</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'exhaustive-matching-and-result-heading',
      text: {
        en: 'Exhaustive Matching, Pattern Guards, and the Result Enum',
        bn: 'পূর্ণাঙ্গ ম্যাচিং, প্যাটার্ন গার্ডস এবং Result এনাম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike permissive switch statements in other languages, Swift switches are strictly exhaustive at compile time. Developers must account for every possible case or explicitly author a default fallback, preventing unhandled runtime states. Through value binding ("case let .success(data)"), payloads are extracted and cast into strongly typed local variables inline. For conditional filtering, pattern guards formulated with "where" expressions allow branching based on dynamic runtime logic without sacrificing exhaustiveness. In network and file I/O operations, modern Swift leverages the standard "Result<Success, Failure: Error>" enum. This models either a successful payload or an explicit typed error, providing structured error handling that avoids unchecked runtime crashes.',
        bn: 'অন্যান্য ভাষার নমনীয় সুইচের মতো না হয়ে Swift-এর সুইচ স্টেটমেন্ট কম্পাইল-টাইমেই কঠোরভাবে পূর্ণাঙ্গ বা exhaustive হয়। ডেভেলপারদের প্রতিটি সম্ভাব্য কেস পূরণ করতে হয় নয়তো একটি default ব্লক লিখতে হয়, যা কোনো বিকল্প বাদ পড়ার ঝুঁকি চিরতরে দূর করে। ভ্যালু বাইন্ডিংয়ের ("case let .success(data)") মাধ্যমে কেসের ভেতরে থাকা ডেটা সরাসরি টাইপড ভেরিয়েবলে বের করে নেওয়া যায়। বাড়তি শর্ত পরীক্ষার জন্য "where" প্যাটার্ন গার্ড ব্যবহার করে সূক্ষ্ম লজিক তৈরি করা সম্ভব। নেটওয়ার্ক এবং ফাইল আই/ও-এর ক্ষেত্রে আধুনিক Swift স্ট্যান্ডার্ড "Result<Success, Failure: Error>" এনাম ব্যবহার করে। এটি হয় একটি সফল ডেটা নয়তো একটি সুনির্দিষ্ট এরর বহন করে, যা অপ্রত্যাশিত ক্র্যাশ ছাড়া নির্ভরযোগ্য ও কাঠামোগত কোড পরিচালনা নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Swift associated value enums, tagged union sizing, indirect recursive trees, and pattern matching.',
        bn: 'Swift অ্যাসোসিয়েটেড ভ্যালু এনাম, ট্যাগড ইউনিয়ন সাইজ, indirect রিকার্সিভ ট্রি এবং প্যাটার্ন ম্যাচিংয়ের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Swift Associated Value Enums, Tagged Union Layout, and Recursive Indirect Enums

// 1. Associated Value Enum Simulation
export type NetworkResponseState =
  | { kind: 'idle'; tag: 0; payloadBytes: 0 }
  | { kind: 'loading'; tag: 1; payloadBytes: 8; progress: number }
  | { kind: 'success'; tag: 2; payloadBytes: 16; dataPayload: string }
  | { kind: 'failed'; tag: 3; payloadBytes: 12; httpStatus: number; message: string };

export class SwiftEnumTaggedUnionCalculator {
  // Swift aligns tagged unions to 8-byte boundaries on 64-bit systems
  public static calculateLayout(cases: { name: string; bytes: number }[]): {
    tagBytes: number;
    paddingBytes: number;
    maxPayloadBytes: number;
    totalBytes: number;
  } {
    const tagBytes = 1;
    const maxPayload = Math.max(...cases.map(c => c.bytes), 0);
    const unaligned = tagBytes + maxPayload;
    const totalBytes = Math.ceil(unaligned / 8) * 8;
    const paddingBytes = totalBytes - (tagBytes + maxPayload);

    return { tagBytes, paddingBytes, maxPayloadBytes: maxPayload, totalBytes };
  }

  // Exhaustive switch matching with where guards
  public static matchResponse(state: NetworkResponseState): string {
    switch (state.kind) {
      case 'idle':
        return 'Network idle. Waiting for user action (tag 0).';
      case 'loading':
        return 'Download in progress: ' + state.progress + '% (tag 1).';
      case 'success':
        return 'Payload received: ' + state.dataPayload + ' (tag 2).';
      case 'failed': {
        // Pattern guard: where httpStatus >= 500
        if (state.httpStatus >= 500) {
          return '[Server Fault ' + state.httpStatus + '] Automatically retrying request: ' + state.message;
        }
        return '[Client Error ' + state.httpStatus + '] Aborted: ' + state.message;
      }
      default: {
        const _exhaustiveCheck: never = state;
        throw new Error('Non-exhaustive patterns not covered: ' + JSON.stringify(_exhaustiveCheck));
      }
    }
  }
}

// 2. Recursive Indirect Enum Simulation (e.g. indirect enum BinaryTree<T>)
// Uses an 8-byte heap pointer box to prevent infinite size
export type SimulatedBinaryTree<T> =
  | { kind: 'leaf' }
  | { kind: 'node'; value: T; leftBoxAddress: number; rightBoxAddress: number };

// Execution Demonstration
const enumCases = [
  { name: 'idle', bytes: 0 },
  { name: 'loading', bytes: 8 },
  { name: 'success', bytes: 16 },
  { name: 'failed', bytes: 12 }
];

const layout = SwiftEnumTaggedUnionCalculator.calculateLayout(enumCases);
console.log('Tag Bytes:', layout.tagBytes, 'Byte'); // 1
console.log('Padding Bytes:', layout.paddingBytes, 'Bytes'); // 7
console.log('Max Payload Buffer:', layout.maxPayloadBytes, 'Bytes'); // 16
console.log('Total Tagged Union Footprint:', layout.totalBytes, 'Bytes'); // 24

// Pattern matching evaluation
const response1: NetworkResponseState = { kind: 'success', tag: 2, payloadBytes: 16, dataPayload: 'User Records JSON' };
const response2: NetworkResponseState = { kind: 'failed', tag: 3, payloadBytes: 12, httpStatus: 503, message: 'Service Unavailable' };

console.log(SwiftEnumTaggedUnionCalculator.matchResponse(response1));
console.log(SwiftEnumTaggedUnionCalculator.matchResponse(response2));`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Associated Values',
          def: {
            en: 'Custom payload data of varying types attached directly to specific cases of an algebraic Swift enum.',
            bn: 'বিভিন্ন ডেটা টাইপের কাস্টম মান যা সরাসরি নির্দিষ্ট এনাম কেসের সাথে সংযুক্ত থাকে।'
          }
        },
        {
          term: 'Exhaustive Switch',
          def: {
            en: 'Compile-time requirement that switch statements must explicitly account for every possible case of an enum.',
            bn: 'কম্পাইল-টাইমের কঠোর নিয়ম যা সুইচে এনামের প্রতিটি সম্ভাব্য কেস পূরণ করা বাধ্যতামূলক করে।'
          }
        },
        {
          term: 'Indirect Enum',
          def: {
            en: 'Keyword instructing the compiler to box an enum case on the heap via an 8-byte pointer to enable recursive types.',
            bn: 'কি-ওয়ার্ড যা রিকার্সিভ ডেটা স্ট্রাকচার তৈরিতে কম্পাইলারকে হিপে ৮-বাইটের পয়েন্টার বক্স ব্যবহারের নির্দেশ দেয়।'
          }
        },
        {
          term: 'Result Enum',
          def: {
            en: 'Standard library enum (Result<Success, Failure>) modeling either a successful value or a typed recoverable error.',
            bn: 'স্ট্যান্ডার্ড লাইব্রেরির এনাম যা হয় সফল ডেটা নয়তো নির্দিষ্ট টাইপের এরর প্রকাশ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'associated-values-vs-raw-values-ex1',
      kind: 'mcq',
      topic: 'associated-values-vs-raw-values-difference',
      question: {
        en: 'What is the fundamental architectural difference between Swift "raw values" and "associated values" on enums?',
        bn: 'Swift এনামে "র ভ্যালু" (raw values) এবং "অ্যাসোসিয়েটেড ভ্যালু" (associated values)-এর মধ্যে মৌলিক স্থাপত্যিক পার্থক্য কী?'
      },
      options: [
        {
          en: 'Raw values are compile-time static constants shared by all instances of a case; associated values are dynamic, instance-specific payloads that vary with each creation',
          bn: 'র ভ্যালু হলো কম্পাইল-টাইমের স্থির ধ্রুবক যা কেসের সব অবজেক্ট শেয়ার করে; আর অ্যাসোসিয়েটেড ভ্যালু হলো পরিবর্তনশীল ডায়নামিক মান যা প্রতিবার আলাদা হতে পারে'
        },
        {
          en: 'Raw values are only supported in web browsers',
          bn: 'র ভ্যালু কেবল ওয়েব ব্রাউজারে কাজ করে'
        },
        {
          en: 'Associated values convert all strings into 32-bit floating point numbers',
          bn: 'অ্যাসোসিয়েটেড ভ্যালু সমস্ত স্ট্রিংকে ৩২-বিট ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করে'
        },
        {
          en: 'There is zero difference between raw values and associated values',
          bn: 'র ভ্যালু এবং অ্যাসোসিয়েটেড ভ্যালুর মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Raw values are fixed at compile time; associated values store unique instance data.',
        bn: 'র ভ্যালু সবার জন্য এক থাকে, কিন্তু অ্যাসোসিয়েটেড ভ্যালু প্রতি অবজেক্টে ভিন্ন তথ্য বহন করে।'
      },
      explanation: {
        en: 'Raw values prepopulate the enum with predefined values of the same type. Associated values allow each instance of an enum case to encapsulate custom runtime data.',
        bn: 'এর মাধ্যমে এনাম সাধারণ তালিকার সীমা ছাড়িয়ে জটিল ডেটা মডেল তৈরিতে ব্যবহৃত হয়।'
      }
    },
    {
      id: 'indirect-enum-recursive-tree-ex2',
      kind: 'mcq',
      topic: 'indirect-enum-heap-boxing-pointer',
      question: {
        en: 'Why is the "indirect" keyword strictly required when defining recursive enums (like binary trees or linked lists) in Swift?',
        bn: 'Swift-এ রিকার্সিভ এনাম (যেমন বাইনারি ট্রি বা লিঙ্কড লিস্ট) তৈরির সময় কেন "indirect" কি-ওয়ার্ড লেখা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'Value types require a compile-time known size; a direct recursive enum would have infinite size, so indirect introduces an 8-byte heap pointer box',
          bn: 'ভ্যালু টাইপের আকার কম্পাইল-টাইমেই নির্দিষ্ট হতে হয়; সরাসরি রিকার্সিভ এনামের আকার অসীম হয়ে যেত, তাই indirect একটি ৮-বাইটের হিপ পয়েন্টার বক্স তৈরি করে'
        },
        {
          en: 'indirect instructs the phone to reboot on low battery',
          bn: 'ব্যাটারি কম থাকলে indirect ফোন রিবুট করার নির্দেশ দেয়'
        },
        {
          en: 'indirect translates the enum into an SQL database schema',
          bn: 'indirect এনামটিকে একটি এসকিউএল ডাটাবেজ স্কিমায় রূপান্তর করে'
        },
        {
          en: 'The indirect keyword was deprecated in Swift 4.0',
          bn: 'Swift ৪.০ সংস্করণে indirect কি-ওয়ার্ড বাতিল করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'indirect adds a layer of indirection (an 8-byte pointer) to prevent infinite memory size.',
        bn: 'মেমোরির আকার যাতে অসীম না হয়, সেজন্য এটি একটি নির্দিষ্ট ৮-বাইটের পয়েন্টার বসায়।'
      },
      explanation: {
        en: 'Because enums are value types, the compiler must allocate enough memory to fit any case. An indirect case boxes its data on the heap, giving that case a fixed 8-byte pointer size.',
        bn: 'পয়েন্টারের সাইজ নির্দিষ্ট থাকায় কম্পাইলার সহজেই মেমোরির মাপ নির্ধারণ করতে পারে।'
      }
    },
    {
      id: 'switch-exhaustiveness-compile-time-safety-ex3',
      kind: 'mcq',
      topic: 'switch-statement-exhaustiveness-compile-error',
      question: {
        en: 'What occurs if a Swift developer authors a "switch" statement over an enum but fails to handle one of the cases?',
        bn: 'একজন Swift ডেভেলপার একটি এনামের ওপর "switch" লিখে কোনো একটি কেস বাদ দিলে কী ঘটে?'
      },
      options: [
        {
          en: 'The compiler halts build execution with a compile-time error, enforcing that all cases must be handled or an explicit default provided',
          bn: 'কম্পাইলার তাৎক্ষণিকভাবে এরর দিয়ে বিল্ড আটকে দেয় এবং সমস্ত কেস পূরণ করা বা স্পষ্ট default প্রদান করা বাধ্যতামূলক করে'
        },
        {
          en: 'The code silently falls through to the next function',
          bn: 'কোডটি নীরবে পরের ফাংশনে চলে যায়'
        },
        {
          en: 'The phone freezes with a kernel panic at runtime',
          bn: 'রানটাইমে মোবাইলটি কার্নেল প্যানিক দিয়ে অচল হয়ে যায়'
        },
        {
          en: 'The compiler randomly selects one of the other cases to run',
          bn: 'কম্পাইলার এলোমেলোভাবে অন্য যেকোনো একটি কেস চালিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Swift switch statements must be exhaustive.',
        bn: 'সবগুলো বিকল্প না লেখা পর্যন্ত কোড কম্পাইল হতেই সম্পূর্ণ অস্বীকৃতি জানায়।'
      },
      explanation: {
        en: 'Exhaustiveness guarantees that adding a new case to an enum immediately flags all switch statements in the project that require updates, preventing unhandled state bugs.',
        bn: 'ভবিষ্যতে নতুন কেস যোগ করলেও কম্পাইলার সব বাদ পড়া কোড মনে করিয়ে দেয়।'
      }
    },
    {
      id: 'pattern-guards-where-clause-ex4',
      kind: 'mcq',
      topic: 'pattern-matching-where-clause-guards',
      question: {
        en: 'How do "where" clauses enhance pattern matching inside Swift switch statements (e.g. "case .httpError(let code) where code >= 500:")?',
        bn: 'Swift সুইচ স্টেটমেন্টের ভেতর "where" ক্লজ কীভাবে প্যাটার্ন ম্যাচিংকে আরও শক্তিশালী করে (যেমন "case .httpError(let code) where code >= 500:")?'
      },
      options: [
        {
          en: 'They attach dynamic boolean expressions to pattern bindings, allowing fine-grained condition filtering without forfeiting switch exhaustiveness',
          bn: 'তারা প্যাটার্ন বাইন্ডিংয়ের সাথে ডায়নামিক বুলিয়ান শর্ত যোগ করার সুযোগ দেয়, যা সুইচের পূর্ণাঙ্গতা না হারিয়েই সূক্ষ্ম শর্তভিত্তিক কোড চালানোর সুবিধা দেয়'
        },
        {
          en: 'They execute an SQL database query across local network sockets',
          bn: 'তারা লোকাল নেটওয়ার্ক সকেটে এসকিউএল ডাটাবেজ কোয়েরি চালায়'
        },
        {
          en: 'They convert all integer codes into 64-bit floating point numbers',
          bn: 'তারা সমস্ত ইন্টিজার কোডকে ৬৪-বিট ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করে'
        },
        {
          en: 'where clauses were removed from switches in Swift 5.0',
          bn: 'Swift ৫.০ সংস্করণে সুইচ থেকে where ক্লজ বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'where clauses add dynamic boolean checks to matched cases.',
        bn: 'প্যাটার্ন মিলার পর বাড়তি শর্ত সত্য কিনা তা যাচাই করতে where বসে।'
      },
      explanation: {
        en: 'Pattern guards cleanly express complex branching rules directly in the switch arms without requiring nested if-else structures.',
        bn: 'ফলে নেস্টেড কোড না লিখে সরাসরি সুইচের ভেতরেই নিখুঁত শর্ত বসানো যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-enums-and-the-switch',
    title: {
      en: 'Swift Enums & Pattern Matching Quiz',
      bn: 'Swift এনাম এবং প্যাটার্ন ম্যাচিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-case-iterable-protocol-synthesis',
        kind: 'mcq',
        topic: 'case-iterable-protocol-all-cases',
        question: {
          en: 'What capability does conforming to the "CaseIterable" protocol provide to a Swift enum?',
          bn: 'একটি Swift এনামে "CaseIterable" প্রটোকল বাস্তবায়ন করলে কোন সুবিধা পাওয়া যায়?'
        },
        options: [
          {
            en: 'The compiler automatically synthesizes an "allCases" collection property containing every defined case in declaration order',
            bn: 'কম্পাইলার স্বয়ংক্রিয়ভাবে একটি "allCases" কালেকশন প্রোপার্টি তৈরি করে দেয় যার মধ্যে এনামের সমস্ত কেস ক্রমানুসারে থাকে'
          },
          {
            en: 'It encrypts the enum cases using SHA-256 hashes',
            bn: 'এটি SHA-256 হ্যাশ ব্যবহার করে এনামের কেসগুলো এনক্রিপ্ট করে'
          },
          {
            en: 'It converts the enum into an executable bash script',
            bn: 'এটি এনামটিকে একটি এক্সিকিউটেবল ব্যাশ স্ক্রিপ্টে রূপান্তর করে'
          },
          {
            en: 'CaseIterable is only available for enums with associated values',
            bn: 'CaseIterable কেবল অ্যাসোসিয়েটেড ভ্যালুযুক্ত এনামে উপলব্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'CaseIterable provides an allCases array of all enum cases.',
          bn: 'এনামের সব বিকল্পের তালিকা লুপে বা মেনুতে দেখানোর জন্য allCases তৈরি হয়।'
        },
        explanation: {
          en: 'Conforming to CaseIterable gives developers a ready-made array of all cases, making populating UI pickers and segment controls effortless.',
          bn: 'এর ফলে ইউআই মেনু বা ড্রপডাউনে সব বিকল্প স্বয়ংক্রিয়ভাবে প্রদর্শন করা সহজ হয়।'
        }
      },
      {
        id: 'quiz-enum-methods-and-computed-properties',
        kind: 'mcq',
        topic: 'enum-methods-and-computed-properties-capabilities',
        question: {
          en: 'Can Swift enums define methods, initializers, and computed properties like structs?',
          bn: 'স্ট্রাক্টের মতো Swift এনামেও কি নিজস্ব মেথড, ইনিশিয়ালাইজার এবং কম্পিউটেড প্রোপার্টি লেখা সম্ভব?'
        },
        options: [
          {
            en: 'Yes, Swift enums can define instance methods, static methods, custom initializers, and computed properties, but cannot declare stored properties',
            bn: 'হ্যাঁ, Swift এনামে মেথড, কাস্টম ইনিশিয়ালাইজার এবং কম্পিউটেড প্রোপার্টি লেখা যায়, কিন্তু কোনো স্টোর্ড প্রোপার্টি রাখা যায় না'
          },
          {
            en: 'No, Swift enums are limited strictly to containing lists of raw names',
            bn: 'না, Swift এনাম কেবল সাধারণ নামের তালিকায় সীমাবদ্ধ'
          },
          {
            en: 'Only if the enum contains more than 10 cases',
            bn: 'কেবল তখনই যদি এনামে ১০ টির বেশি কেস থাকে'
          },
          {
            en: 'Enums cannot have methods in safe Swift',
            bn: 'নিরাপদ Swift-এ এনামে কোনো মেথড থাকতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Enums can have methods and computed properties, but no stored properties.',
          bn: 'মেথড বা কম্পিউটেড প্রোপার্টি থাকতে পারলেও বাড়তি স্টোর্ড ভ্যারিয়েবল রাখা যায় না।'
        },
        explanation: {
          en: 'Swift enums are full types capable of rich behaviors. While they cannot store state outside their associated values, computed properties and methods are fully supported.',
          bn: 'এর ফলে এনামের ভেতরেই প্রয়োজনীয় লজিক ও রূপান্তরের মেথড গুছিয়ে রাখা যায়।'
        }
      },
      {
        id: 'quiz-if-case-pattern-sugar',
        kind: 'mcq',
        topic: 'if-case-let-syntactic-sugar',
        question: {
          en: 'When is "if case let" syntax preferred over a full "switch" statement in Swift?',
          bn: 'Swift-এ কখন সম্পূর্ণ "switch" স্টেটমেন্টের বদলে "if case let" সিনট্যাক্স ব্যবহার সুবিধাজনক?'
        },
        options: [
          {
            en: 'When you only want to match and extract data from 1 specific enum case while ignoring all other remaining cases without writing a default arm',
            bn: 'যখন আপনি অন্য সব কেস উপেক্ষা করে শুধুমাত্র ১ টি নির্দিষ্ট কেস ম্যাচ এবং তার ডেটা বের করতে চান কোনো default আর্ম লেখা ছাড়া'
          },
          {
            en: 'When compiling code for 16-bit Apple Watch hardware only',
            bn: 'কেবল ১৬-বিট অ্যাপল ওয়াচ হার্ডওয়্যারের কোড কম্পাইল করার সময়'
          },
          {
            en: 'When the enum contains more than 100 cases',
            bn: 'যখন এনামে ১০০ টিরও বেশি কেস থাকে'
          },
          {
            en: 'if case let disables memory management inside the block',
            bn: 'if case let ব্লকের ভেতরের মেমোরি ম্যানেজমেন্ট বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'if case let matches exactly 1 pattern cleanly.',
          bn: 'শুধুমাত্র একটি বিশেষ কেস যাচাইয়ের জন্য এটি চমৎকার সংক্ষিপ্ত সিনট্যাক্স।'
        },
        explanation: {
          en: 'if case let provides concise syntax sugar for matching a single case, eliminating the need to write an exhaustive switch statement with a verbose default case.',
          bn: 'এর ফলে অতিরিক্ত কোড না লিখে সহজেই নির্দিষ্ট কেসের ডেটা ব্যবহার করা যায়।'
        }
      },
      {
        id: 'quiz-result-get-throws-idiom',
        kind: 'mcq',
        topic: 'result-type-get-throws-unwrapping',
        question: {
          en: 'How does the standard library method "try result.get()" bridge the "Result<T, Error>" enum with Swift\'s throwing error system?',
          bn: '"try result.get()" মেথডটি কীভাবে "Result<T, Error>" এনামকে Swift-এর থ্রোয়িং এরর সিস্টেমের সাথে সংযুক্ত করে?'
        },
        options: [
          {
            en: 'It unwraps and returns the Success value if present, or throws the encapsulated Failure error directly to the enclosing do-catch block',
            bn: 'সফল হলে এটি Success মানটি আনর‍্যাপ করে ফেরত দেয়, আর ব্যর্থ হলে ভেতরের Failure এররটি সরাসরি do-catch ব্লকে থ্রো করে দেয়'
          },
          {
            en: 'It deletes the result variable from computer memory',
            bn: 'এটি মেমোরি থেকে রেজাল্ট ভ্যারিয়েবলটি মুছে ফেলে'
          },
          {
            en: 'It converts the result into an encrypted hash string',
            bn: 'এটি রেজাল্টটিকে একটি এনক্রিপ্ট করা হ্যাশ স্ট্রিংয়ে রূপান্তর করে'
          },
          {
            en: 'result.get() was deprecated in Swift 5.0',
            bn: 'Swift ৫.০ সংস্করণে result.get() বাতিল করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'result.get() returns the success value or throws the failure error.',
          bn: 'মান থাকলে তা খুলে দেয়, আর ভুল থাকলে স্বয়ংক্রিয়ভাবে এরর ছুড়ে দেয়।'
        },
        explanation: {
          en: 'The get() method seamlessly converts stored Result values into throw/try control flow, unifying asynchronous enum results with synchronous error handling.',
          bn: 'এর মাধ্যমে অ্যাসিঙ্ক রেজাল্টকে সাধারণ do-catch ব্লকে সহজেই কাজে লাগানো যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'asyncs-and-the-actor',
    title: {
      en: 'Structured Concurrency, Async/Await & Actors',
      bn: 'স্ট্রাকচার্ড কনকারেন্সি, Async/Await এবং অ্যাক্টরস'
    }
  }
};
