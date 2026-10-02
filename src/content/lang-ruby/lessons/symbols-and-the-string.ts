import type { Lesson } from '../../../lib/types';

export const SymbolsAndTheStringLesson: Lesson = {
  slug: 'symbols-and-the-string',
  tech: 'lang-ruby',
  title: {
    en: 'Symbols vs Strings, Memory Interning & UTF-8 Encoding',
    bn: 'সিম্বল বনাম স্ট্রিং, মেমোরি ইন্টার্নিং এবং UTF-8 এনকোডিং'
  },
  summary: {
    en: 'Master memory mechanics and textual identity in the Ruby language. Contrast heap-allocated mutable Strings with immutable interned Symbols, understand object identity via object_id, optimize application memory churn using "# frozen_string_literal: true", and navigate multi-byte UTF-8 string encoding.',
    bn: 'Ruby ভাষায় মেমোরি মেকানিক্স এবং টেক্সচুয়াল আইডেন্টিটি সম্পূর্ণ আয়ত্ত করুন। মেমরিতে হিপ-বরাদ্দকৃত মিউটেবল স্ট্রিং বনাম ইমিউটেবল ইন্টার্নড সিম্বলের পার্থক্য, object_id দিয়ে অবজেক্ট আইডেন্টিটি, "# frozen_string_literal: true" দিয়ে মেমোরি অপটিমাইজেশন এবং মাল্টি-বাইট UTF-8 এনকোডিংয়ের গভীর ব্যবহার শিখুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'symbols-and-memory-interning-heading',
      text: {
        en: 'Memory Interning: Mutable Strings versus Interned Symbols',
        bn: 'মেমোরি ইন্টার্নিং: মিউটেবল স্ট্রিং বনাম ইন্টার্নড সিম্বল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Managing identifiers and textual payloads efficiently is vital for high-throughput software systems. In Ruby (the dynamic object-oriented programming language designed for programmer productivity), text is represented by two distinct primitives: Strings and Symbols. Strings represent mutable sequences of characters. Typing the string literal "active" multiple times creates separate heap objects, each with a unique "object_id". In contrast, Symbols are lightweight immutable identifiers prefixed with a colon (":active"). Symbols are permanently interned into a global lookup table, ensuring that identical symbols share the exact same physical memory address and integer identifier.',
        bn: 'উচ্চগতির সফটওয়্যার সিস্টেমে আইডেন্টিফায়ার এবং টেক্সট পেলোড দক্ষতার সাথে পরিচালনা করা অত্যন্ত জরুরি। কিন্তু Ruby (প্রোগ্রামারদের আনন্দের জন্য তৈরি ডাইনামিক অবজেক্ট-ওরিয়েন্টেড ভাষা)-তে টেক্সট মূলত দুটি ভিন্ন প্রিমিটিভ দিয়ে প্রকাশিত হয়: স্ট্রিং এবং সিম্বল। স্ট্রিং হলো পরিবর্তনশীল অক্ষরের সারি। কোডে একাধিকবার "active" লিখলে মেমরির হিপে প্রতিটি স্ট্রিংয়ের জন্য আলাদা "object_id" সহ নতুন অবজেক্ট তৈরি হয়। অন্যদিকে কোলন চিহ্নযুক্ত সিম্বল (":active") হলো অত্যন্ত হালকা ও অপরিবর্তনীয় নাম। সিম্বলগুলো একটি কেন্দ্রীয় ইন্টার্নিং টেবিলে সংরক্ষিত থাকে, ফলে কোডের যেখানেই একই সিম্বল ব্যবহৃত হোক না কেন, তারা হুবহু একই মেমোরি ঠিকানা এবং পূর্ণসংখ্যা শনাক্তকারী শেয়ার করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Memory layout contrast between mutable heap-allocated Strings, interned global Symbols, and frozen string literals.',
        bn: 'চিত্র ১: মেমরিতে হিপ-বরাদ্দকৃত মিউটেবল স্ট্রিং, ইন্টার্নড গ্লোবাল সিম্বল এবং ফ্রোজেন স্ট্রিং লিটারেলের কাঠামোগত তুলনা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUBY STRINGS VS SYMBOLS MEMORY ARCHITECTURE</text>

  <!-- Left: Mutable Strings -->
  <g transform="translate(30, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#dc2626" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Mutable Strings ("role")</text>

    <!-- Instance 1 -->
    <rect x="15" y="45" width="210" height="42" rx="5" fill="#0f172a" stroke="#dc2626" />
    <text x="25" y="63" fill="#f87171" font-size="10" font-family="monospace">"role" (id: 1040)</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Separate heap allocation</text>

    <!-- Instance 2 -->
    <rect x="15" y="95" width="210" height="42" rx="5" fill="#0f172a" stroke="#dc2626" />
    <text x="25" y="113" fill="#f87171" font-size="10" font-family="monospace">"role" (id: 1080)</text>
    <text x="25" y="128" fill="#cbd5e1" font-size="9" font-family="sans-serif">Duplicate heap allocation</text>

    <rect x="15" y="145" width="210" height="85" rx="5" fill="#dc2626" fill-opacity="0.15" stroke="#ef4444" />
    <text x="25" y="167" fill="#f87171" font-size="9" font-family="sans-serif" font-weight="bold">Characteristics:</text>
    <text x="25" y="185" fill="#f8fafc" font-size="8" font-family="sans-serif">• Mutable in-place ("role" &lt;&lt; "!")</text>
    <text x="25" y="202" fill="#f8fafc" font-size="8" font-family="sans-serif">• O(N) byte-by-byte comparison</text>
    <text x="25" y="218" fill="#f8fafc" font-size="8" font-family="sans-serif">• High garbage collection churn</text>
  </g>

  <!-- Middle: Interned Symbols -->
  <g transform="translate(300, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#0284c7" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Interned Symbols (:role)</text>

    <!-- Symbol Table entry -->
    <rect x="15" y="45" width="210" height="92" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="65" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold">Global VM Symbol Table</text>
    <text x="25" y="85" fill="#34d399" font-size="10" font-family="monospace">:role (id: 2050)</text>
    <text x="25" y="105" fill="#cbd5e1" font-size="9" font-family="sans-serif">All references resolve to one</text>
    <text x="25" y="122" fill="#cbd5e1" font-size="9" font-family="sans-serif">identical pointer in memory</text>

    <rect x="15" y="145" width="210" height="85" rx="5" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" />
    <text x="25" y="167" fill="#38bdf8" font-size="9" font-family="sans-serif" font-weight="bold">Characteristics:</text>
    <text x="25" y="185" fill="#f8fafc" font-size="8" font-family="sans-serif">• Strictly immutable (no modification)</text>
    <text x="25" y="202" fill="#f8fafc" font-size="8" font-family="sans-serif">• O(1) integer pointer comparison</text>
    <text x="25" y="218" fill="#f8fafc" font-size="8" font-family="sans-serif">• Ideal for Hash keys &amp; method names</text>
  </g>

  <!-- Right: Frozen Strings -->
  <g transform="translate(570, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#059669" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Frozen String Literals</text>

    <!-- Magic Comment -->
    <rect x="15" y="45" width="210" height="92" rx="5" fill="#0f172a" stroke="#059669" />
    <text x="25" y="65" fill="#34d399" font-size="9" font-family="monospace"># frozen_string_literal: true</text>
    <text x="25" y="85" fill="#fbbf24" font-size="10" font-family="monospace">"role".frozen? #=&gt; true</text>
    <text x="25" y="105" fill="#cbd5e1" font-size="9" font-family="sans-serif">Deduplicates identical literals</text>
    <text x="25" y="122" fill="#cbd5e1" font-size="9" font-family="sans-serif">Shared single frozen allocation</text>

    <rect x="15" y="145" width="210" height="85" rx="5" fill="#059669" fill-opacity="0.15" stroke="#10b981" />
    <text x="25" y="167" fill="#34d399" font-size="9" font-family="sans-serif" font-weight="bold">Production Benefit:</text>
    <text x="25" y="185" fill="#f8fafc" font-size="8" font-family="sans-serif">• Prevents heap bloat in Rails</text>
    <text x="25" y="202" fill="#f8fafc" font-size="8" font-family="sans-serif">• Best of both: readable text</text>
    <text x="25" y="218" fill="#f8fafc" font-size="8" font-family="sans-serif">  plus zero allocation churn</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'frozen-strings-and-utf8-encoding-heading',
      text: {
        en: 'Frozen Literals, Heredocs, and Multi-Byte UTF-8 Strings',
        bn: 'ফ্রোজেন লিটারেল, হেয়ারডক এবং মাল্টি-বাইট UTF-8 স্ট্রিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because comparing Symbols requires matching only integer memory addresses, symbol equality takes O(1) constant time, making them the standard choice for Hash keys. To bring this memory efficiency to strings without sacrificing readability, modern Ruby supports "# frozen_string_literal: true". This directive instructs the compiler to freeze string literals, causing identical literals to share a single deduplicated object. For multi-line text like SQL queries, Ruby provides squiggly heredocs ("<<~TEXT") that strip common leading indentation. Furthermore, Ruby strings are encoding-aware, distinguishing between character count ("length") and physical memory footprint ("bytesize").',
        bn: 'যেহেতু দুটি সিম্বল সমান কি না তা যাচাই করতে কেবল মেমোরি ঠিকানার পূর্ণসংখ্যা মেলালেই চলে, তাই সিম্বল মেলানো O(1) কনস্ট্যান্ট সময়ে সম্পন্ন হয়। এই কারণে হ্যাশ কি হিসেবে সিম্বল আদর্শ পছন্দ। পাঠযোগ্যতা বজায় রেখে স্ট্রিংয়ের ক্ষেত্রেও এই মেমোরি সাশ্রয় নিশ্চিত করতে আধুনিক Ruby-তে ফাইলের শুরুতে "# frozen_string_literal: true" ম্যাজিক কমেন্ট লেখা হয়। এটি কম্পাইলারকে ফাইলের সমস্ত স্ট্রিং লিটারেল ফ্রোজেন করার নির্দেশ দেয়, যার ফলে একই স্ট্রিং একাধিকবার লিখলেও একটিমাত্র অবজেক্ট তৈরি হয়। SQL কুয়েরির মতো বড় মাল্টি-লাইন টেক্সটের জন্য Ruby স্কুইগলি হেয়ারডক ("<<~TEXT") সুবিধা দেয় যা বাড়তি ইনডেন্টেশন স্বয়ংক্রিয়ভাবে মুছে ফেলে। তাছাড়া Ruby স্ট্রিং সম্পূর্ণ এনকোডিং সচেতন, যা অক্ষরের দৃশ্যমান সংখ্যা ("length") এবং মেমরির প্রকৃত আকার ("bytesize") আলাদাভাবে হিসাব করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Ruby String heap allocation versus Symbol interning, pointer equality comparison, and frozen string deduplication.',
        bn: 'Ruby স্ট্রিং মেমোরি বরাদ্দ বনাম সিম্বল ইন্টার্নিং, পয়েন্টার সমতা পরীক্ষা এবং ফ্রোজেন স্ট্রিং অপটিমাইজেশনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Ruby Strings, Symbols, and Frozen String Deduplication

export class RubyMemoryEngine {
  private static nextObjectId = 1000;
  private static symbolTable: Map<string, number> = new Map();
  private static frozenStringTable: Map<string, number> = new Map();

  // Simulates allocating a regular mutable Ruby string: "role"
  public static createString(val: string, frozen: boolean = false): { value: string; objectId: number; frozen: boolean } {
    if (frozen) {
      // Simulates # frozen_string_literal: true deduplication
      let existingId = this.frozenStringTable.get(val);
      if (!existingId) {
        existingId = this.nextObjectId++;
        this.frozenStringTable.set(val, existingId);
      }
      return { value: val, objectId: existingId, frozen: true };
    }

    // Mutable strings always allocate a new object_id on the heap
    return {
      value: val,
      objectId: this.nextObjectId++,
      frozen: false
    };
  }

  // Simulates creating an interned Ruby symbol: :role
  public static createSymbol(name: string): { name: string; objectId: number } {
    let symId = this.symbolTable.get(name);
    if (!symId) {
      symId = this.nextObjectId++;
      this.symbolTable.set(name, symId);
    }
    return { name, objectId: symId };
  }

  // Simulates O(1) pointer comparison for symbols vs O(N) byte comparison for strings
  public static compareSymbols(aId: number, bId: number): boolean {
    return aId === bId; // Single CPU integer register equality check
  }
}

// Execution Demonstration
console.log('--- 1. Testing Mutable Strings Allocation ---');
const str1 = RubyMemoryEngine.createString('role');
const str2 = RubyMemoryEngine.createString('role');
console.log('str1 object_id:', str1.objectId); // 1000
console.log('str2 object_id:', str2.objectId); // 1001 (New heap allocation!)
console.log('Are str1 and str2 same object?:', str1.objectId === str2.objectId); // false

console.log('\n--- 2. Testing Interned Symbols ---');
const sym1 = RubyMemoryEngine.createSymbol('role');
const sym2 = RubyMemoryEngine.createSymbol('role');
console.log('sym1 object_id:', sym1.objectId); // 1002
console.log('sym2 object_id:', sym2.objectId); // 1002 (Exact same interned address!)
console.log('O(1) Symbol Identity Equality:', RubyMemoryEngine.compareSymbols(sym1.objectId, sym2.objectId)); // true

console.log('\n--- 3. Testing # frozen_string_literal: true ---');
const frozenStr1 = RubyMemoryEngine.createString('admin', true);
const frozenStr2 = RubyMemoryEngine.createString('admin', true);
console.log('frozenStr1 object_id:', frozenStr1.objectId); // 1003
console.log('frozenStr2 object_id:', frozenStr2.objectId); // 1003 (Deduplicated memory!)
console.log('Frozen String Deduplication Match?:', frozenStr1.objectId === frozenStr2.objectId); // true`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'String vs Symbol',
          def: {
            en: 'Strings are mutable character buffers; Symbols are immutable interned identifiers sharing memory addresses.',
            bn: 'স্ট্রিং হলো পরিবর্তনশীল অক্ষরের সারি; আর সিম্বল হলো অপরিবর্তনীয় নাম যা একই মেমোরি ঠিকানা শেয়ার করে।'
          }
        },
        {
          term: 'Memory Interning & object_id',
          def: {
            en: 'Process where unique symbol names map to identical integer identifiers (object_id) for O(1) comparison.',
            bn: 'এমন একটি পদ্ধতি যেখানে প্রতিটি সিম্বল একটি নির্দিষ্ট অবজেক্ট আইডিতে সংরক্ষিত থাকে এবং O(1) সময়ে মিলে যায়।'
          }
        },
        {
          term: 'frozen_string_literal',
          def: {
            en: 'Magic comment instructing the Ruby VM to freeze and deduplicate identical string literals across a file.',
            bn: 'ম্যাজিক কমেন্ট যা ফাইলের প্রতিটি স্ট্রিংকে ফ্রোজেন করে মেমরিতে ডুপ্লিকেট অবজেক্ট তৈরি হওয়া বন্ধ করে।'
          }
        },
        {
          term: 'UTF-8 bytesize vs length',
          def: {
            en: 'Length counts human characters; bytesize measures physical memory bytes allocated (e.g. multi-byte emojis).',
            bn: 'Length অক্ষরের দৃশ্যমান সংখ্যা গুনে; আর bytesize মেমরিতে প্রকৃত বাইটের আকার হিসাব করে (যেমন ইমোজির ক্ষেত্রে)।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'symbols-interned-identity-check-ex1',
      kind: 'mcq',
      topic: 'ruby-symbols-pointer-equality-check',
      question: {
        en: 'Why is comparing two symbols (e.g. :user == :user) significantly faster than comparing two strings (e.g. "user" == "user") in Ruby?',
        bn: 'Ruby-তে দুটি স্ট্রিং মেলানোর ("user" == "user") চেয়ে দুটি সিম্বল মেলানো (:user == :user) কেন অনেক বেশি দ্রুতগতির?'
      },
      options: [
        {
          en: 'Symbol comparison is an O(1) constant-time pointer equality check on 64-bit integer object_ids, while string comparison requires O(N) byte-by-byte traversal',
          bn: 'সিম্বল তুলনা হলো ৬৪-বিট পূর্ণসংখ্যার object_id-র ওপর O(1) সময়ের দ্রুত পয়েন্টার পরীক্ষা; আর স্ট্রিং তুলনায় O(N) সময়ে প্রতিটি বাইট মিলিয়ে দেখতে হয়'
        },
        {
          en: 'Symbols are evaluated on graphics card GPUs',
          bn: 'সিম্বলগুলো গ্রাফিক্স কার্ডের GPU-তে মূল্যায়িত হয়'
        },
        {
          en: 'Strings are converted to binary files on disk before comparison',
          bn: 'তুলনা করার আগে স্ট্রিংগুলোকে ডিস্কে বাইনারি ফাইলে রূপান্তর করা হয়'
        },
        {
          en: 'There is zero speed difference between strings and symbols',
          bn: 'স্ট্রিং এবং সিম্বলের মাঝে কোনো গতির পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Symbols compare integer memory addresses; strings compare character bytes.',
        bn: 'সিম্বলের ক্ষেত্রে মেমোরি পয়েন্টার এক কি না দেখলেই চলে, প্রতিটি অক্ষর মিলিয়ে দেখার প্রয়োজন হয় না।'
      },
      explanation: {
        en: 'Because symbols are interned, checking equality requires comparing only their internal integer IDs. String equality must check lengths and compare byte by byte.',
        bn: 'সিম্বলের ইন্টার্নিং সুবিধার কারণে মেমোরি ঠিকানার সমতা পরীক্ষা করেই নিমেষে সিদ্ধান্ত নেওয়া যায়।'
      }
    },
    {
      id: 'frozen-error-on-mutation-ex2',
      kind: 'mcq',
      topic: 'frozen-string-literal-frozen-error-raise',
      question: {
        en: 'What occurs if code invokes "msg << \'!\'" on "msg = \'hello\'" in a Ruby source file starting with "# frozen_string_literal: true"?',
        bn: '"# frozen_string_literal: true" যুক্ত ফাইলে "msg = \'hello\'"-এর পর "msg << \'!\'" চালালে কী ঘটে?'
      },
      options: [
        {
          en: 'Ruby raises a runtime "FrozenError: can\'t modify frozen String" because string literals are immutable',
          bn: 'Ruby রানটাইমে একটি "FrozenError: can\'t modify frozen String" এরর দেয় কারণ স্ট্রিং লিটারেলটি ফ্রোজেন বা অপরিবর্তনীয়'
        },
        {
          en: 'It deletes the file from the operating system',
          bn: 'এটি অপারেটিং সিস্টেম থেকে ফাইলটি মুছে ফেলে'
        },
        {
          en: 'It successfully appends the exclamation mark in memory',
          bn: 'এটি মেমরিতে বিস্ময়বোধক চিহ্নটি সফলভাবে যোগ করে'
        },
        {
          en: 'FrozenError only exists in Python, not Ruby',
          bn: 'FrozenError কেবল পাইথনেই বিদ্যমান, Ruby-তে নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Frozen strings prevent in-place mutation, raising FrozenError.',
        bn: 'ফ্রোজেন স্ট্রিংয়ে কোনো পরিবর্তন করা যায় না, পরিবর্তন করতে চাইলে FrozenError ঘটে।'
      },
      explanation: {
        en: 'Under the frozen string literal magic comment, literals are frozen upon instantiation. In-place mutating methods like "<<" raise a FrozenError.',
        bn: 'এই ম্যাজিক কমেন্ট অ্যাপ্লিকেশনের স্ট্রিংগুলোকে সুরক্ষিত ও অপরিবর্তনীয় রাখে।'
      }
    },
    {
      id: 'squiggly-heredoc-indentation-removal-ex3',
      kind: 'mcq',
      topic: 'ruby-squiggly-heredoc-margin-clean',
      question: {
        en: 'What does the squiggly heredoc operator ("<<~") do to leading whitespace in multi-line string blocks?',
        bn: 'মাল্টি-লাইন স্ট্রিং ব্লকে শুরুর ফাঁকা জায়গার ক্ষেত্রে স্কুইগলি হেয়ারডক অপারেটর ("<<~") কী কাজ করে?'
      },
      options: [
        {
          en: 'It automatically strips the common leading whitespace margin from each line, keeping source code indented cleanly without corrupting the string content',
          bn: 'এটি প্রতিটি লাইনের শুরুর সাধারণ মার্জিন বা ফাঁকা জায়গা স্বয়ংক্রিয়ভাবে ছেঁটে ফেলে, ফলে কোডের স্বাভাবিক ইনডেন্টেশন অক্ষুণ্ণ থাকে'
        },
        {
          en: 'It encrypts the string with an SSL certificate',
          bn: 'এটি একটি SSL সার্টিফিকেট দিয়ে স্ট্রিং এনক্রিপ্ট করে'
        },
        {
          en: 'It doubles the indentation of every second line',
          bn: 'এটি প্রতি দ্বিতীয় লাইনের ইনডেন্টেশন দ্বিগুণ করে দেয়'
        },
        {
          en: 'Squiggly heredocs are prohibited in modern Ruby',
          bn: 'আধুনিক Ruby-তে স্কুইগলি হেয়ারডক নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: '<<~ strips common leading indentation to keep source code formatted neatly.',
        bn: 'মেথডের ভেতরে বড় টেক্সট লিখলেও কোডের সুন্দর মার্জিন বজায় রাখার সেরা উপায়।'
      },
      explanation: {
        en: 'Traditional heredocs require text flush against column 0. The squiggly heredoc ("<<~") lets developers indent multi-line strings neatly while removing leading margin spaces.',
        bn: 'এর মাধ্যমে কোডের সৌন্দর্য নষ্ট না করে পরিচ্ছন্নভাবে বড় টেক্সট বা কুয়েরি লেখা যায়।'
      }
    },
    {
      id: 'utf8-bytesize-vs-character-count-ex4',
      kind: 'mcq',
      topic: 'ruby-utf8-bytesize-vs-length-unicode',
      question: {
        en: 'When evaluating "str = \'💎\'" (gem emoji) in Ruby, why does "str.length" return 1 while "str.bytesize" returns 4?',
        bn: 'Ruby-তে "str = \'💎\'" (রত্ন ইমোজি) স্ট্রিংটির ক্ষেত্রে কেন "str.length" ১ রিটার্ন করে কিন্তু "str.bytesize" ৪ রিটার্ন করে?'
      },
      options: [
        {
          en: '"length" counts the single human-visible Unicode character, while "bytesize" counts the 4 physical bytes allocated in UTF-8 memory encoding',
          bn: '"length" দৃশ্যমান ১ টি ইউনিকোড অক্ষরের সংখ্যা হিসাব করে; আর "bytesize" UTF-8 মেমোরিতে বরাদ্দকৃত প্রকৃত ৪ টি বাইট গণনা করে'
        },
        {
          en: 'Because Ruby has a bug in its emoji parser',
          bn: 'কারণ Ruby-র ইমোজি পার্সারে একটি বাগ রয়েছে'
        },
        {
          en: 'Emojis consume 1 megabyte of memory in Ruby',
          bn: 'Ruby-তে ইমোজি ১ মেগাবাইট মেমোরি খরচ করে'
        },
        {
          en: 'bytesize is an alias of length in Ruby 3',
          bn: 'Ruby ৩-এ bytesize হলো length-এর সাধারণ এলিয়াস'
        }
      ],
      answer: 0,
      hint: {
        en: 'UTF-8 uses variable byte widths: emojis take 4 physical bytes per character.',
        bn: 'ইউনিকোডে বিশেষ অক্ষরের জন্য একাধিক বাইটের প্রয়োজন হয়।'
      },
      explanation: {
        en: 'Ruby is encoding-aware. For UTF-8 multi-byte characters like emojis or non-Latin scripts, "length" gives the logical character count while "bytesize" reflects actual binary storage.',
        bn: 'Ruby অক্ষরের যুক্তিযুক্ত সংখ্যা এবং মেমরির প্রকৃত আকার সঠিকভাবে আলাদা করতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-symbols-and-the-string',
    title: {
      en: 'Ruby Symbols & Strings Quiz',
      bn: 'Ruby সিম্বল এবং স্ট্রিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-string-dup-unfreeze',
        kind: 'mcq',
        topic: 'ruby-string-dup-and-unary-plus-unfreeze',
        question: {
          en: 'How can a developer safely obtain a mutable copy of a frozen string literal in Ruby?',
          bn: 'Ruby-তে একটি ফ্রোজেন স্ট্রিং থেকে পরিবর্তনযোগ্য মিউটেবল কপি পাওয়ার নিরাপদ উপায় কী?'
        },
        options: [
          {
            en: 'Calling ".dup" or prepending the unary plus operator ("+str"), which returns an unfrozen mutable duplicate of the string',
            bn: '".dup" কল করে অথবা ইউনারি প্লাস অপারেটর ("+str") ব্যবহার করে, যা স্ট্রিংটির একটি আনফ্রোজেন মিউটেবল কপি রিটার্ন করে'
          },
          {
            en: 'Rebooting the computer to reset string memory',
            bn: 'স্ট্রিং মেমোরি রিসেট করতে কম্পিউটার রিবুট করে'
          },
          {
            en: 'Deleting the frozen string from Git version control',
            bn: 'গিট ভার্সন কন্ট্রোল থেকে ফ্রোজেন স্ট্রিংটি মুছে ফেলে'
          },
          {
            en: 'Frozen strings can never be duplicated in Ruby',
            bn: 'Ruby-তে ফ্রোজেন স্ট্রিং কখনোই ডুপ্লিকেট করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: '+str or str.dup creates a mutable copy of a frozen string.',
          bn: 'ইউনারি প্লাস (+) বা .dup দিয়ে সহজেই পরিবর্তনযোগ্য কপি তৈরি করা যায়।'
        },
        explanation: {
          en: 'In modern Ruby, unary "+" on a frozen string creates an unfrozen duplicate. Conversely, unary "-" freezes a mutable string.',
          bn: 'প্লাস (+) দিয়ে আনফ্রোজেন এবং মাইনাস (-) দিয়ে ফ্রোজেন কপি তৈরি করা যায়।'
        }
      },
      {
        id: 'quiz-symbol-to-string-coercion',
        kind: 'mcq',
        topic: 'ruby-symbol-to-s-string-conversion',
        question: {
          en: 'What method converts a Symbol into a String, and which converts a String into a Symbol?',
          bn: 'কোন মেথডটি একটি Symbol-কে String-এ রূপান্তর করে এবং কোনটি String-কে Symbol-এ রূপান্তর করে?'
        },
        options: [
          {
            en: '":status.to_s" converts a symbol to a string; ""status".to_sym" (or ".intern") converts a string to a symbol',
            bn: '":status.to_s" সিম্বলকে স্ট্রিংয়ে রূপান্তর করে; আর ""status".to_sym" (বা ".intern") স্ট্রিংকে সিম্বলে রূপান্তর করে'
          },
          {
            en: 'to_s is only valid for numbers in Ruby',
            bn: 'Ruby-তে to_s কেবল সংখ্যার জন্যই বৈধ'
          },
          {
            en: 'Symbols cannot be converted to strings',
            bn: 'সিম্বলকে কোনো স্ট্রিংয়ে রূপান্তর করা যায় না'
          },
          {
            en: 'to_sym was removed in Ruby 3.0',
            bn: 'Ruby ৩.০ সংস্করণে to_sym বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use to_s for string conversion and to_sym for symbol conversion.',
          bn: 'স্ট্রিং ও সিম্বলের মাঝে রূপান্তর করার সবচেয়ে মৌলিক দুটি মেথড।'
        },
        explanation: {
          en: 'The standard conversion methods in Ruby are "to_s" (to string) and "to_sym" (to symbol, historically "intern").',
          bn: 'এর মাধ্যমে প্রয়োজনমতো স্ট্রিং থেকে সিম্বল এবং সিম্বল থেকে স্ট্রিংয়ে যাওয়া যায়।'
        }
      },
      {
        id: 'quiz-percent-i-symbol-array-shorthand',
        kind: 'mcq',
        topic: 'ruby-percent-i-symbol-array-literal',
        question: {
          en: 'What does the percent literal "%i[admin editor member]" evaluate to in Ruby?',
          bn: 'Ruby-তে পারসেন্ট লিটারেল "%i[admin editor member]" রান করলে কী ফলাফল পাওয়া যায়?'
        },
        options: [
          {
            en: '[:admin, :editor, :member] (an Array of interned Symbols created without typing repetitive colons and quotes)',
            bn: '[:admin, :editor, :member] (ইন্টার্নড সিম্বলের একটি অ্যারে যা বারবার কোলন বা কোটেশন না লিখে তৈরি হয়)'
          },
          {
            en: '["admin", "editor", "member"]',
            bn: '["admin", "editor", "member"]'
          },
          {
            en: 'An array of integer ASCII values',
            bn: 'পূর্ণসংখ্যার অ্যাসকি মানের একটি অ্যারে'
          },
          {
            en: '%i is illegal syntax in modern Ruby',
            bn: 'আধুনিক Ruby-তে %i সম্পূর্ণ অবৈধ সিনট্যাক্স'
          }
        ],
        answer: 0,
        hint: {
          en: '%i generates an array of symbols; %w generates an array of strings.',
          bn: 'কোলন না লিখে সহজেই সিম্বলের তালিকা বানানোর সুবিধাজনক শর্টকাট।'
        },
        explanation: {
          en: 'Ruby provides percent notation shortcuts: "%w[...]" generates an array of words/strings, and "%i[...]" generates an array of symbols.',
          bn: 'এটি কোডকে পরিচ্ছন্ন ও অপ্রয়োজনীয় বিরামচিহ্নমুক্ত রাখতে সাহায্য করে।'
        }
      },
      {
        id: 'quiz-string-force-encoding-vs-encode',
        kind: 'mcq',
        topic: 'ruby-string-force-encoding-vs-encode',
        question: {
          en: 'What is the operational difference between "str.force_encoding(\'UTF-8\')" and "str.encode(\'UTF-8\')" in Ruby?',
          bn: 'Ruby-তে "str.force_encoding(\'UTF-8\')" এবং "str.encode(\'UTF-8\')"-এর মাঝে ব্যবহারিক পার্থক্য কী?'
        },
        options: [
          {
            en: '"force_encoding" merely relabels the string\'s encoding tag without modifying underlying raw bytes; "encode" actively transcode the binary bytes from source encoding to target encoding',
            bn: '"force_encoding" মেমরির বাইট পরিবর্তন না করে কেবল এনকোডিং ট্যাগটি বদলে দেয়; আর "encode" সক্রিয়ভাবে বাইনারি বাইটগুলোকে রূপান্তর (transcode) করে'
          },
          {
            en: 'force_encoding converts text to uppercase; encode converts to lowercase',
            bn: 'force_encoding টেক্সট বড় হাতের করে আর encode ছোট হাতের করে'
          },
          {
            en: 'encode only works with database passwords',
            bn: 'encode কেবল ডেটাবেস পাসওয়ার্ডের সাথেই কাজ করে'
          },
          {
            en: 'force_encoding was deprecated in Ruby 2.0',
            bn: 'Ruby ২.০ সংস্করণে force_encoding বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'force_encoding relabels bytes; encode transcodes bytes.',
          bn: 'ট্যাগ বদলে দেওয়া আর প্রকৃত বাইট রূপান্তরের মাঝে স্পষ্ট পার্থক্য।'
        },
        explanation: {
          en: '"force_encoding" changes how Ruby interprets existing bytes. "encode" performs actual character transcoding, altering underlying byte sequences if needed.',
          bn: 'বাইনারি ডেটা সঠিক ফরম্যাটে পড়তে force_encoding এবং ভিন্ন ফরম্যাটে রূপান্তর করতে encode ব্যবহৃত হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'mixins-and-the-module',
    title: {
      en: 'Modules, Mixins, Multiple Inheritance & Ancestor Dispatch',
      bn: 'মডিউল, মিক্সইন, মাল্টিপল ইনহেরিট্যান্স এবং অ্যানসেস্টর ডিসপ্যাচ'
    }
  }
};
