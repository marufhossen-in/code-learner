import type { Lesson } from '../../../lib/types';

export const GenericsAndTheDiamondLesson: Lesson = {
  slug: 'generics-and-the-diamond',
  tech: 'lang-java',
  title: {
    en: 'Generics, Type Erasure & The Diamond Operator',
    bn: 'জেনেরিকস, টাইপ ইরেজার এবং ডায়মন্ড অপারেটর'
  },
  summary: {
    en: 'Master compile-time type safety in Java. Understand how type erasure bridges generic source code to backward-compatible bytecode, streamline instantiation using the Java 7 diamond operator (<>), navigate invariance, and apply bounded wildcards via the PECS rule (Producer Extends, Consumer Super).',
    bn: 'জাভাতে কম্পাইল-টাইম টাইপ নিরাপত্তা আয়ত্ত করুন। টাইপ ইরেজার কীভাবে জেনেরিক সোর্স কোডকে ব্যাকওয়ার্ড কম্প্যাটিবল বাইটকোডে রূপান্তর করে, জাভা ৭ ডায়মন্ড অপারেটর (<>) দিয়ে সহজ অবজেক্ট তৈরি এবং PECS নীতি (Producer Extends, Consumer Super) প্রয়োগ শিখুন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'compile-time-safety-and-type-erasure-heading',
      text: {
        en: 'Compile-Time Type Safety, Invariance, and Bytecode Type Erasure',
        bn: 'কম্পাইল-টাইম টাইপ নিরাপত্তা, ইনভেরিয়েন্স এবং বাইটকোড টাইপ ইরেজার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Prior to Java 5, data collections stored raw java.lang.Object references, requiring manual downcasting that frequently triggered fatal ClassCastException errors at runtime. Java 5 introduced Generics to shift type verification entirely to compile-time. To ensure complete backward compatibility with older legacy pre-Java-5 bytecode, the compiler implements "type erasure". During compilation, generic type parameters like T are replaced with their upper bounds (or Object if unbounded), and synthetic cast instructions are inserted automatically. At runtime inside the JVM, generic type arguments no longer exist, meaning "List<String>" and "List<Integer>" share the exact same underlying raw class.',
        bn: 'জাভা ৫ এর পূর্বে কালেকশনগুলো শুধুমাত্র সাধারণ java.lang.Object রেফারেন্স জমা রাখতো, ফলে রানটাইমে ম্যানুয়াল কাস্টিং করতে গিয়ে প্রায়শই মারাত্মক ClassCastException দেখা দিতো। জাভা ৫ কম্পাইল টাইমে টাইপ যাচাই নিশ্চিত করতে Generics প্রবর্তন করে। জাভা ৫ এর পূর্ববর্তী পুরনো বাইটকোডের সাথে শতভাগ সামঞ্জস্য বা ব্যাকওয়ার্ড কম্প্যাটিবিলিটি বজায় রাখতে কম্পাইলার "type erasure" পদ্ধতি ব্যবহার করে। কম্পাইলেশনের সময় জেনেরিক প্যারামিটার T মুছে ফেলে তার বাউন্ড বা Object বসিয়ে দেওয়া হয় এবং প্রয়োজনীয় টাইপকাস্ট যুক্ত করা হয়। ফলে রানটাইমে JVM-এর কাছে জেনেরিক তথ্যের কোনো অস্তিত্ব থাকে না; "List<String>" এবং "List<Integer>" উভয়ই আসলে একই সাধারণ ক্লাসে পরিণত হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Complete lifecycle of Java generics: From compile-time type constraints and Java 7 diamond inference to the PECS bounded wildcard principle.',
        bn: 'চিত্র ১: জাভা জেনেরিকসের পূর্ণাঙ্গ রূপরেখা: কম্পাইল-টাইম টাইপ নিরাপত্তা ও জাভা ৭ ডায়মন্ড অপারেটর থেকে শুরু করে PECS ওয়াইল্ডকার্ড নীতি।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">JAVA GENERICS: TYPE ERASURE, DIAMOND OPERATOR &amp; PECS</text>

  <!-- Step 1: Generic Parameterization -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Generic Types</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">class Box&lt;T&gt; {</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">  private T value;</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Compile-Time Safe</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Zero ClassCastException</text>
  </g>

  <!-- Step 2: Java 7 Diamond Operator -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Diamond Operator</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">List&lt;User&gt; list =</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">  new ArrayList&lt;&gt;();</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Infers User Type</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Clean Boilerplate</text>
  </g>

  <!-- Step 3: Producer Extends -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Producer Extends</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">? extends Number</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Covariant Subtypes</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Read-Only Source</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Producer Principle</text>
  </g>

  <!-- Step 4: Consumer Super -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Consumer Super</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">? super Integer</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Contravariant</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Write-Only Sink</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Consumer Principle</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'diamond-operator-and-pecs-heading',
      text: {
        en: 'The Diamond Operator and The PECS Wildcard Principle',
        bn: 'ডায়মন্ড অপারেটর এবং PECS ওয়াইল্ডকার্ড নীতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Before Java 7, instantiating generic classes required redundant duplication: "Map<String, List<Order>> map = new HashMap<String, List<Order>>()". Java 7 introduced the diamond operator ("<>"), enabling the compiler to infer right-hand constructor type parameters from left-hand variable declarations. Furthermore, generic types are invariant: although Integer extends Number, a List<Integer> is NOT a List<Number>. To permit flexible polymorphic APIs, Java utilizes bounded wildcards guided by Joshua Bloch\'s PECS rule: Producer Extends, Consumer Super. Use "? extends T" when your method only reads items from a collection (a Producer), and use "? super T" when your method only writes items into a collection (a Consumer).',
        bn: 'জাভা ৭ এর পূর্বে জেনেরিক ক্লাস তৈরি করতে উভয় পাশে টাইপ লিখতে হতো: "Map<String, List<Order>> map = new HashMap<String, List<Order>>()"। জাভা ৭ ডায়মন্ড অপারেটর ("<>") যুক্ত করে, যা বাম পাশের ঘোষণা দেখে ডান পাশের কনস্ট্রাক্টরের টাইপ নিজে থেকেই বুঝে নিতে পারে। এছাড়া জেনেরিক টাইপগুলো সম্পূর্ণ ইনভেরিয়েন্ট: যদিও Integer ক্লাসটি Number কে এক্সটেন্ড করে, তবুও List<Integer> কিন্তু List<Number> এর সাব-টাইপ নয়। এপিআইকে নমনীয় করতে জাভাতে জোশুয়া ব্লকের বিখ্যাত PECS নীতি প্রয়োগ করা হয়: Producer Extends, Consumer Super। যখন কোনো মেথড কালেকশন থেকে শুধু উপাদান পড়ে (Producer), তখন "? extends T" ব্যবহার করুন; আর যখন মেথড কালেকশনে নতুন উপাদান লেখে বা প্রবেশ করায় (Consumer), তখন "? super T" ব্যবহার করুন।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Java generic container encapsulation, type erasure, diamond inference, and PECS producer-consumer boundaries.',
        bn: 'জাভা জেনেরিক কন্টেইনার এনক্যাপসুলেশন, টাইপ ইরেজার এবং PECS প্রডিউসার-কনজিউমার নিয়মের TypeScript বাস্তবায়ন।'
      },
      code: `// Simulation of Java Generic Box, Diamond Inference, and PECS Guideline

export class GenericBoxSimulator<T> {
  private item: T;

  constructor(initialItem: T) {
    this.item = initialItem;
  }

  public get(): T {
    return this.item;
  }

  public set(newItem: T): void {
    this.item = newItem;
  }
}

// Demonstrating PECS: Producer Extends (read-only)
export function sumOfNumbers(producer: { get(): number }[]): number {
  let total = 0;
  for (const item of producer) {
    total += item.get(); // Reading values safely
  }
  return total;
}

// Demonstrating PECS: Consumer Super (write-only)
export function appendIntegers(consumer: { set(val: number): void }[], val: number): void {
  for (const box of consumer) {
    box.set(val); // Writing values safely
  }
}

// Execution demonstration
const intBox1 = new GenericBoxSimulator<number>(10);
const intBox2 = new GenericBoxSimulator<number>(20);

const sum = sumOfNumbers([intBox1, intBox2]);
console.log('Calculated Sum of Producer Elements:', sum); // 30

appendIntegers([intBox1], 50);
console.log('Updated Consumer Box Value:', intBox1.get()); // 50`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Type Erasure',
          def: {
            en: 'Compiler process stripping generic type parameters at bytecode compilation to ensure backward compatibility.',
            bn: 'কম্পাইলার প্রক্রিয়া যা ব্যাকওয়ার্ড কম্প্যাটিবিলিটি রক্ষা করতে কম্পাইল টাইমে জেনেরিক টাইপ মুছে ফেলে।'
          }
        },
        {
          term: 'Diamond Operator',
          def: {
            en: 'Empty angle bracket syntax (<>) introduced in Java 7 enabling type parameter inference on constructor calls.',
            bn: 'জাভা ৭ এর খালি অ্যাঙ্গেল ব্র্যাকেট (<>) সিনট্যাক্স যা কনস্ট্রাক্টরে টাইপ প্যারামিটার অনুমানের সুযোগ দেয়।'
          }
        },
        {
          term: 'Invariance',
          def: {
            en: 'Rule stating that GenericType<Sub> is not a subtype of GenericType<Super>, preventing cross-type pollution.',
            bn: 'নিয়ম যা বলে GenericType<Sub> কখনোই GenericType<Super> এর সাবক্লাস নয়, ফলে ভুল ডেটা ঢোকা বন্ধ থাকে।'
          }
        },
        {
          term: 'PECS Rule',
          def: {
            en: 'Mnemonic: Producer Extends, Consumer Super. Dictates when to use ? extends versus ? super bounded wildcards.',
            bn: 'সংক্ষিপ্ত নীতি: Producer Extends, Consumer Super যা ওয়াইল্ডকার্ড ব্যবহারে সঠিক সিদ্ধান্ত নিতে শেখায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'type-erasure-bytecode-target-ex1',
      kind: 'mcq',
      topic: 'type-erasure-unbounded-replacement',
      question: {
        en: 'What does the Java compiler replace an unbounded type parameter "<T>" with during bytecode type erasure?',
        bn: 'বাইটকোড টাইপ ইরেজারের সময় জাভা কম্পাইলার একটি আনবাউন্ডেড টাইপ প্যারামিটার "<T>" কে কী দিয়ে প্রতিস্থাপন করে?'
      },
      options: [
        { en: 'java.lang.Object', bn: 'রুট ক্লাস: java.lang.Object' },
        { en: 'java.lang.String', bn: 'রুট ক্লাস: java.lang.String' },
        { en: 'int primitive', bn: 'int প্রিমিটিভ' },
        { en: 'The underlying C++ operating system pointer', bn: 'সি++ অপারেটিং সিস্টেম পয়েন্টার' }
      ],
      answer: 0,
      hint: {
        en: 'Unbounded generic parameters default to the universal Object root ancestor.',
        bn: 'কোনো বাউন্ড না থাকলে জেনেরিক টাইপ সার্বজনীন java.lang.Object এ রূপান্তরিত হয়।'
      },
      explanation: {
        en: 'During type erasure, any unbounded type parameter T is replaced with java.lang.Object in the generated class file.',
        bn: 'কম্পাইলেশনের পর আনবাউন্ডেড টাইপ T সরাসরি java.lang.Object দিয়ে প্রতিস্থাপিত হয়।'
      }
    },
    {
      id: 'diamond-operator-java-release-ex2',
      kind: 'mcq',
      topic: 'diamond-operator-java7-release',
      question: {
        en: 'In which version of Java was the diamond operator ("<>") for constructor type inference introduced?',
        bn: 'কনস্ট্রাক্টরের টাইপ অনুমানের জন্য খালি ডায়মন্ড অপারেটর ("<>") জাভার কোন সংস্করণে প্রবর্তিত হয়?'
      },
      options: [
        { en: 'Java 7', bn: 'Java 7' },
        { en: 'Java 5', bn: 'Java 5' },
        { en: 'Java 8', bn: 'Java 8' },
        { en: 'Java 17', bn: 'Java 17' }
      ],
      answer: 0,
      hint: {
        en: 'Java 7 introduced the diamond operator to eliminate redundant type syntax.',
        bn: 'জাভা ৭ অতিরিক্ত টাইপ কোড বাদ দিতে ডায়মন্ড অপারেটরের সূচনা করে।'
      },
      explanation: {
        en: 'Java 7 added the diamond operator, allowing developers to write "new ArrayList<>()" instead of repeating type parameters.',
        bn: 'জাভা ৭ এর ডায়মন্ড অপারেটর একই টাইপ বারবার লেখার ঝামেলা দূর করে।'
      }
    },
    {
      id: 'generics-invariance-compile-error-ex3',
      kind: 'mcq',
      topic: 'generics-invariance-subtyping-rule',
      question: {
        en: 'Why does the assignment "List<Number> list = new ArrayList<Integer>();" fail to compile in Java?',
        bn: 'জাভাতে "List<Number> list = new ArrayList<Integer>();" কোডটি কম্পাইল হতে ব্যর্থ হয় কেন?'
      },
      options: [
        {
          en: 'Because Java generics are invariant: List<Integer> is not a subtype of List<Number>, preventing someone from adding a Double into an Integer list',
          bn: 'কারণ জাভা জেনেরিকস ইনভেরিয়েন্ট: List<Integer> কিন্তু List<Number> এর সাব-টাইপ নয়, যাতে কেউ একটি Integer লিস্টে Double ঢুকিয়ে দিতে না পারে'
        },
        {
          en: 'Because ArrayList cannot store numbers',
          bn: 'কারণ ArrayList কোনো সংখ্যা জমা রাখতে পারে না'
        },
        {
          en: 'Because Integer does not extend Number in Java',
          bn: 'কারণ জাভাতে Integer ক্লাস Number কে এক্সটেন্ড করে না'
        },
        {
          en: 'Invariance was removed from Java in 2014',
          bn: '২০১৪ সালে জাভা থেকে ইনভেরিয়েন্স বাদ দেওয়া হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Invariance prevents type confusion: if it compiled, list.add(3.14) would corrupt an Integer list.',
        bn: 'ইনভেরিয়েন্স টাইপ সুরক্ষা দেয়: অন্যথায় পূর্ণসংখ্যার লিস্টে ভগ্নাংশ ঢুকে ডেটা নষ্ট হতে পারতো।'
      },
      explanation: {
        en: 'Generics are invariant. If List<Integer> were a List<Number>, you could insert a Double, violating type safety.',
        bn: 'জেনেরিকস কঠোরভাবে টাইপ নিরাপত্তা নিশ্চিত করে বলেই এই অ্যাসাইনমেন্ট নিষিদ্ধ।'
      }
    },
    {
      id: 'pecs-wildcard-producer-reading-ex4',
      kind: 'mcq',
      topic: 'pecs-producer-extends-rule',
      question: {
        en: 'According to the PECS rule, which wildcard declaration should be used for a method parameter that only reads data from a collection of numbers?',
        bn: 'PECS নীতি অনুসারে, কোনো মেথড প্যারামিটার যদি কেবল একটি সংখ্যার কালেকশন থেকে ডেটা পড়ে, তবে কোন ওয়াইল্ডকার্ডটি ব্যবহার করা উচিত?'
      },
      options: [
        { en: 'List<? extends Number>', bn: 'List<? extends Number>' },
        { en: 'List<? super Number>', bn: 'List<? super Number>' },
        { en: 'List<?> without bounds', bn: 'কোনো সীমা ছাড়া List<?>' },
        { en: 'List<Object>', bn: 'List<Object>' }
      ],
      answer: 0,
      hint: {
        en: 'Producer Extends: use "? extends T" when reading elements out of a collection.',
        bn: 'প্রডিউসার এক্সটেন্ডস: কালেকশন থেকে তথ্য পড়ার জন্য "? extends T" ব্যবহার করা হয়।'
      },
      explanation: {
        en: 'Under PECS (Producer Extends, Consumer Super), a collection producing data to be read uses <? extends T>.',
        bn: 'PECS নীতি অনুযায়ী যা ডেটা সরবরাহ বা প্রোডিউস করে তার জন্য <? extends T> প্রযোজ্য।'
      }
    }
  ],
  quiz: {
    id: 'quiz-generics-and-the-diamond',
    title: {
      en: 'Java Generics, Type Erasure & PECS Mastery Quiz',
      bn: 'জাভা জেনেরিকস, টাইপ ইরেজার এবং PECS কুইজ'
    },
    questions: [
      {
        id: 'quiz-heap-pollution-varargs-generics',
        kind: 'mcq',
        topic: 'heap-pollution-safevarargs-annotation',
        question: {
          en: 'What is "heap pollution" in Java and which annotation is used by library authors to suppress compiler warnings when implementing generic varargs methods?',
          bn: 'জাভাতে "heap pollution" কী এবং জেনেরিক varargs মেথড লেখার সময় কম্পাইলারের সতর্কতা দূর করতে কোন অ্যানোটেশনটি ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'Heap pollution occurs when a generic variable references an object of a different type; authors use @SafeVarargs to assert the method body does not perform unsafe operations',
            bn: 'হিপ পলুশন ঘটে যখন একটি জেনেরিক ভেরিয়েবল ভুল টাইপের অবজেক্ট নির্দেশ করে; মেথডটি নিরাপদ তা নিশ্চিত করতে ডেভেলপাররা @SafeVarargs ব্যবহার করেন'
          },
          {
            en: 'Heap pollution occurs when RAM fills up with junk files',
            bn: 'হিপ পলুশন ঘটে যখন অপ্রয়োজনীয় ফাইলে র্যাম পূর্ণ হয়ে যায়'
          },
          {
            en: 'It is suppressed by adding 5 empty return statements',
            bn: '৫ টি খালি return স্টেটমেন্ট লিখে এটি দূর করা হয়'
          },
          {
            en: '@SafeVarargs was deprecated in Java 8',
            bn: '@SafeVarargs জাভা ৮ এ বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: '@SafeVarargs suppresses warnings on parameterized varargs methods.',
          bn: '@SafeVarargs অ্যানোটেশন জেনেরিক ভ্যারার্গস মেথডের সতর্কতা দূর করে।'
        },
        explanation: {
          en: 'Arrays reify types while generics erase them; mixing generic varargs risks heap pollution. @SafeVarargs marks the method as verified safe.',
          bn: 'অ্যারে এবং জেনেরিকসের টাইপ পার্থক্যের কারণে হিপ পলুশন হতে পারে; @SafeVarargs দিয়ে কোডের নিরাপত্তা প্রত্যয়ন করা হয়।'
        }
      },
      {
        id: 'quiz-primitive-types-in-generics-restriction',
        kind: 'mcq',
        topic: 'generics-cannot-accept-primitives',
        question: {
          en: 'Why can Java NOT declare a generic collection with primitive types directly (e.g. "List<int>")?',
          bn: 'জাভাতে সরাসরি প্রিমিটিভ টাইপ দিয়ে জেনেরিক কালেকশন (যেমন "List<int>") কেন ঘোষণা করা যায় না?'
        },
        options: [
          {
            en: 'Because type erasure replaces type parameters with java.lang.Object, and primitive types like int do not inherit from Object (requiring wrappers like Integer)',
            bn: 'কারণ টাইপ ইরেজার জেনেরিক প্যারামিটারকে java.lang.Object দিয়ে প্রতিস্থাপন করে, কিন্তু int এর মতো প্রিমিটিভ টাইপ Object থেকে ইনহেরিট করে না (এর জন্য Integer র্যাপার লাগে)'
          },
          {
            en: 'Because primitive numbers cannot be stored in RAM',
            bn: 'কারণ প্রিমিটিভ সংখ্যা মেমোরিতে রাখা যায় না'
          },
          {
            en: 'Because Java forbids lists of numbers',
            bn: 'কারণ জাভাতে সংখ্যার লিস্ট তৈরি নিষিদ্ধ'
          },
          {
            en: 'List<int> is valid syntax in all Java versions',
            bn: 'সব জাভা সংস্করণেই List<int> একটি বৈধ সিনট্যাক্স'
          }
        ],
        answer: 0,
        hint: {
          en: 'Generics erase to Object, and primitives cannot be cast to Object directly.',
          bn: 'জেনেরিকস মুছে Object এ পরিণত হয়, কিন্তু প্রিমিটিভ কোনো অবজেক্ট নয়।'
        },
        explanation: {
          en: 'Type erasure targets java.lang.Object references. Since primitives are not Objects, boxing wrappers like Integer are required.',
          bn: 'প্রিমিটিভ টাইপ অবজেক্ট না হওয়ায় সরাসরি জেনেরিক্সে বসতে পারে না; এর বদলে অটোবক্সিংয়ের মাধ্যমে র্যাপার ক্লাস লাগে।'
        }
      },
      {
        id: 'quiz-consumer-super-writing-element',
        kind: 'mcq',
        topic: 'pecs-consumer-super-writing',
        question: {
          en: 'Under the PECS rule, why does "List<? super Integer>" permit adding an Integer, while "List<? extends Number>" does NOT permit adding an Integer?',
          bn: 'PECS নীতি অনুসারে, "List<? super Integer>" এ নতুন Integer যোগ করা গেলেও "List<? extends Number>" এ কেন নতুন Integer যোগ করা যায় না?'
        },
        options: [
          {
            en: 'Because "? super Integer" guarantees the underlying list is a collection of Integer or one of its ancestors (like Number or Object), making any Integer safe to add; "? extends Number" could be a List<Double> where adding an Integer would corrupt the list',
            bn: 'কারণ "? super Integer" নিশ্চিত করে যে লিস্টটি Integer বা তার অভিভাবকের (যেমন Number বা Object) কালেকশন, তাই যেকোনো Integer ঢোকানো নিরাপদ; অপরপক্ষে "? extends Number" একটি List<Double> হতে পারে যেখানে Integer ঢোকালে ডেটা নষ্ট হবে'
          },
          {
            en: 'Because Integer is not a number in Java',
            bn: 'কারণ জাভাতে Integer কোনো সংখ্যা হিসেবে গণ্য হয় না'
          },
          {
            en: 'Because extends only works with strings',
            bn: 'কারণ extends শুধুমাত্র স্ট্রিংয়ের সাথে কাজ করে'
          },
          {
            en: 'There is no difference between extends and super',
            bn: 'extends এবং super এর মাঝে কোনো তফাৎ নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consumer Super ensures the target collection can hold an Integer or higher type.',
          bn: 'Consumer Super নিশ্চিত করে যে কালেকশনটি অন্তত Integer বা তার চেয়ে বড় টাইপ ধারণ করতে পারে।'
        },
        explanation: {
          en: 'With ? extends Number, the runtime list could be List<Float>, so the compiler blocks inserts. With ? super Integer, the list is guaranteed wide enough for Integer.',
          bn: '? extends Number এর ক্ষেত্রে লিস্টটি যেকোনো সাব-টাইপ হতে পারে বিধায় কম্পাইলার ইনসার্ট আটকে দেয়।'
        }
      },
      {
        id: 'quiz-recursive-type-bound-comparable',
        kind: 'mcq',
        topic: 'recursive-type-bounds-comparable',
        question: {
          en: 'What does the recursive type bound "<T extends Comparable<T>>" signify in a generic method declaration like "public static <T extends Comparable<T>> T max(List<T> list)"?',
          bn: 'জেনেরিক মেথডে "<T extends Comparable<T>>" এর মতো রিকার্সিভ টাইপ বাউন্ডের প্রকৃত অর্থ কী?'
        },
        options: [
          {
            en: 'It guarantees that type T is mutually comparable with instances of its own exact type T',
            bn: 'এটি নিশ্চিত করে যে টাইপ T তার নিজস্ব টাইপ T এর অন্যান্য অবজেক্টের সাথে পারস্পরিকভাবে তুলনাযোগ্য'
          },
          {
            en: 'It forces the method to run in an infinite loop',
            bn: 'এটি মেথডটিকে একটি অনন্ত লুপে চলতে বাধ্য করে'
          },
          {
            en: 'It deletes all duplicate elements in the list',
            bn: 'এটি লিস্টের সব ডুপ্লিকেট উপাদান মুছে ফেলে'
          },
          {
            en: 'It indicates that T must be a boolean flag',
            bn: 'এটি নির্দেশ করে যে T অবশ্যই একটি বুলিয়ান ফ্ল্যাগ হতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Recursive type bounds ensure an object can compare itself against others of the same type.',
          bn: 'রিকার্সিভ টাইপ বাউন্ড অবজেক্টকে নিজের টাইপের সাথে তুলনা করার ক্ষমতা নিশ্চিত করে।'
        },
        explanation: {
          en: 'Recursive type bounds like <T extends Comparable<T>> ensure that elements can be ordered using their own compareTo method.',
          bn: 'এর মাধ্যমে নিশ্চিত হওয়া যায় যে তালিকার প্রতিটি উপাদান compareTo মেথড সমর্থন করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'throws-and-the-catch',
    title: {
      en: 'Exception Mechanics, Throws & Multi-Catch',
      bn: 'এক্সেপশন মেকানিজম, Throws এবং মাল্টি-ক্যাচ'
    }
  }
};
