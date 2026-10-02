import type { Lesson } from '../../../lib/types';

export const thePriorityThroneLesson: Lesson = {
  slug: 'the-priority-throne',
  tech: 'queues',
  title: {
    en: 'Priority Queues — Binary Heaps, Tie-Breaking, and Event Simulators',
    bn: 'প্রায়োরিটি কিউ: বাইনারি হিপ, টাই-ব্রেকিং এবং ইভেন্ট-চালিত সিমুলেশন'
  },
  summary: {
    en: 'While standard queues serve elements strictly in arrival order, priority queues dispense items according to urgency scores. We analyze why naive unsorted or sorted arrays suffer from O(n) bottlenecks, and show how binary heaps achieve balanced logarithmic O(log n) performance for both insertion and extraction. We formalize the FIFO-in-key tie-breaking rule for identical priorities and examine aging techniques to prevent low-priority task starvation.',
    bn: 'সাধারণ কিউ আগমনের ক্রমানুসারে উপাদান সরবরাহ করলেও প্রায়োরিটি কিউ উপাদানের জরুরি মান বা স্কোরের ওপর ভিত্তি করে সেবা দেয়। আমরা বিশ্লেষণ করি কেন আনসর্টেড বা সর্টেড অ্যারে O(n) জটিলতার কারণে অকার্যকর হয় এবং কীভাবে বাইনারি হিপ সন্নিবেশ ও নিষ্কাশন উভয় ক্ষেত্রেই ভারসাম্যপূর্ণ O(log n) গতি নিশ্চিত করে। আমরা সমান অগ্রাধিকারে ফিফো টাই-ব্রেকিং নিয়ম এবং কম অগ্রাধিকারের কাজের অনাহার (starvation) রোধে এজিং কৌশল পর্যালোচনা করি।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'the-sliding-observatory',
    tech: 'queues',
    title: {
      en: 'Monotonic Deque: The Sliding Window Maximum Optimization',
      bn: 'মনোটোনিক ডিকিউ: স্লাইডিং উইন্ডো ম্যাক্সিমাম অপ্টিমাইজেশন'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'priority-dispatch-paradigm',
      text: {
        en: 'The Priority Dispatch Paradigm: Urgency Over Time',
        bn: 'অগ্রাধিকারভিত্তিক বণ্টন ব্যবস্থা: সময়ের বদলে জরুরি মান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you develop critical systems like emergency room triage or operating system CPU schedulers, serving tasks strictly by arrival time is inadequate. A life-threatening patient arriving at 10:05 must be treated before a patient with a minor headache who arrived at 10:00. Priority queues replace pure chronological ordering with an explicit priority score.',
        bn: 'যখন আপনি হাসপাতালের জরুরি বিভাগ বা অপারেটিং সিস্টেমের সিপিইউ শিডিউলারের মতো সংবেদনশীল সিস্টেম তৈরি করেন, তখন শুধু আগমনের সময় দেখে সেবা দেওয়া অযৌক্তিক। সকাল ১০:০৫ এ আসা একজন মুমূর্ষু রোগীকে অবশ্যই সকাল ১০:০০ এ আসা সাধারণ মাথাব্যথার রোগীর আগে সেবা দিতে হবে। প্রায়োরিটি কিউ কেবল আগমনের সময়ের বদলে একটি স্পষ্ট অগ্রাধিকার স্কোরের মাধ্যমে উপাদান পরিবেশন করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In a priority queue, every element packages a payload alongside an urgency score. Dequeue operations consistently extract the item with the highest priority in a max-priority queue or the lowest numerical score in a min-priority queue. When multiple elements share identical scores, a sequence counter preserves original FIFO arrival order.',
        bn: 'প্রায়োরিটি কিউতে প্রতিটি উপাদানের সাথে একটি জরুরি মান বা স্কোর যুক্ত থাকে। ম্যাক্স-প্রায়োরিটি কিউতে সর্বোচ্চ অগ্রাধিকারের উপাদানটি আগে বের হয় এবং মিন-প্রায়োরিটি কিউতে সর্বনিম্ন সংখ্যার উপাদানটি আগে বের হয়। যখন একাধিক উপাদানের স্কোর সমান হয়, তখন একটি সিকোয়েন্স কাউন্টার তাদের আগমনের মূল ফিফো ক্রমটি রক্ষা করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'priority-queue',
          def: {
            en: 'An abstract data type where each element possesses an urgency score and the highest priority element is dequeued first.',
            bn: 'এমন এক ডেটা টাইপ যেখানে প্রতিটি উপাদানের একটি জরুরি মান থাকে এবং সর্বোচ্চ অগ্রাধিকারের উপাদানটি সবার আগে বের হয়।'
          }
        },
        {
          term: 'binary-heap',
          def: {
            en: 'A complete binary tree packed into a contiguous array where every parent satisfies the heap property relative to its children.',
            bn: 'অবিচ্ছিন্ন অ্যারেতে তৈরি একটি পূর্ণ বাইনারি ট্রি যেখানে প্রতিটি মূল উপাদান তার সন্তান উপাদানের চেয়ে বড় বা ছোট থাকে।'
          }
        },
        {
          term: 'tie-breaking',
          def: {
            en: 'Using an incremental arrival sequence counter to ensure elements with identical priority are served in FIFO order.',
            bn: 'একই অগ্রাধিকারের উপাদানের ক্ষেত্রে আগমনের ক্রম বজায় রাখতে একটি সিকোয়েন্স কাউন্টার ব্যবহার করা।'
          }
        },
        {
          term: 'priority-starvation',
          def: {
            en: 'A hazard where low-priority tasks wait indefinitely because high-priority items arrive continuously.',
            bn: 'একটি সংকট যেখানে উচ্চ অগ্রাধিকারের কাজ ক্রমাগত আসতে থাকলে কম অগ্রাধিকারের কাজগুলো অনির্দিষ্টকাল আটকে থাকে।'
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
      id: 'heap-mechanics',
      text: {
        en: 'Binary Heap Architecture: Array Index Arithmetic and Sifting',
        bn: 'বাইনারি হিপ কাঠামো: অ্যারে ইনডেক্স পাটিগণিত এবং শিফটিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Implementing a priority queue using an unsorted array makes enqueue fast in O(1) time but degrades dequeue to an O(n) search. A sorted array makes dequeue O(1) but forces O(n) insertion shifts. A binary heap resolves this tension by providing balanced O(log n) time complexity for both enqueue and dequeue operations.',
        bn: 'একটি অগোছালো অ্যারে দিয়ে প্রায়োরিটি কিউ বানালে enqueue দ্রুত O(1) সময়ে হয় কিন্তু dequeue করতে O(n) খোঁজাখুঁজি লাগে। আবার সাজানো অ্যারে ব্যবহার করলে dequeue O(1) হলেও enqueue করতে O(n) শিফটিং লাগে। একটি বাইনারি হিপ উভয় অপারেশনেই ভারসাম্যপূর্ণ O(log n) সময় নিশ্চিত করে এই সমস্যার সমাধান দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A binary heap stores a complete binary tree inside a contiguous array without explicit node pointers. For any element at index i, its parent sits at Math.floor((i - 1) / 2), its left child sits at 2 * i + 1, and its right child sits at 2 * i + 2. In a max-heap, every parent is greater than or equal to its children, guaranteeing the maximum item always rests at index 0.',
        bn: 'বাইনারি হিপ কোনো পয়েন্টার ছাড়াই একটি সাধারণ অবিচ্ছিন্ন অ্যারের ভেতর সম্পূর্ণ বাইনারি ট্রি ধারণ করে। যেকোনো ইনডেক্স i এর জন্য তার প্যারেন্ট থাকে Math.floor((i - ১) / ২) ঘরে, বাঁদিকের সন্তান থাকে ২ * i + ১ এ এবং ডানদিকের সন্তান থাকে ২ * i + ২ এ। ম্যাক্স-হিপে প্রতিটি অভিভাবক তার সন্তানের চেয়ে বড় বা সমান থাকে, ফলে সর্বোচ্চ অগ্রাধিকারের উপাদানটি সর্বদা ০ নম্বর ঘরে বসে থাকে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Underlying Architecture', bn: 'অভ্যন্তরীণ ডেটা কাঠামো' },
        { en: 'Enqueue Operation', bn: 'এনকিউ অপারেশন' },
        { en: 'Dequeue Top Operation', bn: 'ডিকিউ টপ অপারেশন' },
        { en: 'Peek Top Operation', bn: 'পিক অপারেশন' }
      ],
      rows: [
        [
          { en: 'Unsorted Array', bn: 'অবিন্যস্ত অ্যারে' },
          { en: 'O(1) append to end', bn: 'O(1) শেষে যোগ' },
          { en: 'O(n) linear scan', bn: 'O(n) রৈখিক খোঁজা' },
          { en: 'O(n) linear scan', bn: 'O(n) রৈখিক খোঁজা' }
        ],
        [
          { en: 'Sorted Array', bn: 'সাজানো অ্যারে' },
          { en: 'O(n) element shifts', bn: 'O(n) উপাদান সরানো' },
          { en: 'O(1) pop from end', bn: 'O(1) শেষ থেকে পপ' },
          { en: 'O(1) direct indexing', bn: 'O(1) সরাসরি ইনডেক্স' }
        ],
        [
          { en: 'Binary Heap (Array-backed)', bn: 'বাইনারি হিপ (অ্যারে-ভিত্তিক)' },
          { en: 'O(log n) sift up', bn: 'O(log n) শিফট আপ' },
          { en: 'O(log n) sift down', bn: 'O(log n) শিফট ডাউন' },
          { en: 'O(1) root inspection', bn: 'O(1) রুট নোড পরিদর্শন' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'priority-queue-impl',
      text: {
        en: 'Executable Priority Queue Implementation',
        bn: 'প্রায়োরিটি কিউয়ের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements a Max-Priority Queue backed by a binary heap. Notice that Emergency 1 and Emergency 2 share an identical priority score of 50. The sequence counter ensures Emergency 1 is dispatched first, preserving fair arrival ordering.',
        bn: 'নিচের টাইপস্ক্রিপ্ট কোডটি বাইনারি হিপ দিয়ে একটি ম্যাক্স-প্রায়োরিটি কিউ বাস্তবায়ন করে। লক্ষ্য করুন ইমার্জেন্সি ১ এবং ইমার্জেন্সি ২ উভয়ের অগ্রাধিকার স্কোর ৫০। সিকোয়েন্স কাউন্টার নিশ্চিত করে যে ইমার্জেন্সি ১ আগে সেবা পাবে, যা আগমনের ন্যায্যতা বজায় রাখে।'
      }
    },
    {
      type: 'code',
      code: `class PQNode {
  constructor(val, priority, seq) {
    this.val = val;
    this.priority = priority;
    this.seq = seq;
  }
}

class PriorityQueue {
  constructor() {
    this.heap = [];
    this.seqCounter = 0;
  }

  // Max-priority first; ties broken by earlier arrival seq (FIFO)
  _isHigher(a, b) {
    if (a.priority !== b.priority) {
      return a.priority > b.priority;
    }
    return a.seq < b.seq;
  }

  enqueue(val, priority) {
    const node = new PQNode(val, priority, ++this.seqCounter);
    this.heap.push(node);
    this._siftUp(this.heap.length - 1);
  }

  dequeue() {
    if (this.heap.length === 0) return null;
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._siftDown(0);
    }
    return top;
  }

  peek() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  _siftUp(idx) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      if (this._isHigher(this.heap[idx], this.heap[parentIdx])) {
        const tmp = this.heap[idx];
        this.heap[idx] = this.heap[parentIdx];
        this.heap[parentIdx] = tmp;
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  _siftDown(idx) {
    const n = this.heap.length;
    while (true) {
      let best = idx;
      const left = 2 * idx + 1;
      const right = 2 * idx + 2;

      if (left < n && this._isHigher(this.heap[left], this.heap[best])) {
        best = left;
      }
      if (right < n && this._isHigher(this.heap[right], this.heap[best])) {
        best = right;
      }

      if (best !== idx) {
        const tmp = this.heap[idx];
        this.heap[idx] = this.heap[best];
        this.heap[best] = tmp;
        idx = best;
      } else {
        break;
      }
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const pq = new PriorityQueue();
pq.enqueue('Routine Task', 10);
pq.enqueue('Emergency 1', 50);
pq.enqueue('Medium Task', 30);
pq.enqueue('Emergency 2', 50);

console.log('Peek top:', pq.peek().val);
// Output: Peek top: Emergency 1

const s1 = pq.dequeue();
console.log('Served 1:', s1.val, 'priority:', s1.priority);
// Output: Served 1: Emergency 1 priority: 50

const s2 = pq.dequeue();
console.log('Served 2 (tie-broken by seq):', s2.val, 'priority:', s2.priority);
// Output: Served 2 (tie-broken by seq): Emergency 2 priority: 50

const s3 = pq.dequeue();
console.log('Served 3:', s3.val, 'priority:', s3.priority);
// Output: Served 3: Medium Task priority: 30

const s4 = pq.dequeue();
console.log('Served 4:', s4.val, 'priority:', s4.priority);
// Output: Served 4: Routine Task priority: 10

console.log('Is empty?:', pq.isEmpty());
// Output: Is empty?: true`
    },
    {
      type: 'heading',
      id: 'starvation-and-aging',
      text: {
        en: 'Mitigating Starvation Through Priority Aging',
        bn: 'এজিং কৌশলের মাধ্যমে অনাহার সংকট দূরীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A major structural risk in priority queues is starvation: if high-priority tasks arrive continuously, low-priority tasks wait indefinitely in the queue. Production operating systems solve this using Aging: every time unit a task spends waiting in line, the scheduler boosts its effective score. Given sufficient time, ancient low-priority tasks rise in status and execute.',
        bn: 'প্রায়োরিটি কিউয়ের একটি বড় ঝুঁকি হলো অনাহার বা স্টারভেশন: উচ্চ অগ্রাধিকারের কাজ ক্রমাগত আসতে থাকলে কম অগ্রাধিকারের কাজগুলো চিরতরে কিউতে পড়ে থাকে। উৎপাদনমুখী অপারেটিং সিস্টেমগুলো এজিং (Aging) পদ্ধতির মাধ্যমে এর সমাধান করে: কিউতে অপেক্ষার প্রতিটি সময় এককে শিডিউলার কাজের স্কোর সামান্য বাড়িয়ে দেয়। যথেষ্ট সময় অপেক্ষার পর পুরনো কাজগুলোর অগ্রাধিকার বেড়ে যায় এবং তারা প্রসেসর পায়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Urgency dispatch: Priority queues serve items by urgency score rather than pure chronological arrival time.',
          bn: 'জরুরি ভিত্তিতে বণ্টন: প্রায়োরিটি কিউ আগমনের সময়ের বদলে জরুরি স্কোরের ভিত্তিতে উপাদান পরিবেশন করে।'
        },
        {
          en: 'Logarithmic balance: Binary heaps provide O(log n) enqueue and dequeue operations without maintaining a fully sorted array.',
          bn: 'লগারিদমিক ভারসাম্য: বাইনারি হিপ সম্পূর্ণ সাজানো অ্যারে না রেখেও O(log n) সময়ে এনকিউ ও ডিকিউ নিশ্চিত করে।'
        },
        {
          en: 'Tie-break fairness: Sequence counters guarantee that identical priority items are dispatched in fair FIFO arrival order.',
          bn: 'টাই-ব্রেকিং ন্যায্যতা: সিকোয়েন্স কাউন্টার নিশ্চিত করে যে সমান অগ্রাধিকারের উপাদানগুলো আগমনের ফিফো ক্রমানুসারে সেবা পায়।'
        },
        {
          en: 'Aging prevents starvation: Incrementing effective scores over time guarantees that quiet low-priority tasks eventually execute.',
          bn: 'অনাহার রোধে এজিং: সময়ের সাথে স্কোর বাড়িয়ে দিলে পুরনো কম অগ্রাধিকারের কাজগুলোও একপর্যায়ে সেবা পাওয়ার সুযোগ পায়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'pt-ex1',
      kind: 'mcq',
      topic: 'heap-time-complexity',
      question: {
        en: 'What are the time complexities for inserting an element and extracting the highest priority element in a binary heap?',
        bn: 'একটি বাইনারি হিপে উপাদান ঢোকানো এবং সর্বোচ্চ অগ্রাধিকারের উপাদান বের করার সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(log n) for insert and O(log n) for extract',
          bn: 'ঢোকানোর জন্য O(log n) এবং বের করার জন্য O(log n)'
        },
        {
          en: 'O(1) for insert and O(n) for extract',
          bn: 'ঢোকানোর জন্য O(1) এবং বের করার জন্য O(n)'
        },
        {
          en: 'O(n) for insert and O(1) for extract',
          bn: 'ঢোকানোর জন্য O(n) এবং বের করার জন্য O(1)'
        },
        {
          en: 'O(n^2) for both operations',
          bn: 'উভয় অপারেশনের জন্যই O(n^2)'
        }
      ],
      answer: 0,
      hint: {
        en: 'A binary tree of n elements has a height of log2 n.',
        bn: 'n উপাদান বিশিষ্ট একটি বাইনারি ট্রির উচ্চতা হয় log2 n।'
      },
      explanation: {
        en: 'Sifting up and sifting down traverse at most the height of the complete tree, taking at most O(log n) steps.',
        bn: 'শিফট আপ এবং শিফট ডাউন অপারেশনে সর্বোচ্চ ট্রির উচ্চতা সমান পথ যেতে হয়, যার খরচ O(log n)।'
      }
    },
    {
      id: 'pt-ex2',
      kind: 'mcq',
      topic: 'fifo-tie-breaking',
      question: {
        en: 'Why is an arrival sequence counter (seq) necessary when building a priority queue?',
        bn: 'প্রায়োরিটি কিউ তৈরির সময় কেন একটি আগমন সিকোয়েন্স কাউন্টার (seq) রাখা প্রয়োজন?'
      },
      options: [
        {
          en: 'To break ties deterministically, ensuring items with identical priority are processed in FIFO arrival order',
          bn: 'সমান অগ্রাধিকারের উপাদানগুলোর মাঝে টাই ভেঙে নিশ্চিতভাবে আগমনের ফিফো ক্রম বজায় রাখতে'
        },
        {
          en: 'To count the total number of CPU transistor gates in the motherboard',
          bn: 'মাদারবোর্ডের মোট সিপিইউ ট্রানজিস্টরের সংখ্যা গণনা করতে'
        },
        {
          en: 'To automatically encrypt text strings using 256-bit hash algorithms',
          bn: '২৫৬-বিট হ্যাশ অ্যালগরিদম দিয়ে টেক্সট স্ট্রিং স্বয়ংক্রিয়ভাবে এনক্রিপ্ট করতে'
        },
        {
          en: 'Because heaps crash if priority values are positive numbers',
          bn: 'কারণ প্রায়োরিটির মান ধনাত্মক সংখ্যা হলে হিপ ক্র্যাশ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If two tasks both have priority 50, which one should run first?',
        bn: 'দুটি কাজেরই প্রায়োরিটি ৫০ হলে কোন কাজটি আগে চলা উচিত?'
      },
      explanation: {
        en: 'Without a tie-breaking sequence counter, items with identical priorities could be returned in arbitrary order, violating temporal fairness.',
        bn: 'সিকোয়েন্স কাউন্টার না থাকলে সমান অগ্রাধিকারের কাজগুলো এলোমেলো ক্রমে বের হবে, যা আগমনের ন্যায্যতা নষ্ট করে।'
      }
    },
    {
      id: 'pt-ex3',
      kind: 'mcq',
      topic: 'starvation-remedy',
      question: {
        en: 'What architectural technique prevents low-priority tasks from waiting forever in a saturated priority queue?',
        bn: 'একটি ব্যস্ত প্রায়োরিটি কিউতে কম অগ্রাধিকারের কাজগুলোকে চিরতরে আটকে থাকা থেকে বাঁচাতে কোন স্থাপত্য কৌশল ব্যবহার করা হয়?'
      },
      options: [
        {
          en: 'Priority Aging: gradually increasing a task priority score the longer it waits in the queue',
          bn: 'প্রায়োরিটি এজিং: কিউতে যত বেশি সময় কোনো কাজ অপেক্ষা করে তার অগ্রাধিকার স্কোর ধীরে ধীরে বৃদ্ধি করা'
        },
        {
          en: 'Power-cycling the server hardware every 5 minutes',
          bn: 'প্রতি ৫ মিনিট পর পর সার্ভারের পাওয়ার বন্ধ করে চালু করা'
        },
        {
          en: 'Deleting all incoming high-priority tasks permanently',
          bn: 'নতুন আসা সমস্ত উচ্চ অগ্রাধিকারের কাজ স্থায়ীভাবে মুছে ফেলা'
        },
        {
          en: 'Setting the capacity of the priority queue to 0',
          bn: 'প্রায়োরিটি কিউয়ের ধারণক্ষমতা ০ করে দেওয়া'
        }
      ],
      answer: 0,
      hint: {
        en: 'As a task grows older, its urgency should artificially rise.',
        bn: 'কাজের বয়স বাড়ার সাথে সাথে তার জরুরি মান কৃত্রিমভাবে বৃদ্ধি পাওয়া উচিত।'
      },
      explanation: {
        en: 'Aging guarantees that even the lowest priority task will eventually achieve a high enough score to be dispatched.',
        bn: 'এজিং নিশ্চিত করে যে সবচেয়ে কম অগ্রাধিকারের কাজটিও পর্যাপ্ত সময় পর উচ্চ স্কোর পেয়ে প্রসেসরে যাওয়ার সুযোগ পায়।'
      }
    }
  ],
  quiz: {
    id: 'priority-throne-quiz',
    title: {
      en: 'Priority Queues and Binary Heaps Quiz',
      bn: 'প্রায়োরিটি কিউ এবং বাইনারি হিপ কুইজ'
    },
    questions: [
      {
        id: 'pt-q1',
        kind: 'mcq',
        topic: 'parent-index-formula',
        question: {
          en: 'In an array-based binary heap, if a child node sits at index 6, at what index is its parent located?',
          bn: 'অ্যারে-ভিত্তিক বাইনারি হিপে একটি চাইল্ড নোড যদি ৬ নম্বর ইনডেক্সে থাকে, তবে তার প্যারেন্ট কোন ইনডেক্সে থাকবে?'
        },
        options: [
          {
            en: 'Index 2, computed by Math.floor((6 - 1) / 2) = 2',
            bn: '২ নম্বর ইনডেক্স, Math.floor((৬ - ১) / ২) = ২ হিসাব করে'
          },
          {
            en: 'Index 3',
            bn: '৩ নম্বর ইনডেক্স'
          },
          {
            en: 'Index 12',
            bn: '১২ নম্বর ইনডেক্স'
          },
          {
            en: 'Index 0',
            bn: '০ নম্বর ইনডেক্স'
          }
        ],
        answer: 0,
        hint: {
          en: 'Parent formula for index i is Math.floor((i - 1) / 2).',
          bn: 'ইনডেক্স i এর জন্য প্যারেন্ট খোঁজার সূত্র হলো Math.floor((i - ১) / ২)।'
        },
        explanation: {
          en: 'Subtracting 1 from 6 gives 5. Dividing 5 by 2 and taking the floor yields index 2.',
          bn: '৬ থেকে ১ বিয়োগ করলে ৫ হয়। ৫ কে ২ দিয়ে ভাগ করে ফ্লোর নিলে ২ পাওয়া যায়।'
        }
      },
      {
        id: 'pt-q2',
        kind: 'mcq',
        topic: 'sift-down-root-removal',
        question: {
          en: 'When the root element is removed from a binary heap during dequeue, how is the heap property restored?',
          bn: 'ডিকিউ করার সময় বাইনারি হিপের রুট উপাদানটি সরিয়ে নিলে কীভাবে হিপের ভারসাম্য পুনরায় ফিরিয়ে আনা হয়?'
        },
        options: [
          {
            en: 'The last leaf element moves to the root, then sifts down by repeatedly swapping with its larger child',
            bn: 'শেষ উপাদানটি রুটে চলে আসে এবং বারবার তার বড় সন্তানের সাথে অদলবদল করে নিচে (শিফট ডাউন) নামে'
          },
          {
            en: 'The entire array is sorted from scratch using quicksort in O(n log n) time',
            bn: 'পুরো অ্যারেকে কুইকসর্ট দিয়ে নতুন করে সাজানো হয় O(n log n) সময়ে'
          },
          {
            en: 'All children of the root are immediately deleted from memory',
            bn: 'রুটের সমস্ত সন্তানকে মেমোরি থেকে সাথে সাথে মুছে ফেলা হয়'
          },
          {
            en: 'The operating system restarts the application process',
            bn: 'অপারেটিং সিস্টেম অ্যাপ্লিকেশন প্রসেসটি পুনরায় চালু করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Move the last element up to fill the hole, then push it downward until it is larger than its children.',
          bn: 'ফাঁকা স্থান পূরণে শেষ উপাদানটি উপরে আনুন, তারপর সন্তানদের চেয়ে বড় না হওয়া পর্যন্ত নিচে নামান।'
        },
        explanation: {
          en: 'Replacing the root with the last leaf and sifting downward restores the heap invariant in O(log n) steps.',
          bn: 'শেষ পাতাকে রুটে বসিয়ে নিচে নামালে মাত্র O(log n) পদক্ষেপে হিপের বৈশিষ্ট্য অক্ষুণ্ন থাকে।'
        }
      },
      {
        id: 'pt-q3',
        kind: 'mcq',
        topic: 'dijkstra-priority-queue',
        question: {
          en: 'Why is a Min-Priority Queue indispensable for Dijkstra shortest path algorithm on graphs?',
          bn: 'গ্রাফের জন্য ডিকস্ট্রা (Dijkstra) শর্টেস্ট পাথ অ্যালগরিদমে কেন একটি মিন-প্রায়োরিটি কিউ অপরিহার্য?'
        },
        options: [
          {
            en: 'It extracts the unvisited vertex with the smallest tentative distance in O(log V) time rather than O(V)',
            bn: 'এটি O(V) এর বদলে O(log V) সময়ে সর্বনিম্ন দূরত্বের অপ্রদর্শিত শীর্ষবিন্দুটি খুঁজে দেয়'
          },
          {
            en: 'It converts graph edges into high-definition vector graphics',
            bn: 'এটি গ্রাফের সংযোগ রেখাগুলোকে উচ্চমানের ভেক্টর গ্রাফিক্সে রূপান্তর করে'
          },
          {
            en: 'Dijkstra algorithm cannot run on 64-bit operating systems without a queue',
            bn: 'কিউ ছাড়া ৬৪-বিট অপারেটিং সিস্টেমে ডিকস্ট্রা অ্যালগরিদম চালানো যায় না'
          },
          {
            en: 'It guarantees that all graph edge weights are prime numbers',
            bn: 'এটি নিশ্চিত করে যে গ্রাফের সমস্ত ওজন কেবল মৌলিক সংখ্যা হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'At each step, Dijkstra needs the node with minimum current distance.',
          bn: 'প্রতিটি ধাপে ডিকস্ট্রা অ্যালগরিদমের সর্বনিম্ন দূরত্বের নোডটি প্রয়োজন হয়।'
        },
        explanation: {
          en: 'Using a min-heap priority queue speeds up Dijkstra from O(V^2) to O((V + E) log V), making it practical for massive road networks.',
          bn: 'মিন-হিপ ব্যবহারের ফলে ডিকস্ট্রার গতি O(V^2) থেকে O((V + E) log V) এ উন্নীত হয়, যা বড় নেটওয়ার্কে কার্যকর।'
        }
      },
      {
        id: 'pt-q4',
        kind: 'mcq',
        topic: 'peek-time-complexity',
        question: {
          en: 'What is the time complexity to inspect the highest priority item (peek) in a binary max-heap?',
          bn: 'একটি বাইনারি ম্যাক্স-হিপে সর্বোচ্চ অগ্রাধিকারের উপাদানটি দেখার (peek) সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(1) constant time, because the maximum item always resides at index 0',
            bn: 'O(1) ধ্রুবক সময়, কারণ সর্বোচ্চ উপাদানটি সর্বদা ০ নম্বর ইনডেক্সে থাকে'
          },
          {
            en: 'O(n) linear search time',
            bn: 'O(n) রৈখিক খোঁজার সময়'
          },
          {
            en: 'O(log n) logarithmic time',
            bn: 'O(log n) লগারিদমিক সময়'
          },
          {
            en: 'O(n^2) quadratic time',
            bn: 'O(n^2) চতুর্ঘাতী সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Where does the heap invariant position the greatest value?',
          bn: 'হিপের নিয়ম অনুযায়ী সবচেয়ে বড় মানটি কোথায় অবস্থান করে?'
        },
        explanation: {
          en: 'The max-heap property guarantees the largest element is stored at the root (index 0), requiring only a single array lookup.',
          bn: 'ম্যাক্স-হিপের নিয়মে সবচেয়ে বড় উপাদানটি রুটে (০ নম্বর ইনডেক্সে) সংরক্ষিত থাকে, ফলে ১ টি পদক্ষেপে তা দেখা যায়।'
        }
      }
    ]
  }
};
