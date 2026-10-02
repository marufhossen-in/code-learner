import type { Lesson } from '../../../lib/types';

export const theKWayTournamentLesson: Lesson = {
  slug: 'k-way-tournament',
  tech: 'heaps',
  title: {
    en: 'K-Way Stream Merging — Priority Queues in External Storage and LSM-Trees',
    bn: 'কে-ওয়ে স্ট্রিম একত্রীকরণ: এক্সটার্নাল স্টোরেজ এবং এলএসএম-ট্রিতে প্রায়োরিটি কিউ'
  },
  summary: {
    en: 'Merging k sorted data streams into a single unified stream is a foundational operation in modern databases, search engines, and distributed file systems. A naive linear scan inspects all k streams for each element, taking O(N * k) time. By maintaining a Min-Heap of size k containing the current head of each stream, we extract the global minimum and advance the corresponding stream in O(log k) time. Total time drops to O(N log k) while RAM usage remains strictly capped at O(k) elements, enabling petabyte-scale external sorting.',
    bn: 'k সংখ্যক সাজানো ডেটা স্ট্রিমকে একটি একক স্ট্রিমে মার্জ করা আধুনিক ডাটাবেস, সার্চ ইঞ্জিন এবং ডিস্ট্রিবিউটেড ফাইল সিস্টেমের একটি মৌলিক অপারেশন। একটি সাধারণ লিনিয়ার স্ক্যান প্রতিটি উপাদানের জন্য k টি স্ট্রিম পরীক্ষা করে O(N * k) সময় নেয়। প্রতিটি স্ট্রিমের বর্তমান শীর্ষ উপাদান নিয়ে আকার-k বিশিষ্ট একটি মিন-হিপ বজায় রেখে আমরা O(log k) সময়ে বৈশ্বিক সর্বনিম্ন মানটি বের করি এবং সংশ্লিষ্ট স্ট্রিমটিকে এক ধাপ এগিয়ে দিই। এতে মোট সময় O(N log k) এ নেমে আসে এবং র্যাম মেমোরি কঠোরভাবে মাত্র O(k) উপাদানে সীমাবদ্ধ থাকে, যা পেটা-বাইট স্কেলের এক্সটার্নাল সর্টিং সম্ভব করে।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-mirror-thrones',
    tech: 'heaps',
    title: {
      en: 'Dual-Heap Streaming Median — Balancing Max and Min Heaps',
      bn: 'ডুয়াল-হিপ স্ট্রিমিং মিডিয়ান: ম্যাক্স এবং মিন হিপের ভারসাম্য'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'k-way-merge-problem',
      text: {
        en: 'The Challenge: Merging Multiple Sorted Feeds at Scale',
        bn: 'চ্যালেঞ্জ: বড় পরিসরে একাধিক সাজানো ডেটা মার্জ করা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When building log aggregators, search engine indexers, or database storage engines, you frequently confront the task of merging k sorted inputs. For instance, you might have 100 sorted server log files and want to display a single chronological feed of 10000000 events without loading all files into RAM simultaneously.',
        bn: 'লগ এগ্রিগেটর, সার্চ ইঞ্জিন ইনডেক্সার বা ডাটাবেস ইঞ্জিন তৈরির সময় আপনাকে প্রায়শই k সংখ্যক সাজানো ইনপুট মার্জ করতে হয়। উদাহরণস্বরূপ, আপনার কাছে ১০০টি সাজানো সার্ভার লগ ফাইল থাকতে পারে এবং আপনি সমস্ত ফাইল একবারে র্যামে লোড না করে ১০০০০০০০ ইভেন্টের একটি একক ক্রমানুসারে তালিকা দেখতে চান।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'If you scan all k stream pointers linearly for every emitted element, finding the minimum takes O(k) comparisons. Across N total elements, this results in O(N * k) operations. When k grows to 1000 streams, this quadratic overhead brings data processing to an absolute crawl.',
        bn: 'আপনি যদি প্রতিটি উপাদানের জন্য লিনিয়ারভাবে সমস্ত k স্ট্রিম স্ক্যান করেন, তবে সর্বনিম্ন মান খুঁজে পেতে প্রতিবার O(k) তুলনা লাগে। মোট N উপাদানের জন্য এতে O(N * k) অপারেশন প্রয়োজন হয়। স্ট্রিমের সংখ্যা k বেড়ে ১০০০ হলে এই বিলম্ব পুরো ডেটা প্রসেসিং সিস্টেমকে অত্যন্ত ধীরগতির করে ফেলে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'k-way-merge',
          def: {
            en: 'An algorithm that combines k independently sorted data sequences into a single globally sorted output sequence.',
            bn: 'এমন একটি অ্যালগরিদম যা k সংখ্যক স্বাধীনভাবে সাজানো ডেটা সিকোয়েন্সকে একটি একক বৈশ্বিক সিকোয়েন্সে একত্রিত করে।'
          }
        },
        {
          term: 'head-pointer-tournament',
          def: {
            en: 'Maintaining an active pointer to the current leading item of each stream and competing them in a min-heap.',
            bn: 'প্রতিটি স্ট্রিমের বর্তমান শীর্ষ উপাদানের ওপর একটি পয়েন্টার রেখে তাদের একটি মিন-হিপে প্রতিযোগিতা করানো।'
          }
        },
        {
          term: 'lsm-tree-compaction',
          def: {
            en: 'The background database process in engines like RocksDB and Cassandra that merges multiple sorted SSTable disk files into a consolidated file.',
            bn: 'রকসডিবি এবং ক্যাসান্দ্রার মতো ডাটাবেসের ব্যাকগ্রাউন্ড প্রক্রিয়া যা একাধিক সাজানো ডিস্ক ফাইলকে একটি একক ফাইলে মার্জ করে।'
          }
        },
        {
          term: 'external-merge-sort',
          def: {
            en: 'A sorting strategy that sorts data chunks in RAM, spills sorted runs to disk, and merges them using a size-k min-heap.',
            bn: 'একটি কৌশল যা র্যামে ছোট ছোট অংশ সাজিয়ে ডিস্কে লেখে এবং আকার-k মিন-হিপের সাহায্যে সম্পূর্ণ ডেটা মার্জ করে।'
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
      id: 'complexity-analysis-table',
      text: {
        en: 'Complexity Trade-offs: Linear Scan vs Min-Heap Merging',
        bn: 'জটিলতার তুলনা: লিনিয়ার স্ক্যান বনাম মিন-হিপ একত্রীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A Min-Heap of size k solves this bottleneck completely. Instead of scanning all k heads, the root of the heap provides the next minimum element in O(1) peek time. After removing the root, we pull the next item from that specific stream and sift it down in O(log k) time. Memory consumption remains locked at O(k) elements in RAM.',
        bn: 'আকার-k বিশিষ্ট একটি মিন-হিপ এই সীমাবদ্ধতা দূর করে। সমস্ত k শীর্ষ স্ক্যান করার বদলে হিপের রুট মাত্র O(1) পিক সময়ে পরবর্তী সর্বনিম্ন উপাদানটি সরবরাহ করে। রুট সরানোর পর সংশ্লিষ্ট স্ট্রিম থেকে কেবল পরবর্তী উপাদান এনে O(log k) সময়ে নিচে নামিয়ে দেওয়া হয়। ফলে মেমোরি খরচ কঠোরভাবে মাত্র O(k) উপাদানে সীমাবদ্ধ থাকে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Merge Strategy', bn: 'মার্জ কৌশল' },
        { en: 'Time Complexity', bn: 'সময় জটিলতা' },
        { en: 'RAM Memory Footprint', bn: 'র্যাম মেমোরি খরচ' },
        { en: 'Streaming Feasibility', bn: 'স্ট্রিমিং উপযোগিতা' }
      ],
      rows: [
        [
          { en: 'Full Concatenation & Sort', bn: 'সম্পূর্ণ একত্রীকরণ ও বাছাই' },
          { en: 'O(N log N)', bn: 'O(N log N)' },
          { en: 'O(N) must buffer all data in RAM', bn: 'O(N) সমস্ত ডেটা র্যামে থাকতে হবে' },
          { en: 'Impossible for unbounded streams', bn: 'অসীম স্ট্রিমে অসম্ভব' }
        ],
        [
          { en: 'Linear Pointer Scan', bn: 'লিনিয়ার পয়েন্টার স্ক্যান' },
          { en: 'O(N * k)', bn: 'O(N * k)' },
          { en: 'O(k) stream head pointers', bn: 'O(k) স্ট্রিম হেড পয়েন্টার' },
          { en: 'Feasible but slow for large k', bn: 'সম্ভব কিন্তু বড় k এর জন্য ধীর' }
        ],
        [
          { en: 'Min-Heap Tournament', bn: 'মিন-হিপ টুর্নামেন্ট' },
          { en: 'O(N log k)', bn: 'O(N log k)' },
          { en: 'O(k) size-k min heap buffer', bn: 'O(k) আকার-k মিন হিপ বাফার' },
          { en: 'Optimal pipeline for massive streams', bn: 'বিশাল স্ট্রিমের জন্য সেরা পাইপলাইন' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-kway-merge-code',
      text: {
        en: 'Executable K-Way Stream Merge Implementation',
        bn: 'কে-ওয়ে স্ট্রিম একত্রীকরণের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program merges 3 pre-sorted data streams into a single globally ordered stream using a size-3 Min-Heap. Notice how only 1 head element per stream lives in the heap at any instant.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি আকার-৩ মিন-হিপ ব্যবহার করে ৩টি পূর্ব-সাজানো ডেটা স্ট্রিমকে একটি একক সুশৃঙ্খল স্ট্রিমে মার্জ করে। লক্ষ্য করুন কীভাবে যেকোনো মুহূর্তে প্রতিটি স্ট্রিমের মাত্র ১টি করে হেড উপাদান হিপে অবস্থান করে।'
      }
    },
    {
      type: 'code',
      code: `class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(item) {
    this.heap.push(item);
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

  size() {
    return this.heap.length;
  }

  _siftUp(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[i].val < this.heap[p].val) {
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
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      if (l < n && this.heap[l].val < this.heap[best].val) best = l;
      if (r < n && this.heap[r].val < this.heap[best].val) best = r;
      if (best !== i) {
        const tmp = this.heap[i];
        this.heap[i] = this.heap[best];
        this.heap[best] = tmp;
        i = best;
      } else break;
    }
  }
}

function mergeKSortedStreams(streams) {
  const heap = new MinHeap();
  const pointers = new Array(streams.length).fill(0);
  const result = [];

  // Initialize heap with first element of each stream
  for (let i = 0; i < streams.length; i++) {
    if (streams[i].length > 0) {
      heap.push({ val: streams[i][0], streamIdx: i });
      pointers[i] = 1;
    }
  }

  while (heap.size() > 0) {
    const { val, streamIdx } = heap.pop();
    result.push(val);

    // If that stream has more elements, push next
    if (pointers[streamIdx] < streams[streamIdx].length) {
      const nextVal = streams[streamIdx][pointers[streamIdx]++];
      heap.push({ val: nextVal, streamIdx });
    }
  }

  return result;
}

const streamA = [10, 40, 70];
const streamB = [20, 50, 80];
const streamC = [30, 60, 90];
const merged = mergeKSortedStreams([streamA, streamB, streamC]);

console.log('Merged 3 streams:', merged.join(', '));
// Output: Merged 3 streams: 10, 20, 30, 40, 50, 60, 70, 80, 90
console.log('Total elements merged:', merged.length);
// Output: Total elements merged: 9
console.log('First element:', merged[0]);
// Output: First element: 10
console.log('Last element:', merged[merged.length - 1]);
// Output: Last element: 90`
    },
    {
      type: 'heading',
      id: 'database-compaction-architecture',
      text: {
        en: 'Production Systems: RocksDB and ClickHouse SSTable Compaction',
        bn: 'বাস্তব সিস্টেম: রকসডিবি এবং ক্লিকহাউসে এসএসটেবিল কম্প্যাকশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Log-Structured Merge-tree (LSM) engines power modern NoSQL databases like RocksDB, Apache Cassandra, and Google Bigtable. Because writes append directly to immutable SSTable disk files, background threads run periodic compaction jobs. Using a size-k min-heap tournament, the compaction thread merges multiple obsolete disk runs into a consolidated new SSTable while purging tombstone deletions in O(N log k) streaming time.',
        bn: 'লগ-স্ট্রাকচার্ড মার্জ-ট্রি (LSM) ইঞ্জিন রকসডিবি, অ্যাপাচি ক্যাসান্দ্রা এবং গুগল বিগটেবলের মতো নোএসকিউএল ডাটাবেসের মেরুদণ্ড হিসেবে কাজ করে। যেহেতু রাইট অপারেশনগুলো সরাসরি অপরিবর্তনীয় এসএসটেবিল ফাইলে লেখা হয়, তাই ব্যাকগ্রাউন্ড থ্রেডগুলো পর্যায়ক্রমিক কম্প্যাকশন পরিচালনা করে। একটি আকার-k মিন-হিপের সাহায্যে কম্প্যাকশন থ্রেড একাধিক পুরোনো ডিস্ক রানকে মার্জ করে এবং O(N log k) স্ট্রিমিং সময়ে বাতিল ডেটা সরিয়ে একটি নতুন সতেজ ফাইল তৈরি করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Logarithmic per-element cost: Min-heap selection drops candidate evaluation from O(k) linear scan to O(log k) heap operations.',
          bn: 'উপাদান প্রতি লগারিদমিক খরচ: মিন-হিপ ব্যবহার প্রার্থী নির্বাচনের খরচ রৈখিক O(k) থেকে কমিয়ে O(log k) তে নামিয়ে আনে।'
        },
        {
          en: 'Strictly bounded memory: RAM footprint depends only on stream count k, not the total volume of streamed data N.',
          bn: 'কঠোরভাবে নিয়ন্ত্রিত মেমোরি: র্যামের ব্যবহার কেবল স্ট্রিমের সংখ্যা k এর ওপর নির্ভর করে, মোট ডেটার পরিমাণ N এর ওপর নয়।'
        },
        {
          en: 'External sorting engine: Merging sorted on-disk runs enables sorting datasets hundreds of times larger than physical RAM.',
          bn: 'এক্সটার্নাল সর্টিং ইঞ্জিন: ডিস্কে থাকা সাজানো অংশগুলোকে মার্জ করে শারীরিক র্যামের চেয়ে শত গুণ বড় ডেটাসেট সাজানো যায়।'
        },
        {
          en: 'Database compaction standard: LSM-tree engines rely on k-way tournament heaps to perform background SSTable consolidation.',
          bn: 'ডাটাবেস কম্প্যাকশন স্ট্যান্ডার্ড: এলএসএম-ট্রি ইঞ্জিনগুলো ব্যাকগ্রাউন্ডে এসএসটেবিল একত্রীকরণে কে-ওয়ে টুর্নামেন্ট হিপের ওপর নির্ভর করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'kw-ex1',
      kind: 'mcq',
      topic: 'k-way-merge-time-complexity',
      question: {
        en: 'What is the total time complexity to merge k sorted streams containing a total of N elements using a Min-Heap?',
        bn: 'মিন-হিপ ব্যবহার করে সর্বমোট N সংখ্যক উপাদান বিশিষ্ট k টি সাজানো স্ট্রিম মার্জ করার মোট সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(N log k), because each of the N elements performs one O(log k) sift-down upon extraction',
          bn: 'O(N log k), কারণ N সংখ্যক উপাদানের প্রতিটি নিষ্কাশনের সময় একটি করে O(log k) শিফট-ডাউন সম্পাদন করে'
        },
        {
          en: 'O(N * k)',
          bn: 'O(N * k)'
        },
        {
          en: 'O(k log N)',
          bn: 'O(k log N)'
        },
        {
          en: 'O(N^2)',
          bn: 'O(N^2)'
        }
      ],
      answer: 0,
      hint: {
        en: 'The size of the heap is at most k, and every element passes through the heap exactly once.',
        bn: 'হিপের সর্বোচ্চ আকার হলো k, এবং প্রতিটি উপাদান ঠিক একবার করে হিপের মধ্য দিয়ে যায়।'
      },
      explanation: {
        en: 'For each of the N total elements, we pop the root and push the next element from that stream in O(log k) time, yielding O(N log k).',
        bn: 'মোট N টি উপাদানের প্রতিটির জন্য O(log k) সময়ে রুট অপসারণ এবং নতুন উপাদান যোগ করা হয়, যার ফলে মোট সময় O(N log k) হয়।'
      }
    },
    {
      id: 'kw-ex2',
      kind: 'mcq',
      topic: 'k-way-merge-ram-usage',
      question: {
        en: 'How much RAM memory space is consumed by the heap data structure when merging 100 sorted files containing 50000000 records?',
        bn: '৫০০০০০০০ রেকর্ড বিশিষ্ট ১০০টি সাজানো ফাইল মার্জ করার সময় হিপ ডেটা স্ট্রাকচারটি কতটুকু র্যাম মেমোরি ব্যবহার করে?'
      },
      options: [
        {
          en: 'O(k) memory space, holding at most 100 element heads in RAM regardless of N',
          bn: 'O(k) মেমোরি স্থান, N যাই হোক না কেন র্যামে সর্বোচ্চ ১০০টি উপাদানের হেড ধরে রাখে'
        },
        {
          en: '50000000 records in full memory buffer',
          bn: 'সম্পূর্ণ মেমোরি বাফারে ৫০০০০০০০ রেকর্ড'
        },
        {
          en: 'Zero bytes',
          bn: 'শূন্য বাইট'
        },
        {
          en: 'O(N * k) space',
          bn: 'O(N * k) স্থান'
        }
      ],
      answer: 0,
      hint: {
        en: 'Does the heap store future unread elements from the streams or only the current head element?',
        bn: 'হিপ কি ভবিষ্যতের অপঠিত উপাদানগুলো জমা করে নাকি কেবল বর্তমান শীর্ষ উপাদানটি রাখে?'
      },
      explanation: {
        en: 'The heap only holds the immediate next candidate from each stream, requiring strictly O(k) slots in active RAM.',
        bn: 'হিপ কেবল প্রতিটি স্ট্রিম থেকে তাৎক্ষণিক পরবর্তী প্রার্থীকে ধারণ করে, ফলে সক্রিয় র্যামে কঠোরভাবে O(k) স্থান লাগে।'
      }
    },
    {
      id: 'kw-ex3',
      kind: 'mcq',
      topic: 'stream-exhaustion-behavior',
      question: {
        en: 'When a stream runs out of elements during a k-way merge, what happens to the Min-Heap?',
        bn: 'কে-ওয়ে মার্জ চলাকালে কোনো স্ট্রিমের উপাদান শেষ হয়ে গেলে মিন-হিপের কী হয়?'
      },
      options: [
        {
          en: 'The exhausted stream pushes no replacement, shrinking the active heap size by 1 until all streams finish',
          bn: 'নিঃশেষিত স্ট্রিম কোনো নতুন উপাদান পাঠায় না, ফলে সব স্ট্রিম শেষ না হওয়া পর্যন্ত হিপের আকার ১ করে কমতে থাকে'
        },
        {
          en: 'The merge algorithm crashes with an unhandled null exception',
          bn: 'মার্জ অ্যালগরিদমটি নাল এক্সেপশন দিয়ে ক্র্যাশ করে'
        },
        {
          en: 'The heap automatically refills the stream with random numbers',
          bn: 'হিপ স্বয়ংক্রিয়ভাবে স্ট্রিমটিকে এলোমেলো সংখ্যা দিয়ে পূর্ণ করে'
        },
        {
          en: 'The heap size doubles to compensate',
          bn: 'ক্ষতিপূরণ হিসেবে হিপের আকার দ্বিগুণ হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If stream 3 has no more data, can it contribute any more items to the tournament?',
        bn: 'স্ট্রিম ৩ এ কোনো ডেটা না থাকলে এটি কি টুর্নামেন্টে আর কোনো উপাদান দিতে পারবে?'
      },
      explanation: {
        en: 'When a stream ends, the extracted root is not replaced by that stream. The heap shrinks until size reaches 0.',
        bn: 'একটি স্ট্রিম শেষ হলে রুট অপসারণের পর নতুন কিছু যোগ হয় না। ফলে হিপের আকার কমতে কমতে ০ হয়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'k-way-tournament-quiz',
    title: {
      en: 'K-Way Stream Merging Quiz',
      bn: 'কে-ওয়ে স্ট্রিম একত্রীকরণ কুইজ'
    },
    questions: [
      {
        id: 'kw-q1',
        kind: 'mcq',
        topic: 'stream-metadata-storage',
        question: {
          en: 'Why must each entry in the k-way merge min-heap store both the item value and its originating stream index?',
          bn: 'কে-ওয়ে মার্জ মিন-হিপের প্রতিটি এন্ট্রিতে কেন উপাদানের মানের পাশাপাশি তার মূল স্ট্রিম ইনডেক্স সংরক্ষণ করতে হয়?'
        },
        options: [
          {
            en: 'So the algorithm knows which stream to fetch the next replacement candidate from once the root is popped',
            bn: 'যাতে রুটটি বের করে নেওয়ার পর অ্যালগরিদম বুঝতে পারে ঠিক কোন স্ট্রিম থেকে পরবর্তী প্রার্থী উপাদান আনতে হবে'
          },
          {
            en: 'To calculate 32-bit CRC network checksums',
            bn: '৩২-বিট সিআরসি নেটওয়ার্ক চেকসাম হিসাব করতে'
          },
          {
            en: 'Because JavaScript arrays require key-value pairs',
            bn: 'কারণ জাভাস্ক্রিপ্ট অ্যারেতে কি-ভ্যালু জোড়া থাকা বাধ্যতামূলক'
          },
          {
            en: 'To prevent CPU thermal throttling',
            bn: 'সিপিইউ থার্মাল থ্রটলিং রোধ করতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'After outputting value 20, how do you know whether it came from Stream A, B, or C?',
          bn: 'মান ২০ আউটপুট দেওয়ার পর আপনি কীভাবে জানবেন এটি স্ট্রিম A, B না C থেকে এসেছিল?'
        },
        explanation: {
          en: 'Storing the stream index allows the algorithm to advance the exact stream cursor that produced the emitted value.',
          bn: 'স্ট্রিম ইনডেক্স সংরক্ষণ করার ফলে অ্যালগরিদমটি ঠিক সেই নির্দিষ্ট স্ট্রিমের কার্সরকে এক ধাপ এগিয়ে নিতে পারে।'
        }
      },
      {
        id: 'kw-q2',
        kind: 'mcq',
        topic: 'lsm-tree-compaction-purpose',
        question: {
          en: 'In Log-Structured Merge-tree storage engines, what role does k-way heap merging play during compaction?',
          bn: 'লগ-স্ট্রাকচার্ড মার্জ-ট্রি স্টোরেজ ইঞ্জিনে কম্প্যাকশনের সময় কে-ওয়ে হিপ মার্জিং কী ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'It merges multiple sorted on-disk SSTable files into a single sorted file while removing overwritten and deleted records in O(N log k) streaming time',
            bn: 'এটি O(N log k) স্ট্রিমিং সময়ে বাতিল ও ওভাররাইট হওয়া রেকর্ড মুছে একাধিক সাজানো ডিস্ক এসএসটেবিল ফাইলকে একটি একক ফাইলে মার্জ করে'
          },
          {
            en: 'It converts SQL database queries into JSON objects',
            bn: 'এটি এসকিউএল কোয়েরিকে জেএসএন অবজেক্টে রূপান্তর করে'
          },
          {
            en: 'It encrypts database hard drives using 256-bit AES encryption',
            bn: 'এটি ২৫৬-বিট এইএস এনক্রিপশন দিয়ে হার্ড ড্রাইভ এনক্রিপ্ট করে'
          },
          {
            en: 'It compresses HTTP network headers before transmitting over TCP',
            bn: 'এটি টিসিপিতে পাঠানোর আগে এইচটিটিপি নেটওয়ার্ক হেডার সংকুচিত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'LSM-tree SSTables are individually sorted files on disk.',
          bn: 'এলএসএম-ট্রির এসএসটেবিলগুলো ডিস্কে থাকা পৃথক পৃথক সাজানো ফাইল।'
        },
        explanation: {
          en: 'Compaction takes k sorted SSTables and merges them into a single sorted SSTable using a tournament heap, cleaning up dead keys efficiently.',
          bn: 'কম্প্যাকশন k টি সাজানো এসএসটেবিল নিয়ে টুর্নামেন্ট হিপের মাধ্যমে একটি নতুন সাজানো ফাইলে মার্জ করে মৃত কি-গুলো সরিয়ে ফেলে।'
        }
      },
      {
        id: 'kw-q3',
        kind: 'mcq',
        topic: 'external-sorting-pipeline',
        question: {
          en: 'How does an external merge sort algorithm process a 100-gigabyte dataset when the server only has 2 gigabytes of RAM?',
          bn: 'সার্ভারে মাত্র ২ গিগাবাইট র্যাম থাকলে একটি এক্সটার্নাল মার্জ সর্ট অ্যালগরিদম কীভাবে ১০০ গিগাবাইটের একটি ডেটাসেট সাজায়?'
        },
        options: [
          {
            en: 'It sorts 2-gigabyte chunks in RAM, writes sorted runs to disk, and then merges the runs using a size-k min-heap stream pipeline',
            bn: 'এটি র্যামে ২ গিগাবাইট করে অংশ সাজিয়ে ডিস্কে লেখে এবং তারপর আকার-k মিন-হিপের সাহায্যে রানগুলোকে স্ট্রিমিং করে মার্জ করে'
          },
          {
            en: 'It crashes with an Out-Of-Memory operating system error',
            bn: 'এটি আউট-অব-মেমোরি অপারেটিং সিস্টেম ত্রুটি দিয়ে ক্র্যাশ করে'
          },
          {
            en: 'It compresses the 100 gigabytes down to 2 megabytes using gzip',
            bn: 'এটি জিজিপ দিয়ে ১০০ গিগাবাইটকে ২ মেগাবাইটে সংকুচিত করে'
          },
          {
            en: 'It executes 50 parallel quicksort threads simultaneously in RAM',
            bn: 'এটি র্যামে একই সাথে ৫০টি সমান্তরাল কুইকসর্ট থ্রেড চালায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Divide the dataset into RAM-sized runs, sort each on disk, and merge with a tournament heap.',
          bn: 'ডেটাসেটকে র্যাম আকারের রানে ভাগ করে ডিস্কে সাজান এবং টুর্নামেন্ট হিপ দিয়ে মার্জ করুন।'
        },
        explanation: {
          en: 'External sorting creates sorted intermediate runs on disk, then uses a k-way min-heap to stream through all runs using only O(k) RAM.',
          bn: 'এক্সটার্নাল সর্টিং ডিস্কে সাজানো রান ফাইল তৈরি করে এবং মাত্র O(k) র্যাম ব্যবহার করে k-ওয়ে মিন-হিপ দিয়ে সব রান মার্জ করে।'
        }
      },
      {
        id: 'kw-q4',
        kind: 'mcq',
        topic: 'initial-heap-construction-cost',
        question: {
          en: 'What is the time complexity to initialize the size-k Min-Heap with the leading elements of all k streams before beginning extraction?',
          bn: 'নিষ্কাশন শুরু করার আগে সমস্ত k স্ট্রিমের শীর্ষ উপাদান নিয়ে আকার-k মিন-হিপ ইনিশিয়ালাইজ করার সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(k) linear time, using bottom-up heapify across the k head elements',
            bn: 'O(k) রৈখিক সময়, k টি হেড উপাদানের ওপর বটম-আপ হিপিফাই চালিয়ে'
          },
          {
            en: 'O(N) time',
            bn: 'O(N) সময়'
          },
          {
            en: 'O(k^2) quadratic time',
            bn: 'O(k^2) চতুর্ঘাতী সময়'
          },
          {
            en: 'O(N * k) time',
            bn: 'O(N * k) সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'How long does Floyd’s heapify take to build a heap of size k?',
          bn: 'ফ্লয়েডের হিপিফাই দিয়ে k আকারের একটি হিপ তৈরি করতে কত সময় লাগে?'
        },
        explanation: {
          en: 'Loading the k initial elements into an array and calling Floyd’s heapify takes O(k) time, an insignificant fraction of total O(N log k) runtime.',
          bn: 'k টি উপাদান দিয়ে ফ্লয়েডের হিপিফাই চালালে O(k) সময় লাগে, যা মোট O(N log k) সময়ের তুলনায় অত্যন্ত নগণ্য।'
        }
      }
    ]
  }
};
