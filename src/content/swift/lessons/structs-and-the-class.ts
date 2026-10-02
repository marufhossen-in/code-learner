import type { Lesson } from '../../../lib/types';

export const StructsAndTheClassLesson: Lesson = {
  slug: 'structs-and-the-class',
  tech: 'swift',
  title: {
    en: 'Value Types vs Reference Types: Structs & Classes',
    bn: 'ভ্যালু টাইপ বনাম রেফারেন্স টাইপ: স্ট্রাক্ট এবং ক্লাস'
  },
  summary: {
    en: 'Master the fundamental memory architecture of Swift. Contrast stack-allocated value types (structs) with heap-allocated reference types (classes), explore how Copy-on-Write (COW) optimizes standard collections like Array, trace Automatic Reference Counting (ARC) lifecycle management, and apply mutating methods correctly.',
    bn: 'Swift-এর মৌলিক মেমোরি আর্কিটেকচার আয়ত্ত করুন। স্ট্যাকের ভ্যালু টাইপ (স্ট্রাক্ট) বনাম হিপের রেফারেন্স টাইপ (ক্লাস)-এর তুলনা, কপি-অন-রাইট (COW) কীভাবে অ্যারে অপটিমাইজ করে, অটোমেটিক রেফারেন্স কাউন্টিং (ARC)-এর জীবনচক্র এবং mutating মেথডের সঠিক প্রয়োগ।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'value-vs-reference-heading',
      text: {
        en: 'Value Types (Structs) versus Reference Types (Classes)',
        bn: 'ভ্যালু টাইপ (স্ট্রাক্ট) বনাম রেফারেন্স টাইপ (ক্লাস)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Choosing between value types and reference types represents the most important architectural decision in Swift. In Swift (Apple\'s type-safe compiled programming language), structs are value types, while classes are reference types. When a struct is assigned to a new variable or passed to a function, Swift performs a bitwise copy, ensuring each variable maintains completely independent memory on the stack. Conversely, when a class instance is assigned, Swift copies only an 8-byte pointer to the existing heap allocation. Multiple callers share the exact same underlying heap object, meaning mutations performed by one caller immediately affect all other callers. Swift conventions strongly mandate defaulting to structs unless shared mutable identity or class inheritance is strictly required.',
        bn: 'ভ্যালু টাইপ এবং রেফারেন্স টাইপের মধ্যে সঠিক নির্বাচন হলো Swift অ্যাপ্লিকেশনের সবচেয়ে গুরুত্বপূর্ণ স্থাপত্যিক সিদ্ধান্ত। Swift (অ্যাপলের তৈরি টাইপ-নিরাপদ কম্পাইল্ড ভাষা)-এ স্ট্রাক্ট হলো ভ্যালু টাইপ, আর ক্লাস হলো রেফারেন্স টাইপ। একটি স্ট্রাক্ট নতুন ভেরিয়েবলে অ্যাসাইন করলে বা ফাংশনে পাঠালে স্ট্যাকের ওপর একটি সম্পূর্ণ স্বাধীন নতুন কপি তৈরি হয়। এর বিপরীতে একটি ক্লাস অ্যাসাইন করলে হিপের আসল অবজেক্টের দিকে কেবল একটি ৮-বাইটের পয়েন্টার কপি হয়। একাধিক জায়গা থেকে একই হিপ অবজেক্ট শেয়ার হওয়ার কারণে এক জায়গার পরিবর্তন অন্য সব জায়গায় সাথে সাথে প্রতিফলিত হয়। অ্যাপল এবং আধুনিক Swift রীতিতে শেয়ার্ড মিউটেবল পরিচিতি বা ইনহেরিটেন্সের একান্ত প্রয়োজন না থাকলে ডিফল্টভাবে সর্বদা স্ট্রাক্ট ব্যবহারের কঠোর নির্দেশনা দেওয়া হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural comparison between Value Types (isolated stack copies) and Reference Types (shared heap pointers with ARC reference counting).',
        bn: 'চিত্র ১: ভ্যালু টাইপ (স্ট্যাকে সংরক্ষিত স্বাধীন কপি) এবং রেফারেন্স টাইপের (হিপে সংরক্ষিত শেয়ার্ড অবজেক্ট ও ARC কাউন্টিং)-এর মেমোরি তুলনা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SWIFT VALUE TYPES (STACK) VS REFERENCE TYPES (HEAP)</text>

  <!-- Left: Value Type (Struct) -->
  <g transform="translate(35, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#0284c7" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Value Types (struct Point): Independent Stack Data</text>

    <!-- Struct A -->
    <rect x="20" y="45" width="155" height="100" rx="6" fill="#0f172a" stroke="#38bdf8" />
    <text x="97" y="68" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">var a = Point(10, 20)</text>
    <text x="30" y="95" fill="#cbd5e1" font-size="10" font-family="monospace">x: 10 (8 Bytes)</text>
    <text x="30" y="115" fill="#cbd5e1" font-size="10" font-family="monospace">y: 20 (8 Bytes)</text>
    <text x="30" y="133" fill="#94a3b8" font-size="9" font-family="sans-serif">Stack Allocated</text>

    <!-- Struct B -->
    <rect x="190" y="45" width="155" height="100" rx="6" fill="#0f172a" stroke="#10b981" />
    <text x="267" y="68" fill="#34d399" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">var b = a</text>
    <text x="200" y="95" fill="#34d399" font-size="10" font-family="monospace">x: 99 (Mutated!)</text>
    <text x="200" y="115" fill="#cbd5e1" font-size="10" font-family="monospace">y: 20 (8 Bytes)</text>
    <text x="200" y="133" fill="#94a3b8" font-size="9" font-family="sans-serif">Physical Bitwise Copy</text>

    <!-- Explanation -->
    <rect x="20" y="160" width="325" height="60" rx="6" fill="#0284c7" fill-opacity="0.15" stroke="#0284c7" />
    <text x="30" y="182" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold">Zero Shared Side Effects:</text>
    <text x="30" y="202" fill="#f8fafc" font-size="10" font-family="sans-serif">Mutating 'b' leaves 'a.x = 10' completely unaltered!</text>
  </g>

  <!-- Right: Reference Type (Class) -->
  <g transform="translate(440, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#d97706" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Reference Types (class Node): Shared Heap State</text>

    <!-- Stack Pointers -->
    <rect x="15" y="45" width="140" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="68" fill="#fbbf24" font-size="10" font-family="monospace">ref1: 0x8400 (8B)</text>

    <rect x="15" y="95" width="140" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="118" fill="#fbbf24" font-size="10" font-family="monospace">ref2: 0x8400 (8B)</text>

    <!-- Heap Target Object -->
    <rect x="195" y="45" width="155" height="90" rx="6" fill="#0f172a" stroke="#10b981" />
    <text x="272" y="68" fill="#34d399" font-size="10" font-family="monospace" text-anchor="middle">Heap Object (0x8400)</text>
    <text x="205" y="92" fill="#38bdf8" font-size="10" font-family="monospace">ARC Count: 2</text>
    <text x="205" y="112" fill="#fbbf24" font-size="10" font-family="monospace">value: "Updated"</text>

    <!-- Explanation -->
    <rect x="15" y="160" width="335" height="60" rx="6" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="182" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Shared Mutable Identity:</text>
    <text x="25" y="202" fill="#f8fafc" font-size="10" font-family="sans-serif">Mutating ref2.value changes what ref1 observes!</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'cow-and-arc-lifecycle-heading',
      text: {
        en: 'Copy-on-Write (COW) Collections and Automatic Reference Counting',
        bn: 'কপি-অন-রাইট (COW) কালেকশন এবং অটোমেটিক রেফারেন্স কাউন্টিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A naive implementation of value semantics would duplicate millions of elements whenever an Array or Dictionary is passed into a function. Swift solves this performance challenge through Copy-on-Write (COW). Collections are implemented as lightweight structs containing an internal pointer to a shared heap storage buffer. When an array is assigned ("var b = a"), Swift copies only the pointer without duplicating buffer memory. Only when a caller invokes a mutating method does the runtime inspect "isKnownUniquelyReferenced". If the buffer is shared by multiple variables, Swift transparently performs a physical deep copy just before writing. Furthermore, class lifecycles are governed by Automatic Reference Counting (ARC): the compiler inserts retain and release calls deterministically at build time, freeing heap memory instantly when reference counts reach zero without any garbage collection latency spikes.',
        bn: 'ভ্যালু সেমান্টিকসের সাধারণ নিয়মে প্রতিটি ফাংশন কলে লাখ লাখ ডেটা কপি হলে সিস্টেমের গতি ধীর হয়ে যেত। Swift এই সমস্যার সমাধান করে কপি-অন-রাইট (COW) প্রযুক্তির মাধ্যমে। Array বা Dictionary কালেকশনগুলো মূলত ছোট স্ট্রাক্ট যা হিপের আসল ডেটা বাফারের একটি পয়েন্টার ধারণ করে। যখন কোনো অ্যারে নতুন ভেরিয়েবলে রাখা হয় ("var b = a"), তখন কোনো ডেটা কপি না করে কেবল সেই পয়েন্টারটি শেয়ার করা হয়। যখন কোনো একটি ভেরিয়েবল ডেটা বদলাতে (mutate) যায়, কেবল তখনই রানটাইম পরীক্ষা করে দেখে বাফারটি একাধিক জায়গায় শেয়ার্ড কিনা। শেয়ার্ড থাকলে লেখার ঠিক পূর্ব মুহূর্তে একটি আলাদা ফিজিক্যাল কপি তৈরি হয়। উপরন্তু ক্লাস অবজেক্টের আয়ু নিয়ন্ত্রিত হয় অটোমেটিক রেফারেন্স কাউন্টিং (ARC) দ্বারা: কম্পাইলার নিজে থেকেই মেমোরি তৈরি ও ধ্বংসের কোড বসিয়ে দেয়, ফলে রেফারেন্স শূন্য হওয়া মাত্র কোনো গার্বেজ কালেক্টরের বিরতি ছাড়াই তৎক্ষণাৎ মেমোরি মুক্ত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Swift value types vs reference types, Copy-on-Write (COW), and ARC lifecycle management.',
        bn: 'Swift ভ্যালু টাইপ বনাম রেফারেন্স টাইপ, কপি-অন-রাইট (COW) এবং ARC ব্যবস্থাপনার TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Swift Value Semantics, Copy-on-Write (COW), and ARC Memory Management

// 1. Struct Value Semantics Simulation
export class PointStruct {
  constructor(public x: number, public y: number) {}

  // Simulating value copy on assignment
  public clone(): PointStruct {
    return new PointStruct(this.x, this.y);
  }

  // Simulating mutating func
  public mutate(newX: number, newY: number): void {
    this.x = newX;
    this.y = newY;
  }
}

// 2. Class Reference Semantics and ARC Simulation
export class NodeClass {
  public referenceCount = 1;
  public isDeallocated = false;

  constructor(public label: string) {
    console.log('[ARC Init] Instantiated NodeClass on Heap:', this.label);
  }

  public retain(): void {
    this.referenceCount += 1;
    console.log('[ARC Retain]', this.label, 'count now:', this.referenceCount);
  }

  public release(): void {
    this.referenceCount -= 1;
    console.log('[ARC Release]', this.label, 'count now:', this.referenceCount);
    if (this.referenceCount === 0) {
      this.deinit();
    }
  }

  private deinit(): void {
    this.isDeallocated = true;
    console.log('[ARC Deinit] Reference count reached 0. Heap memory deallocated deterministically!');
  }
}

// 3. Copy-on-Write (COW) Buffer Simulator
export class SwiftArrayCowSimulator {
  private buffer: { data: number[]; refCount: number };

  constructor(initialData: number[]) {
    this.buffer = { data: [...initialData], refCount: 1 };
  }

  // Assign array: shallow pointer copy, increments buffer refCount
  public copy(): SwiftArrayCowSimulator {
    const copyInstance = Object.create(SwiftArrayCowSimulator.prototype) as SwiftArrayCowSimulator;
    this.buffer.refCount += 1;
    (copyInstance as unknown as { buffer: unknown }).buffer = this.buffer;
    console.log('[COW Assign] Buffer shared! Reference count:', this.buffer.refCount);
    return copyInstance;
  }

  // Mutating method: checks uniqueness before write
  public append(item: number): void {
    if (this.buffer.refCount > 1) {
      console.log('[COW Triggered] Buffer is shared (refCount ' + this.buffer.refCount + '). Performing deep clone before mutation!');
      this.buffer.refCount -= 1;
      this.buffer = { data: [...this.buffer.data, item], refCount: 1 };
    } else {
      console.log('[COW In-Place] Buffer is uniquely referenced. Appending in-place without allocation.');
      this.buffer.data.push(item);
    }
  }

  public getElements(): number[] {
    return this.buffer.data;
  }
}

// Execution Demonstration
// 1. Struct Value Independence
const p1 = new PointStruct(10, 20);
const p2 = p1.clone();
p2.mutate(99, 20);
console.log('Point 1 X (unaffected):', p1.x); // 10
console.log('Point 2 X (mutated):', p2.x); // 99

// 2. COW Array Performance Optimization
const arr1 = new SwiftArrayCowSimulator([1, 2, 3]);
const arr2 = arr1.copy(); // Shares buffer without O(n) clone
arr2.append(4); // COW triggers deep clone here!
console.log('Arr1 items:', arr1.getElements().length); // 3
console.log('Arr2 items:', arr2.getElements().length); // 4

// 3. Class ARC Lifecycle
const node = new NodeClass('UserSession');
node.retain(); // Ref count = 2
node.release(); // Ref count = 1
node.release(); // Ref count = 0 -> deinit executes instantly!`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Value Type',
          def: {
            en: 'Types (structs, enums) copied on assignment where each variable maintains independent memory on the stack.',
            bn: 'যেসব টাইপ (স্ট্রাক্ট, এনাম) অ্যাসাইন করার সময় কপি হয় এবং প্রতিটির জন্য স্ট্যাকে স্বাধীন মেমোরি থাকে।'
          }
        },
        {
          term: 'Reference Type',
          def: {
            en: 'Types (classes, actors) whose variables hold pointers referencing a shared instance allocated on the heap.',
            bn: 'যেসব টাইপ (ক্লাস, অ্যাক্টর) হিপের একই অবজেক্ট নির্দেশকারী পয়েন্টার শেয়ার করে।'
          }
        },
        {
          term: 'Copy-on-Write (COW)',
          def: {
            en: 'Optimization delaying the physical cloning of a shared collection buffer until a mutation is actively performed.',
            bn: 'অপটিমাইজেশন কৌশল যা কোনো ডেটা পরিবর্তন না হওয়া পর্যন্ত শেয়ার্ড বাফারের নতুন কপি তৈরি স্থগিত রাখে।'
          }
        },
        {
          term: 'Automatic Reference Counting',
          def: {
            en: 'Compile-time memory management system tracking retain counts and freeing class instances instantly when count reaches zero.',
            bn: 'কম্পাইল-টাইম মেমোরি ব্যবস্থা যা রেফারেন্স গণনা শূন্য হওয়া মাত্র ক্লাস অবজেক্ট অবিলম্বে মুছে দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'struct-vs-class-assignment-difference-ex1',
      kind: 'mcq',
      topic: 'struct-vs-class-assignment-semantics',
      question: {
        en: 'What fundamentally occurs when a struct instance is assigned to a new variable ("var b = a") in Swift?',
        bn: 'Swift-এ একটি স্ট্রাক্ট অবজেক্টকে নতুন ভেরিয়েবলে অ্যাসাইন করলে ("var b = a") মূলত কী ঘটে?'
      },
      options: [
        {
          en: 'A completely independent value copy is created on the stack, ensuring mutations to b never alter variable a',
          bn: 'স্ট্যাকের ওপর একটি সম্পূর্ণ স্বাধীন নতুন কপি তৈরি হয়, ফলে b পরিবর্তন করলে a-তে কোনো প্রভাব পড়ে না'
        },
        {
          en: 'Both variables point to the same shared heap memory location',
          bn: 'উভয় ভ্যারিয়েবল হিপ মেমোরির একই ঠিকানাকে নির্দেশ করে'
        },
        {
          en: 'The operating system restarts the active process',
          bn: 'অপারেটিং সিস্টেম চলমান প্রসেস রিস্টার্ট করে'
        },
        {
          en: 'Struct assignment was deprecated in Swift 4.0',
          bn: 'Swift ৪.০ সংস্করণে স্ট্রাক্ট অ্যাসাইনমেন্ট বাতিল করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Structs have value semantics: copying creates an independent instance.',
        bn: 'স্ট্রাক্ট হলো ভ্যালু টাইপ; অ্যাসাইন করলে আসল ডেটার সম্পূর্ণ নতুন কপি তৈরি হয়।'
      },
      explanation: {
        en: 'Because structs are value types, assignment duplicates the data. This value semantics guarantee eliminates unintended side effects across disparate parts of the codebase.',
        bn: 'ফলে অ্যাপ্লিকেশনের এক অংশের কাজে অন্য অংশে অনিচ্ছাকৃত বাগ তৈরি হওয়ার সুযোগ থাকে না।'
      }
    },
    {
      id: 'copy-on-write-optimization-role-ex2',
      kind: 'mcq',
      topic: 'copy-on-write-array-performance',
      question: {
        en: 'How does Copy-on-Write (COW) protect application performance when passing large arrays in Swift?',
        bn: 'Swift-এ বড় অ্যারে পাস করার সময় কপি-অন-রাইট (COW) কীভাবে অ্যাপ্লিকেশনের পারফরম্যান্স রক্ষা করে?'
      },
      options: [
        {
          en: 'It shares the internal heap buffer pointer between variables without duplicating memory until one variable attempts to mutate the array',
          bn: 'যতক্ষণ না কোনো একটি ভ্যারিয়েবল ডেটা পরিবর্তন করতে যায়, ততক্ষণ মেমোরি কপি না করে কেবল অভ্যন্তরীণ পয়েন্টারটি শেয়ার করে রাখে'
        },
        {
          en: 'It compresses the array using gzip compression before every method call',
          bn: 'প্রতিটি মেথড কলের আগে এটি জিজিপ কম্প্রেশন দিয়ে অ্যারে ছোট করে'
        },
        {
          en: 'It deletes half of the array elements randomly to save RAM',
          bn: 'র‍্যাম বাঁচাতে এটি এলোমেলোভাবে অর্ধেক উপাদান মুছে ফেলে'
        },
        {
          en: 'COW requires arrays to contain only 8-bit integers',
          bn: 'COW এর জন্য অ্যারেতে কেবল ৮-বিট পূর্ণসংখ্যা থাকা আবশ্যক'
        }
      ],
      answer: 0,
      hint: {
        en: 'COW delays expensive copying until an actual write occurs.',
        bn: 'শুধুমাত্র লেখার সময়ই নতুন মেমোরি খরচ হয়, পড়ার সময় নয়।'
      },
      explanation: {
        en: 'Without COW, passing an array of 100000 elements would trigger an expensive O(n) heap allocation on every function boundary. COW ensures allocations occur only on mutation.',
        bn: 'ফলে বড় ডেটা স্ট্রাকচার পাস করলেও কোনো অপ্রয়োজনীয় মেমোরি অপচয় ঘটে না।'
      }
    },
    {
      id: 'mutating-keyword-struct-requirement-ex3',
      kind: 'mcq',
      topic: 'mutating-methods-struct-value-semantics',
      question: {
        en: 'Why must a method on a Swift struct be marked with the "mutating" keyword if it modifies any of the struct\'s properties?',
        bn: 'Swift স্ট্রাক্টের কোনো মেথড ভেতরের প্রোপার্টি পরিবর্তন করলে কেন সেটিকে "mutating" কি-ওয়ার্ড দিয়ে চিহ্নিত করতে হয়?'
      },
      options: [
        {
          en: 'Because struct methods treat "self" as immutable by default; the mutating keyword signals to the compiler that self will be reassigned with an updated value',
          bn: 'কারণ স্ট্রাক্ট মেথড ডিফল্টভাবে "self"-কে ইমিউটেবল মনে করে; mutating কি-ওয়ার্ড কম্পাইলারকে জানায় যে self-এর মান নতুন আপডেট দিয়ে প্রতিস্থাপিত হবে'
        },
        {
          en: 'To allow the method to execute on background thread pools',
          bn: 'মেথডটিকে ব্যাকগ্রাউন্ড থ্রেডপুলে চলার অনুমতি দিতে'
        },
        {
          en: 'To format the struct as an XML file on disk',
          bn: 'স্ট্রাক্টটিকে ডিস্কে একটি এক্সএমএল ফাইল হিসেবে রূপান্তর করতে'
        },
        {
          en: 'The mutating keyword was removed in Swift 5.0',
          bn: 'Swift ৫.০ সংস্করণে mutating কি-ওয়ার্ড বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'By default, methods on value types cannot modify properties of self.',
        bn: 'ভ্যালু টাইপের মেথডে self নিজে অপরিবর্তনীয় থাকে, তাই পরিবর্তন করতে চাইলে mutating ঘোষণা দিতে হয়।'
      },
      explanation: {
        en: 'Structs enforce value immutability. When declared with "let", mutating methods cannot be called on that instance, guaranteeing compile-time mutation safety.',
        bn: 'ভেরিয়েবলটি let দিয়ে তৈরি হলে কম্পাইলার কোনো mutating মেথড ডাকতে দেয় না, যা পূর্ণ সুরক্ষা দেয়।'
      }
    },
    {
      id: 'arc-vs-garbage-collection-ex4',
      kind: 'mcq',
      topic: 'arc-deterministic-cleanup-vs-tracing-gc',
      question: {
        en: 'How does Automatic Reference Counting (ARC) differ fundamentally from a Tracing Garbage Collector (such as Java or Go)?',
        bn: 'ট্রেসিং গার্বেজ কালেক্টরের (যেমন Java বা Go) তুলনায় অটোমেটিক রেফারেন্স কাউন্টিং (ARC) কীভাবে মৌলিকভাবে আলাদা?'
      },
      options: [
        {
          en: 'ARC deterministically frees heap memory the exact microsecond reference count hits zero with zero runtime "stop-the-world" pauses, whereas a tracing GC runs periodic background sweeps',
          bn: 'ARC রেফারেন্স কাউন্ট শূন্য হওয়া মাত্র সেই মাইক্রোসেকেন্ডেই মেমোরি খালি করে দেয় কোনো "stop-the-world" পজ ছাড়াই, যেখানে ট্রেসিং জিসি নির্দিষ্ট সময় পর পর মেমোরি পরিষ্কার করে'
        },
        {
          en: 'ARC only works when the computer is disconnected from the internet',
          bn: 'ARC কেবল তখনই কাজ করে যখন কম্পিউটার ইন্টারনেট থেকে বিচ্ছিন্ন থাকে'
        },
        {
          en: 'ARC requires allocating 100 megabytes of memory per class',
          bn: 'প্রতিটি ক্লাসের জন্য ARC ১০০ মেগাবাইট মেমোরি দাবি করে'
        },
        {
          en: 'There is zero architectural difference between ARC and a tracing garbage collector',
          bn: 'ARC এবং ট্রেসিং গার্বেজ কালেক্টরের মধ্যে কোনো স্থাপত্যিক পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'ARC performs deterministic deallocation at scope exit with zero GC pauses.',
        bn: 'কাজ শেষ হওয়ার সাথে সাথেই মেমোরি মুক্ত হয়, কোনো ব্যাকগ্রাউন্ড বিরতি ছাড়াই।'
      },
      explanation: {
        en: 'Because ARC code is inserted by the compiler at build time, memory cleanup is immediate and predictable, making Swift ideal for real-time graphics and audio.',
        bn: 'এর মাধ্যমে গেম বা রিয়েল-টাইম গ্রাফিক্সে কোনো ফ্রেম ড্রপ বা অনাকাঙ্ক্ষিত ল্যাগ থাকে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-structs-and-the-class',
    title: {
      en: 'Swift Structs, Classes & Memory Architecture Quiz',
      bn: 'Swift স্ট্রাক্ট, ক্লাস এবং মেমোরি আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'quiz-final-keyword-class-optimization',
        kind: 'mcq',
        topic: 'final-keyword-devirtualization-performance',
        question: {
          en: 'What architectural and performance benefit is unlocked by marking a Swift class as "final class MyService"?',
          bn: 'একটি Swift ক্লাসকে "final class MyService" হিসেবে ঘোষণা করলে কোন স্থাপত্যিক ও পারফরম্যান্স সুবিধা পাওয়া যায়?'
        },
        options: [
          {
            en: 'It forbids subclassing, allowing the compiler to replace dynamic vtable dispatch with direct static function calls and inline methods aggressively',
            bn: 'এটি সাবক্লাসিং নিষিদ্ধ করে, যার ফলে কম্পাইলার ধীরগতির ভার্চুয়াল টেবিলের বদলে সরাসরি স্ট্যাটিক কল ও ইনলাইনিং সুবিধা দিতে পারে'
          },
          {
            en: 'It deletes the class bytecode after the first function call',
            bn: 'প্রথমবার মেথড ডাকার পর এটি ক্লাসের বাইটকোড মুছে দেয়'
          },
          {
            en: 'It encrypts the class methods using RSA-2048',
            bn: 'এটি RSA-2048 ব্যবহার করে ক্লাসের মেথড এনক্রিপ্ট করে'
          },
          {
            en: 'The final keyword was deprecated in Swift 5.0',
            bn: 'Swift ৫.০ সংস্করণে final কি-ওয়ার্ড বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'final enables devirtualization (static direct calls instead of dynamic vtable lookup).',
          bn: 'সাবক্লাস না থাকায় কম্পাইলার সরাসরি দ্রুততম মেশিন কোড বানাতে পারে।'
        },
        explanation: {
          en: 'When a class cannot be overridden, the compiler performs devirtualization. Method invocations turn into direct jump instructions with 0 ns indirect lookup penalty.',
          bn: 'রানটাইমে টেবিল খোঁজার সময় নষ্ট না হওয়ায় মেথড কলের গতি বহুগুণ বৃদ্ধি পায়।'
        }
      },
      {
        id: 'quiz-struct-memberwise-initializer',
        kind: 'mcq',
        topic: 'struct-automatic-memberwise-initializer',
        question: {
          en: 'What convenient initializer does the Swift compiler automatically synthesize for structs that classes do not receive?',
          bn: 'স্ট্রাক্টের ক্ষেত্রে Swift কম্পাইলার স্বয়ংক্রিয়ভাবে কোন সুবিধাজনক ইনিশিয়ালাইজার তৈরি করে দেয় যা ক্লাস পায় না?'
        },
        options: [
          {
            en: 'An automatic Memberwise Initializer accepting parameters for all stored properties in declaration order',
            bn: 'একটি স্বয়ংক্রিয় মেম্বারওয়াইজ ইনিশিয়ালাইজার যা স্ট্রাক্টের সমস্ত প্রোপার্টির জন্য ক্রমানুসারে প্যারামিটার গ্রহণ করে'
          },
          {
            en: 'A network socket initializer for listening on port 80',
            bn: 'পোর্ট ৮০-এ শোনার জন্য একটি নেটওয়ার্ক সকেট ইনিশিয়ালাইজার'
          },
          {
            en: 'An SQL database table migration initializer',
            bn: 'একটি এসকিউএল ডাটাবেজ টেবিল মাইগ্রেশন ইনিশিয়ালাইজার'
          },
          {
            en: 'Structs never receive any initializers from the compiler',
            bn: 'স্ট্রাক্ট কখনো কম্পাইলার থেকে কোনো ইনিশিয়ালাইজার পায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Structs get an automatic memberwise init matching all stored properties.',
          bn: 'স্ট্রাক্ট তৈরির সময় বাড়তি init না লিখলেও কম্পাইলার সব প্রোপার্টির জন্য মেথড বানিয়ে দেয়।'
        },
        explanation: {
          en: 'Classes require developers to explicitly author initializers to ensure all stored properties are configured before initialization completes. Structs generate it automatically.',
          bn: 'এর ফলে সাধারণ ডেটা মডেল স্ট্রাক্টে বারবার কষ্ট করে ইনিশিয়ালাইজার টাইপ করতে হয় না।'
        }
      },
      {
        id: 'quiz-deinit-lifecycle-classes-only',
        kind: 'mcq',
        topic: 'deinitializer-exclusive-to-reference-types',
        question: {
          en: 'Why do classes in Swift support deinitializers ("deinit") while structs are strictly forbidden from defining them?',
          bn: 'Swift-এ ক্লাস কেন ডি-ইনিশিয়ালাইজার ("deinit") সমর্থন করে অথচ স্ট্রাক্টের ক্ষেত্রে এটি লেখা সম্পূর্ণ নিষিদ্ধ?'
        },
        options: [
          {
            en: 'Classes have shared identity on the heap managed by ARC; deinit executes when reference count hits zero. Structs live on the stack and are popped immediately with the stack frame',
            bn: 'ক্লাস হিপ মেমোরিতে থাকে এবং ARC দ্বারা নিয়ন্ত্রিত হয়; কাউন্ট শূন্য হলে deinit চলে। আর স্ট্রাক্ট স্ট্যাকে থাকে যা স্কোপ শেষ হওয়া মাত্র সরাসরি স্ট্যাক ফ্রেমের সাথে সাফ হয়ে যায়'
          },
          {
            en: 'Because structs are converted into JSON strings at runtime',
            bn: 'কারণ স্ট্রাক্ট রানটাইমে জেএসন স্ট্রিংয়ে রূপান্তরিত হয়'
          },
          {
            en: 'deinit was removed from structs to conserve electricity',
            bn: 'বিদ্যুৎ বাঁচাতে স্ট্রাক্ট থেকে deinit বাদ দেওয়া হয়েছে'
          },
          {
            en: 'Classes do not actually support deinit in modern Swift',
            bn: 'আধুনিক Swift-এ ক্লাস মূলত deinit সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Classes have reference identity and run deinit on heap release.',
          bn: 'হিপে থাকা অবজেক্ট মুক্ত করার সময় বিশেষ কাজ করার জন্য deinit কেবল ক্লাসে প্রযোজ্য।'
        },
        explanation: {
          en: 'Stack memory for structs is reclaimed instantly when the CPU stack pointer increments. Classes require custom teardown (closing sockets, freeing resources) when the final reference dies.',
          bn: 'স্ট্যাকের মেমোরি নিমিষেই সাফ হয় বলে স্ট্রাক্টে বাড়তি deinit প্রয়োজন হয় না।'
        }
      },
      {
        id: 'quiz-identity-operator-triple-equals',
        kind: 'mcq',
        topic: 'identity-operator-triple-equals-reference-comparison',
        question: {
          en: 'What does the triple equals operator ("===") test when applied to two class variables in Swift?',
          bn: 'Swift-এ দুটি ক্লাস ভেরিয়েবলের ওপর ট্রিপল সমান অপারেটর ("===") প্রয়োগ করলে এটি মূলত কী পরীক্ষা করে?'
        },
        options: [
          {
            en: 'It verifies whether both variables point to the exact same physical heap memory address (identical reference identity)',
            bn: 'এটি যাচাই করে যে উভয় ভ্যারিয়েবল হিপ মেমোরির হুবহু একই ঠিকানাকে নির্দেশ করছে কিনা (অভিন্ন রেফারেন্স পরিচিতি)'
          },
          {
            en: 'It checks whether their property names contain the same number of vowels',
            bn: 'তাদের প্রোপার্টির নামে সমান সংখ্যক ভাওয়েল আছে কিনা তা দেখে'
          },
          {
            en: 'It converts both classes into 64-bit floating point numbers',
            bn: 'উভয় ক্লাসকে ৬৪-বিট ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করে'
          },
          {
            en: '=== is only allowed for comparing string literals',
            bn: '=== কেবল স্ট্রিং লিটারেল তুলনা করার জন্য প্রযোজ্য'
          }
        ],
        answer: 0,
        hint: {
          en: '=== checks reference identity (same memory address).',
          bn: 'দুটি অবজেক্ট মেমোরির একই ঠিকানায় বাস করে কিনা তা জানতে এটি ব্যবহৃত হয়।'
        },
      explanation: {
        en: 'While "==" checks value equality via Equatable, "===" tests reference identity, proving whether two pointers target the exact same heap instance.',
        bn: 'মান সমান হওয়া আর হুবহু একই অবজেক্ট হওয়া এক কথা নয়; ২ টি পয়েন্টার হিপ মেমোরির একই ইনস্ট্যান্স নির্দেশ করছে কিনা তা নিশ্চিত করতে === লাগে।'
      }
      }
    ]
  },
  nextLesson: {
    slug: 'closures-and-the-capture',
    title: {
      en: 'Closures, Escaping Semantics & Retain Cycles',
      bn: 'ক্লোজার, এস্কেপিং সেমান্টিকস এবং রিটেইন সাইকেল'
    }
  }
};
