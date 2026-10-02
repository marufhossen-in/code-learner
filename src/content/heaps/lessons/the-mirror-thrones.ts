import type { Lesson } from '../../../lib/types';

export const theMirrorThronesLesson: Lesson = {
  slug: 'the-mirror-thrones',
  tech: 'heaps',
  title: {
    en: 'Dual-Heap Streaming Median — Balancing Max and Min Heaps',
    bn: 'ডুয়াল-হিপ স্ট্রিমিং মিডিয়ান: ম্যাক্স এবং মিন হিপের ভারসাম্য'
  },
  summary: {
    en: 'Calculating the median of an incoming numerical stream without storing and repeatedly sorting the entire array is an essential problem in financial telemetry and performance monitoring. By dividing incoming data into two halves — a Max-Heap for the lower half and a Min-Heap for the upper half — the median can be inspected in deterministic O(1) time. We enforce two strict invariants: ordering across the partition boundary and a maximum size divergence of one element, achieving O(log n) real-time insertion.',
    bn: 'সম্পূর্ণ অ্যারেকে বারবার সাজানোর ঝামেলা এড়িয়ে একটি চলমান সাংখ্যিক স্ট্রিম থেকে তাত্ক্ষণিক মধ্যমা বা মিডিয়ান বের করা আর্থিক টেলিমেট্রি এবং সিস্টেম মনিটরিংয়ের একটি অপরিহার্য সমস্যা। ডেটাকে দুটি অর্ধে ভাগ করে — নিচের অর্ধেকের জন্য ম্যাক্স-হিপ এবং ওপরের অর্ধেকের জন্য মিন-হিপ — মাত্র O(1) ধ্রুবক সময়ে মিডিয়ান দেখা সম্ভব হয়। আমরা দুটি কঠোর ইনভেরিয়েন্ট বজায় রাখি: পার্টিশন সীমানায় সঠিক ক্রম এবং সর্বোচ্চ ১ উপাদানের আকারের ভারসাম্য, যা O(log n) সময়ে রিয়েল-টাইম সন্নিবেশ নিশ্চিত করে।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-lazy-meadows',
    tech: 'heaps',
    title: {
      en: "Indexed Heaps and Decrease-Key — Dijkstra's Shortest Path Optimization",
      bn: 'ইনডেক্সড হিপ এবং ডিক্রিজ-কি: ডাইকস্ট্রার ক্ষুদ্রতম পথ অপ্টিমাইজেশন'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'streaming-median-problem',
      text: {
        en: 'The Dynamic Median Dilemma: Sorting vs Partition Balancing',
        bn: 'চলমান মিডিয়ান সমস্যা: বারবার বাছাই বনাম পার্টিশন ভারসাম্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build monitoring systems for high-frequency trading or live server telemetry, numerical metrics like transaction latency and stock prices stream in continuously. Calculating the running median of these measurements is much more resilient to extreme outliers than calculating the arithmetic mean.',
        bn: 'যখন আপনি উচ্চ-গতির লেনদেন ব্যবস্থা বা লাইভ সার্ভার টেলিমেট্রির জন্য মনিটরিং সিস্টেম তৈরি করেন, তখন নেটওয়ার্ক লেটেন্সি এবং শেয়ারের মূল্যের মতো সংখ্যাগুলো অনবরত আসতে থাকে। এই পরিমাপগুলোর রানিং মিডিয়ান বের করা চরম অস্বাভাবিক মানের ক্ষেত্রে সাধারণ গড়ের চেয়ে অনেক বেশি নির্ভরযোগ্য ও স্থিতিশীল ফলাফল দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'If you maintain a sorted array by inserting each incoming number into its sorted position, shifting elements takes O(n) time per event, which rapidly overwhelms CPU capacity on streams of 1000000 events. The dual-heap pattern solves this by organizing numbers into two complementary heaps meeting at the median.',
        bn: 'আপনি যদি একটি সাজানো অ্যারেতে প্রতিবার নতুন উপাদান ঢুকিয়ে উপাদানগুলো সরান, তবে প্রতি ইভেন্টে O(n) সময় লাগবে যা ১০০০০০০ ইভেন্টের স্ট্রিমে সিপিইউ সক্ষমতাকে বিপর্যস্ত করে ফেলে। ডুয়াল-হিপ প্যাটার্ন মিডিয়ানের প্রান্তে দুটি পরিপূরক হিপ সাজিয়ে এই সমস্যার নিখুঁত সমাধান করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'dual-heap-partition',
          def: {
            en: 'Dividing a dataset into two halves using a Max-Heap for the lower values and a Min-Heap for the upper values.',
            bn: 'একটি ডেটাসেটকে নিচের মানের জন্য ম্যাক্স-হিপ এবং ওপরের মানের জন্য মিন-হিপ ব্যবহার করে সমান দুই ভাগে ভাগ করা।'
          }
        },
        {
          term: 'size-balance-invariant',
          def: {
            en: 'The structural condition that the lower max-heap holds either the same number of elements or exactly one more element than the upper min-heap.',
            bn: 'এমন একটি কাঠামোগত শর্ত যেখানে নিচের ম্যাক্স-হিপের আকার ওপরের মিন-হিপের সমান অথবা ঠিক ১ উপাদান বেশি হবে।'
          }
        },
        {
          term: 'boundary-ordering-invariant',
          def: {
            en: 'The condition that every element in the lower max-heap is less than or equal to every element in the upper min-heap.',
            bn: 'এমন একটি শর্ত যেখানে নিচের ম্যাক্স-হিপের প্রতিটি উপাদান ওপরের মিন-হিপের সমস্ত উপাদানের চেয়ে ছোট বা সমান হতে হবে।'
          }
        },
        {
          term: 'instant-median-read',
          def: {
            en: 'Retrieving the median in deterministic O(1) time from the max-heap root (odd size) or arithmetic mean of both roots (even size).',
            bn: 'বিজোড় ক্ষেত্রে ম্যাক্স-হিপ রুট এবং জোড় ক্ষেত্রে দুই রুটের গড় থেকে O(1) সময়ে তাত্ক্ষণিক মিডিয়ান পাওয়া।'
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
      id: 'invariant-state-transitions',
      text: {
        en: 'Dual-Heap State Invariants and Rebalancing Steps',
        bn: 'ডুয়াল-হিপের অবস্থা এবং পুনর্ভারসাম্য বজায় রাখার নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We partition all incoming numbers across two mirrored structures: the smaller half populates a Max-Heap while the larger half populates a Min-Heap. Whenever an insertion causes one heap to exceed the other by more than 1 item, the excess root is transferred across to restore balance.',
        bn: 'আমরা সমস্ত আগত সংখ্যাকে দুটি মুখোমুখি হিপে ভাগ করি: ছোট অর্ধেকের মানগুলো একটি ম্যাক্স-হিপে জমা হয় এবং বড় অর্ধেকের মানগুলো একটি মিন-হিপে জমা হয়। যখনই কোনো নতুন উপাদান আসায় একটি হিপের আকার অন্যটির চেয়ে ১ টির বেশি বেড়ে যায়, তখনই অতিরিক্ত রুটটিকে অপর হিপে পাঠিয়ে ভারসাম্য ফিরিয়ে আনা হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Stream Event State', bn: 'স্ট্রিম ইভেন্টের অবস্থা' },
        { en: 'Max-Heap (Lower Half)', bn: 'ম্যাক্স-হিপ (নিচের অর্ধ)' },
        { en: 'Min-Heap (Upper Half)', bn: 'মিন-হিপ (ওপরের অর্ধ)' },
        { en: 'Median Computation in O(1)', bn: 'O(1) সময়ে মিডিয়ান গণনা' }
      ],
      rows: [
        [
          { en: 'Odd count (5 elements)', bn: 'বিজোড় সংখ্যা (৫টি উপাদান)' },
          { en: 'Holds 3 elements', bn: '৩টি উপাদান ধারণ করে' },
          { en: 'Holds 2 elements', bn: '২টি উপাদান ধারণ করে' },
          { en: 'Root of Max-Heap (low.peek())', bn: 'ম্যাক্স-হিপের রুট (low.peek())' }
        ],
        [
          { en: 'Even count (6 elements)', bn: 'জোড় সংখ্যা (৬টি উপাদান)' },
          { en: 'Holds 3 elements', bn: '৩টি উপাদান ধারণ করে' },
          { en: 'Holds 3 elements', bn: '৩টি উপাদান ধারণ করে' },
          { en: 'Average of both roots ((low + high) / 2)', bn: 'উভয় রুটের গড় ((low + high) / ২)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-median-finder-code',
      text: {
        en: 'Executable Streaming Median Finder Implementation',
        bn: 'স্ট্রিমিং মিডিয়ান ফাইন্ডারের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates real-time streaming median calculations across 6 arriving numbers. Notice how inserting 108 recalculates the median to 51.5 in O(1) lookup time.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ক্রমান্বয়ে আসা ৬টি সংখ্যার ওপর রিয়েল-টাইম স্ট্রিমিং মিডিয়ান হিসাব করে দেখায়। লক্ষ্য করুন কীভাবে ১০৮ যুক্ত হওয়ার পর O(1) লুকআপ সময়ে মিডিয়ান ৫১.৫ এ পরিবর্তিত হয়।'
      }
    },
    {
      type: 'code',
      code: `class MinHeap {
  constructor() { this.data = []; }
  push(val) { this.data.push(val); this._up(this.data.length - 1); }
  pop() {
    if (this.data.length === 0) return null;
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = last;
      this._down(0);
    }
    return top;
  }
  peek() { return this.data.length > 0 ? this.data[0] : null; }
  size() { return this.data.length; }
  _up(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.data[i] < this.data[p]) {
        [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
        i = p;
      } else break;
    }
  }
  _down(i) {
    const n = this.data.length;
    while (true) {
      let b = i, l = 2 * i + 1, r = 2 * i + 2;
      if (l < n && this.data[l] < this.data[b]) b = l;
      if (r < n && this.data[r] < this.data[b]) b = r;
      if (b !== i) {
        [this.data[i], this.data[b]] = [this.data[b], this.data[i]];
        i = b;
      } else break;
    }
  }
}

class MaxHeap {
  constructor() { this.data = []; }
  push(val) { this.data.push(val); this._up(this.data.length - 1); }
  pop() {
    if (this.data.length === 0) return null;
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = last;
      this._down(0);
    }
    return top;
  }
  peek() { return this.data.length > 0 ? this.data[0] : null; }
  size() { return this.data.length; }
  _up(i) {
    while (i > 0) {
      const p = (i - 1) >> 1;
      if (this.data[i] > this.data[p]) {
        [this.data[i], this.data[p]] = [this.data[p], this.data[i]];
        i = p;
      } else break;
    }
  }
  _down(i) {
    const n = this.data.length;
    while (true) {
      let b = i, l = 2 * i + 1, r = 2 * i + 2;
      if (l < n && this.data[l] > this.data[b]) b = l;
      if (r < n && this.data[r] > this.data[b]) b = r;
      if (b !== i) {
        [this.data[i], this.data[b]] = [this.data[b], this.data[i]];
        i = b;
      } else break;
    }
  }
}

class MedianFinder {
  constructor() {
    this.low = new MaxHeap();
    this.high = new MinHeap();
  }

  addNum(num) {
    if (this.low.size() === 0 || num <= this.low.peek()) {
      this.low.push(num);
    } else {
      this.high.push(num);
    }

    // Rebalance sizes
    if (this.low.size() > this.high.size() + 1) {
      this.high.push(this.low.pop());
    } else if (this.low.size() < this.high.size()) {
      this.low.push(this.high.pop());
    }
  }

  findMedian() {
    if (this.low.size() > this.high.size()) {
      return this.low.peek();
    }
    return (this.low.peek() + this.high.peek()) / 2;
  }
}

const mf = new MedianFinder();
const inputs = [41, 35, 62, 5, 97, 108];
for (const n of inputs) {
  mf.addNum(n);
  console.log(\`Added \${n} -> Current Median: \${mf.findMedian()}\`);
}
// Output: Added 41 -> Current Median: 41
// Output: Added 35 -> Current Median: 38
// Output: Added 62 -> Current Median: 41
// Output: Added 5 -> Current Median: 38
// Output: Added 97 -> Current Median: 41
// Output: Added 108 -> Current Median: 51.5

console.log(\`Final state: low size \${mf.low.size()}, high size \${mf.high.size()}\`);
// Output: Final state: low size 3, high size 3`
    },
    {
      type: 'heading',
      id: 'telemetry-and-monitoring-systems',
      text: {
        en: 'Production Systems: Latency Percentiles (p50, p90, p99)',
        bn: 'বাস্তব সিস্টেম: লেটেন্সি পার্সেন্টাইল (p50, p90, p99)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The dual-heap pattern is the theoretical foundation for continuous percentile tracking. While medians represent the 50th percentile (p50), configuring unequal partition ratios allows tracking other thresholds like p90 or p99 service-level objectives (SLOs) in production observability pipelines.',
        bn: 'ডুয়াল-হিপ প্যাটার্নটি ক্রমাগত পার্সেন্টাইল পর্যবেক্ষণের তাত্ত্বিক ভিত্তি। মিডিয়ান যেমন ৫০তম পার্সেন্টাইল (p50) নির্দেশ করে, তেমনি দুই হিপের আকারের অনুপাত পরিবর্তন করে প্রোডাকশন সিস্টেমে p90 বা p99 সার্ভিস-লেভেল অবজেক্টিভ (SLO) পর্যবেক্ষণ করা সম্ভব হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Instant O(1) median query: Storing the lower half in a Max-Heap and upper half in a Min-Heap exposes the median at the roots.',
          bn: 'তাত্ক্ষণিক O(1) মিডিয়ান কোয়েরি: নিচের অর্ধে ম্যাক্স-হিপ এবং ওপরের অর্ধে মিন-হিপ রাখলে রুট থেকে তাৎক্ষণিক মিডিয়ান পাওয়া যায়।'
        },
        {
          en: 'Logarithmic O(log n) updates: Each new number insertion requires at most one push and one cross-heap rebalancing sift.',
          bn: 'লগারিদমিক O(log n) আপডেট: প্রতিটি নতুন সংখ্যা সন্নিবেশে সর্বোচ্চ একটি পুশ এবং একটি স্থানান্তর শিফট সম্পন্ন হয়।'
        },
        {
          en: 'Zero full sorting: Avoids repeated O(n log n) array sorts or O(n) element shifting on streaming datasets.',
          bn: 'সম্পূর্ণ সাজানোর ঝামেলা নেই: চলমান ডেটাসেটে বারবার O(n log n) সর্টিং বা O(n) উপাদান সরানোর অপচয় পুরোপুরি রোধ করে।'
        },
        {
          en: 'Exact vs sketch trade-offs: Dual-heaps provide exact median statistics, serving as the benchmark for approximate algorithms like t-digest.',
          bn: 'সঠিক বনাম আনুমানিক তুলনা: ডুয়াল-হিপ হুবহু সঠিক মিডিয়ান দেয়, যা t-digest এর মতো আনুমানিক অ্যালগরিদমের মানদণ্ড হিসেবে কাজ করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'mt-ex1',
      kind: 'mcq',
      topic: 'dual-heap-median-lookup-cost',
      question: {
        en: 'What is the time complexity to query the current median using the dual-heap architecture?',
        bn: 'ডুয়াল-হিপ আর্কিটেকচার ব্যবহার করে বর্তমান মিডিয়ান জানার সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(1) constant time, by inspecting the roots of the two heaps',
          bn: 'O(1) ধ্রুবক সময়, দুটি হিপের রুট পরিদর্শনের মাধ্যমে'
        },
        {
          en: 'O(log n) time',
          bn: 'O(log n) সময়'
        },
        {
          en: 'O(n) linear search time',
          bn: 'O(n) রৈখিক খোঁজার সময়'
        },
        {
          en: 'O(n log n) time',
          bn: 'O(n log n) সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Where do the middle elements reside in the lower max-heap and upper min-heap?',
        bn: 'নিচের ম্যাক্স-হিপ এবং ওপরের মিন-হিপের ঠিক কোথায় মধ্যবর্তী উপাদানগুলো থাকে?'
      },
      explanation: {
        en: 'The median elements are positioned at index 0 of both heaps. Peeking at roots is a constant-time O(1) operation.',
        bn: 'মিডিয়ান উপাদান দুটি সর্বদা উভয় হিপের ০ নম্বর ইনডেক্সে থাকে। রুট পিক করা একটি O(1) ধ্রুবক সময়ের অপারেশন।'
      }
    },
    {
      id: 'mt-ex2',
      kind: 'mcq',
      topic: 'size-balance-rule',
      question: {
        en: 'When a new number is inserted and the lower Max-Heap size becomes greater than the upper Min-Heap size by 2, what action is taken?',
        bn: 'নতুন সংখ্যা ঢোকানোর পর নিচের ম্যাক্স-হিপের আকার যদি ওপরের মিন-হিপের চেয়ে ২ বেশি হয়ে যায়, তবে কী ব্যবস্থা নেওয়া হয়?'
      },
      options: [
        {
          en: 'Pop the root from the lower Max-Heap and push it into the upper Min-Heap, restoring the balance invariant',
          bn: 'নিচের ম্যাক্স-হিপ থেকে রুট বের করে ওপরের মিন-হিপে পুশ করা হয়, যা আকারের ভারসাম্য ফিরিয়ে আনে'
        },
        {
          en: 'Delete all numbers in the Min-Heap',
          bn: 'মিন-হিপের সমস্ত সংখ্যা মুছে ফেলা হয়'
        },
        {
          en: 'Trigger an unhandled exception error',
          bn: 'একটি আনহ্যান্ডেল্ড এক্সেপশন ত্রুটি ঘটানো হয়'
        },
        {
          en: 'Double the size of the array buffer',
          bn: 'অ্যারে বাফারের আকার দ্বিগুণ করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'How can you transfer an element from the top of the lower half to the bottom of the upper half?',
        bn: 'কীভাবে নিচের অর্ধেকের শীর্ষ থেকে ওপরের অর্ধেকের শুরুতে একটি উপাদান স্থানান্তর করা যায়?'
      },
      explanation: {
        en: 'Moving the maximum of the lower half to the upper half preserves both the size balance and the boundary ordering invariant.',
        bn: 'নিচের অর্ধেকের সর্বোচ্চ উপাদানটি ওপরে পাঠালে আকারের ভারসাম্য এবং ক্রমের নিয়ম উভয়ই সুরক্ষিত থাকে।'
      }
    },
    {
      id: 'mt-ex3',
      kind: 'mcq',
      topic: 'even-stream-median-formula',
      question: {
        en: 'If the total number of elements in the stream is even, how is the median calculated from the two heaps?',
        bn: 'স্ট্রিমে মোট উপাদানের সংখ্যা যদি জোড় হয়, তবে দুটি হিপ থেকে কীভাবে মিডিয়ান বের করা হয়?'
      },
      options: [
        {
          en: '(low.peek() + high.peek()) / 2, taking the arithmetic mean of the two roots',
          bn: '(low.peek() + high.peek()) / ২, উভয় রুটের গাণিতিক গড় নেওয়ার মাধ্যমে'
        },
        {
          en: 'low.peek() * high.peek()',
          bn: 'low.peek() * high.peek()'
        },
        {
          en: 'Always 0',
          bn: 'সর্বদা ০'
        },
        {
          en: 'The sum of all leaf nodes',
          bn: 'সমস্ত লিফ নোডের যোগফল'
        }
      ],
      answer: 0,
      hint: {
        en: 'For an even set like [35, 41], what is the mathematical median?',
        bn: '[৩৫, ৪১] এর মতো জোড় সংখ্যার সেটের ক্ষেত্রে গাণিতিক মিডিয়ান কত?'
      },
      explanation: {
        en: 'When even, the two middle values sit at the roots of low and high. The median is their arithmetic average.',
        bn: 'জোড় সংখ্যক উপাদানের ক্ষেত্রে মাঝের দুটি মান low এবং high এর রুটে থাকে। মিডিয়ান হলো তাদের সাধারণ গড়।'
      }
    }
  ],
  quiz: {
    id: 'the-mirror-thrones-quiz',
    title: {
      en: 'Dual-Heap Streaming Median Quiz',
      bn: 'ডুয়াল-হিপ স্ট্রিমিং মিডিয়ান কুইজ'
    },
    questions: [
      {
        id: 'mt-q1',
        kind: 'mcq',
        topic: 'dual-heap-insertion-time',
        question: {
          en: 'What is the time complexity to insert a new number into the dual-heap streaming structure?',
          bn: 'ডুয়াল-হিপ স্ট্রিমিং কাঠামোতে একটি নতুন সংখ্যা ঢোকানোর সময় জটিলতা কত?'
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
            en: 'O(n) linear time',
            bn: 'O(n) রৈখিক সময়'
          },
          {
            en: 'O(n log n) sorting time',
            bn: 'O(n log n) সাজানোর সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Insertion involves pushing to a heap and possibly popping and pushing one element during rebalancing.',
          bn: 'সন্নিবেশে একটি হিপে উপাদান যোগ হয় এবং পুনর্ভারসাম্যের সময় সর্বোচ্চ একটি উপাদান স্থানান্তরিত হয়।'
        },
        explanation: {
          en: 'Each heap operation (push and pop) takes O(log n). At most 3 heap operations occur per arrival, maintaining O(log n) complexity.',
          bn: 'প্রতিটি হিপ অপারেশনে O(log n) সময় লাগে। প্রতি আগমনে সর্বোচ্চ ৩টি অপারেশন হওয়ায় সামগ্রিক জটিলতা O(log n) থাকে।'
        }
      },
      {
        id: 'mt-q2',
        kind: 'mcq',
        topic: 'heap-types-per-half',
        question: {
          en: 'Which heap type is assigned to which half of the dataset in the dual-heap median pattern?',
          bn: 'ডুয়াল-হিপ মিডিয়ান প্যাটার্নে ডেটাসেটের কোন অর্ধে কোন ধরনের হিপ বরাদ্দ করা হয়?'
        },
        options: [
          {
            en: 'Max-Heap for the lower half, Min-Heap for the upper half',
            bn: 'নিচের অর্ধেকের জন্য ম্যাক্স-হিপ, ওপরের অর্ধেকের জন্য মিন-হিপ'
          },
          {
            en: 'Min-Heap for the lower half, Max-Heap for the upper half',
            bn: 'নিচের অর্ধেকের জন্য মিন-হিপ, ওপরের অর্ধেকের জন্য ম্যাক্স-হিপ'
          },
          {
            en: 'Max-Heap for both halves',
            bn: 'উভয় অর্ধেকের জন্যই ম্যাক্স-হিপ'
          },
          {
            en: 'Min-Heap for both halves',
            bn: 'উভয় অর্ধেকের জন্যই মিন-হিপ'
          }
        ],
        answer: 0,
        hint: {
          en: 'We want the largest element of the small half and the smallest element of the large half to meet at the center.',
          bn: 'আমরা চাই ছোট অর্ধেকের সবচেয়ে বড়টি এবং বড় অর্ধেকের সবচেয়ে ছোটটি যেন কেন্দ্রে মুখোমুখি হয়।'
        },
        explanation: {
          en: 'A Max-Heap exposes the largest of the lower numbers; a Min-Heap exposes the smallest of the upper numbers, placing both middle candidates at the roots.',
          bn: 'ম্যাক্স-হিপ ছোটদের মধ্যে সবচেয়ে বড়টিকে সামনে আনে এবং মিন-হিপ বড়দের মধ্যে সবচেয়ে ছোটটিকে সামনে আনে, যা মাঝের মানগুলোকে রুটে রাখে।'
        }
      },
      {
        id: 'mt-q3',
        kind: 'mcq',
        topic: 'odd-stream-median-rule',
        question: {
          en: 'When the stream contains an odd number of elements (such as 5 items), where does the exact median reside?',
          bn: 'স্ট্রিমে যখন বিজোড় সংখ্যক উপাদান (যেমন ৫টি উপাদান) থাকে, তখন সঠিক মিডিয়ানটি কোথায় অবস্থান করে?'
        },
        options: [
          {
            en: 'At the root of the lower Max-Heap, which holds the 1 extra element',
            bn: 'নিচের ম্যাক্স-হিপের রুটে, যা অতিরিক্ত ১টি উপাদান ধারণ করে'
          },
          {
            en: 'At the root of the upper Min-Heap',
            bn: 'ওপরের মিন-হিপের রুটে'
          },
          {
            en: 'At array index n - 1',
            bn: 'অ্যারের n - ১ ইনডেক্সে'
          },
          {
            en: 'In the operating system kernel buffer',
            bn: 'অপারেটিং সিস্টেম কার্নেল বাফারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'By convention, our size invariant permits the lower heap to be 1 element larger than the upper heap.',
          bn: 'নিয়ম অনুযায়ী আমাদের আকারের ইনভেরিয়েন্ট নিচের হিপকে ওপরের হিপের চেয়ে ১ উপাদান বড় থাকার অনুমতি দেয়।'
        },
        explanation: {
          en: 'Since the lower Max-Heap maintains size k + 1 while the Min-Heap maintains size k, its root is exactly the median element.',
          bn: 'যেহেতু নিচের ম্যাক্স-হিপের আকার k + ১ এবং মিন-হিপের আকার k থাকে, তাই এর রুটটিই হয় হুবহু মধ্যমা বা মিডিয়ান।'
        }
      },
      {
        id: 'mt-q4',
        kind: 'mcq',
        topic: 'boundary-ordering-check',
        question: {
          en: 'What condition verifies that the boundary ordering invariant is maintained between the two heaps?',
          bn: 'কোন শর্তটি নিশ্চিত করে যে দুটি হিপের মধ্যে সীমানা ক্রমের ইনভেরিয়েন্ট বজায় আছে?'
        },
        options: [
          {
            en: 'low.peek() <= high.peek()',
            bn: 'low.peek() <= high.peek()'
          },
          {
            en: 'low.peek() > high.peek()',
            bn: 'low.peek() > high.peek()'
          },
          {
            en: 'low.size() == 0',
            bn: 'low.size() == 0'
          },
          {
            en: 'high.size() == 100',
            bn: 'high.size() == 100'
          }
        ],
        answer: 0,
        hint: {
          en: 'Can any number in the lower half be larger than any number in the upper half?',
          bn: 'নিচের অর্ধেকের কোনো সংখ্যা কি ওপরের অর্ধেকের কোনো সংখ্যার চেয়ে বড় হতে পারে?'
        },
        explanation: {
          en: 'Because low contains the smaller half and high contains the larger half, the maximum of low must never exceed the minimum of high.',
          bn: 'যেহেতু low ছোটদের এবং high বড়দের ধারণ করে, তাই low এর সর্বোচ্চ মান কখনোই high এর সর্বনিম্ন মানের চেয়ে বড় হতে পারবে না।'
        }
      }
    ]
  }
};
