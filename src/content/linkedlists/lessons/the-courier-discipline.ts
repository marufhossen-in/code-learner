import type { Lesson } from '../../../lib/types';

export const theCourierDisciplineLesson: Lesson = {
  slug: 'the-courier-discipline',
  tech: 'linked-lists',
  title: {
    en: 'The Courier Discipline: Fast and Slow Pointers & Runner Techniques',
    bn: 'কুরিয়ার কৌশল: দ্রুত ও ধীরগতির পয়েন্টার এবং রানার টেকনিক'
  },
  summary: {
    en: 'A comprehensive algorithmic systems guide to multi-pointer traversal patterns across linked structures. Because linked lists lack random indexing, discovering structural properties like the midpoint or distance from the tail traditionally required multiple O(N) passes. We analyze the Courier (Runner) discipline: deploying two simultaneous pointer references advancing at differential speeds or fixed offsets. We implement the Fast and Slow pointer algorithm (slow advancing 1 node, fast advancing 2 nodes) to locate midpoints in a single pass in O(N) time and O(1) space. We dissect the fixed-gap runner technique for finding the k-th node from the tail in a single traversal, and examine why merge sort is the optimal O(N log N) sorting strategy for pointer chains.',
    bn: 'লিঙ্কড ডেটা কাঠামোতে একাধিক পয়েন্টার ট্রাভার্সাল কৌশলের একটি পূর্ণাঙ্গ অ্যালগরিদমিক গাইড। যেহেতু লিঙ্কড লিস্টে সরাসরি ইনডেক্সিং নেই, তাই মাঝের নোড বা শেষ থেকে নির্দিষ্ট দূরত্ব বের করতে প্রচলিত নিয়মে একাধিকবার O(N) ট্রাভার্সাল লাগত। আমরা কুরিয়ার বা রানার কৌশল বিশ্লেষণ করেছি: দুটি পয়েন্টার একই সাথে ভিন্ন গতিতে বা নির্দিষ্ট দূরত্ব বজায় রেখে চালানো। আমরা দ্রুত ও ধীরগতির (slow ১ ধাপ, fast ২ ধাপ) পয়েন্টার অ্যালগরিদম বাস্তবায়ন করেছি যা মাত্র একবারে O(N) সময় এবং O(1) মেমরিতে মাঝের নোড খুঁজে দেয়। শেষ থেকে k-তম নোড একবারে খুঁজে বের করার ফিক্সড-গ্যাপ রানার কৌশল ব্যবচ্ছেদ করা হয়েছে এবং কেন লিঙ্কড লিস্টে মার্জ সর্ট সেরা O(N log N) সর্টিং অ্যালগরিদম তা ব্যাখ্যা করা হয়েছে।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'The Runner Paradigm: Multi-Velocity Traversal Without Buffers',
        bn: 'রানার কৌশল: মেমরি বাফার ছাড়াই বহু-গতির ট্রাভার্সাল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this lesson, we study the Runner (or Two-Pointer) discipline for linked lists. Unlike arrays where the total length N is known instantaneously via property lookup, a linked list is an opaque chain of pointers. Determining list length requires walking from head to null in O(N) time. The naive approach to finding the middle element requires two full passes: first counting all N elements, then traversing N / 2 steps. The Fast and Slow pointer technique solves this in a single pass by advancing two pointer variables simultaneously at different speeds.',
        bn: 'এই পাঠে আমরা লিঙ্কড লিস্টের রানার বা টু-পয়েন্টার কৌশল পরীক্ষা করব। অ্যারেতে মোট দৈর্ঘ্য N তাৎক্ষণিকভাবে জানা গেলেও লিঙ্কড লিস্টের ক্ষেত্রে তা সম্ভব নয়। তালিকার দৈর্ঘ্য জানতে head থেকে null পর্যন্ত পুরো পথ O(N) সময়ে হেঁটে যেতে হয়। মাঝখানের উপাদান খুঁজে পাওয়ার সাধারণ নিয়মে দুটি পূর্ণ ট্রাভার্সাল লাগে: প্রথমে সমস্ত N উপাদান গণনা করা, এরপর N / ২ ধাপ হেঁটে যাওয়া। দ্রুত ও ধীরগতির পয়েন্টার কৌশল দুটি পয়েন্টারকে ভিন্ন গতিতে চালিয়ে মাত্র একবারের ট্রাভার্সালে এই সমস্যার সমাধান করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'runner technique',
          def: {
            en: 'An algorithmic pattern maintaining two simultaneous pointer references traversing a linked list at differential velocities or fixed offsets to calculate structural properties in a single pass.',
            bn: 'একটি অ্যালগরিদমিক কৌশল যেখানে দুটি পয়েন্টার ভিন্ন গতিতে বা নির্দিষ্ট ব্যবধানে একই সাথে চলে মাত্র একবারে তালিকার বিভিন্ন বৈশিষ্ট্য বের করে ফেলে।'
          }
        },
        {
          term: 'fast and slow pointers',
          def: {
            en: 'A runner configuration where slow advances 1 node per iteration while fast advances 2 nodes, placing slow exactly at the midpoint when fast reaches the end.',
            bn: 'একটি রানার ব্যবস্থা যেখানে ধীরগতির slow পয়েন্টার প্রতি ধাপে ১ নোড এগোয় এবং দ্রুতগতির fast পয়েন্টার ২ নোড এগোয়, ফলে fast শেষ প্রান্তে পৌঁছালে slow ঠিক মাঝখানে থাকে।'
          }
        },
        {
          term: 'fixed-offset runner',
          def: {
            en: 'A technique where a fast pointer is sent k steps ahead of a slow pointer; advancing both in lockstep leaves slow standing on the k-th node from the tail when fast reaches null.',
            bn: 'একটি কৌশল যেখানে fast পয়েন্টারকে slow এর চেয়ে k ধাপ সামনে পাঠিয়ে দেওয়া হয়; এরপর দুজনকে একসাথে ১ ধাপ করে চালালে fast যখন null এ পৌঁছায় তখন slow শেষ থেকে k-তম নোডে থাকে।'
          }
        },
        {
          term: 'list merge sort',
          def: {
            en: 'The optimal O(N log N) divide-and-conquer sorting algorithm for linked lists, splitting chains at the runner midpoint and merging sorted subchains with strictly O(1) auxiliary memory.',
            bn: 'লিঙ্কড লিস্টের জন্য সর্বোত্তম O(N log N) সর্টিং অ্যালগরিদম, যা রানার মিডপয়েন্টে তালিকা দুই ভাগে ভাগ করে এবং বাড়তি কোনো মেমরি বরাদ্দ ছাড়াই ধ্রুব O(1) অতিরিক্ত মেমরিতে মার্জ সম্পন্ন করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'midpoint',
      text: {
        en: 'Midpoint Discovery: Odd vs Even Parity Dynamics',
        bn: 'মধ্যবিন্দু নির্ধারণ: বিজোড় বনাম জোড় দৈর্ঘ্যের আচরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Runner algorithms evaluate a strict loop guard: while (fast !== null && fast.next !== null). Each iteration advances a primary reference one step while a secondary runner leaps two positions. Across odd collections of 5 elements, this quick pointer terminates on element 5 where next is null. Such movement positions a lead pointer directly on item 3. Across even collections of 6 elements, this quick runner traverses past boundaries to null, stationing its companion on item 4.',
        bn: 'রানার অ্যালগরিদমে লুপের মূল শর্ত থাকে: while (fast !== null && fast.next !== null)। প্রতি পুনরাবৃত্তিতে প্রাথমিক নির্দেশকটি এক ধাপ এগোয় এবং দ্বিতীয় ধাবকটি দুই অবস্থান লাফ দেয়। বিজোড় সংখ্যক ৫ উপাদানের ক্ষেত্রে দ্রুতগামী পয়েন্টারটি শেষ অবস্থানে পৌঁছায় যার পরবর্তী মান null। এর ফলে ধীরগতির নির্দেশকটি ঠিক ৩ নম্বর আইটেমে অবস্থান নেয়। আর জোড় সংখ্যক ৬ উপাদানের ক্ষেত্রে দ্রুতগামী ধাবকটি সীমানা পেরিয়ে null এ পৌঁছায়, ফলে সঙ্গী নির্দেশকটি ৪ নম্বর আইটেমে থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Divide-and-conquer algorithms require halting at the earlier midpoint when processing even collections. Modifying the loop guard to while (fast.next !== null && fast.next.next !== null) stops execution at item 3 in a 6-element chain. Severing slow.next to null partitions the sequence into two balanced halves of 3 items each.',
        bn: 'ডিভাইড-অ্যান্ড-কনকার পদ্ধতিতে জোড় আকারের তালিকা ভাগ করতে প্রথম মধ্যবিন্দুতে থামা প্রয়োজন হয়। লুপের শর্ত বদলে while (fast.next !== null && fast.next.next !== null) লিখলে ৬ উপাদানের চেইনে ৩ নম্বর অবস্থানে পৌঁছানো যায়। এরপর slow.next এর মান null করে দিলে ৩ উপাদান বিশিষ্ট দুটি সুষম উপ-তালিকা তৈরি হয়।'
      }
    },
    {
      type: 'heading',
      id: 'visual-guide',
      text: {
        en: 'Visualizing Fast and Slow Runner Trajectories',
        bn: 'দ্রুত ও ধীরগতির রানার পথের ভিজ্যুয়ালাইজেশন'
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
        en: 'Empirical Verification: Single-Pass Midpoint and K-th From Tail Discovery',
        bn: 'বাস্তব যাচাই: একবারে মধ্যবিন্দু এবং শেষ থেকে k-তম নোড নির্ণয়'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      code: `// Concrete implementation of Fast/Slow and Fixed-Gap runner algorithms
class ListNode<T> {
  val: T;
  next: ListNode<T> | null;

  constructor(val: T, next: ListNode<T> | null = null) {
    this.val = val;
    this.next = next;
  }
}

// 1. Find midpoint in a single pass using Fast & Slow pointers
function findMiddle<T>(head: ListNode<T> | null): { midVal: T | null; steps: number } {
  if (head === null) return { midVal: null, steps: 0 };
  let slow: ListNode<T> | null = head;
  let fast: ListNode<T> | null = head;
  let steps = 0;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
    steps++;
  }
  return { midVal: slow!.val, steps };
}

// 2. Find the k-th node from the end in a single pass using Fixed-Offset runner
function findKthFromEnd<T>(head: ListNode<T> | null, k: number): { val: T | null; steps: number } {
  if (head === null || k <= 0) return { val: null, steps: 0 };
  let fast: ListNode<T> | null = head;
  let slow: ListNode<T> | null = head;

  // Step fast pointer k steps ahead
  for (let i = 0; i < k; i++) {
    if (fast === null) return { val: null, steps: 0 }; // List shorter than k
    fast = fast.next;
  }

  // Advance both in lockstep until fast reaches null
  let steps = 0;
  while (fast !== null) {
    slow = slow!.next;
    fast = fast.next;
    steps++;
  }
  return { val: slow!.val, steps };
}

// Test 1: 5-node list (10 -> 20 -> 30 -> 40 -> 50)
const list5 = new ListNode(10, new ListNode(20, new ListNode(30, new ListNode(40, new ListNode(50)))));
const mid5 = findMiddle(list5);
console.log('5-node list middle:', mid5);
// 5-node list middle: { midVal: 30, steps: 2 }

// Test 2: 6-node list (10 -> 20 -> 30 -> 40 -> 50 -> 60)
const list6 = new ListNode(10, new ListNode(20, new ListNode(30, new ListNode(40, new ListNode(50, new ListNode(60))))));
const mid6 = findMiddle(list6);
console.log('6-node list middle:', mid6);
// 6-node list middle: { midVal: 40, steps: 3 }

// Test 3: Find 2nd element from end on list5 (should be 40)
const kth = findKthFromEnd(list5, 2);
console.log('2nd from end on 5-node list:', kth);
// 2nd from end on 5-node list: { val: 40, steps: 3 }`,
      caption: {
        en: 'Execution trace of runner algorithms: finding midpoint in 2 steps for 5 nodes, 3 steps for 6 nodes, and locating 2nd node from end.',
        bn: 'রানার অ্যালগরিদমের বাস্তব প্রমাণ: ৫ নোডে ২ পদক্ষেপে এবং ৬ নোডে ৩ পদক্ষেপে মধ্যবিন্দু নির্ণয় এবং শেষ থেকে ২য় উপাদান শনাক্তকরণ।'
      }
    },
    {
      type: 'heading',
      id: 'matrix',
      text: {
        en: 'Comparative Architecture Matrix: Traversal Strategies',
        bn: 'তুলনামূলক আর্কিটেকচার ম্যাট্রিক্স: ট্রাভার্সাল কৌশল'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Algorithm Strategy', bn: 'অ্যালগরিদম কৌশল' },
        { en: 'Passes Required', bn: 'প্রয়োজনীয় ট্রাভার্সাল' },
        { en: 'Time Complexity', bn: 'সময় জটিলতা' },
        { en: 'Auxiliary Memory', bn: 'অতিরিক্ত মেমরি' },
        { en: 'Key Advantage', bn: 'প্রধান সুবিধা' }
      ],
      rows: [
        [
          { en: 'Two-Pass Length Count', bn: 'দুই-ধাপ দৈর্ঘ্য গণনা' },
          { en: '2 complete passes', bn: '২ বার পূর্ণ পরিদর্শন' },
          { en: 'O(N)', bn: 'O(N)' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'Conceptually trivial to understand', bn: 'বোঝার জন্য ধারণাগতভাবে অত্যন্ত সরল' }
        ],
        [
          { en: 'Fast and Slow Runner', bn: 'দ্রুত ও ধীরগতির রানার' },
          { en: '1 single pass', bn: '১ বার একক পরিদর্শন' },
          { en: 'O(N) (N/2 iterations)', bn: 'O(N) (N/২ টি ধাপ)' },
          { en: 'O(1) (2 pointer variables)', bn: 'O(1) (২টি পয়েন্টার ভেরিয়েবল)' },
          { en: 'Cuts memory bus dereferences by half', bn: 'মেমরি বাস থেকে পড়ার সংখ্যা অর্ধেকে কমায়' }
        ],
        [
          { en: 'Fixed-Offset Runner', bn: 'ফিক্সড-অফসেট রানার' },
          { en: '1 single pass', bn: '১ বার একক পরিদর্শন' },
          { en: 'O(N)', bn: 'O(N)' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'Finds k-th from end without knowing N', bn: 'N না জেনেই শেষ থেকে k-তম বের করে' }
        ],
        [
          { en: 'Auxiliary Array Buffer', bn: 'অতিরিক্ত অ্যারে বাফার' },
          { en: '1 pass to populate array', bn: 'অ্যারে ভরতে ১ বার পরিদর্শন' },
          { en: 'O(N)', bn: 'O(N)' },
          { en: 'O(N) heap memory', bn: 'O(N) হিপ মেমরি' },
          { en: 'Allows random access at cost of high RAM', bn: 'অতিরিক্ত র‍্যামের বিনিময়ে সরাসরি অ্যাক্সেস দেয়' }
        ]
      ]
    }
  ],
  nextLesson: {
    slug: 'the-doubly-chained-court',
    tech: 'linked-lists',
    title: {
      en: 'The Doubly Chained Court: Bidirectional Traversal and LRU Cache Design',
      bn: 'দ্বিমুখী লিঙ্কড তালিকা: উভমুখী ট্রাভার্সাল এবং এলআরইউ ক্যাশ ডিজাইন'
    }
  },
  exercises: [
    {
      id: 'cd-ex1',
      kind: 'mcq',
      topic: 'midpoint-iterations',
      question: {
        en: 'In a singly linked list containing 9 nodes, how many while loop iterations does the fast and slow pointer algorithm execute before terminating?',
        bn: '৯ টি নোড বিশিষ্ট একটি সিঙ্গলি লিঙ্কড লিস্টে দ্রুত ও ধীরগতির পয়েন্টার অ্যালগরিদম সমাপ্ত হওয়ার আগে কতটি while লুপ পুনরাবৃত্তি সম্পন্ন করে?'
      },
      options: [
        {
          en: '4 iterations because fast advances by 2 on each step (steps: node 1 -> 3 -> 5 -> 7 -> 9)',
          bn: '৪ টি পুনরাবৃত্তি কারণ প্রতি পদক্ষেপে fast ২ ঘর করে এগোয় (ধাপ: ১ -> ৩ -> ৫ -> ৭ -> ৯)'
        },
        {
          en: '9 iterations because every node must be visited by slow',
          bn: '৯ টি পুনরাবৃত্তি কারণ প্রতিটি নোড slow দ্বারা পরিদর্শন হতে হয়'
        },
        {
          en: '1 iteration because pointers teleport directly to the midpoint',
          bn: '১ টি পুনরাবৃত্তি কারণ পয়েন্টার সরাসরি মাঝখানে পৌঁছে যায়'
        },
        {
          en: '0 iterations because lists with odd length cannot be traversed',
          bn: '০ টি পুনরাবৃত্তি কারণ বিজোড় দৈর্ঘ্যের তালিকা ট্রাভার্স করা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Track the positions of fast starting at node 1: 1 -> 3 -> 5 -> 7 -> 9. How many steps occurred?',
        bn: '১ নম্বর অবস্থান থেকে fast এর অগ্রগতি গণনা করুন: ১ -> ৩ -> ৫ -> ৭ -> ৯। মোট কতটি পদক্ষেপ হলো?'
      },
      explanation: {
        en: 'Starting at 1, fast moves through 3, 5, 7, and 9 across 4 iterations, leaving slow at 5.',
        bn: '১ থেকে শুরু করে fast মোট ৪ টি পদক্ষেপে ৩, ৫, ৭ এবং ৯ স্পর্শ করে, ফলে slow থাকে ৫ এ।'
      }
    },
    {
      id: 'cd-ex2',
      kind: 'mcq',
      topic: 'fixed-gap-invariant',
      question: {
        en: 'To find the 3rd node from the end of a linked list in a single pass, how many nodes ahead must the fast pointer be positioned before advancing slow?',
        bn: 'একবারের ট্রাভার্সালে একটি লিঙ্কড লিস্টের শেষ থেকে ৩ য় নোডটি খুঁজে পেতে slow চালানোর আগে fast পয়েন্টারটিকে কত নোড সামনে পাঠিয়ে দিতে হয়?'
      },
      options: [
        {
          en: '3 nodes ahead so that the invariant distance between slow and fast remains exactly 3',
          bn: '৩ নোড সামনে যাতে slow এবং fast এর মধ্যকার দূরত্বের ব্যবধান সর্বদা ঠিক ৩ থাকে'
        },
        {
          en: '0 nodes because both pointers must always start together',
          bn: '০ নোড কারণ দুটি পয়েন্টারকে সর্বদা একসাথে শুরু করতে হয়'
        },
        {
          en: '10 nodes regardless of list length',
          bn: 'তালিকার দৈর্ঘ্য যাই হোক না কেন ১০ নোড'
        },
        {
          en: '1 node because fast moves twice as fast',
          bn: '১ নোড কারণ fast দ্বিগুণ গতিতে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If you want slow to be k nodes from the end when fast reaches null, what gap must you establish?',
        bn: 'fast যখন null এ পৌঁছাবে তখন slow শেষ থেকে k ঘর পেছনে থাকতে হলে তাদের মাঝে কত ব্যবধান তৈরি করতে হবে?'
      },
      explanation: {
        en: 'By advancing fast 3 steps ahead initially, a fixed window of 3 hops is created. Advancing both pointers in lockstep preserves this window. When fast reaches null (past the tail), slow is positioned exactly 3 nodes from the end.',
        bn: 'শুরুতেই fast কে ৩ ধাপ এগিয়ে দিলে দুজনের মাঝে ৩ ঘরের একটি নির্দিষ্ট ব্যবধান তৈরি হয়। এরপর একসাথে এগোলে সেই ব্যবধান বজায় থাকে। fast যখন null এ পৌঁছায়, তখন slow শেষ থেকে ঠিক ৩ নোড পেছনে অবস্থান করে।'
      }
    },
    {
      id: 'cd-ex3',
      kind: 'mcq',
      topic: 'merge-sort-preference',
      question: {
        en: 'Why is Merge Sort preferred over Quicksort for sorting linked lists in O(N log N) time?',
        bn: 'লিঙ্কড লিস্টকে O(N log N) সময়ে সাজানোর জন্য কুইকসর্টের চেয়ে মার্জ সর্টকে কেন বেশি অগ্রাধিকার দেওয়া হয়?'
      },
      options: [
        {
          en: 'Linked lists can be split at the midpoint using runner pointers and merged in O(N) time with strictly O(1) auxiliary memory by rewiring next pointers, unlike array merge sort which requires O(N) buffer memory',
          bn: 'রানার পয়েন্টার দিয়ে মাঝখানে ভাগ করে কোনো অতিরিক্ত বাফার মেমরি ছাড়াই ধ্রুব O(1) অতিরিক্ত মেমরিতে কেবল next পয়েন্টার বদলে লিঙ্কড লিস্ট মার্জ করা যায়, যেখানে অ্যারে মার্জ সর্টে O(N) বাফার লাগে'
        },
        {
          en: 'Quicksort cannot sort numbers larger than 100',
          bn: 'কুইকসর্ট ১০০ এর বড় কোনো সংখ্যা সাজাতে পারে না'
        },
        {
          en: 'Merge Sort is the only algorithm supported by the Linux kernel',
          bn: 'মার্জ সর্টই একমাত্র অ্যালগরিদম যা লিনাক্স কার্নেলে অনুমোদিত'
        },
        {
          en: 'Linked lists automatically sort themselves when traversed',
          bn: 'ট্রাভার্স করার সময় লিঙ্কড লিস্ট স্বয়ংক্রিয়ভাবে সাজানো হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about how two sorted linked lists are merged: do you need to allocate a new array?',
        bn: 'দুটি সাজানো লিঙ্কড লিস্ট কীভাবে জোড়া লাগানো হয় তা ভাবুন: নতুন কোনো অ্যারে বরাদ্দ লাগে কি?'
      },
      explanation: {
        en: 'Merging two sorted arrays requires allocating an auxiliary array of size N to hold the merged elements. In linked lists, merging is achieved simply by rewiring existing next pointers in-place, achieving O(N log N) sorting with O(1) extra space.',
        bn: 'দুটি সাজানো অ্যারে মার্জ করতে N আকারের একটি বাড়তি অ্যারে লাগে। কিন্তু লিঙ্কড লিস্টে বিদ্যমান next পয়েন্টারগুলো সরাসরি অদলবদল করেই মার্জ সম্পন্ন করা যায়, ফলে কোনো বাড়তি মেমরি ছাড়াই O(1) স্পেসে O(N log N) সর্টিং পাওয়া যায়।'
      }
    },
    {
      id: 'cd-ex4',
      kind: 'mcq',
      topic: 'null-guarding',
      question: {
        en: 'In the fast and slow pointer algorithm, why is it mandatory to check BOTH `fast !== null` AND `fast.next !== null` in the while loop condition?',
        bn: 'দ্রুত ও ধীরগতির অ্যালগরিদমে while লুপে `fast !== null` এবং `fast.next !== null` উভয় শর্তই পরীক্ষা করা কেন বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'To prevent a runtime null pointer crash when evaluating fast.next.next on lists with even length or when fast reaches the final node',
          bn: 'জোড় দৈর্ঘ্যের তালিকায় বা fast শেষ নোডে পৌঁছানোর পর fast.next.next পড়তে গিয়ে যাতে রানটাইমে নালপয়েন্টার ক্র্যাশ না ঘটে'
        },
        {
          en: 'To verify that the CPU cache line has completed its transfer',
          bn: 'সিপিইউ ক্যাশ লাইন তার ডেটা স্থানান্তর শেষ করেছে কিনা তা নিশ্চিত করতে'
        },
        {
          en: 'Because JavaScript requires every loop to contain two conditions',
          bn: 'কারণ জাভাস্ক্রিপ্টে প্রতিটি লুপে দুটি শর্ত থাকা বাধ্যতামূলক'
        },
        {
          en: 'To prevent the garbage collector from freeing the slow pointer',
          bn: 'গার্বেজ কালেক্টর যাতে slow পয়েন্টারকে মুছে না দেয় তা নিশ্চিত করতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'What happens if fast is pointing to the last node and you try to evaluate fast.next.next without checking fast.next first?',
        bn: 'fast যদি শেষ প্রান্তে থাকে এবং পরবর্তী সংযোগ পরীক্ষা না করেই দুই ধাপ এগোতে যান তবে কী ঘটবে?'
      },
      explanation: {
        en: 'If fast is at the last node, fast.next is null. Evaluating fast.next.next would attempt null.next, causing an immediate NullPointerException / TypeError. Checking both conditions ensures safe 2-step advancement.',
        bn: 'fast শেষ নোডে থাকলে fast.next এর মান হয় null। fast.next পরীক্ষা না করে fast.next.next পড়তে গেলে মূলত null.next পড়া হয়, যা সাথে সাথে ক্র্যাশ ঘটায়। উভয় শর্ত থাকায় নিরাপদে ২ ধাপ লাফানো যায়।'
      }
    }
  ],
  quiz: {
    id: 'courier-discipline-quiz',
    title: {
      en: 'Courier Discipline and Runner Algorithms Quiz',
      bn: 'কুরিয়ার কৌশল এবং রানার অ্যালগরিদম কুইজ'
    },
    questions: [
      {
        id: 'cd-q1',
        kind: 'mcq',
        topic: 'midpoint-odd-even',
        question: {
          en: 'When running the standard fast and slow pointer algorithm on a 6-node list (10 -> 20 -> 30 -> 40 -> 50 -> 60), which node value does `slow` point to upon termination?',
          bn: '৬ টি নোডের তালিকায় (১০ -> ২০ -> ৩০ -> ৪০ -> ৫০ -> ৬০) সাধারণ দ্রুত ও ধীরগতির অ্যালগরিদম চালালে সমাপ্তির পর `slow` কোন নোডের মান নির্দেশ করে?'
        },
        options: [
          {
            en: '40 because in an even list of length 2k, the standard while (fast !== null && fast.next !== null) condition places slow at the second middle node (index 3)',
            bn: '৪০ কারণ ২k দৈর্ঘ্যের জোড় তালিকায় সাধারণ while (fast !== null && fast.next !== null) শর্তটি slow কে দ্বিতীয় মধ্যবর্তী নোডে (৩ নম্বর ইনডেক্স) রাখে'
          },
          {
            en: '30 because slow always selects the smaller integer',
            bn: '৩০ কারণ slow সর্বদা ছোট সংখ্যাটি বেছে নেয়'
          },
          {
            en: '10 because slow never advances on even lists',
            bn: '১০ কারণ জোড় তালিকায় slow কখনোই সামনে এগোয় না'
          },
          {
            en: '60 because fast pulls slow to the end',
            bn: '৬০ কারণ fast টেনে slow কে শেষ প্রান্তে নিয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Trace slow and fast: start at 10. Step 1: slow=20, fast=30. Step 2: slow=30, fast=50. Step 3: slow=40, fast=null.',
          bn: 'মানগুলো পর্যবেক্ষণ করুন: শুরুতে ১০। ধাপ ১: slow=২০, fast=৩০। ধাপ ২: slow=৩০, fast=৫০। ধাপ ৩: slow=৪০, fast=null।'
        },
        explanation: {
          en: 'Initially slow reaches 20 while fast checks 30. Next slow advances to 30 as fast touches 50. Finally slow lands on 40 while fast leaps past 60 to null. The procedure finishes with slow referencing 40.',
          bn: 'শুরুতে slow যায় ২০ এ এবং fast পৌঁছে ৩০ এ। এরপর slow স্থান পায় ৩০ এ আর fast স্পর্শ করে ৫০। পরিশেষে slow পৌঁছায় ৪০ এ এবং fast ৬০ পার হয়ে null এ চলে যায়। এভাবে slow ৪০ মানটিতে স্থির হয়।'
        }
      },
      {
        id: 'cd-q2',
        kind: 'mcq',
        topic: 'time-complexity',
        question: {
          en: 'What is the exact time complexity of locating the middle node of an N-element linked list using fast and slow pointers?',
          bn: 'দ্রুত ও ধীরগতির পয়েন্টার ব্যবহার করে N উপাদানের লিঙ্কড লিস্টের মাঝের নোড বের করতে সুনির্দিষ্ট সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(N) with exactly floor(N / 2) loop iterations, traversing the list in a single pass',
            bn: 'O(N) এবং ঠিক floor(N / ২) টি লুপ পুনরাবৃত্তি, যা মাত্র একবারে তালিকাটি পরিদর্শন করে'
          },
          {
            en: 'O(1) because pointers move simultaneously',
            bn: 'O(1) কারণ পয়েন্টারগুলো একসাথে চলে'
          },
          {
            en: 'O(log N) due to binary pointer partitioning',
            bn: 'O(log N) বাইনারি পয়েন্টার বিভাজনের কারণে'
          },
          {
            en: 'O(N^2) because fast must compare with slow on every step',
            bn: 'O(N^২) কারণ প্রতিটি ধাপে fast কে slow এর সাথে তুলনা করতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'How many times does the while loop body execute for a list of length N?',
          bn: 'N দৈর্ঘ্যের একটি তালিকার জন্য while লুপটি মোট কতবার চলে?'
        },
        explanation: {
          en: 'Because fast advances by 2 on each iteration, it covers N nodes in N/2 steps. The loop body executes exactly floor(N / 2) times. This is strictly O(N) time and requires only 1 traversal pass.',
          bn: 'প্রতি পদক্ষেপে fast ২ ঘর করে এগিয়ে N সংখ্যক নোড N/২ পদক্ষেপে পার হয়। লুপটি ঠিক floor(N / ২) বার চলে। এটি কঠোরভাবে O(N) সময় নেয় এবং মাত্র ১টি ট্রাভার্সাল পাস লাগে।'
        }
      },
      {
        id: 'cd-q3',
        kind: 'mcq',
        topic: 'palindrome-checking',
        question: {
          en: 'How do production algorithms check if a singly linked list is a palindrome in O(N) time and O(1) extra space?',
          bn: 'একটি সিঙ্গলি লিঙ্কড লিস্ট প্যালিন্ড্রোম কিনা তা প্রোডাকশন কোডে কীভাবে O(N) সময় এবং O(1) অতিরিক্ত মেমরিতে পরীক্ষা করা হয়?'
        },
        options: [
          {
            en: 'Use fast/slow pointers to find the middle, reverse the second half in-place, compare the two halves node-by-node, and restore the list',
            bn: 'দ্রুত ও ধীরগতির পয়েন্টার দিয়ে মাঝখান বের করে দ্বিতীয় অংশটি সরাসরি মেমরিতে উল্টানো হয়, তারপর দুই অর্ধাংশ মিলিয়ে দেখা হয় এবং তালিকা পুনর্গঠন করা হয়'
          },
          {
            en: 'Copy all node values into an auxiliary string and run a regular expression',
            bn: 'সব নোডের মান একটি নতুন স্ট্রিংয়ে কপি করে রেগুলার এক্সপ্রেশন চালানো হয়'
          },
          {
            en: 'Convert the linked list into a circular queue',
            bn: 'লিঙ্কড লিস্টটিকে একটি বৃত্তাকার কিউতে রূপান্তর করা হয়'
          },
          {
            en: 'Encrypt the list with SHA-256 and inspect the hash parity',
            bn: 'তালিকাকে এসএইচএ-২৫৬ দিয়ে এনক্রিপ্ট করে হ্যাশ প্যারিটি পরীক্ষা করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Combine runner midpoint discovery with the 3-pointer in-place reversal from lesson 2.',
          bn: 'লেসন ২ এর ৩-পয়েন্টার ইন-প্লেস রিভার্সালের সাথে রানার মিডপয়েন্ট কৌশলের সমন্বয় করুন।'
        },
        explanation: {
          en: 'Finding the midpoint takes O(N) time. Reversing the second half in-place takes O(N) time and O(1) space. Comparing halves takes O(N) time. This confirms palindrome symmetry without allocating memory arrays.',
          bn: 'মাঝখান বের করতে O(N) সময় লাগে। দ্বিতীয় অর্ধাংশ সরাসরি উল্টাতে O(N) সময় ও O(1) মেমরি লাগে। এরপর তুলনা করতে O(N) সময় লাগে। কোনো অতিরিক্ত অ্যারে তৈরি না করেই এটি প্যালিন্ড্রোম নিশ্চিত করে।'
        }
      },
      {
        id: 'cd-q4',
        kind: 'mcq',
        topic: 'kth-out-of-bounds',
        question: {
          en: 'In the fixed-offset runner algorithm for finding the k-th node from the end, what happens if k is strictly greater than list length N?',
          bn: 'শেষ থেকে k-তম নোড বের করার ফিক্সড-অফসেট রানার অ্যালগরিদমে k এর মান যদি তালিকার দৈর্ঘ্য N এর চেয়ে বেশি হয় তবে কী ঘটে?'
        },
        options: [
          {
            en: 'The fast pointer encounters null during the initial k-step advance loop, allowing the function to return null safely without errors',
            bn: 'প্রাথমিক k-ধাপ এগিয়ে নেওয়ার লুপের সময় fast পয়েন্টারটি null এর মুখোমুখি হয়, যার ফলে কোনো ত্রুটি ছাড়াই ফাংশনটি নিরাপদে null প্রদান করতে পারে'
          },
          {
            en: 'The CPU execution thread stalls for 100 milliseconds',
            bn: 'সিপিইউ থ্রেড ১০০ মিলিমিটারের জন্য থমকে যায়'
          },
          {
            en: 'The algorithm wraps around to the beginning and returns head',
            bn: 'অ্যালগরিদম বৃত্তাকারে ঘুরে শুরুতে ফিরে আসে এবং head প্রদান করে'
          },
          {
            en: 'The operating system raises a memory corruption warning',
            bn: 'অপারেটিং সিস্টেম একটি মেমরি দুর্নীতির সতর্কতা দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Notice the guard inside the setup loop: `for (let i = 0; i < k; i++) if (fast === null) return null;`',
          bn: 'লুপের ভেতরের গার্ডটি লক্ষ্য করুন: `for (let i = 0; i < k; i++) if (fast === null) return null;`'
        },
        explanation: {
          en: 'If k > N, the list has fewer than k elements. While advancing fast by k steps, fast will reach null before the loop finishes. Checking for null prevents crashing and cleanly signals that no such node exists.',
          bn: 'k > N হলে তালিকায় k সংখ্যক নোড নেই। fast কে k ধাপ এগিয়ে নেওয়ার সময় লুপ শেষ হওয়ার আগেই fast এর মান null হয়ে যায়। null পরীক্ষা করার ফলে কোনো ক্র্যাশ না ঘটিয়ে সুন্দরভাবে জানানো যায় এমন কোনো নোড নেই।'
        }
      },
      {
        id: 'cd-q5',
        kind: 'mcq',
        topic: 'delete-kth-from-end',
        question: {
          en: 'To remove the k-th node from the end of a list in a single pass, what additional technique is combined with the fixed-offset runner?',
          bn: 'একবারের ট্রাভার্সালে শেষ থেকে k-তম নোডটি মুছে ফেলতে ফিক্সড-অফসেট রানার কৌশলের সাথে অতিরিক্ত কোন পদ্ধতিটি যোগ করা হয়?'
        },
        options: [
          {
            en: 'A Sentinel Dummy Head placed before head, so that slow stops at the predecessor of the node being deleted',
            bn: 'head এর আগে একটি সেন্টিনেল ডামি নোড বসানো হয়, যাতে slow ঠিক মুছে ফেলা নোডের পূর্ববর্তী নোডে এসে থামে'
          },
          {
            en: 'Converting the list into a doubly linked list in memory',
            bn: 'তালিকাকে মেমরিতে একটি ডাবল লিঙ্কড লিস্টে রূপান্তর করা'
          },
          {
            en: 'A recursive stack allocating 64 frames',
            bn: '৬৪ ফ্রেম বরাদ্দকারী একটি রিকার্সিভ স্ট্যাক'
          },
          {
            en: 'Deleting the entire list and rebuilding from scratch',
            bn: 'পুরো তালিকা মুছে ফেলে নতুন করে তৈরি করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'To delete node X, you must stop at node X predecessor. What if node X is head itself?',
          bn: 'নোড X মুছতে হলে তার আগের নোডে থামতে হয়। কিন্তু নোড X যদি স্বয়ং head হয় তখন কী করবেন?'
        },
        explanation: {
          en: 'Placing a dummy node before head and starting slow from dummy ensures slow stops exactly one node BEFORE the victim. This allows slow.next = slow.next.next to excise the target node cleanly, even if the victim is the original head.',
          bn: 'head এর আগে একটি ডামি নোড রেখে slow কে ডামি থেকে শুরু করলে slow ঠিক অপসারিত নোডের এক ঘর আগে থামে। এর ফলে slow.next = slow.next.next দিয়ে সহজে নোডটি মুছে ফেলা যায়, এমনকি সেটি আসল head হলেও কোনো সমস্যা হয় না।'
        }
      },
      {
        id: 'cd-q6',
        kind: 'mcq',
        topic: 'split-for-merge-sort',
        question: {
          en: 'When splitting a linked list into two halves for Merge Sort, why must `slow.next` be set to `null` after locating the midpoint?',
          bn: 'মার্জ সর্টের জন্য লিঙ্কড লিস্টকে দুই ভাগে ভাগ করার সময় মধ্যবিন্দু পাওয়ার পর `slow.next` কে `null` করে দেওয়া কেন বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'To sever the pointer arrow between the first half and the second half, terminating the first sublist so recursive calls do not process the full list infinitely',
            bn: 'প্রথম অর্ধাংশ ও দ্বিতীয় অর্ধাংশের মাঝের তীরটি কেটে প্রথম সাবলিস্টটিকে সমাপ্ত করা, যাতে রিকার্সিভ কলগুলো পুরো তালিকাকে বারবার প্রসেস করে অসীম লুপ তৈরি না করে'
          },
          {
            en: 'To signal the CPU to flush its L1 cache registers',
            bn: 'সিপিইউকে তার L1 ক্যাশ রেজিস্টার খালি করার সংকেত দিতে'
          },
          {
            en: 'Because null values are required by the JavaScript compiler for sorting',
            bn: 'কারণ সর্টিংয়ের জন্য জাভাস্ক্রিপ্ট কম্পাইলারের null মান থাকা বাধ্যতামূলক'
          },
          {
            en: 'To erase the memory of all nodes in the second half',
            bn: 'দ্বিতীয় অর্ধাংশের সমস্ত নোডের মেমরি মুছে ফেলতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If you do not break the connection between node at slow and node at slow.next, does the left half know where it ends?',
          bn: 'slow এবং slow.next এর মাঝের সংযোগ না কাটলে বাঁদিকের তালিকা কি বুঝতে পারবে তার শেষ কোথায়?'
        },
        explanation: {
          en: 'In a linked structure, sublists are bounded only by encountering null. Setting slow.next = null terminates the left half at slow. The right half begins at the original slow.next, creating two independent, cleanly divided sublists.',
          bn: 'লিঙ্কড কাঠামোতে সাবলিস্ট কেবল null দেখেই শেষ হয়। slow.next = null বসালে বাঁদিকের অংশটি slow তে গিয়ে শেষ হয় এবং ডানদিকের অংশটি পুরানো slow.next থেকে শুরু হয়, যার ফলে দুটি সম্পূর্ণ স্বাধীন উপ-তালিকা তৈরি হয়।'
        }
      }
    ]
  }
};
