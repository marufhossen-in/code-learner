import type { Lesson } from '../../../lib/types';

export const GenericsAndTheCollectionLesson: Lesson = {
  slug: 'generics-and-the-collection',
  tech: 'csharp',
  title: {
    en: 'Generics, Collections & Memory with Span<T>',
    bn: 'জেনেরিক্স, কালেকশন এবং Span<T> মেমোরি'
  },
  summary: {
    en: 'Master type-safe data structures and low-level memory performance in C#. Explore generic constraints, compare performance across List, Dictionary, and HashSet, and achieve zero-allocation slicing with Span and Memory.',
    bn: 'C#-এ টাইপ-নিরাপদ ডেটা স্ট্রাকচার এবং দ্রুতগতির মেমোরি পারফরম্যান্স আয়ত্ত করুন। জেনেরিক শর্তাবলী জানুন, List, Dictionary এবং HashSet এর কর্মক্ষমতা তুলনা করুন এবং Span ও Memory দিয়ে শূন্য-অ্যালোকেশনের মেমোরি স্লাইসিং অর্জন করুন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'generics-specialization-and-collections-heading',
      text: {
        en: 'Generic Type Specialization and High-Performance Collections',
        bn: 'জেনেরিক টাইপ স্পেশালাইজেশন এবং উচ্চ-পারফরম্যান্স কালেকশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In early versions of C#, data structures stored elements as untyped objects, requiring continuous boxing and casting. Generics introduced type parameterization without runtime performance penalties. Unlike languages that erase type parameters at compile time, the .NET (managed execution platform) runtime performs "reified generic specialization". When you declare List<int>, the runtime generates dedicated machine code specifically for 32-bit integers, storing values inline on the stack or contiguous array without boxing. Furthermore, developers constrain generic types using the "where" clause (such as where T : class, new(), or IComparable<T>) to enforce strict interface contracts.',
        bn: 'C#-এর শুরুর দিকের সংস্করণে কালেকশনে অবজেক্ট হিসেবে ডেটা রাখা হতো, যার ফলে বারবার বক্সিং ও টাইপ-কাস্টিংয়ের অপ্রয়োজনীয় খরচ হতো। জেনেরিক্স (Generics) কোনো পারফরম্যান্স ক্ষতি ছাড়াই টাইপ-প্যারামিটারাইজড কোড লেখার সুবিধা নিয়ে আসে। যে সমস্ত ভাষা কম্পাইলের সময় টাইপ মুছে ফেলে, .NET তেমন নয়; বরং এটি রানটাইমে "reified generic specialization" পরিচালনা করে। আপনি যখন List<int> ঘোষণা করেন, তখন রানটাইম ৩২-বিট পূর্ণসংখ্যার জন্য সরাসরি ডেডিকেটেড মেশিন কোড তৈরি করে, ফলে কোনো বক্সিং ছাড়াই ডেটা সরাসরি ইনলাইন সংরক্ষিত থাকে। তাছাড়া "where" ক্লজ (যেমন where T : class, new() বা IComparable<T>) ব্যবহার করে জেনেরিক টাইপের ওপর নির্ভরযোগ্য শর্তারোপ করা যায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural comparison: Native generic specialization, O(1) hash indexing, and heap substring allocation vs zero-allocation Span slicing.',
        bn: 'চিত্র ১: আর্কিটেকচারাল তুলনা: নেটিভ জেনেরিক স্পেশালাইজেশন, O(1) হ্যাশ ইনডেক্সিং এবং হিপ সাবস্ট্রিং বনাম শূন্য-অ্যালোকেশনের Span স্লাইসিং।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">C# GENERICS &amp; ZERO-ALLOCATION SPAN&lt;T&gt; MEMORY MODEL</text>

  <!-- Step 1: Reified Generics -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Reified Generics</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">List&lt;int&gt; in Memory</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">Zero Boxing Overhead</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Specialized Native JIT</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Type-Safe &amp; Blazing</text>
  </g>

  <!-- Step 2: Hash Collections -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Fast Collections</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">Dictionary&lt;K, V&gt;</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">O(1) Hash Bucket Lookup</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">HashSet&lt;T&gt; Deduping</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Constant Time Access</text>
  </g>

  <!-- Step 3: Substring Heap Waste -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Substring Waste</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">str.Substring(0, 5)</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Allocates NEW Heap Obj</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">GC Churn on Parsing</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Heavy Memory Pressure</text>
  </g>

  <!-- Step 4: Zero-Allocation Span -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Span&lt;T&gt; Slicing</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">span.Slice(0, 5)</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">0 Bytes Heap Used</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Pointer + Length Struct</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Zero-Copy Performance</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'span-and-memory-zero-allocation-heading',
      text: {
        en: 'Zero-Allocation Memory Slicing with Span<T> and Memory<T>',
        bn: 'Span<T> এবং Memory<T> দিয়ে শূন্য-অ্যালোকেশনের মেমোরি স্লাইসিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In high-throughput microservices, parsing HTTP headers, CSV lines, and JSON payloads using traditional methods like "string.Substring" or "string.Split" degrades performance. Every substring invocation allocates a brand new string on the managed heap, triggering garbage collection pauses. C# solved this through Span<T> and ReadOnlySpan<T>. A Span is a lightweight ref struct wrapping a managed pointer and a length over contiguous memory (whether on the stack, native heap, or managed array). Calling "span.Slice(0, 5)" allocates 0 bytes of heap memory, providing instant zero-copy access. For asynchronous methods where ref structs cannot cross await boundaries, C# provides Memory<T> and ReadOnlyMemory<T>.',
        bn: 'উচ্চগতির মাইক্রোসার্ভিসে এইচটিটিপি হেডার, সিএসভি বা জেসন পার্স করার সময় "string.Substring" বা "string.Split" ব্যবহার করলে পারফরম্যান্স মারাত্মকভাবে হ্রাস পায়। প্রতিটি সাবস্ট্রিং হিপ মেমোরিতে একটি নতুন স্ট্রিং অবজেক্ট তৈরি করে, যা গারবেজ কালেক্টরের ওপর অযথা চাপ ফেলে। C# এই সমস্যার সমাধান করেছে Span<T> এবং ReadOnlySpan<T> এর মাধ্যমে। Span হলো একটি হালকা ref struct যা যেকোনো মেমোরির (স্ট্যাক, নেটিভ বা ম্যানেজড অ্যারে) ওপর কেবল একটি মেমোরি পয়েন্টার ও দৈর্ঘ্য ধারণ করে। "span.Slice(0, 5)" কল করলে হিপ মেমোরিতে ০ বাইট খরচ হয় এবং কোনো কপি ছাড়াই তাৎক্ষণিক ডেটা পড়া যায়। অ্যাসিনক্রোনাস মেথডে await পার করার জন্য ref struct ব্যবহার করা যায় না; সেখানে C# এর পরিপূরক হিসেবে Memory<T> এবং ReadOnlyMemory<T> প্রদান করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of generic collection lookups, hash-based deduplication, and zero-allocation span memory slicing mechanics.',
        bn: 'জেনেরিক কালেকশন লুকআপ, হ্যাশ-ভিত্তিক ইউনিক ফিল্টারিং এবং শূন্য-অ্যালোকেশনের স্প্যান স্লাইসিংয়ের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of C# Generics, Hash Collections & Zero-Allocation Span<T>

export class FastDictionarySimulator<TKey, TValue> {
  private map: Map<TKey, TValue> = new Map();

  public set(key: TKey, value: TValue): void {
    this.map.set(key, value);
  }

  public get(key: TKey): TValue | undefined {
    return this.map.get(key);
  }

  public count(): number {
    return this.map.size;
  }
}

// Simulating C# ReadOnlySpan<char> memory view
export class ReadOnlySpanSimulator {
  constructor(private rawText: string, public readonly start: number, public readonly length: number) {}

  // Zero-copy slicing: creates a new lightweight view without allocating a string
  public slice(offset: number, count: number): ReadOnlySpanSimulator {
    return new ReadOnlySpanSimulator(this.rawText, this.start + offset, count);
  }

  // Materializing only when strictly necessary
  public toString(): string {
    return this.rawText.substring(this.start, this.start + this.length);
  }
}

// Execution demonstration
// 1. Generic Dictionary Demonstration
const cache = new FastDictionarySimulator<string, number>();
cache.set('Order_401', 1250);
cache.set('Order_402', 840);
console.log('Total Cached Entries:', cache.count()); // 2
console.log('Lookup Result for Order_401:', cache.get('Order_401')); // 1250

// 2. Zero-Allocation Span Slicing Simulation
const rawPayload = 'ORDER:99482:EUR:VALIDATED';
const rootSpan = new ReadOnlySpanSimulator(rawPayload, 0, rawPayload.length);

// Slicing "ORDER" (offset 0, length 5) - zero heap string allocation
const prefixSpan = rootSpan.slice(0, 5);
console.log('Span View Content:', prefixSpan.toString()); // "ORDER"
console.log('Span Length (Characters):', prefixSpan.length); // 5`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Generics',
          def: {
            en: 'Feature enabling classes, interfaces, and methods to be parameterized with specific types without boxing or casting.',
            bn: 'C#-এর বিশেষ সুবিধা যার মাধ্যমে কোনো টাইপ-কাস্টিং বা বক্সিং ছাড়াই নির্দিষ্ট টাইপ-সেফ কোড লেখা যায়।'
          }
        },
        {
          term: 'Dictionary<TKey, TValue>',
          def: {
            en: 'Hash-table collection mapping unique keys to values, providing fast O(1) average lookup, insertion, and removal.',
            bn: 'হ্যাশ-টেবিল ভিত্তিক কালেকশন যা কি (key) দিয়ে যেকোনো মানকে O(1) গড়ে তাৎক্ষণিকভাবে খুঁজে বের করতে পারে।'
          }
        },
        {
          term: 'Span<T>',
          def: {
            en: 'A stack-only ref struct representing a contiguous region of arbitrary memory, enabling zero-copy, zero-allocation slicing.',
            bn: 'স্ট্যাক-ভিত্তিক ref struct যা কোনো মেমোরি খরচ না করে সরাসরি মেমোরি ব্লক স্লাইসিংয়ের সুবিধা দেয়।'
          }
        },
        {
          term: 'Memory<T>',
          def: {
            en: 'A heap-safe contiguous memory representation that can be stored in classes and passed across async/await boundaries.',
            bn: 'হিপ-নিরাপদ মেমোরি রিপ্রেজেন্টেশন যা ক্লাসের ভেতরে সংরক্ষণ করা যায় এবং async মেথডে নিরাপদে ব্যবহার করা যায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'csharp-generics-reified-specialization-ex1',
      kind: 'mcq',
      topic: 'reified-generic-specialization-no-boxing',
      question: {
        en: 'How does the .NET Common Language Runtime handle a generic "List<int>" differently from older non-generic collections like "ArrayList"?',
        bn: '.NET Common Language Runtime কীভাবে একটি জেনেরিক "List<int>" কে পুরনো "ArrayList"-এর চেয়ে ভিন্নভাবে পরিচালনা করে?'
      },
      options: [
        {
          en: 'It generates dedicated specialized machine code for 32-bit integers, storing raw int values directly in a contiguous array with zero boxing overhead',
          bn: 'এটি ৩২-বিট পূর্ণসংখ্যার জন্য সরাসরি বিশেষায়িত মেশিন কোড তৈরি করে, ফলে কোনো বক্সিং ছাড়াই কাঁচা int মানগুলো মেমোরিতে সংরক্ষিত হয়'
        },
        {
          en: 'It converts every integer into a string on the managed heap',
          bn: 'এটি প্রতিটি পূর্ণসংখ্যাকে ম্যানেজড হিপে স্ট্রিংয়ে রূপান্তর করে'
        },
        {
          en: 'It automatically encrypts the integers using a secure password',
          bn: 'এটি পূর্ণসংখ্যাগুলোকে পাসওয়ার্ড দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'List<int> and ArrayList behave identically in .NET',
          bn: 'List<int> এবং ArrayList .NET-এ হুবহু একই আচরণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: '.NET generics preserve value types natively without boxing.',
        bn: '.NET জেনেরিক্স কোনো বক্সিং ছাড়াই সরাসরি স্ট্যাক মান হিসেবে পূর্ণসংখ্যা সংরক্ষণ করে।'
      },
      explanation: {
        en: '.NET reifies generics at runtime. Value type generic arguments create specialized native code that eliminates boxing and GC heap allocations.',
        bn: 'জেনেরিক স্পেশালাইজেশনের কারণে C#-এ মেমোরির সর্বোচ্চ সাশ্রয় হয় এবং গতি বজায় থাকে।'
      }
    },
    {
      id: 'span-zero-allocation-slicing-benefit-ex2',
      kind: 'mcq',
      topic: 'span-zero-allocation-memory-slicing',
      question: {
        en: 'What fundamental performance advantage does "ReadOnlySpan<char>" offer over "string.Substring" when parsing large text files or network streams?',
        bn: 'বিশাল টেক্সট ফাইল বা নেটওয়ার্ক স্ট্রিম পার্স করার সময় "string.Substring"-এর চেয়ে "ReadOnlySpan<char>" কোন মৌলিক সুবিধা দেয়?'
      },
      options: [
        {
          en: 'Span slicing creates a lightweight pointer-and-length view allocating 0 bytes of heap memory, whereas Substring allocates a brand new heap object every time',
          bn: 'স্প্যান স্লাইসিং কেবল পয়েন্টার ও দৈর্ঘ্যের একটি হালকা ভিউ তৈরি করে যা হিপে ০ বাইট মেমোরি খরচ করে, যেখানে Substring প্রতিবার নতুন হিপ অবজেক্ট বানায়'
        },
        {
          en: 'Span deletes the text file from the operating system',
          bn: 'স্প্যান অপারেটিং সিস্টেম থেকে ফাইলটি মুছে ফেলে'
        },
        {
          en: 'Span doubles the battery life of mobile laptops',
          bn: 'স্প্যান ল্যাপটপের ব্যাটারি লাইফ দ্বিগুণ করে দেয়'
        },
        {
          en: 'ReadOnlySpan cannot be used with English text',
          bn: 'ReadOnlySpan কখনোই ইংরেজি লেখার সাথে ব্যবহার করা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Span slicing provides zero-copy, zero-heap-allocation views of existing memory.',
        bn: 'স্প্যান কোনো নতুন হিপ অবজেক্ট না বানিয়ে বিদ্যমান মেমোরির সরাসরি ভিউ দেয়।'
      },
      explanation: {
        en: 'Substring allocates new heap strings repeatedly. Span slices existing memory without allocating, preventing Garbage Collector churn.',
        bn: 'বারবার নতুন অবজেক্ট না বানানোর কারণে স্প্যান ব্যবহারে গারবেজ কালেকশন সংক্রান্ত ল্যাগ পুরোপুরি দূর হয়।'
      }
    },
    {
      id: 'ref-struct-span-async-limitation-ex3',
      kind: 'mcq',
      topic: 'span-ref-struct-async-await-limitation',
      question: {
        en: 'Why does the C# compiler forbid declaring a "Span<T>" variable across an "await" statement in an asynchronous method?',
        bn: 'C# কম্পাইলার কেন একটি অ্যাসিনক্রোনাস মেথডে "await" স্টেটমেন্টের দুই পাশে "Span<T>" ভেরিয়েবল ব্যবহারের অনুমতি দেয় না?'
      },
      options: [
        {
          en: 'Span<T> is a "ref struct" restricted strictly to the execution stack; async methods generate heap-allocated state machines that cannot hold stack-only types across suspension points',
          bn: 'Span<T> হলো একটি "ref struct" যা কেবলমাত্র স্ট্যাক মেমোরির জন্য সীমাবদ্ধ; আর async মেথডগুলো হিপে স্টেট মেশিন তৈরি করে যা স্ট্যাক-অনলি টাইপ সংরক্ষণ করতে পারে না'
        },
        {
          en: 'Because async methods only support numbers and booleans',
          bn: 'কারণ async মেথড কেবল সংখ্যা এবং বুলিয়ান সমর্থন করে'
        },
        {
          en: 'Because Span<T> was deprecated in modern .NET versions',
          bn: 'কারণ আধুনিক .NET সংস্করণে Span<T> বাতিল করা হয়েছে'
        },
        {
          en: 'Span<T> requires an active internet connection to execute',
          bn: 'Span<T> চালানোর জন্য সক্রিয় ইন্টারনেট সংযোগ প্রয়োজন'
        }
      ],
      answer: 0,
      hint: {
        en: 'Stack-only ref structs cannot be stored in heap-allocated async state machines. Use Memory<T> instead.',
        bn: 'স্ট্যাক-অনলি টাইপ হিপের স্টেট মেশিনে থাকতে পারে না; এর বদলে Memory<T> ব্যবহার করতে হয়।'
      },
      explanation: {
        en: 'Async methods box their state onto the heap during suspension. Since ref structs cannot live on the heap, use Memory<T> for async boundaries.',
        bn: 'async মেথড কাজের মাঝে থ্রেড ছাড়ার সময় হিপে অবস্থা ধরে রাখে, তাই সেখানে স্ট্যাক-অনলি স্প্যানের বদলে Memory<T> দরকার।'
      }
    },
    {
      id: 'generic-type-constraints-syntax-ex4',
      kind: 'mcq',
      topic: 'generic-constraints-new-class-struct',
      question: {
        en: 'Which C# generic constraint guarantees that the generic type argument must have a public parameterless constructor?',
        bn: 'কোন C# জেনেরিক শর্তটি নিশ্চিত করে যে টাইপ আর্গুমেন্টটির অবশ্যই একটি পাবলিক প্যারামিটারহীন কনস্ট্রাক্টর থাকতে হবে?'
      },
      options: [
        { en: 'where T : new()', bn: 'where T : new() শর্ত' },
        { en: 'where T : class', bn: 'where T : class শর্ত' },
        { en: 'where T : struct', bn: 'where T : struct শর্ত' },
        { en: 'where T : notnull', bn: 'where T : notnull শর্ত' }
      ],
      answer: 0,
      hint: {
        en: 'The "new()" constraint allows calling "new T()".',
        bn: '"new()" শর্তের মাধ্যমে মেথডের ভেতর "new T()" দিয়ে নতুন অবজেক্ট তৈরি করা যায়।'
      },
      explanation: {
        en: 'The where T : new() constraint enforces that any type passed as T must provide a public parameterless constructor.',
        bn: 'where T : new() ঘোষণা করলে কোডের ভেতরে নির্দ্বিধায় সেই টাইপের নতুন ইনস্ট্যান্স তৈরি করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-generics-and-the-collection',
    title: {
      en: 'C# Generics, Collections & High-Performance Memory Quiz',
      bn: 'C# জেনেরিক্স, কালেকশন এবং হাই-পারফরম্যান্স মেমোরি কুইজ'
    },
    questions: [
      {
        id: 'quiz-arraypool-shared-renting',
        kind: 'mcq',
        topic: 'arraypool-shared-rent-return-pattern',
        question: {
          en: 'What architectural performance problem does "ArrayPool<T>.Shared" solve in high-throughput C# microservices?',
          bn: 'উচ্চগতির C# মাইক্রোসার্ভিসে "ArrayPool<T>.Shared" কোন পারফরম্যান্স সমস্যার সমাধান করে?'
        },
        options: [
          {
            en: 'It rents and returns pre-allocated reusable arrays, eliminating the constant allocation and Garbage Collection destruction of temporary arrays',
            bn: 'এটি মেমোরিতে তৈরি থাকা পুনঃব্যবহারযোগ্য অ্যারে সাময়িক ভাড়া ও ফেরত নেওয়ার ব্যবস্থা করে, ফলে বারবার নতুন অ্যারে তৈরি ও ধ্বংসের মেমোরি খরচ শূন্যে নেমে আসে'
          },
          {
            en: 'It encrypts array contents on the physical disk drive',
            bn: 'এটি ফিজিক্যাল ডিস্কে অ্যারের ডেটা এনক্রিপ্ট করে'
          },
          {
            en: 'ArrayPool converts arrays into JSON files automatically',
            bn: 'ArrayPool অ্যারেকে নিজে থেকেই জেসন ফাইলে রূপান্তর করে'
          },
          {
            en: 'ArrayPool increases the download speed of network routers',
            bn: 'ArrayPool নেটওয়ার্কের রাউটারের ডাউনলোডের গতি বাড়ায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'ArrayPool rents and returns buffers to cut garbage collection pauses.',
          bn: 'ArrayPool বাফার পুনঃব্যবহার করে গারবেজ কালেকশনের অপ্রয়োজনীয় চাপ রোধ করে।'
        },
        explanation: {
          en: 'Renting arrays from ArrayPool<T>.Shared avoids large memory allocations and GC sweeps, crucial for high-speed socket and serialization pipelines.',
          bn: 'ঘন ঘন মেমোরি তৈরি না করে বাফার পুলিং ব্যবহার করাই হাই-থ্রুপুট সিস্টেমের স্ট্যান্ডার্ড।'
        }
      },
      {
        id: 'quiz-dictionary-hash-collision-buckets',
        kind: 'mcq',
        topic: 'dictionary-hash-collision-chaining-buckets',
        question: {
          en: 'How does Dictionary<TKey, TValue> handle hash collisions when two distinct keys produce the same hash code?',
          bn: 'যখন দুটি ভিন্ন কি (key) এর হ্যাশ কোড একই হয়ে যায় (hash collision), তখন Dictionary<TKey, TValue> কীভাবে তা সামাল দেয়?'
        },
        options: [
          {
            en: 'It maintains an internal entry array chaining collided keys within the same bucket, verifying equality using the key type IEqualityComparer<TKey>',
            bn: 'এটি একই বাকেটের ভেতর হ্যাশ সংঘর্ষ হওয়া কি-গুলোকে একটি অভ্যন্তরীণ চেইনে সংরক্ষণ করে এবং IEqualityComparer দিয়ে সমতা যাচাই করে'
          },
          {
            en: 'It throws an OutOfMemoryException immediately',
            bn: 'এটি অবিলম্বে OutOfMemoryException ছুড়ে দেয়'
          },
          {
            en: 'It deletes both keys from the dictionary automatically',
            bn: 'এটি ডিকশনারি থেকে উভয় কি-কে নিজে থেকেই মুছে ফেলে'
          },
          {
            en: 'Hash collisions are mathematically impossible in .NET',
            bn: '.NET-এ হ্যাশ সংঘর্ষ গাণিতিকভাবে অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Dictionary uses internal bucket arrays and equality comparers to resolve collisions.',
          bn: 'ডিকশনারি বাকেট অ্যারে এবং সমতা তুলনাকারী দিয়ে সংঘর্ষ হওয়া কি-গুলোকে আলাদা করে।'
        },
        explanation: {
          en: 'The CLR Dictionary uses bucket arrays and entry linked-lists to resolve collisions, checking key equality with EqualityComparer<TKey>.Default.',
          bn: 'সংঘর্ষ হলেও সঠিক কি-টিকে খুঁজে পেতে এটি ইন্টারনাল লিঙ্কড-লিস্ট এবং সমতা যাচাইকারী ব্যবহার করে।'
        }
      },
      {
        id: 'quiz-stackalloc-performance-safety',
        kind: 'mcq',
        topic: 'stackalloc-span-zero-heap-allocation',
        question: {
          en: 'What occurs when using "Span<byte> buffer = stackalloc byte[128];" in modern C#?',
          bn: 'আধুনিক C#-এ "Span<byte> buffer = stackalloc byte[128];" ব্যবহার করলে কী ঘটে?'
        },
        options: [
          {
            en: 'It allocates 128 bytes directly on the current execution stack frame with zero heap allocation, automatically cleaning up when the method returns without GC interaction',
            bn: 'এটি ম্যানেজড হিপে কোনো মেমোরি খরচ না করে সরাসরি বর্তমান স্ট্যাক ফ্রেমে ১২৮ বাইট বরাদ্দ করে, যা মেথড শেষ হওয়ার সাথে সাথে কোনো গারবেজ কালেকশন ছাড়াই মুক্ত হয়ে যায়'
          },
          {
            en: 'It creates a 128-megabyte database table on the hard drive',
            bn: 'এটি হার্ড ডিস্কে একটি ১২৮ মেগাবাইটের ডেটাবেস টেবিল তৈরি করে'
          },
          {
            en: 'stackalloc requires an unsafe block in modern C#',
            bn: 'আধুনিক C#-এ stackalloc এর জন্য unsafe ব্লক বাধ্যতামূলক'
          },
          {
            en: 'It causes the operating system kernel to restart',
            bn: 'এটি অপারেটিং সিস্টেম কার্নেলকে রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'stackalloc with Span provides safe, zero-GC stack buffer allocation.',
          bn: 'Span-এর সাথে stackalloc নিরাপদ ও গারবেজ-কালেকশনবিহীন স্ট্যাক মেমোরি বরাদ্দ করে।'
        },
        explanation: {
          en: 'Since C# 7.2, assigning stackalloc to Span<T> is safe code, providing high-performance scratch buffers directly on the execution stack.',
          bn: 'স্বল্প সময়ের জন্য মেমোরি বাফার লাগলে স্ট্যাকের এই মেকানিজম হিপে কোনো আবর্জনা তৈরি করে না।'
        }
      },
      {
        id: 'quiz-immutable-collections-thread-safety',
        kind: 'mcq',
        topic: 'system-collections-immutable-thread-safety',
        question: {
          en: 'What architectural benefit do types in System.Collections.Immutable (e.g. ImmutableList<T>, ImmutableDictionary<TKey, TValue>) provide in multi-threaded systems?',
          bn: 'মাল্টি-থ্রেডেড সিস্টেমে System.Collections.Immutable (যেমন ImmutableList<T>) কোন আর্কিটেকচারাল সুবিধা নিশ্চিত করে?'
        },
        options: [
          {
            en: 'They are inherently thread-safe for reading across concurrent threads without locks, sharing underlying tree nodes efficiently when mutations create new instances',
            bn: 'এরা কোনো লকিং ছাড়াই একাধিক সমান্তরাল থ্রেডে পড়ার জন্য নিরাপদ থাকে, এবং পরিবর্তনের সময় পুরনো নোড শেয়ার করে দক্ষতার সাথে নতুন ইনস্ট্যান্স বানায়'
          },
          {
            en: 'Immutable collections take 0 bytes of RAM memory',
            bn: 'ইমিউটেবল কালেকশন র্যামে ০ বাইট মেমোরি খরচ করে'
          },
          {
            en: 'They only work on single-core 32-bit processors',
            bn: 'তারা কেবল সিঙ্গেল-কোর ৩২-বিট প্রসেসরে চলে'
          },
          {
            en: 'Immutable collections were deleted in modern .NET',
            bn: 'আধুনিক .NET-এ ইমিউটেবল কালেকশন মুছে ফেলা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Immutable collections provide lock-free thread safety through structural sharing.',
          bn: 'ইমিউটেবল কালেকশন কোনো লকিং ছাড়াই সব থ্রেডে সম্পূর্ণ নিরাপদ রিড অপারেশনের সুযোগ দেয়।'
        },
        explanation: {
          en: 'Because immutable collections can never be altered after creation, concurrent threads can read them without locks or race conditions.',
          bn: 'একবার তৈরির পর আর বদলানো যায় না বলে একাধিক থ্রেডে ডেটা রেস ঘটার কোনো সুযোগ থাকে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'patterns-and-the-match',
    title: {
      en: 'Pattern Matching & Expressive Switch',
      bn: 'প্যাটার্ন ম্যাচিং এবং আধুনিক সুইচ এক্সপ্রেশন'
    }
  }
};
