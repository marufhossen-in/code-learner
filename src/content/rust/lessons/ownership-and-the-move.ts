import type { Lesson } from '../../../lib/types';

export const OwnershipAndTheMoveLesson: Lesson = {
  slug: 'ownership-and-the-move',
  tech: 'rust',
  title: {
    en: 'Ownership, Move Semantics & Memory Safety',
    bn: 'ওনারশিপ, মুভ সিম্যান্টিকস এবং মেমোরি নিরাপত্তা'
  },
  summary: {
    en: 'Your first guide to memory safety in Rust: the 3 core rules of ownership. Understand stack vs heap allocation, trace deterministic RAII deallocation via the Drop trait, differentiate move semantics from deep cloning, and contrast Copy types with Move types.',
    bn: 'Rust-এর মেমোরি নিরাপত্তার প্রথম পাঠ: ওনারশিপের ৩ টি মূল নিয়ম। স্ট্যাক বনাম হিপ মেমোরি বিশ্লেষণ, Drop ট্রেইটের মাধ্যমে স্বয়ংক্রিয় RAII মেমোরি মুক্তি, মুভ সিম্যান্টিকস বনাম ডিপ ক্লোনিং এবং Copy টাইপ ও Move টাইপের পার্থক্য।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'ownership-rules-and-memory-layout-heading',
      text: {
        en: 'The 3 Rules of Ownership and Stack vs Heap Layout',
        bn: 'ওনারশিপের ৩ টি মূল নিয়ম এবং স্ট্যাক বনাম হিপ বিন্যাস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In traditional languages, memory safety requires either manual memory management (like malloc and free in C) or a runtime garbage collector (like Go or Java). Rust (the memory-safe systems programming language) pioneers a third way: compile-time ownership. Ownership governs resource lifetimes through 3 strict rules: 1. Each value in Rust has an owner variable. 2. There can only ever be 1 owner at a time. 3. When the owner goes out of scope, the value is dropped immediately. Simple primitive values (like i32) live entirely on the execution stack. Dynamic data (like String) stores a 24-byte header on the stack consisting of a pointer, length, and capacity, pointing to a buffer allocated on the heap.',
        bn: 'সনাতন প্রোগ্রামিংয়ে মেমোরি নিরাপত্তার জন্য হয় হস্তচালিত মেমোরি বণ্টন (যেমন C ভাষায় malloc ও free) অথবা রানটাইম গার্বেজ কালেক্টরের (যেমন Go বা Java) প্রয়োজন হতো। Rust (মেমোরি-নিরাপদ সিস্টেম প্রোগ্রামিং ভাষা) ওনারশিপ বা মালিকানা মডেলের মাধ্যমে এক বৈপ্লবিক তৃতীয় পথ তৈরি করেছে। ওনারশিপ ৩ টি সুনির্দিষ্ট নিয়মে পরিচালিত হয়: ১. Rust-এ প্রতিটি মানের একজন মালিক ভেরিয়েবল থাকে। ২. যেকোনো মুহূর্তে একটি মানের কেবলমাত্র ১ জন মালিক থাকতে পারে। ৩. মালিক স্কোপের বাইরে চলে গেলে মানটি তৎক্ষণাৎ ড্রপ হয়। প্রিমিটিভ ডেটা (যেমন i32) সরাসরি স্ট্যাক মেমোরিতে থাকে। অপরদিকে ডায়নামিক ডেটা (যেমন String) স্ট্যাকে একটি ২৪-বাইটের হেডার (পয়েন্টার, দৈর্ঘ্য ও ধারণক্ষমতা) রাখে যা হিপ মেমোরির আসল বাফারকে নির্দেশ করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The memory mechanics of a Rust move: Transferring pointer ownership from s1 to s2, invalidating s1 to prevent double-free crashes.',
        bn: 'চিত্র ১: Rust মুভ অপারেশনের মেমোরি মেকানিজম: s1 থেকে s2-তে পয়েন্টার হস্তান্তর এবং ডাবল-ফ্রি ক্র্যাশ রোধে s1 বাতিলকরণ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUST OWNERSHIP TRANSFER (MOVE) VS DEEP CLONE</text>

  <!-- Box 1: Initial Variable s1 -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Initial Owner (s1)</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">let s1 = String::from;</text>
    <text x="15" y="85" fill="#38bdf8" font-size="8" font-family="monospace">ptr: 0x1000, len: 5</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Stack: 24 Bytes</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Owns Heap Buffer</text>
  </g>

  <!-- Box 2: Move to s2 -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#d97706" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Move (let s2 = s1;)</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">s2 acquires ptr: 0x1000</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">s1 is INVALIDATED</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Zero Heap Copies</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">No Double-Free Bug</text>
  </g>

  <!-- Box 3: Deep Clone -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Clone (s2.clone())</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">let s3 = s2.clone();</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">New ptr: 0x2000 on heap</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Independent Storage</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Explicit Deep Copy</text>
  </g>

  <!-- Box 4: Drop Trait -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Scope Exit (Drop)</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">Drop::drop(s2);</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Drop::drop(s3);</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">s1 is Ignored</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Deterministic RAII</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'move-semantics-and-raii-heading',
      text: {
        en: 'Move Semantics, Copy Types, and RAII Deallocation',
        bn: 'মুভ সিম্যান্টিকস, Copy টাইপস এবং RAII মেমোরি রিলিজ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When developers assign a heap-backed variable to another in Rust ("let s2 = s1;"), Rust performs a shallow copy of the 24-byte stack header and immediately invalidates the original variable "s1". This operation is called a "move". Attempting to read "s1" after the move triggers a compile-time error. By invalidating s1, Rust guarantees that when the scope exits, the heap buffer is freed exactly once via the Drop trait, completely eliminating catastrophic C++ double-free bugs. Simple types whose sizes are fixed at compile time (like integers and floating points) implement the "Copy" trait; assigning them creates an independent bitwise copy on the stack without invalidation.',
        bn: 'যখন কোনো হিপ-সংযুক্ত ভেরিয়েবল অন্য ভেরিয়েবলে অ্যাসাইন করা হয় ("let s2 = s1;"), তখন Rust স্ট্যাকের ২৪-বাইটের হেডার কপি করে এবং মূল ভেরিয়েবল "s1"-কে অবিলম্বে বাতিল করে দেয়। এই প্রক্রিয়াকে "মুভ" (move) বলা হয়। মুভ করার পর "s1" পড়ার চেষ্টা করলে কম্পাইলার এরর দিয়ে কোড আটকে দেয়। s1 বাতিল করার মাধ্যমে Rust নিশ্চয়তা দেয় যে স্কোপ শেষ হলে Drop ট্রেইটের মাধ্যমে হিপ বাফারটি ঠিক ১ বারই মুক্ত হবে, যা C++ এর মারাত্মক ডাবল-ফ্রি বাগ চিরতরে বন্ধ করে। যেসব ডেটার আকার বিল্ডের সময়ই নির্দিষ্ট থাকে (যেমন পূর্ণসংখ্যা বা ফ্লোট), তারা "Copy" ট্রেইট বাস্তবায়ন করে; ফলে সেগুলো অ্যাসাইন করলে স্ট্যাকে স্বাধীন কপি তৈরি হয় এবং মূল ভেরিয়েবল বৈধ থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Rust compile-time ownership tracking: Move invalidation, Copy semantics, and deterministic Drop execution.',
        bn: 'Rust ওনারশিপ ট্র্যাকিং, মুভ ইনভ্যালিডেশন, Copy সিম্যান্টিকস এবং Drop এক্সিকিউশনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Rust Ownership, Move Invalidation, and Drop Execution

export interface HeapBuffer {
  address: number;
  data: string;
}

export class OwnershipSimulator {
  private variables: Map<string, { buffer: HeapBuffer | null; isValid: boolean }> = new Map();
  private deallocatedAddresses: number[] = [];

  // Simulating "let s1 = String::from("Rust");"
  public allocate(varName: string, text: string, address: number): void {
    this.variables.set(varName, {
      buffer: { address: address, data: text },
      isValid: true
    });
    console.log('[Allocate] ' + varName + ' owns heap address 0x' + address.toString(16));
  }

  // Simulating "let s2 = s1;" (Move Semantics)
  public moveOwnership(fromVar: string, toVar: string): void {
    const source = this.variables.get(fromVar);
    if (!source || !source.isValid) {
      throw new Error('BorrowCheckError: Use of moved value: ' + fromVar);
    }

    // Transfer pointer ownership and invalidate source
    this.variables.set(toVar, { buffer: source.buffer, isValid: true });
    source.isValid = false;
    source.buffer = null;
    console.log('[Move] Ownership transferred from ' + fromVar + ' to ' + toVar + '. ' + fromVar + ' is now INVALID.');
  }

  // Simulating Scope Exit: Drop::drop()
  public dropScope(varNames: string[]): void {
    for (const name of varNames) {
      const entry = this.variables.get(name);
      if (entry && entry.isValid && entry.buffer) {
        this.deallocatedAddresses.push(entry.buffer.address);
        console.log('[Drop] Freeing memory address 0x' + entry.buffer.address.toString(16) + ' owned by ' + name);
        entry.isValid = false;
      }
    }
  }

  public getDeallocatedCount(): number {
    return this.deallocatedAddresses.length;
  }
}

// Execution demonstration
const simulator = new OwnershipSimulator();

// Step 1: Allocate s1
simulator.allocate('s1', 'Hello Rust', 0x1000);

// Step 2: Move s1 to s2
simulator.moveOwnership('s1', 's2');

// Step 3: Scope ends for s1 and s2
simulator.dropScope(['s1', 's2']);

// Exactly 1 memory deallocation occurred (s2 was dropped, moved s1 was ignored)
console.log('Total Deallocated Buffers:', simulator.getDeallocatedCount()); // 1`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Ownership',
          def: {
            en: 'Rust memory discipline where each value has a unique owner variable responsible for its lifecycle and deallocation.',
            bn: 'Rust-এর মেমোরি ব্যবস্থা যেখানে প্রতিটি মানের একজন একক মালিক থাকে যে তার জীবনকাল ও মেমোরি মুক্তির জন্য দায়ী।'
          }
        },
        {
          term: 'Move Semantics',
          def: {
            en: 'Assignment mechanism transferring resource ownership to a target variable while invalidating the source variable.',
            bn: 'অ্যাসাইনমেন্ট পদ্ধতি যা নতুন ভেরিয়েবলে মালিকানা হস্তান্তর করে পুরনো ভেরিয়েবলকে অবিলম্বে বাতিল করে দেয়।'
          }
        },
        {
          term: 'Drop Trait',
          def: {
            en: 'Standard trait defining the destructor method run automatically when a variable exits its execution scope.',
            bn: 'স্ট্যান্ডার্ড ট্রেইট যা ভেরিয়েবল স্কোপের বাইরে যাওয়ার সাথে সাথে স্বয়ংক্রিয়ভাবে মেমোরি রিলিজ মেথড চালায়।'
          }
        },
        {
          term: 'Copy Trait',
          def: {
            en: 'Marker trait for stack-only types whose values are duplicated bitwise on assignment without invalidating the source.',
            bn: 'স্ট্যাক-অনলি টাইপের ট্রেইট যা অ্যাসাইন করার সময় বিটওয়াইজ কপি তৈরি করে পুরনো মানকে অক্ষত রাখে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'rust-ownership-rule-count-ex1',
      kind: 'mcq',
      topic: 'rust-ownership-three-cardinal-rules',
      question: {
        en: 'How many fundamental rules of ownership govern memory management in the Rust language?',
        bn: 'Rust ভাষায় মেমোরি ব্যবস্থাপনা পরিচালনায় ওনারশিপের কয়টি মৌলিক নিয়ম রয়েছে?'
      },
      options: [
        {
          en: 'Exactly 3 rules: each value has 1 owner, there can only be 1 owner at a time, and when the owner exits scope the value is dropped',
          bn: 'ঠিক ৩ টি নিয়ম: প্রতিটি মানের ১ জন মালিক থাকে, একসাথে কেবল ১ জন মালিক হতে পারে এবং মালিক স্কোপের বাইরে গেলে মানটি ড্রপ হয়'
        },
        {
          en: 'Exactly 10 rules requiring runtime thread locks',
          bn: 'ঠিক ১০ টি নিয়ম যার জন্য রানটাইম থ্রেড লকের প্রয়োজন হয়'
        },
        {
          en: 'Only 1 rule stating all variables must be global',
          bn: 'কেবল ১ টি নিয়ম যা সব ভেরিয়েবলকে গ্লোবাল হতে নির্দেশ দেয়'
        },
        {
          en: 'Rust has zero rules because it uses a background garbage collector',
          bn: 'Rust-এ কোনো নিয়ম নেই কারণ এটি ব্যাকগ্রাউন্ড গার্বেজ কালেক্টর ব্যবহার করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Rust ownership is governed by 3 cardinal rules.',
        bn: 'ওনারশিপের ৩ টি সোনার কাঠির ওপর সম্পূর্ণ Rust ভাষা দাঁড়িয়ে আছে।'
      },
      explanation: {
        en: 'The 3 rules of ownership are enforced at compile time, guaranteeing zero-cost memory safety without runtime garbage collection.',
        bn: 'এই ৩ টি নিয়ম কম্পাইলের সময়ই প্রয়োগ করে Rust কোনো জিসি ছাড়াই শতভাগ মেমোরি নিরাপত্তা দেয়।'
      }
    },
    {
      id: 'move-semantics-invalidation-ex2',
      kind: 'mcq',
      topic: 'move-semantics-source-invalidation',
      question: {
        en: 'What happens when you write "let s2 = s1;" in Rust where "s1" is a heap-allocated String?',
        bn: 'Rust-এ "s1" একটি হিপ-ভিত্তিক String হলে "let s2 = s1;" লিখলে কী ঘটে?'
      },
      options: [
        {
          en: 'The 24-byte stack pointer, length, and capacity are copied to "s2", and "s1" is immediately invalidated by the compiler so it can no longer be used',
          bn: 'স্ট্যাকের ২৪-বাইটের পয়েন্টার, দৈর্ঘ্য ও ক্যাপাসিটি "s2"-তে কপি হয় এবং "s1" অবিলম্বে কম্পাইলার দ্বারা বাতিল হয়ে যায় যেন এটি আর ব্যবহার করা না যায়'
        },
        {
          en: 'The entire heap buffer is copied character by character to a new address',
          bn: 'হিপ মেমোরির সম্পূর্ণ ডেটা অক্ষরে অক্ষরে নতুন একটি ঠিকানায় কপি হয়'
        },
        {
          en: 'The server reboots and restarts the operating system',
          bn: 'সার্ভার রিবুট হয় এবং অপারেটিং সিস্টেম রিস্টার্ট করে'
        },
        {
          en: 'Both s1 and s2 share ownership and will both drop the memory',
          bn: 's1 এবং s2 উভয়ই মালিকানা ভাগ করে এবং উভয়েই মেমোরি ড্রপ করবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Ownership moves to s2; s1 is invalidated to prevent double-free crashes.',
        bn: 'মালিকানা s2-তে স্থানান্তরিত হয় এবং s1 বাতিল হয় যাতে ভবিষ্যতে মেমোরি দুবার মুক্ত না হয়।'
      },
      explanation: {
        en: 'Rust executes a shallow copy of stack metadata and invalidates s1. When scope exits, only s2 drops the heap buffer, preventing double-free errors.',
        bn: 'এর ফলে মেমোরি কপি করার কোনো বাড়তি সময় নষ্ট হয় না এবং সিস্টেম সর্বোচ্চ গতি পায়।'
      }
    },
    {
      id: 'copy-trait-types-behavior-ex3',
      kind: 'mcq',
      topic: 'copy-trait-bitwise-stack-duplication',
      question: {
        en: 'Why is "let y = x;" NOT a move when "x" is an integer ("i32") in Rust?',
        bn: 'Rust-এ "x" একটি পূর্ণসংখ্যা ("i32") হলে "let y = x;" কেন মুভ অপারেশন হয় না?'
      },
      options: [
        {
          en: 'Because primitive integers implement the "Copy" trait; their values live entirely on the stack and are duplicated bitwise, leaving the original variable valid',
          bn: 'কারণ প্রিমিটিভ পূর্ণসংখ্যাগুলো "Copy" ট্রেইট বাস্তবায়ন করে; এদের মান সম্পূর্ণ স্ট্যাক মেমোরিতে থাকে এবং বিটওয়াইজ কপি হওয়ায় মূল ভেরিয়েবলটি বৈধ থাকে'
        },
        {
          en: 'Because integers are encrypted with an SSL certificate',
          bn: 'কারণ পূর্ণসংখ্যাগুলো একটি এসএসএল সার্টিফিকেট দিয়ে এনক্রিপ্ট করা থাকে'
        },
        {
          en: 'Because the i32 type is stored in the computer BIOS',
          bn: 'কারণ i32 টাইপটি কম্পিউটারের বায়োসে জমা থাকে'
        },
        {
          en: 'Integers are automatically converted into strings in Rust',
          bn: 'Rust-এ পূর্ণসংখ্যা স্বয়ংক্রিয়ভাবে স্ট্রিংয়ে রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Types implementing Copy are duplicated on the stack without invalidation.',
        bn: 'যেসব টাইপে Copy ট্রেইট থাকে সেগুলো স্ট্যাকে খুব সস্তায় কপি হয়, তাই মূল ভেরিয়েবল বাতিল হয় না।'
      },
      explanation: {
        en: 'Types that do not manage external heap resources implement Copy. Simple bitwise copying on the stack has negligible cost and cannot cause double-free bugs.',
        bn: 'হিপ মেমোরি না থাকায় ডাবল-ফ্রির কোনো ভয় থাকে না, তাই এগুলো নির্দ্বিধায় কপি হতে পারে।'
      }
    },
    {
      id: 'clone-vs-move-deep-copy-ex4',
      kind: 'mcq',
      topic: 'clone-trait-deep-heap-allocation',
      question: {
        en: 'When should a Rust software engineer explicitly call "let s2 = s1.clone();" instead of relying on a move?',
        bn: 'একজন Rust সফটওয়্যার ইঞ্জিনিয়ারের কখন মুভের ওপর নির্ভর না করে স্পষ্টভাবে "let s2 = s1.clone();" কল করা উচিত?'
      },
      options: [
        {
          en: 'Only when the program genuinely requires two independent copies of the underlying heap data, and the cost of allocating a new heap buffer is acceptable',
          bn: 'কেবল তখনই যখন প্রোগ্রামের ভেতরের ডেটার দুটি সম্পূর্ণ স্বাধীন কপির প্রয়োজন হয় এবং নতুন হিপ মেমোরি বরাদ্দের খরচ যৌক্তিক হয়'
        },
        {
          en: 'On every single line of code to prevent the compiler from throwing errors',
          bn: 'কম্পাইলার এরর এড়াতে কোডের প্রতিটি লাইনে'
        },
        {
          en: 'When formatting the local hard disk drive',
          bn: 'লোকাল হার্ড ডিস্ক ড্রাইভ ফরম্যাট করার সময়'
        },
        {
          en: 'The clone method was removed in modern Rust',
          bn: 'আধুনিক Rust-এ clone মেথডটি বাতিল করা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Clone performs an explicit deep copy on the heap.',
        bn: 'Clone হিপে সম্পূর্ণ নতুন ডেটা কপি করে; কেবল দুটি আলাদা ডেটা অবজেক্টের প্রয়োজন হলেই এটি ডাকা উচিত।'
      },
      explanation: {
        en: 'Calling .clone() explicitly allocates a new heap buffer and copies all bytes. To preserve performance, idiomatic Rust prefers borrowing or moves wherever possible.',
        bn: 'পারফরম্যান্স অক্ষুণ্ণ রাখতে অভিজ্ঞ Rust ডেভেলপাররা ক্লোন পরিহার করে বরোয়িং বা মুভ ব্যবহার করেন।'
      }
    }
  ],
  quiz: {
    id: 'quiz-ownership-and-the-move',
    title: {
      en: 'Rust Ownership & Memory Safety Quiz',
      bn: 'Rust ওনারশিপ এবং মেমোরি নিরাপত্তা কুইজ'
    },
    questions: [
      {
        id: 'quiz-raii-drop-trait-automatic-cleanup',
        kind: 'mcq',
        topic: 'raii-drop-trait-automatic-resource-cleanup',
        question: {
          en: 'What architectural guarantee does Rust\'s RAII (Resource Acquisition Is Initialization) pattern provide when a file or socket variable exits scope?',
          bn: 'যখন কোনো ফাইল বা নেটওয়ার্ক সকেটের ভেরিয়েবল স্কোপের বাইরে চলে যায়, তখন Rust-এর RAII প্যাটার্ন কোন স্থাপত্যিক নিশ্চয়তা প্রদান করে?'
        },
        options: [
          {
            en: 'The compiler automatically invokes the type\'s Drop::drop() method at the closing curly brace, closing OS file handles and deallocating memory deterministically with zero leaks',
            bn: 'কম্পাইলার বন্ধনীতে পৌঁছানোর সাথে সাথেই স্বয়ংক্রিয়ভাবে Drop::drop() মেথড কল করে, ফলে কোনো মেমোরি লিক ছাড়া ওএস ফাইল হ্যান্ডেল বন্ধ হয় এবং মেমোরি মুক্ত হয়'
          },
          {
            en: 'The operating system waits 10 minutes before cleaning up resources',
            bn: 'অপারেটিং সিস্টেম রিসোর্স পরিষ্কার করার জন্য ১০ মিনিট অপেক্ষা করে'
          },
          {
            en: 'The developer must write a manual "free()" call or memory leaks permanently',
            bn: 'ডেভেলপারকে ম্যানুয়ালি "free()" কল করতে হয় নতুবা মেমোরি স্থায়ীভাবে লিক হয়'
          },
          {
            en: 'RAII only works on Linux servers',
            bn: 'RAII কেবল লিনাক্স সার্ভারে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Drop runs deterministically at the end of scope, freeing resources.',
          bn: 'স্কোপ শেষ হওয়ার সাথে সাথে কম্পাইলার নিজে থেকেই রিসোর্স পরিষ্কার করার কোড চালায়।'
        },
        explanation: {
          en: 'Rust implements RAII via the Drop trait. Resources are bound to variable lifetimes; when an owner exits scope, its cleanup logic executes immediately and deterministically.',
          bn: 'হাতে ধরে ফাইল ক্লোজ বা মেমোরি মুক্ত করার ঝামেলা না থাকায় কোনো সিস্টেম রিসোর্স কখনো আটকে থাকে না।'
        }
      },
      {
        id: 'quiz-string-header-stack-structure',
        kind: 'mcq',
        topic: 'string-stack-header-ptr-len-cap',
        question: {
          en: 'What 3 fields compose the 24-byte stack representation of a Rust "String" on a 64-bit operating system?',
          bn: 'একটি ৬৪-বিট অপারেটিং সিস্টেমে Rust "String"-এর ২৪-বাইটের স্ট্যাক হেডারে কোন ৩ টি ফিল্ড থাকে?'
        },
        options: [
          {
            en: 'An 8-byte pointer to the heap buffer, an 8-byte length (len), and an 8-byte capacity (cap)',
            bn: 'হিপ বাফারের একটি ৮-বাইট পয়েন্টার, একটি ৮-বাইট দৈর্ঘ্য (len) এবং একটি ৮-বাইট ধারণক্ষমতা (cap)'
          },
          {
            en: 'Three 8-byte floating point numbers',
            bn: 'তিনটি ৮-বাইটের ফ্লোটিং পয়েন্ট সংখ্যা'
          },
          {
            en: 'A 24-byte raw string of ASCII characters',
            bn: 'একটি ২৪-বাইটের কাঁচা আসকি স্ট্রিং'
          },
          {
            en: 'An encrypted hash of the user\'s password',
            bn: 'ব্যবহারকারীর পাসওয়ার্ডের একটি এনক্রিপ্ট করা হ্যাশ'
          }
        ],
        answer: 0,
        hint: {
          en: 'A String header contains a pointer, length, and capacity on the stack.',
          bn: 'স্ট্রিং হেডারে ৮ বাইটের পয়েন্টার, ৮ বাইটের দৈর্ঘ্য এবং ৮ বাইটের ক্যাপাসিটি থাকে।'
        },
        explanation: {
          en: 'On 64-bit systems, a usize is 8 bytes. A String stores pointer (8B) + length (8B) + capacity (8B) = 24 bytes on the stack, referencing the heap data buffer.',
          bn: '৬৪-বিট সিস্টেমে প্রতি usize হলো ৮ বাইট। ফলে ৩ টি ফিল্ড মিলিয়ে মোট ২৪ বাইট স্ট্যাকে থাকে আর আসল ডেটা হিপ মেমোরিতে থাকে।'
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
            en: 'The function automatically creates an independent clone of the data',
            bn: 'ফাংশনটি নিজে থেকেই ডেটার একটি স্বাধীন ক্লোন কপি বানিয়ে নেয়'
          },
          {
            en: 'The compiler raises a fatal syntax error',
            bn: 'কম্পাইলার একটি মারাত্মক সিনট্যাক্স এরর প্রদর্শন করে'
          },
          {
            en: '"val" remains valid and can be passed to 10 more functions',
            bn: '"val" পুরোপুরি বৈধ থাকে এবং আরও ১০ টি ফাংশনে পাস করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Passing by value moves ownership into the function, dropping it on return.',
          bn: 'মান দিয়ে পাস করলে মালিকানা ফাংশনের হাতে চলে যায় এবং ফাংশন শেষে মানটি চিরতরে মুছে যায়।'
        },
        explanation: {
          en: 'Passing a non-Copy type by value transfers ownership. When the receiving function exits, it drops the parameter. If the caller wants to retain data, it should pass a reference (&).',
          bn: 'কলার যদি ডেটা নিজের কাছে রাখতে চায়, তবে মান না পাঠিয়ে ধার বা রেফারেন্স (&) পাঠানো উচিত।'
        }
      },
      {
        id: 'quiz-drop-prevention-std-mem-forget',
        kind: 'mcq',
        topic: 'std-mem-forget-suppressing-destructor',
        question: {
          en: 'What occurs when calling "std::mem::forget(value)" on an owned resource in Rust?',
          bn: 'Rust-এ কোনো মালিকানাধীন রিসোর্সের ওপর "std::mem::forget(value)" কল করলে কী ঘটে?'
        },
        options: [
          {
            en: 'The compiler is instructed NOT to run the Drop destructor on the value when it goes out of scope, intentionally leaking the resource or transferring its ownership to unmanaged native FFI',
            bn: 'কম্পাইলারকে নির্দেশ দেওয়া হয় যেন স্কোপ শেষে মানটির ওপর Drop ডেস্ট্রাক্টর না চালানো হয়, যা উদ্দেশ্যমূলকভাবে মেমোরি ধরে রাখে বা আনম্যানেজড FFI-তে মালিকানা পাঠায়'
          },
          {
            en: 'It deletes the variable immediately and frees its heap memory',
            bn: 'এটি অবিলম্বে ভেরিয়েবল মুছে ফেলে এবং হিপ মেমোরি মুক্ত করে'
          },
          {
            en: 'It forces the operating system to shut down',
            bn: 'এটি অপারেটিং সিস্টেমকে বন্ধ হতে বাধ্য করে'
          },
          {
            en: 'std::mem::forget is forbidden by the Rust compiler',
            bn: 'Rust কম্পাইলারে std::mem::forget ব্যবহার নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'mem::forget consumes ownership without calling Drop, suppressing deallocation.',
          bn: 'mem::forget মালিকানা নিয়ে নেয় কিন্তু কোনো Drop মেথড চালায় না, ফলে মেমোরি মুক্ত হয় না।'
        },
        explanation: {
          en: 'mem::forget prevents the destructor from running. It is commonly used when handing over memory buffers to foreign C APIs (FFI) that assume ownership.',
          bn: 'সি লাইব্রেরির সাথে ডেটা আদান-প্রদানের সময় মেমোরি যাতে অকালে ড্রপ না হয়, সেজন্য এটি ব্যবহৃত হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'borrowing-and-the-borrow',
    title: {
      en: 'References, Borrowing & Slices',
      bn: 'রেফারেন্স, বরোয়িং এবং স্লাইসেস'
    }
  }
};
