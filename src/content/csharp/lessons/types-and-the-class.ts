import type { Lesson } from '../../../lib/types';

export const TypesAndTheClassLesson: Lesson = {
  slug: 'types-and-the-class',
  tech: 'csharp',
  title: {
    en: 'Type System: Value Types, References & Records',
    bn: 'টাইপ সিস্টেম: ভ্যালু টাইপ, রেফারেন্স এবং রেকর্ড'
  },
  summary: {
    en: 'Master the dual-nature memory model of C#. Contrast value types on the stack with reference types on the heap, eliminate null errors with Nullable Reference Types, and model immutable data using modern records.',
    bn: 'C# এর দ্বৈত মেমোরি মডেল আয়ত্ত করুন। স্ট্যাকের ভ্যালু টাইপ ও হিপের রেফারেন্স টাইপের পার্থক্য জানুন, Nullable Reference Types দিয়ে নাল এরর নির্মূল করুন এবং আধুনিক রেকর্ড দিয়ে ইমিউটেবল ডেটা মডেলিং করুন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'stack-value-types-vs-heap-reference-types-heading',
      text: {
        en: 'The Memory Divide: Value Types (Stack) vs Reference Types (Heap)',
        bn: 'মেমোরির বিভাজন: ভ্যালু টাইপ (স্ট্যাক) বনাম রেফারেন্স টাইপ (হিপ)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'At the foundation of C# lies a strict distinction between value types and reference types. Value types (such as int, bool, and custom structs) store raw data directly on the fast execution stack. Copying a value type duplicates its bytes, so modifying the copy leaves the original unchanged. In contrast, reference types (such as class and string) allocate their memory on the managed heap while variables store memory pointers. Copying a reference copies only the pointer, meaning multiple variables share the same heap instance.',
        bn: 'C# এর ভিত্তিমূলে রয়েছে ভ্যালু টাইপ এবং রেফারেন্স টাইপের মধ্যে একটি গুরুত্বপূর্ণ পার্থক্য। ভ্যালু টাইপ (যেমন int, bool এবং কাস্টম struct) সরাসরি দ্রুতগতির এক্সিকিউশন স্ট্যাকে নিজস্ব ডেটা সংরক্ষণ করে। একটি ভ্যালু টাইপ কপি করলে তার সমস্ত ডেটা প্রতিলিপিত হয়, ফলে কপির পরিবর্তনে মূল তথ্যে কোনো প্রভাব পড়ে না। বিপরীতে, রেফারেন্স টাইপ (যেমন class এবং string) তাদের মেমোরি ম্যানেজড হিপে বরাদ্দ করে এবং ভেরিয়েবলে কেবল একটি মেমোরি পয়েন্টার থাকে। রেফারেন্স কপি করলে কেবল পয়েন্টারটি কপি হয়, অর্থাৎ একাধিক ভেরিয়েবল হিপের একই অবজেক্ট শেয়ার করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural memory layout of C#: Stack-allocated value types, heap-allocated reference instances, boxing transitions, and modern record equality.',
        bn: 'চিত্র ১: C# এর মেমোরি বিন্যাস: স্ট্যাকে থাকা ভ্যালু টাইপ, হিপে থাকা রেফারেন্স অবজেক্ট, বক্সিং প্রক্রিয়া এবং আধুনিক রেকর্ডের ভ্যালু সমতা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">C# MEMORY ARCHITECTURE: STACK VS MANAGED HEAP</text>

  <!-- Step 1: Thread Stack -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Thread Stack</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">struct Point (10, 20)</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">Direct Values on Stack</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Pointer -&gt; 0x4A1F</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">LIFO Zero GC</text>
  </g>

  <!-- Step 2: Managed Heap -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Managed Heap</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">class Customer [0x4A1F]</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">TypeHandle + SyncBlock</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">GC Monitored Lifecycle</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Shared Reference Memory</text>
  </g>

  <!-- Step 3: Boxing / Unboxing -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Boxing &amp; Generics</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">object obj = 42;</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Heap Box Allocation</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">List&lt;int&gt; Prevents Box</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Type-Safe Efficiency</text>
  </g>

  <!-- Step 4: Records & Immutability -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Modern Records</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">record User(Id, Name)</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Value Equality (==)</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">user with { Name = ... }</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Immutable Modeling</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'nullable-reference-types-and-records-heading',
      text: {
        en: 'Nullable Reference Types and Immutable Records',
        bn: 'নালেবল রেফারেন্স টাইপ এবং ইমিউটেবল রেকর্ড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To eliminate unexpected null reference exceptions, C# 8 introduced Nullable Reference Types. Under this compiler mode, reference types are non-nullable by default: declaring "string name" guarantees the variable cannot be null unless explicitly marked as "string? name". Furthermore, modern C# introduced record types (record class and readonly record struct) for immutable domain models. Traditional classes evaluate equality by comparing memory pointer addresses. In contrast, records synthesize compiler-generated value equality: 2 distinct record instances with identical property values evaluate as equal using the == operator. Non-destructive mutation is achieved elegantly through the "with" expression.',
        bn: 'অপ্রত্যাশিত নাল রেফারেন্স এরর দূর করতে C# ৮ সংস্করণে Nullable Reference Types সুবিধা যুক্ত করা হয়। এই কম্পাইলার মোডে রেফারেন্স টাইপগুলো ডিফল্টভাবে নন-নালেবল থাকে: "string name" লিখলে ভেরিয়েবলটিতে কখনো null রাখা যায় না, যদি না স্পষ্টভাবে "string? name" ঘোষণা করা হয়। তাছাড়া আধুনিক C#-এ ইমিউটেবল ডেটা মডেলিংয়ের জন্য রেকর্ড (record class এবং readonly record struct) যুক্ত করা হয়েছে। সাধারণ ক্লাস মেমোরি পয়েন্টার ঠিকানা তুলনা করে সমতা যাচাই করে। বিপরীতে, রেকর্ড ফিল্ডের ভেতরের মান তুলনা করে স্বয়ংক্রিয় ভ্যালু সমতা (value equality) নিশ্চিত করে: অবিকল একই মান বিশিষ্ট ২ টি আলাদা রেকর্ড ইনস্ট্যান্স == অপারেটর দিয়ে তুলনা করলে সত্য (true) ফলাফল দেয়। মূল অবজেক্ট না বদলে নতুন পরিবর্তিত রেকর্ড তৈরি করতে "with" এক্সপ্রেশন ব্যবহার করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of C# stack value copying vs heap reference sharing, boxing overhead, and record value-based equality semantics.',
        bn: 'C# স্ট্যাক ভ্যালু কপি বনাম হিপ রেফারেন্স শেয়ারিং, বক্সিং এবং রেকর্ডের ভ্যালু সমতার TypeScript রূপায়ণ।'
      },
      code: `// Simulation of C# Value Type Copying vs Heap Reference Aliasing & Records

// Simulating C# struct Point { public int X; public int Y; }
export class StructPointSimulator {
  constructor(public x: number, public y: number) {}

  public clone(): StructPointSimulator {
    return new StructPointSimulator(this.x, this.y);
  }
}

// Simulating C# class Customer { public string Name; }
export class ClassCustomerSimulator {
  constructor(public name: string) {}
}

// Simulating C# record Order(int Id, string Item, double Price)
export class RecordOrderSimulator {
  constructor(public readonly id: number, public readonly item: string, public readonly price: number) {}

  // Value-based equality synthesized by C# record compiler
  public equals(other: RecordOrderSimulator): boolean {
    return this.id === other.id && this.item === other.item && this.price === other.price;
  }

  // Non-destructive mutation: order with { price = 99.0 }
  public with(changes: Partial<RecordOrderSimulator>): RecordOrderSimulator {
    return new RecordOrderSimulator(
      changes.id ?? this.id,
      changes.item ?? this.item,
      changes.price ?? this.price
    );
  }
}

// Execution demonstration
// 1. Value Type copy behavior
const pt1 = new StructPointSimulator(10, 20);
const pt2 = pt1.clone(); // Value type copy
pt2.x = 99;
console.log('Original Point X on Stack:', pt1.x); // 10 (unchanged)
console.log('Copied Point X on Stack:', pt2.x); // 99

// 2. Reference Type shared heap behavior
const c1 = new ClassCustomerSimulator('Rahim');
const c2 = c1; // Pointer alias
c2.name = 'Karim';
console.log('Customer 1 Name on Heap:', c1.name); // "Karim" (mutated via alias)

// 3. Record Value Equality & with-expression
const o1 = new RecordOrderSimulator(101, 'Monitor', 350);
const o2 = new RecordOrderSimulator(101, 'Monitor', 350);
console.log('Record Value Equality:', o1.equals(o2)); // true (value based!)

const o3 = o1.with({ price: 300 });
console.log('Mutated Record Price:', o3.price); // 300
console.log('Original Record Price:', o1.price); // 350`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Value Type',
          def: {
            en: 'Types like struct, int, and bool stored directly on the stack or inline within enclosing objects with zero GC overhead.',
            bn: 'struct, int বা bool এর মতো টাইপ যা সরাসরি স্ট্যাকে থাকে এবং কোনো গারবেজ কালেকশন খরচ তৈরি করে না।'
          }
        },
        {
          term: 'Reference Type',
          def: {
            en: 'Types like class and string whose data lives on the managed heap while variables store memory pointers.',
            bn: 'class এবং string এর মতো টাইপ যাদের মূল ডেটা হিপ মেমোরিতে থাকে এবং ভেরিয়েবল কেবল পয়েন্টার রাখে।'
          }
        },
        {
          term: 'Boxing & Unboxing',
          def: {
            en: 'The process of wrapping a value type in an object on the heap (boxing) and extracting it back (unboxing).',
            bn: 'স্ট্যাকের ভ্যালু টাইপকে হিপের অবজেক্টে রূপান্তর (বক্সিং) এবং পুনরায় সেখান থেকে মান বের করে আনা (আনবক্সিং)।'
          }
        },
        {
          term: 'Record',
          def: {
            en: 'A modern C# type with compiler-synthesized value equality, immutability, and non-destructive "with" mutation.',
            bn: 'আধুনিক C# টাইপ যা স্বয়ংক্রিয় ভ্যালু সমতা, অপরিবর্তনশীলতা এবং "with" দিয়ে নতুন কপি তৈরির সুবিধা দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'value-type-struct-stack-copy-ex1',
      kind: 'mcq',
      topic: 'value-types-stack-copy-semantics',
      question: {
        en: 'What happens when a variable of a value type (such as a struct) is assigned to another variable in C#?',
        bn: 'C#-এ একটি ভ্যালু টাইপের ভেরিয়েবল (যেমন একটি struct) যখন অন্য একটি ভেরিয়েবলে অ্যাসাইন করা হয়, তখন কী ঘটে?'
      },
      options: [
        {
          en: 'A complete bitwise copy of all field values is duplicated into the new variable, leaving the original instance independent and unaffected by subsequent mutations',
          bn: 'সব ফিল্ডের মানের একটি সম্পূর্ণ স্বাধীন বিটওয়াইজ প্রতিলিপি নতুন ভেরিয়েবলে কপি হয়, ফলে পরবর্তীতে কোনো পরিবর্তন আনলে মূল ইনস্ট্যান্সে কোনো প্রভাব পড়ে না'
        },
        {
          en: 'Both variables point to the same shared memory location on the managed heap',
          bn: 'উভয় ভেরিয়েবল ম্যানেজড হিপের একই মেমোরি ঠিকানাকে নির্দেশ করে'
        },
        {
          en: 'The compiler throws a NullReferenceException at compile time',
          bn: 'কম্পাইলার কম্পাইল করার সময় NullReferenceException ছুড়ে দেয়'
        },
        {
          en: 'The computer restarts immediately',
          bn: 'কম্পিউটার সাথে সাথে রিস্টার্ট হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Value types copy values directly; they do not share heap pointers.',
        bn: 'ভ্যালু টাইপ সরাসরি মান কপি করে; এরা কোনো হিপ পয়েন্টার শেয়ার করে না।'
      },
      explanation: {
        en: 'Value types have value semantics: assignment copies the actual data bytes, guaranteeing complete isolation between variables.',
        bn: 'ভ্যালু টাইপ অ্যাসাইন করলে সমস্ত ডেটা নতুন জায়গায় কপি হয়, ফলে একটির পরিবর্তনে অন্যটি প্রভাবিত হয় না।'
      }
    },
    {
      id: 'boxing-unboxing-performance-cost-ex2',
      kind: 'mcq',
      topic: 'boxing-unboxing-heap-allocation-cost',
      question: {
        en: 'Why is boxing (such as assigning an "int" to an "object" variable) considered a performance concern in high-throughput hot paths?',
        bn: 'উচ্চগতির কোড পাথে বক্সিং করা (যেমন একটি "int" কে "object" ভেরিয়েবলে রাখা) কেন পারফরম্যান্সের জন্য উদ্বেগের কারণ?'
      },
      options: [
        {
          en: 'Boxing allocates a new object on the managed heap, copies the value into it, and produces unnecessary heap fragmentation and Garbage Collector churn',
          bn: 'বক্সিং ম্যানেজড হিপে একটি নতুন অবজেক্ট তৈরি করে তার ভেতর মান কপি করে, যা অপ্রয়োজনীয় হিপ ফ্র্যাগমেন্টেশন ও গারবেজ কালেকশনের চাপ সৃষ্টি করে'
        },
        {
          en: 'Boxing deletes the source code from the hard drive',
          bn: 'বক্সিং হার্ড ড্রাইভ থেকে সোর্স কোড মুছে ফেলে'
        },
        {
          en: 'Boxing makes integers negative numbers',
          bn: 'বক্সিং সমস্ত পূর্ণসংখ্যাকে ঋণাত্মক বানিয়ে দেয়'
        },
        {
          en: 'Boxing is completely free with zero CPU cost',
          bn: 'বক্সিংয়ে কোনো সিপিইউ খরচ হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Boxing forces a stack value into a heap object allocation.',
        bn: 'বক্সিং স্ট্যাকের হালকা মানকে অপ্রয়োজনীয়ভাবে হিপের ভারী অবজেক্টে মোড়কবদ্ধ করে।'
      },
      explanation: {
        en: 'Boxing allocates a heap wrapper for the value type, stressing the Garbage Collector. Modern C# uses generics (e.g. List<T>) to prevent boxing.',
        bn: 'অপ্রয়োজনীয় হিপ খরচ ঠেকাতে আধুনিক C#-এ অবজেক্টের বদলে টাইপ-সেফ জেনেরিক্স (List<T>) ব্যবহার করা হয়।'
      }
    },
    {
      id: 'record-types-value-equality-ex3',
      kind: 'mcq',
      topic: 'record-types-synthesized-value-equality',
      question: {
        en: 'How does equality comparison (==) between 2 record instances differ from equality comparison between 2 traditional class instances?',
        bn: '২ টি রেকর্ড ইনস্ট্যান্সের মধ্যে সমতা তুলনা (==) সনাতন ক্লাসের সমতা তুলনা থেকে কীভাবে আলাদা?'
      },
      options: [
        {
          en: 'Records compare value equality across all properties (matching properties evaluate to true), whereas classes compare reference pointer addresses by default',
          bn: 'রেকর্ড সমস্ত প্রপার্টির মান মিলিয়ে ভ্যালু সমতা যাচাই করে (মান মিললে true দেয়), যেখানে ক্লাস ডিফল্টভাবে কেবল মেমোরি পয়েন্টার ঠিকানা তুলনা করে'
        },
        {
          en: 'Classes always return true for all comparisons',
          bn: 'ক্লাস সব তুলনার জন্য সর্বদা true ফেরত দেয়'
        },
        {
          en: 'Records cannot be compared with the == operator',
          bn: 'রেকর্ডকে কখনো == অপারেটর দিয়ে তুলনা করা যায় না'
        },
        {
          en: 'Records only work with string properties',
          bn: 'রেকর্ড কেবল স্ট্রিং প্রপার্টির সাথে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Records synthesize value equality based on their property contents.',
        bn: 'রেকর্ড প্রপার্টির ভেতরের ডেটা মিলিয়ে সমতা নির্ধারণ করে, মেমোরি অ্যাড্রেস দিয়ে নয়।'
      },
      explanation: {
        en: 'The C# compiler automatically implements IEquatable<T> for records, providing structural value-based equality out of the box.',
        bn: 'কম্পাইলার রেকর্ডের জন্য নিজে থেকেই ভ্যালু সমতা কোড তৈরি করে দেয় যা ডেটা অবজেক্টের জন্য নিখুঁত।'
      }
    },
    {
      id: 'nullable-reference-types-csharp8-ex4',
      kind: 'mcq',
      topic: 'nullable-reference-types-static-safety',
      question: {
        en: 'What compile-time protection does enabling Nullable Reference Types provide in C# 8 and later?',
        bn: 'C# ৮ এবং পরবর্তী সংস্করণে Nullable Reference Types চালু করলে কোন কম্পাইল-টাইম সুরক্ষা পাওয়া যায়?'
      },
      options: [
        {
          en: 'The compiler treats standard reference types as non-nullable, issuing warnings if a null is assigned unless the type is explicitly annotated with a question mark (e.g. string?)',
          bn: 'কম্পাইলার সাধারণ রেফারেন্স টাইপকে নন-নালেবল হিসেবে বিবেচনা করে এবং স্পষ্টভাবে প্রশ্নবোধক চিহ্ন (যেমন string?) না দিলে null বসানোর চেষ্টায় ওয়ার্নিং জারি করে'
        },
        {
          en: 'It automatically catches all runtime exceptions silently',
          bn: 'এটি রানটাইমের সব এক্সেপশন নীরবে আটকে দেয়'
        },
        {
          en: 'It prevents the program from compiling if any number is zero',
          bn: 'কোনো সংখ্যার মান ০ হলে এটি কম্পাইল বন্ধ করে দেয়'
        },
        {
          en: 'Nullable reference types remove the null keyword from C#',
          bn: 'নালেবল টাইপ C# থেকে null শব্দটি পুরোপুরি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Non-nullable reference types require explicit "T?" syntax to permit null.',
        bn: 'নন-নালেবল টাইপে null ব্যবহারের জন্য স্পষ্টভাবে "T?" সিনট্যাক্স ব্যবহার করতে হয়।'
      },
      explanation: {
        en: 'Nullable reference types bring static analysis warnings to potential null dereferences before code ever reaches production.',
        bn: 'কোড প্রোডাকশনে যাওয়ার আগেই সম্ভাব্য নাল ভুলের ব্যাপারে কম্পাইলার সতর্ক করে কোড নিরাপদ করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-types-and-the-class',
    title: {
      en: 'C# Type System & Memory Semantics Quiz',
      bn: 'C# টাইপ সিস্টেম এবং মেমোরি সেমান্টিক্স কুইজ'
    },
    questions: [
      {
        id: 'quiz-ref-struct-heap-restriction',
        kind: 'mcq',
        topic: 'ref-struct-stack-only-constraint',
        question: {
          en: 'Why does the C# language strictly prohibit a "ref struct" (such as Span<T>) from being boxed, used as a generic argument, or declared as a field inside a class?',
          bn: 'C# ভাষা কেন একটি "ref struct" (যেমন Span<T>) কে বক্স করা, জেনেরিক টাইপ হিসেবে ব্যবহার করা বা কোনো ক্লাসের ফিল্ড বানানোর ওপর কঠোর নিষেধাজ্ঞা আরোপ করে?'
        },
        options: [
          {
            en: 'To strictly guarantee that a ref struct is allocated ONLY on the execution stack and can never escape onto the managed heap, avoiding complex GC lifetime tracking',
            bn: 'এটি কঠোরভাবে নিশ্চিত করতে যে একটি ref struct কেবল এবং কেবল স্ট্যাক মেমোরিতেই থাকবে এবং কখনো হিপে যেতে পারবে না, যা জটিল গারবেজ কালেকশন ট্র্যাকিং রোধ করে'
          },
          {
            en: 'Because ref structs are incompatible with 64-bit processors',
            bn: 'কারণ ref struct ৬৪-বিট প্রসেসরের সাথে সামঞ্জস্যপূর্ণ নয়'
          },
          {
            en: 'Because classes cannot contain more than 2 fields',
            bn: 'কারণ ক্লাসে ২ টির বেশি ফিল্ড থাকতে পারে না'
          },
          {
            en: 'Ref structs were designed exclusively for mobile game development',
            bn: 'ref struct কেবল মোবাইল গেম তৈরির জন্য উদ্ভাবন করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Ref structs are stack-only types by design.',
          bn: 'ref struct কেবল এবং কেবলমাত্র স্ট্যাক মেমোরির জন্যই সীমাবদ্ধ থাকে।'
        },
        explanation: {
          en: 'Ref structs enforce the stack-only constraint so that interior pointers into native or stack memory never outlive their stack frame.',
          bn: 'মেমোরির অপব্যবহার রোধ করতে এবং অতিদ্রুত গতি বজায় রাখতে ref struct কে হিপে যাওয়া থেকে বিরত রাখা হয়।'
        }
      },
      {
        id: 'quiz-readonly-record-struct-stack-efficiency',
        kind: 'mcq',
        topic: 'readonly-record-struct-stack-efficiency',
        question: {
          en: 'What architectural benefit is achieved by declaring a domain DTO as a "readonly record struct" rather than a "record class"?',
          bn: 'একটি ডোমেন DTO-কে "record class" এর বদলে "readonly record struct" হিসেবে ঘোষণা করলে কোন আর্কিটেকচারাল সুবিধা অর্জিত হয়?'
        },
        options: [
          {
            en: 'It combines value-based equality and immutability with stack allocation, producing zero garbage collection heap overhead during rapid object creation',
            bn: 'এটি ভ্যালু সমতা ও অপরিবর্তনীয়তার সাথে স্ট্যাক মেমোরির সুবিধা যোগ করে, ফলে দ্রুত হাজার হাজার অবজেক্ট তৈরি করলেও হিপে কোনো গারবেজ কালেকশন চাপ পড়ে না'
          },
          {
            en: 'It doubles the size of network packets',
            bn: 'এটি নেটওয়ার্ক প্যাকেটের সাইজ দ্বিগুণ করে'
          },
          {
            en: 'It automatically saves records to a SQLite database on disk',
            bn: 'এটি স্বয়ংক্রিয়ভাবে রেকর্ডগুলোকে ডিস্কের SQLite ডেটাবেসে সেভ করে'
          },
          {
            en: 'Record structs can only have 1 single property',
            bn: 'রেকর্ড স্ট্রাক্টে কেবল ১ টি প্রপার্টি রাখা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Readonly record structs allocate on the stack with value equality.',
          bn: 'Readonly record struct স্ট্যাকে থাকে এবং ভ্যালু সমতার সুবিধা দেয়।'
        },
        explanation: {
          en: 'A readonly record struct provides value equality while living on the stack, completely bypassing the GC heap for high-frequency operations.',
          bn: 'হিপে কোনো আবর্জনা তৈরি না করে দ্রুতগতিতে কাজ করার জন্য এটি অত্যন্ত কার্যকর।'
        }
      },
      {
        id: 'quiz-string-immutability-interning',
        kind: 'mcq',
        topic: 'string-immutability-string-intern-pool',
        question: {
          en: 'In C#, strings are reference types. Why does mutating a string produce a brand new string instance, and what is the String Intern Pool?',
          bn: 'C#-এ string হলো একটি রেফারেন্স টাইপ। স্ট্রিং পরিবর্তন করতে গেলে কেন একটি সম্পূর্ণ নতুন স্ট্রিং তৈরি হয়, এবং String Intern Pool কী?'
        },
        options: [
          {
            en: 'Strings are immutable for thread safety and hashing integrity; the Intern Pool caches unique string literals in a global runtime table so identical literals share one heap instance',
            bn: 'থ্রেড নিরাপত্তা ও হ্যাশের নির্ভরযোগ্যতার স্বার্থে স্ট্রিং ইমিউটেবল রাখা হয়েছে; ইন্টার্ন পুল গ্লোবাল টেবিলে একই লেখার স্ট্রিং লিটারেলগুলোর জন্য একটি একক শেয়ার্ড হিপ অবজেক্ট সংরক্ষণ করে'
          },
          {
            en: 'Strings mutate in-place by resizing the motherboard memory',
            bn: 'স্ট্রিং সরাসরি মাদারবোর্ড মেমোরির আকার পরিবর্তন করে পরিবর্তিত হয়'
          },
          {
            en: 'The Intern Pool is a paid cloud storage service from Microsoft Azure',
            bn: 'ইন্টার্ন পুল হলো মাইক্রোসফট অ্যাজুরি ক্লাউডের একটি পেইড সার্ভিস'
          },
          {
            en: 'Strings in C# can only hold 255 characters maximum',
            bn: 'C#-এ স্ট্রিং সর্বোচ্চ ২৫৫ টি অক্ষর ধারণ করতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Strings are immutable reference types; identical literals are interned to conserve memory.',
          bn: 'স্ট্রিং অপরিবর্তনীয় এবং মেমোরি বাঁচাতে একই লেখার লিটারেলগুলোকে ইন্টার্ন পুলে রাখা হয়।'
        },
        explanation: {
          en: 'String immutability prevents unexpected side-effects. The CLR string intern pool shares common literal references across the app domain.',
          bn: 'স্ট্রিং অপরিবর্তনশীল হওয়ায় একাধিক থ্রেডে নিরাপদ থাকে এবং ইন্টার্ন পুল মেমোরি সাশ্রয় করে।'
        }
      },
      {
        id: 'quiz-with-expression-nondestructive-mutation',
        kind: 'mcq',
        topic: 'with-expression-shallow-clone-mechanics',
        question: {
          en: 'How does the C# "with" expression perform non-destructive mutation on a record instance?',
          bn: 'C#-এর "with" এক্সপ্রেশন কীভাবে একটি রেকর্ড ইনস্ট্যান্সের ওপর মূল মান অক্ষুণ্ণ রেখে নতুন পরিবর্তিত অবজেক্ট তৈরি করে?'
        },
        options: [
          {
            en: 'It executes a compiler-synthesized copy constructor to create a shallow clone of the record, then applies the specified property overrides to the new clone',
            bn: 'এটি কম্পাইলারের তৈরি কপি কনস্ট্রাক্টর চালিয়ে রেকর্ডের একটি শ্যালো ক্লোন তৈরি করে এবং তারপর নতুন ক্লোনটিতে কাঙ্ক্ষিত মানগুলো প্রতিস্থাপন করে'
          },
          {
            en: 'It modifies the private memory of the original record instance directly',
            bn: 'এটি মূল রেকর্ডের প্রাইভেট মেমোরি সরাসরি পরিবর্তন করে দেয়'
          },
          {
            en: 'It deletes the original record from memory before creating the new one',
            bn: 'এটি নতুনটি তৈরির আগেই পুরনো রেকর্ড মেমোরি থেকে মুছে ফেলে'
          },
          {
            en: 'The "with" keyword was deprecated in C# 9',
            bn: 'C# ৯ সংস্করণে "with" কি-ওয়ার্ডটি বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The "with" expression creates a clone with modified properties.',
          bn: '"with" এক্সপ্রেশন মূল অবজেক্ট অবিকল রেখে নির্দিষ্ট ফিল্ড বদলে নতুন কপি তৈরি করে।'
        },
        explanation: {
          en: 'The with expression preserves immutability by cloning the original record and applying only the specified property assignments to the clone.',
          bn: 'ইমিউটেবল আর্কিটেকচারে ডেটা নিরাপদ রেখে নতুন তথ্য প্রস্তুত করতে এই মেকানিজম চমৎকার ভূমিকা রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'linq-and-the-query',
    title: {
      en: 'LINQ & Declarative Data Pipelines',
      bn: 'LINQ এবং ডিক্ল্যারেটিভ ডেটা পাইপলাইন'
    }
  }
};
