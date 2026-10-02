import type { Lesson } from '../../../lib/types';

export const CollectionsAndTheListLesson: Lesson = {
  slug: 'collections-and-the-list',
  tech: 'java',
  title: {
    en: 'The Collections Framework: Lists, Sets & HashMaps',
    bn: 'কালেকশনস ফ্রেমওয়ার্ক: লিস্ট, সেট এবং হ্যাশম্যাপ'
  },
  summary: {
    en: 'Master the Java Collections Framework (JCF): analyze ArrayList dynamic array resizing versus LinkedList node pointers, explore HashSet hashing uniqueness, unpack HashMap bucket collision resolution and Red-Black tree conversion at threshold 8, and leverage thread-safe ConcurrentHashMap.',
    bn: 'জাভা কালেকশনস ফ্রেমওয়ার্ক (JCF) আয়ত্ত করুন: ArrayList ডাইনামিক অ্যারে বনাম LinkedList পয়েন্টার, HashSet এর হ্যাশিং মেকানিজম, ৮ এর থ্রেশহোল্ডে HashMap বাকেট সংঘাত সমাধান ও রেড-ব্ল্যাক ট্রি রূপান্তর এবং থ্রেড-সেফ ConcurrentHashMap।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'collections-hierarchy-and-lists-heading',
      text: {
        en: 'The Collections Hierarchy, ArrayList Growth Factors, and LinkedList Nodes',
        bn: 'কালেকশনস হায়ারার্কি, ArrayList এর গ্রোথ ফ্যাক্টর এবং LinkedList নোডস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Java Collections Framework (JCF) provides unified data structures rooted at the Collection interface (branching into List, Set, and Queue) and the Map interface for key-value pairings. The primary List implementation, ArrayList, manages an internal contiguous array: it delivers instant O(1) random index access but incurs O(N) element-shifting overhead when inserting into the middle. When capacity is exceeded, ArrayList dynamically resizes by allocating a new array scaled by a 1.5 growth factor. In contrast, LinkedList uses doubly linked nodes providing O(1) head/tail insertions at the cost of O(N) sequential search traversal.',
        bn: 'জাভা কালেকশনস ফ্রেমওয়ার্ক (JCF) সুশৃঙ্খল ডেটা স্ট্রাকচার সরবরাহ করে যা Collection ইন্টারফেস (List, Set ও Queue) এবং কি-ভ্যালু জোড়ার জন্য Map ইন্টারফেসের ওপর প্রতিষ্ঠিত। বহুল ব্যবহৃত ArrayList মূলত একটি মেমোরি অ্যারে পরিচালনা করে: এটি তাৎক্ষণিক O(1) গতিতে ইনডেক্স থেকে ডেটা পড়তে পারে, তবে মাঝে ডেটা ঢোকাতে গেলে O(N) শিফটিং লাগে। ধারণক্ষমতা ফুরিয়ে গেলে ArrayList স্বয়ংক্রিয়ভাবে ১.৫ গুণ বড় নতুন অ্যারে তৈরি করে আগের ডেটা কপি করে নেয়। অপরদিকে LinkedList প্রতিটি উপাদানের জন্য দুইমুখী লিংকড নোড ব্যবহার করে, যা শুরুতে ও শেষে O(1) গতিতে ডেটা ঢোকানোর সুবিধা দিলেও খোঁজার ক্ষেত্রে ধীরগতির O(N) সময় নেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Internal memory structure of Java Collections hierarchy and HashMap collision treeification at threshold 8.',
        bn: 'চিত্র ১: জাভা কালেকশনস হায়ারার্কি এবং ৮ এর থ্রেশহোল্ডে HashMap বাকেট সংঘাত থেকে রেড-ব্ল্যাক ট্রিতে রূপান্তরের চিত্র।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">JAVA COLLECTIONS FRAMEWORK &amp; HASHMAP BUCKET ARCHITECTURE</text>

  <!-- Left: ArrayList Memory -->
  <g transform="translate(35, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#0284c7" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">ArrayList: Contiguous Memory Array</text>

    <rect x="15" y="45" width="335" height="50" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="68" fill="#38bdf8" font-size="11" font-family="monospace">Initial Capacity: 10 elements</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">Random access: get(i) -&gt; O(1) instant</text>

    <rect x="15" y="105" width="335" height="60" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="128" fill="#fbbf24" font-size="10" font-family="monospace">Resize Strategy: 1.5x Expansion</text>
    <text x="25" y="148" fill="#34d399" font-size="9" font-family="monospace">newCapacity = old + (old &gt;&gt; 1)</text>

    <text x="20" y="205" fill="#38bdf8" font-size="10" font-family="sans-serif">CPU Cache Friendly</text>
  </g>

  <!-- Right: HashMap Collision Tree -->
  <g transform="translate(440, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#7e22ce" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">HashMap: Bucket Collision Treeification</text>

    <rect x="15" y="45" width="335" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="25" y="68" fill="#c084fc" font-size="11" font-family="monospace">Default: 16 Buckets, Load 0.75</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">Linked chain when items &lt; 8</text>

    <rect x="15" y="105" width="335" height="60" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="25" y="128" fill="#34d399" font-size="10" font-family="monospace">Threshold 8: Converts to Red-Black Tree</text>
    <text x="25" y="148" fill="#c084fc" font-size="9" font-family="monospace">Lookup improves from O(N) to O(log N)</text>

    <text x="20" y="205" fill="#c084fc" font-size="10" font-family="sans-serif">Defends Against HashDoS</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'hashmap-internals-and-concurrency-heading',
      text: {
        en: 'HashMap Bucket Collisions, Treeification, and ConcurrentHashMap',
        bn: 'HashMap বাকেট সংঘাত, ট্রি রূপান্তর এবং ConcurrentHashMap'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The standard Java HashMap maintains an array of hash buckets initialized to a default capacity of 16 with a 0.75 load factor. Keys are mapped to buckets via key.hashCode() bitwise operations. When different keys hash into the identical bucket, entries form a linked list. Starting in Java 8, when any single bucket chain accumulates 8 entries and total table capacity reaches 64, Java converts that bucket list into a balanced Red-Black Tree, improving lookup times from O(N) to O(log N). In high-concurrency multi-threaded environments, standard HashMaps suffer race conditions and infinite loops; applications must utilize ConcurrentHashMap, which synchronizes at the per-bucket level without locking the entire map.',
        bn: 'সাধারণ জাভা HashMap ১৬ টি বাকেটের প্রাথমিক ধারণক্ষমতা এবং ০.৭৫ লোড ফ্যাক্টর দিয়ে শুরু হয়। কি-এর হ্যাশকোড হিসাব করে নির্দিষ্ট বাকেটে ডেটা জমা রাখা হয়। ভিন্ন কি একই বাকেটে পড়লে লিংকড লিস্ট চেইন তৈরি হয়। জাভা ৮ থেকে নিয়ম করা হয়েছে যে কোনো একটি বাকেটে উপাদান সংখ্যা ৮ এ পৌঁছালে এবং মোট টেবিল ক্যাপাসিটি অন্তত ৬৪ হলে, জাভা সেই লিস্টটিকে একটি ব্যালেন্সড রেড-ব্ল্যাক ট্রিতে রূপান্তর করে, যার ফলে খোঁজার সময় O(N) থেকে দ্রুত O(log N) এ নেমে আসে। মাল্টি-থ্রেডিং পরিবেশে সাধারণ HashMap ব্যবহার করলে ডেটা নষ্ট হতে পারে; তাই উচ্চ-গতির সিস্টেমে ConcurrentHashMap ব্যবহার করা আবশ্যক, যা পুরো টেবিল লক না করে নির্দিষ্ট বাকেটের ওপর কাজ পরিচালনা করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Java ArrayList dynamic resizing and HashMap bucket collision treeification at threshold 8.',
        bn: 'জাভা ArrayList এর মেমোরি বৃদ্ধি এবং ৮ এর থ্রেশহোল্ডে HashMap বাকেটের ট্রি রূপান্তরের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Java ArrayList Resizing and HashMap Collision Resolution

// 1. Simulating Java ArrayList 1.5x Dynamic Growth
export class ArrayListSimulator<T> {
  private capacity: number = 10;
  private elements: (T | undefined)[] = new Array(10);
  public size: number = 0;

  public add(item: T): void {
    if (this.size >= this.capacity) {
      // 1.5x expansion rule: newCap = old + (old >> 1)
      const newCapacity = this.capacity + Math.floor(this.capacity / 2);
      const newArray = new Array(newCapacity);
      for (let i = 0; i < this.size; i++) newArray[i] = this.elements[i];
      this.elements = newArray;
      this.capacity = newCapacity;
    }
    this.elements[this.size] = item;
    this.size += 1;
  }

  public getCapacity(): number {
    return this.capacity;
  }
}

// 2. Simulating HashMap Bucket Treeification at Threshold 8
export class HashMapBucketSimulator {
  private bucketCount: number = 0;
  public isTreeified: boolean = false;

  public insertKey(key: string): string {
    this.bucketCount += 1;
    if (this.bucketCount >= 8) {
      this.isTreeified = true;
      return 'Red-Black Tree: O(log N) lookup';
    }
    return 'Linked List: O(N) traversal';
  }
}

// Executing demonstrations
const list = new ArrayListSimulator<number>();
for (let i = 0; i < 11; i++) list.add(i * 10);
console.log('ArrayList Size after 11 items:', list.size); // 11
console.log('Resized Capacity (10 -> 15):', list.getCapacity()); // 15

const bucket = new HashMapBucketSimulator();
for (let i = 1; i <= 7; i++) bucket.insertKey('key_' + i);
console.log('Status at 7 items:', bucket.isTreeified); // false (Linked List)

bucket.insertKey('key_8');
console.log('Status at 8 items (Treeified):', bucket.isTreeified); // true`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Java Collections Framework (JCF)',
          def: {
            en: 'Unified architecture of interfaces (List, Set, Map, Queue) and concrete implementations managing collections of objects.',
            bn: 'ইন্টারফেস ও ক্লাসের সুবিন্যস্ত কাঠামো যা অবজেক্টের বিভিন্ন কালেকশন পরিচালনা করার সুবিধা দেয়।'
          }
        },
        {
          term: 'ArrayList Resizing',
          def: {
            en: 'Process allocating a 1.5x larger contiguous backing array when current capacity is exceeded during an add operation.',
            bn: 'অ্যারে পূর্ণ হয়ে গেলে স্বয়ংক্রিয়ভাবে ১.৫ গুণ বড় নতুন মেমোরি তৈরি করে ডেটা স্থানান্তরের প্রক্রিয়া।'
          }
        },
        {
          term: 'HashMap Treeification',
          def: {
            en: 'Conversion of a colliding bucket from a singly linked list to a balanced Red-Black tree when chain length reaches 8.',
            bn: 'বাকেটের উপাদানের সংখ্যা ৮ এ পৌঁছালে লিংকড লিস্ট থেকে রেড-ব্ল্যাক ট্রিতে রূপান্তর করার প্রক্রিয়া।'
          }
        },
        {
          term: 'ConcurrentHashMap',
          def: {
            en: 'High-performance thread-safe Map implementation providing non-blocking concurrent reads and bucket-level write locks.',
            bn: 'থ্রেড-সেফ ম্যাপ যা কোনো ফুল-টেবিল লক ছাড়াই সমান্তরাল রিড এবং বাকেট-লেভেল রাইট লকিং সুবিধা দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'arraylist-vs-linkedlist-random-access-ex1',
      kind: 'mcq',
      topic: 'arraylist-random-access-complexity',
      question: {
        en: 'What is the time complexity of calling get(500) on an ArrayList containing 1000 items versus a LinkedList?',
        bn: '১০০০ উপাদানযুক্ত তালিকায় get(500) ডাকার ক্ষেত্রে ArrayList এবং LinkedList এর টাইম কমপ্লেক্সিটি কেমন হয়?'
      },
      options: [
        {
          en: 'ArrayList takes O(1) instant time due to direct array index math; LinkedList takes O(N) linear time traversing 500 node pointers',
          bn: 'ArrayList সরাসরি ইনডেক্স ব্যবহার করায় তাৎক্ষণিক O(1) সময় নেয়; আর LinkedList কে ৫০০ টি নোড পেরিয়ে যেতে O(N) সময় লাগে'
        },
        {
          en: 'Both take O(1) instant time',
          bn: 'উভয়ই তাৎক্ষণিক O(1) সময় নেয়'
        },
        {
          en: 'LinkedList takes O(1) and ArrayList takes O(N)',
          bn: 'LinkedList O(1) নেয় আর ArrayList O(N) নেয়'
        },
        {
          en: 'Both take 500 seconds',
          bn: 'উভয়েরই ৫০০ সেকেন্ড সময় লাগে'
        }
      ],
      answer: 0,
      hint: {
        en: 'ArrayList uses contiguous memory index offsets; LinkedList must traverse sequential node pointers.',
        bn: 'ArrayList সরাসরি মেমোরি ঠিকানা দিয়ে একবারে পৌঁছায়; আর LinkedList কে একের পর এক নোড ধরে যেতে হয়।'
      },
      explanation: {
        en: 'ArrayList index lookups are pure memory arithmetic O(1); LinkedList must traverse from head or tail node-by-node O(N).',
        bn: 'ArrayList সরাসরি মেমোরি ক্যালকুলেশন দিয়ে দ্রুত O(1) এ মান পায়, যেখানে LinkedList এর ক্ষেত্রে পয়েন্টার ট্রাভার্সাল লাগে।'
      }
    },
    {
      id: 'hashmap-treeify-threshold-ex2',
      kind: 'mcq',
      topic: 'hashmap-treeify-threshold-count',
      question: {
        en: 'At what collision chain length threshold does Java 8+ convert a HashMap linked list bucket into a Red-Black Tree?',
        bn: 'জাভা ৮+ এ কোনো একটি বাকেটে উপাদান সংখ্যা কততে পৌঁছালে লিংকড লিস্টটি রেড-ব্ল্যাক ট্রিতে রূপান্তরিত হয়?'
      },
      options: [
        { en: '8 elements (TREEIFY_THRESHOLD)', bn: '৮ টি উপাদান (TREEIFY_THRESHOLD)' },
        { en: '2 elements', bn: '২ টি উপাদান' },
        { en: '100 elements', bn: '১০০ টি উপাদান' },
        { en: '1000 elements', bn: '১০০০ টি উপাদান' }
      ],
      answer: 0,
      hint: {
        en: 'TREEIFY_THRESHOLD is standardized to 8 in java.util.HashMap.',
        bn: 'java.util.HashMap এ ট্রি রূপান্তরের থ্রেশহোল্ড মান নির্ধারিত রয়েছে ৮ এ।'
      },
      explanation: {
        en: 'When a bucket chain reaches 8 entries and total table capacity is at least 64, it treeifies to guarantee O(log N) worst-case lookup.',
        bn: 'একটি বাকেটে ৮ টি উপাদান জমলে এবং টেবিল ক্যাপাসিটি অন্তত ৬৪ হলে এটি ট্রিতে বদলে গিয়ে দ্রুত O(log N) গতি দেয়।'
      }
    },
    {
      id: 'hashset-internal-implementation-ex3',
      kind: 'mcq',
      topic: 'hashset-internal-hashmap-backing',
      question: {
        en: 'How does HashSet ensure element uniqueness internally in Java?',
        bn: 'জাভাতে HashSet কীভাবে অভ্যন্তরীণভাবে উপাদানগুলোর অনন্যতা (uniqueness) নিশ্চিত করে?'
      },
      options: [
        {
          en: 'It is backed internally by a HashMap where added elements serve as keys and a static dummy Object serves as the value',
          bn: 'এটি অভ্যন্তরীণভাবে একটি HashMap ব্যবহার করে যেখানে সেটের উপাদানগুলো কি হিসেবে থাকে এবং একটি ডামি অবজেক্ট ভ্যালু হিসেবে ব্যবহৃত হয়'
        },
        {
          en: 'It sorts an array every time a new element is added',
          bn: 'নতুন উপাদান যুক্ত হলে এটি প্রতিবার সম্পূর্ণ অ্যারে সাজায়'
        },
        {
          en: 'It asks the operating system kernel to check uniqueness',
          bn: 'অনন্যতা পরীক্ষার জন্য এটি ওএস কার্নেলের সাহায্য নেয়'
        },
        {
          en: 'HashSet allows duplicate elements freely',
          bn: 'HashSet কোনো বাধা ছাড়াই ডুপ্লিকেট উপাদান রাখতে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'HashSet delegates storage directly to an internal HashMap instance.',
        bn: 'HashSet তার সমস্ত ডেটা একটি অভ্যন্তরীণ HashMap অবজেক্টে সংরক্ষণ করে।'
      },
      explanation: {
        en: 'HashSet wraps a HashMap, using Map key uniqueness to guarantee that set elements cannot contain duplicates.',
        bn: 'HashSet ম্যাপের কি-এর অনন্যতার সুবিধা গ্রহণ করে সেটে কোনো ডুপ্লিকেট ডেটা প্রবেশ করতে দেয় না।'
      }
    },
    {
      id: 'concurrent-hashmap-locking-granularity-ex4',
      kind: 'mcq',
      topic: 'concurrent-hashmap-locking-granularity',
      question: {
        en: 'Why is ConcurrentHashMap drastically superior to Hashtable or Collections.synchronizedMap() in multi-threaded systems?',
        bn: 'মাল্টি-থ্রেডেড সিস্টেমে Hashtable বা synchronizedMap এর চেয়ে ConcurrentHashMap বহুগুণ শ্রেষ্ঠ কেন?'
      },
      options: [
        {
          en: 'It locks only the specific bucket node being modified while allowing non-blocking concurrent reads, avoiding whole-table synchronization bottlenecks',
          bn: 'এটি সম্পূর্ণ টেবিল লক না করে শুধুমাত্র নির্দিষ্ট বাকেটে লক বসায় এবং নন-ব্লকিং রিড সুবিধা দেয়, ফলে কোনো কনকারেন্সি জ্যাম তৈরি হয় না'
        },
        {
          en: 'ConcurrentHashMap runs on GPU accelerators',
          bn: 'ConcurrentHashMap জিপিইউ অ্যাক্সিলারেটরে চলে'
        },
        {
          en: 'It deletes conflicting threads from the CPU',
          bn: 'এটি সংঘাতপূর্ণ থ্রেডগুলোকে সিপিইউ থেকে মুছে ফেলে'
        },
        {
          en: 'It limits collections to 10 elements',
          bn: 'এটি কালেকশনকে ১০ উপাদানে সীমাবদ্ধ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Fine-grained bucket-level synchronization avoids bottlenecking unrelated keys.',
        bn: 'বাকেট-স্তরের সূক্ষ্ম লকিং ব্যবস্থা অন্যান্য কি-এর কাজে কোনো বাধা সৃষ্টি করে না।'
      },
      explanation: {
        en: 'ConcurrentHashMap provides lock-free reads and bucket-level synchronized writes, scaling linearly across CPU cores.',
        bn: 'ConcurrentHashMap রিডের ক্ষেত্রে কোনো লক ব্যবহার না করে এবং রাইটে বাকেট লক দিয়ে সর্বোচ্চ গতি দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-collections-and-the-list',
    title: {
      en: 'Java Collections Framework and HashMaps Quiz',
      bn: 'জাভা কালেকশনস ফ্রেমওয়ার্ক এবং হ্যাশম্যাপ কুইজ'
    },
    questions: [
      {
        id: 'quiz-unmodifiable-collections-mutation',
        kind: 'mcq',
        topic: 'list-of-unmodifiable-behavior',
        question: {
          en: 'What occurs if code executes list.add("newItem") on a list instantiated via List.of("A", "B") in Java 9+?',
          bn: 'জাভা ৯+ এ List.of("A", "B") দিয়ে তৈরি লিস্টে list.add("newItem") চালালে কী ঘটে?'
        },
        options: [
          {
            en: 'Java throws an UnsupportedOperationException because factory collections created via List.of() are strictly immutable',
            bn: 'জাভা সাথে সাথে UnsupportedOperationException ছুড়ে দেয় কারণ List.of() দিয়ে তৈরি কালেকশনগুলো সম্পূর্ণ অপরিবর্তনীয়'
          },
          {
            en: 'The item is added silently without issue',
            bn: 'আইটেমটি কোনো সমস্যা ছাড়াই যোগ হয়ে যায়'
          },
          {
            en: 'The list is deleted from the heap',
            bn: 'লিস্টটি হিপ থেকে মুছে যায়'
          },
          {
            en: 'The entire JVM shuts down immediately',
            bn: 'সম্পূর্ণ JVM সাথে সাথে বন্ধ হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'List.of(), Set.of(), and Map.of() produce structurally unmodifiable collections.',
          bn: 'List.of(), Set.of() এবং Map.of() সম্পূর্ণ অপরিবর্তনীয় কালেকশন তৈরি করে।'
        },
        explanation: {
          en: 'Modern factory methods return immutable collection instances; attempting mutation throws UnsupportedOperationException.',
          bn: 'এই আধুনিক মেথডগুলো অপরিবর্তনীয় ইনস্ট্যান্স দেয়, ফলে মান যোগ বা মুছতে গেলে এক্সেপশন দেখা দেয়।'
        }
      },
      {
        id: 'quiz-fail-fast-iterators-cme',
        kind: 'mcq',
        topic: 'fail-fast-concurrent-modification-exception',
        question: {
          en: 'What triggers a ConcurrentModificationException when iterating over a standard ArrayList with an Iterator or for-each loop?',
          bn: 'Iterator বা for-each লুপ দিয়ে সাধারণ ArrayList পড়ার সময় কোন কাজের কারণে ConcurrentModificationException ঘটে?'
        },
        options: [
          {
            en: 'Modifying the list structurally (calling list.add() or list.remove()) directly rather than through the iterator\'s own remove() method while iterating',
            bn: 'লুপ চলাকালীন ইটারেটরের নিজস্ব মেথড ব্যবহার না করে সরাসরি লিস্টের list.add() বা list.remove() কল করে আকার পরিবর্তন করলে'
          },
          {
            en: 'Reading numbers larger than 1000',
            bn: '১০০০ এর চেয়ে বড় সংখ্যা পড়লে'
          },
          {
            en: 'Iterating on a computer with more than 1 CPU core',
            bn: '১ টির বেশি সিপিইউ কোরযুক্ত কম্পিউটারে কোড চালালে'
          },
          {
            en: 'Iterating over strings containing spaces',
            bn: 'স্পেসযুক্ত স্ট্রিং নিয়ে লুপ চালালে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fail-fast iterators detect mismatch between the expected modCount and active modCount.',
          bn: 'ফেল-ফাস্ট ইটারেটর লুপ চলাকালীন ডেটার আকার বদলে গেলে অসঙ্গতি শনাক্ত করে এরর দেয়।'
        },
        explanation: {
          en: 'Direct structural mutations alter modCount, causing the fail-fast iterator to immediately raise ConcurrentModificationException.',
          bn: 'সরাসরি লিস্ট বদলালে modCount বদলে যায়, ফলে নিরাপদ রাখতে ইটারেটর সাথে সাথে এক্সেপশন ছুড়ে দেয়।'
        }
      },
      {
        id: 'quiz-treemap-ordering-guarantee',
        kind: 'mcq',
        topic: 'treemap-sorted-keys-guarantee',
        question: {
          en: 'How does TreeMap differ fundamentally from HashMap in the arrangement of its keys?',
          bn: 'কি সংরক্ষণের ক্ষেত্রে TreeMap কীভাবে HashMap থেকে মৌলিকভাবে আলাদা?'
        },
        options: [
          {
            en: 'TreeMap maintains keys in sorted order according to their natural ordering or a custom Comparator, using a Red-Black Tree',
            bn: 'TreeMap একটি রেড-ব্ল্যাক ট্রি ব্যবহার করে কি-গুলোকে তাদের প্রাকৃতিক বা নির্ধারিত ক্রমানুসারে সাজিয়ে রাখে'
          },
          {
            en: 'TreeMap stores data inside flat text files',
            bn: 'TreeMap সাধারণ টেক্সট ফাইলে ডেটা জমা রাখে'
          },
          {
            en: 'TreeMap only accepts integer numbers as keys',
            bn: 'TreeMap কেবল পূর্ণসংখ্যা কি হিসেবে গ্রহণ করে'
          },
          {
            en: 'There is zero difference; TreeMap is deprecated',
            bn: 'তাদের মধ্যে কোনো পার্থক্য নেই; TreeMap বাতিল হয়ে গেছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'TreeMap implements NavigableMap, keeping all entries strictly sorted by key.',
          bn: 'TreeMap কি-গুলোকে সর্বদা সুশৃঙ্খলভাবে সাজিয়ে রেখে দ্রুত নেভিগেশন সুবিধা দেয়।'
        },
        explanation: {
          en: 'TreeMap uses a Red-Black tree guaranteeing keys remain sorted with O(log N) search and insertion costs.',
          bn: 'TreeMap রেড-ব্ল্যাক ট্রি দিয়ে কি সাজিয়ে রাখে এবং O(log N) গতিতে যেকোনো মান খুঁজে বের করে।'
        }
      },
      {
        id: 'quiz-hashmap-initial-capacity-power-of-two',
        kind: 'mcq',
        topic: 'hashmap-power-of-two-capacity-math',
        question: {
          en: 'Why does HashMap always adjust its internal bucket array table capacity to a power of 2 (e.g. 16, 32, 64)?',
          bn: 'HashMap কেন সর্বদা তার অভ্যন্তরীণ বাকেট টেবিল ক্যাপাসিটিকে ২ এর গুণিতক আকারে (যেমন ১৬, ৩২, ৬৪) সমন্বয় করে রাখে?'
        },
        options: [
          {
            en: 'It enables high-speed bitwise masking (hash & (n - 1)) to calculate bucket indices instead of slow mathematical modulo (%) operations',
            bn: 'এটি ধীরগতির মডিউলো (%) ভাগশেষ অপারেশনের বদলে অত্যন্ত দ্রুতগতির বিটওয়াইজ মাস্কিং (hash & (n - 1)) দিয়ে বাকেট ইনডেক্স বের করতে সাহায্য করে'
          },
          {
            en: 'Because computer hardware can only store even numbers',
            bn: 'কারণ কম্পিউটার হার্ডওয়্যার কেবল জোড় সংখ্যা মনে রাখতে পারে'
          },
          {
            en: 'To reduce network bandwidth consumption',
            bn: 'নেটওয়ার্ক ব্যান্ডউইথ খরচ কমাতে'
          },
          {
            en: 'It is an arbitrary historical design choice with no performance impact',
            bn: 'এটি পারফরম্যান্সের সাথে সম্পর্কহীন একটি পুরানো সাধারণ সিদ্ধান্ত'
          }
        ],
        answer: 0,
        hint: {
          en: 'When N is a power of 2, (hash % N) is mathematically identical to bitwise (hash & (N - 1)).',
          bn: 'N যদি ২ এর গুণিতক হয়, তবে (hash % N) এবং (hash & (N - 1)) অবিকল একই ফলাফল দেয়।'
        },
        explanation: {
          en: 'Bitwise AND (&) executes in a single CPU cycle, far outpacing expensive integer division/modulo instructions.',
          bn: 'বিটওয়াইজ অ্যান্ড অপারেশন প্রসেসরে তাৎক্ষণিক এক সাইকেলে সম্পন্ন হয়, যা সাধারণ ভাগের চেয়ে অনেক দ্রুত।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'exceptions-and-the-catch',
    title: {
      en: 'Exception Architecture, AutoCloseable & Recovery',
      bn: 'এক্সেপশন আর্কিটেকচার, AutoCloseable এবং রিকভারি'
    }
  }
};
