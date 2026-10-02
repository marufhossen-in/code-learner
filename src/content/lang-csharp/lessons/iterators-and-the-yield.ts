import type { Lesson } from '../../../lib/types';

export const IteratorsAndTheYieldLesson: Lesson = {
  slug: 'iterators-and-the-yield',
  tech: 'lang-csharp',
  title: {
    en: 'Iterators, State Machines & "yield return"',
    bn: 'ইটারেটরস, স্টেট মেশিন এবং "yield return"'
  },
  summary: {
    en: 'Explore lazy evaluation and streaming in C# using iterators. Master compiler state-machine generation with "yield return" and "yield break", understand IEnumerable and IEnumerator contracts, avoid the multiple enumeration pitfall, and compare synchronous iterators with C# 8 IAsyncEnumerable.',
    bn: 'C#-এ ইটারেটরের সাহায্যে লেজি মূল্যায়ন এবং স্ট্রিমিং আয়ত্ত করুন। "yield return" ও "yield break" দিয়ে কম্পাইলারের স্টেট-মেশিন জেনারেশন, IEnumerable ও IEnumerator-এর ইন্টারফেস চুক্তি, একাধিকবার লুপ চালানোর বিপদ এবং সিঙ্ক্রোনাস ইটারেটরের সাথে C# ৮ IAsyncEnumerable-এর তুলনা।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'iterators-and-state-machine-heading',
      text: {
        en: 'Iterators, Lazy Evaluation, and Roslyn State Machines',
        bn: 'ইটারেটরস, লেজি মূল্যায়ন এবং Roslyn স্টেট মেশিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In C# (the managed object-oriented language), iterators empower developers to stream large data sequences without pre-allocating entire collections in memory. When a method returns "IEnumerable<T>" using the "yield return" keyword, execution is deferred lazily. Calling the method executes zero lines of code initially. Instead, the Roslyn compiler synthesizes a hidden state-machine class implementing IEnumerable<T> and IEnumerator<T>. Each time a consumer invokes "MoveNext()", the state machine resumes execution at the exact statement where it previously paused, yields the current value, and suspends execution until the next item is requested.',
        bn: 'আধুনিক C# (ম্যানেজড অবজেক্ট-ওরিয়েন্টেড ভাষা) ইটারেটরের মাধ্যমে মেমোরিতে বিশাল ডেটা তৈরি না করেই আইটেমগুলোকে ধীরে ধীরে স্ট্রিম করার সুবিধা দেয়। যখন কোনো মেথড "yield return" কিওয়ার্ড দিয়ে "IEnumerable<T>" ফেরত দেয়, তখন এক্সিকিউশন তাৎক্ষণিকভাবে ঘটে না বরং লেজি (lazy) অবস্থায় থাকে। মেথডটি কল করার সাথে সাথে ভেতরের কোনো কোড চলে না। এর পরিবর্তে Roslyn কম্পাইলার একটি গোপন স্টেট-মেশিন ক্লাস তৈরি করে যা IEnumerable<T> এবং IEnumerator<T> বাস্তবায়ন করে। প্রতিবার কলার "MoveNext()" কল করলে স্টেট মেশিন ঠিক আগের থামার স্থান থেকে কোড চালানো শুরু করে, বর্তমান মান সরবরাহ করে এবং পুনরায় পরের কলের অপেক্ষা করে থেমে থাকে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 4-phase execution lifecycle of a C# "yield return" compiler-synthesized state machine.',
        bn: 'চিত্র ১: C# "yield return" কম্পাইলার স্টেট মেশিনের ৪-ধাপের কার্যচক্র।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">ROSLYN ITERATOR STATE MACHINE EXECUTION CYCLE</text>

  <!-- Step 1: Initial Call -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Method Call</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">var seq = GetNums();</text>
    <text x="15" y="85" fill="#38bdf8" font-size="8" font-family="monospace">Zero Lines Executed</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">State: 0 (Created)</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Deferred Execution</text>
  </g>

  <!-- Step 2: MoveNext 1 -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. MoveNext() #1</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">yield return 10;</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Current = 10; return true;</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">State: 1 (Suspended)</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">First Item Yielded</text>
  </g>

  <!-- Step 3: MoveNext 2 -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. MoveNext() #2</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">yield return 20;</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Current = 20; return true;</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">State: 2 (Suspended)</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Resumes at Yield Line</text>
  </g>

  <!-- Step 4: Completion -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Completion</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">yield break;</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">returns false;</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">State: -1 (Disposed)</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Stream Cleanly Closed</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'multiple-enumeration-and-async-enumerable-heading',
      text: {
        en: 'Multiple Enumeration Pitfall and C# 8 IAsyncEnumerable',
        bn: 'একাধিকবার লুপ চালানোর বিপদ এবং C# ৮ IAsyncEnumerable'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because iterators evaluate lazily, a frequent performance defect in C# codebases is "multiple enumeration". If code passes an iterator to multiple LINQ methods (such as "if (items.Any()) return items.First();"), the entire iterator state machine and its underlying queries re-execute from scratch on every call. If items need repeated access, developers must materialize them using ".ToList()". In C# 8, Microsoft introduced "IAsyncEnumerable<T>" to bridge iterators with asynchronous pipelines. Combining "yield return" with async/await, IAsyncEnumerable enables services to stream records asynchronously across network sockets without blocking execution threads.',
        bn: 'যেহেতু ইটারেটরগুলো লেজি মূল্যায়নের ওপর চলে, তাই C# কোডবেসে প্রায়ই "মাল্টিপল এনিউমারেশন" নামের মারাত্মক পারফরম্যান্স বাগ দেখা দেয়। কোনো মেথড যদি একটি ইটারেটরকে বারবার ব্যবহার করে (যেমন "if (items.Any()) return items.First();"), তবে প্রতিবার সম্পূর্ণ স্টেট মেশিন এবং পেছনের কুয়েরিগুলো প্রথম থেকে পুনরায় রান হয়। বারবার ডেটা ব্যবহারের প্রয়োজন হলে ".ToList()" দিয়ে মেমোরিতে সংরক্ষণ করে নিতে হয়। C# ৮ সংস্করণে মাইক্রোসফট "IAsyncEnumerable<T>" প্রবর্তন করেছে। এটি "yield return"-এর সাথে async/await যুক্ত করে নেটওয়ার্ক বা ডেটাবেস থেকে কোনো থ্রেড ব্লক না করেই অ্যাসিঙ্ক্রোনাসভাবে ডেটা স্ট্রিম করার সুযোগ দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of C# compiler iterator state machine: Tracking MoveNext(), Current state transitions, and lazy evaluation.',
        bn: 'C# কম্পাইলার ইটারেটর স্টেট মেশিন, MoveNext(), Current স্টেট পরিবর্তন এবং লেজি মূল্যায়নের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of C# Compiler-Synthesized Iterator State Machine

export class RangeIteratorStateMachine {
  private state: number = 0; // 0 = Created, 1 = Running, -1 = Disposed
  private currentItem: number = 0;
  private currentStep: number = 0;

  constructor(private start: number, private count: number) {}

  // Simulating IEnumerator<int>.MoveNext()
  public moveNext(): boolean {
    switch (this.state) {
      case 0:
        this.state = 1;
        this.currentStep = 0;
        // Fall through to evaluate first element
      case 1:
        if (this.currentStep < this.count) {
          this.currentItem = this.start + this.currentStep * 10;
          this.currentStep += 1;
          return true; // yield return
        }
        // Enumeration complete (yield break)
        this.state = -1;
        return false;
      default:
        return false;
    }
  }

  // Simulating IEnumerator<int>.Current
  public get current(): number {
    return this.currentItem;
  }
}

// Execution demonstration
const iterator = new RangeIteratorStateMachine(10, 3);
console.log('[Iterator] Initialized with start: 10, count: 3');

// Simulating C# "foreach (var item in GetNumbers())"
const collected: number[] = [];
while (iterator.moveNext()) {
  collected.push(iterator.current);
  console.log('[Yielded Item]', iterator.current);
}

console.log('Total Items Materialized:', collected.length); // 3
console.log('Final Iterator Output Array:', collected.join(', ')); // 10, 20, 30`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Iterator',
          def: {
            en: 'Method using "yield return" to synthesize an on-demand enumerable sequence without pre-allocating memory.',
            bn: 'মেথড যা "yield return" ব্যবহার করে কোনো মেমোরি খরচ না করে চাহিদা মাফিক আইটেম তৈরি করে দেয়।'
          }
        },
        {
          term: 'Lazy Evaluation',
          def: {
            en: 'Evaluation strategy where code execution is deferred until the result value is explicitly requested by a consumer.',
            bn: 'কাজের পদ্ধতি যেখানে কলার মান না চাওয়া পর্যন্ত কোনো কোড এক্সিকিউট করা হয় না।'
          }
        },
        {
          term: 'Multiple Enumeration',
          def: {
            en: 'Performance pitfall where an un-materialized iterator is iterated more than once, re-executing query pipelines.',
            bn: 'পারফরম্যান্স ভুল যেখানে একটি লেজি ইটারেটরকে মেমোরিতে সেভ না করে বারবার চালিয়ে সময় নষ্ট করা হয়।'
          }
        },
        {
          term: 'IAsyncEnumerable',
          def: {
            en: 'Interface introduced in C# 8 allowing asynchronous on-demand streaming of items using "await foreach".',
            bn: 'C# ৮-এর ইন্টারফেস যা "await foreach" দিয়ে নন-ব্লকিং পদ্ধতিতে নেটওয়ার্ক বা ডেটাবেস থেকে ডেটা আনে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'yield-return-lazy-deferred-ex1',
      kind: 'mcq',
      topic: 'yield-return-deferred-execution',
      question: {
        en: 'What occurs when calling a C# method defined as "public IEnumerable<int> GenerateNumbers() { ... }" containing "yield return"?',
        bn: '"yield return" সম্বলিত একটি C# মেথড "public IEnumerable<int> GenerateNumbers() { ... }" কল করলে তাৎক্ষণিকভাবে কী ঘটে?'
      },
      options: [
        {
          en: 'None of the method code executes immediately; the compiler instantiates an unstarted state machine and returns an IEnumerable reference ready for iteration',
          bn: 'মেথডের ভেতরের কোনো কোড সাথে সাথে চলে না; কম্পাইলার কেবল একটি অপ্রস্তুত স্টেট-মেশিন তৈরি করে কলারকে একটি IEnumerable রেফারেন্স ফেরত দেয়'
        },
        {
          en: 'The method calculates all numbers and writes them to a text file on disk',
          bn: 'মেথডটি সমস্ত সংখ্যা হিসাব করে ডিস্কের টেক্সট ফাইলে লিখে রাখে'
        },
        {
          en: 'The application reboots the web server immediately',
          bn: 'অ্যাপ্লিকেশন অবিলম্বে ওয়েব সার্ভার রিবুট করে দেয়'
        },
        {
          en: 'The compiler throws a MissingMethodException on line 1',
          bn: 'কম্পাইলার প্রথম লাইনে একটি MissingMethodException ছুড়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Iterators use deferred execution; code only runs when MoveNext() is called.',
        bn: 'লেজি এক্সিকিউশনের কারণে লুপ শুরু না হওয়া পর্যন্ত মেথডের ভেতরের কোনো কোডই রান করে না।'
      },
      explanation: {
        en: 'Iterators do not execute at invocation time. Execution only begins when a consumer calls MoveNext() (e.g. entering a foreach loop).',
        bn: 'এ কারণে বিশাল ডেটাসেট তৈরি করার সময় মেমোরি খরচ শূন্য থাকে এবং প্রয়োজন অনুযায়ী ডেটা প্রসেস হয়।'
      }
    },
    {
      id: 'multiple-enumeration-hazard-ex2',
      kind: 'mcq',
      topic: 'multiple-enumeration-performance-cost',
      question: {
        en: 'Why does ReSharper and the Roslyn analyzer warn against "Possible multiple enumeration of IEnumerable"?',
        bn: 'ReSharper এবং Roslyn অ্যানালাইজার কেন "Possible multiple enumeration of IEnumerable" ওয়ার্নিং প্রদর্শন করে?'
      },
      options: [
        {
          en: 'Iterating over an unmaterialized IEnumerable twice causes the entire underlying query, file stream, or database execution to repeat from scratch on every iteration',
          bn: 'একটি আন-ম্যাটেরিয়ালাইজড IEnumerable-এর ওপর দুবার লুপ চালালে পেছনের সমস্ত কুয়েরি, ফাইল রিড বা ডেটাবেস প্রসেসিং প্রতিবার শুরু থেকে পুনরায় রান হয়'
        },
        {
          en: 'It deletes the underlying collection from RAM permanently',
          bn: 'এটি মেমোরি থেকে পেছনের পুরো কালেকশনটি চিরতরে মুছে ফেলে'
        },
        {
          en: 'Multiple enumeration causes the CPU clock frequency to drop by 50 percent',
          bn: 'মাল্টিপল এনিউমারেশন প্রসেসরের কাজের গতি ৫০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'C# strictly forbids iterating any collection more than 1 time',
          bn: 'C#-এ যেকোনো কালেকশনে ১ বারের বেশি লুপ চালানো আইনত নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Iterating twice executes the state machine logic twice.',
        bn: 'লুপ দুবার চললে স্টেট মেশিনও দুবার চলে, যার ফলে ভারী ডেটাবেস কুয়েরি বারবার রান হয়ে সার্ভার ধীর করে দেয়।'
      },
      explanation: {
        en: 'If an iterator reads from a database or performs calculations, iterating it multiple times repeats all that expensive work. Use .ToList() to cache the items first.',
        bn: 'বারবার ব্যবহারের প্রয়োজন হলে শুরুতেই .ToList() বা .ToArray() করে মেমোরিতে ক্যাশ করে নেওয়া উচিত।'
      }
    },
    {
      id: 'yield-break-purpose-ex3',
      kind: 'mcq',
      topic: 'yield-break-early-stream-termination',
      question: {
        en: 'What is the function of the "yield break" statement inside a C# iterator method?',
        bn: 'একটি C# ইটারেটর মেথডের ভেতর "yield break" স্টেটমেন্টের কাজ কী?'
      },
      options: [
        {
          en: 'It terminates the iteration immediately, causing the underlying state machine to transition to the completed (-1) state and subsequent MoveNext() calls to return false',
          bn: 'এটি অবিলম্বে ইটারেশন সমাপ্ত করে, যার ফলে স্টেট মেশিন সমাপ্তির (-১) স্টেটে চলে যায় এবং পরবর্তী MoveNext() কলগুলো false ফেরত দেয়'
        },
        {
          en: 'It pauses iteration for 5 seconds before resuming',
          bn: 'এটি ৫ সেকেন্ড বিরতি দিয়ে আবার চালু হয়'
        },
        {
          en: 'It prints a stack trace to the console screen',
          bn: 'এটি স্ক্রিনে একটি স্ট্যাক ট্রেস প্রিন্ট করে'
        },
        {
          en: 'yield break reboots the computer operating system',
          bn: 'yield break কম্পিউটারের অপারেটিং সিস্টেম রিবুট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'yield break signals that the iterator has no more elements to yield.',
        bn: 'yield break জানায় যে ইটারেটরে দেওয়ার মতো আর কোনো আইটেম বাকি নেই।'
      },
      explanation: {
        en: 'While "yield return" yields an item and pauses, "yield break" stops enumeration permanently, mimicking an early exit from a loop.',
        bn: 'শর্তসাপেক্ষে আগেই স্ট্রিমিং বন্ধ করে দিতে এটি ব্যবহার করা হয়।'
      }
    },
    {
      id: 'iasyncenumerable-await-foreach-ex4',
      kind: 'mcq',
      topic: 'iasyncenumerable-async-streaming-csharp8',
      question: {
        en: 'How do modern C# 8 applications consume an "IAsyncEnumerable<T>" asynchronous stream without blocking worker threads?',
        bn: 'কোনো ওয়ার্কার থ্রেড ব্লক না করে আধুনিক C# ৮ অ্যাপ্লিকেশন কীভাবে একটি "IAsyncEnumerable<T>" স্ট্রিম থেকে ডেটা গ্রহণ করে?'
      },
      options: [
        {
          en: 'Using the "await foreach (var item in asyncStream)" syntax, asynchronously yielding the thread between items until the next element arrives',
          bn: '"await foreach (var item in asyncStream)" সিনট্যাক্স ব্যবহার করে, যা পরবর্তী আইটেম না আসা পর্যন্ত থ্রেডটিকে মুক্ত করে অ্যাসিঙ্ক্রোনাস অপেক্ষা করে'
        },
        {
          en: 'Calling Thread.Sleep(1000) inside a standard while loop',
          bn: 'একটি সাধারণ while লুপের ভেতর Thread.Sleep(1000) কল করে'
        },
        {
          en: 'By downloading the data using an FTP client application',
          bn: 'একটি এফটিপি ক্লায়েন্ট অ্যাপ দিয়ে ডেটা ডাউনলোড করে'
        },
        {
          en: 'IAsyncEnumerable can only be consumed on Windows 7',
          bn: 'IAsyncEnumerable কেবল উইন্ডোজ ৭-এ ব্যবহার করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Use "await foreach" to stream items asynchronously.',
        bn: '"await foreach" দিয়ে কোনো থ্রেড আটকে না রেখে সহজে ডেটা স্ট্রিম করা যায়।'
      },
      explanation: {
        en: 'IAsyncEnumerable uses ValueTask<bool> MoveNextAsync under the hood. "await foreach" yields the calling thread back to the thread pool while awaiting downstream items.',
        bn: 'এর ফলে হাজার হাজার ক্লায়েন্ট একসাথে ডেটা স্ট্রিম করলেও সার্ভারের থ্রেড সংকট হয় না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-iterators-and-the-yield',
    title: {
      en: 'C# Iterators & State Machine Architecture Quiz',
      bn: 'C# ইটারেটরস এবং স্টেট মেশিন আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'quiz-finally-blocks-in-iterators-disposal',
        kind: 'mcq',
        topic: 'finally-blocks-in-iterators-ienumerator-dispose',
        question: {
          en: 'When does a "finally" block inside a "yield return" iterator method actually execute if the consumer breaks out of a "foreach" loop early?',
          bn: 'যদি কোনো কলার "foreach" লুপের মাঝপথে "break" করে বের হয়ে যায়, তবে "yield return" ইটারেটরের ভেতরের "finally" ব্লকটি কখন এক্সিকিউট হয়?'
        },
        options: [
          {
            en: 'Foreach automatically invokes IEnumerator.Dispose(), which triggers the state machine\'s synthesized disposal logic to execute the enclosed "finally" block deterministically',
            bn: 'Foreach নিজে থেকেই IEnumerator.Dispose() কল করে, যা স্টেট মেশিনের ডিসপোজাল লজিককে সক্রিয় করে "finally" ব্লকটি অবিলম্বে চালিয়ে দেয়'
          },
          {
            en: 'The finally block is never executed if the loop exits early',
            bn: 'লুপ মাঝপথে শেষ হলে finally ব্লক আর কখনোই রান হয় না'
          },
          {
            en: 'It executes when the computer is shut down',
            bn: 'কম্পিউটার বন্ধ করার সময় এটি এক্সিকিউট হয়'
          },
          {
            en: 'Finally blocks are banned inside iterator methods in modern C#',
            bn: 'আধুনিক C# এ ইটারেটর মেথডের ভেতর finally ব্লক রাখা নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Foreach calls Dispose() on the enumerator, triggering the iterator\'s finally blocks.',
          bn: 'Foreach লুপ শেষে স্বয়ংক্রিয়ভাবে Dispose কল হওয়ায় রিসোর্স লিক হওয়ার কোনো ভয় থাকে না।'
        },
        explanation: {
          en: 'The state machine implements IDisposable. When a foreach breaks early, it disposes the enumerator, ensuring database connections or file streams in using/finally blocks close cleanly.',
          bn: 'ফাইল বা ডেটাবেস হ্যান্ডেল পরিচ্ছন্নভাবে বন্ধ রাখতে এটি অত্যন্ত গুরুত্বপূর্ণ মেকানিজম।'
        }
      },
      {
        id: 'quiz-enumeratorcancellation-token-propagation',
        kind: 'mcq',
        topic: 'enumeratorcancellation-attribute-token-passing',
        question: {
          en: 'What is the purpose of the "[EnumeratorCancellation]" attribute in an "async IAsyncEnumerable<T>" method signature?',
          bn: 'একটি "async IAsyncEnumerable<T>" মেথড সিগনেচারে "[EnumeratorCancellation]" অ্যাট্রিবিউটের উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'It binds the CancellationToken passed into the consumer\'s ".WithCancellation(token)" call directly into the iterator method\'s parameter, enabling graceful stream abortion',
            bn: 'এটি কলারের ".WithCancellation(token)" কল থেকে আসা ক্যানসেলেশন টোকেনটিকে সরাসরি মেথড প্যারামিটারে যুক্ত করে দেয়, ফলে মাঝপথে স্ট্রিমিং নিরাপদভাবে বাতিল করা যায়'
          },
          {
            en: 'It cancels the user\'s cloud subscription bill',
            bn: 'এটি ব্যবহারকারীর ক্লাউড সাবস্ক্রিপশন বিল বাতিল করে দেয়'
          },
          {
            en: 'It restarts the Windows operating system',
            bn: 'এটি উইন্ডোজ অপারেটিং সিস্টেম রিস্টার্ট করে'
          },
          {
            en: 'EnumeratorCancellation is exclusively used in unit tests',
            bn: 'EnumeratorCancellation কেবল ইউনিট টেস্টে ব্যবহৃত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: '[EnumeratorCancellation] propagates consumer cancellation tokens into async streams.',
          bn: 'ব্যবহারকারী স্ট্রিমিং থামাতে চাইলে সেই সিগন্যাল মেথডের ভেতরে পৌঁছাতে এটি ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'Without [EnumeratorCancellation], the token passed by the consumer to WithCancellation() is ignored by the iterator method body.',
          bn: 'ওয়েব ক্লায়েন্ট ব্রাউজার বন্ধ করে দিলে পেছনের ভারী কুয়েরি অবিলম্বে থামাতে এটি অত্যন্ত দরকারি।'
        }
      },
      {
        id: 'quiz-argument-validation-iterator-separation',
        kind: 'mcq',
        topic: 'argument-validation-iterator-wrapper-method',
        question: {
          en: 'Why do C# guidelines recommend splitting iterator methods into an outer validation wrapper method and a private local iterator function?',
          bn: 'C# নির্দেশিকায় কেন ইটারেটর মেথডকে একটি বহিরাগত ভ্যালিডেশন মেথড এবং একটি প্রাইভেট লোকাল ইটারেটর ফাংশনে ভাগ করার পরামর্শ দেওয়া হয়?'
        },
        options: [
          {
            en: 'Because an iterator method defers execution until MoveNext(); splitting it allows argument null checks (e.g. "if (source == null) throw") to fail fast immediately at invocation time',
            bn: 'কারণ ইটারেটর মেথড MoveNext() না ডাকা পর্যন্ত চলে না; আলাদা মেথড বানিয়ে নিলে আর্গুমেন্ট নাল চেক সাথে সাথে মেথড ডাকার মুহূর্তেই এরর দিয়ে ব্যর্থ হতে পারে'
          },
          {
            en: 'To make the C# code compatible with PHP servers',
            bn: 'C# কোডকে পিএইচপি সার্ভারের উপযোগী করতে'
          },
          {
            en: 'Because C# methods can only contain 3 lines of code',
            bn: 'কারণ C# মেথডে কেবল ৩ লাইন কোড লেখা যায়'
          },
          {
            en: 'Splitting is strictly required by the HTTP 2 protocol',
            bn: 'HTTP 2 প্রোটোকলে মেথড ভাগ করা বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Splitting ensures parameter validation happens immediately at call time, not when enumerated.',
          bn: 'ভুল ইনপুট দিলে লুপ ঘোরার অপেক্ষা না করে মেথড ডাকার সাথে সাথেই এরর দেওয়া প্রোগ্রামিংয়ের ভালো অভ্যাস।'
        },
        explanation: {
          en: 'If validation is placed inside a yield return method, throwing an ArgumentNullException is delayed until the caller enumerates. An outer non-iterator method throws immediately.',
          bn: 'কল করার সাথে সাথেই এরর শনাক্ত করতে এই দুই স্তরের মেথড লেখার প্যাটার্ন অনুসরণ করা হয়।'
        }
      },
      {
        id: 'quiz-cant-yield-inside-catch-blocks',
        kind: 'mcq',
        topic: 'yield-return-restrictions-catch-blocks',
        question: {
          en: 'Why does the C# compiler forbid placing a "yield return" statement inside a "catch" block or a "try" block with a catch handler?',
          bn: 'C# কম্পাইলার কেন কোনো "catch" ব্লকের ভেতর বা ক্যাচ হ্যান্ডলার যুক্ত "try" ব্লকের ভেতর "yield return" লেখার অনুমতি দেয় না?'
        },
        options: [
          {
            en: 'Because preserving the CLR exception handling call stack frame across execution suspensions and later MoveNext() resumptions is impossible without violating CLR runtime guarantees',
            bn: 'কারণ এক্সিকিউশন থামিয়ে রাখা এবং পরবর্তীতে পুনরায় চালু করার সময় এক্সেপশন হ্যান্ডলিং স্ট্যাক ফ্রেম অক্ষত রাখা CLR রানটাইমের নিয়মে সম্ভব নয়'
          },
          {
            en: 'Because catch blocks only accept integer variables',
            bn: 'কারণ catch ব্লক কেবল পূর্ণসংখ্যার ভেরিয়েবল গ্রহণ করে'
          },
          {
            en: 'It deletes all try blocks from the file',
            bn: 'এটি ফাইল থেকে সমস্ত try ব্লক মুছে দেয়'
          },
          {
            en: 'The C# compiler allows yield return inside catch blocks since .NET 8',
            bn: '.NET ৮ থেকে C# কম্পাইলার catch ব্লকে yield return সমর্থন করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Resuming a suspended state machine inside an active exception frame is prohibited by the CLR.',
          bn: 'এক্সেপশন ফ্রেমের ভেতর মেথড স্থগিত রাখা এবং পরে আবার সেখান থেকেই চালানো মেমোরি নিয়মের পরিপন্থী।'
        },
        explanation: {
          en: 'The CLR exception mechanism requires deterministic stack unwinding. Suspending execution via yield return in an active catch block would leave the exception frame undefined.',
          bn: 'তাই কম্পাইলার আর্কিটেকচারাল নিরাপত্তার স্বার্থেই এই ধরনের কোড নিষিদ্ধ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'spans-and-the-slice',
    title: {
      en: 'Span<T>, Memory<T> & Zero-Allocation Slicing',
      bn: 'Span<T>, Memory<T> এবং শূন্য-অ্যালোকেশন স্লাইসিং'
    }
  }
};
