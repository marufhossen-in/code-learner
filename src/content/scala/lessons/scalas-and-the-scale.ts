import type { Lesson } from '../../../lib/types';

export const ScalasAndTheScaleLesson: Lesson = {
  slug: 'scalas-and-the-scale',
  tech: 'scala',
  title: {
    en: 'Scala Architecture & Ecosystem: JVM Execution, Expression Orientation & Scala 3',
    bn: 'স্কালা আর্কিটেকচার ও ইকোসিস্টেম: JVM এক্সিকিউশন, এক্সপ্রেশন ওরিয়েন্টেশন ও স্কালা ৩'
  },
  summary: {
    en: 'A beginner introduction to programming in Scala: JVM architecture, compilation to bytecode, unified type hierarchy (Any, AnyVal, AnyRef), expression-oriented syntax, and Scala 3 features.',
    bn: 'স্কালা প্রোগ্রামিংয়ের প্রাথমিক ধারণা: JVM আর্কিটেকচার, বাইটকোডে রূপান্তর, ইউনিফায়েড টাইপ হায়ারার্কি (Any, AnyVal, AnyRef), এক্সপ্রেশন-ভিত্তিক সিনট্যাক্স এবং স্কালা ৩ এর সুবিধাসমূহ।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what-is-scala',
      text: {
        en: '1. What is Scala? The Scalable Language on the JVM',
        bn: '১. স্কালা কী? জেভিএমের ওপর স্কেলেবল ভাষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you begin learning Scala, you enter an elegant intersection of 2 major programming paradigms: object-oriented programming (OOP) and functional programming (FP). Designed by Martin Odersky at EPFL, Scala stands for "Scalable Language", engineered to scale seamlessly from small command-line scripts to planetary-scale distributed clusters.',
        bn: 'যখন আপনি স্কালা শেখা শুরু করেন, আপনি ২টি প্রধান প্রোগ্রামিং ধারার অপূর্ব সমন্বয় দেখতে পাবেন: অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং (OOP) এবং ফাংশনাল প্রোগ্রামিং (FP)। EPFL-এর মার্টিন ওডারস্কি কর্তৃক ডিজাইন করা স্কালা (Scala) অর্থ "Scalable Language", যা ছোট স্ক্রিপ্ট থেকে শুরু করে হাজারো নোডের ডিস্ট্রিবিউটেড ক্লাস্টারে স্বচ্ছন্দে চলার উপযোগী।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Scala compiles directly to Java Virtual Machine (JVM) bytecode (.class files). This provides 100% interoperability with the entire Java ecosystem: you can instantiate Java classes, invoke Spring or Kafka libraries, and execute on mature JVM garbage collectors with zero performance penalty.',
        bn: 'স্কালা সরাসরি জাভা ভার্চুয়াল মেশিন (JVM) বাইটকোডে (.class ফাইল) কম্পাইল হয়। এর ফলে সমগ্র জাভা ইকোসিস্টেমের সাথে ১০০% ইন্টারঅপারেবিলিটি নিশ্চিত হয়: আপনি জাভা ক্লাস ব্যবহার করতে পারেন, স্প্রিং বা কাফকা লাইব্রেরি ডাকতে পারেন এবং কোনো বাড়তি পারফরম্যান্স ক্ষতি ছাড়াই পরিপক্ব জেভিএম গার্বেজ কালেক্টরে রান করতে পারেন।'
      }
    },
    {
      type: 'visual',
      id: 'scala-type-hierarchy-diagram',
      title: {
        en: 'The Unified Scala Type Hierarchy: Any, AnyVal, AnyRef & Nothing',
        bn: 'স্কেলার ইউনিফায়েড টাইপ হায়ারার্কি: Any, AnyVal, AnyRef এবং Nothing'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">The Unified Scala Type Hierarchy</text>' +
          '<!-- Top: scala.Any -->' +
          '<g transform="translate(280, 50)">' +
            '<rect width="240" height="45" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>' +
            '<text x="120" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">scala.Any (Root of all types)</text>' +
          '</g>' +
          '<!-- Branches from Any -->' +
          '<path d="M 340 95 L 220 135" stroke="#64748b" stroke-width="2"/>' +
          '<path d="M 460 95 L 580 135" stroke="#64748b" stroke-width="2"/>' +
          '<!-- Left: scala.AnyVal -->' +
          '<g transform="translate(100, 135)">' +
            '<rect width="240" height="150" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="120" y="24" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">scala.AnyVal (Value Types)</text>' +
            '<rect x="15" y="38" width="210" height="100" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="60" fill="#cbd5e1" font-size="10">&#x2022; Double (64-bit float)</text>' +
            '<text x="25" y="80" fill="#cbd5e1" font-size="10">&#x2022; Float, Long, Int, Short, Byte</text>' +
            '<text x="25" y="100" fill="#cbd5e1" font-size="10">&#x2022; Boolean (true / false)</text>' +
            '<text x="25" y="120" fill="#cbd5e1" font-size="10">&#x2022; Char, Unit (equivalent to void)</text>' +
          '</g>' +
          '<!-- Right: scala.AnyRef -->' +
          '<g transform="translate(460, 135)">' +
            '<rect width="240" height="150" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="120" y="24" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">scala.AnyRef (java.lang.Object)</text>' +
            '<rect x="15" y="38" width="210" height="100" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="60" fill="#cbd5e1" font-size="10">&#x2022; java.lang.String</text>' +
            '<text x="25" y="80" fill="#cbd5e1" font-size="10">&#x2022; scala.List, Vector, Map, Set</text>' +
            '<text x="25" y="100" fill="#cbd5e1" font-size="10">&#x2022; User classes &amp; Case Classes</text>' +
            '<text x="25" y="120" fill="#fbbf24" font-size="10">&#x2022; scala.Null (subtype of AnyRef)</text>' +
          '</g>' +
          '<!-- Bottom convergence to Nothing -->' +
          '<path d="M 220 285 L 340 330" stroke="#64748b" stroke-width="2"/>' +
          '<path d="M 580 285 L 460 330" stroke="#64748b" stroke-width="2"/>' +
          '<!-- Bottom: scala.Nothing -->' +
          '<g transform="translate(280, 330)">' +
            '<rect width="240" height="65" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5"/>' +
            '<text x="120" y="25" fill="#f87171" font-size="12" font-weight="bold" text-anchor="middle">scala.Nothing (Bottom Type)</text>' +
            '<text x="120" y="45" fill="#94a3b8" font-size="9" text-anchor="middle">Subtype of EVERYTHING; has 0 values</text>' +
            '<text x="120" y="58" fill="#facc15" font-size="8" text-anchor="middle">Represents non-returning throws &amp; Nil</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'expression-oriented',
      text: {
        en: '2. Expression-Oriented Syntax: Everything Yields a Value',
        bn: '২. এক্সপ্রেশন-ভিত্তিক সিনট্যাক্স: প্রতিটি অংশ একটি মান প্রদান করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In languages like Java or C, control structures like if/else and try/catch are statements: they execute actions but do not yield values directly. In Scala, virtually every construct is an expression that yields a value.',
        bn: 'জাভা বা সি-এর মতো ভাষায় if/else কিংবা try/catch হলো স্টেটমেন্ট: এরা কোনো কাজ সম্পন্ন করে কিন্তু সরাসরি কোনো মান ফেরত দেয় না। কিন্তু স্কালাতে প্রায় প্রতিটি কাঠামোই একটি এক্সপ্রেশন যা মান প্রদান করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Value-yielding if/else: val status = if (score >= 50) "Pass" else "Fail". Replaces the ternary operator with clean syntax.',
          bn: '১. মান প্রদানকারী if/else: val status = if (score >= 50) "Pass" else "Fail"। এটি টার্নারি অপারেটরের বদলে পরিষ্কার সিনট্যাক্স দেয়।'
        },
        {
          en: '2. Block expressions: Curly brace blocks { ... } evaluate each statement in order and automatically return the result of the final line.',
          bn: '২. ব্লক এক্সপ্রেশন: কার্লি ব্রেস ব্লক { ... } প্রতিটি লাইন ধারাবাহিকভাবে রান করে স্বয়ংক্রিয়ভাবে শেষ লাইনের ফলাফল রিটার্ন করে।'
        },
        {
          en: '3. Explicit Unit for side-effects: Statements that do not produce meaningful values (like println) evaluate to Unit, written as ().',
          bn: '৩. সাইড-ইফেক্টের জন্য Unit: যেসব স্টেটমেন্ট কোনো কার্যকরী মান দেয় না (যেমন println) সেগুলো Unit রিটার্ন করে, যা () দিয়ে লেখা হয়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'scala-3-innovations',
      text: {
        en: '3. Scala 3 Compiler & Modern Innovations',
        bn: '৩. স্কালা ৩ কম্পাইলার এবং আধুনিক সুবিধাসমূহ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Scala 3 is built on the mathematically rigorous DOT (Dependent Object Types) calculus. It introduces optional-brace indentation, @main entry points, union types (A | B), intersection types (A & B), and replaces verbose implicits with clean given and using clauses.',
        bn: 'স্কালা ৩ গাণিতিকভাবে নিখুঁত DOT ক্যালকুলাসের ওপর ভিত্তি করে তৈরি। এটি অপশনাল-ব্রেস ইনডেন্টেশন, @main এন্ট্রি পয়েন্ট, ইউনিয়ন টাইপ (A | B), ইন্টারসেকশন টাইপ (A & B) নিয়ে এসেছে এবং জটিল ইমপ্লিসিটের বদলে সহজ given ও using ক্লজ যুক্ত করেছে।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. Scala Expression & Type System Engine in TypeScript',
        bn: '৪. TypeScript এ স্কালা এক্সপ্রেশন ও টাইপ সিস্টেম ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how Scala evaluates expression-oriented if/else blocks, resolves the unified AnyVal/AnyRef type hierarchy, and handles bottom type Nothing exceptions:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে স্কালা এক্সপ্রেশন-ভিত্তিক if/else ব্লক মূল্যায়ন করে, ইউনিফায়েড AnyVal/AnyRef টাইপ হায়ারার্কি সাজায় এবং বটম টাইপ Nothing এক্সেপশন পরিচালনা করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Scala unified type hierarchy, expression evaluation, and block return values.',
        bn: 'স্কালা ইউনিফায়েড টাইপ হায়ারার্কি, এক্সপ্রেশন মূল্যায়ন এবং ব্লকের রিটার্ন মানের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of Scala 3 Unified Type System and Expression Orientation

// 1. Unified Type Hierarchy Simulation
abstract class ScalaAny {
  abstract toString(): string;
}

// AnyVal: Value types
class ScalaAnyVal<T extends number | boolean | string> extends ScalaAny {
  constructor(public readonly value: T) {
    super();
  }
  toString(): string {
    return String(this.value);
  }
}

// AnyRef: Reference types
class ScalaAnyRef extends ScalaAny {
  constructor(public readonly className: string, public readonly payload: object) {
    super();
  }
  toString(): string {
    return this.className + '(' + JSON.stringify(this.payload) + ')';
  }
}

// 2. Expression Evaluation Engine
class ScalaExpressionEngine {
  // Scala if/else is an expression returning a value
  static evalIf<T>(condition: boolean, thenBranch: () => T, elseBranch: () => T): T {
    return condition ? thenBranch() : elseBranch();
  }

  // Scala block expression { line1; line2; finalExpr } returns finalExpr
  static evalBlock<T>(statements: (() => void)[], finalExpression: () => T): T {
    for (const stmt of statements) {
      stmt(); // Side-effects executed in order
    }
    return finalExpression(); // Final line returned
  }
}

// Demonstration
// 1. Value vs Reference types under Any
const numVal = new ScalaAnyVal<number>(42);
const boolVal = new ScalaAnyVal<boolean>(true);
const orderRef = new ScalaAnyRef('Order', { id: 101, total: 250 });

console.log('AnyVal Int value: ' + numVal.value); // -> 42
console.log('AnyVal Boolean: ' + boolVal.value); // -> true
console.log('AnyRef object: ' + orderRef.toString()); // -> Order({"id":101,"total":250})

// 2. Expression-oriented evaluation
const testScore = 85;
const letterGrade = ScalaExpressionEngine.evalIf(
  testScore >= 80,
  () => 'Grade: A',
  () => 'Grade: B'
);
console.log('Computed grade expression: ' + letterGrade); // -> Grade: A

// 3. Block expression evaluation
const calculatedArea = ScalaExpressionEngine.evalBlock(
  [
    () => console.log('Step 1: Fetching radius'),
    () => console.log('Step 2: Applying pi constant')
  ],
  () => Math.PI * 10 * 10
);
console.log('Block returned area: ' + Math.round(calculatedArea)); // -> 314`
    }
  ],
  exercises: [
    {
      id: 'scale-ex-1',
      kind: 'mcq',
      question: {
        en: 'What is the top-level root type of all values in the Scala programming language?',
        bn: 'স্কালা প্রোগ্রামিং ভাষায় সমস্ত মানের শীর্ষস্থানীয় মূল টাইপ (root type) কোনটি?'
      },
      options: [
        {
          en: 'scala.Any (the direct supertype of AnyVal and AnyRef)',
          bn: 'scala.Any (যা AnyVal এবং AnyRef এর সরাসরি সুপারটাইপ)'
        },
        {
          en: 'java.lang.Object',
          bn: 'java.lang.Object (জাভা অবজেক্ট)'
        },
        {
          en: 'scala.Nothing',
          bn: 'scala.Nothing (স্কালা নাথিং)'
        },
        {
          en: 'scala.Unit',
          bn: 'scala.Unit (স্কালা ইউনিট)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Every value in Scala inherits from Any.',
        bn: 'স্কেলার প্রতিটি মান Any থেকে ইনহেরিট করে।'
      },
      explanation: {
        en: 'scala.Any is the root of the Scala type hierarchy. Every class directly or indirectly extends Any, which branches into AnyVal (value types) and AnyRef (reference types).',
        bn: 'scala.Any হলো টাইপ হায়ারার্কির শীর্ষ রুট টাইপ, যা থেকে AnyVal (মান টাইপ) এবং AnyRef (রেফারেন্স টাইপ) দুটি শাখায় বিভক্ত হয়।'
      }
    },
    {
      id: 'scale-ex-2',
      kind: 'mcq',
      question: {
        en: 'Why does Scala lack a ternary conditional operator (such as condition ? x : y)?',
        bn: 'স্কালাতে কেন কোনো টার্নারি কন্ডিশনাল অপারেটর (যেমন condition ? x : y) নেই?'
      },
      options: [
        {
          en: 'Because if/else is already an expression that returns a value (val x = if (c) a else b)',
          bn: 'কারণ if/else নিজেই একটি এক্সপ্রেশন যা মান প্রদান করে (val x = if (c) a else b)'
        },
        {
          en: 'Because question marks are reserved exclusively for regex parsing',
          bn: 'কারণ প্রশ্নবোধক চিহ্ন কেবল রেজেক্স পার্সিংয়ের জন্য সংরক্ষিত'
        },
        {
          en: 'Because the JVM cannot compile ternary expressions',
          bn: 'কারণ জেভিএম টার্নারি এক্সপ্রেশন কম্পাইল করতে পারে না'
        },
        {
          en: 'Because conditional logic is prohibited in functional programming',
          bn: 'কারণ ফাংশনাল প্রোগ্রামিংয়ে শর্তাধীন লজিক ব্যবহার নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'In expression-oriented languages, if/else returns a value directly.',
        bn: 'এক্সপ্রেশন-ভিত্তিক ভাষায় if/else সরাসরি মান রিটার্ন করে।'
      },
      explanation: {
        en: 'Because if/else constructs in Scala are expressions that yield a value, a dedicated ternary operator is redundant.',
        bn: 'স্কালাতে if/else একটি এক্সপ্রেশন হিসেবে কাজ করে মান ফেরত দেয়, তাই আলাদা টার্নারি অপারেটরের প্রয়োজন নেই।'
      }
    },
    {
      id: 'scale-ex-3',
      kind: 'mcq',
      question: {
        en: 'What does the bottom type scala.Nothing represent in the Scala type system?',
        bn: 'স্কালা টাইপ সিস্টেমে বটম টাইপ scala.Nothing কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'A subtype of every other type with 0 instances, signaling non-terminating expressions or thrown exceptions',
          bn: 'শূন্য ইনস্ট্যান্স বিশিষ্ট প্রতিটি টাইপের একটি সাবটাইপ, যা অস্বাভাবিক সমাপ্তি বা নিক্ষিপ্ত এক্সেপশন নির্দেশ করে'
        },
        {
          en: 'A primitive integer equal to zero',
          bn: 'একটি সাধারণ ইন্টিজার যার মান শূন্যের সমান'
        },
        {
          en: 'An empty text string ""',
          bn: 'একটি খালি টেক্সট স্ট্রিং ""'
        },
        {
          en: 'The name of the main garbage collector thread',
          bn: 'মূল গার্বেজ কালেক্টর থ্রেডের নাম'
        }
      ],
      answer: 0,
      hint: {
        en: 'Nothing is at the bottom of the entire type hierarchy.',
        bn: 'Nothing সমগ্র টাইপ হায়ারার্কির তলদেশে অবস্থান করে।'
      },
      explanation: {
        en: 'scala.Nothing is the bottom type of the entire hierarchy. It has no instances and is the return type of expressions that never terminate normally (such as throw new Exception).',
        bn: 'scala.Nothing হলো টাইপ কাঠামোর সর্বনিম্ন তলানি; এর কোনো ইনস্ট্যান্স নেই এবং এটি এমন এক্সপ্রেশনের টাইপ যা স্বাভাবিকভাবে শেষ হয় না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-scalas-and-the-scale',
    title: {
      en: 'Scala Architecture and Type System Quiz',
      bn: 'স্কালা আর্কিটেকচার ও টাইপ সিস্টেম কুইজ'
    },
    questions: [
      {
        id: 'scale-q1',
        kind: 'mcq',
        question: {
          en: 'Which branch of the Scala type hierarchy corresponds directly to java.lang.Object?',
          bn: 'স্কালা টাইপ কাঠামোর কোন শাখাটি সরাসরি java.lang.Object এর সাথে সঙ্গতিপূর্ণ?'
        },
        options: [
          {
            en: 'scala.AnyRef (all reference classes and collections)',
            bn: 'scala.AnyRef (تمام রেফারেন্স ক্লাস ও কালেকশন)'
          },
          {
            en: 'scala.AnyVal (value types)',
            bn: 'scala.AnyVal (ভ্যালু টাইপ)'
          },
          {
            en: 'scala.Nothing',
            bn: 'scala.Nothing'
          },
          {
            en: 'scala.Unit',
            bn: 'scala.Unit'
          }
        ],
        answer: 0,
        hint: {
          en: 'AnyRef represents reference types on the JVM.',
          bn: 'জেভিএমে রেফারেন্স টাইপ বোঝাতে AnyRef ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'On the Java platform, scala.AnyRef is an alias for java.lang.Object, serving as the supertype for all user-defined classes and reference types.',
          bn: 'জাভা প্ল্যাটফর্মে scala.AnyRef মূলত java.lang.Object এর সমতুল্য এবং সমস্ত রেফারেন্স ক্লাসের সুপারটাইপ।'
        }
      },
      {
        id: 'scale-q2',
        kind: 'mcq',
        question: {
          en: 'What is the return value of a multi-line curly-brace block expression { a; b; c } in Scala?',
          bn: 'স্কালাতে একাধিক লাইনের কার্লি-ব্রেস ব্লক এক্সপ্রেশন { a; b; c } এর রিটার্ন মান কোনটি হয়?'
        },
        options: [
          {
            en: 'The value produced by the final line (c)',
            bn: 'একদম শেষ লাইনের (c) উৎপাদিত মান'
          },
          {
            en: 'The value of the very first line (a)',
            bn: 'একদম প্রথম লাইনের (a) মান'
          },
          {
            en: 'A list containing all three values c(a, b, c)',
            bn: 'তিনটি মান ধারণকারী একটি তালিকা c(a, b, c)'
          },
          {
            en: 'Unit () regardless of what the code computes',
            bn: 'কোড যাই হিসাব করুক না কেন সর্বদা Unit ()'
          }
        ],
        answer: 0,
        hint: {
          en: 'Scala blocks evaluate to their last expression.',
          bn: 'স্কালা ব্লক তার শেষ এক্সপ্রেশনের মান রিটার্ন করে।'
        },
        explanation: {
          en: 'In Scala block expressions, statements are executed sequentially and the evaluation of the final expression becomes the block\'s return value.',
          bn: 'স্কালা ব্লকে প্রতিটি লাইন ধারাবাহিকভাবে চলে এবং একদম শেষ লাইনের মানটি পুরো ব্লকের ফলাফল হিসেবে ফিরে আসে।'
        }
      },
      {
        id: 'scale-q3',
        kind: 'mcq',
        question: {
          en: 'What type in Scala is equivalent to void in Java and C?',
          bn: 'জাভা বা সি-এর void এর সমতুল্য স্কেলার টাইপ কোনটি?'
        },
        options: [
          {
            en: 'scala.Unit (with a single literal value written as ())',
            bn: 'scala.Unit (যার একমাত্র লিটারেল মান লেখা হয় () দিয়ে)'
          },
          {
            en: 'scala.Null',
            bn: 'scala.Null'
          },
          {
            en: 'scala.Nil',
            bn: 'scala.Nil'
          },
          {
            en: 'scala.Empty',
            bn: 'scala.Empty'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unit signifies the absence of a meaningful return value.',
          bn: 'Unit কোনো কার্যকর রিটার্ন মান না থাকাকে নির্দেশ করে।'
        },
        explanation: {
          en: 'scala.Unit is a subtype of AnyVal representing side-effects with no meaningful value, containing exactly 1 instance written as ().',
          bn: 'scala.Unit হলো AnyVal এর একটি সাবটাইপ যা কোনো কার্যকর মানহীন সাইড-ইফেক্ট নির্দেশ করে এবং এর একমাত্র মান হলো ()।'
        }
      },
      {
        id: 'scale-q4',
        kind: 'mcq',
        question: {
          en: 'How do you define a program entry point in modern Scala 3 without wrapping code inside a singleton object extending App?',
          bn: 'App এক্সটেন্ড করা সিঙ্গলটন অবজেক্ট তৈরি না করে আধুনিক স্কালা ৩ এ কীভাবে প্রোগ্রামের মূল এন্ট্রি পয়েন্ট নির্ধারণ করা হয়?'
        },
        options: [
          {
            en: 'Using the @main annotation on a top-level function',
            bn: 'টপ-লেভেল ফাংশনের ওপর @main অ্যানোটেশন ব্যবহার করে'
          },
          {
            en: 'Adding public static void main to a class',
            bn: 'ক্লাসে public static void main যোগ করে'
          },
          {
            en: 'Naming the file Main.scala with no functions',
            bn: 'কোনো ফাংশন ছাড়া ফাইলের নাম Main.scala রেখে'
          },
          {
            en: 'Writing entrypoint: true in build.sbt only',
            bn: 'কেবল build.sbt ফাইলে entrypoint: true লিখে'
          }
        ],
        answer: 0,
        hint: {
          en: '@main is standard in Scala 3.',
          bn: 'স্কালা ৩ এ @main মানসম্মত নিয়ম।'
        },
        explanation: {
          en: 'In Scala 3, annotating any top-level method with @main generates the necessary JVM static main entry point boilerplate automatically.',
          bn: 'স্কালা ৩ এ টপ-লেভেল ফাংশনের ওপর @main অ্যানোটেশন দিলে কম্পাইলার নিজে থেকেই জেভিএম স্ট্যাটিক মেইন এন্ট্রি পয়েন্ট তৈরি করে।'
        }
      },
      {
        id: 'scale-q5',
        kind: 'mcq',
        question: {
          en: 'Who created the Scala programming language and leads its ongoing language design at EPFL?',
          bn: 'স্কালা প্রোগ্রামিং ভাষার জনক কে এবং EPFL-এ এর ডিজাইন দলের নেতৃত্ব দিচ্ছেন কে?'
        },
        options: [
          {
            en: 'Martin Odersky',
            bn: 'মার্টিন ওডারস্কি (Martin Odersky)'
          },
          {
            en: 'James Gosling',
            bn: 'জেমস গসলিং (James Gosling)'
          },
          {
            en: 'Guido van Rossum',
            bn: 'গুইডো ভ্যান রসাম (Guido van Rossum)'
          },
          {
            en: 'Bjarne Stroustrup',
            bn: 'বিয়ার্নে স্ট্রাউস্ট্রুপ (Bjarne Stroustrup)'
          }
        ],
        answer: 0,
        hint: {
          en: 'He also wrote the javac reference compiler and Generic Java.',
          bn: 'তিনি javac রেফারেন্স কম্পাইলার এবং জেনেরিক জাভাও তৈরি করেছিলেন।'
        },
        explanation: {
          en: 'Martin Odersky created Scala in 2004 at École Polytechnique Fédérale de Lausanne (EPFL) to fuse object-oriented and functional paradigms.',
          bn: 'মার্টিন ওডারস্কি ২০০৪ সালে EPFL-এ অবজেক্ট-ওরিয়েন্টেড এবং ফাংশনাল ধারণার সমন্বয় ঘটিয়ে স্কালা তৈরি করেন।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'vals-and-the-type',
    title: {
      en: 'Values, Variables & Types: Immutability, Type Inference & Option',
      bn: 'মান, ভেরিয়েবল ও টাইপ: ইমিউটেবিলিটি, টাইপ ইনফারেন্স ও Option'
    }
  }
};
