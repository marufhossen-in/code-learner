import type { Lesson } from '../../../lib/types';

export const theRingHotelLesson: Lesson = {
  slug: 'the-ring-hotel',
  tech: 'queues',
  title: {
    en: 'The Ring Buffer — Modulo Arithmetic, Cache Locality, and Circular Queues',
    bn: 'রিং বাফার: মডুলো পাটিগণিত, ক্যাশ লোকালিটি এবং সার্কুলার কিউ'
  },
  summary: {
    en: 'In a fixed linear array, advancing pointers causes valid data to drift towards the high memory boundary, requiring expensive O(n) element compaction. The ring buffer resolves this by connecting the array boundaries into a conceptual circle via modulo arithmetic. Both head and tail pointers wrap around from index K - 1 to 0 in strictly O(1) time. Ring buffers preallocate a fixed contiguous memory buffer, maximizing CPU L1 cache locality and eliminating dynamic heap allocations in high-performance networking and audio drivers.',
    bn: 'রৈখিক ফিক্সড অ্যারেতে পয়েন্টার এগোতে থাকলে ডাটা মেমোরির ডান প্রান্তে সরে যায়, যা সমাধানে ব্যয়বহুল O(n) কম্প্যাকশন করতে হয়। রিং বাফার মডুলো পাটিগণিতের মাধ্যমে অ্যারের দুই প্রান্তকে একটি বৃত্তাকার ধারণায় যুক্ত করে এর সমাধান করে। হেড ও টেল পয়েন্টার K - ১ ইনডেক্স থেকে ০ ইনডেক্সে তাৎক্ষণিক O(1) সময়ে ঘুরে আসে। রিং বাফার আগে থেকেই নির্দিষ্ট মেমোরি বরাদ্দ রাখে, যা সিপিইউ এল১ ক্যাশ লোকালিটি সর্বোচ্চ করে এবং উচ্চগতির নেটওয়ার্কিং ও অডিও ড্রাইভারের ডায়নামিক মেমোরি খরচ দূর করে।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'the-two-tray-chancery',
    tech: 'queues',
    title: {
      en: 'Queue Using Two Stacks: Amortized Analysis and Invariant Proofs',
      bn: 'দুই স্ট্যাকের মাধ্যমে কিউ: অ্যামর্টাইজড বিশ্লেষণ ও ইনভেরিয়েন্ট প্রমাণ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'circular-geometry',
      text: {
        en: 'The Linear Memory Drift Problem and Circular Wrap',
        bn: 'রৈখিক মেমোরির প্রবাহ এবং বৃত্তাকার সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build a queue over a linear array, each enqueue writes at the tail index and increments tail. Each dequeue reads from the head index and increments head. As operations proceed, the active window of elements marches inexorably to the right, eventually exhausting available array space even if earlier slots sit completely empty.',
        bn: 'যখন আপনি একটি রৈখিক অ্যারে দিয়ে কিউ তৈরি করেন, তখন প্রতিটি enqueue টেল ইনডেক্সে লিখে টেলকে ১ বাড়ায়। প্রতিটি dequeue হেড ইনডেক্স থেকে পড়ে হেডকে ১ বাড়ায়। অপারেশন চলতে থাকলে সক্রিয় উপাদানের অংশটি ক্রমাগত ডানে সরে যায়, যার ফলে শুরুতে অনেক ঘর খালি পড়ে থাকলেও অ্যারের সীমানা শেষ হয়ে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Shifting the remaining elements back to index 0 requires O(n) time, destroying throughput. A ring buffer eliminates shifting by wrapping the array into a conceptual circle. Using modulo arithmetic, incrementing past the final slot wraps the pointer directly back to index 0: nextIndex = (currentIndex + 1) % capacity. Both enqueue and dequeue operate in strict O(1) time with zero element displacement.',
        bn: 'অবশিষ্ট উপাদানগুলোকে আবার ০ নম্বর ঘরে টেনে আনতে O(n) সময় নষ্ট হয়। রিং বাফার অ্যারেকে একটি বৃত্তাকার রূপ দিয়ে এই সরানোর ঝামেলা পুরোপুরি দূর করে। মডুলো পাটিগণিত ব্যবহার করে শেষ ঘর অতিক্রম করলে পয়েন্টারটি এক লাফে ০ ঘরে ফিরে আসে: nextIndex = (currentIndex + ১) % capacity। এর ফলে উপাদান স্থানান্তর ছাড়াই enqueue ও dequeue উভয়ই নিখুঁত O(1) সময়ে সম্পন্ন হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'ring-buffer',
          def: {
            en: 'A circular queue implemented over a fixed contiguous array where head and tail pointers wrap using modulo arithmetic.',
            bn: 'একটি নির্দিষ্ট অবিচ্ছিন্ন অ্যারেতে তৈরি বৃত্তাকার কিউ যেখানে হেড ও টেল পয়েন্টার মডুলো পাটিগণিতের মাধ্যমে বৃত্তাকারে ঘোরে।'
          }
        },
        {
          term: 'modulo-wrapping',
          def: {
            en: 'Incrementing indices using (index + 1) % capacity to reconnect index capacity - 1 back to index 0.',
            bn: 'ইনডেক্স বৃদ্ধি করতে (index + 1) % capacity ব্যবহার করা যা capacity - 1 ইনডেক্সকে সরাসরি ইনডেক্স 0 এর সাথে যুক্ত করে।'
          }
        },
        {
          term: 'full-empty-disambiguation',
          def: {
            en: 'The technique used to distinguish between an empty buffer (0 items) and a full buffer (K items) when head === tail.',
            bn: 'head === tail থাকা অবস্থায় বাফারটি সম্পূর্ণ খালি (০ উপাদান) নাকি সম্পূর্ণ পূর্ণ (K উপাদান) তা পৃথক করার পদ্ধতি।'
          }
        },
        {
          term: 'cache-line-density',
          def: {
            en: 'The hardware efficiency gained from packing sequential items contiguously within 64 byte CPU cache lines.',
            bn: 'সিপিইউর ৬৪ বাইটের ক্যাশ লাইনে উপাদানগুলোকে পরপর সাজিয়ে হার্ডওয়্যার থেকে সর্বোচ্চ গতি আদায় করার কৌশল।'
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
      id: 'full-empty-dilemma',
      text: {
        en: 'The Full-Empty Dilemma: Resolving head === tail',
        bn: 'পূর্ণ বনাম খালি ধাঁধা: head === tail এর সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A circular buffer presents a classic ambiguity: when the queue contains 0 elements, head equals tail. Similarly, saturating the buffer with capacity K items leaves those exact pointers identical. Without additional tracking, pointers alone cannot distinguish an empty queue from a saturated queue.',
        bn: 'একটি সার্কুলার বাফার একটি বহুল পরিচিত জটিলতা তৈরি করে: যখন কিউতে ০ টি উপাদান থাকে, তখন head এবং tail সমান হয়। একইভাবে সম্পূর্ণ K ধারণক্ষমতায় বাফার পূর্ণ হলেও উভয় নির্দেশক হুবহু এক বিন্দুতে মিলে যায়। বাড়তি কোনো তথ্য ছাড়া কেবল পয়েন্টার দেখে খালি কিউ এবং পূর্ণ কিউয়ের মধ্যে পার্থক্য করা অসম্ভব।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Production systems resolve this by maintaining an explicit count integer. Initialized to 0, count increments on enqueue and decrements on dequeue. The queue is empty when count === 0 and full when count === capacity. This design avoids sacrificing memory slots and keeps status checks strictly O(1).',
        bn: 'বাস্তব সফটওয়্যার একটি নির্দিষ্ট count পূর্ণসংখ্যা ভ্যারিয়েবল রেখে এই সমস্যার সমাধান করে। শুরুতে count থাকে ০, প্রতিবার উপাদান যোগে ১ বাড়ে এবং উপাদান সরালে ১ কমে। count === ০ হলে কিউ খালি এবং count === capacity হলে কিউ পূর্ণ থাকে। এই কৌশলে কোনো মেমোরি স্লট নষ্ট হয় না এবং অবস্থা যাচাই সর্বদা O(1) সময়ে সম্পন্ন হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Dimension', bn: 'স্থাপত্য বৈশিষ্ট্য' },
        { en: 'Singly Linked Queue', bn: 'একমুখী লিঙ্কড কিউ' },
        { en: 'Circular Ring Buffer', bn: 'সার্কুলার রিং বাফার' }
      ],
      rows: [
        [
          { en: 'Cache Locality', bn: 'ক্যাশ লোকালিটি' },
          { en: 'Poor (heap-scattered nodes)', bn: 'দুর্বল (হিপে ছড়িয়ে থাকা নোড)' },
          { en: 'High (contiguous 64 byte lines)', bn: 'উচ্চ (অবিচ্ছিন্ন ৬৪ বাইট লাইন)' }
        ],
        [
          { en: 'Dynamic Memory Allocation', bn: 'ডায়নামিক মেমোরি বরাদ্দ' },
          { en: 'Allocates per enqueued item', bn: 'প্রতিটি নতুন উপাদানে বরাদ্দ লাগে' },
          { en: 'Zero allocations after startup', bn: 'চালুর পর কোনো নতুন বরাদ্দ নেই' }
        ],
        [
          { en: 'Worst-Case Enqueue Latency', bn: 'এনকিউ ওর্স্ট-কেস সময়' },
          { en: 'O(1) with allocator jitter', bn: 'O(1) তবে মেমোরি বরাদ্দের ঝুঁকি' },
          { en: 'O(1) deterministic latency', bn: 'O(1) সুনির্দিষ্ট অপরিবর্তনীয় সময়' }
        ],
        [
          { en: 'Memory Capacity Model', bn: 'ধারণক্ষমতা মডেল' },
          { en: 'Unbounded heap allocation', bn: 'সীমাহীন হিপ মেমোরি বৃদ্ধি' },
          { en: 'Fixed preallocated capacity K', bn: 'পূর্বনির্ধারিত নির্দিষ্ট ধারণক্ষমতা K' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'circular-queue-impl',
      text: {
        en: 'Executable Ring Buffer Implementation',
        bn: 'রিং বাফারের সম্পূর্ণ বাস্তবায়ন ও এক্সিকিউশন ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements a circular queue over a fixed array of capacity 5. Enqueueing 4 items, dequeueing 2 items, and inserting 3 additional elements forces the tail pointer to wrap around from index 4 back to indices 0 and 1 cleanly without memory reallocations.',
        bn: 'নিচের টাইপস্ক্রিপ্ট কোডটি ৫ ধারণক্ষমতার একটি নির্দিষ্ট অ্যারেতে সার্কুলার কিউ বাস্তবায়ন করে। ৪ টি উপাদান যোগ করে, ২টি সরিয়ে, এরপর আরও ৩ টি উপাদান ঢোকালে টেল পয়েন্টারটি ৪ নম্বর ইনডেক্স পেরিয়ে কোনো মেমোরি পুনর্বরাদ্দ ছাড়াই পরিচ্ছন্নভাবে ০ এবং ১ নম্বর ইনডেক্সে ঘুরে আসে।'
      }
    },
    {
      type: 'code',
      code: `class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.buffer = new Array(capacity).fill(null);
    this.head = 0;
    this.tail = 0;
    this.count = 0;
  }

  enqueue(val) {
    if (this.isFull()) return false;
    this.buffer[this.tail] = val;
    this.tail = (this.tail + 1) % this.capacity;
    this.count++;
    return true;
  }

  dequeue() {
    if (this.isEmpty()) return null;
    const item = this.buffer[this.head];
    this.buffer[this.head] = null;
    this.head = (this.head + 1) % this.capacity;
    this.count--;
    return item;
  }

  peek() {
    return this.isEmpty() ? null : this.buffer[this.head];
  }

  isEmpty() {
    return this.count === 0;
  }

  isFull() {
    return this.count === this.capacity;
  }

  size() {
    return this.count;
  }

  toArray() {
    const res = [];
    for (let i = 0; i < this.count; i++) {
      const idx = (this.head + i) % this.capacity;
      res.push(this.buffer[idx]);
    }
    return res.join(' -> ');
  }
}

const cq = new CircularQueue(5);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);

console.log('Initial state (head=0, tail=4):', cq.toArray());
// Output: Initial state (head=0, tail=4): 10 -> 20 -> 30 -> 40

console.log('Dequeued 1:', cq.dequeue());
// Output: Dequeued 1: 10

console.log('Dequeued 2:', cq.dequeue());
// Output: Dequeued 2: 20

console.log('After 2 dequeues (head=2):', cq.toArray());
// Output: After 2 dequeues (head=2): 30 -> 40

// Wrap-around insertions:
cq.enqueue(50);
cq.enqueue(60);
cq.enqueue(70);

console.log('After wrap-around:', cq.toArray());
// Output: After wrap-around: 30 -> 40 -> 50 -> 60 -> 70

console.log('Is full?:', cq.isFull());
// Output: Is full?: true

console.log('Head index:', cq.head);
// Output: Head index: 2

console.log('Tail index:', cq.tail);
// Output: Tail index: 2

console.log('Next dequeued item:', cq.dequeue());
// Output: Next dequeued item: 30

console.log('Remaining queue:', cq.toArray());
// Output: Remaining queue: 40 -> 50 -> 60 -> 70`
    },
    {
      type: 'heading',
      id: 'kernel-driver-use',
      text: {
        en: 'Why Operating System Kernels and Audio DSP Engines Mandate Ring Buffers',
        bn: 'কেন অপারেটিং সিস্টেম কার্নেল ও অডিও ইঞ্জিন রিং বাফার বাধ্যতামূলক করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Operating system interrupt service routines and real-time audio playback engines strictly forbid dynamic heap allocation. Allocating memory inside an audio rendering loop can trigger garbage collection pauses or allocator locks, resulting in audible clicks and dropped packets. By pre-allocating a ring buffer, drivers guarantee deterministic sub-microsecond enqueue and dequeue latencies.',
        bn: 'অপারেটিং সিস্টেমের ইন্টারাপ্ট রুটিন এবং রিয়েল-টাইম অডিও প্লেব্যাক ইঞ্জিনে ডায়নামিক মেমোরি বরাদ্দ সম্পূর্ণ নিষিদ্ধ। অডিও প্লেব্যাকের মাঝে মেমোরি বরাদ্দ করলে গার্বেজ কালেকশন বিরতি ঘটে, যার ফলে অডিওতে শব্দ বিকৃতি বা প্যাকেট ড্রপ দেখা দেয়। আগে থেকেই রিং বাফার তৈরি করে রাখলে ড্রাইভাররা মাইক্রোসেকেন্ডের ভগ্নাংশে সুনির্দিষ্ট গতিতে ডাটা আদান-প্রদান নিশ্চিত করতে পারে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Modulo wrapping: Using (index + 1) % capacity connects the end of an array to index 0, eliminating O(n) element shifting.',
          bn: 'মডুলো ঘূর্ণন: (index + 1) % capacity ব্যবহারের মাধ্যমে অ্যারের শেষ প্রান্তকে ০ ঘরে যুক্ত করে O(n) শিফটিং দূর করা হয়।'
        },
        {
          en: 'Deterministic speed: Circular queues execute enqueue and dequeue in guaranteed O(1) worst-case time with zero heap churn.',
          bn: 'সুনির্দিষ্ট গতি: সার্কুলার কিউ কোনো মেমোরি অপচয় ছাড়াই নিশ্চিত O(1) ওর্স্ট-কেস সময়ে এনকিউ ও ডিকিউ সম্পন্ন করে।'
        },
        {
          en: 'Count disambiguation: Tracking element count cleanly separates the empty state from the full state when head === tail.',
          bn: 'কাউন্টের স্বচ্ছতা: উপাদানের সংখ্যা ট্র্যাক করলে head === tail থাকা অবস্থাতেও খালি ও পূর্ণ অবস্থার মাঝে স্পষ্ট পার্থক্য থাকে।'
        },
        {
          en: 'Real-time standard: Hardware drivers, network packet rings, and audio pipelines mandate ring buffers for deterministic zero-allocation throughput.',
          bn: 'রিয়েল-টাইম স্ট্যান্ডার্ড: হার্ডওয়্যার ড্রাইভার, নেটওয়ার্কিং এবং অডিও ইঞ্জিন মেমোরি বরাদ্দহীন নির্ভরযোগ্য গতির জন্য রিং বাফার ব্যবহার করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'rh-ex1',
      kind: 'mcq',
      topic: 'modulo-tail-calculation',
      question: {
        en: 'In a circular queue of capacity 5 with tail currently at index 4, what will tail become after one successful enqueue?',
        bn: '৫ ধারণক্ষমতার একটি সার্কুলার কিউতে tail বর্তমানে ৪ নম্বর ইনডেক্সে থাকলে, একটি সফল enqueue এর পর tail এর মান কত হবে?'
      },
      options: [
        {
          en: 'Index 0, because (4 + 1) % 5 = 0',
          bn: '০ নম্বর ইনডেক্স, কারণ (৪ + ১) % ৫ = ০'
        },
        {
          en: 'Index 5, causing an array index out of bounds error',
          bn: '৫ নম্বর ইনডেক্স, যা অ্যারে বাউন্ডস অতিক্রম করার ত্রুটি ঘটাবে'
        },
        {
          en: 'Index 4, tail does not change after insertion',
          bn: '৪ নম্বর ইনডেক্স, সন্নিবেশের পর tail অপরিবর্তিত থাকে'
        },
        {
          en: 'Index -1, reversing pointer direction',
          bn: '-১ নম্বর ইনডেক্স, যা পয়েন্টারের দিক উল্টে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Apply modulo arithmetic: (tail + 1) % capacity.',
        bn: 'মডুলো পাটিগণিত প্রয়োগ করুন: (tail + ১) % capacity।'
      },
      explanation: {
        en: 'Adding 1 to index 4 yields 5. Evaluating 5 modulo 5 wraps the index directly back to 0.',
        bn: '৪ এর সাথে ১ যোগ করলে ৫ হয়। ৫ কে ৫ দিয়ে ভাগ করলে ভাগশেষ ০ আসে, যা ইনডেক্সকে শুরুতে ফিরিয়ে আনে।'
      }
    },
    {
      id: 'rh-ex2',
      kind: 'mcq',
      topic: 'head-tail-ambiguity',
      question: {
        en: 'Why does a circular queue encounter an ambiguous state when head === tail without a count variable?',
        bn: 'একটি count ভ্যারিয়েবল ছাড়া সার্কুলার কিউতে head === tail হলে কেন একটি দ্ব্যর্থবোধক জটিলতা তৈরি হয়?'
      },
      options: [
        {
          en: 'head === tail occurs both when the queue is completely empty (0 items) and when it is completely full (K items)',
          bn: 'head === tail অবস্থাটি কিউ সম্পূর্ণ খালি (০ উপাদান) এবং সম্পূর্ণ পূর্ণ (K উপাদান) উভয় ক্ষেত্রেই ঘটে'
        },
        {
          en: 'The CPU cannot compare two pointer variables simultaneously',
          bn: 'সিপিইউ একসাথে দুটি পয়েন্টার ভ্যারিয়েবল তুলনা করতে পারে না'
        },
        {
          en: 'Circular queues cannot store numbers greater than 100',
          bn: 'সার্কুলার কিউ ১০০ এর চেয়ে বড় কোনো সংখ্যা রাখতে পারে না'
        },
        {
          en: 'The operating system kernel deletes the memory array when pointers match',
          bn: 'পয়েন্টার দুটি মিলে গেলে অপারেটিং সিস্টেম কার্নেল মেমোরি অ্যারে মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider where tail lands after wrapping completely around to meet head.',
        bn: 'পুরো এক পাক ঘুরে এসে tail যখন head এর সমান হয় তখন কী ঘটে তা ভাবুন।'
      },
      explanation: {
        en: 'When empty, tail has not advanced past head. When full, tail has wrapped around to meet head from behind. A count variable breaks this symmetry.',
        bn: 'খালি অবস্থায় tail সামনে বাড়ে না। পূর্ণ অবস্থায় tail ঘুরে এসে পেছন থেকে head এর সাথে মেলে। count ভ্যারিয়েবল এই দ্বিধা দূর করে।'
      }
    },
    {
      id: 'rh-ex3',
      kind: 'mcq',
      topic: 'cache-line-efficiency',
      question: {
        en: 'Why do ring buffers provide superior throughput compared to linked queues in latency-critical networking?',
        bn: 'ল্যাটেন্সি-সংবেদনশীল নেটওয়ার্কিংয়ে কেন লিঙ্কড কিউয়ের চেয়ে রিং বাফার অনেক বেশি গতি নিশ্চিত করে?'
      },
      options: [
        {
          en: 'Contiguous array storage enables sequential 64 byte CPU cache line prefetching and eliminates dynamic allocation churn',
          bn: 'অবিচ্ছিন্ন অ্যারে সিপিইউর ৬৪ বাইট ক্যাশ লাইনে দ্রুত ডাটা আনে এবং নতুন মেমোরি বরাদ্দের ঝামেলা দূর করে'
        },
        {
          en: 'Ring buffers run exclusively on graphics processing units (GPUs)',
          bn: 'রিং বাফার কেবল গ্রাফিক্স প্রসেসিং ইউনিটে (GPU) চলতে পারে'
        },
        {
          en: 'Linked queues can only transmit data over dial-up modem lines',
          bn: 'লিঙ্কড কিউ কেবল ডায়াল-আপ মডেম সংযোগে ডাটা পাঠাতে পারে'
        },
        {
          en: 'Ring buffers automatically compress network packets using lossless ZIP algorithms',
          bn: 'রিং বাফার স্বয়ংক্রিয়ভাবে জিপ (ZIP) অ্যালগরিদম দিয়ে নেটওয়ার্ক প্যাকেট সংকুচিত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Preallocated continuous memory allows CPU hardware prefetchers to predict read requests.',
        bn: 'পূর্ব-বরাদ্দকৃত অবিচ্ছিন্ন মেমোরি সিপিইউ হার্ডওয়্যারকে আগেভাগেই পরবর্তী ডাটা ক্যাশে এনে রাখতে দেয়।'
      },
      explanation: {
        en: 'Array elements reside consecutively in RAM, maximizing L1 cache hits and avoiding random DRAM pointer chase stalls.',
        bn: 'অ্যারের উপাদানগুলো মেমোরিতে পাশাপাশি থাকায় এল১ ক্যাশ হিট বাড়ে এবং হিপে এলোমেলো মেমোরি খোঁজার বিলম্ব ঘটে না।'
      }
    }
  ],
  quiz: {
    id: 'ring-hotel-quiz',
    title: {
      en: 'Ring Buffers and Modulo Queues Quiz',
      bn: 'রিং বাফার এবং মডুলো কিউ কুইজ'
    },
    questions: [
      {
        id: 'rh-q1',
        kind: 'mcq',
        topic: 'power-of-two-masking',
        question: {
          en: 'If a ring buffer capacity K is chosen as a power of 2 (such as K = 8), what bitwise operation can replace the modulo operator % K?',
          bn: 'রিং বাফারের ধারণক্ষমতা K যদি ২ এর ঘাত হয় (যেমন K = ৮), তবে % K এর বদলে কোন বিটওয়াইজ অপারেশনটি ব্যবহার করা যায়?'
        },
        options: [
          {
            en: 'Bitwise AND with K - 1: index = (index + 1) & (K - 1)',
            bn: 'K - ১ এর সাথে বিটওয়াইজ AND: index = (index + ১) & (K - ১)'
          },
          {
            en: 'Bitwise XOR with K + 1: index = (index + 1) ^ (K + 1)',
            bn: 'K + ১ এর সাথে বিটওয়াইজ XOR: index = (index + ১) ^ (K + ১)'
          },
          {
            en: 'Bitwise NOT with K: index = ~(index + 1)',
            bn: 'K এর সাথে বিটওয়াইজ NOT: index = ~(index + ১)'
          },
          {
            en: 'Left shift by K: index = (index + 1) << K',
            bn: 'K দিয়ে লেফট শিফট: index = (index + ১) << K'
          }
        ],
        answer: 0,
        hint: {
          en: 'For K = 8 (binary 1000), K - 1 is 7 (binary 0111). Masking with 7 yields values 0 through 7.',
          bn: 'K = ৮ (বাইনারি ১০০০) হলে K - ১ হলো ৭ (বাইনারি ০১১১)। ৭ দিয়ে অ্যান্ড করলে মান ০ থেকে ৭ এর মধ্যে থাকে।'
        },
        explanation: {
          en: 'When K is a power of 2, the bitwise AND operation (i & (K - 1)) produces the exact same result as i % K in a single CPU cycle.',
          bn: 'K যখন ২ এর ঘাত হয়, তখন বিটওয়াইজ অ্যান্ড (i & (K - ১)) মাত্র ১ সিপিইউ সাইকেলে i % K এর সমান মান দেয়।'
        }
      },
      {
        id: 'rh-q2',
        kind: 'mcq',
        topic: 'underflow-guard',
        question: {
          en: 'What condition should a ring buffer dequeue() method check before attempting to read the buffer at index head?',
          bn: 'রিং বাফারের dequeue() মেথডে head ইনডেক্স থেকে ডাটা পড়ার আগে কোন শর্তটি পরীক্ষা করা উচিত?'
        },
        options: [
          {
            en: 'Check if count === 0 (or isEmpty()), returning null or error to prevent reading invalid data',
            bn: 'count === ০ (বা isEmpty()) কিনা তা পরীক্ষা করে নাল বা এরর ফেরত দিয়ে ভুল ডাটা পড়া রোধ করা'
          },
          {
            en: 'Check if the CPU temperature is below 80 degrees Celsius',
            bn: 'সিপিইউর তাপমাত্রা ৮০ ডিগ্রি সেলসিয়াসের নিচে আছে কিনা তা দেখা'
          },
          {
            en: 'Check if the computer monitor is turned on',
            bn: 'কম্পিউটার মনিটর চালু আছে কিনা তা পরীক্ষা করা'
          },
          {
            en: 'Check if the network latency is strictly 0 milliseconds',
            bn: 'নেটওয়ার্ক ল্যাটেন্সি নিখুঁত ০ মিলিসেকেন্ড কিনা তা যাচাই করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Attempting to dequeue from an empty ring reads unwritten or stale memory.',
          bn: 'খালি রিং থেকে ডিকিউ করতে গেলে পুরনো বা অর্থহীন মেমোরি ডাটা চলে আসে।'
        },
        explanation: {
          en: 'Guarding with count === 0 prevents buffer underrun, guaranteeing callers only receive valid enqueued payloads.',
          bn: 'count === ০ দিয়ে যাচাই করলে বাফার আন্ডাররান ঘটে না এবং কলার কেবল বৈধ ডাটাই পায়।'
        }
      },
      {
        id: 'rh-q3',
        kind: 'mcq',
        topic: 'zero-allocation-guarantee',
        question: {
          en: 'Why do high-frequency trading platforms and Linux kernel device drivers mandate zero-allocation data structures like ring buffers?',
          bn: 'হাই-ফ্রিকোয়েন্সি ট্রেডিং প্ল্যাটফর্ম এবং লিনাক্স কার্নেল ডিভাইস ড্রাইভার কেন রিং বাফারের মতো জিরো-অ্যালোকেশন ডেটা কাঠামো বাধ্যতামূলক করে?'
        },
        options: [
          {
            en: 'Dynamic heap allocation incurs non-deterministic execution delays and allocator mutex lock contention that violates latency deadlines',
            bn: 'ডায়নামিক হিপ মেমোরি বরাদ্দে অনিয়মিত বিলম্ব এবং লক ব্যবস্থার জট তৈরি হয় যা সময়ের বাধ্যবাধকতা নষ্ট করে'
          },
          {
            en: 'Because C compilers cannot generate binary files larger than 1 megabyte',
            bn: 'কারণ সি কম্পাইলার ১ মেগাবাইটের বেশি আকারের কোনো বাইনারি ফাইল তৈরি করতে পারে না'
          },
          {
            en: 'To force all network packets to travel at the physical speed of sound',
            bn: 'সমস্ত নেটওয়ার্ক প্যাকেটকে শব্দের গতিতে চলতে বাধ্য করার উদ্দেশ্যে'
          },
          {
            en: 'Because Linux kernels operate without electrical transistors',
            bn: 'কারণ লিনাক্স কার্নেল কোনো ট্রানজিস্টর ছাড়াই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Calling malloc or new under heavy concurrent load introduces unpredictable pauses.',
          bn: 'অতিরিক্ত চাপের সময় malloc বা new ডাকলে অপ্রত্যাশিত বিরতি বা পজ তৈরি হয়।'
        },
        explanation: {
          en: 'Preallocating fixed ring buffers guarantees strictly deterministic microsecond response times with zero garbage collection overhead.',
          bn: 'আগে থেকেই রিং বাফার বরাদ্দ রাখলে মেমোরি ক্লিনিংয়ের কোনো ঝামেলা ছাড়াই মাইক্রোসেকেন্ডে সুনির্দিষ্ট সেবা পাওয়া যায়।'
        }
      },
      {
        id: 'rh-q4',
        kind: 'mcq',
        topic: 'sacrificial-slot-tradeoff',
        question: {
          en: 'In a circular queue of size K implemented without a count variable, how many elements can the queue hold if one slot is sacrificed to disambiguate full from empty?',
          bn: 'একটি count ভ্যারিয়েবল ছাড়া K আকারের সার্কুলার কিউতে খালি ও পূর্ণ অবস্থা আলাদা করতে ১ টি স্লট উৎসর্গ করলে সর্বোচ্চ কতটি উপাদান রাখা যায়?'
        },
        options: [
          {
            en: 'K - 1 elements, because full is defined as (tail + 1) % K === head',
            bn: 'K - ১ টি উপাদান, কারণ তখন পূর্ণ অবস্থা সংজ্ঞায়িত হয় (tail + ১) % K === head দ্বারা'
          },
          {
            en: '2 * K elements',
            bn: '২ * K টি উপাদান'
          },
          {
            en: '0 elements',
            bn: '০ টি উপাদান'
          },
          {
            en: 'K + 10 elements',
            bn: 'K + ১০ টি উপাদান'
          }
        ],
        answer: 0,
        hint: {
          en: 'Leaving one slot empty ensures tail never lands directly on head when the buffer is full.',
          bn: 'একটি ঘর খালি রাখলে বাফার পূর্ণ হলেও tail কখনোই সরাসরি head এর সাথে মিলে যায় না।'
        },
        explanation: {
          en: 'By leaving 1 unused slot, head === tail uniquely signifies empty, while (tail + 1) % K === head uniquely signifies full, holding at most K - 1 items.',
          bn: '১ টি ঘর খালি রাখলে head === tail কেবল খালি নির্দেশ করে, আর (tail + ১) % K === head পূর্ণ নির্দেশ করে, ফলে সর্বোচ্চ K - ১ টি উপাদান রাখা যায়।'
        }
      }
    ]
  }
};
