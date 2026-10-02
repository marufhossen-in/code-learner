import type { Lesson } from '../../../lib/types';

export const MovesAndTheOwnerLesson: Lesson = {
  slug: 'moves-and-the-owner',
  tech: 'lang-rust',
  title: {
    en: 'Ownership, Moves & Deterministic Drop',
    bn: 'ওনারশিপ, মুভ এবং নির্ধারিত ড্রপ'
  },
  summary: {
    en: 'Master Rust\'s foundational memory model without a garbage collector. Understand the 3 cardinal ownership rules, inspect 24-byte String stack headers (ptr, len, cap) pointing to heap buffers, contrast move semantics against deep cloning, distinguish Copy versus Move types, and trace deterministic deallocation via Drop::drop().',
    bn: 'গার্বেজ কালেক্টর ছাড়াই Rust-এর মৌলিক মেমোরি মডেল আয়ত্ত করুন। ৩ টি প্রধান ওনারশিপ নিয়ম, হিপ বাফার নির্দেশকারী ২৪-বাইটের String স্ট্যাক হেডার (ptr, len, cap), ডিপ ক্লোনিং বনাম মুভ সেমান্টিকস, Copy বনাম Move টাইপের পার্থক্য এবং Drop মেথডের মাধ্যমে সুনির্দিষ্ট মেমোরি মুক্তকরণ।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'ownership-rules-and-memory-layout-heading',
      text: {
        en: 'The 3 Ownership Rules and Memory Layout',
        bn: '৩ টি ওনারশিপ নিয়ম এবং মেমোরির বিন্যাস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Memory management has traditionally forced a painful compromise: manual allocation in C with risks of dangling pointers, or automatic tracing garbage collection in Java or Go with runtime stop-the-world pauses. Rust (the memory-safe systems programming language) delivers a third paradigm through compile-time ownership. Ownership is governed by 3 cardinal rules: Rule 1: Each value in Rust has an owner variable. Rule 2: There can only be 1 owner at a time. Rule 3: When the owner goes out of scope, the value is dropped deterministically. When an owned String is created, Rust allocates a 24-byte header on the stack consisting of three 8-byte fields: a 64-bit pointer ("ptr") to the heap buffer, a 64-bit length ("len"), and a 64-bit capacity ("cap").',
        bn: 'প্রথাগত মেমোরি ব্যবস্থাপনায় হয় C ভাষার মতো ম্যানুয়াল ম্যানেজমেন্ট করতে হতো যেখানে ঝুলন্ত পয়েন্টার বা মেমোরি লিকের মারাত্মক ঝুঁকি থাকে, নয়তো Java বা Go-এর মতো রানটাইম গার্বেজ কালেক্টরের ওপর নির্ভর করতে হতো যা অ্যাপ্লিকেশনকে সাময়িক থামিয়ে দেয়। Rust (মেমোরি-নিরাপদ সিস্টেম প্রোগ্রামিং ভাষা) কম্পাইল-টাইম ওনারশিপের মাধ্যমে একটি তৃতীয় বিকল্প উপহার দেয়। ওনারশিপ ৩ টি মৌলিক নিয়মে চলে: নিয়ম ১: Rust-এ প্রতিটি মানের কেবল একজন ওনার বা মালিক ভেরিয়েবল থাকে। নিয়ম ২: যেকোনো নির্দিষ্ট মুহূর্তে কেবল ১ জন ওনার থাকতে পারে। নিয়ম ৩: ওনার ভেরিয়েবলের স্কোপ শেষ হওয়া মাত্রই মানটি মেমোরি থেকে নিজে থেকেই মুছে বা ড্রপ হয়ে যায়। যখন একটি String তৈরি হয়, Rust স্ট্যাকের ওপর ২৪-বাইটের একটি হেডার তৈরি করে যাতে ৮-বাইটের ৩ টি ফিল্ড থাকে: হিপের মূল ডেটা নির্দেশকারী ৬৪-বিট পয়েন্টার ("ptr"), বর্তমান দৈর্ঘ্য ("len"), এবং মোট ধারণক্ষমতা ("cap")।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural diagram of Rust Move semantics: Transferring ownership copies the 24-byte stack header and invalidates variable s1, leaving the heap allocation untouched.',
        bn: 'চিত্র ১: Rust মুভ সেমান্টিকসের স্থাপত্য: ওনারশিপ স্থানান্তরের সময় স্ট্যাকের ২৪-বাইট হেডারটি কপি হয় এবং ভেরিয়েবল s1 সঙ্গে সঙ্গে নিষ্ক্রিয় হয়ে যায়, কিন্তু হিপের ডেটা আগের মতোই থাকে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUST STACK (24 BYTES) VS HEAP MEMORY LAYOUT</text>

  <!-- Stack Frame Area -->
  <g transform="translate(30, 60)">
    <rect width="360" height="240" rx="8" fill="#1e293b" stroke="#334155" stroke-width="2" />
    <text x="180" y="25" fill="#38bdf8" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">Stack Frame (Local Scope)</text>

    <!-- Variable s1 (Invalidated / Moved) -->
    <g transform="translate(15, 45)">
      <rect width="155" height="170" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4" />
      <rect width="155" height="24" rx="6" fill="#ef4444" fill-opacity="0.2" />
      <text x="77" y="16" fill="#f87171" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">let s1 (INVALIDATED)</text>

      <text x="12" y="46" fill="#94a3b8" font-size="10" font-family="monospace">ptr: 0x55a0</text>
      <text x="12" y="66" fill="#94a3b8" font-size="10" font-family="monospace">len: 5 (8B)</text>
      <text x="12" y="86" fill="#94a3b8" font-size="10" font-family="monospace">cap: 8 (8B)</text>
      <text x="12" y="115" fill="#ef4444" font-size="10" font-family="sans-serif">Moved to s2!</text>
      <text x="12" y="132" fill="#ef4444" font-size="9" font-family="sans-serif">Access = E0382</text>
      <text x="12" y="152" fill="#64748b" font-size="9" font-family="monospace">Total: 24 Bytes</text>
    </g>

    <!-- Variable s2 (Current Owner) -->
    <g transform="translate(190, 45)">
      <rect width="155" height="170" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="2" />
      <rect width="155" height="24" rx="6" fill="#10b981" fill-opacity="0.2" />
      <text x="77" y="16" fill="#34d399" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">let s2 = s1 (ACTIVE)</text>

      <text x="12" y="46" fill="#38bdf8" font-size="10" font-family="monospace">ptr: 0x55a0 (8B)</text>
      <text x="12" y="66" fill="#cbd5e1" font-size="10" font-family="monospace">len: 5 (8B)</text>
      <text x="12" y="86" fill="#cbd5e1" font-size="10" font-family="monospace">cap: 8 (8B)</text>
      <text x="12" y="115" fill="#34d399" font-size="10" font-family="sans-serif">Sole Active Owner</text>
      <text x="12" y="132" fill="#cbd5e1" font-size="9" font-family="sans-serif">Calls drop() at end</text>
      <text x="12" y="152" fill="#64748b" font-size="9" font-family="monospace">Total: 24 Bytes</text>
    </g>
  </g>

  <!-- Pointer Arrow -->
  <path d="M 345 130 C 400 130, 430 145, 470 145" fill="none" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow)" />

  <!-- Heap Memory Buffer -->
  <g transform="translate(470, 60)">
    <rect width="335" height="240" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <text x="167" y="25" fill="#38bdf8" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">Heap Memory (0x55a0)</text>

    <!-- Buffer Elements -->
    <g transform="translate(20, 55)">
      <rect x="0" y="0" width="55" height="55" rx="5" fill="#0f172a" stroke="#38bdf8" />
      <text x="27" y="32" fill="#f8fafc" font-size="18" font-family="monospace" font-weight="bold" text-anchor="middle">'h'</text>
      <text x="27" y="50" fill="#64748b" font-size="9" font-family="monospace" text-anchor="middle">[0]</text>

      <rect x="58" y="0" width="55" height="55" rx="5" fill="#0f172a" stroke="#38bdf8" />
      <text x="85" y="32" fill="#f8fafc" font-size="18" font-family="monospace" font-weight="bold" text-anchor="middle">'e'</text>
      <text x="85" y="50" fill="#64748b" font-size="9" font-family="monospace" text-anchor="middle">[1]</text>

      <rect x="116" y="0" width="55" height="55" rx="5" fill="#0f172a" stroke="#38bdf8" />
      <text x="143" y="32" fill="#f8fafc" font-size="18" font-family="monospace" font-weight="bold" text-anchor="middle">'l'</text>
      <text x="143" y="50" fill="#64748b" font-size="9" font-family="monospace" text-anchor="middle">[2]</text>

      <rect x="174" y="0" width="55" height="55" rx="5" fill="#0f172a" stroke="#38bdf8" />
      <text x="201" y="32" fill="#f8fafc" font-size="18" font-family="monospace" font-weight="bold" text-anchor="middle">'l'</text>
      <text x="201" y="50" fill="#64748b" font-size="9" font-family="monospace" text-anchor="middle">[3]</text>

      <rect x="232" y="0" width="55" height="55" rx="5" fill="#0f172a" stroke="#38bdf8" />
      <text x="259" y="32" fill="#f8fafc" font-size="18" font-family="monospace" font-weight="bold" text-anchor="middle">'o'</text>
      <text x="259" y="50" fill="#64748b" font-size="9" font-family="monospace" text-anchor="middle">[4]</text>
    </g>

    <!-- Buffer Metadata -->
    <rect x="20" y="130" width="295" height="90" rx="6" fill="#0f172a" />
    <text x="35" y="155" fill="#94a3b8" font-size="11" font-family="sans-serif">Heap Allocation: 8 contiguous bytes</text>
    <text x="35" y="175" fill="#34d399" font-size="11" font-family="sans-serif">Length = 5 bytes ("hello")</text>
    <text x="35" y="195" fill="#fbbf24" font-size="11" font-family="sans-serif">Capacity = 8 bytes (3 bytes spare headroom)</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'move-semantics-and-drop-heading',
      text: {
        en: 'Move Semantics, Deep Cloning, and RAII Deallocation',
        bn: 'মুভ সেমান্টিকস, ডিপ ক্লোনিং এবং RAII মেমোরি রিলিজ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When assigning one non-primitive variable to another ("let s2 = s1;"), languages like Python or JavaScript create an alias pointing to the exact same memory without altering the original variable. In C++, this triggers an expensive deep copy by default unless explicitly moved. Rust adopts Move Semantics: it copies the 24-byte stack header from s1 into s2, but immediately invalidates s1 at compile time. Any subsequent attempt to read s1 halts compilation with compiler error E0382 ("borrow of moved value"). This guarantees that exactly 1 owner ever frees the heap memory via "Drop::drop()", eradicating double-free bugs and dangling pointers forever.',
        bn: 'যখন একটি নন-প্রিমিটিভ ভেরিয়েবল অন্য ভেরিয়েবলে অ্যাসাইন করা হয় ("let s2 = s1;"), তখন পাইথন বা জাভাস্ক্রিপ্ট মূল ভেরিয়েবল অক্ষত রেখে মেমোরিতে একটি নতুন অ্যালিয়াস তৈরি করে। C++ এ সাধারণত একটি ব্যয়বহুল ডিপ কপি তৈরি হয় যদি না স্পষ্টভাবে মুভ করা হয়। কিন্তু Rust অনন্য মুভ সেমান্টিকস (Move Semantics) অনুসরণ করে: এটি স্ট্যাকের ওপর থাকা ২৪-বাইটের হেডারটি s1 থেকে s2-এ কপি করে নেয়, কিন্তু কম্পাইল-টাইমেই তাৎক্ষণিকভাবে s1 কে পুরোপুরি নিষ্ক্রিয় বা ইনভ্যালিড করে দেয়। এরপর কোডে s1 ব্যবহারের চেষ্টা করলে কম্পাইলার E0382 এরর দিয়ে বিল্ড আটকে দেয়। এর ফলে ঠিক ১ জন সক্রিয় মালিক নিশ্চিত থাকে যে স্কোপ শেষে "Drop::drop()" মেথড ডেকে হিপ বাফার মেমোরি মুছে দেবে, যা ডাবল-ফ্রি বা মেমোরি নষ্টের ভয় চিরতরে দূর করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Rust 24-byte String stack headers, move semantics, and RAII Drop execution.',
        bn: 'Rust ২৪-বাইট String স্ট্যাক হেডার, মুভ সেমান্টিকস এবং RAII ড্রপ এক্সিকিউশনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Rust Memory Layout and Ownership Move Semantics

export interface HeapAllocation {
  address: number;
  data: string;
  isDeallocated: boolean;
}

export class RustStringSimulator {
  // 24-byte Stack Header on 64-bit architecture
  public ptr: number; // 8 bytes (points to heap memory address)
  public len: number; // 8 bytes (number of valid payload bytes)
  public cap: number; // 8 bytes (total allocated capacity)
  private heapRef: HeapAllocation;
  private isMoved = false;

  constructor(value: string, heapStore: Map<number, HeapAllocation>, baseAddr: number) {
    this.len = value.length;
    this.cap = Math.max(8, value.length * 2);
    this.ptr = baseAddr;

    this.heapRef = {
      address: baseAddr,
      data: value,
      isDeallocated: false
    };
    heapStore.set(baseAddr, this.heapRef);
  }

  // Move ownership: copies 24B stack header and invalidates the source
  public moveOwnership(): RustStringSimulator {
    if (this.isMoved) {
      throw new Error('E0382: Use of moved value. Variable has already been moved!');
    }
    this.isMoved = true;

    // Create shallow copy of 24-byte stack frame
    const newOwner = Object.create(RustStringSimulator.prototype) as RustStringSimulator;
    newOwner.ptr = this.ptr;
    newOwner.len = this.len;
    newOwner.cap = this.cap;
    (newOwner as unknown as { heapRef: HeapAllocation }).heapRef = this.heapRef;
    (newOwner as unknown as { isMoved: boolean }).isMoved = false;

    return newOwner;
  }

  // RAII Drop: deterministic cleanup at scope exit
  public drop(): void {
    if (this.isMoved) {
      // Moved variables do NOT run drop: no double-free!
      return;
    }
    this.heapRef.isDeallocated = true;
    console.log('Drop::drop() executed. Freed heap address: ' + this.ptr);
  }

  public read(): string {
    if (this.isMoved) {
      throw new Error('E0382: Value accessed after move!');
    }
    return this.heapRef.data;
  }
}

// Execution demonstration
const heap = new Map<number, HeapAllocation>();
const s1 = new RustStringSimulator('hello', heap, 0x55a0);

console.log('s1 length:', s1.len, 'bytes'); // 5
console.log('s1 capacity:', s1.cap, 'bytes'); // 10
console.log('s1 initial read:', s1.read()); // 'hello'

// Move ownership: s1 -> s2
const s2 = s1.moveOwnership();
console.log('s2 read (active owner):', s2.read()); // 'hello'

// s1 is now dead! Attempting to read throws E0382
try {
  s1.read();
} catch (e: unknown) {
  console.log('Accessing s1:', (e as Error).message); // E0382
}

// End of scope: s1 drop does nothing, s2 drop cleans heap
s1.drop();
s2.drop();
console.log('Heap address 0x55a0 deallocated:', heap.get(0x55a0)?.isDeallocated); // true`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Ownership',
          def: {
            en: 'Rust\'s compile-time contract establishing that every value has exactly 1 variable responsible for its lifecycle.',
            bn: 'Rust-এর কম্পাইল-টাইম নিয়ম যা নির্ধারণ করে প্রতিটি ডেটার ঠিক ১ জন একক মালিক ভেরিয়েবল থাকবে।'
          }
        },
        {
          term: 'Move Semantics',
          def: {
            en: 'Transferring data ownership by copying only the stack header and instantly invalidating the source variable.',
            bn: 'স্ট্যাকের হেডার কপি করে মূল ভেরিয়েবলকে অবিলম্বে নিষ্ক্রিয় করার মাধ্যমে ওনারশিপ স্থানান্তর পদ্ধতি।'
          }
        },
        {
          term: 'RAII (Drop)',
          def: {
            en: 'Resource Acquisition Is Initialization: automatic, deterministic resource cleanup as soon as owner leaves scope.',
            bn: 'ওনার ভেরিয়েবলের স্কোপ শেষ হওয়ার সাথে সাথে স্বয়ংক্রিয় ও নির্ভুলভাবে মেমোরি খালি করার নিয়ম।'
          }
        },
        {
          term: 'Copy Trait',
          def: {
            en: 'Marker trait for primitive types entirely stored on the stack (like i32) whose bitwise copy does not invalidate source.',
            bn: 'স্ট্যাকে থাকা আদিম টাইপগুলোর (যেমন i32) জন্য ট্রেইট, যার বাইট কপি করলেও মূল ভেরিয়েবল সক্রিয় থাকে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'rust-ownership-cardinal-rule-count-ex1',
      kind: 'mcq',
      topic: 'ownership-three-cardinal-rules',
      question: {
        en: 'How many fundamental ownership rules does the Rust compiler strictly enforce at build time?',
        bn: 'Rust কম্পাইলার কোড বিল্ড করার সময় ওনারশিপ সংক্রান্ত কয়টি মৌলিক নিয়ম কঠোরভাবে প্রয়োগ করে?'
      },
      options: [
        {
          en: 'Exactly 3 rules: each value has an owner, only 1 owner at a time, and the value is dropped when the owner exits scope',
          bn: 'ঠিক ৩ টি নিয়ম: প্রতিটি মানের একজন মালিক থাকবে, এক সময়ে কেবল ১ জন মালিক থাকবে, এবং মালিকের স্কোপ শেষ হলে মানটি ড্রপ হবে'
        },
        {
          en: 'Exactly 5 rules including garbage collector thread pausing',
          bn: 'গার্বেজ কালেক্টর থ্রেড থামানোসহ ঠিক ৫ টি নিয়ম'
        },
        {
          en: 'Only 1 rule that applies solely to floating point numbers',
          bn: 'কেবল ১ টি নিয়ম যা শুধুমাত্র ফ্লোটিং পয়েন্ট সংখ্যার জন্য প্রযোজ্য'
        },
        {
          en: 'There are zero rules because Rust relies on an automatic background tracing collector',
          bn: 'কোনো নিয়ম নেই কারণ Rust স্বয়ংক্রিয় ব্যাকগ্রাউন্ড ট্রেসিং কালেক্টরের ওপর নির্ভর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Rust ownership is governed by 3 cardinal rules.',
        bn: 'ওনারশিপের ৩ টি মূল স্তম্ভ রয়েছে যা মেমোরি নিরাপত্তাকে গণিতের মতো নিশ্চিত করে।'
      },
      explanation: {
        en: 'The 3 rules guarantee complete memory safety at compile time without requiring a runtime garbage collector.',
        bn: 'এই ৩ টি নিয়ম মেনে চলার কারণে Rust-এ কোনো রানটাইম ওভারহেড ছাড়াই ১০০% নিরাপদ মেমোরি পাওয়া যায়।'
      }
    },
    {
      id: 'rust-string-stack-header-size-ex2',
      kind: 'mcq',
      topic: 'string-stack-header-layout-size',
      question: {
        en: 'What is the physical size and structure of a String variable on the stack in 64-bit Rust?',
        bn: 'একটি ৬৪-বিট আর্কিটেকচারে Rust-এর String ভেরিয়েবল স্ট্যাকের ওপর কত বাইট জায়গা নেয় এবং তার গঠন কী?'
      },
      options: [
        {
          en: 'Exactly 24 bytes, comprising an 8-byte pointer, an 8-byte length, and an 8-byte capacity',
          bn: 'ঠিক ২৪ বাইট, যার মধ্যে একটি ৮-বাইটের পয়েন্টার, একটি ৮-বাইটের দৈর্ঘ্য এবং একটি ৮-বাইটের ক্যাপাসিটি থাকে'
        },
        {
          en: 'Exactly 8 bytes holding only the heap memory pointer',
          bn: 'ঠিক ৮ বাইট যা কেবল হিপ মেমোরির পয়েন্টারটি ধরে রাখে'
        },
        {
          en: 'A dynamic size depending on how many characters are stored in the string',
          bn: 'একটি পরিবর্তনশীল সাইজ যা স্ট্রিংয়ে থাকা অক্ষরের সংখ্যার ওপর নির্ভর করে'
        },
        {
          en: 'Exactly 64 bytes allocated inside the CPU registers',
          bn: 'সিপিইউ রেজিস্টারের ভেতরে বরাদ্দকৃত ঠিক ৬৪ বাইট'
        }
      ],
      answer: 0,
      hint: {
        en: 'A String stores 3 64-bit words on the stack: ptr, len, and cap (3 x 8 = 24 bytes).',
        bn: 'স্ট্যাকে ৩ টি ফিল্ড থাকে: ptr, len, এবং cap; প্রতিটিতে ৮ বাইট করে মোট ২৪ বাইট।'
      },
      explanation: {
        en: 'The String header on the stack is a fixed 24 bytes on 64-bit systems. The variable-length text itself lives on the heap.',
        bn: 'স্ট্যাকের ওপর এই ২৪ বাইট সর্বদা স্থির থাকে, আর অক্ষরের আসল তালিকাটি হিপে সংরক্ষিত থাকে।'
      }
    },
    {
      id: 'rust-compiler-error-e0382-move-ex3',
      kind: 'mcq',
      topic: 'move-semantics-compiler-error-e0382',
      question: {
        en: 'What occurs when you assign an existing String to a new variable ("let s2 = s1;") and then try to inspect s1 in Rust?',
        bn: 'Rust-এ একটি String-কে নতুন ভেরিয়েবলে অ্যাসাইন করার পর ("let s2 = s1;") পুনরায় s1 কে ব্যবহারের চেষ্টা করলে কী ঘটে?'
      },
      options: [
        {
          en: 'The compiler halts with error E0382 ("borrow of moved value") because s1 was invalidated during the move',
          bn: 'কম্পাইলার তাৎক্ষণিকভাবে E0382 এরর ("borrow of moved value") দিয়ে বিল্ড আটকে দেয় কারণ মুভের সময় s1 নিষ্ক্রিয় হয়ে গেছে'
        },
        {
          en: 'The code prints an empty string to the console',
          bn: 'কোডটি কনসোলে একটি খালি স্ট্রিং প্রিন্ট করে'
        },
        {
          en: 'The program crashes with a segmentation fault at runtime',
          bn: 'রানটাইমে প্রোগ্রামটি সেগমেন্টেশন ফল্ট দিয়ে ক্র্যাশ করে'
        },
        {
          en: 'Both variables share ownership of the heap memory concurrently',
          bn: 'উভয় ভেরিয়েবল একই সাথে হিপ মেমোরির যৌথ মালিকানা লাভ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Rust uses move semantics for types that do not implement Copy.',
        bn: 'ওনারশিপ হস্তান্তরিত হয়ে গেলে আগের ভেরিয়েবলটি কম্পাইলারের কাছে তাৎক্ষণিকভাবে মৃত ঘোষিত হয়।'
      },
      explanation: {
        en: 'Because String implements Move semantics rather than Copy, assigning s1 to s2 moves ownership. s1 is invalidated to prevent double-free bugs.',
        bn: 'এর ফলে মেমোরি দুবার ফ্রি হওয়ার কোনো আশঙ্কা থাকে না।'
      }
    },
    {
      id: 'copy-trait-vs-move-types-ex4',
      kind: 'mcq',
      topic: 'copy-trait-stack-types-distinction',
      question: {
        en: 'Why does assigning an integer variable to another ("let y = x;") NOT invalidate variable x in Rust?',
        bn: 'পূর্ণসংখ্যার ভেরিয়েবল অন্য ভেরিয়েবলে অ্যাসাইন করলে ("let y = x;") কেন Rust-এ আগের ভেরিয়েবল x নিষ্ক্রিয় হয় না?'
      },
      options: [
        {
          en: 'Primitive integers implement the Copy trait because their data resides entirely on the stack, allowing cheap bitwise copies',
          bn: 'আদিম পূর্ণসংখ্যাগুলো Copy ট্রেইট বাস্তবায়ন করে কারণ তাদের সমস্ত ডেটা স্ট্যাকের ভেতরে থাকে, ফলে দ্রুত বিটওয়াইজ কপি সম্ভব হয়'
        },
        {
          en: 'Integers are stored on the hard drive rather than computer memory',
          bn: 'পূর্ণসংখ্যাগুলো কম্পিউটারের মেমোরির বদলে হার্ড ড্রাইভে জমা থাকে'
        },
        {
          en: 'Because integers are managed by an asynchronous background daemon',
          bn: 'কারণ পূর্ণসংখ্যাগুলো একটি ব্যাকগ্রাউন্ড ডেমন দ্বারা পরিচালিত হয়'
        },
        {
          en: 'Copying integers requires manual memory freeing via free()',
          bn: 'পূর্ণসংখ্যা কপি করার পর ম্যানুয়ালি free() কল করতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Types stored entirely on the stack implement the Copy trait.',
        bn: 'যেসব ডেটা শুধুমাত্র স্ট্যাকে থাকে এবং কোনো হিপ মেমোরি নির্দেশ করে না, সেগুলো কপি করা একদম সস্তা।'
      },
      explanation: {
        en: 'Types implementing Copy undergo a simple bitwise memcpy on the stack without ownership transfer, keeping both source and target valid.',
        bn: 'এতে কোনো জটিল ওনারশিপ হস্তান্তরের প্রয়োজন পড়ে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-moves-and-the-owner',
    title: {
      en: 'Rust Ownership & Memory Management Quiz',
      bn: 'Rust ওনারশিপ এবং মেমোরি ম্যানেজমেন্ট কুইজ'
    },
    questions: [
      {
        id: 'quiz-ownership-double-free-prevention',
        kind: 'mcq',
        topic: 'double-free-vulnerability-elimination',
        question: {
          en: 'How does Rust\'s ownership model mathematically prevent the catastrophic "double-free" security vulnerability common in C?',
          bn: 'C ভাষার মারাত্মক "ডাবল-ফ্রি" নিরাপত্তা ত্রুটি Rust-এর ওনারশিপ মডেল কীভাবে গাণিতিকভাবে প্রতিরোধ করে?'
        },
        options: [
          {
            en: 'By strictly enforcing single ownership, so only 1 variable ever owns a heap resource and calls Drop::drop() when its scope terminates',
            bn: 'কঠোরভাবে একক মালিকানা নিশ্চিত করার মাধ্যমে, যাতে কেবল ১ জন ভেরিয়েবল হিপের মালিক থাকে এবং স্কোপ শেষে Drop মেথড চালায়'
          },
          {
            en: 'By installing a hardware antivirus chip onto the motherboard',
            bn: 'মাদারবোর্ডে একটি হার্ডওয়্যার অ্যান্টিভাইরাস চিপ যুক্ত করে'
          },
          {
            en: 'By rebooting the server whenever a memory block is freed',
            bn: 'যেকোনো মেমোরি মুক্ত করার সময় সার্ভার রিবুট করে'
          },
          {
            en: 'Rust permits double-freeing if the user provides admin credentials',
            bn: 'অ্যাডমিন অনুমতি দিলে Rust একই মেমোরি দুবার মুক্ত করতে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Only the active single owner runs the drop destructor.',
          bn: 'যেহেতু মালিক একজনই থাকে, তাই একই মেমোরি দুইবার মুছে ফেলার কোনো সুযোগ কম্পাইলার দেয় না।'
        },
        explanation: {
          en: 'In C, if two pointers reference the same allocation and both call free(), memory corruption occurs. In Rust, moves invalidate old owners, ensuring drop() executes exactly once.',
          bn: 'পুরাতন ভেরিয়েবল নিষ্ক্রিয় হয়ে যাওয়ায় ড্রপ মেথডটি কেবল একবারই কার্যকর হতে পারে।'
        }
      },
      {
        id: 'quiz-ownership-string-clone-vs-move',
        kind: 'mcq',
        topic: 'string-clone-heap-duplication-cost',
        question: {
          en: 'What is the performance difference between "let s2 = s1;" and "let s2 = s1.clone();" for an owned String in Rust?',
          bn: 'Rust-এ একটি String-এর ক্ষেত্রে "let s2 = s1;" এবং "let s2 = s1.clone();" এর মধ্যে পারফরম্যান্সের পার্থক্য কী?'
        },
        options: [
          {
            en: 's1 move copies only the 24-byte stack header and invalidates s1; clone performs an expensive heap allocation and copies all string bytes',
            bn: 's1 মুভ কেবল ২৪-বাইটের স্ট্যাক হেডার কপি করে s1 কে নিষ্ক্রিয় করে; আর clone হিপে নতুন মেমোরি বরাদ্দ করে সমস্ত অক্ষর কপি করে'
          },
          {
            en: 'Clone is 10 times faster than a move in all benchmark scenarios',
            bn: 'সব ধরণের বেঞ্চমার্কে clone একটি মুভের চেয়ে ১০ গুণ দ্রুত'
          },
          {
            en: 'There is zero difference; both compile to identical assembly instructions',
            bn: 'কোনো পার্থক্য নেই; উভয়ই হুবহু একই অ্যাসেম্বলি কোডে কম্পাইল হয়'
          },
          {
            en: 'Move operations are only allowed in debug mode',
            bn: 'মুভ অপারেশন কেবল ডিবাগ মোডে ব্যবহার করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Move copies the stack header (24B); clone duplicates the heap data.',
          bn: 'মুভ কেবল ওপরের ২৪ বাইট নাড়াচাড়া করে, কিন্তু ক্লোন ভেতরের সব লেখার নতুন কপি বানায়।'
        },
        explanation: {
          en: 'Move is an O(1) shallow copy of the stack metadata. Clone is an O(n) deep copy that requests fresh memory from the operating system allocator.',
          bn: 'তাই পারফরম্যান্স ধরে রাখতে অপ্রয়োজনীয় ক্লোন পরিহার করে মুভ বা বরো করা উচিত।'
        }
      },
      {
        id: 'quiz-ownership-function-argument-passing',
        kind: 'mcq',
        topic: 'ownership-transfer-across-function-arguments',
        question: {
          en: 'What happens to the caller\'s variable "val" when passed into a function defined as "fn consume(data: String)"?',
          bn: '"fn consume(data: String)" হিসেবে সংজ্ঞায়িত মেথডে কলারের ভেরিয়েবল "val" পাস করলে কী ঘটে?'
        },
        options: [
          {
            en: 'Ownership of the heap buffer moves into the function\'s "data" parameter; when "consume" finishes, the buffer is dropped and the caller can no longer access "val"',
            bn: 'হিপ বাফারের মালিকানা ফাংশনের "data" প্যারামিটারে চলে যায়; "consume" শেষ হলে মেমোরি ড্রপ হয়ে যায় এবং কলার আর কখনোই "val" ব্যবহার করতে পারে না'
          },
          {
            en: 'The compiler creates a background thread to keep val alive in the caller',
            bn: 'কলারের কাছে val কে জীবিত রাখতে কম্পাইলার একটি ব্যাকগ্রাউন্ড থ্রেড তৈরি করে'
          },
          {
            en: 'The caller retains full access to val without any restrictions',
            bn: 'কলার কোনো বাধা ছাড়াই val-এর পূর্ণ অ্যাক্সেস ধরে রাখে'
          },
          {
            en: 'The function automatically returns a clone of val to the operating system',
            bn: 'ফাংশনটি অপারেটিং সিস্টেমের কাছে val-এর একটি ক্লোন ফেরত পাঠায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Passing an owned argument by value moves ownership into the callee.',
          bn: 'মান সরাসরি পাস করলে ওনারশিপ ফাংশনের ভেতরে চলে যায় এবং ফাংশন শেষ হলে তা ধ্বংস হয়।'
        },
        explanation: {
          en: 'In Rust, passing an owned value into a function transfers ownership. When the receiving function returns, its parameters go out of scope and are immediately dropped.',
          bn: 'ফলে মূল কলারের কাছে সেই ভেরিয়েবলটি আর ব্যবহারের উপযোগী থাকে না।'
        }
      },
      {
        id: 'quiz-ownership-drop-trait-custom-cleanup',
        kind: 'mcq',
        topic: 'custom-drop-trait-resource-management',
        question: {
          en: 'What capability does implementing the "Drop" trait provide to custom Rust types (such as database connections or file handles)?',
          bn: 'কাস্টম Rust টাইপে (যেমন ডাটাবেজ কানেকশন বা ফাইল হ্যান্ডেল) "Drop" ট্রেইট বাস্তবায়ন করলে কোন সুবিধা পাওয়া যায়?'
        },
        options: [
          {
            en: 'It defines custom teardown logic that automatically executes the moment an instance goes out of scope, guaranteeing leak-free resource reclamation',
            bn: 'এটি কাস্টম সমাপ্তি লজিক নির্ধারণ করে যা অবজেক্টটির স্কোপ শেষ হওয়া মাত্রই স্বয়ংক্রিয়ভাবে চলে, ফলে কোনো রিসোর্স লিক হয় না'
          },
          {
            en: 'It converts the struct into an executable shell script',
            bn: 'এটি স্ট্রাক্টটিকে একটি এক্সিকিউটেবল শেল স্ক্রিপ্টে রূপান্তর করে'
          },
          {
            en: 'It disables the compiler borrow checker for that specific struct',
            bn: 'এটি সেই নির্দিষ্ট স্ট্রাক্টের জন্য কম্পাইলার বরো চেকার বন্ধ করে দেয়'
          },
          {
            en: 'It forces the operating system to format the hard drive on exit',
            bn: 'এটি প্রোগ্রাম বন্ধের সময় অপারেটিং সিস্টেমকে ডিস্ক ফরম্যাট করতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The Drop trait allows executing custom destructor code on scope exit.',
          bn: 'স্কোপ শেষ হওয়া মাত্র ফাইল বন্ধ করা বা সকেট ডিসকানেক্ট করার মতো কাজ ড্রপ মেথডে লেখা যায়।'
        },
        explanation: {
          en: 'The Drop trait provides deterministic destructor behavior. When a type exits scope, Rust invokes drop() to close file descriptors, release network sockets, or free C pointers.',
          bn: 'এর মাধ্যমে সফটওয়্যার ইঞ্জিনিয়াররা শতভাগ লিক-মুক্ত রিসোর্স ম্যানেজমেন্ট নিশ্চিত করতে পারেন।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'borrowing-and-the-reference',
    title: {
      en: 'Borrowing, References & Non-Lexical Lifetimes',
      bn: 'বরোয়িং, রেফারেন্স এবং নন-লেক্সিক্যাল লাইফটাইম'
    }
  }
};
