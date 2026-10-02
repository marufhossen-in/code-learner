import type { Lesson } from '../../../lib/types';

export const theSkipParadeLesson: Lesson = {
  slug: 'the-skip-parade',
  tech: 'searching',
  title: {
    en: 'Skip Lists: Layered Probabilistic Search',
    bn: 'স্কিপ লিস্ট: স্তরিত সম্ভাব্যতা ভিত্তিক অনুসন্ধান'
  },
  summary: {
    en: 'Skip lists provide a probabilistic alternative to balanced binary search trees, maintaining sorted data with O(log n) expected search, insertion, and deletion times. Invented by William Pugh in 1990, a skip list layers multiple singly-linked express lanes on top of a base sorted linked list. When inserting an element, coin flips determine its node height with probability 0.5. Searching begins at the highest express level, moving forward while the next element is smaller than the target, and descending one level when a forward step would overshoot.',
    bn: 'স্কিপ লিস্ট ব্যালান্সড বাইনারি সার্চ ট্রির একটি সম্ভাব্যতা-ভিত্তিক বিকল্প হিসেবে কাজ করে, যা গড়ে O(log n) সময়ে অনুসন্ধান, সন্নিবেশ এবং মুছে ফেলার সুবিধা দেয়। ১৯৯০ সালে উইলিয়াম পুগ কর্তৃক উদ্ভাবিত এই কাঠামো একটি সাধারণ সাজানো লিঙ্কড লিস্টের ওপরে একাধিক স্তরের এক্সপ্রেস লেন তৈরি করে। নতুন উপাদান যুক্ত করার সময় ০.৫ সম্ভাব্যতায় মুদ্রা টসের মাধ্যমে নোডের উচ্চতা নির্ধারিত হয়। অনুসন্ধান প্রক্রিয়াটি সর্বোচ্চ স্তর থেকে শুরু হয়, পরবর্তী উপাদান টার্গেটের চেয়ে ছোট থাকা পর্যন্ত সামনে এগিয়ে যায় এবং লক্ষ্য অতিক্রম করার সম্ভাবনা দেখা দিলে এক স্তর নিচে নেমে আসে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'The Challenge of Searching Linked Lists and the Skip List Solution',
        bn: 'লিঙ্কড লিস্ট অনুসন্ধানের চ্যালেঞ্জ ও স্কিপ লিস্ট সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Standard linked lists cannot perform binary search. Because linked lists lack contiguous memory addressing, locating the middle element requires an O(n) sequential traversal. To achieve logarithmic lookups while retaining the fast local pointer updates of linked structures, computer scientists traditionally relied on self-balancing binary search trees such as AVL (height-balanced) or Red-Black trees. However, balanced trees require complex rotation routines and rebalancing logic. Skip lists solve this dilemma using randomized hierarchy. By creating multi-level express lanes where each layer half-samples the elements below it, skip lists achieve logarithmic search without complex tree rotations.',
        bn: 'সাধারণ লিঙ্কড লিস্টে বাইনারি সার্চ পরিচালনা করা যায় না। লিঙ্কড লিস্টে মেমরি অ্যাড্রেস সংলগ্ন না থাকায় মাঝখানের উপাদান খুঁজে পেতেই O(n) ধারাবাহিক পরিদর্শনের প্রয়োজন হয়। লিঙ্কড কাঠামোর দ্রুত পয়েন্টার আপডেটের সুবিধা ধরে রেখে লগারিদমিক অনুসন্ধান নিশ্চিত করতে কম্পিউটার বিজ্ঞানীরা ঐতিহ্যগতভাবে AVL (উচ্চতা-ভারসাম্যযুক্ত) বা রেড-ব্ল্যাক ট্রির মতো সেলফ-ব্যালান্সিং বাইনারি সার্চ ট্রির ওপর নির্ভর করতেন। তবে ব্যালান্সড ট্রির জন্য জটিল ঘূর্ণন অ্যালগরিদম ও ভারসাম্য রক্ষার নিয়মের প্রয়োজন হয়। স্কিপ লিস্ট এলোমেলো বা সম্ভাব্যতা-ভিত্তিক স্তরবিন্যাসের মাধ্যমে এই সমস্যার সমাধান করে। নিচের স্তর থেকে অর্ধেক উপাদান নিয়ে একাধিক স্তরের এক্সপ্রেস লেন তৈরি করে স্কিপ লিস্ট কোনো জটিল ট্রি ঘূর্ণন ছাড়াই লগারিদমিক সার্চ নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Skip List',
          def: {
            en: 'A probabilistic multi-level data structure consisting of layered linked lists that provides O(log n) average search, insertion, and deletion.',
            bn: 'একটি সম্ভাব্যতা-ভিত্তিক বহুমাত্রিক ডেটা কাঠামো যা একাধিক স্তরের লিঙ্কড লিস্ট নিয়ে গঠিত এবং গড়ে O(log n) সময়ে সন্ধান, সন্নিবেশ ও মোছার সুবিধা দেয়।'
          }
        },
        {
          term: 'Express Lane',
          def: {
            en: 'A sparse higher-level linked list that bypasses multiple intermediate nodes, allowing the search pointer to make large forward hops.',
            bn: 'উচ্চ স্তরের একটি বিরল লিঙ্কড লিস্ট যা মাঝের অনেকগুলো নোড এড়িয়ে অনুসন্ধান পয়েন্টারকে দীর্ঘ দূরত্ব লাফিয়ে পার হওয়ার সুযোগ দেয়।'
          }
        },
        {
          term: 'Geometric Height Distribution',
          def: {
            en: 'The randomized allocation of node levels where each additional layer is attained with probability p (typically 0.5).',
            bn: 'নোড স্তরের এলোমেলো বণ্টন যেখানে p (সাধারণত ০.৫) সম্ভাব্যতায় প্রতিটি পরবর্তী স্তরে ওঠার যোগ্যতা অর্জিত হয়।'
          }
        },
        {
          term: 'Update Array',
          def: {
            en: 'An auxiliary array used during insertion and deletion to store the rightmost node traversed at each level prior to the target location.',
            bn: 'সন্নিবেশ এবং মোছার সময় ব্যবহৃত একটি সহায়ক অ্যারে যা লক্ষ্য অবস্থানের পূর্বে প্রতিটি স্তরে অতিক্রম করা সর্বশেষ ডান পাশের নোডটি সংরক্ষণ করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'two-move-search',
      text: {
        en: 'The Two-Move Search Algorithm: Forward and Down',
        bn: 'দ্বি-পদক্ষেপ অনুসন্ধান অ্যালগরিদম: সামনে এবং নিচে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Searching a skip list relies on two basic operations: advancing along the current express tier and descending to the next layer below. Traversal begins at the head sentinel on the highest active plane. At any position, the algorithm checks the forward link. If the adjacent item is strictly smaller than the target, the pointer moves forward. If the forward entry is greater than or equal to the target or reaches the list boundary, the pointer drops down one tier. This descent repeats until passing base layer 0, where the neighboring entry is verified. In expectation, the algorithm inspects at most 2 items per tier before descending. Across log2(n) total tiers, total expected comparisons remain bounded by O(log n).',
        bn: 'স্কিপ লিস্ট অনুসন্ধান মূলত দুটি মৌলিক অপারেশনের ওপর নির্ভর করে: বর্তমান এক্সপ্রেস লেন ধরে সামনে এগোনো এবং নিচের স্তরে নেমে আসা। অনুসন্ধানটি সর্বোচ্চ সক্রিয় সমতলে হেড সেন্টিনেল থেকে শুরু হয়। যেকোনো অবস্থানে অ্যালগরিদমটি সম্মুখবর্তী লিংক পরীক্ষা করে। যদি সংলগ্ন উপাদানটি টার্গেটের চেয়ে ছোট হয়, তবে পয়েন্টার সামনে এগিয়ে যায়। আর যদি পরবর্তী এন্ট্রি টার্গেটের সমান বা বড় হয় অথবা তালিকার শেষ প্রান্তে পৌঁছায়, তবে পয়েন্টার ১ স্তর নিচে নেমে আসে। স্তর ০ অতিক্রম না করা পর্যন্ত এই অবতরণ চলতে থাকে এবং সেখানে সংলগ্ন এন্ট্রি যাচাই করা হয়। গাণিতিক প্রত্যাশা অনুযায়ী নিচে নামার আগে স্তরপ্রতি সর্বোচ্চ ২টি উপাদান পরীক্ষা করা হয়। মোট log2(n) স্তরে সামগ্রিক প্রত্যাশিত তুলনার সংখ্যা O(log n) এ সীমাবদ্ধ থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'skip-list-core.ts',
      caption: {
        en: 'Implementation of the SkipNode and SkipList data structure with randomized levels.',
        bn: 'এলোমেলো স্তর সহ SkipNode এবং SkipList ডেটা কাঠামোর বাস্তবায়ন।'
      },
      code: `export class SkipNode {
  val: number;
  forward: (SkipNode | null)[];

  constructor(val: number, level: number) {
    this.val = val;
    this.forward = new Array(level).fill(null);
  }
}

export class SkipList {
  maxLevel: number;
  p: number;
  level: number;
  head: SkipNode;

  constructor(maxLevel: number = 16, p: number = 0.5) {
    this.maxLevel = maxLevel;
    this.p = p;
    this.level = 1;
    this.head = new SkipNode(-Infinity, maxLevel);
  }

  randomLevel(): number {
    let lvl = 1;
    while (Math.random() < this.p && lvl < this.maxLevel) {
      lvl++;
    }
    return lvl;
  }

  search(target: number): boolean {
    let curr: SkipNode = this.head;

    // Traverse from highest express level down to base level
    for (let i = this.level - 1; i >= 0; i--) {
      while (curr.forward[i] && curr.forward[i]!.val < target) {
        curr = curr.forward[i]!; // Advance forward in express lane
      }
      // Drop down to level i - 1
    }

    curr = curr.forward[0]!;
    return curr !== null && curr.val === target;
  }

  insert(val: number, forcedLevel?: number): void {
    const update = new Array(this.maxLevel).fill(null);
    let curr: SkipNode = this.head;

    for (let i = this.level - 1; i >= 0; i--) {
      while (curr.forward[i] && curr.forward[i]!.val < val) {
        curr = curr.forward[i]!;
      }
      update[i] = curr;
    }

    const lvl = forcedLevel ?? this.randomLevel();
    if (lvl > this.level) {
      for (let i = this.level; i < lvl; i++) {
        update[i] = this.head;
      }
      this.level = lvl;
    }

    const newNode = new SkipNode(val, lvl);
    for (let i = 0; i < lvl; i++) {
      newNode.forward[i] = update[i].forward[i];
      update[i].forward[i] = newNode;
    }
  }
}`
    },
    {
      type: 'heading',
      id: 'insertion-and-surgery',
      text: {
        en: 'Local Insertion Surgery vs Tree Rotations',
        bn: 'স্থানীয় সন্নিবেশ শল্যচিকিৎসা বনাম ট্রি ঘূর্ণন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The distinct architectural advantage of skip lists over balanced search trees is the locality of updates. When inserting a new key into an AVL or Red-Black tree, a single insertion can trigger cascading balance violations that require multiple tree rotations all the way up to the root. In high-concurrency systems, locking multiple tree levels creates severe thread bottlenecks. In contrast, inserting a key into a skip list requires only local pointer rewrites. An auxiliary update array records the predecessor node at each level during the initial search pass. Once the new node level is generated via coin flips, pointers are spliced locally level by level. No other nodes in the entire structure are modified, enabling lock-free concurrent implementations.',
        bn: 'ব্যালান্সড সার্চ ট্রির তুলনায় স্কিপ লিস্টের সবচেয়ে বড় স্থাপত্যিক সুবিধা হলো পরিবর্তনের স্থানীয়করণ। একটি AVL বা রেড-ব্ল্যাক ট্রিতে নতুন উপাদান ঢোকানোর সময় একটি একক সন্নিবেশ ভারসাম্য নষ্ট করতে পারে, যার ফলে রুট পর্যন্ত একাধিক ট্রি ঘূর্ণন পরিচালনার প্রয়োজন হয়। উচ্চ-কনকারেন্সি বা সমান্তরাল সিস্টেমে একাধিক ট্রি লেভেল লক করতে গিয়ে মারাত্মক থ্রেড অচলাবস্থা তৈরি হয়। এর বিপরীতে স্কিপ লিস্টে উপাদান সন্নিবেশ করতে কেবল স্থানীয় পয়েন্টার পরিবর্তনের প্রয়োজন হয়। প্রাথমিক অনুসন্ধানের সময় একটি সহায়ক আপডেট অ্যারে প্রতিটি স্তরের পূর্ববর্তী নোড সংরক্ষণ করে। মুদ্রা টসের মাধ্যমে নতুন নোডের স্তর নির্ধারিত হলে প্রতিটি স্তরে স্থানীয়ভাবে পয়েন্টারগুলো জোড়া দেওয়া হয়। কাঠামোর অন্য কোনো নোডে কোনো পরিবর্তন করতে হয় না, যা লক-মুক্ত সমান্তরাল বাস্তবায়ন সম্ভব করে তোলে।'
      }
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Execution Trace: Multi-Level Step Traversal',
        bn: 'এক্সিকিউশন ট্রেস: বহুমাত্রিক স্তরে ধাপভিত্তিক পরিদর্শন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We construct a 4-tier skip structure containing keys [3, 7, 12, 19, 21, 25] with tower capacities 1, 3, 2, 4, 1, and 3 respectively. When seeking key 21, traversal begins on topmost tier 3. The forward link leaps past 3, 7, and 12 directly to item 19 in 1 step. From item 19, the tier 3 link is null, prompting descent through tiers 2, 1, and 0. On tier 0, it advances to item 21, confirming the match in 5 steps. When querying missing value 15, the pointer inspects tier 3, descends to tier 2 to visit 7, drops to tier 1 to visit 12, and reaches tier 0. On tier 0, item 12 points to 19, establishing that 15 is absent.',
        bn: 'অনুসন্ধান পদ্ধতি পরিষ্কারভাবে বুঝতে আমরা [3, 7, 12, 19, 21, 25] কি বিশিষ্ট একটি 4 স্তরের স্কিপ কাঠামো তৈরি করি যার মিনারগুলোর ধারণক্ষমতা যথাক্রমে 1, 3, 2, 4, 1 এবং 3। কি 21 খোঁজার সময় পরিদর্শনটি সর্বোচ্চ স্তর 3 থেকে শুরু হয়। সম্মুখবর্তী লিংকটি 3, 7 এবং 12 কে এড়িয়ে 1 পদক্ষেপে সরাসরি আইটেম 19 এ পৌঁছায়। আইটেম 19 থেকে স্তর 3 এর লিংক ফাঁকা থাকায় পয়েন্টার পর্যায়ক্রমে স্তর 2, 1 এবং 0 এ নেমে আসে। স্তর 0 এ এটি সরাসরি আইটেম 21 এ পৌঁছে মোট 5 পদক্ষেপে মিল নিশ্চিত করে। অন্যদিকে অনুপস্থিত মান 15 অনুসন্ধানের সময় পয়েন্টার স্তর 3 দেখে, স্তর 2 এ নেমে 7 এ যায়, স্তর 1 এ নেমে 12 এ যায় এবং স্তর 0 এ পৌঁছায়। স্তর 0 এ আইটেম 12 সরাসরি 19 কে নির্দেশ করায় নিশ্চিত হওয়া যায় যে 15 অনুপস্থিত।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'trace-skip-list.ts',
      caption: {
        en: 'Verified search paths for successful and unsuccessful lookups.',
        bn: 'সফল এবং ব্যর্থ অনুসন্ধানের পরীক্ষিত পরিদর্শন পাথ।'
      },
      code: `// Multi-Level Skip List Structure:
// Level 3: Head --------------------------> [19] -----------------> null
// Level 2: Head ----------> [7] ----------> [19] ----------> [25] -> null
// Level 1: Head ----------> [7] -> [12] --> [19] ----------> [25] -> null
// Level 0: Head -> [3] ---> [7] -> [12] --> [19] -> [21] -> [25] -> null

// 1. Search for target 21:
// Level 3: Head -> forward to [19] (19 < 21)
// Level 3: [19] -> forward is null -> drop to Level 2
// Level 2: [19] -> forward [25] > 21 -> drop to Level 1
// Level 1: [19] -> forward [25] > 21 -> drop to Level 0
// Level 0: [19] -> forward to [21] (21 == 21) -> MATCH FOUND!
// Total steps: 5

// 2. Search for target 15:
// Level 3: Head -> forward [19] > 15 -> drop to Level 2
// Level 2: Head -> forward to [7] (7 < 15)
// Level 2: [7]  -> forward [19] > 15 -> drop to Level 1
// Level 1: [7]  -> forward to [12] (12 < 15)
// Level 1: [12] -> forward [19] > 15 -> drop to Level 0
// Level 0: [12] -> forward [19] != 15 -> TARGET ABSENT!
// Predecessor lower bound is 12.`
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'Visualizing Express Lanes and Vertical Dropdowns',
        bn: 'এক্সপ্রেস লেন ও উল্লম্ব ড্রপডাউনের ভিজ্যুয়ালাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'srch'
    },
    {
      type: 'heading',
      id: 'production-applications',
      text: {
        en: 'Production Systems Utilizing Skip Lists',
        bn: 'স্কিপ লিস্ট ব্যবহারকারী প্রোডাকশন সিস্টেম'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Redis Sorted Sets (zset): Redis implements its high-throughput sorted set commands (ZRANGEBYSCORE, ZRANK) using a hybrid combination of a hash table and a skip list.',
          bn: 'রেডিস সর্টেড সেট (zset): Redis তার উচ্চগতির সর্টেড সেট কমান্ডগুলো (ZRANGEBYSCORE, ZRANK) পরিচালনা করতে হ্যাশ টেবিল এবং স্কিপ লিস্টের সমন্বিত কাঠামো ব্যবহার করে।'
        },
        {
          en: 'LSM-Tree MemTables in RocksDB and LevelDB: Log-structured merge-tree storage engines use concurrent lock-free skip lists in RAM to buffer fast in-memory writes before flushing to disk.',
          bn: 'RocksDB ও LevelDB তে LSM-ট্রি মেমটেবিল: লগ-স্ট্রাকচার্ড মার্জ-ট্রি ইঞ্জিন ডিস্কে লেখার আগে মেমরিতে দ্রুত লেখার বাফার হিসেবে সমান্তরাল লক-মুক্ত স্কিপ লিস্ট ব্যবহার করে।'
        },
        {
          en: 'Java ConcurrentSkipListMap: The standard Java library ships ConcurrentSkipListMap, offering thread-safe, lock-free sorted key-value navigation scalable across multiple CPU cores.',
          bn: 'জাভা ConcurrentSkipListMap: স্ট্যান্ডার্ড জাভা লাইব্রেরি ConcurrentSkipListMap সরবরাহ করে, যা একাধিক সিপিইউ কোরে থ্রেড-সেফ এবং লক-মুক্ত সাজানো কী-ভ্যালু ব্যবস্থাপনা নিশ্চিত করে।'
        },
        {
          en: 'Apache Cassandra Index Buffers: Cassandra uses in-memory skip lists to maintain row keys in sorted order for rapid range scanning across storage partitions.',
          bn: 'অ্যাপাচি ক্যাসান্ড্রা ইনডেক্স বাফার: স্টোরেজ পার্টিশন জুড়ে দ্রুত রেঞ্জ স্ক্যান নিশ্চিত করতে ক্যাসান্ড্রা মেমরিতে রো কী সাজিয়ে রাখতে স্কিপ লিস্ট ব্যবহার করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'summary',
      text: {
        en: 'Summary: The Power of Randomness in Search Structures',
        bn: 'সারসংক্ষেপ: সার্চ কাঠামোতে সম্ভাব্যতা ও এলোমেলোতার ক্ষমতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Skip lists prove that probabilistic algorithms can match the theoretical asymptotic performance of deterministic structures while dramatically simplifying implementation. By stacking geometric express lanes through independent coin flips, skip lists deliver O(log n) expected search, insertion, and deletion. Because modifications are strictly localized without complex rebalancing rotations, skip lists serve as the backbone for high-performance concurrent in-memory storage engines.',
        bn: 'স্কিপ লিস্ট প্রমাণ করে যে সম্ভাব্যতা-ভিত্তিক অ্যালগরিদম বাস্তবায়নকে অবিশ্বাস্যভাবে সহজ রেখেও জটিল কাঠামোর তাত্ত্বিক কার্যক্ষমতার সমান গতি দিতে পারে। স্বাধীন মুদ্রা টসের মাধ্যমে জ্যামিতিক এক্সপ্রেস লেন তৈরি করে স্কিপ লিস্ট গড়ে O(log n) সময়ে সন্ধান, সন্নিবেশ ও মোছার সুবিধা নিশ্চিত করে। যেহেতু কোনো জটিল ঘূর্ণন ছাড়াই পরিবর্তনগুলো সম্পূর্ণ স্থানীয় থাকে, তাই স্কিপ লিস্ট আধুনিক উচ্চগতির মেমরি স্টোরেজ ইঞ্জিনের প্রধান ভিত্তি হিসেবে কাজ করে।'
      }
    }
  ],
  nextLesson: {
    slug: 'the-grid-stair',
    tech: 'searching',
    title: {
      en: 'Matrix Searching: 2D Saddleback & Row-Column Elimination',
      bn: 'ম্যাট্রিক্স অনুসন্ধান: ২ডি স্যাডলব্যাক ও সারি-কলাম বর্জন'
    }
  },
  exercises: [
    {
      id: 'sp-ex1',
      kind: 'mcq',
      topic: 'skip list coin flip probability',
      question: {
        en: 'With a promotion probability of p = 0.5, what fraction of elements in an n-element skip list is expected to reach level 2 or higher?',
        bn: 'p = ০.৫ পদোন্নতি সম্ভাব্যতায় n উপাদানের একটি স্কিপ লিস্টে উপাদানগুলোর কত অংশ স্তর ২ বা তার উপরে পৌঁছাবে বলে প্রত্যাশা করা হয়?'
      },
      options: [
        {
          en: 'Approximately 1/4 of all elements (since (1/2)^2 = 1/4)',
          bn: 'সমস্ত উপাদানের প্রায় ১/৪ অংশ (যেহেতু (১/২)^২ = ১/৪)'
        },
        {
          en: 'Approximately 1/2 of all elements',
          bn: 'সমস্ত উপাদানের প্রায় ১/২ অংশ'
        },
        {
          en: 'All n elements',
          bn: 'সমস্ত n উপাদান'
        },
        {
          en: 'Exactly 1 single element',
          bn: 'ঠিক ১টি একক উপাদান'
        }
      ],
      answer: 0,
      hint: {
        en: 'Level 0 contains n elements. Level 1 contains n * 0.5 elements. Level 2 contains n * 0.5 * 0.5 elements.',
        bn: 'স্তর ০ এ n উপাদান থাকে। স্তর ১ এ n * ০.৫ উপাদান থাকে। স্তর ২ এ n * ০.৫ * ০.৫ উপাদান থাকে।'
      },
      explanation: {
        en: 'Each level up requires winning an independent coin toss with probability 1/2. Reaching level 2 requires winning 2 consecutive tosses, which occurs with probability (1/2) * (1/2) = 1/4.',
        bn: 'প্রতিটি উপরের স্তরে উঠতে ১/২ সম্ভাব্যতার স্বাধীন মুদ্রা টসে জিততে হয়। স্তর ২ এ পৌঁছাতে পরপর ২টি টসে জিততে হয়, যার সম্ভাবনা হয় (১/২) * (১/২) = ১/৪।'
      }
    },
    {
      id: 'sp-ex2',
      kind: 'predict',
      topic: 'skip list search trace',
      question: {
        en: 'In the 4-level skip list tracing target 21, the search begins at Level 3. Why does the search pointer immediately leap from the Head to node 19 in 1 single step?',
        bn: 'টার্গেট ২১ অনুসন্ধানের ৪ স্তরের স্কিপ লিস্টে স্তর ৩ এ অনুসন্ধান শুরুর পর কেন পয়েন্টার মাত্র ১ পদক্ষেপে সরাসরি হেড থেকে নোড ১৯ এ পৌঁছে যায়?'
      },
      options: [
        {
          en: 'Because node 19 is the only element on Level 3 and 19 < 21, allowing the search to skip intermediate elements 3, 7, and 12 on lower levels',
          bn: 'কারণ নোড ১৯ হলো স্তর ৩ এর একমাত্র উপাদান এবং ১৯ < ২১ হওয়ায় এটি নিচের স্তরের ৩, ৭ ও ১২ উপাদানকে সরাসরি এড়িয়ে যেতে পারে'
        },
        {
          en: 'Because binary search computes the midpoint index automatically',
          bn: 'কারণ বাইনারি সার্চ স্বয়ংক্রিয়ভাবে মধ্যবিন্দু ইনডেক্স হিসাব করে'
        },
        {
          en: 'Because node 19 is stored at memory address 0',
          bn: 'কারণ নোড ১৯ মেমরি অ্যাড্রেস ০ তে সংরক্ষিত থাকে'
        },
        {
          en: 'Because Level 3 reverses the list ordering',
          bn: 'কারণ স্তর ৩ তালিকার ক্রমকে উল্টে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Look at the diagram of Level 3: Head points directly to node 19.',
        bn: 'স্তর ৩ এর ডায়াগ্রামটি দেখুন: হেড সরাসরি নোড ১৯ কে পয়েন্ট করে।'
      },
      explanation: {
        en: 'The Level 3 express lane connects the Head directly to node 19. Since 19 is less than the target 21, the pointer hops across the entire initial segment in a single operation.',
        bn: 'স্তর ৩ এর এক্সপ্রেস লেনটি হেডকে সরাসরি নোড ১৯ এর সাথে যুক্ত করে। যেহেতু ১৯ সংখ্যাটি টার্গেট ২১ এর চেয়ে ছোট, তাই পয়েন্টারটি একটি একক অপারেশনে পুরো শুরুর অংশ পার হয়ে যায়।'
      }
    },
    {
      id: 'sp-ex3',
      kind: 'mcq',
      topic: 'skip list vs balanced bst',
      question: {
        en: 'What is the primary operational advantage that makes skip lists preferred over Red-Black trees in high-concurrency database storage engines like RocksDB MemTable?',
        bn: 'কোন প্রধান অপারেশনাল সুবিধার কারণে RocksDB MemTable এর মতো উচ্চ-কনকারেন্সি ডেটাবেস স্টোরেজ ইঞ্জিনে রেড-ব্ল্যাক ট্রির চেয়ে স্কিপ লিস্ট বেশি পছন্দ করা হয়?'
      },
      options: [
        {
          en: 'Skip list insertions only modify local forward pointers of neighboring nodes, avoiding complex cascading tree rotations and enabling lock-free concurrent writes',
          bn: 'স্কিপ লিস্ট সন্নিবেশে শুধুমাত্র প্রতিবেশী নোডের স্থানীয় ফরোয়ার্ড পয়েন্টার পরিবর্তিত হয়, যা জটিল ট্রি ঘূর্ণন এড়ায় এবং লক-মুক্ত সমান্তরাল রাইটিং সম্ভব করে'
        },
        {
          en: 'Skip lists consume zero bytes of memory overhead',
          bn: 'স্কিপ লিস্ট কোনো মেমরি অপচয় করে না'
        },
        {
          en: 'Red-Black trees cannot store integers larger than 32 bits',
          bn: 'রেড-ব্ল্যাক ট্রি ৩২ বিটের চেয়ে বড় পূর্ণসংখ্যা সংরক্ষণ করতে পারে না'
        },
        {
          en: 'Skip lists run in O(1) worst-case time on all queries',
          bn: 'সমস্ত কোয়েরিতে স্কিপ লিস্ট সবচেয়ে খারাপ ক্ষেত্রে O(1) সময়ে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider the scope of modifications: local pointer splicing versus tree rotation up to the root.',
        bn: 'পরিবর্তনের ব্যাপ্তি বিবেচনা করুন: স্থানীয় পয়েন্টার জোড়া লাগানো বনাম রুট পর্যন্ত ট্রি ঘূর্ণন।'
      },
      explanation: {
        en: 'Red-Black tree insertions frequently require multiple tree rotations that rebalance nodes along the ancestor path, requiring coarse-grained locks. Skip list insertions only update adjacent pointers, making fine-grained lock-free concurrency straightforward.',
        bn: 'রেড-ব্ল্যাক ট্রিতে নতুন উপাদানের কারণে প্রায়শই একাধিক ঘূর্ণন ঘটিয়ে পূর্ববর্তী নোডগুলোর ভারসাম্য রক্ষা করতে হয়, যার জন্য বড় লকের প্রয়োজন হয়। কিন্তু স্কিপ লিস্টে কেবল সংলগ্ন পয়েন্টারগুলো পরিবর্তিত হওয়ায় লক-মুক্ত সমান্তরাল পরিচালনা অত্যন্ত সহজ হয়।'
      }
    }
  ],
  quiz: {
    id: 'skip-list-quiz',
    title: {
      en: 'Skip List Architecture & Probabilistic Search Quiz',
      bn: 'স্কিপ লিস্ট আর্কিটেকচার ও সম্ভাব্যতা অনুসন্ধান কুইজ'
    },
    questions: [
      {
        id: 'slq1',
        kind: 'mcq',
        topic: 'expected search complexity',
        question: {
          en: 'What is the expected average-case time complexity of searching for an element in a skip list of n elements with coin probability p = 0.5?',
          bn: 'p = ০.৫ মুদ্রা সম্ভাবনায় n উপাদানের একটি স্কিপ লিস্টে কোনো উপাদান অনুসন্ধানের প্রত্যাশিত গড় টাইম কমপ্লেক্সিটি কত?'
        },
        options: [
          {
            en: 'O(log n)',
            bn: 'O(log n)'
          },
          {
            en: 'O(n)',
            bn: 'O(n)'
          },
          {
            en: 'O(n log n)',
            bn: 'O(n log n)'
          },
          {
            en: 'O(1)',
            bn: 'O(1)'
          }
        ],
        answer: 0,
        hint: {
          en: 'The number of levels is approximately log2(n), and the average steps per level is bounded by 2.',
          bn: 'স্তরের সংখ্যা আনুমানিক log2(n), এবং স্তরপ্রতি গড় পদক্ষেপের সংখ্যা ২ দ্বারা সীমাবদ্ধ।'
        },
        explanation: {
          en: 'There are log2(n) total levels on average. At each level, the expected number of steps before dropping down is 1/p = 2. Therefore, total expected time is 2 * log2(n) = O(log n).',
          bn: 'গড়ে মোট স্তরের সংখ্যা log2(n)। প্রতিটি স্তরে নিচে নামার আগে প্রত্যাশিত পদক্ষেপের সংখ্যা ১/p = ২। সুতরাং মোট প্রত্যাশিত সময় হলো ২ * log2(n) = O(log n)।'
        }
      },
      {
        id: 'slq2',
        kind: 'mcq',
        topic: 'worst case behavior',
        question: {
          en: 'In the extremely unlikely event that every coin flip fails to promote any node above Level 0, what does the skip list degrade into?',
          bn: 'অত্যন্ত বিরল ঘটনায় যদি কোনো মুদ্রা টসেই কোনো নোড স্তর ০ এর উপরে পদোন্নতি না পায়, তবে স্কিপ লিস্টটি কিসে পরিণত হয়?'
        },
        options: [
          {
            en: 'A standard sorted singly-linked list with O(n) search time',
            bn: 'O(n) অনুসন্ধান সময় বিশিষ্ট একটি সাধারণ সাজানো সিঙ্গলি লিঙ্কড লিস্ট'
          },
          {
            en: 'A balanced AVL binary search tree',
            bn: 'একটি সুষম AVL বাইনারি সার্চ ট্রি'
          },
          {
            en: 'A circular ring buffer',
            bn: 'একটি সার্কুলার রিং বাফার'
          },
          {
            en: 'An empty hash table',
            bn: 'একটি ফাঁকা হ্যাশ টেবিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Without any express lanes above level 0, all pointers reside only in the base linked list.',
          bn: 'স্তর ০ এর উপরে কোনো এক্সপ্রেস লেন না থাকলে সমস্ত পয়েন্টার কেবল মূল বেস লিস্টেই সীমাবদ্ধ থাকে।'
        },
        explanation: {
          en: 'If no node is promoted to Level 1 or higher, the structure contains only the bottom Level 0 linked list, degrading search performance to O(n) linear scanning.',
          bn: 'কোনো নোড স্তর ১ বা তার উপরে পদোন্নতি না পেলে কাঠামোটিতে কেবল নিচের স্তর ০ এর লিঙ্কড লিস্ট অবশিষ্ট থাকে, ফলে অনুসন্ধানের গতি O(n) লিনিয়ার স্ক্যানে নেমে যায়।'
        }
      },
      {
        id: 'slq3',
        kind: 'mcq',
        topic: 'redis zset usage',
        question: {
          en: 'Why does Redis utilize a skip list in its Sorted Set (zset) implementation alongside a hash table?',
          bn: 'রেডিস তার সর্টেড সেট (zset) বাস্তবায়নে হ্যাশ টেবিলের পাশাপাশি কেন স্কিপ লিস্ট ব্যবহার করে?'
        },
        options: [
          {
            en: 'The hash table provides O(1) point lookups by key, while the skip list provides O(log n) ordered range queries and rank lookups',
            bn: 'হ্যাশ টেবিল কী দ্বারা O(1) সুনির্দিষ্ট সন্ধান দেয়, আর স্কিপ লিস্ট O(log n) ক্রমানুসারে রেঞ্জ কোয়েরি ও র‍্যাংক সন্ধান নিশ্চিত করে'
          },
          {
            en: 'The skip list compresses values to save 80 percent of memory',
            bn: 'স্কিপ লিস্ট মান সংকুচিত করে ৮০ শতাংশ মেমরি বাঁচায়'
          },
          {
            en: 'Because Redis runs only on single-threaded CPUs that cannot use binary trees',
            bn: 'কারণ রেডিস শুধুমাত্র সিঙ্গেল-থ্রেডেড সিপিইউতে চলে যা বাইনারি ট্রি চালাতে পারে না'
          },
          {
            en: 'To prevent network packet loss over TCP connections',
            bn: 'টিসিপি সংযোগে নেটওয়ার্ক প্যাকেট নষ্ট হওয়া রোধ করতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hash tables cannot do range queries like ZRANGEBYSCORE. Skip lists maintain sorted order.',
          bn: 'হ্যাশ টেবিল ZRANGEBYSCORE এর মতো রেঞ্জ কোয়েরি করতে পারে না। স্কিপ লিস্ট সাজানো ক্রম বজায় রাখে।'
        },
        explanation: {
          en: 'Combining a hash table with a skip list gives Redis the best of both worlds: O(1) lookup of a member score via the hash map, and fast O(log n) range retrieval and rank calculations via the skip list.',
          bn: 'হ্যাশ টেবিল এবং স্কিপ লিস্টের সমন্বয় রেডিসকে উভয় সুবিধার নিখুঁত সমন্বয় দেয়: হ্যাশ ম্যাপের মাধ্যমে O(1) স্কোরের সন্ধান এবং স্কিপ লিস্টের মাধ্যমে দ্রুত O(log n) রেঞ্জ ও র‍্যাংক গণনা।'
        }
      },
      {
        id: 'slq4',
        kind: 'mcq',
        topic: 'max level limitation',
        question: {
          en: 'Why do production skip list implementations cap maxLevel at approximately 16 or 32?',
          bn: 'প্রোডাকশন স্কিপ লিস্ট বাস্তবায়নে কেন সর্বোচ্চ স্তর maxLevel আনুমানিক ১৬ বা ৩২ এ সীমাবদ্ধ রাখা হয়?'
        },
        options: [
          {
            en: 'Because 2^32 exceeds 4 billion elements, making higher levels unnecessary and wasteful of memory pointers',
            bn: 'কারণ ২^৩২ সংখ্যাটি ৪ বিলিয়নেরও বেশি উপাদান নির্দেশ করে, যার ফলে এর চেয়ে বেশি স্তর অপ্রয়োজনীয় এবং পয়েন্টার মেমরির অপচয় ঘটায়'
          },
          {
            en: 'Because CPU hardware registers cannot store numbers larger than 32',
            bn: 'কারণ সিপিইউ হার্ডওয়্যার রেজিস্টার ৩২ এর চেয়ে বড় সংখ্যা ধারণ করতে অক্ষম'
          },
          {
            en: 'Because coin flip generators fail if called more than 32 times',
            bn: 'কারণ মুদ্রা টস জেনারেটর ৩২ বারের বেশি ডাকলে ত্রুটি দেয়'
          },
          {
            en: 'To prevent stack overflow during recursive pointer deallocation',
            bn: 'রিকার্সিভ পয়েন্টার মেমরি মুক্ত করার সময় স্ট্যাক ওভারফ্লো রোধ করতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Calculate 2^32 = 4294967296. Can an in-memory collection realistically exceed 4 billion nodes?',
          bn: '২^৩২ = ৪২৯৪৯৬৭২৯৬ হিসাব করুন। মেমরি সংগ্রহ কি বাস্তবে ৪ বিলিয়নের বেশি নোড ছাড়িয়ে যেতে পারে?'
        },
        explanation: {
          en: 'With p = 0.5, a maxLevel of 32 easily supports up to 2^32 (over 4.29 billion) elements while keeping search logarithmic. Additional levels would waste pointer memory on empty links.',
          bn: 'p = ০.৫ হলে ৩২টি সর্বোচ্চ স্তর সহজেই ২^৩২ (৪.২৯ বিলিয়নের বেশি) উপাদানকে লগারিদমিক গতিতে পরিচালনা করতে পারে। এর চেয়ে বেশি স্তর নিলে ফাঁকা লিংকের কারণে পয়েন্টার মেমরির অপচয় হবে।'
        }
      },
      {
        id: 'slq5',
        kind: 'mcq',
        topic: 'space complexity of skip lists',
        question: {
          en: 'What is the average overall space complexity of a skip list storing n elements with coin probability p = 0.5?',
          bn: 'p = ০.৫ মুদ্রা সম্ভাবনায় n উপাদান সংরক্ষণকারী একটি স্কিপ লিস্টের গড় সামগ্রিক স্পেস কমপ্লেক্সিটি কত?'
        },
        options: [
          {
            en: 'O(n) total space (averaging 2 pointers per element across all levels)',
            bn: 'O(n) মোট মেমরি (সমস্ত স্তর জুড়ে উপাদানপ্রতি গড়ে মাত্র ২টি পয়েন্টার লাগে)'
          },
          {
            en: 'O(n log n) total space',
            bn: 'O(n log n) মোট মেমরি'
          },
          {
            en: 'O(n^2) quadratic space',
            bn: 'O(n^2) কোয়াড্রাটিক মেমরি'
          },
          {
            en: 'O(1) space',
            bn: 'O(1) মেমরি'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sum the geometric series: n + n/2 + n/4 + n/8 + ... = 2 * n.',
          bn: 'জ্যামিতিক ধারাটি যোগ করুন: n + n/২ + n/৪ + n/৮ + ... = ২ * n।'
        },
        explanation: {
          en: 'The expected number of pointers across all levels is n * (1 + 1/2 + 1/4 + 1/8 + ...) = 2 * n. Therefore, the average memory overhead is strictly linear O(n).',
          bn: 'সমস্ত স্তর জুড়ে মোট পয়েন্টারের প্রত্যাশিত সংখ্যা হলো n * (১ + ১/২ + ১/৪ + ১/৮ + ...) = ২ * n। সুতরাং গড় মেমরি খরচ কঠোরভাবে লিনিয়ার O(n) এর মধ্যে থাকে।'
        }
      }
    ]
  }
};
