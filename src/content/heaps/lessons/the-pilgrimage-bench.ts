import type { Lesson } from '../../../lib/types';

export const thePilgrimageBenchLesson: Lesson = {
  slug: 'the-pilgrimage-bench',
  tech: 'heaps',
  title: {
    en: 'Heap Architecture Synthesis — Cache Locality, D-Ary Heaps, and Tree Bridges',
    bn: 'হিপ আর্কিটেকচার সংশ্লেষ: ক্যাশ লোকালিটি, ডি-অ্যারি হিপ এবং ট্রি সংযোগ'
  },
  summary: {
    en: 'In this capstone lesson, we synthesize the entire binary heap curriculum into an architectural decision framework. We examine why modern CPU memory hierarchies favor d-ary heaps (such as 4-ary heaps) by slashing tree height and packing sibling nodes into contiguous 64-byte hardware cache lines. We compare binary heaps, Fibonacci heaps, and hashed timing wheels across real systems, mapping out clear engineering trade-offs and building the conceptual bridge to balanced search trees and graph algorithms.',
    bn: 'এই চূড়ান্ত পাঠে আমরা সম্পূর্ণ বাইনারি হিপের পাঠ্যক্রমকে একটি কাঠামোগত সিদ্ধান্ত গ্রহণের ফ্রেমে সমন্বয় করি। আমরা পরীক্ষা করি কেন আধুনিক সিপিইউ মেমোরি হায়ারার্কি ট্রির উচ্চতা কমিয়ে এবং সহোদর নোডগুলোকে অবিচ্ছিন্ন ৬৪-বাইট ক্যাশ লাইনে রেখে ডি-অ্যারি হিপকে (যেমন ৪-অ্যারি হিপ) অগ্রাধিকার দেয়। বাস্তব সিস্টেমের আলোকে আমরা বাইনারি হিপ, ফিবোনাচ্চি হিপ এবং হ্যাশড টাইমিং হুইলের তুলনা করি এবং ব্যালান্সড সার্চ ট্রি ও গ্রাফ অ্যালগরিদমের সাথে সুস্পষ্ট সংযোগ স্থাপন করি।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'hardware-reality',
      text: {
        en: 'Beyond Binary: The Hardware Cache Horizon',
        bn: 'বাইনারির বাইরে: হার্ডওয়্যার ক্যাশ মেমোরির বাস্তবতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Throughout this curriculum, we implemented binary heaps where every parent branches into 2 children. While theoretically optimal in comparison counts, modern CPU architectures introduce hardware constraints that reshape real-world wall-clock performance.',
        bn: 'এই পাঠ্যক্রম জুড়ে আমরা বাইনারি হিপ বাস্তবায়ন করেছি যেখানে প্রতিটি প্যারেন্ট ২টি চাইল্ড নোডে বিভক্ত হয়। তুলনার সংখ্যার দিক থেকে এটি তাত্ত্বিকভাবে চমৎকার হলেও আধুনিক সিপিইউ আর্কিটেকচারের হার্ডওয়্যার বৈশিষ্ট্য বাস্তব কর্মক্ষমতায় নতুন মাত্রা যোগ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In modern processors, RAM is accessed in chunks of 64-byte cache lines. A 4-ary heap gives every parent 4 children instead of 2. This design cuts tree height in half from log2(n) to log4(n). During sift-up, a node climbs the tree in half as many steps. Furthermore, all 4 children are stored in adjacent array indices, fitting neatly within a single hardware cache line.',
        bn: 'আধুনিক প্রসেসরে র্যাম থেকে একবারে ৬৪-বাইট ক্যাশ লাইনের খণ্ড মেমোরিতে আসে। একটি ৪-অ্যারি হিপ প্রতিটি প্যারেন্টকে ২টির বদলে ৪টি সন্তান দেয়। এই নকশা ট্রির উচ্চতা log2(n) থেকে অর্ধেকে কমিয়ে log4(n) এ নামিয়ে আনে। শিফট-আপের সময় একটি নোড অর্ধেক সংখ্যক ধাপে ওপরে উঠতে পারে। তদুপরি ৪টি চাইল্ড নোডই পাশাপাশি সংরক্ষিত থাকায় তারা হার্ডওয়্যারের একটিমাত্র ক্যাশ লাইনে চমৎকারভাবে এঁটে যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'd-ary-heap',
          def: {
            en: 'A generalization of the binary heap where every node has d children, reducing tree height to log_d(n).',
            bn: 'বাইনারি হিপের একটি সম্প্রসারিত রূপ যেখানে প্রতিটি নোডের d সংখ্যক সন্তান থাকে, যা ট্রির উচ্চতা log_d(n) এ কমিয়ে আনে।'
          }
        },
        {
          term: 'cache-line-packing',
          def: {
            en: 'Aligning adjacent d-ary sibling nodes into a single 64-byte CPU cache line to eliminate memory fetch stalls.',
            bn: 'মেমোরি বিলম্ব দূর করতে সিপিইউর একটিমাত্র ৬৪-বাইট ক্যাশ লাইনের মধ্যে d সংখ্যক সহোদর নোড সাজানো।'
          }
        },
        {
          term: 'fibonacci-heap',
          def: {
            en: 'A theoretical heap structure achieving O(1) amortized decrease-key and insert, but burdened by heavy node pointer overhead.',
            bn: 'একটি তাত্ত্বিক হিপ কাঠামো যা O(1) ডিক্রিজ-কি সুবিধা দিলেও ভারী নোড পয়েন্টারের কারণে বাস্তবে ধীরগতির।'
          }
        },
        {
          term: 'hashed-timer-wheel',
          def: {
            en: 'A circular ring buffer for timer scheduling that achieves O(1) insert and O(1) expiration for bounded deadlines.',
            bn: 'টাইমার ব্যবস্থাপনার জন্য একটি বৃত্তাকার বাফার যা নির্দিষ্ট সময়সীমার ক্ষেত্রে O(1) সময়ে কাজ করে।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'heap'
    },
    {
      type: 'heading',
      id: 'heap-family-matrix',
      text: {
        en: 'Architectural Comparison: Heap Families and Production Schedulers',
        bn: 'কাঠামোগত তুলনা: হিপের প্রকারভেদ এবং উৎপাদন শিডিউলার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Senior systems architects evaluate priority structures across multiple operational dimensions: insertion rate, extraction frequency, decrease-key demands, and memory layout. The following matrix contrasts the primary priority mechanisms used across operating systems, networking stacks, and graph engines.',
        bn: 'অভিজ্ঞ সিস্টেম আর্কিটেক্টরা বিভিন্ন মাপকাঠিতে প্রায়োরিটি কাঠামোগুলো মূল্যায়ন করেন: সন্নিবেশের হার, নিষ্কাশনের সংখ্যা, ডিক্রিজ-কি এর প্রয়োজনীয়তা এবং মেমোরি বিন্যাস। নিচের ম্যাট্রিক্সটি অপারেটিং সিস্টেম, নেটওয়ার্কিং স্ট্যাক এবং গ্রাফ ইঞ্জিনে ব্যবহৃত প্রধান কৌশলগুলোর স্পষ্ট তুলনা তুলে ধরে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Priority Structure', bn: 'প্রায়োরিটি কাঠামো' },
        { en: 'Insert Cost', bn: 'সন্নিবেশ খরচ' },
        { en: 'Extract-Min Cost', bn: 'নিষ্কাশন খরচ' },
        { en: 'Decrease-Key Cost', bn: 'ডিক্রিজ-কি খরচ' },
        { en: 'Memory Overhead', bn: 'মেমোরি ওভারহেড' }
      ],
      rows: [
        [
          { en: 'Binary Heap (d=2)', bn: 'বাইনারি হিপ (d=২)' },
          { en: 'O(log2 n)', bn: 'O(log2 n)' },
          { en: 'O(log2 n)', bn: 'O(log2 n)' },
          { en: 'O(log2 n) with map', bn: 'O(log2 n) ম্যাপসহ' },
          { en: '0 pointers (dense array)', bn: '০ পয়েন্টার (ঘন অ্যারে)' }
        ],
        [
          { en: '4-Ary Heap (d=4)', bn: '৪-অ্যারি হিপ (d=৪)' },
          { en: 'O(log4 n) (2x faster climb)', bn: 'O(log4 n) (দ্বিগুণ দ্রুত)' },
          { en: 'O(4 * log4 n)', bn: 'O(৪ * log4 n)' },
          { en: 'O(log4 n) with map', bn: 'O(log4 n) ম্যাপসহ' },
          { en: '0 pointers (cache-aligned)', bn: '০ পয়েন্টার (ক্যাশ সারিবদ্ধ)' }
        ],
        [
          { en: 'Fibonacci Heap', bn: 'ফিবোনাচ্চি হিপ' },
          { en: 'O(1) amortized', bn: 'O(1) অ্যামর্টাইজড' },
          { en: 'O(log2 n) amortized', bn: 'O(log2 n) অ্যামর্টাইজড' },
          { en: 'O(1) amortized', bn: 'O(1) অ্যামর্টাইজড' },
          { en: '4 pointers per node', bn: 'নোড প্রতি ৪টি পয়েন্টার' }
        ],
        [
          { en: 'Hashed Timer Wheel', bn: 'হ্যাশড টাইমার হুইল' },
          { en: 'O(1) constant time', bn: 'O(1) ধ্রুবক সময়' },
          { en: 'O(1) per tick', bn: 'O(1) প্রতি টিকে' },
          { en: 'O(1) cancel', bn: 'O(1) বাতিল' },
          { en: 'Bucket array + linked lists', bn: 'বাকেট অ্যারে এবং লিংকড লিস্ট' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-dary-code',
      text: {
        en: 'Executable 4-Ary Heap Implementation',
        bn: '৪-অ্যারি হিপের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements a generic d-ary Min-Heap configured with branching factor d = 4. Notice how parent index calculation uses Math.floor((i - 1) / 4) and child scanning loops across a 4-element span.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি সাধারণ ডি-অ্যারি মিন-হিপ বাস্তবায়ন করে যার ব্রাঞ্চিং ফ্যাক্টর d = ৪। লক্ষ্য করুন কীভাবে প্যারেন্ট ইনডেক্স গণনায় Math.floor((i - ১) / ৪) ব্যবহৃত হয় এবং সন্তান স্ক্যান করতে ৪টি উপাদানের স্প্যান ঘুরে দেখা হয়।'
      }
    },
    {
      type: 'code',
      code: `class DaryHeap {
  constructor(d = 4) {
    this.d = d;
    this.heap = [];
  }

  size() { return this.heap.length; }
  peek() { return this.heap.length > 0 ? this.heap[0] : null; }

  parent(i) {
    if (i === 0) return null;
    return Math.floor((i - 1) / this.d);
  }

  firstChild(i) {
    const idx = this.d * i + 1;
    return idx < this.heap.length ? idx : null;
  }

  push(val) {
    this.heap.push(val);
    this._siftUp(this.heap.length - 1);
  }

  pop() {
    if (this.heap.length === 0) return null;
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this._siftDown(0);
    }
    return top;
  }

  _siftUp(i) {
    while (i > 0) {
      const p = this.parent(i);
      if (this.heap[i] < this.heap[p]) {
        const tmp = this.heap[i];
        this.heap[i] = this.heap[p];
        this.heap[p] = tmp;
        i = p;
      } else break;
    }
  }

  _siftDown(i) {
    const n = this.heap.length;
    while (true) {
      let best = i;
      const start = this.d * i + 1;
      const end = Math.min(n, start + this.d);

      for (let c = start; c < end; c++) {
        if (this.heap[c] < this.heap[best]) {
          best = c;
        }
      }

      if (best !== i) {
        const tmp = this.heap[i];
        this.heap[i] = this.heap[best];
        this.heap[best] = tmp;
        i = best;
      } else break;
    }
  }
}

const qheap = new DaryHeap(4);
const values = [45, 12, 85, 32, 8, 99, 14, 5, 27, 63];
for (const v of values) qheap.push(v);

console.log('4-ary Heap size:', qheap.size());
// Output: 4-ary Heap size: 10
console.log('Root element:', qheap.peek());
// Output: Root element: 5

const extracted = [];
while (qheap.size() > 0) {
  extracted.push(qheap.pop());
}
console.log('Sorted extraction from 4-ary heap:', extracted.join(', '));
// Output: Sorted extraction from 4-ary heap: 5, 8, 12, 14, 27, 32, 45, 63, 85, 99
console.log('Smallest element:', extracted[0]);
// Output: Smallest element: 5
console.log('Largest element:', extracted[extracted.length - 1]);
// Output: Largest element: 99`
    },
    {
      type: 'heading',
      id: 'curriculum-synthesis-bridge',
      text: {
        en: 'The Road Ahead: Transitioning to Trees and Graphs',
        bn: 'পরবর্তী ধাপ: ট্রি এবং গ্রাফ অ্যালগরিদমের সেতুবন্ধন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Heaps master the art of partial order: finding extreme values in deterministic O(1) time without paying the cost of total ordering. When an application demands range queries (find all numbers between 10 and 50) or predecessor lookups, the architecture must transition to Balanced Binary Search Trees (AVL or Red-Black trees). When priorities represent edge weights between interconnected entities, heaps provide the algorithmic engine powering Dijkstra, A* search, and Prim’s Minimum Spanning Tree.',
        bn: 'হিপ হলো আংশিক ক্রমের সেরা রূপ: পূর্ণ সাজানোর বাড়তি খরচ না দিয়ে সুনির্দিষ্ট O(1) সময়ে চরম মানগুলো বের করা। যখন কোনো অ্যাপ্লিকেশনে রেঞ্জ কোয়েরি (১০ থেকে ৫০ এর মধ্যকার সব মান খোঁজা) বা পূর্বসূরি খোঁজার প্রয়োজন হয়, তখন ব্যালান্সড বাইনারি সার্চ ট্রিতে (AVL বা রেড-ব্ল্যাক ট্রি) যেতে হয়। আর প্রায়োরিটি যখন নোডের মধ্যকার সংযোগ বা দূরত্ব নির্দেশ করে, তখন হিপ ডাইকস্ট্রা, এ-স্টার এবং প্রিমের অ্যালগরিদমে রূপ নেয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Branching factor trade-offs: D-ary heaps cut tree height down significantly, accelerating sift-up at the cost of wider sift-down comparisons.',
          bn: 'ব্রাঞ্চিং ফ্যাক্টরের ভারসাম্য: ডি-অ্যারি হিপ ট্রির উচ্চতা উল্লেখযোগ্যভাবে কমিয়ে শিফট-আপকে দ্রুত করে, তবে শিফট-ডাউনে অতিরিক্ত তুলনার প্রয়োজন হয়।'
        },
        {
          en: 'Hardware cache alignment: Storing d sibling nodes contiguously ensures all children load into memory in a single 64-byte CPU cache line.',
          bn: 'হার্ডওয়্যার ক্যাশ সুবিধা: d সংখ্যক চাইল্ড নোড পাশাপাশি রাখায় সিপিইউর একটিমাত্র ৬৪-বাইট ক্যাশ লাইনে সবাই একসাথে লোড হয়।'
        },
        {
          en: 'Theory vs production: Fibonacci heaps offer theoretical O(1) decrease-key, but pointer bloat makes 4-ary heaps faster in real runtimes.',
          bn: 'তত্ত্ব বনাম বাস্তবতা: ফিবোনাচ্চি হিপ তাত্ত্বিকভাবে O(1) দিলেও অতিরিক্ত পয়েন্টারের কারণে বাস্তবে ৪-অ্যারি হিপ দ্রুত চলে।'
        },
        {
          en: 'Partial order specialization: Heaps excel at extreme value retrieval; range searches and full ordering transition to balanced search trees.',
          bn: 'আংশিক ক্রমের বিশেষত্ব: চরম মান দ্রুত পেতে হিপ সেরা; তবে রেঞ্জ সার্চ বা পূর্ণ ক্রমের প্রয়োজনে ব্যালান্সড ট্রিতে যেতে হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'pb-ex1',
      kind: 'mcq',
      topic: 'dary-heap-height-reduction',
      question: {
        en: 'In a 4-ary heap (d = 4) containing n elements, what is the height of the tree compared to a standard binary heap (d = 2)?',
        bn: 'n উপাদান বিশিষ্ট একটি ৪-অ্যারি হিপে (d = ৪) ট্রির উচ্চতা একটি সাধারণ বাইনারি হিপের (d = ২) তুলনায় কতটুকু হয়?'
      },
      options: [
        {
          en: 'Exactly half the height (log4(n) = (log2(n)) / 2), cutting sift-up steps by 50 percent',
          bn: 'ঠিক অর্ধেক উচ্চতা (log4(n) = (log2(n)) / ২), যা শিফট-আপের ধাপ ৫০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'Double the height',
          bn: 'উচ্চতা দ্বিগুণ হয়'
        },
        {
          en: 'Four times the height',
          bn: 'উচ্চতা চার গুণ হয়'
        },
        {
          en: 'The height remains completely identical',
          bn: 'উচ্চতা পুরোপুরি একই থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'log4(n) = log2(n) / log2(4) = log2(n) / 2.',
        bn: 'log4(n) = log2(n) / log2(৪) = log2(n) / ২।'
      },
      explanation: {
        en: 'Increasing branching factor from 2 to 4 halves the tree depth, allowing sift-up to reach the root in half as many iterations.',
        bn: 'ব্রাঞ্চিং ফ্যাক্টর ২ থেকে ৪ এ উন্নীত করলে ট্রির গভীরতা অর্ধেক হয়ে যায়, ফলে শিফট-আপ অর্ধেক ধাপেই রুটে পৌঁছাতে পারে।'
      }
    },
    {
      id: 'pb-ex2',
      kind: 'mcq',
      topic: 'cache-line-packing-advantage',
      question: {
        en: 'Why do 4-ary heaps demonstrate superior CPU hardware cache locality compared to pointer-based trees?',
        bn: 'পয়েন্টার-ভিত্তিক ট্রির তুলনায় কেন ৪-অ্যারি হিপ সিপিইউ হার্ডওয়্যার ক্যাশ মেমোরিতে উন্নত কর্মক্ষমতা প্রদর্শন করে?'
      },
      options: [
        {
          en: 'All 4 children of any node are stored in contiguous array slots, fitting within a single 64-byte hardware cache line fetch',
          bn: 'যেকোনো নোডের ৪টি সন্তানই সংলগ্ন অ্যারে ঘরে সংরক্ষিত থাকে, যা সিপিইউর একটিমাত্র ৬৪-বাইট ক্যাশ লাইনে একবারে লোড হয়'
        },
        {
          en: 'Because 4-ary heaps bypass CPU cache memory and execute directly in the hard drive buffer',
          bn: 'কারণ ৪-অ্যারি হিপ ক্যাশ মেমোরি এড়িয়ে সরাসরি হার্ড ড্রাইভ বাফারে কাজ করে'
        },
        {
          en: 'Because 4-ary heaps convert integers into ASCII strings',
          bn: 'কারণ ৪-অ্যারি হিপ সংখ্যাগুলোকে অ্যাসকি স্ট্রিংয়ে রূপান্তর করে'
        },
        {
          en: 'Because JavaScript enforces 4-byte boundaries on array indices',
          bn: 'কারণ জাভাস্ক্রিপ্ট অ্যারে ইনডেক্সে ৪-বাইট সীমা প্রয়োগ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'When the CPU fetches memory address X, it loads the surrounding 64 bytes into L1 cache.',
        bn: 'সিপিইউ যখন মেমোরি ঠিকানা X থেকে ডেটা আনে, তখন চারপাশের ৬৪ বাইট একসাথে এল১ ক্যাশে লোড হয়।'
      },
      explanation: {
        en: 'Contiguous array storage allows modern processors to fetch all children of a node in a single memory access cycle without cache misses.',
        bn: 'অবিচ্ছিন্ন মেমোরিতে থাকার কারণে প্রসেসর কোনো ক্যাশ মিস ছাড়াই একটিমাত্র মেমোরি সাইকেলে নোডের সব সন্তানকে লোড করতে পারে।'
      }
    },
    {
      id: 'pb-ex3',
      kind: 'mcq',
      topic: 'fibonacci-heap-practical-drawback',
      question: {
        en: 'Despite achieving theoretical O(1) amortized decrease-key complexity, why are Fibonacci heaps rarely used in production runtimes?',
        bn: 'তাত্ত্বিকভাবে O(1) অ্যামর্টাইজড ডিক্রিজ-কি সুবিধা দেওয়া সত্ত্বেও কেন উৎপাদনমুখী সিস্টেমে ফিবোনাচ্চি হিপ খুব কম ব্যবহৃত হয়?'
      },
      options: [
        {
          en: 'Heavy pointer overhead (4 pointers per node: parent, child, left sibling, right sibling) creates high constant factors and frequent cache misses',
          bn: 'ভারী পয়েন্টার ওভারহেড (প্রতি নোডে ৪টি পয়েন্টার: প্যারেন্ট, চাইল্ড, বাঁ সহোদর, ডান সহোদর) উচ্চ ধ্রুবক গুণক এবং ঘন ঘন ক্যাশ মিস তৈরি করে'
        },
        {
          en: 'Fibonacci heaps cannot be compiled on 64-bit operating systems',
          bn: 'ফিবোনাচ্চি হিপ ৬৪-বিট অপারেটিং সিস্টেমে কম্পাইল করা যায় না'
        },
        {
          en: 'Fibonacci heaps only work on prime numbers',
          bn: 'ফিবোনাচ্চি হিপ কেবল মৌলিক সংখ্যায় কাজ করে'
        },
        {
          en: 'They cause infinite CPU recursion loops on arrays larger than 10 elements',
          bn: '১০টির বেশি উপাদানের ক্ষেত্রে তারা অসীম সিপিইউ রিকার্শন ঘটায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider the memory and pointer-chasing overhead of 4 pointers per node.',
        bn: 'নোড প্রতি ৪টি পয়েন্টার খোঁজার মেমোরি এবং ক্যাশ মিসের কথা বিবেচনা করুন।'
      },
      explanation: {
        en: 'Each node requires 32 to 48 bytes of pointer metadata, destroying cache locality. D-ary array heaps consistently beat Fibonacci heaps on actual hardware.',
        bn: 'প্রতিটি নোডে ৩২ থেকে ৪৮ বাইট পয়েন্টার তথ্য লাগে যা ক্যাশ লোকালিটি নষ্ট করে। ফলে বাস্তব হার্ডওয়্যারে ডি-অ্যারি হিপ সর্বদা দ্রুত চলে।'
      }
    }
  ],
  quiz: {
    id: 'the-pilgrimage-bench-quiz',
    title: {
      en: 'Heap Architecture and Systems Synthesis Quiz',
      bn: 'হিপ আর্কিটেকচার এবং সিস্টেমস সংশ্লেষ কুইজ'
    },
    questions: [
      {
        id: 'pb-q1',
        kind: 'mcq',
        topic: 'dary-parent-formula',
        question: {
          en: 'In a 0-indexed d-ary heap, what is the formula to compute the parent index of a node at index i?',
          bn: 'একটি ০-ইনডেক্সযুক্ত d-অ্যারি হিপে ইনডেক্স i তে থাকা নোডের প্যারেন্ট ইনডেক্স বের করার সূত্র কোনটি?'
        },
        options: [
          {
            en: 'Math.floor((i - 1) / d)',
            bn: 'Math.floor((i - ১) / d)'
          },
          {
            en: 'd * i + 1',
            bn: 'd * i + ১'
          },
          {
            en: 'Math.floor(i / d)',
            bn: 'Math.floor(i / d)'
          },
          {
            en: 'i - d',
            bn: 'i - d'
          }
        ],
        answer: 0,
        hint: {
          en: 'For a binary heap (d = 2), the formula was Math.floor((i - 1) / 2).',
          bn: 'বাইনারি হিপের জন্য (d = ২) সূত্রটি ছিল Math.floor((i - ১) / ২)।'
        },
        explanation: {
          en: 'Generalizing from d = 2 to arbitrary d, the parent of index i is given by Math.floor((i - 1) / d).',
          bn: 'd = ২ থেকে যেকোনো d এর জন্য সাধারণীকরণ করলে প্যারেন্ট ইনডেক্স হয় Math.floor((i - ১) / d)।'
        }
      },
      {
        id: 'pb-q2',
        kind: 'mcq',
        topic: 'when-to-transition-to-bst',
        question: {
          en: 'Under which application requirement must an engineering architecture transition from a Heap to a Balanced Binary Search Tree?',
          bn: 'কোন কার্যকরী চাহিদার ক্ষেত্রে একটি সফটওয়্যার আর্কিটেকচারকে হিপ থেকে ব্যালান্সড বাইনারি সার্চ ট্রিতে পরিবর্তন করতে হয়?'
        },
        options: [
          {
            en: 'When the system requires range queries (e.g. elements between X and Y), predecessor lookups, or full in-order traversals',
            bn: 'যখন সিস্টেমে রেঞ্জ কোয়েরি (যেমন X এবং Y এর মধ্যকার উপাদান), পূর্বসূরি খোঁজা বা পূর্ণ ক্রমানুসারে ট্রাভার্সালের প্রয়োজন হয়'
          },
          {
            en: 'When the system needs to peek at the minimum element in O(1) time',
            bn: 'যখন সিস্টেমে O(1) সময়ে সর্বনিম্ন মানটি দেখার প্রয়োজন হয়'
          },
          {
            en: 'When memory must be strictly bounded to O(1) auxiliary space',
            bn: 'যখন মেমোরি কঠোরভাবে O(1) অতিরিক্ত স্থানে সীমাবদ্ধ রাখতে হয়'
          },
          {
            en: 'When elements are floating-point numbers',
            bn: 'যখন উপাদানগুলো দশমিক সংখ্যা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Can a heap efficiently answer queries for all numbers between 20 and 50 without scanning every node?',
          bn: 'প্রতিটি নোড স্ক্যান না করে হিপ কি ২০ থেকে ৫০ এর মধ্যকার সব মান খোঁজার উত্তর দিতে পারে?'
        },
        explanation: {
          en: 'Heaps only maintain partial order and cannot support efficient range searches. Balanced BSTs enforce total order, answering range queries in O(log n + k).',
          bn: 'হিপ কেবল আংশিক ক্রম রক্ষা করায় এতে রেঞ্জ সার্চ করা যায় না। ব্যালান্সড বিএসটি পূর্ণ ক্রম মেনে চলায় O(log n + k) সময়ে রেঞ্জ কোয়েরি করতে পারে।'
        }
      },
      {
        id: 'pb-q3',
        kind: 'mcq',
        topic: 'hashed-timer-wheel-advantage',
        question: {
          en: 'Why do high-performance networking frameworks like Netty and the Linux kernel use Hashed Timing Wheels instead of min-heaps for connection timeouts?',
          bn: 'নেটি এবং লিনাক্স কার্নেলের মতো উচ্চ-গতির নেটওয়ার্কিং ফ্রেমওয়ার্ক কেন সংযোগের টাইমআউটের জন্য মিন-হিপের বদলে হ্যাশড টাইমিং হুইল ব্যবহার করে?'
        },
        options: [
          {
            en: 'Timing wheels achieve deterministic O(1) insertion and O(1) cancellation using circular slot arrays, avoiding logarithmic heap sifting overhead',
            bn: 'টাইমিং হুইল বৃত্তাকার স্লট অ্যারে ব্যবহার করে O(1) সময়ে সন্নিবেশ ও বাতিল সম্পন্ন করে, যা হিপের লগারিদমিক বিলম্ব দূর করে'
          },
          {
            en: 'Because timing wheels consume zero RAM memory',
            bn: 'কারণ টাইমিং হুইল শূন্য র্যাম মেমোরি খরচ করে'
          },
          {
            en: 'Because timing wheels encrypt network packets with TLS 1.3',
            bn: 'কারণ টাইমিং হুইল টিএলএস ১.৩ দিয়ে নেটওয়ার্ক প্যাকেট এনক্রিপ্ট করে'
          },
          {
            en: 'Because min-heaps crash when timestamps are represented as 64-bit integers',
            bn: 'কারণ টাইমস্ট্যাম্প ৬৪-বিট পূর্ণসংখ্যা হলে মিন-হিপ ক্র্যাশ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'When millions of TCP connections open and close every second, even O(log n) heap sifting becomes a CPU bottleneck.',
          bn: 'প্রতি সেকেন্ডে লক্ষ লক্ষ টিসিপি সংযোগ চালু ও বন্ধ হলে O(log n) হিপ অপারেশনও সিপিইউতে চাপ ফেলে।'
        },
        explanation: {
          en: 'A timing wheel organizes timers into circular buckets indexed by current time modulo wheel size, achieving O(1) insert and tick processing.',
          bn: 'টাইমিং হুইল সময়কে চক্রাকার বাকেটে বিন্যস্ত করে, ফলে ধ্রুবক O(1) সময়ে টাইমার যোগ ও নিষ্পত্তি করা যায়।'
        }
      },
      {
        id: 'pb-q4',
        kind: 'mcq',
        topic: 'dary-heap-workload-sweet-spot',
        question: {
          en: 'For which type of workload is a 4-ary heap (d = 4) mathematically and empirically superior to a binary heap (d = 2)?',
          bn: 'কোন ধরনের কাজের ক্ষেত্রে একটি ৪-অ্যারি হিপ (d = ৪) গাণিতিক ও বাস্তব উভয় দিক থেকেই বাইনারি হিপের (d = ২) চেয়ে স্পষ্ট ব্যবধানে এগিয়ে থাকে?'
        },
        options: [
          {
            en: 'Workloads where insertions and decreaseKey operations heavily outnumber root extractions, such as in Dijkstra shortest path algorithms on dense graphs',
            bn: 'যেসব কাজে নিষ্কাশনের চেয়ে সন্নিবেশ এবং ডিক্রিজ-কি অপারেশন অনেক বেশি থাকে, যেমন ঘন গ্রাফে ডাইকস্ট্রার ক্ষুদ্রতম পথ অনুসন্ধান'
          },
          {
            en: 'Workloads that only perform dequeue operations and 0 inserts',
            bn: 'যেসব কাজে কেবল ডিকিউ হয় এবং ০টি সন্নিবেশ ঘটে'
          },
          {
            en: 'Sorting arrays that are already in reverse order',
            bn: 'আগে থেকেই বিপরীত ক্রমে সাজানো অ্যারে বাছাই করার কাজে'
          },
          {
            en: 'Converting JSON objects into XML files',
            bn: 'জেএসএন অবজেক্টকে এক্সএমএল ফাইলে রূপান্তর করার কাজে'
          }
        ],
        answer: 0,
        hint: {
          en: 'In a 4-ary heap, sift-up does 1 comparison per level (half height), while sift-down does 4 comparisons per level.',
          bn: '৪-অ্যারি হিপে শিফট-আপ স্তর প্রতি ১টি তুলনা করে (অর্ধেক উচ্চতা), কিন্তু শিফট-ডাউনে স্তর প্রতি ৪টি তুলনা লাগে।'
        },
        explanation: {
          en: 'Because sift-up height is halved while requiring only 1 comparison per step, workloads dominated by push and decreaseKey gain a major speedup.',
          bn: 'শিফট-আপে ধাপ প্রতি মাত্র ১টি তুলনা লাগায় এবং উচ্চতা অর্ধেক হওয়ায় পুশ ও ডিক্রিজ-কি প্রধান অ্যাপ্লিকেশনগুলো উল্লেখযোগ্য গতি পায়।'
        }
      }
    ]
  }
};
