import type { Lesson } from '../../../lib/types';

export const theAugmentedAtlasLesson: Lesson = {
  slug: 'the-augmented-atlas',
  tech: 'trees',
  title: {
    en: 'Augmented Trees — Order-Statistic Trees, Segment Trees, and Interval Indices',
    bn: 'বর্ধিত ট্রি: অর্ডার-স্ট্যাটিস্টিক ট্রি, সেগমেন্ট ট্রি এবং ইন্টারভাল ইনডেক্স'
  },
  summary: {
    en: 'Standard search trees answer point existence queries like whether a key exists in O(log n) time. However, complex real-time systems frequently demand range answers: what is the 500th smallest element, what is the sum of array cells across an arbitrary window, or which scheduled appointments overlap with a given timeframe? Augmented trees enrich tree nodes with derived metadata that can be maintained in O(1) time per rotation. We analyze Order-Statistic Trees, Segment Trees, and Interval Trees, demonstrating how structural augmentation powers real-time analytics.',
    bn: 'সাধারণ সার্চ ট্রি কোনো নির্দিষ্ট কি আছে কি না সেই প্রশ্নের উত্তর O(log n) সময়ে দেয়। তবে বাস্তব সিস্টেমে জটিল পরিসরের প্রশ্নের উত্তর দিতে হয়: ৫০০-তম ক্ষুদ্রতম উপাদান কোনটি, নির্দিষ্ট সীমার মধ্যে মোট যোগফল কত, অথবা নির্দিষ্ট সময়ে কোন কোন মিটিংয়ের সময়সূচি একসাথে পড়ে? বর্ধিত ট্রি নোডগুলোতে অতিরিক্ত মেটাডেটা যুক্ত করে যা প্রতি রোটেশনে O(1) সময়ে আপডেট করা যায়। আমরা অর্ডার-স্ট্যাটিস্টিক ট্রি, সেগমেন্ট ট্রি এবং ইন্টারভাল ট্রি বিশ্লেষণ করি যা রিয়েল-টাইম অ্যানালিটিক্সে ব্যবহৃত হয়।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-surveyed-verdict',
    tech: 'trees',
    title: {
      en: 'Database Indexing Architectures — B+ Trees, Scans, and Query Planners',
      bn: 'ডেটাবেস ইনডেক্সিং আর্কিটেকচার: বি+ ট্রি, স্ক্যান এবং কোয়েরি প্ল্যানার'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'augmentation-theorem',
      text: {
        en: 'Beyond Point Keys: The Augmentation Principle',
        bn: 'পয়েন্ট কি-এর বাইরে: অগমেন্টেশন নীতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Standard Binary Search Trees are designed to locate individual keys. However, production telemetry platforms and spatial engines ask continuous aggregate questions: what is the total network traffic between 14:00 and 15:30, or which calendar appointments conflict with a new meeting? Answering these with linear scans is too slow.',
        bn: 'প্রমিত বাইনারি সার্চ ট্রি মূলত একক উপাদান খুঁজে পেতে তৈরি করা হয়েছে। তবে আধুনিক মনিটরিং ব্যবস্থা এবং ভৌগোলিক ইঞ্জিনগুলো প্রায়শই সমষ্টিগত তথ্য জানতে চায়: ১৪:০০ থেকে ১৫:৩০ এর মধ্যে মোট নেটওয়ার্ক ট্রাফিক কত, অথবা একটি নতুন মিটিংয়ের সাথে আগের কোন কোন মিটিংয়ের সময়সূচি সংঘাত তৈরি করে? লিনিয়ার স্ক্যান দিয়ে এগুলো খুঁজতে গেলে অনেক সময় নষ্ট হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Tree Augmentation Theorem provides a formal mathematical framework for this challenge. Any derived property can be stored within a balanced tree node with O(1) maintenance cost per rotation. This holds provided the attribute can be computed solely from the node itself and its immediate children.',
        bn: 'ট্রি অগমেন্টেশন উপপাদ্য এই চ্যালেঞ্জ মোকাবিলার একটি সুনির্দিষ্ট গাণিতিক ভিত্তি প্রদান করে। যেকোনো অতিরিক্ত বৈশিষ্ট্য প্রতি রোটেশনে মাত্র O(1) বাড়তি খরচে একটি ব্যালান্সড ট্রির নোডে সংরক্ষণ করা যায়। এটি তখনই সম্ভব যখন মানটি কেবল সেই নোড এবং তার প্রত্যক্ষ দুই সন্তানের তথ্যের ওপর ভিত্তি করে হিসাব করা যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'order-statistic-tree',
          def: {
            en: 'A balanced tree augmented with subtree size fields (size = 1 + left.size + right.size) to support O(log n) rank and select queries.',
            bn: 'সাব-ট্রির আকার ধারণকারী ব্যালান্সড ট্রি (size = ১ + left.size + right.size) যা O(log n) সময়ে k-তম ক্ষুদ্রতম উপাদান খুঁজে দেয়।'
          }
        },
        {
          term: 'segment-tree',
          def: {
            en: 'A tree where each node stores an aggregate value (such as sum, min, or max) over an interval of an underlying array buffer.',
            bn: 'এমন একটি ট্রি যার প্রতিটি নোড মূল অ্যারের নির্দিষ্ট পরিসরের সামগ্রিক মান (যেমন যোগফল, সর্বনিম্ন বা সর্বোচ্চ) সংরক্ষণ করে।'
          }
        },
        {
          term: 'lazy-propagation',
          def: {
            en: 'A technique in segment trees that defers updates to descendants by recording pending adjustments in a tag, keeping range updates at O(log n).',
            bn: 'সেগমেন্ট ট্রিতে পরিসর আপডেটকে স্থগিত রেখে পরে প্রয়োজনে কার্যকর করার কৌশল যা O(log n) গতি বজায় রাখে।'
          }
        },
        {
          term: 'interval-tree',
          def: {
            en: 'A tree keyed by interval start points, augmented with the maximum endpoint across the subtree to resolve interval overlaps in O(log n + k).',
            bn: 'শুরুর সময়ের ভিত্তিতে সাজানো ট্রি যার প্রতিটি নোডে সাব-ট্রির সর্বোচ্চ শেষ সময় থাকে, যা দ্রুত সময়সূচির সংঘাত খুঁজে দেয়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'tree'
    },
    {
      type: 'heading',
      id: 'augmented-tree-comparison',
      text: {
        en: 'Architectural Comparison: The Three Augmented Families',
        bn: 'কাঠামোগত তুলনা: তিনটি বর্ধিত ট্রির প্রকারভেদ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Different augmentations empower trees to solve distinct computational geometry and telemetry problems. Order-Statistic trees calculate rank and percentiles. Segment trees answer arbitrary array range sums and minimums. Interval trees identify geometric and temporal overlaps in flight control and scheduling.',
        bn: 'বিভিন্ন ধরনের বর্ধন ট্রিকে আলাদা আলাদা জটিল জ্যামিতিক ও মনিটরিং সমস্যা সমাধানে সক্ষম করে তোলে। অর্ডার-স্ট্যাটিস্টিক ট্রি উপাদানের র‍্যাঙ্ক ও পার্সেন্টাইল হিসাব করে। সেগমেন্ট ট্রি অ্যারের যেকোনো সীমার যোগফল ও সর্বনিম্ন মান বের করে। আর ইন্টারভাল ট্রি বিমান চলাচল এবং মিটিং শিডিউলিংয়ে সময়ের সংঘাত খুঁজে বের করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Augmented Structure', bn: 'বর্ধিত কাঠামো' },
        { en: 'Maintained Attribute', bn: 'সংরক্ষিত মেটাডেটা' },
        { en: 'Primary Query Type', bn: 'প্রধান কোয়েরির ধরন' },
        { en: 'Production Application', bn: 'বাস্তব ক্ষেত্রে ব্যবহার' }
      ],
      rows: [
        [
          { en: 'Order-Statistic Tree', bn: 'অর্ডার-স্ট্যাটিস্টিক ট্রি' },
          { en: 'Subtree node count (size)', bn: 'সাব-ট্রির নোড সংখ্যা (size)' },
          { en: 'select(k) and rank(x)', bn: 'k-তম উপাদান ও র‍্যাঙ্ক খোঁজা' },
          { en: 'Real-time gaming leaderboards', bn: 'অনলাইন গেমিং লিডারবোর্ড' }
        ],
        [
          { en: 'Segment Tree', bn: 'সেগমেন্ট ট্রি' },
          { en: 'Interval aggregate (sum, min, max)', bn: 'পরিসরের সামগ্রিক মান (যোগ, সর্বনিম্ন)' },
          { en: 'Range query query(L, R)', bn: 'পরিসীমা কোয়েরি query(L, R)' },
          { en: 'Financial telemetry windows', bn: 'আর্থিক চার্টের সময়সীমা' }
        ],
        [
          { en: 'Interval Tree', bn: 'ইন্টারভাল ট্রি' },
          { en: 'Subtree maximum endpoint (maxEnd)', bn: 'সাব-ট্রির সর্বোচ্চ শেষ সময় (maxEnd)' },
          { en: 'Overlap detection overlapping(L, R)', bn: 'সময়ের সংঘাত খোঁজা' },
          { en: 'Calendar scheduling and flight radar', bn: 'ক্যালেন্ডার মিটিং ও ফ্লাইট রাডার' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-segment-tree-code',
      text: {
        en: 'Executable Segment Tree Range Sum Implementation',
        bn: 'সেগমেন্ট ট্রির সাহায্যে রেঞ্জ সামের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program constructs a Segment Tree over 6 numbers and answers range sum queries. Notice how querying range [1, 3] computes 3 + 5 + 7 = 15, and updating index 2 from 5 to 10 immediately updates the range sum to 20 in O(log n) time.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৬টি সংখ্যার ওপর একটি সেগমেন্ট ট্রি তৈরি করে এবং রেঞ্জ সাম কোয়েরির উত্তর দেয়। লক্ষ্য করুন কীভাবে [১, ৩] সীমার যোগফল ৩ + ৫ + ৭ = ১৫ হয়, এবং ২ নম্বর ইনডেক্সের মান ৫ থেকে ১০ এ পরিবর্তনের সাথে সাথে O(log n) সময়ে নতুন যোগফল ২০ পাওয়া যায়।'
      }
    },
    {
      type: 'code',
      code: `class SegmentTree {
  constructor(arr) {
    this.n = arr.length;
    this.tree = new Array(4 * this.n).fill(0);
    this.build(arr, 1, 0, this.n - 1);
  }

  build(arr, node, start, end) {
    if (start === end) {
      this.tree[node] = arr[start];
      return;
    }
    const mid = Math.floor((start + end) / 2);
    this.build(arr, 2 * node, start, mid);
    this.build(arr, 2 * node + 1, mid + 1, end);
    this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
  }

  update(idx, val, node = 1, start = 0, end = this.n - 1) {
    if (start === end) {
      this.tree[node] = val;
      return;
    }
    const mid = Math.floor((start + end) / 2);
    if (idx <= mid) this.update(idx, val, 2 * node, start, mid);
    else this.update(idx, val, 2 * node + 1, mid + 1, end);
    this.tree[node] = this.tree[2 * node] + this.tree[2 * node + 1];
  }

  query(L, R, node = 1, start = 0, end = this.n - 1) {
    if (R < start || end < L) return 0;
    if (L <= start && end <= R) return this.tree[node];

    const mid = Math.floor((start + end) / 2);
    const leftSum = this.query(L, R, 2 * node, start, mid);
    const rightSum = this.query(L, R, 2 * node + 1, mid + 1, end);
    return leftSum + rightSum;
  }
}

const input = [1, 3, 5, 7, 9, 11];
const seg = new SegmentTree(input);

console.log('Input Array:', input.join(', '));
// Output: Input Array: 1, 3, 5, 7, 9, 11
console.log('Range sum query [1, 3] (3 + 5 + 7):', seg.query(1, 3));
// Output: Range sum query [1, 3] (3 + 5 + 7): 15
console.log('Range sum query [0, 5] (total sum):', seg.query(0, 5));
// Output: Range sum query [0, 5] (total sum): 36

seg.update(2, 10);
console.log('After update(index 2 -> 10), new range sum [1, 3] (3 + 10 + 7):', seg.query(1, 3));
// Output: After update(index 2 -> 10), new range sum [1, 3] (3 + 10 + 7): 20
console.log('New total sum [0, 5]:', seg.query(0, 5));
// Output: New total sum [0, 5]: 41`
    },
    {
      type: 'heading',
      id: 'fenwick-bit-alternative',
      text: {
        en: 'Fenwick Trees: The Bitwise In-Memory Alternative',
        bn: 'ফেনউইক ট্রি: বিটওয়াইজ ইন-মেমোরি বিকল্প'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For prefix sum queries without arbitrary range updates, Peter Fenwick introduced the Binary Indexed Tree (BIT) in 1994. Instead of allocating node objects and pointers, a Fenwick tree stores values directly in a flat integer array. Indices navigate using two’s complement bitwise arithmetic (i & -i) to isolate the lowest set bit, computing prefix sums in logarithmic hops.',
        bn: 'সাধারণ প্রিফিক্স সাম কোয়েরির জন্য ১৯৯৪ সালে পিটার ফেনউইক বাইনারি ইনডেক্সড ট্রি (BIT) উদ্ভাবন করেন। কোনো নোড অবজেক্ট বা পয়েন্টার বরাদ্দ না করে একটি ফেনউইক ট্রি সাধারণ ফ্ল্যাট ইন্টিজার অ্যারেতেই কাজ করে। এটি দুইয়ের পরিপূরক বিটওয়াইজ পাটিগণিত (i & -i) দিয়ে সর্বনিম্ন বিটটি চিহ্নিত করে অতি দ্রুত লগারিদমিক ধাপে প্রিফিক্স সাম হিসাব করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Local augmentation principle: Derived attributes can be maintained in O(1) time per rotation if they depend only on children.',
          bn: 'অগমেন্টেশন নীতি: অতিরিক্ত মেটাডেটা কেবল সন্তানদের ওপর নির্ভরশীল হলে প্রতি রোটেশনে মাত্র O(1) সময়ে তা আপডেট করা যায়।'
        },
        {
          en: 'Order-statistics support: Storing subtree node counts allows selecting the kth-smallest element in deterministic O(log n) time.',
          bn: 'অর্ডার-স্ট্যাটিস্টিক সুবিধা: সাব-ট্রির আকার ধারণ করলে যেকোনো k-তম ক্ষুদ্রতম উপাদান O(log n) সময়ে বের করা সম্ভব হয়।'
        },
        {
          en: 'Segment trees for intervals: Breaks down continuous range queries into at most 2 * ceil(log2 n) canonical tree segment nodes.',
          bn: 'পরিসরের জন্য সেগমেন্ট ট্রি: যেকোনো রেঞ্জ কোয়েরিকে সর্বোচ্চ ২ * ceil(log2 n) সংখ্যক সাব-সেগমেন্টের সমষ্টিতে ভাগ করে নেয়।'
        },
        {
          en: 'Interval overlap pruning: Tracking maximum subtree endpoints prunes branches that cannot possibly contain overlapping segments.',
          bn: 'ইন্টারভাল ছাঁটাই: সাব-ট্রির সর্বোচ্চ শেষ সময় রেকর্ড রাখায় যেসব শাখায় সংঘাত ঘটার সম্ভাবনা নেই সেগুলোকে সাথে সাথে বাদ দেওয়া যায়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'aa-ex1',
      kind: 'mcq',
      topic: 'clrs-augmentation-theorem',
      question: {
        en: 'According to the Tree Augmentation Theorem, under what condition can an augmented node field f(u) be maintained in O(1) time during tree rotations?',
        bn: 'ট্রি অগমেন্টেশন উপপাদ্য অনুসারে, কোন শর্ত পূরণ হলে একটি নোডের বর্ধিত মান f(u) কে ট্রি রোটেশনের সময় O(1) সময়ে আপডেট করা সম্ভব?'
      },
      options: [
        {
          en: 'If f(u) can be computed solely from the attributes of node u and the already-computed attributes of its immediate children (u.left and u.right)',
          bn: 'যদি f(u) কে কেবল নোড u এর মান এবং তার প্রত্যক্ষ দুই সন্তান (u.left এবং u.right) এর পূর্ব-হিসাবকৃত তথ্যের সমন্বয়ে হিসাব করা যায়'
        },
        {
          en: 'If the tree contains fewer than 10 total nodes',
          bn: 'যদি ট্রিতে মোট ১০ টির কম নোড থাকে'
        },
        {
          en: 'Only if the data keys are floating-point numbers',
          bn: 'কেবল যদি ডেটার কিগুলো দশমিক সংখ্যা হয়'
        },
        {
          en: 'If rotations are executed exclusively on the GPU graphics card',
          bn: 'যদি রোটেশন কেবল গ্রাফিক্স কার্ডে চালানো হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Can a parent recompute its field using only local information from its left and right children?',
        bn: 'একজন প্যারেন্ট কি তার দুই সন্তানের স্থানীয় তথ্য ব্যবহার করেই নিজের মানটি পুনরায় হিসাব করতে পারে?'
      },
      explanation: {
        en: 'Because a rotation only affects pointers between a parent and child, any attribute computable from immediate children updates in O(1) time.',
        bn: 'যেহেতু রোটেশনে কেবল প্যারেন্ট ও চাইল্ডের পয়েন্টার বদলায়, তাই সন্তানের তথ্যের ওপর নির্ভরশীল যেকোনো মান O(1) সময়ে আপডেট হয়ে যায়।'
      }
    },
    {
      id: 'aa-ex2',
      kind: 'mcq',
      topic: 'order-statistic-select-time',
      question: {
        en: 'What is the time complexity to find the kth-smallest element in an Order-Statistic Tree of size n?',
        bn: 'n আকারের একটি অর্ডার-স্ট্যাটিস্টিক ট্রিতে k-তম ক্ষুদ্রতম উপাদানটি খুঁজে পেতে কত সময় জটিলতা লাগে?'
      },
      options: [
        {
          en: 'O(log n) time, by comparing k against the size of the left subtree at each step',
          bn: 'O(log n) সময়, প্রতি ধাপে k এর সাথে বাম সাব-ট্রির আকারের তুলনা করার মাধ্যমে'
        },
        {
          en: 'O(n) linear scan time',
          bn: 'O(n) রৈখিক স্ক্যান সময়'
        },
        {
          en: 'O(1) constant time without traversal',
          bn: 'কোনো ট্রাভার্সাল ছাড়া O(1) ধ্রুবক সময়'
        },
        {
          en: 'O(n log n) sorting time',
          bn: 'O(n log n) সাজানোর সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If left.size == k - 1, the current node is the kth element. Otherwise, recurse left or right.',
        bn: 'যদি left.size == k - ১ হয়, তবে বর্তমান নোডটিই k-তম উপাদান। অন্যথায় বামে বা ডানে যান।'
      },
      explanation: {
        en: 'Inspecting subtree size fields allows the algorithm to eliminate one half of the tree at each step, taking O(log n) operations.',
        bn: 'সাব-ট্রির আকার জানা থাকায় প্রতি পদক্ষেপে ট্রির অর্ধেক অংশ বাদ দেওয়া যায়, যার ফলে O(log n) সময়ে কাঙ্ক্ষিত উপাদান পাওয়া যায়।'
      }
    },
    {
      id: 'aa-ex3',
      kind: 'mcq',
      topic: 'segment-tree-query-complexity',
      question: {
        en: 'What is the time complexity to answer an arbitrary range sum query query(L, R) in a Segment Tree of size n?',
        bn: 'n আকারের একটি সেগমেন্ট ট্রিতে যেকোনো সীমার যোগফল query(L, R) বের করার সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(log n) time, visiting at most 4 nodes per tree level',
          bn: 'O(log n) সময়, ট্রির প্রতি স্তরে সর্বোচ্চ ৪টি নোড পরিদর্শনের মাধ্যমে'
        },
        {
          en: 'O(n) time',
          bn: 'O(n) সময়'
        },
        {
          en: 'O(1) time',
          bn: 'O(1) সময়'
        },
        {
          en: 'O(n^2) time',
          bn: 'O(n^2) সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The query interval decomposes into at most 2 * ceil(log2 n) canonical segment nodes.',
        bn: 'যেকোনো কোয়েরি ব্যবধান সর্বোচ্চ ২ * ceil(log2 n) টি নোডের সমষ্টিতে ভেঙে যায়।'
      },
      explanation: {
        en: 'Any query range covers at most a few canonical segment tiles, bounding the total traversal work strictly to O(log n).',
        bn: 'যেকোনো সীমার কোয়েরি মাত্র কয়েকটি নির্দিষ্ট সেগমেন্ট টাইলসের সমন্বয়ে উত্তর দেয়, ফলে কাজের পরিমাণ কঠোরভাবে O(log n) এ সীমাবদ্ধ থাকে।'
      }
    }
  ],
  quiz: {
    id: 'the-augmented-atlas-quiz',
    title: {
      en: 'Augmented Trees and Range Queries Quiz',
      bn: 'বর্ধিত ট্রি এবং পরিসীমা কোয়েরি কুইজ'
    },
    questions: [
      {
        id: 'aa-q1',
        kind: 'mcq',
        topic: 'interval-tree-pruning-rule',
        question: {
          en: 'In an Interval Tree, under what condition can an overlap search safely prune the entire left subtree of a node x?',
          bn: 'একটি ইন্টারভাল ট্রিতে কোন শর্ত পূরণ হলে অনুসন্ধানকারী অ্যালগরিদম নোড x এর সম্পূর্ণ বাম সাব-ট্রিটি নিরাপদে বাদ দিতে পারে?'
        },
        options: [
          {
            en: 'When the left child is null or its augmented maxEnd is strictly smaller than the query interval’s low point (x.left.maxEnd < query.low)',
            bn: 'যখন বাম সন্তান নাল থাকে অথবা তার সর্বোচ্চ শেষ সময় কোয়েরির শুরুর চেয়ে ছোট হয় (x.left.maxEnd < query.low)'
          },
          {
            en: 'When the right child has an odd key',
            bn: 'যখন ডান সন্তানের কি বিজোড় হয়'
          },
          {
            en: 'When the root node has height 1',
            bn: 'যখন রুট নোডের উচ্চতা ১ হয়'
          },
          {
            en: 'When the left subtree contains more than 100 intervals',
            bn: 'যখন বাম সাব-ট্রিতে ১০০ টির বেশি ব্যবধান থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If no interval in the left subtree reaches as far right as query.low, can any interval there overlap with the query?',
          bn: 'বাম সাব-ট্রির কোনো ব্যবধানই যদি query.low পর্যন্ত না পৌঁছায়, তবে তাদের কারো পক্ষে কি সংঘাত তৈরি করা সম্ভব?'
        },
        explanation: {
          en: 'If x.left.maxEnd < query.low, all intervals in the left subtree end before the query begins, proving zero overlaps exist on the left.',
          bn: 'যদি x.left.maxEnd < query.low হয়, তবে বামের সমস্ত ব্যবধান কোয়েরি শুরুর আগেই শেষ হয়ে যায়। ফলে বামে কোনো সংঘাত থাকতে পারে না।'
        }
      },
      {
        id: 'aa-q2',
        kind: 'mcq',
        topic: 'fenwick-tree-lowbit-formula',
        question: {
          en: 'In a Fenwick tree (Binary Indexed Tree), which bitwise expression extracts the lowest set bit (lowbit) of index i?',
          bn: 'একটি ফেনউইক ট্রিতে (বাইনারি ইনডেক্সড ট্রি) ইনডেক্স i এর সর্বনিম্ন ১-বিট (lowbit) বের করার বিটওয়াইজ সূত্র কোনটি?'
        },
        options: [
          {
            en: 'i & (-i)',
            bn: 'i & (-i)'
          },
          {
            en: 'i | (-i)',
            bn: 'i | (-i)'
          },
          {
            en: 'i ^ (-i)',
            bn: 'i ^ (-i)'
          },
          {
            en: 'i << 1',
            bn: 'i << ১'
          }
        ],
        answer: 0,
        hint: {
          en: 'Two’s complement negation flips all bits and adds 1, leaving only the lowest set bit overlapping under bitwise AND.',
          bn: 'দুইয়ের পরিপূরকে বিট উল্টে ১ যোগ করলে বিটওয়াইজ AND এর মাধ্যমে কেবল সর্বনিম্ন সেট বিটটি অবশিষ্ট থাকে।'
        },
        explanation: {
          en: 'The identity i & (-i) isolates the lowest set bit in single-cycle CPU arithmetic, determining the interval width owned by slot i.',
          bn: 'i & (-i) সূত্রটি একক ক্লক সাইকেলে সর্বনিম্ন বিটটি বের করে যা স্লট i এর আওতাধীন পরিসরের দৈর্ঘ্য নির্ধারণ করে।'
        }
      },
      {
        id: 'aa-q3',
        kind: 'mcq',
        topic: 'segment-tree-lazy-propagation-purpose',
        question: {
          en: 'What problem does Lazy Propagation solve in a Segment Tree?',
          bn: 'একটি সেগমেন্ট ট্রিতে লেজি প্রোপাগেশন কোন সমস্যার সমাধান করে?'
        },
        options: [
          {
            en: 'It enables range updates (e.g. add +5 to all indices from L to R) in O(log n) time by deferring updates until nodes are accessed',
            bn: 'এটি নোড পরিদর্শনের আগ পর্যন্ত আপডেট স্থগিত রেখে O(log n) সময়ে সম্পূর্ণ পরিসরের আপডেট (যেমন L থেকে R পর্যন্ত সব ঘরে +৫ যোগ) সম্ভব করে'
          },
          {
            en: 'It compresses the tree down to 0 bytes on disk',
            bn: 'এটি ডিস্কে ট্রিকে ০ বাইটে সংকুচিত করে'
          },
          {
            en: 'It converts the segment tree into a circular linked list',
            bn: 'এটি সেগমেন্ট ট্রিকে বৃত্তাকার লিংকড লিস্টে রূপান্তর করে'
          },
          {
            en: 'It deletes negative numbers automatically',
            bn: 'এটি স্বয়ংক্রিয়ভাবে ঋণাত্মক সংখ্যাগুলো মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Without lazy propagation, updating every leaf in a range of size k takes O(k) time.',
          bn: 'লেজি প্রোপাগেশন ছাড়া k আকারের পরিসরের প্রতিটি পাতা আপডেট করতে O(k) সময় লেগে যায়।'
        },
        explanation: {
          en: 'Lazy propagation attaches a pending update tag to high-level segment nodes and pushes adjustments downward only on demand in O(log n) time.',
          bn: 'লেজি প্রোপাগেশন ওপরের নোডে একটি পেন্ডিং ট্যাগ লাগিয়ে রাখে এবং প্রয়োজনের সময় নিচে নামিয়ে দেয়, ফলে O(log n) সময়ে কাজ হয়।'
        }
      },
      {
        id: 'aa-q4',
        kind: 'mcq',
        topic: 'segment-tree-memory-multiplier',
        question: {
          en: 'When storing an array of size n inside a standard array-backed Segment Tree, what is the maximum array size allocated for the tree buffer?',
          bn: 'n আকারের একটি অ্যারেকে সাধারণ সেগমেন্ট ট্রিতে রাখতে হলে ট্রি বাফারের জন্য সর্বোচ্চ কত আকারের অ্যারে বরাদ্দ করতে হয়?'
        },
        options: [
          {
            en: '4 * n elements, guaranteeing sufficient space for all internal and leaf segment nodes',
            bn: '৪ * n উপাদান, যা সমস্ত অভ্যন্তরীণ এবং পাতার সেগমেন্ট নোডের জন্য পর্যাপ্ত জায়গার নিশ্চয়তা দেয়'
          },
          {
            en: 'Exactly n elements',
            bn: 'ঠিক n উপাদান'
          },
          {
            en: 'n^2 elements',
            bn: 'n^২ উপাদান'
          },
          {
            en: '100 elements always',
            bn: 'সর্বদা ১০০ উপাদান'
          }
        ],
        answer: 0,
        hint: {
          en: 'Rounding n up to the next power of 2 and doubling it for binary tree nodes yields at most 4n.',
          bn: 'n কে পরবর্তী ২ এর ঘাতে রূপান্তর করে দ্বিগুণ করলে সর্বোচ্চ ৪n স্থান লাগে।'
        },
        explanation: {
          en: 'A binary tree representing an array padded to a power of 2 requires at most 4n buffer slots.',
          bn: '২ এর ঘাতে প্রসারিত একটি অ্যারেকে সেগমেন্ট ট্রিতে উপস্থাপন করতে সর্বোচ্চ ৪n বাফার স্লট লাগে।'
        }
      }
    ]
  }
};
