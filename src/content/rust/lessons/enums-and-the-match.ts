import type { Lesson } from '../../../lib/types';

export const EnumsAndTheMatchLesson: Lesson = {
  slug: 'enums-and-the-match',
  tech: 'rust',
  title: {
    en: 'Enums, Pattern Matching & Exhaustiveness',
    bn: 'এনাম, প্যাটার্ন ম্যাচিং এবং পূর্ণাঙ্গতা'
  },
  summary: {
    en: 'Master algebraic data types (ADTs) in Rust. Define enriched enum variants carrying payload data, construct tagged unions in memory with 1-byte discriminants, master exhaustive pattern matching, and handle Option<T> and Result<T, E> using the ? operator.',
    bn: 'Rust-এ অ্যালজেব্রাইক ডেটা টাইপ (ADT) আয়ত্ত করুন। পেলোড বহনকারী সমৃদ্ধ এনাম ভ্যারিয়েন্ট তৈরি, ১-বাইট ডিসক্রিমিন্যান্ট সহ ট্যাগড ইউনিয়ন মেমোরি লেআউট, পূর্ণাঙ্গ প্যাটার্ন ম্যাচিং এবং ? অপারেটর দিয়ে Option<T> ও Result<T, E> এর ত্রুটি ব্যবস্থাপনা।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'enums-and-tagged-unions-heading',
      text: {
        en: 'Algebraic Data Types and Tagged Union Memory Layout',
        bn: 'অ্যালজেব্রাইক ডেটা টাইপ এবং ট্যাগড ইউনিয়ন মেমোরি লেআউট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In languages like C or JavaScript, enums serve primarily as named integer constants. In Rust (the memory-safe systems programming language), enums represent algebraic data types known as tagged unions. Each enum variant can encapsulate completely distinct data shapes, ranging from unit variants with 0 payload bytes to tuple variants and full struct payloads. In physical memory, Rust lays out an enum using a 1-byte integer discriminant tag followed by padding bytes and a payload zone sized to the single largest variant. Through niche-filling optimization, types containing non-zero pointers (such as "Option<&T>") use the 0x0 null address to encode "None" without allocating an extra discriminant byte, matching the exact 8-byte footprint of a raw pointer with 100 percent compile-time safety.',
        bn: 'C বা JavaScript-এর মতো ভাষায় এনাম মূলত কয়েকটি ধারাবাহিক পূর্ণসংখ্যার নাম হিসেবে কাজ করে। কিন্তু Rust (মেমোরি-নিরাপদ সিস্টেম প্রোগ্রামিং ভাষা)-এ এনাম হলো অ্যালজেব্রাইক ডেটা টাইপ বা ট্যাগড ইউনিয়ন। প্রতিটি এনাম ভ্যারিয়েন্ট সম্পূর্ণ ভিন্ন ভিন্ন আকৃতির ডেটা বহন করতে পারে, যা ০ পেলোড বাইটের ইউনিট ভ্যারিয়েন্ট থেকে শুরু করে টাপল ও স্ট্রাক্ট হতে পারে। মেমোরির ভেতরে Rust এনাম সাজাতে ১-বাইটের একটি ডিসক্রিমিন্যান্ট ট্যাগ ব্যবহার করে, যার পর প্রয়োজনীয় প্যাডিং এবং সর্ববৃহৎ ভ্যারিয়েন্টের সমান জায়গা বরাদ্দ থাকে। নিচ-ফিলিং অপটিমাইজেশনের মাধ্যমে নন-জিরো পয়েন্টারযুক্ত টাইপ (যেমন "Option<&T>") কোনো অতিরিক্ত ডিসক্রিমিন্যান্ট বাইট ছাড়াই 0x0 নাল ঠিকানাকে "None" হিসেবে চিহ্নিত করে, যা ১০০ ভাগ কম্পাইল-টাইম সুরক্ষাসহ ঠিক একটি ৮-বাইট পয়েন্টারের সমান মেমোরি দখল করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Tagged union memory representation: A 1-byte discriminant tag plus 7-byte padding and 24-byte payload area, compared to the 8-byte niche optimization.',
        bn: 'চিত্র ১: ট্যাগড ইউনিয়নের মেমোরি বিন্যাস: ১-বাইট ডিসক্রিমিন্যান্ট ট্যাগ, ৭-বাইট প্যাডিং এবং ২৪-বাইট পেলোড অঞ্চল, যার সাথে ৮-বাইটের নিচ অপটিমাইজেশনের তুলনা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUST ENUM TAGGED UNION MEMORY &amp; NICHE OPTIMIZATION</text>

  <!-- Left: Standard Tagged Union (32 Bytes Total) -->
  <g transform="translate(35, 65)">
    <rect width="400" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="400" height="30" rx="8" fill="#0284c7" />
    <text x="200" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Standard Tagged Union: 32 Bytes Total</text>

    <!-- Tag -->
    <rect x="20" y="55" width="80" height="75" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="60" y="80" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Tag</text>
    <text x="60" y="100" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">1 Byte</text>
    <text x="60" y="118" fill="#cbd5e1" font-size="9" font-family="sans-serif" text-anchor="middle">0 / 1 / 2</text>

    <!-- Padding -->
    <rect x="110" y="55" width="70" height="75" rx="5" fill="#334155" stroke="#64748b" />
    <text x="145" y="80" fill="#94a3b8" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Pad</text>
    <text x="145" y="100" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">7 Bytes</text>
    <text x="145" y="118" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">Alignment</text>

    <!-- Payload Space (max variant = String = 24 bytes) -->
    <rect x="190" y="55" width="190" height="75" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="285" y="80" fill="#34d399" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Variant Payload Zone</text>
    <text x="285" y="100" fill="#38bdf8" font-size="10" font-family="monospace" text-anchor="middle">24 Bytes</text>
    <text x="285" y="118" fill="#cbd5e1" font-size="9" font-family="sans-serif" text-anchor="middle">Sized to largest variant</text>

    <!-- Description -->
    <rect x="20" y="150" width="360" height="65" rx="5" fill="#0284c7" fill-opacity="0.15" stroke="#0284c7" />
    <text x="30" y="172" fill="#38bdf8" font-size="10" font-family="monospace">enum WebEvent { Quit, Key(i32, i32), Msg(String) }</text>
    <text x="30" y="192" fill="#f8fafc" font-size="10" font-family="sans-serif">Total = 1 byte tag + 7 pad + 24 payload = 32 bytes</text>
  </g>

  <!-- Right: Niche Optimization (Option<&T>) -->
  <g transform="translate(470, 65)">
    <rect width="335" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="335" height="30" rx="8" fill="#d97706" />
    <text x="167" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Niche Optimization: Option&lt;&amp;T&gt; (8 Bytes)</text>

    <!-- Pointer with Niche -->
    <rect x="20" y="55" width="295" height="75" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="167" y="80" fill="#fbbf24" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Non-Null Pointer / Niche Tag</text>
    <text x="167" y="100" fill="#38bdf8" font-size="10" font-family="monospace" text-anchor="middle">Exactly 8 Bytes</text>
    <text x="167" y="118" fill="#cbd5e1" font-size="9" font-family="sans-serif" text-anchor="middle">0x0 address represents "None" safely</text>

    <!-- Description -->
    <rect x="20" y="150" width="295" height="65" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="30" y="172" fill="#fbbf24" font-size="10" font-family="monospace">Option&lt;&amp;str&gt; has 0 bytes tag overhead</text>
    <text x="30" y="192" fill="#f8fafc" font-size="10" font-family="sans-serif">Raw C pointer performance without null safety risks</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'pattern-matching-and-try-heading',
      text: {
        en: 'Exhaustive Pattern Matching, Match Guards, and the ? Operator',
        bn: 'পূর্ণাঙ্গ প্যাটার্ন ম্যাচিং, ম্যাচ গার্ডস এবং ? অপারেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rust forbids unhandled branching states through strictly enforced pattern matching exhaustiveness. If a developer authors a match expression covering 3 variants but neglects the 4th, the compiler halts build execution with error E0004. Unlike permissive C switch statements, match arms require complete structural coverage, enabling confident system evolution. For conditions requiring runtime filtering, match guards (formulated with "if condition") allow conditional branching without forfeiting exhaustiveness. Furthermore, Rust abandons unchecked exceptions in favor of "Result<T, E>". The "?" operator eliminates tedious error-checking boilerplate by unwrapping successful "Ok(v)" values inline or immediately bubbling an "Err(e)" up the call stack with automatic type conversion.',
        bn: 'Rust কোনো অনাকাঙ্ক্ষিত অসম্পূর্ণ কোড স্টেট চলতে দেয় না, বরং কঠোর পূর্ণাঙ্গ প্যাটার্ন ম্যাচিং বাধ্য করে। কোনো ডেভেলপার যদি ৩ টি ভ্যারিয়েন্টের ম্যাচ লিখে ৪র্থ ভ্যারিয়েন্টটি ভুলে যান, তবে কম্পাইলার E0004 এরর দিয়ে বিল্ড আটকে দেয়। C ভাষার সুইচের মতো ফাঁকফোকর না থাকায় সিস্টেমের যেকোনো নতুন পরিবর্তনে কোনো শাখা বাদ পড়ার ঝুঁকি থাকে না। রানটাইম ফিল্টারিংয়ের প্রয়োজন হলে ম্যাচ গার্ডস ("if condition") ব্যবহার করে শর্তযুক্ত ব্রাঞ্চিং তৈরি করা যায়। উপরন্তু, বিপজ্জনক আনচেকড এক্সেপশনের বদলে Rust "Result<T, E>" ব্যবহার করে। "?" অপারেটর কোডকে পরিচ্ছন্ন রাখে; এটি সফল "Ok(v)" মানকে সরাসরি বের করে নেয় আর ভুল হলে সঙ্গে সঙ্গে "Err(e)" রিটার্ন করে ওপরের ফাংশনে পাঠিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Rust tagged union memory calculation and exhaustive pattern matching verification.',
        bn: 'Rust ট্যাগড ইউনিয়ন মেমোরি হিসাব এবং পূর্ণাঙ্গ প্যাটার্ন ম্যাচিং যাচাইকরণের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Rust Tagged Union Memory Layout and Exhaustive Pattern Matching

export type VariantShape =
  | { kind: 'Unit'; tag: number; bytePayload: number }
  | { kind: 'Tuple'; tag: number; bytePayload: number; data: [number, number] }
  | { kind: 'Struct'; tag: number; bytePayload: number; text: string };

export class TaggedUnionCalculator {
  // Rust aligns enums to 8-byte boundaries on 64-bit systems
  public static calculateTotalSize(variants: { name: string; bytePayload: number }[]): {
    tagBytes: number;
    paddingBytes: number;
    payloadBytes: number;
    totalBytes: number;
  } {
    const tagBytes = 1;
    const maxPayload = Math.max(...variants.map(v => v.bytePayload), 0);
    // Align total size up to 8 bytes
    const unalignedSize = tagBytes + maxPayload;
    const totalBytes = Math.ceil(unalignedSize / 8) * 8;
    const paddingBytes = totalBytes - (tagBytes + maxPayload);

    return {
      tagBytes: tagBytes,
      paddingBytes: paddingBytes,
      payloadBytes: maxPayload,
      totalBytes: totalBytes
    };
  }

  // Exhaustive matcher: compiler error E0004 if a variant is omitted
  public static evaluateMatch(event: VariantShape): string {
    switch (event.kind) {
      case 'Unit':
        return 'Quit command executed (tag ' + event.tag + ', payload ' + event.bytePayload + 'B)';
      case 'Tuple':
        return 'Moved to coords: ' + event.data[0] + ', ' + event.data[1] + ' (tag ' + event.tag + ')';
      case 'Struct':
        return 'Message logged: ' + event.text + ' (tag ' + event.tag + ', payload ' + event.bytePayload + 'B)';
      default: {
        // Compile-time exhaustiveness check
        const _exhaustiveCheck: never = event;
        throw new Error('E0004: Non-exhaustive patterns not covered: ' + JSON.stringify(_exhaustiveCheck));
      }
    }
  }
}

// 1. Calculate Tagged Union Memory Allocation
const variants = [
  { name: 'Quit', bytePayload: 0 },
  { name: 'Move', bytePayload: 8 },
  { name: 'Write', bytePayload: 24 } // Sized to String pointer (24 bytes)
];

const layout = TaggedUnionCalculator.calculateTotalSize(variants);
console.log('Discriminant Tag:', layout.tagBytes, 'Byte'); // 1
console.log('Padding Bytes:', layout.paddingBytes, 'Bytes'); // 7
console.log('Largest Payload:', layout.payloadBytes, 'Bytes'); // 24
console.log('Total Tagged Union Footprint:', layout.totalBytes, 'Bytes'); // 32

// 2. Dispatch exhaustive matching
const event1: VariantShape = { kind: 'Unit', tag: 0, bytePayload: 0 };
const event2: VariantShape = { kind: 'Tuple', tag: 1, bytePayload: 8, data: [100, 200] };
const event3: VariantShape = { kind: 'Struct', tag: 2, bytePayload: 24, text: 'Transaction Committed' };

console.log(TaggedUnionCalculator.evaluateMatch(event1));
console.log(TaggedUnionCalculator.evaluateMatch(event2));
console.log(TaggedUnionCalculator.evaluateMatch(event3));`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Algebraic Data Type',
          def: {
            en: 'A composite type formed by combining other types, where enum variants represent sum types carrying diverse data.',
            bn: 'একটি যৌগিক টাইপ যাতে এনাম ভ্যারিয়েন্টগুলো বিভিন্ন ধরণের ডেটা ধারণকারী সাম টাইপ হিসেবে কাজ করে।'
          }
        },
        {
          term: 'Discriminant Tag',
          def: {
            en: 'An integer tag (typically 1 byte) stored alongside enum payloads to indicate which variant is currently active.',
            bn: 'একটি পূর্ণসংখ্যার ট্যাগ (সাধারণত ১ বাইট) যা নির্দেশ করে বর্তমানে কোন ভ্যারিয়েন্টটি সক্রিয় রয়েছে।'
          }
        },
        {
          term: 'Niche Optimization',
          def: {
            en: 'Compiler technique repurposing invalid memory representations (like 0x0) as enum variants, saving memory overhead.',
            bn: 'কম্পাইলারের কৌশল যা অবৈধ মেমোরি মানকে (যেমন 0x0) ভ্যারিয়েন্ট হিসেবে ব্যবহার করে অতিরিক্ত বাইট বাচায়।'
          }
        },
        {
          term: 'Exhaustive Matching',
          def: {
            en: 'Compile-time guarantee requiring match expressions to explicitly account for every possible variant of an enum.',
            bn: 'কম্পাইল-টাইমের কঠোর নিয়ম যা ম্যাচ এক্সপ্রেশনে এনামের প্রতিটি সম্ভাব্য ভ্যারিয়েন্ট পূরণ করা বাধ্যতামূলক করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tagged-union-discriminant-size-ex1',
      kind: 'mcq',
      topic: 'enum-discriminant-tag-memory-size',
      question: {
        en: 'How does the Rust compiler physically distinguish which variant of an algebraic enum is stored in memory?',
        bn: 'Rust কম্পাইলার মেমোরিতে একটি অ্যালজেব্রাইক এনামের কোন ভ্যারিয়েন্টটি সংরক্ষিত আছে তা শারীরিকভাবে কীভাবে শনাক্ত করে?'
      },
      options: [
        {
          en: 'By prepending an integer discriminant tag (typically 1 byte) before the variant\'s payload data',
          bn: 'ভ্যারিয়েন্টের পেলোড ডেটার পূর্বে একটি পূর্ণসংখ্যার ডিসক্রিমিন্যান্ট ট্যাগ (সাধারণত ১ বাইট) যুক্ত করে'
        },
        {
          en: 'By querying an external database on every function call',
          bn: 'প্রতিটি ফাংশন কলের সময় একটি বহিরাগত ডাটাবেজে অনুসন্ধান চালিয়ে'
        },
        {
          en: 'By reserving 1024 bytes of disk space per enum',
          bn: 'প্রতিটি এনামের জন্য ডিস্কে ১০২৪ বাইট জায়গা সংরক্ষণ করে'
        },
        {
          en: 'Rust enums have no tag and rely entirely on random guessing',
          bn: 'Rust এনামে কোনো ট্যাগ থাকে না এবং এটি সম্পূর্ণ অনুমানের ওপর নির্ভর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A discriminant tag identifies the active enum variant.',
        bn: '১-বাইটের একটি ট্যাগ সক্রিয় ভ্যারিয়েন্টের পরিচয় মেমোরিতে ধরে রাখে।'
      },
      explanation: {
        en: 'The compiler stores a compact discriminant tag integer to know which variant data is populated in the subsequent payload memory space.',
        bn: 'এর মাধ্যমে কম্পিউটার বুঝতে পারে পরবর্তী মেমোরিতে কোন ধরণের ডেটা রয়েছে।'
      }
    },
    {
      id: 'niche-filling-null-pointer-optimization-ex2',
      kind: 'mcq',
      topic: 'niche-filling-optimization-option-pointer',
      question: {
        en: 'What architectural achievement does Rust\'s "niche-filling optimization" deliver for "Option<&T>" or "Option<Box<T>>()"?',
        bn: 'Rust-এর "নিচ-ফিলিং অপটিমাইজেশন" "Option<&T>" বা "Option<Box<T>>"-এর ক্ষেত্রে কোন স্থাপত্যিক সাফল্য এনে দেয়?'
      },
      options: [
        {
          en: 'It represents the None variant using the 0x0 null pointer address, eliminating discriminant tag overhead and matching the exact 8-byte footprint of a raw pointer',
          bn: 'এটি 0x0 নাল পয়েন্টার ঠিকানাকে None ভ্যারিয়েন্ট হিসেবে ব্যবহার করে, যা ডিসক্রিমিন্যান্ট ট্যাগের খরচ বাঁচিয়ে ঠিক একটি ৮-বাইট সাধারণ পয়েন্টারের সমান মেমোরি দখল করে'
        },
        {
          en: 'It converts all null pointers into 32-bit floating point numbers',
          bn: 'এটি সমস্ত নাল পয়েন্টারকে ৩২-বিট ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করে'
        },
        {
          en: 'It doubles the required memory from 8 bytes to 16 bytes',
          bn: 'এটি প্রয়োজনীয় মেমোরি ৮ বাইট থেকে দ্বিগুণ করে ১৬ বাইট বানিয়ে ফেলে'
        },
        {
          en: 'Niche optimization was removed in the Rust 2018 edition',
          bn: 'Rust ২০১৮ সংস্করণে নিচ অপটিমাইজেশন বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Since safe references cannot be null (0x0), 0x0 is used to represent None with zero overhead.',
        bn: 'যেহেতু বৈধ পয়েন্টার কখনোই শূন্য হতে পারে না, তাই শূন্য মানটিকেই None হিসেবে চতুরতার সাথে কাজে লাগানো হয়।'
      },
      explanation: {
        en: 'Because safe Rust guarantees references are never null, 0x0 represents an unused "niche". The compiler encodes None as 0x0 without needing a separate discriminant tag.',
        bn: 'ফলে C ভাষার মতো মেমোরি সাইজ রেখেই সম্পূর্ণ নাল-পয়েন্টার মুক্ত নিরাপত্তা পাওয়া যায়।'
      }
    },
    {
      id: 'compiler-error-e0004-exhaustiveness-ex3',
      kind: 'mcq',
      topic: 'match-exhaustiveness-compiler-error-e0004',
      question: {
        en: 'What occurs when a Rust developer authors a "match" expression on an enum but fails to handle one of the defined variants?',
        bn: 'কোনো Rust ডেভেলপার একটি এনামের ওপর "match" এক্সপ্রেশন লিখে একটি ভ্যারিয়েন্ট সামলাতে ব্যর্থ হলে কী ঘটে?'
      },
      options: [
        {
          en: 'The compiler halts compilation immediately with error E0004, enforcing complete structural exhaustiveness before any code can run',
          bn: 'কম্পাইলার তাৎক্ষণিকভাবে E0004 এরর প্রদর্শন করে কম্পাইলেশন বন্ধ করে দেয়, যা কোড চলার আগেই সম্পূর্ণ কাঠামোগত পূর্ণাঙ্গতা নিশ্চিত করে'
        },
        {
          en: 'The application crashes with a null pointer exception at runtime',
          bn: 'রানটাইমে অ্যাপ্লিকেশনটি নাল পয়েন্টার এক্সেপশন দিয়ে ক্র্যাশ করে'
        },
        {
          en: 'The compiler silently fills the missing branch with zero',
          bn: 'কম্পাইলার নীরবে বাদ পড়া শাখাটি শূন্য দিয়ে পূরণ করে দেয়'
        },
        {
          en: 'The operating system restarts automatically',
          bn: 'অপারেটিং সিস্টেম স্বয়ংক্রিয়ভাবে রিস্টার্ট নেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Rust match expressions are strictly exhaustive at compile-time.',
        bn: 'সবগুলো বিকল্প হ্যান্ডেল না করা পর্যন্ত কম্পাইলার কোড বিল্ড করতে সম্পূর্ণ অস্বীকৃতি জানায়।'
      },
      explanation: {
        en: 'Exhaustive pattern matching guarantees that unhandled edge cases can never trigger unexpected states or undefined behavior in production.',
        bn: 'এর মাধ্যমে ভবিষ্যতের বাগ শুরুতেই নিশ্চিহ্ন করা সম্ভব হয়।'
      }
    },
    {
      id: 'question-mark-operator-propagation-ex4',
      kind: 'mcq',
      topic: 'try-operator-question-mark-propagation',
      question: {
        en: 'How does the question mark ("?") operator streamline error propagation when working with "Result<T, E>" in Rust?',
        bn: 'Rust-এ "Result<T, E>"-এর সাথে কাজ করার সময় প্রশ্নবোধক চিহ্ন ("?") অপারেটর কীভাবে এরর ব্যবস্থাপনা সহজ করে?'
      },
      options: [
        {
          en: 'It unwraps Ok(val) if successful, or immediately returns Err(e) from the enclosing function with automatic type conversion via the From trait',
          bn: 'সফল হলে এটি সরাসরি Ok(val) থেকে মান বের করে আনে, আর ব্যর্থ হলে From ট্রেইটের মাধ্যমে টাইপ কনভার্ট করে বর্তমান ফাংশন থেকে Err(e) রিটার্ন করে দেয়'
        },
        {
          en: 'It prints a warning to the console and continues running with corrupted data',
          bn: 'এটি কনসোলে একটি সতর্কবার্তা প্রিন্ট করে নষ্ট ডেটা নিয়ে চলতে থাকে'
        },
        {
          en: 'It converts the error into a 64-bit integer index',
          bn: 'এটি এররটিকে একটি ৬৪-বিট পূর্ণসংখ্যার ইনডেক্সে রূপান্তর করে'
        },
        {
          en: 'The ? operator is exclusively used for ternary boolean statements',
          bn: '? অপারেটর কেবল টার্নারি বুলিয়ান শর্তের জন্য ব্যবহৃত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: '? unpacks Ok or early returns Err.',
        bn: 'সফল হলে মান খুলে দেয়, ব্যর্থ হলে স্বয়ংক্রিয়ভাবে এরর ফেরত পাঠায়।'
      },
      explanation: {
        en: 'The ? operator eliminates deeply nested match statements, yielding clean linear control flow while preserving rigorous error propagation contracts.',
        bn: 'ফলে বারবার নেস্টেড কোড লেখার ঝামেলা এড়িয়ে ঝরঝরে ও সুরক্ষিত কোড লেখা যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-enums-and-the-match',
    title: {
      en: 'Rust Enums & Pattern Matching Quiz',
      bn: 'Rust এনাম এবং প্যাটার্ন ম্যাচিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-if-let-idiom-conciseness',
        kind: 'mcq',
        topic: 'if-let-syntax-sugar-single-pattern',
        question: {
          en: 'When should a Rust developer prefer "if let" syntax over a complete "match" expression?',
          bn: 'একজন Rust ডেভেলপার কখন সম্পূর্ণ "match" এক্সপ্রেশনের বদলে "if let" সিনট্যাক্স ব্যবহার করবেন?'
        },
        options: [
          {
            en: 'When they only care about handling 1 specific pattern (such as Some(val)) and want to cleanly ignore all other remaining cases without boilerplate',
            bn: 'যখন তারা কেবল ১ টি নির্দিষ্ট প্যাটার্ন (যেমন Some(val)) নিয়ে কাজ করতে চান এবং বাকি সব ক্ষেত্র কোনো ঝামেলা ছাড়াই উপেক্ষা করতে চান'
          },
          {
            en: 'When compiling code for 16-bit embedded microcontrollers only',
            bn: 'কেবল ১৬-বিট এমবেডেড মাইক্রোকন্ট্রোলারের কোড কম্পাইল করার সময়'
          },
          {
            en: 'When the enum contains more than 100 variants',
            bn: 'যখন এনামে ১০০ টিরও বেশি ভ্যারিয়েন্ট থাকে'
          },
          {
            en: 'if let disables borrow checking inside the block',
            bn: 'if let ব্লকের ভেতরের বরো চেকিং বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'if let is concise syntax sugar for matching exactly 1 pattern.',
          bn: 'শুধুমাত্র একটি বিশেষ অবস্থা যাচাই করার জন্য এটি চমৎকার সংক্ষিপ্ত সিনট্যাক্স।'
        },
        explanation: {
          en: 'if let provides syntactic sugar for matching a single pattern, eliminating the need to write an exhaustive match with an explicit wildcard "_" arm.',
          bn: 'এর ফলে বাকি সব অবস্থা উপেক্ষা করার জন্য অতিরিক্ত ওয়াইল্ডকার্ড লিখতে হয় না।'
        }
      },
      {
        id: 'quiz-match-guard-evaluation-safety',
        kind: 'mcq',
        topic: 'match-guards-filtering-conditions',
        question: {
          en: 'What capability do match guards (e.g. "Some(x) if x > 10 => ...") introduce to Rust pattern matching?',
          bn: 'ম্যাচ গার্ডস (যেমন "Some(x) if x > 10 => ...") Rust প্যাটার্ন ম্যাচিংয়ে কোন অতিরিক্ত সুবিধা যুক্ত করে?'
        },
        options: [
          {
            en: 'They allow dynamic boolean expressions to filter pattern bindings at runtime before an arm is selected',
            bn: 'একটি আর্ম নির্বাচিত হওয়ার আগেই তারা রানটাইমে ডায়নামিক বুলিয়ান শর্ত প্রয়োগ করে প্যাটার্ন ফিল্টার করার সুবিধা দেয়'
          },
          {
            en: 'They guarantee that memory is multiplied by 2',
            bn: 'তারা নিশ্চয়তা দেয় যে মেমোরি ২ দ্বারা গুণ হবে'
          },
          {
            en: 'They force the compiler to convert all numbers to text',
            bn: 'তারা কম্পাইলারকে সমস্ত সংখ্যা টেক্সটে রূপান্তর করতে বাধ্য করে'
          },
          {
            en: 'Match guards were removed in Rust 2021',
            bn: 'Rust ২০২১ সংস্করণে ম্যাচ গার্ডস বাতিল করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Match guards add arbitrary boolean checks after a pattern.',
          bn: 'প্যাটার্ন মিলার পর বাড়তি শর্ত সত্য কিনা তা যাচাই করতে গার্ডস বসে।'
        },
        explanation: {
          en: 'Match guards enable sophisticated conditional filtering directly on matched patterns without forcing developers to break out into nested conditional structures.',
          bn: 'ফলে নেস্টেড if-else না লিখে সরাসরি ম্যাচের ভেতরেই নিখুঁত শর্ত বসানো যায়।'
        }
      },
      {
        id: 'quiz-let-else-statement-scope',
        kind: 'mcq',
        topic: 'let-else-statement-unwrapping-divergence',
        question: {
          en: 'What architectural benefit does the "let-else" statement (introduced in Rust 1.65) deliver for variable binding?',
          bn: 'Rust ১.৬৫ সংস্করণে যুক্ত "let-else" স্টেটমেন্ট ভ্যারিয়েবল বাইন্ডিংয়ের ক্ষেত্রে কোন স্থাপত্যিক সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'It unwraps successful pattern bindings into the surrounding outer scope while requiring the else block to diverge (return, break, or panic)',
            bn: 'এটি সফল প্যাটার্নের মানগুলোকে বাইরের প্রধান স্কোপে উপলব্ধ করে এবং অসফল হলে else ব্লককে ডাইভার্জ (return, break বা panic) হতে বাধ্য করে'
          },
          {
            en: 'It executes code in parallel across 4 background threads',
            bn: 'এটি ৪ টি ব্যাকগ্রাউন্ড থ্রেডে প্যারালালে কোড এক্সিকিউট করে'
          },
          {
            en: 'It formats the hard drive if an error occurs',
            bn: 'কোনো এরর হলে এটি হার্ড ড্রাইভ ফরম্যাট করে দেয়'
          },
          {
            en: 'let-else requires all variables to be 32-bit floats',
            bn: 'let-else এর জন্য সব ভ্যারিয়েবলকে ৩২-বিট ফ্লোট হতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'let-else avoids indentation pyramids by keeping successful bindings in the outer scope.',
          bn: 'এটি কোডের অতিরিক্ত ইনডেন্টেশন কমিয়ে সফল ভ্যারিয়েবলকে মূল কোডে সরাসরি ব্যবহারের সুযোগ দেয়।'
        },
        explanation: {
          en: 'let-else provides clean early-return guard clauses, keeping successfully extracted payload variables in the outer function scope without deep nesting.',
          bn: 'এর মাধ্যমে গার্ড ক্লজ তৈরি অত্যন্ত সহজ এবং পাঠযোগ্য হয়।'
        }
      },
      {
        id: 'quiz-option-unwrap-or-else-idiom',
        kind: 'mcq',
        topic: 'option-unwrap-or-else-lazy-evaluation',
        question: {
          en: 'Why is "opt.unwrap_or_else(|| compute_default())" preferred over "opt.unwrap_or(compute_default())" in high-performance Rust?',
          bn: 'উচ্চ-কর্মক্ষমতার Rust কোডে কেন "opt.unwrap_or(compute_default())"-এর চেয়ে "opt.unwrap_or_else(|| compute_default())" অধিক গ্রহণযোগ্য?'
        },
        options: [
          {
            en: 'unwrap_or_else evaluates its fallback closure lazily ONLY when opt is None, avoiding expensive unneeded computation when Some is present',
            bn: 'unwrap_or_else কেবল তখনই ক্লোজার চালায় যখন opt আসলে None থাকে, ফলে Some উপস্থিত থাকলে অপ্রয়োজনীয় ব্যয়বহুল হিসাব এড়ানো সম্ভব হয়'
          },
          {
            en: 'unwrap_or_else runs 10 times slower to save electricity',
            bn: 'বিদ্যুৎ বাঁচাতে unwrap_or_else ১০ গুণ ধীরে চলে'
          },
          {
            en: 'unwrap_or converts the value into a 64-bit integer',
            bn: 'unwrap_or মানটিকে একটি ৬৪-বিট পূর্ণসংখ্যায় রূপান্তর করে'
          },
          {
            en: 'There is zero behavioral difference between the two methods',
            bn: 'দুটি মেথডের মধ্যে আচরণগত কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'unwrap_or evaluates eagerly; unwrap_or_else evaluates lazily.',
          bn: 'ক্লোজার দেওয়ার কারণে শুধুমাত্র প্রয়োজন হলেই ডিফল্ট ভ্যালু তৈরি হয়।'
        },
        explanation: {
          en: 'unwrap_or evaluates its argument immediately regardless of whether it is needed. unwrap_or_else executes the closure only on the None branch, preserving performance.',
          bn: 'ফলে অপ্রয়োজনীয় ডাটাবেজ কোয়েরি বা মেমোরি বরাদ্দের অপচয় রোধ করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'cargo-and-the-crate',
    title: {
      en: 'Cargo, Modules & The Crate Ecosystem',
      bn: 'কার্গো, মডিউল এবং ক্রেট ইকোসিস্টেম'
    }
  }
};
