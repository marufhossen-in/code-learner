import type { Lesson } from '../../../lib/types';

export const pointerThinkingLesson: Lesson = {
  slug: 'pointer-thinking',
  tech: 'linked-lists',
  title: {
    en: 'Pointer Thinking: Foundations of Linked Nodes, Memory Layout & Reachability',
    bn: 'পয়েন্টার চিন্তাভাবনা: লিঙ্কড নোডের ভিত্তি, মেমরি বিন্যাস ও প্রবেশযোগ্যতা'
  },
  summary: {
    en: 'A comprehensive systems engineering introduction to pointer machines, heap node allocation, and linked list data structures. While contiguous arrays rent contiguous physical memory to deliver O(1) random access, they penalize insertions with O(N) element shifts. Linked lists invert this economic model: nodes reside at arbitrary heap memory addresses, connected strictly by unidirectional next references. We analyze the memory overhead of node allocations on 64-bit architectures, the single-door head reference invariant, the reachability laws of automatic garbage collection, and traversal complexities. Using an executable TypeScript simulation, we trace how prepending elements executes in constant O(1) time without moving existing elements.',
    bn: 'পয়েন্টার মেশিন, হিপ নোড বরাদ্দ এবং লিঙ্কড লিস্ট ডেটা কাঠামোর একটি পূর্ণাঙ্গ সিস্টেম ইঞ্জিনিয়ারিং ভূমিকা। সংলগ্ন মেমরি অ্যারে O(1) সরাসরি অ্যাক্সেস দিলেও উপাদানের শুরুতে বা মাঝে সন্নিবেশের জন্য O(N) উপাদান সরানোর খরচ দিতে হয়। লিঙ্কড লিস্ট এই মডেলটিকে বদলে দেয়: নোডগুলো হিপ মেমরির যেকোনো ঠিকানায় থাকে এবং শুধুমাত্র একমুখী next রেফারেন্স দিয়ে একে অপরের সাথে যুক্ত হয়। আমরা ৬৪-বিট আর্কিটেকচারে নোড বরাদ্দের মেমরি ওভারহেড, একক প্রবেশদ্বার head রেফারেন্স নীতি, স্বয়ংক্রিয় গার্বেজ কালেকশনের প্রবেশযোগ্যতার নিয়ম এবং ট্রাভার্সাল জটিলতা বিশ্লেষণ করেছি। একটি বাস্তব এক্সিকিউটেবল সিমুলেশনের মাধ্যমে দেখানো হয়েছে কীভাবে কোনো উপাদান স্থানান্তরিত না করেই ধ্রুব O(1) সময়ে নতুন নোড যুক্ত করা যায়।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'Array Slabs vs Pointer Chains: The Memory Architecture Trade-Off',
        bn: 'অ্যারে স্ল্যাব বনাম পয়েন্টার চেইন: মেমরি আর্কিটেকচারের সুবিধা-অসুবিধা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this lesson, we examine the fundamental computer architecture trade-off between contiguous arrays and linked pointer structures. Arrays allocate a single contiguous slab of memory, calculating element addresses via arithmetic: address = base + index * size. This grants instant O(1) random access by index. However, inserting an element at the beginning requires shifting all N subsequent elements forward in memory, costing O(N) time. Linked lists eliminate shifting by breaking contiguity entirely. Each element is an independent node residing at an arbitrary virtual memory address, holding a forward reference to the next node.',
        bn: 'এই পাঠে আমরা সংলগ্ন মেমরি অ্যারে এবং লিঙ্কড পয়েন্টার কাঠামোর মৌলিক হার্ডওয়্যার পার্থক্য পর্যালোচনা করব। অ্যারে মেমরির একটি অবিচ্ছিন্ন অংশ বরাদ্দ করে এবং গাণিতিক সূত্রের সাহায্যে সরাসরি উপাদানের ঠিকানা বের করে: address = base + index * size। এর ফলে যেকোনো ইনডেক্সে তাৎক্ষণিক ধ্রুব O(1) সময়ে প্রবেশ করা যায়। কিন্তু অ্যারের শুরুতে একটি নতুন উপাদান সন্নিবেশ করতে পেছনের সমস্ত N উপাদানকে মেমরিতে এক ধাপ করে সরাতে হয়, যা O(N) সময় নষ্ট করে। লিঙ্কড লিস্ট উপাদানগুলোকে মেমরিতে ছড়িয়ে রেখে এই সরানোর খরচ পুরোপুরি দূর করে। প্রতিটি উপাদান হিপ মেমরির যেকোনো ঠিকানায় একটি স্বাধীন নোড হিসেবে থাকে এবং পরবর্তী নোডের ঠিকানার রেফারেন্স ধারণ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'node',
          def: {
            en: 'The fundamental discrete heap allocation in a linked structure, containing a data payload and at least one directional pointer reference.',
            bn: 'একটি লিঙ্কড কাঠামোর মূল বিচ্ছিন্ন মেমরি একক, যা মূল উপাত্ত এবং পরবর্তী নোডের দিকে নির্দেশকারী অন্তত একটি দিকনির্দেশক রেফারেন্স পয়েন্টার ধারণ করে।'
          }
        },
        {
          term: 'next pointer',
          def: {
            en: 'A reference field within a node storing the virtual memory address of the subsequent node in the chain, or null if the node terminates the list.',
            bn: 'নোডের ভেতরের একটি রেফারেন্স ফিল্ড যা শিকলের পরবর্তী নোডের মেমরি ঠিকানা সংরক্ষণ করে, অথবা তালিকা শেষ হলে null ধারণ করে।'
          }
        },
        {
          term: 'head reference',
          def: {
            en: 'The solitary pointer variable anchoring the beginning of the list; losing or overwriting head renders all downstream nodes instantly unreachable.',
            bn: 'তালিকার শুরু নির্দেশকারী একমাত্র পয়েন্টার ভেরিয়েবল; head মুছে গেলে বা ভুল মান বসলে তালিকার পেছনের সমস্ত নোড সাথে সাথে বিচ্ছিন্ন হয়ে যায়।'
          }
        },
        {
          term: 'reachability',
          def: {
            en: 'The graph-traversal invariant governing garbage collection: a heap node remains alive only while an unbroken path of references connects it from the root set.',
            bn: 'গার্বেজ কালেকশনের ভিত্তি নিয়ম: মেমরির রুট সেট থেকে একটি সক্রিয় রেফারেন্সের পথ যুক্ত থাকা পর্যন্তই কেবল হিপ মেমরির নোড বেঁচে থাকে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'layout',
      text: {
        en: 'Node Anatomy and Heap Allocator Overhead on 64-Bit Architectures',
        bn: 'নোডের গঠন এবং ৬৪-বিট আর্কিটেকচারে হিপ মেমরির অপচয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A linked list achieves structural flexibility by sacrificing memory density. In a flat array of 64-bit integers, each item consumes exactly 8 bytes of physical RAM. In a linked list, each node is an independent heap object allocated through the runtime memory manager. On a 64-bit operating system, a node structure requires an 8-byte pointer for next, an 8-byte pointer or integer for payload, and 16 bytes of allocator object header. Consequently, storing a single 8-byte number requires 32 bytes of physical RAM, imposing a 4x memory footprint inflation.',
        bn: 'লিঙ্কড লিস্ট কাঠামো সাজানোর স্বাধীনতা দেয় ঠিকই, কিন্তু এর বিনিময়ে প্রচুর মেমরি অপচয় করে। ৬৪-বিট পূর্ণসংখ্যার একটি সাধারণ ফ্ল্যাট অ্যারেতে প্রতিটি মান ঠিক ৮ বাইট র‍্যাম খরচ করে। কিন্তু লিঙ্কড লিস্টে প্রতিটি উপাদান মেমরি ম্যানেজারের মাধ্যমে হিপে তৈরি হওয়া একটি আলাদা অবজেক্ট। ৬৪-বিট অপারেটিং সিস্টেমে প্রতিটি নোডে পরবর্তী ঠিকানার জন্য ৮ বাইট পয়েন্টার, মূল উপাত্তের জন্য ৮ বাইট এবং অবজেক্ট হেডারের জন্য ১৬ বাইট জায়গা লাগে। এর ফলে মাত্র ৮ বাইটের একটি সংখ্যা সংরক্ষণ করতে মোট ৩২ বাইট মেমরি খরচ হয়, যা মূল আকারের চেয়ে ৪ গুণ বেশি।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Furthermore, non-contiguous allocation destroys CPU hardware prefetching. When a processor core traverses an array, adjacent elements reside on the same 64-byte cache line. The hardware prefetcher detects the linear stride and streams successive cache lines from main RAM before instructions request them. In contrast, linked nodes are scattered across non-contiguous heap pages. Traversing each node forces an unpredictable memory dereference, stalling the CPU execution pipeline for 50 to 100 clock cycles on each hop.',
        bn: 'তাছাড়া মেমরির সংলগ্নতা না থাকায় সিপিইউ হার্ডওয়্যার প্রিফেচার সম্পূর্ণ অকার্যকর হয়ে পড়ে। যখন প্রসেসর কোর একটি সাধারণ অ্যারে পড়ে, তখন সংলগ্ন উপাদানগুলো একই ৬৪-বাইট ক্যাশ লাইনে একসাথে চলে আসে। হার্ডওয়্যার প্রিফেচার এই সরল গতিপথ বুঝতে পেরে নির্দেশনার আগেই মূল মেমরি থেকে পরবর্তী ক্যাশ লাইন নিয়ে আসে। কিন্তু লিঙ্কড নোডগুলো মেমরির এলোমেলো ঠিকানায় ছড়িয়ে থাকে। ফলে প্রতিটি নোডে যাওয়ার সময় সিপিইউকে বিচ্ছিন্ন মেমরি পড়তে হয় এবং প্রতি পদক্ষেপে ৫০ থেকে ১০০ ক্লক সাইকেল অলস অপেক্ষা করতে হয়।'
      }
    },
    {
      type: 'heading',
      id: 'visual-guide',
      text: {
        en: 'Visualizing Linked Nodes and Pointer Connections',
        bn: 'লিঙ্কড নোড এবং পয়েন্টার সংযোগের ভিজ্যুয়ালাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'll'
    },
    {
      type: 'heading',
      id: 'code',
      text: {
        en: 'Empirical Verification: Constant-Time Prepend vs Hop Traversal',
        bn: 'বাস্তব যাচাই: ধ্রুব সময়ের শুরুতেই সন্নিবেশ বনাম ক্রমান্বয়ে পদার্পণ'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      code: `// Concrete implementation of Singly Linked List foundations
class ListNode<T> {
  val: T;
  next: ListNode<T> | null;

  constructor(val: T, next: ListNode<T> | null = null) {
    this.val = val;
    this.next = next;
  }
}

class SinglyLinkedList<T> {
  head: ListNode<T> | null = null;
  size = 0;

  // Prepend: Insert at head in strictly constant O(1) time
  prepend(val: T): void {
    const newNode = new ListNode<T>(val, this.head);
    this.head = newNode;
    this.size++;
  }

  // Get element at index: requires exactly index pointer hops (O(k))
  getAt(index: number): { val: T | null; hops: number } {
    if (index < 0 || index >= this.size) return { val: null, hops: 0 };
    let curr = this.head;
    let hops = 0;
    for (let i = 0; i < index; i++) {
      curr = curr!.next;
      hops++;
    }
    return { val: curr!.val, hops };
  }

  // Traversal: returns all values as an array
  toArray(): T[] {
    const result: T[] = [];
    let curr = this.head;
    while (curr !== null) {
      result.push(curr.val);
      curr = curr.next;
    }
    return result;
  }
}

// Verification execution trace
const list = new SinglyLinkedList<string>();

// Prepend 3 items: each executes in O(1) time with 0 element shifting
list.prepend('charlie');
list.prepend('bob');
list.prepend('alice');

console.log('List contents:', list.toArray().join(' -> '));
// List contents: alice -> bob -> charlie

console.log('List size:', list.size);
// List size: 3

// Access element at index 2 ('charlie')
const query = list.getAt(2);
console.log('Query index 2:', query);
// Query index 2: { val: 'charlie', hops: 2 }
// Verified: accessing index 2 requires exactly 2 sequential pointer hops!`,
      caption: {
        en: 'Execution trace of SinglyLinkedList: proving O(1) front insertion without shifting and O(k) hop cost for index access.',
        bn: 'সিঙ্গলি লিঙ্কড লিস্টের বাস্তব প্রমাণ: কোনো স্থানান্তর ছাড়াই শুরুতে ধ্রুব O(1) সন্নিবেশ এবং ইনডেক্স অ্যাক্সেসে k সংখ্যক পয়েন্টার লাফের সত্যতা।'
      }
    },
    {
      type: 'heading',
      id: 'matrix',
      text: {
        en: 'Architectural Comparison: Contiguous Arrays vs Singly Linked Lists',
        bn: 'আর্কিটেকচার তুলনা: সংলগ্ন অ্যারে বনাম সিঙ্গলি লিঙ্কড লিস্ট'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Dimension', bn: 'আর্কিটেকচার মাত্রা' },
        { en: 'Contiguous Array', bn: 'সংলগ্ন অ্যারে' },
        { en: 'Singly Linked List', bn: 'সিঙ্গলি লিঙ্কড লিস্ট' }
      ],
      rows: [
        [
          { en: 'Memory Organization', bn: 'মেমরি বিন্যাস' },
          { en: 'Single contiguous block of memory', bn: 'একটি একক অবিচ্ছিন্ন মেমরি ব্লক' },
          { en: 'Scattered heap allocations linked by pointers', bn: 'পয়েন্টার দ্বারা যুক্ত হিপের বিচ্ছিন্ন নোড' }
        ],
        [
          { en: 'Random Access (by index)', bn: 'ইনডেক্স ধরে সরাসরি প্রবেশ' },
          { en: 'O(1) via base + i * size arithmetic', bn: 'বেস প্লাস অফসেট হিসেবে O(1)' },
          { en: 'O(k) requiring k sequential pointer dereferences', bn: 'k বার পয়েন্টার অনুসরণ করে O(k)' }
        ],
        [
          { en: 'Front Insertion (Prepend)', bn: 'শুরুতে সন্নিবেশ' },
          { en: 'O(N) shifting all elements right', bn: 'সব উপাদান ডানে সরিয়ে O(N)' },
          { en: 'O(1) allocating 1 node and rewiring head', bn: '১টি নোড বরাদ্দ করে head বদলে O(1)' }
        ],
        [
          { en: 'Memory Overhead per Element', bn: 'উপাদানপ্রতি মেমরি অপচয়' },
          { en: 'Zero metadata per element in primitive arrays', bn: 'আদিম অ্যারেতে উপাদানপ্রতি কোনো বাড়তি মেটাডেটা নেই' },
          { en: '24 to 32 bytes (pointers + object headers)', bn: '২৪ থেকে ৩২ বাইট (পয়েন্টার ও অবজেক্ট হেডার)' }
        ],
        [
          { en: 'CPU Cache Friendliness', bn: 'সিপিইউ ক্যাশ কার্যকারিতা' },
          { en: 'Optimal (sequential 64-byte lines streamed by prefetcher)', bn: 'সেরা (প্রিফেচার দিয়ে সংলগ্ন ৬৪-বাইট লাইন লোড)' },
          { en: 'Poor (random pointer chasing causes L1 cache misses)', bn: 'দুর্বল (এলোমেলো পয়েন্টার চেজিংয়ে L1 ক্যাশ মিস)' }
        ]
      ]
    }
  ],
  nextLesson: {
    slug: 'pointer-surgery',
    tech: 'linked-lists',
    title: {
      en: 'Pointer Surgery: Stitches, Invariants, and Sentinel Nodes',
      bn: 'পয়েন্টার সার্জারি: সেলাই, ইনভেরিয়েন্ট এবং সেন্টিনেল নোড'
    }
  },
  exercises: [
    {
      id: 'pt-ex1',
      kind: 'mcq',
      topic: 'traversal hops',
      question: {
        en: 'In a singly linked list containing 10 elements, how many pointer dereferences are required to access the element at index 4 starting from head?',
        bn: '১০ টি উপাদান বিশিষ্ট একটি সিঙ্গলি লিঙ্কড লিস্টে head থেকে শুরু করে ৪ নম্বর ইনডেক্সের উপাদানটিতে পৌঁছাতে কতটি পয়েন্টার ট্রাভার্সাল লাফ লাগে?'
      },
      options: [
        {
          en: '4 pointer hops because reaching index k from index 0 requires advancing next exactly k times',
          bn: '৪ টি পয়েন্টার লাফ কারণ ০ নম্বর ইনডেক্স থেকে k ইনডেক্সে যেতে ঠিক k বার next পয়েন্টার অতিক্রম করতে হয়'
        },
        {
          en: '0 hops because linked lists support direct hardware offset calculation',
          bn: '০ টি কারণ লিঙ্কড লিস্ট সরাসরি হার্ডওয়্যার অফসেট গণনা সমর্থন করে'
        },
        {
          en: '10 hops because the entire list must always be scanned to the end',
          bn: '১০ টি কারণ পুরো তালিকাটি সর্বদা শেষ পর্যন্ত পরীক্ষা করতে হয়'
        },
        {
          en: '1 hop because the compiler caches all node addresses',
          bn: '১ টি কারণ কম্পাইলার সমস্ত নোডের ঠিকানা ক্যাশ করে রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Count the number of next arrows you must traverse: head is index 0, head.next is index 1, and so on.',
        bn: 'কতগুলো next তীর অতিক্রম করতে হয় তা গণনা করুন: head হলো ০, head.next হলো ১, ইত্যাদি।'
      },
      explanation: {
        en: 'To reach target position 4 from head at position 0, execution traverses head.next to node 1, then node 2, then node 3, and finally node 4. This requires exactly 4 sequential pointer hops.',
        bn: 'head এর অবস্থান ০ থেকে ৪ নম্বর অবস্থানে পৌঁছাতে head.next ধরে ১ নম্বর নোড, তারপর ২ নম্বর, এরপর ৩ নম্বর এবং শেষে ৪ নম্বর নোডে যেতে হয়। এতে ঠিক ৪ টি ক্রমান্বয়ে পয়েন্টার লাফ লাগে।'
      }
    },
    {
      id: 'pt-ex2',
      kind: 'mcq',
      topic: 'memory overhead',
      question: {
        en: 'On a 64-bit architecture, what is the total physical memory consumed by a linked list node holding an 8-byte value, an 8-byte next pointer, and a 16-byte object header?',
        bn: 'একটি ৬৪-বিট আর্কিটেকচারে ৮ বাইটের মান, ৮ বাইটের next পয়েন্টার এবং ১৬ বাইটের অবজেক্ট হেডার ধারণকারী একটি নোডের মোট মেমরি ব্যবহার কত?'
      },
      options: [
        {
          en: '32 bytes total: 8 for value, 8 for next pointer, and 16 for allocator header',
          bn: 'মোট ৩২ বাইট: মানের জন্য ৮, পয়েন্টারের জন্য ৮ এবং হেডারের জন্য ১৬'
        },
        {
          en: '8 bytes because object headers do not consume physical RAM',
          bn: '৮ বাইট কারণ অবজেক্ট হেডার কোনো বাস্তব র‍্যাম খরচ করে না'
        },
        {
          en: '64 bytes because memory allocations are always rounded to 64 bytes',
          bn: '৬৪ বাইট কারণ মেমরি বরাদ্দ সর্বদা ৬৪ বাইটে বৃত্তাকার করা হয়'
        },
        {
          en: '16 bytes because pointers use zero-byte virtualization',
          bn: '১৬ বাইট কারণ পয়েন্টার শূন্য-বাইটের ভার্চুয়ালাইজেশন ব্যবহার করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sum the three components: 8 + 8 + 16.',
        bn: 'তিনটি অংশের যোগফল বের করুন: ৮ + ৮ + ১৬।'
      },
      explanation: {
        en: 'On 64-bit systems, a pointer is 8 bytes, an integer payload is 8 bytes, and runtime heap object metadata requires 16 bytes. Summing 8 + 8 + 16 yields exactly 32 bytes of physical memory per node.',
        bn: '৬৪-বিট সিস্টেমে পয়েন্টার ৮ বাইট, পূর্ণসংখ্যার মান ৮ বাইট এবং রানটাইম মেটাডেটা ১৬ বাইট নেয়। ফলে ৮ + ৮ + ১৬ যোগ করলে প্রতি নোডে মোট ঠিক ৩২ বাইট মেমরি খরচ হয়।'
      }
    },
    {
      id: 'pt-ex3',
      kind: 'mcq',
      topic: 'head prepend complexity',
      question: {
        en: 'Why does inserting an element at the beginning (prepend) of a singly linked list execute in O(1) constant time, whereas an array takes O(N)?',
        bn: 'সিঙ্গলি লিঙ্কড লিস্টের শুরুতে সন্নিবেশ (prepend) কেন ধ্রুব O(1) সময়ে কাজ করে, যেখানে অ্যারেতে O(N) সময় লাগে?'
      },
      options: [
        {
          en: 'Prepend merely allocates a new node, sets its next to current head, and updates head reference without shifting any existing elements',
          bn: 'শুরুতে সন্নিবেশের সময় কেবল একটি নতুন নোড তৈরি করে তার next এ পুরানো head বসিয়ে দিলেই হয়, কোনো উপাদান সরাতে হয় না'
        },
        {
          en: 'Linked lists use parallel GPU threads to insert elements instantly',
          bn: 'লিঙ্কড লিস্ট সমান্তরাল জিপিইউ থ্রেড ব্যবহার করে উপাদান দ্রুত বসিয়ে দেয়'
        },
        {
          en: 'Linked lists store all elements inside CPU registers permanently',
          bn: 'লিঙ্কড লিস্ট সমস্ত উপাদান সিপিইউ রেজিস্টারের ভেতরে স্থায়ীভাবে রাখে'
        },
        {
          en: 'The operating system kernel disables memory allocation during prepends',
          bn: 'শুরুতে সন্নিবেশের সময় অপারেটিং সিস্টেম কার্নেল মেমরি বরাদ্দ বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about how many pointers are rewritten when adding a new node before head.',
        bn: 'head এর আগে নতুন নোড যোগ করার সময় কতটি পয়েন্টার বদলাতে হয় তা ভাবুন।'
      },
      explanation: {
        en: 'Prepending to a linked list only rewires two pointers: new_node.next = head, and head = new_node. Because no downstream elements are relocated in memory, execution completes in strictly O(1) time regardless of list size.',
        bn: 'লিঙ্কড লিস্টের শুরুতে নোড যোগ করতে মাত্র দুটি পয়েন্টার বরাদ্দ লাগে: new_node.next = head এবং head = new_node। পেছনের কোনো উপাদান মেমরিতে না সরানোর কারণে তালিকা যত বড়ই হোক না কেন এটি কঠোরভাবে O(1) সময়ে সম্পন্ন হয়।'
      }
    },
    {
      id: 'pt-ex4',
      kind: 'mcq',
      topic: 'garbage collection reachability',
      question: {
        en: 'What happens to the nodes of a linked list if the pointer variable holding the head reference is reassigned to null?',
        bn: 'head রেফারেন্স ধারণকারী পয়েন্টার ভেরিয়েবলটিতে null বসিয়ে দিলে লিঙ্কড লিস্টের নোডগুলোর কী পরিণতি হয়?'
      },
      options: [
        {
          en: 'All nodes become unreachable from the root set and are reclaimed by automatic garbage collection',
          bn: 'সমস্ত নোড রুট সেট থেকে বিচ্ছিন্ন হয়ে যায় এবং স্বয়ংক্রিয় গার্বেজ কালেক্টর তাদের মেমরি মুক্ত করে দেয়'
        },
        {
          en: 'The computer crashes with a fatal Blue Screen of Death',
          bn: 'কম্পিউটার মারাত্মক ব্লু স্ক্রিন অফ ডেথ দেখিয়ে ক্র্যাশ করে'
        },
        {
          en: 'The nodes are automatically written to a permanent disk log',
          bn: 'নোডগুলো স্বয়ংক্রিয়ভাবে হার্ডডিস্কের স্থায়ী লগে সংরক্ষিত হয়ে যায়'
        },
        {
          en: 'The nodes continue running as independent operating system processes',
          bn: 'নোডগুলো স্বাধীন অপারেটিং সিস্টেম প্রসেস হিসেবে চলতে থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Remember the Reachability Law: what happens to heap objects when no active reference path exists?',
        bn: 'প্রবেশযোগ্যতার নিয়মটি মনে করুন: কোনো সক্রিয় রেফারেন্স না থাকলে হিপ অবজেক্টগুলোর কী ঘটে?'
      },
      explanation: {
        en: 'Because head is the sole entry point into the list, setting head to null severs the reference path from the execution stack. Since no remaining variables reach the initial node or subsequent nodes, the garbage collector marks them as unreachable and frees their memory.',
        bn: 'যেহেতু head হলো তালিকায় প্রবেশের একমাত্র পথ, তাই head এ null বসালে স্ট্যাক থেকে মেমরির সংযোগ কেটে যায়। কোনো ভেরিয়েবল থেকে আর প্রথম নোড বা পরবর্তী নোডগুলোতে পৌঁছানো না যাওয়ায় গার্বেজ কালেক্টর তাদের অপ্রয়োজনীয় চিহ্নিত করে মেমরি ফাঁকা করে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'pointer-thinking-quiz',
    title: {
      en: 'Pointer Thinking and Memory Foundations Quiz',
      bn: 'পয়েন্টার চিন্তাভাবনা এবং মেমরি ভিত্তি কুইজ'
    },
    questions: [
      {
        id: 'pt-q1',
        kind: 'mcq',
        topic: 'hardware',
        question: {
          en: 'Why does traversing an array execute significantly faster than traversing a linked list of identical size on modern CPUs?',
          bn: 'আধুনিক সিপিইউতে সমমানের অ্যারে পরিদর্শন করা কেন একই আকারের লিঙ্কড লিস্ট পরিদর্শনের চেয়ে অনেক বেশি দ্রুত কাজ করে?'
        },
        options: [
          {
            en: 'Array elements reside on contiguous 64-byte cache lines, enabling hardware prefetchers to stream memory before instructions execute, whereas linked lists incur cache misses on unpredictable heap pointers',
            bn: 'অ্যারের উপাদানগুলো সংলগ্ন ৬৪-বাইট ক্যাশ লাইনে থাকে, ফলে নির্দেশনার আগেই প্রিফেচার মেমরি লোড করে; পক্ষান্তরে লিঙ্কড লিস্টের বিচ্ছিন্ন পয়েন্টার চেজিং প্রতি নোডে ক্যাশ মিস ঘটায়'
          },
          {
            en: 'Arrays are processed directly inside the CPU arithmetic logic unit without accessing RAM',
            bn: 'অ্যারে র‍্যাম অ্যাক্সেস না করে সরাসরি সিপিইউর ভেতর প্রক্রিয়াজাত হয়'
          },
          {
            en: 'Linked lists disable the internal clock speed of the CPU processor',
            bn: 'লিঙ্কড লিস্ট সিপিইউ প্রসেসরের অভ্যন্তরীণ ঘড়ির গতি কমিয়ে দেয়'
          },
          {
            en: 'Arrays execute using 128-bit quantum registers',
            bn: 'অ্যারে ১২৮-বিট কোয়ান্টাম রেজিস্টার ব্যবহার করে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about spatial locality and modern CPU cache line sizes.',
          bn: 'মেমরির স্থানিক নৈকট্য (স্পেশাল লোকালিটি) এবং সিপিইউ ক্যাশ লাইনের আকারের কথা ভাবুন।'
        },
        explanation: {
          en: 'Contiguous memory allows the CPU hardware prefetcher to fetch 64-byte chunks holding multiple array entries simultaneously. In a linked list, each node is an independent heap allocation at an unpredictable address, causing frequent cache misses and CPU pipeline stalls.',
          bn: 'সংলগ্ন মেমরি থাকার কারণে সিপিইউ প্রিফেচার একবারে ৬৪-বাইটের ক্যাশ লাইনে একাধিক উপাদান লোড করে ফেলে। কিন্তু লিঙ্কড লিস্টে প্রতিটি নোড হিপ মেমরির ভিন্ন ভিন্ন ঠিকানায় থাকায় বারবার ক্যাশ মিস হয় এবং সিপিইউ অপেক্ষা করতে বাধ্য হয়।'
        }
      },
      {
        id: 'pt-q2',
        kind: 'mcq',
        topic: 'algorithms',
        question: {
          en: 'Why is standard binary search impossible to implement efficiently on a sorted singly linked list in O(log N) time?',
          bn: 'সাজানো একটি সিঙ্গলি লিঙ্কড লিস্টে সাধারণ বাইনারি সার্চ কেন দক্ষভাবে O(log N) সময়ে চালানো সম্ভব নয়?'
        },
        options: [
          {
            en: 'Binary search requires O(1) random access to inspect the middle element, but finding the middle node of a linked list requires O(N) sequential hops',
            bn: 'বাইনারি সার্চের জন্য মাঝখানের উপাদান দেখতে ধ্রুব O(1) সরাসরি অ্যাক্সেস লাগে, কিন্তু লিঙ্কড লিস্টের মাঝের নোডে পৌঁছাতে O(N) লাফ দিতে হয়'
          },
          {
            en: 'Linked list nodes cannot store numeric values',
            bn: 'লিঙ্কড লিস্টের নোড কোনো সংখ্যা সংরক্ষণ করতে পারে না'
          },
          {
            en: 'Binary search can only be executed on optical media',
            bn: 'বাইনারি সার্চ কেবলমাত্র অপটিক্যাল মিডিয়ায় চালানো যায়'
          },
          {
            en: 'The compiler converts all linked list comparisons into infinite loops',
            bn: 'কম্পাইলার লিঙ্কড লিস্টের সমস্ত তুলনাকে অসীম লুপে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'How does binary search find array[mid]? How would you find list node at mid?',
          bn: 'বাইনারি সার্চ কীভাবে array[mid] বের করে? আর লিস্টের ক্ষেত্রে mid নোড কীভাবে বের করবেন?'
        },
        explanation: {
          en: 'Binary search achieves O(log N) complexity because array indexing calculates the middle address in O(1) time. In a linked list, locating the middle node requires traversing N/2 pointers (O(N) time), turning the entire search into O(N).',
          bn: 'বাইনারি সার্চ O(log N) সময় নেয় কারণ অ্যারেতে মাঝের ঠিকানা O(1) সময়ে বের করা যায়। কিন্তু লিঙ্কড লিস্টে মাঝের নোড খুঁজে পেতেই N/২ বার পয়েন্টার অতিক্রম করতে হয় যা O(N) সময় নেয়, ফলে পুরো বাইনারি সার্চের গতি O(N) এ নেমে যায়।'
        }
      },
      {
        id: 'pt-q3',
        kind: 'mcq',
        topic: 'data-structure-choice',
        question: {
          en: 'Under which workload requirement is a linked list preferred over a dynamic array?',
          bn: 'কোন ধরনের কাজের চাহিদায় ডায়নামিক অ্যারের চেয়ে লিঙ্কড লিস্ট ব্যবহার করা বেশি লাভজনক?'
        },
        options: [
          {
            en: 'When the workload frequently inserts and deletes items at the front (or at known node pointers) with strict zero-copy latency guarantees',
            bn: 'যখন কাজের চাপে ঘন ঘন শুরুতে (বা জানা কোনো নোডে) ডেটা সন্নিবেশ ও মোছন করতে হয় এবং উপাদান না সরানোর কঠোর নিশ্চয়তা লাগে'
          },
          {
            en: 'When the application requires maximum binary search throughput on sorted data',
            bn: 'যখন অ্যাপ্লিকেশনে সাজানো ডেটার ওপর দ্রুততম গতিতে বাইনারি সার্চ চালাতে হয়'
          },
          {
            en: 'When memory footprint must be minimized to absolute minimum bytes',
            bn: 'যখন মেমরি ব্যবহারকে একেবারে সর্বনিম্ন সীমার মধ্যে রাখতে হয়'
          },
          {
            en: 'When performing high-speed sequential graphics rendering across millions of pixels',
            bn: 'যখন কোটি কোটি পিক্সেল জুড়ে অতি দ্রুত গ্রাফিক্স রেন্ডারিং করতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider queues, stacks, and LRU eviction chains where insertions happen at head or known pointers.',
          bn: 'কিউ, স্ট্যাক বা এলআরইউ ক্যাশের কথা ভাবুন যেখানে সন্নিবেশ সর্বদা শুরুতে বা নির্দিষ্ট পয়েন্টারে ঘটে।'
        },
        explanation: {
          en: 'Dynamic arrays require O(N) shifting when prepending elements and risk latency spikes during reallocation. Linked lists provide deterministic O(1) insertions at the head without moving existing elements or triggering table resizes.',
          bn: 'ডায়নামিক অ্যারের শুরুতে ডেটা ঢোকাতে গেলে সমস্ত উপাদানকে সরাতে O(N) সময় লাগে এবং টেবিল দ্বিগুণ করার সময় হঠাৎ গতি কমে যায়। কিন্তু লিঙ্কড লিস্ট কোনো উপাদান না সরিয়েই নিশ্চিতভাবে ধ্রুব O(1) সময়ে শুরুতে নোড যুক্ত করে।'
        }
      },
      {
        id: 'pt-q4',
        kind: 'mcq',
        topic: 'invariants',
        question: {
          en: 'What critical bug occurs if an engineer writes `curr = curr.next.next` inside a traversal loop without checking if `curr.next` is null?',
          bn: 'ট্রাভার্সাল লুপের ভেতরে `curr.next` মানটি null কিনা পরীক্ষা না করে `curr = curr.next.next` লিখলে কোন মারাত্মক ত্রুটি ঘটে?'
        },
        options: [
          {
            en: 'If curr.next is null, attempting to dereference curr.next.next throws an unhandled NullPointerException / TypeError at runtime',
            bn: 'যদি curr.next এর মান null হয়, তবে curr.next.next পড়তে গিয়ে রানটাইমে একটি নালপয়েন্টার এক্সেপশন বা টাইপএরর ক্র্যাশ ঘটে'
          },
          {
            en: 'The operating system restarts automatically in safe mode',
            bn: 'অপারেটিং সিস্টেম স্বয়ংক্রিয়ভাবে সেফ মোডে রিস্টার্ট নেয়'
          },
          {
            en: 'The list elements are reversed in memory',
            bn: 'লিস্টের সমস্ত উপাদান মেমরিতে উল্টো হয়ে যায়'
          },
          {
            en: 'The node values are converted into floating-point numbers',
            bn: 'নোডের মানগুলো ফ্লোটিং-পয়েন্ট সংখ্যায় রূপান্তরিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'What happens when you evaluate null.next in JavaScript or Java?',
          bn: 'জাভাস্ক্রিপ্ট বা জাভাতে null.next পড়লে কী ঘটবে তা ভাবুন।'
        },
        explanation: {
          en: 'Dereferencing a property of null (such as null.next) immediately triggers a runtime crash (TypeError in JavaScript or NullPointerException in Java). Safe traversal must verify that each intermediate pointer is non-null before advancing.',
          bn: 'null এর কোনো প্রোপার্টি (যেমন null.next) পড়তে গেলে রানটাইমে প্রোগ্রাম ক্র্যাশ করে (জাভাস্ক্রিপ্টে TypeError বা জাভাতে NullPointerException)। তাই নিরাপদ কোডে পরবর্তী নোডে যাওয়ার আগে সর্বদা অন্তর্বর্তী পয়েন্টার পরীক্ষা করতে হয়।'
        }
      },
      {
        id: 'pt-q5',
        kind: 'mcq',
        topic: 'tail-insertion',
        question: {
          en: 'Without maintaining a dedicated tail pointer reference, what is the time complexity of appending an element to the end of a singly linked list with N nodes?',
          bn: 'একটি আলাদা tail পয়েন্টার না রাখলে N সংখ্যক নোডের সিঙ্গলি লিঙ্কড লিস্টের শেষে একটি উপাদান যোগ করতে সময় জটিলতা কত হয়?'
        },
        options: [
          {
            en: 'O(N) because execution must traverse all N nodes from head to find the terminating node where next is null',
            bn: 'O(N) কারণ শেষ নোডটি (যেখানে next হলো null) খুঁজে পেতে head থেকে পুরো N সংখ্যক নোড হেঁটে যেতে হয়'
          },
          {
            en: 'O(1) because pointers can teleport across memory instantly',
            bn: 'O(1) কারণ পয়েন্টার তাৎক্ষণিকভাবে মেমরির যেকোনো জায়গায় টেলিপোর্ট করতে পারে'
          },
          {
            en: 'O(log N) because pointers divide the list in half',
            bn: 'O(log N) কারণ পয়েন্টার লিস্টকে দুই ভাগে ভাগ করে'
          },
          {
            en: 'O(N^2) because each node requires an operating system context switch',
            bn: 'O(N^২) কারণ প্রতিটি নোডের জন্য অপারেটিং সিস্টেম কনটেক্সট সুইচ লাগে'
          }
        ],
        answer: 0,
        hint: {
          en: 'How do you locate the last node if you only have a pointer to the first node?',
          bn: 'আপনার কাছে কেবল প্রথম নোডের পয়েন্টার থাকলে শেষ নোডটি কীভাবে খুঁজে পাবেন?'
        },
        explanation: {
          en: 'Without a cached tail reference, the only way to reach the end of a singly linked list is by walking from head along each next link until reaching a node where curr.next === null. This requires inspecting all N nodes, costing O(N) time.',
          bn: 'tail পয়েন্টার সংরক্ষণ না করলে শেষ নোডে পৌঁছানোর একমাত্র উপায় হলো head থেকে শুরু করে একে একে প্রতিটি next ধরে হাঁটা যতক্ষণ না curr.next === null পাওয়া যায়। এতে পুরো N সংখ্যক নোড পরিদর্শন করতে হয়, যার খরচ O(N)।'
        }
      },
      {
        id: 'pt-q6',
        kind: 'mcq',
        topic: 'memory-management',
        question: {
          en: 'In manual memory management environments like C or C++, what serious bug occurs if a node is unlinked from a list without calling `free()` on its pointer?',
          bn: 'সি বা সি++ এর মতো ম্যানুয়াল মেমরি ম্যানেজমেন্ট সিস্টেমে কোনো নোডকে লিস্ট থেকে খুলে ফেলে তার পয়েন্টারে `free()` না ডাকলে কোন মারাত্মক সমস্যা হয়?'
        },
        options: [
          {
            en: 'A memory leak: the allocated heap memory remains permanently occupied and unrecoverable by the program until termination',
            bn: 'মেমরি লিক: বরাদ্দকৃত হিপ মেমরি স্থায়ীভাবে অবরুদ্ধ থাকে এবং প্রোগ্রাম বন্ধ না হওয়া পর্যন্ত তা পুনরায় ব্যবহারের অনুপযোগী হয়ে পড়ে'
          },
          {
            en: 'The compiler immediately deletes the executable binary from disk',
            bn: 'কম্পাইলার সাথে সাথে হার্ডডিস্ক থেকে এক্সিকিউটেবল ফাইলটি মুছে ফেলে'
          },
          {
            en: 'The remaining nodes are automatically converted into a doubly linked list',
            bn: 'অবশিষ্ট নোডগুলো স্বয়ংক্রিয়ভাবে একটি ডাবল লিঙ্কড লিস্টে পরিণত হয়'
          },
          {
            en: 'The CPU switches permanently from 64-bit mode to 32-bit mode',
            bn: 'সিপিইউ স্থায়ীভাবে ৬৪-বিট মোড থেকে ৩২-বিট মোডে চলে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'What happens to allocated heap memory when you lose all pointers to it without freeing it?',
          bn: 'হিপের মেমরি মুক্ত না করে তার সমস্ত পয়েন্টার হারিয়ে ফেললে কী ঘটে তা ভাবুন।'
        },
        explanation: {
          en: 'In languages without automatic garbage collection, memory allocated on the heap via malloc must be explicitly returned via free. Unlinking a node without freeing it causes a memory leak, steadily exhausting system RAM over time.',
          bn: 'স্বয়ংক্রিয় গার্বেজ কালেকশনবিহীন ভাষায় malloc দিয়ে বরাদ্দ করা হিপ মেমরি অবশ্যই free দিয়ে মুক্ত করতে হয়। মুক্ত না করে নোড বিচ্ছিন্ন করলে মেমরি লিক ঘটে, যা সময়ের সাথে সাথে পুরো সিস্টেমের র‍্যাম নিঃশেষ করে ফেলে।'
        }
      }
    ]
  }
};
