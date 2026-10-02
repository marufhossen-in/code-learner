import type { Lesson } from '../../../lib/types';

export const theConcurrentGroveLesson: Lesson = {
  slug: 'the-concurrent-grove',
  tech: 'trees',
  title: {
    en: 'Concurrent Trees — Lock-Free Traversal, Latches, and the B-Link Invariant',
    bn: 'সমবর্তী ট্রি: লক-ফ্রি ট্রাভার্সাল, ল্যাচ এবং বি-লিংক ইনভেরিয়েন্ট'
  },
  summary: {
    en: 'Single-threaded trees fail under high-concurrency production workloads where thousands of readers and writers access the tree simultaneously. Traditional coarse-grained mutexes choke throughput, while naive lock-coupling risks deadlocks during upward node splits. The Lehman-Yao B-link tree algorithm revolutionizes concurrent tree access by adding high keys and right-sibling pointers to every node. Readers navigate the tree completely lock-free; if a concurrent node split occurs, the reader simply follows the horizontal right-sibling link in O(1) time without blocking or aborting.',
    bn: 'একক থ্রেডের ট্রি উচ্চ সমবর্তী প্রোডাকশন সিস্টেমে অকেজো হয়ে পড়ে, যেখানে হাজার হাজার রিডার ও রাইটার একসাথে একই ট্রিতে কাজ করে। মোটা দাগের গ্লোবাল মিউটেক্স থ্রুপুট ধসিয়ে দেয়, আর সরল হ্যান্ড-ওভার-হ্যান্ড লকিং নোড স্প্লিটের সময় ডেডলক তৈরি করে। লেহম্যান-ইয়াও বি-লিংক ট্রি অ্যালগরিদম প্রতিটি নোডে হাই-কি এবং ডানদিকের ভাইয়ের লিংক যোগ করে এই বিপ্লব ঘটায়। রিডাররা সম্পূর্ণ লক ছাড়াই ট্রি ঘুরে দেখতে পারে; কোনো নোড স্প্লিট হলেও লক ছাড়াই O(1) সময়ে ডানদিকের লিংক ধরে কাঙ্ক্ষিত তথ্যে পৌঁছে যায়।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'concurrency-challenge',
      text: {
        en: 'The Concurrency Crisis: Readers, Writers, and Tree Contention',
        bn: 'সমবর্তীতার সংকট: রিডার, রাইটার এবং ট্রির সংঘাত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you run thousands of concurrent database queries against an in-memory or on-disk tree, thread coordination becomes the primary system bottleneck. Placing a single global mutual exclusion lock on the root node serializes all operations, destroying multi-core scalability.',
        bn: 'যখন আপনি মেমোরি বা ডিস্কে থাকা একটি ট্রির ওপর একসাথে হাজার হাজার সমবর্তী ডেটাবেস কোয়েরি চালান, তখন থ্রেডের পারস্পরিক সমন্বয়ই সিস্টেমের মূল বাধা হয়ে দাঁড়ায়। ট্রির রুট নোডে একটিমাত্র সাধারণ মিউটেক্স লক বসালে সব কার্যক্রম ক্রমান্বয়ে আটকে যায়, যা মাল্টি-কোর প্রসেসরের গতিকে ধ্বংস করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Early database architects attempted Lock Coupling, also known as crabbing. A descending thread locks parent node P, locks child C, and only then releases the lock on P. However, when a leaf page overflows and splits, the split must propagate upwards towards the root, creating dangerous latch-ordering inversions and deadlock risks.',
        bn: 'প্রাথমিক ডেটাবেস স্থপতিরা হ্যান্ড-ওভার-হ্যান্ড লকিং বা ক্র্যাবিং পদ্ধতি ব্যবহার করতেন। নিচে নামার সময় একটি থ্রেড প্যারেন্ট নোড P লক করে, এরপর চাইল্ড C লক করে, এবং তারপর P এর লক মুক্ত করে। কিন্তু যখন কোনো পাতা উপচে পড়ে স্প্লিট হয়, তখন পরিবর্তনটি ওপরের দিকে পাঠাতে হয়, যা ডেডলক এবং ল্যাচ সংঘাতের মারাত্মক ঝুঁকি তৈরি করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'lock-coupling',
          def: {
            en: 'Hand-over-hand latching where a thread acquires a child node lock before releasing the parent node lock during downward traversal.',
            bn: 'হ্যান্ড-ওভার-হ্যান্ড লকিং যেখানে ট্রিতে নামার সময় প্যারেন্টের লক ছাড়ার আগেই চাইল্ডের লক গ্রহণ করা হয়।'
          }
        },
        {
          term: 'b-link-tree',
          def: {
            en: 'A concurrent B-Tree variant invented by Lehman and Yao that adds a high key and right-sibling link to every node, enabling lock-free reader descent.',
            bn: 'লেহম্যান ও ইয়াও উদ্ভাবিত সমবর্তী বি-ট্রি যেখানে প্রতিটি নোডে হাই-কি ও ডানদিকের লিংক থাকে, যা রিডারকে লক-মুক্ত রাখে।'
          }
        },
        {
          term: 'high-key',
          def: {
            en: 'A boundary key stored in a B-link node representing the upper bound of all keys reachable within that node\'s subtree.',
            bn: 'একটি বি-লিংক নোডে রাখা সীমানা মান যা নির্দেশ করে ওই নোডে বা তার সাব-ট্রিতে থাকা কিগুলোর সর্বোচ্চ সীমা কত।'
          }
        },
        {
          term: 'optimistic-lock-coupling',
          def: {
            en: 'A concurrency pattern where readers inspect node version counters instead of acquiring locks, re-verifying versions before committing.',
            bn: 'লক না নিয়ে কেবল নোডের সংস্করণ নম্বর যাচাই করে ডেটা পড়ার দ্রুততম সমবর্তী কৌশল।'
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
      id: 'concurrency-models-table',
      text: {
        en: 'Architectural Comparison: Three Tree Concurrency Models',
        bn: 'কাঠামোগত তুলনা: তিনটি ট্রি সমবর্তীতা কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Database storage engines have transitioned through three generations of tree concurrency designs. Global locks yielded poor throughput. Fine-grained lock-coupling introduced high lock overhead. Modern engines utilize Lehman-Yao B-link invariants and optimistic version checking.',
        bn: 'ডেটাবেস স্টোরেজ ইঞ্জিনগুলো ট্রি সমবর্তীতার ক্ষেত্রে তিনটি প্রধান প্রজন্মের মধ্য দিয়ে বিকশিত হয়েছে। গ্লোবাল লক অত্যন্ত নিম্ন থ্রুপুট দিত। বিস্তারিত লক-কাপলিংয়ে লকের বাড়তি খরচ অনেক বেশি ছিল। আধুনিক ইঞ্জিনগুলো লেহম্যান-ইয়াও বি-লিংক এবং অপটিমিস্টিক সংস্করণ যাচাই ব্যবহার করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Concurrency Strategy', bn: 'সমবর্তীতা কৌশল' },
        { en: 'Reader Overhead', bn: 'রিডারের কাজের চাপ' },
        { en: 'Writer Locking Scope', bn: 'রাইটারের লকিং পরিধি' },
        { en: 'Deadlock Guarantee', bn: 'ডেডলক সুরক্ষার নিশ্চয়তা' }
      ],
      rows: [
        [
          { en: 'Global Root Mutex', bn: 'গ্লোবাল রুট মিউটেক্স' },
          { en: 'High contention on root', bn: 'রুটে প্রচণ্ড থ্রেড সংঘাত' },
          { en: 'Locks the entire tree', bn: 'সম্পূর্ণ ট্রি লক করে দেয়' },
          { en: 'Deadlock-free but slow', bn: 'ডেডলক নেই কিন্তু ধীর' }
        ],
        [
          { en: 'Lock Coupling (Crabbing)', bn: 'লক-কাপলিং (ক্র্যাবিং)' },
          { en: 'Acquires lock on every node', bn: 'প্রতিটি নোডে লক নেয়' },
          { en: 'Locks parent and child', bn: 'প্যারেন্ট ও চাইল্ড লক করে' },
          { en: 'Deadlock risk on upward splits', bn: 'উপরের স্প্লিটে ডেডলক ঝুঁকি' }
        ],
        [
          { en: 'Lehman-Yao B-link Tree', bn: 'লেহম্যান-ইয়াও বি-লিংক ট্রি' },
          { en: 'Zero locks during traversal', bn: 'নামার সময় কোনো লক লাগে না' },
          { en: 'Locks single page and right peer', bn: 'কেবল একটি পেজ ও ডানদিকের ভাই' },
          { en: 'Guaranteed deadlock-free', bn: 'সম্পূর্ণ ডেডলক-মুক্ত' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-blink-code',
      text: {
        en: 'Executable B-Link Lock-Free Right-Hop Simulation',
        bn: 'লক-মুক্ত বি-লিংক ডানদিকের লিংকে ট্রাভার্সালের বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how a concurrent reader navigates a B-link tree without locks. When search key 40 exceeds leftNode highKey of 25 due to a split, the reader simply hops across rightSibling in O(1) time without stalling.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি প্রদর্শন করে কীভাবে একজন সমবর্তী রিডার কোনো লক ছাড়াই বি-লিংক ট্রিতে চলাচল করে। নোড স্প্লিটের কারণে যখন অনুসন্ধানের কি ৪০ বাম নোডের হাই-কি ২৫ কে ছাড়িয়ে যায়, তখন রিডার কোনো বাধা ছাড়াই O(1) সময়ে সরাসরি ডানদিকের লিংকে চলে যায়।'
      }
    },
    {
      type: 'code',
      code: `class BLinkNode {
  constructor(keys, highKey = Infinity, rightSibling = null) {
    this.keys = keys;
    this.highKey = highKey;
    this.rightSibling = rightSibling;
  }
}

function searchBLink(startNode, targetKey) {
  let curr = startNode;
  let hops = 0;

  // If target exceeds highKey due to concurrent split, follow rightSibling
  while (curr.rightSibling !== null && targetKey > curr.highKey) {
    hops++;
    curr = curr.rightSibling;
  }

  const found = curr.keys.includes(targetKey);
  return { found, nodeKeys: curr.keys, rightHops: hops };
}

const rightNode = new BLinkNode([40, 50], Infinity, null);
const leftNode = new BLinkNode([10, 20], 25, rightNode); // Split occurred! High key is 25

console.log('Searching key 20 (stays in left node):', searchBLink(leftNode, 20));
// Output: Searching key 20 (stays in left node): { found: true, nodeKeys: [ 10, 20 ], rightHops: 0 }
console.log('Searching key 40 (follows right link without lock):', searchBLink(leftNode, 40));
// Output: Searching key 40 (follows right link without lock): { found: true, nodeKeys: [ 40, 50 ], rightHops: 1 }`
    },
    {
      type: 'heading',
      id: 'optimistic-version-stamping',
      text: {
        en: 'Optimistic Concurrency Control with Version Counters',
        bn: 'সংস্করণ কাউন্টারের মাধ্যমে অপটিমিস্টিক কনকারেন্সি কন্ট্রোল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern high-throughput storage engines augment B-link trees with optimistic validation stamps. Each node embeds a 64-bit atomic counter. Writers advance the generation number to an odd value before modifying data, and bump it to an even integer upon completion. Readers snapshot this generation stamp, inspect keys without locks, and verify the counter remained steady, achieving millions of concurrent queries per second.',
        bn: 'আধুনিক উচ্চ থ্রুপুটের স্টোরেজ ইঞ্জিনগুলো বি-লিংক ট্রিতে অপটিমিস্টিক যাচাইকরণ পদ্ধতি যুক্ত করে। প্রতিটি নোডে একটি ৬৪-বিট পারমাণবিক কাউন্টার থাকে। কোনো রাইটার পরিবর্তনের আগে প্রজন্ম সংখ্যাটিকে বিজোড় করে এবং কাজ শেষে আবার জোড় সংখ্যায় উন্নীত করে। রিডাররা কোনো লক না নিয়েই মান পড়ে এবং কাউন্টার অপরিবর্তিত থাকার সত্যতা যাচাই করে প্রতি সেকেন্ডে লক্ষ লক্ষ কোয়েরি সম্পন্ন করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Lock contention elimination: Global mutex locks destroy tree scalability under multi-threaded read and write workloads.',
          bn: 'লক সংঘাত দূরীকরণ: মাল্টি-থ্রেডেড কাজের ক্ষেত্রে গ্লোবাল মিউটেক্স লক সম্পূর্ণ ট্রির কার্যক্ষমতা নষ্ট করে দেয়।'
        },
        {
          en: 'B-link high-key invariant: Adding horizontal right pointers and high keys allows readers to navigate trees without locks.',
          bn: 'বি-লিংক হাই-কি নীতি: নোডে অনুভূমিক ডান লিংক ও সর্বোচ্চ সীমা যোগ করলে রিডাররা সম্পূর্ণ লক ছাড়াই ট্রি পড়তে পারে।'
        },
        {
          en: 'Split resilience: When a node splits, concurrent readers arriving before parent updates simply hop right in O(1) time.',
          bn: 'স্প্লিটের নির্ভুলতা: নোড বিভক্ত হলেও প্যারেন্ট আপডেট হওয়ার আগেই আসা রিডাররা O(1) সময়ে ডানদিকের লিংকে গিয়ে মান পেয়ে যায়।'
        },
        {
          en: 'Optimistic version validation: Atomic 64-bit counters allow readers to verify data freshness without acquiring shared latches.',
          bn: 'অপটিমিস্টিক সংস্করণ যাচাই: পারমাণবিক ৬৪-বিট কাউন্টারের সাহায্যে রিডাররা কোনো শেয়ার্ড লক না নিয়েই ডেটার সঠিকতা নিশ্চিত করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'cg-ex1',
      kind: 'mcq',
      topic: 'b-link-tree-right-pointer-purpose',
      question: {
        en: 'In the Lehman-Yao B-link tree algorithm, why does every node store a right-sibling pointer and a high key?',
        bn: 'লেহম্যান-ইয়াও বি-লিংক ট্রি অ্যালগরিদমে প্রতিটি নোডে কেন একটি ডানদিকের ভাইয়ের পয়েন্টার এবং হাই-কি সংরক্ষণ করা হয়?'
      },
      options: [
        {
          en: 'To allow concurrent readers to navigate lock-free; if a node splits, readers looking for higher keys simply follow the right sibling pointer in O(1) time',
          bn: 'যাতে সমবর্তী রিডাররা লক ছাড়াই কাজ করতে পারে; নোড স্প্লিট হলেও বড় কি খোঁজার জন্য রিডাররা O(1) সময়ে সরাসরি ডানদিকের পয়েন্টার অনুসরণ করতে পারে'
        },
        {
          en: 'To compress the tree using gzip',
          bn: 'জিপ দিয়ে ট্রি সংকুচিত করতে'
        },
        {
          en: 'To convert binary trees into balanced hash sets',
          bn: 'বাইনারি ট্রিকে হ্যাশ সেটে রূপান্তর করতে'
        },
        {
          en: 'To prevent database tables from exceeding 1000 rows',
          bn: 'ডেটাবেস টেবিল যেন ১০০০ সারির বেশি না হয় তা ঠেকাতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'What happens if a reader visits a node immediately after it splits, before the parent node is updated?',
        bn: 'প্যারেন্ট নোড আপডেট হওয়ার আগেই কোনো রিডার যদি স্প্লিট হওয়া নোডে প্রবেশ করে তবে কী ঘটবে?'
      },
      explanation: {
        en: 'Because the right-sibling pointer links split nodes horizontally, readers never get stuck or read corrupted state even without locks.',
        bn: 'ডানদিকের পয়েন্টার স্প্লিট হওয়া নোডগুলোকে অনুভূমিকভাবে যুক্ত রাখায় রিডাররা লক ছাড়াই সবসময় সঠিক তথ্যে পৌঁছায়।'
      }
    },
    {
      id: 'cg-ex2',
      kind: 'mcq',
      topic: 'lock-coupling-deadlock-risk',
      question: {
        en: 'What fundamental risk arises when using naive lock-coupling (crabbing) during bottom-up tree balancing operations?',
        bn: 'নিচ থেকে ওপরের দিকে ট্রি ব্যালান্সিং করার সময় সাধারণ লক-কাপলিং বা ক্র্যাবিং ব্যবহার করলে কোন মারাত্মক ঝুঁকির সৃষ্টি হয়?'
      },
      options: [
        {
          en: 'Deadlock risk, because downward searches acquire locks from root to leaf, while upward splits attempt to acquire locks from leaf to root',
          bn: 'ডেডলকের ঝুঁকি, কারণ নিম্নমুখী অনুসন্ধানগুলো রুট থেকে পাতার দিকে লক নেয়, কিন্তু ওপরমুখী স্প্লিটগুলো পাতা থেকে রুটের দিকে লক নিতে চেষ্টা করে'
        },
        {
          en: 'Memory leaks that delete the operating system kernel',
          bn: 'মেমোরি লিক যা অপারেটিং সিস্টেম কার্নেল মুছে দেয়'
        },
        {
          en: 'The tree immediately loses all odd numbers',
          bn: 'ট্রি সাথে সাথে সমস্ত বিজোড় সংখ্যা হারিয়ে ফেলে'
        },
        {
          en: 'Disk sectors are formatted automatically',
          bn: 'ডিস্ক সেক্টরগুলো স্বয়ংক্রিয়ভাবে ফরম্যাট হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider two threads trying to lock the same two nodes in reverse directions.',
        bn: 'বিপরীত দিক থেকে আসা দুটি থ্রেড একই সাথে একে অপরের কাঙ্ক্ষিত নোডগুলো লক করার চেষ্টা করলে কী ঘটে?'
      },
      explanation: {
        en: 'Lock ordering inversions between downward walkers and upward node splits violate strict lock hierarchies, causing circular deadlocks.',
        bn: 'নিচে নামা এবং ওপরে ওঠার বিপরীতমুখী লক নেওয়ার প্রবণতা লকের স্তরবিন্যাস লঙ্ঘন করে বৃত্তাকার ডেডলক সৃষ্টি করে।'
      }
    },
    {
      id: 'cg-ex3',
      kind: 'mcq',
      topic: 'optimistic-version-counter-semantics',
      question: {
        en: 'In optimistic concurrency control using version counters, how does a reader detect that a concurrent writer modified a node during traversal?',
        bn: 'সংস্করণ কাউন্টার ব্যবহার করে অপটিমিস্টিক কনকারেন্সিতে একজন রিডার কীভাবে বুঝতে পারে যে পড়ার সময় কোনো রাইটার নোডটি পরিবর্তন করেছে?'
      },
      options: [
        {
          en: 'The reader observes an odd version counter or finds that the version counter changed between reading start and finish',
          bn: 'রিডার একটি বিজোড় সংস্করণ সংখ্যা দেখতে পায় অথবা পড়ার শুরু ও শেষের মধ্যে সংস্করণ সংখ্যার পরিবর্তন লক্ষ্য করে'
        },
        {
          en: 'The operating system sends an interrupt signal to the CPU',
          bn: 'অপারেটিং সিস্টেম সিপিইউতে একটি ইন্টারাপ্ট সিগন্যাল পাঠায়'
        },
        {
          en: 'The tree height drops to 0 immediately',
          bn: 'ট্রির উচ্চতা সাথে সাথে ০ এ নেমে আসে'
        },
        {
          en: 'The disk drive stops spinning',
          bn: 'ডিস্ক ড্রাইভ ঘোরা বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Writers hold odd numbers while modifying and finalize with even numbers.',
        bn: 'রাইটার পরিবর্তনের সময় বিজোড় সংখ্যা রাখে এবং পরিবর্তন শেষ হলে জোড় সংখ্যায় উন্নীত করে।'
      },
      explanation: {
        en: 'An odd counter flags an ongoing write; a counter mismatch confirms a modification occurred during reading, triggering a safe retry.',
        bn: 'বিজোড় সংখ্যা চলন্ত লেখার প্রমাণ দেয়; আর সংস্করণ সংখ্যার অমিল নিশ্চিত করে যে পড়ার মাঝে পরিবর্তন হয়েছে, যা নিরাপদ পুনঃচেষ্টার সূচনা করে।'
      }
    }
  ],
  quiz: {
    id: 'the-concurrent-grove-quiz',
    title: {
      en: 'Concurrent Trees and Lehman-Yao B-Link Quiz',
      bn: 'সমবর্তী ট্রি এবং লেহম্যান-ইয়াও বি-লিংক কুইজ'
    },
    questions: [
      {
        id: 'cg-q1',
        kind: 'mcq',
        topic: 'b-link-tree-high-key-definition',
        question: {
          en: 'What does the `highKey` property represent in a Lehman-Yao B-link tree node?',
          bn: 'একটি লেহম্যান-ইয়াও বি-লিংক ট্রি নোডে `highKey` বৈশিষ্ট্যটি কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'The upper bound of all keys stored in this node; any query looking for a key greater than highKey must follow the right sibling link',
            bn: 'এই নোডে সংরক্ষিত সমস্ত কি-এর সর্বোচ্চ সীমা; highKey এর চেয়ে বড় কোনো মান খুঁজতে হলে অবশ্যই ডানদিকের ভাইয়ের লিংকে যেতে হবে'
          },
          {
            en: 'The total number of CPU cores in the server',
            bn: 'সার্ভারে থাকা মোট সিপিইউ কোর সংখ্যা'
          },
          {
            en: 'The maximum allowed file size of the database',
            bn: 'ডেটাবেসের সর্বোচ্চ অনুমোদিত ফাইল সাইজ'
          },
          {
            en: 'The port number of the network socket',
            bn: 'নেটওয়ার্ক সকেটের পোর্ট নম্বর'
          }
        ],
        answer: 0,
        hint: {
          en: 'If targetKey > highKey, does the key reside in the current node or in the right neighbor?',
          bn: 'যদি targetKey > highKey হয়, তবে কি-টি কি বর্তমান নোডে আছে নাকি তার ডানদিকের প্রতিবেশীতে আছে?'
        },
        explanation: {
          en: 'The highKey establishes a strict boundary. Keys greater than highKey have migrated to the right sibling due to a node split.',
          bn: 'highKey একটি স্পষ্ট সীমা নির্ধারণ করে। এর চেয়ে বড় মানগুলো স্প্লিট হওয়ার কারণে ডানদিকের প্রতিবেশীতে স্থানান্তরিত হয়েছে।'
        }
      },
      {
        id: 'cg-q2',
        kind: 'mcq',
        topic: 'reader-writer-starvation',
        question: {
          en: 'In databases using standard shared/exclusive (read/write) locks, what is the write starvation problem?',
          bn: 'সাধারণ শেয়ার্ড ও এক্সক্লুসিভ লক ব্যবহারকারী ডেটাবেসে রাইটার স্টারভেশন (অনাহার) সমস্যা বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'A continuous stream of concurrent readers holding shared locks prevents a writer from acquiring an exclusive lock, blocking write operations indefinitely',
            bn: 'ধারাবাহিক রিডারদের শেয়ার্ড লকের কারণে একজন রাইটার কখনই এক্সক্লুসিভ লক পায় না, যা লেখার কাজকে অনির্দিষ্টকালের জন্য আটকে রাখে'
          },
          {
            en: 'The hard drive runs out of physical disk space',
            bn: 'হার্ড ড্রাইভে স্থান ফুরিয়ে যায়'
          },
          {
            en: 'The server power supply fails',
            bn: 'সার্ভারের পাওয়ার সাপ্লাই নষ্ট হয়ে যায়'
          },
          {
            en: 'All tree nodes are converted into linked lists',
            bn: 'সমস্ত ট্রি নোড লিংকড লিস্টে পরিণত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Can an exclusive lock be granted while shared locks are still held by readers?',
          bn: 'রিডাররা শেয়ার্ড লক ধরে রাখাকালীন কোনো রাইটারকে কি এক্সক্লুসিভ লক দেওয়া সম্ভব?'
        },
        explanation: {
          en: 'As long as at least one reader holds a shared lock, incoming readers may starve waiting writers unless write-preferring locks or lock-free designs are used.',
          bn: 'যতক্ষণ একজন রিডারেরও শেয়ার্ড লক থাকে, নতুন রিডারদের আগমনে রাইটার অনির্দিষ্টকাল আটকে থাকে যদি না লক-ফ্রি বা রাইট-অগ্রাধিকার পদ্ধতি থাকে।'
        }
      },
      {
        id: 'cg-q3',
        kind: 'mcq',
        topic: 'b-link-tree-time-complexity-right-hop',
        question: {
          en: 'When a concurrent reader encounters a recently split node in a B-link tree, how many right-sibling hops does it make in practice?',
          bn: 'একটি বি-লিংক ট্রিতে কোনো রিডার সম্প্রতি স্প্লিট হওয়া নোডে পৌঁছালে বাস্তবে তাকে সর্বোচ্চ কয়টি ডানদিকের হপ দিতে হয়?'
        },
        options: [
          {
            en: 'Typically only 1 hop (O(1) time), reaching the sibling page directly without restarting traversal from the root',
            bn: 'সাধারণত মাত্র ১টি হপ (O(1) সময়), রুট থেকে পুনরায় শুরু না করেই সরাসরি ভাইয়ের পেজে পৌঁছে যায়'
          },
          {
            en: 'O(N) hops through every node in the tree',
            bn: 'ট্রির প্রতিটি নোডের মধ্য দিয়ে O(N) হপ'
          },
          {
            en: 'Exactly 1000 hops always',
            bn: 'সর্বদা ঠিক ১০০০ হপ'
          },
          {
            en: 'Zero hops because traversal must abort immediately',
            bn: 'শূন্য হপ কারণ অনুসন্ধান সাথে সাথে বাতিল করতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'A node splits into two siblings. Following the right link moves to the newly created sibling immediately.',
          bn: 'একটি নোড বিভক্ত হয়ে দুটি ভাই তৈরি করে। ডানদিকের লিংক ধরে সাথে সাথে নতুন ভাইয়ের পেজে চলে যাওয়া যায়।'
        },
        explanation: {
          en: 'Because splits divide nodes into adjacent right siblings, a single O(1) step recovers from the split, avoiding expensive root retracing.',
          bn: 'যেহেতু স্প্লিট নোডগুলোকে পাশাপাশি যুক্ত করে, তাই একটিমাত্র O(1) ধাপে রুট থেকে পুনরায় না ঘুরে সরাসরি সঠিক পেজে পৌঁছানো যায়।'
        }
      },
      {
        id: 'cg-q4',
        kind: 'mcq',
        topic: 'postgresql-gist-blink-usage',
        question: {
          en: 'Which major open-source relational database uses Lehman-Yao style B-link invariants in its internal indexing engine?',
          bn: 'কোন প্রধান ওপেন-সোর্স রিলেশনাল ডেটাবেস তার অভ্যন্তরীণ ইনডেক্সিং ইঞ্জিনে লেহম্যান-ইয়াও ধাঁচের বি-লিংক নীতি ব্যবহার করে?'
        },
        options: [
          {
            en: 'PostgreSQL, in its standard B-tree, GiST, and SP-GiST indexing implementations',
            bn: 'PostgreSQL, তার প্রমিত B-tree, GiST এবং SP-GiST ইনডেক্সিং পদ্ধতিতে'
          },
          {
            en: 'MS Paint graphics suite',
            bn: 'এমএস পেইন্ট গ্রাফিক্স সফটওয়্যার'
          },
          {
            en: 'Bash shell command prompt',
            bn: 'ব্যাশ শেল কমান্ড প্রম্পট'
          },
          {
            en: 'HTML5 browser video player',
            bn: 'এইচটিএমএল৫ ব্রাউজার ভিডিও প্লেয়ার'
          }
        ],
        answer: 0,
        hint: {
          en: 'It is one of the most popular enterprise open-source SQL databases in the world.',
          bn: 'এটি বিশ্বের অন্যতম জনপ্রিয় এন্টারপ্রাইজ ওপেন-সোর্স এসকিউএল ডেটাবেস।'
        },
        explanation: {
          en: 'PostgreSQL’s nbtree implementation is based directly on the Lehman & Yao B-link tree algorithm, delivering lock-free reader scalability.',
          bn: 'PostgreSQL এর nbtree মূলত লেহম্যান ও ইয়াও বি-লিংক ট্রি অ্যালগরিদমের ওপর ভিত্তি করে তৈরি, যা লক-মুক্ত রিডার স্কেলেবিলিটি নিশ্চিত করে।'
        }
      }
    ]
  }
};
