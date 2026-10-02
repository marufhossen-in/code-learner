import type { Lesson } from '../../../lib/types';

export const priorityMachinesLesson: Lesson = {
  slug: 'priority-machines',
  tech: 'heaps',
  title: {
    en: 'Priority Machines — Sift-Up, Sift-Down, and Priority Queues',
    bn: 'প্রায়োরিটি মেশিন: শিফট-আপ, শিফট-ডাউন এবং প্রায়োরিটি কিউ'
  },
  summary: {
    en: 'A static heap array is only useful if we can insert new elements and extract the root while preserving the heap property. When inserting at the bottom, Sift-Up climbs to the top in O(log n) time to restore order. Conversely, root extraction pulls the final leaf to the apex and triggers Sift-Down through the strongest child in O(log n) time. We build an executable Min-Priority Queue with deterministic FIFO arrival tie-breaking for equal priority tasks.',
    bn: 'একটি স্থির হিপ অ্যারে তখনই কার্যকর হয় যখন হিপ প্রোপার্টি বজায় রেখে এতে নতুন উপাদান ঢোকানো এবং রুট নোডটি বের করা যায়। নিচে উপাদান যোগ করলে শিফট-আপ O(log n) সময়ে উপরে উঠে ভারসাম্য রক্ষা করে। অন্যদিকে রুট সরিয়ে শেষ উপাদান শীর্ষে আনলে শিফট-ডাউন সবচেয়ে শক্তিশালী সন্তানের মধ্য দিয়ে নিচে নেমে একই লগারিদমিক সময়ে ট্রি মেরামত করে। আমরা সমান অগ্রাধিকারে আগমনের ক্রম রক্ষার টাই-ব্রেকিংসহ একটি সম্পূর্ণ মিন-প্রায়োরিটি কিউ তৈরি করি।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'the-complete-citadel',
    tech: 'heaps',
    title: {
      en: 'Building Heaps in Linear O(n) Time — The Heapify Invariant',
      bn: 'রৈখিক O(n) সময়ে হিপ নির্মাণ: হিপিফাই ইনভেরিয়েন্ট'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'heap-repairs-paradigm',
      text: {
        en: 'The Two Heap Repairs: Sift-Up and Sift-Down',
        bn: 'হিপের দুটি প্রধান মেরামত: শিফট-আপ এবং শিফট-ডাউন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you manage active workloads like operating system thread scheduling or network packet routing, tasks constantly arrive and finish. To make binary heaps dynamic, the data structure provides two essential repair routines: Sift-Up for insertions and Sift-Down for root extractions.',
        bn: 'যখন আপনি অপারেটিং সিস্টেমের থ্রেড শিডিউলিং বা নেটওয়ার্ক প্যাকেট রাউটিংয়ের মতো কাজ পরিচালনা করেন, তখন অনবরত নতুন কাজ আসে এবং সমাপ্ত কাজ বের হয়ে যায়। বাইনারি হিপকে গতিশীল করতে এটি দুটি মৌলিক মেরামতের কৌশল প্রদান করে: নতুন উপাদান সন্নিবেশের জন্য শিফট-আপ এবং রুট নোড অপসারণের জন্য শিফট-ডাউন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a new item is added, it is appended at the first available slot at the end of the array to preserve the complete tree shape. Sift-Up then compares this newcomer with its parent. If the child violates the heap property, it swaps places with its parent and continues climbing upward until the relationship is satisfied.',
        bn: 'যখন কোনো নতুন উপাদান আসে, তখন ট্রির সম্পূর্ণতা বজায় রাখতে একে অ্যারের শেষের প্রথম ফাঁকা স্থানে যোগ করা হয়। এরপর শিফট-আপ নতুন উপাদানটিকে তার প্যারেন্টের সাথে তুলনা করে। যদি এটি হিপের নিয়ম ভঙ্গ করে, তবে প্যারেন্টের সাথে স্থান পরিবর্তন করে উপরে উঠতে থাকে যতক্ষণ না সঠিক অবস্থানে পৌঁছায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'sift-up',
          def: {
            en: 'Restoring the heap invariant after insertion by repeatedly swapping a misplaced child with its parent until the heap property is satisfied.',
            bn: 'নিচে নতুন উপাদান যোগ করার পর হিপের ভারসাম্য বজায় রাখতে প্যারেন্টের সাথে অদলবদল করে উপরে ওঠা।'
          }
        },
        {
          term: 'sift-down',
          def: {
            en: 'Restoring the heap invariant after root removal by moving the replacement node downward, repeatedly swapping with its strongest child.',
            bn: 'রুট নোড অপসারণের পর উপরে আনা নোডটিকে নিচে নামিয়ে তার সবচেয়ে শক্তিশালী চাইল্ড নোডের সাথে অদলবদল করা।'
          }
        },
        {
          term: 'strongest-child-rule',
          def: {
            en: 'The requirement that sift-down must always swap with the largest child in a max-heap or the smallest in a min-heap to prevent branch violations.',
            bn: 'শিফট-ডাউনে সবসময় ম্যাক্স-হিপে সবচেয়ে বড় এবং মিন-হিপে সবচেয়ে ছোট সন্তানের সাথে অদলবদল করার নীতি।'
          }
        },
        {
          term: 'lexicographical-tie-break',
          def: {
            en: 'Pairing each task urgency score with an arrival sequence counter (priority, seq) to ensure fair FIFO execution for identical priorities.',
            bn: 'সমান অগ্রাধিকারে আগমনের ক্রম রক্ষা করতে অগ্রাধিকারের সাথে একটি সিকোয়েন্স কাউন্টার যুক্ত করা।'
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
      id: 'sift-mechanics-table',
      text: {
        en: 'Step-by-Step Comparison: Insertion vs Root Extraction',
        bn: 'ধাপভিত্তিক তুলনা: উপাদান সন্নিবেশ বনাম রুট অপসারণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When extracting the root, we cannot simply delete index 0 because that leaves a hole at the top of the tree. Instead, the last element of the array is moved to index 0, and Sift-Down is invoked. Crucially, Sift-Down must always swap with the strongest child (the smaller child in a min-heap) to ensure the new parent satisfies the heap property for both subtrees.',
        bn: 'রুট নোড অপসারণের সময় আমরা সরাসরি ০ নম্বর ইনডেক্স মুছে ফেলতে পারি না কারণ এতে ট্রির শীর্ষে একটি গর্ত তৈরি হয়। এর বদলে অ্যারের শেষ উপাদানটিকে ০ নম্বর ঘরে নিয়ে আসা হয় এবং শিফট-ডাউন চালানো হয়। অত্যন্ত গুরুত্বপূর্ণ বিষয় হলো, শিফট-ডাউনে সর্বদা সবচেয়ে শক্তিশালী সন্তানের (মিন-হিপে ছোট সন্তান) সাথে অদলবদল করতে হয় যাতে উভয় সাব-ট্রির হিপ বৈশিষ্ট্য রক্ষা পায়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Heap Operation', bn: 'হিপ অপারেশন' },
        { en: 'Initial Placement', bn: 'প্রাথমিক স্থান' },
        { en: 'Repair Routine', bn: 'মেরামতের দিক' },
        { en: 'Time Complexity', bn: 'সময় জটিলতা' }
      ],
      rows: [
        [
          { en: 'Insertion (enqueue)', bn: 'উপাদান যোগ (এনকিউ)' },
          { en: 'Append at array index n', bn: 'অ্যারের শেষ ইনডেক্স n এ যোগ' },
          { en: 'Sift-up towards the root', bn: 'রুটের দিকে শিফট-আপ' },
          { en: 'O(log n) maximum swaps', bn: 'সর্বোচ্চ O(log n) অদলবদল' }
        ],
        [
          { en: 'Extraction (dequeue)', bn: 'রুট অপসারণ (ডিকিউ)' },
          { en: 'Move last leaf to index 0', bn: 'শেষ পাতাকে ০ নম্বর ইনডেক্সে স্থানান্তর' },
          { en: 'Sift-down through strongest child', bn: 'শক্তিশালী সন্তানের মধ্য দিয়ে শিফট-ডাউন' },
          { en: 'O(log n) maximum swaps', bn: 'সর্বোচ্চ O(log n) অদলবদল' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'priority-queue-impl',
      text: {
        en: 'Executable Min-Priority Queue Implementation',
        bn: 'মিন-প্রায়োরিটি কিউয়ের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements a production-grade Min-Priority Queue. Notice how Emergency Alert 1 and Emergency Alert 2 share identical priority 10. The arrival sequence counter breaks ties deterministically in fair FIFO order.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি প্রোডাকশন-গ্রেড মিন-প্রায়োরিটি কিউ বাস্তবায়ন করে। লক্ষ্য করুন কীভাবে ইমার্জেন্সি অ্যালার্ট ১ এবং ইমার্জেন্সি অ্যালার্ট ২ উভয়ের অগ্রাধিকার ১০ হওয়া সত্ত্বেও সিকোয়েন্স কাউন্টারের মাধ্যমে অ্যালার্ট ১ আগে সেবা পায়।'
      }
    },
    {
      type: 'code',
      code: `class MinPriorityQueue {
  constructor() {
    this.heap = [];
    this.seqCounter = 0;
  }

  // Smaller priority first; ties broken by earlier arrival seq
  _isHigher(a, b) {
    if (a.priority !== b.priority) {
      return a.priority < b.priority;
    }
    return a.seq < b.seq;
  }

  enqueue(val, priority) {
    const node = { val, priority, seq: ++this.seqCounter };
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
}

const pq = new MinPriorityQueue();
pq.enqueue('System Heartbeat', 100);
pq.enqueue('Emergency Alert 1', 10);
pq.enqueue('User Request', 50);
pq.enqueue('Emergency Alert 2', 10);

console.log('Peek root:', pq.peek().val);
// Output: Peek root: Emergency Alert 1

const s1 = pq.dequeue();
console.log(\`Served 1: \${s1.val} (priority: \${s1.priority})\`);
// Output: Served 1: Emergency Alert 1 (priority: 10)

const s2 = pq.dequeue();
console.log(\`Served 2: \${s2.val} (priority: \${s2.priority})\`);
// Output: Served 2: Emergency Alert 2 (priority: 10)

const s3 = pq.dequeue();
console.log(\`Served 3: \${s3.val} (priority: \${s3.priority})\`);
// Output: Served 3: User Request (priority: 50)

const s4 = pq.dequeue();
console.log(\`Served 4: \${s4.val} (priority: \${s4.priority})\`);
// Output: Served 4: System Heartbeat (priority: 100)

console.log('Remaining size:', pq.size());
// Output: Remaining size: 0`
    },
    {
      type: 'heading',
      id: 'production-schedulers',
      text: {
        en: 'Production Applications: OS Task Schedulers and Event Loops',
        bn: 'বাস্তব প্রয়োগ: অপারেটিং সিস্টেম টাস্ক শিডিউলার এবং ইভেন্ট লুপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Min-heaps are the backbone of event-driven asynchronous runtimes. In Node.js, the underlying libuv C library manages setTimeout and setInterval deadlines using a min-heap indexed by timestamp. When the event loop ticks, it inspects index 0 in O(1) time to determine whether the earliest timer has expired without scanning millions of registered timers.',
        bn: 'মিন-হিপ ইভেন্ট-চালিত অ্যাসিনক্রোনাস রানটাইমের মূল ভিত্তি হিসেবে কাজ করে। নোড জেএসের অভ্যন্তরীণ libuv লাইব্রেরি টাইমস্ট্যাম্পযুক্ত একটি মিন-হিপের মাধ্যমে setTimeout এবং setInterval এর সময়সীমা পরিচালনা করে। ইভেন্ট লুপের প্রতিটি টিকে এটি লক্ষ লক্ষ টাইমার স্ক্যান না করে মাত্র O(1) সময়ে ০ নম্বর ইনডেক্স দেখে বুঝতে পারে যে নিকটতম টাইমারের সময় হয়েছে কি না।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Balanced logarithmic cost: Both sift-up and sift-down traverse at most the height of the complete tree, taking O(log n) time.',
          bn: 'ভারসাম্যপূর্ণ লগারিদমিক খরচ: শিফট-আপ এবং শিফট-ডাউন উভয়ই সর্বোচ্চ ট্রির উচ্চতা সমান পথ অতিক্রম করে O(log n) সময় নেয়।'
        },
        {
          en: 'Strongest child descent: Sift-down must swap with the extreme child to ensure the new parent satisfies the heap property for both branches.',
          bn: 'শক্তিশালী সন্তানে নামা: উভয় শাখার নিয়ম রক্ষা করতে শিফট-ডাউনে সর্বদা সবচেয়ে উপযুক্ত সন্তানের সাথে স্থান পরিবর্তন করতে হবে।'
        },
        {
          en: 'Arrival tie-breaking: Combining priority scores with incremental sequence numbers preserves FIFO fairness among equal-priority jobs.',
          bn: 'আগমনের সমতা রক্ষা: প্রায়োরিটি স্কোরের সাথে সিকোয়েন্স কাউন্টার যুক্ত করলে সমান অগ্রাধিকারের কাজগুলো সঠিক ফিফো ক্রমে বের হয়।'
        },
        {
          en: 'Event loop timers: Systems like libuv use min-heaps to track the next expiring timer deadline in deterministic O(1) lookup time.',
          bn: 'ইভেন্ট লুপ টাইমার: libuv এর মতো সিস্টেমগুলো মিন-হিপ ব্যবহার করে ধ্রুবক O(1) সময়ে পরবর্তী টাইমারের সময়সীমা পরীক্ষা করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'pm-ex1',
      kind: 'mcq',
      topic: 'strongest-child-invariant',
      question: {
        en: 'During sift-down in a Min-Heap, why must the parent swap with the smaller of its two children?',
        bn: 'মিন-হিপে শিফট-ডাউনের সময় কেন প্যারেন্টকে তার দুটি সন্তানের মধ্যে যেটি ছোট তার সাথে অদলবদল করতে হয়?'
      },
      options: [
        {
          en: 'If it swapped with the larger child, that child would become the parent of the smaller child, immediately violating the min-heap property',
          bn: 'যদি বড় সন্তানের সাথে অদলবদল করা হতো, তবে সেই সন্তানটি ছোট সন্তানের প্যারেন্ট হয়ে যেত যা মিন-হিপের নিয়ম সরাসরি লঙ্ঘন করত'
        },
        {
          en: 'Because larger numbers consume more electrical watts in RAM memory',
          bn: 'কারণ বড় সংখ্যা র্যাম মেমোরিতে বেশি বিদ্যুৎ ব্যবহার করে'
        },
        {
          en: 'Because JavaScript arrays automatically delete smaller numbers',
          bn: 'কারণ জাভাস্ক্রিপ্ট অ্যারে স্বয়ংক্রিয়ভাবে ছোট সংখ্যা মুছে ফেলে'
        },
        {
          en: 'Swapping with the smaller child takes 0 clock cycles on modern CPUs',
          bn: 'আধুনিক সিপিইউতে ছোট সন্তানের সাথে অদলবদল করতে ০ ক্লক সাইকেল লাগে'
        }
      ],
      answer: 0,
      hint: {
        en: 'In a min-heap, every parent must be smaller than BOTH of its children.',
        bn: 'মিন-হিপে প্রতিটি প্যারেন্টকে তার উভয় সন্তানের চেয়ে ছোট হতে হবে।'
      },
      explanation: {
        en: 'Placing the smaller child at the root ensures it is smaller than both the old parent and the other sibling, preserving the min-heap invariant.',
        bn: 'ছোট সন্তানকে রুটে বসালে নিশ্চিত হয় যে এটি আগের প্যারেন্ট এবং অন্য সহোদর উভয়ের চেয়েই ছোট থাকবে।'
      }
    },
    {
      id: 'pm-ex2',
      kind: 'mcq',
      topic: 'sift-up-time-complexity',
      question: {
        en: 'What is the maximum number of element swaps performed during a sift-up insertion into a binary heap of size n?',
        bn: 'n আকারের একটি বাইনারি হিপে শিফট-আপ সন্নিবেশের সময় সর্বোচ্চ কতটি উপাদান অদলবদল হতে পারে?'
      },
      options: [
        {
          en: 'At most Math.floor(log2(n)) swaps, corresponding to the height of the complete tree',
          bn: 'সর্বোচ্চ Math.floor(log2(n)) টি অদলবদল, যা সম্পূর্ণ ট্রির উচ্চতার সমান'
        },
        {
          en: 'Exactly n swaps in every case',
          bn: 'প্রতিটি ক্ষেত্রে ঠিক n টি অদলবদল'
        },
        {
          en: 'O(n^2) swaps',
          bn: 'O(n^2) টি অদলবদল'
        },
        {
          en: 'Strictly 0 swaps always',
          bn: 'সর্বদা কঠোরভাবে ০টি অদলবদল'
        }
      ],
      answer: 0,
      hint: {
        en: 'A node climbs straight up along a single parent path from the leaf to the root.',
        bn: 'একটি নোড পাতা থেকে রুট পর্যন্ত শুধুমাত্র একটিমাত্র প্যারেন্ট পথ ধরে সোজা উপরে ওঠে।'
      },
      explanation: {
        en: 'Sift-up ascends a single path without branching. Since the height of a complete binary tree is floor(log2 n), it takes at most O(log n) swaps.',
        bn: 'শিফট-আপ কোনো শাখা তৈরি না করে একটি পথ ধরে ওঠে। সম্পূর্ণ ট্রির উচ্চতা floor(log2 n) হওয়ায় এতে সর্বোচ্চ O(log n) অদলবদল লাগে।'
      }
    },
    {
      id: 'pm-ex3',
      kind: 'mcq',
      topic: 'tie-breaking-sequence-purpose',
      question: {
        en: 'Why do production priority queues include an arrival sequence number (seq) when enqueuing tasks?',
        bn: 'কাজের সময় উৎপাদনমুখী প্রায়োরিটি কিউগুলো কেন একটি আগমন সিকোয়েন্স নম্বর (seq) যুক্ত করে?'
      },
      options: [
        {
          en: 'To break ties deterministically, guaranteeing that tasks with equal priority are dispatched in fair FIFO arrival order',
          bn: 'সমান অগ্রাধিকারের কাজগুলোর মাঝে টাই ভেঙে নিশ্চিতভাবে আগমনের ফিফো ক্রম বজায় রাখতে'
        },
        {
          en: 'To compress task descriptions into 16-bit integers',
          bn: 'কাজের বিবরণকে ১৬-বিট পূর্ণসংখ্যায় সংকুচিত করতে'
        },
        {
          en: 'To ensure tasks are encrypted with AES-256 before processing',
          bn: 'প্রসেসিংয়ের আগে কাজগুলো এইএস-২৫৬ দিয়ে এনক্রিপ্ট নিশ্চিত করতে'
        },
        {
          en: 'Because heaps crash if priority values are prime numbers',
          bn: 'কারণ প্রায়োরিটির মান মৌলিক সংখ্যা হলে হিপ ক্র্যাশ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If task A and task B both have priority 10, which one should be served first?',
        bn: 'কাজ A এবং কাজ B উভয়ের প্রায়োরিটি ১০ হলে কোনটি আগে সেবা পাবে?'
      },
      explanation: {
        en: 'Heaps do not preserve FIFO order among siblings naturally. The arrival counter provides a secondary sorting criterion to ensure fairness.',
        bn: 'হিপ প্রাকৃতিকভাবে সহোদরদের মধ্যে ফিফো ক্রম রক্ষা করে না। সিকোয়েন্স কাউন্টার দ্বিতীয় শর্ত হিসেবে কাজ করে ন্যায্যতা নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'priority-machines-quiz',
    title: {
      en: 'Priority Queues and Heap Operations Quiz',
      bn: 'প্রায়োরিটি কিউ এবং হিপ অপারেশন কুইজ'
    },
    questions: [
      {
        id: 'pm-q1',
        kind: 'mcq',
        topic: 'root-removal-replacement',
        question: {
          en: 'When the root element is removed from a heap during dequeue, which element fills the root void before sifting down?',
          bn: 'ডিকিউ করার সময় হিপ থেকে রুট উপাদান সরিয়ে নিলে শিফট-ডাউন শুরু করার আগে কোন উপাদানটি রুটের খালি জায়গা পূরণ করে?'
        },
        options: [
          {
            en: 'The very last element of the heap array (at index n - 1)',
            bn: 'হিপ অ্যারের একদম শেষ উপাদানটি (ইনডেক্স n - ১ এ থাকা উপাদান)'
          },
          {
            en: 'The left child of the root',
            bn: 'রুটের বাম চাইল্ড'
          },
          {
            en: 'A newly allocated 0 value',
            bn: 'নতুন বরাদ্দকৃত ০ মান'
          },
          {
            en: 'The element with the largest index that is a prime number',
            bn: 'সবচেয়ে বড় মৌলিক সংখ্যার ইনডেক্সে থাকা উপাদান'
          }
        ],
        answer: 0,
        hint: {
          en: 'Which element can be removed without violating the complete binary tree shape?',
          bn: 'সম্পূর্ণ বাইনারি ট্রির রূপ নষ্ট না করে কোন উপাদানটি সরানো যায়?'
        },
        explanation: {
          en: 'Moving the last leaf to index 0 preserves tree completeness, shrinking the array by 1 before sifting down.',
          bn: 'শেষ পাতাকে ০ নম্বরে আনলে ট্রির সম্পূর্ণতা বজায় থাকে এবং অ্যারের দৈর্ঘ্য ১ কমে যায়।'
        }
      },
      {
        id: 'pm-q2',
        kind: 'mcq',
        topic: 'libuv-timer-heap',
        question: {
          en: 'How does Node.js libuv use a min-heap to manage thousands of active setTimeout timers efficiently?',
          bn: 'নোড জেএস libuv কীভাবে দক্ষভাবে হাজার হাজার সক্রিয় setTimeout টাইমার পরিচালনা করতে মিন-হিপ ব্যবহার করে?'
        },
        options: [
          {
            en: 'It keys timers by expiration timestamp in a min-heap, allowing the event loop to inspect the next expiring timer in O(1) time at index 0',
            bn: 'এটি মেয়াদ উত্তীর্ণের সময়ের ভিত্তিতে মিন-হিপ তৈরি করে, যা ইভেন্ট লুপকে ০ নম্বর ইনডেক্স দেখে O(1) সময়ে পরবর্তী টাইমার বুঝতে দেয়'
          },
          {
            en: 'It converts all timers into synchronous blocking loops',
            bn: 'এটি সমস্ত টাইমারকে সিঙ্ক্রোনাস ব্লকিং লুপে রূপান্তর করে'
          },
          {
            en: 'It stores timers in an unsorted array and runs quicksort every millisecond',
            bn: 'এটি অগোছালো অ্যারেতে টাইমার রেখে প্রতি মিলি সেকেন্ডে কুইকসর্ট চালায়'
          },
          {
            en: 'It sends timer events over UDP network sockets to localhost',
            bn: 'এটি লোকালহোস্টে ইউডিপি সকেটের মাধ্যমে টাইমার ইভেন্ট পাঠায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The event loop only needs to know when the EARLIEST timer will trigger.',
          bn: 'ইভেন্ট লুপের কেবল জানা প্রয়োজন যে সবচেয়ে নিকটতম টাইমারটি কখন বাজবে।'
        },
        explanation: {
          en: 'A min-heap ensures the earliest timer is always at the root. The runtime sleeps until that deadline without polling inactive timers.',
          bn: 'মিন-হিপ নিশ্চিত করে যে নিকটতম টাইমারটি সর্বদা রুটে থাকবে। ফলে নিষ্ক্রিয় টাইমার না দেখেই রানটাইম সেই সময় পর্যন্ত অপেক্ষা করতে পারে।'
        }
      },
      {
        id: 'pm-q3',
        kind: 'mcq',
        topic: 'dequeue-time-complexity',
        question: {
          en: 'What is the time complexity of the dequeue (extract root) operation in a binary heap with n elements?',
          bn: 'n উপাদান বিশিষ্ট একটি বাইনারি হিপে ডিকিউ (রুট অপসারণ) অপারেশনের সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(log n) logarithmic time',
            bn: 'O(log n) লগারিদমিক সময়'
          },
          {
            en: 'O(1) constant time',
            bn: 'O(1) ধ্রুবক সময়'
          },
          {
            en: 'O(n) linear search time',
            bn: 'O(n) রৈখিক খোঁজার সময়'
          },
          {
            en: 'O(n log n) sorting time',
            bn: 'O(n log n) সাজানোর সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sifting down descends a single root-to-leaf path.',
          bn: 'শিফট-ডাউনে রুট থেকে পাতা পর্যন্ত একটি একক পথ নিচে নামতে হয়।'
        },
        explanation: {
          en: 'Replacing the root and sifting down traverses at most the height of the complete tree, taking O(log n) comparisons and swaps.',
          bn: 'রুট পরিবর্তন করে নিচে নামতে ট্রির উচ্চতার সমান পথ যেতে হয়, যার জন্য O(log n) তুলনা ও অদলবদল লাগে।'
        }
      },
      {
        id: 'pm-q4',
        kind: 'mcq',
        topic: 'extract-from-empty-heap',
        question: {
          en: 'What should a robust dequeue implementation return when called on an empty priority queue?',
          bn: 'একটি খালি প্রায়োরিটি কিউতে ডিকিউ কল করা হলে একটি সুরক্ষিত বাস্তবায়ন কী ফেরত দেবে?'
        },
        options: [
          {
            en: 'null or undefined without throwing an unhandled exception',
            bn: 'কোনো এক্সেপশন না ছুড়ে নিরাপদে null বা undefined ফেরত দেওয়া'
          },
          {
            en: 'An infinite loop that halts the CPU thread',
            bn: 'একটি অসীম লুপ যা সিপিইউ থ্রেডকে থামিয়ে দেয়'
          },
          {
            en: 'The number -999999999',
            bn: '-৯৯৯৯৯৯৯৯৯ সংখ্যাটি'
          },
          {
            en: 'A random floating-point number',
            bn: 'একটি এলোমেলো দশমিক সংখ্যা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Guard against array underflow before inspecting or popping elements.',
          bn: 'উপাদান পরিদর্শন বা পপ করার আগেই আন্ডারফ্লোর বিরুদ্ধে সতর্কতা রাখুন।'
        },
        explanation: {
          en: 'Checking this.heap.length === 0 guards against underflow, preventing index errors and ensuring graceful error handling.',
          bn: 'this.heap.length === ০ পরীক্ষা করলে আন্ডারফ্লো প্রতিরোধ হয় এবং কোনো ক্র্যাশ ছাড়া প্রোগ্রামটি নিরাপদে চলে।'
        }
      }
    ]
  }
};
