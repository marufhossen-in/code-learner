import type { Lesson } from '../../../lib/types';

export const ObjectsAndTheNewLesson: Lesson = {
  slug: 'objects-and-the-new',
  tech: 'lang-java',
  title: {
    en: 'Your First Objects: Heap Allocation & Constructors',
    bn: 'আপনার প্রথম অবজেক্ট: হিপ মেমোরি বরাদ্দ এবং কনস্ট্রাক্টর'
  },
  summary: {
    en: 'Beginner to advanced guide to Java object allocation: understand what occurs when invoking "new", trace the 3 stages of constructor field initialization, master reference equality versus logical equality, and satisfy the fundamental equals and hashCode contract.',
    bn: 'জাভা অবজেক্ট বরাদ্দের প্রাথমিক থেকে উন্নত গাইড: "new" কি-ওয়ার্ড কল করার পেছনের মেকানিজম, কনস্ট্রাক্টর ফিল্ডের ৩ টি ইনিশিয়ালাইজেশন পর্যায়, রেফারেন্স বনাম লজিক্যাল সমতা এবং equals ও hashCode এর মৌলিক চুক্তি আয়ত্ত করুন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'object-allocation-and-constructor-heading',
      text: {
        en: 'The "new" Keyword Lifecycle and Constructor Chaining',
        bn: '"new" কি-ওয়ার্ডের লাইফসাইকেল এবং কনস্ট্রাক্টর চেইনিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Java, declaring an object reference variable does not instantiate an object; it merely allocates an address pointer on the call stack. When your code invokes the "new" keyword, the Java Virtual Machine (JVM) triggers 3 sequential steps. First, the JVM calculates the required memory footprint and reserves space on the garbage-collected Heap, initializing all instance fields to their default zero values (0 for primitives, false for booleans, and null for references). Second, superclass constructors execute in ascending order through constructor chaining via "super()". Third, the explicit constructor body runs, binding caller arguments to fields and returning the newly instantiated heap reference.',
        bn: 'জাভাতে শুধুমাত্র একটি অবজেক্ট ভেরিয়েবল ঘোষণা করলেই অবজেক্ট তৈরি হয় না; এটি কল স্ট্যাকে কেবল একটি রেফারেন্স অ্যাড্রেস পয়েন্টার তৈরি করে। যখন কোডে "new" কি-ওয়ার্ড কল করা হয়, তখন জাভা ভার্চুয়াল মেশিন (JVM) ক্রমান্বয়ে ৩ টি ধাপ সম্পন্ন করে। প্রথমত, JVM প্রয়োজনীয় মেমোরি হিসেব করে গারবেজ-কালেক্টেড হিপে স্পেস বরাদ্দ করে এবং প্রতিটি ফিল্ডকে তাদের ডিফল্ট শূন্য মানে (প্রিমিটিভের জন্য ০, বুলিয়ানের জন্য false এবং রেফারেন্সের জন্য null) ইনিশিয়ালাইজ করে। দ্বিতীয়ত, "super()" এর মাধ্যমে অভিভাবক ক্লাসের কনস্ট্রাক্টরগুলো ধারাবাহিকভাবে চলে। তৃতীয়ত, লক্ষ্য কনস্ট্রাক্টরের মূল অংশটি কার্যকর হয় এবং আর্গুমেন্টগুলোকে ফিল্ডে বসিয়ে হিপ মেমোরির নতুন রেফারেন্স অ্যাড্রেসটি ফেরত দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Anatomy of Java object heap allocation: Stack reference pointer, 16-byte object header, zero-initialization, and equality verification.',
        bn: 'চিত্র ১: জাভা অবজেক্ট হিপ বরাদ্দের রূপরেখা: স্ট্যাক রেফারেন্স পয়েন্টার, ১৬-বাইট অবজেক্ট হেডার, শূন্য মান ইনিশিয়ালাইজেশন এবং সমতা যাচাই।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">JAVA OBJECT LIFECYCLE: NEW KEYWORD TO HEAP ALLOCATION</text>

  <!-- Step 1: Stack Reference -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Stack Pointer</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">Order ord = ...</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">8-byte Reference</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Points to Heap</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Stack Frame Storage</text>
  </g>

  <!-- Step 2: Heap Object Header -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Heap Object Header</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">16-byte Header</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Mark Word + Klass Word</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">GC Age &amp; Lock Metadata</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">JVM Object Overhead</text>
  </g>

  <!-- Step 3: Zero-Init to Fields -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. 3-Stage Init</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">Zero-fill (0, null)</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">super() Constructors</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">this.id = 42</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Guaranteed State</text>
  </g>

  <!-- Step 4: Equality Comparison -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Equality Check</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">== Memory Address</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">.equals() Deep Value</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">hashCode() Match</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Hash-Safe Contract</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'equals-and-hashcode-contract-heading',
      text: {
        en: 'Reference Equality versus Logical Equality: The equals and hashCode Contract',
        bn: 'রেফারেন্স সমতা বনাম লজিক্যাল সমতা: equals এবং hashCode চুক্তি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Java, the double equals operator (==) evaluates reference identity: it returns true if and only if two references point to the exact same memory address on the heap. Conversely, the equals() method defined on java.lang.Object is intended for logical equivalence. If a class overrides equals(), it must adhere to 5 contractual axioms: reflexive, symmetric, transitive, consistent, and false for null comparisons. Critically, Java mandates that if two objects are equal according to equals(), calling hashCode() on each must produce the exact same integer value. Violating this contract breaks collections like HashMap and HashSet, causing inserted objects to vanish during retrieval.',
        bn: 'জাভাতে ডাবল ইকুয়াল অপারেটর (==) রেফারেন্স মেমোরি অ্যাড্রেসের তুলনা করে: ২ টি ভেরিয়েবল হিপের ঠিক একই মেমোরি ঠিকানায় নির্দেশ করলেই কেবল এটি true রিটার্ন করে। অপরপক্ষে java.lang.Object ক্লাসের equals() মেথডটি তৈরি করা হয়েছে যৌক্তিক মানের সমতা যাচাই করার জন্য। কোনো ক্লাসে equals() ওভাররাইড করা হলে তা ৫ টি স্বতঃসিদ্ধ নিয়ম মানতে বাধ্য: রিফ্লেক্সিভ, সিমেট্রিক, ট্রানজিটিভ, কনসিস্টেন্ট এবং নাল যাচাইয়ে false প্রদান করা। সবচেয়ে গুরুত্বপূর্ণ নিয়ম হলো: equals() অনুযায়ী ২ টি অবজেক্ট সমান হলে তাদের hashCode() কল করলে অবিকল একই পূর্ণসংখ্যা মান পাওয়া বাধ্যতামূলক। এই চুক্তি ভঙ্গ করলে HashMap বা HashSet-এ ডেটা সংরক্ষণ করার পর তা আর খুঁজে পাওয়া যায় না।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Java object heap layout, zero-initialization, reference vs value equality, and hash code computation.',
        bn: 'জাভা অবজেক্ট হিপ লেআউট, শূন্য-মান ইনিশিয়ালাইজেশন, রেফারেন্স বনাম ভ্যালু সমতা এবং হ্যাশ কোড গণনার TypeScript বাস্তবায়ন।'
      },
      code: `// Simulation of Java Object Instantiation and equals/hashCode Contract

export class JavaOrderSimulator {
  public readonly id: number;
  public readonly customer: string;
  public readonly totalAmount: number;

  // Simulating constructor execution after JVM zero-initialization
  constructor(id: number, customer: string, totalAmount: number) {
    this.id = id;
    this.customer = customer;
    this.totalAmount = totalAmount;
  }

  // Logical value equality: equivalent to Java Order.equals(Object o)
  public equals(other: any): boolean {
    if (this === other) return true; // Reference identity check (==)
    if (!other || !(other instanceof JavaOrderSimulator)) return false;
    return this.id === other.id &&
           this.customer === other.customer &&
           this.totalAmount === other.totalAmount;
  }

  // Consistent 31-multiplier hash computation: equivalent to Java Objects.hash()
  public hashCode(): number {
    let hash = 17;
    hash = 31 * hash + this.id;
    for (let i = 0; i < this.customer.length; i++) {
      hash = (31 * hash + this.customer.charCodeAt(i)) | 0;
    }
    hash = (31 * hash + this.totalAmount) | 0;
    return hash;
  }
}

// Instantiating distinct heap instances with identical payload
const order1 = new JavaOrderSimulator(101, 'Alice', 250);
const order2 = new JavaOrderSimulator(101, 'Alice', 250);

console.log('Reference Equality (==):', order1 === order2); // false (distinct heap objects)
console.log('Logical Value Equality (.equals):', order1.equals(order2)); // true
console.log('Hash Code 1:', order1.hashCode());
console.log('Hash Code 2:', order2.hashCode());
console.log('Hash Codes Match:', order1.hashCode() === order2.hashCode()); // true`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'new',
          def: {
            en: 'Java keyword that triggers heap memory allocation, field zero-initialization, and constructor invocation.',
            bn: 'জাভা কি-ওয়ার্ড যা হিপ মেমোরিতে স্পেস বরাদ্দ করে, ডিফল্ট শূন্য মান বসায় এবং কনস্ট্রাক্টর চালায়।'
          }
        },
        {
          term: 'Object Header',
          def: {
            en: '16-byte metadata block stored at the beginning of every Java heap object containing the Mark Word and Klass Word.',
            bn: 'হিপে প্রতিটি জাভা অবজেক্টের শুরুতে থাকা ১৬-বাইট মেটাডেটা যাতে মার্ক ওয়ার্ড ও ক্লাস পয়েন্টার থাকে।'
          }
        },
        {
          term: 'Reference Equality',
          def: {
            en: 'Identity check performed by the == operator comparing whether two pointers reference the same memory address.',
            bn: '== অপারেটর দ্বারা মেমোরি ঠিকানার তুলনা যা দেখে দুটি ভেরিয়েবল একই অবজেক্ট নির্দেশ করছে কি না।'
          }
        },
        {
          term: 'equals and hashCode Contract',
          def: {
            en: 'Specification dictating that two objects deemed equal by equals() must produce identical integer hashCodes.',
            bn: 'জাভার নিয়ম যার শর্ত হলো equals() দিয়ে সমান প্রমাণিত দুটি অবজেক্টের হ্যাশ কোড অবিকল একই হতে হবে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'java-object-zero-initialization-ex1',
      kind: 'mcq',
      topic: 'jvm-field-zero-initialization-defaults',
      question: {
        en: 'What default value does the JVM assign to an uninitialized boolean instance variable during heap allocation?',
        bn: 'হিপ মেমোরি বরাদ্দের সময় কোনো আন-ইনিশিয়ালাইজড বুলিয়ান ইনস্ট্যান্স ভেরিয়েবলকে JVM ডিফল্টভাবে কী মান দেয়?'
      },
      options: [
        { en: 'false', bn: 'false' },
        { en: 'true', bn: 'true' },
        { en: 'null', bn: 'null' },
        { en: '0', bn: '০' }
      ],
      answer: 0,
      hint: {
        en: 'The JVM zero-initializes primitives: boolean fields become false.',
        bn: 'JVM প্রিমিটিভ ফিল্ডকে শূন্য করে: বুলিয়ান ফিল্ড ডিফল্টভাবে false পায়।'
      },
      explanation: {
        en: 'Before the constructor body executes, the JVM clears object heap memory, setting boolean fields to false and reference fields to null.',
        bn: 'কনস্ট্রাক্টর চলার আগেই JVM মেমোরি পরিষ্কার করে বুলিয়ান ফিল্ডকে false এবং অবজেক্ট রেফারেন্সকে null করে।'
      }
    },
    {
      id: 'reference-equality-vs-equals-ex2',
      kind: 'mcq',
      topic: 'reference-equality-double-equals',
      question: {
        en: 'What is evaluated when using the double equals operator (a == b) on two separate Java object references?',
        bn: 'দুটি পৃথক জাভা অবজেক্ট রেফারেন্সের মাঝে ডাবল ইকুয়াল অপারেটর (a == b) ব্যবহার করলে কী যাচাই করা হয়?'
      },
      options: [
        {
          en: 'Whether both variables point to the exact same heap memory address',
          bn: 'উভয় ভেরিয়েবল হিপের অবিকল একই মেমোরি ঠিকানাকে নির্দেশ করছে কিনা'
        },
        {
          en: 'Whether all fields in the two objects contain identical values',
          bn: 'দুটি অবজেক্টের সব ফিল্ডের ভেতরের মান একই কি না'
        },
        {
          en: 'Whether both objects share the same string length',
          bn: 'উভয় অবজেক্টের স্ট্রিং দৈর্ঘ্য সমান কি না'
        },
        {
          en: 'Whether the operating system has enough free RAM',
          bn: 'অপারেটিং সিস্টেমে পর্যাপ্ত র্যাম খালি আছে কি না'
        }
      ],
      answer: 0,
      hint: {
        en: 'The == operator checks memory identity, not internal contents.',
        bn: '== অপারেটর মেমোরি ঠিকানা তুলনা করে, ভেতরের ডেটা নয়।'
      },
      explanation: {
        en: 'The == operator strictly checks heap pointer equality. For logical field-by-field value equality, equals() must be used.',
        bn: '== অপারেটর শুধুমাত্র হিপ অ্যাড্রেস পরীক্ষা করে; ভেতরের তথ্যের সমতা দেখতে equals() মেথড লাগে।'
      }
    },
    {
      id: 'hashcode-contract-consequence-ex3',
      kind: 'mcq',
      topic: 'hashcode-equals-contract-axiom',
      question: {
        en: 'If a class overrides equals() without overriding hashCode(), what defect occurs when using the class inside a java.util.HashMap?',
        bn: 'যদি কোনো ক্লাসে hashCode() ওভাররাইড না করে শুধু equals() ওভাররাইড করা হয়, তবে java.util.HashMap এ কী ত্রুটি ঘটবে?'
      },
      options: [
        {
          en: 'Equal objects land in different hash buckets and map.get(key) fails to retrieve existing stored entries',
          bn: 'সমান অবজেক্টগুলো ভিন্ন হ্যাশ বাকেটে চলে যায় এবং map.get(key) পূর্বে সংরক্ষিত মান খুঁজে পেতে ব্যর্থ হয়'
        },
        {
          en: 'The JVM throws a CompilationError at startup',
          bn: 'চালু হওয়ার সময় JVM একটি CompilationError তৈরি করে'
        },
        {
          en: 'HashMap automatically doubles the computer CPU frequency',
          bn: 'HashMap স্বয়ংক্রিয়ভাবে সিপিইউ ফ্রিকোয়েন্সি দ্বিগুণ করে দেয়'
        },
        {
          en: 'The operating system deletes the source code file',
          bn: 'অপারেটিং সিস্টেম সোর্স কোড ফাইলটি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Hash collections locate buckets using hashCode() before calling equals().',
        bn: 'হ্যাশ কালেকশন আগে hashCode() দিয়ে বাকেট খোঁজে, তারপর equals() চালায়।'
      },
      explanation: {
        en: 'HashMap uses hashCode() to index array buckets. Different hashes send equal keys to wrong buckets, making lookups fail.',
        bn: 'হ্যাশ কোড না মিললে সমান কি হওয়া সত্ত্বেও ভুল বাকেটে খোঁজার ফলে ডেটা পাওয়া যায় না।'
      }
    },
    {
      id: 'super-constructor-chaining-rule-ex4',
      kind: 'mcq',
      topic: 'super-constructor-invocation-order',
      question: {
        en: 'Where must an explicit invocation of "super()" or "this()" reside inside a Java subclass constructor body?',
        bn: 'জাভা সাবক্লাসের কনস্ট্রাক্টরের ভেতর "super()" বা "this()" কলটি ঠিক কোথায় থাকতে হয়?'
      },
      options: [
        {
          en: 'It must be the very first statement on the first line of the constructor',
          bn: 'কনস্ট্রাক্টরের প্রথম লাইনে সবার প্রথম স্টেটমেন্ট হিসেবে থাকতে হবে'
        },
        {
          en: 'At the end after all field assignments',
          bn: 'ফিল্ড অ্যাসাইনমেন্ট শেষ করে সবার শেষে'
        },
        {
          en: 'Inside a finally block',
          bn: 'finally ব্লকের ভেতরে'
        },
        {
          en: 'Anywhere within the class file outside methods',
          bn: 'মেথডের বাইরে ক্লাসের যেকোনো জায়গায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Java mandates constructor chaining begins immediately on line 1.',
        bn: 'জাভার নিয়ম অনুযায়ী কনস্ট্রাক্টরের প্রথম লাইনেই প্যারেন্ট কনস্ট্রাক্টর কল করতে হয়।'
      },
      explanation: {
        en: 'The compiler enforces super() or this() as the first statement to guarantee superclass fields are initialized before subclass logic runs.',
        bn: 'প্যারেন্ট ক্লাসের ফিল্ড আগে প্রস্তুত হওয়া নিশ্চিত করতেই প্রথম স্টেটমেন্ট হিসেবে super() আবশ্যক।'
      }
    }
  ],
  quiz: {
    id: 'quiz-objects-and-the-new',
    title: {
      en: 'Java Objects, Memory Allocation and Equality Quiz',
      bn: 'জাভা অবজেক্ট, মেমোরি বরাদ্দ এবং সমতা কুইজ'
    },
    questions: [
      {
        id: 'quiz-object-header-mark-word-purpose',
        kind: 'mcq',
        topic: 'jvm-object-header-mark-word-contents',
        question: {
          en: 'What essential runtime metadata does the JVM store inside the Mark Word of an object header on the heap?',
          bn: 'হিপে অবজেক্ট হেডারের মার্ক ওয়ার্ডে JVM কোন কোন অতি প্রয়োজনীয় রানটাইম তথ্য সংরক্ষণ করে?'
        },
        options: [
          {
            en: 'Identity hashcode, garbage collection generation age, biased locking state, and thread synchronization monitor pointers',
            bn: 'আইডেন্টিটি হ্যাশকোড, গারবেজ কালেকশন জেনারেশন বয়স, বায়াসড লকিং অবস্থা এবং থ্রেড সিনক্রোনাইজেশন মনিটর পয়েন্টার'
          },
          {
            en: 'The complete Java source code text',
            bn: 'সম্পূর্ণ জাভা সোর্স কোড টেক্সট'
          },
          {
            en: 'Database SQL connection passwords',
            bn: 'ডেটাবেস এসকিউএল কানেকশন পাসওয়ার্ড'
          },
          {
            en: 'The user email address and password',
            bn: 'ব্যবহারকারীর ইমেইল ঠিকানা ও পাসওয়ার্ড'
          }
        ],
        answer: 0,
        hint: {
          en: 'Mark Word stores runtime flags including GC age, locking flags, and default hash code.',
          bn: 'মার্ক ওয়ার্ড জিসি বয়স, লকিং ফ্ল্যাগ এবং হ্যাশ কোডের মতো রানটাইম তথ্য ধরে রাখে।'
        },
        explanation: {
          en: 'The 64-bit Mark Word contains compact bits tracking GC survivor iterations, lock states, and intrinsic monitor pointers.',
          bn: 'মার্ক ওয়ার্ডে অবজেক্টের লকিং স্ট্যাটাস, জিসি বয়স এবং মেমোরি সংক্রান্ত প্রয়োজনীয় বিট সংরক্ষিত থাকে।'
        }
      },
      {
        id: 'quiz-equals-contract-transitivity-axiom',
        kind: 'mcq',
        topic: 'equals-contract-transitivity-violation',
        question: {
          en: 'What does the "transitive" requirement of the java.lang.Object.equals contract strictly mandate?',
          bn: 'java.lang.Object.equals চুক্তির "transitive" বা সংক্রামক নিয়মটি কী নির্ধারণ করে?'
        },
        options: [
          {
            en: 'If a.equals(b) is true and b.equals(c) is true, then a.equals(c) must also evaluate to true',
            bn: 'যদি a.equals(b) সত্য হয় এবং b.equals(c) সত্য হয়, তবে a.equals(c) অবশ্যই সত্য হতে হবে'
          },
          {
            en: 'An object must always equal null',
            bn: 'একটি অবজেক্ট সর্বদা null এর সমান হতে হবে'
          },
          {
            en: 'Equality must change every 5 seconds',
            bn: 'প্রতি ৫ সেকেন্ড পরপর সমতার ফলাফল বদলাতে হবে'
          },
          {
            en: 'Subclasses must never override equals',
            bn: 'সাবক্লাস কখনো equals ওভাররাইড করতে পারবে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Transitivity means equality flows across chains: if A=B and B=C, then A=C.',
          bn: 'যদি A=B এবং B=C হয়, তবে নিশ্চিতভাবে A=C হতে হবে।'
        },
        explanation: {
          en: 'Transitivity guarantees that equivalence classes are mathematically consistent across all compared instances.',
          bn: 'ট্রানজিটিভিটি নিয়ম নিশ্চিত করে যে চেইনের মাধ্যমে সব অবজেক্টের মধ্যকার তুলনা যৌক্তিকভাবে সঠিক থাকবে।'
        }
      },
      {
        id: 'quiz-java-pass-by-value-reference-identity',
        kind: 'mcq',
        topic: 'java-pass-by-value-references',
        question: {
          en: 'Why is Java strictly classified as "pass-by-value" even when passing complex objects into methods?',
          bn: 'জটিল অবজেক্ট মেথডে পাস করার পরেও জাভাকে কেন কঠোরভাবে "pass-by-value" বলা হয়?'
        },
        options: [
          {
            en: 'Because Java passes a copy of the reference pointer by value; reassigning the parameter variable inside the method does not reassign the caller reference',
            bn: 'কারণ জাভা রেফারেন্স পয়েন্টারটির একটি কপি পাস করে; মেথডের ভেতর প্যারামিটার পরিবর্তন করলে মূল কলারের ভেরিয়েবল বদলে যায় না'
          },
          {
            en: 'Because Java only supports primitive integers',
            bn: 'কারণ জাভা কেবল প্রিমিটিভ পূর্ণসংখ্যা সমর্থন করে'
          },
          {
            en: 'Objects are copied byte-for-byte across physical hardware',
            bn: 'হার্ডওয়্যার জুড়ে প্রতিটি অবজেক্ট বাইট আকারে কপি হয়'
          },
          {
            en: 'Pass-by-value is only used when running on Linux',
            bn: 'Pass-by-value কেবল লিনাক্সে চালানোর সময় ঘটে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The pointer itself is copied by value, pointing to the same shared heap object.',
          bn: 'পয়েন্টারের একটি কপি পাস হয়, যা একই অবজেক্ট নির্দেশ করে।'
        },
        explanation: {
          en: 'Java copies the 8-byte reference address by value. Mutating the object changes heap data, but reassigning the parameter does not rebind the caller.',
          bn: 'জাভা মেমোরি অ্যাড্রেসের মান কপি করে পাস করে; তাই ভেতর থেকে ভেরিয়েবল রি-অ্যাসাইন করলে বাইরের ভেরিয়েবল অপরিবর্তিত থাকে।'
        }
      },
      {
        id: 'quiz-java-16-record-auto-generated-equals',
        kind: 'mcq',
        topic: 'java-records-immutable-data-carriers',
        question: {
          en: 'How do Java 16+ records simplify fulfilling the equals and hashCode contract compared to traditional classes?',
          bn: 'সনাতন ক্লাসের তুলনায় জাভা ১৬+ রেকর্ড কীভাবে equals এবং hashCode চুক্তি পূরণকে সহজ করে?'
        },
        options: [
          {
            en: 'The Java compiler automatically generates correct, immutable equals() and hashCode() implementations incorporating all declared record components',
            bn: 'জাভা কম্পাইলার স্বয়ক্রিয়ভাবে সব ঘোষিত উপাদানের ওপর ভিত্তি করে নির্ভুল এবং ইমিউটেবল equals() ও hashCode() তৈরি করে দেয়'
          },
          {
            en: 'Records disable hash calculation completely',
            bn: 'রেকর্ড হ্যাশ গণনা পুরোপুরি বন্ধ করে দেয়'
          },
          {
            en: 'Records convert all objects into static global variables',
            bn: 'রেকর্ড সব অবজেক্টকে স্ট্যাটিক গ্লোবাল ভেরিয়েবলে রূপান্তর করে'
          },
          {
            en: 'Records only permit 1 field per class',
            bn: 'রেকর্ড প্রতি ক্লাসে কেবল ১ টি ফিল্ড ব্যবহারের অনুমতি দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Records synthesize component-based equals and hashCode at compile time.',
          bn: 'রেকর্ড কম্পাইল টাইমে ফিল্ডগুলোর ওপর ভিত্তি করে স্বয়ংক্রিয় মেথড তৈরি করে।'
        },
        explanation: {
          en: 'Records are transparent data carriers where the compiler synthesizes equals, hashCode, toString, and accessors from component fields.',
          bn: 'রেকর্ড একটি আধুনিক ডেটা ক্যারিয়ার যা ডেভেলপারকে কোনো বয়লারপ্লেট কোড ছাড়াই নির্ভরযোগ্য মেথড উপহার দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'interfaces-and-the-default',
    title: {
      en: 'Interfaces, Multiple Inheritance & Default Methods',
      bn: 'ইন্টারফেস, মাল্টিপল ইনহেরিটেন্স এবং ডিফল্ট মেথড'
    }
  }
};
