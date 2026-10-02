import type { Lesson } from '../../../lib/types';

export const BorrowingAndTheReferenceLesson: Lesson = {
  slug: 'borrowing-and-the-reference',
  tech: 'lang-rust',
  title: {
    en: 'Borrowing, References & Non-Lexical Lifetimes',
    bn: 'বরোয়িং, রেফারেন্স এবং নন-লেক্সিক্যাল লাইফটাইম'
  },
  summary: {
    en: 'Master Rust\'s borrowing mechanism and the Aliasing XOR Mutability invariant. Differentiate shared references (&T) from exclusive mutable references (&mut T), explore how Non-Lexical Lifetimes (NLL) permit early borrow release, decode compiler error E0502, inspect fat pointer string slices (&str), and understand disjoint struct field borrowing.',
    bn: 'Rust-এর বরোয়িং প্রক্রিয়া এবং এলিয়াসিং বনাম মিউটেবিলিটি নিয়ম আয়ত্ত করুন। শেয়ার্ড রেফারেন্স (&T) এবং এক্সক্লুসিভ মিউটেবল রেফারেন্স (&mut T)-এর পার্থক্য, নন-লেক্সিক্যাল লাইফটাইম (NLL) কীভাবে দ্রুত বরো মুক্ত করে, কম্পাইলার এরর E0502 এর বিশ্লেষণ, ফ্যাট পয়েন্টার স্ট্রিং স্লাইস (&str) এবং স্ট্রাক্ট ফিল্ড বরোয়িংয়ের বিশদ বিবরণ।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'aliasing-xor-mutability-heading',
      text: {
        en: 'The Cardinal Borrowing Invariant: Aliasing XOR Mutability',
        bn: 'বরোয়িংয়ের মৌলিক নিয়ম: এলিয়াসিং বনাম মিউটেবিলিটি'
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
        en: 'Figure 1: The Aliasing XOR Mutability invariant: Multiple readers (&T) are safely allowed concurrently, or exactly 1 writer (&mut T) exclusively, but never both at the same time.',
        bn: 'চিত্র ১: এলিয়াসিং বনাম মিউটেবিলিটি নিয়ম: একসাথে একাধিক রিডার (&T) নিরাপদে অনুমোদিত, অথবা ঠিক ১ জন রাইটার (&mut T) এককভাবে অনুমোদিত, কিন্তু কখনোই দুটি একসাথে নয়।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUST BORROW CHECKER: ALIASING XOR MUTABILITY INVARIANT</text>

  <!-- Left: Shared References (Readers) -->
  <g transform="translate(35, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#0284c7" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">State A: Shared Readers (&amp;T) [PERMITTED]</text>

    <!-- Source Resource -->
    <rect x="20" y="45" width="325" height="40" rx="6" fill="#0f172a" stroke="#38bdf8" />
    <text x="35" y="69" fill="#38bdf8" font-size="11" font-family="monospace">let data = String::from("metrics");</text>

    <!-- Reader 1 -->
    <rect x="20" y="95" width="155" height="60" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="30" y="118" fill="#34d399" font-size="11" font-family="monospace">let r1 = &amp;data;</text>
    <text x="30" y="140" fill="#94a3b8" font-size="10" font-family="sans-serif">Read-Only View 1</text>

    <!-- Reader 2 -->
    <rect x="190" y="95" width="155" height="60" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="200" y="118" fill="#34d399" font-size="11" font-family="monospace">let r2 = &amp;data;</text>
    <text x="200" y="140" fill="#94a3b8" font-size="10" font-family="sans-serif">Read-Only View 2</text>

    <!-- Verdict -->
    <rect x="20" y="165" width="325" height="55" rx="6" fill="#10b981" fill-opacity="0.15" stroke="#10b981" />
    <text x="30" y="188" fill="#34d399" font-size="11" font-family="sans-serif" font-weight="bold">Safe Concurrency:</text>
    <text x="30" y="206" fill="#cbd5e1" font-size="10" font-family="sans-serif">Unlimited simultaneous immutable borrows</text>
  </g>

  <!-- Right: Exclusive Mutable Reference (Writer) -->
  <g transform="translate(440, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#d97706" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">State B: Exclusive Writer (&amp;mut T) [PERMITTED]</text>

    <!-- Source Resource -->
    <rect x="20" y="45" width="325" height="40" rx="6" fill="#0f172a" stroke="#f59e0b" />
    <text x="35" y="69" fill="#fbbf24" font-size="11" font-family="monospace">let mut data = String::from("metrics");</text>

    <!-- Exclusive Writer -->
    <rect x="20" y="95" width="325" height="60" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="30" y="118" fill="#f87171" font-size="11" font-family="monospace">let m1 = &amp;mut data;</text>
    <text x="30" y="140" fill="#94a3b8" font-size="10" font-family="sans-serif">EXCLUSIVITY LOCK: All other &amp;data and &amp;mut borrows FORBIDDEN</text>

    <!-- Conflict Box -->
    <rect x="20" y="165" width="325" height="55" rx="6" fill="#ef4444" fill-opacity="0.15" stroke="#ef4444" />
    <text x="30" y="188" fill="#f87171" font-size="11" font-family="sans-serif" font-weight="bold">Compiler Error E0502:</text>
    <text x="30" y="206" fill="#cbd5e1" font-size="10" font-family="sans-serif">Cannot borrow as mutable while also borrowed as immutable</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'nll-and-slices-heading',
      text: {
        en: 'Non-Lexical Lifetimes (NLL) and String Slices (&str)',
        bn: 'নন-লেক্সিক্যাল লাইফটাইম (NLL) এবং স্ট্রিং স্লাইস (&str)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In early Rust prior to the 2018 edition, a reference remained active until the closing curly brace of its enclosing scope. Modern Rust features Non-Lexical Lifetimes (NLL): the borrow checker analyzes the precise control-flow graph and terminates a borrow immediately after its final actual read or write. This means you can borrow a variable mutably in the lower half of a function even if an immutable reference existed in the upper half, provided the immutable reference is never used again. Furthermore, Rust provides string slices ("&str") and array slices ("&[T]"). A slice does not own heap memory; instead, it operates as a 16-byte fat pointer containing an 8-byte pointer to the starting byte and an 8-byte length, enabling zero-cost views into existing buffers.',
        bn: '২০১৮ সংস্করণের পূর্বে প্রাথমিক Rust-এ একটি রেফারেন্স তার ব্লকের শেষ সেকেন্ড ব্র্যাকেট পর্যন্ত সক্রিয় থাকত। কিন্তু আধুনিক Rust-এ নন-লেক্সিক্যাল লাইফটাইম (NLL) যুক্ত রয়েছে: কম্পাইলার কোডের কন্ট্রোল-ফ্লো গ্রাফ পুঙ্খানুপুঙ্খ বিশ্লেষণ করে এবং কোনো রেফারেন্সের শেষ ব্যবহারের পরেই তার মেয়াদ শেষ করে দেয়। এর ফলে ফাংশনের ওপরের অংশে রিড রেফারেন্স থাকলেও তা যদি নিচে আর ব্যবহৃত না হয়, তবে নিচের লাইনে নিরাপদে মিউটেবল রেফারেন্স নেওয়া সম্ভব হয়। তাছাড়া Rust স্ট্রিং স্লাইস ("&str") এবং অ্যারে স্লাইস ("&[T]") সরবরাহ করে। স্লাইস কোনো নিজস্ব মেমোরি তৈরি করে না; বরং এটি ১৬-বাইটের একটি ফ্যাট পয়েন্টার (৮-বাইটের ডেটা পয়েন্টার এবং ৮-বাইটের দৈর্ঘ্য) হিসেবে কাজ করে, যা অতিরিক্ত মেমোরি খরচ ছাড়াই চলমান বাফারের অংশ পড়ার সুযোগ দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Rust borrow checker rules, Non-Lexical Lifetimes (NLL), and fat pointer slices.',
        bn: 'Rust বরো চেকার নিয়ম, নন-লেক্সিক্যাল লাইফটাইম (NLL) এবং ফ্যাট পয়েন্টার স্লাইসের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Rust Borrow Checker Rules and Non-Lexical Lifetimes (NLL)

export interface ActiveBorrow {
  id: string;
  kind: 'shared' | 'mutable';
  lastUsedLine: number;
}

export class BorrowCheckerSimulator {
  private activeBorrows: ActiveBorrow[] = [];

  // Register a new borrow at a specific code line
  public borrow(id: string, kind: 'shared' | 'mutable', currentLine: number, lastUsedLine: number): string {
    // 1. Expire past borrows under Non-Lexical Lifetimes (NLL)
    this.activeBorrows = this.activeBorrows.filter(b => b.lastUsedLine >= currentLine);

    // 2. Validate Aliasing XOR Mutability
    if (kind === 'mutable') {
      if (this.activeBorrows.length > 0) {
        throw new Error(
          'E0502: Cannot borrow as mutable because it is already borrowed as ' +
          this.activeBorrows[0].kind + ' by ' + this.activeBorrows[0].id
        );
      }
    } else {
      const activeMut = this.activeBorrows.find(b => b.kind === 'mutable');
      if (activeMut) {
        throw new Error('E0502: Cannot borrow as immutable because it is already borrowed as mutable by ' + activeMut.id);
      }
    }

    this.activeBorrows.push({ id, kind, lastUsedLine });
    return 'Borrow ' + id + ' (' + kind + ') granted at line ' + currentLine;
  }

  public getActiveCount(): number {
    return this.activeBorrows.length;
  }
}

// 1. Demonstrate NLL and Borrow Invariants
const checker = new BorrowCheckerSimulator();

// Line 10: Create immutable borrow r1 used until line 12
console.log(checker.borrow('r1', 'shared', 10, 12));

// Line 11: Create concurrent immutable borrow r2 used until line 14 (Valid: Multiple Readers!)
console.log(checker.borrow('r2', 'shared', 11, 14));
console.log('Active readers at line 11:', checker.getActiveCount()); // 2

// Line 13: Attempting mutable borrow while r2 is still active until line 14 triggers E0502!
try {
  checker.borrow('m1', 'mutable', 13, 20);
} catch (e: unknown) {
  console.log('Conflict at line 13:', (e as Error).message); // E0502
}

// Line 15: r2 expired at line 14. Under NLL, mutable borrow is now allowed!
console.log(checker.borrow('m1', 'mutable', 15, 20)); // Granted!

// 2. Demonstrate Fat Pointer Slice Structure (&str)
export interface StringSliceFatPointer {
  ptrAddress: number; // 8 bytes
  lengthBytes: number; // 8 bytes
  totalStackSize: number; // 16 bytes
}

const slice: StringSliceFatPointer = {
  ptrAddress: 0x55a0,
  lengthBytes: 5,
  totalStackSize: 16
};

console.log('Slice Pointer Address:', slice.ptrAddress); // 21920
console.log('Slice Byte Length:', slice.lengthBytes); // 5
console.log('Slice Stack Size:', slice.totalStackSize, 'bytes'); // 16`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Borrowing',
          def: {
            en: 'Creating a reference (&T or &mut T) to data without taking ownership, bound by strict compiler lifetime rules.',
            bn: 'মালিকানা না নিয়ে কোনো ডেটার রেফারেন্স তৈরি করা যা কঠোর কম্পাইলার নিয়মের অধীন থাকে।'
          }
        },
        {
          term: 'Aliasing XOR Mutability',
          def: {
            en: 'Core safety invariant: memory may have many readers (&T) or exactly 1 writer (&mut T), but never both simultaneously.',
            bn: 'প্রধান নিরাপত্তা নিয়ম: যেকোনো ডেটায় বহু রিডার অথবা ঠিক ১ জন রাইটার থাকবে, কখনোই উভয়টি একসাথে নয়।'
          }
        },
        {
          term: 'Non-Lexical Lifetimes (NLL)',
          def: {
            en: 'Compiler intelligence ending a borrow at its point of last use rather than the end of the enclosing syntactic scope.',
            bn: 'কম্পাইলারের ক্ষমতা যা ব্র্যাকেটের শেষ পর্যন্ত অপেক্ষা না করে রেফারেন্সের শেষ ব্যবহারের পরেই তা মুক্ত করে দেয়।'
          }
        },
        {
          term: 'Fat Pointer (&str)',
          def: {
            en: 'A two-word (16-byte) reference on the stack storing a starting memory pointer alongside a byte length.',
            bn: 'স্ট্যাকের ওপর ১৬-বাইটের রেফারেন্স যা একটি মেমোরি পয়েন্টার এবং ডেটার বাইট দৈর্ঘ্য ধারণ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'aliasing-xor-mutability-rules-ex1',
      kind: 'mcq',
      topic: 'aliasing-xor-mutability-invariant',
      question: {
        en: 'Which of the following reference combinations is strictly FORBIDDEN by the Rust borrow checker simultaneously?',
        bn: 'Rust বরো চেকার নিচের কোন রেফারেন্সের সমন্বয়টিকে একই সাথে থাকার অনুমতি দেয় না?'
      },
      options: [
        {
          en: 'Having 1 mutable reference (&mut T) concurrently alongside 1 or more immutable references (&T)',
          bn: 'একই সাথে ১ বা একাধিক ইমিউটেবল রেফারেন্সের (&T) পাশাপাশি ১ টি মিউটেবল রেফারেন্স (&mut T) থাকা'
        },
        {
          en: 'Having 100 immutable references (&T) reading the same string concurrently',
          bn: 'একই স্ট্রিং একসাথে পড়ার জন্য ১০০ টি ইমিউটেবল রেফারেন্স (&T) থাকা'
        },
        {
          en: 'Having a single mutable reference (&mut T) with zero active immutable references',
          bn: 'কোনো ইমিউটেবল রেফারেন্স ছাড়া কেবল একটি একক মিউটেবল রেফারেন্স (&mut T) থাকা'
        },
        {
          en: 'Having zero references active on an owned variable',
          bn: 'একটি ওনড ভেরিয়েবলের ওপর কোনো সক্রিয় রেফারেন্স না থাকা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Aliasing XOR Mutability: multiple readers OR exactly one writer, never both.',
        bn: 'হয় বহু রিডার নয়তো কেবল ১ জন রাইটার; উভয়টি একসাথে থাকা শতভাগ নিষিদ্ধ।'
      },
      explanation: {
        en: 'Rust guarantees data-race freedom. If a writer could mutate data while readers inspect it, readers could observe corrupted partial writes or invalidated memory.',
        bn: 'রিডার ডেটা পড়ার সময় কেউ তা পরিবর্তন করলে মান নষ্ট হয়ে যেতে পারে; তাই এটি শুরুতেই আটকে দেওয়া হয়।'
      }
    },
    {
      id: 'non-lexical-lifetimes-benefit-ex2',
      kind: 'mcq',
      topic: 'non-lexical-lifetimes-nll-scope',
      question: {
        en: 'How did Non-Lexical Lifetimes (NLL), introduced in the Rust 2018 edition, improve code ergonomics?',
        bn: 'Rust ২০১৮ সংস্করণে আসা নন-লেক্সিক্যাল লাইফটাইম (NLL) কীভাবে কোড লেখাকে অনেক সহজ ও সাবলীল করেছে?'
      },
      options: [
        {
          en: 'The compiler terminates a borrow at its final point of actual use, rather than forcing it to stay active until the closing curly brace of the scope',
          bn: 'কম্পাইলার সেকেন্ড ব্র্যাকেট পর্যন্ত অপেক্ষা না করে রেফারেন্সটির শেষ ব্যবহারের লাইনেই তার মেয়াদ শেষ করে দেয়'
        },
        {
          en: 'It completely disabled the borrow checker in asynchronous functions',
          bn: 'এটি অ্যাসিঙ্ক্রোনাস ফাংশনের ভেতরে বরো চেকারকে সম্পূর্ণ বন্ধ করে দেয়'
        },
        {
          en: 'It converted all heap allocations into 32-bit floating point numbers',
          bn: 'এটি সমস্ত হিপ মেমোরিকে ৩২-বিট ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করে'
        },
        {
          en: 'NLL requires developers to manually call free() on all references',
          bn: 'NLL এর জন্য ডেভেলপারদের সমস্ত রেফারেন্সে ম্যানুয়ালি free() কল করতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'NLL ends borrows at their point of last use, not the end of the curly brace block.',
        bn: 'শেষবার ব্যবহার করার সাথে সাথেই বরো শেষ হয়ে যায়, ফলে পরবর্তী লাইনে নতুন কাজ করা যায়।'
      },
      explanation: {
        en: 'Under NLL, as soon as a reference is no longer read or written, the compiler releases the borrow lock, permitting new mutable borrows in the same lexical block.',
        bn: 'এর ফলে কৃত্রিম ব্লক তৈরি না করেই একই ফাংশনে সহজে কোড লেখা যায়।'
      }
    },
    {
      id: 'fat-pointer-slice-size-ex3',
      kind: 'mcq',
      topic: 'string-slice-fat-pointer-size',
      question: {
        en: 'What is the physical stack footprint and structure of a string slice ("&str") on a 64-bit operating system?',
        bn: 'একটি ৬৪-বিট অপারেটিং সিস্টেমে স্ট্রিং স্লাইসের ("&str") শারীরিক স্ট্যাক সাইজ এবং অভ্যন্তরীণ গঠন কী?'
      },
      options: [
        {
          en: 'A 16-byte fat pointer consisting of an 8-byte pointer to the starting character and an 8-byte length',
          bn: '১৬-বাইটের একটি ফ্যাট পয়েন্টার যাতে প্রথম অক্ষরের ৮-বাইটের পয়েন্টার এবং ৮-বাইটের দৈর্ঘ্য থাকে'
        },
        {
          en: 'A 24-byte struct containing pointer, length, and capacity',
          bn: 'পয়েন্টার, দৈর্ঘ্য এবং ধারণক্ষমতাসহ ২৪-বাইটের একটি স্ট্রাকচার'
        },
        {
          en: 'A single 4-byte integer index',
          bn: 'একটি একক ৪-বাইটের পূর্ণসংখ্যার ইনডেক্স'
        },
        {
          en: 'A 100-byte buffer allocated in CPU cache registers',
          bn: 'সিপিইউ ক্যাশ রেজিস্টারে বরাদ্দকৃত ১০০-বাইটের বাফার'
        }
      ],
      answer: 0,
      hint: {
        en: 'A slice is a fat pointer: pointer (8B) + length (8B) = 16 bytes on 64-bit systems.',
        bn: 'স্লাইসে ক্যাপাসিটি লাগে না, কেবল শুরুর পয়েন্টার ও দৈর্ঘ্য মিলিয়ে মোট ১৬ বাইট।'
      },
      explanation: {
        en: 'Because a slice does not own or reallocate the underlying buffer, it does not require a capacity field. It needs only ptr + len (16 bytes total).',
        bn: 'যেহেতু স্লাইস নতুন মেমোরি নেয় না, তাই এতে ক্যাপাসিটির দরকার হয় না; ১৬ বাইটেই কাজ সম্পন্ন হয়।'
      }
    },
    {
      id: 'disjoint-field-borrowing-ex4',
      kind: 'mcq',
      topic: 'disjoint-struct-field-borrowing',
      question: {
        en: 'Can you simultaneously borrow two different fields of the same struct as mutable in Rust (e.g. "&mut point.x" and "&mut point.y")?',
        bn: 'Rust-এ একই স্ট্রাক্টের দুটি ভিন্ন ফিল্ড কি একই সাথে মিউটেবল হিসেবে ধার করা সম্ভব (যেমন "&mut point.x" এবং "&mut point.y")?'
      },
      options: [
        {
          en: 'Yes, the borrow checker understands disjoint fields and permits simultaneous mutable borrows of distinct, non-overlapping struct fields',
          bn: 'হ্যাঁ, বরো চেকার ভিন্ন ভিন্ন ফিল্ডের পার্থক্য বুঝতে পারে এবং আলাদা ফিল্ডের জন্য একসাথে মিউটেবল বরো করার অনুমতি দেয়'
        },
        {
          en: 'No, borrowing any single field locks the entire computer memory bus',
          bn: 'না, যেকোনো একটি ফিল্ড ধার করলে কম্পিউটারের পুরো মেমোরি লক হয়ে যায়'
        },
        {
          en: 'Only if the struct contains fewer than 2 total fields',
          bn: 'কেবল তখনই যদি স্ট্রাক্টটিতে ২ টির কম ফিল্ড থাকে'
        },
        {
          en: 'Disjoint borrowing was removed in the Rust 2021 edition',
          bn: 'Rust ২০২১ সংস্করণে এই সুবিধা বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'The compiler tracks struct fields individually (disjoint field borrowing).',
        bn: 'কম্পাইলার জানে যে দুটি ফিল্ড মেমোরিতে আলাদা জায়গায় থাকে, তাই তাদের আলাদাভাবে ধার করতে বাধা নেই।'
      },
      explanation: {
        en: 'Rust tracks struct fields independently. As long as the two borrows target disjoint fields, both mutable references can coexist without aliasing conflicts.',
        bn: 'উভয় ফিল্ড একে অপরের ওপর প্রভাব ফেলে না বলে নিরাপত্তা পুরোপুরি বজায় থাকে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-borrowing-and-the-reference',
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
            bn: 'ক্লাউড থেকে একটি বিশেষ NuGet প্যাকেজ ডাউনলোড করে'
          },
          {
            en: 'By converting the String into a 64-bit floating point number',
            bn: 'String কে একটি ৬৪-বিট ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করে'
          },
          {
            en: 'Deref coercion was removed in Rust 2018',
            bn: 'Rust ২০১৮ সংস্করণে Deref coercion বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Deref coercion automatically transforms &String into &str.',
          bn: 'কম্পাইলার নিজে থেকেই ওনড টাইপের রেফারেন্সকে তার ভেতরের স্লাইসে কনভার্ট করে নেয়।'
        },
        explanation: {
          en: 'Deref coercion saves developers from tedious manual slicing ("&s[..]"). If a type implements Deref, Rust coerces its reference into the target type implicitly.',
          bn: 'ফলে বাড়তি কোড না লিখে সহজেই যেকোনো স্ট্রিং ফাংশনে পাস করা যায়।'
        }
      },
      {
        id: 'quiz-interior-mutability-refcell',
        kind: 'mcq',
        topic: 'interior-mutability-refcell-mutex',
        question: {
          en: 'What mechanism allows mutating data even when held behind an immutable reference ("&T") when necessary in advanced systems?',
          bn: 'অ্যাডভান্সড সিস্টেমে প্রয়োজনের সময় ইমিউটেবল রেফারেন্সের ("&T") পেছনে থাকা ডেটাও পরিবর্তন করতে কোন ব্যবস্থা সাহায্য করে?'
        },
        options: [
          {
            en: 'Interior Mutability: types like RefCell<T> or Mutex<T> move borrow checking from compile-time to runtime using safe atomic/cell wrappers',
            bn: 'ইন্টেরিয়র মিউটেবিলিটি: RefCell<T> বা Mutex<T> এর মতো টাইপগুলো নিরাপদ সেল র‍্যাপার দিয়ে বরো চেকিং কম্পাইল-টাইম থেকে রানটাইমে নিয়ে যায়'
          },
          {
            en: 'By disabling the CPU security ring permissions',
            bn: 'সিপিইউর সিকিউরিটি রিং পারমিশন বন্ধ করে দিয়ে'
          },
          {
            en: 'By formatting the source code as JSON',
            bn: 'সোর্স কোডটিকে জেএসন ফরম্যাটে সাজিয়ে'
          },
          {
            en: 'Interior mutability is only permitted in web browsers',
            bn: 'ইন্টেরিয়র মিউটেবিলিটি কেবল ওয়েব ব্রাউজারে ব্যবহারযোগ্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Interior mutability patterns enforce borrow rules at runtime rather than compile-time.',
          bn: 'রানটাইমে বরো চেকিং কার্যকর করে বিশেষ প্রয়োজনে ডেটা মিউটেট করার অনুমতি মেলে।'
        },
        explanation: {
          en: 'Interior mutability types maintain safety invariants internally (e.g. panicking or blocking on conflicting borrows at runtime), providing safe mutation behind shared references.',
          bn: 'এর মাধ্যমে থ্রেড-সেফ কনকারেন্সি বা গ্রাফ ডেটা স্ট্রাকচার তৈরি করা সম্ভব হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'lifetimes-and-the-elision',
    title: {
      en: 'Lifetimes, Elision & The Borrow Checker',
      bn: 'লাইফটাইম, এলিশন এবং বরো চেকার'
    }
  }
};
