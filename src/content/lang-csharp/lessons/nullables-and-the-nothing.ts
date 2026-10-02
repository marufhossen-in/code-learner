import type { Lesson } from '../../../lib/types';

export const NullablesAndTheNothingLesson: Lesson = {
  slug: 'nullables-and-the-nothing',
  tech: 'lang-csharp',
  title: {
    en: 'Nullable Reference Types & Compile-Time Null Safety',
    bn: 'নালেবল রেফারেন্স টাইপস এবং কম্পাইল-টাইম নাল সুরক্ষা'
  },
  summary: {
    en: 'Eliminate NullReferenceException crashes with Nullable Reference Types (NRT) in modern C#. Understand static flow analysis, differentiate non-nullable (string) from nullable (string?), use null-conditional (?.) and null-coalescing (??, ??=) operators, and apply the null-forgiving operator (!) responsibly.',
    bn: 'আধুনিক C#-এ Nullable Reference Types (NRT) দিয়ে NullReferenceException ক্র্যাশ নির্মূল করুন। স্ট্যাটিক ফ্লো বিশ্লেষণ, নন-নালেবল (string) ও নালেবল (string?) এর পার্থক্য, নাল-কন্ডিশনাল (?.) ও নাল-কোয়ালেসিং (??, ??=) অপারেটর এবং নাল-ফরগিভিং অপারেটরের (!) দায়িত্বশীল ব্যবহার।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'nrt-and-static-flow-analysis-heading',
      text: {
        en: 'Nullable Reference Types and Static Flow Analysis',
        bn: 'নালেবল রেফারেন্স টাইপস এবং স্ট্যাটিক ফ্লো বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For decades, null pointer dereferencing has been the single most common cause of production application crashes. Modern C# (the type-safe programming language) eliminates this hazard through Nullable Reference Types (NRT). When nullability is enabled, standard reference types (like "string") are treated as non-nullable by default. Attempting to assign null to a non-nullable variable produces a compiler warning. To indicate that a reference may hold null, developers append a question mark ("string?"). The Roslyn compiler continuously tracks the state of variables across code branches using static flow analysis, flagging potential null dereferences before code ever compiles.',
        bn: 'কয়েক দশক ধরে সফটওয়্যার জগতে সবচেয়ে বেশি ক্র্যাশের কারণ ছিল নাল পয়েন্টার এক্সেপশন। আধুনিক C# (টাইপ-সেফ প্রোগ্রামিং ভাষা) Nullable Reference Types (NRT) ফিচারের মাধ্যমে এই মারাত্মক ঝুঁকি দূর করেছে। নালেবিলিটি সক্রিয় থাকলে সাধারণ রেফারেন্স টাইপগুলোকে (যেমন "string") ডিফল্টভাবে নন-নালেবল বিবেচনা করা হয়। কোনো নন-নালেবল ভেরিয়েবলে নাল অ্যাসাইন করার চেষ্টা করলে কম্পাইলার সাথে সাথে ওয়ার্নিং দেয়। কোনো ভেরিয়েবলে নাল থাকার সম্ভাবনা বোঝাতে একটি প্রশ্নবোধক চিহ্ন যোগ করতে হয় ("string?")। Roslyn কম্পাইলার স্ট্যাটিক ফ্লো বিশ্লেষণের মাধ্যমে কোডের প্রতিটি শাখার ভেরিয়েবল পর্যবেক্ষণ করে এবং কোড কম্পাইল করার আগেই সম্ভাব্য নাল ভুলের সংকেত দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 4-step state transition of Roslyn static flow analysis: Narrowing variable state from MaybeNull to NotNull via conditional guard checks.',
        bn: 'চিত্র ১: Roslyn স্ট্যাটিক ফ্লো বিশ্লেষণের ৪-ধাপের স্টেট রূপান্তর: শর্ত পরীক্ষার মাধ্যমে MaybeNull থেকে NotNull স্টেটে পৌঁছানো।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">ROSLYN NULLABLE FLOW ANALYSIS &amp; TYPE NARROWING</text>

  <!-- Step 1: Declaration -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Declaration</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">string? email = ...;</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">State: MaybeNull</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Nullable Type</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Explicit Intent</text>
  </g>

  <!-- Step 2: Unsafe Dereference -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#b91c1c" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Unsafe Access</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="15" y="68" fill="#f87171" font-size="9" font-family="monospace">var len = email.Length;</text>
    <text x="15" y="85" fill="#f87171" font-size="8" font-family="monospace">Warning CS8602 Triggered</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="15" y="130" fill="#f87171" font-size="8" font-family="monospace">Dereference of Null</text>

    <text x="15" y="215" fill="#f87171" font-size="10" font-family="sans-serif">Compile-Time Catch</text>
  </g>

  <!-- Step 3: Guard Check -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Null Guard</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">if (email is not null)</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Branch State Update</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">State: NotNull</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Type Narrowing</text>
  </g>

  <!-- Step 4: Safe Dereference -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#059669" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Safe Access</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">print(email.Length);</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Zero Compiler Warnings</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Verified Memory</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Zero Crash Risk</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'null-operators-and-forgiving-operator-heading',
      text: {
        en: 'Null Operators and the Null-Forgiving Operator (!)',
        bn: 'নাল অপারেটর এবং নাল-ফরগিভিং অপারেটর (!)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To make handling potential nulls expressive, C# offers a comprehensive family of null operators. The null-conditional operator ("?.") short-circuits execution if the target instance is null, returning null instead of throwing an exception. The null-coalescing operator ("??") supplies a default fallback value, while null-coalescing assignment ("??=") assigns a value only if the variable is currently null. Finally, the null-forgiving operator ("!") instructs the Roslyn compiler to suppress CS8602 warnings when developers possess knowledge that static analysis cannot deduce. However, "!" does not inject runtime protection; if a null-forgiven variable evaluates to null at runtime, a NullReferenceException still occurs.',
        bn: 'নাল ভ্যালু সহজে ব্যবস্থাপনার জন্য C#-এ রয়েছে একাধিক আধুনিক অপারেটর। নাল-কন্ডিশনাল অপারেটর ("?.") অবজেক্ট নাল থাকলে এক্সেপশন না ছুড়ে এক্সিকিউশন থামিয়ে নিজে থেকেই নাল ফেরত দেয়। নাল-কোয়ালেসিং অপারেটর ("??") নালের ক্ষেত্রে ডিফল্ট বিকল্প মান বসায়, আর নাল-কোয়ালেসিং অ্যাসাইনমেন্ট ("??=") কেবল তখনই মান বসায় যদি ভেরিয়েবলটি আগে থেকেই নাল থাকে। সবশেষে নাল-ফরগিভিং অপারেটর ("!") ব্যবহার করে ডেভেলপাররা কম্পাইলারের CS8602 ওয়ার্নিং বন্ধ করতে পারেন যখন তারা নিশ্চিত থাকেন যে মানটি নাল হবে না। তবে "!" রানটাইমে কোনো বাড়তি পাহারা দেয় না; রানটাইমে মানটি ভুলবশত নাল হলে যথারীতি NullReferenceException ক্র্যাশ ঘটবে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Roslyn compiler static flow analysis: Variable nullability states (MaybeNull vs NotNull) and diagnostic CS8602 warning suppression.',
        bn: 'Roslyn কম্পাইলারের স্ট্যাটিক ফ্লো বিশ্লেষণ, নাল স্টেট ট্র্যাকিং এবং CS8602 ওয়ার্নিং সাপ্রেশনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Roslyn Nullable Flow Analysis & Diagnostic Warnings

export type FlowState = 'NotNull' | 'MaybeNull';

export interface CustomerRecord {
  id: number;
  email: string | null;
  score: number;
}

export class FlowAnalysisSimulator {
  private variables: Map<string, FlowState> = new Map();
  private warnings: string[] = [];

  public declareNullable(varName: string): void {
    this.variables.set(varName, 'MaybeNull');
  }

  // Simulating property dereferencing (e.g. variable.Length)
  public accessProperty(varName: string, propertyName: string): void {
    const state = this.variables.get(varName) ?? 'MaybeNull';
    if (state === 'MaybeNull') {
      const msg = 'Warning CS8602: Dereference of possibly null reference ' + varName;
      this.warnings.push(msg);
      console.log('[Compiler Warning]', msg);
    } else {
      console.log('[Compiler Verified] Safe access of ' + varName + '.' + propertyName);
    }
  }

  // Simulating "if (varName is not null)" type narrowing
  public narrowNotNull(varName: string): void {
    this.variables.set(varName, 'NotNull');
  }

  public getWarningCount(): number {
    return this.warnings.length;
  }
}

// Execution demonstration with real data
const customer: CustomerRecord = { id: 101, email: null, score: 95 };
const compiler = new FlowAnalysisSimulator();

// Step 1: Declare nullable customer email
compiler.declareNullable('customer.email');

// Step 2: Premature unsafe dereference triggers warning CS8602
compiler.accessProperty('customer.email', 'Length');
console.log('Unchecked Warning Count:', compiler.getWarningCount()); // 1

// Step 3: Guard condition proves email is not null
if (customer.email !== null) {
  compiler.narrowNotNull('customer.email');
}

// Step 4: After explicit assignment
customer.email = 'alice@example.com';
compiler.narrowNotNull('customer.email');
compiler.accessProperty('customer.email', 'Length');
console.log('Final Warning Count Remaining:', compiler.getWarningCount()); // 1`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Nullable Reference Type',
          def: {
            en: 'C# 8 type system feature where reference types are non-nullable by default unless annotated with a question mark (?).',
            bn: 'C# ৮-এর টাইপ ফিচার যেখানে প্রশ্নবোধক (?) ছাড়া সব রেফারেন্স ডিফল্টভাবে নন-নালেবল থাকে।'
          }
        },
        {
          term: 'Static Flow Analysis',
          def: {
            en: 'Roslyn compiler mechanism tracing code execution paths to track whether a variable holds null at any specific line.',
            bn: 'কম্পাইলার মেকানিজম যা কোডের পথ বিশ্লেষণ করে প্রতিটি লাইনে নাল থাকার সম্ভাবনা যাচাই করে।'
          }
        },
        {
          term: 'Null-Coalescing Operator',
          def: {
            en: 'Binary operator (??) returning the left operand if not null; otherwise returning the evaluated right operand.',
            bn: 'অপারেটর (??) যা বামের মান নাল না হলে সেটি ফেরত দেয়, আর নাল হলে ডানের বিকল্প মান বসায়।'
          }
        },
        {
          term: 'Null-Forgiving Operator',
          def: {
            en: 'Postfix operator (!) telling the compiler to suppress CS8602 warnings for a potentially null reference.',
            bn: 'সাফিক্স অপারেটর (!) যা কম্পাইলারকে নাল ওয়ার্নিং দেখানো থেকে বিরত থাকতে নির্দেশ দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nrt-non-nullable-default-behavior-ex1',
      kind: 'mcq',
      topic: 'nrt-non-nullable-default-warnings',
      question: {
        en: 'In a C# project where Nullable Reference Types are enabled, what occurs if you write "string name = null;"?',
        bn: 'যে C# প্রজেক্টে Nullable Reference Types সক্রিয় রয়েছে, সেখানে "string name = null;" লিখলে কী ঘটে?'
      },
      options: [
        {
          en: 'The compiler emits a warning (CS8600) indicating that null cannot be assigned to a non-nullable reference type',
          bn: 'কম্পাইলার একটি ওয়ার্নিং (CS8600) প্রদর্শন করে জানায় যে নন-নালেবল রেফারেন্স টাইপে নাল অ্যাসাইন করা যাবে না'
        },
        {
          en: 'The operating system restarts immediately',
          bn: 'অপারেটিং সিস্টেম সাথে সাথে রিস্টার্ট করে'
        },
        {
          en: 'The variable name is automatically changed to "empty"',
          bn: 'ভেরিয়েবলের নাম নিজে থেকেই "empty" হয়ে যায়'
        },
        {
          en: 'The code is converted into a Python script',
          bn: 'কোডটি একটি পাইথন স্ক্রিপ্টে রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Without a question mark, reference types are assumed non-null by the compiler.',
        bn: 'প্রশ্নবোধক চিহ্ন ছাড়া ভেরিয়েবলে নাল বসালে কম্পাইলার ওয়ার্নিং দিয়ে সতর্ক করে।'
      },
      explanation: {
        en: 'Under "#nullable enable", "string" is strictly non-nullable. To permit null, developers must declare the variable as "string?".',
        bn: 'নাল অনুমোদনের স্পষ্ট ইচ্ছা বোঝাতে টাইপের পর অবশ্যই প্রশ্নবোধক চিহ্ন দিতে হয়।'
      }
    },
    {
      id: 'null-conditional-short-circuit-ex2',
      kind: 'mcq',
      topic: 'null-conditional-short-circuiting-behavior',
      question: {
        en: 'What is the evaluated result of "user?.Address?.City" when the "user" object reference is null in C#?',
        bn: 'C#-এ "user" অবজেক্ট রেফারেন্সটি নাল হলে "user?.Address?.City"-এর ফলাফল কী দাঁড়ায়?'
      },
      options: [
        {
          en: 'The expression short-circuits at the first "?." operator and evaluates cleanly to null without throwing a NullReferenceException',
          bn: 'এক্সপ্রেশনটি প্রথম "?." অপারেটরেই থেমে যায় এবং কোনো NullReferenceException ছাড়া পরিচ্ছন্নভাবে নাল ফেরত দেয়'
        },
        {
          en: 'It crashes the program with a fatal CLR abort exception',
          bn: 'এটি একটি মারাত্মক এক্সেপশন ছুড়ে পুরো প্রোগ্রাম ক্র্যাশ করায়'
        },
        {
          en: 'It returns the string "UNDEFINED_CITY"',
          bn: 'এটি "UNDEFINED_CITY" টেক্সট ফেরত পাঠায়'
        },
        {
          en: 'It creates a new user in the SQL database',
          bn: 'এটি এসকিউএল ডেটাবেসে একটি নতুন ব্যবহারকারী তৈরি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The null-conditional operator (?.) short-circuits when encountering null.',
        bn: 'নাল-কন্ডিশনাল অপারেটর নাল পেলে সাথে সাথে এক্সিকিউশন থামিয়ে নিরাপদভাবে নাল দেয়।'
      },
      explanation: {
        en: 'The "?." operator checks for null before dereferencing downstream properties. If null, evaluation stops immediately, safely returning null.',
        bn: 'ফলে নেস্টেড অবজেক্টের গভীরে যাওয়ার আগে আলাদা করে ইফ চেক লেখার প্রয়োজন হয় না।'
      }
    },
    {
      id: 'null-forgiving-operator-danger-ex3',
      kind: 'mcq',
      topic: 'null-forgiving-operator-runtime-danger',
      question: {
        en: 'Why is overusing the null-forgiving operator ("!") considered a dangerous bad practice in modern C# codebases?',
        bn: 'আধুনিক C# কোডবেসে নাল-ফরগিভিং অপারেটরের ("!") অতিরিক্ত ব্যবহার কেন মারাত্মক খারাপ অভ্যাস হিসেবে গণ্য হয়?'
      },
      options: [
        {
          en: 'It merely suppresses compiler warnings without adding any runtime null verification; if the variable is null at runtime, a NullReferenceException crash still occurs',
          bn: 'এটি রানটাইমে কোনো পরীক্ষা না চালিয়ে কেবল কম্পাইলারের সতর্কবার্তা চেপে রাখে; রানটাইমে মানটি নাল হলে যথারীতি NullReferenceException ক্র্যাশ ঘটে'
        },
        {
          en: 'It doubles the size of compiled binary files on disk',
          bn: 'এটি ডিস্কে থাকা কম্পাইল্ড বাইনারি ফাইলের আকার দ্বিগুণ করে ফেলে'
        },
        {
          en: 'The "!" operator can only be typed on Apple keyboards',
          bn: '"!" অপারেটর কেবল অ্যাপল কিবোর্ডে টাইপ করা সম্ভব'
        },
        {
          en: 'It deletes unit test projects automatically',
          bn: 'এটি ইউনিট টেস্ট প্রজেক্টগুলো নিজে থেকেই মুছে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: '"!" only silences the compiler—it does not protect against runtime null crashes.',
        bn: '"!" শুধু কম্পাইলারকে চোখ বন্ধ রাখতে বলে, রানটাইমের আসল বিপদে কোনো সুরক্ষা দেয় না।'
      },
      explanation: {
        en: 'The null-forgiving operator overrides static analysis. Masking real null hazards with "!" undermines the safety guarantees provided by the type system.',
        bn: 'ওয়ার্নিং দূর করতে "!" ব্যবহার না করে যথাযথ নাল চেক বা বিকল্প মান দেওয়া উচিত।'
      }
    },
    {
      id: 'null-coalescing-assignment-ex4',
      kind: 'mcq',
      topic: 'null-coalescing-assignment-operator',
      question: {
        en: 'What does the null-coalescing assignment operator ("??=") do in the statement "cache ??= new MemoryCache();"?',
        bn: '"cache ??= new MemoryCache();" স্টেটমেন্টে নাল-কোয়ালেসিং অ্যাসাইনমেন্ট অপারেটর ("??=") কী কাজ করে?'
      },
      options: [
        {
          en: 'It assigns the new MemoryCache instance to "cache" only if "cache" evaluates to null; if "cache" already has an instance, no assignment occurs',
          bn: 'এটি কেবল তখনই "cache"-এ নতুন MemoryCache অবজেক্ট অ্যাসাইন করে যদি "cache" নাল থাকে; আগে থেকে মান থাকলে কোনো পরিবর্তন করে না'
        },
        {
          en: 'It clears and deletes the MemoryCache object from memory',
          bn: 'এটি মেমোরি থেকে MemoryCache অবজেক্টটি মুছে ফেলে'
        },
        {
          en: 'It converts the cache into an asynchronous worker thread',
          bn: 'এটি ক্যাশটিকে একটি অ্যাসিঙ্ক্রোনাস ওয়ার্কার থ্রেডে রূপান্তর করে'
        },
        {
          en: 'It throws an InvalidCastException on line 1',
          bn: 'এটি প্রথম লাইনে একটি InvalidCastException ছুড়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: '??= assigns only when the left-hand variable is null.',
        bn: '??= কেবল নাল থাকলেই নতুন মান বসায়, অন্যথায় পূর্বের মান রেখে দেয়।'
      },
      explanation: {
        en: 'The "??=" operator provides a clean shorthand for lazy instantiation ("if (cache == null) cache = new MemoryCache();").',
        bn: 'লেজি ইনিশিয়ালাইজেশনের জন্য বারবার ইফ চেক না লিখে সহজে কোড করার এটি আধুনিক রূপ।'
      }
    }
  ],
  quiz: {
    id: 'quiz-nullables-and-the-nothing',
    title: {
      en: 'Nullable Reference Types & Null Safety Quiz',
      bn: 'নালেবল রেফারেন্স টাইপস এবং নাল সুরক্ষা কুইজ'
    },
    questions: [
      {
        id: 'quiz-notnullwhen-attribute-analysis',
        kind: 'mcq',
        topic: 'notnullwhen-attribute-static-analysis',
        question: {
          en: 'What does the "[NotNullWhen(true)]" attribute communicate to the C# compiler on a "bool TryGet(out string? value)" method?',
          bn: 'একটি "bool TryGet(out string? value)" মেথডে "[NotNullWhen(true)]" অ্যাট্রিবিউট C# কম্পাইলারকে কী বার্তা দেয়?'
        },
        options: [
          {
            en: 'It informs static flow analysis that when the method returns true, the "out" parameter "value" is guaranteed to be non-null, suppressing downstream null warnings',
            bn: 'এটি স্ট্যাটিক ফ্লো অ্যানালাইসিসকে জানিয়ে দেয় যে মেথডটি true ফেরত দিলে "out" প্যারামিটার "value" অবশ্যই নাল হবে না, ফলে পরবর্তী নাল ওয়ার্নিং দূর হয়'
          },
          {
            en: 'It forces the method to run only on true boolean inputs',
            bn: 'এটি মেথডটিকে কেবল সত্য বুলিয়ান ইনপুটে চলতে বাধ্য করে'
          },
          {
            en: 'It converts all null strings into numerical zeros',
            bn: 'এটি সমস্ত নাল স্ট্রিংকে সংখ্যাসূচক শূন্যে রূপান্তর করে'
          },
          {
            en: 'NotNullWhen was deprecated in modern C#',
            bn: 'আধুনিক C# এ NotNullWhen বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'NotNullWhen informs the compiler of null state dependent on boolean returns.',
          bn: 'মেথড সফল হয়ে true দিলে আউটপুট যে নিরাপদ, তা কম্পাইলারকে স্পষ্টভাবে জানাতে এটি লাগে।'
        },
        explanation: {
          en: 'Nullability attributes allow developers to teach Roslyn about contracts where nullability is contingent on return values (like standard TryPattern methods).',
          bn: 'এর ফলে কলার কোডে "if (TryGet(out var val))" লিখলে val-কে আর নাল চেক করতে হয় না।'
        }
      },
      {
        id: 'quiz-treat-warnings-as-errors-nullability',
        kind: 'mcq',
        topic: 'nullable-warnings-as-errors-csproj',
        question: {
          en: 'Why is configuring "<WarningsAsErrors>Nullable</WarningsAsErrors>" in .csproj considered a best practice for mission-critical enterprise systems?',
          bn: 'গুরুত্বপূর্ণ এন্টারপ্রাইজ সিস্টেমে .csproj ফাইলে "<WarningsAsErrors>Nullable</WarningsAsErrors>" কনফিগার করা কেন সর্বোত্তম প্র্যাকটিস?'
        },
        options: [
          {
            en: 'It elevates all nullable static analysis warnings into hard compilation build errors, preventing unhandled potential null dereferences from ever reaching production',
            bn: 'এটি সমস্ত নালেবল ওয়ার্নিংকে সরাসরি কম্পাইলেশন বিল্ড এররে রূপান্তরিত করে, যার ফলে কোনো সম্ভাব্য নাল ক্র্যাশ প্রোডাকশন সার্ভারে যাওয়া পুরোপুরি বন্ধ হয়ে যায়'
          },
          {
            en: 'It accelerates internet download speeds for NuGet packages',
            bn: 'এটি নুগেট প্যাকেজের ডাউনলোড গতি বাড়িয়ে দেয়'
          },
          {
            en: 'It disables all debugging features in Visual Studio',
            bn: 'এটি ভিজ্যুয়াল স্টুডিওর সমস্ত ডিবাগিং সুবিধা বন্ধ করে দেয়'
          },
          {
            en: 'WarningsAsErrors only works on 32-bit processors',
            bn: 'WarningsAsErrors কেবল ৩২-বিট প্রসেসরে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Elevating nullable warnings to errors guarantees zero unhandled nulls build.',
          bn: 'ওয়ার্নিংকে এরর বানালে কোডে নাল ঝুঁকি রেখে কোনো বিল্ড সম্পন্ন হতে পারে না।'
        },
        explanation: {
          en: 'Enforcing nullable checks at build time eliminates NullReferenceExceptions proactively, ensuring the entire codebase strictly models and handles potential missing data.',
          bn: 'প্রোডাকশনে যাওয়ার আগেই কোড ১০০% নাল-নিরাপদ রাখার এটিই সবচেয়ে কার্যকর ব্যবস্থা।'
        }
      },
      {
        id: 'quiz-membernotnull-constructor-helper',
        kind: 'mcq',
        topic: 'membernotnull-attribute-constructor-delegation',
        question: {
          en: 'When a constructor delegates non-null property initialization to a private helper method (e.g. "Init()"), why is "[MemberNotNull(nameof(PropertyName))]" required?',
          bn: 'যখন কোনো কনস্ট্রাক্টর নন-নালেবল প্রপার্টির মান বসানোর কাজ একটি প্রাইভেট হেল্পার মেথডে (যেমন "Init()") পাঠায়, তখন "[MemberNotNull(nameof(PropertyName))]" কেন প্রয়োজন হয়?'
        },
        options: [
          {
            en: 'The compiler does not analyze arbitrary helper methods for constructor assignment; MemberNotNull explicitly guarantees that the helper initializes the designated member before returning',
            bn: 'কম্পাইলার সাধারণ হেল্পার মেথড বিশ্লেষণ করে কনস্ট্রাক্টর অ্যাসাইনমেন্ট নিশ্চিত করতে পারে না; MemberNotNull স্পষ্টভাবে নিশ্চয়তা দেয় যে হেল্পারটি সেই মেম্বারকে মান দিয়েছে'
          },
          {
            en: 'To delete the constructor from the assembly file',
            bn: 'অ্যাসেম্বলি ফাইল থেকে কনস্ট্রাক্টরটি মুছে ফেলার জন্য'
          },
          {
            en: 'To make the property visible to external web browsers',
            bn: 'প্রপার্টিটিকে বাইরের ওয়েব ব্রাউজারে প্রদর্শনযোগ্য করতে'
          },
          {
            en: 'MemberNotNull only operates on integer variables',
            bn: 'MemberNotNull কেবল পূর্ণসংখ্যার ভেরিয়েবলে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'MemberNotNull tells the compiler a method guarantees property initialization.',
          bn: 'হেল্পার মেথডটি যে প্রপার্টিতে মান বসিয়েছে তা কম্পাইলারকে নিশ্চিত করতে এটি ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'Without MemberNotNull, the compiler emits CS8618 claiming non-nullable properties are uninitialized upon exiting the constructor. The attribute silences the false positive safely.',
          bn: 'ভুল ওয়ার্নিং এড়িয়ে কোডের পরিচ্ছন্নতা বজায় রাখতে এই অ্যাট্রিবিউট সাহায্য করে।'
        }
      },
      {
        id: 'quiz-csharp-pattern-matching-is-not-null',
        kind: 'mcq',
        topic: 'pattern-matching-is-not-null-vs-operator-equals',
        question: {
          en: 'Why do C# guidelines recommend using "if (obj is not null)" instead of "if (obj != null)" for robust null verification?',
          bn: 'শক্তিশালী নাল পরীক্ষার জন্য C# নির্দেশিকা কেন "if (obj != null)" এর বদলে "if (obj is not null)" ব্যবহারের পরামর্শ দেয়?'
        },
        options: [
          {
            en: '"is not null" is a compile-time pattern matching construct that CANNOT be bypassed by custom overloaded "!=" operators, guaranteeing authentic null verification',
            bn: '"is not null" হলো একটি প্যাটার্ন ম্যাচিং কাঠামো যা কোনো কাস্টম ওভারলোডেড "!=" অপারেটর দ্বারা প্রভাবিত হয় না এবং ১০০% খাঁটি নাল যাচাই নিশ্চিত করে'
          },
          {
            en: '"is not null" deletes the variable from RAM',
            bn: '"is not null" ভেরিয়েবলটিকে মেমোরি থেকে মুছে দেয়'
          },
          {
            en: '"!= null" is completely banned by modern C# compilers',
            bn: 'আধুনিক C# কম্পাইলার "!= null" ব্যবহার পুরোপুরি নিষিদ্ধ করেছে'
          },
          {
            en: 'Pattern matching only works on text strings',
            bn: 'প্যাটার্ন ম্যাচিং কেবল টেক্সট স্ট্রিংয়ে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pattern matching cannot be hijacked by overloaded equality operators.',
          bn: 'কোনো ক্লাস যদি "!=" অপারেটর ওভারলোড করে ভুল লজিক লেখে, প্যাটার্ন ম্যাচিং তাকে অগ্রাহ্য করে খাঁটি সত্য যাচাই করে।'
        },
        explanation: {
          en: 'Custom classes can overload the "!=" operator with buggy logic. Pattern matching syntax "is not null" tests the actual underlying reference safely without calling operator methods.',
          bn: 'যেকোনো অবজেক্টের আসল মেমোরি রেফারেন্স নিখুঁতভাবে যাচাই করার এটিই সবচেয়ে নিরাপদ নিয়ম।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'delegates-and-the-event',
    title: {
      en: 'Delegates, Lambdas & Event Architecture',
      bn: 'ডেলিগেটস, ল্যাম্বডা এবং ইভেন্ট আর্কিটেকচার'
    }
  }
};
