import type { Lesson } from '../../../lib/types';

export const BorrowingAndTheBorrowLesson: Lesson = {
  slug: 'borrowing-and-the-borrow',
  tech: 'rust',
  title: {
    en: 'References, Borrowing & Slices',
    bn: 'রেফারেন্স, বরোয়িং এবং স্লাইসেস'
  },
  summary: {
    en: 'Master reference borrowing and data slices in Rust. Understand the fundamental aliasing XOR mutability rule, compare shared references (&T) with exclusive mutable references (&mut T), explore Non-Lexical Lifetimes (NLL), and parse strings safely with string slices (&str).',
    bn: 'Rust-এ রেফারেন্স বরোয়িং এবং ডেটা স্লাইস আয়ত্ত করুন। এলিয়াসিং বনাম মিউটেবিলিটির মৌলিক নিয়ম, শেয়ার্ড রেফারেন্স (&T) ও এক্সক্লুসিভ মিউটেবল রেফারেন্সের (&mut T) তুলনা, Non-Lexical Lifetimes (NLL) এবং স্ট্রিং স্লাইস (&str) দিয়ে নিরাপদ পার্সিং।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'aliasing-xor-mutability-heading',
      text: {
        en: 'The Aliasing XOR Mutability Rule and References',
        bn: 'এলিয়াসিং বনাম মিউটেবিলিটি নিয়ম এবং রেফারেন্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Constantly moving ownership into and out of functions creates cumbersome code. Rust (the memory-safe systems programming language) solves this through borrowing. Instead of transferring full ownership, a caller creates a reference using the ampersand ("&"). Borrowing is governed by the cardinal "Aliasing XOR (exclusive or) Mutability" invariant enforced by the compiler borrow checker. At any given point in time, you may have either any number of immutable shared references ("&T") or exactly 1 exclusive mutable reference ("&mut T"). You can never have both simultaneously. This compile-time rule eliminates data races across concurrent threads before code ever executes.',
        bn: 'ফাংশনে বারবার মালিকানা হস্তান্তর করলে কোড অত্যন্ত জটিল হয়ে পড়ে। Rust (মেমোরি-নিরাপদ সিস্টেম প্রোগ্রামিং ভাষা) বরোয়িং বা ঋণ নেওয়ার মাধ্যমে এই সমস্যার সমাধান করে। সম্পূর্ণ মালিকানা স্থানান্তরের বদলে কলার অ্যান্ড চিহ্ন ("&") দিয়ে একটি রেফারেন্স তৈরি করে। বরোয়িং "এলিয়াসিং XOR (এক্সক্লুসিভ অর) বনাম মিউটেবিলিটি" নামের একটি মৌলিক নিয়মের অধীনে পরিচালিত হয় যা কম্পাইলার বরো চেকার কঠোরভাবে প্রয়োগ করে। যেকোনো নির্দিষ্ট মুহূর্তে আপনি হয় যেকোনো সংখ্যক ইমিউটেবল রিড রেফারেন্স ("&T") অথবা ঠিক ১ টি এক্সক্লুসিভ মিউটেবল রাইট রেফারেন্স ("&mut T") রাখতে পারেন। কখনোই উভয়টি একসাথে থাকতে পারে না। কম্পাইল-টাইমের এই নিয়মটি কনকারেন্ট থ্রেডে ডেটা রেসের ঝুঁকি শুরুতেই মুছে দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The Rust borrow checker invariant: Comparing valid multiple readers or a single exclusive writer against an illegal mixed aliasing state.',
        bn: 'চিত্র ১: Rust বরো চেকারের নিয়ম: একাধিক বৈধ পাঠক বা একক লেখকের সাথে অবৈধ মিশ্র অবস্থার তুলনা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUST BORROW CHECKER: ALIASING XOR MUTABILITY INVARIANT</text>

  <!-- State 1: Multiple Readers -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#059669" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Shared Reads (&amp;T)</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">let r1 = &amp;data;</text>
    <text x="15" y="85" fill="#34d399" font-size="9" font-family="monospace">let r2 = &amp;data;</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">VALID: N Readers</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Read-Only Safety</text>
  </g>

  <!-- State 2: Exclusive Writer -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#0284c7" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Exclusive Write (&amp;mut)</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">let w1 = &amp;mut data;</text>
    <text x="15" y="85" fill="#38bdf8" font-size="8" font-family="monospace">Zero Other Borrowers</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">VALID: Exactly 1 Mut</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Total Isolation</text>
  </g>

  <!-- State 3: Illegal Conflict -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#b91c1c" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Illegal Conflict</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="15" y="68" fill="#f87171" font-size="9" font-family="monospace">let r = &amp;data;</text>
    <text x="15" y="85" fill="#f87171" font-size="8" font-family="monospace">let w = &amp;mut data;</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="15" y="130" fill="#f87171" font-size="9" font-family="monospace">ERROR E0502</text>

    <text x="15" y="215" fill="#f87171" font-size="10" font-family="sans-serif">Data Race Prevented</text>
  </g>

  <!-- State 4: String Slices -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Slices (&amp;str)</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">let sl = &amp;s[0..5];</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Fat Pointer View</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Zero Allocations</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Borrowed Substring</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'nll-and-slices-heading',
      text: {
        en: 'Non-Lexical Lifetimes and String Slices (&str)',
        bn: 'Non-Lexical Lifetimes এবং স্ট্রিং স্লাইস (&str)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In early versions of Rust, a reference remained active until the closing curly brace of its scope, causing frustrating borrow checker rejections. In Rust 2018, the team introduced Non-Lexical Lifetimes (NLL). Under NLL, a reference\'s lifetime terminates immediately after its last actual use in code rather than at the end of the lexical block. This allows developers to read data via an immutable borrow and subsequently mutate that same data later in the same method. Furthermore, Rust provides Slices (such as "&str" and "&[T]"). Slices are 2-word fat pointers (pointer and length) that reference contiguous subsets of existing memory without allocating heap memory.',
        bn: 'Rust-এর শুরুর সংস্করণে কোনো রেফারেন্স তার স্কোপের সমাপ্তি বন্ধনী পর্যন্ত সক্রিয় থাকত, যা ডেভেলপারদের জন্য কোড লেখা কঠিন করে তুলত। Rust ২০১৮ সংস্করণে Non-Lexical Lifetimes (NLL) প্রবর্তন করা হয়। NLL-এর অধীনে একটি রেফারেন্সের আয়ু কোডের শেষ ব্যবহারের সাথে সাথেই শেষ হয়ে যায়, বন্ধনীর জন্য অপেক্ষা করে না। এর ফলে একই মেথডে প্রথমে ডেটা পড়ে কাজ শেষ করার পর সেই একই ডেটাতে মিউটেবল রেফারেন্স নেওয়া সম্ভব হয়। তাছাড়া Rust-এ স্লাইস (যেমন "&str" এবং "&[T]") রয়েছে। স্লাইস হলো ২-শব্দের ফ্যাট পয়েন্টার (পয়েন্টার ও দৈর্ঘ্য) যা কোনো হিপ মেমোরি খরচ না করে মেমোরির নির্দিষ্ট অংশ নিরাপদে নির্দেশ করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Rust borrow checker rules: Enforcing shared reads, exclusive writes, and detecting E0502 conflict errors.',
        bn: 'Rust বরো চেকার নিয়ম, শেয়ার্ড রিড, এক্সক্লুসিভ রাইট এবং E0502 এরর শনাক্তকরণের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Rust Borrow Checker Rules (Aliasing XOR Mutability)

export class BorrowCheckerSimulator {
  private activeSharedBorrows: number = 0;
  private hasActiveMutableBorrow: boolean = false;

  // Simulating "let r = &data;"
  public borrowImmutable(): void {
    if (this.hasActiveMutableBorrow) {
      throw new Error('E0502: Cannot borrow data as immutable because it is also borrowed as mutable.');
    }
    this.activeSharedBorrows += 1;
    console.log('[Borrow] Shared reference granted. Active readers:', this.activeSharedBorrows);
  }

  // Simulating "let w = &mut data;"
  public borrowMutable(): void {
    if (this.hasActiveMutableBorrow) {
      throw new Error('E0499: Cannot borrow data as mutable more than once at a time.');
    }
    if (this.activeSharedBorrows > 0) {
      throw new Error('E0502: Cannot borrow data as mutable because it is also borrowed as immutable.');
    }
    this.hasActiveMutableBorrow = true;
    console.log('[Borrow] Exclusive mutable reference granted.');
  }

  // Simulating Non-Lexical Lifetimes (NLL): borrow ends after last use
  public releaseShared(): void {
    if (this.activeSharedBorrows > 0) {
      this.activeSharedBorrows -= 1;
      console.log('[NLL Release] Shared reference expired. Remaining readers:', this.activeSharedBorrows);
    }
  }

  public releaseMutable(): void {
    this.hasActiveMutableBorrow = false;
    console.log('[NLL Release] Mutable reference expired.');
  }
}

// Execution demonstration
const checker = new BorrowCheckerSimulator();

// Step 1: Create 2 shared immutable references
checker.borrowImmutable();
checker.borrowImmutable();

// Step 2: Attempting mutable borrow while readers are active triggers compile error E0502
try {
  checker.borrowMutable();
} catch (e: any) {
  console.log('[Compiler Rejection]', e.message);
}

// Step 3: Readers finish their last use (NLL release)
checker.releaseShared();
checker.releaseShared();

// Step 4: Now mutable borrow succeeds cleanly
checker.borrowMutable();
checker.releaseMutable();
console.log('Borrow verification completed successfully.');`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Borrowing',
          def: {
            en: 'Creating a reference to data (&T or &mut T) without taking ownership or transferring deallocation duty.',
            bn: 'মালিকানা না নিয়ে কেবলমাত্র মেমোরি পড়ার বা লেখার রেফারেন্স তৈরি করার প্রক্রিয়া।'
          }
        },
        {
          term: 'Aliasing XOR Mutability',
          def: {
            en: 'Core Rust rule permitting either multiple readers or exactly 1 writer, eliminating data races statically.',
            bn: 'মূল নিয়ম যা হয় একাধিক পাঠক অথবা ঠিক ১ জন লেখককে অনুমতি দিয়ে ডেটা রেস দূর করে।'
          }
        },
        {
          term: 'Non-Lexical Lifetimes',
          def: {
            en: 'Compiler feature ending borrow lifetimes at their last point of actual use rather than the scope curly brace.',
            bn: 'কম্পাইলার সুবিধা যা রেফারেন্সের আয়ুকে বন্ধনীর বদলে কোডের শেষ ব্যবহারের বিন্দুতেই সমাপ্ত করে।'
          }
        },
        {
          term: 'String Slice (&str)',
          def: {
            en: 'Reference consisting of a pointer and length pointing to a valid UTF-8 sequence within another string.',
            bn: 'রেফারেন্স যা অন্য স্ট্রিংয়ের ভেতরের নির্দিষ্ট অংশের পয়েন্টার ও দৈর্ঘ্য নির্দেশ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'aliasing-xor-mutability-core-rule-ex1',
      kind: 'mcq',
      topic: 'aliasing-xor-mutability-rule',
      question: {
        en: 'What is the cardinal rule of borrowing enforced by the Rust compiler borrow checker at all times?',
        bn: 'Rust কম্পাইলার বরো চেকার সর্বদা বরোয়িং সংক্রান্ত কোন মৌলিক নিয়মটি প্রয়োগ করে?'
      },
      options: [
        {
          en: 'You may have either any number of immutable references (&T) OR exactly 1 mutable reference (&mut T), but never both simultaneously',
          bn: 'যেকোনো মুহূর্তে আপনি হয় যেকোনো সংখ্যক ইমিউটেবল রেফারেন্স (&T) অথবা ঠিক ১ টি মিউটেবল রেফারেন্স (&mut T) রাখতে পারেন, কখনোই উভয়টি একসাথে নয়'
        },
        {
          en: 'You can have 10 mutable references to the same data at the same time',
          bn: 'একই তথ্যের ওপর একসাথে ১০ টি মিউটেবল রেফারেন্স রাখা সম্ভব'
        },
        {
          en: 'References are completely prohibited in multi-threaded programs',
          bn: 'মাল্টি-থ্রেডেড প্রোগ্রামে রেফারেন্স ব্যবহার পুরোপুরি নিষিদ্ধ'
        },
        {
          en: 'Mutable references automatically duplicate the heap data',
          bn: 'মিউটেবল রেফারেন্স নিজে থেকেই হিপের ডেটা ডুপ্লিকেট করে নেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Aliasing XOR Mutability: multiple readers OR one writer.',
        bn: 'হয় একাধিক পাঠক অথবা ঠিক ১ জন লেখক; লেখার সময় অন্য কেউ পড়তে পারবে না।'
      },
      explanation: {
        en: 'Allowing multiple writers or mixing readers with writers causes data races and pointer invalidation. Rust enforces exclusive writes at compile time.',
        bn: 'এই নিয়মের ফলেই Rust-এ কোনো ডেটা রেস বা মেমোরি বিকৃতি ঘটা অসম্ভব।'
      }
    },
    {
      id: 'rust-error-e0502-mutable-borrow-ex2',
      kind: 'mcq',
      topic: 'compiler-error-e0502-mutable-immutable-conflict',
      question: {
        en: 'Which Rust compilation error code occurs when code attempts to borrow data as mutable while an immutable reference is still in active use?',
        bn: 'যখন কোনো কোড একটি সক্রিয় ইমিউটেবল রেফারেন্স থাকা অবস্থায় একই ডেটাতে মিউটেবল রেফারেন্স নেওয়ার চেষ্টা করে, তখন কোন কম্পাইলার এরর ঘটে?'
      },
      options: [
        {
          en: 'Error E0502: cannot borrow data as mutable because it is also borrowed as immutable',
          bn: 'এরর E0502: cannot borrow data as mutable because it is also borrowed as immutable'
        },
        {
          en: 'Error 404: Not Found',
          bn: 'এরর ৪০৪: Not Found'
        },
        {
          en: 'Error 500: Server Crash',
          bn: 'এরর ৫০০: Server Crash'
        },
        {
          en: 'Error E0000: Null Pointer Exception',
          bn: 'এরর E0000: Null Pointer Exception'
        }
      ],
      answer: 0,
      hint: {
        en: 'E0502 is the compiler error for conflicting mutable and immutable borrows.',
        bn: 'E0502 এররটি স্পষ্ট জানিয়ে দেয় যে ডেটা আগে থেকেই রিড মোডে ধার নেওয়া আছে।'
      },
      explanation: {
        en: 'E0502 prevents reading data that might be modified concurrently by another pointer, preserving absolute memory consistency.',
        bn: 'একই সাথে রিড ও রাইট চললে ডেটা নষ্ট হওয়ার ঝুঁকি থাকে, তাই কম্পাইলার কোড বিল্ড করতে বাধা দেয়।'
      }
    },
    {
      id: 'non-lexical-lifetimes-benefit-ex3',
      kind: 'mcq',
      topic: 'non-lexical-lifetimes-last-use-termination',
      question: {
        en: 'How did the introduction of Non-Lexical Lifetimes (NLL) in Rust 2018 improve developer productivity?',
        bn: 'Rust ২০১৮ সংস্করণে Non-Lexical Lifetimes (NLL) যুক্ত করার ফলে ডেভেলপারদের কাজের কী সুবিধা হয়েছে?'
      },
      options: [
        {
          en: 'A borrow\'s lifetime ends at the point of its last actual use in code rather than surviving until the enclosing scope\'s closing curly brace, allowing subsequent mutable operations sooner',
          bn: 'একটি রেফারেন্সের আয়ু বন্ধনীর বদলে কোডের শেষ ব্যবহারের বিন্দুতেই শেষ হয়ে যায়, যার ফলে পরবর্তী মিউটেবল অপারেশনগুলো আরও দ্রুত সম্পন্ন করা যায়'
        },
        {
          en: 'It removed the borrow checker entirely from the rustc compiler',
          bn: 'এটি rustc কম্পাইলার থেকে বরো চেকার পুরোপুরি বাদ দিয়ে দিয়েছে'
        },
        {
          en: 'It made all variables mutable by default',
          bn: 'এটি সমস্ত ভেরিয়েবলকে ডিফল্টভাবে মিউটেবল বানিয়ে দিয়েছে'
        },
        {
          en: 'NLL converts Rust code into machine assembly at runtime',
          bn: 'NLL রানটাইমে কোডকে অ্যাসেম্বলি ল্যাঙ্গুয়েজে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'NLL ends borrows at their last use instead of scope ends.',
        bn: 'NLL রেফারেন্সের ব্যবহার শেষ হওয়ার সাথে সাথেই তাকে মুক্ত করে দেয়, ফলে বাড়তি বন্ধনী দেওয়ার প্রয়োজন পড়ে না।'
      },
      explanation: {
        en: 'Before NLL, borrows lasted until the closing curly brace, forcing artificial scopes. NLL allows the borrow checker to analyze actual control flow precisely.',
        bn: 'কোডের প্রবাহ নিখুঁতভাবে অনুধাবন করে কম্পাইলার অপ্রয়োজনীয় নিষেধাজ্ঞা দূর করে।'
      }
    },
    {
      id: 'string-slice-mutation-restriction-ex4',
      kind: 'mcq',
      topic: 'string-slice-prevents-underlying-mutation',
      question: {
        en: 'Why does calling "s.clear();" on a String fail to compile while a string slice "let slice = &s[0..5];" is still being used?',
        bn: 'একটি স্ট্রিং স্লাইস "let slice = &s[0..5];" ব্যবহৃত হচ্ছে এমন অবস্থায় মূল String-এ "s.clear();" কল করলে কেন কম্পাইল এরর হয়?'
      },
      options: [
        {
          en: '"s.clear()" requires an exclusive mutable borrow (&mut s), which is forbidden while the immutable reference "slice" (&s) is active, protecting the slice from pointing to deallocated memory',
          bn: '"s.clear()" মেথডের জন্য একটি মিউটেবল রেফারেন্স (&mut s) প্রয়োজন, যা সক্রিয় ইমিউটেবল "slice" (&s) থাকা অবস্থায় নিষিদ্ধ; এটি স্লাইসকে নষ্ট মেমোরি নির্দেশ করা থেকে রক্ষা করে'
        },
        {
          en: 'Because clear is a private method in the standard library',
          bn: 'কারণ clear হলো স্ট্যান্ডার্ড লাইব্রেরির একটি প্রাইভেট মেথড'
        },
        {
          en: 'Because strings cannot contain more than 5 characters',
          bn: 'কারণ স্ট্রিংয়ে ৫ অক্ষরের বেশি রাখা যায় না'
        },
        {
          en: 'String slices can only be created from static files',
          bn: 'স্ট্রিং স্লাইস কেবল স্ট্যাটিক ফাইল থেকে তৈরি করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Mutating the string would invalidate the slice\'s pointer and length.',
        bn: 'স্ট্রিং খালি করে দিলে স্লাইসের পয়েন্টার অবৈধ ডেটা নির্দেশ করবে; তাই কম্পাইলার এই পরিবর্তন আটকে দেয়।'
      },
      explanation: {
        en: 'Clearing the string reallocates or empties the buffer. The borrow checker prevents this classic iterator invalidation bug at compile time.',
        bn: 'C++ এ বহুল প্রচলিত "iterator invalidation" এর মতো মারাত্মক বাগ Rust শুরুতেই প্রতিরোধ করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-borrowing-and-the-borrow',
    title: {
      en: 'Rust Borrowing & Slice Mechanics Quiz',
      bn: 'Rust বরোয়িং এবং স্লাইস মেকানিজম কুইজ'
    },
    questions: [
      {
        id: 'quiz-dangling-reference-prevention',
        kind: 'mcq',
        topic: 'dangling-reference-prevention-local-returns',
        question: {
          en: 'Why does the Rust compiler reject a function that attempts to return a reference to a locally instantiated String ("fn make() -> &String { let s = String::from("a"); &s }")?',
          bn: 'একটি লোকাল String-এর রেফারেন্স ফেরত দেওয়ার চেষ্টা করলে ("fn make() -> &String { let s = String::from("a"); &s }") Rust কম্পাইলার কেন কোড প্রত্যাখ্যান করে?'
        },
        options: [
          {
            en: 'The local variable "s" is dropped when the function scope exits; returning "&s" would create a dangling pointer referencing deallocated stack/heap memory',
            bn: 'লোকাল ভেরিয়েবল "s" ফাংশন শেষ হওয়ার সাথে সাথে ড্রপ হয়ে যায়; ফলে "&s" ফেরত দিলে তা মুছে যাওয়া মেমোরির ঝুলন্ত পয়েন্টার (dangling pointer) তৈরি করত'
          },
          {
            en: 'Because the string "a" is too short to be referenced',
            bn: 'কারণ "a" স্ট্রিংটি রেফারেন্স করার পক্ষে খুব ছোট'
          },
          {
            en: 'Functions in Rust cannot return any reference types',
            bn: 'Rust-এ ফাংশন কোনো রেফারেন্স টাইপ ফেরত দিতে পারে না'
          },
          {
            en: 'The compiler requires returning a 64-bit integer instead',
            bn: 'কম্পাইলার এর বদলে একটি ৬৪-বিট পূর্ণসংখ্যা ফেরত দেওয়ার দাবি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Locals are dropped at function exit. Return owned data or borrow from an outer scope.',
          bn: 'লোকাল ডেটা ফাংশন শেষে ধ্বংস হয়ে যায়; তাই রেফারেন্স না পাঠিয়ে আসল ডেটাটি ওনারশিপ হিসেবে ফেরত পাঠাতে হয়।'
        },
        explanation: {
          en: 'Rust guarantees references always point to valid data. Since the local String is deallocated when make() returns, the reference would dangle. The fix is to return the owned String directly.',
          bn: 'C বা C++ এ এই ধরনের ঝুলন্ত পয়েন্টার থেকে মারাত্মক ক্র্যাশ বা হ্যাকিং ঘটে; Rust তা শুরুতেই অসম্ভব করে তোলে।'
        }
      },
      {
        id: 'quiz-fat-pointer-slice-representation',
        kind: 'mcq',
        topic: 'fat-pointer-slice-pointer-length-structure',
        question: {
          en: 'What data structure represents a string slice ("&str") or array slice ("&[T]") in Rust memory?',
          bn: 'Rust মেমোরিতে একটি স্ট্রিং স্লাইস ("&str") বা অ্যারে স্লাইস ("&[T]") কোন ডেটা কাঠামোর মাধ্যমে উপস্থাপিত হয়?'
        },
        options: [
          {
            en: 'A 2-word fat pointer on the stack containing: a pointer to the starting byte of the data and a length (usize) representing the number of elements',
            bn: 'স্ট্যাকের ওপর ২-শব্দের একটি ফ্যাট পয়েন্টার যাতে থাকে: ডেটার শুরুর বাইটের পয়েন্টার এবং উপাদানের সংখ্যা নির্দেশকারী একটি দৈর্ঘ্য (usize)'
          },
          {
            en: 'A 100-byte encrypted binary buffer',
            bn: 'একটি ১০০-বাইটের এনক্রিপ্ট করা বাইনারি বাফার'
          },
          {
            en: 'A single 32-bit integer index',
            bn: 'একটি একক ৩২-বিট পূর্ণসংখ্যার ইনডেক্স'
          },
          {
            en: 'A reference to an external SQLite database',
            bn: 'একটি বহিরাগত SQLite ডেটাবেসের রেফারেন্স'
          }
        ],
        answer: 0,
        hint: {
          en: 'A slice is a fat pointer: starting address + length.',
          bn: 'স্লাইস মেমোরিতে কেবল দুটি তথ্য রাখে: ডেটা শুরুর ঠিকানা এবং তার দৈর্ঘ্য।'
        },
        explanation: {
          en: 'Slices do not own data. A fat pointer stores ptr (8 bytes) + len (8 bytes) = 16 bytes on 64-bit systems, providing safe bounds-checked access to existing memory.',
          bn: 'একটি ফ্যাট পয়েন্টার ৬৪-বিট সিস্টেমে ptr (৮ বাইট) + len (৮ বাইট) = ১৬ বাইট মেমোরি নেয়, যা মেমোরি কপি না করেই নিরাপদ স্লাইসিং নিশ্চিত করে।'
        }
      },
      {
        id: 'quiz-deref-coercion-string-to-str',
        kind: 'mcq',
        topic: 'deref-coercion-string-to-str-slice',
        question: {
          en: 'How does Rust allow passing an "&String" into a function expecting a string slice "&str" without explicit type conversions?',
          bn: 'কোনো প্রকাশ্য কনভার্সন ছাড়াই একটি "&String"-কে কীভাবে "&str" প্রত্যাশী ফাংশনে সরাসরি পাস করা সম্ভব হয়?'
        },
        options: [
          {
            en: 'Via Deref Coercion: String implements "Deref<Target = str>", allowing the compiler to automatically dereference &String into &str at call sites',
            bn: 'Deref Coercion-এর মাধ্যমে: String ক্লাসটি "Deref<Target = str>" বাস্তবায়ন করে, যা কম্পাইলারকে স্বয়ংক্রিয়ভাবে &String কে &str এ রূপান্তর করতে সাহায্য করে'
          },
          {
            en: 'By downloading a special NuGet package from the cloud',
            bn: 'ক্লাউড থেকে একটি বিশেষ নুগেট প্যাকেজ ডাউনলোড করার মাধ্যমে'
          },
          {
            en: 'By allocating a new string on the heap behind the scenes',
            bn: 'পর্দার আড়ালে হিপে সম্পূর্ণ নতুন একটি স্ট্রিং তৈরি করার মাধ্যমে'
          },
          {
            en: 'Deref Coercion was deprecated in Rust 2021',
            bn: 'Rust ২০২১ সংস্করণে Deref Coercion বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Deref coercion converts &String to &str automatically via the Deref trait.',
          bn: 'Deref ট্রেইট থাকার কারণে কম্পাইলার নিজে থেকেই টাইপ সমন্বয় করে নেয়।'
        },
        explanation: {
          en: 'Deref coercion provides ergonomic API design. Functions should prefer accepting &str so callers can pass either string slices or owned Strings seamlessly.',
          bn: 'ফাংশনে &String-এর বদলে &str গ্রহণ করাই Rust-এর স্ট্যান্ডার্ড কনভেনশন।'
        }
      },
      {
        id: 'quiz-mutability-of-borrowed-fields',
        kind: 'mcq',
        topic: 'borrowing-struct-field-disjoint-borrows',
        question: {
          en: 'Can a developer create simultaneous mutable references to two distinct fields of the same struct instance in Rust (disjoint borrows)?',
          bn: 'Rust-এ একই স্ট্রাক্টের দুটি ভিন্ন ফিল্ডের ওপর কি একই সাথে দুটি পৃথক মিউটেবল রেফারেন্স তৈরি করা সম্ভব (disjoint borrows)?'
        },
        options: [
          {
            en: 'Yes; the borrow checker understands disjoint field borrows and allows simultaneously borrowing struct.a as &mut and struct.b as &mut because they occupy disjoint memory locations',
            bn: 'হ্যাঁ; বরো চেকার ডিসজয়েন্ট ফিল্ড বরোয়িং বোঝে এবং struct.a কে &mut এবং struct.b কে &mut হিসেবে একসাথে ধার নিতে দেয় কারণ তারা মেমোরির সম্পূর্ণ ভিন্ন স্থানে থাকে'
          },
          {
            en: 'No; borrowing one field locks the entire struct and all its fields completely',
            bn: 'না; একটি ফিল্ড ধার নিলে পুরো স্ট্রাক্ট এবং তার সমস্ত ফিল্ড পুরোপুরি লক হয়ে যায়'
          },
          {
            en: 'Only if the fields are declared as static globals',
            bn: 'কেবল তখনই যদি ফিল্ডগুলো স্ট্যাটিক গ্লোবাল হিসেবে থাকে'
          },
          {
            en: 'Disjoint borrowing crashes the compiler process',
            bn: 'ডিসজয়েন্ট বরোয়িং কম্পাইলার প্রসেস ক্র্যাশ করিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The borrow checker permits disjoint mutable borrows on distinct struct fields.',
          bn: 'যেহেতু ফিল্ড দুটির মেমোরি আলাদা, তাই দুটি ভিন্ন ফিল্ডে একসাথে মিউটেবল রেফারেন্স নেওয়া পুরোপুরি বৈধ।'
        },
        explanation: {
          en: 'Rust distinguishes between borrowing an entire struct versus individual fields. Borrowing different fields mutably does not violate Aliasing XOR Mutability.',
          bn: 'এর ফলে স্ট্রাক্টের একটি ফিল্ডে কাজ করার সময় অন্য ফিল্ডের কাজে কোনো বাধা সৃষ্টি হয় না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'lifetimes-and-the-tick',
    title: {
      en: 'Lifetimes, Elision & The Borrow Checker',
      bn: 'লাইফটাইম, এলিশন এবং বরো চেকার'
    }
  }
};
