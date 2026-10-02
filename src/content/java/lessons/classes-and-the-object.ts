import type { Lesson } from '../../../lib/types';

export const ClassesAndTheObjectLesson: Lesson = {
  slug: 'classes-and-the-object',
  tech: 'java',
  title: {
    en: 'OOP Foundations, Records & Interface Contracts',
    bn: 'OOP ভিত্তি, রেকর্ডস এবং ইন্টারফেস চুক্তি'
  },
  summary: {
    en: 'Master enterprise object-oriented design in Java: enforce encapsulation with access modifiers (private, protected, public), structure clean inheritance hierarchies, implement polymorphic interface contracts with default methods, and eliminate immutable DTO boilerplate with Java 16+ records.',
    bn: 'জাভাতে অবজেক্ট-ওরিয়েন্টেড ডিজাইন আয়ত্ত করুন: অ্যাক্সেস মডিফায়ার দিয়ে এনক্যাপসুলেশন, ইনহেরিটেন্স হায়ারার্কি, ডিফল্ট মেথড সহ পলিমরফিক ইন্টারফেস চুক্তি এবং জাভা ১৬+ রেকর্ডস দিয়ে ইমিউটেবল DTO তৈরি।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'oop-foundations-heading',
      text: {
        en: 'Encapsulation Access Modifiers, Single Inheritance, and Dynamic Dispatch',
        bn: 'এনক্যাপসুলেশন অ্যাক্সেস মডিফায়ার, ইনহেরিটেন্স এবং ডাইনামিক ডিসপ্যাচ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Java is an enterprise-grade object-oriented language architected around encapsulation, inheritance, polymorphism, and abstraction. Access modifiers govern field visibility across 4 discrete boundaries: private (accessible only within the defining class), package-private default (accessible within the package), protected (accessible to package peers and subclasses), and public (globally accessible). Java enforces a single-inheritance class model where a subclass extends exactly 1 parent class, resolving polymorphic method calls at runtime using an internal Virtual Method Table (vtable).',
        bn: 'জাভা হলো একটি শক্তিশালী অবজেক্ট-ওরিয়েন্টেড ভাষা যা এনক্যাপসুলেশন, ইনহেরিটেন্স, পলিমরফিজম এবং অ্যাবস্ট্রাকশনের ওপর নির্মিত। অ্যাক্সেস মডিফায়ারগুলো ৪ টি স্তরে প্রপার্টির দৃশ্যমানতা নিয়ন্ত্রণ করে: private (কেবলমাত্র নিজস্ব ক্লাসের ভেতরে), package-private (একই প্যাকেজের ভেতরে), protected (প্যাকেজ এবং চাইল্ড ক্লাসের ভেতরে) এবং public (যেকোনো জায়গা থেকে অ্যাক্সেসযোগ্য)। জাভাতে একটি ক্লাস কেবল ১ টি প্যারেন্ট ক্লাস থেকেই ইনহেরিট করতে পারে এবং রানটাইমে ভার্চুয়াল মেথড টেবিল (vtable) ব্যবহারের মাধ্যমে সঠিক মেথডটি কার্যকর করা হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural structure of Java Polymorphic Interfaces, vtable dynamic dispatch, and compact immutable Records.',
        bn: 'চিত্র ১: জাভা পলিমরফিক ইন্টারফেস, vtable ডাইনামিক ডিসপ্যাচ এবং অপরিবর্তনীয় রেকর্ডসের কাঠামোগত চিত্র।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">JAVA OBJECT MODEL, POLYMORPHIC VTABLE &amp; RECORDS</text>

  <!-- Left: Interface Contract -->
  <g transform="translate(35, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#0284c7" />
    <text x="115" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Interface Contract</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="68" fill="#38bdf8" font-size="11" font-family="monospace">public interface Gateway</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">boolean pay(double amt);</text>

    <rect x="15" y="105" width="200" height="55" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="125" fill="#38bdf8" font-size="10" font-family="monospace">default void log() {</text>
    <text x="25" y="145" fill="#34d399" font-size="10" font-family="monospace">  // Non-breaking add</text>

    <text x="15" y="205" fill="#cbd5e1" font-size="10" font-family="sans-serif">Decoupled Architecture</text>
  </g>

  <!-- Middle: vtable Dispatch -->
  <g transform="translate(305, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#059669" />
    <text x="115" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">JVM Dynamic vtable</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="68" fill="#34d399" font-size="10" font-family="monospace">invokevirtual: pay()</text>
    <text x="25" y="85" fill="#fbbf24" font-size="9" font-family="monospace">Index 2 in method table</text>

    <rect x="15" y="105" width="200" height="55" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="128" fill="#34d399" font-size="10" font-family="monospace">-&gt; StripeService.pay()</text>
    <text x="25" y="148" fill="#cbd5e1" font-size="9" font-family="monospace">-&gt; PaypalService.pay()</text>

    <text x="15" y="205" fill="#34d399" font-size="10" font-family="sans-serif">Runtime Polymorphism</text>
  </g>

  <!-- Right: Java Record -->
  <g transform="translate(575, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#7e22ce" />
    <text x="115" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Java 16+ Record</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="20" y="68" fill="#c084fc" font-size="10" font-family="monospace">record OrderDto(</text>
    <text x="20" y="85" fill="#fbbf24" font-size="9" font-family="monospace"> Long id, String sku)</text>

    <rect x="15" y="105" width="200" height="55" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="20" y="125" fill="#c084fc" font-size="9" font-family="monospace">Auto: constructor,</text>
    <text x="20" y="145" fill="#34d399" font-size="9" font-family="monospace">equals, hash, toString</text>

    <text x="15" y="205" fill="#c084fc" font-size="10" font-family="sans-serif">Immutable Entity DTO</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'interfaces-and-records-heading',
      text: {
        en: 'Interface Default Methods and Immutable Data Carrier Records',
        bn: 'ইন্টারফেস ডিফল্ট মেথড এবং ইমিউটেবল ডেটা ক্যারিয়ার রেকর্ডস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To allow interfaces to evolve without breaking backward compatibility across millions of implementing classes, Java 8 introduced "default" methods containing concrete method bodies directly within interface declarations. In modern enterprise systems, exchanging data between architectural tiers often requires immutable Data Transfer Objects (DTOs). Java 16 standardized "records" (e.g. record UserDto(Long id, String email) {}), which automatically synthesize private final fields, a canonical constructor, field accessors, equals(), hashCode(), and toString() in a single concise declaration.',
        bn: 'লক্ষ লক্ষ বিদ্যমান ক্লাসের কোড নষ্ট না করে ইন্টারফেসে নতুন সুবিধা যোগ করার জন্য জাভা ৮ এ "default" মেথড আনা হয়েছে, যার মাধ্যমে ইন্টারফেসের ভেতরেই মেথডের বাস্তবায়ন লেখা যায়। আধুনিক এন্টারপ্রাইজ সিস্টেমে বিভিন্ন লেয়ারের মাঝে নিরাপদ ডেটা আদান-প্রদানের জন্য অপরিবর্তনীয় DTO প্রয়োজন হয়। জাভা ১৬ এ "records" (যেমন record UserDto(Long id, String email) {}) প্রাতিষ্ঠানিক রূপ পেয়েছে, যা কোনো অতিরিক্ত কোড ছাড়াই স্বয়ংক্রিয়ভাবে ফাইনাল ফিল্ড, কনস্ট্রাক্টর, এক্সেসর, equals(), hashCode() এবং toString() তৈরি করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Java interface polymorphic dispatch, default methods, and immutable record classes.',
        bn: 'জাভা ইন্টারফেস পলিমরফিজম, ডিফল্ট মেথড এবং ইমিউটেবল রেকর্ডের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Java Interface Contracts, Polymorphism, and Records in TypeScript

// 1. Simulating Java Interface Contract with Default Method
export interface PaymentGateway {
  charge(amount: number): boolean;
  logAudit?(amount: number): void; // Simulating default method
}

// 2. Concrete Implementation 1: StripeGateway
export class StripeGateway implements PaymentGateway {
  public charge(amount: number): boolean {
    console.log(\`Charging \${amount} via Stripe API\`);
    return true;
  }
}

// 3. Concrete Implementation 2: PaypalGateway
export class PaypalGateway implements PaymentGateway {
  public charge(amount: number): boolean {
    console.log(\`Charging \${amount} via PayPal OAuth\`);
    return true;
  }
}

// 4. Simulating Java 16+ Record: record PaymentRecord(Long id, double amount, String status)
export class PaymentRecord {
  public readonly id: number;
  public readonly amount: number;
  public readonly status: string;

  constructor(id: number, amount: number, status: string = 'SUCCESS') {
    this.id = id;
    this.amount = amount;
    this.status = status;
    Object.freeze(this); // Immutability guarantee
  }
}

// Executing demonstrations
const gateway: PaymentGateway = new StripeGateway();
const success = gateway.charge(500);

const tx = new PaymentRecord(101, 500);
console.log('Payment Succeeded:', success); // true
console.log('Record ID:', tx.id); // 101
console.log('Record Amount:', tx.amount); // 500
console.log('Record Status (Immutable):', tx.status); // "SUCCESS"`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Encapsulation',
          def: {
            en: 'OOP principle bundling data and restricting direct field access via private modifiers and public accessor methods.',
            bn: 'অবজেক্ট-ওরিয়েন্টেড নীতি যা ডেটাকে নিরাপদ রাখতে প্রাইভেট ফিল্ড এবং পাবলিক মেথডের মাধ্যমে অ্যাক্সেস নিয়ন্ত্রণ করে।'
          }
        },
        {
          term: 'Virtual Method Table (vtable)',
          def: {
            en: 'Internal JVM dispatch array mapping method offsets to concrete subclass memory addresses for dynamic polymorphism.',
            bn: 'JVM এর অভ্যন্তরীণ টেবিল যা রানটাইমে অবজেক্টের সঠিক মেথডের ঠিকানা শনাক্ত করে পলিমরফিজম নিশ্চিত করে।'
          }
        },
        {
          term: 'Interface Default Method',
          def: {
            en: 'Method declared inside an interface with the default keyword, providing a non-abstract baseline implementation.',
            bn: 'ইন্টারফেসের ভেতরে default কিওয়ার্ডযুক্ত মেথড যা চাইল্ড ক্লাসের জন্য প্রাথমিক কোড বাস্তবায়ন সরবরাহ করে।'
          }
        },
        {
          term: 'Record Class',
          def: {
            en: 'Java 16+ transparent carrier class automatically generating constructor, getters, equals, and hashCode for immutable data.',
            bn: 'জাভা ১৬+ এর বিশেষ ক্লাস যা ইমিউটেবল ডেটা অবজেক্টের জন্য কনস্ট্রাক্টর ও এক্সেসর মেথডগুলো স্বয়ংক্রিয়ভাবে তৈরি করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'java-single-inheritance-rule-ex1',
      kind: 'mcq',
      topic: 'java-single-class-inheritance-rule',
      question: {
        en: 'Can a single Java class extend multiple parent classes simultaneously (e.g. class C extends A, B)?',
        bn: 'একটি জাভা ক্লাস কি একসাথে একাধিক প্যারেন্ট ক্লাস থেকে ইনহেরিট করতে পারে (যেমন class C extends A, B)?'
      },
      options: [
        {
          en: 'No, Java enforces strict single class inheritance to prevent diamond problem ambiguities, though classes can implement multiple interfaces',
          bn: 'না, ডায়মন্ড প্রবলেম এড়াতে জাভা ক্লাসের ক্ষেত্রে কঠোর সিঙ্গেল ইনহেরিটেন্স মেনে চলে, তবে একসাথে একাধিক ইন্টারফেস ব্যবহার করা যায়'
        },
        {
          en: 'Yes, classes can extend an unlimited number of parent classes',
          bn: 'হ্যাঁ, একটি ক্লাস যত খুশি প্যারেন্ট ক্লাস extend করতে পারে'
        },
        {
          en: 'Only if both parent classes have zero methods',
          bn: 'কেবল যদি উভয় প্যারেন্ট ক্লাসে কোনো মেথড না থাকে'
        },
        {
          en: 'Only on 64-bit operating systems',
          bn: 'কেবল ৬৪-বিট অপারেটিং সিস্টেমে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Java disallows multiple class inheritance, allowing multiple inheritance of types via interfaces instead.',
        bn: 'জাভা ক্লাসের ক্ষেত্রে একাধিক ইনহেরিটেন্স নিষিদ্ধ করেছে, তবে ইন্টারফেসের মাধ্যমে একাধিক টাইপ যুক্ত করা যায়।'
      },
      explanation: {
        en: 'Java permits extending only 1 class via "extends", avoiding multiple-inheritance state collisions.',
        bn: 'জাভাতে একটি ক্লাস কেবল একটিমাত্র ক্লাসকে extend করতে পারে, যা কোডের দ্বন্দ্ব দূর করে।'
      }
    },
    {
      id: 'package-private-default-scope-ex2',
      kind: 'mcq',
      topic: 'package-private-default-visibility',
      question: {
        en: 'What visibility does a class field have if no access modifier (public, protected, or private) is explicitly declared?',
        bn: 'কোনো ফিল্ডের আগে public, protected বা private কিছু না লিখলে ডিফল্টভাবে তার অ্যাক্সেস স্তর কী হয়?'
      },
      options: [
        {
          en: 'Package-private (default): accessible to any class located within the identical package, but hidden from external packages',
          bn: 'Package-private (ডিফল্ট): একই প্যাকেজের ভেতরের যেকোনো ক্লাস থেকে ব্যবহারযোগ্য, কিন্তু অন্য প্যাকেজ থেকে দেখা যায় না'
        },
        {
          en: 'public: accessible everywhere globally',
          bn: 'public: সব জায়গা থেকে অবাধে ব্যবহারযোগ্য'
        },
        {
          en: 'private: accessible only inside that specific class',
          bn: 'private: কেবল সেই ক্লাসের ভেতরে সীমাবদ্ধ'
        },
        {
          en: 'The compiler triggers a syntax error',
          bn: 'কম্পাইলার সাথে সাথে সিনট্যাক্স এরর দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The default access level in Java is package-private, restricted to classes in the same package.',
        bn: 'জাভাতে কোনো মডিফায়ার না দিলে তা কেবল একই প্যাকেজের ক্লাসগুলোর জন্যই উন্মুক্ত থাকে।'
      },
      explanation: {
        en: 'Omitted access modifiers result in package-private access, enforcing encapsulation outside package boundaries.',
        bn: 'মডিফায়ার না লিখলে জাভা প্যাকেজ-লেভেল এনক্যাপসুলেশন বজায় রাখে।'
      }
    },
    {
      id: 'java-record-automatic-synthesis-ex3',
      kind: 'mcq',
      topic: 'java-record-synthesized-methods',
      question: {
        en: 'Which methods does the Java compiler automatically synthesize when declaring "public record UserDto(Long id, String email) {}"?',
        bn: '"public record UserDto(Long id, String email) {}" লেখার পর জাভা কম্পাইলার স্বয়ংক্রিয়ভাবে কোন মেথডগুলো তৈরি করে?'
      },
      options: [
        {
          en: 'Canonical constructor, private final fields, getter accessors (id(), email()), equals(), hashCode(), and toString()',
          bn: 'ক্যানোনিকাল কনস্ট্রাক্টর, প্রাইভেট ফাইনাল ফিল্ড, এক্সেসর মেথড (id(), email()), equals(), hashCode() এবং toString()'
        },
        {
          en: 'Only a default constructor without arguments',
          bn: 'কেবল আর্গুমেন্ট ছাড়া একটি ডিফল্ট কনস্ট্রাক্টর'
        },
        {
          en: 'Database SQL INSERT queries',
          bn: 'ডেটাবেস এসকিউএল কুয়েরি'
        },
        {
          en: 'Records generate zero methods automatically',
          bn: 'রেকর্ড নিজে থেকে কোনো মেথড তৈরি করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Records synthesize all standard boilerplate methods required for immutable data carrier objects.',
        bn: 'রেকর্ড ইমিউটেবল ডেটা অবজেক্টের জন্য প্রয়োজনীয় সমস্ত মৌলিক মেথড নিজে থেকেই তৈরি করে দেয়।'
      },
      explanation: {
        en: 'Java records provide complete immutable entity modeling, automatically synthesizing accessors and equality dunders.',
        bn: 'রেকর্ড লেখার সাথে সাথে কম্পাইলার কনস্ট্রাক্টর ও এক্সেসর সহ সম্পূর্ণ অবজেক্ট মডেল তৈরি করে দেয়।'
      }
    },
    {
      id: 'interface-default-method-diamond-problem-ex4',
      kind: 'mcq',
      topic: 'interface-default-method-conflict-resolution',
      question: {
        en: 'How does a Java class resolve conflicting default method implementations when implementing two interfaces A and B that declare identical default void ping()?',
        bn: 'দুটি ইন্টারফেস A এবং B উভয়েই একই নামের default void ping() মেথড ধারণ করলে চাইল্ড ক্লাস কীভাবে এই সংঘাত মেটায়?'
      },
      options: [
        {
          en: 'The implementing class MUST explicitly override ping() and choose an implementation or provide its own: A.super.ping();',
          bn: 'চাইল্ড ক্লাসকে অবশ্যই ping() মেথডটি ওভাররাইড করতে হবে এবং নিজস্ব কোড বা A.super.ping() দিয়ে সমাধান করতে হবে'
        },
        {
          en: 'Java randomly selects one of the default methods at runtime',
          bn: 'জাভা রানটাইমে এলোমেলোভাবে যেকোনো একটি মেথড বেছে নেয়'
        },
        {
          en: 'The compiler deletes both interfaces from disk',
          bn: 'কম্পাইলার ডিস্ক থেকে উভয় ইন্টারফেস মুছে ফেলে'
        },
        {
          en: 'The computer restarts immediately',
          bn: 'কম্পিউটার সাথে সাথে রিস্টার্ট হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Java forces the implementing class to disambiguate interface collisions explicitly via overriding.',
        bn: 'ইন্টারফেসের সংঘাত মেটাতে জাভা চাইল্ড ক্লাসকে স্পষ্টভাবে মেথডটি ওভাররাইড করতে বাধ্য করে।'
      },
      explanation: {
        en: 'When default methods collide, the class must override the method and explicitly call Interface.super.method() or supply custom logic.',
        bn: 'উভয় ইন্টারফেসে একই মেথড থাকলে চাইল্ড ক্লাসে ওভাররাইড করে সুনির্দিষ্ট সমাধান লিখে দিতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-classes-and-the-object',
    title: {
      en: 'Java OOP, Records and Interfaces Quiz',
      bn: 'জাভা OOP, রেকর্ডস এবং ইন্টারফেস কুইজ'
    },
    questions: [
      {
        id: 'quiz-sealed-classes-permitted-subclasses',
        kind: 'mcq',
        topic: 'sealed-classes-permits-clause',
        question: {
          en: 'What architectural guarantee do "sealed" classes (introduced in Java 17) provide to class hierarchies?',
          bn: 'জাভা ১৭ এ যুক্ত হওয়া "sealed" ক্লাস ইনহেরিটেন্স হায়ারার্কির ক্ষেত্রে কোন স্থাপত্যিক নিশ্চয়তা দেয়?'
        },
        options: [
          {
            en: 'They restrict which specific subclasses are allowed to extend or implement them using the "permits" clause, creating closed domain models',
            bn: 'তারা "permits" ক্লজ দিয়ে নির্দিষ্ট করে দেয় কোন কোন ক্লাস তাদের extend করতে পারবে, ফলে একটি নিয়ন্ত্রিত ডোমেন মডেল নিশ্চিত হয়'
          },
          {
            en: 'They encrypt the bytecode on disk',
            bn: 'তারা ডিস্কে থাকা বাইটকোড এনক্রিপ্ট করে'
          },
          {
            en: 'They make all class methods static automatically',
            bn: 'তারা ক্লাসের সব মেথডকে স্বয়ংক্রিয়ভাবে স্ট্যাটিক বানিয়ে ফেলে'
          },
          {
            en: 'Sealed classes cannot have any constructors',
            bn: 'সিলড ক্লাসে কোনো কনস্ট্রাক্টর থাকতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sealed classes define an explicit whitelist of permitted inheritor subclasses.',
          bn: 'সিলড ক্লাস সুনির্দিষ্ট অনুমোদিত সাবক্লাসের তালিকা কঠোরভাবে নির্ধারণ করে দেয়।'
        },
        explanation: {
          en: 'Sealed classes empower pattern matching by guaranteeing the compiler knows every possible subclass branch exhaustively.',
          bn: 'সিলড ক্লাস কম্পাইলারকে নিশ্চিত করে যে কোন কোন সাবক্লাস বিদ্যমান, ফলে প্যাটার্ন ম্যাচিং অত্যন্ত নির্ভুল হয়।'
        }
      },
      {
        id: 'quiz-abstract-class-vs-interface-state',
        kind: 'mcq',
        topic: 'abstract-class-vs-interface-state',
        question: {
          en: 'What fundamental state capability distinguishes an Abstract Class from an Interface in Java?',
          bn: 'স্টেট বা ডেটা সংরক্ষণের ক্ষেত্রে জাভাতে অ্যাবস্ট্রাক্ট ক্লাস এবং ইন্টারফেসের মধ্যে মৌলিক পার্থক্য কী?'
        },
        options: [
          {
            en: 'An abstract class can declare non-final instance fields (mutable state) and constructors; an interface cannot hold mutable instance state',
            bn: 'অ্যাবস্ট্রাক্ট ক্লাসে নন-ফাইনাল ইনস্ট্যান্স ভেরিয়েবল (পরিবর্তনশীল ডেটা) ও কনস্ট্রাক্টর থাকতে পারে; ইন্টারফেসে কোনো অবজেক্ট স্টেট থাকতে পারে না'
          },
          {
            en: 'Interfaces can allocate heap memory directly without classes',
            bn: 'ইন্টারফেস ক্লাস ছাড়াই সরাসরি হিপ মেমোরি নিতে পারে'
          },
          {
            en: 'Abstract classes cannot declare methods',
            bn: 'অ্যাবস্ট্রাক্ট ক্লাসে কোনো মেথড লেখা যায় না'
          },
          {
            en: 'There is zero difference; they are exact aliases',
            bn: 'তাদের মধ্যে কোনো পার্থক্য নেই; তারা হুবহু এক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Abstract classes can hold mutable object fields and state; interface variables are strictly public static final constants.',
          bn: 'অ্যাবস্ট্রাক্ট ক্লাসে নিজস্ব প্রপার্টি ও স্টেট থাকতে পারে; ইন্টারফেসের ভেরিয়েবল কেবল কনস্ট্যান্ট হয়।'
        },
        explanation: {
          en: 'Abstract classes manage instance state through constructors and fields, while interfaces define pure behavioral contracts.',
          bn: 'অ্যাবস্ট্রাক্ট ক্লাস অবজেক্টের অভ্যন্তরীণ স্টেট ধরে রাখতে পারে, কিন্তু ইন্টারফেস কেবল মেথডের চুক্তি নির্ধারণ করে।'
        }
      },
      {
        id: 'quiz-equals-and-hashcode-contract',
        kind: 'mcq',
        topic: 'equals-hashcode-contract',
        question: {
          en: 'Why must a class always override hashCode() whenever it overrides equals() in Java?',
          bn: 'জাভাতে equals() মেথড ওভাররাইড করলে একই সাথে hashCode() মেথডটিও ওভাররাইড করা আবশ্যক কেন?'
        },
        options: [
          {
            en: 'If two objects are equal according to equals(), they MUST return the identical integer hashCode(), or hash-based collections (HashMap, HashSet) will fail to locate them',
            bn: 'equals() অনুযায়ী দুটি অবজেক্ট সমান হলে তাদের hashCode() এর মানও অবশ্যই সমান হতে হবে, অন্যথায় HashMap বা HashSet এ অবজেক্ট খুঁজে পাওয়া যাবে না'
          },
          {
            en: 'The Java compiler crashes with a fatal error if hashCode is missing',
            bn: 'hashCode না থাকলে কম্পাইলার সাথে সাথে ক্র্যাশ করে'
          },
          {
            en: 'hashCode encrypts the object password',
            bn: 'hashCode অবজেক্টের পাসওয়ার্ড এনক্রিপ্ট করে'
          },
          {
            en: 'It increases network speed by 20 percent',
            bn: 'এটি নেটওয়ার্ক গতি ২০ শতাংশ বাড়িয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Equal objects must produce equal hash codes for hash buckets to function correctly.',
          bn: 'হ্যাশ বাকেটে সঠিক জায়গায় পৌঁছাতে সমান অবজেক্টের হ্যাশকোড অবশ্যই এক হতে হয়।'
        },
        explanation: {
          en: 'Violating the equals-hashCode contract causes HashMaps to store equal keys in different buckets, leading to silent retrieval failures.',
          bn: 'এই নিয়ম না মানলে HashMap একই অবজেক্টকে ভিন্ন বাকেটে রেখে দেয়, ফলে অবজেক্ট আর খুঁজে পাওয়া যায় না।'
        }
      },
      {
        id: 'quiz-final-keyword-methods-and-classes',
        kind: 'mcq',
        topic: 'final-keyword-semantics-java',
        question: {
          en: 'What is the architectural effect of marking a class method as "final" in Java?',
          bn: 'জাভাতে কোনো ক্লাস মেথডকে "final" ঘোষণা করলে এর স্থাপত্যিক ফলাফল কী হয়?'
        },
        options: [
          {
            en: 'It prevents any subclass from overriding or modifying the method implementation, locking its behavior',
            bn: 'এটি চাইল্ড ক্লাসকে মেথডটি ওভাররাইড বা পরিবর্তন করতে বাধা দেয় এবং এর আচরণ স্থায়ী করে দেয়'
          },
          {
            en: 'It deletes the method when the program exits',
            bn: 'প্রোগ্রাম শেষ হলে এটি মেথডটি মুছে ফেলে'
          },
          {
            en: 'It makes the method execute 10 times faster automatically',
            bn: 'এটি মেথডটিকে স্বয়ংক্রিয়ভাবে ১০ গুণ দ্রুত চালায়'
          },
          {
            en: 'It forces the method to return integer 0',
            bn: 'এটি মেথডটিকে সর্বদা ০ রিটার্ন করতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The final keyword locks classes from extension and methods from overriding.',
          bn: 'final কিওয়ার্ড মেথডের ওভাররাইড এবং ক্লাসের পরিবর্ধন সম্পূর্ণ বন্ধ করে দেয়।'
        },
        explanation: {
          en: 'Final methods cannot be overridden, preserving security-sensitive algorithms and design contracts against unintended tampering.',
          bn: 'final মেথড কোনো চাইল্ড ক্লাস দ্বারা পরিবর্তন করা যায় না, ফলে মূল লজিক সম্পূর্ণ সুরক্ষিত থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'collections-and-the-list',
    title: {
      en: 'The Collections Framework: Lists, Sets & HashMaps',
      bn: 'কালেকশনস ফ্রেমওয়ার্ক: লিস্ট, সেট এবং হ্যাশম্যাপ'
    }
  }
};
