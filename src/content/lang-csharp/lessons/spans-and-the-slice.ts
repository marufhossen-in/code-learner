import type { Lesson } from '../../../lib/types';

export const SpansAndTheSliceLesson: Lesson = {
  slug: 'spans-and-the-slice',
  tech: 'lang-csharp',
  title: {
    en: 'Span<T>, Memory<T> & Zero-Allocation Slicing',
    bn: 'Span<T>, Memory<T> এবং শূন্য-অ্যালোকেশন স্লাইসিং'
  },
  summary: {
    en: 'Master high-performance low-level memory mechanics in modern C#. Contrast heap arrays with Span<T> and ReadOnlySpan<T>, slice contiguous memory without allocations, allocate temporary buffers with stackalloc, understand ref struct constraints, and bridge async code using Memory<T> and ReadOnlyMemory<T>.',
    bn: 'আধুনিক C#-এ লো-লেভেল হাই-পারফরম্যান্স মেমোরি মেকানিজম আয়ত্ত করুন। হিপ অ্যারের সাথে Span<T> ও ReadOnlySpan<T>-এর তুলনা, মেমোরি খরচ ছাড়া স্লাইসিং, stackalloc দিয়ে স্ট্যাক বাফার, ref struct এর সীমাবদ্ধতা এবং Memory<T> দিয়ে অ্যাসিঙ্ক কোড পরিচালনা।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'spans-and-zero-allocation-slicing-heading',
      text: {
        en: 'The Span<T> Revolution and Zero-Allocation Slicing',
        bn: 'Span<T> বিপ্লব এবং শূন্য-অ্যালোকেশনের মেমোরি স্লাইসিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In high-throughput services, slicing data using substring or array segment methods causes severe memory churn. Every substring call allocates a brand new object on the managed heap. Modern C# (the managed systems programming language) solves this performance bottleneck with "Span<T>" and "ReadOnlySpan<T>". A span provides a type-safe window over an arbitrary contiguous region of memory—whether located on the managed heap, unmanaged native memory, or stack-allocated buffers. Internally, a Span occupies just 16 bytes on 64-bit systems: a managed pointer and a length. Slicing a span merely adjusts these two fields in O(1) time without allocating any new heap objects.',
        bn: 'উচ্চগতির সার্ভিসে সাবস্ট্রিং বা অ্যারে ভাগ করার পুরনো পদ্ধতিতে ভয়াবহ মেমোরি অপচয় ঘটে। প্রতিটি সাবস্ট্রিং কলে হিপ মেমোরিতে একটি নতুন অবজেক্ট তৈরি হয়। আধুনিক C# (ম্যানেজড সিস্টেম প্রোগ্রামিং ভাষা) "Span<T>" এবং "ReadOnlySpan<T>" এর মাধ্যমে এই পারফরম্যান্স সমস্যার যুগান্তকারী সমাধান দিয়েছে। একটি স্প্যান মেমোরির যেকোনো অবিচ্ছিন্ন অংশের ওপর একটি টাইপ-নিরাপদ ভিউ বা উইন্ডো তৈরি করে—তা হিপ মেমোরিতে থাকুক, নেটিভ মেমোরিতে থাকুক বা স্ট্যাক বাফারে থাকুক। অভ্যন্তরীণভাবে ৬৪-বিট সিস্টেমে একটি স্প্যান কেবল ১৬ বাইট জায়গা নেয়: একটি রেফারেন্স পয়েন্টার এবং একটি দৈর্ঘ্য। একটি স্প্যান স্লাইস করলে কোনো হিপ মেমোরি খরচ না করে O(1) সময়ে কেবল এই ২ টি ফিল্ডের মান সমন্বয় করে নেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The Span<T> contiguous memory model: A 16-byte ref struct providing zero-copy slicing over managed heap arrays or stackalloc buffers.',
        bn: 'চিত্র ১: Span<T> মেমোরি মডেল: একটি ১৬-বাইটের ref struct যা কোনো মেমোরি কপি ছাড়াই হিপ বা স্ট্যাক মেমোরির ওপর স্লাইসিং সুবিধা দেয়।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SPAN&lt;T&gt; ZERO-ALLOCATION CONTIGUOUS MEMORY ARCHITECTURE</text>

  <!-- Step 1: Managed Array Buffer -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Source Array</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">byte[] buffer = ...;</text>
    <text x="15" y="85" fill="#38bdf8" font-size="8" font-family="monospace">Length: 1000 items</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Managed Heap Block</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Backing Storage</text>
  </g>

  <!-- Step 2: Full Span View -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Span&lt;T&gt; View</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">Span&lt;byte&gt; s = buffer;</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">ref = &amp;buffer[0], len = 1000</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">16-Byte Ref Struct</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Stack Only Lifetime</text>
  </g>

  <!-- Step 3: Zero-Alloc Slice -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Sliced Window</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">s.Slice(200, 300);</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">ref = &amp;buffer[200], len = 300</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Zero Heap Allocs</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Sub-Microsecond O(1)</text>
  </g>

  <!-- Step 4: Memory<T> Async -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Memory&lt;T&gt;</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">Memory&lt;byte&gt;</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Heap Compatible</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Pass Across Await</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Async Pipelines</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'ref-struct-constraints-and-memory-heading',
      text: {
        en: 'Ref Struct Constraints and Memory<T> for Asynchronous Workloads',
        bn: 'Ref Struct এর সীমাবদ্ধতা এবং অ্যাসিঙ্ক কাজের জন্য Memory<T>'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To guarantee absolute safety, the C# compiler enforces strict rules on Span<T> because it is declared as a "ref struct". A ref struct can only ever exist on the execution stack. It can never be boxed to System.Object, cannot be stored as a field inside regular heap classes, and cannot be captured across asynchronous "await" boundaries. To bring the benefits of slicing to asynchronous pipelines and long-lived classes, .NET introduces "Memory<T>" and "ReadOnlyMemory<T>". Unlike Span, Memory<T> is a standard struct that can reside on the managed heap. When code is ready to process its bytes synchronously, calling ".Span" extracts a temporary stack-based Span view.',
        bn: 'নিখুঁত মেমোরি নিরাপত্তা বজায় রাখতে C# কম্পাইলার Span<T>-এর ওপর কঠোর নিয়ম জারি করে, কারণ এটি একটি "ref struct"। একটি ref struct কেবলমাত্র স্ট্যাক মেমোরিতেই অবস্থান করতে পারে। একে কখনোই অবজেক্টে বক্সিং করা যায় না, সাধারণ হিপ ক্লাসের ভেতর ফিল্ড হিসেবে রাখা যায় না এবং অ্যাসিঙ্ক্রোনাস "await" এর সীমানা পার করা যায় না। অ্যাসিঙ্ক মেথড এবং দীর্ঘস্থায়ী ক্লাসে মেমোরি স্লাইসিংয়ের সুবিধা পেতে .NET "Memory<T>" এবং "ReadOnlyMemory<T>" প্রদান করেছে। স্প্যানের বিপরীতে Memory<T> একটি সাধারণ স্ট্রাক্ট যা হিপ মেমোরিতে থাকতে পারে। পরবর্তীতে যখন কোড সিঙ্ক্রোনাসভাবে প্রসেস করার জন্য প্রস্তুত হয়, তখন ".Span" মেথড কল করে একটি অস্থায়ী স্ট্যাক-ভিত্তিক স্প্যান ভিউ বের করে কাজ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of C# Span contiguous memory window and zero-allocation slice pointer adjustments.',
        bn: 'C# Span মেমোরি উইন্ডো এবং শূন্য-অ্যালোকেশনের স্লাইস পয়েন্টার পরিবর্তনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of C# Span<T> Zero-Allocation Slicing

export class SpanSimulator {
  constructor(
    private backingBuffer: Uint8Array,
    private offset: number,
    private length: number
  ) {}

  // Simulating span.Slice(start, length) in O(1) time
  public slice(start: number, length: number): SpanSimulator {
    if (start + length > this.length) {
      throw new Error('IndexOutOfRangeException: Slice extends beyond span boundary.');
    }
    // Adjusts reference pointer offset and length without allocating a new buffer
    return new SpanSimulator(this.backingBuffer, this.offset + start, length);
  }

  public getLength(): number {
    return this.length;
  }

  public getOffset(): number {
    return this.offset;
  }

  public readFirstByte(): number {
    return this.backingBuffer[this.offset];
  }
}

// Execution demonstration
// Step 1: Create 1000-byte backing memory buffer
const rawBuffer = new Uint8Array(1000);
rawBuffer[200] = 42; // Set test byte at index 200

// Step 2: Wrap with initial Span (offset: 0, length: 1000)
const fullSpan = new SpanSimulator(rawBuffer, 0, 1000);
console.log('Original Span Length:', fullSpan.getLength()); // 1000

// Step 3: Slice window at offset 200 with length 300 (zero-copy)
const subSpan = fullSpan.slice(200, 300);
console.log('Sliced Span Length:', subSpan.getLength()); // 300
console.log('Sliced Span Memory Offset:', subSpan.getOffset()); // 200
console.log('First Byte of Sliced Span:', subSpan.readFirstByte()); // 42 (matches index 200)`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Span<T>',
          def: {
            en: 'Ref struct representing a contiguous region of arbitrary memory, supporting zero-allocation slicing.',
            bn: 'Ref struct যা মেমোরির যেকোনো অংশের ওপর শূন্য-অ্যালোকেশনে স্লাইস করার সুযোগ দেয়।'
          }
        },
        {
          term: 'ref struct',
          def: {
            en: 'C# structure constraint guaranteeing instances only ever live on the execution stack, never on the heap.',
            bn: 'C# স্ট্রাক্ট নিয়ম যা অবজেক্টকে কেবলমাত্র স্ট্যাক মেমোরিতে সীমাবদ্ধ রাখে এবং হিপে যাওয়া বন্ধ করে।'
          }
        },
        {
          term: 'stackalloc',
          def: {
            en: 'C# keyword allocating a contiguous memory block directly on the execution stack frame instead of the heap.',
            bn: 'কিওয়ার্ড যা হিপ মেমোরির বদলে সরাসরি মেথডের স্ট্যাক ফ্রেমে মেমোরি বরাদ্দ করে।'
          }
        },
        {
          term: 'Memory<T>',
          def: {
            en: 'Heap-compatible struct representing contiguous memory, safe for storage in class fields and async methods.',
            bn: 'হিপ-বান্ধব স্ট্রাক্ট যা ক্লাসের ফিল্ডে রাখা যায় এবং অ্যাসিঙ্ক মেথডের ভেতর ব্যবহার করা যায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'span-memory-allocation-benefit-ex1',
      kind: 'mcq',
      topic: 'span-zero-heap-allocation-slicing',
      question: {
        en: 'What fundamental memory advantage does "span.Slice(10, 20)" provide over "str.Substring(10, 20)" in C#?',
        bn: 'C#-এ "str.Substring(10, 20)" এর তুলনায় "span.Slice(10, 20)" কোন মৌলিক মেমোরি সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'It executes in O(1) time and allocates ZERO heap memory by merely updating a pointer and length, whereas Substring allocates a brand new string object on the managed heap',
          bn: 'এটি কোনো হিপ মেমোরি খরচ না করে O(1) সময়ে কেবল পয়েন্টার ও দৈর্ঘ্য সমন্বয় করে, যেখানে Substring হিপ মেমোরিতে একটি নতুন স্ট্রিং অবজেক্ট তৈরি করে'
        },
        {
          en: 'It encrypts the text using an SHA-256 algorithm',
          bn: 'এটি টেক্সটটিকে SHA-256 অ্যালগরিদম দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'Span.Slice reboots the local operating system',
          bn: 'Span.Slice লোকাল অপারেটিং সিস্টেম রিবুট করে'
        },
        {
          en: 'There is zero difference between Span.Slice and Substring',
          bn: 'Span.Slice এবং Substring এর মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Span slicing adjusts a pointer with zero heap allocations.',
        bn: 'স্প্যান স্লাইসিং মেমোরিতে নতুন কোনো অবজেক্ট তৈরি না করে সরাসরি পুরনো ডেটা নির্দেশ করে।'
      },
      explanation: {
        en: 'Substring creates a new string on the heap and copies the characters. Span slicing merely creates a new 16-byte view over the existing memory buffer.',
        bn: 'ফলে হাজার হাজার টেক্সট পার্সিংয়ের সময় গার্বেজ কালেকশনের ওপর কোনো চাপ পড়ে না।'
      }
    },
    {
      id: 'ref-struct-async-await-restriction-ex2',
      kind: 'mcq',
      topic: 'ref-struct-cannot-cross-await-boundary',
      question: {
        en: 'Why does the C# compiler forbid declaring or using a "Span<T>" across an "await" statement in an async method?',
        bn: 'C# কম্পাইলার কেন কোনো অ্যাসিঙ্ক মেথডে "await" স্টেটমেন্টের সীমানা পার করে "Span<T>" ব্যবহার করতে দেয় না?'
      },
      options: [
        {
          en: 'Span is a ref struct that can only live on the stack; async methods generate heap state machines across awaits, which would cause dangling pointers to unwound stack memory',
          bn: 'Span হলো একটি ref struct যা কেবল স্ট্যাকে থাকতে পারে; অ্যাসিঙ্ক মেথড await-এর সময় হিপ স্টেট-মেশিন তৈরি করে, যার ফলে স্ট্যাকের মেমোরি বিনষ্ট হয়ে বিপজ্জনক পয়েন্টার তৈরি হতো'
        },
        {
          en: 'Because async methods can only accept integer parameters',
          bn: 'কারণ অ্যাসিঙ্ক মেথড কেবল পূর্ণসংখ্যার প্যারামিটার গ্রহণ করে'
        },
        {
          en: 'Span requires an active Bluetooth connection to execute',
          bn: 'Span ব্যবহারের জন্য ব্লুটুথ সংযোগ আবশ্যক'
        },
        {
          en: 'The C# compiler allows Span across await since .NET 8',
          bn: '.NET ৮ থেকে C# কম্পাইলার await-এর মাঝে Span সমর্থন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'ref structs cannot be stored in heap state machines across await points. Use Memory<T> instead.',
        bn: 'ref struct হিপে যেতে পারে না; তাই অ্যাসিঙ্ক সীমানা পার করতে Memory<T> ব্যবহার করতে হয়।'
      },
      explanation: {
        en: 'Async methods hoist local variables into a heap-allocated state machine across awaits. Since ref structs cannot reside on the heap, the compiler forbids this safely.',
        bn: 'মেমোরি নিরাপত্তা নিশ্চিত করতেই কম্পাইলার কঠোরভাবে এই ধরনের কোড আটকে দেয়।'
      }
    },
    {
      id: 'stackalloc-keyword-memory-ex3',
      kind: 'mcq',
      topic: 'stackalloc-memory-stack-frame-allocation',
      question: {
        en: 'What is the primary operational advantage of writing "Span<byte> buffer = stackalloc byte[256];"?',
        bn: '"Span<byte> buffer = stackalloc byte[256];" লেখার প্রধান অপারেশনাল সুবিধা কী?'
      },
      options: [
        {
          en: 'The 256 bytes are allocated directly within the current method\'s execution stack frame; when the method returns, the memory is reclaimed instantly with zero garbage collection overhead',
          bn: '২৫৬ বাইট মেমোরি সরাসরি মেথডের স্ট্যাক ফ্রেমে বরাদ্দ হয়; মেথড শেষ হওয়ার সাথে সাথে কোনো গার্বেজ কালেকশন খরচ ছাড়াই মেমোরি তৎক্ষণাৎ মুক্ত হয়ে যায়'
        },
        {
          en: 'It downloads the bytes from a remote Microsoft server',
          bn: 'এটি মাইক্রোসফটের দূরবর্তী সার্ভার থেকে বাইট ডাউনলোড করে'
        },
        {
          en: 'It increases the physical RAM installed on the motherboard',
          bn: 'এটি মাদারবোর্ডে থাকা ফিজিক্যাল র্যামের আকার বাড়িয়ে দেয়'
        },
        {
          en: 'stackalloc is only allowed inside Windows device drivers',
          bn: 'stackalloc কেবল উইন্ডোজ ডিভাইস ড্রাইভারের ভেতর অনুমোদিত'
        }
      ],
      answer: 0,
      hint: {
        en: 'stackalloc allocates on the stack and is reclaimed when the stack frame pops.',
        bn: 'stackalloc স্ট্যাক মেমোরি ব্যবহার করায় মেথড শেষ হলেই সাথে সাথে মেমোরি পরিচ্ছন্ন হয়ে যায়।'
      },
      explanation: {
        en: 'stackalloc completely bypasses the managed garbage-collected heap for small, temporary buffers, eliminating GC pressure in high-throughput hot paths.',
        bn: 'ছোটখাটো বাফারের জন্য এটি হিপের চেয়ে হাজার গুণ দ্রুত কাজ করে।'
      }
    },
    {
      id: 'memory-vs-span-bridge-ex4',
      kind: 'mcq',
      topic: 'memory-span-bridge-synchronous-access',
      question: {
        en: 'How does code holding a "Memory<T>" instance obtain a "Span<T>" to perform high-speed synchronous slicing or operations?',
        bn: '"Memory<T>" অবজেক্ট থেকে উচ্চগতির সিঙ্ক্রোনাস স্লাইসিং চালানোর জন্য কীভাবে "Span<T>" বের করে নিতে হয়?'
      },
      options: [
        {
          en: 'By accessing the ".Span" property ("Span<T> span = memory.Span;"), creating an instantaneous stack-based view over the underlying memory buffer',
          bn: '".Span" প্রপার্টি কল করে ("Span<T> span = memory.Span;"), যা পেছনের বাফারের ওপর তাৎক্ষণিকভাবে একটি স্ট্যাক-ভিত্তিক স্প্যান ভিউ তৈরি করে'
        },
        {
          en: 'By rebooting the server machine',
          bn: 'সার্ভার মেশিন রিবুট করে'
        },
        {
          en: 'By serializing the Memory object into an XML document',
          bn: 'Memory অবজেক্টটিকে একটি এক্সএমএল ফাইলে রূপান্তর করে'
        },
        {
          en: 'Memory<T> cannot be converted into Span<T>',
          bn: 'Memory<T> কে কখনোই Span<T>-এ রূপান্তর করা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Use memory.Span to get a Span<T> from a Memory<T>.',
        bn: 'memory.Span কল করার মাধ্যমে সহজেই হিপ মেমোরিকে স্ট্যাক স্প্যানে রূপান্তর করা যায়।'
      },
      explanation: {
        en: 'Memory<T> acts as a heap-safe handle to memory. Accessing its .Span property produces a stack-bound Span<T> for high-performance localized manipulation.',
        bn: 'অ্যাসিঙ্ক কোডে ডেটা পাস করতে Memory<T> এবং সিঙ্ক্রোনাস প্রসেসিংয়ে Span<T> ব্যবহার করাই সেরা আর্কিটেকচার।'
      }
    }
  ],
  quiz: {
    id: 'quiz-spans-and-the-slice',
    title: {
      en: 'C# Span<T> & Memory Mechanics Quiz',
      bn: 'C# Span<T> এবং মেমোরি মেকানিজম কুইজ'
    },
    questions: [
      {
        id: 'quiz-simd-hardware-acceleration-spans',
        kind: 'mcq',
        topic: 'simd-vectorization-span-operations',
        question: {
          en: 'How do Span-based methods (such as "span.IndexOf" or "MemoryExtensions.SequenceEqual") achieve extreme speed in modern .NET?',
          bn: 'আধুনিক .NET-এ স্প্যান-ভিত্তিক মেথডগুলো (যেমন "span.IndexOf" বা "MemoryExtensions.SequenceEqual") কীভাবে অভাবনীয় গতি অর্জন করে?'
        },
        options: [
          {
            en: 'The runtime JIT compiler vectorizes span operations using hardware SIMD (Single Instruction, Multiple Data) CPU instructions (AVX-512, AVX2, ARM NEON) to process 32 or 64 bytes in parallel per CPU cycle',
            bn: 'রানটাইম জেআইটি কম্পাইলার হার্ডওয়্যার SIMD নির্দেশনার (AVX-512, AVX2, ARM NEON) মাধ্যমে স্প্যান অপারেশনগুলোকে ভেক্টরাইজ করে প্রতি সিপিইউ সাইকেলে ৩২ বা ৬৪ বাইট একসাথে সমান্তরালে প্রসেস করে'
          },
          {
            en: 'They run code exclusively inside the computer monitor firmware',
            bn: 'তারা কোড কেবল মনিটরের ফার্মওয়্যারে রান করে'
          },
          {
            en: 'They disable memory bounds checking entirely',
            bn: 'তারা মেমোরির বাউন্ড চেকিং পুরোপুরি বন্ধ করে দেয়'
          },
          {
            en: 'SIMD acceleration was removed in .NET 8',
            bn: '.NET ৮ সংস্করণে SIMD এক্সিলারেশন বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'JIT utilizes CPU SIMD vector registers to process chunks of memory simultaneously.',
          bn: 'প্রসেসরের আধুনিক ভেক্টর রেজিস্টার ব্যবহার করে একসাথে অনেকগুলো বাইট তুলনা করা হয়।'
        },
        explanation: {
          en: 'Span methods in System.Memory are heavily intrinsified. The JIT replaces loops with specialized vector instructions, executing up to 10x faster than traditional for-loops.',
          bn: 'কোনো হস্তচালিত লুপ না লিখে স্প্যান ব্যবহার করলে প্রসেসরের সম্পূর্ণ হার্ডওয়্যার গতি পাওয়া যায়।'
        }
      },
      {
        id: 'quiz-stackalloc-stack-overflow-guard',
        kind: 'mcq',
        topic: 'stackalloc-stack-overflow-threshold-safety',
        question: {
          en: 'What architectural safety precaution must developers observe when allocating memory with "stackalloc" in C#?',
          bn: 'C#-এ "stackalloc" দিয়ে মেমোরি বরাদ্দ করার সময় ডেভেলপারদের কোন স্থাপত্যিক নিরাপত্তা সতর্কতা অবশ্যই পালন করতে হয়?'
        },
        options: [
          {
            en: 'Never stackalloc arbitrarily large or user-controlled buffer sizes, because exceeding the thread\'s execution stack size (~1MB) causes an unrecoverable StackOverflowException that terminates the process',
            bn: 'কখনোই অতিরিক্ত বড় বা ব্যবহারকারীর নিয়ন্ত্রিত আকারের বাফার stackalloc করবেন না, কারণ থ্রেডের স্ট্যাক মেমোরি (~১MB) ছাড়িয়ে গেলে অপরিবর্তনীয় StackOverflowException ঘটে পুরো প্রসেস বন্ধ হয়ে যায়'
          },
          {
            en: 'Always stackalloc at least 500 megabytes',
            bn: 'সর্বদা অন্তত ৫০০ মেগাবাইট stackalloc করতে হবে'
          },
          {
            en: 'stackalloc only works on optical hard disks',
            bn: 'stackalloc কেবল অপটিক্যাল হার্ড ডিস্কে কাজ করে'
          },
          {
            en: 'StackOverflowException can be caught with a standard try/catch block',
            bn: 'StackOverflowException সাধারণ try/catch দিয়ে ধরা সম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Keep stackalloc small (e.g. <1024 bytes) to prevent StackOverflowExceptions.',
          bn: 'স্ট্যাকের আকার সীমিত হওয়ায় কেবল ছোট বাফারের জন্য stackalloc ব্যবহার নিরাপদ।'
        },
        explanation: {
          en: 'Stack memory is limited to 1MB per thread. Exceeding stack limits crashes the application immediately. If data exceeds a small threshold (e.g. 512 bytes), rent from ArrayPool<T>.Shared instead.',
          bn: 'বড় বাফারের জন্য ArrayPool ব্যবহার করে মেমোরি ভাড়া নেওয়াই নিরাপদ প্রকৌশল।'
        }
      },
      {
        id: 'quiz-arraypool-shared-rent-return',
        kind: 'mcq',
        topic: 'arraypool-shared-rent-return-pattern',
        question: {
          en: 'How does combining "ArrayPool<byte>.Shared.Rent(size)" with "Span<byte>" prevent heap allocation in high-throughput network parsers?',
          bn: 'উচ্চগতির নেটওয়ার্ক পার্সারে "ArrayPool<byte>.Shared.Rent(size)"-এর সাথে "Span<byte>" মেলানো কীভাবে হিপ অ্যালোকেশন রোধ করে?'
        },
        options: [
          {
            en: 'It borrows an existing array from a shared thread-safe memory pool, wraps the rented array with a Span sized to the exact required length, and returns the array to the pool in a "finally" block',
            bn: 'এটি শেয়ার্ড মেমোরি পুল থেকে পূর্ববর্তী একটি বিদ্যমান অ্যারে ধার নেয়, প্রয়োজনীয় মাপে স্প্যান দিয়ে মুড়িয়ে কাজ সারে এবং "finally" ব্লকে অ্যারেটি পুলে ফেরত পাঠিয়ে দেয়'
          },
          {
            en: 'It encrypts the network packets with an SSL key',
            bn: 'এটি এসএসএল কি দিয়ে নেটওয়ার্ক প্যাকেট এনক্রিপ্ট করে'
          },
          {
            en: 'It deletes the network socket connection',
            bn: 'এটি নেটওয়ার্ক সকেট সংযোগটি মুছে ফেলে'
          },
          {
            en: 'ArrayPool is only compatible with Windows 95',
            bn: 'ArrayPool কেবল উইন্ডোজ ৯৫-এর সাথে সামঞ্জস্যপূর্ণ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Rent borrows pooled memory; return it in a finally block to prevent leaks.',
          bn: 'মেমোরি পুলিং অবজেক্টের পুনর্ব্যবহার নিশ্চিত করে এবং মেমোরি খরচ শূন্যে নামিয়ে আনে।'
        },
        explanation: {
          en: 'ArrayPool avoids allocating new arrays for temporary buffers. Rented arrays are wrapped with Span for slicing and returned to the pool for reuse across requests.',
          bn: 'প্রতিটি এইচটিটিপি রিকোয়েস্টে নতুন মেমোরি না বানিয়ে রিসাইকেল করার এটিই সর্বোত্তম উপায়।'
        }
      },
      {
        id: 'quiz-readonlyspan-char-tryparse',
        kind: 'mcq',
        topic: 'readonlyspan-char-int-tryparse-zero-alloc',
        question: {
          en: 'Why is "int.TryParse(ReadOnlySpan<char>, out int result)" preferred over "int.TryParse(string, out int result)" when parsing substrings?',
          bn: 'সাবস্ট্রিং পার্স করার সময় "int.TryParse(string, out int result)" এর চেয়ে "int.TryParse(ReadOnlySpan<char>, out int result)" কেন বহুগুণ সুবিধাজনক?'
        },
        options: [
          {
            en: 'It can parse an integer directly from a sliced slice of an existing string or buffer without allocating an intermediate substring object on the managed heap',
            bn: 'এটি হিপ মেমোরিতে কোনো মধ্যবর্তী সাবস্ট্রিং অবজেক্ট তৈরি না করেই সরাসরি বিদ্যমান স্ট্রিং বা বাফারের স্লাইস থেকে পূর্ণসংখ্যা পার্স করে নিতে পারে'
          },
          {
            en: 'It multiplies the parsed number by 10 automatically',
            bn: 'এটি পার্স করা সংখ্যাকে নিজে থেকেই ১০ দিয়ে গুণ করে'
          },
          {
            en: 'It converts the number into a floating point decimal',
            bn: 'এটি সংখ্যাটিকে দশমিক সংখ্যায় রূপান্তর করে'
          },
          {
            en: 'The string overload of TryParse was removed in modern .NET',
            bn: 'আধুনিক .NET-এ TryParse-এর স্ট্রিং মেথড বাদ দেওয়া হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Span-based parsing operates directly on substrings without allocating strings.',
          bn: 'স্প্যান-ভিত্তিক পার্সিং কোনো অস্থায়ী স্ট্রিং তৈরি না করেই সরাসরি টেক্সট থেকে সংখ্যা বের করে।'
        },
      explanation: {
        en: 'Prior to Span, parsing an integer from "2026-09-30" required calling str.Substring(0, 4), allocating a string. With ReadOnlySpan<char>, int.TryParse parses in-place with zero allocations.',
        bn: 'স্প্যান আসার আগে "2026-09-30" থেকে সংখ্যা পেতে Substring(০, ৪) কল করে নতুন স্ট্রিং তৈরি করতে হতো। ReadOnlySpan<char> দিয়ে কোনো বাড়তি মেমোরি তৈরি না করেই সরাসরি সংখ্যা পার্স করা যায়।'
      }
      }
    ]
  },
  nextLesson: {
    slug: 'sourcegen-and-the-attribute',
    title: {
      en: 'Roslyn Source Generators & Attributes',
      bn: 'Roslyn সোর্স জেনারেটর এবং অ্যাট্রিবিউটস'
    }
  }
};
