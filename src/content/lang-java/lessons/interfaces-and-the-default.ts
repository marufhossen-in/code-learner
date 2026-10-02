import type { Lesson } from '../../../lib/types';

export const InterfacesAndTheDefaultLesson: Lesson = {
  slug: 'interfaces-and-the-default',
  tech: 'lang-java',
  title: {
    en: 'Interfaces, Multiple Inheritance & Default Methods',
    bn: 'ইন্টারফেস, মাল্টিপল ইনহেরিটেন্স এবং ডিফল্ট মেথড'
  },
  summary: {
    en: 'Master polymorphic contract design in Java: decouple specifications from implementations using interfaces, evolve APIs without breaking backward compatibility via Java 8 default methods, resolve multiple interface inheritance diamond conflicts, and organize internal helper logic with private interface methods.',
    bn: 'জাভাতে পলিমর্ফিক ইন্টারফেস ডিজাইন আয়ত্ত করুন: ইন্টারফেস দিয়ে ইমপ্লিমেন্টেশন থেকে স্পেসিফিকেশন আলাদা করা, জাভা ৮ ডিফল্ট মেথড দিয়ে ব্যাকওয়ার্ড কম্প্যাটিবিলিটি অক্ষুণ্ণ রেখে এপিআই উন্নত করা, ডায়মন্ড কনফ্লিক্ট সমাধান এবং প্রাইভেট ইন্টারফেস মেথডের সঠিক প্রয়োগ।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'interface-contracts-and-default-methods-heading',
      text: {
        en: 'Decoupling Architecture: Abstract Contracts and Java 8 Default Methods',
        bn: 'আর্কিটেকচার ডিকাপলিং: অ্যাবস্ট্রাক্ট চুক্তি এবং জাভা ৮ ডিফল্ট মেথড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In object-oriented design, interfaces establish clean behavioral contracts by separating API specifications from concrete implementation logic. Before Java 8, interfaces could solely declare public abstract method signatures and constant fields. Adding a new method to an existing public interface like java.util.Collection immediately broke all external third-party classes implementing that interface. To enable API evolution without shattering binary compatibility, Java 8 introduced "default" methods containing concrete implementation bodies. Implementing classes inherit these fallback behaviors automatically unless they choose to override them.',
        bn: 'অবজেক্ট-ওরিয়েন্টেড ডিজাইনে ইন্টারফেস মূলত নির্দিষ্ট আচরণগত চুক্তি বা স্পেসিফিকেশনকে মূল কোড লজিক থেকে সম্পূর্ণ পৃথক রাখে। জাভা ৮ এর পূর্বে ইন্টারফেসে কেবল পাবলিক অ্যাবস্ট্রাক্ট মেথড এবং কনস্ট্যান্ট ফিল্ড ঘোষণা করা যেতো। ফলে java.util.Collection এর মতো কোনো জনপ্রিয় ইন্টারফেসে নতুন একটি মেথড যোগ করলেই সারা বিশ্বের লক্ষ লক্ষ থার্ড-পার্টি ক্লাস কম্পাইল এরর দিয়ে অকেজো হয়ে যেতো। ব্যাকওয়ার্ড কম্প্যাটিবিলিটি রক্ষা করে ইন্টারফেস সম্প্রসারণের সুযোগ দিতে জাভা ৮ এ "default" মেথড প্রবর্তিত হয়, যাতে মেথডের একটি বাস্তব বডি বা কাঠামো থাকে। ইমপ্লিমেন্ট করা ক্লাসগুলো প্রয়োজন হলে এটি ওভাররাইড করতে পারে, অন্যথায় স্বয়ংক্রিয়ভাবে ডিফল্ট আচরণটি পেয়ে যায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Evolution of Java interfaces: From purely abstract signatures to Java 8 default methods, Java 9 private helpers, and multiple inheritance conflict resolution.',
        bn: 'চিত্র ১: জাভা ইন্টারফেসের বিবর্তন: বিশুদ্ধ অ্যাবস্ট্রাক্ট মেথড থেকে জাভা ৮ ডিফল্ট মেথড, জাভা ৯ প্রাইভেট হেল্পার এবং মাল্টিপল ইনহেরিটেন্স কনফ্লিক্ট সমাধান।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">JAVA INTERFACE EVOLUTION &amp; DIAMOND CONFLICT RESOLUTION</text>

  <!-- Step 1: Interface Contract -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Interface Contract</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">public interface</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">PaymentGateway</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">void charge(amount)</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Abstract Specification</text>
  </g>

  <!-- Step 2: Java 8 Default Methods -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Default Methods</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">default void refund() {</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">  // Concrete Fallback</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Zero Breakage on Add</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">API Backward Compatibility</text>
  </g>

  <!-- Step 3: Java 9 Private Helpers -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Private Helpers</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">private void logTx()</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Encapsulated Logic</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Shared in Default</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">No Code Duplication</text>
  </g>

  <!-- Step 4: Diamond Conflict Fix -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Conflict Resolution</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">implements A, B</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Conflict Detected</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">A.super.refund()</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Explicit Disambiguation</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'multiple-inheritance-and-diamond-resolution-heading',
      text: {
        en: 'Multiple Interface Inheritance and Diamond Conflict Resolution',
        bn: 'মাল্টিপল ইন্টারফেস ইনহেরিটেন্স এবং ডায়মন্ড কনফ্লিক্ট সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While Java strictly prohibits multiple class inheritance to avoid the C++ diamond problem of ambiguous state, a Java class can implement an unlimited number of interfaces. However, if two implemented interfaces declare the exact same default method signature (for instance, both InterfaceA and InterfaceB define default void log()), the Java compiler refuses to guess which implementation to invoke. It issues a compile-time error: "class inherits unrelated defaults". To resolve this ambiguity, the implementing class must explicitly override the conflicting method and manually specify which parent default to invoke using the syntax: "InterfaceA.super.log()".',
        bn: 'অবস্থার দ্বন্দ্ব এড়াতে জাভা ক্লাসে মাল্টিপল ইনহেরিটেন্স কঠোরভাবে নিষিদ্ধ হলেও একটি ক্লাস যত ইচ্ছা ইন্টারফেস বাস্তবায়ন করতে পারে। কিন্তু যদি দুটি পৃথক ইন্টারফেসে অবিকল একই নামের ডিফল্ট মেথড থাকে (যেমন InterfaceA এবং InterfaceB উভয়টিতেই default void log() সংজ্ঞায়িত), তবে জাভা কম্পাইলার বিভ্রান্ত হয়ে কোড কম্পাইল করা বন্ধ করে দেয়। কম্পাইলার একটি সুনির্দিষ্ট এরর দেয়: "class inherits unrelated defaults"। এই দ্বন্দ্ব মেটাতে বাস্তবায়নকারী ক্লাসটিকে অবশ্যই মেথডটি ওভাররাইড করতে হয় এবং স্পষ্ট সিনট্যাক্স "InterfaceA.super.log()" ব্যবহার করে কাঙ্ক্ষিত ডিফল্ট মেথডটি নির্বাচন করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript implementation demonstrating interface polymorphism, default fallback methods, and explicit diamond ambiguity resolution.',
        bn: 'ইন্টারফেস পলিমরফিজম, ডিফল্ট ফলব্যাক মেথড এবং ডায়মন্ড কনফ্লিক্ট সমাধানের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Java Interface Default Methods and Multiple Inheritance Resolution

export interface FastLogger {
  logMessage(msg: string): string;
}

export interface DetailedAuditor {
  logMessage(msg: string): string;
}

// Java Interface A with default method
export class FastLoggerInterface {
  public static defaultLog(msg: string): string {
    return '[FastLogger:DEFAULT] ' + msg;
  }
}

// Java Interface B with conflicting default method
export class DetailedAuditorInterface {
  public static defaultLog(msg: string): string {
    return '[DetailedAuditor:TIMESTAMPED] ' + msg;
  }
}

// Implementing class resolving diamond ambiguity explicitly via InterfaceName.super.method()
export class EnterpriseTransactionService implements FastLogger, DetailedAuditor {
  public logMessage(msg: string): string {
    // Explicit disambiguation: delegating to FastLogger default implementation
    const resolved = FastLoggerInterface.defaultLog(msg);
    return resolved;
  }

  public processTransaction(txId: number, amount: number): string {
    const status = 'Charged $' + amount + ' on transaction #' + txId;
    return this.logMessage(status);
  }
}

// Execution demonstration
const service = new EnterpriseTransactionService();
const output = service.processTransaction(401, 150);
console.log('Resolved Service Log:', output);
// "[FastLogger:DEFAULT] Charged $150 on transaction #401"`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'default method',
          def: {
            en: 'Java 8 interface method containing a concrete implementation body, allowing non-breaking API evolution.',
            bn: 'জাভা ৮ এর ইন্টারফেস মেথড যাতে বাস্তব কোড থাকে এবং বিদ্যমান ক্লাস না ভেঙে নতুন মেথড যোগ করতে দেয়।'
          }
        },
        {
          term: 'Diamond Problem',
          def: {
            en: 'Ambiguity arising when a class inherits conflicting default method implementations with identical signatures from 2 interfaces.',
            bn: 'দ্বিধাদ্বন্দ্ব যা ঘটে যখন একটি ক্লাস একই মেথড সিগনেচারযুক্ত ২টি ইন্টারফেস থেকে বিপরীতমুখী ডিফল্ট মেথড পায়।'
          }
        },
        {
          term: 'FunctionalInterface',
          def: {
            en: 'Interface with exactly 1 abstract method (Single Abstract Method) eligible for lambda target typing.',
            bn: 'ইন্টারফেস যাতে অবিকল ১ টি মাত্র অ্যাবস্ট্রাক্ট মেথড থাকে যা ল্যাম্বডার মাধ্যমে বাস্তবায়ন করা যায়।'
          }
        },
        {
          term: 'private interface method',
          def: {
            en: 'Java 9 feature allowing interfaces to share internal encapsulated helper code across multiple default methods.',
            bn: 'জাভা ৯ এর ফিচার যা ইন্টারফেসের একাধিক ডিফল্ট মেথডের মধ্যে অভ্যন্তরীণ কোড শেয়ার করার সুযোগ দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'default-method-java-version-ex1',
      kind: 'mcq',
      topic: 'interface-default-methods-java8',
      question: {
        en: 'In which version of Java were interface default methods and static interface methods officially introduced?',
        bn: 'জাভার কোন সংস্করণে ইন্টারফেসে ডিফল্ট মেথড এবং স্ট্যাটিক মেথড আনুষ্ঠানিকভাবে প্রবর্তন করা হয়?'
      },
      options: [
        { en: 'Java 8', bn: 'Java 8' },
        { en: 'Java 5', bn: 'Java 5' },
        { en: 'Java 11', bn: 'Java 11' },
        { en: 'Java 21', bn: 'Java 21' }
      ],
      answer: 0,
      hint: {
        en: 'Default methods accompanied lambdas in the landmark Java 8 release.',
        bn: 'ল্যাম্বডা এক্সপ্রেশনের সাথে একই ঐতিহাসিক জাভা ৮ সংস্করণে ডিফল্ট মেথড আনা হয়।'
      },
      explanation: {
        en: 'Java 8 introduced default methods to upgrade standard libraries (like adding stream() to Collection) without breaking existing code.',
        bn: 'জাভা ৮ লাইব্রেরিকে যুগোপযোগী করতে এবং ব্যাকওয়ার্ড কম্প্যাটিবিলিটি রক্ষা করতে ডিফল্ট মেথড যুক্ত করে।'
      }
    },
    {
      id: 'diamond-problem-syntax-resolution-ex2',
      kind: 'mcq',
      topic: 'diamond-conflict-resolution-syntax',
      question: {
        en: 'How must an implementing class resolve conflicting default methods from InterfaceA and InterfaceB in Java?',
        bn: 'InterfaceA এবং InterfaceB এর মধ্যকার দ্বান্দ্বিক ডিফল্ট মেথড সমাধান করতে জাভাতে কোন সিনট্যাক্সটি লিখতে হয়?'
      },
      options: [
        {
          en: 'Override the method and explicitly call "InterfaceA.super.methodName()" inside the body',
          bn: 'মেথডটি ওভাররাইড করে বডির ভেতর স্পষ্টভাবে "InterfaceA.super.methodName()" কল করা'
        },
        {
          en: 'Delete InterfaceB from the source disk',
          bn: 'ডিস্ক থেকে InterfaceB ফাইলটি মুছে ফেলা'
        },
        {
          en: 'Add 10 empty comments above the class declaration',
          bn: 'ক্লাস ঘোষণার উপরে ১০ টি খালি মন্তব্য যোগ করা'
        },
        {
          en: 'Rename the Java virtual machine executable',
          bn: 'জাভা ভার্চুয়াল মেশিন ফাইলের নাম পরিবর্তন করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Use InterfaceName.super.method() to designate the intended implementation.',
        bn: 'কাঙ্ক্ষিত ইন্টারফেস চিহ্নিত করতে InterfaceName.super.method() সিনট্যাক্স ব্যবহার করুন।'
      },
      explanation: {
        en: 'Explicit qualification with InterfaceName.super disambiguates which interface parent implementation should be invoked.',
        bn: 'InterfaceName.super এর সাহায্যে স্পষ্টভাবে উল্লেখ করে দিলে কম্পাইলার সহজেই সঠিক মেথডটি নির্বাচন করে নেয়।'
      }
    },
    {
      id: 'private-interface-methods-version-ex3',
      kind: 'mcq',
      topic: 'private-interface-methods-java9',
      question: {
        en: 'Which Java version introduced the capability to declare private helper methods inside interfaces?',
        bn: 'ইন্টারফেসের ভেতরে প্রাইভেট হেল্পার মেথড ঘোষণার ক্ষমতা কোন জাভা সংস্করণে যুক্ত হয়?'
      },
      options: [
        { en: 'Java 9', bn: 'Java 9' },
        { en: 'Java 7', bn: 'Java 7' },
        { en: 'Java 17', bn: 'Java 17' },
        { en: 'Java 21', bn: 'Java 21' }
      ],
      answer: 0,
      hint: {
        en: 'Java 9 modularized the language and allowed private methods in interfaces.',
        bn: 'জাভা ৯ মডিউল সিস্টেমের সাথে ইন্টারফেসে প্রাইভেট মেথড লেখার সুবিধা নিয়ে আসে।'
      },
      explanation: {
        en: 'Java 9 introduced private interface methods to prevent code duplication across multiple default methods without exposing internals.',
        bn: 'একাধিক ডিফল্ট মেথডের ভেতর ডুপ্লিকেট কোড পরিহার করতে জাভা ৯ এ প্রাইভেট মেথডের অনুমোদন দেওয়া হয়।'
      }
    },
    {
      id: 'interface-fields-default-modifiers-ex4',
      kind: 'mcq',
      topic: 'interface-constant-field-modifiers',
      question: {
        en: 'What implicit modifiers does the Java compiler automatically assign to any field declared inside an interface?',
        bn: 'ইন্টারফেসের ভেতর ঘোষিত যেকোনো ফিল্ডে জাভা কম্পাইলার স্বয়ংক্রিয়ভাবে কোন মডিফায়ারগুলো যুক্ত করে?'
      },
      options: [
        { en: 'public static final', bn: 'মডিফায়ার: public static final' },
        { en: 'private transient volatile', bn: 'মডিফায়ার: private transient volatile' },
        { en: 'protected abstract synchronized', bn: 'মডিফায়ার: protected abstract synchronized' },
        { en: 'package-private native', bn: 'মডিফায়ার: package-private native' }
      ],
      answer: 0,
      hint: {
        en: 'Interface fields are constant values: accessible publicly, tied to the interface, and immutable.',
        bn: 'ইন্টারফেসের ফিল্ডগুলো ধ্রুবক: সবাই দেখতে পারে, ইন্টারফেসের সাথে যুক্ত এবং অপরিবর্তনীয়।'
      },
      explanation: {
        en: 'Every field declared in an interface is implicitly public, static, and final, serving as a compile-time constant.',
        bn: 'ইন্টারফেসের সমস্ত ফিল্ড নিজে থেকেই public, static এবং final ধ্রুবক হিসেবে গণ্য হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-interfaces-and-the-default',
    title: {
      en: 'Java Interfaces and Default Methods Mastery Quiz',
      bn: 'জাভা ইন্টারফেস এবং ডিফল্ট মেথড কুইজ'
    },
    questions: [
      {
        id: 'quiz-functional-interface-sam-default-methods',
        kind: 'mcq',
        topic: 'functional-interface-sam-with-defaults',
        question: {
          en: 'Does adding multiple default or static methods to an interface disqualify it from being an annotated @FunctionalInterface?',
          bn: 'একটি ইন্টারফেসে একাধিক default বা static মেথড যোগ করলে কি তা @FunctionalInterface হিসেবে থাকার যোগ্যতা হারায়?'
        },
        options: [
          {
            en: 'No, because a functional interface requires exactly 1 abstract method; any number of default or static methods are permitted',
            bn: 'না, কারণ একটি ফাংশনাল ইন্টারফেসে অবিকল ১ টি অ্যাবস্ট্রাক্ট মেথড থাকতে হয়; যত ইচ্ছা default বা static মেথড থাকতে পারে'
          },
          {
            en: 'Yes, functional interfaces can have exactly 0 default methods',
            bn: 'হ্যাঁ, ফাংশনাল ইন্টারফেসে ঠিক ০ টি ডিফল্ট মেথড থাকতে পারে'
          },
          {
            en: 'Yes, the compiler throws an error on more than 2 total methods',
            bn: 'হ্যাঁ, সর্বমোট ২ টির বেশি মেথড থাকলেই কম্পাইলার এরর দেয়'
          },
          {
            en: 'Default methods can only be written in abstract classes',
            bn: 'ডিফল্ট মেথড কেবল অ্যাবস্ট্রাক্ট ক্লাসেই লেখা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The Single Abstract Method (SAM) rule only restricts abstract methods.',
          bn: 'সিঙ্গেল অ্যাবস্ট্রাক্ট মেথড নিয়ম কেবল অ্যাবস্ট্রাক্ট মেথডকেই ১ টিতে সীমাবদ্ধ রাখে।'
        },
        explanation: {
          en: 'As long as an interface retains exactly 1 abstract method, it can declare dozens of default and static utility methods while remaining a valid SAM functional interface.',
          bn: 'যতক্ষণ পর্যন্ত অ্যাবস্ট্রাক্ট মেথড ঠিক ১ টি থাকে, ততক্ষণ যত খুশি ডিফল্ট মেথড থাকলেও তা ফাংশনাল ইন্টারফেস হিসেবে বৈধ থাকে।'
        }
      },
      {
        id: 'quiz-interface-vs-abstract-class-state',
        kind: 'mcq',
        topic: 'interface-vs-abstract-class-instance-state',
        question: {
          en: 'Even with default methods in Java 8, what fundamental capability does an abstract class possess that an interface can NEVER have?',
          bn: 'জাভা ৮ ডিফল্ট মেথড থাকা সত্ত্বেও একটি অ্যাবস্ট্রাক্ট ক্লাসে এমন কোন মৌলিক ক্ষমতা থাকে যা একটি ইন্টারফেসে কখনো থাকতে পারে না?'
        },
        options: [
          {
            en: 'Abstract classes can declare mutable instance state (instance fields with constructors), whereas interfaces cannot maintain mutable instance state',
            bn: 'অ্যাবস্ট্রাক্ট ক্লাস পরিবর্তনশীল ইনস্ট্যান্স স্টেট (কনস্ট্রাক্টরসহ ইনস্ট্যান্স ফিল্ড) রাখতে পারে, কিন্তু ইন্টারফেসে পরিবর্তনশীল কোনো ইনস্ট্যান্স ফিল্ড থাকতে পারে না'
          },
          {
            en: 'Abstract classes run on the GPU while interfaces run on the CPU',
            bn: 'অ্যাবস্ট্রাক্ট ক্লাস জিপিইউতে চলে আর ইন্টারফেস সিপিইউতে চলে'
          },
          {
            en: 'Interfaces cannot be compiled by javac',
            bn: 'ইন্টারফেস javac দ্বারা কম্পাইল করা যায় না'
          },
          {
            en: 'Abstract classes cannot declare public methods',
            bn: 'অ্যাবস্ট্রাক্ট ক্লাস কোনো পাবলিক মেথড রাখতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Interfaces are stateless contracts; they cannot hold mutable per-instance fields.',
          bn: 'ইন্টারফেস স্টেটলেস; এর নিজস্ব কোনো পরিবর্তনশীল অবজেক্ট ফিল্ড বা স্টেট থাকে না।'
        },
        explanation: {
          en: 'Interfaces cannot have constructors or instance fields. Abstract classes can define constructors and manage mutable instance state.',
          bn: 'ইন্টারফেসে কোনো কনস্ট্রাক্টর বা অবজেক্ট স্টেট রাখা অসম্ভব; এ কাজ করতে অ্যাবস্ট্রাক্ট ক্লাস প্রয়োজন।'
        }
      },
      {
        id: 'quiz-default-method-class-wins-rule',
        kind: 'mcq',
        topic: 'class-wins-rule-inheritance',
        question: {
          en: 'What is the "class wins" rule when a class inherits a concrete method from a superclass AND a default method with the same signature from an interface?',
          bn: 'কোনো ক্লাস প্যারেন্ট ক্লাস থেকে একটি সাধারণ মেথড এবং ইন্টারফেস থেকে একই নামের ডিফল্ট মেথড উভয়ই পেলে "class wins" নিয়ম অনুযায়ী কোনটি কার্যকর হয়?'
        },
        options: [
          {
            en: 'The superclass method always takes precedence, completely overriding the interface default method',
            bn: 'সুপারক্লাসের মেথডটি সর্বদা প্রাধান্য পায় এবং ইন্টারফেসের ডিফল্ট মেথডটিকে সম্পূর্ণ উপেক্ষা করে'
          },
          {
            en: 'The compiler throws a fatal unresolvable error',
            bn: 'কম্পাইলার একটি মারাত্মক অমীমাংসিত এরর তৈরি করে'
          },
          {
            en: 'The interface default method overwrites the superclass method',
            bn: 'ইন্টারফেসের ডিফল্ট মেথডটি সুপারক্লাসের মেথডকে বদলে দেয়'
          },
          {
            en: 'The JVM randomly selects one method on each launch',
            bn: 'প্রতিবার প্রোগ্রাম চালানোর সময় JVM যেকোনো একটি মেথড লটারি করে বেছে নেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Concrete class methods always conquer interface default methods.',
          bn: 'ক্লাস হেরিটেজ ইন্টারফেসের ডিফল্ট মেথডের চেয়ে সর্বদা বেশি শক্তিশালী।'
        },
        explanation: {
          en: 'The Java language specification dictates that any concrete method declaration in a superclass takes precedence over any interface default method.',
          bn: 'জাভা স্পেসিফিকেশন অনুযায়ী সুপারক্লাসের মেথড সর্বদা ইন্টারফেস ডিফল্টের চেয়ে প্রাধান্য পাবে।'
        }
      },
      {
        id: 'quiz-interface-marker-serializable',
        kind: 'mcq',
        topic: 'marker-interfaces-rtti',
        question: {
          en: 'What is a "Marker Interface" in Java (such as java.io.Serializable or java.lang.Cloneable)?',
          bn: 'জাভাতে "Marker Interface" (যেমন java.io.Serializable বা java.lang.Cloneable) বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'An interface possessing 0 methods and 0 constants, used solely to signal metadata capability to the JVM or runtime reflection mechanisms',
            bn: '০ টি মেথড এবং ০ টি কনস্ট্যান্টযুক্ত একটি ইন্টারফেস, যা কেবল JVM বা রিফ্লেকশন মেকানিজমকে বিশেষ সক্ষমতা সম্পর্কে সংকেত দিতে ব্যবহৃত হয়'
          },
          {
            en: 'An interface that prints colored text to the terminal',
            bn: 'একটি ইন্টারফেস যা টার্মিনালে রঙিন টেক্সট প্রিন্ট করে'
          },
          {
            en: 'An interface requiring at least 10 abstract methods',
            bn: 'একটি ইন্টারফেস যাতে কমপক্ষে ১০ টি অ্যাবস্ট্রাক্ট মেথড থাকতে হয়'
          },
          {
            en: 'An interface that cannot be implemented by any class',
            bn: 'একটি ইন্টারফেস যা কোনো ক্লাস বাস্তবায়ন করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Marker interfaces have empty bodies and act as type tags.',
          bn: 'মার্কার ইন্টারফেস সম্পূর্ণ খালি থাকে এবং ক্লাসের পরিচয় ট্যাগ হিসেবে কাজ করে।'
        },
        explanation: {
          en: 'Marker interfaces define no behaviors; they convey metadata allowing runtime checks like "if (obj instanceof Serializable)".',
          bn: 'মার্কার ইন্টারফেসে কোনো মেথড থাকে না; রানটাইমে "instanceof" দিয়ে ক্লাসের অনুমতি বা বিশেষ আচরণ যাচাই করা হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'generics-and-the-diamond',
    title: {
      en: 'Generics, Type Erasure & The Diamond Operator',
      bn: 'জেনেরিকস, টাইপ ইরেজার এবং ডায়মন্ড অপারেটর'
    }
  }
};
