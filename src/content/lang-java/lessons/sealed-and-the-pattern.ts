import type { Lesson } from '../../../lib/types';

export const SealedAndThePatternLesson: Lesson = {
  slug: 'sealed-and-the-pattern',
  tech: 'lang-java',
  title: {
    en: 'Sealed Types, Record Patterns & Exhaustive Switch',
    bn: 'সিলড টাইপস, রেকর্ড প্যাটার্ন এবং এক্সহস্টিভ switch'
  },
  summary: {
    en: 'Model closed algebraic domain hierarchies in modern Java (Java 17 & 21): restrict inheritance using the sealed and permits keywords, deconstruct immutable data carriers with record patterns, and achieve compile-time exhaustiveness with pattern matching switch expressions.',
    bn: 'আধুনিক জাভাতে (জাভা ১৭ ও ২১) নিয়ন্ত্রিত অ্যালজেব্রাইক টাইপ ডোমেন মডেলিং: sealed এবং permits দিয়ে ইনহেরিটেন্স সীমাবদ্ধ করা, রেকর্ড প্যাটার্ন দিয়ে ডেটা ডিকনস্ট্রাকশন এবং এক্সহস্টিভ switch এক্সপ্রেশনের মাধ্যমে নিখুঁত কম্পাইল-টাইম সুরক্ষা অর্জন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'sealed-classes-and-permits-heading',
      text: {
        en: 'Sealed Classes, The "permits" Clause, and 3 Subclass Modifiers',
        bn: 'সিলড ক্লাস, "permits" ক্লজ এবং ৩ টি সাবক্লাস মডিফায়ার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Before Java 17, inheritance was binary: a class was either wide open to arbitrary extension by any class or completely closed via the "final" modifier. There was no mechanism to specify a controlled, closed set of permitted subtypes. Java 17 introduced "sealed" classes and interfaces to provide algebraic domain modeling. Using the "permits" clause, a sealed type explicitly enumerates which classes may extend or implement it. Every permitted subclass must reside in the same package (or module) and must explicitly declare exactly 1 of 3 modifiers: final (preventing further extension), sealed (continuing controlled subtyping), or non-sealed (re-opening the class to open inheritance).',
        bn: 'জাভা ১৭ এর পূর্বে ইনহেরিটেন্স ছিল বাইনারি: হয় একটি ক্লাস যে কারো এক্সটেন্ড করার জন্য সম্পূর্ণ উন্মুক্ত ছিল, অথবা "final" মডিফায়ার দিয়ে চিরতরে বন্ধ ছিল। নির্দিষ্ট কয়েকটি সাবক্লাসকে অনুমোদন দেওয়ার কোনো উপায় ছিল না। জাভা ১৭ অ্যালজেব্রাইক ডোমেন মডেলিংয়ের সুবিধা দিতে "sealed" ক্লাস ও ইন্টারফেস প্রবর্তন করে। "permits" ক্লজের মাধ্যমে একটি সিলড টাইপ নির্দিষ্ট করে দেয় কোন কোন ক্লাস এটিকে ইনহেরিট করতে পারবে। প্রতিটি অনুমোদিত সাবক্লাসকে অবশ্যই একই প্যাকেজ বা মডিউলে থাকতে হয় এবং ৩ টির মধ্যে অবিকল ১ টি মডিফায়ার ঘোষণা করতে হয়: final (পরবর্তী ইনহেরিটেন্স বন্ধ করে), sealed (নিয়ন্ত্রিত সাব-টাইপিং অব্যাহত রাখে), অথবা non-sealed (পুনরায় উন্মুক্ত করে দেয়)।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural mechanics of Java 17+ Sealed Hierarchies and Java 21 Exhaustive Pattern Matching Switch Expressions.',
        bn: 'চিত্র ১: জাভা ১৭+ সিলড হায়ারার্কি এবং জাভা ২১ এর এক্সহস্টিভ প্যাটার্ন ম্যাচিং switch এক্সপ্রেশনের পূর্ণাঙ্গ রূপরেখা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">JAVA SEALED HIERARCHIES &amp; EXHAUSTIVE PATTERN MATCHING</text>

  <!-- Step 1: Sealed Interface -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Sealed Type</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">sealed interface Shape</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">  permits Circle, Rect</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Closed Universe</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Algebraic Domain</text>
  </g>

  <!-- Step 2: Permitted Records -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Permitted Records</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">record Circle(double r)</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">  implements Shape</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Implicitly Final Record</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Immutable Data Carrier</text>
  </g>

  <!-- Step 3: Record Patterns -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Pattern Switch</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">switch (shape) {</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">  case Circle(var r) -&gt;</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Deconstructs Fields</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Direct Component Bind</text>
  </g>

  <!-- Step 4: Exhaustive Compile Safety -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Exhaustiveness</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">Zero default: Clause</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Compiler Proves All</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Subtype Addition Alarm</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Fail-Safe Evolution</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'pattern-matching-and-exhaustive-switch-heading',
      text: {
        en: 'Pattern Matching for Switch and Record Deconstruction in Java 21',
        bn: 'জাভা ২১ এ প্যাটার্ন ম্যাচিং switch এবং রেকর্ড ডিকনস্ট্রাকশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Java 21, pattern matching reached full maturity with Pattern Matching for switch and Record Patterns (JEP 440 & JEP 441). Rather than performing repetitive chains of "if (obj instanceof Circle) { Circle c = (Circle) obj; ... }", developers evaluate types directly inside switch expressions. With record patterns, Java deconstructs record components inline: "case Circle(double radius) -> Math.PI * radius * radius". Because the compiler knows every subtype permitted by a sealed interface, the switch expression is provably exhaustive: no default clause is required. Whenever a new child type joins the family later, missing branches trigger immediate compilation alarms.',
        bn: 'জাভা ২১ এ switch এর জন্য প্যাটার্ন ম্যাচিং এবং রেকর্ড প্যাটার্ন (JEP 440 ও JEP 441) পূর্ণাঙ্গ ও পরিণত রূপ লাভ করেছে। বারবার বিরক্তিকর "if (obj instanceof Circle) { Circle c = (Circle) obj; ... }" চেইন লেখার বদলে switch এক্সপ্রেশনের ভেতরেই সরাসরি টাইপ পরীক্ষা ও ভেরিয়েবল বাইন্ড করা যায়। রেকর্ড প্যাটার্ন ব্যবহারের মাধ্যমে অবজেক্টের ভেতরের ফিল্ডগুলো সরাসরি বাইরে বের করে আনা যায়: "case Circle(double radius) -> Math.PI * radius * radius"। যেহেতু সিলড ইন্টারফেসের মাধ্যমে কম্পাইলার অনুমোদিত সব সাবক্লাস সম্পর্কে পূর্ব থেকেই জানে, তাই এই switch পুরোপুরি এক্সহস্টিভ প্রমাণিত হয় এবং কোনো default কেসের প্রয়োজন পড়ে না। পরবর্তীতে এই পরিবারে নতুন কোনো টাইপ যুক্ত হলে কোডের অপূর্ণ শাখাগুলোতে তাৎক্ষণিক সতর্কতা জারি হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Java 17 sealed type hierarchy, Java 21 record patterns, and exhaustive compile-time switch verification.',
        bn: 'জাভা ১৭ সিলড টাইপ, জাভা ২১ রেকর্ড প্যাটার্ন এবং এক্সহস্টিভ switch মূল্যায়নের TypeScript বাস্তবায়ন।'
      },
      code: `// Simulation of Java Sealed Types and Exhaustive Record Pattern Switch

// Sealed hierarchy modeling: permits Circle and Rectangle
export type Shape =
  | { kind: 'Circle'; radius: number }
  | { kind: 'Rectangle'; width: number; height: number };

// Factory constructors simulating Java Records
export const createCircle = (radius: number): Shape => ({ kind: 'Circle', radius });
export const createRectangle = (width: number, height: number): Shape => ({ kind: 'Rectangle', width, height });

// Exhaustive pattern matching switch: equivalent to Java 21 switch (shape)
export function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    // Record pattern deconstructing circle radius directly
    case 'Circle': {
      const r = shape.radius;
      return Math.PI * r * r;
    }
    // Record pattern deconstructing rectangle width and height
    case 'Rectangle': {
      const { width, height } = shape;
      return width * height;
    }
    default: {
      // Compile-time exhaustiveness check: unreachable in closed algebraic domain
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
    }
  }
}

// Execution demonstration
const circle = createCircle(10);
const rect = createRectangle(20, 5);

console.log('Calculated Circle Area:', Math.round(calculateArea(circle))); // 314
console.log('Calculated Rectangle Area:', calculateArea(rect)); // 100`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'sealed class',
          def: {
            en: 'Class or interface that restricts its permitted subclasses using the permits clause.',
            bn: 'ক্লাস বা ইন্টারফেস যা permits ক্লজের মাধ্যমে সুনির্দিষ্টভাবে ইনহেরিটেন্স সীমাবদ্ধ করে।'
          }
        },
        {
          term: 'permits',
          def: {
            en: 'Keyword in sealed declarations explicitly enumerating allowed child classes or sub-interfaces.',
            bn: 'সিলড টাইপের কি-ওয়ার্ড যা অনুমোদিত চাইল্ড ক্লাসগুলোর নাম স্পষ্টভাবে তালিকাভুক্ত করে।'
          }
        },
        {
          term: 'Record Pattern',
          def: {
            en: 'Java 21 pattern matching syntax deconstructing record components directly into local variables.',
            bn: 'জাভা ২১ এর প্যাটার্ন ম্যাচিং যা রেকর্ড অবজেক্টের ভেতরের ফিল্ডগুলোকে সরাসরি লোকাল ভেরিয়েবলে ভেঙে দেয়।'
          }
        },
        {
          term: 'Exhaustive Switch',
          def: {
            en: 'Switch expression covering all permitted subclasses of a sealed type without requiring a default clause.',
            bn: 'switch এক্সপ্রেশন যা সিলড টাইপের সব সাবক্লাস কভার করে, ফলে কোনো default ক্লজের দরকার হয় না।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'sealed-classes-introduction-version-ex1',
      kind: 'mcq',
      topic: 'sealed-classes-java17-lts',
      question: {
        en: 'In which Long-Term Support (LTS) release were Sealed Classes finalized in Java?',
        bn: 'কোন লং-টার্ম সাপোর্ট (LTS) সংস্করণে জাভাতে সিলড ক্লাস চূড়ান্ত ও স্থায়ী ফিচার হিসেবে যুক্ত হয়?'
      },
      options: [
        { en: 'Java 17', bn: 'Java 17' },
        { en: 'Java 8', bn: 'Java 8' },
        { en: 'Java 11', bn: 'Java 11' },
        { en: 'Java 21', bn: 'Java 21' }
      ],
      answer: 0,
      hint: {
        en: 'Sealed classes were finalized in Java 17 LTS (JEP 409).',
        bn: 'জাভা ১৭ এলটিএস সংস্করণে সিলড ক্লাস স্থায়ী রূপ লাভ করে।'
      },
      explanation: {
        en: 'Java 17 officially delivered Sealed Classes (JEP 409) as a production language feature.',
        bn: 'জাভা ১৭ আনুষ্ঠানিকভাবে সিলড ক্লাসকে পূর্ণাঙ্গ ফিচার হিসেবে অন্তর্ভুক্ত করে।'
      }
    },
    {
      id: 'permitted-subclass-modifiers-count-ex2',
      kind: 'mcq',
      topic: 'permitted-subclass-required-modifiers',
      question: {
        en: 'Which 3 modifiers must a permitted subclass of a sealed class choose from in Java?',
        bn: 'জাভাতে সিলড ক্লাসের অনুমোদিত সাবক্লাসকে কোন ৩ টি মডিফায়ারের যেকোনো ১ টি বেছে নিতে হয়?'
      },
      options: [
        { en: 'final, sealed, or non-sealed', bn: 'final, sealed, অথবা non-sealed' },
        { en: 'public, private, or protected', bn: 'public, private, অথবা protected' },
        { en: 'static, transient, or volatile', bn: 'static, transient, অথবা volatile' },
        { en: 'abstract, native, or synchronized', bn: 'abstract, native, অথবা synchronized' }
      ],
      answer: 0,
      hint: {
        en: 'Permitted subclasses must specify how they continue or terminate the hierarchy: final, sealed, or non-sealed.',
        bn: 'সাবক্লাসকে নির্ধারণ করতে হয় সে কি ইনহেরিটেন্স বন্ধ করবে, অব্যাহত রাখবে, নাকি পুনরায় উন্মুক্ত করবে।'
      },
      explanation: {
        en: 'Every permitted class must explicitly declare final, sealed, or non-sealed to maintain deterministic hierarchy control.',
        bn: 'ইনহেরিটেন্স নিয়ন্ত্রণ নিশ্চিত রাখতে প্রতিটি অনুমোদিত সাবক্লাসে এই ৩ টির একটি মডিফায়ার থাকা বাধ্যতামূলক।'
      }
    },
    {
      id: 'record-patterns-java-version-ex3',
      kind: 'mcq',
      topic: 'record-patterns-java21-lts',
      question: {
        en: 'Which LTS release finalized Record Patterns (JEP 440) for deconstructing records in switch expressions in Java?',
        bn: 'কোন LTS সংস্করণে জাভাতে switch এক্সপ্রেশনে রেকর্ড ডিকনস্ট্রাকশনের জন্য Record Patterns (JEP 440) চূড়ান্ত করা হয়?'
      },
      options: [
        { en: 'Java 21', bn: 'Java 21' },
        { en: 'Java 11', bn: 'Java 11' },
        { en: 'Java 15', bn: 'Java 15' },
        { en: 'Java 8', bn: 'Java 8' }
      ],
      answer: 0,
      hint: {
        en: 'Record patterns were standardized in Java 21 LTS alongside pattern matching for switch.',
        bn: 'জাভা ২১ এলটিএস সংস্করণে রেকর্ড প্যাটার্ন আনুষ্ঠানিকভাবে চূড়ান্ত রূপ লাভ করে।'
      },
      explanation: {
        en: 'Java 21 LTS delivered Record Patterns (JEP 440), enabling direct decomposition of record components in match expressions.',
        bn: 'জাভা ২১ এর রেকর্ড প্যাটার্ন অবজেক্টের উপাদান সরাসরি বের করে এনে কোডকে অত্যন্ত সংক্ষিপ্ত করে দেয়।'
      }
    },
    {
      id: 'sealed-hierarchy-exhaustive-default-omission-ex4',
      kind: 'mcq',
      topic: 'sealed-switch-exhaustive-no-default',
      question: {
        en: 'Why is a "default:" branch unnecessary when evaluating all permitted subtypes of a sealed hierarchy in a Java 21 switch expression?',
        bn: 'জাভা ২১ switch এক্সপ্রেশনে একটি সিলড হায়ারার্কির সব সাবক্লাস কভার করা থাকলে "default:" ব্রাঞ্চ অপ্রয়োজনীয় কেন?'
      },
      options: [
        {
          en: 'Because the compiler has closed-world knowledge of every permitted subtype, mathematically proving the switch expression is already exhaustive',
          bn: 'কারণ কম্পাইলার অনুমোদিত প্রতিটি সাবক্লাস সম্পর্কে পূর্ব থেকেই জানে, ফলে switch এক্সপ্রেশনটি শতভাগ পূর্ণাঙ্গ বলে প্রমাণিত হয়'
        },
        {
          en: 'Because switch statements automatically shut down if default is used',
          bn: 'কারণ default ব্যবহার করলে switch স্টেটমেন্ট নিজে থেকেই বন্ধ হয়ে যায়'
        },
        {
          en: 'Because default clauses are forbidden by Java 21 in all switch statements',
          bn: 'কারণ জাভা ২১ এ যেকোনো switch স্টেটমেন্টে default ক্লজ ব্যবহার নিষিদ্ধ'
        },
        {
          en: 'Because sealed classes cannot be inspected inside switch statements',
          bn: 'কারণ সিলড ক্লাসকে switch স্টেটমেন্টের ভেতর দেখা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sealed types provide exhaustive closed hierarchies verified by the compiler.',
        bn: 'সিলড টাইপের সীমাবদ্ধ কাঠামোর কারণে কম্পাইলার নিজে থেকেই সব কেস কভার হয়েছে কিনা প্রমাণ করতে পারে।'
      },
      explanation: {
        en: 'The compiler inspects the permits list: when all permitted subtypes are handled, exhaustiveness is guaranteed without a fallback default.',
        bn: 'অনুমোদিত সব সাবক্লাস হ্যান্ডেল করা থাকলে বাড়তি কোনো default কেস লেখার প্রয়োজন থাকে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-sealed-and-the-pattern',
    title: {
      en: 'Java Sealed Classes & Pattern Matching Mastery Quiz',
      bn: 'জাভা সিলড ক্লাস এবং প্যাটার্ন ম্যাচিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-guarded-patterns-when-keyword',
        kind: 'mcq',
        topic: 'guarded-patterns-when-clause',
        question: {
          en: 'Which keyword introduced in Java 21 specifies conditional boolean guards in pattern matching switch cases (e.g. "case Circle c when c.radius() > 100")?',
          bn: 'প্যাটার্ন ম্যাচিং switch কেসে শর্তযুক্ত বুলিয়ান গার্ড যোগ করতে জাভা ২১ এ কোন কি-ওয়ার্ডটি প্রবর্তন করা হয়?'
        },
        options: [
          { en: 'when', bn: 'when' },
          { en: 'if', bn: 'if' },
          { en: 'where', bn: 'where' },
          { en: 'guard', bn: 'guard' }
        ],
        answer: 0,
        hint: {
          en: 'Java 21 adopted the "when" keyword for pattern matching guards.',
          bn: 'জাভা ২১ এ প্যাটার্ন ম্যাচিং গার্ডের জন্য "when" কি-ওয়ার্ডটি গ্রহণ করা হয়।'
        },
        explanation: {
          en: 'The "when" keyword introduces a boolean guard condition evaluated only if the type pattern matches.',
          bn: '"when" কি-ওয়ার্ড টাইপ মেলার পর অতিরিক্ত কোনো শর্ত যাচাইয়ের সুযোগ দেয়।'
        }
      },
      {
        id: 'quiz-record-implicit-final-sealed-hierarchy',
        kind: 'mcq',
        topic: 'records-implicitly-final-in-sealed',
        question: {
          en: 'When a Java 16+ record implements a sealed interface, why does it NOT need to explicitly declare the "final" modifier?',
          bn: 'যখন কোনো জাভা ১৬+ রেকর্ড একটি সিলড ইন্টারফেস বাস্তবায়ন করে, তখন কেন তাকে স্পষ্টভাবে "final" মডিফায়ার লিখতে হয় না?'
        },
        options: [
          {
            en: 'Because all records in Java are implicitly final by language specification, satisfying the sealed subclass modifier rule automatically',
            bn: 'কারণ ভাষা স্পেসিফিকেশন অনুযায়ী জাভাতে সমস্ত রেকর্ড নিজে থেকেই final, যা স্বয়ংক্রিয়ভাবে সিলড সাবক্লাসের নিয়ম পূরণ করে'
          },
          {
            en: 'Because records can never implement interfaces',
            bn: 'কারণ রেকর্ড কখনো কোনো ইন্টারফেস বাস্তবায়ন করতে পারে না'
          },
          {
            en: 'Because the compiler deletes the final keyword from all records',
            bn: 'কারণ কম্পাইলার রেকর্ড থেকে final কি-ওয়ার্ড মুছে ফেলে'
          },
          {
            en: 'Records are non-sealed by default',
            bn: 'রেকর্ড ডিফল্টভাবে non-sealed থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Records are always immutable and final by definition.',
          bn: 'সংজ্ঞানুযায়ী রেকর্ড সর্বদা অপরিবর্তনীয় এবং final হিসেবে গণ্য হয়।'
        },
        explanation: {
          en: 'Java records cannot be extended and are implicitly final, seamlessly meeting sealed permitted subtype requirements.',
          bn: 'যেহেতু রেকর্ডকে এক্সটেন্ড করা যায় না এবং এটি নিজেই final, তাই আলাদা করে final লেখার কোনো প্রয়োজন হয় না।'
        }
      },
      {
        id: 'quiz-sealed-classes-package-boundary-rule',
        kind: 'mcq',
        topic: 'sealed-permitted-subclasses-package-colocation',
        question: {
          en: 'Where must all permitted subclasses of a sealed class reside if the classes are in an unnamed module (traditional classpath)?',
          bn: 'সনাতন ক্লাসপাথে (নামহীন মডিউলে) থাকলে একটি সিলড ক্লাসের সমস্ত অনুমোদিত সাবক্লাসকে ঠিক কোথায় থাকতে হয়?'
        },
        options: [
          {
            en: 'They must all reside in the exact same Java package as the sealed parent class',
            bn: 'তাদের সবাইকে সিলড প্যারেন্ট ক্লাসের অবিকল একই জাভা প্যাকেজের মধ্যে থাকতে হবে'
          },
          {
            en: 'They must reside on separate physical computers',
            bn: 'তাদেরকে আলাদা আলাদা ফিজিক্যাল কম্পিউটারে থাকতে হবে'
          },
          {
            en: 'They can reside in any arbitrary package anywhere on the classpath',
            bn: 'ক্লাসপাথের যেকোনো প্যাকেজে তারা ইচ্ছেমতো থাকতে পারে'
          },
          {
            en: 'They must be declared inside the java.lang core package',
            bn: 'তাদের অবশ্যই java.lang কোর প্যাকেজের ভেতর থাকতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Colocation in the same package allows the compiler to verify and enforce the permits list.',
          bn: 'একই প্যাকেজে থাকার কারণে কম্পাইলার অনুমোদিত তালিকাটি নিশ্চিতভাবে যাচাই করতে পারে।'
        },
        explanation: {
          en: 'In non-modular projects, permitted subclasses must belong to the same package so the compiler can enforce sealed boundaries.',
          bn: 'মডিউল ছাড়া প্রকল্পে নিরাপত্তা নিশ্চিত করতে সিলড ক্লাস ও তার সাবক্লাসগুলো একই প্যাকেজে থাকা আবশ্যক।'
        }
      },
      {
        id: 'quiz-pattern-matching-null-handling-switch',
        kind: 'mcq',
        topic: 'pattern-matching-null-case-handling',
        question: {
          en: 'How does modern pattern matching for switch in Java 21 handle null values compared to legacy switch statements?',
          bn: 'সনাতন switch স্টেটমেন্টের তুলনায় জাভা ২১ এর আধুনিক প্যাটার্ন ম্যাচিং switch কীভাবে null মান পরিচালনা করে?'
        },
        options: [
          {
            en: 'Legacy switch threw an immediate NullPointerException, whereas modern switch allows explicit "case null ->" handling or combines "case null, default ->"',
            bn: 'সনাতন switch সাথে সাথে NullPointerException ছুড়ে দিতো, কিন্তু আধুনিক switch স্পষ্টভাবে "case null ->" অথবা "case null, default ->" লেখার সুযোগ দেয়'
          },
          {
            en: 'Modern switch converts null into the number 0',
            bn: 'আধুনিক switch যেকোনো null মানকে ০ সংখ্যায় বদলে ফেলে'
          },
          {
            en: 'Modern switch deletes null objects from the computer RAM',
            bn: 'আধুনিক switch মেমোরি থেকে null অবজেক্ট মুছে ফেলে'
          },
          {
            en: 'Null values cannot be passed into any Java method',
            bn: 'জাভার কোনো মেথডেই null মান পাস করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modern switch supports explicit case null labels.',
          bn: 'আধুনিক switch স্টেটমেন্টে স্পষ্টভাবে "case null" হ্যান্ডেল করার সুবিধা রয়েছে।'
        },
        explanation: {
          en: 'Java 21 switch allows direct "case null -> ...", preventing unexpected NullPointerExceptions when matching reference types.',
          bn: 'জাভা ২১ এ "case null" ব্যবহারের সুযোগ থাকায় অযাচিত নাল এক্সেপশন ঘটার ঝুঁকি নির্মূল হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-java-release',
    title: {
      en: 'The Modern Java Release Cadence, Toolchains & Tuning',
      bn: 'আধুনিক জাভা রিলিজ পদ্ধতি, টুলচেইন এবং টিউনিং'
    }
  }
};
