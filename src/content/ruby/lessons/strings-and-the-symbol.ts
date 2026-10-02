import type { Lesson } from '../../../lib/types';

export const StringsAndTheSymbolLesson: Lesson = {
  slug: 'strings-and-the-symbol',
  tech: 'ruby',
  title: {
    en: 'Strings vs Symbols, Memory Interning & UTF-8 Encoding',
    bn: 'স্ট্রিং বনাম সিম্বল, মেমোরি ইন্টার্নিং এবং UTF-8 এনকোডিং'
  },
  summary: {
    en: 'Master the architectural differences between Strings and Symbols in Ruby. Explore object identity via object_id, understand symbol interning in the VM symbol table, optimize memory churn using the "# frozen_string_literal: true" directive, utilize multi-line squiggly heredocs, and navigate multi-byte UTF-8 string encoding.',
    bn: 'Ruby-তে স্ট্রিং এবং সিম্বলের অভ্যন্তরীণ কাঠামোগত পার্থক্য সম্পূর্ণ আয়ত্ত করুন। object_id দিয়ে অবজেক্ট আইডেন্টিটি, মেমোরিতে সিম্বল ইন্টার্নিং টেবিল, "# frozen_string_literal: true" দিয়ে মেমোরি অপটিমাইজেশন, মাল্টি-লাইন স্কুইগলি হেয়ারডক (heredoc) এবং মাল্টি-বাইট UTF-8 এনকোডিংয়ের গভীর ব্যবহার শিখুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'strings-vs-symbols-identity-heading',
      text: {
        en: 'Object Identity: Mutable Strings versus Interned Symbols',
        bn: 'অবজেক্ট আইডেন্টিটি: মিউটেবল স্ট্রিং বনাম ইন্টার্নড সিম্বল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Handling textual data and identifiers efficiently is critical for high-throughput web servers. In Ruby (the dynamic object-oriented programming language designed for programmer productivity), developers manage text through two distinct data structures: Strings and Symbols. Strings represent mutable sequences of characters. Repeatedly typing the string literal "active" allocates a new object on the heap with a distinct "object_id". In contrast, Symbols are lightweight immutable identifiers prefixed with a colon (":active"). Symbols are permanently interned into a central lookup table, ensuring identical symbols share the exact same memory address and "object_id".',
        bn: 'উচ্চগতির ওয়েব সার্ভারে টেক্সট ডেটা এবং শনাক্তকারী সঠিকভাবে নিয়ন্ত্রণ করা পারফরম্যান্সের জন্য অত্যন্ত গুরুত্বপূর্ণ। কিন্তু Ruby (প্রোগ্রামারদের আনন্দের জন্য তৈরি ডাইনামিক অবজেক্ট-ওরিয়েন্টেড ভাষা)-তে ডেভেলপাররা টেক্সট পরিচালনার জন্য দুটি ভিন্ন ডেটা স্ট্রাকচার ব্যবহার করেন: স্ট্রিং এবং সিম্বল। স্ট্রিং হলো পরিবর্তনশীল অক্ষরের সারি। কোডে বারবার "active" লিখলে মেমরির হিপে প্রতিটি স্ট্রিংয়ের জন্য আলাদা "object_id" সহ নতুন অবজেক্ট তৈরি হয়। অন্যদিকে কোলন চিহ্নযুক্ত সিম্বল (":active") হলো অত্যন্ত হালকা ও অপরিবর্তনীয় নাম। সিম্বলগুলো একটি কেন্দ্রীয় ইন্টার্নিং টেবিলে সংরক্ষিত থাকে, ফলে কোডের যেখানেই একই সিম্বল ব্যবহৃত হোক না কেন, তারা হুবহু একই মেমোরি ঠিকানা এবং "object_id" শেয়ার করে।'
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
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Mutable Strings ("status")</text>

    <!-- Instance 1 -->
    <rect x="15" y="45" width="210" height="42" rx="5" fill="#0f172a" stroke="#dc2626" />
    <text x="25" y="63" fill="#f87171" font-size="10" font-family="monospace">"status" (id: 1040)</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Separate heap allocation</text>

    <!-- Instance 2 -->
    <rect x="15" y="95" width="210" height="42" rx="5" fill="#0f172a" stroke="#dc2626" />
    <text x="25" y="113" fill="#f87171" font-size="10" font-family="monospace">"status" (id: 1080)</text>
    <text x="25" y="128" fill="#cbd5e1" font-size="9" font-family="sans-serif">Duplicate heap allocation</text>

    <rect x="15" y="145" width="210" height="85" rx="5" fill="#dc2626" fill-opacity="0.15" stroke="#ef4444" />
    <text x="25" y="167" fill="#f87171" font-size="9" font-family="sans-serif" font-weight="bold">Characteristics:</text>
    <text x="25" y="185" fill="#f8fafc" font-size="8" font-family="sans-serif">• Mutable in-place ("status" &lt;&lt; "!")</text>
    <text x="25" y="202" fill="#f8fafc" font-size="8" font-family="sans-serif">• O(N) byte-by-byte comparison</text>
    <text x="25" y="218" fill="#f8fafc" font-size="8" font-family="sans-serif">• High garbage collection churn</text>
  </g>

  <!-- Middle: Interned Symbols -->
  <g transform="translate(300, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#0284c7" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Interned Symbols (:status)</text>

    <!-- Symbol Table entry -->
    <rect x="15" y="45" width="210" height="92" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="65" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold">Global VM Symbol Table</text>
    <text x="25" y="85" fill="#34d399" font-size="10" font-family="monospace">:status (id: 2050)</text>
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
    <text x="25" y="85" fill="#fbbf24" font-size="10" font-family="monospace">"status".frozen? #=&gt; true</text>
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
      id: 'frozen-strings-heredocs-and-encoding-heading',
      text: {
        en: 'Frozen Literals, Heredocs, and Multi-Byte UTF-8 Encoding',
        bn: 'ফ্রোজেন লিটারেল, হেয়ারডক এবং মাল্টি-বাইট UTF-8 এনকোডিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because comparing Symbols requires checking only integer memory addresses, matching symbols takes O(1) constant time, making them ideal for Hash keys. To bring this memory efficiency to strings, modern Ruby supports the magic comment "# frozen_string_literal: true". This directive freezes all string literals in the file, causing identical strings to share the same object. For multi-line structured text like SQL or JSON templates, Ruby offers squiggly heredocs ("<<~TEXT") that automatically strip leading indentation. Furthermore, Ruby strings are encoding-aware, distinguishing between character count ("length") and physical memory footprint ("bytesize") for UTF-8 unicode text.',
        bn: 'যেহেতু দুটি সিম্বল সমান কি না তা যাচাই করতে কেবল মেমোরি ঠিকানার পূর্ণসংখ্যা মেলালেই চলে, তাই সিম্বল মেলানো O(1) কনস্ট্যান্ট সময়ে সম্পন্ন হয়। এই কারণে হ্যাশ কি হিসেবে সিম্বল সবচেয়ে বেশি উপযোগী। স্ট্রিংয়ের ক্ষেত্রেও মেমোরি সাশ্রয় নিশ্চিত করতে আধুনিক Ruby-তে ফাইলের শুরুতে "# frozen_string_literal: true" ম্যাজিক কমেন্ট লেখা হয়। এটি ফাইলের সমস্ত স্ট্রিংকে ফ্রোজেন করে দেয়, ফলে একই স্ট্রিং একাধিকবার লিখলেও একটি মাত্র অবজেক্ট তৈরি হয়। SQL বা JSON-এর মতো বড় মাল্টি-লাইন টেক্সটের জন্য Ruby স্কুইগলি হেয়ারডক ("<<~TEXT") সুবিধা দেয় যা বাড়তি ইনডেন্টেশন স্বয়ংক্রিয়ভাবে মুছে ফেলে। তাছাড়া Ruby স্ট্রিং সম্পূর্ণ UTF-8 এনকোডিং সচেতন, যা অক্ষরের মোট সংখ্যা ("length") এবং মেমরির প্রকৃত আকার ("bytesize") আলাদাভাবে হিসাব করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Ruby String allocation versus Symbol interning, pointer equality comparison, and frozen string deduplication.',
        bn: 'Ruby স্ট্রিং মেমোরি বরাদ্দ বনাম সিম্বল ইন্টার্নিং, পয়েন্টার সমতা পরীক্ষা এবং ফ্রোজেন স্ট্রিং অপটিমাইজেশনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Ruby Strings, Symbols, and Frozen String Deduplication

export class RubyMemoryEngine {
  private static nextObjectId = 1000;
  private static symbolTable: Map<string, number> = new Map();
  private static frozenStringTable: Map<string, number> = new Map();

  // Simulates allocating a regular mutable Ruby string: "status"
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

  // Simulates creating an interned Ruby symbol: :status
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
const str1 = RubyMemoryEngine.createString('active');
const str2 = RubyMemoryEngine.createString('active');
console.log('str1 object_id:', str1.objectId); // 1000
console.log('str2 object_id:', str2.objectId); // 1001 (New heap allocation!)
console.log('Are str1 and str2 same object?:', str1.objectId === str2.objectId); // false

console.log('\n--- 2. Testing Interned Symbols ---');
const sym1 = RubyMemoryEngine.createSymbol('active');
const sym2 = RubyMemoryEngine.createSymbol('active');
console.log('sym1 object_id:', sym1.objectId); // 1002
console.log('sym2 object_id:', sym2.objectId); // 1002 (Exact same interned address!)
console.log('O(1) Symbol Identity Equality:', RubyMemoryEngine.compareSymbols(sym1.objectId, sym2.objectId)); // true

console.log('\n--- 3. Testing # frozen_string_literal: true ---');
const frozenStr1 = RubyMemoryEngine.createString('completed', true);
const frozenStr2 = RubyMemoryEngine.createString('completed', true);
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
      id: 'symbols-same-object-id-ex1',
      kind: 'mcq',
      topic: 'ruby-symbols-object-id-interning',
      question: {
        en: 'What is the result of evaluating ":status.object_id == :status.object_id" in Ruby?',
        bn: 'Ruby-তে ":status.object_id == :status.object_id" এক্সপ্রেশনটি রান করলে কী ফলাফল পাওয়া যায়?'
      },
      options: [
        {
          en: 'It evaluates to "true" because symbols are interned in the VM table and always share the exact same physical memory address and object_id',
          bn: 'এটি "true" হয় কারণ সিম্বলগুলো ভার্চুয়াল মেশিনের টেবিলে সংরক্ষিত থাকে এবং সর্বদা একই মেমোরি ঠিকানা ও object_id শেয়ার করে'
        },
        {
          en: 'It evaluates to false because every symbol creates a new heap object',
          bn: 'এটি false হয় কারণ প্রতিটি সিম্বল মেমরির হিপে নতুন অবজেক্ট তৈরি করে'
        },
        {
          en: 'It raises an ArgumentError',
          bn: 'এটি একটি ArgumentError ঘটায়'
        },
        {
          en: 'object_id does not exist on symbols in modern Ruby',
          bn: 'আধুনিক Ruby-তে সিম্বলের কোনো object_id থাকে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Symbols are immutable and interned, guaranteeing pointer identity across the process.',
        bn: 'একই নামের সিম্বল কোডের যেখানেই থাকুক, তাদের আইডি সর্বদা হুবহু এক থাকে।'
      },
      explanation: {
        en: 'Because symbols represent immutable identifiers, Ruby interns them so that every occurrence of ":status" points to the exact same Symbol instance in memory.',
        bn: 'সিম্বলগুলো অপরিবর্তনীয় হওয়ায় Ruby তাদের ইন্টার্ন করে রাখে, ফলে তাদের মেমোরি রেফারেন্স এক থাকে।'
      }
    },
    {
      id: 'frozen-string-literal-mutation-error-ex2',
      kind: 'mcq',
      topic: 'frozen-string-literal-frozen-error',
      question: {
        en: 'What occurs if code attempts to execute "str << \' world\'" when "str = \'hello\'" was declared in a file containing "# frozen_string_literal: true"?',
        bn: '"# frozen_string_literal: true" যুক্ত ফাইলে "str = \'hello\'" ঘোষণা করার পর যদি "str << \' world\'" চালানো হয় তবে কী ঘটবে?'
      },
      options: [
        {
          en: 'A "FrozenError: can\'t modify frozen String" exception is raised at runtime because string literals are immutable',
          bn: 'রানটাইমে একটি "FrozenError: can\'t modify frozen String" এক্সেপশন ঘটবে কারণ স্ট্রিং লিটারেলটি ফ্রোজেন বা অপরিবর্তনীয়'
        },
        {
          en: 'The string is successfully mutated without any warning',
          bn: 'কোনো ওয়ার্নিং ছাড়াই স্ট্রিংটি সফলভাবে পরিবর্তিত হবে'
        },
        {
          en: 'The file is permanently deleted from the hard drive',
          bn: 'ফাইলটি হার্ডড্রাইভ থেকে চিরতরে মুছে যাবে'
        },
        {
          en: 'FrozenError was deprecated in Ruby 2.5',
          bn: 'Ruby ২.৫ সংস্করণে FrozenError বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Frozen strings disallow in-place mutation and throw FrozenError.',
        bn: 'ফ্রোজেন স্ট্রিং পরিবর্তন করা যায় না, পরিবর্তন করতে গেলে FrozenError ঘটে।'
      },
      explanation: {
        en: 'Under "# frozen_string_literal: true", all string literals are frozen upon creation. Attempting to mutate them in-place with "<<" raises FrozenError.',
        bn: 'এই ম্যাজিক কমেন্ট থাকলে স্ট্রিং পরিবর্তন করা নিষিদ্ধ হয় এবং অনাকাঙ্ক্ষিত পরিবর্তন আটকে দেয়।'
      }
    },
    {
      id: 'squiggly-heredoc-syntax-ex3',
      kind: 'mcq',
      topic: 'ruby-squiggly-heredoc-indentation-stripping',
      question: {
        en: 'What architectural benefit does the squiggly heredoc syntax ("<<~SQL ... SQL") provide compared to the traditional heredoc ("<<SQL")?',
        bn: 'সাধারণ হেয়ারডকের ("<<SQL") তুলনায় স্কুইগলি হেয়ারডক সিনট্যাক্স ("<<~SQL ... SQL") কোন কাঠামোগত সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'It automatically strips the common leading whitespace indentation from every line, keeping source code neatly indented without corrupting the output string',
          bn: 'এটি প্রতিটি লাইনের শুরুর সাধারণ ফাঁকা জায়গা বা ইনডেন্টেশন স্বয়ংক্রিয়ভাবে ছেঁটে ফেলে, ফলে মূল কোডের ইনডেন্টেশন অক্ষুণ্ণ থাকে'
        },
        {
          en: 'It translates the SQL query directly into C source code',
          bn: 'এটি SQL কুয়েরিকে সরাসরি C সোর্স কোডে রূপান্তর করে'
        },
        {
          en: 'It encrypts the text with a SHA-256 hash',
          bn: 'এটি টেক্সটটিকে SHA-256 হ্যাশ দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'Squiggly heredocs were removed in Ruby 3.0',
          bn: 'Ruby ৩.০ সংস্করণে স্কুইগলি হেয়ারডক বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: '<<~ strips common leading indentation from multi-line text.',
        bn: 'মেথডের ভেতরে বড় টেক্সট লিখলেও কোডের সুন্দর মার্জিন বজায় রাখার সেরা উপায়।'
      },
      explanation: {
        en: 'Traditional heredocs force text against the leftmost margin. The squiggly heredoc ("<<~") lets developers indent multi-line strings naturally with surrounding code while stripping leading spaces.',
        bn: 'এর মাধ্যমে কোডের সৌন্দর্য নষ্ট না করে পরিচ্ছন্নভাবে বড় টেক্সট বা কুয়েরি লেখা যায়।'
      }
    },
    {
      id: 'utf8-length-vs-bytesize-ex4',
      kind: 'mcq',
      topic: 'ruby-utf8-length-vs-bytesize-unicode',
      question: {
        en: 'When inspecting the string "str = \'🚀\'" (rocket emoji) in Ruby, why does "str.length" return 1 while "str.bytesize" returns 4?',
        bn: 'Ruby-তে "str = \'🚀\'" (রকেট ইমোজি) স্ট্রিংটির ক্ষেত্রে কেন "str.length" ১ রিটার্ন করে কিন্তু "str.bytesize" ৪ রিটার্ন করে?'
      },
      options: [
        {
          en: '"length" counts the single human-visible Unicode grapheme character, while "bytesize" counts the 4 physical bytes allocated in UTF-8 memory encoding',
          bn: '"length" দৃশ্যমান ১ টি ইউনিকোড অক্ষরের সংখ্যা হিসাব করে; আর "bytesize" UTF-8 মেমোরিতে বরাদ্দকৃত প্রকৃত ৪ টি বাইট গণনা করে'
        },
        {
          en: 'bytesize is a legacy bug in the Ruby runtime',
          bn: 'bytesize হলো Ruby রানটাইমের একটি পুরনো বাগ'
        },
        {
          en: 'The rocket emoji consumes 100 megabytes of RAM',
          bn: 'রকেট ইমোজি ১০০ মেগাবাইট র্যাম খরচ করে'
        },
        {
          en: 'length and bytesize always return identical values in Ruby 3',
          bn: 'Ruby ৩-এ length এবং bytesize সর্বদা একই মান রিটার্ন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'UTF-8 is a variable-length encoding: emojis require 4 physical bytes per character.',
        bn: 'ইউনিকোডে বিশেষ অক্ষরের জন্য একাধিক বাইটের প্রয়োজন হয়।'
      },
      explanation: {
        en: 'Ruby is encoding-aware. For UTF-8 multi-byte characters like emojis or non-Latin scripts, "length" gives the logical character count while "bytesize" reflects actual binary storage.',
        bn: 'Ruby অক্ষরের যুক্তিযুক্ত সংখ্যা এবং মেমরির প্রকৃত আকার সঠিকভাবে আলাদা করতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-strings-and-the-symbol',
    title: {
      en: 'Ruby Strings & Symbols Quiz',
      bn: 'Ruby স্ট্রিং এবং সিম্বল কুইজ'
    },
    questions: [
      {
        id: 'quiz-hash-with-indifferent-access',
        kind: 'mcq',
        topic: 'active-support-hash-with-indifferent-access',
        question: {
          en: 'Why did Ruby on Rails introduce "ActiveSupport::HashWithIndifferentAccess" (like "params[:user_id]" and "params[\'user_id\']")?',
          bn: 'Ruby on Rails কেন "ActiveSupport::HashWithIndifferentAccess" চালু করেছিল (যেমন "params[:user_id]" এবং "params[\'user_id\']")?'
        },
        options: [
          {
            en: 'Standard Ruby hashes treat ":user" and "\'user\'" as completely distinct keys; indifferent access normalizes them so developers can fetch values using either a String or a Symbol seamlessly',
            bn: 'সাধারণ Ruby হ্যাশ ":user" এবং "\'user\'"-কে দুটি সম্পূর্ণ ভিন্ন কি হিসেবে বিবেচনা করে; ইনডিফারেন্ট অ্যাক্সেস তাদের সমন্বয় করে স্ট্রিং বা সিম্বল যেকোনোটি দিয়ে ডেটা পড়তে দেয়'
          },
          {
            en: 'To make hash operations run on GPU hardware',
            bn: 'হ্যাশ অপারেশনগুলো যেন GPU হার্ডওয়্যারে চলে সেজন্য'
          },
          {
            en: 'To prevent users from submitting passwords via web forms',
            bn: 'ব্যবহারকারী যেন ওয়েব ফর্মে পাসওয়ার্ড জমা দিতে না পারে সেজন্য'
          },
          {
            en: 'Indifferent access was removed in Rails 7',
            bn: 'Rails ৭ সংস্করণে ইনডিফারেন্ট অ্যাক্সেস বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Standard hashes differentiate between String and Symbol keys.',
          bn: 'বাইরে থেকে স্ট্রিং কি আসলেও কোডে যেন নিরাপদে সিম্বল দিয়ে অ্যাক্সেস করা যায়।'
        },
        explanation: {
          en: 'Because HTTP parameters arrive as strings while Ruby code prefers symbols, HashWithIndifferentAccess converts all lookups to strings internally, preventing subtle key lookup bugs.',
          bn: 'ফলে ওয়েব রিকোয়েস্টের ডেটা নিয়ে কাজ করার সময় কি-টাইপ অমিলজনিত বাগ তৈরি হয় না।'
        }
      },
      {
        id: 'quiz-string-interpolation-to-s-coercion',
        kind: 'mcq',
        topic: 'string-interpolation-automatic-to-s',
        question: {
          en: 'What protocol does double-quoted string interpolation ("#{value}") invoke under the hood on whatever expression is enclosed in braces?',
          bn: 'ডাবল কোটেশনের ভেতরে স্ট্রিং ইন্টারপোলেশন ("#{value}") বন্ধনীর ভেতর থাকা যেকোনো মানের ওপর গোপনে কোন মেথডটি কল করে?'
        },
        options: [
          {
            en: 'It calls "to_s" on the evaluated object to coerce it into a valid string representation',
            bn: 'এটি মূল অবজেক্টটিকে স্ট্রিংয়ে রূপান্তর করতে তার ওপর "to_s" মেথডটি কল করে'
          },
          {
            en: 'It calls "to_binary" to write the value to a network socket',
            bn: 'এটি মানটিকে নেটওয়ার্ক সকেটে লিখতে "to_binary" কল করে'
          },
          {
            en: 'It crashes with a TypeError if the value is not already a String',
            bn: 'মানটি আগে থেকেই String না থাকলে এটি TypeError দিয়ে ক্র্যাশ করে'
          },
          {
            en: 'String interpolation only works with numbers in Ruby',
            bn: 'Ruby-তে স্ট্রিং ইন্টারপোলেশন কেবল সংখ্যার সাথেই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'String interpolation calls to_s on the enclosed expression.',
          bn: 'যেকোনো অবজেক্টকে টেক্সটে রূপান্তর করার সবচেয়ে সার্বজনীন মেথড।'
        },
        explanation: {
          en: 'Unlike string concatenation ("text" + value) which raises a TypeError if value is not a String, interpolation ("#{value}") safely calls ".to_s" on any object.',
          bn: 'প্লাস (+) দিয়ে জোড়া লাগালে এরর হলেও ইন্টারপোলেশন নীরবে to_s কল করে নিরাপদ রূপান্তর নিশ্চিত করে।'
        }
      },
      {
        id: 'quiz-symbol-gc-ruby-2-2-evolution',
        kind: 'mcq',
        topic: 'symbol-gc-mortal-symbols-memory-leak-fix',
        question: {
          en: 'What critical security problem did the introduction of Symbol Garbage Collection in Ruby 2.2 solve for internet applications?',
          bn: 'Ruby ২.২ সংস্করণে সিম্বল গার্বেজ কালেকশন যুক্ত হওয়ার ফলে ইন্টারনেট অ্যাপ্লিকেশনের কোন মারাত্মক নিরাপত্তা সমস্যার সমাধান হয়েছিল?'
        },
        options: [
          {
            en: 'It allowed dynamically created symbols from external JSON or HTTP query params to be collected by the GC, preventing Denial-of-Service attacks from exhausting server memory',
            bn: 'এটি বাইরের JSON বা HTTP প্যারামিটার থেকে তৈরি হওয়া ডাইনামিক সিম্বলগুলোকে গার্বেজ কালেক্ট করার সুযোগ দেয়, যা সার্ভারের মেমোরি শেষ করে ডিনায়াল-অফ-সার্ভিস আক্রমণ প্রতিহত করে'
          },
          {
            en: 'It stopped hackers from downloading source code via FTP',
            bn: 'এটি হ্যাকারদের FTP-র মাধ্যমে সোর্স কোড ডাউনলোড করা বন্ধ করে'
          },
          {
            en: 'It prevented users from typing lowercase letters in passwords',
            bn: 'এটি ব্যবহারকারীকে পাসওয়ার্ডে ছোট হাতের অক্ষর লিখতে বাধা দেয়'
          },
          {
            en: 'Symbol GC was deprecated in Ruby 3.0',
            bn: 'Ruby ৩.০ সংস্করণে সিম্বল গার্বেজ কালেকশন বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Symbol GC prevents memory exhaustion from untrusted dynamic symbols.',
          bn: 'অপ্রয়োজনীয় সিম্বল মেমোরি থেকে মুছে ফেলে সার্ভার ক্র্যাশ হওয়া থেকে রক্ষা করে।'
        },
        explanation: {
          en: 'Prior to Ruby 2.2, symbols were permanent. Malicious actors could send millions of unique JSON keys to cause Out-of-Memory crashes. Modern Ruby collects unused mortal symbols safely.',
          bn: 'এর ফলে ডাইনামিক সিম্বল ব্যবহারের কারণে সার্ভার মেমোরি লিক হওয়ার ভয় দূর হয়।'
        }
      },
      {
        id: 'quiz-percent-string-literals-q-notation',
        kind: 'mcq',
        topic: 'ruby-percent-notation-string-literals',
        question: {
          en: 'What is the utility of Ruby\'s "%q[...]" and "%Q[...]" percent string literals?',
          bn: 'Ruby-র "%q[...]" এবং "%Q[...]" পারসেন্ট স্ট্রিং লিটারেলের ব্যবহারিক সুবিধা কী?'
        },
        options: [
          {
            en: 'They allow authoring strings containing both single and double quotation marks without ugly escaping slashes; %q behaves like single quotes and %Q allows interpolation like double quotes',
            bn: 'এগুলো ব্যাকস্ল্যাশ দিয়ে এস্কেপ না করেই একক ও ডাবল উভয় কোটেশনযুক্ত স্ট্রিং লিখতে সাহায্য করে; যেখানে %q সিঙ্গেল কোটের মতো কাজ করে এবং %Q ইন্টারপোলেশন সমর্থন করে'
          },
          {
            en: 'They calculate the percentage of disk space used by the application',
            bn: 'অ্যাপ্লিকেশনটি ডিস্কের কত শতাংশ মেমোরি ব্যবহার করছে তা হিসাব করে'
          },
          {
            en: 'They convert plain text into binary QR codes',
            bn: 'তারা সাধারণ টেক্সটকে বাইনারি কিউআর কোডে রূপান্তর করে'
          },
          {
            en: 'Percent notation was removed in Ruby 2.7',
            bn: 'Ruby ২.৭ সংস্করণে পারসেন্ট নোটেশন বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: '%q and %Q eliminate the need to escape quotes inside strings.',
          bn: 'কোটেশনের ভেতরে কোটেশন থাকলে ব্যাকস্ল্যাশের ঝামেলা এড়ানোর চমৎকার নোটেশন।'
        },
        explanation: {
          en: 'Percent notation allows picking arbitrary delimiters (e.g. %q(It\'s "fine")), avoiding escaping when handling HTML snippets or shell commands.',
          bn: 'এইচটিএমএল বা জটিল টেক্সট লেখার সময় এটি কোডকে পরিষ্কার ও সহজে পাঠযোগ্য রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'arrays-and-the-hash',
    title: {
      en: 'Arrays, Hashes, Destructuring & Pattern Matching',
      bn: 'অ্যারে, হ্যাশ, ডিস্ট্রাকচারিং এবং প্যাটার্ন ম্যাচিং'
    }
  }
};
