import type { Lesson } from '../../../lib/types';

export const SharpAndTheStringLesson: Lesson = {
  slug: 'sharp-and-the-string',
  tech: 'lang-csharp',
  title: {
    en: 'C# Syntax Foundations, Raw Strings & UTF-8 Literals',
    bn: 'C# সিনট্যাক্স ভিত্তি, র স্ট্রিং এবং ইউটিএফ-৮ লিটারেল'
  },
  summary: {
    en: 'Your first guide to modern C# syntax foundations and string engineering. Master type inference with var, compare string immutability with StringBuilder, format text safely using InterpolatedStringHandler, write multiline JSON using raw string literals, and eliminate transcoding overhead with UTF-8 byte literals (u8).',
    bn: 'আধুনিক C# সিনট্যাক্স এবং স্ট্রিং ইঞ্জিনিয়ারিং শেখার প্রথম গাইড। var দিয়ে টাইপ ইনফারেন্স, StringBuilder দিয়ে স্ট্রিং ইমিউটেবিলিটি ম্যানেজমেন্ট, InterpolatedStringHandler দিয়ে ফরম্যাটিং, র স্ট্রিং লিটারেল দিয়ে মাল্টি-লাইন জেসন এবং ইউটিএফ-৮ বাইট লিটারেল (u8) দিয়ে দ্রুত পার্সিং।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'csharp-syntax-and-string-interning-heading',
      text: {
        en: 'C# Syntax Foundations, Immutability, and String Interning',
        bn: 'C# সিনট্যাক্স ভিত্তি, ইমিউটেবিলিটি এবং স্ট্রিং ইন্টার্নিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern C# (the type-safe object-oriented language) features a streamlined syntax supported by powerful compiler inference. Using "var", the compiler infers exact data types at compile time with zero performance penalty. At the core of text processing is "System.String", an immutable reference type allocated on the managed heap. Once constructed, a string can never be modified in place. To optimize memory, the runtime maintains an internal "String Interning Pool" where identical string literals share the exact same heap reference. However, concatenating strings inside loops creates temporary string instances, making StringBuilder essential for heavy text transformations.',
        bn: 'আধুনিক C# (টাইপ-সেফ অবজেক্ট-ওরিয়েন্টেড ভাষা) কম্পাইলার ইনফারেন্সের শক্তিতে পরিচালিত অত্যন্ত আধুনিক ও পরিচ্ছন্ন সিনট্যাক্স প্রদান করে। "var" কিওয়ার্ড ব্যবহার করলে কম্পাইলার বিল্ডের সময়ই সঠিক টাইপ নির্ধারণ করে নেয়, যাতে পারফরম্যান্সের কোনো ক্ষতি হয় না। টেক্সট প্রসেসিংয়ের মূলে রয়েছে "System.String", যা হিপ মেমোরিতে সংরক্ষিত একটি অপরিবর্তনীয় (immutable) রেফারেন্স টাইপ। একবার তৈরি হলে কোনো স্ট্রিং সরাসরি পরিবর্তন করা যায় না। মেমোরি সাশ্রয়ে রানটাইম একটি "String Interning Pool" বজায় রাখে যেখানে অভিন্ন স্ট্রিংগুলো একই মেমোরি অ্যাড্রেস শেয়ার করে। কিন্তু লুপের ভেতর বারবার স্ট্রিং যোগ করলে নতুন অবজেক্ট তৈরি হয়ে মেমোরি অপচয় হয়, যার সমাধানে StringBuilder ব্যবহার করা হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural comparison of C# text representation: Interned string heap storage, StringBuilder buffer expansion, and zero-allocation UTF-8 byte literals.',
        bn: 'চিত্র ১: C# টেক্সটের মেমোরি উপস্থাপনা: ইন্টার্নড স্ট্রিং হিপ স্টোরেজ, StringBuilder বাফার এবং শূন্য-অ্যালোকেশনের ইউটিএফ-৮ বাইট লিটারেল।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">C# STRING MEMORY ALLOCATION &amp; UTF-8 ENCODING</text>

  <!-- Box 1: String Interning -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Interning Pool</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">string a = "text";</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">string b = "text";</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Shared Heap Address</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Deduplicated Literals</text>
  </g>

  <!-- Box 2: Naive Concat -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#b91c1c" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Naive Concat (+)</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="15" y="68" fill="#f87171" font-size="9" font-family="monospace">s += items[i];</text>
    <text x="15" y="85" fill="#f87171" font-size="8" font-family="monospace">Allocates 1 New Object</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="15" y="130" fill="#f87171" font-size="8" font-family="monospace">Garbage Collector Pressure</text>

    <text x="15" y="215" fill="#f87171" font-size="10" font-family="sans-serif">O(N^2) Heap Allocations</text>
  </g>

  <!-- Box 3: StringBuilder -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. StringBuilder</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">sb.Append(val);</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Pooled char[] Buffer</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Grows Dynamically</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Linear O(N) Efficiency</text>
  </g>

  <!-- Box 4: UTF-8 Literals -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. UTF-8 Literals</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">"HTTP 200"u8</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">ReadOnlySpan&lt;byte&gt;</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Zero Heap Alloc</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Direct Assembly Bytes</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'raw-strings-and-utf8-literals-heading',
      text: {
        en: 'Raw String Literals and High-Performance UTF-8 Literals',
        bn: 'র স্ট্রিং লিটারেল এবং হাই-পারফরম্যান্স ইউটিএফ-৮ লিটারেল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In C# 11 and 12, Microsoft introduced Raw String Literals to eliminate the frustration of backslash escaping in JSON, SQL, and HTML. Delimited by at least 3 double quotes ("""), raw strings treat backslashes and quotes as literal characters while automatically trimming indentation based on closing quotes. In addition, UTF-8 String Literals (using the "u8" suffix) represent a major breakthrough for high-throughput cloud networking. Rather than allocating a 16-bit UTF-16 string and calling Encoding.UTF8.GetBytes at runtime, "text"u8 directly produces a ReadOnlySpan<byte> mapped to the assembly data segment with zero runtime allocation.',
        bn: 'C# ১১ এবং ১২ সংস্করণে মাইক্রোসফট র স্ট্রিং লিটারেল (Raw String Literals) প্রবর্তন করেছে, যা জেসন, এসকিউএল বা এইচটিএমএলে ব্যাকস্ল্যাশ দিয়ে কোটেশন এস্কেপ করার ঝামেলা দূর করে। অন্তত ৩ টি ডাবল কোটেশন (""") দিয়ে শুরু ও শেষ হওয়া র স্ট্রিং যে-কোনো কোট ও ব্যাকস্ল্যাশকে সাধারণ অক্ষর হিসেবে গ্রহণ করে এবং সমান্তরাল ইনডেন্টেশন বজায় রাখে। এর পাশাপাশি যুক্ত হয়েছে ইউটিএফ-৮ স্ট্রিং লিটারেল ("u8" সাফিক্স)। ১৬-বিট UTF-16 স্ট্রিং বানিয়ে রানটাইমে Encoding.UTF8.GetBytes ডাকার বদলে "text"u8 সরাসরি একটি ReadOnlySpan<byte> প্রদান করে যা কোনো মেমোরি খরচ না করে সরাসরি অ্যাসেম্বলি বাইনারি থেকে পরিচালিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of C# string interning pool, StringBuilder buffer allocation savings, and UTF-8 byte span mapping.',
        bn: 'C# স্ট্রিং ইন্টার্নিং পুল, StringBuilder বাফার সঞ্চয় এবং ইউটিএফ-৮ বাইট রূপান্তরের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of C# String Interning Pool and UTF-8 Literals

export class StringInterningSimulator {
  private pool: Map<string, symbol> = new Map();

  // Simulating string literal interning in CLR
  public intern(literal: string): symbol {
    if (!this.pool.has(literal)) {
      this.pool.set(literal, Symbol(literal));
    }
    return this.pool.get(literal)!;
  }
}

// Simulating UTF-8 string literal ("u8" suffix)
export class Utf8StringLiteralSimulator {
  public static fromLiteral(text: string): Uint8Array {
    // Encodes directly into byte array with zero runtime overhead
    return new TextEncoder().encode(text);
  }
}

// Execution demonstration
const interner = new StringInterningSimulator();

// Test 1: String interning equality
const ref1 = interner.intern('codeshikhon');
const ref2 = interner.intern('codeshikhon');
console.log('Interned Literals Point to Same Memory Address:', ref1 === ref2); // true

// Test 2: Simulating "HTTP/1.1 200 OK"u8
const httpOkBytes = Utf8StringLiteralSimulator.fromLiteral('HTTP/1.1 200 OK');
console.log('UTF-8 Byte Length of Response:', httpOkBytes.length); // 15
console.log('First 4 Bytes of Wire Protocol:', Array.from(httpOkBytes.slice(0, 4))); // [72, 84, 84, 80] (H, T, T, P)

// Test 3: Raw string literal multiline JSON representation
const jsonRaw = \`{
  "name": "C# 12",
  "features": ["RawStrings", "UTF8Literals"]
}\`;
console.log('Raw JSON String Length:', jsonRaw.length);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'String Interning',
          def: {
            en: 'Runtime optimization where identical string literals share a single immutable instance in a managed heap pool.',
            bn: 'রানটাইম অপটিমাইজেশন যেখানে অভিন্ন স্ট্রিং লিটারেলগুলো মেমোরিতে একটি একক অবজেক্ট শেয়ার করে।'
          }
        },
        {
          term: 'StringBuilder',
          def: {
            en: 'Mutable sequence of characters using an internal expandable buffer to prevent garbage collection overhead during concatenation.',
            bn: 'পরিবর্তনশীল ক্যারেক্টার বাফার যা স্ট্রিং যোগ করার সময় নতুন নতুন অবজেক্ট তৈরির চাপ বন্ধ করে।'
          }
        },
        {
          term: 'Raw String Literal',
          def: {
            en: 'Multiline string format enclosed by 3 or more double quotes, preserving quotes and whitespace without escape characters.',
            bn: 'মাল্টি-লাইন স্ট্রিং যাতে ৩ টি কোট ব্যবহার করে কোনো এস্কেপ ক্যারেক্টার ছাড়াই কোটেশন লেখা যায়।'
          }
        },
        {
          term: 'UTF-8 String Literal',
          def: {
            en: 'C# 11 literal with a "u8" suffix producing a ReadOnlySpan<byte> directly in UTF-8 format with zero heap allocations.',
            bn: 'C# ১১-এর বিশেষ লিটারেল যাতে "u8" যোগ করে সরাসরি কোনো মেমোরি খরচ ছাড়া ইউটিএফ-৮ বাইট তৈরি করা যায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'string-interning-reference-equality-ex1',
      kind: 'mcq',
      topic: 'string-interning-reference-equality',
      question: {
        en: 'In C#, why does "object.ReferenceEquals(s1, s2)" return true when both s1 and s2 are assigned the identical compile-time string literal "codeshikhon"?',
        bn: 'C#-এ s1 এবং s2 উভয়টিতে একই স্ট্রিং লিটারেল "codeshikhon" অ্যাসাইন করলে "object.ReferenceEquals(s1, s2)" কেন true ফেরত দেয়?'
      },
      options: [
        {
          en: 'The CLR string interning pool deduplicates compile-time string literals, assigning both variables to the exact same heap memory address',
          bn: 'CLR স্ট্রিং ইন্টার্নিং পুল কম্পাইল-টাইম লিটারেলগুলোকে ডুপ্লিকেট না করে উভয় ভেরিয়েবলকে হিপ মেমোরির ঠিক একই ঠিকানায় নির্দেশ করে'
        },
        {
          en: 'Because string is a value type stored on the stack',
          bn: 'কারণ স্ট্রিং হলো একটি ভ্যালু টাইপ যা স্ট্যাক মেমোরিতে থাকে'
        },
        {
          en: 'The C# compiler converts all strings into 32-bit integers',
          bn: 'C# কম্পাইলার সমস্ত স্ট্রিংকে ৩২-বিট পূর্ণসংখ্যায় রূপান্তর করে'
        },
        {
          en: 'ReferenceEquals is disabled for string variables',
          bn: 'স্ট্রিং ভেরিয়েবলের জন্য ReferenceEquals নিষ্ক্রিয় থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The CLR maintains an internal pool of unique string literals.',
        bn: 'রানটাইমের নিজস্ব ইন্টার্নিং টেবিল থাকার কারণে একই লেখার স্ট্রিংগুলো একই ঠিকানা পায়।'
      },
      explanation: {
        en: 'During assembly loading, the CLR interns literal strings into a hash table. Subsequent identical literals resolve to the same memory instance.',
        bn: 'ফলে মেমোরি সাশ্রয় হয় এবং স্ট্রিং রেফারেন্স তুলনা দ্রুততর হয়।'
      }
    },
    {
      id: 'raw-string-literals-quotes-count-ex2',
      kind: 'mcq',
      topic: 'raw-string-literals-delimiters-csharp11',
      question: {
        en: 'What is the minimum number of double quotes required to begin and terminate a Raw String Literal in modern C# 11?',
        bn: 'আধুনিক C# ১১ সংস্করণে একটি র স্ট্রিং লিটারেল (Raw String Literal) শুরু ও শেষ করতে সর্বনিম্ন কয়টি ডাবল কোটেশন প্রয়োজন?'
      },
      options: [
        { en: 'At least 3 double quotes (""")', bn: 'অন্তত ৩ টি ডাবল কোটেশন (""")' },
        { en: 'Only 1 double quote', bn: 'কেবল ১ টি ডাবল কোটেশন' },
        { en: 'Exactly 2 double quotes', bn: 'ঠিক ২ টি ডাবল কোটেশন' },
        { en: 'At least 10 double quotes', bn: 'অন্তত ১০ টি ডাবল কোটেশন' }
      ],
      answer: 0,
      hint: {
        en: 'Raw string literals require at least 3 double quotes.',
        bn: 'র স্ট্রিং লিটারেল প্রকাশের জন্য সর্বনিম্ন ৩ টি ডাবল কোটেশন দিতে হয়।'
      },
      explanation: {
        en: 'Raw string literals use 3 or more quotes ("""). If your text contains 3 consecutive quotes, you can use 4 quotes to delimit the raw string.',
        bn: 'ভেতরে কোটেশন থাকলে বাইরে অতিরিক্ত কোট যোগ করে যেকোনো জটিল টেক্সট বা জেসন লেখা যায়।'
      }
    },
    {
      id: 'utf8-string-literals-u8-ex3',
      kind: 'mcq',
      topic: 'utf8-string-literals-readonlyspan-byte',
      question: {
        en: 'What data type is produced when appending the "u8" suffix to a string literal (such as "HTTP/1.1 200 OK"u8) in C# 11?',
        bn: 'C# ১১ এ কোনো স্ট্রিং লিটারেলের শেষে "u8" সাফিক্স যুক্ত করলে (যেমন "HTTP/1.1 200 OK"u8) সেটি কোন ডেটা টাইপে রূপান্তরিত হয়?'
      },
      options: [
        {
          en: 'ReadOnlySpan<byte>, pointing directly to UTF-8 encoded bytes in the PE binary with zero heap allocation',
          bn: 'ReadOnlySpan<byte>, যা কোনো হিপ মেমোরি খরচ না করে সরাসরি বাইনারির ইউটিএফ-৮ বাইট নির্দেশ করে'
        },
        {
          en: 'A standard UTF-16 System.String on the heap',
          bn: 'হিপ মেমোরিতে থাকা একটি সাধারণ UTF-16 System.String'
        },
        {
          en: 'A 64-bit floating point number',
          bn: 'একটি ৬৪-বিট ফ্লোটিং পয়েন্ট সংখ্যা'
        },
        {
          en: 'An encrypted SQL database query',
          bn: 'একটি এনক্রিপ্ট করা এসকিউএল কুয়েরি'
        }
      ],
      answer: 0,
      hint: {
        en: '"u8" creates a zero-allocation ReadOnlySpan<byte>.',
        bn: '"u8" কোনো মেমোরি বরাদ্দ ছাড়াই সরাসরি বাইট স্প্যান তৈরি করে।'
      },
      explanation: {
        en: 'UTF-8 literals compile directly into the assembly data segment, eliminating runtime transcoding from UTF-16 to UTF-8 in network services.',
        bn: 'ওয়েব সার্ভারে এইচটিটিপি হেডার বা প্রোটোকল বাইট পাঠাতে এটি অভাবনীয় গতি এনে দেয়।'
      }
    },
    {
      id: 'stringbuilder-vs-concatenation-ex4',
      kind: 'mcq',
      topic: 'stringbuilder-buffer-vs-quadratic-concat',
      question: {
        en: 'Why does naive string concatenation using the "+" operator inside a loop of 1000 iterations result in catastrophic memory inefficiency?',
        bn: '১০০০ বার চলা একটি লুপের ভেতর "+" অপারেটর দিয়ে বারবার স্ট্রিং যোগ করলে কেন ভয়াবহ মেমোরি অপচয় ঘটে?'
      },
      options: [
        {
          en: 'Because strings are immutable; every concatenation allocates a brand new string on the managed heap and copies existing characters, leading to O(N^2) allocations and GC pressure',
          bn: 'কারণ স্ট্রিং অপরিবর্তনীয়; প্রতিবার যোগ করলে হিপ মেমোরিতে সম্পূর্ণ নতুন একটি স্ট্রিং তৈরি হয় এবং পুরনো অক্ষরগুলো কপি হয়, যার ফলে O(N^2) মেমোরি অপচয় ও জিসি চাপ সৃষ্টি হয়'
        },
        {
          en: 'Because loops in C# can only process boolean conditions',
          bn: 'কারণ C# এর লুপ কেবল বুলিয়ান শর্ত নিয়ে কাজ করে'
        },
        {
          en: 'The "+" operator turns off the computer processor',
          bn: '"+" অপারেটর কম্পিউটারের প্রসেসর বন্ধ করে দেয়'
        },
        {
          en: 'The operating system deletes the program automatically',
          bn: 'অপারেটিং সিস্টেম প্রোগ্রামটি স্বয়ংক্রিয়ভাবে মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Strings cannot be mutated; concatenation always allocates a new object.',
        bn: 'স্ট্রিং ইমিউটেবল হওয়ায় প্রতিবার নতুন অবজেক্ট তৈরি হয়; তাই লুপে StringBuilder ব্যবহার জরুরি।'
      },
      explanation: {
        en: 'String immutability means modifying a string copies the entire contents into a new heap allocation. StringBuilder uses an internal expandable buffer to avoid allocations.',
        bn: 'StringBuilder অভ্যন্তরীণ বাফার ব্যবহার করে মেমোরি খরচকে রৈখিক O(N) মাত্রায় নামিয়ে আনে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-sharp-and-the-string',
    title: {
      en: 'C# Syntax Foundations & String Engineering Quiz',
      bn: 'C# সিনট্যাক্স ভিত্তি এবং স্ট্রিং ইঞ্জিনিয়ারিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-interpolated-string-handler-efficiency',
        kind: 'mcq',
        topic: 'interpolated-string-handler-csharp10',
        question: {
          en: 'How does C# 10\'s InterpolatedStringHandler architecture improve performance compared to legacy "string.Format"?',
          bn: 'ঐতিহ্যবাহী "string.Format"-এর তুলনায় C# ১০-এর InterpolatedStringHandler আর্কিটেকচার কীভাবে পারফরম্যান্স উন্নত করে?'
        },
        options: [
          {
            en: 'It relies on a ref struct handler created by the compiler that appends tokens into a stack-allocated buffer, avoiding object boxing for value types and skipping formatting entirely if a logger is disabled',
            bn: 'এটি কম্পাইলার দ্বারা নির্মিত একটি ref struct হ্যান্ডলারের মাধ্যমে স্ট্যাক বাফারে ডেটা লেখে, যা ভ্যালু টাইপের বক্সিং রোধ করে এবং লগার নিষ্ক্রিয় থাকলে কোনো ফরম্যাটিং না চালিয়ে সময় বাঁচায়'
          },
          {
            en: 'It formats text by printing it to a physical laser printer',
            bn: 'এটি একটি ফিজিক্যাল লেজার প্রিন্টারে লেখা প্রিন্ট করে টেক্সট সাজায়'
          },
          {
            en: 'It restricts string length to 10 characters',
            bn: 'এটি স্ট্রিংয়ের দৈর্ঘ্য ১০ অক্ষরে সীমাবদ্ধ করে'
          },
          {
            en: 'InterpolatedStringHandler was removed in .NET 7',
            bn: '.NET ৭ সংস্করণে InterpolatedStringHandler বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'InterpolatedStringHandler uses stack-allocated ref structs to avoid heap allocations.',
          bn: 'হ্যান্ডলারটি স্ট্যাকে কাজ করায় কোনো হিপ অবজেক্ট তৈরি হয় না এবং লগিংয়ে চমৎকার অপটিমাইজেশন দেয়।'
        },
        explanation: {
          en: 'The compiler transforms interpolated strings into DefaultInterpolatedStringHandler calls, calculating buffer capacities at compile time with zero boxing allocations.',
          bn: 'কম্পাইল-টাইম ক্যাপাসিটি অনুমানের ফলে কোনো অবজেক্ট বক্সিং ছাড়াই দ্রুত ফরম্যাটিং সম্পন্ন হয়।'
        }
      },
      {
        id: 'quiz-raw-string-indentation-stripping',
        kind: 'mcq',
        topic: 'raw-string-indentation-rules',
        question: {
          en: 'How does the C# compiler determine common whitespace indentation to strip from a multiline Raw String Literal?',
          bn: 'একটি মাল্টি-লাইন র স্ট্রিং লিটারেল থেকে অপ্রয়োজনীয় স্পেস বা ইনডেন্টেশন বাদ দিতে C# কম্পাইলার কীভাবে হিসাব করে?'
        },
        options: [
          {
            en: 'The indentation column of the closing triple quotes (""") establishes the baseline indentation; all leading whitespace to the left of this baseline is automatically stripped from preceding lines',
            bn: 'সমাপ্তি ট্রিপল কোটেশনের (""") কলামের অবস্থানটিকে মূল ভিত্তি ধরা হয়; সেই লাইনের বামের সমস্ত অতিরিক্ত স্পেস আগের লাইনগুলো থেকে নিজে থেকেই মুছে ফেলা হয়'
          },
          {
            en: 'It deletes all spaces in the entire string',
            bn: 'এটি পুরো স্ট্রিংয়ের সমস্ত স্পেস মুছে ফেলে'
          },
          {
            en: 'It counts the number of vowel letters in each word',
            bn: 'এটি প্রতিটি শব্দের স্বরবর্ণের সংখ্যা গণনা করে'
          },
          {
            en: 'Whitespace stripping must be programmed manually using Regular Expressions',
            bn: 'রেগুলার এক্সপ্রেশন দিয়ে ম্যানুয়ালি হোয়াইটস্পেস মুছতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The closing quotes define the indentation baseline.',
          bn: 'শেষের ট্রিপল কোটেশন যেখানে থাকে, কম্পাইলার সেখান থেকেই আসল ইনডেন্টেশন শুরু করে।'
        },
        explanation: {
          en: 'The column position of the closing delimiter defines the margin. Any line indented further preserves its relative indent, while outer indentation is stripped.',
          bn: 'কোডের ইনডেন্টেশন বজায় রেখেও ভেতরে পরিষ্কার ফরম্যাটের টেক্সট রাখা সম্ভব হয়।'
        }
      },
      {
        id: 'quiz-string-create-zero-allocation',
        kind: 'mcq',
        topic: 'string-create-span-action-zero-alloc',
        question: {
          en: 'When should high-performance systems use "string.Create(length, state, (span, state) => ...)" in C#?',
          bn: 'উচ্চগতির সিস্টেমে কখন C#-এর "string.Create(length, state, (span, state) => ...)" মেথডটি ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: 'To construct an immutable string by writing directly into its underlying memory buffer via a SpanAction callback, eliminating intermediate buffers and extra allocations',
            bn: 'SpanAction কলব্যাকের মাধ্যমে সরাসরি স্ট্রিংয়ের মেমোরি বাফারে অক্ষর লিখে একটি অপরিবর্তনীয় স্ট্রিং বানাতে, যা কোনো মধ্যবর্তী বাফার বা বাড়তি অবজেক্ট তৈরি করে না'
          },
          {
            en: 'When opening a file on the local hard drive',
            bn: 'লোকাল হার্ড ড্রাইভে ফাইল ওপেন করার সময়'
          },
          {
            en: 'To restart the Windows operating system',
            bn: 'উইন্ডোজ অপারেটিং সিস্টেম রিস্টার্ট করার জন্য'
          },
          {
            en: 'string.Create is only supported on Android smartphones',
            bn: 'string.Create কেবল অ্যান্ড্রয়েড স্মার্টফোনে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'string.Create allows direct Span population before the string becomes immutable.',
          bn: 'স্ট্রিং ইমিউটেবল সিল হওয়ার ঠিক আগে সরাসরি তার অভ্যন্তরীণ স্প্যানে ডেটা লেখার সুযোগ দেয়।'
        },
        explanation: {
          en: 'string.Create pre-allocates the exact string size and grants writable Span<char> access during initialization, producing zero intermediate garbage.',
          bn: 'স্ট্রিং তৈরির এটিই সবচেয়ে আধুনিক ও দ্রুততম উপায়।'
        }
      },
      {
        id: 'quiz-utf8-string-comparisons-span',
        kind: 'mcq',
        topic: 'utf8-sequenceequal-span-performance',
        question: {
          en: 'How can a C# network service compare an incoming socket ReadOnlySpan<byte> with a known protocol verb without performing any string conversion?',
          bn: 'কোনো স্ট্রিং রূপান্তর না করে একটি C# নেটওয়ার্ক সার্ভিস কীভাবে সকেট থেকে আসা ReadOnlySpan<byte>-কে একটি নির্দিষ্ট প্রোটোকল শব্দের সাথে মেলাতে পারে?'
        },
        options: [
          {
            en: 'Using "span.SequenceEqual("GET"u8)", comparing the memory bytes directly using vectorized SIMD CPU instructions',
            bn: '"span.SequenceEqual("GET"u8)" ব্যবহার করে, যা প্রসেসরের ভেক্টরাইজড SIMD নির্দেশনার মাধ্যমে সরাসরি বাইটে বাইটে তুলনা করে'
          },
          {
            en: 'Converting the bytes into a bitmap image first',
            bn: 'বাইটগুলোকে প্রথমে বিটম্যাপ ছবিতে রূপান্তর করে'
          },
          {
            en: 'Writing the bytes to a local disk file and reading them back',
            bn: 'বাইটগুলো লোকাল ফাইলে লিখে আবার পড়ে'
          },
          {
            en: 'Span comparisons require an internet connection',
            bn: 'স্প্যান তুলনা করার জন্য ইন্টারনেট সংযোগ আবশ্যক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use SequenceEqual with a u8 literal to compare byte spans with zero allocations.',
          bn: '"GET"u8 এর সাথে SequenceEqual ব্যবহার করলে সরাসরি মেমোরিতে মেমরি তুলনা করা যায়।'
        },
        explanation: {
          en: 'Comparing spans directly avoids allocating a string. SequenceEqual is heavily optimized using hardware SIMD registers for maximum throughput.',
          bn: 'কোনো স্ট্রিং অবজেক্ট তৈরি না হওয়ায় সার্ভার প্রতি সেকেন্ডে লক্ষ লক্ষ রিকোয়েস্ট পরীক্ষা করতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'records-and-the-init',
    title: {
      en: 'Records, Init-Only Properties & Immutability',
      bn: 'রেকর্ডস, Init-অনলি প্রপার্টি এবং ইমিউটেবিলিটি'
    }
  }
};
