import type { Lesson } from '../../../lib/types';

export const NullsAndTheSafeLesson: Lesson = {
  slug: 'nulls-and-the-safe',
  tech: 'kotlin',
  title: {
    en: 'Null Safety, Safe Calls (?.) & The Elvis Operator (?:)',
    bn: 'নাল সেফটি, সেফ কল (?.) এবং এলভিস অপারেটর (?:)'
  },
  summary: {
    en: 'Eliminate the "Billion-Dollar Mistake" at compile time. Master Kotlin\'s type system division between non-nullable (String) and nullable (String?) types, traverse object graphs safely with safe-call chains (?.) and the Elvis fallback operator (?:), write idiomatic scoping blocks with let, and understand compiler smart casts.',
    bn: 'বিল্ডের সময়ই কুখ্যাত "বিলিয়ন ডলারের ভুল" চিরতরে দূর করুন। নন-নালেবল (String) এবং নালেবল (String?) টাইপের বিভাজন, সেফ-কল চেইন (?.) এবং এলভিস ফলব্যাক অপারেটর (?:) দিয়ে নিরাপদ অবজেক্ট ট্রাভার্সাল, let স্কোপিং ফাংশন এবং কম্পাইলারের স্মার্ট কাস্ট আয়ত্ত করুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'null-safety-type-system-heading',
      text: {
        en: 'The Billion-Dollar Mistake and Kotlin Type System Division',
        bn: 'বিলিয়ন ডলারের ভুল এবং Kotlin টাইপ সিস্টেমের বিভাজন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In 1965, computer scientist Tony Hoare invented the null reference, later lamenting it as his "billion-dollar mistake" due to countless production crashes. In Kotlin (JetBrains\' modern statically typed language for mobile and server development), the compiler eliminates NullPointerException (NPE) bugs at compile time. Every type is non-nullable by default. Declaring a variable as "String" guarantees that it will hold a genuine string instance; attempting to assign null fails compilation immediately. To permit the absence of a value, developers must explicitly append a question mark to the type name ("String?"). The compiler forces all operations on nullable references to be guarded by safe calls, early returns, or fallback defaults.',
        bn: '১৯৬৫ সালে কম্পিউটার বিজ্ঞানী টনি হোর নাল রেফারেন্স আবিষ্কার করেন, যাকে পরবর্তীতে তিনি অগুনতি ক্র্যাশের কারণে নিজের "বিলিয়ন ডলারের ভুল" বলে অভিহিত করেন। কিন্তু Kotlin (মোবাইল ও সার্ভার অ্যাপ্লিকেশনের জন্য জেটব্রেইন্সের আধুনিক টাইপ-সেফ ভাষা)-এ কম্পাইলার বিল্ডের সময়ই NullPointerException (NPE) নির্মূল করে। এখানে প্রতিটি টাইপ ডিফল্টভাবেই নন-নালেবল। কোনো ভ্যারিয়েবলকে "String" হিসেবে ঘোষণা করলে তাতে অবশ্যই একটি বৈধ স্ট্রিং থাকতে হবে; সেখানে null বসানোর চেষ্টা করলে কোড কম্পাইলই হবে না। কোনো ভ্যারিয়েবলে নাল থাকার অনুমতি দিতে হলে টাইপের নামের শেষে একটি প্রশ্নবোধক চিহ্ন ("String?") যোগ করতে হয়। কম্পাইলার নালেবল ডেটার ওপর যেকোনো অপারেশন চালানোর আগে সেফ কল, রিটার্ন বা ফলব্যাক ডিফাইন করা বাধ্যতামূলক করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Kotlin null safety evaluation pipeline: Safe call (?.) short-circuits to null, Elvis operator (?:) provides fallbacks, and control flow triggers smart casts.',
        bn: 'চিত্র ১: Kotlin নাল সেফটি মূল্যায়ন পাইপলাইন: সেফ কল (?.) নাল পেলে থেমে যায়, এলভিস অপারেটর (?:) ফলব্যাক মান দেয় এবং শর্ত যাচাই স্মার্ট কাস্ট ঘটায়।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">KOTLIN COMPILE-TIME NULL SAFETY ARCHITECTURE</text>

  <!-- Input Nullable Variable -->
  <g transform="translate(35, 65)">
    <rect width="210" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="210" height="30" rx="8" fill="#0284c7" />
    <text x="105" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Nullable Source: String?</text>

    <rect x="15" y="50" width="180" height="40" rx="5" fill="#0f172a" />
    <text x="25" y="75" fill="#38bdf8" font-size="11" font-family="monospace">val city: String?</text>

    <!-- State Distinction -->
    <rect x="15" y="105" width="180" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="125" fill="#34d399" font-size="10" font-family="monospace">State A: "Dhaka"</text>
    <text x="25" y="142" fill="#cbd5e1" font-size="9" font-family="sans-serif">Valid memory pointer</text>

    <rect x="15" y="165" width="180" height="50" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="25" y="185" fill="#f87171" font-size="10" font-family="monospace">State B: null</text>
    <text x="25" y="202" fill="#cbd5e1" font-size="9" font-family="sans-serif">Absence of value</text>
  </g>

  <!-- Safe Call & Elvis Pipeline -->
  <g transform="translate(290, 65)">
    <rect width="250" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="250" height="30" rx="8" fill="#d97706" />
    <text x="125" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Guarded Access Operations</text>

    <!-- Safe Call -->
    <rect x="15" y="45" width="220" height="65" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="68" fill="#fbbf24" font-size="11" font-family="monospace">city?.uppercase()</text>
    <text x="25" y="87" fill="#cbd5e1" font-size="9" font-family="sans-serif">If null: emits null immediately</text>
    <text x="25" y="100" fill="#cbd5e1" font-size="9" font-family="sans-serif">If present: executes method</text>

    <!-- Elvis Operator -->
    <rect x="15" y="125" width="220" height="65" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="25" y="148" fill="#c084fc" font-size="11" font-family="monospace">city ?: "Default"</text>
    <text x="25" y="167" fill="#cbd5e1" font-size="9" font-family="sans-serif">If null: returns "Default"</text>
    <text x="25" y="180" fill="#cbd5e1" font-size="9" font-family="sans-serif">If present: returns city</text>

    <text x="25" y="215" fill="#38bdf8" font-size="10" font-family="monospace">city?.let { run(it) }</text>
  </g>

  <!-- Right: Smart Cast Engine -->
  <g transform="translate(585, 65)">
    <rect width="220" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="220" height="30" rx="8" fill="#059669" />
    <text x="110" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Compiler Smart Cast</text>

    <rect x="15" y="45" width="190" height="80" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="68" fill="#34d399" font-size="10" font-family="monospace">if (city != null) {</text>
    <text x="35" y="88" fill="#38bdf8" font-size="10" font-family="monospace">  city.length</text>
    <text x="25" y="108" fill="#34d399" font-size="10" font-family="monospace">}</text>

    <rect x="15" y="140" width="190" height="75" rx="5" fill="#059669" fill-opacity="0.2" stroke="#10b981" />
    <text x="25" y="162" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">Type Narrowing:</text>
    <text x="25" y="180" fill="#f8fafc" font-size="9" font-family="sans-serif">String? automatically promoted</text>
    <text x="25" y="196" fill="#f8fafc" font-size="9" font-family="sans-serif">to non-nullable String!</text>
  </g>

  <!-- Connectors -->
  <path d="M 245 175 L 290 175" stroke="#38bdf8" stroke-width="2" />
  <path d="M 540 175 L 585 175" stroke="#10b981" stroke-width="2" />
</svg>`
    },
    {
      type: 'heading',
      id: 'safe-call-and-elvis-heading',
      text: {
        en: 'Safe Calls (?.), The Elvis Operator (?:), and Smart Casts',
        bn: 'সেফ কল (?.), এলভিস অপারেটর (?:) এবং স্মার্ট কাস্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Accessing properties across nested nullable data structures is streamlined by safe-call chains ("user?.address?.postalCode"). If any link in the chain is null, evaluation short-circuits gracefully and returns null without throwing an exception. To supply fallback values when an expression yields null, developers employ the Elvis operator ("?:", named after Elvis Presley\'s signature hairstyle). The Elvis operator can provide default constants or trigger control-flow jumps like "return" or "throw". Furthermore, Kotlin\'s compiler features sophisticated smart casting: once the compiler verifies via an "if (item != null)" check that a variable cannot be null, it automatically casts the variable from T? to non-nullable T inside that branch.',
        bn: 'নেস্টেড নালেবল অবজেক্ট থেকে ডেটা বের করার জন্য সেফ-কল চেইন ("user?.address?.postalCode") অত্যন্ত চমৎকার ভূমিকা পালন করে। চেইনের যেকোনো একটি অংশ নাল হলে কোনো এক্সেপশন না ছুড়েই পুরো এক্সপ্রেশনটি শান্তভাবে নাল রিটার্ন করে। নালের বদলে বিকল্প কোনো মান দিতে ডেভেলপাররা এলভিস অপারেটর ("?:") ব্যবহার করেন, যার চেহারা এলভিস প্রেসলির চুলের স্টাইলের সাথে মিলে যায়। এলভিস অপারেটরের ডানে কেবল সাধারণ মানই নয়, বরং "return" বা "throw"-এর মতো জাম্প স্টেটমেন্টও লেখা যায়। তাছাড়া Kotlin কম্পাইলারে অত্যন্ত শক্তিশালী "স্মার্ট কাস্ট" সুবিধা রয়েছে: কোনো "if (item != null)" পরীক্ষার মাধ্যমে ডেটা নাল নয় নিশ্চিত হলে, কম্পাইলার স্বয়ংক্রিয়ভাবে সেই ব্লকের ভেতর ভ্যারিয়েবলটিকে T? থেকে নন-নালেবল T টাইপে রূপান্তর করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Kotlin null safety, safe-call chaining (?.), Elvis operator fallback (?:), and smart cast promotion.',
        bn: 'Kotlin নাল সেফটি, সেফ-কল চেইনিং (?.), এলভিস অপারেটর ফলব্যাক (?:) এবং স্মার্ট কাস্টের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Kotlin Compile-Time Null Safety, Safe Calls, and Elvis Fallbacks

export interface KotlinAddress {
  city: string;
  postalCode?: string; // Nullable String?
}

export interface KotlinUser {
  id: number;
  name: string; // Non-nullable String
  address?: KotlinAddress; // Nullable KotlinAddress?
}

export class KotlinNullSafetyEngine {
  // Safe Call Chain Simulation: user?.address?.postalCode
  public static extractPostalCode(user?: KotlinUser): string | null {
    if (user === undefined || user === null) {
      return null; // Short-circuit safe call
    }
    if (user.address === undefined || user.address === null) {
      return null;
    }
    return user.address.postalCode ?? null;
  }

  // Elvis Operator Simulation: expression ?: fallback
  public static resolvePostalWithElvis(user?: KotlinUser, fallback = '0000'): string {
    const code = KotlinNullSafetyEngine.extractPostalCode(user);
    // Elvis operator returns fallback when null
    return code !== null ? code : fallback;
  }

  // Scoping function "let" simulation: user?.let { ... }
  public static processUserWithLet<R>(user: KotlinUser | null, block: (u: KotlinUser) => R): R | null {
    if (user === null) {
      return null;
    }
    // Inside block, user is smart-cast to non-nullable KotlinUser
    return block(user);
  }

  // Smart Cast Simulation: checks condition and narrows type
  public static auditAndPrint(name: string | null): string {
    if (name === null) {
      return 'Auditor: Name is missing (null).';
    }
    // Compiler smart-casts name to non-nullable string!
    return 'Auditor: Valid name verified with length ' + name.length;
  }
}

// Execution Demonstration
const user1: KotlinUser = {
  id: 101,
  name: 'Tamim',
  address: { city: 'Dhaka', postalCode: '1207' }
};

const user2: KotlinUser = {
  id: 102,
  name: 'Sadia',
  address: { city: 'Chittagong' } // postalCode is null
};

const user3: KotlinUser | null = null;

console.log('User 1 Postal (Safe Call):', KotlinNullSafetyEngine.extractPostalCode(user1)); // 1207
console.log('User 2 Postal (Safe Call):', KotlinNullSafetyEngine.extractPostalCode(user2)); // null
console.log('User 2 Postal (with Elvis):', KotlinNullSafetyEngine.resolvePostalWithElvis(user2, '9999')); // 9999
console.log('User 3 Postal (with Elvis):', KotlinNullSafetyEngine.resolvePostalWithElvis(user3, '0000')); // 0000

// Safe let execution
KotlinNullSafetyEngine.processUserWithLet(user1, (u) => {
  console.log('Scoped non-null execution for User ID:', u.id); // 101
});

// Smart cast demonstration
console.log(KotlinNullSafetyEngine.auditAndPrint('Rahim'));
console.log(KotlinNullSafetyEngine.auditAndPrint(null));`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Non-Nullable Type',
          def: {
            en: 'Standard Kotlin type (e.g. String) guaranteed by the compiler to never contain null at runtime.',
            bn: 'স্ট্যান্ডার্ড Kotlin টাইপ যা রানটাইমে কখনোই নাল হতে পারবে না বলে কম্পাইলার নিশ্চয়তা দেয়।'
          }
        },
        {
          term: 'Nullable Type (?)',
          def: {
            en: 'Explicit type annotated with a question mark (e.g. String?) that signals the potential absence of a value.',
            bn: 'প্রশ্নবোধক চিহ্নযুক্ত টাইপ যা কোনো মান অনুপস্থিত বা নাল থাকার সম্ভাবনা স্পষ্টভাবে প্রকাশ করে।'
          }
        },
        {
          term: 'Safe Call (?.)',
          def: {
            en: 'Operator that safely accesses properties on nullable instances, returning null if the receiver is null.',
            bn: 'অপারেটর যা নালেবল অবজেক্ট থেকে নিরাপদে ডেটা পড়ে এবং অবজেক্ট নাল হলে নিজে থেকেই নাল ফেরত দেয়।'
          }
        },
        {
          term: 'Elvis Operator (?:)',
          def: {
            en: 'Fallback operator providing a default value or early return jump when an expression evaluates to null.',
            bn: 'ফলব্যাক অপারেটর যা কোনো এক্সপ্রেশন নাল হলে পূর্বনির্ধারিত বিকল্প মান প্রদান করে বা কোড থামায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'kotlin-default-non-nullability-ex1',
      kind: 'mcq',
      topic: 'kotlin-default-non-null-type-safety',
      question: {
        en: 'What occurs if a Kotlin developer writes "val name: String = null" in their source code?',
        bn: 'একজন Kotlin ডেভেলপার সোর্স কোডে "val name: String = null" লিখলে কী ঘটে?'
      },
      options: [
        {
          en: 'The compiler halts with a compile-time error because String is non-nullable by default and rejects null assignments',
          bn: 'কম্পাইলার তাৎক্ষণিকভাবে এরর দিয়ে বিল্ড বন্ধ করে দেয় কারণ String ডিফল্টভাবে নন-নালেবল এবং নাল মান প্রত্যাখ্যান করে'
        },
        {
          en: 'The program compiles and crashes with an NPE on line 50',
          bn: 'প্রোগ্রামটি কম্পাইল হয় এবং ৫০ নম্বর লাইনে গিয়ে NPE দিয়ে ক্র্যাশ করে'
        },
        {
          en: 'The operating system restarts the computer immediately',
          bn: 'অপারেটিং সিস্টেম তাৎক্ষণিকভাবে কম্পিউটার রিস্টার্ট করে'
        },
        {
          en: 'Kotlin converts the null into an empty string ("")',
          bn: 'Kotlin নালকে একটি খালি স্ট্রিংয়ে ("") রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Types in Kotlin are non-nullable by default.',
        bn: 'প্রশ্নবোধক চিহ্ন ছাড়া কোনো টাইপেই নাল রাখা সম্পূর্ণ নিষিদ্ধ।'
      },
      explanation: {
        en: 'By rejecting null assignments to non-nullable types at compile time, Kotlin guarantees that non-nullable variables can never trigger a NullPointerException.',
        bn: 'এর মাধ্যমে রানটাইমে নালজনিত ক্র্যাশের সমস্ত সম্ভাবনা শুরুতেই দূর করা হয়।'
      }
    },
    {
      id: 'elvis-operator-early-return-ex2',
      kind: 'mcq',
      topic: 'elvis-operator-early-return-pattern',
      question: {
        en: 'How does the Elvis operator facilitate concise early-return validation (e.g. "val id = user?.id ?: return") in Kotlin functions?',
        bn: 'Kotlin ফাংশনে এলভিস অপারেটর কীভাবে দ্রুত কোড থামিয়ে বের হওয়ার সুবিধা দেয় (যেমন "val id = user?.id ?: return")?'
      },
      options: [
        {
          en: 'If user?.id evaluates to null, the right side executes and returns immediately from the enclosing function without executing remaining statements',
          bn: 'যদি user?.id নাল হয়, তবে ডান পাশের return স্টেটমেন্ট কার্যকর হয়ে মূল ফাংশন থেকে তৎক্ষণাৎ বের হয়ে যায়'
        },
        {
          en: 'It deletes the user object from device memory',
          bn: 'এটি ডিভাইসের মেমোরি থেকে ব্যবহারকারীর অবজেক্টটি মুছে ফেলে'
        },
        {
          en: 'It converts the function into an asynchronous coroutine',
          bn: 'এটি ফাংশনটিকে একটি অ্যাসিনক্রোনাস কোরুটিনে রূপান্তর করে'
        },
        {
          en: 'The Elvis operator cannot be paired with return statements',
          bn: 'এলভিস অপারেটরের সাথে কখনোই return স্টেটমেন্ট ব্যবহার করা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'In Kotlin, return is an expression of type Nothing and can appear on the right side of ?:.',
        bn: 'Kotlin-এ return একটি বৈধ এক্সপ্রেশন, যা নাল পেলেই ফাংশন থামিয়ে দেয়।'
      },
      explanation: {
        en: 'Because control jumps (return, throw) have type Nothing, they are legal on the right-hand side of ?: allowing concise guard clauses that strip nullability in 1 line.',
        bn: 'এর ফলে দীর্ঘ if-else না লিখে এক লাইনেই নাল ফিল্টার করে ফেলা যায়।'
      }
    },
    {
      id: 'smart-cast-mechanism-ex3',
      kind: 'mcq',
      topic: 'compiler-smart-casting-type-narrowing',
      question: {
        en: 'Under what condition does the Kotlin compiler automatically smart-cast a nullable variable from "String?" to "String"?',
        bn: 'কোন শর্তে Kotlin কম্পাইলার একটি নালেবল ভ্যারিয়েবলকে স্বয়ংক্রিয়ভাবে "String?" থেকে "String"-এ স্মার্ট কাস্ট করে?'
      },
      options: [
        {
          en: 'When the compiler verifies via control flow checks (like "if (s != null)") that the immutable val cannot be null inside that execution block',
          bn: 'যখন কম্পাইলার কোডের প্রবাহ যাচাই করে (যেমন "if (s != null)") নিশ্চিত হয় যে সেই ব্লকের ভেতর অপরিবর্তনীয় val কখনোই নাল হতে পারে না'
        },
        {
          en: 'Only when the code is executed on a Google Pixel smartphone',
          bn: 'কেবল তখনই যখন কোডটি গুগল পিক্সেল স্মার্টফোনে চালানো হয়'
        },
        {
          en: 'Only when the file is named Main.kt',
          bn: 'কেবল তখনই যখন ফাইলটির নাম Main.kt হয়'
        },
        {
          en: 'Kotlin never performs smart casts',
          bn: 'Kotlin কখনোই স্বয়ংক্রিয় স্মার্ট কাস্ট করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'The compiler performs smart casts on immutable references following null checks.',
        bn: 'নাল নয় নিশ্চিত হওয়ার পর কম্পাইলার নিজে থেকেই টাইপ বদলে দেয়।'
      },
      explanation: {
        en: 'Kotlin tracks branch conditions. Inside a block where a val is proven non-null, the compiler narrows its type, removing the need for manual casting or safe calls.',
        bn: 'ফলে ব্লকের ভেতরে বারবার ?. বা কাস্ট না লিখে সাধারণ ডট দিয়েই কাজ করা যায়।'
      }
    },
    {
      id: 'double-bang-operator-peril-ex4',
      kind: 'mcq',
      topic: 'not-null-assertion-double-bang-danger',
      question: {
        en: 'Why is using the not-null assertion operator ("!!") strongly discouraged in production Kotlin codebases?',
        bn: 'প্রোডাকশন Kotlin কোডবেসে নট-নাল অ্যাসার্শন অপারেটর ("!!") ব্যবহার কেন কঠোরভাবে নিরুৎসাহিত করা হয়?'
      },
      options: [
        {
          en: 'It forcefully strips null safety; if the value is unexpectedly null at runtime, it immediately throws a fatal NullPointerException',
          bn: 'এটি জোরপূর্বক নাল সেফটি বন্ধ করে দেয়; রানটাইমে মানটি অপ্রত্যাশিতভাবে নাল হলে এটি তাৎক্ষণিকভাবে মারাত্মক NullPointerException ছুড়ে ক্র্যাশ ঘটায়'
        },
        {
          en: 'It doubles the physical battery consumption of the phone',
          bn: 'এটি ফোনের ব্যাটারি খরচ দ্বিগুণ করে দেয়'
        },
        {
          en: 'It formats the hard drive into FAT32',
          bn: 'এটি হার্ড ড্রাইভকে FAT32-তে ফরম্যাট করে দেয়'
        },
        {
          en: 'The !! operator was deprecated in Kotlin 1.4',
          bn: 'Kotlin ১.৪ সংস্করণে !! অপারেটর বাতিল করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: '!! throws NullPointerException if the reference is null.',
        bn: 'নাল থাকলে এটি অ্যাপ ক্র্যাশ করায়, তাই প্রোডাকশনে এটি পরিহার্য।'
      },
      explanation: {
        en: 'The !! operator forfeits Kotlin\'s compile-time safety nets. Idiomatic Kotlin prefers safe calls (?.), Elvis defaults (?:), or requireNotNull() with informative error messages.',
        bn: 'নিরাপদ কোড লিখতে সর্বদা সেফ কল বা এলভিস অপারেটর ব্যবহার করা উচিত।'
      }
    }
  ],
  quiz: {
    id: 'quiz-nulls-and-the-safe',
    title: {
      en: 'Kotlin Null Safety Quiz',
      bn: 'Kotlin নাল সেফটি কুইজ'
    },
    questions: [
      {
        id: 'quiz-safe-let-scoping-idiom',
        kind: 'mcq',
        topic: 'safe-let-scoping-execution-idiom',
        question: {
          en: 'What is the standard idiom in Kotlin to execute a code block only when a nullable object is not null?',
          bn: 'কোনো নালেবল অবজেক্ট কেবল নাল না হলেই একটি কোড ব্লক চালানোর জন্য Kotlin-এর স্ট্যান্ডার্ড ইডিয়ম কোনটি?'
        },
        options: [
          {
            en: 'Pairing safe call with let ("nullableObject?.let { nonNull -> ... }")',
            bn: 'সেফ কলের সাথে let ফাংশন যুক্ত করা ("nullableObject?.let { nonNull -> ... }")'
          },
          {
            en: 'Wrapping the code in a while(true) infinite loop',
            bn: 'কোডটিকে একটি while(true) অসীম লুপের মধ্যে রাখা'
          },
          {
            en: 'Saving the object to an SQL database table',
            bn: 'অবজেক্টটিকে একটি এসকিউএল ডাটাবেজ টেবিলে সংরক্ষণ করা'
          },
          {
            en: 'Calling Thread.sleep(1000)',
            bn: 'Thread.sleep(1000) মেথড ডাকা'
          }
        ],
        answer: 0,
        hint: {
          en: '?.let executes the lambda only when the receiver is non-null.',
          bn: 'মান থাকলে ব্লকে ঢুকে কাজ সম্পন্ন করে, নাল থাকলে কিছুই করে না।'
        },
        explanation: {
          en: 'Using ?.let scopes the non-null value neatly into the lambda as "it", avoiding repetitive null checks across multiple nested statements.',
          bn: 'এর মাধ্যমে কোড অত্যন্ত পরিচ্ছন্ন ও সংক্ষিপ্ত রাখা সম্ভব হয়।'
        }
      },
      {
        id: 'quiz-platform-types-java-interop',
        kind: 'mcq',
        topic: 'java-interoperability-platform-types',
        question: {
          en: 'How does Kotlin treat unannotated reference types originating from Java code (Platform Types, denoted as "String!")?',
          bn: 'জাভা কোড থেকে আসা অ্যানোটেশনহীন টাইপগুলোকে Kotlin কীভাবে দেখে (প্ল্যাটফর্ম টাইপস, যা "String!" দিয়ে চিহ্নিত)?'
        },
        options: [
          {
            en: 'It relaxes nullability checks, allowing the developer to treat them as either nullable or non-nullable, placing responsibility on the developer to prevent NPEs',
            bn: 'এটি নাল সেফটি শিথিল করে এবং ডেভেলপারকে এগুলোকে নালেবল বা নন-নালেবল হিসেবে ব্যবহারের সুযোগ দেয়, ফলে NPE এড়ানোর দায়িত্ব ডেভেলপারের ওপর বর্তায়'
          },
          {
            en: 'It immediately throws an error at compile time refusing to load Java classes',
            bn: 'জাভা ক্লাস লোড করতে অস্বীকৃতি জানিয়ে কম্পাইলার বিল্ড আটকে দেয়'
          },
          {
            en: 'It converts all Java methods into C++ functions',
            bn: 'এটি সমস্ত জাভা মেথডকে C++ ফাংশনে রূপান্তর করে'
          },
          {
            en: 'Platform types are converted into 64-bit integers',
            bn: 'প্ল্যাটফর্ম টাইপগুলোকে ৬৪-বিট পূর্ণসংখ্যায় রূপান্তর করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Platform types (T!) originate from Java where nullability is ambiguous.',
          bn: 'জাভায় নাল সেফটি না থাকায় Kotlin ডেভেলপারকেই সিদ্ধান্ত নিতে দেয়।'
        },
        explanation: {
          en: 'Because standard Java lacks nullability guarantees, Kotlin marks Java types with an exclamation mark (String!). Developers can annotate Java with @Nullable or @NonNull.',
          bn: 'জাভা কোডে @NonNull বা @Nullable লিখে দিলে Kotlin পূর্ণ নিরাপত্তা দিতে পারে।'
        }
      },
      {
        id: 'quiz-safe-cast-as-question-mark',
        kind: 'mcq',
        topic: 'safe-cast-operator-as-nullable',
        question: {
          en: 'What occurs when using the safe cast operator ("as?") if the object cannot be cast to the target type (e.g. "val num = obj as? Int")?',
          bn: 'সেফ কাস্ট অপারেটর ("as?") ব্যবহারের সময় অবজেক্টটি টার্গেট টাইপে কাস্ট হতে না পারলে কী ঘটে (যেমন "val num = obj as? Int")?'
        },
        options: [
          {
            en: 'It returns null instead of throwing a ClassCastException',
            bn: 'ClassCastException না ছুড়ে এটি শান্তভাবে নাল রিটার্ন করে'
          },
          {
            en: 'It restarts the Android operating system',
            bn: 'এটি অ্যান্ড্রয়েড অপারেটিং সিস্টেম রিস্টার্ট করে'
          },
          {
            en: 'It deletes the variable from memory',
            bn: 'এটি মেমোরি থেকে ভ্যারিয়েবলটি মুছে ফেলে'
          },
          {
            en: 'The as? operator was deprecated in Kotlin 1.6',
            bn: 'Kotlin ১.৬ সংস্করণে as? অপারেটর বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'as? returns null on cast failure.',
          bn: 'কাস্ট ব্যর্থ হলেও কোনো ক্র্যাশ হয় না, কেবল নাল পাওয়া যায়।'
        },
        explanation: {
          en: 'Safe casting with "as?" prevents crashes from invalid type casts, combining smoothly with the Elvis operator (obj as? Int ?: 0).',
          bn: 'ফলে অ্যাপ ক্র্যাশ না করে সহজেই বিকল্প ব্যবস্থা নেওয়া যায়।'
        }
      },
      {
        id: 'quiz-smart-cast-limitations-var',
        kind: 'mcq',
        topic: 'smart-cast-restrictions-mutable-var-properties',
        question: {
          en: 'Why does the Kotlin compiler frequently refuse to smart-cast a public mutable property ("var") after a null check?',
          bn: 'একটি পাবলিক পরিবর্তনশীল প্রোপার্টি ("var") নাল চেক করার পরেও কেন Kotlin কম্পাইলার প্রায়শই স্মার্ট কাস্ট করতে অস্বীকৃতি জানায়?'
        },
        options: [
          {
            en: 'Because between the null check and the usage, another concurrent thread or custom getter could mutate the variable back into null',
            bn: 'কারণ নাল চেক করার পর এবং ব্যবহারের ঠিক মাঝের সময়ে অন্য কোনো থ্রেড বা কাস্টম গেটার ভ্যারিয়েবলটিকে পুনরায় নাল বানিয়ে দিতে পারে'
          },
          {
            en: 'Because mutable variables consume 10 times more CPU registers',
            bn: 'কারণ পরিবর্তনশীল ভ্যারিয়েবল ১০ গুণ বেশি সিপিইউ রেজিস্টার ব্যবহার করে'
          },
          {
            en: 'Because public variables are banned in safe Kotlin',
            bn: 'কারণ নিরাপদ Kotlin-এ পাবলিক ভ্যারিয়েবল ব্যবহার নিষিদ্ধ'
          },
          {
            en: 'Smart cast only works for private functions',
            bn: 'স্মার্ট কাস্ট কেবল প্রাইভেট ফাংশনে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A mutable var can change between check and usage; val cannot.',
          bn: 'var যেকোনো সময় অন্য থ্রেড থেকে বদলে যেতে পারে, তাই শতভাগ ভরসা করা যায় না।'
        },
        explanation: {
          en: 'Smart casts require a guarantee that the value cannot mutate. For mutable properties, developers capture the property in a local val before checking.',
          bn: 'তাই নিরাপদ উপায়ে স্মার্ট কাস্ট পেতে var-কে লোকাল val-এ রেখে চেক করা উচিত।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'vals-and-the-data',
    title: {
      en: 'Immutability (val/var) & Data Classes',
      bn: 'ইমিউটেবিলিটি (val/var) এবং ডেটা ক্লাস'
    }
  }
};
