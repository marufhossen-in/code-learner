import type { Lesson } from '../../../lib/types';

export const ListsAndTheMapLesson: Lesson = {
  slug: 'lists-and-the-map',
  tech: 'scala',
  title: {
    en: 'Collections & For-Comprehensions: Immutable Sequences, Maps & Monads',
    bn: 'কালেকশন ও For-কমপ্রিহেনশন: ইমিউটেবল সিকোয়েন্স, ম্যাপ ও মোনাড'
  },
  summary: {
    en: 'Master Scala collection hierarchies: immutable List (head, tail, cons ::), Vector (random access), Set and Map, monadic for-comprehensions desugaring to flatMap and map, and lazy Views.',
    bn: 'স্কালা কালেকশন হায়ারার্কিতে দক্ষতা: ইমিউটেবল List (head, tail, cons ::), Vector (র‍্যান্ডম অ্যাক্সেস), Set ও Map, flatMap ও map এ রূপান্তরিত মোনাডিক for-কমপ্রিহেনশন এবং লেজি ভিউ।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'collections-architecture',
      text: {
        en: '1. The Immutable Collections Hierarchy: Structural Sharing',
        bn: '১. ইমিউটেবল কালেকশন হায়ারার্কি: স্ট্রাকচারাল শেয়ারিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you import collections in Scala, the immutable variants from scala.collection.immutable are available by default. Rather than cloning arrays upon modification, Scala collections are persistent data structures: they employ structural sharing to create modified versions in O(1) or O(log N) time with zero memory duplication.',
        bn: 'স্কালাতে কালেকশন ব্যবহারের সময় ডিফল্টভাবেই scala.collection.immutable প্যাকেজের ইমিউটেবল রূপগুলো পাওয়া যায়। প্রতি পরিবর্তনের সময় সম্পূর্ণ ডাটা কপি করার বদলে স্কালা কালেকশন "স্ট্রাকচারাল শেয়ারিং" পদ্ধতি ব্যবহার করে: এতে মেমরির কোনো অপচয় ছাড়াই O(1) বা O(log N) সময়ে নতুন পরিবর্তিত রূপ তৈরি হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. List[T]: A singly-linked sequence consisting of head and tail. Prepending an element with the cons operator (x :: xs) is an O(1) instant pointer allocation sharing the existing tail.',
          bn: '১. List[T]: মাথা (head) এবং লেজ (tail) বিশিষ্ট একক লিংকড লিস্ট। কনস অপারেটর (x :: xs) দিয়ে সামনে নতুন উপাদান যুক্ত করা O(1) জটিলতায় সম্পন্ন হয়।'
        },
        {
          en: '2. Vector[T]: A 32-way branching radix trie that provides effectively O(1) random access by index and balanced append/update operations across millions of elements.',
          bn: '২. Vector[T]: ৩২-শাখা বিশিষ্ট ব্যালান্সড রেডিক্স ট্রাই যা লাখ লাখ উপাদানের ক্ষেত্রেও কার্যকরভাবে O(1) সময়ে ইনডেক্স অ্যাক্সেস এবং দ্রুত সংযোজন নিশ্চিত করে।'
        },
        {
          en: '3. Map[K, V] and Set[T]: Immutable hash collision trees guaranteeing constant-factor key-value lookups without mutable hash tables.',
          bn: '৩. Map[K, V] এবং Set[T]: ইমিউটেবল হ্যাশ ট্রাই যা মিউটেবল হ্যাশ টেবিল ছাড়াই বিদ্যুৎগতিতে কি-ভ্যালু লুকআপ পরিচালনা করে।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'collections-and-for-diagram',
      title: {
        en: 'List Cons Cells, Vector Trie & For-Comprehension Desugaring',
        bn: 'লিস্ট কনস সেল, ভেক্টর ট্রাই ও For-কমপ্রিহেনশন ডিশুগারিং'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Scala Collections: Structural Sharing &amp; Monadic Comprehensions</text>' +
          '<!-- Column 1: List Cons Cells -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. PERSISTENT List[T]: 1 :: 2 :: Nil</text>' +
            '<!-- Cell 1 -->' +
            '<g transform="translate(20, 45)">' +
              '<rect width="80" height="45" rx="6" fill="#0f172a" stroke="#3b82f6"/>' +
              '<text x="40" y="22" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Head: 1</text>' +
              '<text x="40" y="36" fill="#94a3b8" font-size="8" text-anchor="middle">Cons Cell</text>' +
            '</g>' +
            '<path d="M 100 67 L 130 67" stroke="#38bdf8" stroke-width="2"/>' +
            '<!-- Cell 2 -->' +
            '<g transform="translate(130, 45)">' +
              '<rect width="80" height="45" rx="6" fill="#0f172a" stroke="#3b82f6"/>' +
              '<text x="40" y="22" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Head: 2</text>' +
              '<text x="40" y="36" fill="#94a3b8" font-size="8" text-anchor="middle">Cons Cell</text>' +
            '</g>' +
            '<path d="M 210 67 L 240 67" stroke="#38bdf8" stroke-width="2"/>' +
            '<!-- Nil -->' +
            '<g transform="translate(240, 45)">' +
              '<rect width="80" height="45" rx="6" fill="#0f172a" stroke="#ef4444"/>' +
              '<text x="40" y="28" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">Nil (Empty)</text>' +
            '</g>' +
            '<rect x="15" y="105" width="330" height="205" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="130" fill="#38bdf8" font-size="10" font-weight="bold">&#x2022; Prepend: 0 :: list</text>' +
            '<text x="25" y="148" fill="#cbd5e1" font-size="9">O(1) instant operation; shares existing tail</text>' +
            '<text x="25" y="172" fill="#10b981" font-size="10" font-weight="bold">&#x2022; Vector[T] Radix-32 Tree:</text>' +
            '<text x="25" y="190" fill="#cbd5e1" font-size="9">Best general-purpose sequence for random indexing</text>' +
            '<text x="25" y="214" fill="#fbbf24" font-size="10" font-weight="bold">&#x2022; Lazy Views: list.view.map(...)</text>' +
            '<text x="25" y="232" fill="#cbd5e1" font-size="9">Fuses multiple passes without intermediate allocations</text>' +
            '<text x="25" y="258" fill="#c084fc" font-size="10" font-weight="bold">&#x2022; Set &amp; Map immutability:</text>' +
            '<text x="25" y="276" fill="#cbd5e1" font-size="9">Guarantees safe concurrent reads across threads</text>' +
          '</g>' +
          '<!-- Column 2: For-Comprehensions -->' +
          '<g transform="translate(410, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">2. MONADIC FOR-COMPREHENSION</text>' +
            '<rect x="15" y="45" width="330" height="110" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="66" fill="#facc15" font-size="10" font-weight="bold">Syntactic Sugar:</text>' +
            '<text x="25" y="86" fill="#34d399" font-size="9" font-family="monospace">for {</text>' +
            '<text x="40" y="102" fill="#cbd5e1" font-size="9" font-family="monospace">x &lt;- List(1, 2)</text>' +
            '<text x="40" y="118" fill="#cbd5e1" font-size="9" font-family="monospace">y &lt;- List(10, 20)</text>' +
            '<text x="25" y="134" fill="#34d399" font-size="9" font-family="monospace">} yield x + y</text>' +
            '<rect x="15" y="165" width="330" height="145" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="186" fill="#38bdf8" font-size="10" font-weight="bold">Compiler Desugaring (Under the Hood):</text>' +
            '<text x="25" y="208" fill="#60a5fa" font-size="9" font-family="monospace">List(1, 2).flatMap { x &#x2192;</text>' +
            '<text x="40" y="226" fill="#60a5fa" font-size="9" font-family="monospace">List(10, 20).map { y &#x2192;</text>' +
            '<text x="55" y="244" fill="#facc15" font-size="9" font-family="monospace">x + y</text>' +
            '<text x="40" y="260" fill="#60a5fa" font-size="9" font-family="monospace">}</text>' +
            '<text x="25" y="276" fill="#60a5fa" font-size="9" font-family="monospace">}</text>' +
            '<text x="25" y="296" fill="#34d399" font-size="9" font-weight="bold">Produces: List(11, 21, 12, 22)</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'for-comprehensions',
      text: {
        en: '2. For-Comprehensions & Monadic Desugaring',
        bn: '২. For-কমপ্রিহেনশন এবং মোনাডিক ডিশুগারিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Scala, a for-comprehension with yield is not an imperative loop; it is declarative syntactic sugar that compiles directly into chained calls of flatMap, map, and withFilter.',
        bn: 'স্কালাতে yield সহ for-কমপ্রিহেনশন কোনো সাধারণ লুপ নয়; এটি একটি সুবিন্যস্ত ঘোষণামূলক সিনট্যাক্স যা কম্পাইল হওয়ার সময় সরাসরি flatMap, map এবং withFilter এর শৃঙ্খলে রূপান্তরিত হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Single generator (for (x <- xs) yield f(x)) desugars into xs.map(f).',
          bn: '১. একক জেনারেটর (for (x <- xs) yield f(x)) রূপান্তরিত হয়ে xs.map(f) হয়।'
        },
        {
          en: '2. Multiple generators (for (x <- xs; y <- ys) yield f(x, y)) desugar into nested flatMap calls terminated by an innermost map.',
          bn: '২. একাধিক জেনারেটর (for (x <- xs; y <- ys) yield f(x, y)) নেস্টেড flatMap এবং একদম ভেতরের map এ রূপান্তরিত হয়।'
        },
        {
          en: '3. Filter guards (for (x <- xs if x > 10) yield x) desugar into xs.withFilter(_ > 10).map(...), avoiding intermediate memory allocation.',
          bn: '৩. ফিল্টার গার্ড (for (x <- xs if x > 10) yield x) বাড়তি মেমরি খরচ না করেই xs.withFilter(_ > 10).map(...) এ পরিণত হয়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '3. Persistent Collections & Monadic Engine in TypeScript',
        bn: '৩. TypeScript এ পারসিস্টেন্ট কালেকশন ও মোনাডিক ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates Scala structural sharing with cons cells (::), along with monadic for-comprehension cross-product desugaring (flatMap + map):',
        bn: 'নিচের TypeScript প্রোগ্রামটি কনস সেল (::) দিয়ে স্কেলার স্ট্রাকচারাল শেয়ারিং এবং মোনাডিক for-কমপ্রিহেনশন ডিশুগারিং (flatMap + map) প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of persistent singly-linked List with cons (::) and desugared for-comprehensions.',
        bn: 'কনস (::) সহ পারসিস্টেন্ট লিস্ট এবং ডিশুগারড for-কমপ্রিহেনশনের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of Scala Persistent List and Monadic For-Comprehensions

// 1. Persistent Singly-Linked List with Structural Sharing
abstract class PersistentList<T> {
  abstract head: T;
  abstract tail: PersistentList<T>;
  abstract isEmpty: boolean;

  // Cons operator (x :: list): O(1) prepend sharing existing tail
  cons(elem: T): PersistentList<T> {
    return new ConsCell<T>(elem, this);
  }

  // map: T => U
  map<U>(f: (item: T) => U): PersistentList<U> {
    if (this.isEmpty) return new NilList<U>();
    return new ConsCell<U>(f(this.head), this.tail.map(f));
  }

  // flatMap: T => PersistentList[U]
  flatMap<U>(f: (item: T) => PersistentList<U>): PersistentList<U> {
    if (this.isEmpty) return new NilList<U>();
    const headList = f(this.head);
    return headList.concat(this.tail.flatMap(f));
  }

  concat(other: PersistentList<T>): PersistentList<T> {
    if (this.isEmpty) return other;
    return new ConsCell<T>(this.head, this.tail.concat(other));
  }

  toArray(): T[] {
    const arr: T[] = [];
    let curr: PersistentList<T> = this;
    while (!curr.isEmpty) {
      arr.push(curr.head);
      curr = curr.tail;
    }
    return arr;
  }
}

class ConsCell<T> extends PersistentList<T> {
  constructor(public readonly head: T, public readonly tail: PersistentList<T>) {
    super();
  }
  get isEmpty(): boolean {
    return false;
  }
}

class NilList<T> extends PersistentList<T> {
  get head(): T {
    throw new Error('Nil.head is undefined');
  }
  get tail(): PersistentList<T> {
    throw new Error('Nil.tail is undefined');
  }
  get isEmpty(): boolean {
    return true;
  }
}

// Helper factory
function listFrom<T>(...items: T[]): PersistentList<T> {
  let list: PersistentList<T> = new NilList<T>();
  for (let i = items.length - 1; i >= 0; i--) {
    list = list.cons(items[i]);
  }
  return list;
}

// Demonstration
// 1. Structural sharing with cons
const baseList = listFrom(20, 30);
const listA = baseList.cons(10); // 10 :: baseList
const listB = baseList.cons(99); // 99 :: baseList

console.log('List A elements: ' + listA.toArray().join(' -> ')); // -> 10 -> 20 -> 30
console.log('List B elements: ' + listB.toArray().join(' -> ')); // -> 99 -> 20 -> 30
console.log('Both lists share exact same tail pointer: ' + (listA.tail === listB.tail)); // -> true

// 2. For-comprehension desugaring:
// for (x <- List(1, 2); y <- List(10, 20)) yield x + y
const xs = listFrom(1, 2);
const ys = listFrom(10, 20);

// Desugared: xs.flatMap(x => ys.map(y => x + y))
const desugaredResult = xs.flatMap((x) => ys.map((y) => x + y));
console.log('Desugared for-comprehension sum results: ' + desugaredResult.toArray().join(', ')); // -> 11, 21, 12, 22`
    }
  ],
  exercises: [
    {
      id: 'list-ex-1',
      kind: 'mcq',
      question: {
        en: 'What time complexity is guaranteed when prepending an element to an immutable Scala List using the cons operator (::)?',
        bn: 'কনস অপারেটর (::) ব্যবহার করে একটি ইমিউটেবল স্কালা List এর শুরুতে নতুন উপাদান যুক্ত করার সময় কমপ্লেক্সিটি কত হয়?'
      },
      options: [
        {
          en: 'O(1) constant time (by creating a new cons cell referencing the existing list tail)',
          bn: 'O(1) কনস্ট্যান্ট টাইম (বিদ্যমান লিস্টের টেইল রেফারেন্স করে একটি নতুন কনস সেল তৈরির মাধ্যমে)'
        },
        {
          en: 'O(N) linear time (because all existing elements must be deeply copied)',
          bn: 'O(N) লিনিয়ার টাইম (কারণ বিদ্যমান تمام উপাদানকে নতুন করে কপি করতে হয়)'
        },
        {
          en: 'O(N^2) quadratic time',
          bn: 'O(N^2) কোয়াড্রেটিক টাইম'
        },
        {
          en: 'O(log N) logarithmic time',
          bn: 'O(log N) লগারিদমিক টাইম'
        }
      ],
      answer: 0,
      hint: {
        en: 'Prepending to a singly-linked list shares the existing tail immediately.',
        bn: 'একক লিংকড লিস্টের শুরুতে যোগ করলে বিদ্যমান লেজ সরাসরি সংযুক্ত থাকে।'
      },
      explanation: {
        en: 'Scala\'s List is a singly-linked persistent structure. Prepending with :: creates a single node whose tail points to the original list, executing in O(1) constant time without copying.',
        bn: 'স্কালা List একটি পারসিস্টেন্ট লিংকড লিস্ট হওয়ায় :: অপারেটর কোনো ডাটা কপি না করে O(1) কনস্ট্যান্ট সময়ে নতুন উপাদান যোগ করে।'
      }
    },
    {
      id: 'list-ex-2',
      kind: 'mcq',
      question: {
        en: 'What does a multi-generator for-comprehension for (x <- xs; y <- ys) yield (x, y) compile into?',
        bn: 'একাধিক জেনারেটর বিশিষ্ট for-কমপ্রিহেনশন for (x <- xs; y <- ys) yield (x, y) কম্পাইল হয়ে কীসে রূপান্তরিত হয়?'
      },
      options: [
        {
          en: 'xs.flatMap(x => ys.map(y => (x, y)))',
          bn: 'xs.flatMap(x => ys.map(y => (x, y)))'
        },
        {
          en: 'xs.concat(ys)',
          bn: 'xs.concat(ys)'
        },
        {
          en: 'while (xs.hasNext) { ys.next() }',
          bn: 'while (xs.hasNext) { ys.next() }'
        },
        {
          en: 'xs.zip(ys)',
          bn: 'xs.zip(ys)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Outer generators desugar to flatMap; the final generator desugars to map.',
        bn: 'বাইরের জেনারেটর flatMap এ এবং ভেতরের শেষ জেনারেটর map এ পরিণত হয়।'
      },
      explanation: {
        en: 'The Scala compiler translates multi-generator for-comprehensions into nested flatMap calls, with the final generator using map to produce the yielded result.',
        bn: 'একাধিক জেনারেটরের ক্ষেত্রে স্কালা কম্পাইলার প্রথমটিকে flatMap এবং শেষেরটিকে map এ রূপান্তরিত করে মোনাডিক চেইনিং সম্পন্ন করে।'
      }
    },
    {
      id: 'list-ex-3',
      kind: 'mcq',
      question: {
        en: 'Which immutable collection in Scala is recommended as the default general-purpose sequence for fast random indexing?',
        bn: 'দ্রুত র‍্যান্ডম ইনডেক্সিংয়ের জন্য স্কালাতে কোন ইমিউটেবল কালেকশনটিকে ডিফল্ট জেনারেল-পারপাস সিকোয়েন্স হিসেবে সুপারিশ করা হয়?'
      },
      options: [
        {
          en: 'Vector[T] (a 32-way branching trie providing effectively O(1) indexing)',
          bn: 'Vector[T] (একটি ৩২-শাখা বিশিষ্ট ট্রাই যা কার্যকরভাবে O(1) ইনডেক্সিং দেয়)'
        },
        {
          en: 'List[T]',
          bn: 'List[T]'
        },
        {
          en: 'Stream[T]',
          bn: 'Stream[T]'
        },
        {
          en: 'ArrayBuffer[T]',
          bn: 'ArrayBuffer[T]'
        }
      ],
      answer: 0,
      hint: {
        en: 'Vector provides balanced performance across indexing, updates, and appends.',
        bn: 'Vector ইনডেক্সিং, আপডেট এবং অ্যাপেন্ডের ক্ষেত্রে সুষম পারফরম্যান্স দেয়।'
      },
      explanation: {
        en: 'Vector is implemented as a 32-way branching tree, delivering near-constant O(log32 N) performance for random access, updates, and additions.',
        bn: 'Vector একটি ৩২-শাখা বিশিষ্ট ট্রি হিসেবে তৈরি হওয়ায় এটি যেকোনো উপাদানে অত্যন্ত দ্রুত অ্যাক্সেস নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-lists-and-the-map',
    title: {
      en: 'Scala Collections and Comprehensions Quiz',
      bn: 'স্কালা কালেকশন ও কমপ্রিহেনশন কুইজ'
    },
    questions: [
      {
        id: 'list-q1',
        kind: 'mcq',
        question: {
          en: 'What is the purpose of calling .view on a Scala collection before applying a chain of map and filter transformations?',
          bn: 'ম্যাপ ও ফিল্টারের শৃঙ্খল প্রয়োগ করার পূর্বে স্কালা কালেকশনে .view কল করার উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'It enables lazy evaluation, fusing transformations into a single pass and avoiding intermediate collection allocations in RAM',
            bn: 'এটি লেজি ইভ্যালুয়েশন সক্রিয় করে, সমস্ত রূপান্তরকে একটি একক পাসে সম্পন্ন করে এবং র‍্যামে বাড়তি মেমরি অপচয় রোধ করে'
          },
          {
            en: 'It displays the collection inside an operating system GUI window',
            bn: 'এটি অপারেটিং সিস্টেমের GUI উইন্ডোতে কালেকশনটি প্রদর্শন করে'
          },
          {
            en: 'It converts all numbers into floating-point decimals',
            bn: 'এটি সমস্ত সংখ্যাকে ফ্লোটিং-পয়েন্ট দশমিকে রূপান্তর করে'
          },
          {
            en: 'It permanently deletes duplicated elements',
            bn: 'এটি চিরতরে ডুপ্লিকেট উপাদানগুলো মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Views make transformations lazy to avoid temporary collections.',
          bn: 'ভিউ রূপান্তরগুলোকে লেজি করে মধ্যবর্তী কালেকশন তৈরি ঠেকায়।'
        },
        explanation: {
          en: 'Calling .view creates a lazy view where map and filter operations are not evaluated immediately, but rather fused and evaluated on-demand when requested.',
          bn: '.view ব্যবহারের ফলে মধ্যবর্তী কোনো কালেকশন তৈরি না হয়ে সমস্ত অপারেশন একসাথে প্রয়োজন অনুযায়ী রান হয়।'
        }
      },
      {
        id: 'list-q2',
        kind: 'mcq',
        question: {
          en: 'What does the empty list singleton object Nil represent in Scala?',
          bn: 'স্কালাতে খালি লিস্টের সিঙ্গলটন অবজেক্ট Nil কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'An instance of List[Nothing] representing the terminal end of every singly-linked list',
            bn: 'List[Nothing] এর একটি ইনস্ট্যান্স যা প্রতিটি একক লিংকড লিস্টের সমাপ্তি প্রান্ত নির্দেশ করে'
          },
          {
            en: 'A null pointer in C',
            bn: 'C এর একটি নাল পয়েন্টার'
          },
          {
            en: 'An undefined variable error',
            bn: 'একটি আনডিফাইন্ড ভেরিয়েবল এরর'
          },
          {
            en: 'A special thread lock in the JVM',
            bn: 'জেভিএমের একটি বিশেষ থ্রেড লক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Nil is the empty list in Scala.',
          bn: 'স্কালাতে Nil হলো খালি লিস্ট।'
        },
        explanation: {
          en: 'Nil is the singleton object representing an empty List[Nothing]. Every non-empty List terminates with Nil.',
          bn: 'Nil হলো খালি List[Nothing] এর সিঙ্গলটন অবজেক্ট যা প্রতিটি লিংকড লিস্টের শেষ প্রান্ত চিহ্নিত করে।'
        }
      },
      {
        id: 'list-q3',
        kind: 'mcq',
        question: {
          en: 'How does withFilter differ from filter in Scala collection pipelines?',
          bn: 'স্কালা কালেকশন পাইপলাইনে withFilter কীভাবে filter এর চেয়ে আলাদা?'
        },
        options: [
          {
            en: 'withFilter does not allocate an intermediate filtered collection, instead applying the predicate directly to the downstream map or flatMap',
            bn: 'withFilter কোনো মধ্যবর্তী ফিল্টার্ড কালেকশন তৈরি করে না, বরং পরবর্তী map বা flatMap এ সরাসরি শর্তটি প্রয়োগ করে'
          },
          {
            en: 'withFilter only works on numbers divisible by 2',
            bn: 'withFilter কেবল ২ দ্বারা বিভাজ্য সংখ্যায় কাজ করে'
          },
          {
            en: 'filter runs on the GPU while withFilter runs on the CPU',
            bn: 'filter জিপিইউতে চলে আর withFilter সিপিইউতে চলে'
          },
          {
            en: 'withFilter reverses the order of elements',
            bn: 'withFilter উপাদানগুলোর ক্রম উল্টে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'withFilter is non-strict filtering used by for-comprehensions.',
          bn: 'withFilter হলো মেমরি-সাশ্রয়ী নন-স্ট্রিক্ট ফিল্টারিং।'
        },
        explanation: {
          en: 'withFilter creates a restricted view of the collection that filters elements on the fly during subsequent map/flatMap iterations without allocating memory for an intermediate collection.',
          bn: 'withFilter মধ্যবর্তী কোনো নতুন কালেকশন না বানিয়ে পরবর্তী অপারেশনের সময় সরাসরি শর্ত পূরণকারী উপাদান সরবরাহ করে।'
        }
      },
      {
        id: 'list-q4',
        kind: 'mcq',
        question: {
          en: 'What operator is used to concatenate two immutable Lists in Scala?',
          bn: 'স্কালাতে ২টি ইমিউটেবল List একত্রিত (concatenate) করতে কোন অপারেটর ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'The triple colon operator ::: (e.g. list1 ::: list2)',
            bn: 'ট্রিপল কোলন অপারেটর ::: (যেমন list1 ::: list2)'
          },
          {
            en: 'The single plus operator +',
            bn: 'একক প্লাস অপারেটর +'
          },
          {
            en: 'The arrow operator ->',
            bn: 'তীর অপারেটর ->'
          },
          {
            en: 'The dot operator .',
            bn: 'ডট অপারেটর .'
          }
        ],
        answer: 0,
        hint: {
          en: '::: is list concatenation; :: is element cons.',
          bn: '::: লিস্ট জোড়া দেয়; :: একক উপাদান যোগ করে।'
        },
        explanation: {
          en: 'In Scala, ::: prepends an entire list to another list, while :: prepends a single element to a list.',
          bn: 'স্কালাতে ::: দিয়ে দুটি সম্পূর্ণ লিস্ট জোড়া লাগানো হয় এবং :: দিয়ে একটি একক উপাদান লিস্টের সামনে যুক্ত করা হয়।'
        }
      },
      {
        id: 'list-q5',
        kind: 'mcq',
        question: {
          en: 'Why is structural sharing in persistent data structures critical for garbage collection on the JVM?',
          bn: 'জেভিএমে গার্বেজ কালেকশনের ক্ষেত্রে পারসিস্টেন্ট ডাটা স্ট্রাকচারের স্ট্রাকচারাল শেয়ারিং কেন অত্যন্ত গুরুত্বপূর্ণ?'
        },
        options: [
          {
            en: 'It drastically reduces object allocation rates on the JVM heap, minimizing GC pauses and memory churn',
            bn: 'এটি জেভিএম হিপে অবজেক্ট তৈরির হার বিপুলভাবে কমিয়ে গার্বেজ কালেকশনের বিরতি ও মেমরি চাপ কমায়'
          },
          {
            en: 'It disables the garbage collector entirely so it never runs',
            bn: 'এটি গার্বেজ কালেক্টরকে পুরোপুরি নিষ্ক্রিয় করে দেয় যাতে তা কখনোই না চলে'
          },
          {
            en: 'It compresses data into zip files in memory',
            bn: 'এটি মেমরিতে ডাটাকে জিপ ফাইলে সংকুচিত করে'
          },
          {
            en: 'It encrypts pointer addresses to protect against viruses',
            bn: 'এটি ভাইরাসের বিরুদ্ধে সুরক্ষার জন্য পয়েন্টার ঠিকানা এনক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Less allocation equals fewer GC pauses.',
          bn: 'কম মেমরি বরাদ্দ মানে গার্বেজ কালেকশনের কম বিরতি।'
        },
        explanation: {
          en: 'Structural sharing reuses existing subtrees and cons cells when creating "modified" collections, dramatically reducing heap allocation and minimizing garbage collection overhead.',
          bn: 'স্ট্রাকচারাল শেয়ারিং বিদ্যমান নোডগুলোকে নতুন কালেকশনে পুনর্ব্যবহার করে, ফলে অপ্রয়োজনীয় মেমরি বরাদ্দ ও গার্বেজ কালেকশন কমে যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'traits-and-the-mixin',
    title: {
      en: 'Traits & Mixin Composition: Multiple Inheritance & Linearization',
      bn: 'ট্রেইট ও মিক্সিন কম্পোজিশন: মাল্টিপল ইনহেরিটেন্স ও লিনিয়ারাইজেশন'
    }
  }
};
