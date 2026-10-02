import type { Lesson } from '../../../lib/types';

export const ValsAndTheDataLesson: Lesson = {
  slug: 'vals-and-the-data',
  tech: 'kotlin',
  title: {
    en: 'Immutability (val/var) & Data Classes',
    bn: 'ইমিউটেবিলিটি (val/var) এবং ডেটা ক্লাস'
  },
  summary: {
    en: 'Master immutability and boilerplate-free data modeling in Kotlin. Contrast read-only val against mutable var, understand compiler synthesized methods for data classes (equals, hashCode, toString, copy, componentN), leverage immutable state copying for functional architectures, and unpack properties via positional destructuring.',
    bn: 'Kotlin-এ ইমিউটেবিলিটি এবং বয়লারপ্লেটহীন ডেটা মডেলিং আয়ত্ত করুন। রিড-অনলি val বনাম পরিবর্তনশীল var-এর পার্থক্য, ডেটা ক্লাসের স্বয়ংক্রিয় মেথড (equals, hashCode, toString, copy, componentN), ফাংশনাল আর্কিটেকচারে copy() মেথড দিয়ে স্টেট আপডেট এবং পজিশনাল ডিস্ট্রাকচারিং।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'immutability-val-var-heading',
      text: {
        en: 'Immutability (val vs var) and Data Modeling Philosophy',
        bn: 'ইমিউটেবিলিটি (val বনাম var) এবং ডেটা মডেলিং দর্শন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Uncontrolled state mutation across concurrent threads is the primary catalyst for race conditions and corrupted data. In Kotlin (JetBrains\' modern statically typed programming language), architectural discipline begins with immutability. Variables declared with "val" establish read-only references whose bindings cannot change after initial assignment. Conversely, "var" declares mutable variables whose values can be reassigned over time. Modern Kotlin engineering dictates defaulting to val everywhere, introducing var only when local loops or performance-critical state accumulators strictly require mutation.',
        bn: 'একাধিক থ্রেডে অনিয়ন্ত্রিতভাবে ডেটা পরিবর্তন হওয়া প্রোগ্রামিংয়ে ডেটা রেস এবং মেমোরি ত্রুটির মূল কারণ। কিন্তু Kotlin (জেটব্রেইন্সের তৈরি আধুনিক স্ট্যাটিক্যালি টাইপড প্রোগ্রামিং ভাষা)-এ সফটওয়্যার আর্কিটেকচার গড়ে ওঠে ইমিউটেবিলিটি বা অপরিবর্তনীয়তার ওপর। "val" দিয়ে ঘোষিত ভ্যারিয়েবলগুলো মূলত রিড-অনলি রেফারেন্স তৈরি করে, যার মান একবার সেট করার পর আর কখনো বদলানো যায় না। অপরদিকে "var" দিয়ে পরিবর্তনশীল ভ্যারিয়েবল তৈরি করা হয় যা ইচ্ছামতো নতুন মানে আপডেট করা যায়। আধুনিক Kotlin ইঞ্জিনিয়ারিংয়ের প্রধান নিয়ম হলো সর্বদা val ব্যবহার করা এবং কেবল চরম প্রয়োজনেই var বেছে নেওয়া।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Anatomy of a Kotlin data class: The compiler synthesizes equals, hashCode, toString, copy(), and positional componentN() functions automatically.',
        bn: 'চিত্র ১: Kotlin ডেটা ক্লাসের অভ্যন্তরীণ গঠন: কম্পাইলার স্বয়ংক্রিয়ভাবে equals, hashCode, toString, copy() এবং componentN() মেথড তৈরি করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">KOTLIN DATA CLASS SYNTHESIZED METHODS &amp; COPY</text>

  <!-- Declaration Code Banner -->
  <g transform="translate(35, 55)">
    <rect width="770" height="42" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="25" y="26" fill="#38bdf8" font-size="12" font-family="monospace">data class User(val id: Int, val name: String, val email: String)</text>
  </g>

  <!-- Synthesized Pillars -->
  <g transform="translate(35, 115)">
    <!-- 1. Structural Equality -->
    <rect x="0" y="0" width="240" height="185" rx="8" fill="#1e293b" stroke="#10b981" />
    <rect x="0" y="0" width="240" height="28" rx="8" fill="#059669" />
    <text x="120" y="19" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Structural Equality</text>

    <text x="15" y="55" fill="#34d399" font-size="11" font-family="monospace">equals() &amp; hashCode()</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="10" font-family="sans-serif">Compares property values</text>
    <text x="15" y="100" fill="#cbd5e1" font-size="10" font-family="sans-serif">rather than memory addresses</text>
    <text x="15" y="130" fill="#38bdf8" font-size="10" font-family="monospace">u1 == u2 // true</text>
    <text x="15" y="155" fill="#94a3b8" font-size="9" font-family="sans-serif">Hash table ready (Set, Map)</text>
  </g>

  <g transform="translate(300, 115)">
    <!-- 2. Non-Destructive Copy -->
    <rect x="0" y="0" width="240" height="185" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect x="0" y="0" width="240" height="28" rx="8" fill="#d97706" />
    <text x="120" y="19" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Non-Destructive copy()</text>

    <text x="15" y="55" fill="#fbbf24" font-size="11" font-family="monospace">u1.copy(email = "new")</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="10" font-family="sans-serif">Spawns cloned instance with</text>
    <text x="15" y="100" fill="#cbd5e1" font-size="10" font-family="sans-serif">specific property mutations</text>
    <text x="15" y="130" fill="#38bdf8" font-size="10" font-family="sans-serif">Original u1 remains immutable</text>
    <text x="15" y="155" fill="#94a3b8" font-size="9" font-family="sans-serif">Functional state management</text>
  </g>

  <g transform="translate(565, 115)">
    <!-- 3. Destructuring componentN -->
    <rect x="0" y="0" width="240" height="185" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect x="0" y="0" width="240" height="28" rx="8" fill="#9333ea" />
    <text x="120" y="19" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Destructuring: componentN()</text>

    <text x="15" y="55" fill="#c084fc" font-size="11" font-family="monospace">val (id, name) = u1</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="10" font-family="sans-serif">Calls component1(), component2()</text>
    <text x="15" y="100" fill="#cbd5e1" font-size="10" font-family="sans-serif">Unpacks properties positionally</text>
    <text x="15" y="130" fill="#38bdf8" font-size="10" font-family="monospace">component1() -&gt; id</text>
    <text x="15" y="150" fill="#38bdf8" font-size="10" font-family="monospace">component2() -&gt; name</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'data-classes-and-copy-heading',
      text: {
        en: 'Data Classes, Synthesized Boilerplate, and Destructuring',
        bn: 'ডেটা ক্লাস, সিন্থেসাইজড বয়লারপ্লেট এবং ডিস্ট্রাকচারিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In legacy Java, modeling a simple entity required 50 to 100 lines of ceremonial code spanning getters, setters, equals, hashCode, and toString methods. In Kotlin, prepending the "data" modifier to a class declaration collapses this entire ritual into 1 elegant line. The compiler automatically synthesizes structural "equals()" and "hashCode()" based exclusively on properties declared in the primary constructor. Additionally, data classes receive a human-readable "toString()" implementation and a powerful "copy()" method. The copy method allows developers to create modified instances while keeping the original object completely immutable, forming the bedrock of modern reactive unidirectional data flows (like Redux or MVI).',
        bn: 'প্রথাগত জাভায় একটি সাধারণ অবজেক্ট তৈরি করতে ৫০ থেকে ১০০ লাইনের গেটার, সেটার, equals, hashCode এবং toString লিখতে হতো। কিন্তু Kotlin-এ ক্লাসের নামের আগে কেবল "data" শব্দটি লিখে পুরো কাজটিকে মাত্র ১ লাইনে সম্পন্ন করা যায়। প্রাথমিক কনস্ট্রাক্টরে থাকা প্রোপার্টির ওপর ভিত্তি করে কম্পাইলার স্বয়ংক্রিয়ভাবে কাঠামোগত "equals()" এবং "hashCode()" তৈরি করে। তাছাড়া ডেটা ক্লাস একটি সুন্দর "toString()" এবং অত্যন্ত শক্তিশালী "copy()" মেথড লাভ করে। মূল অবজেক্টটিকে সম্পূর্ণ অপরিবর্তিত রেখে নতুন মানসহ নতুন অবজেক্ট তৈরির কাজে copy মেথড অপরিহার্য ভূমিকা পালন করে, যা ইউনিডিরেকশনাল ডেটা ফ্লোর (যেমন MVI বা Redux) মূল স্তম্ভ।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Kotlin Data Class synthesized methods: structural equality, copy() mutation, and positional destructuring.',
        bn: 'Kotlin ডেটা ক্লাসের তৈরি মেথড: কাঠামোগত সমতা, copy() মিউটেশন এবং পজিশনাল ডিস্ট্রাকচারিংয়ের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Kotlin Data Class Synthesized Methods and Immutability

export class SimulatedKotlinDataUser {
  // Primary constructor properties
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly email: string
  ) {}

  // 1. Synthesized structural equality (equals & hashCode)
  public equals(other: unknown): boolean {
    if (this === other) return true; // Referential equality ===
    if (!(other instanceof SimulatedKotlinDataUser)) return false;
    // Structural equality == compares all primary constructor properties
    return (
      this.id === other.id &&
      this.name === other.name &&
      this.email === other.email
    );
  }

  // 2. Synthesized human-readable toString()
  public toString(): string {
    return 'User(id=' + this.id + ', name="' + this.name + '", email="' + this.email + '")';
  }

  // 3. Synthesized non-destructive copy() method
  public copy(overrides: Partial<{ id: number; name: string; email: string }> = {}): SimulatedKotlinDataUser {
    return new SimulatedKotlinDataUser(
      overrides.id !== undefined ? overrides.id : this.id,
      overrides.name !== undefined ? overrides.name : this.name,
      overrides.email !== undefined ? overrides.email : this.email
    );
  }

  // 4. Synthesized positional componentN() functions for destructuring
  public component1(): number { return this.id; }
  public component2(): string { return this.name; }
  public component3(): string { return this.email; }
}

// Execution Demonstration
const userOriginal = new SimulatedKotlinDataUser(101, 'Tamim', 'tamim@example.com');
const userDuplicate = new SimulatedKotlinDataUser(101, 'Tamim', 'tamim@example.com');

console.log('Original User String:', userOriginal.toString());
console.log('Referential Equality (===):', userOriginal === userDuplicate); // false (different heap memory)
console.log('Structural Equality (==):', userOriginal.equals(userDuplicate)); // true (same property values)

// Non-destructive copy mutation
const userUpdated = userOriginal.copy({ email: 'tamim.new@example.com' });
console.log('Updated Cloned User:', userUpdated.toString());
console.log('Original User Kept Untouched:', userOriginal.toString());

// Positional destructuring: val (id, name, email) = userUpdated
const id = userUpdated.component1();
const name = userUpdated.component2();
const email = userUpdated.component3();
console.log('Destructured Values:', id, name, email);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Immutability (val)',
          def: {
            en: 'Read-only variable declaration whose assigned reference cannot be overwritten after creation.',
            bn: 'রিড-অনলি ভ্যারিয়েবল যার বরাদ্দকৃত মান বা রেফারেন্স তৈরির পর আর বদলানো যায় না।'
          }
        },
        {
          term: 'Data Class',
          def: {
            en: 'Class modifier automatically synthesizing equals(), hashCode(), toString(), copy(), and componentN() methods.',
            bn: 'ক্লাস যা কনস্ট্রাক্টরের ওপর ভিত্তি করে স্বয়ংক্রিয়ভাবে গুরুত্বপূর্ণ সব ইউটিলিটি মেথড তৈরি করে।'
          }
        },
        {
          term: 'Non-Destructive Copy',
          def: {
            en: 'Technique creating a new object clone with modified fields while leaving the original instance immutable.',
            bn: 'মূল অবজেক্ট অপরিবর্তিত রেখে কেবল নির্দিষ্ট মান বদলে নতুন অবজেক্ট তৈরির আধুনিক কৌশল।'
          }
        },
        {
          term: 'Destructuring Declaration',
          def: {
            en: 'Syntax unpacking multiple properties from an object into local variables via componentN() calls.',
            bn: 'সিনট্যাক্স যা componentN() মেথডের মাধ্যমে অবজেক্ট থেকে একসাথে একাধিক মান আলাদা ভ্যারিয়েবলে বের করে আনে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'val-vs-var-reference-mutability-ex1',
      kind: 'mcq',
      topic: 'val-vs-var-immutability-difference',
      question: {
        en: 'What is the exact technical difference between "val" and "var" declarations in Kotlin?',
        bn: 'Kotlin-এ "val" এবং "var" ঘোষণার মধ্যে সুনির্দিষ্ট প্রযুক্তিগত পার্থক্য কী?'
      },
      options: [
        {
          en: '"val" creates an immutable read-only reference that cannot be reassigned; "var" creates a mutable variable that can be reassigned freely',
          bn: '"val" একটি অপরিবর্তনীয় রিড-অনলি রেফারেন্স তৈরি করে যা পরিবর্তন করা যায় না; আর "var" একটি পরিবর্তনশীল ভ্যারিয়েবল তৈরি করে যা যতখুশি রি-অ্যাসাইন করা যায়'
        },
        {
          en: '"val" is only allowed inside Android View components',
          bn: '"val" কেবল অ্যান্ড্রয়েড ভিউ উপাদানের ভেতরে অনুমোদিত'
        },
        {
          en: '"var" converts all floating point numbers into integers',
          bn: '"var" সমস্ত ফ্লোটিং পয়েন্ট সংখ্যাকে পূর্ণসংখ্যায় রূপান্তর করে'
        },
        {
          en: 'There is zero difference between val and var in compiled bytecode',
          bn: 'কম্পাইল্ড বাইটকোডে val এবং var-এর মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'val is read-only (like final in Java); var is mutable.',
        bn: 'val মান ধরে রাখে অপরিবর্তনীয়ভাবে, var নতুন মান গ্রহণে সক্ষম।'
      },
      explanation: {
        en: 'Using val guarantees reference immutability, making code easier to reason about and eliminating unintended state mutations across concurrent threads.',
        bn: 'এর ফলে কোডের নিরাপত্তা বৃদ্ধি পায় এবং একাধিক থ্রেডের মধ্যে মান নষ্ট হওয়ার ঝুঁকি থাকে না।'
      }
    },
    {
      id: 'data-class-synthesized-methods-ex2',
      kind: 'mcq',
      topic: 'data-class-compiler-synthesized-methods',
      question: {
        en: 'Which of the following methods does the Kotlin compiler automatically synthesize for a class declared with the "data" modifier?',
        bn: '"data" মডিফায়ার দিয়ে ঘোষিত একটি ক্লাসের জন্য Kotlin কম্পাইলার স্বয়ংক্রিয়ভাবে নিচের কোন মেথডগুলো তৈরি করে?'
      },
      options: [
        {
          en: 'equals(), hashCode(), toString(), copy(), and positional componentN() functions corresponding to primary constructor properties',
          bn: 'প্রাথমিক কনস্ট্রাক্টরের ওপর ভিত্তি করে equals(), hashCode(), toString(), copy() এবং ক্রমানুসারে componentN() ফাংশনসমূহ'
        },
        {
          en: 'An SQL database migration script',
          bn: 'একটি এসকিউএল ডাটাবেজ মাইগ্রেশন স্ক্রিপ্ট'
        },
        {
          en: 'An HTTP web server listening on port 8080',
          bn: 'পোর্ট ৮০৮০-এ চলমান একটি এইচটিটিপি ওয়েব সার্ভার'
        },
        {
          en: 'A method that deletes all files from local storage',
          bn: 'এমন একটি মেথড যা লোকাল স্টোরেজ থেকে সমস্ত ফাইল মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Data classes synthesize equality, string representation, copying, and destructuring.',
        bn: 'ডেটা ক্লাস সমতা যাচাই, টেক্সট প্রদর্শন, ক্লোনিং এবং ডিস্ট্রাকচারিং মেথড তৈরি করে।'
      },
      explanation: {
        en: 'Data classes eliminate the verbose boilerplate traditionally written in Java POJOs, providing full value-object semantics in a single line of declaration.',
        bn: 'ফলে দীর্ঘ কোড না লিখে এক লাইনেই স্বয়ংসম্পূর্ণ ডেটা অবজেক্ট পাওয়া যায়।'
      }
    },
    {
      id: 'non-destructive-copy-utility-ex3',
      kind: 'mcq',
      topic: 'non-destructive-copy-method-usage',
      question: {
        en: 'Why is the generated "copy()" method on Kotlin data classes crucial for functional state management architectures?',
        bn: 'ফাংশনাল স্টেট ম্যানেজমেন্ট আর্কিটেকচারের জন্য Kotlin ডেটা ক্লাসে তৈরি হওয়া "copy()" মেথডটি কেন এত গুরুত্বপূর্ণ?'
      },
      options: [
        {
          en: 'It enables non-destructive state updates by creating a new instance with selective property changes while preserving the immutability of the original instance',
          bn: 'এটি মূল অবজেক্টকে অপরিবর্তিত রেখে কেবল নির্দিষ্ট মান বদলে নতুন অবজেক্ট তৈরির সুযোগ দেয়, যা ইমিউটেবল স্টেট বজায় রাখে'
        },
        {
          en: 'It reduces the battery consumption of the mobile device by 50 percent',
          bn: 'এটি মোবাইল ডিভাইসের ব্যাটারি খরচ ৫০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'It saves the object directly into an encrypted SQLite file',
          bn: 'এটি অবজেক্টটিকে সরাসরি একটি এনক্রিপ্ট করা SQLite ফাইলে সংরক্ষণ করে'
        },
        {
          en: 'The copy method was deprecated in Kotlin 1.5',
          bn: 'Kotlin ১.৫ সংস্করণে copy মেথড বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'copy() produces a new instance without mutating the existing one.',
        bn: 'আগের স্টেট নষ্ট না করে নতুন স্টেট বানাতে এটি সবচেয়ে আধুনিক উপায়।'
      },
      explanation: {
        en: 'In modern architectures like MVI and Redux, UI state must remain strictly immutable. The copy() method makes emitting new state states concise and bug-free.',
        bn: 'এর মাধ্যমে অ্যাপ্লিকেশনের স্টেট নিরাপদে এক ধাপ থেকে পরের ধাপে নেওয়া যায়।'
      }
    },
    {
      id: 'destructuring-declarations-componentn-ex4',
      kind: 'mcq',
      topic: 'destructuring-declarations-componentn-mapping',
      question: {
        en: 'How does Kotlin compile destructuring syntax like "val (id, name) = user" under the hood?',
        bn: 'Kotlin অভ্যন্তরীণভাবে "val (id, name) = user"-এর মতো ডিস্ট্রাকচারিং সিনট্যাক্স কীভাবে কম্পাইল করে?'
      },
      options: [
        {
          en: 'It translates the statement into sequential calls to "user.component1()" and "user.component2()" based on the property order declared in the primary constructor',
          bn: 'এটি প্রাথমিক কনস্ট্রাক্টরের ক্রম অনুসারে স্টেটমেন্টটিকে "user.component1()" এবং "user.component2()"-এর ধারাবাহিক কলে রূপান্তর করে'
        },
        {
          en: 'It parses the variable names using an external JavaScript engine',
          bn: 'এটি একটি এক্সটার্নাল জাভাস্ক্রিপ্ট ইঞ্জিন দিয়ে ভ্যারিয়েবলের নাম পার্স করে'
        },
        {
          en: 'It looks up properties in an SQL database table',
          bn: 'এটি একটি এসকিউএল ডাটাবেজ টেবিলে প্রোপার্টি খোঁজে'
        },
        {
          en: 'Destructuring requires an internet connection to compile',
          bn: 'ডিস্ট্রাকচারিং কম্পাইল করার জন্য ইন্টারনেট সংযোগ প্রয়োজন'
        }
      ],
      answer: 0,
      hint: {
        en: 'Destructuring maps positionally to component1(), component2(), etc.',
        bn: 'পজিশন অনুসারে component1() এবং component2() ডেকে মানগুলো বসানো হয়।'
      },
      explanation: {
        en: 'Destructuring is positional, not name-based. The first variable receives component1(), the second component2(), reflecting the primary constructor order.',
        bn: 'তাই নামের মিলের চেয়ে কনস্ট্রাক্টরের পজিশন অনুসারে মান নির্ধারিত হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-vals-and-the-data',
    title: {
      en: 'Kotlin Immutability & Data Classes Quiz',
      bn: 'Kotlin ইমিউটেবিলিটি এবং ডেটা ক্লাস কুইজ'
    },
    questions: [
      {
        id: 'quiz-primary-constructor-data-class-rule',
        kind: 'mcq',
        topic: 'data-class-primary-constructor-val-var-rule',
        question: {
          en: 'What structural requirement must all parameters declared in a Kotlin data class primary constructor satisfy?',
          bn: 'একটি Kotlin ডেটা ক্লাসের প্রাথমিক কনস্ট্রাক্টরে ঘোষিত সমস্ত প্যারামিটারকে কোন কাঠামোগত শর্ত পূরণ করতে হয়?'
        },
        options: [
          {
            en: 'Every parameter must be explicitly marked with either "val" or "var" so the compiler can synthesize properties and utility methods',
            bn: 'প্রতিটি প্যারামিটারের আগে স্পষ্টভাবে "val" অথবা "var" লেখা থাকতে হবে যাতে কম্পাইলার প্রোপার্টি ও ইউটিলিটি মেথড তৈরি করতে পারে'
          },
          {
            en: 'They must all be 32-bit integers',
            bn: 'তাদের সবাইকে অবশ্যই ৩২-বিট পূর্ণসংখ্যা হতে হবে'
          },
          {
            en: 'Parameters must be marked with the private keyword only',
            bn: 'প্যারামিটারগুলোকে কেবল প্রাইভেট কি-ওয়ার্ড দিয়ে চিহ্নিত করতে হবে'
          },
          {
            en: 'Data classes cannot accept constructor parameters',
            bn: 'ডেটা ক্লাস কোনো কনস্ট্রাক্টর প্যারামিটার গ্রহণ করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Data class primary constructor parameters must be val or var.',
          bn: 'প্রোপার্টি হিসেবে তৈরির জন্য val বা var লেখা বাধ্যতামূলক।'
        },
        explanation: {
          en: 'The compiler needs constructor parameters to be real properties to synthesize equals, hashCode, and copy. Omitting val/var causes a compile-time error.',
          bn: 'অন্যথায় কম্পাইলার সেগুলোর ওপর ভিত্তি করে মেথড তৈরি করতে পারে না।'
        }
      },
      {
        id: 'quiz-data-class-inheritance-limitation',
        kind: 'mcq',
        topic: 'data-class-final-inheritance-restriction',
        question: {
          en: 'Can a Kotlin data class be declared as "open" to permit subclassing and inheritance?',
          bn: 'সাবক্লাসিং বা ইনহেরিটেন্সের সুবিধার জন্য একটি Kotlin ডেটা ক্লাসকে কি "open" ঘোষণা করা সম্ভব?'
        },
        options: [
          {
            en: 'No, data classes are final by design and cannot be open, abstract, sealed, or inner, preserving deterministic equality semantics',
            bn: 'না, ডেটা ক্লাস স্বভাবগতভাবেই final এবং এদের open, abstract, sealed বা inner ঘোষণা করা যায় না, যা সমতার নিখুঁত হিসাব রক্ষা করে'
          },
          {
            en: 'Yes, all data classes in Kotlin are open by default',
            bn: 'হ্যাঁ, Kotlin-এর সমস্ত ডেটা ক্লাস ডিফল্টভাবেই open থাকে'
          },
          {
            en: 'Only if the data class contains more than 5 properties',
            bn: 'কেবল তখনই যদি ডেটা ক্লাসে ৫ টির বেশি প্রোপার্টি থাকে'
          },
          {
            en: 'Data classes can only be inherited by interfaces',
            bn: 'ডেটা ক্লাস কেবল ইন্টারফেস দ্বারা ইনহেরিট হতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Data classes cannot be open or inherited from.',
          bn: 'সমতা ও রূপান্তরের নির্ভরযোগ্যতার স্বার্থে ডেটা ক্লাসকে final রাখা হয়েছে।'
        },
        explanation: {
          en: 'Inheritance breaks the symmetric contract of equals() when subclasses add new properties. Kotlin enforces that data classes remain final to prevent subtle equality bugs.',
          bn: 'সাবক্লাসে নতুন প্রোপার্টি যোগ হলে সমতা নষ্ট হয়, তাই ডেটা ক্লাসে ইনহেরিটেন্স নিষিদ্ধ।'
        }
      },
      {
        id: 'quiz-structural-vs-referential-equality',
        kind: 'mcq',
        topic: 'structural-vs-referential-equality-operators',
        question: {
          en: 'What is the precise distinction between "==" and "===" when comparing objects in Kotlin?',
          bn: 'Kotlin-এ অবজেক্টের তুলনা করার সময় "==" এবং "==="-এর মধ্যে সুনির্দিষ্ট পার্থক্য কী?'
        },
        options: [
          {
            en: '"==" checks structural equality by delegating to equals() safely with null-checks; "===" checks referential equality (whether both references point to the exact same memory address)',
            bn: '"==" নিরাপদ নাল চেক সহ equals() মেথডের মাধ্যমে কাঠামোগত মান তুলনা করে; আর "===" রেফারেন্সিয়াল সমতা বা উভয় অবজেক্ট হুবহু একই মেমোরি ঠিকানায় অবস্থিত কিনা তা পরীক্ষা করে'
          },
          {
            en: '"==" compares the length of variable names',
            bn: '"==" ভ্যারিয়েবলের নামের দৈর্ঘ্য তুলনা করে'
          },
          {
            en: '"===" converts both objects into JSON strings',
            bn: '"===" উভয় অবজেক্টকে জেএসন স্ট্রিংয়ে রূপান্তর করে'
          },
          {
            en: 'There is zero difference between == and === in Kotlin',
            bn: 'Kotlin-এ == এবং === এর মধ্যে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: '== checks values (equals()); === checks identity (memory pointer).',
          bn: '== মান সমান কিনা দেখে, আর === অবজেক্টটি একই মেমোরিতে আছে কিনা দেখে।'
        },
        explanation: {
          en: 'Unlike Java where == tests reference identity, Kotlin reserves == for structural content equality and provides === for checking physical heap pointer identity.',
          bn: 'ফলে জাভার বিভ্রান্তি দূর হয়ে কোড পড়া ও বোঝা অনেক সহজ হয়।'
        }
      },
      {
        id: 'quiz-custom-getters-on-val-properties',
        kind: 'mcq',
        topic: 'custom-getters-val-computed-properties',
        question: {
          en: 'Can a read-only "val" property in Kotlin return different values on successive calls?',
          bn: 'Kotlin-এ একটি রিড-অনলি "val" প্রোপার্টি কি পর পর কলে ভিন্ন ভিন্ন মান ফেরত দিতে পারে?'
        },
        options: [
          {
            en: 'Yes, if the val defines a custom getter (e.g. "val isExpired: Boolean get() = System.currentTimeMillis() > expirationTimestamp")',
            bn: 'হ্যাঁ, যদি val প্রোপার্টিটিতে একটি কাস্টম গেটার সংজ্ঞায়িত থাকে (যেমন "val isExpired: Boolean get() = System.currentTimeMillis() > expirationTimestamp")'
          },
          {
            en: 'No, val properties are hard-coded constants that can never calculate dynamic values',
            bn: 'না, val প্রোপার্টি হলো ফিক্সড ধ্রুবক যা কখনোই ডায়নামিক মান হিসেব করতে পারে না'
          },
          {
            en: 'Only when running on 64-bit Linux servers',
            bn: 'কেবল ৬৪-বিট লিনাক্স সার্ভারে চলার সময়'
          },
          {
            en: 'Custom getters were removed in Kotlin 2.0',
            bn: 'Kotlin ২.০ সংস্করণে কাস্টম গেটার বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'A val with a custom getter is computed on every property access.',
          bn: 'কাস্টম গেটার থাকলে প্রতিবার ডাকার সময় নতুন করে হিসেব হতে পারে।'
        },
        explanation: {
          en: 'A "val" means the reference is read-only (has no setter), not that it is a compile-time constant. A custom getter recalculates its expression on every access.',
          bn: 'val মানে এতে নতুন মান সরাসরি সেট করা যায় না, কিন্তু গেটার দিয়ে তা ডায়নামিক হতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'lambdas-and-the-receiver',
    title: {
      en: 'High-Order Functions & Lambdas with Receiver',
      bn: 'হায়ার-অর্ডার ফাংশন এবং ল্যাম্বডা উইথ রিসিভার'
    }
  }
};
