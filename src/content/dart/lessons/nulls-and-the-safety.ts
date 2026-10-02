import type { Lesson } from '../../../lib/types';

export const NullsAndTheSafetyLesson: Lesson = {
  slug: 'nulls-and-the-safety',
  tech: 'dart',
  title: {
    en: 'Sound Null Safety, Flow Analysis & Late Bindings',
    bn: 'সাউন্ড নাল সেফটি, ফ্লো অ্যানালিসিস এবং লেট বাইন্ডিংস'
  },
  summary: {
    en: 'Master Dart\'s Sound Null Safety system. Understand how compile-time non-nullable types guarantee freedom from null reference exceptions, explore compiler control-flow analysis and type promotion, utilize safe navigation (?.) and the null-coalescing operator (??), and navigate late bindings with runtime initialization assertions.',
    bn: 'Dart-এর সাউন্ড নাল সেফটি সিস্টেম সম্পূর্ণ আয়ত্ত করুন। কম্পাইল-টাইম নন-নালেবল টাইপ কীভাবে নাল পয়েন্টার এক্সেপশন চিরতরে দূর করে, কম্পাইলারের কন্ট্রোল-ফ্লো অ্যানালিসিস ও টাইপ প্রমোশন, সেফ নেভিগেশন (?.) এবং নাল-কোয়ালিসিং অপারেটর (??) এবং লেট বাইন্ডিংসের সঠিক ব্যবহার।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'sound-null-safety-guarantees-heading',
      text: {
        en: 'Sound Null Safety and Compile-Time Verification Guarantees',
        bn: 'সাউন্ড নাল সেফটি এবং কম্পাইল-টাইম নিশ্চয়তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In languages with unsound type systems, non-nullable types are mere suggestions that can still be corrupted by unchecked runtime nulls. In Dart (Google\'s client-optimized compiled programming language), null safety is mathematically 100 percent sound. If a variable is declared as non-nullable ("int count"), the compiler proves that it can never evaluate to null under any execution branch at runtime. Types are non-nullable by default; to allow the absence of a value, developers must explicitly append a question mark ("int?"). Because the compiler guarantees soundness, the Ahead-Of-Time optimizer strips defensive null checks from native assembly instructions, yielding smaller binaries and faster CPU execution.',
        bn: 'যেসব ভাষার টাইপ সিস্টেম সাউন্ড বা নিশ্চিত নয়, সেগুলোতে নন-নালেবল টাইপ ঘোষণা করলেও রানটাইমে নাল ঢুকে ক্র্যাশ হতে পারে। কিন্তু Dart (ক্লায়েন্ট অ্যাপের জন্য গুগলের তৈরি অপটিমাইজড কম্পাইল্ড ভাষা)-এ নাল সেফটি গাণিতিকভাবে ১০০ শতাংশ সাউন্ড বা নির্ভরযোগ্য। কোনো ভ্যারিয়েবলকে নন-নালেবল ("int count") হিসেবে ঘোষণা করলে কম্পাইলার প্রমাণ করে যে রানটাইমে কোনো অবস্থাতেই এটি নাল হতে পারবে না। এখানে প্রতিটি টাইপ ডিফল্টভাবেই নন-নালেবল; নাল থাকার অনুমতি দিতে চাইলে নামের শেষে স্পষ্টভাবে প্রশ্নবোধক চিহ্ন ("int?") লিখতে হয়। কম্পাইলার সম্পূর্ণ নিশ্চয়তা দেওয়ায় AOT অপটিমাইজার নেটিভ মেশিন কোড থেকে সমস্ত বাড়তি নাল পরীক্ষা মুছে ফেলে অ্যাপকে অনেক দ্রুতগতির করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Dart flow analysis and type promotion: Checking a nullable reference (String?) against null promotes it to non-nullable String automatically.',
        bn: 'চিত্র ১: Dart ফ্লো অ্যানালিসিস এবং টাইপ প্রমোশন: একটি নালেবল রেফারেন্স (String?) নাল নয় প্রমাণিত হলে কম্পাইলার নিজে থেকেই তাকে নন-নালেবল String-এ রূপান্তর করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">DART FLOW ANALYSIS &amp; TYPE PROMOTION PIPELINE</text>

  <!-- Left: Nullable Input -->
  <g transform="translate(35, 65)">
    <rect width="220" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="220" height="30" rx="8" fill="#0284c7" />
    <text x="110" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Nullable Source: String?</text>

    <rect x="15" y="50" width="190" height="40" rx="5" fill="#0f172a" />
    <text x="25" y="75" fill="#38bdf8" font-size="11" font-family="monospace">String? title = maybeNull();</text>

    <!-- Block direct call -->
    <rect x="15" y="105" width="190" height="55" rx="5" fill="#ef4444" fill-opacity="0.15" stroke="#ef4444" />
    <text x="25" y="125" fill="#f87171" font-size="10" font-family="monospace">title.length // ERROR!</text>
    <text x="25" y="142" fill="#fca5a5" font-size="9" font-family="sans-serif">The property 'length' can't be</text>
    <text x="25" y="154" fill="#fca5a5" font-size="9" font-family="sans-serif">unconditionally accessed.</text>
  </g>

  <!-- Center: Flow Analysis Gate -->
  <g transform="translate(290, 65)">
    <rect width="245" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="245" height="30" rx="8" fill="#d97706" />
    <text x="122" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Control-Flow Guard Check</text>

    <rect x="15" y="45" width="215" height="65" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="68" fill="#fbbf24" font-size="11" font-family="monospace">if (title == null) {</text>
    <text x="35" y="87" fill="#f87171" font-size="10" font-family="monospace">  return "Fallback";</text>
    <text x="25" y="102" fill="#fbbf24" font-size="11" font-family="monospace">}</text>

    <!-- Safe Flow Analysis description -->
    <rect x="15" y="125" width="215" height="85" rx="5" fill="#d97706" fill-opacity="0.15" />
    <text x="25" y="147" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Deterministic Proof:</text>
    <text x="25" y="165" fill="#f8fafc" font-size="9" font-family="sans-serif">Compiler analyzes control branches;</text>
    <text x="25" y="180" fill="#cbd5e1" font-size="9" font-family="sans-serif">Proves title can NEVER be null</text>
    <text x="25" y="195" fill="#cbd5e1" font-size="9" font-family="sans-serif">past the guard return clause!</text>
  </g>

  <!-- Right: Promoted Safe Access -->
  <g transform="translate(570, 65)">
    <rect width="235" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="235" height="30" rx="8" fill="#059669" />
    <text x="117" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Promoted Non-Nullable Type</text>

    <rect x="15" y="45" width="205" height="65" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="68" fill="#34d399" font-size="11" font-family="monospace">print(title.length);</text>
    <text x="25" y="87" fill="#cbd5e1" font-size="9" font-family="sans-serif">Direct, un-boxed access!</text>
    <text x="25" y="100" fill="#38bdf8" font-size="9" font-family="sans-serif">Promoted to non-nullable String</text>

    <!-- Machine Benefit -->
    <rect x="15" y="125" width="205" height="85" rx="5" fill="#059669" fill-opacity="0.2" stroke="#10b981" />
    <text x="25" y="147" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">Zero Runtime Checks:</text>
    <text x="25" y="165" fill="#f8fafc" font-size="9" font-family="sans-serif">Native AOT compiler generates</text>
    <text x="25" y="180" fill="#f8fafc" font-size="9" font-family="sans-serif">direct pointer offsets with zero</text>
    <text x="25" y="195" fill="#cbd5e1" font-size="9" font-family="sans-serif">defensive null check instructions!</text>
  </g>

  <!-- Flow Arrows -->
  <path d="M 255 175 L 290 175" stroke="#38bdf8" stroke-width="2" />
  <path d="M 535 175 L 570 175" stroke="#10b981" stroke-width="2" />
</svg>`
    },
    {
      type: 'heading',
      id: 'flow-analysis-and-late-heading',
      text: {
        en: 'Flow Analysis, Null-Coalescing Operators, and Late Bindings',
        bn: 'ফ্লো অ্যানালিসিস, নাল-কোয়ালিসিং অপারেটর এবং লেট বাইন্ডিংস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Navigating nullable references in Dart is streamlined by expressive operators. Safe navigation ("user?.profile?.avatar") short-circuits gracefully to null if any link in the chain is absent. To supply default fallbacks, the null-coalescing operator ("??") returns the right-hand value when the left-hand expression evaluates to null. When an object property cannot be initialized immediately in a constructor (such as dependencies configured during an asynchronous lifecycle method), developers declare it with the "late" modifier. Prepending "late" instructs the compiler that the non-nullable variable will be assigned before its first read, throwing a runtime LateInitializationError if accessed prematurely.',
        bn: 'Dart-এ নালেবল ডেটা ব্যবহারের জন্য বেশ কিছু সাবলীল অপারেটর সরবরাহ করা হয়েছে। সেফ নেভিগেশন ("user?.profile?.avatar") চেইনের যেকোনো অংশ খালি থাকলে কোনো এক্সেপশন ছাড়াই শান্তভাবে নাল ফেরত দেয়। বিকল্প মান দেওয়ার জন্য নাল-কোয়ালিসিং অপারেটর ("??") ব্যবহৃত হয় যা বাম পাশের মান নাল হলে ডান পাশের মানটি গ্রহণ করে। যখন কোনো অবজেক্টের মান সরাসরি কনস্ট্রাক্টরে সেট করা যায় না (যেমন কোনো অ্যাসিনক্রোনাস লাইফসাইকেল মেথডে মান সেট হয়), তখন ডেভেলপাররা "late" মডিফায়ার ব্যবহার করেন। "late" কি-ওয়ার্ড কম্পাইলারকে নিশ্চিত করে যে প্রথমবার পড়ার আগেই এতে মান বসানো হবে; অন্যথায় অপরিণত অবস্থায় পড়তে গেলে এটি LateInitializationError ছুড়ে সতর্কতা জারি করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Dart Sound Null Safety, compiler flow analysis type promotion, and late initialization assertion guards.',
        bn: 'Dart সাউন্ড নাল সেফটি, ফ্লো অ্যানালিসিস টাইপ প্রমোশন এবং লেট ইনিশিয়ালাইজেশন এরর গার্ডের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Dart Sound Null Safety, Flow Analysis Type Promotion, and Late Bindings

export class DartNullSafetySimulator {
  // 1. Safe Navigation (?.) and Null-Coalescing (??)
  public static resolveUserCity(user: { address?: { city?: string } } | null): string {
    // Simulates user?.address?.city ?? "Default City"
    const city = user?.address?.city ?? 'Dhaka';
    return city;
  }

  // 2. Flow Analysis and Type Promotion Simulation
  public static printPromotedString(input: string | null): string {
    // Flow analysis guard clause
    if (input === null) {
      return '[Flow Guard] Null detected. Early return.';
    }

    // Past this line, Dart compiler promotes input from "String?" to "String"!
    // Zero defensive null checks in compiled machine code!
    return '[Type Promoted] Non-null string length verified: ' + input.length;
  }

  // 3. Late Initialization Simulation (late String configToken)
  public static createLateProperty<T>() {
    let internalValue: T | undefined = undefined;
    let isInitialized = false;

    return {
      get value(): T {
        if (!isInitialized) {
          throw new Error('LateInitializationError: Field has not been initialized!');
        }
        return internalValue!;
      },
      set value(newValue: T) {
        internalValue = newValue;
        isInitialized = true;
      }
    };
  }
}

// Execution Demonstration
console.log('--- 1. Safe Navigation and Null-Coalescing ---');
console.log('City with valid address:', DartNullSafetySimulator.resolveUserCity({ address: { city: 'Chittagong' } })); // Chittagong
console.log('City with null address:', DartNullSafetySimulator.resolveUserCity(null)); // Dhaka (Fallback)

console.log('\n--- 2. Compiler Flow Analysis Type Promotion ---');
console.log(DartNullSafetySimulator.printPromotedString('Flutter Engineering'));
console.log(DartNullSafetySimulator.printPromotedString(null));

console.log('\n--- 3. Testing Late Variable Semantics ---');
const lateConfig = DartNullSafetySimulator.createLateProperty<string>();

// Reading before write throws LateInitializationError
try {
  console.log(lateConfig.value);
} catch (err: unknown) {
  console.log('[Expected Late Error Caught]:', (err as Error).message);
}

// Writing initializes field cleanly
lateConfig.value = 'Production_API_Token_Secure';
console.log('Successfully read initialized late value:', lateConfig.value);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Sound Null Safety',
          def: {
            en: 'Mathematical type guarantee that non-nullable variables can never evaluate to null under any runtime branch.',
            bn: 'গাণিতিক নিশ্চয়তা যা প্রমাণ করে যে নন-নালেবল ভ্যারিয়েবল রানটাইমে কোনো অবস্থাতেই নাল হতে পারে না।'
          }
        },
        {
          term: 'Flow Analysis',
          def: {
            en: 'Compiler logic analyzing control branches (if, return) to deduce when variables cannot be null.',
            bn: 'কম্পাইলারের বুদ্ধিমান বিশ্লেষণ যা শর্ত পরীক্ষা করে বোঝে কোন লাইনের পর ভ্যারিয়েবলটি আর নাল হতে পারে না।'
          }
        },
        {
          term: 'Type Promotion',
          def: {
            en: 'Automatic narrowing of a nullable type (T?) to non-nullable (T) within a scope verified by flow analysis.',
            bn: 'স্বয়ংক্রিয় টাইপ রূপান্তর যাতে নালেবল টাইপ শর্তপূরণ শেষে নন-নালেবল টাইপে উন্নীত হয়।'
          }
        },
        {
          term: 'Late Initialization',
          def: {
            en: 'Keyword deferring variable assignment while retaining non-nullability, verified by runtime assertions.',
            bn: 'কি-ওয়ার্ড যা ভ্যারিয়েবল পরে তৈরি করার সুযোগ দেয় কিন্তু পড়ার আগে মান না বসালে এরর দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'sound-null-safety-guarantee-ex1',
      kind: 'mcq',
      topic: 'sound-null-safety-mathematical-guarantee',
      question: {
        en: 'What mathematical guarantee does "Sound Null Safety" deliver to Dart release binaries compared to languages with unsound null checks?',
        bn: 'অনিরাপদ নাল চেকিংযুক্ত ভাষার তুলনায় Dart-এর "সাউন্ড নাল সেফটি" প্রোডাকশন বাইনারিতে কোন গাণিতিক নিশ্চয়তা প্রদান করে?'
      },
      options: [
        {
          en: 'If a variable is non-nullable (e.g. String), the compiler guarantees it can never be null at runtime, allowing the AOT compiler to strip defensive null checks from assembly code',
          bn: 'কোনো ভ্যারিয়েবল নন-নালেবল (যেমন String) হলে কম্পাইলার নিশ্চিত করে যে এটি কখনোই নাল হতে পারবে না, ফলে AOT কম্পাইলার মেশিন কোড থেকে বাড়তি নাল পরীক্ষা মুছে ফেলতে পারে'
        },
        {
          en: 'It doubles the RAM memory of the smartphone hardware',
          bn: 'এটি স্মার্টফোনের শারীরিক র‍্যাম মেমোরি দ্বিগুণ করে দেয়'
        },
        {
          en: 'It converts all null values into the number 0',
          bn: 'এটি সমস্ত নাল মানকে ০ সংখ্যায় রূপান্তর করে'
        },
        {
          en: 'Sound null safety was deprecated in Dart 3.0',
          bn: 'Dart ৩.০ সংস্করণে সাউন্ড নাল সেফটি বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sound null safety removes the possibility of null reference crashes and strips dead checks.',
        bn: 'অ্যাপ চলাকালে কোনো নাল ক্র্যাশ হওয়া অসম্ভব বলে কম্পাইলার মেশিন কোড অপটিমাইজ করে।'
      },
      explanation: {
        en: 'Because Dart\'s null safety is sound, the compiler proves values are never null. This avoids emitting millions of redundant CPU instructions checking for null in release binaries.',
        bn: 'এর ফলে প্রোডাকশন অ্যাপের আকার সংকুচিত হয় এবং সিপিইউ-তে সর্বোচ্চ গতি নিশ্চিত হয়।'
      }
    },
    {
      id: 'flow-analysis-type-promotion-ex2',
      kind: 'mcq',
      topic: 'flow-analysis-local-variable-type-promotion',
      question: {
        en: 'Under what condition does Dart\'s flow analysis promote a nullable local variable from "String?" to "String"?',
        bn: 'কোন শর্তে Dart-এর ফ্লো অ্যানালিসিস একটি নালেবল লোকাল ভ্যারিয়েবলকে "String?" থেকে "String"-এ উন্নীত করে?'
      },
      options: [
        {
          en: 'When a control-flow branch (like "if (s == null) return;") mathematically proves that the variable cannot evaluate to null past that line of code',
          bn: 'যখন কোনো শর্ত বা কোড প্রবাহ (যেমন "if (s == null) return;") গাণিতিকভাবে প্রমাণ করে যে সেই লাইনের পর ভ্যারিয়েবলটি কোনোভাবেই নাল হতে পারে না'
        },
        {
          en: 'Only when running on Apple macOS computers',
          bn: 'কেবল অ্যাপল ম্যাক কম্পিউটারে চলার সময়'
        },
        {
          en: 'Only if the variable contains fewer than 10 characters',
          bn: 'কেবল তখনই যদি ভ্যারিয়েবলে ১০ টির কম অক্ষর থাকে'
        },
        {
          en: 'Dart never promotes variable types automatically',
          bn: 'Dart কখনোই স্বয়ংক্রিয়ভাবে টাইপ প্রমোট করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Flow analysis promotes variables when control flow guarantees non-nullability.',
        bn: 'নাল হলে রিটার্ন হয়ে যাবে নিশ্চিত জেনে কম্পাইলার পরের লাইনে টাইপ বদলে দেয়।'
      },
      explanation: {
        en: 'Dart tracks branching statements. Once a guard clause eliminates the null branch, the variable is automatically promoted to its non-nullable type without manual casting.',
        bn: 'ফলে বাড়তি কোনো কাস্টিং না লিখে সরাসরি সাধারণ ডট দিয়েই কাজ করা সম্ভব হয়।'
      }
    },
    {
      id: 'null-coalescing-assignment-operator-ex3',
      kind: 'mcq',
      topic: 'null-coalescing-assignment-operator-behavior',
      question: {
        en: 'How does the null-coalescing assignment operator ("??=") operate in Dart (e.g. "balance ??= 100;")?',
        bn: 'Dart-এ নাল-কোয়ালিসিং অ্যাসাইনমেন্ট অপারেটর ("??=") কীভাবে কাজ করে (যেমন "balance ??= 100;")?'
      },
      options: [
        {
          en: 'It assigns the right-hand value (100) to the variable only if the variable is currently null; if it already contains a value, it remains untouched',
          bn: 'ভ্যারিয়েবলটি বর্তমানে নাল থাকলেই কেবল এটি ডান পাশের মানটি (১০০) বসায়; যদি আগে থেকেই কোনো মান থাকে তবে তা অপরিবর্তিত থাকে'
        },
        {
          en: 'It divides the balance by 100 on every clock cycle',
          bn: 'এটি প্রতি ঘড়ির চক্রে ব্যালেন্সকে ১০০ দিয়ে ভাগ করে'
        },
        {
          en: 'It encrypts the variable using a SHA-256 hash',
          bn: 'এটি ভ্যারিয়েবলটিকে একটি SHA-256 হ্যাশ দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: '??= causes an immediate fatal compile-time error',
          bn: '??= লিখলে তাৎক্ষণিক মারাত্মক কম্পাইল এরর ঘটে'
        }
      ],
      answer: 0,
      hint: {
        en: '??= assigns only when the target is null.',
        bn: 'আগে মান না থাকলেই কেবল নতুন মান বসানোর সুন্দর সংক্ষিপ্ত অপারেটর।'
      },
      explanation: {
        en: 'The expression "b ??= v;" is equivalent to "if (b == null) b = v;". It ensures variables hold default values without overwriting existing data.',
        bn: 'এর মাধ্যমে বিদ্যমান ডেটা নষ্ট না করে সহজেই ডিফল্ট মান নিশ্চিত করা যায়।'
      }
    },
    {
      id: 'late-keyword-read-before-write-hazard-ex4',
      kind: 'mcq',
      topic: 'late-keyword-runtime-error-hazard',
      question: {
        en: 'What occurs at runtime if a Dart developer accesses a non-nullable property marked with "late" before assigning any value to it?',
        bn: 'কোনো মান নির্ধারণ করার আগেই একজন Dart ডেভেলপার যদি "late" দিয়ে ঘোষিত একটি নন-নালেবল প্রোপার্টি পড়ার চেষ্টা করেন, তবে রানটাইমে কী ঘটে?'
      },
      options: [
        {
          en: 'The runtime throws a fatal "LateInitializationError: Field has not been initialized!" exception',
          bn: 'রানটাইম তাৎক্ষণিকভাবে একটি মারাত্মক "LateInitializationError: Field has not been initialized!" এক্সেপশন ছুড়ে দেয়'
        },
        {
          en: 'It returns an empty string silently',
          bn: 'এটি নীরবে একটি খালি স্ট্রিং ফেরত দেয়'
        },
        {
          en: 'The operating system restarts the smartphone',
          bn: 'অপারেটিং সিস্টেম স্মার্টফোনটি রিস্টার্ট করে'
        },
        {
          en: 'The compiler catches it and prevents building',
          bn: 'কম্পাইলার এটি ধরে ফেলে এবং বিল্ড আটকে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Reading an uninitialized late variable throws LateInitializationError at runtime.',
        bn: 'আগে মান না বসিয়ে পড়তে গেলে রানটাইমে এরর ছুড়ে ক্র্যাশ ঘটায়।'
      },
      explanation: {
        en: 'The late keyword bypasses compile-time initialization checks by inserting runtime assertion guards. If read before write, a LateInitializationError is thrown.',
        bn: 'তাই late ব্যবহারের সময় ব্যবহারের আগে অবশ্যই মান বসানো নিশ্চিত করতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-nulls-and-the-safety',
    title: {
      en: 'Dart Sound Null Safety Quiz',
      bn: 'Dart সাউন্ড নাল সেফটি কুইজ'
    },
    questions: [
      {
        id: 'quiz-bang-operator-null-assertion',
        kind: 'mcq',
        topic: 'null-assertion-operator-bang-peril',
        question: {
          en: 'Why is using the null assertion operator ("!") strongly discouraged in production Dart codebases?',
          bn: 'প্রোডাকশন Dart কোডবেসে নাল অ্যাসার্শন অপারেটর ("!") ব্যবহার কেন কঠোরভাবে নিরুৎসাহিত করা হয়?'
        },
        options: [
          {
            en: 'It bypasses compile-time safety checks; if the value is unexpectedly null at runtime, it instantly throws a fatal runtime exception and crashes the app',
            bn: 'এটি কম্পাইল-টাইম সুরক্ষা এড়িয়ে যায়; রানটাইমে মানটি অপ্রত্যাশিতভাবে নাল হলে এটি তৎক্ষণাৎ মারাত্মক এক্সেপশন ছুড়ে অ্যাপ ক্র্যাশ করায়'
          },
          {
            en: 'It doubles the CPU temperature of the smartphone',
            bn: 'এটি স্মার্টফোনের সিপিইউ তাপমাত্রা দ্বিগুণ করে দেয়'
          },
          {
            en: 'It formats the phone flash memory into ext4',
            bn: 'এটি ফোনের ফ্ল্যাশ মেমোরিকে ext4-এ ফরম্যাট করে'
          },
          {
            en: 'The ! operator was removed in Dart 3.0',
            bn: 'Dart ৩.০ সংস্করণে ! অপারেটর বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: '! throws an unhandled exception if the target evaluates to null.',
          bn: 'নাল থাকলে এটি সরাসরি অ্যাপ ক্র্যাশ করায়, তাই প্রোডাকশনে এটি পরিহার্য।'
        },
        explanation: {
          en: 'The ! operator forces an assertion. Idiomatic Dart prefers flow analysis checks (if != null) or null-coalescing fallbacks (??) over unsafe force-unwrapping.',
          bn: 'নিরাপদ কোড লিখতে সর্বদা if চেক বা নাল-কোয়ালিসিং ফলব্যাক ব্যবহার করা উচিত।'
        }
      },
      {
        id: 'quiz-flow-analysis-cannot-promote-fields',
        kind: 'mcq',
        topic: 'flow-analysis-field-promotion-restrictions',
        question: {
          en: 'Why does Dart\'s flow analysis frequently refuse to promote a public instance field from "String?" to "String" after an "if (user.name != null)" check?',
          bn: 'একটি পাবলিক ইনস্ট্যান্স ফিল্ড নাল চেক করার পরেও ("if (user.name != null)") কেন Dart-এর ফ্লো অ্যানালিসিস প্রায়শই টাইপ প্রমোট করতে অস্বীকৃতি জানায়?'
        },
        options: [
          {
            en: 'Because a getter on the class could return differing values on successive reads, or a subclass could override the property between the check and its usage',
            bn: 'কারণ ক্লাসের কোনো গেটার পর পর কলে ভিন্ন মান ফেরত দিতে পারে, অথবা কোনো সাবক্লাস চেক এবং ব্যবহারের মধ্যবর্তী সময়ে প্রোপার্টিটি বদলে দিতে পারে'
          },
          {
            en: 'Because instance fields consume 10 times more memory than local variables',
            bn: 'কারণ ইনস্ট্যান্স ফিল্ড লোকাল ভ্যারিয়েবলের চেয়ে ১০ গুণ বেশি মেমোরি খরচ করে'
          },
          {
            en: 'Because public fields are banned in safe Dart',
            bn: 'কারণ নিরাপদ Dart-এ পাবলিক ফিল্ড ব্যবহার নিষিদ্ধ'
          },
          {
            en: 'Flow analysis only works inside private constructors',
            bn: 'ফ্লো অ্যানালিসিস কেবল প্রাইভেট কনস্ট্রাক্টরের ভেতর কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Getters can return different values on each access; copy the field to a local variable to promote.',
          bn: 'গেটার যেকোনো সময় বদলে যেতে পারে, তাই লোকাল ভ্যারিয়েবলে মান রেখে চেক করতে হয়।'
        },
        explanation: {
          en: 'Because fields can have custom getters or be mutated across threads, the compiler cannot guarantee non-nullness. Copying the field to a local "final name = user.name;" enables promotion.',
          bn: 'তাই ফিল্ডের মান একটি লোকাল ভ্যারিয়েবলে রেখে দিলে কম্পাইলার সাথে সাথে টাইপ প্রমোট করে।'
        }
      },
      {
        id: 'quiz-late-lazy-top-level-variables',
        kind: 'mcq',
        topic: 'top-level-late-variables-lazy-performance',
        question: {
          en: 'Are top-level and static variables implicitly lazy in Dart, even without the "late" keyword?',
          bn: 'Dart-এ টপ-লেভেল এবং স্ট্যাটিক ভ্যারিয়েবলগুলো কি "late" কি-ওয়ার্ড ছাড়াও স্বাভাবিকভাবেই অলস (lazy) হিসেবে কাজ করে?'
        },
        options: [
          {
            en: 'Yes, all top-level and static variables are initialized lazily upon their first read access, optimizing application startup time',
            bn: 'হ্যাঁ, সমস্ত টপ-লেভেল এবং স্ট্যাটিক ভ্যারিয়েবল প্রথমবার পড়ার সময় অলসভাবে তৈরি হয়, যা অ্যাপ চালু হওয়ার গতি বৃদ্ধি করে'
          },
          {
            en: 'No, all top-level variables are initialized at device boot time',
            bn: 'না, সমস্ত টপ-লেভেল ভ্যারিয়েবল ডিভাইস বুট হওয়ার সময় তৈরি হয়'
          },
          {
            en: 'Only when running on 32-bit microcontrollers',
            bn: 'কেবল ৩২-বিট মাইক্রোকন্ট্রোলারে চলার সময়'
          },
          {
            en: 'Top-level variables are illegal in Dart',
            bn: 'Dart-এ টপ-লেভেল ভ্যারিয়েবল তৈরি করা বেআইনি'
          }
        ],
        answer: 0,
        hint: {
          en: 'Top-level and static fields in Dart are always lazily initialized upon first read.',
          bn: 'প্রয়োজনের আগে তৈরি না হয়ে প্রথমবার ডাকার সময় মেমোরিতে জায়গা নেয়।'
        },
        explanation: {
          en: 'Dart lazily initializes top-level variables upon first access. This prevents slow startup times caused by initializing unused global structures when the app launches.',
          bn: 'এর মাধ্যমে অ্যাপ চালু হওয়ার সময় অযথা মেমোরি নষ্ট না হয়ে দ্রুত স্ক্রিন প্রদর্শিত হয়।'
        }
      },
      {
        id: 'quiz-null-aware-spread-operator',
        kind: 'mcq',
        topic: 'null-aware-spread-operator-collection-literals',
        question: {
          en: 'What duty does the null-aware spread operator ("...?") fulfill inside Dart collection literals (e.g. "[1, 2, ...?nullableList]")?',
          bn: 'Dart কালেকশনে নাল-অ্যাওয়্যার স্প্রেড অপারেটর ("...?") কোন দায়িত্ব পালন করে (যেমন "[1, 2, ...?nullableList]")?'
        },
        options: [
          {
            en: 'If the target collection is not null, it unpacks its elements into the new collection; if it is null, it skips the collection entirely without throwing an exception',
            bn: 'টার্গেট কালেকশনটি নাল না হলে এটি তার উপাদানগুলোকে নতুন তালিকায় ঢুকিয়ে দেয়; আর নাল হলে কোনো এক্সেপশন না ছুড়ে শান্তভাবে তা এড়িয়ে যায়'
          },
          {
            en: 'It deletes the entire list if any item is null',
            bn: 'কোনো উপাদান নাল হলে এটি পুরো লিস্টটিকেই মুছে ফেলে'
          },
          {
            en: 'It converts the collection into an encrypted string',
            bn: 'এটি কালেকশনটিকে একটি এনক্রিপ্ট করা স্ট্রিংয়ে রূপান্তর করে'
          },
          {
            en: 'The ...? operator was deprecated in Dart 2.12',
            bn: 'Dart ২.১২ সংস্করণে ...? অপারেটর বাতিল করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: '...? unpacks elements if non-null, and gracefully skips if null.',
          bn: 'তালিকা খালি বা নাল থাকলে কোনো ক্র্যাশ না ঘটিয়ে শান্তভাবে স্কিপ করার সেরা সিনট্যাক্স।'
        },
        explanation: {
          en: 'The null-aware spread operator prevents crashes when assembling dynamic UI lists (like in Flutter Column children: [...?optionalWidgets]), avoiding verbose null checks.',
          bn: 'Flutter-এর ইউআই তালিকায় ঐচ্ছিক উইজেট জোড়ার সময় এটি অত্যন্ত পরিচ্ছন্ন ভূমিকা রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'packs-and-the-pub',
    title: {
      en: 'Package Management with Pub, Pubspec & Build Systems',
      bn: 'Pub, Pubspec এবং বিল্ড সিস্টেমের মাধ্যমে প্যাকেজ ম্যানেজমেন্ট'
    }
  }
};
