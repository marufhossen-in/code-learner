import type { Lesson } from '../../../lib/types';

export const EnumsAndTheMapLesson: Lesson = {
  slug: 'enums-and-the-map',
  tech: 'lang-ruby',
  title: {
    en: 'Enumerable, Map, Filter, Reduce & Lazy Streams',
    bn: 'Enumerable, Map, Filter, Reduce এবং লেজি স্ট্রিম'
  },
  summary: {
    en: 'Master functional collection processing and streaming pipelines in Ruby. Discover how implementing a single "each" method unlocks over 50 Enumerable algorithms, compose expressive transformations via map, select, and reduce, analyze frequencies using tally, and prevent memory exhaustion on massive datasets using Enumerator::Lazy.',
    bn: 'Ruby-তে ফাংশনাল কালেকশন প্রসেসিং এবং স্ট্রিমিং পাইপলাইন সম্পূর্ণ আয়ত্ত করুন। কীভাবে মাত্র ১ টি "each" মেথড লিখে ৫০ টিরও বেশি Enumerable অ্যালগরিদম পাওয়া যায় তা জানুন, map, select ও reduce দিয়ে পাইপলাইন সাজান, tally দিয়ে ফ্রিকোয়েন্সি বের করুন এবং Enumerator::Lazy দিয়ে মেমোরি সংকট প্রতিরোধ করুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'enumerable-mixin-contract-heading',
      text: {
        en: 'The Enumerable Mixin and Core Collection Pipelines',
        bn: 'Enumerable মিক্সইন এবং মূল কালেকশন পাইপলাইন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Manipulating collections through imperative indexing loops is error-prone and clutters domain business logic. In Ruby (the dynamic object-oriented programming language designed for programmer productivity), collection algorithms are unified under the "Enumerable" module. Any custom class that defines a single "each" method yielding elements one by one can mix in Enumerable to automatically unlock over 50 searching, sorting, and transformation methods. Through foundational primitives like "map" to transform values, "select" to filter subsets, and "reduce" to fold elements into an accumulator, developers compose expressive functional data pipelines.',
        bn: 'ম্যানুয়াল ইনডেক্সিং লুপ দিয়ে ডেটা পরিবর্তন করা ঝুঁকিপূর্ণ এবং কোডের সৌন্দর্য নষ্ট করে। কিন্তু Ruby (প্রোগ্রামারদের আনন্দের জন্য তৈরি ডাইনামিক অবজেক্ট-ওরিয়েন্টেড ভাষা)-তে সমস্ত কালেকশন অ্যালগরিদম "Enumerable" মডিউলের মাধ্যমে এক সূত্রে গাঁথা। যেকোনো কাস্টম ক্লাসে কেবল ১ টি "each" মেথড লিখে উপাদানগুলোকে yield করলেই স্বয়ংক্রিয়ভাবে ৫০ টিরও বেশি ফিল্টারিং ও ট্রান্সফর্মেশন মেথড পাওয়া যায়। ডেটার রূপান্তরে "map", শর্তযুক্ত বাছাইয়ে "select" এবং সমস্ত ডেটা একত্র করে এক মানে পরিণত করতে "reduce" ব্যবহার করে ডেভেলপাররা চমৎকার ফাংশনাল ডেটা পাইপলাইন তৈরি করেন।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Eager Enumerable evaluation allocating intermediate heap arrays versus Enumerator::Lazy streaming elements one by one with zero intermediate allocations.',
        bn: 'চিত্র ১: মেমরিতে বাড়তি অ্যারে তৈরি করা ইগার Enumerable বনাম কোনো মধ্যবর্তী অ্যারে ছাড়া এক এক করে ডেটা প্রসেস করা Enumerator::Lazy-র তুলনা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUBY ENUMERABLE EAGER VS LAZY PIPELINE</text>

  <!-- Left: Eager Pipeline -->
  <g transform="translate(35, 65)">
    <rect width="360" height="235" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="360" height="30" rx="8" fill="#dc2626" />
    <text x="180" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Standard Eager Evaluation (data.select.map)</text>

    <!-- Source -->
    <rect x="15" y="45" width="330" height="42" rx="5" fill="#0f172a" stroke="#dc2626" />
    <text x="25" y="65" fill="#f87171" font-size="10" font-family="monospace">[1, 2, 3, 4, 5, 6] (100,000 items)</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Original input collection in memory</text>

    <!-- Intermediate 1 -->
    <rect x="15" y="95" width="330" height="48" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="115" fill="#fbbf24" font-size="10" font-family="monospace">.select(&amp;:even?) #=&gt; Allocates Array 1</text>
    <text x="25" y="132" fill="#cbd5e1" font-size="9" font-family="sans-serif">Allocates complete 50,000 element heap array</text>

    <!-- Final -->
    <rect x="15" y="150" width="330" height="48" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="25" y="170" fill="#f87171" font-size="10" font-family="monospace">.map { |n| n * 10 } #=&gt; Allocates Array 2</text>
    <text x="25" y="187" fill="#cbd5e1" font-size="9" font-family="sans-serif">Allocates second full array in memory (Memory Bloat!)</text>

    <text x="25" y="220" fill="#f87171" font-size="9" font-family="sans-serif" font-weight="bold">Fatal: Crashes on infinite sequences or large files</text>
  </g>

  <!-- Right: Lazy Pipeline -->
  <g transform="translate(435, 65)">
    <rect width="370" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="370" height="30" rx="8" fill="#059669" />
    <text x="185" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Streaming with Enumerator::Lazy</text>

    <!-- Source -->
    <rect x="15" y="45" width="340" height="42" rx="5" fill="#0f172a" stroke="#059669" />
    <text x="25" y="65" fill="#34d399" font-size="10" font-family="monospace">(1..Float::INFINITY).lazy</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Streams values on demand one by one</text>

    <!-- Pipeline steps -->
    <rect x="15" y="95" width="340" height="60" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="115" fill="#34d399" font-size="10" font-family="monospace">.select(&amp;:even?).map { |n| n * 10 }</text>
    <text x="25" y="133" fill="#38bdf8" font-size="10" font-family="monospace">.first(5)</text>
    <text x="25" y="148" fill="#cbd5e1" font-size="8" font-family="sans-serif">No intermediate array allocations created on heap</text>

    <!-- Result -->
    <rect x="15" y="165" width="340" height="55" rx="5" fill="#059669" fill-opacity="0.15" stroke="#10b981" />
    <text x="25" y="185" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">Zero Allocation Churn:</text>
    <text x="25" y="202" fill="#f8fafc" font-size="9" font-family="monospace">Result: [20, 40, 60, 80, 100] (O(1) memory!)</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'lazy-evaluation-and-grouping-heading',
      text: {
        en: 'Lazy Streams, Tally Aggregations, and Memory Efficiency',
        bn: 'লেজি স্ট্রিম, Tally অ্যাগ্রিগেশন এবং মেমোরি দক্ষতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Standard Enumerable pipelines are eager: each transformation evaluates the complete collection, allocating intermediate arrays on the heap. When operating on multi-gigabyte files or infinite series, this causes severe memory spikes and crashes. Invoking ".lazy" converts the collection into an "Enumerator::Lazy", streaming elements through the pipeline one at a time so only terminal methods like "first(5)" request data. Additionally, modern Ruby includes expressive aggregation helpers like "tally", which counts element occurrences into a frequency hash without requiring manual boilerplate.',
        bn: 'সাধারণ Enumerable পাইপলাইনগুলো ইগার পদ্ধতিতে চলে: প্রতিটি মেথড পুরো কালেকশনটি প্রসেস করে মেমরিতে নতুন নতুন ইন্টারমিডিয়েট অ্যারে তৈরি করে। গিগাবাইট আকারের বড় ফাইল বা অসীম ডেটা নিয়ে কাজ করার সময় এটি সার্ভারের র্যাম শেষ করে ক্র্যাশ ঘটায়। ".lazy" মেথড কল করলে কালেকশনটি "Enumerator::Lazy"-তে রূপান্তরিত হয়, যা উপাদানগুলোকে এক এক করে পাইপলাইনে পাঠায় এবং শুধুমাত্র "first(5)"-এর মতো শেষ মেথড যতটুকু চায় ততটুকুই প্রসেস করে। তাছাড়া আধুনিক Ruby-তে "tally"-র মতো চমৎকার মেথড রয়েছে, যা ম্যানুয়াল লুপ ছাড়াই কোনো তালিকায় প্রতিটি উপাদান কতবার এসেছে তা গুনে একটি হ্যাশ উপহার দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Ruby Enumerable collection pipeline (select, map, reduce, tally) and lazy streaming generator.',
        bn: 'Ruby Enumerable কালেকশন পাইপলাইন (select, map, reduce, tally) এবং লেজি স্ট্রিমিং জেনারেটরের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Ruby Enumerable Pipeline and Lazy Streaming Evaluation

export class RubyEnumerableEngine {
  // Simulates [10, 20, 30, 40].select.map.reduce
  public static runEagerPipeline(numbers: number[]): { filtered: number[]; mapped: number[]; total: number } {
    const filtered = numbers.filter(n => n > 15);      // select { |n| n > 15 }
    const mapped = filtered.map(n => n * 2);           // map { |n| n * 2 }
    const total = mapped.reduce((acc, n) => acc + n, 0); // reduce(:+)

    return { filtered, mapped, total };
  }

  // Simulates Ruby's array.tally method: counts occurrences into a frequency map
  public static tally<T extends string | number>(items: T[]): Record<string, number> {
    const counts: Record<string, number> = {};
    for (const item of items) {
      const key = String(item);
      counts[key] = (counts[key] || 0) + 1;
    }
    return counts;
  }

  // Simulates (1..Infinity).lazy.select(&:even?).map(* 10).first(5)
  public static *lazyPipeline(limit: number): Generator<number> {
    let current = 1;
    let emitted = 0;

    while (emitted < limit) {
      if (current % 2 === 0) { // select(&:even?)
        yield current * 10;    // map { |n| n * 10 }
        emitted++;
      }
      current++;
    }
  }
}

// Execution Demonstration
console.log('--- 1. Testing Eager Enumerable Pipeline ---');
const inputData = [10, 20, 30, 40];
const eagerResult = RubyEnumerableEngine.runEagerPipeline(inputData);
console.log('Initial Collection:', inputData);
console.log('Filtered (select > 15):', eagerResult.filtered); // [20, 30, 40]
console.log('Mapped (map * 2):', eagerResult.mapped);         // [40, 60, 80]
console.log('Total (reduce sum):', eagerResult.total);         // 180

console.log('\n--- 2. Testing Ruby tally Aggregation ---');
const votes = ['ruby', 'python', 'ruby', 'javascript', 'ruby', 'python'];
const tallyCounts = RubyEnumerableEngine.tally(votes);
console.log('Vote Counts (tally):', tallyCounts); // { ruby: 3, python: 2, javascript: 1 }

console.log('\n--- 3. Testing Enumerator::Lazy Streaming (first 5 elements) ---');
const lazyStream = RubyEnumerableEngine.lazyPipeline(5);
const lazyOutput: number[] = [];
for (const val of lazyStream) {
  lazyOutput.push(val);
}
console.log('Lazy Evaluated Stream Output:', lazyOutput); // [20, 40, 60, 80, 100]`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Enumerable Mixin',
          def: {
            en: 'Standard module providing collection query algorithms when host class implements each.',
            bn: 'স্ট্যান্ডার্ড মডিউল যা ক্লাসে each মেথড থাকলেই কালেকশনের সমস্ত অ্যালগরিদম প্রদান করে।'
          }
        },
        {
          term: 'map & select',
          def: {
            en: 'Core functional primitives: map transforms elements; select filters elements matching boolean predicates.',
            bn: 'ফাংশনাল মেথড: map উপাদানকে রূপান্তর করে; আর select সত্য শর্তযুক্ত উপাদানগুলোকে বাছাই করে।'
          }
        },
        {
          term: 'reduce / inject',
          def: {
            en: 'Folding algorithm accumulating collection elements into a single composite value.',
            bn: 'অ্যালগরিদম যা পুরো তালিকার উপাদানগুলোকে একত্র করে একটি একক মানে রূপান্তর করে।'
          }
        },
        {
          term: 'Enumerator::Lazy',
          def: {
            en: 'Streaming wrapper deferring evaluation to process elements on demand with O(1) memory.',
            bn: 'স্ট্রিমিং ব্যবস্থা যা একবারে সব হিসাব না করে প্রয়োজনমতো এক এক করে ডেটা প্রসেস করে মেমোরি বাঁচায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'enumerable-each-contract-ex1',
      kind: 'mcq',
      topic: 'ruby-enumerable-each-contract-requirement',
      question: {
        en: 'What fundamental method must any custom Ruby class implement before mixing in "include Enumerable"?',
        bn: '"include Enumerable" মিক্সইন ব্যবহারের পূর্বে যেকোনো কাস্টম Ruby ক্লাসে সুনির্দিষ্ট কোন মেথডটি ডিফাইন করা আবশ্যক?',
      },
      options: [
        {
          en: 'The "each" method, yielding elements sequentially to the caller\'s block',
          bn: '"each" মেথডটি, যা তালিকার প্রতিটি উপাদানকে ধারাবাহিকভাবে কলারের ব্লকে yield করে'
        },
        {
          en: 'The "run_all_algorithms" method',
          bn: '"run_all_algorithms" মেথডটি'
        },
        {
          en: 'The "binary_search_tree" method',
          bn: '"binary_search_tree" মেথডটি'
        },
        {
          en: 'Classes must manually code every one of the 50 Enumerable methods',
          bn: 'ক্লাসগুলোকে ৫০ টি Enumerable মেথডই ম্যানুয়ালি লিখতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Enumerable relies on each to iterate over collection elements.',
        bn: 'শুধুমাত্র একটি উপাদান ঘুরিয়ে দেওয়ার দায়িত্ব নিলেই বাকি সব মেথড বিনামূল্যে পাওয়া যায়।'
      },
      explanation: {
        en: 'Enumerable is built entirely on top of "each". Implementing only "each" gives your class access to map, select, reject, reduce, any?, all?, and dozens more.',
        bn: 'ক্লাসে "each" লিখে দিলে Enumerable মডিউল স্বয়ংক্রিয়ভাবে বাকি সমস্ত মেথড সচল করে দেয়।'
      }
    },
    {
      id: 'reduce-inject-folding-ex2',
      kind: 'mcq',
      topic: 'ruby-reduce-inject-accumulator-folding',
      question: {
        en: 'What does "[1, 2, 3, 4].reduce(0) { |acc, n| acc + n }" evaluate to in Ruby?',
        bn: 'Ruby-তে "[1, 2, 3, 4].reduce(0) { |acc, n| acc + n }" এক্সপ্রেশনটি রান করলে কী ফলাফল পাওয়া যায়?'
      },
      options: [
        {
          en: '10 (it folds the collection starting with initial accumulator 0, summing each element sequentially)',
          bn: '১০ (এটি প্রাথমিক মান ০ দিয়ে শুরু করে তালিকার প্রতিটি উপাদান যোগ করে একটি একক মানে রূপান্তর করে)'
        },
        {
          en: '0 (it always returns the initial value)',
          bn: '০ (এটি সর্বদা প্রাথমিক মানটিই ফেরত দেয়)'
        },
        {
          en: '[1, 2, 3, 4]',
          bn: '[১, ২, ৩, ৪]'
        },
        {
          en: 'reduce was deprecated in Ruby 3.0',
          bn: 'Ruby ৩.০ সংস্করণে reduce বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'reduce accumulates values across iterations to produce a single final result.',
        bn: 'তালিকার সবগুলো সংখ্যাকে একত্র করে যোগফল বের করার ক্লাসিক মেথড।'
      },
      explanation: {
        en: '"reduce" (aliased as "inject") passes the running total into "acc" and the current item into "n", accumulating 0 + 1 + 2 + 3 + 4 = 10.',
        bn: 'প্রতিটি পদকে ক্রমান্বয়ে ০ + ১ + ২ + ৩ + ৪ = ১০ যোগ করে চূড়ান্ত যোগফল তৈরি করাই এর কাজ।'
      }
    },
    {
      id: 'tally-frequency-counting-ex3',
      kind: 'mcq',
      topic: 'ruby-tally-frequency-hash-aggregation',
      question: {
        en: 'What does calling "[\'a\', \'b\', \'a\'].tally" return in modern Ruby?',
        bn: 'আধুনিক Ruby-তে "[\'a\', \'b\', \'a\'].tally" কল করলে কী ফলাফল পাওয়া যায়?'
      },
      options: [
        {
          en: '{"a" => 2, "b" => 1} (a Hash counting the exact occurrence count of each distinct element)',
          bn: '{"a" => 2, "b" => 1} (একটি হ্যাশ যা প্রতিটি উপাদানের সঠিক উপস্থিতির সংখ্যা গণনা করে দেয়)'
        },
        {
          en: '["a", "b"]',
          bn: '["a", "b"]'
        },
        {
          en: '3 (total length)',
          bn: '৩ (মোট দৈর্ঘ্য)'
        },
        {
          en: 'tally is only valid on integers',
          bn: 'tally কেবল পূর্ণসংখ্যার সাথেই ব্যবহার করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'tally counts item frequencies directly into a Hash.',
        bn: 'কোন উপাদান কতবার এসেছে তা এক লাইনে গুনে দেওয়ার আধুনিক Ruby মেথড।'
      },
      explanation: {
        en: 'Introduced in Ruby 2.7, "tally" tallies element occurrences cleanly, replacing manual "each_with_object(Hash.new(0))" loops.',
        bn: 'এর মাধ্যমে কোনো বাড়তি লুপ না লিখে সহজেই ডেটার ফ্রিকোয়েন্সি গণনা করা যায়।'
      }
    },
    {
      id: 'lazy-evaluation-infinite-ranges-ex4',
      kind: 'mcq',
      topic: 'ruby-lazy-evaluation-memory-exhaustion',
      question: {
        en: 'Why does "(1..Float::INFINITY).select(&:even?).first(5)" freeze the Ruby process while "(1..Float::INFINITY).lazy.select(&:even?).first(5)" completes instantly?',
        bn: 'কেন "(1..Float::INFINITY).select(&:even?).first(5)" Ruby প্রসেসকে ফ্রিজ করে দেয় কিন্তু "(1..Float::INFINITY).lazy.select(&:even?).first(5)" চোখের পলকে সম্পন্ন হয়?'
      },
      options: [
        {
          en: 'Without .lazy, "select" attempts to evaluate the entire infinite range into an intermediate memory array before calling first; .lazy evaluates elements on demand and stops immediately after 5 matches',
          bn: '.lazy না থাকলে "select" পুরো অসীম রেঞ্জটিকে মেমরিতে হিসাব করতে গিয়ে আটকে যায়; আর .lazy কেবল প্রয়োজনমতো এক এক করে ডেটা প্রসেস করে ৫ টি মেলানোর পরেই সাথে সাথে থেমে যায়'
        },
        {
          en: 'Because infinity cannot be divided by two on 64-bit computers',
          bn: 'কারণ ৬৪-বিট কম্পিউটারে ইনফিনিটিকে দুই দিয়ে ভাগ করা যায় না'
        },
        {
          en: 'first(5) deletes the operating system swap file',
          bn: 'first(5) অপারেটিং সিস্টেমের সোয়াপ ফাইল মুছে ফেলে'
        },
        {
          en: 'lazy evaluation is only permitted inside Docker containers',
          bn: 'লেজি মূল্যায়ন কেবল ডকার কন্টেইনারেই ব্যবহারের অনুমতি রয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Lazy evaluation streams elements and halts as soon as terminal conditions are met.',
        bn: 'পুরো সমুদ্র পান করার চেষ্টা না করে যতটুকুর পিপাসা লেগেছে ঠিক ততটুকু নিয়েই ক্ষান্ত হয়।'
      },
      explanation: {
        en: 'Eager Enumerable methods must process all elements before passing downstream. "lazy" streams elements through the pipeline on demand, enabling safe manipulation of infinite sequences.',
        bn: 'লেজি এনিউমারেটর চাহিদা অনুযায়ী ডেটা তৈরি করে, ফলে অসীম ডেটা নিয়ে কাজ করার সময়ও মেমোরি আটকে থাকে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-enums-and-the-map',
    title: {
      en: 'Ruby Enumerable & Streams Quiz',
      bn: 'Ruby Enumerable এবং স্ট্রিম কুইজ'
    },
    questions: [
      {
        id: 'quiz-partition-predicate-split',
        kind: 'mcq',
        topic: 'ruby-enumerable-partition-splitting',
        question: {
          en: 'What does "[1, 2, 3, 4, 5].partition(&:even?)" produce in Ruby?',
          bn: 'Ruby-তে "[1, 2, 3, 4, 5].partition(&:even?)" কল করলে কী ফলাফল পাওয়া যায়?'
        },
        options: [
          {
            en: '[[2, 4], [1, 3, 5]] (two arrays: the first containing elements where the predicate is true, the second containing elements where it is false)',
            bn: '[[২, ৪], [১, ৩, ৫]] (দুটি অ্যারে: প্রথমটিতে সত্য শর্তযুক্ত উপাদান এবং দ্বিতীয়টিতে মিথ্যা শর্তযুক্ত উপাদান থাকে)'
          },
          {
            en: '[2, 4]',
            bn: '[২, ৪]'
          },
          {
            en: '[1, 3, 5]',
            bn: '[১, ৩, ৫]'
          },
          {
            en: 'partition was removed in Ruby 3',
            bn: 'Ruby ৩-এ partition বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'partition splits a collection into two matching and non-matching arrays.',
          bn: 'এক নিমেষে তালিকাকে সত্য ও মিথ্যার দুই ভাগে ভাগ করে দেওয়ার আদর্শ মেথড।'
        },
        explanation: {
          en: '"partition" evaluates the block for each element and returns two parallel arrays: `[truthy_elements, falsy_elements]`.',
          bn: 'এর মাধ্যমে ২ টি সমান্তরাল অ্যারে তৈরি করে এক লাইনেই সত্য ও মিথ্যার দুই ভাগে উপাদান আলাদা করা যায়।'
        }
      },
      {
        id: 'quiz-flat-map-concatenation',
        kind: 'mcq',
        topic: 'ruby-flat-map-collect-concat',
        question: {
          en: 'What is the operational utility of "flat_map" (aliased as "collect_concat") in Ruby pipelines?',
          bn: 'Ruby পাইপলাইনে "flat_map" (যার অপর নাম "collect_concat") মেথডের ব্যবহারিক সুবিধা কী?'
        },
        options: [
          {
            en: 'It maps over a collection and flattens the returned sub-arrays by 1 level in a single pass, avoiding an explicit .map(...).flatten(1) step',
            bn: 'এটি কালেকশনের ওপর map চালায় এবং ফেরত আসা সাব-অ্যারেগুলোকে এক ধাপে ফ্ল্যাট করে দেয়, ফলে বাড়তি .map.flatten লেখার প্রয়োজন হয় না'
          },
          {
            en: 'It flattens the server CPU cache to zero',
            bn: 'এটি সার্ভারের CPU ক্যাশ শূন্যে নামিয়ে আনে'
          },
          {
            en: 'It translates the array into a geographic map image',
            bn: 'এটি অ্যারেকে একটি ভৌগোলিক মানচিত্রের ছবিতে রূপান্তর করে'
          },
          {
            en: 'flat_map is strictly limited to hashes',
            bn: 'flat_map কেবল হ্যাশের সাথেই ব্যবহার করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'flat_map combines mapping and one-level flattening.',
          bn: 'একসাথে ম্যাপ করা এবং ভেতরের সাব-তালিকা খুলে এক তালিকায় রূপান্তর করার শর্টকাট।'
        },
        explanation: {
          en: '"flat_map" maps each element to an array and concatenates results into a single list, saving intermediate array allocations.',
          bn: 'এর মাধ্যমে একাধিক তালিকা থেকে ডেটা সংগ্রহ করে একটি সমতল একক তালিকা নিমেষে তৈরি করা যায়।'
        }
      },
      {
        id: 'quiz-detect-find-short-circuit',
        kind: 'mcq',
        topic: 'ruby-find-detect-short-circuiting',
        question: {
          en: 'How does "find" (or "detect") optimize search performance compared to "select.first" on a 10,000-item array?',
          bn: '১০,০০০ উপাদানের একটি অ্যারেতে "select.first"-এর তুলনায় "find" (বা "detect") কীভাবে সার্চ পারফরম্যান্স অপটিমাইজ করে?'
        },
        options: [
          {
            en: '"find" short-circuits immediately upon locating the first matching element, whereas "select" inspects all 10,000 items and allocates an intermediate array before returning the first element',
            bn: '"find" প্রথম মিল পাওয়া মাত্রই সাথে সাথে লুপ বন্ধ করে ফেরত চলে আসে; কিন্তু "select" পুরো ১০,০০০ উপাদান ঘুরে একটি বাড়তি অ্যারে বানিয়ে তারপর প্রথমটি দেয়'
          },
          {
            en: 'find searches on the GPU while select runs on the CPU',
            bn: 'find GPU-তে সার্চ করে আর select CPU-তে চলে'
          },
          {
            en: 'find deletes matching items from the array',
            bn: 'find মিল পাওয়া উপাদানগুলোকে অ্যারে থেকে মুছে ফেলে'
          },
          {
            en: 'There is zero performance difference between find and select.first',
            bn: 'find এবং select.first-এর মাঝে কোনো পারফরম্যান্স পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'find short-circuits on the first match; select must process the entire collection.',
          bn: 'প্রথমবার কাঙ্ক্ষিত জিনিস পেয়ে গেলেই লুপ থামিয়ে দেওয়ার বুদ্ধিমান শর্ট-সার্কিট ব্যবস্থা।'
        },
        explanation: {
          en: '"select.first" is a classic anti-pattern: it filters the whole array eagerly. "find" stops scanning as soon as the block returns true, saving CPU cycles.',
          bn: 'এই কারণে একটিমাত্র উপাদান খুঁজতে সর্বদা find বা detect ব্যবহার করা উচিত।'
        }
      },
      {
        id: 'quiz-each-with-object-immutability',
        kind: 'mcq',
        topic: 'ruby-each-with-object-accumulator',
        question: {
          en: 'Why is "each_with_object" widely preferred over "inject" when building up a mutable hash or array accumulator in Ruby?',
          bn: 'Ruby-তে মিউটেবল হ্যাশ বা অ্যারেতে ডেটা সংগ্রহের সময় কেন "inject"-এর চেয়ে "each_with_object" বেশি পছন্দ করা হয়?'
        },
        options: [
          {
            en: 'Because each_with_object always returns the accumulator object automatically at each step, eliminating the annoying bug where forgetting to return "acc" from the block causes inject to crash with nil',
            bn: 'কারণ each_with_object স্বয়ংক্রিয়ভাবে অ্যাকুমুলেটরটিকে প্রতিটি ধাপে ধরে রাখে, ফলে ব্লকের শেষে "acc" ফেরত দিতে ভুলে গেলেও inject-এর মতো nil হয়ে ক্র্যাশ করে না'
          },
          {
            en: 'It forces the accumulator to be saved in an encrypted vault',
            bn: 'এটি অ্যাকুমুলেটরটিকে একটি এনক্রিপ্টেড ভল্টে সংরক্ষণ করতে বাধ্য করে'
          },
          {
            en: 'each_with_object was removed in Ruby 3.0',
            bn: 'Ruby ৩.০ সংস্করণে each_with_object বাদ দেওয়া হয়েছিল'
          },
          {
            en: 'inject only works with floating point numbers',
            bn: 'inject কেবল দশমিক সংখ্যা নিয়েই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'each_with_object preserves the accumulator without requiring explicit returns.',
          bn: 'ব্লকের ভেতরে রিটার্ন স্টেটমেন্টের ভুল এড়িয়ে হ্যাশ বা তালিকা তৈরি করার সবচেয়ে নিরাপদ পদ্ধতি।'
        },
        explanation: {
          en: 'With "inject", mutating an accumulator requires returning it at the block tail (`hash[k] = v; hash`). `each_with_object` returns the initialized object automatically.',
          bn: 'এর মাধ্যমে কোড পরিষ্কার থাকে এবং ব্লক থেকে ভুল মান রিটার্ন করার ঝুঁকি দূর হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'symbols-and-the-string',
    title: {
      en: 'Symbols vs Strings, Memory Interning & UTF-8 Encoding',
      bn: 'সিম্বল বনাম স্ট্রিং, মেমোরি ইন্টার্নিং এবং UTF-8 এনকোডিং'
    }
  }
};
