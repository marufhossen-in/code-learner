import type { Lesson } from '../../../lib/types';

export const fifoThinkingLesson: Lesson = {
  slug: 'fifo-thinking',
  tech: 'queues',
  title: {
    en: 'FIFO Thinking — First-In First-Out Principles, Pointer Queues, and the O(1) Invariant',
    bn: 'ফিফো চিন্তাভাবনা: ফার্স্ট-ইন ফার্স্ট-আউট নীতি, পয়েন্টার কিউ এবং O(1) ইনভেরিয়েন্ট'
  },
  summary: {
    en: 'A queue is a fundamental linear data structure governing First-In, First-Out (FIFO) ordering. Unlike stacks where additions and removals occur at a single end, queues ingest elements at the tail and serve them from the head. We expose the naive array shift trap where dequeueing costs O(n), implement a robust O(1) pointer-based queue using head and tail pointers, and examine how queues decouple asynchronous producers from consumers in production systems.',
    bn: 'কিউ হলো একটি মৌলিক রৈখিক ডেটা স্ট্রাকচার যা ফার্স্ট-ইন, ফার্স্ট-আউট (FIFO) নীতিতে পরিচালিত হয়। স্ট্যাকের মতো এক প্রান্তে কাজ না করে কিউ পেছনের টেল দিয়ে উপাদান গ্রহণ করে এবং সামনের হেড দিয়ে বের করে দেয়। আমরা অ্যারে শিফটের O(n) ফাঁদ উন্মোচন করি, হেড ও টেল পয়েন্টারের মাধ্যমে O(1) পয়েন্টারভিত্তিক কিউ বাস্তবায়ন করি এবং উৎপাদনমুখী সিস্টেমে কিউ কীভাবে অ্যাসিনক্রোনাস উৎপাদক ও গ্রাহকের মাঝে সমন্বয় ঘটায় তা আলোচনা করি।'
  },
  minutes: 22,
  nextLesson: {
    slug: 'queues-at-work',
    tech: 'queues',
    title: {
      en: 'Queues at Work: Bounded Buffers, Backpressure, and Producer-Consumer Patterns',
      bn: 'কর্মময় কিউ: সীমাবদ্ধ বাফার, ব্যাকপ্রেশার এবং উৎপাদক-ভোক্তা প্যাটার্ন'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'fifo-mental-model',
      text: {
        en: 'The FIFO Mental Model: Temporal Order and Fairness',
        bn: 'ফিফো চিন্তাভাবনা: সময়ক্রম এবং ন্যায্যতার নীতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you design software that receives tasks over time, processing order dictates system behavior. A stack operates on LIFO (Last-In First-Out) ordering where the most recent arrival is processed first. A queue enforces FIFO (First-In First-Out) ordering where items are processed in the strict order of their arrival. This temporal contract guarantees fairness, ensuring that early requests never starve behind newer workloads.',
        bn: 'যখন আপনি সময়ের সাথে কাজের অনুরোধ গ্রহণকারী সফটওয়্যার ডিজাইন করেন, তখন প্রসেসিংয়ের ক্রম সিস্টেমের আচরণ নির্ধারণ করে। স্ট্যাক লিফো বা LIFO (Last-In First-Out) নীতি ব্যবহার করে যেখানে সর্বশেষ উপাদানটি আগে প্রসেস হয়। অন্যদিকে কিউ ফিফো বা FIFO (First-In First-Out) নীতি মেনে চলে যেখানে উপাদানগুলো তাদের আগমনের সঠিক ক্রমানুসারে প্রসেস হয়। এই সময়ভিত্তিক চুক্তি ন্যায্যতা নিশ্চিত করে, যাতে পুরনো অনুরোধগুলো নতুন অনুরোধের পেছনে আটকে না থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A queue operates through two specialized boundaries. The rear accepts new items via enqueue, while the front dispenses mature items via dequeue. Inspection of the next candidate occurs at the front using peek, while isEmpty protects callers against empty queue underflow errors.',
        bn: 'একটি কিউ মূলত দুটি নির্দিষ্ট প্রান্ত দিয়ে পরিচালিত হয়। পেছনের প্রান্ত বা রিয়ার enqueue এর মাধ্যমে নতুন উপাদান গ্রহণ করে, আর সামনের প্রান্ত বা ফ্রন্ট dequeue এর মাধ্যমে পুরনো উপাদান মুক্ত করে। পরবর্তী উপাদানটি দেখতে ফ্রন্টে peek কল করা হয়, আর isEmpty খালি কিউ থেকে উপাদান সরানোর ত্রুটি রোধ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'fifo-principle',
          def: {
            en: 'First-In, First-Out rule where the earliest element admitted to the queue is guaranteed to be processed first.',
            bn: 'ফার্স্ট-ইন, ফার্স্ট-আউট নীতি যেখানে তালিকায় প্রথমে প্রবেশ করা উপাদানটি সবার আগে সেবা পাওয়ার নিশ্চয়তা পায়।'
          }
        },
        {
          term: 'enqueue-dequeue',
          def: {
            en: 'The two primary operations: enqueue inserts at the rear, while dequeue removes and returns the front item.',
            bn: 'দুটি প্রধান অপারেশন: enqueue পেছনে নতুন উপাদান ঢোকায় এবং dequeue সামনের উপাদান অপসারণ করে ফেরত দেয়।'
          }
        },
        {
          term: 'array-shift-trap',
          def: {
            en: 'Using array.shift() for dequeueing, which copies all n-1 remaining elements one slot left in O(n) time.',
            bn: 'dequeue করতে array.shift() ব্যবহার করা, যা O(n) সময়ে বাকি n-1 টি উপাদান এক ঘর বামে কপি করে।'
          }
        },
        {
          term: 'pointer-queue',
          def: {
            en: 'A linked list queue maintaining both head and tail pointers to execute all operations in strict O(1) time.',
            bn: 'একটি লিঙ্কড লিস্ট কিউ যা হেড ও টেল উভয় পয়েন্টার সংরক্ষণ করে O(1) সময়ে সমস্ত অপারেশন সম্পন্ন করে।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'queue'
    },
    {
      type: 'heading',
      id: 'array-shift-bottleneck',
      text: {
        en: 'The Array Shift Trap: Why array.shift() Destroys Performance',
        bn: 'অ্যারে শিফট ফাঁদ: কেন array.shift() পারফরম্যান্স ধ্বংস করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Many developers implement queues by combining array push with array shift in dynamic languages like JavaScript. While push appends to the end in O(1) amortized time, shift removes index 0. To maintain contiguous indexing, the runtime must shift every remaining element one position to the left.',
        bn: 'অনেক ডেভেলপার জাভাস্ক্রিপ্টের মতো ভাষায় সাধারণ অ্যারে push এবং shift মিলিয়ে কিউ তৈরি করেন। যদিও push শেষে O(1) সময়ে উপাদান যোগ করে, shift কিন্তু ০ নম্বর ইনডেক্সের উপাদানটি সরিয়ে দেয়। মেমোরিতে অবিচ্ছিন্ন ইনডেক্স বজায় রাখতে রানটাইমকে অবশিষ্ট প্রতিটি উপাদান এক ঘর করে বামে সরাতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This memory copying penalty turns every dequeue into an O(n) bottleneck. Ingesting and dequeueing 100000 items requires approximately 5000000000 individual memory copy steps, turning a sub-millisecond task into a multi-second freeze. High-throughput production services must never use array shift for queue pipelines.',
        bn: 'এই মেমোরি কপি করার বোঝা প্রতিটি dequeue অপারেশনকে একটি O(n) বোতলনেকে পরিণত করে। ১০০০০০ উপাদান প্রবেশ ও অপসারণ করতে প্রায় ৫০০০000000 বার মেমোরি কপি করতে হয়, যা মিলিসেকেন্ডের কাজকে কয়েক সেকেন্ডের স্থবিরতায় রূপ দেয়। উচ্চগতির উৎপাদনমুখী সিস্টেমে কিউ ব্যবস্থাপনায় কখনোই অ্যারে শিফট ব্যবহার করা উচিত নয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Metric / Architecture', bn: 'পরিমাপ / আর্কিটেকচার' },
        { en: 'Naive Array (push / shift)', bn: 'সনাতন অ্যারে (push / shift)' },
        { en: 'Pointer Queue (Linked List)', bn: 'পয়েন্টার কিউ (লিঙ্কড লিস্ট)' }
      ],
      rows: [
        [
          { en: 'Enqueue Time Complexity', bn: 'এনকিউ সময় জটিলতা' },
          { en: 'O(1) amortized append', bn: 'O(1) পরিমার্জিত সংযোজন' },
          { en: 'O(1) tail pointer link', bn: 'O(1) টেল পয়েন্টার সংযোগ' }
        ],
        [
          { en: 'Dequeue Time Complexity', bn: 'ডিকিউ সময় জটিলতা' },
          { en: 'O(n) memory copy shift', bn: 'O(n) মেমোরি কপি শিফট' },
          { en: 'O(1) head pointer advance', bn: 'O(1) হেড পয়েন্টার সরিয়ে' }
        ],
        [
          { en: 'Total Work for 100000 Items', bn: '১০০০০০ উপাদানের মোট কাজ' },
          { en: 'O(n^2) quadratic copies', bn: 'O(n^2) চতুর্ঘাতী কপি কাজ' },
          { en: 'O(n) strictly linear steps', bn: 'O(n) নিখুঁত রৈখিক ধাপ' }
        ],
        [
          { en: 'Memory Footprint', bn: 'মেমোরি খরচ' },
          { en: 'Contiguous buffer backing', bn: 'অবিচ্ছিন্ন বাফার বরাদ্দ' },
          { en: 'Node pointer overhead', bn: 'নোড পয়েন্টার মেমোরি' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'pointer-queue-impl',
      text: {
        en: 'Production-Grade Pointer Queue Implementation',
        bn: 'প্রোডাকশন-গ্রেড পয়েন্টার কিউ বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A pointer-based queue solves the shift penalty by maintaining separate head and tail references across a singly linked list. Enqueue appends a new node to tail.next in O(1) time. Dequeue advances head to head.next in O(1) time. Neither operation ever moves existing nodes in memory.',
        bn: 'একটি পয়েন্টারভিত্তিক কিউ একমুখী লিঙ্কড লিস্টের দুই প্রান্তে পৃথক হেড ও টেল রেফারেন্স রেখে শিফটের সমস্যা সমাধান করে। Enqueue অপারেশন O(1) সময়ে tail.next এ নতুন নোড যুক্ত করে। Dequeue অপারেশন O(1) সময়ে head কে head.next এ এগিয়ে নেয়। কোনো অপারেশনেই বিদ্যমান নোডগুলোকে মেমোরিতে নাড়াচাড়া করতে হয় না।'
      }
    },
    {
      type: 'code',
      code: `class QNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class PointerQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  // Enqueue at tail in O(1) time
  enqueue(val) {
    const newNode = new QNode(val);
    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.count++;
  }

  // Dequeue from head in O(1) time
  dequeue() {
    if (this.head === null) return null;
    const removedVal = this.head.val;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    }
    this.count--;
    return removedVal;
  }

  peek() {
    return this.head !== null ? this.head.val : null;
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  toArray() {
    const result = [];
    let cur = this.head;
    while (cur !== null) {
      result.push(cur.val);
      cur = cur.next;
    }
    return result.join(' -> ');
  }
}

const q = new PointerQueue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log('Initial queue:', q.toArray());
// Output: Initial queue: 10 -> 20 -> 30

console.log('Peek front element:', q.peek());
// Output: Peek front element: 10

console.log('Dequeued item 1:', q.dequeue());
// Output: Dequeued item 1: 10

console.log('Dequeued item 2:', q.dequeue());
// Output: Dequeued item 2: 20

q.enqueue(40);
console.log('After enqueue 40:', q.toArray());
// Output: After enqueue 40: 30 -> 40

console.log('Queue length:', q.size());
// Output: Queue length: 2`
    },
    {
      type: 'heading',
      id: 'producer-consumer-decoupling',
      text: {
        en: 'Producer-Consumer Decoupling in Systems Architecture',
        bn: 'সিস্টেম স্থাপত্যে উৎপাদক ও গ্রাহকের সংযোগ বিচ্ছিন্নকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The queue architectural superpower is temporal decoupling. In distributed architectures, producers generate events at unpredictable rates, while consumers process work at a steady pace. Placing a queue between them allows the system to absorb traffic spikes without dropping requests or overwhelming downstream database engines.',
        bn: 'কিউয়ের প্রধান স্থাপত্য সুবিধা হলো সময়ের সংযোগ বিচ্ছিন্নকরণ। ডিস্ট্রিবিউটেড আর্কিটেকচারে উৎপাদকরা অনিয়মিত গতিতে ইভেন্ট তৈরি করে, যেখানে গ্রাহকরা একটি নির্দিষ্ট গতিতে কাজ সম্পন্ন করে। তাদের মাঝে একটি কিউ বসালে সিস্টেম কোনো অনুরোধ না হারিয়ে বা ডেটাবেজকে অচল না করে ট্রাফিকের হঠাৎ চাপ সহজেই সামলে নিতে পারে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'FIFO order: Queues enforce First-In, First-Out temporal fairness, processing items in the exact sequence they arrive.',
          bn: 'ফিফো ক্রম: কিউ ফার্স্ট-ইন, ফার্স্ট-আউট নীতি মেনে চলে, উপাদানগুলোকে আগমনের সঠিক ক্রমানুসারে প্রসেস করে।'
        },
        {
          en: 'Dual boundaries: Enqueue operations insert at the rear tail, while dequeue operations remove from the front head.',
          bn: 'দ্বিমুখী প্রান্ত: Enqueue অপারেশন পেছনের টেল দিয়ে উপাদান নেয় এবং Dequeue অপারেশন সামনের হেড দিয়ে উপাদান বের করে।'
        },
        {
          en: 'Avoid array shift: Using array.shift() degrades dequeue performance to O(n), causing O(n^2) quadratic processing slowdowns.',
          bn: 'অ্যারে শিফট বর্জন: array.shift() ব্যবহারে ডিকিউ O(n) এ নেমে আসে, যা পুরো প্রসেসিংকে O(n^2) হারে শ্লথ করে দেয়।'
        },
        {
          en: 'Pointer efficiency: Maintaining head and tail pointers across a linked structure guarantees strictly O(1) enqueue and dequeue operations.',
          bn: 'পয়েন্টার দক্ষতা: লিঙ্কড কাঠামোতে হেড ও টেল পয়েন্টার সংরক্ষণ করলে এনকিউ ও ডিকিউ উভয় অপারেশনই কঠোরভাবে O(1) সময়ে সম্পন্ন হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fq-ex1',
      kind: 'mcq',
      topic: 'shift-time-complexity',
      question: {
        en: 'Why is using JavaScript array.shift() for queue dequeueing considered an anti-pattern in production?',
        bn: 'প্রোডাকশনে কিউ থেকে উপাদান সরাতে জাভাস্ক্রিপ্ট array.shift() ব্যবহার কেন ক্ষতিকর অ্যান্টি-প্যাটার্ন হিসেবে গণ্য হয়?'
      },
      options: [
        {
          en: 'It copies all n-1 remaining elements one slot left, resulting in O(n) time complexity per dequeue',
          bn: 'এটি বাকি n-1 টি উপাদানকে এক ঘর বামে কপি করে, ফলে প্রতি ডিকিউতে O(n) সময় নষ্ট হয়'
        },
        {
          en: 'It causes the CPU to delete node pointers from hardware cache',
          bn: 'এটি সিপিইউকে হার্ডওয়্যার ক্যাশ থেকে নোড পয়েন্টার মুছে ফেলতে বাধ্য করে'
        },
        {
          en: 'JavaScript engines do not allow arrays to hold more than 10 elements',
          bn: 'জাভাস্ক্রিপ্ট ইঞ্জিন ১০ টির বেশি উপাদান অ্যারেতে রাখতে দেয় না'
        },
        {
          en: 'It converts numeric elements into ASCII string representations',
          bn: 'এটি সংখ্যাসূচক উপাদানগুলোকে আসকি (ASCII) স্ট্রিংয়ে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider what memory movements must happen when index 0 is deleted from a contiguous array.',
        bn: 'অবিচ্ছিন্ন অ্যারে থেকে ০ নম্বর ইনডেক্স মুছে দিলে মেমোরিতে কী স্থানান্তর ঘটে তা ভাবুন।'
      },
      explanation: {
        en: 'Removing index 0 requires shifting all subsequent elements down by 1 position in memory, consuming O(n) steps per dequeue.',
        bn: '০ নম্বর ইনডেক্স সরাতে মেমোরিতে পরবর্তী প্রতিটি উপাদানকে ১ ঘর করে সরাতে হয়, যাতে প্রতি ডিকিউতে O(n) কাজ হয়।'
      }
    },
    {
      id: 'fq-ex2',
      kind: 'mcq',
      topic: 'pointer-queue-complexity',
      question: {
        en: 'What are the time complexities of enqueue and dequeue in a properly implemented pointer-based queue?',
        bn: 'সঠিকভাবে তৈরি পয়েন্টারভিত্তিক কিউতে enqueue এবং dequeue এর সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(1) for enqueue and O(1) for dequeue',
          bn: 'enqueue এর জন্য O(1) এবং dequeue এর জন্য O(1)'
        },
        {
          en: 'O(1) for enqueue and O(n) for dequeue',
          bn: 'enqueue এর জন্য O(1) এবং dequeue এর জন্য O(n)'
        },
        {
          en: 'O(n) for enqueue and O(1) for dequeue',
          bn: 'enqueue এর জন্য O(n) এবং dequeue এর জন্য O(1)'
        },
        {
          en: 'O(log n) for both operations',
          bn: 'উভয় অপারেশনের জন্য O(log n)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Tail pointer gives instant access to the end, while head pointer gives instant access to the front.',
        bn: 'টেল পয়েন্টার সরাসরি শেষের ঠিকানা দেয় এবং হেড পয়েন্টার সরাসরি শুরুর ঠিকানা দেয়।'
      },
      explanation: {
        en: 'By holding direct references to both head and tail nodes, adding to the tail and removing from the head each take O(1) time.',
        bn: 'হেড ও টেল উভয় নোডের সরাসরি রেফারেন্স থাকায় টেইলে যোগ করা এবং হেড থেকে সরানো উভয়ই O(1) সময়ে ঘটে।'
      }
    },
    {
      id: 'fq-ex3',
      kind: 'mcq',
      topic: 'empty-queue-invariants',
      question: {
        en: 'When a pointer queue containing exactly 1 node undergoes a dequeue operation, what must happen to the tail pointer?',
        bn: 'ঠিক ১ টি নোড থাকা অবস্থায় একটি পয়েন্টার কিউতে dequeue করা হলে tail পয়েন্টারের কী পরিবর্তন করতে হয়?'
      },
      options: [
        {
          en: 'tail must be explicitly set to null because the list has become completely empty',
          bn: 'tail কে স্পষ্টভাবে null করতে হয় কারণ তালিকাটি সম্পূর্ণ খালি হয়ে গেছে'
        },
        {
          en: 'tail must be set to point to the CPU memory register 0',
          bn: 'tail কে সিপিইউ মেমোরি রেজিস্টার ০ এর দিকে নির্দেশ করাতে হয়'
        },
        {
          en: 'tail is left unchanged pointing to the deleted node',
          bn: 'tail কে মোছা নোডের দিকেই অপরিবর্তিত রেখে দেওয়া হয়'
        },
        {
          en: 'tail must be reallocated in dynamic memory as a 64-bit integer',
          bn: 'tail কে একটি ৬৪-বিট পূর্ণসংখ্যা হিসেবে পুনরায় বরাদ্দ করতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If head becomes null, can tail still hold a valid node reference?',
        bn: 'head যদি null হয়ে যায়, তবে কি tail কোনো বৈধ নোডকে ধরে রাখতে পারে?'
      },
      explanation: {
        en: 'When the last node is removed, head becomes null. Setting tail to null ensures the queue state is cleanly reset to empty.',
        bn: 'শেষ নোডটি সরিয়ে নিলে head নাল হয়ে যায়। tail কেও নাল করে দিলে কিউটি পরিচ্ছন্নভাবে খালি অবস্থায় ফিরে আসে।'
      }
    }
  ],
  quiz: {
    id: 'fifo-thinking-quiz',
    title: {
      en: 'FIFO Principles and Queue Architecture Quiz',
      bn: 'ফিফো নীতি এবং কিউ আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'fq-q1',
        kind: 'mcq',
        topic: 'fifo-vs-lifo',
        question: {
          en: 'What is the fundamental difference in data access policy between a queue and a stack?',
          bn: 'কিউ এবং স্ট্যাকের মাঝে ডাটা অ্যাক্সেস নীতির মৌলিক পার্থক্য কোনটি?'
        },
        options: [
          {
            en: 'Queues process items in First-In First-Out order, whereas stacks process items in Last-In First-Out order',
            bn: 'কিউ ফার্স্ট-ইন ফার্স্ট-আউট নীতিতে প্রসেস করে, যেখানে স্ট্যাক লাস্ট-ইন ফার্স্ট-আউট নীতিতে প্রসেস করে'
          },
          {
            en: 'Queues can only store numeric values, whereas stacks can store text strings',
            bn: 'কিউ কেবল সংখ্যা সংরক্ষণ করতে পারে, যেখানে স্ট্যাক টেক্সট স্ট্রিং রাখতে পারে'
          },
          {
            en: 'Stacks run exclusively in CPU hardware, whereas queues run exclusively in software',
            bn: 'স্ট্যাক কেবল সিপিইউ হার্ডওয়্যারে চলে, যেখানে কিউ কেবল সফটওয়্যারে চলে'
          },
          {
            en: 'Queues require 64 times more memory than any stack structure',
            bn: 'কিউ যেকোনো স্ট্যাকের চেয়ে ৬৪ গুণ বেশি মেমোরি ব্যবহার করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider which end receives new items and which end dispenses items.',
          bn: 'কোন প্রান্তে নতুন উপাদান ঢোকে আর কোন প্রান্ত দিয়ে বের হয় তা বিবেচনা করুন।'
        },
        explanation: {
          en: 'A stack operates on LIFO (reversal order), while a queue operates on FIFO (arrival order) ensuring fairness.',
          bn: 'স্ট্যাক লিফো (বিপরীত ক্রমে) কাজ করে, আর কিউ ফিফো (আগমনের ক্রমে) কাজ করে ন্যায্যতা নিশ্চিত করে।'
        }
      },
      {
        id: 'fq-q2',
        kind: 'mcq',
        topic: 'queue-underflow',
        question: {
          en: 'What error state occurs when an application attempts to dequeue an item from a queue with size 0?',
          bn: 'সাইজ ০ থাকা অবস্থায় কোনো অ্যাপ্লিকেশন কিউ থেকে dequeue করার চেষ্টা করলে কোন ত্রুটি ঘটে?'
        },
        options: [
          {
            en: 'Queue Underflow: attempting to read from an empty data structure',
            bn: 'কিউ আন্ডারফ্লো: খালি ডেটা স্ট্রাকচার থেকে উপাদান পড়ার চেষ্টা'
          },
          {
            en: 'Stack Overflow: running out of recursion call stack frames',
            bn: 'স্ট্যাক ওভারফ্লো: রিকার্শন কল স্ট্যাক ফ্রেম নিঃশেষ হয়ে যাওয়া'
          },
          {
            en: 'Hardware Interrupt 404: memory bus disconnection',
            bn: 'হার্ডওয়্যার ইন্টারাপ্ট ৪০৪: মেমোরি বাস সংযোগ বিচ্ছিন্ন হওয়া'
          },
          {
            en: 'Heap Fragmentation Error: out of memory addresses',
            bn: 'হিপ ফ্র্যাগমেন্টেশন ত্রুটি: মেমোরি ঠিকানা শেষ হয়ে যাওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'When a container is depleted and cannot satisfy a removal request, it is underflow.',
          bn: 'যখন কোনো পাত্র খালি হয়ে যায় এবং উপাদান দিতে পারে না, তখন তাকে আন্ডারফ্লো বলে।'
        },
        explanation: {
          en: 'Queue underflow occurs when dequeue is invoked on an empty queue. Production code guards against this using isEmpty checks.',
          bn: 'খালি কিউতে dequeue ডাকলে কিউ আন্ডারফ্লো ঘটে। প্রোডাকশন কোডে isEmpty পরীক্ষার মাধ্যমে এটি প্রতিরোধ করা হয়।'
        }
      },
      {
        id: 'fq-q3',
        kind: 'mcq',
        topic: 'producer-consumer-spike',
        question: {
          en: 'How does an intermediate queue buffer protect a system when a producer generates a sudden burst of 10000 requests per second?',
          bn: 'একজন উৎপাদক হঠাৎ প্রতি সেকেন্ডে ১০০০০ অনুরোধের ঢল পাঠালে মধ্যবর্তী কিউ বাফার কীভাবে সিস্টেমকে রক্ষা করে?'
        },
        options: [
          {
            en: 'It absorbs the traffic burst in memory, allowing downstream consumers to process items at their own sustainable rate',
            bn: 'এটি মেমোরিতে অতিরিক্ত ট্রাফিক ধারণ করে, ফলে গ্রাহকরা তাদের নিজস্ব সহনশীল গতিতে কাজ সম্পন্ন করতে পারে'
          },
          {
            en: 'It instantly multiplies the CPU clock speed of the host server by 10',
            bn: 'এটি তাৎক্ষণিকভাবে হোস্ট সার্ভারের সিপিইউ ক্লক স্পিড ১০ গুণ বাড়িয়ে দেয়'
          },
          {
            en: 'It converts the incoming requests into static HTML files stored in the browser',
            bn: 'এটি আগত অনুরোধগুলোকে ব্রাউজারে সংরক্ষিত স্ট্যাটিক এইচটিএমএল ফাইলে রূপান্তর করে'
          },
          {
            en: 'It terminates the network connection of all clients immediately',
            bn: 'এটি সাথে সাথে সমস্ত ক্লায়েন্টের নেটওয়ার্ক সংযোগ বিচ্ছিন্ন করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of a queue acting like a water reservoir during a flash flood.',
          bn: 'হঠাৎ বন্যার সময় কিউ কীভাবে একটি জলাধারের মতো কাজ করে তা ভাবুন।'
        },
        explanation: {
          en: 'The queue buffers excess requests temporarily, shielding downstream databases and workers from crash-inducing load spikes.',
          bn: 'কিউ সাময়িকভাবে অতিরিক্ত অনুরোধ জমা রাখে, যা ডেটাবেজ এবং সার্ভারকে অতিরিক্ত চাপের ক্র্যাশ থেকে রক্ষা করে।'
        }
      },
      {
        id: 'fq-q4',
        kind: 'mcq',
        topic: 'peek-invariant',
        question: {
          en: 'What does the peek() method return in a standard FIFO queue?',
          bn: 'একটি সাধারণ ফিফো কিউতে peek() মেথড কী ফেরত দেয়?'
        },
        options: [
          {
            en: 'The value of the front head element without removing it from the queue',
            bn: 'কিউ থেকে না সরিয়েই সামনের হেড উপাদানটির মান'
          },
          {
            en: 'The total number of CPU clock cycles elapsed since system startup',
            bn: 'সিস্টেম চালুর পর থেকে মোট অতিবাহিত সিপিইউ ক্লক সাইকেলের সংখ্যা'
          },
          {
            en: 'The value of the most recently enqueued item at the tail',
            bn: 'টেইলে সবচেয়ে সম্প্রতি যুক্ত হওয়া উপাদানটির মান'
          },
          {
            en: 'A random boolean value indicating if the hardware cache is active',
            bn: 'হার্ডওয়্যার ক্যাশ সচল আছে কিনা তা নির্দেশকারী একটি এলোমেলো বুলিয়ান মান'
          }
        ],
        answer: 0,
        hint: {
          en: 'Peek inspects the next element in line to be served without modifying queue state.',
          bn: 'পিক কিউয়ের কোনো পরিবর্তন না করেই পরবর্তী পরিবেশনযোগ্য উপাদানটি দেখে।'
        },
        explanation: {
          en: 'Peek inspects the item at the front of the queue without mutating the list, returning null or undefined if the queue is empty.',
          bn: 'পিক কিউ পরিবর্তন না করে সামনের আইটেমটি পরিদর্শন করে, আর কিউ খালি থাকলে নাল ফেরত দেয়।'
        }
      }
    ]
  }
};
