import type { Lesson } from '../../../lib/types';

export const theHorizonTradesLesson: Lesson = {
  slug: 'the-horizon-trades',
  tech: 'heaps',
  title: {
    en: 'Top-K Streaming and Bounded Memory Selection',
    bn: 'টপ-কে স্ট্রিমিং এবং সীমিত মেমোরিতে উপাদান নির্বাচন'
  },
  summary: {
    en: 'Identifying the top-k highest scoring items or the kth-largest element in an unbounded data stream is a classic engineering problem across analytics, search rankings, and real-time leaderboards. Storing and sorting all N elements requires O(N log N) time and O(N) memory, which fails when data exceeds physical RAM. By maintaining a Min-Heap of size k, the root functions as an entry gatekeeper. Incoming elements smaller than the threshold are rejected in O(1) time, while qualified candidates update the heap in O(log k) time using strictly O(k) memory.',
    bn: 'একটি অসীম ডেটা স্ট্রিম থেকে শীর্ষ-k সর্বোচ্চ স্কোরের উপাদান অথবা k-তম বৃহত্তম উপাদান খুঁজে বের করা রিয়েল-টাইম লিডারবোর্ড, সার্চ ইঞ্জিন র‍্যাঙ্কিং এবং অ্যানালিটিক্সের একটি ক্লাসিক সমস্যা। সমস্ত N উপাদান সংরক্ষণ করে সাজাতে O(N log N) সময় এবং O(N) মেমোরি লাগে, যা শারীরিক র্যাম শেষ হলে অকেজো হয়ে পড়ে। আকার-k বিশিষ্ট একটি মিন-হিপ বজায় রেখে এর রুটকে প্রবেশদ্বার বা গেটকিপার হিসেবে ব্যবহার করা হয়। থ্রেশহোল্ডের চেয়ে ছোট উপাদানগুলো O(1) সময়ে বাতিল হয় এবং যোগ্য প্রার্থীরা কঠোরভাবে O(k) মেমোরি নিয়ে O(log k) সময়ে হিপ আপডেট করে।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-pilgrimage-bench',
    tech: 'heaps',
    title: {
      en: 'Heap Architecture Synthesis — Cache Locality, D-Ary Heaps, and Tree Bridges',
      bn: 'হিপ আর্কিটেকচার সংশ্লেষ: ক্যাশ লোকালিটি, ডি-অ্যারি হিপ এবং ট্রি সংযোগ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'top-k-problem',
      text: {
        en: 'The Selection Bottleneck: Scaling to Massive Streams',
        bn: 'নির্বাচন সমস্যা: বিশাল স্ট্রিমে ডেটা ফিল্টারিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build live analytics pipelines or online gaming leaderboards, tracking the top 10 players across 100000000 continuous gameplay events is a core requirement. If you attempt to collect all 100000000 scores into an in-memory array and sort them, your process will exhaust available RAM and crash.',
        bn: 'যখন আপনি লাইভ অ্যানালিটিক্স পাইপলাইন বা অনলাইন গেমিং লিডারবোর্ড তৈরি করেন, তখন ১০০০০০০০০ অবিচ্ছিন্ন ইভেন্টের মধ্যে শীর্ষ ১০ জন খেলোয়াড়কে পর্যবেক্ষণ করা একটি অপরিহার্য প্রয়োজন। আপনি যদি সমস্ত ১০০০০০০০০ স্কোর একটি ইন-মেমোরি অ্যারেতে জমা করে সাজাতে চান, তবে সার্ভারের সম্পূর্ণ র্যাম শেষ হয়ে সিস্টেম ক্র্যাশ করবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Min-Heap Gatekeeper pattern solves this with elegant simplicity. To track the k largest elements, we maintain a Min-Heap of fixed capacity k. The root element at index 0 holds the minimum value among the current top-k candidates, acting as an unyielding threshold barrier.',
        bn: 'মিন-হিপ গেটকিপার প্যাটার্ন এই সমস্যার একটি অত্যন্ত চমৎকার সমাধান প্রদান করে। k সংখ্যক বৃহত্তম উপাদান পর্যবেক্ষণ করতে আমরা আকার-k বিশিষ্ট একটি মিন-হিপ বজায় রাখি। ০ নম্বর ইনডেক্সে থাকা রুটটি বর্তমান শীর্ষ-k তালিকার সর্বনিম্ন মানটিকে ধারণ করে এবং একটি অবিচল প্রবেশদ্বার বা থ্রেশহোল্ড হিসেবে কাজ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'min-heap-gatekeeper',
          def: {
            en: 'A fixed-capacity min-heap of size k whose root holds the minimum qualifying threshold for the top-k set.',
            bn: 'আকার-k বিশিষ্ট একটি মিন-হিপ যার রুট শীর্ষ-k তালিকায় প্রবেশের ন্যূনতম মান বা গেটকিপার হিসেবে থাকে।'
          }
        },
        {
          term: 'doorstep-rejection',
          def: {
            en: 'Discarding any incoming stream item smaller than the min-heap root in deterministic O(1) comparison time.',
            bn: 'মিন-হিপের রুটের চেয়ে ছোট যেকোনো নতুন উপাদানকে দরজাতেই O(1) সময়ে সরাসরি বাতিল করে দেওয়া।'
          }
        },
        {
          term: 'kth-largest-element',
          def: {
            en: 'The threshold value residing at index 0 of the size-k min-heap, separating the top-k largest elements from all others.',
            bn: 'আকার-k মিন-হিপের ০ নম্বর ইনডেক্সে থাকা মান যা শীর্ষ-k উপাদানকে বাকি উপাদানগুলো থেকে পৃথক করে।'
          }
        },
        {
          term: 'bounded-memory-footprint',
          def: {
            en: 'Guaranteeing that RAM usage never exceeds O(k) items regardless of how many billions of stream events arrive.',
            bn: 'যত কোটি ইভেন্টই আসুক না কেন র্যাম মেমোরি খরচ কঠোরভাবে O(k) উপাদানে সীমাবদ্ধ রাখার নিশ্চয়তা।'
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
      id: 'selection-strategy-table',
      text: {
        en: 'Algorithmic Comparison: Full Sort vs Quickselect vs Size-k Min-Heap',
        bn: 'অ্যালগরিদমিক তুলনা: পূর্ণ বাছাই বনাম কুইকসিলেক্ট বনাম আকার-k মিন-হিপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When choosing an algorithm for top-k selection, developers evaluate memory footprint, streaming compatibility, and worst-case guarantees. Quickselect is fast for offline in-memory arrays, but cannot handle infinite streaming feeds. A size-k Min-Heap delivers bounded O(k) memory and real-time updates.',
        bn: 'শীর্ষ-k উপাদান নির্বাচনের অ্যালগরিদম বাছাইয়ের সময় প্রকৌশলীরা মেমোরির ব্যবহার, স্ট্রিমিং সক্ষমতা এবং সবচেয়ে খারাপ ক্ষেত্রের নিশ্চয়তা যাচাই করেন। মেমরিতে থাকা স্থির ডেটার জন্য কুইকসিলেক্ট দ্রুত হলেও এটি অসীম স্ট্রিম পরিচালনা করতে পারে না। আকার-k মিন-হিপ কঠোরভাবে O(k) মেমোরি এবং তাত্ক্ষণিক রিয়েল-টাইম আপডেট সরবরাহ করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Selection Strategy', bn: 'নির্বাচন কৌশল' },
        { en: 'Time Complexity', bn: 'সময় জটিলতা' },
        { en: 'Memory Footprint', bn: 'মেমোরি খরচ' },
        { en: 'Streaming Capability', bn: 'স্ট্রিমিং সক্ষমতা' }
      ],
      rows: [
        [
          { en: 'Full Array Sort', bn: 'সম্পূর্ণ অ্যারে বাছাই' },
          { en: 'O(N log N)', bn: 'O(N log N)' },
          { en: 'O(N) entire dataset in RAM', bn: 'O(N) সমস্ত ডেটা র্যামে থাকতে হবে' },
          { en: 'Offline only', bn: 'কেবল অফলাইনে সম্ভব' }
        ],
        [
          { en: 'Quickselect Partition', bn: 'কুইকসিলেক্ট পার্টিশন' },
          { en: 'O(N) average, O(N^2) worst', bn: 'O(N) গড়, O(N^2) সবচেয়ে খারাপ' },
          { en: 'O(N) mutable random access array', bn: 'O(N) পরিবর্তনযোগ্য অ্যারে মেমোরি' },
          { en: 'Offline only', bn: 'কেবল অফলাইনে সম্ভব' }
        ],
        [
          { en: 'Size-k Min-Heap Gatekeeper', bn: 'আকার-k মিন-হিপ গেটকিপার' },
          { en: 'O(N log k) guaranteed', bn: 'O(N log k) নিশ্চিত' },
          { en: 'Strictly O(k) elements in RAM', bn: 'কঠোরভাবে মাত্র O(k) উপাদান র্যামে' },
          { en: 'Fully online & real-time', bn: 'সম্পূর্ণ অনলাইন এবং রিয়েল-টাইম' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-topk-code',
      text: {
        en: 'Executable Top-K Stream Tracker Implementation',
        bn: 'টপ-কে স্ট্রিম ট্র্যাকারের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program tracks the top 3 highest numbers across a continuous stream of 7 values. Notice how pushing 15 is rejected in O(1) time because 15 is smaller than the current 3rd largest threshold 20.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৭টি মানের একটি চলমান স্ট্রিম থেকে শীর্ষ ৩টি সর্বোচ্চ সংখ্যা ট্র্যাক করে। লক্ষ্য করুন কীভাবে ১৫ যুক্ত করার সময় O(1) সময়ে তা বাতিল হয়ে যায় কারণ ১৫ বর্তমান ৩য় বৃহত্তম মান ২০ এর চেয়ে ছোট।'
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

class TopKTracker {
  constructor(k) {
    this.k = k;
    this.heap = new MinHeap();
  }

  add(val) {
    if (this.heap.size() < this.k) {
      this.heap.push(val);
    } else if (val > this.heap.peek()) {
      this.heap.pop();
      this.heap.push(val);
    }
  }

  getKthLargest() {
    return this.heap.peek();
  }

  getTopK() {
    return [...this.heap.data].sort((a, b) => b - a);
  }
}

const tracker = new TopKTracker(3);
const stream = [10, 50, 20, 80, 15, 90, 70];

for (const val of stream) {
  tracker.add(val);
  console.log(\`Pushed \${val} -> 3rd Largest: \${tracker.getKthLargest()}, Top-3: [\${tracker.getTopK().join(', ')}]\`);
}
// Output: Pushed 10 -> 3rd Largest: 10, Top-3: [10]
// Output: Pushed 50 -> 3rd Largest: 10, Top-3: [50, 10]
// Output: Pushed 20 -> 3rd Largest: 10, Top-3: [50, 20, 10]
// Output: Pushed 80 -> 3rd Largest: 20, Top-3: [80, 50, 20]
// Output: Pushed 15 -> 3rd Largest: 20, Top-3: [80, 50, 20]
// Output: Pushed 90 -> 3rd Largest: 50, Top-3: [90, 80, 50]
// Output: Pushed 70 -> 3rd Largest: 70, Top-3: [90, 80, 70]`
    },
    {
      type: 'heading',
      id: 'production-ranking-engines',
      text: {
        en: 'Production Systems: Real-Time Gaming Leaderboards and Search',
        bn: 'বাস্তব সিস্টেম: গেমিং লিডারবোর্ড এবং সার্চ ইঞ্জিন র‍্যাঙ্কিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Search engines like Apache Lucene and Elasticsearch use bounded priority queues to collect top search results. When a search query matches 5000000 documents, Lucene evaluates document scores through a size-k min-heap collector. Low-scoring documents are discarded instantly at the door, ensuring the cluster avoids allocating large result buffers.',
        bn: 'অ্যাপাচি লুসিন এবং ইলাস্টিকসার্চের মতো সার্চ ইঞ্জিনগুলো শীর্ষ ফলাফল সংগ্রহ করতে সীমাবদ্ধ প্রায়োরিটি কিউ ব্যবহার করে। যখন কোনো সার্চ কোয়েরির সাথে ৫০০০০০০ ডকুমেন্টের মিল পাওয়া যায়, তখন লুসিন আকার-k মিন-হিপের মাধ্যমে স্কোর পরীক্ষা করে। কম স্কোরের নথিগুলো প্রবেশদ্বারেই বাতিল হয়ে যায়, যার ফলে ক্লাস্টারে অপ্রয়োজনীয় বিশাল বাফার মেমোরি বরাদ্দের অপচয় রোধ হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Inverse heap orientation: Tracking the k largest elements requires a Min-Heap so the qualifying minimum sits at the root.',
          bn: 'বিপরীত হিপের নীতি: k সংখ্যক বৃহত্তম উপাদান পর্যবেক্ষণ করতে মিন-হিপ লাগে যাতে সর্বনিম্ন গ্রহণযোগ্য মানটি রুটে থাকে।'
        },
        {
          en: 'Instant doorstep rejection: Incoming stream elements that fail to beat the root threshold are discarded in O(1) time.',
          bn: 'দরজাতেই তাৎক্ষণিক বাতিল: যেসব উপাদান রুটের চেয়ে ছোট সেগুলো কোনো মেমোরি খরচ না করে O(1) সময়ে বাতিল হয়।'
        },
        {
          en: 'Bounded O(k) memory: RAM consumption remains fixed at k items, independent of whether stream size N is millions or billions.',
          bn: 'সীমাবদ্ধ O(k) মেমোরি: স্ট্রিমের আকার N লক্ষ বা কোটি যাই হোক না কেন র্যাম খরচ কঠোরভাবে k উপাদানে স্থির থাকে।'
        },
        {
          en: 'Search engine standard: Systems like Lucene and Elasticsearch use size-k min-heaps to collect top query hits efficiently.',
          bn: 'সার্চ ইঞ্জিন স্ট্যান্ডার্ড: লুসিন এবং ইলাস্টিকসার্চের মতো সিস্টেমগুলো আকার-k মিন-হিপ দিয়ে দ্রুত শীর্ষ ফলাফল সংগ্রহ করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ht-ex1',
      kind: 'mcq',
      topic: 'why-min-heap-for-k-largest',
      question: {
        en: 'Why do we use a Min-Heap rather than a Max-Heap when tracking the k largest elements in a stream?',
        bn: 'স্ট্রিমে k সংখ্যক বৃহত্তম উপাদান পর্যবেক্ষণ করার জন্য আমরা কেন ম্যাক্স-হিপের বদলে মিন-হিপ ব্যবহার করি?'
      },
      options: [
        {
          en: 'The root of the Min-Heap holds the smallest of the top-k candidates, acting as the entry threshold that any newcomer must beat',
          bn: 'মিন-হিপের রুট শীর্ষ-k প্রার্থীদের মধ্যে সবচেয়ে ছোটটিকে ধারণ করে, যা যেকোনো নতুন উপাদানের জন্য প্রবেশের ন্যূনতম বাধা হিসেবে কাজ করে'
        },
        {
          en: 'Because Max-Heaps cannot store positive integers',
          bn: 'কারণ ম্যাক্স-হিপ ধনাত্মক পূর্ণসংখ্যা সংরক্ষণ করতে পারে না'
        },
        {
          en: 'Because Min-Heaps consume 0 clock cycles on modern CPUs',
          bn: 'কারণ আধুনিক সিপিইউতে মিন-হিপ ০ ক্লক সাইকেল খরচ করে'
        },
        {
          en: 'To force all numbers to be sorted in reverse order',
          bn: 'সমস্ত সংখ্যাকে জোরপূর্বক বিপরীত ক্রমে সাজানোর জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'Which element needs to be evicted when a larger newcomer arrives: the largest of the top-k or the smallest of the top-k?',
        bn: 'নতুন কোনো বড় সংখ্যা এলে বর্তমান শীর্ষ-k থেকে কাকে বের করে দিতে হবে: সবচেয়ে বড়টিকে না সবচেয়ে ছোটটিকে?'
      },
      explanation: {
        en: 'To make room for a new qualifying element, the smallest element currently in the top-k must be evicted. A Min-Heap exposes this smallest candidate at root index 0 in O(1) time.',
        bn: 'নতুন উপাদানকে জায়গা দিতে হলে বর্তমান শীর্ষ-k এর সবচেয়ে ছোট উপাদানটিকে বের করতে হবে। মিন-হিপ ০ নম্বর রুটে O(1) সময়ে এই ক্ষুদ্রতম প্রার্থীকে সামনে রাখে।'
      }
    },
    {
      id: 'ht-ex2',
      kind: 'mcq',
      topic: 'doorstep-rejection-complexity',
      question: {
        en: 'What is the time complexity to reject an incoming number that is smaller than the current kth-largest threshold?',
        bn: 'বর্তমান k-তম বৃহত্তম মানের চেয়ে ছোট একটি নতুন উপাদানকে বাতিল করার সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(1) constant time, by performing a single comparison against the heap root',
          bn: 'O(1) ধ্রুবক সময়, হিপ রুটের সাথে মাত্র একটি একক তুলনা করার মাধ্যমে'
        },
        {
          en: 'O(k) linear scan time',
          bn: 'O(k) রৈখিক স্ক্যানের সময়'
        },
        {
          en: 'O(log k) tree height time',
          bn: 'O(log k) ট্রি উচ্চতার সময়'
        },
        {
          en: 'O(k log k) time',
          bn: 'O(k log k) সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Does an element that is smaller than the root require any swaps or heap modifications?',
        bn: 'রুটের চেয়ে ছোট কোনো উপাদান কি হিপে কোনো অদলবদল বা পরিবর্তনের প্রয়োজন ঘটায়?'
      },
      explanation: {
        en: 'If val <= heap.peek(), the element is ignored immediately. Only 1 scalar comparison is performed in O(1) time.',
        bn: 'যদি val <= heap.peek() হয়, তবে উপাদানটি সাথে সাথে বাদ দেওয়া হয়। মাত্র ১টি তুলনার প্রয়োজন হওয়ায় এতে O(1) সময় লাগে।'
      }
    },
    {
      id: 'ht-ex3',
      kind: 'mcq',
      topic: 'top-k-memory-consumption',
      question: {
        en: 'How much memory space is required by the TopKTracker data structure to process 100000000 stream events with k = 100?',
        bn: 'k = ১০০ এর জন্য ১০০০০০০০০ ইভেন্টের একটি স্ট্রিম প্রসেস করতে TopKTracker ডেটা স্ট্রাকচারে কতটুকু মেমোরি লাগে?'
      },
      options: [
        {
          en: 'Strictly O(k) memory, holding at most 100 numbers in RAM regardless of stream size',
          bn: 'কঠোরভাবে O(k) মেমোরি, স্ট্রিমের আকার যাই হোক না কেন র্যামে সর্বোচ্চ ১০০টি সংখ্যা ধরে রাখে'
        },
        {
          en: '100000000 numbers in full memory buffer',
          bn: 'সম্পূর্ণ মেমোরি বাফারে ১০০০০০০০০ সংখ্যা'
        },
        {
          en: 'O(N * k) space',
          bn: 'O(N * k) স্থান'
        },
        {
          en: 'Zero bytes',
          bn: 'শূন্য বাইট'
        }
      ],
      answer: 0,
      hint: {
        en: 'Does the heap grow beyond size k as more stream elements arrive?',
        bn: 'নতুন উপাদান আসার সাথে সাথে হিপ কি আকার k এর চেয়ে বড় হয়?'
      },
      explanation: {
        en: 'Once the heap reaches capacity k, every qualifying newcomer replaces the popped root. Memory consumption remains strictly bounded at k items.',
        bn: 'হিপের আকার k এ পৌঁছানোর পর প্রতিটি যোগ্য নতুন উপাদান পুরোনো রুটকে প্রতিস্থাপন করে। ফলে মেমোরি কঠোরভাবে k উপাদানে স্থির থাকে।'
      }
    }
  ],
  quiz: {
    id: 'the-horizon-trades-quiz',
    title: {
      en: 'Top-K Streaming and Bounded Memory Selection Quiz',
      bn: 'টপ-কে স্ট্রিমিং এবং সীমিত মেমোরি নির্বাচন কুইজ'
    },
    questions: [
      {
        id: 'ht-q1',
        kind: 'mcq',
        topic: 'kth-largest-inspection-cost',
        question: {
          en: 'What is the time complexity to query the current kth-largest element from a size-k Min-Heap?',
          bn: 'আকার-k বিশিষ্ট একটি মিন-হিপ থেকে বর্তমান k-তম বৃহত্তম উপাদানটি জানার সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(1) constant time, because the kth-largest element is always at index 0 (the root)',
            bn: 'O(1) ধ্রুবক সময়, কারণ k-তম বৃহত্তম উপাদানটি সর্বদা ০ নম্বর ইনডেক্সে (রুটে) অবস্থান করে'
          },
          {
            en: 'O(log k) time',
            bn: 'O(log k) সময়'
          },
          {
            en: 'O(k) time',
            bn: 'O(k) সময়'
          },
          {
            en: 'O(k log k) time',
            bn: 'O(k log k) সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The top-k largest elements reside in the heap, and the root is the smallest among those top-k.',
          bn: 'শীর্ষ-k উপাদানগুলো হিপে থাকে এবং রুট হলো সেই শীর্ষ-k এর মধ্যে সবচেয়ে ছোটটি।'
        },
        explanation: {
          en: 'The smallest among the top-k largest elements is by definition the kth-largest element overall, accessible at heap[0] in O(1) time.',
          bn: 'শীর্ষ-k উপাদানের মধ্যে যেটি সবচেয়ে ছোট সেটিই সংজ্ঞাগতভাবে পুরো ডেটার k-তম বৃহত্তম মান, যা ০ নম্বরে O(1) সময়ে পাওয়া যায়।'
        }
      },
      {
        id: 'ht-q2',
        kind: 'mcq',
        topic: 'top-k-worst-case-time',
        question: {
          en: 'What is the worst-case time complexity to process N stream elements using a size-k Min-Heap?',
          bn: 'আকার-k বিশিষ্ট মিন-হিপ ব্যবহার করে N সংখ্যক স্ট্রিম উপাদান প্রসেস করার সবচেয়ে খারাপ ক্ষেত্রে সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(N log k), occurring when elements arrive in strictly ascending order so every item updates the heap',
            bn: 'O(N log k), যা ঘটে যখন উপাদানগুলো কঠোরভাবে ঊর্ধ্বক্রমে আসে এবং প্রতিটি উপাদান হিপ আপডেট করে'
          },
          {
            en: 'O(N log N) time',
            bn: 'O(N log N) সময়'
          },
          {
            en: 'O(N * k) time',
            bn: 'O(N * k) সময়'
          },
          {
            en: 'O(N^2) time',
            bn: 'O(N^2) সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'At most, each element causes one pop and one push into a heap of size k.',
          bn: 'সর্বোচ্চ ক্ষেত্রে প্রতিটি উপাদান আকার-k হিপে একটি পপ এবং একটি পুশ ঘটায়।'
        },
        explanation: {
          en: 'Even in the worst case where every element enters the heap, each update costs O(log k), guaranteeing O(N log k) total time.',
          bn: 'এমনকি সব উপাদান হিপে ঢুকলেও প্রতি আপডেটে O(log k) কাজ হওয়ায় সামগ্রিক সময় O(N log k) এর নিচে থাকে।'
        }
      },
      {
        id: 'ht-q3',
        kind: 'mcq',
        topic: 'lucene-search-collector-pattern',
        question: {
          en: 'How does Apache Lucene avoid running out of RAM when a search query matches millions of documents?',
          bn: 'একটি সার্চ কোয়েরিতে লক্ষ লক্ষ নথির মিল পাওয়া গেলেও অ্যাপাচি লুসিন কীভাবে র্যাম শেষ হওয়া থেকে রক্ষা পায়?'
        },
        options: [
          {
            en: 'It collects matching document hits into a size-k priority queue, immediately discarding low-scoring hits without allocating RAM buffers',
            bn: 'এটি আকার-k প্রায়োরিটি কিউতে ফলাফল সংগ্রহ করে এবং অতিরিক্ত মেমোরি বরাদ্দ না করে কম স্কোরের ফলাফলগুলো তাৎক্ষণিক বাতিল করে দেয়'
          },
          {
            en: 'It writes all millions of matching documents to temporary files on disk',
            bn: 'এটি লক্ষ লক্ষ সব নথির ডেটা ডিস্কের অস্থায়ী ফাইলে লিখে রাখে'
          },
          {
            en: 'It sends results directly over UDP network packets',
            bn: 'এটি সরাসরি ইউডিপি নেটওয়ার্ক প্যাকেটে ফলাফল পাঠায়'
          },
          {
            en: 'It terminates the query after inspecting the first 10 documents',
            bn: 'এটি প্রথম ১০টি নথি দেখার পরেই কোয়েরি বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The user only wants the top 10 or 20 search results (k = 10 or 20).',
          bn: 'ব্যবহারকারী কেবল শীর্ষ ১০ বা ২০টি ফলাফল দেখতে চান (k = ১০ বা ২০)।'
        },
        explanation: {
          en: 'Lucene tracks only the top-k highest scoring documents using a bounded min-heap collector, bounding memory usage to O(k).',
          bn: 'লুসিন একটি সীমাবদ্ধ মিন-হিপের সাহায্যে কেবল শীর্ষ-k স্কোরযুক্ত নথি সংরক্ষণ করে, ফলে মেমোরি খরচ O(k) এ সীমাবদ্ধ থাকে।'
        }
      },
      {
        id: 'ht-q4',
        kind: 'mcq',
        topic: 'extracting-sorted-top-k-results',
        question: {
          en: 'At the end of processing, how much time does it take to produce the final top-k elements sorted in descending order from the size-k heap?',
          bn: 'প্রসেসিং শেষে আকার-k হিপ থেকে শীর্ষ-k উপাদানগুলোকে অধঃক্রমে সাজিয়ে পেতে কত সময় লাগে?'
        },
        options: [
          {
            en: 'O(k log k) time, by popping the k elements or sorting the internal k-element array buffer',
            bn: 'O(k log k) সময়, k টি উপাদান পপ করে অথবা অভ্যন্তরীণ k-উপাদানের অ্যারে সাজিয়ে'
          },
          {
            en: 'O(N log N) time',
            bn: 'O(N log N) সময়'
          },
          {
            en: 'O(1) constant time',
            bn: 'O(1) ধ্রুবক সময়'
          },
          {
            en: 'O(N) time',
            bn: 'O(N) সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The heap contains exactly k elements at the end.',
          bn: 'কাজ শেষে হিপের মধ্যে ঠিক k সংখ্যক উপাদান থাকে।'
        },
        explanation: {
          en: 'Sorting the small array of k elements takes O(k log k) time, which is completely independent of the total stream volume N.',
          bn: 'k উপাদানের ছোট অ্যারেকে সাজাতে মাত্র O(k log k) সময় লাগে, যা মূল স্ট্রিমের আকার N এর ওপর মোটেও নির্ভরশীল নয়।'
        }
      }
    ]
  }
};
