import type { Lesson } from '../../../lib/types';

export const CollectionsAndTheSequenceLesson: Lesson = {
  slug: 'collections-and-the-sequence',
  tech: 'kotlin',
  title: {
    en: 'Collections, Pipelines & Lazy Sequences',
    bn: 'কালেকশন, পাইপলাইন এবং লেজি সিকোয়েন্স'
  },
  summary: {
    en: 'Master high-throughput collection processing in Kotlin. Understand the core distinction between read-only interfaces (List, Set, Map) and mutable counterparts (MutableList). Build functional transformation pipelines using map and filter, contrast eager collection evaluation against lazy Sequence pipelines to eliminate intermediate allocations, and optimize memory for large datasets.',
    bn: 'Kotlin-এ উচ্চ-ক্ষমতাসম্পন্ন কালেকশন প্রসেসিং সম্পূর্ণ আয়ত্ত করুন। রিড-অনলি ইন্টারফেস (List, Set, Map) বনাম মিউটেবল ইন্টারফেসের (MutableList) মূল পার্থক্য গভীরভাবে অনুধাবন করুন। map ও filter দিয়ে ফাংশনাল পাইপলাইন তৈরি, মধ্যবর্তী মেমোরি অপচয় রোধে সাধারণ লিস্ট বনাম লেজি Sequence পাইপলাইনের তুলনা এবং বৃহৎ ডেটাসেটের মেমোরি অপটিমাইজেশন নিশ্চিত করুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'collections-read-only-vs-mutable-heading',
      text: {
        en: 'Read-Only versus Mutable Collections and Functional Transformations',
        bn: 'রিড-অনলি বনাম মিউটেবল কালেকশন এবং ফাংশনাল ট্রান্সফরমেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Java, standard collections expose mutating methods like add and clear on common interfaces, making defensive copying mandatory. In Kotlin (JetBrains\' modern statically typed programming language), the collection hierarchy draws a strict line between read-only views and mutable interfaces. The standard "List<T>" interface is read-only; it exposes querying methods like size and get, but completely omits mutation methods. To modify elements, developers must explicitly choose "MutableList<T>". This compile-time distinction allows functions to safely expose internal collections as read-only lists without risking external tampering or concurrent mutation defects.',
        bn: 'প্রথাগত জাভায় সাধারণ কালেকশন ইন্টারফেসে add এবং clear-এর মতো মিউটেশন মেথড উন্মুক্ত থাকে, ফলে অপ্রত্যাশিত পরিবর্তন ঠেকাতে ডিফেন্সিভ কপি তৈরি করতে হতো। কিন্তু Kotlin (জেটব্রেইন্সের তৈরি আধুনিক স্ট্যাটিক্যালি টাইপড প্রোগ্রামিং ভাষা)-এ কালেকশন সিস্টেম রিড-অনলি ভিউ এবং মিউটেবল ইন্টারফেসের মধ্যে একটি সুস্পষ্ট দেয়াল তৈরি করে। স্ট্যান্ডার্ড "List<T>" ইন্টারফেসটি সম্পূর্ণ রিড-অনলি; এতে size বা get-এর মতো মেথড থাকলেও কোনো কিছু যোগ বা বাদ দেওয়ার মেথড থাকে না। তালিকায় নতুন উপাদান যোগ করতে ডেভেলপারকে অবশ্যই স্পষ্ট "MutableList<T>" ব্যবহার করতে হয়। এই নিয়ম ফাংশনগুলোকে তাদের ভেতরের লিস্টকে বাইরের অনিচ্ছাকৃত পরিবর্তন থেকে শতভাগ সুরক্ষিত রাখার সুযোগ দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural comparison between eager List transformations (allocating intermediate lists) and lazy Sequence pipelines (element-by-element pull processing).',
        bn: 'চিত্র ১: সাধারণ লিস্ট ট্রান্সফরমেশন (মধ্যবর্তী লিস্ট তৈরি করে মেমোরি খরচ) এবং লেজি Sequence পাইপলাইনের (উপাদান ধরে ধরে সরাসরি প্রসেসিং) মধ্যকার স্থাপত্যিক তুলনা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">KOTLIN EAGER COLLECTIONS VS LAZY SEQUENCE PIPELINE</text>

  <!-- Top: Eager List Transformation Pipeline -->
  <g transform="translate(35, 60)">
    <rect width="770" height="110" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
    <rect width="770" height="26" rx="8" fill="#b91c1c" />
    <text x="385" y="18" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Eager List Pipeline: Multi-Pass with Intermediate Heap Allocations</text>

    <!-- Source -->
    <rect x="20" y="40" width="160" height="50" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="100" y="60" fill="#f87171" font-size="10" font-family="monospace" text-anchor="middle">Input: 1000 items</text>
    <text x="100" y="77" fill="#cbd5e1" font-size="9" font-family="sans-serif" text-anchor="middle">Allocated in RAM</text>

    <!-- Arrow 1 -->
    <text x="210" y="68" fill="#f87171" font-size="14" font-weight="bold">-&gt;</text>

    <!-- Filter intermediate -->
    <rect x="240" y="40" width="190" height="50" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="335" y="60" fill="#f87171" font-size="10" font-family="monospace" text-anchor="middle">.filter { it % 2 == 0 }</text>
    <text x="335" y="77" fill="#fca5a5" font-size="9" font-family="sans-serif" text-anchor="middle">Allocates List of 500 items!</text>

    <!-- Arrow 2 -->
    <text x="455" y="68" fill="#f87171" font-size="14" font-weight="bold">-&gt;</text>

    <!-- Map intermediate -->
    <rect x="485" y="40" width="180" height="50" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="575" y="60" fill="#f87171" font-size="10" font-family="monospace" text-anchor="middle">.map { it * 10 }</text>
    <text x="575" y="77" fill="#fca5a5" font-size="9" font-family="sans-serif" text-anchor="middle">Allocates 2nd List of 500 items!</text>

    <!-- Terminal -->
    <text x="685" y="68" fill="#f87171" font-size="14" font-weight="bold">-&gt;</text>
    <rect x="705" y="40" width="50" height="50" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="730" y="70" fill="#38bdf8" font-size="10" font-family="monospace" text-anchor="middle">first()</text>
  </g>

  <!-- Bottom: Lazy Sequence Pipeline -->
  <g transform="translate(35, 190)">
    <rect width="770" height="115" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="770" height="26" rx="8" fill="#059669" />
    <text x="385" y="18" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Lazy Sequence Pipeline: Element-by-Element Pull Processing (asSequence())</text>

    <!-- Pipeline Description -->
    <rect x="20" y="38" width="730" height="65" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="35" y="60" fill="#34d399" font-size="11" font-family="monospace">list.asSequence().filter { it % 2 == 0 }.map { it * 10 }.first()</text>

    <text x="35" y="82" fill="#f8fafc" font-size="10" font-family="sans-serif" font-weight="bold">Zero Intermediate Collections Allocated:</text>
    <text x="305" y="82" fill="#cbd5e1" font-size="10" font-family="sans-serif">Item 1 fails filter | Item 2 passes filter, gets mapped, first() halts pipeline!</text>
    <text x="35" y="96" fill="#38bdf8" font-size="9" font-family="sans-serif">Total evaluations: processed only 2 items instead of 1500 passes!</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'lazy-sequences-vs-eager-lists-heading',
      text: {
        en: 'Eager Evaluation versus Lazy Sequences (asSequence())',
        bn: 'সরাসরি মূল্যায়ন বনাম লেজি সিকোয়েন্স (asSequence())'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When chaining multiple functional operators like "filter" and "map" on a standard Kotlin List, execution is completely eager. Each intermediate operator allocates a brand new List on the heap before passing it to the subsequent step. In high-throughput systems or large collections with 1000 items, this multi-pass approach wastes significant memory and CPU cycles. Kotlin solves this through "Sequence". Prepending ".asSequence()" transforms the pipeline into a lazy, pull-based stream. Each individual element travels vertically through the entire pipeline (filter then map) before the next item begins. When paired with short-circuiting terminal operations like "first()" or "take(10)", a sequence processes only 2 items instead of thousands, eliminating intermediate allocations entirely.',
        bn: 'সাধারণ Kotlin লিস্টে "filter" বা "map"-এর মতো চেইনিং মেথড ব্যবহার করার সময় প্রতিটি অপারেশন সরাসরি বা eager হিসেবে চলে। প্রতিটি মধ্যবর্তী মেথড হিপে একটি সম্পূর্ণ নতুন লিস্ট তৈরি করে পরের মেথডের কাছে পাঠায়। ১০০০ উপাদানের বড় ডেটাসেট বা উচ্চগতির সার্ভারে এই বহু-ধাপ পদ্ধতি বিপুল পরিমাণ মেমোরি ও সিপিইউ অপচয় করে। Kotlin এই সমস্যার নিখুঁত সমাধান দেয় "Sequence"-এর মাধ্যমে। পাইপলাইনের শুরুতে ".asSequence()" লিখে দিলে পুরো প্রসেসটি অলস বা lazy পাইপলাইনে পরিণত হয়। এখানে প্রতিটি উপাদান এক এক করে সম্পূর্ণ পাইপলাইন পাড়ি দেয়। "first()" বা "take(10)"-এর মতো দ্রুত সমাপ্তকারী মেথড যুক্ত থাকলে পুরো ১০০০ উপাদান প্রক্রিয়াকরণের বদলে মাত্র ২ টি আইটেম যাচাই করেই কোড থেমে যায়, যা মধ্যবর্তী মেমোরি বরাদ্দ সম্পূর্ণ শূন্যে নামিয়ে আনে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Kotlin eager List transformations versus lazy pull-based Sequence pipelines measuring operations and intermediate allocations.',
        bn: 'Kotlin সাধারণ লিস্ট বনাম লেজি সিকোয়েন্সের অপারেশন সংখ্যা এবং মধ্যবর্তী মেমোরি বরাদ্দের তুলনামূলক TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Kotlin Eager Collections vs Lazy Sequence Pipelines

export class KotlinCollectionPipelineSimulator {
  // 1. Eager List Pipeline Simulation (multi-pass, allocates intermediate collections)
  public static runEagerListPipeline(input: number[]): {
    result: number | null;
    totalOperations: number;
    intermediateAllocations: number;
  } {
    let operations = 0;
    let allocations = 0;

    // Step 1: filter creates a new intermediate List of 500 items
    allocations++;
    const filteredList: number[] = [];
    for (const item of input) {
      operations++;
      if (item % 2 === 0) {
        filteredList.push(item);
      }
    }

    // Step 2: map creates a second intermediate List of 500 items
    allocations++;
    const mappedList: number[] = [];
    for (const item of filteredList) {
      operations++;
      mappedList.push(item * 10);
    }

    // Step 3: first() picks the first element
    const result = mappedList.length > 0 ? mappedList[0] : null;

    return { result, totalOperations: operations, intermediateAllocations: allocations };
  }

  // 2. Lazy Sequence Pipeline Simulation (asSequence(), element-by-element pull)
  public static runLazySequencePipeline(input: number[]): {
    result: number | null;
    totalOperations: number;
    intermediateAllocations: number;
  } {
    let operations = 0;
    const allocations = 0; // Zero intermediate collections allocated!
    let result: number | null = null;

    // Element-by-element pull architecture
    for (const item of input) {
      operations++;
      // Stage 1: filter condition
      if (item % 2 === 0) {
        operations++;
        // Stage 2: map transformation
        const mapped = item * 10;
        // Stage 3: terminal first() halts pipeline immediately!
        result = mapped;
        break; // Short-circuit termination
      }
    }

    return { result, totalOperations: operations, intermediateAllocations: allocations };
  }
}

// Execution Demonstration with 1000 items (numbers 1 to 1000)
const dataset: number[] = [];
for (let i = 1; i <= 1000; i++) {
  dataset.push(i);
}

console.log('Running Pipelines on dataset of 1000 items:');

// Eager execution
const eagerMetrics = KotlinCollectionPipelineSimulator.runEagerListPipeline(dataset);
console.log('[Eager List] Result:', eagerMetrics.result); // 20
console.log('[Eager List] Total Operations Executed:', eagerMetrics.totalOperations); // 1500
console.log('[Eager List] Intermediate Collections Created:', eagerMetrics.intermediateAllocations); // 2

// Lazy sequence execution
const lazyMetrics = KotlinCollectionPipelineSimulator.runLazySequencePipeline(dataset);
console.log('[Lazy Sequence] Result:', lazyMetrics.result); // 20
console.log('[Lazy Sequence] Total Operations Executed:', lazyMetrics.totalOperations); // 2
console.log('[Lazy Sequence] Intermediate Collections Created:', lazyMetrics.intermediateAllocations); // 0`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Read-Only Collection',
          def: {
            en: 'Interface (List, Set, Map) exposing accessor methods only, preventing mutation at compile time.',
            bn: 'ইন্টারফেস যা কেবল ডেটা পড়ার মেথড সরবরাহ করে এবং কম্পাইল-টাইমেই পরিবর্তন করা বন্ধ করে।'
          }
        },
        {
          term: 'Mutable Collection',
          def: {
            en: 'Explicit interface (MutableList, MutableMap) providing methods like add and remove to alter contents.',
            bn: 'সুনির্দিষ্ট ইন্টারফেস যা তালিকার ভেতরে নতুন ডেটা যোগ বা পরিবর্তনের মেথড প্রদান করে।'
          }
        },
        {
          term: 'Eager Pipeline',
          def: {
            en: 'Transformation strategy evaluating each step across the whole dataset immediately, allocating intermediate lists.',
            bn: 'পদ্ধতি যা প্রতিটি ধাপে পুরো ডেটাসেটের জন্য নতুন মধ্যবর্তী লিস্ট তৈরি করে মেমোরি খরচ বাড়ায়।'
          }
        },
        {
          term: 'Lazy Sequence',
          def: {
            en: 'Pull-based stream (Sequence) processing items vertically 1 by 1 on demand, avoiding intermediate allocations.',
            bn: 'অলস স্ট্রিম যা চাহিদা অনুসারে এক এক করে উপাদান প্রসেস করে মধ্যবর্তী মেমোরি অপচয় শূন্য করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'read-only-list-vs-mutable-list-ex1',
      kind: 'mcq',
      topic: 'read-only-vs-mutable-collection-interfaces',
      question: {
        en: 'What occurs if a Kotlin developer attempts to call ".add(\\"item\\")" on a variable declared as "List<String>"?',
        bn: 'একজন Kotlin ডেভেলপার "List<String>" হিসেবে ঘোষিত ভ্যারিয়েবলে ".add(\\"item\\")" ডাকার চেষ্টা করলে কী ঘটে?'
      },
      options: [
        {
          en: 'The compiler halts with a compilation error because List is a read-only interface lacking mutation methods; MutableList must be used instead',
          bn: 'কম্পাইলার তাৎক্ষণিকভাবে বিল্ড বন্ধ করে দেয় কারণ List একটি রিড-অনলি ইন্টারফেস যাতে কোনো মিউটেশন মেথড থাকে না; এর বদলে MutableList ব্যবহার করতে হয়'
        },
        {
          en: 'The element is appended silently without error',
          bn: 'উপাদানটি কোনো এরর ছাড়াই নীরবে তালিকায় যুক্ত হয়'
        },
        {
          en: 'The operating system kills the application process',
          bn: 'অপারেটিং সিস্টেম অ্যাপ্লিকেশনের প্রসেসটি বন্ধ করে দেয়'
        },
        {
          en: 'The list is converted into an SQL table',
          bn: 'লিস্টটি একটি এসকিউএল টেবিলে রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Kotlin distinguishes List (read-only) from MutableList (mutable).',
        bn: 'লিস্টে উপাদান যুক্ত করতে হলে স্পষ্টভাবে MutableList ঘোষণা করতে হয়।'
      },
      explanation: {
        en: 'In Kotlin, List does not declare mutating methods. This prevents unintended writes and enables safe sharing of data across architectural layers.',
        bn: 'এর মাধ্যমে অ্যাপ্লিকেশনের বিভিন্ন স্তরে অনিচ্ছাকৃত ডেটা পরিবর্তন চিরতরে রোধ করা যায়।'
      }
    },
    {
      id: 'lazy-sequence-memory-savings-ex2',
      kind: 'mcq',
      topic: 'lazy-sequence-intermediate-collection-elimination',
      question: {
        en: 'Why is using ".asSequence()" recommended when chaining multiple transformation steps (filter, map) on collections containing over 1000 items?',
        bn: '১০০০ টির বেশি উপাদানযুক্ত কালেকশনে একাধিক রূপান্তর (filter, map) চেইন করার সময় কেন ".asSequence()" ব্যবহার বাঞ্ছনীয়?'
      },
      options: [
        {
          en: 'Because sequences evaluate lazily element-by-element on demand, eliminating intermediate heap list allocations between transformation steps',
          bn: 'কারণ সিকোয়েন্স অলসভাবে এক এক করে উপাদান টেনে প্রসেস করে, যা রূপান্তরের ধাপগুলোর মাঝে অপ্রয়োজনীয় মধ্যবর্তী লিস্ট তৈরি রোধ করে'
        },
        {
          en: 'Because sequences increase the physical battery percentage of the phone',
          bn: 'কারণ সিকোয়েন্স ফোনের ব্যাটারি চার্জের শতকরা হার বাড়িয়ে দেয়'
        },
        {
          en: 'Because lists cannot store strings in Kotlin',
          bn: 'কারণ Kotlin-এ লিস্ট কোনো স্ট্রিং সংরক্ষণ করতে পারে না'
        },
        {
          en: 'Sequences were deprecated in Kotlin 1.7',
          bn: 'Kotlin ১.৭ সংস্করণে সিকোয়েন্স বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sequences process elements vertically on demand without intermediate collections.',
        bn: 'মধ্যবর্তী মেমোরি নষ্ট না করে সরাসরি উপাদান ধরে কাজ করার জন্য এটি সেরা।'
      },
      explanation: {
        en: 'Eager lists create a full copy for every chained operator. Sequences pass items one-by-one through the whole pipeline, saving megabytes of RAM on large datasets.',
        bn: 'ফলে বড় ডেটাসেট প্রক্রিয়াকরণের সময় বিপুল পরিমাণ র‍্যাম ও সিপিইউ সাশ্রয় হয়।'
      }
    },
    {
      id: 'short-circuit-terminal-operations-ex3',
      kind: 'mcq',
      topic: 'sequence-short-circuit-early-termination',
      question: {
        en: 'How does a lazy sequence behave when concluding a pipeline with a short-circuiting terminal operation like ".first()"?',
        bn: 'পাইপলাইনের শেষে ".first()"-এর মতো দ্রুত সমাপ্তকারী মেথড যুক্ত থাকলে একটি লেজি সিকোয়েন্স কীভাবে আচরণ করে?'
      },
      options: [
        {
          en: 'It stops evaluation immediately after finding the first matching element, leaving all subsequent elements in the collection completely untouched',
          bn: 'প্রথম উপযুক্ত উপাদানটি পাওয়ার সাথে সাথেই এটি কাজ বন্ধ করে দেয় এবং তালিকার অবশিষ্ট উপাদানগুলোকে সম্পূর্ণ অক্ষত রেখে দেয়'
        },
        {
          en: 'It processes every item 10 times to verify accuracy',
          bn: 'নির্ভুলতা যাচাই করতে এটি প্রতিটি উপাদান ১০ বার করে চালায়'
        },
        {
          en: 'It converts all numbers into 64-bit floating point values',
          bn: 'এটি সমস্ত সংখ্যাকে ৬৪-বিট ফ্লোটিং পয়েন্ট মানে রূপান্তর করে'
        },
        {
          en: 'It deletes the underlying collection from disk',
          bn: 'এটি ডিস্ক থেকে মূল কালেকশনটি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Terminal operations like first() short-circuit the sequence pipeline.',
        bn: 'প্রথম আইটেম মেলার সাথে সাথেই পুরো প্রসেস সাথে সাথে থেমে যায়।'
      },
      explanation: {
        en: 'Because sequences are pull-based, the terminal operator pulls only what it needs. As soon as first() receives one valid item, the upstream loop terminates.',
        bn: 'ফলে হাজার হাজার আইটেম থাকলেও মাত্র কয়েকটি আইটেম প্রসেস করেই উত্তর পাওয়া যায়।'
      }
    },
    {
      id: 'associate-by-group-by-difference-ex4',
      kind: 'mcq',
      topic: 'associate-by-vs-group-by-dictionary-mapping',
      question: {
        en: 'What is the operational difference between Kotlin collection functions "associateBy" and "groupBy"?',
        bn: 'Kotlin কালেকশন ফাংশন "associateBy" এবং "groupBy"-এর মধ্যে কার্যকর পার্থক্য কী?'
      },
      options: [
        {
          en: '"associateBy" maps each key to exactly 1 value (overwriting duplicate keys); "groupBy" maps each key to a List of values matching that key',
          bn: '"associateBy" প্রতিটি কি-কে ঠিক ১ টি মানের সাথে ম্যাপ করে (ডুপ্লিকেট কি ওভাররাইট করে); আর "groupBy" প্রতিটি কি-কে সেই কি-এর সাথে মিল থাকা মানের একটি সম্পূর্ণ List-এ ম্যাপ করে'
        },
        {
          en: '"associateBy" only runs on Linux servers',
          bn: '"associateBy" কেবল লিনাক্স সার্ভারে চলে'
        },
        {
          en: '"groupBy" encrypts data using AES-128',
          bn: '"groupBy" ডেটাকে AES-128 দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'associateBy and groupBy produce identical Map structures',
          bn: 'associateBy এবং groupBy হুবহু একই ম্যাপ কাঠামো তৈরি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'associateBy creates Map<K, V>; groupBy creates Map<K, List<V>>.',
        bn: 'একক মানের জন্য associateBy, আর দলবদ্ধ তালিকার জন্য groupBy।'
      },
      explanation: {
        en: 'Use associateBy when keys are unique (like User ID -> User). Use groupBy when multiple elements share the same key (like Country -> List<Users>).',
        bn: 'এর মাধ্যমে সহজেই ডাটাবেজের মতো নিখুঁত ম্যাপিং বা গ্রুপিং তৈরি করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-collections-and-the-sequence',
    title: {
      en: 'Kotlin Collections & Sequences Quiz',
      bn: 'Kotlin কালেকশন এবং সিকোয়েন্স কুইজ'
    },
    questions: [
      {
        id: 'quiz-collection-fold-vs-reduce',
        kind: 'mcq',
        topic: 'fold-vs-reduce-initial-accumulator',
        question: {
          en: 'What is the primary difference between "fold" and "reduce" when accumulating values across a Kotlin collection?',
          bn: 'একটি Kotlin কালেকশনে মান একত্রিত করার সময় "fold" এবং "reduce"-এর মধ্যে প্রধান পার্থক্য কী?'
        },
        options: [
          {
            en: '"fold" accepts an explicit initial accumulator value of any return type and works on empty collections; "reduce" uses the first element as the initial accumulator and throws an exception on empty collections',
            bn: '"fold" যেকোনো রিটার্ন টাইপের একটি স্পষ্ট প্রারম্ভিক মান গ্রহণ করে এবং খালি কালেকশনেও কাজ করে; আর "reduce" প্রথম উপাদানকে প্রারম্ভিক মান ধরে এবং খালি কালেকশনে এক্সেপশন ছুড়ে দেয়'
          },
          {
            en: '"reduce" is executed by an external Python interpreter',
            bn: '"reduce" একটি বাহ্যিক পাইথন ইন্টারপ্রেটার দ্বারা পরিচালিত হয়'
          },
          {
            en: '"fold" deletes elements with odd indices',
            bn: '"fold" বিজোড় ইনডেক্সের উপাদানগুলোকে মুছে ফেলে'
          },
          {
            en: 'fold and reduce were deprecated in Kotlin 1.8',
            bn: 'Kotlin ১.৮ সংস্করণে fold এবং reduce বাতিল করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'fold takes an initial value; reduce uses the collection\'s first element.',
          bn: 'শুরুর মান ঠিক করে নিরাপদে হিসেব করতে fold ব্যবহার করাই সবচেয়ে বুদ্ধিমানের কাজ।'
        },
        explanation: {
          en: 'Calling reduce on an empty collection throws UnsupportedOperationException. fold is safer because its explicit initial value provides a deterministic fallback.',
          bn: 'তাই খালি কালেকশনে ক্র্যাশ এড়াতে fold ব্যবহার করাই নির্ভরযোগ্য পদ্ধতি।'
        }
      },
      {
        id: 'quiz-sequence-terminal-vs-intermediate',
        kind: 'mcq',
        topic: 'sequence-intermediate-vs-terminal-execution',
        question: {
          en: 'Why does writing "val seq = list.asSequence().filter { ... }.map { ... }" perform zero actual computation until a terminal operator is called?',
          bn: '"val seq = list.asSequence().filter { ... }.map { ... }" লিখলে কোনো টার্মিনাল মেথড ডাকার আগ পর্যন্ত কেন কোনো আসল হিসেবই সম্পন্ন হয় না?'
        },
        options: [
          {
            en: 'Intermediate sequence operations return a new Sequence decorating the pipeline; computation is deferred until a terminal operator (like toList or first) triggers pull iteration',
            bn: 'মধ্যবর্তী অপারেশনগুলো কেবল নতুন সিকোয়েন্সের নকশা তৈরি করে পাইপলাইন সাজায়; কোনো টার্মিনাল মেথড (যেমন toList বা first) ডেটা টানা শুরু না করা পর্যন্ত আসল হিসেব স্থগিত থাকে'
          },
          {
            en: 'Because sequences require an active internet connection to evaluate',
            bn: 'কারণ সিকোয়েন্স হিসেব করার জন্য সক্রিয় ইন্টারনেট সংযোগ প্রয়োজন'
          },
          {
            en: 'Because the compiler deletes the code during optimization',
            bn: 'কারণ কম্পাইলার অপটিমাইজেশনের সময় কোডটি মুছে ফেলে'
          },
          {
            en: 'Sequences cannot perform filtering operations in Kotlin',
            bn: 'Kotlin-এ সিকোয়েন্স কোনো ফিল্টারিং অপারেশন চালাতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Intermediate operations are lazy; only terminal operations execute the pipeline.',
          bn: 'টার্মিনাল মেথড না ডাকা পর্যন্ত সিকোয়েন্স অলসভাবে নির্দেশগুলো মনে রাখে মাত্র।'
        },
        explanation: {
          en: 'Sequences build a chain of iterator decorators. Only when a terminal operation consumes the iterator does data flow through the processing nodes.',
          bn: 'ফলে অপ্রয়োজনীয় কোনো কাজ আগেভাগে করে সময় নষ্ট করা হয় না।'
        }
      },
      {
        id: 'quiz-small-collections-eager-advantage',
        kind: 'mcq',
        topic: 'small-collections-eager-performance-advantage',
        question: {
          en: 'Why can eager List transformations be faster than lazy Sequences on small collections (e.g. fewer than 20 items)?',
          bn: 'ছোট কালেকশনে (যেমন ২০ টির কম উপাদান) কেন লেজি সিকোয়েন্সের চেয়ে সাধারণ লিস্ট রূপান্তর বেশি দ্রুত হতে পারে?'
        },
        options: [
          {
            en: 'Because standard lists use straightforward array loops without the state-machine and iterator object indirection overhead required by lazy sequences',
            bn: 'কারণ সাধারণ লিস্ট সরাসরি দ্রুতগতির সাধারণ লুপ চালায়, যাতে লেজি সিকোয়েন্সের মতো স্টেট-মেশিন এবং ইটারেটর অবজেক্টের বাড়তি ওভারহেড থাকে না'
          },
          {
            en: 'Because small lists run directly inside CPU registers',
            bn: 'কারণ ছোট লিস্ট সরাসরি সিপিইউ রেজিস্টারের ভেতর চলে'
          },
          {
            en: 'Because sequences do not support integer values under 50',
            bn: 'কারণ সিকোয়েন্স ৫০-এর নিচের পূর্ণসংখ্যা সমর্থন করে না'
          },
          {
            en: 'There is zero difference for collections under 20 items',
            bn: '২০ টির কম উপাদানের কালেকশনে কোনো পার্থক্য থাকে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sequences introduce iterator wrapper overhead; for tiny lists, simple eager loops win.',
          bn: 'খুব ছোট তালিকার জন্য ইটারেটর অবজেক্ট বানানোর চেয়ে সরাসরি লুপ চালানোই দ্রুত।'
        },
        explanation: {
          en: 'Sequences carry a small constant overhead for allocating the sequence state machine. For tiny collections, this overhead exceeds the cost of small temporary list allocations.',
          bn: 'তাই কয়েকটা আইটেমের জন্য সাধারণ লিস্ট এবং বড় তালিকার জন্য সিকোয়েন্স সেরা।'
        }
      },
      {
        id: 'quiz-generate-sequence-infinite-streams',
        kind: 'mcq',
        topic: 'generate-sequence-infinite-lazy-streams',
        question: {
          en: 'What architectural power does "generateSequence(seed) { nextValue(it) }" unlock in Kotlin?',
          bn: 'Kotlin-এ "generateSequence(seed) { nextValue(it) }" কোন স্থাপত্যিক ক্ষমতা উন্মুক্ত করে?'
        },
        options: [
          {
            en: 'It creates potentially infinite lazy streams (like Fibonacci sequences or pagination generators) where items are calculated mathematically on demand without memory overflow',
            bn: 'এটি অসীম লেজি স্ট্রিম (যেমন ফিবোনাচ্চি ধারা বা পেজিনেশন জেনারেটর) তৈরি করে যেখানে কোনো মেমোরি শেষ না করে চাহিদা অনুসারে গাণিতিকভাবে পরবর্তী মান তৈরি হয়'
          },
          {
            en: 'It shuts down background threads on low memory warnings',
            bn: 'মেমোরি কমে গেলে এটি ব্যাকগ্রাউন্ড থ্রেডগুলো বন্ধ করে দেয়'
          },
          {
            en: 'It converts the sequence into an encrypted PDF file',
            bn: 'এটি সিকোয়েন্সটিকে একটি এনক্রিপ্ট করা পিডিএফ ফাইলে রূপান্তর করে'
          },
          {
            en: 'generateSequence was removed in Kotlin 2.0',
            bn: 'Kotlin ২.০ সংস্করণে generateSequence বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'generateSequence builds infinite on-demand sequences evaluated with take(n).',
          bn: 'সীমাহীন ধারা বা ধাপে ধাপে পেজ লোড করার জন্য এটি অত্যন্ত কার্যকর।'
        },
        explanation: {
          en: 'Infinite sequences defer generation until terminal operations consume them with limits like take(10), enabling mathematically infinite series without OutOfMemoryErrors.',
          bn: 'এর মাধ্যমে মেমোরি ক্র্যাশ না ঘটিয়ে অসীম ডেটা নিয়ে স্বাচ্ছন্দ্যে কাজ করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'coroutines-and-the-suspend',
    title: {
      en: 'Coroutines, Suspending Functions & Structured Concurrency',
      bn: 'কোরুটিন, সাসপেন্ডিং ফাংশন এবং স্ট্রাকচার্ড কনকারেন্সি'
    }
  }
};
