import type { Lesson } from '../../../lib/types';

export const theSkipTowerLesson: Lesson = {
  slug: 'the-skip-tower',
  tech: 'linked-lists',
  title: {
    en: 'Skip Lists — Multi-Level Express Lanes and Logarithmic Search',
    bn: 'স্কিপ লিস্ট: বহুস্তরীয় এক্সপ্রেস লেন ও লগারিদমিক অনুসন্ধান'
  },
  summary: {
    en: 'A standard sorted linked list cannot support binary search because pointer traversing is strictly sequential. Skip lists solve this by stacking probabilistic express lanes over the base list, where each layer halves the node population. This architecture delivers O(log n) expected search, insertion, and deletion without complex tree rotations, powering databases like Redis and RocksDB.',
    bn: 'সাধারণ সাজানো লিঙ্কড লিস্টে বাইনারি সার্চ চালানো যায় না কারণ নোড অ্যাক্সেস পুরোপুরি ক্রমিক। স্কিপ লিস্ট মূল তালিকার ওপর একাধিক সম্ভাব্যতাভিত্তিক এক্সপ্রেস লেন তৈরি করে এর সমাধান করে, যেখানে প্রতিটি স্তর উপাদানের সংখ্যা অর্ধেক করে। এই কৌশল কোনো জটিল ট্রি রোটেশন ছাড়াই O(log n) প্রত্যাশিত অনুসন্ধান, সন্নিবেশ ও অপসারণ নিশ্চিত করে, যা রেডিস ও রকসডিবি ডেটাবেজে ব্যবহৃত হয়।'
  },
  minutes: 22,
  nextLesson: {
    slug: 'the-memory-diorama',
    tech: 'linked-lists',
    title: {
      en: 'The Memory Diorama: Free Lists, Coalescing, and Linux list_head',
      bn: 'মেমোরি ডায়োরামা: ফ্রি লিস্ট, কোলেসিং এবং লিনাক্স list_head'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'express-lanes',
      text: {
        en: 'The Express Lane Architecture',
        bn: 'বহুস্তরীয় এক্সপ্রেস লেনের স্থাপত্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you search a sorted array, binary search cuts the candidate range in half at each step by indexing the exact middle element. Applying binary search to a sorted linked list is impossible because jumping to an index requires O(n) sequential pointer chasing. William Pugh introduced the skip list in 1990 to bypass this sequential barrier using multi-level linked references.',
        bn: 'যখন আপনি একটি সাজানো অ্যারেতে খোঁজেন, তখন বাইনারি সার্চ প্রতিটি পদক্ষেপে মধ্যবর্তী উপাদান বেছে নিয়ে অনুসন্ধান ক্ষেত্র অর্ধেক করে ফেলে। সাজানো লিঙ্কড লিস্টে বাইনারি সার্চ চালানো অসম্ভব কারণ যেকোনো ইনডেক্সে পৌঁছাতে O(n) ক্রমিক পয়েন্টার ট্রাভার্সাল করতে হয়। উইলিয়াম পুঘ ১৯৯০ সালে বহুস্তরীয় লিঙ্কড রেফারেন্স ব্যবহারের মাধ্যমে এই ক্রমিক বাধা দূর করতে স্কিপ লিস্ট আবিষ্কার করেন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A skip list organizes nodes into hierarchical layers. Level 0 contains every single item in sorted order. Level 1 retains approximately 50 percent of those elements, creating an express lane. Level 2 contains roughly 25 percent of the elements. By moving horizontally across high-level express lanes, search algorithms skip over vast swathes of intermediate nodes in a single pointer jump.',
        bn: 'স্কিপ লিস্ট উপাদানগুলোকে স্তরভিত্তিক হায়ারার্কিতে সাজায়। স্তর ০ এর মাঝে প্রতিটি উপাদান ক্রমানুসারে থাকে। স্তর ১ এর মাঝে প্রায় ৫০ শতাংশ উপাদান থাকে, যা একটি দ্রুতগামী এক্সপ্রেস লেন তৈরি করে। স্তর ২ এর মাঝে থাকে আনুমানিক ২৫ শতাংশ উপাদান। উচ্চ স্তরের এক্সপ্রেস লেনের ওপর দিয়ে এগিয়ে সার্চ অ্যালগরিদম এক লাফে শত শত অপ্রয়োজনীয় নোড এড়িয়ে যেতে পারে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'express-lane',
          def: {
            en: 'A sparse higher-level linked list that bypasses multiple ground-level nodes, enabling rapid coarse-grained traversals.',
            bn: 'একটি ফাঁকা উচ্চ স্তরের লিঙ্কড তালিকা যা নিচের স্তরের একাধিক নোডকে এড়িয়ে দ্রুত দূরত্ব অতিক্রম করে।'
          }
        },
        {
          term: 'geometric-promotion',
          def: {
            en: 'Assigning node height using independent coin flips with probability p (typically 0.5), creating a pyramid distribution.',
            bn: 'p সম্ভাব্যতা (সাধারণত ০.৫) মেনে নিরপেক্ষ কয়েন টসের মাধ্যমে নোডের উচ্চতা নির্ধারণ, যা পিরামিড বিন্যাস গড়ে তোলে।'
          }
        },
        {
          term: 'update-vector',
          def: {
            en: 'An array of pointer references recording the preceding node at each level during traversal, used to splice in new elements.',
            bn: 'ট্রাভার্সালের সময় প্রতিটি স্তরে পূর্ববর্তী নোডের ঠিকানা সংরক্ষণকারী রেফারেন্স অ্যারে, যা নতুন উপাদান জুড়তে ব্যবহৃত হয়।'
          }
        },
        {
          term: 'redis-zset',
          def: {
            en: 'An in-memory sorted set data structure combining a hash table with a skip list to provide logarithmic range queries.',
            bn: 'মেমোরিভিত্তিক সাজানো ডেটা স্ট্রাকচার যা হ্যাশ টেবিল ও স্কিপ লিস্ট মিলিয়ে লগারিদমিক রেঞ্জ কোয়েরি দেয়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'll'
    },
    {
      type: 'heading',
      id: 'search-protocol',
      text: {
        en: 'The Elevator Search Protocol',
        bn: 'উপর থেকে নিচে অনুসন্ধান প্রোটোকল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Searching a skip list operates like riding an express elevator downwards. Traversal begins at the highest layer of the head sentinel. At each tier, the pointer steps forward horizontally as long as the next value is less than the target. If advancing any further exceeds that desired key or hits null, execution descends into the subsequent lower lane.',
        bn: 'স্কিপ লিস্টে অনুসন্ধান অনেকটা এক্সপ্রেস লিফটে করে উপর থেকে নিচে নামার মতো কাজ করে। হেড সেন্টিনেলের সর্বোচ্চ স্তর থেকে ট্রাভার্সাল শুরু হয়। প্রতিটি স্তরে নির্দেশকটি ডানে সামনে এগোয় যতক্ষণ না পরবর্তী মানটি লক্ষ্যের চেয়ে ছোট থাকে। সামনের নোডটি যদি কাঙ্ক্ষিত মান ছাড়িয়ে যায় বা নাল হয়, তবে ট্রাভার্সাল এক স্তর নিচে নেমে আসে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Dimension / Operation', bn: 'পরিমাপ / অপারেশন' },
        { en: 'Sorted Array', bn: 'সাজানো অ্যারে' },
        { en: 'Red-Black Tree', bn: 'রেড-ব্ল্যাক ট্রি' },
        { en: 'Skip List', bn: 'স্কিপ লিস্ট' }
      ],
      rows: [
        [
          { en: 'Search Time Complexity', bn: 'অনুসন্ধান সময় জটিলতা' },
          { en: 'O(log n) binary search', bn: 'O(log n) বাইনারি সার্চ' },
          { en: 'O(log n) balanced tree search', bn: 'O(log n) সুষম ট্রি সার্চ' },
          { en: 'O(log n) expected search', bn: 'O(log n) প্রত্যাশিত সার্চ' }
        ],
        [
          { en: 'Insertion / Deletion Time', bn: 'সন্নিবেশ / অপসারণ সময়' },
          { en: 'O(n) element shifts', bn: 'O(n) উপাদান সরানো' },
          { en: 'O(log n) with rotations', bn: 'O(log n) রোটেশনসহ' },
          { en: 'O(log n) local pointer updates', bn: 'O(log n) স্থানীয় পয়েন্টার বদল' }
        ],
        [
          { en: 'Implementation Complexity', bn: 'কোড জটিলতা' },
          { en: 'Low (array primitives)', bn: 'কম (সাধারণ অ্যারে)' },
          { en: 'High (complex rotations)', bn: 'অত্যধিক (জটিল রোটেশন)' },
          { en: 'Moderate (pointer arrays)', bn: 'পরিমিত (পয়েন্টার অ্যারে)' }
        ],
        [
          { en: 'Concurrent Scalability', bn: 'কনকারেন্ট ব্যবহারের সুবিধা' },
          { en: 'Poor (requires global locks)', bn: 'দুর্বল (গ্লোবাল লক লাগে)' },
          { en: 'Difficult multi-node locks', bn: 'কঠিন বহু-নোড লক ব্যবস্থা' },
          { en: 'High (lock-free CAS friendly)', bn: 'উচ্চ (লক-ফ্রি CAS বান্ধব)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'implementation',
      text: {
        en: 'Skip List Implementation in TypeScript',
        bn: 'টাইপস্ক্রিপ্টে স্কিপ লিস্টের সম্পূর্ণ বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following complete implementation builds a multi-level skip list. It includes an update vector during insertion to record predecessor pointers across each layer, allowing localized pointer re-linking without tree rotations. The execution trace verifies express lane hopping across 3 distinct levels.',
        bn: 'নিচের সম্পূর্ণ বাস্তবায়নটি একটি বহুস্তরীয় স্কিপ লিস্ট তৈরি করে। সন্নিবেশের সময় প্রতিটি স্তরের পূর্ববর্তী নোড সংরক্ষণ করতে এতে একটি আপডেট ভেক্টর ব্যবহার করা হয়েছে, যা রোটেশন ছাড়াই নোড যুক্ত করতে দেয়। এক্সিকিউশন ট্রেসে ৩ টি স্তরে এক্সপ্রেস লেনের লাফগুলো যাচাই করা হয়েছে।'
      }
    },
    {
      type: 'code',
      code: `class SkipNode {
  constructor(val, level) {
    this.val = val;
    // Array of forward pointers for each assigned level
    this.forward = new Array(level + 1).fill(null);
  }
}

class SkipList {
  constructor(maxLevel = 3, p = 0.5) {
    this.maxLevel = maxLevel;
    this.p = p;
    this.level = 0;
    this.head = new SkipNode(-Infinity, maxLevel);
  }

  // Insert a node with an explicitly assigned level (for testing)
  insertWithLevel(val, assignedLevel) {
    const update = new Array(this.maxLevel + 1).fill(null);
    let cur = this.head;

    // Phase 1: Record predecessors at each level
    for (let i = this.level; i >= 0; i--) {
      while (cur.forward[i] !== null && cur.forward[i].val < val) {
        cur = cur.forward[i];
      }
      update[i] = cur;
    }

    // Phase 2: Extend current list level if new node is taller
    if (assignedLevel > this.level) {
      for (let i = this.level + 1; i <= assignedLevel; i++) {
        update[i] = this.head;
      }
      this.level = assignedLevel;
    }

    // Phase 3: Splice node into each level up to assignedLevel
    const newNode = new SkipNode(val, assignedLevel);
    for (let i = 0; i <= assignedLevel; i++) {
      newNode.forward[i] = update[i].forward[i];
      update[i].forward[i] = newNode;
    }
  }

  search(target) {
    let cur = this.head;
    const path = [];

    for (let i = this.level; i >= 0; i--) {
      while (cur.forward[i] !== null && cur.forward[i].val < target) {
        cur = cur.forward[i];
        path.push(\`L\${i}->\${cur.val}\`);
      }
    }

    cur = cur.forward[0];
    const found = cur !== null && cur.val === target;
    return { found, path };
  }

  printLevels() {
    for (let i = this.level; i >= 0; i--) {
      let cur = this.head.forward[i];
      const row = [];
      while (cur !== null) {
        row.push(cur.val);
        cur = cur.forward[i];
      }
      console.log(\`Level \${i}: \${row.join(' -> ')}\`);
    }
  }
}

const sl = new SkipList(3, 0.5);
// Deterministically populate multi-level lanes:
sl.insertWithLevel(10, 0);
sl.insertWithLevel(20, 1);
sl.insertWithLevel(30, 0);
sl.insertWithLevel(40, 2);
sl.insertWithLevel(50, 0);
sl.insertWithLevel(60, 1);
sl.insertWithLevel(70, 0);

sl.printLevels();
// Output: Level 2: 40
// Output: Level 1: 20 -> 40 -> 60
// Output: Level 0: 10 -> 20 -> 30 -> 40 -> 50 -> 60 -> 70

const s40 = sl.search(40);
console.log('Search 40 found?:', s40.found);
// Output: Search 40 found?: true

const s50 = sl.search(50);
console.log('Search 50 found?:', s50.found);
// Output: Search 50 found?: true
console.log('Search 50 path:', s50.path.join(', '));
// Output: Search 50 path: L2->40

const s25 = sl.search(25);
console.log('Search 25 found?:', s25.found);
// Output: Search 25 found?: false`
    },
    {
      type: 'heading',
      id: 'systems-adoption',
      text: {
        en: 'Why Production Systems Deploy Skip Lists',
        bn: 'কেন আধুনিক ডেটাবেজ সিস্টেমে স্কিপ লিস্ট ব্যবহৃত হয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In high-throughput databases like Redis and RocksDB, concurrent writes are the primary bottleneck. Balanced binary trees require multi-node rotations that lock entire subtrees, serializing concurrent writes. Skip lists, by contrast, only require updating local pointer references at each level. Engineers can implement concurrent skip lists using non-blocking atomic compare-and-swap primitives, unlocking massive parallelism.',
        bn: 'রেডিস এবং রকসডিবির মতো উচ্চগতির ডেটাবেজে কনকারেন্ট রাইট অপারেশন প্রধান চ্যালেঞ্জ। সুষম বাইনারি ট্রিতে রোটেশন চালাতে পুরো সাব-ট্রি লক করতে হয়, যা সমান্তরাল লেখাকে বাধাগ্রস্ত করে। এর বিপরীতে স্কিপ লিস্টে কেবল সংশ্লিষ্ট স্তরের স্থানীয় পয়েন্টার বদলালেই চলে। প্রকৌশলীরা কম্পেয়ার-অ্যান্ড-সোয়াপ (CAS) নির্দেশ ব্যবহার করে লক-মুক্ত স্কিপ লিস্ট বাস্তবায়ন করতে পারেন, যা বহুধা থ্রেডিংয়ে অভূতপূর্ব গতি আনে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Express lane indexing: Higher levels skip multiple nodes, breaking the sequential traversal limitation of linked lists.',
          bn: 'এক্সপ্রেস লেন ইনডেক্সিং: উচ্চ স্তরগুলো একাধিক নোড এড়িয়ে লিঙ্কড লিস্টের ক্রমিক ট্রাভার্সাল বাধা দূর করে।'
        },
        {
          en: 'Logarithmic performance: Searching, inserting, and deleting all achieve O(log n) expected time complexity.',
          bn: 'লগারিদমিক গতি: অনুসন্ধান, সন্নিবেশ ও অপসারণ প্রতিটি অপারেশনেই O(log n) প্রত্যাশিত সময় জটিলতা অর্জন করে।'
        },
        {
          en: 'Probabilistic balancing: Random coin flips maintain tree-like height distribution without requiring complex rotations.',
          bn: 'সম্ভাব্যতাভিত্তিক ভারসাম্য: র্যান্ডম কয়েন টসের মাধ্যমে রোটেশন ছাড়াই সুষম ট্রির মতো উচ্চতা বিন্যাস বজায় থাকে।'
        },
        {
          en: 'Production engine: Redis ZSET and RocksDB MemTables rely on skip lists for high-throughput concurrent workloads.',
          bn: 'উৎপাদন ইঞ্জিন: রেডিস ZSET এবং রকসডিবি মেমটেবিল দ্রুতগতির কনকারেন্ট ডাটা ব্যবস্থাপনায় স্কিপ লিস্ট ব্যবহার করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'st-ex1',
      kind: 'mcq',
      topic: 'binary-search-barrier',
      question: {
        en: 'Why is binary search impossible on a standard sorted singly linked list?',
        bn: 'সাধারণ সাজানো একমুখী লিঙ্কড লিস্টে কেন বাইনারি সার্চ চালানো যায় না?'
      },
      options: [
        {
          en: 'Linked lists lack random access, requiring O(n) sequential pointer traversal to find the middle node',
          bn: 'লিঙ্কড লিস্টে র্যান্ডম অ্যাক্সেস নেই, ফলে মাঝের নোড খুঁজতে O(n) ক্রমিক ট্রাভার্সাল লাগে'
        },
        {
          en: 'Linked list nodes can only store floating-point values',
          bn: 'লিঙ্কড লিস্টের নোড কেবল ভগ্নাংশ মান সংরক্ষণ করতে পারে'
        },
        {
          en: 'Binary search only operates on unsorted data structures',
          bn: 'বাইনারি সার্চ কেবল এলোমেলো ডাটার উপর কাজ করতে পারে'
        },
        {
          en: 'Operating system caches automatically invalidate pointer addresses during comparison',
          bn: 'তুলনা করার সময় অপারেটিং সিস্টেম ক্যাশ স্বয়ংক্রিয়ভাবে পয়েন্টার বাতিল করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about how binary search computes mid = (low + high) / 2 and immediately jumps to array[mid].',
        bn: 'বাইনারি সার্চ কীভাবে mid = (low + high) / ২ হিসাব করে সরাসরি array[mid] এ লাফিয়ে পৌঁছায় তা বিবেচনা করুন।'
      },
      explanation: {
        en: 'Binary search requires O(1) random access to inspect the midpoint. In a singly linked list, accessing the midpoint takes O(n) pointer steps, destroying logarithmic efficiency.',
        bn: 'বাইনারি সার্চে মধ্যবিন্দু দেখতে O(1) র্যান্ডম অ্যাক্সেস লাগে। লিঙ্কড লিস্টে মাঝের নোডে পৌঁছাতে O(n) সময় লাগে, ফলে লগারিদমিক গতি অর্জন অসম্ভব হয়ে পড়ে।'
      }
    },
    {
      id: 'st-ex2',
      kind: 'mcq',
      topic: 'expected-search-time',
      question: {
        en: 'What is the expected search time complexity in a properly constructed skip list with n elements?',
        bn: 'n উপাদান বিশিষ্ট একটি সঠিক স্কিপ লিস্টে অনুসন্ধানের প্রত্যাশিত সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(log n) expected time',
          bn: 'O(log n) প্রত্যাশিত সময়'
        },
        {
          en: 'O(n^2) expected time',
          bn: 'O(n^2) প্রত্যাশিত সময়'
        },
        {
          en: 'O(1) worst-case time',
          bn: 'O(1) ওর্স্ট-কেস সময়'
        },
        {
          en: 'O(n log n) expected time',
          bn: 'O(n log n) প্রত্যাশিত সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each express layer halves the remaining nodes to inspect, mimicking a binary search tree.',
        bn: 'প্রতিটি এক্সপ্রেস স্তর অবশিষ্ট নোডের সংখ্যা অর্ধেক করে ফেলে, যা বাইনারি সার্চ ট্রির মতো আচরণ করে।'
      },
      explanation: {
        en: 'Because each higher layer contains roughly half the elements of the layer below, moving down the levels mimics binary search, achieving O(log n) expected search time.',
        bn: 'প্রতিটি উচ্চ স্তরে নিচের স্তরের প্রায় অর্ধেক উপাদান থাকায় উপর থেকে নিচে নামার প্রক্রিয়া বাইনারি সার্চের রূপ নেয় এবং O(log n) প্রত্যাশিত সময় নিশ্চিত করে।'
      }
    },
    {
      id: 'st-ex3',
      kind: 'mcq',
      topic: 'probabilistic-height',
      question: {
        en: 'How is the height (level) of a newly inserted node determined in a skip list?',
        bn: 'স্কিপ লিস্টে একটি নতুন নোডের উচ্চতা বা লেভেল কীভাবে নির্ধারিত হয়?'
      },
      options: [
        {
          en: 'Probabilistically using repeated coin flips with probability p (typically 0.5)',
          bn: 'p সম্ভাব্যতা (সাধারণত ০.৫) বিশিষ্ট কয়েন টসের মাধ্যমে সম্ভাব্যতা নির্ধারণ করে'
        },
        {
          en: 'Deterministically based on the byte length of the node payload string',
          bn: 'নোডের পেলোড স্ট্রিংয়ের মোট বাইট সংখ্যার ওপর ভিত্তি করে'
        },
        {
          en: 'By counting the number of CPU cores active on the host motherboard',
          bn: 'হোস্ট মাদারবোর্ডে সচল সিপিইউ কোরের সংখ্যা গণনা করে'
        },
        {
          en: 'By reading the current system timestamp in microseconds modulo 4',
          bn: 'মাইক্রোসেকেন্ডে বর্তমান সিস্টেম সময়ের ৪ দ্বারা ভাগশেষ হিসাব করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'William Pugh designed skip lists around independent probabilistic coin tosses.',
        bn: 'উইলিয়াম পুঘ স্বাধীন নিরপেক্ষ কয়েন টসের ওপর ভিত্তি করে স্কিপ লিস্ট ডিজাইন করেছিলেন।'
      },
      explanation: {
        en: 'A coin is flipped repeatedly: as long as heads appears (probability p = 0.5), the node level increments, capping at maxLevel.',
        bn: 'বারবার নিরপেক্ষ কয়েন টস করা হয়: যতক্ষণ হেড আসে (p = ০.৫ সম্ভাব্যতা), ততক্ষণ নোডের উচ্চতা ১ বাড়ে এবং maxLevel এ এসে থামে।'
      }
    }
  ],
  quiz: {
    id: 'skip-tower-quiz',
    title: {
      en: 'Skip Lists and Probabilistic Indexing Quiz',
      bn: 'স্কিপ লিস্ট ও সম্ভাব্যতা ভিত্তিক ইনডেক্সিং কুইজ'
    },
    questions: [
      {
        id: 'st-q1',
        kind: 'mcq',
        topic: 'redis-zset-architecture',
        question: {
          en: 'Why does Redis choose Skip Lists over Red-Black trees for its Sorted Set (ZSET) implementation?',
          bn: 'রেডিস কেন তার সাজানো সেট (ZSET) বাস্তবায়নে রেড-ব্ল্যাক ট্রির চেয়ে স্কিপ লিস্টকে অগ্রাধিকার দেয়?'
        },
        options: [
          {
            en: 'Skip lists are easier to implement, support simpler range scans, and adapt smoothly to concurrent operations',
            bn: 'স্কিপ লিস্ট তৈরি করা সহজ, রেঞ্জ স্ক্যান করা সুবিধাজনক এবং কনকারেন্ট অপারেশনের জন্য বেশি উপযোগী'
          },
          {
            en: 'Red-Black trees require 100 times more memory than any linked list structure',
            bn: 'রেড-ব্ল্যাক ট্রি যেকোনো লিঙ্কড লিস্টের চেয়ে ১০০ গুণ বেশি মেমোরি নষ্ট করে'
          },
          {
            en: 'Skip lists eliminate the need for CPU instruction caches entirely',
            bn: 'স্কিপ লিস্টে সিপিইউ ইন্সট্রাকশন ক্যাশের কোনো প্রয়োজনই হয় না'
          },
          {
            en: 'Red-Black trees cannot store floating point numeric scores',
            bn: 'রেড-ব্ল্যাক ট্রিতে দশমিক ভগ্নাংশ স্কোর রাখা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Antirez (creator of Redis) highlighted the simplicity of range queries and absence of tree rotation overhead.',
          bn: 'রেডিসের প্রতিষ্ঠাতা আন্টিরেজ রেঞ্জ কুয়েরির সহজতা এবং ট্রি রোটেশনের জটিলতা না থাকার কথা উল্লেখ করেছিলেন।'
        },
        explanation: {
          en: 'Skip lists allow straightforward range scanning across level 0 pointers and avoid the complex multi-node tree locking required during Red-Black tree rotations.',
          bn: 'স্কিপ লিস্টের লেভেল ০ ধরে খুব সহজে রেঞ্জ স্ক্যান করা যায় এবং রেড-ব্ল্যাক ট্রির মতো জটিল রোটেশন ও লক ব্যবস্থার ঝামেলা থাকে না।'
        }
      },
      {
        id: 'st-q2',
        kind: 'mcq',
        topic: 'update-array',
        question: {
          en: 'What is the purpose of the update array during skip list insertion?',
          bn: 'স্কিপ লিস্টে নোড ঢোকানোর সময় আপডেট অ্যারের ভূমিকা কী?'
        },
        options: [
          {
            en: 'It stores the predecessor node at each level whose forward pointer must be spliced to link the new node',
            bn: 'এটি প্রতিটি স্তরের পূর্ববর্তী নোড সংরক্ষণ করে যার forward পয়েন্টার নতুন নোডের সাথে যুক্ত করতে হয়'
          },
          {
            en: 'It backups database transactions to physical solid-state drives',
            bn: 'এটি ডেটাবেজ লেনদেনকে সরাসরি এসএসডি হার্ডডিস্কে ব্যাকআপ করে'
          },
          {
            en: 'It measures the network ping between the server and the browser',
            bn: 'এটি সার্ভার ও ব্রাউজারের মধ্যকার নেটওয়ার্ক পিং পরিমাপ করে'
          },
          {
            en: 'It converts 32-bit floating point numbers into 64-bit integers',
            bn: 'এটি ৩২-বিট ভগ্নাংশ সংখ্যাকে ৬৪-বিট পূর্ণসংখ্যায় রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'To insert a node at level i, which node forward[i] pointer must be modified?',
          bn: 'i স্তরে নোড ঢোকাতে কোন নোডের forward[i] পয়েন্টারটি বদলাতে হয় তা ভাবুন।'
        },
        explanation: {
          en: 'The update array records the search path at every level, identifying exactly which predecessor nodes must point to the new node.',
          bn: 'আপডেট অ্যারে প্রতিটি স্তরে সার্চ পথ সংরক্ষণ করে, ফলে ঠিক কোন আগের নোডগুলো নতুন নোডকে নির্দেশ করবে তা সুনির্দিষ্ট হয়।'
        }
      },
      {
        id: 'st-q3',
        kind: 'mcq',
        topic: 'pointer-overhead',
        question: {
          en: 'With promotion probability p = 0.5, what is the expected average number of forward pointers per node in a skip list?',
          bn: 'p = ০.৫ সম্ভাব্যতা বিশিষ্ট একটি স্কিপ লিস্টে উপাদানপ্রতি গড়ে প্রত্যাশিত কতটি forward পয়েন্টার থাকে?'
        },
        options: [
          {
            en: '2 pointers per node on average (sum of (1/2)^k geometric series)',
            bn: 'গড়ে প্রতি নোডে ২ টি পয়েন্টার ( (১/২)^k জ্যামিতিক ধারার যোগফল )'
          },
          {
            en: '64 pointers per node',
            bn: 'প্রতি নোডে ৬৪ টি পয়েন্টার'
          },
          {
            en: '0 pointers per node',
            bn: 'প্রতি নোডে ০ টি পয়েন্টার'
          },
          {
            en: '512 pointers per node',
            bn: 'প্রতি নোডে ৫১২ টি পয়েন্টার'
          }
        ],
        answer: 0,
        hint: {
          en: 'Evaluate the infinite sum: 1 + 1/2 + 1/4 + 1/8 + ... = 1 / (1 - 0.5).',
          bn: 'অনন্ত ধারার মান হিসাব করুন: ১ + ১/২ + ১/৪ + ১/৮ + ... = ১ / (১ - ০.৫)।'
        },
        explanation: {
          en: 'The expected number of pointers is 1 / (1 - p). With p = 0.5, this equals 2 pointers per node, making memory usage compact and linear O(n).',
          bn: 'প্রত্যাশিত মোট পয়েন্টার সংখ্যা ১ / (১ - p)। p = ০.৫ হলে এর মান হয় নোডপ্রতি ২ টি পয়েন্টার, যা মেমোরি ব্যবহার রৈখিক O(n) রাখে।'
        }
      },
      {
        id: 'st-q4',
        kind: 'mcq',
        topic: 'worst-case-complexity',
        question: {
          en: 'What is the theoretical worst-case time complexity of searching a skip list if every coin flip produces level 0?',
          bn: 'যদি প্রতিটি কয়েন টসে লেভেল ০ আসে তবে তাত্ত্বিকভাবে স্কিপ লিস্ট সার্চের ওর্স্ট-কেস সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(n) time because the structure degrades to a standard singly linked list',
            bn: 'O(n) সময় কারণ পুরো কাঠামোটি একটি সাধারণ একমুখী লিঙ্কড লিস্টে নেমে আসে'
          },
          {
            en: 'O(1) time because the compiler replaces searches with lookup tables',
            bn: 'O(1) সময় কারণ কম্পাইলার সার্চের বদলে সরাসরি লুকআপ টেবিল বসিয়ে দেয়'
          },
          {
            en: 'O(log n) time because hardware CPUs force multi-level indexing',
            bn: 'O(log n) সময় কারণ সিপিইউ হার্ডওয়্যার বহুস্তরীয় ইনডেক্সিং নিশ্চিত করে'
          },
          {
            en: 'O(n!) time because the operating system aborts execution',
            bn: 'O(n!) সময় কারণ অপারেটিং সিস্টেম এক্সিকিউশন বাতিল করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'If no express lanes exist above level 0, how many nodes must you walk through?',
          bn: 'লেভেল ০ এর ওপরে কোনো এক্সপ্রেস লেন না থাকলে কতগুলো নোড হেঁটে যেতে হবে?'
        },
        explanation: {
          en: 'Without express tiers, search must traverse every node sequentially at level 0 in O(n) time. However, the probability of this occurring for large n is astronomically small.',
          bn: 'এক্সপ্রেস লেন না থাকলে লেভেল ০ ধরে প্রতিটি নোড পর্যায়ক্রমে O(n) সময়ে খুঁজতে হয়। তবে বড় n এর জন্য এমন ঘটার সম্ভাবনা শূন্যের কাছাকাছি।'
        }
      }
    ]
  }
};
