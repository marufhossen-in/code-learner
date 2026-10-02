import type { Lesson } from '../../../lib/types';

export const StreamsAndTheLambdaLesson: Lesson = {
  slug: 'streams-and-the-lambda',
  tech: 'java',
  title: {
    en: 'Functional Streams, Lambdas & Optional Pipelines',
    bn: 'ফাংশনাল স্ট্রিমস, ল্যাম্বডা এবং Optional পাইপলাইন'
  },
  summary: {
    en: 'Transform data declaratively in Java 8+: master functional interfaces and lambda expressions, compose intermediate lazy pipeline transformations (filter, map, flatMap), execute terminal operations (collect, reduce, forEach), and eradicate NullPointerExceptions using Optional.',
    bn: 'জাভা ৮+ এ ডিক্লেয়ারেটিভ উপায়ে ডেটা প্রসেসিং শিখুন: ফাংশনাল ইন্টারফেস এবং ল্যাম্বডা এক্সপ্রেশন, অলস বা lazy পাইপলাইন অপারেশন (filter, map, flatMap), টার্মিনাল অপারেশন (collect, reduce) এবং Optional দিয়ে নাল-সেফ কোড লিখন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'lambdas-and-functional-interfaces-heading',
      text: {
        en: 'Lambdas and the 4 Core Functional Interfaces',
        bn: 'ল্যাম্বডা এবং ৪ টি মৌলিক ফাংশনাল ইন্টারফেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Java 8 transformed the language from purely imperative object-oriented programming to supporting functional programming paradigms. A Functional Interface is any interface possessing exactly 1 abstract method, annotated with @FunctionalInterface. The "java.util.function" package standardizes 4 core archetypes. Predicate<T> evaluates T returning boolean, Function<T, R> maps T to R, Consumer<T> accepts T returning void, and Supplier<T> yields T without inputs. Lambdas provide concise inline implementations matching these Single Abstract Method signatures using the arrow operator (->).',
        bn: 'জাভা ৮ অবজেক্ট-ওরিয়েন্টেড প্যারাডাইমের সাথে ফাংশনাল প্রোগ্রামিংয়ের চমৎকার মেলবন্ধন ঘটায়। একটি ফাংশনাল ইন্টারফেস হলো এমন একটি ইন্টারফেস যাতে অবিকল ১ টি অ্যাবস্ট্রাক্ট মেথড থাকে, যা @FunctionalInterface দিয়ে চিহ্নিত হয়। "java.util.function" প্যাকেজে ৪ টি মৌলিক ইন্টারফেস রয়েছে। Predicate<T> মান পরীক্ষা করে বুলিয়ান দেয়, Function<T, R> ইনপুটকে আউটপুটে রূপান্তর করে, Consumer<T> কোনো রিটার্ন ছাড়াই কাজ করে, এবং Supplier<T> ইনপুট ছাড়াই মান তৈরি করে। ল্যাম্বডা এক্সপ্রেশন অ্যারো অপারেটর (->) ব্যবহার করে এই মেথডগুলোকে সংক্ষিপ্ত লাইনে লেখার সুযোগ দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Anatomy of a Java 8+ Stream pipeline: Source collection passing through lazy intermediate operations to an eager terminal collector.',
        bn: 'চিত্র ১: জাভা ৮+ স্ট্রিম পাইপলাইনের রূপরেখা: সোর্স কালেকশন থেকে অলস বা lazy ইন্টারমিডিয়েট অপারেশনের মধ্য দিয়ে টার্মিনাল কালেক্টরে রূপান্তর।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">JAVA STREAM PIPELINE: LAZY TRANSFORMATIONS &amp; TERMINAL COLLECT</text>

  <!-- Step 1: Stream Source -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Source Collection</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">List&lt;Integer&gt; list</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">[1, 2, 3, 4, 5, 6]</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#38bdf8" font-size="9" font-family="monospace">list.stream()</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Data Stream Creator</text>
  </g>

  <!-- Step 2: Intermediate Lazy Ops -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Lazy Operations</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">.filter(x -&gt; x % 2 == 0)</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Predicate: evens [2, 4, 6]</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">.map(x -&gt; x * 10)</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Zero Work Until Terminal</text>
  </g>

  <!-- Step 3: Terminal Eager Operation -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Terminal Action</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">.toList() / .collect()</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Triggers Evaluation</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">or .reduce(0, Integer::sum)</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Consumes Stream Once</text>
  </g>

  <!-- Step 4: Optional & Null Safety -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Optional Monad</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">Optional.ofNullable()</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Eradicates NullPointer</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">.orElseThrow()</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Fail-Safe Pipelines</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'lazy-pipelines-and-optional-heading',
      text: {
        en: 'Lazy Pipelines, Terminal Triggers, and Optional Containers',
        bn: 'অলস পাইপলাইন, টার্মিনাল ট্রিগার এবং Optional কন্টেইনার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A foundational principle of Java Streams is lazy evaluation: intermediate methods like filter(), map(), and flatMap() do not traverse or process elements when declared. Instead, they assemble a connected pipeline of operations. Only when a terminal operation (such as collect(), count(), anyMatch(), or reduce()) is invoked does the pipeline pull elements through the transformations. Once a terminal operation finishes, the stream is permanently closed and cannot be reused. Additionally, Java 8 introduced Optional to eliminate NullPointerExceptions by forcing developers to handle absence explicitly through orElse(), orElseGet(), or orElseThrow().',
        bn: 'জাভা স্ট্রিমের মূল ভিত্তি হলো lazy evaluation বা অলস মূল্যায়ন: filter(), map(), এবং flatMap() মেথড ঘোষণার সাথে সাথে কোনো ডেটা প্রসেস করে না। বরং তারা অপারেশনের একটি পাইপলাইন সাজিয়ে রাখে। যখন কোনো টার্মিনাল অপারেশন (যেমন collect(), count(), anyMatch() বা reduce()) কল করা হয়, তখনই কেবল উপাদানগুলো একে একে প্রক্রিয়াজাত হয়। টার্মিনাল অপারেশন শেষ হলে সেই স্ট্রিমটি স্থায়ীভাবে বন্ধ হয়ে যায় এবং তা আর দ্বিতীয়বার চালানো যায় না। তাছাড়া NullPointerException নির্মূল করতে জাভা ৮ এ Optional প্রবর্তিত হয়, যা ডেভেলপারকে orElse(), orElseGet() বা orElseThrow() দিয়ে অনুপস্থিত মান নিরাপদে পরিচালনা করতে বাধ্য করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript implementation demonstrating lazy pipeline stream mechanics, intermediate filtering, terminal collection, and Optional monad.',
        bn: 'স্ট্রিমের lazy পাইপলাইন রূপান্তর, ফিল্টারিং, টার্মিনাল সংগ্রহ এবং Optional ধারণার TypeScript বাস্তবায়ন।'
      },
      code: `// Simulation of Java 8+ Stream Pipeline and Optional Container

export class StreamSimulator<T> {
  private constructor(private source: () => Iterable<T>) {}

  public static of<T>(items: T[]): StreamSimulator<T> {
    return new StreamSimulator(() => items);
  }

  // Intermediate Lazy Operation: Filter
  public filter(predicate: (item: T) => boolean): StreamSimulator<T> {
    const upstream = this.source;
    return new StreamSimulator(function* () {
      for (const item of upstream()) {
        if (predicate(item)) {
          yield item;
        }
      }
    });
  }

  // Intermediate Lazy Operation: Map
  public map<R>(mapper: (item: T) => R): StreamSimulator<R> {
    const upstream = this.source;
    return new StreamSimulator(function* () {
      for (const item of upstream()) {
        yield mapper(item);
      }
    });
  }

  // Terminal Eager Operation: toList
  public toList(): T[] {
    const results: T[] = [];
    for (const item of this.source()) {
      results.push(item);
    }
    return results;
  }

  // Terminal Eager Operation: reduce
  public reduce(identity: T, accumulator: (acc: T, val: T) => T): T {
    let result = identity;
    for (const item of this.source()) {
      result = accumulator(result, item);
    }
    return result;
  }
}

// Optional container simulation
export class OptionalSimulator<T> {
  constructor(private value: T | null | undefined) {}

  public static ofNullable<T>(val: T | null | undefined): OptionalSimulator<T> {
    return new OptionalSimulator(val);
  }

  public isPresent(): boolean {
    return this.value !== null && this.value !== undefined;
  }

  public orElse(fallback: T): T {
    return this.isPresent() ? (this.value as T) : fallback;
  }
}

// Pipeline execution
const numbers = [1, 2, 3, 4, 5, 6];
const processed = StreamSimulator.of(numbers)
  .filter(x => x % 2 === 0)
  .map(x => x * 10)
  .toList();

console.log('Stream Processed Items:', processed); // [20, 40, 60]
const opt = OptionalSimulator.ofNullable<string>(null);
console.log('Optional Fallback Value:', opt.orElse('DEFAULT_USER')); // "DEFAULT_USER"`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Functional Interface',
          def: {
            en: 'Interface containing exactly 1 abstract method suitable for lambda target typing.',
            bn: 'ইন্টারফেস যাতে অবিকল ১ টি অ্যাবস্ট্রাক্ট মেথড থাকে যা ল্যাম্বডার মাধ্যমে বাস্তবায়নযোগ্য।'
          }
        },
        {
          term: 'Lazy Evaluation',
          def: {
            en: 'Processing model where intermediate stream operations defer calculation until a terminal operation is called.',
            bn: 'প্রসেসিং মডেল যেখানে টার্মিনাল অপারেশন কল না করা পর্যন্ত মাঝখানের কোনো কাজ কার্যকর হয় না।'
          }
        },
        {
          term: 'Terminal Operation',
          def: {
            en: 'Stream method that initiates computation, processes elements, produces a final result, and closes the stream.',
            bn: 'স্ট্রিম মেথড যা সমস্ত পাইপলাইন কার্যকর করে ফলাফল প্রদান করে এবং স্ট্রিমটি বন্ধ করে দেয়।'
          }
        },
        {
          term: 'Optional',
          def: {
            en: 'Container object used to represent either a present value or empty state, preventing NullPointerExceptions.',
            bn: 'একটি কন্টেইনার অবজেক্ট যা মান থাকা বা না থাকাকে প্রকাশ করে নালপয়েন্টার এরর প্রতিরোধ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'functional-interface-abstract-methods-count-ex1',
      kind: 'mcq',
      topic: 'functional-interface-sam-rule',
      question: {
        en: 'How many abstract methods can an interface marked with @FunctionalInterface contain in Java?',
        bn: 'জাভাতে @FunctionalInterface চিহ্নিত ইন্টারফেসে সর্বোচ্চ কতটি অ্যাবস্ট্রাক্ট মেথড থাকতে পারে?'
      },
      options: [
        { en: 'Exactly 1 abstract method (SAM: Single Abstract Method)', bn: 'অবিকল ১ টি অ্যাবস্ট্রাক্ট মেথড (SAM: Single Abstract Method)' },
        { en: 'As many as needed without limit', bn: 'সীমাহীন যত ইচ্ছা মেথড' },
        { en: 'Exactly 0 methods', bn: 'ঠিক ০ টি মেথড' },
        { en: 'At least 5 methods', bn: 'কমপক্ষে ৫ টি মেথড' }
      ],
      answer: 0,
      hint: {
        en: 'A functional interface is defined by the Single Abstract Method (SAM) contract.',
        bn: 'ফাংশনাল ইন্টারফেসের শর্তই হলো তাতে কেবল ১ টি একক অ্যাবস্ট্রাক্ট মেথড থাকতে হবে।'
      },
      explanation: {
        en: 'Although static and default methods can exist, exactly 1 abstract method is permitted in a functional interface.',
        bn: 'ডিফল্ট বা স্ট্যাটিক মেথড একাধিক থাকলেও অ্যাবস্ট্রাক্ট মেথড অবিকল ১ টি হতে হবে।'
      }
    },
    {
      id: 'stream-intermediate-vs-terminal-lazy-ex2',
      kind: 'mcq',
      topic: 'stream-lazy-evaluation-mechanics',
      question: {
        en: 'What happens when you invoke stream.filter(x -> x > 10) without calling a terminal operation like collect() or forEach()?',
        bn: 'collect() বা forEach() এর মতো টার্মিনাল অপারেশন ছাড়া stream.filter(x -> x > 10) কল করলে কী ঘটে?'
      },
      options: [
        {
          en: 'Nothing is executed; intermediate operations are lazy and only execute when a terminal operation triggers evaluation',
          bn: 'কোনো কাজই সম্পাদিত হয় না; কারণ ইন্টারমিডিয়েট অপারেশনগুলো lazy এবং টার্মিনাল অপারেশন কল করলেই কেবল কাজ শুরু হয়'
        },
        {
          en: 'All elements in the source are immediately filtered and cached in heap memory',
          bn: 'সব উপাদান অবিলম্বে ফিল্টার হয়ে মেমোরিতে জমা হয়'
        },
        {
          en: 'The JVM throws an IllegalStateException',
          bn: 'JVM একটি IllegalStateException ছুড়ে দেয়'
        },
        {
          en: 'The operating system restarts',
          bn: 'অপারেটিং সিস্টেম রিস্টার্ট নেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Java Streams are lazily evaluated and require a terminal trigger.',
        bn: 'জাভা স্ট্রিম lazy বা অলস; কাজ সম্পন্ন করতে টার্মিনাল অপারেশনের ডাক প্রয়োজন।'
      },
      explanation: {
        en: 'Intermediate operations merely define the processing pipeline without traversing elements until a terminal operation is invoked.',
        bn: 'টার্মিনাল অপারেশন কল না করা পর্যন্ত ইন্টারমিডিয়েট অপারেশনগুলো উপাদানের উপর কোনো প্রসেসিং চালায় না।'
      }
    },
    {
      id: 'predicate-functional-interface-return-type-ex3',
      kind: 'mcq',
      topic: 'predicate-boolean-return-contract',
      question: {
        en: 'Which boolean-testing functional interface method does java.util.function.Predicate<T> define?',
        bn: 'java.util.function.Predicate<T> কোন মেথডটি সংজ্ঞায়িত করে যা বুলিয়ান মান প্রদান করে?'
      },
      options: [
        { en: 'boolean test(T t)', bn: 'boolean test(T t)' },
        { en: 'void accept(T t)', bn: 'void accept(T t)' },
        { en: 'T get()', bn: 'T get()' },
        { en: 'R apply(T t)', bn: 'R apply(T t)' }
      ],
      answer: 0,
      hint: {
        en: 'Predicate evaluates a condition via test().',
        bn: 'Predicate শর্ত পরীক্ষা করতে test() মেথড ব্যবহার করে।'
      },
      explanation: {
        en: 'Predicate<T> defines boolean test(T t), used for filtering elements in stream pipelines.',
        bn: 'Predicate<T> এর মেথড হলো boolean test(T t), যা ফিল্টারিংয়ে শর্ত যাচাইয়ে ব্যবহৃত হয়।'
      }
    },
    {
      id: 'stream-reuse-illegal-state-ex4',
      kind: 'mcq',
      topic: 'stream-consumed-once-lifecycle',
      question: {
        en: 'What error occurs if an application attempts to call a second terminal operation on an already consumed Java Stream?',
        bn: 'ইতিমধ্যে ব্যবহৃত কোনো জাভা স্ট্রিমে দ্বিতীয়বার টার্মিনাল অপারেশন কল করার চেষ্টা করলে কোন এররটি ঘটে?'
      },
      options: [
        {
          en: 'IllegalStateException: stream has already been operated upon or closed',
          bn: 'রানটাইম এরর: IllegalStateException: stream has already been operated upon or closed'
        },
        {
          en: 'OutOfMemoryError: stream capacity exhausted',
          bn: 'মেমোরি এরর: OutOfMemoryError: stream capacity exhausted'
        },
        {
          en: 'NullPointerException',
          bn: 'নাল এরর: NullPointerException'
        },
        {
          en: 'The stream automatically restarts from the beginning',
          bn: 'স্ট্রিমটি নিজে থেকে শুরু থেকে পুনরায় চালু হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Java Streams are single-use pipelines that cannot be re-traversed.',
        bn: 'জাভা স্ট্রিম কেবল একবার ব্যবহারযোগ্য পাইপলাইন, যা পুনরায় ব্যবহার করা যায় না।'
      },
      explanation: {
        en: 'Streams cannot be reused once closed by a terminal operation; an IllegalStateException is immediately raised.',
        bn: 'একবার টার্মিনাল অপারেশন চালালে স্ট্রিম চিরতরে বন্ধ হয়ে যায়; আবার চালাতে গেলে IllegalStateException ঘটে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-streams-and-the-lambda',
    title: {
      en: 'Java Functional Streams and Lambdas Mastery Quiz',
      bn: 'জাভা ফাংশনাল স্ট্রিমস এবং ল্যাম্বডা কুইজ'
    },
    questions: [
      {
        id: 'quiz-flatmap-nested-collections',
        kind: 'mcq',
        topic: 'stream-flatmap-flattens-dimensions',
        question: {
          en: 'What is the primary difference between map() and flatMap() in the Java Stream API?',
          bn: 'জাভা স্ট্রিম এপিআই-তে map() এবং flatMap() এর মধ্যকার মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'map transforms each element into a single output, while flatMap transforms each element into a stream and flattens all resulting streams into one single unified stream',
            bn: 'map প্রতিটি উপাদানকে একটি একক মানে রূপান্তর করে, আর flatMap প্রতিটি উপাদানকে স্ট্রিমে রূপান্তর করে সবগুলোকে সমতল করে একটি একক স্ট্রিমে একীভূত করে'
          },
          {
            en: 'flatMap executes on multiple CPU cores while map runs on 1 core',
            bn: 'flatMap একাধিক CPU কোরে রান করে আর map ১ টি কোরে রান করে'
          },
          {
            en: 'map deletes elements while flatMap preserves duplicates',
            bn: 'map উপাদান মুছে ফেলে আর flatMap ডুপ্লিকেট ধরে রাখে'
          },
          {
            en: 'There is no difference between map and flatMap',
            bn: 'map এবং flatMap এর মাঝে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'flatMap flattens 2D structures (streams of streams) into a 1D stream.',
          bn: 'flatMap জটিল নেস্টেড কালেকশনকে সমতল করে একটি সাধারণ স্ট্রিমে রূপান্তর করে।'
        },
        explanation: {
          en: 'flatMap unwraps inner collections or streams into one continuous flattened stream.',
          bn: 'নেস্টেড লিস্ট বা স্ট্রিমকে একটি একক স্ট্রিমে রূপান্তর করতে flatMap ব্যবহৃত হয়।'
        }
      },
      {
        id: 'quiz-optional-orelse-vs-orelseget-evaluation',
        kind: 'mcq',
        topic: 'optional-orelse-vs-orelseget-performance',
        question: {
          en: 'What is the performance distinction between optional.orElse(computeDefault()) and optional.orElseGet(() -> computeDefault())?',
          bn: 'optional.orElse(computeDefault()) এবং optional.orElseGet(() -> computeDefault()) এর পারফরম্যান্স পার্থক্য কী?'
        },
        options: [
          {
            en: 'orElse evaluates computeDefault() eagerly every time regardless of presence, while orElseGet evaluates computeDefault() lazily ONLY if the value is empty',
            bn: 'মান উপস্থিত থাকলেও orElse সর্বদা তাৎক্ষণিকভাবে computeDefault() চালায়, কিন্তু orElseGet কেবল মান অনুপস্থিত থাকলেই অলসভাবে computeDefault() চালায়'
          },
          {
            en: 'orElse is 10 times faster than orElseGet',
            bn: 'orElse মেথড orElseGet এর চেয়ে ১০ গুণ দ্রুত'
          },
          {
            en: 'orElseGet only works with string data types',
            bn: 'orElseGet কেবল স্ট্রিং ডেটা টাইপে কাজ করে'
          },
          {
            en: 'Both methods behave identically in all scenarios',
            bn: 'সব পরিস্থিতিতে দুটি মেথড একইভাবে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'orElse takes a value eagerly, whereas orElseGet accepts a Supplier evaluated lazily.',
          bn: 'orElse মানটি সাথে সাথে হিসেব করে, কিন্তু orElseGet প্রয়োজন হলেই কেবল Supplier কার্যকর করে।'
        },
        explanation: {
          en: 'Use orElseGet when the default value is computationally expensive to avoid unnecessary work when the value is present.',
          bn: 'ভারী কোনো ফাংশন কল করতে orElseGet ব্যবহার করা শ্রেয়, যাতে অপচয় রোধ হয়।'
        }
      },
      {
        id: 'quiz-parallel-stream-fork-join-pool',
        kind: 'mcq',
        topic: 'parallel-stream-fork-join-common-pool',
        question: {
          en: 'Which underlying thread pool does list.parallelStream() utilize by default for concurrent workload execution?',
          bn: 'লিস্টের সমান্তরাল কাজ সম্পাদনের জন্য list.parallelStream() ডিফল্টভাবে কোন থ্রেড পুলটি ব্যবহার করে?'
        },
        options: [
          { en: 'ForkJoinPool.commonPool()', bn: 'ForkJoinPool.commonPool()' },
          { en: 'Executors.newSingleThreadExecutor()', bn: 'Executors.newSingleThreadExecutor()' },
          { en: 'ThreadPoolExecutor with 1 thread', bn: '১ টি থ্রেডযুক্ত ThreadPoolExecutor' },
          { en: 'The operating system main process pool', bn: 'অপারেটিং সিস্টেমের মূল প্রসেস পুল' }
        ],
        answer: 0,
        hint: {
          en: 'Java uses the common ForkJoinPool across the entire JVM for parallel streams.',
          bn: 'জাভা প্যারালাল স্ট্রিমের জন্য পুরো JVM জুড়ে শেয়ার করা ForkJoinPool.commonPool() ব্যবহার করে।'
        },
        explanation: {
          en: 'Parallel streams share the common ForkJoinPool, meaning blocking I/O inside parallel streams can starve other CPU tasks.',
          bn: 'শেয়ার্ড ForkJoinPool এ ব্লকিং কাজ চালালে পুরো সিস্টেমের থ্রেড আটকে যেতে পারে।'
        }
      },
      {
        id: 'quiz-method-reference-syntax',
        kind: 'mcq',
        topic: 'method-reference-syntax-forms',
        question: {
          en: 'Which method reference syntax in Java 8 is equivalent to the lambda "(String s) -> System.out.println(s)"?',
          bn: 'জাভা ৮ এ "(String s) -> System.out.println(s)" ল্যাম্বডার সমতুল্য মেথড রেফারেন্স সিনট্যাক্স কোনটি?'
        },
        options: [
          { en: 'System.out::println', bn: 'System.out::println' },
          { en: 'System::out::println', bn: 'System::out::println' },
          { en: 'System.out->println', bn: 'System.out->println' },
          { en: 'System.out.println()::ref', bn: 'System.out.println()::ref' }
        ],
        answer: 0,
        hint: {
          en: 'Double colon (::) denotes a method reference.',
          bn: 'মেথড রেফারেন্সে অবজেক্ট ও মেথডের মাঝে ডাবল কোলন (::) বসে।'
        },
        explanation: {
          en: 'System.out::println is a concise method reference targeting the Consumer<String> interface.',
          bn: 'System.out::println হলো সংক্ষিপ্ত মেথড রেফারেন্স যা Consumer<String> এর সাথে মিলে যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'threads-and-the-lock',
    title: {
      en: 'Concurrency, Virtual Threads & Memory Visibility',
      bn: 'কনকারেন্সি, ভার্চুয়াল থ্রেডস এবং মেমোরি ভিজিবিলিটি'
    }
  }
};
