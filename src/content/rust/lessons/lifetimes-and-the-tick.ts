import type { Lesson } from '../../../lib/types';

export const LifetimesAndTheTickLesson: Lesson = {
  slug: 'lifetimes-and-the-tick',
  tech: 'rust',
  title: {
    en: 'Lifetimes, Elision & The Borrow Checker',
    bn: 'লাইফটাইম, এলিশন এবং বরো চেকার'
  },
  summary: {
    en: 'Master lifetime parameters and borrow checker contracts in Rust. Understand generic lifetime annotations (\'a), decode the 3 compiler lifetime elision rules, bind references safely inside structs, and differentiate bounded references from \'static duration.',
    bn: 'Rust-এ লাইফটাইম প্যারামিটার এবং বরো চেকার চুক্তি আয়ত্ত করুন। জেনেরিক লাইফটাইম অ্যানোটেশন (\'a), কম্পাইলারের ৩ টি লাইফটাইম এলিশন নিয়ম, স্ট্রাক্টের ভেতর রেফারেন্স সংযুক্তি এবং \'static স্থায়িত্বের গভীর বিশ্লেষণ।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'lifetimes-and-generic-annotations-heading',
      text: {
        en: 'The Purpose of Lifetimes and Generic Lifetime Annotations (\'a)',
        bn: 'লাইফটাইমের উদ্দেশ্য এবং জেনেরিক লাইফটাইম অ্যানোটেশন (\'a)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In C# or Go, a runtime garbage collector tracks object references until all pointers are abandoned. In Rust (the memory-safe systems programming language), the compiler must prove at build time that no reference can ever outlive the data it points to. Lifetimes do not change how long a value lives at runtime. Instead, generic lifetime annotations (such as "\'a") describe the relationship between the lifespans of multiple references. When a function takes two string slices and returns one, the compiler cannot deduce which input was returned without guidance. Specifying "\'a" informs the borrow checker that the returned reference will be valid for the intersection (the shorter) of the input lifetimes.',
        bn: 'C# বা Go-এর মতো ভাষায় রানটাইম গার্বেজ কালেক্টর সমস্ত পয়েন্টার ট্র্যাক করে মেমোরি ধরে রাখে। কিন্তু Rust (মেমোরি-নিরাপদ সিস্টেম প্রোগ্রামিং ভাষা) বিল্ডের সময়ই প্রমাণ দাবি করে যে কোনো রেফারেন্স যেন তার মূল ডেটার চেয়ে বেশি সময় টিকে না থাকে। লাইফটাইম রানটাইমে কোনো মানের আয়ু পরিবর্তন করে না। বরং জেনেরিক লাইফটাইম অ্যানোটেশন (যেমন "\'a") একাধিক রেফারেন্সের পারস্পরিক সম্পর্ক কম্পাইলার বরো চেকারের কাছে প্রকাশ করে। একটি ফাংশন দুটি রেফারেন্স নিয়ে একটি রেফারেন্স ফেরত দিলে কম্পাইলার একা সিদ্ধান্ত নিতে পারে না। "\'a" অ্যানোটেশন দিয়ে ডেভেলপার নিশ্চয়তা দেন যে আউটপুট রেফারেন্সটি উভয় ইনপুটের সংক্ষিপ্ততম আয়ু পর্যন্ত বৈধ থাকবে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Lifetime intersection analysis: The returned reference is constrained to the shorter scope of s2, preventing dangling pointer error E0597.',
        bn: 'চিত্র ১: লাইফটাইম ইন্টারসেকশন বিশ্লেষণ: আউটপুট রেফারেন্সটি s2-এর সংক্ষিপ্ত স্কোপ দ্বারা সীমাবদ্ধ থাকে, যা E0597 এরর প্রতিরোধ করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUST BORROW CHECKER LIFETIME OVERLAP &amp; SAFETY</text>

  <!-- Scope 1: Outer Scope -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Outer Scope (\'a)</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">let s1 = String::from;</text>
    <text x="15" y="85" fill="#38bdf8" font-size="8" font-family="monospace">Lives: Lines 1 to 10</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Long-Lived Memory</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Broad Life Boundary</text>
  </g>

  <!-- Scope 2: Inner Scope -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#d97706" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Inner Scope (\'b)</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">let s2 = String::from;</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Lives: Lines 3 to 7</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Dropped at Line 7</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Narrow Life Boundary</text>
  </g>

  <!-- Scope 3: Intersection -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Intersection (\'a)</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">fn longest&lt;\'a&gt;(...)</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">\'a = min(\'a, \'b)</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Valid: Lines 3 to 7</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Overlap Constraint</text>
  </g>

  <!-- Scope 4: Error Prevented -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#b91c1c" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Error Guard</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="15" y="68" fill="#f87171" font-size="9" font-family="monospace">ERROR E0597</text>
    <text x="15" y="85" fill="#f87171" font-size="8" font-family="monospace">'s2' does not live</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="15" y="130" fill="#f87171" font-size="8" font-family="monospace">long enough</text>

    <text x="15" y="215" fill="#f87171" font-size="10" font-family="sans-serif">Zero Dangling Pointers</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'elision-rules-and-static-heading',
      text: {
        en: 'The 3 Lifetime Elision Rules and the \'static Lifetime',
        bn: '৩ টি লাইফটাইম এলিশন নিয়ম এবং \'static লাইফটাইম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To reduce boilerplate in common code, the Rust compiler incorporates 3 deterministic Lifetime Elision rules. First, each individual input reference parameter is allocated its own distinct lifetime parameter. Second, whenever a function signature contains exactly 1 input lifetime, that single parameter is granted to every output reference. Third, when a struct method accepts multiple input lifetimes where one is "&self" or "&mut self", the caller self lifetime is automatically assigned to all return references. When data must survive for the entire program execution, developers use "\'static". Hardcoded string literals (such as "hello") possess the \'static lifetime because they are baked directly into the binary data segment.',
        bn: 'সাধারণ কোডে বারবার অ্যানোটেশন লেখার কষ্ট কমাতে Rust কম্পাইলার ৩ টি সুনির্দিষ্ট লাইফটাইম এলিশন নিয়ম অনুসরণ করে। প্রথমত, কম্পাইলার প্রতিটি ইনপুট রেফারেন্সে একটি করে নিজস্ব লাইফটাইম বসিয়ে নেয়। দ্বিতীয়ত, ফাংশনে যদি ঠিক ১ টি ইনপুট রেফারেন্স থাকে, তবে সেই একই লাইফটাইম সব আউটপুট রেফারেন্সে যুক্ত হয়। তৃতীয়ত, একাধিক ইনপুট থাকলেও তাদের একটি "&self" বা "&mut self" হলে, সেলফের নিজস্ব লাইফটাইম সব আউটপুটে বরাদ্দ হয়। কোনো ডেটাকে পুরো প্রোগ্রাম চলাকালীন বাঁচিয়ে রাখতে ডেভেলপাররা "\'static" ব্যবহার করেন। কোডে লেখা স্ট্রিং লিটারেলগুলোর (যেমন "hello") লাইফটাইম হলো \'static, কারণ সেগুলো সরাসরি বাইনারি ফাইলে খোদাই করা থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Rust borrow checker lifetime intersection checking and dangling pointer prevention.',
        bn: 'Rust বরো চেকার লাইফটাইম ইন্টারসেকশন এবং ঝুলন্ত পয়েন্টার প্রতিরোধের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Rust Borrow Checker Lifetime Verification

export interface ReferenceScope {
  name: string;
  startLine: number;
  endLine: number;
}

export class LifetimeCheckerSimulator {
  // Simulating "fn longest<'a>(x: &'a str, y: &'a str) -> &'a str"
  public verifyBorrowSafety(
    sourceX: ReferenceScope,
    sourceY: ReferenceScope,
    consumerLine: number
  ): { isSafe: boolean; effectiveLifetimeEnd: number; errorCode?: string } {
    // The output reference lifetime 'a is the INTERSECTION (minimum) of input lifetimes
    const effectiveLifetimeEnd = Math.min(sourceX.endLine, sourceY.endLine);

    if (consumerLine > effectiveLifetimeEnd) {
      return {
        isSafe: false,
        effectiveLifetimeEnd: effectiveLifetimeEnd,
        errorCode: 'E0597: Borrowed value does not live long enough.'
      };
    }

    return {
      isSafe: true,
      effectiveLifetimeEnd: effectiveLifetimeEnd
    };
  }
}

// Execution demonstration
const checker = new LifetimeCheckerSimulator();

// String 1 in Outer Scope (lives until line 10)
const scopeX: ReferenceScope = { name: 's1', startLine: 1, endLine: 10 };

// String 2 in Inner Scope (lives until line 6)
const scopeY: ReferenceScope = { name: 's2', startLine: 3, endLine: 6 };

// Case 1: Reading result inside inner scope at line 5 (Valid)
const check1 = checker.verifyBorrowSafety(scopeX, scopeY, 5);
console.log('Access at line 5 safe:', check1.isSafe); // true

// Case 2: Attempting to use result outside inner scope at line 8 (Dangling Hazard!)
const check2 = checker.verifyBorrowSafety(scopeX, scopeY, 8);
console.log('Access at line 8 safe:', check2.isSafe); // false
console.log('Compiler Error Code:', check2.errorCode); // E0597`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Lifetime Annotation',
          def: {
            en: 'Syntax parameter (\'a) telling the borrow checker the required lifespan relationship between multiple references.',
            bn: 'সিনট্যাক্স (\'a) যা বরো চেকারকে একাধিক রেফারেন্সের পারস্পরিক আয়ুর সম্পর্ক জানিয়ে দেয়।'
          }
        },
        {
          term: 'Lifetime Elision',
          def: {
            en: 'Deterministic compiler heuristics that automatically infer lifetime annotations in common function signatures.',
            bn: 'কম্পাইলারের স্বয়ংক্রিয় নিয়ম যা সাধারণ ফাংশন সিগনেচারে লাইফটাইম নিজে থেকেই বসিয়ে নেয়।'
          }
        },
        {
          term: '\'static Lifetime',
          def: {
            en: 'Special lifetime denoting that referenced data remains valid for the entire execution duration of the program.',
            bn: 'বিশেষ লাইফটাইম যা নির্দেশ করে যে ডেটা পুরো প্রোগ্রাম চলাকালীন মেমোরিতে অক্ষত থাকবে।'
          }
        },
        {
          term: 'Dangling Reference',
          def: {
            en: 'A fatal memory defect where a pointer points to memory that has already been deallocated, prevented by lifetimes.',
            bn: 'মারাত্মক বাগ যেখানে পয়েন্টার মুছে যাওয়া মেমোরি নির্দেশ করে; লাইফটাইম এটি চিরতরে বন্ধ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'lifetime-annotation-purpose-ex1',
      kind: 'mcq',
      topic: 'lifetime-annotations-relationship-contract',
      question: {
        en: 'What do generic lifetime annotations (such as "\'a") actually accomplish in Rust?',
        bn: 'Rust-এ জেনেরিক লাইফটাইম অ্যানোটেশন (যেমন "\'a") আসলে কী কাজ করে?'
      },
      options: [
        {
          en: 'They describe the relationship between the lifespans of multiple references to help the borrow checker prove memory safety, without altering runtime longevity',
          bn: 'তারা রানটাইমের আয়ু না বদলিয়ে একাধিক রেফারেন্সের পারস্পরিক সম্পর্ক বরো চেকারকে বুঝিয়ে মেমোরি নিরাপত্তা প্রমাণ করে'
        },
        {
          en: 'They extend the physical lifetime of values so they never get dropped',
          bn: 'তারা মানের বাস্তব জীবনকাল বাড়িয়ে দেয় যাতে সেগুলো কখনো ড্রপ না হয়'
        },
        {
          en: 'They convert reference pointers into 64-bit floating point numbers',
          bn: 'তারা রেফারেন্স পয়েন্টারকে ৬৪-বিট ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করে'
        },
        {
          en: 'Lifetime annotations format the hard drive on every compile',
          bn: 'প্রতিবার কম্পাইল করার সময় তারা হার্ড ড্রাইভ ফরম্যাট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Lifetimes establish relationships between references for the compiler; they do not alter runtime behavior.',
        bn: 'লাইফটাইম কোনো জাদুকরি আয়ু বৃদ্ধি করে না, এটি কেবল কম্পাইলারকে রেফারেন্সের তুলনা বুঝতে সাহায্য করে।'
      },
      explanation: {
        en: 'Lifetimes are descriptive contracts. They tell the compiler how long output references remain valid based on the lifespans of the input arguments.',
        bn: 'এর ফলে মেমোরি নষ্ট হওয়ার আগেই কম্পাইলার সম্ভাব্য সব ভুল আটকে দিতে পারে।'
      }
    },
    {
      id: 'lifetime-elision-rule-count-ex2',
      kind: 'mcq',
      topic: 'lifetime-elision-three-rules',
      question: {
        en: 'How many deterministic Lifetime Elision rules does the Rust compiler evaluate before requiring manual annotations?',
        bn: 'ম্যানুয়াল অ্যানোটেশন দাবি করার আগে Rust কম্পাইলার কয়টি সুনির্দিষ্ট লাইফটাইম এলিশন নিয়ম প্রয়োগ করে?'
      },
      options: [
        {
          en: 'Exactly 3 rules: individual input lifetimes, single input propagation, and the &self method rule',
          bn: 'ঠিক ৩ টি নিয়ম: প্রতিটি ইনপুটে আলাদা লাইফটাইম, একক ইনপুটের আউটপুটে বিস্তার এবং &self মেথডের নিয়ম'
        },
        {
          en: 'Exactly 10 rules',
          bn: 'ঠিক ১০ টি নিয়ম'
        },
        {
          en: 'Only 1 rule that applies exclusively to integer arrays',
          bn: 'কেবল ১ টি নিয়ম যা পূর্ণসংখ্যার অ্যারেতে প্রযোজ্য'
        },
        {
          en: 'Rust has zero elision rules; every reference must be manually annotated',
          bn: 'Rust-এ কোনো এলিশন নিয়ম নেই; প্রতিটি রেফারেন্সে ম্যানুয়ালি লিখতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Rust applies 3 deterministic lifetime elision rules.',
        bn: 'কম্পাইলার ৩ টি এলিশন নিয়মের সাহায্যে শতকরা ৮০ ভাগ ক্ষেত্রে স্বয়ংক্রিয়ভাবে লাইফটাইম ধরে নেয়।'
      },
      explanation: {
        en: 'The 3 elision rules allow developers to write concise code for standard functions without cluttering signatures with explicit tick annotations.',
        bn: 'এর ফলে সাধারণ ফাংশনে বারবার অতিরিক্ত লাইফটাইম সিনট্যাক্স লেখার প্রয়োজন হয় না।'
      }
    },
    {
      id: 'static-lifetime-string-literals-ex3',
      kind: 'mcq',
      topic: 'static-lifetime-binary-data-segment',
      question: {
        en: 'Why do hardcoded string literals (such as "let s: &\'static str = "codeshikhon";") inherently possess the "\'static" lifetime in Rust?',
        bn: 'Rust-এ সরাসরি কোডে লেখা স্ট্রিং লিটারেলগুলো (যেমন "let s: &\'static str = "codeshikhon";") কেন জন্মগতভাবেই "\'static" লাইফটাইম ধারণ করে?'
      },
      options: [
        {
          en: 'They are embedded directly into the read-only data segment of the compiled executable binary, ensuring their memory remains permanently allocated for the entire program run',
          bn: 'সেগুলো কম্পাইল্ড এক্সিকিউটেবল বাইনারির রিড-অনলি ডেটা সেগমেন্টে সরাসরি খোদাই করা থাকে, ফলে পুরো প্রোগ্রাম চলাকালীন তাদের মেমোরি সর্বদা বৈধ থাকে'
        },
        {
          en: 'Because they are downloaded repeatedly from the internet',
          bn: 'কারণ সেগুলো ইন্টারনেট থেকে বারবার ডাউনলোড করা হয়'
        },
        {
          en: 'Because the string characters are converted into static C++ classes',
          bn: 'কারণ স্ট্রিংয়ের অক্ষরগুলোকে স্ট্যাটিক C++ ক্লাসে রূপান্তর করা হয়'
        },
        {
          en: '\'static is only valid on Linux kernel versions below 2.0',
          bn: '\'static কেবল ২.০ সংস্করণের নিচের লিনাক্স কার্নেলে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: '\'static data lives for the entire program execution in the binary data segment.',
        bn: 'যেহেতু বাইনারি ফাইলের ভেতরেই এই লেখা সংরক্ষিত থাকে, তাই প্রোগ্রাম চলাকালে এটি কখনো নষ্ট হয় না।'
      },
      explanation: {
        en: 'String literals are stored in the program binary. Because the binary remains loaded in memory while the application executes, their references never dangle.',
        bn: 'ফলে অ্যাপ শুরুর প্রথম সেকেন্ড থেকে শেষ সেকেন্ড পর্যন্ত এগুলোর রেফারেন্স ১০০% নিরাপদ থাকে।'
      }
    },
    {
      id: 'struct-holding-reference-lifetime-ex4',
      kind: 'mcq',
      topic: 'struct-lifetime-annotations-validity',
      question: {
        en: 'Why must a Rust struct that stores a reference field declare a generic lifetime parameter ("struct Book<\'a> { title: &\'a str }")?',
        bn: 'রেফারেন্স ধারণকারী একটি Rust স্ট্রাক্টকে কেন অবশ্যই জেনেরিক লাইফটাইম ঘোষণা করতে হয় ("struct Book<\'a> { title: &\'a str }")?'
      },
      options: [
        {
          en: 'To guarantee that an instance of the struct can NEVER outlive the underlying data referenced by its field, preventing dangling pointer bugs',
          bn: 'নিশ্চয়তা দিতে যে স্ট্রাক্টটির কোনো অবজেক্ট যেন কখনোই তার ফিল্ডের নির্দেশিত আসল ডেটার চেয়ে বেশি সময় বেঁচে না থাকে, যা ঝুলন্ত পয়েন্টার রোধ করে'
        },
        {
          en: 'Because structs cannot contain strings without internet access',
          bn: 'কারণ ইন্টারনেট সংযোগ ছাড়া স্ট্রাক্ট স্ট্রিং ধারণ করতে পারে না'
        },
        {
          en: 'To format the struct as an XML document on disk',
          bn: 'স্ট্রাক্টটিকে ডিস্কে একটি এক্সএমএল নথি হিসেবে সংরক্ষণ করতে'
        },
        {
          en: 'Declaring lifetimes on structs was removed in Rust 2021',
          bn: 'Rust ২০২১ সংস্করণে স্ট্রাক্টে লাইফটাইম ঘোষণা বাদ দেওয়া হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Struct lifetimes ensure the struct instance does not outlive its referenced fields.',
        bn: 'স্ট্রাক্টের অবজেক্ট যাতে তার ভেতরের রেফারেন্সের আগেই ধ্বংস হয় বা একসাথে থাকে, তা নিশ্চিত করতেই এই নিয়ম।'
      },
      explanation: {
        en: 'If a struct could outlive its referenced data, calling methods on it after the underlying data was dropped would trigger undefined behavior. The lifetime parameter forbids this.',
        bn: 'ভেতরের রেফারেন্স মুছে গেলে স্ট্রাক্টটিকেও অকেজো করে মেমোরি নিরাপত্তা রক্ষা করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-lifetimes-and-the-tick',
    title: {
      en: 'Rust Lifetimes & The Borrow Checker Quiz',
      bn: 'Rust লাইফটাইম এবং বরো চেকার কুইজ'
    },
    questions: [
      {
        id: 'quiz-third-elision-rule-self-reference',
        kind: 'mcq',
        topic: 'lifetime-elision-rule-three-self-method',
        question: {
          en: 'In Rust method syntax, what does the 3rd Lifetime Elision rule state regarding methods accepting "&self" or "&mut self"?',
          bn: 'Rust মেথড সিনট্যাক্সে "&self" বা "&mut self" গ্রহণকারী মেথডের ক্ষেত্রে ৩য় লাইফটাইম এলিশন নিয়মটি কী নির্ধারণ করে?'
        },
        options: [
          {
            en: 'If there are multiple input lifetimes, but one of them is &self or &mut self, the lifetime of self is automatically assigned to all output references',
            bn: 'একাধিক ইনপুট লাইফটাইম থাকা সত্ত্বেও তাদের একটি যদি &self বা &mut self হয়, তবে সেলফের লাইফটাইমটি নিজে থেকেই সমস্ত আউটপুট রেফারেন্সে বরাদ্দ হয়'
          },
          {
            en: 'The method must return an integer error code',
            bn: 'মেথডটিকে অবশ্যই একটি পূর্ণসংখ্যার এরর কোড ফেরত দিতে হবে'
          },
          {
            en: 'The self parameter is deleted during compilation',
            bn: 'কম্পাইলেশনের সময় self প্যারামিটারটি মুছে ফেলা হয়'
          },
          {
            en: 'Methods with &self are forbidden from returning references',
            bn: '&self যুক্ত মেথড থেকে কোনো রেফারেন্স ফেরত দেওয়া নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Rule 3 binds the output lifetime to &self, matching standard object-oriented expectations.',
          bn: 'মেথডের আউটপুট সাধারণত ক্লাসের নিজস্ব ফিল্ডের রেফারেন্স হয়, তাই ডিফল্টভাবে সেলফের আয়ুই পায়।'
        },
        explanation: {
          en: 'Because getter methods predominantly return references tied to the struct instance itself, Rule 3 assigns self\'s lifetime to the return value automatically.',
          bn: 'ফলে গেটার মেথড লেখার সময় বারবার লাইফটাইম অ্যানোটেশন টাইপ করতে হয় না।'
        }
      },
      {
        id: 'quiz-anonymous-lifetime-underscore-tick',
        kind: 'mcq',
        topic: 'anonymous-lifetime-underscore-tick',
        question: {
          en: 'What does the anonymous lifetime syntax "\'_" represent when used in function signatures in modern Rust?',
          bn: 'আধুনিক Rust-এ ফাংশন সিগনেচারে বেনামী লাইফটাইম সিনট্যাক্স "\'_" কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'It instructs the compiler to deduce and infer the lifetime parameter automatically using standard lifetime elision rules without naming a specific tick variable',
            bn: 'এটি কোনো নির্দিষ্ট নাম না দিয়ে কম্পাইলারকে নিজে থেকেই এলিশন নিয়মে লাইফটাইম অনুমান করে নেওয়ার নির্দেশ দেয়'
          },
          {
            en: 'It deletes the reference from computer memory',
            bn: 'এটি মেমোরি থেকে রেফারেন্সটি মুছে ফেলে'
          },
          {
            en: 'It converts the function into an asynchronous background task',
            bn: 'এটি ফাংশনটিকে একটি ব্যাকগ্রাউন্ড অ্যাসিঙ্ক টাস্কে রূপান্তর করে'
          },
          {
            en: '\'_ is exclusively used in macro definitions',
            bn: '\'_ কেবল ম্যাক্রো সংজ্ঞায় ব্যবহৃত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: '\'_ is an explicit placeholder telling the compiler to infer the lifetime.',
          bn: '\'_ হলো একটি প্লেসহোল্ডার যা কম্পাইলারকে নিজে হিসাব কষে লাইফটাইম বের করে নিতে বলে।'
        },
        explanation: {
          en: 'The anonymous lifetime placeholder "\'_" improves readability when a type requires a lifetime parameter but the exact name does not need to be declared explicitly.',
          bn: 'কোড সংক্ষিপ্ত ও পরিচ্ছন্ন রাখতে এই আধুনিক প্লেসহোল্ডার সিনট্যাক্স ব্যবহৃত হয়।'
        }
      },
      {
        id: 'quiz-lifetime-subtyping-outliving-bounds',
        kind: 'mcq',
        topic: 'lifetime-subtyping-outliving-syntax',
        question: {
          en: 'What does the lifetime constraint "\'a: \'b" (read as "\'a outlives \'b") communicate to the Rust borrow checker?',
          bn: 'Rust বরো চেকারকে লাইফটাইম শর্ত "\'a: \'b" (পড়া হয় "\'a outlives \'b") কী বার্তা দেয়?'
        },
        options: [
          {
            en: 'Lifetime \'a is guaranteed to last at least as long as lifetime \'b, allowing a reference with lifetime \'a to be safely used where lifetime \'b is expected',
            bn: 'লাইফটাইম \'a অবশ্যই অন্তত লাইফটাইম \'b এর সমান বা তার চেয়ে বেশি সময় টিকে থাকবে, ফলে \'a-এর রেফারেন্সকে \'b-এর স্থানে নিরাপদভাবে ব্যবহার করা যাবে'
          },
          {
            en: 'Lifetime \'a terminates 10 milliseconds before \'b',
            bn: 'লাইফটাইম \'a লাইফটাইম \'b-এর ১০ মিলিসেকেন্ড আগে শেষ হয়ে যায়'
          },
          {
            en: 'The two lifetimes are multiplied together',
            bn: 'দুটি লাইফটাইমকে একসাথে গুণ করা হয়'
          },
          {
            en: 'Outliving constraints are forbidden in safe Rust',
            bn: 'নিরাপদ Rust-এ আউটলিভিং শর্ত ব্যবহার নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: '\'a: \'b means \'a lives at least as long as \'b (lifetime subtyping).',
          bn: '\'a: \'b বোঝায় যে \'a এর আয়ু \'b এর চেয়ে দীর্ঘ বা সমান, যা নিরাপদ প্রতিস্থাপন নিশ্চিত করে।'
        },
        explanation: {
          en: 'Lifetime subtyping (\'a: \'b) proves that data referencing \'a will not be invalidated if held in a structure expecting lifetime \'b.',
          bn: 'জটিল ডেটা স্ট্রাকচারে এক রেফারেন্সের ভেতরে অন্য রেফারেন্স নিরাপদে ধরে রাখতে এটি লাগে।'
        }
      },
      {
        id: 'quiz-static-bound-vs-static-reference',
        kind: 'mcq',
        topic: 'static-trait-bound-vs-static-reference-difference',
        question: {
          en: 'What is the crucial architectural difference between the type "&\'static T" and the generic trait bound "T: \'static" in Rust?',
          bn: 'Rust-এ "&\'static T" রেফারেন্স এবং জেনেরিক ট্রেইট বাউন্ড "T: \'static"-এর মধ্যে অত্যন্ত গুরুত্বপূর্ণ স্থাপত্যিক পার্থক্য কী?'
        },
        options: [
          {
            en: '"&\'static T" is an immutable reference to data that lives forever; "T: \'static" means the type T can live as long as desired because it contains NO non-static references (an owned String satisfies T: \'static)',
            bn: '"&\'static T" হলো চিরস্থায়ী তথ্যের একটি ইমিউটেবল রেফারেন্স; আর "T: \'static" মানে হলো টাইপ T কোনো অস্থায়ী রেফারেন্স ধারণ করে না বলে অনির্দিষ্টকাল বেঁচে থাকতে সক্ষম (যেমন একটি নিজস্ব String টাইপ T: \'static পূরণ করে)'
          },
          {
            en: 'There is zero difference between &\'static T and T: \'static',
            bn: '&\'static T এবং T: \'static এর মধ্যে কোনো পার্থক্য নেই'
          },
          {
            en: 'T: \'static requires T to be a 32-bit floating point number',
            bn: 'T: \'static এর জন্য T কে একটি ৩২-বিট ফ্লোটিং সংখ্যা হতে হয়'
          },
          {
            en: 'T: \'static was removed in Rust 2018',
            bn: 'Rust ২০১৮ সংস্করণে T: \'static বাদ দেওয়া হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'T: \'static means T owns its data or contains only static references.',
          bn: 'T: \'static মানে হলো টাইপটি নিজেই নিজের তথ্যের পূর্ণ মালিক, কোনো ক্ষণস্থায়ী ধার করা পয়েন্টার এতে নেই।'
        },
        explanation: {
          en: 'A common misconception is that T: \'static must live forever. In reality, T: \'static merely bounds T to not contain short-lived borrowed references, which is required for thread spawning.',
          bn: 'থ্রেডে ডেটা পাঠানোর সময় এই শর্তটি নিশ্চিত করে যে অন্য থ্রেড শেষ হওয়ার আগে মূল ডেটা নষ্ট হবে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'traits-and-the-bound',
    title: {
      en: 'Traits, Generics & Dynamic Dispatch',
      bn: 'ট্রেইটস, জেনেরিকস এবং ডায়নামিক ডিসপ্যাচ'
    }
  }
};
