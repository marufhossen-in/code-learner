import type { Lesson } from '../../../lib/types';

export const LinqAndTheQueryLesson: Lesson = {
  slug: 'linq-and-the-query',
  tech: 'csharp',
  title: {
    en: 'LINQ & Declarative Data Pipelines',
    bn: 'LINQ এবং ডিক্ল্যারেটিভ ডেটা পাইপলাইন'
  },
  summary: {
    en: 'Master Language Integrated Query (LINQ) in C#. Construct expressive fluent pipelines with Where, Select, and GroupBy, understand deferred execution mechanics over IEnumerable, and distinguish in-memory processing from remote IQueryable database queries.',
    bn: 'C#-এ Language Integrated Query (LINQ) আয়ত্ত করুন। Where, Select এবং GroupBy দিয়ে শক্তিশালী পাইপলাইন তৈরি করুন, IEnumerable এর ডিফার্ড এক্সিকিউশন বুঝুন এবং ইন-মেমোরি প্রসেসিং বনাম রিমোট IQueryable ডেটাবেস কুয়েরির পার্থক্য জানুন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'declarative-queries-and-deferred-execution-heading',
      text: {
        en: 'Declarative Data Pipelines and Deferred Execution',
        bn: 'ডিক্ল্যারেটিভ ডেটা পাইপলাইন এবং ডিফার্ড এক্সিকিউশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Before C# 3.0, filtering and transforming collections required writing repetitive nested loops, temporary lists, and mutable accumulator variables. Language Integrated Query (LINQ) revolutionized data processing by introducing a declarative, type-safe query language directly into C#. Instead of imperative for-loops, developers compose fluent method chains using operators like Where, Select, and OrderBy. Crucially, most LINQ query operators utilize "deferred execution". Constructing a query pipeline allocates only lightweight iterator objects without processing any elements. The actual computation and filtering happen lazily only when you enumerate the sequence using foreach, ToList, or Count.',
        bn: 'C# ৩.০ সংস্করণের পূর্বে কালেকশন ফিল্টারিং বা রূপান্তরের জন্য বারবার নেস্টেড লুপ, অস্থায়ী তালিকা এবং পরিবর্তনশীল ভেরিয়েবল লিখতে হতো। Language Integrated Query (LINQ) সরাসরি C#-এর ভেতর একটি টাইপ-নিরাপদ ডিক্ল্যারেটিভ কুয়েরি ব্যবস্থা যুক্ত করে ডেটা প্রসেসিংয়ে আমূল পরিবর্তন আনে। আজ্ঞাসূচক লুপের বদলে ডেভেলপাররা Where, Select এবং OrderBy মেথড চেইনিং করে স্বচ্ছ পাইপলাইন তৈরি করেন। সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো, বেশিরভাগ LINQ অপারেটর "deferred execution" বা বিলম্বিত সম্পাদন নীতি মেনে চলে। একটি কুয়েরি পাইপলাইন লিখলেই সাথে সাথে উপাদানগুলো প্রসেস হয় না; বরং যখন আপনি foreach, ToList বা Count দিয়ে লুপ চালান, তখনই কেবল ধাপে ধাপে আসল গণনা সম্পন্ন হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural pipeline of LINQ execution: From source collection through deferred iterator chains, lazy yield filtering, and terminal materialization.',
        bn: 'চিত্র ১: LINQ এক্সিকিউশন আর্কিটেকচার: মূল কালেকশন থেকে ডিফার্ড ইটারেটর শৃঙ্খল, অলস ফিল্টারিং এবং টার্মিনাল মেথডে ডেটা ধারণ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">LINQ PIPELINE ARCHITECTURE: DEFERRED QUERY TO CONSUMPTION</text>

  <!-- Step 1: Source Collection -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Source Data</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">List&lt;Product&gt;</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">In-Memory or Remote</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">IEnumerable&lt;T&gt;</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Input Sequence</text>
  </g>

  <!-- Step 2: Query Definition -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Fluent Pipeline</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">.Where(p =&gt; p.Active)</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">.Select(p =&gt; p.Price)</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Zero Processing Yet</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Deferred Iterator Tree</text>
  </g>

  <!-- Step 3: Lazy Evaluation -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Lazy Pull</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">IEnumerator.MoveNext</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Pulls 1 Element at a time</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">yield return match</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Streaming Iteration</text>
  </g>

  <!-- Step 4: Materialization -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Terminal Sink</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">.ToList() / .Sum()</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Allocates Result</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Pipeline Completes</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Concrete Collection</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'ienumerable-vs-iqueryable-heading',
      text: {
        en: 'IEnumerable vs IQueryable and Multiple Enumeration Pitfalls',
        bn: 'IEnumerable বনাম IQueryable এবং একাধিকবার লুপের ঝুঁকি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A foundational skill in C# architecture is distinguishing IEnumerable from IQueryable. IEnumerable operates in application memory using compiled .NET delegates: calling Where loads all records into RAM first and filters them locally. In contrast, IQueryable represents an Abstract Syntax Tree (Expression Tree). LINQ providers (such as Entity Framework Core) inspect the expression tree and translate it into native database queries like SQL before hitting the database server. Furthermore, developers must guard against the "multiple enumeration" anti-pattern: iterating an unmaterialized deferred query multiple times re-executes the underlying pipeline repeatedly, causing performance bottlenecks.',
        bn: 'C# আর্কিটেকচারে একটি অত্যন্ত গুরুত্বপূর্ণ দক্ষতা হলো IEnumerable এবং IQueryable এর মধ্যকার পার্থক্য অনুধাবন করা। IEnumerable মেমোরিতে থাকা ডেটার ওপর সাধারণ C# ডেলিগেট চালিয়ে কাজ করে: অর্থাৎ এটি ডেটাবেস থেকে সব রেকর্ড অ্যাপের মেমোরিতে এনে তারপর ফিল্টার করে। বিপরীতে, IQueryable একটি Expression Tree ধারণ করে। Entity Framework Core এর মতো প্রোভাইডার এই এক্সপ্রেশন ট্রি বিশ্লেষণ করে ডেটাবেসে পৌঁছানোর আগেই নিখুঁত এসকিউএল কুয়েরিতে রূপান্তর করে, ফলে অপ্রয়োজনীয় ডেটা মেমোরিতে আসে না। তাছাড়া ডেভেলপারদের "multiple enumeration" এর ভুল সম্পর্কে সতর্ক থাকতে হয়: কুয়েরিকে ToList না করে বারবার লুপ চালালে প্রতিবার পেছনের পুরো প্রসেস নতুন করে রান করে সিস্টেমের গতি কমিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of a deferred LINQ pipeline showing lazy iterator evaluation, filtering, transformation, and terminal materialization.',
        bn: 'LINQ ডিফার্ড পাইপলাইন, অলস ইটারেটর মূল্যায়ন, ফিল্টারিং এবং টার্মিনাল মেথডের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of C# LINQ Fluent Pipeline with Deferred Execution

export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

export class LinqPipelineSimulator<T> {
  constructor(private source: T[], private operations: ((item: T) => boolean | any)[] = []) {}

  // Simulating deferred .Where(predicate)
  public where(predicate: (item: T) => boolean): LinqPipelineSimulator<T> {
    console.log('[LINQ] Registered .Where() filter (Deferred - not yet evaluated)');
    const copyOps = [...this.operations, (x: T) => (predicate(x) ? x : null)];
    return new LinqPipelineSimulator(this.source, copyOps);
  }

  // Simulating terminal .toList() that forces materialization
  public toList(): T[] {
    console.log('[LINQ] Executing terminal .ToList() - Enumerating source collection');
    const result: T[] = [];
    for (const item of this.source) {
      let current: any = item;
      for (const op of this.operations) {
        current = op(current);
        if (current === null) break;
      }
      if (current !== null) result.push(current);
    }
    return result;
  }

  // Simulating terminal .sum() aggregator
  public sum(selector: (item: T) => number): number {
    const list = this.toList();
    return list.reduce((acc, curr) => acc + selector(curr), 0);
  }
}

// Sample dataset
const catalog: Product[] = [
  { id: 1, name: 'Mechanical Keyboard', price: 120, inStock: true },
  { id: 2, name: 'Ergonomic Mouse', price: 80, inStock: false },
  { id: 3, name: '4K IPS Monitor', price: 400, inStock: true }
];

// Constructing deferred pipeline
const query = new LinqPipelineSimulator(catalog)
  .where(p => p.inStock)
  .where(p => p.price >= 100);

// Evaluation happens only upon terminal invocation
const activeProducts = query.toList();
console.log('Materialized In-Stock Count:', activeProducts.length); // 2
console.log('First Active Product Name:', activeProducts[0].name); // "Mechanical Keyboard"

// Aggregating sum of active prices
const totalActiveValue = query.sum(p => p.price);
console.log('Total Inventory Value ($):', totalActiveValue); // 520`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'LINQ',
          def: {
            en: 'Language Integrated Query providing declarative, type-safe data manipulation over in-memory collections and remote databases.',
            bn: 'C#-এর নিজস্ব কুয়েরি প্রযুক্তি যা ইন-মেমোরি ডেটা ও রিমোট ডেটাবেসে টাইপ-নিরাপদ ডেটা প্রক্রিয়াকরণ সুবিধা দেয়।'
          }
        },
        {
          term: 'Deferred Execution',
          def: {
            en: 'The execution model where a query is evaluated only when its elements are enumerated, not when the query is constructed.',
            bn: 'কাজের ধরণ যেখানে কুয়েরি লেখার সাথে সাথে রান হয় না, বরং ডেটার ওপর লুপ চালালে তবেই কার্যকর হয়।'
          }
        },
        {
          term: 'IEnumerable<T>',
          def: {
            en: 'The fundamental interface for in-memory forward-only iteration using compiled C# delegates.',
            bn: 'মেমোরিতে থাকা অবজেক্টের ওপর C# ডেলিগেট ব্যবহার করে ক্রমান্বয়ে লুপ চালানোর মূল ইন্টারফেস।'
          }
        },
        {
          term: 'IQueryable<T>',
          def: {
            en: 'An expression tree interface translated by LINQ providers into remote queries such as SQL executed on database servers.',
            bn: 'এক্সপ্রেশন ট্রি ইন্টারফেস যা Entity Framework দিয়ে ডেটাবেসের আসল এসকিউএল কুয়েরিতে রূপান্তরিত হয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'linq-deferred-execution-timing-ex1',
      kind: 'mcq',
      topic: 'linq-deferred-execution-timing',
      question: {
        en: 'When is a deferred LINQ query actually executed against the source collection?',
        bn: 'একটি ডিফার্ড LINQ কুয়েরি আসলে কখন মূল কালেকশনের ওপর কার্যকর হয়?'
      },
      options: [
        {
          en: 'When the query sequence is enumerated, such as during a foreach loop or when calling a terminal method like ToList() or Count()',
          bn: 'যখন কুয়েরির ওপর লুপ চালানো হয়, যেমন foreach লুপের সময় অথবা ToList() বা Count() এর মতো টার্মিনাল মেথড কল করলে'
        },
        {
          en: 'Immediately on the exact line where the query variable is defined',
          bn: 'ঠিক যে লাইনে কুয়েরি ভেরিয়েবলটি লেখা হয় সাথে সাথে সেই লাইনেই'
        },
        {
          en: 'Only when the computer is completely powered off',
          bn: 'কম্পিউটার সম্পূর্ণ বন্ধ করার সময়'
        },
        {
          en: 'LINQ queries never execute under any circumstances',
          bn: 'LINQ কুয়েরি কোনো অবস্থাতেই কখনো কার্যকর হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Deferred queries evaluate lazily when iterated or materialized.',
        bn: 'ডিফার্ড কুয়েরি লেখার সময় নয়, বরং লুপ বা টার্মিনাল মেথড দিয়ে পড়ার সময় রান করে।'
      },
      explanation: {
        en: 'LINQ methods return iterator objects. Query evaluation is deferred until an enumerator actively pulls elements.',
        bn: 'LINQ কেবল ইটারেটর তৈরি করে রাখে; ডেটা চাওয়া হলে তবেই লুপ চালিয়ে ফলাফল প্রস্তুত করে।'
      }
    },
    {
      id: 'ienumerable-vs-iqueryable-sql-ex2',
      kind: 'mcq',
      topic: 'ienumerable-vs-iqueryable-sql-translation',
      question: {
        en: 'What critical architectural advantage does IQueryable offer over IEnumerable when querying remote relational databases using Entity Framework Core?',
        bn: 'Entity Framework Core দিয়ে দূরবর্তী ডেটাবেসে কুয়েরি করার সময় IEnumerable-এর চেয়ে IQueryable কোন অত্যন্ত গুরুত্বপূর্ণ সুবিধা দেয়?'
      },
      options: [
        {
          en: 'IQueryable compiles the query into an Expression Tree translated into optimized SQL executed on the database server, returning only matching rows over the network',
          bn: 'IQueryable কুয়েরিকে একটি Expression Tree-তে রূপান্তর করে ডেটাবেস সার্ভারে অপটিমাইজড এসকিউএল হিসেবে চালায়, ফলে কেবল কাঙ্ক্ষিত রেকর্ডগুলোই নেটওয়ার্কে আসে'
        },
        {
          en: 'IQueryable converts the database table into an MP3 audio recording',
          bn: 'IQueryable পুরো ডেটাবেস টেবিলকে অডিও গানে রূপান্তর করে'
        },
        {
          en: 'IQueryable downloads the entire database hard drive onto the local laptop',
          bn: 'IQueryable পুরো ডেটাবেস হার্ডডিস্ক ল্যাপটপে ডাউনলোড করে নেয়'
        },
        {
          en: 'IEnumerable and IQueryable are identical with zero differences',
          bn: 'IEnumerable এবং IQueryable অবিকল একই এবং এদের মাঝে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'IQueryable passes expression trees to the database provider to produce server-side SQL.',
        bn: 'IQueryable সার্ভার-সাইড এসকিউএল তৈরি করে যাতে অপ্রয়োজনীয় ডেটা ক্লায়েন্টে না আসে।'
      },
      explanation: {
        en: 'IQueryable translates filters into SQL executed by the database. IEnumerable executes filters locally in client memory after downloading all rows.',
        bn: 'ডেটাবেসেই ফিল্টারিং সম্পন্ন হওয়ায় নেটওয়ার্ক ব্যান্ডউইথ এবং ক্লায়েন্ট মেমোরি বিপুল পরিমাণে বাঁচে।'
      }
    },
    {
      id: 'linq-multiple-enumeration-trap-ex3',
      kind: 'mcq',
      topic: 'linq-multiple-enumeration-performance-cost',
      question: {
        en: 'What performance defect occurs if an unmaterialized LINQ query is iterated across multiple consecutive foreach loops?',
        bn: 'যদি কোনো সেভ না করা (unmaterialized) LINQ কুয়েরির ওপর একের পর এক একাধিকবার foreach লুপ চালানো হয়, তবে কোন পারফরম্যান্স সমস্যা ঘটে?'
      },
      options: [
        {
          en: 'Multiple enumeration: the entire query logic and all underlying filters are re-executed from scratch on each loop, potentially triggering duplicate database queries',
          bn: 'মাল্টিপল এনামারেশন: প্রতিবার লুপ চলার সময় পুরো কুয়েরি নতুন করে শুরু থেকে রান করে, যা ডেটাবেসে অপ্রয়োজনীয় ডুপ্লিকেট কুয়েরি পাঠিয়ে গতি কমায়'
        },
        {
          en: 'The compiler deletes the source files from the operating system',
          bn: 'কম্পাইলার অপারেটিং সিস্টেম থেকে সোর্স ফাইল মুছে ফেলে'
        },
        {
          en: 'All numbers in the sequence are multiplied by 100',
          bn: 'সিকোয়েন্সের সমস্ত সংখ্যা ১০০ দিয়ে গুণ হয়ে যায়'
        },
        {
          en: 'Multiple enumeration is impossible in C#',
          bn: 'C#-এ একাধিকবার লুপ চালানো প্রযুক্তিগতভাবে অসম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'Call .ToList() if you plan to iterate an IEnumerable sequence more than once.',
        bn: 'একাধিকবার লুপ চালানোর দরকার হলে কুয়েরির শেষে .ToList() কল করে ডেটা মেমোরিতে ধরে রাখুন।'
      },
      explanation: {
        en: 'Because deferred queries do not cache results, each enumeration re-runs the pipeline. Materialize with ToList() to cache results in memory.',
        bn: 'ডিফার্ড কুয়েরি ফলাফল ক্যাশ করে না; তাই বারবার লুপ চালাতে চাইলে ToList() দিয়ে মেমোরিতে রাখা আবশ্যক।'
      }
    },
    {
      id: 'linq-select-projection-operator-ex4',
      kind: 'mcq',
      topic: 'linq-select-transformation-projection',
      question: {
        en: 'Which LINQ operator is used to project and transform each incoming element of a sequence into a new shape or type?',
        bn: 'কোন LINQ অপারেটরটি সিকোয়েন্সের প্রতিটি উপাদানকে একটি নতুন রূপ বা ডেটা টাইপে রূপান্তর (project) করতে ব্যবহৃত হয়?'
      },
      options: [
        { en: 'Select', bn: 'Select মেথড' },
        { en: 'Where', bn: 'Where মেথড' },
        { en: 'OrderBy', bn: 'OrderBy মেথড' },
        { en: 'Distinct', bn: 'Distinct মেথড' }
      ],
      answer: 0,
      hint: {
        en: 'Select transforms elements (e.g. .Select(x => x.Name)).',
        bn: 'Select মেথড উপাদানগুলোর আকার বদলে কাঙ্ক্ষিত ফিল্ড বের করে নেয়।'
      },
      explanation: {
        en: 'Select performs projection, mapping input elements through a selector function into a new output sequence.',
        bn: 'Select এর মাধ্যমে অবজেক্ট থেকে নির্দিষ্ট ফিল্ড বেছে নিয়ে নতুন কালেকশন প্রস্তুত করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-linq-and-the-query',
    title: {
      en: 'C# LINQ Mastery & Query Performance Quiz',
      bn: 'C# LINQ এবং কুয়েরি পারফরম্যান্স কুইজ'
    },
    questions: [
      {
        id: 'quiz-selectmany-flattening-collections',
        kind: 'mcq',
        topic: 'selectmany-flattens-nested-collections',
        question: {
          en: 'What does the SelectMany operator do when invoked on a sequence of objects where each object contains a child collection?',
          bn: 'যখন কোনো সিকোয়েন্সের প্রতিটি অবজেক্টের ভেতরে একটি চাইল্ড কালেকশন থাকে, তখন SelectMany অপারেটর চালালে কী ঘটে?'
        },
        options: [
          {
            en: 'It projects each child collection and flattens them into a single, unified one-dimensional sequence',
            bn: 'এটি প্রতিটি চাইল্ড কালেকশনকে বের করে এনে সেগুলোকে একটি একক একমাত্রিক সমতল সিকোয়েন্সে একীভূত (flatten) করে'
          },
          {
            en: 'It deletes all child collections permanently',
            bn: 'এটি সমস্ত চাইল্ড কালেকশন চিরতরে মুছে ফেলে'
          },
          {
            en: 'It encrypts the list with a user password',
            bn: 'এটি পুরো তালিকাকে পাসওয়ার্ড দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'SelectMany can only be used with numbers',
            bn: 'SelectMany কেবল সংখ্যার সাথেই ব্যবহার করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'SelectMany flattens nested sequences into one list.',
          bn: 'নেস্টেড তালিকাগুলোকে সমতল করে একটিমাত্র তালিকায় রূপান্তর করাই SelectMany এর কাজ।'
        },
        explanation: {
          en: 'SelectMany maps each source element to an IEnumerable and flattens the resulting child collections into a single sequence.',
          bn: 'তালিকার ভেতরের তালিকাকে ভেঙে একটি সাধারণ সোজা তালিকায় নিয়ে আসতে SelectMany অত্যন্ত উপযোগী।'
        }
      },
      {
        id: 'quiz-linq-first-vs-firstordefault',
        kind: 'mcq',
        topic: 'first-vs-firstordefault-exception-safety',
        question: {
          en: 'What is the critical behavioral difference between ".First()" and ".FirstOrDefault()" when no element matches the specified predicate?',
          bn: 'শর্তের সাথে কোনো উপাদান না মিললে ".First()" এবং ".FirstOrDefault()" এর আচরণের মধ্যে মারাত্মক পার্থক্য কী?'
        },
        options: [
          {
            en: '.First() throws an InvalidOperationException if the sequence is empty or has no match, whereas .FirstOrDefault() returns the type default value (e.g. null or 0) safely',
            bn: '.First() কোনো মিল না পেলে তাৎক্ষণিকভাবে InvalidOperationException ছুড়ে দেয়, আর .FirstOrDefault() কোনো এরর না দিয়ে নিরাপদে ডিফল্ট মান (যেমন null বা ০) ফেরত দেয়'
          },
          {
            en: '.First() shuts down the web server immediately',
            bn: '.First() ওয়েব সার্ভার অবিলম্বে বন্ধ করে দেয়'
          },
          {
            en: '.FirstOrDefault() only works on Tuesdays',
            bn: '.FirstOrDefault() শুধুমাত্র মঙ্গলবারে কাজ করে'
          },
          {
            en: 'Both methods behave identically in modern C#',
            bn: 'আধুনিক C#-এ উভয় মেথড হুবহু একই আচরণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: '.First() throws on empty sequences; .FirstOrDefault() returns default(T).',
          bn: '.First() মিল না পেলে ক্র্যাশ করে; .FirstOrDefault() নিরাপদ ডিফল্ট মান দেয়।'
        },
        explanation: {
          en: 'Always use FirstOrDefault() when an element may not exist to avoid uncaught InvalidOperationExceptions.',
          bn: 'উপাদান অনুপস্থিত থাকার সম্ভাবনা থাকলে ক্র্যাশ এড়াতে সর্বদা FirstOrDefault() ব্যবহার করা উচিত।'
        }
      },
      {
        id: 'quiz-plinq-parallel-query-execution',
        kind: 'mcq',
        topic: 'plinq-parallel-linq-multithreading',
        question: {
          en: 'What does calling ".AsParallel()" on a LINQ query sequence achieve through PLINQ (Parallel LINQ)?',
          bn: 'একটি LINQ কুয়েরি সিকোয়েন্সের ওপর ".AsParallel()" মেথড কল করলে PLINQ এর মাধ্যমে কী সুবিধা অর্জিত হয়?'
        },
        options: [
          {
            en: 'It partitions the in-memory data across multiple CPU cores, executing query filters and transformations concurrently on background thread pool workers',
            bn: 'এটি মেমোরির ডেটাকে একাধিক সিপিইউ কোরে ভাগ করে দেয় এবং ব্যাকগ্রাউন্ড থ্রেড পুলে সমান্তরালভাবে (parallel) কুয়েরি প্রসেস করে'
          },
          {
            en: 'It connects the computer to a blockchain network',
            bn: 'এটি কম্পিউটারকে একটি ব্লকচেইন নেটওয়ার্কে যুক্ত করে'
          },
          {
            en: 'It limits execution to exactly 1 thread',
            bn: 'এটি কাজকে ঠিক ১ টি থ্রেডে সীমাবদ্ধ রাখে'
          },
          {
            en: 'PLINQ is a deprecated technology that no longer compiles',
            bn: 'PLINQ একটি বাতিল প্রযুক্তি যা এখন আর কম্পাইল হয় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'PLINQ leverages multi-core processors for parallel computations.',
          bn: 'PLINQ প্রসেসরের সব কোর ব্যবহার করে বিশাল ডেটাকে সমান্তরালে দ্রুত প্রসেস করে।'
        },
        explanation: {
          en: 'PLINQ partitions the source collection across multiple threads, accelerating heavy compute-bound data processing on multi-core systems.',
          bn: 'ভারী গাণিতিক বা ফিল্টারিং কাজে প্রসেসরের পূর্ণ শক্তি কাজে লাগাতে PLINQ অপরিহার্য।'
        }
      },
      {
        id: 'quiz-linq-to-sql-expression-tree-translation',
        kind: 'mcq',
        topic: 'expression-trees-sql-translation-limitations',
        question: {
          en: 'Why does invoking a custom C# method inside an Entity Framework Core IQueryable lambda often trigger a runtime exception during query translation?',
          bn: 'Entity Framework Core-এর IQueryable ল্যাম্বডার ভেতর একটি নিজস্ব C# মেথড কল করলে কুয়েরি অনুবাদের সময় কেন রানটাইম এরর ঘটে?'
        },
        options: [
          {
            en: 'Because the LINQ provider must translate the Expression Tree into valid SQL; it cannot translate arbitrary custom C# method bytecodes into SQL without a server-side equivalent',
            bn: 'কারণ LINQ প্রোভাইডারকে এক্সপ্রেশন ট্রি থেকে আসল এসকিউএল বানাতে হয়; কিন্তু নিজস্ব C# মেথডের কোডকে ডেটাবেসের উপযোগী এসকিউএলে অনুবাদ করার কোনো উপায় থাকে না'
          },
          {
            en: 'Because SQL databases do not support mathematical operations',
            bn: 'কারণ এসকিউএল ডেটাবেস কোনো গাণিতিক হিসাব সমর্থন করে না'
          },
          {
            en: 'Because custom methods are deleted during compilation',
            bn: 'কারণ কম্পাইল করার সময় কাস্টম মেথডগুলো মুছে যায়'
          },
          {
            en: 'C# methods always work inside SQL queries without issue',
            bn: 'C# মেথড সবসময় এসকিউএল কুয়েরিতে কোনো সমস্যা ছাড়াই চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Database LINQ providers can only translate expressions that map to native SQL functions.',
          bn: 'ডেটাবেস কেবল সেই কাজগুলো করতে পারে যার সমতুল্য কোনো এসকিউএল কমান্ড আছে।'
        },
        explanation: {
          en: 'EF Core cannot inspect compiled method bodies to produce SQL. To invoke custom C# code, materialize the data in memory first with AsEnumerable() or ToList().',
          bn: 'কাস্টম কোড চালাতে চাইলে আগে ToList() দিয়ে ডেটা মেমোরিতে এনে তারপর সেই মেথড কল করতে হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'async-and-the-await',
    title: {
      en: 'Async, Await & Task Parallel Library',
      bn: 'Async, Await এবং Task Parallel লাইব্রেরি'
    }
  }
};
